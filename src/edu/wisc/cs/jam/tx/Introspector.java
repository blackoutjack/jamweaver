
package edu.wisc.cs.jam.tx;

import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.util.LinkedHashSet;

import edu.wisc.cs.jam.JAM;
import edu.wisc.cs.jam.Policy;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.automaton.State;

// This represents a single JavaScript function that can be provided
// as the transaction argument (i.e. the introspector). It will dispatch
// one or more edge specifications to evaluate.
public class Introspector {

  private List<PolicyTransition> edgeSpecifications;
  private String name;
  // A flag to denote the COMPREHENSIVE_INTROSPECTOR introspector.
  private boolean comprehensive;

  // Types of predicates this introspector evaluates.
  private boolean hasCall;
  private boolean hasRead;
  private boolean hasWrite;
  private boolean hasOther;

  // Characteristics of policy states processed by this introspector.
  private boolean hasInit;
  private boolean hasFinal;
  Set<Integer> states;
  Set<Integer> destStates;
  Set<Integer> srcStates;

  public Introspector(PolicyTransition trans) {
    edgeSpecifications = new ArrayList<PolicyTransition>();
    edgeSpecifications.add(trans);
    loadPolicyInfo();
  }

  public Introspector(List<PolicyTransition> edges) {
    // The responsibility for making sure that these are in the correct
    // order for proper evaluation is on the client. Currently this is
    // coordinated within CounterExample.
    edgeSpecifications = new ArrayList<PolicyTransition>(edges);
    loadPolicyInfo();
  }
    
  protected void loadPolicyInfo() {
    states = new LinkedHashSet<Integer>();
    destStates = new LinkedHashSet<Integer>();
    srcStates = new LinkedHashSet<Integer>();
    hasInit = false;
    hasFinal = false;
    hasCall = false;
    hasRead = false;
    hasWrite = false;
    hasOther = false;
    for (PolicyTransition pt : edgeSpecifications) {
      int id = pt.getPolicyEdge().getSource().getId();
      if (id == 0) {
        hasInit = true;
      } else {
        states.add(new Integer(id));
        srcStates.add(new Integer(id));
      }
      id = pt.getPolicyEdge().getDestination().getId();
      if (id == -1) {
        hasFinal = true;
      } else {
        states.add(new Integer(id));
        destStates.add(new Integer(id));
      }
      String ptType = pt.getType();
      if (ptType.equals("call")) {
        hasCall = true;
      } else if (ptType.equals("read")) {
        hasRead = true;
      } else if (ptType.equals("write")) {
        hasWrite = true;
      } else {
        hasOther = true;
      }
    }
  }

  public void setName(String name) {
    this.name = name;
  }

  // Return the name of the introspector function. |null| if anonymous.
  public String getName() {
    return name;
  }

  public void setComprehensive(boolean comp) {
    comprehensive = comp;
  }

  public boolean isComprehensive() {
    return comprehensive;
  }

  public List<Policy.Edge> getPolicyEdges() {
    List<Policy.Edge> ret = new ArrayList<Policy.Edge>();
    for (PolicyTransition pt : edgeSpecifications) {
      ret.add(pt.getPolicyEdge());
    }

    return ret;
  }

  protected void transitionsToString(StringBuilder sb, String ind0, boolean transform) {
    // Group the transitions such that some logic can be optimized. They
    // can be grouped if they share a start state, end state and type.
    // Transitions are assumed to be in a topological order already.
    List<List<PolicyTransition>> groups = new ArrayList<List<PolicyTransition>>();
    for (PolicyTransition pt : edgeSpecifications) {
      Policy.Edge pedge = pt.getPolicyEdge();
      List<PolicyTransition> addTo = null;
      for (List<PolicyTransition> group : groups) {
        PolicyTransition prev = group.get(0);
        Policy.Edge prevedge = prev.getPolicyEdge();
        if (prev.getType() == pt.getType() &&
            pedge.getSource() == prevedge.getSource() &&
            pedge.getDestination() == prevedge.getDestination()) {
          addTo = group;
          break;
        }
      }
      if (addTo == null) {
        addTo = new ArrayList<PolicyTransition>();
        groups.add(addTo);
      }
      addTo.add(pt);
    }

    String ind1 = "  " + ind0;

    for (List<PolicyTransition> group : groups) {
      PolicyTransition pt0 = group.get(0);
      String nodetype = pt0.getType();
      Policy.Edge pe = pt0.getPolicyEdge();
      State src = pe.getSource();
      State dest = pe.getDestination();
      boolean isInit = src.isInitial();
      boolean isFinal = dest.isFinal();

      sb.append(ind0);
      sb.append("if (");

      if (!isInit) {
        sb.append("s");
        sb.append(Integer.toString(src.getId()));
        sb.append(" && ");
      }
      if (!isFinal) {
        sb.append("!s");
        sb.append(Integer.toString(dest.getId()));
        sb.append(" && ");
      }

      sb.append("node.type === \"");
      sb.append(nodetype);
      sb.append("\" && ");

      sb.append("((");
      boolean first = true;
      for (PolicyTransition pt : group) {
        if (first) {
          first = false;
        } else {
          sb.append(") || (");
        }
        sb.append(pt.getEvaluatorClause());
      }
      // Close the last disjunct, the parens surrounding the 
      // disjunction of transitions, and the conditional statement.
      sb.append("))) {\n");

      if (isFinal) {
        sb.append(ind1);
        sb.append("commit = false;\n");
        if (!transform) {
          sb.append(ind1);
          sb.append("break;\n");
        }
      } else {
        sb.append(ind1);
        sb.append("s");
        sb.append(Integer.toString(dest.getId()));
        sb.append(" = true;\n");
        sb.append(ind1);
        sb.append("states.push(");
        sb.append(Integer.toString(dest.getId()));
        sb.append(");\n");
      }

      sb.append(ind0);
      sb.append("}\n");
    }
  }

