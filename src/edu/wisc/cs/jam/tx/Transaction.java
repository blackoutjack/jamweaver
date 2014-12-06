package edu.wisc.cs.jam.tx;

import edu.wisc.cs.automaton.State;

import java.util.List;
import java.util.ArrayList;

import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.Predicate;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.Dbg;

import edu.wisc.cs.jam.js.ExpUtil;
import edu.wisc.cs.jam.js.JSExp;

public class Transaction {

  // The source file to which this transaction can be applied
  private SourceManager sm;
  // The Exp which that represents the transaction in the AST
  private Exp tx;
  // The introspector function for this transaction
  private Introspector introspector;
  // The statements that are enclosed by this transaction when applied
  private List<Exp> statements;
  // Whether this transaction is currently present in the source code
  private boolean applied;
  // A locked transaction is one that has been deemed necessary by this
  // JAM process, and cannot be unapplied.
  private boolean locked;

  public Transaction(SourceManager src, Introspector ispect, List<Exp> stmts) {
    sm = src;

    introspector = ispect;

    statements = new ArrayList<Exp>(stmts);
    
    applied = false;
    locked = false;

    build();
  }

  public Transaction(SourceManager src, Introspector ispect, Exp stmt) {
    sm = src;

    introspector = ispect;

    statements = new ArrayList<Exp>();
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

  protected Exp buildIntrospector() {
    assert introspector != null : "Null introspector when building transaction";

    // Build the introspector expression. Introspectors are accessed as
    // members of the JAMScript.introspectors object.
    Exp hdlrProp0 = JSExp.createString(sm, JAMConfig.INTROSPECTOR_LIST);
    Exp hdlrProp1 = JSExp.createString(sm, introspector.getName());
    Exp hdlrExpr0 = new JSExp(JSExp.GETPROP, JSExp.createName(sm, JAMConfig.TRANSACTION_LIBRARY), hdlrProp0);
    Exp hdlrExpr1 = new JSExp(JSExp.GETPROP, hdlrExpr0, hdlrProp1);

    return hdlrExpr1;
  }

  protected void build() {
    assert tx == null : "Attempting to rebuild transaction";

    Exp ispect = buildIntrospector();
    // Start off with an empty block.
    Exp blk = new JSExp(sm, JSExp.BLOCK);
    tx = new JSExp(JSExp.TRANSACTION, ispect, blk);
  }

  public void setIntrospector(Introspector ispect) {
    Exp currentHdlr = tx.getFirstChild();
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

    Exp block = tx.getLastChild();
    Exp parent = null;
    Exp next = null;
    for (Exp stmt : statements) {
      assert !stmt.isBlock() && !stmt.isScript() : "Invalid statement for transaction: " + stmt + " / " + stmt.toCode();
      // If |stmt| is a condition for an if statement, for example, we
      // have to wrap the whole if statement in the transaction.
      Exp newstmt = ExpUtil.getEnclosingStatement(stmt);
      assert !newstmt.isBlock() && !newstmt.isScript() : "Invalid statement for transaction: " + stmt + " / " + stmt.toCode();
      stmt = newstmt;

      assert next == null || stmt == next : "Attempting to enclose disjoint statements in a transaction";

      Exp p = stmt.getParent();
      next = p.getChildAfter(stmt);
      assert parent == null || p == parent : "Attempting to enclose disjoint statements in a transaction";
      parent = p;
      if (stmt.is(JSExp.CASE)) {
        parent = stmt;
        stmt = stmt.getFirstChild();
        stmt.detachFromParent();
        stmt = new JSExp(JSExp.EXPR_RESULT, stmt);
        next = null;
        assert statements.size() == 1 : "Multiple nodes cannot be enclosed if a CASE expression is included";
      } else if (stmt.getParent() == null) {
        Dbg.warn("No parent for transaction node: " + stmt);
      } else {
        stmt.detachFromParent();
      }
      block.addChildToBack(stmt);
      if (parent == null) {
        Dbg.warn("Enclosing an unconnected node in a transaction: " + stmt);
        return;
      }
    }

    if (next != null) {
      parent.addChildBefore(tx, next);
    } else {
      if (parent.is(JSExp.CASE)) {
        parent.addChildToFront(tx);
      } else {
        parent.addChildToBack(tx);
      }
    }
    assert tx.getParent() == parent;
    sm.reportCodeChange();

    setApplied(true);
  }

  // Remove (unapply) this transaction from the source code.
  public synchronized void unapply() {
    if (!isApplied()) return;
    assert !isLocked() : "Attempting to remove locked transaction";

    Exp parent = tx.getParent();
    Exp next = parent.getChildAfter(tx);
    parent.removeChild(tx);

    Exp block = tx.getLastChild();
    for (int i=block.getChildCount()-1; i>=0; i--) {
      Exp stmt = block.getChild(i);
      stmt.detachFromParent();

      // For some reason, an EMPTY statement is being inserted into
      // transactions that serve as CASE expressions.
      if (stmt.is(JSExp.EMPTY)) continue;

      if (next == null) {
        parent.addChildToBack(stmt);
      } else {
        if (parent.is(JSExp.CASE)) {
          // Strip the EXPR_RESULT wrapper.
          stmt = stmt.getFirstChild().detachFromParent();
        }
        parent.addChildBefore(stmt, next);
      }
      next = stmt;
    }

    sm.reportCodeChange();

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
    return tx.toCode();
  }
}
