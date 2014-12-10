package edu.wisc.cs.jam.env;

import java.util.List;
import java.util.Map;

public class Field {
  private String name;
  private String type;
  private Prototype proto;
  private boolean readonly;
  private List<String> mods;
  private Map<String,String> compmods;

  public Field(String n, String t, boolean ro, List<String> ms, Map<String,String> cms) {
    name = n;
    type = t;
    readonly = ro;
    mods = ms;
    compmods = cms;
  }

  public String getNativeName() {
    return proto.getNativeName() + "#" + getName();
  }

  public String getName() {
    return name;
  }

  public void setPrototype(Prototype p) {
    proto = p;
  }

  public String getType() {
    return type;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append(getType());
    sb.append(" ");
    sb.append(getName());
    return sb.toString();
  }

  protected void loadGetValue(StringBuilder sb) {
    sb.append("  ");

    String st = "_";
    String rt = getType();
    if (rt.equals("DOMString")) {
      st = "'String'";
    } else if (rt.equals("void")) {
      // Output the exact value, not the type.
      st = null;
      sb.append("EP='#undefined'");
    } else if (rt.equals("boolean") || rt.equals("bool")) {
      st = "'Boolean'";
    } else if (rt.equals("long") || rt.equals("long long")
        || rt.equals("unsigned long") || rt.equals("float")
        || rt.equals("unsigned long long")) {
      st = "'Number'";
    } else if (rt.equals("jsval")) {
      // Doesn't tell us anything, as far as I can tell.
    } else {
      String loc = NativeUtil.getNativeLocationFromInterface(rt);
      if (loc != null) {
        // %%% Should really be MaybeObject.
        st = "'Object'";
        /*
        // %%% Not quite clever enough to try this yet. What arguments?
        st = null;
        sb.append("nativeconstruct(H1,L1,'")
        sb.append(loc);
        sb.append("',[],HP,_,EP).")
        */
      } else {
        Dbg.warn("Unknown type: " + rt);
      }
    }

    if (st != null) {
      sb.append("symbolic(EP,");
      sb.append(st);
      sb.append(")");
    }
    sb.append(",\n");
  }

  protected void loadSetValue(StringBuilder sb) {
    // %%% Correct, or does it pass through the assigned value?
    loadGetValue(sb);
  }

  public String toModel() {
    StringBuilder sb = new StringBuilder();
    sb.append("% Field ");
    sb.append(getName());
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
    sb.append("  always(L),always(This),\n");
    loadGetValue(sb);
    sb.append("  HP=H.\n");

    if (!readonly) {
      sb.append("aexe(H,L,'");
      sb.append(getNativeName());
      sb.append("#set");
      sb.append("',This,Args,HP,EP) :-\n");
      // %%% Be smarter.
      sb.append("  always(L),always(This),always(Args),\n");
      loadSetValue(sb);
      sb.append("  HP=H.\n");
    }

    return sb.toString();
  }
}

