package edu.wisc.cs.jam;

import org.kohsuke.args4j.Option;

// Generic grouping of command line options.
public class Options {

  // Every command line invocation should support a --help flag.
  @Option(name="--help", usage="display this message")
  public static boolean displayHelp = false;

}

