package edu.wisc.cs.jam.xsb;

import java.io.Reader;
import java.io.BufferedReader;
import java.io.Writer;
import java.io.BufferedWriter;
import java.io.OutputStreamWriter;
import java.io.InputStreamReader;
import java.io.IOException;

import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;

import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.Dbg;

public class XSBProcess {

  private static final List<String> XSB_COMMAND;
  private static ProcessBuilder xsbBuild;

  private int id;
  private Process xsb;
  private Reader xsbout;
  private BufferedReader xsberr;
  private Writer xsbin;
  private int queryCount = 0;

  protected static int NEXT_ID;

  static {
    NEXT_ID = 1;

    String XSB_EXE = JAMConfig.JAMPKG + "/XSB/bin/xsb";

    XSB_COMMAND = Arrays.asList(
      XSB_EXE,
      "-m",
      "250M",
      "--quietload",
      "--noprompt",
      "--nobanner"
    );

    xsbBuild = new ProcessBuilder(XSB_COMMAND);
  }

  public XSBProcess() {
    id = NEXT_ID;
    synchronized (XSB_COMMAND) {
      NEXT_ID++; 
    }
  }

  public int getId() {
    return id;
  }

  protected void close() throws IOException {
    if (xsb != null) {
      //Dbg.dbg("DESTROY: " + System.identityHashCode(this));
      xsb.destroy();
      xsb = null;
      //Dbg.dbg("XSBIN: " + System.identityHashCode(this));
      xsbin.close();
      xsbin = null;
      //Dbg.dbg("XSBOUT: " + System.identityHashCode(this));
      xsbout.close();
      xsbout = null;
      //Dbg.dbg("XSBERR: " + System.identityHashCode(this));
      xsberr.close();
      xsberr = null;
    }
  }

  protected void spawn() throws IOException {
    //Dbg.dbg("SPAWN: " + System.identityHashCode(this));
    xsb = xsbBuild.start();
    xsbin = new BufferedWriter(new OutputStreamWriter(xsb.getOutputStream()));
    xsbout = new BufferedReader(new InputStreamReader(xsb.getInputStream()));
    xsberr = new BufferedReader(new InputStreamReader(xsb.getErrorStream()));
    queryCount = 0;
  }

  public void reset() throws IOException {
    close();
    spawn();
  }

  public void submit(String query) throws IOException {
    // Add an extra newline to flush the stream.
    String xsbinput = query + ".\n\n\n\n";
    write(xsbinput);
    flush();
    queryCount++;
  }

  public int getQueryCount() {
    return queryCount;
  }

  public void write(String input) throws IOException {
    xsbin.write(input, 0, input.length());
  }

  public void flush() throws IOException {
    xsbin.flush();
  }

  public int read() throws IOException {
    return xsbout.read();
  } 

  public int id() {
    return System.identityHashCode(this);
  }

  public String readErr() throws IOException {
    StringBuilder sb = new StringBuilder();
    boolean first = true;
    List<String> lines = readErrLines();
    if (lines == null) return null;
    for (String ln : lines) {
      if (first) {
        first = false;
      } else {
        sb.append("\n");
      }
      sb.append(ln);
    }
    return sb.toString();
  }

  public List<String> readErrLines() throws IOException {
    List<String> ret = new ArrayList<String>();
    if (xsberr == null) {
      Dbg.err("Error stream is null for XSB process with query count " + queryCount);
      return null;
    }
    while (xsberr.ready()) {
      String line = xsberr.readLine();
      // Skip empty lines.
      if (line.trim().equals("")) continue;
      ret.add(line);
    }

    return ret;
  }
}
