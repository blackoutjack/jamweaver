
package edu.wisc.cs.jam.js;

import com.google.javascript.rhino.Node;
import com.google.javascript.rhino.Node.AncestorIterable;
import com.google.javascript.rhino.Token;
import com.google.javascript.jscomp.Compiler;
import com.google.javascript.jscomp.NodeTraversal;
import com.google.javascript.jscomp.NodeTraversal.Callback;
import com.google.javascript.jscomp.Compiler;
import com.google.javascript.jscomp.Scope;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.HashSet;
import java.util.List;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.lang.Iterable;

import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.Dbg;

public class JSStatementTransform extends JSTransform {
  
  protected boolean DEBUG = false;

  protected Set<Node> tmpDefs;
  protected Set<Node> tmpUses;
  protected Set<String> simpleTmpDefs;

  @Override
  public void run(SourceManager src) {
    Node root = src.getRootNode();

    Compiler comp = src.getCompiler();
    // Add explicit return statements.
    ReturnExplicit re = new ReturnExplicit(src);
    Dbg.out("Starting pass RETURN", 4); 
    NodeTraversal.traverse(comp, root, re);

    // Name anonymous functions.
    DeanonymizeFunction df = new DeanonymizeFunction(src);
    Dbg.out("Starting pass DEANONYMIZE", 4); 
    NodeTraversal.traverse(comp, root, df);

    // Conduct function definition rearrangement.
    FunctionElevate fe = new FunctionElevate(src);
    Dbg.out("Starting pass ELEVATE", 4); 
    NodeTraversal.traverse(comp, root, fe);

    boolean changed = true;
    StatementSplit ss = new StatementSplit(src);
    while (changed) {
      Dbg.out("Starting pass STATEMENT", 4); 
      NodeTraversal.traverse(comp, root, ss);
      changed = ss.madeChange();
      ss.flagChange(false);
    }

    SplitSetsAndCalls ssc = new SplitSetsAndCalls(src);
    Dbg.out("Starting pass SPLIT", 4); 
    NodeTraversal.traverse(comp, root, ssc);

    // Break up large array literals.
    ArrayLiteralConverter alc = new ArrayLiteralConverter(src);
    Dbg.out("Starting pass ARRAY", 4); 
    NodeTraversal.traverse(comp, root, alc);

    // Break up large string literals.
    StringConverter sc = new StringConverter(src);
    Dbg.out("Starting pass STRING", 4); 
    NodeTraversal.traverse(comp, root, sc);
  }

  public Set<String> getCollapsableTemporaries() {
    return new HashSet<String>(simpleTmpDefs);
  }

  public class StatementSplit extends IterativeTraversal {
    
    public StatementSplit(SourceManager src) {
      super(src);
      tmpDefs = new HashSet<Node>();
      tmpUses = new HashSet<Node>();
      simpleTmpDefs = new HashSet<String>();
    }

