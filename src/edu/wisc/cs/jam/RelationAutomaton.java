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
import java.util.LinkedHashMap;
import java.util.Set;
import java.util.LinkedHashSet;
import java.util.WeakHashMap;
import java.io.IOException;
import java.io.BufferedWriter;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.lang.ref.WeakReference;

import edu.wisc.cs.jam.bdd.BDDRelationDomain;

// This is essentially an abstract class (the constructor is protected)
// representing a ControlAutomaton with Relations associated with the
// edges.
public class RelationAutomaton extends ControlAutomaton {
  
  protected int MAX_BATCH_SIZE = 50000;

  // This is flipped when the data relations are loaded the first time,
  // and reverted if this is reset.
  protected boolean loaded;

  // If there have been no function entry predicates learned
  // thus far, there's no need to check the validity of function
  // entries.
  protected boolean checkFunctionEntry;
  protected boolean checkBranch;

  // The clever cache holds a mapping of program statements to minimal
  // sets of pre- and post-state predicates that are known to result in
  // failing queries. This is static so that it's a centralized
  // database.
  protected static CleverCache cleverCache;

  // The policy path with respect to which the relations are built.
  protected PolicyPath policyPath;

  // The semantics with which to evaluate the statements.
  protected Semantics semantics;

  protected CheckManager cm;

  // The set of learned/seeded predicates that are used to build the
  // program model. These are provided to loadRelations.
  protected List<Predicate> learnedPredicates;

  protected Map<Predicate,Map<Edge,Relation>> relations;
  // There is no WeakHashSet for some reason, so use a dummy-valued map.
  //protected WeakHashMap<Relation,Boolean> uniqueRelations;

  // This maps policy predicates to the list of program statements that
  // are guarded by a runtime check for that predicate.
  //protected Map<Predicate,List<ExpSymbol>> guardedSymbols;

  // This records the set of symbols that can potentially advance the
  // policy.
  protected static Map<PredicateValue,Set<ExpSymbol>> transitioningSymbols;

  // The domain used to manage the relations
  protected RelationDomain relationDomain; 
  protected List<DataState> fullCube;

  protected Predicate filterPredicate;

  protected Map<String,ComboSymbol<PredicateSymbol,ExpSymbol>> serialSymbolMap;

  static {
    // Initialize the clever cache structure.
    cleverCache = new CleverCache();
    transitioningSymbols = new LinkedHashMap<PredicateValue,Set<ExpSymbol>>();
  }

  protected RelationAutomaton(JAM j, PolicyPath pp) {
    super(j.getControlAutomaton());

    semantics = j.getSemantics();
    cm = j.getCheckManager();
    policyPath = pp;

    loaded = false;

    checkFunctionEntry = false;
    checkBranch = false;
    
    // Initialize an empty list of learned/seeded predicates.
    learnedPredicates = new ArrayList<Predicate>();

    relations = new LinkedHashMap<Predicate,Map<Edge,Relation>>(); 
    if (policyPath != null) {
      for (Predicate p : policyPath.getPredicates()) {
        relations.put(p, new LinkedHashMap<Edge,Relation>());
      }
    }
    relations.put(Predicate.TRUE, new LinkedHashMap<Edge,Relation>());

    // Synchronize modifications to the static collection.
    if (policyPath != null) {
      synchronized (getClass()) {
        for (Predicate p : policyPath.getPredicates()) {
          if (!transitioningSymbols.containsKey(p.getNegative())) {
            transitioningSymbols.put(p.getNegative(), new LinkedHashSet<ExpSymbol>());
          }
        }
      }
    }

    serialSymbolMap = new LinkedHashMap<String, ComboSymbol<PredicateSymbol,ExpSymbol>>();
  }

  // Retrieve the relation that weights the combination edge consisting
  // of the policy edge represented by the predicate p, and the given
  // control edge.
  public Relation getRelation(Predicate p, Edge ce) {
    if (p == null) {
      p = Predicate.TRUE;
    } else {

      // Check whether this edge should be filtered out.
      // If filterPredicate is null, we block transitions on all symbols
      // that already have a check for the parameter p.
      // If filterPredicate is non-null, we only block policy transitions
      // with the predicate p == filterPredicate.
      if (filterPredicate == null || p == filterPredicate) {
        if (ce.getSymbol().isGuarded(p)) {
          return relationDomain.getFalseRelation();
        }
      }
    }

    // Get the stored relation.
    Relation rel = relations.get(p).get(ce);
    if (rel == null) return relationDomain.getFalseRelation();
    return rel;
  }

  // %%% This assumes that all edges with the same symbol have the
  // %%% same relation.
  public Relation getRelation(Predicate p, ExpSymbol sym) {
    Set<Edge> ces = getEdgesWithSymbol(sym);
    assert ces.size() > 0 : "No edges with symbol: " + sym;
    for (Edge ce : ces) {
      return getRelation(p, ce);
    }
    return null;
  }

  protected void setRelation(Predicate p, Edge ce, Relation rel) {
    if (p == null) p = Predicate.TRUE;
    relations.get(p).put(ce, rel);
    //uniqueRelations.put(rel, null);
  }

  protected void setRelation(Predicate p, ExpSymbol sym, Relation rel) {
    if (p == null) p = Predicate.TRUE;
    Map<Edge,Relation> rels = relations.get(p);
    assert rels != null : "No relation map for predicate: " + p;
    for (Edge e : getEdgesWithSymbol(sym)) {
      rels.put(e, rel);
    }
    //uniqueRelations.put(rel, null);
  }

