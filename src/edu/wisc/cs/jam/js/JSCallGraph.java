package edu.wisc.cs.jam.js;

import com.google.javascript.rhino.Node;
import com.google.javascript.jscomp.Compiler;

import java.util.Set;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.LinkedHashMap;

import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.CallGraph;
import edu.wisc.cs.jam.CallGraph.Function;
import edu.wisc.cs.jam.CallGraph.Callsite;

// A conservative (even in the case of |eval|, etc.) call graph.
public class JSCallGraph implements CallGraph {
  protected SourceManager sm;

  // Simple alias for the fully-qualified Closure class.
  protected class ClosureCallGraph extends com.google.javascript.jscomp.CallGraph {
    public ClosureCallGraph(Compiler c) {
      super(c, true, true);
    }
  }

  protected Function mainFunction;

  protected Set<Callsite> callsites;
  protected Set<Function> functions;

  protected Map<Exp,Callsite> expToCallsite;
  protected Map<Exp,Function> expToFunction;
  
  // Temporary translation storage.
  protected Map<ClosureCallGraph.Callsite,Callsite> internalToCallsite;
  protected Map<ClosureCallGraph.Function,Function> internalToFunction;

  public JSCallGraph(Compiler c, SourceManager src) {
    sm = src;
    Node root = ((JSExp)sm.getRoot()).getNode();
    Node externs = ((JSExp)sm.getExterns()).getNode();
    ClosureCallGraph internal = new ClosureCallGraph(c);
    internal.process(externs, root);

    functions = new LinkedHashSet<Function>();
    internalToFunction = new LinkedHashMap<ClosureCallGraph.Function,Function>();
    expToFunction = new LinkedHashMap<Exp,Function>();
    for (ClosureCallGraph.Function intf : internal.getAllFunctions()) {
      Exp e = JSExp.create(sm, intf.getAstNode());
      Function f = new JSFunction(intf, e);
      functions.add(f);
      internalToFunction.put(intf, f);
      expToFunction.put(e, f);
    }

    ClosureCallGraph.Function mainf = internal.getMainFunction();
    mainFunction = internalToFunction.get(mainf);

    callsites = new LinkedHashSet<Callsite>();
    internalToCallsite = new LinkedHashMap<ClosureCallGraph.Callsite,Callsite>();
    expToCallsite = new LinkedHashMap<Exp,Callsite>();
    for (ClosureCallGraph.Callsite intcs : internal.getAllCallsites()) {
      Exp e = JSExp.create(sm, intcs.getAstNode());
      Callsite cs = new JSCallsite(intcs, e);
      callsites.add(cs);
      internalToCallsite.put(intcs, cs);
      expToCallsite.put(e, cs);
    }

    // Precalculate queries and release Closure resources.
    for (Function f : functions) {
      ((Loadable)f).load();
    }
    for (Callsite cs : callsites) {
      ((Loadable)cs).load();
    }
    internalToFunction.clear();
    internalToCallsite.clear();
  }

  protected interface Loadable {
    public void load();
  }
  
  public class JSCallsite implements Callsite, Loadable {
    protected Exp exp;
    protected Set<Function> userTargets;
    protected Set<Exp> externTargets;
    protected boolean targetsUnknown;
    protected boolean targetsExtern;

    protected ClosureCallGraph.Callsite internal;

    protected JSCallsite(ClosureCallGraph.Callsite cs, Exp e) {
      internal = cs;  
      exp = e;
      targetsUnknown = internal.hasUnknownTarget();
      targetsExtern = internal.hasExternTarget();

      userTargets = new LinkedHashSet<Function>();
      externTargets = new LinkedHashSet<Exp>();
    }

    @Override
    public void load() {
      for (ClosureCallGraph.Function f : internal.getPossibleTargets()) {
        userTargets.add(internalToFunction.get(f));
      }

      for (Node n : internal.getPossibleExternTargets()) {
        externTargets.add(JSExp.create(sm, n));
      }

      internal = null;
    }

    @Override
    public Set<Function> getPossibleTargets() {
      return new LinkedHashSet<Function>(userTargets);
    }

    @Override
    public Set<Exp> getPossibleExternTargets() {
      return new LinkedHashSet<Exp>(externTargets);
    }

    @Override
    public boolean hasUnknownTarget() {
      return targetsUnknown;
    }

    @Override
    public boolean hasExternTarget() {
      if (targetsExtern) return true;
      if (targetsUnknown) return true;
      // %%% This probably won't happen, given the first condition.
      if (getPossibleExternTargets().size() > 0) return true;
      return false;
    }

    @Override
    public Exp getExp() {
      return exp;
    }
  }

  public class JSFunction implements Function, Loadable {
    protected Exp exp;
    protected String name;
    protected Set<Callsite> callers;

    protected ClosureCallGraph.Function internal;

    protected JSFunction(ClosureCallGraph.Function f, Exp e) {
      internal = f;
      name = internal.getName();
      exp = e;
      callers = new LinkedHashSet<Callsite>();
    }

    @Override
    public void load() {
      for (ClosureCallGraph.Callsite intcs : internal.getCallsitesPossiblyTargetingFunction()) {
        Callsite cs = internalToCallsite.get(intcs);
        callers.add(cs);
      }
      internal = null;
    }

    @Override
    public Exp getExp() {
      return exp;
    }

    @Override
    public String getName() {
      return name;
    }

    @Override
    public boolean isMain() {
      return this == mainFunction;
    }

    @Override
    public Set<Callsite> getCallsitesPossiblyTargetingFunction() {
      return new LinkedHashSet<Callsite>(callers);
    }
  }

  @Override
  public Set<Function> getAllFunctions() {
    return new LinkedHashSet<Function>(functions);
  }

  @Override
  public Set<Callsite> getAllCallsites() {
    return new LinkedHashSet<Callsite>(callsites);
  }

  @Override
  public Callsite getCallsiteForExp(Exp e) {
    return expToCallsite.get(e);
  }

  @Override
  public Function getFunctionForExp(Exp e) {
    return expToFunction.get(e);
  }

  @Override
  public Function getMainFunction() {
    return mainFunction;
  }
}
