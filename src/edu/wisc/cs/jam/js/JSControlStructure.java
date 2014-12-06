package edu.wisc.cs.jam.js;

import java.util.LinkedHashMap;
import java.util.Set;
import java.util.LinkedHashSet;

import com.google.javascript.jscomp.JAMControlFlowGraph;

import edu.wisc.cs.automaton.Automaton.Edge;
import edu.wisc.cs.automaton.State;

import edu.wisc.cs.jam.JAM;
import edu.wisc.cs.jam.ExpSymbol;
import edu.wisc.cs.jam.ControlStructure;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.CheckManager;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.ReturnSymbol;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.CallGraph.Callsite;
import edu.wisc.cs.jam.CallGraph.Function;

import edu.wisc.cs.jam.xsb.XSBInterface;

public class JSControlStructure extends ControlStructure {

  protected JSControlStructure() { }

  public JSControlStructure(SourceManager src, CheckManager cman) {
    // Collect the analysis input from the main algorithm.
    sm = src;
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
      globalReturn = new ReturnSymbol(sm, mainFunction);

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

  protected void buildIntraproceduralEdges() {

    JAMControlFlowGraph cfg = new JAMControlFlowGraph(this, sm);

    // Create the CFG for the top-level function first.
    cfg.addFunction(mainFunction);
    // Store the final destination state in the program body.
    // %%% This relies on getStates returning a list of states
    // %%% organized by order added.
    lastMainState = getStates().get(getStateCount() - 1);

    // Now process the internals of each user-defined function in turn.
    for (Function curFunc : allFunctions) {
      // Add intra-procedural CFG edges to the automaton.
      cfg.addFunction(curFunc);
    }

    // Acquire the informational maps built up by the CFG.
    stateMap = cfg.getStateMap();
    functionReturnMap = cfg.getFunctionReturnMap();
    functionEntryMap = cfg.getFunctionEntryMap();
    logSize("intraprocedural");

    /*
    // Create this here, for no particular reason.
    State externSource = new State();
    // %%% Might want a special symbol for this, but it's messing up
    // %%% the sentinel system currently.
    //ExpSymbol externSymbol = new ExternEntrySymbol(sm);
    ExpSymbol externSymbol = new ExpSymbol(JSExp.createEmpty(sm));
    State externDest = new State();
    externCall = makeEdge(externSymbol, externSource, externDest);
    addEdge(externCall);
    */

    JSExp.jettisonNodes();
  }

  // Build the control-flow graph.
  protected void load() {
    loadCallGraph();

    FileUtil.writeToMain("allFunctions:" + allFunctions.size() + "\nallCallsites:" + allCallsites.size() + "\n", JAMConfig.INFO_FILENAME, true);

    buildIntraproceduralEdges();

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

}
