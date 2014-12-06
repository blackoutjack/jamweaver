
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

import edu.wisc.cs.automaton.Automaton;
import edu.wisc.cs.automaton.Automaton.Edge;
import edu.wisc.cs.automaton.State;

import edu.wisc.cs.jam.xsb.XSBInterface;

import edu.wisc.cs.jam.js.JSExp;
import edu.wisc.cs.jam.js.ExpUtil;
import edu.wisc.cs.jam.env.NativeUtil;
import edu.wisc.cs.jam.CallGraph.Function;
import edu.wisc.cs.jam.CallGraph.Callsite;

// ControlStructure is a ControlAutomaton that has the ability to build
// itself. This is separated out from ControlAutomaton so that other
// subclasses (like RelationAutomaton) don't have to carry around all
// the extra collections that are used while building the structure.
public abstract class ControlStructure extends ControlAutomaton {

  // Input fed in from the main algorithm at construction.
  protected SourceManager sm;
  protected CheckManager cm;
  
  // Maps a program statement to the control flow state that it lead to
  protected Map<Exp,State> stateMap;

  // Maps a function to its entry state
  protected Map<Function,State> functionEntryMap;

  // Maps a function to the states to which it can return
  protected Map<Function,State> functionReturnMap;

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

    Exp callNode = curSite.getExp();

    // String to represent the callsite.
    // %%% Correctness relies on the unique naming facilities of
    // %%% Closure. We should identify the specific callsite
    // %%% with source position, but nothing currently
    // %%% handles such a thing in the XSB semantics.
    String callId = callNode.getChild(0).toCode();
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

  protected boolean loadPossibleExternTargets(Callsite curSite) {
    boolean targetsExtern = false;

    Exp callExp = curSite.getExp();

    // String to represent the callsite.
    // %%% Correctness relies on the unique naming facilities of
    // %%% Closure. We should identify the specific callsite
    // %%% with source position, but nothing currently
    // %%% handles such a thing in the XSB semantics.
    String callId = callExp.getChild(0).toCode();
    Set<String> callTargs = callTargets.get(callId);
    if (callTargs == null) {
      callTargs = new LinkedHashSet<String>();
      callTargets.put(callId, callTargs);
    }

    if (curSite.hasUnknownTarget()) {
      targetsExtern = true;
    } else {
      // %%% This is not really sound.
      Set<Exp> externTargets = curSite.getPossibleExternTargets();
      if (externTargets.size() > 0) {
        externCalls.add(curSite);
        targetsExtern = true;
        for (Exp ext : externTargets) {
          String expr = ext.toCode();
          // Translate Closure natives to form matching the semantics.
          String maybeExpr = NativeUtil.closureTranslation.get(expr);
          if (maybeExpr != null) {
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

    return targetsExtern;
  }

  // Gets all of the call targets for a given callsite or |null| if
  // any function can be targeted.
  protected Set<Function> getAllPossibleTargets(Callsite site) {
    Set<Function> targets = new LinkedHashSet<Function>();
    getPossibleUserTargets(site, targets);
    loadPossibleExternTargets(site);
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
      State returnState = functionReturnMap.get(curFunc);
      // %%% See note above about hack.
      if (returnState == null) continue;
      assert returnState != null : "Can't find return state for function " + curFunc.getName();

      // Either use the global return symbol, or create a function-
      // specific one, which can be useful for debugging.
      ExpSymbol retSym = globalReturn;
      if (retSym == null) {
        retSym = new ReturnSymbol(sm, curFunc);
      }

      // And insert the return edge
      Edge retEdge = makeReturnEdge(retSym, returnState, loopState, loopState);
      addEdge(retEdge);
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
    allFunctions = cg.getAllFunctions();
    // For most operations that use "all functions", we want to skip
    // the top-level function since it can't be called directly.
    allFunctions.remove(mainFunction);
  }

  public void processCallEdges() {
    for (Callsite cs : allCallsites) {
      Exp curSiteNode = cs.getExp();
      Exp curSiteStmt = ExpUtil.getEnclosingStatement(curSiteNode);
      // %%% Use Exp all the way.
      State callSource = stateMap.get(curSiteStmt);
      if (callSource == null) {
        Dbg.warn("Callsite on line " + curSiteNode.getSourceLine()
          + " is unreachable (source state doesn't exist): "
          + curSiteNode.toCode());
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

  // Dump the current size of the automaton.
  protected void logSize(String desc) {
    String text = desc + "-edges:" + getEdges().size() + "\n";
    text += desc + "-states:" + getStates().size() + "\n";
    FileUtil.writeToMain(text, JAMConfig.INFO_FILENAME, true);
  }

}


