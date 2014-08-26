
package edu.wisc.cs.jam.js;

import com.google.javascript.rhino.Node;
import com.google.javascript.rhino.Token;

import java.io.IOException;
import java.io.File;
import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.LinkedHashMap;

import edu.wisc.cs.jam.Semantics;
import edu.wisc.cs.jam.SourceFile;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.PolicyPath;
import edu.wisc.cs.jam.PolicyLanguage;
import edu.wisc.cs.jam.Clause;
import edu.wisc.cs.jam.Predicate;
import edu.wisc.cs.jam.PredicateValue;
import edu.wisc.cs.jam.ExpSymbol;
import edu.wisc.cs.jam.FunctionEntrySymbol;
import edu.wisc.cs.jam.BranchSymbol;
import edu.wisc.cs.jam.CallbackEntrySymbol;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.JAM;

import edu.wisc.cs.jam.xsb.XSBInterface;
import edu.wisc.cs.jam.xsb.XSBSingleInterface;
import edu.wisc.cs.jam.xsb.XSBMultiInterface;

public class JSSemantics implements Semantics {


  // A uniqueness counter for generating sentinels.
  private static int pv = 2121;

  private XSBInterface xsb;
  private SourceFile sourceFile;
  private FunctionFacts functionFacts;

  // Properties that are incorporated into policy predicates. Extra
  // processing is done by the semantics when these are present.
  private Map<PolicyPath,Set<String>> propertiesOfInterest;
  private boolean hasPropertiesOfInterest = false;
  private Map<PolicyPath,Set<String>> stringsOfInterest;
  private boolean hasStringsOfInterest = false;
  private Set<String> namesOfInterest;
  private boolean hasNamesOfInterest = false;

  public JSSemantics(SourceFile src) {
    sourceFile = src;
  }

  @Override
  public List<Boolean> batchQuery(List<Clause> clauses, List<Clause> prereqs, boolean onError) {
    return xsb.query(clauses, prereqs, onError);
  }

  @Override
  public List<Boolean> batchQuery(List<Clause> clauses, boolean onError) {
    return xsb.query(clauses, onError);
  }

  @Override
  public boolean query(Clause clause, boolean onError) {
    try {
      return xsb.query(clause);
    } catch (IOException ex) {
      Dbg.err("Error processing query " + clause.getQueryId() + ": " + ex.getMessage());
      return onError;
    }
  }

  @Override
  public List<String> sentinelQuery(Clause clause) {
    clause.setConcrete(true);
    try {
      return xsb.sentinelQuery(clause);
    } catch (IOException ex) {
      Dbg.err("Error processing sentinel query " + clause.getQueryId() + ": " + ex.getMessage());
      return null;
    }
  }

  protected void outputPropertiesOfInterest(List<PolicyPath> paths) {
    StringBuilder sb = new StringBuilder();
    sb.append(":- export polprops/2.\n");
    sb.append(":- export polstrs/2.\n");
    if (hasPropertiesOfInterest) {
      sb.append(":- import add_policy_prop/2 from ");
      sb.append(JAMConfig.SEMANTICS_DATA_MODULE);
      sb.append(".\n");
    }
    if (hasStringsOfInterest) {
      sb.append(":- import add_policy_str/2 from ");
      sb.append(JAMConfig.SEMANTICS_DATA_MODULE);
      sb.append(".\n");
    }
    sb.append("polprops(-1,[]).\n");
    sb.append("polstrs(-1,[]).\n");

    for (PolicyPath pp : paths) {
      outputPropertiesOfInterest(sb, pp);
    }

    // Overwrite the file if it exists.
    FileUtil.writeToMain(sb, "polprops.P", false);
    // Make a backup copy for debugging.
    //FileUtil.writeToFile(sb, FileUtil.getUniqueFilename("polprops", "P", FileUtil.getMainDir()));
  }

