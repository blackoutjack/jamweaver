package edu.wisc.cs.jam.env;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.HashSet;
import java.util.HashMap;
import java.io.File;
import java.io.IOException;

import edu.wisc.cs.jam.FileUtil;
import edu.wisc.cs.jam.JAMConfig;
import edu.wisc.cs.jam.Dbg;

public class NativeUtil {

  // Text list of natives parsed the first time JAM is loaded.
  public static final String NATIVE_DAT_PATH = JAMConfig.JAMPKG + "/lib/native.props";
  // Serializations of native information used on subsequent runs.
  public static final String NATIVE_LOC_TO_EXP_PATH = JAMConfig.JAMPKG + "/lib/native-le.ser";
  public static final String NATIVE_EXP_TO_LOC_PATH = JAMConfig.JAMPKG + "/lib/native-el.ser";

  protected static Map<String,String> nativeLocationToExpression;
  protected static Map<String,String> nativeExpressionToLocation;
  protected static Map<String,String> closureTranslation;
  protected static Map<String,String> interfaceToLocation;

  private static final String[] _PRIMITIVES = {
    "#undefined",
    "#null",
    "#Infinity",
    "#-Infinity",
    "#NaN",
  };
  public static final Set<String> PRIMITIVES = new HashSet<String>(Arrays.asList(_PRIMITIVES));

