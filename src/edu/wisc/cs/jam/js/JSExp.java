package edu.wisc.cs.jam.js;

import java.util.List;
import java.util.Set;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.WeakHashMap;

import com.google.javascript.rhino.Node;
import com.google.javascript.rhino.Token;
import com.google.javascript.rhino.InputId;

import edu.wisc.cs.jam.xsb.XSBInterface;

import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.Dbg;

public class JSExp extends Exp {
  protected SourceManager sm;
  protected Node node;

  protected String str;
  protected double num;

  // %%% This should be a temporary hack.
  protected Exp clonedFrom;

  protected String code;
  protected int type;

  // Additional info
  // %%% Maybe encode these properties in additional types.
  protected boolean quoted = false;
  protected boolean freeCall = false;
  protected boolean directEval = false;
  protected boolean arrowFunction = false;
  protected int slashv = -1;

  protected int charno;
  protected int lineno;
  protected String sourceFileName;

  protected static Map<Node,JSExp> nodeMap;
  //protected static Map<Exp,String> typeMap;

  public static void jettisonNodes() {
    for (Map.Entry<Node,JSExp> entry : nodeMap.entrySet()) {
      Node n = entry.getKey();
      JSExp e = entry.getValue();
      e.clearNode();
    }
    nodeMap.clear();
  }

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
    PREINC = Token.INC, // prefix increment (++)
    PREDEC = Token.DEC, // prefix decrement (--)
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
    COLON = Token.COLON,

    // Types that don't directly correspond to Rhino Tokens.
    POSTINC = Token.PLACEHOLDER2 + 1,
    POSTDEC = POSTINC + 1;

    // %%% Include ES6 tokens eventually.

  static {
    nodeMap = new WeakHashMap<Node,JSExp>();
  }

  protected void clearNode() {
    node = null;
  }

  protected void setNode(Node n) {
    node = n;
    nodeMap.put(n, this);

    type = n.getType();
    if (type == Token.INC) {
      boolean post = n.getBooleanProp(Node.INCRDECR_PROP);
      if (post) {
        type = POSTINC;
      } else {
        type = PREINC;
      }
    } else if (type == Token.DEC) {
      boolean post = n.getBooleanProp(Node.INCRDECR_PROP);
      if (post) {
        type = POSTDEC;
      } else {
        type = PREDEC;
      }
    } else if (type == Token.STRING || type == Token.STRING_KEY || type == Token.NAME || type == Token.LABEL_NAME || type == Token.GETTER_DEF || type == Token.SETTER_DEF || type == Token.MEMBER_DEF || type == Token.REST) {
      str = n.getString();
    } else if (type == Token.NUMBER) {
      num = n.getDouble();
    }

    if (type == Token.STRING_KEY) {
      quoted = n.getBooleanProp(Node.QUOTED_PROP);
    }
    if (type == Token.CALL) {
      freeCall = n.getBooleanProp(Node.FREE_CALL);
    }
    if (type == Token.NAME) {
      directEval = n.getBooleanProp(Node.DIRECT_EVAL);
    }
    if (type == Token.FUNCTION) {
      arrowFunction = n.getBooleanProp(Node.ARROW_FN);
    }
    if (type == Token.STRING || type == Token.STRING_KEY) {
      // %%% Per Node.java, this is a "total hack."
      slashv = n.getIntProp(Node.SLASH_V);
    }

    charno = n.getCharno();
    lineno = n.getLineno();
    sourceFileName = n.getSourceFileName();
  }

  public JSExp(int t, Exp l, Exp c, Exp d, Exp r) {
    assert l != null;
    assert c != null;
    assert d != null;
    assert r != null;
    assert l.getParent() == null;
    assert c.getParent() == null;
    assert d.getParent() == null;
    assert r.getParent() == null;
    sm = l.getSourceManager();
    assert c.getSourceManager() == sm;
    assert d.getSourceManager() == sm;
    assert r.getSourceManager() == sm;

    Node n = new Node(t);
    setNode(n);

    children = new ArrayList<Exp>();
    addChildToBack(l);
    addChildToBack(c);
    addChildToBack(d);
    addChildToBack(r);
    // %%% Creation of INC/DEC from scratch not supported currently.
    assert !ExpUtil.isUnOp(this);
  }

  public JSExp(int t, Exp l, Exp c, Exp r) {
    assert l != null;
    assert c != null;
    assert r != null;
    assert l.getParent() == null;
    assert c.getParent() == null;
    assert r.getParent() == null;
    sm = l.getSourceManager();
    assert c.getSourceManager() == sm;
    assert r.getSourceManager() == sm;

    Node n = new Node(t);
    setNode(n);

    children = new ArrayList<Exp>();
    addChildToBack(l);
    addChildToBack(c);
    addChildToBack(r);
    // %%% Creation of INC/DEC from scratch not supported currently.
    assert !ExpUtil.isUnOp(this);
  }

