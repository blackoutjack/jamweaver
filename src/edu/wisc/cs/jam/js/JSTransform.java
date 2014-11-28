
package edu.wisc.cs.jam.js;

import com.google.javascript.jscomp.NodeTraversal;
import com.google.javascript.jscomp.NodeTraversal.Callback;
import com.google.javascript.rhino.Node;
import com.google.javascript.rhino.Token;
import com.google.javascript.jscomp.CompilerPass;
import com.google.javascript.jscomp.Scope;

import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.Transform;
import edu.wisc.cs.jam.Exp;

// This class contains utility functions related to JavaScript source
// manipulation. It can be instantiated directly (perhaps to create
// unique variable names) or it is subclassed by several specific
// transformations.
public class JSTransform implements Transform {

  // Generate unique variable names unique throughout the analysis.
  private static long varUnique = 0;
  public static final String prefix = "v";

  public String newVariableName() {
    return prefix + varUnique++;
  }

  public String newVariableName(String pref) {
    return pref + varUnique++;
  }

  @Override
  public void run(SourceManager src) {
    Dbg.warn("Base JSTransform does nothing when run");
  }

  protected Node createNameNode(Scope s) {
    // Ensure that the generated name is unique.
    String name = null;
    while (s.isDeclared(name = newVariableName(), true)) {}
    // Create the new node.
    Node n = Node.newString(Token.NAME, name);
    return n;
  }

  public class DeanonymizeFunction implements Callback {
    SourceManager sm;

    public DeanonymizeFunction(SourceManager src) {
      super();
      sm = src;
    }

    // Give an anonymous function a name.
    protected void deanonymize(NodeTraversal t, Node fn, Node parent) {
      // Create a name for the function.
      Node newName = createNameNode(t.getScope());

      // Replace the current (empty) name with the generated one.
      fn.replaceChild(fn.getChildAtIndex(0), newName);
    }

    @Override
    public boolean shouldTraverse(NodeTraversal t, Node n, Node parent) {
      return true;
    }

    @Override
    public void visit(NodeTraversal t, Node n, Node parent) {
      if (ExpUtil.isAnonymousFunction(n)) {
        deanonymize(t, n, parent);
        sm.reportCodeChange();
      }
    }
  }

  public class FunctionElevate implements Callback {

    SourceManager sm;

    public FunctionElevate(SourceManager src) {
      sm = src;
    }

    /* 
     * Closure will convert function statements within control
     * structures into variables initialized with a function expression.
     * So we pull functions statements out.
     * 
     * if (..) {
     *   function f() {
     *     return v;
     *   }
     *   x = v;
     * }
     *
     * so change it to...
     *
     * function f() {
     *   return v;
     * }
     * if (..) {
     *   x = v;
     * }
     * 
     * The semantics of this may differ in different browsers, but
     * under Spidermonkey's interpretation, this is actually fine. A
     * function declaration is added to the global scope whether or not
     * it's containing block is executed.
     *
     * However, V8 works differently. A function declaration is added to
     * the global scope iff the containing block is executed.
     *
     * In either case, the calling context correctly determines the
     * value of free variables within the function after flattening.
     */
    protected void elevateFunction(NodeTraversal t, Node n, Node parent) {
      assert !ExpUtil.isAnonymousFunction(n) : "Encountered unconverted anonymous function";

      if (!ExpUtil.isStatementBlock(parent)) {
        Node stmt = ExpUtil.getEnclosingStatement(parent);
        Node topBlock = stmt.getParent();
        assert ExpUtil.isStatementBlock(topBlock);
        
        Node nextUp = topBlock.getParent();
        while (!topBlock.isScript() && !nextUp.isFunction()) {
          //Dbg.dbg("ELEVATE: " + n.getFirstChild() + " / " + n + " / " + parent + " / " + stmt + " / " + topBlock + " / " + blockParent);
          if (ExpUtil.isStatementBlock(nextUp)) {
            topBlock = nextUp;
          }
          nextUp = nextUp.getParent();
        }
        
        Node fn = n.getFirstChild();
        assert fn.isName() : "Function with non-NAME name: " + fn;
        Node fname = fn.cloneTree();
        parent.replaceChild(n, fname);

        topBlock.addChildToFront(n);
      }
    }

