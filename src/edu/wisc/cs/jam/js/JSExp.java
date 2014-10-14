package edu.wisc.cs.jam.js;

import java.util.List;
import java.util.Set;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.LinkedHashMap;

import com.google.javascript.rhino.Node;
import com.google.javascript.rhino.Token;

import edu.wisc.cs.jam.xsb.XSBInterface;

import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.Dbg;

public class JSExp extends Exp {
  protected SourceManager sm;
  protected Node node;
  protected boolean isstatement;
  protected boolean iscontrol;
  protected boolean isblock;

  protected static Map<Node,JSExp> nodeMap;
  // %%% Make this a Map<Node,Type>.
  public static Map<String,String> typeMap;

  // This syncs up with Closure.
  public final static int
    ERROR = Token.ERROR, 
    RETURN = Token.RETURN,
    BITOR = Token.BITOR,
    BITXOR = Token.BITXOR,
    BITAND = Token.BITAND,
    EQ = Token.EQ,
    NE = Token.NE,
    LT = Token.LT,
    LE = Token.LE,
    GT = Token.GT,
    GE = Token.GE,
    LSH = Token.LSH,
    RSH = Token.RSH,
    URSH = Token.URSH,
    ADD = Token.ADD,
    SUB = Token.SUB,
    MUL = Token.MUL,
    DIV = Token.DIV,
    MOD = Token.MOD,
    NOT = Token.NOT,
    BITNOT = Token.BITNOT,
    POS = Token.POS,
    NEG = Token.NEG,
    NEW = Token.NEW,
    DELPROP = Token.DELPROP,
    TYPEOF = Token.TYPEOF,
    GETPROP = Token.GETPROP,
    GETELEM = Token.GETELEM,
    CALL = Token.CALL,
    NAME = Token.NAME,
    NUMBER = Token.NUMBER,
    STRING = Token.STRING,
    NULL = Token.NULL,
    THIS = Token.THIS,
    FALSE = Token.FALSE,
    TRUE = Token.TRUE,
    SHEQ = Token.SHEQ,   // shallow equality (===)
    SHNE = Token.SHNE,   // shallow inequality (!==)
    REGEXP = Token.REGEXP,
    THROW = Token.THROW,
    IN = Token.IN,
    INSTANCEOF = Token.INSTANCEOF,
    ARRAYLIT = Token.ARRAYLIT, // array literal
    OBJECTLIT = Token.OBJECTLIT, // object literal

    TRY = Token.TRY,
    PARAM_LIST = Token.PARAM_LIST,
    COMMA = Token.COMMA,  // comma operator

    ASSIGN = Token.ASSIGN,  // simple assignment  (=)
    ASSIGN_BITOR = Token.ASSIGN_BITOR,  // |=
    ASSIGN_BITXOR = Token.ASSIGN_BITXOR,  // ^=
    ASSIGN_BITAND = Token.ASSIGN_BITAND,  // &=
    ASSIGN_LSH = Token.ASSIGN_LSH,  // <<=
    ASSIGN_RSH = Token.ASSIGN_RSH,  // >>=
    ASSIGN_URSH = Token.ASSIGN_URSH,  // >>>=
    ASSIGN_ADD = Token.ASSIGN_ADD,  // +=
    ASSIGN_SUB = Token.ASSIGN_SUB,  // -=
    ASSIGN_MUL = Token.ASSIGN_MUL,  // *=
    ASSIGN_DIV = Token.ASSIGN_DIV,  // /=
    ASSIGN_MOD = Token.ASSIGN_MOD,  // %=

    HOOK = Token.HOOK,  // conditional (?:)
    OR = Token.OR, // logical or (||)
    AND = Token.AND, // logical and (&&)
    INC = Token.INC, // increment (++)
    DEC = Token.DEC, // decrement (--)
    FUNCTION = Token.FUNCTION, // function keyword
    IF = Token.IF, // if keyword
    SWITCH = Token.SWITCH, // switch keyword
    CASE = Token.CASE, // case keyword
    DEFAULT_CASE = Token.DEFAULT_CASE, // default keyword
    WHILE = Token.WHILE, // while keyword
    DO = Token.DO, // do keyword
    FOR = Token.FOR, // for keyword
    BREAK = Token.BREAK, // break keyword
    CONTINUE = Token.CONTINUE, // continue keyword
    VAR = Token.VAR, // var keyword
    WITH = Token.WITH, // with keyword
    CATCH = Token.CATCH, // catch keyword
    VOID = Token.VOID, // void keyword

