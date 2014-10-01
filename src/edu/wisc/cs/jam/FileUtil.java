package edu.wisc.cs.jam;

import java.io.IOException;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.FilenameFilter;
import java.io.FileOutputStream;
import java.io.FileInputStream;
import java.io.ObjectOutputStream;
import java.io.ObjectInputStream;
import java.io.File;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;

import java.util.List;
import java.util.ArrayList;

import edu.wisc.cs.automaton.Automaton;
import edu.wisc.cs.jam.Dbg;

public class FileUtil {

  public static final File TMP_DIR;
  public static final File CACHE_DIR;
  public static final File BIN_DIR;
  protected static File PROJECT_DIR;
  protected static File workingDir;
  protected static String baseName;
  protected static boolean initialized = false;

  static {
    String jampkg = System.getenv("JAMPKG");
    if (jampkg == null) {
      Dbg.warn("JAMPKG environment variable is not set");
      BIN_DIR = new File("./bin/");
      TMP_DIR = new File(System.getProperty("java.io.tmpdir", "/tmp/"));
      CACHE_DIR = TMP_DIR;
    } else {
      File jamdir = new File(jampkg);
      if (!jamdir.isDirectory()) {
        Dbg.fatal("JAMPKG environment variable does not reference a valid directory: " + jampkg);
      }
      BIN_DIR = new File(jamdir, "bin");
      TMP_DIR = new File(jamdir, "output");
      CACHE_DIR = new File(jamdir, "cache");
    }
    if (!BIN_DIR.isDirectory()) {
      Dbg.fatal("Unable to load bin directory: " + BIN_DIR);
    }
    if (!TMP_DIR.isDirectory()) {
      boolean ok = TMP_DIR.mkdirs();
      if (!ok) {
        Dbg.fatal("Unable to initialize temporary directory: " + TMP_DIR);
      }
    }
    if (!CACHE_DIR.isDirectory()) {
      boolean ok = CACHE_DIR.mkdirs();
      if (!ok) {
        Dbg.fatal("Unable to initialize cache directory: " + CACHE_DIR);
      }
    }
  }

  public static boolean isInitialized() {
    return initialized;
  }

  public static void init(String appname) {
    baseName = appname;
    String dirname = getUniqueFilename(appname, "", TMP_DIR);
    PROJECT_DIR = new File(dirname);
    try {
      boolean ok = PROJECT_DIR.mkdirs();
      if (!ok) throw new IOException("Unable to create project directory.");
      initialized = true;
    } catch (SecurityException ex) {
      Dbg.fatal("Unable to initialize project directory");
    } catch (IOException ex) {
      Dbg.fatal(ex.getMessage());
    }
  }

  public static boolean isComment(String line) {
    line = line.trim();
    if (line.equals("")) return true;
    if (line.substring(0,1).equals("#")) return true;
    if (line.substring(0,1).equals("%")) return true;
    return false;
  }

  public static File getWorkingDir() {
    return workingDir;
  }

  public static File getMainDir() {
    return PROJECT_DIR;
  }

  public static String getBaseName() {
    return baseName;
  }

  public static synchronized File getSourceDir(String suffix) {
    File srcdir = new File(PROJECT_DIR, "source-" + suffix);
    if (!srcdir.exists()) {
      try {
        boolean ok = srcdir.mkdirs();
        if (!ok) throw new IOException("Unable to create source directory: " + srcdir.getAbsolutePath());
      } catch (SecurityException ex) {
        Dbg.fatal("Unable to initialize source directory");
      } catch (IOException ex) {
        Dbg.fatal(ex.getMessage());
      }
    }
    return srcdir;
  }

  public static synchronized File newWorkingDir() {
    workingDir = new File(getUniqueFilename("", "", PROJECT_DIR));
    try {
      boolean ok = workingDir.mkdirs();
      if (!ok) throw new IOException("Unable to create working directory: " + workingDir.getAbsolutePath());
    } catch (SecurityException ex) {
      Dbg.fatal("Unable to initialize working directory");
    } catch (IOException ex) {
      Dbg.fatal(ex.getMessage());
    }
    return workingDir;
  }

  public static String[] getBaseParts(String path) {
    String base = new File(path).getName();
    String[] parts = base.split("\\.", 2);
    String basename = parts[0];
    String ext = "";
    if (parts.length == 2) {
      ext = parts[1];
    }

    return new String[] { basename, ext };
  }

  // Return a list of trimmed lines with empty lines and comments
  // (optionally indicated by a prefix) removed.
  public static List<String> getLinesFromFile(String filePath, String commentPrefix) throws IOException {
    List<String> ret = new ArrayList<String>();
    BufferedReader reader = new BufferedReader(new FileReader(filePath));
    String line = null;
    while ((line = reader.readLine()) != null) {
      line = line.trim();
      if (line.equals("")) {
        continue;
      }
      if (commentPrefix != null && line.startsWith(commentPrefix)) {
        continue;
      }
      ret.add(line);
    }
    reader.close();
    return ret;
  }

  public static String getFileContents(String filePath) throws IOException {
    StringBuilder ret = new StringBuilder();
    BufferedReader reader = new BufferedReader(new FileReader(filePath));
    String line = null;
    while ((line = reader.readLine()) != null) {
      ret.append(line);
      ret.append("\n");
    }
    reader.close();
    return ret.toString();
  }

  public static String getUniqueFilename(String filename) {
    String[] parts = getBaseParts(filename);
    String basename = parts[0];
    String ext = parts[1];
    return getUniqueFilename(basename, ext, workingDir);
  }

