
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
public class JSPropertyTransform extends JSTransform {

  protected static Set<String> dynamicProperties;

  private int propertyTransformCnt;
  
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
    dynamicProperties = new HashSet<String>(Arrays.asList(tmpProps));
  }

  public JSPropertyTransform() {
  }

  @Override
  public void run(SourceFile src) {
    String suf = "transformed.js";
    Compiler comp = src.getCompiler();
    Node root = src.getRootNode();

    // This one should be done after the TransactionConverter.
    PropertyConverter pc = new PropertyConverter(src);
    NodeTraversal.traverse(comp, root, pc);
    Dbg.out("Property writes transformed: " + propertyTransformCnt, 1);

    // Generate the transformed output.
    src.reportCodeChange();
    String filename = FileUtil.getBaseName() + "-" + suf;
    FileUtil.writeToMain(src.toString() + "\n", filename);
  }

  public class PropertyConverter implements Callback {

    SourceFile sourceFile;

    public PropertyConverter(SourceFile src) {
      sourceFile = src;
    }

    @Override
    public boolean shouldTraverse(NodeTraversal t, Node n, Node parent) {
      return true;
    }

    // Wrap a property write that may generate dynamic code.
    // obj.prop = val;
    //   ==> 
    // JAM.set(obj, prop, val);
    //
    protected void transformProperty(NodeTraversal t, Node n, Node parent) {
      assert n.isAssign();

      Node tx = NodeUtil.isWithinTransaction(n);
      Node ispect = null;
      if (tx != null) {
        ispect = tx.getFirstChild().cloneTree();
        Node block = tx.getChildAtIndex(1);
        assert block.isBlock();

        boolean canRemove = parent.isExprResult();
        if (canRemove) {
          assert parent.getParent() == block;
          parent.detachFromParent();
          Node txParent = tx.getParent();
          if (block.getChildCount() == 0) {
            txParent.replaceChild(tx, parent);
          } else {
            txParent.addChildBefore(parent, tx);
          }
        } else {
          // The assignment is part of a more complex statement.
          Node newName = createNameNode(t.getScope());
          parent.replaceChild(n, newName.cloneTree());

          Node newInit = new Node(Token.VAR, newName);
          newName.addChildToBack(n);
          tx.getParent().addChildBefore(newInit, tx);
          // This may be invalid, but the transform below will fix it.
          parent = newName;
        }
      }

      Node lhs = n.getFirstChild();
      assert NodeUtil.isAccessor(lhs);
      Node rhs = n.getChildAtIndex(1);

      Node obj = lhs.getFirstChild();
      Node prop = lhs.getChildAtIndex(1);

      // Generate the call |JAM.set(obj, prop, val)|.
      Node libName = Node.newString(Token.NAME, JAMConfig.TRANSACTION_LIBRARY);
      Node proxName = Node.newString(Token.STRING, "set");
      Node libAcc = new Node(Token.GETPROP, libName, proxName);

      obj.detachFromParent();
      prop.detachFromParent();
      rhs.detachFromParent();
      Node proxCall = new Node(Token.CALL, libAcc, obj, prop, rhs);

      // Pass the introspector to |set|.
      if (ispect != null) {
        proxCall.addChildToBack(ispect);
      }

      parent.replaceChild(n, proxCall);

      propertyTransformCnt++;
    }

    @Override
    public void visit(NodeTraversal t, Node n, Node parent) {
      if (!n.isAssign()) return;
      Node lhs = n.getFirstChild();
      if (!NodeUtil.isAccessor(lhs)) return;

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
        String propType = sourceFile.getType(propName);
        if (propType == null || propType.equals("String")) {
          doTransform = true;
        }
      } else if (prop.isNumber()) {
        doTransform = false;
      } else if (prop.isThis()) {
        doTransform = true;
      } else {
        Dbg.warn("Unexpected element transformation case: " + prop);
        doTransform = true;
      }

      // %%% Check some info about the object?

      if (doTransform) {
        transformProperty(t, n, parent);
      }
    }
  }
}