  // Return the number of variables that the relation relates.
  public int getRelationSize() {
    return learnedPredicates.size();
  }

  // Return all control automaton symbols that may flip the given 
  // to its negation.
  public Set<ExpSymbol> getTransitioningSymbols(PredicateValue pv) {
    assert pv != null : "Null key passed to getTransitioningSymbols"; 
    Set<ExpSymbol> syms = transitioningSymbols.get(pv);
    assert syms != null : "Null transitioning symbols list: " + pv;
    return new LinkedHashSet<ExpSymbol>(syms);
  }

  // Return all control automaton edges that advance the policy on the
  // given predicate.
  public Set<ControlAutomaton.Edge> getTransitioningEdges(PredicateValue pv) {
    assert pv != null : "Null key passed to getTransitioningEdges"; 
    Set<ControlAutomaton.Edge> ret = new LinkedHashSet<ControlAutomaton.Edge>();
    Set<ExpSymbol> syms = transitioningSymbols.get(pv);
    assert syms != null : "Null transitioning symbols list: " + pv;
    for (ExpSymbol sym : syms) {
      ret.addAll(getEdgesWithSymbol(sym));
    }
    return ret;
  }

  // Make sure a particular combination of predicates is not internally
  // inconsistent.
  protected boolean isConsistent(DataState s) {
    Clause c = createClause(s, null, s);
    // This means that the state is just policy predicates.
    if (c == null) return true;

    boolean consistent = semantics.query(c, true);
    return consistent;
  }

  // Determine whether the data states contain any values that
  // contradict each other. Predicates that are not represented do not
  // constitute a difference.
  protected boolean hasDataDifference(DataState preState, DataState postState) {
    for (PredicateValue pv : postState.getValues()) {
      if (preState.getValues().contains(pv.getNegation())) {
        return true;
      }
    }
    return false;
  }

  /*
  // Returns true if we don't need to test the transition between the
  // states. This assumes that omitEdgesWithSource was already called
  // for state s0 (i.e. this function will not weed out edges that that
  // one does).
  protected boolean omitEdge(DataState s0, DataState s1) {
    // The two states should either 1) contains the same policy
    // predicates, or 2) have the untriggered version of the first
    // false predicate in the pre-state, and the triggered version
    // in the post-state.
    
    List<PredicateValue> pvs0 = s0.getValues();
    List<PredicateValue> pvs1 = s1.getValues();

    assert pvs0.size() == pvs1.size() : "Malformed data transition.";

    boolean same = true;
    List<Predicate> polPreds = policyPath.getPredicates();
    for (int i=0; i<polPreds.size(); i++) {
      Predicate pp = polPreds.get(i);
      boolean prepos = pvs0.contains(pp.getPositive());
      boolean postpos = pvs1.contains(pp.getPositive());

      if (prepos ^ postpos) {
        // If there is more than one discrepancy, omit the edge.
        if (!same) return true;
        // If the policy transition isn't from the negation of the
        // policy predicate to it's positive value, omit the edge.
        if (prepos) return true;
        same = false;
      }
    }

    return false;
  }
  */

  // Determine whether relation edges away from this state should even
  // be considered.
  protected boolean omitEdgesWithSource(DataState ds) {
    // Due to the event-like interpretation of policy predicates (i.e.
    // program operations are observed and interpreted with only an eye
    // towards the next policy transition out of the current state),
    // we are able to restrict the state transitions tested for
    // inclusion in the relations.
    // 
    // For example, a policy path with 4 states (and therefore 3
    // transitions/predicates) will only need to test relation edges out
    // of the states consisting of the following policy predicates (and
    // any potential combination of learned/seeded predicates).
    //
    // (~a,~b,~c), (a,~b,~c), (a,b,~c)
    //
    // The final state, which is (a,b,c), never needs to have outgoing
    // edges, so we omit that also.
    boolean negFound = false;
    List<PredicateValue> stateVals = ds.getValues();
    for (Predicate pp : policyPath.getPredicates()) {
      if (stateVals.contains(pp.getNegative())) {
        // Record that a negative policy predicate has been encountered.
        negFound = true;
      } else {
        if (negFound) {
          // Here we've encountered a positive predicate after a
          // negative was found, which matches the pattern of pre-states
          // we want to omit.
          return true;
        }
      }
    }

    // This is the final state ... don't check out-edges from here.
    if (!negFound) return true;

    return false;
  }

  protected Clause getPrerequisite(ExpSymbol sym, DataState s0, DataState s1) {

    if (s0.equals(s1)) {
      // This isn't a policy transition, so if there are no learned
      // predicates, there's no transition to test.
      if (learnedPredicates.size() == 0) return null;
    }

    // Get the policy predicate we're interested in, if any.
    // %%% Could be extended to learned predicates.
    Predicate pp = getPolicyTransitionPredicate(s0, s1);
    if (pp == null) return null;

    Predicate prereq = pp.getPrerequisite();
    if (prereq == null) return null;

    DataState p0 = new DataState();
    p0.addValue(prereq.getNegative());
    DataState p1 = new DataState();
    p1.addValue(prereq.getPositive());

    Clause ret = createClause(p0, sym, p1);
    // To be effective, prerequisites should be path insensitive.
    // %%% This is an ugly hack due to hasty design.
    ret.setPolicyPathIndex(-1);
    return ret;
  }

