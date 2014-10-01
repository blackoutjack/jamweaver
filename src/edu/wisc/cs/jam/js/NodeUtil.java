package edu.wisc.cs.jam.js;

import java.util.Collection;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.Set;
import java.util.LinkedHashSet;
import java.io.IOException;
import java.io.File;

import com.google.javascript.jscomp.Compiler;
import com.google.javascript.jscomp.CompilerInput;
import com.google.javascript.jscomp.Compiler.CodeBuilder;
import com.google.javascript.jscomp.CallGraph.Function;
import com.google.javascript.jscomp.CallGraph;
import com.google.javascript.rhino.Node;
import com.google.javascript.rhino.Token;

import com.google.javascript.jscomp.ClosureUtil;

import edu.wisc.cs.jam.Exp;
import edu.wisc.cs.jam.SourceManager;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.Dbg;

public class NodeUtil {

  // %%% Not a good categorization.
  private static int[] STATEMENT_TYPES = {
    Token.FOR,
    Token.IF,
    Token.SWITCH,
    Token.WHILE,
    Token.DO,
    Token.EXPR_RESULT,
    Token.VAR,
    Token.CASE,
    Token.DEFAULT_CASE,
    Token.THROW,
    Token.RETURN,
    Token.SCRIPT
  };
  private static int[] LOOP_TYPES = {
    Token.FOR,
    Token.WHILE,
    Token.DO
  };
  private static int[] CONTROL_TYPES = {
    Token.FOR,
    Token.IF,
    Token.SWITCH,
    Token.CASE,
    Token.DEFAULT_CASE,
    Token.WHILE,
    Token.DO,
    Token.TRY,
    Token.CATCH
  };
  private static int[] LITERAL_TYPES = {
    Token.FALSE,
    Token.TRUE,
    Token.STRING,
    Token.NUMBER,
    Token.NULL
  };
  private static int[] UNOP_TYPES = {
    Token.INC,
    Token.DEC
  };
  private static int[] BINOP_TYPES = {
    Token.BITOR,
    Token.BITXOR,
    Token.BITAND,
    Token.SHEQ,
    Token.SHNE,
    Token.EQ,
    Token.NE,
    Token.LT,
    Token.LE,
    Token.GT,
    Token.GE,
    Token.LSH,
    Token.RSH,
    Token.URSH,
    Token.ADD,
    Token.SUB,
    Token.MUL,
    Token.DIV,
    Token.MOD,
    Token.AND,
    Token.OR,
  };
  private static int[] NUMBER_OP_TYPES = {
    Token.BITOR,
    Token.BITXOR,
    Token.BITAND,
    Token.LSH,
    Token.RSH,
    Token.URSH,
    Token.SUB,
    Token.MUL,
    Token.DIV,
    Token.MOD,
    Token.INC,
    Token.DEC
  };
  private static int[] BOOLEAN_OP_TYPES = {
    Token.SHEQ,
    Token.SHNE,
    Token.EQ,
    Token.NE,
    Token.LT,
    Token.LE,
    Token.GT,
    Token.GE,
    Token.NOT,
  };
  private static int[] ACCESSOR_TYPES = {
    Token.GETPROP,
    Token.GETELEM,
  };
  private static int[] ASSIGN_TYPES = {
    // %%% Need to add INC/DEC to this?
    Token.ASSIGN,
    Token.ASSIGN_BITOR,
    Token.ASSIGN_BITXOR,
    Token.ASSIGN_BITAND,
    Token.ASSIGN_LSH,
    Token.ASSIGN_RSH,
    Token.ASSIGN_URSH,
    Token.ASSIGN_ADD,
    Token.ASSIGN_SUB,
    Token.ASSIGN_MUL,
    Token.ASSIGN_DIV,
    Token.ASSIGN_MOD
  };
  
  private static int[] BLOCK_TYPES = {
    Token.BLOCK,
    Token.SCRIPT
  };

