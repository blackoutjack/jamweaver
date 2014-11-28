
package com.google.javascript.jscomp;

import com.google.javascript.jscomp.ControlFlowGraph;
import com.google.javascript.jscomp.ControlFlowGraph.Branch;
import com.google.javascript.jscomp.ControlFlowAnalysis;
import com.google.javascript.jscomp.graph.DiGraph.DiGraphNode;
import com.google.javascript.jscomp.graph.DiGraph.DiGraphEdge;
import com.google.javascript.rhino.Node;
import com.google.javascript.rhino.Token;

import java.util.Queue;
import java.util.ArrayDeque;
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

import edu.wisc.cs.automaton.State;
import edu.wisc.cs.automaton.Automaton.Edge;
import edu.wisc.cs.jam.ControlStructure;
import edu.wisc.cs.jam.ExpSymbol;
import edu.wisc.cs.jam.FunctionEntrySymbol;
import edu.wisc.cs.jam.BranchSymbol;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.Dbg;

import edu.wisc.cs.jam.js.JSExp;
import edu.wisc.cs.jam.CallGraph.Function;

// Provide an interface to package-protected Closure classes.
public class JAMControlFlowGraph {
  private ControlStructure caut;
  private SourceManager sm;

  private Map<Exp,State> stateMap;
  private Map<Function,State> functionEntryMap;
  private Map<Function,State> functionReturnMap;

  public JAMControlFlowGraph(ControlStructure c, SourceManager src) {
    caut = c;
    sm = src;

    stateMap = new HashMap<Exp,State>();
    functionEntryMap = new HashMap<Function,State>();
    functionReturnMap = new HashMap<Function,State>();
  }

  public Map<Exp,State> getStateMap() {
    // Don't copy, given the friendly relationship with ControlStructure.
    return stateMap;
  }

  public Map<Function,State> getFunctionEntryMap() {
    // Don't copy, given the friendly relationship with ControlStructure.
    return functionEntryMap;
  }

  public Map<Function,State> getFunctionReturnMap() {
    // Don't copy, given the friendly relationship with ControlStructure.
    return functionReturnMap;
  }

  protected State loadDestinationState(Function f, Exp destNode) {
    // Create a state for the destination node
    State destState = stateMap.get(destNode);
    if (destState == null) {
      destState = new State();
      stateMap.put(destNode, destState);
    }

    return destState;
  }

  protected void mapReturnState(Function f, State r) {
    assert !functionReturnMap.containsKey(f) : "Function has multiple return states: " + f.getName();
    functionReturnMap.put(f, r);
  }

  protected void processStatement(Function f, State srcState, ExpSymbol sym, State destState) {
    // Just add an edge from srcState to destState,
    // with the code location of the source node as a label.
    caut.addEdge(caut.makeEdge(sym, srcState, destState));
  }

  public void processEntryNode(Function f, DiGraphNode<Node,Branch> entry, Worklist worklist) {
    // Find the entry node's outgoing edge that doesn't point to the 
    // exit node.
    DiGraphNode<Node,Branch> dest = null;
    for (DiGraphEdge<Node,Branch> outEdge : entry.getOutEdges()) {
      // Skip synthetic blocks.
      if (outEdge.getValue() != Branch.SYN_BLOCK) {
        // There's only one successor, so break after it's found.
        dest = outEdge.getDestination();
        break;
      }
    }

    // The initial state of this function's control automaton
    State entryState = new State();
    functionEntryMap.put(f, entryState);

    // Use some special logic if this is the global function.
    if (f.isMain()) {
      // The first state of the artificial {main} function is the
      // automaton's only initial state.
      entryState.setInitial(true);

      // Traverse the graph one more step to get to the program that we're
      // actually going to be analyzing.
      List<DiGraphEdge<Node,Branch>> oes = dest.getOutEdges();
      assert oes.size() == 1 : "Corrupt parent entry node for function: " + f.getName();
      dest = oes.get(0).getDestination();
    } else {
      // For functions other than the global one, the first node is
      // always just a BLOCK wrapper, so skip that.
      assert dest.getValue().isBlock();
      List<DiGraphEdge<Node,Branch>> boes = dest.getOutEdges();
      assert boes.size() == 1 : "Corrupted function block symbol: " + dest;
      dest = boes.get(0).getDestination();
    }

    ExpSymbol sym = new FunctionEntrySymbol(f, sm);
    Node destNode = dest.getValue();

    if (destNode == null) {
      // This indicates that we have an empty function, so add the
      // edges and the return state and be done with it.
      State destState = new State();
      processStatement(f, entryState, sym, destState);

      //State retState = new State();
      //processStatement(f, destState, ExpSymbol.IMPLICIT_RETURN, retState);

      // Establish a mapping between a function and a return node.
      mapReturnState(f, destState);
    } else {
      // The node may be a BLOCK, if the function begins with a labeled
      // block. See flickr.js. It should not be a SCRIPT though.
      // %%% What happens to the LABEL node?
      String fname = f.getName();
      Exp destExp = JSExp.create(sm, destNode);
      assert !destExp.isScript() || fname.equals("{main}")
        : "Script node found at function entry: " + f.getName()
        + " / " + destExp + " / " + destExp.toCode();

      // The normal case where we have more statements to process
      State destState = loadDestinationState(f, destExp);
      processStatement(f, entryState, sym, destState);
      worklist.add(dest);
    }
  }

