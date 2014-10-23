package edu.wisc.cs.jam.interpret;

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

import java.io.Reader;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.Writer;
import java.io.BufferedWriter;
import java.io.OutputStreamWriter;
import java.io.IOException;

import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.Dbg;

public class SpiderMonkey {
  private static final List<String> INTERP_COMMAND;
  private Reader interpout;
  private Reader interperr;
  private Writer interpin;

  private static int queryCount = 0;

  static {
    // %%% Generalize, link with persist.cpp
    String INTERP_EXE = JAMConfig.JAMPKG + "/jamscript/mozilla-esr17/obj-release/browser/dist/bin/js";

    String[] _INTERP_COMMAND = {
      INTERP_EXE,
      "-e",
    };
    INTERP_COMMAND = Arrays.asList(_INTERP_COMMAND);
  }
  
  public String evaluate(String code) {
    List<String> cmd = new ArrayList<String>(INTERP_COMMAND);
    String fullcode = "print(" + code + ")";
    cmd.add(fullcode);
    ProcessBuilder interpBuild = new ProcessBuilder(cmd);

    String ret = null;
    try {
      Process interp = interpBuild.start();

      interpin = new BufferedWriter(new OutputStreamWriter(interp.getOutputStream()));
      interpout = new BufferedReader(new InputStreamReader(interp.getInputStream()));
      interperr = new BufferedReader(new InputStreamReader(interp.getErrorStream()));

      ret = read(); 
      String err = readErr();
      if (err != null && !err.equals("")) {
        Dbg.err("SpiderMonkey error: " + err);
      }
    } catch(IOException ex) {
      Dbg.err("Unable to call SpiderMonkey process: " + ex.getMessage());
    }

    if (ret != null) ret = ret.trim();

    queryCount++;

    return ret;
  }

  protected String read() throws IOException {
    StringBuilder sb = new StringBuilder();
    int i = 0;
    while ((i = interpout.read()) > -1) {
      char c = (char)i;
      sb.append(c);
    }

    return sb.toString();
  }

  protected String readErr() throws IOException {
    StringBuilder sb = new StringBuilder();
    int i = 0;
    while ((i = interperr.read()) > -1) {
      char c = (char)i;
      sb.append(c);
    }

    return sb.toString();
  }
}
