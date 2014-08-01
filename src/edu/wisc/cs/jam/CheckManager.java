
package edu.wisc.cs.jam;

import java.util.Map;
import java.util.Set;
import java.util.List;

// This interface abstracts the operations needed to manage the
// application and removal of runtime checks from the source code.
// A runtime check (see abstract class RuntimeCheck) is specified as
// a (Exp, Policy.Edge) pair.
//
// Note that when using transactional enforcement with JAMScript, a
// single Transaction may enforce several RuntimeChecks by using an
// Introspector which dispatches to several Evaluators. An Evaluator
// object is not associated with any particular Exp, so there is
// another object, the TransactionCheck, that extends RuntimeCheck.
public interface CheckManager {

  // Get a list of all checks that are currently applied to the source.
  public abstract List<RuntimeCheck> getChecks();

  public abstract void loadExistingChecks();

  // Number of checks that are currently applied to the source.
  public abstract int getCheckCount();

  public abstract RuntimeCheck getCheck(ExpSymbol sym, Policy.Edge e);
  public abstract void addCheck(RuntimeCheck c);
  public abstract void removeCheck(RuntimeCheck c);

  public abstract void initChecks(ExpSymbol sym);
  public abstract boolean isRuntimeCheck(Exp s);

  public abstract Exp getSpecializedPolicyCode();
  public abstract Exp getBasePolicyCode();

  // %%% Hacky
  public abstract Set<PolicyType> getPolicyTypes(String check);
}

