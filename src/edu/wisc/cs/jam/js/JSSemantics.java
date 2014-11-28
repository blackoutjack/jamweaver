
package edu.wisc.cs.jam.js;

import java.io.IOException;
import java.io.File;
import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.LinkedHashMap;

import edu.wisc.cs.jam.Semantics;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.Policy;
import edu.wisc.cs.jam.PolicyPath;
import edu.wisc.cs.jam.PolicyLanguage;
import edu.wisc.cs.jam.Clause;
import edu.wisc.cs.jam.Predicate;
import edu.wisc.cs.jam.PredicateValue;
import edu.wisc.cs.jam.PredicateType;
import edu.wisc.cs.jam.PredicateSymbol;
import edu.wisc.cs.jam.ExpSymbol;
import edu.wisc.cs.jam.DataState;
import edu.wisc.cs.jam.DataTransition;
import edu.wisc.cs.jam.FunctionEntrySymbol;
import edu.wisc.cs.jam.BranchSymbol;
import edu.wisc.cs.jam.CallbackEntrySymbol;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.JAM;

import edu.wisc.cs.jam.xsb.XSBInterface;
import edu.wisc.cs.jam.xsb.XSBSingleInterface;
import edu.wisc.cs.jam.xsb.XSBMultiInterface;

import edu.wisc.cs.jam.js.JSPolicyLanguage.JSPredicateType;

public class JSSemantics implements Semantics {

  // A uniqueness counter for generating sentinels.
  private static int pv = 2121;

  private XSBInterface xsb;
  private SourceManager sm;
  private FunctionFacts functionFacts;
  private JSSyntaxAnalysis sa;

  // Properties that are incorporated into policy predicates. Extra
  // processing is done by the semantics when these are present.
  private Map<PolicyPath,Set<String>> propertiesOfInterest;
  private boolean hasPropertiesOfInterest = false;
  private Map<PolicyPath,Set<String>> stringsOfInterest;
  private boolean hasStringsOfInterest = false;
  private Set<String> namesOfInterest;
  private boolean hasNamesOfInterest = false;

