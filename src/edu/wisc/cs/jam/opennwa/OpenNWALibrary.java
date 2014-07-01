
package edu.wisc.cs.jam.opennwa;

import java.util.List;
import java.util.Set;

import edu.wisc.cs.automaton.ComboSymbol;
import edu.wisc.cs.jam.JAMAnalysis;
import edu.wisc.cs.jam.RelationAutomaton;
import edu.wisc.cs.jam.CounterExample;
import edu.wisc.cs.jam.ExpSymbol;
import edu.wisc.cs.jam.PredicateSymbol;

// This class uses the JNI to invoke WALi/OpenNWA as a library. See
// class OpenNWAProcess for spawning those applications as a separate
// process.
public class OpenNWALibrary implements OpenNWAInterface {

  private native List<ComboSymbol<PredicateSymbol,ExpSymbol>> findAcceptedWord(RelationAutomaton raut);
  // Set up some state to persist across calls.
  private native void initialize();
  // Destroy the persistent state set up by initialize.
  private native void cleanup();

  public OpenNWALibrary() {
    // Load the native library.
		System.loadLibrary("nwajni");
    // Set up some state that persists across native calls.
    initialize();
  }

  @Override
	public CounterExample findCounterExample(JAMAnalysis ja, RelationAutomaton raut) {

    List<ComboSymbol<PredicateSymbol,ExpSymbol>> ret = findAcceptedWord(raut);

    if (ret == null) return null;
    return new CounterExample(ja, ret);
	}

}

