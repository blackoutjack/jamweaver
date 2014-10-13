
package edu.wisc.cs.jam.tx;

import java.util.Map;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.util.LinkedHashSet;

import edu.wisc.cs.automaton.State;

import com.google.javascript.rhino.Node;
import com.google.javascript.jscomp.Compiler;
import com.google.javascript.jscomp.NodeTraversal;
import com.google.javascript.jscomp.NodeTraversal.Callback;

import edu.wisc.cs.jam.JAM;
import edu.wisc.cs.jam.CheckManager;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.Semantics;
import edu.wisc.cs.jam.Policy;
import edu.wisc.cs.jam.PredicateType;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.RuntimeCheck;
import edu.wisc.cs.jam.ExpSymbol;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.Predicate;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.Transform;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.StringUtil;

import edu.wisc.cs.jam.js.JSExp;

// This class coordinates the creation and composition of all the
// objects defined in the edu.wisc.cs.jam.tx package. It also
// synchronizes the application and removal of transactional
// instrumentation from the the SourceManager.
public class TxManager implements CheckManager, Callback {
  // Various aspects of the analysis that we may need a handle for.
  private SourceManager sm;
  private Policy policy;

  // Information about checks that were present in the initial
  // source code provided to the analysis.
  private int originalCheckCount;
  private Map<Exp,List<RuntimeCheck>> originalChecks; 
  // All checks (including those that were in the original
  // source code) that are applied to the analyzed program.
  private List<RuntimeCheck> activeChecks;

  // Information about transactions that were present in the initial
  // source code provided to the analysis.
  private Map<Exp,Transaction> originalTransactions;
  private int originalTransactionCount;

  // All transactions (including those that were in the original
  // source code) that are applied to the analyzed program.
  private Map<Exp,Transaction> activeTransactions;

  // Data structures used to coordinate and associate various objects
  // in the edu.wisc.cs.jam.tx package.
  private IntrospectorMap introspectorMap;
  private Map<Predicate,Evaluator> evaluatorMap;
  private Map<Policy.Edge,PolicyTransition> transitionMap;

  protected Map<String,Introspector> introspectorNameMap;
  private static int NEXT_INTROSPECTOR_ID = 0;

  // Construct a TxManager for the given JAM analysis.
  public TxManager(SourceManager src, Policy pol) {
    sm = src;
    policy = pol;

    activeChecks = new ArrayList<RuntimeCheck>();
    originalChecks = new HashMap<Exp,List<RuntimeCheck>>();

    // Use LinkedHashMap for consistent Introspector ordering.
    activeTransactions = new LinkedHashMap<Exp,Transaction>();
    originalTransactions = new HashMap<Exp,Transaction>();

    // Use LinkedHashMap for consistent ordering between runs.
    evaluatorMap = new LinkedHashMap<Predicate,Evaluator>();
    transitionMap = new HashMap<Policy.Edge,PolicyTransition>();
    introspectorNameMap = new HashMap<String,Introspector>();
    introspectorMap = new IntrospectorMap(policy);
  }

  @Override
  public void loadExistingChecks() {
    Node root = sm.getRootNode();
    Compiler comp = sm.getCompiler();
    NodeTraversal.traverse(comp, root, this);
  }

  protected List<RuntimeCheck> getOriginalChecks(Exp s) {
    List<RuntimeCheck> ret = originalChecks.get(s);
    if (ret != null) {
      ret = new ArrayList<RuntimeCheck>(ret);
    }
    return ret;
  }

  // Get a transaction that was applied to this statement already in the
  // original source code.
  protected Transaction getOriginalTransaction(Exp e) {
    Transaction orig = null;
    // Climb the AST to see if any ancestor is a transaction that was
    // in the program prior to the start of JAM.
    while (e != null && orig == null) {
      orig = originalTransactions.get(e);
      e = e.getParent();
    }
    return orig;
  }

  public List<Transaction> getActiveTransactions() {
    return new ArrayList<Transaction>(activeTransactions.values());
  }

  // Number of transactions that have been woven by this analysis
  public int getTransactionCount() {
    return activeTransactions.size() - originalTransactionCount;
  }

  protected synchronized void enableTransaction(Exp n, Transaction tx) {
    if (JAM.Opts.debug) FileUtil.writeToFile(tx + "\n", "tx-" + getTransactionCount(), true);

    // There may be a transaction currently enclosing the statement. If
    // so, we remove it first.
    Transaction oldTx = activeTransactions.get(n);
    if (oldTx != null) {
      oldTx.unapply();
      activeTransactions.remove(n);
    }

    tx.apply();
    activeTransactions.put(n, tx);
  }

