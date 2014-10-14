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
import com.google.javascript.rhino.Token;

import com.google.javascript.jscomp.Compiler;
import com.google.javascript.jscomp.CompilerInput;
import com.google.javascript.jscomp.Compiler.CodeBuilder;
import com.google.javascript.jscomp.CallGraph.Function;
import com.google.javascript.jscomp.CallGraph;

import com.google.javascript.jscomp.ClosureUtil;

import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.Dbg;

import com.google.javascript.jscomp.ClosureUtil;

import edu.wisc.cs.jam.env.NativeUtil;

public class ExpUtil {

  // %%% Not a good categorization.
  public static final int[] STATEMENT_TYPES = {
    Token.FOR,
    Token.IF,
    Token.SWITCH,
    Token.WHILE,
    Token.DO,
    Token.EXPR_RESULT,
    Token.VAR,
    Token.CASE,
    Token.DEFAULT_CASE,
    Token.THROW,
    Token.RETURN,
    Token.SCRIPT,
    Token.TRY,
    Token.WITH,
    Token.LABEL,
  };
  public static final int[] LOOP_TYPES = {
    Token.FOR,
    Token.WHILE,
    Token.DO
  };
  public static final int[] CONTROL_TYPES = {
    Token.FOR,
    Token.IF,
    Token.SWITCH,
    Token.CASE,
    Token.DEFAULT_CASE,
    Token.WHILE,
    Token.DO,
    Token.TRY,
    Token.CATCH,
    Token.WITH,
  };
  public static final int[] PRIMITIVE_TYPES = {
    Token.FALSE,
    Token.TRUE,
    Token.STRING,
    Token.NUMBER,
    Token.NULL,
    Token.REGEXP,
  };
  public static final int[] LITERAL_TYPES = {
    Token.FALSE,
    Token.TRUE,
    Token.STRING,
    Token.NUMBER,
    Token.NULL,
    Token.REGEXP,
    Token.ARRAYLIT,
    Token.OBJECTLIT,
  };
  public static final int[] UNOP_TYPES = {
    Token.INC,
    Token.DEC
  };
  public static final int[] BINOP_TYPES = {
    Token.BITOR,
    Token.BITXOR,
    Token.BITAND,
    Token.SHEQ,
    Token.SHNE,
    Token.EQ,
    Token.NE,
    Token.LT,
    Token.LE,
    Token.GT,
    Token.GE,
    Token.LSH,
    Token.RSH,
    Token.URSH,
    Token.ADD,
    Token.SUB,
    Token.MUL,
    Token.DIV,
    Token.MOD,
    Token.AND,
    Token.OR,
  };
  public static final int[] NUMBER_OP_TYPES = {
    Token.BITOR,
    Token.BITXOR,
    Token.BITAND,
    Token.LSH,
    Token.RSH,
    Token.URSH,
    Token.SUB,
    Token.MUL,
    Token.DIV,
    Token.MOD,
    Token.INC,
    Token.DEC
  };
  public static final int[] BOOLEAN_OP_TYPES = {
    Token.SHEQ,
    Token.SHNE,
    Token.EQ,
    Token.NE,
    Token.LT,
    Token.LE,
    Token.GT,
    Token.GE,
    Token.NOT,
  };
  public static final int[] ACCESSOR_TYPES = {
    Token.GETPROP,
    Token.GETELEM,
  };
  public static final int[] ASSIGN_TYPES = {
    // %%% Need to add INC/DEC to this?
    Token.ASSIGN,
    Token.ASSIGN_BITOR,
    Token.ASSIGN_BITXOR,
    Token.ASSIGN_BITAND,
    Token.ASSIGN_LSH,
    Token.ASSIGN_RSH,
    Token.ASSIGN_URSH,
    Token.ASSIGN_ADD,
    Token.ASSIGN_SUB,
    Token.ASSIGN_MUL,
    Token.ASSIGN_DIV,
    Token.ASSIGN_MOD
  };
  
  public static final int[] BLOCK_TYPES = {
    Token.BLOCK,
    Token.SCRIPT
  };

  public static boolean isInIntrospectorExpression(Node n) {
    Node c = null;
    while (n != null) {
      // Check identity with the first child to avoid nodes in the
      // transaction block rather than the introspector expression.
      if (c != null && isTransaction(n) && c == n.getFirstChild())
        return true;
      c = n;
      n = n.getParent();
    }
    return false;
  }

  public static boolean isPostfixUnOp(Node n) {
    if (!isUnOp(n)) return false;
    int prepost = n.getIntProp(Node.INCRDECR_PROP);
    // %%% rhino.IRFactory doesn't set up the property correctly.
    // It uses 1 to indicate postfix rather than POST_FLAG
    // (Node.POST_FLAG == 0x2).
    //return prepost == Node.POST_FLAG;
    return prepost == 1;
  }

