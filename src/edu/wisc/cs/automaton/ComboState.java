
package edu.wisc.cs.automaton;

public class ComboState<S extends State,T extends State> extends State {

	private S one;
	private T two;

	public ComboState(S uno, T dos) {
		one = uno;
		two = dos;
		if (one.isInitial() && two.isInitial()) {
			setInitial(true);
		}
		if (one.isFinal() && two.isFinal()) {
			setFinal(true);
		}
	}

	public S getLeft() {
		return one;
	}

	public T getRight() {
		return two;
	}

	@Override
  @SuppressWarnings("unchecked")
	public boolean equals(Object o) {
		if (!(o instanceof ComboState)) return false;
		if (this == o) return true;
    ComboState<S,T> s = null;
    try {
		  s = (ComboState<S,T>)o;
    } catch (ClassCastException ex) {
      return false;
    }
		return getLeft().equals(s.getLeft()) && getRight().equals(s.getRight());
	}

  @Override
  public int hashCode() {
    return getLeft().hashCode() + getRight().hashCode();
  }

	@Override
	public String toString() {
		return one.toString() + "." + two.toString();
	}

}
