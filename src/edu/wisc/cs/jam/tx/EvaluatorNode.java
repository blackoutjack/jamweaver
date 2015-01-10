
package edu.wisc.cs.jam.tx;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;

import edu.wisc.cs.jam.PolicyLanguage;
import edu.wisc.cs.jam.PredicateType;
import edu.wisc.cs.jam.Predicate;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.Dbg;

import edu.wisc.cs.jam.js.JSExp;
import edu.wisc.cs.jam.js.ExpUtil;
import edu.wisc.cs.jam.js.JSPolicyLanguage.JSPredicateType;

import edu.wisc.cs.jam.env.NativeUtil;

// This represents a snippet of JavaScript that evaluates the
// truth value of a single conjunct of a JAM policy predicate with
// respect to a single JAMScript action node.
public class EvaluatorNode {

  private PolicyLanguage language;

  // The expression which is evaluated by this evaluator node.
  private Exp exp;

  // This is generated and saved when toString is called.
  private String code;

  private PredicateType type;
  private boolean not = false;

  // Mapping for wild card. This may be shared with other EvaluatorNode
  // objects and the Evaluator itself. This sharing will be coordinated
  // by the evaluator.
  private Map<String,String> wilds;
  // Native locations that have been referenced. Shared in the same way
  // as |wilds|.
  private Map<String,String> natives;
  // Collect object/property pairs that are checked in WRITE predicates.
  private List<String[]> setProperties;

  public EvaluatorNode(PolicyLanguage pl, Exp e) {
    language = pl;
    exp = e;

    if (exp.isNot()) {
      not = true;
      exp = exp.getFirstChild();
    }

    type = pl.getPredicateType(exp);
    if (type == null)
      throw new UnsupportedOperationException("Unknown conjunct type: " + exp.toCode());
  }

  public void setWilds(Map<String,String> wilds) {
    // Don't copy so that it can be shared.
    this.wilds = wilds;
  }
  
  public void setNatives(Map<String,String> natives) {
    // Don't copy so that it can be shared.
    this.natives = natives;
  }

  public void setSetProperties(List<String[]> props) {
    // Don't copy so that it can be shared.
    this.setProperties = props;
  }
  
  public Map<String,String> getWilds() {
    // Don't copy so that it can be shared.
    return wilds;
  }

  public PredicateType getType() {
    return type;
  }

  protected String getClosedOverExpression(String expr) {
    String closedExpr = null;
    if (natives.containsKey(expr)) {
      closedExpr = natives.get(expr);
    } else {
      // %%% This could get ugly, or potentially have collisions.
      closedExpr = "_" + expr.replace('.', '_');
      closedExpr = closedExpr.replace('-', '_');
      closedExpr = closedExpr.replace('(', '_');
      closedExpr = closedExpr.replace(')', '_');
      // Communicate back to the Evaluator about use of the native.
      natives.put(expr, closedExpr);
    }
    return closedExpr;
  }

  // Bind an object-typed expression to its method.
  protected String getBoundClosedOverExpression(String expr, String meth) {

    // Generate a closed over version of baseline expression.
    String closedExpr = getClosedOverExpression(expr);

    // Generate a new reference as follows to protect the call method.
    // var _indexOf_call = String.prototype.indexOf.call.bind(String.prototype.indexOf);
    String bindExpr = closedExpr + "." + meth + ".bind(" + closedExpr + ")";
    String boundExpr = getClosedOverExpression(bindExpr);
    return boundExpr;
  }

  protected String parseNativeLocation(Exp nat) {
    // %%% This is more complicated than it needs to be because of
    // %%% inconsistencies between NativeUtil and JSPolicyLanguage.
    if (!language.isNativeLocation(nat)) return null;

    String natloc = nat.toCode();
    return parseNativeLocation(natloc);
  }

