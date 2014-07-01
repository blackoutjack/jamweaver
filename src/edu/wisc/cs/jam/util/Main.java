package edu.wisc.cs.jam.util;

import java.util.Arrays;

import org.kohsuke.args4j.Option;
import org.kohsuke.args4j.Argument;

import edu.wisc.cs.jam.Options;
import edu.wisc.cs.jam.OptionParser;

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
      // Process the additional command line args.
      //WalaClient.Opts walaOptions = new WalaClient.Opts();
      //OptionParser parser = new OptionParser(walaOptions);
      //parser.parseArgument(subArgs);

      //util = new WalaClient(walaOptions);
      throw new UnsupportedOperationException("Wala integration is not currently supported.");
    } else if (mainOptions.util.equals("bdd")) {
      // Process the additional command line args.
      BDDClient.Opts bddOptions = new BDDClient.Opts();
      OptionParser parser = new OptionParser(bddOptions);
      parser.parseArgument(subArgs);
      
      util = new BDDClient();
    } else {
      System.err.println("Invalid utility: " + mainOptions.util);
      System.exit(1);
    }

    util.run();
    System.exit(0);
  }

  public static class Opts extends Options {
    @Argument(required=true, index=0, usage="utility to run", metaVar="UTIL")
    public static String util;
  }
}
