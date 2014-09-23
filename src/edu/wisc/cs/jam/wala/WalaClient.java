package edu.wisc.cs.jam.wala;

import java.io.Reader;
import java.io.IOException;
import java.io.File;
import java.net.URL;
import java.util.Collections;
import java.util.Iterator;
import java.util.Map;
import java.util.HashMap;
import java.util.Set;
import java.util.List;
import java.util.ArrayList;

import org.kohsuke.args4j.Option;
import org.kohsuke.args4j.Argument;

import com.ibm.wala.cast.ipa.callgraph.CAstAnalysisScope;
import com.ibm.wala.cast.ipa.callgraph.StandardFunctionTargetSelector;

import com.ibm.wala.cast.js.client.JavaScriptAnalysisEngine;
import com.ibm.wala.cast.js.html.MappedSourceModule;
import com.ibm.wala.cast.js.html.WebPageLoaderFactory;
import com.ibm.wala.cast.js.html.WebUtil;
import com.ibm.wala.cast.js.ipa.callgraph.JSAnalysisOptions;
import com.ibm.wala.cast.js.ipa.callgraph.JSCFABuilder;
import com.ibm.wala.cast.js.ipa.callgraph.JavaScriptEntryPoints;
import com.ibm.wala.cast.js.ipa.callgraph.PropertyNameContextSelector;
import com.ibm.wala.cast.js.ipa.callgraph.correlations.extraction.CorrelatedPairExtractorFactory;
import com.ibm.wala.cast.js.ipa.callgraph.JSCallGraph;
import com.ibm.wala.cast.js.ipa.callgraph.JSZeroOrOneXCFABuilder;
import com.ibm.wala.cast.js.ipa.callgraph.JSSSAPropagationCallGraphBuilder;
import com.ibm.wala.cast.js.loader.JavaScriptLoader;
import com.ibm.wala.cast.js.loader.JavaScriptLoaderFactory;
import com.ibm.wala.cast.js.translator.CAstRhinoTranslatorFactory;
import com.ibm.wala.cast.js.translator.JavaScriptTranslatorFactory;
import com.ibm.wala.cast.js.types.JavaScriptTypes;
import com.ibm.wala.cast.js.util.CallGraph2JSON;

import com.ibm.wala.cast.tree.rewrite.CAstRewriterFactory;
import com.ibm.wala.cast.ir.ssa.AstIRFactory;
import com.ibm.wala.cast.ir.translator.TranslatorToCAst.Error;
import com.ibm.wala.cast.loader.CAstAbstractLoader;

import com.ibm.wala.classLoader.SourceFileModule;
import com.ibm.wala.classLoader.SourceURLModule;
import com.ibm.wala.classLoader.SourceModule;
import com.ibm.wala.classLoader.IMethod;

import com.ibm.wala.ipa.callgraph.AnalysisOptions;
import com.ibm.wala.ipa.callgraph.AnalysisScope;
import com.ibm.wala.ipa.callgraph.AnalysisCache;
import com.ibm.wala.ipa.callgraph.CallGraph;
import com.ibm.wala.ipa.callgraph.CGNode;
import com.ibm.wala.ipa.callgraph.Entrypoint;
import com.ibm.wala.ipa.callgraph.propagation.cfa.nCFABuilder;
import com.ibm.wala.ipa.callgraph.propagation.cfa.ZeroXInstanceKeys;
import com.ibm.wala.ipa.callgraph.propagation.PointerKey;
import com.ibm.wala.ipa.callgraph.propagation.PointerAnalysis;
import com.ibm.wala.ipa.callgraph.propagation.PropagationCallGraphBuilder;
import com.ibm.wala.ipa.cha.IClassHierarchy;
import com.ibm.wala.ipa.cha.ClassHierarchy;
import com.ibm.wala.ipa.cha.ClassHierarchyException;

import com.ibm.wala.ssa.IR;
import com.ibm.wala.ssa.IRFactory;

