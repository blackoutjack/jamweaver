package edu.wisc.cs.jam.env;

public class Const {
  private String name;
  private String type;
  private Prototype proto;
  private String value;

  public Const(String n, String t, String v) {
    name = n;
    type = t;
    value = v;
  }

  public String getNativeName() {
    return proto.getNativeName() + "#" + name;
  }

  public void setPrototype(Prototype p) {
    proto = p;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append(type);
    sb.append(" ");
    sb.append(name);
    sb.append(" = ");
    sb.append(value);
    return sb.toString();
  }

  public String toModel() {
    StringBuilder sb = new StringBuilder();
    sb.append("% Const ");
    sb.append(toString());
    sb.append("\n");

    return sb.toString();
  }
}

