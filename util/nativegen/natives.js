//
// JScan: JavaScript object tree scanner
// 
// Tools for traversing the and discovering information about the object
// tree in a JavaScript environment.
//

// This just serves as an index to the location map.
var LOCATION_INDEX = [];

// These are objects that we want give explicit locations to. This
// just reduced produced code size and eases debugging.
var LOCATION_MAP = [
  ["Object.prototype","#Object#prototype"],
  ["Object.__proto__","#Function#prototype"],
  "Object",
  // The global object and its constructor
  "Window",
  ["window", "#Global"],

  // Fundamental constructors
  "Function",
  "Boolean",
  "String",
  "Number",
  "Array",

  // Math is not a constructor so it contains properties directly.
  "Math",

  // Exception types
  "Error",
  "TypeError",
  "ReferenceError",
  "SyntaxError",
  "URIError",
  "RangeError",

  // Window/framework related objects
  "History",
  "history",
  "Navigator",
  "navigator",
  "Screen",
  "screen",
  "Storage",
  "localStorage",
  "Location",
  "location",

  // DOM constructors and objects
  "Node",
  "NodeList",
  "Attr",
  "Element",
  "HTMLElement",
  "HTMLAnchorElement",
  "HTMLAudioElement",
  "HTMLBodyElement",
  "HTMLBRElement",
  "HTMLButtonElement",
  "HTMLCanvasElement",
  "HTMLFormElement",
  "HTMLFrameElement",
  "HTMLHeadElement",
  "HTMLHtmlElement",
  "HTMLIFrameElement",
  "HTMLInputElement",
  "HTMLImageElement",
  "HTMLLIElement",
  "HTMLLinkElement",
  "HTMLMediaElement",
  "HTMLObjectElement",
  "HTMLOptionElement",
  "HTMLParamElement",
  "HTMLScriptElement",
  "HTMLSelectElement",
  "HTMLSourceElement",
  "HTMLTableElement",
  "HTMLTableRowElement",
  "HTMLTableSectionElement",
  "HTMLTitleElement",
  "HTMLTextAreaElement",
  "HTMLVideoElement",
  "Option",

  "Document",
  "HTMLDocument",
  "DocumentFragment",
  "document",
  "DocumentType",
  "FormData",

  // Utility constructors
  "RegExp",
  "Date",
  "Image",
  "Int8Array",
  "Int16Array",
  "Int32Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Uint16Array",
  "Uint32Array",
  "Float32Array",
  "Float64Array",

  // CSS-related object
  "CSSRule",
  "CSSStyleRule",
  "CSSMediaRule",
  "CSSPageRule",
  "CSSCharsetRule",
  "CSSFontFaceRule",
  "CSSImportRule",
  "CSSMediaRule",
  "CSSPrimitiveValue",
  "CSSRuleList",
  "CSSStyleDeclaration",
  "CSSStyleSheet",
  "CSSValue",
  "CSSValueList",

  // Communications
  "XMLHttpRequest",
  "XMLHttpRequestEventTarget",
  "WebSocket",

  // Events
  "Event",
  "EventTarget",
  "CustomEvent",
  "MessageEvent",

  // JSON
  "JSON",

  // Audio
  "Audio",

  // Miscellaneous
  "Blob",
  "ArrayBuffer",
  "FileReader",
  "CanvasRenderingContext2D",
  "Worker",
  "Range",
  "Selection",
  "IDBFactory",
  "DOMTokenList",
  "console",
  "IDBRequest",
  "IDBDatabase",
  "IDBObjectStore",
  "IDBIndex",
  "File",
  "Performance",
  "MediaQueryList",
  "FileList",
  "ClientRectList",
  "MediaList",
  "StyleSheetList",
  "MimeTypeArray",
  "PluginArray",
  "DOMStringList",
  "HTMLCollection",
  "HTMLOptionsCollection",
  "NamedNodeMap",
  "DOMParser",
  "WebGLRenderingContext",
  "XMLSerializer",
  "CanvasGradient",
  "IDBTransaction",
  "DOMException",
  "DOMImplementation",
  "XPathResult",
  "MutationObserver",
  "CharacterData",
  "ProcessingInstruction",
  "ImageData",
 
  // Non-existent in Firefox 17.0.3.esr.
  //"DOMImplementationList",
  //"GearsBlob",
  //"DOMApplicationCache",
  //"WebWorker",
  //"SharedWorker",
  //"WorkerGlobalScope",
  //"JSONType",
  //"FileWriter",
  //"MessagePort",
  //"TextRange",
  //"DocumentRange",
  //"ObjectPropertyDescriptor",
  //"FileSaver",
  //"DocumentEvent",
  //"ActiveXObject",
  //"SWFObject",
  //"AudioContext",

  // w3c_css.js
  //"CSSProperties",
  //"CSSKeyframesRule",
  //"CSSKeyframeRule",
  //"CSSNamespaceRule",
  //"CSSSupportsRule",
  //"CSSGroupingRule",
  //"CSSConditionRule",
  //"CSSMatrix",
  //"WebKitCSSMatrix",
  //"MSCSSMatrix",
  //"ViewCSS",

  // w3c_dom3.js
  //"DOMImplementationSource",
  //"DOMConfiguration",
  //"NameList",

  // html5.js
  //"Database",
  //"DatabaseCallback",
  //"SQLResultSetRowList",
  //"SQLResultSet",
  //"SQLTransaction",
  //"SQLError",

  // es3.js
  // The arguments object's constructor is just Object.
  //"Arguments"

  // fileapi.js
  //"Entry"
  //"DirectoryEntry",
  //"DirectoryReader",
  //"StorageInfo",
  //"StorageQuota",
  //"WebKitBlobBuilder",
  //"DOMURL",
  //"BlobBuilder",
  //"FileEntry",

  // iphone.js
  //"TouchList",
  //"TouchEvent",
  //"GestureEvent",
  //"Touch",

  // w3c_dom2.js
  //"HTMLIsIndexElement",
];