  protected String parseNativeLocation(String natloc) {
    String expr = null;
    if (NativeUtil.isPrimitiveLocation(natloc)) {
      expr = natloc.substring(1);
    } else {
      expr = NativeUtil.getExpressionFromNativeLocation(natloc);
    }
    if (expr == null) {
      // %%% Handle this more gracefully.
      throw new UnsupportedOperationException("Unknown native location: " + natloc);
    }

    String natexp = getClosedOverExpression(expr);
    return natexp;
  }

  protected String loadWild(String wildRef, String concRef) {
    String jsRef = null;
    if (wilds.containsKey(wildRef)) {
      // Some previous clause encountered a wildcard identifier, and
      // we currently assume that only |set|, |get| and |called|
      // conjuncts can unify wildcards (since we're unifying with
      // the nodes in write sequence, read sequence and call
      // sequence).
      jsRef = wilds.get(wildRef);
      assert jsRef != null : "Null wild mapping encountered: " + wildRef;
    } else if (concRef != null) {
      // Unify the wildcard property name with the concrete reference.
      wilds.put(wildRef, concRef);
      jsRef = concRef;
    }
    return jsRef;
  }

  protected String parseWild(Exp w, String val) {
    if (!language.isWild(w)) return null;
    String wildstr = w.toCode();
    String ret = loadWild(wildstr, val);
    if (ret == null) {
      throw new UnsupportedOperationException("Wildcard " + wildstr + " is not unified: " + w.toCode());
    }
    return ret;
  }

  protected String parseArgClause(Exp clause, StringBuilder sb) {
    if (!clause.isCall()) return null;
    String callName = clause.getFirstChild().toCode();
    if (!callName.equals("jam#arg")) return null;

    // 1 argument
    assert clause.getChildCount() == 2 : "Malformed jam#arg clause: " + clause.toCode();

    Exp argidx = clause.getChild(1);
    String argidxstr = argidx.toCode();
    int idx = Integer.valueOf(argidxstr); 
    // Short-circuit if there is no corresponding argument.
    sb.append("node.argc > " + idx + " && ");

    String ret = "node.args[" + idx + "]";
    return ret;
  }

  protected String parseArgLenClause(Exp e) {
    if (!e.isCall()) return null;
    String callName = e.getFirstChild().toCode();
    if (!callName.equals("jam#arglen")) return null;

    // 0 arguments
    assert e.getChildCount() == 1 : "Malformed jam#arglen clause: " + e.toCode();

    String ret = "node.argc";
    return ret;
  }

  protected String parseAccessorClause(Exp clause) {
    if (!clause.isAccessor()) return null;

    StringBuilder sb = new StringBuilder();

    Exp obj = clause.getFirstChild();
    Exp prop = clause.getChild(1);

    String objid = null;
    if ((objid = parseWild(obj, null)) != null) {
      // |objid| gets the value unified to the wildcard.
    } else if ((objid = parseNativeLocation(obj)) != null) {
      // |objid| gets the native value.
    } else if ((objid = parseArgClause(obj, sb)) != null) {
      // |objid| get the argument value and an argument count check is
      // appended. We also want ensure the value is not |undefined| or
      // |null|.
      sb.append(objid);
      sb.append(" !== ");
      // Use a private reference for |undefined|.
      sb.append(parseNativeLocation("#undefined"));
      sb.append(" && ");
      sb.append(objid);
      // Null is a keyword that can't be overwritten or shadowed, so it
      // doesn't need a private reference.
      sb.append(" !== null &&");
      // Any string, number, boolean, function or object can be accessed
      // with bracket notation, so our cases are covered.
    } else {
      // %%% Output code that compares |varname === native| where
      // %%% |native| is the native object corresponding to the
      // %%% location cited in the policy predicate.
      throw new UnsupportedOperationException("This case hasn't been implemented yet: " + exp.toCode());
    }

    String objstr = obj.toCode();

    String propid = null;
    String propstr = prop.toCode();
    if ((propid = parseWild(prop, "node.id")) != null) {
      // |propid| gets the value unified to the wildcard.
    } else {
      assert prop.isString() : "Invalid property identifier: " + prop.toCode();
      propid = propstr;
    }

    // If the object/property pair is found in |setProperties|, then
    // we want the value |node.value| rather than |node.obj[prop]|.
    boolean isSetProp = false;
    for (String[] objprop : setProperties) {
      assert objprop.length == 2;
      if (objprop[0].equals(objstr) && objprop[1].equals(propstr)) {
        isSetProp = true;
        break;
      }
    }
   
    if (isSetProp) {
      sb.append("node.value");
    } else {
      // Get the value directly from the object.
      // %%% What if this value had been overwritten by a previous
      // %%% write within the transaction? Need to track updates to
      // %%% this value throughout evaluation.
      sb.append(objid + "[" + propid + "]");
    }
    return sb.toString();
  }

