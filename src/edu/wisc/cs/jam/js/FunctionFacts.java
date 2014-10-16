
package edu.wisc.cs.jam.js;

import com.google.javascript.jscomp.CallGraph;
import com.google.javascript.jscomp.Compiler;
import com.google.javascript.jscomp.Scope;
import com.google.javascript.jscomp.Scope.Var;
import com.google.javascript.jscomp.NodeTraversal;
import com.google.javascript.jscomp.NodeTraversal.Callback;
import com.google.javascript.jscomp.CallGraph.Function;

import com.google.javascript.rhino.Node;
import com.google.javascript.rhino.Token;

import java.util.Map;
import java.util.Set;
import java.util.List;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.Exp;

// Gathers prolog facts about all of the functions in the source file
public class FunctionFacts {

  protected SourceManager sm;
  protected Collection<Function> allFunctions;
  protected Map<String,List<Function>> callMap;
  protected Map<String,Function> addressMap;
  protected Map<Function,List<Scope>> scopeChainMap;
  protected Map<Function,Scope> scopeMap;

  protected CallGraph cg;
  protected String functionPredicates;

  public FunctionFacts(SourceManager src) {
    sm = src;
    functionPredicates = null;

    callMap = new LinkedHashMap<String,List<Function>>();
    addressMap = new LinkedHashMap<String,Function>();
    scopeChainMap = new LinkedHashMap<Function,List<Scope>>();
    scopeMap = new LinkedHashMap<Function,Scope>();
  }

  public String getFunctionPredicates() {
    if (functionPredicates == null) {
      cg = sm.getCallGraph();
      // We copy in this funny way because modifications to the collection
      // returned here will change the actual CallGraph!
      Collection<Function> allFunctionsOrig = cg.getAllFunctions();
      allFunctions = new LinkedHashSet<Function>(allFunctionsOrig);
      /*
      for (Function f : allFunctionsOrig) {
        // Anonymous functions, at this point, are all getters/setters.
        // %%% Need to figure out how to properly handle these.
        if (f.getName() == null)
          allFunctions.remove(f);
        Dbg.dbg("f: " + f.getName());
      }
      */
      assert allFunctions != null;

      Node root = sm.getRootNode();
      Compiler comp = sm.getCompiler();

      NodeTraversal.traverse(comp, root, new CallTargetVisitor());
      NodeTraversal.traverse(comp, root, new ScopeGatherer());

      functionPredicates = gatherFunctionPredicates();
    }

    return functionPredicates;
  }

  public Function getFunctionAt(String addr) {
    if (functionPredicates == null) {
      getFunctionPredicates();
    }
    return addressMap.get(addr);
  }

  public ArrayList<String> getAddresses() {
    if (functionPredicates == null) {
      getFunctionPredicates();
    }
    return new ArrayList<String>(addressMap.keySet());
  }

  // Gets all identifiers that can point to a particular function
  protected List<String> getFunctionAliases(Function f) {
    List<String> ret = new ArrayList<String>();

    for (String curF : callMap.keySet()) {
      for (Function curFunc : callMap.get(curF)) {
        if(curFunc.getName().equals(f.getName())) {
          ret.add(curF);
          break;
        }
      }
    }

    return ret;
  }

  // Finds all of the call target assignments that might take place in
  // the program. Populates callMap with the results.
  public class CallTargetVisitor implements Callback {

    @Override 
    public boolean shouldTraverse(NodeTraversal traversal, Node n, Node parent) {
      return true;
    }

    @Override 
    public void visit(NodeTraversal t, Node n, Node parent) {

      if (ExpUtil.isAssignment(n) || ExpUtil.isVarInitializer(n)) {
        String lhs = getCode(ExpUtil.getAssignLHS(n));
        String rhs = getCode(ExpUtil.getAssignRHS(n));

        List<Function> targets = new ArrayList<Function>(getPossibleTargetsOfName(rhs));
        if(targets.size() > 0) {
          List<Function> targetsList = null;
          if(callMap.containsKey(lhs))
            targetsList = callMap.get(lhs);
          if(targetsList == null)
            targetsList = new ArrayList<Function>();
          targetsList.addAll(targets);
          callMap.put(lhs, targets);
        }
      }
    }
  }

