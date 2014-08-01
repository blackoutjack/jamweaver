
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
import edu.wisc.cs.jam.PolicyType;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.JAM;

import edu.wisc.cs.jam.js.JSPolicyLanguage.JSPolicyType;

// Reuse ExpressionFlattener to maintain sequential variable naming.
public class JSCallTransform extends JSTransform {

  public final boolean TRANFORM_GLOBAL_NAMES = false;

  protected Set<String> conservativeCalls;
  protected Set<String> dynamicCalls;
  protected Set<String> directEvalCalls;
    
  private int dynamicEncloseCnt = 0;
  private int dynamicTransformCnt = 0;
  private int txTransformCnt = 0;
  private int propertyTransformCnt = 0;

  protected CheckManager cm;
  protected SourceFile sourceFile;

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
    sourceFile = src;

    if (JAM.Opts.noIndirect) {
      // This one should be done prior to the TransactionConverter.
      NodeTraversal.traverse(comp, root, new CallEncloser());
      Dbg.out("Dynamic callsites enclosed: " + dynamicEncloseCnt, 1);
      if (JAM.Opts.countNodes)
        FileUtil.writeToMain("dynamic-callsites-enclosed:" + dynamicEncloseCnt + "\n", JAMConfig.INFO_FILENAME, true);
      suf = "callenclose.js";
    }

    NodeTraversal.traverse(comp, root, new EvalConverter());

    NodeTraversal.traverse(comp, root, new TransactionConverter());
    Dbg.out("Transaction-enclosed callsites transformed: " + txTransformCnt, 1);
    if (JAM.Opts.countNodes)
      FileUtil.writeToMain("enclosed-callsites-transformed:" + txTransformCnt + "\n", JAMConfig.INFO_FILENAME, true);
    //Dbg.out("Transaction-enclosed callsites unable to be transformed: " + txNotTransformedCnt, 1);
    //if (JAM.Opts.countNodes)
    //  FileUtil.writeToMain("enclosed-callsites-not-transformed:" + txNotTransformedCnt + "\n", JAMConfig.INFO_FILENAME, true);

    if (!JAM.Opts.noIndirect) {
      // This one should be done after the TransactionConverter.
      NodeTraversal.traverse(comp, root, new CallConverter());
      Dbg.out("Dynamic callsites transformed: " + dynamicTransformCnt, 1);
      if (JAM.Opts.countNodes)
        FileUtil.writeToMain("dynamic-callsites-indirected:" + dynamicTransformCnt + "\n", JAMConfig.INFO_FILENAME, true);
      suf = "calltransform.js";
    }

