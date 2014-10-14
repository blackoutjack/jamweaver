package edu.wisc.cs.jam.js;

import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.util.HashSet;

import edu.wisc.cs.jam.PolicyLanguage;
import edu.wisc.cs.jam.DataTransition;
import edu.wisc.cs.jam.DataState;
import edu.wisc.cs.jam.ExpSymbol;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.Predicate;
import edu.wisc.cs.jam.PredicateType;
import edu.wisc.cs.jam.PredicateValue;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.SourceManager;

import edu.wisc.cs.jam.env.NativeUtil;

import edu.wisc.cs.jam.js.JSPolicyLanguage.JSPredicateType;

public class JSSyntaxAnalysis {
  
  protected PolicyLanguage pl;
  protected SourceManager sm;
  
  public JSSyntaxAnalysis(SourceManager s) {
    sm = s;
    pl = new JSPolicyLanguage();
  }

  protected boolean definitelyNoCall(Exp exp) {
    if (exp.isBlock())
      return false;
    // Don't descend into blocks for control statements.
    if (exp.containsType(JSExp.CALL, false))
      return false;
    if (exp.containsType(JSExp.NEW, false))
      return false;
    // %%% Are there other node types of interest?
    return true;
  }

  protected Exp getArgument(Exp callexp, int idx) {
    int callargs = callexp.getChildCount() - 1;
    if (callargs > idx) {
      return callexp.getChild(idx + 1);
    }
    return JSExp.create(sm, sm.nodeFromCode("#undefined"));
  }

  protected boolean canBeStrictlyEqual(Exp op0, Exp op1) {
    // We can possibly rule it out if both args are primitives.
    if (ExpUtil.isPrimitive(op0) && ExpUtil.isPrimitive(op1)) {
      String str0 = op0.toCode();
      String str1 = op1.toCode();
      return str0.equals(str1);
    }
    // Don't compare names, since two variables can hold the same value.
    // %%% Could check names for NULL type.
    return true;
  }

  protected boolean canBeStrictlyUnequal(Exp op0, Exp op1) {
    // We can possibly rule it out if both args are primitives.
    if (ExpUtil.isPrimitive(op0) && ExpUtil.isPrimitive(op1)) {
      String str0 = op0.toCode();
      String str1 = op1.toCode();
      return !str0.equals(str1);
    } else if (op0.isName() && op1.isName()) {
      String str0 = op0.getString();
      String str1 = op1.getString();
      return !str0.equals(str1);
    }
    // %%% Could check names for NULL type.
    return true;
  }

  protected List<Exp> getPossibleValues(Exp polexp, Exp progexp) {
    List<Exp> ret = new ArrayList<Exp>();
    if (polexp.isCall() && polexp.getChild(0).isName()
        && polexp.getChild(0).getString().equals("jam#arg")) {

      // There must be a CALL/NEW for the arg predicate to be true.
      if (definitelyNoCall(progexp)) {
         Exp arg = JSExp.create(sm, sm.nodeFromCode("#undefined"));
         ret.add(arg);
         return ret;
      }

      // Get the zero-indexed argument index.
      Exp argnum = polexp.getChild(1);
      Integer argint = ExpUtil.getInteger(argnum);
      if (argint == null) {
        Dbg.warn("Syntax analysis does not support predicate: " + polexp.toCode());
        return null;
      }
      
      List<Exp> calls = new ArrayList<Exp>();
      progexp.findType(JSExp.CALL, calls, false);
      progexp.findType(JSExp.NEW, calls, false);

      Exp op1 = polexp.getChild(1);
      for (Exp c : calls) {
        Exp arg = getArgument(progexp, argint.intValue());
        ret.add(arg);
      }
      // Getting here indicates that no callsite can possibly match
      // this argument predicate.
      return ret;
    } else if (ExpUtil.isPrimitive(polexp)) {
      // Easy case: the policy value is a primitive literal.
      ret.add(polexp);
      return ret;
    }

    return null;
  }

  protected boolean cannotAffectType(Exp conj, Exp progexp) {
    // %%%
    return false;
  }

