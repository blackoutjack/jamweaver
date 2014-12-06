
package edu.wisc.cs.jam.js;

import java.util.List;
import java.util.Set;
import java.util.HashSet;
import java.util.Collection;
import java.util.Arrays;

import edu.wisc.cs.automaton.Automaton;
import edu.wisc.cs.automaton.Automaton.Edge;
import edu.wisc.cs.automaton.State;

import edu.wisc.cs.jam.Scope;
import edu.wisc.cs.jam.Traversal;
import edu.wisc.cs.jam.Traversal.Traverser;
import edu.wisc.cs.jam.ControlAutomaton;
import edu.wisc.cs.jam.CheckManager;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.PredicateType;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.CallGraph.Callsite;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.JAM;

import edu.wisc.cs.jam.tx.TxUtil;

import edu.wisc.cs.jam.js.JSPolicyLanguage.JSPredicateType;

// Reuse ExpressionFlattener to maintain sequential variable naming.
public class JSIndirectionTransform extends JSTransform {

  public final boolean TRANFORM_GLOBAL_NAMES = false;

  protected Set<String> conservativeCalls;
  protected Set<String> dynamicCalls;
    
  private int callTransformCnt = 0;
  private int propertyWriteTransformCnt = 0;
  private int propertyReadTransformCnt = 0;

  protected CheckManager cm;
  protected ControlAutomaton caut;
  protected SourceManager sm;

  protected static Set<String> dynamicExterns;
  protected static Set<String> dynamicProperties;
  
