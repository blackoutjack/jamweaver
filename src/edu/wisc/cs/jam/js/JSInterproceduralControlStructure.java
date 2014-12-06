package edu.wisc.cs.jam.js;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.LinkedHashMap;
import java.util.Set;
import java.util.LinkedHashSet;

import edu.wisc.cs.automaton.Automaton.Edge;
import edu.wisc.cs.automaton.State;

import edu.wisc.cs.jam.JAM;
import edu.wisc.cs.jam.Traversal;
import edu.wisc.cs.jam.Traversal.Traverser;
import edu.wisc.cs.jam.ExpSymbol;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.CheckManager;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.ReturnSymbol;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.CallGraph.Callsite;
import edu.wisc.cs.jam.CallGraph.Function;

public class JSInterproceduralControlStructure extends JSControlStructure implements Traverser {

  // Maps callsite references to functions they might target
  private Map<String,Set<Function>> callTargetMap;

  public JSInterproceduralControlStructure(SourceManager sm, CheckManager cman) {
    super(sm, cman);
  }

  // Clear all accumulated state to free memory.
  @Override
  protected void clearTemporaryState() {
    super.clearTemporaryState();
    callTargetMap = null;
  }

  @Override
  public boolean shouldTraverse(Traversal t, Exp e, Exp parent) {
    return true;
  }

