package edu.wisc.cs.jam.js;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
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
import com.google.javascript.jscomp.Compiler;

import com.google.javascript.jscomp.JAMControlFlowGraph;

import edu.wisc.cs.automaton.Automaton;
import edu.wisc.cs.automaton.Automaton.Edge;
import edu.wisc.cs.automaton.State;

import edu.wisc.cs.jam.JAM;
import edu.wisc.cs.jam.ExpSymbol;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.CheckManager;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.ReturnSymbol;
import edu.wisc.cs.jam.BranchSymbol;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.Exp;

public class JSInterproceduralControlStructure extends JSControlStructure implements Callback {

  // Maps event handlers names to functions potentially assigned to the
  // handler
  // %%% The current system assumes that all DOM elements share a set
  // of, e.g., "onclick" handlers. This overapproximates because every
  // element can has its own unique handler for each event.
  private Map<String,List<Function>> handlerAssignments;

  // Set of program statements that set up callbacks/events
  private Set<Node> callbackExpressions;

  // Maps callsite references to functions they might target
  private Map<String,Set<Function>> callTargetMap;

  public JSInterproceduralControlStructure(SourceManager sm, CheckManager cman) {
    super(sm, cman);
  }

  // Clear all accumulated state to free memory.
  @Override
  protected void clearTemporaryState() {
    super.clearTemporaryState();
    handlerAssignments = null;
    callbackExpressions = null;
    callTargetMap = null;
  }

  @Override
  public boolean shouldTraverse(NodeTraversal t, Node n, Node parent) {
    return true;
  }

  @Override
  public void visit(NodeTraversal t, Node n, Node parent) {

    // Callback discovery
    // Keep a lookout for calls that set up asynchronous callbacks.
    // %%% All callback functions that we currently handle have 2 arguments.
    if (n.getType() == Token.CALL && n.getChildCount() == 3) {
      String callTarget = getCode(n.getFirstChild());
      for (String curCallback : NodeUtil.callbackList) {
        if (callTarget.equals(curCallback)) {
          Node exp = n.getChildAtIndex(1);
          callbackExpressions.add(exp);
        }
      }
    }

    // Collect assignments to event handlers, because
    // the CG assumes they're all external, and provides no useful
    // information.
    String hdlr = setsHandler(n);
    if (hdlr != null) {
      // If so, make sure the RHS is just an identifier,
      // and add the symbol name to the possible targets
      // for this handler
      Node c1 = n.getChildAtIndex(1);
      if (NodeUtil.isName(c1)) {
        addPossibleTarget(hdlr, getCode(c1));
      }
    }

    // Find all the call target assignments that might occur in the
    // program and populate callTargetMap with the results. Only 
    // consider normal assignment, not +=, -=, etc.
    if (n.getType() == Token.ASSIGN || NodeUtil.isVarInitializer(n)) {
      Node lhs = NodeUtil.getAssignLHS(n);
      Node rhs = NodeUtil.getAssignRHS(n);

      if (NodeUtil.isName(rhs)) {
        String l = getCode(lhs);
        String r = getCode(rhs);

        Set<Function> targets = getPossibleTargetsOfName(r);
        if (targets.size() > 0) {
          Set<Function> targetsList = callTargetMap.get(l);
          if (targetsList == null) {
            targetsList = new LinkedHashSet<Function>();
            callTargetMap.put(l, targetsList);
          }
          targetsList.addAll(targets);
        }
      } else if (rhs.getType() == Token.OBJECTLIT) {
        for (int i=0; i<rhs.getChildCount(); i++) {
          Node prop = rhs.getChildAtIndex(i);
          Node val = prop.getChildAtIndex(0);

          if (!NodeUtil.isName(val)) continue;

          String l = getCode(prop);
          // Strip the quotes off of the property name.
          l = l.substring(1, l.length()-1);
          String r = getCode(val);

          List<Function> targets = new ArrayList<Function>(getPossibleTargetsOfName(r));
          if (targets.size() > 0) {

            // String of the form obj.prop, where obj is the
            // lhs of the assignment, will identify the call.
            String objkey = getCode(lhs) + "." + l;
            Set<Function> targetsList = callTargetMap.get(objkey);

            if (targetsList == null) {
              targetsList = new LinkedHashSet<Function>();
              callTargetMap.put(objkey, targetsList);
            }
            targetsList.addAll(targets);
            
            // Also populate the map so that references such as
            // "this.func()" can be resolved.
            // This is an overapproximation since calls within objects
            // with identically-named member functions will be lumped
            // together.
            String thiskey = "this." + l;
            Set<Function> thisTargetsList = callTargetMap.get(thiskey);

            if (thisTargetsList == null) {
              thisTargetsList = new LinkedHashSet<Function>();
              callTargetMap.put(thiskey, thisTargetsList);
            }
            thisTargetsList.addAll(targets);
          }
        }
      }
    }
  }

