
package edu.wisc.cs.jam.js;

import java.util.Map;
import java.util.Set;
import java.util.HashSet;
import java.util.List;
import java.util.ArrayList;
import java.util.LinkedHashMap;

import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.Traversal;
import edu.wisc.cs.jam.Traversal.Traverser;
import edu.wisc.cs.jam.Scope;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.Dbg;

import edu.wisc.cs.jam.js.JSExp;

public class JSStatementTransform extends JSTransform {
  
  protected boolean DEBUG = false;

  protected Set<Exp> tmpDefs;
  protected Set<Exp> tmpUses;
  protected Set<String> simpleTmpDefs;

  @Override
  public void run(SourceManager src) {
    Exp root = src.getRoot();

    // Add explicit return statements.
    ReturnExplicit re = new ReturnExplicit(src);
    Dbg.out("Starting pass RETURN", 4); 
    src.traverse(root, re);

    // Name anonymous functions.
    DeanonymizeFunction df = new DeanonymizeFunction(src);
    Dbg.out("Starting pass DEANONYMIZE", 4); 
    src.traverse(root, df);

    // Conduct function definition rearrangement.
    FunctionElevate fe = new FunctionElevate(src);
    Dbg.out("Starting pass ELEVATE", 4); 
    src.traverse(root, fe);

    boolean changed = true;
    StatementSplit ss = new StatementSplit(src);
    while (changed) {
      Dbg.out("Starting pass STATEMENT", 4); 
      src.traverse(root, ss);
      changed = ss.madeChange();
      ss.flagChange(false);
    }

    SplitSetsAndCalls ssc = new SplitSetsAndCalls(src);
    Dbg.out("Starting pass SPLIT", 4); 
    src.traverse(root, ssc);

    // Break up large array literals.
    ArrayLiteralConverter alc = new ArrayLiteralConverter(src);
    Dbg.out("Starting pass ARRAY", 4); 
    src.traverse(root, alc);

    // Break up large string literals.
    StringConverter sc = new StringConverter(src);
    Dbg.out("Starting pass STRING", 4); 
    src.traverse(root, sc);
  }

  public Set<String> getCollapsableTemporaries() {
    return new HashSet<String>(simpleTmpDefs);
  }

  public class StatementSplit extends IterativeTraversal {
    
    public StatementSplit(SourceManager src) {
      super(src);
      tmpDefs = new HashSet<Exp>();
      tmpUses = new HashSet<Exp>();
      simpleTmpDefs = new HashSet<String>();
    }

    protected boolean isVerySimple(Exp n) {
      int childCnt = n.getChildCount();

      if (childCnt == 0) {
        // A leaf node is as simple as it gets.
        return true;
      }
      if (n.isRegExp()) {
        // Never divide up a regular expression.
        return true;
      }
      return false;
    }

    protected boolean isSimpleCall(Traversal t, Exp n, Exp parent) {
      assert n.isCall();
      Exp tgt = n.getFirstChild();
      if (tgt.isAccessor()) {
        if (!isSimpleExpression(t, tgt, n)) return false;
      } else if (!isVerySimple(tgt)) {
        return false;
      }
      int childCnt = n.getChildCount();
      for (int i=1; i<childCnt; i++) {
        Exp arg = n.getChild(i);
        if (!isVerySimple(arg)) return false;
      }
      return true;
    }

    protected boolean isSimpleNew(Traversal t, Exp n, Exp parent) {
      assert n.is(JSExp.NEW);
      int childCnt = n.getChildCount();
      for (int i=0; i<childCnt; i++) {
        Exp c = n.getChild(i);
        if (!isVerySimple(c)) return false;
      }
      return true;
    }

    protected boolean isSimpleAssign(Traversal t, Exp n, Exp parent) {
      Exp lhs = n.getFirstChild();
      if (lhs.isAccessor()) {
        if (!isSimpleExpression(t, lhs, n)) return false;
      } else if (!isVerySimple(lhs)) {
        return false;
      }

      Exp rhs = n.getChild(1);
      if (rhs.isAssignment()) return false;
      return isSimpleExpression(t, rhs, n);
    }

    protected boolean isSimpleExpression(Traversal t, Exp n, Exp parent) {
      if (n == null) {
        assert parent.isReturn();
        return true;
      }
      int childCnt = n.getChildCount();
      int typ = n.getType();
      switch (typ) {
        case JSExp.NAME:
          if (childCnt == 0) return true;
          Exp child = n.getFirstChild();
          if (isVerySimple(child)) return true;
          if (child.isAssignment()) return false;
          return isSimpleExpression(t, child, n);
        case JSExp.ASSIGN:
          return isSimpleAssign(t, n, parent);
        case JSExp.CALL:
          return isSimpleCall(t, n, parent);
        case JSExp.NEW:
          return isSimpleNew(t, n, parent);
        case JSExp.BITOR:
        case JSExp.BITXOR:
        case JSExp.BITAND:
        case JSExp.EQ:
        case JSExp.NE:
        case JSExp.LT:
        case JSExp.LE:
        case JSExp.GT:
        case JSExp.GE:
        case JSExp.LSH:
        case JSExp.RSH:
        case JSExp.URSH:
        case JSExp.ADD:
        case JSExp.SUB:
        case JSExp.MUL:
        case JSExp.DIV:
        case JSExp.MOD:
        case JSExp.SHEQ:
        case JSExp.SHNE:
        case JSExp.IN:
        case JSExp.INSTANCEOF:
          if (!isVerySimple(n.getFirstChild())) return false;
          if (!isVerySimple(n.getChild(1))) return false;
          return true;
        case JSExp.NOT:
        case JSExp.BITNOT:
        case JSExp.POS:
        case JSExp.NEG:
        case JSExp.TYPEOF:
        case JSExp.VOID:
          return isVerySimple(n.getFirstChild());
        case JSExp.DELPROP:
          Exp acc = n.getFirstChild();
          if (isVerySimple(acc)) return true;
          assert acc.isAccessor();
          if (!isVerySimple(acc.getFirstChild())) return false;
          if (!isVerySimple(acc.getChild(1))) return false;
          return true;
        case JSExp.GETPROP:
          if (!isVerySimple(n.getFirstChild())) return false;
          assert isVerySimple(n.getChild(1)) : "GETPROP node with complex property: " + n;
          return false;
        case JSExp.GETELEM:
          if (!isVerySimple(n.getFirstChild())) return false;
          if (!isVerySimple(n.getChild(1))) return false;
          return true;
        case JSExp.NUMBER:
        case JSExp.STRING:
        case JSExp.NULL:
        case JSExp.THIS:
        case JSExp.FALSE:
        case JSExp.TRUE:
        case JSExp.REGEXP:
          return true;
        case JSExp.ARRAYLIT:
          for (int i=0; i<childCnt; i++) {
            Exp elt = n.getChild(i);
            if (!isVerySimple(elt)) return false;
          }
          return true;
        case JSExp.OBJECTLIT:
          for (int i=0; i<childCnt; i++) {
            Exp memb = n.getChild(i);
            // This applies to getter and setter definitions also.
            assert memb.getChildCount() == 1 : "Object literal member without 1 child: " + memb.toCode();
            Exp val = memb.getFirstChild();
            if (!isVerySimple(val)) return false;
          } 
          return true;
        case JSExp.COMMA:
        case JSExp.ASSIGN_BITOR:
        case JSExp.ASSIGN_BITXOR:
        case JSExp.ASSIGN_BITAND:
        case JSExp.ASSIGN_LSH:
        case JSExp.ASSIGN_RSH:
        case JSExp.ASSIGN_URSH:
        case JSExp.ASSIGN_ADD:
        case JSExp.ASSIGN_SUB:
        case JSExp.ASSIGN_MUL:
        case JSExp.ASSIGN_DIV:
        case JSExp.ASSIGN_MOD:
        case JSExp.HOOK:
        case JSExp.PREINC:
        case JSExp.PREDEC:
        case JSExp.POSTINC:
        case JSExp.POSTDEC:
          return false;
        case JSExp.OR:
        case JSExp.AND:
          if (!isVerySimple(n.getFirstChild())) return false;
          if (!isVerySimple(n.getChild(1))) return false;
          return true;
        case JSExp.BREAK:
        case JSExp.CONTINUE:
          return true;
        case JSExp.EMPTY:
          return true;
        case JSExp.LABEL:
        case JSExp.LABEL_NAME:
          return true;
        case JSExp.TRANSACTION:
          Dbg.warn("TRANSACTION expression encountered: " + n);
          return true;
        case JSExp.CAST:
          Dbg.warn("CAST expression encountered: " + n);
          return true;

        case JSExp.FUNCTION:
        case JSExp.EXPR_RESULT:
        case JSExp.VAR:
        case JSExp.THROW:
        case JSExp.RETURN:
        case JSExp.CONST:
        case JSExp.PARAM_LIST:
        case JSExp.IF:
        case JSExp.TRY:
        case JSExp.CATCH:
        case JSExp.SWITCH:
        case JSExp.CASE:
        case JSExp.DEFAULT_CASE:
        case JSExp.WHILE:
        case JSExp.DO:
        case JSExp.FOR:
        case JSExp.BLOCK:
        case JSExp.GETTER_DEF:
        case JSExp.SETTER_DEF:
        case JSExp.STRING_KEY:
        case JSExp.WITH:
        case JSExp.DEBUGGER:
        default:
          throw new UnsupportedOperationException("Unexpected child of parent: " + parent);
      }
    }

