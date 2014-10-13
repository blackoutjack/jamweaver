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

// A RelationAutomaton with the Cartesian abstraction.
public class CartesianAutomaton extends RelationAutomaton {

  public CartesianAutomaton(JAM j, PolicyPath p) {
    super(j, p);
  }

  /*
  // Returns true if we don't need to test the transition between the
  // states.
  protected boolean skipEvaluation(ExpSymbol sym, DataState preState, DataState postState) {

    // Get the (single) predicate value contained in the post-state.
    PredicateValue post = postState.getValues().get(0);

    // First, see if the post-state is guaranteed to be reachable, given
    // the previously computed clever cache entry.
    if (preState.getValues().contains(post)) {
      DataState negPostState = new DataState();
      negPostState.addValue(post.getNegation());
      if (cleverCache.check(policyPath, sym, preState, negPostState)) {
        // This means that this symbol can never flip the value of the
        // predicate that's in the pre- and post-state, so the
        // transition at hand must be satisfiable.
        return true;
      }
    }

    // If the post-state does not contain a policy predicate, we always
    // test the edge. Otherwise, the two states should either
    // 1) contain the same policy predicates, or 2) have the
    // untriggered version of the first false predicate in the pre-
    // state, and the triggered version in the post-state.
    
    List<PredicateValue> preVals = preState.getValues();

    // If the post-predicate is not a policy predicate, test the edge.
    if (!post.isEventValue()) return false;
    // Transition to a state with a negative policy predicate is never
    // blocked by that predicate.
    if (post.isNegativePolicyValue()) return true;

    // Get the first (with relation to the policy path) negated policy
    // predicate.
    PredicateValue firstNeg = null;
    List<Predicate> polPreds = policyPath.getPredicates();
    for (int i=0; i<polPreds.size(); i++) {
      PredicateValue negPolPred = polPreds.get(i).getNegative();
      if (preVals.contains(negPolPred)) {
        // We found a negative policy predicate in the pre-state, so
        // record it and break the search.
        firstNeg = negPolPred;
        break;
      }
    }

    // This indicates that there was no negative policy predicate in
    // the pre-state, indicating that the pre-state is a final state
    // (in which case we do not want the relation edge).
    if (firstNeg == null) return true;

    // Here, the transition represents stasis in the policy, so it is
    // an edge that should potentially be included.
    if (post.equals(firstNeg)) return false;
    // In this case, the policy transitions one step, so we also want
    // to include this edge potentially.
    if (post.equals(firstNeg.getNegation())) return false;

    // All other edges need not be tested.
    return true;
  }
  */

  // Either add an edge to the symbol's relation if that can be
  // determined without querying the semantics, or return a query
  // clause which will make that determination. These clauses can be
  // batched for multi-threaded semantic queries.
  protected Clause removeEdgeOrReturnClause(Relation rel, ExpSymbol sym, DataState preState, DataState postState) {

    // If we can determine there will be no effect, just add the edge.
    if (sym instanceof BranchSymbol) {
      BranchSymbol bsym = (BranchSymbol)sym;
      return removeBranchEdgesOrGetClause(rel, bsym, preState, postState);
    } else if (sym instanceof FunctionEntrySymbol) {
      FunctionEntrySymbol fsym = (FunctionEntrySymbol)sym;
      return removeFunctionEntryEdgesOrGetClause(rel, fsym, preState, postState);
    }
    
    if (cleverCache.check(policyPath, sym, preState, postState)) {
      rel.removeEdges(preState, postState);
      // This transition has been previously proven impossible due to
      // a blocking subset of predicates.
      return null;
    }

    Clause c = getQuery(sym, preState, postState);
    return c;
  }

