package edu.wisc.cs.jam;

import java.util.Set;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.ArrayList;

import edu.wisc.cs.automaton.State;
import edu.wisc.cs.automaton.Symbol;

import edu.wisc.cs.jam.xsb.XSBInterface;

public class ExpSymbol extends Symbol {

  protected Exp exp; 
  // %%% Reinstate this.
  //protected String sourceIndex;

  // The instrumentation (if any) guarding this expression.
  protected List<RuntimeCheck> checks;

  // Indicates that this symbol shares an Exp with the linked ones.
  // This is typically used for a call symbol and it's corresponding
  // "post" call. There rarely may be more than one linked symbol when,
  // for example, a call is within a case condition.
  protected Set<ExpSymbol> linked;

  // For CALL nodes, this indicates that it represents the return leg.
  private boolean ispostcall;

  private boolean ishavoc;

  public ExpSymbol(Exp e) {
    setPostCall(false);
    setHavoc(false);
    exp = e;
  }

  protected ExpSymbol(ExpSymbol orig) {
    super(orig);

    exp = orig.getExp();
    // %%% Copy over sourceIndex because otherwise some weird 
    // %%% truncation of the expression length was occurring.
    //sourceIndex = orig.getSourceIndex();
    setPostCall(orig.isPostCall());
    setHavoc(orig.isHavoc());
  }

  // Wrap the copy constructor to allow for polymorphic copying of
  // subclasses.
  public ExpSymbol copy() {
    return new ExpSymbol(this);
  }

  public List<RuntimeCheck> getChecks() {
    if (checks == null)
      return new ArrayList<RuntimeCheck>();
    return new ArrayList<RuntimeCheck>(checks);
  }

  public synchronized void addCheck(RuntimeCheck check) { 
    if (checks == null) checks = new ArrayList<RuntimeCheck>();

    // This cuts off infinite recursion between this ExpSymbol and
    // a linked one.
    if (checks.contains(check)) return;

    // Add the check to this ExpSymbol and any linked ones.
    checks.add(check);
    if (linked != null) {
      for (ExpSymbol l : linked) {
        l.addCheck(check);
      }
    }
  }
  
  // %%% We can avoid this if the post-call paradigm is changed by
  // %%% associating it with an edge instead of a symbol.
  public void link(ExpSymbol lsym) {
    if (linked == null) {
      linked = new LinkedHashSet<ExpSymbol>();
    }
    if (!linked.contains(lsym)) {
      linked.add(lsym);
      lsym.link(this);
    }
  }
  
  // Retrieve a runtime check that guards this node for the given policy
  // edge, or create a new one that does.
  public RuntimeCheck getCheck(Policy.Edge edge) {
    if (checks != null) {
      for (RuntimeCheck c : checks) {
        if (c.getPolicyEdge().equals(edge)) {
          return c;
        }
      }
    }

    // No existing check was present, so create one.
    Exp stmt = getExp();
    RuntimeCheck newcheck = new RuntimeCheck(stmt.getSource(), stmt, edge);
    addCheck(newcheck);
    return newcheck;
  }

  public boolean isGuarded(Predicate p) {
    if (checks == null) return false;

    for (RuntimeCheck c : checks) {
      if (c.isApplied() && p.equals(c.getPolicyEdge().getSymbol().getPredicate())) {
        return true;
      }
    }

    return false;
  }

  public boolean isGuarded(Policy.Edge edge) {
    if (checks == null) return false;

    for (RuntimeCheck c : checks) {
      if (c.isApplied() && edge.equals(c.getPolicyEdge())) {
        return true;
      }
    }

    return false;
  }

  public Exp getExp() {
    return exp;
  }

  public SourceFile getSourceFile() {
    return exp.getSource();
  }

  /*
  public String getSourceIndex() {
    if (sourceIndex == null) {
      Exp s = getExp();
      if (s == null) {
        sourceIndex = "";
      } else {
        sourceIndex = s.getSourceOffset() + ";" + s.toCode().length();
      }
    }

    return sourceIndex;
  }
  */

  public void setPostCall(boolean pc) {
    ispostcall = pc;
  }

  public boolean isPostCall() {
    return ispostcall;
  }

  public void setHavoc(boolean h) {
    ishavoc = h;
  }

  public boolean isHavoc() {
    return ishavoc;
  }

  // This allows us to determine without a semantic query when a policy
  // policy transition is not possible.
  public boolean isNoOp() {
    return exp.isNoOp();
  }

  // Build a string representation of the relevant node tree.
  public String toQueryAST() {
    StringBuilder sb = new StringBuilder();

    // Wrap as a script if it's not already.
    boolean isscript = exp != null && exp.isScript();
    if (!isscript)
      sb.append("['SCRIPT',");

    sb.append(exp.toQueryAST());

    // Bookend the script wrapper.
    if (!isscript)
      sb.append("]");

    return sb.toString();
  }

  // Build a string representation of the relevant node tree.
  public String toNormalizedAST(Set<String> polnames) {
    StringBuilder sb = new StringBuilder();

    // Wrap as a script if it's not already.
    boolean isscript = exp != null && exp.isScript();
    if (!isscript)
      sb.append("['SCRIPT',");

    sb.append(exp.toNormalizedAST(polnames));

    // Bookend the script wrapper.
    if (!isscript)
      sb.append("]");

    return sb.toString();
  }

  // Build a string representation of the relevant node tree.
  public String toTraceAST() {
    //return exp.toQueryAST();
    return toQueryAST();
  }

  public String toAST() {
    return exp.toAST();
  }

  public String toCode() {
    return exp.toCode();
  }

  @Override
  public String toString() {
    return exp.toString();
  }

}

