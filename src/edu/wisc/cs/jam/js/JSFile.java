package edu.wisc.cs.jam.js;

import com.google.javascript.jscomp.CommandLineRunner;
import com.google.javascript.jscomp.CallGraph;
import com.google.javascript.jscomp.Compiler;
import com.google.javascript.jscomp.CompilerPass;
import com.google.javascript.jscomp.CompilerOptions;
import com.google.javascript.jscomp.CompilerOptions.LanguageMode;
import com.google.javascript.jscomp.CompilerOptions.Reach;
import com.google.javascript.jscomp.DependencyOptions;
import com.google.javascript.jscomp.AnonymousFunctionNamingPolicy;
import com.google.javascript.jscomp.VariableRenamingPolicy;
import com.google.javascript.jscomp.CustomPassExecutionTime;
import com.google.javascript.jscomp.NodeTraversal;
import com.google.javascript.jscomp.NodeTraversal.Callback;
import com.google.javascript.jscomp.CompilerInput;
import com.google.javascript.jscomp.Result;
import com.google.javascript.jscomp.JSError;
import com.google.javascript.jscomp.SymbolTable;
import com.google.javascript.jscomp.PassConfig;
import com.google.javascript.jscomp.DefaultPassConfig;
import com.google.javascript.jscomp.CheckLevel;
import com.google.common.collect.HashMultimap;
import com.google.javascript.rhino.Node;

import com.google.javascript.jscomp.JAMPassConfig;
import com.google.javascript.jscomp.ClosureUtil;
import com.google.common.collect.Maps;
import com.google.common.collect.Sets;
import com.google.common.collect.Lists;
import com.google.common.io.ByteStreams;
import com.google.common.collect.ImmutableList;

import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;
import java.util.logging.Level;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.io.InputStream;
import java.io.FileInputStream;
import java.io.File;

import edu.wisc.cs.jam.SourceFile;
import edu.wisc.cs.jam.JAM;
import edu.wisc.cs.jam.Transform;
import edu.wisc.cs.jam.ControlAutomaton;
import edu.wisc.cs.jam.CheckManager;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.Dbg;

public class JSFile implements edu.wisc.cs.jam.SourceFile {

  protected com.google.javascript.jscomp.SourceFile originalSourceFile;
  protected com.google.javascript.jscomp.SourceFile sourceFile;
  protected Compiler compiler;
  protected CallGraph callGraph;
  protected TypeFacts typeFacts;
  protected List<com.google.javascript.jscomp.SourceFile> externList;

  protected boolean needsCallGraphUpdate;

  public JSFile(String filename) {
    boolean useExterns = !JAM.Opts.noExterns;
    needsCallGraphUpdate = true;
    sourceFile = com.google.javascript.jscomp.SourceFile.fromFile(filename);

    try {
      if (useExterns) {
        // Load the full complement of native functions.
        externList = getDefaultExterns();
      } else {
        // Disable loading of natives for testing/profiling purposes.
        externList = new ArrayList<com.google.javascript.jscomp.SourceFile>();
      }
      com.google.javascript.jscomp.SourceFile externFile = com.google.javascript.jscomp.SourceFile.fromFile(JAMConfig.EXTERN_FILE);
      externList.add(externFile);
    } catch (IOException ex) {
      System.err.println("Error loading externs: " + ex.getMessage());
    }
  }

  // Return the name of the original source file.
  @Override
  public String getFilename() {
    return sourceFile.getName();
  }

  // Get the compiler if it needs to be used directly.
  @Override
  public Compiler getCompiler() {
    if (compiler == null) {
      boolean success = runPass(null, null, JAM.Opts.debug);      
      if (!success) {
        // No recovery possible.
        Dbg.err("Unable to initialize compiler.");
        System.exit(1);
      }
    }
    return compiler;
  }

  @Override
  public void reportCodeChange() {
    getCompiler().reportCodeChange();
  }

  // Return the CallGraph.
  @Override
  public CallGraph getCallGraph() {
    if (needsCallGraphUpdate)
      generateCallGraph();
    assert callGraph != null;
    return callGraph;
  }

