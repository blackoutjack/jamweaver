
package edu.wisc.cs.jam.opennwa;

import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.File;

import edu.wisc.cs.jam.JAMAnalysis;
import edu.wisc.cs.jam.RelationAutomaton;
import edu.wisc.cs.jam.CounterExample;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.JAM;
import edu.wisc.cs.jam.JAMOpts;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.Dbg;

// This class is used to isolate WALi/OpenNWA as a separate process. See
// class OpenNWAInterface for integrating these applications as a
// library.
public class OpenNWAProcess implements OpenNWAInterface {

	private static final String[] COMMAND = {
		JAMConfig.JAMPKG + "/bin/nwa"
	};

  protected String callOpenNWA(String[] args, RelationAutomaton toStdin) throws IOException {
    String[] cmd = new String[COMMAND.length + args.length];
    for (int i=0; i<COMMAND.length; i++) {
      cmd[i] = COMMAND[i];
    }
    for (int i=0; i<args.length; i++) {
      cmd[i+COMMAND.length] = args[i];
    }
    Process p = Runtime.getRuntime().exec(cmd);
    
    // Send the automaton to stdin if not in debug mode.
    if (toStdin != null) {
      try {
        toStdin.serializeToStream(p.getOutputStream());
      } catch (IOException ex) {
        Dbg.err("Error writing to wali process: " + ex.getMessage());
      }
    }

    BufferedReader r = new BufferedReader(new InputStreamReader(p.getInputStream()));
    StringBuilder result = new StringBuilder();
    String line = null;
    while ((line = r.readLine()) != null) {
      result.append(line);
      result.append("\n");
    }
    r.close();

    if (JAMOpts.debug) {
      // Get the debugging/statistics output.
      BufferedReader e = new BufferedReader(new InputStreamReader(p.getErrorStream()));
      StringBuilder stats = new StringBuilder();
      while ((line = e.readLine()) != null) {
        stats.append(line);
        stats.append("\n");
      }
      e.close();
      if (stats.length() > 0) {
        FileUtil.writeToMain(stats, "dbg.txt", true);
      }
    }

    return result.toString().trim();
  }

  @Override
  public CounterExample findCounterExample(JAMAnalysis ja, RelationAutomaton raut) {

    String[] args = new String[1];
    args[0] = "-";

    String trace = null;
    try {
      trace = callOpenNWA(args, raut);
    } catch (IOException ex) {
      Dbg.err("Error reading stream from WALi: " + ex.getMessage());
      return null;
    }

    if (JAMOpts.debug) FileUtil.writeToFile(trace, "trace-" + ja.getIteration());

    if (trace.equals("no counterexamples")) return null;

    if (trace.equals("")) {
      Dbg.err("Empty counterexample returned by OpenNWA.");
      return null;
    }

    CounterExample ret = new CounterExample(ja, raut, trace);

    return ret;
  }

}