    protected boolean isVerySimple(Node n) {
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

    protected boolean isSimpleCall(NodeTraversal t, Node n, Node parent) {
      assert n.isCall();
      Node tgt = n.getFirstChild();
      if (tgt.isGetProp() || tgt.isGetElem()) {
        if (!isSimpleExpression(t, tgt, n)) return false;
      } else if (!isVerySimple(tgt)) {
        return false;
      }
      int childCnt = n.getChildCount();
      for (int i=1; i<childCnt; i++) {
        Node arg = n.getChildAtIndex(i);
        if (!isVerySimple(arg)) return false;
      }
      return true;
    }

    protected boolean isSimpleNew(NodeTraversal t, Node n, Node parent) {
      assert n.isNew();
      int childCnt = n.getChildCount();
      for (int i=0; i<childCnt; i++) {
        Node c = n.getChildAtIndex(i);
        if (!isVerySimple(c)) return false;
      }
      return true;
    }

    protected boolean isSimpleAssign(NodeTraversal t, Node n, Node parent) {
      Node lhs = n.getFirstChild();
      if (lhs.isGetProp() || lhs.isGetElem()) {
        if (!isSimpleExpression(t, lhs, n)) return false;
      } else if (!isVerySimple(lhs)) {
        return false;
      }

      Node rhs = n.getChildAtIndex(1);
      if (NodeUtil.isAssign(rhs)) return false;
      if (NodeUtil.isUnOp(rhs)) return false;
      return isSimpleExpression(t, rhs, n);
    }

    protected boolean isSimpleExpression(NodeTraversal t, Node n, Node parent) {
      if (n == null) {
        assert parent.isReturn();
        return true;
      }
      int childCnt = n.getChildCount();
      int typ = n.getType();
      switch (typ) {
        case Token.NAME:
          if (childCnt == 0) return true;
          Node child = n.getFirstChild();
          if (isVerySimple(child)) return true;
          if (child.isAssign()) return false;
          return isSimpleExpression(t, child, n);
        case Token.ASSIGN:
          return isSimpleAssign(t, n, parent);
        case Token.CALL:
          return isSimpleCall(t, n, parent);
        case Token.NEW:
          return isSimpleNew(t, n, parent);
        case Token.BITOR:
        case Token.BITXOR:
        case Token.BITAND:
        case Token.EQ:
        case Token.NE:
        case Token.LT:
        case Token.LE:
        case Token.GT:
        case Token.GE:
        case Token.LSH:
        case Token.RSH:
        case Token.URSH:
        case Token.ADD:
        case Token.SUB:
        case Token.MUL:
        case Token.DIV:
        case Token.MOD:
        case Token.SHEQ:
        case Token.SHNE:
        case Token.IN:
        case Token.INSTANCEOF:
          if (!isVerySimple(n.getFirstChild())) return false;
          if (!isVerySimple(n.getChildAtIndex(1))) return false;
          return true;
        case Token.NOT:
        case Token.BITNOT:
        case Token.POS:
        case Token.NEG:
        case Token.TYPEOF:
        case Token.VOID:
          return isVerySimple(n.getFirstChild());
        case Token.DELPROP:
          Node acc = n.getFirstChild();
          if (isVerySimple(acc)) return true;
          assert NodeUtil.isAccessor(acc);
          if (!isVerySimple(acc.getFirstChild())) return false;
          if (!isVerySimple(acc.getChildAtIndex(1))) return false;
          return true;
        case Token.GETPROP:
          if (!isVerySimple(n.getFirstChild())) return false;
          assert isVerySimple(n.getChildAtIndex(1)) : "GETPROP node with complex property: " + n;
          return false;
        case Token.GETELEM:
          if (!isVerySimple(n.getFirstChild())) return false;
          if (!isVerySimple(n.getChildAtIndex(1))) return false;
          return true;
        case Token.NUMBER:
        case Token.STRING:
        case Token.NULL:
        case Token.THIS:
        case Token.FALSE:
        case Token.TRUE:
        case Token.REGEXP:
          return true;
        case Token.ARRAYLIT:
          for (int i=0; i<childCnt; i++) {
            Node elt = n.getChildAtIndex(i);
            if (!isVerySimple(elt)) return false;
          }
          return true;
        case Token.OBJECTLIT:
          for (int i=0; i<childCnt; i++) {
            Node memb = n.getChildAtIndex(i);
            // This applies to getter and setter definitions also.
            assert memb.getChildCount() == 1 : "Object literal member without 1 child: " + sm.codeFromNode(memb);
            Node val = memb.getFirstChild();
            if (!isVerySimple(val)) return false;
          } 
          return true;
        case Token.COMMA:
        case Token.ASSIGN_BITOR:
        case Token.ASSIGN_BITXOR:
        case Token.ASSIGN_BITAND:
        case Token.ASSIGN_LSH:
        case Token.ASSIGN_RSH:
        case Token.ASSIGN_URSH:
        case Token.ASSIGN_ADD:
        case Token.ASSIGN_SUB:
        case Token.ASSIGN_MUL:
        case Token.ASSIGN_DIV:
        case Token.ASSIGN_MOD:
        case Token.HOOK:
        case Token.INC:
        case Token.DEC:
          return false;
        case Token.OR:
        case Token.AND:
          if (!isVerySimple(n.getFirstChild())) return false;
          if (!isVerySimple(n.getChildAtIndex(1))) return false;
          return true;
        case Token.BREAK:
        case Token.CONTINUE:
          return true;
        case Token.EMPTY:
          return true;
        case Token.LABEL:
        case Token.LABEL_NAME:
          return true;
        case Token.TRANSACTION:
          Dbg.warn("TRANSACTION expression encountered: " + n);
        case Token.CAST:
          Dbg.warn("CAST expression encountered: " + n);
          return true;

        case Token.FUNCTION:
        case Token.EXPR_RESULT:
        case Token.VAR:
        case Token.THROW:
        case Token.RETURN:
        case Token.CONST:
        case Token.PARAM_LIST:
        case Token.IF:
        case Token.TRY:
        case Token.CATCH:
        case Token.SWITCH:
        case Token.CASE:
        case Token.DEFAULT_CASE:
        case Token.WHILE:
        case Token.DO:
        case Token.FOR:
        case Token.BLOCK:
        case Token.GETTER_DEF:
        case Token.SETTER_DEF:
        case Token.STRING_KEY:
        case Token.WITH:
        case Token.DEBUGGER:
        default:
          throw new UnsupportedOperationException("Unexpected " + Token.name(typ) + " child of parent: " + parent);
      }
    }

    @Override
    public boolean shouldTraverse(NodeTraversal t, Node n, Node parent) {
      // %%% Avoid alot of extra work descending into expressions.
      return true;
    }

    // Generate an if/then/else node with vacuous (but present) children.
    // The children should be replaced before the statement is inserted
    // into the source code.
    protected Node createConditionalNode(boolean withElse) {
      Node cond = new Node(Token.FALSE);
      Node thenClause = new Node(Token.NULL);
      Node stmt = null;
      if (withElse) {
        Node elseClause = new Node(Token.NULL);
        stmt = new Node(Token.IF, cond, thenClause, elseClause);
      } else {
        stmt = new Node(Token.IF, cond, thenClause);
      }
      return stmt;
    }

    protected boolean transformGeneric(NodeTraversal t, Node n, Node parent) {
      if (n.isFunction()) {
        // Lift function expressions to function statements.
        // They've all been deanonymized, so the name can be used rather
        // than a temp. variable.
        return transformFunctionExpression(t, n, parent);
      } else {
        Node tmpName = createNameNode(t.getScope());
        Node tmpRef = tmpName.cloneTree();
        parent.replaceChild(n, tmpRef);
        tmpName.addChildToBack(n);
        Node tmpInit = new Node(Token.VAR, tmpName);
        Node stmt = NodeUtil.getEnclosingStatement(parent);
        Node stmtParent = stmt.getParent();
        stmtParent.addChildBefore(tmpInit, stmt);

        String id = tmpName.getString();
        /*
        if (n.isName()) {
          sm.propagateType(n.getString(), id);
        } else if (NodeUtil.returnsBoolean(n)) {
          sm.setType(id, "Boolean");
        } else if (NodeUtil.returnsString(sm, n)) {
          sm.setType(id, "String");
        } else if (NodeUtil.returnsNumber(sm, n)) {
          sm.setType(id, "Number");
        }
        */

        tmpDefs.add(tmpName);
        tmpUses.add(tmpRef);
        simpleTmpDefs.add(id);
        return true;
      }
    }

    protected boolean transformFunctionExpression(NodeTraversal t, Node n, Node parent) {
      assert n.isFunction();
      Node fnName = n.getFirstChild().cloneTree();
      assert fnName.isName();
      parent.replaceChild(n, fnName);
      Node stmt = NodeUtil.getEnclosingStatement(parent);
      Node stmtParent = stmt.getParent();
      stmtParent.addChildBefore(n, stmt);
      return true;
    }

    protected boolean isAncestor(Node n, Node ancestor) {
      AncestorIterable ancestors = n.getAncestors();
      Iterator<Node> nit = ancestors.iterator();
      while (nit.hasNext()) {
        Node a = nit.next();
        if (a == ancestor)
          return true;
      }
      return false;
    }

    protected boolean isModifiableWithinExpression(NodeTraversal t, Node n, Node exp) {
      assert n.isName();

      // Conservatively assume that any call may alter the reference.
      if (NodeUtil.containsCall(exp)) {
        return true;
      }
      // Or any mention of the LHS on the RHS.
      if (NodeUtil.mayDirectlyModifyName(exp, n.getString())) {
        return true;
      }
      // %%% Both cases are overly conservative, but difficult to make
      // %%% more precise.

      return false;
    }

    protected boolean isModifiableWithinAssign(NodeTraversal t, Node n, Node assign) {
      assert NodeUtil.isAssign(assign);
      Node rhs = NodeUtil.getAssignRHS(assign);
      assert rhs != null : "Null RHS of assign: " + assign;
      return isModifiableWithinExpression(t, n, rhs);
    }

    protected boolean transformAssignLHS(NodeTraversal t, Node lhs, Node n) {
      assert NodeUtil.isAssign(n);
      boolean chng = false;
      if (NodeUtil.isAccessor(lhs)) {
        Node obj = lhs.getFirstChild();
        if (isVerySimple(obj)) {
          if (obj.isName() && !tmpUses.contains(obj)
              && isModifiableWithinAssign(t, obj, n)) {
            if (transformGeneric(t, obj, lhs)) chng = true;
          }
        } else {
          if (transformGeneric(t, obj, lhs)) chng = true;
        }
        Node prop = lhs.getChildAtIndex(1);
        if (isVerySimple(prop)) {
          if (prop.isName() && !tmpUses.contains(prop)
              && isModifiableWithinAssign(t, prop, n)) {
            if (transformGeneric(t, prop, lhs)) chng = true;
          }
        } else {
          if (transformGeneric(t, prop, lhs)) chng = true;
        }
      } else if (!isVerySimple(lhs)) {
        Dbg.warn("Unknown assign LHS type: " + lhs);
      }
      return chng;
    }

    protected boolean transformAssign(NodeTraversal t, Node n, Node parent) {
      assert n.isAssign();
      boolean chng = false;
      Node lhs = n.getFirstChild();
      if (transformAssignLHS(t, lhs, n)) chng = true;

      // Defer changing the RHS until the LHS is all done.
      if (!chng) {
        Node rhs = n.getChildAtIndex(1);
        if (!isSimpleExpression(t, rhs, n)) {
          if (transform(t, rhs, n)) chng = true;
        }
      }
      
      return chng;
    }

    protected boolean transformCall(NodeTraversal t, Node n, Node parent) {
      boolean chng = false;
      Node tgt = n.getFirstChild();
      if (NodeUtil.isAccessor(tgt)) {
        if (transformBinary(t, tgt, n)) chng = true;
      } else if (!isVerySimple(tgt)) {
        if (transformGeneric(t, tgt, n)) chng = true;
      }
      int childCnt = n.getChildCount();
      for (int i=1; i<childCnt; i++) {
        Node arg = n.getChildAtIndex(i);
        if (!isVerySimple(arg)) {
          if (transformGeneric(t, arg, n)) chng = true;
        }
      }
      return chng;
    }

    protected boolean transformCompound(NodeTraversal t, Node n, Node parent) {
      // For constructor calls, accessors don't needs to be kept
      // intact because there will be a fresh |this| object.
      boolean chng = false;
      int childCnt = n.getChildCount();
      for (int i=0; i<childCnt; i++) {
        Node c = n.getChildAtIndex(i);
        if (!isVerySimple(c)) {
          if (transformGeneric(t, c, n)) chng = true;
        }
      }
      return chng;
    }

    protected void extractEtter(NodeTraversal t, Node stmt, Node defObj, Node etter) {
      Node fn = etter.getFirstChild();
      assert fn.isFunction();

      // Detach the nodes.
      etter.detachFromParent();
      fn.detachFromParent();

      // Create a name for the function.
      Node newName = createNameNode(t.getScope());

      // Replace the current (empty) name with the generated one.
      fn.replaceChild(fn.getChildAtIndex(0), newName);
      tmpDefs.add(newName);

      // Insert the new function declaration.
      stmt.getParent().addChildBefore(fn, stmt);

      Node defKey = Node.newString(Token.STRING_KEY, etter.isGetterDef() ? "get" : "set");
      Node defVal = newName.cloneTree();
      tmpUses.add(defVal);
      defKey.addChildToBack(defVal);
      defObj.addChildToBack(defKey);
    }

    protected void extractEtters(NodeTraversal t, String propName, Node getter, Node setter, Node parent, Node assn) {
      assert getter != null || setter != null;
      assert parent.isObjectLit();

      // Note the statement in front of which we'll put the new function
      // declaration.
      Node stmt = NodeUtil.getEnclosingStatement(parent);

      // This is the property declaration object.
      Node defObj = new Node(Token.OBJECTLIT);
      
      if (getter != null) {
        extractEtter(t, stmt, defObj, getter);
      }
      
      if (setter != null) {
        extractEtter(t, stmt, defObj, setter);
      }

      // Create |Object.defineProperty(objName, 'prop', {'get': fn})|.

      // This is the left-hand side of the assignment.
      Node objName = assn.cloneTree();

      Node prop = Node.newString(propName);

      Node objObject = Node.newString(Token.NAME, "Object");
      Node defProp = Node.newString("defineProperty");
      Node defMeth = new Node(Token.GETPROP, objObject, defProp);
      Node callExpr = new Node(Token.CALL, defMeth, objName, prop, defObj);
      Node callStmt = new Node(Token.EXPR_RESULT, callExpr);
      stmt.getParent().addChildAfter(callStmt, stmt);
    }

    protected boolean transformEtters(NodeTraversal t, Node n, Node parent, Map<String,Node> getters, Map<String,Node> setters) {
      boolean chng = false;
      Node stmt = NodeUtil.getEnclosingStatement(n);
      for (Map.Entry<String,Node> entry : getters.entrySet()) {
        String propName = entry.getKey();
        Node getter = entry.getValue();
        Node setter = null;
        if (setters.containsKey(propName)) {
          setter = setters.get(propName);
          setters.remove(propName);
        }
        // Can only process this if the object literal is assigned to
        // a name.
        Node lhs = NodeUtil.getAssignLHS(stmt);
        if (lhs != null) {
          Node rhs = NodeUtil.getAssignRHS(stmt);
          if (rhs == n) {
            extractEtters(t, propName, getter, setter, n, lhs);
            chng = true;
          } else {
            Dbg.warn("Object literal embedded in compound expression: " + n);
          }
        } else if (NodeUtil.isExprResult(parent)) {
          // This would be strange, but this is in case there's an
          // object literal as a floating expression. Print a warning
          // and don't flag more.
          Dbg.warn("Floating object literal with getter " + (setter == null ? ":" : " and setter:") + parent);
        }
      }
      for (Map.Entry<String,Node> entry : setters.entrySet()) {
        String propName = entry.getKey();
        Node setter = entry.getValue();
        assert !getters.containsKey(propName);

        // Can only process this if the object literal is assigned to
        // a name.
        Node lhs = NodeUtil.getAssignLHS(stmt);
        if (lhs != null) {
          Node rhs = NodeUtil.getAssignRHS(stmt);
          if (rhs == n) {
            extractEtters(t, propName, null, setter, n, lhs);
            chng = true;
          } else {
            Dbg.warn("Object literal embedded in compound expression: " + n);
          }
        } else if (NodeUtil.isExprResult(n.getParent())) {
          // This would be strange, but this is in case there's an
          // object literal as a floating expression. Print a warning
          // and don't flag more.
          Dbg.warn("Floating object literal with setter:" + parent);
        }
      }
      return chng;
    }

    protected boolean transformObjectLit(NodeTraversal t, Node n, Node parent) {
      boolean chng = false;
      Map<String,Node> getters = new LinkedHashMap<String,Node>();
      Map<String,Node> setters = new LinkedHashMap<String,Node>();
      int childCnt = n.getChildCount();
      for (int i=0; i<childCnt; i++) {
        Node memb = n.getChildAtIndex(i);
        if (memb.isGetterDef()) {
          getters.put(memb.getString(), memb);
          continue;
        } else if (memb.isSetterDef()) {
          setters.put(memb.getString(), memb);
          continue;
        }
        assert memb.getChildCount() == 1;
        Node val = memb.getFirstChild();
        if (!isVerySimple(val)) {
          if (transformGeneric(t, val, memb)) chng = true;
        }
      } 
      if (transformEtters(t, n, parent, getters, setters)) chng = true;
      return chng;
    }

    protected Node expandLogicalFirst(NodeTraversal t, Node n, Node parent) {
      Node op0 = n.getFirstChild().detachFromParent();
      
      // Create a temporary variable to hold the value that the
      // first operand evaluates to.
      Node tmp = createNameNode(t.getScope());

      // Create a var initializer for the new variable, and assign it
      // the value of the first operand.
      Node tmpInit = tmp.cloneTree();
      tmpDefs.add(tmpInit);
      Node op0Assign = new Node(Token.VAR, tmpInit);
      op0Assign.getFirstChild().addChildToBack(op0);

      // And insert it into the program prior to the enclosing statement.
      Node enclosing = NodeUtil.getEnclosingStatement(n);
      enclosing.getParent().addChildBefore(op0Assign, enclosing);

      return tmp;
    }

    protected void insertLogicalConditional(NodeTraversal t, Node n, Node parent, Node cond, Node thenBlock) {
      // Generate a new if/then framework node.
      Node stmt = createConditionalNode(false);

      // Fill in the new conditional.
      stmt.replaceChild(stmt.getFirstChild(), cond);
      stmt.replaceChild(stmt.getChildAtIndex(1), thenBlock);

      // Insert the new if/then/else statement.
      Node enclosing = NodeUtil.getEnclosingStatement(n);
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
    protected void expandAndValue(NodeTraversal t, Node n, Node parent) {
      // Extract the first operand into a temporary.
      Node cond = expandLogicalFirst(t, n, parent);

      // Get the second operand (which is now the first).
      Node op1 = n.getChildAtIndex(0).detachFromParent();

      // The value of the first operand determines the control flow.
      // That is, the second operand is only evaluated if the first
      // one is true.
      Node tmpRef = cond.cloneTree();

      // Create an assignment statement capturing the value of the
      // second operand to be placed within the conditional block.
      Node tmpOp1 = cond.cloneTree();
      Node op1Assign = new Node(Token.ASSIGN, tmpOp1, op1);
      tmpUses.add(tmpOp1);
      op1Assign = new Node(Token.EXPR_RESULT, op1Assign);
      Node thenBlock = new Node(Token.BLOCK, op1Assign);

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
    protected void expandAndSimple(NodeTraversal t, Node n, Node parent) {
      Node enclosing = NodeUtil.getEnclosingStatement(n);

      // Extract the two operands.
      Node op1 = n.getChildAtIndex(1).detachFromParent();
      Node op0 = n.getFirstChild().detachFromParent();

      // The value of the first operand determines the control flow.
      // That is, the second operand is only evaluated if the first
      // one is true.
      Node cond = op0;

      // Create an assignment statement capturing the value of the
      // second operand to be placed within the conditional block.
      Node op1Stmt = new Node(Token.EXPR_RESULT, op1);
      Node thenBlock = new Node(Token.BLOCK, op1Stmt);

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
    protected void expandAnd(NodeTraversal t, Node n, Node parent) {
      // Extract the first operand into a temporary.
      Node cond = expandLogicalFirst(t, n, parent);

      // Get the second operand (which is now the first).
      Node op1 = n.getChildAtIndex(0).detachFromParent();

      // Create an assignment statement capturing the value of the
      // second operand to be placed within the conditional block.
      Node op1Stmt = new Node(Token.EXPR_RESULT, op1);
      Node thenBlock = new Node(Token.BLOCK, op1Stmt);

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
    protected void expandOrValue(NodeTraversal t, Node n, Node parent) {
      // Extract the first operand into a temporary.
      Node cond = expandLogicalFirst(t, n, parent);

      // Get the second operand (which is now the first).
      Node op1 = n.getChildAtIndex(0).detachFromParent();

      // The value of the first operand determines the control flow.
      // That is, the second operand is only evaluated if the first
      // one is false.
      Node tmpRef = cond.cloneTree();
      Node notCond = new Node(Token.NOT, cond);

      // Create an assignment statement capturing the value of the
      // second operand to be placed within the conditional block.
      Node tmpOp1 = cond.cloneTree();
      Node op1Assign = new Node(Token.ASSIGN, tmpOp1, op1);
      tmpUses.add(tmpOp1);
      op1Assign = new Node(Token.EXPR_RESULT, op1Assign);
      Node thenBlock = new Node(Token.BLOCK, op1Assign);

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
    protected void expandOrSimple(NodeTraversal t, Node n, Node parent) {
      Node enclosing = NodeUtil.getEnclosingStatement(n);

      // Extract the two operands.
      Node op1 = n.getChildAtIndex(1).detachFromParent();
      Node op0 = n.getFirstChild().detachFromParent();

      // The value of the first operand determines the control flow.
      // That is, the second operand is only evaluated if the first
      // one is false.
      Node notCond = new Node(Token.NOT, op0);

      // Wrap the second operand to be placed within the conditional.
      Node op1Stmt = new Node(Token.EXPR_RESULT, op1);
      Node thenBlock = new Node(Token.BLOCK, op1Stmt);

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
    protected void expandOr(NodeTraversal t, Node n, Node parent) {
      // Extract the first operand into a temporary.
      Node cond = expandLogicalFirst(t, n, parent);
      Node notCond = new Node(Token.NOT, cond);

      // Get the second operand (which is now the first).
      Node op1 = n.getChildAtIndex(0).detachFromParent();

      // Create an assignment statement capturing the value of the
      // second operand to be placed within the conditional block.
      Node op1Stmt = new Node(Token.EXPR_RESULT, op1);
      Node thenBlock = new Node(Token.BLOCK, op1Stmt);

      // Create and insert a conditional before the original statement.
      insertLogicalConditional(t, n, parent, notCond, thenBlock);
      tmpUses.add(cond);

      // Remove the original logical AND expression and its wrapper. 
      parent.getParent().removeChild(parent);
    }

    protected boolean transformAnd(NodeTraversal t, Node n, Node parent) {
      if (parent.isExprResult()) {
        if (NodeUtil.isName(n.getFirstChild())) {
          expandAndSimple(t, n, parent);
        } else {
          expandAnd(t, n, parent);
        }
      } else {
        expandAndValue(t, n, parent);
      }
      return true;
    }

    protected boolean transformOr(NodeTraversal t, Node n, Node parent) {
      if (parent.isExprResult()) {
        if (NodeUtil.isName(n.getFirstChild())) {
          expandOrSimple(t, n, parent);
        } else {
          expandOr(t, n, parent);
        }
      } else {
        expandOrValue(t, n, parent);
      }
      return true;
    }

    protected boolean transformComma(NodeTraversal t, Node n, Node parent) {
      Node c1 = n.getChildAtIndex(1).detachFromParent();
      Node c0 = n.getChildAtIndex(0).detachFromParent();
      Node wrapper = new Node(Token.EXPR_RESULT, c0);
      Node stmt = NodeUtil.getEnclosingStatement(n);
      stmt.getParent().addChildBefore(wrapper, stmt);
      parent.replaceChild(n, c1);
      return true;
    }

    protected boolean transformIncDec(NodeTraversal t, Node n, Node parent) {
      if (NodeUtil.isPostfixUnOp(n) && (parent.isReturn()
          || parent.isThrow())) {
        // This case (obscure as it might be) cannot be transformed.
        return false;
      }

      int newOp = -1;
      switch (n.getType()) {
        case Token.INC:
          newOp = Token.ADD;
          break;
        case Token.DEC:
          newOp = Token.SUB; 
          break;
        default:
          assert false : "Unexpected unary operator: " + n;
      }

      Node ref = n.getFirstChild().detachFromParent();
      Node refCopy = ref.cloneTree();
      Node newRhs = new Node(newOp, refCopy, Node.newNumber(1));
      Node assign = new Node(Token.ASSIGN, ref, newRhs);

      if (NodeUtil.isPostfixUnOp(n) && !parent.isExprResult()) {
        Node refSub = ref.cloneTree();
        parent.replaceChild(n, refSub);
        Node exRes = new Node(Token.EXPR_RESULT, assign);
        Node stmt = NodeUtil.getEnclosingStatement(parent);
        Node stmtParent = stmt.getParent();
        stmtParent.addChildAfter(exRes, stmt);
      } else {
        parent.replaceChild(n, assign);
      }
      return true;
    }

    protected boolean transformCompoundAssign(NodeTraversal t, Node n, Node parent) {
      boolean chng = false;
      Node lhs = NodeUtil.getAssignLHS(n);
      if (transformAssignLHS(t, lhs, n)) chng = true;

      if (!chng) {
        Node lhsCopy = lhs.cloneTree();
        Node rhs = NodeUtil.getAssignRHS(n);
        lhs.detachFromParent();
        rhs.detachFromParent();
        int newOp = -1;
        switch (n.getType()) {
          case Token.ASSIGN_BITOR:
            newOp = Token.BITOR;
            break;
          case Token.ASSIGN_BITXOR:
            newOp = Token.BITXOR;
            break;
          case Token.ASSIGN_BITAND:
            newOp = Token.BITAND;
            break;
          case Token.ASSIGN_LSH:
            newOp = Token.LSH;
            break;
          case Token.ASSIGN_RSH:
            newOp = Token.RSH;
            break;
          case Token.ASSIGN_URSH:
            newOp = Token.URSH;
            break;
          case Token.ASSIGN_ADD:
            newOp = Token.ADD;
            break;
          case Token.ASSIGN_SUB:
            newOp = Token.SUB;
            break;
          case Token.ASSIGN_MUL:
            newOp = Token.MUL;
            break;
          case Token.ASSIGN_DIV:
            newOp = Token.DIV;
            break;
          case Token.ASSIGN_MOD:
            newOp = Token.MOD;
            break;
          default:
            assert false : "Unknown assignment operator: " + n;      
        }
        Node newRhs = new Node(newOp, lhsCopy, rhs);
        Node assign = new Node(Token.ASSIGN, lhs, newRhs);
        parent.replaceChild(n, assign);
        chng = true;
      }
      return chng;
    }

    protected boolean transformHook(NodeTraversal t, Node n, Node parent) {
      // Create a temporary variable to hold the value that the
      // conditional evaluates to.
      Node tmpRef = createNameNode(t.getScope());
      Node tmpDef = tmpRef.cloneTree();

      // Create a var initializer for the new variable.
      Node tmpDecl = new Node(Token.VAR, tmpDef);
      tmpDefs.add(tmpDef);
      // And insert it into the program prior to the enclosing statement.
      Node enclosing = NodeUtil.getEnclosingStatement(n);
      enclosing.getParent().addChildBefore(tmpDecl, enclosing);

      // Generate a new if/then/else framework node.
      Node stmt = createConditionalNode(true);

      // Get the statement to evaluate if the condition is false.
      Node elseStmt = n.getChildAtIndex(2).detachFromParent();
      // Get the statement to evaluate if the condition is true.
      Node thenStmt = n.getChildAtIndex(1).detachFromParent();
      // Isolate the condition.
      Node cond = n.getChildAtIndex(0).detachFromParent();

      // Create an assignment statement capturing the value of the
      // then branch.
      Node tmpThen = tmpRef.cloneTree();
      Node thenAssn = new Node(Token.ASSIGN, tmpThen, thenStmt);
      Node thenAssign = new Node(Token.EXPR_RESULT, thenAssn);
      tmpUses.add(tmpThen);

      // Create an assignment statement capturing the value of the
      // else branch.
      Node tmpElse = tmpRef.cloneTree();
      Node elseAssn = new Node(Token.ASSIGN, tmpElse, elseStmt);
      Node elseAssign = new Node(Token.EXPR_RESULT, elseAssn);
      tmpUses.add(tmpElse);

      // Wrap the then and else expressions in a block.
      Node elseBlock = new Node(Token.BLOCK, elseAssign);
      Node thenBlock = new Node(Token.BLOCK, thenAssign);

      // Fill in the new conditional.
      stmt.replaceChild(stmt.getFirstChild(), cond);
      stmt.replaceChild(stmt.getChildAtIndex(1), thenBlock);
      stmt.replaceChild(stmt.getChildAtIndex(2), elseBlock);

      // Replace the original ternary conditional with the result value.
      parent.replaceChild(n, tmpRef);
      tmpUses.add(tmpRef);

      // And finally, insert the new if/then/else statement.
      enclosing.getParent().addChildBefore(stmt, enclosing);
      return true;
    }

    protected boolean transformBinary(NodeTraversal t, Node n, Node parent) {
      boolean chng = false;
      Node left = n.getFirstChild();
      Node right = n.getChildAtIndex(1);

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

    protected boolean transform(NodeTraversal t, Node n, Node parent) {
      boolean chng = false;
      int childCnt = n.getChildCount();
      int typ = n.getType();
      switch (typ) {
        case Token.NAME:
          assert childCnt > 0;
          Node val = n.getFirstChild();
          assert !isVerySimple(val);
          return transform(t, val, n);
        case Token.ASSIGN:
          return transformAssign(t, n, parent);
        case Token.CALL:
          return transformCall(t, n, parent);
        case Token.NEW:
          return transformCompound(t, n, parent);
        case Token.BITOR:
        case Token.BITXOR:
        case Token.BITAND:
        case Token.EQ:
        case Token.NE:
        case Token.LT:
        case Token.LE:
        case Token.GT:
        case Token.GE:
        case Token.LSH:
        case Token.RSH:
        case Token.URSH:
        case Token.ADD:
        case Token.SUB:
        case Token.MUL:
        case Token.DIV:
        case Token.MOD:
        case Token.SHEQ:
        case Token.SHNE:
        case Token.IN:
        case Token.INSTANCEOF:
          return transformBinary(t, n, parent);
        case Token.NOT:
        case Token.BITNOT:
        case Token.POS:
        case Token.NEG:
        case Token.TYPEOF:
        case Token.VOID:
          Node c = n.getFirstChild();
          assert !isVerySimple(c);
          return transformGeneric(t, c, n);
        case Token.DELPROP:
          parent = n;
          n = n.getFirstChild();
          // Fall through.
        case Token.GETPROP:
        case Token.GETELEM:
          assert NodeUtil.isAccessor(n);
          return transformBinary(t, n, parent);
        case Token.ARRAYLIT:
          return transformCompound(t, n, parent);
        case Token.OBJECTLIT:
          return transformObjectLit(t, n, parent);
        case Token.ASSIGN_BITOR:
        case Token.ASSIGN_BITXOR:
        case Token.ASSIGN_BITAND:
        case Token.ASSIGN_LSH:
        case Token.ASSIGN_RSH:
        case Token.ASSIGN_URSH:
        case Token.ASSIGN_ADD:
        case Token.ASSIGN_SUB:
        case Token.ASSIGN_MUL:
        case Token.ASSIGN_DIV:
        case Token.ASSIGN_MOD:
          return transformCompoundAssign(t, n, parent);
        case Token.INC:
        case Token.DEC:
          return transformIncDec(t, n, parent);
        case Token.COMMA:
          return transformComma(t, n, parent);
        case Token.HOOK:
          return transformHook(t, n, parent);
        case Token.OR:
          return transformOr(t, n, parent);
        case Token.AND:
          return transformAnd(t, n, parent);
        default:
          throw new UnsupportedOperationException("Unexpected " + Token.name(typ) + " node to transform: " + n);
      }
    }

    protected boolean transformWhile(NodeTraversal t, Node n, Node parent) {
      assert n.isWhile() || n.isDo();

      // Insert the condition prior to the loop and at the end of the
      // loop's block.
      Node cond = NodeUtil.getCondition(n);
      // If the condition is a simple reference or literal, just leave it.
      if (isVerySimple(cond)) return false;

      // Create a temporary variable to hold the value that the
      // conditional evaluates to.
      Node tmp = createNameNode(t.getScope());

      // Create a var initializer for the new variable.
      Node tmpInit = tmp.cloneTree();
      tmpDefs.add(tmpInit);
      tmpInit.addChildToBack(cond.cloneTree());
      tmpInit = new Node(Token.VAR, tmpInit);

      // Replace the condition with the new name.
      n.replaceChild(cond, tmp);
      tmpUses.add(tmp);

      // Finally, create an update statement and insert it at the
      // end of the block.
      Node tmpLeft = tmp.cloneTree();
      Node tmpAssn = new Node(Token.ASSIGN, tmpLeft, cond);
      tmpUses.add(tmpLeft);
      tmpAssn = new Node(Token.EXPR_RESULT, tmpAssn);
      Node block = null;
      if (n.isWhile()) {
        block = n.getLastChild();
      } else {
        assert n.isDo();
        block = n.getFirstChild();
      }
      assert block.isBlock();
      block.addChildToBack(tmpAssn);

      // Insert the initializer prior to the control statement.
      // It must also go prior to a potential label.
      if (parent.getType() == Token.LABEL) {
        n = parent;
        parent = parent.getParent();
      }
      parent.addChildBefore(tmpInit, n);
      
      return true;
    }

    protected boolean isBlockEscape(Node n) {
      if (n == null) return false;
      if (n.isReturn()) return true;
      if (n.isThrow()) return true;
      if (n.isContinue()) return true;
      if (n.isBreak()) return true;
      return false;
    }

    protected List<Node> getControlBlocks(Node ctrl) {
      assert NodeUtil.isControl(ctrl);
      List<Node> ret = new ArrayList<Node>();
      if (ctrl.isIf()) {
        int childCnt = ctrl.getChildCount();
        // %%% Correct for if-elif-else?
        for (int i=1; i<childCnt; i++) {
          ret.add(ctrl.getChildAtIndex(i));
        }
      } else if (ctrl.isWhile()) {
        ret.add(ctrl.getLastChild());
      } else if (ctrl.isDo()) {
        ret.add(ctrl.getFirstChild());
      } else if (ctrl.isSwitch()) {
        int childCnt = ctrl.getChildCount();
        // %%% Correct to skip first child?
        for (int i=1; i<childCnt; i++) {
          Node c = ctrl.getChildAtIndex(i);
          Node block = null;
          if (c.isCase()) {
            block = c.getChildAtIndex(1);
          } else {
            assert c.isDefaultCase();
            block = c.getFirstChild();
          }
          int blockChildCnt = block.getChildCount();
          if (blockChildCnt > 0 && block.getFirstChild().isBlock()) {
            // Case blocks may be wrapped, and break statements occupy a
            // second sub-block.
            assert blockChildCnt == 1 || (blockChildCnt == 2 && block.getChildAtIndex(1).isBreak())
              : "Unknown sub-block format for case statement: " + sm.codeFromNode(c);
            block = block.getFirstChild();
          }
          assert block.isBlock();
          ret.add(block);
        }
      } else if (ctrl.isTry()) {
        int childCnt = ctrl.getChildCount();
        assert childCnt > 0;
        ret.add(ctrl.getFirstChild());
        // Catch block may be found but be null.
        if (childCnt > 1) {
          Node catches = ctrl.getChildAtIndex(1);
          if (catches != null) {
            assert catches.isBlock() : "Unexpected TRY child: " + ctrl + " / " + catches;
            int catchCnt = catches.getChildCount();
            for (int i=0; i<catchCnt; i++) {
              Node catchNode = catches.getChildAtIndex(i);
              assert catchNode.isCatch();
              assert catchNode.getChildCount() == 2;
              Node catchBlock = catchNode.getChildAtIndex(1);
              assert catchBlock.isBlock();
              ret.add(catchBlock);
            }
          }
          if (childCnt > 2) {
            Node finallyBlock = ctrl.getChildAtIndex(2);
            assert finallyBlock.isBlock();
            ret.add(finallyBlock);
          }
        }
      } else if (NodeUtil.isStandardFor(ctrl)) {
        ret.add(ctrl.getLastChild());
      } else if (NodeUtil.isForIn(ctrl)) {
        ret.add(ctrl.getLastChild());
      } else {
        Dbg.warn("Unhandled control block: " + ctrl);
      }
      return ret;
    }

    protected boolean prepareContinueStatements(NodeTraversal t, Node incr, Node cond, Node ctrl, String label, boolean nested) {
      boolean ret = false;
      assert NodeUtil.isControl(ctrl);
      List<Node> blocks = getControlBlocks(ctrl);

      // Loop backwards since we may insert children.
      for (Node block : blocks) {
        int childCnt = block.getChildCount();
        for (int i=childCnt-1; i>=0; i--) {
          Node n = block.getChildAtIndex(i);
          if (NodeUtil.isContinue(n)) {
            boolean doInsert = true;
            if (nested) {
              doInsert = false;
              // Check that the right label is found.
              if (label != null && n.getChildCount() > 0) {
                Node lbl = n.getFirstChild();
                if (lbl.getString().equals(label)) {
                  doInsert = true;
                }
              }
            }
            if (doInsert) {
              if (incr != null) {
                Node incrCopy = incr.cloneTree();
                block.addChildBefore(incrCopy, n);
              }
              if (cond != null) {
                Node condCopy = cond.cloneTree();
                block.addChildBefore(condCopy, n);
              }
              ret = true;
            }
          } else if (NodeUtil.isControl(n)) {
            // Recurse on nested blocks.
            if (NodeUtil.isLoop(n)) {
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

    protected boolean transformStandardFor(NodeTraversal t, Node n, Node parent) {
      assert NodeUtil.isStandardFor(n);

      // Extract the loop iterator and insert it at the end of block.
      Node incr = n.getChildAtIndex(2);
      boolean complexIncr = !isVerySimple(incr);
      //complexIncr = false; // %%% Disabling this

      // Insert the condition prior to the loop and at the end of the
      // loop's block. This should place it after the incrementor,
      // which maintains semantics.
      // If the condition is a simple reference, just leave it.
      Node cond = NodeUtil.getCondition(n);
      boolean complexCond = !isVerySimple(cond);
      //complexCond = false; // %%% Disabling this

      if (!complexIncr && !complexCond) return false;

      String labelName = null;

      if (complexIncr) {
        // Remove the incrementor from the loop construct.
        n.replaceChild(incr, new Node(Token.EMPTY));

        // Wrap the incrementor.
        incr = new Node(Token.EXPR_RESULT, incr);
      }

      if (complexCond) {
        // Create a temporary variable to hold the value that the
        // conditional evaluates to.
        Node tmp = createNameNode(t.getScope());

        // Create a var initializer for the new variable.
        Node tmpInit = tmp.cloneTree();
        tmpDefs.add(tmpInit);
        tmpInit = new Node(Token.VAR, tmpInit);
        tmpInit.getFirstChild().addChildToBack(cond.cloneTree());

        // Replace the condition with the new name.
        n.replaceChild(cond, tmp);
        tmpUses.add(tmp);

        // Insert the initializer prior to the control statement.
        // It must also go prior to a potential label.
        Node insertPoint = n;
        Node insertParent = parent;
        if (parent.isLabel()) {
          insertPoint = parent;
          insertParent = insertParent.getParent();
          // This is needed to process |continue| statements.
          labelName = parent.getFirstChild().getString();
        }
        insertParent.addChildBefore(tmpInit, insertPoint);

        // Finally, create an update statement and insert it at the
        // end of the block.
        Node tmpLeft = tmp.cloneTree();
        cond = new Node(Token.ASSIGN, tmpLeft, cond);
        tmpUses.add(tmpLeft);
        cond = new Node(Token.EXPR_RESULT, cond);
      }

      // The increment statement must be inserted immediately prior to
      // all |continue| statements.
      prepareContinueStatements(t, complexIncr ? incr : null, complexCond ? cond : null, n, labelName, false);

      // If the last statement in the block breaks out of the loop,
      // don't insert anything after it.
      Node block = n.getLastChild();
      assert block.isBlock();
      if (!isBlockEscape(block.getLastChild())) {
        // Insert the incrementor statement it at the end of the block.
        if (complexIncr)
          block.addChildToBack(incr);
        // Insert the condition update statement after that.
        if (complexCond)
          block.addChildToBack(cond);
      }

      return true;
    }

    protected boolean transformForIn(NodeTraversal t, Node n, Node parent) {
      Node var = n.getFirstChild();
      assert isVerySimple(var) : "Unknown for-in variable format: " + var;
      Node obj = n.getChildAtIndex(1);
      if (isVerySimple(obj)) return false;
      return transformGeneric(t, obj, n);
    }

    protected boolean transformIf(NodeTraversal t, Node n, Node parent) {
      assert n.isIf();
      Node cond = NodeUtil.getCondition(n);
      if (isVerySimple(cond)) return false;
      return transformGeneric(t, cond, n);
    }

    protected boolean transformSwitch(NodeTraversal t, Node n, Node parent) {
      assert n.isSwitch();
      Node exp = n.getFirstChild();
      if (isVerySimple(exp)) return false;
      return transformGeneric(t, exp, n);
    }

    protected boolean transformControl(NodeTraversal t, Node n, Node parent) {
      int typ = n.getType();
      switch (typ) {
        case Token.FOR:
          if (NodeUtil.isStandardFor(n)) {
            return transformStandardFor(t, n, parent);
          } else {
            assert NodeUtil.isForIn(n) : "Unknown type of FOR block: " + n;
            return transformForIn(t, n, parent);
          }
        case Token.IF:
          return transformIf(t, n, parent);
        case Token.SWITCH:
          return transformSwitch(t, n, parent);
        case Token.WHILE:
        case Token.DO:
          return transformWhile(t, n, parent);
        case Token.CASE:
        case Token.DEFAULT_CASE:
        case Token.TRY:
        case Token.CATCH:
          return false;
        default:
          throw new UnsupportedOperationException("Unexpected " + Token.name(typ) + " control node: " + n);
      }
    }

    @Override
    public void visit(NodeTraversal t, Node n, Node parent) {
      int typ = n.getType();
      if (typ == Token.EXPR_RESULT || typ == Token.VAR
          || typ == Token.CONST || typ == Token.THROW
          || typ == Token.RETURN) {
        Node e = n.getFirstChild();
        if (!isSimpleExpression(t, e, n)) {
          //Dbg.dbg("BEFORE: " + sm.codeFromNode(n));
          if (transform(t, e, n)) {
            //Dbg.dbg("AFTER: " + sm.codeFromNode(n));
            flagChange(true);
          }
        }
      } else if (NodeUtil.isControl(n)) {
        if (transformControl(t, n, parent)) {
          flagChange(true);
        }
      }
    }

  }

}
