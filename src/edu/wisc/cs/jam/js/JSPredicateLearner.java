package edu.wisc.cs.jam.js;

import java.util.List;
import java.util.ArrayList;

import edu.wisc.cs.jam.CounterExample;
import edu.wisc.cs.jam.Predicate;
import edu.wisc.cs.jam.PredicateLearner;
import edu.wisc.cs.jam.Semantics;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.ExpSymbol;
import edu.wisc.cs.jam.JAM;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.StringUtil;

public class JSPredicateLearner implements PredicateLearner {

  private Semantics semantics;

  private List<Predicate> predicates;
  private List<String> sentinels;

  public JSPredicateLearner(JAM jam, List<Predicate> preds) {
    semantics = jam.getSemantics();
    predicates = new ArrayList<Predicate>(preds);
  }

  /**
   * Learns a new predicate from the given counterexample. The
   * counterexample is assumed to be invalid and carry with it a series
   * of sentinels ending with the invalid transition.
   * 
   * @param cex the counterexample to be analyzed
   * @return a new predicate or null if a predicate could not be learned
   */
  @Override
  public Predicate learn(CounterExample cex) {

    // Identify the prefix of the sentinel sequence representing the
    // check before any backtracking occurred. Backtracking causes
    // sentinels to be printed multiple times in an order that's not
    // useful.
    List<String> sents = cex.getSentinels();
    sentinels = new ArrayList<String>();
    int lastid = Integer.MAX_VALUE;
    for (int i=sents.size()-1; i>=0; i--) {
      String[] ssplit = sents.get(i).split(":");
      String id = ssplit[ssplit.length - 1].trim();
      try {
        int thisid = Integer.parseInt(id);
        if (thisid > lastid) {
          sentinels.clear();
        }
        sentinels.add(sents.get(i));
        lastid = thisid;
      } catch (NumberFormatException ex) {
        System.err.println("Invalid sentinel id: " + id);
      }
    }

    // Examine each sentinel to determine if a useful predicate can
    // be learned.
    for (int i=0; i<sentinels.size(); i++) {
      List<Predicate> newpreds = getSentinelPredicate(sentinels.get(i));
      if (newpreds == null || newpreds.size() == 0) continue;

      for (Predicate newpred : newpreds) {
        // Don't collect duplicate predicates.
        if (newpred != null && !newpred.matchesAny(predicates)) {
          // We've found a new predicate.
          if (JAM.Opts.debug) {
            FileUtil.writeToFile(newpred + "\n", "predicate", true);
          }
          // In case this learner is reused.
          predicates.add(newpred);

          //return semantics.getConditionPredicate("y === 3");
          semantics.addToNamesOfInterest(newpred);
          return newpred;
        }
      }
    }

    // No new predicate could be found.
    return null;
  }

  // %%% Move these to some Util module.
  protected boolean isSymbolic(String val) {
    if (val.startsWith("s")) return true;
    return false;
  }

  protected boolean isDynamicAddress(String val) {
    if (val.startsWith("###")) return true;
    return false;
  }

  protected boolean isLearnable(String val) {
    if (isDynamicAddress(val)) return false;
    if (isSymbolic(val)) return false;
    if (val.equals("NONE")) return false;
    // %%% Can "this" be useful?
    if (val.equals("this")) return false;
    return true;
  }

  protected Predicate makePropValuePredicate(String obj, String prop, String oval, String pval) {
    assert !isSymbolic(pval) : "Property value is symbolic: " + pval;
    assert !isDynamicAddress(pval) : "Property value is dynamic address: " + pval;

    String lhs = null;
    if (StringUtil.isQuoted(prop)) {
      lhs = obj + "." + StringUtil.unquote(prop);
    } else {
      lhs = obj + "[" + prop + "]";
    }
    
    // %%% Perhaps learn conjunct obj === oval

    String stmt = lhs + " === " + pval;

    return semantics.getConditionPredicate(stmt);
  }

  protected Predicate makeValuePredicate(String name, String value) {
    if (isSymbolic(value)) return null;

    String stmt = name + " === " + value;
    return semantics.getConditionPredicate(stmt);
  }

