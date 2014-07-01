package edu.wisc.cs.jam;

import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

public class CleverCache {

  private Map<ExpSymbol,List<BlockingValues>> cache;
  // Collection of the predicates that have been examined. This is just
  // available as record-keeping for the client of this cache.
  private List<Predicate> analyzedPredicates;

  public CleverCache() {
    cache = new HashMap<ExpSymbol,List<BlockingValues>>();
    analyzedPredicates = new ArrayList<Predicate>();
  }

  // Allows the client to note that this cache is initialized for the
  // predicate.
  public void setAnalyzed(Predicate p) {
    analyzedPredicates.add(p);
  }

  // Return whether the predicate is in the list of previously analyzed
  // predicates.
  public boolean alreadyAnalyzed(Predicate p) {
    return analyzedPredicates.contains(p);
  }

  // Return true if the transition can be invalidated via the cache.
  public boolean check(PolicyPath p, ExpSymbol sym, DataState d0, DataState d1) {
    List<BlockingValues> bvs = cache.get(sym);
    if (bvs == null) return false;

    for (BlockingValues bv : bvs) {
      if (bv.blocks(p, d0, d1)) {
        return true;
      }
    }

    return false;
  }

  // Note a blocking pair for this symbol given the prepared
  // BlockingValues object.
  public synchronized void add(ExpSymbol sym, BlockingValues bv) {
    // Initialize the set to hold the blocking predicates.
    List<BlockingValues> bvs = cache.get(sym);
    if (bvs == null) {
      bvs = new ArrayList<BlockingValues>();
      cache.put(sym, bvs);
    }

    // Add it to the clever cache.
    bvs.add(bv);
  }

  // Note a blocking pair, represented in the formof data-states, for
  // the given symbol.
  public void add(ExpSymbol sym, List<PredicateValue> pvs0, List<PredicateValue> pvs1) {
    // Create the blocking predicates collection.
    BlockingValues bvs = new BlockingValues(pvs0, pvs1);
    add(sym, bvs);
  }

  // Note a symbol that has been soundly shown to not need a runtime
  // check. This fact is recorded with respect to the policy path that
  // was analyzed, because it's still possible that a check may be
  // needed to protect against a different policy path that may overlap.
  public void add(PolicyPath p, ExpSymbol sym, List<PredicateValue> pvs0, List<PredicateValue> pvs1) {
    PolicyBlockingValues pbvs = new PolicyBlockingValues(p, pvs0, pvs1);
    add(sym, pbvs);
  }

  // This class is used as a container for pre- and post-state cubes
  // that guarantee a failing query when evaluated over a particular
  // program statement.
  //
  // The clever cache itself maps each statement to a set of
  // BlockingValues, so that we can skip queries when it's safe to
  // do so.
  class BlockingValues {
    protected List<PredicateValue> preVals;
    protected List<PredicateValue> postVals;

    public BlockingValues(List<PredicateValue> pre, List<PredicateValue> post) {
      preVals = pre;
      postVals = post;
    }

    // Determine whether the transition from preState to postState is 
    // blocked by this BlockingValues instance.
    public boolean blocks(PolicyPath pp, DataState preState, DataState postState) {
      for (PredicateValue pv : preVals) {
        if (!preState.getValues().contains(pv)) {
          return false;
        }
      }
      for (PredicateValue pv : postVals) {
        if (!postState.getValues().contains(pv)) {
          return false;
        }
      }

      return true;
    }

    @Override
    public String toString() {
      StringBuilder sb = new StringBuilder();
      for (PredicateValue pv : preVals) {
        sb.append(pv);
      }
      sb.append(" -> ");
      for (PredicateValue pv : postVals) {
        sb.append(pv);
      }
      return sb.toString();
    }
  }

  // This extension associates a BlockingValues with a particular
  // policy path. The presence of this in the clever cache indicates
  // that a full JAM analysis has determined that the control edge
  // cannot transition the predicate from false to true in the context
  // of this policy path. This allows us to remove learned/seeded
  // predicates from the analysis while maintaining this fact.
  //
  // We need to associate this with a specific policy path because
  // it could be control flow features that makes the transition (as
  // part of the path) infeasible. Analysis over other policy paths 
  // may find that the transition needs a check.
  class PolicyBlockingValues extends BlockingValues {
    private PolicyPath policyPath;

    public PolicyBlockingValues(PolicyPath p, List<PredicateValue> pre, List<PredicateValue> post) {
      super(pre, post);
      policyPath = p;
    }

    @Override
    public boolean blocks(PolicyPath pp, DataState preState, DataState postState) {
      // This type of blocking predicate is specific to a particular
      // policy path. The policy variable is accessed from the parent
      // RelationAutomaton class.
      if (pp != policyPath) return false;

      // If the policy applies, the check is done as if this were a
      // regular BlockingValues.
      return super.blocks(null, preState, postState);
    }

    @Override
    public String toString() {
      StringBuilder sb = new StringBuilder();
      sb.append(policyPath);
      sb.append(" | ");
      sb.append(super.toString());
      return sb.toString();
    }
  }
}
