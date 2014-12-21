package edu.wisc.cs.jam;

import org.kohsuke.args4j.Option;

public class JAMOpts extends Options {

  // Args4J removed support for multiValued Options in later versions,
  // so multiple policies must be passed in a comma-separated list.
  @Option(name="-Y", usage="policy file(s)", metaVar="POLFILE1[,POLFILE2...]")
  public static String policyFiles;

  @Option(name="-X", usage="Indicates that the given source files are lists (see doc/RUNNING for formatting)")
  public static boolean sourceIsList = false;

  @Option(name="-z", usage="Use only the conservative (but imprecise) syntax analysis")
  public static boolean syntaxOnly = false;

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

  @Option(name="--bddformat", usage="0=sat paths, 1=tree, 2=both (debug)", metaVar="FMTID")
  public static int bddformat = 1;

  @Option(name="--retids", usage="Embed return symbol ids in automata (can be expensive)")
  public static boolean embedReturnIds = false;

  @Option(name="-F", usage="Forward analysis: add and analyze checks one-by-one")
  public static boolean forward = false;

  @Option(name="-L", usage="Only seed predicates locally")
  public static boolean seedLocal = false;

  @Option(name="-U", usage="Make no assumptions about the initial environment")
  public static boolean unconstrainedEnvironment = false;

  @Option(name="-N", usage="JavaScript application name", metaVar="APPNAME")
  public static String appName;

  @Option(name="-h", usage="HTML file", metaVar="HTMLFILE")
  public static String htmlFile;

  @Option(name="--appsuffix", usage="Append this suffix to the application name in output files")
  public static String appSuffix;

  @Option(name="--noindirect", usage="Use direct introspection rather than indirection")
  public static boolean noIndirect = false;

  @Option(name="--querytimeout", usage="Timeout (s) for semantics queries", metaVar="SECONDS")
  public static int queryTimeout = 120;

}
