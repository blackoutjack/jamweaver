package edu.wisc.cs.jam;

import java.util.List;

public interface Language {
  
  // %%% Shouldn't need this.
  public abstract Semantics newSemantics(SourceManager sm);

  public abstract Semantics semantics();
  public abstract PolicyLanguage policyLanguage();

  public abstract SourceManager newSourceManager(List<String> srcPaths);

  // %%% Move these into SourceManager.
  public abstract CheckManager newCheckManager(SourceManager sm, Policy pol);
  public abstract ControlAutomaton newControlAutomaton(SourceManager sm, CheckManager cm);
}
