package edu.wisc.cs.jam.tx;

import java.util.Set;

import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.CheckManager;
import edu.wisc.cs.jam.PredicateType;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.Dbg;

import edu.wisc.cs.jam.js.JSPolicyLanguage.JSPredicateType;
import edu.wisc.cs.jam.js.ExpUtil;
import edu.wisc.cs.jam.js.JSExp;

/*
 * Transaction-related utility functions
 */
public class TxUtil {
  
  public static Exp createComprehensiveIntrospector(SourceManager sm) {
    // Create |JAM.policy.pFull|
    Exp libName = JSExp.createName(sm, JAMConfig.TRANSACTION_LIBRARY);
    Exp libProp1 = JSExp.createString(sm, JAMConfig.INTROSPECTOR_LIST);
    Exp libProp2 = JSExp.createString(sm, JAMConfig.COMPREHENSIVE_INTROSPECTOR);
    Exp libAcc1 = new JSExp(JSExp.GETPROP, libName, libProp1);
    Exp libAcc2 = new JSExp(JSExp.GETPROP, libAcc1, libProp2);
    return libAcc2;
  }

  public static void setTxIntrospector(JSExp tx, JSExp ispect) {
    Exp oldspect = tx.getFirstChild();
    tx.replaceChild(oldspect, ispect);
  }

  public static Exp getTxBlock(Exp tx) {
    assert tx.isTransaction();
    Exp ret = tx.getChild(1);
    assert ret.isBlock();
    return ret;
  }
  
  public static Exp getTxIntrospector(Exp tx) {
    assert tx.isTransaction();
    Exp ispect = tx.getFirstChild();
    return ispect;
  }

  public static String getIntrospectorName(Exp ispect) {
    if (!ispect.is(JSExp.GETPROP) && !ispect.isName()) {
      Dbg.warn("Unknown introspector format: " + ispect);
      return null;
    }

    if (ispect.isName()) return ispect.getString();

    while (ispect.is(JSExp.GETPROP)) {
      ispect = ispect.getChild(1);
    }
    assert ispect.isString() : "Introspector property is not a string: " + ispect;
    return ispect.getString();
  }

  public static String getTxIntrospectorName(Exp tx) {
    Exp ispect = getTxIntrospector(tx);
    return getIntrospectorName(ispect);
  }

  public static Set<PredicateType> getTxPredicateTypes(CheckManager cm, Exp tx) {
    Exp ispect = getTxIntrospector(tx);
    String ispectName = getIntrospectorName(ispect);
    if (ispectName == null) return null;
    return cm.getPredicateTypes(ispectName);
  }
}
