package edu.wisc.cs.jam.env;

import java.util.List;
import java.util.Map;

public class Param {
  private String name;
  private String type;
  private List<String> attrs;
  private List<String> mods;
  private Map<String,String> compmods;

  public Param(String n, String t, List<String> as, List<String> ms, Map<String,String> cms) {
    name = n;
    type = type;
    attrs = as;
    mods = ms;
    compmods = cms;
  }

  public boolean isOptional() {
    return mods.contains("optional");
  }

  public String getName() {
    return name;
  }

  public String getVariableName() {
    // Capitalize the first letter to make it an XSB variable.
    return name.substring(0,1).toUpperCase() + name.substring(1);
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

