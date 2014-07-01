package edu.wisc.cs.jam;

import java.util.List;
import java.util.ArrayList;

public abstract class SyntaxTree implements Tree {
  protected Exp parent;
  protected List<Exp> children;

  // Override these to return true as appropriate.
  public abstract boolean isBlock();
  public abstract boolean isStatement();
  public abstract boolean isControl();

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

}
