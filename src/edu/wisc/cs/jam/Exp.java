package edu.wisc.cs.jam;

import java.util.List;
import java.util.ArrayList;
import java.util.Set;

// An Exp is any program snippet that can be evaluated.
public abstract class Exp {

  protected Exp parent;
  protected List<Exp> children;

  // Override these to return true as appropriate.
  public abstract boolean isBlock();
  public abstract boolean isStatement();
  public abstract boolean isControl();
  public abstract Exp clone();

  public int getExpSize() {
    // %%% Perhaps store this and only recalculate on change.
    int cnt = 1;
    for (Exp c : getChildren()) {
      cnt += c.getExpSize();
    }
    return cnt;
  }

  public int getTreeSize() {
    // %%% Perhaps store this and only recalculate on change.
    int cnt = 1;
    for (Exp c : getChildren()) {
      cnt += c.getTreeSize();
    }
    return cnt;
  }

  // Child-access methods.
  public int getChildCount() {
    return children.size();
  }
  public List<Exp> getChildren() {
    return new ArrayList<Exp>(children);
  }
  public Exp getFirstChild() {
    return children.get(0);
  }
  public Exp getChild(int i) {
    return children.get(i);
  }
  public Exp getLastChild() {
    return children.get(children.size() - 1);
  }
  public Exp getParent() {
    return parent;
  }

  public Exp detachFromParent() {
    assert parent != null;
    parent.removeChild(this);
    return this;
  }
  public void removeChild(Exp child) {
    assert children.contains(child);
    children.remove(child);
    child.parent = null;
  }
  public void replaceChild(Exp child, Exp newChild) {
    assert child.parent == this;
    assert newChild.parent == null;

    int i = children.indexOf(child);
    children.set(i, newChild);

    newChild.parent = this;
    child.parent = null;
  }
  public void addChildToBack(Exp newChild) {
    children.add(newChild);
    newChild.parent = this;
  }

  // Exp-type-specific functions.
  public abstract boolean is(int type);
  public abstract boolean isAnd();
  // A call, constructor invocation, etc.
  public abstract boolean isInvoke();
  // Typically, a function or method call, but not a constructor.
  public abstract boolean isCall();
  public abstract boolean isBoolean();
  public abstract boolean isFunction();
  public abstract boolean isName();
  public abstract boolean isNumber();
  public abstract boolean isNot();
  public abstract boolean isString();
  public abstract boolean isAccessor();
  public abstract boolean isBooleanOp();
  public abstract boolean isDeclaration();
  public abstract boolean isRegExp();
  public abstract boolean isScript();
  public abstract boolean isReturn();
  public abstract boolean isThrow();
  public abstract boolean isTransaction();
  // %%% Eliminate one of these or explain them.
  public abstract boolean isNoOp();

  // Any type of assignment, including compound (+=, etc.) but *not*
  // variable declarations and initializers.
  public abstract boolean isAssignment();
  // Specifically a normal assign node (x = y).
  public abstract boolean isAssign();

  // AST queries
  public abstract Exp cloneAssignLHS();
  public abstract Exp cloneAssignRHS();
  public abstract int getType();
  public abstract Exp isWithinType(int t);
  public abstract boolean containsType(int t);
  public abstract boolean isInGlobalScope();
  public abstract String getString();
  public abstract Exp getCondition();
  public abstract void findNames(Set<String> out);
  public abstract void findType(int t, List<Exp> out);
  public abstract void findNames(Set<String> out, boolean blocks);
  public abstract void findType(int t, List<Exp> out, boolean blocks);

  // Utility methods.
  public abstract SourceManager getSourceManager(); // %%% Might should just be a SourceFile
  public abstract String toAST();
  public abstract String toQueryAST();
  public abstract String toNormalizedAST(Set<String> polnames);
  public abstract String toCode();

}