  protected Set<Function> getPossibleTargetsOfName(String funcName) {

    Set<Function> ret = new LinkedHashSet<Function>();

    for (Function curFunc : allFunctions) {
      String name = curFunc.getName();
      if (name != null && name.equals(funcName))
        ret.add(curFunc);
    }

    return ret;
  }

  // Gets the formals associated with a function node
  protected List<String> getFormals(Node n) {
    List<String> ret = new ArrayList<String>();

    if(n == null) return ret;

    if(n.getType() != Token.FUNCTION)
      return getFormals(n.getFirstChild());

    Node curNode = n.getChildAtIndex(1).getFirstChild();
    while(curNode != null) {
      ret.add(getCode(curNode));
      curNode = curNode.getNext();
    }

    return ret;
  }

  protected String getFunctionScopeObject(Function func) {
    String funcName = func.getName();
    return "@@" + funcName + "@scope";
  }

  protected String getFunctionScope(Function func) {
    String funcName = func.getName();
    return "##" + funcName + "#scope";
  }

  // Get the scope chain (a Prolog list) for a given node.
  protected String getScopeChain(Function func) {
    String ret = "[";
    List<Scope> chain = scopeChainMap.get(func);
    boolean first = true;
    for (Scope s : chain) {
      if (first) {
        first = false;
      } else {
        ret += ",";
      }

      if (s == null) {
        ret += "'#null'";        
      } else {
        Node n = s.getRootNode();
        if (n.isFunction()) {
          Function f = cg.getFunctionForAstNode(n);
          assert f != null;
          ret += "'##" + f.getName() + "'";
        } else {
          ret += "'#Global'";
        }
      }
    }
    ret += "]";

    return ret;
  }

  protected String getParentScope(Function func) {
    Scope parent = scopeChainMap.get(func).get(0);
    Node n = parent.getRootNode();
    if (n.isFunction()) {
      Function f = cg.getFunctionForAstNode(n);
      assert f != null;
      return f.getName();
    }
    return "#Global";
  }

  // The global (a.k.a. {main}) function is a special case.
  // We can't simple rely on hard-coded predicates because
  // the variable declarations may vary from program to program.
  protected String globalFunctionDefinition(String varstr, List<String> varlist) {
    StringBuilder ret = new StringBuilder();

    // Add the function definition for the global function.
    ret.append("fundef('@Global',[],");
    ret.append(varstr);
    ret.append(",'#null','#Global',[],[],'@Global').\n");

    for (String varname : varlist) {
      ret.append("varlookup('\"");
      ret.append(varname);
      ret.append("\"','#Global').\n");
    }

    // The global object has no parent scope, so there's no
    // need for declaration of a scope chain here.

    return ret.toString();
  }