    @Override
    public boolean shouldTraverse(Traversal t, Exp n, Exp parent) {
      // %%% Avoid alot of extra work descending into expressions.
      return true;
    }

    // Generate an if/then/else node with vacuous (but present) children.
    // The children should be replaced before the statement is inserted
    // into the source code.
    protected Exp createConditionalNode(boolean withElse) {
      Exp cond = new JSExp(sm, JSExp.FALSE);
      Exp thenClause = new JSExp(sm, JSExp.NULL);
      Exp stmt = null;
      if (withElse) {
        Exp elseClause = new JSExp(sm, JSExp.NULL);
        stmt = new JSExp(JSExp.IF, cond, thenClause, elseClause);
      } else {
        stmt = new JSExp(JSExp.IF, cond, thenClause);
      }
      return stmt;
    }

    protected boolean transformGeneric(Traversal t, Exp n, Exp parent) {
      if (n.isFunction()) {
        // Lift function expressions to function statements.
        // They've all been deanonymized, so the name can be used rather
        // than a temp. variable.
        return transformFunctionExpression(t, n, parent);
      } else {
        Exp tmpName = createNameNode(sm, t.getScope());
        Exp tmpRef = tmpName.clone();
        parent.replaceChild(n, tmpRef);
        tmpName.addChildToBack(n);
        Exp tmpInit = new JSExp(JSExp.VAR, tmpName);
        Exp stmt = ExpUtil.getEnclosingStatement(parent);
        assert stmt != null : "Null parent: " + parent + " / " + n;
        Exp stmtParent = stmt.getParent();
        stmtParent.addChildBefore(tmpInit, stmt);

        String id = tmpName.getString();
        /*
        if (n.isName()) {
          sm.propagateType(n.getString(), id);
        } else if (ExpUtil.returnsBoolean(n)) {
          sm.setType(id, "Boolean");
        } else if (ExpUtil.returnsString(sm, n)) {
          sm.setType(id, "String");
        } else if (ExpUtil.returnsNumber(sm, n)) {
          sm.setType(id, "Number");
        }
        */

        tmpDefs.add(tmpName);
        tmpUses.add(tmpRef);
        simpleTmpDefs.add(id);
        return true;
      }
    }

    protected boolean transformFunctionExpression(Traversal t, Exp n, Exp parent) {
      assert n.isFunction();
      Exp fnName = n.getFirstChild().clone();
      assert fnName.isName();
      parent.replaceChild(n, fnName);
      Exp stmt = ExpUtil.getEnclosingStatement(parent);
      Exp stmtParent = stmt.getParent();
      stmtParent.addChildBefore(n, stmt);
      return true;
    }

    protected boolean isAncestor(Exp n, Exp ancestor) {
      Exp a = n.getParent();
      while (a != null) {
        if (a == ancestor)
          return true;
        a = a.getParent();
      }
      return false;
    }

    protected boolean isModifiableWithinExpression(Traversal t, Exp n, Exp exp) {
      assert n.isName();

      // Conservatively assume that any call may alter the reference.
      // %%% The |blocks| flag probably doesn't make a difference, but
      // %%% for the sake of being conservative.
      if (ExpUtil.containsInvoke(exp, true)) {
        Scope s = t.getScope();
        String name = n.getString();

        // If the variable is declared locally in a function, and the
        // scope doesn't contain any other functions, the reference
        // can't be altered.
        boolean vulnerable = true;
        if (s.isLocal() && s.isDeclared(name, false)) {
          Exp rn = s.getRootExp();
          if (rn.getType() != JSExp.FUNCTION) {
            // This shouldn't happen.
            Dbg.warn("Non-function, non-global variable scope: " + name);
            return true;
          }
          Exp rb = rn.getLastChild();
          assert rb.isBlock() || rb.is(JSExp.EMPTY);
          if (rb.getChildCount() > 0 && rb.getChild(0).getType() == JSExp.FUNCTION) {
            // The scope contains a function, so we can't be sure
            // (without some hard-core analysis).
            // %%% Test this.
            return true;
          }
          // Fall through.
        } else {
          return true;
        }
      }
      // Or any mention of the LHS on the RHS.
      if (ExpUtil.mayDirectlyModifyName(exp, n.getString())) {
        return true;
      }
      // %%% Both cases are overly conservative, but difficult to make
      // %%% more precise.

      return false;
    }

