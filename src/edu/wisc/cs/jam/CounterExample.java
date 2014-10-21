package edu.wisc.cs.jam;

import edu.wisc.cs.automaton.State;
import edu.wisc.cs.automaton.ComboSymbol;
import edu.wisc.cs.automaton.ComboState;

import java.util.List;
import java.util.ArrayList;
import java.io.StringReader;
import java.io.IOException;

import edu.wisc.cs.jam.js.JSExp;

public class CounterExample {
  private SourceManager sm;
  private Semantics semantics;
  private PolicyPath policyPath;
  private CheckManager cm;
  
  private List<Transition> path;
  private List<String> sentinels;
  private List<RuntimeCheck> checks;

  public CounterExample(JAMAnalysis ja, RelationAutomaton raut, String trace) throws IllegalArgumentException {
    sm = ja.getSourceManager();
    semantics = ja.getSemantics();
    policyPath = ja.getPolicyPath();
    cm = ja.getCheckManager();

    path = new ArrayList<Transition>();

    load(raut, trace);
  }

  public CounterExample(JAMAnalysis ja, List<ComboSymbol<PredicateSymbol,ExpSymbol>> trc) {
    sm = ja.getSourceManager();
    semantics = ja.getSemantics();
    policyPath = ja.getPolicyPath();
    cm = ja.getCheckManager();

    path = new ArrayList<Transition>();
    for (ComboSymbol<PredicateSymbol,ExpSymbol> sym : trc) {
      if (sym == null) continue;
      Transition t = new Transition(sym);
      path.add(t);
    }
  }

  protected void load(RelationAutomaton raut, String trace) {
    StringReader reader = new StringReader(trace);
    StringBuilder sb = new StringBuilder();
    String line = null;
    boolean done = false;
    int i = -1;
    char c = ' ';
    while (!done) {
      try {
        i = reader.read();
      } catch (IOException ex) {
        Dbg.err("Error while reading counter-example trace: " + ex.getMessage());
        break;
      }
      if (i == -1) {
        done = true;
      } else {
        c = (char)i;
      }
      if (c == '\n' || done) {
        line = sb.toString();
        ComboSymbol<PredicateSymbol,ExpSymbol> sym = raut.getSymbolFromText(line);
        assert sym != null : "Null symbol for text: " + line;

        Transition t = new Transition(sym);
        path.add(t);
        sb = new StringBuilder();
      } else {
        sb.append(c);
      }
    }
  }

  public boolean isValid() {

    // Collect all components of the final clause before merging them
    // into one.
    List<Clause> clauses = new ArrayList<Clause>();

    for (Transition t : path) {
      ExpSymbol sym = t.getControlSymbol();
      Exp s = sym.getExp();

      // This is necessary to skip BLOCK nodes and the like.
      // %%% Don't want to change CBESymbol.isNoOp to false right now,
      // %%% for fear of other effects elsewhere.
      if (!(sym instanceof CallbackEntrySymbol) && sym.isNoOp())
        continue;
      // Don't include the final RETURN node in the {#main} function,
      // because it screws up the query.
      if (s.isReturn() && s.getParent() == null)
        continue;

      // Don't process instrumentation during counterexample checking.
      if (cm.isRuntimeCheck(s)) continue;

      Clause parseClause = semantics.getTraceClause(sym);

      // %%% May be null if the semantics can't handle the statement.
      if (parseClause == null) continue;

      Clause preSentinel = semantics.getPreSentinelClause(sym);
      Clause postSentinel = semantics.getPostSentinelClause(sym);

      // Add generated clauses to the concrete evaluation sequence.
      if (preSentinel != null) clauses.add(preSentinel);
      clauses.add(parseClause);
      if (postSentinel != null) clauses.add(postSentinel);

      // Add an extra clause if the predicate is an advancing policy
      // predicate.
      Predicate pred = t.getPredicate();
      if (pred != Predicate.TRUE) {
        clauses.add(pred.getPositive().getClause());
      }
    }

    Clause finalClause = new Clause(clauses);
    finalClause.setConcrete(true);

    sentinels = semantics.sentinelQuery(finalClause);
    boolean ret = sentinels == null;

    return ret;
  }
  
  public List<String> getSentinels() {
    return sentinels;
  }
  
  public List<RuntimeCheck> getChecks() {
    // Return precomputed checks.
    if (checks != null) return checks;

    // Create a check for any edge that transitions between different
    // policy states (which are also states of this automaton).
    checks = new ArrayList<RuntimeCheck>();
    // Iterate backwards so that policy paths that use a single
    // predicate on multiple edges are evaluated with the semantics that
    // each statement can only transition the policy automaton once.
    // %%% This is not good enough by itself since a particular edge may
    // %%% be in multiple PolicyPaths, so more coordination needs to
    // %%% happen at the level of CheckManager.
    for (int i=path.size()-1; i>=0; i--) {
      Transition t = path.get(i);
      // Get the original symbol (i.e. the one that's present in the
      // control automaton).
      ExpSymbol sym = t.getControlSymbol();
      Predicate pred = t.getPredicate();

      if (pred != Predicate.TRUE) {
        // Add a check for this policy edge.
        Policy.Edge e = policyPath.getPolicyEdge(policyPath.getAdvancingEdge(pred));

        // Get a check that guards this policy edge.
        RuntimeCheck check = cm.getCheck(sym, e);
        checks.add(check);
      }
    }

    return checks;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    for (Transition t : path) {
      sb.append(t);
      sb.append("\n");
    }

    return sb.toString();
  }

  public class Transition {
    private Predicate pred;
    private ExpSymbol csym;
    
    public Transition(ComboSymbol<PredicateSymbol,ExpSymbol> cs) {
      pred = cs.getLeft().getPredicate();
      csym = cs.getRight();
    }

    public Predicate getPredicate() {
      return pred;
    }

    public ExpSymbol getControlSymbol() {
      return csym;
    }

    @Override
    public String toString() {
      StringBuilder sb = new StringBuilder();
      sb.append(csym.toString());
      if (pred != Predicate.TRUE) {
        sb.append(" | ");
        sb.append(pred);
      }
      return sb.toString();
    }
  }
}