  protected void outputPropertiesOfInterest(StringBuilder sb, PolicyPath pp) {
    Set<String> props = propertiesOfInterest.get(pp);
    assert props != null;
    Set<String> strs = stringsOfInterest.get(pp);
    assert strs != null;

    for (String prop : props) {
      // %%% Determine and add flag indicating whether this property is
      // %%% numeric.
      sb.append(":- add_policy_prop(");
      sb.append(pp.getId());
      sb.append(",'\"");
      sb.append(XSBInterface.escapeString(prop));
      sb.append("\"').\n");
    }

    sb.append("polprops(");
    sb.append(pp.getId());
    sb.append(",[");

    boolean first = true;
    for (String prop : props) {
      if (first) first = false;
      else sb.append(",");

      sb.append("'\"");
      sb.append(XSBInterface.escapeString(prop));
      sb.append("\"'");
    } 

    sb.append("]).\n");

    // Do the same for strings.
    for (String str : strs) {
      sb.append(":- add_policy_str(");
      sb.append(pp.getId());
      sb.append(",'\"");
      sb.append(XSBInterface.escapeString(str));
      sb.append("\"').\n");
    }

    sb.append("polstrs(");
    sb.append(pp.getId());
    sb.append(",[");

    first = true;
    for (String str : strs) {
      if (first) first = false;
      else sb.append(",");

      sb.append("'\"");
      sb.append(XSBInterface.escapeString(str));
      sb.append("\"'");
    } 

    sb.append("]).\n");
  }
  
  @Override
  public void setPropertiesOfInterest(List<PolicyPath> paths) {
    // This should only be called once.
    assert propertiesOfInterest == null;
    assert stringsOfInterest == null;
    assert namesOfInterest == null;

    propertiesOfInterest = new LinkedHashMap<PolicyPath,Set<String>>();
    stringsOfInterest = new LinkedHashMap<PolicyPath,Set<String>>();
    namesOfInterest = new LinkedHashSet<String>();

    for (PolicyPath pp : paths) {
      PolicyLanguage pl = pp.getLanguage();
      Set<String> propset = new LinkedHashSet<String>();
      propertiesOfInterest.put(pp, propset);
      Set<String> stringset = new LinkedHashSet<String>();
      stringsOfInterest.put(pp, stringset);
      Set<String> nameset = new LinkedHashSet<String>();
      for (Predicate p : pp.getPredicates()) {
        if (pl.findPropertiesOfInterest(p, propset)) {
          hasPropertiesOfInterest = true;
        }
        if (pl.findStringsOfInterest(p, stringset)) {
          hasStringsOfInterest = true;
        }
        if (pl.findNamesOfInterest(p, namesOfInterest)) {
          hasNamesOfInterest = true;
        }
      }
    }

    outputPropertiesOfInterest(paths);

    //if (isReady()) loadXSB();
  }

  public Set<String> getNamesOfInterest() {
    assert namesOfInterest != null;
    return new LinkedHashSet<String>(namesOfInterest);
  }

  public void loadFunctionFacts() {
    // Collect function information to augment the language semantics.
    FunctionFacts ff = new FunctionFacts(sourceFile);
    setFunctionFacts(ff);
  }

  protected void setFunctionFacts(FunctionFacts ff) {
    functionFacts = ff;
    Dbg.out("Gathering function facts", 3);
    functionFacts.getFunctionPredicates();
    Dbg.out("Done generating function facts", 3);

    // Write function facts to a process-specific location
    FileUtil.writeToMain(functionFacts, "funfacts.P");
    StringBuilder sb = new StringBuilder();
    for (String loc : functionFacts.getAddresses()) {
      sb.append(loc);
      sb.append("\n");
    }
    FileUtil.writeToMain(sb, "user_functions.dat");

    //if (isReady()) loadXSB();
  }

  protected void loadXSB() {
    if (JAM.Opts.queryThreads <= 1) {
      xsb = new XSBSingleInterface(this);
    } else {
      xsb = new XSBMultiInterface(this);
    }
    xsb.addLoadDirectory(FileUtil.getMainDir().getAbsolutePath());
    // Compile the application-specific modules.
    xsb.prime();
  }