import com.ibm.wala.util.CancelException;
import com.ibm.wala.util.WalaException;
import com.ibm.wala.util.collections.HashSetFactory;
import com.ibm.wala.util.collections.Pair;

import edu.wisc.cs.jam.Options;
import edu.wisc.cs.jam.OptionParser;
import edu.wisc.cs.jam.Dbg;

public class WalaClient extends JavaScriptAnalysisEngine {

  private static final boolean USE1CFA = true;

  protected static String[] prologueFiles = {
    "preamble.js",
    "prologue.js"
  };
  protected static Map<String,SourceModule> prologueModules;
  static {
    prologueModules = new HashMap<String,SourceModule>();
    for (String pfile : prologueFiles) {
      final String pname = pfile;
      SourceModule mod = new SourceURLModule(WalaClient.class.getClassLoader().getResource(pfile)) {
        @Override
        public String getName() { return pname; }
      };
      prologueModules.put(pfile, mod);
    }
  }

  private File sourceFile;
  private boolean ishtml;
  private boolean isjs;
  private PointerAnalysis pa;

  public WalaClient() {
    sourceFile = new File(Opts.sourceFile);
    if (!sourceFile.exists()) {
      Dbg.fatal("Input file doesn't exist: " + Opts.sourceFile);
    }
    ishtml = Opts.isHTML;
    isjs = Opts.isJS;
    if (ishtml && isjs) {
      Dbg.fatal("Input file can't be both HTML and JS");
    }
    if (!(ishtml || isjs)) {
      String flname = sourceFile.getName();
      if (flname.endsWith(".js")) {
        isjs = true;
      } else if (flname.endsWith(".html")) {
        ishtml = true;
      } else {
        Dbg.fatal("Can't determine file type (use -j or -m option)");
      }
    }
    assert (ishtml ^ isjs);
  }

  public boolean isHTML() {
    return ishtml;
  }

  public boolean isJS() {
    return isjs;
  }

  /*
  protected void buildAnalysisEngine() {

    JavaScriptTranslatorFactory factory = new CAstRhinoTranslatorFactory();
    setTranslatorFactory(factory);

    // Set up the analysis scope and class hierarchy.
    setModuleFiles(new ArrayList<Module>({ ... });
    buildAnalysisScope();
    IClassHierarchy ch = buildClassHierarchy();

    // Assume we're doing a full-program analysis.
    setClosedWorld(true);

    // Create a script loader.
    JavaScriptLoader loader = new JavaScriptLoader(ch, factory);
    //loader.addBootstrapFile(filepath);

    // Get some key objects for this analysis.
    AnalysisScope as = getScope();
    AnalysisCache ac = makeDefaultCache();

    // Get an entry point builder.
    Iterable<Entrypoint> eps = makeDefaultEntrypoints(as, ch);

    // Create the analysis options object.
    AnalysisOptions ao = new AnalysisOptions(as, eps);

    // Add the actual file to be analysed.
    //engine.setModuleFiles(new ArrayList
  }
  */

  protected SourceModule convertHTMLToJS(URL url) {
    SourceModule ret = null;
    try {
      Pair<Set<MappedSourceModule>,File> parsed = WebUtil.extractScriptFromHTML(url, true);
      File jsfile = parsed.snd; 
      //Dbg.dbg("JSFILE: " + jsfile.getAbsolutePath());
      Set<MappedSourceModule> sms = parsed.fst;
      if (sms.size() < 1) {
        Dbg.err("Nothing returned from WebUtil.extractScriptFromHTML");
      } else if (sms.size() > 1) {
        Dbg.err("Unexpected result from WebUtil.extractScriptFromHTML: " + sms);
      } else {
        ret = (MappedSourceModule)sms.toArray()[0];
      }
    } catch (Error ex) {
      Dbg.warn("Error converting HTML to script: " + ex.getMessage());
    }
    return ret;
  }

