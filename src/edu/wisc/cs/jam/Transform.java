package edu.wisc.cs.jam;

public interface Transform {
  public abstract void run(SourceFile src);
  public abstract String newVariableName();
}

