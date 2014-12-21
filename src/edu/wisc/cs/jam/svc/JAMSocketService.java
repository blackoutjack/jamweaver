package edu.wisc.cs.jam.svc;

import java.io.IOException;
import java.io.File;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.nio.charset.Charset;
import java.nio.charset.CharsetDecoder;
import java.nio.channels.SocketChannel;
import java.nio.channels.ServerSocketChannel;
import java.net.URL;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.net.ServerSocket;
import java.net.URLDecoder;
import javax.net.ssl.SSLContext;
import java.net.SocketTimeoutException; 

import org.apache.http.HttpRequest;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.Header;
import org.apache.http.HttpException;
import org.apache.http.HttpEntity;
import org.apache.http.HttpEntityEnclosingRequest;
import org.apache.http.RequestLine;
import org.apache.http.ExceptionLogger;
import org.apache.http.ConnectionClosedException;
import org.apache.http.entity.StringEntity;
import org.apache.http.message.BasicLineParser;
import org.apache.http.config.MessageConstraints;
import org.apache.http.config.SocketConfig;
import org.apache.http.io.SessionInputBuffer;
import org.apache.http.impl.io.DefaultHttpRequestParser;
import org.apache.http.impl.io.SessionInputBufferImpl;
import org.apache.http.impl.io.HttpTransportMetricsImpl;
import org.apache.http.impl.DefaultBHttpServerConnection;
import org.apache.http.message.BasicHttpEntityEnclosingRequest;
import org.apache.http.util.EntityUtils;
import org.apache.http.impl.bootstrap.HttpServer;
import org.apache.http.impl.bootstrap.ServerBootstrap;
import org.apache.http.protocol.HttpRequestHandler;
import org.apache.http.protocol.HttpContext;
import org.apache.http.ssl.SSLContexts;

import java.util.Locale;
import java.util.concurrent.TimeUnit;
import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.LinkedHashMap;
import java.util.ArrayList;
import java.util.Date;

import java.security.NoSuchAlgorithmException;
import java.security.GeneralSecurityException;

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
import edu.wisc.cs.jam.RelationAutomaton;

public class JAMSocketService extends JAMService {

  protected String[] args;

  public JAMSocketService(Language l) {
    language = l;
  }

  protected class JAMHttpHandler implements HttpRequestHandler  {

    protected Map<String,String> content;

    public void handle(final HttpRequest request, final HttpResponse response, final HttpContext context) throws HttpException, IOException {

      // Refresh the options.
      loadOptions(args);

      RequestLine reqline = request.getRequestLine();
      String method = reqline.getMethod().toUpperCase(Locale.ROOT);
      if (!method.toUpperCase().equals("POST") && !method.toUpperCase().equals("PUT")) {
        throw new UnsupportedOperationException(method + " method not supported");
      }
      String target = reqline.getUri();
      if (target.equals("/shutdown")) {
        Dbg.err("Shutdown signal received");
        getSourceManager().close();
        System.exit(0);
      }

      content = new LinkedHashMap<String,String>(); 

      Header[] headers = request.getAllHeaders();
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
          // %%% Other headers
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

      int cnt = 0;
      try {
        if (request instanceof HttpEntityEnclosingRequest) {
          HttpEntityEnclosingRequest enclose = (HttpEntityEnclosingRequest)request;
          HttpEntity entity = enclose.getEntity();
          String payload = EntityUtils.toString(entity);
          //Dbg.dbg("PAYLOAD: " + payload);

          String[] contents = payload.split("\u0003");
          for (String cont : contents) {
            String filename = getApplicationName();
            if (cnt > 0) filename += cnt;
            filename += ".js";
            content.put(filename, cont);
            //Dbg.dbg("FILENAME: " + filename + "\nCONTENT:\n" + cont);
          }
        } else {
          Dbg.err("No entity attached to request");
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

      // Run the analysis.
      String output = analyze(content);

      // %%% Put this somewhere else or eliminate it.
      RelationAutomaton.clear();

      HttpEntity responseEntity = new StringEntity(output);
      response.setEntity(responseEntity);
      response.setHeader("InfoPath", new File(FileUtil.getMainDir(), JAMConfig.INFO_FILENAME).getAbsolutePath());
    }
  }

  protected String analyze(Map<String,String> srcs) {
    if (srcs.size() == 0) return "";

    // Initialize the FileUtil module to facilitate gathering
    // all intermediate/debugging output in a single location.
    FileUtil.init(getApplicationName());

    ensureFilesExist(policyFiles);

    String infopath = FileUtil.writeToMain("predicate-limit:" + Opts.refinementLimit + "\n", JAMConfig.INFO_FILENAME, true);
    FileUtil.writeToMain("syntax-only:" + Opts.syntaxOnly + "\n", JAMConfig.INFO_FILENAME, true);
    FileUtil.writeToMain("policy-files:" + policyFiles.toString() + "\n", JAMConfig.INFO_FILENAME, true);
    Dbg.out("Analysis information: " + infopath, 1);


    SourceManager srcman = language.newSourceManager(srcs);
    // %%% Check for errors in JSSourceManager constructor. 
    setSourceManager(srcman);
    // Save the original source files.
    srcman.saveSources("original");

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

    String output = postanalyze();
    return output;
  }

  protected static class StdErrorExceptionLogger implements ExceptionLogger {

    @Override
    public void log(final Exception ex) {
      if (ex instanceof SocketTimeoutException) {
        Dbg.err("Connection timed out");
      } else if (ex instanceof ConnectionClosedException) {
        Dbg.err("Connection closed: " + ex.getMessage());
      } else {
        ex.printStackTrace();
      }
    }

  }

  @Override
  public void doServiceLoop(String[] args) {
    this.args = args;

    SSLContext sslcontext = null;
    if (Opts.ssl) {
      // Initialize SSL context
      URL url = JAMSocketService.class.getResource("/my.keystore");
      if (url == null) {
        Dbg.fatal("Keystore not found");
      }
      try {
        sslcontext = SSLContexts.custom().loadKeyMaterial(url, "secret".toCharArray(), "secret".toCharArray()).build();
      } catch (GeneralSecurityException ex) {
        Dbg.fatal("Unable to initialize SSL: " + ex.getMessage());
      } catch (IOException ex) {
        Dbg.fatal("Unable to initialize SSL: " + ex.getMessage());
      }
    }

    SocketConfig socketConfig = SocketConfig.custom().setSoTimeout(15000).setTcpNoDelay(true).build();

    final HttpServer server = ServerBootstrap.bootstrap().setListenerPort(Opts.port).setServerInfo("JAM/1.1").setSocketConfig(socketConfig).setSslContext(sslcontext).setExceptionLogger(new StdErrorExceptionLogger()).registerHandler("*", new JAMHttpHandler()).create();

    try {
      server.start();
    } catch (IOException ex) {
      Dbg.err("Unable to start server: " + ex.getMessage());
      return;
    }

    try {
      server.awaitTermination(Long.MAX_VALUE, TimeUnit.DAYS);
    } catch (InterruptedException ex) {
      Dbg.warn("Server interrupted: " + ex.getMessage());
    }

    Runtime.getRuntime().addShutdownHook(new Thread() {
      @Override
      public void run() {
        server.shutdown(5, TimeUnit.SECONDS);
      }
    });
  }

}
