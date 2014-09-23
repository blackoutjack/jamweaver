package edu.wisc.cs.jam.js;

import java.util.Map;
import java.util.HashMap;
import java.util.List;

import edu.wisc.cs.jam.tx.TxManager;
import edu.wisc.cs.jam.Semantics;
import edu.wisc.cs.jam.PolicyLanguage;
import edu.wisc.cs.jam.CheckManager;
import edu.wisc.cs.jam.ControlAutomaton;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.Policy;
import edu.wisc.cs.jam.Language;
import edu.wisc.cs.jam.JAM;

public class JavaScript implements Language {

  private JSSemantics sem;
  private JSPolicyLanguage pl;
  
  // %%% Conceptually, shouldn't need the source file.
  @Override
  public Semantics newSemantics(SourceManager sm) {
    assert sem == null;
    sem = new JSSemantics(sm);
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
  public CheckManager newCheckManager(SourceManager sm, Policy pol) {
    return new TxManager(sm, pol);
  }

  @Override
  public ControlAutomaton newControlAutomaton(SourceManager sm, CheckManager cm) {
    ControlAutomaton caut = null;
    if (JAM.Opts.intraprocedural) {
      caut = new JSControlStructure(sm, cm);
    } else {
      caut = new JSInterproceduralControlStructure(sm, cm);
    }
    return caut;
  }

  @Override
  public SourceManager newSourceManager(List<String> srcPaths) {
    SourceManager jsman = new JSSourceManager();    
    for (String srcpath : srcPaths) {
      jsman.addSource(new JSSource(srcpath));
    }
    return jsman;
  }

}
