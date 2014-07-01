package edu.wisc.cs.jam;

import java.util.List;

public interface Tree {
  public abstract int getTreeSize();
  public abstract int getChildCount();
  public abstract List<Exp> getChildren();
  public abstract Exp getFirstChild();
  public abstract Exp getChild(int i);
  public abstract Exp getLastChild();
  public abstract Exp getParent();
  public abstract String toCode();
}
