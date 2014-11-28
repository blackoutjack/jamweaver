package edu.wisc.cs.jam.js;

import java.util.Collection;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.Set;
import java.util.LinkedHashSet;
import java.io.IOException;
import java.io.File;

import com.google.javascript.rhino.Node;

import com.google.javascript.jscomp.Compiler;
import com.google.javascript.jscomp.CompilerInput;
import com.google.javascript.jscomp.Compiler.CodeBuilder;

import com.google.javascript.jscomp.ClosureUtil;

import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.CallGraph;
import edu.wisc.cs.jam.CallGraph.Function;
import edu.wisc.cs.jam.CallGraph.Callsite;

import com.google.javascript.jscomp.ClosureUtil;

import edu.wisc.cs.jam.env.NativeUtil;

public class ExpUtil {

  // This is a rough categorization, but it pretty much covers all
  // expression types that don't return a value. Statements can't
  // be a proper constituent of a larger expression other than a block,
  // or in some cases (such as CASE) other statements.
  public static final int[] STATEMENT_TYPES = {
    JSExp.EXPR_RESULT,
    JSExp.IF,
    JSExp.FOR,
    JSExp.SWITCH,
    JSExp.WHILE,
    JSExp.DO,
    JSExp.VAR,
    JSExp.CASE,
    JSExp.DEFAULT_CASE,
    JSExp.THROW,
    JSExp.RETURN,
    JSExp.SCRIPT,
    JSExp.TRY,
    JSExp.WITH,
    JSExp.LABEL,
  };
  public static final int[] LOOP_TYPES = {
    JSExp.FOR,
    JSExp.WHILE,
    JSExp.DO
  };
  public static final int[] CONTROL_TYPES = {
    JSExp.FOR,
    JSExp.IF,
    JSExp.SWITCH,
    JSExp.CASE,
    JSExp.DEFAULT_CASE,
    JSExp.WHILE,
    JSExp.DO,
    JSExp.TRY,
    JSExp.CATCH,
    JSExp.WITH,
  };
  public static final int[] PRIMITIVE_TYPES = {
    JSExp.FALSE,
    JSExp.TRUE,
    JSExp.STRING,
    JSExp.NUMBER,
    JSExp.NULL,
  };
  public static final int[] LITERAL_TYPES = {
    JSExp.FALSE,
    JSExp.TRUE,
    JSExp.STRING,
    JSExp.NUMBER,
    JSExp.NULL,
    JSExp.REGEXP,
    JSExp.ARRAYLIT,
    JSExp.OBJECTLIT,
  };
  public static final int[] UNOP_TYPES = {
    JSExp.INC,
    JSExp.DEC
  };
  public static final int[] NUMBER_OP_TYPES = {
    JSExp.BITOR,
    JSExp.BITXOR,
    JSExp.BITAND,
    JSExp.LSH,
    JSExp.RSH,
    JSExp.URSH,
    JSExp.SUB,
    JSExp.MUL,
    JSExp.DIV,
    JSExp.MOD,
    JSExp.INC,
    JSExp.DEC
  };
  public static final int[] BOOLEAN_OP_TYPES = {
    JSExp.SHEQ,
    JSExp.SHNE,
    JSExp.EQ,
    JSExp.NE,
    JSExp.LT,
    JSExp.LE,
    JSExp.GT,
    JSExp.GE,
    JSExp.NOT,
  };
  public static final int[] ACCESSOR_TYPES = {
    JSExp.GETPROP,
    JSExp.GETELEM,
  };
  public static final int[] ASSIGN_TYPES = {
    JSExp.ASSIGN,
    JSExp.ASSIGN_BITOR,
    JSExp.ASSIGN_BITXOR,
    JSExp.ASSIGN_BITAND,
    JSExp.ASSIGN_LSH,
    JSExp.ASSIGN_RSH,
    JSExp.ASSIGN_URSH,
    JSExp.ASSIGN_ADD,
    JSExp.ASSIGN_SUB,
    JSExp.ASSIGN_MUL,
    JSExp.ASSIGN_DIV,
    JSExp.ASSIGN_MOD,
    JSExp.INC,
    JSExp.DEC,
  };
  
  public static final int[] BLOCK_TYPES = {
    JSExp.BLOCK,
    JSExp.SCRIPT
  };