  // Create a new Closure compiler object with the provided options.
  protected void initCompiler(PassConfig cfg, boolean debug) {
    if (debug) {
      // Output warnings to System.err.
      compiler = new Compiler(new PrintStream(System.err));
      Compiler.setLoggingLevel(Level.WARNING);
    } else {
      // Suppress warnings.
      compiler = new Compiler();
      Compiler.setLoggingLevel(Level.OFF);
    }

    compiler.setPassConfig(cfg);
  }

  // The externs expected in externs.zip, in sorted order.
  private static final List<String> DEFAULT_EXTERNS_NAMES = ImmutableList.of(
    // JS externs
    "es3.js",
    "es5.js",

    // Event APIs
    "w3c_event.js",
    "w3c_event3.js",
    "gecko_event.js",
    "w3c_device_sensor_event.js",

    // DOM apis
    "w3c_dom1.js",
    "w3c_dom2.js",
    "w3c_dom3.js",
    "gecko_dom.js",

    // CSS apis
    "w3c_css.js",
    "gecko_css.js",

    // Top-level namespaces
    "google.js",

    "deprecated.js",
    "fileapi.js",
    "flash.js",
    "gecko_xml.js",
    "html5.js",
    "webstorage.js",
    "w3c_anim_timing.js",
    "w3c_elementtraversal.js",
    "w3c_geolocation.js",
    "w3c_indexeddb.js",
    "w3c_navigation_timing.js",
    "w3c_range.js",
    "w3c_selectors.js",
    "w3c_xml.js",
    "window.js",
    "webgl.js");

  protected static List<com.google.javascript.jscomp.SourceFile> getDefaultExterns() throws IOException {
    InputStream input = new FileInputStream(new File(FileUtil.BIN_DIR, "externs.zip"));
    assert input != null;

    ZipInputStream zip = new ZipInputStream(input);
    Map<String, com.google.javascript.jscomp.SourceFile> externsMap = Maps.newHashMap();
    for (ZipEntry entry = null; (entry = zip.getNextEntry()) != null; ) {
      BufferedInputStream entryStream = new BufferedInputStream(
          ByteStreams.limit(zip, entry.getSize()));
      externsMap.put(entry.getName(),
          com.google.javascript.jscomp.SourceFile.fromInputStream(
              // Give the files an odd prefix, so that they do not conflict
              // with the user's files.
              "externs.zip//" + entry.getName(),
              entryStream));
      //System.err.println("extern: " + entry.getName());
    }

    // Order matters, so the resources must be added to the result list
    // in the expected order.
    List<com.google.javascript.jscomp.SourceFile> externs = Lists.newArrayList();
    for (String key : DEFAULT_EXTERNS_NAMES) {
      com.google.javascript.jscomp.SourceFile exfile = externsMap.get(key);
      if (exfile == null) {
        Dbg.warn("Extern file not found: " + key);
      } else {
        externs.add(exfile);
      }
    }

    return externs;
  }

  // Create a vanilla CompilerOptions object.
  protected CompilerOptions initCompilerOptions() {
      CompilerOptions opts = new CompilerOptions();
      opts.customPasses = HashMultimap.create();
      opts.setSummaryDetailLevel(1);
      opts.prettyPrint = true;

      // MIT-LL's integrated demo script requires this setting since
      // it uses trailing commas in object literals.
      opts.setLanguageIn(LanguageMode.ECMASCRIPT5);
      opts.setGenerateExports(false);
      opts.setPreferLineBreakAtEndOfFile(false);
      opts.setTrustedStrings(true);

      /*
      DependencyOptions dopts = new DependencyOptions();
      dopts.setDependencyPruning(true);
      dopts.setMoocherDropping(true);
      opts.setDependencyOptions(dopts);
      */

      return opts;
  }

