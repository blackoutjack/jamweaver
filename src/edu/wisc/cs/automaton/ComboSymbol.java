
package edu.wisc.cs.automaton;

public class ComboSymbol<L extends Symbol,M extends Symbol> extends Symbol {

	private L one;
	private M two;

	public ComboSymbol(L uno, M dos) {
		one = uno;
		two = dos;
	}

	public L getLeft() {
		return one;
	}

	public M getRight() {
		return two;
	}

	@Override
	public String serialize() {
		return one.serialize() + "." + two.serialize();
	}

	@Override
	public String toString() {
		return one.toString() + "." + two.toString();
	}

}
