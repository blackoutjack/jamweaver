package edu.wisc.cs.jam.proc;

import java.io.IOException;
import java.io.File;
import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.Date;

import org.kohsuke.args4j.Option;
import org.kohsuke.args4j.Argument;

import java.util.concurrent.Executors;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;
import java.util.concurrent.ExecutorService;

import edu.wisc.cs.jam.js.JavaScript;
import edu.wisc.cs.jam.JAM;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.StringUtil;
import edu.wisc.cs.jam.OptionParser;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.JAMOpts;
import edu.wisc.cs.jam.Language;
import edu.wisc.cs.jam.FatalJAMException;

public class JAMProcess extends JAM {

  protected static List<String> sourceFiles;

  public JAMProcess(Language l) {
    language = l;
  }

  protected void prepare() {
    ensureFilesExist(sourceFiles);
    ensureFilesExist(policyFiles);

    String appname = JAMOpts.appName;
    if (appname == null) {
      assert sourceFiles.size() > 0;
      // Legacy method
      String filename = sourceFiles.get(0);
      String[] srcparts = FileUtil.getBaseParts(filename);
      appname = srcparts[0];
    }
    if (JAMOpts.appSuffix != null) {
      appname += "." + JAMOpts.appSuffix;
    }
    setApplicationName(appname);

    // Initialize the FileUtil module to facilitate gathering
    // all intermediate/debugging output in a single location.
    FileUtil.init(appname);

    String infopath = FileUtil.writeToMain("predicate-limit:" + JAMOpts.refinementLimit + "\n", JAMConfig.INFO_FILENAME, true);
    FileUtil.writeToMain("syntax-only:" + JAMOpts.syntaxOnly + "\n", JAMConfig.INFO_FILENAME, true);
    FileUtil.writeToMain("policy-files:" + policyFiles.toString() + "\n", JAMConfig.INFO_FILENAME, true);
    Dbg.out("Analysis information: " + infopath, 1);

    SourceManager src = language.newSourceManager(sourceFiles);
    // %%% Check for errors in JSSourceManager constructor. 
    setSourceManager(src);
    // Save the original source files.
    src.saveSources("original");
  }

  protected static void analyze() {
    // Generate a new JAMProcess instance based on the options given.
    Language lang = new JavaScript();
    JAMProcess jam = new JAMProcess(lang);

    try {

      jam.prepare();

      jam.preanalyze();

      if (!Opts.skipAnalysis) {
        // Apply all policies to the input program.
        if (Opts.pathThreads > 1) {
          jam.runMulti();
        } else {
          jam.run();
        }
        // Output the instrumented source.
        jam.getSourceManager().saveSources("instrumented");
        Dbg.out("Summary: " + jam.getCounterExampleCount() + " counterexamples found; "
          + jam.getCheckManager().getCheckCount() + " runtime checks inserted", 1);
      }

      String output = jam.postanalyze();

      if (!JAMOpts.noOut) {
        System.out.println(output);
        System.out.flush();
      }
    } catch (FatalJAMException ex) {
      Dbg.err("Fatal error during analysis: " + ex.getMessage());
      ex.printStackTrace();
    } catch (RuntimeException ex) {
      Dbg.err("Uncaught runtime exception: " + ex.getMessage());
      ex.printStackTrace();
    } finally {
      SourceManager sm = jam.getSourceManager();
      if (sm != null) {
        sm.close();
      }
    }
  }


  public static void main(String[] args) {
    loadOptions(args);
    analyze();
    System.exit(0);
  }

  protected static void loadOptions(String[] args) {
    //try { System.in.read(); } catch (IOException ex) {}

    // Process the command line args.
    OptionParser parser = new OptionParser(new Opts());
    parser.parseArgument(args);

    sourceFiles = Opts.sourceFiles;
    if (Opts.policyFiles == null) {
      Dbg.warn("No policy files provided");
      policyFiles = new ArrayList<String>();
    } else {
      policyFiles = StringUtil.parse(Opts.policyFiles, ',', '\\');
    }

    // Adjust options as necessary.
    if (Opts.refinementLimit == -1)
      Opts.refinementLimit = Integer.MAX_VALUE;
    if (Opts.debug)
      Opts.debugQueries = true;
  }

  public static class Opts extends JAMOpts {

    @Argument(required=true, index=0, usage="source file(s)", metaVar="SRCFILE+", multiValued=true)
    public static List<String> sourceFiles;

  }

}
