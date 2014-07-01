package edu.wisc.cs.jam.js;

import java.util.Map;
import java.util.HashMap;

import edu.wisc.cs.jam.tx.TxManager;
import edu.wisc.cs.jam.Semantics;
import edu.wisc.cs.jam.PolicyLanguage;
import edu.wisc.cs.jam.CheckManager;
import edu.wisc.cs.jam.ControlAutomaton;
import edu.wisc.cs.jam.SourceFile;
import edu.wisc.cs.jam.Policy;
import edu.wisc.cs.jam.Language;
import edu.wisc.cs.jam.JAM;

public class JavaScript implements Language {

  private JSSemantics sem;
  private JSPolicyLanguage pl;
  
  // %%% Conceptually, shouldn't need the source file.
  @Override
  public Semantics newSemantics(SourceFile src) {
    assert sem == null;
    sem = new JSSemantics(src);
    sem.loadFunctionFacts();
    return sem;
  }

  @Override
  public Semantics semantics() {
    assert sem != null;
    return sem;
  }

  @Override
  public PolicyLanguage policyLanguage() {
    if (pl == null) {
      pl = new JSPolicyLanguage();
    }
    return pl;
  }

  @Override
  public CheckManager newCheckManager(SourceFile src, Policy pol) {
    return new TxManager(src, pol);
  }

  @Override
  public ControlAutomaton newControlAutomaton(SourceFile src, CheckManager cm) {
    ControlAutomaton caut = null;
    if (JAM.Opts.intraprocedural) {
      caut = new JSControlStructure(src, cm);
    } else {
      caut = new JSInterproceduralControlStructure(src, cm);
    }
    return caut;
  }

  @Override
  public SourceFile newSourceFile(String srcPath) {
    return new JSFile(srcPath);    
  }

}
