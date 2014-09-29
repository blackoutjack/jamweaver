package edu.wisc.cs.jam;

public interface Source {
  public String getName();
  public String getPath();
  public String getContents();
  public void updateContents(String contents);
}

