
package edu.wisc.cs.jam;

import java.util.List;
import java.util.ArrayList;

// Encapsulates the structures that make up the abstract model of the
// program.
public class ProgramModel {
  
  private PolicyPath policyPath;
  private List<Predicate> learnedPredicates;
  private RelationAutomaton raut;
  //private PolicyControlProduct paut;
  private FocusAutomaton faut;

  public ProgramModel(JAM jam, PolicyPath p) {
    policyPath = p;

    // Build a different abstraction based on options.
    if (JAMOpts.disjoint) {
      raut = new DisjointAutomaton(jam, policyPath);
    } else if (true || JAMOpts.cartesian) {
      raut = new CartesianAutomaton(jam, policyPath);
    }/* else {
      raut = new K1Automaton(jam, policyPath);
      //raut = new BooleanAutomaton(jam, policyPath);
    }*/

    // Only instantiate this when needed.
    faut = null;

    //paut = new PolicyControlProduct(policyPath, raut);
  }

  public int getLearnedPredicateCount() {
    return learnedPredicates.size();
  }

  public void initLearnedPredicates(List<Predicate> preds) {
    learnedPredicates = new ArrayList<Predicate>();
    for (Predicate p : preds) {
      learnedPredicates.add(p);
      Dbg.out("Initializing with predicate: " + p, 2);
    }
  }

  /*
  public void loadProductEdges(List<ControlAutomaton.Edge> openTransitions) {
    paut.loadEdges(openTransitions);
  }

  public void loadProductEdges(Predicate expred) {
    paut.loadEdges(expred);
  }
  */

  // Eliminate all policy transitions except for the given one.
  public void focus(JAM j, Policy.Edge e, Exp s) {
    if (faut == null) {
      faut = new FocusAutomaton(j, raut);
    }
    faut.setFocus(e, s);
  }

  public void filterRelations(Predicate p) {
    raut.filterRelations(p);
  }

  public void initRelationDomain() {
    raut.initRelationDomain();
  }

  public void loadRelations(List<Predicate> preds) {
    raut.loadRelations(preds);
    if (faut != null) {
      faut.update(raut);
    }
  }

  public void noteUnreachableTransitions() {
    raut.noteUnreachableTransitions();
  }

  public void reset() {
    Dbg.out("Resetting model", 2);

    Dbg.memory("ProgramModel reset");
    learnedPredicates.clear();
    
    //paut.reset();
    //Dbg.memory("ProgramModel post-paut");

    raut.reset();
    Dbg.memory("ProgramModel post-raut");
  }

  public void addLearnedPredicate(Predicate p) {
    Dbg.out("Adding new predicate: " + p, 1);
    raut.reset();
    //paut.reset();
    learnedPredicates.add(p);
  }

  public List<Predicate> getLearnedPredicates() {
    return new ArrayList<Predicate>(learnedPredicates);
  }

  // Return a list of all predicates (learned and from the policy).
  public List<Predicate> getAllPredicates() {
    return raut.getAllPredicates();
  }

  public void build() {
    Dbg.out("Building program model", 3);

    // Generate the data relations for the control automaton.
    loadRelations(learnedPredicates);

    //if (JAMOpts.debug) 
    //  FileUtil.writeToFile(raut, "relation-control.aut");

    Dbg.out("Done building model", 3);
  }

  /*
  public PolicyControlProduct getProductAutomaton() {
    return paut;
  }
  */

  public RelationAutomaton getRelationAutomaton() {
    return raut;
  }

  public FocusAutomaton getFocusAutomaton() {
    assert faut != null;
    return faut;
  }

}