  static{
    String[] tmpProps = {
      "innerHTML",
      "outerHTML",
      "textContent",
      "onafterprint",
      "onbeforeprint",
      "onbeforeunload",
      "onerror",
      "onhaschange",
      "onload",
      "onmessage",
      "onoffline",
      "ononline",
      "onpagehide",
      "onpageshow",
      "onpopstate",
      "onredo",
      "onresize",
      "onstorage",
      "onundo",
      "onunload",
      "onblur",
      "onchange",
      "oncontextmenu",
      "onfocus",
      "onformchange",
      "onforminput",
      "oninput",
      "oninvalid",
      "onselect",
      "onsubmit",
      "onkeydown",
      "onkeypress",
      "onkeyup",
      "onclick",
      "ondblclick",
      "ondrag",
      "ondragend",
      "ondragenter",
      "ondragleave",
      "ondragover",
      "ondragstart",
      "ondrop",
      "onmousedown",
      "onmousemove",
      "onmouseout",
      "onmouseover",
      "onmouseup",
      "onmousewheel",
      "onscroll",
      "oncanplay",
      "oncanplaythrough",
      "ondurationchange",
      "onemptied",
      "onended",
      "onerror",
      "onloadeddata",
      "onloadedmetadata",
      "onloadstart",
      "onpause",
      "onplay",
      "onplaying",
      "onprogress",
      "onratechange",
      "onreadystatechange",
      "onseeked",
      "onseeking",
      "onstalled",
      "onsuspend",
      "ontimeupdate",
      "onvolumechange",
      "onwaiting",
    };
    String[] tmpExterns = {
      "eval",
      "Function",
      "setTimeout",
      "setInterval",
      "Attr.prototype.appendChild",
      "Attr.prototype.insertBefore",
      "Attr.prototype.replaceChild",
      "Element.prototype.appendChild",
      "Element.prototype.insertBefore",
      "Element.prototype.replaceChild",
      "HTMLElement.prototype.appendChild",
      "HTMLElement.prototype.insertBefore",
      "HTMLElement.prototype.replaceChild",
      "HTMLAnchorElement.prototype.appendChild",
      "HTMLAnchorElement.prototype.insertBefore",
      "HTMLAnchorElement.prototype.replaceChild",
      "HTMLAudioElement.prototype.appendChild",
      "HTMLAudioElement.prototype.insertBefore",
      "HTMLAudioElement.prototype.replaceChild",
      "HTMLBRElement.prototype.appendChild",
      "HTMLBRElement.prototype.insertBefore",
      "HTMLBRElement.prototype.replaceChild",
      "HTMLButtonElement.prototype.appendChild",
      "HTMLButtonElement.prototype.insertBefore",
      "HTMLButtonElement.prototype.replaceChild",
      "HTMLCanvasElement.prototype.appendChild",
      "HTMLCanvasElement.prototype.insertBefore",
      "HTMLCanvasElement.prototype.replaceChild",
      "HTMLFormElement.prototype.appendChild",
      "HTMLFormElement.prototype.insertBefore",
      "HTMLFormElement.prototype.replaceChild",
      "HTMLFrameElement.prototype.appendChild",
      "HTMLFrameElement.prototype.insertBefore",
      "HTMLFrameElement.prototype.replaceChild",
      "HTMLHtmlElement.prototype.appendChild",
      "HTMLHtmlElement.prototype.insertBefore",
      "HTMLHtmlElement.prototype.replaceChild",
      "HTMLIFrameElement.prototype.appendChild",
      "HTMLIFrameElement.prototype.insertBefore",
      "HTMLIFrameElement.prototype.replaceChild",
      "HTMLInputElement.prototype.appendChild",
      "HTMLInputElement.prototype.insertBefore",
      "HTMLInputElement.prototype.replaceChild",
      "HTMLImageElement.prototype.appendChild",
      "HTMLImageElement.prototype.insertBefore",
      "HTMLImageElement.prototype.replaceChild",
      "HTMLLIElement.prototype.appendChild",
      "HTMLLIElement.prototype.insertBefore",
      "HTMLLIElement.prototype.replaceChild",
      "HTMLLinkElement.prototype.appendChild",
      "HTMLLinkElement.prototype.insertBefore",
      "HTMLLinkElement.prototype.replaceChild",
      "HTMLMediaElement.prototype.appendChild",
      "HTMLMediaElement.prototype.insertBefore",
      "HTMLMediaElement.prototype.replaceChild",
      "HTMLObjectElement.prototype.appendChild",
      "HTMLObjectElement.prototype.insertBefore",
      "HTMLObjectElement.prototype.replaceChild",
      "HTMLOptionElement.prototype.appendChild",
      "HTMLOptionElement.prototype.insertBefore",
      "HTMLOptionElement.prototype.replaceChild",
      "HTMLParamElement.prototype.appendChild",
      "HTMLParamElement.prototype.insertBefore",
      "HTMLParamElement.prototype.replaceChild",
      "HTMLScriptElement.prototype.appendChild",
      "HTMLScriptElement.prototype.insertBefore",
      "HTMLScriptElement.prototype.replaceChild",
      "HTMLSelectElement.prototype.appendChild",
      "HTMLSelectElement.prototype.insertBefore",
      "HTMLSelectElement.prototype.replaceChild",
      "HTMLSourceElement.prototype.appendChild",
      "HTMLSourceElement.prototype.insertBefore",
      "HTMLSourceElement.prototype.replaceChild",
      "HTMLTextAreaElement.prototype.appendChild",
      "HTMLTextAreaElement.prototype.insertBefore",
      "HTMLTextAreaElement.prototype.replaceChild",
      "HTMLVideoElement.prototype.appendChild",
      "HTMLVideoElement.prototype.insertBefore",
      "HTMLVideoElement.prototype.replaceChild",
      "HTMLDocument.prototype.write",
      "HTMLDocument.prototype.writeln",
      "Object.prototype.__defineGetter__",
      "Object.prototype.__defineSetter__",
      "Object.defineProperty",
      "Object.defineProperties",
      "Function.prototype.bind",
      "Function.prototype.apply",
      "Function.prototype.call",
      "Element.prototype.setAttributeNodeNS",
      "Element.prototype.setAttributeNS",
      "Element.prototype.setAttribute",
      "Element.prototype.setAttributeNode",
    };
    dynamicProperties = new HashSet<String>(Arrays.asList(tmpProps));
    dynamicExterns = new HashSet<String>(Arrays.asList(tmpExterns));
  }

  public JSIndirectionTransform(ControlAutomaton c, CheckManager cm) {
    this.cm = cm;
    this.caut = c;
  }
  