  public static String getUniqueFilename(String basename, String ext, File dir) {
    final String prefix = basename.length() > 0 ? basename + "-" : "";
    final int plen = prefix.length();
    final String suffix = ext.length() > 0 ? "." + ext : "";
    final int slen = suffix.length();

    FilenameFilter ff = new FilenameFilter() {
      @Override
      public boolean accept(File dir, String name) {
        if (name.length() >= plen && name.substring(0, plen).equals(prefix)
            && name.substring(name.length() - slen).equals(suffix))
          return true;
        return false;
      } 
    };

    int highestID = -1;
    try {
      for (File efile : dir.listFiles(ff)) {
        String ename = efile.getName();
        String esuf = ename.substring(plen, ename.length() - slen);
        try {
          int eid = Integer.parseInt(esuf);
          if (eid > highestID) {
            highestID = eid;
          }
        } catch (NumberFormatException ex) {
          // File with non-numeric suffix .. ignore.
        }
      }
    } catch (SecurityException ex) {
      Dbg.err("Unable to read target directory; filename may not be unique");
    }

    return dir.getPath() + "/" + prefix + (++highestID) + suffix;
  }

  // Write data to the given file.
  public static synchronized String writeToFile(Object data, File file, boolean append, boolean tmp) {
    if (!initialized) return null;

    if (!file.isAbsolute()) {
      if (workingDir == null) newWorkingDir();
      file = new File(workingDir, file.getPath());
    }
    if (tmp) file.deleteOnExit();

    File parentDir = new File(file.getParent());
    if (!parentDir.exists()) {
      try {
        boolean ok = parentDir.mkdirs();
        if (!ok) throw new IOException("Unable to create directory: " + parentDir.getAbsolutePath());
      } catch (SecurityException ex) {
        Dbg.err("Unable to initialize directory");
        return null;
      } catch (IOException ex) {
        Dbg.err(ex.getMessage());
        return null;
      }
    }

    String content = data.toString();
    BufferedWriter w = null;
    try {
      w = new BufferedWriter(new FileWriter(file, append));
      w.write(content, 0, content.length());
      w.close();
    } catch (IOException ex) {
      Dbg.err("Error writing data to file: " + ex.getMessage());
      if (w != null) {
        try {
          w.close();
        } catch (IOException ex2) {
          Dbg.err("Unable to close file: " + ex2.getMessage());
        }
      }
    }

    String ret = null;
    try {
      ret = file.getCanonicalPath();
    } catch (IOException ex) {
      ret = file.getPath();
      Dbg.err("Unable to get canonical path of file: " + ret);
    }
    return ret;
  }

  public static String writeToFile(Object data, File file, boolean append) {
    return writeToFile(data, file, append, false);
  }

  public static String writeToFile(Object data, File file) {
    return writeToFile(data, file, false);
  }

  public static String writeToFile(Object data, String filename, boolean append, boolean tmp) {
    File file = new File(filename);
    return writeToFile(data, file, append, tmp);
  }
  
  public static String writeToFile(Object data, String filename, boolean append) {
    return writeToFile(data, filename, append, false);
  }

  public static String writeToFile(Object data, String filename) {
    return writeToFile(data, filename, false);
  }

  // Write a file to the main project directory rather than a iteration subdir.
  public static String writeToMain(Object data, String filename, boolean append, boolean tmp) {
    File file = new File(PROJECT_DIR, filename);
    return writeToFile(data, file, append, tmp);
  }

  public static String writeToMain(Object data, String filename, boolean append) {
    return writeToMain(data, filename, append, false);
  }

  public static String writeToMain(Object data, String filename) {
    return writeToMain(data, filename, false, false);
  }

  public static boolean isAccessible(String path) {
    File fl = new File(path);
    return fl.canRead();
  }

  public static String copyFileToMain(String srcpath, String destFilename) {
    try {
      // %%% Annoyingly, |Files.copy| inserts carriage returns.
      //Files.copy(new File(srcpath).toPath(), new File(getMainDir() + "/" + destFileName).toPath(), StandardCopyOption.REPLACE_EXISTING);
      String contents = getFileContents(srcpath);
      return writeToMain(contents, destFilename, false, false);
    } catch (IOException ex) {
      Dbg.err("Unable to copy file " + srcpath + " to " + destFilename + ": " + ex.getMessage());
      return null;
    }
  }

  // Write the serialized automaton to the specified file. This is more
  // memory-efficient than converting to a string and then writing that
  // string to a file, since the whole thing doesn't have to be held in
  // memory at once.
  public static String serializeToFile(RelationAutomaton aut, String filename) {
    File file = new File(filename);
    if (!file.isAbsolute()) {
      if (workingDir == null) newWorkingDir();
      file = new File(workingDir, file.getPath());
    }

    OutputStream w = null;
    try {
      w = new FileOutputStream(file, false);
      aut.serializeToStream(w);
      w.close();
    } catch (IOException ex) {
      Dbg.err("Error writing automaton to file: " + ex.getMessage());
      if (w != null) {
        try {
          w.close();
        } catch (IOException ex2) {
          Dbg.err("Unable to close file: " + ex2.getMessage());
        }
      }
    }

    String ret = null;
    try {
      ret = file.getCanonicalPath();
    } catch (IOException ex) {
      ret = file.getPath();
      Dbg.err("Unable to get canonical path of file: " + ret);
    }
    return ret;
  }

  public static Object deserialize(File objfile) throws IOException, ClassNotFoundException {
    FileInputStream fis = new FileInputStream(objfile);
    ObjectInputStream ois = new ObjectInputStream(fis);
    
    Object ret = ois.readObject();
    ois.close();
    return ret;
  }

  public static void serialize(Object obj, File objfile) throws IOException {
    FileOutputStream fos = new FileOutputStream(objfile);
    ObjectOutputStream oos = new ObjectOutputStream(fos);

    oos.writeObject(obj);
    oos.close();
  }
}


