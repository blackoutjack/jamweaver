
package edu.wisc.cs.jam.js;

import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.Scope;
import edu.wisc.cs.jam.Traversal;
import edu.wisc.cs.jam.Traversal.Traverser;
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

  public static void resetVariableNames() {
    varUnique = 0; 
  }

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

  protected Exp createNameNode(SourceManager sm, Scope s) {
    // Ensure that the generated name is unique.
    String name = null;
    while (s.isDeclared(name = newVariableName(), true)) {}
    // Create the new node.
    Exp e = JSExp.createName(sm, name);
    return e;
  }

  public class DeanonymizeFunction implements Traverser {
    SourceManager sm;

    public DeanonymizeFunction(SourceManager src) {
      super();
      sm = src;
    }

    // Give an anonymous function a name.
    protected void deanonymize(Traversal t, Exp fn, Exp parent) {
      // Create a name for the function.
      Exp newName = createNameNode(sm, t.getScope());

      // Replace the current (empty) name with the generated one.
      fn.replaceChild(fn.getChild(0), newName);
    }

    @Override
    public boolean shouldTraverse(Traversal t, Exp e, Exp parent) {
      return true;
    }

    @Override
    public void visit(Traversal t, Exp e, Exp parent) {
      if (ExpUtil.isAnonymousFunction(e)) {
        deanonymize(t, e, parent);
        sm.reportCodeChange();
      }
    }
  }

  public class FunctionElevate implements Traverser {

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
    protected void elevateFunction(Traversal t, Exp e, Exp parent) {
      assert !ExpUtil.isAnonymousFunction(e) : "Encountered unconverted anonymous function";

      if (!ExpUtil.isStatementBlock(parent)) {
        Exp stmt = ExpUtil.getEnclosingStatement(parent);
        Exp topBlock = stmt.getParent();
        assert ExpUtil.isStatementBlock(topBlock);
        
        Exp nextUp = topBlock.getParent();
        while (!topBlock.isScript() && !nextUp.isFunction()) {
          //Dbg.dbg("ELEVATE: " + e.getFirstChild() + " / " + e + " / " + parent + " / " + stmt + " / " + topBlock + " / " + blockParent);
          if (ExpUtil.isStatementBlock(nextUp)) {
            topBlock = nextUp;
          }
          nextUp = nextUp.getParent();
        }
        
        Exp fn = e.getFirstChild();
        assert fn.isName() : "Function with non-NAME name: " + fn;
        Exp fname = fn.clone();
        parent.replaceChild(e, fname);

        topBlock.addChildToFront(e);
      }
    }

    @Override
    public boolean shouldTraverse(Traversal t, Exp e, Exp parent) {
      return true;
    }

    @Override
    public void visit(Traversal t, Exp e, Exp parent) {
      
      if (e.isFunction() && !parent.is(JSExp.GETTER_DEF) && !parent.is(JSExp.SETTER_DEF)) {
        elevateFunction(t, e, parent);
      }
    }
  }

  // Add explicit returns to functions without them.
  public class ReturnExplicit implements Traverser {
    protected SourceManager sm;

    public ReturnExplicit(SourceManager src) {
      super();
      sm = src;
    }

    @Override
    public boolean shouldTraverse(Traversal t, Exp e, Exp parent) {
      return true;
    }

    protected void addReturn(Traversal t, Exp e, Exp parent) {
      assert parent.isFunction();
      assert e.is(JSExp.BLOCK);
      Exp ret = new JSExp(sm, JSExp.RETURN);
      e.addChildToBack(ret);
    }
    
    @Override
    public void visit(Traversal t, Exp e, Exp parent) {
      if (e.isFunction()) {
        Exp body = e.getLastChild();
        assert body.is(JSExp.BLOCK);
        boolean needsReturn = false;
        if (body.getChildCount() == 0) needsReturn = true;
        if (!needsReturn) {
          Exp last = body.getLastChild();
          if (!last.isReturn() && !last.isThrow()) {
            needsReturn = true;
          }
        }
        if (needsReturn) {
          addReturn(t, body, e);
          sm.reportCodeChange();
        }
      }
    }

  }

  // Break up string literals that are too large for XSB.
  public class ArrayLiteralConverter implements Traverser {
    public static final int MAX_ENTRIES = 500;

    SourceManager sm;

    public ArrayLiteralConverter(SourceManager src) {
      sm = src;
    }

    @Override
    public boolean shouldTraverse(Traversal t, Exp e, Exp parent) {
      return true;
    }

    /* 
     * Convert an array literal with many entries "a = [e0,...,eNm1]" into
     * a staged construction:
     *   var v0 = [e0,...,eMAXm1];
     *   var v1 = [eMAX,...,eNm1];
     *   a = v0.concat(v1);
     */
    protected void convertArrayLiteral(Traversal t, Exp e, Exp parent) {
      assert e.is(JSExp.ARRAYLIT);
      int entryCnt = e.getChildCount();
      if (entryCnt > MAX_ENTRIES) {
        Exp part0 = new JSExp(sm, JSExp.ARRAYLIT);
        for (int i=0; i<MAX_ENTRIES; i++) {
          part0.addChildToBack(e.getFirstChild().detachFromParent());
        }

        // Generate a new variable to hold the first part.
        Exp tmp0 = createNameNode(sm, t.getScope());
        // Create a reference to use in place of the original array.
        Exp tmpUse0 = tmp0.clone();
        // Create a var initializer for the new variable.
        Exp tmpInit0 = new JSExp(JSExp.VAR, tmp0);
        // And set it as the initialization value.
        tmpInit0.getFirstChild().addChildToBack(part0);

        Exp tmp1 = createNameNode(sm, t.getScope());
        Exp tmpUse1 = tmp1.clone();
        Exp tmpInit1 = new JSExp(JSExp.VAR, tmp1);

        // Create the concat node.
        Exp concatAcc = new JSExp(JSExp.GETPROP, tmpUse0, JSExp.createString(sm, "concat"));
        Exp concatCall = new JSExp(JSExp.CALL, concatAcc, tmpUse1);
        
        Exp stmt = ExpUtil.getEnclosingStatement(e);

        // Replace the original statement with the concatenation.
        parent.replaceChild(e, concatCall);
        // Set remainder of the original array to the temp variable.
        tmpInit1.getFirstChild().addChildToBack(e);
        
        stmt.getParent().addChildBefore(tmpInit0, stmt);
        stmt.getParent().addChildBefore(tmpInit1, stmt);

        // Recursively break up the array.
        convertArrayLiteral(t, e, tmpInit1.getFirstChild());
      }
    }
    
    @Override
    public void visit(Traversal t, Exp e, Exp parent) {
      if (e.is(JSExp.ARRAYLIT) && e.getChildCount() > MAX_ENTRIES) {
        convertArrayLiteral(t, e, parent);
      }
    }

  }

  // Break up string literals that are too large for XSB.
  public class StringConverter implements Traverser {
    public static final int MAX_LENGTH = 5000;

    SourceManager sm;

    public StringConverter(SourceManager src) {
      sm = src;
    }

    @Override
    public boolean shouldTraverse(Traversal t, Exp e, Exp parent) {
      return true;
    }

    /* 
     * Convert a really long string "ABC...XYZ" into a concatenation:
     *   var v0 = "ABC";
     *   var v1 = v0 + "...";
     *   var v2 = v1 + "XYZ";
     */
    protected void convertString(Traversal t, Exp e, Exp parent) {
      assert e.isString();
      String full = e.getString();
      int len = full.length();
      if (len > MAX_LENGTH) {
        String part0 = full.substring(0, len - MAX_LENGTH);
        String part1 = full.substring(len - MAX_LENGTH, len);
        Exp node0 = JSExp.createString(sm, part0);
        Exp node1 = JSExp.createString(sm, part1);

        // Generate a new variable.
        Exp tmp = createNameNode(sm, t.getScope());
        // Create a reference to use in place of the original string.
        Exp tmpUse = tmp.clone();
        // Create a var initializer for the new variable.
        Exp tmpInit = new JSExp(JSExp.VAR, tmp);
        // Create the concatenation node.
        Exp concat = new JSExp(JSExp.ADD, node0, node1);
        // And set it as the initialization value.
        tmpInit.getFirstChild().addChildToBack(concat);

        Exp stmt = ExpUtil.getEnclosingStatement(e);
        stmt.getParent().addChildBefore(tmpInit, stmt);

        // Insert the temporary reference into the original statement.
        parent.replaceChild(e, tmpUse);

        // Recursively break up the initial part.
        convertString(t, node0, concat);
      }
    }
    
    @Override
    public void visit(Traversal t, Exp e, Exp parent) {
      if (e.isString()) {
        String s = e.getString();
        convertString(t, e, parent);
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
  public class SplitSetsAndCalls implements Traverser {

    SourceManager sm;

    public SplitSetsAndCalls(SourceManager src) {
      sm = src;
    }

    @Override
    public boolean shouldTraverse(Traversal t, Exp e, Exp parent) {
      return true;
    }

    protected void splitSetCall(Traversal t, Exp rhs, Exp assn) {
      assert assn.isAssign();
      Exp tmpName = createNameNode(sm, t.getScope());
      Exp tmpRef = tmpName.clone();
      assn.replaceChild(rhs, tmpRef);
      tmpName.addChildToBack(rhs);
      Exp tmpInit = new JSExp(JSExp.VAR, tmpName);
      Exp stmt = ExpUtil.getEnclosingStatement(assn);
      Exp stmtParent = stmt.getParent();
      stmtParent.addChildBefore(tmpInit, stmt);
    }
    
    @Override
    public void visit(Traversal t, Exp e, Exp parent) {
      if (e.isAssign()) {
        Exp lhs = e.cloneAssignLHS();
        Exp rhs = ExpUtil.getAssignRHS(e);
        if (lhs.isAccessor() && rhs.isInvoke()) {
          splitSetCall(t, rhs, e);
        }
      }
    }

  }

}