    EMPTY = Token.EMPTY,

    BLOCK = Token.BLOCK, // statement block
    LABEL = Token.LABEL, // label
    EXPR_RESULT = Token.EXPR_RESULT, // expression statement in scripts
    SCRIPT = Token.SCRIPT, // top-level node for entire script
    // JAM begin
    TRANSACTION = Token.TRANSACTION, // transaction keyword
    // JAM end

    GETTER_DEF = Token.GETTER_DEF,
    SETTER_DEF = Token.SETTER_DEF,

    CONST = Token.CONST,  // JS 1.5 const keyword
    DEBUGGER = Token.DEBUGGER,

    // JSCompiler introduced tokens
    LABEL_NAME = Token.LABEL_NAME,
    STRING_KEY = Token.STRING_KEY, // object literal key
    CAST = Token.CAST,

    // JSDoc-only tokens
    ANNOTATION = Token.ANNOTATION,
    PIPE = Token.PIPE,
    STAR = Token.STAR,
    EOC = Token.EOC,
    QMARK = Token.QMARK,
    ELLIPSIS = Token.ELLIPSIS,
    BANG = Token.BANG,
    EQUALS = Token.EQUALS,
    LB = Token.LB,  // left brackets
    LC = Token.LC,  // left curly braces
    COLON = Token.COLON;

  static {
    nodeMap = new LinkedHashMap<Node,JSExp>();
  }

  protected static boolean isControlNode(Node n) {
    int t = n.getType();
    return t == FOR || t == IF || t == SWITCH || t == CASE
      || t == DEFAULT_CASE || t == WHILE || t == DO || t == TRY
      || t == CATCH || t == WITH;
  }

  protected static boolean isBlockNode(Node n) {
    int t = n.getType();
    return t == BLOCK || t == SCRIPT;
  }

  protected static boolean isStatementNode(Node n) {
    int t = n.getType();
    return t == EXPR_RESULT || t == VAR || t == THROW || t == RETURN;
  }

  protected JSExp(SourceManager src) {
    assert src != null;
    sm = src;
    isstatement = false;
    isblock = false;
    iscontrol = false;
    node = new Node(EMPTY);
  }

  protected JSExp(SourceManager src, Node n, Exp parent) {
    // %%% Make this constructor protected, and have a public one that
    // %%% takes only the SourceManager. This will prevent duplicates.
    assert src != null;
    assert n != null;
    assert !nodeMap.containsKey(n) : "JSExp already created for node: " + n;
    node = n;
    sm = src;

    // Recursively generate child expressions.
    children = new ArrayList<Exp>();
    int cnt = node.getChildCount();
    for (int i=0; i<cnt; i++) {
      Node c = node.getChildAtIndex(i);
      children.add(create(sm, c, this));
    }
    // Can't call create recursively here, or get infinite recursion.
    this.parent = parent;
    isstatement = isStatementNode(node);
    isblock = isBlockNode(node);
    iscontrol = isControlNode(node);
    nodeMap.put(n, this);
  }

  protected JSExp(SourceManager src, Node n) {
    this(src, n, null);
  }

  public static JSExp createEmpty(SourceManager src) {
    return new JSExp(src);
  }

  public static JSExp create(SourceManager src, Node n) {
    if (nodeMap.containsKey(n)) {
      return nodeMap.get(n);
    }
    return new JSExp(src, n);
  }

  protected static JSExp create(SourceManager src, Node n, Exp parent) {
    if (nodeMap.containsKey(n)) {
      JSExp exp = nodeMap.get(n);
      assert exp.parent == null || exp.parent == parent;
      exp.parent = parent;
      return exp;
    }
    return new JSExp(src, n, parent);
  }

  // Get the corresponding Exp for a given node.
  public static JSExp load(SourceManager src, Node n) {
    if (nodeMap.containsKey(n)) {
      return nodeMap.get(n);
    }
    return create(src, n);
  }

  @Override
  public JSExp isWithinType(int t) {
    if (is(t)) return this;
    if (parent == null) return null;
    return ((JSExp)parent).isWithinType(t);
  }

  @Override
  public boolean containsType(int t, boolean blocks) {
    List<Exp> childs = getChildren();
    if (is(t)) return true;
    for (Exp c : childs) {
      // For control nodes (like a for loop), we may not want to descend
      // into body blocks.
      if (!blocks && c.isBlock())
        continue;
      // %%% Bad, bad
      if (((JSExp)c).containsType(t))
        return true;
    }
    return false;
  }