  public JSSemantics(SourceManager src) {
    sm = src;
    sa = new JSSyntaxAnalysis(sm);
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
    FunctionFacts ff = new FunctionFacts(sm);
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
  // Heuristically, it's only helpful to use the prerequisite
  // optimization if there are multiple policy transitions with the
  // same basic type.
  // Furthermore, prerequisites are not used ever if the |syntaxOnly|
  // option is being used.
  public Predicate loadPrerequisite(Policy pol, Predicate pred) {
    if (JAM.Opts.syntaxOnly) return null;
    // No prerequisites yet implemented for non-event predicates.
    if (!pred.isEventPredicate()) return null;

    PolicyLanguage pl = pol.getLanguage();
    PredicateType pt = pl.getPredicateType(pred);

    // Count the number of predicates with the same type. If this is
    // the only one, it's not worth using a prerequisite.
    int ptcnt = 0;
    for (Policy.Edge pe : pol.getAdvancingEdges()) {
      PredicateSymbol ps = pe.getSymbol();
      Predicate pother = ps.getPredicate();
      if (pl.getPredicateType(pother) == pt) {
        ptcnt++;
      }
    }
    // The count should alway include the predicate |pred| itself.
    assert ptcnt >= 1;
    if (ptcnt == 1) return null;

    Predicate prereq = null;
    if (pt == JSPredicateType.INVOKE) {
      prereq = getConditionPredicate("jam#invoke(`x)");
    } else if (pt == JSPredicateType.CONSTRUCT) {
      prereq = getConditionPredicate("jam#construct(`x)");
    } else if (pt == JSPredicateType.READ) {
      prereq = getConditionPredicate("jam#get(`x,`y)");
    } else if (pt == JSPredicateType.WRITE) {
      prereq = getConditionPredicate("jam#set(`x,`y)");
    }
    pred.setPrerequisite(prereq);
    return prereq;
  }

  @Override
  public Predicate getConditionPredicate(String cond) {
    // While some callers convert a node to a string prior to passing
    // it here, the decision was made to have this function take a
    // String. The primary reason was to maintain the exact syntax of
    // a predicate specified in the policy file when weaving that
    // predicate in a runtime check.
    Exp s = sm.expFromCode(cond);
    String ast = s.toQueryAST();

    Clause pos = getConditionTestClause(ast, true);
    Clause posinit = getConditionInitClause(ast, true);

    Clause neg = getConditionTestClause(ast, false);
    Clause neginit = getConditionInitClause(ast, false);

    Predicate ret = new Predicate(cond, pos, posinit, neg, neginit);

    // Save the AST nodes for each of the values for later use.
    ret.getPositive().setStatement(s);
    PredicateValue negpv = ret.getNegative();
    Exp negs = sm.expFromCode(negpv.getCondition());
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
  
  // Return a Boolean object with the answer if it can easily be
  // determined (with "easily" being defined by the implementation)
  // or null if a more heavyweight analysis is needed.
  @Override
  public Boolean maybePossibleTransition(DataTransition trans) {
    // Delegate this task to a syntax analyzer.
    return sa.maybePossibleTransition(trans);
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

    Exp lhs = s.cloneAssignLHS();
    if (lhs == null) return null;

    // %%% extend this to assignments to object properties
    if (!lhs.isName()) return null;
    String varname = lhs.getString();

    Exp rhs = s.cloneAssignRHS();
    if (rhs == null || !rhs.is(JSExp.OBJECTLIT)) return null;

    List<String> props = new ArrayList<String>();
    for (int i=0; i<rhs.getChildCount(); i++) {
      Exp memb = rhs.getChild(i);
      if (memb.isString()) {
        String prop = memb.getString();
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

  protected Clause makeNameValueSentinel(Exp s) {
    assert s.isName();
    String varname = s.getString();
    String c = "valuesent(%H,%L,'\"" + varname + "\"','%T')";
    return new Clause(c);
  }

  protected Clause getPreValueSentinel(Exp s) {

    if (s == null) return null;

    // The internals of control blocks will be processed elsewhere.
    // Just pull out the condition here.
    if (ExpUtil.isControl(s)) {
      s = ExpUtil.getCondition(s);
      if (s == null) return null;
    }

    // There doesn't seem to be any reason to learn the value of
    // an identifier that's about be overwritten as an assignment lhs.
    // For compound assignments, we are interested in the lhs.
    if (s.isAssign() || ExpUtil.isVarInitializer(s)) {
      // %%% Really want to get all the RHS values for an initializer.
      s = s.cloneAssignRHS();
      if (s == null) return null;
    }
    // Non-initializer variable declarations are worthless.
    if (s.isDeclaration()) {
      return null;
    }

    if (s.isAccessor()) {
      Exp objNode = s.getChild(0); 
      if (objNode.isName()) {
        String obj = objNode.getString();

        Exp propNode = s.getChild(1);
        if (propNode.isString()) {
          String prop = propNode.getString();

          String c = "propvaluesent(%H,%L,'\"" + obj + "\"',['\""
            + XSBInterface.escapeString(prop) + "\"'],'%T')";
          return new Clause(c);
        }
        // In this case...
      }
      // ... or this one, the clauses may be generated recursively for
      // the accessor's children.
    }

    if (s.isName()) {
      return makeNameValueSentinel(s);
    }

    // Recursively descend into the node's children.
    List<Clause> clauses = new ArrayList<Clause>();
    for (int i=0; i<s.getChildCount(); i++) {
      Exp child = s.getChild(i);
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
    return getPreValueSentinel(s);
  }

  // Get the value of a function being invoked or the right-hand side
  // of an assignment.
  protected Clause getPostValueSentinel(ExpSymbol sym) {
    Exp s = sym.getExp();
    if (s.is(JSExp.EXPR_RESULT)) {
      s = s.getFirstChild();
    }

    // For non-initializer VAR nodes, it should be clear with a sentinel
    // that the post-value is |undefined|.
    if (s.is(JSExp.VAR) && !ExpUtil.isVarInitializer(s))
      return null;

    Exp lhs = s.cloneAssignLHS();
    if (lhs == null) return null;

    // Avoid NONE sentinel values.
    Exp rhs = s.cloneAssignRHS();
    if (rhs != null && rhs.isCall() && !sym.isPostCall()) {
      return null;
    }

    Clause clause = null;
    if (lhs.isName()) {
      clause = makeNameValueSentinel(lhs);
    } else if (ExpUtil.isAccessor(lhs)) {
      Exp objNode = lhs.getFirstChild(); 
      if (!objNode.isName()) {
        return null;
      }
      String obj = objNode.getString();
      Exp propNode = lhs.getChild(1);
      if (!propNode.isString()) {
        return null;
      }
      String prop = propNode.getString();

      String c = "propvaluesent(%H,%L,'\"" + obj + "\"',['\""
        + XSBInterface.escapeString(prop) + "\"'],'%T')";

      clause = new Clause(c);
    }

    return clause;
  }

  protected Clause getReturnSentinel(ExpSymbol sym) {
    if (!sym.isPostCall()) return null;

    Exp s = sym.getExp();

    // We only care about a return value if it's assigned to something.
    Exp rhs = s.cloneAssignRHS();
    if (rhs == null) return null;

    // This should just be a sanity check.
    if (!rhs.isCall()) return null;

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

    // Avoid data that bubbles up from within big blocks of code 
    // (such info will be processed if reached recursively).
    if (s.isFunction()) return null;
    if (ExpUtil.isControl(s)) return null;

    // Unwrap an EXPR_RESULT node.
    if (s.is(JSExp.EXPR_RESULT)) s = s.getFirstChild();

    String objname = null;

    // See if an object property is being assigned to.
    if (objname == null) {
      Exp lhs = s.cloneAssignLHS();

      // If we have a .-accessor, then we get the constructor of the base
      // and print it.
      if (ExpUtil.isAccessor(lhs)) {
        Exp obj = lhs.getFirstChild();
        if (obj.isName()) {
          // Get the base variable name.
          objname = obj.toCode();
        }
      }
    }

    // See if the statement is a member invocation.
    if (objname == null && s.isCall()) {
      Exp memberexp = s.getFirstChild();
      if (ExpUtil.isAccessor(memberexp)) {
        Exp obj = memberexp.getFirstChild();
        if (obj.isName()) {
          objname = obj.toCode();
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
