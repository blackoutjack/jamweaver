
package edu.wisc.cs.automaton;

import java.util.Set;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Collection;
import java.io.IOException;
import java.io.BufferedWriter;
import java.io.OutputStream;
import java.io.OutputStreamWriter;

public class Automaton<S extends State, M extends Symbol> {

  // Fundamental components
  protected Set<S> states;
  protected Set<Edge> edges;
  protected Set<M> symbols;

  // NWA extensions
  protected Set<Edge> callEdges;
  protected Set<Edge> returnEdges;

  // Collections maintained for quick access
  protected Map<S,Set<Edge>> inEdges;
  protected Map<S,Set<Edge>> outEdges;
  protected Map<M,Set<Edge>> symbolEdges;
  // %%% This is a kludge.
  //protected Map<String,M> serialSymbolMap;
  // %%% It would be nice to maintain an index of initial and
  // %%% final states, but this would require adding a listener
  // %%% the the states in case they're toggled.
  /*
  protected Set<S> finalStates;
  protected Set<S> initialStates;
  */

  // Initialize an empty automaton.
  public Automaton() {
    // %%% Some kludgy parts of the JAM framework take an ordering
    // %%% for granted.
    // It's nice for debugging to have things print out in some order.
    // Hence the use of LinkedHashSet.
    states = new LinkedHashSet<S>();
    edges = new LinkedHashSet<Edge>();
    symbols = new LinkedHashSet<M>();

    inEdges = new LinkedHashMap<S, Set<Edge>>();
    outEdges = new LinkedHashMap<S, Set<Edge>>();
    symbolEdges = new LinkedHashMap<M, Set<Edge>>();
    //serialSymbolMap = new HashMap<String, M>();
    //finalStates = new LinkedHashSet<S>();
    //initialStates = new LinkedHashSet<S>();

    callEdges = new LinkedHashSet<Edge>();
    returnEdges = new LinkedHashSet<Edge>();
  }

  // Copy constructor
  public Automaton(Automaton<S,M> orig) {
    this();

    // Add all states.
    for (S st : orig.getStates()) {
      addState(st);
    }
    // Add edges. This will also add symbols and
    // initialize index maps.
    for (Edge e : orig.getEdges()) {
      addEdge(e);
    }

    //serialSymbolMap = new HashMap<String,M>(orig.serialSymbolMap);

    // Copy the final/initial states.
    //finalStates = new LinkedHashSet<S>(orig.finalStates);
    //initialStates = new LinkedHashSet<S>(orig.initialStates);

  }

  private void removeSymbol(M sym) {
    assert symbolEdges.keySet().contains(sym);
    symbolEdges.remove(sym);
    symbols.remove(sym);
    /*
    // Clear mappings of this state from its serialization.
    Collection serialSymbolValues = serialSymbolMap.values();
    while (serialSymbolValues.contains(sym)) {
      serialSymbolValues.remove(sym);
    }
    */
  }

  private void addSymbol(M sym) {
    symbols.add(sym);
  }

  /**
   * Add an edge to this automaton. The state endpoints
   * and the symbol will be added also.
   *
   * @param edge the edge to add
   */
  public void addEdge(Edge edge) {
    edges.add(edge);
    // Add endpoints as new states and transition symbol 
    // if necessary.
    S src = edge.getSource();
    S dest = edge.getDestination();
    addState(src);
    addState(dest);
    M sym = edge.getSymbol();
    addSymbol(sym);

    // Maintain a mapping from a symbol to the edges
    // that it's on.
    Set<Edge> symedges = symbolEdges.get(sym);
    if (symedges == null) {
      symedges = new LinkedHashSet<Edge>();
      symbolEdges.put(sym, symedges);
    }
    symedges.add(edge);
    
    // Maintain consistency in the in/out edge mappings. 
    Set<Edge> oes = outEdges.get(src);
    if (oes == null) {
      oes = new LinkedHashSet<Edge>();
      outEdges.put(src,oes);
    }
    oes.add(edge);
    Set<Edge> ies = inEdges.get(dest);
    if (ies == null) {
      ies = new LinkedHashSet<Edge>();
      inEdges.put(dest,ies);
    }
    ies.add(edge);

    // Maintain a list of call and return edges.
    // Unlike initial/final states, the edge itself
    // determines if it is a call/return edge, since
    // it could not be a call/return edge in one
    // automaton but not another.
    if (edge.isCallEdge()) {
      callEdges.add(edge);
    }
    if (edge.isReturnEdge()) {
      returnEdges.add(edge);
    }
  }