  protected synchronized void disableTransaction(Exp n, Transaction tx) {
    assert !tx.isLocked() : "Attempting to remove a locked check:\n" + tx;
    tx.unapply();
    activeTransactions.remove(n);
  }

  @Override
  public RuntimeCheck getCheck(ExpSymbol sym, Policy.Edge e) {
    List<RuntimeCheck> checks = sym.getChecks(); 
    for (RuntimeCheck rc : checks) {
      if (rc.getPolicyEdge() == e) {
        return rc;
      }
    }

    Exp s = sym.getExp();
      
    RuntimeCheck ret = new TransactionCheck(sm, s, e);
    sym.addCheck(ret);
    return ret;
  }

  // %%% Factor this out somewhere.
  protected boolean isPriorInPath(State a, State b) {
    if (a == null) return false;
    if (a.equals(b)) return true;

    for (Policy.Edge e : policy.getInEdges(b)) {
      // Skip self-edges.
      if (e.getSource().equals(e.getDestination()))
        continue;

      if (isPriorInPath(a, e.getSource())) {
        return true;
      }
    }
    return false;
  }

  // Ensure that edges are inserted in reverse order with respect to the
  // automaton (given that policy automata have no cycles).
  // This modifies |edges| in place.
  protected void insertInReverseOrder(List<Policy.Edge> edges, Policy.Edge edge) {
    // Don't add the same edge twice.
    if (!edges.contains(edge)) {
      int idx = edges.size();
      for (int i=0; i<edges.size(); i++) {
        Policy.Edge e = edges.get(i);
        State ps = edge.getSource();
        State ds = e.getDestination();
        if (isPriorInPath(ds, ps)) {
          idx = i;
          break;
        }
      }
      edges.add(idx, edge);
    }
  }

  @Override
  public void addCheck(RuntimeCheck c) {
    if (JAM.Opts.debug) FileUtil.writeToFile(c + "\n", "tx-" + getCheckCount(), true);

    if (!activeChecks.contains(c))
      activeChecks.add(c);

    Exp loc = c.getLocation();
    Policy.Edge edge = c.getPolicyEdge();

    // There may be a transaction currently enclosing the statement. If
    // so, we just alter the introspector.
    Transaction tx = activeTransactions.get(loc);
    if (tx != null) {

      List<Policy.Edge> edges = tx.getIntrospector().getPolicyEdges();
      insertInReverseOrder(edges, edge);

      Introspector ispect = introspectorMap.get(edges);
      // This applies the change to the source.
      tx.setIntrospector(ispect);
    } else {
      List<Policy.Edge> edges = new ArrayList<Policy.Edge>();
      edges.add(edge);
      Introspector ispect = introspectorMap.get(edges);
      tx = new Transaction(sm, ispect, ((JSExp)loc).getNode());
      tx.apply();
      activeTransactions.put(loc, tx);
    }

    // This marks the check applied and updates the source.
    c.apply();
  }

  @Override
  public void removeCheck(RuntimeCheck c) {
    assert !c.isLocked() : "Attempting to remove a locked check:\n" + c;

    Exp loc = c.getLocation();
    Policy.Edge edge = c.getPolicyEdge();

    // Get the transaction currently enclosing the statement. If this
    // check is the only one that the transaction evaluates, remove the
    // transaction. Otherwise, alter the introspector.
    Transaction tx = activeTransactions.get(loc);
    if (tx != null) {
      // %%% Should this be an assertion rather than a condition?

      List<Policy.Edge> edges = tx.getIntrospector().getPolicyEdges();
      edges.remove(edge);
      if (edges.size() == 0) {
        tx.unapply();
        activeTransactions.remove(loc);
      } else {
        Introspector ispect = introspectorMap.get(edges);
        // This applies the change to the source.
        tx.setIntrospector(ispect);
      }
    }

    c.unapply();
    activeChecks.remove(c);
  }

  @Override
  public int getCheckCount() {
    return activeChecks.size();
  }

  @Override
  public List<RuntimeCheck> getChecks() {
    return new ArrayList<RuntimeCheck>(activeChecks);
  }

  @Override
  public void initChecks(ExpSymbol sym) {
    Exp s = sym.getExp();
    List<RuntimeCheck> cs = getOriginalChecks(s);
    if (cs == null) return;
    for (RuntimeCheck rc : cs) {
      sym.addCheck(rc);      
    }
  }