    @Override
    public boolean shouldTraverse(NodeTraversal t, Node n, Node parent) {
      return true;
    }

    @Override
    public void visit(NodeTraversal t, Node n, Node parent) {
      
      if (n.isFunction() && !parent.isGetterDef() && !parent.isSetterDef()) {
        elevateFunction(t, n, parent);
      }
    }
  }

  // Add explicit returns to functions without them.
  public class ReturnExplicit implements Callback {
    protected SourceManager sm;

    public ReturnExplicit(SourceManager src) {
      super();
      sm = src;
    }

    @Override
    public boolean shouldTraverse(NodeTraversal t, Node n, Node parent) {
      return true;
    }

    protected void addReturn(NodeTraversal t, Node n, Node parent) {
      assert parent.isFunction();
      assert n.isBlock();
      Exp blockexp = JSExp.load(sm, n);
      Exp ret = JSExp.create(sm, new Node(Token.RETURN));
      blockexp.addChildToBack(ret);
    }
    
    @Override
    public void visit(NodeTraversal t, Node n, Node parent) {
      if (n.isFunction()) {
        Node body = n.getLastChild();
        assert body.isBlock();
        boolean needsReturn = false;
        if (body.getChildCount() == 0) needsReturn = true;
        if (!needsReturn) {
          Node last = body.getLastChild();
          if (!last.isReturn() && !last.isThrow()) {
            needsReturn = true;
          }
        }
        if (needsReturn) {
          addReturn(t, body, n);
          sm.reportCodeChange();
        }
      }
    }

  }

  // Break up string literals that are too large for XSB.
  public class ArrayLiteralConverter implements Callback {
    public static final int MAX_ENTRIES = 500;

    SourceManager sm;

    public ArrayLiteralConverter(SourceManager src) {
      sm = src;
    }

    @Override
    public boolean shouldTraverse(NodeTraversal t, Node n, Node parent) {
      return true;
    }

    /* 
     * Convert an array literal with many entries "a = [e0,...,eNm1]" into
     * a staged construction:
     *   var v0 = [e0,...,eMAXm1];
     *   var v1 = [eMAX,...,eNm1];
     *   a = v0.concat(v1);
     */
    protected void convertArrayLiteral(NodeTraversal t, Node n, Node parent) {
      assert n.isArrayLit();
      int entryCnt = n.getChildCount();
      if (entryCnt > MAX_ENTRIES) {
        Node part0 = new Node(Token.ARRAYLIT);
        for (int i=0; i<MAX_ENTRIES; i++) {
          part0.addChildToBack(n.getFirstChild().detachFromParent());
        }

        // Generate a new variable to hold the first part.
        Node tmp0 = createNameNode(t.getScope());
        // Create a reference to use in place of the original array.
        Node tmpUse0 = tmp0.cloneTree();
        // Create a var initializer for the new variable.
        Node tmpInit0 = new Node(Token.VAR, tmp0);
        // And set it as the initialization value.
        tmpInit0.getFirstChild().addChildToBack(part0);

        Node tmp1 = createNameNode(t.getScope());
        Node tmpUse1 = tmp1.cloneTree();
        Node tmpInit1 = new Node(Token.VAR, tmp1);

        // Create the concat node.
        Node concatAcc = new Node(Token.GETPROP, tmpUse0, Node.newString("concat"));
        Node concatCall = new Node(Token.CALL, concatAcc, tmpUse1);
        
        Node stmt = ExpUtil.getEnclosingStatement(n);

        // Replace the original statement with the concatenation.
        parent.replaceChild(n, concatCall);
        // Set remainder of the original array to the temp variable.
        tmpInit1.getFirstChild().addChildToBack(n);
        
        stmt.getParent().addChildBefore(tmpInit0, stmt);
        stmt.getParent().addChildBefore(tmpInit1, stmt);

        // Recursively break up the array.
        convertArrayLiteral(t, n, tmpInit1.getFirstChild());
      }
    }
    
