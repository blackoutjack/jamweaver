
package edu.wisc.cs.jam.js;

import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Set;
import java.util.HashSet;
import java.util.Collection;
import java.util.Arrays;
import java.util.Iterator;

import com.google.javascript.jscomp.NodeTraversal;
import com.google.javascript.jscomp.NodeTraversal.Callback;
import com.google.javascript.jscomp.NodeTraversal.AbstractScopedCallback;
import com.google.javascript.rhino.Node;
import com.google.javascript.rhino.Token;
import com.google.javascript.jscomp.CallGraph;
import com.google.javascript.jscomp.CallGraph.Function;
import com.google.javascript.jscomp.CallGraph.Callsite;
import com.google.javascript.jscomp.Compiler;
import com.google.javascript.jscomp.Scope;
import com.google.javascript.jscomp.Scope.Var;

import edu.wisc.cs.automaton.Automaton;
import edu.wisc.cs.automaton.Automaton.Edge;
import edu.wisc.cs.automaton.State;

import edu.wisc.cs.jam.ControlAutomaton;
import edu.wisc.cs.jam.CheckManager;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.JAM;

// Reuse ExpressionFlattener to maintain sequential variable naming.
public class JSCollapseTransform extends JSTransform {
    
  protected SourceManager sm;
  protected Set<String> temporaries;

  private int collapseCnt = 0;
  
  public JSCollapseTransform(Set<String> temps) {
    temporaries = temps;
  }

  @Override
  public void run(SourceManager src) {
    sm = src;
    Node root = sm.getRootNode();
    Compiler comp = sm.getCompiler();

    // This should be done after the JSCallTransform.
    Collector collect = new Collector();
    NodeTraversal.traverse(comp, root, collect);

    boolean doCollapse = true;
    int collCnt = 0;
    while (doCollapse) {
      Dbg.out("Starting collapse pass " + collCnt, 3);
      Collapser coll = new Collapser(collect.getInfo());
      NodeTraversal.traverse(comp, root, coll);
      doCollapse = coll.madeChange();
      collCnt++;
    }

    Dbg.out("Temporary variables collapsed: " + collapseCnt, 1);
    FileUtil.writeToMain("temporary-variables-collapsed:" + collapseCnt + "\n", JAMConfig.INFO_FILENAME, true);
  }

  public class ScopeInfo {
    Map<String,Node> tmps;
    protected Map<String,Set<Node>> uses;
    protected Set<Node> toRemove;

    public ScopeInfo(Scope s) {
      tmps = new HashMap<String,Node>();
      toRemove = new HashSet<Node>();
      uses = new HashMap<String,Set<Node>>();

      Iterator<Var> vit = s.getVars();
      while (vit.hasNext()) {
        Var v = vit.next();
        Node n = v.getNode();
        if (n != null) {
          String name = n.getString();
          Node par = n.getParent();
          assert par.isVar() || par.isFunction() || par.isParamList()
              || par.isCatch() : "Parent of declared name is not of expected type: " + par;
          if (temporaries.contains(name)) {
            assert n.getParent().isVar() : "Parent of temporary " + name + " is not a declaration: " + n.getParent();
            tmps.put(name, n);
          }
        }
      }
    }

    public Set<Node> getUses(String name) {
      return uses.get(name);
    }

    public void addUse(Node n) {
      assert n.isName();
      String name = n.getString();
      Set<Node> us = uses.get(name);
      if (us == null) {
        us = new HashSet<Node>();
        uses.put(name, us);
      }
      assert !us.contains(n);
      us.add(n);
    }

    public Set<Node> getDeclarationsToRemove() {
      return toRemove;
    }

    public void setToRemove(Node decl) {
      toRemove.add(decl);
    }

    public void removeDeclarations() {
      for (Node decl : toRemove) {
        Node varNode = decl.getParent();
        assert varNode.isVar();
        assert ExpUtil.isBlock(varNode.getParent()) : "Declaration parent isn't a block: " + varNode.getParent();
        varNode.getParent().removeChild(varNode);
      }
      toRemove.clear(); 
    }

    public Node getDeclaration(String name) {
      return tmps.get(name);
    }

    public boolean declaresTemp(String name) {
      return tmps.containsKey(name);
    }
  }

  public class Collector extends AbstractScopedCallback {

    // Map from a scope's root node because Scope objects are
    // regenerated with each Callback run.
    protected Map<Node,ScopeInfo> tmpVars;