  @Override
  public boolean isRuntimeCheck(Exp s) {
    // %%% Should really examine the introspector to see that it is a
    // %%% policy-enforcing transaction.
    return s.isTransaction();
  }

  @Override
  public boolean shouldTraverse(NodeTraversal t, Node n, Node parent) {
    return true;
  }

  // Traverse the entire AST and make note of a transactions that
  // existed prior to the current analysis.
  @Override
  public void visit(NodeTraversal t, Node n, Node parent) {
    Exp s = JSExp.create(sm, n);
    // We're only interested in statements representing pre-existing
    // instrumentation.
    if (!s.isTransaction()) return;

    // The first child of a transaction statement is the introspector
    // expression. If JAM placed this transaction in a previous run, the
    // expression will be an accessor that points directly to a function
    // with a name that indicates which edge specifications it checks,
    // so that we can generate an Introspector object from the name.
    // The expression will be like |JAM.policy.pXYZ|
    // where XYZ is a hash of the policy edge specifications that are
    // checked by the introspector.
    Introspector introspect = null;
    Exp ispect = s.getFirstChild();
    if (ispect.isAccessor()) {
      Exp obj = ispect.getFirstChild();
      String objstr = obj.toCode();
      String hdlrbank = JAMConfig.TRANSACTION_LIBRARY + "." + JAMConfig.INTROSPECTOR_LIST;
      if (objstr.equals(hdlrbank)) {
        Exp prop = ispect.getChild(1);
        if (prop.isString()) {
          String propstr = prop.getString();
          if (propstr.equals(JAMConfig.COMPREHENSIVE_INTROSPECTOR)) {
            introspect = introspectorMap.getComprehensive();
          } else if (propstr.startsWith(JAMConfig.INTROSPECTOR_PREFIX)) {
            String hash = propstr.substring(JAMConfig.INTROSPECTOR_PREFIX.length());
            List<Policy.Edge> edges = policy.getEdgesByHash(hash);
            if (edges != null) {
              // Found a matching set of edges. Create or retrieve
              // the introspector that evaluates this set.
              introspect = introspectorMap.get(edges);
              // %%% Make sure they're in the correct order!
            }
          }
        }
      }
    }
    if (introspect == null) return;

    // The last (second) child of the transaction statement is the block
    // that it surrounds. Collect all of the statements in the block
    // in the |statements| list.
    Exp block = s.getLastChild();
    List<Exp> children = block.getChildren();
    List<Node> childNodes = new ArrayList<Node>();
    for (Exp c : children) {
      childNodes.add(((JSExp)c).getNode());
    }

    Transaction tx = new Transaction(sm, introspect, childNodes);
    tx.setOriginal();

    // Create some number of |TransactionCheck|s here.
    for (Exp stmt : children) {
      List<RuntimeCheck> origs = originalChecks.get(stmt);
      if (origs == null) {
        origs = new ArrayList<RuntimeCheck>();
        originalChecks.put(stmt, origs);
      }
      for (Policy.Edge pe : introspect.getPolicyEdges()) {
        TransactionCheck tc = new TransactionCheck(sm, stmt, pe);
        tc.setOriginal();
        activeChecks.add(tc);
        origs.add(tc);
        originalCheckCount++;
      }
      originalTransactions.put(stmt, tx);
      activeTransactions.put(stmt, tx);
    }
    originalTransactionCount++;

    Dbg.out("Found existing transaction: " + tx, 3);
  }

  // Append boilerplate beginning of the policy definition.
  protected void appendPolicyOpening(StringBuilder sb) {
    sb.append("var policy = (function() {\n");
    sb.append("\n");
    int stateCnt = policy.getStateCount(); 
    // If only an initial and final state, no tracking is needed.
    if (stateCnt > 2) {
      sb.append("  // Policy states previously visited\n");
      // Add |true| at the zero index to avoid subtracting 1 each time.
      sb.append("  var states = [true");
      for (int i=2; i<stateCnt; i++) {
        sb.append(",false");
      }
      sb.append("];\n");
    }
    sb.append("\n");
  }

  protected void appendNativeReferences(StringBuilder sb, Map<String,String> refs) {
    sb.append("  // Close over native objects for reliable references.\n");
    for (String obj : refs.keySet()) {
      String priv = refs.get(obj);
      sb.append("  var ");
      sb.append(priv);
      sb.append(" = ");
      sb.append(obj);
      sb.append(";\n");
    }
    sb.append("\n");
  }

