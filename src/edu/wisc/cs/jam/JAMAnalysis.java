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

import edu.wisc.cs.jam.js.JSPredicateLearner;

// A JAMAnalysis object conducts the JAM algorithm on a particular
// policy path.
public class JAMAnalysis implements Runnable {
  
  protected static OpenNWAInterface openNWA;

  // The parent coordinates the work of multiple JAMAnalysis processes
  // and merges the results.
  protected JAM parent;

  // This tracks the runtime checks placed by the analysis.
  protected CheckManager cm;

  // The policy path to be analyzed by this object.
  protected PolicyPath policyPath;

  // Internal structures used by the algorithm.
  protected LinkedBlockingQueue<ProgramModel> models;

  protected SeedPredicates seeds;

  // Number of checks that were inserted by another JAMAnalysis but
  // are applicable to this analysis.
  protected int externalCheckCount = 0;

  // Track the number of iterations through the algorithm.
  protected static int iteration = -1;

  // State per policy path
  protected List<Predicate> learnedPredicates;
  protected List<RuntimeCheck> checks;
    
  public JAMAnalysis(JAM j, PolicyPath p) {
    parent = j;
    policyPath = p;
    cm = j.getCheckManager();

    checks = new ArrayList<RuntimeCheck>();

    // Initialize the automata that will be used for this round, though
    // they will be replaced with newly constructed versions if the
    // model is refined.
    seeds = parent.getSeedPredicates();
    models = new LinkedBlockingQueue<ProgramModel>(JAM.Opts.cexThreads);
    for (int i=0; i<JAM.Opts.cexThreads; i++) {
      ProgramModel m = new ProgramModel(parent, policyPath);
      models.add(m);
    }

    // Create a new directory to save output.
    if (JAM.Opts.debug) FileUtil.newWorkingDir();
  }

  public SourceFile getSourceFile() {
    return parent.getSourceFile();
  }

  public Semantics getSemantics() {
    return parent.getSemantics();
  }

  public PolicyPath getPolicyPath() {
    return policyPath;
  }

  public CheckManager getCheckManager() {
    return cm;
  }

  // From the global list of checks, pull in the ones that are
  // applicable to this policy path.
  protected void updateChecks() {
    // Collect any checks that have been added during the previous
    // analysis of another policy path, but also are relevant to the
    // instrumentation of the current policy path.
    for (RuntimeCheck c : cm.getChecks()) {
      // Nothing to do if we already have the check loaded.
      if (checks.contains(c)) continue;
      if (policyPath.checkApplies(c)) {
        checks.add(c);
        // Note the number of previously-inserted checks relevant to
        // this policy path.
        externalCheckCount++;
      }
    }
  }

  // This returns the number of new checks inserted by analysis of the
  // current policy path.
  public int getCheckCount() {
    // Only report checks that have been newly inserted for this policy
    // path analysis.
    return checks.size() - externalCheckCount;
  }

  public List<RuntimeCheck> getChecks() {
    return new ArrayList<RuntimeCheck>(checks);
  }

  protected synchronized void addCheck(RuntimeCheck c) {
    // The parent coordinates the application of the check (i.e. the
    // actual source rewriting).
    cm.addCheck(c);
    // Multiple counter-examples can contain the same check, leading to
    // duplication.
    if (!checks.contains(c)) checks.add(c);
  }

  // Start over with no learned predicates.
  public void initLearnedPredicates() {
    SeedPredicates seedPredicates = parent.getSeedPredicates();
    learnedPredicates = seedPredicates.getSeedPredicates(policyPath);
  }

