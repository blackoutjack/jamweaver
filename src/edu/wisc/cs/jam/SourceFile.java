package edu.wisc.cs.jam;

import com.google.javascript.jscomp.CallGraph;
import com.google.javascript.jscomp.Compiler;
import com.google.javascript.jscomp.CompilerPass;
import com.google.javascript.jscomp.CompilerOptions;
import com.google.javascript.jscomp.NodeTraversal.Callback;
import com.google.javascript.rhino.Node;

import com.google.javascript.jscomp.JAMControlFlowGraph;

import java.util.List;

public interface SourceFile {
  public abstract void preprocess();
  // %%% Remove the need for ControlAutomaton.
  public abstract void postprocess(ControlAutomaton c, CheckManager cm);
  public abstract void finalize();
  public abstract String getType(String n);
  public abstract String getFilename();
  public void update();

  public abstract CallGraph getCallGraph();
  public abstract void reportCodeChange();

  // %%% Remove/modify
  public abstract Node nodeFromCode(String code);
  public abstract String codeFromNode(Node n);
  public abstract Node getRootNode();
  public abstract Node getExterns();

  // Do away with this once obsolete.
  public Compiler getCompiler();

}
