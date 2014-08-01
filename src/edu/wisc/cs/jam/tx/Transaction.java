package edu.wisc.cs.jam.tx;

import edu.wisc.cs.automaton.State;

import com.google.javascript.rhino.Node;
import com.google.javascript.rhino.Token;

import java.util.List;
import java.util.ArrayList;

import edu.wisc.cs.jam.SourceFile;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.Predicate;
import edu.wisc.cs.jam.Dbg;

import edu.wisc.cs.jam.js.NodeUtil;

public class Transaction {

  // The source file to which this transaction can be applied
  private SourceFile sourceFile;
  // The Node which that represents the transaction in the AST
  private Node tx;
  // The introspector function for this transaction
  private Introspector introspector;
  // The statements that are enclosed by this transaction when applied
  private List<Node> statements;
  // Whether this transaction is currently present in the source code
  private boolean applied;
  // A locked transaction is one that has been deemed necessary by this
  // JAM process, and cannot be unapplied.
  private boolean locked;

  public Transaction(SourceFile src, Introspector ispect, List<Node> stmts) {
    sourceFile = src;

    introspector = ispect;

    statements = new ArrayList<Node>(stmts);
    
    applied = false;
    locked = false;

    build();
  }

  public Transaction(SourceFile src, Introspector ispect, Node stmt) {
    sourceFile = src;

    introspector = ispect;

    statements = new ArrayList<Node>();
    statements.add(stmt);
    
    applied = false;
    locked = false;

    build();
  }

  public void lock() {
    locked = true;
  }

  public boolean isLocked() {
    return locked;
  }

  protected Node buildIntrospector() {
    assert introspector != null : "Null introspector when building transaction";

    // Build the introspector expression. Introspectors are accessed as
    // members of the JAMScript.introspectors object.
    Node hdlrProp0 = Node.newString(Token.STRING, JAMConfig.INTROSPECTOR_LIST);
    Node hdlrProp1 = Node.newString(Token.STRING, introspector.getName());
    Node hdlrExpr0 = new Node(Token.GETPROP, Node.newString(Token.NAME, JAMConfig.TRANSACTION_LIBRARY), hdlrProp0);
    Node hdlrExpr1 = new Node(Token.GETPROP, hdlrExpr0, hdlrProp1);

    return hdlrExpr1;
  }

  protected void build() {
    assert tx == null : "Attempting to rebuild transaction";

    Node hdlrNode = buildIntrospector();
    // Start off with an empty block.
    Node blk = new Node(Token.BLOCK);
    tx = new Node(Token.TRANSACTION, hdlrNode, blk);
  }

  public void setIntrospector(Introspector ispect) {
    Node currentHdlr = tx.getFirstChild();
    //assert sourceFile.codeFromNode(currentHdlr).equals(introspector.getName()) : "Corruption in introspector: " + sourceFile.codeFromNode(currentHdlr) + " != " + introspector.getName();
    introspector = ispect;
    tx.replaceChild(currentHdlr, buildIntrospector());
  }

  public Introspector getIntrospector() {
    return introspector;
  }

  // Enclose the specified statements in a transaction.
  public synchronized void apply() {
    // Don't do anything if this transaction is already applied.
    if (isApplied()) return;

    Node block = tx.getLastChild();
    Node parent = null;
    Node next = null;
    for (Node stmt : statements) {
      // If |stmt| is a condition for an if statement, for example, we
      // have to wrap the whole if statement in the transaction.
      stmt = NodeUtil.getEnclosingStatement(stmt);

      assert next == null || stmt == next : "Attempting to enclose disjoint statements in a transaction";
      next = stmt.getNext();

      Node p = stmt.getParent();
      assert parent == null || p == parent : "Attempting to enclose disjoint statements in a transaction";
      parent = p;

      if (stmt.isCase()) {
        parent = stmt;
        stmt = stmt.getFirstChild();
        stmt.detachFromParent();
        stmt = new Node(Token.EXPR_RESULT, stmt);
        next = null;
        assert statements.size() == 1 : "Multiple nodes cannot be enclosed if a CASE expression is included";
      } else {
        stmt.detachFromParent();
      }
      block.addChildToBack(stmt);
    }

    if (next != null) {
      parent.addChildBefore(tx, next);
    } else {
      if (parent.isCase()) {
        parent.addChildToFront(tx);
      } else {
        parent.addChildToBack(tx);
      }
    }
    sourceFile.reportCodeChange();

    setApplied(true);
  }

  // Remove (unapply) this transaction from the source code.
  public synchronized void unapply() {
    if (!isApplied()) return;
    assert !isLocked() : "Attempting to remove locked transaction";

    Node parent = tx.getParent();
    Node next = tx.getNext();
    parent.removeChild(tx);

    Node block = tx.getLastChild();
    for (int i=block.getChildCount()-1; i>=0; i--) {
      Node stmt = block.getChildAtIndex(i);
      stmt.detachFromParent();

      // For some reason, an EMPTY statement is being inserted into
      // transactions that serve as CASE expressions.
      if (stmt.isEmpty()) continue;

      if (next == null) {
        parent.addChildToBack(stmt);
      } else {
        if (parent.isCase()) {
          // Strip the EXPR_RESULT wrapper.
          stmt = stmt.getFirstChild().detachFromParent();
        }
        parent.addChildBefore(stmt, next);
      }
      next = stmt;
    }

    sourceFile.reportCodeChange();

    setApplied(false);
  }

  public boolean isApplied() {
    return applied;
  }

  // Note that this transaction was already in the source code to start
  // with. Removal is disallowed.
  public void setOriginal() {
    applied = true;
    locked = true;
  }

  protected void setApplied(boolean val) {
    applied = val;
  }

  @Override
  public String toString() {
    return sourceFile.codeFromNode(tx);
  }
}
