package edu.wisc.cs.jam;

import edu.wisc.cs.automaton.Automaton;
import edu.wisc.cs.automaton.State;
import edu.wisc.cs.automaton.Symbol;

import java.util.List;
import java.util.ArrayList;

import edu.wisc.cs.jam.bdd.BDDRelationDomain;

// A RelationAutomaton with the a new "disjoint" abstraction.
public class DisjointAutomaton extends RelationAutomaton {

  public DisjointAutomaton(JAM j, PolicyPath p) {
    super(j, p);
  }

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

  // Compute the relations for all non-call and non-return nodes.
  protected void loadInternalRelationsBatch(List<List<DataState>> predCubes) {
    Dbg.writeQueryHeader("Batching internal relations", false);

    // Associate a clause with the data transitions it evaluates.
    QueryMap queryMap = new QueryMap();

    for (Predicate p : getPolicyPredicateKeys()) {
      for (ExpSymbol sym : getSymbols()) {

        // Return transitions and other no-ops just get the id relation.
        if (setKnownRelation(p, sym)) continue;

        // We start with the havoc relation and whittle our way down.
        // This helps ensure by construction that we're conservative.
        Relation rel = relationDomain.getTrueRelation();
        setRelation(p, sym, rel);

        for (List<DataState> predCube : predCubes) {
          for (DataState preState : predCube) {
            // The null set of predicates can't preclude any transition.
            if (preState.getValues().size() == 0) continue;

            // Event predicates are meaningless in the prestate, but if
            // the policy predicate is not an event, copy the DataState
            // and add the negative policy predicate value.
            if (p != Predicate.TRUE && !p.isEventPredicate()) {
              preState = new DataState(preState);
              preState.addValue(p.getNegative());
            }

            // %%% Does this even do anything anymore?
            boolean noOp = false; //isNoOpFromState(sym, preState);

            for (DataState postState : predCube) {

              if (p != Predicate.TRUE) {
                postState = new DataState(postState);
                postState.addValue(p.getPositive());
              }

              Clause c = null;
              if (noOp) {
                if (hasDataDifference(preState, postState))
                  rel.removeEdges(preState, postState);
              } else {
                // Test whether the transition is possible given the
                // semantics of the program statement represented by the 
                // ExpSymbol.
                if (!JAM.Opts.syntaxOnly)
                  c = removeEdgeOrReturnClause(rel, sym, preState, postState);
              }

              if (c != null) {
                // We can't tell offhand whether the transition is valid,
                // so add it to the batch to send to the semantics.
                DataTransition tran = new DataTransition(rel, preState, sym, postState);
                mapClauseToTransition(queryMap, c, tran);
              }
            }
          }
        }
      }
    }

    processBatch(queryMap);
    queryMap.clear();
  }

  // Determine whether the given transition is possible in the program
  // model. This will internally query the semantics if necessary, so
  // this should only be used in the single-threaded query case.
  protected void checkValidTransition(DataTransition tran) {
    boolean valid = true;

    DataState preState = tran.getSource();
    DataState postState = tran.getDestination();
    Relation rel = tran.getRelation();
    ExpSymbol sym = tran.getSymbol();

    // If we can determine there will be no effect, just add the edge.
    if (sym instanceof BranchSymbol) {
      BranchSymbol bsym = (BranchSymbol)sym;
      valid = isValidBranchTransition(bsym, preState, postState);
    } else if (sym instanceof FunctionEntrySymbol) {
      FunctionEntrySymbol fsym = (FunctionEntrySymbol)sym;
      valid = isValidFunctionEntryTransition(fsym, preState, postState);
    } else if (cleverCache.check(policyPath, sym, preState, postState)) {
      valid = false;
    } else {
      Clause c = getQuery(sym, preState, postState);
      if (c == null) {
        valid = true;
      } else {
        valid = semantics.query(c, true);
        if (!valid)
          addToCleverCache(sym, preState, postState);
      }
    }

    // If we got to the point where we made a query to XSB
    // and it was unsat, we can record the blocking predicates
    // in the clever cache.
    if (!valid) {
      rel.removeEdges(preState, postState);
    }
  }

  protected void loadInternalRelations(List<List<DataState>> predCubes) {
    Dbg.writeQueryHeader("Loading internal relations", false);

    // Examine all possible internal edges to generate all
    // semantically viable edges.

    for (Predicate p : getPolicyPredicateKeys()) {
      for (ExpSymbol sym : getSymbols()) {

        // Return transitions and other no-ops just get the id relation.
        if (setKnownRelation(p, sym)) continue;
        
        // We start with the havoc relation and whittle our way down.
        // This helps ensure by construction that we're conservative.
        Relation rel = relationDomain.getTrueRelation();
        setRelation(p, sym, rel);

        for (List<DataState> predCube : predCubes) {
          for (DataState preState : predCube) {
            // The null set of predicates can't preclude any transition.
            if (preState.getValues().size() == 0) continue;

            // Event predicates are meaningless in the prestate, but if
            // the policy predicate is not an event, copy the DataState
            // and add the negative policy predicate value.
            if (p != Predicate.TRUE && !p.isEventPredicate()) {
              preState = new DataState(preState);
              preState.addValue(p.getNegative());
            }

            // %%% Does this even do anything anymore?
            boolean noOp = false; //isNoOpFromState(sym, preState);

            for (DataState postState : predCube) {

              if (p != Predicate.TRUE) {
                postState = new DataState(postState);
                postState.addValue(p.getPositive());
              }

              boolean remove = false;
              if (noOp) {
                if (hasDataDifference(preState, postState))
                  rel.removeEdges(preState, postState);
              } else {
                if (!JAM.Opts.syntaxOnly) {
                  DataTransition tran = new DataTransition(rel, preState, sym, postState);
                  checkValidTransition(tran);
                }
              }
            }
          }
        }
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
    Dbg.out("Loading Disjoint relations", 3);
    
    // If there are new predicates, this will set loaded to false.
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

    // We'll just be testing transitions from single-predicate states
    // to single-predicate states crossed with the policy.
    List<List<DataState>> predCubes = getCubes(1, getLearnedPredicates());
    Dbg.writeCubesToFile(predCubes, "predicate-states");

    Dbg.out("Loading data relations", 3);
    if (JAM.Opts.queryThreads > 1) {
      loadInternalRelationsBatch(predCubes);
    } else {
      loadInternalRelations(predCubes);
    }

    // %%% Calling this after loadInternalRelations to avoid
    // %%% overwriting relation. Could be smarter.
    Dbg.out("Loading initializer relation", 3);
    loadInitializerRelation();

    Dbg.out("Done loading relations", 3);

    loaded = true;
  }

}



