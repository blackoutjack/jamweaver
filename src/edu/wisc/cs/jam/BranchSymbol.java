
package edu.wisc.cs.jam;

import java.util.List;

import edu.wisc.cs.jam.xsb.XSBInterface;

import edu.wisc.cs.jam.js.JSExp;

public class BranchSymbol extends ExpSymbol {

  // Whether this is the true or false branch.
  private boolean branch;

  // After it's created, store the predicate value representing what
  // needs to be true for this branch to be taken.
  private PredicateValue condition;

  public BranchSymbol(Exp cond, boolean b) {
    // The node tracks the condition that must evaluate to the
    // branchValue for this branch to be taken.
    super(cond);
    branch = b;
  }

  // Copy constructor.
  protected BranchSymbol(BranchSymbol orig) {
    super(orig);

    branch = orig.branch;
    condition = orig.condition;
  }

  // Wrap the copy constructor to allow for polymorphic copying of
  // subclasses.
  @Override
  public BranchSymbol copy() {
    return new BranchSymbol(this);
  }

  public boolean getBranch() {
    return branch;
  }

  public PredicateValue getCondition(Semantics sem) {
    if (condition == null) {
      Exp s = getExp();

      String condstr = s.toCode();
      Predicate pred = sem.getConditionPredicate(condstr);

      // The negation must be true if this is a false branch.
      condition = branch ? pred.getPositive() : pred.getNegative();
    }
    return condition;
  }

  @Override
  public String toAST() {
    return toString();
  }

  @Override
  public boolean isNoOp() {
    return false;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("[#");
    sb.append(branch ? "t" : "f");
    if (JAM.Opts.debug) {
      sb.append(";");
      sb.append(XSBInterface.escapeString(getExp().toCode()));
    }
    sb.append("]");
    return sb.toString();
  }

}
