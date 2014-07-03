
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
import edu.wisc.cs.jam.SourceFile;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.JAM;

// Reuse ExpressionFlattener to maintain sequential variable naming.
public class JSCallTransform extends JSTransform {

  protected Set<String> conservativeCalls;
  protected Set<String> dynamicCalls;
  protected Set<String> directEvalCalls;
    
  protected List<String> transformableIntrospectors;
  protected List<String> callIntrospectors;

  private int dynamicEncloseCnt = 0;
  private int dynamicTransformCnt = 0;
  private int txTransformCnt = 0;
  private int txNotTransformedCnt = 0;

  protected CheckManager cm;

  protected static Set<String> dynamicExterns;
  
  static{
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
    dynamicExterns = new HashSet<String>(Arrays.asList(tmpExterns));
  }

  public JSCallTransform(ControlAutomaton c, CheckManager cm) {
    this.cm = cm;
    // These are HashSet rather than LinkedHashSet since we only ever
    // check containment.
    conservativeCalls = new HashSet<String>();
    for (Callsite cs : c.getConservativeCalls()) {
      conservativeCalls.add(NodeUtil.codeFromNode(cs.getAstNode()));
    }

    dynamicCalls = new HashSet<String>();
    directEvalCalls = new HashSet<String>();
    for (Callsite cs : c.getExternCalls()) {
      //System.err.println("CS: " + NodeUtil.codeFromNode(cs.getAstNode()));
      for (Node ex : cs.getPossibleExternTargets()) {
        String s = NodeUtil.codeFromNode(ex);
        //System.err.println("EXTERN: " + s);
        if (dynamicExterns.contains(s)) {
          Node callNode = cs.getAstNode();
          Node first = callNode.getFirstChild();

          if (NodeUtil.codeFromNode(first).equals("eval") && callNode.getChildCount() > 1) {
            // Process calls to "eval" with at least 1 argument
            // differently since they might be direct eval.
            directEvalCalls.add(NodeUtil.codeFromNode(callNode));  
          } else {
            dynamicCalls.add(NodeUtil.codeFromNode(callNode));
          }
        }
      }
    }

  }

  @Override
  public void run(SourceFile src) {
    String suf = null;
    Compiler comp = src.getCompiler();
    Node root = src.getRootNode();

    if (JAM.Opts.noIndirect) {
      // This one should be done prior to the TransactionConverter.
      NodeTraversal.traverse(comp, root, new CallEncloser());
      Dbg.out("Dynamic callsites enclosed: " + dynamicEncloseCnt, 1);
      if (JAM.Opts.countNodes)
        FileUtil.writeToMain("dynamic-callsites-enclosed:" + dynamicEncloseCnt + "\n", JAMConfig.INFO_FILENAME, true);
      suf = "callenclose.js";
    }

    transformableIntrospectors = cm.getTransformableIntrospectors(src);
    callIntrospectors = cm.getCallIntrospectors(src);

    NodeTraversal.traverse(comp, root, new EvalConverter());

    NodeTraversal.traverse(comp, root, new TransactionConverter());
    Dbg.out("Transaction-enclosed callsites transformed: " + txTransformCnt, 1);
    if (JAM.Opts.countNodes)
      FileUtil.writeToMain("enclosed-callsites-transformed:" + txTransformCnt + "\n", JAMConfig.INFO_FILENAME, true);
    Dbg.out("Transaction-enclosed callsites unable to be transformed: " + txNotTransformedCnt, 1);
    if (JAM.Opts.countNodes)
      FileUtil.writeToMain("enclosed-callsites-not-transformed:" + txNotTransformedCnt + "\n", JAMConfig.INFO_FILENAME, true);

    if (!JAM.Opts.noIndirect) {
      // This one should be done after the TransactionConverter.
      NodeTraversal.traverse(comp, root, new CallConverter());
      Dbg.out("Dynamic callsites transformed: " + dynamicTransformCnt, 1);
      if (JAM.Opts.countNodes)
        FileUtil.writeToMain("dynamic-callsites-indirected:" + dynamicTransformCnt + "\n", JAMConfig.INFO_FILENAME, true);
      suf = "calltransform.js";
    }

    // Generate the transformed output.
    src.update();
    String filename = FileUtil.getBaseName() + "-" + suf;
    FileUtil.writeToMain(src.toString() + "\n", filename);
  }

