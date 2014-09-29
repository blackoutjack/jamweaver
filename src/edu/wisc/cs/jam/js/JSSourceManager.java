package edu.wisc.cs.jam.js;

import com.google.javascript.jscomp.CallGraph;
import com.google.javascript.jscomp.Compiler;
import com.google.javascript.jscomp.CompilerOptions;
import com.google.javascript.jscomp.CompilerOptions.LanguageMode;
import com.google.javascript.jscomp.CompilerOptions.Reach;
import com.google.javascript.jscomp.DependencyOptions;
import com.google.javascript.jscomp.AnonymousFunctionNamingPolicy;
import com.google.javascript.jscomp.VariableRenamingPolicy;
import com.google.javascript.jscomp.NodeTraversal;
import com.google.javascript.jscomp.NodeTraversal.Callback;
import com.google.javascript.jscomp.CompilerInput;
import com.google.javascript.jscomp.Result;
import com.google.javascript.jscomp.JSError;
import com.google.javascript.jscomp.SymbolTable;
import com.google.javascript.jscomp.PassConfig;
import com.google.javascript.jscomp.DefaultPassConfig;
import com.google.javascript.jscomp.CheckLevel;
import com.google.javascript.jscomp.SourceFile;
import com.google.javascript.jscomp.JSModule;
import com.google.javascript.rhino.Node;

import com.google.common.collect.HashMultimap;
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
import java.util.Set;
import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.io.InputStream;
import java.io.FileInputStream;
import java.io.File;

import com.google.javascript.jscomp.JAMPassConfig;
import com.google.javascript.jscomp.ClosureUtil;

import edu.wisc.cs.jam.Source;
import edu.wisc.cs.jam.JAM;
import edu.wisc.cs.jam.Transform;
import edu.wisc.cs.jam.ControlAutomaton;
import edu.wisc.cs.jam.CheckManager;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.Dbg;

public class JSSourceManager implements edu.wisc.cs.jam.SourceManager {

  protected List<JSSource> sourceFiles;
  protected Compiler compiler;
  protected CallGraph callGraph;
  protected TypeFacts typeFacts;
  protected List<SourceFile> externList;
  protected Set<String> temporaries;

  protected boolean needsCallGraphUpdate;

  public JSSourceManager() {
    sourceFiles = new ArrayList<JSSource>();
    boolean useExterns = !JAM.Opts.noExterns;
    needsCallGraphUpdate = true;
    try {
      if (useExterns) {
        // Load the full complement of native functions.
        externList = getDefaultExterns();
      } else {
        // Disable loading of natives for testing/profiling purposes.
        externList = new ArrayList<SourceFile>();
      }
      //SourceFile externFile = SourceFile.fromFile(JAMConfig.EXTERN_FILE);
      //externList.add(externFile);
    } catch (IOException ex) {
      System.err.println("Error loading externs: " + ex.getMessage());
    }
  }

  @Override
  public void saveSources(String dirsuffix) {
    for (JSSource src : sourceFiles) {
      File dir = FileUtil.getSourceDir(dirsuffix);
      String relpath = src.getRelativePath();
      if (relpath == null) {
        relpath = src.getName();
      }
      File destfile = new File(dir, relpath);
      String contents = src.getContents();

      if (src.isWrapped()) {
        // Remove the wrapper for event handlers.
        Node n = nodeFromCode(contents);
        if (n.isFunction()) {
          n = n.getLastChild();
          assert n.isBlock();
          contents = codeFromNode(n);
        } else {
          Dbg.warn("Non-function wrapper for wrapped code: " + n);
        }
      }

      FileUtil.writeToFile(contents, destfile, false, false);
    }
  }

  @Override
  public void addSource(Source src) {
    if (!(src instanceof JSSource)) {
      Dbg.err("Incompatible source file: " + src.getPath());
      return;
    }
    sourceFiles.add((JSSource)src);
  }