  @Override
  public void load() {
    assert isReady();
    loadXSB();
  }

  protected boolean isReady() {
    return functionFacts != null && propertiesOfInterest != null && stringsOfInterest != null;
  }

  protected Clause getConditionTestClause(String ast, boolean pos) {

    String text = "predexp(%H,%L," + ast + ",%P,%Q,%R),ecgv(%H,%L,%S,%P,%Q,%R),";
    if (!pos) {
      text += "unary_fn('not',%S,%R),";
    }
    text += "satisfiable(%S)";

    return new Clause(text);
  }

  protected Clause getConditionInitClause(String ast, boolean pos) {

    String text = "assertexp(%H,%L," + ast + ",%P,%Q,%R),";
    if (!pos) {
      text += "unary_fn('not',%S,%R),";
    }
    text += "constraint(%S)";

    return new Clause(text);
  }

  @Override
  public Predicate getPrerequisite(Predicate p) {
    List<Exp> conjs = p.getConjuncts();
    // The first conjunct will be the policy language construct that we
    // derive the prerequisite from.
    // %%% This logic could potentially be extended to addl. conjuncts.
    Exp conj0 = conjs.get(0);
    Predicate prereq = null;
    if (conj0.is(JSExp.CALL)) {
      String callName = conj0.getFirstChild().toCode();
      if (callName.equals("jam#get")) {
        prereq = getConditionPredicate("jam#get(`x,`y)");
      } else if (callName.equals("jam#set")) {
        prereq = getConditionPredicate("jam#set(`x,`y)");
      } else if (callName.equals("jam#called")) {
        prereq = getConditionPredicate("jam#called(`x)");
      }
    }
    return prereq;
  }

  @Override
  public Predicate getConditionPredicate(String cond) {
    // While some callers convert a node to a string prior to passing
    // it here, the decision was made to have this function take a
    // String. The primary reason was to maintain the exact syntax of
    // a predicate specified in the policy file when weaving that
    // predicate in a runtime check.
    Node n = sourceFile.nodeFromCode(cond);
    Exp s = JSExp.create(sourceFile, n);
    String ast = s.toQueryAST();

    Clause pos = getConditionTestClause(ast, true);
    Clause posinit = getConditionInitClause(ast, true);

    Clause neg = getConditionTestClause(ast, false);
    Clause neginit = getConditionInitClause(ast, false);

    Predicate ret = new Predicate(cond, pos, posinit, neg, neginit);

    // Save the AST nodes for each of the values for later use.
    ret.getPositive().setStatement(s);
    PredicateValue negpv = ret.getNegative();
    Node negn = sourceFile.nodeFromCode(negpv.getCondition());
    Exp negs = JSExp.create(sourceFile, negn);
    negpv.setStatement(negs);

    return ret;
  }

  @Override
  public void addToNamesOfInterest(Predicate p) {
    PolicyLanguage pl = new JSPolicyLanguage();
    if (pl.findNamesOfInterest(p, namesOfInterest)) {
      hasNamesOfInterest = true;
    }
  }

  // Generate a exp clause that the semantics can handle.
  @Override
  public Clause getParseClause(ExpSymbol sym) {
    String nodetext = null;

    if (sym instanceof FunctionEntrySymbol) {
      FunctionEntrySymbol fsym = (FunctionEntrySymbol)sym;
      // Don't evaluate the global entry. We provide a special
      // initializer characteristic function for that.
      if (fsym.isMain()) return null;
      nodetext = "'" + sym.toString() + "'";
    } else if (sym instanceof BranchSymbol) {
      nodetext = "'" + sym.toString() + "'";
    } else if (sym instanceof CallbackEntrySymbol) {
      nodetext = "'" + sym.toString() + "'";
    } else {
      nodetext = sym.toNormalizedAST(namesOfInterest);
      //nodetext = sym.toQueryAST();
    }

    // Will be null for noops, such as a var declaration.
    if (nodetext == null) return null;

    String c = null;
    if (sym.isPostCall()) {
      c = "exp(%H,%L," + nodetext + ",%P,%Q,_,'return')";
    } else {
      c = "exp(%H,%L," + nodetext + ",%P,%Q,_)";
    }
    Clause clause = new Clause(c);
    return clause;
  }