    protected boolean transformAssignLHS(Traversal t, Exp lhs, Exp n) {
      assert n.isAssignment();
      boolean chng = false;
      if (lhs.isAccessor()) {
        Exp obj = lhs.getFirstChild();
        if (isVerySimple(obj)) {
          if (obj.isName() && !tmpUses.contains(obj)) {
            Exp rhs = ExpUtil.getAssignRHS(n);
            if (isModifiableWithinExpression(t, obj, rhs)) {
              if (transformGeneric(t, obj, lhs)) chng = true;
            }
          }
        } else {
          if (transformGeneric(t, obj, lhs)) chng = true;
        }
        Exp prop = lhs.getChild(1);
        if (isVerySimple(prop)) {
          if (prop.isName() && !tmpUses.contains(prop)) {
            Exp rhs = ExpUtil.getAssignRHS(n);
            if (isModifiableWithinExpression(t, prop, rhs)) {
              if (transformGeneric(t, prop, lhs)) chng = true;
            }
          }
        } else {
          if (transformGeneric(t, prop, lhs)) chng = true;
        }
      } else if (!isVerySimple(lhs)) {
        Dbg.warn("Unknown assign LHS type: " + lhs);
      }
      return chng;
    }

    // This is for regular ASSIGN nodes only.
    protected boolean transformAssign(Traversal t, Exp n, Exp parent) {
      assert n.isAssign();
      boolean chng = false;
      Exp lhs = n.getFirstChild();
      if (transformAssignLHS(t, lhs, n)) chng = true;

      // Defer changing the RHS until the LHS is all done.
      if (!chng) {
        Exp rhs = n.getChild(1);
        if (!isSimpleExpression(t, rhs, n)) {
          if (transform(t, rhs, n)) chng = true;
        }
      }
      
      return chng;
    }

    protected boolean transformCall(Traversal t, Exp n, Exp parent) {
      boolean chng = false;
      Exp tgt = n.getFirstChild();
      if (tgt.isAccessor()) {
        if (transformBinary(t, tgt, n)) chng = true;
      } else if (!isVerySimple(tgt)) {
        if (transformGeneric(t, tgt, n)) chng = true;
      }
      int childCnt = n.getChildCount();
      for (int i=1; i<childCnt; i++) {
        Exp arg = n.getChild(i);
        if (!isVerySimple(arg)) {
          if (transformGeneric(t, arg, n)) chng = true;
        }
      }
      return chng;
    }

    protected boolean transformCompound(Traversal t, Exp n, Exp parent) {
      // For constructor calls, accessors don't needs to be kept
      // intact because there will be a fresh |this| object.
      boolean chng = false;
      int childCnt = n.getChildCount();
      for (int i=0; i<childCnt; i++) {
        Exp c = n.getChild(i);
        if (!isVerySimple(c)) {
          if (transformGeneric(t, c, n)) chng = true;
        }
      }
      return chng;
    }

    protected void extractEtter(Traversal t, Exp stmt, Exp defObj, Exp etter) {
      Exp fn = etter.getFirstChild();
      assert fn.isFunction();

      // Detach the nodes.
      etter.detachFromParent();
      fn.detachFromParent();

      // Create a name for the function.
      Exp newName = createNameNode(sm, t.getScope());

      // Replace the current (empty) name with the generated one.
      fn.replaceChild(fn.getChild(0), newName);
      tmpDefs.add(newName);

      // Insert the new function declaration.
      stmt.getParent().addChildBefore(fn, stmt);

      Exp defKey = JSExp.createStringKey(sm, etter.is(JSExp.GETTER_DEF) ? "get" : "set");
      Exp defVal = newName.clone();
      tmpUses.add(defVal);
      defKey.addChildToBack(defVal);
      defObj.addChildToBack(defKey);
    }

    protected void extractEtters(Traversal t, String propName, Exp getter, Exp setter, Exp parent, Exp assn) {
      assert getter != null || setter != null;
      assert parent.is(JSExp.OBJECTLIT);

      // Note the statement in front of which we'll put the new function
      // declaration.
      Exp stmt = ExpUtil.getEnclosingStatement(parent);

      // This is the property declaration object.
      Exp defObj = new JSExp(sm, JSExp.OBJECTLIT);
      
      if (getter != null) {
        extractEtter(t, stmt, defObj, getter);
      }
      
      if (setter != null) {
        extractEtter(t, stmt, defObj, setter);
      }

      // Create |Object.defineProperty(objName, 'prop', {'get': fn})|.

      // This is the left-hand side of the assignment.
      Exp objName = assn.clone();

      Exp prop = JSExp.createString(sm, propName);

      Exp objObject = JSExp.createName(sm, "Object");
      Exp defProp = JSExp.createString(sm, "defineProperty");
      Exp defMeth = new JSExp(JSExp.GETPROP, objObject, defProp);
      Exp callExpr = new JSExp(JSExp.CALL, defMeth, objName, prop, defObj);
      Exp callStmt = new JSExp(JSExp.EXPR_RESULT, callExpr);
      stmt.getParent().addChildAfter(callStmt, stmt);
    }

    protected boolean transformEtters(Traversal t, Exp n, Exp parent, Map<String,Exp> getters, Map<String,Exp> setters) {
      boolean chng = false;
      Exp stmt = ExpUtil.getEnclosingStatement(n);
      for (Map.Entry<String,Exp> entry : getters.entrySet()) {
        String propName = entry.getKey();
        Exp getter = entry.getValue();
        Exp setter = null;
        if (setters.containsKey(propName)) {
          setter = setters.get(propName);
          setters.remove(propName);
        }
        // Can only process this if the object literal is assigned to
        // a name.
        Exp lhs = ExpUtil.getAssignLHS(stmt);
        if (lhs != null) {
          Exp rhs = stmt.cloneAssignRHS();
          if (rhs.getOriginal() == n) {
            extractEtters(t, propName, getter, setter, n, lhs);
            chng = true;
          } else {
            Dbg.warn("Object literal embedded in compound expression: " + n);
          }
        } else if (parent.is(JSExp.EXPR_RESULT)) {
          // This would be strange, but this is in case there's an
          // object literal as a floating expression. Print a warning
          // and don't flag more.
          Dbg.warn("Floating object literal with getter " + (setter == null ? ":" : " and setter:") + parent);
        }
      }
      for (Map.Entry<String,Exp> entry : setters.entrySet()) {
        String propName = entry.getKey();
        Exp setter = entry.getValue();
        assert !getters.containsKey(propName);

        // Can only process this if the object literal is assigned to
        // a name.
        Exp lhs = ExpUtil.getAssignLHS(stmt);
        if (lhs != null) {
          Exp rhs = stmt.cloneAssignRHS();
          if (rhs.getOriginal() == n) {
            extractEtters(t, propName, null, setter, n, lhs);
            chng = true;
          } else {
            Dbg.warn("Object literal embedded in compound expression: " + n);
          }
        } else if (n.getParent().is(JSExp.EXPR_RESULT)) {
          // This would be strange, but this is in case there's an
          // object literal as a floating expression. Print a warning
          // and don't flag more.
          Dbg.warn("Floating object literal with setter:" + parent);
        }
      }
      return chng;
    }

