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

    // %%% Include ES6 tokens eventually.

  static {
    nodeMap = new LinkedHashMap<Node,JSExp>();
  }

  protected static boolean isStatementNode(Node n) {
    int t = n.getType();
    return t == EXPR_RESULT || t == VAR || t == THROW || t == RETURN;
  }

  protected JSExp(SourceManager src) {
    assert src != null;
    sm = src;
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
    nodeMap.put(n, this);
  }

  protected JSExp(SourceManager src, Node n) {
    this(src, n, null);
  }

  public static JSExp createEmpty(SourceManager src) {
    return new JSExp(src);
  }

  public static JSExp createNumber(SourceManager src, double num) {
    return create(src, Node.newNumber(num));
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
  public Exp isWithinType(int t) {
    if (is(t)) return this;
    if (parent == null) return null;
    return parent.isWithinType(t);
  }

  @Override
  public int getType() {
    return node.getType();
  }

  @Override
  public boolean containsType(int t) {
    if (is(t)) return true;
    List<Exp> childs = getChildren();
    for (Exp c : childs) {
      if (c.containsType(t))
        return true;
    }
    return false;
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
      if (!blocks && ExpUtil.isStatementBlock(c))
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
      if (!blocks && ExpUtil.isStatementBlock(c))
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
    return getType() == type;
  }

  @Override
  public boolean isAnd() {
    return node.isAnd();
  }

  @Override
  public boolean isAssign() {
    return node.isAssign();
  }

  @Override
  public boolean isFunction() {
    return node.isFunction();
  }

  @Override
  public boolean isAssignment() {
    return ExpUtil.isAssignment(this);
  }

  @Override
  public boolean isAccessor() {
    return ExpUtil.isAccessor(this);
  }

  @Override
  public boolean isCall() {
    return is(CALL);
  }

  // Some function object is invoked as a constructor, function, or
  // method.
  @Override
  public boolean isInvoke() {
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
  public Exp cloneAssignLHS() {
    // Unwrap the expression.
    if (is(EXPR_RESULT)) {
      return getChild(0).cloneAssignLHS();
    }

    if (isAssignment()) {
      // Works for INC/DEC also.
      return getChild(0).clone();
    }

    // %%% What about INC and DEC?

    if (isDeclaration()) {
      // %%% Should potentially return a list of Exps, since a
      // %%% declaration can contain several variables.
      if (isNoOp()) {
        // Return the NAME node for a simple declaration or function,
        // since it acts like an assignment of |undefined|.
        return getChild(0).clone(); 
      }

      // Create a copy of the initializer components.
      Exp lhs = getChild(0).clone();
      // Isolate the variable name, without the initialization value.
      lhs.removeChild(lhs.getChild(0));
      return lhs;
    }
    return null;
  }

  @Override
  public Exp cloneAssignRHS() {
    // Unwrap the expression.
    if (is(EXPR_RESULT)) {
      return getChild(1).cloneAssignRHS();
    }

    if (isAssignment()) {
      if (is(INC) || is(DEC)) {
        Node sub = node.getFirstChild().cloneTree();
        Node one = Node.newNumber(1);
        Node op = null;
        if (is(INC)) {
          op = new Node(ADD, sub, one);
        } else {
          op = new Node(SUB, sub, one);
        }
        return create(sm, op);
      }
      
      // %%% Perhaps construct the effective RHS.
      return getChild(1).clone();
    }

    // %%% What about INC and DEC?

    if (isDeclaration()) {
      if (isFunction()) {
        // The function itself is the value that's being assigned.
        return this.clone();
      } else if (!ExpUtil.isVarInitializer(this)) {
        // %%% Should potentially return a list of Exps, since a
        // %%% declaration can contain several variables.
        // Return undefined for a simple declaration or function,
        // since it acts like an assignment of |undefined|.
        return create(sm, Node.newString(JSExp.NAME, "#undefined"));
      }

      // Create a copy of the initializer components.
      Exp lhs = getChild(0).clone();
      // Isolate the initialization value, without the variable name.
      Exp val = lhs.getChild(0);
      return val.clone();
    }
    return null;
  }

  @Override
  public boolean isDeclaration() {
    if (is(VAR)) {
      // Include declarations with initialization.
      return true;
    } else if (is(FUNCTION)) {
      // Function expressions are not declarations (even if named).
      // This condition determines whether this is a function statement.
      return ExpUtil.isStatementBlock(parent);
    }
    return false;
  }

  @Override
  public boolean isNoOp() {
    if (isDeclaration()) {
      // If a VAR has initialization, it's not a noop.
      return is(FUNCTION) || getChildCount() == 0 || getChild(0).getChildCount() == 0;
    }
    int t = getType();
    // A function expression is also a noop, though invoking it is not.
    return t == BLOCK || t == FUNCTION || t == EMPTY || t == BREAK
        || t == CONTINUE || t == TRANSACTION;
  }

  @Override
  public boolean isBooleanOp() {
    int t = getType();
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
    return ExpUtil.isStatement(this);
  }

  @Override
  public boolean isBlock() {
    return is(BLOCK);
  }

  @Override
  public boolean isControl() {
    return ExpUtil.isControl(this);
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
    switch (getType()) {
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

    // Skip the normalization if the statement's query might contain
    // a CALL or NEW.
    // %%% This is (hopefully) temporary until callsite information is
    // %%% worked into queries.
    if (ExpUtil.containsInvoke(node, false)) {
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
      Exp cond = ExpUtil.getCondition(this);
      switch (node.getType()) {
        case IF:
          return "if (" + cond.toCode() + ") {...}";
        case WHILE:
          return "while (" + cond.toCode() + ") {...}";
        case DO:
          return "do {...} while (" + cond.toCode() + ")";
        case FOR:
          if (ExpUtil.isStandardFor(this)) {
            String init = getChild(0).toCode();
            String iter = getChild(2).toCode();
            return "for (" + init + ";" + cond.toCode() + ";" + iter + ") {...}";
          } else {
            assert ExpUtil.isForIn(this);
            String inst = getChild(0).toCode();
            String coll = getChild(1).toCode();
            return "for (" + inst + " in " + coll + ") {...}";
          }
        case SWITCH:
          String exp = getChild(0).toCode();
          return "switch (" + exp + ") {...}";
        case WITH:
          String obj = getChild(0).toCode();
          return "with (" + obj + ") {...}";
        case CASE:
          return "case " + getChild(0).toCode() + ": ...";
        case DEFAULT_CASE:
          return "default: ...";
        case TRY:
          // %%% Alter according to what blocks are present.
          return "try {...} catch (...) {...} finally {...}";
        case CATCH:
          return "catch (" + getChild(0).toCode() + ") {...}";
        default:
          Dbg.err("Unhandled control type: " + toCode());
          return "???";
      }
    } else if (is(BLOCK)) {
      return "{...}";
    } else if (is(SCRIPT)) {
      return "/* " + node.getSourceFileName() + " */ ...";
    } else {
      return toCode();
    }
  }

  @Override
  public String toString() {
    return node.toString(true, false, true) + " | " + toShortCode();
  }
}

