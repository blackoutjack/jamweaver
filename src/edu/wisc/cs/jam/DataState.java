package edu.wisc.cs.jam;

import edu.wisc.cs.automaton.State;

import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.util.LinkedHashSet;

// A state that has associated predicates.
public class DataState extends State {

	private Set<PredicateValue> values;
	
	public DataState() {
		super("D");
		values = new LinkedHashSet<PredicateValue>();
	}

  public DataState(DataState orig) {
    super("D");
    values = new LinkedHashSet<PredicateValue>(orig.getValues());
  }

	public void addValue(PredicateValue pv) {
    assert !values.contains(pv) : "Datastate with duplicate predicate: " + pv;
    assert !values.contains(pv.getNegation()) : "DataState with conflicting value; use replaceValue";
		values.add(pv);
	}

  // Force the state to contain this value, replacing a conflicting
  // value if present.
  public void replaceValue(PredicateValue pv) {
    if (values.contains(pv.getNegation())) {
      values.remove(pv.getNegation());
    } else if (values.contains(pv)) {
      return;
    }

    values.add(pv);
  }

	public void setValues(List<PredicateValue> pvs) {
		values = new LinkedHashSet<PredicateValue>(pvs);
	}

	public List<PredicateValue> getValues() {
		return new ArrayList<PredicateValue>(values);
	}

  // Find the value of the given predicate that is true in this state,
  // or null if the predicate is not represented.
  public PredicateValue getValueForPredicate(Predicate pred) {
    if (values == null) return null;
    PredicateValue pos = pred.getPositive();
    PredicateValue neg = pred.getNegative();
    for (PredicateValue pv : values) {
      if (pv.equals(pos)) {
        return pos;
      }
      if (pv.equals(neg)) {
        return neg;
      }
    }
    return null;
  }

	// Print this state's ID and the predicate values it holds.
	public String toStringFull() {
		StringBuilder sb = new StringBuilder();
		sb.append(toString());
		sb.append(": ");

    boolean first = true;
		for (PredicateValue pv : getValues()) {
      if (first) {
        first = false;
      } else {
        sb.append(" && ");
      }
			sb.append(pv);
		}

		return sb.toString();
	}
}
