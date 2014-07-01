package edu.wisc.cs.jam;

public class DataTransition {

  private ExpSymbol symbol;
  private DataState source;
  private DataState destination;
  private Relation relation;
  
  public DataTransition(Relation rel, DataState src, ExpSymbol sym, DataState dest) {
    symbol = sym;
    source = src;
    destination = dest;
    relation = rel;
  }

  public ExpSymbol getSymbol() {
    return symbol;
  }

  public DataState getSource() {
    return source;
  }

  public DataState getDestination() {
    return destination;
  }

  public Relation getRelation() {
    return relation;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append(source);
    sb.append("|");
    sb.append(destination);
    sb.append("|");
    sb.append(symbol);
    sb.append("|");
    sb.append(relation);
    return sb.toString();
  }
}