  // Generate a exp clause that the semantics can handle.
  @Override
  public Clause getTraceClause(ExpSymbol sym) {
    // %%% Refactor with |getParseClause|.
    String nodetext = null;

    if (sym instanceof FunctionEntrySymbol) {
      FunctionEntrySymbol fsym = (FunctionEntrySymbol)sym;
      // Don't evaluate the global entry. We provide a special
      // initializer characteristic function for that.
      if (fsym.isMain()) return null;
      nodetext = "'" + sym.toString() + "'";
    } else if (sym instanceof BranchSymbol) {
      nodetext = "'" + sym.toString() + "'";
    } else if (sym instanceof CallbackEntrySymbol) {
      nodetext = "'" + sym.toString() + "'";
    } else {
      nodetext = sym.toTraceAST();
    }

    // Will be null for noops, such as a var declaration.
    if (nodetext == null) return null;

    String c = null;
    if (sym.isPostCall()) {
      c = "exp(%H,%L," + nodetext + ",%P,%Q,_,'return')";
    } else {
      c = "exp(%H,%L," + nodetext + ",%P,%Q,_)";
    }
    Clause clause = new Clause(c);
    return clause;
  }

  @Override
  public Clause getPostSentinelClause(ExpSymbol sym) {

    List<Clause> clauses = new ArrayList<Clause>();

    Clause objectClause = getObjectLiteralSentinel(sym);
    if (objectClause != null) clauses.add(objectClause);

    Clause valueClause = getPostValueSentinel(sym);
    if (valueClause != null) clauses.add(valueClause);
    
    if (clauses.size() == 0) return null;
    return new Clause(clauses);
  }

  @Override
  public Clause getPreSentinelClause(ExpSymbol sym) {

    List<Clause> clauses = new ArrayList<Clause>();

    Clause constrClause = getConstructorSentinel(sym);
    if (constrClause != null) clauses.add(constrClause);

    Clause valueClause = getPreValueSentinel(sym);
    if (valueClause != null) clauses.add(valueClause);

    if (sym.isPostCall()) {
      Clause returnClause = getReturnSentinel(sym);
      if (returnClause != null) clauses.add(returnClause);
    }
    
    //Clause entryClause = getFunctionEntrySentinel(sym);
    //if (entryClause != null) clauses.add(entryClause);

    if (clauses.size() == 0) return null;
    return new Clause(clauses);
  }

  // Retrieve the actual function being entered.
  protected Clause getFunctionEntrySentinel(ExpSymbol sym) {
    if (!(sym instanceof FunctionEntrySymbol)) return null;
    FunctionEntrySymbol fsym = (FunctionEntrySymbol)sym;

    String pathfunc = "'" + fsym.getFunction().getName() + "'";

    String c = "functionentrysent('" + pathfunc + "','%T')";

    return new Clause(c);
  }

  // Note the values for whatever object properties are set in this
  // object literal.
  protected Clause getObjectLiteralSentinel(ExpSymbol sym) {
    Exp s = sym.getExp();
    Node n = ((JSExp)s).getNode();

    Node lhs = NodeUtil.getAssignLHS(n);
    // %%% extend this to assignments to object properties
    if (!NodeUtil.isName(lhs)) return null;
    String varname = NodeUtil.codeFromNode(lhs, s.getSource());

    Node rhs = NodeUtil.getAssignRHS(n);
    if (!NodeUtil.isObjectLiteral(rhs)) return null;

    List<String> props = new ArrayList<String>();
    for (int i=0; i<rhs.getChildCount(); i++) {
      Node memb = rhs.getChildAtIndex(i);
      if (NodeUtil.isString(memb)) {
        String prop = NodeUtil.unquote(sourceFile.codeFromNode(memb));
        props.add(prop);
      }
    }

    // Empty object literal: {}
    if (props.size() == 0) return null;

    String c = "propvaluesent(%H,%L,'\"" + varname + "\"',[";
    boolean first = true;
    for (String prop : props) {
      if (first) first = false; else c += ",";
      c += "'\"" + XSBInterface.escapeString(prop) + "\"'";
    }
    c += "],'%T')";

    Clause clause = new Clause(c);
    return clause;
  }

