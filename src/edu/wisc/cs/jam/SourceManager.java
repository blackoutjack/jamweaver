package edu.wisc.cs.jam;

import com.google.javascript.jscomp.CallGraph;
import com.google.javascript.jscomp.Compiler;
import com.google.javascript.jscomp.CompilerPass;
import com.google.javascript.jscomp.CompilerOptions;
import com.google.javascript.jscomp.NodeTraversal.Callback;
import com.google.javascript.rhino.Node;

import com.google.javascript.jscomp.JAMControlFlowGraph;

import java.util.List;

public interface SourceManager {
  public abstract void saveSources(String dirname);
  public abstract void addSource(Source fl);
  public abstract void preprocess();
  // %%% Remove the need for ControlAutomaton.
  public abstract void postprocess(ControlAutomaton c, CheckManager cm);
  public abstract void finalize();
  public abstract String getType(String n);
  public abstract void setType(String n, String typ);
  public abstract boolean propagateType(String srcName, String destName);

  public abstract CallGraph getCallGraph();
  public abstract void reportCodeChange();

  // %%% Remove/modify
  public abstract Exp expFromCode(String code);
  public abstract Node nodeFromCode(String code);
  public abstract String codeFromNode(Node n);
  public abstract Node getRootNode();
  public abstract Node getExterns();

  // Do away with this once obsolete.
  public Compiler getCompiler();

}
