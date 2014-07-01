
package edu.wisc.cs.jam.opennwa;

import edu.wisc.cs.jam.JAMAnalysis;
import edu.wisc.cs.jam.RelationAutomaton;
import edu.wisc.cs.jam.CounterExample;

// This defines the interface for interacting with OpenNWA.
public interface OpenNWAInterface {

	public CounterExample findCounterExample(JAMAnalysis ja, RelationAutomaton raut);
  
}