  // Text list of natives parsed the first time JAM is loaded.
  public static final String NATIVE_DAT_PATH = JAMConfig.JAMPKG + "/lib/native.props";
  // Serializations of native information used on subsequent runs.
  public static final String NATIVE_LOC_TO_EXP_PATH = JAMConfig.JAMPKG + "/lib/native-le.ser";
  public static final String NATIVE_EXP_TO_LOC_PATH = JAMConfig.JAMPKG + "/lib/native-el.ser";

  public static Map<String,String> nativeLocationToExpression;
  public static Map<String,String> nativeExpressionToLocation;
  public static Map<String,String> closureExpression;
  
  static {
    
    // Map the Closure's extern.zip path to a particular native object
    // to the generated representation. These can be eliminated
    // one-by-one by modifying the extern file that is used.
    closureExpression = new HashMap<String,String>();
    closureExpression.put("alert","Window.prototype.alert");
    closureExpression.put("confirm","Window.prototype.confirm");
    closureExpression.put("eval","window.eval");
    closureExpression.put("isNaN","window.isNaN");
    closureExpression.put("dump","Window.prototype.dump");
    closureExpression.put("escape","window.escape");
    closureExpression.put("unescape","window.unescape");
    closureExpression.put("decodeURIComponent","window.decodeURIComponent");
    closureExpression.put("encodeURIComponent","window.encodeURIComponent");
    closureExpression.put("decodeURI","window.decodeURI");
    closureExpression.put("encodeURI","window.encodeURI");
    closureExpression.put("parseInt","window.parseInt");
    closureExpression.put("parseFloat","window.parseFloat");
    closureExpression.put("setTimeout","Window.prototype.setTimeout");
    closureExpression.put("clearTimeout","Window.prototype.clearTimeout");
    closureExpression.put("setInterval","Window.prototype.setInterval");
    closureExpression.put("clearInterval","Window.prototype.clearInterval");
    closureExpression.put("isFinite","window.isFinite");

    closureExpression.put("Function.prototype.apply", "Object.__proto__.apply");
    closureExpression.put("Function.prototype.bind", "Object.__proto__.bind");
    closureExpression.put("Function.prototype.call", "Object.__proto__.call");
    closureExpression.put("Function.prototype.isGenerator", "Object.__proto__.isGenerator");
    closureExpression.put("Function.prototype.toSource", "Object.__proto__.toSource");
    closureExpression.put("Function.prototype.toString", "Object.__proto__.toString");

    closureExpression.put("Document.prototype.getElementById","HTMLDocument.prototype.getElementById");
    closureExpression.put("Document.prototype.getElementsByTagName","HTMLDocument.prototype.getElementsByTagName");
    closureExpression.put("Document.prototype.focus","HTMLElement.prototype.focus");
    closureExpression.put("Document.prototype.write","HTMLDocument.prototype.write");
    closureExpression.put("Document.prototype.writeln","HTMLDocument.prototype.writeln");
    closureExpression.put("Document.prototype.createElement","HTMLDocument.prototype.createElement");
    closureExpression.put("Document.prototype.createDocumentFragment","HTMLDocument.prototype.createDocumentFragment");
    closureExpression.put("Document.prototype.createTextNode","HTMLDocument.prototype.createTextNode");
    closureExpression.put("Document.prototype.getElementsByName","HTMLDocument.prototype.getElementsByName");
    closureExpression.put("Document.prototype.createRange","HTMLDocument.prototype.createRange");
    closureExpression.put("Document.prototype.createComment","HTMLDocument.prototype.createComment");
    closureExpression.put("Document.prototype.querySelectorAll","HTMLDocument.prototype.querySelectorAll");
    closureExpression.put("Document.prototype.getElementsByClassName","HTMLDocument.prototype.getElementsByClassName");
    closureExpression.put("Document.prototype.open","HTMLDocument.prototype.open");
    closureExpression.put("Document.prototype.close","HTMLDocument.prototype.close");
    closureExpression.put("Document.prototype.queryCommandValue", "HTMLDocument.prototype.queryCommandValue");
    closureExpression.put("Document.prototype.getElementsByTagNameNS","HTMLDocument.prototype.getElementsByTagNameNS");
    closureExpression.put("Document.prototype.createEvent","HTMLDocument.prototype.createEvent");
    closureExpression.put("Document.prototype.createAttribute","HTMLDocument.prototype.createAttribute");
    closureExpression.put("Document.prototype.createElementNS","HTMLDocument.prototype.createElementNS");
    closureExpression.put("Document.prototype.querySelector","HTMLDocument.prototype.querySelector");
    closureExpression.put("Document.prototype.clear","HTMLDocument.prototype.clear");

    closureExpression.put("Element.prototype.focus","HTMLElement.prototype.focus");
    closureExpression.put("Element.prototype.blur","HTMLElement.prototype.blur");
    closureExpression.put("Element.prototype.click","HTMLElement.prototype.click");
    closureExpression.put("Element.prototype.scrollIntoView","HTMLElement.prototype.scrollIntoView");

    closureExpression.put("Node.prototype.removeChild","Element.prototype.removeChild");
    closureExpression.put("Node.prototype.appendChild","Element.prototype.appendChild");
    closureExpression.put("Node.prototype.insertBefore","Element.prototype.insertBefore");
    closureExpression.put("Node.prototype.addEventListener","Element.prototype.addEventListener");
    closureExpression.put("Node.prototype.removeEventListener","Element.prototype.removeEventListener");
    closureExpression.put("Node.prototype.compareDocumentPosition","Element.prototype.compareDocumentPosition");
    closureExpression.put("Node.prototype.querySelectorAll","Element.prototype.querySelectorAll");
    closureExpression.put("Node.prototype.hasChildNodes","Element.prototype.hasChildNodes");
    closureExpression.put("Node.prototype.replaceChild","Element.prototype.replaceChild");
    closureExpression.put("Node.prototype.dispatchEvent","Element.prototype.dispatchEvent");
    closureExpression.put("Node.prototype.normalize","Element.prototype.normalize");
    closureExpression.put("Node.prototype.querySelector","Element.prototype.querySelector");

    closureExpression.put("Console.prototype.log","console.log");
    closureExpression.put("Console.prototype.warn","console.warn");
    closureExpression.put("Date.prototype.toGMTString","Date.prototype.toUTCString");
    closureExpression.put("XMLHttpRequestEventTarget.prototype.removeEventListener","EventTarget.prototype.removeEventListener");

    // These are properties, not functions.
    closureExpression.put("HTMLInputElement.prototype.max","");
    closureExpression.put("HTMLInputElement.prototype.min","");
    closureExpression.put("IDBDatabase.prototype.version","");
    closureExpression.put("HTMLHtmlElement.prototype.version","");
    closureExpression.put("HTMLMediaElement.prototype.error","");
    closureExpression.put("IDBRequest.prototype.transaction","");
    closureExpression.put("IDBObjectStore.prototype.transaction","");
    closureExpression.put("IDBIndex.prototype.objectStore","");
    closureExpression.put("Worker.prototype.onmessage","");
    closureExpression.put("WebSocket.prototype.onmessage","");
    closureExpression.put("Attr.prototype.value","");
    closureExpression.put("Window.prototype.innerHeight","");
    closureExpression.put("Window.prototype.outerHeight","");
    closureExpression.put("Window.prototype.innerWidth","");
    closureExpression.put("Window.prototype.outerWidth","");
    closureExpression.put("HTMLElement.prototype.draggable","");
    closureExpression.put("HTMLSelectElement.prototype.value","");
    closureExpression.put("HTMLOptionElement.prototype.value","");
    closureExpression.put("HTMLInputElement.prototype.value","");
    closureExpression.put("HTMLTextAreaElement.prototype.value","");
    closureExpression.put("HTMLButtonElement.prototype.value","");
    closureExpression.put("HTMLLIElement.prototype.value","");
    closureExpression.put("HTMLParamElement.prototype.value","");
    closureExpression.put("HTMLBRElement.prototype.clear","");
    closureExpression.put("HTMLTitleElement.prototype.text","");
    closureExpression.put("HTMLScriptElement.prototype.text","");
    closureExpression.put("HTMLBodyElement.prototype.text","");
    closureExpression.put("HTMLAnchorElement.prototype.text","");
    closureExpression.put("HTMLOptionElement.prototype.text","");

    // Oddly, these can't be examined by the in-browser analysis.
    closureExpression.put("Element.prototype.scrollLeft","");
    closureExpression.put("Element.prototype.scrollTop","");
    closureExpression.put("HTMLAnchorElement.prototype.search", "");
    closureExpression.put("IDBRequest.prototype.error", "");
    closureExpression.put("FileReader.prototype.error", "");

    // These don't exist in Firefox 17.0.5esr, and don't need to be
    // remapped to another location.
    closureExpression.put("Document.prototype.postMessage", "");
    closureExpression.put("Document.prototype.getBoxObjectFor", "");
    closureExpression.put("HTMLObjectElement.prototype.GetVariable","");

    // %%% Something for |arguments| object (for lack of |Arguments|)?
    
    // Load a mapping of native locations to expressions (the latter
    // of which corresponds to a way to reference the location in the
    // initial environment of the browser).
    File nativeDatFile = new File(NATIVE_DAT_PATH);
    File nativeLocToExpFile = new File(NATIVE_LOC_TO_EXP_PATH);
    File nativeExpToLocFile = new File(NATIVE_EXP_TO_LOC_PATH);

    // Load the information from serialized form if available.
    boolean loadFromSerializedLE = true;
    if (!nativeLocToExpFile.exists()) {
      loadFromSerializedLE = false;
    } else if (nativeDatFile.exists() && nativeLocToExpFile.lastModified() < nativeDatFile.lastModified()) {
      loadFromSerializedLE = false;
    }
    boolean loadFromSerializedEL = true;
    if (!nativeExpToLocFile.exists()) {
      loadFromSerializedEL = false;
    } else if (nativeDatFile.exists() && nativeExpToLocFile.lastModified() < nativeDatFile.lastModified()) {
      loadFromSerializedEL = false;
    }

    if (loadFromSerializedLE) {
      try {
        nativeLocationToExpression = (HashMap<String,String>)FileUtil.deserialize(nativeLocToExpFile);
      } catch (IOException ex) {
        Dbg.warn("Unable to load native expression-to-location map from serialized form, falling back to text version: " + ex.getMessage());
        loadFromSerializedLE = false;
      } catch(ClassNotFoundException ex) {
        Dbg.warn("Unable to load native expression-to-location map from serialized form, falling back to text version: " + ex.getMessage());
        loadFromSerializedLE = false;
      }
    } else {
      nativeLocationToExpression = new HashMap<String,String>();
    }

    if (loadFromSerializedEL) {
      try {
        nativeExpressionToLocation = (HashMap<String,String>)FileUtil.deserialize(nativeExpToLocFile);
      } catch (IOException ex) {
        Dbg.warn("Unable to load native location-to-expression map from serialized form, falling back to text version: " + ex.getMessage());
        loadFromSerializedEL = false;
      } catch(ClassNotFoundException ex) {
        Dbg.warn("Unable to load native location-to-expression map from serialized form, falling back to text version: " + ex.getMessage());
        loadFromSerializedEL = false;
      }
    } else {
      nativeExpressionToLocation = new HashMap<String,String>();
    }

    if (!loadFromSerializedEL || !loadFromSerializedLE) {
      try {
        List<String> lines = FileUtil.getLinesFromFile(NATIVE_DAT_PATH, "%");
        for (String line : lines) {
          // Disregard lines that name the object whose properties are
          // being scanned.
          if (line.startsWith("@"))
            continue;

          // The line is expected to be of the following format.
          // propName Attribute,List|- #location ref.expr
          String[] parts = line.split(" ");
          int len = parts.length;
          assert len == 4 : "Invalid native property specification: " + line;
          // Map location to expression, e.g. #window --> window.
          if (parts[2].startsWith("#")) {
            //Dbg.dbg("Natives: " + parts[2] + " / " + parts[3]);
            if (!loadFromSerializedLE) {
              nativeLocationToExpression.put(parts[2], parts[3]);
            }
            if (!loadFromSerializedEL) {
              nativeExpressionToLocation.put(parts[3], parts[2]);
            }
          }
        }
      } catch (IOException ex) {
        Dbg.err("Unable to access native object specification file: " + NATIVE_DAT_PATH);
      }
    }

    if (!loadFromSerializedEL) {
      try {
        FileUtil.serialize(nativeExpressionToLocation, nativeExpToLocFile);
      } catch (IOException ex) {
        Dbg.warn("Unable to save serialization of native expression-to-location file: " + ex.getMessage());
      }
    }

    if (!loadFromSerializedLE) {
      try {
        FileUtil.serialize(nativeLocationToExpression, nativeLocToExpFile);
      } catch(IOException ex) {
        Dbg.warn("Unable to save serialization of native expression-to-location file: " + ex.getMessage());
      }
    }
  }

