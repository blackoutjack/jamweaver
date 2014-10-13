package edu.wisc.cs.jam.bdd;

import java.util.Map;
import java.util.HashMap;
import java.util.Set;
import java.util.HashSet;
import java.util.List;
import java.util.ArrayList;
import java.io.BufferedWriter;
import java.io.StringWriter;
import java.io.PrintStream;
import java.io.IOException;
import java.io.File;
import java.io.FileNotFoundException;

import java.util.BitSet;

import net.sf.javabdd.BDD;
import net.sf.javabdd.BDDDomain;
import net.sf.javabdd.BDDException;

import edu.wisc.cs.jam.DataState;
import edu.wisc.cs.jam.Predicate;
import edu.wisc.cs.jam.PredicateValue;
import edu.wisc.cs.jam.Relation;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.JAM;

public class BDDRelation implements Relation {

  private BDD bdd;
  private BDDRelationDomain domain;

  // This notes whether the delta BDDs should be used when representing
  // this relation as a string. This is true typically if this relation
  // was copied from the id relation.
  private boolean useDelta;

  BDDRelation(BDDRelationDomain dom, BDD b) {
    domain = dom;
    bdd = b;
    useDelta = false;
  }

  protected BDDRelation(BDDRelation orig) {
    this(orig.getDomain(), orig.getBDD());
    useDelta = orig.useDelta;
  }

  protected BDD getBDD() {
    synchronized (domain.getClass()) {
      try {
        return bdd.id();
      } catch (BDDException ex) {
        Dbg.err("BDD error: " + ex.getMessage());
        return domain.getOne();
      }
    }
  }

  protected BDD getIdDeltaMinus() {
    BDD idDeltaMinus = domain.getIdRelation().getBDD();
    idDeltaMinus.andWith(getBDD().not());
    return idDeltaMinus;
  }

  protected BDD getIdDeltaPlus() {
    BDD idDeltaPlus = getBDD();
    idDeltaPlus.andWith(domain.getIdRelation().getBDD().not());
    return idDeltaPlus;
  }

  void setIsId() {
    useDelta = true;
  }

  @Override
  public BDDRelation copy() {
    synchronized (domain.getClass()) {
      return new BDDRelation(this);
    }
  }

  @Override
  public BDDRelationDomain getDomain() {
    return domain;
  }

  @Override
  public void addEdge(DataState s0, DataState s1) {
    BDD edge = domain.getEdge(s0, s1);
    addEdge(edge);
  }

  protected void addEdge(BDD edge) {
    synchronized (domain.getClass()) {
      bdd.orWith(edge);
    }
  }

  // %%% This could be prone to misuse if you think you're calling
  // %%% removeEdges.
  @Override
  public void removeEdge(DataState s0, DataState s1) {
    remove(domain.getEdge(s0, s1));
  }

  protected void remove(BDD edges) {
    synchronized (domain.getClass()) {
      BDD inv = edges.not();
      bdd.andWith(inv);
    }
  }

  @Override
  public void removeEdges(DataState pre, DataState post) {
    BDD edges = domain.getOne();
    synchronized (domain.getClass()) {
      if (pre != null) {
        for (PredicateValue pv : pre.getValues()) {
          if (pv.isPolicyValue()) continue;
          edges.andWith(domain.getBDD(pv, true));
        }
      }
      if (post != null) {
        for (PredicateValue pv : post.getValues()) {
          if (pv.isPolicyValue()) continue;
          edges.andWith(domain.getBDD(pv, false));
        }
      }
    }

    remove(edges);
  }

  @Override
  public void clearEdges() {
    synchronized (domain.getClass()) {
      bdd.andWith(domain.getZero());
      useDelta = false;
    }
  }

  @Override
  public BDDRelation removeSelfEdges(PredicateValue pv) {
    assert pv.isEventValue();
    BDDRelation ret = new BDDRelation(this);

    BDD edges = null;
    synchronized (domain.getClass()) {
      BDD pre = domain.getBDD(pv, true);
      BDD post = domain.getBDD(pv, false);
      edges = pre.and(post);
    }

    ret.remove(edges);
    return ret;
  }

