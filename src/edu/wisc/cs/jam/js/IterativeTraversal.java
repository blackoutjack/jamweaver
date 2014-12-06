package edu.wisc.cs.jam.js;

import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.Traversal;
import edu.wisc.cs.jam.Traversal.Traverser;
import edu.wisc.cs.jam.Exp;

public abstract class IterativeTraversal implements Traverser {
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
  public boolean shouldTraverse(Traversal t, Exp n, Exp parent) {
    return true;
  }
}