  protected void makeBinaryConjunct(StringBuilder sb) {
    assert exp.getChildCount() == 2 : "Invalid child count for equality conjunct: " + exp.toCode();

    // %%% Maybe change format back to |set(obj.prop)| and with a wild
    // %%% |set(%x.%y)|.
    // %%% Someday maybe allow |set(%x.%v.%y)|, but won't work at the
    // %%% moment.
    // Currently the format is |set(obj, "prop")|.
    Exp lhs = exp.getFirstChild();
    Exp rhs = exp.getChild(1);

    String lop = null;
    if ((lop = parseAccessorClause(lhs)) != null) {
      // |lop| gets the (new, if set) value of the referenced property.
    } else if (lhs.isName()) {
      if ((lop = parseWild(lhs, null)) != null) {
        // |lop| gets the value unified to the wildcard.
      } else {
        // Close over the global object.
        // %%% This doesn't work since the global object for the script
        // %%% loading the JAMScript library does not match the one
        // %%% running the application code. This could be handled by
        // %%% adding a "JAMScript.setGlobal(this)" call at the
        // %%% beginning of the application code, but for now just be
        // %%% conservative and catch all accesses with the given
        // %%% property name.
        //natives.put("this", "_global");

        String name = lhs.toCode();
        // Can't include this as part of |lop| for non-infix ops.
        sb.append("node.id === \"" + name + "\" && ");
        lop = "node.value";
      }
    } else if ((lop = parseArgClause(lhs, sb)) != null) {
      // |lop| gets the specified argument.
    } else if ((lop = parseArgLenClause(lhs)) != null) {
      // |lop| gets |node.argc|.
    } else if (lhs.isCall()) {
      String callName = lhs.getFirstChild().toCode();
      if (callName.equals("jam#getValue")) {
        // 2 arguments
        assert lhs.getChildCount() == 3;

        Exp arg0 = lhs.getChild(1);
        Exp arg1 = lhs.getChild(2);
        String objname = null;
        if ((objname = parseWild(arg0, "node.obj")) != null) {
          // |objname| gets the value unified to the wildcard.
        } else if ((objname = parseNativeLocation(arg0)) != null) {
          // |objname| gets the closed-over native reference.
        } else {
          throw new UnsupportedOperationException();
        }
        
        assert objname != null;

        // Append the property name.
        String propname = arg1.toCode();

        String valstr = objname + "[" + propname + "]";
        lop = valstr;
      } else {
        throw new UnsupportedOperationException("Unknown predicate call: " + callName);
      }
    } else {
      throw new UnsupportedOperationException("Unhandled type for lhs of equality predicate: " + lhs.toCode());
    }

    // %%% Delegate this to PolicyLanguage.
    String op = null;
    boolean isInfix = true;
    if (type == JSPredicateType.SHEQ) {
      if (ExpUtil.isPrimitive(rhs) || ExpUtil.isPrimitive(lhs)) {
        op = " === ";
        isInfix = true;
      } else {
        op = "JAM.identical";
        isInfix = false;
      }
    } else if (type == JSPredicateType.EQ) {
      op = " == ";
    } else if (type == JSPredicateType.SHNE) {
      if (ExpUtil.isPrimitive(rhs) || ExpUtil.isPrimitive(lhs)) {
        op = " !== ";
        isInfix = true;
      } else {
        op = "!JAM.identical";
        isInfix = false;
      }
    } else if (type == JSPredicateType.NE) {
      op = " != ";
    } else if (type == JSPredicateType.GT) {
      op = " > ";
    } else if (type == JSPredicateType.GE) {
      op = " >= ";
    } else if (type == JSPredicateType.LT) {
      op = " < ";
    } else if (type == JSPredicateType.LE) {
      op = " <= ";
    } else if (type == JSPredicateType.INSTANCEOF) {
      op = "JAM.instanceof";
      isInfix = false;
    } else {
      throw new UnsupportedOperationException();
    }

    String rop = null;
    if (rhs.isAccessor()) {
      throw new UnsupportedOperationException();  
    } else if ((rop = parseNativeLocation(rhs)) != null) {
      // |rop| gets the closed-over native reference.
    } else {
      // %%% Make this the case for isLiteral.
      rop = rhs.toCode();
    }

    if (isInfix) {
      sb.append(lop);
      sb.append(op);
      sb.append(rop);
    } else {
      sb.append(op);
      sb.append("(");
      sb.append(lop);
      sb.append(",");
      sb.append(rop);
      sb.append(")");
    }
  }

