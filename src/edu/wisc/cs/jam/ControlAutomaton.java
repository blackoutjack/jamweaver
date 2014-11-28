package edu.wisc.cs.jam;

import java.util.Collection;

import edu.wisc.cs.jam.CallGraph.Callsite;

import edu.wisc.cs.automaton.Automaton;
import edu.wisc.cs.automaton.Automaton.Edge;
import edu.wisc.cs.automaton.State;

// This is simply a wrapper for the Automaton supertype. It is extended
// by ControlStructure (which actually builds the structure that
// represents the program's control flow) and by RelationAutomaton
// (which associates relations with control edges).
public class ControlAutomaton extends Automaton<State,ExpSymbol> {

  protected ControlAutomaton() {
    super();
  }
  
  protected ControlAutomaton(ControlAutomaton orig) {
    super(orig);
  }

  // Override to implement.
  public Collection<Callsite> getConservativeCalls() {
    throw new UnsupportedOperationException();
  }
  public Collection<Callsite> getExternCalls() {
    throw new UnsupportedOperationException();
  }
}