  /* 
   * Returns the function is assigned as an event handler, or null.
   */
  protected String setsHandler(Node n) {
    if (NodeUtil.isAssign(n)) {
      // See if the LHS mentions a handler
      Node lhs = n.getChildAtIndex(0);
      if (NodeUtil.isAccessor(lhs)) {
        String prop = getCode(lhs.getChildAtIndex(1));
        for (String cur : NodeUtil.handlerList) {
          String curcomp = "\"" + cur + "\"";
          if (prop.equals(curcomp)) {
            return cur;
          }
        }
      }
    }
    return null;
  }

  protected void addPossibleTarget(String handler, String target) {
    Set<Function> targets = getPossibleTargetsOfName(target);
    List<Function> curTargets;
    if (handlerAssignments.containsKey(handler)) {
      curTargets = handlerAssignments.get(handler);
    } else {
      curTargets = new ArrayList<Function>();
      handlerAssignments.put(handler, curTargets);
    }
    curTargets.addAll(targets);
  }

  // %%% This is incorrect because the reference represented by
  // this identifier may have been overwritten.
  private Set<Function> getPossibleTargetsOfName(String funcName) {

    Set<Function> ret = new LinkedHashSet<Function>();

    for (Function curFunc : allFunctions) {
      String name = curFunc.getName();
      if (name != null && name.equals(funcName)) {
        ret.add(curFunc);
      }
    }

    return ret;
  }

  // Get the set of sites that might target a given function
  private Set<Callsite> getAllPossibleCallsites(Function f) {

    Set<Callsite> ret = new LinkedHashSet<Callsite>();
    ret.addAll(f.getCallsitesPossiblyTargetingFunction());

    for (Callsite curSite : allCallsites) {
      Set<Function> targets = callTargetMap.get(getCode(curSite.getAstNode().getChildAtIndex(0)));
      if(targets == null) continue;

      for (Function curFunc : targets) {
        String name = curFunc.getName();
        if (name != null && name.equals(f.getName())) {
          ret.add(curSite);
          break;
        }
      }
    }

    return ret;
  }

  // Conservatively determine whether the string being invoked refers
  // to an event handler.
  protected boolean isHandlerInvocation(String invokeString) {
    for (String curHandler : NodeUtil.handlerList) {
      // %%% do better than grepping
      if (invokeString.indexOf(curHandler) > -1) return true;
    }

    return false;
  }

  // Return the previously-determined potential targets of the event
  // handler being invoked.
  protected Collection<Function> getHandlerTargets(String invokeString) {
    Set<Function> ret = new LinkedHashSet<Function>();
    // %%% This is poor ... grepping for a function name.
    for (String curHandler : NodeUtil.handlerList) {
      if (invokeString.indexOf(curHandler) >= 0) {
        Collection<Function> hAssigns = handlerAssignments.get(curHandler);
        if (hAssigns != null) ret.addAll(hAssigns);
      }
    }

    return ret;
  }