  protected boolean cannotAffectStrictEquality(Exp polexp, Exp progexp) {

    // Special case testing existence of an argument.
    assert polexp.getChildCount() == 2;

    Exp op0 = polexp.getChild(0);
    Exp op1 = polexp.getChild(1);
    
    if (op0.isName()) {
      String opname0 = op0.getString();
      if (!NativeUtil.isNativeLocation(opname0)) {
        // See if the name can be the target of a write.
        if (!definitelyNoWrite(progexp, opname0, true)) {
          return false;
        }
      }
    } else if (!ExpUtil.isPrimitive(op0)) {
      return false;
    }
    
    if (op1.isName()) {
      String opname1 = op1.getString();
      if (!NativeUtil.isNativeLocation(opname1)) {
        // See if the name can be the target of a write.
        if (!definitelyNoWrite(progexp, opname1, true)) {
          return false;
        }
      }
    } else if (!ExpUtil.isPrimitive(op1)) {
      return false;
    }

    // Getting here means that each operand is either a name or a
    // primitive, and none of the names can be changed.
    return true;
  }

  protected boolean definitelyFalseStrictEquality(Exp conj, Exp exp, boolean eq) {
    // Special case testing existence of an argument.
    assert conj.getChildCount() == 2;

    Exp op0 = conj.getChild(0);
    Exp op1 = conj.getChild(1);

    List<Exp> lhsValues = getPossibleValues(op0, exp);
    List<Exp> rhsValues = getPossibleValues(op1, exp);

    // Null values list indicates that the possible values of the
    // expression can't be statically constrained.
    if (lhsValues == null || rhsValues == null)
      return false;
    // An expression should always have some value.
    assert lhsValues.size() > 0 && rhsValues.size() > 0;

    for (Exp lval : lhsValues) {
      for (Exp rval : rhsValues) {
        if (eq) {
          if (canBeStrictlyEqual(lval, rval))
            return false;
        } else {
          if (canBeStrictlyUnequal(lval, rval))
            return false;
        }
      }
    }

    // Getting here means that 
    return true;
  }
  
  protected boolean definitelyFalseTypePredicate(Exp polexp, Exp progexp) {
    assert polexp.isCall() && polexp.getChild(0).getString().equals("jam#type");
    assert polexp.getChildCount() == 3;
    Exp exp = polexp.getChild(1);
    Exp typ = polexp.getChild(2);

    if (!typ.isString()) {
      Dbg.warn("Unexpected type for jam#type predicate: " + typ.toCode());
      return false;
    }

    List<Exp> expvals = getPossibleValues(exp, progexp);
    if (expvals == null) {
      // Null values list indicates that the possible values of the
      // expression can't be statically constrained.
      return false;
    }

    String typstr = typ.getString();
    for (Exp expval : expvals) {
      if (!ExpUtil.isPrimitive(expval)) {
        return false;
      }
      if (typstr.equals("String")) {
        if (expval.isString())
          return false;
      } else if (typstr.equals("Boolean")) {
        if (expval.isBoolean())
          return true;
      } else if (typstr.equals("Number")) {
        if (expval.isNumber())
          return false;
      } else if (typstr.equals("Null")) {
        if (expval.toCode().equals("#null"))
          return false;
      } else if (typstr.equals("Undefined")) {
        if (expval.toCode().equals("#undefined"))
          return false;
      } else if (typstr.equals("Reference") || typstr.equals("Type")) {
        // This shouldn't come up, and I'm not exactly sure what it
        // would mean. But we can just be conservative.
        return false;
      } else if (typstr.equals("Object")) {
        // We've already confirmed the expression is a primitive.
      } else {
        Dbg.warn("Unknown type for jam#type predicate: " + typstr);
        return false;
      }
    }
    
    return true;
  }

  protected boolean definitelyNoRead(Exp exp, String prop) {
    boolean inFunctionScope = inSimpleFunctionScope(exp);
    Set<String> names = new HashSet<String>();
    exp.findNames(names, false);
    for (String name : names) {
      if (inFunctionScope) {
        // %%% Could safely skip if there is a shadowing declaration.
      }
      if (name.equals(prop))
        return false;
    }

    List<Exp> accessors = new ArrayList<Exp>();
    exp.findType(JSExp.GETELEM, accessors, false);
    exp.findType(JSExp.GETPROP, accessors, false);
    for (Exp acc : accessors) {
      Exp accprop = acc.getChild(1);
      if (accprop.isString()) {
        String propname = accprop.getString();
        if (propname.equals(prop)) {
          return false;
        }
      } else {
        return false;
      }
    }
      
    return true;
  }