  // Iterate through each combination of the automaton's symbols S and
  // predicates pairs <P0,P1>. If P0 -S-> P1 is invalid, then we store 
  // this fact and use it later to quickly rule out transitions.
  protected void initCleverCache(Predicate p) {

    // Synchronize on the predicate being initialized, since there's no
    // point in having two threads in here. The semantics takes care of
    // utilizing multiple processors by parallelizing queries.
    synchronized (p) {
      // Cut out here if the work is already done.
      if (cleverCache.alreadyAnalyzed(p)) return;

      Dbg.out("Initializing query cache: " + p, 2);
      Dbg.writeQueryHeader("Init query cache: " + p, false);

      // Only test what is most likely to fail: that a symbol can
      // change the value of this predicate.
      DataState d0 = new DataState();
      d0.addValue(p.getNegative());
      DataState d1 = new DataState();
      d1.addValue(p.getPositive());

      // Examine all possible internal edges to generate all
      // semantically viable edges.
      List<ExpSymbol> syms = getSymbols();
      int batchCnt = (int)Math.ceil(((double)syms.size()) / ((double)MAX_BATCH_SIZE));
      for (int j=0; j<batchCnt; j++) {
        if (batchCnt > 1) Dbg.out("Starting batch " + (j + 1) + " of " + batchCnt, 2);
        int start = j * MAX_BATCH_SIZE;

        // Collect queries here to send as a batch to the semantics.
        QueryMap queryMap = new QueryMap();

        int end = Math.min(start + MAX_BATCH_SIZE, syms.size());
        for (int i=start; i<end; i++) {
          ExpSymbol sym = syms.get(i);
          
          // Function-entries and branches can't change the data-state.
          if (sym instanceof FunctionEntrySymbol) continue;
          if (sym instanceof BranchSymbol) continue;

          // Test whether the transition is possible given the semantics
          // of the program statement represented by the ExpSymbol.
          if (sym.isNoOp()) continue;

          Clause c = getQuery(sym, d0, d1);
          if (c != null) {
            DataTransition trans = new DataTransition(null, d0, sym, d1);
            List<DataTransition> transitions = queryMap.get(c);
            if (transitions == null) {
              transitions = new ArrayList<DataTransition>();
              queryMap.put(c, transitions);
            }
            transitions.add(trans);

            Clause prereq = getPrerequisite(sym, d0, d1);
            queryMap.putPrereq(c, prereq);
          }

          // Test the other direction for learned predicates, but not
          // policy predicates.
          if (p.isPolicyPredicate()) continue;

          c = getQuery(sym, d1, d0);
          if (c != null) {
            DataTransition trans = new DataTransition(null, d1, sym, d0);
            List<DataTransition> transitions = queryMap.get(c);
            if (transitions == null) {
              transitions = new ArrayList<DataTransition>();
              queryMap.put(c, transitions);
            }
            transitions.add(trans);
          }
        }

        // Process the query batch.
        List<Clause> clauses = new ArrayList<Clause>(queryMap.keySet());
        List<Clause> prereqs = new ArrayList<Clause>();
        for (Clause c : clauses) {
          prereqs.add(queryMap.getPrereq(c));
        }
        List<Boolean> results = semantics.batchQuery(clauses, prereqs, true);
        assert results.size() == clauses.size();

        // Process the results.
        for (int i=0; i<clauses.size(); i++) {
          Boolean result = results.get(i);
          Clause c = clauses.get(i);
          for (DataTransition trans : queryMap.get(c)) {

            ExpSymbol sym = trans.getSymbol();
            DataState preState = trans.getSource();
            DataState postState = trans.getDestination();

            if (!result.booleanValue()) {
              // If we got to the point where we made a query to XSB
              // and it was unsat, we can record the blocking predicates
              // in the clever cache.
              addToCleverCache(sym, preState, postState);
            } else {
              // We note that this symbol can change this predicate value.
              PredicateValue pre = preState.getValues().get(0);
              transitioningSymbols.get(pre).add(sym);
            }
          }
        }
      }

      cleverCache.setAnalyzed(p);
    }
    Dbg.out("Done initializing cache", 3);
  }

  /*
   * Given an integer with binary form containing k 1's,
   * generate the next such integer in lexicographical order.
   * See http://en.wikipedia.org/wiki/Combinatorial_number_system#Applications
   */
  // %%% Convert this to use BitSet.
  protected static long getNextCombination(long x) {
    // Assume in the annotations that x has form x'01^a10^b
    long u = x & -x; // extract rightmost bit 1; u = 0'00^a10^b
      long v = u + x; // set last non-trailing bit 0, and clear to the right; v = x'10^a00^b
    if (v == 0) { // then overflow in v, or x == 0
        return -1; // signal that next k-combination cannot be represented
    }
    x = v + (((v ^ x) / u) >> 2); // v^x = 0'11^a10^b, (v^x)/u = 0'0^b1^{a+2}, and x ← x'100^b1^a
    return x;
  }

  // Get a combination of predicates (k-combination) chosen via the 
  // given bit vector.
  protected List<Predicate> getPredicateCombination(List<Predicate> preds, long bits) {
    List<Predicate> ret = new ArrayList<Predicate>();

    // Check each position in the predicates list to see if
    // it should be included in the cube.
    int ptr = 1;
    for (int i=0; i<preds.size(); i++) {
      if ((ptr & bits) == ptr) {
        ret.add(preds.get(i));
      }
      ptr = ptr << 1;
    }

    return ret;
  }

