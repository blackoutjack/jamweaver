package edu.wisc.cs.jam.js;

import java.io.IOException;
import java.io.File;

import com.google.javascript.jscomp.SourceFile;

import edu.wisc.cs.jam.Source;
import edu.wisc.cs.jam.Dbg;
import edu.wisc.cs.jam.FileUtil;

public class JSSource implements Source {

  protected SourceFile sourceFile;
  protected String path;
  protected String relativePath;
  protected String name;

  // Event handler code need to be wrapped in a function. The
  // |wrap| flag indicates this, and |wrapper| is the name of the
  // function. Naming collisions are avoid (hopefully) by.
  protected boolean wrap = false;
  protected String wrapper;
  
  public JSSource(String p, boolean wrap) {
    path = p;
    this.wrap = wrap;
    if (wrap) {
      // Read the contents, wrap in a function, and create from code.
      JSTransform namer = new JSTransform();
      wrapper = namer.newVariableName("f");
      try {
        String code = FileUtil.getFileContents(path);
        code = "function " + wrapper + "() {\n" + code + "\n}";
        sourceFile = SourceFile.fromCode(path, code);
      } catch (IOException ex) {
        Dbg.err("Unable to wrap event code: " + path);
        sourceFile = SourceFile.fromFile(path);
      }
    } else {
      sourceFile = SourceFile.fromFile(path);
    }
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
    String code = null;
    try {
      code = sourceFile.getCode();
    } catch (IOException ex) {
      Dbg.err("Unable to retrieve source code for file: " + getPath());
      code = "";
    }
    return code;
  }

  public boolean isWrapped() {
    return wrap;
  }

  @Override
  public void updateContents(String contents) {
    // Code that needs a wrapper is assumed to already have it.
    sourceFile = SourceFile.fromCode(path, contents);
  }

  public void setRelativePath(String relpath) {
    relativePath = relpath;
  }

  public String getRelativePath() {
    return relativePath;
  }

  public SourceFile getClosureSourceFile() {
    return sourceFile;
  }
}