  protected String gatherFunctionPredicates() {
    StringBuilder ret = new StringBuilder();

    // First gather up all of the function names, so that we know which
    // identifiers not to declare as local variables, and thus overwrite.
    // NOTE: This assumes that all identifiers have globally-unique names,
    // an invariant which should be true because of steps taken by the
    // Closure compiler before starting the passes.
    List<String> allFuncNames = new ArrayList<String>();
    for (Function curFunc : allFunctions) {
      allFuncNames.add(curFunc.getName());
    }

    boolean anyAliases = false;
    boolean anyFuncs = false;
    boolean anyVars = false;

    for (Function curFunc : allFunctions) {
      String funcname = curFunc.getName();
      // Getters/setters are not given names.
      if (funcname == null) continue;
      Node astnode = curFunc.getAstNode();

      // Construct the list of formals represented as a string
      // understandable by the Datalog semantics
      StringBuilder fmls = new StringBuilder();
      fmls.append("[");
      boolean first = true;
      List<String> formals = getFormals(astnode);
      for (String fml : formals) {
        if (first) {
          first = false;
        } else {
          fmls.append(",");
        }
        fmls.append("'");
        fmls.append(fml);
        fmls.append("'");
      }
      fmls.append("]");

      // And now build the list of variables represented as
      // such a string
      StringBuilder vars = new StringBuilder();
      vars.append("[");

      StringBuilder funcs = new StringBuilder();
      funcs.append("[");
      StringBuilder locs = new StringBuilder();
      locs.append("[");

      boolean firstvar = true;
      boolean firstfunc = true;

      List<String> listOfVars = new ArrayList<String>();
      Scope s = scopeMap.get(curFunc);
      if (s != null) {
        Iterator<Var> sit = s.getVars();
        while (sit.hasNext()) {
          Var curVar = sit.next();
          if (curVar == null) continue;

          String curVarName = curVar.getName();

          // If this variable is a formal parameter, it is handled
          // separately.
          if (formals.contains(curVarName)) continue;

          // If this variable is initialized to a function, then
          // we update the funcs string.
          if (allFuncNames.contains(curVarName)) {
            if (firstfunc) {
              firstfunc = false;
            } else {
              funcs.append(",");
              locs.append(",");
            }
            funcs.append("'");
            funcs.append(curVarName);
            funcs.append("'");

            locs.append("'##");
            locs.append(curVarName);
            locs.append("'");
          } else {
            if (firstvar) {
              firstvar = false;
            } else {
              vars.append(",");
            }
            vars.append("'");
            vars.append(curVarName);
            vars.append("'");
            listOfVars.add(curVarName);
            anyVars = true;
          }
        }
      }
      vars.append("]");
      funcs.append("]");
      locs.append("]");

      // {main} in Closure corresponds to Global in our XSB semantics.
      if (funcname.equals("{main}")) {
        ret.append(globalFunctionDefinition(vars.toString(), listOfVars));
        continue;
      }

      String funcobj = funcname;
      String funcaddr = "##" + funcname;
      String scopename = getFunctionScope(curFunc);

      // Add a new function definition predicate.
      ret.append("fundef(\'");
      ret.append(funcobj);
      ret.append("',");
      ret.append(fmls);
      ret.append(",");
      ret.append(vars.toString());
      ret.append(",'");
      ret.append(scopename);
      ret.append("','");
      ret.append(funcaddr);
      ret.append("',");
      ret.append(funcs.toString());
      ret.append(",");
      ret.append(locs.toString());
      ret.append(",'\"");
      ret.append(funcname);
      ret.append("\"').\n");

      for (String varname : listOfVars) {
        ret.append("varlookup('\"");
        ret.append(varname);
        ret.append("\"','");
        ret.append(funcaddr);
        ret.append("').\n");
      }

      // Add a mapping for any aliases.
      for (String callname : getFunctionAliases(curFunc)) {
        ret.append("funalias('");
        ret.append(funcname);
        ret.append("','\"");
        ret.append(callname);
        ret.append("\"').\n");
        anyAliases = true;
      }

      // Map the function's address to the function object.
      ret.append("fmaps('");
      ret.append(funcaddr);
      ret.append("','");
      ret.append(funcobj);
      ret.append("').\n");

      //ret.append(":- add_user_function('");
      //ret.append(funcaddr);
      //ret.append("').\n");

      ret.append("ihasprop('@Global','\"");
      ret.append(funcname);
      ret.append("\"','");
      ret.append(funcaddr);
      ret.append("').\n");

      // Declare some standard properties of function objects.
      ret.append("fhasprop('");
      ret.append(funcobj);
      ret.append("','\"prototype\"','#Object').\n");

      ret.append("fhasprop('");
      ret.append(funcobj);
      ret.append("','@Prototype','#Function#prototype').\n");

      ret.append("fhasprop('");
      ret.append(funcobj);
      ret.append("','@Class','\"Function\"').\n");

      ret.append("fhasprop('");
      ret.append(funcobj);
      ret.append("','@Call','true').\n");

      ret.append("fhasprop('");
      ret.append(funcobj);
      ret.append("','@Construct','true').\n");

      ret.append("fhasprop('");
      ret.append(funcobj);
      ret.append("','\"constructor\"','#Function').\n");

      // Tie this function into the scope chain.
      String scopeChain = getScopeChain(curFunc);
      ret.append("fhasprop('");
      ret.append(funcobj);
      ret.append("','@FScope',");
      ret.append(scopeChain);
      ret.append(").\n");

      String parentScope = getParentScope(curFunc);
      ret.append("reversescope('");
      ret.append(parentScope);
      ret.append("','");
      ret.append(scopename);
      ret.append("').\n");

      //System.err.println("FUNC: " + curFunc.getName() + " CONTAINED BY: " + scopeChain);
      String objname = getFunctionScopeObject(curFunc);

      ret.append("fhasprop('");
      ret.append(objname);
      ret.append("','@Construct','false').\n");

      ret.append("fhasprop('");
      ret.append(objname);
      ret.append("','\"constructor\"','#Scope').\n");

      ret.append("fhasprop('"); 
      ret.append(objname);
      ret.append("','@Class','Object').\n");

      ret.append("fmaps('");
      ret.append(scopename);
      ret.append("','");
      ret.append(objname);
      ret.append("').\n");

      // Update the in-process mapping of addresses to Function.
      addressMap.put(funcaddr, curFunc);
    }

    // Have to define some instance of an exported predicates.
    if (!anyAliases) {
      ret.append("funalias('NONE','NONE') :- fail.\n");
    }
    if (!anyFuncs) {
      ret.append("fmaps('NONE','NONE') :- fail.\n");
      ret.append("fhasprop('NONE','NONE','NONE') :- fail.\n");
      ret.append("reversescope('NONE','NONE') :- fail.\n");
    }
    if (!anyVars) {
      ret.append("varlookup('NONE','NONE') :- fail.\n");
    }
    // Declare this also in case no callsite-to-function bindings
    // can be established later.
    ret.append("calltarget('NONE','NONE') :- fail.\n");

    return ret.toString();
  }

