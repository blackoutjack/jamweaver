
package com.google.javascript.jscomp;

import java.util.List;

// This class must be in the Closure package because the
// invertContextualRenaming member is package-private in
// DefaultPassConfig.
public class JAMPassConfig extends DefaultPassConfig {

  boolean revert;

  public JAMPassConfig(CompilerOptions opts, boolean revert) {
    super(opts);
    this.revert = revert;
  }

  public JAMPassConfig(CompilerOptions opts) {
    this(opts, false);
  }

  // Modify optimizations from DefaultPassConfig to prevent inverting
  // renamed variables.
  @Override
  public List<PassFactory> getOptimizations() {
    List<PassFactory> passes = super.getOptimizations();

    // Remove several passes that are unnecessary.
    if (!revert) {
      passes.remove(invertContextualRenaming);
    }
    passes.remove(stripSideEffectProtection);
    passes.remove(markUnnormalized);
    passes.remove(denormalize);
    passes.remove(sanityCheckAst);
    passes.remove(sanityCheckVars);
    passes.remove(optimizeCallsAndRemoveUnusedVars);
    passes.remove(removeUnusedVars);
    passes.remove(removeUnusedPrototypeProperties);
    passes.remove(garbageCollectChecks);

    /*
    System.err.println("PASSES:");
    for (PassFactory pass : passes) {
      System.err.println("PASS: " + pass.getName());
    }
    */

    return passes;
  }
}