  // Return the state cube consisting of all possible states generated by 
  // negating some subset of the given predicates.
  protected static List<DataState> getCube(List<Predicate> comb) {
    List<DataState> ret = new ArrayList<DataState>();
    long max = 1 << comb.size();
    for (long i=0; i<max; i++) {
      // Generate a unique partial negation of the combination,
      // i.e. one "side" of the cube.
      List<PredicateValue> newComb = new ArrayList<PredicateValue>();
      long bit = 1;
      for (int j=0; j<comb.size(); j++) {
        Predicate p = comb.get(j);
        if ((i & bit) == 0) {
          newComb.add(p.getNegative());
        } else {
          newComb.add(p.getPositive());
        }
        bit = bit << 1;
      }

      // Generate the new state and associate it with the predicates.
      DataState s = new DataState();
      s.setValues(newComb);

      ret.add(s);
    }
    return ret;
  }
  
  // Create all states of the given predicate cube size.
  protected List<List<DataState>> getCubes(int cubesize, List<Predicate> preds) {
    List<List<DataState>> ret = new ArrayList<List<DataState>>();

    if (cubesize == 0) {
      // Return a cube with a single empty data state.
      List<DataState> cube = new ArrayList<DataState>();

      cube.add(new DataState());
      ret.add(cube);
      return ret;
    }

    // Get the lexographically first long with cubesize 1's.
    long comb = 0;
    for (int i=0; i<cubesize; i++) {
      comb += 1 << i;
    }
    // Sequentially generate all other combinations and the
    // corresponding cube.
    long maxComb = 1 << preds.size();
    do {
      if (comb == -1) {
        Dbg.err("Overflow error while generating combination.");
        break;
      }
      List<Predicate> predComb = getPredicateCombination(preds, comb);
      List<DataState> cube = getCube(predComb);
      ret.add(cube);
    } while ((comb = getNextCombination(comb)) < maxComb);

    return ret;
  }

  // Get a single list containing all combinations of the model
  // predicates.
  public List<DataState> getLearnedCube() {
    List<List<DataState>> cubes = getCubes(learnedPredicates.size(), learnedPredicates);

    // There will only be one cube.
    assert cubes.size() == 1 : "Error during cube construction.";
    return cubes.get(0);
  }

  public List<Predicate> getLearnedPredicates() {
    return new ArrayList<Predicate>(learnedPredicates);
  }

  public List<Predicate> getAllPredicates() {
    List<Predicate> ret = new ArrayList<Predicate>();
    ret.addAll(policyPath.getPredicates());
    ret.addAll(learnedPredicates);
    return ret;
  }

  // Map this symbol to the identity relation if we can determine that's
  // appropriate in some way without have to query the semantics.
  // The idea is that if a statement has not been shown to change the
  // data state, then the data state doesn't change.
  protected boolean setIdentityRelationForNoOpSymbol(Predicate p, ExpSymbol sym) {
    assert p == null || p.isPolicyPredicate() : "Non-policy predicate passed to setIdentityRelationForNoOpSymbol: " + p;

    boolean noOp = true;

    // The implemented logic doesn't apply to BranchSymbols and
    // FunctionEntrySymbols, so return false if they relation may need
    // more investigation.
    if (sym instanceof BranchSymbol) {
      if (checkBranch) return false;
      // Fall through with noOp = true.
    } else if (sym instanceof FunctionEntrySymbol) {
      if (checkFunctionEntry) return false;
      // Fall through with noOp = true.
    } else if (!sym.isNoOp()) {
      // Use some special logic to determine what symbols we can assign
      // the id relation to, given the predicates in our model.
      if (p != null && transitioningSymbols.get(p.getNegative()).contains(sym)) {
        // The policy predicate can be triggered by this symbol.
        noOp = false;
      } else {
        for (Predicate lp : getLearnedPredicates()) {
          if (getTransitioningSymbols(lp.getNegative()).contains(sym)) {
            noOp = false;
            break;
          } else if (getTransitioningSymbols(lp.getPositive()).contains(sym)) {
            noOp = false;
            break;
          }
        }
      }
    }

    if (noOp) {
      Relation idrel = relationDomain.getIdRelation();
      // The policy self-edges get the id relation, while the policy
      // transitions are impossible.
      setRelation(Predicate.TRUE, sym, idrel);
    }

    return noOp;
  }

  protected boolean isNoOpFromState(ExpSymbol sym, DataState pre) {
    // %%% Maybe use caching here.
    if (sym.isNoOp()) return true;

    // The implemented logic doesn't apply to BranchSymbols and
    // FunctionEntrySymbols, so return the conservative value.
    if (sym instanceof BranchSymbol) return !checkBranch;
    if (sym instanceof FunctionEntrySymbol) return !checkFunctionEntry;

    boolean noOp = true;

    // Get the first negative policy predicate contained in this
    // data state.
    PredicateValue negPolVal = null;
    for (Predicate p : policyPath.getPredicates()) {
      PredicateValue pv = p.getNegative();
      if (pre.getValues().contains(pv)) {
        negPolVal = pv;
        break;
      }
    }
      
    for (PredicateValue pv : pre.getValues()) {
      boolean isPol = pv.isPolicyValue();

      // This predicate value has no bearing on any transitions if
      // it's policy predicate value not equal to the negative value
      // identified above.
      if (isPol && !pv.equals(negPolVal)) continue;

      if (getTransitioningSymbols(pv).contains(sym)) {
        noOp = false;
        break;
      }
    }

    return noOp;
  }

