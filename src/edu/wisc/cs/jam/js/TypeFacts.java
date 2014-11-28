
package edu.wisc.cs.jam.js;

import com.google.javascript.jscomp.Compiler;
import com.google.javascript.jscomp.CompilerPass;
import com.google.javascript.jscomp.Scope;
import com.google.javascript.jscomp.Scope.Var;
import com.google.javascript.jscomp.SymbolTable;
import com.google.javascript.jscomp.NodeTraversal;
import com.google.javascript.jscomp.NodeTraversal.Callback;

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

import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.JAM;
import edu.wisc.cs.jam.Dbg;

// Generates Prolog clauses regarding types in the program
public class TypeFacts {

  private Map<String,String> symbolTypes;
  // Save these since they can be expensive to calculate.
  private int hash = 0;
  private String str = "";

  public TypeFacts(SymbolTable symbols) {
    symbolTypes = new HashMap<String,String>();
    
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
        symbolTypes.put(name, getTypeName(t));
      }
    }
  }

  public String getType(String name) {
    return symbolTypes.get(name);
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

  /*
  // %%% Doesn't work.
  protected JSType getTypeFromName(String typ) {
    if (typ.equals("Number")) {
      JSType ret = Node.newNumber(0).getJSType();
      return ret;
    } else if (typ.equals("String")) {
      JSType ret = Node.newString("").getJSType();
      return ret;
    } else if (typ.equals("Boolean")) {
      JSType ret = new Node(Token.TRUE).getJSType();
      return ret;
    }
    return null;
  }
  */

  public boolean propagateType(String src, String dest) {
    String t = symbolTypes.get(src);
    if (t == null) return false;
    assert !symbolTypes.containsKey(dest) : "Destination name already has a type: " + dest + " / " + symbolTypes.get(dest);
    symbolTypes.put(dest, t);
    return true;
  }

  public void setType(String name, String typ) {
    symbolTypes.put(name, typ);
  }

  @Override
  public String toString() {
    if (!str.equals("")) {
      return str;
    }

    StringBuilder ret = new StringBuilder();
    for (Map.Entry<String,String> e : symbolTypes.entrySet()) {
      ret.append(e.getKey());
      ret.append(" / ");
      ret.append(e.getValue());
      ret.append("\n");
    }

    return ret.toString();
  }

  @Override
  public int hashCode() {
    if (hash == 0) {
      for (Map.Entry<String,String> e : symbolTypes.entrySet()) {
        hash += e.getKey().hashCode(); 
        hash += e.getValue().hashCode();
      }
    }
    return hash;
  }

  @Override
  public boolean equals(Object o) {
    if (o == null) return false;
    if (!(o instanceof TypeFacts)) return false;
    if (this == o) return true;
    TypeFacts other = (TypeFacts)o;
    return this.hashCode() == other.hashCode();
  }
}