  @Override
  public void run(SourceManager src) {
    sm = src;

    // These are HashSet rather than LinkedHashSet since we only ever
    // check containment.
    conservativeCalls = new HashSet<String>();
    for (Callsite cs : caut.getConservativeCalls()) {
      Exp callNode = cs.getExp();
      Exp tgtNode = callNode.getChild(0);
      // Higher-order scripts need at least 1 argument to do anything.
      if (callNode.getChildCount() > 1) {
        String nodecode = tgtNode.toCode();
        conservativeCalls.add(nodecode);
      }
    }

    dynamicCalls = new HashSet<String>();
    for (Callsite cs : caut.getExternCalls()) {
      for (Exp ex : cs.getPossibleExternTargets()) {
        String s = ex.toCode();
        if (dynamicExterns.contains(s)) {
          Exp callNode = cs.getExp();
          Exp tgtNode = callNode.getChild(0);
          if (callNode.getChildCount() > 1) {
            String nodecode = tgtNode.toCode();
            dynamicCalls.add(nodecode);
          }
        }
      }
    }

    sm.traverse(sm.getRoot(), new Indirector());

    Dbg.out("Callsites transformed: " + callTransformCnt, 1);
    Dbg.out("Property writes transformed: " + propertyWriteTransformCnt, 1);
    Dbg.out("Property reads transformed: " + propertyReadTransformCnt, 1);
  
    FileUtil.writeToMain("callsites-indirected:" + callTransformCnt + "\n", JAMConfig.INFO_FILENAME, true);
    FileUtil.writeToMain("property-write-indirection:" + propertyWriteTransformCnt + "\n", JAMConfig.INFO_FILENAME, true);
    FileUtil.writeToMain("property-read-indirection:" + propertyReadTransformCnt + "\n", JAMConfig.INFO_FILENAME, true);
  }

  // Create an array literal holding the call receiver, followed by
  // each of the arguments. The call node is left unchanged.
  protected Exp callArgsToArray(Traversal t, Exp n, Exp parent) {
    assert n.isInvoke();

    int childCount = n.getChildCount();
    assert childCount > 0; 

    Exp array = new JSExp(sm, JSExp.ARRAYLIT);

    for (int i=childCount-1; i>=1; i--) {
      Exp arg = n.getChild(i);
      Exp newArg = arg.clone();
      array.addChildToFront(newArg);
    }
    
    return array;
  }

  /*
   * Primary transformation cases
   */

  // Transform a callsite to use |JAM.call|.
  //
  // introspect(ispect) {
  //   var r = o.m(arg0, ..);
  // }
  //   =====>
  // var r = JAM.call(o.m, o, [arg0, ..], ispect);
  //
  // If the call is part of a larger expression or block, the call is
  // extracted to a temporary variable and any external expressions
  // remain in the introspect block. See commaCall0.js for an example.
  // Subexpression are recursively protected also. See exfil_test.js.
  protected void indirectCallsite(Traversal t, Exp n, Exp parent, Exp ispect) {
    assert n.isInvoke();
    
    // Create |JAM.call()|.
    Exp libName = JSExp.createName(sm, JAMConfig.TRANSACTION_LIBRARY);
    Exp libProp = null;
    if (n.is(JSExp.NEW)) {
      libProp = JSExp.createString(sm, "new");
    } else {
      libProp = JSExp.createString(sm, "call");
    }
    Exp libTgt = new JSExp(JSExp.GETPROP, libName, libProp);
    Exp libCall = new JSExp(JSExp.CALL, libTgt);

    Exp tgt = n.getFirstChild();
    Exp tgtParam = tgt.clone();
    libCall.addChildToBack(tgtParam);
    if (n.isCall()) {
      // Also add the receiver for CALL nodes (but not NEW nodes).
      // This might use some special logic to recognize JAM.get targets.
      Exp actualTarget = getCallTarget(n);
      if (ExpUtil.isAccessor(actualTarget)) {
        Exp recParam = getCallReceiver(n).clone();
        libCall.addChildToBack(recParam);
      } else {
        libCall.addChildToBack(new JSExp(sm, JSExp.NULL));
      }
    }
    Exp args = callArgsToArray(t, n, parent);
    libCall.addChildToBack(args);

    if (ispect != null) {
      libCall.addChildToBack(ispect.clone());
    }

    // Replace the old call with the constructed library call.
    parent.replaceChild(n, libCall);
    sm.reportCodeChange();
  }