  /*
  protected Relation getFullRelation() {
    // %%% Maybe no longer necessary.
    // Create the relation for this symbol.
    Relation fullRel = relationDomain.getTrueRelation();
    // Remove edges that we know we don't want, having to do with the
    // restriction that the policy only advances one step on any symbol.
    List<DataState> cube = getFullCube();
    for (DataState preState : cube) {
      if (omitEdgesWithSource(preState)) {
        // In some cases, we don't need to take the effort
        // to check edges out of this state.
        fullRel.removeEdges(preState, null);
      } else {
        for (DataState postState : cube) {
          if (omitEdge(preState, postState)) {
            fullRel.removeEdge(preState, postState); 
          }
        }
      }
    }
    return fullRel;
  }
  */

  // Get a single list containing all combinations of all predicates.
  public List<DataState> getFullCube() {
    if (fullCube == null) {
      List<Predicate> preds = getLearnedPredicates();
      List<List<DataState>> cubes = getCubes(preds.size(), preds);

      // There will only be one cube.
      assert cubes.size() == 1 : "Error during cube construction.";

      fullCube = cubes.get(0);
    }

    return new ArrayList<DataState>(fullCube);
  }

  // Generate the query to check whether a function entry is viable.
  protected Clause getFunctionEntryQuery(DataState pre, FunctionEntrySymbol fsym) {
    return createClause(pre, fsym, null);
  }

  // Do the policy predicates contained in the pre- and post-state
  // represent a policy transition? This assumes that omitEdge
  // and omitEdgesFromSource have already weeded out all the transitions
  // that have more than one policy predicate difference.
  public Predicate getPolicyTransitionPredicate(DataState s0, DataState s1) {
    List<PredicateValue> pvs0 = s0.getValues();
    List<PredicateValue> pvs1 = s1.getValues();
    for (Predicate pp : policyPath.getPredicates()) {
      // If the predicate is contained in the post-state, and its
      // negation is contained in the pre-state, we have ourselves a
      // policy transition.
      if (pvs0.contains(pp.getNegative()) && pvs1.contains(pp.getPositive())) {
        // Return the (positive transitioning version of) the policy
        // predicate that differed between the two states.
        return pp;
      }
    }
    return null;
  }

  protected Clause getQuery(ExpSymbol sym, DataState s0, DataState s1) {

    if (s0.equals(s1)) {
      // This isn't a policy transition, so if there are no learned
      // predicates, there's no transition to test.
      if (learnedPredicates.size() == 0) return null;
    }

    // Tell createClause what policy predicate we're interested in, if
    // any.
    Predicate pp = getPolicyTransitionPredicate(s0, s1);

    return createClause(s0, sym, s1, pp);
  }

  protected Clause createClause(DataState s0, ExpSymbol sym, DataState s1) {
    return createClause(s0, sym, s1, null);
  }

  // Generate a clause testing the transition on statement sym
  // between states s0 and s1.
  protected Clause createClause(DataState s0, ExpSymbol sym, DataState s1, Predicate polpred) {
    List<Clause> clauses = new ArrayList<Clause>();
    String transitionString = "";

    if (s0 != null) {
      List<PredicateValue> pvsBefore = s0.getValues();
      for (PredicateValue pv : new ArrayList<PredicateValue>(pvsBefore)) {
        if (pv.isPolicyValue()) {
          if (polpred == null || !pv.equals(polpred.getNegative())) {
            // Remove any policy predicate values that don't apply in
            // the pre-state.
            pvsBefore.remove(pv);
          }
        }
      }

      for (PredicateValue pv : pvsBefore) {
        if (JAM.Opts.debugQueries) {
          if (pv.equals(pv.getPredicate().getNegative())) {
            transitionString += "-";
          } else {
            transitionString += "+";
          }
          transitionString += pv.getPredicate().getId() + " ";
        }

        clauses.add(pv.getInitializer());
      }
    }

    if (sym != null) {
      if (JAM.Opts.debugQueries) {
        transitionString += sym.toString();
        if (sym.isPostCall()) transitionString += " [post]";
      }

      // This may legitimately return null for noops such as var 
      // declarations, and for the time being for statements that
      // the semantics can't handle.
      Clause parseClause = semantics.getParseClause(sym);
      if (parseClause == null) {
        return null;
      }
      clauses.add(parseClause);
    }
      
    if (s1 != null) {
      List<PredicateValue> pvsAfter = s1.getValues();
      for (PredicateValue pv : new ArrayList<PredicateValue>(pvsAfter)) {
        if (pv.isPolicyValue()) {
          if (polpred == null || !pv.equals(polpred.getPositive())) {
            // Remove any policy predicate values that don't equal the
            // positive value of the specified predicate.
            pvsAfter.remove(pv);
          }
        }
      }

      for (PredicateValue pv : pvsAfter) {
        if (JAM.Opts.debugQueries) {
          transitionString += " " + pv.getPredicate().getId();
          if (pv.equals(pv.getPredicate().getNegative())) {
            transitionString += "-";
          } else {
            transitionString += "+";
          }
        }

        clauses.add(pv.getClause());
      }
    }

    if (clauses.size() == 0) return null;
    
    Clause c = new Clause(clauses);
    // %%% Ugly
    c.setPolicyPathIndex(policyPath == null ? -1 : policyPath.getId());
    if (JAM.Opts.debugQueries) c.setDescription(transitionString);
    c.setConcrete(false);

    return c;
  }

