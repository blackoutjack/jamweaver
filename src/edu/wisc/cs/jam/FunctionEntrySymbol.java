
package edu.wisc.cs.jam;

import edu.wisc.cs.jam.CallGraph.Function;

import edu.wisc.cs.jam.js.JSExp;

public class FunctionEntrySymbol extends ExpSymbol {

	private Function function;

	public FunctionEntrySymbol(Function f, SourceManager sm) {
		super(JSExp.createEmpty(sm));
		function = f;
	}
	
	// Copy constructor.
	protected FunctionEntrySymbol(FunctionEntrySymbol orig) {
    super(orig);
		function = orig.getFunction();
	}

	// Wrap the copy constructor to allow for polymorphic copying of
	// subclasses.
  @Override
  public FunctionEntrySymbol copy() {
    return new FunctionEntrySymbol(this);
  }

	public Function getFunction() {
		return function;
	}

  @Override
  public String toAST() {
    return toString();
  }

  public boolean isMain() {
    return function.isMain();
  }

  public boolean isNoOp() {
    // Here we could handle the task that checkFunctionEntry currently
    // does, but it's probably more efficient to handle it in
    // RelationAutomaton.
    return false;
  }

	@Override
	public String serialize() {
		return toString();
	}

	@Override
	public String toString() {
		return "{##" + function.getName() + "}";
	}
}