  @Override
  public boolean containsType(int t) {
    return containsType(t, true);
  }

  @Override
  public boolean isInGlobalScope() {
    Exp fun = isWithinType(FUNCTION);
    // %%% Test this to make sure.
    if (fun == null) return true;
    return false;
  }

  @Override
  public void findType(int t, List<Exp> out, boolean blocks) {
    if (is(t)) {
      out.add(this);
    }
    for (Exp c : getChildren()) {
      if (!blocks && c.isBlock())
        continue;
      ((Exp)c).findType(t, out);
    }
  }

  @Override
  public void findType(int t, List<Exp> out) {
    findType(t, out, true);
  }

  @Override
  public void findNames(Set<String> out, boolean blocks) {
    if (is(NAME)) {
      out.add(getString());
    }
    for (Exp c : getChildren()) {
      if (!blocks && c.isBlock())
        continue;
      ((Exp)c).findNames(out);
    }
  }

  @Override
  public void findNames(Set<String> out) {
    findNames(out, true);
  }

  @Override
  public String getString() {
    return node.getString();
  }

  @Override
  public boolean is(int type) {
    return node.getType() == type;
  }

  @Override
  public boolean isAnd() {
    return node.isAnd();
  }

  @Override
  public boolean isAssign() {
    return ExpUtil.isAssign(node);
  }

  @Override
  public boolean isAccessor() {
    return is(GETPROP) || is(GETELEM);
  }

  @Override
  public boolean isCall() {
    return is(CALL) || is(NEW);
  }
  
  @Override
  public boolean isString() {
    return is(STRING) || is(STRING_KEY);
  }

  @Override
  public boolean isName() {
    return is(NAME);
  }

  @Override
  public boolean isBoolean() {
    return is(TRUE) || is(FALSE);
  }

  @Override
  public boolean isNumber() {
    return is(NUMBER);
  }

  @Override
  public boolean isNot() {
    return is(NOT);
  }

  @Override
  public Exp getAssignLHS() {
    // Unwrap the expression.
    if (is(EXPR_RESULT)) {
      return ((Exp)getChild(0)).getAssignLHS();
    }

    if (isAssign()) {
      return (Exp)getChild(0);
    }
      
    if (isDeclaration()) {
      if (isNoOp()) {
        // Return the NAME node for a simple declaration or function,
        // since it acts like an assignment of |undefined|.
        return (Exp)getChild(0); 
      }

      // Create a copy of the initializer components.
      Exp lhs = getChild(0).clone();
      // Isolate the variable name, without the initialization value.
      lhs.removeChild(lhs.getChild(0));
      return (Exp)lhs;
    }
    return null;
  }

  @Override
  public Exp getAssignRHS() {
    throw new UnsupportedOperationException();
  }

  @Override
  public boolean isDeclaration() {
    if (is(VAR)) {
      // Include declarations with initialization.
      return true;
    } else if (is(FUNCTION)) {
      // Function expressions are not declarations (even if named).
      // This condition determines whether this is a function statement.
      return ((JSExp)parent).isBlock();
    }
    return false;
  }

  @Override
  public boolean isNoOp() {
    if (isDeclaration()) {
      // If a VAR has initialization, it's not a noop.
      return is(FUNCTION) || getChildCount() == 0 || getChild(0).getChildCount() == 0;
    }
    int t = node.getType();
    // A function expression is also a noop, though invoking it is not.
    return t == BLOCK || t == FUNCTION || t == EMPTY || t == BREAK
        || t == CONTINUE || t == TRANSACTION;
  }

  @Override
  public boolean isBooleanOp() {
    int t = node.getType();
    return t == SHEQ || t == SHNE || t == EQ || t == NE || t == LT
        || t == LE || t == GT || t ==GE || t == NOT;
  }

  @Override
  public boolean isReturn() {
    return is(RETURN);
  }

  @Override
  public boolean isThrow() {
    return is(THROW);
  }

  @Override
  public boolean isRegExp() {
    return is(REGEXP);
  }

  @Override
  public boolean isScript() {
    return is(SCRIPT);
  }

  @Override
  public boolean isTransaction() {
    return is(TRANSACTION);
  }

  @Override
  public boolean isStatement() {
    return isStatementNode(node);
  }

  @Override
  public boolean isBlock() {
    return isBlockNode(node);
  }

