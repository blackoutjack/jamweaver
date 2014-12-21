
package edu.wisc.cs.jam;

import edu.wisc.cs.automaton.Automaton;
import edu.wisc.cs.automaton.State;

import java.io.IOException;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import javax.xml.bind.DatatypeConverter;

import java.util.List;
import java.util.ArrayList;

import edu.wisc.cs.jam.js.JSPolicyLanguage.JSPredicateType;

public class Policy extends Automaton<State,PredicateSymbol> {
  
  private SourceManager sm;
  private Semantics semantics;
  private PolicyLanguage language;

  // This collects all states used over multiple policies so that
  // specified policy path automata can overlap.
  private List<State> stateMap;
  // Use this counter to give adjacent integer ids to states.
  private int stateCnt;

  // A representation of all unique paths from the initial to the final
  // state of this (non-cyclic) automaton.
  private List<PolicyPath> paths;

  // Symbol to label the self-edges of this automaton.
  public static final PredicateSymbol trueSymbol;
  
  // There should only be one initial state, even if multiple policy
  // paths are being applied.
  private State initialState;

  // There is also only one final state across all policies.
  private State finalState;

  // Allow the policy to be specified in multiple files for convenience
  // and for incremental analysis.
  private List<String> filenames;

  // Collection of predicates used in the policy
  private List<Predicate> predicates;

  private static final String EDGE_HASH = "SHA";
  private static MessageDigest hasher;

  static {
    trueSymbol = new PredicateSymbol(Predicate.TRUE);
  }

  public Policy(JAM jam, PolicyLanguage lang, List<String> files) {

    sm = jam.getSourceManager();
    semantics = jam.getSemantics();
    language = lang;

    predicates = new ArrayList<Predicate>();

    // Build a hasher to generate edges hashes (used for matching
    // existing instrumentation to edges in the current analysis).
    try {
      hasher = MessageDigest.getInstance(EDGE_HASH);
    } catch (NoSuchAlgorithmException ex) {
      System.err.println("Unable to initialize edge hasher.");
    }

    stateMap = new ArrayList<State>();
    
    // Create the initial and final states (only allow one of each).
    initialState = new State("P", 0);
    initialState.setInitial(true);
    stateMap.add(initialState);
    stateCnt = 1;

    finalState = new State("P", -1);
    finalState.setFinal(true);
    // We don't include |finalState| in |stateMap|.

    if (files == null || files.size() == 0) {
      // Create a dummy policy that blocks nothing.
      filenames = new ArrayList<String>();
      // Hardcoded, so don't catch the IllegalArgumentException.
      Edge nonedge = parseEdge("0,-1: false");
      addEdge(nonedge);
    } else {
      filenames = new ArrayList<String>(files);
      // Parse the given files and compile into a single policy. 
      for (String filename : filenames) {
        try {
          load(filename);
        } catch (IOException ex) {
          System.err.println("Unable to load policy file " + filename + ": " + ex.getMessage());
        }
      }
    }

    // Load all self edges.
    for (State s : getStates()) {
      /*
      // For each out edge, add a self edge with the negation
      // of the out edge's predicate.
      //
      // If the state has no out edges then it's either final,
      // in which case we can omit self edges because we're
      // just testing reachability, or it's a sink state, in
      // which case there's no point in self edges either.
      //
      // %%% It seems like if the state has two out edges
      // leading to the same destination state, we can add
      // a single self edge with the disjunction of the two
      // negated predicates. This would be an optimization.
      for (Edge oe : getOutEdges(s)) {
        PredicateSymbol possym = oe.getSymbol();
        Predicate pospred = possym.getPredicate();
        Predicate negpred = pospred.getNegation();
        PredicateSymbol negsym = new PredicateSymbol(negpred);
        Edge se = makeEdge(negsym, s, s);
        addEdge(se);
      }
      */

      // For now, just allow unconstrained spinning on a
      // state (except we don't ever need to exit a final
      // state). The scheme explained above hasn't been
      // proven correct yet.
      if (!s.isFinal()) {
        Edge se = makeEdge(trueSymbol, s, s);
        addEdge(se);
      }
    }

    paths = loadPaths(new ArrayList<Edge>(), initialState);
    // Collect properties and literals that are important for analysis
    // of each policy path.
    semantics.setPropertiesOfInterest(paths);

    // Verify that all specified predicates are false in an initial
    // execution environment.
    // %%% This is now done in |Predicate.getInitialValue|.
    //if (JAMOpts.debug) checkPredicates();
  }

