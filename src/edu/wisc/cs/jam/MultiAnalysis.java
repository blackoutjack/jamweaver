package edu.wisc.cs.jam;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;

import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.Executors;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;
import java.util.concurrent.ExecutorService;

// A JAMAnalysis object conducts the JAM algorithm on a particular
// policy path.
public class MultiAnalysis extends JAMAnalysis {
  
  public MultiAnalysis(JAM jam, PolicyPath pp) {
    super(jam, pp);
  }

  // A variation on the main algorithm in which we use multiple
  // PolicyControlProduct automata in parallel.
  @Override
  public void run() {
    Dbg.out("Checking policy path: " + policyPath, 1);
    // %%%
    //boolean validate = JAM.Opts.refinementLimit != 0;

    updateChecks();

    ProgramModel model = getModel();
    model.initLearnedPredicates(seeds.getSeedPredicates(policyPath));

    // Build the control/data program model with respect to the policy
    // and no refinement.
    model.build();

    PolicyControlCombinator cmb = PolicyControlCombinator.init(policyPath, model);

    // Reinsert the model into the queue.
    models.add(model);

    ExecutorService pool = Executors.newFixedThreadPool(JAM.Opts.cexThreads);

    List<Future<?>> results = new ArrayList<Future<?>>();
    for (int i=0; i<cmb.totalCombinations(); i++) {
      CexFinder cf = new CexFinder(cmb);
      Future<?> result = pool.submit(cf);
      results.add(result);
      iteration++;
    }

    // The pool no longer accepts new tasks.
    pool.shutdown();
      
    // Wait until results are ready.
    // %%% Can probably do this more efficiently.
    for (Future<?> res : results) {
      while (!res.isDone()) {
        try {
          res.get();
        } catch (InterruptedException ex) {
        } catch (ExecutionException ex) {
          ex.printStackTrace();
          break;
        }
      }
    }

    // No more counterexamples, code is clean with regards to the
    // current policy path.
    Dbg.out("No more counter-examples; " + getCheckCount() + " checks woven", 1);
  }

  public class CexFinder implements Runnable {
    private PolicyControlCombinator cmb;
    private int id;
    private int iter;

    public CexFinder(PolicyControlCombinator c) {
      cmb = c;
      id = iteration;
      iter = 0;
    }

    public void run() {

      // Retrieve a ProgramModel to use. This may block
      // if all are currently in use.
      ProgramModel model = getModel();
      model.initLearnedPredicates(seeds.getSeedPredicates(policyPath));
      model.build();

      // We aim to find a new counter-example for each
      // possible combination of policy transitions.
      // Get the next combination of potential policy-violating edges.
      List<ControlAutomaton.Edge> openTransitions = cmb.getNext();
      if (openTransitions == null) {
        models.add(model);
        return;
      }

      while (true) {

        // Adjust the product automaton to aim at a specific
        // counter-example sequence.
        model.loadProductEdges(openTransitions);

        if (JAM.Opts.debug) {
          FileUtil.writeToFile(model.getProductAutomaton().serialize(), "paut-" + id + "-" + iter + ".aut");
          FileUtil.writeToFile(model.getRelationAutomaton().serialize(), "raut-" + id + "-" + iter + ".aut");
        }

        CounterExample cex = findCounterExample(model);

        // Keep track of number of times through this loop.
        iter++;

        if (shouldRefine(model, cex)) {
          Predicate newpred = learnNewPredicate(cex, model.getAllPredicates());

          if (newpred != null) {
            // Restart the analysis with the new predicate as part of the
            // program model, which hopefully rules out the spurious
            // counter-example.
            model.addLearnedPredicate(newpred);

            // Reload the product automaton since the old model is outdated.
            model.build();
            continue;
          }
        }

        if (cex != null) {
          instrumentCounterExample(cex);

          // Possibly save the current source code to file.
          if (JAM.Opts.intermediateOutput || JAM.Opts.debug) {
            String srcout = FileUtil.getBaseName() + "-" + id + "-" + iter + ".js";
            FileUtil.writeToFile(getSourceFile(), srcout);
          }
        }

        break;
      }

      // Add the automaton back into the queue.
      models.add(model);
    }
  }

}

