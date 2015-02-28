
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
      replacePassFactory(passes, createEmptyPass("invertContextualRenaming"));
    }
    //replacePassFactory(passes, createEmptyPass("stripSideEffectProtection"));
    replacePassFactory(passes, createEmptyPass("markUnnormalized"));
    replacePassFactory(passes, createEmptyPass("denormalize"));
    replacePassFactory(passes, createEmptyPass("sanityCheckAst"));
    replacePassFactory(passes, createEmptyPass("sanityCheckVars"));
    //replacePassFactory(passes, createEmptyPass("optimizeCalls_and_removeUnusedVars"));
    //replacePassFactory(passes, createEmptyPass("removeUnusedVars"));
    //replacePassFactory(passes, createEmptyPass("removeUnusedPrototypeProperties"));
    replacePassFactory(passes, createEmptyPass("garbageCollectChecks"));

    /*
    System.err.println("PASSES:");
    for (PassFactory pass : passes) {
      System.err.println("PASS: " + pass.getName());
    }
    */

    return passes;
  }
}
