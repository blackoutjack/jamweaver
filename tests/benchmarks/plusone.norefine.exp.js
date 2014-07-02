function v4() {
  function v3(url$$7) {
    initialize(url$$7);
    return
  }
  function v2(features$$7, opt_callback$$2) {
    var urlToLoad;
    var v70 = !features$$7;
    var v123 = !v70;
    if(v123) {
      var v122 = features$$7.length;
      v70 = v122 == 0
    }
    var v22 = v70;
    if(v22) {
      var v5 = ["Cannot load empty features."];
      warn(v5)
    }else {
      var JSCompiler_inline_result$$6;
      var features$$inline_18 = features$$7;
      var set$$inline_19 = toSet(loadedFeatures);
      var isSubset$$inline_20 = !0;
      var i$$inline_21 = 0;
      var v71 = isSubset$$inline_20;
      if(v71) {
        var v124 = features$$inline_18.length;
        v71 = i$$inline_21 < v124
      }
      var v7 = v71;
      for(;v7;) {
        var v6 = isSubset$$inline_20;
        if(v6) {
          var v72 = features$$inline_18[i$$inline_21];
          v6 = set$$inline_19[v72]
        }
        isSubset$$inline_20 = v6;
        i$$inline_21 = i$$inline_21 + 1;
        var v73 = isSubset$$inline_20;
        if(v73) {
          var v125 = features$$inline_18.length;
          v73 = i$$inline_21 < v125
        }
        v7 = v73
      }
      JSCompiler_inline_result$$6 = isSubset$$inline_20;
      if(JSCompiler_inline_result$$6) {
        var v74 = JAMScript.callIntrospect(features$$7.join, features$$7, [","], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
        var v8 = ["Cannot load loaded features [", v74, "]."];
        warn(v8)
      }else {
        var v75 = type$$25 === "s";
        var v126 = !v75;
        if(v126) {
          v75 = type$$25 === "i"
        }
        var v21 = v75;
        if(v21) {
          JSCompiler_inline_label_processUrlFromMap_25: {
            var features$$inline_23 = features$$7;
            var v9 = descriptors;
            var v10 = toKey(features$$inline_23, loadedFeatures);
            var version$$inline_24 = v9[v10];
            if(version$$inline_24) {
              var v76 = host + "/";
              var v11 = v76 + version$$inline_24;
              urlToLoad = v11 + ".js";
              break JSCompiler_inline_label_processUrlFromMap_25
            }else {
              var v77 = JAMScript.callIntrospect(features$$inline_23.join, features$$inline_23, [","], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
              var v78 = JAMScript.callIntrospect(loadedFeatures.join, loadedFeatures, [","], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
              var v12 = ["Cannot find features [", v77, "], except [", v78, "]."];
              warn(v12)
            }
            urlToLoad = void 0
          }
        }else {
          var v20 = type$$25 === "d";
          if(v20) {
            var v13 = host + "/";
            var v14 = toKey(features$$7, loadedFeatures);
            var url$$inline_27 = v13 + v14;
            var v127 = ".js?container=" + container;
            var v79 = v127 + "&c=2";
            url$$inline_27 = url$$inline_27 + v79;
            if(repository) {
              var v128 = "&r=" + repository;
              url$$inline_27 = url$$inline_27 + v128
            }
            urlToLoad = url$$inline_27
          }else {
            var v80 = type$$25 === "r";
            var v129 = !v80;
            if(v129) {
              v80 = type$$25 === "f"
            }
            var v19 = v80;
            if(v19) {
              var v81 = host + "/";
              var v15 = v81 + repository;
              var JSCompiler_temp_const$$39 = v15 + "/";
              var JSCompiler_inline_result$$40;
              var opt_loadFeatures$$inline_42 = loadedFeatures;
              var v16 = normalize(features$$7);
              var result$$inline_43 = JAMScript.callIntrospect(v16.join, v16, ["__"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
              if(opt_loadFeatures$$inline_42) {
                var v130 = opt_loadFeatures$$inline_42.length;
                var v82 = v130 > 0;
                if(v82) {
                  var v152 = result$$inline_43;
                  var v165 = normalize(opt_loadFeatures$$inline_42);
                  var v160 = JAMScript.callIntrospect(v165.join, v165, ["__"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
                  var v153 = "--" + v160;
                  result$$inline_43 = v152 + v153
                }
              }
              JSCompiler_inline_result$$40 = result$$inline_43;
              var v17 = JSCompiler_temp_const$$39 + JSCompiler_inline_result$$40;
              urlToLoad = v17 + ".js"
            }else {
              var v83 = JAMScript.callIntrospect(features$$7.join, features$$7, [","], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
              var v18 = ["Cannot respond for features [", v83, "]."];
              warn(v18)
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
      var v24 = v84;
      if(v24) {
        var v23 = jsl$$inline_47["c"];
        if(v23) {
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
        var v131 = !v85;
        if(v131) {
          v85 = type$$25 === "r"
        }
        var v25 = v85;
        if(v25) {
          JSCompiler_inline_result$$54 = JAMScript.callIntrospect(url$$inline_55.match, url$$inline_55, [VALID_SCS_URL_REGEX], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
          break JSCompiler_inline_label_canLoadUrl_58
        }
        var JSCompiler_inline_result$$inline_56;
        var jsl$$inline_57 = window["___jsl"];
        var v26 = jsl$$inline_57;
        if(v26) {
          var v132 = jsl$$inline_57["m"];
          var v86 = v132 == "dev";
          var v134 = !v86;
          if(v134) {
            var v133 = jsl$$inline_57["m"];
            v86 = v133 == "google"
          }
          v26 = v86
        }
        JSCompiler_inline_result$$inline_56 = v26;
        var v27 = JSCompiler_inline_result$$inline_56;
        if(v27) {
          v27 = JAMScript.callIntrospect(url$$inline_55.match, url$$inline_55, [VALID_GOOGLE_URL_REGEX], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A)
        }
        JSCompiler_inline_result$$54 = v27
      }
      var v29 = !JSCompiler_inline_result$$54;
      if(v29) {
        var v28 = "Cannot load url " + url$$inline_49;
        throw v28 + ".";
      }
      var v32 = shouldLoadSync();
      if(v32) {
        var v87 = '<script src="' + url$$inline_49;
        var v30 = v87 + '">\x3c/script>';
        JAMScript.callIntrospect(document.write, document, [v30], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A)
      }else {
        var script$$inline_50 = JAMScript.callIntrospect(document.createElement, document, ["script"], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
        JAMScript.callIntrospect(script$$inline_50.setAttribute, script$$inline_50, ["src", url$$inline_49], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
        var v88 = JAMScript.callIntrospect(document.getElementsByTagName, document, ["head"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
        var v31 = v88[0];
        JAMScript.callIntrospect(v31.appendChild, v31, [script$$inline_50], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A)
      }
      JSCompiler_inline_result$$35 = void 0;
      JSCompiler_temp_const$$34;
      var JSCompiler_temp_const$$36 = JSCompiler_inline_result$$35;
      var JSCompiler_inline_result$$37;
      var v33 = JAMScript.callIntrospect(loadedFeatures.concat, loadedFeatures, [features$$inline_29], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
      loadedFeatures = normalize(v33);
      JSCompiler_inline_result$$37 = void 0
    }else {
      if(opt_callback$$inline_31) {
        JAMScript.call(opt_callback$$inline_31, null, [])
      }
    }
    return
  }
  function toKey(reqFeatures, opt_loadFeatures) {
    var v34 = normalize(reqFeatures);
    var result = JAMScript.callIntrospect(v34.join, v34, [":"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
    if(opt_loadFeatures) {
      var v135 = opt_loadFeatures.length;
      var v89 = v135 > 0;
      if(v89) {
        var v154 = result;
        var v166 = normalize(opt_loadFeatures);
        var v161 = JAMScript.callIntrospect(v166.join, v166, [":"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
        var v155 = "!" + v161;
        result = v154 + v155
      }
    }
    return result
  }
  function toSet(array$$9) {
    var result$$2 = {};
    var i$$1 = 0;
    var v90 = array$$9.length;
    var v36 = i$$1 < v90;
    for(;v36;) {
      var v35 = array$$9[i$$1];
      JAMScript.set(result$$2, v35, !0);
      i$$1 = i$$1 + 1;
      var v91 = array$$9.length;
      v36 = i$$1 < v91
    }
    return result$$2
  }
  function normalize(features$$1) {
    var result$$3 = [];
    var s$$2;
    var v37 = toSet(features$$1);
    for(s$$2 in v37) {
      JAMScript.callIntrospect(result$$3.push, result$$3, [s$$2], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A)
    }
    return result$$3.sort()
  }
  function shouldLoadSync() {
    var v92 = window["___gapisync"];
    var v93 = !0;
    var v38 = v92 === v93;
    if(v38) {
      return!0
    }
    var metas = JAMScript.callIntrospect(document.getElementsByTagName, document, ["meta"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
    var i$$3 = 0;
    var v94 = metas.length;
    var v40 = i$$3 < v94;
    for(;v40;) {
      var meta = metas[i$$3];
      var v136 = JAMScript.callIntrospect(meta.getAttribute, meta, ["name"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
      var v95 = "generator" == v136;
      var v138 = !v95;
      if(v138) {
        var v137 = JAMScript.callIntrospect(meta.getAttribute, meta, ["content"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
        v95 = "blogger" == v137
      }
      var v39 = v95;
      if(v39) {
        return!0
      }
      i$$3 = i$$3 + 1;
      var v96 = metas.length;
      v40 = i$$3 < v96
    }
    return!1
  }
  function warn(values$$4) {
    if(console) {
      var v97 = JAMScript.callIntrospect(values$$4.join, values$$4, [""], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
      JAMScript.callIntrospect(console.warn, console, [v97], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A)
    }
    return
  }
  function initDescriptors(values$$5) {
    var i$$4 = 0;
    var v98 = values$$5.length;
    var v44 = i$$4 < v98;
    for(;v44;) {
      var value$$29 = values$$5[i$$4];
      var versionParts = JAMScript.callIntrospect(value$$29.split, value$$29, ["@"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
      var JSCompiler_temp_const$$7 = descriptors;
      var JSCompiler_inline_result$$8;
      var v41 = versionParts[0];
      var featureParts$$inline_12 = JAMScript.callIntrospect(v41.split, v41, ["!"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
      var v99 = featureParts$$inline_12[0];
      var v42 = JAMScript.callIntrospect(v99.split, v99, [":"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
      var req$$inline_13 = normalize(v42);
      var v43 = featureParts$$inline_12[1];
      if(v43) {
        var v139 = featureParts$$inline_12[1];
        var v100 = JAMScript.callIntrospect(v139.split, v139, [":"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
        v43 = normalize(v100)
      }
      var loaded$$inline_14 = v43;
      JSCompiler_inline_result$$8 = toKey(req$$inline_13, loaded$$inline_14);
      JAMScript.set(JSCompiler_temp_const$$7, JSCompiler_inline_result$$8, versionParts[1]);
      i$$4 = i$$4 + 1;
      var v101 = values$$5.length;
      v44 = i$$4 < v101
    }
    return
  }
  function getLastHint(pattern$$1) {
    var r = JAMScript.callIntrospect(parentUrl.match, parentUrl, [pattern$$1], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
    var v45 = r;
    if(v45) {
      var v140 = r.length;
      var v102 = v140 - 1;
      v45 = r[v102]
    }
    return v45
  }
  function initialize(url$$6) {
    host = type$$25 = 0;
    descriptors = {};
    loadedFeatures = [];
    var v46 = window.console;
    var v104 = !v46;
    if(v104) {
      var v103 = window.opera;
      if(v103) {
        var v141 = window.opera;
        v103 = v141.postError
      }
      v46 = v103
    }
    console = v46;
    parentUrl = url$$6;
    var JSCompiler_temp$$5;
    var v105 = getLastHint(QUERY_PATTERN);
    var v142 = !v105;
    if(v142) {
      v105 = getLastHint(FRAGMENT_PATTERN)
    }
    var v48 = JSCompiler_temp$$5 = v105;
    if(v48) {
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
      var parts = JAMScript.callIntrospect(hint.split, hint, [";"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
      type$$25 = parts[0];
      var v49;
      var v107 = type$$25 === "s";
      if(v107) {
        host = "https://ssl.gstatic.com/webclient/js";
        var v143 = JAMScript.callIntrospect(parts.slice, parts, [1], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
        v49 = initDescriptors(v143)
      }else {
        var v106;
        var v145 = type$$25 === "i";
        if(v145) {
          host = parts[1];
          var v156 = JAMScript.callIntrospect(parts.slice, parts, [2], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
          v106 = initDescriptors(v156)
        }else {
          var v144;
          var v158 = type$$25 === "d";
          if(v158) {
            host = parts[1];
            repository = parts[2];
            var v162 = parts[3];
            var v167 = !v162;
            if(v167) {
              v162 = "gcjs-3p"
            }
            v144 = container = v162
          }else {
            var v157;
            var v164 = type$$25 === "r";
            if(v164) {
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
  var v108 = document.location;
  var v50 = v108.href;
  initialize(v50);
  jsloader_load = v2;
  jsloader.reinitialize_ = v3;
  return
}
function v1() {
  function f(n$$1) {
    function v0() {
      var v51 = window.___gpq;
      JAMScript.callIntrospect(v51.push, v51, [n$$1, arguments], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
      return
    }
    return v0
  }
  var v52 = f("go");
  var v53 = f("render");
  return{go:v52, render:v53}
}
function __bsld() {
  var v54 = window.gapi;
  var v109 = window.googleapisv0;
  var p = v54.plusone = v109.plusone;
  var f$$1;
  var v110 = window.___gpq;
  var v56 = f$$1 = v110.shift();
  for(;v56;) {
    var v55 = p[f$$1];
    if(v55) {
      var v111 = p[f$$1];
      var v146 = window.___gpq;
      var v112 = v146.shift();
      JAMScript.callIntrospect(v111.apply, v111, [p, v112], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A)
    }
    var v113 = window.___gpq;
    v56 = f$$1 = v113.shift()
  }
  var v159 = gadgets.config;
  var v147 = JAMScript.callIntrospect(v159.get, v159, ["gwidget"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
  var v114 = v147["parsetags"];
  var v58 = v114 !== "explicit";
  if(v58) {
    var v57 = gapi.plusone;
    JAMScript.call(v57.go, v57, [])
  }
  return
}
function gapi_load(features$$8, opt_callback$$3) {
  var v59 = JAMScript.callIntrospect(features$$8.split, features$$8, [":"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
  JAMScript.call(jsloader_load, null, [v59, opt_callback$$3]);
  return
}
var v60 = window.___jsl;
var v115 = !v60;
if(v115) {
  v60 = {}
}
window.___jsl = v60;
var v61 = window.___jsl;
var v148 = window.___jsl;
var v116 = v148.h;
var v149 = !v116;
if(v149) {
  v116 = "s;plusone:googleapis.client@21550740_8d71de52/client;googleapis.proxy@21550740_8d71de52/proxy;plusone:googleapis.client:iframes-styles-bubble@21550740_8d71de52/bubble;iframes-styles-bubble!plusone:googleapis.client@21550740_8d71de52/bubble_only;plusone-unsupported@21550740_8d71de52/unsupported"
}
v61.h = v116;
window.___gpq = [];
var v62 = window.gapi;
var v117 = !v62;
if(v117) {
  v62 = {}
}
window.gapi = v62;
var v63 = window.gapi;
var v150 = window.gapi;
var v118 = v150.plusone;
var v151 = !v118;
if(v151) {
  v118 = v1()
}
v63.plusone = v118;
var jsloader_load;
var goog;
var v64 = window["___jsl"];
var v119 = !v64;
if(v119) {
  v64 = {}
}
window["___jsl"] = v64;
var v65 = window["___jsl"];
v65["u"] = "https://apis.google.com/js/plusone.js";
var v66 = window["___jsl"];
v66["f"] = ["googleapis.client", "plusone"];
var v67 = window["jsloader"];
var v120 = !v67;
if(v120) {
  v67 = {}
}
var jsloader = v67;
var v68 = window["gapi"];
var v121 = !v68;
if(v121) {
  v68 = {}
}
var gapi = v68;
v4();
var v69 = window["__bsld"];
gapi_load("googleapis.client:plusone", v69);