  // Perform a transformation on (potential) direct eval calls.
  // It is the case that |window.eval| is not considered direct.
  //
  // var r = eval(arg0, ...);
  //   =====>
  // if (JAM.isEval(eval)) {
  //   var r = eval("introspect(JAM.policy.pFull) {" + arg0 + "}");
  // } else {
  //   var r = JAM.call(eval, null, [arg0, ...]);
  // }
  //
  // A direct eval within a transaction is transformed as follows.
  //
  // introspector(JAM.policy.ispect) {
  //   var r = eval(arg0, ...);
  // }
  //   =====>
  // if (JAM.isEval(eval)) {
  //   var r = eval("introspect(JAM.policy.pFull) {" + arg0 + "}");
  // } else {
  //   var r = JAM.call(eval, null, [arg0, ...], ispect);
  // }
  protected void indirectDirectEvalCall(Traversal t, Exp n, Exp parent, Exp ispect) {
    int childCount = n.getChildCount();
    assert n.isCall() && childCount > 1;

    Exp stmt = ExpUtil.getEnclosingStatement(n);
    Exp stmtParent = stmt.getParent();

    Exp stmtCopy = stmt.clone();
    // Dig into the copy and find the node corresponding to |n|.
    Exp nCopy = ExpUtil.getCorrespondingSubtree(stmtCopy, stmt, n);

    // Create |var r = JAM.call(eval, null, [arg0, ..])|.
    indirectCallsite(t, n, parent, ispect);

    // Create |var r = eval("introspect(JAM.policy.pFull) {" + arg0 + "}")|
    String openStr = JAMConfig.TRANSACTION_KEYWORD + "("
      + JAMConfig.TRANSACTION_LIBRARY + "."
      + JAMConfig.INTROSPECTOR_LIST + "."
      + JAMConfig.COMPREHENSIVE_INTROSPECTOR + ") { ";
    Exp openIntrospect = JSExp.createString(sm, openStr);
    Exp oldArg = nCopy.getChild(1);
    Exp oldArgCopy = oldArg.clone();
    Exp closeIntrospect = JSExp.createString(sm, " }");

    // Addition/concatenation is left-associative.
    Exp newArgLeft = new JSExp(JSExp.ADD, openIntrospect, oldArgCopy);
    Exp newArg = new JSExp(JSExp.ADD, newArgLeft, closeIntrospect);
    nCopy.replaceChild(oldArg, newArg);
    Exp thenBranch = new JSExp(sm, JSExp.BLOCK);
    thenBranch.addChildToBack(stmtCopy);

    // Create |JAM.isEval(eval)|
    Exp libName = JSExp.createName(sm, JAMConfig.TRANSACTION_LIBRARY);
    Exp libProp = JSExp.createString(sm, "isEval");
    Exp libTgt = new JSExp(JSExp.GETPROP, libName, libProp);
    Exp libCall = new JSExp(JSExp.CALL, libTgt);
    Exp libArg = nCopy.getChild(0).clone();
    libCall.addChildToBack(libArg);

    // Create a new BLOCK containing the indirection call.
    Exp elseBranch = new JSExp(sm, JSExp.BLOCK);

    // Create and insert the IF statement.
    Exp ifNode = new JSExp(JSExp.IF, libCall, thenBranch, elseBranch);
    stmtParent.addChildAfter(ifNode, stmt);

    // Do this last to avoid conflicts with |stmt| having a parent.
    elseBranch.addChildToBack(stmt.detachFromParent());
  }

  protected void indirectPropertyRead(Traversal t, Exp n, Exp parent, Exp ispect) {
    assert n.isName() || ExpUtil.isAccessor(n);

    Exp obj = null;
    Exp prop = null;
    if (n.isName()) {
      obj = new JSExp(sm, JSExp.NULL);
      prop = JSExp.createString(sm, n.getString());
    } else {
      obj = n.getFirstChild();
      prop = n.getChild(1);
      obj.detachFromParent();
      prop.detachFromParent();
    }

    // Generate the call |JAM.set(obj, prop, val)|.
    Exp libName = JSExp.createName(sm, JAMConfig.TRANSACTION_LIBRARY);
    Exp proxName = JSExp.createString(sm, "get");
    Exp libAcc = new JSExp(JSExp.GETPROP, libName, proxName);
    Exp proxCall = new JSExp(JSExp.CALL, libAcc, obj, prop);

    // Pass the introspector to |set|.
    if (ispect != null) {
      proxCall.addChildToBack(ispect.clone());
    }

    parent.replaceChild(n, proxCall);
  }

