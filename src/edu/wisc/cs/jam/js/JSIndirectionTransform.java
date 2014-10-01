
package edu.wisc.cs.jam.js;

import java.util.List;
import java.util.Set;
import java.util.HashSet;
import java.util.Collection;
import java.util.Arrays;

import com.google.javascript.jscomp.NodeTraversal;
import com.google.javascript.jscomp.NodeTraversal.Callback;
import com.google.javascript.rhino.Node;
import com.google.javascript.rhino.Token;
import com.google.javascript.jscomp.CallGraph;
import com.google.javascript.jscomp.CallGraph.Function;
import com.google.javascript.jscomp.CallGraph.Callsite;
import com.google.javascript.jscomp.Compiler;
import com.google.javascript.jscomp.Scope;

import edu.wisc.cs.automaton.Automaton;
import edu.wisc.cs.automaton.Automaton.Edge;
import edu.wisc.cs.automaton.State;

import edu.wisc.cs.jam.ControlAutomaton;
import edu.wisc.cs.jam.CheckManager;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.PolicyType;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.JAM;

import edu.wisc.cs.jam.tx.TxUtil;

import edu.wisc.cs.jam.js.JSPolicyLanguage.JSPolicyType;

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
      Node callNode = cs.getAstNode();
      Node tgtNode = callNode.getFirstChild();
      // Higher-order scripts need at least 1 argument to do anything.
      if (callNode.getChildCount() > 1) {
        conservativeCalls.add(sm.codeFromNode(tgtNode));
      }
    }

    dynamicCalls = new HashSet<String>();
    for (Callsite cs : caut.getExternCalls()) {
      for (Node ex : cs.getPossibleExternTargets()) {
        String s = sm.codeFromNode(ex);
        if (dynamicExterns.contains(s)) {
          Node callNode = cs.getAstNode();
          Node tgtNode = callNode.getFirstChild();
          if (callNode.getChildCount() > 1) {
            dynamicCalls.add(sm.codeFromNode(tgtNode));
          }
        }
      }
    }

    Compiler comp = sm.getCompiler();
    Node root = sm.getRootNode();

    NodeTraversal.traverse(comp, root, new Indirector());

    Dbg.out("Callsites transformed: " + callTransformCnt, 1);
    Dbg.out("Property writes transformed: " + propertyWriteTransformCnt, 1);
    Dbg.out("Property reads transformed: " + propertyReadTransformCnt, 1);
  
    if (JAM.Opts.countNodes) {
      FileUtil.writeToMain("callsites-indirected:" + callTransformCnt + "\n", JAMConfig.INFO_FILENAME, true);
      FileUtil.writeToMain("property-write-indirection:" + propertyWriteTransformCnt + "\n", JAMConfig.INFO_FILENAME, true);
      FileUtil.writeToMain("property-read-indirection:" + propertyReadTransformCnt + "\n", JAMConfig.INFO_FILENAME, true);
    }
  }

  // Create an array literal holding the call receiver, followed by
  // each of the arguments. The call node is left unchanged.
  protected Node callArgsToArray(NodeTraversal t, Node n, Node parent) {
    assert n.isCall() || n.isNew();

    int childCount = n.getChildCount();
    assert childCount > 0; 

    Node array = new Node(Token.ARRAYLIT);

    for (int i=childCount-1; i>=1; i--) {
      Node arg = n.getChildAtIndex(i);
      Node newArg = arg.cloneTree();
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
  protected void indirectCallsite(NodeTraversal t, Node n, Node parent, Node ispect) {
    assert n.isCall() || n.isNew();
    
    // Create |JAM.call()|.
    Node libName = Node.newString(Token.NAME, JAMConfig.TRANSACTION_LIBRARY);
    Node libProp = null;
    if (n.isNew()) {
      libProp = Node.newString("new");
    } else {
      libProp = Node.newString("call");
    }
    Node libTgt = new Node(Token.GETPROP, libName, libProp);
    Node libCall = new Node(Token.CALL, libTgt);

    Node tgt = n.getFirstChild();
    Node tgtParam = tgt.cloneTree();
    libCall.addChildToBack(tgtParam);
    if (n.isCall()) {
      // Also add the receiver for CALL nodes (but not NEW nodes).
      // This might use some special logic to recognize JAM.get targets.
      Node actualTarget = getCallTarget(n);
      if (NodeUtil.isAccessor(actualTarget)) {
        Node recParam = getCallReceiver(n).cloneTree();
        libCall.addChildToBack(recParam);
      } else {
        libCall.addChildToBack(new Node(Token.NULL));
      }
    }
    Node args = callArgsToArray(t, n, parent);
    libCall.addChildToBack(args);

    if (ispect != null) {
      libCall.addChildToBack(ispect.cloneTree());
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
  protected void indirectDirectEvalCall(NodeTraversal t, Node n, Node parent, Node ispect) {
    int childCount = n.getChildCount();
    assert NodeUtil.isCall(n) && childCount > 1;

    Node stmt = NodeUtil.getEnclosingStatement(n);
    Node stmtParent = stmt.getParent();

    Node stmtCopy = stmt.cloneTree();
    // Dig into the copy and find the node corresponding to |n|.
    Node nCopy = NodeUtil.findEquivalentSubtree(stmtCopy, n);

    // Create |var r = JAM.call(eval, null, [arg0, ..])|.
    indirectCallsite(t, n, parent, ispect);

    // Create |var r = eval("introspect(JAM.policy.pFull) {" + arg0 + "}")|
    String openStr = JAMConfig.TRANSACTION_KEYWORD + "("
      + JAMConfig.TRANSACTION_LIBRARY + "."
      + JAMConfig.INTROSPECTOR_LIST + "."
      + JAMConfig.COMPREHENSIVE_INTROSPECTOR + ") { ";
    Node openIntrospect = Node.newString(openStr);
    Node oldArg = nCopy.getChildAtIndex(1);
    Node oldArgCopy = oldArg.cloneTree();
    Node closeIntrospect = Node.newString(" }");

    // Addition/concatenation is left-associative.
    Node newArgLeft = new Node(Token.ADD, openIntrospect, oldArgCopy);
    Node newArg = new Node(Token.ADD, newArgLeft, closeIntrospect);
    nCopy.replaceChild(oldArg, newArg);
    Node thenBranch = new Node(Token.BLOCK);
    thenBranch.addChildToBack(stmtCopy);

    // Create |JAM.isEval(eval)|
    Node libName = Node.newString(Token.NAME, JAMConfig.TRANSACTION_LIBRARY);
    Node libProp = Node.newString("isEval");
    Node libTgt = new Node(Token.GETPROP, libName, libProp);
    Node libCall = new Node(Token.CALL, libTgt);
    Node libArg = nCopy.getChildAtIndex(0).cloneTree();
    libCall.addChildToBack(libArg);

    // Create a new BLOCK containing the indirection call.
    Node elseBranch = new Node(Token.BLOCK);

    // Create and insert the IF statement.
    Node ifNode = new Node(Token.IF, libCall, thenBranch, elseBranch);
    stmtParent.addChildAfter(ifNode, stmt);

    // Do this last to avoid conflicts with |stmt| having a parent.
    elseBranch.addChildToBack(stmt.detachFromParent());
  }

  protected void indirectPropertyRead(NodeTraversal t, Node n, Node parent, Node ispect) {
    assert n.isName() || NodeUtil.isAccessor(n);

    Node obj = null;
    Node prop = null;
    if (n.isName()) {
      obj = new Node(Token.NULL);
      prop = Node.newString(Token.STRING, n.getString());
    } else {
      obj = n.getFirstChild();
      prop = n.getChildAtIndex(1);
      obj.detachFromParent();
      prop.detachFromParent();
    }

    // Generate the call |JAM.set(obj, prop, val)|.
    Node libName = Node.newString(Token.NAME, JAMConfig.TRANSACTION_LIBRARY);
    Node proxName = Node.newString(Token.STRING, "get");
    Node libAcc = new Node(Token.GETPROP, libName, proxName);
    Node proxCall = new Node(Token.CALL, libAcc, obj, prop);

    // Pass the introspector to |set|.
    if (ispect != null) {
      proxCall.addChildToBack(ispect.cloneTree());
    }

    parent.replaceChild(n, proxCall);
  }

  // Wrap a property write that may generate dynamic code.
  // obj.prop = val;
  //   ==> 
  // JAM.set(obj, prop, val);
  //
  protected void indirectPropertyWrite(NodeTraversal t, Node n, Node parent, Node ispect) {
    assert n.isAssign();

    Node lhs = n.getFirstChild();
    assert NodeUtil.isAccessor(lhs) || lhs.isName();
    Node rhs = n.getChildAtIndex(1);

    Node obj = null;
    Node prop = null;
    if (lhs.isName()) {
      obj = new Node(Token.NULL);
      prop = Node.newString(Token.STRING, lhs.getString());
    } else {
      obj = lhs.getFirstChild();
      prop = lhs.getChildAtIndex(1);
      obj.detachFromParent();
      prop.detachFromParent();
    }

    // Generate the call |JAM.set(obj, prop, val)|.
    Node libName = Node.newString(Token.NAME, JAMConfig.TRANSACTION_LIBRARY);
    Node proxName = Node.newString(Token.STRING, "set");
    Node libAcc = new Node(Token.GETPROP, libName, proxName);

    rhs.detachFromParent();
    Node proxCall = new Node(Token.CALL, libAcc, obj, prop, rhs);

    // Pass the introspector to |set|.
    if (ispect != null) {
      proxCall.addChildToBack(ispect.cloneTree());
    }

    parent.replaceChild(n, proxCall);
  }

  protected Node getCallTarget(Node n) {
    assert n.isCall() || n.isNew();
    Node tgt = n.getFirstChild();

    if (tgt.isCall()) {
      Node subtgt = tgt.getFirstChild();
      String subs = sm.codeFromNode(subtgt);
      if (subs.equals("JAM.get")) {
        // Return the first argument.
        Node rec = tgt.getChildAtIndex(1).cloneTree();
        Node prop = tgt.getChildAtIndex(2).cloneTree();
        if (prop.isString()) {
          tgt = new Node(Token.GETPROP, rec, prop);
        } else {
          tgt = new Node(Token.GETELEM, rec, prop);
        }
      }
    } else if (NodeUtil.isAccessor(tgt)) {
      // This case is expected. 
    } else if (tgt.isName()) {
      // This case is expected. 
    } else {
      Dbg.warn("Unexpected call target case: " + sm.codeFromNode(tgt));      
    }

    return tgt;
  }

  protected Node getCallReceiver(Node n) {
    if (n.isNew()) return null;
    assert n.isCall();
    
    Node tgt = n.getFirstChild();

    Node rec = null;
    if (tgt.isCall()) {
      Node subtgt = tgt.getFirstChild();
      String subs = sm.codeFromNode(subtgt);
      if (subs.equals("JAM.get")) {
        // Return the first argument.
        rec = tgt.getChildAtIndex(1);
      }
    } else if (NodeUtil.isAccessor(tgt)) {
      rec = tgt.getFirstChild();
    } else if (tgt.isName()) {
      rec = null;
    } else {
      Dbg.warn("Unexpected call target case: " + sm.codeFromNode(tgt));      
    }

    return rec;
  }

  protected boolean shouldIndirectCall(Node n) {
    assert n.isCall() || n.isNew();
    if (n.getChildCount() == 1) {
      // Higher-order scripts need at least 1 argument to do anything.
      return false;
    }
    Node tgt = getCallTarget(n);

    String s = sm.codeFromNode(tgt);
    return dynamicCalls.contains(s) || conservativeCalls.contains(s);
  }

  protected boolean maybeDirectEvalCall(Node n) {
    assert n.isCall() || n.isNew();
    Node tgtNode = n.getFirstChild();
    String s = sm.codeFromNode(tgtNode);
    return s.equals("eval");
  }

  protected boolean shouldIndirectAssign(Node n) {
    assert n.isAssign();
    Node lhs = n.getFirstChild();
    if (!NodeUtil.isAccessor(lhs)) return false;

    Node obj = lhs.getFirstChild();
    Node prop = lhs.getChildAtIndex(1);

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
      if (propType == null || propType.equals("String")) {
        doTransform = true;
      }
    } else if (prop.isNumber()) {
      doTransform = false;
    } else if (prop.isThis()) {
      doTransform = true;
    } else {
      Dbg.warn("Unexpected property transformation case: " + prop);
      doTransform = true;
    }

    // %%% Check some info about the object?

    return doTransform;
  }

  public class TxIndirector implements Callback {
    protected Node tx;
    protected Node ispect;
    protected Node txBlock;
    protected Set<PolicyType> ptypes;
    protected Set<Node> callsWithTransformedTargets;

    public TxIndirector(Node t) {
      assert NodeUtil.isTransaction(t);
      tx = t;
      ispect = TxUtil.getTxIntrospector(tx);
      txBlock = TxUtil.getTxBlock(tx);
      ptypes = TxUtil.getTxPolicyTypes(cm, tx);
      callsWithTransformedTargets = new HashSet<Node>();
    }

    @Override
    public boolean shouldTraverse(NodeTraversal t, Node n, Node parent) {
      // Don't descend into the introspector.
      if (n == ispect) {
        return false;
      }
      return true;
    }
    
    @Override
    public void visit(NodeTraversal t, Node n, Node parent) {
      if (NodeUtil.isAccessor(n)) {
        if (NodeUtil.isAssign(parent) && NodeUtil.getAssignLHS(parent) == n) {
          // This case is handled when visiting the parent.
          return;
        }
        if (ptypes != null && ptypes.contains(JSPolicyType.READ)) {
          indirectPropertyRead(t, n, parent, ispect);
        }
        // Unfortunately we have to transform calls to the read function.
        // If the following condition is not true, the callsite will be
        // visited and transformed anyway.
        if (ptypes == null || !ptypes.contains(JSPolicyType.CALL)) {
          // Presumably a NEW expression will work fine without
          // transformation since it doesn't use the receiver.
          if (parent.isCall()) {
            callsWithTransformedTargets.add(parent);
          }
        }
      } else if (NodeUtil.isAssign(n)) {
        assert n.isAssign() : "Non-standard assign statement within a transaction: " + sm.codeFromNode(n);
        // %%% Currently we don't handle assignments to global/with props.
        Node lhs = NodeUtil.getAssignLHS(n);
        if (NodeUtil.isAccessor(lhs)) {
          if (ptypes != null && ptypes.contains(JSPolicyType.WRITE)) {
            indirectPropertyWrite(t, n, parent, ispect);
            sm.reportCodeChange();
            propertyWriteTransformCnt++;
          } else if (shouldIndirectAssign(n)) {
            indirectPropertyWrite(t, n, parent, null);
            sm.reportCodeChange();
            propertyWriteTransformCnt++;
          }
        }
      } else if (n.isCall() || n.isNew()) {
        if (maybeDirectEvalCall(n)) {
          indirectDirectEvalCall(t, n, parent, null);
          sm.reportCodeChange();
          callTransformCnt++;
        } else if (ptypes != null && ptypes.contains(JSPolicyType.CALL)) {
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
          Node stmt = txBlock.getChildAtIndex(0).detachFromParent();
          n.getParent().addChildBefore(stmt, n);
        }
        // Remove the empty transaction.
        n.detachFromParent();
        sm.reportCodeChange();
      }
    }
  }

  public class Indirector implements Callback {

    // This holds TRANSACTION nodes containing expressions that need to
    // have indirection applies.
    Set<Node> txNodesToIndirect;

    public Indirector() {
      txNodesToIndirect = new HashSet<Node>();
    }

    @Override
    public boolean shouldTraverse(NodeTraversal t, Node n, Node parent) {
      return true;
    }

    @Override
    public void visit(NodeTraversal t, Node n, Node parent) {
      if (NodeUtil.isCall(n) || NodeUtil.isNew(n)) {
        // Get any surrounding transaction.
        Node tx = NodeUtil.isWithinTransaction(n);
        // Wait for the TxIndirector to handle transactions.
        if (tx != null) {
          txNodesToIndirect.add(tx);
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
      } else if (n.isAssign()) {
        boolean doTransform = shouldIndirectAssign(n);
        if (doTransform) {
          Node tx = NodeUtil.isWithinTransaction(n);
          if (tx != null) {
            txNodesToIndirect.add(tx);
            return;
          }
          indirectPropertyWrite(t, n, parent, null);
          sm.reportCodeChange();
          propertyWriteTransformCnt++;
        }
      } else if (NodeUtil.isTransaction(n)) {
        if (txNodesToIndirect.contains(n)) {
          TxIndirector txi = new TxIndirector(n);
          Compiler comp = sm.getCompiler();
          // Traverse the transaction block and indirect as needed.
          NodeTraversal.traverse(comp, n, txi);
        }
      }
    }
  }
}
