
package edu.wisc.cs.jam.tx;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;

import edu.wisc.cs.jam.PolicyLanguage;
import edu.wisc.cs.jam.PolicyType;
import edu.wisc.cs.jam.Predicate;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.Dbg;

import edu.wisc.cs.jam.js.NodeUtil;
import edu.wisc.cs.jam.js.JSExp;
import edu.wisc.cs.jam.js.JSPolicyLanguage.JSPolicyType;

// This represents a snippet of JavaScript that evaluates the
// truth value of a single conjunct of a JAM policy predicate with
// respect to a single JAMScript action node.
public class EvaluatorNode {

  private PolicyLanguage language;

  // The expression which is evaluated by this evaluator node.
  private Exp exp;

  // This is generated and saved when toString is called.
  private String code;

  private PolicyType type;
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

    type = pl.getPolicyType(exp);
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

  public PolicyType getType() {
    return type;
  }

  protected String getClosedOverExpression(String expr) {
    String closedExpr = null;
    if (natives.containsKey(expr)) {
      closedExpr = natives.get(expr);
    } else {
      // %%% This could get ugly, or potentially have collisions.
      closedExpr = "_" + expr.replace('.', '_');
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
    } else {
      if (concRef != null) {
        // Unify the wildcard property name with the concrete reference.
        wilds.put(wildRef, concRef);
        jsRef = concRef;
      }
    }
    return jsRef;
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
    if (lhs.isAccessor()) {
      Exp obj = lhs.getFirstChild();
      Exp prop = lhs.getChild(1);

      String objid = null;
      String objstr = obj.toCode();
      if (language.isWild(obj)) {
        // %%% Could perhaps a concrete ref be provided?
        objid = loadWild(objstr, null);
        if (objid == null) {
          throw new UnsupportedOperationException("Wildcard " + objstr + " is not unified: " + exp.toCode());
        }
      } else {
        // %%% Output code that compares |varname === native| where
        // %%% |native| is the native object corresponding to the
        // %%% location cited in the policy predicate.
        throw new UnsupportedOperationException("This case hasn't been implemented yet: " + exp.toCode());
      }

      String propname = null;
      String propstr = prop.toCode();
      if (language.isWild(prop)) {
        propname = loadWild(propstr, "node.id");
      } else {
        assert prop.isString() : "Invalid property identifier: " + propstr;
        propname = propstr;
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
        lop = "node.value";
      } else {
        // Get the value directly from the object.
        // %%% What if this value had been overwritten by a previous
        // %%% write within the transaction? Need to track updates to
        // %%% this value throughout evaluation.
        lop = objid + "[" + propname + "]";
      }
    } else if (lhs.isName()) {

      if (language.isWild(lhs)) {
        String wildstr = lhs.toCode();
        lop = loadWild(wildstr, null);
        if (lop == null) {
          throw new UnsupportedOperationException("Wildcard " + wildstr + " is not unified: " + exp.toCode());
        }
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
    } else if (lhs.isCall()) {
      String callName = lhs.getFirstChild().toCode();
      if (callName.equals("jam#getValue")) {
        // 2 arguments
        assert lhs.getChildCount() == 3;

        Exp arg0 = lhs.getChild(1);
        Exp arg1 = lhs.getChild(2);
        String objname = null;
        if (language.isWild(arg0)) {
          String wildstr = arg0.toCode();
          objname = loadWild(wildstr, "node.obj");
        } else if (language.isNativeLocation(arg0)) {
          String objloc = arg0.toCode();
          String objexpr = NodeUtil.nativeLocationToExpression.get(objloc);
          if (objexpr == null) {
            // %%% Handle this more gracefully.
            throw new UnsupportedOperationException("Unknown native location: " + objloc);
          }
          objname = getClosedOverExpression(objexpr);
        } else {
          throw new UnsupportedOperationException();
        }
        
        assert objname != null;

        // Append the property name.
        String propname = arg1.toCode();

        String valstr = objname + "[" + propname + "]";
        lop = valstr;
      } else if (callName.equals("jam#arg")) {
        // 1 argument
        assert lhs.getChildCount() == 2;

        Exp argidx = lhs.getChild(1);
        String argidxstr = argidx.toCode();
        int idx = Integer.valueOf(argidxstr); 
        lop = "node.args[" + argidxstr + "]";
       
      } else if (callName.equals("jam#obj")) {
        // 1 argument
        assert lhs.getChildCount() == 2;

        Exp objnode = lhs.getChild(1);
        if (language.isNativeLocation(objnode)) {
          String objloc = objnode.toCode();
          String objexpr = NodeUtil.nativeLocationToExpression.get(objloc);
          if (objexpr == null) {
            // %%% Handle this more gracefully.
            throw new UnsupportedOperationException("Unknown native location: " + objloc);
          }
          String privateExpr = getClosedOverExpression(objexpr);
          
          lop = privateExpr;
        } else {
          throw new UnsupportedOperationException("Only native locations supported for obj retrieval: " + objnode.toCode());
        }
      } else if (callName.equals("jam#str")) {
        // 1 argument
        assert lhs.getChildCount() == 2;

        Exp strnode = lhs.getChild(1);
        if (strnode.isString()) {
          // %%% Need to escape?
          lop = strnode.toCode();
        } else {
          throw new UnsupportedOperationException("Non-string argument for call to str: " + strnode.toCode());
        }
      } else {
        throw new UnsupportedOperationException("Unknown predicate call: " + callName);
      }
    } else {
      throw new UnsupportedOperationException("Unhandled type for lhs of equality predicate: " + lhs.toCode());
    }

    // %%% Delegate this to PolicyLanguage.
    String op = null;
    boolean isInfix = true;
    if (type == JSPolicyType.SHEQ) {
      op = "JAM.identical";
      isInfix = false;
    } else if (type == JSPolicyType.EQ) {
      op = " == ";
    } else if (type == JSPolicyType.SHNE) {
      op = "!JAM.identical";
      isInfix = false;
    } else if (type == JSPolicyType.NE) {
      op = " != ";
    } else if (type == JSPolicyType.INSTANCEOF) {
      op = "JAM.instanceof";
      isInfix = false;
    } else {
      throw new UnsupportedOperationException();
    }

    String rop = null;
    if (rhs.isAccessor()) {
      throw new UnsupportedOperationException();  
    } else {
      if (language.isNativeLocation(rhs)) {
        String loc = rhs.toCode();
        String expr = NodeUtil.nativeLocationToExpression.get(loc);
        if (expr == null) {
          // %%% Handle this more gracefully.
          throw new UnsupportedOperationException("Unknown native location: " + loc);
        }

        String privateExpr = getClosedOverExpression(expr);
        rop = privateExpr;
      } else {
        // %%% Make this the case for isLiteral.
        rop = rhs.toCode();
      }
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
    if (val.isCall()) {
      String callName = val.getFirstChild().toCode();
      if (callName.equals("jam#arg")) {
        // 1 argument
        assert val.getChildCount() == 2;

        Exp argidx = val.getChild(1);
        String argidxstr = argidx.toCode();
        int idx = Integer.valueOf(argidxstr); 
        arg1 = "node.args[" + idx + "]";
        // Short-circuit if there is no corresponding argument.
        sb.append("node.argc > " + idx + " && ");
      } else {
        throw new UnsupportedOperationException("Unsupported receiver type for regex operation: " + val.toCode());
      }
    } else if (val.isAccessor()) {
      // %%% Factor this out, as it reoccurs several places.
      Exp obj = val.getFirstChild();
      Exp prop = val.getChild(1);

      String objid = null;
      String objstr = obj.toCode();
      if (language.isWild(obj)) {
        // %%% Can a concrete reference be provided?
        objid = loadWild(objstr, null);
        if (objid == null) {
          throw new UnsupportedOperationException("Wildcard " + objstr + " is not unified: " + exp.toCode());
        }
      } else {
        // %%% Output code that compares |varname === native| where
        // %%% |native| is the native object corresponding to the
        // %%% location cited in the policy predicate.
        throw new UnsupportedOperationException();
      }

      String propname = null;
      String propstr = prop.toCode();
      if (language.isWild(prop)) {
        propname = loadWild(propstr, "node.id");
      } else {
        assert prop.isString() : "Invalid property identifier: " + prop.toCode();
        propname = propstr;
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
        arg1 = "node.value";
      } else {
        // Get the value directly from the object.
        // %%% What if this value had been overwritten by a previous
        // %%% write within the transaction? Need to track updates to
        // %%% this value throughout evaluation.
        arg1 = objid + "[" + propname + "]";
      }

    } else {
      throw new UnsupportedOperationException("Unsupported receiver for regex operation: " + val.toCode());
    }

    String opstr = op.toCode();
    if (opstr.equals("jam#regextest")) {
      String loc = "#RegExp#prototype#test";
      String expr = NodeUtil.nativeLocationToExpression.get(loc);
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
    if (full.isCall() ) {
      String callName = full.getFirstChild().toCode();
      if (callName.equals("jam#arg")) {
        // 1 argument
        assert full.getChildCount() == 2;

        Exp argidx = full.getChild(1);
        String argidxstr = argidx.toCode();
        int idx = Integer.valueOf(argidxstr); 
        arg0 = "node.args[" + idx + "]";
        // Short-circuit if there is no corresponding argument, or if
        // the argument is not a string.
        sb.append("node.argc > " + idx + " && typeof " + arg0 + " === \"string\" && ");
      } else {
        throw new UnsupportedOperationException("Unsupported receiver type for string operation: " + full.toCode());
      }
    } else if (full.isAccessor()) {
      Exp obj = full.getFirstChild();
      Exp prop = full.getChild(1);

      String objid = null;
      String objstr = obj.toCode();
      if (language.isWild(obj)) {
        // %%% Could a concrete value be provided?
        objid = loadWild(objstr, null);
        if (objid == null) {
          throw new UnsupportedOperationException("Wildcard " + objstr + " is not unified: " + exp.toCode());
        }
      } else {
        // %%% Output code that compares |varname === native| where
        // %%% |native| is the native object corresponding to the
        // %%% location cited in the policy predicate.
        throw new UnsupportedOperationException();
      }

      String propname = null;
      String propstr = prop.toCode();
      if (language.isWild(prop)) {
        propname = loadWild(propstr, "node.id");
      } else {
        assert prop.isString() : "Invalid property identifier: " + prop.toCode();
        propname = propstr;
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
        arg0 = "node.value";
      } else {
        // Get the value directly from the object.
        // %%% What if this value had been overwritten by a previous
        // %%% write within the transaction? Need to track updates to
        // %%% this value throughout evaluation.
        arg0 = objid + "[" + propname + "]";
      }
      
    } else {
      throw new UnsupportedOperationException("Unsupported receiver for string operation: " + full.toCode());
    }

    String opstr = op.toCode();
    if (opstr.equals("jam#stringcontains")) {
      String loc = "#String#prototype#indexOf";
      String expr = NodeUtil.nativeLocationToExpression.get(loc);
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
      String expr = NodeUtil.nativeLocationToExpression.get(loc);
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

  protected void makeCallConjunct(StringBuilder sb) {
    // There should be 1 call name and 1 argument.
    assert exp.getChildCount() == 2 : "Invalid child count for call conjunct: " + exp.toCode();

    Exp fn = exp.getChild(1);
    if (language.isNativeLocation(fn)) {
      String fnloc = fn.toCode();
      String expr = NodeUtil.nativeLocationToExpression.get(fnloc);
      if (expr == null) {
        // %%% Handle this more gracefully.
        throw new UnsupportedOperationException("Unknown native location: " + fnloc);
      }
      String privateExpr = null;
      if (natives.containsKey(expr)) {
        privateExpr = natives.get(expr);
      } else {
        // %%% Do something more creative than adding an underscore.
        // %%% or else factor this out altogether.
        privateExpr = "_" + expr.replace('.', '_');
        // Communicate back to the Evaluator about use of the native.
        natives.put(expr, privateExpr);
      }

      sb.append("JAM.identical(node.value,");
      sb.append(privateExpr);
      sb.append(")");
    } else {
      throw new UnsupportedOperationException();  
    }
    
  }

  protected void makeTypeConjunct(StringBuilder sb) {
    // There should be 1 call name and 2 arguments.
    assert exp.getChildCount() == 3 : "Invalid child count for type conjunct: " + exp.toCode();

    Exp val = exp.getChild(1);
    String valstr = null;
    if (val.isCall()) {
      String callName = val.getFirstChild().toCode();
      if (callName.equals("jam#arg")) {
        // 1 argument
        assert val.getChildCount() == 2;

        Exp argidx = val.getChild(1);
        String argidxstr = argidx.toCode();
        int idx = Integer.valueOf(argidxstr); 
        valstr = "node.args[" + idx + "]";
        // Short-circuit if there is no corresponding argument.
        sb.append("node.argc > " + idx + " && ");
      } else {
        throw new UnsupportedOperationException("Unsupported value for type predicate: " + val.toCode());
      }
    } else {
      throw new UnsupportedOperationException();  
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
    if (language.isWild(obj)) {
      objid = loadWild(objstr, "node.obj");
    } else if (language.isNativeLocation(obj)) {
      String loc = objstr;
      String nativeObj = NodeUtil.nativeLocationToExpression.get(loc);
      if (nativeObj == null) {
        throw new UnsupportedOperationException("Unknown native location: " + loc);
      }
      String privateExpr = null;
      if (natives.containsKey(nativeObj)) {
        privateExpr = natives.get(nativeObj);
      } else {
        // %%% Do something more creative than adding an underscore.
        // %%% or else factor this out altogether.
        privateExpr = "_" + nativeObj.replace('.', '_');
        // Communicate back to the Evaluator about use of the native.
        natives.put(nativeObj, privateExpr);
      }

      sb.append("JAM.identical(node.obj,");
      sb.append(privateExpr);
      sb.append(")");
      hasObjClause = true;
    } else {
      // Output code that compares |varname === native| where |native|
      // is the native object corresponding to the location cited in the
      // policy predicate.
      throw new UnsupportedOperationException("Unknown predicate call name: " + obj.toCode());
    }

    String propname = null;
    String propstr = prop.toCode();
    if (language.isWild(prop)) {
      propname = loadWild(propstr, "node.id");
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

    if (type == JSPolicyType.WRITE) {
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
    switch ((JSPolicyType)type) {
      case WRITE:
      case READ:
      case DELETE:
        makeAccessConjunct(sb);
        break;
      case CALL:
        makeCallConjunct(sb);
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

