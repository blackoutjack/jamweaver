package edu.wisc.cs.jam.util;

import java.io.File;

import com.google.javascript.rhino.Node;

import org.kohsuke.args4j.Option;
import org.kohsuke.args4j.Argument;

import edu.wisc.cs.jam.ExpSymbol;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.Options;
import edu.wisc.cs.jam.OptionParser;
import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.JAM;
import edu.wisc.cs.jam.JAMOpts;

import edu.wisc.cs.jam.js.JSSourceManager;
import edu.wisc.cs.jam.js.JSSource;
import edu.wisc.cs.jam.js.JSExp;

public class ASTPrint implements Utility {
  
  Opts options;

  public ASTPrint(Opts opts) {
    options = opts;
  }

  public void run() {
    Exp src = null;
    SourceManager sm = new JSSourceManager();
    JAMOpts.noExterns = true;
    if (options.expr) {
      sm.addSource(new JSSource("/dev/null", false));
      // Interpret the argument as a JavaScript snippet.
      src = sm.expFromCode(options.source);
    } else {
      // Interpret the argument as a filename containing JavaScript.

      // Check for existence. Confusing results otherwise.
      if (!(new File(options.source).exists())) {
        System.err.println("Can't find file: " + options.source);
        return;
      }
      sm.addSource(new JSSource(options.source, false));
      src = sm.getRoot();
    }

    if (options.condensed) {
      System.out.println(src.toAST());
    }
  }

  public static class Opts extends Options {

    @Argument(required=true, index=0, usage="JavaScript file/expression to parse", metaVar="FILE|EXPR")
    public static String source;

    @Option(name="-e", usage="Interpret the argument as an expression, not a filename")
    public static boolean expr = false;

    @Option(name="-l", usage="Print condensed (single-line) AST")
    public static boolean condensed = false;

    //@Option(name="-h", usage="Print help text")
    //public static boolean help = false;

  }

}