    public Collector() {
      tmpVars = new HashMap<Node,ScopeInfo>();
    }

    public Map<Node,ScopeInfo> getInfo() {
      return tmpVars;
    }

    @Override
    public void enterScope(NodeTraversal t) {
      Scope s = t.getScope();
      Node root = s.getRootNode();

      ScopeInfo si = tmpVars.get(root);
      if (si == null) {
        si = new ScopeInfo(s); 
        tmpVars.put(root, si);
      }
    }

    @Override
    public void exitScope(NodeTraversal t) { }

    @Override
    public void visit(NodeTraversal t, Node n, Node parent) {
      if (n.isName() && temporaries.contains(n.getString())) {
        Scope s = t.getScope();
        Node root = s.getRootNode();
        ScopeInfo si = tmpVars.get(root);
        if (parent.isVar()) {
          Node decl = si.getDeclaration(n.getString());
          if (decl != n) {
            // There is a duplicate declaration. This can happen with
            // the direct eval transformation. Mark it as a use.
            si.addUse(n); 
          }
          return;
        }
        assert !parent.isFunction() && !parent.isParamList() && !parent.isCatch();
        assert si != null : "Null scope info: " + root;
        si.addUse(n); 
      }
    }
  }

  public class Collapser extends AbstractScopedCallback {

    protected Map<Node,ScopeInfo> tmpVars;
    private boolean changed;
  
    public Collapser(Map<Node,ScopeInfo> info) {
      tmpVars = info;
      changed = false;
    }

    public boolean madeChange() {
      return changed;
    }

    @Override
    public void enterScope(NodeTraversal t) { }

    @Override
    public void exitScope(NodeTraversal t) {
      // Remove declarations for vars that are fully collapsed.
      Node root = t.getScope().getRootNode();
      ScopeInfo si = tmpVars.get(root);
      assert si != null : "Null scope info: " + root;
      si.removeDeclarations();
    }

    @Override
    public void visit(NodeTraversal t, Node n, Node parent) {
      if (n.isName()) {
        Node root = t.getScope().getRootNode();
        ScopeInfo si = tmpVars.get(root);
        assert si != null : "Null scope info: " + root;
        if (!parent.isVar() && si.declaresTemp(n.getString())) {
          // Possibly replace this name with the assigned value.
          Node decl = si.getDeclaration(n.getString());
          if (collapse(t, decl, n, parent)) {
            // Don't remove it yet, since there may be multiple uses.
            si.setToRemove(decl);
            changed = true;
          }
        }
      }
    }

    protected boolean collapse(NodeTraversal t, Node decl, Node n, Node parent) {
      // Don't pull expressions into or out of a transaction.
      if (ExpUtil.isWithinTransaction(n) != null)
        return false;
      if (ExpUtil.isWithinTransaction(decl) != null)
        return false;

      // To be safe don't collapse references across other statements.
      // This avoids the case in which the reference may be
      // modified on the RHS of an assignment.
      Node stmt = ExpUtil.getEnclosingStatement(n);
      Node stmtParent = stmt.getParent();
      if (stmtParent.getChildBefore(stmt) != decl.getParent()) {
        //Dbg.dbg("This one: " + n + " / " + sm.codeFromNode(stmt));
        return false;
      }

      // Get the rhs of the declaration.
      Node varNode = decl.getParent();
      assert ExpUtil.isVarInitializer(varNode) : "Declaration is not a var initializer: " + varNode;
      Node rhs = ExpUtil.getAssignRHS(varNode);
      assert rhs != null : "Null RHS for node: " + varNode;
      // Can't assert equality |n == ExpUtil.getAssignLHS(varNode)|
      // because that function clones the LHS. |getAssignRHS| doesn't.

      // Don't collapse if there are multiple references to the name. 
      Node root = t.getScope().getRootNode();
      ScopeInfo si = tmpVars.get(root);
      assert si != null : "Null scope info: " + root;
      Set<Node> nuses = si.getUses(n.getString());
      if (nuses.size() > 1) {
        //Dbg.warn("Not collapsing temporary: " + n);
        return false;
      }

      // Replace n with the rhs value.
      Node replacement = rhs.cloneTree();
      parent.replaceChild(n, replacement);
      
      collapseCnt++;
      sm.reportCodeChange();
      return true;
    }
  }
}
