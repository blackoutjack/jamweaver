package edu.wisc.cs.jam;

import java.util.List;
import java.util.Set;

// An Exp is any program snippet that can be evaluated.
public abstract class Exp extends SyntaxTree {
  // Exp-type-specific functions.
  public abstract boolean is(int type);
  public abstract boolean isAnd();
  public abstract boolean isCall();
  public abstract boolean isName();
  public abstract boolean isNot();
  public abstract boolean isString();
  public abstract boolean isAccessor();
  public abstract boolean isBooleanOp();
  public abstract boolean isVarDeclaration();
  public abstract boolean isRegExp();
  public abstract boolean isScript();
  public abstract boolean isReturn();
  public abstract boolean isThrow();
  public abstract boolean isTransaction();
  // %%% Eliminate one of these or explain them.
  public abstract boolean isNoOp();

  // Utility methods.
  public abstract SourceManager getSourceManager(); // %%% Might should just be a SourceFile
  public abstract Exp cloneTree();
  public abstract String toAST();
  public abstract String toQueryAST();
  public abstract String toNormalizedAST(Set<String> polnames);
  public abstract Exp getCondition();
  public abstract void findNames(Set<String> out);
}