  // The main algorithm.
  protected void runSub(ProgramModel model) {
    
    // Do we check counterexample validity and refine the model, or not?
    boolean validate = JAM.Opts.refinementLimit != 0;

    // During the first phase, we act like transitions that are guarded
    // for a particular policy transition cannot cause that transition
    // as part of a different counter-example. This is not true for a
    // policy path longer than 1 transition, because we may need to
    // consider that transitioning symbol in combination with all 
    // symbols that can cause a different policy transition.
    // 
    // Once no more counter-examples are found and we've saturated what
    // we can with the previous method, we begin "disabling" the checks
    // guarding all symbols for a particular policy transition. This
    // allows us to pick up combinations that didn't arise before and
    // results in full instrumentation (relying on the fact that we're
    // dealing with a path, not a branching policy, which would be more
    // complicated).
    Queue<Predicate> filterPreds =
      new ArrayDeque<Predicate>(policyPath.getPredicates());
    Predicate filterPred = null;

    while (true) {

      // Keep track of number of times through this loop.
      iteration++;

      // The first time through the loop, the control/data program model
      // is built with the minimal set of predicates (typically only
      // predicates found in the current policy path). In subsequent
      // iterations, we may have accumulated further learned predicates.
      model.build();

      // We aim to find a new counter-example.
      CounterExample cex = null;

      // Don't allow policy transitions for the filter predicate on
      // symbols already guarded for that symbol. If filterPred is null,
      // all guarded transitions are blocked. See comment on the
      // declaration of filterPreds.
      model.filterRelations(filterPred);

      if (JAM.Opts.debug)
        FileUtil.serializeToFile(model.getRelationAutomaton(), "raut-" + iteration + ".aut");

      cex = findCounterExample(model);

      // If no counter-example was found, see if we need to continue.
      // See comment on filterPreds above.
      if (cex == null) {

        // If one of these conditions is met, we can stop now.
        if (policyPath.getLength() == 1 || getChecks().size() == 0
            || filterPreds.size() == 0) {
          // The code is clean with regards to the current policy path.
          Dbg.out("No more counter-examples; " + getCheckCount() +
            " checks woven", 1);
          break;
        }

        // Keep going until filterPreds is empty.
        filterPred = filterPreds.poll();
        continue;
      }

      // If a counter-example was found, move on and try to disprove
      // it or rewrite the program to block it.

      // See if we need to stop checking counter-examples and learning
      // new predicates.
      if (validate && model.getLearnedPredicateCount() >= JAM.Opts.refinementLimit)
        validate = false;

      // Check the validity of the counter-example, if appropriate, and
      // refine the model.
      if (validate && shouldRefine(model, cex)) {
        Predicate newpred = learnNewPredicate(cex, model.getAllPredicates());

        if (newpred != null) {
          // Restart the analysis with the new predicate as part of the
          // program model, which hopefully rules out the spurious
          // counter-example.
          model.addLearnedPredicate(newpred);
          continue;
        }
      }

      // If this point is reached, we either have a truly violating
      // statement, or one that can't be ruled out.
      instrumentCounterExample(cex);

      // Possibly save the current source code to file.
      if (JAM.Opts.intermediateOutput || JAM.Opts.debug) {
        String srcout = FileUtil.getBaseName() + "-" + iteration + ".js";
        FileUtil.writeToFile(getSourceFile(), srcout);
      }
    }

  }

  @Override
  public void run() {
    Dbg.out("Analyzing policy path: " + policyPath, 1);

    // Load any new checks that may have been added by previous
    // analyses.
    updateChecks();

    // We only use one ProgramModel in this version of the
    // algorithm. The peek method leaves it in the queue.
    ProgramModel model = models.peek();
    assert model != null;

    model.initLearnedPredicates(seeds.getSeedPredicates(policyPath));

    runSub(model);
  }

  protected Predicate learnNewPredicate(CounterExample cex, List<Predicate> oldPreds) {
    // Learn a predicate to try and rule out the invalid
    // counter-example.
    PredicateLearner pl = new JSPredicateLearner(parent, oldPreds);
    Predicate newpred = pl.learn(cex);

    if (newpred == null) {
      Dbg.out("Unable to learn new predicate", 2);
    }

    return newpred;
  }

  protected void instrumentCounterExample(CounterExample cex) {
    Dbg.out("Instrumenting", 3);
    // Retrieve the checks needed to block this counter-example.
    List<RuntimeCheck> newchecks = cex.getChecks();

    // Insert the checks into the source.
    for (RuntimeCheck rc : newchecks) addCheck(rc);

  }

  protected boolean shouldRefine(ProgramModel m, CounterExample cex) {
    if (cex == null) return false;

    // See if we need to stop checking counter-examples and learning
    // new predicates due to the refinement limit.
    // %%% Use thread-specific learned predicates.
    boolean validate = true;
    if (m.getLearnedPredicateCount() >= JAM.Opts.refinementLimit)
      validate = false;

    if (validate) {
      // Check the counter-example for validity.
      Dbg.out("Checking validity", 3);
      if (!cex.isValid()) {
        Dbg.out("Invalid", 2);
        return true;
      } else {
        Dbg.out("Valid", 2);
      }
    } else {
      Dbg.out("Predicate limit reached", 3);
    }

    return false;
  }

  protected synchronized void initOpenNWA() {
    if (openNWA != null) return;

    if (JAM.Opts.linkNWA) {
      openNWA = new OpenNWALibrary();
    } else {
      openNWA = new OpenNWAProcess();
    }
  }

  // Search for a counter-example in the automaton intersection after
  // the edges have been loaded.
  protected CounterExample findCounterExample(ProgramModel model) {
    //PolicyControlProduct paut = model.getProductAutomaton();
    RelationAutomaton raut = model.getRelationAutomaton();

    initOpenNWA();

    CounterExample cex = openNWA.findCounterExample(this, raut);

    // Keep a tally of the number of counter-examples found.
    if (cex != null) {
      parent.addCounterExample(cex);
    }

    // A null return value indicates that there are no counter-examples
    // through the given program model.
    return cex;
  }

  // Get the next husk of a model from the queue.
  protected synchronized ProgramModel getModel() {
    ProgramModel model = null;
    while (model == null) {
      try {
        model = models.take();
      } catch (InterruptedException ex) { }
    }
    return model;
  }

  public int getIteration() {
    return iteration;
  }
}
