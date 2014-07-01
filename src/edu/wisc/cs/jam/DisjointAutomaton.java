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

  protected void mapClauseToTransition(QueryMap queryMap, Clause c, DataTransition tran) {
    // Get the transition list for the clause
    List<DataTransition> trans = queryMap.get(c);
    if (trans == null) {
      trans = new ArrayList<DataTransition>();
      queryMap.put(c, trans);
    }
    
    // Map the clause to the edges. It's organized like so since
    // removeEdgeOrReturnClause can potentially return identical
    // clauses for different transitions, and we want to avoid
    // submitting both of them to the semantics.
    trans.add(tran);
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

  protected List<DataState> collapseCube(List<List<DataState>> cube) {
    List<DataState> ret = new ArrayList<DataState>();
    for (List<DataState> states : cube) {
      ret.addAll(states);
    }
    return ret;
  }

  protected void loadQueryBatch(QueryMap queryMap, List<ExpSymbol> syms, PredicateValue pv) {

    assert !pv.isPositivePolicyValue() :
      "Positive policy value submitted to loadQueryBatch";

    DataState preState = new DataState();
    preState.addValue(pv);

    // Examine all possible internal edges to generate all
    // semantically viable edges.
    for (ExpSymbol sym : syms) {
      DataState postState = new DataState();
      postState.addValue(pv);

      // Get the relation that we'll be altering.
      Relation rel = null;
      if (pv.isPolicyValue()) {
        rel = getRelation(pv.getPredicate(), sym);
      } else {
        rel = getRelation(null, sym);
      }

      boolean noOp = isNoOpFromState(sym, preState);

      Clause c = null;
      if (noOp) {
        // This is a no-op symbol when starting in this state, and we
        // know that preState == postState at this point, so the edge
        // remains.
      } else {
        // Test whether the transition is possible given the
        // semantics of the program statement represented by the 
        // ExpSymbol.
        c = removeEdgeOrReturnClause(rel, sym, preState, postState);
      }

      if (c != null) {
        // We can't tell offhand whether the transition is valid,
        // so add it to the batch to send to the semantics.
        DataTransition tran = new DataTransition(rel, preState, sym, postState);
        mapClauseToTransition(queryMap, c, tran);
      }

      // Match the pre-state with both itself or its negation in the
      // post-state, for learned predicates.
      //postState.replaceValue(post.getNegation());
      postState = new DataState();
      postState.addValue(pv.getNegation());

      c = null;
      if (noOp) {
        // This is a no-op symbol when starting in the pre-state, and
        // the post-state now has a conflict with the pre-state, so we
        // remove the edge.
        rel.removeEdges(preState, postState);
      } else {
        // Test whether the transition is possible given the
        // semantics of the program statement represented by the 
        // ExpSymbol.
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

  // Compute the relations for all non-call and non-return nodes.
  protected void loadInternalRelationsBatch(List<List<DataState>> predCube) {
    Dbg.writeQueryHeader("Batching internal relations", false);

    List<DataState> predStates = collapseCube(predCube);

    // Associate a relation with each symbol and collect those that
    // need to be whittled down.
    List<ExpSymbol> syms = new ArrayList<ExpSymbol>();
    for (ExpSymbol sym : getSymbols()) {
      // Return transitions and other no-ops just get the id relation.
      if (setIdentityRelationForNoOpSymbol(null, sym)) continue;

      // We start with the havoc relation and whittle our way down.
      // This helps ensure by construction that we're conservative.
      setRelation(Predicate.TRUE, sym, relationDomain.getTrueRelation());

      // Havoc symbols have the unrestricted true relation.
      if (sym.isHavoc()) continue;

      syms.add(sym);
    }

    // Associate a clause with the data transitions it evaluates.
    QueryMap queryMap = new QueryMap();
    // Load the queries for the policy self-edges.
    for (Predicate lp : getLearnedPredicates()) {
      loadQueryBatch(queryMap, syms, lp.getNegative());
      loadQueryBatch(queryMap, syms, lp.getPositive());
    }

    processBatch(queryMap);
    queryMap.clear();

    // Loop through all the policy predicates to build the relations for
    // policy transitions.
    for (Predicate p : policyPath.getPredicates()) {
      // Associate a relation with each symbol and collect those that
      // need to be whittled down.
      List<ExpSymbol> psyms = new ArrayList<ExpSymbol>();
      for (ExpSymbol sym : getTransitioningSymbols(p.getNegative())) {
        // We start with the full relation and determine if any edges
        // can be removed by correlating predicates.
        // This helps ensure by construction that we're conservative.
        Relation fullrel = getRelation(null, sym).copy();
        setRelation(p, sym, fullrel);
        psyms.add(sym);
      }
      loadQueryBatch(queryMap, psyms, p.getNegative());
    }
    processBatch(queryMap);

    // We go on to correlate policy predicates with each learned
    // predicate to see if that can rule out transitions that are
    // possible in the current abstraction. So we can quit if there are
    // no learned predicates.
    if (getLearnedPredicates().size() == 0) return;

    // Initialize a new query batch.
    queryMap.clear();
    // For each policy transition that was possible, correlate each
    // of the predicates with the policy predicate in the pre-state
    // to see if the transition can be ruled out.
    for (Predicate p : policyPath.getPredicates()) {
      DataState preState = new DataState();
      preState.addValue(p.getNegative());
      DataState postState = new DataState();
      postState.addValue(p.getPositive());

      for (ExpSymbol sym : getTransitioningSymbols(p.getNegative())) {
        // Retrieve the relation for this symbol on the policy predicate.
        Relation rel = getRelation(p, sym);

        for (Predicate lp : learnedPredicates) {

          // Copy the pre-state containing the policy predicate.
          DataState preStateCorrelate0 = new DataState(preState);
          // And add the learned predicate.
          preStateCorrelate0.addValue(lp.getPositive()); 

          // Determine whether the transition between the correlated
          // pre-state and the post-state containing only the policy
          // predicate is ruled out, or if we need to make a query.
          Clause c0 = removeEdgeOrReturnClause(rel, sym, preStateCorrelate0, postState);

          if (c0 != null) {
            // Associate the clause and it's meaning.
            DataTransition tran0 = new DataTransition(rel, preStateCorrelate0, sym, postState);
            mapClauseToTransition(queryMap, c0, tran0);
          }

          // %%% Maybe could avoid this by processing a batch of negative
          // %%% values followed by a batch of positive ones.
          DataState preStateCorrelate1 = new DataState(preState);
          preStateCorrelate1.addValue(lp.getNegative()); 

          // Test whether the transition is possible given the
          // semantics of the program statement represented by the 
          // ExpSymbol.
          Clause c1 = removeEdgeOrReturnClause(rel, sym, preStateCorrelate1, postState);

          if (c1 != null) {
            // Associate the clause and it's meaning.
            DataTransition tran1 = new DataTransition(rel, preStateCorrelate1, sym, postState);
            mapClauseToTransition(queryMap, c1, tran1);
          }
        }
      }
    }

    // Process the results of the batched query.
    processBatch(queryMap);
  }

  // Returns a list of DataTransitions that are realizable in the
  // current abstraction, which will give the call a chance to refine.
  // %%% Move this to RelationAutomaton?
  protected List<DataTransition> processBatch(QueryMap queryMap) {
    List<Clause> clauses = new ArrayList<Clause>(queryMap.keySet());
    Dbg.out("Processing batch results: " + clauses.size(), 3);

    // Process the query batch.
    List<Boolean> results = semantics.batchQuery(clauses, true);

    // The semantics module should guarantee this.
    assert results.size() == clauses.size();

    List<DataTransition> realizableTransitions = new ArrayList<DataTransition>();

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
        } else {
          realizableTransitions.add(tran);
        }
      }
    }

    return realizableTransitions;
  }

  /*
  // Determine whether the given transition is possible in the program
  // model. This will internally query the semantics if necessary, so
  // this should only be used in the single-threaded query case.
  protected boolean isValidTransition(ExpSymbol sym, DataState prePred, DataState postPred, boolean clever) {

    // If we can determine there will be no effect, just add the edge.
    if (sym instanceof BranchSymbol) {
      BranchSymbol bsym = (BranchSymbol)sym;
      return isValidBranchTransition(bsym, prePred, postPred);
    } else if (sym instanceof FunctionEntrySymbol) {
      FunctionEntrySymbol fsym = (FunctionEntrySymbol)sym;
      return isValidFunctionEntryTransition(fsym, prePred, postPred);
    }
    
    if (clever && cleverCache.check(policyPath, sym, prePred, postPred)) {
      return false;
    }

    Clause c = getQuery(sym, prePred, postPred);
    if (c == null) return true;

    boolean valid = semantics.query(c, true);

    // If we got to the point where we made a query to XSB
    // and it was unsat, we can record the blocking predicates
    // in the clever cache.
    if (!valid) {
      addToCleverCache(sym, prePred, postPred);
    }
    
    return valid;
  }

  protected void loadInternalRelations(List<List<DataState>> predCubes) {
    Dbg.writeQueryHeader("Loading internal relations", false);

    // Get the true relation minus the edges that represent impossible
    // policy transitions.
    Relation fullRel = getFullRelation();

    // Examine all possible internal edges to generate all
    // semantically viable edges.
    for (ExpSymbol sym : getSymbols()) {

      // Return transitions and other no-ops just get the id relation.
      if (setIdentityRelationForNoOpSymbol(sym)) continue;
      
      Relation rel = fullRel.copy();
      // Associate the relation with the edges labeled by this symbol.
      for (Edge e : getEdgesWithSymbol(sym)) {
        relations.put(e, rel);
      }

      for (List<DataState> predCube : predCubes) {

        for (DataState preState : predCube) {
          PredicateValue pre = preState.getValues().get(0);

          // We don't take positive policy predicates into account
          // in the prestate.
          if (pre.isPositivePolicyValue()) continue;

          boolean noOp = isNoOpFromState(sym, preState);

          for (DataState postState : predCube) {
            PredicateValue post = postState.getValues().get(0);
            // We don't take negative policy predicates into account
            // in the poststate.
            if (post.isNegativePolicyValue()) continue;

            boolean remove = true;
            if (noOp) {
              remove = hasDataDifference(preState, postState);
            } else {
              remove = !isValidTransition(sym, preState, postState, true);
            }

            if (remove) {
              rel.removeEdges(preState, postState);
            } else if (post.isPolicyValue()) {
              // For each learned predicate, test whether the policy 
              // transition is precluded when the negative policy
              // predicate is conjoined with a value for the learned
              // predicate in the pre-state.
              for (Predicate lp : learnedPredicates) {
                // Test correlation with the positive form of lp.
                DataState preStateCorrelate = new DataState(preState);
                preStateCorrelate.addValue(lp.getPositive()); 
                if (!isValidTransition(sym, preStateCorrelate, postState, true)) {
                  rel.removeEdges(preStateCorrelate, postState);
                } else {
                  // If the previous transition proved to be impossible,
                  // this one is guaranteed (logically) to be possible,
                  
                  // so we can skip it.

                  // Test correlation with the negation of lp.
                  preStateCorrelate = new DataState(preState);
                  preStateCorrelate.addValue(lp.getNegative()); 
                  if (!isValidTransition(sym, preStateCorrelate, postState, true)) {
                    rel.removeEdges(preStateCorrelate, postState);
                  }
                }
              }
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
    if (true || JAM.Opts.queryThreads > 1) {
      loadInternalRelationsBatch(predCubes);
    } else {
      //loadInternalRelations(predCubes);
    }

    // %%% Calling this after loadInternalRelations to avoid
    // %%% overwriting relation. Could be smarter.
    Dbg.out("Loading initializer relation", 3);
    loadInitializerRelation();

    Dbg.out("Done loading relations", 3);

    loaded = true;
  }

}