  /**
   * Remove an edge from the automaton. If the symbol is
   * no longer used, it will be removed also.
   *
   * @param edge the edge to remove
   */
  public void removeEdge(Edge edge) {
    edges.remove(edge);

    // Update the mapping from symbols to edges.
    M sym = edge.getSymbol();
    Set<Edge> symedges = symbolEdges.get(sym);
    // %%% Just avoiding a crash that
    // %%% I can't figure out.
    if (symedges != null) {
      assert symedges != null;
      assert symedges.contains(edge);
      symedges.remove(edge);
      if (symedges.size() == 0) {
        removeSymbol(sym);
      }
    }

    // Update the in/out edge collections.
    assert inEdges.get(edge.getDestination()) != null;
    inEdges.get(edge.getDestination()).remove(edge);
    assert outEdges.get(edge.getSource()) != null;
    outEdges.get(edge.getSource()).remove(edge);

    // These will be noop if the edge is not a call
    // or return.
    callEdges.remove(edge);
    returnEdges.remove(edge);
  }

  public void addState(S state) {
    states.add(state);
  }

  public void removeState(S state) {
    states.remove(state);

    // Remove the edges emanating from or leading to
    // the state.
    for (Edge ie : getInEdges(state)) {
      removeEdge(ie);
    }
    for (Edge oe : getOutEdges(state)) {
      removeEdge(oe);
    }

    // Update the in/out edge collections.
    inEdges.remove(state);
    outEdges.remove(state);
  }

  public List<Edge> getCallEdges() {
    return new ArrayList<Edge>(callEdges);
  }

  public List<Edge> getReturnEdges() {
    return new ArrayList<Edge>(returnEdges);
  }

  /**
   * Invoked when an edge contained in this automaton is
   * altered.
   *
   * @param prev a copy of the edge before the change
   * @param edge the edge as it now is
   */
  protected void edgeUpdate(Edge prev, Edge edge) {
    // Remove the edge to clear it's constituents
    // from the various collections.
    removeEdge(prev);

    // Add the edge back, thereby syncing all the
    // data structures.
    addEdge(edge);
  }

  public Edge makeReturnEdge(M sym, S src, S cs, S dest) {
    return new Edge(sym, src, dest, cs);
  }

  public Edge makeCallEdge(M sym, S src, S dest) {
    Edge ce = new Edge(sym, src, dest);
    ce.setCallEdge(true);    
    return ce;
  }

  /**
   * Get the number of states in this automaton.
   *
   * @return the number of states in this automaton
   */
  public int getStateCount() {
    return states.size();
  }

  /**
   * Get the number of edges in this automaton.
   *
   * @return the number of edges in this automaton
   */
  public int getEdgeCount() {
    return edges.size();
  }

  /**
   * Get the number of symbols in this automaton.
   *
   * @return the number of symbols in this automaton
   */
  public int getSymbolCount() {
    return symbols.size();
  }

  /**
   * Load a collection of states into the automaton.
   *
   * @param sts the states to add
   */
  public void setStates(List<S> sts) {
    states = new LinkedHashSet<S>(sts);
  }

  /**
   * Get the complete list of states in this automaton
   *
   * @return a list of all states
   */
  public List<S> getStates() {
    return new ArrayList<S>(states);
  }

  /**
   * Get the list of final states in this automaton
   *
   * @return a list of all final states
   */
  public List<S> getFinalStates() {
    // %%% See note above re: finalStates index.
    //return new ArrayList<S>(finalStates);
    
    List<S> finStates = new ArrayList<S>();
    for (S s : getStates()) {
      if (s.isFinal()) finStates.add(s);
    }

    return finStates;
  }

