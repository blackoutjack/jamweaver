package edu.wisc.cs.jam;

import edu.wisc.cs.automaton.Automaton;
import edu.wisc.cs.automaton.State;
import edu.wisc.cs.automaton.Symbol;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.Set;
import java.util.Collection;

import edu.wisc.cs.jam.bdd.BDDRelationDomain;

// A RelationAutomaton with the full Boolean abstraction.
public class BooleanAutomaton extends RelationAutomaton {

  public BooleanAutomaton(JAM j, PolicyPath p) {
    super(j, p);
  }

  // Either add an edge to the symbol's relation if that can be
  // determined without querying the semantics, or return a query
  // clause which will make that determination. These clauses can be
  // batched for multi-threaded semantic queries.
  protected Clause addEdgeOrReturnClause(Relation rel, ExpSymbol sym, DataState s0, DataState s1) {

    // If we can determine there will be no effect, just add the edge.
    if (sym instanceof BranchSymbol) {
      BranchSymbol bsym = (BranchSymbol)sym;
      // Branch symbols can't change the data state.
      if (!s0.equals(s1)) return null;

      if (!checkBranch) {
        rel.addEdge(s0, s1);
        return null;
      }

      // If this data state contradicts the branch predicate, cut off
      // the path. 
      Clause bc = getBranchQuery(s0, bsym);

      // %%% Some condition formats aren't handled currently.
      // %%% Eventually change this to an assertion.
      if (bc == null) {
        rel.addEdge(s0, s1);
        return null;
      }

      return bc;
    } else if (sym instanceof FunctionEntrySymbol) {
      // Function entry symbols can't change the data state.
      if (!s0.equals(s1)) return null;

      if (!checkFunctionEntry) {
        rel.addEdge(s0, s1);
        return null;
      }

      FunctionEntrySymbol fsym = (FunctionEntrySymbol)sym;
      return getFunctionEntryQuery(s0, fsym);
    }
    
    if (cleverCache.check(policyPath, sym, s0, s1)) {
      // This transition has been previously proven impossible due to
      // a blocking subset of predicates.
      return null;
    }

    Clause c = getQuery(sym, s0, s1);
    if (c == null) {
      // This occurs only if there are no learned predicates and this
      // does not represent a policy transition.
      rel.addEdge(s0, s1);
      return null;
    }

    return c;
  }

  // Determine whether the given transition is possible in the program
  // model. This will internally query the semantics if necessary, so
  // this should only be used in the single-threaded query case.
  protected boolean isValidTransition(ExpSymbol sym, DataState preState, DataState postState, boolean clever) {

    // If we can determine there will be no effect, just add the edge.
    if (sym instanceof BranchSymbol) {
      BranchSymbol bsym = (BranchSymbol)sym;
      return isValidBranchTransition(bsym, preState, postState);
    } else if (sym instanceof FunctionEntrySymbol) {
      FunctionEntrySymbol fsym = (FunctionEntrySymbol)sym;
      return isValidFunctionEntryTransition(fsym, preState, postState);
    }
    
    if (clever && cleverCache.check(policyPath, sym, preState, postState)) {
      return false;
    }

    Clause c = createClause(preState, sym, postState);
    if (c == null) return true;

    boolean valid = semantics.query(c, false);

    // If we got to the point where we made a query to XSB
    // and it was unsat, we can record the blocking predicates
    // in the clever cache.
    if (!valid) {
      addToCleverCache(sym, preState, postState);
    }
    
    return valid;
  }

  // Compute the relations for all non-call and non-return nodes.
  protected void loadInternalRelationsBatch(List<DataState> cube) {
    Dbg.writeQueryHeader("Loading internal relations (batch)", false);
    
    // A lovely data structure to associate a clause with the data
    // transitions it evaluates
    Map<Clause,List<DataTransition>> queryMap = new HashMap<Clause,List<DataTransition>>();

    // Examine all possible internal edges to generate all
    // semantically viable edges.
    for (ExpSymbol sym : getSymbols()) {

      // Return transitions and other no-ops just have the id relation.
      if (setIdentityRelationForNoOpSymbol(sym)) continue;

      // Havoc symbols have the unrestricted true relation.
      if (sym.isHavoc()) {
        for (Edge e : getEdgesWithSymbol(sym)) {
          relations.put(e, relationDomain.getTrueRelation());
        }
      }

      Relation rel = relationDomain.getFalseRelation();
      for (Edge e : getEdgesWithSymbol(sym)) {
        relations.put(e, rel);
      }

      for (DataState preState : cube) {

        // In some cases, we don't need to take the effort
        // to check edges out of this state.
        if (omitEdgesWithSource(preState)) continue;

        if (isNoOpFromState(sym, preState)) {
          // Add an edge from the pre-state to itself (in the post-
          // state) since no other transitions are possible.
          rel.addEdge(preState, preState);
          continue;
        }

        for (DataState postState : cube) {
          // We only test data transitions that advance along a single
          // policy edge.
          if (omitEdge(preState, postState)) continue;

          // Test whether the transition is possible given the
          // semantics of the program statement represented by the 
          // ExpSymbol.
          Clause c = addEdgeOrReturnClause(rel, sym, preState, postState);

          if (c != null) {
            // We can't tell whether the transition is valid, so add
            // it to the batch to send to the semantics.
 
            // Get the transition list for the clause
            List<DataTransition> trans = queryMap.get(c);
            if (trans == null) {
              trans = new ArrayList<DataTransition>();
              queryMap.put(c, trans);
            }
            
            // Map the clause to the edges. It's organized like so since
            // addEdgeOrReturnClause can potentially return identical
            // clauses for different transitions, and we want to avoid
            // submitting both of them to the semantics.
            trans.add(new DataTransition(rel, preState, sym, postState));
          }
        }
      }
    }

    // Process the query batch.
    List<Clause> clauses = new ArrayList<Clause>(queryMap.keySet());
    List<Boolean> results = semantics.batchQuery(clauses, true);

    // The semantics module should guarantee this.
    assert results.size() == clauses.size();

    Dbg.out("Processing batch results: " + results.size(), 3);

    // Process the results with regards to the corresponding clause.
    for (int i=0; i<clauses.size(); i++) {
      Boolean result = results.get(i);
      Clause c = clauses.get(i);
      List<DataTransition> transitions = queryMap.get(c);

      for (DataTransition tran : transitions) {
        // Retrieve the relation for this symbol.
        Relation rel = tran.getRelation();
        DataState s0 = tran.getSource();
        DataState s1 = tran.getDestination();
        ExpSymbol sym = tran.getSymbol();

        if (result.booleanValue()) {
          rel.addEdge(s0, s1);
        } else {
          // If we got to the point where we made a query to XSB
          // and it was unsat, we can record the blocking predicates
          // in the clever cache.
          addToCleverCache(sym, s0, s1);
        }
      }
    }
  }

