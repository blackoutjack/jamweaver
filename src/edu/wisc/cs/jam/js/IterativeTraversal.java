package edu.wisc.cs.jam.js;

import com.google.javascript.rhino.Node;
import com.google.javascript.jscomp.NodeTraversal;
import com.google.javascript.jscomp.NodeTraversal.Callback;

import edu.wisc.cs.jam.SourceManager;


public abstract class IterativeTraversal implements Callback {
  private boolean changed;
  private boolean more;
  protected SourceManager sm;

  public IterativeTraversal(SourceManager src) {
    sm = src;
    changed = false;
    more = false;
  }

  protected void flagChange(boolean val) {
    changed = val;
    if (changed) sm.reportCodeChange();
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
