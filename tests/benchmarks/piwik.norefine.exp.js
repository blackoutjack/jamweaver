function v70() {
  function v69() {
    return A
  }
  function v68(i$$24, L$$17) {
    return new t$$2(i$$24, L$$17)
  }
  function v67(i$$23, L$$16) {
    JAM.set(a$$1, i$$23, L$$16, JAM.policy.p2);
    return
  }
  function p$$3(i$$2) {
    return"undefined" !== typeof i$$2
  }
  function h$$5(i$$5) {
    var v72 = typeof i$$5 === "string";
    if(!v72) {
      v72 = i$$5 instanceof String
    }
    return v72
  }
  function G() {
    var L;
    var N;
    var M;
    L = 0;
    var v75 = L < arguments.length;
    for(;v75;) {
      M = arguments[L];
      N = JAM.call(M.shift, M, [], JAM.policy.p3);
      if(h$$5(N)) {
        var v73 = A[N];
        JAM.call(v73.apply, v73, [A, M], JAM.policy.p3)
      }else {
        JAM.call(N.apply, N, [A, M], JAM.policy.p3)
      }
      L = L + 1;
      v75 = L < arguments.length
    }
    return
  }
  function J(N$$1, M$$1, L$$1, i$$6) {
    if(N$$1.addEventListener) {
      JAM.call(N$$1.addEventListener, N$$1, [M$$1, L$$1, i$$6], JAM.policy.p3);
      return true
    }
    if(N$$1.attachEvent) {
      return JAM.call(N$$1.attachEvent, N$$1, ["on" + M$$1, L$$1], JAM.policy.p3)
    }
    JAM.set(N$$1, "on" + M$$1, L$$1, JAM.policy.p2);
    return
  }
  function E(M$$2, P) {
    var L$$2 = "";
    var O;
    var N$$2;
    for(O in a$$1) {
      var v399 = Object.prototype.hasOwnProperty;
      if(JAM.call(v399.call, v399, [a$$1, O], JAM.policy.p3)) {
        N$$2 = a$$1[O][M$$2];
        if(typeof N$$2 === "function") {
          L$$2 = L$$2 + JAM.call(N$$2, null, [P], JAM.policy.p3)
        }
      }
    }
    return L$$2
  }
  function H() {
    var i$$7;
    E("unload");
    if(e$$5) {
      var v83 = JAM.call(i$$7.getTimeAlias, i$$7, [], JAM.policy.p3) < e$$5;
      do {
        i$$7 = new Date;
        v83 = JAM.call(i$$7.getTimeAlias, i$$7, [], JAM.policy.p3) < e$$5
      }while(v83)
    }
    return
  }
  function F() {
    var L$$3;
    if(!k$$1) {
      k$$1 = true;
      E("load");
      L$$3 = 0;
      var v84 = L$$3 < u.length;
      for(;v84;) {
        JAM.call(u[L$$3], u, [], JAM.policy.p3);
        L$$3 = L$$3 + 1;
        v84 = L$$3 < u.length
      }
    }
    return true
  }
  function j$$1() {
    function v6() {
      var v407 = k$$1;
      if(!v407) {
        v407 = JAM.call(/loaded|complete/.test, /loaded|complete/, [n$$6.readyState], JAM.policy.p3)
      }
      if(v407) {
        clearInterval(L$$4);
        F()
      }
      return
    }
    function i$$10() {
      if(!k$$1) {
        try {
          var v87 = n$$6.documentElement;
          JAM.call(v87.doScroll, v87, ["left"], JAM.policy.p3)
        }catch(M$$3) {
          JAM.call(setTimeout, null, [i$$10, 0]);
          return
        }
        F()
      }
      return
    }
    function i$$9() {
      if(n$$6.readyState === "complete") {
        JAM.call(n$$6.detachEvent, n$$6, ["onreadystatechange", i$$9], JAM.policy.p3);
        F()
      }
      return
    }
    function i$$8() {
      JAM.call(n$$6.removeEventListener, n$$6, ["DOMContentLoaded", i$$8, false], JAM.policy.p3);
      F();
      return
    }
    var L$$4;
    if(n$$6.addEventListener) {
      J(n$$6, "DOMContentLoaded", i$$8)
    }else {
      if(n$$6.attachEvent) {
        JAM.call(n$$6.attachEvent, n$$6, ["onreadystatechange", i$$9], JAM.policy.p3);
        var v409 = n$$6.documentElement.doScroll;
        if(v409) {
          v409 = w$$5 === w$$5.top
        }
        if(v409) {
          i$$10()
        }
      }
    }
    var v410 = new RegExp("WebKit");
    if(JAM.call(v410.test, v410, [c$$1.userAgent], JAM.policy.p3)) {
      L$$4 = JAM.call(setInterval, null, [v6, 10])
    }
    J(w$$5, "load", F, false);
    return
  }
  function q$$2() {
    var i$$11 = "";
    try {
      i$$11 = w$$5.top.document.referrer
    }catch(M$$4) {
      if(w$$5.parent) {
        try {
          i$$11 = w$$5.parent.document.referrer
        }catch(L$$5) {
          i$$11 = ""
        }
      }
    }
    if(i$$11 === "") {
      i$$11 = n$$6.referrer
    }
    return i$$11
  }
  function f$$6(i$$12) {
    var M$$5 = new RegExp("^([a-z]+):");
    var L$$6 = JAM.call(M$$5.exec, M$$5, [i$$12], JAM.policy.p3);
    var v98;
    if(L$$6) {
      v98 = L$$6[1]
    }else {
      v98 = null
    }
    return v98
  }
  function b$$1(i$$13) {
    var M$$6 = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)");
    var L$$7 = JAM.call(M$$6.exec, M$$6, [i$$13], JAM.policy.p3);
    var v99;
    if(L$$7) {
      v99 = L$$7[1]
    }else {
      v99 = i$$13
    }
    return v99
  }
  function x$$48(M$$7, L$$8) {
    var P$$1 = new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)");
    var O$$1 = JAM.call(P$$1.exec, P$$1, [M$$7], JAM.policy.p3);
    var N$$3 = new RegExp("(?:^|&)" + L$$8 + "=([^&]*)");
    var v101;
    if(O$$1) {
      v101 = JAM.call(N$$3.exec, N$$3, [O$$1[1]], JAM.policy.p3)
    }else {
      v101 = 0
    }
    var i$$14 = v101;
    var v102;
    if(i$$14) {
      v102 = JAM.call(v, null, [i$$14[1]], JAM.policy.p3)
    }else {
      v102 = ""
    }
    return v102
  }
  function I(ab) {
    function ac(ai) {
      var ah = "";
      var ag;
      var W$$1;
      ag = 7;
      var v104 = ag >= 0;
      for(;v104;) {
        W$$1 = ai >>> ag * 4 & 15;
        ah = ah + JAM.call(W$$1.toString, W$$1, [16], JAM.policy.p3);
        ag = ag - 1;
        v104 = ag >= 0
      }
      return ah
    }
    function N$$4(W, i$$16) {
      return W << i$$16 | W >>> 32 - i$$16
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
    ab = JAM.call(d$$1, null, [JAM.call(g$$1, null, [ab], JAM.policy.p3)], JAM.policy.p3);
    L$$9 = ab.length;
    ae = 0;
    var v110 = ae < L$$9 - 3;
    for(;v110;) {
      ad = JAM.call(ab.charCodeAt, ab, [ae], JAM.policy.p3) << 24 | JAM.call(ab.charCodeAt, ab, [ae + 1], JAM.policy.p3) << 16 | JAM.call(ab.charCodeAt, ab, [ae + 2], JAM.policy.p3) << 8 | JAM.call(ab.charCodeAt, ab, [ae + 3], JAM.policy.p3);
      JAM.call(T.push, T, [ad], JAM.policy.p3);
      ae = ae + 4;
      v110 = ae < L$$9 - 3
    }
    switch(L$$9 & 3) {
      case 0:
        ae = 2147483648;
        break;
      case 1:
        ae = JAM.call(ab.charCodeAt, ab, [L$$9 - 1], JAM.policy.p3) << 24 | 8388608;
        break;
      case 2:
        ae = JAM.call(ab.charCodeAt, ab, [L$$9 - 2], JAM.policy.p3) << 24 | JAM.call(ab.charCodeAt, ab, [L$$9 - 1], JAM.policy.p3) << 16 | 32768;
        break;
      case 3:
        ae = JAM.call(ab.charCodeAt, ab, [L$$9 - 3], JAM.policy.p3) << 24 | JAM.call(ab.charCodeAt, ab, [L$$9 - 2], JAM.policy.p3) << 16 | JAM.call(ab.charCodeAt, ab, [L$$9 - 1], JAM.policy.p3) << 8 | 128
    }
    JAM.call(T.push, T, [ae], JAM.policy.p3);
    var v115 = (T.length & 15) !== 14;
    for(;v115;) {
      JAM.call(T.push, T, [0], JAM.policy.p3);
      v115 = (T.length & 15) !== 14
    }
    JAM.call(T.push, T, [L$$9 >>> 29], JAM.policy.p3);
    JAM.call(T.push, T, [L$$9 << 3 & 4294967295], JAM.policy.p3);
    Q = 0;
    var v136 = Q < T.length;
    for(;v136;) {
      ae = 0;
      var v119 = ae < 16;
      for(;v119;) {
        JAM.set(M$$8, ae, T[Q + ae], JAM.policy.p2);
        ae = ae + 1;
        v119 = ae < 16
      }
      ae = 16;
      var v122 = ae <= 79;
      for(;v122;) {
        var v120 = M$$8;
        var v121 = ae;
        var v1087 = N$$4(M$$8[ae - 3] ^ M$$8[ae - 8] ^ M$$8[ae - 14] ^ M$$8[ae - 16], 1);
        v120[v121] = v1087;
        ae = ae + 1;
        v122 = ae <= 79
      }
      aa = U;
      Z = S;
      Y = R;
      X = P$$2;
      V = O$$2;
      ae = 0;
      var v124 = ae <= 19;
      for(;v124;) {
        af = N$$4(aa, 5) + (Z & Y | ~Z & X) + V + M$$8[ae] + 1518500249 & 4294967295;
        V = X;
        X = Y;
        Y = N$$4(Z, 30);
        Z = aa;
        aa = af;
        ae = ae + 1;
        v124 = ae <= 19
      }
      ae = 20;
      var v126 = ae <= 39;
      for(;v126;) {
        af = N$$4(aa, 5) + (Z ^ Y ^ X) + V + M$$8[ae] + 1859775393 & 4294967295;
        V = X;
        X = Y;
        Y = N$$4(Z, 30);
        Z = aa;
        aa = af;
        ae = ae + 1;
        v126 = ae <= 39
      }
      ae = 40;
      var v128 = ae <= 59;
      for(;v128;) {
        af = N$$4(aa, 5) + (Z & Y | Z & X | Y & X) + V + M$$8[ae] + 2400959708 & 4294967295;
        V = X;
        X = Y;
        Y = N$$4(Z, 30);
        Z = aa;
        aa = af;
        ae = ae + 1;
        v128 = ae <= 59
      }
      ae = 60;
      var v130 = ae <= 79;
      for(;v130;) {
        af = N$$4(aa, 5) + (Z ^ Y ^ X) + V + M$$8[ae] + 3395469782 & 4294967295;
        V = X;
        X = Y;
        Y = N$$4(Z, 30);
        Z = aa;
        aa = af;
        ae = ae + 1;
        v130 = ae <= 79
      }
      U = U + aa & 4294967295;
      S = S + Z & 4294967295;
      R = R + Y & 4294967295;
      P$$2 = P$$2 + X & 4294967295;
      O$$2 = O$$2 + V & 4294967295;
      Q = Q + 16;
      v136 = Q < T.length
    }
    af = ac(U) + ac(S) + ac(R) + ac(P$$2) + ac(O$$2);
    return JAM.call(af.toLowerCase, af, [], JAM.policy.p3)
  }
  function C(M$$9, i$$17, L$$10) {
    if(M$$9 === "translate.googleusercontent.com") {
      if(L$$10 === "") {
        L$$10 = i$$17
      }
      i$$17 = x$$48(i$$17, "u");
      M$$9 = b$$1(i$$17)
    }else {
      var v443 = M$$9 === "cc.bingj.com";
      if(!v443) {
        var v699 = M$$9 === "webcache.googleusercontent.com";
        if(!v699) {
          v699 = JAM.call(M$$9.slice, M$$9, [0, 5], JAM.policy.p3) === "74.6."
        }
        v443 = v699
      }
      if(v443) {
        i$$17 = n$$6.links[0].href;
        M$$9 = b$$1(i$$17)
      }
    }
    return[M$$9, i$$17, L$$10]
  }
  function r$$2(L$$11) {
    var i$$18 = L$$11.length;
    if(JAM.call(L$$11.charAt, L$$11, [i$$18 = i$$18 - 1], JAM.policy.p3) === ".") {
      L$$11 = JAM.call(L$$11.slice, L$$11, [0, i$$18], JAM.policy.p3)
    }
    if(JAM.call(L$$11.slice, L$$11, [0, 2], JAM.policy.p3) === "*.") {
      L$$11 = JAM.call(L$$11.slice, L$$11, [1], JAM.policy.p3)
    }
    return L$$11
  }
  function K(L$$12) {
    if(!h$$5(L$$12)) {
      var v145 = L$$12.text;
      if(!v145) {
        v145 = ""
      }
      L$$12 = v145;
      var i$$19 = JAM.call(n$$6.getElementsByTagName, n$$6, ["title"], JAM.policy.p3);
      var v449 = i$$19;
      if(v449) {
        v449 = p$$3(i$$19[0])
      }
      if(v449) {
        L$$12 = i$$19[0].text
      }
    }
    return L$$12
  }
  function s$$4(O$$3, S$$1) {
    var U$$1 = "Piwik_Overlay";
    var R$$1 = n$$6.referrer;
    var i$$20 = O$$3;
    i$$20 = JAM.call(i$$20.substring, i$$20, [0, i$$20.length - 9], JAM.policy.p3);
    var v451;
    if(JAM.call(i$$20.substring, i$$20, [0, 7], JAM.policy.p3) === "http://") {
      v451 = 7
    }else {
      v451 = 8
    }
    JAM.call(i$$20.substring, i$$20, [v451, i$$20.length], JAM.policy.p3);
    var v452;
    if(JAM.call(R$$1.substring, R$$1, [0, 7], JAM.policy.p3) === "http://") {
      v452 = 7
    }else {
      v452 = 8
    }
    JAM.call(R$$1.substring, R$$1, [v452, R$$1.length], JAM.policy.p3);
    if(JAM.call(R$$1.substring, R$$1, [0, i$$20.length], JAM.policy.p3) === i$$20) {
      var M$$10 = new RegExp("^" + i$$20 + "index\\.php\\?module=Overlay&action=startOverlaySession&idsite=([0-9]+)&period=([^&]+)&date=([^&]+)$");
      var N$$5 = JAM.call(R$$1.match, R$$1, [M$$10], JAM.policy.p3);
      if(N$$5) {
        var P$$3 = N$$5[1];
        if(parseInt(P$$3, 10) !== S$$1) {
          return false
        }
        var Q$$1 = N$$5[2];
        var L$$13 = N$$5[3];
        window.name = U$$1 + "###" + Q$$1 + "###" + L$$13
      }
    }
    var v158 = w$$5.name;
    var T$$1 = JAM.call(v158.split, v158, ["###"], JAM.policy.p3);
    var v159 = T$$1.length === 3;
    if(v159) {
      v159 = T$$1[0] === U$$1
    }
    return v159
  }
  function B(M$$11, S$$2) {
    function v7() {
      var v459 = this.readyState === "loaded";
      if(!v459) {
        v459 = this.readyState === "complete"
      }
      if(v459) {
        O$$4()
      }
      return
    }
    function O$$4() {
      if(!L$$14) {
        L$$14 = true;
        JAM.call(Piwik_Overlay_Client.initialize, Piwik_Overlay_Client, [R$$2, S$$2, N$$6, i$$21], JAM.policy.p3)
      }
      return
    }
    var v162 = window.name;
    var T$$2 = JAM.call(v162.split, v162, ["###"], JAM.policy.p3);
    var R$$2 = JAM.call(M$$11.substring, M$$11, [0, M$$11.length - 9], JAM.policy.p3);
    var N$$6 = T$$2[1];
    var i$$21 = T$$2[2];
    var L$$14 = false;
    var Q$$2 = JAM.call(document.createElement, document, ["script"], JAM.policy.p3);
    Q$$2.type = "text/javascript";
    JAM.set(Q$$2, "onreadystatechange", v7);
    JAM.set(Q$$2, "onload", O$$4);
    Q$$2.src = R$$2 + "plugins/Overlay/client/client.js?v=1";
    var P$$4 = JAM.call(document.getElementsByTagName, document, ["head"], JAM.policy.p3)[0];
    JAM.call(P$$4.appendChild, P$$4, [Q$$2], JAM.policy.p3);
    return
  }
  function t$$2(af$$1, aE) {
    function v66(be$$72) {
      var be$$inline_39 = be$$72;
      if(p$$3(be$$inline_39)) {
        aV("", be$$inline_39, "", "", "", "")
      }
      return
    }
    function v65(be$$71, bi$$12, bh$$21, bg$$30, bf$$41, bj$$9) {
      var be$$inline_32 = be$$71;
      var bi$$inline_33 = bi$$12;
      var bh$$inline_34 = bh$$21;
      var bg$$inline_35 = bg$$30;
      var bf$$inline_36 = bf$$41;
      var bj$$inline_37 = bj$$9;
      var v461 = String(be$$inline_32).length;
      if(v461) {
        v461 = p$$3(bi$$inline_33)
      }
      if(v461) {
        aV(be$$inline_32, bi$$inline_33, bh$$inline_34, bg$$inline_35, bf$$inline_36, bj$$inline_37)
      }
      return
    }
    function v64(bi$$11, be$$70, bg$$29, bf$$40, bh$$20) {
      if(bi$$11.length) {
        JAM.set(aQ, bi$$11, [bi$$11, be$$70, bg$$29, bf$$40, bh$$20], JAM.policy.p2)
      }
      return
    }
    function v63(bh$$19, be$$69, bg$$28, bf$$39) {
      var v462 = !p$$3(bg$$28);
      if(!v462) {
        v462 = !bg$$28.length
      }
      if(v462) {
        bg$$28 = ""
      }else {
        if(bg$$28 instanceof Array) {
          bg$$28 = JAM.call(JSON2.stringify, JSON2, [bg$$28], JAM.policy.p3)
        }
      }
      aA[5] = ["_pkc", bg$$28];
      var v463 = p$$3(bf$$39);
      if(v463) {
        v463 = String(bf$$39).length
      }
      if(v463) {
        aA[2] = ["_pkp", bf$$39]
      }
      var v715 = !p$$3(bh$$19);
      if(!v715) {
        v715 = !bh$$19.length
      }
      var v464 = v715;
      if(v464) {
        var v716 = !p$$3(be$$69);
        if(!v716) {
          v716 = !be$$69.length
        }
        v464 = v716
      }
      if(v464) {
        return
      }
      var v465 = p$$3(bh$$19);
      if(v465) {
        v465 = bh$$19.length
      }
      if(v465) {
        aA[3] = ["_pks", bh$$19]
      }
      var v466 = !p$$3(be$$69);
      if(!v466) {
        v466 = !be$$69.length
      }
      if(v466) {
        be$$69 = ""
      }
      aA[4] = ["_pkn", be$$69];
      return
    }
    function v62(be$$68, bg$$27, bf$$38) {
      function v61() {
        var bh$$inline_27 = bg$$27;
        var bf$$inline_28 = bf$$38;
        var v720 = "search=" + JAM.call(g$$1, null, [be$$68], JAM.policy.p3);
        var v879;
        if(bh$$inline_27) {
          v879 = "&search_cat=" + JAM.call(g$$1, null, [bh$$inline_27], JAM.policy.p3)
        }else {
          v879 = ""
        }
        var v467 = v720 + v879;
        var v722;
        if(p$$3(bf$$inline_28)) {
          v722 = "&search_count=" + bf$$inline_28
        }else {
          v722 = ""
        }
        var bg$$inline_30 = am(v467 + v722, void 0, "sitesearch");
        aq(bg$$inline_30, aF);
        return
      }
      ai$$1(v61);
      return
    }
    function v60(be$$67, bf$$37) {
      function v59() {
        ay(be$$67, bf$$37);
        return
      }
      function v58() {
        B(N$$7, a1);
        return
      }
      if(s$$4(N$$7, a1)) {
        ai$$1(v58)
      }else {
        ai$$1(v59)
      }
      return
    }
    function v57(bf$$36, be$$66, bg$$26) {
      function v56() {
        aZ(bf$$36, be$$66, bg$$26);
        return
      }
      ai$$1(v56);
      return
    }
    function v55(be$$65, bg$$25, bf$$35) {
      function v54() {
        var v469 = "idgoal=" + be$$65;
        var v723;
        if(bg$$25) {
          v723 = "&revenue=" + bg$$25
        }else {
          v723 = ""
        }
        var bf$$inline_24 = am(v469 + v723, bf$$35, "goal");
        aq(bf$$inline_24, aF);
        return
      }
      ai$$1(v54);
      return
    }
    function v53(be$$64) {
      ar = be$$64;
      return
    }
    function v52(be$$63) {
      if(w$$5.location.protocol === "file:") {
        w$$5.location = be$$63
      }
      return
    }
    function v51() {
      if(w$$5.location !== w$$5.top.location) {
        w$$5.top.location = w$$5.location
      }
      return
    }
    function v50(bg$$24, bf$$34) {
      var be$$62 = new Date;
      S$$3 = JAM.call(be$$62.getTime, be$$62, [], JAM.policy.p3) + bg$$24 * 1E3;
      ag$$1 = bf$$34 * 1E3;
      return
    }
    function v49(be$$61) {
      function v48() {
        ax(be$$61);
        return
      }
      if(k$$1) {
        ax(be$$61)
      }else {
        JAM.call(u.push, u, [v48], JAM.policy.p3)
      }
      return
    }
    function v47(bf$$33, be$$60) {
      aO(bf$$33, be$$60);
      return
    }
    function v46(bf$$32) {
      var v183 = c$$1.doNotTrack;
      if(!v183) {
        v183 = c$$1.msDoNotTrack
      }
      var be$$59 = v183;
      var v184 = bf$$32;
      if(v184) {
        var v475 = be$$59 === "yes";
        if(!v475) {
          v475 = be$$59 === "1"
        }
        v184 = v475
      }
      a4 = v184;
      if(a4) {
        JAM.call(this.disableCookies, this, [], JAM.policy.p3)
      }
      return
    }
    function v45() {
      V$$1 = true;
      introspect(JAM.policy.p2) {
        a2.cookie = "0"
      }
      return
    }
    function v44(be$$58) {
      au = be$$58;
      return
    }
    function v43(be$$57) {
      aw = be$$57 * 1E3;
      return
    }
    function v42(be$$56) {
      ad$$1 = be$$56 * 1E3;
      return
    }
    function v41(be$$55) {
      ac$$1 = be$$55 * 1E3;
      return
    }
    function v40(be$$54) {
      ba = be$$54;
      aC();
      return
    }
    function v39(be$$53) {
      X$$1 = r$$2(be$$53);
      aC();
      return
    }
    function v38(be$$52) {
      a9 = be$$52;
      Q$$3 = Z$$1();
      return
    }
    function v37(be$$51) {
      T$$3 = be$$51;
      return
    }
    function v36(be$$50) {
      var v185;
      if(h$$5(be$$50)) {
        v185 = [be$$50]
      }else {
        v185 = be$$50
      }
      ak = v185;
      return
    }
    function v35(be$$49) {
      var v186;
      if(h$$5(be$$49)) {
        v186 = [be$$49]
      }else {
        v186 = be$$49
      }
      ap = v186;
      return
    }
    function v34(be$$48) {
      var v187;
      if(h$$5(be$$48)) {
        v187 = [be$$48]
      }else {
        v187 = be$$48
      }
      ae$$1 = v187;
      return
    }
    function v33(be$$47) {
      var v188;
      if(h$$5(be$$47)) {
        v188 = [be$$47]
      }else {
        v188 = be$$47
      }
      az = v188;
      return
    }
    function v32(be$$46) {
      al = be$$46;
      return
    }
    function v31(be$$45) {
      JSCompiler_inline_label_aW_20: {
        var bg$$inline_16 = bb;
        var be$$inline_17 = be$$45;
        var bh$$inline_18 = f$$6(be$$inline_17);
        var bf$$inline_19;
        if(bh$$inline_18) {
          av = be$$inline_17;
          break JSCompiler_inline_label_aW_20
        }
        if(JAM.call(be$$inline_17.slice, be$$inline_17, [0, 1], JAM.policy.p3) === "/") {
          av = f$$6(bg$$inline_16) + "://" + b$$1(bg$$inline_16) + be$$inline_17;
          break JSCompiler_inline_label_aW_20
        }
        bg$$inline_16 = a6(bg$$inline_16);
        if((bf$$inline_19 = JAM.call(bg$$inline_16.indexOf, bg$$inline_16, ["?"], JAM.policy.p3)) >= 0) {
          bg$$inline_16 = JAM.call(bg$$inline_16.slice, bg$$inline_16, [0, bf$$inline_19], JAM.policy.p3)
        }
        if((bf$$inline_19 = JAM.call(bg$$inline_16.lastIndexOf, bg$$inline_16, ["/"], JAM.policy.p3)) !== bg$$inline_16.length - 1) {
          bg$$inline_16 = JAM.call(bg$$inline_16.slice, bg$$inline_16, [0, bf$$inline_19 + 1], JAM.policy.p3)
        }
        av = bg$$inline_16 + be$$inline_17
      }
      return
    }
    function v30(be$$44) {
      aK = be$$44;
      return
    }
    function v29(be$$43) {
      aI = be$$43 || "GET";
      return
    }
    function v28(be$$42) {
      var v194;
      if(h$$5(be$$42)) {
        v194 = [be$$42]
      }else {
        v194 = be$$42
      }
      R$$3 = v194;
      return
    }
    function v27(be$$41) {
      var v195;
      if(h$$5(be$$41)) {
        v195 = [be$$41]
      }else {
        v195 = be$$41
      }
      aG = v195;
      JAM.call(aG.push, aG, [aX], JAM.policy.p3);
      return
    }
    function v26(be$$40) {
      an = an + ("|" + be$$40);
      return
    }
    function v25(be$$39) {
      an = be$$39;
      return
    }
    function v24(be$$38) {
      aF = be$$38;
      return
    }
    function v23(be$$37, bf$$31) {
      if(JAM.call(this.getCustomVariable, this, [be$$37, bf$$31], JAM.policy.p3)) {
        JAM.call(this.setCustomVariable, this, [be$$37, "", "", bf$$31], JAM.policy.p3)
      }
      return
    }
    function v22(bf$$30, bg$$23) {
      var be$$36;
      if(!p$$3(bg$$23)) {
        bg$$23 = "visit"
      }
      var v490 = bg$$23 === "page";
      if(!v490) {
        v490 = bg$$23 === 3
      }
      if(v490) {
        be$$36 = aA[bf$$30]
      }else {
        var v491 = bg$$23 === "visit";
        if(!v491) {
          v491 = bg$$23 === 2
        }
        if(v491) {
          if(Q$$3 === false) {
            Q$$3 = Z$$1()
          }
          be$$36 = Q$$3[bf$$30]
        }
      }
      var v492 = !p$$3(be$$36);
      if(!v492) {
        var v732 = be$$36;
        if(v732) {
          v732 = be$$36[0] === ""
        }
        v492 = v732
      }
      if(v492) {
        return false
      }
      return be$$36
    }
    function v21(bf$$29, be$$35, bi$$10, bg$$22) {
      var bh$$18;
      if(!p$$3(bg$$22)) {
        bg$$22 = "visit"
      }
      if(bf$$29 > 0) {
        var v203;
        var v734 = p$$3(be$$35);
        if(v734) {
          v734 = !h$$5(be$$35)
        }
        if(v734) {
          v203 = String(be$$35)
        }else {
          v203 = be$$35
        }
        be$$35 = v203;
        var v204;
        var v735 = p$$3(bi$$10);
        if(v735) {
          v735 = !h$$5(bi$$10)
        }
        if(v735) {
          v204 = String(bi$$10)
        }else {
          v204 = bi$$10
        }
        bi$$10 = v204;
        bh$$18 = [JAM.call(be$$35.slice, be$$35, [0, a5], JAM.policy.p3), JAM.call(bi$$10.slice, bi$$10, [0, a5], JAM.policy.p3)];
        var v496 = bg$$22 === "visit";
        if(!v496) {
          v496 = bg$$22 === 2
        }
        if(v496) {
          if(Q$$3 === false) {
            Q$$3 = Z$$1()
          }
          JAM.set(Q$$3, bf$$29, bh$$18, JAM.policy.p2)
        }else {
          var v497 = bg$$22 === "page";
          if(!v497) {
            v497 = bg$$22 === 3
          }
          if(v497) {
            JAM.set(aA, bf$$29, bh$$18, JAM.policy.p2)
          }
        }
      }
      return
    }
    function v20() {
      return U$$2
    }
    function v19(be$$34, bf$$28) {
      if(typeof be$$34 === "object") {
        U$$2 = be$$34
      }else {
        if(!U$$2) {
          U$$2 = []
        }
        JAM.set(U$$2, be$$34, bf$$28, JAM.policy.p2)
      }
      return
    }
    function v18(be$$33) {
      a1 = be$$33;
      return
    }
    function v17(be$$32) {
      N$$7 = be$$32;
      return
    }
    function v16() {
      return i$$22()[3]
    }
    function v15() {
      return i$$22()[2]
    }
    function v14() {
      return i$$22()[1]
    }
    function v13() {
      return i$$22()[0]
    }
    function v12() {
      return i$$22()
    }
    function v11() {
      return L$$15()
    }
    function v10() {
      return L$$15()[1]
    }
    function aS(bk, bh, bg, bj, bf, bi) {
      if(V$$1) {
        return
      }
      var be;
      if(bg) {
        be = new Date;
        JAM.call(be.setTime, be, [JAM.call(be.getTime, be, [], JAM.policy.p3) + bg], JAM.policy.p3)
      }
      var v219 = n$$6;
      var v986 = bk + "=" + JAM.call(g$$1, null, [bh], JAM.policy.p3);
      var v1014;
      if(bg) {
        v1014 = ";expires=" + JAM.call(be.toGMTString, be, [], JAM.policy.p3)
      }else {
        v1014 = ""
      }
      var v738 = v986 + v1014 + ";path=" + (bj || "/");
      var v886;
      if(bf) {
        v886 = ";domain=" + bf
      }else {
        v886 = ""
      }
      var v500 = v738 + v886;
      var v740;
      if(bi) {
        v740 = ";secure"
      }else {
        v740 = ""
      }
      var v501 = v740;
      introspect(JAM.policy.p2) {
        v219.cookie = v500 + v501
      }
      return
    }
    function ab$$1(bg$$1) {
      if(V$$1) {
        return 0
      }
      var be$$1 = new RegExp("(^|;)[ ]*" + bg$$1 + "=([^;]*)");
      var bf$$1 = JAM.call(be$$1.exec, be$$1, [n$$6.cookie], JAM.policy.p3);
      var v222;
      if(bf$$1) {
        v222 = JAM.call(v, null, [bf$$1[2]], JAM.policy.p3)
      }else {
        v222 = 0
      }
      return v222
    }
    function a6(be$$2) {
      var bf$$2;
      if(T$$3) {
        bf$$2 = new RegExp("#.*");
        return JAM.call(be$$2.replace, be$$2, [bf$$2, ""], JAM.policy.p3)
      }
      return be$$2
    }
    function aH(bh$$2) {
      var bf$$4;
      var be$$4;
      var bg$$3;
      bf$$4 = 0;
      var v230 = bf$$4 < aG.length;
      for(;v230;) {
        var v505 = aG[bf$$4];
        be$$4 = r$$2(JAM.call(v505.toLowerCase, v505, [], JAM.policy.p3));
        if(bh$$2 === be$$4) {
          return true
        }
        if(JAM.call(be$$4.slice, be$$4, [0, 1], JAM.policy.p3) === ".") {
          if(bh$$2 === JAM.call(be$$4.slice, be$$4, [1], JAM.policy.p3)) {
            return true
          }
          bg$$3 = bh$$2.length - be$$4.length;
          var v509 = bg$$3 > 0;
          if(v509) {
            v509 = JAM.call(bh$$2.slice, bh$$2, [bg$$3], JAM.policy.p3) === be$$4
          }
          if(v509) {
            return true
          }
        }
        bf$$4 = bf$$4 + 1;
        v230 = bf$$4 < aG.length
      }
      return false
    }
    function bd(be$$5) {
      function v8() {
        return
      }
      var bf$$5 = new Image(1, 1);
      JAM.set(bf$$5, "onload", v8);
      var v231 = bf$$5;
      var v742 = N$$7;
      var v887;
      if(JAM.call(N$$7.indexOf, N$$7, ["?"], JAM.policy.p3) < 0) {
        v887 = "?"
      }else {
        v887 = "&"
      }
      v231.src = v742 + v887 + be$$5;
      return
    }
    function aT(be$$6) {
      function v9() {
        var v512 = this.readyState === 4;
        if(v512) {
          v512 = this.status !== 200
        }
        if(v512) {
          bd(be$$6)
        }
        return
      }
      try {
        var v233;
        if(w$$5.XMLHttpRequest) {
          v233 = new w$$5.XMLHttpRequest
        }else {
          var v514;
          if(w$$5.ActiveXObject) {
            v514 = JAM.new(ActiveXObject, ["Microsoft.XMLHTTP"])
          }else {
            v514 = null
          }
          v233 = v514
        }
        var bg$$4 = v233;
        JAM.call(bg$$4.open, bg$$4, ["POST", N$$7, true], JAM.policy.p3);
        JAM.set(bg$$4, "onreadystatechange", v9);
        JAM.call(bg$$4.setRequestHeader, bg$$4, ["Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"], JAM.policy.p3);
        JAM.call(bg$$4.send, bg$$4, [be$$6], JAM.policy.p3)
      }catch(bf$$6) {
        bd(be$$6)
      }
      return
    }
    function aq(bg$$5, bf$$7) {
      var be$$7 = new Date;
      if(!a4) {
        if(aI === "POST") {
          aT(bg$$5)
        }else {
          bd(bg$$5)
        }
        e$$5 = JAM.call(be$$7.getTime, be$$7, [], JAM.policy.p3) + bf$$7
      }
      return
    }
    function aR(be$$8) {
      return a9 + be$$8 + "." + a1 + "." + aM
    }
    function P$$5() {
      if(V$$1) {
        return"0"
      }
      if(!p$$3(c$$1.cookieEnabled)) {
        var be$$9 = aR("testcookie");
        aS(be$$9, "1");
        var v238;
        if(ab$$1(be$$9) === "1") {
          v238 = "1"
        }else {
          v238 = "0"
        }
        return v238
      }
      var v240;
      if(c$$1.cookieEnabled) {
        v240 = "1"
      }else {
        v240 = "0"
      }
      return v240
    }
    function aC() {
      var v241 = JAM.call(ao, null, [(X$$1 || aX) + (ba || "/")], JAM.policy.p3);
      aM = JAM.call(v241.slice, v241, [0, 4], JAM.policy.p3);
      return
    }
    function Z$$1() {
      var bf$$8 = aR("cvar");
      var be$$10 = ab$$1(bf$$8);
      if(be$$10.length) {
        be$$10 = JAM.call(JSON2.parse, JSON2, [be$$10], JAM.policy.p3);
        if(typeof be$$10 === "object") {
          return be$$10
        }
      }
      return{}
    }
    function a0() {
      var be$$11 = new Date;
      aJ = JAM.call(be$$11.getTime, be$$11, [], JAM.policy.p3);
      return
    }
    function L$$15() {
      var bf$$10 = new Date;
      var be$$13 = JAM.call(Math.round, Math, [JAM.call(bf$$10.getTime, bf$$10, [], JAM.policy.p3) / 1E3], JAM.policy.p3);
      var bh$$4 = ab$$1(aR("id"));
      var bg$$7;
      if(bh$$4) {
        bg$$7 = JAM.call(bh$$4.split, bh$$4, ["."], JAM.policy.p3);
        JAM.call(bg$$7.unshift, bg$$7, ["0"], JAM.policy.p3)
      }else {
        if(!at) {
          var v989 = c$$1.userAgent;
          if(!v989) {
            v989 = ""
          }
          var v953 = v989;
          var v990 = c$$1.platform;
          if(!v990) {
            v990 = ""
          }
          var v246 = JAM.call(ao, null, [v953 + v990 + JAM.call(JSON2.stringify, JSON2, [a2], JAM.policy.p3) + be$$13], JAM.policy.p3);
          at = JAM.call(v246.slice, v246, [0, 16], JAM.policy.p3)
        }
        bg$$7 = ["1", at, be$$13, 0, be$$13, "", ""]
      }
      return bg$$7
    }
    function i$$22() {
      var be$$14 = ab$$1(aR("ref"));
      if(be$$14.length) {
        try {
          be$$14 = JAM.call(JSON2.parse, JSON2, [be$$14], JAM.policy.p3);
          if(typeof be$$14 === "object") {
            return be$$14
          }
        }catch(bf$$11) {
        }
      }
      return["", "", 0, ""]
    }
    function am(bg$$8, bF, bG, bi$$2) {
      var bD;
      var bf$$12 = new Date;
      var bo = JAM.call(Math.round, Math, [JAM.call(bf$$12.getTime, bf$$12, [], JAM.policy.p3) / 1E3], JAM.policy.p3);
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
      var bu = aR("id");
      var bp = aR("ses");
      var bq = aR("ref");
      var bK = aR("cvar");
      var bx = L$$15();
      var bt = ab$$1(bp);
      var bB = i$$22();
      var bH = av || bb;
      var bm;
      var be$$15;
      if(V$$1) {
        V$$1 = false;
        aS(bu, "", -86400, ba, X$$1);
        aS(bp, "", -86400, ba, X$$1);
        aS(bK, "", -86400, ba, X$$1);
        aS(bq, "", -86400, ba, X$$1);
        V$$1 = true
      }
      if(a4) {
        return""
      }
      bI = bx[0];
      bE = bx[1];
      bw = bx[2];
      bk$$1 = bx[3];
      bA = bx[4];
      bn = bx[5];
      if(!p$$3(bx[6])) {
        bx[6] = ""
      }
      by = bx[6];
      if(!p$$3(bi$$2)) {
        bi$$2 = ""
      }
      var v254 = document.characterSet;
      if(!v254) {
        v254 = document.charset
      }
      var bs = v254;
      var v529 = !bs;
      if(!v529) {
        v529 = JAM.call(bs.toLowerCase, bs, [], JAM.policy.p3) === "utf-8"
      }
      if(v529) {
        bs = null
      }
      bm = bB[0];
      be$$15 = bB[1];
      bl = bB[2];
      bC = bB[3];
      if(!bt) {
        bk$$1 = bk$$1 + 1;
        bn = bA;
        var v530 = !au;
        if(!v530) {
          v530 = !bm.length
        }
        if(v530) {
          for(bD in ap) {
            var v531 = Object.prototype.hasOwnProperty;
            if(JAM.call(v531.call, v531, [ap, bD], JAM.policy.p3)) {
              bm = x$$48(bH, ap[bD]);
              if(bm.length) {
                break
              }
            }
          }
          for(bD in ak) {
            var v532 = Object.prototype.hasOwnProperty;
            if(JAM.call(v532.call, v532, [ak, bD], JAM.policy.p3)) {
              be$$15 = x$$48(bH, ak[bD]);
              if(be$$15.length) {
                break
              }
            }
          }
        }
        bJ = b$$1(aK);
        var v263;
        if(bC.length) {
          v263 = b$$1(bC)
        }else {
          v263 = ""
        }
        br = v263;
        var v534 = bJ.length;
        if(v534) {
          var v760 = !aH(bJ);
          if(v760) {
            var v892 = !au;
            if(!v892) {
              var v955 = !br.length;
              if(!v955) {
                v955 = aH(br)
              }
              v892 = v955
            }
            v760 = v892
          }
          v534 = v760
        }
        if(v534) {
          bC = aK
        }
        var v535 = bC.length;
        if(!v535) {
          v535 = bm.length
        }
        if(v535) {
          bl = bo;
          bB = [bm, be$$15, bl, a6(JAM.call(bC.slice, bC, [0, bj$$2], JAM.policy.p3))];
          aS(bq, JAM.call(JSON2.stringify, JSON2, [bB], JAM.policy.p3), aw, ba, X$$1, aa$$1)
        }
      }
      var v537 = bg$$8;
      var v1082 = "&idsite=" + a1 + "&rec=1&r=";
      var v1085 = String(JAM.call(Math.random, Math, [], JAM.policy.p3));
      var v1063 = v1082 + JAM.call(v1085.slice, v1085, [2, 8], JAM.policy.p3) + "&h=" + JAM.call(bf$$12.getHours, bf$$12, [], JAM.policy.p3) + "&m=" + JAM.call(bf$$12.getMinutes, bf$$12, [], JAM.policy.p3) + "&s=" + JAM.call(bf$$12.getSeconds, bf$$12, [], JAM.policy.p3) + "&url=" + JAM.call(g$$1, null, [a6(bH)], JAM.policy.p3);
      var v1067;
      if(aK.length) {
        v1067 = "&urlref=" + JAM.call(g$$1, null, [a6(aK)], JAM.policy.p3)
      }else {
        v1067 = ""
      }
      var v1042 = v1063 + v1067 + "&_id=" + bE + "&_idts=" + bw + "&_idvc=" + bk$$1 + "&_idn=" + bI;
      var v1048;
      if(bm.length) {
        v1048 = "&_rcn=" + JAM.call(g$$1, null, [bm], JAM.policy.p3)
      }else {
        v1048 = ""
      }
      var v1037 = v1042 + v1048;
      var v1044;
      if(be$$15.length) {
        v1044 = "&_rck=" + JAM.call(g$$1, null, [be$$15], JAM.policy.p3)
      }else {
        v1044 = ""
      }
      var v957 = v1037 + v1044 + "&_refts=" + bl + "&_viewts=" + bn;
      var v994;
      if(String(by).length) {
        v994 = "&_ects=" + by
      }else {
        v994 = ""
      }
      var v893 = v957 + v994;
      var v959;
      if(String(bC).length) {
        v959 = "&_ref=" + JAM.call(g$$1, null, [a6(JAM.call(bC.slice, bC, [0, bj$$2], JAM.policy.p3))], JAM.policy.p3)
      }else {
        v959 = ""
      }
      var v762 = v893 + v959;
      var v895;
      if(bs) {
        v895 = "&cs=" + JAM.call(g$$1, null, [bs], JAM.policy.p3)
      }else {
        v895 = ""
      }
      bg$$8 = v537 + (v762 + v895);
      var bh$$5 = JAM.call(JSON2.stringify, JSON2, [aA], JAM.policy.p3);
      if(bh$$5.length > 2) {
        bg$$8 = bg$$8 + ("&cvar=" + JAM.call(g$$1, null, [bh$$5], JAM.policy.p3))
      }
      for(bD in a2) {
        var v542 = Object.prototype.hasOwnProperty;
        if(JAM.call(v542.call, v542, [a2, bD], JAM.policy.p3)) {
          bg$$8 = bg$$8 + ("&" + bD + "=" + a2[bD])
        }
      }
      if(bF) {
        bg$$8 = bg$$8 + ("&data=" + JAM.call(g$$1, null, [JAM.call(JSON2.stringify, JSON2, [bF], JAM.policy.p3)], JAM.policy.p3))
      }else {
        if(U$$2) {
          bg$$8 = bg$$8 + ("&data=" + JAM.call(g$$1, null, [JAM.call(JSON2.stringify, JSON2, [U$$2], JAM.policy.p3)], JAM.policy.p3))
        }
      }
      if(Q$$3) {
        var bv = JAM.call(JSON2.stringify, JSON2, [Q$$3], JAM.policy.p3);
        if(bv.length > 2) {
          bg$$8 = bg$$8 + ("&_cvar=" + JAM.call(g$$1, null, [bv], JAM.policy.p3))
        }
        for(bD in bz) {
          var v551 = Object.prototype.hasOwnProperty;
          if(JAM.call(v551.call, v551, [bz, bD], JAM.policy.p3)) {
            var v552 = Q$$3[bD][0] === "";
            if(!v552) {
              v552 = Q$$3[bD][1] === ""
            }
            if(v552) {
              delete Q$$3[bD]
            }
          }
        }
        aS(bK, JAM.call(JSON2.stringify, JSON2, [Q$$3], JAM.policy.p3), ad$$1, ba, X$$1, aa$$1)
      }
      var bi$$inline_0 = bE;
      var bf$$inline_1 = bw;
      var be$$inline_2 = bk$$1;
      var bh$$inline_3 = bo;
      var bg$$inline_4 = bn;
      var v275;
      var v775 = p$$3(bi$$2);
      if(v775) {
        v775 = String(bi$$2).length
      }
      if(v775) {
        v275 = bi$$2
      }else {
        v275 = by
      }
      var bj$$inline_5 = v275;
      aS(aR("id"), bi$$inline_0 + "." + bf$$inline_1 + "." + be$$inline_2 + "." + bh$$inline_3 + "." + bg$$inline_4 + "." + bj$$inline_5, ac$$1, ba, X$$1, aa$$1);
      aS(bp, "*", ad$$1, ba, X$$1, aa$$1);
      bg$$8 = bg$$8 + E(bG);
      return bg$$8
    }
    function aV(bh$$6, bg$$9, bl$$1, bi$$3, be$$16, bo$$1) {
      var bj$$3 = "idgoal=0";
      var bk$$2;
      var bf$$13 = new Date;
      var bm$$1 = [];
      var bn$$1;
      if(String(bh$$6).length) {
        bj$$3 = bj$$3 + ("&ec_id=" + JAM.call(g$$1, null, [bh$$6], JAM.policy.p3));
        bk$$2 = JAM.call(Math.round, Math, [JAM.call(bf$$13.getTime, bf$$13, [], JAM.policy.p3) / 1E3], JAM.policy.p3)
      }
      bj$$3 = bj$$3 + ("&revenue=" + bg$$9);
      if(String(bl$$1).length) {
        bj$$3 = bj$$3 + ("&ec_st=" + bl$$1)
      }
      if(String(bi$$3).length) {
        bj$$3 = bj$$3 + ("&ec_tx=" + bi$$3)
      }
      if(String(be$$16).length) {
        bj$$3 = bj$$3 + ("&ec_sh=" + be$$16)
      }
      if(String(bo$$1).length) {
        bj$$3 = bj$$3 + ("&ec_dt=" + bo$$1)
      }
      if(aQ) {
        for(bn$$1 in aQ) {
          var v570 = Object.prototype.hasOwnProperty;
          if(JAM.call(v570.call, v570, [aQ, bn$$1], JAM.policy.p3)) {
            if(!p$$3(aQ[bn$$1][1])) {
              aQ[bn$$1][1] = ""
            }
            if(!p$$3(aQ[bn$$1][2])) {
              aQ[bn$$1][2] = ""
            }
            var v573 = !p$$3(aQ[bn$$1][3]);
            if(!v573) {
              v573 = String(aQ[bn$$1][3]).length === 0
            }
            if(v573) {
              aQ[bn$$1][3] = 0
            }
            var v574 = !p$$3(aQ[bn$$1][4]);
            if(!v574) {
              v574 = String(aQ[bn$$1][4]).length === 0
            }
            if(v574) {
              aQ[bn$$1][4] = 1
            }
            JAM.call(bm$$1.push, bm$$1, [aQ[bn$$1]], JAM.policy.p3)
          }
        }
        bj$$3 = bj$$3 + ("&ec_items=" + JAM.call(g$$1, null, [JAM.call(JSON2.stringify, JSON2, [bm$$1], JAM.policy.p3)], JAM.policy.p3))
      }
      bj$$3 = am(bj$$3, U$$2, "ecommerce", bk$$2);
      aq(bj$$3, aF);
      return
    }
    function ay(bh$$8, bi$$5) {
      function bf$$15() {
        var bj$$5 = new Date;
        var bk$$3;
        if(aJ + ag$$1 > JAM.call(bj$$5.getTime, bj$$5, [], JAM.policy.p3)) {
          if(S$$3 < JAM.call(bj$$5.getTime, bj$$5, [], JAM.policy.p3)) {
            bk$$3 = am("ping=1", bi$$5, "ping");
            aq(bk$$3, aF)
          }
          JAM.call(setTimeout, null, [bf$$15, ag$$1])
        }
        return
      }
      var be$$19 = new Date;
      var bg$$11 = am("action_name=" + JAM.call(g$$1, null, [K(bh$$8 || al)], JAM.policy.p3), bi$$5, "log");
      aq(bg$$11, aF);
      var v582 = S$$3;
      if(v582) {
        var v789 = ag$$1;
        if(v789) {
          v789 = !aL
        }
        v582 = v789
      }
      if(v582) {
        aL = true;
        J(n$$6, "click", a0);
        J(n$$6, "mouseup", a0);
        J(n$$6, "mousedown", a0);
        J(n$$6, "mousemove", a0);
        J(n$$6, "mousewheel", a0);
        J(w$$5, "DOMMouseScroll", a0);
        J(w$$5, "scroll", a0);
        J(n$$6, "keypress", a0);
        J(n$$6, "keydown", a0);
        J(n$$6, "keyup", a0);
        J(w$$5, "resize", a0);
        J(w$$5, "focus", a0);
        J(w$$5, "blur", a0);
        aJ = JAM.call(be$$19.getTime, be$$19, [], JAM.policy.p3);
        JAM.call(setTimeout, null, [bf$$15, ag$$1])
      }
      return
    }
    function aZ(bf$$18, be$$22, bh$$11) {
      var bg$$14 = am(be$$22 + "=" + JAM.call(g$$1, null, [a6(bf$$18)], JAM.policy.p3), bh$$11, "link");
      aq(bg$$14, aF);
      return
    }
    function a3(bf$$19, be$$23) {
      if(bf$$19 !== "") {
        var v585 = bf$$19;
        var v791 = JAM.call(be$$23.charAt, be$$23, [0], JAM.policy.p3);
        return v585 + JAM.call(v791.toUpperCase, v791, [], JAM.policy.p3) + JAM.call(be$$23.slice, be$$23, [1], JAM.policy.p3)
      }
      return be$$23
    }
    function ai$$1(bj$$6) {
      function bf$$20() {
        JAM.call(n$$6.removeEventListener, n$$6, [bg$$15 + "visibilitychange", bf$$20, false], JAM.policy.p3);
        JAM.call(bj$$6, null, [], JAM.policy.p3);
        return
      }
      var bi$$7;
      var be$$24;
      var bh$$12 = ["", "webkit", "ms", "moz"];
      var bg$$15;
      if(!ar) {
        be$$24 = 0;
        var v305 = be$$24 < bh$$12.length;
        for(;v305;) {
          bg$$15 = bh$$12[be$$24];
          var v588 = Object.prototype.hasOwnProperty;
          if(JAM.call(v588.call, v588, [n$$6, a3(bg$$15, "hidden")], JAM.policy.p3)) {
            if(n$$6[a3(bg$$15, "visibilityState")] === "prerender") {
              bi$$7 = true
            }
            break
          }
          be$$24 = be$$24 + 1;
          v305 = be$$24 < bh$$12.length
        }
      }
      if(bi$$7) {
        J(n$$6, bg$$15 + "visibilitychange", bf$$20);
        return
      }
      JAM.call(bj$$6, null, [], JAM.policy.p3);
      return
    }
    function ah$$1(bg$$16, bf$$21) {
      var bh$$13;
      var be$$25 = "(^| )(piwik[_-]" + bf$$21;
      if(bg$$16) {
        bh$$13 = 0;
        var v308 = bh$$13 < bg$$16.length;
        for(;v308;) {
          be$$25 = be$$25 + ("|" + bg$$16[bh$$13]);
          bh$$13 = bh$$13 + 1;
          v308 = bh$$13 < bg$$16.length
        }
      }
      be$$25 = be$$25 + ")( |$)";
      return new RegExp(be$$25)
    }
    function aP(bj$$8) {
      var bh$$15;
      var bf$$23;
      var be$$27;
      var v595 = (bh$$15 = bj$$8.parentNode) !== null;
      if(v595) {
        var v797 = p$$3(bh$$15);
        if(v797) {
          var v1000 = bj$$8.tagName;
          var v911 = (bf$$23 = JAM.call(v1000.toUpperCase, v1000, [], JAM.policy.p3)) !== "A";
          if(v911) {
            v911 = bf$$23 !== "AREA"
          }
          v797 = v911
        }
        v595 = v797
      }
      var v309 = v595;
      for(;v309;) {
        bj$$8 = bh$$15;
        var v596 = (bh$$15 = bj$$8.parentNode) !== null;
        if(v596) {
          var v799 = p$$3(bh$$15);
          if(v799) {
            var v1001 = bj$$8.tagName;
            var v912 = (bf$$23 = JAM.call(v1001.toUpperCase, v1001, [], JAM.policy.p3)) !== "A";
            if(v912) {
              v912 = bf$$23 !== "AREA"
            }
            v799 = v912
          }
          v596 = v799
        }
        v309 = v596
      }
      if(p$$3(bj$$8.href)) {
        var v310 = bj$$8.hostname;
        if(!v310) {
          v310 = b$$1(bj$$8.href)
        }
        var bk$$4 = v310;
        var bl$$2 = JAM.call(bk$$4.toLowerCase, bk$$4, [], JAM.policy.p3);
        var v311 = bj$$8.href;
        var bg$$18 = JAM.call(v311.replace, v311, [bk$$4, bl$$2], JAM.policy.p3);
        var bi$$9 = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):", "i");
        if(!JAM.call(bi$$9.test, bi$$9, [bg$$18], JAM.policy.p3)) {
          var bh$$inline_7 = bj$$8.className;
          var be$$inline_8 = bg$$18;
          var bi$$inline_9 = aH(bl$$2);
          var bg$$inline_10 = ah$$1(az, "download");
          var bf$$inline_11 = ah$$1(ae$$1, "link");
          var bj$$inline_12 = new RegExp("\\.(" + an + ")([?&#]|$)", "i");
          var v313;
          if(JAM.call(bf$$inline_11.test, bf$$inline_11, [bh$$inline_7], JAM.policy.p3)) {
            v313 = "link"
          }else {
            var v602;
            var v913 = JAM.call(bg$$inline_10.test, bg$$inline_10, [bh$$inline_7], JAM.policy.p3);
            if(!v913) {
              v913 = JAM.call(bj$$inline_12.test, bj$$inline_12, [be$$inline_8], JAM.policy.p3)
            }
            if(v913) {
              v602 = "download"
            }else {
              var v800;
              if(bi$$inline_9) {
                v800 = 0
              }else {
                v800 = "link"
              }
              v602 = v800
            }
            v313 = v602
          }
          be$$27 = v313;
          if(be$$27) {
            bg$$18 = JAM.call(d$$1, null, [bg$$18], JAM.policy.p3);
            aZ(bg$$18, be$$27)
          }
        }
      }
      return
    }
    function bc(be$$28) {
      var bf$$24;
      var bg$$19;
      var v316 = be$$28;
      if(!v316) {
        v316 = w$$5.event
      }
      be$$28 = v316;
      var v317 = be$$28.which;
      if(!v317) {
        v317 = be$$28.button
      }
      bf$$24 = v317;
      var v318 = be$$28.target;
      if(!v318) {
        v318 = be$$28.srcElement
      }
      bg$$19 = v318;
      if(be$$28.type === "click") {
        if(bg$$19) {
          aP(bg$$19)
        }
      }else {
        if(be$$28.type === "mousedown") {
          var v802 = bf$$24 === 1;
          if(!v802) {
            v802 = bf$$24 === 2
          }
          var v609 = v802;
          if(v609) {
            v609 = bg$$19
          }
          if(v609) {
            aB = bf$$24;
            Y$$1 = bg$$19
          }else {
            aB = Y$$1 = null
          }
        }else {
          if(be$$28.type === "mouseup") {
            var v611 = bf$$24 === aB;
            if(v611) {
              v611 = bg$$19 === Y$$1
            }
            if(v611) {
              aP(bg$$19)
            }
            aB = Y$$1 = null
          }
        }
      }
      return
    }
    function aO(bf$$25, be$$29) {
      if(be$$29) {
        J(bf$$25, "mouseup", bc, false);
        J(bf$$25, "mousedown", bc, false)
      }else {
        J(bf$$25, "click", bc, false)
      }
      return
    }
    function ax(bf$$26) {
      if(!aN) {
        aN = true;
        var bg$$20;
        var be$$30 = ah$$1(R$$3, "ignore");
        var bh$$16 = n$$6.links;
        if(bh$$16) {
          bg$$20 = 0;
          var v326 = bg$$20 < bh$$16.length;
          for(;v326;) {
            if(!JAM.call(be$$30.test, be$$30, [bh$$16[bg$$20].className], JAM.policy.p3)) {
              aO(bh$$16[bg$$20], bf$$26)
            }
            bg$$20 = bg$$20 + 1;
            v326 = bg$$20 < bh$$16.length
          }
        }
      }
      return
    }
    function a7() {
      var bf$$27;
      var bg$$21;
      var bh$$17 = {pdf:"application/pdf", qt:"video/quicktime", realp:"audio/x-pn-realaudio-plugin", wma:"application/x-mplayer2", dir:"application/x-director", fla:"application/x-shockwave-flash", java:"application/x-java-vm", gears:"application/x-googlegears", ag:"application/x-silverlight"};
      var v328;
      var v804 = new RegExp("Mac OS X.*Safari/");
      if(JAM.call(v804.test, v804, [c$$1.userAgent], JAM.policy.p3)) {
        var v615 = w$$5.devicePixelRatio;
        if(!v615) {
          v615 = 1
        }
        v328 = v615
      }else {
        v328 = 1
      }
      var be$$31 = v328;
      var v807 = new RegExp("MSIE");
      if(!JAM.call(v807.test, v807, [c$$1.userAgent], JAM.policy.p3)) {
        var v618 = c$$1.mimeTypes;
        if(v618) {
          v618 = c$$1.mimeTypes.length
        }
        if(v618) {
          for(bf$$27 in bh$$17) {
            var v619 = Object.prototype.hasOwnProperty;
            if(JAM.call(v619.call, v619, [bh$$17, bf$$27], JAM.policy.p3)) {
              bg$$21 = c$$1.mimeTypes[bh$$17[bf$$27]];
              var v331;
              var v811 = bg$$21;
              if(v811) {
                v811 = bg$$21.enabledPlugin
              }
              if(v811) {
                v331 = "1"
              }else {
                v331 = "0"
              }
              JAM.set(a2, bf$$27, v331, JAM.policy.p2)
            }
          }
        }
        var v621 = typeof navigator.javaEnabled !== "unknown";
        if(v621) {
          var v813 = p$$3(c$$1.javaEnabled);
          if(v813) {
            v813 = JAM.call(c$$1.javaEnabled, c$$1, [], JAM.policy.p3)
          }
          v621 = v813
        }
        if(v621) {
          a2.java = "1"
        }
        if(typeof w$$5.GearsFactory === "function") {
          a2.gears = "1"
        }
        var v336 = a2;
        var v1088 = P$$5();
        introspect(JAM.policy.p2) {
          v336.cookie = v1088
        }
      }
      a2.res = z$$2.width * be$$31 + "x" + z$$2.height * be$$31;
      return
    }
    var O$$5 = C(n$$6.domain, w$$5.location.href, q$$2());
    var aX = r$$2(O$$5[0]);
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
    a7();
    aC();
    return{getVisitorId:v10, getVisitorInfo:v11, getAttributionInfo:v12, getAttributionCampaignName:v13, getAttributionCampaignKeyword:v14, getAttributionReferrerTimestamp:v15, getAttributionReferrerUrl:v16, setTrackerUrl:v17, setSiteId:v18, setCustomData:v19, getCustomData:v20, setCustomVariable:v21, getCustomVariable:v22, deleteCustomVariable:v23, setLinkTrackingTimer:v24, setDownloadExtensions:v25, addDownloadExtensions:v26, setDomains:v27, setIgnoreClasses:v28, setRequestMethod:v29, setReferrerUrl:v30, 
    setCustomUrl:v31, setDocumentTitle:v32, setDownloadClasses:v33, setLinkClasses:v34, setCampaignNameKey:v35, setCampaignKeywordKey:v36, discardHashTag:v37, setCookieNamePrefix:v38, setCookieDomain:v39, setCookiePath:v40, setVisitorCookieTimeout:v41, setSessionCookieTimeout:v42, setReferralCookieTimeout:v43, setConversionAttributionFirstReferrer:v44, disableCookies:v45, setDoNotTrack:v46, addListener:v47, enableLinkTracking:v49, setHeartBeatTimer:v50, killFrame:v51, redirectFile:v52, setCountPreRendered:v53, 
    trackGoal:v55, trackLink:v57, trackPageView:v60, trackSiteSearch:v62, setEcommerceView:v63, addEcommerceItem:v64, trackEcommerceOrder:v65, trackEcommerceCartUpdate:v66}
  }
  function o$$3() {
    return{push:G}
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
  J(w$$5, "beforeunload", H, false);
  j$$1();
  Date.prototype.getTimeAlias = Date.prototype.getTime;
  A = new t$$2;
  D = 0;
  var v347 = D < _paq.length;
  for(;v347;) {
    G(_paq[D]);
    D = D + 1;
    v347 = D < _paq.length
  }
  _paq = new o$$3;
  return{addPlugin:v67, getTracker:v68, getAsyncTracker:v69}
}
function v5() {
  function v4(o$$2, f$$5) {
    function v3(p$$2) {
      var v918 = JAM.call(p$$2.charCodeAt, p$$2, [0], JAM.policy.p3);
      var v630 = "0000" + JAM.call(v918.toString, v918, [16], JAM.policy.p3);
      return"\\u" + JAM.call(v630.slice, v630, [-4], JAM.policy.p3)
    }
    function m$$4(s$$3, r$$1) {
      var q$$1;
      var p$$1;
      var t$$1 = s$$3[r$$1];
      var v631 = t$$1;
      if(v631) {
        v631 = typeof t$$1 === "object"
      }
      if(v631) {
        for(q$$1 in t$$1) {
          var v632 = Object.prototype.hasOwnProperty;
          if(JAM.call(v632.call, v632, [t$$1, q$$1], JAM.policy.p3)) {
            p$$1 = m$$4(t$$1, q$$1);
            if(p$$1 !== undefined) {
              JAM.set(t$$1, q$$1, p$$1, JAM.policy.p2)
            }else {
              delete t$$1[q$$1]
            }
          }
        }
      }
      return JAM.call(f$$5.call, f$$5, [s$$3, r$$1, t$$1], JAM.policy.p3)
    }
    var n$$5;
    o$$2 = String(o$$2);
    c.lastIndex = 0;
    if(JAM.call(c.test, c, [o$$2], JAM.policy.p3)) {
      o$$2 = JAM.call(o$$2.replace, o$$2, [c, v3], JAM.policy.p3)
    }
    var v633 = new RegExp("^[\\],:{}\\s]*$");
    var v919 = JAM.call(o$$2.replace, o$$2, [new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})', "g"), "@"], JAM.policy.p3);
    var v819 = JAM.call(v919.replace, v919, [new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?', "g"), "]"], JAM.policy.p3);
    if(JAM.call(v633.test, v633, [JAM.call(v819.replace, v819, [new RegExp("(?:^|:|,)(?:\\s*\\[)+", "g"), ""], JAM.policy.p3)], JAM.policy.p3)) {
      var v353 = "(" + o$$2 + ")";
      if(JAM.isEval(eval)) {
        n$$5 = eval("introspect(JAM.policy.pFull) { " + v353 + " }")
      }else {
        n$$5 = JAM.call(eval, null, [v353])
      }
      var v354;
      if(typeof f$$5 === "function") {
        v354 = m$$4({"":n$$5}, "")
      }else {
        v354 = n$$5
      }
      return v354
    }
    throw new SyntaxError("JSON.parse");
  }
  function v2(o$$1, m$$3, n$$4) {
    var f$$4;
    j = "";
    b = "";
    if(typeof n$$4 === "number") {
      f$$4 = 0;
      var v356 = f$$4 < n$$4;
      for(;v356;) {
        b = b + " ";
        f$$4 = f$$4 + 1;
        v356 = f$$4 < n$$4
      }
    }else {
      if(typeof n$$4 === "string") {
        b = n$$4
      }
    }
    h$$4 = m$$3;
    var v640 = m$$3;
    if(v640) {
      var v822 = typeof m$$3 !== "function";
      if(v822) {
        var v922 = typeof m$$3 !== "object";
        if(!v922) {
          v922 = typeof m$$3.length !== "number"
        }
        v822 = v922
      }
      v640 = v822
    }
    if(v640) {
      throw new Error("JSON.stringify");
    }
    return g("", {"":o$$1})
  }
  function d(f) {
    var v361;
    if(f < 10) {
      v361 = "0" + f
    }else {
      v361 = f
    }
    return v361
  }
  function l(n$$1, m) {
    var v362 = Object.prototype.toString;
    var f$$1 = JAM.call(v362.apply, v362, [n$$1], JAM.policy.p3);
    if(f$$1 === "[object Date]") {
      var v363;
      if(isFinite(JAM.call(n$$1.valueOf, n$$1, [], JAM.policy.p3))) {
        v363 = JAM.call(n$$1.getUTCFullYear, n$$1, [], JAM.policy.p3) + "-" + d(JAM.call(n$$1.getUTCMonth, n$$1, [], JAM.policy.p3) + 1) + "-" + d(JAM.call(n$$1.getUTCDate, n$$1, [], JAM.policy.p3)) + "T" + d(JAM.call(n$$1.getUTCHours, n$$1, [], JAM.policy.p3)) + ":" + d(JAM.call(n$$1.getUTCMinutes, n$$1, [], JAM.policy.p3)) + ":" + d(JAM.call(n$$1.getUTCSeconds, n$$1, [], JAM.policy.p3)) + "Z"
      }else {
        v363 = null
      }
      return v363
    }
    var v645 = f$$1 === "[object String]";
    if(!v645) {
      var v826 = f$$1 === "[object Number]";
      if(!v826) {
        v826 = f$$1 === "[object Boolean]"
      }
      v645 = v826
    }
    if(v645) {
      return JAM.call(n$$1.valueOf, n$$1, [], JAM.policy.p3)
    }
    var v646 = f$$1 !== "[object Array]";
    if(v646) {
      v646 = typeof n$$1.toJSON === "function"
    }
    if(v646) {
      return JAM.call(n$$1.toJSON, n$$1, [m], JAM.policy.p3)
    }
    return n$$1
  }
  function a(f$$2) {
    function v1(m$$1) {
      var n$$2 = k[m$$1];
      var v367;
      if(typeof n$$2 === "string") {
        v367 = n$$2
      }else {
        var v975 = JAM.call(m$$1.charCodeAt, m$$1, [0], JAM.policy.p3);
        var v830 = "0000" + JAM.call(v975.toString, v975, [16], JAM.policy.p3);
        v367 = "\\u" + JAM.call(v830.slice, v830, [-4], JAM.policy.p3)
      }
      return v367
    }
    i$$1.lastIndex = 0;
    var v368;
    if(JAM.call(i$$1.test, i$$1, [f$$2], JAM.policy.p3)) {
      v368 = '"' + JAM.call(f$$2.replace, f$$2, [i$$1, v1], JAM.policy.p3) + '"'
    }else {
      v368 = '"' + f$$2 + '"'
    }
    return v368
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
    if(v652) {
      v652 = typeof r === "object"
    }
    if(v652) {
      r = l(r, s$$2)
    }
    if(typeof h$$4 === "function") {
      r = JAM.call(h$$4.call, h$$4, [p, s$$2, r], JAM.policy.p3)
    }
    switch(typeof r) {
      case "string":
        return a(r);
      case "number":
        var v371;
        if(isFinite(r)) {
          v371 = String(r)
        }else {
          v371 = "null"
        }
        return v371;
      case "boolean":
      ;
      case "null":
        return String(r);
      case "object":
        if(!r) {
          return"null"
        }
        j = j + b;
        o = [];
        var v833 = Object.prototype.toString;
        if(JAM.call(v833.apply, v833, [r], JAM.policy.p3) === "[object Array]") {
          f$$3 = r.length;
          n$$3 = 0;
          var v375 = n$$3 < f$$3;
          for(;v375;) {
            var v373 = o;
            var v374 = n$$3;
            var v656 = g(n$$3, r);
            if(!v656) {
              v656 = "null"
            }
            v373[v374] = v656;
            n$$3 = n$$3 + 1;
            v375 = n$$3 < f$$3
          }
          var v376;
          if(o.length === 0) {
            v376 = "[]"
          }else {
            var v657;
            if(j) {
              v657 = "[\n" + j + JAM.call(o.join, o, [",\n" + j], JAM.policy.p3) + "\n" + q + "]"
            }else {
              v657 = "[" + JAM.call(o.join, o, [","], JAM.policy.p3) + "]"
            }
            v376 = v657
          }
          t = v376;
          j = q;
          return t
        }
        var v659 = h$$4;
        if(v659) {
          v659 = typeof h$$4 === "object"
        }
        if(v659) {
          f$$3 = h$$4.length;
          n$$3 = 0;
          var v380 = n$$3 < f$$3;
          for(;v380;) {
            if(typeof h$$4[n$$3] === "string") {
              m$$2 = h$$4[n$$3];
              t = g(m$$2, r);
              if(t) {
                var v840 = a(m$$2);
                var v931;
                if(j) {
                  v931 = ": "
                }else {
                  v931 = ":"
                }
                JAM.call(o.push, o, [v840 + v931 + t], JAM.policy.p3)
              }
            }
            n$$3 = n$$3 + 1;
            v380 = n$$3 < f$$3
          }
        }else {
          for(m$$2 in r) {
            var v662 = Object.prototype.hasOwnProperty;
            if(JAM.call(v662.call, v662, [r, m$$2], JAM.policy.p3)) {
              t = g(m$$2, r);
              if(t) {
                var v843 = a(m$$2);
                var v932;
                if(j) {
                  v932 = ": "
                }else {
                  v932 = ":"
                }
                JAM.call(o.push, o, [v843 + v932 + t], JAM.policy.p3)
              }
            }
          }
        }
        var v384;
        if(o.length === 0) {
          v384 = "{}"
        }else {
          var v664;
          if(j) {
            v664 = "{\n" + j + JAM.call(o.join, o, [",\n" + j], JAM.policy.p3) + "\n" + q + "}"
          }else {
            v664 = "{" + JAM.call(o.join, o, [","], JAM.policy.p3) + "}"
          }
          v384 = v664
        }
        t = v384;
        j = q;
        return t
    }
    return
  }
  var c = new RegExp("[\x00\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]", "g");
  var e$$4 = '\\\\\\"\x00-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]';
  var i$$1 = new RegExp("[" + e$$4, "g");
  var j;
  var b;
  var k = {"\b":"\\b", "\t":"\\t", "\n":"\\n", "\f":"\\f", "\r":"\\r", '"':'\\"', "\\":"\\\\"};
  var h$$4;
  if(typeof JSON2.stringify !== "function") {
    JSON2.stringify = v2
  }
  if(typeof JSON2.parse !== "function") {
    JSON2.parse = v4
  }
  return
}
function piwik_log(b$$2, f$$7, d$$2, g$$2) {
  function v0(i$$26, k$$2, j$$2, h$$7) {
    JAM.call(e$$6.setSiteId, e$$6, [k$$2], JAM.policy.p3);
    JAM.call(e$$6.setTrackerUrl, e$$6, [j$$2], JAM.policy.p3);
    JAM.call(e$$6.trackLink, e$$6, [i$$26, h$$7], JAM.policy.p3);
    return
  }
  function a$$2(h$$6) {
    try {
      var v389 = "piwik_" + h$$6;
      if(JAM.isEval(eval)) {
        return eval("introspect(JAM.policy.pFull) { " + v389 + " }")
      }else {
        return JAM.call(eval, null, [v389])
      }
    }catch(i$$25) {
    }
    return
  }
  var c$$2;
  var e$$6 = JAM.call(Piwik.getTracker, Piwik, [d$$2, f$$7], JAM.policy.p3);
  JAM.call(e$$6.setDocumentTitle, e$$6, [b$$2], JAM.policy.p3);
  JAM.call(e$$6.setCustomData, e$$6, [g$$2], JAM.policy.p3);
  c$$2 = a$$2("tracker_pause");
  if(c$$2) {
    JAM.call(e$$6.setLinkTrackingTimer, e$$6, [c$$2], JAM.policy.p3)
  }
  c$$2 = a$$2("download_extensions");
  if(c$$2) {
    JAM.call(e$$6.setDownloadExtensions, e$$6, [c$$2], JAM.policy.p3)
  }
  c$$2 = a$$2("hosts_alias");
  if(c$$2) {
    JAM.call(e$$6.setDomains, e$$6, [c$$2], JAM.policy.p3)
  }
  c$$2 = a$$2("ignore_classes");
  if(c$$2) {
    JAM.call(e$$6.setIgnoreClasses, e$$6, [c$$2], JAM.policy.p3)
  }
  JAM.call(e$$6.trackPageView, e$$6, [], JAM.policy.p3);
  if(a$$2("install_tracker")) {
    piwik_track = v0;
    JAM.call(e$$6.enableLinkTracking, e$$6, [], JAM.policy.p3)
  }
  return
}
if(!this.JSON2) {
  this.JSON2 = {}
}
v5();
var _paq = _paq || [];
var v392 = Piwik;
if(!v392) {
  v392 = v70()
}
var Piwik = v392;
var piwik_track;
var v393;
if("https:" == document.location.protocol) {
  v393 = "https://cms.demo.crash"
}else {
  v393 = "http://cms.demo.crash"
}
var pkBaseURL = v393;
var piwikTracker = JAM.call(Piwik.getTracker, Piwik, [pkBaseURL + "piwik.php", "crash"], JAM.policy.p3);
JAM.call(piwikTracker.trackPageView, piwikTracker, [], JAM.policy.p3);
JAM.call(piwikTracker.enableLinkTracking, piwikTracker, [], JAM.policy.p3);