  protected Predicate makeFunctionEntryPredicate(ExpSymbol sym) {
    Exp e = sym.getExp();
    String f;
    // The {main} dummy function has type BLOCK.
    if (!e.isFunction()) {
      f = "{main}";
    } else {
      f = e.getChild(0).toCode();
    }
    return makeFunctionEntryPredicate(f);
  }

  protected Predicate makeFunctionEntryPredicate(String func) {
    String stmt = "jam#invoke(" + func + ")";
    return semantics.getConditionPredicate(stmt);
  }

  protected Predicate makeReturnValuePredicate(String value) {

    if (isDynamicAddress(value)) return null;

    // %%% Need to escape strings?
    String stmt = "jam#retval(" + value + ")";

    return semantics.getConditionPredicate(stmt);
  }
  
  protected Predicate makeConditionPredicate(ExpSymbol sym) {
    Exp s = sym.getExp();
    Exp cond = ExpUtil.getCondition(s);
    if (cond == null) return null;

    // Remove the parent NOT (!) node, for simplification.
    if (cond.getType() == JSExp.NOT) {
      cond = cond.getFirstChild();
    }

    // %%% Only learn simple names currently.
    if (!cond.isName()) {
      Dbg.out("WARNING: Learning condition predicate not supported: "
        + cond.toCode(), 2);
      return null;
    }

    return makeConditionPredicate(sym.getExp().toCode());
  }

  protected Predicate makeConditionPredicate(String var) {
    // %%% Check that var is just a variable name
    // %%% make more robust
    if (var.equals("true")) return null;
    return semantics.getConditionPredicate(var);
  }

  // Scans the sentinel list in reverse order, applying the appropriate 
  // sentinel predicate learner along the way
  protected List<Predicate> getSentinelPredicate(String sentinel) {
    List<Predicate> ret = new ArrayList<Predicate>();

    String[] sentSplits = sentinel.split(" : ");
    String sentType = sentSplits[0].trim();

    if (sentType.equals("constructor")) {
      assert sentSplits.length == 4 : "Invalid constructor sentinel: " + sentinel;

      String var = sentSplits[1].trim();
      String constr = sentSplits[2].trim();

      // %%% Skip these for now.
      //ret.add(makePropValuePredicate(var, "\"constructor\"", "NONE", constr));
    } else if (sentType.equals("condition")) {
      assert sentSplits.length == 3 : "Invalid condition sentinel: " + sentinel;

      String var = sentSplits[1].trim();
      // %%% Temporarily disabling because both "v" and "v == true"
      // %%% were being learned.
      //ret.add(makeConditionPredicate(var));

    } else if (sentType.equals("value")) {
      assert sentSplits.length == 4 : "Invalid value sentinel: " + sentinel;

      String var = sentSplits[1].trim();
      String val = sentSplits[2].trim();

      // Don't learn symbolic values or memory locations.
      if (!isLearnable(val)) return null;

      ret.add(makeValuePredicate(var, val));

    } else if (sentType.equals("return")) {
      assert sentSplits.length == 3 : "Invalid return sentinel: " + sentinel;

      String val = sentSplits[1].trim();

      // Don't learn symbolic return values.
      if (isSymbolic(val)) return null;

      ret.add(makeReturnValuePredicate(val));
    } else if (sentType.equals("propvalue")) {
      assert sentSplits.length == 6 : "Invalid propvalue sentinel: " + sentinel;

      String obj = sentSplits[1].trim();
      String prop = sentSplits[2].trim();
      String oval = sentSplits[3].trim();
      String pval = sentSplits[4].trim();

      // Don't learn symbolic return values.
      if (!isLearnable(oval) && !isLearnable(pval)) return null;

      // Dispatch based on concreteness of learnable facts.
      if (isLearnable(pval)) {
        ret.add(makePropValuePredicate(obj, prop, oval, pval));
      }
      if (isLearnable(oval)) {
        ret.add(makeValuePredicate(obj, oval));
      }

    } else if (sentType.equals("functionentry")) {
      assert sentSplits.length == 4 : "Invalid functionentry sentinel: " + sentinel;

      String func = sentSplits[2].trim();
      if (isSymbolic(func)) return null;

      ret.add(makeFunctionEntryPredicate(func));
    }

    return ret;
  }
}