  protected void addToCleverCache(ExpSymbol sym, DataState s0, DataState s1) {
    Predicate pp = getPolicyTransitionPredicate(s0, s1);
    List<PredicateValue> preState = new ArrayList<PredicateValue>();
    List<PredicateValue> postState = new ArrayList<PredicateValue>();

    for (PredicateValue pv : s0.getValues()) {
      if (pv.isPolicyValue()) {
        if (pp == null || !pv.equals(pp.getNegative()))
          continue;
      }
      preState.add(pv);
    }
    for (PredicateValue pv : s1.getValues()) {
      if (pv.isPolicyValue()) {
        if (pp == null || !pv.equals(pp.getPositive()))
          continue;
      }
      postState.add(pv);
    }

    cleverCache.add(sym, preState, postState);
  }

  protected Clause getBranchQuery(DataState preState, BranchSymbol bsym) {
    // If this data state contradicts the branch predicate, cut off
    // the path. 
    PredicateValue bpv = bsym.getCondition(semantics);

    // %%% Some condition formats aren't handled currently.
    // %%% Eventually change this to an assertion.
    // Returning true here is conservative.
    if (bpv == null) return null;

    DataState condState = new DataState();
    condState.addValue(bpv);
    Clause c = createClause(preState, null, condState);

    return c;
  }

  protected Clause removeBranchEdgesOrGetClause(Relation rel, BranchSymbol bsym, DataState preState, DataState postState) {
    // Branch symbols can't change the data state, so if there is one of
    // the states contains a predicate that is contradicted in the
    // other, we can say that this is an invalid data transition.
    List<PredicateValue> preVals = preState.getValues();
    List<PredicateValue> postVals = postState.getValues();
    for (PredicateValue pre : preVals) {
      if (postVals.contains(pre.getNegation())) {
        rel.removeEdges(preState, postState);
        return null;
      }
    }
   
    // Otherwise if the pre- and post-states are the same we can
    // assume the edge is possible if checkBranch is false.
    if (!checkBranch) return null;

    // Return the clause that will determine whether the pre-state makes
    // this branch impossible.
    Clause c = getBranchQuery(preState, bsym);
    return c;
  }

  protected boolean isValidBranchTransition(BranchSymbol bsym, DataState preState, DataState postState) {
    // Branch symbols can't change the data state, so if there is one of
    // the states contains a predicate that is contradicted in the
    // other, we can say that this is an invalid data transition.
    List<PredicateValue> preVals = preState.getValues();
    List<PredicateValue> postVals = postState.getValues();
    for (PredicateValue pre : preVals) {
      if (postVals.contains(pre.getNegation())) return false;
    }
   
    // Otherwise if the pre- and post-states are the same we can
    // assume the edge is possible if checkBranch is false.
    if (!checkBranch) return true;

    Clause c = getBranchQuery(preState, bsym);
    if (c == null) return true;

    boolean valid = semantics.query(c, true);
    return valid;
  }

  protected Clause removeFunctionEntryEdgesOrGetClause(Relation rel, FunctionEntrySymbol fsym, DataState preState, DataState postState) {
    // Function entry symbols can't change the data state, so if there
    // is one of the states contains a predicate that is contradicted in
    // the other, we can say that this is an invalid data transition.
    List<PredicateValue> preVals = preState.getValues();
    List<PredicateValue> postVals = postState.getValues();
    for (PredicateValue pre : preVals) {
      if (postVals.contains(pre.getNegation())) {
        rel.removeEdges(preState, postState);
        return null;
      }
    }

    if (!checkFunctionEntry) return null;

    return getFunctionEntryQuery(preState, fsym);
  }

  protected boolean isValidFunctionEntryTransition(FunctionEntrySymbol fsym, DataState preState, DataState postState) {
    // Function entry symbols can't change the data state, so if there
    // is one of the states contains a predicate that is contradicted in
    // the other, we can say that this is an invalid data transition.
    List<PredicateValue> preVals = preState.getValues();
    List<PredicateValue> postVals = postState.getValues();
    for (PredicateValue pre : preVals) {
      if (postVals.contains(pre.getNegation())) return false;
    }

    // If we haven't incorporated any function entry predicates into
    // the abstraction, any function entry must be valid.
    // %%% Use dataflow information.
    if (!checkFunctionEntry) return true;

    Clause c = createClause(preState, fsym, null);
    if (c == null) return true;

    boolean valid = semantics.query(c, true);
    return valid;
  }

  protected void initRelationDomain() {
    // Regardless of the abstraction, we need the relation domain to
    // cover all predicates.
    relationDomain = new BDDRelationDomain(getLearnedPredicates());
  }

