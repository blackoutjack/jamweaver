package edu.wisc.cs.jam.util;

import java.util.List;
import java.util.ArrayList;
import java.io.IOException;

import org.kohsuke.args4j.Option;
import org.kohsuke.args4j.Argument;

import com.google.javascript.rhino.Node;

import edu.wisc.cs.jam.Options;
import edu.wisc.cs.jam.OptionParser;
import edu.wisc.cs.jam.Semantics;
import edu.wisc.cs.jam.Clause;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.ExpSymbol;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.FileUtil;

import edu.wisc.cs.jam.xsb.XSBInterface;
import edu.wisc.cs.jam.xsb.XSBSingleInterface;

import edu.wisc.cs.jam.js.JSSource;
import edu.wisc.cs.jam.js.JSSourceManager;
import edu.wisc.cs.jam.js.JSSemantics;
import edu.wisc.cs.jam.js.JSExp;

public class NativeIdentifier implements Utility {

  private static Opts options;

  private SourceManager sm;
  private Semantics semantics;

  public NativeIdentifier(Opts opts) {
    options = opts;
  }

  public String identify(String phrase) {
    Exp s = JSExp.create(sm, sm.nodeFromCode(phrase));
    ExpSymbol ss = new ExpSymbol(s);

    // Use the XSB semantics to interpret JavaScript snippets and get
    // the resulting value.
    String escaped = XSBInterface.escapeString(phrase);
    String ctxt = "exp(%H,%L," + ss.toQueryAST() + ",%P,%Q,%R),ecgv(%H,%L,%S,%P,%Q,VALUE),sentinelpred('" + escaped + "',VALUE),fail";
    Clause c = new Clause(ctxt);
    c.setConcrete(true);
    XSBInterface xsb = new XSBSingleInterface(semantics);
    //System.err.println(c.getQuery());

    String ret = null;
    try {
      List<String> sentinels = xsb.sentinelQuery(c);
      ret = sentinels.get(0);
      // %%% Shaky, relies on particular error message.
      if (ret.equals("json_string_to_json error")) {
        ret = "Error parsing expression: " + phrase;
      }
    } catch (IOException ex) {
      System.err.println(ex.getMessage()); 
    }

    return ret;
  }

  @Override
  public void run() {
    sm = new JSSourceManager();
    sm.addSource(new JSSource("/dev/null", false));
    //FileUtil.init(sm);
    semantics = new JSSemantics(sm);

    for (String phrase : options.phrases) {
      String sentinel = identify(phrase);
      System.out.println(sentinel);
    }
  }

  public static class Opts extends Options {

    @Argument(required=true, index=0, usage="JavaScript phrase(s) to evaluate", metaVar="PHRASE+", multiValued=true)
    public static List<String> phrases;

    //@Option(name="-h", usage="Print help text")
    //public static boolean help = false;
  }

}

