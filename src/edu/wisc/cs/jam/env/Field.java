package edu.wisc.cs.jam.env;

import java.util.List;

public class Field {
  private String n;
  private String t;
  private Prototype p;
  private boolean readonly;
  private List<String> mods;

  public Field(String name, String type, boolean ro, List<String> ms) {
    n = name;
    t = type;
    readonly = ro;
    mods = ms;
  }

  public String getNativeName() {
    return p.getNativeName() + "#" + n;
  }

  public void setPrototype(Prototype proto) {
    p = proto;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append(t);
    sb.append(" ");
    sb.append(n);
    return sb.toString();
  }

  public String toModel() {
    StringBuilder sb = new StringBuilder();
    sb.append("% Field ");
    sb.append(n);
    sb.append("\n");
    if (mods.contains("noscript") || mods.contains("notxpcom")) {
      sb.append("% (not scriptable)\n");
      return sb.toString();
    }

    sb.append("aexe(H,L,'");
    sb.append(getNativeName());
    sb.append("#get");
    sb.append("',This,_,HP,EP) :-\n");
    // %%% Be smarter.
    sb.append("  always(L),always(This),always(Args),\n");
    sb.append("  HP=H,\n");
    sb.append("  symbolic(EP,_).\n");

    if (!readonly) {
      sb.append("aexe(H,L,'");
      sb.append(getNativeName());
      sb.append("#set");
      sb.append("',This,Args,HP,EP) :-\n");
      // %%% Be smarter.
      sb.append("  always(L),always(This),always(Args),\n");
      sb.append("  HP=H,\n");
      sb.append("  symbolic(EP,_).\n");
    }

    return sb.toString();
  }
}

