package edu.wisc.cs.jam;

import java.io.OutputStream;
import java.io.PrintStream;
import java.io.IOException;
import java.io.File;
import java.net.URL;

import org.kohsuke.args4j.CmdLineException;
import org.kohsuke.args4j.CmdLineParser;
import org.kohsuke.args4j.Option;
import org.kohsuke.args4j.Argument;

public class OptionParser extends CmdLineParser {

  public OptionParser(Options opts) {
    super(opts);
  }

  @Override
  public void printUsage(OutputStream out) {
    printUsage(out, false);
  }

  public String getMainClassName() {
    StackTraceElement[] stack = Thread.currentThread().getStackTrace();
    StackTraceElement main = stack[stack.length - 1];
    return main.getClassName();
  }

  public void printUsage(OutputStream out, boolean full) {
    try {
      String prefix = "usage: java " + getMainClassName();
      out.write(prefix.getBytes());
      printSingleLineUsage(out);
      out.write(new byte[]{'\n'});
      if (full) {
        super.printUsage(out);
      }
    } catch (IOException ex) {
      System.err.println("Error while printing usage: " + ex.getMessage());
    }
  }

  @Override
  public void parseArgument(String... args) {
    try {
      super.parseArgument(args);
    } catch(CmdLineException e) {
      // The user just wanted help.
      if (Options.displayHelp) {
        printUsage(System.err, true);
        System.exit(0);
      }
      
      // There's an unhandlable exception.
      printUsage(System.err);
      System.err.println(e.getMessage());
      System.exit(1);
    }

    if (Options.displayHelp) {
      printUsage(System.err, true);
      System.exit(0);
    }
  }
}