  protected void loadInternalRelations(List<DataState> cube) {

    Dbg.writeQueryHeader("Loading internal relations", false);

    // Examine all possible internal edges to generate all
    // semantically viable edges.
    for (ExpSymbol sym : getSymbols()) {

      // Return transitions and other no-ops just have the id relation.
      if (setIdentityRelationForNoOpSymbol(sym)) continue;

      // Havoc symbols have the unrestricted true relation.
      if (sym.isHavoc()) {
        for (Edge e : getEdgesWithSymbol(sym)) {
          relations.put(e, relationDomain.getTrueRelation());
        }
      }

      // Create the relation for this symbol.
      Relation rel = relationDomain.getFalseRelation();

      for (DataState preState : cube) {

        // In some cases, we don't need to take the effort
        // to check edges out of this state.
        if (omitEdgesWithSource(preState)) continue;

        if (isNoOpFromState(sym, preState)) {
          // Add an edge from the pre-state to itself (in the post-
          // state) since no other transitions are possible.
          rel.addEdge(preState, preState);
          continue;
        }

        for (DataState postState : cube) {
          // We only test data transitions that advance along a single
          // policy edge.
          if (omitEdge(preState, postState)) continue;

          // Test whether the transition is possible given the
          // semantics of the program statement represented by the 
          // ExpSymbol.
          if (isValidTransition(sym, preState, postState, true)) {
            // Add a valid edge to the data relation.
            // The symbol is just a placeholder.
            rel.addEdge(preState, postState);
          }
        }
      }
      for (Edge e : getEdgesWithSymbol(sym)) {
        relations.put(e, rel);
      }
    }
  }

  // Once the control structure is built, this function calculates the
  // data relations induced by each program statement.
  // The argument should be a list of learned predicates to include
  // in the model. The policy predicates are retrieved from the policy
  // path that's already associated with this object.
  @Override
  public void loadRelations(List<Predicate> learnedPreds) {
    Dbg.out("Loading boolean relations", 3);
  
    prepareLearnedPredicates(learnedPreds);

    if (loaded) {
      // When there are no new predicates added from the previous
      // iteration, we can update the automaton in place.
      updateRelations();
      Dbg.out("Done updating relations", 3);
      return;
    }

    initRelationDomain();

    for (Predicate polpred : policyPath.getPredicates()) {
      // Identify blocking pairs of policy predicates over each symbol.
      initCleverCache(polpred);
    }

    // Generate all cubes given the current list of predicates and the
    // maximum cube size.
    List<DataState> fullCube = getFullCube();

    // Get rid of data states that won't have any outgoing edges (to
    // its pre-state form) or incoming edges (as a post-state).
    removeObsoleteStates(fullCube);

    // Get rid of any states that contain inherently contradictory
    // predicates.
    // %%% probably won't work
    //Dbg.writeQueryHeader("Removing inconsistent states", false);
    //removeInconsistentStates(fullCube);

    Dbg.writeCubeToFile(fullCube, "data-states");
    assert fullCube.size() > 1 : "Less than 2 data states are consistent";

    Dbg.out("Loading data relations", 3);
    if (JAM.Opts.queryThreads > 1) {
      loadInternalRelationsBatch(fullCube);
    } else {
      loadInternalRelations(fullCube);
    }

    // %%% Calling this after loadInternalRelations to avoid
    // %%% overwriting relation. Could be smarter.
    loadInitializerRelation();

    Dbg.out("Done loading relations", 3);

    loaded = true;
  }

}