    protected boolean transformObjectLit(Traversal t, Exp n, Exp parent) {
      boolean chng = false;
      Map<String,Exp> getters = new LinkedHashMap<String,Exp>();
      Map<String,Exp> setters = new LinkedHashMap<String,Exp>();
      int childCnt = n.getChildCount();
      for (int i=0; i<childCnt; i++) {
        Exp memb = n.getChild(i);
        if (memb.is(JSExp.GETTER_DEF)) {
          getters.put(memb.getString(), memb);
          continue;
        } else if (memb.is(JSExp.SETTER_DEF)) {
          setters.put(memb.getString(), memb);
          continue;
        }
        assert memb.getChildCount() == 1;
        Exp val = memb.getFirstChild();
        if (!isVerySimple(val)) {
          if (transformGeneric(t, val, memb)) chng = true;
        }
      } 
      if (transformEtters(t, n, parent, getters, setters)) chng = true;
      return chng;
    }

    protected Exp expandLogicalFirst(Traversal t, Exp n, Exp parent) {
      Exp op0 = n.getFirstChild().detachFromParent();
      
      // Create a temporary variable to hold the value that the
      // first operand evaluates to.
      Exp tmp = createNameNode(sm, t.getScope());

      // Create a var initializer for the new variable, and assign it
      // the value of the first operand.
      Exp tmpInit = tmp.clone();
      tmpDefs.add(tmpInit);
      Exp op0Assign = new JSExp(JSExp.VAR, tmpInit);
      op0Assign.getFirstChild().addChildToBack(op0);

      // And insert it into the program prior to the enclosing statement.
      Exp enclosing = ExpUtil.getEnclosingStatement(n);
      enclosing.getParent().addChildBefore(op0Assign, enclosing);

      return tmp;
    }

    protected void insertLogicalConditional(Traversal t, Exp n, Exp parent, Exp cond, Exp thenBlock) {
      // Generate a new if/then framework node.
      Exp stmt = createConditionalNode(false);

      // Fill in the new conditional.
      stmt.replaceChild(stmt.getFirstChild(), cond);
      stmt.replaceChild(stmt.getChild(1), thenBlock);

      // Insert the new if/then/else statement.
      Exp enclosing = ExpUtil.getEnclosingStatement(n);
      enclosing.getParent().addChildBefore(stmt, enclosing);
    }

    // Convert an AND expression to a conditional statement.
    //
    // var x = y && z;
    // ==>
    // var tmp = y;
    // if (tmp) {
    //   tmp = z;
    // }
    // var x = tmp;
    protected void expandAndValue(Traversal t, Exp n, Exp parent) {
      // Extract the first operand into a temporary.
      Exp cond = expandLogicalFirst(t, n, parent);

      // Get the second operand (which is now the first).
      Exp op1 = n.getChild(0).detachFromParent();

      // The value of the first operand determines the control flow.
      // That is, the second operand is only evaluated if the first
      // one is true.
      Exp tmpRef = cond.clone();

      // Create an assignment statement capturing the value of the
      // second operand to be placed within the conditional block.
      Exp tmpOp1 = cond.clone();
      Exp op1Assign = new JSExp(JSExp.ASSIGN, tmpOp1, op1);
      tmpUses.add(tmpOp1);
      op1Assign = new JSExp(JSExp.EXPR_RESULT, op1Assign);
      Exp thenBlock = new JSExp(JSExp.BLOCK, op1Assign);

      // Create and insert the conditional before the statement.
      insertLogicalConditional(t, n, parent, cond, thenBlock);
      tmpUses.add(cond);

      // Replace the original logical AND statement with the result
      // value.
      parent.replaceChild(n, tmpRef);
      tmpUses.add(tmpRef);
    }

    // Convert a stand-alone AND expression with a simple first operand
    // to a conditional statement.
    //
    // x || g();
    // ==>
    // if (x) {
    //   g();
    // }
    protected void expandAndSimple(Traversal t, Exp n, Exp parent) {
      Exp enclosing = ExpUtil.getEnclosingStatement(n);

      // Extract the two operands.
      Exp op1 = n.getChild(1).detachFromParent();
      Exp op0 = n.getFirstChild().detachFromParent();

      // The value of the first operand determines the control flow.
      // That is, the second operand is only evaluated if the first
      // one is true.
      Exp cond = op0;

      // Create an assignment statement capturing the value of the
      // second operand to be placed within the conditional block.
      Exp op1Stmt = new JSExp(JSExp.EXPR_RESULT, op1);
      Exp thenBlock = new JSExp(JSExp.BLOCK, op1Stmt);

      // Create and insert a conditional before the original statement.
      insertLogicalConditional(t, n, parent, cond, thenBlock);

      // Remove the original logical AND expression and it's wrapper. 
      parent.getParent().removeChild(parent);
    }

    // Convert a stand-alone AND expression to a conditional statement.
    //
    // f() && g();
    // ==>
    // var tmp = f();
    // if (tmp) {
    //   g();
    // }
    protected void expandAnd(Traversal t, Exp n, Exp parent) {
      // Extract the first operand into a temporary.
      Exp cond = expandLogicalFirst(t, n, parent);

      // Get the second operand (which is now the first).
      Exp op1 = n.getChild(0).detachFromParent();

      // Create an assignment statement capturing the value of the
      // second operand to be placed within the conditional block.
      Exp op1Stmt = new JSExp(JSExp.EXPR_RESULT, op1);
      Exp thenBlock = new JSExp(JSExp.BLOCK, op1Stmt);

      // Create and insert a conditional before the original statement.
      insertLogicalConditional(t, n, parent, cond, thenBlock);
      tmpUses.add(cond);

      // Remove the original logical AND expression and its wrapper. 
      parent.getParent().removeChild(parent);
    }

    // Convert an OR expression to a conditional statement.
    //
    // var x = y || z;
    // ==>
    // var tmp = y;
    // if (!tmp) {
    //   tmp = z;
    // }
    // var x = tmp;
    protected void expandOrValue(Traversal t, Exp n, Exp parent) {
      // Extract the first operand into a temporary.
      Exp cond = expandLogicalFirst(t, n, parent);

      // Get the second operand (which is now the first).
      Exp op1 = n.getChild(0).detachFromParent();

      // The value of the first operand determines the control flow.
      // That is, the second operand is only evaluated if the first
      // one is false.
      Exp tmpRef = cond.clone();
      Exp notCond = new JSExp(JSExp.NOT, cond);

      // Create an assignment statement capturing the value of the
      // second operand to be placed within the conditional block.
      Exp tmpOp1 = cond.clone();
      Exp op1Assign = new JSExp(JSExp.ASSIGN, tmpOp1, op1);
      tmpUses.add(tmpOp1);
      op1Assign = new JSExp(JSExp.EXPR_RESULT, op1Assign);
      Exp thenBlock = new JSExp(JSExp.BLOCK, op1Assign);

      // Create and insert a conditional before the original statement.
      insertLogicalConditional(t, n, parent, notCond, thenBlock);
      tmpUses.add(cond);

      // Replace the original logical OR statement with the result
      // value.
      parent.replaceChild(n, tmpRef);
      tmpUses.add(tmpRef);
    }

