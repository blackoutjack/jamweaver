
package edu.wisc.cs.jam;

public class PredicateValue {
  
  Predicate predicate;
  boolean value;

  private Clause initializer;
  private Clause clause;

  private PredicateValue negation;

  // The string representation of the predicate.
  private String condition;
  // An AST node representing the structure of this predicate value.
  private Exp statement;

  PredicateValue(Predicate pred, boolean val, String cond, Clause c, Clause init) {
    predicate = pred;
    value = val;
    initializer = init;
    clause = c;
    condition = cond;
  }

  public Predicate getPredicate() {
    return predicate;
  }

  public boolean getValue() {
    return value;
  }

  public String getCondition() {
    return condition;
  }

  public Clause getClause() {
    return clause;
  }

  void setClause(Clause c) {
    clause = c;
  }

  public Clause getInitializer() {
    return initializer;
  }

  public void setInitializer(Clause c) {
    initializer = c;
  }

  void setNegation(PredicateValue pv) {
    negation = pv;
  }

  public PredicateValue getNegation() {
    return negation;  
  }

  public void setStatement(Exp s) {
    statement = s;
  }

  public Exp getExpression() {
    return statement;
  }

  public boolean isPolicyValue() {
    return predicate.isPolicyPredicate();
  }

  public boolean isPositivePolicyValue() {
    if (!isPolicyValue()) return false;
    if (!equals(predicate.getPositive())) return false;
    return true;
  }

  public boolean isNegativePolicyValue() {
    if (!isPolicyValue()) return false;
    if (!equals(predicate.getNegative())) return false;
    return true;
  }

  @Override
  public String toString() {
    return condition;
  }
}