  @Override
  public boolean isControl() {
    return isControlNode(node);
  }

  @Override
  public String toAST() {
    StringBuilder sb = new StringBuilder();
    // A null |nameMap| indicates that no normalization should occur.
    toAST(node, null, sb);
    return sb.toString();
  }

  @Override
  public Exp getCondition() {
    if (!isControl()) return null;
    Node cond = ExpUtil.getCondition(node);
    assert cond != null : "Null condition for control expression: " + toCode();
    return create(sm, cond);
  }

  @Override
  public Exp clone() {
    return create(sm, node.cloneTree());
  }

  // Return a textual representation of the node.
  protected Node getControlQueryNode() {
    assert isControl();
    Node cond = null;
    switch (node.getType()) {
      case IF:
        // if (cond) {}
        cond = ExpUtil.getCondition(node).cloneTree();
        return new Node(IF, cond, new Node(BLOCK));
      case WHILE:
      // %%% Why not separate case for DO?
      case DO:
        cond = ExpUtil.getCondition(node).cloneTree();
        return new Node(WHILE, cond, new Node(BLOCK));
      case FOR:
        if (ExpUtil.isStandardFor(node)) {
          cond = ExpUtil.getCondition(node).cloneTree();
          // Don't include initializer and incrementor because preprocessing
          // removes them.
          return new Node(FOR, new Node(EMPTY), cond, new Node(EMPTY), new Node(BLOCK));
        } else {
          assert ExpUtil.isForIn(node);
          // Return a for statement with symbolic condition
          // to allow the branch predicate to evaluate to true.
          Node inst = node.getChildAtIndex(0);
          Node coll = node.getChildAtIndex(1);
          return new Node(FOR, inst.cloneTree(), coll.cloneTree(), new Node(BLOCK));
        }
      case SWITCH:
        // Omit the block, but keep the expression.
        return new Node(SWITCH, node.getFirstChild().cloneTree());
      case WITH:
        // Omit contents of the block, but keep the object.
        return new Node(WITH, node.getFirstChild().cloneTree(), new Node(EMPTY));
      case CASE:
        // The case expression is all that's evaluated here. This is
        // different than the branch condition.
        Node c = node.getFirstChild();
        if (ExpUtil.isTransaction(c)) {
          // Strip an enclosing transaction expression.
          c = c.getChildAtIndex(1);
          // The block should only contain 1 statement.
          //assert c.getChildCount() == 1 : "Unexpected transaction expression block: " + sm.codeFromNode(c) + " / " + c.getChildCount();
          c = c.getLastChild();
        }
        return c;
      case DEFAULT_CASE:
        return new Node(TRUE);
      case TRY:
        return new Node(TRY, new Node(BLOCK), new Node(BLOCK));
      case CATCH:
        return new Node(TRY, new Node(BLOCK), new Node(CATCH, new Node(EMPTY), new Node(BLOCK)));
      default:
        Dbg.err("Unhandled control type: " + node);
        return null;
    }
  }

  @Override
  public String toQueryAST() {
    StringBuilder sb = new StringBuilder();
    if (isNoOp()) {
      sb.append("['EMPTY']");
    } else if (isControl()) {
      Node n = getControlQueryNode();
      toAST(n, null, sb);
    } else {
      // Call to the recursive AST printing function.
      toAST(node, null, sb);
    }
    return sb.toString();
  }

  protected void toAST(Node n, Map<String,String> nameMap, StringBuilder sb) {
    sb.append("[");

    int t = n.getType();
    String nodetype = Token.name(t);

    if (t == INC || t == DEC) {
      int prop = n.getIntProp(Node.INCRDECR_PROP);
      if (prop == Node.DECR_FLAG) {
        nodetype = "POST" + nodetype;
      }
    }

    sb.append("'");
    sb.append(nodetype);
    sb.append("'");

    if (t == NAME) {
      String name = n.getString();
      String norm = null;
      if (nameMap == null) {
        norm = name;
      } else if (nameMap.containsKey(name)) {
        norm = nameMap.get(name);
      } else {
        int vsuf = nameMap.size();
        // %%% Cannot be a function name.
        norm = "vv" + vsuf;
        nameMap.put(name, norm);
      }

      sb.append(",'\"");
      sb.append(norm);
      sb.append("\"'");
      
      String type = sm.getType(name);
      if (type != null
          && ExpUtil.getEnclosingStatement(n).isExprResult()) {
        // %%% Somewhat conservative.
        sb.append(",'");
        sb.append(type);
        sb.append("'");
      }

    } else if (t == STRING || t == STRING_KEY) {
      // Don't use |Node.getString| here since that will be the raw
      // format with evaluated control characters.
      sb.append(",'\"");

      // This unescapes quotes in the body of the string also.
      String strval = n.getString();

      String escval = XSBInterface.escapeString(strval);
      sb.append(escval);
      sb.append("\"'");
    } else if (t == NUMBER) {
      // %%% Kind of hacky ... we don't handle JS floats very well.
      String num = "" + n.getDouble();
      // Convert to an int if allowable.
      if (num.endsWith(".0")) num = num.substring(0, num.length() - 2);

      sb.append(",'");
      sb.append(num);
      sb.append("'");
    }

    // Recurse.
    for (int i=0; i<n.getChildCount(); i++) {
      sb.append(",");
      Node c = n.getChildAtIndex(i);
      toAST(c, nameMap, sb);
    }
    sb.append("]");
  }