  public PolicyLanguage getLanguage() {
    return language;
  }

  public List<Edge> getAdvancingEdges() {
    // %%% Cache this
    List<Edge> ret = new ArrayList<Edge>();
    for (Edge e : getEdges()) {
      if (e.getSource() != e.getDestination())
        ret.add(e);
    }
    return ret;
  }

  protected Edge parseEdge(String line) {

    // Split the state specifiers from the predicate.
    String[] parts = line.split(":", 2);

    if (parts.length != 2)
      throw new IllegalArgumentException("Invalid edge specification: " + line);
    
    String statestr = parts[0].trim();
    String predstr = parts[1].trim();

    // Split the comma-separated state identifiers. 
    String[] stateIds = statestr.split(",", 2);

    if (stateIds.length != 2)
      throw new IllegalArgumentException("Invalid edge state specification: " + statestr);

    String srcstr = stateIds[0].trim();
    String deststr = stateIds[1].trim();

    // Parse the source state and unify with a previously loaded
    // one with a matching id.
    State src = null;
    try {
      int srcId = Integer.parseInt(srcstr);
      src = getState(srcId);

      if (src.isFinal())
        throw new IllegalArgumentException("Final policy state cannot be the source of an edge: " + statestr); 

    } catch (NumberFormatException ex) {
      throw new IllegalArgumentException("Invalid source state: " + srcstr);
    }

    // Parse the destination state and unify with a previously loaded
    // one with a matching id.
    State dest = null;
    try {
      int destId = Integer.parseInt(deststr);
      dest = getState(destId);

      if (dest.isInitial())
        throw new IllegalArgumentException("Initial policy state cannot be the destination of an edge: " + statestr); 

    } catch (NumberFormatException ex) {
      throw new IllegalArgumentException("Invalid destination state: " + deststr);
    }

    // %%% Wouldn't this call make more sense if it was to a method
    // %%% of the PolicyLanguage?
    Predicate pred = semantics.getConditionPredicate(predstr);

    // Retrieve or construct the edge now that it's fully specified.
    Edge edge = getEdge(pred, src, dest);
    if (edge == null) {
      // Mark the predicate as being part of a policy (rather than
      // learned or seeded).
      PredicateType pt = getLanguage().getPredicateType(pred);
      if (pt == JSPredicateType.WRITE || pt == JSPredicateType.READ
          || pt == JSPredicateType.INVOKE || pt == JSPredicateType.DELETE
          || pt == JSPredicateType.CONSTRUCT) {
        pred.setEventPredicate();
      }
      pred.setPolicyPredicate();

      PredicateSymbol psym = new PredicateSymbol(pred);
      edge = makeEdge(psym, src, dest);
      addEdge(edge);
    }

    // Collect a list of predicates. This may be a newly created
    // predicate, or one retrieved from a previous matching edge.
    pred = edge.getSymbol().getPredicate();
    if (!predicates.contains(pred)) predicates.add(pred);

    return edge;
  }

  protected void checkPredicates() {
    for (PredicateSymbol psym : getSymbols()) {
      if (psym.equals(trueSymbol)) continue;

      Predicate pred = psym.getPredicate();
      PredicateValue initVal = pred.getInitialValue(semantics);

      // The predicates that make up the policy should be false in
      // the initial environment.
      // %%% Currently this may occur because if the type inference
      // %%% types a variable found in the policy, then that type is
      // %%% asserted for the entire program for that variable name.
      if (initVal == null) {
        Dbg.out("WARNING: Policy predicate may be true in the initial environment: " + pred, 2);
      }
    }
  }

  protected void load(String filename) throws IOException {
    //Dbg.writeQueryHeader("Loading policy predicates", true);

    List<String> lines = FileUtil.getLinesFromFile(filename, "#");

    // Each line specifies a policy transition in the following form.
    // src,dest: predicate
    // Where src and dest are integers referring to states and
    // predicate is a psuedo-JavaScript condition.
    // See doc/POLICIES for details.
    for (String line : lines) {
      try {
        Edge edge = parseEdge(line);
        addEdge(edge);
      } catch (IllegalArgumentException ex) {
        Dbg.err("Problem with policy line: " + line + " : " + ex.getMessage());
      }
    }

    // Allow the Semantics to add a prerequisite query for each
    // predicate based on its own internal logic.
    for (PredicateSymbol ps : getSymbols()) {
      Predicate pred = ps.getPredicate();  
      Predicate prereq = semantics.loadPrerequisite(this, pred);
    }
  }