    // Convert a stand-alone OR expression with a simple first operand
    // to a conditional statement.
    //
    // x || g();
    // ==>
    // if (!x) {
    //   g();
    // }
    protected void expandOrSimple(Traversal t, Exp n, Exp parent) {
      Exp enclosing = ExpUtil.getEnclosingStatement(n);

      // Extract the two operands.
      Exp op1 = n.getChild(1).detachFromParent();
      Exp op0 = n.getFirstChild().detachFromParent();

      // The value of the first operand determines the control flow.
      // That is, the second operand is only evaluated if the first
      // one is false.
      Exp notCond = new JSExp(JSExp.NOT, op0);

      // Wrap the second operand to be placed within the conditional.
      Exp op1Stmt = new JSExp(JSExp.EXPR_RESULT, op1);
      Exp thenBlock = new JSExp(JSExp.BLOCK, op1Stmt);

      // Create and insert a conditional before the original statement.
      insertLogicalConditional(t, n, parent, notCond, thenBlock);

      // Remove the original logical OR statement;
      parent.getParent().removeChild(parent);
    }

    // Convert a stand-alone OR expression to a conditional statement.
    //
    // f() || g();
    // ==>
    // var tmp = f();
    // if (!tmp) {
    //   g();
    // }
    protected void expandOr(Traversal t, Exp n, Exp parent) {
      // Extract the first operand into a temporary.
      Exp cond = expandLogicalFirst(t, n, parent);
      Exp notCond = new JSExp(JSExp.NOT, cond);

      // Get the second operand (which is now the first).
      Exp op1 = n.getChild(0).detachFromParent();

      // Create an assignment statement capturing the value of the
      // second operand to be placed within the conditional block.
      Exp op1Stmt = new JSExp(JSExp.EXPR_RESULT, op1);
      Exp thenBlock = new JSExp(JSExp.BLOCK, op1Stmt);

      // Create and insert a conditional before the original statement.
      insertLogicalConditional(t, n, parent, notCond, thenBlock);
      tmpUses.add(cond);

      // Remove the original logical AND expression and its wrapper. 
      parent.getParent().removeChild(parent);
    }

    protected boolean transformAnd(Traversal t, Exp n, Exp parent) {
      if (parent.is(JSExp.EXPR_RESULT)) {
        if (n.getFirstChild().isName()) {
          expandAndSimple(t, n, parent);
        } else {
          expandAnd(t, n, parent);
        }
      } else {
        expandAndValue(t, n, parent);
      }
      return true;
    }

    protected boolean transformOr(Traversal t, Exp n, Exp parent) {
      if (parent.is(JSExp.EXPR_RESULT)) {
        if (n.getFirstChild().isName()) {
          expandOrSimple(t, n, parent);
        } else {
          expandOr(t, n, parent);
        }
      } else {
        expandOrValue(t, n, parent);
      }
      return true;
    }

    protected boolean transformComma(Traversal t, Exp n, Exp parent) {
      Exp c1 = n.getChild(1).detachFromParent();
      Exp c0 = n.getChild(0).detachFromParent();
      Exp wrapper = new JSExp(JSExp.EXPR_RESULT, c0);
      Exp stmt = ExpUtil.getEnclosingStatement(n);
      stmt.getParent().addChildBefore(wrapper, stmt);
      parent.replaceChild(n, c1);
      return true;
    }

    protected boolean transformIncDec(Traversal t, Exp n, Exp parent) {
      if (ExpUtil.isPostfixUnOp(n) && (parent.isReturn()
          || parent.isThrow())) {
        // This case (obscure as it might be) cannot be transformed.
        return false;
      }
      // The very simple case is desirable to keep around.
      if (parent.is(JSExp.EXPR_RESULT)) {
        return false;
      }

      int newOp = -1;
      switch (n.getType()) {
        case JSExp.PREINC:
        case JSExp.POSTINC:
          newOp = JSExp.ADD;
          break;
        case JSExp.PREDEC:
        case JSExp.POSTDEC:
          newOp = JSExp.SUB; 
          break;
        default:
          assert false : "Unexpected unary operator: " + n;
      }

      Exp ref = n.getFirstChild().detachFromParent();
      Exp refCopy = ref.clone();
      Exp newRhs = new JSExp(newOp, refCopy, JSExp.createNumber(sm, 1));
      Exp assign = new JSExp(JSExp.ASSIGN, ref, newRhs);

      if (ExpUtil.isPostfixUnOp(n) && !parent.is(JSExp.EXPR_RESULT)) {
        Exp refSub = ref.clone();
        parent.replaceChild(n, refSub);
        Exp exRes = new JSExp(JSExp.EXPR_RESULT, assign);
        Exp stmt = ExpUtil.getEnclosingStatement(parent);
        Exp stmtParent = stmt.getParent();
        stmtParent.addChildAfter(exRes, stmt);
      } else {
        parent.replaceChild(n, assign);
      }
      return true;
    }

    protected boolean transformCompoundAssign(Traversal t, Exp n, Exp parent) {
      boolean chng = false;
      Exp lhs = ExpUtil.getAssignLHS(n);
      if (transformAssignLHS(t, lhs, n)) chng = true;

      if (!chng) {
        Exp lhsCopy = lhs.clone();
        Exp rhs = n.cloneAssignRHS();
        lhs.detachFromParent();
        int newOp = -1;
        switch (n.getType()) {
          case JSExp.ASSIGN_BITOR:
            newOp = JSExp.BITOR;
            break;
          case JSExp.ASSIGN_BITXOR:
            newOp = JSExp.BITXOR;
            break;
          case JSExp.ASSIGN_BITAND:
            newOp = JSExp.BITAND;
            break;
          case JSExp.ASSIGN_LSH:
            newOp = JSExp.LSH;
            break;
          case JSExp.ASSIGN_RSH:
            newOp = JSExp.RSH;
            break;
          case JSExp.ASSIGN_URSH:
            newOp = JSExp.URSH;
            break;
          case JSExp.ASSIGN_ADD:
            newOp = JSExp.ADD;
            break;
          case JSExp.ASSIGN_SUB:
            newOp = JSExp.SUB;
            break;
          case JSExp.ASSIGN_MUL:
            newOp = JSExp.MUL;
            break;
          case JSExp.ASSIGN_DIV:
            newOp = JSExp.DIV;
            break;
          case JSExp.ASSIGN_MOD:
            newOp = JSExp.MOD;
            break;
          default:
            assert false : "Unknown assignment operator: " + n;      
        }
        Exp newRhs = new JSExp(newOp, lhsCopy, rhs);
        Exp assign = new JSExp(JSExp.ASSIGN, lhs, newRhs);
        parent.replaceChild(n, assign);
        chng = true;
      }
      return chng;
    }