  protected void appendPolicyObjectOpening(StringBuilder sb) {
    sb.append("  // Return the policy object itself.\n");
    sb.append("  return {\n");
  }

  // Output the code for the introspector functions.
  protected void appendIntrospectorMap(StringBuilder sb, Set<Introspector> hdlrs) {
    if (hdlrs != null) {
      for (Introspector h : hdlrs) {
        sb.append("    ");
        sb.append(h.getName());
        sb.append(": ");
        sb.append(h.getName());
        sb.append(",\n");
      }
    }

    // Always add the comprehensive introspector.
    Introspector processAll = introspectorMap.getComprehensive();
    sb.append("    ");
    sb.append(processAll.getName());
    sb.append(": ");
    sb.append(processAll.getName());
    sb.append("\n");
  }

  protected void appendWovenFlag(StringBuilder sb, boolean woven) {
    sb.append(", woven: ");
    if (woven) {
      sb.append("true");
    } else {
      sb.append("false");
    }
    sb.append("\n");
  }
  
  protected void appendPolicyClosing(StringBuilder sb) {
    sb.append("  };\n");
    sb.append("}());\n");
  }

  protected void appendComprehensiveIntrospector(StringBuilder sb) {
    Introspector processAll = introspectorMap.getComprehensive();
    sb.append(processAll.toString());
  }

  protected void appendIntrospectors(StringBuilder sb, Set<Introspector> hdlrs) {
    for (Introspector ispect : hdlrs) {
      sb.append(ispect.toString());
      sb.append("\n");
    }
  }

  // Output the policy object with only the comprehensive introspector.
  @Override
  public Exp getBasePolicyCode() {
    StringBuilder sb = new StringBuilder();

    appendPolicyOpening(sb);
    
    // Collect the native objects needed for evaluation. This is an
    // ordered map since some natives may be dependent on others.
    Map<String,String> nativeRefs = new LinkedHashMap<String,String>();
    for (Evaluator ev : evaluatorMap.values()) {
      ev.toString(); // %%% Hack to load natives.
      // Create the evaluators.
      nativeRefs.putAll(ev.getNativeReferences());
    }

    appendNativeReferences(sb, nativeRefs);
    // Just use the comprehensive introspector.
    appendComprehensiveIntrospector(sb);
    appendPolicyObjectOpening(sb);
    appendIntrospectorMap(sb, null);
    appendPolicyClosing(sb);

    Node node = sm.nodeFromCode(sb.toString());
    return JSExp.create(sm, node);
  }

  // Output the policy object, complete with all requisite introspectors
  // and evaluators, in JavaScript.
  @Override
  public Exp getSpecializedPolicyCode() {
    StringBuilder sb = new StringBuilder();

    appendPolicyOpening(sb);
    
    // Collect the native objects needed for evaluation. This is an
    // ordered map since some natives may be dependent on others.
    Map<String,String> nativeRefs = new LinkedHashMap<String,String>();
    for (Evaluator ev : evaluatorMap.values()) {
      ev.toString(); // %%% Hack to load natives.
      // Create the evaluators.
      nativeRefs.putAll(ev.getNativeReferences());
    }

    appendNativeReferences(sb, nativeRefs);
    appendComprehensiveIntrospector(sb);

    // Get the introspectors that are used in transactions.
    Set<Introspector> hdlrs = new LinkedHashSet<Introspector>();
    for (Transaction tx : activeTransactions.values()) {
      hdlrs.add(tx.getIntrospector());
    }
    appendIntrospectors(sb, hdlrs);

    appendPolicyObjectOpening(sb);
    appendIntrospectorMap(sb, hdlrs);
    appendWovenFlag(sb, true);
    appendPolicyClosing(sb);

    Node node = sm.nodeFromCode(sb.toString());
    return JSExp.create(sm, node);
  }

  public Set<PredicateType> getPredicateTypes(String ispectId) {
    Introspector i = null;
    if (introspectorNameMap.containsKey(ispectId)) {
      i = introspectorNameMap.get(ispectId);
    } else {
      String hash = ispectId.substring(JAMConfig.INTROSPECTOR_PREFIX.length());
      if (hash.equals("Full")) {
        i = introspectorMap.getComprehensive();
      } else {
        List<Policy.Edge> edges = policy.getEdgesByHash(hash);
        if (edges == null || edges.size() == 0) {
          Dbg.warn("No edges for hash: " + hash);
          return null;
        }
        i = introspectorMap.get(edges);
      }
    }
    if (i == null) {
      Dbg.warn("No introspector found for id: " + ispectId);
      return null;
    }
    return i.getPredicateTypes();
  }

