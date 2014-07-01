package edu.wisc.cs.jam;

import edu.wisc.cs.automaton.Automaton;
import edu.wisc.cs.automaton.State;
import edu.wisc.cs.automaton.Symbol;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Set;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Collection;

// This class simply tests each program statement against the semantics.
// RelationAutomaton is extends just to get access to its clause-
// creation mechanisms.
public class EvaluationAutomaton extends RelationAutomaton {

  private final boolean BATCH_QUERIES = true;

  public EvaluationAutomaton(JAM j) {
    super(j, null);
  }

  protected void testEvaluation(ExpSymbol sym) {
    // These transitions aren't evaluated.
    if (sym.isNoOp()) return;
    // FunctionEntrySymbols will evaluate to false always, if not set
    // up with an assertion or previous statement.
    if (sym instanceof FunctionEntrySymbol) return;

    // Determine whether the given node can be evaluated by the semantics.
    Clause c = createClause(null, sym, null);
    if (c == null) return;
    
    boolean success = semantics.query(c, false);
    if (!success) {
      Dbg.err("Unable to evaluate statement: " + c.getDescription());
    }
  }

  protected void testEvaluation(List<ExpSymbol> syms) {
    int batchCnt = (int)Math.ceil(((double)syms.size()) / ((double)MAX_BATCH_SIZE));
    for (int j=0; j<batchCnt; j++) {
      if (batchCnt > 1) Dbg.out("Starting batch " + (j + 1) + " of " + batchCnt, 2);
      int start = j * MAX_BATCH_SIZE;

      // Collect queries here to send as a batch to the semantics.
      QueryMap queryMap = new QueryMap();

      int end = Math.min(start + MAX_BATCH_SIZE, syms.size());
      for (int i=start; i<end; i++) {
        ExpSymbol sym = syms.get(i);
        
        // These transitions aren't evaluated.
        if (sym.isNoOp()) continue;
        // These will always evaluate to false, if not set up with an
        // assertion or previous statement.
        if (sym instanceof FunctionEntrySymbol) continue;

        Clause c = createClause(null, sym, null);
        if (c == null) continue;

        DataTransition trans = new DataTransition(null, null, sym, null);
        List<DataTransition> transitions = queryMap.get(c);
        if (transitions == null) {
          transitions = new ArrayList<DataTransition>();
          queryMap.put(c, transitions);
        }
        transitions.add(trans);
      }

      // Process the query batch.
      List<Clause> clauses = new ArrayList<Clause>(queryMap.keySet());
      List<Boolean> results = semantics.batchQuery(clauses, false);
      assert results.size() == clauses.size();

      // Process the results.
      for (int i=0; i<clauses.size(); i++) {
        Boolean result = results.get(i);
        Clause c = clauses.get(i);
        for (DataTransition trans : queryMap.get(c)) {
          if (!result.booleanValue()) {
            Dbg.err("Unable to evaluate statement: " + c.getDescription());
          }
        }
      }
    }
  }

  public void testEvaluation() {
    Dbg.out("Testing statement evaluation", 2);
    Dbg.writeQueryHeader("Testing statement evaluation", false);

    // Examine all possible internal edges to generate all
    // semantically viable edges.
    if (BATCH_QUERIES) {
      testEvaluation(getSymbols());
    } else {
      for (ExpSymbol sym : getSymbols()) {
        testEvaluation(sym);
      }
    }
    Dbg.out("Done testing evaluation", 2);
  }
}