  protected void loadInitializerRelation() {

    Relation rel = relationDomain.getTrueRelation();

    if (!JAM.Opts.unconstrainedEnvironment) {
      for (Predicate pred : getLearnedPredicates()) {
        // Get the truth value of the predicate in the initial
        // environment.
        PredicateValue init = pred.getInitialValue(semantics);
        
        if (init != null) {
          // Remove the relation edges leading to states that contain
          // the negation of the initial value of this predicate.
          DataState ds = new DataState();
          ds.addValue(init.getNegation());
          rel.removeEdges(null, ds);
        }
      }
    }

    // Should just be one initial state and with one outedge, but 
    // just to be complete...
    for (State controlInit : getInitialStates()) {
      for (Edge oe : getOutEdges(controlInit)) {
        setRelation(Predicate.TRUE, oe, rel);
      }
    }
  }

  // Remove states that are self-contradictory from the cube.
  // %%% Update
  protected void removeInconsistentStates(List<DataState> cube) {
    // Copy the cube to prevent a modification exception.
    for (DataState ds : new ArrayList<DataState>(cube)) {
      if (!isConsistent(ds)) {
        cube.remove(ds);
      }
    }
  }

  /*
  public void removeObsoleteStates(List<DataState> cube) {
    for (DataState ds : new ArrayList<DataState>(cube)) {
      boolean negFound = false;
      for (Predicate p : policyPath.getPredicates()) {
        if (ds.getValues().contains(p.getNegative())) {
          negFound = true;
        } else {
          // If a previous policy predicate was false, and the current
          // one is true, the state isn't relevant.
          if (negFound) {
            cube.remove(ds);
            break;
          }
        }
      }
    }
  }
  */

  // Collect new learned predicates passed by the client, and indicate
  // through the loaded member whether there are any new predicates.
  // This also runs the clever cache initialization for any new preds.
  protected void prepareLearnedPredicates(List<Predicate> learnedPreds) {
    // Add to the list of predicates. If there's a new one, we need to
    // reload all the data relations.
    for (Predicate p : learnedPreds) {
      if (!learnedPredicates.contains(p)) {
        if (loaded) {
          loaded = false;
          clearRelations();
        }
        learnedPredicates.add(p);

        // Any learned predicates could potentially affect branches.
        checkBranch = true;
        // Record whether the abstraction has any function entry
        // predicates, so we can skip those tests if possible.
        if (p.isFunctionEntry()) {
          checkFunctionEntry = true;
          break;
        }

        synchronized (getClass()) {
          PredicateValue pv = p.getNegative();
          if (transitioningSymbols.get(pv) == null) {
            transitioningSymbols.put(pv, new LinkedHashSet<ExpSymbol>());
          }
          pv = p.getPositive();
          if (transitioningSymbols.get(pv) == null) {
            transitioningSymbols.put(pv, new LinkedHashSet<ExpSymbol>());
          }
        }

        initCleverCache(p);
      }
    }
  }
  
  protected void clearRelations() {
    for (Map<Edge,Relation> rels : relations.values()) {
      rels.clear();
    }
    //uniqueRelations.clear();
  }

  // This is called when no new predicates have been added, (but a
  // runtime check may have been), so only particular edges need to be
  // modified in place.
  protected void updateRelations() {
    for (ExpSymbol sym : getSymbols()) {
      // This may be the newly added check, and therefore needs
      // to be assigned a relation.
      Exp s = sym.getExp();
      if (cm.isRuntimeCheck(s)) {
        Set<Edge> symEdges = getEdgesWithSymbol(sym);
        Relation id = relationDomain.getIdRelation();
        setRelation(Predicate.TRUE, sym, id);
      }
    }
  }

  public void filterRelations(Predicate filterPred) {
    filterPredicate = filterPred;
  }

  public void loadRelations(List<Predicate> learnedPreds) {
    throw new UnsupportedOperationException(
      "Function loadRelations is abstract in RelationAutomaton.");
  }

  // Reinitialize the analysis when changing policy paths or %%%
  public void reset() {
    loaded = false;
    fullCube = null;
    clearRelations();
    learnedPredicates = new ArrayList<Predicate>();
  }

  // Generate blocking predicates for policy transitions that are
  // unreachable in this program for this policy path.
  public void noteUnreachableTransitions() {
    for (PolicyPath.Edge e : policyPath.getAdvancingEdges()) {
      Policy.Edge pe = policyPath.getPolicyEdge(e);
      // We want to assert that the edge predicate can't flip from false
      // to true on account of each symbol.
      Predicate pred = e.getSymbol().getPredicate();
      PredicateValue neg = pred.getNegative();
      PredicateValue pos = pred.getPositive();

      // The original BlockingPredicates class is constructed with
      // reference to pre- and post-DataStates, so we follow that lead.
      DataState bpSrc = new DataState();
      bpSrc.addValue(neg);
      DataState bpDest = new DataState();
      bpDest.addValue(pos);

      // Examine all symbols to see if we can assert they are safe.
      for (ExpSymbol sym : getSymbols()) {
        // Check that there's not already a blocking predicate
        // that prevents this transition.
        if (cleverCache.check(policyPath, sym, bpSrc, bpDest)) continue;

        // Only if there is no runtime check guarding the symbol can
        // we say anything useful.
        if (!sym.isGuarded(pe)) {
          cleverCache.add(policyPath, sym, bpSrc.getValues(), bpDest.getValues());
        }
      }
    }
  }

