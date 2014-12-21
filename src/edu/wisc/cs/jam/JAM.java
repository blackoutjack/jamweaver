package edu.wisc.cs.jam;

import java.io.IOException;
import java.io.File;
import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.Date;

import org.kohsuke.args4j.Option;
import org.kohsuke.args4j.Argument;

import java.util.concurrent.Executors;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;
import java.util.concurrent.ExecutorService;

import edu.wisc.cs.jam.tx.TxManager;

import edu.wisc.cs.jam.js.JavaScript;

public class JAM {
  
  // Language-specific implementation
  protected Language language;

  // Input to the algorithm
  protected SourceManager sm;
  protected Policy policy;
  protected SeedPredicates seedPredicates;

  // Internal constructions used by the algorithm
  protected ControlAutomaton caut;
  protected CheckManager cm;

  // Name of the application being analyzed.
  protected String applicationName;

  // Track the number of counter-examples found.
  protected int counterExampleCount = 0;

  protected static List<String> policyFiles;

  // Field getters and setters

  protected void setSourceManager(SourceManager src) {
    sm = src;
  }

  public SourceManager getSourceManager() {
    return sm;
  }

  public CheckManager getCheckManager() {
    return cm;
  }

  public Policy getPolicy() {
    return policy;
  }

  public Semantics getSemantics() {
    return language.semantics();
  }

  public SeedPredicates getSeedPredicates() {
    return seedPredicates;
  }

  public ControlAutomaton getControlAutomaton() {
    return caut;
  }

  public int getCounterExampleCount() {
    return counterExampleCount;
  }

  public synchronized void addCounterExample(CounterExample cex) {
    counterExampleCount++;
    Dbg.out("Found counter-example " + counterExampleCount, 2);
    if (JAMOpts.debug)
      FileUtil.writeToFile(cex, "cex-" + counterExampleCount);
  }

  // Load the policy as a list of policy paths.
  public void initPolicy() {
    Dbg.out("Initializing policy", 3);
    
    PolicyLanguage lang = language.policyLanguage();
    policy = new Policy(this, lang, policyFiles);

    if (JAMOpts.debug)
      FileUtil.writeToMain(policy, "policy.aut");

    FileUtil.writeToMain("policy.aut:" + policy.getAstSize() + "\n", JAMConfig.INFO_FILENAME, true);

    Dbg.out("Policy initialized; " + policy.size() + " paths", 2);
  }

  // Evaluate each program statement on its own (i.e. without regard to
  // any pre- or post-state). This can help to weed out bugs in the
  // semantics.
  protected void testEvaluation() {
    EvaluationAutomaton eval = new EvaluationAutomaton(this);
    eval.testEvaluation();
  }

  protected void runMulti() {
    ExecutorService pool = Executors.newFixedThreadPool(JAMOpts.pathThreads);

    List<Future<?>> results = new ArrayList<Future<?>>();
    for (int i=0; i<policy.size(); i++) {
      // Choose the current policy.
      PolicyPath path = policy.getPath(i);
      JAMAnalysis ja = null;
      if (JAMOpts.forward) {
        ja = new JAMAnalysis(this, path);
      //} else if (false && JAMOpts.lazy) {
      //  %%%
      //  ja = new LazyAnalysis(this, path);
      //} else if (false && JAMOpts.cexThreads > 1) {
      //  %%%
      //  ja = new MultiAnalysis(this, path);
      } else {
        // Backward analysis is now the default.
        ja = new BackwardAnalysis(this, path);
      }
      Future<?> result = pool.submit(ja);
      results.add(result);
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
  }

  // Apply all of the submitted policies, in order, to the program
  // source code.
  protected void run() {
    for (int i=0; i<policy.size(); i++) {
      // Choose the current policy.
      PolicyPath path = policy.getPath(i);

      // Determine which kind of analysis we're doing.
      JAMAnalysis ja = null;
      if (JAMOpts.forward) {
        ja = new JAMAnalysis(this, path);
      } else if (JAMOpts.lazy) {
        ja = new IncrementalAnalysis(this, path);
      //} else if (false && JAMOpts.cexThreads > 1) {
      //  %%%
      //  ja = new MultiAnalysis(this, path);
      } else {
        ja = new BackwardAnalysis(this, path);
      }
      // Run the algorithm loop.
      ja.run();
    }
  }

  // Check for file existence, and quit if a file is not found.
  protected static void ensureFilesExist(List<String> files) {
    if (files == null) return;
    for (String path : files) {
      if (!FileUtil.isAccessible(path)) {
        Dbg.fatal("Input file is not accessible: " + path);
      }
    }
  }

  protected void setApplicationName(String name) {
    applicationName = name;
  }

  public String getApplicationName() {
    return applicationName;
  }

  // Initial load and one-time processing of source.
  protected void preanalyze() {

    // Break complex statements into simpler but semantically equal
    // constituents.
    if (!JAMOpts.skipPreprocess) sm.preprocess();

    // Create the Semantics object.
    language.newSemantics(sm);

    // Load the policy paths from the given arguments.
    initPolicy();

    // Load the control structure for the program once here.
    cm = language.newCheckManager(sm, policy);
    caut = language.newControlAutomaton(sm, cm);
    if (JAMOpts.debug) FileUtil.writeToMain(caut, "control.aut");

    // %%% The objects being initialized here are in a tangled mess of
    // %%% dependencies.
    language.semantics().load();

    // Optionally check that all statements can be parsed and
    // symbolically evaluated. This is just for debugging purposes.
    if (JAMOpts.testParse) testEvaluation();

    // Load any seed predicates given as a command line option. If no
    // file is given, the SeedPredicates object won't return anything.
    seedPredicates = new SeedPredicates(JAMOpts.seedFile, this);
  }

  protected void outputPolicyCode() {
    // Create a policy with only the comprehensive introspector(s) to
    // use with modular transactions.
    Exp modpol = getCheckManager().getBasePolicyCode();
    if (modpol != null) {
      FileUtil.writeToMain(modpol.toCode(), "modular.policy.js");
      FileUtil.writeToMain("modular.policy.js:" + modpol.getTreeSize() + "\n", JAMConfig.INFO_FILENAME, true);
    }

    Exp polsrc = getCheckManager().getSpecializedPolicyCode();
    if (polsrc != null) {
      FileUtil.writeToMain(polsrc.toCode(), "policy.js");
      FileUtil.writeToMain("policy.js:" + polsrc.getTreeSize() + "\n", JAMConfig.INFO_FILENAME, true);
    }
  }

  protected String postanalyze() {

    outputPolicyCode();

    if (cm instanceof TxManager) {
      FileUtil.writeToMain("transactions:" + ((TxManager)cm).getTransactionCount() + "\n", JAMConfig.INFO_FILENAME, true);
    }
    FileUtil.writeToMain("checks:" + cm.getCheckCount() + "\n", JAMConfig.INFO_FILENAME, true);

    sm.postprocess(getCheckManager());

    String output = sm.toString();
    FileUtil.writeToMain(output, getApplicationName() + ".js");

    sm.finalize();

    return output;
  }

}
