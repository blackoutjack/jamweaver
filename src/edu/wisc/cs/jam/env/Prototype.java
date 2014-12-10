package edu.wisc.cs.jam.env;

import java.util.List;
import java.util.ArrayList;

public class Prototype {
  private String internal;
  private String name;
  private String constructor;
  private List<String> mods;
  private List<Method> methods;
  private List<Field> fields;
  private List<Const> consts;
  private String uuid;

  public Prototype(String iname, List<String> ms, String u) {
    internal = iname;
    constructor = NativeUtil.getNativeLocationFromInterface(internal);
    name = constructor + "#prototype";
    mods = ms;
    uuid = u;
    methods = new ArrayList<Method>();
    fields = new ArrayList<Field>();
    consts = new ArrayList<Const>();
  }

  public void addMethod(Method m) {
    m.setPrototype(this);
    methods.add(m);
  }

  public void addField(Field f) {
    f.setPrototype(this);
    fields.add(f);
  }

  public void addConst(Const c) {
    c.setPrototype(this);
    consts.add(c);
  }

  public String getNativeName() {
    return name;
  }

  public String getInternalName() {
    return internal;
  }

  public String toModel() {

    StringBuilder sb = new StringBuilder();

    sb.append("% Prototype ");
    sb.append(name);
    sb.append(" generated from ");
    sb.append(internal);
    // Output info only if not "scriptable"
    if (!mods.contains("scriptable")) {
      sb.append("\n");
      sb.append("% (not scriptable)\n");
      return sb.toString();
    }

    sb.append("\n\n");
    for (Const c : consts) {
      sb.append(c.toModel());
      sb.append("\n");
    }
    for (Field f : fields) {
      sb.append(f.toModel());
      sb.append("\n");
    }
    for (Method m : methods) {
      sb.append(m.toModel());
      sb.append("\n");
    }

    return sb.toString();
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("Interface: ");
    sb.append(internal);
    sb.append("\nNative: ");
    sb.append(name);
    sb.append("\n");
    for (Const c : consts) {
      sb.append(c.toString());
      sb.append("\n");
    }
    for (Field f : fields) {
      sb.append(f.toString());
      sb.append("\n");
    }
    for (Method m : methods) {
      sb.append(m.toString());
      sb.append("\n");
    }

    return sb.toString();
  }
}

