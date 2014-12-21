package edu.wisc.cs.jam.env.firefox;

import java.util.List;
import java.util.Map;

import edu.wisc.cs.jam.env.Method;
import edu.wisc.cs.jam.env.Param;

public class GeckoMethod extends Method {
  protected final String[] modifiers = {
    "noscript",
    "notxpcom",
    "deprecated",
    "array",
    "ptr",
    "ref",
    "binaryname",
    "size_is",
    "retval",
    "shared",
    "optional",
    "implicit_jscontext",
    "optional_argc",
    "binaryname",
  };

  public GeckoMethod(String n, String rt, List<Param> ps, List<String> ms, Map<String,String> cms) {
    super(n, rt, ps, ms, cms);
  }

}
