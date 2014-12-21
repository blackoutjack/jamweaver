package edu.wisc.cs.jam.svc;

import java.io.IOException;
import java.io.File;
import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.nio.charset.Charset;
import java.nio.charset.CharsetDecoder;
import org.apache.http.HttpRequest;
import org.apache.http.Header;
import org.apache.http.HttpException;
import org.apache.http.message.BasicLineParser;
import org.apache.http.config.MessageConstraints;
import org.apache.http.io.SessionInputBuffer;
import org.apache.http.impl.io.DefaultHttpRequestParser;
import org.apache.http.impl.io.SessionInputBufferImpl;
import org.apache.http.impl.io.HttpTransportMetricsImpl;

import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.LinkedHashMap;
import java.util.ArrayList;
import java.util.Date;

import org.kohsuke.args4j.Option;
import org.kohsuke.args4j.Argument;

import java.util.concurrent.Executors;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;
import java.util.concurrent.ExecutorService;

import edu.wisc.cs.jam.js.JavaScript;
import edu.wisc.cs.jam.js.JSSourceManager;
import edu.wisc.cs.jam.JAM;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.StringUtil;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.OptionParser;
import edu.wisc.cs.jam.JAMOpts;
import edu.wisc.cs.jam.Language;

public class JAMService extends JAM {
  
  public static final String DEFAULT_APP = "jam-service";

  protected static void loadOptions(String[] args) {
    //try { System.in.read(); } catch (IOException ex) {}

    // Process the command line args.
    OptionParser parser = new OptionParser(new Opts());
    parser.parseArgument(args);

    if (Opts.policyFiles == null) {
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

  public void doServiceLoop(String[] args) {
    throw new UnsupportedOperationException("Abstract method called, please use subclass");
  }

  public static void main(String[] args) {

    // Generate a new JAMService instance based on the options given.
    Language lang = new JavaScript();

    loadOptions(args);
    JAMService jam;
    if (Opts.useStdin) {
      jam = new JAMStdinService(lang);
    } else {
      jam = new JAMSocketService(lang);
    }

    jam.doServiceLoop(args);

    jam.getSourceManager().close();
  }

  public static class Opts extends JAMOpts {

    @Option(name="--stdin", usage="Take input from STDIN rather than a socket")
    public static boolean useStdin = false;

    @Option(name="--port", usage="Port to listen on", metaVar="PORT")
    public static int port = 11215;

    @Option(name="--ssl", usage="Use SSL encryption")
    public static boolean ssl = false;
  }
}