  protected Node createComprehensiveIntrospector() {
    // Create |JAMScript.introspectors.processAll|
    Node libName = Node.newString(Token.NAME, JAMConfig.TRANSACTION_LIBRARY);
    Node libProp1 = Node.newString(JAMConfig.INTROSPECTOR_LIST);
    Node libProp2 = Node.newString(JAMConfig.COMPREHENSIVE_INTROSPECTOR);
    Node libAcc1 = new Node(Token.GETPROP, libName, libProp1);
    Node libAcc2 = new Node(Token.GETPROP, libAcc1, libProp2);
    return libAcc2;
  }

  protected void setIntrospector(Node tx, Node ispect) {
    Node oldspect = tx.getFirstChild();
    tx.replaceChild(oldspect, ispect);
  }

  // Create an array literal holding the call receiver, followed by
  // each of the arguments. The call node is left unchanged.
  protected Node callArgsToArray(NodeTraversal t, Node n, Node parent) {
    assert n.isCall() || n.isNew();

    int childCount = n.getChildCount();
    assert(childCount > 0); 

    Node array = new Node(Token.ARRAYLIT);

    for (int i=childCount-1; i>=1; i--) {
      Node arg = n.getChildAtIndex(i);
      array.addChildToFront(arg.cloneTree());
    }
    
    return array;
  }
    
  // Perform a transformation to pull callsites outside of transactions.
  // introspect(ispect) {
  //   var r = o.m(arg0, ..);
  // }
  //   =====>
  // introspect(ispect) {
  //   var v0 = [[o, arg0, ..], o, o.m];
  // }
  // var r = JAMScript.call(v0[2], v0[1], v0[0]);
  //
  protected void transformCallWithinNonCallTx(NodeTraversal t, Node n, Node parent, Node tx) {
    assert NodeUtil.isTransaction(tx);
    assert n.isCall() || n.isNew();

    Node txBlock = tx.getChildAtIndex(1);
    assert(txBlock.getType() == Token.BLOCK);

    Node stmt = NodeUtil.getEnclosingStatement(n);
    Node stmtParent = stmt.getParent();
    
    // Create |var v0 = [[o, arg0, ..], o.m]|
    Node array = new Node(Token.ARRAYLIT);
    Node v0 = createNameNode(t.getScope());
    Node init0 = new Node(Token.VAR, v0.cloneTree());
    init0.getFirstChild().addChildToBack(array);

    Node args = callArgsToArray(t, n, parent);
    array.addChildToBack(args);
    Node tgt = n.getFirstChild();
    if (n.isCall() && NodeUtil.isAccessor(tgt)) {
      array.addChildToBack(tgt.getFirstChild().cloneTree());
    } else {
      // For |new|, still add a |null| receiver for consistency.
      array.addChildToBack(new Node(Token.NULL));
    }
    array.addChildToBack(tgt.cloneTree());

    // Add the new nodes to the transaction block.
    stmtParent.replaceChild(stmt, init0);

    // Create |JAMScript.call(v0[2], v0[1], v0[0])|.
    Node libName = Node.newString(Token.NAME, JAMConfig.TRANSACTION_LIBRARY);
    Node libProp = null;
    if (n.isNew()) {
      libProp = Node.newString("new");
    } else {
      libProp = Node.newString("call");
    }
    Node libTgt = new Node(Token.GETPROP, libName, libProp);
    Node libCall = new Node(Token.CALL, libTgt);

    Node get2 = new Node(Token.GETELEM, v0.cloneTree(), Node.newNumber(2));
    libCall.addChildToBack(get2);
    if (n.isCall()) {
      // Only pass the receiver to |JAMScript.call|.
      Node get1 = new Node(Token.GETELEM, v0.cloneTree(), Node.newNumber(1));
      libCall.addChildToBack(get1);
    }
    Node get0 = new Node(Token.GETELEM, v0, Node.newNumber(0));
    libCall.addChildToBack(get0);

    // Create |var r = JAMScript.call(...)|.
    // |stmt| is already detached.
    parent.replaceChild(n, libCall);
    tx.getParent().addChildAfter(stmt, tx);
  }

