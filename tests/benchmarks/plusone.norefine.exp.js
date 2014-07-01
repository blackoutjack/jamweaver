function v4() {
  function v3(url$$7) {
    initialize(url$$7);
    return
  }
  function v2(features$$7, opt_callback$$2) {
    var urlToLoad;
    var v69 = !features$$7;
    var v122 = !v69;
    if(v122) {
      var v121 = features$$7.length;
      v69 = v121 == 0
    }
    var v21 = v69;
    if(v21) {
      var v5 = ["Cannot load empty features."];
      warn(v5)
    }else {
      var JSCompiler_inline_result$$6;
      var features$$inline_18 = features$$7;
      var set$$inline_19 = toSet(loadedFeatures);
      var isSubset$$inline_20 = !0;
      var i$$inline_21 = 0;
      var v70 = isSubset$$inline_20;
      if(v70) {
        var v123 = features$$inline_18.length;
        v70 = i$$inline_21 < v123
      }
      var v7 = v70;
      for(;v7;) {
        var v6 = isSubset$$inline_20;
        if(v6) {
          var v71 = features$$inline_18[i$$inline_21];
          v6 = set$$inline_19[v71]
        }
        isSubset$$inline_20 = v6;
        i$$inline_21 = i$$inline_21 + 1;
        var v72 = isSubset$$inline_20;
        if(v72) {
          var v124 = features$$inline_18.length;
          v72 = i$$inline_21 < v124
        }
        v7 = v72
      }
      JSCompiler_inline_result$$6 = isSubset$$inline_20;
      if(JSCompiler_inline_result$$6) {
        var v73 = JAMScript.callIntrospect(features$$7.join, features$$7, [","], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
        var v8 = ["Cannot load loaded features [", v73, "]."];
        warn(v8)
      }else {
        var v74 = type$$25 === "s";
        var v125 = !v74;
        if(v125) {
          v74 = type$$25 === "i"
        }
        var v20 = v74;
        if(v20) {
          JSCompiler_inline_label_processUrlFromMap_25: {
            var features$$inline_23 = features$$7;
            var v9 = toKey(features$$inline_23, loadedFeatures);
            var version$$inline_24 = descriptors[v9];
            if(version$$inline_24) {
              var v75 = host + "/";
              var v10 = v75 + version$$inline_24;
              urlToLoad = v10 + ".js";
              break JSCompiler_inline_label_processUrlFromMap_25
            }else {
              var v76 = JAMScript.callIntrospect(features$$inline_23.join, features$$inline_23, [","], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
              var v77 = JAMScript.callIntrospect(loadedFeatures.join, loadedFeatures, [","], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
              var v11 = ["Cannot find features [", v76, "], except [", v77, "]."];
              warn(v11)
            }
            urlToLoad = void 0
          }
        }else {
          var v19 = type$$25 === "d";
          if(v19) {
            var v12 = host + "/";
            var v13 = toKey(features$$7, loadedFeatures);
            var url$$inline_27 = v12 + v13;
            var v126 = ".js?container=" + container;
            var v78 = v126 + "&c=2";
            url$$inline_27 = url$$inline_27 + v78;
            if(repository) {
              var v127 = "&r=" + repository;
              url$$inline_27 = url$$inline_27 + v127
            }
            urlToLoad = url$$inline_27
          }else {
            var v79 = type$$25 === "r";
            var v128 = !v79;
            if(v128) {
              v79 = type$$25 === "f"
            }
            var v18 = v79;
            if(v18) {
              var v80 = host + "/";
              var v14 = v80 + repository;
              var JSCompiler_temp_const$$39 = v14 + "/";
              var JSCompiler_inline_result$$40;
              var opt_loadFeatures$$inline_42 = loadedFeatures;
              var v15 = normalize(features$$7);
              var result$$inline_43 = JAMScript.callIntrospect(v15.join, v15, ["__"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
              if(opt_loadFeatures$$inline_42) {
                var v129 = opt_loadFeatures$$inline_42.length;
                var v81 = v129 > 0;
                if(v81) {
                  var v165 = normalize(opt_loadFeatures$$inline_42);
                  var v160 = JAMScript.callIntrospect(v165.join, v165, ["__"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
                  var v154 = "--" + v160;
                  result$$inline_43 = result$$inline_43 + v154
                }
              }
              JSCompiler_inline_result$$40 = result$$inline_43;
              var v16 = JSCompiler_temp_const$$39 + JSCompiler_inline_result$$40;
              urlToLoad = v16 + ".js"
            }else {
              var v82 = JAMScript.callIntrospect(features$$7.join, features$$7, [","], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
              var v17 = ["Cannot respond for features [", v82, "]."];
              warn(v17)
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
      var v83 = jsl$$inline_47;
      if(v83) {
        v83 = opt_callback$$inline_31 && 1
      }
      var v23 = v83;
      if(v23) {
        var v22 = jsl$$inline_47["c"];
        if(v22) {
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
        var v84 = type$$25 === "s";
        var v130 = !v84;
        if(v130) {
          v84 = type$$25 === "r"
        }
        var v24 = v84;
        if(v24) {
          JSCompiler_inline_result$$54 = JAMScript.callIntrospect(url$$inline_55.match, url$$inline_55, [VALID_SCS_URL_REGEX], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
          break JSCompiler_inline_label_canLoadUrl_58
        }
        var JSCompiler_inline_result$$inline_56;
        var jsl$$inline_57 = window["___jsl"];
        var v25 = jsl$$inline_57;
        if(v25) {
          var v131 = jsl$$inline_57["m"];
          var v85 = v131 == "dev";
          var v133 = !v85;
          if(v133) {
            var v132 = jsl$$inline_57["m"];
            v85 = v132 == "google"
          }
          v25 = v85
        }
        JSCompiler_inline_result$$inline_56 = v25;
        var v26 = JSCompiler_inline_result$$inline_56;
        if(v26) {
          v26 = JAMScript.callIntrospect(url$$inline_55.match, url$$inline_55, [VALID_GOOGLE_URL_REGEX], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A)
        }
        JSCompiler_inline_result$$54 = v26
      }
      var v28 = !JSCompiler_inline_result$$54;
      if(v28) {
        var v27 = "Cannot load url " + url$$inline_49;
        throw v27 + ".";
      }
      var v31 = shouldLoadSync();
      if(v31) {
        var v86 = '<script src="' + url$$inline_49;
        var v29 = v86 + '">\x3c/script>';
        JAMScript.callIntrospect(document.write, document, [v29], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A)
      }else {
        var script$$inline_50 = JAMScript.callIntrospect(document.createElement, document, ["script"], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
        JAMScript.callIntrospect(script$$inline_50.setAttribute, script$$inline_50, ["src", url$$inline_49], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
        var v87 = JAMScript.callIntrospect(document.getElementsByTagName, document, ["head"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
        var v30 = v87[0];
        JAMScript.callIntrospect(v30.appendChild, v30, [script$$inline_50], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A)
      }
      JSCompiler_inline_result$$35 = void 0;
      JSCompiler_temp_const$$34;
      var JSCompiler_temp_const$$36 = JSCompiler_inline_result$$35;
      var JSCompiler_inline_result$$37;
      var v32 = JAMScript.callIntrospect(loadedFeatures.concat, loadedFeatures, [features$$inline_29], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
      loadedFeatures = normalize(v32);
      JSCompiler_inline_result$$37 = void 0
    }else {
      if(opt_callback$$inline_31) {
        JAMScript.call(opt_callback$$inline_31, null, [])
      }
    }
    return
  }
  function toKey(reqFeatures, opt_loadFeatures) {
    var v33 = normalize(reqFeatures);
    var result = JAMScript.callIntrospect(v33.join, v33, [":"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
    if(opt_loadFeatures) {
      var v134 = opt_loadFeatures.length;
      var v88 = v134 > 0;
      if(v88) {
        var v166 = normalize(opt_loadFeatures);
        var v161 = JAMScript.callIntrospect(v166.join, v166, [":"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
        var v155 = "!" + v161;
        result = result + v155
      }
    }
    return result
  }
  function toSet(array$$9) {
    var result$$2 = {};
    var i$$1 = 0;
    var v89 = array$$9.length;
    var v35 = i$$1 < v89;
    for(;v35;) {
      var v34 = array$$9[i$$1];
      JAMScript.set(result$$2, v34, !0);
      i$$1 = i$$1 + 1;
      var v90 = array$$9.length;
      v35 = i$$1 < v90
    }
    return result$$2
  }
  function normalize(features$$1) {
    var result$$3 = [];
    var s$$2;
    var v36 = toSet(features$$1);
    for(s$$2 in v36) {
      JAMScript.callIntrospect(result$$3.push, result$$3, [s$$2], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A)
    }
    return result$$3.sort()
  }
  function shouldLoadSync() {
    var v91 = window["___gapisync"];
    var v92 = !0;
    var v37 = v91 === v92;
    if(v37) {
      return!0
    }
    var metas = JAMScript.callIntrospect(document.getElementsByTagName, document, ["meta"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
    var i$$3 = 0;
    var v93 = metas.length;
    var v39 = i$$3 < v93;
    for(;v39;) {
      var meta = metas[i$$3];
      var v135 = JAMScript.callIntrospect(meta.getAttribute, meta, ["name"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
      var v94 = "generator" == v135;
      var v137 = !v94;
      if(v137) {
        var v136 = JAMScript.callIntrospect(meta.getAttribute, meta, ["content"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
        v94 = "blogger" == v136
      }
      var v38 = v94;
      if(v38) {
        return!0
      }
      i$$3 = i$$3 + 1;
      var v95 = metas.length;
      v39 = i$$3 < v95
    }
    return!1
  }
  function warn(values$$4) {
    if(console) {
      var v96 = JAMScript.callIntrospect(values$$4.join, values$$4, [""], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
      JAMScript.callIntrospect(console.warn, console, [v96], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A)
    }
    return
  }
  function initDescriptors(values$$5) {
    var i$$4 = 0;
    var v97 = values$$5.length;
    var v43 = i$$4 < v97;
    for(;v43;) {
      var value$$29 = values$$5[i$$4];
      var versionParts = JAMScript.callIntrospect(value$$29.split, value$$29, ["@"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
      var JSCompiler_temp_const$$7 = descriptors;
      var JSCompiler_inline_result$$8;
      var v40 = versionParts[0];
      var featureParts$$inline_12 = JAMScript.callIntrospect(v40.split, v40, ["!"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
      var v98 = featureParts$$inline_12[0];
      var v41 = JAMScript.callIntrospect(v98.split, v98, [":"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
      var req$$inline_13 = normalize(v41);
      var v42 = featureParts$$inline_12[1];
      if(v42) {
        var v138 = featureParts$$inline_12[1];
        var v99 = JAMScript.callIntrospect(v138.split, v138, [":"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
        v42 = normalize(v99)
      }
      var loaded$$inline_14 = v42;
      JSCompiler_inline_result$$8 = toKey(req$$inline_13, loaded$$inline_14);
      JAMScript.set(JSCompiler_temp_const$$7, JSCompiler_inline_result$$8, versionParts[1]);
      i$$4 = i$$4 + 1;
      var v100 = values$$5.length;
      v43 = i$$4 < v100
    }
    return
  }
  function getLastHint(pattern$$1) {
    var r = JAMScript.callIntrospect(parentUrl.match, parentUrl, [pattern$$1], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
    var v44 = r;
    if(v44) {
      var v139 = r.length;
      var v101 = v139 - 1;
      v44 = r[v101]
    }
    return v44
  }
  function initialize(url$$6) {
    host = type$$25 = 0;
    descriptors = {};
    loadedFeatures = [];
    var v45 = window.console;
    var v103 = !v45;
    if(v103) {
      var v102 = window.opera;
      if(v102) {
        var v140 = window.opera;
        v102 = v140.postError
      }
      v45 = v102
    }
    console = v45;
    parentUrl = url$$6;
    var JSCompiler_temp$$5;
    var v104 = getLastHint(QUERY_PATTERN);
    var v141 = !v104;
    if(v141) {
      v104 = getLastHint(FRAGMENT_PATTERN)
    }
    var v47 = JSCompiler_temp$$5 = v104;
    if(v47) {
    }else {
      var jsl$$inline_16 = window["___jsl"];
      var v46 = jsl$$inline_16;
      if(v46) {
        v46 = jsl$$inline_16["h"]
      }
      JSCompiler_temp$$5 = v46
    }
    var hint = JSCompiler_temp$$5;
    if(hint) {
      var parts = JAMScript.callIntrospect(hint.split, hint, [";"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
      type$$25 = parts[0];
      var v48;
      var v106 = type$$25 === "s";
      if(v106) {
        host = "https://ssl.gstatic.com/webclient/js";
        var v142 = JAMScript.callIntrospect(parts.slice, parts, [1], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
        v48 = initDescriptors(v142)
      }else {
        var v105;
        var v144 = type$$25 === "i";
        if(v144) {
          host = parts[1];
          var v156 = JAMScript.callIntrospect(parts.slice, parts, [2], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
          v105 = initDescriptors(v156)
        }else {
          var v143;
          var v158 = type$$25 === "d";
          if(v158) {
            host = parts[1];
            repository = parts[2];
            var v162 = parts[3];
            var v167 = !v162;
            if(v167) {
              v162 = "gcjs-3p"
            }
            v143 = container = v162
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
            v143 = v157
          }
          v105 = v143
        }
        v48 = v105
      }
      v48
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
  var v107 = document.location;
  var v49 = v107.href;
  initialize(v49);
  jsloader_load = v2;
  jsloader.reinitialize_ = v3;
  return
}
function v1() {
  function f(n$$1) {
    function v0() {
      var v50 = window.___gpq;
      JAMScript.callIntrospect(v50.push, v50, [n$$1, arguments], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
      return
    }
    return v0
  }
  var v51 = f("go");
  var v52 = f("render");
  return{go:v51, render:v52}
}
function __bsld() {
  var v53 = window.gapi;
  var v108 = window.googleapisv0;
  var p = v53.plusone = v108.plusone;
  var f$$1;
  var v109 = window.___gpq;
  var v55 = f$$1 = v109.shift();
  for(;v55;) {
    var v54 = p[f$$1];
    if(v54) {
      var v110 = p[f$$1];
      var v145 = window.___gpq;
      var v111 = v145.shift();
      JAMScript.callIntrospect(v110.apply, v110, [p, v111], JAMScript.introspectors.process0FFB1518291BEE7C5744977B581D549C9B6BD5A04CDAF44D89391C6FE13FBBD6677C6DE0505D675A)
    }
    var v112 = window.___gpq;
    v55 = f$$1 = v112.shift()
  }
  var v159 = gadgets.config;
  var v146 = JAMScript.callIntrospect(v159.get, v159, ["gwidget"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
  var v113 = v146["parsetags"];
  var v57 = v113 !== "explicit";
  if(v57) {
    var v56 = gapi.plusone;
    JAMScript.call(v56.go, v56, [])
  }
  return
}
function gapi_load(features$$8, opt_callback$$3) {
  var v58 = JAMScript.callIntrospect(features$$8.split, features$$8, [":"], JAMScript.introspectors.process4CDAF44D89391C6FE13FBBD6677C6DE0505D675A);
  JAMScript.call(jsloader_load, null, [v58, opt_callback$$3]);
  return
}
var v59 = window;
var v114 = window.___jsl;
var v147 = !v114;
if(v147) {
  v114 = {}
}
v59.___jsl = v114;
var v60 = window.___jsl;
var v148 = window.___jsl;
var v115 = v148.h;
var v149 = !v115;
if(v149) {
  v115 = "s;plusone:googleapis.client@21550740_8d71de52/client;googleapis.proxy@21550740_8d71de52/proxy;plusone:googleapis.client:iframes-styles-bubble@21550740_8d71de52/bubble;iframes-styles-bubble!plusone:googleapis.client@21550740_8d71de52/bubble_only;plusone-unsupported@21550740_8d71de52/unsupported"
}
v60.h = v115;
window.___gpq = [];
var v61 = window;
var v116 = window.gapi;
var v150 = !v116;
if(v150) {
  v116 = {}
}
v61.gapi = v116;
var v62 = window.gapi;
var v151 = window.gapi;
var v117 = v151.plusone;
var v152 = !v117;
if(v152) {
  v117 = v1()
}
v62.plusone = v117;
var jsloader_load;
var goog;
var v63 = window;
var v118 = window["___jsl"];
var v153 = !v118;
if(v153) {
  v118 = {}
}
v63["___jsl"] = v118;
var v64 = window["___jsl"];
v64["u"] = "https://apis.google.com/js/plusone.js";
var v65 = window["___jsl"];
v65["f"] = ["googleapis.client", "plusone"];
var v66 = window["jsloader"];
var v119 = !v66;
if(v119) {
  v66 = {}
}
var jsloader = v66;
var v67 = window["gapi"];
var v120 = !v67;
if(v120) {
  v67 = {}
}
var gapi = v67;
v4();
var v68 = window["__bsld"];
gapi_load("googleapis.client:plusone", v68);

