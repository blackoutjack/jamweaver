
package edu.wisc.cs.jam.js;

import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Set;
import java.util.HashSet;
import java.util.Collection;
import java.util.Arrays;
import java.util.Iterator;

import edu.wisc.cs.automaton.Automaton;
import edu.wisc.cs.automaton.Automaton.Edge;
import edu.wisc.cs.automaton.State;

import edu.wisc.cs.jam.Scope;
import edu.wisc.cs.jam.Scope.Var;
import edu.wisc.cs.jam.Traversal;
import edu.wisc.cs.jam.Traversal.AbstractScopedTraverser;
import edu.wisc.cs.jam.ControlAutomaton;
import edu.wisc.cs.jam.CheckManager;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.Exp;
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
    Exp root = sm.getRoot();

    // This should be done after the JSCallTransform.
    Collector collect = new Collector();
    sm.traverse(root, collect);
    Map<Exp,ScopeInfo> info = collect.getInfo();

    boolean doCollapse = true;
    int collCnt = 0;
    while (doCollapse) {
      Dbg.out("Starting collapse pass " + collCnt, 3);
      Collapser coll = new Collapser(info);
      sm.traverse(root, coll);
      doCollapse = coll.madeChange();
      collCnt++;
    }

    Dbg.out("Temporary variables collapsed: " + collapseCnt, 1);
    FileUtil.writeToMain("temporary-variables-collapsed:" + collapseCnt + "\n", JAMConfig.INFO_FILENAME, true);
  }

  public class ScopeInfo {
    Map<String,Exp> tmps;
    protected Map<String,Set<Exp>> uses;
    protected Set<Exp> toRemove;

    public ScopeInfo(Scope s) {
      tmps = new HashMap<String,Exp>();
      toRemove = new HashSet<Exp>();
      uses = new HashMap<String,Set<Exp>>();

      Iterator<Var> vit = s.getVars();
      while (vit.hasNext()) {
        Var v = vit.next();
        Exp n = v.getExp();
        if (n != null) {
          String name = n.getString();
          Exp par = n.getParent();
          assert par.is(JSExp.VAR) || par.isFunction() || par.is(JSExp.PARAM_LIST)
              || par.is(JSExp.CATCH) : "Parent of declared name is not of expected type: " + par;
          if (temporaries.contains(name)) {
            assert n.getParent().is(JSExp.VAR) : "Parent of temporary " + name + " is not a declaration: " + n.getParent();
            tmps.put(name, n);
          }
        }
      }
    }

    public Set<Exp> getUses(String name) {
      return uses.get(name);
    }

    public void addUse(Exp n) {
      assert n.isName();
      String name = n.getString();
      Set<Exp> us = uses.get(name);
      if (us == null) {
        us = new HashSet<Exp>();
        uses.put(name, us);
      }
      assert !us.contains(n);
      us.add(n);
    }

    public boolean hasDeclarationsToRemove() {
      return toRemove.size() > 0;
    }

    public Set<Exp> getDeclarationsToRemove() {
      return toRemove;
    }

    public void setToRemove(Exp decl) {
      toRemove.add(decl);
    }

    public void removeDeclarations() {
      for (Exp decl : toRemove) {
        Exp varNode = decl.getParent();
        assert varNode.is(JSExp.VAR);
        assert ExpUtil.isStatementBlock(varNode.getParent()) : "Declaration parent isn't a block: " + varNode.getParent();
        varNode.getParent().removeChild(varNode);
      }
      toRemove.clear(); 
    }

    public Exp getDeclaration(String name) {
      return tmps.get(name);
    }

    public boolean declaresTemp(String name) {
      return tmps.containsKey(name);
    }
  }

  public class Collector extends AbstractScopedTraverser {

    // Map from a scope's root node because Scope objects are
    // regenerated with each Callback run.
    protected Map<Exp,ScopeInfo> tmpVars;

    public Collector() {
      tmpVars = new HashMap<Exp,ScopeInfo>();
    }

    public Map<Exp,ScopeInfo> getInfo() {
      return tmpVars;
    }

    @Override
    public void enterScope(Traversal t) {
      Scope s = t.getScope();
      Exp root = s.getRootExp();

      ScopeInfo si = tmpVars.get(root);
      if (si == null) {
        si = new ScopeInfo(s); 
        tmpVars.put(root, si);
      }
    }

    @Override
    public void exitScope(Traversal t) { }

    @Override
    public void visit(Traversal t, Exp e, Exp parent) {
      if (e.isName() && temporaries.contains(e.getString())) {
        Exp root = t.getScopeRoot();
        ScopeInfo si = tmpVars.get(root);
        if (parent.is(JSExp.VAR)) {
          Exp decl = si.getDeclaration(e.getString());
          if (decl != e) {
            // There is a duplicate declaration. This can happen with
            // the direct eval transformation. Mark it as a use.
            si.addUse(e); 
          }
          return;
        }
        assert !parent.isFunction() && !parent.is(JSExp.PARAM_LIST) && !parent.is(JSExp.CATCH);
        assert si != null : "Null scope info: " + root;
        si.addUse(e); 
      }
    }
  }

  public class Collapser extends AbstractScopedTraverser {

    protected Map<Exp,ScopeInfo> tmpVars;
    private boolean changed;
  
    public Collapser(Map<Exp,ScopeInfo> info) {
      tmpVars = info;
      changed = false;
    }

    public boolean madeChange() {
      return changed;
    }

    @Override
    public void enterScope(Traversal t) { }

    @Override
    public void exitScope(Traversal t) {
      // Remove declarations for vars that are fully collapsed.
      Exp root = t.getScopeRoot();
      ScopeInfo si = tmpVars.get(root);

      if (si != null) {
        if (si.hasDeclarationsToRemove()) {
          si.removeDeclarations();
        } else {
          // Release the ScopeInfo storage.
          tmpVars.remove(root);
        }
      }
    }

    @Override
    public void visit(Traversal t, Exp n, Exp parent) {
      if (n.isName()) {
        Exp root = t.getScopeRoot();
        ScopeInfo si = tmpVars.get(root);

        // If there is no ScopeInfo, we previously noted that no further
        // changes within this scope were needed.
        if (si == null) return;

        if (!parent.is(JSExp.VAR) && si.declaresTemp(n.getString())) {
          // Possibly replace this name with the assigned value.
          Exp decl = si.getDeclaration(n.getString());
          if (collapse(t, decl, n, parent)) {
            // Don't remove it yet, since there may be multiple uses.
            si.setToRemove(decl);
            changed = true;
          }
        }
      }
    }

    protected boolean collapse(Traversal t, Exp decl, Exp n, Exp parent) {
      // Don't pull expressions into or out of a transaction.
      if (n.isWithinType(JSExp.TRANSACTION) != null)
        return false;
      if (decl.isWithinType(JSExp.TRANSACTION) != null)
        return false;

      // To be safe don't collapse references across other statements.
      // This avoids the case in which the reference may be
      // modified on the RHS of an assignment.
      Exp stmt = ExpUtil.getEnclosingStatement(n);
      Exp stmtParent = stmt.getParent();
      if (stmtParent.getChildBefore(stmt) != decl.getParent()) {
        return false;
      }

      // Get the rhs of the declaration.
      Exp varNode = decl.getParent();
      assert ExpUtil.isVarInitializer(varNode) : "Declaration is not a var initializer: " + varNode;
      Exp rhs = varNode.cloneAssignRHS();
      assert rhs != null : "Null RHS for node: " + varNode;
      // Can't assert equality |n == ExpUtil.getAssignLHS(varNode)|
      // because that function clones the LHS. |getAssignRHS| doesn't.

      // Don't collapse if there are multiple references to the name. 
      Exp root = t.getScopeRoot();
      ScopeInfo si = tmpVars.get(root);
      assert si != null : "Null scope info: " + root;
      Set<Exp> nuses = si.getUses(n.getString());
      if (nuses.size() > 1) {
        //Dbg.warn("Not collapsing temporary: " + n);
        return false;
      }

      // Replace n with the rhs value.
      //Dbg.dbg("P: " + parent + " N: " + n + " RHS: " + rhs);
      parent.replaceChild(n, rhs);
      
      collapseCnt++;
      sm.reportCodeChange();
      //Dbg.dbg("CODE:\n" + sm.toString());
      return true;
    }
  }
}
