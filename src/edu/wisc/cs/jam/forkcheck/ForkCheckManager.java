
package edu.wisc.cs.jam.forkcheck;

import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
import java.util.Set;

import edu.wisc.cs.automaton.State;

import edu.wisc.cs.jam.JAM;
import edu.wisc.cs.jam.JAMOpts;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.ExpSymbol;
import edu.wisc.cs.jam.Traversal;
import edu.wisc.cs.jam.Traversal.Traverser;
import edu.wisc.cs.jam.Transform;
import edu.wisc.cs.jam.CheckManager;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.Semantics;
import edu.wisc.cs.jam.Policy;
import edu.wisc.cs.jam.Predicate;
import edu.wisc.cs.jam.RuntimeCheck;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.PredicateType;

import edu.wisc.cs.jam.js.ExpUtil;
import edu.wisc.cs.jam.js.JSExp;

public class ForkCheckManager implements CheckManager, Traverser {

  // Various aspects of the analysis that we may need a handle for.
  private SourceManager sm;
  private Semantics semantics;
  private Policy policy;

  // Information about checks that were present in the initial
  // source code provided to the analysis.
  private int originalCheckCount;
  private Map<Exp,List<RuntimeCheck>> originalChecks;

  // All checks (including those that were in the original
  // source code) that are applied to the analyzed program.
  private List<RuntimeCheck> activeChecks;

  public ForkCheckManager(JAM jam) {
    sm = jam.getSourceManager();
    semantics = jam.getSemantics();
    policy = jam.getPolicy();

    activeChecks = new ArrayList<RuntimeCheck>();
    originalChecks = new HashMap<Exp,List<RuntimeCheck>>();
  }

  @Override
  public void loadExistingChecks() {
    Exp root = sm.getRoot();
    sm.traverse(root, this);
  }

  // Get a list of checks that were applied to this node already in the
  // original source code.
  protected List<RuntimeCheck> getOriginalChecks(Exp e) {
    List<RuntimeCheck> ret = originalChecks.get(e);
    if (ret != null) {
      ret = new ArrayList<RuntimeCheck>(ret);
    }
    return ret;
  }

  public SourceManager getSourceManager() {
    return sm;
  }

  public Semantics getSemantics() {
    return semantics;
  }

  public Policy getPolicy() {
    return policy;
  }

  @Override
  public List<RuntimeCheck> getChecks() {
    return new ArrayList<RuntimeCheck>(activeChecks);
  }

  @Override
  public int getCheckCount() {
    return activeChecks.size() - originalCheckCount;
  }

  @Override
  public RuntimeCheck getCheck(ExpSymbol sym, Policy.Edge e) {
    List<RuntimeCheck> checks = sym.getChecks(); 
    for (RuntimeCheck rc : checks) {
      if (rc.getPolicyEdge() == e) {
        return rc;
      }
    }
    RuntimeCheck ret = new ForkCheck(sm, sym.getExp(), e);
    sym.addCheck(ret);
    return ret;
  }

  @Override
  public synchronized void addCheck(RuntimeCheck c) {
    if (JAMOpts.debug) FileUtil.writeToFile(c + "\n", "check-" + getCheckCount(), true);
    c.apply();
    if (!activeChecks.contains(c)) activeChecks.add(c);
  }

  @Override
  public synchronized void removeCheck(RuntimeCheck c) {
    assert !c.isLocked() : "Attempting to remove a locked check:\n" + c;
    c.unapply();
    activeChecks.remove(c);
  }

  @Override
  public void initChecks(ExpSymbol sym) {
    Exp e = sym.getExp();
    if (e == null) return;
    List<RuntimeCheck> cs = getOriginalChecks(e);
    if (cs == null) return;
    for (RuntimeCheck rc : cs) {
      sym.addCheck(rc);      
    }
  }

  @Override
  public boolean shouldTraverse(Traversal traversal, Exp e, Exp parent) {
    return true;
  }

