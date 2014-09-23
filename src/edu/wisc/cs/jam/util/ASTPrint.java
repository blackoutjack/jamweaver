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

import edu.wisc.cs.jam.js.JSFile;
import edu.wisc.cs.jam.js.JSExp;

public class ASTPrint implements Utility {
  
  Opts options;

  public ASTPrint(Opts opts) {
    options = opts;
  }

  public void run() {
    Node src = null;
    SourceManager sm = new JSSourceManager();
    JAM.Opts.noExterns = true;
    if (options.expr) {
      sm.addSourceFile(new JSSource("/dev/null"));
      // Interpret the argument as a JavaScript snippet.
      src = sm.nodeFromCode(options.source);
    } else {
      // Interpret the argument as a filename containing JavaScript.

      // Check for existence. Confusing results otherwise.
      if (!(new File(options.source).exists())) {
        System.err.println("Can't find file: " + options.source);
        return;
      }
      sm.addSourceFile(new JSSource(options.source));
      src = sm.getRootNode();
      // Remove the boilerplate stuff.
      src = src.getChildAtIndex(src.getChildCount() - 1).getFirstChild();
    }

    if (options.condensed) {
      Exp s = JSExp.create(sm, src);
      ExpSymbol ss = new ExpSymbol(s);
      System.out.println(ss.toAST());
    } else {
      System.out.println(src.toStringTree());
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