  protected void loadQueryBatch(Map<Clause,List<DataTransition>> queryMap, Predicate p, List<DataState> preStateCube, List<List<DataState>> postStateCubes) {

    // Examine all possible internal edges to generate all
    // semantically viable edges.
    for (ExpSymbol sym : getSymbols()) {

      // Return transitions and other no-ops just have the id relation.
      if (setIdentityRelationForNoOpSymbol(p, sym)) continue;

      Relation rel = p == null ? relationDomain.getTrueRelation() : getRelation(null, sym).copy();
      setRelation(p, sym, rel);

      // The edges can be traversed without restriction if there are no
      // predicates to prevent it.
      if (getRelationSize() == 0) continue;

      // Havoc symbols have the unrestricted true relation.
      if (sym.isHavoc()) continue;

      if (p != null) {
        DataState polPostState = new DataState();
        polPostState.addValue(p.getPositive());
        postStateCubes = new ArrayList<List<DataState>>();
        List<DataState> postStateCube = new ArrayList<DataState>();
        postStateCubes.add(postStateCube);
        postStateCube.add(polPostState);
      }
        
      for (DataState preState : preStateCube) {
        // Add the negative policy predicate to the state, unless we're
        // building the stasis relation.
        if (p != null) {
          preState = new DataState(preState);
          preState.addValue(p.getNegative());
        }

        /*
        // We don't need to include edges out of particular states.
        if (omitEdgesWithSource(preState)) {
          rel.removeEdges(preState, null);
          continue;
        }
        */

        boolean noOp = isNoOpFromState(sym, preState);

        for (List<DataState> postCube : postStateCubes) {
          for (DataState postState : postCube) {
            // We only test data transitions that advance along a single
            // policy edge.
            //if (skipEvaluation(sym, preState, postState)) continue;

            Clause c = null;
            if (noOp) {
              if (hasDataDifference(preState, postState)) {
                rel.removeEdges(preState, postState);
              }
            } else {
              // Test whether the transition is possible given the
              // semantics of the program statement represented by the 
              // ExpSymbol.
              c = removeEdgeOrReturnClause(rel, sym, preState, postState);
            }

            if (!JAM.Opts.syntaxOnly && c != null) {
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
    }
  }

  // Compute the relations for all non-call and non-return nodes.
  protected void loadInternalRelationsBatch(List<DataState> preStateCube, List<List<DataState>> postStateCubes) {
    Dbg.writeQueryHeader("Batching internal relations", false);

    // Associate a clause with the data transitions it evaluates.
    QueryMap queryMap = new QueryMap();
    // Load the queries for the policy self-edges.
    loadQueryBatch(queryMap, null, preStateCube, postStateCubes);
    // Loop through all the policy predicates to build the relations for
    // policy transitions.
    for (Predicate p : policyPath.getPredicates()) {
      loadQueryBatch(queryMap, p, preStateCube, postStateCubes);
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
        DataState preState = tran.getSource();
        DataState postState = tran.getDestination();
        ExpSymbol sym = tran.getSymbol();

        if (!result.booleanValue()) {
          rel.removeEdges(preState, postState);

          // If we got to the point where we made a query to XSB
          // and it was unsat, we can record the blocking predicates
          // in the clever cache.
          addToCleverCache(sym, preState, postState);
        }
      }
    }
  }

  /*
  // Determine whether the given transition is possible in the program
  // model. This will internally query the semantics if necessary, so
  // this should only be used in the single-threaded query case.
  protected boolean isValidTransition(ExpSymbol sym, DataState preState, DataState postState, boolean clever) {

    PredicateValue post = postState.getValues().get(0);

    // Always allow a negative policy predicate to be reachable. This
    // reflects the fact that policy self-edges are labelled with true.
    if (post.isNegativePolicyValue()) return true;

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

    Clause c = getQuery(sym, preState, postState);
    if (c == null) return true;

    boolean valid = semantics.query(c, true);

    // If we got to the point where we made a query to XSB
    // and it was unsat, we can record the blocking predicates
    // in the clever cache.
    if (!valid) {
      addToCleverCache(sym, preState, postState);
    }
    
    return valid;
  }

  protected void loadInternalRelations(List<DataState> preStateCube, List<List<DataState>> postStateCubes) {
    Dbg.writeQueryHeader("Loading internal relations", false);

    // Get the true relation minus the edges that represent impossible
    // policy transitions.
    Relation fullRel = getFullRelation();

    // Get rid of data states that won't have any outgoing edges (to
    // its pre-state form) or incoming edges (as a post-state).
    removeObsoleteStates(preStateCube);

    // Examine all possible internal edges to generate all
    // semantically viable edges.
    for (ExpSymbol sym : getSymbols()) {

      // Return transitions and other no-ops just have the id relation.
      if (setIdentityRelationForNoOpSymbol(sym)) continue;
      
      Relation rel = fullRel.copy();
      // Associate the relation with the edges labeled by this symbol.
      for (Edge e : getEdgesWithSymbol(sym)) {
        relations.put(e, rel);
      }

      for (DataState preState : preStateCube) {
        // We don't need to include edges out of particular states.
        if (omitEdgesWithSource(preState)) {
          rel.removeEdges(preState, null);
          continue;
        }

        boolean noOp = isNoOpFromState(sym, preState);

        for (List<DataState> postCube : postStateCubes) {

          for (DataState postState : postCube) {
            // We only test data transitions that advance along a single
            // policy edge.
            if (skipEvaluation(sym, preState, postState)) continue;

            // Test whether the transition is possible given the
            // semantics of the program statement represented by the 
            // ExpSymbol.
            boolean remove = false;
            if (noOp) {
              remove = hasDataDifference(preState, postState);
            } else {
              remove = !isValidTransition(sym, preState, postState, true);
            }

            if (remove) {
              rel.removeEdges(preState, postState);
            }
          }
        }
      }
    }
  }
  */

  // Once the control structure is built, this function calculates the
  // data relations induced by each program statement.
  // The argument should be a list of learned predicates to include
  // in the model. The policy predicates are retrieved from the policy
  // path that's already associated with this object.
  @Override
  public void loadRelations(List<Predicate> learnedPreds) {
    Dbg.out("Loading Cartesian relations", 3);
    
    // This call may alter the value of loaded, if there are new
    // predicates.
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

    // When building the transfer relation, every combination of
    // predicates is used as a pre-state.
    List<DataState> preStateCube = getFullCube();
    Dbg.writeCubeToFile(preStateCube, "pre-states");

    // For the post-states, we test whether individual predicates are
    // satisfiable. This difference from the full Boolean abstraction
    // results in the savings while building the relations, and the
    // potential imprecision in the result.
    List<List<DataState>> postStateCubes = getCubes(1, getLearnedPredicates());
    Dbg.writeCubesToFile(postStateCubes, "post-states");

    // %%% Process inconsistent states here?

    Dbg.out("Loading data relations", 3);

    //if (JAM.Opts.queryThreads > 1) {
      loadInternalRelationsBatch(preStateCube, postStateCubes);
    //} else {
    //  loadInternalRelations(preStateCube, postStateCubes);
    //}

    // %%% Calling this after loadInternalRelations to avoid
    // %%% overwriting relation. Could be smarter.
    Dbg.out("Loading initializer relation", 3);
    loadInitializerRelation();

    Dbg.out("Done loading relations", 3);

    loaded = true;
  }

}


