package edu.wisc.cs.jam.util;

import java.util.List;
import java.util.ArrayList;

import org.kohsuke.args4j.Option;
import org.kohsuke.args4j.Argument;

import edu.wisc.cs.jam.bdd.BDDRelation;
import edu.wisc.cs.jam.bdd.BDDRelationDomain;
import edu.wisc.cs.jam.Predicate;
import edu.wisc.cs.jam.DataState;

import edu.wisc.cs.jam.Options;
import edu.wisc.cs.jam.OptionParser;

// Class for testing the basic functionality of the edu.wisc.cs.jam.bdd
// package.
public class BDDClient implements Utility {

  public void run() {
    List<Predicate> vars = new ArrayList<Predicate>();
    vars.add(new Predicate("", null, null, null, null));
    vars.add(new Predicate("", null, null, null, null));
    vars.add(new Predicate("", null, null, null, null));
    vars.add(new Predicate("", null, null, null, null));

    BDDRelationDomain domain = new BDDRelationDomain(vars);

    BDDRelation rel = domain.getFalseRelation();
    //rel.addEdge(states.get(1), states.get(1));
    //rel.addEdge(states.get(0), states.get(3));
    //rel.printDot();

    BDDRelation id = domain.getIdRelation();
    //id.printDot();
  }

  public static class Opts extends Options {

    //@Argument(required=true, index=0, usage="source file", metaVar="SRCFILE")
    //public static String sourceFile;

  }
}
