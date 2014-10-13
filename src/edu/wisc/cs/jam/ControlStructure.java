
package edu.wisc.cs.jam;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Set;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Collection;

import com.google.javascript.jscomp.NodeTraversal;
import com.google.javascript.jscomp.NodeTraversal.Callback;
import com.google.javascript.rhino.Node;
import com.google.javascript.rhino.Token;
import com.google.javascript.jscomp.CallGraph;
import com.google.javascript.jscomp.CallGraph.Function;
import com.google.javascript.jscomp.CallGraph.Callsite;
import com.google.javascript.jscomp.CompilerOptions;
import com.google.javascript.jscomp.CompilerOptions.LanguageMode;
import com.google.common.collect.HashMultimap;

import com.google.javascript.jscomp.JAMControlFlowGraph;

import edu.wisc.cs.automaton.Automaton;
import edu.wisc.cs.automaton.Automaton.Edge;
import edu.wisc.cs.automaton.State;

import edu.wisc.cs.jam.xsb.XSBInterface;

import edu.wisc.cs.jam.js.JSExp;
import edu.wisc.cs.jam.js.ExpUtil;
import edu.wisc.cs.jam.env.NativeUtil;

// ControlStructure is a ControlAutomaton that has the ability to build
// itself. This is separated out from ControlAutomaton so that other
// subclasses (like RelationAutomaton) don't have to carry around all
// the extra collections that are used while building the structure.
public abstract class ControlStructure extends ControlAutomaton {

  // Input fed in from the main algorithm at construction.
  protected SourceManager sm;
  protected CheckManager cm;
  
  // Maps a program statement to the control flow state that it lead to
  protected Map<Node,State> stateMap;

  // Maps a function to its entry state
  protected Map<Function,State> functionEntryMap;

  // Maps a function to the states to which it can return
  protected Map<Function,List<State>> functionReturnMap;

  // Callsites for which we have no target information
  protected Collection<Callsite> conservativeCalls;

  // Callsites that must target externs (natives).
  protected Set<Callsite> externCalls;

  protected Map<String,Set<String>> callTargets;

  // Set of all functions
  protected Collection<Function> allFunctions;

  // Set of all callsites
  protected Collection<Callsite> allCallsites;

  // Set of edges for exception flow.
  protected Collection<Edge> exceptionEdges;

  // The top-level function
  protected Function mainFunction;

  // This is the ending state of the top-level function. A callback
  // loop may be inserted after this state.
  protected State lastMainState;

  // The symbol that labels return edges. This may be left null if
  // we're debugging, so that we can create a new return symbol for
  // every function.
  protected ExpSymbol globalReturn;

  // This models a symbolic extern call.
  //protected Edge externCall;

  // This is just used to omit duplicate warnings.
  protected Set<String> unknownExterns;

  // Clear all accumulated state to free memory.
  protected void clearTemporaryState() {
    stateMap = null;
    functionEntryMap = null;
    functionReturnMap = null;
    //externCalls = null;
    //conservativeCalls = null;
    allCallsites = null;
    allFunctions = null;
    exceptionEdges = null;
    mainFunction = null;
    lastMainState = null;
    globalReturn = null;
    callTargets = null;
    unknownExterns = null;
  }

  protected boolean getPossibleUserTargets(Callsite curSite, Set<Function> targets) {
    boolean hasUserTarget = false;

    Node callNode = curSite.getAstNode();

    // String to represent the callsite.
    // %%% Correctness relies on the unique naming facilities of
    // %%% Closure. We should identify the specific callsite
    // %%% with source position, but nothing currently
    // %%% handles such a thing in the XSB semantics.
    String callId = getCode(callNode.getChildAtIndex(0));
    Set<String> callTargs = callTargets.get(callId);
    if (callTargs == null) {
      callTargs = new LinkedHashSet<String>();
      callTargets.put(callId, callTargs);
    }

    if (curSite.hasUnknownTarget()) {
      // We also have to mark that we're going off the callgraph, so that
      // we can add return edges from all functions to this callsite
      conservativeCalls.add(curSite);
      targets.addAll(allFunctions);
      hasUserTarget = true;
    } else {
      
      targets.addAll(curSite.getPossibleTargets());

      for (Function f : targets) {
        // Log the disjunct predicates associating this callsite with
        // user-defined functions it can possibly target.
        callTargs.add("##" + f.getName());
        hasUserTarget = true;
      }
    }

    return hasUserTarget;
  }