  // Generate the code to evaluate a regex predicate.
  // 
  // jam#regextest(/script/i, jam#arg(0));
  // 
  // ...is converted to...
  //
  // /script/i.test(node.args[0].toString())
  // 
  protected void makeRegexConjunct(StringBuilder sb) {
    // There should be 1 call name and 2 argument.
    assert exp.getChildCount() == 3 : "Invalid child count for string op conjunct: " + exp.toCode();

    Exp op = exp.getFirstChild();
    Exp re = exp.getChild(1);
    Exp val = exp.getChild(2);

    if (!re.isRegExp()) {
      throw new UnsupportedOperationException("Regex function called without regex object: " + exp.toCode());
    }

    String arg1 = null;
    if ((arg1 = parseArgClause(val, sb)) != null) {
      // |arg1| gets the specified argument.
    } else if ((arg1 = parseArgLenClause(val)) != null) {
      // |arg1| gets |node.argc|.
      // %%% This case doesn't really make sense, but shouldn't hurt.
    } else if ((arg1 = parseAccessorClause(val)) != null) {
      // |arg1| gets the (new, if set) value of the referenced property.
    } else {
      throw new UnsupportedOperationException("Unsupported receiver for regex operation: " + val.toCode());
    }

    String opstr = op.toCode();
    if (opstr.equals("jam#regextest")) {
      String loc = "#RegExp#prototype#test";
      String expr = NativeUtil.getExpressionFromNativeLocation(loc);
      if (expr == null) {
        throw new UnsupportedOperationException("Unknown native location: " + loc);
      }

      String boundExpr = getBoundClosedOverExpression(expr, "call");
      sb.append(boundExpr);
      sb.append("(");
      sb.append(re.toCode());
      sb.append(",");
      sb.append(arg1);
      sb.append(")");
    } else {
      throw new UnsupportedOperationException("Unsupported regex operation: " + opstr);
    }

  }

