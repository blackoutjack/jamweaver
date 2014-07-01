package edu.wisc.cs.jam;

import java.util.List;

public class CallbackEntrySymbol extends ExpSymbol {

  public CallbackEntrySymbol(Exp s) {
    super(s);
  }

  @Override
  public String toAST() {
    return toString();
  }

  @Override
  public boolean isNoOp() {
    return true;
  }

  /*
  @Override
  public String serialize() {
    return toString();
  }
  */

  @Override
  public String toString() {
    return "[#callback]";
  }

}