  /**
   * Run a compiler pass on this source file.
   * @param opts  Compiler options. Can be null for default options.
   * @param cfg  Pass configuration. Can be null for default config.
   * @param debug  Output debugging information.
   */
  protected synchronized boolean runPass(CompilerOptions opts, PassConfig cfg, boolean debug) {
    // Load the boilerplate options if none are provided.
    if (opts == null) opts = initCompilerOptions();
    // Custom PassConfig prevents reversion of variable renaming.
    if (cfg == null) cfg = new JAMPassConfig(opts);

    // A new compiler must be initialized with each pass.
    initCompiler(cfg, debug);

    List<com.google.javascript.jscomp.SourceFile> sources =
      new ArrayList<com.google.javascript.jscomp.SourceFile>();
    sources.add(sourceFile);

    Result r = compiler.compile(externList, sources, opts);
    if (!r.success) {
      Dbg.err("Closure compiler failed with errors:");
      for (JSError err : r.errors) {
        Dbg.err(err.toString());
      }
      return false;
    }
    //NodeUtil.dumpAST(getRootNode());
    //NodeUtil.dumpCallGraph(callGraph);
    needsCallGraphUpdate = true;
    return true;
  }

  @Override
  public void update() {
    reportCodeChange();
    sourceFile = com.google.javascript.jscomp.SourceFile.fromCode(getFilename(), toString());
  }

  @Override
  public String codeFromNode(Node n) {
    // The following checks became necessary after upgrading Closure to
    // a new version. There seems to be a strange bug that creates some
    // corrupted EXPR_RESULT nodes and null nodes.
    if (n == null) return "";
    if (NodeUtil.isExprResult(n) && n.getChildCount() == 0) return "";
     
    String ret = ClosureUtil.codeFromNode(n, getCompiler());
    ret = ret.trim();
    if (ret.endsWith(";")) ret = ret.substring(0, ret.length() - 1);

    return ret;
  }

  @Override
  public Node nodeFromCode(String code) {
    CompilerInput input = new CompilerInput(com.google.javascript.jscomp.SourceFile.fromCode("synthetic", code));

    Node script = input.getAstRoot(getCompiler());
    assert script != null : "Unable to parse node from code: " + code;

    Node body = script.getFirstChild();
    assert body != null : "Empty script returned when parsing code: " + code;

    // Unwrap from the SCRIPT tag.
    return body.detachFromParent();
  }

  @Override
  public Node getRootNode() {
    if (JAM.Opts.noExterns) {
      return getCompiler().getRoot();
    } else {
      // The compiler's root consists of the externs first and the script
      // second. We want the script only.
      return getCompiler().getRoot().getChildAtIndex(1);
    }
  }

  @Override
  public Node getExterns() {
    // The compiler's root consists of the externs first and the script
    // second. We want the script only.
    return getCompiler().getRoot().getFirstChild();
  }

  protected void generateCallGraph() {
    callGraph = new CallGraph(getCompiler());
    callGraph.process(getExterns(), getRootNode());
    needsCallGraphUpdate = false;
  }

