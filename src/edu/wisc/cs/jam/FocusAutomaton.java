package edu.wisc.cs.jam;

import edu.wisc.cs.automaton.Automaton;
import edu.wisc.cs.automaton.State;
import edu.wisc.cs.automaton.Symbol;
import edu.wisc.cs.automaton.ComboSymbol;
import edu.wisc.cs.automaton.ComboState;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.Set;
import java.util.HashSet;
import java.util.WeakHashMap;
import java.io.IOException;
import java.io.BufferedWriter;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.lang.ref.WeakReference;

import edu.wisc.cs.jam.bdd.BDDRelationDomain;

// This class is used for examining a single policy transition at a
// time. By calling the |setFocus| method prior to exporting the
// automaton, the client can test reachability of that transition.
public class FocusAutomaton extends RelationAutomaton {

  protected Policy.Edge focusTransition;
  protected Exp focusNode;

  public FocusAutomaton(JAM j, RelationAutomaton r) {
    super(j, r.policyPath);
    this.cleverCache = r.cleverCache;
    this.transitioningSymbols = r.transitioningSymbols;

    assert r.loaded;

    // The global check manager
    this.cm = j.getCheckManager();

    update(r);
  }

  // Set the transition to be focused on. By "focus," we mean that
  // this is the only policy transition that will remain open.
  public void setFocus(Policy.Edge e, Exp s) {
    focusTransition = e;
    focusNode = s;
  }

  // Copy appropriate state. We don't need any of the querying
  // machinery because that is all done in |r|.
  public void update(RelationAutomaton r) {
    // The policy path with respect to which the relations are built.
    this.policyPath = r.policyPath;

    // Get the set of learned/seeded predicates that were used to build
    // the program model.
    this.learnedPredicates = r.learnedPredicates;

    // Copy the relations that have already been generated in |r|.
    this.relations = r.relations;

    // Need a handle to the domain used to manage the relations.
    this.relationDomain = r.relationDomain; 
  }

  // Retrieve the relation that weights the combination edge consisting
  // of the policy edge represented by the predicate |p|, and the given
  // control edge.
  @Override
  public Relation getRelation(Predicate p, Edge ce) {
    if (p == Predicate.TRUE || p == null) {
      p = Predicate.TRUE;
    } else {
      // Should this edge be removed due to focus elsewhere?
      Predicate fpred = focusTransition.getSymbol().getPredicate();
      if (fpred != null && p != fpred)
        return relationDomain.getFalseRelation();
      if (focusNode != null && focusNode != ce.getSymbol().getExp())
        return relationDomain.getFalseRelation();
    }

    // Get the stored relation.
    Relation rel = relations.get(p).get(ce);
    if (rel == null) return relationDomain.getFalseRelation();
    return rel;
  }

  // Generate blocking predicates for policy transitions that are
  // unreachable in this program for this policy path.
  public void noteUnreachableTransition(ExpSymbol sym, Policy.Edge pe) {
    // We want to assert that the edge predicate can't flip from false
    // to true on account of each symbol.
    Predicate pred = pe.getSymbol().getPredicate();
    PredicateValue neg = pred.getNegative();
    PredicateValue pos = pred.getPositive();

    // The original BlockingPredicates class is constructed with
    // reference to pre- and post-DataStates, so we follow that lead.
    DataState bpSrc = new DataState();
    bpSrc.addValue(neg);
    DataState bpDest = new DataState();
    bpDest.addValue(pos);

    // Check that there's not already a blocking predicate
    // that prevents this transition.
    if (cleverCache.check(policyPath, sym, bpSrc, bpDest)) return;

    cleverCache.add(policyPath, sym, bpSrc.getValues(), bpDest.getValues());
  }

  @Override
  protected void statesSerialize(Appendable out) throws IOException {
    out.append("STATES:\n");
    
    // %%% Maybe do something useful when only one is null.
    if (focusTransition == null || focusNode == null) {
      super.statesSerialize(out); 
      return;
    }

    State psrc = focusTransition.getSource();
    State pdest = focusTransition.getDestination();
    Predicate ppred = focusTransition.getSymbol().getPredicate();

    // Associate the source policy state with all control states.
    String psrcserial = psrc.serialize();
    for (State cs : getStates()) {
      boolean cinit = cs.isInitial();
      out.append(psrcserial);
      out.append(".");
      out.append(cs.serialize());
      if (cinit) {
        out.append("*");
      }
      out.append("\n");
    }

    // Only associate the destination policy state with the destination
    // of focused-on control edges.
    String pdestserial = pdest.serialize();
    for (Edge ce : getTransitioningEdges(ppred.getPositive())) {
      if (ce.getSymbol().getExp() == focusNode) {
        out.append(pdestserial);
        out.append(".");
        out.append(ce.getDestination().toString());
        out.append("%");
        out.append("\n");
      }
    }
  }

  @Override
  protected void edgesSerialize(Appendable out) throws IOException {
    out.append("EDGES:\n");
    Policy.Edge pedge = focusTransition;
    for (ControlAutomaton.Edge cedge : getEdges()) {
      boolean poltran = cedge.getSymbol().getExp() == focusNode;

      // Use the source self-edge and the focused-on advancing edge.
      PolicyPath.Edge pself = null;
      for (PolicyPath.Edge pe : policyPath.getOutEdges(pedge.getSource())) {
        if (pe.getSource() == pe.getDestination()) {
          pself = pe;
          break;
        }
      }

      if (cedge.isReturnEdge()) {
        ComboState<State,State> callsrc = new ComboState<State,State>(pedge.getSource(), cedge.getCallSource());
        edgeSerialize(out, cedge, pself, callsrc);
        if (poltran) {
          // This probably shouldn't happen.
          edgeSerialize(out, cedge, pedge, null);
        }
      } else {
        edgeSerialize(out, cedge, pself, null);
        if (poltran) {
          edgeSerialize(out, cedge, pedge, null);
        }
      }
    }
  }

  protected void relationsSerialize(Appendable out) throws IOException {
    // %%% Maybe filter this output.
    super.relationsSerialize(out);
  }
}
