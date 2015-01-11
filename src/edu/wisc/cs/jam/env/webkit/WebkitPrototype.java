package edu.wisc.cs.jam.env.webkit;

import java.util.List;
import java.util.Map;

import edu.wisc.cs.jam.env.Prototype;

public class WebkitPrototype extends Prototype {
  protected final String[] modifiers = {
    "ImplementedAs",
    "PerContextEnabled",
  };

  public WebkitPrototype(String iname, List<String> ms, Map<String,String> cms) {
    super(iname, ms, cms);
  }

  public String toModel() {

    StringBuilder sb = new StringBuilder();

    sb.append("% Webkit prototype ");
    sb.append(getNativeName());
    sb.append(" generated from ");
    sb.append(getInternalName());

    // Webkit doesn't use the "scriptable" modifier.

    sb.append("\n\n");

    sb.append(super.toModel());

    return sb.toString();
  }
}