  // Generate the code to evaluate a string operation predicate.
  // 
  // jam#stringcontains(jam#arg(0), "script");
  // 
  // ...is converted to...
  //
  // typeof node.args[0] === "string" && node.args[0].indexOf("script") > -1
  // 
  protected void makeStringOpConjunct(StringBuilder sb) {
    // There should be 1 call name and 2 argument.
    assert exp.getChildCount() == 3 : "Invalid child count for string op conjunct: " + exp.toCode();

    Exp op = exp.getFirstChild();
    Exp full = exp.getChild(1);
    Exp sub = exp.getChild(2);

    String arg0 = null;
    if ((arg0 = parseArgClause(full, sb)) != null) {
      // Short-circuit if the argument is not a string.
      sb.append("typeof " + arg0 + " === \"string\" && ");
    } else if ((arg0 = parseArgLenClause(full)) != null) {
      // |arg0| gets |node.argc|.
      // %%% This case doesn't really make sense.
    } else if ((arg0 = parseAccessorClause(full)) != null) {
      // |arg0| gets the (new, if set) value of the referenced property.
    } else {
      throw new UnsupportedOperationException("Unsupported receiver for string operation: " + full.toCode());
    }

    String opstr = op.toCode();
    if (opstr.equals("jam#stringcontains")) {
      String loc = "#String#prototype#indexOf";
      String expr = NativeUtil.getExpressionFromNativeLocation(loc);
      if (expr == null) {
        throw new UnsupportedOperationException("Unknown native location: " + loc);
      }

      String boundExpr = getBoundClosedOverExpression(expr, "call");
      sb.append(boundExpr);
      sb.append("(");
      sb.append(arg0);
      sb.append(",");

      String substr = sub.toCode();
      if (sub.isString()) {
        sb.append(substr);
      } else {
        throw new UnsupportedOperationException("Unsupported string operation argument: " + substr);
      }

      sb.append(") > -1");
    } else if (opstr.equals("jam#stringstartswith")) {
      // |startsWith| is not standard yet, but it exists in Firefox 17.
      String loc = "#String#prototype#startsWith";
      String expr = NativeUtil.getExpressionFromNativeLocation(loc);
      if (expr == null) {
        throw new UnsupportedOperationException("Unknown native location: " + loc);
      }

      String boundExpr = getBoundClosedOverExpression(expr, "call");
      sb.append(boundExpr);
      sb.append("(");
      sb.append(arg0);
      sb.append(",");

      String substr = sub.toCode();
      if (sub.isString()) {
        sb.append(substr);
      } else {
        throw new UnsupportedOperationException("Unsupported string operation argument: " + substr);
      }

      sb.append(")");
    } else {
      throw new UnsupportedOperationException("Unsupported string operation: " + opstr);
    }

  }

  protected void makeConstructConjunct(StringBuilder sb) {
    // There should be 1 call name and 1 argument.
    assert exp.getChildCount() == 2 : "Invalid child count for construct conjunct: " + exp.toCode();

    // %%% The enforcement mechanism will catch calls to this function
    // %%% in addition to constructor invocations.
    Exp fn = exp.getChild(1);
    String loc = null;
    if ((loc = parseNativeLocation(fn)) != null) {
      sb.append("JAM.identical(node.value,");
      sb.append(loc);
      sb.append(")");
    } else {
      throw new UnsupportedOperationException();  
    }
  }

  protected void makeCallConjunct(StringBuilder sb) {
    // There should be 1 call name and 1 argument.
    assert exp.getChildCount() == 2 : "Invalid child count for call conjunct: " + exp.toCode();

    Exp fn = exp.getChild(1);
    String loc = null;
    if ((loc = parseWild(fn, "node.value")) != null) {
      // |loc| gets the value unified with the wildcard.
      sb.append("true");
    } else if ((loc = parseNativeLocation(fn)) != null) {
      sb.append("JAM.identical(node.value,");
      sb.append(loc);
      sb.append(")");
    } else {
      throw new UnsupportedOperationException("Unable to parse native: " + fn.toCode());  
    }
  }

