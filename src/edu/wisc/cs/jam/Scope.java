
package edu.wisc.cs.jam;

import java.util.Iterator;
import java.util.Map;
import java.util.LinkedHashMap;

import edu.wisc.cs.jam.js.ExpUtil;
import edu.wisc.cs.jam.js.JSExp;

// This class is inspired, and to a substantial extent, copied, from
// Closure's com.google.javascript.jscomp.Scope.

public class Scope {

  private Scope parent;
  private Exp root;
  private Map<String,Var> vars;

  // The arguments variable is special, in that it's declared in every local
  // scope, but not explicitly declared.
  private static final String ARGUMENTS = "arguments";

  protected Scope(Exp r, Scope p) {
    root = r;
    parent = p;
    vars = new LinkedHashMap<String,Var>();
  }

  public static Scope create(Exp e, Scope p) {
    Scope scope = new Scope(e, p);
    scope.scanRoot();

    return scope;
  }

  protected void scanRoot() {
    if (root.isFunction()) {
      Exp fnNameNode = root.getFirstChild();
      Exp args = root.getChild(1);
      Exp body = root.getChild(2);

      // Bleed the function name into the scope, if it hasn't
      // been declared in the outer scope.
      String fnName = fnNameNode.getString();
      if (!fnName.isEmpty() && ExpUtil.isFunctionExpression(root)) {
        declareVar(fnNameNode);
      }

      // Args: Declare function variables
      assert args.is(JSExp.PARAM_LIST);
      for (int i=0; i<args.getChildCount(); i++) {
        Exp a = args.getChild(i);
        assert a.isName();
        declareVar(a);
      }

      // Body
      scanVars(body);
    } else {
      // It's the global block
      assert getParent() == null;
      scanVars(root);
    }
  }

  /**
   * Scans and gather variables declarations under a Node
   */
  protected void scanVars(Exp e) {
    if (e.is(JSExp.VAR)) {
      // Declare all variables. e.g. var x = 1, y, z;
      for (int i=0; i<e.getChildCount(); i++) {
        Exp child = e.getChild(i);
        declareVar(child);
      }
      return;
    } else if (e.isFunction()) {
      if (ExpUtil.isFunctionExpression(e)) {
        return;
      }

      String fnName = e.getFirstChild().getString();
      if (fnName.isEmpty()) {
        // This is invalid, but allow it so the checks can catch it.
        return;
      }
      declareVar(e.getFirstChild());
      // Should not examine function's children.
      return;
    } else if (e.is(JSExp.CATCH)) {
      assert e.getChildCount() == 2;
      assert e.getFirstChild().isName();
      // The first child is the exception and the second child
      // is the code block.
      Exp var = e.getFirstChild();
      Exp block = e.getChild(1);

      declareVar(var);
      scanVars(block);
      return;  // only one child to scan
    }

    // Variables can only occur in statement-level nodes, so
    // we only need to traverse children in a couple special cases.
    if (ExpUtil.isControl(e) || e.isTransaction() || e.is(JSExp.LABEL)
        || e.isScript() || e.isBlock()) {
      for (int i=0; i<e.getChildCount(); i++) {
        Exp child = e.getChild(i);
        scanVars(child);
      }
    }
  }

  // Declares a variable.
  // @param e The Exp of type NAME corresponding to the variable.
  protected void declareVar(Exp e) {
    assert e.isName();

    String name = e.getString();
    if (isDeclared(name, false) || (isLocal() && name.equals(ARGUMENTS))) {
      Dbg.out("Duplicate declaration: " + name, 3); 
    } else {
      Var v = new Var(e);
      vars.put(name, v);
    }
  }

  public Exp getRootExp() {
    return root;
  }

  public Scope getParent() {
    return parent;
  }

  public Var getVar(String name) {
    return vars.get(name);
  }

  public Iterator<Var> getVars() {
    return vars.values().iterator();
  }

  public int getVarCount() {
    return vars.size();
  }

  public boolean isDeclared(String name, boolean recurse) {
    if (vars.containsKey(name)) return true;
    if (recurse && parent != null) {
      return parent.isDeclared(name, recurse);
    }
    return false;
  }

  public boolean isGlobal() {
    return parent == null;
  }

  public boolean isLocal() {
    return parent != null;
  }

  public class Var {
    protected Exp nameExp;

    public Var(Exp e) {
      assert e.isName();
      nameExp = e;
    }

    public String getName() {
      return nameExp.getString();
    }

    public Exp getExp() {
      return nameExp;
    }
  }
}