// Write the message to the log (for debugging/notification).
function msglog(message) {
  var logElt;
  if (document && document.getElementById && (logElt = document.getElementById("messages"))) {
    logElt.textContent += '% ERROR: ' + message + '\n';
  } else if (console && console.log) {
    console.log(message);
  }
}

var PropertyInfo = function(info, name) {
  // The ObjectInfo for which this is a property
  this.objInfo = info;
  // The string name of this property
  this.name = name;
  // The descriptor (hopefully) generated by Object.getOwnPropertyDescriptor
  this.descriptor = null;
  // The current value of the property
  this.value = null;
  // The ObjectInfo representing this property's value, if an object.
  this.valueInfo = null;

  // Return a comma-separated list of attributes, or - for none.
  this.getAttributes = function() {
    
    // Special case
    if (this.name == "__proto__") {
      return "DontEnum";
    }

    // Assume unconstrained access if Object.getOwnPropertyDescriptor
    // was unsuccessful.
    if (this.descriptor == null) return "-";

    // Process the attributes of this property.      
    var output = "";

    // ReadOnly attribute
    if (!this.descriptor.writable) {
      output += "ReadOnly";
    }
    // DontEnum attribute
    if (!this.descriptor.enumerable) {
      output += (output == "" ? "" : ",") + "DontEnum";
    }
    // DontDelete attribute
    if (!this.descriptor.configurable) {
      output += (output == "" ? "" : ",") + "DontDelete";
    }

    if (output == "") {
      output = "-";
    }

    return output;
  }

  // Determine if this value is a non-null object.
  this.isObject = function() {
    if (this.value === null) return false;
    var t = typeof this.value;
    if (t === "function") return true;
    if (t === "object") return true;
    return false;
  }

  // Get comments that can be inserted to warn about lack of info.
  this.getDescriptorInfo = function() {
    var output = "";
    // %%% Apply user-specified data from symprops.list.
    if (this.descriptor === null) {
      // Assume attributes for the non-standard __proto__ property.
      // For other properties, no descriptor means that there is a
      // getter that fails when the prototype object is used as |this|.
      // %%% Probably
      if (this.name !== "__proto__") {
        output += "%%% Unable to get descriptor info for " + this.getChainOutput() + "\n";
      }
    } else {
      if (this.descriptor.get) {
        // Indicate a warning that a getter model is needed.
        output += "%%% " + this.getChainOutput() + " has getter to model\n"; 
      }
      if (this.descriptor.set) {
        // Indicate a warning that a getter model is needed.
        output += "%%% " + this.getChainOutput() + " has setter to model\n"; 
      }
    }
    return output;
  }

  // Get the string representation of an object.
  this.getObjectValueOutput = function() {
    var output = "";
    if (this.valueInfo === null) {
      var locidx = LOCATION_INDEX.indexOf(this.value);
      if (locidx > -1) {
        output += LOCATION_MAP[locidx][1];
      } else {
        output += this.objInfo.locName + "#" + this.name;
      }
    } else {
      output += this.valueInfo.locName;
    }
    return output;
  }

  // Get the string representation of a primitive.
  this.getPrimitiveValueOutput = function() {
    var output = "";
    var val = this.value;
    if (val === undefined) {
      val = "#undefined";  
    } else if (val === null) {
      val = "#null";
    } else if (Number.isNaN(val)) {
      val = "#NaN";
    } else if (val === Infinity) {
      val = "#Infinity";
    } else if (val === -Infinity) {
      val = "#-Infinity";
    } else if (typeof val == "string") {
      // %%% Good enough escaping?
      val = '"' + val.replace(/\n/g, "\\n").replace(/"/g, "\\\"") + '"';
    }
      
    output += val;
    return output;
  }

  // Get the value information for the property.
  this.getValueOutput = function() {
    var output = "";
    if (this.descriptor === null && this.name != '__proto__') {
      // "?/?" indicates a purely symbolic value.
      output += "?/?";
    } else if (this.isObject()) {
      output += this.getObjectValueOutput();
    } else {
      output += this.getPrimitiveValueOutput();
    }
    return output;
  }

  this.getChainOutput = function() {
    var output = "";
    if (this.valueInfo === null) {
      var parentChain = this.objInfo.chain;
      output += parentChain.concat(this.name).join(".");
    } else {
      output += this.valueInfo.chain.join(".");
    }
    return output;
  }

  // Output the specification for this property to be used by
  // generate.py to create the predicates.
  this.getSpecification = function() {
    var output = "";

    output += this.getDescriptorInfo();
    output += this.name + " ";

    // Get a comma-separated list of attributes.
    output += this.getAttributes() + " ";

    output += this.getValueOutput() + " ";
    output += this.getChainOutput();

    return output;
  }

  this.getPropertyValue = function(name) {
    if (!this.isObject()) return null;
    
    var desc = Object.getOwnPropertyDescriptor(this.value, name);
    if (!desc) return null;

    var val = desc.value;
    if (val === null) return true;
    return val;
  }

  this.isFunction = function() {
    if (!this.isObject()) return false;
    if (typeof this.value == "function") return true;
    // %%% I hate you, Firefox 17.
    if (typeof this.value.prototype === "object") return true;
    return false;
  }

  // PropertyInfo initialization
  this.init = function() {
    if (this.name == "__proto__") {
      this.value = this.objInfo.obj.__proto__;
    } else {
      // Attempt to get the property attributes.
      try {
        this.descriptor = Object.getOwnPropertyDescriptor(this.objInfo.obj, this.name);
        this.value = this.descriptor.value;
      } catch (ex) {
        // Set an error and get the value directly.
        this.error += "% " + this.objInfo.objName + "." + this.name + ": error getting property description\n";
        this.descriptor = null;
        try {
          this.value = this.objInfo.obj[this.name];
        } catch (ex2) { 
          this.value = null;
        }
      }
      if (typeof this.descriptor === "undefined") {
        // This is a separate error case with a thrown exception.
        this.error += "% " + this.objInfo.objName + "." + this.name + ": undefined property description\n";
        try {
          this.value = this.objInfo.obj[this.name];
        } catch (ex2) { 
          this.value = null;
        }
      }
    }
  }

  this.init();
}