  public static boolean isPostfixUnOp(Node n) {
    if (!isUnOp(n)) return false;
    int prepost = n.getIntProp(Node.INCRDECR_PROP);
    // %%% rhino.IRFactory doesn't set up the property correctly.
    // It uses 1 to indicate postfix rather than POST_FLAG
    // (Node.POST_FLAG == 0x2).
    //return prepost == Node.POST_FLAG;
    return prepost == 1;
  }

  public static boolean isPostfixUnOp(Exp e) {
    if (!isUnOp(e)) return false;
    Node n = ((JSExp)e).getNode();
    int prepost = n.getIntProp(Node.INCRDECR_PROP);
    // %%% rhino.IRFactory doesn't set up the property correctly.
    // It uses 1 to indicate postfix rather than POST_FLAG
    // (Node.POST_FLAG == 0x2).
    //return prepost == Node.POST_FLAG;
    return prepost == 1;
  }

  public static boolean isUnOp(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : UNOP_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isUnOp(Exp e) {
    if (e == null) return false;
    for (int t : UNOP_TYPES)
      if (e.is(t)) return true;
    return false;
  }

  public static boolean isControl(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : CONTROL_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isControl(Exp e) {
    if (e == null) return false;
    for (int t : CONTROL_TYPES)
      if (e.is(t)) return true;
    return false;
  }

  // %%% Could be more efficient with Set for large programs
  public static boolean isStatement(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : STATEMENT_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isStatement(Exp e) {
    if (e == null) return false;
    Node n = ((JSExp)e).getNode();
    return isStatement(n);
  }

  protected static boolean isPrimitive(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    if (ntype == JSExp.NAME) {
      String name = n.getString();
      for (String nn : NativeUtil.PRIMITIVES)
        if (nn.equals(name)) return true;
    } else {
      for (int t : PRIMITIVE_TYPES)
        if (ntype == t) return true;
    }
    return false;
  }

  public static boolean isPrimitive(Exp e) {
    if (e == null) return false;
    Node n = ((JSExp)e).getNode();
    return isPrimitive(n);
  }

  public static boolean isLiteral(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : LITERAL_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isLiteral(Exp e) {
    if (e == null) return false;
    Node n = ((JSExp)e).getNode();
    return isLiteral(n);
  }

  public static boolean isAssignment(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : ASSIGN_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isAssignment(Exp e) {
    if (e == null) return false;
    Node n = ((JSExp)e).getNode();
    return isAssignment(n);
  }

  public static boolean isAccessor(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : ACCESSOR_TYPES)
      if (ntype == t) return true;
    return false;
  }
  
  public static boolean isAccessor(Exp e) {
    if (e == null) return false;
    Node n = ((JSExp)e).getNode();
    return isAccessor(n);
  }

  // Verbose name so as to not confuse it with Rhino |Node.isBlock|.
  public static boolean isStatementBlock(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : BLOCK_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isStatementBlock(Exp e) {
    if (e == null) return false;
    Node n = ((JSExp)e).getNode();
    return isStatementBlock(n);
  }

  public static boolean isForIn(Node n) {
    if (n == null) return false;
    if (n.isFor() && n.getChildCount() == 3)
      return true;
    return false;
  }

  public static boolean isForIn(Exp e) {
    if (e == null) return false;
    if (e.is(JSExp.FOR) && e.getChildCount() == 3)
      return true;
    return false;
  }

  public static boolean isStandardFor(Node n) {
    if (n == null) return false;
    if (n.isFor() && n.getChildCount() == 4)
      return true;
    return false;
  }

  public static boolean isStandardFor(Exp e) {
    if (e == null) return false;
    if (e.is(JSExp.FOR) && e.getChildCount() == 4)
      return true;
    return false;
  }

  public static boolean isLoop(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : LOOP_TYPES)
      if (ntype == t) return true;
    return false;
  }
  
  public static boolean isLoop(Exp e) {
    if (e == null) return false;
    Node n = ((JSExp)e).getNode();
    return isLoop(n);
  }

  public static boolean isAnonymousFunction(Node n) {
    if (n == null) return false;
    if (!n.isFunction())
      return false;
    Node parent = n.getParent();
    // Getters and setters are not anonymous.
    if (parent != null && (parent.isGetterDef() || parent.isSetterDef()))
      return false;
    Node name = n.getChildAtIndex(0);
    if (name.isName() && name.getString().equals(""))
      return true;
    return false;
  }

  public static boolean isAnonymousFunction(Exp e) {
    if (e == null) return false;
    Node n = ((JSExp)e).getNode();
    return isAnonymousFunction(n);
  }

  // Initializaters (e.g. |var x = 2, y = 3|) are structured as follows.
  // [VAR, [NAME, [NUMBER]], [NAME, [NUMBER]]]. If any of the variables
  // are initialized, we consider the statement to be an initializer.
  public static boolean isVarInitializer(Node n) {
    if (n == null) return false;
    if (!n.isVar()) return false;
    int childcnt = n.getChildCount();
    assert childcnt > 0 : "Unknown VAR node format: " + codeFromNode(n);

    for (int i=0; i<childcnt; i++) {
      Node name = n.getChildAtIndex(i);
      assert name.isName() : "VAR node without NAME child: " + codeFromNode(n);
      if (name.getChildCount() > 0)
        return true;
    }
    return false;
  }

  public static boolean isVarInitializer(Exp e) {
    if (e == null) return false;
    Node n = ((JSExp)e).getNode();
    return isVarInitializer(n);
  }

  // If any of the variables are left uninitialized, we consider the
  // statement to be a declaration. So a statement can be (or contain,
  // really) both a declaration and an initializer.
  public static boolean isVarDeclaration(Node n) {
    if (n == null) return false;
    if (!n.isVar()) return false;
    int childcnt = n.getChildCount();
    assert childcnt > 0 : "Unknown VAR node format: " + codeFromNode(n);

    for (int i=0; i<childcnt; i++) {
      Node name = n.getChildAtIndex(i);
      assert name.isName() : "VAR node without NAME child: " + codeFromNode(n);
      if (name.getChildCount() == 0)
        return true;
    }
    return false;
  }

  public static boolean isVarDeclaration(Exp e) {
    if (e == null) return false;
    Node n = ((JSExp)e).getNode();
    return isVarDeclaration(n);
  }

  public static boolean isMemberDeclaration(Node n) {
    if (n == null) return false;
    Node parent = n.getParent();
    if (parent == null) return false;
    // %%% STRING also?
    if (parent.isObjectLit() && (n.isString()
        || n.isGetterDef() || n.isSetterDef()))
      return true;
    return false;
  }

  public static boolean isMemberDeclaration(Exp e) {
    if (e == null) return false;
    Node n = ((JSExp)e).getNode();
    return isMemberDeclaration(n);
  }

  // Return an enclosing transaction.
  public static Node isWithinTransaction(Node n) {
    Node tx = n.getParent();
    while (tx != null && !isTransaction(tx)) {
      tx = tx.getParent();
    }
    return tx;
  }

  public static boolean isTransaction(Node n) {
    if (n == null) return false;
    if (n.getType() == JSExp.TRANSACTION)
      return true;
    return false;
  }

  public static Double getDouble(Exp e) {
    if (e == null) return null;
    Node n = ((JSExp)e).getNode();
    if (n == null) return null;
    return ClosureUtil.getNumberValue(n);
  }

  // Return an integer from a JavaScript NUMBER node, with conversion
  // from the double value as the SpiderMonkey interpreter does for
  // array indices.
  // %%% Modulo representation length issues.
  // A null return value indicates that the double is not an integer.
  public static Integer getInteger(Exp e) {
    Double d = getDouble(e);
    if (d == null) return null;
    int i = d.intValue();
    Double di = new Double(i);
    if (di.doubleValue() == d.doubleValue()) {
      return new Integer(i);
    }
    return null;
  }

  public static boolean returnsBoolean(Node n) {
    if (n == null) return false;
    if (n.isTrue() || n.isFalse())
      return true;
    int ntype = n.getType();
    for (int t : BOOLEAN_OP_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean returnsBoolean(Exp e) {
    if (e == null) return false;
    Node n = ((JSExp)e).getNode();
    return returnsBoolean(n);
  }

  public static String escapeString(String str) {
    // %%% Test this
    str = str.replace("\\", "\\\\").replace("\"", "\\\"");
    str = str.replace("\n", "\\n");
    // %%% What about "\r", other weird characters?
    return str;
  }

  public static boolean returnsString(SourceManager src, Node n) {
    if (n == null) return false;
    if (n.isString()) return true;
    if (n.isName()) {
      String typ = src.getType(n.getString());
      if (typ != null && typ.equals("String"))
        return true;
    }
    if (n.isAdd()) {
      Node first = n.getFirstChild();
      if (returnsString(src, first))
        return true;
      Node second = n.getChildAtIndex(1);
      if (returnsString(src, second))
        return true;
    }
    // %%% Could have cases for AND, OR.
    return false;
  }

  public static boolean returnsString(Exp e) {
    if (e == null) return false;
    Node n = ((JSExp)e).getNode();
    return returnsString(e.getSourceManager(), n);
  }

  public static boolean returnsNumber(SourceManager src, Node n) {
    if (n == null) return false;
    if (n.isNumber()) return true;
    if (n.isName()) {
      String typ = src.getType(n.getString());
      if (typ != null && typ.equals("Number"))
        return true;
      return false;
    }
    if (n.isAdd()) {
      Node first = n.getFirstChild();
      Node second = n.getChildAtIndex(1);
      if (returnsNumber(src, first) && returnsNumber(src, second))
        return true;
    }
    // %%% Could have cases for AND, OR.
    int ntype = n.getType();
    for (int t : NUMBER_OP_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean returnsNumber(Exp e) {
    if (e == null) return false;
    Node n = ((JSExp)e).getNode();
    return returnsNumber(e.getSourceManager(), n);
  }

  public static Node getAssignLHS(Node n) {
    // %%% Transition to Exp.cloneAssignLHS.
    if (n == null) return null;
    // Unwrap the expression.
    if (n.isExprResult()) {
      n = n.getFirstChild();
    }

    if (isAssignment(n)) {
      // Works for INC/DEC also.
      return n.getFirstChild();
    }
      
    if (isVarInitializer(n)) {
      // %%% Should potentially return a list of Exps, since a
      // %%% declaration can contain several variables.
      // Collect copies of the initializer components.
      Node lhs = n.getFirstChild().cloneTree();
      // Isolate the variable name.
      lhs.removeChild(lhs.getFirstChild());
      return lhs;
    }
      
    return null;
    
  }

  public static Node getAssignRHS(Node n) {
    // %%% Transition to Exp.cloneAssignRHS
    if (n == null) return null;
    // Unwrap the expression.
    if (n.isExprResult()) {
      n = n.getFirstChild();
    }

    if (isAssignment(n)) {
      // %%% Perhaps construct the effective RHS.
      int t = n.getType();
      if (t == JSExp.INC || t == JSExp.DEC) {
        Node sub = n.getFirstChild().cloneTree();
        Node one = Node.newNumber(1);
        Node op = null;
        if (t == JSExp.INC) {
          op = new Node(JSExp.ADD, sub, one);
        } else {
          op = new Node(JSExp.SUB, sub, one);
        }
        return op;
      }
      return n.getChildAtIndex(1);
    }
      
    if (isVarInitializer(n)) {
      // %%% This will miss subsequent initializations in a
      // %%% multi-variable initializater.
      int childcnt = n.getChildCount();
      for (int i=0; i<childcnt; i++) {
        Node name = n.getFirstChild();
        if (name.getChildCount() == 1) {
          Node rhs = name.getFirstChild();
          return rhs;
        }
      }
    }

    return null;
  }

  public static Node findEquivalentSubtree(Node parent, Node search) {
    if (search.isEquivalentTo(parent)) {
      return parent;
    }
    for (int i=0; i<parent.getChildCount(); i++) {
      Node child = parent.getChildAtIndex(i);
      Node equiv = findEquivalentSubtree(child, search);
      if (equiv != null) {
        return equiv;
      }
    }
    return null;
  }

  public static Node getCondition(Node n) {
    if (!isControl(n)) return null;

    if (n.isIf() || n.isWhile()) {
      return n.getFirstChild();
    } else if (isStandardFor(n)) {
      return n.getChildAtIndex(1);
    } else if (isForIn(n)) {
      // %%% Not necessarily.
      return new Node(JSExp.TRUE);
    } else if (n.isDo()) {
      return n.getLastChild();
    } else if (n.isCase()) {
      // Make condition |switchVal == caseVal|.
      Node caseVal = n.getFirstChild();
      caseVal = caseVal.cloneTree();
      Node swtch = n.getParent();
      assert swtch.isSwitch() : "Case not within switch: " + n + " / " + swtch;
      Node switchVal = swtch.getFirstChild().cloneTree();
      // EQ seems to be correct, rather than SHEQ.
      return new Node(JSExp.EQ, switchVal, caseVal);
    } else if (n.isSwitch() || n.isDefaultCase()
        || n.isTry() || n.isCatch() || n.isWith()
        || n.isReturn()) {
      // These statements don't have branching control flow.
      return null;
    } else {
      Dbg.err("Unknown control type encountered: " + n);
    }
    return null;
  }

  public static Exp getCondition(Exp e) {
    if (!isControl(e)) return null;

    if (e.is(JSExp.IF) || e.is(JSExp.WHILE)) {
      return e.getChild(0);
    } else if (isStandardFor(e)) {
      return e.getChild(1);
    } else if (isForIn(e)) {
      // %%% Not necessarily.
      return JSExp.create(e.getSourceManager(), new Node(JSExp.TRUE));
    } else if (e.is(JSExp.DO)) {
      return e.getLastChild();
    } else if (e.is(JSExp.CASE)) {
      // Make condition |switchVal == caseVal|.
      Exp caseVal = e.getFirstChild();
      caseVal = caseVal.clone();
      Exp swtch = e.getParent();
      assert swtch.is(JSExp.SWITCH) : "Case not within switch: " + e + " / " + swtch;
      Exp switchVal = swtch.getChild(0).clone();

      Node switchNode = ((JSExp)switchVal).getNode();
      Node caseNode = ((JSExp)caseVal).getNode();
      // EQ seems to be correct, rather than SHEQ.
      return JSExp.create(e.getSourceManager(), new Node(JSExp.EQ, switchNode, caseNode));
    } else if (e.is(JSExp.SWITCH) || e.is(JSExp.DEFAULT_CASE)
        || e.is(JSExp.TRY) || e.is(JSExp.CATCH) || e.is(JSExp.WITH)
        || e.is(JSExp.RETURN)) {
      // These statements don't have branching control flow.
      return null;
    } else {
      Dbg.err("Unknown control type encountered: " + e.toString());
    }
    return null;
  }

  public static String codeFromNode(Node n, SourceManager src) {
    // The source file only provides for better formatting, so we can
    // safely fall back.
    if (src == null) return codeFromNode(n);
    return src.codeFromNode(n);
  }

  public static String codeFromNode(Node n) {
    if (n == null) return "";
    if (n.isExprResult() && n.getChildCount() == 0) return "";

    return ClosureUtil.codeFromNode(n);
  }

  // Returns a unique string for the given function
  // The string is based on the function's name and position in the source file
  public static String funcHash(Node n, SourceManager src) {
    String code;
    // The {main} dummy function has type BLOCK.
    if (n.getType() != JSExp.FUNCTION) {
      code = "{main}";
    } else {
      code = codeFromNode(n.getChildAtIndex(0), src);
    }
    return code;
  }

  public static Node getEnclosingStatement(Node n) {
    if (n == null) return null;
    if (isStatement(n)) {
      Node par = n.getParent();
      if (par != null && par.isLabel())
        return par;
      return n;
    }
    return getEnclosingStatement(n.getParent());
  }

  public static Exp getEnclosingStatement(Exp e) {
    if (e == null) return null;
    if (isStatement(e)) {
      Exp par = e.getParent();
      if (par != null && par.is(JSExp.LABEL))
        return par;
      return e;
    }
    return getEnclosingStatement(e.getParent());
  }

  public static boolean mayDirectlyModifyName(Node exp, String name) {
    if (exp == null) return false;
    if (exp.isName() && exp.getString().equals(name)) {
      Node parent = exp.getParent();
      if (isAssignment(parent) && exp == getAssignLHS(parent)) {
        return true;
      }
    }

    int childCnt = exp.getChildCount();
    for (int i=0; i<childCnt; i++) {
      Node c = exp.getChildAtIndex(i);
      if (mayDirectlyModifyName(c, name)) return true;
    }
    return false;
  }

  public static boolean containsType(Exp e, int t, boolean blocks) {
    if (e == null) return false;
    List<Exp> childs = e.getChildren();
    if (e.is(t)) return true;
    for (Exp c : childs) {
      // For control nodes (like a for loop), we may not want to descend
      // into body blocks.
      if (!blocks && isStatementBlock(c))
        continue;
      if (containsType(c, t, blocks))
        return true;
    }
    return false;
  }

  public static boolean containsName(Node n, String name) {
    if (n == null) return false;
    if (n.isName() && n.getString().equals(name)) return true;

    int childCnt = n.getChildCount();
    for (int i=0; i<childCnt; i++) {
      Node c = n.getChildAtIndex(i);
      if (containsName(c, name)) return true;
    }
    return false;
  }

  public static boolean containsInvoke(Node n, boolean blocks) {
    if (n == null) return false;
    if (n.isCall() || n.isNew()) return true;
    int childCnt = n.getChildCount();
    for (int i=0; i<childCnt; i++) {
      Node c = n.getChildAtIndex(i);
      // For control nodes (like a for loop), we may not want to descend
      // into body blocks.
      if (!blocks && isStatementBlock(c)) return false;
      if (containsInvoke(c, blocks)) return true;
    }
    return false;
  }

  public static boolean containsInvoke(Exp e, boolean blocks) {
    if (e == null) return false;
    Node n = ((JSExp)e).getNode();
    return containsInvoke(n, blocks);
  }

  public static String valueToString(Exp e) {
    if (e == null) return null;
    if (e.is(JSExp.EXPR_RESULT)) e = e.getChild(0);
    // Objects can have custom |toString| methods, so there's really
    // no way to statically determine the return value.
    if (!isPrimitive(e)) return null;
    if (e.isName()) {
      String name = e.getString();
      if (name.equals("#undefined")) return "undefined";
      if (name.equals("#null")) return "null";
      if (name.equals("#NaN")) return "NaN";
      if (name.equals("#Infinity")) return "Infinity";
      if (name.equals("#-Infinity")) return "-Infinity";
    } else {
      if (e.is(JSExp.STRING)) return e.getString();
      if (e.is(JSExp.NUMBER)) return e.toCode();
      if (e.is(JSExp.TRUE)) return "true";
      if (e.is(JSExp.FALSE)) return "false";
      // %%% Probably shouldn't hit this case.
      if (e.is(JSExp.NULL)) return "null";

      // If |RegExp.prototype.toString| is overwritten, then even a
      // primitive regular expression will produce an unknown string
      // when converted. (This was tested by using a regex as the
      // argument to |RegExp.prototype.test|. The same problem does
      // not apply to string literals, thankfully.)
      if (e.is(JSExp.REGEXP)) return null;
    }

    // Shouldn't ever get here.
    assert false;
    return null;
  }

  public static int getAstSize(Node n) {
    if (n == null) return 0;
    int cnt = 1;
    for (Node c : n.children()) {
      cnt += getAstSize(c);
    }
    return cnt;
  }

  protected static void dumpAST(Node n, int depth) {
    String tab = "";
    for (int i=0; i<depth; i++) {
      tab += "  ";
    }
    Dbg.dbg(tab + System.identityHashCode(n) + ": " + n);
    int childCnt = n.getChildCount();
    for (int i=0; i<childCnt; i++) {
      dumpAST(n.getChildAtIndex(i), depth + 1);
    }
  }

  public static void dumpAST(Node root) {
    Dbg.dbg("===== AST =====");
    dumpAST(root, 0);
  }

  public static void dumpCallGraph(CallGraph cg) {
    Dbg.dbg("===== CALL GRAPH =====");
    for (Callsite cs : cg.getAllCallsites()) {
      StringBuilder sb = new StringBuilder();
      sb.append(cs.getExp().toCode());
      sb.append(" -> ");
      if (cs.hasUnknownTarget()) {
        sb.append("[ALL]");
      } else {
        boolean first = true;
        for (Function f : cs.getPossibleTargets()) {
          if (first) { first = false; } else { sb.append(","); }
          sb.append(f.getName());
        }
        if (cs.hasExternTarget()) {
          for (Exp e : cs.getPossibleExternTargets()) {
            if (first) { first = false; } else { sb.append(","); }
            sb.append(e.toCode());
          }
        }
      }
      Dbg.dbg(sb.toString());
    } 
  }
}