  @Override
  protected void statesSerialize(Appendable out) throws IOException {
    out.append("STATES:\n");
    for (State ps : policyPath.getStates()) {
      boolean pinit = ps.isInitial();
      boolean pfin = ps.isFinal();
      String pserial = ps.serialize();

      if (pfin) {
        // Only output reachable final states.
        Predicate p = policyPath.getInEdges(ps).get(0).getSymbol().getPredicate();
        for (Edge e : getTransitioningEdges(p.getNegative())) {
          State cs = e.getDestination();

          out.append(pserial);
          out.append(".");
          out.append(cs.serialize());
          out.append("%");
          out.append("\n");
        }
        
      } else {
        for (State cs : getStates()) {
          boolean cinit = pinit && cs.isInitial();
          boolean cfin = pfin && cs.isFinal();
          out.append(pserial);
          out.append(".");
          out.append(cs.serialize());
          if (cinit) {
            out.append("*");
          } else if (cfin) {
            out.append("%");
          }
          out.append("\n");
        }
      }
    }
  }

  protected void edgeSerialize(Appendable out, Edge cedge, PolicyPath.Edge pedge, ComboState<State,State> callSource) throws IOException {
    Predicate p = pedge.getSymbol().getPredicate();
    ExpSymbol ns = cedge.getSymbol();

    // Don't output any policy-transitioning edge if this symbol
    // cannot transition the policy on this predicate.
    if (p != null && !p.equals(Predicate.TRUE)) {
      if (!getTransitioningSymbols(p.getNegative()).contains(ns)) return;
    }

    Relation rel = getRelation(p, cedge);

    // No point in adding edges that cannot be traversed.
    if (rel.isEmpty()) return;

    if (cedge.isCallEdge()) {
      out.append("@");
    } else if (cedge.isReturnEdge()) {
      out.append("&");
    }

    out.append(pedge.getSource().toString());
    out.append(".");
    out.append(cedge.getSource().toString());
    out.append("|");

    if (callSource != null) {
      out.append(callSource.toString());
      out.append("|");
    }

    out.append(pedge.getDestination().toString());
    out.append(".");
    out.append(cedge.getDestination().toString());
    out.append("|");

    ComboSymbol<PredicateSymbol,ExpSymbol> combo = new ComboSymbol<PredicateSymbol,ExpSymbol>(pedge.getSymbol(), ns);
    String symText = combo.serialize();
    // Map the serialized representation of the symbol to the symbol
    // itself. This is used to recognize the symbol after it's
    // returned from an outside source.
    serialSymbolMap.put(symText, combo);

    out.append(symText);
    out.append("|");

    out.append(Integer.toString(rel.hashCode()));
    out.append("\n");
  }

  @Override
  protected void edgesSerialize(Appendable out) throws IOException {
    out.append("EDGES:\n");
    for (ControlAutomaton.Edge cedge : getEdges()) {

      // Loop through self-edges as well as advancing policy edges.
      for (PolicyPath.Edge pedge : policyPath.getEdges()) {
        if (cedge.isReturnEdge()) {
          // Add an edge from each previous policy state, including the
          // current one.
          for (PolicyPath.Edge pcedge : policyPath.getAdvancingEdges()) {
            ComboState<State,State> callsrc = new ComboState<State,State>(pcedge.getSource(), cedge.getCallSource());
            edgeSerialize(out, cedge, pedge, callsrc);
            // This should stop at the right place both if pedge is an
            // advancing edge or a self-edge.
            if (pcedge.getSource().equals(pedge.getSource())) break;
          }
        } else {
          edgeSerialize(out, cedge, pedge, null);
        }

      }
    }
  }

  protected void relationsSerialize(Appendable out) throws IOException {
    out.append("RELATIONS:\n");

    Set<Relation> unique = new LinkedHashSet<Relation>();
    // %%% Inefficient
    for (Map<Edge,Relation> erels : relations.values()) {
      for (Relation rel : erels.values()) {
        if (rel == null) continue;
        if (unique.contains(rel)) continue;
        unique.add(rel);

        out.append("@");
        out.append(Integer.toString(rel.hashCode()));
        out.append("\n");
        out.append(rel.toString());
        out.append("\n");
      }
    }
  }

  public void serializeToStream(OutputStream out) throws IOException {
    serialSymbolMap.clear();
    BufferedWriter w = new BufferedWriter(new OutputStreamWriter(out));
    relationsSerialize(w);
    statesSerialize(w);
    edgesSerialize(w);
    w.close();
  }

  // Print the relations first.
  @Override
  public String serialize() {
    serialSymbolMap.clear();
    StringBuilder sb = new StringBuilder();
    try {
      relationsSerialize(sb);
      statesSerialize(sb);
      edgesSerialize(sb);
    } catch (IOException ex) {
      // This should never happen since StringBuilder doesn't throw
      // exceptions.
      Dbg.err("StringBuilder somehow threw an exception.");
    }

    return sb.toString();
  }
  
  public ComboSymbol<PredicateSymbol,ExpSymbol> getSymbolFromText(String symText) {
    return serialSymbolMap.get(symText);
  }

  // This is just an alias for convenience.
  protected class QueryMap extends HashMap<Clause,List<DataTransition>> {
    static final long serialVersionUID = 112180;

    Map<Clause,Clause> prereqs;

    public QueryMap() {
      super();
      prereqs = new HashMap<Clause,Clause>();
    }

    public Clause getPrereq(Clause c) {
      return prereqs.get(c);
    }

    public void putPrereq(Clause c, Clause pr) {
      prereqs.put(c, pr);
    }
  }
}