  public static boolean isScript(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    if (ntype == Token.SCRIPT) return true;
    return false;
  }

  public static boolean isTypeOf(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    if (ntype == Token.TYPEOF) return true;
    return false;
  }

  public static boolean isUnOp(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : UNOP_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isBinOp(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : BINOP_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isControl(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : CONTROL_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isInstanceOf(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    if (ntype == Token.INSTANCEOF) return true;
    return false;
  }

  public static boolean isObjectLiteral(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    if (ntype == Token.OBJECTLIT) return true;
    return false;
  }

  public static boolean isArrayLiteral(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    if (ntype == Token.ARRAYLIT) return true;
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

  public static boolean isExprResult(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.EXPR_RESULT) return true;
    return false;
  }

  public static boolean isBoolean(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    if (ntype == Token.FALSE) return true;
    if (ntype == Token.TRUE) return true;
    return false;
  }

  protected static boolean isPrimitive(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    if (ntype == Token.NAME) {
      String name = n.getString();
      for (String nn : NativeUtil.PRIMITIVE_NAMES)
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

  public static boolean isName(Node n) {
    if (n == null) return false;
    // Assignments such as "x = 1" have NAME tokens
    // as the top level. We don't want those.
    if (n.isName() && n.getChildCount() == 0) return true;
    return false;
  }

  public static boolean isWild(Node n) {
    if (!isName(n)) return false;
    String c = codeFromNode(n);
    if (c.startsWith("`")) return true;
    return false;
  }

  public static boolean isNameAssign(Node n) {
    Node lhs = getAssignLHS(n);
    return isName(lhs);
  }

  public static boolean isSimpleAssign(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    if (ntype == Token.ASSIGN) return true;
    return false;
  }

  public static boolean isAssign(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : ASSIGN_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isNew(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.NEW) return true;
    return false;
  }

  public static boolean isCall(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.CALL) return true;
    return false;
  }

  public static boolean isAccessor(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : ACCESSOR_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isBlock(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : BLOCK_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isCommaExpression(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.COMMA)
      return true;
    return false;
  }

  public static boolean isTernaryOp(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.HOOK)
      return true;
    return false;
  }

  public static boolean isForIn(Node n) {
    if (n == null) return false;
    if (isFor(n) && n.getChildCount() == 3)
      return true;
    return false;
  }

  public static boolean isStandardFor(Node n) {
    if (n == null) return false;
    if (isFor(n) && n.getChildCount() == 4)
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

  public static boolean isFunction(Node n) {
    if (n == null) return false;
    return n.getType() == Token.FUNCTION;
  }

  public static boolean isAnonymousFunction(Node n) {
    if (n == null) return false;
    if (!isFunction(n))
      return false;
    Node parent = n.getParent();
    // Getters and setters are not anonymous.
    if (parent != null && (parent.isGetterDef() || parent.isSetterDef()))
      return false;
    Node name = n.getChildAtIndex(0);
    if (isName(name) && name.getString().equals(""))
      return true;
    return false;
  }

  public static boolean isReturn(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.RETURN)
      return true;
    return false;
  }

  public static boolean isWhile(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.WHILE)
      return true;
    return false;
  }

  public static boolean isBreak(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.BREAK)
      return true;
    return false;
  }

  public static boolean isCase(Node n) {
    if (n == null) return false;
    if (n.isCase() || n.isDefaultCase())
      return true;
    return false;
  }

  public static boolean isSwitch(Node n) {
    if (n == null) return false;
    if (n.isSwitch())
      return true;
    return false;
  }

  public static boolean isContinue(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.CONTINUE)
      return true;
    return false;
  }

  public static boolean isAnd(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.AND)
      return true;
    return false;
  }