  // Wrap a property write that may generate dynamic code.
  // obj.prop = val;
  //   ==> 
  // JAM.set(obj, prop, val);
  //
  protected void indirectPropertyWrite(Traversal t, Exp n, Exp parent, Exp ispect) {
    // %%% Should support compound assignment too!
    assert n.isAssign() || ExpUtil.isUnOp(n);

    Exp lhs = n.cloneAssignLHS();
    assert ExpUtil.isAccessor(lhs) || lhs.isName();
    Exp rhs = n.cloneAssignRHS();

    Exp obj = null;
    Exp prop = null;
    if (lhs.isName()) {
      obj = new JSExp(sm, JSExp.NULL);
      prop = JSExp.createString(sm, lhs.getString());
    } else {
      obj = lhs.getFirstChild();
      prop = lhs.getChild(1);
      obj.detachFromParent();
      prop.detachFromParent();
    }

    // Generate the call |JAM.set(obj, prop, val)|.
    Exp libName = JSExp.createName(sm, JAMConfig.TRANSACTION_LIBRARY);
    Exp proxName = JSExp.createString(sm, "set");
    Exp libAcc = new JSExp(JSExp.GETPROP, libName, proxName);
    Exp proxCall = new JSExp(JSExp.CALL, libAcc, obj, prop, rhs);

    // Pass the introspector to |set|.
    if (ispect != null) {
      proxCall.addChildToBack(ispect.clone());
    }

    parent.replaceChild(n, proxCall);
  }

  protected Exp getCallTarget(Exp n) {
    assert n.isInvoke();
    Exp tgt = n.getFirstChild();

    if (tgt.isCall()) {
      Exp subtgt = tgt.getFirstChild();
      String subs = subtgt.toCode();
      if (subs.equals("JAM.get")) {
        // Return the first argument.
        Exp rec = tgt.getChild(1).clone();
        Exp prop = tgt.getChild(2).clone();
        if (prop.isString()) {
          tgt = new JSExp(JSExp.GETPROP, rec, prop);
        } else {
          tgt = new JSExp(JSExp.GETELEM, rec, prop);
        }
      }
    } else if (tgt.isAccessor()) {
      // This case is expected. 
    } else if (tgt.isName()) {
      // This case is expected. 
    } else if (tgt.is(JSExp.THIS)) {
      // This case is expected. 
    } else {
      Dbg.warn("Unexpected call target case: " + tgt.toCode());      
    }

    return tgt;
  }

  protected Exp getCallReceiver(Exp n) {
    if (n.is(JSExp.NEW)) return null;
    assert n.isCall();
    
    Exp tgt = n.getFirstChild();

    Exp rec = null;
    if (tgt.isCall()) {
      Exp subtgt = tgt.getFirstChild();
      String subs = subtgt.toCode();
      if (subs.equals("JAM.get")) {
        // Return the first argument.
        rec = tgt.getChild(1);
      }
    } else if (tgt.isAccessor()) {
      rec = tgt.getFirstChild();
    } else if (tgt.isName() || tgt.is(JSExp.THIS)) {
      rec = null;
    } else {
      Dbg.warn("Unexpected call receiver case: " + tgt.toCode());      
    }

    return rec;
  }

  protected boolean shouldIndirectCall(Exp n) {
    assert n.isInvoke();
    if (n.getChildCount() == 1) {
      // Higher-order scripts need at least 1 argument to do anything.
      return false;
    }
    Exp tgt = getCallTarget(n);

    String s = tgt.toCode();
    return dynamicCalls.contains(s) || conservativeCalls.contains(s);
  }