  @Override
  public BDDRelation filterByPostState(PredicateValue pv) {
    BDDRelation ret = this.copy();

    // TRUE is inherently contained in all data states, and FALSE
    // is contained in none.
    if (pv.getPredicate() == Predicate.TRUE) {
      // Return the original relation.
      if (pv.getValue()) return ret;

      // Fall through here to get the false relation.
      ret.clearEdges();
      return ret;
    }

    synchronized (domain.getClass()) {
      BDD b = domain.getBDD(pv, false);
      ret.remove(b.not());
    }

    return ret;
  }

  @Override
  public boolean isEmpty() {
    synchronized (domain.getClass()) {
      return bdd.isZero();
    }
  }

  /*
  protected int printdot_rec(BDD b, PrintStream out, int current, boolean[] visited, HashMap map) {
      Integer ri = ((Integer) map.get(b));
      if (ri == null) {
          map.put(b.id(), ri = new Integer(++current));
      }
      int r = ri.intValue();
      if (visited[r])
          return current;
      visited[r] = true;
     
      // TODO: support labelling of vars.
      out.println(r+" [label=\""+b.var()+"\"];");

      BDD l = b.low(), h = b.high();
      Integer li = ((Integer) map.get(l));
      if (li == null) {
          map.put(l.id(), li = new Integer(++current));
      }
      int low = li.intValue();
      Integer hi = ((Integer) map.get(h));
      if (hi == null) {
          map.put(h.id(), hi = new Integer(++current));
      }
      int high = hi.intValue();

      out.println(r+" -> "+low+" [style=dotted];");
      out.println(r+" -> "+high+" [style=filled];");

      current = l.printdot_rec(out, current, visited, map);
      l.free();
      current = h.printdot_rec(out, current, visited, map);
      h.free();
      return current;
  }
  */

  /**
   * <p>Prints this BDD in dot graph notation.</p>
   * 
   * <p>Compare to bdd_printdot.</p>
   */
  /*
  public void printDot(BDD b, PrintStream out) {
    out.println("digraph G {");
    out.println("0 [shape=box, label=\"0\", style=filled, shape=box, height=0.3, width=0.3];");
    out.println("1 [shape=box, label=\"1\", style=filled, shape=box, height=0.3, width=0.3];");

    boolean[] visited = new boolean[b.nodeCount()+2];
    visited[0] = true; visited[1] = true;
    HashMap map = new HashMap();
    map.put(b.getFactory().zero(), new Integer(0));
    map.put(b.getFactory().one(), new Integer(1));
    printdot_rec(out, 1, visited, map);
    
    for (Iterator i = map.keySet().iterator(); i.hasNext(); ) {
        BDD b = (BDD) i.next();
        b.free();
    }
    out.println("}");
  }
  */

  /*
  public void printDot(File fl) {
    PrintStream ps = null;
    try {
      ps = new PrintStream(fl);
    } catch (FileNotFoundException ex) {
      Dbg.err("Unable to create dot file: " + fl.getPath());
      return;
    } catch (SecurityException ex) {
      Dbg.err("Access denied to write dot file: " + fl.getPath());
      return;
    }
    printDot(ps);
  }
  */

  // Print to STDOUT.
  public void printDot() {
    bdd.printDot();
  }

  /*
  protected String toStringHex() {
		List<DataState> relstates = domain.getCube();
		int statecnt = relstates.size();

    BitSet bits = new BitSet(statecnt * statecnt);
		for (int i=0; i<statecnt; i++) {
			DataState s0 = relstates.get(i);
			for (int j=0; j<statecnt; j++) {
				DataState s1 = relstates.get(j);
        BDD edge = domain.getEdge(s0, s1);
        BDD test = bdd.and(edge);
        if (!test.equals(domain.getZero())) {
          int idx = i * statecnt + j;
          bits.set(idx);
        }

    boolean found = false;
		for (int l=hexcnt-1; l>=0; l--) {
			int hexdig = 0;
			for (int m=0; m<4; m++) {
				int idx = l*4 + m;
				if (bits.get(idx)) {
					hexdig += (1 << (3 - m));
				}
			}

      // Don't append trailing zeros, which usually make up half of the
      // hex string.
      if (!found) {
        if (hexdig == 0) continue;
        found = true;
      }

			String hexchar = null;
			switch (hexdig) {
				case 15:
					hexchar = "f";
					break;
				case 14:
					hexchar = "e";
					break;
				case 13:
					hexchar = "d";
					break;
				case 12:
					hexchar = "c";
					break;
				case 11:
					hexchar = "b";
					break;
				case 10:
					hexchar = "a";
					break;
				default:
					hexchar = "" + hexdig;
					break;
			}
			sb.append(hexchar);
		}

    if (sb.length() == 0) {
      // %%% This should not happen unless there's some type of error.
      //System.err.println("Empty relation");
      return "0";
    }

    // Reverse the string since we built it in reverse order.
		return sb.reverse().toString();
  }
  */