  public static boolean isInIntrospectorExpression(Node n) {
    Node c = null;
    while (n != null) {
      // Check identity with the first child to avoid nodes in the
      // transaction block rather than the introspector expression.
      if (c != null && isTransaction(n) && c == n.getFirstChild())
        return true;
      c = n;
      n = n.getParent();
    }
    return false;
  }

  public static boolean isPostfixUnOp(Node n) {
    if (!isUnOp(n)) return false;
    int prepost = n.getIntProp(Node.INCRDECR_PROP);
    // %%% rhino.IRFactory doesn't set up the property correctly.
    // It uses 1 to indicate postfix rather than POST_FLAG
    // (Node.POST_FLAG == 0x2).
    //return prepost == Node.POST_FLAG;
    return prepost == 1;
  }

  public static boolean isScript(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    if (ntype == Token.SCRIPT) return true;
    return false;
  }

  public static boolean isTypeOf(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    if (ntype == Token.TYPEOF) return true;
    return false;
  }

  public static boolean isUnOp(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : UNOP_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isBinOp(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : BINOP_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isControl(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : CONTROL_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isInstanceOf(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    if (ntype == Token.INSTANCEOF) return true;
    return false;
  }

  public static boolean isObjectLiteral(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    if (ntype == Token.OBJECTLIT) return true;
    return false;
  }

  public static boolean isArrayLiteral(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    if (ntype == Token.ARRAYLIT) return true;
    return false;
  }

  // %%% Could be more efficient with Set for large programs
  public static boolean isStatement(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : STATEMENT_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isExprResult(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.EXPR_RESULT) return true;
    return false;
  }

  public static boolean isBoolean(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    if (ntype == Token.FALSE) return true;
    if (ntype == Token.TRUE) return true;
    return false;
  }

  public static boolean isLiteral(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : LITERAL_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isName(Node n) {
    if (n == null) return false;
    // Assignments such as "x = 1" have NAME tokens
    // as the top level. We don't want those.
    if (n.isName() && n.getChildCount() == 0) return true;
    return false;
  }

  public static boolean isWild(Node n) {
    if (!isName(n)) return false;
    String c = codeFromNode(n);
    if (c.startsWith("`")) return true;
    return false;
  }

  public static boolean isNameAssign(Node n) {
    Node lhs = getAssignLHS(n);
    return isName(lhs);
  }

  public static boolean isSimpleAssign(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    if (ntype == Token.ASSIGN) return true;
    return false;
  }

  public static boolean isAssign(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : ASSIGN_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isNew(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.NEW) return true;
    return false;
  }

  public static boolean isCall(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.CALL) return true;
    return false;
  }

  public static boolean isAccessor(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : ACCESSOR_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isBlock(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : BLOCK_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isCommaExpression(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.COMMA)
      return true;
    return false;
  }

  public static boolean isTernaryOp(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.HOOK)
      return true;
    return false;
  }

  public static boolean isForIn(Node n) {
    if (n == null) return false;
    if (isFor(n) && n.getChildCount() == 3)
      return true;
    return false;
  }

  public static boolean isStandardFor(Node n) {
    if (n == null) return false;
    if (isFor(n) && n.getChildCount() == 4)
      return true;
    return false;
  }

  public static boolean isLoop(Node n) {
    if (n == null) return false;
    int ntype = n.getType();
    for (int t : LOOP_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean isFunction(Node n) {
    if (n == null) return false;
    return n.getType() == Token.FUNCTION;
  }

  public static boolean isAnonymousFunction(Node n) {
    if (n == null) return false;
    if (!isFunction(n))
      return false;
    Node parent = n.getParent();
    // Getters and setters are not anonymous.
    if (parent != null && (parent.isGetterDef() || parent.isSetterDef()))
      return false;
    Node name = n.getChildAtIndex(0);
    if (isName(name) && name.getString().equals(""))
      return true;
    return false;
  }

  public static boolean isReturn(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.RETURN)
      return true;
    return false;
  }

  public static boolean isWhile(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.WHILE)
      return true;
    return false;
  }

  public static boolean isBreak(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.BREAK)
      return true;
    return false;
  }

  public static boolean isCase(Node n) {
    if (n == null) return false;
    if (n.isCase() || n.isDefaultCase())
      return true;
    return false;
  }

  public static boolean isSwitch(Node n) {
    if (n == null) return false;
    if (n.isSwitch())
      return true;
    return false;
  }

  public static boolean isContinue(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.CONTINUE)
      return true;
    return false;
  }

  public static boolean isAnd(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.AND)
      return true;
    return false;
  }

