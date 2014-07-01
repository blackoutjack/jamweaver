package edu.wisc.cs.jam.xsb;

import java.io.IOException;

import java.util.Map;
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

import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.JAM;
import edu.wisc.cs.jam.Semantics;
import edu.wisc.cs.jam.Clause;

public class XSBMultiInterface extends XSBInterface {

  protected LinkedBlockingQueue<XSBProcess> xsbProcesses;
  protected Map<XSBProcess,Mode> currentModes;

  public XSBMultiInterface(Semantics s) {
    init(s);

    xsbProcesses = new LinkedBlockingQueue<XSBProcess>();
    currentModes = new ConcurrentHashMap<XSBProcess,Mode>();
    for (int i=0; i<JAM.Opts.queryThreads; i++) {
      xsbProcesses.add(initProcess());
    }
  }

  protected Mode getMode(XSBProcess p) {
    return currentModes.get(p);
  }

  protected void setMode(XSBProcess p, Mode m) {
    currentModes.put(p, m);
  }

  protected void putProcess(XSBProcess xsb) {
    //Dbg.dbg("PUT: " + xsb.id());
    xsbProcesses.add(xsb);
  }

  protected XSBProcess getProcess(boolean concrete) {
    Mode mode = concrete ? Mode.CONCRETE : Mode.SYMBOLIC;
    // This blocks until a process is available.
    XSBProcess p = null;
    while (p == null) {
      try {
        p = xsbProcesses.take();
      } catch (InterruptedException ex) { }
    }
    //Dbg.dbg("GET: " + p.id());

    synchronized(p) {
      if (getMode(p) != mode) {
        //Dbg.dbg("RESET 1: " + p.id() + " MODE: " + mode);
        reset(p, mode);
      } else if (p.getQueryCount() > QUERY_RESET) {
        //Dbg.dbg("RESET 2: " + p.id() + " MODE: " + mode);
        // Reestablish the XSB process whenever we hit a set number of
        // queries to mitigate memory leaks.
        reset(p, mode);
      }
    }
    return p;
  }

  public class Querier implements Callable<Boolean> {
    protected Clause clause;
    XSBProcess xsb;
    boolean killed = false;
    
    public Querier(Clause c) {
      clause = c;
    }

    public Boolean call() {
      boolean ret = false;

      // This will block until there's a process available.
      xsb = getProcess(clause.isConcrete());

      // In debug mode, only log queries that are not cached.
      if (JAM.Opts.debugQueries) {
        logQuery(clause, clause.isConcrete());
      }

      long startTime = System.currentTimeMillis();
      String result = null;
      try {
        xsb.submit(clause.getQuery());
        result = readYesNo(xsb);
        if (Thread.currentThread().isInterrupted()) {
          throw new IOException("Interrupted while reading query result.");
        }
      } catch (IOException ex) {
        if (!killed) {
          Dbg.err("IOException during query " + clause.getQueryId() + ": " + ex.getMessage());
          kill();
        }
        return null;
      }
      long stopTime = System.currentTimeMillis();
      long totalTime = stopTime - startTime;

      if (result == null) {
        if (!killed) {
          Dbg.err("Null output from XSB for query " + clause.getQueryId());
          kill();
        }
        return null;
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
        if (!killed) {
          Dbg.err("Unexpected output from XSB for query " + clause.getQueryId() + ": " + result);
          kill();
        }
        return null;
      }

      // Generate a log string to help with debugging.
      if (JAM.Opts.debugQueries) {
        logResult(clause, ret, totalTime, clause.isConcrete());
      }

      putProcess(xsb);
      return new Boolean(ret);
    }

    public synchronized void kill() {
      if (killed) return;
      killed = true;
      if (xsb != null) {
        // Restart the process for further use.
        Mode curMode = getMode(xsb);
        //Dbg.dbg("KILL: " + xsb.id() + " MODE: " + curMode);
        reset(xsb, curMode);
        putProcess(xsb);
      }
    }
  }

