
package edu.wisc.cs.jam.tx;

import edu.wisc.cs.jam.RuntimeCheck;
import edu.wisc.cs.jam.Predicate;
import edu.wisc.cs.jam.Policy;
import edu.wisc.cs.automaton.State;

import edu.wisc.cs.jam.PolicyType;
import edu.wisc.cs.jam.js.JSPolicyLanguage.JSPolicyType;

// This is a simple wrapper for a Policy.Edge object, that knows how
// to print the edge specification in the JavaScript policy context.
public class PolicyTransition {

  private Policy.Edge edge;
  private Evaluator evaluator;
  private int index;

  public PolicyTransition(Policy.Edge edge, Evaluator eval, int index) {
    this.edge = edge;
    this.evaluator = eval;
    this.index = index;
  }

  public int getIndex() {
    return index;
  }

  public Policy.Edge getPolicyEdge() {
    return edge;
  }

  public PolicyType getType() {
    return evaluator.getType();
  }

  public String getTypeName() {
    JSPolicyType typ = (JSPolicyType)getType();
    switch (typ) {
      case WRITE:
        return "write";
      case READ:
        return "read";
      case CALL:
        return "call";
      case DELETE:
        return "call";
      case DUMMY:
        return "dummy";
      default:
        throw new UnsupportedOperationException("Unknown evaluator type: " + evaluator.toString());
    }
  }

  public String getEvaluatorClause() {
    return "( " + evaluator.toString() + " )";
  }

  /*
  public String toString(boolean transform) {
    Predicate pred = edge.getSymbol().getPredicate();
    State s0 = edge.getSource();
    State s1 = edge.getDestination();

    // Return the edge specification in the following format.
    // {pred: 'set(x)', pre: 2, post: -1, evaluator: setX}

    StringBuilder sb = new StringBuilder();
    sb.append("{");
    // The predicate representation should not really be required, but
    // may be useful for readability.
    sb.append("pred: '");

    String condtext = pred.getPositive().toString().replace("\"", "\\\"");
    // %%% Use a more robust escaping mechanism.
    sb.append(pred.getPositive().toString().replace("'", "\\'"));
    sb.append("', ");
    sb.append("pre: ");
    sb.append(s0.getId());
    sb.append(", ");
    sb.append("post: ");
    sb.append(s1.getId());
    sb.append(", ");
    sb.append("evaluator: ");
    sb.append(evaluator.getName(transform));
    sb.append("}");

    return sb.toString();

  }
  */

  // Generate the JavaScript source code of the edge specification.
  @Override
  public String toString() {
    //return toString(true);
    return super.toString();
  }
}