  protected boolean definitelyNoWrite(Exp exp, String prop, boolean useScope) {
    boolean inFunctionScope = useScope || inSimpleFunctionScope(exp);
    if (!inFunctionScope) {
      if (exp.containsType(JSExp.VAR, false) || exp.containsType(JSExp.FUNCTION, false)) {
        if (prop == null) {
          return false;
        } else {
          // Even simple declarations (without initialization) write
          // |undefined| to the property.
          List<Exp> subs = new ArrayList<Exp>();
          exp.findType(JSExp.VAR, subs, false);
          List<Exp> subfuns = new ArrayList<Exp>();
          exp.findType(JSExp.FUNCTION, subfuns, false);
          for (Exp subfun : subfuns) {
            if (subfun.isDeclaration()) {
              subs.add(subfun);
            }
          }

          for (Exp sub : subs) {
            Exp lhs = sub.getAssignLHS();
            assert lhs != null && lhs.isName();
            String varname = lhs.toCode();
            if (varname.equals(prop)) {
              return false;
            }
          }
        }
      }
    }

    // %%% These are technically Rhino Node types currently, but they
    // %%% should match up.
    for (int t : ExpUtil.ASSIGN_TYPES) {
      if (exp.containsType(t, false)) {
        if (prop == null) {
          // No property passed means we're interested in all writes.
          return false;
        } else {
          // If a property name is provided, we can disregard writes to
          // other properties.
          List<Exp> subs = new ArrayList<Exp>();
          exp.findType(t, subs, false);
          for (Exp sub : subs) {
            Exp lhs = sub.getAssignLHS();
            if (lhs.isName()) {
              if (!inFunctionScope) {
                // %%% Could rule out simple NAME assignment, but only
                // %%% if there is a VAR declaration shadowing the
                // %%% global object. This is a somewhat non-local
                // %%% analysis though.
              }
              String varname = lhs.toCode();
              if (varname.equals(prop)) {
                return false;
              }
            } else if (lhs.isAccessor()) {
              Exp propexp = lhs.getChild(1);
              if (propexp.isString()) {
                // |getString| returns the unquoted string.
                String propname = propexp.getString();
                if (propname.equals(prop)) {
                  return false;
                }
              } else {
                // We can't statically determine the property.
                return false;
              }
            } else {
              // May be other cases, but conservatively return false.
              Dbg.warn("Unknown assignment LHS type: " + lhs.toCode());
              return false;
            }
          }
        }
      }
    }

    return true;
  }

  protected boolean inSimpleFunctionScope(Exp exp) {
    Exp ancestor = exp.getParent();
    while (ancestor != null) {
      if (ancestor.is(JSExp.WITH)) {
        return false;
      }
      if (ancestor.is(JSExp.SCRIPT)) {
        return false;
      }
      if (ancestor.is(JSExp.FUNCTION)) {
        return true;
      }
      ancestor = ancestor.getParent();
    }
    return false;
  }

  protected String getAccessProperty(Exp conj) {
    assert conj.isCall();
    String cname = conj.getChild(0).getString();
    assert cname.equals("jam#get") || cname.equals("jam#set") : "Invalid predicate conjunct provided: " + cname;
    assert conj.getChildCount() == 3;
    Exp propexp = conj.getChild(2);
    if (propexp.isString()) {
      return propexp.getString();
    }
    return null;
  }

