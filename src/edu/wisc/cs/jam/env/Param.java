package edu.wisc.cs.jam.env;

import java.util.List;

public class Param {
  private String name;
  private String type;
  private List<String> attrs;
  private List<String> mods;

  public Param(String n, String t, List<String> as, List<String> ms) {
    name = n;
    type = type;
    attrs = as;
    mods = ms;
  }

  public boolean isOptional() {
    return mods.contains("optional");
  }

  public String getName() {
    return name;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    for (String a : attrs) {
      sb.append(a);
      sb.append(" ");
    }
    sb.append(type);
    sb.append(" ");
    sb.append(name);
    return sb.toString();
  }
}