  protected void loadHTMLCallGraph(URL url) throws IOException, CancelException, WalaException {
    CAstRewriterFactory preprocessor = false && !Opts.noExtract ? new CorrelatedPairExtractorFactory(translatorFactory, url) : null;
    JavaScriptLoaderFactory loaders = new WebPageLoaderFactory(translatorFactory, preprocessor);
    List<SourceModule> scripts = new ArrayList<SourceModule>();
    
    JavaScriptLoader.addBootstrapFile(WebUtil.preamble);
    scripts.add(prologueModules.get("prologue.js"));
    scripts.add(prologueModules.get("preamble.js"));

    SourceModule htmlscript = convertHTMLToJS(url);
    if (htmlscript != null) {
      scripts.add(htmlscript);
      if (Opts.outputJS) {
        printSourceModule(htmlscript);
      }
    }
        
    SourceModule[] scriptsArray = scripts.toArray(new SourceModule[scripts.size()]);

    AnalysisScope scope = new CAstAnalysisScope(scriptsArray, loaders, Collections.singleton(JavaScriptLoader.JS));
    IRFactory<IMethod> irFactory = AstIRFactory.makeDefaultFactory();

    JSSSAPropagationCallGraphBuilder b;
    //PropagationCallGraphBuilder b;
    try {
      IClassHierarchy cha = ClassHierarchy.make(scope, loaders, JavaScriptLoader.JS);
      com.ibm.wala.cast.js.util.Util.checkForFrontEndErrors(cha);
      Iterable<Entrypoint> roots = new JavaScriptEntryPoints(cha, cha.getLoader(JavaScriptTypes.jsLoader));

      JSAnalysisOptions jsao = new JSAnalysisOptions(scope, roots);
      com.ibm.wala.ipa.callgraph.impl.Util.addDefaultSelectors(jsao, cha);
      jsao.setSelector(new StandardFunctionTargetSelector(cha, jsao.getMethodTargetSelector()));

      jsao.setUseConstantSpecificKeys(true);
      jsao.setUseStacksForLexicalScoping(true);

      jsao.setHandleCallApply(!Opts.noHandleCallApply);
      AnalysisCache cache = new AnalysisCache(irFactory);
      //b = new nCFABuilder(3, cha, jsao, cache, null, null);
      b = new JSZeroOrOneXCFABuilder(cha, jsao, cache, null, null, ZeroXInstanceKeys.ALLOCATIONS, USE1CFA);
      if (!Opts.noExtract) {
        b.setContextSelector(new PropertyNameContextSelector(b.getAnalysisCache(), 2, b.getContextSelector()));
      }
      b.setBaseURL(url);
    } catch (ClassHierarchyException e) {
      Dbg.err("Internal error building class hierarchy: " + e.getMessage());
      return;
    }
    
    cg = b.makeCallGraph(b.getOptions());
    pa = b.getPointerAnalysis();
  }