  static {
    
    // Map the Closure's extern.zip path to a particular native object
    // to the generated representation. These can be eliminated
    // one-by-one by modifying the extern file that is used.
    closureTranslation = new HashMap<String,String>();
    closureTranslation.put("alert","Window.prototype.alert");
    closureTranslation.put("confirm","Window.prototype.confirm");
    closureTranslation.put("print","Window.prototype.print");
    closureTranslation.put("eval","window.eval");
    closureTranslation.put("uneval","window.uneval");
    closureTranslation.put("isNaN","window.isNaN");
    closureTranslation.put("dump","Window.prototype.dump");
    closureTranslation.put("escape","window.escape");
    closureTranslation.put("unescape","window.unescape");
    closureTranslation.put("decodeURIComponent","window.decodeURIComponent");
    closureTranslation.put("encodeURIComponent","window.encodeURIComponent");
    closureTranslation.put("decodeURI","window.decodeURI");
    closureTranslation.put("encodeURI","window.encodeURI");
    closureTranslation.put("parseInt","window.parseInt");
    closureTranslation.put("parseFloat","window.parseFloat");
    closureTranslation.put("setTimeout","Window.prototype.setTimeout");
    closureTranslation.put("clearTimeout","Window.prototype.clearTimeout");
    closureTranslation.put("setInterval","Window.prototype.setInterval");
    closureTranslation.put("clearInterval","Window.prototype.clearInterval");
    closureTranslation.put("isFinite","window.isFinite");

    closureTranslation.put("Function.prototype.apply", "Object.__proto__.apply");
    closureTranslation.put("Function.prototype.bind", "Object.__proto__.bind");
    closureTranslation.put("Function.prototype.call", "Object.__proto__.call");
    closureTranslation.put("Function.prototype.isGenerator", "Object.__proto__.isGenerator");
    closureTranslation.put("Function.prototype.toSource", "Object.__proto__.toSource");
    closureTranslation.put("Function.prototype.toString", "Object.__proto__.toString");

    closureTranslation.put("Document.prototype.getElementById","HTMLDocument.prototype.getElementById");
    closureTranslation.put("Document.prototype.getElementsByTagName","HTMLDocument.prototype.getElementsByTagName");
    closureTranslation.put("Document.prototype.focus","HTMLElement.prototype.focus");
    closureTranslation.put("Document.prototype.write","HTMLDocument.prototype.write");
    closureTranslation.put("Document.prototype.writeln","HTMLDocument.prototype.writeln");
    closureTranslation.put("Document.prototype.createElement","HTMLDocument.prototype.createElement");
    closureTranslation.put("Document.prototype.createDocumentFragment","HTMLDocument.prototype.createDocumentFragment");
    closureTranslation.put("Document.prototype.createTextNode","HTMLDocument.prototype.createTextNode");
    closureTranslation.put("Document.prototype.getElementsByName","HTMLDocument.prototype.getElementsByName");
    closureTranslation.put("Document.prototype.createRange","HTMLDocument.prototype.createRange");
    closureTranslation.put("Document.prototype.createComment","HTMLDocument.prototype.createComment");
    closureTranslation.put("Document.prototype.querySelectorAll","HTMLDocument.prototype.querySelectorAll");
    closureTranslation.put("Document.prototype.getElementsByClassName","HTMLDocument.prototype.getElementsByClassName");
    closureTranslation.put("Document.prototype.open","HTMLDocument.prototype.open");
    closureTranslation.put("Document.prototype.close","HTMLDocument.prototype.close");
    closureTranslation.put("Document.prototype.queryCommandValue", "HTMLDocument.prototype.queryCommandValue");
    closureTranslation.put("Document.prototype.getElementsByTagNameNS","HTMLDocument.prototype.getElementsByTagNameNS");
    closureTranslation.put("Document.prototype.createEvent","HTMLDocument.prototype.createEvent");
    closureTranslation.put("Document.prototype.createAttribute","HTMLDocument.prototype.createAttribute");
    closureTranslation.put("Document.prototype.createElementNS","HTMLDocument.prototype.createElementNS");
    closureTranslation.put("Document.prototype.querySelector","HTMLDocument.prototype.querySelector");
    closureTranslation.put("Document.prototype.clear","HTMLDocument.prototype.clear");
    closureTranslation.put("Document.prototype.elementFromPoint","HTMLDocument.prototype.elementFromPoint");
    closureTranslation.put("Document.prototype.execCommand","HTMLDocument.prototype.execCommand");

    closureTranslation.put("Element.prototype.focus","HTMLElement.prototype.focus");
    closureTranslation.put("Element.prototype.blur","HTMLElement.prototype.blur");
    closureTranslation.put("Element.prototype.click","HTMLElement.prototype.click");
    closureTranslation.put("Element.prototype.scrollIntoView","HTMLElement.prototype.scrollIntoView");

    closureTranslation.put("Node.prototype.removeChild","Element.prototype.removeChild");
    closureTranslation.put("Node.prototype.appendChild","Element.prototype.appendChild");
    closureTranslation.put("Node.prototype.insertBefore","Element.prototype.insertBefore");
    closureTranslation.put("Node.prototype.addEventListener","Element.prototype.addEventListener");
    closureTranslation.put("Node.prototype.removeEventListener","Element.prototype.removeEventListener");
    closureTranslation.put("Node.prototype.compareDocumentPosition","Element.prototype.compareDocumentPosition");
    closureTranslation.put("Node.prototype.querySelectorAll","Element.prototype.querySelectorAll");
    closureTranslation.put("Node.prototype.hasChildNodes","Element.prototype.hasChildNodes");
    closureTranslation.put("Node.prototype.replaceChild","Element.prototype.replaceChild");
    closureTranslation.put("Node.prototype.dispatchEvent","Element.prototype.dispatchEvent");
    closureTranslation.put("Node.prototype.normalize","Element.prototype.normalize");
    closureTranslation.put("Node.prototype.querySelector","Element.prototype.querySelector");

    closureTranslation.put("Console.prototype.log","console.log");
    closureTranslation.put("Console.prototype.warn","console.warn");
    closureTranslation.put("Date.prototype.toGMTString","Date.prototype.toUTCString");
    closureTranslation.put("XMLHttpRequestEventTarget.prototype.removeEventListener","EventTarget.prototype.removeEventListener");

    // These are properties, not functions.
    /* %%% No longer needed since latest changes to CallGraph.Callsite.
    closureTranslation.put("HTMLInputElement.prototype.max","");
    closureTranslation.put("HTMLInputElement.prototype.min","");
    closureTranslation.put("IDBDatabase.prototype.version","");
    closureTranslation.put("HTMLHtmlElement.prototype.version","");
    closureTranslation.put("HTMLMediaElement.prototype.error","");
    closureTranslation.put("IDBRequest.prototype.transaction","");
    closureTranslation.put("IDBObjectStore.prototype.transaction","");
    closureTranslation.put("IDBIndex.prototype.objectStore","");
    closureTranslation.put("Worker.prototype.onmessage","");
    closureTranslation.put("WebSocket.prototype.onmessage","");
    closureTranslation.put("Attr.prototype.value","");
    closureTranslation.put("Window.prototype.innerHeight","");
    closureTranslation.put("Window.prototype.outerHeight","");
    closureTranslation.put("Window.prototype.innerWidth","");
    closureTranslation.put("Window.prototype.outerWidth","");
    closureTranslation.put("HTMLElement.prototype.draggable","");
    closureTranslation.put("HTMLSelectElement.prototype.value","");
    closureTranslation.put("HTMLOptionElement.prototype.value","");
    closureTranslation.put("HTMLInputElement.prototype.value","");
    closureTranslation.put("HTMLTextAreaElement.prototype.value","");
    closureTranslation.put("HTMLButtonElement.prototype.value","");
    closureTranslation.put("HTMLLIElement.prototype.value","");
    closureTranslation.put("HTMLParamElement.prototype.value","");
    closureTranslation.put("HTMLBRElement.prototype.clear","");
    closureTranslation.put("HTMLTitleElement.prototype.text","");
    closureTranslation.put("HTMLScriptElement.prototype.text","");
    closureTranslation.put("HTMLBodyElement.prototype.text","");
    closureTranslation.put("HTMLAnchorElement.prototype.text","");
    closureTranslation.put("HTMLOptionElement.prototype.text","");
    closureTranslation.put("HTMLObjectElement.prototype.data","");
    closureTranslation.put("ProcessingInstruction.prototype.data","");
    closureTranslation.put("MessageEvent.prototype.data","");
    closureTranslation.put("ImageData.prototype.data","");
    closureTranslation.put("Event.prototype.timeStamp","");
    closureTranslation.put("Element.prototype.onsubmit","");
    closureTranslation.put("Window.prototype.onsubmit","");

    // Oddly, these can't be examined by the in-browser analysis.
    closureTranslation.put("Element.prototype.scrollLeft","");
    closureTranslation.put("Element.prototype.scrollTop","");
    closureTranslation.put("HTMLAnchorElement.prototype.search", "");
    closureTranslation.put("IDBRequest.prototype.error", "");
    closureTranslation.put("FileReader.prototype.error", "");

    */

    interfaceToLocation = new HashMap<String,String>();
    interfaceToLocation.put("nsIZipEntry", "#ZipEntry");
    interfaceToLocation.put("nsIZipReader", "#ZipReader");
    interfaceToLocation.put("nsIZipReaderCache", "#ZipReaderCache");
    interfaceToLocation.put("nsIDOMWindow", "#Window");
    interfaceToLocation.put("nsIXMLHttpRequest", "#XMLHttpRequest");
    interfaceToLocation.put("nsIWebSocket", "#WebSocket");
    interfaceToLocation.put("nsIArray", "#Array");

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
          if (isPrimitiveLocation(parts[2])) {
            // Remove the "#" from the beginning.
            String expr = parts[2].substring(1);
            if (!loadFromSerializedLE) {
              nativeLocationToExpression.put(parts[2], expr);
            }
            if (!loadFromSerializedEL) {
              nativeExpressionToLocation.put(expr, parts[2]);
            }
          } else if (isNativeLocation(parts[2])) {
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

  public static String getNativeLocationFromExpression(String exp) {
    if (closureTranslation.containsKey(exp)) {
      exp = closureTranslation.get(exp);
    }
    return nativeExpressionToLocation.get(exp);
  }

  public static String getExpressionFromNativeLocation(String exp) {
    return nativeLocationToExpression.get(exp);
  }

  // Get the internal JAM reference name for the native interface.
  public static String getNativeLocationFromInterface(String iface) {
    String loc = interfaceToLocation.get(iface);
    if (loc == null) {
      // %%% Heuristic translation
      loc = iface;
      if (loc.startsWith("ns")) {
        loc = loc.substring(2);
        if (loc.startsWith("I")) {
          loc = loc.substring(1);
        }
        if (loc.startsWith("DOM")) {
          loc = loc.substring(3);
        }
      }
      loc = "#" + loc;
      Dbg.warn("Native translation not found for " + iface + ", using " + loc);
    }
    return loc;
  }

  protected static boolean isPrimitiveLocation(String loc) {
    return PRIMITIVES.contains(loc);
  }
  protected static boolean isNativeLocation(String loc) {
    if (PRIMITIVES.contains(loc)) return false;
    return loc.startsWith("#") && !isDynamicLocation(loc);
  }

  protected static boolean isDynamicLocation(String loc) {
    return loc.startsWith("###");
  }

}
