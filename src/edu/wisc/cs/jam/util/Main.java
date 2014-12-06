package edu.wisc.cs.jam.util;

import java.util.Arrays;

import org.kohsuke.args4j.Option;
import org.kohsuke.args4j.Argument;

import edu.wisc.cs.jam.Options;
import edu.wisc.cs.jam.OptionParser;
import edu.wisc.cs.jam.Dbg;

public class Main {
  
  public static Opts mainOptions;

  public static void main(String[] args) {
    
    // Process the first command line argument.
    mainOptions = new Opts();
    OptionParser mainParser = new OptionParser(mainOptions);
    int arglim = Math.min(1, args.length);
    String[] mainArgs = Arrays.copyOfRange(args, 0, arglim);
    mainParser.parseArgument(mainArgs);

    String[] subArgs = Arrays.copyOfRange(args, arglim, args.length);

    Utility util = null;

    if (mainOptions.util.equals("ast")) {
      // Process the additional command line args.
      ASTPrint.Opts astOptions = new ASTPrint.Opts();
      OptionParser parser = new OptionParser(astOptions);
      parser.parseArgument(subArgs);

      util = new ASTPrint(astOptions);
    } else if (mainOptions.util.equals("native")) {
      // Process the additional command line args.
      NativeIdentifier.Opts nativeOptions = new NativeIdentifier.Opts();
      OptionParser parser = new OptionParser(nativeOptions);
      parser.parseArgument(subArgs);
      
      util = new NativeIdentifier(nativeOptions);
    } else if (mainOptions.util.equals("wala")) {
      Dbg.fatal("WALA integration has been moved to a stand-alone utility at edu.wisc.cs.jam.wala.WalaClient");
    } else if (mainOptions.util.equals("idlgen")) {
      NativeGenerator.Opts nativeOptions = new NativeGenerator.Opts();
      OptionParser parser = new OptionParser(nativeOptions);
      parser.parseArgument(subArgs);
      
      util = new NativeGenerator(nativeOptions);
    } else if (mainOptions.util.equals("bdd")) {
      // Process the additional command line args.
      BDDClient.Opts bddOptions = new BDDClient.Opts();
      OptionParser parser = new OptionParser(bddOptions);
      parser.parseArgument(subArgs);
      
      util = new BDDClient();
    } else {
      Dbg.fatal("Invalid utility: " + mainOptions.util);
    }

    util.run();
    System.exit(0);
  }

  public static class Opts extends Options {
    @Argument(required=true, index=0, usage="utility to run", metaVar="UTIL")
    public static String util;
  }
}
