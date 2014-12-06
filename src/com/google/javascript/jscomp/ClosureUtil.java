package com.google.javascript.jscomp;

import com.google.javascript.rhino.Node;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.js.JSExp;

public class ClosureUtil {
  
  // Pass in the originating compiler to get a representation
  // of the node as it was in the source code.
  public static String codeFromNode(Node n, Compiler c) {
    return c.toSource(n);
  }

  public static Double getNumberValue(Exp e) {
    Node n = ((JSExp)e).makeNode();
    if (n == null) return null;
    return NodeUtil.getNumberValue(n);
  }

  public static ControlFlowGraph<Node> getCFG(Compiler c, Node externs, Node root) {
    // ControlFlowAnalysis is package-private.
    ControlFlowAnalysis cfa = new ControlFlowAnalysis(c, false, false);
    cfa.process(externs, root);
    return cfa.getCfg();
  }
}
