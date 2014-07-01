
package edu.wisc.cs.jam.tx;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.LinkedHashMap;

import edu.wisc.cs.jam.PolicyLanguage;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.Predicate;

// This represents a single JavaScript function that evaluates the
// truth value of a single JAM policy predicate.
public class Evaluator {

  // The predicate which is evaluated by this evaluator function.
  private Predicate predicate;
  private List<EvaluatorNode> nodes;

  private Map<String,String> natives;

  private PolicyLanguage language;

  public enum Type {
    WRITE,
    READ,
    CALL,
    DUMMY
  }

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

  public Type getType() {
    // %%% Delegate this to PolicyLangauge.
    EvaluatorNode e0 = nodes.get(0);
    switch (e0.getType()) {
      case SET:
      case SHEQ:
      case SHNE:
      case EQ:
      case NE:
        return Type.WRITE;
      case GET: 
        return Type.READ;
      case CALL:
        return Type.CALL;
      case DUMMY:
        return Type.DUMMY;
      default:
        throw new UnsupportedOperationException("Unknown evaluator type: " + this);
    }
  }

  // Generate a conjunction of EvaluatorNode snippets.
  protected void nodesToString(StringBuilder sb) {

    Map<String,String> wilds = new LinkedHashMap<String,String>();
    List<String[]> setProps = new ArrayList<String[]>(); 
    boolean first = true;
    for (EvaluatorNode enode : nodes) {
      // Facilitate coordination between the nodes.
      enode.setWilds(wilds);
      enode.setNatives(natives);
      enode.setSetProperties(setProps);
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