  // If the prerequisite is not satisfiable, then the corresponding
  // clause is not. Therefore we just replace the clause with its prereq
  // in the list in that case.
  protected List<Clause> filterByPrerequisite(List<Clause> clauses, List<Clause> prereqs) {
    ExecutorService pool = Executors.newFixedThreadPool(JAM.Opts.queryThreads);

    List<Future<Boolean>> futureResults = new ArrayList<Future<Boolean>>();
    List<Querier> queriers = new ArrayList<Querier>();
    List<Boolean> results = new ArrayList<Boolean>();
    synchronized (queryCache) {
      for (Clause c : prereqs) {
        // A null prerequisite means it is satisfied.
        if (c == null) {
          results.add(queryCache.getYes());
          futureResults.add(null);
          queriers.add(null);
          continue;
        }

        boolean concrete = c.isConcrete();
        assert !concrete;

        Boolean cached = queryCache.get(c, concrete);

        if (cached == null) {
          c.setQueryId(queryCount);
          queryCount++;
          results.add(null);
          Future<Boolean> result = queryCache.getPending(c);
          Querier q = null;
          if (result == null) {
            q = new Querier(c);
            result = pool.submit(q);
            queryCache.setPending(c, result);
          }
          futureResults.add(result);
          queriers.add(q);
        } else {
          c.setQueryId(cacheCount);
          cacheCount++;

          results.add(cached);
          futureResults.add(null);
          queriers.add(null);

          // If debugQueries is on, log cached queries.
          // (Comment this out to avoid clutter in the logs.)
          if (JAM.Opts.debugQueries) {
            logQuery(c, concrete, true);
            logResult(c, cached.booleanValue(), 0L, concrete, true);
          }
        }
      }
    }

    pool.shutdown();

    collectBatchResults(prereqs, futureResults, queriers, results, true);

    List<Clause> ret = new ArrayList<Clause>();
    for (int i=0; i<results.size(); i++) {
      if (results.get(i).booleanValue()) {
        ret.add(clauses.get(i));
      } else {
        ret.add(prereqs.get(i));
      }
    }

    return ret;
  }

  protected void collectBatchResults(List<Clause> clauses, List<Future<Boolean>> futures, List<Querier> queriers, List<Boolean> results, boolean onError) {
    for (int i=0; i<futures.size(); i++) {
      Future<Boolean> future = futures.get(i);
      // A null placeholder in the |futures| list indicates that the
      // result is already entered in |results|.
      if (future == null) {
        assert results.get(i) != null;
        continue;
      }

      Clause clause = clauses.get(i);
      assert clause != null;

      Boolean sat = null;
      try {
        sat = future.get(QUERY_TIMEOUT, TimeUnit.SECONDS);
        if (sat == null) {
          // This indicates that there was an error within the Querier.
          // Use the |onError| value. Don't add the result to the cache.
          sat = new Boolean(onError);
          queryCache.removePending(clause);
        } else {
          queryCache.set(clause, sat, clause.isConcrete());
        }
      } catch (TimeoutException ex) {
        Dbg.err("Timeout waiting for query " + clause.getQueryId());
        sat = new Boolean(onError);
        queryCache.removePending(clause);
        Querier q = queriers.get(i);
        if (q != null) q.kill();
      } catch (InterruptedException ex) {
        Dbg.err("Interrupted while retrieving result " + clause.getQueryId() + ": " + ex.getMessage());
        sat = new Boolean(onError);
        queryCache.removePending(clause);
        Querier q = queriers.get(i);
        if (q != null) q.kill();
      } catch (ExecutionException ex) {
        Dbg.err("ExecutionException while retrieving result " + clause.getQueryId() + ": " + ex.getMessage());
        sat = new Boolean(onError);
        queryCache.removePending(clause);
        Querier q = queriers.get(i);
        if (q != null) q.kill();
      }

      assert results.get(i) == null;
      results.set(i, sat);
    }
  }

  // This version of batch query will first evaluate the satisfiability
  // of the |prereqs|, and then only evaluate the corresponding item
  // from |clauses| if the prerequisite is satisfied.
  public List<Boolean> query(List<Clause> clauses, List<Clause> prereqs, boolean onError) {
    if (prereqs == null || prereqs.size() == 0) {
      return query(clauses, onError);
    }
    if (clauses.size() != prereqs.size()) {
      Dbg.warn("Prerequisites list does not match clause list for batch query");
      return query(clauses, onError);
    }
    List<Clause> filtered = filterByPrerequisite(clauses, prereqs);
    return query(filtered, onError);
  }

  public List<Boolean> query(List<Clause> clauses, boolean onError) {
    ExecutorService pool = Executors.newFixedThreadPool(JAM.Opts.queryThreads);

    List<Querier> queriers = new ArrayList<Querier>();
    List<Future<Boolean>> results = new ArrayList<Future<Boolean>>();
    List<Boolean> ret = new ArrayList<Boolean>();
    synchronized (queryCache) {
      for (Clause c : clauses) {
        boolean concrete = c.isConcrete();

        Boolean cached = queryCache.get(c, concrete);

        if (cached == null) {
          ret.add(null);
          Future<Boolean> result = queryCache.getPending(c);
          Querier q = null;
          if (result == null) {
            c.setQueryId(queryCount);
            queryCount++;
            q = new Querier(c);
            result = pool.submit(q);
            queryCache.setPending(c, result);
          }
          results.add(result);
          queriers.add(q);
        } else {

          ret.add(cached);
          results.add(null);
          queriers.add(null);

          // If debugQueries is on, log cached queries.
          // (Comment this out to avoid clutter.)
          // %%% Make optional
          c.setQueryId(cacheCount);
          cacheCount++;
          if (JAM.Opts.debugQueries) {
            logQuery(c, concrete, true);
            logResult(c, cached.booleanValue(), 0L, concrete, true);
          }
        }
      }
    }

    pool.shutdown();

    collectBatchResults(clauses, results, queriers, ret, onError);

    return ret;
  }

}

