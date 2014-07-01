
package edu.wisc.cs.automaton;

import java.util.Set;
import java.util.HashMap;
import java.util.Map;

public class State {

	protected static Map<String,Integer> NEXT_ID_MAP;

	static {
		NEXT_ID_MAP = new HashMap<String,Integer>();
	}

	private int id;
	private String label;
	private boolean isinitial;
	private boolean isfinal;

	public State() {
		this("S");
	}

	public State(String label) {
		Integer id = NEXT_ID_MAP.get(label);
		if (id == null) {
			id = new Integer(0);
			NEXT_ID_MAP.put(label, id);
		}

		this.label = label;
    this.id = id.intValue();

    NEXT_ID_MAP.put(label, new Integer(this.id + 1));
	}

  public State(String label, int id) {
		this.label = label;
    this.id = id;

    Integer nextid = NEXT_ID_MAP.get(label);
    if (nextid == null || id >= nextid.intValue()) {
      nextid = new Integer(id + 1);
		  NEXT_ID_MAP.put(label, nextid);
    }
  }

	public static void resetIds() {
		for (String key : NEXT_ID_MAP.keySet()) {
			resetLabelIds(key);
		}
	}

	public static void resetLabelIds(String key) {
		NEXT_ID_MAP.put(key, new Integer(0));
	}

	// On copy, the label stays the same but the
	// id should still be incremented.
	protected State(State orig) {
		this(orig.getLabel());
	}

	public int getId() {
	    return id;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String l) {
		State orig = new State(this);
		label = l;
	}

	public boolean isInitial() {
		return isinitial;
	}

	public void setInitial(boolean init) {
		isinitial = init;
	}

	public boolean isFinal() {
		return isfinal;
	}

	public void setFinal(boolean fin) {
		isfinal = fin;
	}

	@Override
	public boolean equals(Object o) {
		// Given the scheme of assigning a unique Id to each new State,
		// this is appropriate.
		return this == o;
		/*
		if (!(o instanceof State)) return false;
		if (this == o) return true;
		State s = (State)o;
		if (getId() == s.getId() && getLabel().equals(s.getLabel())) {
			return true;
		}
		return false;
		*/
	}

	@Override
	public int hashCode() {
		return toString().hashCode();
	}

	public String serialize() {
		return toString();
	}

	@Override
	public String toString() {
	    return getLabel() + getId();
	}

}

