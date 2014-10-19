package edu.wisc.cs.jam;

import java.util.List;
import java.util.ArrayList;
import java.util.ArrayList;
import java.util.Collection;

public class Predicate {

  private static int NEXT_ID = -1;

  // The true predicate.
  public static final Predicate TRUE;

  static {
    Clause t = new Clause("true");
    Clause f = new Clause("fail");
    TRUE = new Predicate("true", t, t, f, f);
  }

  private PredicateValue positive;
  private PredicateValue negative;

  private List<Exp> conjuncts;

  private Predicate prerequisite;

  private int id;

  // Indicates whether this predicate is true in the initial JavaScript
  // environment.
  private PredicateValue initialValue;

  // Track whether this is a function entry predicate
  // to allow an optimization within ControlAutomaton.
  private boolean isfunctionentry;

  // Flag indicating that this predicate is used in the policy.
  private boolean isEvent;
  private boolean isPolicy;
  
  /*
   * The "positive" clause is taken to be a policy-transitioning predicate,
   * and is assumed to be false at the outset. Its negation is assumed to
   * be initially true.
   */
  public Predicate(String cond, Clause pos, Clause posinit, Clause neg, Clause neginit) {
    isfunctionentry = false;
    isEvent = false;
    isPolicy = false;
    id = ++NEXT_ID;

    String negcond = "!(" + cond + ")";

    positive = new PredicateValue(this, true, cond, pos, posinit);
    negative = new PredicateValue(this, false, negcond, neg, neginit);

    positive.setNegation(negative);
    negative.setNegation(positive);
  }

  public boolean isPolicyPredicate() {
    return isPolicy;
  }

  public void setPolicyPredicate() {
    isPolicy = true;
  }

  public boolean isEventPredicate() {
    return isEvent;
  }

  public void setEventPredicate() {
    isEvent = true;
  }

  public boolean isFunctionEntry() {
    return isfunctionentry;
  }

  public void setFunctionEntry(boolean val) {
    isfunctionentry = val;
  }

  public int getId() {
    return id;
  }
  
  public PredicateValue getInitialValue(Semantics sem) {
    // Don't submit queries we don't need to.
    if (initialValue != null) return initialValue;

    // Query the semantics on the negative value of this predicate to
    // see if this predicate is true in the initial environment.
    Clause pos = positive.getClause();
    pos.setConcrete(true);
    boolean posSat = sem.query(pos, true);
    pos.setConcrete(false);

    Clause neg = negative.getClause();
    neg.setConcrete(true);
    boolean negSat = sem.query(neg, true);
    neg.setConcrete(false);

    if (isEventPredicate()) {
      // Policy predicates must be false in the initial environment.
      initialValue = negative;
      // Warn if this is not the case.
      if (posSat && negSat) {
        // %%% Currently this may occur because if the type inference
        // %%% types a variable found in the policy, then that type is
        // %%% asserted for the entire program for that variable name.
        Dbg.out("WARNING: Policy predicate unconstrained in the initial environment: " + this, 3);
      } else if (posSat) {
        Dbg.out("WARNING: Policy predicate is true in the initial environment: " + this, 2);
      } else if (negSat) {
        // Normal case
      } else {
        Dbg.out("WARNING: Policy predicate is not satisfiable in the initial environment: " + this, 2);
      }
    } else {
      if (posSat && negSat) {
        // Null indicates that we can't assert an initial value.
        initialValue = null;
      } else if (negSat) {
        initialValue = negative;
      } else if (posSat) {
        initialValue = positive;
      } else {
        Dbg.out("WARNING: State predicate is not satisfiable in the initial environment: " + this, 2);
      }
    }

    return initialValue;
  }

  public PredicateValue getPositive() {
    return positive;
  }

  public PredicateValue getNegative() {
    return negative;
  }

  public boolean matches(Predicate p) {
    if (p == null) return false;
    // Substitute tokens to determine effective equality. It should be
    // ok to only compare clause, rather than all four components.
    if (positive.getClause().getQuery().equals(p.positive.getClause().getQuery())) {
      return true;
    }

    // Also compare to the negation of the other predicate, because
    // if those are the same, the predicates are essentially equal.
    if (positive.getClause().getQuery().equals(p.negative.getClause().getQuery())) {
      return true;
    }

    return false;
  }

  public boolean matchesAny(Collection<Predicate> preds) {
    for (Predicate p : preds) {
      if (this.matches(p)) return true;
    }
    return false;
  }

  public Clause getClause(boolean val) {
    if (val) {
      return positive.getClause();
    }
    return negative.getClause();
  }

  public void setPrerequisite(Predicate prereq) {
    if (prereq != null && isEvent)
      prereq.setEventPredicate();
    prerequisite = prereq;
  }

  public Predicate getPrerequisite() {
    return prerequisite;
  }

  // Closure changed the structure of multilevel AND statements, so this
  // recursive method should be robust against future changes.
  protected void collectConjuncts(Exp e, List<Exp> conjuncts) {
    if (e.isAnd()) {
      Exp e1 = e.getFirstChild();
      Exp e2 = e.getChild(1);
      collectConjuncts(e1, conjuncts);
      collectConjuncts(e2, conjuncts);
    } else {
      conjuncts.add(e);
    }
  }

  // Currently, all positive predicates must be a conjunction of calls
  // and equality checks. This allows the conjucts to be processed
  // individually.
  public List<Exp> getConjuncts() {
    if (conjuncts == null) {
      // %%% If predicate syntax is generalized, this may no longer work.
      // %%% It would also be helpful to do some semantic processing here,
      // %%% to determine what type of assertion each piece is.
      Exp e = positive.getExpression();
      // Remove the Exp wrapper.
      e = e.getFirstChild();
      conjuncts = new ArrayList<Exp>();
      collectConjuncts(e, conjuncts);
    }
    return new ArrayList<Exp>(conjuncts);
  }

  @Override
  public String toString() {
    return positive.getCondition();
  }
}