  // Get the compiler if it needs to be used directly.
  @Override
  public Compiler getCompiler() {
    if (compiler == null) {
      boolean success = runPass(null, null, JAM.Opts.debug, false);
      if (!success) {
        // No recovery possible.
        Dbg.fatal("Unable to initialize compiler.");
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

  protected static List<SourceFile> getDefaultExterns() throws IOException {
    InputStream input = new FileInputStream(new File(FileUtil.BIN_DIR, "externs.zip"));
    assert input != null;

    ZipInputStream zip = new ZipInputStream(input);
    Map<String,SourceFile> externsMap = Maps.newHashMap();
    for (ZipEntry entry = null; (entry = zip.getNextEntry()) != null; ) {
      BufferedInputStream entryStream = new BufferedInputStream(
          ByteStreams.limit(zip, entry.getSize()));
      externsMap.put(entry.getName(),
          SourceFile.fromInputStream(
              // Give the files an odd prefix, so that they do not conflict
              // with the user's files.
              "externs.zip//" + entry.getName(),
              entryStream));
      //System.err.println("extern: " + entry.getName());
    }

    // Order matters, so the resources must be added to the result list
    // in the expected order.
    List<SourceFile> externs = Lists.newArrayList();
    for (String key : DEFAULT_EXTERNS_NAMES) {
      SourceFile exfile = externsMap.get(key);
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
  protected synchronized boolean runPass(CompilerOptions opts, PassConfig cfg, boolean debug, boolean revert) {
    // Load the boilerplate options if none are provided.
    if (opts == null) opts = initCompilerOptions();
    // Custom PassConfig prevents reversion of variable renaming.
    if (cfg == null) cfg = new JAMPassConfig(opts, revert);

    // A new compiler must be initialized with each pass.
    initCompiler(cfg, debug);

    // Compiling JSModules instead of SourceFiles means that declared
    // functions and variables are not all lifted to the top.
    List<JSModule> modules = new ArrayList<JSModule>();
    //List<SourceFile> sources = new ArrayList<SourceFile>();
    JSModule prevmod = null;
    for (JSSource src : sourceFiles) {
      JSModule mod = new JSModule(src.getPath());
      mod.add(src.getClosureSourceFile());

      // Conservatively add the previous module as a dependency.
      if (prevmod != null) {
        mod.addDependency(prevmod);
      }
      prevmod = mod;

      modules.add(mod);
      //sources.add(src.getClosureSourceFile());
    }

    //Result r = compiler.compile(externList, sources, opts);
    Result r = compiler.compileModules(externList, modules, opts);
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

  protected void update() {
    // %%% Need to generalize for multiple files.
    reportCodeChange();

    // For each user script root node, find the script.
    Node root = getRootNode();
    for (int i=0; i<root.getChildCount(); i++) {
      Node rootnode = root.getChildAtIndex(i);
      String rootpath = rootnode.getSourceFileName();
      if (rootpath == null) {
        Dbg.warn("No path for node: " + rootnode + " / " + codeFromNode(rootnode));
        continue;
      }
      JSSource src = null;
      for (JSSource maybesrc : sourceFiles) {
        String maybepath = maybesrc.getPath();
        if (maybepath.equals(rootpath)) {
          src = maybesrc;
          break;
        }
      }
      assert src != null : "Unable to identify source file for path: " + rootpath;
      String code = codeFromNode(rootnode);
      src.updateContents(code);
    }
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
    CompilerInput input = new CompilerInput(SourceFile.fromCode("synthetic", code));

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
      // The compiler's root consists of the externs first and the user
      // scripts second. We want the user scripts only.
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

    if (JAM.Opts.countNodes) {
      int nodeCount = getNodeCount();
      // This will cause a call to |runPass| to get a compiler.
      FileUtil.writeToMain(FileUtil.getBaseName() + ".original.js:" + nodeCount + "\n", JAMConfig.INFO_FILENAME, true);
      Dbg.out("Normalizing source: " + nodeCount + " nodes", 2);
    } else {
      Dbg.out("Normalizing source", 2);
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

    runPass(options, null, JAM.Opts.debug, false);
    update();

    // Output the Closure-processed source.
    saveSources("closure");

    // Add flattener to the passes.
    JSStatementTransform expandpass = new JSStatementTransform();
    expandpass.run(this);
    temporaries = expandpass.getCollapsableTemporaries();
    update();

    // Output the normalized source.
    saveSources("normalized");

    if (JAM.Opts.countNodes) {
      int nodeCount = getNodeCount();
      FileUtil.writeToMain(FileUtil.getBaseName() + ".normalized.js:" + nodeCount + "\n", JAMConfig.INFO_FILENAME, true);
      Dbg.out("Done normalizing: " + getNodeCount() + " nodes", 2);
    } else {
      Dbg.out("Done normalizing", 2);
    }

    /*
    if (JAM.Opts.transformEval) {
      Transform evalpass = new JSEvalTransform();
      evalpass.run(this);
      update();
    }
    */

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

  @Override
  public boolean propagateType(String srcName, String destName) {
    Dbg.dbg("Propagating " + srcName + " -> " + destName);
    return typeFacts.propagateType(srcName, destName);
  }

  @Override
  public void setType(String name, String typ) {
    Dbg.dbg("Setting type " + name + " -> " + typ);
    typeFacts.setType(name, typ);
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
    Dbg.out("Inferring types", 2);

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
    boolean success = runPass(options, null, false, true);
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

    typeFacts = new TypeFacts(symbols);

    Dbg.out("Done inferring types", 2);

    return typeFacts;
  } // end inferTypes

  // Optimize code via Closure. Should only be called at the end of the
  // analysis since it will foul up various assumptions that JAM needs.
  @Override
  public void postprocess(ControlAutomaton c, CheckManager cm) {
   
    // Perform the transformation to isolate higher-order scripts. 
    // %%% Remove the need for ControlAutomaton.
    Transform it = new JSIndirectionTransform(c, cm);
    it.run(this);

    if (temporaries != null) {
      Transform collapse = new JSCollapseTransform(temporaries);
      collapse.run(this);
    }
    update();
  }
  
  @Override
  public void finalize() {
    if (!JAM.Opts.noOptimize) {
      // Output optimized code.
      optimize();
      saveSources("optimized");
    }
    close();
  }
  
  protected void optimize() {
    Dbg.out("Optimizing source", 2);

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
    boolean success = runPass(options, cfg, JAM.Opts.debug, true);
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
    StringBuilder sb = new StringBuilder();
    for (JSSource src : sourceFiles) {
      sb.append("// ");
      sb.append(src.getName());
      sb.append("\n");
      String contents = src.getContents();
      sb.append(contents);
      sb.append("\n");
    }
    //String ret = getCompiler().toSource();
    //return ret;
    return sb.toString();
  }

  /* Print the contents of this source file as an AST.
  public String toStringTree() {
    // %%% See closure/src/com/google/javascript/jscomp/JsAst.java 
  }
  */

}
