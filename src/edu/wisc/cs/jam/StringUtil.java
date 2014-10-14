package edu.wisc.cs.jam;

import java.util.List;
import java.util.ArrayList;


public class StringUtil {

  // Split a string by a delimiting character that can be escaped.
  public static List<String> parse(String input, char delim, char esc) {
    assert delim != esc : "Delimiter is the same as escaping character: " + delim;
    List<String> ret = new ArrayList<String>();

    StringBuilder cur = new StringBuilder();
    boolean escflag = false;
    for (int i=0; i<input.length(); i++) {
      char c = input.charAt(i);
      if (c == esc) {
        if (escflag) {
          cur.append(c);
          escflag = false;
        } else {
          escflag = true;
        }
      } else if (c == delim) {
        if (escflag) {
          cur.append(c);
        } else {
          ret.add(cur.toString());
          cur = new StringBuilder();
        }
        escflag = false;
      } else {
        cur.append(c);
        escflag = false;
      }
    }
    if (cur.length() > 0) {
      ret.add(cur.toString());
    }
    
    return ret;
  }

  public static boolean isQuoted(String str) {
    if (str.startsWith("\"") && str.endsWith("\""))
      return true;
    if (str.startsWith("'") && str.endsWith("'"))
      return true;
    return false;
  }

  public static String unquote(String str) {
    assert isQuoted(str) : "Trying to unquote an unquoted string: " + str;
    // Detect which types of quotes are used and unescape accordingly.
    char qval = str.charAt(0);

    // Strip the existing quotes first.
    str = str.substring(1, str.length() - 1);
    if (qval == '\'') {
      str = str.replace("\\'", "'");
    } else {
      assert qval == '"' : "Unknown quoted string format: " + str;
      str = str.replace("\\\"", "\"");  
    }
    return str;
  }
}
