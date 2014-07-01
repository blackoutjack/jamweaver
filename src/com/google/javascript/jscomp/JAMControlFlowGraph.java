
package com.google.javascript.jscomp;

import com.google.javascript.jscomp.Compiler;
import com.google.javascript.jscomp.ControlFlowGraph;
import com.google.javascript.jscomp.ControlFlowGraph.Branch;
import com.google.javascript.jscomp.ControlFlowAnalysis;
import com.google.javascript.jscomp.CallGraph.Function;
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
import edu.wisc.cs.jam.SourceFile;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.Dbg;

import edu.wisc.cs.jam.js.JSExp;
import edu.wisc.cs.jam.js.NodeUtil;

// Provide an interface to package-protected Closure classes.
public class JAMControlFlowGraph {
  private ControlStructure caut;
  //private ControlFlowGraph<Node> cfg;
  private SourceFile sourceFile;

  private Map<Node,State> stateMap;
  private Map<Function,State> functionEntryMap;
  private Map<Function,List<State>> functionReturnMap;

  private Node externs;

  public JAMControlFlowGraph(ControlStructure c, SourceFile src, Node externs, Node root) {
    caut = c;
    sourceFile = src;
    this.externs = externs;

    stateMap = new HashMap<Node,State>();
    functionEntryMap = new HashMap<Function,State>();
    functionReturnMap = new HashMap<Function,List<State>>();

    //ControlFlowAnalysis cfa = new ControlFlowAnalysis(sourceFile.getCompiler(), true, false);
    //cfa.process(externs, root);
    //cfg = cfa.getCfg();
  }

  public Map<Node,State> getStateMap() {
    // Don't copy, given the friendly relationship with ControlStructure.
    return stateMap;
  }

  public Map<Function,State> getFunctionEntryMap() {
    // Don't copy, given the friendly relationship with ControlStructure.
    return functionEntryMap;
  }

  public Map<Function,List<State>> getFunctionReturnMap() {
    // Don't copy, given the friendly relationship with ControlStructure.
    return functionReturnMap;
  }

  protected State loadDestinationState(Function f, Node destNode) {
    // Create a state for the destination node
    State destState = stateMap.get(destNode);
    if (destState == null) {
      destState = new State();
      stateMap.put(destNode, destState);
    }

    return destState;
  }

  protected void mapReturnState(Function f, State r) {
    List<State> returns = functionReturnMap.get(f);
    if (returns == null) {
      returns = new ArrayList<State>();
      functionReturnMap.put(f, returns);
    }
    returns.add(r);
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
      if (outEdge.getValue() == Branch.SYN_BLOCK) continue;
      // There's only one successor, so break after it's found.
      dest = outEdge.getDestination();
      break;
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
      assert(oes.size() == 1) : "Corrupt entry node for function: " + f.getName();
      dest = oes.get(0).getDestination();
    } else {
      // For functions other than the global one, the first node is
      // always just a BLOCK wrapper, so skip that.
      List<DiGraphEdge<Node,Branch>> boes = dest.getOutEdges();
      assert boes.size() == 1 : "Corrupted function block symbol: " + dest;
      dest = boes.get(0).getDestination();
    }

    ExpSymbol sym = new FunctionEntrySymbol(f, sourceFile);
    Node destNode = dest.getValue();

    if (destNode == null) {
      assert false : "Empty function: " + f.getName();
      // This indicates that we have an empty function, so add the
      // edges and the return state and be done with it.
      State destState = new State();
      processStatement(f, entryState, sym, destState);

      //State retState = new State();
      //processStatement(f, destState, ExpSymbol.IMPLICIT_RETURN, retState);

      // Establish a mapping between a function and a return node.
      mapReturnState(f, destState);
    } else {
      // The normal case where we have more statements to process
      State destState = loadDestinationState(f, destNode);
      processStatement(f, entryState, sym, destState);
      worklist.add(dest);
    }
  }

  // Builds an NWA fragment corresponding to the local
  // code rooted at f.
  // @return the entry node to this function
  public void addFunction(Function f) {
    
    // Get the CFG for this function.
    Node root = f.getAstNode();
    ControlFlowAnalysis cfa = new ControlFlowAnalysis(sourceFile.getCompiler(), false, false);
    cfa.process(externs, root);
    ControlFlowGraph<Node> cfg = cfa.getCfg();

    DiGraphNode<Node,Branch> entryNode =
      cfg.getDirectedGraphNode(root); 

    assert entryNode != null : "Null entry node for function " + f.getName();
    /*
    if (entryNode == null) {
      needToRevert
      ControlFlowAnalysis cfa = new ControlFlowAnalysis(sourceFile.getCompiler(), true, false);
      cfa.process(externs, fnode);
      cfg = cfa.getCfg();
    }
    */

    // Keep track of this subtree's processing state with a worklist.
    Worklist worklist = new Worklist();

    // Add the function entry pseudo-statement to the automaton.
    processEntryNode(f, entryNode, worklist);
    State returnState = new State();

    // When the worklist is empty, we will have processed the global 
    // code entirely.
    while (!worklist.isEmpty()) {

      // Find a node that we haven't processed yet.
      DiGraphNode<Node,Branch> curNode = worklist.getNext();
      assert curNode != null : "Graph node is null";

      // Get the source node, make a new NWA state (if necessary).
      Node source = curNode.getValue();
      assert source != null : "Source node is null: " + curNode;

      State srcState = stateMap.get(source);
      // Assuming all nodes are reachable from the entry, this
      // assertion should hold.
      assert srcState != null : "Source state is null: " + source;

      List<DiGraphEdge<Node,Branch>> oes = curNode.getOutEdges();

      /*
      if (source.getType() == Token.BLOCK || source.getType() == Token.EMPTY) {
        // Skip over BLOCK wrappers by altering stateMap without
        // creating an automaton edge.
        assert oes.size() <= 1 : "Block symbol with > 1 child: " + source;
        if (oes.size() > 0) {
          DiGraphNode<Node,Branch> dest = oes.get(0).getDestination();
          Node destNode = dest.getValue();
          // A null |destNode| indicates an empty block.
          if (destNode != null) {
            stateMap.put(destNode, srcState);
            worklist.add(dest);
          }
        }
        continue;
      }
      */

      Exp s = JSExp.create(sourceFile, source);
      ExpSymbol sym = new ExpSymbol(s);

      if (source.isThrow() && oes.size() == 0) {
        // This is the case when a throw statement ends a function.
        // %%% Route it to the implicit return node for now.
        State destState = returnState;
        // Establish a mapping between a function and a return node.
        mapReturnState(f, destState);
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
            sym = new ExpSymbol(JSExp.create(sourceFile, new Node(Token.RETURN)));
            srcState = midState;
          }

          // Establish a mapping between a function and a return node.
          mapReturnState(f, destState);
        } else {

          // Add the destination state to the worklist if necessary.
          worklist.add(eDest);

          // Create a state for the destination node
          Node dest = eDest.getValue();
          destState = stateMap.get(dest);
          if (destState == null) {
            destState = new State();
            stateMap.put(dest, destState);
          }
        }

        // If this edge has a condition on it...
        if (curEdge.getValue().isConditional()) {
          assert s.isControl();

          // Then we need to add an additional edge to the NWA that
          // reflects the assumption.
          boolean branch = curEdge.getValue() == Branch.ON_TRUE;
          State midState = new State();
          
          Exp cond = s.getCondition();
          assert cond != null : "Branch without a condition: " + s.toString();

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
  