  public void dumpCallsite(Callsite cs) {
    Node cn = cs.getAstNode();
    StringBuilder sb = new StringBuilder();
    sb.append("Callsite: ");
    sb.append(getCode(cn));
    sb.append(", position: ");
    sb.append(cn.getLineno());
    sb.append(":");
    sb.append(cn.getCharno());
    sb.append(", hasExternTargets: ");
    sb.append(cs.hasExternTarget());
    sb.append(", hasUnknownTargets: ");
    sb.append(cs.hasUnknownTarget());
    Dbg.err(sb.toString());
  }

  /*
  // %%% Old version
  protected Map<Callsite,State> buildCallEdges() {
    // We maintain a map of callsites with the states which begin 
    // their actual call transition.
    // This loop, and specifically the inner loop through all potential
    // targets, can be a performance bottleneck.
    Map<Callsite,State> callStateMap = new LinkedHashMap<Callsite,State>();
    for (Callsite curSite : allCallsites) {
      //dumpCallsite(curSite);
      // Avoid repeated method calls by collecting some objects here.
      Node curSiteNode = curSite.getAstNode();
      Node curSiteStmt = NodeUtil.getEnclosingStatement(curSiteNode);
      String curSiteName = getCode(curSiteNode.getFirstChild());
      String curSiteCode = getCode(curSiteNode);

      // There may be multiple potential targets, so we have to add 
      // edges for all of them.
      Collection<Function> targets = null;
      if (false && isHandlerInvocation(curSiteCode)) {
        // %%% This was never very rigorous.
        targets = getHandlerTargets(curSiteCode);
      } else {
        targets = getAllPossibleTargets(curSite);
      }

      // To reduce redundant clutter, we implicitly represent callsites
      // that can target any function.
      if (targets == null) {
        assert conservativeCalls.contains(curSite);
        targets = allFunctions;
      }
      
      if (targets.size() == 0) {
        // If the Closure knows that the target is extern, the targets
        // list will be empty and we let the semantics deal with it.
        // We also hit this case if there are no user-defined functions.
        continue;
      }

      // Get the source and destination NWA states, and add the call
      // edges.
      State origCallSource = stateMap.get(curSiteStmt);
      
      // The callsite may not have been added during the CFG building
      // process if it is unreachable. This occur for code like the
      // following.
      //
      // while (true) {
      //   break;
      //   f();
      // }
      //
      // It would be nice if Closure removed these nodes altogether, but
      // we can happily omit the call edges while issuing a warning.
      if (origCallSource == null) {
        Dbg.warn("Callsite on line " + curSiteNode.getLineno()
          + " is unreachable (source state doesn't exist): "
          + getCode(curSiteNode));
        continue;
      }
        
      State callDest = null;

      // We need a transition that actually reflects the call statement
      State newCallSource = new State();
      callStateMap.put(curSite, newCallSource);

      Exp s = JSExp.create(sm, curSiteStmt);
      ExpSymbol sym = new ExpSymbol(s);

      for (Function curFunc : targets) {
        // And now for the real call edge
        callDest = functionEntryMap.get(curFunc);
        assert callDest != null :
          "Cannot find call target entry state: " + curFunc.getName();
        Edge invokeEdge = makeCallEdge(sym, newCallSource, callDest);
        addEdge(invokeEdge);
      }

      // Mark the outgoing edge as representing the post-call.
      // I.e. this is after the whatever function has executed
      // and we're returning.
      List<Edge> oes = getOutEdges(origCallSource);
      for (Edge oe : oes) {
        ExpSymbol callsym = oe.getSymbol();
        assert callsym != null : "Null call symbol for edge: " + oe;
        callsym.setPostCall(true);
        // Associate this return node with the corresponding call.
        // Since they share a Node, we may need to use this link to
        // avoid duplicate runtime checks.
        callsym.link(sym);
      }

      // Link incoming edges to the new call source.
      List<Edge> incomingEdges = getInEdges(origCallSource);
      // %%% Do we need to leave the original edge if the callsite
      // may have extern targets?
      for (Edge e : incomingEdges) {
        removeEdge(e);
        Edge newEdge = makeEdge(e.getSymbol(), e.getSource(), newCallSource);
        addEdge(newEdge);
      }
    }
    outputCallTargets();
    return callStateMap;
  }
  */

