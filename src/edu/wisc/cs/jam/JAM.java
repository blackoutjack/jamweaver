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
  private Language language;

  // Input to the algorithm
  private SourceFile sourceFile;
  private Policy policy;
  private SeedPredicates seedPredicates;

  // Internal constructions used by the algorithm
  private ControlAutomaton caut;
  private CheckManager cm;

  // Track the number of counter-examples found.
  private int counterExampleCount = 0;


  // Public getters

  public SourceFile getSourceFile() {
    return sourceFile;
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
    if (Opts.debug)
      FileUtil.writeToFile(cex, "cex-" + counterExampleCount);
  }

  public int getCheckCount() {
    return cm.getCheckCount();
  }

  public List<RuntimeCheck> getChecks() {
    return cm.getChecks();
  }

  // Insert a check into the source file being analyzed.
  public void addCheck(RuntimeCheck c) {
    cm.addCheck(c);
  }

  public void removeCheck(RuntimeCheck c) {
    cm.removeCheck(c);
  }

  // Load the policy as a list of policy paths.
  public void initPolicy() {
    Dbg.out("Initializing policy", 3);
    
    PolicyLanguage lang = language.policyLanguage();
    policy = new Policy(this, lang, Opts.policyFiles);

    if (Opts.debug)
      FileUtil.writeToMain(policy, "policy.aut");

    if (Opts.countNodes)
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
    ExecutorService pool = Executors.newFixedThreadPool(Opts.pathThreads);

    List<Future<?>> results = new ArrayList<Future<?>>();
    for (int i=0; i<policy.size(); i++) {
      // Choose the current policy.
      PolicyPath path = policy.getPath(i);
      JAMAnalysis ja = null;
      if (Opts.forward) {
        ja = new JAMAnalysis(this, path);
      } else if (false && Opts.lazy) {
        // %%%
        //ja = new LazyAnalysis(this, path);
      } else if (false && Opts.cexThreads > 1) {
        // %%%
        //ja = new MultiAnalysis(this, path);
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
      if (Opts.forward) {
        ja = new JAMAnalysis(this, path);
      } else if (Opts.lazy) {
        ja = new IncrementalAnalysis(this, path);
      } else if (false && Opts.cexThreads > 1) {
        // %%%
        //ja = new MultiAnalysis(this, path);
      } else {
        ja = new BackwardAnalysis(this, path);
      }
      // Run the algorithm loop.
      ja.run();
    }
  }

  // Initial load and one-time processing of source.
  protected void preanalyze() {
    // Check for file existence.
    if (!FileUtil.isAccessible(Opts.sourceFile)) {
      Dbg.err("Input source is not accessible: " + Opts.sourceFile);
      System.exit(0);
    }
    if (Opts.policyFiles != null) {
      for (String polFile : Opts.policyFiles) {
        if (!FileUtil.isAccessible(polFile)) {
          Dbg.err("Input policy file is not accessible: " + polFile);
          System.exit(0);
        }
      }
    }

    sourceFile = language.newSourceFile(Opts.sourceFile);
    // %%% Check for errors in JSFile constructor. 

    // Initialize the FileUtil module to facilitate gathering
    // all intermediate/debugging output in a single location.
    FileUtil.init(sourceFile);

    FileUtil.copyFileToMain(Opts.sourceFile, FileUtil.getBaseName() + "-original.js" );

    // Break complex statements into simpler but semantically equal
    // constituents.
    if (!Opts.skipPreprocess) sourceFile.preprocess();

    // Create the Semantics object.
    language.newSemantics(sourceFile);

    // Load the policy paths from the given arguments.
    initPolicy();

    // Load the control structure for the program once here.
    cm = language.newCheckManager(sourceFile, policy);
    caut = language.newControlAutomaton(sourceFile, cm);
    if (Opts.debug) FileUtil.writeToMain(caut, "control.aut");

    // %%% The objects being initialized here are in a tangled mess of
    // %%% dependencies.
    language.semantics().load();

    // Optionally check that all statements can be parsed and
    // symbolically evaluated. This is just for debugging purposes.
    if (Opts.testParse) testEvaluation();

    // Load any seed predicates given as a command line option. If no
    // file is given, the SeedPredicates object won't return anything.
    seedPredicates = new SeedPredicates(Opts.seedFile, this);
  }

  protected void outputPolicyCode() {
    // Create a policy without transformed call predicates and with
    // only the comprehensive introspector(s) to use with modular
    // transactions.
    Exp modpol = getCheckManager().getModularPolicyCode();
    if (modpol != null) {
      FileUtil.writeToMain(modpol.toCode(), "modular.policy.js");
      if (Opts.countNodes)
        FileUtil.writeToMain("modular.policy.js:" + modpol.getTreeSize() + "\n", JAMConfig.INFO_FILENAME, true);
    }

    if (!JAM.Opts.noTransform) {
      // Generate a policy to be used for the untransformed code.
      Exp instrpol = getCheckManager().getUntransformedPolicyCode();
      if (instrpol != null) {
        FileUtil.writeToMain(instrpol.toCode(), "instrumented.policy.js");
        if (JAM.Opts.countNodes)
          FileUtil.writeToMain("instrumented.policy.js:" + instrpol.getTreeSize() + "\n", JAMConfig.INFO_FILENAME, true);
      }
    }

    Exp polsrc = getCheckManager().getPolicyCode();
    if (polsrc != null) {
      FileUtil.writeToMain(polsrc.toCode(), "policy.js");
      if (Opts.countNodes)
        FileUtil.writeToMain("policy.js:" + polsrc.getTreeSize() + "\n", JAMConfig.INFO_FILENAME, true);
    }
  }

  protected void postanalyze() {

    outputPolicyCode();

    if (Opts.countNodes) {
      if (cm instanceof TxManager) {
        FileUtil.writeToMain("transactions:" + ((TxManager)cm).getTransactionCount() + "\n", JAMConfig.INFO_FILENAME, true);
      }
      FileUtil.writeToMain("checks:" + cm.getCheckCount() + "\n", JAMConfig.INFO_FILENAME, true);
    }

    sourceFile.postprocess(getControlAutomaton(), getCheckManager());

    if (!Opts.noOut) System.out.println(sourceFile);

    sourceFile.finalize();
  }

  public JAM(Language l) {
    language = l;
  }

  public static void main(String[] args) {
    loadOptions(args);

    // Generate a new JAM instance based on the options given.
    Language lang = new JavaScript();
    JAM jam = new JAM(lang);

    jam.preanalyze();

    if (!Opts.skipAnalysis) {
      // Apply all policies to the input program.
      if (Opts.pathThreads > 1) {
        jam.runMulti();
      } else {
        jam.run();
      }
      // Output the instrumented source.
      FileUtil.writeToMain(jam.getSourceFile(), FileUtil.getBaseName() + "-instrumented.js");
      Dbg.out("Summary: " + jam.getCounterExampleCount() + " counterexamples found; "
        + jam.getCheckCount() + " runtime checks inserted", 1);
    }

    jam.postanalyze();
  }

  protected static void loadOptions(String[] args) {
    //try { System.in.read(); } catch (IOException ex) {}

    // Process the command line args.
    OptionParser parser = new OptionParser(new Opts());
    parser.parseArgument(args);

    // Adjust options as necessary.
    if (Opts.refinementLimit == -1)
      Opts.refinementLimit = Integer.MAX_VALUE;
    if (Opts.debug)
      Opts.debugQueries = true;
  }

  public static class Opts extends Options {

    @Argument(required=true, index=0, usage="source file", metaVar="SRCFILE")
    public static String sourceFile;

    @Argument(required=false, index=1, usage="policy file(s)", metaVar="POLFILE+", multiValued=true)
    public static List<String> policyFiles;

    @Option(name="-p", usage="Maximum number of learned predicates (-1 = unlimited)", metaVar="MAX")
    public static int refinementLimit = 0;

    @Option(name="-b", usage="Report statements the language model can't evaluate")
    public static boolean testParse = false;

    @Option(name="-f", usage="Do ancillary analysis, but no instrumentation")
    public static boolean skipAnalysis = false;

    @Option(name="-l", usage="Analyze incrementally over seeded cubes")
    public static boolean lazy = false;

    @Option(name="-s", usage="Skip the preprocessing step")
    public static boolean skipPreprocess = false;

    @Option(name="-g", usage="Output debugging information")
    public static boolean debug = false;

    @Option(name="-G", usage="Log semantic queries (subsumed by -g)")
    public static boolean debugQueries = false;

    @Option(name="-x", usage="Don't load standard externs")
    public static boolean noExterns = false;
    
    @Option(name="-i", usage="Access OpenNWA as a library instead of a separate process")
    public static boolean linkNWA = false;

    @Option(name="-m", usage="Stand-alone mode: assume functions will not be called from outside this program")
    public static boolean standAloneMode = false;

    @Option(name="-O", usage="Skip final optimization of instrumented code")
    public static boolean noOptimize = false;

    @Option(name="-y", usage="Skip type inference")
    public static boolean skipTypeInference = false;

    @Option(name="-S", usage="Output intermediate source with each new counter-example")
    public static boolean intermediateOutput = false;

    @Option(name="-v", usage="Amount of information output to STDERR (0-4,default:1)")
    public static int verbosity = 1;
    
    @Option(name="-n", usage="Don't output final source to STDOUT")
    public static boolean noOut = false;
    
    @Option(name="-R", usage="Number of threads to spawn for path analyses", metaVar="THREADS")
    public static int pathThreads = 1;
    
    @Option(name="-t", usage="Number of threads to spawn for semantic queries", metaVar="THREADS")
    public static int queryThreads = 3;
    
    @Option(name="-T", usage="Number of threads to spawn for finding counter-examples", metaVar="THREADS")
    public static int cexThreads = 1;

    @Option(name="-d", usage="Build the program model with predicates found in this file", metaVar="FILE")
    public static String seedFile;

    @Option(name="-r", usage="Output .dot files for BDDs")
    public static boolean printDot = false;
  
    @Option(name="-M", usage="Output memory usage information")
    public static boolean debugMemory = false;

    @Option(name="-c", usage="Use the Cartesian abstraction")
    public static boolean cartesian = false;

    @Option(name="-j", usage="Use the Disjoint abstraction")
    public static boolean disjoint = false;

    @Option(name="-e", usage="Suppress time output to stderr and in queries")
    public static boolean suppressTime = false;

    @Option(name="-k", usage="Maximum predicate cube size", metaVar="PREDICATES")
    public static int maxCubeSize = -1;

    @Option(name="-P", usage="Do intraprocedural analysis only")
    public static boolean intraprocedural = false;

    @Option(name="-I", usage="Skip the call-site transformation")
    public static boolean noTransform = false;

    @Option(name="--bddformat", usage="0=sat paths, 1=tree, 2=both (debug)", metaVar="FMTID")
    public static int bddformat = 1;

    @Option(name="--retids", usage="Embed return symbol ids in automata (can be expensive)")
    public static boolean embedReturnIds = false;

    @Option(name="-C", usage="Output node count for various artifacts")
    public static boolean countNodes = false;

    @Option(name="-F", usage="Forward analysis: add and analyze checks one-by-one")
    public static boolean forward = false;

    @Option(name="-L", usage="Only seed predicates locally")
    public static boolean seedLocal = false;

    @Option(name="-U", usage="Make no assumptions about the initial environment")
    public static boolean unconstrainedEnvironment = false;

    @Option(name="--appsuffix", usage="Append this suffix to the application name in output files")
    public static String appSuffix;

    @Option(name="--noindirect", usage="Use direct introspection rather than indirection")
    public static boolean noIndirect = false;

    @Option(name="--querytimeout", usage="Timeout (s) for semantics queries", metaVar="SECONDS")
    public static int queryTimeout = 120;

  }

}
