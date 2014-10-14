package edu.wisc.cs.jam.html;

import java.io.File;
import java.io.IOException;

import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.Source;
import edu.wisc.cs.jam.Dbg;

public class HTMLSource implements Source {

  protected String path;
  protected String relativePath;
  protected String name;
  protected String source;
  
  public HTMLSource(String p) {
    path = p;
    String src = null;
    try {
      src = FileUtil.getFileContents(path);
    } catch (IOException ex) {
      Dbg.err("Unable to read HTML source file: " + ex.getMessage());
      src = "";
    }
    updateContents(src);
  }

  @Override
  public String getName() {
    if (name == null) {
      name = new File(path).getName();
    }
    return name;
  }

  @Override
  public String getPath() {
    return path;
  }

  @Override
  public String getContents() {
    return source;
  }

  @Override
  public void updateContents(String contents) {
    source = contents;
  }

}