  protected Map<Callsite,State> buildCallEdges() {
    // We maintain a map of callsites with the states which begin 
    // their actual call transition. These constitute the stack language
    // to indicate where return edges should flow to.
    // This loop, and specifically the inner loop through all potential
    // targets, can be a performance bottleneck.
    Map<Callsite,State> callStateMap = new LinkedHashMap<Callsite,State>();

    // A callsite may be embedded in a statement that contains multiple
    // callsites. We need a separate call edge for each callsite (for
    // each target). It's conservative for all these edges to flow back
    // to the original state.
    // %%% For now we rely on the preprocessing to break up callsites.
    //Map<Node,State> stmtStateMap = new LinkedHashMap<Node,State>();

    for (Callsite curSite : allCallsites) {
      //dumpCallsite(curSite);

      // Avoid repeated method calls by collecting some objects here.
      Node curSiteNode = curSite.getAstNode();
      Node curSiteStmt = NodeUtil.getEnclosingStatement(curSiteNode);
      String curSiteCode = getCode(curSiteNode);

      // There may be multiple potential targets, so we have to add 
      // edges for all of them.
      Set<Function> targets = new LinkedHashSet<Function>();
      boolean hasUserTargets = getPossibleUserTargets(curSite, targets);
      boolean hasExternTargets = getPossibleExternTargets(curSite);

      // No transformation is needed for definite extern calls.
      if (!hasUserTargets) continue;
      
      if (!hasExternTargets && targets.size() == 0) {
        // This may occur for calls on non-functions (exceptions).
        Dbg.warn("No possible targets found for call: " + getCode(curSiteNode));
        continue;
      }

      // Get the original source state of the call node.
      State callStmtSource = stateMap.get(curSiteStmt);
      // There should only be one out-edge currently.
      List<Edge> oes = getOutEdges(callStmtSource);
      if (oes.size() == 0) {
        Dbg.warn("No edge for call-site (expected if exception is guaranteed): " + getCode(curSiteNode));
        continue;
      }

      // There can be more than one out-edge if the call is within
      // a case statement or some more complex thing.
      // %%% This could probably be handled more elegantly.
      for (Edge oe : oes) {
        if (isExceptionEdge(oe))
          continue;

        ExpSymbol callStmtSymbol = oe.getSymbol();
        State originalDest = oe.getDestination();
        
        // The callsite may not have been added during the CFG building
        // process if it is unreachable. This occur for code like the
        // following.
        //
        // while (true) {
        //   break;
        //   f();
        // }
        //
        // It would be nice if Closure removed these nodes altogether, but
        // we can happily omit the call edges while issuing a warning.
        if (callStmtSource == null) {
          Dbg.warn("Callsite on line " + curSiteNode.getLineno()
            + " is unreachable (source state doesn't exist): "
            + getCode(curSiteNode));
          continue;
        }

        // We need a transition that actually reflects the call statement.
        State callEdgeSource = new State();
        callStateMap.put(curSite, callEdgeSource);

        // Generate a symbol consisting only of the callsite (and not
        // the containing statement).
        Exp callExp = JSExp.create(sm, curSiteNode);
        // %%% I'd like to have the call syntax on the edge, but then
        // %%% it's not easy to skip addl. queries for the node.
        //ExpSymbol callSymbol = new ExpSymbol(callExp);
        ExpSymbol callSymbol = new ExpSymbol(JSExp.createEmpty(sm));

        for (Function curFunc : targets) {
          // Create the NWA call edge.
          State callEntry = functionEntryMap.get(curFunc);
          assert callEntry != null :
            "Cannot find call target entry state: " + curFunc.getName();
          Edge invokeEdge = makeCallEdge(callSymbol, callEdgeSource, callEntry);
          addEdge(invokeEdge);
        }

        Edge newStmtEdge = makeEdge(callStmtSymbol, callStmtSource, callEdgeSource);
        addEdge(newStmtEdge);
        
        // For potential extern calls, leave in the original edge.
        if (!hasExternTargets) removeEdge(oe);

        // Mark the outgoing edge as representing the post-call. This is
        // after the function has executed and we're returning.
        ExpSymbol retSymbol = callStmtSymbol.copy();
        retSymbol.setPostCall(true);
        // Associate this return node with the corresponding call.
        // Since they share a Node, we may need to use this link to
        // avoid duplicate runtime checks.
        retSymbol.link(callStmtSymbol);

        State retState = new State();
        Edge postStmtEdge = makeEdge(retSymbol, retState, originalDest);
        addEdge(postStmtEdge);
    
        // Update the statement -> source-state mapping to return to.
        stateMap.put(curSiteStmt, retState);

        /*
        // Add a call and return from a symbolic extern function.
        if (hasExternTargets) {
          State externEntry = externCall.getSource();
          Edge externEdge = makeCallEdge(callSymbol, callEdgeSource, externEntry);
          addEdge(externEdge);
          // Either use the global return symbol, or create a function-
          // specific one, which can be useful for debugging.
          // %%% Abstract this (duplicated in buildReturnEdges).
          ExpSymbol retSym = globalReturn;
          if (retSym == null) {
            retSym = new ReturnSymbol(sm, null);
          }
          State externReturn = externCall.getDestination();
          Edge externReturnEdge = makeReturnEdge(retSym, externReturn, callEdgeSource, retState);
          addEdge(externReturnEdge);
        }
        */
      }
    }
    outputCallTargets();
    return callStateMap;
  }

