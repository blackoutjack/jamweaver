package edu.wisc.cs.jam.tx;

import java.util.Set;

import com.google.javascript.rhino.Node;
import com.google.javascript.rhino.Token;

import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.CheckManager;
import edu.wisc.cs.jam.PredicateType;

import edu.wisc.cs.jam.js.JSPolicyLanguage.JSPredicateType;
import edu.wisc.cs.jam.js.ExpUtil;

/*
 * Transaction-related utility functions
 */
public class TxUtil {
  
  public static Node createComprehensiveIntrospector() {
    // Create |JAM.policy.pFull|
    Node libName = Node.newString(Token.NAME, JAMConfig.TRANSACTION_LIBRARY);
    Node libProp1 = Node.newString(JAMConfig.INTROSPECTOR_LIST);
    Node libProp2 = Node.newString(JAMConfig.COMPREHENSIVE_INTROSPECTOR);
    Node libAcc1 = new Node(Token.GETPROP, libName, libProp1);
    Node libAcc2 = new Node(Token.GETPROP, libAcc1, libProp2);
    return libAcc2;
  }

  public static void setTxIntrospector(Node tx, Node ispect) {
    Node oldspect = tx.getFirstChild();
    tx.replaceChild(oldspect, ispect);
  }

  public static Node getTxBlock(Node tx) {
    assert ExpUtil.isTransaction(tx);
    Node ret = tx.getChildAtIndex(1);
    assert ret.isBlock();
    return ret;
  }
  
  public static Node getTxIntrospector(Node tx) {
    assert ExpUtil.isTransaction(tx);
    Node ispect = tx.getFirstChild();
    return ispect;
  }

  public static String getIntrospectorName(Node ispect) {
    assert ispect.isGetProp() || ispect.isName();

    if (ispect.isName()) return ispect.getString();

    while (ispect.isGetProp()) {
      ispect = ispect.getChildAtIndex(1);
    }
    assert ispect.isString() : "Introspector property is not a string: " + ispect;
    return ispect.getString();
  }

  public static String getTxIntrospectorName(Node tx) {
    Node ispect = getTxIntrospector(tx);
    return getIntrospectorName(ispect);
  }

  public static Set<PredicateType> getTxPredicateTypes(CheckManager cm, Node tx) {
    Node ispect = getTxIntrospector(tx);
    String ispectName = TxUtil.getIntrospectorName(ispect);
    return cm.getPredicateTypes(ispectName);
  }
}
