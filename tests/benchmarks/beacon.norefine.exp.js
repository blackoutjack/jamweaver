function v1() {
  function l$$1(b$$3) {
    b$$3 = b$$3 || _comscore;
    var c$$2 = 0;
    var d$$2 = b$$3[a$$1];
    var v3 = c$$2 < d$$2;
    for(;v3;) {
      k$$1(b$$3[c$$2]);
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
      var v51 = JAM.call(v96.indexOf, v96, ["c1=2"], JAM.policy.p3) < 0;
      if(!v51) {
        v51 = !b$$inline_1.d.createElement
      }
      if(!v51) {
        var v23 = b$$inline_1.force_script_extension;
        if(!v23) {
          var v52 = this[h$$5] == 2;
          if(v52) {
            v52 = this.height > JAM.call(f$$1.round, f$$1, [JAM.call(f$$1.random, f$$1, [], JAM.policy.p3) * 100], JAM.policy.p3)
          }
          v23 = v52
        }
        if(v23) {
          var v4 = b$$inline_1.d;
          var c$$inline_2 = JAM.call(v4.createElement, v4, [g$$1], JAM.policy.p3);
          var v24 = b$$inline_1.d;
          var d$$inline_3 = JAM.call(v24.getElementsByTagName, v24, [g$$1], JAM.policy.p3)[0];
          var v54 = b$$inline_1.script_extension_url;
          if(!v54) {
            v54 = e$$5
          }
          var v25 = v54;
          var v86 = this.src;
          var v6 = [v25, "?", "c2=", JAM.call(v86.match, v86, [i$$2], JAM.policy.p3)[1]];
          var j$$inline_4 = JAM.call(v6.join, v6, [""], JAM.policy.p3);
          if(d$$inline_3) {
            c$$inline_2.src = j$$inline_4;
            c$$inline_2.async = !0;
            var v56 = d$$inline_3.parentNode;
            JAM.call(v56.insertBefore, v56, [c$$inline_2, d$$inline_3], JAM.policy.p3)
          }
        }
      }
      return
    }
    if(!!b$$2) {
      var e$$6;
      var f$$2 = [];
      var g$$2;
      var h$$6 = 0;
      var i$$3;
      var j$$2;
      var k$$2 = "";
      var l$$2;
      for(l$$2 in b$$2) {
        g$$2 = typeof b$$2[l$$2];
        var v28 = g$$2 == "string";
        if(!v28) {
          v28 = g$$2 == "number"
        }
        if(v28) {
          JAM.set(f$$2, f$$2[a$$1], l$$2 + "=" + JAM.call(c$$1, null, [b$$2[l$$2]], JAM.policy.p3), JAM.policy.p2);
          var v31;
          if(l$$2 == "c2") {
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
      var v32 = f$$2[a$$1] <= 0;
      if(!v32) {
        v32 = k$$2 == ""
      }
      if(v32) {
        return
      }
      var v33 = b$$2.options;
      if(!v33) {
        v33 = {}
      }
      j$$2 = v33;
      var v34 = j$$2.d;
      if(!v34) {
        v34 = document
      }
      j$$2.d = v34;
      if(typeof j$$2.url_append == "string") {
        var v36 = j$$2.url_append;
        var v12 = JAM.call(v36.replace, v36, [/&amp;/, "&"], JAM.policy.p3);
        i$$3 = JAM.call(v12.split, v12, ["&"], JAM.policy.p3);
        l$$2 = 0;
        var n$$2 = i$$3[a$$1];
        var o$$1;
        var v13 = l$$2 < n$$2;
        for(;v13;) {
          var v37 = i$$3[l$$2];
          o$$1 = JAM.call(v37.split, v37, ["="], JAM.policy.p3);
          var v38 = o$$1[a$$1] == 2;
          if(v38) {
            JAM.set(f$$2, f$$2[a$$1], o$$1[0] + "=" + JAM.call(c$$1, null, [o$$1[1]], JAM.policy.p3), JAM.policy.p2)
          }
          l$$2 = l$$2 + 1;
          v13 = l$$2 < n$$2
        }
      }
      var v70;
      var v109 = j$$2.d.URL;
      if(JAM.call(v109.charAt, v109, [4], JAM.policy.p3) == "s") {
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
      var v72 = JAM.call(f$$2.join, f$$2, ["&"], JAM.policy.p3);
      e$$6 = ["http", v39, d$$1, "/b?", v40, JAM.call(v72.replace, v72, [/&$/, ""], JAM.policy.p3)];
      udm_(JAM.call(e$$6.join, e$$6, [""], JAM.policy.p3), v0)
    }
    return
  }
  var a$$1 = "length";
  var b$$1 = self;
  var v16;
  if(b$$1.encodeURIComponent) {
    v16 = encodeURIComponent
  }else {
    v16 = escape
  }
  var c$$1 = v16;
  var d$$1 = ".scorecardresearch.com";
  var e$$5 = "//app" + d$$1 + "/s2e/invite";
  var f$$1 = Math;
  var g$$1 = "script";
  var h$$5 = "width";
  var i$$2 = /c2=(\d*)&/;
  var j$$1;
  l$$1();
  var v44;
  if(j$$1 = b$$1.COMSCORE) {
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
  if(!v18) {
    v18 = escape
  }
  var s$$2 = v18;
  if(JAM.call(e$$4[g], e$$4, [c], JAM.policy.p3) + 1) {
    p = 0;
    o = JAM.call(e$$4.split, e$$4, [";"], JAM.policy.p3);
    q = o[i$$1];
    var v19 = p < q;
    for(;v19;) {
      var v47 = o[p];
      n$$1 = JAM.call(v47[g], v47, [c], JAM.policy.p3);
      var v48 = n$$1 + 1;
      if(v48) {
        var v74 = m;
        var v102 = o[p];
        f = v74 + unescape(JAM.call(v102[h$$4], v102, [n$$1 + c[i$$1]], JAM.policy.p3))
      }
      p = p + 1;
      v19 = p < q
    }
  }
  var v92 = a;
  var v135 = l + "_t=" + +new Date + l + "c=";
  var v138 = d.characterSet;
  if(!v138) {
    var v140 = d.defaultCharset;
    if(!v140) {
      v140 = ""
    }
    v138 = v140
  }
  a = v92 + (v135 + v138 + "&c8=" + JAM.call(s$$2, null, [d.title], JAM.policy.p3) + f + "&c7=" + JAM.call(s$$2, null, [d.URL], JAM.policy.p3) + "&c9=" + JAM.call(s$$2, null, [d.referrer], JAM.policy.p3));
  var v76 = a[i$$1] > j;
  if(v76) {
    var v95 = JAM.call(a[g], a, [m], JAM.policy.p3) > 0;
    if(v95) {
      var v113 = JAM.call(a[h$$4], a, [0, j - 8], JAM.policy.p3);
      k = JAM.call(v113.lastIndexOf, v113, [m], JAM.policy.p3);
      var v114 = JAM.call(a[h$$4], a, [0, k], JAM.policy.p3) + l + "cut=" + JAM.call(s$$2, null, [JAM.call(a[h$$4], a, [k + 1], JAM.policy.p3)], JAM.policy.p3);
      a = JAM.call(v114[h$$4], v114, [0, j], JAM.policy.p3)
    }
  }
  var v49;
  if(d.images) {
    n$$1 = new Image;
    var v115 = r.ns_p;
    if(!v115) {
      ns_p = n$$1
    }
    var v107 = typeof b == "function";
    if(v107) {
      JAM.set(n$$1, "onload", JAM.set(n$$1, "onerror", b))
    }
    v49 = n$$1.src = a
  }else {
    v49 = JAM.call(d.write, d, ["<", "p", "><", 'img src="', a, '" height="1" width="1" alt="*"', "><", "/p", ">"], JAM.policy.p3)
  }
  v49;
  return
}
var _comscore = _comscore || [];
JAM.call(_comscore.push, _comscore, [{c1:"2", c2:"6770185"}], JAM.policy.p3);
var v50 = typeof _comscore == "undefined";
if(v50) {
  _comscore = []
}
v1()
