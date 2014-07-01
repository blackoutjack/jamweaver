
package edu.wisc.cs.jam.js;

import com.google.javascript.jscomp.CallGraph;
import com.google.javascript.jscomp.Compiler;
import com.google.javascript.jscomp.CompilerPass;
import com.google.javascript.jscomp.Scope;
import com.google.javascript.jscomp.Scope.Var;
import com.google.javascript.jscomp.SymbolTable;
import com.google.javascript.jscomp.NodeTraversal;
import com.google.javascript.jscomp.NodeTraversal.Callback;
import com.google.javascript.jscomp.CallGraph.Function;

import com.google.javascript.rhino.Node;
import com.google.javascript.rhino.Token;
import com.google.javascript.rhino.jstype.JSType;

import java.util.Map;
import java.util.Set;
import java.util.List;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

import edu.wisc.cs.jam.SourceFile;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.JAM;

// Generates Prolog clauses regarding types in the program
public class TypeFacts {

  private SourceFile sourceFile;
  private Map<String,JSType> symbolTypes;
  // Save these since they can be expensive to calculate.
  private int hash = 0;
  private String str = "";

  public TypeFacts(SourceFile src, SymbolTable symbols) {
    sourceFile = src;
    symbolTypes = new HashMap<String,JSType>();
    
    // Guard here to allow creating a dummy record.
    if (symbols != null) load(symbols);
  }

  protected void load(SymbolTable symbols) {
    assert symbols != null;
    //System.err.println(symbols.toDebugString());

    // The symbol table consists of Symbols (unique scope/name
    // identifiers found in the program and externs), which are each
    // associated with a set of References (source code positions
    // where the symbol is accessed).
    //
    // At the moment, we only associate a type with a Symbol name, so
    // to be sound we only do this when all References for that symbol
    // are determined to have the same type.
    // %%% It would be nice to maintain Reference-specific type info,
    // %%% though the language semantic model would need to be
    // %%% overhauled in order to use that data.
    for (SymbolTable.Symbol sym : symbols.getAllSymbols()) {
      JSType t = null;
      for (SymbolTable.Reference ref : symbols.getReferences(sym)) {
        Node n = ref.getNode();

        // Currently only record information for NAME nodes.
        if (n.getType() != Token.NAME) {
          // The only other case seems to be string literals, which are
          // not interesting.
          t = null;
          //System.err.println("Unhandled Node type in type analysis: " + n);
          break;
        }

        JSType reftype = n.getJSType();

        if (JAM.Opts.debug) {
          FileUtil.writeToMain(n + " / " + reftype + "\n", "typeinfo.txt", true);
        }

        // A null |reftype| just indicates that the reference is not
        // read but rather written to. As long as all the read refs
        // are the same type, we can assert the type globally.
        if (reftype != null) {
          if (t == null || reftype == t) {
            // The reference types are all consistent so far.
            t = reftype;
          } else {
            // The type varies, so we can't assert anything.
            // %%% We could make the type facts reference-specific.
            t = null;
            break;
          }
        }
      }

      if (t != null) {
        // All References for this symbol have the same type.
        String name = sym.getName();
        symbolTypes.put(name, t);
      }
    }
  }

  public String getType(String name) {
    JSType t = symbolTypes.get(name);
    if (t == null) return null;
    return getTypeName(t);
  }

  protected String getTypeName(JSType t) {
    String typename = t.toString();
    if (typename.equals("number")) {
      return "Number";
    } else if (typename.equals("string")) {
      return "String";
    } else if (typename.equals("boolean")) {
      return "Boolean";
    }
    return null;
  }

  @Override
  public String toString() {
    if (!str.equals("")) {
      return str;
    }

    StringBuilder ret = new StringBuilder();
    ret.append(":- export hastype/2.\n");

    boolean gotOne = false;
    /*
    for (Map.Entry<String,JSType> e : symbolTypes.entrySet()) {
      String typename = getTypeName(e.getValue());
      if (typename == null) continue;

      // We don't need to output a dummy clause.
      gotOne = true;

      // Output a clause with the following format.
      // hastype('"name"','Type').
      ret.append("hastype('\"");
      ret.append(e.getKey());
      ret.append("\"','");
      ret.append(typename);
      ret.append("').\n");
    }
    */

    if (!gotOne) {
      // Output a dummy clause to make XSB happy.
      ret.append("hastype('NONE','NONE').\n");
    }

    return ret.toString();
  }

  public Map<String,String> getTypeMap() {
    Map<String,String> ret = new HashMap<String,String>();
    for (Map.Entry<String,JSType> e : symbolTypes.entrySet()) {
      String type = getTypeName(e.getValue());
      if (type != null) {
        ret.put(e.getKey(), type);
      }
    }
    return ret;
  }

  @Override
  public int hashCode() {
    if (hash == 0) {
      for (Map.Entry<String,JSType> e : symbolTypes.entrySet()) {
        hash += e.getKey().hashCode(); 
        hash += e.getValue().toString().hashCode();
      }
    }
    return hash;
  }

}
