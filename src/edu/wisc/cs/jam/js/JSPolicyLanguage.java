package edu.wisc.cs.jam.js;

import java.util.Set;
import java.util.List;

import edu.wisc.cs.jam.PolicyLanguage;
import edu.wisc.cs.jam.PredicateType;
import edu.wisc.cs.jam.Policy;
import edu.wisc.cs.jam.Predicate;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.Dbg;

public class JSPolicyLanguage extends PolicyLanguage {

  public enum JSPredicateType implements PredicateType {
    WRITE,
    READ,
    CALL,
    CONSTRUCT,
    INVOKE,
    DELETE,
    TYPE,
    STRINGCONTAINS,
    STRINGSTARTSWITH,
    SHEQ,
    SHNE,
    EQ,
    NE,
    GT,
    LT,
    GE,
    LE,
    INSTANCEOF,
    REGEXTEST,
    TRUE,
    DUMMY
  }

  public JSPredicateType getPredicateType(Predicate p) {
    if (p == Predicate.TRUE) return JSPredicateType.TRUE;

    List<Exp> conjs = p.getConjuncts();
    assert conjs.size() > 0;
    return getPredicateType(conjs.get(0));
  }

  public JSPredicateType getPredicateType(Exp e) {
    JSPredicateType type = null;

    boolean not = false;
    if (e.isNot()) {
      not = true;
      e = e.getFirstChild();
    }

    if (e.isCall()) {
      String callName = e.getFirstChild().toCode();
      if (callName.equals("jam#invoke")) {
        type = JSPredicateType.INVOKE;
        if (not)
          throw new UnsupportedOperationException("Negative " + callName + " predicates not supported: " + e.toCode());
      } else if (callName.equals("jam#call")) {
        type = JSPredicateType.CALL;
        if (not)
          throw new UnsupportedOperationException("Negative " + callName + " predicates not supported: " + e.toCode());
      } else if (callName.equals("jam#construct")) {
        type = JSPredicateType.CONSTRUCT;
        if (not)
          throw new UnsupportedOperationException("Negative " + callName + " predicates not supported: " + e.toCode());
      } else if (callName.equals("jam#set")) {
        type = JSPredicateType.WRITE;
        if (not)
          throw new UnsupportedOperationException("Negative " + callName + " predicates not supported: " + e.toCode());
      } else if (callName.equals("jam#get")) {
        type = JSPredicateType.READ;
        if (not)
          throw new UnsupportedOperationException("Negative " + callName + " predicates not supported: " + e.toCode());
      } else if (callName.equals("jam#delete")) {
        type = JSPredicateType.DELETE;
        if (not)
          throw new UnsupportedOperationException("Negative " + callName + " predicates not supported: " + e.toCode());
      } else if (callName.equals("jam#type")) {
        type = JSPredicateType.TYPE;
      } else if (callName.equals("jam#stringcontains")) {
        type = JSPredicateType.STRINGCONTAINS;
      } else if (callName.equals("jam#stringstartswith")) {
        type = JSPredicateType.STRINGSTARTSWITH;
      } else if (callName.equals("jam#regextest")) {
        type = JSPredicateType.REGEXTEST;
      } else {
        return null;
      }
    } else if (e.is(JSExp.SHEQ)) {
      type = JSPredicateType.SHEQ;
    } else if (e.is(JSExp.SHNE)) {
      type = JSPredicateType.SHNE;
    } else if (e.is(JSExp.EQ)) {
      type = JSPredicateType.EQ;
    } else if (e.is(JSExp.NE)) {
      type = JSPredicateType.NE;
    } else if (e.is(JSExp.GT)) {
      type = JSPredicateType.GT;
    } else if (e.is(JSExp.GE)) {
      type = JSPredicateType.GE;
    } else if (e.is(JSExp.LT)) {
      type = JSPredicateType.LT;
    } else if (e.is(JSExp.LE)) {
      type = JSPredicateType.LE;
    } else if (e.is(JSExp.INSTANCEOF)) {
      type = JSPredicateType.INSTANCEOF;
    } else if (e.is(JSExp.FALSE)) {
      type = JSPredicateType.DUMMY;
    } else {
      return null;
    }
    return type;
  }

  @Override
  public boolean isNativeLocation(Exp e) {
    if (!e.isName()) return false;
    String name = e.toCode();
    if (name.startsWith("#")) return true;
    return false;
  }

  @Override
  public boolean isWild(Exp e) {
    if (!e.isName()) return false;
    String name = e.toCode();
    if (name.startsWith("`")) return true;
    return false;
  }

  protected boolean findStringsOfInterest(Exp e, Exp parent, Set<String> strs) {
    boolean ret = false;
    if (e.isString() && parent.isCall()
        && parent.getChildCount() >= 3 && parent.getChild(2) == e) {
      String callName = parent.getFirstChild().toCode();
      if (callName.equals("jam#stringcontains") || callName.equals("jam#stringstartswith")) {
        String str = e.getString();
        strs.add(str);
        ret = true;
      }
    }

    // Recurse.
    for (Exp child : e.getChildren()) {
      if (findStringsOfInterest(child, e, strs)) ret = true;
    }
    return ret;
  }

  protected boolean findPropertiesOfInterest(Exp e, Exp parent, Set<String> props) {
    boolean ret = false;
    if (e.isString()) {
      if (parent.isAccessor() && parent.getChild(1) == e) {
        String memb = e.getString();
        props.add(memb);
        ret = true;
      } else if (parent.is(JSExp.CALL) && parent.getChildCount() >= 2
          && parent.getChild(2) == e) {
        String callName = parent.getFirstChild().toCode();
        if (callName.equals("jam#get") || callName.equals("jam#set") || callName.equals("jam#delete")) {
          String memb = e.getString();
          props.add(memb);
          ret = true;
        }
      } else if (parent.isBooleanOp()) {
        // Semi-hack to get string in predicates like this:
        // set(`x,`y) && `y !== "prop"
        int otheridx = parent.getFirstChild() == e ? 1 : 0;
        if (isWild(parent.getChild(otheridx))) {
          String memb = e.getString();
          props.add(memb);
          ret = true;
        }
      }
    }

    // Recurse.
    for (Exp child : e.getChildren()) {
      if (findPropertiesOfInterest(child, e, props)) ret = true;
    }
    return ret;
  }

  protected boolean findNamesOfInterest(Exp e, Exp parent, Set<String> names) {
    if (e.isName()) {
      names.add(e.toCode());
      return true;
    }

    // Recurse.
    boolean ret = false;
    for (Exp child : e.getChildren()) {
      if (findNamesOfInterest(child, e, names)) ret = true;
    }
    return ret;
  }

  @Override
  public boolean findPropertiesOfInterest(Predicate p, Set<String> out) {
    if (p == Predicate.TRUE) return false;
        
    Exp predStmt = p.getPositive().getExpression();
    Exp predExp = predStmt.getFirstChild();
    return findPropertiesOfInterest(predStmt, null, out);
  }

  @Override
  public boolean findStringsOfInterest(Predicate p, Set<String> out) {
    if (p == Predicate.TRUE) return false;
        
    Exp predStmt = p.getPositive().getExpression();
    Exp predExp = predStmt.getFirstChild();
    return findStringsOfInterest(predExp, predStmt, out);
  }

  @Override
  public boolean findNamesOfInterest(Predicate p, Set<String> out) {
    if (p == Predicate.TRUE) return false;
        
    Exp predStmt = p.getPositive().getExpression();
    Exp predExp = predStmt.getFirstChild();
    return findNamesOfInterest(predExp, predStmt, out);
  }
}
