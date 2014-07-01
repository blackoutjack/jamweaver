package edu.wisc.cs.jam.xsb;

import java.io.File;
import java.io.IOException;

import java.util.List;
import java.util.ArrayList;

import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.JAM;
import edu.wisc.cs.jam.Semantics;
import edu.wisc.cs.jam.Clause;

public abstract class XSBInterface {
  protected enum Mode {
    UNINITIALIZED,
    SYMBOLIC,
    CONCRETE,
  }

  protected static final String LIB_DIR;

  protected static final int QUERY_RESET = 100;
  // This should be high enough to allow compilation of funfacts.P
  // and typefacts.P.
  protected static final int QUERY_TIMEOUT = JAM.Opts.queryTimeout;

  protected QueryCache queryCache;

  // An ordered set of directories from which XSB modules are loaded
  protected List<String> loadDirectories;

  private XSBProcess xsbProcess;
  Mode currentMode;

  protected int queryCount = 0;
  protected int cacheCount = 0;

  static {
    LIB_DIR = JAMConfig.JAMPKG + "/lib";
  }

  protected void init(Semantics s) {
    loadDirectories = new ArrayList<String>();
    loadDirectories.add(LIB_DIR);
    queryCache = new QueryCache(s);
  }

  public void prime() {
    // Trigger compilation of polprops.P, funfacts.P and typefacts.P.
    Dbg.out("Compiling XSB modules", 3);
    XSBProcess xsb = getProcess(false);
    Dbg.out("Done with XSB compilation", 3);
    putProcess(xsb);
  }

  public void addLoadDirectory(String dir) {
    // Remove the directory if it's already on the list.
    removeLoadDirectory(dir);

    // Newly added directories should override previous ones.
    // This is needed to pick up the correct funfacts.P.
    loadDirectories.add(0, dir);
  }
  
  public boolean removeLoadDirectory(String dir) {
    return loadDirectories.remove(dir);
  }

  protected synchronized void reset(XSBProcess xsb, Mode mode) {
    // Refresh the process.
    try {
      xsb.reset();
    } catch (IOException ex) {
      Dbg.err("Unable to reset XSB process " + xsb.id() + ": " + ex.getMessage());
      setMode(xsb, Mode.UNINITIALIZED);
      return;
    }

    // Load the necessary modules. The app-specific load directory
    // needs to be first so that the funfacts.P takes precedence over
    // the default.
    int dircnt = 0;

    List<String> inputs = new ArrayList<String>();
    inputs.add("set_global_compiler_options([quit_on_error,optimize]).\n\n\n\n");

    for (; dircnt<loadDirectories.size(); dircnt++) {
      String dir = loadDirectories.get(dircnt);
      inputs.add("assert(library_directory('" + dir + "')).\n\n\n\n");
    }
    inputs.add("[" + (mode == Mode.SYMBOLIC ? JAMConfig.SEMANTICS_SYMBOLIC_MODULE : JAMConfig.SEMANTICS_CONCRETE_MODULE) + "].\n\n\n\n");
    File userFunctionFile = new File(loadDirectories.get(0), "user_functions.dat");
    String uffile = userFunctionFile.getAbsolutePath();
    if (userFunctionFile.exists())
      inputs.add("init('" + uffile + "').\n\n\n\n");

    int inputCnt = inputs.size();
    try {
      for (int i=0; i<inputCnt; i++) {
        String input = inputs.get(i);
        xsb.write(input);
      }
      xsb.flush();
    } catch (IOException ex) {
      Dbg.err("Error writing to XSB process " + xsb.id() + ": " + ex.getMessage());
      setMode(xsb, Mode.UNINITIALIZED);
      return;
    }

    try {
      for (int i=0; i<inputCnt; i++) {
        String ok = readYesNo(xsb);
      }
    } catch (IOException ex) {
      Dbg.err("Error reading from XSB process " + xsb.id() + ": " + ex.getMessage());
      setMode(xsb, Mode.UNINITIALIZED);
      return;
    }

    // Note the current mode of the process.
    setMode(xsb, mode);
  }

