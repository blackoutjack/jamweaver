package edu.wisc.cs.jam.js;

import java.util.Set;

import edu.wisc.cs.jam.PolicyLanguage;
import edu.wisc.cs.jam.PolicyType;
import edu.wisc.cs.jam.Policy;
import edu.wisc.cs.jam.Predicate;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.Dbg;

public class JSPolicyLanguage extends PolicyLanguage {

  public enum JSPolicyType implements PolicyType {
    WRITE,
    READ,
    CALL,
    DELETE,
    TYPE,
    STRINGCONTAINS,
    STRINGSTARTSWITH,
    SHEQ,
    SHNE,
    EQ,
    NE,
    INSTANCEOF,
    REGEXTEST,
    DUMMY
  }

  public JSPolicyType getPolicyType(Exp e) {
    JSPolicyType type = null;

    boolean not = false;
    if (e.isNot()) {
      not = true;
      e = e.getFirstChild();
    }

    if (e.isCall()) {
      String callName = e.getFirstChild().toCode();
      if (callName.equals("jam#called")) {
        type = JSPolicyType.CALL;
        if (not)
          throw new UnsupportedOperationException("Negated jam#called predicates not supported: " + e.toCode());
      } else if (callName.equals("jam#set")) {
        type = JSPolicyType.WRITE;
        if (not)
          throw new UnsupportedOperationException("Negative jam#set predicates not supported: " + e.toCode());
      } else if (callName.equals("jam#get")) {
        type = JSPolicyType.READ;
        if (not)
          throw new UnsupportedOperationException("Negative jam#get predicates not supported: " + e.toCode());
      } else if (callName.equals("jam#delete")) {
        type = JSPolicyType.DELETE;
        if (not)
          throw new UnsupportedOperationException("Negative jam#delete predicates not supported: " + e.toCode());
      } else if (callName.equals("jam#type")) {
        type = JSPolicyType.TYPE;
      } else if (callName.equals("jam#stringcontains")) {
        type = JSPolicyType.STRINGCONTAINS;
      } else if (callName.equals("jam#stringstartswith")) {
        type = JSPolicyType.STRINGSTARTSWITH;
      } else if (callName.equals("jam#regextest")) {
        type = JSPolicyType.REGEXTEST;
      } else {
        return null;
      }
    } else if (e.is(JSExp.SHEQ)) {
      type = JSPolicyType.SHEQ;
    } else if (e.is(JSExp.SHNE)) {
      type = JSPolicyType.SHNE;
    } else if (e.is(JSExp.EQ)) {
      type = JSPolicyType.EQ;
    } else if (e.is(JSExp.NE)) {
      type = JSPolicyType.NE;
    } else if (e.is(JSExp.INSTANCEOF)) {
      type = JSPolicyType.INSTANCEOF;
    } else if (e.is(JSExp.FALSE)) {
      type = JSPolicyType.DUMMY;
    } else {
      return null;
    }
    return type;
  }

  @Override
  public JSPolicyType getPolicyEdgeType(Policy.Edge edge) {
    Exp e = edge.getSymbol().getPredicate().getConjuncts().get(0);
    JSPolicyType type = getPolicyType(e);
    if (type == null) {
      throw new UnsupportedOperationException("Unknown policy type: " + e.toCode());
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
    if (e.is(JSExp.STRING)) {
      if (parent.is(JSExp.CALL) && parent.getChildCount() == 3
          && parent.getChild(2) == e) {
        String callName = parent.getFirstChild().toCode();
        if (callName.equals("jam#stringcontains") || callName.equals("jam#stringstartswith")) {
          String str = NodeUtil.unquote(e.toCode());
          strs.add(str);
          ret = true;
        }
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
    if (e.is(JSExp.STRING)) {
      if (parent.isAccessor() && parent.getChild(1) == e) {
        String memb = NodeUtil.unquote(e.toCode());
        props.add(memb);
        ret = true;
      } else if (parent.is(JSExp.CALL) && parent.getChildCount() == 3
          && parent.getChild(2) == e) {
        String callName = parent.getFirstChild().toCode();
        if (callName.equals("jam#get") || callName.equals("jam#set")) {
          String memb = NodeUtil.unquote(e.toCode());
          props.add(memb);
          ret = true;
        }
      } else if (parent.isBooleanOp()) {
        // Semi-hack to get string in predicates like this:
        // set(`x,`y) && `y !== "prop"
        int otheridx = parent.getFirstChild() == e ? 1 : 0;
        if (isWild(parent.getChild(otheridx))) {
          String memb = NodeUtil.unquote(e.toCode());
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