    protected boolean transformHook(Traversal t, Exp n, Exp parent) {
      // Create a temporary variable to hold the value that the
      // conditional evaluates to.
      Exp tmpRef = createNameNode(sm, t.getScope());
      Exp tmpDef = tmpRef.clone();

      // Create a var initializer for the new variable.
      Exp tmpDecl = new JSExp(JSExp.VAR, tmpDef);
      tmpDefs.add(tmpDef);
      // And insert it into the program prior to the enclosing statement.
      Exp enclosing = ExpUtil.getEnclosingStatement(n);
      enclosing.getParent().addChildBefore(tmpDecl, enclosing);

      // Generate a new if/then/else framework node.
      Exp stmt = createConditionalNode(true);

      // Get the statement to evaluate if the condition is false.
      Exp elseStmt = n.getChild(2).detachFromParent();
      // Get the statement to evaluate if the condition is true.
      Exp thenStmt = n.getChild(1).detachFromParent();
      // Isolate the condition.
      Exp cond = n.getChild(0).detachFromParent();

      // Create an assignment statement capturing the value of the
      // then branch.
      Exp tmpThen = tmpRef.clone();
      Exp thenAssn = new JSExp(JSExp.ASSIGN, tmpThen, thenStmt);
      Exp thenAssign = new JSExp(JSExp.EXPR_RESULT, thenAssn);
      tmpUses.add(tmpThen);

      // Create an assignment statement capturing the value of the
      // else branch.
      Exp tmpElse = tmpRef.clone();
      Exp elseAssn = new JSExp(JSExp.ASSIGN, tmpElse, elseStmt);
      Exp elseAssign = new JSExp(JSExp.EXPR_RESULT, elseAssn);
      tmpUses.add(tmpElse);

      // Wrap the then and else expressions in a block.
      Exp elseBlock = new JSExp(JSExp.BLOCK, elseAssign);
      Exp thenBlock = new JSExp(JSExp.BLOCK, thenAssign);

      // Fill in the new conditional.
      stmt.replaceChild(stmt.getFirstChild(), cond);
      stmt.replaceChild(stmt.getChild(1), thenBlock);
      stmt.replaceChild(stmt.getChild(2), elseBlock);

      // Replace the original ternary conditional with the result value.
      parent.replaceChild(n, tmpRef);
      tmpUses.add(tmpRef);

      // And finally, insert the new if/then/else statement.
      enclosing.getParent().addChildBefore(stmt, enclosing);
      return true;
    }

    protected boolean transformBinary(Traversal t, Exp n, Exp parent) {
      boolean chng = false;
      Exp left = n.getFirstChild();
      Exp right = n.getChild(1);

      if (isVerySimple(left)) {
        if (left.isName() && !tmpUses.contains(left)
            && isModifiableWithinExpression(t, left, right)) {
          // See microbenchmark order0.js for why this is needed.
          if (transformGeneric(t, left, n)) chng = true;
        }
      } else {
        if (transformGeneric(t, left, n)) chng = true; 
      }

      if (!isVerySimple(right)) {
        if (transformGeneric(t, right, n)) chng = true; 
      }
      return chng;
    }

    protected boolean transform(Traversal t, Exp n, Exp parent) {
      boolean chng = false;
      int childCnt = n.getChildCount();
      int typ = n.getType();
      switch (typ) {
        case JSExp.NAME:
          assert childCnt > 0;
          Exp val = n.getFirstChild();
          assert !isVerySimple(val);
          return transform(t, val, n);
        case JSExp.ASSIGN:
          return transformAssign(t, n, parent);
        case JSExp.CALL:
          return transformCall(t, n, parent);
        case JSExp.NEW:
          return transformCompound(t, n, parent);
        case JSExp.BITOR:
        case JSExp.BITXOR:
        case JSExp.BITAND:
        case JSExp.EQ:
        case JSExp.NE:
        case JSExp.LT:
        case JSExp.LE:
        case JSExp.GT:
        case JSExp.GE:
        case JSExp.LSH:
        case JSExp.RSH:
        case JSExp.URSH:
        case JSExp.ADD:
        case JSExp.SUB:
        case JSExp.MUL:
        case JSExp.DIV:
        case JSExp.MOD:
        case JSExp.SHEQ:
        case JSExp.SHNE:
        case JSExp.IN:
        case JSExp.INSTANCEOF:
          return transformBinary(t, n, parent);
        case JSExp.NOT:
        case JSExp.BITNOT:
        case JSExp.POS:
        case JSExp.NEG:
        case JSExp.TYPEOF:
        case JSExp.VOID:
          Exp c = n.getFirstChild();
          assert !isVerySimple(c);
          return transformGeneric(t, c, n);
        case JSExp.DELPROP:
          parent = n;
          n = n.getFirstChild();
          // Fall through.
        case JSExp.GETPROP:
        case JSExp.GETELEM:
          assert ExpUtil.isAccessor(n);
          return transformBinary(t, n, parent);
        case JSExp.ARRAYLIT:
          return transformCompound(t, n, parent);
        case JSExp.OBJECTLIT:
          return transformObjectLit(t, n, parent);
        case JSExp.ASSIGN_BITOR:
        case JSExp.ASSIGN_BITXOR:
        case JSExp.ASSIGN_BITAND:
        case JSExp.ASSIGN_LSH:
        case JSExp.ASSIGN_RSH:
        case JSExp.ASSIGN_URSH:
        case JSExp.ASSIGN_ADD:
        case JSExp.ASSIGN_SUB:
        case JSExp.ASSIGN_MUL:
        case JSExp.ASSIGN_DIV:
        case JSExp.ASSIGN_MOD:
          return transformCompoundAssign(t, n, parent);
        case JSExp.PREINC:
        case JSExp.PREDEC:
        case JSExp.POSTINC:
        case JSExp.POSTDEC:
          return transformIncDec(t, n, parent);
        case JSExp.COMMA:
          return transformComma(t, n, parent);
        case JSExp.HOOK:
          return transformHook(t, n, parent);
        case JSExp.OR:
          return transformOr(t, n, parent);
        case JSExp.AND:
          return transformAnd(t, n, parent);
        default:
          throw new UnsupportedOperationException("Unexpected node type to transform: " + n);
      }
    }

