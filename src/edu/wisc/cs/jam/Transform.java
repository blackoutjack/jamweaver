package edu.wisc.cs.jam;

public interface Transform {
  public abstract void run(SourceManager src);
  public abstract String newVariableName();
}

