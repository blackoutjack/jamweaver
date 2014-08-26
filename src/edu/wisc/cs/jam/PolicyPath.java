
package edu.wisc.cs.jam;

import edu.wisc.cs.automaton.Automaton;
import edu.wisc.cs.automaton.State;

import java.io.File;
import java.io.IOException;
import java.io.BufferedReader;
import java.io.FileReader;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.LinkedHashMap;

public class PolicyPath extends Automaton<State,PredicateSymbol> {

  private Policy policy;
  private Map<Edge,Policy.Edge> policyEdges;
  
  private List<Predicate> predicates;

  private List<Edge> advancingEdges;
  private List<Edge> selfEdges;

  public PolicyPath(Policy p, List<Policy.Edge> es) {
    policy = p;
    predicates = new ArrayList<Predicate>();
    advancingEdges = new ArrayList<Edge>();
    selfEdges = new ArrayList<Edge>();
    policyEdges = new LinkedHashMap<Edge,Policy.Edge>();

    load(es);
  }

  public Policy getPolicy() {
    return policy;
  }

  public PolicyLanguage getLanguage() {
    return policy.getLanguage();
  }
  
  public int getId() {
    return getPolicy().getPathId(this);
  }

  public List<Policy.Edge> getPolicyEdges() {
    return new ArrayList<Policy.Edge>(policyEdges.values());
  }

  public Policy.Edge getPolicyEdge(Edge e) {
    return policyEdges.get(e);
  }

  protected void load(List<Policy.Edge> edges) {
    for (Policy.Edge e : edges) {
      // Make a PolicyPath.Edge with the same components as the
      // provided Policy.Edge.
      Edge newEdge = makeEdge(e.getSymbol(), e.getSource(), e.getDestination());

      // This individual policy path should not branch. This requirement
      // is needed because of the trickiness with finding *new*
      // counterexamples that haven't been previously marked.
      for (Edge prevedge : getEdges()) {
        assert prevedge.getSource() != newEdge.getSource() : "Divergent paths found in policy path. Conflicting edges:\n" + newEdge + "\n" + prevedge;
        assert prevedge.getDestination() != newEdge.getDestination() : "Divergent paths found in policy path. Conflicting edges:\n" + newEdge + "\n" + prevedge;
      }

      // Insert the edge in a ordered list of policy-advancing edges.
      advancingEdges.add(newEdge);

      // Collect a list of predicates. This may be a newly created
      // predicate, or one retrieved from a previous matching edge.
      Predicate pred = newEdge.getSymbol().getPredicate();
      predicates.add(pred);

      // Store the association with the Policy.Edge this was based on.
      policyEdges.put(newEdge, e);

      addEdge(newEdge);
    }

    // Assert that the policy path contains both an initial and a final
    // state.
    assert advancingEdges.get(0).getSource().isInitial() : "No initial state for policy path: " + this;
    assert advancingEdges.get(advancingEdges.size() - 1).getDestination().isFinal() : "No final state for policy path: " + this;

    // Create the self-edges for each (non-final) state.
    for (State s : getStates()) {
      if (!s.isFinal()) {
        Edge se = makeEdge(Policy.trueSymbol, s, s);
        selfEdges.add(se);
        addEdge(se);
      }
    }
  }

  // Gather all the policy's predicates, which are associated with the
  // edges. RelationAutomaton (perhaps other places) relies on
  // these being returned in path order.
  public List<Predicate> getPredicates() {
    return new ArrayList<Predicate>(predicates);
  }

  public int getLength() {
    return predicates.size();
  }

  // Get a list (in order) of the non-self edges in the policy.
  public List<Edge> getAdvancingEdges() {
    return new ArrayList<Edge>(advancingEdges);
  }
  
  public Edge getAdvancingEdge(Predicate p) {
    int idx = predicates.indexOf(p);
    if (idx == -1) return null;
    Edge ret = advancingEdges.get(idx);
    assert ret.getSymbol().getPredicate().equals(p);
    return ret;
  }

  // Get a list of the self-edges connected to each policy state.
  public List<Edge> getSelfEdges() {
    return new ArrayList<Edge>(selfEdges);
  }

  public boolean checkApplies(RuntimeCheck c) {
    Policy.Edge checkEdge = c.getPolicyEdge();
    State checkSrc = checkEdge.getSource();
    List<Edge> outedges = getOutEdges(checkSrc);
    if (outedges.size() == 0) return false;

    // There should be a self-edge and an advancing-edge.
    assert outedges.size() == 2;

    State checkDest = checkEdge.getDestination();
    Predicate checkPred = checkEdge.getSymbol().getPredicate();
    for (Edge outedge : outedges) {
      if (outedge.getDestination().equals(checkDest)
          && outedge.getSymbol().getPredicate().equals(checkPred))
        return true;
    }

    return false;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("(0)");
    for (Edge e : getAdvancingEdges()) {
      sb.append(" -- ");
      sb.append(e.getSymbol().getPredicate());
      sb.append(" -> (");
      sb.append(e.getDestination().getId());
      sb.append(")");
    }
    return sb.toString();
  }

}