  @Override
  public void visit(Traversal t, Exp e, Exp parent) {
    // Check this first to avoid recording an EXPR_RESULT and it's
    // child.
    if (!e.isCall()) return;
    // We're interested in nodes representing pre-existing
    // instrumentation.
    if (!isInstrumentation(e)) return;

    // Get the policy states corresponding to the integers in the check.
    int pre = getCheckSource(e);
    int post = getCheckDestination(e);
    State s0 = policy.getState(pre);
    State s1 = policy.getState(post);

    // Get the predicate observed by the check. 
    // First create a predicate from the string parameter's text.
    String predstr = e.getChild(2).toCode();
    // Strip the quotes.
    predstr = predstr.substring(1, predstr.length() - 1);
    Predicate pred = semantics.getConditionPredicate(predstr);
    // Then let the policy tell you what edge that corresponds to.
    Policy.Edge pe = policy.getEdge(pred, s0, s1);
    
    // If the policy did not return an edge, this is unrelated
    // instrumentation.
    if (pe == null) return;

    pred = pe.getSymbol().getPredicate();

    // Get the node that's being guarded.
    Exp loc = getCheckLocation(e);

    // Create the object representation of the check.
    RuntimeCheck c = new ForkCheck(sm, loc, pe);
    // Note that the check was already in the source code.
    c.setOriginal();

    List<RuntimeCheck> checklist = originalChecks.get(loc);
    if (checklist == null) {
      checklist = new ArrayList<RuntimeCheck>();
      originalChecks.put(loc, checklist);
    }
    checklist.add(c);
    originalCheckCount++;

    activeChecks.add(c);

    Dbg.out("Found existing check: " + c, 3);
  }

  public static Exp getCheckLocation(Exp check) {
    if (check.is(JSExp.EXPR_RESULT)) check = check.getFirstChild();
    assert isInstrumentation(check) : "Attempting to get the source state of a non-check node.";

    Exp loc = ExpUtil.getEnclosingStatement(check);
    while (isInstrumentation(loc)) {
      loc = loc.getNext();
    }

    assert loc != null : "Null check location: " + check;

    return loc;
  }

  // Get the state id of the policy transition source. This function
  // assumes that check is actually a runtime check.
  public static int getCheckSource(Exp check) {
    if (check.is(JSExp.EXPR_RESULT)) check = check.getFirstChild();
    assert isInstrumentation(check) : "Attempting to get the source state of a non-check node.";
    
    // The second-to-last argument of checkState is the source state.
    String arg = check.getChild(ForkCheck.CHECK_ARGUMENT_COUNT - 1).toCode();

    int sid = -2;
    try {
      sid = Integer.parseInt(arg);
    } catch (NumberFormatException ex) {
      Dbg.warn("Invalid source state in call to " + ForkCheck.CHECK_FUNCTION);
    }

    return sid;
  }

  // Get the state id of the policy transition destination. This
  // function assumes that check is actually a runtime check.
  public static int getCheckDestination(Exp check) {
    if (check.is(JSExp.EXPR_RESULT)) check = check.getFirstChild();
    assert isInstrumentation(check) : "Attempting to get the destination state of a non-check node.";

    // The last argument of checkState is the destination state.
    String arg = check.getChild(ForkCheck.CHECK_ARGUMENT_COUNT).toCode();

    int sid = -2;
    try {
      sid = Integer.parseInt(arg);
    } catch (NumberFormatException ex) {
      Dbg.warn("Invalid destination state in call to " + ForkCheck.CHECK_FUNCTION);
    }

    return sid;
  }

  // Determine if the given node is JAM forking instrumentation.
  // %%% How to protect against a malicious insertion of a futile check?
  @Override
  public boolean isRuntimeCheck(Exp e) {
    return isInstrumentation(e);
  }

  public static boolean isInstrumentation(Exp e) {
    if (e == null) return false;
    if (e.is(JSExp.EXPR_RESULT)) e = e.getFirstChild();
    if (!e.isCall()) return false;

    Exp name = e.getFirstChild();
    if (!name.isName()) return false;

    String checktext = name.toCode();
    if (!checktext.equals(ForkCheck.CHECK_FUNCTION)) {
      return false;
    }

    // A CALL node is laid out with target function reference as
    // child 0 and each argument as another child.
    if (e.getChildCount() != ForkCheck.CHECK_ARGUMENT_COUNT + 1) {
      Dbg.warn("Invalid call to " + ForkCheck.CHECK_FUNCTION);
      return false;
    }

    return true;
  }

  // For forking enforcement, the policy evaluation is hard-coded
  // entirely in the browser, so no extra JavaScript is needed.
  @Override
  public Exp getBasePolicyCode() {
    return null;
  }

  @Override
  public Exp getSpecializedPolicyCode() {
    return null;
  }

  @Override
  public Set<PredicateType> getPredicateTypes(String check) {
    // %%% Should return something.
    return null;
  }
}

