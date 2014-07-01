
package edu.wisc.cs.jam;

import edu.wisc.cs.automaton.Symbol;

public class PredicateSymbol extends Symbol {

	private Predicate predicate;

	public PredicateSymbol(Predicate p) {
		setPredicate(p);	
	}

	public PredicateSymbol(PredicateSymbol orig) {
		super(orig);
		setPredicate(orig.getPredicate());
	}

	public void setPredicate(Predicate p) {
		predicate = p;
	}

	public Predicate getPredicate() {
		return predicate;
	}

	@Override 
	public String serialize() {
		return "" + predicate.getId();
	}

	@Override
	public String toString() {
		return predicate.getPositive().toString();
	}
}
