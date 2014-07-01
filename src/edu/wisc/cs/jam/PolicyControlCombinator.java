package edu.wisc.cs.jam;

import java.util.Map;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.ArrayList;
import java.util.BitSet;

public class PolicyControlCombinator {

  private PolicyPath policyPath;
  private List<List<ControlAutomaton.Edge>> edges;
  private BitSet combos;
  
  // Points to the generated position of the next combination to return.
  private int position = -1;
  // Tracks how many combinations have been produced.
  private int count = 0;
  // Minimum number of advancing edges for any predicate.
  private int minSize = Integer.MAX_VALUE;
  
  private int combinationCount = -1;

  protected PolicyPath getPolicyPath() {
    return policyPath;
  }

  private static List<PolicyControlCombinator> cmbs;

  static {
    cmbs = new ArrayList<PolicyControlCombinator>();
  }

  // The model's edges should already be loaded before calling this.
  public static PolicyControlCombinator init(PolicyPath pp, ProgramModel m) {
    // We only need one PCC for each policy path, since we are
    // interested in iterating through the set of ControlAutomaton edges
    // (program statements) that transition that policy path.
    for (PolicyControlCombinator cmb : cmbs) {
      if (pp.equals(cmb.getPolicyPath()))
        return cmb;
    }
    PolicyControlCombinator c = new PolicyControlCombinator(pp, m.getRelationAutomaton());
    cmbs.add(c);
    return c;
  }

  protected PolicyControlCombinator(PolicyPath pp, RelationAutomaton raut) {
    policyPath = pp;

    List<Predicate> preds = policyPath.getPredicates();
    edges = new ArrayList<List<ControlAutomaton.Edge>>(preds.size());
    for (Predicate pred : preds) {
      List<ControlAutomaton.Edge> cedges = new ArrayList<ControlAutomaton.Edge>(raut.getTransitioningEdges(pred.getNegative()));
      edges.add(cedges);

      // Record the minimal number of edges that a transition any
      // policy path edge. This will help us efficiently cycle through
      // combinations to get maximum coverage in the case where
      // learned predicates haven't ruled out any potential counter-
      // examples.
      if (cedges.size() < minSize) {
        minSize = cedges.size();
      }
    }
  }

  protected int totalCombinations() {
    // A combinationCount of -1 indicates that it's uninitialized.
    if (combinationCount == -1) {
      assert edges.size() != 0 : "No edge collections for PolicyControlCombinator";
      // Calculate the product of the number of ways to transition
      // each policy path edge. If any transition does not have any
      // candidate edges, then 0 will be returned.
      combinationCount = 1;
      for (List<ControlAutomaton.Edge> es : edges) {
        combinationCount *= es.size();
      }
    }

    return combinationCount;
  }

  // Retrieve one control edge for each policy path transition.
  protected List<ControlAutomaton.Edge> selectEdges(int pos) {
    //Dbg.dbg("pos: " + pos);
    List<ControlAutomaton.Edge> ret = new ArrayList<ControlAutomaton.Edge>();
    int factor = totalCombinations();
    int rem = pos;
    for (int i=0; i<edges.size(); i++) {
      List<ControlAutomaton.Edge> elist = edges.get(i);
      factor /= elist.size();
      int div = rem / factor;
      rem = rem - div * factor;

      ret.add(elist.get(div));
      //Dbg.dbg("i: " + i + " div: " + div);
    }
    return ret;
  }

  protected boolean hasNext() {
    return count < totalCombinations();
  }

  // Shift the position pointer to a new combination.
  protected void updatePosition() {

    if (edges.size() == 1) {
      // For a global (single-transition) policy path, we just iterate
      // through all of the advancing edges.
      position++;
    } else {
      if (count < minSize) {
        // First go through the minimal set of combinations that
        // could potentially instrument all advancing edges.
        int factor = totalCombinations();
        int pos = 0;
        for (int i=0; i<edges.size(); i++) {
          List<ControlAutomaton.Edge> elist = edges.get(i);
          factor /= elist.size();
          pos += count * factor;
        }
        position = pos;
      } else {
        // Then iterate through the rest and make sure we don't return
        // a position that's already been used.
        for (int j=0; j<totalCombinations(); j++) {
          position = (position + 1) % totalCombinations();
          int factor = totalCombinations();
          int rem = position;
          int prev = -1;
          for (int i=0; i<edges.size(); i++) {
            int esize = edges.get(i).size();
            factor /= esize;
            int div = rem / factor;
            rem = rem - div * factor;
            if (prev != -1 && div != prev) {
              // Found an appropriate position.
              count++;
              return; 
            }
            prev = div;
          }
        }
      }
    }
    //Dbg.dbg("count: " + count + " position: " + position);

    count++;
  }

  public synchronized List<ControlAutomaton.Edge> getNext() {

    // Return the next combination with some unguarded transition.
    while (hasNext()) {
      updatePosition();
      List<ControlAutomaton.Edge> es = selectEdges(position);

      // Check if at least one transition is unguarded.
      List<PolicyPath.Edge> pes = policyPath.getAdvancingEdges();
      for (int i=0; i<pes.size(); i++) {
        PolicyPath.Edge pe = pes.get(i);
        ControlAutomaton.Edge ce = es.get(i);
        ExpSymbol sym = ce.getSymbol();
        Predicate p = pe.getSymbol().getPredicate();
        // %%% Does this work?
        if (!sym.isGuarded(pe))
          return es;
      }
    }
  
    // A null value indicates that all combinations are exhausted.
    return null;
  }

}


