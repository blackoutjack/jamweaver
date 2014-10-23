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

import edu.wisc.cs.jam.opennwa.OpenNWAInterface;
import edu.wisc.cs.jam.opennwa.OpenNWALibrary;
import edu.wisc.cs.jam.opennwa.OpenNWAProcess;

// BackwardAnalysis begins by instrumenting the program conservatively
// and then proceeds to remove checks that can be proven unnecessary.
public class BackwardAnalysis extends JAMAnalysis {

  // %%% It's a design flaw that we need this.
  protected JAM jam;
  
  public BackwardAnalysis(JAM j, PolicyPath pp) {
    super(j, pp);
    jam = j;
  }

  // Weave checks on all statements that can induce a policy predicate
  // in any context.
  protected void runConservative(ProgramModel model) {
    Dbg.out("Conservatively instrumenting policy path: " + policyPath, 2);

    // The control/data program model is built with the minimal set of
    // predicates (those found in the current policy path).
    model.build();

    RelationAutomaton ra = model.getRelationAutomaton();

    for (Policy.Edge pe : policyPath.getPolicyEdges()) {
      Predicate pred = pe.getSymbol().getPredicate();
      assert pred != Predicate.TRUE;
      PredicateValue pv = pred.getPositive();

      for (ExpSymbol sym : ra.getTransitioningSymbols(pv)) {
        RuntimeCheck check = cm.getCheck(sym, pe);
        addCheck(check);
      }
    }

    Dbg.out(getCheckCount() + " checks conservatively woven", 1);
  }

  // This is like |JAMAnalysis.findCounterExample|, except that it
  // uses the |FocusAutomaton|.
  protected CounterExample determineReachability(ProgramModel model) {
    RelationAutomaton faut = model.getFocusAutomaton();

    if (JAM.Opts.debug)
      FileUtil.serializeToFile(faut, "faut-" + iteration + ".aut");

    initOpenNWA();

    CounterExample cex = openNWA.findCounterExample(this, faut);

    // Null indicates that the transition is not reachable.
    return cex;
  }

  protected void runSeeded(ProgramModel model) {

    List<List<Predicate>> seedPredCubes = seeds.getSeedPredicateCubes(policyPath);
    if (seedPredCubes.size() > 0) {
      for (List<Predicate> seedPreds : seedPredCubes) {
        model.reset();
        // Prove checks spurious with seeded predicates.
        model.initLearnedPredicates(seedPreds);

        // Build the model with the seeded predicates.
        model.build();

        if (JAM.Opts.debug)
          FileUtil.serializeToFile(model.getRelationAutomaton(), "raut-" + iteration + ".aut");

        Set<String> seedNames = null;
        if (JAM.Opts.seedLocal) {
          // Gather names mentioned in the seed predicates.
          seedNames = new HashSet<String>();
          for (Predicate sp : seedPreds) {
            for (Exp spe : sp.getConjuncts()) {
              spe.findNames(seedNames);
            }
          }
        }

        // %%% Want to only get the checks added by this analysis?
        for (RuntimeCheck c : getChecks()) {
          // Don't try to rule out checks that are locked in.
          if (c.isLocked()) continue;

          if (JAM.Opts.seedLocal) {
            // In this mode, we only attempt to rule out checks on nodes
            // that involve names mentioned in the seed predicates.
            Set<String> checkNames = new HashSet<String>();
            c.getLocation().findNames(checkNames);
            boolean found = false;
            for (String name : checkNames) {
              if (seedNames.contains(name)) {
                found = true;
                break;
              }
            }
            if (!found) continue;
          }

          iteration++;

          // Configure the model so that the only transition is the one
          // represented by this check.
          model.focus(jam, c.getPolicyEdge(), c.getLocation());

          CounterExample cex = determineReachability(model);
          
          if (cex == null) {
            // There is either no control path to the transitioning node,
            // or the seeded predicates rule out the transition.
            Dbg.out("Removing spurious check: " + c, 1);
            checks.remove(c);
            cm.removeCheck(c);
            
            // Mark the transition as spurious.
            // %%% Type mismatch
            //model.getFocusAutomaton().noteUnreachableTransition(c.getLocation(), c.getPolicyEdge());
          }
        
          // Else leave the check where it is.
        }
      }
    }
  }

  protected void runRefine(ProgramModel model) {
    Dbg.out("Attempting model refinement", 2);

    // %%% Want to only get the checks added by this analysis?
    for (RuntimeCheck c : getChecks()) {
      // Don't try to rule out checks that are locked in.
      if (c.isLocked()) continue;

      List<Predicate> learned = new ArrayList<Predicate>();
      while (true) {

        iteration++;

        model.reset();
        model.initLearnedPredicates(learned);
        // Build the model with the current learned predicates.
        model.build();

        if (JAM.Opts.debug)
          FileUtil.serializeToFile(model.getRelationAutomaton(), "raut-" + iteration + ".aut");

        // Configure the model so that the only transition is the one
        // represented by this check.
        model.focus(jam, c.getPolicyEdge(), c.getLocation());

        CounterExample cex = determineReachability(model);
      
        if (cex == null) {
          // There is either no control path to the transitioning node,
          // or the learned predicates rule out the transition.
          Dbg.out("Removing spurious check: " + c, 1);
          checks.remove(c);
          cm.removeCheck(c);
          
          // Mark the transition as spurious.
          // %%% Type mismatch
          //model.getFocusAutomaton().noteUnreachableTransition(c.getLocation(), c.getPolicyEdge());
          // Break out of the learning loop.
          learned.clear();
          break;
        } else if (shouldRefine(model, cex)) {
          // Try to learn a new predicate.
          Predicate newpred = learnNewPredicate(cex, model.getAllPredicates());

          if (newpred == null) {
            // Can't learn a new predicate, so move on.
            break;
          }

          // Restart the analysis with the new predicate as part of the
          // program model, which hopefully rules out the spurious
          // counter-example.
          learned.add(newpred);
        } else {
          // We're past the learning limit, or the counterexample is
          // valid, so go on to the next check.
          learned.clear();
          break;
        }

        // We must have added a new predicate.
      }
    }
  }

  @Override
  public void run() {
    Dbg.out("Starting backwards analysis for policy path: " + policyPath, 1);

    // Load any new checks that may have been added by previous
    // analyses.
    updateChecks();

    // We only use one ProgramModel in this version of the
    // algorithm. The peek method leaves it in the queue.
    ProgramModel model = models.peek();
    assert model != null;

    // Start off with no predicates.
    model.initLearnedPredicates(new ArrayList<Predicate>());

    runConservative(model);

    if (seeds.hasSeedsForPath(policyPath)) {
      runSeeded(model);
    }
    
    if (JAM.Opts.refinementLimit > 0) {
      // Try to refine the model by learning predicates.
      runRefine(model);
    }

    // %%% In cases where the all the policy path's transitions are not
    // %%% represented, we can remove all checks.
  }

}
