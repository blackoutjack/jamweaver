package edu.wisc.cs.jam.env;

import java.util.List;

import edu.wisc.cs.jam.Dbg;

public class Method {
  private List<Param> params;
  private String name;
  private String returnType;
  private Prototype proto;
  private List<String> mods;

  public Method(String n, String rt, List<Param> ps, List<String> ms) {
    name = n;
    returnType = rt;
    params = ps;
    mods = ms;
  }

  public void setPrototype(Prototype p) {
    proto = p;
  }

  public String getNativeName() {
    return proto.getNativeName() + "#" + name;
  }

  public String getName() {
    return name;
  }

  public String getReturnType() {
    return returnType;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append(returnType);
    sb.append(" ");
    sb.append(getName());
    sb.append("(");
    boolean first = true;
    for (Param p : params) {
      if (first) { first = false; } else { sb.append(", "); }
      sb.append(p.toString());
    }
    sb.append(")");
    return sb.toString();
  }

  protected void loadArgumentCheck(StringBuilder sb) {
    int minArgs = 0;
    for (Param p : params) {
      if (p.isOptional()) {
        // There can't be required params after an optional one.
        break;
      } else {
        minArgs++;
      }
    }

    sb.append("  ");
    sb.append("length(Args,Arglen),\n");
    if (minArgs > 0) {
      sb.append("  (Arglen<");
      sb.append(minArgs);
      sb.append("->\n");
      sb.append("  new_native_error('\"Not enough arguments [");
      sb.append(proto.getInternalName());
      sb.append(".");
      sb.append(getName());
      sb.append("]\"','#NS_ERROR_XPC_NOT_ENOUGH_ARGS#prototype',Err),\n");
      sb.append("  alloc(H,Err,HP,EP),always(L),always(This);\n");
    } else {
      sb.append("  (Arglen<0->fail;\n");
    }
  }

  protected void loadArgumentNames(StringBuilder sb) {
    int plen = params.size();
    if (plen == 0)
      return;

    for (int idx=0; idx<plen; idx++) {
      Param p = params.get(idx);
      String pname = p.getName();
      // Capitalize the first letter to make it an XSB variable.
      pname = pname.substring(0,1).toUpperCase() + pname.substring(1);
      sb.append("  ");
      if (p.isOptional()) {
        sb.append("(Arglen>");
        sb.append(idx);
        sb.append("->");
      }

      if (idx == 0) {
        sb.append("Args");
      } else {
        sb.append("ArgTail");
        sb.append(idx - 1);
      }
      sb.append("=[");
      sb.append(pname);
      sb.append("|");
      if (idx == plen - 1) {
        sb.append("_");
      } else {
        sb.append("ArgTail");
        sb.append(idx);
      }
      sb.append("]");

      if (p.isOptional()) {
        sb.append(";");
        sb.append(pname);
        sb.append("='#undefined')");
      }
      sb.append(",\n");
    }
  }

  protected void loadReturnValue(StringBuilder sb) {
    sb.append("  ");

    String st = "_";
    String rt = getReturnType();
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

  public String toModel() {
    StringBuilder sb = new StringBuilder();
    sb.append("% Method ");
    sb.append(getName());
    sb.append("\n");
    if (mods.contains("noscript") || mods.contains("notxpcom")) {
      sb.append("% (not scriptable)\n");
      return sb.toString();
    }

    sb.append("aexe(H,L,'");
    sb.append(getNativeName());
    sb.append("',This,Args,HP,EP) :-\n");

    loadArgumentCheck(sb);
    loadArgumentNames(sb);
    loadReturnValue(sb);

    // %%% Be smarter.
    sb.append("  always(L),always(This),\n");
    sb.append("  HP=H).\n");

    return sb.toString();
  }
}