  protected abstract Mode getMode(XSBProcess p);
  protected abstract void setMode(XSBProcess p, Mode m);

  protected XSBProcess initProcess() {
    XSBProcess p = new XSBProcess();
    setMode(p, Mode.UNINITIALIZED);
    return p;
  }

  protected abstract void putProcess(XSBProcess xsb);
  protected abstract XSBProcess getProcess(boolean concrete);

  protected String readYesNo(XSBProcess xsb) throws IOException {
    //String s = "";

    int yespos = 0;
    int nopos = 0;
    int c = 0;
    while ((c = xsb.read()) > -1) {
      //System.out.print((char)c);
      //s += (char)c; // %%% Remove this!
      switch (c) {
        case '\n':
          yespos = 1;
          nopos = 1;
          break;
        case 'n':
          yespos = 0;
          nopos = nopos == 1 ? 2 : 0;
          break;
        case 'o':
          yespos = 0;
          nopos = nopos == 2 ? 3 : 0;
          break;
        case 'y':
          yespos = yespos == 1 ? 2 : 0;
          nopos = 0;
          break;
        case 'e':
          yespos = yespos == 2 ? 3 : 0;
          nopos = 0;
          break;
        case 's':
          yespos = yespos == 3 ? 4 : 0;
          nopos = 0;
          break;
        default:
          yespos = 0;
          nopos = 0;
          break;
      }

      if (yespos == 4) {
        return "yes";
      }
      if (nopos == 3) {
        return "no";
      }
    }

    return null;
  }
 
  protected String getError(XSBProcess xsb) {
    try {
      return xsb.readErr();
    } catch (IOException ex) {
      return "Exception while reading error stream: " + ex.getMessage();
    }
  }

  public abstract List<Boolean> query(List<Clause> clauses, boolean onError);
  public abstract List<Boolean> query(List<Clause> clauses, List<Clause> prereqs, boolean onError);

  public boolean query(Clause clause, Clause prereq) throws IOException {
    try {
      if (prereq != null && !query(prereq)) {
        return false;
      }
    } catch (IOException ex) { 
      Dbg.err("Error during prerequisite query " + prereq.getQueryId() + ": " + ex.getMessage());
      // Continue with full query.
    }
    assert clause != null;
    return query(clause);
  }

  public boolean query(Clause clause) throws IOException {

    boolean ret = false;

    boolean concrete = clause.isConcrete();
    Boolean cached = queryCache.get(clause, concrete);

    if (cached == null) {
      XSBProcess xsb = getProcess(concrete);

      // Log queries that are not cached.
      clause.setQueryId(queryCount);
      queryCount++;
      if (JAM.Opts.debugQueries) {
        logQuery(clause, concrete);
      }

      long startTime = System.currentTimeMillis();
      String result = null;
      try {
        xsb.submit(clause.getQuery());
        result = readYesNo(xsb);
      } catch (IOException ex) {
        reset(xsb, getMode(xsb));
        putProcess(xsb);
        throw ex;
      }
      long stopTime = System.currentTimeMillis();
      long totalTime = stopTime - startTime;

      if (result == null) {
        reset(xsb, getMode(xsb));
        putProcess(xsb);
        throw new IOException("Null output from XSB for query " + clause.getQueryId());
      } 

      // Flush the error stream.
      String err = getError(xsb);
      if (JAM.Opts.debug) {
        if (err == null) {
          Dbg.err("XSB error stream is null for query " + clause.getQueryId());
        } else if (!err.equals("")) {
          Dbg.err("XSB error output for query " + clause.getQueryId() + ": " + err);
        }
      }

      if (result.equals("yes")) {
        ret = true;
      } else if (result.equals("no")) {
        ret = false;
      } else {
        reset(xsb, getMode(xsb));
        putProcess(xsb);
        throw new IOException("Unexpected output from XSB for query " + clause.getQueryId() + ": " + result);
      }

      putProcess(xsb);

      // Generate a log string to help with debugging.
      if (JAM.Opts.debugQueries) {
        logResult(clause, ret, totalTime, concrete);
      }

      queryCache.set(clause, ret, concrete);
    } else {
      // Use the cached value.
      ret = cached.booleanValue();

      // Log cached queries/result if debugQueries is on.
      // (Comment this out to avoid clutter.)
      // %%% Make optional
      clause.setQueryId(cacheCount);
      cacheCount++;
      if (JAM.Opts.debugQueries) {
        logQuery(clause, concrete, true);
        logResult(clause, ret, 0, concrete, true);
      }
    }

    return ret;
  }