  public JSExp(int t, Exp l, Exp r) {
    assert l != null;
    assert r != null;
    assert l.getParent() == null;
    assert r.getParent() == null;
    sm = l.getSourceManager();
    assert r.getSourceManager() == sm;

    Node n = new Node(t);
    setNode(n);

    children = new ArrayList<Exp>();
    addChildToBack(l);
    addChildToBack(r);
    // %%% Creation of INC/DEC from scratch not supported currently.
    assert !ExpUtil.isUnOp(this);
  }

  public JSExp(int t, Exp c) {
    assert c != null;
    assert c.getParent() == null;
    sm = c.getSourceManager();

    Node n = new Node(t);
    setNode(n);

    children = new ArrayList<Exp>();
    addChildToBack(c);
    // %%% Creation of INC/DEC from scratch not supported currently.
    assert !ExpUtil.isUnOp(this);
  }

  public JSExp(SourceManager s, int t) {
    assert s != null;
    sm = s;
    Node n = new Node(t);
    setNode(n);
    children = new ArrayList<Exp>();
    // %%% Creation of INC/DEC from scratch not supported currently.
    assert !ExpUtil.isUnOp(this);
  }

  protected JSExp(SourceManager src, Node n) {
    // This constructor is protected to prevent duplicates.
    assert src != null;
    assert n != null;
    assert !nodeMap.containsKey(n) : "JSExp already created for node: " + n;
    sm = src;
    setNode(n);

    // Recursively generate child expressions.
    children = new ArrayList<Exp>();
    int cnt = n.getChildCount();
    for (int i=0; i<cnt; i++) {
      Node c = n.getChildAtIndex(i);
      Exp child = create(sm, c);
      // Call the super method because the Node is already linked.
      super.addChildToBack(child);
    }
  }

  protected JSExp(SourceManager src) {
    assert src != null;
    sm = src;
    Node n = new Node(EMPTY);
    setNode(n);
  }

  public static JSExp createEmpty(SourceManager src) {
    return new JSExp(src);
  }

  public static JSExp createName(SourceManager src, String name) {
    return create(src, Node.newString(NAME, name));
  }

  public static JSExp createString(SourceManager src, String s) {
    return create(src, Node.newString(STRING, s));
  }

  public static JSExp createStringKey(SourceManager src, String s) {
    return create(src, Node.newString(STRING_KEY, s));
  }

  public static JSExp createNumber(SourceManager src, double num) {
    return create(src, Node.newNumber(num));
  }

  // Get the corresponding Exp for a given Node, or create a new one.
  public static JSExp create(SourceManager src, Node n) {
    if (nodeMap.containsKey(n)) {
      return nodeMap.get(n);
    }
    return new JSExp(src, n);
  }

  @Override
  public Exp isWithinType(int t) {
    if (is(t)) return this;
    if (parent == null) return null;
    return parent.isWithinType(t);
  }

  @Override
  public int getType() {
    return type;
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
    return str;
  }

  @Override
  public double getDouble() {
    return num;
  }

  @Override
  public boolean is(int t) {
    return getType() == t;
  }

  @Override
  public boolean isAnd() {
    return is(AND);
  }

  @Override
  public boolean isAssign() {
    return is(ASSIGN);
  }