    protected boolean transformWhile(Traversal t, Exp n, Exp parent) {
      assert n.is(JSExp.WHILE) || n.is(JSExp.DO);

      // Insert the condition prior to the loop and at the end of the
      // loop's block.
      Exp cond = ExpUtil.getCondition(n);
      // If the condition is a simple reference or literal, just leave it.
      if (isVerySimple(cond)) return false;

      // Create a temporary variable to hold the value that the
      // conditional evaluates to.
      Exp tmp = createNameNode(sm, t.getScope());

      // Create a var initializer for the new variable.
      Exp tmpInit = tmp.clone();
      tmpDefs.add(tmpInit);
      tmpInit.addChildToBack(cond.clone());
      tmpInit = new JSExp(JSExp.VAR, tmpInit);

      // Replace the condition with the new name.
      n.replaceChild(cond, tmp);
      tmpUses.add(tmp);

      // Finally, create an update statement and insert it at the
      // end of the block.
      Exp tmpLeft = tmp.clone();
      Exp tmpAssn = new JSExp(JSExp.ASSIGN, tmpLeft, cond);
      tmpUses.add(tmpLeft);
      tmpAssn = new JSExp(JSExp.EXPR_RESULT, tmpAssn);
      Exp block = null;
      if (n.is(JSExp.WHILE)) {
        block = n.getLastChild();
      } else {
        assert n.is(JSExp.DO);
        block = n.getFirstChild();
      }
      assert block.isBlock();
      block.addChildToBack(tmpAssn);

      // Insert the initializer prior to the control statement.
      // It must also go prior to a potential label.
      if (parent.getType() == JSExp.LABEL) {
        n = parent;
        parent = parent.getParent();
      }
      parent.addChildBefore(tmpInit, n);
      
      return true;
    }

    protected boolean transformWith(Traversal t, Exp n, Exp parent) {
      assert n.is(JSExp.WITH);

      boolean changed = false;

      Exp obj = n.getFirstChild();

      if (!isVerySimple(obj)) {
        // Create a temporary variable to hold the object value that
        // the expression evaluates to.
        Exp tmp = createNameNode(sm, t.getScope());

        // Create a var initializer for the new variable.
        Exp tmpInit = tmp.clone();
        tmpDefs.add(tmpInit);
        tmpInit.addChildToBack(obj.clone());
        tmpInit = new JSExp(JSExp.VAR, tmpInit);

        // Replace the object expression with the new name.
        n.replaceChild(obj, tmp);
        tmpUses.add(tmp);
          
        // Insert the initializer prior to the WITH statement.
        // It must also go prior to a potential label.
        Exp stmt = n;
        Exp stmtParent = parent;
        if (stmtParent.getType() == JSExp.LABEL) {
          stmt = stmtParent;
          stmtParent = stmtParent.getParent();
        }
        stmtParent.addChildBefore(tmpInit, stmt);

        changed = true;
      }

      // %%% It might be possible to implement the described transform.

      // Get the block of statements within the WITH.

      // In each statement, we want to replace each NAME access with a
      // conditional to end up with something like this.
      //
      // x = y;
      // ==>
      // if ("y" in o) {
      //  tmp = o.y;
      // } else {
      //  tmp = y; 
      // }
      // if ("x" in o) {
      //   o.x = tmp;
      // } else {
      //   x = tmp;
      // }
      //
      // Since this may require different logic for each node type,
      // just maintain a mapping from statements to the object node that
      // is in effect, and handle the cases when those statements are
      // transformed.

      // In particular, a direct eval needs to be rewrapped in a WITH
      // (externally, or with string concatenation in the argument).


      return changed;
    }

    protected boolean isBlockEscape(Exp n) {
      if (n == null) return false;
      if (n.isReturn()) return true;
      if (n.isThrow()) return true;
      if (n.is(JSExp.CONTINUE)) return true;
      if (n.is(JSExp.BREAK)) return true;
      return false;
    }

    protected List<Exp> getControlBlocks(Exp ctrl) {
      assert ExpUtil.isControl(ctrl);
      List<Exp> ret = new ArrayList<Exp>();
      if (ctrl.is(JSExp.IF)) {
        int childCnt = ctrl.getChildCount();
        // %%% Correct for if-elif-else?
        for (int i=1; i<childCnt; i++) {
          ret.add(ctrl.getChild(i));
        }
      } else if (ctrl.is(JSExp.WHILE)) {
        ret.add(ctrl.getLastChild());
      } else if (ctrl.is(JSExp.DO)) {
        ret.add(ctrl.getFirstChild());
      } else if (ctrl.is(JSExp.SWITCH)) {
        int childCnt = ctrl.getChildCount();
        // %%% Correct to skip first child?
        for (int i=1; i<childCnt; i++) {
          Exp c = ctrl.getChild(i);
          Exp block = null;
          if (c.is(JSExp.CASE)) {
            block = c.getChild(1);
          } else {
            assert c.is(JSExp.DEFAULT_CASE);
            block = c.getFirstChild();
          }
          int blockChildCnt = block.getChildCount();
          if (blockChildCnt > 0 && block.getFirstChild().isBlock()) {
            // Case blocks may be wrapped, and break statements occupy a
            // second sub-block.
            assert blockChildCnt == 1 || (blockChildCnt == 2 && block.getChild(1).is(JSExp.BREAK))
              : "Unknown sub-block format for case statement: " + c.toCode();
            block = block.getFirstChild();
          }
          assert block.isBlock();
          ret.add(block);
        }
      } else if (ctrl.is(JSExp.TRY)) {
        int childCnt = ctrl.getChildCount();
        assert childCnt > 0;
        ret.add(ctrl.getFirstChild());
        // Catch block may be found but be null.
        if (childCnt > 1) {
          Exp catches = ctrl.getChild(1);
          if (catches != null) {
            assert catches.isBlock() : "Unexpected TRY child: " + ctrl + " / " + catches;
            int catchCnt = catches.getChildCount();
            for (int i=0; i<catchCnt; i++) {
              Exp catchNode = catches.getChild(i);
              assert catchNode.is(JSExp.CATCH);
              assert catchNode.getChildCount() == 2;
              Exp catchBlock = catchNode.getChild(1);
              assert catchBlock.isBlock();
              ret.add(catchBlock);
            }
          }
          if (childCnt > 2) {
            Exp finallyBlock = ctrl.getChild(2);
            assert finallyBlock.isBlock();
            ret.add(finallyBlock);
          }
        }
      } else if (ExpUtil.isStandardFor(ctrl)) {
        ret.add(ctrl.getLastChild());
      } else if (ExpUtil.isForIn(ctrl)) {
        ret.add(ctrl.getLastChild());
      } else if (ctrl.is(JSExp.WITH)) {
        ret.add(ctrl.getLastChild());
      } else {
        Dbg.warn("Unhandled control block: " + ctrl);
      }
      return ret;
    }