  protected List<PolicyPath> loadPaths(List<Edge> partial, State s) {
    List<PolicyPath> ret = new ArrayList<PolicyPath>();

    if (s.isFinal()) {
      // Having reached a final state, we have a complete path.
      ret.add(new PolicyPath(this, partial));
    } else {
      // Each out-edge (that isn't a self-loop) results in a branch.
      for (Edge out : getOutEdges(s)) {
        // Skip self-edges.
        State dest = out.getDestination();
        if (dest.equals(s)) continue;
        
        List<Edge> newPartial = new ArrayList<Edge>(partial);
        newPartial.add(out);
        ret.addAll(loadPaths(newPartial, dest));
      }
    }

    return ret;
  }

  public List<PolicyPath> getPaths() {
    assert paths != null;
    return new ArrayList<PolicyPath>(paths);
  }

  public int getPathId(PolicyPath pp) {
    return paths.indexOf(pp);
  }

  public int size() {
    List<PolicyPath> ps = getPaths();
    return ps.size();
  }

  public PolicyPath getPath(int idx) {
    List<PolicyPath> ps = getPaths();
    return ps.get(idx);
  }

  public Semantics getSemantics() {
    return semantics;
  }

  public SourceManager getSourceManager() {
    return sm;
  }

  public State getState(int idx) {
    if (idx == 0) return initialState;
    if (idx == -1) return finalState;
    if (idx < -1)
      throw new IllegalArgumentException("Invalid policy state id: " + idx);
    
    while (idx >= stateMap.size()) {
      stateMap.add(null);
    }
    State ret = stateMap.get(idx);

    if (ret == null) {
      ret = new State("P", stateCnt);
      stateCnt++;
      stateMap.set(idx, ret);
    }

    return ret;
  }

  // Retrieve a previously-created policy edge that matches the given
  // source/predicate/destination combination. If one does not exist,
  // null is returned.
  public Edge getEdge(Predicate pred, State src, State dest) {
    Edge ret = null;

    for (Edge prevedge : getEdges()) {
      State prevsrc = prevedge.getSource();
      if (prevsrc.equals(src)) {
        State prevdest = prevedge.getDestination();
        if (prevdest.equals(dest)) {
          Predicate prevpred = prevedge.getSymbol().getPredicate();
          if (prevpred.matches(pred)) {
            // We've found a match.
            ret = prevedge;
            break;
          }
        }
      }
    }

    return ret;
  }

  public String getHash(Edge e) {
    // %%% Cache this maybe
    String ret = null;
    if (hasher != null) {
      byte[] hashbytes = hasher.digest(e.toString().getBytes());
      ret = DatatypeConverter.printHexBinary(hashbytes);
    } else {
      // Fallback in case of hasher initilization error.
      ret = String.valueOf(e.toString().hashCode());
    }
    return ret;
  }

  public List<Edge> getEdgesByHash(String hash) {
    List<Edge> ret = new ArrayList<Edge>();
    while (!hash.equals("")) {
      boolean found = false;
      for (Edge e : getEdges()) {
        String edgeHash = getHash(e);
        assert edgeHash.length() > 0 : "Edge hash error: zero-length hash";
        if (hash.startsWith(edgeHash)) {
          // Chop this portion of the hash off the front.
          hash = hash.substring(edgeHash.length());
          ret.add(e);
          found = true;
          break;
        }
      }
      // If we didn't find a match for the initial portion of the
      // hash, there's nothing much we can do.
      if (!found) {
        return null;
      }
    }

    return ret;
  }

  public int getAstSize() {
    int tot = 0;
    for (Edge e : getAdvancingEdges()) {
      // %%% Maybe individual predicates could be stored in a Block?
      tot += e.getSymbol().getPredicate().getPositive().getExpression().getTreeSize();
      // To be fair, count the source and destination states as nodes.
      tot += 2;
    }
    return tot;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    for (PolicyPath pp : getPaths()) {
      sb.append(pp);
      sb.append("\n");
    }
    return sb.toString();
  }
}
