package edu.wisc.cs.jam.bdd;

import java.math.BigInteger;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.text.NumberFormat;
import java.io.BufferedWriter;
import java.io.IOException;

import net.sf.javabdd.BDD;
import net.sf.javabdd.BDD.BDDToString;
import net.sf.javabdd.BDDDomain;
import net.sf.javabdd.BDDFactory;
import net.sf.javabdd.BuDDyFactory;

import edu.wisc.cs.jam.Predicate;
import edu.wisc.cs.jam.PredicateValue;
import edu.wisc.cs.jam.DataState;
import edu.wisc.cs.jam.RelationDomain;
import edu.wisc.cs.jam.Dbg;

public class BDDRelationDomain extends RelationDomain {

  private static final int NODENUM = 100000;
  private static final int CACHESIZE = 10000;
  private static final double CACHERATIO = 0.0625;

  private static BDDFactory factory;
  private static Map<Predicate,BDDDomain[]> globalPredicateDomains;
  private static Map<Predicate,Integer> globalPredicateIndexes;

  private Map<Predicate,BDDDomain[]> predicateDomains;

  private BDDRelation idRelation;

  private BDD one; 
  private BDD zero;

  // Dummy method to prevent JavaBDD from printing garbage (stats).
  public static void gcCallback() { }
  public static void resizeCallback() { }

  @Override
  public void reset() {
    Dbg.memory("BDDRelationDomain pre-reset");
    factory.reset();
    predicateDomains.clear();
    globalPredicateDomains.clear();
    globalPredicateIndexes.clear();
  }

  // As this is the only constructor, we can guarantee that factory
  // and domain are non-null for all BDDRelationFactory objects.
  public BDDRelationDomain(List<Predicate> preds) {
    setVars(preds);
    idRelation = null;
    
    synchronized (getClass()) {
      if (factory == null) {
        factory = BDDFactory.init("buddy", NODENUM, CACHESIZE);
        factory.setCacheRatio(CACHERATIO);
        try {
          factory.registerGCCallback(null, BDDRelationDomain.class.getMethod("gcCallback", new Class[0]));
          factory.registerResizeCallback(null, BDDRelationDomain.class.getMethod("resizeCallback", new Class[0]));
        } catch (NoSuchMethodException ex) {
          System.err.println("Error suppressing JavaBDD garbage collection output.");
        }

        globalPredicateDomains = new HashMap<Predicate,BDDDomain[]>();
        globalPredicateIndexes = new HashMap<Predicate,Integer>();
      }

      // There is one pair of domains per predicate.
      predicateDomains = new HashMap<Predicate,BDDDomain[]>();

      // %%% Temporary: will not work with multiple threads
      reset();

      for (int i=0; i<preds.size(); i++) {
        Predicate p = preds.get(i);
        addVar(i, p);
      }

    }
	}

  public void addVar(int i, Predicate p) {
    BDDDomain[] doms = globalPredicateDomains.get(p);
    Integer idx = globalPredicateIndexes.get(p);
    if (doms == null) {
      //int i = factory.numberOfDomains();
      int[] domSizes = {2, 2};
      doms = factory.extDomain(domSizes);
      doms[0].setName(i + "");
      doms[1].setName(i + "'");
      globalPredicateDomains.put(p, doms);
      idx = new Integer(globalPredicateIndexes.size());
      globalPredicateIndexes.put(p, idx);
    }
   
    predicateDomains.put(p, doms);
  }

  @Override
  public BDDRelation getFalseRelation() {
    return new BDDRelation(this, getZero());
  }

  @Override
  public BDDRelation getTrueRelation() {
    return new BDDRelation(this, getOne());
  }

  @Override
  public BDDRelation getIdRelation() {
    if (idRelation == null) {
      BDD id = null;
      synchronized (getClass()) {
        //id = preDomain.buildEquals(postDomain);
        id = getOne();
        for (Predicate p : predicateDomains.keySet()) {
          BDDDomain[] doms = predicateDomains.get(p);
          BDD pre = doms[0].ithVar(0);
          BDD post = doms[1].ithVar(0);
          id.andWith(pre.biimp(post));
        }
      }

      //id.printDot();
      idRelation = new BDDRelation(this, id);
    }
  
    return new BDDRelation(idRelation);
  }

  // Package-private methods.

  BDD getZero() {
    synchronized (getClass()) {
      if (zero == null) {
        zero = factory.zero();
      }
      return zero.id();
    }
  }

  BDD getOne() {
    synchronized (getClass()) {
      if (one == null) {
        one = factory.one();
      }
      return one.id();
    }
  }

  BDD getEdge(DataState s0, DataState s1) {
    BDD e = getOne();
    synchronized (getClass()) {
      for (PredicateValue pv : s0.getValues()) {
        if (pv.isEventValue()) continue;
        e.andWith(getBDD(pv, true));
      }
      for (PredicateValue pv : s1.getValues()) {
        if (pv.isEventValue()) continue;
        e.andWith(getBDD(pv, false));
      }
    }
    
    return e;
  }

  BDD getBDD(PredicateValue pv, boolean pre) {
    BDDDomain[] doms = predicateDomains.get(pv.getPredicate());
    assert doms != null : "Invalid bdd predicate: " + pv.getPredicate();

    BDDDomain dom = pre ? doms[0] : doms[1];

    // BDDDomain.ithVar(0) returns the predicate's node with false value.
    BDD ret = pv.getValue() ? dom.ithVar(1) : dom.ithVar(0);

    return ret;
  }

  // This returns the disjoint representation of the BDD. For example,
  // 
  // <0:0,0':0><0:1,0':1>
  //
  // for the single variable identity relation.
  String toNormalizedString(BDD bdd) {
    synchronized (getClass()) {
      return bdd.toStringWithDomains();
    }
  }

  // Load a BDD from a file, assuming the structural representation
  // produced by outputBDD(String, BDDRelation).
  public BDD loadBDD(String filename) {
    BDD ret = null;
    try {
      synchronized (getClass()) {
        ret = factory.load(filename);
      }
    } catch (IOException ex) {
      Dbg.err("Unable to load BDD from file: " + filename);
    }
    return ret;
  }

  // Output the structural representation of a BDD to a file.
  public void outputBDD(String filename, BDDRelation rel) {
    try {
      synchronized (getClass()) {
        factory.save(filename, rel.getBDD());
      }
    } catch (IOException ex) {
      Dbg.err("Unable to save BDD structure: " + rel);
    }
  }

  // Append the structural representation of a BDD to the given stream.
  public void outputBDD(BufferedWriter out, BDDRelation rel) {
    try {
      synchronized (getClass()) {
        factory.save(out, rel.getBDD());
      }
    } catch (IOException ex) {
      Dbg.err("Unable to output BDD structure: " + rel);
    }
  }

  public void outputAll() {
    synchronized (getClass()) {
      factory.printAll();
    }
  }

  /*
  class BDDToNormalString extends BDDToString {

    public BDDToNormalString() {
      super();
    }

    @Override
    public String elementName(int i, BigInteger j) {
      int pidx = i / 2;
      int pmod = i % 2;

      assert pidx < predicateIndexes.length : "Invalid domain index: " + i;
      //assert j == 0 || j == 1 : "Invalid element index: " + j;

      StringBuilder sb = new StringBuilder();
      sb.append(predicateIndexes[pidx]);
      if (pmod == 1) {
        sb.append("'");
      }
      sb.append(":");
      sb.append(j);

      return sb.toString();
    }
  }
  */
}