    protected boolean prepareContinueStatements(Traversal t, Exp incr, Exp cond, Exp ctrl, String label, boolean nested) {
      boolean ret = false;
      assert ExpUtil.isControl(ctrl);
      List<Exp> blocks = getControlBlocks(ctrl);

      // Loop backwards since we may insert children.
      for (Exp block : blocks) {
        int childCnt = block.getChildCount();
        for (int i=childCnt-1; i>=0; i--) {
          Exp n = block.getChild(i);
          if (n.is(JSExp.CONTINUE)) {
            boolean doInsert = true;
            if (nested) {
              doInsert = false;
              // Check that the right label is found.
              if (label != null && n.getChildCount() > 0) {
                Exp lbl = n.getFirstChild();
                if (lbl.getString().equals(label)) {
                  doInsert = true;
                }
              }
            }
            if (doInsert) {
              if (incr != null) {
                Exp incrCopy = incr.clone();
                block.addChildBefore(incrCopy, n);
              }
              if (cond != null) {
                Exp condCopy = cond.clone();
                block.addChildBefore(condCopy, n);
              }
              ret = true;
            }
          } else if (ExpUtil.isControl(n)) {
            // Recurse on nested blocks.
            if (ExpUtil.isLoop(n)) {
              // If label exists, find corresponding |continue|'s.
              if (label != null) {
                prepareContinueStatements(t, incr, cond, n, label, true);
              }
            } else {
              prepareContinueStatements(t, incr, cond, n, label, nested);
            }
          }
        }
      }
      return ret;
    }

    protected boolean transformStandardFor(Traversal t, Exp n, Exp parent) {
      assert ExpUtil.isStandardFor(n);

      // Extract the loop iterator and insert it at the end of block.
      Exp incr = n.getChild(2);
      boolean complexIncr = !isVerySimple(incr);
      //complexIncr = false; // %%% Disabling this

      // Insert the condition prior to the loop and at the end of the
      // loop's block. This should place it after the incrementor,
      // which maintains semantics.
      // If the condition is a simple reference, just leave it.
      Exp cond = ExpUtil.getCondition(n);
      boolean complexCond = !isVerySimple(cond);
      //complexCond = false; // %%% Disabling this

      if (!complexIncr && !complexCond) return false;

      String labelName = null;

      if (complexIncr) {
        // Remove the incrementor from the loop construct.
        n.replaceChild(incr, new JSExp(sm, JSExp.EMPTY));

        // Wrap the incrementor.
        incr = new JSExp(JSExp.EXPR_RESULT, incr);
      }

      if (complexCond) {
        // Create a temporary variable to hold the value that the
        // conditional evaluates to.
        Exp tmp = createNameNode(sm, t.getScope());

        // Create a var initializer for the new variable.
        Exp tmpInit = tmp.clone();
        tmpDefs.add(tmpInit);
        tmpInit = new JSExp(JSExp.VAR, tmpInit);
        tmpInit.getFirstChild().addChildToBack(cond.clone());

        // Replace the condition with the new name.
        n.replaceChild(cond, tmp);
        tmpUses.add(tmp);

        // Insert the initializer prior to the control statement.
        // It must also go prior to a potential label.
        Exp insertPoint = n;
        Exp insertParent = parent;
        if (parent.is(JSExp.LABEL)) {
          insertPoint = parent;
          insertParent = insertParent.getParent();
          // This is needed to process |continue| statements.
          labelName = parent.getFirstChild().getString();
        }
        insertParent.addChildBefore(tmpInit, insertPoint);

        // Finally, create an update statement and insert it at the
        // end of the block.
        Exp tmpLeft = tmp.clone();
        cond = new JSExp(JSExp.ASSIGN, tmpLeft, cond);
        tmpUses.add(tmpLeft);
        cond = new JSExp(JSExp.EXPR_RESULT, cond);
      }

      // The increment statement must be inserted immediately prior to
      // all |continue| statements.
      prepareContinueStatements(t, complexIncr ? incr : null, complexCond ? cond : null, n, labelName, false);

      // If the last statement in the block breaks out of the loop,
      // don't insert anything after it.
      Exp block = n.getLastChild();
      assert block.isBlock();
      if (block.getChildCount() == 0 || !isBlockEscape(block.getLastChild())) {
        // Insert the incrementor statement it at the end of the block.
        if (complexIncr)
          block.addChildToBack(incr);
        // Insert the condition update statement after that.
        if (complexCond)
          block.addChildToBack(cond);
      }

      return true;
    }

    protected boolean transformForIn(Traversal t, Exp n, Exp parent) {
      Exp var = n.getFirstChild();
      assert isVerySimple(var) : "Unknown for-in variable format: " + var + " / " + var.toCode();
      Exp obj = n.getChild(1);
      if (isVerySimple(obj)) return false;
      return transformGeneric(t, obj, n);
    }

    protected boolean transformIf(Traversal t, Exp n, Exp parent) {
      assert n.is(JSExp.IF);
      Exp cond = ExpUtil.getCondition(n);
      if (isVerySimple(cond)) return false;
      return transformGeneric(t, cond, n);
    }

    protected boolean transformSwitch(Traversal t, Exp n, Exp parent) {
      assert n.is(JSExp.SWITCH);
      Exp exp = n.getFirstChild();
      if (isVerySimple(exp)) return false;
      return transformGeneric(t, exp, n);
    }

    protected boolean transformControl(Traversal t, Exp n, Exp parent) {
      int typ = n.getType();
      switch (typ) {
        case JSExp.FOR:
          if (ExpUtil.isStandardFor(n)) {
            return transformStandardFor(t, n, parent);
          } else {
            assert ExpUtil.isForIn(n) : "Unknown type of FOR block: " + n;
            return transformForIn(t, n, parent);
          }
        case JSExp.IF:
          return transformIf(t, n, parent);
        case JSExp.SWITCH:
          return transformSwitch(t, n, parent);
        case JSExp.WHILE:
        case JSExp.DO:
          return transformWhile(t, n, parent);
        case JSExp.WITH:
          return transformWith(t, n, parent);
        case JSExp.CASE:
        case JSExp.DEFAULT_CASE:
        case JSExp.TRY:
        case JSExp.CATCH:
          return false;
        default:
          throw new UnsupportedOperationException("Unexpected control node: " + n);
      }
    }

    @Override
    public void visit(Traversal t, Exp n, Exp parent) {
      int typ = n.getType();
      if (typ == JSExp.EXPR_RESULT || typ == JSExp.VAR
          || typ == JSExp.CONST || typ == JSExp.THROW
          || typ == JSExp.RETURN) {
        if (n.getChildCount() > 0) {
          Exp e = n.getFirstChild();
          if (!isSimpleExpression(t, e, n)) {
            if (transform(t, e, n)) {
              flagChange(true);
            }
          }
        }
      } else if (ExpUtil.isControl(n)) {
        if (transformControl(t, n, parent)) {
          flagChange(true);
        }
      }
    }

  }

}
