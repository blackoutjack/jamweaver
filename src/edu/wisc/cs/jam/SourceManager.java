package edu.wisc.cs.jam;

import java.util.List;

import edu.wisc.cs.jam.CallGraph.Function;
import edu.wisc.cs.jam.Traversal.Traverser;

public interface SourceManager {
  public abstract void saveSources(String dirname);
  public abstract void addSource(Source fl);
  public abstract void doneAddingSources();
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
  public abstract String codeFromExp(Exp e);
  public abstract Exp getRoot();
  public abstract Exp getExterns();
  public abstract void traverse(Exp root, Traverser t);
  public abstract void close();
}
