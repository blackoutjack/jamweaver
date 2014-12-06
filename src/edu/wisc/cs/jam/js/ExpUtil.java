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

import com.google.javascript.jscomp.ClosureUtil;

import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.CallGraph;
import edu.wisc.cs.jam.CallGraph.Function;
import edu.wisc.cs.jam.CallGraph.Callsite;

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
    JSExp.PREINC,
    JSExp.PREDEC,
    JSExp.POSTINC,
    JSExp.POSTDEC
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
    JSExp.PREINC,
    JSExp.PREDEC,
    JSExp.POSTINC,
    JSExp.POSTDEC,
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
    JSExp.PREINC,
    JSExp.PREDEC,
    JSExp.POSTINC,
    JSExp.POSTDEC,
  };
  
  public static final int[] BLOCK_TYPES = {
    JSExp.BLOCK,
    JSExp.SCRIPT
  };

  public static boolean isPostfixUnOp(Exp e) {
    if (!isUnOp(e)) return false;
    if (e.is(JSExp.POSTINC) || e.is(JSExp.POSTDEC))
      return true;
    return false;
  }

  public static boolean isUnOp(Exp e) {
    if (e == null) return false;
    for (int t : UNOP_TYPES)
      if (e.is(t)) return true;
    return false;
  }

  public static boolean isControl(Exp e) {
    if (e == null) return false;
    for (int t : CONTROL_TYPES)
      if (e.is(t)) return true;
    return false;
  }

  public static boolean isStatement(Exp e) {
    if (e == null) return false;
    int ntype = e.getType();
    for (int t : STATEMENT_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isPrimitive(Exp e) {
    if (e == null) return false;
    int etype = e.getType();
    if (etype == JSExp.NAME) {
      String name = e.getString();
      for (String nn : NativeUtil.PRIMITIVES)
        if (nn.equals(name)) return true;
    } else {
      for (int t : PRIMITIVE_TYPES)
        if (etype == t) return true;
    }
    return false;
  }

  public static boolean isLiteral(Exp e) {
    if (e == null) return false;
    int etype = e.getType();
    for (int t : LITERAL_TYPES)
      if (etype == t) return true;
    return false;
  }

  public static boolean isAssignment(Exp e) {
    if (e == null) return false;
    int etype = e.getType();
    for (int t : ASSIGN_TYPES)
      if (etype == t) return true;
    return false;
  }
  
  public static boolean isAccessor(Exp e) {
    if (e == null) return false;
    int etype = e.getType();
    for (int t : ACCESSOR_TYPES)
      if (etype == t) return true;
    return false;
  }

  // Verbose name so as to not confuse it with Rhino |isBlock|.
  // Mimic's Closure's |isStatementBlock|.
  public static boolean isStatementBlock(Exp e) {
    if (e == null) return false;
    int etype = e.getType();
    for (int t : BLOCK_TYPES)
      if (etype == t) return true;
    return false;
  }

  public static boolean isForIn(Exp e) {
    if (e == null) return false;
    if (e.is(JSExp.FOR) && e.getChildCount() == 3)
      return true;
    return false;
  }

  public static boolean isStandardFor(Exp e) {
    if (e == null) return false;
    if (e.is(JSExp.FOR) && e.getChildCount() == 4)
      return true;
    return false;
  }

  public static boolean isLoop(Exp e) {
    if (e == null) return false;
    int etype = e.getType();
    for (int t : LOOP_TYPES)
      if (etype == t) return true;
    return false;
  }

  public static boolean isAnonymousFunction(Exp e) {
    if (e == null) return false;

    if (!e.isFunction())
      return false;
    Exp parent = e.getParent();
    // Getters and setters are not anonymous.
    if (parent != null && (parent.is(JSExp.GETTER_DEF) || parent.is(JSExp.SETTER_DEF)))
      return false;
    Exp name = e.getChild(0);
    if (name.isName() && name.getString().equals(""))
      return true;
    return false;
  }

  // Initializaters (e.g. |var x = 2, y = 3|) are structured as follows.
  // [VAR, [NAME, [NUMBER]], [NAME, [NUMBER]]]. If any of the variables
  // are initialized, we consider the statement to be an initializer.
  public static boolean isVarInitializer(Exp e) {
    if (e == null) return false;
    if (!e.is(JSExp.VAR)) return false;
    int childcnt = e.getChildCount();
    assert childcnt > 0 : "Unknown VAR node format: " + e.toCode();

    for (int i=0; i<childcnt; i++) {
      Exp name = e.getChild(i);
      assert name.isName() : "VAR node without NAME child: " + e.toCode();
      if (name.getChildCount() > 0)
        return true;
    }
    return false;
  }

  // If any of the variables are left uninitialized, we consider the
  // statement to be a declaration. So a statement can be (or contain,
  // really) both a declaration and an initializer.
  public static boolean isVarDeclaration(Exp e) {
    if (e == null) return false;
    if (!e.is(JSExp.VAR)) return false;
    int childcnt = e.getChildCount();
    assert childcnt > 0 : "Unknown VAR node format: " + e.toCode();

    for (int i=0; i<childcnt; i++) {
      Exp name = e.getChild(i);
      assert name.isName() : "VAR node without NAME child: " + e.toCode();
      if (name.getChildCount() == 0)
        return true;
    }
    return false;
  }

  public static boolean isMemberDeclaration(Exp e) {
    if (e == null) return false;
    Exp parent = e.getParent();
    if (parent == null) return false;
    // %%% STRING also?
    if (parent.is(JSExp.OBJECTLIT) && (e.isString()
        || e.is(JSExp.GETTER_DEF) || e.is(JSExp.SETTER_DEF)))
      return true;
    return false;
  }

  public static Double getDouble(Exp e) {
    if (e == null) return null;
    return ClosureUtil.getNumberValue(e);
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

  public static boolean returnsBoolean(Exp e) {
    if (e == null) return false;

    if (e.isBoolean())
      return true;
    int etype = e.getType();
    for (int t : BOOLEAN_OP_TYPES)
      if (etype == t) return true;
    return false;
  }

  public static String escapeString(String str) {
    // %%% Test this
    str = str.replace("\\", "\\\\").replace("\"", "\\\"");
    str = str.replace("\n", "\\n");
    // %%% What about "\r", other weird characters?
    return str;
  }

  public static boolean returnsString(Exp e) {
    if (e == null) return false;

    if (e.isString()) return true;
    if (e.isName()) {
      String typ = e.getSourceManager().getType(e.getString());
      if (typ != null && typ.equals("String"))
        return true;
    }
    if (e.is(JSExp.ADD)) {
      Exp first = e.getFirstChild();
      if (returnsString(first))
        return true;
      Exp second = e.getChild(1);
      if (returnsString(second))
        return true;
    }
    // %%% Could have cases for AND, OR.
    return false;
  }

  public static boolean returnsNumber(Exp e) {
    if (e == null) return false;
    if (e.isNumber()) return true;
    if (e.isName()) {
      String typ = e.getSourceManager().getType(e.getString());
      if (typ != null && typ.equals("Number"))
        return true;
      return false;
    }
    if (e.is(JSExp.ADD)) {
      Exp first = e.getFirstChild();
      Exp second = e.getChild(1);
      if (returnsNumber(first) && returnsNumber(second))
        return true;
    }
    // %%% Could have cases for AND, OR.
    int etype = e.getType();
    for (int t : NUMBER_OP_TYPES)
      if (etype == t) return true;
    return false;
  }

  public static Exp getAssignLHS(Exp n) {
    // %%% Transition to Exp.cloneAssignLHS.
    if (n == null) return null;
    // Unwrap the expression.
    if (n.is(JSExp.EXPR_RESULT)) {
      n = n.getFirstChild();
    }

    if (n.isAssignment()) {
      // Works for INC/DEC also.
      return n.getFirstChild();
    }
      
    if (isVarInitializer(n)) {
      // %%% Should potentially return a list of Exps, since a
      // %%% declaration can contain several variables.
      // Collect copies of the initializer components.
      Exp lhs = n.getFirstChild().clone();
      // Isolate the variable name.
      lhs.removeChild(lhs.getFirstChild());
      return lhs;
    }
      
    return null;
  }

  public static Exp getAssignRHS(Exp e) {
    // %%% Transition to Exp.cloneAssignRHS
    if (e == null) return null;
    // Unwrap the expression.
    if (e.is(JSExp.EXPR_RESULT)) {
      e = e.getFirstChild();
    }

    if (e.isAssignment()) {
      // %%% Perhaps construct the effective RHS.
      if (isUnOp(e)) {
        Exp sub = e.getFirstChild().clone();
        Exp one = JSExp.createNumber(e.getSourceManager(), 1);
        Exp op = null;
        int t = e.getType();
        if (t == JSExp.PREINC || t == JSExp.POSTINC) {
          op = new JSExp(JSExp.ADD, sub, one);
        } else {
          op = new JSExp(JSExp.SUB, sub, one);
        }
        return op;
      }
      return e.getChild(1);
    }
      
    if (isVarInitializer(e)) {
      // %%% This will miss subsequent initializations in a
      // %%% multi-variable initializater.
      int childcnt = e.getChildCount();
      for (int i=0; i<childcnt; i++) {
        Exp name = e.getFirstChild();
        if (name.getChildCount() == 1) {
          Exp rhs = name.getFirstChild();
          return rhs;
        }
      }
    }

    return null;
  }

  public static Exp getCorrespondingSubtree(Exp newParent, Exp origParent, Exp orig) {
    if (origParent == orig)
      return newParent;

    List<Integer> path = new ArrayList<Integer>();
    Exp parent = orig.getParent();
    Exp child = orig;
    while (child != origParent) {
      int idx = parent.getIndexOfChild(child);
      assert idx > -1 : child + " is not a child of " + parent;
      path.add(new Integer(idx));
      child = parent;
      parent = child.getParent();
    }

    Exp ret = newParent;
    for (int i=path.size()-1; i>=0; i--) {
      int idx = path.get(i).intValue();
      ret = ret.getChild(idx);
    }
    return ret;
  }
  
  public static boolean isFunctionExpression(Exp e) {
    if (e == null) return false;
    if (!e.isFunction()) return false;
    Exp p = e.getParent();
    if (p.isScript() || p.isBlock() || p.is(JSExp.LABEL))
      return false;
    return true;
  }

  public static Exp getCondition(Exp e) {
    if (!isControl(e)) return null;

    if (e.is(JSExp.IF) || e.is(JSExp.WHILE)) {
      return e.getChild(0);
    } else if (isStandardFor(e)) {
      return e.getChild(1);
    } else if (isForIn(e)) {
      // %%% Not necessarily.
      return new JSExp(e.getSourceManager(), JSExp.TRUE);
    } else if (e.is(JSExp.DO)) {
      return e.getLastChild();
    } else if (e.is(JSExp.CASE)) {
      // Make condition |switchVal == caseVal|.
      Exp caseVal = e.getFirstChild();
      caseVal = caseVal.clone();
      Exp swtch = e.getParent();
      assert swtch.is(JSExp.SWITCH) : "Case not within switch: " + e + " / " + swtch;
      Exp switchVal = swtch.getChild(0).clone();

      // EQ seems to be correct, rather than SHEQ.
      return new JSExp(JSExp.EQ, switchVal, caseVal);
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

  public static boolean mayDirectlyModifyName(Exp e, String name) {
    if (e == null) return false;
    if (e.isName() && e.getString().equals(name)) {
      Exp parent = e.getParent();
      if (parent.isAssignment() && e == parent.cloneAssignLHS().getOriginal()) {
        return true;
      }
    }

    int childCnt = e.getChildCount();
    for (int i=0; i<childCnt; i++) {
      Exp c = e.getChild(i);
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

  public static boolean containsInvoke(Exp e, boolean blocks) {
    if (e == null) return false;
    if (e.isCall() || e.is(JSExp.NEW)) return true;
    int childCnt = e.getChildCount();
    for (int i=0; i<childCnt; i++) {
      Exp c = e.getChild(i);
      // For control nodes (like a for loop), we may not want to descend
      // into body blocks.
      if (!blocks && isStatementBlock(c)) return false;
      if (containsInvoke(c, blocks)) return true;
    }
    return false;
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