  // Return a list of sentinels if the clause failed, or null if the 
  // clause succeeded.
  public List<String> sentinelQuery(Clause clause) throws IOException {
    // %%% This should be within a try block so that the process can be
    // %%% re-put.
    XSBProcess xsb = getProcess(true);

    if (JAM.Opts.debugQueries) {
      //FileUtil.writeToFile(clause.getQuery() + ".\n", "checking", true);
      clause.setQueryId(queryCount);
      queryCount++;
      if (JAM.Opts.debugQueries) {
        logQuery(clause, true);
      }
    }

    long startTime = System.currentTimeMillis();
    xsb.submit(clause.getQuery());
    String result = readYesNo(xsb);
    long stopTime = System.currentTimeMillis();
    long totalTime = stopTime - startTime;

    if (result == null) {
      String err = getError(xsb);
      throw new IOException("Unable to read output from XSB: " + err);
    }

    if (JAM.Opts.debugQueries) {
      logResult(clause, true, totalTime, true);
    }

    if (result.equals("yes")) {
      putProcess(xsb);
      return null;
    }

    if (result.equals("no")) {
      List<String> sentinels = xsb.readErrLines();
      putProcess(xsb);

      if (JAM.Opts.debugQueries) {
        StringBuilder sb = new StringBuilder();
        for (String sentinel : sentinels) {
          sb.append(sentinel);
          sb.append("\n");
        }
        FileUtil.writeToFile(sb.toString(), "queries-concrete", true);
      }

      return sentinels;
    }

    throw new IOException("Unexpected output from XSB: " + result);
  }

  // Escape XSB syntactic characters.
  public static String escapeString(String text) {
    return text.replace("'", "''").replace("\\", "\\\\").replace("\"","\\\\\"");
  }

  protected void logQuery(Clause clause, boolean concrete) {
    // Assume not cached.
    logQuery(clause, concrete, false);
  }

  // Log the query text before it's submitted.
  protected void logQuery(Clause clause, boolean concrete, boolean fromCache) {
    StringBuilder sb = new StringBuilder();
    sb.append("<");
    if (fromCache) {
      // Indicate that the query got a cache hit. 
      sb.append("C");
    }
    sb.append(clause.getQueryId());
    sb.append("> ");

    sb.append(clause.getQuery());
    sb.append(".\n");

    FileUtil.writeToFile(sb.toString(), "queries-" + (concrete ? "concrete" : "symbolic") , true);
  }

  protected void logResult(Clause clause, boolean result, long time, boolean concrete) {
    // Assume not from cache.
    logResult(clause, result, time, concrete, false);
  }

  // Log the results of a query.
  protected void logResult(Clause clause, boolean result, long time, boolean concrete, boolean fromCache) {
    StringBuilder sb = new StringBuilder();
    if (result) {
      sb.append("yes ");
    } else {
      sb.append("no ");
    }

    sb.append("<");
    if (fromCache) {
      // Indicate that the query got a cache hit. 
      sb.append("C");
    }
    sb.append(clause.getQueryId());
    sb.append("> ");

    String cdesc = clause.getDescription();
    if (cdesc != null) {
      sb.append(cdesc);
      sb.append(" ");
    }

    if (!JAM.Opts.suppressTime) {
      sb.append(time);
      sb.append("ms");
    }

    sb.append("\n");

    FileUtil.writeToFile(sb, "results-" + (concrete ? "concrete" : "symbolic") , true);
  }
}

