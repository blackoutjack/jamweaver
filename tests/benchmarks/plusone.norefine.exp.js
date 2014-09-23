function v4() {
  function v3(url$$7) {
    initialize(url$$7);
    return
  }
  function v2(features$$7, opt_callback$$2) {
    var urlToLoad;
    var v70 = !features$$7;
    if(!v70) {
      v70 = features$$7.length == 0
    }
    if(v70) {
      warn(["Cannot load empty features."])
    }else {
      var JSCompiler_inline_result$$6;
      var features$$inline_18 = features$$7;
      var set$$inline_19 = toSet(loadedFeatures);
      var isSubset$$inline_20 = !0;
      var i$$inline_21 = 0;
      var v71 = isSubset$$inline_20;
      if(v71) {
        v71 = i$$inline_21 < features$$inline_18.length
      }
      var v7 = v71;
      for(;v7;) {
        var v6 = isSubset$$inline_20;
        if(v6) {
          v6 = set$$inline_19[features$$inline_18[i$$inline_21]]
        }
        isSubset$$inline_20 = v6;
        i$$inline_21 = i$$inline_21 + 1;
        var v73 = isSubset$$inline_20;
        if(v73) {
          v73 = i$$inline_21 < features$$inline_18.length
        }
        v7 = v73
      }
      JSCompiler_inline_result$$6 = isSubset$$inline_20;
      if(JSCompiler_inline_result$$6) {
        warn(["Cannot load loaded features [", JAM.call(features$$7.join, features$$7, [","], JAM.policy.p2), "]."])
      }else {
        var v75 = type$$25 === "s";
        if(!v75) {
          v75 = type$$25 === "i"
        }
        if(v75) {
          JSCompiler_inline_label_processUrlFromMap_25: {
            var features$$inline_23 = features$$7;
            var version$$inline_24 = descriptors[toKey(features$$inline_23, loadedFeatures)];
            if(version$$inline_24) {
              urlToLoad = host + "/" + version$$inline_24 + ".js";
              break JSCompiler_inline_label_processUrlFromMap_25
            }else {
              warn(["Cannot find features [", JAM.call(features$$inline_23.join, features$$inline_23, [","], JAM.policy.p2), "], except [", JAM.call(loadedFeatures.join, loadedFeatures, [","], JAM.policy.p2), "]."])
            }
            urlToLoad = void 0
          }
        }else {
          if(type$$25 === "d") {
            var url$$inline_27 = host + "/" + toKey(features$$7, loadedFeatures);
            url$$inline_27 = url$$inline_27 + (".js?container=" + container + "&c=2");
            if(repository) {
              url$$inline_27 = url$$inline_27 + ("&r=" + repository)
            }
            urlToLoad = url$$inline_27
          }else {
            var v80 = type$$25 === "r";
            if(!v80) {
              v80 = type$$25 === "f"
            }
            if(v80) {
              var JSCompiler_temp_const$$39 = host + "/" + repository + "/";
              var JSCompiler_inline_result$$40;
              var opt_loadFeatures$$inline_42 = loadedFeatures;
              var v16 = normalize(features$$7);
              var result$$inline_43 = JAM.call(v16.join, v16, ["__"], JAM.policy.p2);
              if(opt_loadFeatures$$inline_42) {
                var v82 = opt_loadFeatures$$inline_42.length > 0;
                if(v82) {
                  var v152 = result$$inline_43;
                  var v165 = normalize(opt_loadFeatures$$inline_42);
                  result$$inline_43 = v152 + ("--" + JAM.call(v165.join, v165, ["__"], JAM.policy.p2))
                }
              }
              JSCompiler_inline_result$$40 = result$$inline_43;
              urlToLoad = JSCompiler_temp_const$$39 + JSCompiler_inline_result$$40 + ".js"
            }else {
              warn(["Cannot respond for features [", JAM.call(features$$7.join, features$$7, [","], JAM.policy.p2), "]."])
            }
          }
        }
      }
    }
    var features$$inline_29 = features$$7;
    var opt_url$$inline_30 = urlToLoad;
    var opt_callback$$inline_31 = opt_callback$$2;
    if(opt_url$$inline_30) {
      var JSCompiler_temp_const$$34;
      var jsl$$inline_47 = window["___jsl"];
      var v84 = jsl$$inline_47;
      if(v84) {
        v84 = opt_callback$$inline_31 && 1
      }
      if(v84) {
        if(jsl$$inline_47["c"]) {
          throw"Cannot continue until a pending callback completes.";
        }
        jsl$$inline_47["c"] = opt_callback$$inline_31;
        jsl$$inline_47["o"] = 1
      }
      JSCompiler_temp_const$$34 = void 0;
      var JSCompiler_inline_result$$35;
      var url$$inline_49 = opt_url$$inline_30;
      var JSCompiler_inline_result$$54;
      JSCompiler_inline_label_canLoadUrl_58: {
        var url$$inline_55 = url$$inline_49;
        var v85 = type$$25 === "s";
        if(!v85) {
          v85 = type$$25 === "r"
        }
        if(v85) {
          JSCompiler_inline_result$$54 = JAM.call(url$$inline_55.match, url$$inline_55, [VALID_SCS_URL_REGEX], JAM.policy.p3);
          break JSCompiler_inline_label_canLoadUrl_58
        }
        var JSCompiler_inline_result$$inline_56;
        var jsl$$inline_57 = window["___jsl"];
        var v26 = jsl$$inline_57;
        if(v26) {
          var v86 = jsl$$inline_57["m"] == "dev";
          if(!v86) {
            v86 = jsl$$inline_57["m"] == "google"
          }
          v26 = v86
        }
        JSCompiler_inline_result$$inline_56 = v26;
        var v27 = JSCompiler_inline_result$$inline_56;
        if(v27) {
          v27 = JAM.call(url$$inline_55.match, url$$inline_55, [VALID_GOOGLE_URL_REGEX], JAM.policy.p3)
        }
        JSCompiler_inline_result$$54 = v27
      }
      if(!JSCompiler_inline_result$$54) {
        throw"Cannot load url " + url$$inline_49 + ".";
      }
      if(shouldLoadSync()) {
        JAM.call(document.write, document, ['<script src="' + url$$inline_49 + '">\x3c/script>'], JAM.policy.p3)
      }else {
        var script$$inline_50 = JAM.call(document.createElement, document, ["script"], JAM.policy.p3);
        JAM.call(script$$inline_50.setAttribute, script$$inline_50, ["src", url$$inline_49], JAM.policy.p2);
        var v31 = JAM.call(document.getElementsByTagName, document, ["head"], JAM.policy.p2)[0];
        JAM.call(v31.appendChild, v31, [script$$inline_50], JAM.policy.p3)
      }
      JSCompiler_inline_result$$35 = void 0;
      JSCompiler_temp_const$$34;
      var JSCompiler_temp_const$$36 = JSCompiler_inline_result$$35;
      var JSCompiler_inline_result$$37;
      loadedFeatures = normalize(JAM.call(loadedFeatures.concat, loadedFeatures, [features$$inline_29], JAM.policy.p3));
      JSCompiler_inline_result$$37 = void 0
    }else {
      if(opt_callback$$inline_31) {
        opt_callback$$inline_31()
      }
    }
    return
  }
  function toKey(reqFeatures, opt_loadFeatures) {
    var v34 = normalize(reqFeatures);
    var result = JAM.call(v34.join, v34, [":"], JAM.policy.p2);
    if(opt_loadFeatures) {
      var v89 = opt_loadFeatures.length > 0;
      if(v89) {
        var v154 = result;
        var v166 = normalize(opt_loadFeatures);
        result = v154 + ("!" + JAM.call(v166.join, v166, [":"], JAM.policy.p2))
      }
    }
    return result
  }
  function toSet(array$$9) {
    var result$$2 = {};
    var i$$1 = 0;
    var v36 = i$$1 < array$$9.length;
    for(;v36;) {
      JAM.set(result$$2, array$$9[i$$1], !0);
      i$$1 = i$$1 + 1;
      v36 = i$$1 < array$$9.length
    }
    return result$$2
  }
  function normalize(features$$1) {
    var result$$3 = [];
    var s$$2;
    for(s$$2 in toSet(features$$1)) {
      JAM.call(result$$3.push, result$$3, [s$$2], JAM.policy.p3)
    }
    return result$$3.sort()
  }
  function shouldLoadSync() {
    if(window["___gapisync"] === !0) {
      return!0
    }
    var metas = JAM.call(document.getElementsByTagName, document, ["meta"], JAM.policy.p2);
    var i$$3 = 0;
    var v40 = i$$3 < metas.length;
    for(;v40;) {
      var meta = metas[i$$3];
      var v95 = "generator" == JAM.call(meta.getAttribute, meta, ["name"], JAM.policy.p2);
      if(!v95) {
        v95 = "blogger" == JAM.call(meta.getAttribute, meta, ["content"], JAM.policy.p2)
      }
      if(v95) {
        return!0
      }
      i$$3 = i$$3 + 1;
      v40 = i$$3 < metas.length
    }
    return!1
  }
  function warn(values$$4) {
    if(console) {
      JAM.call(console.warn, console, [JAM.call(values$$4.join, values$$4, [""], JAM.policy.p2)], JAM.policy.p3)
    }
    return
  }
  function initDescriptors(values$$5) {
    var i$$4 = 0;
    var v44 = i$$4 < values$$5.length;
    for(;v44;) {
      var value$$29 = values$$5[i$$4];
      var versionParts = JAM.call(value$$29.split, value$$29, ["@"], JAM.policy.p2);
      var JSCompiler_temp_const$$7 = descriptors;
      var JSCompiler_inline_result$$8;
      var v41 = versionParts[0];
      var featureParts$$inline_12 = JAM.call(v41.split, v41, ["!"], JAM.policy.p2);
      var v99 = featureParts$$inline_12[0];
      var req$$inline_13 = normalize(JAM.call(v99.split, v99, [":"], JAM.policy.p2));
      var v43 = featureParts$$inline_12[1];
      if(v43) {
        var v139 = featureParts$$inline_12[1];
        v43 = normalize(JAM.call(v139.split, v139, [":"], JAM.policy.p2))
      }
      var loaded$$inline_14 = v43;
      JSCompiler_inline_result$$8 = toKey(req$$inline_13, loaded$$inline_14);
      JAM.set(JSCompiler_temp_const$$7, JSCompiler_inline_result$$8, versionParts[1]);
      i$$4 = i$$4 + 1;
      v44 = i$$4 < values$$5.length
    }
    return
  }
  function getLastHint(pattern$$1) {
    var r = JAM.call(parentUrl.match, parentUrl, [pattern$$1], JAM.policy.p3);
    var v45 = r;
    if(v45) {
      v45 = r[r.length - 1]
    }
    return v45
  }
  function initialize(url$$6) {
    host = type$$25 = 0;
    descriptors = {};
    loadedFeatures = [];
    var v46 = window.console;
    if(!v46) {
      var v103 = window.opera;
      if(v103) {
        v103 = window.opera.postError
      }
      v46 = v103
    }
    console = v46;
    parentUrl = url$$6;
    var JSCompiler_temp$$5;
    var v105 = getLastHint(QUERY_PATTERN);
    if(!v105) {
      v105 = getLastHint(FRAGMENT_PATTERN)
    }
    if(JSCompiler_temp$$5 = v105) {
    }else {
      var jsl$$inline_16 = window["___jsl"];
      var v47 = jsl$$inline_16;
      if(v47) {
        v47 = jsl$$inline_16["h"]
      }
      JSCompiler_temp$$5 = v47
    }
    var hint = JSCompiler_temp$$5;
    if(hint) {
      var parts = JAM.call(hint.split, hint, [";"], JAM.policy.p2);
      type$$25 = parts[0];
      var v49;
      if(type$$25 === "s") {
        host = "https://ssl.gstatic.com/webclient/js";
        v49 = initDescriptors(JAM.call(parts.slice, parts, [1], JAM.policy.p2))
      }else {
        var v106;
        if(type$$25 === "i") {
          host = parts[1];
          v106 = initDescriptors(JAM.call(parts.slice, parts, [2], JAM.policy.p2))
        }else {
          var v144;
          if(type$$25 === "d") {
            host = parts[1];
            repository = parts[2];
            var v162 = parts[3];
            if(!v162) {
              v162 = "gcjs-3p"
            }
            v144 = container = v162
          }else {
            var v157;
            if(type$$25 === "r") {
              host = "https://ssl.gstatic.com/webclient/js";
              v157 = repository = parts[1]
            }else {
              var v163 = type$$25 === "f";
              if(v163) {
                host = parts[1];
                v163 = repository = parts[2]
              }
              v157 = v163
            }
            v144 = v157
          }
          v106 = v144
        }
        v49 = v106
      }
      v49
    }
    return
  }
  var QUERY_PATTERN = /\?[&|(\S*=\S*&)]*jsh=(\S*)#?/;
  var FRAGMENT_PATTERN = /#[&|(\S*=\S*&)]*jsh=(\S*)/;
  var VALID_SCS_URL_REGEX = /^https:\/\/ssl.gstatic.com\/webclient\/js(\/[a-zA-Z0-9_\-]+)*\/[a-zA-Z0-9_\-\.:!]+\.js$/;
  var VALID_GOOGLE_URL_REGEX = RegExp("^(http:|https:)?(\\/\\/)?([a-zA-Z0-9_\\-]+\\.)*google\\.com(:[0-9]+)?(\\/[a-zA-Z0-9_\\-]+)*\\/[a-zA-Z0-9_\\-\\.:!]+\\.js(\\?[a-zA-Z0-9_\\-&=%]*)?$");
  var type$$25;
  var host;
  var container;
  var repository;
  var descriptors;
  var loadedFeatures;
  var console;
  var parentUrl;
  initialize(document.location.href);
  jsloader_load = v2;
  jsloader.reinitialize_ = v3;
  return
}
function v1() {
  function f(n$$1) {
    function v0() {
      var v51 = window.___gpq;
      JAM.call(v51.push, v51, [n$$1, arguments], JAM.policy.p3);
      return
    }
    return v0
  }
  return{go:f("go"), render:f("render")}
}
function __bsld() {
  var p = window.gapi.plusone = window.googleapisv0.plusone;
  var f$$1;
  var v56 = f$$1 = window.___gpq.shift();
  for(;v56;) {
    var v55 = p[f$$1];
    if(v55) {
      var v111 = p[f$$1];
      JAM.call(v111.apply, v111, [p, window.___gpq.shift()], JAM.policy.p3)
    }
    v56 = f$$1 = window.___gpq.shift()
  }
  var v159 = gadgets.config;
  if(JAM.call(v159.get, v159, ["gwidget"], JAM.policy.p2)["parsetags"] !== "explicit") {
    gapi.plusone.go()
  }
  return
}
function gapi_load(features$$8, opt_callback$$3) {
  JAM.call(jsloader_load, null, [JAM.call(features$$8.split, features$$8, [":"], JAM.policy.p2), opt_callback$$3]);
  return
}
var v60 = window.___jsl;
if(!v60) {
  v60 = {}
}
window.___jsl = v60;
var v61 = window.___jsl;
var v116 = window.___jsl.h;
if(!v116) {
  v116 = "s;plusone:googleapis.client@21550740_8d71de52/client;googleapis.proxy@21550740_8d71de52/proxy;plusone:googleapis.client:iframes-styles-bubble@21550740_8d71de52/bubble;iframes-styles-bubble!plusone:googleapis.client@21550740_8d71de52/bubble_only;plusone-unsupported@21550740_8d71de52/unsupported"
}
v61.h = v116;
window.___gpq = [];
var v62 = window.gapi;
if(!v62) {
  v62 = {}
}
window.gapi = v62;
var v63 = window.gapi;
var v118 = window.gapi.plusone;
if(!v118) {
  v118 = v1()
}
v63.plusone = v118;
var jsloader_load;
var goog;
var v64 = window["___jsl"];
if(!v64) {
  v64 = {}
}
window["___jsl"] = v64;
window["___jsl"]["u"] = "https://apis.google.com/js/plusone.js";
window["___jsl"]["f"] = ["googleapis.client", "plusone"];
var v67 = window["jsloader"];
if(!v67) {
  v67 = {}
}
var jsloader = v67;
var v68 = window["gapi"];
if(!v68) {
  v68 = {}
}
var gapi = v68;
v4();
gapi_load("googleapis.client:plusone", window["__bsld"])
