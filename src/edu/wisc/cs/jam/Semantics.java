
package edu.wisc.cs.jam;

import java.util.List;

public interface Semantics {
	
  public boolean query(Clause c, boolean onError);
	public List<Boolean> batchQuery(List<Clause> clauses, List<Clause> prereqs, boolean onError);
	public List<Boolean> batchQuery(List<Clause> clauses, boolean onError);
	public List<String> sentinelQuery(Clause c);
	public Predicate loadPrerequisite(Policy pol, Predicate pred);
	public Predicate getConditionPredicate(String cond);
	public Clause getParseClause(ExpSymbol sym);
	public Clause getTraceClause(ExpSymbol sym);
	public Clause getPreSentinelClause(ExpSymbol sym);
	public Clause getPostSentinelClause(ExpSymbol sym);
  public void loadFunctionFacts();
	public void setPropertiesOfInterest(List<PolicyPath> paths);
  public void addToNamesOfInterest(Predicate p);
  public void load();
  public Boolean maybePossibleTransition(DataTransition trans);
}