  // Transform transactions that check call predicates to
  // |JAMScript.callIntrospect| invocations.
  // introspect(ispect) {
  //   var r = o.m(arg0, ..);
  // }
  //   =====>
  // var r = JAMScript.callIntrospect(o.m, o, [arg0, ..]);
  //
  protected void transformCallWithinCallTx(NodeTraversal t, Node n, Node parent, Node tx) {
    assert NodeUtil.isTransaction(tx);
    assert n.isCall() || n.isNew();

    Node txParent = tx.getParent();
    Node txBlock = tx.getChildAtIndex(1);
    assert(txBlock.getType() == Token.BLOCK);
    Node ispect = tx.getChildAtIndex(0).cloneTree();

    Node stmt = NodeUtil.getEnclosingStatement(n).detachFromParent();
    if (txBlock.getChildCount() == 0) {
      txParent.replaceChild(tx, stmt);
    } else {
      txParent.addChildBefore(stmt, tx);
    }
    
    // Create |JAMScript.callIntrospect()|.
    Node libName = Node.newString(Token.NAME, JAMConfig.TRANSACTION_LIBRARY);
    Node libProp = null;
    if (n.isNew()) {
      libProp = Node.newString("newIntrospect");
    } else {
      libProp = Node.newString("callIntrospect");
    }
    Node libTgt = new Node(Token.GETPROP, libName, libProp);
    Node libCall = new Node(Token.CALL, libTgt);

    Node tgt = n.getFirstChild();
    libCall.addChildToBack(tgt.cloneTree());
    if (n.isCall()) {
      if (NodeUtil.isAccessor(tgt)) {
        libCall.addChildToBack(tgt.getFirstChild().cloneTree());
      } else {
        libCall.addChildToBack(new Node(Token.NULL));
      }
    }
    Node args = callArgsToArray(t, n, parent);
    libCall.addChildToBack(args);
    libCall.addChildToBack(ispect);

    // Replace the old call with the constructed library call.
    parent.replaceChild(n, libCall);
  }

  // Perform a transformation on callsites that may target externs that
  // generate dynamic code.
  // var r = o.m(arg0, ..);
  //   =====>
  // var r = JAMScript.call(o.m, o, [arg0, ..]);
  //
  // var r = f(arg0, ..);
  //   =====>
  // var r = JAMScript.call(f, null, [arg0, ..]);
  //
  protected void transformDynamicCall(NodeTraversal t, Node n, Node parent) {
    assert n.isCall() || n.isNew();

    int childCount = n.getChildCount();
    assert(childCount > 0); 
    
    // Create |JAMScript.call(o.m, o, [arg0, ..])|
    Node libName = Node.newString(Token.NAME, JAMConfig.TRANSACTION_LIBRARY);
    Node libProp = null;
    if (n.isNew()) {
      libProp = Node.newString("new");
    } else {
      libProp = Node.newString("call");
    }
    Node libTgt = new Node(Token.GETPROP, libName, libProp);
    Node libCall = new Node(Token.CALL, libTgt);

    // Add the arguments to the new call expression.
    Node tgt = n.getFirstChild().cloneTree();
    Node argsObj = callArgsToArray(t, n, parent);
    libCall.addChildToBack(tgt);
    if (n.isCall()) {
      if (NodeUtil.isAccessor(tgt)) {
        libCall.addChildToBack(tgt.getFirstChild().cloneTree());
      } else {
        libCall.addChildToBack(new Node(Token.NULL));
      }
    }
    libCall.addChildToBack(argsObj);

    // Replace the old call with the new expession.
    parent.replaceChild(n, libCall);
  }