  public static boolean isOr(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.OR)
      return true;
    return false;
  }

  public static boolean isIf(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.IF)
      return true;
    return false;
  }

  public static boolean isFor(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.FOR)
      return true;
    return false;
  }

  public static boolean isString(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.STRING)
      return true;
    return false;
  }

  public static boolean isVar(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.VAR)
      return true;
    return false;
  }

  public static boolean isVarInitializer(Node n) {
    if (n == null) return false;
    if (!isVar(n)) return false;
    if (n.getChildCount() > 0 && n.getChildAtIndex(0).getChildCount() > 0)
      return true;
    return false;
  }

  public static boolean isVarDeclaration(Node n) {
    if (n == null) return false;
    if (!isVar(n)) return false;
    if (n.getChildCount() == 0 || n.getChildAtIndex(0).getChildCount() == 0)
      return true;
    return false;
  }

  public static boolean isMemberDeclaration(Node n) {
    if (n == null) return false;
    if (n.getParent() == null) return false;
    if ((n.getType() == Token.STRING_KEY || n.isGetterDef()
        || n.isSetterDef()) && isObjectLiteral(n.getParent()))
      return true;
    return false;
  }

  // Return an enclosing transaction.
  public static Node isWithinTransaction(Node n) {
    Node tx = n.getParent();
    while (tx != null && !isTransaction(tx)) {
      tx = tx.getParent();
    }
    return tx;
  }

  // Return an enclosing HOOK, OR, or AND.
  // %%% Untested
  public static Node isWithinShortCircuit(Node n) {
    Node stmt = n.getParent();
    while (stmt != null && !stmt.isHook()
        && !stmt.isAnd() && !stmt.isOr()) {
      // Don't go past control statements.
      if (isControl(stmt)) {
        return null;
      }
      stmt = stmt.getParent();
    }
    return stmt;
  }

  // %%% Untested
  public static Node getContainingBlock(Node n) {
    Node block = n.getParent();
    while (block != null && !block.isBlock()) {
      block = block.getParent();
    }
    return block;
    
  }

  public static boolean isTransaction(Node n) {
    if (n == null) return false;
    if (n.getType() == Token.TRANSACTION)
      return true;
    return false;
  }

  public static boolean returnsBoolean(Node n) {
    if (n == null) return false;
    if (n.isTrue() || n.isFalse())
      return true;
    int ntype = n.getType();
    for (int t : BOOLEAN_OP_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static boolean returnsString(SourceManager src, Node n) {
    if (n == null) return false;
    if (n.isString()) return true;
    if (n.isName()) {
      String typ = src.getType(n.getString());
      if (typ != null && typ.equals("String"))
        return true;
    }
    if (n.isAdd()) {
      Node first = n.getFirstChild();
      if (returnsString(src, first))
        return true;
      Node second = n.getChildAtIndex(1);
      if (returnsString(src, second))
        return true;
    }
    // %%% Could have cases for AND, OR.
    return false;
  }

  public static boolean returnsNumber(SourceManager src, Node n) {
    if (n == null) return false;
    if (n.isNumber()) return true;
    if (n.isName()) {
      String typ = src.getType(n.getString());
      if (typ != null && typ.equals("Number"))
        return true;
      return false;
    }
    if (n.isAdd()) {
      Node first = n.getFirstChild();
      Node second = n.getChildAtIndex(1);
      if (returnsNumber(src, first) && returnsNumber(src, second))
        return true;
    }
    // %%% Could have cases for AND, OR.
    int ntype = n.getType();
    for (int t : NUMBER_OP_TYPES)
      if (ntype == t) return true;
    return false;
  }

  public static Node getAssignLHS(Node n) {
    // Unwrap the expression.
    if (isExprResult(n)) {
      n = n.getFirstChild();
    }

    if (isAssign(n)) {
      return n.getFirstChild();
    }
      
    if (isVarInitializer(n)) {
      // Collect copies of the initializer components.
      Node lhs = n.getFirstChild().cloneTree();
      // Isolate the variable name.
      lhs.removeChild(lhs.getFirstChild());
      return lhs;
    }
      
    return null;
    
  }

  public static Node getAssignRHS(Node n) {
    // Unwrap the expression.
    if (isExprResult(n)) {
      n = n.getFirstChild();
    }

    if (isAssign(n)) {
      return n.getChildAtIndex(1);
    }
      
    if (isVarInitializer(n)) {
      Node rhs = n.getFirstChild().getFirstChild();
      return rhs;
    }

    return null;
  }

  public static Node findEquivalentSubtree(Node parent, Node search) {
    if (search.isEquivalentTo(parent)) {
      return parent;
    }
    for (int i=0; i<parent.getChildCount(); i++) {
      Node child = parent.getChildAtIndex(i);
      Node equiv = findEquivalentSubtree(child, search);
      if (equiv != null) {
        return equiv;
      }
    }
    return null;
  }

  public static Node getCondition(Node n) {
    if (!isControl(n)) return null;

    if (n.isIf() || n.isWhile()) {
      return n.getFirstChild();
    } else if (isStandardFor(n)) {
      return n.getChildAtIndex(1);
    } else if (isForIn(n)) {
      // %%% Not necessarily.
      return new Node(Token.TRUE);
    } else if (n.isDo()) {
      return n.getLastChild();
    } else if (n.isCase()) {
      // Make condition |switchVal == caseVal|.
      Node caseVal = n.getFirstChild();
      caseVal = caseVal.cloneTree();
      Node swtch = n.getParent();
      assert swtch.isSwitch() : "Case not within switch: " + n + " / " + swtch;
      Node switchVal = swtch.getFirstChild().cloneTree();
      // EQ seems to be correct, rather than SHEQ.
      return new Node(Token.EQ, switchVal, caseVal);
    } else if (n.isSwitch() || n.isDefaultCase()
        || n.isTry() || n.isCatch()) {
      // These statements don't have branching control flow.
      return null;
    } else {
      Dbg.err("Unknown control type encountered: " + n);
    }
    return null;
  }
  
  public static Node getEnclosingBlock(Node n) {
    if (isBlock(n))
      return n;
    Node parent = n.getParent();
    return getEnclosingBlock(parent);
  }

  public static String codeFromNode(Node n, SourceManager src) {
    // The source file only provides for better formatting, so we can
    // safely fall back.
    if (src == null) return codeFromNode(n);
    return src.codeFromNode(n);
  }

  public static String codeFromNode(Node n) {
    if (n == null) return "";
    if (isExprResult(n) && n.getChildCount() == 0) return "";

    return ClosureUtil.codeFromNode(n);
  }

  public static Node getEnclosingStatement(Node n) {
    if (n == null) return null;
    if (isStatement(n)) {
      return n;
    }
    return getEnclosingStatement(n.getParent());
  }

  public static Node getEnclosingIf(Node n) {
    Node enc = getEnclosingStatement(n);
    if (enc == null || enc.getType() == Token.IF) {
      return enc;
    }
    return getEnclosingIf(enc.getParent());
  }

  // Returns a unique string for the given function
  // The string is based on the function's name and position in the source file
  public static String funcHash(Node n, SourceManager src) {
    String code;
    // The {main} dummy function has type BLOCK.
    if (n.getType() != Token.FUNCTION) {
      code = "{main}";
    } else {
      code = codeFromNode(n.getChildAtIndex(0), src);
    }
    return code;
  }

  /*
  static String getFunctionTransition(Node n, SourceManager src) {
    return "{#" + funcHash(n, src) + "}";
  }
  */

  public static void scanForNames(Set<Node> out, Node n) {
    if (n == null) return;
    if (n.isName()) {
      out.add(n);
    } else {
      for (int i=0; i<n.getChildCount(); i++) {
        scanForNames(out, n.getChildAtIndex(i));
      }
    }
  }

  // Return a set of all names 
  public static Set<Node> scanForNames(Node n) {
    Set<Node> ret = new LinkedHashSet<Node>();
    scanForNames(ret, n);
    return ret;
  }

  public static String unquote(String str) {
    // This is annoying, but we have to detect which types of quotes
    // are used and unescape the characters accordingly.
    char qval = str.charAt(0);
    assert (qval == '"' && str.endsWith("\"")) || (qval == '\'' && str.endsWith("'")) : "Trying to unquote an unquoted string: " + str;

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

  public static boolean mayDirectlyModifyName(Node exp, String name) {
    if (exp == null) return false;
    if (exp.isName() && exp.getString().equals(name)) {
      Node parent = exp.getParent();
      if (isUnOp(parent)) {
        return true;
      }
      if (isAssign(parent) && exp == getAssignLHS(parent)) {
        return true;
      }
    }

    int childCnt = exp.getChildCount();
    for (int i=0; i<childCnt; i++) {
      Node c = exp.getChildAtIndex(i);
      if (mayDirectlyModifyName(c, name)) return true;
    }
    return false;
  }

  public static boolean containsName(Node exp, String name) {
    if (exp == null) return false;
    if (exp.isName() && exp.getString().equals(name)) return true;

    int childCnt = exp.getChildCount();
    for (int i=0; i<childCnt; i++) {
      Node c = exp.getChildAtIndex(i);
      if (containsName(c, name)) return true;
    }
    return false;
  }

  public static boolean containsCall(Node exp) {
    if (NodeUtil.isCall(exp) || NodeUtil.isNew(exp)) return true;
    int childCnt = exp.getChildCount();
    for (int i=0; i<childCnt; i++) {
      Node c = exp.getChildAtIndex(i);
      if (containsCall(c)) return true;
    }
    return false;
  }

  public static int getAstSize(Node n) {
    if (n == null) return 0;
    int cnt = 1;
    for (Node c : n.children()) {
      cnt += getAstSize(c);
    }
    return cnt;
  }

  protected static void dumpAST(Node n, int depth) {
    String tab = "";
    for (int i=0; i<depth; i++) {
      tab += "  ";
    }
    Dbg.dbg(tab + System.identityHashCode(n) + ": " + n);
    int childCnt = n.getChildCount();
    for (int i=0; i<childCnt; i++) {
      dumpAST(n.getChildAtIndex(i), depth + 1);
    }
  }

  public static void dumpAST(Node root) {
    Dbg.dbg("===== AST =====");
    dumpAST(root, 0);
  }

  public static void dumpCallGraph(CallGraph cg) {
    Dbg.dbg("===== CALL GRAPH =====");
    Collection<Function> allFuncs = cg.getAllFunctions();
    for (Function f : allFuncs) {
      dumpAST(f.getAstNode(), 0);
    }
  }
}