  protected boolean maybeDirectEvalCall(Exp n) {
    assert n.isInvoke();
    Exp tgtNode = n.getFirstChild();
    String s = tgtNode.toCode();
    return s.equals("eval");
  }

  protected boolean shouldIndirectAssign(Exp n) {
    // %%% Should support compound assignment too!
    assert n.isAssign() || ExpUtil.isUnOp(n);
    Exp lhs = n.cloneAssignLHS();
    if (!lhs.isAccessor()) return false;

    // Assignment of certain values can't trigger any scripts.
    Exp rhs = n.cloneAssignRHS();
    if (ExpUtil.returnsNumber(rhs)) {
      return false;
    } else if (ExpUtil.returnsBoolean(rhs)) {
      return false;
    } else if (rhs.isName()) {
      String valname = rhs.getString();
      String valtype = sm.getType(valname);
      if (valtype != null && (valtype.equals("Number") || valtype.equals("Boolean"))) {
        return false;
      }
    }

    Exp obj = lhs.getFirstChild();
    Exp prop = lhs.getChild(1);

    // %%% This assumes the policy property is non-numeric.
    boolean doTransform = false;
    if (prop.isString()) {
      // This covers both the case of property access and string
      // literal element access.
      String propStr = prop.getString();  
      if (dynamicProperties.contains(propStr)) {
        doTransform = true;
      }
    } else if (prop.isName()) {
      // This is the general element access case.
      String propName = prop.getString();
      String propType = sm.getType(propName);
      if (propType == null || propType.equals("String") || propType.equals("Object")) {
        doTransform = true;
      }
    } else if (ExpUtil.returnsNumber(prop)) {
      doTransform = false;
    } else if (ExpUtil.returnsBoolean(prop)) {
      doTransform = false;
    } else if (prop.is(JSExp.THIS)) {
      doTransform = true;
    } else {
      Dbg.warn("Unexpected property transformation case: " + prop + " / " + prop.toCode());
      doTransform = true;
    }

    // %%% Check some info about the object?

    return doTransform;
  }

  public class TxIndirector implements Traverser {
    protected Exp tx;
    protected Exp ispect;
    protected Exp txBlock;
    protected Set<PredicateType> ptypes;
    protected Set<Exp> callsWithTransformedTargets;

    public TxIndirector(Exp t) {
      assert t.isTransaction();
      tx = t;
      ispect = TxUtil.getTxIntrospector(tx);
      txBlock = TxUtil.getTxBlock(tx);
      ptypes = TxUtil.getTxPredicateTypes(cm, tx);
      callsWithTransformedTargets = new HashSet<Exp>();
    }

    @Override
    public boolean shouldTraverse(Traversal t, Exp n, Exp parent) {
      // Don't descend into the introspector.
      if (n == ispect) {
        return false;
      }
      // Or nested introspectors.
      // %%% What if these were part of the original program?
      if (parent != null && parent.isTransaction()) {
        if (n == parent.getFirstChild()) {
          return false;
        }
      }
      return true;
    }
    