var ObjectInfo = function(obj, locName) {
  this.obj = obj;
  this.locName = locName;
  this.objName = locName.replace(/#/g, "@");
  this.properties = [];
  this.FUNCTION_PROPERTIES = [
    "caller", "arguments", "length", "name" 
  ];

  this.isFunction = function() {
    if (this.obj === null) return false;
    if (typeof this.obj == "function") return true;
    // %%% I hate you, Firefox 17.
    if (typeof this.obj.prototype === "object") return true;
    return false;
  }

  this.getProperty = function(name) {
    for (var i in this.properties) {
      var prop = this.properties[i];
      if (prop.name == name) {
        return prop;
      }
    }
    return null;
  }

  this.getSpecifications = function() {
    var output = "\n" + this.objName + "\n\n";
    output += "% " + this.locName.substring(1) + " properties\n";

    var keys = [];
    var propmap = {};
    for (var i in this.properties) {
      var p = this.properties[i];
      // Skip the standard function stuff.
      if (this.isFunction() && this.FUNCTION_PROPERTIES.indexOf(p.name) > -1) continue;

      var key = "@" + p.name
      keys.push(key);
      propmap[key] = p.getSpecification() + "\n";
    }

    // Print in sorted order.
    keys.sort();
    for (var i in keys) {
      var nm = keys[i];
      output += propmap[nm];
    }
    output += "\n";

    return output;
  }

  this.getFunctionInfo = function() {
    var keys = [];
    var propmap = {};
    for (var i in this.properties) {
      var prop = this.properties[i];
      if (!prop.isFunction()) continue;

      // Collect the function-specific properties.
      var funprops = {};
      for (var n in this.FUNCTION_PROPERTIES) {
        var name = this.FUNCTION_PROPERTIES[n];
        var funprop = prop.getPropertyValue(name);
        if (funprop === null) {
          // %%% This is the norm in Firefox. Need to be browser
          // %%% specific.
          //msglog("Function property " + name + " not found for " + this.locName + "." + prop.name);
          if (name === "name") {
            funprops[name] = prop.name;
            //msglog(name + " >>> " + prop.name);
          }
          if (name === "length") {
            // %%% Incorrect.
            funprops[name] = 0;
          }
        } else {
          funprops[name] = funprop;
        }
      }

      var proploc = prop.getObjectValueOutput()
      var nm = '"' + funprops["name"] + '"';
      var len = funprops["length"];

      var key = "@" + nm;
      keys.push(key);
      var spec = proploc + " " + nm + " " + len;

      // %%% Heuristic to recognize constructors: they're typically
      // %%% upper case.
      if (typeof funprops["name"] !== "undefined"
          && funprops["name"].charCodeAt(0) < 91) {
        spec += " c";
      }

      // %%% How to determine variable-length functions?

      propmap[key] = spec + "\n";
    }

    // Suppress objects with no methods.
    if (keys.length === 0) return "";

    var output = "\n";
    output += "% " + this.locName.substring(1) + " methods\n";

    // Print in sorted order.
    keys.sort();
    for (var i in keys) {
      var nm = keys[i];
      output += propmap[nm];
    }

    output += "\n";

    return output;
  }
}

// Configuration for a Collector to tell it how to behave.
//
// given (can also set afterwards):
//   maxDepth  How far to transitively scan
//   exclude  An |Array| of objects to skip over.
var CollectorConfig = function(maxDepth, doProto, exclude) {
  var DEFAULT_MAXDEPTH = 5;
  // By default, exclude all user-defined objects.
  var DEFAULT_EXCLUDE = [
    LOCATION_INDEX,
    LOCATION_MAP,
    PropertyInfo,
    ObjectInfo,
    Collector,
    CollectorConfig,
    printPropsFromObject,
    collectNatives,
    printPropsFromField,
    msglog,
  ];
  var DEFAULT_DO_PROTO = true;
  
  if (typeof exclude === "undefined" || !(exclude instanceof Array)) 
    exclude = DEFAULT_EXCLUDE;
  this.exclude = exclude;

  if (typeof maxDepth === "undefined")
    maxDepth = DEFAULT_MAXDEPTH; 
  this.maxDepth = maxDepth;

  if (typeof doProto === "undefined")
    doProto = DEFAULT_DO_PROTO;
  this.doProto = doProto;
}
  
// Construct a Collector object that scans and makes note of the
//   properties of an object, transitively scanning object-valued
//   properties. It has a memory and won't print the same object twice.
// 
// given:
//   config  A CollectorConfig object, or undefined for the default.
// return:
//   A Collector object that scans and makes note of the properties of
//     an object, transitively scanning object-valued properties.
var Collector = function(config) {
  if (!(config instanceof CollectorConfig)) {
    msglog("WARNING: Invalid configuration object; must be a CollectorConfig object.");
    config = new CollectorConfig();
  }
  this.level = 0;
  this.collected = [];

  // Keep parallel arrays since you can't index a map with objects.
  this.infos = [];
  this.objs = [];

  this.getObjectIndex = function(obj) {
    return this.objs.indexOf(obj);
  }

  // Find an existing ObjectInfo encapsulating the given object.
  //
  // given:
  //   obj  The object for which to look for info.
  // return:
  //   |null|, or an ObjectInfo representing the given object.
  this.findInfo = function(obj) {
    var idx = this.getObjectIndex(obj);

    if (idx === -1) return null;

    var ret = this.infos[idx];
    if (ret.obj !== obj) {
      msglog("Error finding ObjectInfo record: objs and infos are out of sync.");
      return null;
    }
    return ret;
  }

  // Give an object a name. It does not look for previously created
  //   ObjectInfo records before creating a new one.
  //
  // given:
  //   obj  Object to give a name to
  //   name  Name to give
  // return:
  //   A newly create ObjectInfo (so it's assumed that findInfo was
  //     already called)
  this.nameObject = function(obj, name) {
    var info = new ObjectInfo(obj, name);

    // All of these should remain in parallel.
    this.infos.push(info);
    this.objs.push(obj);

    return this.objs.length - 1;
  }

  // Converts typeof value to the internal semantic type name.
  this.typeTranslate = function(typstr) {
    var typ;
    switch (typstr) {
      case "undefined":
        typ = "_";
        break;
      case "string":
        typ = "'String'";
        break;
      case "number":
        typ = "'Number'";
        break;
      case "boolean":
        typ = "'Boolean'";
        break;
      case "object":
      case "function":
        typ = "'Object'";
        break;
      default:
        msglog("Unknown value type: " + typstr);
        break;
    }
    return typ;
  }

  // Log an object's prototype chain (including itself) to the console.
  this.protoChain = function(obj) {
    if (obj == undefined) {
      return;
    }
    msglog(obj);
    protoChain(obj.__proto__);
  }

  this.getLog = function() {
    var log = document.getElementById("log");
    if (!log) {
      log = document.createElement("pre");
      log.id = "log";
      document.body.appendChild(log);
    }
    return log;
  }

  this.printInfo = function() {
    var log = this.getLog();
    log.textContent += "";
    for (var i in this.infos) {
      var info = this.infos[i];
      if (info.properties.length > 0) {
        log.textContent += info.getSpecifications();
      }
    }
    log.textContent += "\n";
    for (var i in this.infos) {
      var info = this.infos[i];
      if (info.properties.length > 0) {
        log.textContent += info.getFunctionInfo();
      }
    }
  }

  this.printUserAgent = function() {
    var log = this.getLog();
    var ua = navigator.userAgent;
    var date = new Date();

    log.textContent += "\n% Generated: " + date + "\n";
    log.textContent += "% User agent: " + ua + "\n";
  }

  // Recursively collect the object tree starting at obj.
  // 
  // given:
  //   obj  The object to scan
  //   locName  Name of the object's location
  //   chain  An |Array| with the property chain to reach the object
  // return:
  //   The ObjectInfo with the |properties| property filled in.
  this.collectObjects = function(obj, locName, chain) {

    var idx = this.getObjectIndex(obj);
    if (idx === -1) {
      idx = this.nameObject(obj, locName);
    }
    var info = this.infos[idx];
    // Potentially update the chain, if a shorter one was passed.
    if (!info.chain || info.chain.length > chain.length) {
      info.chain = chain;
    }

    if (this.level > config.maxDepth
        // Scan constructor prototypes over an additional level.
        || (chain[chain.length-1] !== "prototype" && this.level >= config.maxDepth)
        // Don't re-collect an object that has already been scanned.
        || this.collected.indexOf(obj) > -1) {
      return info;
    }

    // Bound the recursion to finish in reasonable time.
    // It's unlikely that we'll need a model over 4 or 5
    // levels deep.
    this.level++;
    this.collected.push(obj);

    // Get all of the object's properties.
    var propNames = Object.getOwnPropertyNames(info.obj);
    // Traverse the object prototype chain also.
    propNames.push("__proto__");

    for (var i in propNames) {
      var propName = propNames[i];
      var prop = new PropertyInfo(info, propName);
      var val = prop.value;

      // Disregard specified values.
      if (config.exclude.indexOf(val) != -1) continue;

      info.properties.push(prop);

      // Collect the properties for children that are objects.
      if (prop.isObject()) {

        var proploc = prop.getObjectValueOutput();
        
        // Recurse on object-valued properties. If the object has
        // already been scanned via another reference, the
        // corresponding |ObjectInfo| will be returned so that all
        // occurences of the object will be referred to by one name.
        var propinfo = this.collectObjects(val, proploc, chain.concat(propName));
        prop.valueInfo = propinfo;
      }
    }

    this.level--;
    return info;
  }

  this.init = function() {
    for (var i in LOCATION_MAP) {
      var entry = LOCATION_MAP[i];
      var expr;
      var loc;
      if (entry instanceof Array && entry.length > 0) {
        expr = entry[0];
        if (entry.length > 1) {
          loc = entry[1];
        } else {
          loc = "#" + expr;
          // Convert the entry to a tuple.
          LOCATION_MAP[i] = [expr, loc];
        }
      } else if (typeof entry === "string") {
        expr = entry;
        loc = "#" + expr;
        // Convert the entry to a tuple.
        LOCATION_MAP[i] = [expr, loc];
      } else {
        msglog("Unknown format for LOCATION_MAP: " + entry);
        expr = "null";
      }

      var val = null;
      try {
        val = eval(expr);
        if (typeof val !== "object" && typeof val !== "function") {
          msglog("Value in LOCATION_MAP is not an object: " + expr);
          val = null;
        }
      } catch (ex) {
        msglog("Value in LOCATION_MAP does not exist: " + expr);
      }

      LOCATION_INDEX.push(val);
    }
  }

  this.init();
}

function printPropsFromObject(obj, loc, name) {
  if (typeof obj === "undefined") {
    msglog("Cannot scan undefined location: " + name);
    return;
  }
  if (typeof obj !== "object" && typeof obj !== "function") {
    msglog("Location is not an object: " + name + ", value: " + obj);
    return;
  }
  var coll = new Collector(new CollectorConfig(1, true));
  coll.collectObjects(obj, loc, [name]);

  coll.printInfo();
}

function collectNatives() {
  // Argument determines depth to follow the object tree.
  var coll = new Collector(new CollectorConfig(1, true));

  for (var i in LOCATION_MAP) {
    var obj = LOCATION_INDEX[i];
    if (obj === null) continue;

    var entry = LOCATION_MAP[i];
    var name = entry[0];
    var loc = entry[1];
    coll.collectObjects(obj, loc, [name]);
  }

  coll.printUserAgent();
  coll.printInfo();
}

