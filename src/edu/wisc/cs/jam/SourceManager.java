package edu.wisc.cs.jam;

import com.google.javascript.jscomp.ControlFlowGraph;
import com.google.javascript.jscomp.NodeTraversal.Callback;
import com.google.javascript.jscomp.Compiler;
import com.google.javascript.rhino.Node;

import java.util.List;

import edu.wisc.cs.jam.CallGraph.Function;

public interface SourceManager {
  public abstract void saveSources(String dirname);
  public abstract void addSource(Source fl);
  public abstract void preprocess();
  // %%% Remove the need for ControlAutomaton.
  public abstract void postprocess(CheckManager cm);
  public abstract void finalize();
  public abstract String getType(String n);
  public abstract void setType(String n, String typ);
  public abstract boolean propagateType(String srcName, String destName);

  public abstract void setControlAutomaton(ControlAutomaton c);
  public abstract CallGraph getCallGraph();
  public abstract void reportCodeChange();
  public abstract List<String> getPossibleCallTargets(Exp e);

  // %%% Remove/modify
  public abstract Exp expFromCode(String code);
  public abstract String codeFromNode(Node n);
  public abstract Exp getRoot();
  public abstract Exp getExterns();
  public abstract void traverse(Exp root, Callback cb);
  public abstract ControlFlowGraph<Node> getCFG(Function f);
}