  // This class effectively maps a set of policy edges to the
  // introspector which evaluates each of the predicates, and only those
  // predicates. The primary method is |get|, which will create a new
  // introspector to return if there is not one already.
  class IntrospectorMap {
    
    // Use LinkedHashSet keys instead of List for efficiency only.
    Map<LinkedHashSet<Policy.Edge>,Introspector> introspectors;
    Introspector comprehensive;

    public IntrospectorMap(Policy pol) {
      introspectors = new HashMap<LinkedHashSet<Policy.Edge>,Introspector>();
      // Generate the comprehensive introspector. Ensure that policy
      // edges are evaluated in reverse path order.
      List<Policy.Edge> polEdges = pol.getAdvancingEdges();
      List<Policy.Edge> compEdges = new ArrayList<Policy.Edge>();
      for (Policy.Edge pe : polEdges) {
        insertInReverseOrder(compEdges, pe);
      }
      comprehensive = get(compEdges);
      comprehensive.setComprehensive(true);
      comprehensive.setName(JAMConfig.COMPREHENSIVE_INTROSPECTOR);
      introspectorNameMap.put(JAMConfig.COMPREHENSIVE_INTROSPECTOR, comprehensive);
      // Remove this from the general introspectors list, so another
      // introspector checking all predicates can be generated use
      // with woven transactions.
      introspectors.clear();
    }

    public Introspector getComprehensive() {
      return comprehensive;
    }

    // Return a list of all the introspectors in use.
    public List<Introspector> getIntrospectors() {
      ArrayList<Introspector> ret = new ArrayList<Introspector>(introspectors.values());
      ret.add(getComprehensive());
      return ret;
    }
    
    // This takes a |List| since the order of the policy edges
    // should be maintained.
    public Introspector get(List<Policy.Edge> edges) {
      Introspector match = null;

      assert edges.size() != 0 : "Attempting to generate an introspector for zero policy edges";

      // Examine each edge set that has been collected so far to see if
      // it has the same length and contains all the same predicates.
      // Iff so we have a match.
      for (LinkedHashSet<Policy.Edge> keys : introspectors.keySet()) {
        if (edges.size() != keys.size()) continue;
        if (keys.containsAll(edges)) {
          match = introspectors.get(keys);
          break;
        }
      }

      if (match == null) {
        // Generate a new introspector for this predicate combination.
        List<PolicyTransition> transitions = new ArrayList<PolicyTransition>();
        for (Policy.Edge e : edges) {
          PolicyTransition trans = transitionMap.get(e);
          if (trans == null) {
            // Generate a PolicyTransition (the JavaScript object
            // representating a Policy.Edge) for the edge, since it
            // doesn't exist yet. PolicyTransition objects and 
            // Policy.Edge objects are in 1:1 correspondence.
            Predicate p = e.getSymbol().getPredicate();
            Evaluator ev = evaluatorMap.get(p);
            if (ev == null) {
              // Generate an evaluator for the predicate at hand.
              // Predicates and evaluators are in 1:1 correspondence.
              ev = new Evaluator(policy.getLanguage(), p);
              evaluatorMap.put(p, ev);
            }
            trans = new PolicyTransition(e, ev, transitionMap.size());
          }
          transitionMap.put(e, trans);
          transitions.add(trans);
        }
        
        match = new Introspector(transitions);
        // Name the introspector based on the hashes of the policy edges.
        StringBuilder sb = new StringBuilder();
        sb.append(JAMConfig.INTROSPECTOR_PREFIX);
        for (Policy.Edge pe : match.getPolicyEdges()) {
          sb.append(policy.getHash(pe));
        }
        match.setHash(sb.toString());
        // Use a short name for now.
        // %%% There needs to be a retrievable mapping from source code.
        String iname = JAMConfig.INTROSPECTOR_PREFIX + NEXT_INTROSPECTOR_ID;
        match.setName(iname);
        introspectorNameMap.put(iname, match);
        NEXT_INTROSPECTOR_ID++;

        LinkedHashSet<Policy.Edge> keys = new LinkedHashSet<Policy.Edge>(edges);
        introspectors.put(keys, match);
      }

      return match;
    }
  }
}