  /**
   * Get the list of initial states in this automaton
   *
   * @return a list of all initial states
   */
  public List<S> getInitialStates() {
    // %%% See note above re: initialStates index.
    //return new ArrayList<S>(initialStates);
    
    List<S> initStates = new ArrayList<S>();
    for (S s : getStates()) {
      if (s.isInitial()) initStates.add(s);
    }

    return initStates;
  }

  /**
   * Get the complete list of edges in this automaton
   *
   * @return a list of all edges 
   */
  public List<Edge> getEdges() {
    return new ArrayList<Edge>(edges);
  }

  public Map<M,Set<Edge>> getSymbolMap() {
    return new LinkedHashMap<M,Set<Edge>>(symbolEdges);
  }

  public Set<Edge> getEdgesWithSymbol(M sym) {
    return new LinkedHashSet<Edge>(symbolEdges.get(sym));
  }

  public Map<S,Set<Edge>> getInEdges() {
    return new LinkedHashMap<S,Set<Edge>>(inEdges);
  }

  public Map<S,Set<Edge>> getOutEdges() {
    return new LinkedHashMap<S,Set<Edge>>(outEdges);
  }

  public List<Edge> getInEdges(S dest) {
    Set<Edge> ie = inEdges.get(dest);
    if (ie == null) return new ArrayList<Edge>();
    return new ArrayList<Edge>(ie);
  }

  public List<Edge> getOutEdges(S src) {
    Set<Edge> oe = outEdges.get(src);
    if (oe == null) return new ArrayList<Edge>();
    return new ArrayList<Edge>(oe);
  }

  public List<Edge> getConnectingEdges(S src, S dest) {
    List<Edge> connEdges = new ArrayList<Edge>();
    for (Edge e : getOutEdges(src)) {
      if (getInEdges(dest).contains(e)) {
        connEdges.add(e);
      }
    }

    return connEdges;
  }

  public List<M> getSymbols() {
    return new ArrayList<M>(symbols);
  }

  public void setSymbols(List<M> symbs) {
    symbols.clear();
    symbolEdges.clear();
    //serialSymbolMap.clear();
    for (M sym : symbs) {
      symbols.add(sym);
    }
  }

  public void clearEdges() {
    for (Edge e : getEdges()) {
      removeEdge(e);
    }
  }

  /*
  public M getSymbolFromText(String symText) {
    return serialSymbolMap.get(symText);
  }
  */

  public void serializeToStream(OutputStream out) throws IOException {
    BufferedWriter w = new BufferedWriter(new OutputStreamWriter(out));
    statesSerialize(w);
    edgesSerialize(w);
    w.close();
  }

  protected void statesSerialize(Appendable out) throws IOException {
    out.append("STATES:\n");

    // Append the list of state names
    for (S state : getStates()) {
      out.append(state.serialize());
      if (state.isInitial()) {
        out.append("*");
      } else if (state.isFinal()) {
        out.append("%");
      }
      out.append("\n");
    }
  }

  protected void edgesSerialize(Appendable out) throws IOException {
    out.append("EDGES:\n");
    for (Edge edge : getEdges()) {
      out.append(edge.serialize());
      out.append("\n");
    }
  }

  // Prints an automaton
  public String serialize() {
    StringBuilder sb = new StringBuilder();
    try {
      statesSerialize(sb);
      edgesSerialize(sb);
    } catch (IOException ex) {
      // This should never happen since StringBuilder doesn't throw
      // exceptions.
      System.err.println("StringBuilder somehow threw an exception.");
    }

    return sb.toString();
  }

  // Append a list of this automaton's states.
  protected void statesToString(StringBuilder sb) {
    sb.append("STATES:\n");

    // Append the list of state names
    for (S state : getStates()) {
      sb.append(state);
      if (state.isInitial()) {
        sb.append("*");
      } else if (state.isFinal()) {
        sb.append("%");
      }
      sb.append("\n");
    }
  }

  // Append a representation of this automaton's edges.
  protected void edgesToString(StringBuilder sb) {
    sb.append("EDGES:\n");
    for (Edge edge : getEdges()) {
      sb.append(edge);
      sb.append("\n");
    }
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    statesToString(sb);
    edgesToString(sb);

    return sb.toString();
  }