  protected boolean getPossibleExternTargets(Callsite curSite) {
    boolean hasExternTarget = false;

    Node callNode = curSite.getAstNode();

    // String to represent the callsite.
    // %%% Correctness relies on the unique naming facilities of
    // %%% Closure. We should identify the specific callsite
    // %%% with source position, but nothing currently
    // %%% handles such a thing in the XSB semantics.
    String callId = getCode(callNode.getChildAtIndex(0));
    Set<String> callTargs = callTargets.get(callId);
    if (callTargs == null) {
      callTargs = new LinkedHashSet<String>();
      callTargets.put(callId, callTargs);
    }

    if (curSite.hasUnknownTarget()) {
      hasExternTarget = true;
    } else {
      Collection<Node> externTargets = curSite.getPossibleExternTargets();
      if (externTargets.size() > 0) {
        externCalls.add(curSite);
        hasExternTarget = true;
        for (Node ext : externTargets) {
          String expr = getCode(ext);
          // Translate Closure natives to form matching the semantics.
          String maybeExpr = NativeUtil.closureExpression.get(expr);
          if (maybeExpr != null) {
            if (maybeExpr.equals("")) {
              // This indicates that the native is not a function but
              // some primitive/object value.
              continue;
            }
            expr = maybeExpr;
          }

          String loc = NativeUtil.nativeExpressionToLocation.get(expr);
          if (loc == null) {
            // Whoops! There's a mismatch between Closure's externs and
            // JAM-generated browser model.
            if (unknownExterns == null) {
              unknownExterns = new HashSet<String>();
            }
            if (!unknownExterns.contains(expr)) {
              // Only show this warning the first time.
              Dbg.warn("Unknown extern target found: " + expr);
              unknownExterns.add(expr);
            }
            // If a native target isn't found in the loaded database,
            // conservatively model this call.
            conservativeCalls.add(curSite);
          } else {
            callTargs.add(loc);
          }
        }
      }
    }

    return hasExternTarget;
  }

  // Gets all of the call targets for a given callsite or |null| if
  // any function can be targeted.
  protected Set<Function> getAllPossibleTargets(Callsite site) {
    Set<Function> targets = new LinkedHashSet<Function>();
    getPossibleUserTargets(site, targets);
    getPossibleExternTargets(site);
    return targets;
  }

  // This inserts a "tight loop" at the tail of the NWA that iteratively
  // (and non-deterministically) calls all functions in the body of the
  // program. This models functionality with callbacks, like setInterval
  // and setTimeout
  // REQUIREMENT: This must be called after all other functions in the
  // code have been processed by processFromNode.
  protected void insertCallbackLoop(Collection<Function> targets) {

    // Make an edge from the last destination state in the top-level
    // program body to a new loop state.
    State loopState = new State();
    ExpSymbol cbentry = new CallbackEntrySymbol(JSExp.createEmpty(sm));
    Edge loopEdge = makeEdge(cbentry, lastMainState, loopState);
    addEdge(loopEdge);

    // We non-deterministically call all functions possibly targets by
    // callbacks.
    ExpSymbol noop = new ExpSymbol(JSExp.createEmpty(sm));
    for (Function curFunc : targets) {
      // Get the entry node for the current function      
      State targetEntry = functionEntryMap.get(curFunc);
      assert targetEntry != null : "Can't find entry point for function " + curFunc.getName();

      // Add an empty transition from our loop node to the entry
      Edge callbackEdge = makeCallEdge(noop, loopState, targetEntry);
      addEdge(callbackEdge);

      // Get the return sites for this function
      List<State> returnStates = functionReturnMap.get(curFunc);
      // %%% See note above about hack.
      if (returnStates == null) continue;
      assert returnStates != null : "Can't find return states for function " + curFunc.getName();
      assert returnStates.size() > 0 : "No return states for function " + curFunc.getName();

      // Either use the global return symbol, or create a function-
      // specific one, which can be useful for debugging.
      ExpSymbol retSym = globalReturn;
      if (retSym == null) {
        retSym = new ReturnSymbol(sm, curFunc);
      }

      // Loop through all of the function's exit points
      for (State retState : returnStates) {
        // And insert the return edge
        Edge retEdge = makeReturnEdge(retSym, retState, loopState, loopState);
        addEdge(retEdge);
      }
    }
  }

