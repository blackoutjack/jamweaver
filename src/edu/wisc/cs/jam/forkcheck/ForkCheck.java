
package edu.wisc.cs.jam.forkcheck;

import edu.wisc.cs.automaton.State;

import com.google.javascript.rhino.Node;
import com.google.javascript.rhino.Token;

import java.util.List;
import java.util.ArrayList;

import edu.wisc.cs.jam.RuntimeCheck;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.Policy;

import edu.wisc.cs.jam.js.ExpUtil;

public class ForkCheck extends RuntimeCheck {
  
	// Instrumentation function name
	public static final String CHECK_FUNCTION = "checkState";
	// Instrumentation argument count
	public static final int CHECK_ARGUMENT_COUNT = 4;

  // The constructed conditional node which serves as the check.
  private Node checkNode;

  public ForkCheck(SourceManager sm, Node n, Policy.Edge edge) {
    super(sm, n, edge);
    build();
  }

  protected void build() {
    Exp e = getLocation();
    // Checks need to be placed prior to control statements, but the
    // expression to actually check will be the branch condition.
    if (e.isControl()) {
      e = ExpUtil.getCondition(e);
      assert e != null : "Control statement has null condition: " + getLocation().toCode();
    }
    
    String nodetext = e.toCode();
    // %%% maybe unwrap EXPR_RESULT
    nodetext = nodetext.replace("\n", "");
    // %%% need more robust escaping mechanism, for e.g. expressions
    // %%% with strings that already are escaped
    nodetext = nodetext.replace("\"", "\\\"");

    Policy.Edge pe = getPolicyEdge();
    PredicateSymbol psym = pe.getSymbol();
    PredicateValue pred = psym.getPredicate().getPositive();
    String condtext = pred.toString().replace("\"", "\\\"");

    int curval = getPolicyEdge().getSource().getId();
    int postval = 0;
    if (isViolationCheck()) {
      postval = -1;
    } else {
      postval = getPolicyEdge().getDestination().getId();
    }

    StringBuilder sb = new StringBuilder();
    sb.append(CHECK_FUNCTION);
    sb.append("(\"");
    sb.append(nodetext);
    sb.append("\", \"");
    sb.append(condtext);
    sb.append("\", ");
    sb.append(curval);
    sb.append(", ");
    sb.append(postval);
    sb.append(");\n");

    checkNode = getSourceManager().nodeFromCode(sb.toString());
  }

  // Insert this check into the source code.
  @Override
  public synchronized void apply() {
    // Don't do anything if this check is already applied.
    if (isApplied()) return;

    // Get the statement wrapper for this expression.
    Node n = getLocation();
    n = ExpUtil.getEnclosingStatement(n);

    // We need to insert this check in the opposite order of the
    // current policy path, so that only one transition is taken at a
    // time.
    Node parent = n.getParent();

    // Traverse that already-present checks to see where this one needs
    // to be inserted.
    int thissrc = getPolicyEdge().getSource().getId();
    Node prev = parent.getChildBefore(n);
    while (ForkCheckManager.isInstrumentation(prev)) {
      int prevsrc = ForkCheckManager.getCheckSource(prev);
      if (thissrc >= prevsrc) {
        n = prev;
      }
      prev = parent.getChildBefore(prev);
    }

    parent.addChildBefore(checkNode, n);
    getSourceManager().reportCodeChange();

    setApplied(true);
  }

  // Remove (unapply) this check from the source code.
  @Override
  public synchronized void unapply() {
    if (!isApplied()) return;
    assert !isLocked();

    checkNode.getParent().removeChild(checkNode);
    getSourceManager().reportCodeChange();

    setApplied(false);
  }

  @Override
  public String toString() {
    return sm.codeFromNode(checkNode);
  }
}

