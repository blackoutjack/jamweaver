package edu.wisc.cs.jam.env;

import java.util.List;
import java.util.Map;
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

  public static Map<String,String> nativeLocationToExpression;
  public static Map<String,String> nativeExpressionToLocation;
  public static Map<String,String> closureExpression;

  public static final String[] PRIMITIVE_NAMES = {
    "#undefined",
    "#Infinity",
    "#-Infinity",
    "#NaN",
  };
  
  static {
    
    // Map the Closure's extern.zip path to a particular native object
    // to the generated representation. These can be eliminated
    // one-by-one by modifying the extern file that is used.
    closureExpression = new HashMap<String,String>();
    closureExpression.put("alert","Window.prototype.alert");
    closureExpression.put("confirm","Window.prototype.confirm");
    closureExpression.put("print","Window.prototype.print");
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
    closureExpression.put("Document.prototype.elementFromPoint","HTMLDocument.prototype.elementFromPoint");
    closureExpression.put("Document.prototype.execCommand","HTMLDocument.prototype.execCommand");

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
    closureExpression.put("HTMLObjectElement.prototype.data","");
    closureExpression.put("ProcessingInstruction.prototype.data","");
    closureExpression.put("MessageEvent.prototype.data","");
    closureExpression.put("ImageData.prototype.data","");
    closureExpression.put("Event.prototype.timeStamp","");
    closureExpression.put("Element.prototype.onsubmit","");
    closureExpression.put("Window.prototype.onsubmit","");

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
          if (isNativeLocation(parts[2])) {
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

  public static boolean isNativeLocation(String loc) {
    return loc.startsWith("#") && !isDynamicLocation(loc);
  }

  public static boolean isDynamicLocation(String loc) {
    return loc.startsWith("###");
  }

}
