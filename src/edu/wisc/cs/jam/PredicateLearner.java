package edu.wisc.cs.jam;

public interface PredicateLearner {

  /**
   * Learns a new predicate from the given counterexample. The
   * counterexample is assumed to be invalid and carry with it a series
   * of sentinels ending with the invalid transition.
   * 
   * @param cex the counterexample to be analyzed
   * @return a new predicate or null if a predicate could not be learned
   */
  public Predicate learn(CounterExample cex);
}
