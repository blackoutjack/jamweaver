// plusone.js
function v4() {
  function v3(url$$6) {
    initialize(url$$6);
    return;
  }
  function v2(features$$7, opt_callback$$2) {
    var urlToLoad;
    var v72 = !features$$7;
    if (!v72) {
      v72 = features$$7.length == 0;
    }
    if (v72) {
      warn(["Cannot load empty features."]);
    } else {
      var JSCompiler_inline_result$$6;
      var features$$inline_18 = features$$7;
      var set$$inline_19 = toSet(loadedFeatures);
      var isSubset$$inline_20 = !0;
      var i$$inline_21 = 0;
      var v73 = isSubset$$inline_20;
      if (v73) {
        v73 = i$$inline_21 < features$$inline_18.length;
      }
      var v7 = v73;
      for (;v7;) {
        var v6 = isSubset$$inline_20;
        if (v6) {
          v6 = set$$inline_19[features$$inline_18[i$$inline_21]];
        }
        isSubset$$inline_20 = v6;
        i$$inline_21 = i$$inline_21 + 1;
        var v75 = isSubset$$inline_20;
        if (v75) {
          v75 = i$$inline_21 < features$$inline_18.length;
        }
        v7 = v75;
      }
      JSCompiler_inline_result$$6 = isSubset$$inline_20;
      if (JSCompiler_inline_result$$6) {
        warn(["Cannot load loaded features [", JAM.call(features$$7.join, features$$7, [","], JAM.policy.p2), "]."]);
      } else {
        var v77 = type$$25 === "s";
        if (!v77) {
          v77 = type$$25 === "i";
        }
        if (v77) {
          JSCompiler_inline_label_processUrlFromMap_25: {
            var features$$inline_23 = features$$7;
            var version$$inline_24 = descriptors[toKey(features$$inline_23, loadedFeatures)];
            if (version$$inline_24) {
              urlToLoad = host + "/" + version$$inline_24 + ".js";
              break JSCompiler_inline_label_processUrlFromMap_25;
            } else {
              warn(["Cannot find features [", JAM.call(features$$inline_23.join, features$$inline_23, [","], JAM.policy.p2), "], except [", JAM.call(loadedFeatures.join, loadedFeatures, [","], JAM.policy.p2), "]."]);
            }
            urlToLoad = void 0;
          }
        } else {
          if (type$$25 === "d") {
            var url$$inline_27 = host + "/" + toKey(features$$7, loadedFeatures);
            url$$inline_27 = url$$inline_27 + (".js?container=" + container + "&c=2");
            if (repository) {
              url$$inline_27 = url$$inline_27 + ("&r=" + repository);
            }
            urlToLoad = url$$inline_27;
          } else {
            var v82 = type$$25 === "r";
            if (!v82) {
              v82 = type$$25 === "f";
            }
            if (v82) {
              var JSCompiler_temp_const$$39 = host + "/" + repository + "/";
              var JSCompiler_inline_result$$40;
              var opt_loadFeatures$$inline_42 = loadedFeatures;
              var v16 = normalize(features$$7);
              var result$$inline_43 = JAM.call(v16.join, v16, ["__"], JAM.policy.p2);
              var v84 = opt_loadFeatures$$inline_42;
              if (v84) {
                v84 = opt_loadFeatures$$inline_42.length > 0;
              }
              var v17 = v84;
              if (v17) {
                var v133 = result$$inline_43;
                var v164 = normalize(opt_loadFeatures$$inline_42);
                result$$inline_43 = v133 + ("--" + JAM.call(v164.join, v164, ["__"], JAM.policy.p2));
              }
              JSCompiler_inline_result$$40 = result$$inline_43;
              urlToLoad = JSCompiler_temp_const$$39 + JSCompiler_inline_result$$40 + ".js";
            } else {
              warn(["Cannot respond for features [", JAM.call(features$$7.join, features$$7, [","], JAM.policy.p2), "]."]);
            }
          }
        }
      }
    }
    var features$$inline_29 = features$$7;
    var opt_url$$inline_30 = urlToLoad;
    var opt_callback$$inline_31 = opt_callback$$2;
    if (opt_url$$inline_30) {
      var JSCompiler_temp_const$$34;
      var jsl$$inline_47 = window["___jsl"];
      var v86 = jsl$$inline_47 && opt_callback$$inline_31;
      if (v86) {
        v86 = 1;
      }
      if (v86) {
        if (jsl$$inline_47["c"]) {
          throw "Cannot continue until a pending callback completes.";
        }
        jsl$$inline_47["c"] = opt_callback$$inline_31;
        jsl$$inline_47["o"] = 1;
      }
      JSCompiler_temp_const$$34 = void 0;
      var JSCompiler_inline_result$$35;
      var url$$inline_49 = opt_url$$inline_30;
      var JSCompiler_inline_result$$54;
      JSCompiler_inline_label_canLoadUrl_58: {
        var url$$inline_55 = url$$inline_49;
        var v87 = type$$25 === "s";
        if (!v87) {
          v87 = type$$25 === "r";
        }
        if (v87) {
          JSCompiler_inline_result$$54 = JAM.call(url$$inline_55.match, url$$inline_55, [VALID_SCS_URL_REGEX], JAM.policy.p3);
          break JSCompiler_inline_label_canLoadUrl_58;
        }
        var JSCompiler_inline_result$$inline_56;
        var jsl$$inline_57 = window["___jsl"];
        var v27 = jsl$$inline_57;
        if (v27) {
          var v88 = jsl$$inline_57["m"] == "dev";
          if (!v88) {
            v88 = jsl$$inline_57["m"] == "google";
          }
          v27 = v88;
        }
        JSCompiler_inline_result$$inline_56 = v27;
        var v28 = JSCompiler_inline_result$$inline_56;
        if (v28) {
          v28 = JAM.call(url$$inline_55.match, url$$inline_55, [VALID_GOOGLE_URL_REGEX], JAM.policy.p3);
        }
        JSCompiler_inline_result$$54 = v28;
      }
      if (!JSCompiler_inline_result$$54) {
        throw "Cannot load url " + url$$inline_49 + ".";
      }
      if (shouldLoadSync()) {
        JAM.call(document.write, document, ['<script src="' + url$$inline_49 + '">\x3c/script>'], JAM.policy.p3);
      } else {
        var script$$inline_50 = JAM.call(document.createElement, document, ["script"], JAM.policy.p3);
        JAM.call(script$$inline_50.setAttribute, script$$inline_50, ["src", url$$inline_49], JAM.policy.p2);
        var v32 = JAM.call(document.getElementsByTagName, document, ["head"], JAM.policy.p2)[0];
        JAM.call(v32.appendChild, v32, [script$$inline_50], JAM.policy.p3);
      }
      JSCompiler_inline_result$$35 = void 0;
      JSCompiler_temp_const$$34;
      var JSCompiler_temp_const$$36 = JSCompiler_inline_result$$35;
      var JSCompiler_inline_result$$37;
      loadedFeatures = normalize(JAM.call(loadedFeatures.concat, loadedFeatures, [features$$inline_29], JAM.policy.p3));
      JSCompiler_inline_result$$37 = void 0;
    } else {
      if (opt_callback$$inline_31) {
        opt_callback$$inline_31();
      }
    }
    return;
  }
  function toKey(reqFeatures, opt_loadFeatures) {
    var v35 = normalize(reqFeatures);
    var result = JAM.call(v35.join, v35, [":"], JAM.policy.p2);
    var v91 = opt_loadFeatures;
    if (v91) {
      v91 = opt_loadFeatures.length > 0;
    }
    var v36 = v91;
    if (v36) {
      var v140 = result;
      var v165 = normalize(opt_loadFeatures);
      result = v140 + ("!" + JAM.call(v165.join, v165, [":"], JAM.policy.p2));
    }
    return result;
  }
  function toSet(array$$9) {
    var result$$2 = {};
    var i$$1 = 0;
    var v38 = i$$1 < array$$9.length;
    for (;v38;) {
      JAM.set(result$$2, array$$9[i$$1], !0);
      i$$1 = i$$1 + 1;
      v38 = i$$1 < array$$9.length;
    }
    return result$$2;
  }
  function normalize(features$$1) {
    var result$$3 = [];
    var s$$2;
    for (s$$2 in toSet(features$$1)) {
      JAM.call(result$$3.push, result$$3, [s$$2], JAM.policy.p3);
    }
    return result$$3.sort();
  }
  function shouldLoadSync() {
    if (window["___gapisync"] === !0) {
      return!0;
    }
    var metas = JAM.call(document.getElementsByTagName, document, ["meta"], JAM.policy.p2);
    var i$$3 = 0;
    var v42 = i$$3 < metas.length;
    for (;v42;) {
      var meta = metas[i$$3];
      var v97 = "generator" == JAM.call(meta.getAttribute, meta, ["name"], JAM.policy.p2);
      if (!v97) {
        v97 = "blogger" == JAM.call(meta.getAttribute, meta, ["content"], JAM.policy.p2);
      }
      if (v97) {
        return!0;
      }
      i$$3 = i$$3 + 1;
      v42 = i$$3 < metas.length;
    }
    return!1;
  }
  function warn(values$$4) {
    if (console) {
      JAM.call(console.warn, console, [JAM.call(values$$4.join, values$$4, [""], JAM.policy.p2)], JAM.policy.p3);
    }
    return;
  }
  function initDescriptors(values$$5) {
    var i$$4 = 0;
    var v46 = i$$4 < values$$5.length;
    for (;v46;) {
      var value$$27 = values$$5[i$$4];
      var versionParts = JAM.call(value$$27.split, value$$27, ["@"], JAM.policy.p2);
      var JSCompiler_temp_const$$7 = descriptors;
      var JSCompiler_inline_result$$8;
      var v43 = versionParts[0];
      var featureParts$$inline_12 = JAM.call(v43.split, v43, ["!"], JAM.policy.p2);
      var v101 = featureParts$$inline_12[0];
      var req$$inline_13 = normalize(JAM.call(v101.split, v101, [":"], JAM.policy.p2));
      var v45 = featureParts$$inline_12[1];
      if (v45) {
        var v145 = featureParts$$inline_12[1];
        v45 = normalize(JAM.call(v145.split, v145, [":"], JAM.policy.p2));
      }
      var loaded$$inline_14 = v45;
      JSCompiler_inline_result$$8 = toKey(req$$inline_13, loaded$$inline_14);
      JAM.set(JSCompiler_temp_const$$7, JSCompiler_inline_result$$8, versionParts[1]);
      i$$4 = i$$4 + 1;
      v46 = i$$4 < values$$5.length;
    }
    return;
  }
  function getLastHint(pattern$$1) {
    var r = JAM.call(parentUrl.match, parentUrl, [pattern$$1], JAM.policy.p3);
    var v47 = r;
    if (v47) {
      v47 = r[r.length - 1];
    }
    return v47;
  }
  function initialize(url$$5) {
    host = type$$25 = 0;
    descriptors = {};
    loadedFeatures = [];
    var v48 = window.console;
    if (!v48) {
      var v105 = window.opera;
      if (v105) {
        v105 = window.opera.postError;
      }
      v48 = v105;
    }
    console = v48;
    parentUrl = url$$5;
    var JSCompiler_temp$$5;
    var v107 = getLastHint(QUERY_PATTERN);
    if (!v107) {
      v107 = getLastHint(FRAGMENT_PATTERN);
    }
    if (JSCompiler_temp$$5 = v107) {
    } else {
      var jsl$$inline_16 = window["___jsl"];
      var v49 = jsl$$inline_16;
      if (v49) {
        v49 = jsl$$inline_16["h"];
      }
      JSCompiler_temp$$5 = v49;
    }
    var hint = JSCompiler_temp$$5;
    if (hint) {
      var parts = JAM.call(hint.split, hint, [";"], JAM.policy.p2);
      type$$25 = parts[0];
      var v51;
      if (type$$25 === "s") {
        host = "https://ssl.gstatic.com/webclient/js";
        v51 = initDescriptors(JAM.call(parts.slice, parts, [1], JAM.policy.p2));
      } else {
        var v108;
        if (type$$25 === "i") {
          host = parts[1];
          v108 = initDescriptors(JAM.call(parts.slice, parts, [2], JAM.policy.p2));
        } else {
          var v150;
          if (type$$25 === "d") {
            host = parts[1];
            repository = parts[2];
            var v166 = parts[3];
            if (!v166) {
              v166 = "gcjs-3p";
            }
            v150 = container = v166;
          } else {
            var v161;
            if (type$$25 === "r") {
              host = "https://ssl.gstatic.com/webclient/js";
              v161 = repository = parts[1];
            } else {
              var v167 = type$$25 === "f";
              if (v167) {
                host = parts[1];
                v167 = repository = parts[2];
              }
              v161 = v167;
            }
            v150 = v161;
          }
          v108 = v150;
        }
        v51 = v108;
      }
      v51;
    }
    return;
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
  return;
}
function v1() {
  function f(n$$1) {
    function v0() {
      var v53 = window.___gpq;
      JAM.call(v53.push, v53, [n$$1, arguments], JAM.policy.p3);
      return;
    }
    return v0;
  }
  return{go:f("go"), render:f("render")};
}
function __bsld() {
  var p = window.gapi.plusone = window.googleapisv0.plusone;
  var f$$1;
  var v58 = f$$1 = window.___gpq.shift();
  for (;v58;) {
    var v57 = p[f$$1];
    if (v57) {
      var v113 = p[f$$1];
      JAM.call(v113.apply, v113, [p, window.___gpq.shift()], JAM.policy.p3);
    }
    v58 = f$$1 = window.___gpq.shift();
  }
  var v163 = gadgets.config;
  if (JAM.call(v163.get, v163, ["gwidget"], JAM.policy.p2)["parsetags"] !== "explicit") {
    gapi.plusone.go();
  }
  return;
}
function gapi_load(features$$8, opt_callback$$3) {
  JAM.call(jsloader_load, null, [JAM.call(features$$8.split, features$$8, [":"], JAM.policy.p2), opt_callback$$3]);
  return;
}
var v62 = window.___jsl;
if (!v62) {
  v62 = {};
}
window.___jsl = v62;
var v63 = window.___jsl;
var v118 = window.___jsl.h;
if (!v118) {
  v118 = "s;plusone:googleapis.client@21550740_8d71de52/client;googleapis.proxy@21550740_8d71de52/proxy;plusone:googleapis.client:iframes-styles-bubble@21550740_8d71de52/bubble;iframes-styles-bubble!plusone:googleapis.client@21550740_8d71de52/bubble_only;plusone-unsupported@21550740_8d71de52/unsupported";
}
v63.h = v118;
window.___gpq = [];
var v64 = window.gapi;
if (!v64) {
  v64 = {};
}
window.gapi = v64;
var v65 = window.gapi;
var v120 = window.gapi.plusone;
if (!v120) {
  v120 = v1();
}
v65.plusone = v120;
var jsloader_load;
var goog;
var v66 = window["___jsl"];
if (!v66) {
  v66 = {};
}
window["___jsl"] = v66;
window["___jsl"]["u"] = "https://apis.google.com/js/plusone.js";
window["___jsl"]["f"] = ["googleapis.client", "plusone"];
var v69 = window["jsloader"];
if (!v69) {
  v69 = {};
}
var jsloader = v69;
var v70 = window["gapi"];
if (!v70) {
  v70 = {};
}
var gapi = v70;
v4();
gapi_load("googleapis.client:plusone", window["__bsld"])