  public static boolean isOr(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.OR)
      return true;
    return false;
  }

  public static boolean isIf(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.IF)
      return true;
    return false;
  }

  public static boolean isFor(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.FOR)
      return true;
    return false;
  }

  public static boolean isString(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.STRING)
      return true;
    return false;
  }

  public static boolean isVar(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.VAR)
      return true;
    return false;
  }

  public static boolean isVarInitializer(Node n) {
    if (n == null) return false;
    if (!isVar(n)) return false;
    if (n.getChildCount() > 0 && n.getChildAtIndex(0).getChildCount() > 0)
      return true;
    return false;
  }

  public static boolean isVarDeclaration(Node n) {
    if (n == null) return false;
    if (!isVar(n)) return false;
    if (n.getChildCount() == 0 || n.getChildAtIndex(0).getChildCount() == 0)
      return true;
    return false;
  }

  public static boolean isMemberDeclaration(Node n) {
    if (n == null) return false;
    if (n.getParent() == null) return false;
    if ((n.getType() == Token.STRING_KEY || n.isGetterDef()
        || n.isSetterDef()) && isObjectLiteral(n.getParent()))
      return true;
    return false;
  }

  // Return an enclosing transaction.
  public static Node isWithinTransaction(Node n) {
    Node tx = n.getParent();
    while (tx != null && !isTransaction(tx)) {
      tx = tx.getParent();
    }
    return tx;
  }

  // Return an enclosing HOOK, OR, or AND.
  // %%% Untested
  public static Node isWithinShortCircuit(Node n) {
    Node stmt = n.getParent();
    while (stmt != null && !stmt.isHook()
        && !stmt.isAnd() && !stmt.isOr()) {
      // Don't go past control statements.
      if (isControl(stmt)) {
        return null;
      }
      stmt = stmt.getParent();
    }
    return stmt;
  }

  // %%% Untested
  public static Node getContainingBlock(Node n) {
    Node block = n.getParent();
    while (block != null && !block.isBlock()) {
      block = block.getParent();
    }
    return block;
    
  }

  public static boolean isTransaction(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.TRANSACTION)
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

  public static Node getAssignLHS(Node n) {
    // Unwrap the expression.
    if (isExprResult(n)) {
      n = n.getFirstChild();
    }

    if (isAssign(n)) {
      return n.getFirstChild();
    }
      
    if (isVarInitializer(n)) {
      // Collect copies of the initializer components.
      Node lhs = n.getFirstChild().cloneTree();
      // Isolate the variable name.
      lhs.removeChild(lhs.getFirstChild());
      return lhs;
    }
      
    return null;
    
  }

  public static Node getAssignRHS(Node n) {
    // Unwrap the expression.
    if (isExprResult(n)) {
      n = n.getFirstChild();
    }

    if (isAssign(n)) {
      return n.getChildAtIndex(1);
    }
      
    if (isVarInitializer(n)) {
      Node rhs = n.getFirstChild().getFirstChild();
      return rhs;
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
      return new Node(Token.TRUE);
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
      return new Node(Token.EQ, switchVal, caseVal);
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
  
  public static Node getEnclosingBlock(Node n) {
    if (isBlock(n))
      return n;
    Node parent = n.getParent();
    return getEnclosingBlock(parent);
  }

  public static String codeFromNode(Node n, SourceManager src) {
    // The source file only provides for better formatting, so we can
    // safely fall back.
    if (src == null) return codeFromNode(n);
    return src.codeFromNode(n);
  }

  public static String codeFromNode(Node n) {
    if (n == null) return "";
    if (isExprResult(n) && n.getChildCount() == 0) return "";

    return ClosureUtil.codeFromNode(n);
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

  public static Node getEnclosingIf(Node n) {
    Node enc = getEnclosingStatement(n);
    if (enc == null || enc.getType() == Token.IF) {
      return enc;
    }
    return getEnclosingIf(enc.getParent());
  }

  // Returns a unique string for the given function
  // The string is based on the function's name and position in the source file
  public static String funcHash(Node n, SourceManager src) {
    String code;
    // The {main} dummy function has type BLOCK.
    if (n.getType() != Token.FUNCTION) {
      code = "{main}";
    } else {
      code = codeFromNode(n.getChildAtIndex(0), src);
    }
    return code;
  }

  /*
  static String getFunctionTransition(Node n, SourceManager src) {
    return "{#" + funcHash(n, src) + "}";
  }
  */

  public static void scanForNames(Set<Node> out, Node n) {
    if (n == null) return;
    if (n.isName()) {
      out.add(n);
    } else {
      for (int i=0; i<n.getChildCount(); i++) {
        scanForNames(out, n.getChildAtIndex(i));
      }
    }
  }

  // Return a set of all names 
  public static Set<Node> scanForNames(Node n) {
    Set<Node> ret = new LinkedHashSet<Node>();
    scanForNames(ret, n);
    return ret;
  }

  public static boolean mayDirectlyModifyName(Node exp, String name) {
    if (exp == null) return false;
    if (exp.isName() && exp.getString().equals(name)) {
      Node parent = exp.getParent();
      if (isUnOp(parent)) {
        return true;
      }
      if (isAssign(parent) && exp == getAssignLHS(parent)) {
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

  public static boolean containsName(Node exp, String name) {
    if (exp == null) return false;
    if (exp.isName() && exp.getString().equals(name)) return true;

    int childCnt = exp.getChildCount();
    for (int i=0; i<childCnt; i++) {
      Node c = exp.getChildAtIndex(i);
      if (containsName(c, name)) return true;
    }
    return false;
  }

  public static boolean containsCall(Node exp) {
    if (isCall(exp) || isNew(exp)) return true;
    int childCnt = exp.getChildCount();
    for (int i=0; i<childCnt; i++) {
      Node c = exp.getChildAtIndex(i);
      if (containsCall(c)) return true;
    }
    return false;
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
    Collection<Function> allFuncs = cg.getAllFunctions();
    for (Function f : allFuncs) {
      dumpAST(f.getAstNode(), 0);
    }
  }
}
