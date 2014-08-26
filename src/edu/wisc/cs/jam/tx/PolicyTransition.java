
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
        return "delete";
      case DUMMY:
        return "dummy";
      default:
        throw new UnsupportedOperationException("Unknown evaluator type: " + evaluator.toString());
    }
  }

  public String getEvaluatorClause() {
    return "( " + evaluator.toString() + " )";
  }
}