  @Override
  public Collection<Callsite> getConservativeCalls() {
    return conservativeCalls;
  }

  @Override
  public Collection<Callsite> getExternCalls() {
    return externCalls;
  }

  protected void buildIntraproceduralEdges(JAMControlFlowGraph cfg) {

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
  }

  protected void outputCallTargets() {
    StringBuilder sb = new StringBuilder();
    for (String key : callTargets.keySet()) {
      Set<String> targs = callTargets.get(key);
      for (String targ : targs) {
        // Add callsite line number in a comment for informational purposes.
        // %%% We could associate this in the predicates to be more 
        // %%% precise.
        //sb.append("% Call " + callId + " at position " + callNode.getSourceOffset() + "\n");
        sb.append("calltarget('\"" + XSBInterface.escapeString(key) + "\"','" + targ + "').\n");
      }
    }
    // Write the new facts to the function facts semantic module.
    FileUtil.writeToMain(sb, "funfacts.P", true);
  }

  protected void loadCallGraph() {
    CallGraph cg = sm.getCallGraph();
    allCallsites = cg.getAllCallsites();
    mainFunction = cg.getMainFunction();
    // We copy in this funny way because modifications to the collection
    // returned here will change the actual CallGraph!
    Collection<Function> allFunctionsOrig = cg.getAllFunctions();
    allFunctions = new LinkedHashSet<Function>(allFunctionsOrig);
    // For most operations that use "all functions", we want to skip
    // the top-level function since it can't be called directly.
    allFunctions.remove(mainFunction);
    /*
    for (Function f : allFunctionsOrig) {
      // Anonymous functions, at this point, are all getters/setters.
      // %%% Need to figure out how to properly handle these.
      if (f.getName() == null)
        allFunctions.remove(f);
    }
    */
  }

  public void processCallEdges() {
    for (Callsite cs : allCallsites) {
      Node curSiteNode = cs.getAstNode();
      Node curSiteStmt = ExpUtil.getEnclosingStatement(curSiteNode);
      State callSource = stateMap.get(curSiteStmt);
      if (callSource == null) {
        Dbg.warn("Callsite on line " + curSiteNode.getLineno()
          + " is unreachable (source state doesn't exist): "
          + getCode(curSiteNode));
        continue;
      }
      // Mark the outgoing edge as havoc since we're assuming any
      // function can be called.
      // %%% Could use callgraph to make this more precise.
      List<Edge> oes = getOutEdges(callSource);
      for (Edge oe : oes) {
        ExpSymbol callsym = oe.getSymbol();
        assert callsym != null : "Null call symbol for edge: " + oe;
        callsym.setHavoc(true);
      }
    }
  }

  public Edge makeExceptionEdge(ExpSymbol sym, State s0, State s1) {
    Edge ret = makeEdge(sym, s0, s1);
    exceptionEdges.add(ret);
    return ret;
  }

  public boolean isExceptionEdge(Edge e) {
    return exceptionEdges.contains(e);
  }

  protected String getCode(Node n) {
    return sm.codeFromNode(n);
  }

  // Dump the current size of the automaton.
  protected void logSize(String desc) {
    if (JAM.Opts.countNodes) {
      String text = desc + "-edges:" + getEdges().size() + "\n";
      text += desc + "-states:" + getStates().size() + "\n";
      FileUtil.writeToMain(text, JAMConfig.INFO_FILENAME, true);
    }
  }

}


