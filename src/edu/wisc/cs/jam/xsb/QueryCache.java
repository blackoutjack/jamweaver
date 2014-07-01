
package edu.wisc.cs.jam.xsb;

import java.io.File;
import java.io.IOException;
import java.io.BufferedOutputStream;
import java.io.BufferedInputStream;
import java.io.FileOutputStream;
import java.io.FileInputStream;

import java.util.Map;
import java.util.HashMap;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Future;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import javax.xml.bind.DatatypeConverter;

import edu.wisc.cs.jam.Semantics;
import edu.wisc.cs.jam.Clause;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.Dbg;

public class QueryCache {

  private final String CACHE_HASH = "SHA";
  private File queryCacheConcrete;
  private File queryCacheSymbolic;
  private MessageDigest hasher;
  private Map<String,Boolean> concreteCache;
  private Map<String,Boolean> symbolicCache;
  private Map<String,Future<Boolean>> pending;

  // Reuse value tokens rather than repeatedly creating new ones.
  private static Boolean yes;
  private static Boolean no;

  static {
    yes = new Boolean(true);
    no = new Boolean(false);
  }

  public QueryCache(Semantics s) {
    try {
      hasher = MessageDigest.getInstance(CACHE_HASH);
    } catch (NoSuchAlgorithmException ex) {
      System.err.println("Unable to initialize query cache hasher.");
    }
    pending = new ConcurrentHashMap<String,Future<Boolean>>();

    int hc = s.hashCode();
    String concreteFile = "concrete" + hc + ".bin";
    String symbolicFile = "symbolic" + hc + ".bin";
    queryCacheConcrete = new File(FileUtil.CACHE_DIR, concreteFile);
    queryCacheSymbolic = new File(FileUtil.CACHE_DIR, symbolicFile);
    FileUtil.writeToMain("concrete-query-cache:" + concreteFile + "\n", JAMConfig.INFO_FILENAME, true);
    FileUtil.writeToMain("symbolic-query-cache:" + symbolicFile + "\n", JAMConfig.INFO_FILENAME, true);
  }

  // Load the entire cache into memory to avoid constant file IO grepping.
  // %%% We'll have to see about this and memory limitations. If it's taxing,
  // implement a file-based hashmap. Also possibly use a per-subject-program
  // cache rather than a global one.
  protected void load(boolean concrete) {
    // Initialize the cache structure.
    Map<String,Boolean> cache = null;
    if (concrete) {
      concreteCache = new ConcurrentHashMap<String,Boolean>();
      cache = concreteCache;
    } else {
      symbolicCache = new ConcurrentHashMap<String,Boolean>();
      cache = symbolicCache;
    }

    File cacheFile = concrete ? queryCacheConcrete : queryCacheSymbolic;
    if (!cacheFile.exists()) {
      Dbg.out((concrete ? "Concrete" : "Symbolic") + " cache file not found: " + cacheFile.toString(), 3);
      return;
    }
    Dbg.out((concrete ? "Concrete" : "Symbolic") + " cache file found: " + cacheFile.toString(), 3);

    try {
      BufferedInputStream r = new BufferedInputStream(new FileInputStream(cacheFile));
      // read() returns int rather than byte to allow -1 to be EOF.
      int val = 0;
      byte[] qbytes = new byte[hasher.getDigestLength()];
      while ((r.read(qbytes)) != -1) {
        val = r.read();
        //String key = new String(qbytes, "ISO-8859-1");
        cache.put(DatatypeConverter.printHexBinary(qbytes), (val == 1 ? yes : no));
      }
      r.close();
    } catch (IOException ex) {
      System.err.println("Error loading " + (concrete ? "concrete" : "symbolic") + " query cache: " + ex.getMessage());
    }
  }

  // Generate a hash of the query clause. This method is synchronized
  // to prevent observed ArrayIndexOutOfBounds exceptions.
  protected synchronized String getKey(Clause clause) {
    String q = clause.getQuery();
    byte[] hashbytes = hasher.digest(q.getBytes());
    return DatatypeConverter.printHexBinary(hashbytes);
  }

  public Boolean getYes() {
    return yes;
  }

  public Boolean getNo() {
    return no;
  }

  public Boolean get(Clause clause, boolean concrete) {
    Map<String,Boolean> cache = concrete ? concreteCache : symbolicCache;
    if (cache == null) {
      load(concrete);
      cache = concrete ? concreteCache : symbolicCache;
      assert cache != null : "Error in the query cache loading logic.";
    }
    String key = getKey(clause);
    return cache.get(key);
  }

  public void setPending(Clause c, Future<Boolean> f) {
    String ctxt = getKey(c);
    pending.put(ctxt, f);
  }

  public Future<Boolean> getPending(Clause c) {
    String ctxt = getKey(c);
    return pending.get(ctxt);
  }

  public Future<Boolean> removePending(Clause c) {
    String ctxt = getKey(c);
    return pending.remove(ctxt);
  }

  public void set(Clause clause, Boolean result, boolean concrete) {
    String key = getKey(clause);
    Map<String,Boolean> cache = concrete ? concreteCache : symbolicCache;
    cache.put(key, result.booleanValue() ? yes : no);
    // Clear the pending entry; otherwise the Future is leaked.
    pending.remove(key);
    try {
      byte[] keybytes = DatatypeConverter.parseHexBinary(key);
      int v = result.booleanValue() ? 1 : 0;

      File cacheFile = concrete ? queryCacheConcrete : queryCacheSymbolic;
      BufferedOutputStream w = new BufferedOutputStream(new FileOutputStream(cacheFile, true));
      w.write(keybytes);
      w.write(v);
      w.close();
    } catch (IOException ex) {
      System.err.println("Error writing to " + (concrete ? "concrete" : "symbolic") + " cache: " + ex.getMessage());
    }
  }

}