  protected void loadScriptCallGraph(URL script) throws IOException, CancelException, WalaException {
    CAstRewriterFactory preprocessor = !Opts.noExtract ? new CorrelatedPairExtractorFactory(translatorFactory, script) : null;
    JavaScriptLoaderFactory loaders = new JavaScriptLoaderFactory(translatorFactory, preprocessor);

    SourceModule scriptsrc = script.getProtocol().equals("file") ? new SourceFileModule(sourceFile, sourceFile.getName(), null) : new SourceURLModule(script);

    SourceModule[] files = new SourceModule[] { scriptsrc, prologueModules.get("prologue.js") };
    AnalysisScope scope = new CAstAnalysisScope(files, loaders, Collections.singleton(JavaScriptLoader.JS));

    IRFactory<IMethod> irFactory = AstIRFactory.makeDefaultFactory();

    PropagationCallGraphBuilder b;
    try {
      IClassHierarchy cha = ClassHierarchy.make(scope, loaders, JavaScriptLoader.JS);
      com.ibm.wala.cast.js.util.Util.checkForFrontEndErrors(cha);
      Iterable<Entrypoint> roots = new JavaScriptEntryPoints(cha, cha.getLoader(JavaScriptTypes.jsLoader));

      JSAnalysisOptions jsao = new JSAnalysisOptions(scope, roots);
      com.ibm.wala.ipa.callgraph.impl.Util.addDefaultSelectors(jsao, cha);
      jsao.setSelector(new StandardFunctionTargetSelector(cha, jsao.getMethodTargetSelector()));

      jsao.setUseConstantSpecificKeys(true);
      jsao.setUseStacksForLexicalScoping(true);

      jsao.setHandleCallApply(!Opts.noHandleCallApply);
      AnalysisCache cache = new AnalysisCache(irFactory);
      b = new JSZeroOrOneXCFABuilder(cha, jsao, cache, null, null, ZeroXInstanceKeys.ALLOCATIONS, USE1CFA);
      if (!Opts.noExtract) {
        b.setContextSelector(new PropertyNameContextSelector(b.getAnalysisCache(), 2, b.getContextSelector()));
      }

    } catch (ClassHierarchyException e) {
      Dbg.err("Internal error building class hierarchy: " + e.getMessage());
      return;
    }

    cg = (JSCallGraph)b.makeCallGraph(b.getOptions());
    pa = b.getPointerAnalysis();
  }

  protected URL getURL(File file) {
    URL url = null;
    String path = sourceFile.getAbsolutePath();
    try {
      url = new URL("file://" + path);
    } catch (IOException ex) {
      Dbg.err("Unable to create URL for file: " + path);
      return null;
    }
    return url;
  }

  public void createJSCallGraph() {
    URL url = getURL(sourceFile);
    try {
      loadScriptCallGraph(url);
    } catch (WalaException ex) {
      Dbg.err("WalaException while constructing JavaScript call graph: " + ex.getMessage());
    } catch (CancelException ex) {
      Dbg.err("CancelException while constructing JavaScript call graph: " + ex.getMessage());
    } catch (IOException ex) {
      Dbg.err("IOException while constructing JavaScript call graph: " + ex.getMessage());
    }
  }

  public void createHTMLCallGraph() {
    URL url = getURL(sourceFile);
    try {
      loadHTMLCallGraph(url);
    } catch (WalaException ex) {
      Dbg.err("WalaException while constructing HTML call graph: " + ex.getMessage());
    } catch (CancelException ex) {
      Dbg.err("CancelException while constructing HTML call graph: " + ex.getMessage());
    } catch (IOException ex) {
      Dbg.err("IOException while constructing HTML call graph: " + ex.getMessage());
    }
  }

  public void dumpCallGraph() {

    StringBuilder sb = new StringBuilder();
    sb.append("Call graph:");
    if (cg != null) {
      for (Iterator x = cg.iterator(); x.hasNext();) {
        CGNode n = (CGNode)x.next();
        IMethod method = n.getMethod();
        sb.append("\nNode: ");
        sb.append(n.toString());
        sb.append("\nName: ");
        sb.append(method.getName().toString());
        sb.append("\nShort name: ");
        sb.append(getShortName(n));
        sb.append("\nCallers: [");
        boolean fst = true;
        for (Iterator<? extends CGNode> ns = cg.getSuccNodes(n); ns.hasNext();) {
          if (fst)
            fst = false;
          else
            sb.append(", ");
          sb.append(getShortName(ns.next()));
        }
        sb.append("]");
        sb.append("\nId: ");
        sb.append(n.getGraphNodeId());
        sb.append("\nContext: ");
        sb.append(n.getContext());
        IR ir = n.getIR();
        if (ir != null) {
          sb.append("\nIR: ");
          sb.append(ir);
        } else {
          sb.append("\nNo IR!");
        }
        sb.append("\n");
      }
    } else {
      sb.append("No call graph available");
    }

    if (pa != null) {
      sb.append("Pointer analysis:\n");
      for (Iterator x = pa.getPointerKeys().iterator(); x.hasNext();) {
        PointerKey n = (PointerKey)x.next();
        try {
          sb.append(n + " --> " + pa.getPointsToSet(n));
        } catch (Throwable e) {
          sb.append("Error computing points-to set for " + n);
        }
        sb.append("\n");
      }
    } else {
      sb.append("No pointer analysis available");
    }

    Dbg.out(sb.toString(), 1);
  }