  protected void buildReturnEdges(Map<Callsite,State> callStateMap) {
    // Now add all of the return edges
    for (Function curFunc : allFunctions) {

      // Get the return sites, and the calling functions
      List<State> returnStates = functionReturnMap.get(curFunc);

      // If there are no return sites for a function, it must be the case
      // that it always throws an uncaught exception, so connect this to
      // the end/loopback state for the program.
      // %%% See colorpicker.js for an example. Not sure if this is safe
      // %%% generally.
      if (returnStates == null) {
        // %%% Hack this for now.
        //Dbg.warn("Cannot find return site states: " + curFunc.getName());
        continue;
        /*
        Edge throwEdge = makeEdge(ExpSymbol.IMPLICIT_RETURN, curFunc. lastMainState, loopState);

        Edge retEdge = makeReturnEdge(ExpSymbol.IMPLICIT_RETURN, retSource, calledFrom, callDest);
        addEdge(retEdge);
        */
      }

      // Either use the global return symbol, or create a function-
      // specific one, which can be useful for debugging.
      ExpSymbol retSym = globalReturn;
      if (retSym == null) {
        retSym = new ReturnSymbol(sm, curFunc);
      }

      // Consult the callgraph.
      Set<Callsite> callingSites = new LinkedHashSet<Callsite>();
      callingSites.addAll(getAllPossibleCallsites(curFunc));

      // Add all those sites that we had to be conservative
      // about because the callgraph failed to provide the needed
      // information.
      callingSites.addAll(conservativeCalls); 

      // Loop through all the returns. We may have to alter the return
      // state collection, so we copy it first.
      List<State> retStates = new ArrayList<State>(returnStates);
      for (State retSource : retStates) {
        if (JAM.Opts.debug) {
          // Verify that there is an explicit return statement on each
          // return edge.
          List<Edge> inedges = getInEdges(retSource);
          boolean isExplicit = false;
          for (Edge re : inedges) {
            ExpSymbol insym = re.getSymbol();

            // Otherwise this should definitely be a ExpSymbol.
            ExpSymbol sym = re.getSymbol();
            Exp rsym = sym.getExp();
            if (rsym.isReturn() || rsym.isThrow()) {
              isExplicit = true;
              // Keep going to test following assertion.
            } else {
              assert false : "Something other than return on return edge: " + rsym.toCode();
            }
          }

          assert isExplicit : "Return edge without explicit return";
        }

        /*
        // Add an edge with an argumentless return as the symbol.
        if (!isExplicit) {
          State newRetSource = new State();
          Edge implicitRet = makeEdge(ExpSymbol.IMPLICIT_RETURN, retSource, newRetSource);
          addEdge(implicitRet);
          // Alter the return state collection to reflect the new edge.
          // %%% It would likely be cleaner to do this in
          // %%% JAMControlFlowGraph.
          returnStates.remove(retSource);
          retSource = newRetSource;
          returnStates.add(newRetSource);
        }
        */

        for (Callsite curSite : callingSites) {
          // If we haven't processed the node containing this call,
          // we have a problem.
          Node callNode = curSite.getAstNode();
          Node stmt = NodeUtil.getEnclosingStatement(callNode);
          State callDest = stateMap.get(stmt);
          if (callDest == null) {
            Dbg.warn("Cannot find callsite state: " + callNode);
            continue;
          }

          // Finally, add the return edge
          State calledFrom = callStateMap.get(curSite);

          // This will happen in the case of externs.
          if (calledFrom == null) break;

          Edge retEdge = makeReturnEdge(retSym, retSource, calledFrom, callDest);
          addEdge(retEdge);
        }
      }
    }
  }

