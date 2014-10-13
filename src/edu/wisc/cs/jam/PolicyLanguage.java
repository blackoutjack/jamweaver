package edu.wisc.cs.jam;

import java.util.Set;

public abstract class PolicyLanguage {
  
  // Utility methods.
  public abstract PredicateType getPredicateType(Exp e);
  public abstract PredicateType getPredicateType(Predicate p);
  public abstract boolean isWild(Exp e);
  public abstract boolean isNativeLocation(Exp e);
  public abstract boolean findPropertiesOfInterest(Predicate p, Set<String> out);
  public abstract boolean findStringsOfInterest(Predicate p, Set<String> out);
  public abstract boolean findNamesOfInterest(Predicate p, Set<String> out);
}