  // Perform a transformation on (potential) direct eval calls.
  // It is the case that |window.eval| is not considered direct.
  //
  // var r = eval(arg0, ...);
  //   =====>
  // if (JAMScript.isEval(eval)) {
  //   var r = eval("introspect(JAMScript.introspectors.processAll) {" + arg0 + "}");
  // } else {
  //   var r = JAMScript.call(eval, null, [arg0, ...]);
  // }
  //
  // A direct eval within a transaction is transformed as follows.
  //
  // introspector(JAMScript.introspectors.ispect) {
  //   var r = eval(arg0, ...);
  // }
  //   =====>
  // if (JAMScript.isEval(eval)) {
  //   var r = eval("introspect(JAMScript.introspectors.processAll) {" + arg0 + "}");
  // } else {
  //   var r = JAMScript.callIntrospector(eval, null, [arg0, ...], ispect);
  // }
  protected void transformDirectEvalCall(NodeTraversal t, Node n, Node parent) {
    int childCount = n.getChildCount();
    assert NodeUtil.isCall(n) && childCount > 1;

    Node tx = NodeUtil.isWithinTransaction(n);
    Node stmt = NodeUtil.getEnclosingStatement(n);
    Node stmtParent = stmt.getParent();

    Node stmtCopy = stmt.cloneTree();
    // Dig into the copy and find the node corresponding to |n|.
    Node nCopy = NodeUtil.findEquivalentSubtree(stmtCopy, n);

    // Create |var r = JAMScript.call(eval, null, [arg0, ..])|.
    if (tx == null) {
      transformDynamicCall(t, n, parent);
    } else {
      stmtParent = tx.getParent();
      Node ispectNode = tx.getFirstChild();
      while (ispectNode.isGetProp()) {
        ispectNode = ispectNode.getChildAtIndex(1);
      }
      assert ispectNode.isString();
      String ispectName = ispectNode.getString();
      if (callIntrospectors.contains(ispectName)) {
        transformCallWithinCallTx(t, n, parent, tx);
      } else {
        transformCallWithinNonCallTx(t, n, parent, tx);
      }
      txTransformCnt++;
    }

    // Create |var r = eval("introspect(JAMScript.introspectors.processAll) {" + arg0 + "}")|
    Node openIntrospect = Node.newString(JAMConfig.TRANSACTION_KEYWORD + "(" + JAMConfig.TRANSACTION_LIBRARY + ".introspectors.processAll) { ");
    Node oldArg = nCopy.getChildAtIndex(1);
    Node oldArgCopy = oldArg.cloneTree();
    Node closeIntrospect = Node.newString(" }");

    // Addition/concatenation is left-associative.
    Node newArgLeft = new Node(Token.ADD, openIntrospect, oldArgCopy);
    Node newArg = new Node(Token.ADD, newArgLeft, closeIntrospect);
    nCopy.replaceChild(oldArg, newArg);
    Node thenBranch = new Node(Token.BLOCK);
    thenBranch.addChildToBack(stmtCopy);

    // Create |JAMScript.isEval(eval)|
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

  public class CallEncloser implements Callback {

    @Override
    public boolean shouldTraverse(NodeTraversal t, Node n, Node parent) {
      return true;
    }

    // Enclose callsites that may target externs with a comprehensive
    // introspection block.
    // var r = o.m(arg0, ..);
    //   =====>
    // introspect(JAMScript.introspectors.processAll) {
    //   var r = o.m(arg0, ..);
    // }
    //
    protected void encloseDynamicCall(NodeTraversal t, Node n, Node parent) {
      assert NodeUtil.isCall(n) || NodeUtil.isNew(n);

      Node tx = NodeUtil.isWithinTransaction(n);

      Node stmt = NodeUtil.getEnclosingStatement(n);
      Node stmtParent = stmt.getParent();
      
      // Create |JAMScript.introspectors.processAll|
      Node ispect = createComprehensiveIntrospector();

      // Create |introspect(JAMScript.introspectors.processAll) { ... }|.
      if (tx == null) {
        Node prev = stmtParent.getChildBefore(stmt);
        stmt.detachFromParent();
        Node txblock = new Node(Token.BLOCK);
        txblock.addChildToBack(stmt);
        tx = new Node(Token.TRANSACTION, ispect, txblock);
        stmtParent.addChildAfter(tx, prev);
      } else {
        setIntrospector(tx, ispect);
      }
    }

    @Override
    public void visit(NodeTraversal t, Node n, Node parent) {
      if (!NodeUtil.isCall(n) && !NodeUtil.isNew(n)) return;

      String s = NodeUtil.codeFromNode(n);
      if (directEvalCalls.contains(s) || dynamicCalls.contains(s) || conservativeCalls.contains(s)) {
        encloseDynamicCall(t, n, parent);
      }
      dynamicEncloseCnt++;
    }
  }

  public class CallConverter implements Callback {

    @Override
    public boolean shouldTraverse(NodeTraversal t, Node n, Node parent) {
      return true;
    }

    @Override
    public void visit(NodeTraversal t, Node n, Node parent) {
      if (!NodeUtil.isCall(n) && !NodeUtil.isNew(n)) return;

      String s = NodeUtil.codeFromNode(n);
      if (dynamicCalls.contains(s) || conservativeCalls.contains(s)) {
        // If the call is within a transaction, just use the
        // comprehensive introspector.
        Node tx = NodeUtil.isWithinTransaction(n);
        if (tx == null) {
          transformDynamicCall(t, n, parent);
        } else {
          // Just use the comprehensive introspector.
          Node ispect = createComprehensiveIntrospector();
          setIntrospector(tx, ispect);
        }
      }
      dynamicTransformCnt++;
    }
  }

  public class EvalConverter implements Callback {

    @Override
    public boolean shouldTraverse(NodeTraversal t, Node n, Node parent) {
      return true;
    }

    @Override
    public void visit(NodeTraversal t, Node n, Node parent) {
      if (!NodeUtil.isCall(n) && !NodeUtil.isNew(n)) return;

      String s = NodeUtil.codeFromNode(n);
      if (directEvalCalls.contains(s)) {
        transformDirectEvalCall(t, n, parent);
      }
      dynamicTransformCnt++;
    }
  }

  public class TransactionConverter implements Callback {

    @Override
    public boolean shouldTraverse(NodeTraversal t, Node n, Node parent) {
      return true;
    }

    @Override
    public void visit(NodeTraversal t, Node n, Node parent) {
      if (!NodeUtil.isCall(n) && !NodeUtil.isNew(n)) return;

      // Get any surrounding transaction.
      Node tx = NodeUtil.isWithinTransaction(n);
      if (tx != null) {
        Node ispectNode = tx.getFirstChild();
        while (ispectNode.isGetProp()) {
          ispectNode = ispectNode.getChildAtIndex(1);
        }
        assert ispectNode.isString();
        String ispectName = ispectNode.getString();
        if (transformableIntrospectors.contains(ispectName)) {
          if (callIntrospectors.contains(ispectName)) {
            transformCallWithinCallTx(t, n, parent, tx);
          } else {
            transformCallWithinNonCallTx(t, n, parent, tx);
          }
          txTransformCnt++;
        } else {
          txNotTransformedCnt++;
        }
      }
    }
  }

}