  // Traverses the function hierarchy to gather scope chain
  // information for each function.
  public class ScopeGatherer implements Callback {

    // We want to traverse everything
    @Override 
    public boolean shouldTraverse(NodeTraversal traversal, Node n, Node parent) {
      return true;    
    }

    @Override
    public void visit(NodeTraversal t, Node n, Node parent) {
      if (scopeChainMap.size() == 0) {
        // Add the {main} function to the map.
        List<Scope> chain = new ArrayList<Scope>();
        chain.add(null);
        scopeChainMap.put(cg.getMainFunction(), chain);
        scopeMap.put(cg.getMainFunction(), t.getScope());
      } else if (n.isFunction()) {
        List<Scope> chain = new ArrayList<Scope>();

        // The null scope will be added to the top of the chain.
        Scope parentScope = t.getScope();
        chain.add(parentScope);
        while (parentScope != null) {
          parentScope = parentScope.getParent();
          chain.add(parentScope);
        }

        Function f = cg.getFunctionForAstNode(n);
        scopeChainMap.put(f, chain);
      }

      Node containing = t.getScopeRoot();
      if (!containing.equals(cg.getMainFunction().getAstNode())) {
        Function containingFunction = cg.getFunctionForAstNode(containing);
        assert containingFunction != null;
        if (!scopeMap.keySet().contains(containingFunction)) {
          scopeMap.put(containingFunction, t.getScope());
        }
      }
    }

  }

  // Creates initializer predicates for all variables with explicit initializers
  public class InitGatherer implements Callback {

    private Set<Scope> traversedScopes;

    InitGatherer() {
      traversedScopes = new LinkedHashSet<Scope>();
    }

    // We want to traverse everything
    @Override
    public boolean shouldTraverse(NodeTraversal traversal, Node n, Node parent) {
      return true;
    }

    @Override
    public void visit(NodeTraversal t, Node n, Node parent) {
      if (traversedScopes.contains(t.getScope())) return;
    }
  }

  // Convenience functions
  protected String getCode(Node n) {
    return sm.codeFromNode(n);
  }

  @Override
  public String toString() {
    StringBuilder ret = new StringBuilder();
    ret.append(":- export fundef/8.\n");
    ret.append(":- export varlookup/2.\n");
    ret.append(":- export funalias/2.\n");
    ret.append(":- export ihasprop/3.\n");
    ret.append(":- export fhasprop/3.\n");
    ret.append(":- export fmaps/2.\n");
    ret.append(":- export reversescope/2.\n");
    ret.append(":- export calltarget/2.\n");
    ret.append(getFunctionPredicates());

    return ret.toString();
  }

}