  @Override
  public void visit(Traversal t, Exp e, Exp parent) {

    // Find all the call target assignments that might occur in the
    // program and populate callTargetMap with the results. Only 
    // consider normal assignment, not +=, -=, etc., since those can't
    // result in a function value.
    if (e.isAssign() || ExpUtil.isVarInitializer(e)) {
      Exp lhs = e.cloneAssignLHS();
      Exp rhs = e.cloneAssignRHS();

      if (rhs.isName()) {
        String l = lhs.toCode();
        String r = rhs.toCode();

        Set<Function> targets = getPossibleTargetsOfName(r);
        if (targets.size() > 0) {
          Set<Function> targetsList = callTargetMap.get(l);
          if (targetsList == null) {
            targetsList = new LinkedHashSet<Function>();
            callTargetMap.put(l, targetsList);
          }
          targetsList.addAll(targets);
        }
      } else if (rhs.is(JSExp.OBJECTLIT)) {
        for (int i=0; i<rhs.getChildCount(); i++) {
          Exp prop = rhs.getChild(i);
          Exp val = prop.getChild(0);

          if (!val.isName()) continue;

          String l = prop.toCode();
          // Strip the quotes off of the property name.
          l = l.substring(1, l.length()-1);
          String r = val.toCode();

          List<Function> targets = new ArrayList<Function>(getPossibleTargetsOfName(r));
          if (targets.size() > 0) {

            // String of the form obj.prop, where obj is the
            // lhs of the assignment, will identify the call.
            String objkey = lhs.toCode() + "." + l;
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
      Set<Function> targets = callTargetMap.get(curSite.getExp().getChild(0).toCode());
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

  public void dumpCallsite(Callsite cs) {
    Exp ce = cs.getExp();
    StringBuilder sb = new StringBuilder();
    sb.append("Callsite: ");
    sb.append(ce.toCode());
    sb.append(", position: ");
    sb.append(ce.getSourceLine());
    sb.append(":");
    sb.append(ce.getSourceChar());
    sb.append(", hasExternTargets: ");
    sb.append(cs.hasExternTarget());
    sb.append(", hasUnknownTargets: ");
    sb.append(cs.hasUnknownTarget());
    Dbg.err(sb.toString());
  }

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
    //Map<Exp,State> stmtStateMap = new LinkedHashMap<Exp,State>();

    for (Callsite curSite : allCallsites) {
      //dumpCallsite(curSite);

      // Avoid repeated method calls by collecting some objects here.
      Exp curSiteExp = curSite.getExp();
      Exp curSiteStmt = ExpUtil.getEnclosingStatement(curSiteExp);
      String curSiteCode = curSiteExp.toCode();

      // There may be multiple potential targets, so we have to add 
      // edges for all of them.
      Set<Function> targets = new LinkedHashSet<Function>();
      boolean hasUserTargets = getPossibleUserTargets(curSite, targets);
      boolean hasExternTargets = curSite.hasExternTarget();

      // No transformation is needed for definite extern calls.
      if (!hasUserTargets) continue;
      
      if (!hasExternTargets && targets.size() == 0) {
        // This may occur for calls on non-functions (exceptions).
        Dbg.warn("No possible targets found for call: " + curSiteCode);
        continue;
      }

      // Get the original source state of the call node.
      State callStmtSource = stateMap.get(curSiteStmt);
      // There should only be one out-edge currently.
      List<Edge> oes = getOutEdges(callStmtSource);
      if (oes.size() == 0) {
        Dbg.warn("No edge for call-site (expected if exception is guaranteed): " + curSiteCode);
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
          Dbg.warn("Callsite on line " + curSiteExp.getSourceLine()
            + " is unreachable (source state doesn't exist): "
            + curSiteCode);
          continue;
        }

        // We need a transition that actually reflects the call statement.
        State callEdgeSource = new State();
        callStateMap.put(curSite, callEdgeSource);

        // Generate a symbol consisting only of the callsite (and not
        // the containing statement).
        // %%% I'd like to have the call syntax on the edge, but then
        // %%% it's not easy to skip addl. queries for the node.
        //ExpSymbol callSymbol = new ExpSymbol(curSiteExp);
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
        // Since they share an Exp, we may need to use this link to
        // avoid duplicate runtime checks.
        retSymbol.link(callStmtSymbol);

        State retState = new State();
        Edge postStmtEdge = makeEdge(retSymbol, retState, originalDest);
        addEdge(postStmtEdge);
    
        // Update the statement -> source-state mapping to return to.
        stateMap.put(curSiteStmt, retState);
      }
    }
    return callStateMap;
  }

  protected void buildReturnEdges(Map<Callsite,State> callStateMap) {
    // Now add all of the return edges
    for (Function curFunc : allFunctions) {

      // Get the return site, and the calling functions
      State returnState = functionReturnMap.get(curFunc);

      // If there are no return sites for a function, it must be the case
      // that it always throws an uncaught exception, so connect this to
      // the end/loopback state for the program.
      // %%% See colorpicker.js for an example. Not sure if this is safe
      // %%% generally.
      if (returnState == null) {
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

      if (JAM.Opts.debug) {
        // Verify that there is an explicit return statement on each
        // return edge.
        List<Edge> inedges = getInEdges(returnState);
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

      for (Callsite curSite : callingSites) {
        // If we haven't processed the node containing this call,
        // we have a problem.
        Exp callExp = curSite.getExp();
        Exp stmt = ExpUtil.getEnclosingStatement(callExp);
        State callDest = stateMap.get(stmt);
        if (callDest == null) {
          Dbg.warn("Cannot find callsite state: " + callExp);
          continue;
        }

        // Finally, add the return edge
        State calledFrom = callStateMap.get(curSite);

        // This will happen in the case of externs.
        if (calledFrom == null) break;

        Edge retEdge = makeReturnEdge(retSym, returnState, calledFrom, callDest);
        addEdge(retEdge);
      }
    }
  }

  protected void buildCallbackEdges() {
    // %%% Try to statically limit the set of functions that callbacks
    // %%% can target.
    insertCallbackLoop(allFunctions);
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
    callTargetMap = new LinkedHashMap<String,Set<Function>>();

    loadCallGraph();

    FileUtil.writeToMain("allFunctions:" + allFunctions.size() + "\nallCallsites:" + allCallsites.size() + "\n", JAMConfig.INFO_FILENAME, true);

    // Collect event handler information.
    sm.traverse(sm.getRoot(), this);

    buildIntraproceduralEdges();

    // Populate |externCalls| and |conservativeCalls|.
    for (Callsite cs : allCallsites) {
      getAllPossibleTargets(cs);
    }
    outputCallTargets();
    buildInterproceduralEdges();

    // CheckManager may be null if we're just preprocessing and exiting.
    if (cm != null) {
      // Load existing checks.
      cm.loadExistingChecks();
    }
  }

}