    @Override
    public void visit(NodeTraversal t, Node n, Node parent) {
      if (n.isArrayLit() && n.getChildCount() > MAX_ENTRIES) {
        convertArrayLiteral(t, n, parent);
      }
    }

  }

  // Break up string literals that are too large for XSB.
  public class StringConverter implements Callback {
    public static final int MAX_LENGTH = 5000;

    SourceManager sm;

    public StringConverter(SourceManager src) {
      sm = src;
    }

    @Override
    public boolean shouldTraverse(NodeTraversal t, Node n, Node parent) {
      return true;
    }

    /* 
     * Convert a really long string "ABC...XYZ" into a concatenation:
     *   var v0 = "ABC";
     *   var v1 = v0 + "...";
     *   var v2 = v1 + "XYZ";
     */
    protected void convertString(NodeTraversal t, Node n, Node parent) {
      assert n.isString();
      String full = n.getString();
      int len = full.length();
      if (len > MAX_LENGTH) {
        String part0 = full.substring(0, len - MAX_LENGTH);
        String part1 = full.substring(len - MAX_LENGTH, len);
        Node node0 = Node.newString(part0);
        Node node1 = Node.newString(part1);

        // Generate a new variable.
        Node tmp = createNameNode(t.getScope());
        // Create a reference to use in place of the original string.
        Node tmpUse = tmp.cloneTree();
        // Create a var initializer for the new variable.
        Node tmpInit = new Node(Token.VAR, tmp);
        // Create the concatenation node.
        Node concat = new Node(Token.ADD, node0, node1);
        // And set it as the initialization value.
        tmpInit.getFirstChild().addChildToBack(concat);

        Node stmt = ExpUtil.getEnclosingStatement(n);
        stmt.getParent().addChildBefore(tmpInit, stmt);

        // Insert the temporary reference into the original statement.
        parent.replaceChild(n, tmpUse);

        // Recursively break up the initial part.
        convertString(t, node0, concat);
      }
    }
    
    @Override
    public void visit(NodeTraversal t, Node n, Node parent) {
      if (n.isString()) {
        String s = n.getString();
        convertString(t, n, parent);
      }
    }

  }

  // Break up statements of the form
  //
  //   a.b = c.d();
  //
  // into
  //
  //   var tmp = c.d();
  //   a.b = tmp;
  //
  public class SplitSetsAndCalls implements Callback {

    SourceManager sm;

    public SplitSetsAndCalls(SourceManager src) {
      sm = src;
    }

    @Override
    public boolean shouldTraverse(NodeTraversal t, Node n, Node parent) {
      return true;
    }

    protected void splitSetCall(NodeTraversal t, Node lhs, Node rhs, Node assn) {
      assert assn.isAssign();
      Node tmpName = createNameNode(t.getScope());
      Node tmpRef = tmpName.cloneTree();
      assn.replaceChild(rhs, tmpRef);
      tmpName.addChildToBack(rhs);
      Node tmpInit = new Node(Token.VAR, tmpName);
      Node stmt = ExpUtil.getEnclosingStatement(assn);
      Node stmtParent = stmt.getParent();
      stmtParent.addChildBefore(tmpInit, stmt);
    }
    
    @Override
    public void visit(NodeTraversal t, Node n, Node parent) {
      if (n.isAssign()) {
        Node lhs = ExpUtil.getAssignLHS(n);
        Node rhs = ExpUtil.getAssignRHS(n);
        if (ExpUtil.isAccessor(lhs) && (rhs.isCall() || rhs.isNew())) {
          splitSetCall(t, lhs, rhs, n);
        }
      }
    }

  }

}