  @Override
  public boolean isFunction() {
    return is(FUNCTION);
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

    if (isDeclaration()) {
      // %%% Should potentially return a list of Exps, since a
      // %%% declaration can contain several variables.
      if (isNoOp()) {
        // Return the NAME for a simple declaration or function,
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
      return getChild(0).cloneAssignRHS();
    }

    if (isAssignment()) {
      if (ExpUtil.isUnOp(this)) {
        Exp sub = getFirstChild().clone();
        Exp one = createNumber(sm, 1);
        Exp op = null;
        if (is(POSTINC) || is(PREINC)) {
          op = new JSExp(ADD, sub, one);
        } else {
          op = new JSExp(SUB, sub, one);
        }
        return op;
      }
      
      assert getChildCount() == 2 : "Invalid children for assignment: " + this;
      return getChild(1).clone();
    }

    if (isDeclaration()) {
      if (isFunction()) {
        // The function itself is the value that's being assigned.
        return this.clone();
      } else if (!ExpUtil.isVarInitializer(this)) {
        // %%% Should potentially return a list of Exps, since a
        // %%% declaration can contain several variables.
        // Return undefined for a simple declaration or function,
        // since it acts like an assignment of |undefined|.
        return createName(sm, "#undefined");
      }

      // Create a copy of the initializer components.
      Exp lhs = getChild(0);
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
    toAST(this, null, sb);
    return sb.toString();
  }

  @Override
  public Exp getCondition() {
    return ExpUtil.getCondition(this);
  }

  @Override
  public Exp clone() {
    Exp c = create(sm, makeNode());
    ((JSExp)c).clonedFrom = this;
    return c;
  }

  @Override
  public Exp getOriginal() {
    return clonedFrom;
  }

  // Return a textual representation.
  protected Exp getControlQueryExp() {
    assert isControl();
    Exp cond = null;
    switch (getType()) {
      case IF:
        // if (cond) {}
        cond = getCondition().clone();
        return new JSExp(IF, cond, new JSExp(sm, BLOCK));
      case WHILE:
      // %%% Why not separate case for DO?
      case DO:
        cond = getCondition().clone();
        return new JSExp(WHILE, cond, new JSExp(sm, BLOCK));
      case FOR:
        if (ExpUtil.isStandardFor(this)) {
          cond = getCondition().clone();
          // Don't include initializer and incrementor because preprocessing
          // removes them.
          return new JSExp(FOR, new JSExp(sm, EMPTY), cond, new JSExp(sm, EMPTY), new JSExp(sm, BLOCK));
        } else {
          assert ExpUtil.isForIn(this);
          // Return a for statement with symbolic condition
          // to allow the branch predicate to evaluate to true.
          Exp inst = getChild(0);
          Exp coll = getChild(1);
          return new JSExp(FOR, inst.clone(), coll.clone(), new JSExp(sm, BLOCK));
        }
      case SWITCH:
        // Omit the block, but keep the expression.
        return new JSExp(SWITCH, getFirstChild().clone());
      case WITH:
        // Omit contents of the block, but keep the object.
        return new JSExp(WITH, getFirstChild().clone(), new JSExp(sm, EMPTY));
      case CASE:
        // The case expression is all that's evaluated here. This is
        // different than the branch condition.
        Exp c = getFirstChild();
        if (c.isTransaction()) {
          // Strip an enclosing transaction expression.
          c = c.getChild(1);
          // The block should only contain 1 statement.
          c = c.getLastChild();
        }
        return c;
      case DEFAULT_CASE:
        return new JSExp(sm, TRUE);
      case TRY:
        return new JSExp(TRY, new JSExp(sm, BLOCK), new JSExp(sm, BLOCK));
      case CATCH:
        return new JSExp(TRY, new JSExp(sm, BLOCK), new JSExp(CATCH, new JSExp(sm, EMPTY), new JSExp(sm, BLOCK)));
      default:
        Dbg.err("Unhandled control type: " + this);
        return null;
    }
  }

  @Override
  public String toQueryAST() {
    StringBuilder sb = new StringBuilder();
    if (isNoOp()) {
      sb.append("['EMPTY']");
    } else if (isControl()) {
      Exp e = getControlQueryExp();
      toAST(e, null, sb);
    } else {
      // Call to the recursive AST printing function.
      toAST(this, null, sb);
    }
    return sb.toString();
  }

  protected String getTypeName(int t) {
    if (t == POSTINC) {
      return "POSTINC";
    } else if (t == POSTDEC) {
      return "POSTDEC";
    } else {
      return Token.name(t);
    }
  }

  protected void toAST(Exp e, Map<String,String> nameMap, StringBuilder sb) {
    sb.append("[");

    int t = e.getType();
    String etype = getTypeName(t);

    sb.append("'");
    sb.append(etype);
    sb.append("'");

    if (t == NAME) {
      String name = e.getString();
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
      
      String typ = sm.getType(name);
      if (typ != null) {
        Exp p = ExpUtil.getEnclosingStatement(e);
        if (p != null && p.is(EXPR_RESULT)) {
          // %%% Somewhat conservative.
          sb.append(",'");
          sb.append(typ);
          sb.append("'");
        }
      }

    } else if (t == STRING || t == STRING_KEY) {
      sb.append(",'\"");

      // This unescapes quotes in the body of the string also.
      String strval = e.getString();

      String escval = XSBInterface.escapeString(strval);
      sb.append(escval);
      sb.append("\"'");
    } else if (t == NUMBER) {
      // %%% Kind of hacky ... we don't handle JS floats very well.
      String num = "" + e.getDouble();
      // Convert to an int if allowable.
      if (num.endsWith(".0")) num = num.substring(0, num.length() - 2);

      sb.append(",'");
      sb.append(num);
      sb.append("'");
    }

    // Recurse.
    for (int i=0; i<e.getChildCount(); i++) {
      sb.append(",");
      Exp c = e.getChild(i);
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
    if (ExpUtil.containsInvoke(this, false)) {
      return toQueryAST();
    }

    Exp e = null;
    if (isControl()) {
      e = getControlQueryExp();
    } else {
      e = this;
    }

    // Initialize the name map with every policy-relevant name mapped to
    // itself.
    Map<String,String> nameMap = new HashMap<String,String>();
    for (String name : polnames) {
      nameMap.put(name, name);
    }

    StringBuilder sb = new StringBuilder();
    toAST(e, nameMap, sb);
    return sb.toString();
  }

  @Override
  public void replaceChild(Exp child, Exp newChild) {
    if (node != null && ((JSExp)child).node != null)
      node.replaceChild(((JSExp)child).node, ((JSExp)newChild).getNode());
    super.replaceChild(child, newChild);
  }

  @Override
  public void addChildAfter(Exp newChild, Exp c) {
    if (node != null && ((JSExp)c).node != null)
      node.addChildAfter(((JSExp)newChild).getNode(), ((JSExp)c).node);
    super.addChildAfter(newChild, c);
  }

  @Override
  public void addChildBefore(Exp newChild, Exp c) {
    if (node != null && ((JSExp)c).node != null)
      node.addChildBefore(((JSExp)newChild).getNode(), ((JSExp)c).node);
    super.addChildBefore(newChild, c);
  }

  @Override
  public void addChildToFront(Exp newChild) {
    if (node != null)
      node.addChildToFront(((JSExp)newChild).getNode());
    super.addChildToFront(newChild);
  }

  @Override
  public void addChildToBack(Exp newChild) {
    if (node != null)
      node.addChildToBack(((JSExp)newChild).getNode());
    super.addChildToBack(newChild);
  }

  @Override
  public void removeChild(Exp child) {
    if (node != null && ((JSExp)child).node != null)
      node.removeChild(((JSExp)child).node);
    super.removeChild(child);
  }

  @Override
  public Exp detachFromParent() {
    assert parent != null;
    if (((JSExp)parent).node != null && node != null)
      ((JSExp)parent).node.removeChild(node);
    return super.detachFromParent();
  }

  // %%% Remove this eventually.
  public Node getNode() {
    if (node != null) {
      // %%% Temporary sanity check.
      //Node n = makeNode();
      //assert node.isEquivalentTo(n) : "Not equivalent: " + node.getChildCount() + " / " + n.getChildCount();
      return node;
    } else {
      return makeNode();
    }
  }

  protected int getClosureType() {
    if (type == POSTINC) {
      return Token.INC;
    } else if (type == POSTDEC) {
      return Token.DEC;
    } else {
      return type;
    }
  }

  public Node makeNode() {
    int t = getClosureType();

    Node n = null;
    if (t == Token.STRING || t == Token.STRING_KEY || t == Token.NAME || t == Token.LABEL_NAME || t == Token.GETTER_DEF || t == Token.SETTER_DEF || t == Token.MEMBER_DEF || t == Token.REST) {
      n = Node.newString(t, str);
    } else if (t == Token.NUMBER) {
      n = Node.newNumber(num);
    } else {
      n = new Node(t);
    }
    for (int i=0; i<getChildCount(); i++) {
      JSExp c = (JSExp)getChild(i);
      n.addChildToBack(c.makeNode());
    }

    if (t == Token.INC && type == POSTINC) {
      n.putBooleanProp(Node.INCRDECR_PROP, true);
    } else if (t == Token.DEC && type == POSTDEC) {
      n.putBooleanProp(Node.INCRDECR_PROP, true);
    }

    if (quoted) {
      n.putBooleanProp(Node.QUOTED_PROP, true);
    }
    if (slashv > -1) {
      n.putIntProp(Node.SLASH_V, slashv);
    }

    if (freeCall) {
      n.putBooleanProp(Node.FREE_CALL, true);
    }
    if (directEval) {
      n.putBooleanProp(Node.DIRECT_EVAL, true);
    }
    if (arrowFunction) {
      n.putBooleanProp(Node.ARROW_FN, true);
    }
    return n;
  }

  @Override
  public SourceManager getSourceManager() {
    return sm;
  }

  @Override
  public String getSourceFileName() {
    return sourceFileName;
  }

  @Override
  public int getSourceLine() {
    return lineno;
  }

  @Override
  public int getSourceChar() {
    return charno;
  }

  @Override
  public String toCode() {
    if (code != null) return code;
    return sm.codeFromNode(makeNode());
  }

  protected String toShortCode() {
    if (isControl()) {
      Exp cond = ExpUtil.getCondition(this);
      switch (getType()) {
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
      return "/* " + getSourceFileName() + " */ ...";
    } else {
      return toCode();
    }
  }

  @Override
  public String toString() {
    return makeNode().toString(true, false, true) + " | " + toShortCode();
  }
}

