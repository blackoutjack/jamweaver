package edu.wisc.cs.jam;

public interface Relation {

  public abstract Relation copy();

  public abstract RelationDomain getDomain();

  public abstract void addEdge(DataState s0, DataState s1);
  public abstract void removeEdge(DataState s0, DataState s1);
  public abstract void removeEdges(DataState s0, DataState s1);
  public abstract void clearEdges();

  // Remove edges that connect two states that both contain this
  // predicate. A new relation object is returned.
  public abstract Relation removeSelfEdges(PredicateValue pv);

  /**
   * Apply a post-state guard to this relation, resulting in a 
   * new restricted relation in which all edges must lead to states
   * in which the predicate value holds.
   *
   * @param pv the value by which to filter this relation's edges
   * @return a new relation with only edges that terminate in pv
   */
  public abstract Relation filterByPostState(PredicateValue pv);

  public abstract boolean isEmpty();

}
