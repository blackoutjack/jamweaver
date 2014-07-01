
package edu.wisc.cs.jam;

import edu.wisc.cs.automaton.State;

import java.util.List;
import java.util.ArrayList;

public class RuntimeCheck {

  // The source file to which this check can be applied.
  private SourceFile sourceFile;
  // The Exp to which this check is applied.
  private Exp location;
  // The policy edge that is evaluated by this check.
  private Policy.Edge policyEdge;
  // Whether this check is currently inserted into the source code
  private boolean applied;
  // A locked check is one that hasn't been ruled out and won't be by
  // this JAM process.
  private boolean locked;

  public RuntimeCheck(SourceFile src, Exp s, Policy.Edge edge) {
    sourceFile = src;
    location = s;
    policyEdge = edge;
    
    applied = false;
    locked = false;
  }

  public void lock() {
    locked = true;
  }

  public boolean isLocked() {
    return locked;
  }

  public boolean isApplied() {
    return applied;
  }

  public boolean isViolationCheck() {
    if (policyEdge.getDestination().isFinal())
      return true;
    return false;
  }

  public Policy.Edge getPolicyEdge() {
    return policyEdge;
  }

  public Exp getLocation() {
    return location;
  }

  public SourceFile getSourceFile() {
    return sourceFile;
  }

  // Insert this check into the source code.
  public synchronized void apply() {
    throw new UnsupportedOperationException("RuntimeCheck is effectively abstract; must override the apply method");
  }

  // Remove (unapply) this check from the source code.
  public synchronized void unapply() {
    throw new UnsupportedOperationException("RuntimeCheck is effectively abstract; must override the apply method");
  }

  // Note that this check was already in the source code to start with.
  // Removal is disallowed.
  public void setOriginal() {
    applied = true;
    locked = true;
  }

  protected void setApplied(boolean val) {
    applied = val;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append(getPolicyEdge());
    sb.append(" | ");
    sb.append(getLocation().toCode());
    return sb.toString();
  }

}