  public String getShortName(CGNode nd) {
    IMethod method = nd.getMethod();
    String origName = method.getName().toString();
    String result = origName;
    if (origName.equals("do") || origName.equals("ctor")) {
      result = method.getDeclaringClass().getName().toString();
      result = result.substring(result.lastIndexOf('/') + 1);
      if (origName.equals("ctor")) {
        if (result.equals("LFunction")) {
          String s = method.toString();
          if (s.indexOf('(') != -1) {
            String functionName = s.substring(s.indexOf('(') + 1, s.indexOf(')'));
            functionName = functionName.substring(functionName.lastIndexOf('/') + 1);
            result += " " + functionName;
          }
        }
        result = "ctor of " + result;
      }
    } 
    return result;
  }

  protected void printSourceModule(SourceModule sm) {
    if (sm == null) {
      Dbg.err("Attempting to print null SourceModule");
      return;
    }

    Reader rdr = sm.getInputReader();
    StringBuilder sb = new StringBuilder();
    try {
      int i = -1;
      while ((i = rdr.read()) != -1) {
        char c = (char)i;
        sb.append(c);
      }
    } catch (IOException ex) {
      Dbg.err("Reading SourceModule text: " + ex.getMessage());
    }

    System.out.println(sb.toString());
  }

  public void printCallGraph() {
    if (cg == null) {
      Dbg.err("Call graph is null, cannot print.");
      return;
    }

    CallGraph2JSON.IGNORE_HARNESS = Opts.noNatives;
    String output = CallGraph2JSON.serialize(cg);
    Dbg.out(output, 1);
  }

  public void run() {
    JavaScriptTranslatorFactory factory = new CAstRhinoTranslatorFactory();
    setTranslatorFactory(factory);

    if (Opts.outputCallGraph) {
      if (isHTML()) {
        createHTMLCallGraph();
      } else {
        createJSCallGraph();
      }

      //buildAnalysisEngine();

      printCallGraph();
      //dumpCallGraph();
    } else if (Opts.outputJS) {
      URL url = getURL(sourceFile);
      if (isHTML()) {
        SourceModule htmlscript = convertHTMLToJS(url);
        if (htmlscript != null) {
          printSourceModule(htmlscript);
        }
      } else {
        SourceModule src = url.getProtocol().equals("file") ? new SourceFileModule(sourceFile, sourceFile.getName(), null) : new SourceURLModule(url);
        printSourceModule(src);
      }
    }
  }

  public static void main(String[] args) {
    // Process the command line arguments.
    OptionParser parser = new OptionParser(new Opts());
    parser.parseArgument(args);

    WalaClient wc = new WalaClient();
    wc.run();
  }

  public static class Opts extends Options {

    @Argument(required=true, index=0, usage="source file", metaVar="SRCFILE")
    public static String sourceFile;

    @Option(name="-c", usage="Output a call graph")
    public static boolean outputCallGraph = false;

    @Option(name="-j", usage="Interpret the input file as JavaScript")
    public static boolean isJS = false;

    @Option(name="-m", usage="Interpret the input file as HTML")
    public static boolean isHTML = false;

    @Option(name="-r", usage="Output the JavaScript representation")
    public static boolean outputJS = false;

    @Option(name="-n", usage="Don't include native targets in output")
    public static boolean noNatives = false;

    @Option(name="-e", usage="Don't extract correlated pairs (more efficient, less precise)")
    public static boolean noExtract = false;

    @Option(name="-x", usage="Don't consider the call and apply methods (unsound)")
    public static boolean noHandleCallApply = false;
  }
}

