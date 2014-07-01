package edu.wisc.cs.jam.js;

import com.google.javascript.rhino.Node;
import com.google.javascript.jscomp.NodeTraversal;
import com.google.javascript.jscomp.NodeTraversal.Callback;

import edu.wisc.cs.jam.SourceFile;


public abstract class IterativeTraversal implements Callback {
  private boolean changed;
  private boolean more;
  protected SourceFile sourceFile;

  public IterativeTraversal(SourceFile src) {
    sourceFile = src;
    changed = false;
    more = false;
  }

  protected void flagChange(boolean val) {
    changed = val;
    if (changed) sourceFile.reportCodeChange();
  }

  protected void flagMore(boolean val) {
    more = val;
  }

  public boolean madeChange() {
    return changed;
  }

  public boolean hasMore() {
    boolean ret = more;
    more = false;
    return ret;
  }

  @Override
  public boolean shouldTraverse(NodeTraversal t, Node n, Node parent) {
    return true;
  }
}