    // Generate the transformed output.
    src.reportCodeChange();
    String filename = FileUtil.getBaseName() + "-" + suf;
    FileUtil.writeToMain(src.toString() + "\n", filename);
  }

  protected Node createComprehensiveIntrospector() {
    // Create |JAM.policy.pFull|
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

  protected void transformGetExpression(NodeTraversal t, Node n, Node parent, Node ispect) {
    assert n.isName() || NodeUtil.isAccessor(n);

    Node obj = null;
    Node prop = null;
    if (n.isName()) {
      obj = new Node(Token.NULL);
      prop = Node.newString(Token.STRING, n.getString());
    } else {
      obj = n.getFirstChild();
      if (maybeTransformSubexpression(t, obj, n, ispect))
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

    propertyTransformCnt++;
  }

  protected void transformAssignExpression(NodeTraversal t, Node n, Node parent, Node ispect) {
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

    propertyTransformCnt++;
  }

  protected boolean maybeTransformSubexpression(NodeTraversal t, Node n, Node parent, Node ispect) {
    assert ispect != null;
    boolean ret = false;

    Set<PolicyType> ptypes = getPolicyTypes(ispect);

    if (NodeUtil.isAccessor(n)) {
      if (ptypes.contains(JSPolicyType.READ)) {
        //Dbg.dbg("GET TRANSFORM: " + sourceFile.codeFromNode(parent));
        transformGetExpression(t, n, parent, ispect);
        ret = true;
      }
    } else if (n.isName()) {
      if (TRANFORM_GLOBAL_NAMES) {
        Scope s = t.getScope();
        // Guard implicit properties of the global object. Note that
        // the |arguments| identifier is not declared but is not global.
        // %%% What happens if a var is declared in the global scope?
        String name = n.getString();
        if (!s.isDeclared(name, true) && !name.equals("arguments")) {
          transformGetExpression(t, n, parent, ispect);
          ret = true;
        }
      }
    } else if (n.isAssign()) {
      if (ptypes.contains(JSPolicyType.WRITE)) {
        // Transform ASSIGN nodes only, not VAR initializers.
        Node lhs = NodeUtil.getAssignLHS(n);
        if (NodeUtil.isAccessor(lhs)) {
          //Dbg.dbg("SET TRANSFORM: " + sourceFile.codeFromNode(parent));
          transformAssignExpression(t, n, parent, ispect);
          ret = true;
        } else if (lhs.isName()) {
          if (TRANFORM_GLOBAL_NAMES) {
            Scope s = t.getScope();
            // Guard implicit properties of the global object.
            // %%% How does it work if a var is declared in the global scope?
            String name = n.getString();
            if (!s.isDeclared(name, true) && !name.equals("arguments")) {
              transformAssignExpression(t, n, parent, ispect);
              ret = true;
            }
          }
        }
      }
      Node rhs = NodeUtil.getAssignRHS(n);
      // Recurse.
      if (maybeTransformSubexpression(t, rhs, rhs.getParent(), ispect))
        ret = true;
    } else if (n.isArrayLit()) {
      int childCnt = n.getChildCount();
      for (int i=0; i<childCnt; i++) {
        Node c = n.getChildAtIndex(i);
        if (maybeTransformSubexpression(t, c, n, ispect))
          ret = true;
      }
    } else if (n.isObjectLit()) {
      int childCnt = n.getChildCount();
      for (int i=0; i<childCnt; i++) {
        Node c = n.getChildAtIndex(i);
        if (c.isGetterDef()) {
          // %%% What to do here?
        } else if (c.isSetterDef()) {
          // %%% What to do here?
        } else {
          assert c.getChildCount() == 1;
          Node val = c.getFirstChild();
          if (maybeTransformSubexpression(t, val, c, ispect))
            ret = true;
        }
      }
    } else if (NodeUtil.isLiteral(n) || n.isRegExp() || n.isThis()) {
      // Do nothing for these node types.
    } else {
      Dbg.warn("Subexpression type not handled: " + n);
    }
    return ret;
  }

  // Create an array literal holding the call receiver, followed by
  // each of the arguments. The call node is left unchanged.
  protected Node callArgsToArray(NodeTraversal t, Node n, Node parent, Node ispect) {
    assert n.isCall() || n.isNew();

    int childCount = n.getChildCount();
    assert(childCount > 0); 

    Node array = new Node(Token.ARRAYLIT);

    for (int i=childCount-1; i>=1; i--) {
      Node arg = n.getChildAtIndex(i);
      Node newArg = arg.cloneTree();
      array.addChildToFront(newArg);
      if (ispect != null)
        maybeTransformSubexpression(t, newArg, array, ispect);
    }
    
    return array;
  }

  protected Node callArgsToArray(NodeTraversal t, Node n, Node parent) {
    return callArgsToArray(t, n, parent, null);
  }

  // Transform transactions that check call predicates to
  // |JAM.call| invocations.
  // introspect(ispect) {
  //   var r = o.m(arg0, ..);
  // }
  //   =====>
  // var r = JAM.call(JAM.get(o, m, ispect), o, [arg0, ..], ispect);
  // %%% The call should be extracted to a temporary variable and
  // %%% any external expressions should remain in the introspect block.
  // %%% See commaCall0.js for an example.
  // %%% Non-trivial subexpressions likewise must be extracted and left
  // %%% inside a transaction. See exfil_test.js.
  //
  protected void transformCallWithinTx(NodeTraversal t, Node n, Node parent, Node tx) {
    assert NodeUtil.isTransaction(tx);
    assert n.isCall() || n.isNew();

    Scope s = t.getScope();
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
    maybeTransformSubexpression(t, tgtParam, libCall, ispect);
    if (n.isCall()) {
      if (NodeUtil.isAccessor(tgt)) {
        Node recParam = tgt.getFirstChild().cloneTree();
        libCall.addChildToBack(recParam);
        maybeTransformSubexpression(t, recParam, libCall, ispect);
      } else {
        libCall.addChildToBack(new Node(Token.NULL));
      }
    }
    Node args = callArgsToArray(t, n, parent, ispect);
    libCall.addChildToBack(args);

    Set<PolicyType> ptypes = getPolicyTypes(ispect);
    if (ptypes.contains(JSPolicyType.CALL)) {
      libCall.addChildToBack(ispect.cloneTree());
    }

    // Replace the old call with the constructed library call.
    parent.replaceChild(n, libCall);
  }

  protected Node getTxBlock(Node tx) {
    assert NodeUtil.isTransaction(tx);
    Node ret = tx.getChildAtIndex(1);
    assert ret.isBlock();
    return ret;
  }

  protected String getIntrospectorName(Node ispect) {
    assert NodeUtil.isAccessor(ispect);
    Node ispectNode = ispect;
    while (ispectNode.isGetProp()) {
      ispectNode = ispectNode.getChildAtIndex(1);
    }
    assert ispectNode.isString() : "Introspector property is not a string: " + ispectNode;
    return ispectNode.getString();
  }

  protected String getTxIntrospectorName(Node tx) {
    assert NodeUtil.isTransaction(tx);
    Node ispectNode = tx.getFirstChild();
    while (ispectNode.isGetProp()) {
      ispectNode = ispectNode.getChildAtIndex(1);
    }
    assert ispectNode.isName();
    return ispectNode.getString();
  }

  protected Set<PolicyType> getPolicyTypes(Node ispect) {
    String ispectName = getIntrospectorName(ispect);
    return cm.getPolicyTypes(ispectName);
  }

  protected Set<PolicyType> getTxPolicyTypes(Node tx) {
    String ispectName = getTxIntrospectorName(tx);
    return cm.getPolicyTypes(ispectName);
  }

  // Perform a transformation on callsites that may target externs that
  // generate dynamic code.
  // var r = o.m(arg0, ..);
  //   =====>
  // var r = JAM.call(o.m, o, [arg0, ..]);
  //
  // var r = f(arg0, ..);
  //   =====>
  // var r = JAM.call(f, null, [arg0, ..]);
  //
  protected void transformDynamicCall(NodeTraversal t, Node n, Node parent) {
    assert n.isCall() || n.isNew();

    int childCount = n.getChildCount();
    assert(childCount > 0); 
    
    // Create |JAM.call(o.m, o, [arg0, ..])|
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
  protected void transformDirectEvalCall(NodeTraversal t, Node n, Node parent) {
    int childCount = n.getChildCount();
    assert NodeUtil.isCall(n) && childCount > 1;

    Node tx = NodeUtil.isWithinTransaction(n);
    Node stmt = NodeUtil.getEnclosingStatement(n);
    Node stmtParent = stmt.getParent();

    Node stmtCopy = stmt.cloneTree();
    // Dig into the copy and find the node corresponding to |n|.
    Node nCopy = NodeUtil.findEquivalentSubtree(stmtCopy, n);

    // Create |var r = JAM.call(eval, null, [arg0, ..])|.
    if (tx == null) {
      transformDynamicCall(t, n, parent);
    } else {
      transformCallWithinTx(t, n, parent, tx);
    }

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

  public class CallEncloser implements Callback {

    @Override
    public boolean shouldTraverse(NodeTraversal t, Node n, Node parent) {
      return true;
    }

    // Enclose callsites that may target externs with a comprehensive
    // introspection block.
    // var r = o.m(arg0, ..);
    //   =====>
    // introspect(JAM.policy.pFull) {
    //   var r = o.m(arg0, ..);
    // }
    //
    protected void encloseDynamicCall(NodeTraversal t, Node n, Node parent) {
      assert NodeUtil.isCall(n) || NodeUtil.isNew(n);

      Node tx = NodeUtil.isWithinTransaction(n);

      Node stmt = NodeUtil.getEnclosingStatement(n);
      Node stmtParent = stmt.getParent();
      
      // Create |JAM.policy.pFull|
      Node ispect = createComprehensiveIntrospector();

      // Create |introspect(JAM.policy.pFull) { ... }|.
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
          transformCallWithinTx(t, n, parent, tx);
        }
      }
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
        transformCallWithinTx(t, n, parent, tx);
        txTransformCnt++;
      }
    }
  }
}
