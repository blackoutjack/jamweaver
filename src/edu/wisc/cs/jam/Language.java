package edu.wisc.cs.jam;

public interface Language {
  
  // %%% Shouldn't need this.
  public abstract Semantics newSemantics(SourceFile src);

  public abstract Semantics semantics();
  public abstract PolicyLanguage policyLanguage();

  public abstract SourceFile newSourceFile(String srcPath);

  // %%% Move these into SourceFile.
  public abstract CheckManager newCheckManager(SourceFile src, Policy pol);
  public abstract ControlAutomaton newControlAutomaton(SourceFile src, CheckManager cm);
}