  protected Clause getPreValueSentinel(Node n) {

    if (n == null) return null;

    // The internals of control blocks will be processed elsewhere.
    // Just pull out the condition here.
    if (NodeUtil.isControl(n)) {
      n = NodeUtil.getCondition(n);
      if (n == null) return null;
    }

    // There doesn't seemt to be any reason to learn the value of
    // an identifier on the lhs of an assignment.
    if (NodeUtil.isAssign(n) && NodeUtil.isName(n.getFirstChild())) {
      n = NodeUtil.getAssignRHS(n);
    }
    
    // Function nodes have a lot of useless facts that won't help.
    if (NodeUtil.isFunction(n)) {
      return null;
    }

    // Variable declarations are also worthless.
    if (NodeUtil.isVarDeclaration(n)) {
      return null;
    }

    if (NodeUtil.isAccessor(n)) {
      Node objNode = n.getFirstChild(); 
      if (!NodeUtil.isName(objNode)) {
        return null;
      }
      String obj = sourceFile.codeFromNode(objNode);

      Node propNode = n.getChildAtIndex(1);
      if (!NodeUtil.isString(propNode)) {
        return null;
      }
      String prop = NodeUtil.unquote(sourceFile.codeFromNode(propNode));

      String c = "propvaluesent(%H,%L,'\"" + obj + "\"',['\""
        + XSBInterface.escapeString(prop) + "\"'],'%T')";

      return new Clause(c);
    }

    if (NodeUtil.isName(n)) {
      String varname = sourceFile.codeFromNode(n);
      String c = "valuesent(%H,%L,'\"" + varname + "\"','%T')";
      return new Clause(c);
    }

    // Recursively descend into the node's children.
    List<Clause> clauses = new ArrayList<Clause>();
    for (int i=0; i<n.getChildCount(); i++) {
      Node child = n.getChildAtIndex(i);
      Clause c = getPreValueSentinel(child);
      if (c != null) clauses.add(c);
    }
    
    if (clauses.size() == 0) return null;

    return new Clause(clauses);
  }

  // Get the value of a function being invoked or the right-hand side
  // of an assignment.
  protected Clause getPreValueSentinel(ExpSymbol sym) {
    Exp s = sym.getExp();
    Node n = ((JSExp)s).getNode();
    return getPreValueSentinel(n);
  }

  // Get the value of a function being invoked or the right-hand side
  // of an assignment.
  protected Clause getPostValueSentinel(ExpSymbol sym) {
    Exp s = sym.getExp();
    Node n = ((JSExp)s).getNode();
    if (NodeUtil.isExprResult(n)) {
      n = n.getFirstChild();
    }

    Node lhs = NodeUtil.getAssignLHS(n);
    if (lhs == null) return null;

    // Avoid NONE sentinel values.
    Node rhs = NodeUtil.getAssignRHS(n);
    if (NodeUtil.isCall(rhs) && !sym.isPostCall()) {
      return null;
    }

    Clause clause = null;
    if (NodeUtil.isName(lhs)) {

      String varname = NodeUtil.codeFromNode(lhs, s.getSource());
      if (varname.equals("policy")) return null;

      String c = "valuesent(%H,%L,'\"" + varname + "\"','%T')";
      clause = new Clause(c);

    } else if (NodeUtil.isAccessor(lhs)) {
      Node objNode = lhs.getFirstChild(); 
      if (!NodeUtil.isName(objNode)) {
        return null;
      }
      String obj = sourceFile.codeFromNode(objNode);
      Node propNode = lhs.getChildAtIndex(1);
      if (!NodeUtil.isString(propNode)) {
        return null;
      }
      String prop = NodeUtil.unquote(sourceFile.codeFromNode(propNode));

      String c = "propvaluesent(%H,%L,'\"" + obj + "\"',['\""
        + XSBInterface.escapeString(prop) + "\"'],'%T')";

      clause = new Clause(c);
    }

    return clause;
  }