  // Builds an NWA fragment corresponding to the local
  // code rooted at f.
  // @return the entry node to this function
  public void addFunction(Function f) {
    // Get the CFG for this function.
    ControlFlowGraph<Node> cfg = sm.getCFG(f);

    Node root = ((JSExp)f.getExp()).getNode();
    DiGraphNode<Node,Branch> entryNode = cfg.getDirectedGraphNode(root); 

    assert entryNode != null : "Null entry node for function " + f.getName();

    // Keep track of this subtree's processing state with a worklist.
    Worklist worklist = new Worklist();

    // Add the function entry pseudo-statement to the automaton.
    processEntryNode(f, entryNode, worklist);
    // Don't overwrite the return state that was previously created.
    if (worklist.isEmpty()) return;

    // Establish a mapping between a function and a return node.
    State returnState = new State();
    mapReturnState(f, returnState);

    // When the worklist is empty, we will have processed the global 
    // code entirely.
    while (!worklist.isEmpty()) {

      // Find a node that we haven't processed yet.
      DiGraphNode<Node,Branch> curNode = worklist.getNext();
      assert curNode != null : "Graph node is null";

      // Get the source node, make a new NWA state (if necessary).
      Node source = curNode.getValue();
      assert source != null : "Source node is null: " + curNode;

      Exp exp = null;
      ExpSymbol sym = null;
      if (source.isScript() || source.isBlock()) {
        // Use empty nodes to represent blocks.
        exp = JSExp.create(sm, source);
        sym = new ExpSymbol(JSExp.createEmpty(sm));
      } else {
        exp = JSExp.create(sm, source);
        sym = new ExpSymbol(exp);
      }

      State srcState = stateMap.get(exp);
      // Assuming all nodes are reachable from the entry, this
      // assertion should hold.
      assert srcState != null : "Source state is null: " + source;

      List<DiGraphEdge<Node,Branch>> oes = curNode.getOutEdges();

      if (source.isThrow() && oes.size() == 0) {
        // This is the case when a throw statement ends a function.
        // %%% Route it to the implicit return node for now.
        State destState = returnState;
        caut.addEdge(caut.makeExceptionEdge(sym, srcState, destState));
      }

      // Add each of the outgoing edges of the 
      // current node to the worklist.
      for (DiGraphEdge<Node,Branch> curEdge : oes) {

        // Get the destination node
        DiGraphNode<Node,Branch> eDest = curEdge.getDestination();

        State destState = null;
        if (cfg.isImplicitReturn(eDest)) {
          // Add a synthetic edge to the implicit return state.
          destState = returnState;

          if (!source.isReturn()) {
            // This happens in a |finally| of a |try| without a |catch|.
            // It also occurs with last statement of the main function.

            // Add a regular edge for the statement.
            State midState = new State();
            caut.addEdge(caut.makeEdge(sym, srcState, midState));
            
            // Alter |sym| so that the implicit return is explicit.
            // %%% This creates an Exp without a parent!
            sym = new ExpSymbol(JSExp.create(sm, new Node(Token.RETURN)));
            srcState = midState;
          }
        } else {

          // Add the destination state to the worklist if necessary.
          worklist.add(eDest);

          // Create a state for the destination node
          Node dest = eDest.getValue();
          Exp deste = JSExp.create(sm, dest);
          destState = stateMap.get(deste);
          if (destState == null) {
            destState = new State();
            stateMap.put(deste, destState);
          }
        }

        // If this edge has a condition on it...
        if (curEdge.getValue().isConditional()) {
          assert exp.isControl();

          // Then we need to add an additional edge to the NWA that
          // reflects the assumption.
          boolean branch = curEdge.getValue() == Branch.ON_TRUE;
          State midState = new State();
          
          Exp cond = exp.getCondition();
          assert cond != null : "Branch without a condition: " + exp.toString();

          // Add an edge from the condition to the branch and from
          // the branch to the destination.
          caut.addEdge(caut.makeEdge(sym, srcState, midState));
          BranchSymbol bsym = new BranchSymbol(cond, branch);
          caut.addEdge(caut.makeEdge(bsym, midState, destState));

        } else {

          // Otherwise just add an edge from srcState to destState,
          // with the code location of the source node as a label.
          if (curEdge.getValue() == Branch.ON_EX) {
            caut.addEdge(caut.makeExceptionEdge(sym, srcState, destState));
          } else {
            caut.addEdge(caut.makeEdge(sym, srcState, destState));
          }
        }
      }
    }
  }

  class Worklist {
    Queue<DiGraphNode<Node,Branch>> todo;
    Set<DiGraphNode<Node,Branch>> history;

    public Worklist() {
      todo = new ArrayDeque<DiGraphNode<Node,Branch>>();
      history = new HashSet<DiGraphNode<Node,Branch>>(); 
    }

    public void add(DiGraphNode<Node,Branch> node) {
      // Only process each node once;
      if (history.contains(node)) return;

      todo.add(node);
      history.add(node);
    }

    public DiGraphNode<Node,Branch> getNext() {
      return todo.poll();
    }

    public boolean isEmpty() {
      return todo.peek() == null;
    }
  }
}
  
