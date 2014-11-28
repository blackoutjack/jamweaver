package com.google.javascript.jscomp;

import com.google.javascript.jscomp.Compiler;
import com.google.javascript.jscomp.NodeUtil;
import com.google.javascript.rhino.Node;

public class ClosureUtil {
  
  private static Compiler compiler = new Compiler();

  // Pass in the originating compiler to get a representation
  // of the node as it was in the source code.
  public static String codeFromNode(Node n, Compiler c) {
    return c.toSource(n);
  }

  // Returns a canonical representation of the node AST.
  public static String codeFromNode(Node n) {
    return compiler.toSource(n);
  }

  public static Double getNumberValue(Node n) {
    return NodeUtil.getNumberValue(n);
  }

  public static ControlFlowGraph<Node> getCFG(Compiler c, Node externs, Node root) {
    // ControlFlowAnalysis is package-private.
    ControlFlowAnalysis cfa = new ControlFlowAnalysis(c, false, false);
    cfa.process(externs, root);
    return cfa.getCfg();
  }
}
