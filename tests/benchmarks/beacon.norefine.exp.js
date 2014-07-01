function v1() {
  function l$$1(b$$3) {
    b$$3 = b$$3 || _comscore;
    var c$$2 = 0;
    var d$$2 = b$$3[a$$1];
    var v3 = c$$2 < d$$2;
    for(;v3;) {
      var v2 = b$$3[c$$2];
      k$$1(v2);
      c$$2 = c$$2 + 1;
      v3 = c$$2 < d$$2
    }
    b$$3 = _comscore = [];
    return
  }
  function k$$1(b$$2) {
    function v0() {
      var b$$inline_1 = j$$2;
      var v96 = this.src;
      var v79 = JAMScript.callIntrospect(v96.indexOf, v96, ["c1=2"], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
      var v51 = v79 < 0;
      var v81 = !v51;
      if(v81) {
        var v97 = b$$inline_1.d;
        var v80 = v97.createElement;
        v51 = !v80
      }
      var v22 = v51;
      var v8 = !v22;
      if(v8) {
        var v23 = b$$inline_1.force_script_extension;
        var v53 = !v23;
        if(v53) {
          var v82 = this[h$$5];
          var v52 = v82 == 2;
          if(v52) {
            var v83 = this.height;
            var v108 = JAMScript.callIntrospect(f$$1.random, f$$1, [], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
            var v98 = v108 * 100;
            var v84 = JAMScript.callIntrospect(f$$1.round, f$$1, [v98], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
            v52 = v83 > v84
          }
          v23 = v52
        }
        var v7 = v23;
        if(v7) {
          var v4 = b$$inline_1.d;
          var c$$inline_2 = JAMScript.callIntrospect(v4.createElement, v4, [g$$1], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
          var v24 = b$$inline_1.d;
          var v5 = JAMScript.callIntrospect(v24.getElementsByTagName, v24, [g$$1], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
          var d$$inline_3 = v5[0];
          var v54 = b$$inline_1.script_extension_url;
          var v85 = !v54;
          if(v85) {
            v54 = e$$5
          }
          var v25 = v54;
          var v86 = this.src;
          var v55 = JAMScript.callIntrospect(v86.match, v86, [i$$2], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
          var v26 = v55[1];
          var v6 = [v25, "?", "c2=", v26];
          var j$$inline_4 = JAMScript.callIntrospect(v6.join, v6, [""], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
          if(d$$inline_3) {
            c$$inline_2.src = j$$inline_4;
            c$$inline_2.async = !0;
            var v56 = d$$inline_3.parentNode;
            JAMScript.callIntrospect(v56.insertBefore, v56, [c$$inline_2, d$$inline_3], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493)
          }
        }
      }
      return
    }
    var v27 = !b$$2;
    var v15 = !v27;
    if(v15) {
      var e$$6;
      var f$$2 = [];
      var g$$2;
      var h$$6 = 0;
      var i$$3;
      var j$$2;
      var k$$2 = "";
      var l$$2;
      for(l$$2 in b$$2) {
        var v9 = b$$2[l$$2];
        g$$2 = typeof v9;
        var v28 = g$$2 == "string";
        var v57 = !v28;
        if(v57) {
          v28 = g$$2 == "number"
        }
        var v10 = v28;
        if(v10) {
          var v29 = f$$2;
          var v30 = f$$2[a$$1];
          var v58 = l$$2 + "=";
          var v87 = b$$2[l$$2];
          var v59 = JAMScript.callIntrospect(c$$1, null, [v87], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
          JAMScript.set(v29, v30, v58 + v59, JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
          var v31;
          var v61 = l$$2 == "c2";
          if(v61) {
            v31 = k$$2 = b$$2[l$$2]
          }else {
            var v60 = l$$2 == "c1";
            if(v60) {
              v60 = h$$6 = 1
            }
            v31 = v60
          }
          v31
        }
      }
      var v62 = f$$2[a$$1];
      var v32 = v62 <= 0;
      var v63 = !v32;
      if(v63) {
        v32 = k$$2 == ""
      }
      var v11 = v32;
      if(v11) {
        return
      }
      var v33 = b$$2.options;
      var v64 = !v33;
      if(v64) {
        v33 = {}
      }
      j$$2 = v33;
      var v34 = j$$2.d;
      var v65 = !v34;
      if(v65) {
        v34 = document
      }
      j$$2.d = v34;
      var v66 = j$$2.url_append;
      var v35 = typeof v66;
      var v14 = v35 == "string";
      if(v14) {
        var v36 = j$$2.url_append;
        var v12 = JAMScript.callIntrospect(v36.replace, v36, [/&amp;/, "&"], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
        i$$3 = JAMScript.callIntrospect(v12.split, v12, ["&"], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
        l$$2 = 0;
        var n$$2 = i$$3[a$$1];
        var o$$1;
        var v13 = l$$2 < n$$2;
        for(;v13;) {
          var v37 = i$$3[l$$2];
          o$$1 = JAMScript.callIntrospect(v37.split, v37, ["="], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
          var v67 = o$$1[a$$1];
          var v38 = v67 == 2;
          if(v38) {
            var v68 = f$$2;
            var v69 = f$$2[a$$1];
            var v99 = o$$1[0];
            var v88 = v99 + "=";
            var v100 = o$$1[1];
            var v89 = JAMScript.callIntrospect(c$$1, null, [v100], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
            JAMScript.set(v68, v69, v88 + v89, JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811)
          }
          l$$2 = l$$2 + 1;
          v13 = l$$2 < n$$2
        }
      }
      var v70;
      var v117 = j$$2.d;
      var v109 = v117.URL;
      var v101 = JAMScript.callIntrospect(v109.charAt, v109, [4], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
      var v90 = v101 == "s";
      if(v90) {
        v70 = "s://sb"
      }else {
        v70 = "://b"
      }
      var v39 = v70;
      var v71;
      if(h$$6) {
        v71 = ""
      }else {
        v71 = "c1=2&"
      }
      var v40 = v71;
      var v72 = JAMScript.callIntrospect(f$$2.join, f$$2, ["&"], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
      var v41 = JAMScript.callIntrospect(v72.replace, v72, [/&$/, ""], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
      e$$6 = ["http", v39, d$$1, "/b?", v40, v41];
      var v42 = JAMScript.callIntrospect(e$$6.join, e$$6, [""], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
      udm_(v42, v0)
    }
    return
  }
  var a$$1 = "length";
  var b$$1 = self;
  var v16;
  var v43 = b$$1.encodeURIComponent;
  if(v43) {
    v16 = encodeURIComponent
  }else {
    v16 = escape
  }
  var c$$1 = v16;
  var d$$1 = ".scorecardresearch.com";
  var v17 = "//app" + d$$1;
  var e$$5 = v17 + "/s2e/invite";
  var f$$1 = Math;
  var g$$1 = "script";
  var h$$5 = "width";
  var i$$2 = /c2=(\d*)&/;
  var j$$1;
  l$$1();
  var v44;
  var v73 = j$$1 = b$$1.COMSCORE;
  if(v73) {
    j$$1.purge = l$$1;
    v44 = j$$1.beacon = k$$1
  }else {
    v44 = COMSCORE = {purge:l$$1, beacon:k$$1}
  }
  v44;
  return
}
function udm_(a, b) {
  var c = "comScore=";
  var d = document;
  var e$$4 = d.cookie;
  var f = "";
  var g = "indexOf";
  var h$$4 = "substring";
  var i$$1 = "length";
  var j = 2048;
  var k;
  var l = "&ns_";
  var m = "&";
  var n$$1;
  var o;
  var p;
  var q;
  var r = window;
  var v18 = r.encodeURIComponent;
  var v45 = !v18;
  if(v45) {
    v18 = escape
  }
  var s$$2 = v18;
  var v46 = JAMScript.callIntrospect(e$$4[g], e$$4, [c], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
  var v20 = v46 + 1;
  if(v20) {
    p = 0;
    o = JAMScript.callIntrospect(e$$4.split, e$$4, [";"], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
    q = o[i$$1];
    var v19 = p < q;
    for(;v19;) {
      var v47 = o[p];
      n$$1 = JAMScript.callIntrospect(v47[g], v47, [c], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
      var v48 = n$$1 + 1;
      if(v48) {
        var v74 = m;
        var v102 = o[p];
        var v110 = c[i$$1];
        var v103 = n$$1 + v110;
        var v91 = JAMScript.callIntrospect(v102[h$$4], v102, [v103], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
        var v75 = unescape(v91);
        f = v74 + v75
      }
      p = p + 1;
      v19 = p < q
    }
  }
  var v92 = a;
  var v142 = l + "_t=";
  var v145 = new Date;
  var v143 = +v145;
  var v139 = v142 + v143;
  var v137 = v139 + l;
  var v135 = v137 + "c=";
  var v138 = d.characterSet;
  var v141 = !v138;
  if(v141) {
    var v140 = d.defaultCharset;
    var v144 = !v140;
    if(v144) {
      v140 = ""
    }
    v138 = v140
  }
  var v136 = v138;
  var v133 = v135 + v136;
  var v131 = v133 + "&c8=";
  var v134 = d.title;
  var v132 = JAMScript.callIntrospect(s$$2, null, [v134], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
  var v128 = v131 + v132;
  var v124 = v128 + f;
  var v118 = v124 + "&c7=";
  var v125 = d.URL;
  var v119 = JAMScript.callIntrospect(s$$2, null, [v125], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
  var v111 = v118 + v119;
  var v104 = v111 + "&c9=";
  var v112 = d.referrer;
  var v105 = JAMScript.callIntrospect(s$$2, null, [v112], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
  var v93 = v104 + v105;
  a = v92 + v93;
  var v94 = a[i$$1];
  var v76 = v94 > j;
  if(v76) {
    var v106 = JAMScript.callIntrospect(a[g], a, [m], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
    var v95 = v106 > 0;
    if(v95) {
      var v120 = j - 8;
      var v113 = JAMScript.callIntrospect(a[h$$4], a, [0, v120], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
      k = JAMScript.callIntrospect(v113.lastIndexOf, v113, [m], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
      var v129 = JAMScript.callIntrospect(a[h$$4], a, [0, k], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
      var v126 = v129 + l;
      var v121 = v126 + "cut=";
      var v130 = k + 1;
      var v127 = JAMScript.callIntrospect(a[h$$4], a, [v130], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
      var v122 = JAMScript.callIntrospect(s$$2, null, [v127], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
      var v114 = v121 + v122;
      a = JAMScript.callIntrospect(v114[h$$4], v114, [0, j], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493)
    }
  }
  var v49;
  var v77 = d.images;
  if(v77) {
    n$$1 = new Image;
    var v115 = r.ns_p;
    var v123 = !v115;
    if(v123) {
      ns_p = n$$1
    }
    var v116 = typeof b;
    var v107 = v116 == "function";
    if(v107) {
      JAMScript.set(n$$1, "onload", JAMScript.set(n$$1, "onerror", b))
    }
    v49 = n$$1.src = a
  }else {
    v49 = JAMScript.callIntrospect(d.write, d, ["<", "p", "><", 'img src="', a, '" height="1" width="1" alt="*"', "><", "/p", ">"], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493)
  }
  v49;
  return
}
var _comscore = _comscore || [];
var v21 = {c1:"2", c2:"6770185"};
JAMScript.callIntrospect(_comscore.push, _comscore, [v21], JAMScript.introspectors.process76F930B34187247043082CAF9881927B310E8F564E301A1AA8BF2B7374C3F6541DC9BB72815A4493);
var v78 = typeof _comscore;
var v50 = v78 == "undefined";
if(v50) {
  _comscore = []
}
v1();