  public Edge makeEdge(M sym, S src, S dest) {
    return new Edge(sym, src, dest);
  }

  public Edge copyEdge(Edge e) {
    return new Edge(e);
  }

  public class Edge {

    private M symbol;
    private S source;
    private S destination;

    private S callSource;
    private boolean callEdge;
    private boolean returnEdge;

    protected Edge(M sym, S src, S dest) {
      symbol = sym;
      source = src;
      destination = dest;
      setCallEdge(false);
      setReturnEdge(false);
    }

    protected Edge(M sym, S src, S dest, S cs) {
      this(sym, src, dest);
      callSource = cs;
      setReturnEdge(cs != null);
      setCallEdge(false);
    }

    /*
     * Shallow copy constructor.
     */
    protected Edge(Edge old) {
      this(old.getSymbol(), old.getSource(), old.getDestination(), old.getCallSource());
      setCallEdge(old.isCallEdge());
      setReturnEdge(old.isReturnEdge());
    }

    public M getSymbol() {
      return symbol;
    }

    public S getSource() {
      return source;
    }

    public S getDestination() {
      return destination;
    }

    public void setSymbol(M sym) {
      Edge orig = new Edge(this);
      symbol = sym;
      notifyAutomaton(orig);
    }

    public void setSource(S s) {
      Edge orig = new Edge(this);
      source = s;
      notifyAutomaton(orig);
    }

    public void setDestination(S s) {
      Edge orig = new Edge(this);
      destination = s;
      notifyAutomaton(orig);
    }

    public void setCallEdge(boolean val) {
      callEdge = val;
    }

    public void setReturnEdge(boolean val) {
      returnEdge = val;
    }

    public boolean isCallEdge() {
      return callEdge;
    }

    public boolean isReturnEdge() {
      return returnEdge;
    }

    public S getCallSource() {
      return callSource;
    }

    @SuppressWarnings("unchecked")
    public boolean equals(Object o) {
      if (this == o) return true;
      if (!(o.getClass() != getClass())) return false;
      Edge e = (Edge)o;
      M sym = getSymbol();
      M syme = e.getSymbol();

      // Symbol might be null
      boolean symeq = (sym == null) ? syme == null : sym.equals(syme);

      S s = getSource();
      S se = e.getSource();
      S d = getDestination();
      S de = e.getDestination();
      
      if (!(symeq && s.equals(se) && d.equals(de))) return false;
      if (isCallEdge() != e.isCallEdge()) return false;
      if (isReturnEdge() != e.isReturnEdge()) return false;
      if (!getCallSource().equals(e.getCallSource())) return false;

      return true;
    }

    protected void notifyAutomaton(Edge orig) {
      Automaton.this.edgeUpdate(orig, this);
    }

    public String serialize() {
      StringBuilder sb = new StringBuilder();

      if (isCallEdge()) {
        sb.append("@");
      } else if (isReturnEdge()) {
        sb.append("&");
      }

      sb.append(getSource().serialize());
      sb.append("|");
      if (isReturnEdge()) {
        sb.append(getCallSource().serialize());
        sb.append("|");
      }
      sb.append(getDestination().serialize());
      sb.append("|");

      String serialSym = getSymbol().serialize();
      sb.append(serialSym);

      // Map the serialized representation of the symbol to the symbol
      // itself. This is used to recognize the symbol after it's
      // returned from an outside source.
      //serialSymbolMap.put(serialSym, getSymbol());

      return sb.toString();
    }

    @Override
    public String toString() {
      StringBuilder sb = new StringBuilder();

      if (isCallEdge()) {
        sb.append("@");
      } else if (isReturnEdge()) {
        sb.append("&");
      }

      sb.append(getSource());
      sb.append("|");

      if (isReturnEdge()) {
        sb.append(getCallSource());
        sb.append("|");
      }

      sb.append(getDestination());
      sb.append("|");
      sb.append(getSymbol());

      return sb.toString();
    }

  }


}
