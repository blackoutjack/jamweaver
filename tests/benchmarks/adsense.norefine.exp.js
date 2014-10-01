// adsense.js
function v254() {
  function v253() {
    var a$$530 = v$$1;
    var b$$402 = JAM.call(a$$530.createElement, a$$530, ["script"]);
    b$$402.async = !0;
    b$$402.type = "text/javascript";
    var v255 = b$$402;
    var v5120 = di();
    v255.src = v5120;
    a$$530 = JAM.call(JAM.get(a$$530, "getElementsByTagName", JAM.policy.p6), a$$530, ["script"])[0];
    var v257 = a$$530.parentNode;
    JAM.call(v257.insertBefore, v257, [b$$402, a$$530]);
    return
  }
  function v252(a$$527) {
    function b$$401(a$$528) {
      var v258;
      var v3420 = void 0 !== a$$528;
      if(v3420) {
        v3420 = null !== a$$528
      }
      if(v3420) {
        a$$528 = Math.min(Math.max(a$$528, -30), 30);
        a$$528 = JAM.call(Math.round, Math, [546 * (a$$528 + 30)]);
        v258 = [JAM.call(Math.floor, Math, [a$$528 / 256]), a$$528 % 256]
      }else {
        v258 = [128, 0]
      }
      return v258
    }
    var c$$270 = [];
    if(a$$527) {
      c$$270 = b$$401(a$$527.x).concat(b$$401(a$$527.y)).concat(b$$401(a$$527.z))
    }else {
      a$$527 = 0;
      var v262 = 3 > a$$527;
      for(;v262;) {
        c$$270 = c$$270.concat([128, 0]);
        a$$527 = a$$527 + 1;
        v262 = 3 > a$$527
      }
    }
    return c$$270
  }
  function v251(a$$525) {
    function b$$400(a$$526) {
      var v263;
      var v3425 = void 0 !== a$$526;
      if(v3425) {
        v3425 = null !== a$$526
      }
      if(v3425) {
        a$$526 = a$$526 + 360;
        v263 = [JAM.call(Math.floor, Math, [a$$526 / 256]), a$$526 % 256]
      }else {
        v263 = [128, 0]
      }
      return v263
    }
    var c$$269 = [];
    if(a$$525) {
      c$$269 = b$$400(a$$525.beta).concat(b$$400(a$$525.gamma)).concat(b$$400(a$$525.alpha))
    }else {
      a$$525 = 0;
      var v267 = 3 > a$$525;
      for(;v267;) {
        c$$269 = c$$269.concat([128, 0]);
        a$$525 = a$$525 + 1;
        v267 = 3 > a$$525
      }
    }
    return c$$269
  }
  function v250() {
    var a$$524 = JAM.call(this.Eb, this, [this.t.j.deviceOrientation]);
    var b$$399 = JAM.call(this.Ea, this, [this.t.j.deviceAccelerationWithoutGravity]);
    var c$$268 = JAM.call(this.Ea, this, [this.t.j.deviceAccelerationWithGravity]);
    a$$524 = a$$524.concat(b$$399, c$$268);
    var JSCompiler_inline_result$$59;
    var a$$inline_397 = a$$524;
    if(!ca$$1(a$$inline_397)) {
      throw Error("encodeByteArray takes an array as a parameter");
    }
    if(!Qh) {
      Qh = {};
      Rh = {};
      var a$$inline_644 = 0;
      var v272 = 65 > a$$inline_644;
      for(;v272;) {
        var v2103 = Qh;
        var v2104 = a$$inline_644;
        var v5121 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a$$inline_644);
        v2103[v2104] = v5121;
        var v2105 = Rh;
        var v2106 = a$$inline_644;
        var v5122 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a$$inline_644);
        v2105[v2106] = v5122;
        a$$inline_644 = a$$inline_644 + 1;
        v272 = 65 > a$$inline_644
      }
    }
    var v274;
    if(!0) {
      v274 = Rh
    }else {
      v274 = Qh
    }
    var c$$inline_399 = v274;
    var d$$inline_400 = [];
    var e$$inline_401 = 0;
    var v289 = e$$inline_401 < a$$inline_397.length;
    for(;v289;) {
      introspect(JAM.policy.p4) {
        var f$$inline_402 = a$$inline_397[e$$inline_401]
      }
      var g$$inline_403 = e$$inline_401 + 1 < a$$inline_397.length;
      var v277;
      if(g$$inline_403) {
        v277 = a$$inline_397[e$$inline_401 + 1]
      }else {
        v277 = 0
      }
      var h$$inline_404 = v277;
      var k$$inline_405 = e$$inline_401 + 2 < a$$inline_397.length;
      var v280;
      if(k$$inline_405) {
        v280 = a$$inline_397[e$$inline_401 + 2]
      }else {
        v280 = 0
      }
      var l$$inline_406 = v280;
      var z$$inline_407 = f$$inline_402 >> 2;
      f$$inline_402 = (f$$inline_402 & 3) << 4 | h$$inline_404 >> 4;
      h$$inline_404 = (h$$inline_404 & 15) << 2 | l$$inline_406 >> 6;
      l$$inline_406 = l$$inline_406 & 63;
      if(!k$$inline_405) {
        l$$inline_406 = 64;
        if(!g$$inline_403) {
          h$$inline_404 = 64
        }
      }
      introspect(JAM.policy.p4) {
        var v285 = c$$inline_399[z$$inline_407]
      }
      introspect(JAM.policy.p4) {
        var v286 = c$$inline_399[f$$inline_402]
      }
      introspect(JAM.policy.p4) {
        var v287 = c$$inline_399[h$$inline_404]
      }
      introspect(JAM.policy.p4) {
        var v288 = c$$inline_399[l$$inline_406]
      }
      JAM.call(d$$inline_400.push, d$$inline_400, [v285, v286, v287, v288]);
      e$$inline_401 = e$$inline_401 + 3;
      v289 = e$$inline_401 < a$$inline_397.length
    }
    JSCompiler_inline_result$$59 = d$$inline_400.join("");
    return JSCompiler_inline_result$$59
  }
  function v249() {
    var v290 = !!this.t.j.deviceAccelerationWithGravity;
    if(!v290) {
      var v2116 = !!this.t.j.deviceAccelerationWithoutGravity;
      if(!v2116) {
        v2116 = !!this.t.j.deviceOrientation
      }
      v290 = v2116
    }
    return v290
  }
  function v248() {
    var v291 = this.j;
    var v5123 = (new Date).getTime();
    v291.stopTimeStamp = v5123;
    return
  }
  function v247() {
    var v292 = this.j;
    var v5124 = (new Date).getTime();
    v292.startTimeStamp = v5124;
    return
  }
  function v246() {
    var v293 = "ds_wfea" === this.j.sensorsExperiment;
    if(v293) {
      var v2121 = this.j.isDeviceOrientationEventListenerRegistered;
      if(v2121) {
        v2121 = !this.j.deviceOrientation
      }
      v293 = v2121
    }
    return v293
  }
  function v245() {
    var v294 = "ds_wfea" === this.j.sensorsExperiment;
    if(v294) {
      var v2123 = this.j.isDeviceMotionEventListenerRegistered;
      if(v2123) {
        var v3442 = !this.j.deviceAccelerationWithGravity;
        if(v3442) {
          v3442 = !this.j.deviceAccelerationWithoutGravity
        }
        v2123 = v3442
      }
      v294 = v2123
    }
    return v294
  }
  function v244() {
    var v295 = this.O();
    if(!v295) {
      v295 = this.P()
    }
    return v295
  }
  function v243(a$$517, b$$394) {
    function v242() {
      c$$264.didDeviceMotionCallbacksTimeoutExpire = !0;
      return
    }
    var c$$264 = this.j;
    Nh(c$$264.deviceMotionEventCallbacks, a$$517, b$$394, v242);
    return
  }
  function v241(a$$516, b$$393) {
    function v240() {
      c$$263.didDeviceOrientationCallbacksTimeoutExpire = !0;
      return
    }
    var c$$263 = this.j;
    Nh(c$$263.deviceOrientationEventCallbacks, a$$516, b$$393, v240);
    return
  }
  function v239() {
    var v298;
    var v3443 = this.j.startTimeStamp;
    if(v3443) {
      v3443 = this.j.stopTimeStamp
    }
    if(v3443) {
      v298 = this.j.stopTimeStamp - this.j.startTimeStamp
    }else {
      v298 = null
    }
    return v298
  }
  function v238() {
    return this.j.deviceOrientation
  }
  function v237() {
    return this.j.deviceAccelerationWithoutGravity
  }
  function v236() {
    return this.j.deviceAccelerationWithGravity
  }
  function v235() {
    return this.j.didDeviceOrientationCallbacksTimeoutExpire
  }
  function v234() {
    return this.j.didDeviceMotionCallbacksTimeoutExpire
  }
  function v233(a$$502) {
    var b$$381 = this.G;
    a$$502.iclk_url = b$$381.iclk_url;
    var v304 = b$$381.iclk_ltx;
    if(v304) {
      a$$502.iclk_ltx = b$$381.iclk_ltx
    }
    var v305 = b$$381.iclk_ltl;
    if(v305) {
      a$$502.iclk_ltl = b$$381.iclk_ltl
    }
    return
  }
  function v232() {
    try {
      var a$$501 = {msg_type:"i-prepare"};
      JAM.call(this.Bc, this, [a$$501]);
      var v306 = this.s.contentWindow;
      var v2129 = new hg(void 0);
      v306.postMessage(JAM.call(v2129.serialize, v2129, [a$$501]), "http://doubleclick");
      return!0
    }catch(b$$380) {
    }
    return!1
  }
  function v231(a$$500) {
    var v308 = this.G;
    var v5125 = a$$500.getAttribute("href");
    v308.iclk_url = v5125;
    var JSCompiler_temp_const$$62 = this.G;
    var JSCompiler_inline_result$$63;
    var a$$inline_377 = a$$500;
    var v2130 = Xc;
    if(v2130) {
      v2130 = "innerText" in a$$inline_377
    }
    if(v2130) {
      a$$inline_377 = a$$inline_377.innerText.replace(/(\r\n|\r|\n)/g, "\n")
    }else {
      var b$$inline_378 = [];
      ud(a$$inline_377, b$$inline_378, !0);
      a$$inline_377 = b$$inline_378.join("")
    }
    a$$inline_377 = a$$inline_377.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a$$inline_377 = a$$inline_377.replace(/\u200B/g, "");
    if(!Xc) {
      a$$inline_377 = a$$inline_377.replace(/ +/g, " ")
    }
    var v313 = " " != a$$inline_377;
    if(v313) {
      a$$inline_377 = a$$inline_377.replace(/^\s*/, "")
    }
    JSCompiler_inline_result$$63 = a$$inline_377;
    JSCompiler_temp_const$$62.iclk_ltx = JSCompiler_inline_result$$63;
    var v314 = a$$500 = a$$500.getAttribute("title");
    if(v314) {
      this.G.iclk_ltl = a$$500
    }
    return
  }
  function v230() {
    var a$$499 = xe("ias::nav", JAM.call(r$$2, null, [this.Va, this]));
    var v5126 = this.i.setTimeout(a$$499, 1E3);
    this.Jc = v5126;
    return
  }
  function v229(a$$498) {
    if(this.T()) {
      a$$498.preventDefault();
      return!1
    }
    var v318 = a$$498;
    if(v318) {
      var v2134 = a$$498.target;
      if(v2134) {
        v2134 = a$$498.target.href
      }
      v318 = v2134
    }
    var b$$379 = v318;
    var c$$253 = og(this.i);
    var v2135 = !b$$379;
    if(!v2135) {
      v2135 = !c$$253
    }
    if(v2135) {
      return!0
    }
    JAM.call(this.uc, this, [a$$498.target]);
    if(!this.wc()) {
      return!0
    }
    this.qc();
    a$$498.preventDefault();
    return!1
  }
  function v228() {
    var v323 = this.i.location;
    var v5127 = this.T();
    v323.href = v5127;
    return
  }
  function v227() {
    var v324 = this.Z;
    if(!v324) {
      this.Z = !0;
      this.i.clearTimeout(this.Jc);
      this.Va()
    }
    return
  }
  function v226() {
    if(!this.Z) {
      this.Z = !0;
      this.i.clearTimeout(this.Jc);
      var v327 = this.Zb;
      JAM.call(v327.A, v327, [this.T()]);
      var a$$497 = {msg_type:"i-view"};
      var v329 = this.s.contentWindow;
      var v2141 = new hg(void 0);
      v329.postMessage(JAM.call(v2141.serialize, v2141, [a$$497]), "http://doubleclick")
    }
    return
  }
  function v225() {
    if(!this.H) {
      this.H = !0;
      var a$$496 = ye("ias::chdlr", JAM.call(r$$2, null, [this.dc, this]));
      var v333 = this.Zb;
      JAM.call(v333.mb, v333, [a$$496])
    }
    return
  }
  function v224() {
    var v335 = this.G.iclk_url;
    if(!v335) {
      v335 = null
    }
    return v335
  }
  function v223(a$$495) {
    a$$495["i-fill"] = this.Hb;
    a$$495["i-go"] = this.Nb;
    a$$495["i-no"] = this.Mb;
    return
  }
  function v222(a$$493) {
    var b$$377 = this.u();
    if(b$$377) {
      var v2146 = b$$377.style;
      var v3450;
      if(a$$493) {
        v3450 = "block"
      }else {
        v3450 = "none"
      }
      v2146.display = v3450
    }
    return
  }
  function v221() {
    var a$$492 = this.ba();
    var v2147 = a$$492;
    if(v2147) {
      v2147 = !(2 > a$$492.length)
    }
    if(v2147) {
      var v336 = a$$492.length - 1;
      introspect(JAM.policy.p4) {
        var b$$376 = a$$492[v336]
      }
      if(b$$376) {
        var c$$251 = 0;
        var v338 = c$$251 < a$$492.length;
        for(;v338;) {
          introspect(JAM.policy.p4) {
            var v337 = a$$492[c$$251]
          }
          Q$$1(v337, mh);
          c$$251 = c$$251 + 1;
          v338 = c$$251 < a$$492.length
        }
        Q$$1(this.s, mh);
        a$$492 = this.sb.contentWindow.document;
        Q$$1(a$$492.documentElement, mh);
        Q$$1(a$$492.body, nh);
        Q$$1(b$$376, lh);
        JAM.call(this.N, this, [!1])
      }
    }
    return
  }
  function v220() {
    this.i.document.body.removeChild(this.kc);
    this.i.document.body.removeChild(this.ic);
    return
  }
  function v219(a$$491) {
    var v349 = this.ea;
    JAM.call(v349.push, v349, [a$$491]);
    y$$32(a$$491, "click", this.rc);
    JAM.call(a$$491.setAttribute, a$$491, ["data-google-reveal-ad", "true"]);
    return
  }
  function v218() {
    var a$$490 = this.i.document.links;
    var b$$375 = 0;
    var v353 = b$$375 < a$$490.length;
    for(;v353;) {
      introspect(JAM.policy.p4) {
        var c$$250 = a$$490[b$$375]
      }
      var v352 = JAM.call(this.rb, this, [c$$250]);
      if(v352) {
        JAM.call(this.Xb, this, [c$$250])
      }
      b$$375 = b$$375 + 1;
      v353 = b$$375 < a$$490.length
    }
    return
  }
  function v217() {
    var a$$489 = 0;
    var v356 = a$$489 < this.ea.length;
    for(;v356;) {
      var v354 = this.ea;
      introspect(JAM.policy.p4) {
        var b$$374 = v354[a$$489]
      }
      A$$1(b$$374, "click", this.rc);
      b$$374.removeAttribute("data-google-reveal-ad");
      a$$489 = a$$489 + 1;
      v356 = a$$489 < this.ea.length
    }
    this.ea = [];
    return
  }
  function v216(a$$488) {
    var v5128 = JAM.call(this.Ba, this, [a$$488, "prerender"]);
    this.kc = v5128;
    var v5129 = JAM.call(this.Ba, this, [a$$488, "prefetch"]);
    this.ic = v5129;
    var v357 = this.i.document.body;
    JAM.call(v357.appendChild, v357, [this.kc]);
    var v359 = this.i.document.body;
    JAM.call(v359.appendChild, v359, [this.ic]);
    return
  }
  function v215(a$$487, b$$373) {
    var v361 = this.i.document;
    var c$$249 = JAM.call(v361.createElement, v361, ["link"]);
    JAM.call(c$$249.setAttribute, c$$249, ["rel", b$$373]);
    JAM.call(c$$249.setAttribute, c$$249, ["href", a$$487]);
    return c$$249
  }
  function v214() {
    JAM.call(this.N, this, [!1]);
    this.xb();
    this.sc();
    return
  }
  function v213(a$$486) {
    var v2162 = a$$486.onclick;
    if(!v2162) {
      v2162 = !a$$486.href
    }
    if(v2162) {
      return!1
    }
    var b$$372 = Re(a$$486.href);
    var c$$248 = b$$372[3];
    a$$486 = kh(a$$486.href);
    b$$372 = b$$372[7];
    var v366;
    var v3460 = !c$$248;
    if(!v3460) {
      var v4183 = c$$248 != this.Wc;
      if(!v4183) {
        var v4652 = a$$486 == this.Xc;
        if(v4652) {
          v4652 = b$$372
        }
        v4183 = v4652
      }
      v3460 = v4183
    }
    if(v3460) {
      v366 = !1
    }else {
      v366 = !0
    }
    return v366
  }
  function v212(a$$485) {
    JAM.call(this.N, this, [!0]);
    var b$$371 = ye("ifr::hide", JAM.call(r$$2, null, [this.tb, this]));
    y$$32(this.i, "pagehide", b$$371);
    JAM.call(this.vb, this, [a$$485]);
    return
  }
  function v211(a$$484) {
    var v370 = this.ob;
    if(!v370) {
      this.ob = !0;
      this.rc = a$$484;
      this.Yb()
    }
    return
  }
  function v210(a$$481) {
    a$$481.fill = this.Gb;
    a$$481.dismiss = this.Bb;
    return
  }
  function v209() {
    var v371 = this.H;
    if(!v371) {
      this.H = !0;
      this.Kb.A()
    }
    return
  }
  function v208() {
    var v372 = this.Cb;
    if(!v372) {
      this.Cb = !0;
      this.Kb.dismiss()
    }
    return
  }
  function v207(a$$479) {
    var v2168 = a$$479;
    if(v2168) {
      var v3463 = a$$479.data;
      if(v3463) {
        var v4185 = a$$479.origin;
        introspect(JAM.policy.p4) {
          v3463 = mg[v4185]
        }
      }
      v2168 = v3463
    }
    if(v2168) {
      var b$$367 = 0;
      var v375 = 2 > b$$367;
      for(;v375;) {
        var c$$246;
        var d$$154;
        switch(b$$367) {
          case 0:
            d$$154 = c$$246 = a$$479.data;
            break;
          default:
            try {
              var v373 = d$$154 = gg(a$$479.data);
              if(v373) {
                v373 = d$$154.msg_type
              }
              c$$246 = v373
            }catch(e$$90) {
              d$$154 = c$$246 = null
            }
        }
        var v374 = this.cc;
        introspect(JAM.policy.p4) {
          var f$$52 = v374[c$$246]
        }
        if(f$$52) {
          JAM.call(f$$52.call, f$$52, [this, d$$154]);
          break
        }
        b$$367 = b$$367 + 1;
        v375 = 2 > b$$367
      }
    }
    return
  }
  function v206() {
    JAM.call(this.pa, this, [this.cc]);
    var a$$478 = ye("ras::hdlr", JAM.call(r$$2, null, [this.gc, this]));
    y$$32(this.i, "message", a$$478);
    return
  }
  function v205() {
    var v380;
    var v3464 = !this.Sa();
    if(!v3464) {
      var v4187 = !og(this.i);
      if(!v4187) {
        var v4912 = 2 <= this.B;
        if(v4912) {
          v4912 = this.I
        }
        var v4655 = v4912;
        if(!v4655) {
          var v4913 = !this.Ib;
          if(!v4913) {
            v4913 = this.Da
          }
          v4655 = v4913
        }
        v4187 = v4655
      }
      v3464 = v4187
    }
    if(v3464) {
      v380 = this.hide()
    }else {
      this.A();
      v380 = this.show()
    }
    v380;
    return
  }
  function v204(a$$476, b$$366) {
    Q$$1(a$$476, {paddingTop:b$$366.top + "px", paddingLeft:b$$366.left + "px", paddingRight:b$$366.right + "px", paddingBottom:b$$366.bottom + "px"});
    return
  }
  function v203() {
    JAM.call(this.cb, this, [this.i.document.body, this.Vc]);
    return
  }
  function v202(a$$475) {
    this.w = "touchstart";
    this.B = a$$475.touches.length;
    this.I = !1;
    this.o();
    return
  }
  function v201(a$$474) {
    this.w = "touchmove";
    this.B = a$$474.touches.length;
    this.I = !0;
    this.o();
    return
  }
  function v200(a$$473) {
    function v199() {
      var v386 = "touchend" == this.w;
      if(v386) {
        this.B = b$$365;
        this.I = !1;
        this.o()
      }
      return
    }
    this.w = "touchend";
    var b$$365 = a$$473.touches.length;
    var v388;
    if(2 > b$$365) {
      v388 = this.i.setTimeout(JAM.call(r$$2, null, [v199, this]), 1E3)
    }else {
      this.B = b$$365;
      v388 = this.o()
    }
    v388;
    return
  }
  function v198() {
    function v197() {
      var v389 = "touchcancel" == this.w;
      if(v389) {
        this.B = 0;
        this.I = !1;
        this.o()
      }
      return
    }
    this.w = "touchcancel";
    this.i.setTimeout(JAM.call(r$$2, null, [v197, this]), 1E3);
    return
  }
  function v196() {
    this.o();
    return
  }
  function v195() {
    this.o();
    return
  }
  function v194() {
    this.o();
    return
  }
  function v193() {
    return this.i.innerHeight >= this.i.innerWidth
  }
  function v192(a$$472) {
    var b$$364 = this.i.innerWidth;
    var c$$245;
    switch(a$$472) {
      case "bottom":
        c$$245 = new u$$2(b$$364, this.gd.height)
    }
    return c$$245
  }
  function v191(a$$471, b$$363) {
    var c$$244;
    switch(a$$471) {
      case "bottom":
        if(c$$244 = Qd(this.i.document.body, "padding")) {
          c$$244.bottom = c$$244.bottom + b$$363.height
        }
    }
    return c$$244
  }
  function v190(a$$470) {
    var b$$362 = {};
    switch(a$$470) {
      case "bottom":
        b$$362 = {left:"0px", bottom:"0px"}
    }
    return b$$362
  }
  function v189() {
    var a$$469 = this.ba();
    var v2188 = a$$469;
    if(v2188) {
      v2188 = !(2 > a$$469.length)
    }
    if(v2188) {
      var v397 = a$$469.length - 1;
      introspect(JAM.policy.p4) {
        var b$$361 = a$$469[v397]
      }
      var c$$243 = a$$469[0];
      if(b$$361 && c$$243) {
        c$$243 = JAM.call(this.Ma, this, [this.ua]);
        var d$$153 = JAM.call(this.Qb, this, [this.ua, c$$243]);
        Q$$1(b$$361, d$$153);
        b$$361 = a$$469.length - 1;
        var v402 = 0 <= b$$361;
        for(;v402;) {
          introspect(JAM.policy.p4) {
            var v401 = a$$469[b$$361]
          }
          Id(v401, c$$243);
          b$$361 = b$$361 - 1;
          v402 = 0 <= b$$361
        }
        Id(this.s, c$$243)
      }
    }
    return
  }
  function v188() {
    var a$$468 = JAM.call(this.Ma, this, [this.ua]);
    a$$468 = JAM.call(this.Rb, this, [this.ua, a$$468]);
    JAM.call(this.cb, this, [this.i.document.body, a$$468]);
    return
  }
  function v187() {
    var v409 = this.ga;
    if(!v409) {
      this.pb();
      var v4191 = this.u();
      var v4915;
      if(this.Ra) {
        v4915 = 1
      }else {
        v4915 = 0
      }
      Q$$1(v4191, {display:"block", opacity:v4915});
      this.ga = !0
    }
    return
  }
  function v186() {
    this.Ib = !0;
    var v2192 = this.Sa();
    if(v2192) {
      var v3473 = og(this.i);
      if(v3473) {
        v3473 = !this.Ra
      }
      v2192 = v3473
    }
    if(v2192) {
      var a$$467 = this.u();
      if(a$$467) {
        this.show();
        Q$$1(a$$467, {position:"fixed", background:"rgba(0,0,0,0.65)", boxShadow:"0 -5px 5px -5px rgba(0,0,0,0.5)", zIndex:999999});
        this.qb();
        a$$467 = new fh(a$$467, 350);
        a$$467.play();
        this.Ra = !0
      }
    }
    return
  }
  function v185() {
    var v411 = this.ga;
    if(v411) {
      Q$$1(this.u(), "display", "none");
      this.$a();
      this.ga = !1
    }
    return
  }
  function v184() {
    if(!this.Da) {
      this.Da = !0;
      A$$1(this.i, "orientationchange", this.Zc);
      A$$1(this.i, "resize", this.$c);
      A$$1(this.i, "scroll", this.ad);
      A$$1(this.i, "touchcancel", this.bd);
      A$$1(this.i, "touchend", this.cd);
      A$$1(this.i, "touchmove", this.dd);
      A$$1(this.i, "touchstart", this.ed);
      var a$$466 = new gh(this.u(), 250, JAM.call(r$$2, null, [this.$a, this]));
      a$$466.play()
    }
    return
  }
  function v183() {
    if(!this.Ub) {
      var a$$464 = this.ba();
      var v2196 = !a$$464;
      if(!v2196) {
        v2196 = 2 > a$$464.length
      }
      if(v2196) {
        return null
      }
      this.Ub = a$$464[a$$464.length - 1]
    }
    return this.Ub
  }
  function v182() {
    return"adsbygoogle"
  }
  function v181() {
    if(!this.X) {
      this.X = [];
      var a$$463 = this.sb;
      var v2199 = a$$463;
      if(v2199) {
        v2199 = !$b(Zc(a$$463), "adsbygoogle")
      }
      var v432 = v2199;
      for(;v432;) {
        var v2200 = this.X;
        JAM.call(v2200.push, v2200, [a$$463]);
        a$$463 = a$$463.parentNode;
        var v2201 = a$$463;
        if(v2201) {
          v2201 = !$b(Zc(a$$463), "adsbygoogle")
        }
        v432 = v2201
      }
      if(a$$463) {
        var v2202 = this.X;
        JAM.call(v2202.push, v2202, [a$$463])
      }
    }
    return this.X
  }
  function v180() {
    Nd(this.W, this.current[0]);
    return
  }
  function v179() {
    qd(this.W);
    if(this.onEndCallback) {
      this.onEndCallback()
    }
    return
  }
  function v178() {
    Nd(this.W, this.current[0]);
    return
  }
  function v177() {
    this.Ic = !0;
    return
  }
  function v176() {
    var v5130 = ha$$1();
    this.hb = v5130;
    this.Sc = this.hb + this.jd;
    this.Ca();
    return
  }
  function v175(a$$459) {
    this.current = [];
    var b$$356 = 0;
    var v444 = b$$356 < this.ib.length;
    for(;v444;) {
      var v442 = this.current;
      var v4658 = this.Tc;
      introspect(JAM.policy.p4) {
        var v4198 = v4658[b$$356]
      }
      var v4659 = this.ib;
      introspect(JAM.policy.p4) {
        var v4199 = v4659[b$$356]
      }
      var v2206 = (v4198 - v4199) * a$$459;
      var v3480 = this.ib;
      introspect(JAM.policy.p4) {
        var v2207 = v3480[b$$356]
      }
      JAM.call(v442.push, v442, [v2206 + v2207]);
      b$$356 = b$$356 + 1;
      v444 = b$$356 < this.ib.length
    }
    return
  }
  function v174() {
    return
  }
  function v173() {
    return
  }
  function v172() {
    if(!this.Ic) {
      var a$$458 = ha$$1();
      a$$458 = (a$$458 - this.hb) / (this.Sc - this.hb);
      var v447 = 1 <= a$$458;
      if(v447) {
        a$$458 = 1
      }
      JAM.call(this.Pc, this, [a$$458]);
      this.C();
      var v448;
      if(1 == a$$458) {
        v448 = this.ka()
      }else {
        v448 = w$$6.setTimeout(JAM.call(r$$2, null, [this.Ca, this]), 20)
      }
      v448
    }
    return
  }
  function v171(a$$456) {
    var v2215 = a$$456;
    if(v2215) {
      var v3483 = a$$456.origin;
      introspect(JAM.policy.p4) {
        v2215 = mg[v3483]
      }
    }
    if(v2215) {
      var b$$354;
      try {
        b$$354 = gg(a$$456.data)
      }catch(c$$238) {
      }
      if(b$$354) {
        var v451 = a$$456 = b$$354.adType;
        if(!v451) {
          a$$456 = 1
        }
        var d$$151 = rg(this.lc);
        var v3484 = d$$151.wasReactiveAdConfigReceived;
        introspect(JAM.policy.p4) {
          var v2217 = v3484[a$$456]
        }
        if(!v2217) {
          var e$$89 = Yg(a$$456);
          if(e$$89) {
            var v2218 = JAM.call(e$$89.ia, e$$89, [b$$354]);
            if(v2218) {
              JAM.set(d$$151.wasReactiveAdConfigReceived, a$$456, !0, JAM.policy.p2);
              JAM.call(e$$89.D, e$$89, [this.lc])
            }
          }
        }
      }
    }
    return
  }
  function v170(a$$441) {
    if(this.l) {
      var b$$343 = this.l;
      var v455 = a$$441.document;
      var c$$227 = JAM.call(v455.createElement, v455, ["ins"]);
      c$$227.className = "adsbygoogle";
      c$$227.style.display = "none";
      var v457 = a$$441.document.body;
      JAM.call(v457.appendChild, v457, [c$$227]);
      var d$$144 = a$$441.document.documentElement.clientHeight;
      var e$$85 = a$$441.document.documentElement.clientWidth;
      d$$144 = {google_ad_client:b$$343.adClient, google_ad_width:e$$85, google_ad_height:d$$144, google_reactive_ad_format:8};
      var v461 = b$$343.adTest;
      if(v461) {
        d$$144.google_ad_test = b$$343.adTest
      }
      var a$$inline_361 = c$$227;
      var b$$inline_362 = d$$144;
      var c$$inline_363 = a$$441;
      c$$inline_363 = c$$inline_363 || window;
      Cg(a$$inline_361);
      Dg(a$$inline_361, b$$inline_362, c$$inline_363)
    }
    return
  }
  function v169(a$$440) {
    var JSCompiler_inline_result$$66;
    JSCompiler_inline_label_Pg_360: {
      var a$$inline_357 = a$$440;
      if(!a$$inline_357) {
        JSCompiler_inline_result$$66 = null;
        break JSCompiler_inline_label_Pg_360
      }
      var b$$inline_358 = new Og;
      var c$$inline_359 = a$$inline_357.adClient;
      var v464 = p$$1(c$$inline_359);
      if(v464) {
        b$$inline_358.adClient = c$$inline_359
      }
      a$$inline_357 = a$$inline_357.adTest;
      var v465 = p$$1(a$$inline_357);
      if(v465) {
        b$$inline_358.adTest = a$$inline_357
      }
      var v466;
      if(b$$inline_358.adClient) {
        v466 = b$$inline_358
      }else {
        v466 = null
      }
      JSCompiler_inline_result$$66 = v466
    }
    var v467;
    if(this.l = JSCompiler_inline_result$$66) {
      v467 = !0
    }else {
      v467 = !1
    }
    return v467
  }
  function v168(a$$439, b$$342) {
    var v5131 = new Og;
    this.l = v5131;
    this.l.adClient = b$$342;
    this.l.adTest = "on";
    JAM.call(this.D, this, [a$$439]);
    return
  }
  function v167(a$$436) {
    if(this.l) {
      var b$$339 = this.l;
      var v470 = a$$436.document;
      var c$$225 = JAM.call(v470.createElement, v470, ["ins"]);
      c$$225.className = "adsbygoogle";
      var v471 = a$$436.document.body;
      JAM.call(v471.appendChild, v471, [c$$225]);
      var d$$143 = String(Math.random());
      d$$143 = d$$143.slice(-3);
      d$$143 = {google_ad_client:b$$339.adClient, google_ad_width:b$$339.adWidth, google_ad_height:b$$339.adHeight, google_ad_format:b$$339.adWidth + "x" + b$$339.adHeight + "_as", google_reactive_ad_format:1, google_ad_section:d$$143};
      var v477 = b$$339.adSlot;
      if(v477) {
        d$$143.google_ad_slot = b$$339.adSlot
      }
      d$$143.google_ad_channel = "GoogleAnchorAd";
      var v478 = b$$339.adChannel;
      if(v478) {
        d$$143.google_ad_channel = d$$143.google_ad_channel + ("+" + b$$339.adChannel)
      }
      var v479 = b$$339.adTest;
      if(v479) {
        d$$143.google_adtest = b$$339.adTest
      }
      var a$$inline_353 = c$$225;
      var b$$inline_354 = d$$143;
      var c$$inline_355 = a$$436;
      c$$inline_355 = c$$inline_355 || window;
      Cg(a$$inline_353);
      Dg(a$$inline_353, b$$inline_354, c$$inline_355)
    }
    return
  }
  function v166(a$$435) {
    var JSCompiler_inline_result$$23;
    JSCompiler_inline_label_Lg_352: {
      var a$$inline_349 = a$$435;
      if(!a$$inline_349) {
        JSCompiler_inline_result$$23 = null;
        break JSCompiler_inline_label_Lg_352
      }
      var b$$inline_350 = new Kg;
      var c$$inline_351 = a$$inline_349.adClient;
      var v482 = p$$1(c$$inline_351);
      if(v482) {
        b$$inline_350.adClient = c$$inline_351
      }
      c$$inline_351 = a$$inline_349.adWidth;
      var v483 = q$$3(c$$inline_351);
      if(v483) {
        var v2226 = 0 < c$$inline_351;
        if(v2226) {
          b$$inline_350.adWidth = c$$inline_351
        }
      }
      c$$inline_351 = a$$inline_349.adHeight;
      var v484 = q$$3(c$$inline_351);
      if(v484) {
        var v2227 = 0 < c$$inline_351;
        if(v2227) {
          b$$inline_350.adHeight = c$$inline_351
        }
      }
      c$$inline_351 = a$$inline_349.adSlot;
      var v485 = p$$1(c$$inline_351);
      if(v485) {
        b$$inline_350.adSlot = c$$inline_351
      }
      c$$inline_351 = a$$inline_349.adChannel;
      var v486 = p$$1(c$$inline_351);
      if(v486) {
        b$$inline_350.adChannel = c$$inline_351
      }
      a$$inline_349 = a$$inline_349.adTest;
      var v487 = p$$1(a$$inline_349);
      if(v487) {
        b$$inline_350.adTest = a$$inline_349
      }
      var v488;
      var v3489 = b$$inline_350.adClient;
      if(v3489) {
        var v4204 = b$$inline_350.adWidth;
        if(v4204) {
          v4204 = b$$inline_350.adHeight
        }
        v3489 = v4204
      }
      if(v3489) {
        v488 = b$$inline_350
      }else {
        v488 = null
      }
      JSCompiler_inline_result$$23 = v488
    }
    var v489;
    if(this.l = JSCompiler_inline_result$$23) {
      v489 = !0
    }else {
      v489 = !1
    }
    return v489
  }
  function v165(a$$434, b$$338) {
    var JSCompiler_inline_result$$35;
    var a$$inline_346 = b$$338;
    var b$$inline_347 = new Kg;
    b$$inline_347.adClient = a$$inline_346;
    b$$inline_347.adWidth = 320;
    b$$inline_347.adHeight = 50;
    b$$inline_347.adTest = "on";
    JSCompiler_inline_result$$35 = b$$inline_347;
    this.l = JSCompiler_inline_result$$35;
    JAM.call(this.D, this, [a$$434]);
    return
  }
  function v164(a$$412, b$$326) {
    JAM.call(b$$326.push, b$$326, ["{"]);
    var c$$215 = "";
    var d$$137;
    for(d$$137 in a$$412) {
      var v2230 = Object.prototype.hasOwnProperty;
      if(JAM.call(v2230.call, v2230, [a$$412, d$$137])) {
        introspect(JAM.policy.p4) {
          var e$$80 = a$$412[d$$137]
        }
        var v490 = "function" != typeof e$$80;
        if(v490) {
          JAM.call(b$$326.push, b$$326, [c$$215]);
          JAM.call(this.r, this, [d$$137, b$$326]);
          JAM.call(b$$326.push, b$$326, [":"]);
          var v4660;
          if(this.qa) {
            var v4916 = this.qa;
            v4660 = JAM.call(v4916.call, v4916, [a$$412, d$$137, e$$80])
          }else {
            v4660 = e$$80
          }
          JAM.call(this.n, this, [v4660, b$$326]);
          c$$215 = ","
        }
      }
    }
    JAM.call(b$$326.push, b$$326, ["}"]);
    return
  }
  function v163(a$$411, b$$325) {
    var c$$214 = a$$411.length;
    JAM.call(b$$325.push, b$$325, ["["]);
    var d$$136 = "";
    var e$$79 = 0;
    var v492 = e$$79 < c$$214;
    for(;v492;) {
      JAM.call(b$$325.push, b$$325, [d$$136]);
      d$$136 = a$$411[e$$79];
      var v4206;
      if(this.qa) {
        var v4661 = this.qa;
        v4206 = JAM.call(v4661.call, v4661, [a$$411, String(e$$79), d$$136])
      }else {
        v4206 = d$$136
      }
      JAM.call(this.n, this, [v4206, b$$325]);
      d$$136 = ",";
      e$$79 = e$$79 + 1;
      v492 = e$$79 < c$$214
    }
    JAM.call(b$$325.push, b$$325, ["]"]);
    return
  }
  function v162(a$$410, b$$324) {
    var v2232;
    var v4207 = isFinite(a$$410);
    if(v4207) {
      v4207 = !isNaN(a$$410)
    }
    if(v4207) {
      v2232 = a$$410
    }else {
      v2232 = "null"
    }
    JAM.call(b$$324.push, b$$324, [v2232]);
    return
  }
  function v161(a$$408, b$$322) {
    function v160(a$$409) {
      if(a$$409 in ig) {
        introspect(JAM.policy.p4) {
          return ig[a$$409]
        }
      }
      var b$$323 = a$$409.charCodeAt(0);
      var e$$78 = "\\u";
      var v495;
      if(16 > b$$323) {
        v495 = e$$78 = e$$78 + "000"
      }else {
        var v2233;
        if(256 > b$$323) {
          v2233 = e$$78 = e$$78 + "00"
        }else {
          var v3493 = 4096 > b$$323;
          if(v3493) {
            v3493 = e$$78 = e$$78 + "0"
          }
          v2233 = v3493
        }
        v495 = v2233
      }
      v495;
      return JAM.set(ig, a$$409, e$$78 + b$$323.toString(16), JAM.policy.p2)
    }
    JAM.call(b$$322.push, b$$322, ['"', a$$408.replace(jg, v160), '"']);
    return
  }
  function v159(a$$407, b$$321) {
    switch(typeof a$$407) {
      case "string":
        JAM.call(this.r, this, [a$$407, b$$321]);
        break;
      case "number":
        JAM.call(this.L, this, [a$$407, b$$321]);
        break;
      case "boolean":
        JAM.call(b$$321.push, b$$321, [a$$407]);
        break;
      case "undefined":
        JAM.call(b$$321.push, b$$321, ["null"]);
        break;
      case "object":
        if(null == a$$407) {
          JAM.call(b$$321.push, b$$321, ["null"]);
          break
        }
        if(n$$2(a$$407)) {
          JAM.call(this.xc, this, [a$$407, b$$321]);
          break
        }
        JAM.call(this.M, this, [a$$407, b$$321]);
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof a$$407);
    }
    return
  }
  function v158(a$$406) {
    var b$$320 = [];
    JAM.call(this.n, this, [a$$406, b$$320]);
    return b$$320.join("")
  }
  function v157() {
    function v156(b$$317) {
      var v503 = !e$$76;
      if(v503) {
        var v2238 = JAM.call(c$$212, null, [b$$317]);
        if(v2238) {
          JAM.call(d$$134, null, [b$$317, a$$402, f$$49]);
          e$$76 = !0
        }
      }
      return
    }
    var v2239 = this.Rc();
    if(v2239) {
      v2239 = !this.Pa
    }
    if(v2239) {
      var a$$402 = this.J();
      var v504 = a$$402;
      if(v504) {
        v504 = a$$402.contentWindow
      }
      var b$$316 = v504;
      if(b$$316) {
        var c$$212 = ga$$1(eg, b$$316);
        var d$$134 = JAM.call(r$$2, null, [V$$1.prototype.da, this]);
        b$$316 = ag;
        var e$$76 = !1;
        var f$$49 = !1;
        x$$51(b$$316, v156)
      }
    }
    return
  }
  function v155(a$$400) {
    JAM.call(this.eb, this, [a$$400]);
    this.hc = !0;
    return
  }
  function v154(a$$399, b$$314) {
    JAM.call(this.eb, this, [a$$399]);
    this.ma = !0;
    switch(b$$314) {
      case Zf:
        this.za = 453848234;
        break;
      case $f:
        this.za = 453848236
    }
    return
  }
  function v153(a$$398) {
    var v507 = this.jc;
    if(!v507) {
      var v2241;
      if(a$$398) {
        v2241 = this.Tb = !0
      }else {
        v2241 = this.Pa = !0
      }
      v2241
    }
    return
  }
  function v152(a$$397) {
    var v508 = this.va;
    if(!v508) {
      JAM.call(this.ta, this, [a$$397, this.F]);
      this.va = !0;
      a$$397.style.display = ""
    }
    return
  }
  function v151(a$$396, b$$313) {
    if(a$$396) {
      var v2244 = a$$396.contentWindow;
      if(v2244) {
        a$$396.contentWindow.postMessage(b$$313, this.Fb)
      }
    }
    return
  }
  function v150() {
    var v509 = this.Q.document;
    return JAM.call(JAM.get(v509, "getElementById", JAM.policy.p1), v509, ["zrt_ads_frame" + this.Q.google_unique_id])
  }
  function v149(a$$395) {
    var b$$312 = this.J();
    var v2247 = this.Fb == a$$395.origin;
    if(v2247) {
      var v3502 = b$$312;
      if(v3502) {
        v3502 = b$$312.contentWindow == a$$395.source
      }
      v2247 = v3502
    }
    if(v2247) {
      a$$395 = a$$395.data;
      var c$$210 = !0;
      var v511 = JAM.call(this.da, this, [a$$395, b$$312, c$$210]);
      if(v511) {
        A$$1(this.Q, "message", this.K);
        this.R();
        var v3503 = this.ma;
        if(v3503) {
          JAM.call(this.ta, this, [b$$312, Yf]);
          b$$312 = this.U;
          this.U = null;
          if(b$$312) {
            JAM.call(b$$312, null, [this.v(), this.za, !0])
          }
        }
      }
    }
    return
  }
  function v148(a$$394, b$$311, c$$209) {
    var v513;
    introspect(JAM.policy.p4) {
      var v2249 = Wf[a$$394]
    }
    if(v2249) {
      JAM.call(this.Ac, this, [c$$209, a$$394]);
      v513 = !0
    }else {
      var v2248;
      if("zr" == a$$394) {
        JAM.call(this.Dc, this, [c$$209]);
        var v4665 = this.F;
        if(v4665) {
          JAM.call(this.gb, this, [b$$311])
        }
        v2248 = !0
      }else {
        v2248 = !1
      }
      v513 = v2248
    }
    return v513
  }
  function v147() {
    this.Fc = !0;
    return
  }
  function v146() {
    var JSCompiler_inline_result$$8;
    var a$$inline_329 = this.Fc;
    var b$$inline_330 = this.Tb;
    var c$$inline_331 = this.Pa;
    var d$$inline_332 = this.Sb;
    var v514;
    if(a$$inline_329) {
      v514 = 8
    }else {
      v514 = 0
    }
    a$$inline_329 = v514;
    var v515;
    if(b$$inline_330) {
      v515 = 16
    }else {
      v515 = 0
    }
    b$$inline_330 = v515;
    var v516;
    if(c$$inline_331) {
      v516 = 32
    }else {
      v516 = 0
    }
    c$$inline_331 = v516;
    var v517;
    if(d$$inline_332) {
      v517 = 64
    }else {
      v517 = 0
    }
    d$$inline_332 = v517;
    JSCompiler_inline_result$$8 = a$$inline_329 | b$$inline_330 | c$$inline_331 | d$$inline_332;
    return JSCompiler_inline_result$$8
  }
  function v145() {
    var a$$392 = this.F;
    if(a$$392) {
      var b$$309 = ce(a$$392, "w");
      var c$$207 = ce(a$$392, "h");
      var d$$132 = ce(a$$392, "ifi");
      d$$132 = Lb(d$$132);
      d$$132 = {id:d$$132, name:d$$132};
      Ff(d$$132, b$$309, c$$207, !1, Df(a$$392));
      var v521 = this.Q.document;
      JAM.call(v521.write, v521, [Cf(d$$132)]);
      this.va = !0
    }
    return
  }
  function v144(a$$391, b$$308) {
    if(!this.ma) {
      this.F = a$$391;
      this.U = b$$308;
      if(this.hc) {
        try {
          JAM.call(this.gb, this, [this.J()])
        }catch(c$$206) {
          this.Sb = !0;
          JAM.call(b$$308, null, [this.v(), null, !1])
        }
      }else {
        var v524 = "AZ" == this.Za;
        if(v524) {
          this.wb()
        }
      }
    }
    return
  }
  function v143() {
    this.F = "";
    this.ma = this.jc = !0;
    this.U = null;
    var v527 = this.hc;
    if(v527) {
      A$$1(this.Q, "message", this.K);
      JAM.call(this.ta, this, [this.J(), Yf])
    }
    return
  }
  function v142() {
    var a$$390 = Ge;
    var v528 = this.Za == a$$390.IFRAME_SIGNALING;
    if(!v528) {
      v528 = this.Za == a$$390.ALWAYS_ZRT
    }
    return v528
  }
  function v141() {
    var v529 = this.va;
    if(!v529) {
      v529 = this.ma
    }
    return v529
  }
  function v140() {
    return this.za
  }
  function v139() {
    return this.hc
  }
  function v138() {
    return this.ma
  }
  function v137() {
    return this.va
  }
  function v136(a$$355) {
    this.j = 0;
    a$$355.fn();
    return
  }
  function v135() {
    var v2262 = 0 == this.j;
    if(v2262) {
      v2262 = this.oa.length
    }
    if(v2262) {
      var a$$354 = this.oa.shift();
      this.j = 2;
      var b$$282 = xe("sjr::run", JAM.call(r$$2, null, [this.ab, this, a$$354]));
      a$$354.win.setTimeout(b$$282, 0);
      this.sa()
    }
    return
  }
  function v134() {
    var a$$353 = xe("sjr::tryrun", JAM.call(r$$2, null, [this.Oc, this]));
    this.p.setTimeout(a$$353, 0);
    return
  }
  function v133() {
    var v2265 = !window;
    if(!v2265) {
      v2265 = !Array
    }
    return!v2265
  }
  function v132() {
    var v537 = 1 == this.j;
    if(v537) {
      var v3511 = null != this.na;
      if(v3511) {
        this.p.clearTimeout(this.na);
        this.na = null
      }
      this.j = 0
    }
    this.sa();
    return
  }
  function v131(a$$352) {
    this.j = 1;
    if(a$$352) {
      var b$$281 = xe("sjr::timeout", JAM.call(r$$2, null, [this.ra, this]));
      var v5132 = this.p.setTimeout(b$$281, a$$352);
      this.na = v5132
    }
    return
  }
  function v130(a$$351, b$$280) {
    var v540 = this.oa;
    var v3512 = b$$280;
    if(!v3512) {
      v3512 = this.p
    }
    JAM.call(v540.push, v540, [new nf(a$$351, v3512)]);
    this.sa();
    return
  }
  function v129(a$$350, b$$279) {
    var v542;
    var v3513 = 0 != this.j;
    if(!v3513) {
      var v4216 = 0 != this.oa.length;
      if(!v4216) {
        var v4669 = b$$279;
        if(v4669) {
          v4669 = b$$279 != window
        }
        v4216 = v4669
      }
      v3513 = v4216
    }
    if(v3513) {
      v542 = JAM.call(this.Y, this, [a$$350, b$$279])
    }else {
      this.j = 2;
      v542 = JAM.call(this.ab, this, [new nf(a$$350, window)])
    }
    v542;
    return
  }
  function v128(a$$342, b$$273, c$$185) {
    var d$$116;
    var e$$71 = {signature:"", adFrames:0};
    if(c$$185 > T$$1.MAXIMUM_IFRAME_DEPTH) {
      return e$$71
    }
    try {
      var v544 = T$$1.NAME_FIRST_GOOGLE_WINDOW;
      introspect(JAM.policy.p4) {
        d$$116 = a$$342[v544]
      }
    }catch(f$$43) {
    }
    if(d$$116) {
      var v3515;
      if(a$$342 == b$$273) {
        v3515 = "I"
      }else {
        v3515 = "A"
      }
      e$$71.signature = v3515;
      e$$71.adFrames = 1
    }
    var g$$27 = 0;
    var v546 = g$$27 < a$$342.length;
    for(;v546;) {
      introspect(JAM.policy.p4) {
        var h$$19 = a$$342[g$$27]
      }
      var v545 = h$$19 != d$$116;
      if(v545) {
        h$$19 = JAM.call(T$$1.Ha, T$$1, [h$$19, b$$273, c$$185 + 1]);
        e$$71.adFrames = e$$71.adFrames + h$$19.adFrames;
        var v3516;
        if(h$$19.signature) {
          v3516 = e$$71.signature + ("!" + h$$19.signature + "~")
        }else {
          v3516 = e$$71.signature + "o"
        }
        e$$71.signature = v3516
      }
      g$$27 = g$$27 + 1;
      v546 = g$$27 < a$$342.length
    }
    return e$$71
  }
  function v127(a$$341, b$$272, c$$184, d$$115, e$$70) {
    a$$341 = JAM.call(T$$1.Ha, T$$1, [a$$341.top, a$$341, 0]);
    var f$$42 = a$$341.signature.substring(0, 1800);
    b$$272 = {frmn:a$$341.adFrames, frms:f$$42, adk:b$$272, correlator:c$$184, frm:d$$115, frmn0:e$$70};
    c$$184 = L$$1(La$$1(), "/pagead/gen_204?id=frmn");
    var JSCompiler_inline_result$$61;
    var a$$inline_260 = [c$$184];
    var b$$inline_261 = b$$272;
    var c$$inline_262;
    for(c$$inline_262 in b$$inline_261) {
      introspect(JAM.policy.p4) {
        var v551 = b$$inline_261[c$$inline_262]
      }
      Ve(c$$inline_262, v551, a$$inline_260)
    }
    JSCompiler_inline_result$$61 = a$$inline_260;
    var a$$inline_264 = JSCompiler_inline_result$$61;
    if(a$$inline_264[1]) {
      var b$$inline_265 = a$$inline_264[0];
      var c$$inline_266 = b$$inline_265.indexOf("#");
      var v552 = 0 <= c$$inline_266;
      if(v552) {
        JAM.call(a$$inline_264.push, a$$inline_264, [b$$inline_265.substr(c$$inline_266)]);
        a$$inline_264[0] = b$$inline_265 = b$$inline_265.substr(0, c$$inline_266)
      }
      c$$inline_266 = b$$inline_265.indexOf("?");
      var v553;
      if(0 > c$$inline_266) {
        v553 = a$$inline_264[1] = "?"
      }else {
        var v2273 = c$$inline_266 == b$$inline_265.length - 1;
        if(v2273) {
          v2273 = a$$inline_264[1] = void 0
        }
        v553 = v2273
      }
      v553
    }
    c$$184 = a$$inline_264.join("");
    nb$$1(w$$6, c$$184);
    return
  }
  function v126(a$$340, b$$271, c$$183, d$$114) {
    var e$$69 = JAM.call(T$$1.Ha, T$$1, [a$$340.top, a$$340, 0]);
    window.setTimeout(ga$$1(T$$1.Uc, a$$340, b$$271, c$$183, d$$114, e$$69.adFrames), T$$1.IFRAME_COUNTS_DELAY);
    return e$$69.adFrames
  }
  function v125(a$$339, b$$270) {
    var c$$182 = T$$1;
    if(a$$339.top == a$$339) {
      return c$$182.NO_IFRAMING
    }
    if(b$$270) {
      var d$$113 = a$$339.location.ancestorOrigins;
      if(d$$113) {
        var v560;
        var v4225 = d$$113.length - 1;
        introspect(JAM.policy.p4) {
          var v3520 = d$$113[v4225]
        }
        if(v3520 == a$$339.location.origin) {
          v560 = c$$182.SAME_DOMAIN_IFRAMING
        }else {
          v560 = c$$182.CROSS_DOMAIN_IFRAMING
        }
        return v560
      }
    }
    var v561;
    if(Kb(a$$339.top)) {
      v561 = c$$182.SAME_DOMAIN_IFRAMING
    }else {
      v561 = c$$182.CROSS_DOMAIN_IFRAMING
    }
    return v561
  }
  function v124(a$$331, b$$264) {
    var c$$177 = Oe("rs", a$$331);
    var d$$110 = ce(a$$331, "dt");
    c$$177 = c$$177.replace(/&dtd=(\d+|M)/, "&dtd=" + Hb(d$$110));
    JAM.call(this.set, this, [b$$264, c$$177]);
    return c$$177
  }
  function v123(a$$330) {
    var v563 = this.p.document;
    a$$330 = JAM.call(JAM.get(v563, "getElementById", JAM.policy.p1), v563, [a$$330]);
    var b$$263 = a$$330.contentWindow.document;
    var v2282 = a$$330.onload;
    if(v2282) {
      var v3523 = b$$263;
      if(v3523) {
        var v4227 = !b$$263.body;
        if(!v4227) {
          v4227 = !b$$263.body.firstChild
        }
        v3523 = v4227
      }
      v2282 = v3523
    }
    if(v2282) {
      a$$330.onload()
    }
    return
  }
  function v122(a$$329, b$$262) {
    JAM.set(this.hd.handlers, a$$329, b$$262, JAM.policy.p2);
    var v567 = this.p.addEventListener;
    if(v567) {
      this.p.addEventListener("load", JAM.call(r$$2, null, [this.Jb, this, a$$329]), !1)
    }
    return
  }
  function v121(a$$322, b$$256) {
    JAM.call(b$$256.push, b$$256, ["{"]);
    var c$$173 = "";
    var d$$109;
    for(d$$109 in a$$322) {
      if(a$$322.hasOwnProperty(d$$109)) {
        introspect(JAM.policy.p4) {
          var e$$68 = a$$322[d$$109]
        }
        var v568 = "function" != typeof e$$68;
        if(v568) {
          JAM.call(b$$256.push, b$$256, [c$$173]);
          JAM.call(this.r, this, [d$$109, b$$256]);
          JAM.call(b$$256.push, b$$256, [":"]);
          JAM.call(this.n, this, [e$$68, b$$256]);
          c$$173 = ","
        }
      }
    }
    JAM.call(b$$256.push, b$$256, ["}"]);
    return
  }
  function v120(a$$321, b$$255) {
    var c$$172 = a$$321.length;
    JAM.call(b$$255.push, b$$255, ["["]);
    var d$$108 = "";
    var e$$67 = 0;
    var v570 = e$$67 < c$$172;
    for(;v570;) {
      JAM.call(b$$255.push, b$$255, [d$$108]);
      introspect(JAM.policy.p4) {
        var v3525 = a$$321[e$$67]
      }
      JAM.call(this.n, this, [v3525, b$$255]);
      d$$108 = ",";
      e$$67 = e$$67 + 1;
      v570 = e$$67 < c$$172
    }
    JAM.call(b$$255.push, b$$255, ["]"]);
    return
  }
  function v119(a$$320, b$$254) {
    var v2289;
    var v4228 = isFinite(a$$320);
    if(v4228) {
      v4228 = !isNaN(a$$320)
    }
    if(v4228) {
      v2289 = a$$320
    }else {
      v2289 = "null"
    }
    JAM.call(b$$254.push, b$$254, [v2289]);
    return
  }
  function v118(a$$318, b$$252) {
    function v117(a$$319) {
      if(a$$319 in Ce) {
        introspect(JAM.policy.p4) {
          return Ce[a$$319]
        }
      }
      var b$$253 = a$$319.charCodeAt(0);
      var e$$66 = "\\u";
      var v573;
      if(16 > b$$253) {
        v573 = e$$66 = e$$66 + "000"
      }else {
        var v2290;
        if(256 > b$$253) {
          v2290 = e$$66 = e$$66 + "00"
        }else {
          var v3527 = 4096 > b$$253;
          if(v3527) {
            v3527 = e$$66 = e$$66 + "0"
          }
          v2290 = v3527
        }
        v573 = v2290
      }
      v573;
      return JAM.set(Ce, a$$319, e$$66 + b$$253.toString(16), JAM.policy.p2)
    }
    JAM.call(b$$252.push, b$$252, ['"']);
    JAM.call(b$$252.push, b$$252, [a$$318.replace(De, v117)]);
    JAM.call(b$$252.push, b$$252, ['"']);
    return
  }
  function v116(a$$317, b$$251) {
    switch(typeof a$$317) {
      case "string":
        JAM.call(this.r, this, [a$$317, b$$251]);
        break;
      case "number":
        JAM.call(this.L, this, [a$$317, b$$251]);
        break;
      case "boolean":
        JAM.call(b$$251.push, b$$251, [a$$317]);
        break;
      case "undefined":
        JAM.call(b$$251.push, b$$251, ["null"]);
        break;
      case "object":
        if(null == a$$317) {
          JAM.call(b$$251.push, b$$251, ["null"]);
          break
        }
        if(a$$317 instanceof Array) {
          JAM.call(this.yc, this, [a$$317, b$$251]);
          break
        }
        JAM.call(this.M, this, [a$$317, b$$251]);
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof a$$317);
    }
    return
  }
  function v115(a$$316) {
    var b$$250 = [];
    JAM.call(this.n, this, [a$$316, b$$250]);
    return b$$250.join("")
  }
  function v114() {
    return this.Lb
  }
  function v113() {
    var v581 = window.google_enable_ose_periscope;
    if(v581) {
      this.Lb = !0
    }
    return
  }
  function v112(a$$299, b$$236, c$$162, d$$98, e$$60, f$$36) {
    function v111() {
      h$$17.lb = !0;
      return
    }
    var g$$24 = null;
    if(e$$60) {
      if(f$$36) {
        g$$24 = new u$$2(e$$60, f$$36)
      }
    }
    var v2295 = this.xa;
    if(v2295) {
      v2295 = d$$98
    }
    if(v2295) {
      JAM.call(this.xa, this, [d$$98, a$$299, b$$236, !0, "", g$$24, ""])
    }else {
      if("js" == c$$162) {
        JAM.call(this.oc, this, [a$$299, "google_ad_request_done"])
      }else {
        var h$$17 = new le(a$$299, b$$236, c$$162, d$$98, g$$24);
        var v583 = this.q;
        JAM.call(v583.push, v583, [h$$17]);
        if(d$$98) {
          a$$299 = v111;
          fe(d$$98, a$$299)
        }
      }
      this.bc()
    }
    return
  }
  function v110() {
    return this.ha.length + this.q.length
  }
  function v109() {
    return this.Aa
  }
  function v108() {
    var v588;
    if(window) {
      v588 = this.Wa
    }else {
      v588 = 0
    }
    return v588
  }
  function v107() {
    return this.Db
  }
  function v106() {
    return""
  }
  function v105(a$$298) {
    if(this.getOseId()) {
      return this.getOseId()
    }
    var b$$235 = window.google_enable_ose;
    var c$$161;
    var v590;
    if(!0 === b$$235) {
      v590 = c$$161 = 2
    }else {
      var v2298 = !1 !== b$$235;
      if(v2298) {
        var v3531 = c$$161 = vb([2], ie);
        if(!v3531) {
          v3531 = c$$161 = vb([3], je)
        }
        v2298 = v3531
      }
      v590 = v2298
    }
    v590;
    if(!c$$161) {
      return 0
    }
    this.Wa = c$$161;
    var v5133 = String(a$$298 || 0);
    this.Aa = v5133;
    return this.getOseId()
  }
  function v104() {
    var a$$297 = [];
    var b$$234 = this.q.length;
    var c$$160 = 0;
    var v596 = c$$160 < b$$234;
    for(;v596;) {
      var v594 = this.q;
      introspect(JAM.policy.p4) {
        var d$$97 = v594[c$$160]
      }
      JAM.call(a$$297.push, a$$297, [d$$97.nb]);
      c$$160 = c$$160 + 1;
      v596 = c$$160 < b$$234
    }
    return a$$297
  }
  function v103(a$$296, b$$233) {
    if(b$$233) {
      JAM.call(this.Fa, this, [this.wa, a$$296, 1])
    }
    var c$$159 = this.q.length;
    var d$$96 = 0;
    var v600 = d$$96 < c$$159;
    for(;v600;) {
      var v598 = this.q;
      introspect(JAM.policy.p4) {
        var e$$59 = v598[d$$96]
      }
      var v599 = !e$$59.Vb;
      if(v599) {
        var v2302 = e$$59.kb;
        if(v2302) {
          JAM.call(a$$296, null, [e$$59.kb, e$$59.nb, e$$59.fd, e$$59.lb, "", e$$59.Yc, ""]);
          e$$59.Vb = !0
        }
      }
      d$$96 = d$$96 + 1;
      v600 = d$$96 < c$$159
    }
    if(b$$233) {
      this.xa = a$$296
    }
    return
  }
  function v102(a$$295, b$$232, c$$158) {
    var d$$95 = this.ha;
    if(0 < d$$95.length) {
      var v601 = a$$295.document;
      var e$$58 = JAM.call(JAM.get(v601, "getElementsByTagName", JAM.policy.p6), v601, ["a"]);
      var f$$35 = 0;
      var v614 = f$$35 < e$$58.length;
      for(;v614;) {
        var g$$23 = 0;
        var v613 = g$$23 < d$$95.length;
        for(;v613;) {
          introspect(JAM.policy.p4) {
            var v602 = d$$95[g$$23]
          }
          var h$$16 = v602[1];
          introspect(JAM.policy.p4) {
            var v4237 = e$$58[f$$35]
          }
          if(0 <= v4237.href.indexOf(h$$16)) {
            introspect(JAM.policy.p4) {
              var v603 = e$$58[f$$35]
            }
            h$$16 = v603.parentNode;
            introspect(JAM.policy.p4) {
              var v2307 = d$$95[g$$23]
            }
            if(v2307[2]) {
              var k$$6 = h$$16;
              var l$$9 = 0;
              var v605 = 4 > l$$9;
              for(;v605;) {
                var v3533 = k$$6.innerHTML;
                introspect(JAM.policy.p4) {
                  var v4238 = d$$95[g$$23]
                }
                if(0 <= v3533.indexOf(v4238[2])) {
                  h$$16 = k$$6;
                  break
                }
                k$$6 = k$$6.parentNode;
                l$$9 = l$$9 + 1;
                v605 = 4 > l$$9
              }
            }
            k$$6 = !0;
            introspect(JAM.policy.p4) {
              var v607 = d$$95[g$$23]
            }
            l$$9 = v607[3];
            introspect(JAM.policy.p4) {
              var v608 = d$$95[g$$23]
            }
            var z$$4 = v608[5];
            introspect(JAM.policy.p4) {
              var v2309 = d$$95[g$$23]
            }
            JAM.call(b$$232, null, [h$$16, v2309[0], c$$158 || 0, k$$6, l$$9, void 0, z$$4]);
            d$$95.splice(g$$23, 1);
            break
          }
          g$$23 = g$$23 + 1;
          v613 = g$$23 < d$$95.length
        }
        f$$35 = f$$35 + 1;
        v614 = f$$35 < e$$58.length
      }
    }
    var v2312 = 0 < d$$95.length;
    if(v2312) {
      v2312 = a$$295 != hc()
    }
    if(v2312) {
      try {
        JAM.call(this.Fa, this, [a$$295.parent, b$$232, c$$158])
      }catch(C$$2) {
      }
    }
    return
  }
  function v101() {
    var v618 = this.Ua;
    if(!v618) {
      mb$$1(D$$1());
      jb$$1(he);
      this.Ua = !0
    }
    return
  }
  function v100(a$$294, b$$230) {
    function v99(b$$231) {
      var v2314 = b$$231;
      if(v2314) {
        v2314 = 0 < b$$231.length
      }
      if(v2314) {
        var v619;
        if(1 < b$$231.length) {
          v619 = b$$231[1].url
        }else {
          v619 = null
        }
        var f$$34 = v619;
        var v620 = b$$231[0].log_info;
        if(!v620) {
          v620 = null
        }
        var g$$22 = v620;
        var v621 = b$$231[0].activeview_url;
        if(!v621) {
          v621 = null
        }
        var h$$15 = v621;
        var v3540;
        if(-1 != b$$231[0].url.indexOf("&")) {
          var v4240;
          if("document" in m$$3) {
            v4240 = Ta$$1(b$$231[0].url)
          }else {
            v4240 = Ua$$1(b$$231[0].url)
          }
          v3540 = v4240
        }else {
          v3540 = b$$231[0].url
        }
        JAM.call(c$$157.push, c$$157, [[a$$294, v3540, f$$34, g$$22, null, h$$15]])
      }
      JAM.call(d$$94, null, [b$$231]);
      return
    }
    var c$$157 = this.ha;
    var v624 = this.wa;
    introspect(JAM.policy.p4) {
      var d$$94 = v624[b$$230]
    }
    if(d$$94) {
      var v4243 = d$$94.orig_callback;
      if(!v4243) {
        v4243 = d$$94
      }
      d$$94 = v4243;
      JAM.set(this.wa, b$$230, v99, JAM.policy.p2);
      var v4245 = this.wa;
      introspect(JAM.policy.p4) {
        var v3541 = v4245[b$$230]
      }
      v3541.orig_callback = d$$94
    }
    return
  }
  function v98(a$$254, b$$194) {
    var v625;
    if(q$$3(b$$194)) {
      v625 = b$$194
    }else {
      v625 = a$$254
    }
    var c$$127 = v625;
    this.left = this.left * a$$254;
    this.right = this.right * a$$254;
    this.top = this.top * c$$127;
    this.bottom = this.bottom * c$$127;
    return this
  }
  function v97(a$$253, b$$193) {
    var v626;
    if(a$$253 instanceof M$$1) {
      this.left = this.left + a$$253.x;
      this.right = this.right + a$$253.x;
      this.top = this.top + a$$253.y;
      v626 = this.bottom = this.bottom + a$$253.y
    }else {
      this.left = this.left + a$$253;
      this.right = this.right + a$$253;
      var v3542 = q$$3(b$$193);
      if(v3542) {
        this.top = this.top + b$$193;
        v3542 = this.bottom = this.bottom + b$$193
      }
      v626 = v3542
    }
    v626;
    return this
  }
  function v96() {
    var v5134 = JAM.call(Math.round, Math, [this.top]);
    this.top = v5134;
    var v5135 = JAM.call(Math.round, Math, [this.right]);
    this.right = v5135;
    var v5136 = JAM.call(Math.round, Math, [this.bottom]);
    this.bottom = v5136;
    var v5137 = JAM.call(Math.round, Math, [this.left]);
    this.left = v5137;
    return this
  }
  function v95() {
    var v5138 = JAM.call(Math.floor, Math, [this.top]);
    this.top = v5138;
    var v5139 = JAM.call(Math.floor, Math, [this.right]);
    this.right = v5139;
    var v5140 = JAM.call(Math.floor, Math, [this.bottom]);
    this.bottom = v5140;
    var v5141 = JAM.call(Math.floor, Math, [this.left]);
    this.left = v5141;
    return this
  }
  function v94() {
    var v5142 = JAM.call(Math.ceil, Math, [this.top]);
    this.top = v5142;
    var v5143 = JAM.call(Math.ceil, Math, [this.right]);
    this.right = v5143;
    var v5144 = JAM.call(Math.ceil, Math, [this.bottom]);
    this.bottom = v5144;
    var v5145 = JAM.call(Math.ceil, Math, [this.left]);
    this.left = v5145;
    return this
  }
  function v93(a$$252, b$$192, c$$126, d$$78) {
    var v639;
    if(da$$1(a$$252)) {
      this.top = this.top - a$$252.top;
      this.right = this.right + a$$252.right;
      this.bottom = this.bottom + a$$252.bottom;
      v639 = this.left = this.left - a$$252.left
    }else {
      this.top = this.top - a$$252;
      this.right = this.right + b$$192;
      this.bottom = this.bottom + c$$126;
      v639 = this.left = this.left - d$$78
    }
    v639;
    return this
  }
  function v92(a$$251) {
    var v640;
    if(this && a$$251) {
      var v2329;
      if(a$$251 instanceof P$$1) {
        var v3543 = a$$251.left >= this.left;
        if(v3543) {
          var v4253 = a$$251.right <= this.right;
          if(v4253) {
            var v4693 = a$$251.top >= this.top;
            if(v4693) {
              v4693 = a$$251.bottom <= this.bottom
            }
            v4253 = v4693
          }
          v3543 = v4253
        }
        v2329 = v3543
      }else {
        var v3544 = a$$251.x >= this.left;
        if(v3544) {
          var v4256 = a$$251.x <= this.right;
          if(v4256) {
            var v4696 = a$$251.y >= this.top;
            if(v4696) {
              v4696 = a$$251.y <= this.bottom
            }
            v4256 = v4696
          }
          v3544 = v4256
        }
        v2329 = v3544
      }
      v640 = v2329
    }else {
      v640 = !1
    }
    return v640
  }
  function v91() {
    var JSCompiler_inline_result$$2;
    var a$$inline_145 = this.V;
    var v641;
    var v3546 = Pc;
    if(!v3546) {
      v3546 = "CSS1Compat" != a$$inline_145.compatMode
    }
    if(v3546) {
      var v2331 = a$$inline_145.body;
      if(!v2331) {
        v2331 = a$$inline_145.documentElement
      }
      v641 = v2331
    }else {
      v641 = a$$inline_145.documentElement
    }
    var b$$inline_146 = v641;
    var v642 = a$$inline_145.parentWindow;
    if(!v642) {
      v642 = a$$inline_145.defaultView
    }
    a$$inline_145 = v642;
    var v643;
    var v3548 = N$$1;
    if(v3548) {
      var v4259 = Uc("10");
      if(v4259) {
        v4259 = a$$inline_145.pageYOffset != b$$inline_146.scrollTop
      }
      v3548 = v4259
    }
    if(v3548) {
      v643 = new M$$1(b$$inline_146.scrollLeft, b$$inline_146.scrollTop)
    }else {
      var v3549 = a$$inline_145.pageXOffset;
      if(!v3549) {
        v3549 = b$$inline_146.scrollLeft
      }
      var v2336 = v3549;
      var v3550 = a$$inline_145.pageYOffset;
      if(!v3550) {
        v3550 = b$$inline_146.scrollTop
      }
      v643 = new M$$1(v2336, v3550)
    }
    JSCompiler_inline_result$$2 = v643;
    return JSCompiler_inline_result$$2
  }
  function v90() {
    return"CSS1Compat" == this.V.compatMode
  }
  function v89(a$$249) {
    var v645 = this.V;
    return JAM.call(v645.createTextNode, v645, [String(a$$249)])
  }
  function v88(a$$248) {
    var v647 = this.V;
    return JAM.call(v647.createElement, v647, [a$$248])
  }
  function v87() {
    var a$$224 = m$$3.document;
    if(a$$224 && N$$1) {
      var b$$175 = Qc();
      var v648 = b$$175;
      if(!v648) {
        var v2340;
        if("CSS1Compat" == a$$224.compatMode) {
          v2340 = parseInt(Sc, 10)
        }else {
          v2340 = 5
        }
        v648 = v2340
      }
      return v648
    }
    return
  }
  function v86(a$$216, b$$169) {
    var v650;
    if(q$$3(b$$169)) {
      v650 = b$$169
    }else {
      v650 = a$$216
    }
    var c$$114 = v650;
    this.x = this.x * a$$216;
    this.y = this.y * c$$114;
    return this
  }
  function v85(a$$215, b$$168) {
    var v651;
    if(a$$215 instanceof M$$1) {
      this.x = this.x + a$$215.x;
      v651 = this.y = this.y + a$$215.y
    }else {
      this.x = this.x + a$$215;
      var v3552 = q$$3(b$$168);
      if(v3552) {
        v3552 = this.y = this.y + b$$168
      }
      v651 = v3552
    }
    v651;
    return this
  }
  function v84() {
    var v5146 = JAM.call(Math.round, Math, [this.x]);
    this.x = v5146;
    var v5147 = JAM.call(Math.round, Math, [this.y]);
    this.y = v5147;
    return this
  }
  function v83() {
    var v5148 = JAM.call(Math.floor, Math, [this.x]);
    this.x = v5148;
    var v5149 = JAM.call(Math.floor, Math, [this.y]);
    this.y = v5149;
    return this
  }
  function v82() {
    var v5150 = JAM.call(Math.ceil, Math, [this.x]);
    this.x = v5150;
    var v5151 = JAM.call(Math.ceil, Math, [this.y]);
    this.y = v5151;
    return this
  }
  function v81() {
    function b$$153(b$$154) {
      var v658 = "" != b$$154;
      if(v658) {
        JAM.call(a$$192.push, a$$192, [b$$154])
      }
      return
    }
    var a$$192 = [];
    x$$51(this.layers, b$$153);
    var v660;
    var v3553 = 0 < this.defaultBucket.length;
    if(v3553) {
      v3553 = 0 < a$$192.length
    }
    if(v3553) {
      v660 = this.defaultBucket.join(",") + "," + a$$192.join(",")
    }else {
      v660 = this.defaultBucket.join(",") + a$$192.join(",")
    }
    return v660
  }
  function v80(a$$191) {
    var v661;
    if(this.layers.hasOwnProperty(a$$191)) {
      var v2351 = this.layers;
      introspect(JAM.policy.p4) {
        v661 = v2351[a$$191]
      }
    }else {
      v661 = ""
    }
    return v661
  }
  function v79(a$$190) {
    var v662;
    if(a$$190) {
      var v2353 = this.layers.hasOwnProperty(a$$190);
      if(v2353) {
        var v4271 = this.layers;
        introspect(JAM.policy.p4) {
          var v3558 = v4271[a$$190]
        }
        v2353 = "" == v3558
      }
      v662 = v2353
    }else {
      v662 = !0
    }
    return v662
  }
  function v78(a$$189, b$$152, c$$107) {
    var v663;
    var v3559 = JAM.call(this.ac, this, [c$$107]);
    if(v3559) {
      v3559 = a$$189 = vb(a$$189, b$$152)
    }
    if(v3559) {
      v663 = JAM.call(this.bb, this, [a$$189, c$$107])
    }else {
      v663 = ""
    }
    return v663
  }
  function v77(a$$188, b$$151) {
    var v664;
    if("" == a$$188) {
      v664 = ""
    }else {
      var v2355;
      if(b$$151) {
        var v3560;
        if(this.layers.hasOwnProperty(b$$151)) {
          v3560 = JAM.set(this.layers, b$$151, a$$188, JAM.policy.p2)
        }else {
          v3560 = ""
        }
        v2355 = v3560
      }else {
        var v4274 = this.defaultBucket;
        JAM.call(v4274.push, v4274, [a$$188]);
        v2355 = a$$188
      }
      v664 = v2355
    }
    return v664
  }
  function v76(a$$187, b$$150) {
    JAM.set(this.layers, b$$150, a$$187, JAM.policy.p2);
    return
  }
  function v75() {
    return!0
  }
  function v74(a$$181, b$$144, c$$102) {
    var d$$66 = a$$181.length;
    var v666;
    if(p$$1(a$$181)) {
      v666 = a$$181.split("")
    }else {
      v666 = a$$181
    }
    var e$$45 = v666;
    var f$$25 = 0;
    var v668 = f$$25 < d$$66;
    for(;v668;) {
      var v667 = f$$25 in e$$45;
      if(v667) {
        introspect(JAM.policy.p4) {
          var v2358 = e$$45[f$$25]
        }
        JAM.call(b$$144.call, b$$144, [c$$102, v2358, f$$25, a$$181])
      }
      f$$25 = f$$25 + 1;
      v668 = f$$25 < d$$66
    }
    return
  }
  function v73(a$$180, b$$143, c$$101) {
    var v669 = Xb.forEach;
    JAM.call(v669.call, v669, [a$$180, b$$143, c$$101]);
    return
  }
  function v72(a$$179, b$$142, c$$100) {
    var v670;
    if(null == c$$100) {
      v670 = 0
    }else {
      var v2359;
      if(0 > c$$100) {
        v2359 = Math.max(0, a$$179.length + c$$100)
      }else {
        v2359 = c$$100
      }
      v670 = v2359
    }
    c$$100 = v670;
    if(p$$1(a$$179)) {
      var v671;
      var v3563 = p$$1(b$$142);
      if(v3563) {
        v3563 = 1 == b$$142.length
      }
      if(v3563) {
        v671 = a$$179.indexOf(b$$142, c$$100)
      }else {
        v671 = -1
      }
      return v671
    }
    var v674 = c$$100 < a$$179.length;
    for(;v674;) {
      var v2363 = c$$100 in a$$179;
      if(v2363) {
        introspect(JAM.policy.p4) {
          var v3564 = a$$179[c$$100]
        }
        v2363 = v3564 === b$$142
      }
      if(v2363) {
        return c$$100
      }
      c$$100 = c$$100 + 1;
      v674 = c$$100 < a$$179.length
    }
    return-1
  }
  function v71(a$$178, b$$141, c$$99) {
    var v675 = Xb.indexOf;
    return JAM.call(v675.call, v675, [a$$178, b$$141, c$$99])
  }
  function v70(a$$140, b$$111) {
    var v676;
    if(q$$3(b$$111)) {
      v676 = b$$111
    }else {
      v676 = a$$140
    }
    var c$$75 = v676;
    this.width = this.width * a$$140;
    this.height = this.height * c$$75;
    return this
  }
  function v69() {
    var v5152 = JAM.call(Math.round, Math, [this.width]);
    this.width = v5152;
    var v5153 = JAM.call(Math.round, Math, [this.height]);
    this.height = v5153;
    return this
  }
  function v68() {
    var v5154 = JAM.call(Math.floor, Math, [this.width]);
    this.width = v5154;
    var v5155 = JAM.call(Math.floor, Math, [this.height]);
    this.height = v5155;
    return this
  }
  function v67() {
    var v5156 = JAM.call(Math.ceil, Math, [this.width]);
    this.width = v5156;
    var v5157 = JAM.call(Math.ceil, Math, [this.height]);
    this.height = v5157;
    return this
  }
  function v66() {
    return+new Date
  }
  function gi() {
    var v2368 = H$$1();
    return JAM.call(v2368.m, v2368, [18]) == K$$1.ASYNC_EXPANSION_EMBED.EXPERIMENT
  }
  function mi(a$$568) {
    var b$$441 = vf;
    return ki({dtd:Hb(b$$441)}, a$$568)
  }
  function Zi(a$$567) {
    var b$$440 = window.google_container_id;
    var v2371 = b$$440;
    if(v2371) {
      v2371 = JAM.call(JAM.get(document, "getElementById", JAM.policy.p1), document, [b$$440])
    }
    var v687 = v2371;
    if(!v687) {
      v687 = JAM.call(JAM.get(document, "getElementById", JAM.policy.p1), document, [a$$567])
    }
    var c$$299 = v687;
    if(!c$$299) {
      if(!b$$440) {
        var v3565 = !a$$567;
        if(!v3565) {
          JAM.call(document.write, document, ["<span id=" + a$$567 + "></span>"]);
          c$$299 = JAM.call(JAM.get(document, "getElementById", JAM.policy.p1), document, [a$$567])
        }
      }
    }
    return c$$299
  }
  function Gi(a$$565) {
    var b$$438 = mc();
    var c$$298 = G$$1(b$$438, 8);
    var d$$183 = G$$1(b$$438, 9);
    var e$$108 = window.google_ad_section;
    if(ub(window)) {
      var JSCompiler_inline_result$$575;
      var c$$inline_735 = G$$1(b$$438, 5) + 1;
      JSCompiler_inline_result$$575 = JAM.set(b$$438.S, nc(5), c$$inline_735, JAM.policy.p2);
      var v2374 = 3 < JSCompiler_inline_result$$575;
      if(v2374) {
        v2374 = !a$$565
      }
      if(v2374) {
        return!1
      }
    }else {
      var f$$65;
      var c$$inline_739 = G$$1(b$$438, 6) + 1;
      f$$65 = JAM.set(b$$438.S, nc(6), c$$inline_739, JAM.policy.p2);
      if(window.google_num_slots_to_rotate) {
        var JSCompiler_inline_result$$19;
        ze = ze | 1;
        JSCompiler_inline_result$$19 = void 0;
        JSCompiler_inline_result$$19;
        JAM.set(c$$298, e$$108, "", JAM.policy.p2);
        var JSCompiler_temp_const$$75 = JAM.set(d$$183, e$$108, "", JAM.policy.p2);
        var JSCompiler_temp$$76;
        if(JSCompiler_temp$$76 = G$$1(b$$438, 12)) {
        }else {
          var b$$inline_549 = (new Date).getTime() % window.google_num_slots_to_rotate + 1;
          JSCompiler_temp$$76 = JAM.set(b$$438.S, nc(12), b$$inline_549, JAM.policy.p2)
        }
        JSCompiler_temp_const$$75;
        JSCompiler_temp$$76;
        if(G$$1(b$$438, 12) != f$$65) {
          return!1
        }
      }else {
        var v2377 = !a$$565;
        if(v2377) {
          var v3569 = 6 < f$$65;
          if(v3569) {
            v3569 = "" == e$$108
          }
          v2377 = v3569
        }
        if(v2377) {
          return!1
        }
      }
    }
    return!0
  }
  function xi(a$$561, b$$434) {
    var c$$295 = b$$434.src;
    var d$$180;
    var a$$inline_516 = c$$295;
    var b$$inline_517 = "/pagead/blank.gif#?";
    var c$$inline_518 = a$$561;
    var d$$inline_519 = a$$inline_516.indexOf(b$$inline_517);
    var v703;
    if(-1 == d$$inline_519) {
      v703 = a$$inline_516
    }else {
      v703 = c$$inline_518 + a$$inline_516.substr(d$$inline_519 + b$$inline_517.length)
    }
    d$$180 = v703;
    var v704 = d$$180 !== c$$295;
    if(v704) {
      b$$434.src = d$$180
    }
    return
  }
  function $i(a$$558) {
    function v25(b$$431, c$$292) {
      JAM.set(a$$558, b$$431, JAM.get(window, c$$292, JAM.policy.p5), JAM.policy.p5);
      return
    }
    function v24(b$$430, c$$291) {
      JAM.set(a$$558, b$$430, JAM.get(window, c$$291, JAM.policy.p5), JAM.policy.p5);
      return
    }
    function v23(b$$429, c$$290) {
      JAM.set(a$$558, b$$429, JAM.get(window, c$$290, JAM.policy.p5), JAM.policy.p5);
      return
    }
    x$$51(wh, v23);
    x$$51(vh, v24);
    x$$51(xh, v25);
    return
  }
  function Yi(a$$557, b$$428, c$$289, d$$178) {
    if(d$$178) {
      var e$$105 = 0;
      var v706 = e$$105 < d$$178.length;
      for(;v706;) {
        introspect(JAM.policy.p4) {
          var f$$63 = d$$178[e$$105]
        }
        if(!f$$63()) {
          return
        }
        e$$105 = e$$105 + 1;
        v706 = e$$105 < d$$178.length
      }
    }
    if(Xi) {
      Xi = (new Date).getTime() - Xi
    }
    if(c$$289) {
      var v2385 = c$$289.fb();
      if(v2385) {
        c$$289.Hc()
      }
    }
    JSCompiler_inline_label_Ki_501: {
      var a$$inline_498 = a$$557;
      var a$$inline_699 = window;
      var b$$inline_700;
      var a$$inline_776 = a$$inline_699;
      var b$$inline_777 = D$$1().document;
      var c$$inline_778 = {};
      var d$$inline_779;
      var a$$inline_951 = window;
      a$$inline_951 = dc(a$$inline_951, !1);
      d$$inline_779 = a$$inline_951.win;
      var e$$inline_780 = cf(d$$inline_779);
      var f$$inline_781 = Ze(D$$1(), b$$inline_777, a$$inline_776.google_ad_width, a$$inline_776.google_ad_height);
      var JSCompiler_temp_const$$935 = c$$inline_778;
      var JSCompiler_inline_result$$936;
      var a$$inline_953 = a$$inline_776;
      var b$$inline_954 = f$$inline_781;
      var c$$inline_955 = e$$inline_780.isTopUrl;
      var d$$inline_956 = JAM.call(T$$1.getIframingState, T$$1, [D$$1()]);
      var e$$inline_957 = 4;
      var v713;
      var v3572 = b$$inline_954;
      if(!v3572) {
        v3572 = d$$inline_956 != T$$1.SAME_DOMAIN_IFRAMING
      }
      if(v3572) {
        var v2386;
        var v4281 = b$$inline_954;
        if(!v4281) {
          v4281 = d$$inline_956 != T$$1.CROSS_DOMAIN_IFRAMING
        }
        if(v4281) {
          var v3573;
          var v4705 = b$$inline_954;
          if(v4705) {
            v4705 = d$$inline_956 == T$$1.SAME_DOMAIN_IFRAMING
          }
          if(v4705) {
            v3573 = e$$inline_957 = 7
          }else {
            var v4282 = b$$inline_954;
            if(v4282) {
              var v4706 = d$$inline_956 == T$$1.CROSS_DOMAIN_IFRAMING;
              if(v4706) {
                v4706 = e$$inline_957 = 8
              }
              v4282 = v4706
            }
            v3573 = v4282
          }
          v2386 = v3573
        }else {
          v2386 = e$$inline_957 = 6
        }
        v713 = v2386
      }else {
        v713 = e$$inline_957 = 5
      }
      v713;
      var v714 = !!a$$inline_953.google_referrer_url;
      if(v714) {
        v714 = !Ye()
      }
      a$$inline_953 = v714;
      e$$inline_957 = e$$inline_957 + 5 * a$$inline_953;
      if(c$$inline_955) {
        e$$inline_957 = e$$inline_957 | 16
      }
      JSCompiler_inline_result$$936 = "" + e$$inline_957;
      JSCompiler_temp_const$$935.iframing = JSCompiler_inline_result$$936;
      var v2391 = !a$$inline_776.google_page_url;
      if(v2391) {
        v2391 = "yieldmanager" == b$$inline_777.domain
      }
      if(v2391) {
        e$$inline_780 = b$$inline_777.URL.substring(b$$inline_777.URL.lastIndexOf("http"));
        var v717 = -1 < e$$inline_780.indexOf("%");
        for(;v717;) {
          try {
            e$$inline_780 = decodeURIComponent(e$$inline_780)
          }catch(g$$inline_782) {
            break
          }
          v717 = -1 < e$$inline_780.indexOf("%")
        }
        a$$inline_776.google_page_url = e$$inline_780
      }
      var JSCompiler_inline_result$$950;
      var a$$inline_959 = a$$inline_776;
      var b$$inline_960 = af();
      var v719 = !b$$inline_960;
      if(v719) {
        v719 = !!a$$inline_959.google_page_url
      }
      JSCompiler_inline_result$$950 = v719;
      if(JSCompiler_inline_result$$950) {
        var a$$inline_962 = c$$inline_778;
        var c$$inline_964 = b$$inline_777;
        var d$$inline_965 = f$$inline_781;
        a$$inline_962.page_url = a$$inline_776.google_page_url;
        var v720 = a$$inline_962;
        var v2396 = bf(c$$inline_964, d$$inline_965);
        if(!v2396) {
          v2396 = "EMPTY"
        }
        v720.page_location = v2396
      }else {
        var a$$inline_967 = c$$inline_778;
        var v721 = a$$inline_967;
        var v5158 = bf(b$$inline_777, f$$inline_781);
        v721.page_url = v5158;
        a$$inline_967.page_location = null
      }
      var v722 = c$$inline_778;
      var v2397;
      if(b$$inline_777.URL == c$$inline_778.page_url) {
        v2397 = Date.parse(b$$inline_777.lastModified) / 1E3
      }else {
        v2397 = null
      }
      v722.last_modified_time = v2397;
      if(Ye()) {
        var JSCompiler_temp_const$$937 = c$$inline_778;
        var JSCompiler_inline_result$$938;
        var a$$inline_971 = d$$inline_779;
        var v723;
        if(a$$inline_971 == a$$inline_971.top) {
          v723 = a$$inline_971.document.referrer
        }else {
          var v2399 = a$$inline_971 = af(!0);
          if(!v2399) {
            v2399 = ""
          }
          v723 = v2399
        }
        JSCompiler_inline_result$$938 = v723;
        JSCompiler_temp_const$$937.referrer_url = JSCompiler_inline_result$$938
      }else {
        var JSCompiler_temp_const$$932 = c$$inline_778;
        var JSCompiler_inline_result$$933;
        var a$$inline_973 = a$$inline_776;
        var b$$inline_974 = b$$inline_777;
        var c$$inline_975 = f$$inline_781;
        var d$$inline_976 = af();
        var v724;
        if(d$$inline_976) {
          v724 = ""
        }else {
          var v2401;
          if(c$$inline_975) {
            v2401 = a$$inline_973.google_referrer_url
          }else {
            var v3585;
            var v4707 = a$$inline_973.google_page_url;
            if(v4707) {
              v4707 = a$$inline_973.google_referrer_url
            }
            if(v4707) {
              v3585 = a$$inline_973.google_referrer_url
            }else {
              v3585 = b$$inline_974.referrer
            }
            v2401 = v3585
          }
          v724 = v2401
        }
        JSCompiler_inline_result$$933 = v724;
        JSCompiler_temp_const$$932.referrer_url = JSCompiler_inline_result$$933
      }
      b$$inline_700 = c$$inline_778;
      $e(a$$inline_699, b$$inline_700);
      if(window.google_page_url) {
      }else {
        if(window.google_referrer_url) {
        }else {
          if(window.google_page_location) {
          }else {
            var a$$inline_702 = K$$1;
            var v726 = J$$1();
            JAM.call(v726.k, v726, [[a$$inline_702.TOP_URL_REPLACES_MISSING_URL.CONTROL, a$$inline_702.TOP_URL_REPLACES_MISSING_URL.EXPERIMENT], wa$$1, 4])
          }
        }
      }
      if(!Gi(!1)) {
        c$$289 = !1;
        break JSCompiler_inline_label_Ki_501
      }
      var v732;
      if(Bc(window)) {
        v732 = ma$$1("", "googlesyndication")
      }else {
        v732 = Ja$$1()
      }
      var b$$inline_499 = v732;
      var a$$inline_704 = a$$inline_498;
      var b$$inline_705 = {};
      $i(b$$inline_705);
      var a$$inline_784 = b$$inline_705;
      a$$inline_784.dt = vf;
      if(B$$2) {
        var v2406 = window.google_bpp;
        if(v2406) {
          a$$inline_784.bpp = window.google_bpp
        }
      }
      var b$$inline_785;
      JSCompiler_inline_label_823: {
        var a$$inline_786 = void 0;
        var b$$inline_787 = D$$1();
        var c$$inline_788 = b$$inline_787.performance;
        var v2407 = c$$inline_788;
        if(v2407) {
          var v3589 = c$$inline_788.timing;
          if(v3589) {
            v3589 = c$$inline_788.now
          }
          v2407 = v3589
        }
        if(v2407) {
          var d$$inline_789 = c$$inline_788.timing.navigationStart + JAM.call(Math.round, Math, [c$$inline_788.now()]);
          d$$inline_789 = d$$inline_789 - c$$inline_788.timing.domLoading
        }
        if(!d$$inline_789) {
          b$$inline_785 = null;
          break JSCompiler_inline_label_823
        }
        a$$inline_786 = a$$inline_786 || vf;
        b$$inline_787 = b$$inline_787.Date.now() - a$$inline_786;
        b$$inline_787 = d$$inline_789 - b$$inline_787;
        var v739;
        if(0 > b$$inline_787) {
          v739 = "-M"
        }else {
          var v2412;
          if(1E6 < b$$inline_787) {
            v2412 = "M"
          }else {
            v2412 = b$$inline_787
          }
          v739 = v2412
        }
        b$$inline_785 = v739
      }
      if(b$$inline_785) {
        a$$inline_784.bdt = b$$inline_785
      }
      var v740 = a$$inline_784;
      var v5159 = Da$$1();
      v740.shv = v5159;
      b$$inline_785 = !!window.google_test_1;
      var c$$inline_790 = !!window.google_test_2;
      if(b$$inline_785) {
        var v2416;
        if(c$$inline_790) {
          v2416 = "3"
        }else {
          v2416 = "2"
        }
        a$$inline_784.tsi = v2416
      }
      var v743 = a$$inline_784;
      var v5160 = "/r20130906".replace("/", "");
      v743.cbv = v5160;
      var v744 = /^\w{1,3}$/.test(window.google_loader_used);
      if(v744) {
        a$$inline_784.saldr = window.google_loader_used
      }
      b$$inline_785 = mc();
      if(Zg(window)) {
      }else {
        var a$$inline_791 = b$$inline_785;
        var b$$inline_792 = a$$inline_784;
        var c$$inline_793 = G$$1(a$$inline_791, 8);
        var d$$inline_794 = window.google_ad_section;
        var e$$inline_795 = window.google_ad_format;
        var f$$inline_796 = window.google_ad_slot;
        introspect(JAM.policy.p4) {
          var v745 = c$$inline_793[d$$inline_794]
        }
        if(v745) {
          introspect(JAM.policy.p4) {
            b$$inline_792.prev_fmts = c$$inline_793[d$$inline_794]
          }
        }
        var g$$inline_797 = G$$1(a$$inline_791, 9);
        introspect(JAM.policy.p4) {
          var v746 = g$$inline_797[d$$inline_794]
        }
        if(v746) {
          var v2418 = b$$inline_792;
          introspect(JAM.policy.p4) {
            var v3591 = g$$inline_797[d$$inline_794]
          }
          var v5161 = v3591.toLowerCase();
          v2418.prev_slotnames = v5161
        }
        var v747;
        if(e$$inline_795) {
          var v2419;
          introspect(JAM.policy.p4) {
            var v3594 = c$$inline_793[d$$inline_794]
          }
          if(v3594) {
            introspect(JAM.policy.p4) {
              var v3592 = c$$inline_793[d$$inline_794]
            }
            v2419 = v3592 + ("," + e$$inline_795)
          }else {
            v2419 = e$$inline_795
          }
          v747 = JAM.set(c$$inline_793, d$$inline_794, v2419, JAM.policy.p2)
        }else {
          var v2420 = f$$inline_796;
          if(v2420) {
            var v3595;
            introspect(JAM.policy.p4) {
              var v4290 = g$$inline_797[d$$inline_794]
            }
            if(v4290) {
              introspect(JAM.policy.p4) {
                var v4288 = g$$inline_797[d$$inline_794]
              }
              v3595 = v4288 + ("," + f$$inline_796)
            }else {
              v3595 = f$$inline_796
            }
            v2420 = JAM.set(g$$inline_797, d$$inline_794, v3595, JAM.policy.p2)
          }
          v747 = v2420
        }
        v747
      }
      var v749 = a$$inline_784;
      var v5162 = G$$1(b$$inline_785, 7);
      v749.correlator = v5162;
      if(window.google_ad_channel) {
        c$$inline_790 = G$$1(b$$inline_785, 10);
        var d$$inline_798 = "";
        var e$$inline_799 = window.google_ad_channel.split(Ni);
        var f$$inline_800 = 0;
        var v752 = f$$inline_800 < e$$inline_799.length;
        for(;v752;) {
          introspect(JAM.policy.p4) {
            var g$$inline_801 = e$$inline_799[f$$inline_800]
          }
          var v751;
          introspect(JAM.policy.p4) {
            var v2422 = c$$inline_790[g$$inline_801]
          }
          if(v2422) {
            v751 = d$$inline_798 = d$$inline_798 + (g$$inline_801 + "+")
          }else {
            v751 = JAM.set(c$$inline_790, g$$inline_801, !0, JAM.policy.p2)
          }
          v751;
          f$$inline_800 = f$$inline_800 + 1;
          v752 = f$$inline_800 < e$$inline_799.length
        }
        a$$inline_784.pv_ch = d$$inline_798
      }
      if(window.google_ad_host_channel) {
        var JSCompiler_inline_result$$inline_802;
        var b$$inline_803 = G$$1(b$$inline_785, 11);
        var c$$inline_804 = window.google_ad_host_channel.split("|");
        var d$$inline_805 = -1;
        var e$$inline_806 = [];
        var f$$inline_807 = 0;
        var v760 = f$$inline_807 < c$$inline_804.length;
        for(;v760;) {
          introspect(JAM.policy.p4) {
            var v755 = c$$inline_804[f$$inline_807]
          }
          var g$$inline_808 = v755.split(Ni);
          introspect(JAM.policy.p4) {
            var v756 = b$$inline_803[f$$inline_807]
          }
          if(!v756) {
            b$$inline_803[f$$inline_807] = {}
          }
          var h$$inline_809 = "";
          var k$$inline_810 = 0;
          var v758 = k$$inline_810 < g$$inline_808.length;
          for(;v758;) {
            introspect(JAM.policy.p4) {
              var l$$inline_811 = g$$inline_808[k$$inline_810]
            }
            var v757 = "" != l$$inline_811;
            if(v757) {
              var v2427;
              introspect(JAM.policy.p4) {
                var v4291 = b$$inline_803[f$$inline_807]
              }
              introspect(JAM.policy.p4) {
                var v3598 = v4291[l$$inline_811]
              }
              if(v3598) {
                v2427 = h$$inline_809 = h$$inline_809 + ("+" + l$$inline_811)
              }else {
                introspect(JAM.policy.p4) {
                  var v3597 = b$$inline_803[f$$inline_807]
                }
                v2427 = JAM.set(v3597, l$$inline_811, !0, JAM.policy.p2)
              }
              v2427
            }
            k$$inline_810 = k$$inline_810 + 1;
            v758 = k$$inline_810 < g$$inline_808.length
          }
          h$$inline_809 = h$$inline_809.slice(1);
          e$$inline_806[f$$inline_807] = h$$inline_809;
          var v759 = "" != h$$inline_809;
          if(v759) {
            d$$inline_805 = f$$inline_807
          }
          f$$inline_807 = f$$inline_807 + 1;
          v760 = f$$inline_807 < c$$inline_804.length
        }
        c$$inline_804 = "";
        if(-1 < d$$inline_805) {
          f$$inline_807 = 0;
          var v761 = f$$inline_807 < d$$inline_805;
          for(;v761;) {
            introspect(JAM.policy.p4) {
              var v3599 = e$$inline_806[f$$inline_807]
            }
            c$$inline_804 = c$$inline_804 + (v3599 + "|");
            f$$inline_807 = f$$inline_807 + 1;
            v761 = f$$inline_807 < d$$inline_805
          }
          introspect(JAM.policy.p4) {
            var v2431 = e$$inline_806[d$$inline_805]
          }
          c$$inline_804 = c$$inline_804 + v2431
        }
        JSCompiler_inline_result$$inline_802 = c$$inline_804;
        b$$inline_785 = JSCompiler_inline_result$$inline_802;
        a$$inline_784.pv_h_ch = b$$inline_785
      }
      if(Ea$$1) {
        a$$inline_784.jscb = 1
      }
      if(Fa$$1) {
        a$$inline_784.jscd = 1
      }
      a$$inline_784.frm = window.google_iframing;
      b$$inline_785 = D$$1().document;
      c$$inline_790 = "";
      try {
        c$$inline_790 = b$$inline_785.cookie
      }catch(h$$inline_822) {
      }
      var a$$inline_812 = b$$inline_785.domain;
      var b$$inline_813 = c$$inline_790;
      var c$$inline_814 = ob$$1();
      var d$$inline_815 = window.screen;
      var e$$inline_816 = b$$inline_785.referrer;
      var f$$inline_817 = JAM.call(Math.round, Math, [(new Date).getTime() / 1E3]);
      var g$$inline_818 = window.google_analytics_domain_name;
      var v766;
      if("undefined" == typeof g$$inline_818) {
        v766 = Fh("auto", a$$inline_812)
      }else {
        v766 = Fh(g$$inline_818, a$$inline_812)
      }
      a$$inline_812 = v766;
      var h$$inline_819 = -1 < b$$inline_813.indexOf("__utma=" + a$$inline_812 + ".");
      g$$inline_818 = -1 < b$$inline_813.indexOf("__utmb=" + a$$inline_812);
      var k$$inline_820 = mc("google_persistent_state");
      var v769 = G$$1(k$$inline_820, 14);
      if(!v769) {
        v769 = JAM.set(k$$inline_820.S, nc(14), {}, JAM.policy.p2)
      }
      k$$inline_820 = v769;
      var l$$inline_821 = !1;
      if(h$$inline_819) {
        c$$inline_814 = b$$inline_813.split("__utma=" + a$$inline_812 + ".")[1].split(";")[0].split(".");
        var v4294;
        if(g$$inline_818) {
          v4294 = k$$inline_820.sid = c$$inline_814[3] + ""
        }else {
          var v4710 = k$$inline_820.sid;
          if(!v4710) {
            v4710 = k$$inline_820.sid = f$$inline_817 + ""
          }
          v4294 = v4710
        }
        v4294;
        k$$inline_820.vid = c$$inline_814[0] + "." + c$$inline_814[1];
        k$$inline_820.from_cookie = !0
      }else {
        var v770 = k$$inline_820.sid;
        if(!v770) {
          v770 = k$$inline_820.sid = f$$inline_817 + ""
        }
        var JSCompiler_temp_const$$942 = v770;
        var JSCompiler_temp$$943;
        if(JSCompiler_temp$$943 = k$$inline_820.vid) {
        }else {
          var JSCompiler_temp_const$$945 = l$$inline_821 = !0;
          var JSCompiler_temp_const$$944 = k$$inline_820;
          var JSCompiler_inline_result$$946;
          var a$$inline_978 = b$$inline_813;
          var b$$inline_979 = c$$inline_814;
          var c$$inline_980 = d$$inline_815;
          var d$$inline_981 = e$$inline_816;
          var JSCompiler_temp_const$$inline_982 = JAM.call(Math.round, Math, [2147483647 * Math.random()]);
          var JSCompiler_inline_result$$inline_983;
          var a$$inline_984 = a$$inline_978;
          var b$$inline_985 = b$$inline_979;
          var c$$inline_986 = c$$inline_980;
          var d$$inline_987 = d$$inline_981;
          var v2441 = Dh.appName;
          var v2442 = Dh.version;
          var v3605;
          if(Dh.language) {
            v3605 = Dh.language
          }else {
            v3605 = Dh.browserLanguage
          }
          var v2443 = v3605;
          var v2444 = Dh.platform;
          var v2445 = Dh.userAgent;
          var v3606;
          if(Dh.javaEnabled()) {
            v3606 = 1
          }else {
            v3606 = 0
          }
          var e$$inline_988 = [v2441, v2442, v2443, v2444, v2445, v3606].join("");
          var v773;
          if(c$$inline_986) {
            v773 = e$$inline_988 = e$$inline_988 + (c$$inline_986.width + "x" + c$$inline_986.height + c$$inline_986.colorDepth)
          }else {
            var v2447 = window.java;
            if(v2447) {
              c$$inline_986 = java.awt.Toolkit.getDefaultToolkit().getScreenSize();
              v2447 = e$$inline_988 = e$$inline_988 + (c$$inline_986.screen.width + "x" + c$$inline_986.screen.height)
            }
            v773 = v2447
          }
          v773;
          e$$inline_988 = e$$inline_988 + a$$inline_984;
          e$$inline_988 = e$$inline_988 + (d$$inline_987 || "");
          a$$inline_984 = e$$inline_988.length;
          var v774 = 0 < b$$inline_985;
          for(;v774;) {
            var v3608 = b$$inline_985;
            b$$inline_985 = b$$inline_985 - 1;
            var v3609 = a$$inline_984;
            a$$inline_984 = a$$inline_984 + 1;
            e$$inline_988 = e$$inline_988 + (v3608 ^ v3609);
            v774 = 0 < b$$inline_985
          }
          JSCompiler_inline_result$$inline_983 = Jh(e$$inline_988);
          JSCompiler_inline_result$$946 = JSCompiler_temp_const$$inline_982 ^ JSCompiler_inline_result$$inline_983 & 2147483647;
          JSCompiler_temp_const$$945;
          JSCompiler_temp$$943 = JSCompiler_temp_const$$944.vid = JSCompiler_inline_result$$946 + "." + f$$inline_817
        }
        JSCompiler_temp_const$$942;
        JSCompiler_temp$$943;
        k$$inline_820.from_cookie = !1
      }
      if(k$$inline_820.cid) {
      }else {
        var JSCompiler_inline_result$$948;
        JSCompiler_inline_label_Hh_996: {
          var a$$inline_990 = b$$inline_813;
          var b$$inline_991 = 999;
          var c$$inline_992 = window.google_analytics_domain_name;
          if(c$$inline_992) {
            var v3610;
            if(0 == c$$inline_992.indexOf(".")) {
              v3610 = c$$inline_992.substr(1)
            }else {
              v3610 = c$$inline_992
            }
            c$$inline_992 = v3610;
            b$$inline_991 = ("" + c$$inline_992).split(".").length
          }
          var d$$inline_993;
          c$$inline_992 = 999;
          a$$inline_990 = a$$inline_990.split(";");
          var e$$inline_994 = 0;
          var v780 = e$$inline_994 < a$$inline_990.length;
          for(;v780;) {
            introspect(JAM.policy.p4) {
              var v2452 = a$$inline_990[e$$inline_994]
            }
            var v777 = Kh.exec(v2452);
            if(!v777) {
              introspect(JAM.policy.p4) {
                var v2453 = a$$inline_990[e$$inline_994]
              }
              v777 = Lh.exec(v2453)
            }
            var f$$inline_995 = v777;
            if(f$$inline_995) {
              if(f$$inline_995[1] == b$$inline_991) {
                JSCompiler_inline_result$$948 = f$$inline_995[2];
                break JSCompiler_inline_label_Hh_996
              }
              var v779 = f$$inline_995[1] < c$$inline_992;
              if(v779) {
                c$$inline_992 = f$$inline_995[1];
                d$$inline_993 = f$$inline_995[2]
              }
            }
            e$$inline_994 = e$$inline_994 + 1;
            v780 = e$$inline_994 < a$$inline_990.length
          }
          JSCompiler_inline_result$$948 = d$$inline_993
        }
        b$$inline_813 = JSCompiler_inline_result$$948;
        var v2458;
        var v4303 = l$$inline_821;
        if(v4303) {
          var v4716 = b$$inline_813;
          if(v4716) {
            v4716 = -1 != b$$inline_813.search(/^\d+\.\d+$/)
          }
          v4303 = v4716
        }
        if(v4303) {
          v2458 = k$$inline_820.vid = b$$inline_813
        }else {
          var v3612 = b$$inline_813 != k$$inline_820.vid;
          if(v3612) {
            v3612 = k$$inline_820.cid = b$$inline_813
          }
          v2458 = v3612
        }
        v2458
      }
      k$$inline_820.dh = a$$inline_812;
      var v782 = k$$inline_820.hid;
      if(!v782) {
        var v2459 = k$$inline_820;
        var v5163 = JAM.call(Math.round, Math, [2147483647 * Math.random()]);
        v2459.hid = v5163
      }
      b$$inline_785 = k$$inline_820;
      a$$inline_784.ga_vid = b$$inline_785.vid;
      a$$inline_784.ga_sid = b$$inline_785.sid;
      a$$inline_784.ga_hid = b$$inline_785.hid;
      a$$inline_784.ga_fc = b$$inline_785.from_cookie;
      a$$inline_784.ga_cid = b$$inline_785.cid;
      a$$inline_784.ga_wpids = window.google_analytics_uacct;
      var a$$inline_825 = b$$inline_705;
      a$$inline_825.u_tz = -(new Date).getTimezoneOffset();
      var v784 = a$$inline_825;
      var v5164 = ob$$1();
      v784.u_his = v5164;
      var v785 = a$$inline_825;
      var v5165 = navigator.javaEnabled();
      v785.u_java = v5165;
      var v786 = window.screen;
      if(v786) {
        a$$inline_825.u_h = window.screen.height;
        a$$inline_825.u_w = window.screen.width;
        a$$inline_825.u_ah = window.screen.availHeight;
        a$$inline_825.u_aw = window.screen.availWidth;
        a$$inline_825.u_cd = window.screen.colorDepth
      }
      var v787 = navigator.plugins;
      if(v787) {
        a$$inline_825.u_nplug = navigator.plugins.length
      }
      var v788 = navigator.mimeTypes;
      if(v788) {
        a$$inline_825.u_nmime = navigator.mimeTypes.length
      }
      if(a$$inline_704) {
        var JSCompiler_temp_const$$742;
        var a$$inline_827 = a$$inline_704;
        var b$$inline_828 = b$$inline_705;
        var JSCompiler_temp_const$$939 = b$$inline_828;
        var JSCompiler_inline_result$$940;
        var a$$inline_997 = a$$inline_827;
        var b$$inline_998 = cd(a$$inline_997);
        var c$$inline_999 = "";
        if(b$$inline_998.body.createTextRange) {
          b$$inline_998 = b$$inline_998.body.createTextRange();
          JAM.call(b$$inline_998.moveToElementText, b$$inline_998, [a$$inline_997]);
          try {
            c$$inline_999 = b$$inline_998.queryCommandValue("FontName")
          }catch(d$$inline_1006) {
            c$$inline_999 = ""
          }
        }
        if(!c$$inline_999) {
          c$$inline_999 = R$$1(a$$inline_997, "fontFamily")
        }
        a$$inline_997 = c$$inline_999.split(",");
        var v791 = 1 < a$$inline_997.length;
        if(v791) {
          c$$inline_999 = a$$inline_997[0]
        }
        var JSCompiler_inline_result$$inline_1000;
        JSCompiler_inline_label_1007: {
          var a$$inline_1001 = c$$inline_999;
          var b$$inline_1002 = "\"'";
          var c$$inline_1003 = b$$inline_1002.length;
          var d$$inline_1004 = 0;
          var v795 = d$$inline_1004 < c$$inline_1003;
          for(;v795;) {
            var v792;
            if(1 == c$$inline_1003) {
              v792 = b$$inline_1002
            }else {
              v792 = b$$inline_1002.charAt(d$$inline_1004)
            }
            var e$$inline_1005 = v792;
            var v2468 = a$$inline_1001.charAt(0) == e$$inline_1005;
            if(v2468) {
              v2468 = a$$inline_1001.charAt(a$$inline_1001.length - 1) == e$$inline_1005
            }
            if(v2468) {
              JSCompiler_inline_result$$inline_1000 = a$$inline_1001.substring(1, a$$inline_1001.length - 1);
              break JSCompiler_inline_label_1007
            }
            d$$inline_1004 = d$$inline_1004 + 1;
            v795 = d$$inline_1004 < c$$inline_1003
          }
          JSCompiler_inline_result$$inline_1000 = a$$inline_1001
        }
        JSCompiler_inline_result$$940 = JSCompiler_inline_result$$inline_1000;
        var v796 = JSCompiler_temp_const$$939;
        var v5166 = JSCompiler_inline_result$$940.toLowerCase();
        v796.dff = v5166;
        var v797 = b$$inline_828;
        var v5167 = Wd(a$$inline_827);
        v797.dfs = v5167;
        JSCompiler_temp_const$$742 = void 0;
        var JSCompiler_inline_result$$743;
        var a$$inline_830 = a$$inline_704;
        var b$$inline_831 = b$$inline_705;
        if("html" == w$$6.google_ad_output) {
          var c$$inline_832 = D$$1();
          if(c$$inline_832.google_top_values) {
            var d$$inline_833;
            var a$$inline_1009 = c$$inline_832.google_top_values;
            var b$$inline_1010 = w$$6.google_ad_width;
            var c$$inline_1011 = w$$6.google_ad_height;
            var d$$inline_1012 = parseInt(a$$inline_1009[6], 10);
            var e$$inline_1013 = parseInt(a$$inline_1009[7], 10);
            var f$$inline_1014 = parseInt(a$$inline_1009[8], 10);
            a$$inline_1009 = parseInt(a$$inline_1009[9], 10);
            var v802;
            var v3619 = 0 < d$$inline_1012;
            if(v3619) {
              var v4308 = 0 < e$$inline_1013;
              if(v4308) {
                var v4719 = 0 < f$$inline_1014;
                if(v4719) {
                  var v4959 = 0 < a$$inline_1009;
                  if(v4959) {
                    b$$inline_1010 = Math.abs(f$$inline_1014 - b$$inline_1010);
                    c$$inline_1011 = Math.abs(a$$inline_1009 - c$$inline_1011);
                    v4959 = 10 >= b$$inline_1010 + c$$inline_1011
                  }
                  v4719 = v4959
                }
                v4308 = v4719
              }
              v3619 = v4308
            }
            if(v3619) {
              v802 = new M$$1(d$$inline_1012, e$$inline_1013)
            }else {
              v802 = new M$$1(-12245933, -12245933)
            }
            d$$inline_833 = v802;
            var v803 = b$$inline_831;
            var v5168 = JAM.call(Math.round, Math, [d$$inline_833.x]);
            v803.adx = v5168;
            var v804 = b$$inline_831;
            var v5169 = JAM.call(Math.round, Math, [d$$inline_833.y]);
            v804.ady = v5169
          }
          var v2474 = !b$$inline_831.adx;
          if(!v2474) {
            var v3621 = -12245933 == b$$inline_831.adx;
            if(!v3621) {
              var v4310 = !b$$inline_831.ady;
              if(!v4310) {
                v4310 = -12245933 == b$$inline_831.ady
              }
              v3621 = v4310
            }
            v2474 = v3621
          }
          if(v2474) {
            try {
              var JSCompiler_inline_result$$934;
              var a$$inline_1016 = a$$inline_830;
              var b$$inline_1017 = window.top;
              var c$$inline_1018 = new M$$1(0, 0);
              var d$$inline_1019;
              var a$$inline_1020 = cd(a$$inline_1016);
              var v806;
              if(a$$inline_1020) {
                var v2475 = a$$inline_1020.parentWindow;
                if(!v2475) {
                  v2475 = a$$inline_1020.defaultView
                }
                v806 = v2475
              }else {
                v806 = window
              }
              d$$inline_1019 = v806;
              var e$$inline_1021 = a$$inline_1016;
              var v2476 = d$$inline_1019;
              if(v2476) {
                var v3624 = d$$inline_1019 != b$$inline_1017;
                if(v3624) {
                  var v4312 = e$$inline_1021 = d$$inline_1019.frameElement;
                  if(v4312) {
                    v4312 = d$$inline_1019 = d$$inline_1019.parent
                  }
                  v3624 = v4312
                }
                v2476 = v3624
              }
              var v817 = v2476;
              do {
                var JSCompiler_temp$$inline_1022;
                if(d$$inline_1019 == b$$inline_1017) {
                  JSCompiler_temp$$inline_1022 = Cd(e$$inline_1021)
                }else {
                  var a$$inline_1023 = e$$inline_1021;
                  var b$$inline_1024 = void 0;
                  if(a$$inline_1023.getBoundingClientRect) {
                    b$$inline_1024 = Ad(a$$inline_1023);
                    b$$inline_1024 = new M$$1(b$$inline_1024.left, b$$inline_1024.top)
                  }else {
                    b$$inline_1024 = dd(a$$inline_1023).Ja();
                    var c$$inline_1025 = Cd(a$$inline_1023);
                    b$$inline_1024 = new M$$1(c$$inline_1025.x - b$$inline_1024.x, c$$inline_1025.y - b$$inline_1024.y)
                  }
                  var JSCompiler_temp$$inline_1026;
                  var v2483 = Oc;
                  if(v2483) {
                    v2483 = !Uc(12)
                  }
                  if(v2483) {
                    var JSCompiler_temp_const$$inline_1027 = b$$inline_1024;
                    var JSCompiler_inline_result$$inline_1028;
                    var a$$inline_1029 = a$$inline_1023;
                    var b$$inline_1030 = void 0;
                    var v811;
                    if(N$$1) {
                      v811 = b$$inline_1030 = "-ms-transform"
                    }else {
                      var v2484;
                      if(Pc) {
                        v2484 = b$$inline_1030 = "-webkit-transform"
                      }else {
                        var v3626;
                        if(Nc) {
                          v3626 = b$$inline_1030 = "-o-transform"
                        }else {
                          var v4313 = Oc;
                          if(v4313) {
                            v4313 = b$$inline_1030 = "-moz-transform"
                          }
                          v3626 = v4313
                        }
                        v2484 = v3626
                      }
                      v811 = v2484
                    }
                    v811;
                    var c$$inline_1031 = void 0;
                    if(b$$inline_1030) {
                      c$$inline_1031 = R$$1(a$$inline_1029, b$$inline_1030)
                    }
                    if(!c$$inline_1031) {
                      c$$inline_1031 = R$$1(a$$inline_1029, "transform")
                    }
                    var v812;
                    if(c$$inline_1031) {
                      var v2486;
                      if(a$$inline_1029 = c$$inline_1031.match(Xd)) {
                        v2486 = new M$$1(parseFloat(a$$inline_1029[1]), parseFloat(a$$inline_1029[2]))
                      }else {
                        v2486 = new M$$1(0, 0)
                      }
                      v812 = v2486
                    }else {
                      v812 = new M$$1(0, 0)
                    }
                    JSCompiler_inline_result$$inline_1028 = v812;
                    JSCompiler_temp$$inline_1026 = new M$$1(JSCompiler_temp_const$$inline_1027.x + JSCompiler_inline_result$$inline_1028.x, JSCompiler_temp_const$$inline_1027.y + JSCompiler_inline_result$$inline_1028.y)
                  }else {
                    JSCompiler_temp$$inline_1026 = b$$inline_1024
                  }
                  JSCompiler_temp$$inline_1022 = JSCompiler_temp$$inline_1026
                }
                var f$$inline_1032 = JSCompiler_temp$$inline_1022;
                c$$inline_1018.x = c$$inline_1018.x + f$$inline_1032.x;
                c$$inline_1018.y = c$$inline_1018.y + f$$inline_1032.y;
                var v2495 = d$$inline_1019;
                if(v2495) {
                  var v3630 = d$$inline_1019 != b$$inline_1017;
                  if(v3630) {
                    var v4316 = e$$inline_1021 = d$$inline_1019.frameElement;
                    if(v4316) {
                      v4316 = d$$inline_1019 = d$$inline_1019.parent
                    }
                    v3630 = v4316
                  }
                  v2495 = v3630
                }
                v817 = v2495
              }while(v817);
              JSCompiler_inline_result$$934 = c$$inline_1018;
              d$$inline_833 = JSCompiler_inline_result$$934;
              var v3631 = b$$inline_831;
              var v5170 = JAM.call(Math.round, Math, [d$$inline_833.x]);
              v3631.adx = v5170;
              var v2496 = b$$inline_831;
              var v5171 = JAM.call(Math.round, Math, [d$$inline_833.y]);
              v2496.ady = v5171
            }catch(e$$inline_834) {
              b$$inline_831.adx = -12245933;
              b$$inline_831.ady = -12245933
            }
          }
        }
        JSCompiler_inline_result$$743 = void 0
      }
      var a$$inline_836 = b$$inline_705;
      var b$$inline_837 = D$$1();
      var c$$inline_838 = !1;
      var d$$inline_839 = de(c$$inline_838, b$$inline_837.top);
      if(d$$inline_839) {
        var JSCompiler_temp$$inline_840;
        if(JSCompiler_temp$$inline_840 = -12245933 == d$$inline_839.width) {
          var JSCompiler_temp$$inline_841;
          if(JSCompiler_temp$$inline_841 = b$$inline_837.google_top_values) {
            var JSCompiler_inline_result$$inline_842;
            var a$$inline_843 = b$$inline_837.google_top_values;
            var b$$inline_844 = parseInt(a$$inline_843[10], 10);
            a$$inline_843 = parseInt(a$$inline_843[11], 10);
            var v823;
            var v3633 = 0 < b$$inline_844;
            if(v3633) {
              v3633 = 0 < a$$inline_843
            }
            if(v3633) {
              v823 = new u$$2(b$$inline_844, a$$inline_843)
            }else {
              v823 = new u$$2(-12245933, -12245933)
            }
            JSCompiler_inline_result$$inline_842 = v823;
            JSCompiler_temp$$inline_841 = d$$inline_839 = JSCompiler_inline_result$$inline_842
          }
          JSCompiler_temp$$inline_840 = JSCompiler_temp$$inline_841
        }
        JSCompiler_temp$$inline_840;
        a$$inline_836.biw = d$$inline_839.width;
        a$$inline_836.bih = d$$inline_839.height
      }
      var v826 = b$$inline_837.top != b$$inline_837;
      if(v826) {
        var v2500 = b$$inline_837 = de(c$$inline_838, b$$inline_837);
        if(v2500) {
          a$$inline_836.isw = b$$inline_837.width;
          a$$inline_836.ish = b$$inline_837.height
        }
      }
      var a$$inline_846 = b$$inline_705;
      var b$$inline_847;
      JSCompiler_inline_label_851: {
        var a$$inline_848 = D$$1();
        if(a$$inline_848 == a$$inline_848.top) {
          b$$inline_847 = 0;
          break JSCompiler_inline_label_851
        }
        var b$$inline_849 = [];
        JAM.call(b$$inline_849.push, b$$inline_849, [a$$inline_848.document.URL]);
        var v829 = a$$inline_848.name;
        if(v829) {
          JAM.call(b$$inline_849.push, b$$inline_849, [a$$inline_848.name])
        }
        var c$$inline_850 = !0;
        a$$inline_848 = de(!c$$inline_850, a$$inline_848);
        JAM.call(b$$inline_849.push, b$$inline_849, [a$$inline_848.width.toString()]);
        JAM.call(b$$inline_849.push, b$$inline_849, [a$$inline_848.height.toString()]);
        b$$inline_847 = Ab(b$$inline_849.join(""))
      }
      var v834 = 0 != b$$inline_847;
      if(v834) {
        var v2506 = a$$inline_846;
        var v5172 = b$$inline_847.toString();
        v2506.ifk = v5172
      }
      var a$$inline_853 = b$$inline_705;
      var b$$inline_854 = J$$1();
      var v2507 = n$$2(window.google_eids);
      if(v2507) {
        v2507 = 0 !== window.google_eids.length
      }
      if(v2507) {
        ze = ze | 64;
        var c$$inline_855 = 0;
        var v836 = c$$inline_855 < window.google_eids.length;
        for(;v836;) {
          var v3637 = window.google_eids;
          introspect(JAM.policy.p4) {
            var v2509 = v3637[c$$inline_855]
          }
          var v835 = p$$1(v2509);
          if(v835) {
            var v3638 = window.google_eids;
            introspect(JAM.policy.p4) {
              var v2510 = v3638[c$$inline_855]
            }
            JAM.call(b$$inline_854.bb, b$$inline_854, [v2510])
          }
          c$$inline_855 = c$$inline_855 + 1;
          v836 = c$$inline_855 < window.google_eids.length
        }
      }
      var v838 = a$$inline_853;
      var v5173 = b$$inline_854.Ka();
      v838.eid = v5173;
      var a$$inline_857 = b$$inline_705;
      var b$$inline_858 = me();
      var v839 = b$$inline_858 = b$$inline_858.getOseId();
      if(v839) {
        a$$inline_857.oid = b$$inline_858
      }
      var a$$inline_860 = b$$inline_705;
      var b$$inline_861 = D$$1();
      a$$inline_860.ref = window.google_referrer_url;
      a$$inline_860.loc = window.google_page_location;
      var c$$inline_862 = hc();
      c$$inline_862 = cf(c$$inline_862);
      var d$$inline_863 = K$$1;
      var e$$inline_864 = 4;
      var f$$inline_865 = J$$1();
      var g$$inline_866 = d$$inline_863.TOP_URL_REPLACES_MISSING_URL.EXPERIMENT;
      if(JAM.call(f$$inline_865.m, f$$inline_865, [e$$inline_864]) == g$$inline_866) {
        var b$$inline_867 = c$$inline_862.url;
        var v841 = a$$inline_860.url;
        if(!v841) {
          var v2513 = a$$inline_860.ref;
          if(!v2513) {
            var v3640 = a$$inline_860.loc;
            if(!v3640) {
              var v4319 = !b$$inline_867;
              if(!v4319) {
                a$$inline_860.url = b$$inline_867
              }
            }
          }
        }
      }
      d$$inline_863 = d$$inline_863.ALWAYS_USE_DELAYED_IMPRESSIONS.EXPERIMENT;
      if(JAM.call(f$$inline_865.m, f$$inline_865, [e$$inline_864]) == d$$inline_863) {
        a$$inline_860.unviewed_position_start = "1"
      }
      var v845 = a$$inline_860.loc;
      if(!v845) {
        v845 = a$$inline_860.url
      }
      e$$inline_864 = v845;
      var v846 = !Ye();
      if(v846) {
        v846 = c$$inline_862.url == a$$inline_860.ref
      }
      f$$inline_865 = v846;
      if(!f$$inline_865) {
        var v2520 = c$$inline_862.url == e$$inline_864;
        if(!v2520) {
          a$$inline_860.top = c$$inline_862.url
        }
      }
      var v847 = window.google_async_rrc;
      if(v847) {
        a$$inline_860.rr = window.google_async_rrc
      }
      a$$inline_860.rs = 0;
      var v848 = c$$inline_862 = b$$inline_861.google_top_js_status;
      if(v848) {
        a$$inline_860.jp = c$$inline_862
      }
      if(Xi) {
        a$$inline_860.jpd = Xi
      }
      if(c$$inline_862 = Mh(b$$inline_861)) {
        e$$inline_864 = new Uh(c$$inline_862);
        var v3644 = e$$inline_864.yb();
        if(v3644) {
          var v4321 = a$$inline_860;
          var v5174 = e$$inline_864.Ob();
          v4321.dss = v5174
        }
        var v2522 = c$$inline_862.Oa();
        if(v2522) {
          var v3645 = a$$inline_860;
          var v5175 = c$$inline_862.Oa();
          v3645.dsd = v5175
        }
      }
      if(ch(window, b$$inline_861)) {
        var a$$inline_868 = b$$inline_861;
        var c$$inline_869;
        JSCompiler_inline_label_891: {
          var a$$inline_870 = a$$inline_868;
          var b$$inline_871 = window.google_ad_client;
          var c$$inline_872 = a$$inline_870.location.hash;
          var v2523 = !c$$inline_872;
          if(!v2523) {
            v2523 = !c$$inline_872.indexOf
          }
          if(v2523) {
            c$$inline_869 = !1;
            break JSCompiler_inline_label_891
          }
          var d$$inline_873;
          var v852 = -1 != c$$inline_872.indexOf("google_anchor_debug");
          if(v852) {
            d$$inline_873 = Yg(1)
          }
          if(!d$$inline_873) {
            c$$inline_869 = !1;
            break JSCompiler_inline_label_891
          }
          JAM.call(d$$inline_873.ja, d$$inline_873, [a$$inline_870, b$$inline_871]);
          c$$inline_869 = !0
        }
        if(!c$$inline_869) {
          new dh(a$$inline_868)
        }
      }
      c$$inline_862 = rg(b$$inline_861);
      var v855 = c$$inline_862.wasReactiveAdConfigHandlerRegistered;
      if(v855) {
        var v2526 = a$$inline_860;
        var v5176 = ah(window, b$$inline_861);
        v2526.fc = v5176
      }
      if(ub(w$$6)) {
      }else {
        var JSCompiler_temp_const$$inline_874 = a$$inline_860;
        var JSCompiler_inline_result$$inline_875;
        var a$$inline_876 = "";
        if(document.documentMode) {
          var b$$inline_877 = JAM.call(document.createElement, document, ["IFRAME"]);
          b$$inline_877.frameBorder = 0;
          b$$inline_877.style.height = 0;
          b$$inline_877.style.width = 0;
          b$$inline_877.style.position = "absolute";
          if(document.body) {
            var v859 = document.body;
            JAM.call(v859.appendChild, v859, [b$$inline_877]);
            try {
              var c$$inline_878 = b$$inline_877.contentWindow.document;
              c$$inline_878.open();
              JAM.call(c$$inline_878.write, c$$inline_878, ["<!DOCTYPE html>"]);
              c$$inline_878.close();
              a$$inline_876 = a$$inline_876 + c$$inline_878.documentMode
            }catch(d$$inline_887) {
            }
            document.body.removeChild(b$$inline_877)
          }
        }
        JSCompiler_inline_result$$inline_875 = a$$inline_876;
        JSCompiler_temp_const$$inline_874.docm = JSCompiler_inline_result$$inline_875
      }
      c$$inline_862 = K$$1.SS;
      var v865 = J$$1();
      e$$inline_864 = JAM.call(v865.m, v865, [14]);
      var v866 = e$$inline_864 == c$$inline_862.COUNT_AD_FRAMES_ON_PAGE_EXPERIMENT;
      if(v866) {
        var v2529 = a$$inline_860;
        var v5177 = JAM.call(T$$1.frameCountsWithDelayedPingback, T$$1, [b$$inline_861, a$$inline_860.adk, a$$inline_860.correlator, a$$inline_860.frm]);
        v2529.frmn = v5177
      }
      if(e$$inline_864 == c$$inline_862.BROWSER_DIMENSIONS_EXPERIMENT) {
        var JSCompiler_inline_result$$inline_879;
        try {
          var b$$inline_880 = b$$inline_861.screenX;
          var c$$inline_881 = b$$inline_861.screenY
        }catch(d$$inline_888) {
        }
        try {
          var e$$inline_882 = b$$inline_861.outerWidth;
          var f$$inline_883 = b$$inline_861.outerHeight
        }catch(g$$inline_889) {
        }
        try {
          var h$$inline_884 = b$$inline_861.innerWidth;
          var k$$inline_885 = b$$inline_861.innerHeight
        }catch(l$$inline_890) {
        }
        var v867 = b$$inline_861.screenLeft;
        var v868 = b$$inline_861.screenTop;
        var v2531;
        if(b$$inline_861.screen) {
          v2531 = b$$inline_861.screen.availWidth
        }else {
          v2531 = void 0
        }
        var v869 = v2531;
        var v2532;
        if(b$$inline_861.screen) {
          v2532 = b$$inline_861.screen.availTop
        }else {
          v2532 = void 0
        }
        JSCompiler_inline_result$$inline_879 = [v867, v868, b$$inline_880, c$$inline_881, v869, v2532, e$$inline_882, f$$inline_883, h$$inline_884, k$$inline_885];
        b$$inline_861 = JSCompiler_inline_result$$inline_879;
        var v2533 = a$$inline_860;
        var v5178 = b$$inline_861.join(",");
        v2533.brdim = v5178
      }
      var a$$inline_886 = 0;
      var v872 = void 0 === w$$6.postMessage;
      if(v872) {
        a$$inline_886 = a$$inline_886 | 1
      }
      b$$inline_861 = a$$inline_886;
      var v873 = 0 < b$$inline_861;
      if(v873) {
        a$$inline_860.osd = b$$inline_861
      }
      var v874 = a$$inline_860;
      var v5179 = Xe(document);
      v874.vis = v5179;
      b$$inline_705.fu = ze;
      a$$inline_498 = b$$inline_705;
      var c$$inline_500 = L$$1(b$$inline_499, "/pagead/ads?");
      var JSCompiler_inline_result$$576;
      var v875 = J$$1();
      var a$$inline_707 = JAM.call(v875.m, v875, [19]);
      var b$$inline_708 = K$$1.PRERENDERING_DELAYED_IMPRESSION;
      var v876 = a$$inline_707 == b$$inline_708.EXPERIMENT;
      if(v876) {
        v876 = "html" == window.google_ad_output
      }
      JSCompiler_inline_result$$576 = v876;
      if(JSCompiler_inline_result$$576) {
        a$$inline_498.unviewed_position_start = "1"
      }
      var v877 = a$$inline_498.unviewed_position_start;
      if(!v877) {
        var v3655 = w$$6.google_ad_output;
        if(v3655) {
          v3655 = "html" !== w$$6.google_ad_output
        }
        var v2538 = v3655;
        if(!v2538) {
          var v3656 = 3 != Xe(v$$1);
          if(!v3656) {
            var v4324 = !Ia$$1;
            if(!v4324) {
              zi = !0;
              yi = c$$inline_500;
              c$$inline_500 = L$$1(b$$inline_499, "/pagead/blank.gif#?")
            }
          }
        }
      }
      var v878 = window;
      var v5180 = ki(a$$inline_498, c$$inline_500 + "");
      v878.google_ad_url = v5180;
      c$$289 = !0
    }
    if(a$$557) {
      var v2541 = a$$557.id == b$$428;
      if(v2541) {
        qd(a$$557)
      }
    }
    if(c$$289) {
      var JSCompiler_inline_result$$6;
      var a$$inline_502 = window;
      var c$$inline_504 = window.google_ad_url;
      if(!B$$2) {
        wb(a$$inline_502)
      }
      var e$$inline_506 = yb(a$$inline_502);
      c$$inline_504 = ki({ifi:e$$inline_506}, c$$inline_504);
      var v880;
      if(1991 < c$$inline_504.length) {
        v880 = c$$inline_504.substring(0, 1983) + "&trunc=1"
      }else {
        v880 = c$$inline_504
      }
      c$$inline_504 = v880;
      c$$inline_504 = c$$inline_504.replace(/%\w?$/, "");
      var f$$inline_507 = "script";
      var g$$inline_508 = Lb(e$$inline_506);
      H$$1();
      var v3660 = "js" != a$$inline_502.google_ad_output;
      if(v3660) {
        v3660 = "json_html" != a$$inline_502.google_ad_output
      }
      var v2545 = v3660;
      if(!v2545) {
        var v3661 = !a$$inline_502.google_ad_request_done;
        if(v3661) {
          v3661 = !a$$inline_502.google_radlink_request_done
        }
        v2545 = v3661
      }
      if(v2545) {
        if("html" == a$$inline_502.google_ad_output) {
          var a$$inline_712 = a$$inline_502;
          var c$$inline_714 = c$$inline_504;
          var d$$inline_715 = e$$inline_506;
          var e$$inline_716 = ci;
          var f$$inline_717 = void 0;
          var v881;
          if(e$$inline_716) {
            v881 = c$$inline_714.replace(/&ea=[^&]*/, "") + "&ea=0"
          }else {
            v881 = c$$inline_714
          }
          var g$$inline_718 = v881;
          var h$$inline_719 = Lb(d$$inline_715);
          var k$$inline_720 = {id:h$$inline_719, name:h$$inline_719};
          Ff(k$$inline_720, a$$inline_712.google_ad_width, a$$inline_712.google_ad_height, !1, mi(g$$inline_718));
          var l$$inline_721 = Cf(k$$inline_720);
          var v886 = a$$inline_712.google_container_id;
          if(!v886) {
            v886 = f$$inline_717 || null
          }
          var z$$inline_722 = v886;
          f$$inline_717 = a$$inline_712.google_async_iframe_id;
          var C$$inline_723 = a$$inline_712.google_container_id;
          var v887 = e$$inline_716;
          if(v887) {
            var v2549 = zf();
            if(!v2549) {
              v2549 = gi()
            }
            v887 = v2549
          }
          e$$inline_716 = v887;
          var I$$inline_724 = "";
          if(e$$inline_716) {
            if(gi()) {
              var JSCompiler_inline_result$$746;
              var a$$inline_893 = 10;
              var v888 = void 0;
              if(!v888) {
                v888 = th
              }
              var c$$inline_895 = v888;
              var d$$inline_896 = c$$inline_895.length;
              var e$$inline_897 = "";
              var v2551 = a$$inline_893;
              a$$inline_893 = a$$inline_893 - 1;
              var v889 = 0 < v2551;
              for(;v889;) {
                e$$inline_897 = e$$inline_897 + c$$inline_895.charAt(JAM.call(Math.floor, Math, [Math.random() * d$$inline_896]));
                var v2554 = a$$inline_893;
                a$$inline_893 = a$$inline_893 - 1;
                v889 = 0 < v2554
              }
              JSCompiler_inline_result$$746 = e$$inline_897;
              I$$inline_724 = JSCompiler_inline_result$$746;
              var v3665 = !!v$$1.URL;
              if(v3665) {
                var v4332 = 0 < v$$1.URL.indexOf("?google_debug");
                if(!v4332) {
                  v4332 = 0 < v$$1.URL.indexOf("&google_debug")
                }
                v3665 = v4332
              }
              c$$inline_714 = Zd(c$$inline_714, I$$inline_724, v3665)
            }
          }else {
            c$$inline_714 = g$$inline_718
          }
          if(Zg(a$$inline_712)) {
            var a$$inline_899 = a$$inline_712;
            var c$$inline_901 = c$$inline_714;
            var d$$inline_902 = k$$inline_720;
            var e$$inline_903 = f$$inline_717;
            var f$$inline_904 = D$$1();
            var JSCompiler_inline_result$$inline_905;
            JSCompiler_inline_label_915: {
              var a$$inline_906 = f$$inline_904;
              var b$$inline_907 = a$$inline_899;
              var c$$inline_908 = b$$inline_907.google_reactive_ad_format;
              if(!Ec(lg, c$$inline_908)) {
                JSCompiler_inline_result$$inline_905 = !1;
                break JSCompiler_inline_label_915
              }
              introspect(JAM.policy.p4) {
                var v892 = Ug[c$$inline_908]
              }
              if(!v892) {
                v892 = null
              }
              c$$inline_908 = v892;
              var JSCompiler_inline_result$$inline_909;
              JSCompiler_inline_label_916: {
                var a$$inline_910 = a$$inline_906;
                var b$$inline_911 = b$$inline_907;
                switch(c$$inline_908) {
                  case 1:
                    var JSCompiler_temp$$949;
                    if(JSCompiler_temp$$949 = Hg(a$$inline_910)) {
                      rg(a$$inline_910);
                      JSCompiler_temp$$949 = !0
                    }
                    JSCompiler_inline_result$$inline_909 = JSCompiler_temp$$949;
                    break JSCompiler_inline_label_916;
                  case 2:
                    var JSCompiler_temp$$1036;
                    if(JSCompiler_temp$$1036 = Rg(a$$inline_910, b$$inline_911)) {
                      var a$$inline_1037 = a$$inline_910;
                      a$$inline_1037 = rg(a$$inline_1037);
                      JSCompiler_temp$$1036 = !!a$$inline_1037.wasReactiveAdConfigReceived[2]
                    }
                    JSCompiler_inline_result$$inline_909 = JSCompiler_temp$$1036;
                    break JSCompiler_inline_label_916
                }
                JSCompiler_inline_result$$inline_909 = !1
              }
              if(!JSCompiler_inline_result$$inline_909) {
                JSCompiler_inline_result$$inline_905 = !1;
                break JSCompiler_inline_label_915
              }
              var d$$inline_912 = rg(a$$inline_906);
              var v897 = d$$inline_912.wasReactiveAdCreated;
              introspect(JAM.policy.p4) {
                var e$$inline_913 = v897[c$$inline_908]
              }
              JAM.set(d$$inline_912.wasReactiveAdCreated, c$$inline_908, !0, JAM.policy.p2);
              JSCompiler_inline_result$$inline_905 = !e$$inline_913
            }
            if(JSCompiler_inline_result$$inline_905) {
              f$$inline_904 = Zg(a$$inline_899);
              var g$$inline_914 = {};
              g$$inline_914.fa = f$$inline_904;
              c$$inline_901 = ki(g$$inline_914, c$$inline_901);
              var v899 = d$$inline_902;
              var v5181 = mi(c$$inline_901);
              v899.src = v5181;
              c$$inline_901 = Bf(document, d$$inline_902);
              var v900 = document.body;
              JAM.call(v900.appendChild, v900, [c$$inline_901]);
              qh(a$$inline_899, e$$inline_903, c$$inline_901, D$$1())
            }
          }else {
            if(hi(a$$inline_712)) {
              g$$inline_718 = ga$$1(qi, a$$inline_712, document, e$$inline_716, c$$inline_714, h$$inline_719, k$$inline_720, a$$inline_712.google_ad_width, a$$inline_712.google_ad_height, z$$inline_722, f$$inline_717, C$$inline_723);
              g$$inline_718 = Mb(g$$inline_718);
              ni(a$$inline_712, c$$inline_714, g$$inline_718)
            }else {
              if("S" == a$$inline_712.google_ad_handling_mode) {
                var a$$inline_918 = a$$inline_712;
                var b$$inline_919 = c$$inline_714;
                var c$$inline_920 = ce(b$$inline_919, "w");
                var d$$inline_921 = ce(b$$inline_919, "h");
                var e$$inline_922 = ce(b$$inline_919, "ifi");
                e$$inline_922 = Lb(e$$inline_922);
                e$$inline_922 = {id:e$$inline_922, name:e$$inline_922};
                var f$$inline_923 = "U-" + b$$inline_919;
                Ff(e$$inline_922, c$$inline_920, d$$inline_921, !1, Df(f$$inline_923));
                var v904 = a$$inline_918.document;
                JAM.call(v904.write, v904, [Cf(e$$inline_922)])
              }else {
                oi(a$$inline_712, document, e$$inline_716, c$$inline_714, h$$inline_719, k$$inline_720, a$$inline_712.google_ad_width, a$$inline_712.google_ad_height, z$$inline_722, f$$inline_717, C$$inline_723)
              }
            }
          }
          if(e$$inline_716) {
            var v2560 = gi();
            if(v2560) {
              var v4333 = zf();
              if(!v4333) {
                JAM.call(setTimeout, null, [xe("ac::write_ee", ei, xc), 0])
              }
              var v4334 = w$$6.google_eas_queue;
              var v4732 = a$$inline_712.google_ad_width;
              var v4733 = a$$inline_712.google_ad_height;
              var v4734 = D$$1();
              var v4962 = f$$inline_717;
              if(!v4962) {
                v4962 = void 0
              }
              JAM.call(v4334.push, v4334, [Yd(h$$inline_719, c$$inline_714, v4732, v4733, I$$inline_724, v4734, v4962, "google_expandable_ad_slot" + d$$inline_715)])
            }
          }
          if(B$$2) {
            var a$$inline_925 = a$$inline_712.google_async_iframe_id;
            var c$$inline_927 = "javascript:" + ab$$1(["<!DOCTYPE html><html><body>", l$$inline_721, "</body></html>"].join(""));
            var d$$inline_928 = D$$1();
            var v912 = new Me(d$$inline_928);
            JAM.call(v912.set, v912, [a$$inline_925, c$$inline_927])
          }
          a$$inline_712 = JAM.call(JAM.get(document, "getElementById", JAM.policy.p1), document, [h$$inline_719]);
          if(zi) {
            if(a$$inline_712) {
              Ai(a$$inline_712, document)
            }
          }
        }
      }else {
        JAM.call(document.write, document, ["<" + f$$inline_507 + ' language="JavaScript1.1" src=' + ji(mi(c$$inline_504)) + "></" + f$$inline_507 + ">"])
      }
      sc = ga$$1(wi, g$$inline_508, c$$inline_504, a$$inline_502.google_ad_output, a$$inline_502.google_ad_width, a$$inline_502.google_ad_height);
      JSCompiler_inline_result$$6 = c$$inline_504;
      var JSCompiler_temp_const$$9 = JSCompiler_inline_result$$6;
      var JSCompiler_inline_result$$10;
      Bh(window);
      JSCompiler_inline_result$$10 = void 0;
      JSCompiler_temp_const$$9;
      var JSCompiler_temp_const$$33 = JSCompiler_inline_result$$10;
      var JSCompiler_temp$$34;
      var v2563 = a$$557 = bg;
      if(v2563) {
        v2563 = !a$$557.Ta()
      }
      if(JSCompiler_temp$$34 = v2563) {
      }else {
        if(sc) {
          sc()
        }
        JSCompiler_temp$$34 = void 0
      }
    }else {
      if(B$$2) {
        uf();
        Wb(window)
      }
    }
    return
  }
  function Vi() {
    var a$$556 = w$$6;
    var v920 = "html" != a$$556.google_ad_output;
    if(!v920) {
      var v2565 = ub(a$$556);
      if(!v2565) {
        var v3672 = J$$1();
        JAM.call(v3672.k, v3672, [[K$$1.SEND_LOAD_TIME_PINGBACKS.EXPERIMENT], ra$$1, 16])
      }
    }
    return
  }
  function Ai(a$$541, b$$413) {
    function v26() {
      xi(yi, a$$541);
      A$$1(v$$1, "webkitvisibilitychange", c$$278);
      return
    }
    if(3 != Xe(b$$413)) {
      xi(yi, a$$541)
    }else {
      var c$$278 = v26;
      y$$32(b$$413, "webkitvisibilitychange", c$$278)
    }
    zi = !1;
    return
  }
  function wi(a$$540, b$$412, c$$277, d$$169, e$$100) {
    a$$540 = JAM.call(JAM.get(document, "getElementById", JAM.policy.p1), document, [a$$540]);
    var a$$inline_440 = b$$412;
    var b$$inline_441 = a$$540;
    var c$$inline_442 = c$$277;
    var d$$inline_443 = d$$169;
    var e$$inline_444 = e$$100;
    var f$$inline_445 = me();
    var v922 = f$$inline_445.getOseId();
    if(v922) {
      JAM.call(f$$inline_445.registerAdBlock, f$$inline_445, [a$$inline_440, 1, String(c$$inline_442 || ""), b$$inline_441, d$$inline_443, e$$inline_444])
    }
    if(B$$2) {
      uf();
      Wb(window)
    }
    return
  }
  function oi(a$$537, b$$409, c$$274, d$$166, e$$97, f$$56, g$$34, h$$26, k$$13, l$$15, z$$8) {
    var v2569 = !c$$274;
    if(!v2569) {
      v2569 = gi()
    }
    if(v2569) {
      var v2570 = f$$56;
      var v5182 = mi(d$$166);
      v2570.src = v5182;
      var JSCompiler_temp_const$$68 = a$$537 = Cf(f$$56);
      var JSCompiler_temp$$69;
      if(z$$8) {
        var a$$inline_430 = z$$8;
        var c$$inline_432 = a$$537;
        if(a$$inline_430) {
          var v2571 = a$$inline_430 = JAM.call(JAM.get(b$$409, "getElementById", JAM.policy.p1), b$$409, [a$$inline_430]);
          if(v2571) {
            if(c$$inline_432) {
              var v4338 = "" != c$$inline_432.length;
              if(v4338) {
                a$$inline_430.style.visibility = "visible";
                JAM.set(a$$inline_430, "innerHTML", c$$inline_432)
              }
            }
          }
        }
        JSCompiler_temp$$69 = void 0
      }else {
        JSCompiler_temp$$69 = JAM.call(b$$409.write, b$$409, [a$$537])
      }
    }else {
      b$$409 = yb(a$$537);
      var v2572 = a$$537;
      var v2573 = "google_expandable_ad_slot" + b$$409;
      var v3677 = mi(d$$166);
      var v4339 = k$$13;
      if(!v4339) {
        v4339 = void 0
      }
      var v3678 = v4339;
      var v3679 = D$$1();
      var v4340 = l$$15;
      if(!v4340) {
        v4340 = void 0
      }
      var v5183 = JAM.call(ExpandableAdSlotFactory.createIframe, ExpandableAdSlotFactory, [e$$97, v3677, g$$34, h$$26, v3678, v3679, v4340]);
      JAM.set(v2572, v2573, v5183, JAM.policy.p2)
    }
    return
  }
  function qi(a$$536, b$$408, c$$273, d$$165, e$$96, f$$55, g$$33, h$$25, k$$12, l$$14, z$$7, C$$4, I$$2, xb$$1) {
    var a$$inline_425 = d$$165;
    var b$$inline_426 = C$$4;
    var c$$inline_427 = I$$2;
    a$$inline_425 = be(a$$inline_425, "pfi", b$$inline_426, void 0, !0);
    if(c$$inline_427) {
      var v4341;
      if(b$$inline_426 = ce(a$$inline_425, "eid")) {
        v4341 = c$$inline_427 + "%2C" + b$$inline_426
      }else {
        v4341 = c$$inline_427
      }
      b$$inline_426 = v4341;
      a$$inline_425 = be(a$$inline_425, "eid", b$$inline_426);
      var v3681 = 453848236 == c$$inline_427;
      if(v3681) {
        a$$inline_425 = be(a$$inline_425, "unviewed_position_start", 1, void 0, !0)
      }
    }
    d$$165 = a$$inline_425;
    var v2574 = 453848234 == I$$2;
    if(!v2574) {
      v2574 = 453848236 == I$$2
    }
    if(v2574) {
      d$$165 = d$$165.replace(/&(adx|ady|oid|jp|top)=[^&]*/g, "");
      d$$165 = d$$165 + "&ea=0";
      c$$273 = !1
    }
    oi(a$$536, b$$408, c$$273, d$$165, e$$96, f$$55, g$$33, h$$25, k$$12, l$$14, z$$7);
    if(xb$$1) {
      if(sc) {
        sc()
      }
    }
    return
  }
  function ni(a$$535, b$$407, c$$272) {
    function v27() {
      d$$164.R();
      var v927 = d$$164.Ta();
      if(!v927) {
        d$$164.ya();
        JAM.call(c$$272, null, [d$$164.v(), null, !0])
      }
      return
    }
    var d$$164 = bg;
    if(!d$$164) {
      JAM.call(c$$272, null, [-1, null, !1])
    }
    d$$164.R();
    var v928;
    if(d$$164.ma) {
      v928 = JAM.call(c$$272, null, [d$$164.v(), d$$164.za, !1])
    }else {
      JAM.call(d$$164.zc, d$$164, [mi(b$$407), c$$272]);
      var v3686 = d$$164.va;
      if(!v3686) {
        b$$407 = Fe;
        var v4745;
        if(b$$407.test(navigator.userAgent)) {
          d$$164.Ec();
          b$$407 = v27;
          v4745 = a$$535.setTimeout(b$$407, Wh)
        }else {
          d$$164.ya();
          v4745 = JAM.call(c$$272, null, [d$$164.v(), null, !1])
        }
        v3686 = v4745
      }
      v928 = v3686
    }
    v928;
    return
  }
  function hi(a$$534) {
    var b$$406 = a$$534.google_ad_handling_mode;
    var v2582;
    if(B$$2) {
      v2582 = 1 == yb(a$$534)
    }else {
      v2582 = !yb(a$$534)
    }
    var v929 = v2582;
    if(v929) {
      v929 = Le(b$$406)
    }
    return v929
  }
  function li() {
    var a$$533 = me();
    var b$$405 = mc();
    var v930 = a$$533.setUpForcePeriscope;
    if(v930) {
      a$$533.setUpForcePeriscope()
    }
    return JAM.call(a$$533.setupOse, a$$533, [G$$1(b$$405, 7)])
  }
  function ki(a$$531, b$$403) {
    function v28(a$$532, b$$404) {
      var v2583 = a$$532;
      if(!v2583) {
        var v3689 = 0 === a$$532;
        if(!v3689) {
          v3689 = !1 === a$$532
        }
        v2583 = v3689
      }
      if(v2583) {
        var v3691 = "boolean" == typeof a$$532;
        if(v3691) {
          var v4348;
          if(a$$532) {
            v4348 = 1
          }else {
            v4348 = 0
          }
          a$$532 = v4348
        }
        var v4349;
        if("function" == typeof encodeURIComponent) {
          v4349 = encodeURIComponent(a$$532)
        }else {
          v4349 = escape(a$$532)
        }
        ib$$1(e$$95, d$$163, b$$404, "=", v4349);
        d$$163 = "&"
      }
      return
    }
    var c$$271 = b$$403.slice(-1);
    var v933;
    var v3693 = "?" == c$$271;
    if(!v3693) {
      v3693 = "#" == c$$271
    }
    if(v3693) {
      v933 = ""
    }else {
      v933 = "&"
    }
    var d$$163 = v933;
    var e$$95 = [b$$403];
    c$$271 = v28;
    x$$51(a$$531, c$$271);
    return e$$95.join("")
  }
  function di() {
    return L$$1(Vh, "/pagead/expansion_embed.js")
  }
  function bi() {
    if(!/_sdo/.test(window.google_ad_format)) {
      if(!wc()) {
        var a$$inline_409 = H$$1();
        if(w$$6.google_top_experiment) {
          var a$$inline_646 = Of;
          var b$$inline_647 = K$$1.PERISCOPE_FOR_TARGETING;
          if(window.google_top_experiment) {
            var c$$inline_648;
            switch(window.google_top_experiment) {
              case a$$inline_646.CONTROL:
                c$$inline_648 = b$$inline_647.CONTROL;
                break;
              case a$$inline_646.EXPERIMENT_ZERO_LATENCY:
                c$$inline_648 = b$$inline_647.EXPERIMENT_ZERO_LATENCY;
                break;
              case a$$inline_646.EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE:
                c$$inline_648 = b$$inline_647.EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE
            }
            if(c$$inline_648) {
              var v2587 = H$$1();
              JAM.call(v2587.k, v2587, [[c$$inline_648], 1, 10])
            }
          }
        }
        var a$$inline_650 = D$$1();
        var b$$inline_651 = K$$1.DEVICE_SENSORS;
        if(a$$inline_650.google_sensors) {
          a$$inline_650 = a$$inline_650.google_sensors.sensorsExperiment;
          var c$$inline_652;
          switch(a$$inline_650) {
            case "ds_c":
              c$$inline_652 = b$$inline_651.CONTROL;
              break;
            case "ds_zl":
              c$$inline_652 = b$$inline_651.EXPERIMENT_ZERO_LATENCY;
              break;
            case "ds_wfea":
              c$$inline_652 = b$$inline_651.EXPERIMENT_WAIT_FOR_EVENT_ARRIVAL
          }
          if(c$$inline_652) {
            var v2589 = H$$1();
            JAM.call(v2589.k, v2589, [[c$$inline_652], 1, 10])
          }
        }
        var b$$inline_410 = [K$$1.EXPANDABLE_MOBILE_REVERSE.CONTROL, K$$1.EXPANDABLE_MOBILE_REVERSE.EXPERIMENT];
        JAM.call(a$$inline_409.k, a$$inline_409, [b$$inline_410, na$$1, 13]);
        var b$$inline_655 = Ge;
        var c$$inline_656 = K$$1.PREFETCH_AD_HANDLING;
        var d$$inline_657;
        switch(w$$6.google_ad_handling_mode) {
          case b$$inline_655.CONTROL_NO_FRAME:
            d$$inline_657 = c$$inline_656.CONTROL_NO_FRAME;
            break;
          case b$$inline_655.ALWAYS_ZRT:
            d$$inline_657 = c$$inline_656.ALWAYS_ZRT;
            break;
          case b$$inline_655.SERIAL:
            d$$inline_657 = c$$inline_656.SERIAL
        }
        if(d$$inline_657) {
          var v2593 = H$$1();
          JAM.call(v2593.k, v2593, [[d$$inline_657], 1, 4])
        }
        var c$$inline_411 = K$$1.SS;
        b$$inline_410 = [c$$inline_411.COUNT_AD_FRAMES_ON_PAGE_CONTROL, c$$inline_411.COUNT_AD_FRAMES_ON_PAGE_EXPERIMENT];
        JAM.call(a$$inline_409.k, a$$inline_409, [b$$inline_410, va$$1, 14]);
        b$$inline_410 = [c$$inline_411.BROWSER_DIMENSIONS_CONTROL, c$$inline_411.BROWSER_DIMENSIONS_EXPERIMENT];
        JAM.call(a$$inline_409.k, a$$inline_409, [b$$inline_410, Ca$$1, 14]);
        b$$inline_410 = K$$1.PERISCOPE_FOR_TARGETING;
        b$$inline_410 = [b$$inline_410.CONTROL_REFERER_CLEANUP, b$$inline_410.EXPERIMENT_REFERER_CLEANUP];
        JAM.call(a$$inline_409.k, a$$inline_409, [b$$inline_410, qa$$1, 10]);
        if(window.google_ad_unit_key_2) {
          var a$$inline_659;
          var v948;
          if("ctrl" == window.google_ad_unit_key_2) {
            v948 = a$$inline_659 = K$$1.ADD_ADK2.CONTROL
          }else {
            var v2596 = /[0-9]+/.test(window.google_ad_unit_key_2);
            if(v2596) {
              v2596 = a$$inline_659 = K$$1.ADD_ADK2.EXPERIMENT
            }
            v948 = v2596
          }
          v948;
          if(a$$inline_659) {
            var v2598 = H$$1();
            JAM.call(v2598.k, v2598, [[a$$inline_659], 1, 4])
          }
        }
        b$$inline_410 = [K$$1.ASYNC_EXPANSION_EMBED.EXPERIMENT, K$$1.ASYNC_EXPANSION_EMBED.CONTROL];
        JAM.call(a$$inline_409.k, a$$inline_409, [b$$inline_410, ya$$1, 18]);
        var a$$inline_661 = void 0;
        var b$$inline_662 = Pb;
        var c$$inline_663 = K$$1.ASYNC_FOR_OPERA_ANDROID;
        var v952 = a$$inline_661;
        if(!v952) {
          v952 = navigator.userAgent
        }
        a$$inline_661 = v952;
        if(window.google_async_for_oa_experiment) {
          var d$$inline_664;
          a$$inline_661 = /Chrome/.test(a$$inline_661);
          var v953;
          if(window.google_async_for_oa_experiment == b$$inline_662.CONTROL) {
            var v2603;
            if(a$$inline_661) {
              v2603 = c$$inline_663.CONTROL_ANDROID_CHROME
            }else {
              v2603 = c$$inline_663.CONTROL_ANDROID
            }
            v953 = d$$inline_664 = v2603
          }else {
            var v2604 = window.google_async_for_oa_experiment == b$$inline_662.EXPERIMENT;
            if(v2604) {
              var v3702;
              if(a$$inline_661) {
                v3702 = c$$inline_663.EXPERIMENT_ANDROID_CHROME
              }else {
                v3702 = c$$inline_663.EXPERIMENT_ANDROID
              }
              v2604 = d$$inline_664 = v3702
            }
            v953 = v2604
          }
          v953;
          if(d$$inline_664) {
            var v2606 = H$$1();
            JAM.call(v2606.k, v2606, [[d$$inline_664], 1, 4])
          }
        }
        b$$inline_410 = [K$$1.JS_RNG.CONTROL, K$$1.JS_RNG.EXPERIMENT];
        JAM.call(a$$inline_409.k, a$$inline_409, [b$$inline_410, za$$1, 17]);
        var a$$inline_666 = v$$1;
        a$$inline_666 = Xe(a$$inline_666);
        if(3 == a$$inline_666) {
          a$$inline_666 = K$$1.PRERENDERING_DELAYED_IMPRESSION;
          var b$$inline_667 = H$$1();
          JAM.call(b$$inline_667.k, b$$inline_667, [[a$$inline_666.CONTROL, a$$inline_666.EXPERIMENT], ua$$1, 19])
        }
      }
      JSCompiler_inline_label_Vf_672: {
        var a$$inline_669 = Uf;
        var b$$inline_670 = K$$1.APPEND_AS_FOR_FORMAT_OVERRIDE;
        var c$$inline_671 = window.google_append_as_for_format_override;
        if(c$$inline_671) {
          var v2612;
          if(c$$inline_671 == a$$inline_669.EXPERIMENT) {
            v2612 = b$$inline_670.EXPERIMENT
          }else {
            v2612 = b$$inline_670.CONTROL
          }
          a$$inline_669 = v2612;
          var v2613 = J$$1();
          JAM.call(v2613.k, v2613, [[a$$inline_669], 1, 15]);
          break JSCompiler_inline_label_Vf_672
        }
      }
      JSCompiler_inline_label_Tf_677: {
        var a$$inline_673 = Sf;
        var b$$inline_674 = K$$1.ALWAYS_USE_DELAYED_IMPRESSIONS;
        var c$$inline_675 = window.google_always_use_delayed_impressions_experiment;
        var d$$inline_676 = window.google_ad_output;
        var v2615 = c$$inline_675;
        if(v2615) {
          var v3704 = !d$$inline_676;
          if(!v3704) {
            v3704 = "html" == d$$inline_676
          }
          v2615 = v3704
        }
        if(v2615) {
          var v2616;
          if(c$$inline_675 == a$$inline_673.EXPERIMENT) {
            v2616 = b$$inline_674.EXPERIMENT
          }else {
            v2616 = b$$inline_674.CONTROL
          }
          a$$inline_673 = v2616;
          var v2617 = J$$1();
          JAM.call(v2617.k, v2617, [[a$$inline_673], 1, 4]);
          break JSCompiler_inline_label_Tf_677
        }
      }
      var a$$inline_414 = window;
      var b$$inline_415;
      var a$$inline_678 = document.URL;
      var b$$inline_679 = {};
      a$$inline_678 = a$$inline_678.split("?");
      var v2619 = a$$inline_678.length - 1;
      introspect(JAM.policy.p4) {
        var v961 = a$$inline_678[v2619]
      }
      a$$inline_678 = v961.split("&");
      var c$$inline_680 = 0;
      var v966 = c$$inline_680 < a$$inline_678.length;
      for(;v966;) {
        introspect(JAM.policy.p4) {
          var v962 = a$$inline_678[c$$inline_680]
        }
        var d$$inline_681 = v962.split("=");
        if(d$$inline_681[0]) {
          try {
            var v963 = b$$inline_679;
            var v964 = d$$inline_681[0].toLowerCase();
            var v2622;
            if(1 < d$$inline_681.length) {
              var v3707;
              if(window.decodeURIComponent) {
                v3707 = decodeURIComponent(d$$inline_681[1].replace(/\+/g, " "))
              }else {
                v3707 = unescape(d$$inline_681[1])
              }
              v2622 = v3707
            }else {
              v2622 = ""
            }
            JAM.set(v963, v964, v2622, JAM.policy.p2)
          }catch(e$$inline_682) {
          }
        }
        c$$inline_680 = c$$inline_680 + 1;
        v966 = c$$inline_680 < a$$inline_678.length
      }
      b$$inline_415 = b$$inline_679;
      var v967 = b$$inline_415.google_ad_override;
      if(v967) {
        a$$inline_414.google_ad_override = b$$inline_415.google_ad_override;
        a$$inline_414.google_adtest = "on"
      }
      var a$$529 = window.google_start_time;
      var v968 = q$$3(a$$529);
      if(v968) {
        vf = a$$529;
        window.google_start_time = null
      }
      te("show_ads::init_globals", ve, $h);
      var a$$inline_417 = window;
      var d$$inline_420 = "script";
      var a$$inline_684 = a$$inline_417;
      var b$$inline_685 = a$$inline_684.google_ad_width;
      var c$$inline_686 = a$$inline_684.google_ad_height;
      var d$$inline_687 = D$$1();
      var JSCompiler_inline_result$$752;
      JSCompiler_inline_label_yf_775: {
        var a$$inline_758 = a$$inline_684;
        var b$$inline_759 = d$$inline_687.document;
        try {
          var JSCompiler_temp$$inline_760;
          if(JSCompiler_temp$$inline_760 = !1 === a$$inline_758.google_allow_expandable_ads) {
          }else {
            var JSCompiler_temp$$inline_761;
            if(JSCompiler_temp$$inline_761 = !b$$inline_759.body) {
            }else {
              var JSCompiler_temp$$inline_762;
              var v2627 = a$$inline_758.google_ad_output;
              if(v2627) {
                v2627 = "html" != a$$inline_758.google_ad_output
              }
              if(JSCompiler_temp$$inline_762 = v2627) {
              }else {
                var JSCompiler_temp$$inline_763;
                if(JSCompiler_temp$$inline_763 = isNaN(a$$inline_758.google_ad_height)) {
                }else {
                  var JSCompiler_temp$$inline_764;
                  if(JSCompiler_temp$$inline_764 = isNaN(a$$inline_758.google_ad_width)) {
                  }else {
                    var JSCompiler_temp$$inline_765;
                    if(JSCompiler_temp$$inline_765 = b$$inline_759.domain != a$$inline_758.location.hostname) {
                    }else {
                      var JSCompiler_temp$$inline_766;
                      if(JSCompiler_temp$$inline_766 = !/^http/.test(b$$inline_759.location.protocol)) {
                      }else {
                        var JSCompiler_inline_result$$inline_767;
                        JSCompiler_inline_label_774: {
                          var b$$inline_768 = b$$inline_759;
                          var v969;
                          var v4359 = J$$1();
                          if(JAM.call(v4359.m, v4359, [13]) == K$$1.EXPANDABLE_MOBILE_REVERSE.EXPERIMENT) {
                            v969 = /Win|Mac|Linux/
                          }else {
                            v969 = /Win|Mac|Linux|iPad|iPod|iPhone/
                          }
                          var c$$inline_769 = v969;
                          var d$$inline_770 = navigator.userAgent;
                          var e$$inline_771 = navigator.platform;
                          c$$inline_769 = c$$inline_769 || /Win|Mac|Linux|iPad|iPod|iPhone/;
                          var v2634 = c$$inline_769.test(e$$inline_771);
                          if(v2634) {
                            v2634 = !/^Opera/.test(d$$inline_770)
                          }
                          if(v2634) {
                            var v2635 = /WebKit\/(\d+)/.exec(d$$inline_770);
                            if(!v2635) {
                              v2635 = [0, 0]
                            }
                            c$$inline_769 = v2635[1];
                            var v2636 = /rv\:(\d+\.\d+)/.exec(d$$inline_770);
                            if(!v2636) {
                              v2636 = [0, 0]
                            }
                            var f$$inline_772 = v2636[1];
                            var v3717 = /Win/.test(e$$inline_771);
                            if(v3717) {
                              var v4361 = /MSIE.*Trident/.test(d$$inline_770);
                              if(v4361) {
                                v4361 = 8 < b$$inline_768.documentMode
                              }
                              v3717 = v4361
                            }
                            var v2637 = v3717;
                            if(!v2637) {
                              var v4362 = !c$$inline_769;
                              if(v4362) {
                                var v4749 = "Gecko" == navigator.product;
                                if(v4749) {
                                  var v4969 = 1.7 < f$$inline_772;
                                  if(v4969) {
                                    v4969 = !/rv\:1\.8([^.]|\.0)/.test(d$$inline_770)
                                  }
                                  v4749 = v4969
                                }
                                v4362 = v4749
                              }
                              var v3718 = v4362;
                              if(!v3718) {
                                v3718 = 524 < c$$inline_769
                              }
                              v2637 = v3718
                            }
                            if(v2637) {
                              JSCompiler_inline_result$$inline_767 = !0;
                              break JSCompiler_inline_label_774
                            }
                          }
                          JSCompiler_inline_result$$inline_767 = !1
                        }
                        JSCompiler_temp$$inline_766 = !JSCompiler_inline_result$$inline_767
                      }
                      JSCompiler_temp$$inline_765 = JSCompiler_temp$$inline_766
                    }
                    JSCompiler_temp$$inline_764 = JSCompiler_temp$$inline_765
                  }
                  JSCompiler_temp$$inline_763 = JSCompiler_temp$$inline_764
                }
                JSCompiler_temp$$inline_762 = JSCompiler_temp$$inline_763
              }
              JSCompiler_temp$$inline_761 = JSCompiler_temp$$inline_762
            }
            JSCompiler_temp$$inline_760 = JSCompiler_temp$$inline_761
          }
          if(JSCompiler_temp$$inline_760) {
            JSCompiler_inline_result$$752 = !0;
            break JSCompiler_inline_label_yf_775
          }
        }catch(c$$inline_773) {
          JSCompiler_inline_result$$752 = !0;
          break JSCompiler_inline_label_yf_775
        }
        JSCompiler_inline_result$$752 = !1
      }
      var v981;
      var v3720 = JSCompiler_inline_result$$752;
      if(!v3720) {
        var v4364 = Ze(d$$inline_687, d$$inline_687.document, b$$inline_685, c$$inline_686);
        if(!v4364) {
          v4364 = Zg(a$$inline_684)
        }
        v3720 = v4364
      }
      if(v3720) {
        v981 = !1
      }else {
        v981 = !0
      }
      ci = v981;
      if(!ci) {
        a$$inline_417.google_allow_expandable_ads = !1;
        var v982 = J$$1();
        var e$$inline_421 = JAM.call(v982.k, v982, [[K$$1.DIRECT_CALL_RENDER_AD.CONTROL, K$$1.DIRECT_CALL_RENDER_AD.EXPERIMENT], Aa$$1, 4])
      }
      var v985 = ci;
      if(v985) {
        v985 = !zf()
      }
      var f$$inline_422 = v985;
      var v986 = gi();
      if(v986) {
        f$$inline_422 = !1
      }
      if(f$$inline_422) {
        JAM.call(document.write, document, ["<" + d$$inline_420 + ' src="' + di() + '"></' + d$$inline_420 + ">"])
      }
      if(hi(a$$inline_417)) {
        var g$$inline_423 = L$$1(Ja$$1(), "");
        bg = new V$$1(a$$inline_417, g$$inline_423, a$$inline_417.google_ad_handling_mode, xc)
      }
      var v990;
      var v4367 = f$$inline_422;
      if(!v4367) {
        v4367 = void 0
      }
      var v3724 = a$$inline_417 = v4367;
      if(v3724) {
        v3724 = rb$$1()
      }
      if(v3724) {
        v990 = JAM.call(document.write, document, ["<" + d$$inline_420 + ' src="' + L$$1(Vh, "/pagead/render_ads.js") + '"></' + d$$inline_420 + ">"])
      }else {
        var v2644;
        var v4369 = a$$inline_417;
        if(!v4369) {
          v4369 = e$$inline_421 != K$$1.DIRECT_CALL_RENDER_AD.EXPERIMENT
        }
        if(v4369) {
          v2644 = JAM.call(document.write, document, ["<" + d$$inline_420 + '>google_protectAndRun("ads_core.google_render_ad", google_handleError, google_render_ad);</' + d$$inline_420 + ">"])
        }else {
          v2644 = ii()
        }
        v990 = v2644
      }
      v990
    }
    return
  }
  function Uh(a$$523) {
    this.t = a$$523;
    return
  }
  function Nh(a$$518, b$$395, c$$265, d$$161) {
    function v29() {
      if(d$$161) {
        var v2646 = 0 < a$$518.length;
        if(v2646) {
          d$$161()
        }
      }
      var a$$inline_394 = a$$518;
      var b$$inline_395 = 0;
      var v992 = b$$inline_395 < a$$inline_394.length;
      for(;v992;) {
        a$$inline_394[b$$inline_395]();
        b$$inline_395 = b$$inline_395 + 1;
        v992 = b$$inline_395 < a$$inline_394.length
      }
      a$$inline_394.length = 0;
      return
    }
    JAM.call(a$$518.push, a$$518, [b$$395]);
    if(c$$265) {
      window.setTimeout(v29, c$$265)
    }
    return
  }
  function Mh(a$$515) {
    var v993;
    if(a$$515.google_sensors) {
      a$$515 = a$$515.google_sensors;
      v993 = new $$$1(a$$515)
    }else {
      v993 = null
    }
    return v993
  }
  function $$$1(a$$514) {
    this.j = a$$514;
    return
  }
  function zh(a$$511, b$$391) {
    ze = ze | 2;
    var v994 = b$$391 % a$$511.length;
    introspect(JAM.policy.p4) {
      return a$$511[v994]
    }
  }
  function Bh(a$$510) {
    function v32(b$$390, c$$262) {
      JAM.set(a$$510, c$$262, null, JAM.policy.p2);
      return
    }
    function v31(b$$389, c$$261) {
      JAM.set(a$$510, c$$261, null, JAM.policy.p2);
      return
    }
    function v30(b$$388, c$$260) {
      JAM.set(a$$510, c$$260, null, JAM.policy.p2);
      return
    }
    x$$51(vh, v30);
    x$$51(wh, v31);
    x$$51(xh, v32);
    a$$510.google_container_id = null;
    a$$510.google_enable_async = null;
    a$$510.google_eids = null;
    a$$510.google_page_location = null;
    a$$510.google_referrer_url = null;
    a$$510.google_show_ads_impl = null;
    a$$510.google_ad_region = null;
    a$$510.google_gl = null;
    a$$510.google_iframe_name = null;
    a$$510.google_loader_used = null;
    a$$510.google_loader_features_used = null;
    return
  }
  function qh(a$$503, b$$382, c$$254, d$$155) {
    var v3729 = a$$503;
    if(v3729) {
      var v4371 = b$$382;
      if(v4371) {
        v4371 = c$$254 && d$$155
      }
      v3729 = v4371
    }
    if(!v3729) {
      return null
    }
    var v996 = d$$155.document;
    b$$382 = JAM.call(JAM.get(v996, "getElementById", JAM.policy.p1), v996, [b$$382]);
    if(!b$$382) {
      return null
    }
    var v2652 = a$$503.google_reactive_ad_format;
    introspect(JAM.policy.p4) {
      var v998 = Ug[v2652]
    }
    if(!v998) {
      v998 = null
    }
    var e$$91 = v998;
    switch(e$$91) {
      case 1:
        var JSCompiler_inline_result$$29;
        var a$$inline_380 = a$$503;
        var b$$inline_381 = b$$382;
        var c$$inline_382 = c$$254;
        var d$$inline_383 = d$$155;
        JSCompiler_inline_label_Ig_643: {
          switch(a$$inline_380.google_reactive_ad_format) {
            case 1:
              a$$inline_380 = "bottom";
              break JSCompiler_inline_label_Ig_643
          }
          a$$inline_380 = null
        }
        b$$inline_381 = new X$$1(b$$inline_381, c$$inline_382, d$$inline_383, a$$inline_380);
        JSCompiler_inline_result$$29 = new jh(d$$inline_383, b$$inline_381);
        return JSCompiler_inline_result$$29;
      case 2:
        var JSCompiler_inline_result$$31;
        var a$$inline_385 = a$$503;
        var c$$inline_387 = c$$254;
        var d$$inline_388 = d$$155;
        a$$inline_385 = new Y$$1(b$$382, c$$inline_387, d$$inline_388);
        JSCompiler_inline_result$$31 = new Z$$1(d$$inline_388, c$$inline_387, a$$inline_385);
        return JSCompiler_inline_result$$31
    }
    return null
  }
  function Z$$1(a$$494, b$$378, c$$252) {
    ih.call(this, a$$494);
    this.s = b$$378;
    this.Zb = c$$252;
    this.G = {};
    this.Z = this.H = !1;
    return
  }
  function kh(a$$483) {
    var b$$370 = Re(a$$483);
    var v1000 = b$$370[5];
    if(!v1000) {
      v1000 = ""
    }
    a$$483 = v1000;
    b$$370 = b$$370[6];
    var v2655;
    if(b$$370) {
      v2655 = "?" + b$$370
    }else {
      v2655 = ""
    }
    return a$$483 + v2655
  }
  function Y$$1(a$$482, b$$369, c$$247) {
    hh.call(this, a$$482, b$$369, c$$247);
    this.Wc = c$$247.location.hostname;
    var v5184 = kh(c$$247.location.href);
    this.Xc = v5184;
    this.ea = [];
    this.ob = this.kd = !1;
    JAM.call(this.N, this, [!1]);
    this.Cc();
    return
  }
  function jh(a$$480, b$$368) {
    ih.call(this, a$$480);
    this.Kb = b$$368;
    this.H = this.Cb = !1;
    return
  }
  function ih(a$$477) {
    this.i = a$$477;
    this.cc = {};
    this.Wb();
    return
  }
  function X$$1(a$$465, b$$360, c$$242, d$$152) {
    hh.call(this, a$$465, b$$360, c$$242);
    this.I = this.Ib = this.Da = !1;
    this.w = null;
    var v5185 = Qd(c$$242.document.body, "padding");
    this.Vc = v5185;
    this.B = 0;
    this.Ra = !1;
    this.ga = !0;
    var JSCompiler_inline_result$$55;
    JSCompiler_inline_label_Kd_376: {
      var a$$inline_369 = Ld;
      var b$$inline_370 = this.s;
      if("none" != R$$1(b$$inline_370, "display")) {
        JSCompiler_inline_result$$55 = JAM.call(a$$inline_369, null, [b$$inline_370]);
        break JSCompiler_inline_label_Kd_376
      }
      var c$$inline_371 = b$$inline_370.style;
      var d$$inline_372 = c$$inline_371.display;
      var e$$inline_373 = c$$inline_371.visibility;
      var f$$inline_374 = c$$inline_371.position;
      c$$inline_371.visibility = "hidden";
      c$$inline_371.position = "absolute";
      c$$inline_371.display = "inline";
      var g$$inline_375 = JAM.call(a$$inline_369, null, [b$$inline_370]);
      c$$inline_371.display = d$$inline_372;
      c$$inline_371.position = f$$inline_374;
      c$$inline_371.visibility = e$$inline_373;
      JSCompiler_inline_result$$55 = g$$inline_375
    }
    this.gd = JSCompiler_inline_result$$55;
    this.ua = d$$152;
    this.hide();
    var v5186 = lb$$1(this.i, "orientationchange", this, this.ec);
    this.Zc = v5186;
    var v5187 = lb$$1(this.i, "resize", this, this.tc);
    this.$c = v5187;
    var v5188 = lb$$1(this.i, "scroll", this, this.vc);
    this.ad = v5188;
    var v5189 = lb$$1(this.i, "touchcancel", this, this.Kc);
    this.bd = v5189;
    var v5190 = lb$$1(this.i, "touchend", this, this.Lc);
    this.cd = v5190;
    var v5191 = lb$$1(this.i, "touchmove", this, this.Mc);
    this.dd = v5191;
    var v5192 = lb$$1(this.i, "touchstart", this, this.Nc);
    this.ed = v5192;
    return
  }
  function hh(a$$462, b$$359, c$$241) {
    this.sb = a$$462;
    this.s = b$$359;
    this.i = c$$241;
    return
  }
  function gh(a$$461, b$$358, c$$240) {
    this.W = a$$461;
    var v1021;
    if(c$$240) {
      v1021 = c$$240
    }else {
      v1021 = null
    }
    this.onEndCallback = v1021;
    W$$1.call(this, [Number(Md(a$$461))], [0], b$$358);
    return
  }
  function fh(a$$460, b$$357) {
    this.W = a$$460;
    W$$1.call(this, [Number(Md(a$$460))], [1], b$$357);
    return
  }
  function W$$1(a$$457, b$$355, c$$239) {
    this.ib = a$$457;
    this.Tc = b$$355;
    this.jd = c$$239;
    this.Ic = !1;
    this.current = null;
    return
  }
  function dh(a$$454) {
    this.lc = a$$454;
    var v5193 = ye("rach::hdlr", JAM.call(r$$2, null, [this.ub, this]));
    this.K = v5193;
    y$$32(a$$454, "message", this.K);
    return
  }
  function $g(a$$453, b$$352, c$$236) {
    var d$$150 = rg(b$$352);
    var v2662 = a$$453.google_reactive_ad_format;
    introspect(JAM.policy.p4) {
      var v1028 = Ug[v2662]
    }
    if(!v1028) {
      v1028 = null
    }
    var e$$88 = v1028;
    var JSCompiler_inline_result$$60;
    JSCompiler_inline_label_Wg_368: {
      var a$$inline_365 = b$$352;
      var b$$inline_366 = a$$453;
      switch(c$$236) {
        case 1:
          JSCompiler_inline_result$$60 = Hg(a$$inline_365);
          break JSCompiler_inline_label_Wg_368;
        case 2:
          JSCompiler_inline_result$$60 = Rg(a$$inline_365, b$$inline_366);
          break JSCompiler_inline_label_Wg_368
      }
      JSCompiler_inline_result$$60 = !1
    }
    var v1029 = JSCompiler_inline_result$$60;
    if(v1029) {
      var v2664 = e$$88 != c$$236;
      if(v2664) {
        var v4372 = d$$150.wasReactiveAdCreated;
        introspect(JAM.policy.p4) {
          var v3732 = v4372[c$$236]
        }
        v2664 = !v3732
      }
      v1029 = v2664
    }
    return v1029
  }
  function ch(a$$452, b$$351) {
    function v33(c$$235) {
      var v1030 = $g(a$$452, b$$351, c$$235);
      if(v1030) {
        e$$87 = !0
      }
      return
    }
    var c$$234 = rg(b$$351);
    var d$$149 = !0;
    var v2665 = c$$234.wasReactiveAdConfigHandlerRegistered;
    if(!v2665) {
      v2665 = !d$$149
    }
    if(v2665) {
      return!1
    }
    var e$$87 = !1;
    x$$51(kg, v33);
    return c$$234.wasReactiveAdConfigHandlerRegistered = e$$87
  }
  function ah(a$$450, b$$349) {
    function v34(d$$147) {
      var v1032 = $g(a$$450, b$$349, d$$147);
      if(v1032) {
        c$$232 = c$$232 | d$$147
      }
      return
    }
    var c$$232 = 0;
    x$$51(kg, v34);
    var v1033;
    if(c$$232) {
      v1033 = "" + c$$232
    }else {
      v1033 = null
    }
    return v1033
  }
  function Zg(a$$449) {
    a$$449 = a$$449.google_reactive_ad_format;
    var v1034;
    if(Ec(lg, a$$449)) {
      v1034 = "" + a$$449
    }else {
      v1034 = null
    }
    return v1034
  }
  function Yg(a$$448) {
    switch(a$$448) {
      case 1:
        return new Mg;
      case 2:
        return new Qg
    }
    return null
  }
  function Rg(a$$443, b$$345) {
    var c$$228 = !1;
    try {
      var v1035 = a$$443.top == a$$443;
      if(v1035) {
        var v2668 = !!a$$443.postMessage;
        if(v2668) {
          var v3735 = og(a$$443);
          if(v3735) {
            var v4374 = ng(a$$443);
            if(v4374) {
              var v4758 = !Bc(b$$345);
              if(v4758) {
                v4758 = !Ha$$1
              }
              v4374 = v4758
            }
            v3735 = v4374
          }
          v2668 = v3735
        }
        v1035 = v2668
      }
      c$$228 = v1035
    }catch(d$$145) {
    }
    return c$$228
  }
  function Qg() {
    this.l = null;
    return
  }
  function Og() {
    return
  }
  function Mg() {
    this.l = null;
    return
  }
  function Kg() {
    return
  }
  function Hg(a$$429) {
    var b$$336 = !1;
    try {
      var v1036 = a$$429.top == a$$429;
      if(v1036) {
        var v4375 = !/(Android|iPhone OS|Windows Phone)/.test(a$$429.navigator.userAgent);
        if(!v4375) {
          var v4760 = /Android 2/.test(a$$429.navigator.userAgent);
          if(!v4760) {
            var v4979 = /iPhone OS [34]_/.test(a$$429.navigator.userAgent);
            if(!v4979) {
              v4979 = /Windows Phone (?:OS )?[67]/.test(a$$429.navigator.userAgent)
            }
            v4760 = v4979
          }
          v4375 = v4760
        }
        var v2670 = !v4375;
        if(v2670) {
          var v3737 = !!a$$429.postMessage;
          if(v3737) {
            var v4377 = a$$429.innerHeight >= a$$429.innerWidth;
            if(v4377) {
              var v4765 = ng(a$$429);
              if(v4765) {
                v4765 = og(a$$429)
              }
              v4377 = v4765
            }
            v3737 = v4377
          }
          v2670 = v3737
        }
        v1036 = v2670
      }
      b$$336 = v1036
    }catch(c$$223) {
    }
    return b$$336
  }
  function Fg(a$$428, b$$335, c$$222) {
    var d$$142 = a$$428.attributes;
    var e$$84 = d$$142.length;
    var f$$51 = 0;
    var v1040 = f$$51 < e$$84;
    for(;v1040;) {
      introspect(JAM.policy.p4) {
        var g$$30 = d$$142[f$$51]
      }
      if(/data-/.test(g$$30.nodeName)) {
        var h$$22 = g$$30.nodeName.replace("data", "google").replace(/-/g, "_");
        var v1038 = b$$335.hasOwnProperty(h$$22);
        if(!v1038) {
          JAM.set(b$$335, h$$22, g$$30.nodeValue, JAM.policy.p2)
        }
      }
      f$$51 = f$$51 + 1;
      v1040 = f$$51 < e$$84
    }
    var v2674 = "auto" == b$$335.google_ad_format;
    if(!v2674) {
      v2674 = /^((^|,)(horizontal|vertical|rectangle))+$/.test(b$$335.google_ad_format)
    }
    if(v2674) {
      var JSCompiler_inline_result$$83;
      var a$$inline_336 = a$$428;
      var b$$inline_337 = b$$335;
      var c$$inline_338 = c$$222;
      var d$$inline_339 = a$$inline_336.offsetWidth;
      var e$$inline_340 = b$$inline_337.google_ad_format;
      c$$inline_338 = yg(d$$inline_339, e$$inline_340, c$$inline_338);
      if(!c$$inline_338) {
        throw Error("Cannot find a responsive size for a container of width=" + d$$inline_339 + "px and data-ad-format=" + e$$inline_340);
      }
      b$$inline_337.google_ad_height = c$$inline_338.height;
      var v1043 = b$$inline_337;
      var v2676;
      var v4378 = 300 < d$$inline_339;
      if(v4378) {
        v4378 = 300 < c$$inline_338.height
      }
      if(v4378) {
        v2676 = c$$inline_338.width
      }else {
        var v3742;
        if(1200 < d$$inline_339) {
          v3742 = 1200
        }else {
          v3742 = JAM.call(Math.round, Math, [d$$inline_339])
        }
        v2676 = v3742
      }
      v1043.google_ad_width = v2676;
      a$$inline_336.style.height = b$$inline_337.google_ad_height + "px";
      delete b$$inline_337.google_ad_format;
      JSCompiler_inline_result$$83 = void 0;
      JSCompiler_inline_result$$83;
      b$$335.google_loader_features_used = 128
    }else {
      var v2678 = !sg.test(a$$428.style.width);
      if(!v2678) {
        v2678 = !sg.test(a$$428.style.height)
      }
      if(v2678) {
        var a$$inline_342 = a$$428;
        var b$$inline_343 = b$$335;
        var c$$inline_344 = c$$222;
        var v1045;
        if(c$$inline_344.getComputedStyle) {
          v1045 = c$$inline_344.getComputedStyle(a$$inline_342, null)
        }else {
          v1045 = a$$inline_342.currentStyle
        }
        c$$inline_344 = v1045;
        a$$inline_342.style.width = c$$inline_344.width;
        a$$inline_342.style.height = c$$inline_344.height;
        wg(c$$inline_344, b$$inline_343)
      }else {
        wg(a$$428.style, b$$335)
      }
    }
    return
  }
  function Dg(a$$427, b$$334, c$$221) {
    function v35() {
      Kf(c$$221, b$$334, a$$427);
      return
    }
    var v1051 = a$$427.style;
    if(v1051) {
      var v2680 = "none" == a$$427.style.display;
      if(v2680) {
        b$$334.google_dn = 1
      }
    }
    wb(c$$221);
    Fg(a$$427, b$$334, c$$221);
    var d$$141 = Bg;
    var e$$83 = 0;
    var v1053 = e$$83 < d$$141.length;
    for(;v1053;) {
      introspect(JAM.policy.p4) {
        var v1052 = d$$141[e$$83]
      }
      introspect(JAM.policy.p4) {
        var v3748 = d$$141[e$$83]
      }
      introspect(JAM.policy.p4) {
        var v2682 = b$$334[v3748]
      }
      if(!v2682) {
        introspect(JAM.policy.p4) {
          var v3749 = d$$141[e$$83]
        }
        introspect(JAM.policy.p4) {
          v2682 = c$$221[v3749]
        }
      }
      JAM.set(b$$334, v1052, v2682, JAM.policy.p2);
      e$$83 = e$$83 + 1;
      v1053 = e$$83 < d$$141.length
    }
    b$$334.google_loader_used = "aa";
    var v2684 = d$$141 = b$$334.google_ad_output;
    if(v2684) {
      v2684 = "html" != d$$141
    }
    if(v2684) {
      throw Error("No support for google_ad_output=" + d$$141);
    }
    te("aa::main", ve, v35);
    return
  }
  function Cg(a$$426) {
    JAM.call(a$$426.setAttribute, a$$426, ["data-adsbygoogle-status", "done"]);
    return
  }
  function Ag(a$$424) {
    a$$424 = a$$424.document;
    var v1056 = a$$424.documentElement.clientWidth;
    if(!v1056) {
      v1056 = a$$424.body.clientWidth
    }
    return v1056
  }
  function yg(a$$422, b$$331, c$$219) {
    function v36(a$$423, b$$332) {
      var v1057 = a$$423.width - b$$332.width;
      if(!v1057) {
        v1057 = a$$423.height - b$$332.height
      }
      return v1057
    }
    var d$$140 = tg;
    d$$140.sort(v36);
    var v1058 = "auto" == b$$331;
    if(v1058) {
      b$$331 = a$$422 / Ag(c$$219);
      var v3753;
      if(0.25 > b$$331) {
        v3753 = "vertical"
      }else {
        v3753 = "horizontal,rectangle"
      }
      b$$331 = v3753
    }
    c$$219 = d$$140.length;
    var v1060 = c$$219;
    c$$219 = c$$219 - 1;
    for(;v1060;) {
      introspect(JAM.policy.p4) {
        var v4384 = d$$140[c$$219]
      }
      var v2693 = v4384.width <= a$$422;
      if(v2693) {
        introspect(JAM.policy.p4) {
          var v4769 = d$$140[c$$219]
        }
        v2693 = -1 != b$$331.indexOf(v4769.format)
      }
      if(v2693) {
        introspect(JAM.policy.p4) {
          return d$$140[c$$219]
        }
      }
      v1060 = c$$219;
      c$$219 = c$$219 - 1
    }
    return null
  }
  function wg(a$$420, b$$329) {
    var c$$217 = ["width", "height"];
    var d$$138 = 0;
    var v1064 = d$$138 < c$$217.length;
    for(;v1064;) {
      introspect(JAM.policy.p4) {
        var v1061 = c$$217[d$$138]
      }
      var e$$81 = "google_ad_" + v1061;
      if(!b$$329.hasOwnProperty(e$$81)) {
        introspect(JAM.policy.p4) {
          var v2696 = c$$217[d$$138]
        }
        introspect(JAM.policy.p4) {
          var v1062 = a$$420[v2696]
        }
        var f$$50 = sg.exec(v1062);
        if(f$$50) {
          var v2697 = b$$329;
          var v2698 = e$$81;
          var v5194 = JAM.call(Math.round, Math, [f$$50[1]]);
          JAM.set(v2697, v2698, v5194, JAM.policy.p2)
        }
      }
      d$$138 = d$$138 + 1;
      v1064 = d$$138 < c$$217.length
    }
    return
  }
  function rg(a$$415) {
    var v1065 = a$$415.google_reactive_ads_global_state;
    if(!v1065) {
      var v2700 = a$$415;
      var v5195 = new pg;
      v2700.google_reactive_ads_global_state = v5195
    }
    return a$$415.google_reactive_ads_global_state
  }
  function pg() {
    this.wasReactiveAdConfigReceived = {};
    this.wasReactiveAdCreated = {};
    this.wasReactiveAdConfigHandlerRegistered = !1;
    return
  }
  function og(a$$414) {
    var b$$327 = a$$414.document.documentElement.clientWidth;
    a$$414 = a$$414.innerWidth;
    return 0.05 > Math.abs(b$$327 / a$$414 - 1)
  }
  function ng(a$$413) {
    a$$413 = a$$413.document.documentElement.clientWidth;
    var v1069 = 320 <= a$$413;
    if(v1069) {
      v1069 = 420 >= a$$413
    }
    return v1069
  }
  function hg(a$$405) {
    this.qa = a$$405;
    return
  }
  function gg(a$$404) {
    a$$404 = String(a$$404);
    if(fg(a$$404)) {
      try {
        var v1070 = "(" + a$$404 + ")";
        if(JAM.isEval(eval)) {
          return eval("introspect(JAM.policy.pFull) { " + v1070 + " }")
        }else {
          return JAM.call(eval, null, [v1070])
        }
      }catch(b$$319) {
      }
    }
    throw Error("Invalid JSON string: " + a$$404);
  }
  function fg(a$$403) {
    if(/^\s*$/.test(a$$403)) {
      return!1
    }
    var b$$318 = /\\["\\\/bfnrtu]/g;
    var c$$213 = /"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var d$$135 = /(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g;
    var e$$77 = /^[\],:{}\s\u2028\u2029]*$/;
    return e$$77.test(a$$403.replace(b$$318, "@").replace(c$$213, "]").replace(d$$135, ""))
  }
  function eg(a$$401, b$$315) {
    try {
      var v1075 = void 0;
      var v2707 = a$$401.frames;
      introspect(JAM.policy.p4) {
        var v1076 = v2707[b$$315]
      }
      return v1075 != v1076
    }catch(c$$211) {
      return!1
    }
    return
  }
  function Xf(a$$388) {
    JAM.set(Wf, a$$388, !0, JAM.policy.p2);
    return a$$388
  }
  function V$$1(a$$387, b$$306, c$$204, d$$130) {
    this.Q = a$$387;
    this.Fb = b$$306;
    this.Za = c$$204;
    this.hc = !1;
    this.F = "";
    this.za = this.U = null;
    this.Sb = this.Fc = this.Pa = this.Tb = this.jc = this.ma = this.va = !1;
    var v5196 = ye("zrt_mh::handler", JAM.call(r$$2, null, [V$$1.prototype.Qa, this]), d$$130);
    this.K = v5196;
    y$$32(a$$387, "message", this.K);
    return
  }
  function Jf(a$$378, b$$299, c$$197, d$$125, e$$75) {
    var f$$48 = "script";
    var g$$29 = b$$299.google_ad_width;
    var h$$21 = b$$299.google_ad_height;
    var k$$9 = {};
    Ff(k$$9, g$$29, h$$21, !0);
    JAM.set(k$$9, "onload", '"' + Ne + '"');
    e$$75 = JAM.call(e$$75, null, [a$$378, k$$9, b$$299]);
    JSCompiler_inline_label_Lf_308: {
      var v2709 = window.google_override_format;
      if(!v2709) {
        var v4770 = window.google_ad_width + "x" + window.google_ad_height;
        introspect(JAM.policy.p4) {
          var v4386 = wf[v4770]
        }
        var v3760 = !v4386;
        if(v3760) {
          v3760 = "aa" == window.google_loader_used
        }
        v2709 = v3760
      }
      if(v2709) {
        var a$$inline_307 = Uf;
        k$$9 = vb([a$$inline_307.CONTROL, a$$inline_307.EXPERIMENT], Ba$$1);
        break JSCompiler_inline_label_Lf_308
      }
      k$$9 = null
    }
    var a$$inline_309 = c$$197;
    var b$$inline_310 = d$$125;
    var c$$inline_311 = b$$299;
    var a$$inline_624 = c$$inline_311;
    var c$$inline_626 = a$$inline_624.google_ad_output;
    var d$$inline_627 = a$$inline_624.google_ad_format;
    if(!d$$inline_627) {
      var v3762 = "html" != c$$inline_626;
      if(v3762) {
        v3762 = null != c$$inline_626
      }
      var v2712 = v3762;
      if(!v2712) {
        d$$inline_627 = a$$inline_624.google_ad_width + "x" + a$$inline_624.google_ad_height;
        var v4390 = "e" == k$$9;
        if(v4390) {
          d$$inline_627 = d$$inline_627 + "_as"
        }
      }
    }
    var v1083 = !a$$inline_624.google_ad_slot;
    if(!v1083) {
      var v2715 = a$$inline_624.google_override_format;
      if(!v2715) {
        var v4772 = a$$inline_624.google_ad_width + "x" + a$$inline_624.google_ad_height;
        introspect(JAM.policy.p4) {
          var v4391 = wf[v4772]
        }
        var v3764 = !v4391;
        if(v3764) {
          v3764 = "aa" == a$$inline_624.google_loader_used
        }
        v2715 = v3764
      }
      v1083 = v2715
    }
    c$$inline_626 = v1083;
    var v1084;
    if(d$$inline_627 && c$$inline_626) {
      v1084 = d$$inline_627.toLowerCase()
    }else {
      v1084 = ""
    }
    d$$inline_627 = v1084;
    a$$inline_624.google_ad_format = d$$inline_627;
    var JSCompiler_temp_const$$562 = c$$inline_311;
    var JSCompiler_inline_result$$563;
    var a$$inline_629 = a$$inline_309;
    var v1085;
    if(b$$inline_310) {
      v1085 = a$$inline_629.parentElement
    }else {
      v1085 = a$$inline_629
    }
    a$$inline_629 = v1085;
    JSCompiler_inline_result$$563 = Fb(a$$inline_629, c$$inline_311, !0);
    JSCompiler_temp_const$$562.google_ad_unit_key = JSCompiler_inline_result$$563;
    var v1087 = window;
    var v2718 = window.google_adk2_experiment;
    if(!v2718) {
      var v3766 = vb(["C", "E"], xa$$1);
      if(!v3766) {
        v3766 = "N"
      }
      v2718 = v3766
    }
    b$$inline_310 = v1087.google_adk2_experiment = v2718;
    var v1088;
    if("E" == b$$inline_310) {
      var v2719 = c$$inline_311;
      var v5197 = Fb(a$$inline_309, c$$inline_311);
      v1088 = v2719.google_ad_unit_key_2 = v5197
    }else {
      var v2720 = "C" == b$$inline_310;
      if(v2720) {
        v2720 = c$$inline_311.google_ad_unit_key_2 = "ctrl"
      }
      v1088 = v2720
    }
    v1088;
    c$$197 = Ee(b$$299);
    var a$$inline_314 = a$$378;
    var b$$inline_315 = Ke(a$$inline_314);
    var c$$inline_316 = 3 == Xe(a$$inline_314.document);
    var d$$inline_317 = Ge;
    if(b$$inline_315) {
      var v2723 = !c$$inline_316;
      if(v2723) {
        var v3768 = void 0 === a$$inline_314.google_ad_handling_mode;
        if(v3768) {
          var v4397 = a$$inline_314;
          var v4773 = vb([d$$inline_317.CONTROL_NO_FRAME, d$$inline_317.ALWAYS_ZRT, d$$inline_317.SERIAL], sa$$1);
          if(!v4773) {
            v4773 = vb([d$$inline_317.IFRAME_SIGNALING], ta$$1)
          }
          v4397.google_ad_handling_mode = v4773
        }
      }
    }
    var v1090;
    if(a$$inline_314.google_ad_handling_mode) {
      v1090 = String(a$$inline_314.google_ad_handling_mode)
    }else {
      v1090 = null
    }
    d$$125 = v1090;
    JSCompiler_inline_label_If_328: {
      var a$$inline_319 = a$$378;
      var b$$inline_320 = d$$125;
      var c$$inline_321 = b$$299;
      var d$$inline_322 = g$$29;
      var e$$inline_323 = h$$21;
      var f$$inline_324 = Ge;
      var v2726 = Ke(a$$inline_319);
      if(v2726) {
        var v3769 = 1 == a$$inline_319.google_unique_id;
        if(v3769) {
          var v4399 = b$$inline_320 != f$$inline_324.CONTROL_NO_FRAME;
          if(v4399) {
            v4399 = b$$inline_320 != f$$inline_324.SERIAL
          }
          v3769 = v4399
        }
        v2726 = v3769
      }
      if(v2726) {
        var g$$inline_325 = "zrt_ads_frame" + a$$inline_319.google_unique_id;
        var h$$inline_326;
        var a$$inline_633 = a$$inline_319;
        var d$$inline_636 = c$$inline_321.google_page_url;
        if(!d$$inline_636) {
          var v2727;
          if(Ze(a$$inline_633, a$$inline_633.document, d$$inline_322, e$$inline_323)) {
            v2727 = a$$inline_633.document.referrer
          }else {
            v2727 = a$$inline_633.document.URL
          }
          d$$inline_636 = v2727
        }
        h$$inline_326 = encodeURIComponent(d$$inline_636);
        var k$$inline_327 = null;
        if(Le(b$$inline_320)) {
          k$$inline_327 = He;
          switch(b$$inline_320) {
            case f$$inline_324.IFRAME_SIGNALING:
              b$$inline_320 = k$$inline_327.PARALLEL_W_IFRAME_SIGNALING;
              break;
            case f$$inline_324.ALWAYS_ZRT:
              b$$inline_320 = k$$inline_327.PARALLEL_W_ALWAYS_ZRT;
              break;
            default:
              b$$inline_320 = k$$inline_327.PARALLEL
          }
          k$$inline_327 = b$$inline_320 + "-" + (h$$inline_326 + "/" + c$$inline_321.google_ad_unit_key + "/" + a$$inline_319.google_unique_id)
        }
        a$$inline_319 = {};
        Ff(a$$inline_319, d$$inline_322, e$$inline_323, !1);
        a$$inline_319.style = "display:none";
        var a$$inline_638 = k$$inline_327;
        var b$$inline_639 = g$$inline_325;
        var c$$inline_640 = a$$inline_319;
        c$$inline_640.id = b$$inline_639;
        c$$inline_640.name = b$$inline_639;
        var v1096 = c$$inline_640;
        var v5198 = Df(a$$inline_638);
        v1096.src = v5198;
        b$$299 = Cf(c$$inline_640);
        break JSCompiler_inline_label_If_328
      }
      b$$299 = null
    }
    g$$29 = vf;
    h$$21 = (new Date).getTime();
    var l$$11 = a$$378.google_top_experiment;
    var z$$5 = a$$378.google_async_for_oa_experiment;
    var C$$3 = a$$378.google_always_use_delayed_impressions_experiment;
    var v2731 = a$$378.google_unique_id;
    var v3774;
    if(l$$11) {
      v3774 = 'google_top_experiment="' + l$$11 + '";'
    }else {
      v3774 = ""
    }
    var v2732 = v3774;
    var v3775;
    if(d$$125) {
      v3775 = 'google_ad_handling_mode="' + d$$125 + '";'
    }else {
      v3775 = ""
    }
    var v2733 = v3775;
    var v3776;
    if(z$$5) {
      v3776 = 'google_async_for_oa_experiment="' + z$$5 + '";'
    }else {
      v3776 = ""
    }
    var v2734 = v3776;
    var v3777;
    if(C$$3) {
      v3777 = 'google_always_use_delayed_impressions_experiment="' + C$$3 + '";'
    }else {
      v3777 = ""
    }
    var v2735 = v3777;
    var v3778;
    if(k$$9) {
      v3778 = 'google_append_as_for_format_override="' + k$$9 + '";'
    }else {
      v3778 = ""
    }
    var v2736 = v3778;
    var v3779;
    if(h$$21 > g$$29) {
      v3779 = h$$21 - g$$29
    }else {
      v3779 = 1
    }
    k$$9 = ["<!doctype html><html><body>", b$$299, "<", f$$48, ">", c$$197, "google_show_ads_impl=true;google_unique_id=", v2731, ';google_async_iframe_id="', e$$75, '";google_start_time=', g$$29, ";", v2732, v2733, v2734, v2735, v2736, "google_bpp=", v3779, ";google_async_rrc=0;</", f$$48, ">", xf(), "</body></html>"].join("");
    var v1100;
    var v3780 = a$$378.document;
    if(JAM.call(JAM.get(v3780, "getElementById", JAM.policy.p1), v3780, [e$$75])) {
      v1100 = rf
    }else {
      v1100 = sf
    }
    c$$197 = v1100;
    JAM.call(c$$197, null, [Af(a$$378, e$$75, k$$9, !0)]);
    return
  }
  function Kf(a$$376, b$$297, c$$196) {
    function v37(a$$377, b$$298, f$$47) {
      var JSCompiler_inline_result$$73;
      var a$$inline_302 = a$$377;
      var b$$inline_303 = b$$298;
      var c$$inline_304 = f$$47;
      var d$$inline_305 = c$$196;
      a$$inline_302 = a$$inline_302.document;
      var a$$inline_613 = a$$inline_302;
      var b$$inline_614 = b$$inline_303;
      var c$$inline_615 = b$$inline_614.id;
      var d$$inline_616 = 0;
      var v2741 = !c$$inline_615;
      if(!v2741) {
        v2741 = JAM.call(JAM.get(a$$inline_613, "getElementById", JAM.policy.p1), a$$inline_613, [c$$inline_615])
      }
      var v1103 = v2741;
      for(;v1103;) {
        var v1102 = d$$inline_616;
        d$$inline_616 = d$$inline_616 + 1;
        c$$inline_615 = "aswift_" + v1102;
        var v2742 = !c$$inline_615;
        if(!v2742) {
          v2742 = JAM.call(JAM.get(a$$inline_613, "getElementById", JAM.policy.p1), a$$inline_613, [c$$inline_615])
        }
        v1103 = v2742
      }
      b$$inline_614.id = c$$inline_615;
      b$$inline_614.name = c$$inline_615;
      a$$inline_302 = Number(c$$inline_304.google_ad_width);
      c$$inline_304 = Number(c$$inline_304.google_ad_height);
      var JSCompiler_temp_const$$568 = d$$inline_305;
      var JSCompiler_inline_result$$569;
      var a$$inline_618 = b$$inline_303;
      var b$$inline_619 = a$$inline_302;
      var c$$inline_620 = c$$inline_304;
      var d$$inline_621 = ["<iframe"];
      var e$$inline_622;
      for(e$$inline_622 in a$$inline_618) {
        var v1106 = a$$inline_618.hasOwnProperty(e$$inline_622);
        if(v1106) {
          var v3783 = e$$inline_622 + "=";
          introspect(JAM.policy.p4) {
            var v3784 = a$$inline_618[e$$inline_622]
          }
          ib$$1(d$$inline_621, v3783 + v3784)
        }
      }
      JAM.call(d$$inline_621.push, d$$inline_621, ['style="left:0;position:absolute;top:0;"']);
      JAM.call(d$$inline_621.push, d$$inline_621, ["></iframe>"]);
      d$$inline_621 = d$$inline_621.join(" ");
      var JSCompiler_inline_result$$751;
      var a$$inline_753 = a$$inline_618.id + "_anchor";
      var b$$inline_754 = b$$inline_619;
      b$$inline_754 = "border:none;height:" + c$$inline_620 + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + b$$inline_754 + "px;background-color:transparent";
      a$$inline_753 = ['<ins style="display:inline-table;', b$$inline_754, '">', '<ins id="', a$$inline_753, '" style="display:block;', b$$inline_754, '">', d$$inline_621, "</ins></ins>"];
      JSCompiler_inline_result$$751 = a$$inline_753.join("");
      JSCompiler_inline_result$$569 = a$$inline_618 = JSCompiler_inline_result$$751;
      JAM.set(JSCompiler_temp_const$$568, "innerHTML", JSCompiler_inline_result$$569);
      JSCompiler_inline_result$$73 = b$$inline_303.id;
      return JSCompiler_inline_result$$73
    }
    Jf(a$$376, b$$297, c$$196, !1, v37);
    return
  }
  function Ff(a$$372, b$$293, c$$192, d$$121, e$$73) {
    var v1110;
    if(d$$121) {
      v1110 = '"'
    }else {
      v1110 = ""
    }
    d$$121 = v1110;
    var f$$45 = d$$121 + "0" + d$$121;
    a$$372.width = d$$121 + b$$293 + d$$121;
    a$$372.height = d$$121 + c$$192 + d$$121;
    a$$372.frameborder = f$$45;
    if(e$$73) {
      a$$372.src = d$$121 + e$$73 + d$$121
    }
    a$$372.marginwidth = f$$45;
    a$$372.marginheight = f$$45;
    a$$372.vspace = f$$45;
    a$$372.hspace = f$$45;
    a$$372.allowtransparency = d$$121 + "true" + d$$121;
    a$$372.scrolling = d$$121 + "no" + d$$121;
    return
  }
  function Df(a$$370) {
    var v1116 = Ja$$1();
    var v3786 = Da$$1();
    var v4409;
    if(a$$370) {
      v4409 = "#" + encodeURIComponent(a$$370)
    }else {
      v4409 = ""
    }
    return L$$1(v1116, ["/pagead/html/", v3786, "/r20130906/zrt_lookup.html", v4409].join(""))
  }
  function Cf(a$$368) {
    function v38(a$$369, d$$120) {
      var v1118 = null != a$$369;
      if(v1118) {
        JAM.call(b$$291.push, b$$291, [" " + d$$120 + '="' + a$$369 + '"'])
      }
      return
    }
    var b$$291 = ["<iframe"];
    x$$51(a$$368, v38);
    JAM.call(b$$291.push, b$$291, ["></iframe>"]);
    return b$$291.join("")
  }
  function Bf(a$$366, b$$289, c$$190) {
    function v39(a$$367, b$$290) {
      var v1119 = null != a$$367;
      if(v1119) {
        JAM.call(d$$119.setAttribute, d$$119, [b$$290, a$$367])
      }
      return
    }
    var d$$119 = JAM.call(a$$366.createElement, a$$366, ["iframe"]);
    x$$51(b$$289, v39);
    if(c$$190) {
      d$$119.style.display = c$$190
    }
    return d$$119
  }
  function Af(a$$365, b$$288, c$$189, d$$118) {
    function v40() {
      var e$$72 = !1;
      if(d$$118) {
        var v1120 = qf();
        JAM.call(v1120.al, v1120, [3E4])
      }
      try {
        var JSCompiler_inline_result$$64;
        var a$$inline_297 = a$$365;
        var b$$inline_298 = b$$288;
        var c$$inline_299 = c$$189;
        var v1121 = a$$inline_297.document;
        var d$$inline_300 = JAM.call(JAM.get(v1121, "getElementById", JAM.policy.p1), v1121, [b$$inline_298]);
        d$$inline_300 = d$$inline_300.contentWindow;
        if(Kb(d$$inline_300)) {
          var a$$inline_605 = a$$inline_297;
          var b$$inline_606 = b$$inline_298;
          var c$$inline_607 = c$$inline_299;
          var v2749 = a$$inline_605.document;
          a$$inline_605 = JAM.call(JAM.get(v2749, "getElementById", JAM.policy.p1), v2749, [b$$inline_606]).contentWindow;
          b$$inline_606 = a$$inline_605.document;
          var v2750 = b$$inline_606.body;
          if(v2750) {
            v2750 = b$$inline_606.body.firstChild
          }
          var v1123 = v2750;
          if(!v1123) {
            b$$inline_606.open();
            a$$inline_605.google_async_iframe_close = !0;
            JAM.call(b$$inline_606.write, b$$inline_606, [c$$inline_607])
          }
        }else {
          var a$$inline_609 = a$$inline_297;
          var c$$inline_611 = c$$inline_299;
          var v2752 = a$$inline_609.document;
          a$$inline_609 = JAM.call(JAM.get(v2752, "getElementById", JAM.policy.p1), v2752, [b$$inline_298]).contentWindow;
          c$$inline_611 = "javascript:" + ab$$1(c$$inline_611);
          a$$inline_609.location.replace(c$$inline_611)
        }
        JSCompiler_inline_result$$64 = void 0;
        JSCompiler_inline_result$$64;
        e$$72 = !0
      }catch(f$$44) {
        uf()
      }
      if(e$$72) {
        e$$72 = Oe("google_async_rrc", c$$189);
        var v3790 = new Me(a$$365);
        JAM.call(v3790.set, v3790, [b$$288, Af(a$$365, b$$288, e$$72, !1)])
      }
      return
    }
    return v40
  }
  function zf() {
    var v1128 = "object" == typeof window.ExpandableAdSlotFactory;
    if(v1128) {
      v1128 = "function" == typeof window.ExpandableAdSlotFactory.createIframe
    }
    return v1128
  }
  function xf() {
    var a$$363 = "script";
    return["<", a$$363, ' src="', L$$1(La$$1(), ["/pagead/js/", Da$$1(), "/r20130906/show_ads_impl.js"].join(""), ""), '"></', a$$363, ">"].join("")
  }
  function uf() {
    var a$$362 = hc().google_jobrunner;
    var v1131 = pf(a$$362);
    if(v1131) {
      a$$362.rl()
    }
    return
  }
  function sf(a$$360, b$$286) {
    var v1132 = qf();
    JAM.call(v1132.nqa, v1132, [a$$360, b$$286]);
    return
  }
  function rf(a$$359, b$$285) {
    var v1133 = qf();
    JAM.call(v1133.nq, v1133, [a$$359, b$$285]);
    return
  }
  function qf() {
    var v2756 = mf;
    if(v2756) {
      v2756 = of(mf)
    }
    if(v2756) {
      return mf
    }
    var a$$358 = hc();
    var b$$284 = a$$358.google_jobrunner;
    var v1135;
    if(pf(b$$284)) {
      v1135 = mf = b$$284
    }else {
      v1135 = a$$358.google_jobrunner = mf = new U$$1(a$$358)
    }
    return v1135
  }
  function pf(a$$357) {
    var v1136 = gb$$1(a$$357);
    if(v1136) {
      var v2759 = of(a$$357);
      if(v2759) {
        var v3796 = fb$$1(a$$357.nq);
        if(v3796) {
          var v4415 = fb$$1(a$$357.nqa);
          if(v4415) {
            var v4780 = fb$$1(a$$357.al);
            if(v4780) {
              v4780 = fb$$1(a$$357.rl)
            }
            v4415 = v4780
          }
          v3796 = v4415
        }
        v2759 = v3796
      }
      v1136 = v2759
    }
    return v1136
  }
  function of(a$$356) {
    try {
      return a$$356.sz()
    }catch(b$$283) {
      return!1
    }
    return
  }
  function nf(a$$349, b$$278) {
    this.fn = a$$349;
    this.win = b$$278;
    return
  }
  function U$$1(a$$348) {
    this.oa = [];
    this.p = a$$348 || window;
    this.j = 0;
    this.na = null;
    return
  }
  function cf(a$$346) {
    var b$$277 = af();
    if(b$$277) {
      return{url:b$$277, isTopUrl:!0}
    }
    b$$277 = a$$346.location.href;
    if(a$$346 == a$$346.top) {
      return{url:b$$277, isTopUrl:!0}
    }
    var c$$187 = !1;
    var d$$117 = a$$346.document;
    if(d$$117) {
      var v2761 = d$$117.referrer;
      if(v2761) {
        b$$277 = d$$117.referrer;
        var v4416 = a$$346.parent == a$$346.top;
        if(v4416) {
          c$$187 = !0
        }
      }
    }
    var v1141 = a$$346 = a$$346.location.ancestorOrigins;
    if(v1141) {
      var v3797 = a$$346.length - 1;
      introspect(JAM.policy.p4) {
        var v2763 = a$$346 = a$$346[v3797]
      }
      if(v2763) {
        var v3798 = -1 == b$$277.indexOf(a$$346);
        if(v3798) {
          c$$187 = !1;
          b$$277 = a$$346
        }
      }
    }
    return{url:b$$277, isTopUrl:c$$187}
  }
  function af(a$$345) {
    var b$$276 = D$$1().google_top_values;
    if(b$$276) {
      var c$$186 = b$$276[3];
      if(a$$345) {
        c$$186 = b$$276[4]
      }
      if(c$$186) {
        return c$$186 + ""
      }
    }
    return null
  }
  function Ye() {
    var v1143 = H$$1();
    var a$$344 = JAM.call(v1143.m, v1143, [10]);
    var b$$275 = K$$1.PERISCOPE_FOR_TARGETING;
    return a$$344 === b$$275.EXPERIMENT_REFERER_CLEANUP
  }
  function Xe(a$$343) {
    var v1145 = a$$343.webkitVisibilityState;
    if(!v1145) {
      var v2764 = a$$343.mozVisibilityState;
      if(!v2764) {
        var v3799 = a$$343.visibilityState;
        if(!v3799) {
          v3799 = ""
        }
        v2764 = v3799
      }
      v1145 = v2764
    }
    a$$343 = v1145;
    var b$$274 = {visible:1, hidden:2, prerender:3, preview:4};
    introspect(JAM.policy.p4) {
      var v1146 = b$$274[a$$343]
    }
    if(!v1146) {
      v1146 = 0
    }
    return v1146
  }
  function Ve(a$$337, b$$268, c$$180) {
    if(n$$2(b$$268)) {
      var d$$112 = 0;
      var v1148 = d$$112 < b$$268.length;
      for(;v1148;) {
        introspect(JAM.policy.p4) {
          var v2768 = b$$268[d$$112]
        }
        Ve(a$$337, String(v2768), c$$180);
        d$$112 = d$$112 + 1;
        v1148 = d$$112 < b$$268.length
      }
    }else {
      var v1149 = null != b$$268;
      if(v1149) {
        var v3801;
        if("" === b$$268) {
          v3801 = ""
        }else {
          v3801 = "="
        }
        JAM.call(c$$180.push, c$$180, ["&", a$$337, v3801, encodeURIComponent(String(b$$268))])
      }
    }
    return
  }
  function Re(a$$333) {
    if(Se) {
      Se = !1;
      var a$$inline_257 = m$$3.location;
      if(a$$inline_257) {
        var b$$inline_258 = a$$inline_257.href;
        var JSCompiler_temp$$558;
        if(JSCompiler_temp$$558 = b$$inline_258) {
          var JSCompiler_inline_result$$559;
          var v1151 = Re(b$$inline_258)[3];
          if(!v1151) {
            v1151 = null
          }
          var a$$inline_603 = v1151;
          var v1152 = a$$inline_603;
          if(v1152) {
            v1152 = decodeURIComponent(a$$inline_603)
          }
          JSCompiler_inline_result$$559 = v1152;
          var v1153 = b$$inline_258 = JSCompiler_inline_result$$559;
          if(v1153) {
            v1153 = b$$inline_258 != a$$inline_257.hostname
          }
          JSCompiler_temp$$558 = v1153
        }
        if(JSCompiler_temp$$558) {
          Se = !0;
          throw Error();
        }
      }
    }
    return a$$333.match(Pe)
  }
  function Oe(a$$332, b$$265) {
    var c$$178 = RegExp("\\b" + a$$332 + "=(\\d+)");
    var d$$111 = c$$178.exec(b$$265);
    if(d$$111) {
      var v3803 = +d$$111[1] + 1;
      if(!v3803) {
        v3803 = 1
      }
      d$$111 = v3803;
      b$$265 = b$$265.replace(c$$178, a$$332 + "=" + d$$111)
    }
    return b$$265
  }
  function Me(a$$328) {
    this.p = a$$328;
    var v1156 = a$$328.google_iframe_oncopy;
    if(!v1156) {
      a$$328.google_iframe_oncopy = {handlers:{}, upd:JAM.call(r$$2, null, [this.Qc, this])}
    }
    this.hd = a$$328.google_iframe_oncopy;
    return
  }
  function Le(a$$327) {
    var b$$261 = Ge;
    var v1157 = a$$327 == b$$261.PARALLEL_CANCEL_ON_NO_AD;
    if(!v1157) {
      var v2779 = a$$327 == b$$261.IFRAME_SIGNALING;
      if(!v2779) {
        v2779 = a$$327 == b$$261.ALWAYS_ZRT
      }
      v1157 = v2779
    }
    return v1157
  }
  function Ke(a$$326) {
    try {
      var b$$260 = Ie.test(a$$326.location.host);
      var v2782 = !a$$326.postMessage;
      if(!v2782) {
        var v3810 = !a$$326.localStorage;
        if(!v3810) {
          var v4426 = !a$$326.JSON;
          if(!v4426) {
            v4426 = b$$260
          }
          v3810 = v4426
        }
        v2782 = v3810
      }
      return!v2782
    }catch(c$$176) {
      return!1
    }
    return
  }
  function Ee(a$$323) {
    function v41(a$$324, b$$258) {
      if(null != a$$324) {
        var f$$41;
        try {
          var v1160 = new Be;
          f$$41 = JAM.call(v1160.serialize, v1160, [a$$324])
        }catch(g$$26) {
        }
        if(f$$41) {
          ib$$1(c$$174, b$$258, "=", f$$41, ";")
        }
      }
      return
    }
    var b$$257 = "google_page_url";
    introspect(JAM.policy.p4) {
      var v1162 = a$$323[b$$257]
    }
    if(v1162) {
      var v2783 = a$$323;
      var v2784 = b$$257;
      introspect(JAM.policy.p4) {
        var v3812 = a$$323[b$$257]
      }
      var v5199 = String(v3812);
      JAM.set(v2783, v2784, v5199, JAM.policy.p2)
    }
    var c$$174 = [];
    x$$51(a$$323, v41);
    return c$$174.join("")
  }
  function Be() {
    return
  }
  function we(a$$312) {
    function v42(a$$313, d$$106) {
      var v2785 = 0 === a$$313;
      if(!v2785) {
        v2785 = a$$313
      }
      if(v2785) {
        var v2786 = b$$247;
        var v3814 = "&" + d$$106 + "=";
        var v4429;
        if("function" == typeof encodeURIComponent) {
          v4429 = encodeURIComponent(a$$313)
        }else {
          v4429 = escape(a$$313)
        }
        b$$247 = v2786 + (v3814 + v4429)
      }
      return
    }
    var b$$247 = "";
    x$$51(a$$312, v42);
    return b$$247
  }
  function ye(a$$310, b$$246, c$$170, d$$105) {
    function v43(e$$65) {
      e$$65 = ga$$1(b$$246, e$$65);
      var f$$40 = d$$105 || ve;
      te(a$$310, f$$40, e$$65, c$$170);
      return
    }
    return v43
  }
  function xe(a$$309, b$$245, c$$169, d$$104) {
    return ga$$1(te, a$$309, d$$104 || ve, b$$245, c$$169)
  }
  function ue(a$$307) {
    function v44(a$$308, d$$103) {
      JAM.set(b$$244, d$$103, JAM.get(w$$6, a$$308, JAM.policy.p5), JAM.policy.p5);
      return
    }
    var b$$244 = a$$307 || {};
    x$$51(pe, v44);
    return b$$244
  }
  function se(a$$306, b$$243, c$$168) {
    c$$168 = c$$168 || 0.01;
    var v1165 = Math.random() < c$$168;
    if(v1165) {
      a$$306 = "/pagead/gen_204?id=" + a$$306 + we(b$$243);
      a$$306 = L$$1(ma$$1("", "googlesyndication"), a$$306);
      a$$306 = a$$306.substring(0, 2E3);
      nb$$1(w$$6, a$$306)
    }
    return
  }
  function ve(a$$305, b$$242, c$$167, d$$102, e$$64) {
    var f$$39 = v$$1;
    var v2789;
    if(Ea$$1) {
      v2789 = 1
    }else {
      v2789 = 0
    }
    var v1166 = v2789;
    var v2790;
    if(Fa$$1) {
      v2790 = 1
    }else {
      v2790 = 0
    }
    var v1167 = v2790;
    var v1168 = b$$242.substring(0, 512);
    var v2791 = e$$64;
    if(v2791) {
      v2791 = e$$64.substring(0, 40)
    }
    a$$305 = {jscb:v1166, jscd:v1167, context:a$$305, msg:v1168, eid:v2791, file:c$$167, line:d$$102.toString(), url:f$$39.URL.substring(0, 512), ref:f$$39.referrer.substring(0, 512)};
    ue(a$$305);
    se("jserror", a$$305);
    return!Ga$$1
  }
  function te(a$$304, b$$241, c$$166, d$$101) {
    try {
      c$$166()
    }catch(e$$63) {
      c$$166 = !Ga$$1;
      try {
        var f$$38 = e$$63.toString();
        var v1173 = e$$63.name;
        if(v1173) {
          var v2794 = -1 == f$$38.indexOf(e$$63.name);
          if(v2794) {
            f$$38 = f$$38 + (": " + e$$63.name)
          }
        }
        var v1174 = e$$63.message;
        if(v1174) {
          var v2795 = -1 == f$$38.indexOf(e$$63.message);
          if(v2795) {
            f$$38 = f$$38 + (": " + e$$63.message)
          }
        }
        if(e$$63.stack) {
          JSCompiler_inline_label_qe_245: {
            var a$$inline_241 = e$$63.stack;
            var b$$inline_242 = f$$38;
            try {
              var v1175 = -1 == a$$inline_241.indexOf(b$$inline_242);
              if(v1175) {
                a$$inline_241 = b$$inline_242 + "\n" + a$$inline_241
              }
              var c$$inline_243;
              var v1176 = a$$inline_241 != c$$inline_243;
              for(;v1176;) {
                c$$inline_243 = a$$inline_241;
                a$$inline_241 = a$$inline_241.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                v1176 = a$$inline_241 != c$$inline_243
              }
              f$$38 = a$$inline_241.replace(/\n */g, "\n")
            }catch(d$$inline_244) {
              f$$38 = b$$inline_242
            }
          }
        }
        var g$$25 = "";
        var v1178 = e$$63.fileName;
        if(v1178) {
          g$$25 = e$$63.fileName
        }
        var h$$18 = -1;
        var v1179 = e$$63.lineNumber;
        if(v1179) {
          h$$18 = e$$63.lineNumber
        }
        var k$$7;
        JSCompiler_inline_label_re_248: {
          try {
            var v1180;
            if(d$$101) {
              v1180 = d$$101()
            }else {
              v1180 = ""
            }
            k$$7 = v1180;
            break JSCompiler_inline_label_re_248
          }catch(b$$inline_247) {
          }
          k$$7 = ""
        }
        c$$166 = JAM.call(b$$241, null, [a$$304, f$$38, g$$25, h$$18, k$$7])
      }catch(l$$10) {
        var v3818 = l$$10.toString() + "\n";
        var v4435 = l$$10.stack;
        if(!v4435) {
          v4435 = ""
        }
        se("jserror", {context:"protectAndRun", msg:v3818 + v4435})
      }
      if(!c$$166) {
        throw e$$63;
      }
    }
    return
  }
  function le(a$$301, b$$238, c$$164, d$$99, e$$61) {
    this.nb = a$$301;
    this.fd = b$$238;
    this.ld = c$$164;
    this.kb = d$$99;
    this.Vb = this.lb = !1;
    this.Yc = e$$61 || null;
    return
  }
  function me() {
    var a$$300 = D$$1();
    var b$$237 = a$$300.__google_ad_urls;
    if(!b$$237) {
      var v1183 = a$$300;
      var v5200 = new S$$1(a$$300);
      return v1183.__google_ad_urls = v5200
    }
    try {
      if(b$$237.getOseId()) {
        return b$$237
      }
    }catch(c$$163) {
    }
    var v1186 = a$$300;
    var v5201 = new S$$1(a$$300, b$$237);
    return v1186.__google_ad_urls = v5201
  }
  function ke(a$$293, b$$229, c$$156, d$$93) {
    var v2799;
    if(a$$293) {
      v2799 = "https"
    }else {
      v2799 = "http"
    }
    he = L$$1(b$$229, "/pagead/osd.js", v2799);
    ie = c$$156;
    je = d$$93;
    return
  }
  function S$$1(a$$292, b$$228) {
    this.wa = a$$292;
    var v1188;
    if(b$$228) {
      v1188 = b$$228.ha
    }else {
      v1188 = []
    }
    this.ha = v1188;
    var v1189;
    if(b$$228) {
      v1189 = b$$228.Ua
    }else {
      v1189 = !1
    }
    this.Ua = v1189;
    var v1190;
    if(b$$228) {
      v1190 = b$$228.Db
    }else {
      v1190 = ""
    }
    this.Db = v1190;
    var v1191;
    if(b$$228) {
      v1191 = b$$228.Wa
    }else {
      v1191 = 0
    }
    this.Wa = v1191;
    var v1192;
    if(b$$228) {
      v1192 = b$$228.Aa
    }else {
      v1192 = ""
    }
    this.Aa = v1192;
    var v1193;
    if(b$$228) {
      v1193 = b$$228.q
    }else {
      v1193 = []
    }
    this.q = v1193;
    this.xa = null;
    this.Lb = !1;
    return
  }
  function fe(a$$290, b$$227) {
    function v45() {
      var v1194 = "complete" == a$$290.readyState;
      if(v1194) {
        b$$227()
      }
      return
    }
    if(rb$$1()) {
      var c$$155 = v45;
      y$$32(a$$290, "readystatechange", c$$155)
    }else {
      y$$32(a$$290, "load", b$$227)
    }
    return
  }
  function de(a$$288, b$$225) {
    var c$$153 = b$$225 || w$$6;
    if(a$$288) {
      var v2801 = c$$153.top != c$$153;
      if(v2801) {
        c$$153 = c$$153.top
      }
    }
    try {
      var JSCompiler_temp$$0;
      var v2802 = c$$153.document;
      if(v2802) {
        v2802 = !c$$153.document.body
      }
      if(v2802) {
        JSCompiler_temp$$0 = new u$$2(-1, -1)
      }else {
        var a$$inline_187 = c$$153 || window;
        a$$inline_187 = a$$inline_187.document;
        var v1196;
        if("CSS1Compat" == a$$inline_187.compatMode) {
          v1196 = a$$inline_187.documentElement
        }else {
          v1196 = a$$inline_187.body
        }
        a$$inline_187 = v1196;
        JSCompiler_temp$$0 = new u$$2(a$$inline_187.clientWidth, a$$inline_187.clientHeight)
      }
      return JSCompiler_temp$$0
    }catch(d$$92) {
      return new u$$2(-12245933, -12245933)
    }
    return
  }
  function ce(a$$287, b$$224) {
    if(a$$287) {
      var c$$152 = a$$287.match(b$$224 + "=([^&]+)");
      var v2804 = c$$152;
      if(v2804) {
        v2804 = 2 == c$$152.length
      }
      if(v2804) {
        return c$$152[1]
      }
    }
    return""
  }
  function be(a$$286, b$$223, c$$151, d$$91, e$$57) {
    var JSCompiler_temp$$12;
    if(e$$57) {
      var b$$inline_179 = b$$223;
      b$$inline_179 = "&" + b$$inline_179 + "=" + c$$151;
      JSCompiler_temp$$12 = a$$286 + b$$inline_179
    }else {
      var a$$inline_182 = a$$286;
      var b$$inline_183 = b$$223;
      var c$$inline_184 = c$$151;
      var d$$inline_185 = "&" + b$$inline_183 + "=";
      b$$inline_183 = a$$inline_182.indexOf(d$$inline_185);
      var v1204;
      if(0 > b$$inline_183) {
        v1204 = a$$inline_182 = a$$inline_182 + d$$inline_185 + c$$inline_184
      }else {
        b$$inline_183 = b$$inline_183 + d$$inline_185.length;
        d$$inline_185 = a$$inline_182.indexOf("&", b$$inline_183);
        var v3824;
        if(0 <= d$$inline_185) {
          v3824 = a$$inline_182.substring(0, b$$inline_183) + c$$inline_184 + a$$inline_182.substring(d$$inline_185)
        }else {
          v3824 = a$$inline_182.substring(0, b$$inline_183) + c$$inline_184
        }
        v1204 = a$$inline_182 = v3824
      }
      v1204;
      JSCompiler_temp$$12 = a$$inline_182
    }
    c$$151 = JSCompiler_temp$$12;
    var v1205;
    if(2E3 < c$$151.length) {
      var v2808;
      if(void 0 !== d$$91) {
        v2808 = be(a$$286, b$$223, d$$91, void 0, e$$57)
      }else {
        v2808 = a$$286
      }
      v1205 = v2808
    }else {
      v1205 = c$$151
    }
    return v1205
  }
  function Zd(a$$282, b$$220, c$$148, d$$89) {
    function v46(a$$283) {
      return a$$283
    }
    var v3828;
    if(c$$148) {
      v3828 = "google_debug&"
    }else {
      v3828 = ""
    }
    b$$220 = [v3828, "xpc=", b$$220, "&p=", encodeURIComponent(v$$1.location.protocol), "//", encodeURIComponent(v$$1.location.host)].join("");
    var v1207;
    if(d$$89) {
      v1207 = encodeURIComponent
    }else {
      v1207 = v46
    }
    d$$89 = v1207;
    var v2813 = a$$282;
    var v3831;
    if(-1 == a$$282.indexOf(JAM.call(d$$89, null, ["?"]))) {
      v3831 = JAM.call(d$$89, null, ["?"])
    }else {
      v3831 = JAM.call(d$$89, null, ["&"])
    }
    return v2813 + v3831 + JAM.call(d$$89, null, [b$$220])
  }
  function Yd(a$$281, b$$219, c$$147, d$$88, e$$56, f$$33, g$$21, h$$14) {
    return{a:a$$281, b:b$$219, c:c$$147, d:d$$88, e:e$$56, f:f$$33, g:g$$21, h:h$$14}
  }
  function Wd(a$$279) {
    var b$$217 = R$$1(a$$279, "fontSize");
    var c$$145;
    var a$$inline_173 = b$$217;
    var v2815 = a$$inline_173 = a$$inline_173.match(Sd);
    if(v2815) {
      v2815 = a$$inline_173[0]
    }
    var v1210 = v2815;
    if(!v1210) {
      v1210 = null
    }
    c$$145 = v1210;
    var v2817 = b$$217;
    if(v2817) {
      v2817 = "px" == c$$145
    }
    if(v2817) {
      return parseInt(b$$217, 10)
    }
    if(N$$1) {
      if(c$$145 in Ud) {
        return Od(a$$279, b$$217, "left", "pixelLeft")
      }
      var v2818 = a$$279.parentNode;
      if(v2818) {
        var v3832 = 1 == a$$279.parentNode.nodeType;
        if(v3832) {
          v3832 = c$$145 in Vd
        }
        v2818 = v3832
      }
      if(v2818) {
        a$$279 = a$$279.parentNode;
        c$$145 = R$$1(a$$279, "fontSize");
        var v3833;
        if(b$$217 == c$$145) {
          v3833 = "1em"
        }else {
          v3833 = b$$217
        }
        return Od(a$$279, v3833, "left", "pixelLeft")
      }
    }
    c$$145 = kd("span", {style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});
    JAM.call(a$$279.appendChild, a$$279, [c$$145]);
    b$$217 = c$$145.offsetHeight;
    qd(c$$145);
    return b$$217
  }
  function Qd(a$$276, b$$215) {
    if(N$$1) {
      var c$$143 = Pd(a$$276, b$$215 + "Left");
      var d$$86 = Pd(a$$276, b$$215 + "Right");
      var e$$55 = Pd(a$$276, b$$215 + "Top");
      var f$$32 = Pd(a$$276, b$$215 + "Bottom");
      return new P$$1(e$$55, d$$86, f$$32, c$$143)
    }
    c$$143 = yd(a$$276, b$$215 + "Left");
    d$$86 = yd(a$$276, b$$215 + "Right");
    e$$55 = yd(a$$276, b$$215 + "Top");
    f$$32 = yd(a$$276, b$$215 + "Bottom");
    return new P$$1(parseFloat(e$$55), parseFloat(d$$86), parseFloat(f$$32), parseFloat(c$$143))
  }
  function Pd(a$$275, b$$214) {
    var v1227;
    if(a$$275.currentStyle) {
      var v2820 = a$$275.currentStyle;
      introspect(JAM.policy.p4) {
        v1227 = v2820[b$$214]
      }
    }else {
      v1227 = null
    }
    var c$$142 = v1227;
    var v1228;
    if(c$$142) {
      v1228 = Od(a$$275, c$$142, "left", "pixelLeft")
    }else {
      v1228 = 0
    }
    return v1228
  }
  function Od(a$$274, b$$213, c$$141, d$$85) {
    if(/^\d+px?$/.test(b$$213)) {
      return parseInt(b$$213, 10)
    }
    var v1230 = a$$274.style;
    introspect(JAM.policy.p4) {
      var e$$54 = v1230[c$$141]
    }
    var v1231 = a$$274.runtimeStyle;
    introspect(JAM.policy.p4) {
      var f$$31 = v1231[c$$141]
    }
    JAM.set(a$$274.runtimeStyle, c$$141, JAM.get(a$$274.currentStyle, c$$141, JAM.policy.p5), JAM.policy.p5);
    JAM.set(a$$274.style, c$$141, b$$213, JAM.policy.p2);
    var v1234 = a$$274.style;
    introspect(JAM.policy.p4) {
      b$$213 = v1234[d$$85]
    }
    JAM.set(a$$274.style, c$$141, e$$54, JAM.policy.p2);
    JAM.set(a$$274.runtimeStyle, c$$141, f$$31, JAM.policy.p2);
    return b$$213
  }
  function Nd(a$$273, b$$212) {
    var c$$140 = a$$273.style;
    var v1237;
    if("opacity" in c$$140) {
      v1237 = c$$140.opacity = b$$212
    }else {
      var v2823;
      if("MozOpacity" in c$$140) {
        v2823 = c$$140.MozOpacity = b$$212
      }else {
        var v3834 = "filter" in c$$140;
        if(v3834) {
          var v4447;
          if("" === b$$212) {
            v4447 = ""
          }else {
            v4447 = "alpha(opacity=" + 100 * b$$212 + ")"
          }
          v3834 = c$$140.filter = v4447
        }
        v2823 = v3834
      }
      v1237 = v2823
    }
    v1237;
    return
  }
  function Md(a$$272) {
    var b$$211 = a$$272.style;
    a$$272 = "";
    var v1238;
    if("opacity" in b$$211) {
      v1238 = a$$272 = b$$211.opacity
    }else {
      var v2825;
      if("MozOpacity" in b$$211) {
        v2825 = a$$272 = b$$211.MozOpacity
      }else {
        var v3836 = "filter" in b$$211;
        if(v3836) {
          var v4448 = b$$211 = b$$211.filter.match(/alpha\(opacity=([\d.]+)\)/);
          if(v4448) {
            v4448 = a$$272 = String(b$$211[1] / 100)
          }
          v3836 = v4448
        }
        v2825 = v3836
      }
      v1238 = v2825
    }
    v1238;
    var v1239;
    if("" == a$$272) {
      v1239 = a$$272
    }else {
      v1239 = Number(a$$272)
    }
    return v1239
  }
  function Ld(a$$271) {
    var b$$210 = a$$271.offsetWidth;
    var c$$139 = a$$271.offsetHeight;
    var v1240 = Pc;
    if(v1240) {
      var v2828 = !b$$210;
      if(v2828) {
        v2828 = !c$$139
      }
      v1240 = v2828
    }
    var d$$84 = v1240;
    var v1241;
    var v4449 = void 0 === b$$210;
    if(!v4449) {
      v4449 = d$$84
    }
    var v3838 = v4449;
    if(v3838) {
      v3838 = a$$271.getBoundingClientRect
    }
    if(v3838) {
      a$$271 = Ad(a$$271);
      v1241 = new u$$2(a$$271.right - a$$271.left, a$$271.bottom - a$$271.top)
    }else {
      v1241 = new u$$2(b$$210, c$$139)
    }
    return v1241
  }
  function Jd(a$$267, b$$206) {
    var v1242 = "number" == typeof a$$267;
    if(v1242) {
      var v3841;
      if(b$$206) {
        v3841 = JAM.call(Math.round, Math, [a$$267])
      }else {
        v3841 = a$$267
      }
      a$$267 = v3841 + "px"
    }
    return a$$267
  }
  function Id(a$$266, b$$205, c$$137) {
    if(b$$205 instanceof u$$2) {
      c$$137 = b$$205.height;
      b$$205 = b$$205.width
    }else {
      if(void 0 == c$$137) {
        throw Error("missing height argument");
      }
    }
    var v1245 = a$$266.style;
    var v5202 = Jd(b$$205, !0);
    v1245.width = v5202;
    var v1246 = a$$266.style;
    var v5203 = Jd(c$$137, !0);
    v1246.height = v5203;
    return
  }
  function Cd(a$$263) {
    var b$$202;
    var c$$134 = cd(a$$263);
    var d$$81 = R$$1(a$$263, "position");
    var v1247 = Oc;
    if(v1247) {
      var v2835 = c$$134.getBoxObjectFor;
      if(v2835) {
        var v3842 = !a$$263.getBoundingClientRect;
        if(v3842) {
          var v4455 = "absolute" == d$$81;
          if(v4455) {
            var v4803 = b$$202 = c$$134.getBoxObjectFor(a$$263);
            if(v4803) {
              var v4994 = 0 > b$$202.screenX;
              if(!v4994) {
                v4994 = 0 > b$$202.screenY
              }
              v4803 = v4994
            }
            v4455 = v4803
          }
          v3842 = v4455
        }
        v2835 = v3842
      }
      v1247 = v2835
    }
    var e$$51 = v1247;
    var f$$28 = new M$$1(0, 0);
    var g$$19;
    var a$$inline_153 = c$$134;
    var v1248;
    if(a$$inline_153) {
      v1248 = cd(a$$inline_153)
    }else {
      v1248 = document
    }
    a$$inline_153 = v1248;
    var v1249;
    var v3843 = !N$$1;
    if(!v3843) {
      var v4804 = N$$1;
      if(v4804) {
        v4804 = 9 <= Vc
      }
      var v4456 = v4804;
      if(!v4456) {
        v4456 = dd(a$$inline_153).$b()
      }
      v3843 = v4456
    }
    if(v3843) {
      v1249 = a$$inline_153.documentElement
    }else {
      v1249 = a$$inline_153.body
    }
    g$$19 = v1249;
    if(a$$263 == g$$19) {
      return f$$28
    }
    if(a$$263.getBoundingClientRect) {
      b$$202 = Ad(a$$263);
      a$$263 = dd(c$$134).Ja();
      f$$28.x = b$$202.left + a$$263.x;
      f$$28.y = b$$202.top + a$$263.y
    }else {
      var v2839 = c$$134.getBoxObjectFor;
      if(v2839) {
        v2839 = !e$$51
      }
      if(v2839) {
        b$$202 = c$$134.getBoxObjectFor(a$$263);
        a$$263 = c$$134.getBoxObjectFor(g$$19);
        f$$28.x = b$$202.screenX - a$$263.screenX;
        f$$28.y = b$$202.screenY - a$$263.screenY
      }else {
        b$$202 = a$$263;
        var v2842 = b$$202;
        if(v2842) {
          v2842 = b$$202 != a$$263
        }
        var v1253 = v2842;
        do {
          f$$28.x = f$$28.x + b$$202.offsetLeft;
          f$$28.y = f$$28.y + b$$202.offsetTop;
          var v1251 = b$$202 != a$$263;
          if(v1251) {
            var v4459 = f$$28.x;
            var v4807 = b$$202.clientLeft;
            if(!v4807) {
              v4807 = 0
            }
            f$$28.x = v4459 + v4807;
            var v4461 = f$$28.y;
            var v4808 = b$$202.clientTop;
            if(!v4808) {
              v4808 = 0
            }
            f$$28.y = v4461 + v4808
          }
          var v2847 = Pc;
          if(v2847) {
            v2847 = "fixed" == R$$1(b$$202, "position")
          }
          if(v2847) {
            f$$28.x = f$$28.x + c$$134.body.scrollLeft;
            f$$28.y = f$$28.y + c$$134.body.scrollTop;
            break
          }
          b$$202 = b$$202.offsetParent;
          var v2852 = b$$202;
          if(v2852) {
            v2852 = b$$202 != a$$263
          }
          v1253 = v2852
        }while(v1253);
        var v2853 = Nc;
        if(!v2853) {
          var v3851 = Pc;
          if(v3851) {
            v3851 = "absolute" == d$$81
          }
          v2853 = v3851
        }
        if(v2853) {
          f$$28.y = f$$28.y - c$$134.body.offsetTop
        }
        b$$202 = a$$263;
        var v2856 = b$$202 = Bd(b$$202);
        if(v2856) {
          var v3854 = b$$202 != c$$134.body;
          if(v3854) {
            v3854 = b$$202 != g$$19
          }
          v2856 = v3854
        }
        var v1255 = v2856;
        for(;v1255;) {
          f$$28.x = f$$28.x - b$$202.scrollLeft;
          var v3857 = Nc;
          if(v3857) {
            v3857 = "TR" == b$$202.tagName
          }
          var v2857 = v3857;
          if(!v2857) {
            f$$28.y = f$$28.y - b$$202.scrollTop
          }
          var v2858 = b$$202 = Bd(b$$202);
          if(v2858) {
            var v3859 = b$$202 != c$$134.body;
            if(v3859) {
              v3859 = b$$202 != g$$19
            }
            v2858 = v3859
          }
          v1255 = v2858
        }
      }
    }
    return f$$28
  }
  function Bd(a$$262) {
    var v2859 = N$$1;
    if(v2859) {
      var v4468 = N$$1;
      if(v4468) {
        v4468 = 8 <= Vc
      }
      v2859 = !v4468
    }
    if(v2859) {
      return a$$262.offsetParent
    }
    var b$$201 = cd(a$$262);
    var c$$133 = R$$1(a$$262, "position");
    var v1259 = "fixed" == c$$133;
    if(!v1259) {
      v1259 = "absolute" == c$$133
    }
    var d$$80 = v1259;
    a$$262 = a$$262.parentNode;
    var v2861 = a$$262;
    if(v2861) {
      v2861 = a$$262 != b$$201
    }
    var v1261 = v2861;
    for(;v1261;) {
      c$$133 = R$$1(a$$262, "position");
      var v4469 = d$$80;
      if(v4469) {
        var v4809 = "static" == c$$133;
        if(v4809) {
          var v4997 = a$$262 != b$$201.documentElement;
          if(v4997) {
            v4997 = a$$262 != b$$201.body
          }
          v4809 = v4997
        }
        v4469 = v4809
      }
      d$$80 = v4469;
      var v3861 = !d$$80;
      if(v3861) {
        var v4470 = a$$262.scrollWidth > a$$262.clientWidth;
        if(!v4470) {
          var v4812 = a$$262.scrollHeight > a$$262.clientHeight;
          if(!v4812) {
            var v5000 = "fixed" == c$$133;
            if(!v5000) {
              var v5077 = "absolute" == c$$133;
              if(!v5077) {
                v5077 = "relative" == c$$133
              }
              v5000 = v5077
            }
            v4812 = v5000
          }
          v4470 = v4812
        }
        v3861 = v4470
      }
      if(v3861) {
        return a$$262
      }
      a$$262 = a$$262.parentNode;
      var v2862 = a$$262;
      if(v2862) {
        v2862 = a$$262 != b$$201
      }
      v1261 = v2862
    }
    return null
  }
  function Ad(a$$261) {
    var b$$200;
    try {
      b$$200 = a$$261.getBoundingClientRect()
    }catch(c$$132) {
      return{left:0, top:0, right:0, bottom:0}
    }
    if(N$$1) {
      var v2863 = a$$261.ownerDocument.body;
      if(v2863) {
        a$$261 = a$$261.ownerDocument;
        b$$200.left = b$$200.left - (a$$261.documentElement.clientLeft + a$$261.body.clientLeft);
        b$$200.top = b$$200.top - (a$$261.documentElement.clientTop + a$$261.body.clientTop)
      }
    }
    return b$$200
  }
  function R$$1(a$$259, b$$199) {
    var v1262 = yd(a$$259, b$$199);
    if(!v1262) {
      var v3863;
      if(a$$259.currentStyle) {
        var v4471 = a$$259.currentStyle;
        introspect(JAM.policy.p4) {
          v3863 = v4471[b$$199]
        }
      }else {
        v3863 = null
      }
      var v2864 = v3863;
      if(!v2864) {
        var v3864 = a$$259.style;
        if(v3864) {
          var v4473 = a$$259.style;
          introspect(JAM.policy.p4) {
            v3864 = v4473[b$$199]
          }
        }
        v2864 = v3864
      }
      v1262 = v2864
    }
    return v1262
  }
  function yd(a$$258, b$$198) {
    var c$$131 = cd(a$$258);
    var v1263;
    var v3866 = c$$131.defaultView;
    if(v3866) {
      var v4474 = c$$131.defaultView.getComputedStyle;
      if(v4474) {
        v4474 = c$$131 = c$$131.defaultView.getComputedStyle(a$$258, null)
      }
      v3866 = v4474
    }
    if(v3866) {
      introspect(JAM.policy.p4) {
        var v2866 = c$$131[b$$198]
      }
      if(!v2866) {
        var v3867 = c$$131.getPropertyValue(b$$198);
        if(!v3867) {
          v3867 = ""
        }
        v2866 = v3867
      }
      v1263 = v2866
    }else {
      v1263 = ""
    }
    return v1263
  }
  function wd(a$$256, b$$196, c$$129) {
    var JSCompiler_inline_result$$58;
    JSCompiler_inline_label_xd_152: {
      var a$$inline_148 = a$$256;
      var b$$inline_149 = c$$129;
      var c$$inline_150 = db$$1(b$$inline_149);
      var v2868 = void 0;
      var v3869 = a$$inline_148.style;
      introspect(JAM.policy.p4) {
        var v2869 = v3869[c$$inline_150]
      }
      if(v2868 === v2869) {
        var v2870;
        if(Pc) {
          v2870 = "Webkit"
        }else {
          var v3870;
          if(Oc) {
            v3870 = "Moz"
          }else {
            var v4476;
            if(N$$1) {
              v4476 = "ms"
            }else {
              var v4818;
              if(Nc) {
                v4818 = "O"
              }else {
                v4818 = null
              }
              v4476 = v4818
            }
            v3870 = v4476
          }
          v2870 = v3870
        }
        var d$$inline_151 = v2870 + eb$$1(b$$inline_149);
        var v2871 = void 0;
        var v3871 = a$$inline_148.style;
        introspect(JAM.policy.p4) {
          var v2872 = v3871[d$$inline_151]
        }
        if(v2871 !== v2872) {
          JSCompiler_inline_result$$58 = d$$inline_151;
          break JSCompiler_inline_label_xd_152
        }
      }
      JSCompiler_inline_result$$58 = c$$inline_150
    }
    var v1268 = c$$129 = JSCompiler_inline_result$$58;
    if(v1268) {
      JAM.set(a$$256.style, c$$129, b$$196, JAM.policy.p2)
    }
    return
  }
  function Q$$1(a$$255, b$$195, c$$128) {
    var v1269;
    if(p$$1(b$$195)) {
      v1269 = wd(a$$255, c$$128, b$$195)
    }else {
      v1269 = Dc(b$$195, ga$$1(wd, a$$255))
    }
    v1269;
    return
  }
  function P$$1(a$$250, b$$191, c$$125, d$$77) {
    this.top = a$$250;
    this.right = b$$191;
    this.bottom = c$$125;
    this.left = d$$77;
    return
  }
  function O$$1(a$$247) {
    var v1270 = a$$247;
    if(!v1270) {
      var v2876 = m$$3.document;
      if(!v2876) {
        v2876 = document
      }
      v1270 = v2876
    }
    this.V = v1270;
    return
  }
  function md(a$$246) {
    var v2878 = a$$246;
    if(v2878) {
      v2878 = "number" == typeof a$$246.length
    }
    if(v2878) {
      if(da$$1(a$$246)) {
        var v1271 = "function" == typeof a$$246.item;
        if(!v1271) {
          v1271 = "string" == typeof a$$246.item
        }
        return v1271
      }
      if("function" == ba$$1(a$$246)) {
        return"function" == typeof a$$246.item
      }
    }
    return!1
  }
  function ud(a$$245, b$$190, c$$124) {
    if(!(a$$245.nodeName in sd)) {
      if(3 == a$$245.nodeType) {
        var v1276;
        if(c$$124) {
          v1276 = JAM.call(b$$190.push, b$$190, [String(a$$245.nodeValue).replace(/(\r\n|\r|\n)/g, "")])
        }else {
          v1276 = JAM.call(b$$190.push, b$$190, [a$$245.nodeValue])
        }
        v1276
      }else {
        if(a$$245.nodeName in td) {
          var v2889 = a$$245.nodeName;
          introspect(JAM.policy.p4) {
            var v1277 = td[v2889]
          }
          JAM.call(b$$190.push, b$$190, [v1277])
        }else {
          a$$245 = a$$245.firstChild;
          for(;a$$245;) {
            ud(a$$245, b$$190, c$$124);
            a$$245 = a$$245.nextSibling
          }
        }
      }
    }
    return
  }
  function cd(a$$243) {
    var v1281;
    if(9 == a$$243.nodeType) {
      v1281 = a$$243
    }else {
      var v2890 = a$$243.ownerDocument;
      if(!v2890) {
        v2890 = a$$243.document
      }
      v1281 = v2890
    }
    return v1281
  }
  function rd(a$$242, b$$188) {
    var v2892 = a$$242.contains;
    if(v2892) {
      v2892 = 1 == b$$188.nodeType
    }
    if(v2892) {
      var v1282 = a$$242 == b$$188;
      if(!v1282) {
        v1282 = JAM.call(a$$242.contains, a$$242, [b$$188])
      }
      return v1282
    }
    if("undefined" != typeof a$$242.compareDocumentPosition) {
      var v1284 = a$$242 == b$$188;
      if(!v1284) {
        v1284 = Boolean(a$$242.compareDocumentPosition(b$$188) & 16)
      }
      return v1284
    }
    var v2897 = b$$188;
    if(v2897) {
      v2897 = a$$242 != b$$188
    }
    var v1286 = v2897;
    for(;v1286;) {
      b$$188 = b$$188.parentNode;
      var v2898 = b$$188;
      if(v2898) {
        v2898 = a$$242 != b$$188
      }
      v1286 = v2898
    }
    return b$$188 == a$$242
  }
  function qd(a$$241) {
    var v1287;
    var v3883 = a$$241;
    if(v3883) {
      v3883 = a$$241.parentNode
    }
    if(v3883) {
      v1287 = a$$241.parentNode.removeChild(a$$241)
    }else {
      v1287 = null
    }
    return v1287
  }
  function pd(a$$240, b$$187) {
    ld(cd(a$$240), a$$240, arguments, 1);
    return
  }
  function od(a$$239, b$$186) {
    JAM.call(a$$239.appendChild, a$$239, [b$$186]);
    return
  }
  function nd(a$$238) {
    if(1 != a$$238.nodeType) {
      return!1
    }
    switch(a$$238.tagName) {
      case "APPLET":
      ;
      case "AREA":
      ;
      case "BASE":
      ;
      case "BR":
      ;
      case "COL":
      ;
      case "COMMAND":
      ;
      case "EMBED":
      ;
      case "FRAME":
      ;
      case "HR":
      ;
      case "IMG":
      ;
      case "INPUT":
      ;
      case "IFRAME":
      ;
      case "ISINDEX":
      ;
      case "KEYGEN":
      ;
      case "LINK":
      ;
      case "NOFRAMES":
      ;
      case "NOSCRIPT":
      ;
      case "META":
      ;
      case "OBJECT":
      ;
      case "PARAM":
      ;
      case "SCRIPT":
      ;
      case "SOURCE":
      ;
      case "STYLE":
      ;
      case "TRACK":
      ;
      case "WBR":
        return!1
    }
    return!0
  }
  function ld(a$$237, b$$185, c$$122, d$$76) {
    function e$$50(c$$123) {
      if(c$$123) {
        var v3884;
        if(p$$1(c$$123)) {
          v3884 = JAM.call(a$$237.createTextNode, a$$237, [c$$123])
        }else {
          v3884 = c$$123
        }
        JAM.call(b$$185.appendChild, b$$185, [v3884])
      }
      return
    }
    var v1292 = d$$76 < c$$122.length;
    for(;v1292;) {
      introspect(JAM.policy.p4) {
        var f$$27 = c$$122[d$$76]
      }
      var v1291;
      var v3885 = !ca$$1(f$$27);
      if(!v3885) {
        var v4481 = da$$1(f$$27);
        if(v4481) {
          v4481 = 0 < f$$27.nodeType
        }
        v3885 = v4481
      }
      if(v3885) {
        v1291 = e$$50(f$$27)
      }else {
        var v3886;
        if(md(f$$27)) {
          v3886 = ac(f$$27)
        }else {
          v3886 = f$$27
        }
        v1291 = JAM.call(Zb, null, [v3886, e$$50])
      }
      v1291;
      d$$76 = d$$76 + 1;
      v1292 = d$$76 < c$$122.length
    }
    return
  }
  function kd(a$$235, b$$183, c$$120) {
    var JSCompiler_inline_result$$54;
    var b$$inline_140 = arguments;
    var c$$inline_141 = b$$inline_140[0];
    var d$$inline_142 = b$$inline_140[1];
    var v2907 = !Wc;
    if(v2907) {
      var v3887 = d$$inline_142;
      if(v3887) {
        var v4484 = d$$inline_142.name;
        if(!v4484) {
          v4484 = d$$inline_142.type
        }
        v3887 = v4484
      }
      v2907 = v3887
    }
    if(v2907) {
      c$$inline_141 = ["<", c$$inline_141];
      var v1293 = d$$inline_142.name;
      if(v1293) {
        JAM.call(c$$inline_141.push, c$$inline_141, [' name="', Sa$$1(d$$inline_142.name), '"'])
      }
      if(d$$inline_142.type) {
        JAM.call(c$$inline_141.push, c$$inline_141, [' type="', Sa$$1(d$$inline_142.type), '"']);
        var e$$inline_143 = {};
        Gc(e$$inline_143, d$$inline_142);
        delete e$$inline_143.type;
        d$$inline_142 = e$$inline_143
      }
      JAM.call(c$$inline_141.push, c$$inline_141, [">"]);
      c$$inline_141 = c$$inline_141.join("")
    }
    c$$inline_141 = JAM.call(document.createElement, document, [c$$inline_141]);
    if(d$$inline_142) {
      var v2910;
      if(p$$1(d$$inline_142)) {
        v2910 = c$$inline_141.className = d$$inline_142
      }else {
        var v3889;
        if(n$$2(d$$inline_142)) {
          v3889 = ad.apply(null, [c$$inline_141].concat(d$$inline_142))
        }else {
          v3889 = fd(c$$inline_141, d$$inline_142)
        }
        v2910 = v3889
      }
      v2910
    }
    var v1297 = 2 < b$$inline_140.length;
    if(v1297) {
      ld(document, c$$inline_141, b$$inline_140, 2)
    }
    JSCompiler_inline_result$$54 = c$$inline_141;
    return JSCompiler_inline_result$$54
  }
  function fd(a$$231, b$$180) {
    function v47(b$$181, d$$74) {
      var v1298;
      if("style" == d$$74) {
        v1298 = a$$231.style.cssText = b$$181
      }else {
        var v2913;
        if("class" == d$$74) {
          v2913 = a$$231.className = b$$181
        }else {
          var v3891;
          if("for" == d$$74) {
            v3891 = a$$231.htmlFor = b$$181
          }else {
            var v4487;
            if(d$$74 in ed) {
              introspect(JAM.policy.p4) {
                var v4822 = ed[d$$74]
              }
              v4487 = JAM.call(a$$231.setAttribute, a$$231, [v4822, b$$181])
            }else {
              var v4823;
              var v5083 = 0 == d$$74.lastIndexOf("aria-", 0);
              if(!v5083) {
                v5083 = 0 == d$$74.lastIndexOf("data-", 0)
              }
              if(v5083) {
                v4823 = JAM.call(a$$231.setAttribute, a$$231, [d$$74, b$$181])
              }else {
                v4823 = JAM.set(a$$231, d$$74, b$$181, JAM.policy.p2)
              }
              v4487 = v4823
            }
            v3891 = v4487
          }
          v2913 = v3891
        }
        v1298 = v2913
      }
      v1298;
      return
    }
    Dc(b$$180, v47);
    return
  }
  function dd(a$$230) {
    var v1299;
    if(a$$230) {
      v1299 = new O$$1(cd(a$$230))
    }else {
      var v2916 = Ma$$1;
      if(!v2916) {
        v2916 = Ma$$1 = new O$$1
      }
      v1299 = v2916
    }
    return v1299
  }
  function ad(a$$227, b$$177) {
    var c$$118 = Zc(a$$227);
    var d$$73 = bc(arguments, 1);
    var e$$48 = c$$118.length + d$$73.length;
    var a$$inline_132 = c$$118;
    var b$$inline_133 = d$$73;
    var c$$inline_134 = 0;
    var v1303 = c$$inline_134 < b$$inline_133.length;
    for(;v1303;) {
      introspect(JAM.policy.p4) {
        var v2918 = b$$inline_133[c$$inline_134]
      }
      var v1302 = $b(a$$inline_132, v2918);
      if(!v1302) {
        introspect(JAM.policy.p4) {
          var v2919 = b$$inline_133[c$$inline_134]
        }
        JAM.call(a$$inline_132.push, a$$inline_132, [v2919])
      }
      c$$inline_134 = c$$inline_134 + 1;
      v1303 = c$$inline_134 < b$$inline_133.length
    }
    var b$$inline_137 = c$$118.join(" ");
    a$$227.className = b$$inline_137;
    return c$$118.length == e$$48
  }
  function Zc(a$$226) {
    a$$226 = a$$226.className;
    var v2922 = p$$1(a$$226);
    if(v2922) {
      v2922 = a$$226.match(/\S+/g)
    }
    var v1305 = v2922;
    if(!v1305) {
      v1305 = []
    }
    return v1305
  }
  function Uc(a$$223) {
    var JSCompiler_temp$$77;
    introspect(JAM.policy.p4) {
      var v1320 = JSCompiler_temp$$77 = Tc[a$$223]
    }
    if(v1320) {
    }else {
      var JSCompiler_temp_const$$79 = Tc;
      var JSCompiler_temp_const$$78 = a$$223;
      var JSCompiler_inline_result$$80;
      var b$$inline_118 = a$$223;
      var c$$inline_119 = 0;
      var d$$inline_120 = String(Sc).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split(".");
      var e$$inline_121 = String(b$$inline_118).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split(".");
      var f$$inline_122 = Math.max(d$$inline_120.length, e$$inline_121.length);
      var g$$inline_123 = 0;
      var v2926 = 0 == c$$inline_119;
      if(v2926) {
        v2926 = g$$inline_123 < f$$inline_122
      }
      var v1319 = v2926;
      for(;v1319;) {
        introspect(JAM.policy.p4) {
          var v1310 = d$$inline_120[g$$inline_123]
        }
        if(!v1310) {
          v1310 = ""
        }
        var h$$inline_124 = v1310;
        introspect(JAM.policy.p4) {
          var v1311 = e$$inline_121[g$$inline_123]
        }
        if(!v1311) {
          v1311 = ""
        }
        var k$$inline_125 = v1311;
        var l$$inline_126 = RegExp("(\\d*)(\\D*)", "g");
        var z$$inline_127 = RegExp("(\\d*)(\\D*)", "g");
        var v1318 = 0 == c$$inline_119;
        do {
          var v1312 = l$$inline_126.exec(h$$inline_124);
          if(!v1312) {
            v1312 = ["", "", ""]
          }
          var C$$inline_128 = v1312;
          var v1313 = z$$inline_127.exec(k$$inline_125);
          if(!v1313) {
            v1313 = ["", "", ""]
          }
          var I$$inline_129 = v1313;
          var v2931 = 0 == C$$inline_128[0].length;
          if(v2931) {
            v2931 = 0 == I$$inline_129[0].length
          }
          if(v2931) {
            break
          }
          var v1315;
          if(0 == C$$inline_128[1].length) {
            v1315 = 0
          }else {
            v1315 = parseInt(C$$inline_128[1], 10)
          }
          c$$inline_119 = v1315;
          var v1316;
          if(0 == I$$inline_129[1].length) {
            v1316 = 0
          }else {
            v1316 = parseInt(I$$inline_129[1], 10)
          }
          var xb$$inline_130 = v1316;
          var v2936;
          if(c$$inline_119 < xb$$inline_130) {
            v2936 = -1
          }else {
            var v3898;
            if(c$$inline_119 > xb$$inline_130) {
              v3898 = 1
            }else {
              v3898 = 0
            }
            v2936 = v3898
          }
          var v1317 = v2936;
          if(!v1317) {
            var v3900;
            if((0 == C$$inline_128[2].length) < (0 == I$$inline_129[2].length)) {
              v3900 = -1
            }else {
              var v4494;
              if((0 == C$$inline_128[2].length) > (0 == I$$inline_129[2].length)) {
                v4494 = 1
              }else {
                v4494 = 0
              }
              v3900 = v4494
            }
            var v2937 = v3900;
            if(!v2937) {
              var v3901;
              if(C$$inline_128[2] < I$$inline_129[2]) {
                v3901 = -1
              }else {
                var v4496;
                if(C$$inline_128[2] > I$$inline_129[2]) {
                  v4496 = 1
                }else {
                  v4496 = 0
                }
                v3901 = v4496
              }
              v2937 = v3901
            }
            v1317 = v2937
          }
          c$$inline_119 = v1317;
          v1318 = 0 == c$$inline_119
        }while(v1318);
        g$$inline_123 = g$$inline_123 + 1;
        var v2939 = 0 == c$$inline_119;
        if(v2939) {
          v2939 = g$$inline_123 < f$$inline_122
        }
        v1319 = v2939
      }
      JSCompiler_inline_result$$80 = c$$inline_119;
      JSCompiler_temp$$77 = JAM.set(JSCompiler_temp_const$$79, JSCompiler_temp_const$$78, 0 <= JSCompiler_inline_result$$80, JAM.policy.p2)
    }
    return JSCompiler_temp$$77
  }
  function Qc() {
    var a$$222 = m$$3.document;
    var v1321;
    if(a$$222) {
      v1321 = a$$222.documentMode
    }else {
      v1321 = void 0
    }
    return v1321
  }
  function Rc() {
    var a$$221 = "";
    var b$$174;
    var v1322;
    var v3903 = Nc;
    if(v3903) {
      v3903 = m$$3.opera
    }
    if(v3903) {
      a$$221 = m$$3.opera.version;
      var v3905;
      if("function" == typeof a$$221) {
        v3905 = a$$221()
      }else {
        v3905 = a$$221
      }
      v1322 = a$$221 = v3905
    }else {
      var v3906;
      if(Oc) {
        v3906 = b$$174 = /rv\:([^\);]+)(\)|;)/
      }else {
        var v4499;
        if(N$$1) {
          v4499 = b$$174 = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/
        }else {
          var v4832 = Pc;
          if(v4832) {
            v4832 = b$$174 = /WebKit\/(\S+)/
          }
          v4499 = v4832
        }
        v3906 = v4499
      }
      v3906;
      var v3907 = b$$174;
      if(v3907) {
        var v4500;
        var v5088;
        if(m$$3.navigator) {
          v5088 = m$$3.navigator.userAgent
        }else {
          v5088 = null
        }
        if(a$$221 = b$$174.exec(v5088)) {
          v4500 = a$$221[1]
        }else {
          v4500 = ""
        }
        v3907 = a$$221 = v4500
      }
      v1322 = v3907
    }
    v1322;
    var v1323;
    var v3908 = N$$1;
    if(v3908) {
      b$$174 = Qc();
      v3908 = b$$174 > parseFloat(a$$221)
    }
    if(v3908) {
      v1323 = String(b$$174)
    }else {
      v1323 = a$$221
    }
    return v1323
  }
  function Mc() {
    Kc = Jc = Ic = Hc = !1;
    var a$$220;
    var v2942;
    if(m$$3.navigator) {
      v2942 = m$$3.navigator.userAgent
    }else {
      v2942 = null
    }
    if(a$$220 = v2942) {
      var b$$173 = m$$3.navigator;
      Hc = 0 == a$$220.lastIndexOf("Opera", 0);
      var v1325 = !Hc;
      if(v1325) {
        var v2943 = -1 != a$$220.indexOf("MSIE");
        if(!v2943) {
          v2943 = -1 != a$$220.indexOf("Trident")
        }
        v1325 = v2943
      }
      Ic = v1325;
      var v1326 = !Hc;
      if(v1326) {
        v1326 = -1 != a$$220.indexOf("WebKit")
      }
      Jc = v1326;
      var v1327 = !Hc;
      if(v1327) {
        var v2945 = !Jc;
        if(v2945) {
          var v3914 = !Ic;
          if(v3914) {
            v3914 = "Gecko" == b$$173.product
          }
          v2945 = v3914
        }
        v1327 = v2945
      }
      Kc = v1327
    }
    return
  }
  function Gc(a$$219, b$$172) {
    var c$$117;
    var d$$72;
    var e$$47 = 1;
    var v1330 = e$$47 < arguments.length;
    for(;v1330;) {
      d$$72 = arguments[e$$47];
      for(c$$117 in d$$72) {
        JAM.set(a$$219, c$$117, JAM.get(d$$72, c$$117, JAM.policy.p5), JAM.policy.p5)
      }
      var f$$26 = 0;
      var v1329 = f$$26 < Fc.length;
      for(;v1329;) {
        c$$117 = Fc[f$$26];
        var v3915 = Object.prototype.hasOwnProperty;
        var v2948 = JAM.call(v3915.call, v3915, [d$$72, c$$117]);
        if(v2948) {
          JAM.set(a$$219, c$$117, JAM.get(d$$72, c$$117, JAM.policy.p5), JAM.policy.p5)
        }
        f$$26 = f$$26 + 1;
        v1329 = f$$26 < Fc.length
      }
      e$$47 = e$$47 + 1;
      v1330 = e$$47 < arguments.length
    }
    return
  }
  function Ec(a$$218, b$$171) {
    var c$$116;
    for(c$$116 in a$$218) {
      introspect(JAM.policy.p4) {
        var v2951 = a$$218[c$$116]
      }
      if(v2951 == b$$171) {
        return!0
      }
    }
    return!1
  }
  function Dc(a$$217, b$$170, c$$115) {
    var d$$71;
    for(d$$71 in a$$217) {
      introspect(JAM.policy.p4) {
        var v1332 = a$$217[d$$71]
      }
      JAM.call(b$$170.call, b$$170, [c$$115, v1332, d$$71, a$$217])
    }
    return
  }
  function M$$1(a$$213, b$$166) {
    var v1333;
    if(void 0 !== a$$213) {
      v1333 = a$$213
    }else {
      v1333 = 0
    }
    this.x = v1333;
    var v1334;
    if(void 0 !== b$$166) {
      v1334 = b$$166
    }else {
      v1334 = 0
    }
    this.y = v1334;
    return
  }
  function L$$1(a$$212, b$$165, c$$113) {
    if(!c$$113) {
      var v2954;
      if(Ha$$1) {
        v2954 = "https"
      }else {
        v2954 = "http"
      }
      c$$113 = v2954
    }
    return[c$$113, "://", a$$212, b$$165].join("")
  }
  function Bc(a$$211) {
    var v1336 = a$$211.google_page_location;
    if(!v1336) {
      v1336 = a$$211.google_page_url
    }
    var b$$164 = v1336;
    var v1337 = "EMPTY" == b$$164;
    if(v1337) {
      b$$164 = a$$211.google_page_url
    }
    var JSCompiler_inline_result$$20;
    var a$$inline_115 = a$$211;
    a$$inline_115 = a$$inline_115.google_ad_channel;
    var v1338;
    if(zc.test(a$$inline_115)) {
      v1338 = !0
    }else {
      v1338 = !1
    }
    JSCompiler_inline_result$$20 = v1338;
    if(JSCompiler_inline_result$$20) {
      return!0
    }
    var v2958 = Ga$$1;
    if(!v2958) {
      v2958 = !b$$164
    }
    if(v2958) {
      return!1
    }
    b$$164 = b$$164.toString();
    var v1340;
    if(0 == b$$164.indexOf("http://")) {
      v1340 = b$$164 = b$$164.substring(7, b$$164.length)
    }else {
      var v2960 = 0 == b$$164.indexOf("https://");
      if(v2960) {
        v2960 = b$$164 = b$$164.substring(8, b$$164.length)
      }
      v1340 = v2960
    }
    v1340;
    a$$211 = b$$164.indexOf("/");
    var v1341 = -1 == a$$211;
    if(v1341) {
      a$$211 = b$$164.length
    }
    b$$164 = b$$164.substring(0, a$$211);
    b$$164 = b$$164.split(".");
    a$$211 = !1;
    var v1342 = 3 <= b$$164.length;
    if(v1342) {
      var v3922 = b$$164.length - 3;
      introspect(JAM.policy.p4) {
        var v2963 = b$$164[v3922]
      }
      a$$211 = v2963 in yc
    }
    var v1343 = 2 <= b$$164.length;
    if(v1343) {
      var v2965 = a$$211;
      if(!v2965) {
        var v4504 = b$$164.length - 2;
        introspect(JAM.policy.p4) {
          var v3923 = b$$164[v4504]
        }
        v2965 = v3923 in yc
      }
      a$$211 = v2965
    }
    return a$$211
  }
  function xc() {
    var a$$209 = J$$1();
    var v1344;
    if(a$$209) {
      v1344 = a$$209.Ka()
    }else {
      v1344 = ""
    }
    return v1344
  }
  function J$$1() {
    if(uc) {
    }else {
      var a$$inline_110 = H$$1();
      var b$$inline_111 = new E$$1;
      var c$$inline_112 = 0;
      var d$$inline_113 = a$$inline_110.defaultBucket.length;
      var v1348 = c$$inline_112 < d$$inline_113;
      for(;v1348;) {
        var v1346 = b$$inline_111.defaultBucket;
        var v2966 = a$$inline_110.defaultBucket;
        introspect(JAM.policy.p4) {
          var v1347 = v2966[c$$inline_112]
        }
        JAM.call(v1346.push, v1346, [v1347]);
        c$$inline_112 = c$$inline_112 + 1;
        v1348 = c$$inline_112 < d$$inline_113
      }
      x$$51(a$$inline_110.layers, JAM.call(r$$2, null, [E$$1.prototype.Ga, b$$inline_111]));
      uc = b$$inline_111
    }
    return uc
  }
  function H$$1() {
    if(wc()) {
      var a$$208 = tc;
      return a$$208
    }
    a$$208 = mc();
    var JSCompiler_inline_result$$30;
    var b$$inline_108 = new E$$1(1, 3, 4, 7, 10, 12, 13, 14, 16, 17, 18, 19);
    JSCompiler_inline_result$$30 = JAM.set(a$$208.S, nc(3), b$$inline_108, JAM.policy.p2);
    return tc = JSCompiler_inline_result$$30
  }
  function wc() {
    var v2968 = tc;
    if(v2968) {
      v2968 = vc(tc)
    }
    if(v2968) {
      return!0
    }
    var a$$207 = mc();
    var v1355;
    var v3926 = a$$207 = G$$1(a$$207, 3);
    if(v3926) {
      var v4505 = gb$$1(a$$207);
      if(v4505) {
        var v4837 = hb$$1(a$$207, E$$1.prototype);
        if(v4837) {
          v4837 = vc(a$$207)
        }
        v4505 = v4837
      }
      v3926 = v4505
    }
    if(v3926) {
      tc = a$$207;
      v1355 = !0
    }else {
      v1355 = !1
    }
    return v1355
  }
  function vc(a$$206) {
    try {
      return a$$206.statusz()
    }catch(b$$163) {
      return!1
    }
    return
  }
  function F$$1(a$$202, b$$159, c$$112) {
    a$$202 = a$$202.S;
    b$$159 = nc(b$$159);
    var v1356;
    var v3927 = void 0;
    introspect(JAM.policy.p4) {
      var v3928 = a$$202[b$$159]
    }
    if(v3927 === v3928) {
      v1356 = JAM.set(a$$202, b$$159, c$$112, JAM.policy.p2)
    }else {
      introspect(JAM.policy.p4) {
        v1356 = a$$202[b$$159]
      }
    }
    return v1356
  }
  function G$$1(a$$200, b$$157) {
    var c$$110 = nc(b$$157);
    var v1357 = a$$200.S;
    introspect(JAM.policy.p4) {
      return c$$110 = v1357[c$$110]
    }
  }
  function nc(a$$199) {
    switch(a$$199) {
      case 3:
        return"google_exp_persistent";
      case 4:
        return"google_num_sdo_slots";
      case 5:
        return"google_num_0ad_slots";
      case 6:
        return"google_num_ad_slots";
      case 7:
        return"google_correlator";
      case 8:
        return"google_prev_ad_formats_by_region";
      case 9:
        return"google_prev_ad_slotnames_by_region";
      case 10:
        return"google_num_slots_by_channel";
      case 11:
        return"google_viewed_host_channels";
      case 12:
        return"google_num_slot_to_show";
      case 14:
        return"gaGlobal"
    }
    return
  }
  function mc(a$$197) {
    var v1358;
    var v3929 = a$$197;
    if(v3929) {
      introspect(JAM.policy.p4) {
        v3929 = kc[a$$197]
      }
    }
    if(v3929) {
      v1358 = a$$197
    }else {
      var v2971;
      if(B$$2) {
        v2971 = "google_persistent_state_async"
      }else {
        v2971 = "google_persistent_state"
      }
      v1358 = v2971
    }
    a$$197 = v1358;
    introspect(JAM.policy.p4) {
      var v1359 = lc[a$$197]
    }
    if(v1359) {
      introspect(JAM.policy.p4) {
        return lc[a$$197]
      }
    }
    if("google_persistent_state_async" == a$$197) {
      var b$$156 = D$$1();
      var c$$109 = {}
    }else {
      c$$109 = b$$156 = D$$1()
    }
    introspect(JAM.policy.p4) {
      var d$$70 = b$$156[a$$197]
    }
    var v1361;
    var v3930 = "object" != typeof d$$70;
    if(!v3930) {
      v3930 = "object" != typeof d$$70.S
    }
    if(v3930) {
      var v2973 = b$$156;
      var v2974 = a$$197;
      var v5204 = new jc(c$$109);
      v1361 = JAM.set(v2973, v2974, JAM.set(lc, a$$197, v5204, JAM.policy.p2), JAM.policy.p2)
    }else {
      v1361 = JAM.set(lc, a$$197, d$$70, JAM.policy.p2)
    }
    return v1361
  }
  function jc(a$$196) {
    this.S = a$$196;
    F$$1(this, 3, null);
    F$$1(this, 4, 0);
    F$$1(this, 5, 0);
    F$$1(this, 6, 0);
    F$$1(this, 7, (new Date).getTime());
    F$$1(this, 8, {});
    F$$1(this, 9, {});
    F$$1(this, 10, {});
    F$$1(this, 11, []);
    F$$1(this, 12, 0);
    F$$1(this, 14, {});
    return
  }
  function hc() {
    if(gc) {
    }else {
      var a$$inline_103 = window;
      a$$inline_103 = dc(a$$inline_103, !0);
      gc = a$$inline_103.win
    }
    return gc
  }
  function dc(a$$193, b$$155) {
    var c$$108 = 0;
    var d$$69 = a$$193;
    var e$$46 = 0;
    var v1365 = a$$193 != a$$193.parent;
    for(;v1365;) {
      a$$193 = a$$193.parent;
      e$$46 = e$$46 + 1;
      if(Kb(a$$193)) {
        d$$69 = a$$193;
        c$$108 = e$$46
      }else {
        if(b$$155) {
          break
        }
      }
      v1365 = a$$193 != a$$193.parent
    }
    return{win:d$$69, level:c$$108}
  }
  function E$$1(a$$185) {
    this.defaultBucket = [];
    this.layers = {};
    var b$$148 = 0;
    var c$$105 = arguments.length;
    var v1368 = b$$148 < c$$105;
    for(;v1368;) {
      var v1366 = this.layers;
      introspect(JAM.policy.p4) {
        var v1367 = arguments[b$$148]
      }
      JAM.set(v1366, v1367, "", JAM.policy.p2);
      b$$148 = b$$148 + 1;
      v1368 = b$$148 < c$$105
    }
    return
  }
  function bc(a$$184, b$$147, c$$104) {
    var v1369;
    if(2 >= arguments.length) {
      var v2979 = Xb.slice;
      v1369 = JAM.call(v2979.call, v2979, [a$$184, b$$147])
    }else {
      var v2980 = Xb.slice;
      v1369 = JAM.call(v2980.call, v2980, [a$$184, b$$147, c$$104])
    }
    return v1369
  }
  function ac(a$$183) {
    var b$$146 = a$$183.length;
    if(0 < b$$146) {
      var c$$103 = Array(b$$146);
      var d$$67 = 0;
      var v1370 = d$$67 < b$$146;
      for(;v1370;) {
        c$$103[d$$67] = a$$183[d$$67];
        d$$67 = d$$67 + 1;
        v1370 = d$$67 < b$$146
      }
      return c$$103
    }
    return[]
  }
  function $b(a$$182, b$$145) {
    return 0 <= JAM.call(Yb, null, [a$$182, b$$145])
  }
  function Wb(a$$177) {
    function v48() {
      a$$177.document.close();
      return
    }
    if(B$$2) {
      var v2982 = a$$177 != a$$177.parent;
      if(v2982) {
        var v3933 = a$$177.google_async_iframe_close;
        if(v3933) {
          a$$177.setTimeout(v48, 0)
        }
      }
    }
    return
  }
  function D$$1() {
    var v2983 = B$$2;
    if(v2983) {
      v2983 = !Kb(Ob)
    }
    if(v2983) {
      var a$$170 = "." + v$$1.domain;
      var v2984 = 2 < a$$170.split(".").length;
      if(v2984) {
        v2984 = !Kb(Ob)
      }
      var v1375 = v2984;
      for(;v1375;) {
        v$$1.domain = a$$170 = a$$170.substr(a$$170.indexOf(".") + 1);
        Ob = window.parent;
        var v2986 = 2 < a$$170.split(".").length;
        if(v2986) {
          v2986 = !Kb(Ob)
        }
        v1375 = v2986
      }
      var v1376 = Kb(Ob);
      if(!v1376) {
        Ob = window
      }
    }
    return Ob
  }
  function Mb(a$$168) {
    function v49() {
      if(a$$168) {
        var b$$133 = a$$168;
        a$$168 = null;
        JAM.call(b$$133.apply, b$$133, [null, arguments])
      }
      return
    }
    return v49
  }
  function Lb(a$$167) {
    return"google_ads_frame" + a$$167
  }
  function Kb(a$$166) {
    try {
      var v1378 = !!a$$166.location.href;
      if(!v1378) {
        v1378 = "" === a$$166.location.href
      }
      return v1378
    }catch(b$$132) {
      return!1
    }
    return
  }
  function Hb(a$$163) {
    a$$163 = (new Date).getTime() - a$$163;
    var v1380;
    if(1E4 > a$$163) {
      v1380 = a$$163 + ""
    }else {
      v1380 = "M"
    }
    return v1380
  }
  function Fb(a$$162, b$$130, c$$90) {
    b$$130 = [b$$130.google_ad_slot, b$$130.google_ad_format, b$$130.google_ad_type, b$$130.google_ad_width, b$$130.google_ad_height];
    if(c$$90) {
      var JSCompiler_inline_result$$22;
      var a$$inline_99 = a$$162;
      var b$$inline_100 = [];
      var c$$inline_101 = 0;
      var v2993 = a$$inline_99;
      if(v2993) {
        v2993 = 25 > c$$inline_101
      }
      var v1387 = v2993;
      for(;v1387;) {
        var v3942 = 9 != a$$inline_99.nodeType;
        if(v3942) {
          v3942 = a$$inline_99.id
        }
        var v2994 = v3942;
        if(!v2994) {
          v2994 = ""
        }
        JAM.call(b$$inline_100.push, b$$inline_100, [v2994]);
        a$$inline_99 = a$$inline_99.parentNode;
        c$$inline_101 = c$$inline_101 + 1;
        var v2995 = a$$inline_99;
        if(v2995) {
          v2995 = 25 > c$$inline_101
        }
        v1387 = v2995
      }
      JSCompiler_inline_result$$22 = b$$inline_100.join();
      var v1388 = a$$162 = JSCompiler_inline_result$$22;
      if(v1388) {
        JAM.call(b$$130.push, b$$130, [a$$162])
      }
    }else {
      JAM.call(b$$130.push, b$$130, [Db(a$$162)]);
      JAM.call(b$$130.push, b$$130, [Eb(w$$6)])
    }
    return Ab(b$$130.join(":")).toString()
  }
  function Eb(a$$160) {
    var b$$128 = [];
    if(a$$160) {
      try {
        var c$$88 = a$$160.parent;
        var d$$59 = 0;
        var v2999 = c$$88;
        if(v2999) {
          var v3944 = c$$88 != a$$160;
          if(v3944) {
            v3944 = 25 > d$$59
          }
          v2999 = v3944
        }
        var v1392 = v2999;
        for(;v1392;) {
          var e$$42 = c$$88.frames;
          var f$$23 = 0;
          var v1391 = f$$23 < e$$42.length;
          for(;v1391;) {
            introspect(JAM.policy.p4) {
              var v3001 = e$$42[f$$23]
            }
            if(a$$160 == v3001) {
              JAM.call(b$$128.push, b$$128, [f$$23]);
              break
            }
            f$$23 = f$$23 + 1;
            v1391 = f$$23 < e$$42.length
          }
          a$$160 = c$$88;
          c$$88 = a$$160.parent;
          d$$59 = d$$59 + 1;
          var v3003 = c$$88;
          if(v3003) {
            var v3945 = c$$88 != a$$160;
            if(v3945) {
              v3945 = 25 > d$$59
            }
            v3003 = v3945
          }
          v1392 = v3003
        }
      }catch(g$$18) {
      }
    }
    return b$$128.join()
  }
  function Db(a$$159) {
    var b$$127 = [];
    var c$$87 = 0;
    var v3004 = a$$159;
    if(v3004) {
      v3004 = 25 > c$$87
    }
    var v1397 = v3004;
    for(;v1397;) {
      var v1393 = 9 != a$$159.nodeType;
      if(v1393) {
        v1393 = a$$159.id
      }
      var d$$58 = v1393;
      var v1394;
      if(d$$58) {
        v1394 = "/" + d$$58
      }else {
        v1394 = ""
      }
      d$$58 = v1394;
      var v1395 = a$$159.nodeName;
      if(v1395) {
        v1395 = a$$159.nodeName.toLowerCase()
      }
      var e$$41 = v1395;
      JAM.call(b$$127.push, b$$127, [e$$41 + d$$58 + Cb(a$$159)]);
      a$$159 = a$$159.parentElement;
      c$$87 = c$$87 + 1;
      var v3009 = a$$159;
      if(v3009) {
        v3009 = 25 > c$$87
      }
      v1397 = v3009
    }
    return b$$127.join()
  }
  function Cb(a$$158) {
    var b$$126 = a$$158.parentElement;
    var c$$86 = a$$158.nodeName.toLowerCase();
    if(b$$126) {
      b$$126 = b$$126.childNodes;
      var d$$57 = 0;
      var e$$40 = 0;
      var v1401 = e$$40 < b$$126.length;
      for(;v1401;) {
        introspect(JAM.policy.p4) {
          var f$$22 = b$$126[e$$40]
        }
        var v3011 = f$$22.nodeName;
        if(v3011) {
          v3011 = f$$22.nodeName.toLowerCase() == c$$86
        }
        if(v3011) {
          if(a$$158 == f$$22) {
            return"." + d$$57
          }
          d$$57 = d$$57 + 1
        }
        e$$40 = e$$40 + 1;
        v1401 = e$$40 < b$$126.length
      }
    }
    return""
  }
  function Ab(a$$156, b$$124) {
    var c$$84 = a$$156.length;
    if(0 == c$$84) {
      return 0
    }
    var d$$56 = b$$124 || 305419896;
    var e$$39 = 0;
    var v1404 = e$$39 < c$$84;
    for(;v1404;) {
      var f$$21 = a$$156.charCodeAt(e$$39);
      d$$56 = d$$56 ^ (d$$56 << 5) + (d$$56 >> 2) + f$$21 & 4294967295;
      e$$39 = e$$39 + 1;
      v1404 = e$$39 < c$$84
    }
    var v1405;
    if(0 < d$$56) {
      v1405 = d$$56
    }else {
      v1405 = 4294967296 + d$$56
    }
    return v1405
  }
  function yb(a$$154) {
    var b$$123 = "google_unique_id";
    introspect(JAM.policy.p4) {
      a$$154 = a$$154[b$$123]
    }
    var v1406;
    if("number" == typeof a$$154) {
      v1406 = a$$154
    }else {
      v1406 = 0
    }
    return v1406
  }
  function wb(a$$153) {
    var b$$122 = "google_unique_id";
    var v1407;
    introspect(JAM.policy.p4) {
      var v3016 = a$$153[b$$122]
    }
    if(v3016) {
      introspect(JAM.policy.p4) {
        var v3949 = a$$153[b$$122]
      }
      v1407 = JAM.set(a$$153, b$$122, v3949 + 1, JAM.policy.p2)
    }else {
      v1407 = JAM.set(a$$153, b$$122, 1, JAM.policy.p2)
    }
    v1407;
    introspect(JAM.policy.p4) {
      return a$$153[b$$122]
    }
  }
  function vb(a$$152, b$$121) {
    if(!(1E-4 > Math.random())) {
      var c$$83 = Math.random();
      if(c$$83 < b$$121) {
        try {
          var d$$55 = new Uint16Array(1);
          var v1408 = window.crypto;
          JAM.call(v1408.getRandomValues, v1408, [d$$55]);
          c$$83 = d$$55[0] / 65536
        }catch(e$$38) {
          c$$83 = Math.random()
        }
        c$$83 = JAM.call(Math.floor, Math, [c$$83 * a$$152.length]);
        introspect(JAM.policy.p4) {
          return a$$152[c$$83]
        }
      }
    }
    return null
  }
  function ob$$1(a$$151) {
    a$$151 = a$$151 || window;
    try {
      return a$$151.history.length
    }catch(b$$120) {
      return 0
    }
    return
  }
  function nb$$1(a$$150, b$$119) {
    var v1414 = a$$150.google_image_requests;
    if(!v1414) {
      a$$150.google_image_requests = []
    }
    var v1415 = a$$150.document;
    var c$$82 = JAM.call(v1415.createElement, v1415, ["img"]);
    c$$82.src = b$$119;
    var v1416 = a$$150.google_image_requests;
    JAM.call(v1416.push, v1416, [c$$82]);
    return
  }
  function mb$$1(a$$149) {
    function v50() {
      a$$149.google_onload_fired = !0;
      return
    }
    var v1417 = "google_onload_fired" in a$$149;
    if(!v1417) {
      a$$149.google_onload_fired = !1;
      y$$32(a$$149, "load", v50)
    }
    return
  }
  function A$$1(a$$148, b$$118, c$$81, d$$54) {
    var v1418;
    if(a$$148.removeEventListener) {
      var v4517 = d$$54;
      if(!v4517) {
        v4517 = !1
      }
      a$$148.removeEventListener(b$$118, c$$81, v4517);
      v1418 = !0
    }else {
      var v3021;
      if(a$$148.detachEvent) {
        JAM.call(a$$148.detachEvent, a$$148, ["on" + b$$118, c$$81]);
        v3021 = !0
      }else {
        v3021 = !1
      }
      v1418 = v3021
    }
    return v1418
  }
  function lb$$1(a$$147, b$$117, c$$80, d$$53, e$$37) {
    c$$80 = JAM.call(r$$2, null, [d$$53, c$$80]);
    var v1419;
    if(y$$32(a$$147, b$$117, c$$80, e$$37)) {
      v1419 = c$$80
    }else {
      v1419 = null
    }
    return v1419
  }
  function y$$32(a$$146, b$$116, c$$79, d$$52) {
    var v1420;
    if(a$$146.addEventListener) {
      var v4519 = d$$52;
      if(!v4519) {
        v4519 = !1
      }
      a$$146.addEventListener(b$$116, c$$79, v4519);
      v1420 = !0
    }else {
      var v3024;
      if(a$$146.attachEvent) {
        JAM.call(a$$146.attachEvent, a$$146, ["on" + b$$116, c$$79]);
        v3024 = !0
      }else {
        v3024 = !1
      }
      v1420 = v3024
    }
    return v1420
  }
  function ib$$1(a$$145, b$$115) {
    if(2 > arguments.length) {
      return a$$145.length
    }
    var c$$78 = 1;
    var d$$51 = arguments.length;
    var v1423 = c$$78 < d$$51;
    for(;v1423;) {
      introspect(JAM.policy.p4) {
        var v1422 = arguments[c$$78]
      }
      JAM.call(a$$145.push, a$$145, [v1422]);
      c$$78 = c$$78 + 1;
      v1423 = c$$78 < d$$51
    }
    return a$$145.length
  }
  function hb$$1(a$$144, b$$113) {
    function v51(b$$114, e$$36) {
      var v3027 = c$$77;
      if(v3027) {
        var v3955 = e$$36 in a$$144;
        if(v3955) {
          var v4521 = typeof b$$114;
          introspect(JAM.policy.p4) {
            var v4841 = a$$144[e$$36]
          }
          v3955 = v4521 == typeof v4841
        }
        v3027 = v3955
      }
      var v1424 = v3027;
      if(!v1424) {
        c$$77 = !1
      }
      return
    }
    if(!a$$144) {
      return!1
    }
    var c$$77 = !0;
    x$$51(b$$113, v51);
    return c$$77
  }
  function gb$$1(a$$143) {
    var v1426 = !!a$$143;
    if(v1426) {
      var v3030 = "object" == typeof a$$143;
      if(!v3030) {
        v3030 = "function" == typeof a$$143
      }
      v1426 = v3030
    }
    return v1426
  }
  function fb$$1(a$$142) {
    var v1427 = !!a$$142;
    if(v1427) {
      var v3032 = "function" == typeof a$$142;
      if(v3032) {
        v3032 = !!a$$142.call
      }
      v1427 = v3032
    }
    return v1427
  }
  function x$$51(a$$141, b$$112) {
    var c$$76;
    for(c$$76 in a$$141) {
      var v3033 = Object.prototype.hasOwnProperty;
      var v1428 = JAM.call(v3033.call, v3033, [a$$141, c$$76]);
      if(v1428) {
        introspect(JAM.policy.p4) {
          var v3034 = a$$141[c$$76]
        }
        JAM.call(b$$112.call, b$$112, [null, v3034, c$$76, a$$141])
      }
    }
    return
  }
  function u$$2(a$$139, b$$110) {
    this.width = a$$139;
    this.height = b$$110;
    return
  }
  function eb$$1(a$$137, b$$108) {
    function v52(a$$138, b$$109, c$$74) {
      return b$$109 + c$$74.toUpperCase()
    }
    var v1431;
    if(p$$1(b$$108)) {
      v1431 = String(b$$108).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }else {
      v1431 = "\\s"
    }
    var c$$73 = v1431;
    var v1432;
    if(c$$73) {
      v1432 = "|[" + c$$73 + "]+"
    }else {
      v1432 = ""
    }
    c$$73 = v1432;
    c$$73 = RegExp("(^" + c$$73 + ")([a-z])", "g");
    return a$$137.replace(c$$73, v52)
  }
  function db$$1(a$$135) {
    function v53(a$$136, c$$72) {
      return c$$72.toUpperCase()
    }
    return String(a$$135).replace(/\-([a-z])/g, v53)
  }
  function ab$$1(a$$131) {
    a$$131 = String(a$$131);
    if(a$$131.quote) {
      return a$$131.quote()
    }
    var b$$104 = ['"'];
    var c$$69 = 0;
    var v1443 = c$$69 < a$$131.length;
    for(;v1443;) {
      var d$$49 = a$$131.charAt(c$$69);
      var e$$34 = d$$49.charCodeAt(0);
      var JSCompiler_temp_const$$25 = b$$104;
      var JSCompiler_temp_const$$24 = c$$69 + 1;
      var JSCompiler_temp$$26;
      introspect(JAM.policy.p4) {
        var v1442 = JSCompiler_temp$$26 = Ya$$1[d$$49]
      }
      if(v1442) {
      }else {
        var JSCompiler_temp$$27;
        var v3040 = 31 < e$$34;
        if(v3040) {
          v3040 = 127 > e$$34
        }
        if(v3040) {
          JSCompiler_temp$$27 = d$$49
        }else {
          JSCompiler_inline_label_$a$$1_98: {
            var a$$inline_95 = d$$49;
            if(a$$inline_95 in Za$$1) {
              introspect(JAM.policy.p4) {
                JSCompiler_temp$$27 = Za$$1[a$$inline_95]
              }
              break JSCompiler_inline_label_$a$$1_98
            }
            if(a$$inline_95 in Ya$$1) {
              JSCompiler_temp$$27 = JAM.set(Za$$1, a$$inline_95, JAM.get(Ya$$1, a$$inline_95, JAM.policy.p5), JAM.policy.p5);
              break JSCompiler_inline_label_$a$$1_98
            }
            var b$$inline_96 = a$$inline_95;
            var c$$inline_97 = a$$inline_95.charCodeAt(0);
            var v3041 = 31 < c$$inline_97;
            if(v3041) {
              v3041 = 127 > c$$inline_97
            }
            if(v3041) {
              b$$inline_96 = a$$inline_95
            }else {
              if(256 > c$$inline_97) {
                b$$inline_96 = "\\x";
                var v3963 = 16 > c$$inline_97;
                if(!v3963) {
                  v3963 = 256 < c$$inline_97
                }
                if(v3963) {
                  b$$inline_96 = b$$inline_96 + "0"
                }
              }else {
                b$$inline_96 = "\\u";
                var v3042 = 4096 > c$$inline_97;
                if(v3042) {
                  b$$inline_96 = b$$inline_96 + "0"
                }
              }
              b$$inline_96 = b$$inline_96 + c$$inline_97.toString(16).toUpperCase()
            }
            JSCompiler_temp$$27 = JAM.set(Za$$1, a$$inline_95, b$$inline_96, JAM.policy.p2)
          }
        }
        JSCompiler_temp$$26 = JSCompiler_temp$$27
      }
      JSCompiler_temp_const$$25[JSCompiler_temp_const$$24] = JSCompiler_temp$$26;
      c$$69 = c$$69 + 1;
      v1443 = c$$69 < a$$131.length
    }
    JAM.call(b$$104.push, b$$104, ['"']);
    return b$$104.join("")
  }
  function Ua$$1(a$$128) {
    function v54(a$$129, c$$67) {
      switch(c$$67) {
        case "amp":
          return"&";
        case "lt":
          return"<";
        case "gt":
          return">";
        case "quot":
          return'"';
        default:
          if("#" == c$$67.charAt(0)) {
            var d$$47 = Number("0" + c$$67.substr(1));
            if(!isNaN(d$$47)) {
              return String.fromCharCode(d$$47)
            }
          }
          return a$$129
      }
      return
    }
    return a$$128.replace(/&([^;]+);/g, v54)
  }
  function Ta$$1(a$$126, b$$101) {
    function v55(a$$127, b$$102) {
      introspect(JAM.policy.p4) {
        var g$$16 = c$$66[a$$127]
      }
      if(g$$16) {
        return g$$16
      }
      if("#" == b$$102.charAt(0)) {
        var h$$12 = Number("0" + b$$102.substr(1));
        var v1448 = isNaN(h$$12);
        if(!v1448) {
          g$$16 = String.fromCharCode(h$$12)
        }
      }
      if(!g$$16) {
        JAM.set(d$$46, "innerHTML", a$$127 + " ");
        g$$16 = d$$46.firstChild.nodeValue.slice(0, -1)
      }
      return JAM.set(c$$66, a$$127, g$$16, JAM.policy.p2)
    }
    var c$$66 = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'};
    var d$$46;
    var v1450;
    if(b$$101) {
      v1450 = JAM.call(b$$101.createElement, b$$101, ["div"])
    }else {
      v1450 = JAM.call(document.createElement, document, ["div"])
    }
    d$$46 = v1450;
    return a$$126.replace(Wa$$1, v55)
  }
  function Sa$$1(a$$124, b$$100) {
    if(b$$100) {
      return a$$124.replace(Na$$1, "&amp;").replace(Oa$$1, "&lt;").replace(Pa$$1, "&gt;").replace(Qa$$1, "&quot;")
    }
    if(!Ra$$1.test(a$$124)) {
      return a$$124
    }
    var v1453 = -1 != a$$124.indexOf("&");
    if(v1453) {
      a$$124 = a$$124.replace(Na$$1, "&amp;")
    }
    var v1454 = -1 != a$$124.indexOf("<");
    if(v1454) {
      a$$124 = a$$124.replace(Oa$$1, "&lt;")
    }
    var v1455 = -1 != a$$124.indexOf(">");
    if(v1455) {
      a$$124 = a$$124.replace(Pa$$1, "&gt;")
    }
    var v1456 = -1 != a$$124.indexOf('"');
    if(v1456) {
      a$$124 = a$$124.replace(Qa$$1, "&quot;")
    }
    return a$$124
  }
  function La$$1(a$$123) {
    var v1457;
    if(a$$123) {
      v1457 = "googlesyndication"
    }else {
      v1457 = ma$$1("", "googlesyndication")
    }
    return v1457
  }
  function Ja$$1() {
    return ma$$1("", "doubleclick")
  }
  function Da$$1() {
    var a$$122 = "r20131120";
    return a$$122
  }
  function ma$$1(a$$121, b$$99) {
    if(!a$$121) {
      return b$$99
    }
    var c$$65 = a$$121.match(la$$1);
    var v1459;
    if(c$$65) {
      v1459 = c$$65[0]
    }else {
      v1459 = b$$99
    }
    return v1459
  }
  function ka$$1(a$$120, b$$98) {
    var v1460;
    if(/^true$/.test(a$$120)) {
      v1460 = !0
    }else {
      var v3059;
      if(/^false$/.test(a$$120)) {
        v3059 = !1
      }else {
        v3059 = b$$98
      }
      v1460 = v3059
    }
    return v1460
  }
  function t$$1(a$$119, b$$97) {
    var c$$64 = parseFloat(a$$119);
    var v1461;
    var v3968 = isNaN(c$$64);
    if(!v3968) {
      var v4526 = 1 < c$$64;
      if(!v4526) {
        v4526 = 0 > c$$64
      }
      v3968 = v4526
    }
    if(v3968) {
      v1461 = b$$97
    }else {
      v1461 = c$$64
    }
    return v1461
  }
  function ja$$1(a$$118, b$$96) {
    function c$$63() {
      return
    }
    c$$63.prototype = b$$96.prototype;
    a$$118.md = b$$96.prototype;
    var v1462 = a$$118;
    var v5205 = new c$$63;
    v1462.prototype = v5205;
    a$$118.prototype.constructor = a$$118;
    return
  }
  function ga$$1(a$$115, b$$92) {
    function v56() {
      var b$$93 = c$$60.slice();
      var v1464 = b$$93.push;
      JAM.call(v1464.apply, v1464, [b$$93, arguments]);
      return JAM.call(a$$115.apply, a$$115, [this, b$$93])
    }
    var v1465 = Array.prototype.slice;
    var c$$60 = JAM.call(v1465.call, v1465, [arguments, 1]);
    return v56
  }
  function r$$2(a$$114, b$$91, c$$59) {
    var v1466;
    var v3969 = Function.prototype.bind;
    if(v3969) {
      v3969 = -1 != Function.prototype.bind.toString().indexOf("native code")
    }
    if(v3969) {
      v1466 = ea$$1
    }else {
      v1466 = fa$$1
    }
    r$$2 = v1466;
    return JAM.call(r$$2.apply, r$$2, [null, arguments])
  }
  function fa$$1(a$$113, b$$90, c$$57) {
    function v58() {
      return JAM.call(a$$113.apply, a$$113, [b$$90, arguments])
    }
    function v57() {
      var v1467 = Array.prototype.slice;
      var c$$58 = JAM.call(v1467.call, v1467, [arguments]);
      var v1468 = Array.prototype.unshift;
      JAM.call(v1468.apply, v1468, [c$$58, d$$45]);
      return JAM.call(a$$113.apply, a$$113, [b$$90, c$$58])
    }
    if(!a$$113) {
      throw Error();
    }
    if(2 < arguments.length) {
      var v1470 = Array.prototype.slice;
      var d$$45 = JAM.call(v1470.call, v1470, [arguments, 2]);
      return v57
    }
    return v58
  }
  function ea$$1(a$$112, b$$89, c$$56) {
    var v1472 = a$$112.call;
    return JAM.call(v1472.apply, v1472, [a$$112.bind, arguments])
  }
  function da$$1(a$$111) {
    var b$$88 = typeof a$$111;
    var v3068 = "object" == b$$88;
    if(v3068) {
      v3068 = null != a$$111
    }
    var v1474 = v3068;
    if(!v1474) {
      v1474 = "function" == b$$88
    }
    return v1474
  }
  function q$$3(a$$110) {
    return"number" == typeof a$$110
  }
  function p$$1(a$$109) {
    return"string" == typeof a$$109
  }
  function ca$$1(a$$108) {
    var b$$87 = ba$$1(a$$108);
    var v1477 = "array" == b$$87;
    if(!v1477) {
      var v3070 = "object" == b$$87;
      if(v3070) {
        v3070 = "number" == typeof a$$108.length
      }
      v1477 = v3070
    }
    return v1477
  }
  function n$$2(a$$107) {
    return"array" == ba$$1(a$$107)
  }
  function ba$$1(a$$106) {
    var b$$86 = typeof a$$106;
    if("object" == b$$86) {
      if(a$$106) {
        if(a$$106 instanceof Array) {
          return"array"
        }
        if(a$$106 instanceof Object) {
          return b$$86
        }
        var v1481 = Object.prototype.toString;
        var c$$55 = JAM.call(v1481.call, v1481, [a$$106]);
        if("[object Window]" == c$$55) {
          return"object"
        }
        var v3073 = "[object Array]" == c$$55;
        if(!v3073) {
          var v3971 = "number" == typeof a$$106.length;
          if(v3971) {
            var v4532 = "undefined" != typeof a$$106.splice;
            if(v4532) {
              var v4846 = "undefined" != typeof a$$106.propertyIsEnumerable;
              if(v4846) {
                v4846 = !a$$106.propertyIsEnumerable("splice")
              }
              v4532 = v4846
            }
            v3971 = v4532
          }
          v3073 = v3971
        }
        if(v3073) {
          return"array"
        }
        var v3074 = "[object Function]" == c$$55;
        if(!v3074) {
          var v3973 = "undefined" != typeof a$$106.call;
          if(v3973) {
            var v4534 = "undefined" != typeof a$$106.propertyIsEnumerable;
            if(v4534) {
              v4534 = !a$$106.propertyIsEnumerable("call")
            }
            v3973 = v4534
          }
          v3074 = v3973
        }
        if(v3074) {
          return"function"
        }
      }else {
        return"null"
      }
    }else {
      var v3075 = "function" == b$$86;
      if(v3075) {
        v3075 = "undefined" == typeof a$$106.call
      }
      if(v3075) {
        return"object"
      }
    }
    return b$$86
  }
  function aa$$1(a$$105, b$$85, c$$54) {
    a$$105 = a$$105.split(".");
    c$$54 = c$$54 || m$$3;
    var v1487 = a$$105[0] in c$$54;
    if(!v1487) {
      var v3077 = !c$$54.execScript;
      if(!v3077) {
        JAM.call(c$$54.execScript, c$$54, ["var " + a$$105[0]])
      }
    }
    var d$$44;
    var v3079 = a$$105.length;
    if(v3079) {
      v3079 = d$$44 = a$$105.shift()
    }
    var v1489 = v3079;
    for(;v1489;) {
      var v1488;
      var v3979 = a$$105.length;
      if(!v3979) {
        v3979 = void 0 === b$$85
      }
      if(v3979) {
        var v3080;
        introspect(JAM.policy.p4) {
          var v3980 = c$$54[d$$44]
        }
        if(v3980) {
          introspect(JAM.policy.p4) {
            v3080 = c$$54[d$$44]
          }
        }else {
          v3080 = JAM.set(c$$54, d$$44, {}, JAM.policy.p2)
        }
        v1488 = c$$54 = v3080
      }else {
        v1488 = JAM.set(c$$54, d$$44, b$$85, JAM.policy.p2)
      }
      v1488;
      var v3082 = a$$105.length;
      if(v3082) {
        v3082 = d$$44 = a$$105.shift()
      }
      v1489 = v3082
    }
    return
  }
  function jb$$1(a$$70, b$$56, c$$33, d$$25) {
    function v60() {
      JAM.call(f$$10.appendChild, f$$10, [e$$20]);
      return
    }
    function v59() {
      var v3083 = "complete" == e$$20.readyState;
      if(!v3083) {
        v3083 = "loaded" == e$$20.readyState
      }
      if(v3083) {
        try {
          b$$56()
        }catch(a$$71) {
        }
      }
      return
    }
    d$$25 = d$$25 || document;
    var e$$20 = JAM.call(d$$25.createElement, d$$25, ["script"]);
    e$$20.type = "text/javascript";
    if(b$$56) {
      var v3084;
      if(void 0 !== e$$20.onreadystatechange) {
        v3084 = JAM.set(e$$20, "onreadystatechange", v59)
      }else {
        v3084 = JAM.set(e$$20, "onload", b$$56)
      }
      v3084
    }
    if(c$$33) {
      e$$20.id = c$$33
    }
    e$$20.src = a$$70;
    var f$$10 = JAM.call(JAM.get(d$$25, "getElementsByTagName", JAM.policy.p6), d$$25, ["head"])[0];
    if(!f$$10) {
      return!1
    }
    try {
      window.setTimeout(v60, 0)
    }catch(g$$8) {
      return!1
    }
    return!0
  }
  function rb$$1() {
    var v3085;
    if("msie" in qb$$1) {
      v3085 = qb$$1["msie"]
    }else {
      v3085 = qb$$1["msie"] = -1 != navigator.userAgent.toLowerCase().indexOf("msie")
    }
    var v1493 = v3085;
    if(v1493) {
      v1493 = !window.opera
    }
    return v1493
  }
  function tb() {
    var v3087 = navigator.plugins;
    if(v3087) {
      v3087 = navigator.mimeTypes.length
    }
    if(v3087) {
      var a$$75 = navigator.plugins["Shockwave Flash"];
      var v3088 = a$$75;
      if(v3088) {
        v3088 = a$$75.description
      }
      if(v3088) {
        return a$$75.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
      }
    }else {
      var v3090 = navigator.userAgent;
      if(v3090) {
        v3090 = 0 <= navigator.userAgent.indexOf("Windows CE")
      }
      if(v3090) {
        a$$75 = 3;
        var b$$58 = 1;
        for(;b$$58;) {
          try {
            b$$58 = JAM.new(ActiveXObject, ["ShockwaveFlash.ShockwaveFlash." + (a$$75 + 1)]);
            a$$75 = a$$75 + 1
          }catch(c$$34) {
            b$$58 = null
          }
        }
        return a$$75.toString()
      }
      if(rb$$1()) {
        b$$58 = null;
        try {
          b$$58 = JAM.new(ActiveXObject, ["ShockwaveFlash.ShockwaveFlash.7"])
        }catch(d$$26) {
          a$$75 = 0;
          try {
            b$$58 = JAM.new(ActiveXObject, ["ShockwaveFlash.ShockwaveFlash.6"]);
            a$$75 = 6;
            b$$58.AllowScriptAccess = "always"
          }catch(e$$21) {
            if(6 == a$$75) {
              return a$$75.toString()
            }
          }
          try {
            b$$58 = JAM.new(ActiveXObject, ["ShockwaveFlash.ShockwaveFlash"])
          }catch(f$$11) {
          }
        }
        if(b$$58) {
          a$$75 = b$$58.GetVariable("$version").split(" ")[1];
          return a$$75.replace(/,/g, ".")
        }
      }
    }
    return"0"
  }
  function ub(a$$76) {
    var b$$59 = a$$76.google_ad_format;
    var v1501;
    if(b$$59) {
      v1501 = 0 < b$$59.indexOf("_0ads")
    }else {
      var v3094 = "html" != a$$76.google_ad_output;
      if(v3094) {
        v3094 = 0 < a$$76.google_num_radlinks
      }
      v1501 = v3094
    }
    return v1501
  }
  function Ze(a$$77, b$$60, c$$35, d$$27) {
    var v1502 = c$$35;
    if(!v1502) {
      v1502 = a$$77.google_ad_width
    }
    c$$35 = v1502;
    var v1503 = d$$27;
    if(!v1503) {
      v1503 = a$$77.google_ad_height
    }
    d$$27 = v1503;
    if(a$$77.top == a$$77) {
      return!1
    }
    var e$$22 = b$$60.documentElement;
    if(c$$35 && d$$27) {
      var f$$12 = 1;
      var g$$9 = 1;
      var v1505;
      if(a$$77.innerHeight) {
        f$$12 = a$$77.innerWidth;
        v1505 = g$$9 = a$$77.innerHeight
      }else {
        var v3098;
        var v4543 = e$$22;
        if(v4543) {
          v4543 = e$$22.clientHeight
        }
        if(v4543) {
          f$$12 = e$$22.clientWidth;
          v3098 = g$$9 = e$$22.clientHeight
        }else {
          var v3993 = b$$60.body;
          if(v3993) {
            f$$12 = b$$60.body.clientWidth;
            v3993 = g$$9 = b$$60.body.clientHeight
          }
          v3098 = v3993
        }
        v1505 = v3098
      }
      v1505;
      var v3100 = g$$9 > 2 * d$$27;
      if(!v3100) {
        v3100 = f$$12 > 2 * c$$35
      }
      if(v3100) {
        return!1
      }
    }
    return!0
  }
  function $e(a$$78, b$$61) {
    function v61(b$$62, d$$28) {
      JAM.set(a$$78, "google_" + d$$28, b$$62, JAM.policy.p2);
      return
    }
    x$$51(b$$61, v61);
    return
  }
  function bf(a$$79, b$$63) {
    var c$$36 = af();
    var v1509;
    if(c$$36) {
      v1509 = c$$36
    }else {
      var v3101;
      if(b$$63) {
        v3101 = a$$79.referrer
      }else {
        v3101 = a$$79.URL
      }
      v1509 = v3101
    }
    return v1509
  }
  function Jh(a$$90) {
    var b$$74 = 1;
    var c$$45 = 0;
    var d$$36;
    var v3102 = void 0 != a$$90;
    if(v3102) {
      v3102 = "" != a$$90
    }
    if(v3102) {
      b$$74 = 0;
      d$$36 = a$$90.length - 1;
      var v1510 = 0 <= d$$36;
      for(;v1510;) {
        c$$45 = a$$90.charCodeAt(d$$36);
        b$$74 = (b$$74 << 6 & 268435455) + c$$45 + (c$$45 << 14);
        c$$45 = b$$74 & 266338304;
        var v3104;
        if(0 != c$$45) {
          v3104 = b$$74 ^ c$$45 >> 21
        }else {
          v3104 = b$$74
        }
        b$$74 = v3104;
        d$$36 = d$$36 - 1;
        v1510 = 0 <= d$$36
      }
    }
    return b$$74
  }
  function Fh(a$$91, b$$75) {
    var v3105 = !a$$91;
    if(!v3105) {
      v3105 = "none" == a$$91
    }
    if(v3105) {
      return 1
    }
    a$$91 = String(a$$91);
    var v1513 = "auto" == a$$91;
    if(v1513) {
      a$$91 = b$$75;
      var v4002 = "www." == a$$91.substring(0, 4);
      if(v4002) {
        a$$91 = a$$91.substring(4, a$$91.length)
      }
    }
    return Jh(a$$91.toLowerCase())
  }
  function ji(a$$94) {
    var v1515;
    if(null != a$$94) {
      v1515 = '"' + a$$94 + '"'
    }else {
      v1515 = '""'
    }
    return v1515
  }
  function ii() {
    function v65() {
      f$$19 = !0;
      var a$$100 = 0;
      var v1517 = a$$100 < c$$51.google_top_js_callbacks.length;
      for(;v1517;) {
        var v4004 = c$$51.google_top_js_callbacks;
        introspect(JAM.policy.p4) {
          var v3109 = v4004[a$$100]
        }
        var v1516 = v3109 === h$$11;
        if(v1516) {
          c$$51.google_top_js_callbacks.splice(a$$100, 1);
          h$$11()
        }
        a$$100 = a$$100 + 1;
        v1517 = a$$100 < c$$51.google_top_js_callbacks.length
      }
      return
    }
    function v64() {
      var v1518 = null != e$$31.j.deviceAccelerationWithGravity;
      if(!v1518) {
        var v3112 = null != e$$31.j.deviceAccelerationWithoutGravity;
        if(!v3112) {
          v3112 = e$$31.j.didDeviceMotionCallbacksTimeoutExpire
        }
        v1518 = v3112
      }
      return v1518
    }
    function v63() {
      var v1519 = null != e$$31.j.deviceOrientation;
      if(!v1519) {
        v1519 = e$$31.j.didDeviceOrientationCallbacksTimeoutExpire
      }
      return v1519
    }
    function v62() {
      var v1520 = 3 != c$$51.google_top_js_status;
      if(!v1520) {
        v1520 = f$$19
      }
      return v1520
    }
    if(hc() != D$$1()) {
      ze = ze | 4
    }
    if(Ha$$1) {
      ze = ze | 16
    }
    if(3 == Xe(document)) {
      ze = ze | 32
    }
    if("google_dn" in window) {
      ze = ze | 8
    }
    if(window.google_loader_features_used) {
      ze = ze | window.google_loader_features_used
    }
    var v3123;
    if(B$$2) {
      v3123 = 1 == yb(window)
    }else {
      v3123 = !yb(window)
    }
    var v1525 = v3123;
    if(v1525) {
      li()
    }
    Vi();
    var a$$99 = null;
    var b$$81 = "";
    a$$99 = window.google_async_iframe_id;
    var c$$51 = D$$1();
    var v1526;
    if(a$$99) {
      var v3124 = c$$51.document;
      v1526 = a$$99 = JAM.call(JAM.get(v3124, "getElementById", JAM.policy.p1), v3124, [a$$99])
    }else {
      b$$81 = "google_temp_span";
      v1526 = a$$99 = Zi(b$$81)
    }
    v1526;
    var d$$42 = Of;
    var v1527 = c$$51.google_top_experiment !== d$$42.EXPERIMENT_ZERO_LATENCY;
    if(v1527) {
      v1527 = 3 === c$$51.google_top_js_status
    }
    d$$42 = v1527;
    var e$$31 = Mh(c$$51);
    var v3128 = d$$42;
    if(!v3128) {
      var v4014 = e$$31;
      if(v4014) {
        var v4549 = e$$31.P();
        if(!v4549) {
          v4549 = e$$31.O()
        }
        v4014 = v4549
      }
      v3128 = v4014
    }
    if(v3128) {
      var f$$19 = !1;
      var g$$15 = [];
      if(d$$42) {
        JAM.call(g$$15.push, g$$15, [v62])
      }
      if(e$$31) {
        var v3129 = e$$31.P();
        if(v3129) {
          JAM.call(g$$15.push, g$$15, [v63])
        }
      }
      if(e$$31) {
        var v3130 = e$$31.O();
        if(v3130) {
          JAM.call(g$$15.push, g$$15, [v64])
        }
      }
      var h$$11 = ga$$1(Yi, a$$99, b$$81, e$$31, g$$15);
      if(d$$42) {
        Xi = (new Date).getTime();
        var v5023 = c$$51.google_top_js_callbacks;
        if(!v5023) {
          v5023 = []
        }
        c$$51.google_top_js_callbacks = v5023;
        var v4855 = c$$51.google_top_js_callbacks;
        JAM.call(v4855.push, v4855, [h$$11]);
        b$$81 = v65;
        window.setTimeout(b$$81, 150)
      }
      if(e$$31) {
        var v3131 = e$$31.fb();
        if(v3131) {
          e$$31.Gc()
        }
      }
      if(e$$31) {
        var v3132 = e$$31.P();
        if(v3132) {
          JAM.call(e$$31.nc, e$$31, [h$$11, 1E3])
        }
      }
      if(e$$31) {
        var v3133 = e$$31.O();
        if(v3133) {
          JAM.call(e$$31.mc, e$$31, [h$$11, 1E3])
        }
      }
    }else {
      Yi(a$$99, b$$81)
    }
    return
  }
  function $h() {
    var v1529 = null == window.google_ad_output;
    if(v1529) {
      window.google_ad_output = "html"
    }
    var JSCompiler_temp_const$$579 = window;
    var JSCompiler_inline_result$$580;
    JSCompiler_inline_label_yh_593: {
      var b$$inline_590 = window.google_ad_client;
      if(!b$$inline_590) {
        JSCompiler_inline_result$$580 = "";
        break JSCompiler_inline_label_yh_593
      }
      b$$inline_590 = b$$inline_590.toLowerCase();
      var JSCompiler_inline_result$$inline_591;
      var a$$inline_592 = b$$inline_590;
      if(a$$inline_592) {
        var v3135 = "ca-" != a$$inline_592.substring(0, 3);
        if(v3135) {
          a$$inline_592 = "ca-" + a$$inline_592
        }
      }
      JSCompiler_inline_result$$inline_591 = a$$inline_592;
      JSCompiler_inline_result$$580 = b$$inline_590 = JSCompiler_inline_result$$inline_591
    }
    JSCompiler_temp_const$$579.google_ad_client = JSCompiler_inline_result$$580;
    if(null == window.google_flash_version) {
      var JSCompiler_temp_const$$553 = window;
      var JSCompiler_inline_result$$554;
      JSCompiler_inline_label_sb$$1_595: {
        try {
          JSCompiler_inline_result$$554 = tb()
        }catch(a$$inline_594) {
          JSCompiler_inline_result$$554 = "0"
        }
      }
      JSCompiler_temp_const$$553.google_flash_version = JSCompiler_inline_result$$554
    }
    var v1532 = window.google_ad_section;
    if(!v1532) {
      var v3137 = window.google_ad_region;
      if(!v3137) {
        v3137 = ""
      }
      v1532 = v3137
    }
    window.google_ad_section = v1532;
    var v1533 = window.google_country;
    if(!v1533) {
      var v3139 = window.google_gl;
      if(!v3139) {
        v3139 = ""
      }
      v1533 = v3139
    }
    window.google_country = v1533;
    var a$$inline_93 = (new Date).getTime();
    var v1535 = n$$2(window.google_color_bg);
    if(v1535) {
      var v3142 = window;
      var v5206 = zh(window.google_color_bg, a$$inline_93);
      v3142.google_color_bg = v5206
    }
    var v1536 = n$$2(window.google_color_text);
    if(v1536) {
      var v3144 = window;
      var v5207 = zh(window.google_color_text, a$$inline_93);
      v3144.google_color_text = v5207
    }
    var v1537 = n$$2(window.google_color_link);
    if(v1537) {
      var v3146 = window;
      var v5208 = zh(window.google_color_link, a$$inline_93);
      v3146.google_color_link = v5208
    }
    var v1538 = n$$2(window.google_color_url);
    if(v1538) {
      var v3148 = window;
      var v5209 = zh(window.google_color_url, a$$inline_93);
      v3148.google_color_url = v5209
    }
    var v1539 = n$$2(window.google_color_border);
    if(v1539) {
      var v3150 = window;
      var v5210 = zh(window.google_color_border, a$$inline_93);
      v3150.google_color_border = v5210
    }
    var v1540 = n$$2(window.google_color_line);
    if(v1540) {
      var v3152 = window;
      var v5211 = zh(window.google_color_line, a$$inline_93);
      v3152.google_color_line = v5211
    }
    return
  }
  var m$$3 = this;
  var v1541 = Date.now;
  if(!v1541) {
    v1541 = v66
  }
  var ha$$1 = v1541;
  var la$$1 = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/;
  var na$$1 = t$$1("0.1", 0);
  var oa$$1 = t$$1("0.02", 0);
  var pa$$1 = t$$1("1", 0);
  var qa$$1 = t$$1("0.04", 0);
  var ra$$1 = t$$1("0.001", 0);
  var sa$$1 = t$$1("", 0);
  var ta$$1 = t$$1("", 0);
  var ua$$1 = t$$1("0.01", 0);
  var va$$1 = t$$1("0.001", 0);
  var wa$$1 = t$$1("0.0", 0);
  var xa$$1 = t$$1("", 0);
  var ya$$1 = t$$1("0.01", 0);
  var za$$1 = t$$1("0.001", 0);
  var Aa$$1 = t$$1("0.001", 0);
  var Ba$$1 = t$$1("", 0);
  var Ca$$1 = t$$1("0.06", 0);
  var Ea$$1 = ka$$1("false", !1);
  var Fa$$1 = ka$$1("false", !1);
  var Ga$$1 = ka$$1("false", !1);
  var Ha$$1 = ka$$1("false", !1);
  var Ia$$1 = ka$$1("true", !1);
  var Ma$$1;
  var Na$$1 = /&/g;
  var Oa$$1 = /</g;
  var Pa$$1 = />/g;
  var Qa$$1 = /\"/g;
  var Ra$$1 = /[&<>\"]/;
  var Wa$$1 = /&([^;\s<&]+);?/g;
  var Ya$$1 = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
  var Za$$1 = {"'":"\\'"};
  u$$2.prototype.ceil = v67;
  u$$2.prototype.floor = v68;
  u$$2.prototype.round = v69;
  u$$2.prototype.scale = v70;
  var v$$1 = document;
  var w$$6 = window;
  La$$1();
  var qb$$1 = {};
  var B$$2 = !!window.google_async_iframe_id;
  var v3155 = B$$2;
  if(v3155) {
    v3155 = window.parent
  }
  var v1552 = v3155;
  if(!v1552) {
    v1552 = window
  }
  var Ob = v1552;
  var Pb = {CONTROL:"C", EXPERIMENT:"E"};
  var Xb = Array.prototype;
  var v1553;
  if(Xb.indexOf) {
    v1553 = v71
  }else {
    v1553 = v72
  }
  var Yb = v1553;
  var v1554;
  if(Xb.forEach) {
    v1554 = v73
  }else {
    v1554 = v74
  }
  var Zb = v1554;
  E$$1.prototype.statusz = v75;
  E$$1.prototype.Ga = v76;
  E$$1.prototype.bb = v77;
  E$$1.prototype.k = v78;
  E$$1.prototype.ac = v79;
  E$$1.prototype.m = v80;
  E$$1.prototype.geil = E$$1.prototype.m;
  E$$1.prototype.Ka = v81;
  var gc = null;
  var kc = {google_persistent_state:!0, google_persistent_state_async:!0};
  var lc = {};
  var sc;
  var tc;
  var uc;
  var K$$1 = {PERISCOPE_FOR_TARGETING:{CONTROL:"317150300", EXPERIMENT_ZERO_LATENCY:"317150301", EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE:"317150302", CONTROL_REFERER_CLEANUP:"317150303", EXPERIMENT_REFERER_CLEANUP:"317150304"}, EXPANDABLE_MOBILE_UPDATE:{CONTROL:"86860100", EXPERIMENT:"86860101"}, EXPANDABLE_MOBILE_REVERSE:{CONTROL:"86860104", EXPERIMENT:"86860105"}, PREFETCH_AD_HANDLING:{CONTROL_NO_FRAME:"42631020", ALWAYS_ZRT:"42631021", SERIAL_ZRT:"42631022"}, ASYNC_FOR_OPERA_ANDROID:{CONTROL_ANDROID:"33895177", 
  EXPERIMENT_ANDROID:"33895178", CONTROL_ANDROID_CHROME:"33895187", EXPERIMENT_ANDROID_CHROME:"33895188"}, DEVICE_SENSORS:{CONTROL:"586900001", EXPERIMENT_ZERO_LATENCY:"586900002", EXPERIMENT_WAIT_FOR_EVENT_ARRIVAL:"586900003"}, SS:{COUNT_AD_FRAMES_ON_PAGE_CONTROL:"317150310", COUNT_AD_FRAMES_ON_PAGE_EXPERIMENT:"317150311", BROWSER_DIMENSIONS_CONTROL:"317150312", BROWSER_DIMENSIONS_EXPERIMENT:"317150313"}, TOP_URL_REPLACES_MISSING_URL:{CONTROL:"33895310", EXPERIMENT:"33895311"}, ADD_ADK2:{CONTROL:"33895400", 
  EXPERIMENT:"33895401"}, ASYNC_EXPANSION_EMBED:{CONTROL:"42631004", EXPERIMENT:"42631005"}, JS_RNG:{CONTROL:"42631002", EXPERIMENT:"42631003"}, DIRECT_CALL_RENDER_AD:{CONTROL:"33895322", EXPERIMENT:"33895323"}, ALWAYS_USE_DELAYED_IMPRESSIONS:{CONTROL:"33895330", EXPERIMENT:"33895331"}, PRERENDERING_DELAYED_IMPRESSION:{CONTROL:"33895332", EXPERIMENT:"33895333"}, APPEND_AS_FOR_FORMAT_OVERRIDE:{CONTROL:"373855270", EXPERIMENT:"373855271"}, SEND_LOAD_TIME_PINGBACKS:{EXPERIMENT:"947190536"}};
  var yc = {google:1, googlegroups:1, gmail:1, googlemail:1, googleimages:1, googleprint:1};
  var zc = /PyvSearchAfcNewTemplate/;
  M$$1.prototype.ceil = v82;
  M$$1.prototype.floor = v83;
  M$$1.prototype.round = v84;
  M$$1.prototype.translate = v85;
  M$$1.prototype.scale = v86;
  var Fc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  var Hc;
  var Ic;
  var Jc;
  var Kc;
  Mc();
  var Nc = Hc;
  var N$$1 = Ic;
  var Oc = Kc;
  var Pc = Jc;
  var Sc = Rc();
  var Tc = {};
  var Vc = v87();
  var v1586 = !N$$1;
  if(!v1586) {
    var v3160 = N$$1;
    if(v3160) {
      v3160 = 9 <= Vc
    }
    v1586 = v3160
  }
  var Wc = v1586;
  var v3162 = !Oc;
  if(v3162) {
    v3162 = !N$$1
  }
  var v1587 = v3162;
  if(!v1587) {
    var v4025 = N$$1;
    if(v4025) {
      var v4550 = N$$1;
      if(v4550) {
        v4550 = 9 <= Vc
      }
      v4025 = v4550
    }
    var v3163 = v4025;
    if(!v3163) {
      if(Oc) {
        Uc("1.9.1")
      }
    }
  }
  var v1588 = N$$1;
  if(v1588) {
    v1588 = !Uc("9")
  }
  var Xc = v1588;
  var ed = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
  var sd = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1};
  var td = {IMG:" ", BR:"\n"};
  O$$1.prototype.createElement = v88;
  O$$1.prototype.createTextNode = v89;
  O$$1.prototype.$b = v90;
  O$$1.prototype.Ja = v91;
  O$$1.prototype.appendChild = od;
  O$$1.prototype.append = pd;
  O$$1.prototype.canHaveChildren = nd;
  O$$1.prototype.removeNode = qd;
  O$$1.prototype.contains = rd;
  P$$1.prototype.contains = v92;
  P$$1.prototype.expand = v93;
  P$$1.prototype.ceil = v94;
  P$$1.prototype.floor = v95;
  P$$1.prototype.round = v96;
  P$$1.prototype.translate = v97;
  P$$1.prototype.scale = v98;
  var Sd = /[^\d]+$/;
  var Ud = {cm:1, "in":1, mm:1, pc:1, pt:1};
  var Vd = {em:1, ex:1};
  var Xd = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
  var he = "";
  var ie = 0;
  var je = 0;
  ke(Ha$$1, La$$1(!1), oa$$1, pa$$1);
  S$$1.prototype.oc = v100;
  S$$1.prototype.bc = v101;
  S$$1.prototype.Fa = v102;
  S$$1.prototype.Na = v103;
  S$$1.prototype.getRegisteredAdblockUrls = v104;
  S$$1.prototype.setupOse = v105;
  S$$1.prototype.getEid = v106;
  S$$1.prototype.getOseExpId = v107;
  S$$1.prototype.getOseId = v108;
  S$$1.prototype.getCorrelator = v109;
  S$$1.prototype.La = v110;
  S$$1.prototype.registerAdBlock = v112;
  S$$1.prototype.setUpForcePeriscope = v113;
  S$$1.prototype.shouldForcePeriscope = v114;
  aa$$1("Goog_AdSense_getAdAdapterInstance", me, void 0);
  aa$$1("Goog_AdSense_OsdAdapter", S$$1, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.numBlocks", S$$1.prototype.La, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.getNewBlocks", S$$1.prototype.Na, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.getEid", S$$1.prototype.getEid, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.getOseExpId", S$$1.prototype.getOseExpId, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.getOseId", S$$1.prototype.getOseId, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.getCorrelator", S$$1.prototype.getCorrelator, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.getRegisteredAdblockUrls", S$$1.prototype.getRegisteredAdblockUrls, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.setupOse", S$$1.prototype.setupOse, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.registerAdBlock", S$$1.prototype.registerAdBlock, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.setUpForcePeriscope", S$$1.prototype.setUpForcePeriscope, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.shouldForcePeriscope", S$$1.prototype.shouldForcePeriscope, void 0);
  var pe = {client:"google_ad_client", format:"google_ad_format", slotname:"google_ad_slot", output:"google_ad_output", ad_type:"google_ad_type", async_oa:"google_async_for_oa_experiment", zrtm:"google_ad_handling_mode", dimpr:"google_always_use_delayed_impressions_experiment", peri:"google_top_experiment"};
  aa$$1("google_protectAndRun", te, void 0);
  aa$$1("google_handleError", ve, void 0);
  var ze = 0;
  Be.prototype.serialize = v115;
  Be.prototype.n = v116;
  var Ce = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
  var v1648;
  if(/\uffff/.test("\uffff")) {
    v1648 = /[\\\"\x00-\x1f\x7f-\uffff]/g
  }else {
    v1648 = /[\\\"\x00-\x1f\x7f-\xff]/g
  }
  var De = v1648;
  Be.prototype.r = v118;
  Be.prototype.L = v119;
  Be.prototype.yc = v120;
  Be.prototype.M = v121;
  var Fe = /Firefox/;
  var Ge = {CONTROL_NO_FRAME:"XN", PARALLEL_CANCEL_ON_NO_AD:"PC", IFRAME_SIGNALING:"EI", ALWAYS_ZRT:"AZ", SERIAL:"S"};
  var He = {PARALLEL:"K", PARALLEL_W_IFRAME_SIGNALING:"I", PARALLEL_W_ALWAYS_ZRT:"Z", SERIAL:"U"};
  var Ie = /\.((google(|groups|mail|images|print))|gmail)\./;
  var Ne = Sa$$1("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");
  Me.prototype.set = v122;
  Me.prototype.Jb = v123;
  Me.prototype.Qc = v124;
  var Pe = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
  var Se = Pc;
  var T$$1 = {getIframingState:v125, frameCountsWithDelayedPingback:v126, Uc:v127, Ha:v128, NO_IFRAMING:0, SAME_DOMAIN_IFRAMING:1, CROSS_DOMAIN_IFRAMING:2, NAME_FIRST_GOOGLE_WINDOW:"aswift_0", IFRAME_COUNTS_DELAY:2E3, MAXIMUM_IFRAME_DEPTH:20};
  var mf;
  U$$1.prototype.enqueue = v129;
  U$$1.prototype.Y = v130;
  U$$1.prototype.Xa = v131;
  U$$1.prototype.ra = v132;
  U$$1.prototype.statusz = v133;
  U$$1.prototype["nq"] = U$$1.prototype.enqueue;
  U$$1.prototype["nqa"] = U$$1.prototype.Y;
  U$$1.prototype["al"] = U$$1.prototype.Xa;
  U$$1.prototype["rl"] = U$$1.prototype.ra;
  U$$1.prototype["sz"] = U$$1.prototype.statusz;
  U$$1.prototype.sa = v134;
  U$$1.prototype.Oc = v135;
  U$$1.prototype.ab = v136;
  var vf = (new Date).getTime();
  var wf = {"120x90":!0, "160x90":!0, "180x90":!0, "200x90":!0, "468x15":!0, "728x15":!0};
  var Sf = {EXPERIMENT:"E", CONTROL:"C"};
  var Of = {CONTROL:"jp_c", EXPERIMENT_ZERO_LATENCY:"jp_zl", EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE:"jp_wfpmr"};
  var Uf = {CONTROL:"c", EXPERIMENT:"e"};
  var Wf = {};
  var Yf = Xf("zx");
  var Zf = Xf("zc");
  var $f = Xf("zd");
  var ag = {READY:"zr", CANCEL:Yf, CANCEL_CTRL:Zf, CANCEL_CTRL_DELAYED_IMPR:$f};
  var bg = null;
  V$$1.prototype.jb = v137;
  V$$1.prototype.la = v138;
  V$$1.prototype.Ya = v139;
  V$$1.prototype.Ia = v140;
  V$$1.prototype.Ta = v141;
  V$$1.prototype.Rc = v142;
  V$$1.prototype.ya = v143;
  V$$1.prototype.zc = v144;
  V$$1.prototype.wb = v145;
  V$$1.prototype.v = v146;
  V$$1.prototype.Ec = v147;
  V$$1.prototype.da = v148;
  V$$1.prototype.Qa = v149;
  V$$1.prototype.J = v150;
  V$$1.prototype.ta = v151;
  V$$1.prototype.gb = v152;
  V$$1.prototype.eb = v153;
  V$$1.prototype.Ac = v154;
  V$$1.prototype.Dc = v155;
  V$$1.prototype.R = v157;
  hg.prototype.serialize = v158;
  hg.prototype.n = v159;
  var ig = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
  var v1698;
  if(/\uffff/.test("\uffff")) {
    v1698 = /[\\\"\x00-\x1f\x7f-\uffff]/g
  }else {
    v1698 = /[\\\"\x00-\x1f\x7f-\xff]/g
  }
  var jg = v1698;
  hg.prototype.r = v161;
  hg.prototype.L = v162;
  hg.prototype.xc = v163;
  hg.prototype.M = v164;
  var kg = {FLOATING:1, INTERSTITIAL:2};
  var lg = {FLOATING_BOTTOM:1, GDN_INTERSTITIAL:8};
  var mg = {"http://doubleclick":!0, "http://googlesyndication":!0, "https://doubleclick":!0, "https://googlesyndication":!0};
  var sg = /([0-9.]+)px/;
  var tg = [{width:120, height:240, format:"vertical"}, {width:120, height:600, format:"vertical"}, {width:125, height:125, format:"rectangle"}, {width:160, height:600, format:"vertical"}, {width:180, height:150, format:"rectangle"}, {width:200, height:200, format:"rectangle"}, {width:234, height:60, format:"horizontal"}, {width:250, height:250, format:"rectangle"}, {width:300, height:250, format:"rectangle"}, {width:300, height:600, format:"vertical"}, {width:320, height:50, format:"horizontal"}, 
  {width:336, height:280, format:"rectangle"}, {width:468, height:60, format:"horizontal"}, {width:728, height:90, format:"horizontal"}, {width:970, height:90, format:"horizontal"}];
  var Bg = ["google_analytics_uacct", "google_analytics_domain_name"];
  Mg.prototype.ja = v165;
  Mg.prototype.ia = v166;
  Mg.prototype.D = v167;
  Qg.prototype.ja = v168;
  Qg.prototype.ia = v169;
  Qg.prototype.D = v170;
  var Ug = {1:1, 8:2};
  dh.prototype.ub = v171;
  W$$1.prototype.Ca = v172;
  W$$1.prototype.ka = v173;
  W$$1.prototype.C = v174;
  W$$1.prototype.Pc = v175;
  W$$1.prototype.play = v176;
  W$$1.prototype.stop = v177;
  ja$$1(fh, W$$1);
  fh.prototype.C = v178;
  ja$$1(gh, W$$1);
  gh.prototype.ka = v179;
  gh.prototype.C = v180;
  hh.prototype.ba = v181;
  hh.prototype.Pb = v182;
  hh.prototype.u = v183;
  ja$$1(X$$1, hh);
  X$$1.prototype.dismiss = v184;
  X$$1.prototype.hide = v185;
  X$$1.prototype.A = v186;
  X$$1.prototype.show = v187;
  X$$1.prototype.pb = v188;
  X$$1.prototype.qb = v189;
  X$$1.prototype.Qb = v190;
  X$$1.prototype.Rb = v191;
  X$$1.prototype.Ma = v192;
  X$$1.prototype.Sa = v193;
  X$$1.prototype.ec = v194;
  X$$1.prototype.tc = v195;
  X$$1.prototype.vc = v196;
  X$$1.prototype.Kc = v198;
  X$$1.prototype.Lc = v200;
  X$$1.prototype.Mc = v201;
  X$$1.prototype.Nc = v202;
  X$$1.prototype.$a = v203;
  X$$1.prototype.cb = v204;
  X$$1.prototype.o = v205;
  ih.prototype.Wb = v206;
  ih.prototype.gc = v207;
  ja$$1(jh, ih);
  jh.prototype.Bb = v208;
  jh.prototype.Gb = v209;
  jh.prototype.pa = v210;
  ja$$1(Y$$1, hh);
  var lh = {backgroundColor:"white", opacity:"1", position:"fixed", left:"0px", top:"0px", display:"none", zIndex:"2147483647"};
  var mh = {width:"100%", height:"100%"};
  var nh = {width:"100%", "min-height":"100%"};
  Y$$1.prototype.mb = v211;
  Y$$1.prototype.A = v212;
  Y$$1.prototype.rb = v213;
  Y$$1.prototype.tb = v214;
  Y$$1.prototype.Ba = v215;
  Y$$1.prototype.vb = v216;
  Y$$1.prototype.xb = v217;
  Y$$1.prototype.Yb = v218;
  Y$$1.prototype.Xb = v219;
  Y$$1.prototype.sc = v220;
  Y$$1.prototype.Cc = v221;
  Y$$1.prototype.N = v222;
  ja$$1(Z$$1, ih);
  Z$$1.prototype.pa = v223;
  Z$$1.prototype.T = v224;
  Z$$1.prototype.Hb = v225;
  Z$$1.prototype.Nb = v226;
  Z$$1.prototype.Mb = v227;
  Z$$1.prototype.Va = v228;
  Z$$1.prototype.dc = v229;
  Z$$1.prototype.qc = v230;
  Z$$1.prototype.uc = v231;
  Z$$1.prototype.wc = v232;
  Z$$1.prototype.Bc = v233;
  var th = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var vh = {google_ad_channel:"channel", google_ad_host:"host", google_ad_host_channel:"h_ch", google_ad_host_tier_id:"ht_id", google_ad_section:"region", google_ad_type:"ad_type", google_adtest:"adtest", google_allow_expandable_ads:"ea", google_alternate_ad_url:"alternate_ad_url", google_alternate_color:"alt_color", google_bid:"bid", google_city:"gcs", google_color_bg:"color_bg", google_color_border:"color_border", google_color_line:"color_line", google_color_link:"color_link", google_color_text:"color_text", 
  google_color_url:"color_url", google_contents:"contents", google_country:"gl", google_cpm:"cpm", google_cust_age:"cust_age", google_cust_ch:"cust_ch", google_cust_gender:"cust_gender", google_cust_id:"cust_id", google_cust_interests:"cust_interests", google_cust_job:"cust_job", google_cust_l:"cust_l", google_cust_lh:"cust_lh", google_cust_u_url:"cust_u_url", google_disable_video_autoplay:"disable_video_autoplay", google_ed:"ed", google_encoding:"oe", google_feedback:"feedback_link", google_flash_version:"flash", 
  google_font_face:"f", google_font_size:"fs", google_hints:"hints", google_kw:"kw", google_kw_type:"kw_type", google_language:"hl", google_page_url:"url", google_region:"gr", google_reuse_colors:"reuse_colors", google_safe:"adsafe", google_sc_id:"sc_id", google_tag_info:"gut", google_targeting:"targeting", google_ui_features:"ui", google_ui_version:"uiv", google_video_doc_id:"video_doc_id", google_video_product_type:"video_product_type"};
  var wh = {google_ad_block:"ad_block", google_ad_client:"client", google_ad_format:"format", google_ad_output:"output", google_ad_callback:"callback", google_ad_height:"h", google_ad_override:"google_ad_override", google_ad_slot:"slotname", google_ad_unit_key:"adk", google_ad_unit_key_2:"adk2", google_ad_width:"w", google_captcha_token:"captok", google_ctr_threshold:"ctr_t", google_cust_criteria:"cust_params", google_image_size:"image_size", google_last_modified_time:"lmt", google_loeid:"loeid", 
  google_max_num_ads:"num_ads", google_max_radlink_len:"max_radlink_len", google_mtl:"mtl", google_num_radlinks:"num_radlinks", google_num_radlinks_per_unit:"num_radlinks_per_unit", google_only_ads_with_video:"only_ads_with_video", google_rl_dest_url:"rl_dest_url", google_rl_filtering:"rl_filtering", google_rl_mode:"rl_mode", google_rt:"rt", google_sui:"sui", google_skip:"skip", google_tag_for_child_directed_treatment:"tfcd", google_tdsma:"tdsma", google_tfs:"tfs", google_tl:"tl"};
  var xh = {google_lact:"lact", google_only_pyv_ads:"pyv", google_only_userchoice_ads:"uc", google_scs:"scs", google_with_pyv_ads:"withpyv", google_previous_watch:"p_w", google_previous_searches:"p_s", google_video_url_to_fetch:"durl", google_yt_pt:"yt_pt", google_yt_up:"yt_up"};
  var Dh = navigator;
  var Kh = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/;
  var Lh = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/;
  $$$1.prototype.zb = v234;
  $$$1.prototype.Ab = v235;
  $$$1.prototype.$ = v236;
  $$$1.prototype.aa = v237;
  $$$1.prototype.ca = v238;
  $$$1.prototype.Oa = v239;
  $$$1.prototype.nc = v241;
  $$$1.prototype.mc = v243;
  $$$1.prototype.fb = v244;
  $$$1.prototype.O = v245;
  $$$1.prototype.P = v246;
  $$$1.prototype.Gc = v247;
  $$$1.prototype.Hc = v248;
  var Qh = null;
  var Rh = null;
  Uh.prototype.yb = v249;
  Uh.prototype.Ob = v250;
  Uh.prototype.Eb = v251;
  Uh.prototype.Ea = v252;
  var Vh = La$$1(!1);
  var Wh = 20;
  var ci = !1;
  var v1807 = w$$6.google_eas_queue;
  if(!v1807) {
    v1807 = []
  }
  w$$6.google_eas_queue = v1807;
  var ei = Mb(v253);
  var zi = !1;
  var yi = "";
  var Xi = 0;
  var Ni = /[+, ]/;
  window.google_render_ad = ii;
  te("show_ads::main", ve, bi, xc);
  return
}
function v22() {
  function v21(a$$45) {
    this.a = 0;
    a$$45.k();
    return
  }
  function v20() {
    var v3186 = 0 == this.a;
    if(v3186) {
      v3186 = this.c.length
    }
    if(v3186) {
      var a$$44 = this.c.shift();
      this.a = 2;
      var b$$36 = M("sjr::run", JAM.call(p, null, [this.f, this, a$$44]));
      a$$44.h.setTimeout(b$$36, 0);
      Ua(this)
    }
    return
  }
  function v19() {
    var v3188 = !window;
    if(!v3188) {
      v3188 = !Array
    }
    return!v3188
  }
  function v18() {
    var v1813 = 1 == this.a;
    if(v1813) {
      var v4030 = null != this.d;
      if(v4030) {
        this.b.clearTimeout(this.d);
        this.d = null
      }
      this.a = 0
    }
    Ua(this);
    return
  }
  function v17(a$$42) {
    this.a = 1;
    if(a$$42) {
      var b$$34 = M("sjr::timeout", JAM.call(p, null, [this.e, this]));
      var v5212 = this.b.setTimeout(b$$34, a$$42);
      this.d = v5212
    }
    return
  }
  function v16(a$$41, b$$33) {
    var v1816 = this.c;
    var v4031 = b$$33;
    if(!v4031) {
      v4031 = this.b
    }
    JAM.call(v1816.push, v1816, [new Ta(a$$41, v4031)]);
    Ua(this);
    return
  }
  function v15(a$$40, b$$32) {
    var v1818;
    var v4032 = 0 != this.a;
    if(!v4032) {
      var v4554 = 0 != this.c.length;
      if(!v4554) {
        var v4859 = b$$32;
        if(v4859) {
          v4859 = b$$32 != window
        }
        v4554 = v4859
      }
      v4032 = v4554
    }
    if(v4032) {
      v1818 = JAM.call(this.g, this, [a$$40, b$$32])
    }else {
      this.a = 2;
      v1818 = JAM.call(this.f, this, [new Ta(a$$40, window)])
    }
    v1818;
    return
  }
  function v14(a$$36, b$$29) {
    var c$$19 = La("rs", a$$36);
    var d$$13;
    t: {
      var v3193 = a$$36;
      if(v3193) {
        var v4034 = d$$13 = a$$36.match("dt=([^&]+)");
        if(v4034) {
          v4034 = 2 == d$$13.length
        }
        v3193 = v4034
      }
      if(v3193) {
        d$$13 = d$$13[1];
        break t
      }
      d$$13 = ""
    }
    d$$13 = (new Date).getTime() - d$$13;
    var v4035;
    if(1E4 > d$$13) {
      v4035 = d$$13 + ""
    }else {
      v4035 = "M"
    }
    c$$19 = c$$19.replace(/&dtd=(\d+|M)/, "&dtd=" + v4035);
    JAM.call(this.set, this, [b$$29, c$$19]);
    return c$$19
  }
  function v13(a$$35) {
    var v1822 = this.b.document;
    a$$35 = JAM.call(JAM.get(v1822, "getElementById", JAM.policy.p1), v1822, [a$$35]);
    var b$$28 = a$$35.contentWindow.document;
    var v3197 = a$$35.onload;
    if(v3197) {
      var v4036 = b$$28;
      if(v4036) {
        var v4558 = !b$$28.body;
        if(!v4558) {
          v4558 = !b$$28.body.firstChild
        }
        v4036 = v4558
      }
      v3197 = v4036
    }
    if(v3197) {
      a$$35.onload()
    }
    return
  }
  function v12(a$$34, b$$27) {
    JAM.set(this.i.handlers, a$$34, b$$27, JAM.policy.p2);
    var v1826 = this.b.addEventListener;
    if(v1826) {
      this.b.addEventListener("load", JAM.call(p, null, [this.j, this, a$$34]), !1)
    }
    return
  }
  function rb() {
    var v3203 = !window.google_top_experiment;
    if(v3203) {
      v3203 = !window.google_top_js_status
    }
    if(v3203) {
      var a$$69 = window;
      var v4040;
      if(a$$69.top == a$$69) {
        v4040 = 0
      }else {
        var v4559;
        if(J(a$$69.top)) {
          v4559 = 1
        }else {
          v4559 = 2
        }
        v4040 = v4559
      }
      if(2 !== v4040) {
        window.google_top_js_status = 0
      }else {
        if(top.postMessage) {
          var b$$55;
          try {
            var v1827;
            if(D.top.frames.google_top_static_frame) {
              v1827 = !0
            }else {
              v1827 = !1
            }
            b$$55 = v1827
          }catch(c$$32) {
            b$$55 = !1
          }
          if(b$$55) {
            var v4042 = window;
            var v5213 = I(["jp_c", "jp_zl", "jp_wfpmr"], ja);
            v4042.google_top_experiment = v5213;
            if("jp_c" !== window.google_top_experiment) {
              a$$69 = window;
              var v1828;
              if(a$$69.addEventListener) {
                v1828 = a$$69.addEventListener("message", hb, !1)
              }else {
                var v3207 = a$$69.attachEvent;
                if(v3207) {
                  v3207 = JAM.call(a$$69.attachEvent, a$$69, ["onmessage", hb])
                }
                v1828 = v3207
              }
              v1828;
              window.google_top_js_status = 3;
              a$$69 = {0:"google_loc_request", 1:gb};
              b$$55 = [];
              var d$$24;
              for(d$$24 in a$$69) {
                var v3209 = d$$24 + "=";
                introspect(JAM.policy.p4) {
                  var v3210 = a$$69[d$$24]
                }
                JAM.call(b$$55.push, b$$55, [v3209 + v3210])
              }
              top.postMessage(b$$55.join("\n"), "*")
            }
          }else {
            window.google_top_js_status = 2
          }
        }else {
          window.google_top_js_status = 1
        }
      }
    }
    var v3211 = d$$24 = window.adsbygoogle;
    if(v3211) {
      v3211 = d$$24.shift
    }
    if(v3211) {
      b$$55 = 20;
      var v3212 = a$$69 = d$$24.shift();
      if(v3212) {
        var v4044 = b$$55;
        b$$55 = b$$55 - 1;
        v3212 = 0 < v4044
      }
      var v1835 = v3212;
      for(;v1835;) {
        try {
          qb(a$$69)
        }catch(e$$19) {
          window.setTimeout(rb, 0);
          throw e$$19;
        }
        var v3213 = a$$69 = d$$24.shift();
        if(v3213) {
          var v4045 = b$$55;
          b$$55 = b$$55 - 1;
          v3213 = 0 < v4045
        }
        v1835 = v3213
      }
    }
    window.adsbygoogle = {push:qb};
    return
  }
  function qb(a$$68) {
    var b$$54 = a$$68.element;
    var v1837 = a$$68.params;
    if(!v1837) {
      v1837 = {}
    }
    a$$68 = v1837;
    if(b$$54) {
      var v3215 = !mb(b$$54);
      if(v3215) {
        var v4563 = b$$54.id;
        if(v4563) {
          v4563 = pb(b$$54.id)
        }
        b$$54 = v4563;
        v3215 = !b$$54
      }
      if(v3215) {
        throw Error("adsbygoogle: 'element' has already been filled.");
      }
      if(!("innerHTML" in b$$54)) {
        throw Error("adsbygoogle.push(): 'element' is not a good DOM element.");
      }
    }else {
      b$$54 = pb();
      if(!b$$54) {
        throw Error("adsbygoogle.push(): All ins elements in the DOM with class=adsbygoogle already have ads in them.");
      }
    }
    var c$$31 = window;
    JAM.call(b$$54.setAttribute, b$$54, ["data-adsbygoogle-status", "done"]);
    ob(b$$54, a$$68, c$$31);
    return
  }
  function pb(a$$67) {
    var b$$53 = JAM.call(JAM.get(document, "getElementsByTagName", JAM.policy.p6), document, ["ins"]);
    var c$$30 = 0;
    introspect(JAM.policy.p4) {
      var d$$23 = b$$53[c$$30]
    }
    var v1842 = c$$30 < b$$53.length;
    for(;v1842;) {
      var v3218 = mb(d$$23);
      if(v3218) {
        var v4047 = !a$$67;
        if(!v4047) {
          v4047 = d$$23.id == a$$67
        }
        v3218 = v4047
      }
      if(v3218) {
        return d$$23
      }
      d$$23 = b$$53[c$$30 = c$$30 + 1];
      v1842 = c$$30 < b$$53.length
    }
    return null
  }
  function nb(a$$66, b$$52, c$$29) {
    var d$$22 = a$$66.attributes;
    var e$$18 = d$$22.length;
    var f$$9 = 0;
    var v1846 = f$$9 < e$$18;
    for(;v1846;) {
      introspect(JAM.policy.p4) {
        var g$$7 = d$$22[f$$9]
      }
      if(/data-/.test(g$$7.nodeName)) {
        var l$$5 = g$$7.nodeName.replace("data", "google").replace(/-/g, "_");
        var v1844 = b$$52.hasOwnProperty(l$$5);
        if(!v1844) {
          JAM.set(b$$52, l$$5, g$$7.nodeValue, JAM.policy.p2)
        }
      }
      f$$9 = f$$9 + 1;
      v1846 = f$$9 < e$$18
    }
    d$$22 = b$$52.google_ad_format;
    var v3224 = "auto" == d$$22;
    if(!v3224) {
      v3224 = /^((^|,)(horizontal|vertical|rectangle))+$/.test(d$$22)
    }
    if(v3224) {
      d$$22 = a$$66.offsetWidth;
      e$$18 = b$$52.google_ad_format;
      c$$29 = lb(d$$22, e$$18, c$$29);
      if(!c$$29) {
        throw Error("Cannot find a responsive size for a container of width=" + d$$22 + "px and data-ad-format=" + e$$18);
      }
      b$$52.google_ad_height = c$$29.height;
      var v1849 = b$$52;
      var v3226;
      var v4566 = 300 < d$$22;
      if(v4566) {
        v4566 = 300 < c$$29.height
      }
      if(v4566) {
        v3226 = c$$29.width
      }else {
        var v4050;
        if(1200 < d$$22) {
          v4050 = 1200
        }else {
          v4050 = JAM.call(Math.round, Math, [d$$22])
        }
        v3226 = v4050
      }
      v1849.google_ad_width = v3226;
      a$$66.style.height = b$$52.google_ad_height + "px";
      delete b$$52.google_ad_format;
      b$$52.google_loader_features_used = 128
    }else {
      var v1851;
      var v4052 = ib.test(a$$66.style.width);
      if(v4052) {
        v4052 = ib.test(a$$66.style.height)
      }
      if(v4052) {
        v1851 = jb(a$$66.style, b$$52)
      }else {
        var v4870;
        if(c$$29.getComputedStyle) {
          v4870 = c$$29.getComputedStyle(a$$66, null)
        }else {
          v4870 = a$$66.currentStyle
        }
        c$$29 = v4870;
        a$$66.style.width = c$$29.width;
        a$$66.style.height = c$$29.height;
        v1851 = jb(c$$29, b$$52)
      }
      v1851
    }
    return
  }
  function ob(a$$65, b$$51, c$$28) {
    function v0() {
      fb(c$$28, b$$51, a$$65);
      return
    }
    var v1853 = a$$65.style;
    if(v1853) {
      var v3230 = "none" == a$$65.style.display;
      if(v3230) {
        b$$51.google_dn = 1
      }
    }
    va(c$$28);
    nb(a$$65, b$$51, c$$28);
    var d$$21 = 0;
    var v1855 = d$$21 < $.length;
    for(;v1855;) {
      introspect(JAM.policy.p4) {
        var v1854 = $[d$$21]
      }
      introspect(JAM.policy.p4) {
        var v4054 = $[d$$21]
      }
      introspect(JAM.policy.p4) {
        var v3232 = b$$51[v4054]
      }
      if(!v3232) {
        introspect(JAM.policy.p4) {
          var v4055 = $[d$$21]
        }
        introspect(JAM.policy.p4) {
          v3232 = c$$28[v4055]
        }
      }
      JAM.set(b$$51, v1854, v3232, JAM.policy.p2);
      d$$21 = d$$21 + 1;
      v1855 = d$$21 < $.length
    }
    b$$51.google_loader_used = "aa";
    var v3234 = d$$21 = b$$51.google_ad_output;
    if(v3234) {
      v3234 = "html" != d$$21
    }
    if(v3234) {
      throw Error("No support for google_ad_output=" + d$$21);
    }
    K("aa::main", L, v0);
    return
  }
  function mb(a$$64) {
    var v1858 = /(^| )adsbygoogle($| )/.test(a$$64.className);
    if(v1858) {
      v1858 = "done" != a$$64.getAttribute("data-adsbygoogle-status")
    }
    return v1858
  }
  function kb(a$$63) {
    a$$63 = a$$63.document;
    var v1859 = a$$63.documentElement.clientWidth;
    if(!v1859) {
      v1859 = a$$63.body.clientWidth
    }
    return v1859
  }
  function lb(a$$61, b$$49, c$$27) {
    function v1(a$$62, b$$50) {
      var v1860 = a$$62.width - b$$50.width;
      if(!v1860) {
        v1860 = a$$62.height - b$$50.height
      }
      return v1860
    }
    Z.sort(v1);
    var v1861 = "auto" == b$$49;
    if(v1861) {
      var v3245;
      if(0.25 > a$$61 / kb(c$$27)) {
        v3245 = "vertical"
      }else {
        v3245 = "horizontal,rectangle"
      }
      b$$49 = v3245
    }
    c$$27 = Z.length;
    var v1863 = c$$27;
    c$$27 = c$$27 - 1;
    for(;v1863;) {
      introspect(JAM.policy.p4) {
        var v4573 = Z[c$$27]
      }
      var v3246 = v4573.width <= a$$61;
      if(v3246) {
        introspect(JAM.policy.p4) {
          var v4874 = Z[c$$27]
        }
        v3246 = -1 != b$$49.indexOf(v4874.format)
      }
      if(v3246) {
        introspect(JAM.policy.p4) {
          return Z[c$$27]
        }
      }
      v1863 = c$$27;
      c$$27 = c$$27 - 1
    }
    return null
  }
  function jb(a$$60, b$$48) {
    var c$$26 = ["width", "height"];
    var d$$20 = 0;
    var v1867 = d$$20 < c$$26.length;
    for(;v1867;) {
      introspect(JAM.policy.p4) {
        var v1864 = c$$26[d$$20]
      }
      var e$$17 = "google_ad_" + v1864;
      if(!b$$48.hasOwnProperty(e$$17)) {
        introspect(JAM.policy.p4) {
          var v3249 = c$$26[d$$20]
        }
        introspect(JAM.policy.p4) {
          var v1865 = a$$60[v3249]
        }
        var f$$8 = ib.exec(v1865);
        if(f$$8) {
          var v3250 = b$$48;
          var v3251 = e$$17;
          var v5214 = JAM.call(Math.round, Math, [f$$8[1]]);
          JAM.set(v3250, v3251, v5214, JAM.policy.p2)
        }
      }
      d$$20 = d$$20 + 1;
      v1867 = d$$20 < c$$26.length
    }
    return
  }
  function hb(a$$59) {
    var b$$47 = a$$59.data.split("\n");
    var c$$25 = {};
    var d$$19 = 0;
    var v1871 = d$$19 < b$$47.length;
    for(;v1871;) {
      introspect(JAM.policy.p4) {
        var v1869 = b$$47[d$$19]
      }
      var e$$16 = v1869.indexOf("=");
      var v1870 = -1 != e$$16;
      if(v1870) {
        var v3254 = c$$25;
        introspect(JAM.policy.p4) {
          var v4061 = b$$47[d$$19]
        }
        var v3255 = v4061.substr(0, e$$16);
        introspect(JAM.policy.p4) {
          var v4062 = b$$47[d$$19]
        }
        var v5215 = v4062.substr(e$$16 + 1);
        JAM.set(v3254, v3255, v5215, JAM.policy.p2)
      }
      d$$19 = d$$19 + 1;
      v1871 = d$$19 < b$$47.length
    }
    b$$47 = c$$25[3];
    var v3257 = c$$25[1] == gb;
    if(v3257) {
      window.google_top_js_status = 4;
      var v4875 = a$$59.source == top;
      if(v4875) {
        var v5029 = 0 == b$$47.indexOf(a$$59.origin);
        if(v5029) {
          window.google_top_values = c$$25;
          window.google_top_js_status = 5
        }
      }
      v3257 = window.google_top_js_callbacks
    }
    if(v3257) {
      a$$59 = 0;
      var v1873 = a$$59 < window.google_top_js_callbacks.length;
      for(;v1873;) {
        var v1872 = window.google_top_js_callbacks;
        JAM.call(JAM.get(v1872, a$$59, JAM.policy.p4), v1872, []);
        a$$59 = a$$59 + 1;
        v1873 = a$$59 < window.google_top_js_callbacks.length
      }
      window.google_top_js_callbacks.length = 0
    }
    return
  }
  function eb(a$$58, b$$46, c$$24, d$$18) {
    var e$$15 = "script";
    var f$$7 = b$$46.google_ad_width;
    var g$$6 = b$$46.google_ad_height;
    var l$$4 = {};
    db(l$$4, f$$7, g$$6, !0);
    JAM.set(l$$4, "onload", '"' + Ka + '"');
    d$$18 = JAM.call(d$$18, null, [a$$58, l$$4, b$$46]);
    var v1878;
    var v4067 = window.google_override_format;
    if(!v4067) {
      var v5030 = window.google_ad_width + "x" + window.google_ad_height;
      introspect(JAM.policy.p4) {
        var v4876 = $a[v5030]
      }
      var v4575 = !v4876;
      if(v4575) {
        v4575 = "aa" == window.google_loader_used
      }
      v4067 = v4575
    }
    if(v4067) {
      v1878 = I(["c", "e"], na)
    }else {
      v1878 = null
    }
    l$$4 = v1878;
    var h$$8 = b$$46.google_ad_output;
    var k$$2 = b$$46.google_ad_format;
    if(!k$$2) {
      var v4068 = "html" != h$$8;
      if(v4068) {
        v4068 = null != h$$8
      }
      var v3262 = v4068;
      if(!v3262) {
        k$$2 = b$$46.google_ad_width + "x" + b$$46.google_ad_height;
        var v4579 = "e" == l$$4;
        if(v4579) {
          k$$2 = k$$2 + "_as"
        }
      }
    }
    var v1879 = !b$$46.google_ad_slot;
    if(!v1879) {
      var v3265 = b$$46.google_override_format;
      if(!v3265) {
        var v4879 = b$$46.google_ad_width + "x" + b$$46.google_ad_height;
        introspect(JAM.policy.p4) {
          var v4580 = $a[v4879]
        }
        var v4070 = !v4580;
        if(v4070) {
          v4070 = "aa" == b$$46.google_loader_used
        }
        v3265 = v4070
      }
      v1879 = v3265
    }
    h$$8 = v1879;
    var v1880;
    if(k$$2 && h$$8) {
      v1880 = k$$2.toLowerCase()
    }else {
      v1880 = ""
    }
    k$$2 = v1880;
    b$$46.google_ad_format = k$$2;
    k$$2 = ya(c$$24, b$$46, !0);
    b$$46.google_ad_unit_key = k$$2;
    var v1882 = window;
    var v3268 = window.google_adk2_experiment;
    if(!v3268) {
      var v4072 = I(["C", "E"], ma);
      if(!v4072) {
        v4072 = "N"
      }
      v3268 = v4072
    }
    k$$2 = v1882.google_adk2_experiment = v3268;
    var v1883;
    if("E" == k$$2) {
      var v3269 = b$$46;
      var v5216 = ya(c$$24, b$$46);
      v1883 = v3269.google_ad_unit_key_2 = v5216
    }else {
      var v3270 = "C" == k$$2;
      if(v3270) {
        v3270 = b$$46.google_ad_unit_key_2 = "ctrl"
      }
      v1883 = v3270
    }
    v1883;
    c$$24 = Ha(b$$46);
    k$$2 = Ja(a$$58);
    h$$8 = a$$58.document;
    var v4074 = {visible:1, hidden:2, prerender:3, preview:4};
    var v4584 = h$$8.webkitVisibilityState;
    if(!v4584) {
      var v4880 = h$$8.mozVisibilityState;
      if(!v4880) {
        var v5033 = h$$8.visibilityState;
        if(!v5033) {
          v5033 = ""
        }
        v4880 = v5033
      }
      v4584 = v4880
    }
    var v4075 = v4584;
    introspect(JAM.policy.p4) {
      var v3272 = v4074[v4075]
    }
    if(!v3272) {
      v3272 = 0
    }
    h$$8 = 3 == v3272;
    if(k$$2) {
      var v3273 = !h$$8;
      if(v3273) {
        var v4077 = void 0 === a$$58.google_ad_handling_mode;
        if(v4077) {
          var v4587 = a$$58;
          var v4882 = I(["XN", "AZ", "S"], ka);
          if(!v4882) {
            v4882 = I(["EI"], la)
          }
          v4587.google_ad_handling_mode = v4882
        }
      }
    }
    var v1885;
    if(a$$58.google_ad_handling_mode) {
      v1885 = String(a$$58.google_ad_handling_mode)
    }else {
      v1885 = null
    }
    k$$2 = v1885;
    var v3276 = Ja(a$$58);
    if(v3276) {
      var v4078 = 1 == a$$58.google_unique_id;
      if(v4078) {
        var v4589 = "XN" != k$$2;
        if(v4589) {
          v4589 = "S" != k$$2
        }
        v4078 = v4589
      }
      v3276 = v4078
    }
    if(v3276) {
      h$$8 = "zrt_ads_frame" + a$$58.google_unique_id;
      var m$$2;
      m$$2 = b$$46.google_page_url;
      if(!m$$2) {
        r: {
          m$$2 = a$$58.document;
          var v1887 = f$$7;
          if(!v1887) {
            v1887 = a$$58.google_ad_width
          }
          var q$$2 = v1887;
          var v1888 = g$$6;
          if(!v1888) {
            v1888 = a$$58.google_ad_height
          }
          var x$$50 = v1888;
          if(a$$58.top == a$$58) {
            m$$2 = !1
          }else {
            var B$$1 = m$$2.documentElement;
            if(q$$2 && x$$50) {
              var u$$1 = 1;
              var r$$1 = 1;
              var v1889;
              if(a$$58.innerHeight) {
                u$$1 = a$$58.innerWidth;
                v1889 = r$$1 = a$$58.innerHeight
              }else {
                var v3280;
                var v4590 = B$$1;
                if(v4590) {
                  v4590 = B$$1.clientHeight
                }
                if(v4590) {
                  u$$1 = B$$1.clientWidth;
                  v3280 = r$$1 = B$$1.clientHeight
                }else {
                  var v4079 = m$$2.body;
                  if(v4079) {
                    u$$1 = m$$2.body.clientWidth;
                    v4079 = r$$1 = m$$2.body.clientHeight
                  }
                  v3280 = v4079
                }
                v1889 = v3280
              }
              v1889;
              var v3282 = r$$1 > 2 * x$$50;
              if(!v3282) {
                v3282 = u$$1 > 2 * q$$2
              }
              if(v3282) {
                m$$2 = !1;
                break r
              }
            }
            m$$2 = !0
          }
        }
        var v1893;
        if(m$$2) {
          v1893 = a$$58.document.referrer
        }else {
          v1893 = a$$58.document.URL
        }
        m$$2 = v1893
      }
      m$$2 = encodeURIComponent(m$$2);
      q$$2 = null;
      var v3285 = "PC" == k$$2;
      if(!v3285) {
        var v4084 = "EI" == k$$2;
        if(!v4084) {
          v4084 = "AZ" == k$$2
        }
        v3285 = v4084
      }
      if(v3285) {
        switch(k$$2) {
          case "EI":
            q$$2 = "I";
            break;
          case "AZ":
            q$$2 = "Z";
            break;
          default:
            q$$2 = "K"
        }
        q$$2 = q$$2 + "-" + (m$$2 + "/" + b$$46.google_ad_unit_key + "/" + a$$58.google_unique_id)
      }
      b$$46 = {};
      db(b$$46, f$$7, g$$6, !1);
      b$$46.style = "display:none";
      f$$7 = q$$2;
      b$$46.id = h$$8;
      b$$46.name = h$$8;
      var v1899 = A("", "doubleclick");
      var v4594;
      if(f$$7) {
        v4594 = "#" + encodeURIComponent(f$$7)
      }else {
        v4594 = ""
      }
      f$$7 = C(v1899, ["/pagead/html/r20131120/r20130906/zrt_lookup.html", v4594].join(""));
      b$$46.src = f$$7;
      f$$7 = cb(b$$46)
    }else {
      f$$7 = null
    }
    g$$6 = (new Date).getTime();
    b$$46 = a$$58.google_top_experiment;
    h$$8 = a$$58.google_async_for_oa_experiment;
    m$$2 = a$$58.google_always_use_delayed_impressions_experiment;
    var v3289 = a$$58.google_unique_id;
    var v4088;
    if(b$$46) {
      v4088 = 'google_top_experiment="' + b$$46 + '";'
    }else {
      v4088 = ""
    }
    var v3290 = v4088;
    var v4089;
    if(k$$2) {
      v4089 = 'google_ad_handling_mode="' + k$$2 + '";'
    }else {
      v4089 = ""
    }
    var v3291 = v4089;
    var v4090;
    if(h$$8) {
      v4090 = 'google_async_for_oa_experiment="' + h$$8 + '";'
    }else {
      v4090 = ""
    }
    var v3292 = v4090;
    var v4091;
    if(m$$2) {
      v4091 = 'google_always_use_delayed_impressions_experiment="' + m$$2 + '";'
    }else {
      v4091 = ""
    }
    var v3293 = v4091;
    var v4092;
    if(l$$4) {
      v4092 = 'google_append_as_for_format_override="' + l$$4 + '";'
    }else {
      v4092 = ""
    }
    var v3294 = v4092;
    var v4093;
    if(g$$6 > v) {
      v4093 = g$$6 - v
    }else {
      v4093 = 1
    }
    l$$4 = ["<!doctype html><html><body>", f$$7, "<", e$$15, ">", c$$24, "google_show_ads_impl=true;google_unique_id=", v3289, ';google_async_iframe_id="', d$$18, '";google_start_time=', v, ";", v3290, v3291, v3292, v3293, v3294, "google_bpp=", v4093, ";google_async_rrc=0;</", e$$15, ">", ab(), "</body></html>"].join("");
    var v3297;
    var v4601 = a$$58.document;
    if(JAM.call(JAM.get(v4601, "getElementById", JAM.policy.p1), v4601, [d$$18])) {
      v3297 = Ya
    }else {
      v3297 = Za
    }
    JAM.call(v3297, null, [bb(a$$58, d$$18, l$$4, !0)]);
    return
  }
  function fb(a$$56, b$$44, c$$23) {
    function v2(a$$57, b$$45, f$$6) {
      var g$$5 = b$$45.id;
      var l$$3 = 0;
      var v3299 = !g$$5;
      if(!v3299) {
        var v4095 = a$$57.document;
        v3299 = JAM.call(JAM.get(v4095, "getElementById", JAM.policy.p1), v4095, [g$$5])
      }
      var v1907 = v3299;
      for(;v1907;) {
        var v1906 = l$$3;
        l$$3 = l$$3 + 1;
        g$$5 = "aswift_" + v1906;
        var v3300 = !g$$5;
        if(!v3300) {
          var v4097 = a$$57.document;
          v3300 = JAM.call(JAM.get(v4097, "getElementById", JAM.policy.p1), v4097, [g$$5])
        }
        v1907 = v3300
      }
      b$$45.id = g$$5;
      b$$45.name = g$$5;
      a$$57 = Number(f$$6.google_ad_width);
      g$$5 = Number(f$$6.google_ad_height);
      f$$6 = ["<iframe"];
      var h$$7;
      for(h$$7 in b$$45) {
        var v1910 = b$$45.hasOwnProperty(h$$7);
        if(v1910) {
          var v4099 = h$$7 + "=";
          introspect(JAM.policy.p4) {
            var v4100 = b$$45[h$$7]
          }
          ua(f$$6, v4099 + v4100)
        }
      }
      JAM.call(f$$6.push, f$$6, ['style="left:0;position:absolute;top:0;"']);
      JAM.call(f$$6.push, f$$6, ["></iframe>"]);
      h$$7 = "border:none;height:" + g$$5 + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + a$$57 + "px;background-color:transparent";
      var v1912 = c$$23;
      var v5217 = ['<ins style="display:inline-table;', h$$7, '"><ins id="', b$$45.id + "_anchor", '" style="display:block;', h$$7, '">', f$$6.join(" "), "</ins></ins>"].join("");
      JAM.set(v1912, "innerHTML", v5217);
      return b$$45.id
    }
    eb(a$$56, b$$44, c$$23, v2);
    return
  }
  function db(a$$55, b$$43, c$$22, d$$17) {
    var v1913;
    if(d$$17) {
      v1913 = '"'
    }else {
      v1913 = ""
    }
    d$$17 = v1913;
    var e$$14 = d$$17 + "0" + d$$17;
    a$$55.width = d$$17 + b$$43 + d$$17;
    a$$55.height = d$$17 + c$$22 + d$$17;
    a$$55.frameborder = e$$14;
    a$$55.marginwidth = e$$14;
    a$$55.marginheight = e$$14;
    a$$55.vspace = e$$14;
    a$$55.hspace = e$$14;
    a$$55.allowtransparency = d$$17 + "true" + d$$17;
    a$$55.scrolling = d$$17 + "no" + d$$17;
    return
  }
  function cb(a$$53) {
    function v3(a$$54, d$$16) {
      var v1919 = null != a$$54;
      if(v1919) {
        JAM.call(b$$42.push, b$$42, [" " + d$$16 + '="' + a$$54 + '"'])
      }
      return
    }
    var b$$42 = ["<iframe"];
    G(a$$53, v3);
    JAM.call(b$$42.push, b$$42, ["></iframe>"]);
    return b$$42.join("")
  }
  function bb(a$$52, b$$41, c$$21, d$$15) {
    function v4() {
      var e$$13 = !1;
      if(d$$15) {
        var v3305 = Xa();
        JAM.call(v3305.al, v3305, [3E4])
      }
      try {
        var v4604 = a$$52.document;
        if(J(JAM.call(JAM.get(v4604, "getElementById", JAM.policy.p1), v4604, [b$$41]).contentWindow)) {
          var v3307 = a$$52.document;
          var f$$5 = JAM.call(JAM.get(v3307, "getElementById", JAM.policy.p1), v3307, [b$$41]).contentWindow;
          var g$$4 = f$$5.document;
          var v3308 = g$$4.body;
          if(v3308) {
            v3308 = g$$4.body.firstChild
          }
          var v1921 = v3308;
          if(!v1921) {
            g$$4.open();
            f$$5.google_async_iframe_close = !0;
            JAM.call(g$$4.write, g$$4, [c$$21])
          }
        }else {
          var v3310 = a$$52.document;
          var l$$2 = JAM.call(JAM.get(v3310, "getElementById", JAM.policy.p1), v3310, [b$$41]).contentWindow;
          var h$$6;
          f$$5 = c$$21;
          f$$5 = String(f$$5);
          if(f$$5.quote) {
            h$$6 = f$$5.quote()
          }else {
            g$$4 = ['"'];
            var k$$1 = 0;
            var v1930 = k$$1 < f$$5.length;
            for(;v1930;) {
              var m$$1 = f$$5.charAt(k$$1);
              var q$$1 = m$$1.charCodeAt(0);
              var x$$49 = g$$4;
              var B = k$$1 + 1;
              var u;
              introspect(JAM.policy.p4) {
                var v3312 = u = E[m$$1]
              }
              if(!v3312) {
                var r;
                var v3313 = 31 < q$$1;
                if(v3313) {
                  v3313 = 127 > q$$1
                }
                if(v3313) {
                  r = m$$1
                }else {
                  var t = m$$1;
                  if(t in F) {
                    introspect(JAM.policy.p4) {
                      r = F[t]
                    }
                  }else {
                    if(t in E) {
                      r = JAM.set(F, t, JAM.get(E, t, JAM.policy.p5), JAM.policy.p5)
                    }else {
                      var s$$2 = t;
                      var y$$31 = t.charCodeAt(0);
                      var v3314 = 31 < y$$31;
                      if(v3314) {
                        v3314 = 127 > y$$31
                      }
                      if(v3314) {
                        s$$2 = t
                      }else {
                        if(256 > y$$31) {
                          s$$2 = "\\x";
                          var v4107 = 16 > y$$31;
                          if(!v4107) {
                            v4107 = 256 < y$$31
                          }
                          if(v4107) {
                            s$$2 = s$$2 + "0"
                          }
                        }else {
                          s$$2 = "\\u";
                          var v3315 = 4096 > y$$31;
                          if(v3315) {
                            s$$2 = s$$2 + "0"
                          }
                        }
                        s$$2 = s$$2 + y$$31.toString(16).toUpperCase()
                      }
                      r = JAM.set(F, t, s$$2, JAM.policy.p2)
                    }
                  }
                }
                u = r
              }
              x$$49[B] = u;
              k$$1 = k$$1 + 1;
              v1930 = k$$1 < f$$5.length
            }
            JAM.call(g$$4.push, g$$4, ['"']);
            h$$6 = g$$4.join("")
          }
          l$$2.location.replace("javascript:" + h$$6)
        }
        e$$13 = !0
      }catch(sb) {
        l$$2 = Da().google_jobrunner;
        var v3320 = Wa(l$$2);
        if(v3320) {
          l$$2.rl()
        }
      }
      if(e$$13) {
        e$$13 = La("google_async_rrc", c$$21);
        var v4109 = new Q(a$$52);
        JAM.call(v4109.set, v4109, [b$$41, bb(a$$52, b$$41, e$$13, !1)])
      }
      return
    }
    return v4
  }
  function ab() {
    var a$$51 = "script";
    return["<", a$$51, ' src="', C(A("", "googlesyndication"), "/pagead/js/r20131120/r20130906/show_ads_impl.js", ""), '"></', a$$51, ">"].join("")
  }
  function Za(a$$50, b$$40) {
    var v1936 = Xa();
    JAM.call(v1936.nqa, v1936, [a$$50, b$$40]);
    return
  }
  function Ya(a$$49, b$$39) {
    var v1937 = Xa();
    JAM.call(v1937.nq, v1937, [a$$49, b$$39]);
    return
  }
  function Xa() {
    var v3322 = X;
    if(v3322) {
      v3322 = Va(X)
    }
    if(v3322) {
      return X
    }
    var a$$48 = Da();
    var b$$38 = a$$48.google_jobrunner;
    var v1939;
    if(Wa(b$$38)) {
      v1939 = X = b$$38
    }else {
      v1939 = a$$48.google_jobrunner = X = new Y(a$$48)
    }
    return v1939
  }
  function Wa(a$$47) {
    var v1940 = !!a$$47;
    if(v1940) {
      var v4112 = "object" == typeof a$$47;
      if(!v4112) {
        v4112 = "function" == typeof a$$47
      }
      var v3326 = v4112;
      if(v3326) {
        var v4113 = Va(a$$47);
        if(v4113) {
          var v4610 = H(a$$47.nq);
          if(v4610) {
            var v4888 = H(a$$47.nqa);
            if(v4888) {
              var v5039 = H(a$$47.al);
              if(v5039) {
                v5039 = H(a$$47.rl)
              }
              v4888 = v5039
            }
            v4610 = v4888
          }
          v4113 = v4610
        }
        v3326 = v4113
      }
      v1940 = v3326
    }
    return v1940
  }
  function Va(a$$46) {
    try {
      return a$$46.sz()
    }catch(b$$37) {
      return!1
    }
    return
  }
  function Ua(a$$43) {
    var b$$35 = M("sjr::tryrun", JAM.call(p, null, [a$$43.m, a$$43]));
    a$$43.b.setTimeout(b$$35, 0);
    return
  }
  function Ta(a$$39, b$$31) {
    this.k = a$$39;
    this.h = b$$31;
    return
  }
  function Y(a$$38) {
    this.c = [];
    this.b = a$$38 || window;
    this.a = 0;
    this.d = null;
    return
  }
  function La(a$$37, b$$30) {
    var c$$20 = RegExp("\\b" + a$$37 + "=(\\d+)");
    var d$$14 = c$$20.exec(b$$30);
    if(d$$14) {
      var v4114 = a$$37 + "=";
      var v4611 = +d$$14[1] + 1;
      if(!v4611) {
        v4611 = 1
      }
      b$$30 = b$$30.replace(c$$20, v4114 + v4611)
    }
    return b$$30
  }
  function Q(a$$33) {
    this.b = a$$33;
    var v1944 = a$$33.google_iframe_oncopy;
    if(!v1944) {
      a$$33.google_iframe_oncopy = {handlers:{}, upd:JAM.call(p, null, [this.l, this])}
    }
    this.i = a$$33.google_iframe_oncopy;
    return
  }
  function Ja(a$$32) {
    try {
      var b$$26 = Ia.test(a$$32.location.host);
      var v3333 = !a$$32.postMessage;
      if(!v3333) {
        var v4118 = !a$$32.localStorage;
        if(!v4118) {
          var v4614 = !a$$32.JSON;
          if(!v4614) {
            v4614 = b$$26
          }
          v4118 = v4614
        }
        v3333 = v4118
      }
      return!v3333
    }catch(c$$18) {
      return!1
    }
    return
  }
  function Ha(a$$30) {
    function v5(a$$31, d$$12) {
      if(null != a$$31) {
        var e$$12;
        try {
          var f$$4 = [];
          O(new Ea, a$$31, f$$4);
          e$$12 = f$$4.join("")
        }catch(g$$3) {
        }
        if(e$$12) {
          ua(b$$25, d$$12, "=", e$$12, ";")
        }
      }
      return
    }
    var v1949 = a$$30.google_page_url;
    if(v1949) {
      var v3334 = a$$30;
      var v5218 = String(a$$30.google_page_url);
      v3334.google_page_url = v5218
    }
    var b$$25 = [];
    G(a$$30, v5);
    return b$$25.join("")
  }
  function Fa(a$$28, b$$23) {
    function v6(a$$29) {
      if(a$$29 in P) {
        introspect(JAM.policy.p4) {
          return P[a$$29]
        }
      }
      var b$$24 = a$$29.charCodeAt(0);
      var e$$11 = "\\u";
      var v1951;
      if(16 > b$$24) {
        v1951 = e$$11 = e$$11 + "000"
      }else {
        var v3335;
        if(256 > b$$24) {
          v3335 = e$$11 = e$$11 + "00"
        }else {
          var v4121 = 4096 > b$$24;
          if(v4121) {
            v4121 = e$$11 = e$$11 + "0"
          }
          v3335 = v4121
        }
        v1951 = v3335
      }
      v1951;
      return JAM.set(P, a$$29, e$$11 + b$$24.toString(16), JAM.policy.p2)
    }
    JAM.call(b$$23.push, b$$23, ['"']);
    JAM.call(b$$23.push, b$$23, [a$$28.replace(Ga, v6)]);
    JAM.call(b$$23.push, b$$23, ['"']);
    return
  }
  function O(a$$27, b$$22, c$$17) {
    switch(typeof b$$22) {
      case "string":
        Fa(b$$22, c$$17);
        break;
      case "number":
        var v3339;
        var v4616 = isFinite(b$$22);
        if(v4616) {
          v4616 = !isNaN(b$$22)
        }
        if(v4616) {
          v3339 = b$$22
        }else {
          v3339 = "null"
        }
        JAM.call(c$$17.push, c$$17, [v3339]);
        break;
      case "boolean":
        JAM.call(c$$17.push, c$$17, [b$$22]);
        break;
      case "undefined":
        JAM.call(c$$17.push, c$$17, ["null"]);
        break;
      case "object":
        if(null == b$$22) {
          JAM.call(c$$17.push, c$$17, ["null"]);
          break
        }
        if(b$$22 instanceof Array) {
          var d$$11 = b$$22.length;
          JAM.call(c$$17.push, c$$17, ["["]);
          var e$$10 = "";
          var f$$3 = 0;
          var v1957 = f$$3 < d$$11;
          for(;v1957;) {
            JAM.call(c$$17.push, c$$17, [e$$10]);
            introspect(JAM.policy.p4) {
              var v4124 = b$$22[f$$3]
            }
            O(a$$27, v4124, c$$17);
            e$$10 = ",";
            f$$3 = f$$3 + 1;
            v1957 = f$$3 < d$$11
          }
          JAM.call(c$$17.push, c$$17, ["]"]);
          break
        }
        JAM.call(c$$17.push, c$$17, ["{"]);
        d$$11 = "";
        for(e$$10 in b$$22) {
          var v1959 = b$$22.hasOwnProperty(e$$10);
          if(v1959) {
            introspect(JAM.policy.p4) {
              f$$3 = b$$22[e$$10]
            }
            var v4125 = "function" != typeof f$$3;
            if(v4125) {
              JAM.call(c$$17.push, c$$17, [d$$11]);
              Fa(e$$10, c$$17);
              JAM.call(c$$17.push, c$$17, [":"]);
              O(a$$27, f$$3, c$$17);
              d$$11 = ","
            }
          }
        }
        JAM.call(c$$17.push, c$$17, ["}"]);
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof b$$22);
    }
    return
  }
  function Ea() {
    return
  }
  function Da() {
    if(!N) {
      var a$$26 = window;
      var b$$21 = a$$26;
      var c$$16 = 0;
      var v1963 = a$$26 != a$$26.parent;
      for(;v1963;) {
        a$$26 = a$$26.parent;
        c$$16 = c$$16 + 1;
        if(J(a$$26)) {
          b$$21 = a$$26
        }else {
          break
        }
        v1963 = a$$26 != a$$26.parent
      }
      N = b$$21
    }
    return N
  }
  function Ca(a$$24) {
    function v7(a$$25, d$$10) {
      var v3343 = 0 === a$$25;
      if(!v3343) {
        v3343 = a$$25
      }
      if(v3343) {
        var v3344 = b$$20;
        var v4127 = "&" + d$$10 + "=";
        var v4619;
        if("function" == typeof encodeURIComponent) {
          v4619 = encodeURIComponent(a$$25)
        }else {
          v4619 = escape(a$$25)
        }
        b$$20 = v3344 + (v4127 + v4619)
      }
      return
    }
    var b$$20 = "";
    G(a$$24, v7);
    return b$$20
  }
  function M(a$$23, b$$19) {
    return da(K, a$$23, L, b$$19, void 0)
  }
  function Ba(a$$21) {
    function v8(a$$22, d$$9) {
      JAM.set(b$$18, d$$9, JAM.get(D, a$$22, JAM.policy.p5), JAM.policy.p5);
      return
    }
    var b$$18 = a$$21 || {};
    G(za, v8);
    return
  }
  function Aa(a$$20) {
    if(0.01 > Math.random()) {
      a$$20 = "/pagead/gen_204?id=jserror" + Ca(a$$20);
      a$$20 = C(A("", "googlesyndication"), a$$20);
      a$$20 = a$$20.substring(0, 2E3);
      var v1969 = D.google_image_requests;
      if(!v1969) {
        D.google_image_requests = []
      }
      var v1970 = D.document;
      var b$$17 = JAM.call(v1970.createElement, v1970, ["img"]);
      b$$17.src = a$$20;
      var v1971 = D.google_image_requests;
      JAM.call(v1971.push, v1971, [b$$17])
    }
    return
  }
  function L(a$$19, b$$16, c$$15, d$$8, e$$9) {
    var v3348;
    if(fa) {
      v3348 = 1
    }else {
      v3348 = 0
    }
    var v1973 = v3348;
    var v3349;
    if(ga) {
      v3349 = 1
    }else {
      v3349 = 0
    }
    var v1974 = v3349;
    var v1975 = b$$16.substring(0, 512);
    var v3350 = e$$9;
    if(v3350) {
      v3350 = e$$9.substring(0, 40)
    }
    a$$19 = {jscb:v1973, jscd:v1974, context:a$$19, msg:v1975, eid:v3350, file:c$$15, line:d$$8.toString(), url:pa.URL.substring(0, 512), ref:pa.referrer.substring(0, 512)};
    Ba(a$$19);
    Aa(a$$19);
    return!ha
  }
  function K(a$$18, b$$15, c$$14, d$$7) {
    try {
      c$$14()
    }catch(e$$8) {
      c$$14 = !ha;
      try {
        var f$$2 = e$$8.toString();
        var v1980 = e$$8.name;
        if(v1980) {
          var v3353 = -1 == f$$2.indexOf(e$$8.name);
          if(v3353) {
            f$$2 = f$$2 + (": " + e$$8.name)
          }
        }
        var v1981 = e$$8.message;
        if(v1981) {
          var v3354 = -1 == f$$2.indexOf(e$$8.message);
          if(v3354) {
            f$$2 = f$$2 + (": " + e$$8.message)
          }
        }
        if(e$$8.stack) {
          var g$$2 = e$$8.stack;
          var l$$1 = f$$2;
          try {
            var v1982 = -1 == g$$2.indexOf(l$$1);
            if(v1982) {
              g$$2 = l$$1 + "\n" + g$$2
            }
            var h$$5;
            var v1983 = g$$2 != h$$5;
            for(;v1983;) {
              h$$5 = g$$2;
              g$$2 = g$$2.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
              v1983 = g$$2 != h$$5
            }
            f$$2 = g$$2.replace(/\n */g, "\n")
          }catch(k) {
            f$$2 = l$$1
          }
        }
        g$$2 = "";
        var v1985 = e$$8.fileName;
        if(v1985) {
          g$$2 = e$$8.fileName
        }
        h$$5 = -1;
        var v1986 = e$$8.lineNumber;
        if(v1986) {
          h$$5 = e$$8.lineNumber
        }
        var m;
        t: {
          try {
            var v1987;
            if(d$$7) {
              v1987 = d$$7()
            }else {
              v1987 = ""
            }
            m = v1987;
            break t
          }catch(q) {
          }
          m = ""
        }
        c$$14 = JAM.call(b$$15, null, [a$$18, f$$2, g$$2, h$$5, m])
      }catch(x$$48) {
        var v4131 = x$$48.toString() + "\n";
        var v4625 = x$$48.stack;
        if(!v4625) {
          v4625 = ""
        }
        Aa({context:"protectAndRun", msg:v4131 + v4625})
      }
      if(!c$$14) {
        throw e$$8;
      }
    }
    return
  }
  function J(a$$17) {
    try {
      var v1990 = !!a$$17.location.href;
      if(!v1990) {
        v1990 = "" === a$$17.location.href
      }
      return v1990
    }catch(b$$14) {
      return!1
    }
    return
  }
  function ya(a$$16, b$$13, c$$13) {
    b$$13 = [b$$13.google_ad_slot, b$$13.google_ad_format, b$$13.google_ad_type, b$$13.google_ad_width, b$$13.google_ad_height];
    if(c$$13) {
      c$$13 = [];
      var d$$6 = 0;
      var v3361 = a$$16;
      if(v3361) {
        v3361 = 25 > d$$6
      }
      var v1997 = v3361;
      for(;v1997;) {
        var v4135 = 9 != a$$16.nodeType;
        if(v4135) {
          v4135 = a$$16.id
        }
        var v3362 = v4135;
        if(!v3362) {
          v3362 = ""
        }
        JAM.call(c$$13.push, c$$13, [v3362]);
        a$$16 = a$$16.parentNode;
        d$$6 = d$$6 + 1;
        var v3363 = a$$16;
        if(v3363) {
          v3363 = 25 > d$$6
        }
        v1997 = v3363
      }
      var v1998 = a$$16 = c$$13.join();
      if(v1998) {
        JAM.call(b$$13.push, b$$13, [a$$16])
      }
    }else {
      JAM.call(b$$13.push, b$$13, [wa(a$$16)]);
      JAM.call(b$$13.push, b$$13, [xa()])
    }
    b$$13 = b$$13.join(":");
    a$$16 = b$$13.length;
    if(0 == a$$16) {
      b$$13 = 0
    }else {
      c$$13 = 305419896;
      d$$6 = 0;
      var v1999 = d$$6 < a$$16;
      for(;v1999;) {
        c$$13 = c$$13 ^ (c$$13 << 5) + (c$$13 >> 2) + b$$13.charCodeAt(d$$6) & 4294967295;
        d$$6 = d$$6 + 1;
        v1999 = d$$6 < a$$16
      }
      var v2000;
      if(0 < c$$13) {
        v2000 = c$$13
      }else {
        v2000 = 4294967296 + c$$13
      }
      b$$13 = v2000
    }
    return b$$13.toString()
  }
  function xa() {
    var a$$15 = D;
    var b$$12 = [];
    if(a$$15) {
      try {
        var c$$12 = a$$15.parent;
        var d$$5 = 0;
        var v3369 = c$$12;
        if(v3369) {
          var v4138 = c$$12 != a$$15;
          if(v4138) {
            v4138 = 25 > d$$5
          }
          v3369 = v4138
        }
        var v2004 = v3369;
        for(;v2004;) {
          var e$$7 = c$$12.frames;
          var f$$1 = 0;
          var v2003 = f$$1 < e$$7.length;
          for(;v2003;) {
            introspect(JAM.policy.p4) {
              var v3371 = e$$7[f$$1]
            }
            if(a$$15 == v3371) {
              JAM.call(b$$12.push, b$$12, [f$$1]);
              break
            }
            f$$1 = f$$1 + 1;
            v2003 = f$$1 < e$$7.length
          }
          a$$15 = c$$12;
          c$$12 = a$$15.parent;
          d$$5 = d$$5 + 1;
          var v3373 = c$$12;
          if(v3373) {
            var v4139 = c$$12 != a$$15;
            if(v4139) {
              v4139 = 25 > d$$5
            }
            v3373 = v4139
          }
          v2004 = v3373
        }
      }catch(g$$1) {
      }
    }
    return b$$12.join()
  }
  function wa(a$$14) {
    var b$$11 = [];
    var c$$11 = 0;
    var v3374 = a$$14;
    if(v3374) {
      v3374 = 25 > c$$11
    }
    var v2012 = v3374;
    for(;v2012;) {
      var v2005 = 9 != a$$14.nodeType;
      if(v2005) {
        v2005 = a$$14.id
      }
      var d$$4 = v2005;
      var v2006;
      if(d$$4) {
        v2006 = "/" + d$$4
      }else {
        v2006 = ""
      }
      d$$4 = v2006;
      var e$$6;
      t: {
        var f = a$$14.parentElement;
        e$$6 = a$$14.nodeName.toLowerCase();
        if(f) {
          f = f.childNodes;
          var g = 0;
          var l = 0;
          var v2010 = l < f.length;
          for(;v2010;) {
            introspect(JAM.policy.p4) {
              var h$$4 = f[l]
            }
            var v3377 = h$$4.nodeName;
            if(v3377) {
              v3377 = h$$4.nodeName.toLowerCase() == e$$6
            }
            if(v3377) {
              if(a$$14 == h$$4) {
                e$$6 = "." + g;
                break t
              }
              g = g + 1
            }
            l = l + 1;
            v2010 = l < f.length
          }
        }
        e$$6 = ""
      }
      var v4631 = a$$14.nodeName;
      if(v4631) {
        v4631 = a$$14.nodeName.toLowerCase()
      }
      JAM.call(b$$11.push, b$$11, [v4631 + d$$4 + e$$6]);
      a$$14 = a$$14.parentElement;
      c$$11 = c$$11 + 1;
      var v3380 = a$$14;
      if(v3380) {
        v3380 = 25 > c$$11
      }
      v2012 = v3380
    }
    return b$$11.join()
  }
  function va(a$$13) {
    var v2013;
    if(a$$13.google_unique_id) {
      v2013 = a$$13.google_unique_id = a$$13.google_unique_id + 1
    }else {
      v2013 = a$$13.google_unique_id = 1
    }
    v2013;
    return
  }
  function I(a$$12, b$$10) {
    if(!(1E-4 > Math.random())) {
      var c$$10 = Math.random();
      if(c$$10 < b$$10) {
        try {
          var d$$3 = new Uint16Array(1);
          var v2014 = window.crypto;
          JAM.call(v2014.getRandomValues, v2014, [d$$3]);
          c$$10 = d$$3[0] / 65536
        }catch(e$$5) {
          c$$10 = Math.random()
        }
        var v2016 = a$$12;
        var v2017 = JAM.call(Math.floor, Math, [c$$10 * a$$12.length]);
        introspect(JAM.policy.p4) {
          return v2016[v2017]
        }
      }
    }
    return null
  }
  function ua(a$$11, b$$9) {
    if(!(2 > arguments.length)) {
      var c$$9 = 1;
      var d$$2 = arguments.length;
      var v2021 = c$$9 < d$$2;
      for(;v2021;) {
        introspect(JAM.policy.p4) {
          var v2020 = arguments[c$$9]
        }
        JAM.call(a$$11.push, a$$11, [v2020]);
        c$$9 = c$$9 + 1;
        v2021 = c$$9 < d$$2
      }
    }
    return
  }
  function H(a$$10) {
    var v2023 = !!a$$10;
    if(v2023) {
      var v3386 = "function" == typeof a$$10;
      if(v3386) {
        v3386 = !!a$$10.call
      }
      v2023 = v3386
    }
    return v2023
  }
  function G(a$$9, b$$8) {
    var c$$8;
    for(c$$8 in a$$9) {
      var v3387 = Object.prototype.hasOwnProperty;
      var v2024 = JAM.call(v3387.call, v3387, [a$$9, c$$8]);
      if(v2024) {
        introspect(JAM.policy.p4) {
          var v3388 = a$$9[c$$8]
        }
        JAM.call(b$$8.call, b$$8, [null, v3388, c$$8, a$$9])
      }
    }
    return
  }
  function C(a$$8, b$$7, c$$7) {
    if(!c$$7) {
      var v3389;
      if(ia) {
        v3389 = "https"
      }else {
        v3389 = "http"
      }
      c$$7 = v3389
    }
    return[c$$7, "://", a$$8, b$$7].join("")
  }
  function A(a$$7, b$$6) {
    if(!a$$7) {
      return b$$6
    }
    var c$$6 = a$$7.match(ea);
    var v2027;
    if(c$$6) {
      v2027 = c$$6[0]
    }else {
      v2027 = b$$6
    }
    return v2027
  }
  function z$$2(a$$6) {
    var v2028;
    if(/^true$/.test(a$$6)) {
      v2028 = !0
    }else {
      v2028 = !1
    }
    return v2028
  }
  function w$$5(a$$5) {
    a$$5 = parseFloat(a$$5);
    var v2029;
    var v4149 = isNaN(a$$5);
    if(!v4149) {
      var v4633 = 1 < a$$5;
      if(!v4633) {
        v4633 = 0 > a$$5
      }
      v4149 = v4633
    }
    if(v4149) {
      v2029 = 0
    }else {
      v2029 = a$$5
    }
    return v2029
  }
  function da(a$$4, b$$4) {
    function v9() {
      var b$$5 = c$$5.slice();
      var v2030 = b$$5.push;
      JAM.call(v2030.apply, v2030, [b$$5, arguments]);
      return JAM.call(a$$4.apply, a$$4, [this, b$$5])
    }
    var v2031 = Array.prototype.slice;
    var c$$5 = JAM.call(v2031.call, v2031, [arguments, 1]);
    return v9
  }
  function p(a$$3, b$$3, c$$4) {
    var v2032;
    var v4150 = Function.prototype.bind;
    if(v4150) {
      v4150 = -1 != Function.prototype.bind.toString().indexOf("native code")
    }
    if(v4150) {
      v2032 = ba
    }else {
      v2032 = ca
    }
    p = v2032;
    return JAM.call(p.apply, p, [null, arguments])
  }
  function ca(a$$2, b$$2, c$$2) {
    function v11() {
      return JAM.call(a$$2.apply, a$$2, [b$$2, arguments])
    }
    function v10() {
      var v2033 = Array.prototype.slice;
      var c$$3 = JAM.call(v2033.call, v2033, [arguments]);
      var v2034 = Array.prototype.unshift;
      JAM.call(v2034.apply, v2034, [c$$3, d$$1]);
      return JAM.call(a$$2.apply, a$$2, [b$$2, c$$3])
    }
    if(!a$$2) {
      throw Error();
    }
    if(2 < arguments.length) {
      var v2036 = Array.prototype.slice;
      var d$$1 = JAM.call(v2036.call, v2036, [arguments, 2]);
      return v10
    }
    return v11
  }
  function ba(a$$1, b$$1, c$$1) {
    var v2038 = a$$1.call;
    return JAM.call(v2038.apply, v2038, [a$$1.bind, arguments])
  }
  function aa(a, b) {
    var c = a.split(".");
    var d = n$$1;
    var v2040 = c[0] in d;
    if(!v2040) {
      var v3400 = !d.execScript;
      if(!v3400) {
        JAM.call(d.execScript, d, ["var " + c[0]])
      }
    }
    var e$$4;
    var v3402 = c.length;
    if(v3402) {
      v3402 = e$$4 = c.shift()
    }
    var v2042 = v3402;
    for(;v2042;) {
      var v2041;
      var v4154 = c.length;
      if(!v4154) {
        v4154 = void 0 === b
      }
      if(v4154) {
        var v3403;
        introspect(JAM.policy.p4) {
          var v4155 = d[e$$4]
        }
        if(v4155) {
          introspect(JAM.policy.p4) {
            v3403 = d[e$$4]
          }
        }else {
          v3403 = JAM.set(d, e$$4, {}, JAM.policy.p2)
        }
        v2041 = d = v3403
      }else {
        v2041 = JAM.set(d, e$$4, b, JAM.policy.p2)
      }
      v2041;
      var v3405 = c.length;
      if(v3405) {
        v3405 = e$$4 = c.shift()
      }
      v2042 = v3405
    }
    return
  }
  var n$$1 = this;
  var v = (new Date).getTime();
  var ea = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/;
  var fa = z$$2("false");
  var ga = z$$2("false");
  var ha = z$$2("false");
  var ia = z$$2("false");
  var ja = w$$5("0.15");
  var ka = w$$5("0");
  var la = w$$5("");
  var ma = w$$5("0.001");
  var na = w$$5("0.2");
  var pa = document;
  var D = window;
  var qa = /&/g;
  var ra = /</g;
  var sa = />/g;
  var ta = /\"/g;
  var E = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
  var F = {"'":"\\'"};
  A("", "googlesyndication");
  var za = {client:"google_ad_client", format:"google_ad_format", slotname:"google_ad_slot", output:"google_ad_output", ad_type:"google_ad_type", async_oa:"google_async_for_oa_experiment", zrtm:"google_ad_handling_mode", dimpr:"google_always_use_delayed_impressions_experiment", peri:"google_top_experiment"};
  aa("google_protectAndRun", K);
  aa("google_handleError", L);
  var N = null;
  var P = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
  var v2044;
  if(/\uffff/.test("\uffff")) {
    v2044 = /[\\\"\x00-\x1f\x7f-\uffff]/g
  }else {
    v2044 = /[\\\"\x00-\x1f\x7f-\xff]/g
  }
  var Ga = v2044;
  var Ia = /\.((google(|groups|mail|images|print))|gmail)\./;
  var Ka;
  var R = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
  var v2045 = /[&<>\"]/.test(R);
  if(v2045) {
    var v4903 = -1 != R.indexOf("&");
    if(v4903) {
      R = R.replace(qa, "&amp;")
    }
    var v4904 = -1 != R.indexOf("<");
    if(v4904) {
      R = R.replace(ra, "&lt;")
    }
    var v4640 = -1 != R.indexOf(">");
    if(v4640) {
      R = R.replace(sa, "&gt;")
    }
    var v4156 = -1 != R.indexOf('"');
    if(v4156) {
      R = R.replace(ta, "&quot;")
    }
  }
  Ka = R;
  Q.prototype.set = v12;
  Q.prototype.j = v13;
  Q.prototype.l = v14;
  var S;
  var T;
  var U;
  var Ma;
  Ma = U = T = S = !1;
  var V;
  var v3407;
  if(n$$1.navigator) {
    v3407 = n$$1.navigator.userAgent
  }else {
    v3407 = null
  }
  if(V = v3407) {
    var Oa = n$$1.navigator;
    S = 0 == V.lastIndexOf("Opera", 0);
    var v2050 = !S;
    if(v2050) {
      var v3408 = -1 != V.indexOf("MSIE");
      if(!v3408) {
        v3408 = -1 != V.indexOf("Trident")
      }
      v2050 = v3408
    }
    T = v2050;
    var v2051 = !S;
    if(v2051) {
      v2051 = -1 != V.indexOf("WebKit")
    }
    U = v2051;
    var v2052 = !S;
    if(v2052) {
      var v3410 = !U;
      if(v3410) {
        var v4162 = !T;
        if(v4162) {
          v4162 = "Gecko" == Oa.product
        }
        v3410 = v4162
      }
      v2052 = v3410
    }
    Ma = v2052
  }
  var Pa = T;
  var Qa = Ma;
  var Ra = U;
  var W;
  var v3411 = S;
  if(v3411) {
    v3411 = n$$1.opera
  }
  if(v3411) {
    var Sa = n$$1.opera.version;
    var v2055 = "function" == typeof Sa;
    if(v2055) {
      Sa()
    }
  }else {
    var v3413;
    if(Qa) {
      v3413 = W = /rv\:([^\);]+)(\)|;)/
    }else {
      var v4163;
      if(Pa) {
        v4163 = W = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/
      }else {
        var v4643 = Ra;
        if(v4643) {
          v4643 = W = /WebKit\/(\S+)/
        }
        v4163 = v4643
      }
      v3413 = v4163
    }
    v3413;
    if(W) {
      var v4644;
      if(n$$1.navigator) {
        v4644 = n$$1.navigator.userAgent
      }else {
        v4644 = null
      }
      W.exec(v4644)
    }
  }
  var X;
  Y.prototype.n = v15;
  Y.prototype.g = v16;
  Y.prototype.o = v17;
  Y.prototype.e = v18;
  Y.prototype.p = v19;
  Y.prototype.nq = Y.prototype.n;
  Y.prototype.nqa = Y.prototype.g;
  Y.prototype.al = Y.prototype.o;
  Y.prototype.rl = Y.prototype.e;
  Y.prototype.sz = Y.prototype.p;
  Y.prototype.m = v20;
  Y.prototype.f = v21;
  var $a = {"120x90":!0, "160x90":!0, "180x90":!0, "200x90":!0, "468x15":!0, "728x15":!0};
  var gb = JAM.call(Math.floor, Math, [1E6 * Math.random()]);
  var ib = /([0-9.]+)px/;
  var Z = [{width:120, height:240, format:"vertical"}, {width:120, height:600, format:"vertical"}, {width:125, height:125, format:"rectangle"}, {width:160, height:600, format:"vertical"}, {width:180, height:150, format:"rectangle"}, {width:200, height:200, format:"rectangle"}, {width:234, height:60, format:"horizontal"}, {width:250, height:250, format:"rectangle"}, {width:300, height:250, format:"rectangle"}, {width:300, height:600, format:"vertical"}, {width:320, height:50, format:"horizontal"}, 
  {width:336, height:280, format:"rectangle"}, {width:468, height:60, format:"horizontal"}, {width:728, height:90, format:"horizontal"}, {width:970, height:90, format:"horizontal"}];
  var $ = ["google_analytics_uacct", "google_analytics_domain_name"];
  rb();
  return
}
v22();
v254()