    @Override
    public void visit(Traversal t, Exp n, Exp parent) {
      if (n.isAccessor()) {
        if (parent.isAssignment() && parent.cloneAssignLHS().getOriginal() == n) {
          // This case is handled when visiting the parent.
          return;
        }
        if (ptypes != null && ptypes.contains(JSPredicateType.READ)) {
          indirectPropertyRead(t, n, parent, ispect);
          propertyReadTransformCnt++;
        }
        // Unfortunately we have to transform calls to the read function.
        // If the following condition is not true, the callsite will be
        // visited and transformed anyway.
        if (ptypes == null || (!ptypes.contains(JSPredicateType.INVOKE)
            && !ptypes.contains(JSPredicateType.CONSTRUCT))) {
          // Presumably a NEW expression will work fine without
          // transformation since it doesn't use the receiver.
          if (parent.isCall()) {
            callsWithTransformedTargets.add(parent);
          }
        }
      } else if (ExpUtil.isAssignment(n)) {
        // %%% This is an assumption based on the initial
        // %%% pass with JSStatementTransform.
        assert n.isAssign() || ExpUtil.isUnOp(n) : "Non-standard assign statement within a transaction: " + n.toCode();
        // %%% Currently we don't handle assignments to global/with props.
        Exp lhs = n.cloneAssignLHS();
        if (lhs.isAccessor()) {
          if (ExpUtil.isUnOp(n) && ptypes != null && ptypes.contains(JSPredicateType.READ)) {
            // We have to replace the unary operator with an equivalent
            // assignment before rewriting.
            // %%% Ugly.
            Exp newn = new JSExp(JSExp.ASSIGN, n.cloneAssignLHS(), n.cloneAssignRHS());
            parent.replaceChild(n, newn);
            n = newn;
            indirectPropertyRead(t, n, parent, ispect);
            propertyReadTransformCnt++;
          }
          if (ptypes != null && ptypes.contains(JSPredicateType.WRITE)) {
            indirectPropertyWrite(t, n, parent, ispect);
            sm.reportCodeChange();
            propertyWriteTransformCnt++;
          } else if (shouldIndirectAssign(n)) {
            indirectPropertyWrite(t, n, parent, null);
            sm.reportCodeChange();
            propertyWriteTransformCnt++;
          }
        }
      } else if (n.isInvoke()) {
        if (maybeDirectEvalCall(n)) {
          indirectDirectEvalCall(t, n, parent, null);
          sm.reportCodeChange();
          callTransformCnt++;
        } else if (ptypes != null && (ptypes.contains(JSPredicateType.INVOKE)
            || ptypes.contains(JSPredicateType.CONSTRUCT))) {
          indirectCallsite(t, n, parent, ispect);
          sm.reportCodeChange();
          callTransformCnt++;
        } else if (shouldIndirectCall(n)) {
          indirectCallsite(t, n, parent, null);
          sm.reportCodeChange();
          callTransformCnt++;
        } else if (callsWithTransformedTargets.contains(n)) {
          indirectCallsite(t, n, parent, null);
          sm.reportCodeChange();
          callTransformCnt++;
        }
      // Don't mess with transactions that aren't JAM-woven.
      } else if (n == tx && ptypes != null) {
        // Move statements outside of the transaction.
        int stmtCnt = txBlock.getChildCount();
        for (int i=0; i<stmtCnt; i++) {
          Exp stmt = txBlock.getChild(0).detachFromParent();
          n.getParent().addChildBefore(stmt, n);
        }
        // Remove the empty transaction.
        n.detachFromParent();
        sm.reportCodeChange();
      }
    }
  }

  public class Indirector implements Traverser {

    // This holds TRANSACTION nodes containing expressions that need to
    // have indirection applies.
    Set<Exp> txsToIndirect;

    public Indirector() {
      txsToIndirect = new HashSet<Exp>();
    }

    @Override
    public boolean shouldTraverse(Traversal t, Exp n, Exp parent) {
      return true;
    }

    @Override
    public void visit(Traversal t, Exp n, Exp parent) {
      if (n.isInvoke()) {
        // Get any surrounding transaction.
        Exp tx = n.isWithinType(JSExp.TRANSACTION);
        // Wait for the TxIndirector to handle transactions.
        if (tx != null) {
          txsToIndirect.add(tx);
          return;
        }

        if (maybeDirectEvalCall(n)) {
          indirectDirectEvalCall(t, n, parent, null);
          sm.reportCodeChange();
          callTransformCnt++;
        } else if (shouldIndirectCall(n)) {
          indirectCallsite(t, n, parent, null);
          sm.reportCodeChange();
          callTransformCnt++;
        }
      } else if (ExpUtil.isAssignment(n)) {
        boolean doTransform = shouldIndirectAssign(n);
        if (doTransform) {
          Exp tx = n.isWithinType(JSExp.TRANSACTION);
          if (tx != null) {
            txsToIndirect.add(tx);
            return;
          }
          indirectPropertyWrite(t, n, parent, null);
          sm.reportCodeChange();
          propertyWriteTransformCnt++;
        }
      } else if (n.isTransaction()) {
        if (txsToIndirect.contains(n)) {
          TxIndirector txi = new TxIndirector(n);
          // Traverse the transaction block and indirect as needed.
          sm.traverse(n, txi);
        }
      }
    }
  }
}
