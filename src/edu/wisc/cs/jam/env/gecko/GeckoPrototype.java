package edu.wisc.cs.jam.env.firefox;

import java.util.List;
import java.util.Map;

import edu.wisc.cs.jam.env.Prototype;

public class GeckoPrototype extends Prototype {
  protected final String[] modifiers = {
    "scriptable",
    "builtinclass",
    "function",
    "uuid",
  };

  public GeckoPrototype(String iname, List<String> ms, Map<String,String> cms) {
    super(iname, ms, cms);
  }

  public String toModel() {

    StringBuilder sb = new StringBuilder();

    sb.append("% Gecko prototype ");
    sb.append(getNativeName());
    sb.append(" generated from ");
    sb.append(getInternalName());

    // Output info only if not "scriptable"
    if (!mods.contains("scriptable")) {
      sb.append("\n");
      sb.append("% (not scriptable)\n");
      return sb.toString();
    }

    sb.append("\n\n");

    sb.append(super.toModel());

    return sb.toString();
  }
}
