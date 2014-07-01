package edu.wisc.cs.jam;

import java.util.Set;

public abstract class PolicyLanguage {
  
  // Utility methods.
  public abstract PolicyType getPolicyEdgeType(Policy.Edge edge);
  public abstract boolean isWild(Exp e);
  public abstract boolean isNativeLocation(Exp e);
  public abstract boolean findPropertiesOfInterest(Predicate p, Set<String> out);
  public abstract boolean findStringsOfInterest(Predicate p, Set<String> out);
  public abstract boolean findNamesOfInterest(Predicate p, Set<String> out);
}