  public String toStructureString() {
    if (bdd.equals(domain.getZero())) return "0";
    if (bdd.equals(domain.getOne())) return "1";
  
    /* %%% Debug
    Dbg.dbg("Before: " + domain.toNormalizedString(bdd));
    domain.outputBDD("bdds.txt", this);
    BDD after = domain.loadBDD("bdds.txt");
    Dbg.dbg("After: " + domain.toNormalizedString(after));
    */

    StringWriter sw = new StringWriter();
    BufferedWriter buf = new BufferedWriter(sw);
    domain.outputBDD(buf, this);
    try {
      buf.flush();
    } catch (IOException ex) {
      Dbg.err("Error while flushing buffer: " + ex.getMessage());
    }

    // %%% Make more efficient with StringBuilder or the like.
    String ret = sw.toString().trim();
    ret += "\n";

    if (JAM.Opts.bddformat == 2) {
      ret += "# ";
      ret += domain.toNormalizedString(bdd);
    }

    return ret;
  }

  /*
  public String structureToString(BDD d, Map<BDD,Integer> cache, int level) {
    if (d.equals(domain.getZero())) return "0";
    if (d.equals(domain.getOne())) return "1";

    Integer id = cache.get(d);
    if (id != null) return id.toString();

    BDD lo = d.low();
    String loVal = structureToString(lo, cache, level + 1);
    
    BDD hi = d.high();
    String hiVal = structureToString(hi, cache, level + 1);

    id = new Integer(d.hashCode());
    cache.put(d, id);

    String tree = "{" + loVal + "!" + hiVal + "}";
    tree = id + ":" + tree;
    for (int i=level; i<d.level(); i++) {
      tree = "{" + tree + "}";
    }
    return tree;
  }
  */

  protected String toDeltaString() {
    // Create a representation of the difference between this relation
    // and the id relation.
    StringBuilder sb = new StringBuilder();
    sb.append("id");

    BDD idDeltaMinus = getIdDeltaMinus();
    if (!idDeltaMinus.isZero()) {
      sb.append("-");
      sb.append(domain.toNormalizedString(idDeltaMinus));
    }

    BDD idDeltaPlus = getIdDeltaPlus();
    if (!idDeltaPlus.isZero()) {
      sb.append("+");
      sb.append(domain.toNormalizedString(idDeltaPlus));
    }
      
    return sb.toString();
	}

	@Override
	public String toString() {
    if (bdd.equals(domain.getZero())) return "0";
    if (bdd.equals(domain.getOne())) return "1";

    /* %%% Debug
    if (domain.getSize() > 1) {
      domain.getIdRelation().getBDD().printDot();
      System.exit(0);
    }
    */

    /*
    if (JAM.Opts.printDot) {
      File dotfl = new File(FileUtil.getWorkingDir(), "bdd-" + bdd.id() + ".dot");
      // Skip if the relation has already been printed.
      if (!dotfl.exists()) {
        printDot(dotfl);
      }
    }
    */

    if (JAM.Opts.bddformat >= 1) {
      /* %%% Debug
      Dbg.dbg("BDD: " + bdd);
      if (!bdd.equals(domain.getZero()) && !bdd.equals(domain.getOne())) {
        Dbg.dbg("VAR: " + bdd.var());
        Dbg.dbg("LEV: " + bdd.level());
      }
      bdd.printDot();
      */

      //String val = structureToString(bdd, new HashMap<BDD,Integer>(), 0);
      //Dbg.dbg("VAL: " + val);

      return toStructureString();
    }

    if (useDelta) {
      // Return a two-way delta between this relation and the identity.
      return toDeltaString();
    }

    // The standard disjoint representation
    return domain.toNormalizedString(bdd);
  }

  @Override
  public boolean equals(Object o) {
    if (o == null) return false;
    if (o.getClass() != getClass()) return false;
    BDDRelation r = (BDDRelation)o;
    return getBDD().equals(r.getBDD());
  }

  @Override
  public int hashCode() {
    if (bdd == null) return 0;
    return bdd.hashCode();
  }

}