  public String toNormalizedAST(Set<String> polnames) {

    if (isNoOp()) {
      return toQueryAST();
    }

    // %%% This is (hopefully) temporary until callsite information is
    // %%% worked into queries.
    if (ExpUtil.containsCall(node)) {
      return toQueryAST();
    }

    Node n = null;
    if (isControl()) {
      n = getControlQueryNode();
    } else {
      n = node;
    }

    // Initialize the name map with every policy-relevant name mapped to
    // itself.
    Map<String,String> nameMap = new HashMap<String,String>();
    for (String name : polnames) {
      nameMap.put(name, name);
    }

    StringBuilder sb = new StringBuilder();
    toAST(n, nameMap, sb);
    return sb.toString();
  }

  @Override
  public void replaceChild(Exp child, Exp newChild) {
    node.replaceChild(((JSExp)child).node, ((JSExp)newChild).node);
    super.replaceChild(child, newChild);
  }

  @Override
  public void addChildToBack(Exp newChild) {
    node.addChildToBack(((JSExp)newChild).node);
    super.addChildToBack(newChild);
  }

  // %%% Remove this eventually.
  public Node getNode() {
    return node;
  }

  @Override
  public SourceManager getSourceManager() {
    return sm;
  }

  @Override
  public String toCode() {
    return sm.codeFromNode(node);
  }

  protected String toShortCode() {
    if (isControl()) {
      Node cond = null;
      switch (node.getType()) {
        case IF:
          cond = ExpUtil.getCondition(node);
          return "if (" + sm.codeFromNode(cond) + ") {...}";
        case WHILE:
          cond = ExpUtil.getCondition(node);
          return "while (" + sm.codeFromNode(cond) + ") {...}";
        case DO:
          cond = ExpUtil.getCondition(node);
          return "do {...} while (" + sm.codeFromNode(cond) + ")";
        case FOR:
          if (ExpUtil.isStandardFor(node)) {
            cond = ExpUtil.getCondition(node);
            String init = sm.codeFromNode(node.getFirstChild());
            String iter = sm.codeFromNode(node.getChildAtIndex(2));
            return "for (" + init + ";" + cond + ";" + iter + ") {...}";
          } else {
            assert ExpUtil.isForIn(node);
            String inst = sm.codeFromNode(node.getChildAtIndex(0));
            String coll = sm.codeFromNode(node.getChildAtIndex(1));
            return "for (" + inst + " in " + coll + ") {...}";
          }
        case SWITCH:
          String exp = sm.codeFromNode(node.getFirstChild());
          return "switch (" + exp + ") {...}";
        case WITH:
          String obj = sm.codeFromNode(node.getFirstChild());
          return "with (" + obj + ") {...}";
        case CASE:
          return "case " + sm.codeFromNode(node.getFirstChild()) + ": ...";
        case DEFAULT_CASE:
          return "default: ...";
        case TRY:
          // %%% Alter according to what blocks are present.
          return "try {...} catch (...) {...} finally {...}";
        case CATCH:
          return "catch (" + sm.codeFromNode(node.getFirstChild()) + ") {...}";
        default:
          Dbg.err("Unhandled control type: " + node);
          return "???";
      }
    } else if (is(BLOCK)) {
      return "{...}";
    } else {
      return toCode();
    }
  }

  @Override
  public String toString() {
    return node.toString(true, false, true) + " | " + toShortCode();
  }
}

