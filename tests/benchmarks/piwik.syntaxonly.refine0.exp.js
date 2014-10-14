// piwik.js
function v70() {
  function v69() {
    return A;
  }
  function v68(i$$24, L$$17) {
    return JAM.new(t$$2, [i$$24, L$$17], JAM.policy.p4);
  }
  function v67(i$$23, L$$16) {
    JAM.set(a$$1, i$$23, L$$16, JAM.policy.p2);
    return;
  }
  function p$$3(i$$2) {
    return "undefined" !== typeof i$$2;
  }
  function h$$5(i$$5) {
    var v72 = typeof i$$5 === "string";
    if (!v72) {
      v72 = i$$5 instanceof String;
    }
    return v72;
  }
  function G() {
    var L;
    var N;
    var M;
    L = 0;
    var v75 = L < arguments.length;
    for (;v75;) {
      M = arguments[L];
      N = JAM.call(M.shift, M, [], JAM.policy.p4);
      if (JAM.call(h$$5, null, [N], JAM.policy.p4)) {
        var v73 = A[N];
        JAM.call(v73.apply, v73, [A, M], JAM.policy.p4);
      } else {
        JAM.call(N.apply, N, [A, M], JAM.policy.p4);
      }
      L = L + 1;
      v75 = L < arguments.length;
    }
    return;
  }
  function J(N$$1, M$$1, L$$1, i$$6) {
    if (N$$1.addEventListener) {
      JAM.call(N$$1.addEventListener, N$$1, [M$$1, L$$1, i$$6], JAM.policy.p4);
      return true;
    }
    if (N$$1.attachEvent) {
      return JAM.call(N$$1.attachEvent, N$$1, ["on" + M$$1, L$$1], JAM.policy.p4);
    }
    JAM.set(N$$1, "on" + M$$1, L$$1, JAM.policy.p2);
    return;
  }
  function E(M$$2, P) {
    var L$$2 = "";
    var O;
    var N$$2;
    for (O in a$$1) {
      var v399 = Object.prototype.hasOwnProperty;
      if (JAM.call(v399.call, v399, [a$$1, O], JAM.policy.p4)) {
        N$$2 = a$$1[O][M$$2];
        if (typeof N$$2 === "function") {
          L$$2 = L$$2 + JAM.call(N$$2, null, [P], JAM.policy.p4);
        }
      }
    }
    return L$$2;
  }
  function H() {
    var i$$7;
    JAM.call(E, null, ["unload"], JAM.policy.p4);
    if (e$$5) {
      var v83 = JAM.call(i$$7.getTimeAlias, i$$7, [], JAM.policy.p4) < e$$5;
      do {
        i$$7 = JAM.new(Date, [], JAM.policy.p4);
        v83 = JAM.call(i$$7.getTimeAlias, i$$7, [], JAM.policy.p4) < e$$5;
      } while (v83);
    }
    return;
  }
  function F() {
    var L$$3;
    if (!k$$1) {
      k$$1 = true;
      JAM.call(E, null, ["load"], JAM.policy.p4);
      L$$3 = 0;
      var v84 = L$$3 < u.length;
      for (;v84;) {
        JAM.call(u[L$$3], u, [], JAM.policy.p4);
        L$$3 = L$$3 + 1;
        v84 = L$$3 < u.length;
      }
    }
    return true;
  }
  function j$$1() {
    function v6() {
      var v407 = k$$1;
      if (!v407) {
        v407 = JAM.call(/loaded|complete/.test, /loaded|complete/, [n$$6.readyState], JAM.policy.p4);
      }
      if (v407) {
        JAM.call(clearInterval, null, [L$$4], JAM.policy.p4);
        JAM.call(F, null, [], JAM.policy.p4);
      }
      return;
    }
    function i$$10() {
      if (!k$$1) {
        try {
          var v87 = n$$6.documentElement;
          JAM.call(v87.doScroll, v87, ["left"], JAM.policy.p4);
        } catch (M$$3) {
          JAM.call(setTimeout, null, [i$$10, 0], JAM.policy.p4);
          return;
        }
        JAM.call(F, null, [], JAM.policy.p4);
      }
      return;
    }
    function i$$9() {
      if (n$$6.readyState === "complete") {
        JAM.call(n$$6.detachEvent, n$$6, ["onreadystatechange", i$$9], JAM.policy.p4);
        JAM.call(F, null, [], JAM.policy.p4);
      }
      return;
    }
    function i$$8() {
      JAM.call(n$$6.removeEventListener, n$$6, ["DOMContentLoaded", i$$8, false], JAM.policy.p4);
      JAM.call(F, null, [], JAM.policy.p4);
      return;
    }
    var L$$4;
    if (n$$6.addEventListener) {
      JAM.call(J, null, [n$$6, "DOMContentLoaded", i$$8], JAM.policy.p4);
    } else {
      if (n$$6.attachEvent) {
        JAM.call(n$$6.attachEvent, n$$6, ["onreadystatechange", i$$9], JAM.policy.p4);
        var v409 = n$$6.documentElement.doScroll;
        if (v409) {
          v409 = w$$5 === w$$5.top;
        }
        if (v409) {
          JAM.call(i$$10, null, [], JAM.policy.p4);
        }
      }
    }
    var v410 = JAM.new(RegExp, ["WebKit"], JAM.policy.p4);
    if (JAM.call(v410.test, v410, [c$$1.userAgent], JAM.policy.p4)) {
      L$$4 = JAM.call(setInterval, null, [v6, 10], JAM.policy.p4);
    }
    JAM.call(J, null, [w$$5, "load", F, false], JAM.policy.p4);
    return;
  }
  function q$$2() {
    var i$$11 = "";
    try {
      i$$11 = w$$5.top.document.referrer;
    } catch (M$$4) {
      if (w$$5.parent) {
        try {
          i$$11 = w$$5.parent.document.referrer;
        } catch (L$$5) {
          i$$11 = "";
        }
      }
    }
    if (i$$11 === "") {
      i$$11 = n$$6.referrer;
    }
    return i$$11;
  }
  function f$$6(i$$12) {
    var M$$5 = JAM.new(RegExp, ["^([a-z]+):"], JAM.policy.p4);
    var L$$6 = JAM.call(M$$5.exec, M$$5, [i$$12], JAM.policy.p4);
    var v98;
    if (L$$6) {
      v98 = L$$6[1];
    } else {
      v98 = null;
    }
    return v98;
  }
  function b$$1(i$$13) {
    var M$$6 = JAM.new(RegExp, ["^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"], JAM.policy.p4);
    var L$$7 = JAM.call(M$$6.exec, M$$6, [i$$13], JAM.policy.p4);
    var v99;
    if (L$$7) {
      v99 = L$$7[1];
    } else {
      v99 = i$$13;
    }
    return v99;
  }
  function x$$48(M$$7, L$$8) {
    var P$$1 = JAM.new(RegExp, ["^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)"], JAM.policy.p4);
    var O$$1 = JAM.call(P$$1.exec, P$$1, [M$$7], JAM.policy.p4);
    var N$$3 = JAM.new(RegExp, ["(?:^|&)" + L$$8 + "=([^&]*)"], JAM.policy.p4);
    var v101;
    if (O$$1) {
      v101 = JAM.call(N$$3.exec, N$$3, [O$$1[1]], JAM.policy.p4);
    } else {
      v101 = 0;
    }
    var i$$14 = v101;
    var v102;
    if (i$$14) {
      v102 = JAM.call(v, null, [i$$14[1]], JAM.policy.p4);
    } else {
      v102 = "";
    }
    return v102;
  }
  function I(ab) {
    function ac(ai) {
      var ah = "";
      var ag;
      var W$$1;
      ag = 7;
      var v104 = ag >= 0;
      for (;v104;) {
        W$$1 = ai >>> ag * 4 & 15;
        ah = ah + JAM.call(W$$1.toString, W$$1, [16], JAM.policy.p4);
        ag = ag - 1;
        v104 = ag >= 0;
      }
      return ah;
    }
    function N$$4(W, i$$16) {
      return W << i$$16 | W >>> 32 - i$$16;
    }
    var Q;
    var ae;
    var ad;
    var M$$8 = [];
    var U = 1732584193;
    var S = 4023233417;
    var R = 2562383102;
    var P$$2 = 271733878;
    var O$$2 = 3285377520;
    var aa;
    var Z;
    var Y;
    var X;
    var V;
    var af;
    var L$$9;
    var T = [];
    ab = JAM.call(d$$1, null, [JAM.call(g$$1, null, [ab], JAM.policy.p4)], JAM.policy.p4);
    L$$9 = ab.length;
    ae = 0;
    var v110 = ae < L$$9 - 3;
    for (;v110;) {
      ad = JAM.call(ab.charCodeAt, ab, [ae], JAM.policy.p4) << 24 | JAM.call(ab.charCodeAt, ab, [ae + 1], JAM.policy.p4) << 16 | JAM.call(ab.charCodeAt, ab, [ae + 2], JAM.policy.p4) << 8 | JAM.call(ab.charCodeAt, ab, [ae + 3], JAM.policy.p4);
      JAM.call(T.push, T, [ad], JAM.policy.p4);
      ae = ae + 4;
      v110 = ae < L$$9 - 3;
    }
    var v114 = L$$9 & 3;
    introspect(JAM.policy.p4) {
      switch(v114) {
        case 0:
          ae = 2147483648;
          break;
        case 1:
          var v679 = L$$9 - 1;
          var v426 = JAM.call(ab.charCodeAt, ab, [v679], JAM.policy.p4);
          var v111 = v426 << 24;
          ae = v111 | 8388608;
          break;
        case 2:
          var v855 = L$$9 - 2;
          var v680 = JAM.call(ab.charCodeAt, ab, [v855], JAM.policy.p4);
          var v427 = v680 << 24;
          var v856 = L$$9 - 1;
          var v681 = JAM.call(ab.charCodeAt, ab, [v856], JAM.policy.p4);
          var v428 = v681 << 16;
          var v112 = v427 | v428;
          ae = v112 | 32768;
          break;
        case 3:
          var v942 = L$$9 - 3;
          var v857 = JAM.call(ab.charCodeAt, ab, [v942], JAM.policy.p4);
          var v682 = v857 << 24;
          var v943 = L$$9 - 2;
          var v858 = JAM.call(ab.charCodeAt, ab, [v943], JAM.policy.p4);
          var v683 = v858 << 16;
          var v429 = v682 | v683;
          var v859 = L$$9 - 1;
          var v684 = JAM.call(ab.charCodeAt, ab, [v859], JAM.policy.p4);
          var v430 = v684 << 8;
          var v113 = v429 | v430;
          ae = v113 | 128;
      }
    }
    JAM.call(T.push, T, [ae], JAM.policy.p4);
    var v115 = (T.length & 15) !== 14;
    for (;v115;) {
      JAM.call(T.push, T, [0], JAM.policy.p4);
      v115 = (T.length & 15) !== 14;
    }
    JAM.call(T.push, T, [L$$9 >>> 29], JAM.policy.p4);
    JAM.call(T.push, T, [L$$9 << 3 & 4294967295], JAM.policy.p4);
    Q = 0;
    var v136 = Q < T.length;
    for (;v136;) {
      ae = 0;
      var v119 = ae < 16;
      for (;v119;) {
        JAM.set(M$$8, ae, T[Q + ae], JAM.policy.p2);
        ae = ae + 1;
        v119 = ae < 16;
      }
      ae = 16;
      var v122 = ae <= 79;
      for (;v122;) {
        var v120 = M$$8;
        var v121 = ae;
        var v1086 = JAM.call(N$$4, null, [M$$8[ae - 3] ^ M$$8[ae - 8] ^ M$$8[ae - 14] ^ M$$8[ae - 16], 1], JAM.policy.p4);
        introspect(JAM.policy.p2) {
          v120[v121] = v1086;
        }
        ae = ae + 1;
        v122 = ae <= 79;
      }
      aa = U;
      Z = S;
      Y = R;
      X = P$$2;
      V = O$$2;
      ae = 0;
      var v124 = ae <= 19;
      for (;v124;) {
        af = JAM.call(N$$4, null, [aa, 5], JAM.policy.p4) + (Z & Y | ~Z & X) + V + M$$8[ae] + 1518500249 & 4294967295;
        V = X;
        X = Y;
        Y = JAM.call(N$$4, null, [Z, 30], JAM.policy.p4);
        Z = aa;
        aa = af;
        ae = ae + 1;
        v124 = ae <= 19;
      }
      ae = 20;
      var v126 = ae <= 39;
      for (;v126;) {
        af = JAM.call(N$$4, null, [aa, 5], JAM.policy.p4) + (Z ^ Y ^ X) + V + M$$8[ae] + 1859775393 & 4294967295;
        V = X;
        X = Y;
        Y = JAM.call(N$$4, null, [Z, 30], JAM.policy.p4);
        Z = aa;
        aa = af;
        ae = ae + 1;
        v126 = ae <= 39;
      }
      ae = 40;
      var v128 = ae <= 59;
      for (;v128;) {
        af = JAM.call(N$$4, null, [aa, 5], JAM.policy.p4) + (Z & Y | Z & X | Y & X) + V + M$$8[ae] + 2400959708 & 4294967295;
        V = X;
        X = Y;
        Y = JAM.call(N$$4, null, [Z, 30], JAM.policy.p4);
        Z = aa;
        aa = af;
        ae = ae + 1;
        v128 = ae <= 59;
      }
      ae = 60;
      var v130 = ae <= 79;
      for (;v130;) {
        af = JAM.call(N$$4, null, [aa, 5], JAM.policy.p4) + (Z ^ Y ^ X) + V + M$$8[ae] + 3395469782 & 4294967295;
        V = X;
        X = Y;
        Y = JAM.call(N$$4, null, [Z, 30], JAM.policy.p4);
        Z = aa;
        aa = af;
        ae = ae + 1;
        v130 = ae <= 79;
      }
      U = U + aa & 4294967295;
      S = S + Z & 4294967295;
      R = R + Y & 4294967295;
      P$$2 = P$$2 + X & 4294967295;
      O$$2 = O$$2 + V & 4294967295;
      Q = Q + 16;
      v136 = Q < T.length;
    }
    af = JAM.call(ac, null, [U], JAM.policy.p4) + JAM.call(ac, null, [S], JAM.policy.p4) + JAM.call(ac, null, [R], JAM.policy.p4) + JAM.call(ac, null, [P$$2], JAM.policy.p4) + JAM.call(ac, null, [O$$2], JAM.policy.p4);
    return JAM.call(af.toLowerCase, af, [], JAM.policy.p4);
  }
  function C(M$$9, i$$17, L$$10) {
    if (M$$9 === "translate.googleusercontent.com") {
      if (L$$10 === "") {
        L$$10 = i$$17;
      }
      i$$17 = JAM.call(x$$48, null, [i$$17, "u"], JAM.policy.p4);
      M$$9 = JAM.call(b$$1, null, [i$$17], JAM.policy.p4);
    } else {
      var v699 = M$$9 === "cc.bingj.com";
      if (!v699) {
        v699 = M$$9 === "webcache.googleusercontent.com";
      }
      var v443 = v699;
      if (!v443) {
        v443 = JAM.call(M$$9.slice, M$$9, [0, 5], JAM.policy.p4) === "74.6.";
      }
      if (v443) {
        i$$17 = n$$6.links[0].href;
        M$$9 = JAM.call(b$$1, null, [i$$17], JAM.policy.p4);
      }
    }
    return[M$$9, i$$17, L$$10];
  }
  function r$$2(L$$11) {
    var i$$18 = L$$11.length;
    if (JAM.call(L$$11.charAt, L$$11, [i$$18 = i$$18 - 1], JAM.policy.p4) === ".") {
      L$$11 = JAM.call(L$$11.slice, L$$11, [0, i$$18], JAM.policy.p4);
    }
    if (JAM.call(L$$11.slice, L$$11, [0, 2], JAM.policy.p4) === "*.") {
      L$$11 = JAM.call(L$$11.slice, L$$11, [1], JAM.policy.p4);
    }
    return L$$11;
  }
  function K(L$$12) {
    if (!JAM.call(h$$5, null, [L$$12], JAM.policy.p4)) {
      var v145 = L$$12.text;
      if (!v145) {
        v145 = "";
      }
      L$$12 = v145;
      var i$$19 = JAM.call(n$$6.getElementsByTagName, n$$6, ["title"], JAM.policy.p4);
      var v449 = i$$19;
      if (v449) {
        v449 = JAM.call(p$$3, null, [i$$19[0]], JAM.policy.p4);
      }
      if (v449) {
        L$$12 = i$$19[0].text;
      }
    }
    return L$$12;
  }
  function s$$4(O$$3, S$$1) {
    var U$$1 = "Piwik_Overlay";
    var R$$1 = n$$6.referrer;
    var i$$20 = O$$3;
    i$$20 = JAM.call(i$$20.substring, i$$20, [0, i$$20.length - 9], JAM.policy.p4);
    var v451;
    if (JAM.call(i$$20.substring, i$$20, [0, 7], JAM.policy.p4) === "http://") {
      v451 = 7;
    } else {
      v451 = 8;
    }
    JAM.call(i$$20.substring, i$$20, [v451, i$$20.length], JAM.policy.p4);
    var v452;
    if (JAM.call(R$$1.substring, R$$1, [0, 7], JAM.policy.p4) === "http://") {
      v452 = 7;
    } else {
      v452 = 8;
    }
    JAM.call(R$$1.substring, R$$1, [v452, R$$1.length], JAM.policy.p4);
    if (JAM.call(R$$1.substring, R$$1, [0, i$$20.length], JAM.policy.p4) === i$$20) {
      var M$$10 = JAM.new(RegExp, ["^" + i$$20 + "index\\.php\\?module=Overlay&action=startOverlaySession&idsite=([0-9]+)&period=([^&]+)&date=([^&]+)$"], JAM.policy.p4);
      var N$$5 = JAM.call(R$$1.match, R$$1, [M$$10], JAM.policy.p4);
      if (N$$5) {
        var P$$3 = N$$5[1];
        if (JAM.call(parseInt, null, [P$$3, 10], JAM.policy.p4) !== S$$1) {
          return false;
        }
        var Q$$1 = N$$5[2];
        var L$$13 = N$$5[3];
        window.name = U$$1 + "###" + Q$$1 + "###" + L$$13;
      }
    }
    var v158 = w$$5.name;
    var T$$1 = JAM.call(v158.split, v158, ["###"], JAM.policy.p4);
    var v159 = T$$1.length === 3;
    if (v159) {
      v159 = T$$1[0] === U$$1;
    }
    return v159;
  }
  function B(M$$11, S$$2) {
    function v7() {
      var v459 = this.readyState === "loaded";
      if (!v459) {
        v459 = this.readyState === "complete";
      }
      if (v459) {
        JAM.call(O$$4, null, [], JAM.policy.p4);
      }
      return;
    }
    function O$$4() {
      if (!L$$14) {
        L$$14 = true;
        JAM.call(Piwik_Overlay_Client.initialize, Piwik_Overlay_Client, [R$$2, S$$2, N$$6, i$$21], JAM.policy.p4);
      }
      return;
    }
    var v162 = window.name;
    var T$$2 = JAM.call(v162.split, v162, ["###"], JAM.policy.p4);
    var R$$2 = JAM.call(M$$11.substring, M$$11, [0, M$$11.length - 9], JAM.policy.p4);
    var N$$6 = T$$2[1];
    var i$$21 = T$$2[2];
    var L$$14 = false;
    var Q$$2 = JAM.call(document.createElement, document, ["script"], JAM.policy.p4);
    Q$$2.type = "text/javascript";
    JAM.set(Q$$2, "onreadystatechange", v7);
    JAM.set(Q$$2, "onload", O$$4);
    Q$$2.src = R$$2 + "plugins/Overlay/client/client.js?v=1";
    var P$$4 = JAM.call(document.getElementsByTagName, document, ["head"], JAM.policy.p4)[0];
    JAM.call(P$$4.appendChild, P$$4, [Q$$2], JAM.policy.p4);
    return;
  }
  function t$$2(af$$1, aE) {
    function v66(be$$72) {
      var be$$inline_39 = be$$72;
      if (JAM.call(p$$3, null, [be$$inline_39], JAM.policy.p4)) {
        JAM.call(aV, null, ["", be$$inline_39, "", "", "", ""], JAM.policy.p4);
      }
      return;
    }
    function v65(be$$71, bi$$12, bh$$21, bg$$30, bf$$41, bj$$9) {
      var be$$inline_32 = be$$71;
      var bi$$inline_33 = bi$$12;
      var bh$$inline_34 = bh$$21;
      var bg$$inline_35 = bg$$30;
      var bf$$inline_36 = bf$$41;
      var bj$$inline_37 = bj$$9;
      var v461 = JAM.call(String, null, [be$$inline_32], JAM.policy.p4).length;
      if (v461) {
        v461 = JAM.call(p$$3, null, [bi$$inline_33], JAM.policy.p4);
      }
      if (v461) {
        JAM.call(aV, null, [be$$inline_32, bi$$inline_33, bh$$inline_34, bg$$inline_35, bf$$inline_36, bj$$inline_37], JAM.policy.p4);
      }
      return;
    }
    function v64(bi$$11, be$$70, bg$$29, bf$$40, bh$$20) {
      if (bi$$11.length) {
        JAM.set(aQ, bi$$11, [bi$$11, be$$70, bg$$29, bf$$40, bh$$20], JAM.policy.p2);
      }
      return;
    }
    function v63(bh$$19, be$$69, bg$$28, bf$$39) {
      var v462 = !JAM.call(p$$3, null, [bg$$28], JAM.policy.p4);
      if (!v462) {
        v462 = !bg$$28.length;
      }
      if (v462) {
        bg$$28 = "";
      } else {
        if (bg$$28 instanceof Array) {
          bg$$28 = JAM.call(JSON2.stringify, JSON2, [bg$$28], JAM.policy.p4);
        }
      }
      introspect(JAM.policy.p2) {
        aA[5] = ["_pkc", bg$$28];
      }
      var v463 = JAM.call(p$$3, null, [bf$$39], JAM.policy.p4);
      if (v463) {
        v463 = JAM.call(String, null, [bf$$39], JAM.policy.p4).length;
      }
      if (v463) {
        introspect(JAM.policy.p2) {
          aA[2] = ["_pkp", bf$$39];
        }
      }
      var v716 = !JAM.call(p$$3, null, [bh$$19], JAM.policy.p4);
      if (!v716) {
        v716 = !bh$$19.length;
      }
      var v464 = v716;
      if (v464) {
        var v717 = !JAM.call(p$$3, null, [be$$69], JAM.policy.p4);
        if (!v717) {
          v717 = !be$$69.length;
        }
        v464 = v717;
      }
      if (v464) {
        return;
      }
      var v465 = JAM.call(p$$3, null, [bh$$19], JAM.policy.p4);
      if (v465) {
        v465 = bh$$19.length;
      }
      if (v465) {
        introspect(JAM.policy.p2) {
          aA[3] = ["_pks", bh$$19];
        }
      }
      var v466 = !JAM.call(p$$3, null, [be$$69], JAM.policy.p4);
      if (!v466) {
        v466 = !be$$69.length;
      }
      if (v466) {
        be$$69 = "";
      }
      introspect(JAM.policy.p2) {
        aA[4] = ["_pkn", be$$69];
      }
      return;
    }
    function v62(be$$68, bg$$27, bf$$38) {
      function v61() {
        var bh$$inline_27 = bg$$27;
        var bf$$inline_28 = bf$$38;
        var v721 = "search=" + JAM.call(g$$1, null, [be$$68], JAM.policy.p4);
        var v879;
        if (bh$$inline_27) {
          v879 = "&search_cat=" + JAM.call(g$$1, null, [bh$$inline_27], JAM.policy.p4);
        } else {
          v879 = "";
        }
        var v467 = v721 + v879;
        var v723;
        if (JAM.call(p$$3, null, [bf$$inline_28], JAM.policy.p4)) {
          v723 = "&search_count=" + bf$$inline_28;
        } else {
          v723 = "";
        }
        var bg$$inline_30 = JAM.call(am, null, [v467 + v723, void 0, "sitesearch"], JAM.policy.p4);
        JAM.call(aq, null, [bg$$inline_30, aF], JAM.policy.p4);
        return;
      }
      JAM.call(ai$$1, null, [v61], JAM.policy.p4);
      return;
    }
    function v60(be$$67, bf$$37) {
      function v59() {
        JAM.call(ay, null, [be$$67, bf$$37], JAM.policy.p4);
        return;
      }
      function v58() {
        JAM.call(B, null, [N$$7, a1], JAM.policy.p4);
        return;
      }
      if (JAM.call(s$$4, null, [N$$7, a1], JAM.policy.p4)) {
        JAM.call(ai$$1, null, [v58], JAM.policy.p4);
      } else {
        JAM.call(ai$$1, null, [v59], JAM.policy.p4);
      }
      return;
    }
    function v57(bf$$36, be$$66, bg$$26) {
      function v56() {
        JAM.call(aZ, null, [bf$$36, be$$66, bg$$26], JAM.policy.p4);
        return;
      }
      JAM.call(ai$$1, null, [v56], JAM.policy.p4);
      return;
    }
    function v55(be$$65, bg$$25, bf$$35) {
      function v54() {
        var v469 = "idgoal=" + be$$65;
        var v724;
        if (bg$$25) {
          v724 = "&revenue=" + bg$$25;
        } else {
          v724 = "";
        }
        var bf$$inline_24 = JAM.call(am, null, [v469 + v724, bf$$35, "goal"], JAM.policy.p4);
        JAM.call(aq, null, [bf$$inline_24, aF], JAM.policy.p4);
        return;
      }
      JAM.call(ai$$1, null, [v54], JAM.policy.p4);
      return;
    }
    function v53(be$$64) {
      ar = be$$64;
      return;
    }
    function v52(be$$63) {
      if (w$$5.location.protocol === "file:") {
        w$$5.location = be$$63;
      }
      return;
    }
    function v51() {
      if (w$$5.location !== w$$5.top.location) {
        w$$5.top.location = w$$5.location;
      }
      return;
    }
    function v50(bg$$24, bf$$34) {
      var be$$62 = JAM.new(Date, [], JAM.policy.p4);
      S$$3 = JAM.call(be$$62.getTime, be$$62, [], JAM.policy.p4) + bg$$24 * 1E3;
      ag$$1 = bf$$34 * 1E3;
      return;
    }
    function v49(be$$61) {
      function v48() {
        JAM.call(ax, null, [be$$61], JAM.policy.p4);
        return;
      }
      if (k$$1) {
        JAM.call(ax, null, [be$$61], JAM.policy.p4);
      } else {
        JAM.call(u.push, u, [v48], JAM.policy.p4);
      }
      return;
    }
    function v47(bf$$33, be$$60) {
      JAM.call(aO, null, [bf$$33, be$$60], JAM.policy.p4);
      return;
    }
    function v46(bf$$32) {
      var v183 = c$$1.doNotTrack;
      if (!v183) {
        v183 = c$$1.msDoNotTrack;
      }
      var be$$59 = v183;
      var v184 = bf$$32;
      if (v184) {
        var v475 = be$$59 === "yes";
        if (!v475) {
          v475 = be$$59 === "1";
        }
        v184 = v475;
      }
      a4 = v184;
      if (a4) {
        JAM.call(this.disableCookies, this, [], JAM.policy.p4);
      }
      return;
    }
    function v45() {
      V$$1 = true;
      introspect(JAM.policy.p2) {
        a2.cookie = "0";
      }
      return;
    }
    function v44(be$$58) {
      au = be$$58;
      return;
    }
    function v43(be$$57) {
      aw = be$$57 * 1E3;
      return;
    }
    function v42(be$$56) {
      ad$$1 = be$$56 * 1E3;
      return;
    }
    function v41(be$$55) {
      ac$$1 = be$$55 * 1E3;
      return;
    }
    function v40(be$$54) {
      ba = be$$54;
      JAM.call(aC, null, [], JAM.policy.p4);
      return;
    }
    function v39(be$$53) {
      X$$1 = JAM.call(r$$2, null, [be$$53], JAM.policy.p4);
      JAM.call(aC, null, [], JAM.policy.p4);
      return;
    }
    function v38(be$$52) {
      a9 = be$$52;
      Q$$3 = JAM.call(Z$$1, null, [], JAM.policy.p4);
      return;
    }
    function v37(be$$51) {
      T$$3 = be$$51;
      return;
    }
    function v36(be$$50) {
      var v185;
      if (JAM.call(h$$5, null, [be$$50], JAM.policy.p4)) {
        v185 = [be$$50];
      } else {
        v185 = be$$50;
      }
      ak = v185;
      return;
    }
    function v35(be$$49) {
      var v186;
      if (JAM.call(h$$5, null, [be$$49], JAM.policy.p4)) {
        v186 = [be$$49];
      } else {
        v186 = be$$49;
      }
      ap = v186;
      return;
    }
    function v34(be$$48) {
      var v187;
      if (JAM.call(h$$5, null, [be$$48], JAM.policy.p4)) {
        v187 = [be$$48];
      } else {
        v187 = be$$48;
      }
      ae$$1 = v187;
      return;
    }
    function v33(be$$47) {
      var v188;
      if (JAM.call(h$$5, null, [be$$47], JAM.policy.p4)) {
        v188 = [be$$47];
      } else {
        v188 = be$$47;
      }
      az = v188;
      return;
    }
    function v32(be$$46) {
      al = be$$46;
      return;
    }
    function v31(be$$45) {
      JSCompiler_inline_label_aW_20: {
        var bg$$inline_16 = bb;
        var be$$inline_17 = be$$45;
        var bh$$inline_18 = JAM.call(f$$6, null, [be$$inline_17], JAM.policy.p4);
        var bf$$inline_19;
        if (bh$$inline_18) {
          av = be$$inline_17;
          break JSCompiler_inline_label_aW_20;
        }
        if (JAM.call(be$$inline_17.slice, be$$inline_17, [0, 1], JAM.policy.p4) === "/") {
          av = JAM.call(f$$6, null, [bg$$inline_16], JAM.policy.p4) + "://" + JAM.call(b$$1, null, [bg$$inline_16], JAM.policy.p4) + be$$inline_17;
          break JSCompiler_inline_label_aW_20;
        }
        bg$$inline_16 = JAM.call(a6, null, [bg$$inline_16], JAM.policy.p4);
        if ((bf$$inline_19 = JAM.call(bg$$inline_16.indexOf, bg$$inline_16, ["?"], JAM.policy.p4)) >= 0) {
          bg$$inline_16 = JAM.call(bg$$inline_16.slice, bg$$inline_16, [0, bf$$inline_19], JAM.policy.p4);
        }
        if ((bf$$inline_19 = JAM.call(bg$$inline_16.lastIndexOf, bg$$inline_16, ["/"], JAM.policy.p4)) !== bg$$inline_16.length - 1) {
          bg$$inline_16 = JAM.call(bg$$inline_16.slice, bg$$inline_16, [0, bf$$inline_19 + 1], JAM.policy.p4);
        }
        av = bg$$inline_16 + be$$inline_17;
      }
      return;
    }
    function v30(be$$44) {
      aK = be$$44;
      return;
    }
    function v29(be$$43) {
      aI = be$$43 || "GET";
      return;
    }
    function v28(be$$42) {
      var v194;
      if (JAM.call(h$$5, null, [be$$42], JAM.policy.p4)) {
        v194 = [be$$42];
      } else {
        v194 = be$$42;
      }
      R$$3 = v194;
      return;
    }
    function v27(be$$41) {
      var v195;
      if (JAM.call(h$$5, null, [be$$41], JAM.policy.p4)) {
        v195 = [be$$41];
      } else {
        v195 = be$$41;
      }
      aG = v195;
      JAM.call(aG.push, aG, [aX], JAM.policy.p4);
      return;
    }
    function v26(be$$40) {
      an = an + ("|" + be$$40);
      return;
    }
    function v25(be$$39) {
      an = be$$39;
      return;
    }
    function v24(be$$38) {
      aF = be$$38;
      return;
    }
    function v23(be$$37, bf$$31) {
      if (JAM.call(this.getCustomVariable, this, [be$$37, bf$$31], JAM.policy.p4)) {
        JAM.call(this.setCustomVariable, this, [be$$37, "", "", bf$$31], JAM.policy.p4);
      }
      return;
    }
    function v22(bf$$30, bg$$23) {
      var be$$36;
      if (!JAM.call(p$$3, null, [bg$$23], JAM.policy.p4)) {
        bg$$23 = "visit";
      }
      var v490 = bg$$23 === "page";
      if (!v490) {
        v490 = bg$$23 === 3;
      }
      if (v490) {
        be$$36 = aA[bf$$30];
      } else {
        var v491 = bg$$23 === "visit";
        if (!v491) {
          v491 = bg$$23 === 2;
        }
        if (v491) {
          if (Q$$3 === false) {
            Q$$3 = JAM.call(Z$$1, null, [], JAM.policy.p4);
          }
          be$$36 = Q$$3[bf$$30];
        }
      }
      var v492 = !JAM.call(p$$3, null, [be$$36], JAM.policy.p4);
      if (!v492) {
        var v733 = be$$36;
        if (v733) {
          v733 = be$$36[0] === "";
        }
        v492 = v733;
      }
      if (v492) {
        return false;
      }
      return be$$36;
    }
    function v21(bf$$29, be$$35, bi$$10, bg$$22) {
      var bh$$18;
      if (!JAM.call(p$$3, null, [bg$$22], JAM.policy.p4)) {
        bg$$22 = "visit";
      }
      if (bf$$29 > 0) {
        var v203;
        var v735 = JAM.call(p$$3, null, [be$$35], JAM.policy.p4);
        if (v735) {
          v735 = !JAM.call(h$$5, null, [be$$35], JAM.policy.p4);
        }
        if (v735) {
          v203 = JAM.call(String, null, [be$$35], JAM.policy.p4);
        } else {
          v203 = be$$35;
        }
        be$$35 = v203;
        var v204;
        var v736 = JAM.call(p$$3, null, [bi$$10], JAM.policy.p4);
        if (v736) {
          v736 = !JAM.call(h$$5, null, [bi$$10], JAM.policy.p4);
        }
        if (v736) {
          v204 = JAM.call(String, null, [bi$$10], JAM.policy.p4);
        } else {
          v204 = bi$$10;
        }
        bi$$10 = v204;
        bh$$18 = [JAM.call(be$$35.slice, be$$35, [0, a5], JAM.policy.p4), JAM.call(bi$$10.slice, bi$$10, [0, a5], JAM.policy.p4)];
        var v496 = bg$$22 === "visit";
        if (!v496) {
          v496 = bg$$22 === 2;
        }
        if (v496) {
          if (Q$$3 === false) {
            Q$$3 = JAM.call(Z$$1, null, [], JAM.policy.p4);
          }
          JAM.set(Q$$3, bf$$29, bh$$18, JAM.policy.p2);
        } else {
          var v497 = bg$$22 === "page";
          if (!v497) {
            v497 = bg$$22 === 3;
          }
          if (v497) {
            JAM.set(aA, bf$$29, bh$$18, JAM.policy.p2);
          }
        }
      }
      return;
    }
    function v20() {
      return U$$2;
    }
    function v19(be$$34, bf$$28) {
      if (typeof be$$34 === "object") {
        U$$2 = be$$34;
      } else {
        if (!U$$2) {
          U$$2 = [];
        }
        JAM.set(U$$2, be$$34, bf$$28, JAM.policy.p2);
      }
      return;
    }
    function v18(be$$33) {
      a1 = be$$33;
      return;
    }
    function v17(be$$32) {
      N$$7 = be$$32;
      return;
    }
    function v16() {
      return JAM.call(i$$22, null, [], JAM.policy.p4)[3];
    }
    function v15() {
      return JAM.call(i$$22, null, [], JAM.policy.p4)[2];
    }
    function v14() {
      return JAM.call(i$$22, null, [], JAM.policy.p4)[1];
    }
    function v13() {
      return JAM.call(i$$22, null, [], JAM.policy.p4)[0];
    }
    function v12() {
      return JAM.call(i$$22, null, [], JAM.policy.p4);
    }
    function v11() {
      return JAM.call(L$$15, null, [], JAM.policy.p4);
    }
    function v10() {
      return JAM.call(L$$15, null, [], JAM.policy.p4)[1];
    }
    function aS(bk, bh, bg, bj, bf, bi) {
      if (V$$1) {
        return;
      }
      var be;
      if (bg) {
        be = JAM.new(Date, [], JAM.policy.p4);
        JAM.call(be.setTime, be, [JAM.call(be.getTime, be, [], JAM.policy.p4) + bg], JAM.policy.p4);
      }
      var v219 = n$$6;
      var v990 = bk + "=" + JAM.call(g$$1, null, [bh], JAM.policy.p4);
      var v1013;
      if (bg) {
        v1013 = ";expires=" + JAM.call(be.toGMTString, be, [], JAM.policy.p4);
      } else {
        v1013 = "";
      }
      var v739 = v990 + v1013 + ";path=" + (bj || "/");
      var v886;
      if (bf) {
        v886 = ";domain=" + bf;
      } else {
        v886 = "";
      }
      var v500 = v739 + v886;
      var v741;
      if (bi) {
        v741 = ";secure";
      } else {
        v741 = "";
      }
      var v501 = v741;
      introspect(JAM.policy.p2) {
        v219.cookie = v500 + v501;
      }
      return;
    }
    function ab$$1(bg$$1) {
      if (V$$1) {
        return 0;
      }
      var be$$1 = JAM.new(RegExp, ["(^|;)[ ]*" + bg$$1 + "=([^;]*)"], JAM.policy.p4);
      var bf$$1 = JAM.call(be$$1.exec, be$$1, [n$$6.cookie], JAM.policy.p4);
      var v222;
      if (bf$$1) {
        v222 = JAM.call(v, null, [bf$$1[2]], JAM.policy.p4);
      } else {
        v222 = 0;
      }
      return v222;
    }
    function a6(be$$2) {
      var bf$$2;
      if (T$$3) {
        bf$$2 = JAM.new(RegExp, ["#.*"], JAM.policy.p4);
        return JAM.call(be$$2.replace, be$$2, [bf$$2, ""], JAM.policy.p4);
      }
      return be$$2;
    }
    function aH(bh$$2) {
      var bf$$4;
      var be$$4;
      var bg$$3;
      bf$$4 = 0;
      var v230 = bf$$4 < aG.length;
      for (;v230;) {
        var v505 = aG[bf$$4];
        be$$4 = JAM.call(r$$2, null, [JAM.call(v505.toLowerCase, v505, [], JAM.policy.p4)], JAM.policy.p4);
        if (bh$$2 === be$$4) {
          return true;
        }
        if (JAM.call(be$$4.slice, be$$4, [0, 1], JAM.policy.p4) === ".") {
          if (bh$$2 === JAM.call(be$$4.slice, be$$4, [1], JAM.policy.p4)) {
            return true;
          }
          bg$$3 = bh$$2.length - be$$4.length;
          var v509 = bg$$3 > 0;
          if (v509) {
            v509 = JAM.call(bh$$2.slice, bh$$2, [bg$$3], JAM.policy.p4) === be$$4;
          }
          if (v509) {
            return true;
          }
        }
        bf$$4 = bf$$4 + 1;
        v230 = bf$$4 < aG.length;
      }
      return false;
    }
    function bd(be$$5) {
      function v8() {
        return;
      }
      var bf$$5 = JAM.new(Image, [1, 1], JAM.policy.p4);
      JAM.set(bf$$5, "onload", v8);
      var v231 = bf$$5;
      var v743 = N$$7;
      var v887;
      if (JAM.call(N$$7.indexOf, N$$7, ["?"], JAM.policy.p4) < 0) {
        v887 = "?";
      } else {
        v887 = "&";
      }
      v231.src = v743 + v887 + be$$5;
      return;
    }
    function aT(be$$6) {
      function v9() {
        var v512 = this.readyState === 4;
        if (v512) {
          v512 = this.status !== 200;
        }
        if (v512) {
          JAM.call(bd, null, [be$$6], JAM.policy.p4);
        }
        return;
      }
      try {
        var v233;
        if (w$$5.XMLHttpRequest) {
          v233 = JAM.new(w$$5.XMLHttpRequest, [], JAM.policy.p4);
        } else {
          var v514;
          if (w$$5.ActiveXObject) {
            v514 = JAM.new(ActiveXObject, ["Microsoft.XMLHTTP"], JAM.policy.p4);
          } else {
            v514 = null;
          }
          v233 = v514;
        }
        var bg$$4 = v233;
        JAM.call(bg$$4.open, bg$$4, ["POST", N$$7, true], JAM.policy.p4);
        JAM.set(bg$$4, "onreadystatechange", v9);
        JAM.call(bg$$4.setRequestHeader, bg$$4, ["Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"], JAM.policy.p4);
        JAM.call(bg$$4.send, bg$$4, [be$$6], JAM.policy.p4);
      } catch (bf$$6) {
        JAM.call(bd, null, [be$$6], JAM.policy.p4);
      }
      return;
    }
    function aq(bg$$5, bf$$7) {
      var be$$7 = JAM.new(Date, [], JAM.policy.p4);
      if (!a4) {
        if (aI === "POST") {
          JAM.call(aT, null, [bg$$5], JAM.policy.p4);
        } else {
          JAM.call(bd, null, [bg$$5], JAM.policy.p4);
        }
        e$$5 = JAM.call(be$$7.getTime, be$$7, [], JAM.policy.p4) + bf$$7;
      }
      return;
    }
    function aR(be$$8) {
      return a9 + be$$8 + "." + a1 + "." + aM;
    }
    function P$$5() {
      if (V$$1) {
        return "0";
      }
      if (!JAM.call(p$$3, null, [c$$1.cookieEnabled], JAM.policy.p4)) {
        var be$$9 = JAM.call(aR, null, ["testcookie"], JAM.policy.p4);
        JAM.call(aS, null, [be$$9, "1"], JAM.policy.p4);
        var v238;
        if (JAM.call(ab$$1, null, [be$$9], JAM.policy.p4) === "1") {
          v238 = "1";
        } else {
          v238 = "0";
        }
        return v238;
      }
      var v240;
      if (c$$1.cookieEnabled) {
        v240 = "1";
      } else {
        v240 = "0";
      }
      return v240;
    }
    function aC() {
      var v241 = JAM.call(ao, null, [(X$$1 || aX) + (ba || "/")], JAM.policy.p4);
      aM = JAM.call(v241.slice, v241, [0, 4], JAM.policy.p4);
      return;
    }
    function Z$$1() {
      var bf$$8 = JAM.call(aR, null, ["cvar"], JAM.policy.p4);
      var be$$10 = JAM.call(ab$$1, null, [bf$$8], JAM.policy.p4);
      if (be$$10.length) {
        be$$10 = JAM.call(JSON2.parse, JSON2, [be$$10], JAM.policy.p4);
        if (typeof be$$10 === "object") {
          return be$$10;
        }
      }
      return{};
    }
    function a0() {
      var be$$11 = JAM.new(Date, [], JAM.policy.p4);
      aJ = JAM.call(be$$11.getTime, be$$11, [], JAM.policy.p4);
      return;
    }
    function L$$15() {
      var bf$$10 = JAM.new(Date, [], JAM.policy.p4);
      var be$$13 = JAM.call(Math.round, Math, [JAM.call(bf$$10.getTime, bf$$10, [], JAM.policy.p4) / 1E3], JAM.policy.p4);
      var bh$$4 = JAM.call(ab$$1, null, [JAM.call(aR, null, ["id"], JAM.policy.p4)], JAM.policy.p4);
      var bg$$7;
      if (bh$$4) {
        bg$$7 = JAM.call(bh$$4.split, bh$$4, ["."], JAM.policy.p4);
        JAM.call(bg$$7.unshift, bg$$7, ["0"], JAM.policy.p4);
      } else {
        if (!at) {
          var v993 = c$$1.userAgent;
          if (!v993) {
            v993 = "";
          }
          var v958 = v993;
          var v994 = c$$1.platform;
          if (!v994) {
            v994 = "";
          }
          var v246 = JAM.call(ao, null, [v958 + v994 + JAM.call(JSON2.stringify, JSON2, [a2], JAM.policy.p4) + be$$13], JAM.policy.p4);
          at = JAM.call(v246.slice, v246, [0, 16], JAM.policy.p4);
        }
        bg$$7 = ["1", at, be$$13, 0, be$$13, "", ""];
      }
      return bg$$7;
    }
    function i$$22() {
      var be$$14 = JAM.call(ab$$1, null, [JAM.call(aR, null, ["ref"], JAM.policy.p4)], JAM.policy.p4);
      if (be$$14.length) {
        try {
          be$$14 = JAM.call(JSON2.parse, JSON2, [be$$14], JAM.policy.p4);
          if (typeof be$$14 === "object") {
            return be$$14;
          }
        } catch (bf$$11) {
        }
      }
      return["", "", 0, ""];
    }
    function am(bg$$8, bF, bG, bi$$2) {
      var bD;
      var bf$$12 = JAM.new(Date, [], JAM.policy.p4);
      var bo = JAM.call(Math.round, Math, [JAM.call(bf$$12.getTime, bf$$12, [], JAM.policy.p4) / 1E3], JAM.policy.p4);
      var bI;
      var bE;
      var bk$$1;
      var bw;
      var bA;
      var bn;
      var by;
      var bl;
      var bC;
      var bj$$2 = 1024;
      var bJ;
      var br;
      var bz = Q$$3;
      var bu = JAM.call(aR, null, ["id"], JAM.policy.p4);
      var bp = JAM.call(aR, null, ["ses"], JAM.policy.p4);
      var bq = JAM.call(aR, null, ["ref"], JAM.policy.p4);
      var bK = JAM.call(aR, null, ["cvar"], JAM.policy.p4);
      var bx = JAM.call(L$$15, null, [], JAM.policy.p4);
      var bt = JAM.call(ab$$1, null, [bp], JAM.policy.p4);
      var bB = JAM.call(i$$22, null, [], JAM.policy.p4);
      var bH = av || bb;
      var bm;
      var be$$15;
      if (V$$1) {
        V$$1 = false;
        JAM.call(aS, null, [bu, "", -86400, ba, X$$1], JAM.policy.p4);
        JAM.call(aS, null, [bp, "", -86400, ba, X$$1], JAM.policy.p4);
        JAM.call(aS, null, [bK, "", -86400, ba, X$$1], JAM.policy.p4);
        JAM.call(aS, null, [bq, "", -86400, ba, X$$1], JAM.policy.p4);
        V$$1 = true;
      }
      if (a4) {
        return "";
      }
      bI = bx[0];
      bE = bx[1];
      bw = bx[2];
      bk$$1 = bx[3];
      bA = bx[4];
      bn = bx[5];
      if (!JAM.call(p$$3, null, [bx[6]], JAM.policy.p4)) {
        introspect(JAM.policy.p2) {
          bx[6] = "";
        }
      }
      by = bx[6];
      if (!JAM.call(p$$3, null, [bi$$2], JAM.policy.p4)) {
        bi$$2 = "";
      }
      var v254 = document.characterSet;
      if (!v254) {
        v254 = document.charset;
      }
      var bs = v254;
      var v529 = !bs;
      if (!v529) {
        v529 = JAM.call(bs.toLowerCase, bs, [], JAM.policy.p4) === "utf-8";
      }
      if (v529) {
        bs = null;
      }
      bm = bB[0];
      be$$15 = bB[1];
      bl = bB[2];
      bC = bB[3];
      if (!bt) {
        bk$$1 = bk$$1 + 1;
        bn = bA;
        var v530 = !au;
        if (!v530) {
          v530 = !bm.length;
        }
        if (v530) {
          for (bD in ap) {
            var v531 = Object.prototype.hasOwnProperty;
            if (JAM.call(v531.call, v531, [ap, bD], JAM.policy.p4)) {
              bm = JAM.call(x$$48, null, [bH, ap[bD]], JAM.policy.p4);
              if (bm.length) {
                break;
              }
            }
          }
          for (bD in ak) {
            var v532 = Object.prototype.hasOwnProperty;
            if (JAM.call(v532.call, v532, [ak, bD], JAM.policy.p4)) {
              be$$15 = JAM.call(x$$48, null, [bH, ak[bD]], JAM.policy.p4);
              if (be$$15.length) {
                break;
              }
            }
          }
        }
        bJ = JAM.call(b$$1, null, [aK], JAM.policy.p4);
        var v263;
        if (bC.length) {
          v263 = JAM.call(b$$1, null, [bC], JAM.policy.p4);
        } else {
          v263 = "";
        }
        br = v263;
        var v761 = bJ.length;
        if (v761) {
          v761 = !JAM.call(aH, null, [bJ], JAM.policy.p4);
        }
        var v534 = v761;
        if (v534) {
          var v892 = !au;
          if (!v892) {
            v892 = !br.length;
          }
          var v762 = v892;
          if (!v762) {
            v762 = JAM.call(aH, null, [br], JAM.policy.p4);
          }
          v534 = v762;
        }
        if (v534) {
          bC = aK;
        }
        var v535 = bC.length;
        if (!v535) {
          v535 = bm.length;
        }
        if (v535) {
          bl = bo;
          bB = [bm, be$$15, bl, JAM.call(a6, null, [JAM.call(bC.slice, bC, [0, bj$$2], JAM.policy.p4)], JAM.policy.p4)];
          JAM.call(aS, null, [bq, JAM.call(JSON2.stringify, JSON2, [bB], JAM.policy.p4), aw, ba, X$$1, aa$$1], JAM.policy.p4);
        }
      }
      var v537 = bg$$8;
      var v1081 = "&idsite=" + a1 + "&rec=1&r=";
      var v1084 = JAM.call(String, null, [JAM.call(Math.random, Math, [], JAM.policy.p4)], JAM.policy.p4);
      var v1062 = v1081 + JAM.call(v1084.slice, v1084, [2, 8], JAM.policy.p4) + "&h=" + JAM.call(bf$$12.getHours, bf$$12, [], JAM.policy.p4) + "&m=" + JAM.call(bf$$12.getMinutes, bf$$12, [], JAM.policy.p4) + "&s=" + JAM.call(bf$$12.getSeconds, bf$$12, [], JAM.policy.p4) + "&url=" + JAM.call(g$$1, null, [JAM.call(a6, null, [bH], JAM.policy.p4)], JAM.policy.p4);
      var v1066;
      if (aK.length) {
        v1066 = "&urlref=" + JAM.call(g$$1, null, [JAM.call(a6, null, [aK], JAM.policy.p4)], JAM.policy.p4);
      } else {
        v1066 = "";
      }
      var v1041 = v1062 + v1066 + "&_id=" + bE + "&_idts=" + bw + "&_idvc=" + bk$$1 + "&_idn=" + bI;
      var v1047;
      if (bm.length) {
        v1047 = "&_rcn=" + JAM.call(g$$1, null, [bm], JAM.policy.p4);
      } else {
        v1047 = "";
      }
      var v1036 = v1041 + v1047;
      var v1043;
      if (be$$15.length) {
        v1043 = "&_rck=" + JAM.call(g$$1, null, [be$$15], JAM.policy.p4);
      } else {
        v1043 = "";
      }
      var v962 = v1036 + v1043 + "&_refts=" + bl + "&_viewts=" + bn;
      var v996;
      if (JAM.call(String, null, [by], JAM.policy.p4).length) {
        v996 = "&_ects=" + by;
      } else {
        v996 = "";
      }
      var v894 = v962 + v996;
      var v964;
      if (JAM.call(String, null, [bC], JAM.policy.p4).length) {
        v964 = "&_ref=" + JAM.call(g$$1, null, [JAM.call(a6, null, [JAM.call(bC.slice, bC, [0, bj$$2], JAM.policy.p4)], JAM.policy.p4)], JAM.policy.p4);
      } else {
        v964 = "";
      }
      var v764 = v894 + v964;
      var v896;
      if (bs) {
        v896 = "&cs=" + JAM.call(g$$1, null, [bs], JAM.policy.p4);
      } else {
        v896 = "";
      }
      bg$$8 = v537 + (v764 + v896);
      var bh$$5 = JAM.call(JSON2.stringify, JSON2, [aA], JAM.policy.p4);
      if (bh$$5.length > 2) {
        bg$$8 = bg$$8 + ("&cvar=" + JAM.call(g$$1, null, [bh$$5], JAM.policy.p4));
      }
      for (bD in a2) {
        var v542 = Object.prototype.hasOwnProperty;
        if (JAM.call(v542.call, v542, [a2, bD], JAM.policy.p4)) {
          bg$$8 = bg$$8 + ("&" + bD + "=" + a2[bD]);
        }
      }
      if (bF) {
        bg$$8 = bg$$8 + ("&data=" + JAM.call(g$$1, null, [JAM.call(JSON2.stringify, JSON2, [bF], JAM.policy.p4)], JAM.policy.p4));
      } else {
        if (U$$2) {
          bg$$8 = bg$$8 + ("&data=" + JAM.call(g$$1, null, [JAM.call(JSON2.stringify, JSON2, [U$$2], JAM.policy.p4)], JAM.policy.p4));
        }
      }
      if (Q$$3) {
        var bv = JAM.call(JSON2.stringify, JSON2, [Q$$3], JAM.policy.p4);
        if (bv.length > 2) {
          bg$$8 = bg$$8 + ("&_cvar=" + JAM.call(g$$1, null, [bv], JAM.policy.p4));
        }
        for (bD in bz) {
          var v551 = Object.prototype.hasOwnProperty;
          if (JAM.call(v551.call, v551, [bz, bD], JAM.policy.p4)) {
            var v552 = Q$$3[bD][0] === "";
            if (!v552) {
              v552 = Q$$3[bD][1] === "";
            }
            if (v552) {
              delete Q$$3[bD];
            }
          }
        }
        JAM.call(aS, null, [bK, JAM.call(JSON2.stringify, JSON2, [Q$$3], JAM.policy.p4), ad$$1, ba, X$$1, aa$$1], JAM.policy.p4);
      }
      var bi$$inline_0 = bE;
      var bf$$inline_1 = bw;
      var be$$inline_2 = bk$$1;
      var bh$$inline_3 = bo;
      var bg$$inline_4 = bn;
      var v275;
      var v777 = JAM.call(p$$3, null, [bi$$2], JAM.policy.p4);
      if (v777) {
        v777 = JAM.call(String, null, [bi$$2], JAM.policy.p4).length;
      }
      if (v777) {
        v275 = bi$$2;
      } else {
        v275 = by;
      }
      var bj$$inline_5 = v275;
      JAM.call(aS, null, [JAM.call(aR, null, ["id"], JAM.policy.p4), bi$$inline_0 + "." + bf$$inline_1 + "." + be$$inline_2 + "." + bh$$inline_3 + "." + bg$$inline_4 + "." + bj$$inline_5, ac$$1, ba, X$$1, aa$$1], JAM.policy.p4);
      JAM.call(aS, null, [bp, "*", ad$$1, ba, X$$1, aa$$1], JAM.policy.p4);
      bg$$8 = bg$$8 + JAM.call(E, null, [bG], JAM.policy.p4);
      return bg$$8;
    }
    function aV(bh$$6, bg$$9, bl$$1, bi$$3, be$$16, bo$$1) {
      var bj$$3 = "idgoal=0";
      var bk$$2;
      var bf$$13 = JAM.new(Date, [], JAM.policy.p4);
      var bm$$1 = [];
      var bn$$1;
      if (JAM.call(String, null, [bh$$6], JAM.policy.p4).length) {
        bj$$3 = bj$$3 + ("&ec_id=" + JAM.call(g$$1, null, [bh$$6], JAM.policy.p4));
        bk$$2 = JAM.call(Math.round, Math, [JAM.call(bf$$13.getTime, bf$$13, [], JAM.policy.p4) / 1E3], JAM.policy.p4);
      }
      bj$$3 = bj$$3 + ("&revenue=" + bg$$9);
      if (JAM.call(String, null, [bl$$1], JAM.policy.p4).length) {
        bj$$3 = bj$$3 + ("&ec_st=" + bl$$1);
      }
      if (JAM.call(String, null, [bi$$3], JAM.policy.p4).length) {
        bj$$3 = bj$$3 + ("&ec_tx=" + bi$$3);
      }
      if (JAM.call(String, null, [be$$16], JAM.policy.p4).length) {
        bj$$3 = bj$$3 + ("&ec_sh=" + be$$16);
      }
      if (JAM.call(String, null, [bo$$1], JAM.policy.p4).length) {
        bj$$3 = bj$$3 + ("&ec_dt=" + bo$$1);
      }
      if (aQ) {
        for (bn$$1 in aQ) {
          var v570 = Object.prototype.hasOwnProperty;
          if (JAM.call(v570.call, v570, [aQ, bn$$1], JAM.policy.p4)) {
            if (!JAM.call(p$$3, null, [aQ[bn$$1][1]], JAM.policy.p4)) {
              var v284 = aQ[bn$$1];
              introspect(JAM.policy.p2) {
                v284[1] = "";
              }
            }
            if (!JAM.call(p$$3, null, [aQ[bn$$1][2]], JAM.policy.p4)) {
              var v286 = aQ[bn$$1];
              introspect(JAM.policy.p2) {
                v286[2] = "";
              }
            }
            var v573 = !JAM.call(p$$3, null, [aQ[bn$$1][3]], JAM.policy.p4);
            if (!v573) {
              v573 = JAM.call(String, null, [aQ[bn$$1][3]], JAM.policy.p4).length === 0;
            }
            if (v573) {
              var v288 = aQ[bn$$1];
              introspect(JAM.policy.p2) {
                v288[3] = 0;
              }
            }
            var v574 = !JAM.call(p$$3, null, [aQ[bn$$1][4]], JAM.policy.p4);
            if (!v574) {
              v574 = JAM.call(String, null, [aQ[bn$$1][4]], JAM.policy.p4).length === 0;
            }
            if (v574) {
              var v290 = aQ[bn$$1];
              introspect(JAM.policy.p2) {
                v290[4] = 1;
              }
            }
            JAM.call(bm$$1.push, bm$$1, [aQ[bn$$1]], JAM.policy.p4);
          }
        }
        bj$$3 = bj$$3 + ("&ec_items=" + JAM.call(g$$1, null, [JAM.call(JSON2.stringify, JSON2, [bm$$1], JAM.policy.p4)], JAM.policy.p4));
      }
      bj$$3 = JAM.call(am, null, [bj$$3, U$$2, "ecommerce", bk$$2], JAM.policy.p4);
      JAM.call(aq, null, [bj$$3, aF], JAM.policy.p4);
      return;
    }
    function ay(bh$$8, bi$$5) {
      function bf$$15() {
        var bj$$5 = JAM.new(Date, [], JAM.policy.p4);
        var bk$$3;
        if (aJ + ag$$1 > JAM.call(bj$$5.getTime, bj$$5, [], JAM.policy.p4)) {
          if (S$$3 < JAM.call(bj$$5.getTime, bj$$5, [], JAM.policy.p4)) {
            bk$$3 = JAM.call(am, null, ["ping=1", bi$$5, "ping"], JAM.policy.p4);
            JAM.call(aq, null, [bk$$3, aF], JAM.policy.p4);
          }
          JAM.call(setTimeout, null, [bf$$15, ag$$1], JAM.policy.p4);
        }
        return;
      }
      var be$$19 = JAM.new(Date, [], JAM.policy.p4);
      var bg$$11 = JAM.call(am, null, ["action_name=" + JAM.call(g$$1, null, [JAM.call(K, null, [bh$$8 || al], JAM.policy.p4)], JAM.policy.p4), bi$$5, "log"], JAM.policy.p4);
      JAM.call(aq, null, [bg$$11, aF], JAM.policy.p4);
      var v582 = S$$3 && ag$$1;
      if (v582) {
        v582 = !aL;
      }
      if (v582) {
        aL = true;
        JAM.call(J, null, [n$$6, "click", a0], JAM.policy.p4);
        JAM.call(J, null, [n$$6, "mouseup", a0], JAM.policy.p4);
        JAM.call(J, null, [n$$6, "mousedown", a0], JAM.policy.p4);
        JAM.call(J, null, [n$$6, "mousemove", a0], JAM.policy.p4);
        JAM.call(J, null, [n$$6, "mousewheel", a0], JAM.policy.p4);
        JAM.call(J, null, [w$$5, "DOMMouseScroll", a0], JAM.policy.p4);
        JAM.call(J, null, [w$$5, "scroll", a0], JAM.policy.p4);
        JAM.call(J, null, [n$$6, "keypress", a0], JAM.policy.p4);
        JAM.call(J, null, [n$$6, "keydown", a0], JAM.policy.p4);
        JAM.call(J, null, [n$$6, "keyup", a0], JAM.policy.p4);
        JAM.call(J, null, [w$$5, "resize", a0], JAM.policy.p4);
        JAM.call(J, null, [w$$5, "focus", a0], JAM.policy.p4);
        JAM.call(J, null, [w$$5, "blur", a0], JAM.policy.p4);
        aJ = JAM.call(be$$19.getTime, be$$19, [], JAM.policy.p4);
        JAM.call(setTimeout, null, [bf$$15, ag$$1], JAM.policy.p4);
      }
      return;
    }
    function aZ(bf$$18, be$$22, bh$$11) {
      var bg$$14 = JAM.call(am, null, [be$$22 + "=" + JAM.call(g$$1, null, [JAM.call(a6, null, [bf$$18], JAM.policy.p4)], JAM.policy.p4), bh$$11, "link"], JAM.policy.p4);
      JAM.call(aq, null, [bg$$14, aF], JAM.policy.p4);
      return;
    }
    function a3(bf$$19, be$$23) {
      if (bf$$19 !== "") {
        var v585 = bf$$19;
        var v792 = JAM.call(be$$23.charAt, be$$23, [0], JAM.policy.p4);
        return v585 + JAM.call(v792.toUpperCase, v792, [], JAM.policy.p4) + JAM.call(be$$23.slice, be$$23, [1], JAM.policy.p4);
      }
      return be$$23;
    }
    function ai$$1(bj$$6) {
      function bf$$20() {
        JAM.call(n$$6.removeEventListener, n$$6, [bg$$15 + "visibilitychange", bf$$20, false], JAM.policy.p4);
        JAM.call(bj$$6, null, [], JAM.policy.p4);
        return;
      }
      var bi$$7;
      var be$$24;
      var bh$$12 = ["", "webkit", "ms", "moz"];
      var bg$$15;
      if (!ar) {
        be$$24 = 0;
        var v305 = be$$24 < bh$$12.length;
        for (;v305;) {
          bg$$15 = bh$$12[be$$24];
          var v588 = Object.prototype.hasOwnProperty;
          if (JAM.call(v588.call, v588, [n$$6, JAM.call(a3, null, [bg$$15, "hidden"], JAM.policy.p4)], JAM.policy.p4)) {
            if (n$$6[JAM.call(a3, null, [bg$$15, "visibilityState"], JAM.policy.p4)] === "prerender") {
              bi$$7 = true;
            }
            break;
          }
          be$$24 = be$$24 + 1;
          v305 = be$$24 < bh$$12.length;
        }
      }
      if (bi$$7) {
        JAM.call(J, null, [n$$6, bg$$15 + "visibilitychange", bf$$20], JAM.policy.p4);
        return;
      }
      JAM.call(bj$$6, null, [], JAM.policy.p4);
      return;
    }
    function ah$$1(bg$$16, bf$$21) {
      var bh$$13;
      var be$$25 = "(^| )(piwik[_-]" + bf$$21;
      if (bg$$16) {
        bh$$13 = 0;
        var v308 = bh$$13 < bg$$16.length;
        for (;v308;) {
          be$$25 = be$$25 + ("|" + bg$$16[bh$$13]);
          bh$$13 = bh$$13 + 1;
          v308 = bh$$13 < bg$$16.length;
        }
      }
      be$$25 = be$$25 + ")( |$)";
      return JAM.new(RegExp, [be$$25], JAM.policy.p4);
    }
    function aP(bj$$8) {
      var bh$$15;
      var bf$$23;
      var be$$27;
      var v797 = (bh$$15 = bj$$8.parentNode) !== null;
      if (v797) {
        v797 = JAM.call(p$$3, null, [bh$$15], JAM.policy.p4);
      }
      var v595 = v797;
      if (v595) {
        var v971 = bj$$8.tagName;
        var v798 = (bf$$23 = JAM.call(v971.toUpperCase, v971, [], JAM.policy.p4)) !== "A";
        if (v798) {
          v798 = bf$$23 !== "AREA";
        }
        v595 = v798;
      }
      var v309 = v595;
      for (;v309;) {
        bj$$8 = bh$$15;
        var v799 = (bh$$15 = bj$$8.parentNode) !== null;
        if (v799) {
          v799 = JAM.call(p$$3, null, [bh$$15], JAM.policy.p4);
        }
        var v596 = v799;
        if (v596) {
          var v972 = bj$$8.tagName;
          var v800 = (bf$$23 = JAM.call(v972.toUpperCase, v972, [], JAM.policy.p4)) !== "A";
          if (v800) {
            v800 = bf$$23 !== "AREA";
          }
          v596 = v800;
        }
        v309 = v596;
      }
      if (JAM.call(p$$3, null, [bj$$8.href], JAM.policy.p4)) {
        var v310 = bj$$8.hostname;
        if (!v310) {
          v310 = JAM.call(b$$1, null, [bj$$8.href], JAM.policy.p4);
        }
        var bk$$4 = v310;
        var bl$$2 = JAM.call(bk$$4.toLowerCase, bk$$4, [], JAM.policy.p4);
        var v311 = bj$$8.href;
        var bg$$18 = JAM.call(v311.replace, v311, [bk$$4, bl$$2], JAM.policy.p4);
        var bi$$9 = JAM.new(RegExp, ["^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):", "i"], JAM.policy.p4);
        if (!JAM.call(bi$$9.test, bi$$9, [bg$$18], JAM.policy.p4)) {
          var bh$$inline_7 = bj$$8.className;
          var be$$inline_8 = bg$$18;
          var bi$$inline_9 = JAM.call(aH, null, [bl$$2], JAM.policy.p4);
          var bg$$inline_10 = JAM.call(ah$$1, null, [az, "download"], JAM.policy.p4);
          var bf$$inline_11 = JAM.call(ah$$1, null, [ae$$1, "link"], JAM.policy.p4);
          var bj$$inline_12 = JAM.new(RegExp, ["\\.(" + an + ")([?&#]|$)", "i"], JAM.policy.p4);
          var v313;
          if (JAM.call(bf$$inline_11.test, bf$$inline_11, [bh$$inline_7], JAM.policy.p4)) {
            v313 = "link";
          } else {
            var v602;
            var v916 = JAM.call(bg$$inline_10.test, bg$$inline_10, [bh$$inline_7], JAM.policy.p4);
            if (!v916) {
              v916 = JAM.call(bj$$inline_12.test, bj$$inline_12, [be$$inline_8], JAM.policy.p4);
            }
            if (v916) {
              v602 = "download";
            } else {
              var v801;
              if (bi$$inline_9) {
                v801 = 0;
              } else {
                v801 = "link";
              }
              v602 = v801;
            }
            v313 = v602;
          }
          be$$27 = v313;
          if (be$$27) {
            bg$$18 = JAM.call(d$$1, null, [bg$$18], JAM.policy.p4);
            JAM.call(aZ, null, [bg$$18, be$$27], JAM.policy.p4);
          }
        }
      }
      return;
    }
    function bc(be$$28) {
      var bf$$24;
      var bg$$19;
      var v316 = be$$28;
      if (!v316) {
        v316 = w$$5.event;
      }
      be$$28 = v316;
      var v317 = be$$28.which;
      if (!v317) {
        v317 = be$$28.button;
      }
      bf$$24 = v317;
      var v318 = be$$28.target;
      if (!v318) {
        v318 = be$$28.srcElement;
      }
      bg$$19 = v318;
      if (be$$28.type === "click") {
        if (bg$$19) {
          JAM.call(aP, null, [bg$$19], JAM.policy.p4);
        }
      } else {
        if (be$$28.type === "mousedown") {
          var v803 = bf$$24 === 1;
          if (!v803) {
            v803 = bf$$24 === 2;
          }
          var v609 = v803;
          if (v609) {
            v609 = bg$$19;
          }
          if (v609) {
            aB = bf$$24;
            Y$$1 = bg$$19;
          } else {
            aB = Y$$1 = null;
          }
        } else {
          if (be$$28.type === "mouseup") {
            var v611 = bf$$24 === aB;
            if (v611) {
              v611 = bg$$19 === Y$$1;
            }
            if (v611) {
              JAM.call(aP, null, [bg$$19], JAM.policy.p4);
            }
            aB = Y$$1 = null;
          }
        }
      }
      return;
    }
    function aO(bf$$25, be$$29) {
      if (be$$29) {
        JAM.call(J, null, [bf$$25, "mouseup", bc, false], JAM.policy.p4);
        JAM.call(J, null, [bf$$25, "mousedown", bc, false], JAM.policy.p4);
      } else {
        JAM.call(J, null, [bf$$25, "click", bc, false], JAM.policy.p4);
      }
      return;
    }
    function ax(bf$$26) {
      if (!aN) {
        aN = true;
        var bg$$20;
        var be$$30 = JAM.call(ah$$1, null, [R$$3, "ignore"], JAM.policy.p4);
        var bh$$16 = n$$6.links;
        if (bh$$16) {
          bg$$20 = 0;
          var v326 = bg$$20 < bh$$16.length;
          for (;v326;) {
            if (!JAM.call(be$$30.test, be$$30, [bh$$16[bg$$20].className], JAM.policy.p4)) {
              JAM.call(aO, null, [bh$$16[bg$$20], bf$$26], JAM.policy.p4);
            }
            bg$$20 = bg$$20 + 1;
            v326 = bg$$20 < bh$$16.length;
          }
        }
      }
      return;
    }
    function a7() {
      var bf$$27;
      var bg$$21;
      var bh$$17 = {pdf:"application/pdf", qt:"video/quicktime", realp:"audio/x-pn-realaudio-plugin", wma:"application/x-mplayer2", dir:"application/x-director", fla:"application/x-shockwave-flash", java:"application/x-java-vm", gears:"application/x-googlegears", ag:"application/x-silverlight"};
      var v328;
      var v805 = JAM.new(RegExp, ["Mac OS X.*Safari/"], JAM.policy.p4);
      if (JAM.call(v805.test, v805, [c$$1.userAgent], JAM.policy.p4)) {
        var v615 = w$$5.devicePixelRatio;
        if (!v615) {
          v615 = 1;
        }
        v328 = v615;
      } else {
        v328 = 1;
      }
      var be$$31 = v328;
      var v808 = JAM.new(RegExp, ["MSIE"], JAM.policy.p4);
      if (!JAM.call(v808.test, v808, [c$$1.userAgent], JAM.policy.p4)) {
        var v618 = c$$1.mimeTypes;
        if (v618) {
          v618 = c$$1.mimeTypes.length;
        }
        if (v618) {
          for (bf$$27 in bh$$17) {
            var v619 = Object.prototype.hasOwnProperty;
            if (JAM.call(v619.call, v619, [bh$$17, bf$$27], JAM.policy.p4)) {
              bg$$21 = c$$1.mimeTypes[bh$$17[bf$$27]];
              var v331;
              var v812 = bg$$21;
              if (v812) {
                v812 = bg$$21.enabledPlugin;
              }
              if (v812) {
                v331 = "1";
              } else {
                v331 = "0";
              }
              JAM.set(a2, bf$$27, v331, JAM.policy.p2);
            }
          }
        }
        var v813 = typeof navigator.javaEnabled !== "unknown";
        if (v813) {
          v813 = JAM.call(p$$3, null, [c$$1.javaEnabled], JAM.policy.p4);
        }
        var v621 = v813;
        if (v621) {
          v621 = JAM.call(c$$1.javaEnabled, c$$1, [], JAM.policy.p4);
        }
        if (v621) {
          a2.java = "1";
        }
        if (typeof w$$5.GearsFactory === "function") {
          a2.gears = "1";
        }
        var v336 = a2;
        var v1087 = JAM.call(P$$5, null, [], JAM.policy.p4);
        introspect(JAM.policy.p2) {
          v336.cookie = v1087;
        }
      }
      a2.res = z$$2.width * be$$31 + "x" + z$$2.height * be$$31;
      return;
    }
    var O$$5 = JAM.call(C, null, [n$$6.domain, w$$5.location.href, JAM.call(q$$2, null, [], JAM.policy.p4)], JAM.policy.p4);
    var aX = JAM.call(r$$2, null, [O$$5[0]], JAM.policy.p4);
    var bb = O$$5[1];
    var aK = O$$5[2];
    var aI = "GET";
    var N$$7 = af$$1 || "";
    var a1 = aE || "";
    var av;
    var al = n$$6.title;
    var an = "7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|ppt|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xls|xml|z|zip";
    var aG = [aX];
    var R$$3 = [];
    var az = [];
    var ae$$1 = [];
    var aF = 500;
    var S$$3;
    var ag$$1;
    var T$$3;
    var U$$2;
    var ap = ["pk_campaign", "piwik_campaign", "utm_campaign", "utm_source", "utm_medium"];
    var ak = ["pk_kwd", "piwik_kwd", "utm_term"];
    var a9 = "_pk_";
    var X$$1;
    var ba;
    var V$$1 = false;
    var a4;
    var ar;
    var au;
    var ac$$1 = 63072E6;
    var ad$$1 = 18E5;
    var aw = 15768E6;
    var aa$$1 = n$$6.location.protocol === "https";
    var Q$$3 = false;
    var aA = {};
    var a5 = 200;
    var aQ = {};
    var a2 = {};
    var aN = false;
    var aL = false;
    var aJ;
    var aB;
    var Y$$1;
    var ao = I;
    var aM;
    var at;
    JAM.call(a7, null, [], JAM.policy.p4);
    JAM.call(aC, null, [], JAM.policy.p4);
    return{getVisitorId:v10, getVisitorInfo:v11, getAttributionInfo:v12, getAttributionCampaignName:v13, getAttributionCampaignKeyword:v14, getAttributionReferrerTimestamp:v15, getAttributionReferrerUrl:v16, setTrackerUrl:v17, setSiteId:v18, setCustomData:v19, getCustomData:v20, setCustomVariable:v21, getCustomVariable:v22, deleteCustomVariable:v23, setLinkTrackingTimer:v24, setDownloadExtensions:v25, addDownloadExtensions:v26, setDomains:v27, setIgnoreClasses:v28, setRequestMethod:v29, setReferrerUrl:v30, 
    setCustomUrl:v31, setDocumentTitle:v32, setDownloadClasses:v33, setLinkClasses:v34, setCampaignNameKey:v35, setCampaignKeywordKey:v36, discardHashTag:v37, setCookieNamePrefix:v38, setCookieDomain:v39, setCookiePath:v40, setVisitorCookieTimeout:v41, setSessionCookieTimeout:v42, setReferralCookieTimeout:v43, setConversionAttributionFirstReferrer:v44, disableCookies:v45, setDoNotTrack:v46, addListener:v47, enableLinkTracking:v49, setHeartBeatTimer:v50, killFrame:v51, redirectFile:v52, setCountPreRendered:v53, 
    trackGoal:v55, trackLink:v57, trackPageView:v60, trackSiteSearch:v62, setEcommerceView:v63, addEcommerceItem:v64, trackEcommerceOrder:v65, trackEcommerceCartUpdate:v66};
  }
  function o$$3() {
    return{push:G};
  }
  var e$$5;
  var a$$1 = {};
  var n$$6 = document;
  var c$$1 = navigator;
  var z$$2 = screen;
  var w$$5 = window;
  var k$$1 = false;
  var u = [];
  var g$$1 = w$$5.encodeURIComponent;
  var v = w$$5.decodeURIComponent;
  var d$$1 = unescape;
  var A;
  var D;
  JAM.call(J, null, [w$$5, "beforeunload", H, false], JAM.policy.p4);
  JAM.call(j$$1, null, [], JAM.policy.p4);
  Date.prototype.getTimeAlias = Date.prototype.getTime;
  A = JAM.new(t$$2, [], JAM.policy.p4);
  D = 0;
  var v347 = D < _paq.length;
  for (;v347;) {
    JAM.call(G, null, [_paq[D]], JAM.policy.p4);
    D = D + 1;
    v347 = D < _paq.length;
  }
  _paq = JAM.new(o$$3, [], JAM.policy.p4);
  return{addPlugin:v67, getTracker:v68, getAsyncTracker:v69};
}
function v5() {
  function v4(o$$2, f$$5) {
    function v3(p$$2) {
      var v921 = JAM.call(p$$2.charCodeAt, p$$2, [0], JAM.policy.p4);
      var v630 = "0000" + JAM.call(v921.toString, v921, [16], JAM.policy.p4);
      return "\\u" + JAM.call(v630.slice, v630, [-4], JAM.policy.p4);
    }
    function m$$4(s$$3, r$$1) {
      var q$$1;
      var p$$1;
      var t$$1 = s$$3[r$$1];
      var v631 = t$$1;
      if (v631) {
        v631 = typeof t$$1 === "object";
      }
      if (v631) {
        for (q$$1 in t$$1) {
          var v632 = Object.prototype.hasOwnProperty;
          if (JAM.call(v632.call, v632, [t$$1, q$$1], JAM.policy.p4)) {
            p$$1 = JAM.call(m$$4, null, [t$$1, q$$1], JAM.policy.p4);
            if (p$$1 !== undefined) {
              JAM.set(t$$1, q$$1, p$$1, JAM.policy.p2);
            } else {
              delete t$$1[q$$1];
            }
          }
        }
      }
      return JAM.call(f$$5.call, f$$5, [s$$3, r$$1, t$$1], JAM.policy.p4);
    }
    var n$$5;
    o$$2 = JAM.call(String, null, [o$$2], JAM.policy.p4);
    c.lastIndex = 0;
    if (JAM.call(c.test, c, [o$$2], JAM.policy.p4)) {
      o$$2 = JAM.call(o$$2.replace, o$$2, [c, v3], JAM.policy.p4);
    }
    var v633 = JAM.new(RegExp, ["^[\\],:{}\\s]*$"], JAM.policy.p4);
    var v922 = JAM.call(o$$2.replace, o$$2, [JAM.new(RegExp, ['\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})', "g"], JAM.policy.p4), "@"], JAM.policy.p4);
    var v819 = JAM.call(v922.replace, v922, [JAM.new(RegExp, ['"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?', "g"], JAM.policy.p4), "]"], JAM.policy.p4);
    if (JAM.call(v633.test, v633, [JAM.call(v819.replace, v819, [JAM.new(RegExp, ["(?:^|:|,)(?:\\s*\\[)+", "g"], JAM.policy.p4), ""], JAM.policy.p4)], JAM.policy.p4)) {
      var v353 = "(" + o$$2 + ")";
      if (JAM.isEval(eval)) {
        n$$5 = eval("introspect(JAM.policy.pFull) { " + v353 + " }");
      } else {
        n$$5 = JAM.call(eval, null, [v353]);
      }
      var v354;
      if (typeof f$$5 === "function") {
        v354 = JAM.call(m$$4, null, [{"":n$$5}, ""], JAM.policy.p4);
      } else {
        v354 = n$$5;
      }
      return v354;
    }
    throw JAM.new(SyntaxError, ["JSON.parse"], JAM.policy.p4);
  }
  function v2(o$$1, m$$3, n$$4) {
    var f$$4;
    j = "";
    b = "";
    if (typeof n$$4 === "number") {
      f$$4 = 0;
      var v356 = f$$4 < n$$4;
      for (;v356;) {
        b = b + " ";
        f$$4 = f$$4 + 1;
        v356 = f$$4 < n$$4;
      }
    } else {
      if (typeof n$$4 === "string") {
        b = n$$4;
      }
    }
    h$$4 = m$$3;
    var v822 = m$$3;
    if (v822) {
      v822 = typeof m$$3 !== "function";
    }
    var v640 = v822;
    if (v640) {
      var v823 = typeof m$$3 !== "object";
      if (!v823) {
        v823 = typeof m$$3.length !== "number";
      }
      v640 = v823;
    }
    if (v640) {
      throw JAM.new(Error, ["JSON.stringify"], JAM.policy.p4);
    }
    return JAM.call(g, null, ["", {"":o$$1}], JAM.policy.p4);
  }
  function d(f) {
    var v361;
    if (f < 10) {
      v361 = "0" + f;
    } else {
      v361 = f;
    }
    return v361;
  }
  function l(n$$1, m) {
    var v362 = Object.prototype.toString;
    var f$$1 = JAM.call(v362.apply, v362, [n$$1], JAM.policy.p4);
    if (f$$1 === "[object Date]") {
      var v363;
      if (JAM.call(isFinite, null, [JAM.call(n$$1.valueOf, n$$1, [], JAM.policy.p4)], JAM.policy.p4)) {
        v363 = JAM.call(n$$1.getUTCFullYear, n$$1, [], JAM.policy.p4) + "-" + JAM.call(d, null, [JAM.call(n$$1.getUTCMonth, n$$1, [], JAM.policy.p4) + 1], JAM.policy.p4) + "-" + JAM.call(d, null, [JAM.call(n$$1.getUTCDate, n$$1, [], JAM.policy.p4)], JAM.policy.p4) + "T" + JAM.call(d, null, [JAM.call(n$$1.getUTCHours, n$$1, [], JAM.policy.p4)], JAM.policy.p4) + ":" + JAM.call(d, null, [JAM.call(n$$1.getUTCMinutes, n$$1, [], JAM.policy.p4)], JAM.policy.p4) + ":" + JAM.call(d, null, [JAM.call(n$$1.getUTCSeconds, 
        n$$1, [], JAM.policy.p4)], JAM.policy.p4) + "Z";
      } else {
        v363 = null;
      }
      return v363;
    }
    var v827 = f$$1 === "[object String]";
    if (!v827) {
      v827 = f$$1 === "[object Number]";
    }
    var v645 = v827;
    if (!v645) {
      v645 = f$$1 === "[object Boolean]";
    }
    if (v645) {
      return JAM.call(n$$1.valueOf, n$$1, [], JAM.policy.p4);
    }
    var v646 = f$$1 !== "[object Array]";
    if (v646) {
      v646 = typeof n$$1.toJSON === "function";
    }
    if (v646) {
      return JAM.call(n$$1.toJSON, n$$1, [m], JAM.policy.p4);
    }
    return n$$1;
  }
  function a(f$$2) {
    function v1(m$$1) {
      var n$$2 = k[m$$1];
      var v367;
      if (typeof n$$2 === "string") {
        v367 = n$$2;
      } else {
        var v979 = JAM.call(m$$1.charCodeAt, m$$1, [0], JAM.policy.p4);
        var v831 = "0000" + JAM.call(v979.toString, v979, [16], JAM.policy.p4);
        v367 = "\\u" + JAM.call(v831.slice, v831, [-4], JAM.policy.p4);
      }
      return v367;
    }
    i$$1.lastIndex = 0;
    var v368;
    if (JAM.call(i$$1.test, i$$1, [f$$2], JAM.policy.p4)) {
      v368 = '"' + JAM.call(f$$2.replace, f$$2, [i$$1, v1], JAM.policy.p4) + '"';
    } else {
      v368 = '"' + f$$2 + '"';
    }
    return v368;
  }
  function g(s$$2, p) {
    var n$$3;
    var m$$2;
    var t;
    var f$$3;
    var q = j;
    var o;
    var r = p[s$$2];
    var v652 = r;
    if (v652) {
      v652 = typeof r === "object";
    }
    if (v652) {
      r = JAM.call(l, null, [r, s$$2], JAM.policy.p4);
    }
    if (typeof h$$4 === "function") {
      r = JAM.call(h$$4.call, h$$4, [p, s$$2, r], JAM.policy.p4);
    }
    var v385 = typeof r;
    introspect(JAM.policy.p5) {
      switch(v385) {
        case "string":
          return JAM.call(a, null, [r], JAM.policy.p4);
        case "number":
          var v371;
          var v654 = JAM.call(isFinite, null, [r], JAM.policy.p4);
          if (v654) {
            v371 = JAM.call(String, null, [r], JAM.policy.p4);
          } else {
            v371 = "null";
          }
          return v371;
        case "boolean":
        ;
        case "null":
          return JAM.call(String, null, [r], JAM.policy.p4);
        case "object":
          var v372 = !r;
          if (v372) {
            return "null";
          }
          j = j + b;
          o = [];
          var v933 = Object.prototype;
          var v834 = v933.toString;
          var v655 = JAM.call(v834.apply, v834, [r], JAM.policy.p4);
          var v377 = v655 === "[object Array]";
          if (v377) {
            f$$3 = r.length;
            n$$3 = 0;
            var v375 = n$$3 < f$$3;
            for (;v375;) {
              var v373 = o;
              var v374 = n$$3;
              var v656 = JAM.call(g, null, [n$$3, r], JAM.policy.p4);
              var v835 = !v656;
              if (v835) {
                v656 = "null";
              }
              introspect(JAM.policy.p2) {
                v373[v374] = v656;
              }
              n$$3 = n$$3 + 1;
              v375 = n$$3 < f$$3;
            }
            var v376;
            var v836 = o.length;
            var v658 = v836 === 0;
            if (v658) {
              v376 = "[]";
            } else {
              var v657;
              if (j) {
                var v1004 = "[\n" + j;
                var v1023 = ",\n" + j;
                var v1005 = JAM.call(o.join, o, [v1023], JAM.policy.p4);
                var v980 = v1004 + v1005;
                var v934 = v980 + "\n";
                var v837 = v934 + q;
                v657 = v837 + "]";
              } else {
                var v935 = JAM.call(o.join, o, [","], JAM.policy.p4);
                var v838 = "[" + v935;
                v657 = v838 + "]";
              }
              v376 = v657;
            }
            t = v376;
            j = q;
            return t;
          }
          var v659 = h$$4;
          if (v659) {
            var v839 = typeof h$$4;
            v659 = v839 === "object";
          }
          var v383 = v659;
          if (v383) {
            f$$3 = h$$4.length;
            n$$3 = 0;
            var v380 = n$$3 < f$$3;
            for (;v380;) {
              var v840 = h$$4[n$$3];
              var v660 = typeof v840;
              var v379 = v660 === "string";
              if (v379) {
                m$$2 = h$$4[n$$3];
                t = JAM.call(g, null, [m$$2, r], JAM.policy.p4);
                if (t) {
                  var v841 = JAM.call(a, null, [m$$2], JAM.policy.p4);
                  var v936;
                  if (j) {
                    v936 = ": ";
                  } else {
                    v936 = ":";
                  }
                  var v842 = v936;
                  var v661 = v841 + v842;
                  var v378 = v661 + t;
                  JAM.call(o.push, o, [v378], JAM.policy.p4);
                }
              }
              n$$3 = n$$3 + 1;
              v380 = n$$3 < f$$3;
            }
          } else {
            for (m$$2 in r) {
              var v843 = Object.prototype;
              var v662 = v843.hasOwnProperty;
              var v382 = JAM.call(v662.call, v662, [r, m$$2], JAM.policy.p4);
              if (v382) {
                t = JAM.call(g, null, [m$$2, r], JAM.policy.p4);
                if (t) {
                  var v844 = JAM.call(a, null, [m$$2], JAM.policy.p4);
                  var v937;
                  if (j) {
                    v937 = ": ";
                  } else {
                    v937 = ":";
                  }
                  var v845 = v937;
                  var v663 = v844 + v845;
                  var v381 = v663 + t;
                  JAM.call(o.push, o, [v381], JAM.policy.p4);
                }
              }
            }
          }
          var v384;
          var v846 = o.length;
          var v665 = v846 === 0;
          if (v665) {
            v384 = "{}";
          } else {
            var v664;
            if (j) {
              var v1006 = "{\n" + j;
              var v1024 = ",\n" + j;
              var v1007 = JAM.call(o.join, o, [v1024], JAM.policy.p4);
              var v981 = v1006 + v1007;
              var v938 = v981 + "\n";
              var v847 = v938 + q;
              v664 = v847 + "}";
            } else {
              var v939 = JAM.call(o.join, o, [","], JAM.policy.p4);
              var v848 = "{" + v939;
              v664 = v848 + "}";
            }
            v384 = v664;
          }
          t = v384;
          j = q;
          return t;
      }
    }
    return;
  }
  var c = JAM.new(RegExp, ["[\x00\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]", "g"], JAM.policy.p4);
  var e$$4 = '\\\\\\"\x00-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]';
  var i$$1 = JAM.new(RegExp, ["[" + e$$4, "g"], JAM.policy.p4);
  var j;
  var b;
  var k = {"\b":"\\b", "\t":"\\t", "\n":"\\n", "\f":"\\f", "\r":"\\r", '"':'\\"', "\\":"\\\\"};
  var h$$4;
  if (typeof JSON2.stringify !== "function") {
    JSON2.stringify = v2;
  }
  if (typeof JSON2.parse !== "function") {
    JSON2.parse = v4;
  }
  return;
}
function piwik_log(b$$2, f$$7, d$$2, g$$2) {
  function v0(i$$26, k$$2, j$$2, h$$7) {
    JAM.call(e$$6.setSiteId, e$$6, [k$$2], JAM.policy.p4);
    JAM.call(e$$6.setTrackerUrl, e$$6, [j$$2], JAM.policy.p4);
    JAM.call(e$$6.trackLink, e$$6, [i$$26, h$$7], JAM.policy.p4);
    return;
  }
  function a$$2(h$$6) {
    try {
      var v389 = "piwik_" + h$$6;
      if (JAM.isEval(eval)) {
        return eval("introspect(JAM.policy.pFull) { " + v389 + " }");
      } else {
        return JAM.call(eval, null, [v389]);
      }
    } catch (i$$25) {
    }
    return;
  }
  var c$$2;
  var e$$6 = JAM.call(Piwik.getTracker, Piwik, [d$$2, f$$7], JAM.policy.p4);
  JAM.call(e$$6.setDocumentTitle, e$$6, [b$$2], JAM.policy.p4);
  JAM.call(e$$6.setCustomData, e$$6, [g$$2], JAM.policy.p4);
  c$$2 = JAM.call(a$$2, null, ["tracker_pause"], JAM.policy.p4);
  if (c$$2) {
    JAM.call(e$$6.setLinkTrackingTimer, e$$6, [c$$2], JAM.policy.p4);
  }
  c$$2 = JAM.call(a$$2, null, ["download_extensions"], JAM.policy.p4);
  if (c$$2) {
    JAM.call(e$$6.setDownloadExtensions, e$$6, [c$$2], JAM.policy.p4);
  }
  c$$2 = JAM.call(a$$2, null, ["hosts_alias"], JAM.policy.p4);
  if (c$$2) {
    JAM.call(e$$6.setDomains, e$$6, [c$$2], JAM.policy.p4);
  }
  c$$2 = JAM.call(a$$2, null, ["ignore_classes"], JAM.policy.p4);
  if (c$$2) {
    JAM.call(e$$6.setIgnoreClasses, e$$6, [c$$2], JAM.policy.p4);
  }
  JAM.call(e$$6.trackPageView, e$$6, [], JAM.policy.p4);
  if (JAM.call(a$$2, null, ["install_tracker"], JAM.policy.p4)) {
    piwik_track = v0;
    JAM.call(e$$6.enableLinkTracking, e$$6, [], JAM.policy.p4);
  }
  return;
}
if (!this.JSON2) {
  this.JSON2 = {};
}
JAM.call(v5, null, [], JAM.policy.p4);
var _paq = _paq || [];
var v392 = Piwik;
if (!v392) {
  v392 = JAM.call(v70, null, [], JAM.policy.p4);
}
var Piwik = v392;
var piwik_track;
var v393;
if ("https:" == document.location.protocol) {
  v393 = "https://cms.demo.crash";
} else {
  v393 = "http://cms.demo.crash";
}
var pkBaseURL = v393;
var piwikTracker = JAM.call(Piwik.getTracker, Piwik, [pkBaseURL + "piwik.php", "crash"], JAM.policy.p4);
JAM.call(piwikTracker.trackPageView, piwikTracker, [], JAM.policy.p4);
JAM.call(piwikTracker.enableLinkTracking, piwikTracker, [], JAM.policy.p4)