  public Boolean maybePossibleTransition(DataTransition trans) {
    // Get a set of predicate types in the pre and poststates
    // conjunctions.
    ExpSymbol sym = trans.getSymbol();
    DataState d0 = trans.getSource();
    DataState d1 = trans.getDestination();

    PolicyLanguage pl = new JSPolicyLanguage();

    // This syntax analysis only has the ability to examine transitions
    // of individual predicates. Collect the poststate predicate values
    // to match various cases below.
    List<Exp> postconjs = new ArrayList<Exp>();
    for (PredicateValue pv : d1.getValues()) {
      Predicate pred = pv.getPredicate();
      List<Exp> exps = pred.getConjuncts();
      postconjs.addAll(exps);
    }

    // Based on predicate types, see if the transition can be ruled out
    // by simple syntactic analysis.
    Exp progexp = sym.getExp();
    for (PredicateValue postpv : d1.getValues()) {
      Predicate pred = postpv.getPredicate();
      PredicateType pt = pl.getPredicateType(pred);
      List<Exp> conjs = pred.getConjuncts();

      if (pred.isEventPredicate()) {
        if (pt == JSPredicateType.CALL) {
          if (definitelyNoCall(progexp))
            return Boolean.FALSE;
        } else if (pt == JSPredicateType.WRITE) {
          Exp conj = conjs.get(0);
          String prop = getAccessProperty(conj);
          if (definitelyNoWrite(progexp, prop, false))
            return Boolean.FALSE;
        } else if (pt == JSPredicateType.READ) {
          Exp conj = conjs.get(0);
          String prop = getAccessProperty(conj);
          if (definitelyNoRead(progexp, prop))
            return Boolean.FALSE;
        }

        // Examine additional conjuncts of the event predicate.
        for (Exp conj : conjs) {
          PredicateType cpt = pl.getPredicateType(conj);
          if (cpt == JSPredicateType.SHNE) {
            if (definitelyFalseStrictEquality(conj, progexp, false))
              return Boolean.FALSE;
          } else if (cpt == JSPredicateType.SHEQ) {
            if (definitelyFalseStrictEquality(conj, progexp, true))
              return Boolean.FALSE;
          } else if (cpt == JSPredicateType.TYPE) {
            if (definitelyFalseTypePredicate(conj, progexp))
              return Boolean.FALSE;
          }
        }
      // Value, rather than event, predicates.
      } else {
        PredicateValue prepv = d0.getValueForPredicate(pred);
        // Are the pre and poststate opposed to each other?
        // (I.e. false -> true or true -> false)
        boolean oppo = prepv != null && !prepv.equals(postpv);
        // Does the poststate contain a negated (!()) expression?
        boolean neg = postpv.equals(pred.getNegative());

        if (neg) {
          boolean maybeTrue = false;
          for (Exp conj : conjs) {
            PredicateType cpt = pl.getPredicateType(conj);
            // All conjuncts must definitely be true in the poststate in
            // order to rule out this transition.
            // Most learned predicates will be single conjuncts, so this
            // case applies mostly to those.
            boolean conjMustBeTrue = false;
            if (cpt == JSPredicateType.SHNE) {
              if (definitelyFalseStrictEquality(conj, progexp, true)) {
                // If strict equality must be false, then SHNE predicate
                // value must be true.
                conjMustBeTrue = true;
              } else if (oppo && cannotAffectStrictEquality(conj, progexp)) {
                conjMustBeTrue = true;
              }
            } else if (cpt == JSPredicateType.SHEQ) {
              if (definitelyFalseStrictEquality(conj, progexp, false)) {
                conjMustBeTrue = true;
              } else if (oppo && cannotAffectStrictEquality(conj, progexp)) {
                conjMustBeTrue = true;
              }
            } else if (cpt == JSPredicateType.TYPE) {
              if (definitelyFalseTypePredicate(conj, progexp)) {
                conjMustBeTrue = true;
              } else if (oppo && cannotAffectType(conj, progexp)) {
                conjMustBeTrue = true;
              }
            } else {
              maybeTrue = true;
              break;
            }
            if (!conjMustBeTrue) {
              // If the conjunct might be false, the whole (negated)
              // predicate value could be true.
              maybeTrue = true;
              break;
            }
          }
          if (!maybeTrue) {
            return Boolean.FALSE;
          }
        } else {
          for (Exp conj : conjs) {
            PredicateType cpt = pl.getPredicateType(conj);
            // If a single conjunct must be false in the poststate, the
            // transition is impossible.
            if (cpt == JSPredicateType.SHNE) {
              if (definitelyFalseStrictEquality(conj, progexp, false))
                return Boolean.FALSE;
              if (oppo && cannotAffectStrictEquality(conj, progexp))
                return Boolean.FALSE;
            } else if (cpt == JSPredicateType.SHEQ) {
              if (definitelyFalseStrictEquality(conj, progexp, true))
                return Boolean.FALSE;
              if (oppo && cannotAffectStrictEquality(conj, progexp))
                return Boolean.FALSE;
            } else if (cpt == JSPredicateType.TYPE) {
              if (definitelyFalseTypePredicate(conj, progexp))
                return Boolean.FALSE;
              if (oppo && cannotAffectType(conj, progexp))
                return Boolean.FALSE;
            }
          }
        }
      }
    }

    return null;
  }
}
