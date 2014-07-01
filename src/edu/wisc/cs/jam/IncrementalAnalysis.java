package edu.wisc.cs.jam;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.Queue;
import java.util.ArrayDeque;

import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.Executors;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;
import java.util.concurrent.ExecutorService;

// IncrementalAnalysis 
public class IncrementalAnalysis extends JAMAnalysis {

  private List<List<Predicate>> learnedPredicateCubes;

  public IncrementalAnalysis(JAM jam, PolicyPath pp) {
    super(jam, pp);
  }

  // Start over with no learned predicates.
  public void initLearnedPredicateCubes() {
    SeedPredicates seedPredicates = parent.getSeedPredicates();
    learnedPredicateCubes = seedPredicates.getSeedPredicateCubes(policyPath);
  }

  public List<List<Predicate>> getLearnedPredicateCubes() {
    List<List<Predicate>> ret = new ArrayList<List<Predicate>>();
    if (learnedPredicateCubes.size() == 0) {
      // Insert a dummy cube to make the analysis go through once.
      ret.add(new ArrayList<Predicate>());
    } else {
      ret.addAll(learnedPredicateCubes);
    }
    return ret;
  }

  protected synchronized void removeUnlockedChecks() {
    for (RuntimeCheck check : getChecks()) {
      if (!check.isLocked()) {
        parent.removeCheck(check);
        checks.remove(check);
      }
    }
  }

  protected synchronized void lockChecks() {
    for (RuntimeCheck check : getChecks()) {
      check.lock();
    }
  }

  @Override
  public void run() {
    Dbg.out("Starting policy path: " + policyPath, 1);

    // There are initially no learned predicates for each round.
    initLearnedPredicateCubes();

    List<List<Predicate>> predCubes = getLearnedPredicateCubes();

    ProgramModel model = models.peek();
    assert model != null : "Program models not initialized correctly.";

    // Load any new checks that may have been added by other analyses.
    updateChecks();

    boolean first = true;
    for (List<Predicate> preds : predCubes) {

      if (first) {
        first = false;
      } else {
        // If a check for a particular policy transition is not placed
        // on a particular statement during one round of the JAM
        // algorithm, then we have proven that it is a safe statement
        // for that policy predicate. Here we note that information for
        // use in subsequent rounds.
        model.noteUnreachableTransitions();
        // Remove any non-locked checks for this policy before
        // starting this round. The locking mechanism prevents us
        // from removing checks that might be valid for a different
        // policy path.
        removeUnlockedChecks();

        // Clear the previously calculated edge relations.
        // Reload the product automaton since the old model is outdated.
        model.reset();
      }

      model.initLearnedPredicates(preds);
        
      // Run the JAM algorithm with a particular learned predicate cube.
      runSub(model);
    }

    // Now that we've exhausted all the predicates we can learn for
    // this policy path, lock in the checks so that they're not removed
    // later.
    lockChecks();
  }

}

