package edu.wisc.cs.jam;

import java.util.List;
import java.util.ArrayList;

public abstract class RelationDomain {

  private List<Predicate> vars;

  protected void setVars(List<Predicate> preds) {
    vars = new ArrayList<Predicate>(preds);
  }

  public abstract Relation getFalseRelation();
  public abstract Relation getTrueRelation();
  public abstract Relation getIdRelation();

  public int getSize() {
    return vars.size();
  }
  /*
  public void addVar(Predicate p) {
    if (vars == null)
      vars = new ArrayList<Predicate>();
    vars.add(p);
  }
  */

  public List<Predicate> getVars() {
    return new ArrayList<Predicate>(vars);
  }
  
  public Predicate getVar(int idx) {
    return getVars().get(idx); 
  }

  public int getIdx(Predicate var) {
    return getVars().indexOf(var);
  }

  public abstract void reset();

  public abstract void outputAll();
}