  protected void buildCallbackEdges() {
    if (JAM.Opts.standAloneMode) {
      // Set of functions that may be invoked as event/callback handlers
      Collection<Function> callbackTargets = new LinkedHashSet<Function>();

      // Narrow down which functions may be the target of callbacks.
      for (Node cbexp : callbackExpressions) {
        // Callback setup functions can take a string to eval, or
        // a function as the first argument. The flattener should
        // have pulled out any function definitions and replaced
        // with a simple name.
        String funcname = getCode(cbexp);

        Set<Function> possibleTargets = callTargetMap.get(funcname);

        if (possibleTargets == null) {
          possibleTargets = getPossibleTargetsOfName(funcname);
        }
        
        // If we can identify the target function, just add it in
        // the callback loop. Otherwise, we have to add all
        // functions as potential targets.
        if (possibleTargets.size() > 0) {
          callbackTargets.addAll(possibleTargets);
        } else {
          // Avoid this if we can, because it's very conservative.
          callbackTargets = allFunctions;
          break;
        }
      }
      // Do the callback control flow overapproximation.
      if (callbackTargets.size() > 0) {
        insertCallbackLoop(callbackTargets);
      }
    } else {
      insertCallbackLoop(allFunctions);
    }
  }

  protected void buildInterproceduralEdges() {
    // Now build the interprocedural edges, adding call edges first.
    Map<Callsite,State> callStateMap = buildCallEdges();
    logSize("calls-added");

    buildReturnEdges(callStateMap);
    logSize("returns-added");

    buildCallbackEdges();
    logSize("callbacks-added");
  }

  // Actually build the control-flow graph.
  @Override
  protected void load() {
    // Initialize all other class-global data.
    handlerAssignments = new LinkedHashMap<String,List<Function>>();
    callbackExpressions = new LinkedHashSet<Node>();
    callTargetMap = new LinkedHashMap<String,Set<Function>>();

    loadCallGraph();

    if (JAM.Opts.countNodes)
      FileUtil.writeToMain("allFunctions:" + allFunctions.size() + "\nallCallsites:" + allCallsites.size() + "\n", JAMConfig.INFO_FILENAME, true);

    // Collect event handler information.
    Node root = sm.getRootNode();
    Compiler comp = sm.getCompiler();
    NodeTraversal.traverse(comp, root, this);

    Node externs = sm.getExterns();
    JAMControlFlowGraph cfg =
      new JAMControlFlowGraph(this, sm, externs, root);

    buildIntraproceduralEdges(cfg);
    buildInterproceduralEdges();

    // CheckManager may be null if we're just preprocessing and exiting.
    if (cm != null) {
      // Load existing checks.
      cm.loadExistingChecks();
    }
  }

}


