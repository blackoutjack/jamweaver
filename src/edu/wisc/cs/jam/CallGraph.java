package edu.wisc.cs.jam;

import java.util.Set;

public interface CallGraph {
  
  public interface Callsite {
    public Set<Function> getPossibleTargets();
    public Set<Exp> getPossibleExternTargets();
    public boolean hasUnknownTarget();
    public boolean hasExternTarget();
    public Exp getExp();
  }

  public interface Function {
    public Exp getExp();
    public String getName();
    public Set<Callsite> getCallsitesPossiblyTargetingFunction();
    public boolean isMain();
  }

  public Set<Function> getAllFunctions();
  public Set<Callsite> getAllCallsites();
  public Callsite getCallsiteForExp(Exp e);
  public Function getFunctionForExp(Exp e);
  public Function getMainFunction();
}