  // Normalize/flatten code and remove anonymous functions.
  @Override
  public void preprocess() {
    Dbg.out("Preprocessing " + getFilename(), 2);

    if (JAM.Opts.countNodes) {
      // This will cause a call to |runPass| to get a compiler.
      FileUtil.writeToMain(FileUtil.getBaseName() + ".original.js:" + getNodeCount() + "\n", JAMConfig.INFO_FILENAME, true);
    }

    // Include optimizations to make it easy on the flattener and
    // subsequent analysis.
    CompilerOptions options = initCompilerOptions();

    // Optimizations/refactorings to perform.
    options.collapseAnonymousFunctions = true;
    options.setCollapseObjectLiterals(true);
    options.inlineConstantVars = true;
    options.inlineGetters = true;
    options.inlineLocalFunctions = true;
    options.moveFunctionDeclarations = true;
    options.optimizeParameters = true;
    options.optimizeReturns = true;
    options.optimizeCalls = true;
    options.removeUnusedLocalVars = true;
    options.removeDeadCode = true;
    //options.setCheckUnreachableCode(CheckLevel.WARNING);

    // Remove unused globals if in stand-alone mode.
    if (JAM.Opts.standAloneMode) {
      options.removeUnusedPrototypeProperties = true;
      options.removeUnusedVars = true;
    }
    // This option, when set to true, changes semantics.
    options.removeTryCatchFinally = false;

    // Identifier renaming specifications.
    options.anonymousFunctionNaming = AnonymousFunctionNamingPolicy.OFF;
    options.variableRenaming = VariableRenamingPolicy.OFF;
    // %%% This may be useful to prevent variable shadowing
    //options.generatePseudoNames = true;
    //options.renamePrefix = "g_";
    //options.disambiguateProperties = true;

    // Skip these optimizations.
    options.collapseVariableDeclarations = false;
    options.convertToDottedProperties = false;
    options.foldConstants = false;
    options.inlineFunctions = false;
    options.optimizeCalls = false;
    options.setRemoveAbstractMethods(false);
    options.setRemoveClosureAsserts(false);

    runPass(options, null, JAM.Opts.debug);
    update();
    FileUtil.writeToMain(this, FileUtil.getBaseName() + "-closure.js");

    // Add flattener to the passes.
    Transform flatpass = new JSStatementTransform();
    //Transform flatpass = new JSExpandTransform();
    //Transform flatpass = new JSPreTransform();
    flatpass.run(this);
    update();

    // Output the preprocessed source.
    FileUtil.writeToMain(toString(), FileUtil.getBaseName() + "-preprocessed.js");

    if (JAM.Opts.countNodes)
      FileUtil.writeToMain(FileUtil.getBaseName() + ".preprocessed.js:" + getNodeCount() + "\n", JAMConfig.INFO_FILENAME, true);

    /*
    if (JAM.Opts.transformEval) {
      Transform evalpass = new JSEvalTransform();
      evalpass.run(this);
      update();
    }
    */

    Dbg.out("Done preprocessing", 2);

    if (!JAM.Opts.skipTypeInference) {
      // Type inference must be done after the variable renaming that
      // occurs during preprocessing.
      inferTypes();
    }
  } // end preprocess

  @Override
  public String getType(String name) {
    if (typeFacts == null) return null;
    return typeFacts.getType(name);
  }

  protected class NodeCounter implements Callback {
    int count = 0;

    public boolean shouldTraverse(NodeTraversal t, Node n, Node parent) {
      return true; 
    }

    public void visit(NodeTraversal t, Node n, Node parent) {
      ++count;
    }

    public int getCount() {
      return count;
    }
  }

  public int getNodeCount() {
    NodeCounter counter = new NodeCounter();
    NodeTraversal.traverse(getCompiler(), getRootNode(), counter);
    return counter.getCount();
  }

  protected TypeFacts inferTypes() {
    Dbg.out("Inferring types " + getFilename(), 2);

    CompilerOptions options = initCompilerOptions();
    options.anonymousFunctionNaming = AnonymousFunctionNamingPolicy.OFF;
    options.variableRenaming = VariableRenamingPolicy.OFF;

    //options.setNameReferenceReportPath("/tmp/nr-report.txt");
    //options.setNameReferenceGraphPath("/tmp/nr-graph.txt");


    // Set the type inference options.
    options.setInferTypes(true);
    // The |tightenTypes| option results in a crash when iterating
    // over the standard externs. |checkTypes| is only needed to enable
    // |tightenTypes|.
    // %%% Maybe retest and enable in the future for more precision.
    //options.setCheckTypes(true);
    //options.setTightenTypes(true);

    options.setUnaliasableGlobals(JAMConfig.TRANSACTION_LIBRARY);

    // Suppress debug information because it's overly verbose.
    boolean success = runPass(options, null, false);
    if (!success) {
      Dbg.err("Type inference pass failed.");
    }
    
    update();

    SymbolTable symbols = compiler.buildKnownSymbolTable();

    /*
    System.err.println(symbols.toDebugString());
    for (SymbolTable.Symbol sym : symbols.getAllSymbols()) {
      for (SymbolTable.Reference ref : symbols.getReferences(sym)) {
        System.err.println(ref.getNode());
      }
    }
    */

    typeFacts = new TypeFacts(this, symbols);

    Dbg.out("Done inferring types", 2);

    return typeFacts;
  } // end inferTypes

