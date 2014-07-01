package edu.wisc.cs.jam.js;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Set;
import java.util.LinkedHashSet;
import java.util.Collection;

import com.google.javascript.jscomp.NodeTraversal;
import com.google.javascript.jscomp.NodeTraversal.Callback;
import com.google.javascript.rhino.Node;
import com.google.javascript.rhino.Token;
import com.google.javascript.jscomp.CallGraph;
import com.google.javascript.jscomp.CallGraph.Function;
import com.google.javascript.jscomp.CallGraph.Callsite;
import com.google.javascript.jscomp.CompilerPass;
import com.google.javascript.jscomp.CompilerOptions;
import com.google.javascript.jscomp.CompilerOptions.LanguageMode;
import com.google.common.collect.HashMultimap;

import com.google.javascript.jscomp.JAMControlFlowGraph;

import edu.wisc.cs.automaton.Automaton;
import edu.wisc.cs.automaton.Automaton.Edge;
import edu.wisc.cs.automaton.State;

import edu.wisc.cs.jam.JAM;
import edu.wisc.cs.jam.ExpSymbol;
import edu.wisc.cs.jam.ControlStructure;
import edu.wisc.cs.jam.SourceFile;
import edu.wisc.cs.jam.CheckManager;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.ReturnSymbol;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.Dbg;

import edu.wisc.cs.jam.xsb.XSBInterface;

public class JSControlStructure extends ControlStructure {

  protected JSControlStructure() { }

  public JSControlStructure(SourceFile src, CheckManager cman) {
    // Collect the analysis input from the main algorithm.
    sourceFile = src;
    cm = cman;


    // Reset the state id counters. This is optional, it's just a
    // debugging preference. This should NOT be done for policy states
    // ("P"), since these need to remain differentiated from each other.
    State.resetLabelIds("S");
    State.resetLabelIds("D");

    // Initialize all other class-global data.
    conservativeCalls = new LinkedHashSet<Callsite>();
    externCalls = new LinkedHashSet<Callsite>();
    callTargets = new LinkedHashMap<String,Set<String>>();
    exceptionEdges = new LinkedHashSet<Edge>();
    // Don't initialize stateMap, functionEntryMap or functionReturnMap
    // here, because they are instantiated within the
    // JAMControlFlowGraph.

    // Unless we're debugging, there's no reason to have a separate
    // return symbol for every return edge.
    if (!JAM.Opts.debug)
      globalReturn = new ReturnSymbol(sourceFile, mainFunction);

    // Generate the control structure (without relations). This
    // results in the invocation of the process function below.
    Dbg.out("Building control automaton", 3);
    load();
    Dbg.out("Done building control automaton", 3);

    clearTemporaryState();

    // All states are final except for the initial state.
    // %%% For super-large programs, it might be faster to do this when
    // %%% states are added rather than looping here.
    for (State s : getStates()) {
      if (!s.isInitial()) {
        s.setFinal(true);
      }
    }

    if (cm != null) {
      // %%% A little convoluted.
      for (ExpSymbol sym : getSymbols()) {
        cm.initChecks(sym);
      }
    }
  }

  // Build the control-flow graph.
  protected void load() {
    loadCallGraph();

    if (JAM.Opts.countNodes)
      FileUtil.writeToMain("allFunctions:" + allFunctions.size() + "\nallCallsites:" + allCallsites.size(), JAMConfig.INFO_FILENAME, true);

    Node root = sourceFile.getRootNode();
    Node externs = sourceFile.getExterns();
    JAMControlFlowGraph cfg =
      new JAMControlFlowGraph(this, sourceFile, externs, root);

    buildIntraproceduralEdges(cfg);

    // Populate |externCalls| and |conservativeCalls|.
    for (Callsite cs : allCallsites) {
      getAllPossibleTargets(cs);
    }
    outputCallTargets();

    // Mark all call edges as havoc.
    processCallEdges();

    // Do the callback control flow overapproximation.
    insertCallbackLoop(allFunctions);

    // CheckManager may be null if we're just preprocessing and exiting.
    if (cm != null) {
      // Load existing checks.
      cm.loadExistingChecks();
    }
  }

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

    opts.setInferTypes(true);

    return opts;
  }

}
