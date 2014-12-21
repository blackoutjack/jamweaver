package edu.wisc.cs.jam.xsb;

import java.io.File;
import java.io.IOException;

import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Callable;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.JAM;
import edu.wisc.cs.jam.Semantics;
import edu.wisc.cs.jam.Clause;

public class XSBSingleInterface extends XSBInterface {

  protected XSBProcess xsbProcess;
  protected Mode currentMode;

  public XSBSingleInterface(Semantics s) {
    init(s);
    xsbProcess = initProcess();
  }

  @Override
  protected Mode getMode(XSBProcess p) {
    return currentMode;
  }

  @Override
  protected void setMode(XSBProcess p, Mode m) {
    currentMode = Mode.UNINITIALIZED;
  }

  @Override
  protected void putProcess(XSBProcess xsb) { }

  protected XSBProcess getProcess(boolean concrete) {
    Mode mode = concrete ? Mode.CONCRETE : Mode.SYMBOLIC;
    XSBProcess p = xsbProcess;

    if (getMode(p) != mode) {
      reset(p, mode);
    } else if (p.getQueryCount() > QUERY_RESET) {
      // Reestablish the XSB process whenever we hit a set number of
      // queries to mitigate memory leaks.
      reset(p, mode);
    }
    return p;
  }

  // This version of |query| will first evaluate the satisfiability
  // of the |prereqs|, and then only evaluate the corresponding item
  // from |clauses| if the prerequisite is satisfied.
  @Override
  public List<Boolean> query(List<Clause> clauses, List<Clause> prereqs, boolean onError) {
    if (prereqs == null || prereqs.size() == 0) {
      return query(clauses, onError);
    }
    if (clauses.size() != prereqs.size()) {
      Dbg.warn("Prerequisites list does not match clause list for batch query");
      return query(clauses, onError);
    }

    List<Boolean> ret = new ArrayList<Boolean>();
    for (int i=0; i<clauses.size(); i++) {
      Clause prereq = prereqs.get(i);
      Clause clause = clauses.get(i);
      try {
        boolean result = query(clause, prereq);
        ret.add(Boolean.valueOf(result));
      } catch (IOException ex) {
        Dbg.err("Error during query " + clause.getQueryId() + ": " + ex.getMessage());
        ret.add(Boolean.valueOf(onError));
      }
    }
    return ret;
  }

  @Override
  public List<Boolean> query(List<Clause> clauses, boolean onError) {
    List<Boolean> ret = new ArrayList<Boolean>();
    for (Clause clause : clauses) {
      try {
        boolean result = query(clause);
        ret.add(Boolean.valueOf(result));
      } catch (IOException ex) {
        Dbg.err("Error during query " + clause.getQueryId() + ": " + ex.getMessage());
        ret.add(Boolean.valueOf(onError));
      }
    }
    return ret;
  }

  @Override
  public void close() {
    try {
      xsbProcess.close();
    } catch (IOException ex) {
      Dbg.err("Unable to shutdown XSB process " + xsbProcess.getId());
    }
  }
}