  public String toStringTransformed() {
    StringBuilder sb = new StringBuilder();
    return sb.toString();
  }
  
  public boolean canTransform() {
    // The current transformation pulls the write out of the tx.
    if (hasWrite) return false;
    // These two conflict with each other, but each on its own is fine.
    if (hasCall && hasRead) return false;
    // |hasOther| currently only indicates a dummy predicate.
    return true;
  }

  public boolean isCall() {
    return hasCall;
  }

  // Generate the source code of the introspector function.
  public String toString(boolean transform) {

    if (transform && !canTransform()) {
      transform = false;
    }
    
    StringBuilder sb = new StringBuilder();

    String ind0 = "  ";
    String ind1 = "  " + ind0;
    String ind2 = "  " + ind1;
    String ind3 = "  " + ind2;

    sb.append(ind0);
    sb.append("function ");
    sb.append(getName());
    if (transform && hasCall) {
      sb.append("(node) {\n");
    } else {
      sb.append("(tx) {\n");
    }

    // Do some setup outside the loop.
    if (hasFinal) {
      sb.append(ind1);
      sb.append("var commit = true;\n");
    }

    for (Integer state : states) {
      sb.append(ind1);
      sb.append("var s");
      sb.append(state.toString());
      sb.append(" = states.indexOf(");
      sb.append(state.toString());
      sb.append(") > -1;\n");
    }

    if (!hasInit) {
      sb.append(ind1);
      sb.append("if (");
      boolean first = true;
      for (Integer src : srcStates) {
        if (first) {
          first = false;
        } else {
          // Don't add (outward-facing) bookend parens here, or else
          // get a syntax error.
          sb.append(" || ");
        }
        sb.append("s");
        sb.append(src.toString());
      }
      sb.append(") {\n");
    }

    if (transform && hasCall) {

      // Add final state conditions for early escape.
      if (!hasFinal) {
        sb.append(ind1);
        sb.append("if (");
        boolean first = true;
        for (Integer dest : destStates) {
          if (first) {
            first = false;
          } else {
            // Don't add (outward-facing) bookend parens here, or else
            // get a syntax error.
            sb.append(" || ");
          }
          sb.append("!s");
          sb.append(dest.toString());
        }
        sb.append(") {\n");
      }

      transitionsToString(sb, ind1, true);

      if (!hasFinal) {
        sb.append(ind1);
        sb.append("}\n");
      }
       
    } else {

      // Add final state conditions for early escape.
      StringBuilder cond = new StringBuilder();
      cond.append("i<len");
      if (!hasFinal) {
        cond.append(" && (");
        boolean first = true;
        for (Integer dest : destStates) {
          if (first) {
            first = false;
          } else {
            cond.append(" || ");
          }
          cond.append("!s");
          cond.append(dest.toString());
        }
        cond.append(")");
      }

      sb.append(ind1);
      sb.append("var as = tx.getActionSequence();\n");
      sb.append(ind1);
      sb.append("var len = as.length;\n");

      sb.append(ind1);
      sb.append("for (var i=0; ");
      sb.append(cond);
      sb.append("; i++) {\n");
      sb.append(ind2);
      sb.append("var node = as[i];\n");

      transitionsToString(sb, ind2, false);

      sb.append(ind1);
      sb.append("}\n");
    }

    if (!hasInit) {
      sb.append(ind1);
      sb.append("}\n");
    }

    if (transform && hasCall) {
      sb.append(ind1);
      if (hasFinal) {
        sb.append("return commit;\n");
      } else {
        sb.append("return true;\n");
      }
    } else {
      String indX = ind1;
      if (hasFinal) {
        sb.append(ind1);
        sb.append("if (commit) {\n");
        indX = "  " + indX;
      }

      sb.append(indX);
      sb.append(JAMConfig.TRANSACTION_LIBRARY);
      sb.append(".process(tx);\n");

      if (hasFinal) {
        sb.append(ind1);
        sb.append("} else {\n");
        sb.append(indX);
        sb.append(JAMConfig.TRANSACTION_LIBRARY);
        sb.append(".prevent(tx);\n");
        sb.append(ind1);
        sb.append("}\n");
      }
    }
    
    // Close the function.
    sb.append(ind0);
    sb.append("}\n");
    if (!transform || !hasCall) {
      sb.append(ind0);
      sb.append(getName());
      sb.append(".subsumedBy = ");
      sb.append(JAMConfig.COMPREHENSIVE_INTROSPECTOR);
      sb.append("\n");
    }

    // Freeze the introspector object.
    sb.append(ind0);
    sb.append("Object.freeze(");
    sb.append(getName());
    sb.append(");\n");
      
    return sb.toString();
  }

  @Override
  public String toString() {
    return toString(false);
  }
}