  // Optimize code via Closure. Should only be called at the end of the
  // analysis since it will foul up various assumptions that JAM needs.
  @Override
  public void postprocess(ControlAutomaton c, CheckManager cm) {
   
    if (!JAM.Opts.noTransform) {
      // Perform the transformation to isolate callsites. 
      // %%% Remove the need for ControlAutomaton.
      Transform ct = new JSCallTransform(c, cm);
      ct.run(this);

      Transform pt = new JSPropertyTransform();
      pt.run(this);
    }
  }
  
  @Override
  public void finalize() {
    if (!JAM.Opts.noOptimize) {
      // Output optimized code.
      optimize();
      FileUtil.writeToMain(this, FileUtil.getBaseName() + "-optimized.js");
    }
    close();
  }
  
  protected void optimize() {
    Dbg.out("Optimizing " + getFilename(), 2);

    CompilerOptions options = initCompilerOptions();
    options.prettyPrint = false;

    // Optimizations/refactorings to perform.
    options.foldConstants = true;
    options.removeDeadCode = true;
    options.deadAssignmentElimination = true;
    options.setInlineProperties(true);
    options.coalesceVariableNames = true;
    options.inlineGetters = true;
    options.inlineLocalFunctions = true;
    options.removeUnusedLocalVars = true;
    options.collapseVariableDeclarations = true;
    options.collapseAnonymousFunctions = true;
    options.convertToDottedProperties = true;
    options.removeUnusedLocalVars = true;
    options.rewriteFunctionExpressions = true;
    options.optimizeParameters = true;
    options.optimizeReturns = true;
    options.optimizeCalls = true;
    options.optimizeArgumentsArray = true;
    options.setChainCalls(true);

    if (JAM.Opts.standAloneMode) {
      // Remove unused globals if in stand-alone mode.
      options.smartNameRemoval = true;
      options.removeUnusedPrototypeProperties = true;
      options.removeUnusedClassProperties = true;
      options.removeUnusedVars = true;
      // Remove unreachable functions.
      options.inlineFunctions = true;
    }

    // The following two options cause assignments to be optimized
    // out from within transaction blocks, which breaks semantics.
    // %%% Should be able to modify InlineVariables.java to treat
    // %%% TRANSACTION blocks like IF blocks to fix this.
    //options.setInlineVariables(Reach.ALL);
    //options.inlineConstantVars = true;

    // This option causes a crash when there is a VAR declaration inside
    // a FOR-IN loop. This seems to be a bug in Closure, maybe that it
    // assumes all declarations have been lifted previously.
    //options.setGroupVariableDeclarations(true);

    options.setUnaliasableGlobals(JAMConfig.TRANSACTION_LIBRARY);

    PassConfig cfg = new DefaultPassConfig(options);
    boolean success = runPass(options, cfg, JAM.Opts.debug);
    if (!success) {
      Dbg.err("Optimization pass failed.");
    }

    update();

    // %%% This reverts the optimization.
    //if (JAM.Opts.countNodes)
    //  FileUtil.writeToMain(FileUtil.getBaseName() + ".optimized.js:" + getNodeCount() + "\n", JAMConfig.INFO_FILENAME, true);

    Dbg.out("Done optimizing", 2);
  } // end optimize

  protected void close() {
    // This is needed as of Closure revision 2112, to shutdown the
    // ExecutorService.
    // %%% Need a better way to do this, without modifying Closure.
    if (compiler != null) Compiler.close();
  }

  // Get the current source code of the file.
  public String toString() {
    String ret = getCompiler().toSource();
    return ret;
  }

  /* Print the contents of this source file as an AST.
  public String toStringTree() {
    // %%% See closure/src/com/google/javascript/jscomp/JsAst.java 
  }
  */

}
