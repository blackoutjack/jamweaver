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

  protected class ClosureCallGraph extends com.google.javascript.jscomp.CallGraph {
    public ClosureCallGraph(Compiler c) {
      super(c, true, true);
    }
  }

  protected ClosureCallGraph internal;
  protected Map<Callsite,ClosureCallGraph.Callsite> callsiteToInternal;
  protected Map<ClosureCallGraph.Callsite,Callsite> internalToCallsite;
  protected Map<Function,ClosureCallGraph.Function> functionToInternal;
  protected Map<ClosureCallGraph.Function,Function> internalToFunction;

  protected Set<Callsite> callsites;
  protected Set<Function> functions;

  protected Map<Exp,Callsite> expToCallsite;
  protected Map<Exp,Function> expToFunction;
  
  public JSCallGraph(Compiler c, SourceManager src) {
    sm = src;
    Node root = ((JSExp)sm.getRoot()).getNode();
    Node externs = ((JSExp)sm.getExterns()).getNode();
    internal = new ClosureCallGraph(c);
    internal.process(externs, root);

    functions = new LinkedHashSet<Function>();
    functionToInternal = new LinkedHashMap<Function,ClosureCallGraph.Function>();
    internalToFunction = new LinkedHashMap<ClosureCallGraph.Function,Function>();
    expToFunction = new LinkedHashMap<Exp,Function>();
    for (ClosureCallGraph.Function intf : internal.getAllFunctions()) {
      Exp e = JSExp.create(sm, intf.getAstNode());
      Function f = new JSFunction(intf, e);
      functions.add(f);
      functionToInternal.put(f, intf);
      internalToFunction.put(intf, f);
      expToFunction.put(e, f);
    }

    callsites = new LinkedHashSet<Callsite>();
    callsiteToInternal = new LinkedHashMap<Callsite,ClosureCallGraph.Callsite>();
    internalToCallsite = new LinkedHashMap<ClosureCallGraph.Callsite,Callsite>();
    expToCallsite = new LinkedHashMap<Exp,Callsite>();
    for (ClosureCallGraph.Callsite intcs : internal.getAllCallsites()) {
      Exp e = JSExp.create(sm, intcs.getAstNode());
      Callsite cs = new JSCallsite(intcs, e);
      callsites.add(cs);
      callsiteToInternal.put(cs, intcs);
      internalToCallsite.put(intcs, cs);
      expToCallsite.put(e, cs);
    }
  }
  
  public class JSCallsite implements Callsite {
    protected ClosureCallGraph.Callsite internal;
    protected Exp exp;

    protected JSCallsite(ClosureCallGraph.Callsite cs, Exp e) {
      internal = cs;  
      exp = e;
    }

    @Override
    public Set<Function> getPossibleTargets() {
      Set<Function> tgts = new LinkedHashSet<Function>();
      for (ClosureCallGraph.Function f : internal.getPossibleTargets()) {
        tgts.add(internalToFunction.get(f));
      }
      return tgts;
    }

    @Override
    public Set<Exp> getPossibleExternTargets() {
      Set<Exp> tgts = new LinkedHashSet<Exp>();
      for (Node n : internal.getPossibleExternTargets()) {
        tgts.add(JSExp.create(sm, n));
      }
      return tgts;
    }

    @Override
    public boolean hasUnknownTarget() {
      return internal.hasUnknownTarget();
    }

    @Override
    public boolean hasExternTarget() {
      if (internal.hasExternTarget()) return true;
      if (hasUnknownTarget()) return true;
      // %%% This probably won't happen, given the first condition.
      if (getPossibleExternTargets().size() > 0) return true;
      return false;
    }

    @Override
    public Exp getExp() {
      return exp;
    }
  }

  public class JSFunction implements Function {
    protected ClosureCallGraph.Function internal;
    protected Exp exp;

    protected JSFunction(ClosureCallGraph.Function f, Exp e) {
      internal = f;
      exp = e;
    }

    @Override
    public Exp getExp() {
      return exp;
    }

    @Override
    public String getName() {
      return internal.getName();
    }

    @Override
    public boolean isMain() {
      return internal.isMain();
    }

    @Override
    public Set<Callsite> getCallsitesPossiblyTargetingFunction() {
      Set<Callsite> callers = new LinkedHashSet<Callsite>();
      for (ClosureCallGraph.Callsite intcs : internal.getCallsitesPossiblyTargetingFunction()) {
        Callsite cs = internalToCallsite.get(intcs);
        callers.add(cs);
      }
      return callers;
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
    ClosureCallGraph.Function f = internal.getMainFunction();
    return internalToFunction.get(f);
  }
}
