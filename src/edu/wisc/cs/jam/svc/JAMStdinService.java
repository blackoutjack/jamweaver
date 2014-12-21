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

public class JAMStdinService extends JAMService {

  protected SessionInputBufferImpl buf = null;

  public JAMStdinService(Language l) {
    language = l;
  }

  protected void loadListener() {
    // Noop
    return;
  }

  // Read in HTTP headers and file content, delimited by 0x03 characters
  // and terminated by 0x04.
  protected Map<String,String> loadSource() {
    Map<String,String> ret = new LinkedHashMap<String,String>(); 

    int cnt = 0;
    if (buf == null) {
      CharsetDecoder csd = Charset.forName("UTF-8").newDecoder();

      buf = new SessionInputBufferImpl(new HttpTransportMetricsImpl(), 1024);
      buf.bind(System.in);
    }
    DefaultHttpRequestParser parser = new DefaultHttpRequestParser(buf);
    try {
      HttpRequest http = parser.parse();
      //Header[] headers = DefaultHttpRequestParser.parseHeaders(buf, -1, -1, BasicLineParser.INSTANCE);
      Header[] headers = http.getAllHeaders();
      for (Header header : headers) {
        String key = header.getName();
        String value = header.getValue();
        //Dbg.dbg(key + ":" + value);
        
        if (key.equals("PolicyFiles")) {
          Opts.policyFiles = value;
          policyFiles = StringUtil.parse(Opts.policyFiles, ',', '\\');
        } else if (key.equals("Refine")) {
          Opts.refinementLimit = Integer.valueOf(value);
        } else if (key.equals("Cartesian")) {
          Opts.cartesian = value.equals("1");
        } else if (key.equals("Disjoint")) {
          Opts.disjoint = value.equals("1");
        } else if (key.equals("Lazy")) {
          Opts.lazy = value.equals("1");
        } else if (key.equals("Seedfile")) {
          Opts.seedFile = value.equals("") ? null : value;
        } else if (key.equals("SourceIsList")) {
          Opts.sourceIsList = value.equals("1");
        } else if (key.equals("Intraprocedural")) {
          Opts.intraprocedural = value.equals("1");
        } else if (key.equals("SyntaxOnly")) {
          Opts.syntaxOnly = value.equals("1");
        } else if (key.equals("AppName")) {
          Opts.appName = value.equals("") ? null : value;
        } else if (key.equals("HtmlFile")) {
          Opts.htmlFile = value.equals("") ? null : value;
        } else if (key.equals("AppSuffix")) {
          Opts.appSuffix = value.equals("") ? null : value;
        } else if (key.equals("QueryTimeout")) {
          Opts.queryTimeout = Integer.valueOf(value);
        } else {
          // %%% Other cases
        }
      }

    } catch (HttpException ex) {
      Dbg.err("Unable to parse request " + cnt + ": " + ex.getMessage());
    } catch (IOException ex) {
      String msg = ex.getMessage();
      if (msg.equals("Stream closed")) {
        Dbg.out("Input stream closed, shutting down", 2);
      } else {
        Dbg.err("Problem while reading source " + cnt + ": " + ex.getMessage());
      }
    }

    // Make sure we use the AppName header below.
    String appname = Opts.appName;
    if (appname == null) {
      appname = DEFAULT_APP;
    }
    if (Opts.appSuffix != null) {
      appname += "." + Opts.appSuffix;
    }
    setApplicationName(appname);

    try {
      StringBuilder cur = new StringBuilder();
      int c = -1;
      while ((c = buf.read()) != -1) {
        if (c == 0x03) {
          String filename = getApplicationName();
          if (cnt > 0) filename += cnt;
          filename += ".js";
          ret.put(filename, cur.toString());
          cur = new StringBuilder();
          cnt++;
        } else if (c == 0x04) {
          break;
        } else {
          cur.append((char)c);
        }
      }
      if (cur.length() > 0) {
        String filename = getApplicationName();
        if (cnt > 0) filename += cnt;
        filename += ".js";
        ret.put(filename, cur.toString());
        cnt++;
      }
    } catch (IOException ex) {
      String msg = ex.getMessage();
      if (msg.equals("Client closed connection")
          || msg.equals("Stream closed")) {
        Dbg.out("Input stream closed, shutting down", 2);
      } else {
        Dbg.err("Problem while reading source " + cnt + ": " + ex.getMessage());
      }
    }

    return ret;
  }

  protected boolean prepare() {

    Map<String,String> srcs = loadSource();
    if (srcs.size() == 0) {
      return false;
    }

    // Initialize the FileUtil module to facilitate gathering
    // all intermediate/debugging output in a single location.
    FileUtil.init(getApplicationName());

    String infopath = FileUtil.writeToMain("predicate-limit:" + Opts.refinementLimit + "\n", JAMConfig.INFO_FILENAME, true);
    FileUtil.writeToMain("syntax-only:" + Opts.syntaxOnly + "\n", JAMConfig.INFO_FILENAME, true);
    FileUtil.writeToMain("policy-files:" + policyFiles.toString() + "\n", JAMConfig.INFO_FILENAME, true);
    Dbg.out("Analysis information: " + infopath, 1);

    ensureFilesExist(policyFiles);

    SourceManager srcman = language.newSourceManager(srcs);
    // %%% Check for errors in JSSourceManager constructor. 
    setSourceManager(srcman);
    // Save the original source files.
    srcman.saveSources("original");
    return true;
  }

  @Override
  public void doServiceLoop(String[] args) {

    // Service loop.
    while (true) {
      loadOptions(args);
      if (!prepare()) {
        break;
      }

      preanalyze();

      if (!Opts.skipAnalysis) {
        // Apply all policies to the input program.
        if (Opts.pathThreads > 1) {
          runMulti();
        } else {
          run();
        }
        // Output the instrumented source.
        getSourceManager().saveSources("instrumented");
        Dbg.out("Summary: " + getCounterExampleCount() + " counterexamples found; "
          + getCheckManager().getCheckCount() + " runtime checks inserted", 1);
      }

      postanalyze();

      // Indicate end-of-file.
      System.out.write(0x03);
      System.out.flush();
      System.err.write(0x03);
      System.err.flush();
    }
  }
}
