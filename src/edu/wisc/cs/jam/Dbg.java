package edu.wisc.cs.jam;

import java.util.Date;
import java.util.List;
import java.text.NumberFormat;

// Debugging utilities
public class Dbg {

  private static long startTime;

  static {
    startTime = new Date().getTime();
  }

  protected static void appendHeader(StringBuilder sb) {
    sb.append(Thread.currentThread().getName());
    if (JAM.Opts.suppressTime) {
      sb.append(": ");
      return;
    }

    long t = new Date().getTime() - startTime;
    sb.append("(");
    sb.append(t);
    sb.append("): ");
  }

  public static void memory(String id) {
    if (!JAM.Opts.debugMemory) return;
    
    Runtime runtime = Runtime.getRuntime();

    NumberFormat format = NumberFormat.getInstance();
    StringBuilder sb = new StringBuilder();

    long maxMemory = runtime.maxMemory();
    long allocatedMemory = runtime.totalMemory();
    long freeMemory = runtime.freeMemory();

    sb.append(id + " free memory: " + format.format(freeMemory / 1024) + "\n");
    sb.append(id + " allocated memory: " + format.format(allocatedMemory / 1024) + "\n");
    sb.append(id + " max memory: " + format.format(maxMemory / 1024) + "\n");
    sb.append(id + " total free memory: " + format.format((freeMemory + (maxMemory - allocatedMemory)) / 1024) + "\n");

    System.err.print(sb);
    System.err.flush();
  }

  public static void out(String message, int level) {
    if (JAM.Opts.verbosity >= level) {
      StringBuilder sb = new StringBuilder();
      appendHeader(sb);
      sb.append(message);
      sb.append("\n");
      System.err.print(sb);
      System.err.flush();

      if (JAM.Opts.debug)
        FileUtil.writeToMain(sb, "out.txt", true);
    }
  }

  public static void err(String message) {
    StringBuilder sb = new StringBuilder();
    appendHeader(sb);
    sb.append("ERROR: ");
    sb.append(message);
    sb.append("\n");
    System.err.print(sb);
    System.err.flush();

    if (JAM.Opts.debug)
      FileUtil.writeToMain(sb, "err.txt", true);
  }

  public static void fatal(String message) {
    StringBuilder sb = new StringBuilder();
    appendHeader(sb);
    sb.append("FATAL: ");
    sb.append(message);
    sb.append("\n");
    System.err.print(sb);
    System.err.flush();

    if (JAM.Opts.debug)
      FileUtil.writeToMain(sb, "err.txt", true);
    
    System.exit(1);
  }

  public static void warn(String message) {
    StringBuilder sb = new StringBuilder();
    appendHeader(sb);
    sb.append("WARNING: ");
    sb.append(message);
    sb.append("\n");
    System.err.print(sb);
    System.err.flush();

    if (JAM.Opts.debug)
      FileUtil.writeToMain(sb, "err.txt", true);
  }

  // Use this to output temporary debugging data.
  public static void dbg(String message) {
    StringBuilder sb = new StringBuilder();
    appendHeader(sb);
    sb.append("DEBUG: ");
    sb.append(message);
    sb.append("\n");
    System.err.print(sb);
    System.err.flush();

    FileUtil.writeToMain(sb, "dbg.txt", true);
  }

  public static void trace() {
    // Omits the current (|Dbg.trace|) frame.
    StackTraceElement[] stes = new Throwable().getStackTrace();
    for (int i=0; i<stes.length - 1; i++) {
      StackTraceElement ste = stes[i];
      System.err.println(ste.toString());
    }
    System.err.flush();
  }

  public static void writeQueryHeader(String hdr, boolean concrete) {
    if (!JAM.Opts.debugQueries) return;
    String flname = "results-" + (concrete ? "concrete" : "symbolic");
    FileUtil.writeToFile("[" + hdr + "]\n", flname, true);
  }

  public static void writeCubeToFile(List<DataState> states, String filename) {
    if (!JAM.Opts.debug) return;

    for (DataState state : states) {
      FileUtil.writeToFile(state.toStringFull() + "\n", filename, true);
    }
    FileUtil.writeToFile("\n", filename, true);
  }

  public static void writeCubesToFile(List<List<DataState>> states, String filename) {
    if (!JAM.Opts.debug) return;

    for (List<DataState> subStates : states) {
      writeCubeToFile(subStates, filename);
    }
  }
}