  protected void makeTypeConjunct(StringBuilder sb) {
    // There should be 1 call name and 2 arguments.
    assert exp.getChildCount() == 3 : "Invalid child count for type conjunct: " + exp.toCode();

    Exp val = exp.getChild(1);
    String valstr = null;
    if ((valstr = parseArgClause(val, sb)) == null) {
      throw new UnsupportedOperationException("Unsupported value for type predicate: " + val.toCode());
    }

    Exp typenode = exp.getChild(2);
    if (typenode.isString()) {
      String typestr = typenode.toCode();
      // %%% The type predicate tests internal type, not the result of
      // %%% |typeof|, so there's a mismatch. Only support the cases
      // %%% that line up nicely for now.
      String typetrans = null;
      if (typestr.equals("\"String\"")) {
        typetrans = "\"string\"";
      } else if (typestr.equals("\"Number\"")) {
        typetrans = "\"number\"";
      } else if (typestr.equals("\"Undefined\"")) {
        typetrans = "\"undefined\"";
      } else {
        // %%% Maybe do something with Object|Null => object|function.
        throw new UnsupportedOperationException("Unsupported type argument for call to type predicate: " + typestr);
      }
      sb.append("typeof ");
      sb.append(valstr);
      sb.append(" === ");
      sb.append(typetrans);
    } else {
      throw new UnsupportedOperationException("Non-string type argument for call to type predicate: " + typenode.toCode());
    }
  }

  protected void makeAccessConjunct(StringBuilder sb) {
    // There should be 1 call name and 2 arguments.
    assert exp.getChildCount() == 3 : "Invalid number of children for access conjunct: " + exp.getChildCount() + " children for " + exp.toCode();

    // %%% Maybe change format back to |set(obj.prop)| and with a wild
    // %%% |set(%x.%y)|.
    // %%% Someday maybe allow |set(%x.%v.%y)|, but won't work at the
    // %%% moment.
    // Currently the format is |set(obj, "prop")|.
    Exp obj = exp.getChild(1);
    Exp prop = exp.getChild(2);
    
    boolean hasObjClause = false;
    String objid = null;
    String objstr = obj.toCode();
    if ((objid = parseWild(obj, "node.obj")) != null) {
      // |objid| gets the value unified with the wildcard.
    } else if ((objid = parseNativeLocation(obj)) != null) {
      sb.append("JAM.identical(node.obj,");
      sb.append(objid);
      sb.append(")");
      hasObjClause = true;
    } else {
      // Output code that compares |varname === native| where |native|
      // is the native object corresponding to the location cited in the
      // policy predicate.
      throw new UnsupportedOperationException("Unknown access object name: " + obj.toCode());
    }

    String propname = null;
    String propstr = prop.toCode();
    if ((propname = parseWild(prop, "node.id")) != null) {
      // |propname| gets the value unified with the wildcard.
    } else {
      if (hasObjClause) {
        sb.append(" && ");
      }
      sb.append("node.id === ");
      // Assumed to be already quoted.
      sb.append(prop.toCode());
    }

    if (language.isWild(obj) && language.isWild(prop)) {
      // Gotta add something.
      sb.append("true");
    }

    if (type == JSPredicateType.WRITE) {
      // Let subsequent nodes know to use |node.value| rather than
      // |node.obj.prop| to test the value.
      String[] objprop = { objstr, propstr };
      setProperties.add(objprop);
    }
  }

  // Generate the source code of the evaluator clause for this node.
  @Override
  public String toString() {
    if (code != null) return code;

    StringBuilder sb = new StringBuilder();
    if (not) {
      sb.append("!");
    }
    sb.append("(");
    switch ((JSPredicateType)type) {
      case WRITE:
      case READ:
      case DELETE:
        makeAccessConjunct(sb);
        break;
      case INVOKE:
        makeCallConjunct(sb);
        break;
      case CONSTRUCT:
        makeConstructConjunct(sb);
        break;
      case TYPE:
        makeTypeConjunct(sb);
        break;
      case STRINGCONTAINS:
      case STRINGSTARTSWITH:
        makeStringOpConjunct(sb);
        break;
      case REGEXTEST:
        makeRegexConjunct(sb);
        break;
      case SHEQ:
      case SHNE:
      case EQ:
      case NE:
      case GT:
      case GE:
      case LT:
      case LE:
      case INSTANCEOF:
        makeBinaryConjunct(sb);
        break;
      case DUMMY:
        sb.append("false");
        break;
      default:
        throw new UnsupportedOperationException();
    }
    sb.append(")");      
    return sb.toString();
  }

}

