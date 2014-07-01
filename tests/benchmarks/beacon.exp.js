function v0(z$$4) {
  var A = window.escape;
  var v30 = A(z$$4);
  return v30
}
function v1(e$$12, z$$5) {
  if(z$$5) {
    e$$12 = e$$12.substr(0, z$$5)
  }
  return e$$12
}
function v2() {
  var v31 = u.doc;
  var v32 = v31.location;
  var v33 = v32.protocol;
  var v34 = v33 == "https:";
  return v34
}
function v3(e$$13) {
  var v35 = typeof e$$13;
  var v36 = v35 == "undefined";
  return v36
}
function v4(e$$14, z$$6) {
  var v37 = e$$14 == null;
  if(v37) {
    return""
  }
  var v38 = t(e$$14);
  var v39 = p(v38, z$$6);
  return v39
}
function v5(e$$15, z$$7, B, A$$1) {
  var v14;
  var v21 = z$$7 != null;
  if(v21) {
    var v40 = z$$7.toString();
    var v41 = v40.length;
    v21 = v41 > 0
  }
  if(v21) {
    var v28;
    if(A$$1) {
      v28 = p(z$$7, B)
    }else {
      v28 = o(z$$7, B)
    }
    var v42 = [e$$15, "=", v28, "&"];
    v14 = v42.join("")
  }else {
    v14 = ""
  }
  return v14
}
function v6(e$$16) {
  var v23 = e$$16;
  if(!v23) {
    v23 = n
  }
  var v43 = Math.random();
  var v44 = v43 * v23;
  var v45 = Math.round(v44);
  return v45
}
function v9() {
  function v8() {
    function v7(G, F, E) {
      var v15;
      var v22 = G;
      if(v22) {
        var v52 = G[F];
        v22 = v52
      }
      if(v22) {
        var v53 = G[F];
        v15 = v53
      }else {
        v15 = "-"
      }
      F = v15;
      var v16;
      if(E) {
        v16 = D(F, E)
      }else {
        v16 = F
      }
      return v16
    }
    var D = v7;
    var v54 = D(u.win, "navigator", "userAgent");
    var v55 = D(u.win, "screen", "width");
    var v56 = D(u.win, "screen", "height");
    var v57 = D(u.doc, "cookie");
    var v58 = D(u.doc, "referrer");
    var v59 = D(u.loc, "href");
    var v60 = D(u.win, "history", "length");
    var v61 = [v54, v55, v56, v57, v58, v59, v60];
    var A$$2 = v61.join("-");
    var C = 2166136261;
    var B$$1 = 0;
    var z$$8 = A$$2.length;
    var v13 = B$$1 < z$$8;
    for(;v13;) {
      C ^= A$$2.charCodeAt(B$$1);
      C *= 16777619;
      B$$1++;
      v13 = B$$1 < z$$8
    }
    var v62 = v();
    var v63 = C & n;
    var v64 = v62 ^ v63;
    var v65 = v();
    var v66 = [v64, v65, f];
    var v67 = v66.join("-");
    return v67
  }
  var v46 = +j.c1 != 2;
  if(v46) {
    return
  }
  var v47 = u.nav;
  var v48 = /msie\s[^0-6]|firefox|chrome/i.test(v47.userAgent);
  if(v48) {
    return
  }
  var e$$17 = k(w);
  var v49 = g.fpc_optout;
  if(v49) {
    if(e$$17) {
      var v50 = u.doc;
      q(w, e$$17, v50.domain, -1)
    }
    return"optout"
  }
  var v51 = u.nav;
  if(!v51.cookieEnabled) {
    return"disabled"
  }
  if(!e$$17) {
    e$$17 = v8();
    var v68 = u.doc;
    q(w, e$$17, v68.domain);
    e$$17 = k(w)
  }
  return e$$17
}
function v10(e$$18) {
  var v69 = u.doc;
  var v24 = d(v69.cookie);
  if(!v24) {
    var v70 = u.doc;
    var v71 = v70.cookie;
    v24 = d(v71.match)
  }
  if(v24) {
    return
  }
  var v72 = u.doc;
  var v73 = v72.cookie;
  var v74 = "(?:^|;)\\s*" + e$$18;
  var v75 = v74 + "=([^;]*)";
  var z$$9 = v73.match(v75);
  var v17;
  if(z$$9) {
    var v76 = z$$9[1];
    v17 = v76
  }else {
    v17 = null
  }
  return v17
}
function v11(e$$19, A$$3, z$$10, B$$2) {
  if(!A$$3) {
    return
  }
  var v18;
  var v77 = B$$2 != null;
  if(v77) {
    v18 = B$$2
  }else {
    v18 = 730
  }
  B$$2 = v18;
  B$$2 *= 864E5;
  checkState('document.cookie = "got it!"', 'set("#document","cookie")', 1, -1);
  document.cookie = "got it!"
}
function v12(e$$20) {
  var v78 = +j.c1 != 2;
  if(v78) {
    return
  }
  if(!e$$20) {
    return
  }
  var v25 = g.force_script_extension;
  if(!v25) {
    var v79 = e$$20.width;
    var v29 = v79 == 2;
    if(v29) {
      var v80 = e$$20.height;
      var v81 = v(100);
      v29 = v80 > v81
    }
    v25 = v29
  }
  if(v25) {
    var v82 = u.doc;
    var A$$4 = v82.createElement("script");
    var v83 = document.getElementsByTagName("script");
    var z$$11 = v83[0];
    var v84 = l.script_extension_url;
    var v85 = a("c2", j.c2);
    var B$$3 = [v84, "?", v85];
    var v86 = B$$3.join("");
    B$$3 = v86.replace(/&$/, "");
    if(z$$11) {
      A$$4.src = B$$3;
      A$$4.async = true;
      var v87 = z$$11.parentNode;
      v87.insertBefore(A$$4, z$$11)
    }else {
      var v88 = u.doc;
      var v89 = "%3Cscript src='" + B$$3;
      var v90 = v89 + "'%3E%3C/script%3E";
      var v91 = unescape(v90);
      v88.write(v91)
    }
  }
}
checkState('var c = document.getElementById("c1")', 'called("#DocumentProt#getElementById")', 0, 1);
var c = document.getElementById("c1");
var h = 2.2;
var g = {};
var u = {doc:document, nav:navigator, win:window};
var b = 512;
var m = 64;
var w = "scorecardresearch";
var n = 2147483647;
var t = v0;
var p = v1;
var s = v2;
var d = v3;
var o = v4;
var a = v5;
var v = v6;
var y = v9;
var k = v10;
var q = v11;
c = v12;
var v19;
var v92 = s();
if(v92) {
  v19 = "https://sb"
}else {
  v19 = "http://b"
}
var v20;
var v93 = s();
if(v93) {
  v20 = "https"
}else {
  v20 = "http"
}
var v94 = v19 + ".scorecardresearch.com/";
var v95 = v20 + "://app.scorecardresearch.com/s2e/invite";
var l = {beacon_url:v94, script_extension_url:v95};
var v96 = g.dest;
if(v96) {
  var v97 = g.dest;
  var v26 = v97.beacon_url;
  if(!v26) {
    var v98 = l.beacon_url;
    v26 = v98
  }
  l.beacon_url = v26;
  var v99 = g.dest;
  var v27 = v99.script_extension_url;
  if(!v27) {
    var v100 = l.script_extension_url;
    v27 = v100
  }
  l.script_extension_url = v27
}
q(null, true, null, null);
