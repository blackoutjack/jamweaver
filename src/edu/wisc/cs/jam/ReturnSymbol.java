
package edu.wisc.cs.jam;

import edu.wisc.cs.jam.CallGraph.Function;
import edu.wisc.cs.jam.js.JSExp;

public class ReturnSymbol extends ExpSymbol {

	private Function function;

	public ReturnSymbol(SourceManager sm, Function f) {
    super(JSExp.createEmpty(sm));
		function = f;
	}
	
	// Copy constructor.
	protected ReturnSymbol(ReturnSymbol orig) {
		super(orig);
		function = orig.getFunction();
	}

	// Wrap the copy constructor to allow for polymorphic copying of
	// subclasses.
  @Override
  public ReturnSymbol copy() {
    return new ReturnSymbol(this);
  }

	public Function getFunction() {
		return function;
	}

  @Override
  public boolean isNoOp() {
    // A return edge never affects the policy state directly.
    return true;
  }

  @Override
  public String serialize() {
    return toString();
  }

	@Override
	public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("[#return");
    // The function name doesn't matter except for debugging.
    if (JAMOpts.embedReturnIds && function != null) {
		  sb.append(";");
      sb.append(function.getName());
    }
    sb.append("]");

    return sb.toString();
	}
}
