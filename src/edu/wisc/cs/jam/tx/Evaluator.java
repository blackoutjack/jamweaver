
package edu.wisc.cs.jam.tx;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.LinkedHashMap;

import edu.wisc.cs.jam.PolicyLanguage;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.Predicate;
import edu.wisc.cs.jam.PredicateType;
import edu.wisc.cs.jam.js.JSPolicyLanguage.JSPredicateType;

// This represents a single JavaScript function that evaluates the
// truth value of a single JAM policy predicate.
public class Evaluator {

  // The predicate which is evaluated by this evaluator function.
  private Predicate predicate;
  private List<EvaluatorNode> nodes;

  private Map<String,String> natives;

  private PolicyLanguage language;

  public Evaluator(PolicyLanguage pl, Predicate pred) {
    language = pl;
    predicate = pred;
    natives = new LinkedHashMap<String,String>();

    List<Exp> conjuncts = predicate.getConjuncts();
    assert conjuncts.size() > 0 : "Empty list of evaluator conjuncts";
    nodes = new ArrayList<EvaluatorNode>();
    for (Exp e : conjuncts) {
      nodes.add(new EvaluatorNode(language, e));
    }
  }

  public Map<String,String> getNativeReferences() {
    return new LinkedHashMap<String,String>(natives);
  }

  public JSPredicateType getType() {
    EvaluatorNode e0 = nodes.get(0);
    PredicateType typ = e0.getType();
    if (typ == JSPredicateType.WRITE || typ == JSPredicateType.SHEQ
        || typ == JSPredicateType.SHNE || typ == JSPredicateType.EQ
        || typ == JSPredicateType.NE || typ == JSPredicateType.GT
        || typ == JSPredicateType.GE || typ == JSPredicateType.LT
        || typ == JSPredicateType.LE) {
      return JSPredicateType.WRITE;
    } else if (typ == JSPredicateType.READ) {
      return JSPredicateType.READ;
    } else if (typ == JSPredicateType.DELETE) {
      return JSPredicateType.DELETE;
    } else if (typ == JSPredicateType.CALL) {
      return JSPredicateType.CALL;
    } else if (typ == JSPredicateType.INVOKE) {
      return JSPredicateType.INVOKE;
    } else if (typ == JSPredicateType.CONSTRUCT) {
      return JSPredicateType.CONSTRUCT;
    } else if (typ == JSPredicateType.DUMMY) {
      return JSPredicateType.DUMMY;
    } else {
      throw new UnsupportedOperationException("Unknown evaluator type: " + this);
    }
  }

  // Generate a conjunction of EvaluatorNode snippets.
  protected void nodesToString(StringBuilder sb) {

    Map<String,String> wilds = new LinkedHashMap<String,String>();
    boolean first = true;
    for (EvaluatorNode enode : nodes) {
      // Facilitate coordination between the nodes.
      enode.setWilds(wilds);
      enode.setNatives(natives);
      //enode.setUserValues(userValues);

      if (first) {
        first = false;
        sb.append("(");
      } else {
        sb.append(") && (");
      }
      sb.append(enode.toString());
    }
    if (!first) {
      sb.append(")");
    }
  }

  // Generate the source code of the evaluator clause as a conjunction
  // of EvaluatorNodes.
  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    nodesToString(sb);
    return sb.toString();
  }
}

