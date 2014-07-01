package edu.wisc.cs.automaton;

import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.util.HashSet;

public class Symbol {

  private static int NEXT_ID = -1;

  public static Symbol EPSILON;

  static {
    EPSILON = new Symbol();
    EPSILON.setEpsilon(true);
  }

  private int id;
  private boolean isepsilon;

  public Symbol() {
    id = ++NEXT_ID;
  }

  public Symbol(Symbol orig) {
    this();  
    setEpsilon(orig.isEpsilon());
  }

  public int getId() {
      return id;
  }

  public void setEpsilon(boolean eps) {
    isepsilon = eps;
  }
  
  public boolean isEpsilon() {
    return isepsilon;
  }

  public String serialize() {
    return "" + id;
  }

  @Override
  public boolean equals(Object o) {
    // Given the scheme of assigning a unique Id to each new Symbol,
    // this is appropriate. May want to override in subclasses to
    // determine equality based on content.
    return this == o;
  }

  @Override
  public String toString() {
    if (isEpsilon()) return "<epsilon>";
    return "" + getId();
  }

}

