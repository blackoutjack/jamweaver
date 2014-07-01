package edu.wisc.cs.jam.util;

import java.io.OutputStream;
import java.io.PrintStream;
import java.io.IOException;
import java.io.File;
import java.net.URL;

import org.kohsuke.args4j.Option;
import org.kohsuke.args4j.Argument;

import com.ibm.wala.core.tests.basic.PrimitivesTest;
import com.ibm.wala.cast.test.TestCAstPattern;
import com.ibm.wala.cast.js.translator.CAstRhinoTranslatorFactory;
import com.ibm.wala.cast.js.translator.JavaScriptTranslatorFactory;
import com.ibm.wala.cast.js.test.TestSimpleCallGraphShape;
import com.ibm.wala.cast.js.test.JSCallGraphBuilderUtil;
import com.ibm.wala.cast.js.ipa.callgraph.JSCallGraphUtil;
import com.ibm.wala.cast.js.ipa.callgraph.JSCallGraph;
import com.ibm.wala.cast.js.util.CallGraph2JSON;
import com.ibm.wala.analysis.pointers.*;
import com.ibm.wala.ipa.callgraph.AnalysisOptions;
import com.ibm.wala.ipa.callgraph.CallGraph;
import com.ibm.wala.util.CancelException;
import com.ibm.wala.cast.js.client.JavaScriptAnalysisEngine;

import edu.wisc.cs.jam.Options;
import edu.wisc.cs.jam.OptionParser;

public class WalaClient extends JavaScriptAnalysisEngine implements Utility {

  private static Opts options;
  private File sourceFile;
  private boolean ishtml;

  public WalaClient(Opts opts) {
    options = opts;
    sourceFile = new File(options.sourceFile);
    ishtml = options.isHTML || sourceFile.getName().endsWith(".html");
  }

  public boolean isHTML() {
    return ishtml;
  }
/*
  public void buildAnalysisEngine() {

    JavaScriptTranslatorFactory factory = new CAstRhinoTranslatorFactory();
    setTranslatorFactory(factory);

    // Set up the analysis scope and class hierarchy.
    buildAnalysisScope();
    IClassHierarchy ch = buildClassHierarchy();

    // Assume we're doing a full-program analysis.
    setClosedWorld(true);

    // Create a script loader.
    JavaScriptLoader loader = new JavaScriptLoader(ch, factory);
    loader.addBootstrapFile(filepath);

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

  public void createJSCallGraph() {
    JavaScriptTranslatorFactory factory = new CAstRhinoTranslatorFactory();
    JSCallGraphUtil.setTranslatorFactory(factory);
    JSCallGraphBuilderUtil builder = new JSCallGraphBuilderUtil();

    try {
      String name = sourceFile.getName();
      String path = sourceFile.getAbsoluteFile().getParent();
      cg = (JSCallGraph)builder.makeScriptCG(path, name);
    } catch (IOException ex) {
      ex.printStackTrace();
    } catch (CancelException ex) {
      ex.printStackTrace();
      return;
    }
  }

  public void createHTMLCallGraph() {
    JavaScriptTranslatorFactory factory = new CAstRhinoTranslatorFactory();
    JSCallGraphUtil.setTranslatorFactory(factory);
    JSCallGraphBuilderUtil builder = new JSCallGraphBuilderUtil();

    URL url = null;
    try {
      url = new URL("file://" + sourceFile.getAbsolutePath());
    } catch (IOException ex) {
      ex.printStackTrace();
      return;
    }

    try {
      cg = (JSCallGraph)builder.makeHTMLCG(url);
    } catch (IOException ex) {
      ex.printStackTrace();
    } catch (CancelException ex) {
      ex.printStackTrace();
      return;
    }
  }

  public void printCallGraph() {
    if (cg == null) {
      System.err.println("Call graph is null, cannot print.");
      return;
    }

    CallGraph2JSON.IGNORE_HARNESS = options.noNatives;
    System.out.println(CallGraph2JSON.serialize(cg));
  }

  @Override
  public void run() {
    if (isHTML()) {
      createHTMLCallGraph();
    } else {
      createJSCallGraph();
    }

    //wc.buildAnalysisEngine();

    printCallGraph();
  }

  public static class Opts extends Options {

    @Argument(required=true, index=0, usage="source file", metaVar="SRCFILE")
    public static String sourceFile;

    @Option(name="-m", usage="Process the input as an HTML file")
    public static boolean isHTML = false;

    @Option(name="-n", usage="Don't include native targets in output")
    public static boolean noNatives = false;
  }
}