  protected Clause getReturnSentinel(ExpSymbol sym) {
    if (!sym.isPostCall()) return null;

    Exp s = sym.getExp();
    Node n = ((JSExp)s).getNode();

    // We only care about a return value if it's assigned to something.
    Node rhs = NodeUtil.getAssignRHS(n);
    if (rhs == null) return null;

    // This should just be a sanity check.
    if (!NodeUtil.isCall(rhs)) return null;

    String G = "%V" + (++pv);
    String R = "%V" + (++pv);
    String retval = "%V" + (++pv);

    String c = "returnsent(%H,'%T')";

    Clause clause = new Clause(c);

    return clause;
  }
  
  // Perhaps the counterexample is invalid because we don't have some facts
  // about an object's constructor (signifying type).
  // This creates a sentinel that allows us to make such a predicate.
  protected Clause getConstructorSentinel(ExpSymbol sym) {
    Exp s = sym.getExp();
    Node n = ((JSExp)s).getNode();

    // Avoid data that bubbles up from within big blocks of code 
    // (such info will be processed if reached recursively).
    if (NodeUtil.isFunction(n)) return null;
    if (NodeUtil.isControl(n)) return null;

    // Unwrap an EXPR_RESULT node.
    if (NodeUtil.isExprResult(n)) n = n.getFirstChild();

    String objname = null;

    // See if an object property is being assigned to.
    if (objname == null) {
      Node lhs = NodeUtil.getAssignLHS(n);

      // If we have a .-accessor, then we get the constructor of the base
      // and print it.
      if (NodeUtil.isAccessor(lhs)) {
        Node obj = lhs.getFirstChild();
        if (NodeUtil.isName(obj)) {
          // Get the base variable name.
          objname = NodeUtil.codeFromNode(obj);
        }
      }
    }

    // See if the statement is a member invocation.
    if (objname == null && NodeUtil.isCall(n)) {
      Node memberexp = n.getFirstChild();
      if (NodeUtil.isAccessor(memberexp)) {
        Node obj = memberexp.getFirstChild();
        if (NodeUtil.isName(obj)) {
          objname = NodeUtil.codeFromNode(obj);
        }
      }
    }

    if (objname == null) return null;

    // Gets the constructor of the object (searching up through the
    // prototype chain) and passes it to constructorsentinel.
    String c = "constructorsent(%H,%L,'\"" + objname + "\"','%T')";

    Clause ret = new Clause(c);
    return ret;
  }

  // We provide a |hashCode| implementation to assure that when we only
  // reuse a persistent query cache when the semantic model is
  // consistent. 
  // %%% Make this more principled.
  @Override
  public int hashCode() {
    int ret = 0;
    if (functionFacts != null) {
      ret += functionFacts.toString().hashCode();
    }
    if (propertiesOfInterest != null) {
      // %%% Wrong.
      for (Set<String> props : propertiesOfInterest.values()) {
        for (String prop : props) {
          ret += prop.hashCode();
        }
      }
    }
    if (stringsOfInterest != null) {
      // %%% Also wrong.
      for (Set<String> strs : stringsOfInterest.values()) {
        for (String str : strs) {
          ret += str.hashCode();
        }
      }
    }
    return ret;
  }

  @Override
  public boolean equals(Object o) {
    if (o == null) return false;
    if (!(o instanceof JSSemantics)) return false;
    if (this == o) return true;
    JSSemantics other = (JSSemantics)o;
    return this.hashCode() == other.hashCode();
  }
}
