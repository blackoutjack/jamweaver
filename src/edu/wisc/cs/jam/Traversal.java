
package edu.wisc.cs.jam;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Iterator;
import java.util.List;

import edu.wisc.cs.jam.js.JSExp;
import edu.wisc.cs.jam.js.ExpUtil;

// This class is inspired, and to a substantial extent, copied, from
// Closure's com.google.javascript.jscomp.NodeTraversal.

// Traversal allows an iteration through the nodes in the parse tree,
// and facilitates the optimizations on the parse tree.
public class Traversal {
  private final Traverser callback;

  // Stack containing the Scopes that have been created. The Scope objects
  // are lazily created; so the {@code scopeRoots} stack contains the
  // Nodes for all Scopes that have not been created yet.
  private final Deque<Scope> scopes = new ArrayDeque<>();

  // A stack of scope roots. All scopes that have not been created
  // are represented in this Deque.
  private final Deque<Exp> scopeRoots = new ArrayDeque<>();

  // Possible callback for scope entry and exist
  private ScopedTraverser scopeCallback;

  // Callback for tree-based traversals
  public interface Traverser {
    // Visit a node in pre order (before visiting its children) and
    // decides whether this node's children should be traversed. If
    // children are traversed, they will be visited by
    // {@link #visit(Traversal, Exp, Exp)} in postorder.
    boolean shouldTraverse(Traversal t, Exp e, Exp parent);

    // Visit a node in postorder (after its children have been visited).
    // A node is visited only if all its parents should be traversed
    // ({@link #shouldTraverse(Traversal, Exp, Exp)}).
    void visit(Traversal t, Exp e, Exp parent);
  }

  // Callback that also knows about scope changes
  public interface ScopedTraverser extends Traverser {

    // Called immediately after entering a new scope. The new scope can
    // be accessed through t.getScope()
    void enterScope(Traversal t);

    // Called immediately before exiting a scope. The ending scope can
    // be accessed through t.getScope()
    void exitScope(Traversal t);
  }

  // Abstract scoped callback to visit all nodes in postorder.
  public abstract static class AbstractScopedTraverser implements ScopedTraverser {
    @Override
    public final boolean shouldTraverse(Traversal t, Exp e, Exp parent) {
      return true;
    }

    @Override
    public void enterScope(Traversal t) {}

    @Override
    public void exitScope(Traversal t) {}
  }

  // Creates a node traversal using the specified callback interface
  // and the scope creator.
  public Traversal(Traverser t) {
    this.callback = t;
    if (t instanceof ScopedTraverser) {
      this.scopeCallback = (ScopedTraverser)t;
    }
  }

  // Traverse a parse tree recursively.
  public void traverse(Exp root) {
    pushScope(root);
    // Null parent ensures that the shallow callbacks will traverse root
    traverseBranch(root, null);
    popScope();
  }

  // Traverses a node recursively.
  public static void traverse(Exp root, Traverser t) {
    Traversal trav = new Traversal(t);
    trav.traverse(root);
  }

  // Traverse a branch.
  private void traverseBranch(Exp e, Exp parent) {
    if (!callback.shouldTraverse(this, e, parent)) {
      return;
    }

    if (e.isFunction()) {
      traverseFunction(e, parent);
    } else {
      List<Exp> children = e.getChildren();
      for (Exp child : children) {
        traverseBranch(child, e);
      }
    }

    callback.visit(this, e, parent);
  }

  // Traverse a function.
  private void traverseFunction(Exp e, Exp parent) {
    assert e.getChildCount() == 3;
    assert e.isFunction();

    final Exp fnName = e.getChild(0);
    final Exp args = e.getChild(1);
    final Exp body = e.getChild(2);
    boolean isFunctionExpression = parent != null
        && ExpUtil.isFunctionExpression(e);

    if (!isFunctionExpression) {
      // Functions declarations are in the containing scope.
      traverseBranch(fnName, e);
    }

    pushScope(e);

    if (isFunctionExpression) {
      // Function expression names are only accessible within the
      // function scope.
      traverseBranch(fnName, e);
    }

    // Args
    traverseBranch(args, e);

    // Body
    // ES6 "arrow" function may not have a block as a body.
    traverseBranch(body, e);

    popScope();
  }

  // Traverses a non-function block.
  private void traverseBlockScope(Exp e) {
    pushScope(e);
    for (Exp child : e.getChildren()) {
      traverseBranch(child, e);
    }
    popScope();
  }

  // Creates a new scope (e.g. when entering a function).
  protected void pushScope(Exp e) {
    scopeRoots.push(e);
    if (scopeCallback != null) {
      scopeCallback.enterScope(this);
    }
  }

  // Pops back to the previous scope (e.g. when leaving a function).
  protected void popScope() {
    if (scopeCallback != null) {
      scopeCallback.exitScope(this);
    }
    if (scopeRoots.isEmpty()) {
      scopes.pop();
    } else {
      scopeRoots.pop();
    }
  }

  // Gets the current scope.
  public Scope getScope() {
    Scope scope = scopes.isEmpty() ? null : scopes.peek();
    if (scopeRoots.isEmpty()) {
      return scope;
    }

    Iterator<Exp> it = scopeRoots.descendingIterator();
    while (it.hasNext()) {
      scope = Scope.create(it.next(), scope);
      scopes.push(scope);
    }
    scopeRoots.clear();
    // The top scopeRoot is now the top scope.
    return scope;
  }

  // Returns the current scope's root.
  public Exp getScopeRoot() {
    if (scopeRoots.isEmpty()) {
      return scopes.peek().getRootExp();
    } else {
      return scopeRoots.peek();
    }
  }

  // Determines whether the traversal is currently in the global scope.
  public boolean inGlobalScope() {
    return getScopeDepth() <= 1;
  }

  public int getScopeDepth() {
    return scopes.size() + scopeRoots.size();
  }

  public boolean hasScope() {
    return !(scopes.isEmpty() && scopeRoots.isEmpty());
  }

}
