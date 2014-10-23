// adsense.js
function v254() {
  function v253() {
    var a$$530 = v$$1;
    var b$$402 = JAM.call(a$$530.createElement, a$$530, ["script"], JAM.policy.p3);
    b$$402.async = !0;
    b$$402.type = "text/javascript";
    var v255 = b$$402;
    var v5108 = di();
    v255.src = v5108;
    a$$530 = JAM.call(a$$530.getElementsByTagName, a$$530, ["script"], JAM.policy.p3)[0];
    var v257 = a$$530.parentNode;
    JAM.call(v257.insertBefore, v257, [b$$402, a$$530], JAM.policy.p3);
    return;
  }
  function v252(a$$527) {
    function b$$401(a$$528) {
      var v258;
      var v3451 = void 0 !== a$$528;
      if (v3451) {
        v3451 = null !== a$$528;
      }
      if (v3451) {
        a$$528 = JAM.call(Math.min, Math, [JAM.call(Math.max, Math, [a$$528, -30], JAM.policy.p3), 30], JAM.policy.p3);
        a$$528 = JAM.call(Math.round, Math, [546 * (a$$528 + 30)], JAM.policy.p3);
        v258 = [JAM.call(Math.floor, Math, [a$$528 / 256], JAM.policy.p3), a$$528 % 256];
      } else {
        v258 = [128, 0];
      }
      return v258;
    }
    var c$$270 = [];
    if (a$$527) {
      var v2110 = b$$401(a$$527.x);
      var v259 = JAM.call(v2110.concat, v2110, [b$$401(a$$527.y)], JAM.policy.p3);
      c$$270 = JAM.call(v259.concat, v259, [b$$401(a$$527.z)], JAM.policy.p3);
    } else {
      a$$527 = 0;
      var v262 = 3 > a$$527;
      for (;v262;) {
        c$$270 = JAM.call(c$$270.concat, c$$270, [[128, 0]], JAM.policy.p3);
        a$$527 = a$$527 + 1;
        v262 = 3 > a$$527;
      }
    }
    return c$$270;
  }
  function v251(a$$525) {
    function b$$400(a$$526) {
      var v263;
      var v3456 = void 0 !== a$$526;
      if (v3456) {
        v3456 = null !== a$$526;
      }
      if (v3456) {
        a$$526 = a$$526 + 360;
        v263 = [JAM.call(Math.floor, Math, [a$$526 / 256], JAM.policy.p3), a$$526 % 256];
      } else {
        v263 = [128, 0];
      }
      return v263;
    }
    var c$$269 = [];
    if (a$$525) {
      var v2114 = b$$400(a$$525.beta);
      var v264 = JAM.call(v2114.concat, v2114, [b$$400(a$$525.gamma)], JAM.policy.p3);
      c$$269 = JAM.call(v264.concat, v264, [b$$400(a$$525.alpha)], JAM.policy.p3);
    } else {
      a$$525 = 0;
      var v267 = 3 > a$$525;
      for (;v267;) {
        c$$269 = JAM.call(c$$269.concat, c$$269, [[128, 0]], JAM.policy.p3);
        a$$525 = a$$525 + 1;
        v267 = 3 > a$$525;
      }
    }
    return c$$269;
  }
  function v250() {
    var a$$524 = JAM.call(this.Eb, this, [this.t.j.deviceOrientation], JAM.policy.p3);
    var b$$399 = JAM.call(this.Ea, this, [this.t.j.deviceAccelerationWithoutGravity], JAM.policy.p3);
    var c$$268 = JAM.call(this.Ea, this, [this.t.j.deviceAccelerationWithGravity], JAM.policy.p3);
    a$$524 = JAM.call(a$$524.concat, a$$524, [b$$399, c$$268], JAM.policy.p3);
    var JSCompiler_inline_result$$53;
    var a$$inline_399 = a$$524;
    if (!ca$$1(a$$inline_399)) {
      throw Error("encodeByteArray takes an array as a parameter");
    }
    if (!Qh) {
      Qh = {};
      Rh = {};
      var a$$inline_643 = 0;
      var v272 = 65 > a$$inline_643;
      for (;v272;) {
        var v2121 = Qh;
        var v2122 = a$$inline_643;
        var v5109 = JAM.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", [a$$inline_643], JAM.policy.p3);
        introspect(JAM.policy.p2) {
          v2121[v2122] = v5109;
        }
        var v2123 = Rh;
        var v2124 = a$$inline_643;
        var v5110 = JAM.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.", [a$$inline_643], JAM.policy.p3);
        introspect(JAM.policy.p2) {
          v2123[v2124] = v5110;
        }
        a$$inline_643 = a$$inline_643 + 1;
        v272 = 65 > a$$inline_643;
      }
    }
    var v274;
    if (!0) {
      v274 = Rh;
    } else {
      v274 = Qh;
    }
    var c$$inline_401 = v274;
    var d$$inline_402 = [];
    var e$$inline_403 = 0;
    var v289 = e$$inline_403 < a$$inline_399.length;
    for (;v289;) {
      var f$$inline_404 = a$$inline_399[e$$inline_403];
      var g$$inline_405 = e$$inline_403 + 1 < a$$inline_399.length;
      var v277;
      if (g$$inline_405) {
        v277 = a$$inline_399[e$$inline_403 + 1];
      } else {
        v277 = 0;
      }
      var h$$inline_406 = v277;
      var k$$inline_407 = e$$inline_403 + 2 < a$$inline_399.length;
      var v280;
      if (k$$inline_407) {
        v280 = a$$inline_399[e$$inline_403 + 2];
      } else {
        v280 = 0;
      }
      var l$$inline_408 = v280;
      var z$$inline_409 = f$$inline_404 >> 2;
      f$$inline_404 = (f$$inline_404 & 3) << 4 | h$$inline_406 >> 4;
      h$$inline_406 = (h$$inline_406 & 15) << 2 | l$$inline_408 >> 6;
      l$$inline_408 = l$$inline_408 & 63;
      if (!k$$inline_407) {
        l$$inline_408 = 64;
        if (!g$$inline_405) {
          h$$inline_406 = 64;
        }
      }
      JAM.call(d$$inline_402.push, d$$inline_402, [c$$inline_401[z$$inline_409], c$$inline_401[f$$inline_404], c$$inline_401[h$$inline_406], c$$inline_401[l$$inline_408]], JAM.policy.p3);
      e$$inline_403 = e$$inline_403 + 3;
      v289 = e$$inline_403 < a$$inline_399.length;
    }
    JSCompiler_inline_result$$53 = JAM.call(d$$inline_402.join, d$$inline_402, [""], JAM.policy.p3);
    return JSCompiler_inline_result$$53;
  }
  function v249() {
    var v2133 = !!this.t.j.deviceAccelerationWithGravity;
    if (!v2133) {
      v2133 = !!this.t.j.deviceAccelerationWithoutGravity;
    }
    var v290 = v2133;
    if (!v290) {
      v290 = !!this.t.j.deviceOrientation;
    }
    return v290;
  }
  function v248() {
    var v291 = this.j;
    var v2136 = new Date;
    var v5111 = JAM.call(v2136.getTime, v2136, [], JAM.policy.p3);
    v291.stopTimeStamp = v5111;
    return;
  }
  function v247() {
    var v292 = this.j;
    var v2137 = new Date;
    var v5112 = JAM.call(v2137.getTime, v2137, [], JAM.policy.p3);
    v292.startTimeStamp = v5112;
    return;
  }
  function v246() {
    var v2138 = "ds_wfea" === this.j.sensorsExperiment;
    if (v2138) {
      v2138 = this.j.isDeviceOrientationEventListenerRegistered;
    }
    var v293 = v2138;
    if (v293) {
      v293 = !this.j.deviceOrientation;
    }
    return v293;
  }
  function v245() {
    var v3471 = "ds_wfea" === this.j.sensorsExperiment;
    if (v3471) {
      v3471 = this.j.isDeviceMotionEventListenerRegistered;
    }
    var v2140 = v3471;
    if (v2140) {
      v2140 = !this.j.deviceAccelerationWithGravity;
    }
    var v294 = v2140;
    if (v294) {
      v294 = !this.j.deviceAccelerationWithoutGravity;
    }
    return v294;
  }
  function v244() {
    var v295 = JAM.call(this.O, this, [], JAM.policy.p3);
    if (!v295) {
      v295 = JAM.call(this.P, this, [], JAM.policy.p3);
    }
    return v295;
  }
  function v243(a$$517, b$$394) {
    function v242() {
      c$$264.didDeviceMotionCallbacksTimeoutExpire = !0;
      return;
    }
    var c$$264 = this.j;
    Nh(c$$264.deviceMotionEventCallbacks, a$$517, b$$394, v242);
    return;
  }
  function v241(a$$516, b$$393) {
    function v240() {
      c$$263.didDeviceOrientationCallbacksTimeoutExpire = !0;
      return;
    }
    var c$$263 = this.j;
    Nh(c$$263.deviceOrientationEventCallbacks, a$$516, b$$393, v240);
    return;
  }
  function v239() {
    var v298;
    var v3474 = this.j.startTimeStamp;
    if (v3474) {
      v3474 = this.j.stopTimeStamp;
    }
    if (v3474) {
      v298 = this.j.stopTimeStamp - this.j.startTimeStamp;
    } else {
      v298 = null;
    }
    return v298;
  }
  function v238() {
    return this.j.deviceOrientation;
  }
  function v237() {
    return this.j.deviceAccelerationWithoutGravity;
  }
  function v236() {
    return this.j.deviceAccelerationWithGravity;
  }
  function v235() {
    return this.j.didDeviceOrientationCallbacksTimeoutExpire;
  }
  function v234() {
    return this.j.didDeviceMotionCallbacksTimeoutExpire;
  }
  function v233(a$$502) {
    var b$$381 = this.G;
    a$$502.iclk_url = b$$381.iclk_url;
    var v304 = b$$381.iclk_ltx;
    if (v304) {
      a$$502.iclk_ltx = b$$381.iclk_ltx;
    }
    var v305 = b$$381.iclk_ltl;
    if (v305) {
      a$$502.iclk_ltl = b$$381.iclk_ltl;
    }
    return;
  }
  function v232() {
    try {
      var a$$501 = {msg_type:"i-prepare"};
      JAM.call(this.Bc, this, [a$$501], JAM.policy.p3);
      var v306 = this.s.contentWindow;
      var v2147 = new hg(void 0);
      JAM.call(v306.postMessage, v306, [JAM.call(v2147.serialize, v2147, [a$$501], JAM.policy.p3), "http://doubleclick"], JAM.policy.p3);
      return!0;
    } catch (b$$380) {
    }
    return!1;
  }
  function v231(a$$500) {
    var v308 = this.G;
    var v5113 = JAM.call(a$$500.getAttribute, a$$500, ["href"], JAM.policy.p3);
    v308.iclk_url = v5113;
    var JSCompiler_temp_const$$57 = this.G;
    var JSCompiler_inline_result$$58;
    var a$$inline_379 = a$$500;
    var v2148 = Xc;
    if (v2148) {
      v2148 = "innerText" in a$$inline_379;
    }
    if (v2148) {
      var v309 = a$$inline_379.innerText;
      a$$inline_379 = JAM.call(v309.replace, v309, [/(\r\n|\r|\n)/g, "\n"], JAM.policy.p3);
    } else {
      var b$$inline_380 = [];
      ud(a$$inline_379, b$$inline_380, !0);
      a$$inline_379 = JAM.call(b$$inline_380.join, b$$inline_380, [""], JAM.policy.p3);
    }
    var v312 = JAM.call(a$$inline_379.replace, a$$inline_379, [/ \xAD /g, " "], JAM.policy.p3);
    a$$inline_379 = JAM.call(v312.replace, v312, [/\xAD/g, ""], JAM.policy.p3);
    a$$inline_379 = JAM.call(a$$inline_379.replace, a$$inline_379, [/\u200B/g, ""], JAM.policy.p3);
    if (!Xc) {
      a$$inline_379 = JAM.call(a$$inline_379.replace, a$$inline_379, [/ +/g, " "], JAM.policy.p3);
    }
    var v313 = " " != a$$inline_379;
    if (v313) {
      a$$inline_379 = JAM.call(a$$inline_379.replace, a$$inline_379, [/^\s*/, ""], JAM.policy.p3);
    }
    JSCompiler_inline_result$$58 = a$$inline_379;
    JSCompiler_temp_const$$57.iclk_ltx = JSCompiler_inline_result$$58;
    var v314 = a$$500 = JAM.call(a$$500.getAttribute, a$$500, ["title"], JAM.policy.p3);
    if (v314) {
      this.G.iclk_ltl = a$$500;
    }
    return;
  }
  function v230() {
    var a$$499 = xe("ias::nav", JAM.call(r$$2, null, [this.Va, this], JAM.policy.p3));
    var v316 = this.i;
    var v5114 = JAM.call(v316.setTimeout, v316, [a$$499, 1E3], JAM.policy.p3);
    this.Jc = v5114;
    return;
  }
  function v229(a$$498) {
    if (JAM.call(this.T, this, [], JAM.policy.p3)) {
      JAM.call(a$$498.preventDefault, a$$498, [], JAM.policy.p3);
      return!1;
    }
    var v2152 = a$$498;
    if (v2152) {
      v2152 = a$$498.target;
    }
    var v318 = v2152;
    if (v318) {
      v318 = a$$498.target.href;
    }
    var b$$379 = v318;
    var c$$253 = og(this.i);
    var v2154 = !b$$379;
    if (!v2154) {
      v2154 = !c$$253;
    }
    if (v2154) {
      return!0;
    }
    JAM.call(this.uc, this, [a$$498.target], JAM.policy.p3);
    if (!JAM.call(this.wc, this, [], JAM.policy.p3)) {
      return!0;
    }
    JAM.call(this.qc, this, [], JAM.policy.p3);
    JAM.call(a$$498.preventDefault, a$$498, [], JAM.policy.p3);
    return!1;
  }
  function v228() {
    var v323 = this.i.location;
    var v5115 = JAM.call(this.T, this, [], JAM.policy.p3);
    v323.href = v5115;
    return;
  }
  function v227() {
    var v324 = this.Z;
    if (!v324) {
      this.Z = !0;
      var v4261 = this.i;
      JAM.call(v4261.clearTimeout, v4261, [this.Jc], JAM.policy.p3);
      JAM.call(this.Va, this, [], JAM.policy.p3);
    }
    return;
  }
  function v226() {
    if (!this.Z) {
      this.Z = !0;
      var v325 = this.i;
      JAM.call(v325.clearTimeout, v325, [this.Jc], JAM.policy.p3);
      var v327 = this.Zb;
      JAM.call(v327.A, v327, [JAM.call(this.T, this, [], JAM.policy.p3)], JAM.policy.p3);
      var a$$497 = {msg_type:"i-view"};
      var v329 = this.s.contentWindow;
      var v2160 = new hg(void 0);
      JAM.call(v329.postMessage, v329, [JAM.call(v2160.serialize, v2160, [a$$497], JAM.policy.p3), "http://doubleclick"], JAM.policy.p3);
    }
    return;
  }
  function v225() {
    if (!this.H) {
      this.H = !0;
      var a$$496 = ye("ias::chdlr", JAM.call(r$$2, null, [this.dc, this], JAM.policy.p3));
      var v333 = this.Zb;
      JAM.call(v333.mb, v333, [a$$496], JAM.policy.p3);
    }
    return;
  }
  function v224() {
    var v335 = this.G.iclk_url;
    if (!v335) {
      v335 = null;
    }
    return v335;
  }
  function v223(a$$495) {
    a$$495["i-fill"] = this.Hb;
    a$$495["i-go"] = this.Nb;
    a$$495["i-no"] = this.Mb;
    return;
  }
  function v222(a$$493) {
    var b$$377 = JAM.call(this.u, this, [], JAM.policy.p3);
    if (b$$377) {
      var v2165 = b$$377.style;
      var v3480;
      if (a$$493) {
        v3480 = "block";
      } else {
        v3480 = "none";
      }
      v2165.display = v3480;
    }
    return;
  }
  function v221() {
    var a$$492 = JAM.call(this.ba, this, [], JAM.policy.p3);
    var v2166 = a$$492;
    if (v2166) {
      v2166 = !(2 > a$$492.length);
    }
    if (v2166) {
      var b$$376 = a$$492[a$$492.length - 1];
      if (b$$376) {
        var c$$251 = 0;
        var v338 = c$$251 < a$$492.length;
        for (;v338;) {
          Q$$1(a$$492[c$$251], mh);
          c$$251 = c$$251 + 1;
          v338 = c$$251 < a$$492.length;
        }
        Q$$1(this.s, mh);
        a$$492 = this.sb.contentWindow.document;
        Q$$1(a$$492.documentElement, mh);
        Q$$1(a$$492.body, nh);
        Q$$1(b$$376, lh);
        JAM.call(this.N, this, [!1], JAM.policy.p3);
      }
    }
    return;
  }
  function v220() {
    var v345 = this.i.document.body;
    JAM.call(v345.removeChild, v345, [this.kc], JAM.policy.p3);
    var v347 = this.i.document.body;
    JAM.call(v347.removeChild, v347, [this.ic], JAM.policy.p3);
    return;
  }
  function v219(a$$491) {
    var v349 = this.ea;
    JAM.call(v349.push, v349, [a$$491], JAM.policy.p3);
    y$$31(a$$491, "click", this.rc);
    JAM.call(a$$491.setAttribute, a$$491, ["data-google-reveal-ad", "true"], JAM.policy.p3);
    return;
  }
  function v218() {
    var a$$490 = this.i.document.links;
    var b$$375 = 0;
    var v353 = b$$375 < a$$490.length;
    for (;v353;) {
      var c$$250 = a$$490[b$$375];
      var v352 = JAM.call(this.rb, this, [c$$250], JAM.policy.p3);
      if (v352) {
        JAM.call(this.Xb, this, [c$$250], JAM.policy.p3);
      }
      b$$375 = b$$375 + 1;
      v353 = b$$375 < a$$490.length;
    }
    return;
  }
  function v217() {
    var a$$489 = 0;
    var v356 = a$$489 < this.ea.length;
    for (;v356;) {
      var b$$374 = this.ea[a$$489];
      A$$1(b$$374, "click", this.rc);
      JAM.call(b$$374.removeAttribute, b$$374, ["data-google-reveal-ad"], JAM.policy.p3);
      a$$489 = a$$489 + 1;
      v356 = a$$489 < this.ea.length;
    }
    this.ea = [];
    return;
  }
  function v216(a$$488) {
    var v5116 = JAM.call(this.Ba, this, [a$$488, "prerender"], JAM.policy.p3);
    this.kc = v5116;
    var v5117 = JAM.call(this.Ba, this, [a$$488, "prefetch"], JAM.policy.p3);
    this.ic = v5117;
    var v357 = this.i.document.body;
    JAM.call(v357.appendChild, v357, [this.kc], JAM.policy.p3);
    var v359 = this.i.document.body;
    JAM.call(v359.appendChild, v359, [this.ic], JAM.policy.p3);
    return;
  }
  function v215(a$$487, b$$373) {
    var v361 = this.i.document;
    var c$$249 = JAM.call(v361.createElement, v361, ["link"], JAM.policy.p3);
    JAM.call(c$$249.setAttribute, c$$249, ["rel", b$$373], JAM.policy.p3);
    JAM.call(c$$249.setAttribute, c$$249, ["href", a$$487], JAM.policy.p3);
    return c$$249;
  }
  function v214() {
    JAM.call(this.N, this, [!1], JAM.policy.p3);
    JAM.call(this.xb, this, [], JAM.policy.p3);
    JAM.call(this.sc, this, [], JAM.policy.p3);
    return;
  }
  function v213(a$$486) {
    var v2181 = a$$486.onclick;
    if (!v2181) {
      v2181 = !a$$486.href;
    }
    if (v2181) {
      return!1;
    }
    var b$$372 = Re(a$$486.href);
    var c$$248 = b$$372[3];
    a$$486 = kh(a$$486.href);
    b$$372 = b$$372[7];
    var v366;
    var v4264 = !c$$248;
    if (!v4264) {
      v4264 = c$$248 != this.Wc;
    }
    var v3490 = v4264;
    if (!v3490) {
      var v4265 = a$$486 == this.Xc;
      if (v4265) {
        v4265 = b$$372;
      }
      v3490 = v4265;
    }
    if (v3490) {
      v366 = !1;
    } else {
      v366 = !0;
    }
    return v366;
  }
  function v212(a$$485) {
    JAM.call(this.N, this, [!0], JAM.policy.p3);
    var b$$371 = ye("ifr::hide", JAM.call(r$$2, null, [this.tb, this], JAM.policy.p3));
    y$$31(this.i, "pagehide", b$$371);
    JAM.call(this.vb, this, [a$$485], JAM.policy.p3);
    return;
  }
  function v211(a$$484) {
    var v370 = this.ob;
    if (!v370) {
      this.ob = !0;
      this.rc = a$$484;
      JAM.call(this.Yb, this, [], JAM.policy.p3);
    }
    return;
  }
  function v210(a$$481) {
    a$$481.fill = this.Gb;
    a$$481.dismiss = this.Bb;
    return;
  }
  function v209() {
    var v371 = this.H;
    if (!v371) {
      this.H = !0;
      var v3491 = this.Kb;
      JAM.call(v3491.A, v3491, [], JAM.policy.p3);
    }
    return;
  }
  function v208() {
    var v372 = this.Cb;
    if (!v372) {
      this.Cb = !0;
      var v3492 = this.Kb;
      JAM.call(v3492.dismiss, v3492, [], JAM.policy.p3);
    }
    return;
  }
  function v207(a$$479) {
    var v3493 = a$$479;
    if (v3493) {
      v3493 = a$$479.data;
    }
    var v2187 = v3493;
    if (v2187) {
      v2187 = mg[a$$479.origin];
    }
    if (v2187) {
      var b$$367 = 0;
      var v375 = 2 > b$$367;
      for (;v375;) {
        var c$$246;
        var d$$154;
        switch(b$$367) {
          case 0:
            d$$154 = c$$246 = a$$479.data;
            break;
          default:
            try {
              var v373 = d$$154 = gg(a$$479.data);
              if (v373) {
                v373 = d$$154.msg_type;
              }
              c$$246 = v373;
            } catch (e$$90) {
              d$$154 = c$$246 = null;
            }
          ;
        }
        var f$$52 = this.cc[c$$246];
        if (f$$52) {
          JAM.call(f$$52.call, f$$52, [this, d$$154], JAM.policy.p3);
          break;
        }
        b$$367 = b$$367 + 1;
        v375 = 2 > b$$367;
      }
    }
    return;
  }
  function v206() {
    JAM.call(this.pa, this, [this.cc], JAM.policy.p3);
    var a$$478 = ye("ras::hdlr", JAM.call(r$$2, null, [this.gc, this], JAM.policy.p3));
    y$$31(this.i, "message", a$$478);
    return;
  }
  function v205() {
    var v380;
    var v4942 = !JAM.call(this.Sa, this, [], JAM.policy.p3);
    if (!v4942) {
      v4942 = !og(this.i);
    }
    var v4716 = v4942;
    if (!v4716) {
      var v4943 = 2 <= this.B;
      if (v4943) {
        v4943 = this.I;
      }
      v4716 = v4943;
    }
    var v4267 = v4716;
    if (!v4267) {
      v4267 = !this.Ib;
    }
    var v3495 = v4267;
    if (!v3495) {
      v3495 = this.Da;
    }
    if (v3495) {
      v380 = JAM.call(this.hide, this, [], JAM.policy.p3);
    } else {
      JAM.call(this.A, this, [], JAM.policy.p3);
      v380 = JAM.call(this.show, this, [], JAM.policy.p3);
    }
    v380;
    return;
  }
  function v204(a$$476, b$$366) {
    Q$$1(a$$476, {paddingTop:b$$366.top + "px", paddingLeft:b$$366.left + "px", paddingRight:b$$366.right + "px", paddingBottom:b$$366.bottom + "px"});
    return;
  }
  function v203() {
    JAM.call(this.cb, this, [this.i.document.body, this.Vc], JAM.policy.p3);
    return;
  }
  function v202(a$$475) {
    this.w = "touchstart";
    this.B = a$$475.touches.length;
    this.I = !1;
    JAM.call(this.o, this, [], JAM.policy.p3);
    return;
  }
  function v201(a$$474) {
    this.w = "touchmove";
    this.B = a$$474.touches.length;
    this.I = !0;
    JAM.call(this.o, this, [], JAM.policy.p3);
    return;
  }
  function v200(a$$473) {
    function v199() {
      var v386 = "touchend" == this.w;
      if (v386) {
        this.B = b$$365;
        this.I = !1;
        JAM.call(this.o, this, [], JAM.policy.p3);
      }
      return;
    }
    this.w = "touchend";
    var b$$365 = a$$473.touches.length;
    var v388;
    if (2 > b$$365) {
      var v2197 = this.i;
      v388 = JAM.call(v2197.setTimeout, v2197, [JAM.call(r$$2, null, [v199, this], JAM.policy.p3), 1E3], JAM.policy.p3);
    } else {
      this.B = b$$365;
      v388 = JAM.call(this.o, this, [], JAM.policy.p3);
    }
    v388;
    return;
  }
  function v198() {
    function v197() {
      var v389 = "touchcancel" == this.w;
      if (v389) {
        this.B = 0;
        this.I = !1;
        JAM.call(this.o, this, [], JAM.policy.p3);
      }
      return;
    }
    this.w = "touchcancel";
    var v390 = this.i;
    JAM.call(v390.setTimeout, v390, [JAM.call(r$$2, null, [v197, this], JAM.policy.p3), 1E3], JAM.policy.p3);
    return;
  }
  function v196() {
    JAM.call(this.o, this, [], JAM.policy.p3);
    return;
  }
  function v195() {
    JAM.call(this.o, this, [], JAM.policy.p3);
    return;
  }
  function v194() {
    JAM.call(this.o, this, [], JAM.policy.p3);
    return;
  }
  function v193() {
    return this.i.innerHeight >= this.i.innerWidth;
  }
  function v192(a$$472) {
    var b$$364 = this.i.innerWidth;
    var c$$245;
    switch(a$$472) {
      case "bottom":
        c$$245 = new u$$2(b$$364, this.gd.height);
    }
    return c$$245;
  }
  function v191(a$$471, b$$363) {
    var c$$244;
    switch(a$$471) {
      case "bottom":
        if (c$$244 = Qd(this.i.document.body, "padding")) {
          c$$244.bottom = c$$244.bottom + b$$363.height;
        }
      ;
    }
    return c$$244;
  }
  function v190(a$$470) {
    var b$$362 = {};
    switch(a$$470) {
      case "bottom":
        b$$362 = {left:"0px", bottom:"0px"};
    }
    return b$$362;
  }
  function v189() {
    var a$$469 = JAM.call(this.ba, this, [], JAM.policy.p3);
    var v2207 = a$$469;
    if (v2207) {
      v2207 = !(2 > a$$469.length);
    }
    if (v2207) {
      var b$$361 = a$$469[a$$469.length - 1];
      var c$$243 = a$$469[0];
      if (b$$361 && c$$243) {
        c$$243 = JAM.call(this.Ma, this, [this.ua], JAM.policy.p3);
        var d$$153 = JAM.call(this.Qb, this, [this.ua, c$$243], JAM.policy.p3);
        Q$$1(b$$361, d$$153);
        b$$361 = a$$469.length - 1;
        var v402 = 0 <= b$$361;
        for (;v402;) {
          Id(a$$469[b$$361], c$$243);
          b$$361 = b$$361 - 1;
          v402 = 0 <= b$$361;
        }
        Id(this.s, c$$243);
      }
    }
    return;
  }
  function v188() {
    var a$$468 = JAM.call(this.Ma, this, [this.ua], JAM.policy.p3);
    a$$468 = JAM.call(this.Rb, this, [this.ua, a$$468], JAM.policy.p3);
    JAM.call(this.cb, this, [this.i.document.body, a$$468], JAM.policy.p3);
    return;
  }
  function v187() {
    var v409 = this.ga;
    if (!v409) {
      JAM.call(this.pb, this, [], JAM.policy.p3);
      var v4271 = JAM.call(this.u, this, [], JAM.policy.p3);
      var v4945;
      if (this.Ra) {
        v4945 = 1;
      } else {
        v4945 = 0;
      }
      Q$$1(v4271, {display:"block", opacity:v4945});
      this.ga = !0;
    }
    return;
  }
  function v186() {
    this.Ib = !0;
    var v3504 = JAM.call(this.Sa, this, [], JAM.policy.p3);
    if (v3504) {
      v3504 = og(this.i);
    }
    var v2211 = v3504;
    if (v2211) {
      v2211 = !this.Ra;
    }
    if (v2211) {
      var a$$467 = JAM.call(this.u, this, [], JAM.policy.p3);
      if (a$$467) {
        JAM.call(this.show, this, [], JAM.policy.p3);
        Q$$1(a$$467, {position:"fixed", background:"rgba(0,0,0,0.65)", boxShadow:"0 -5px 5px -5px rgba(0,0,0,0.5)", zIndex:999999});
        JAM.call(this.qb, this, [], JAM.policy.p3);
        a$$467 = new fh(a$$467, 350);
        JAM.call(a$$467.play, a$$467, [], JAM.policy.p3);
        this.Ra = !0;
      }
    }
    return;
  }
  function v185() {
    var v411 = this.ga;
    if (v411) {
      Q$$1(JAM.call(this.u, this, [], JAM.policy.p3), "display", "none");
      JAM.call(this.$a, this, [], JAM.policy.p3);
      this.ga = !1;
    }
    return;
  }
  function v184() {
    if (!this.Da) {
      this.Da = !0;
      A$$1(this.i, "orientationchange", this.Zc);
      A$$1(this.i, "resize", this.$c);
      A$$1(this.i, "scroll", this.ad);
      A$$1(this.i, "touchcancel", this.bd);
      A$$1(this.i, "touchend", this.cd);
      A$$1(this.i, "touchmove", this.dd);
      A$$1(this.i, "touchstart", this.ed);
      var a$$466 = new gh(JAM.call(this.u, this, [], JAM.policy.p3), 250, JAM.call(r$$2, null, [this.$a, this], JAM.policy.p3));
      JAM.call(a$$466.play, a$$466, [], JAM.policy.p3);
    }
    return;
  }
  function v183() {
    if (!this.Ub) {
      var a$$464 = JAM.call(this.ba, this, [], JAM.policy.p3);
      var v2215 = !a$$464;
      if (!v2215) {
        v2215 = 2 > a$$464.length;
      }
      if (v2215) {
        return null;
      }
      this.Ub = a$$464[a$$464.length - 1];
    }
    return this.Ub;
  }
  function v182() {
    return "adsbygoogle";
  }
  function v181() {
    if (!this.X) {
      this.X = [];
      var a$$463 = this.sb;
      var v2218 = a$$463;
      if (v2218) {
        v2218 = !$b(Zc(a$$463), "adsbygoogle");
      }
      var v432 = v2218;
      for (;v432;) {
        var v2219 = this.X;
        JAM.call(v2219.push, v2219, [a$$463], JAM.policy.p3);
        a$$463 = a$$463.parentNode;
        var v2220 = a$$463;
        if (v2220) {
          v2220 = !$b(Zc(a$$463), "adsbygoogle");
        }
        v432 = v2220;
      }
      if (a$$463) {
        var v2221 = this.X;
        JAM.call(v2221.push, v2221, [a$$463], JAM.policy.p3);
      }
    }
    return this.X;
  }
  function v180() {
    Nd(this.W, this.current[0]);
    return;
  }
  function v179() {
    qd(this.W);
    if (this.onEndCallback) {
      JAM.call(this.onEndCallback, this, [], JAM.policy.p3);
    }
    return;
  }
  function v178() {
    Nd(this.W, this.current[0]);
    return;
  }
  function v177() {
    this.Ic = !0;
    return;
  }
  function v176() {
    var v5118 = JAM.call(ha$$1, null, [], JAM.policy.p3);
    this.hb = v5118;
    this.Sc = this.hb + this.jd;
    JAM.call(this.Ca, this, [], JAM.policy.p3);
    return;
  }
  function v175(a$$459) {
    this.current = [];
    var b$$356 = 0;
    var v444 = b$$356 < this.ib.length;
    for (;v444;) {
      var v442 = this.current;
      JAM.call(v442.push, v442, [(this.Tc[b$$356] - this.ib[b$$356]) * a$$459 + this.ib[b$$356]], JAM.policy.p3);
      b$$356 = b$$356 + 1;
      v444 = b$$356 < this.ib.length;
    }
    return;
  }
  function v174() {
    return;
  }
  function v173() {
    return;
  }
  function v172() {
    if (!this.Ic) {
      var a$$458 = JAM.call(ha$$1, null, [], JAM.policy.p3);
      a$$458 = (a$$458 - this.hb) / (this.Sc - this.hb);
      var v447 = 1 <= a$$458;
      if (v447) {
        a$$458 = 1;
      }
      JAM.call(this.Pc, this, [a$$458], JAM.policy.p3);
      JAM.call(this.C, this, [], JAM.policy.p3);
      var v448;
      if (1 == a$$458) {
        v448 = JAM.call(this.ka, this, [], JAM.policy.p3);
      } else {
        v448 = JAM.call(w$$6.setTimeout, w$$6, [JAM.call(r$$2, null, [this.Ca, this], JAM.policy.p3), 20], JAM.policy.p3);
      }
      v448;
    }
    return;
  }
  function v171(a$$456) {
    var v2234 = a$$456;
    if (v2234) {
      v2234 = mg[a$$456.origin];
    }
    if (v2234) {
      var b$$354;
      try {
        b$$354 = gg(a$$456.data);
      } catch (c$$238) {
      }
      if (b$$354) {
        var v451 = a$$456 = b$$354.adType;
        if (!v451) {
          a$$456 = 1;
        }
        var d$$151 = rg(this.lc);
        if (!d$$151.wasReactiveAdConfigReceived[a$$456]) {
          var e$$89 = Yg(a$$456);
          var v2237 = e$$89;
          if (v2237) {
            v2237 = JAM.call(e$$89.ia, e$$89, [b$$354], JAM.policy.p3);
          }
          var v453 = v2237;
          if (v453) {
            JAM.set(d$$151.wasReactiveAdConfigReceived, a$$456, !0, JAM.policy.p2);
            JAM.call(e$$89.D, e$$89, [this.lc], JAM.policy.p3);
          }
        }
      }
    }
    return;
  }
  function v170(a$$441) {
    if (this.l) {
      var b$$343 = this.l;
      var v456 = a$$441.document;
      var c$$227 = JAM.call(v456.createElement, v456, ["ins"], JAM.policy.p3);
      c$$227.className = "adsbygoogle";
      c$$227.style.display = "none";
      var v458 = a$$441.document.body;
      JAM.call(v458.appendChild, v458, [c$$227], JAM.policy.p3);
      var d$$144 = a$$441.document.documentElement.clientHeight;
      var e$$85 = a$$441.document.documentElement.clientWidth;
      d$$144 = {google_ad_client:b$$343.adClient, google_ad_width:e$$85, google_ad_height:d$$144, google_reactive_ad_format:8};
      var v462 = b$$343.adTest;
      if (v462) {
        d$$144.google_ad_test = b$$343.adTest;
      }
      var a$$inline_363 = c$$227;
      var b$$inline_364 = d$$144;
      var c$$inline_365 = a$$441;
      c$$inline_365 = c$$inline_365 || window;
      Cg(a$$inline_363);
      Dg(a$$inline_363, b$$inline_364, c$$inline_365);
    }
    return;
  }
  function v169(a$$440) {
    var JSCompiler_inline_result$$62;
    JSCompiler_inline_label_Pg_362: {
      var a$$inline_359 = a$$440;
      if (!a$$inline_359) {
        JSCompiler_inline_result$$62 = null;
        break JSCompiler_inline_label_Pg_362;
      }
      var b$$inline_360 = new Og;
      var c$$inline_361 = a$$inline_359.adClient;
      var v465 = p$$1(c$$inline_361);
      if (v465) {
        b$$inline_360.adClient = c$$inline_361;
      }
      a$$inline_359 = a$$inline_359.adTest;
      var v466 = p$$1(a$$inline_359);
      if (v466) {
        b$$inline_360.adTest = a$$inline_359;
      }
      var v467;
      if (b$$inline_360.adClient) {
        v467 = b$$inline_360;
      } else {
        v467 = null;
      }
      JSCompiler_inline_result$$62 = v467;
    }
    var v468;
    if (this.l = JSCompiler_inline_result$$62) {
      v468 = !0;
    } else {
      v468 = !1;
    }
    return v468;
  }
  function v168(a$$439, b$$342) {
    var v5119 = new Og;
    this.l = v5119;
    this.l.adClient = b$$342;
    this.l.adTest = "on";
    JAM.call(this.D, this, [a$$439], JAM.policy.p3);
    return;
  }
  function v167(a$$436) {
    if (this.l) {
      var b$$339 = this.l;
      var v471 = a$$436.document;
      var c$$225 = JAM.call(v471.createElement, v471, ["ins"], JAM.policy.p3);
      c$$225.className = "adsbygoogle";
      var v472 = a$$436.document.body;
      JAM.call(v472.appendChild, v472, [c$$225], JAM.policy.p3);
      var d$$143 = String(JAM.call(Math.random, Math, [], JAM.policy.p3));
      d$$143 = JAM.call(d$$143.slice, d$$143, [-3], JAM.policy.p3);
      d$$143 = {google_ad_client:b$$339.adClient, google_ad_width:b$$339.adWidth, google_ad_height:b$$339.adHeight, google_ad_format:b$$339.adWidth + "x" + b$$339.adHeight + "_as", google_reactive_ad_format:1, google_ad_section:d$$143};
      var v478 = b$$339.adSlot;
      if (v478) {
        d$$143.google_ad_slot = b$$339.adSlot;
      }
      d$$143.google_ad_channel = "GoogleAnchorAd";
      var v479 = b$$339.adChannel;
      if (v479) {
        d$$143.google_ad_channel = d$$143.google_ad_channel + ("+" + b$$339.adChannel);
      }
      var v480 = b$$339.adTest;
      if (v480) {
        d$$143.google_adtest = b$$339.adTest;
      }
      var a$$inline_355 = c$$225;
      var b$$inline_356 = d$$143;
      var c$$inline_357 = a$$436;
      c$$inline_357 = c$$inline_357 || window;
      Cg(a$$inline_355);
      Dg(a$$inline_355, b$$inline_356, c$$inline_357);
    }
    return;
  }
  function v166(a$$435) {
    var JSCompiler_inline_result$$23;
    JSCompiler_inline_label_Lg_354: {
      var a$$inline_351 = a$$435;
      if (!a$$inline_351) {
        JSCompiler_inline_result$$23 = null;
        break JSCompiler_inline_label_Lg_354;
      }
      var b$$inline_352 = new Kg;
      var c$$inline_353 = a$$inline_351.adClient;
      var v483 = p$$1(c$$inline_353);
      if (v483) {
        b$$inline_352.adClient = c$$inline_353;
      }
      c$$inline_353 = a$$inline_351.adWidth;
      var v2245 = q$$3(c$$inline_353);
      if (v2245) {
        v2245 = 0 < c$$inline_353;
      }
      var v484 = v2245;
      if (v484) {
        b$$inline_352.adWidth = c$$inline_353;
      }
      c$$inline_353 = a$$inline_351.adHeight;
      var v2246 = q$$3(c$$inline_353);
      if (v2246) {
        v2246 = 0 < c$$inline_353;
      }
      var v485 = v2246;
      if (v485) {
        b$$inline_352.adHeight = c$$inline_353;
      }
      c$$inline_353 = a$$inline_351.adSlot;
      var v486 = p$$1(c$$inline_353);
      if (v486) {
        b$$inline_352.adSlot = c$$inline_353;
      }
      c$$inline_353 = a$$inline_351.adChannel;
      var v487 = p$$1(c$$inline_353);
      if (v487) {
        b$$inline_352.adChannel = c$$inline_353;
      }
      a$$inline_351 = a$$inline_351.adTest;
      var v488 = p$$1(a$$inline_351);
      if (v488) {
        b$$inline_352.adTest = a$$inline_351;
      }
      var v489;
      var v4281 = b$$inline_352.adClient;
      if (v4281) {
        v4281 = b$$inline_352.adWidth;
      }
      var v3523 = v4281;
      if (v3523) {
        v3523 = b$$inline_352.adHeight;
      }
      if (v3523) {
        v489 = b$$inline_352;
      } else {
        v489 = null;
      }
      JSCompiler_inline_result$$23 = v489;
    }
    var v490;
    if (this.l = JSCompiler_inline_result$$23) {
      v490 = !0;
    } else {
      v490 = !1;
    }
    return v490;
  }
  function v165(a$$434, b$$338) {
    var JSCompiler_inline_result$$34;
    var a$$inline_348 = b$$338;
    var b$$inline_349 = new Kg;
    b$$inline_349.adClient = a$$inline_348;
    b$$inline_349.adWidth = 320;
    b$$inline_349.adHeight = 50;
    b$$inline_349.adTest = "on";
    JSCompiler_inline_result$$34 = b$$inline_349;
    this.l = JSCompiler_inline_result$$34;
    JAM.call(this.D, this, [a$$434], JAM.policy.p3);
    return;
  }
  function v164(a$$412, b$$326) {
    JAM.call(b$$326.push, b$$326, ["{"], JAM.policy.p3);
    var c$$215 = "";
    var d$$137;
    for (d$$137 in a$$412) {
      var v2249 = Object.prototype.hasOwnProperty;
      if (JAM.call(v2249.call, v2249, [a$$412, d$$137], JAM.policy.p3)) {
        var e$$80 = a$$412[d$$137];
        var v491 = "function" != typeof e$$80;
        if (v491) {
          JAM.call(b$$326.push, b$$326, [c$$215], JAM.policy.p3);
          JAM.call(this.r, this, [d$$137, b$$326], JAM.policy.p3);
          JAM.call(b$$326.push, b$$326, [":"], JAM.policy.p3);
          var v4722;
          if (this.qa) {
            var v4946 = this.qa;
            v4722 = JAM.call(v4946.call, v4946, [a$$412, d$$137, e$$80], JAM.policy.p3);
          } else {
            v4722 = e$$80;
          }
          JAM.call(this.n, this, [v4722, b$$326], JAM.policy.p3);
          c$$215 = ",";
        }
      }
    }
    JAM.call(b$$326.push, b$$326, ["}"], JAM.policy.p3);
    return;
  }
  function v163(a$$411, b$$325) {
    var c$$214 = a$$411.length;
    JAM.call(b$$325.push, b$$325, ["["], JAM.policy.p3);
    var d$$136 = "";
    var e$$79 = 0;
    var v493 = e$$79 < c$$214;
    for (;v493;) {
      JAM.call(b$$325.push, b$$325, [d$$136], JAM.policy.p3);
      d$$136 = a$$411[e$$79];
      var v4283;
      if (this.qa) {
        var v4723 = this.qa;
        v4283 = JAM.call(v4723.call, v4723, [a$$411, String(e$$79), d$$136], JAM.policy.p3);
      } else {
        v4283 = d$$136;
      }
      JAM.call(this.n, this, [v4283, b$$325], JAM.policy.p3);
      d$$136 = ",";
      e$$79 = e$$79 + 1;
      v493 = e$$79 < c$$214;
    }
    JAM.call(b$$325.push, b$$325, ["]"], JAM.policy.p3);
    return;
  }
  function v162(a$$410, b$$324) {
    var v2251;
    var v4284 = isFinite(a$$410);
    if (v4284) {
      v4284 = !isNaN(a$$410);
    }
    if (v4284) {
      v2251 = a$$410;
    } else {
      v2251 = "null";
    }
    JAM.call(b$$324.push, b$$324, [v2251], JAM.policy.p3);
    return;
  }
  function v161(a$$408, b$$322) {
    function v160(a$$409) {
      if (a$$409 in ig) {
        return ig[a$$409];
      }
      var b$$323 = JAM.call(a$$409.charCodeAt, a$$409, [0], JAM.policy.p3);
      var e$$78 = "\\u";
      var v496;
      if (16 > b$$323) {
        v496 = e$$78 = e$$78 + "000";
      } else {
        var v2252;
        if (256 > b$$323) {
          v2252 = e$$78 = e$$78 + "00";
        } else {
          var v3527 = 4096 > b$$323;
          if (v3527) {
            v3527 = e$$78 = e$$78 + "0";
          }
          v2252 = v3527;
        }
        v496 = v2252;
      }
      v496;
      return JAM.set(ig, a$$409, e$$78 + JAM.call(b$$323.toString, b$$323, [16], JAM.policy.p3), JAM.policy.p2);
    }
    JAM.call(b$$322.push, b$$322, ['"', JAM.call(a$$408.replace, a$$408, [jg, v160], JAM.policy.p3), '"'], JAM.policy.p3);
    return;
  }
  function v159(a$$407, b$$321) {
    switch(typeof a$$407) {
      case "string":
        JAM.call(this.r, this, [a$$407, b$$321], JAM.policy.p3);
        break;
      case "number":
        JAM.call(this.L, this, [a$$407, b$$321], JAM.policy.p3);
        break;
      case "boolean":
        JAM.call(b$$321.push, b$$321, [a$$407], JAM.policy.p3);
        break;
      case "undefined":
        JAM.call(b$$321.push, b$$321, ["null"], JAM.policy.p3);
        break;
      case "object":
        if (null == a$$407) {
          JAM.call(b$$321.push, b$$321, ["null"], JAM.policy.p3);
          break;
        }
        if (n$$2(a$$407)) {
          JAM.call(this.xc, this, [a$$407, b$$321], JAM.policy.p3);
          break;
        }
        JAM.call(this.M, this, [a$$407, b$$321], JAM.policy.p3);
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof a$$407);;
    }
    return;
  }
  function v158(a$$406) {
    var b$$320 = [];
    JAM.call(this.n, this, [a$$406, b$$320], JAM.policy.p3);
    return JAM.call(b$$320.join, b$$320, [""], JAM.policy.p3);
  }
  function v157() {
    function v156(b$$317) {
      var v2257 = !e$$76;
      if (v2257) {
        v2257 = JAM.call(c$$212, null, [b$$317], JAM.policy.p3);
      }
      var v504 = v2257;
      if (v504) {
        JAM.call(d$$134, null, [b$$317, a$$402, f$$49], JAM.policy.p3);
        e$$76 = !0;
      }
      return;
    }
    var v2258 = JAM.call(this.Rc, this, [], JAM.policy.p3);
    if (v2258) {
      v2258 = !this.Pa;
    }
    if (v2258) {
      var a$$402 = JAM.call(this.J, this, [], JAM.policy.p3);
      var v505 = a$$402;
      if (v505) {
        v505 = a$$402.contentWindow;
      }
      var b$$316 = v505;
      if (b$$316) {
        var c$$212 = ga$$1(eg, b$$316);
        var d$$134 = JAM.call(r$$2, null, [V$$1.prototype.da, this], JAM.policy.p3);
        b$$316 = ag;
        var e$$76 = !1;
        var f$$49 = !1;
        x$$50(b$$316, v156);
      }
    }
    return;
  }
  function v155(a$$400) {
    JAM.call(this.eb, this, [a$$400], JAM.policy.p3);
    this.hc = !0;
    return;
  }
  function v154(a$$399, b$$314) {
    JAM.call(this.eb, this, [a$$399], JAM.policy.p3);
    this.ma = !0;
    switch(b$$314) {
      case Zf:
        this.za = 453848234;
        break;
      case $f:
        this.za = 453848236;
    }
    return;
  }
  function v153(a$$398) {
    var v508 = this.jc;
    if (!v508) {
      var v2260;
      if (a$$398) {
        v2260 = this.Tb = !0;
      } else {
        v2260 = this.Pa = !0;
      }
      v2260;
    }
    return;
  }
  function v152(a$$397) {
    var v509 = this.va;
    if (!v509) {
      JAM.call(this.ta, this, [a$$397, this.F], JAM.policy.p3);
      this.va = !0;
      a$$397.style.display = "";
    }
    return;
  }
  function v151(a$$396, b$$313) {
    var v2263 = a$$396;
    if (v2263) {
      v2263 = a$$396.contentWindow;
    }
    var v510 = v2263;
    if (v510) {
      var v2264 = a$$396.contentWindow;
      JAM.call(v2264.postMessage, v2264, [b$$313, this.Fb], JAM.policy.p3);
    }
    return;
  }
  function v150() {
    var v511 = this.Q.document;
    return JAM.call(v511.getElementById, v511, ["zrt_ads_frame" + this.Q.google_unique_id], JAM.policy.p3);
  }
  function v149(a$$395) {
    var b$$312 = JAM.call(this.J, this, [], JAM.policy.p3);
    var v3532 = this.Fb == a$$395.origin;
    if (v3532) {
      v3532 = b$$312;
    }
    var v2268 = v3532;
    if (v2268) {
      v2268 = b$$312.contentWindow == a$$395.source;
    }
    if (v2268) {
      a$$395 = a$$395.data;
      var c$$210 = !0;
      var v513 = JAM.call(this.da, this, [a$$395, b$$312, c$$210], JAM.policy.p3);
      if (v513) {
        A$$1(this.Q, "message", this.K);
        JAM.call(this.R, this, [], JAM.policy.p3);
        var v3535 = this.ma;
        if (v3535) {
          JAM.call(this.ta, this, [b$$312, Yf], JAM.policy.p3);
          b$$312 = this.U;
          this.U = null;
          if (b$$312) {
            JAM.call(b$$312, null, [JAM.call(this.v, this, [], JAM.policy.p3), this.za, !0], JAM.policy.p3);
          }
        }
      }
    }
    return;
  }
  function v148(a$$394, b$$311, c$$209) {
    var v515;
    if (Wf[a$$394]) {
      JAM.call(this.Ac, this, [c$$209, a$$394], JAM.policy.p3);
      v515 = !0;
    } else {
      var v2269;
      if ("zr" == a$$394) {
        JAM.call(this.Dc, this, [c$$209], JAM.policy.p3);
        var v4727 = this.F;
        if (v4727) {
          JAM.call(this.gb, this, [b$$311], JAM.policy.p3);
        }
        v2269 = !0;
      } else {
        v2269 = !1;
      }
      v515 = v2269;
    }
    return v515;
  }
  function v147() {
    this.Fc = !0;
    return;
  }
  function v146() {
    var JSCompiler_inline_result$$8;
    var a$$inline_325 = this.Fc;
    var b$$inline_326 = this.Tb;
    var c$$inline_327 = this.Pa;
    var d$$inline_328 = this.Sb;
    var v516;
    if (a$$inline_325) {
      v516 = 8;
    } else {
      v516 = 0;
    }
    a$$inline_325 = v516;
    var v517;
    if (b$$inline_326) {
      v517 = 16;
    } else {
      v517 = 0;
    }
    b$$inline_326 = v517;
    var v518;
    if (c$$inline_327) {
      v518 = 32;
    } else {
      v518 = 0;
    }
    c$$inline_327 = v518;
    var v519;
    if (d$$inline_328) {
      v519 = 64;
    } else {
      v519 = 0;
    }
    d$$inline_328 = v519;
    JSCompiler_inline_result$$8 = a$$inline_325 | b$$inline_326 | c$$inline_327 | d$$inline_328;
    return JSCompiler_inline_result$$8;
  }
  function v145() {
    var a$$392 = this.F;
    if (a$$392) {
      var b$$309 = ce(a$$392, "w");
      var c$$207 = ce(a$$392, "h");
      var d$$132 = ce(a$$392, "ifi");
      d$$132 = Lb(d$$132);
      d$$132 = {id:d$$132, name:d$$132};
      Ff(d$$132, b$$309, c$$207, !1, Df(a$$392));
      var v523 = this.Q.document;
      JAM.call(v523.write, v523, [Cf(d$$132)], JAM.policy.p3);
      this.va = !0;
    }
    return;
  }
  function v144(a$$391, b$$308) {
    if (!this.ma) {
      this.F = a$$391;
      this.U = b$$308;
      if (this.hc) {
        try {
          JAM.call(this.gb, this, [JAM.call(this.J, this, [], JAM.policy.p3)], JAM.policy.p3);
        } catch (c$$206) {
          this.Sb = !0;
          JAM.call(b$$308, null, [JAM.call(this.v, this, [], JAM.policy.p3), null, !1], JAM.policy.p3);
        }
      } else {
        var v526 = "AZ" == this.Za;
        if (v526) {
          JAM.call(this.wb, this, [], JAM.policy.p3);
        }
      }
    }
    return;
  }
  function v143() {
    this.F = "";
    this.ma = this.jc = !0;
    this.U = null;
    var v529 = this.hc;
    if (v529) {
      A$$1(this.Q, "message", this.K);
      JAM.call(this.ta, this, [JAM.call(this.J, this, [], JAM.policy.p3), Yf], JAM.policy.p3);
    }
    return;
  }
  function v142() {
    var a$$390 = Ge;
    var v530 = this.Za == a$$390.IFRAME_SIGNALING;
    if (!v530) {
      v530 = this.Za == a$$390.ALWAYS_ZRT;
    }
    return v530;
  }
  function v141() {
    var v531 = this.va;
    if (!v531) {
      v531 = this.ma;
    }
    return v531;
  }
  function v140() {
    return this.za;
  }
  function v139() {
    return this.hc;
  }
  function v138() {
    return this.ma;
  }
  function v137() {
    return this.va;
  }
  function v136(a$$355) {
    this.j = 0;
    JAM.call(a$$355.fn, a$$355, [], JAM.policy.p3);
    return;
  }
  function v135() {
    var v2283 = 0 == this.j;
    if (v2283) {
      v2283 = this.oa.length;
    }
    if (v2283) {
      var v532 = this.oa;
      var a$$354 = JAM.call(v532.shift, v532, [], JAM.policy.p3);
      this.j = 2;
      var b$$282 = xe("sjr::run", JAM.call(r$$2, null, [this.ab, this, a$$354], JAM.policy.p3));
      var v534 = a$$354.win;
      JAM.call(v534.setTimeout, v534, [b$$282, 0], JAM.policy.p3);
      JAM.call(this.sa, this, [], JAM.policy.p3);
    }
    return;
  }
  function v134() {
    var a$$353 = xe("sjr::tryrun", JAM.call(r$$2, null, [this.Oc, this], JAM.policy.p3));
    var v537 = this.p;
    JAM.call(v537.setTimeout, v537, [a$$353, 0], JAM.policy.p3);
    return;
  }
  function v133() {
    var v2286 = !window;
    if (!v2286) {
      v2286 = !Array;
    }
    return!v2286;
  }
  function v132() {
    var v539 = 1 == this.j;
    if (v539) {
      var v3543 = null != this.na;
      if (v3543) {
        var v4728 = this.p;
        JAM.call(v4728.clearTimeout, v4728, [this.na], JAM.policy.p3);
        this.na = null;
      }
      this.j = 0;
    }
    JAM.call(this.sa, this, [], JAM.policy.p3);
    return;
  }
  function v131(a$$352) {
    this.j = 1;
    if (a$$352) {
      var b$$281 = xe("sjr::timeout", JAM.call(r$$2, null, [this.ra, this], JAM.policy.p3));
      var v541 = this.p;
      var v5120 = JAM.call(v541.setTimeout, v541, [b$$281, a$$352], JAM.policy.p3);
      this.na = v5120;
    }
    return;
  }
  function v130(a$$351, b$$280) {
    var v542 = this.oa;
    var v3544 = b$$280;
    if (!v3544) {
      v3544 = this.p;
    }
    JAM.call(v542.push, v542, [new nf(a$$351, v3544)], JAM.policy.p3);
    JAM.call(this.sa, this, [], JAM.policy.p3);
    return;
  }
  function v129(a$$350, b$$279) {
    var v544;
    var v4292 = 0 != this.j;
    if (!v4292) {
      v4292 = 0 != this.oa.length;
    }
    var v3545 = v4292;
    if (!v3545) {
      var v4293 = b$$279;
      if (v4293) {
        v4293 = b$$279 != window;
      }
      v3545 = v4293;
    }
    if (v3545) {
      v544 = JAM.call(this.Y, this, [a$$350, b$$279], JAM.policy.p3);
    } else {
      this.j = 2;
      v544 = JAM.call(this.ab, this, [new nf(a$$350, window)], JAM.policy.p3);
    }
    v544;
    return;
  }
  function v128(a$$342, b$$273, c$$185) {
    var d$$116;
    var e$$71 = {signature:"", adFrames:0};
    if (c$$185 > T$$1.MAXIMUM_IFRAME_DEPTH) {
      return e$$71;
    }
    try {
      d$$116 = a$$342[T$$1.NAME_FIRST_GOOGLE_WINDOW];
    } catch (f$$43) {
    }
    if (d$$116) {
      var v3547;
      if (a$$342 == b$$273) {
        v3547 = "I";
      } else {
        v3547 = "A";
      }
      e$$71.signature = v3547;
      e$$71.adFrames = 1;
    }
    var g$$27 = 0;
    var v548 = g$$27 < a$$342.length;
    for (;v548;) {
      var h$$19 = a$$342[g$$27];
      var v547 = h$$19 != d$$116;
      if (v547) {
        h$$19 = JAM.call(T$$1.Ha, T$$1, [h$$19, b$$273, c$$185 + 1], JAM.policy.p3);
        e$$71.adFrames = e$$71.adFrames + h$$19.adFrames;
        var v3548;
        if (h$$19.signature) {
          v3548 = e$$71.signature + ("!" + h$$19.signature + "~");
        } else {
          v3548 = e$$71.signature + "o";
        }
        e$$71.signature = v3548;
      }
      g$$27 = g$$27 + 1;
      v548 = g$$27 < a$$342.length;
    }
    return e$$71;
  }
  function v127(a$$341, b$$272, c$$184, d$$115, e$$70) {
    a$$341 = JAM.call(T$$1.Ha, T$$1, [a$$341.top, a$$341, 0], JAM.policy.p3);
    var v550 = a$$341.signature;
    var f$$42 = JAM.call(v550.substring, v550, [0, 1800], JAM.policy.p3);
    b$$272 = {frmn:a$$341.adFrames, frms:f$$42, adk:b$$272, correlator:c$$184, frm:d$$115, frmn0:e$$70};
    c$$184 = L$$1(La$$1(), "/pagead/gen_204?id=frmn");
    var JSCompiler_inline_result$$56;
    var a$$inline_256 = [c$$184];
    var b$$inline_257 = b$$272;
    var c$$inline_258;
    for (c$$inline_258 in b$$inline_257) {
      Ve(c$$inline_258, b$$inline_257[c$$inline_258], a$$inline_256);
    }
    JSCompiler_inline_result$$56 = a$$inline_256;
    var a$$inline_260 = JSCompiler_inline_result$$56;
    if (a$$inline_260[1]) {
      var b$$inline_261 = a$$inline_260[0];
      var c$$inline_262 = JAM.call(b$$inline_261.indexOf, b$$inline_261, ["#"], JAM.policy.p3);
      var v554 = 0 <= c$$inline_262;
      if (v554) {
        JAM.call(a$$inline_260.push, a$$inline_260, [JAM.call(b$$inline_261.substr, b$$inline_261, [c$$inline_262], JAM.policy.p3)], JAM.policy.p3);
        a$$inline_260[0] = b$$inline_261 = JAM.call(b$$inline_261.substr, b$$inline_261, [0, c$$inline_262], JAM.policy.p3);
      }
      c$$inline_262 = JAM.call(b$$inline_261.indexOf, b$$inline_261, ["?"], JAM.policy.p3);
      var v555;
      if (0 > c$$inline_262) {
        v555 = a$$inline_260[1] = "?";
      } else {
        var v2294 = c$$inline_262 == b$$inline_261.length - 1;
        if (v2294) {
          v2294 = a$$inline_260[1] = void 0;
        }
        v555 = v2294;
      }
      v555;
    }
    c$$184 = JAM.call(a$$inline_260.join, a$$inline_260, [""], JAM.policy.p3);
    nb$$1(w$$6, c$$184);
    return;
  }
  function v126(a$$340, b$$271, c$$183, d$$114) {
    var e$$69 = JAM.call(T$$1.Ha, T$$1, [a$$340.top, a$$340, 0], JAM.policy.p3);
    JAM.call(window.setTimeout, window, [ga$$1(T$$1.Uc, a$$340, b$$271, c$$183, d$$114, e$$69.adFrames), T$$1.IFRAME_COUNTS_DELAY], JAM.policy.p3);
    return e$$69.adFrames;
  }
  function v125(a$$339, b$$270) {
    var c$$182 = T$$1;
    if (a$$339.top == a$$339) {
      return c$$182.NO_IFRAMING;
    }
    if (b$$270) {
      var d$$113 = a$$339.location.ancestorOrigins;
      if (d$$113) {
        var v562;
        if (d$$113[d$$113.length - 1] == a$$339.location.origin) {
          v562 = c$$182.SAME_DOMAIN_IFRAMING;
        } else {
          v562 = c$$182.CROSS_DOMAIN_IFRAMING;
        }
        return v562;
      }
    }
    var v563;
    if (Kb(a$$339.top)) {
      v563 = c$$182.SAME_DOMAIN_IFRAMING;
    } else {
      v563 = c$$182.CROSS_DOMAIN_IFRAMING;
    }
    return v563;
  }
  function v124(a$$331, b$$264) {
    var c$$177 = Oe("rs", a$$331);
    var d$$110 = ce(a$$331, "dt");
    c$$177 = JAM.call(c$$177.replace, c$$177, [/&dtd=(\d+|M)/, "&dtd=" + Hb(d$$110)], JAM.policy.p3);
    JAM.call(this.set, this, [b$$264, c$$177], JAM.policy.p3);
    return c$$177;
  }
  function v123(a$$330) {
    var v565 = this.p.document;
    a$$330 = JAM.call(v565.getElementById, v565, [a$$330], JAM.policy.p3);
    var b$$263 = a$$330.contentWindow.document;
    var v3555 = a$$330.onload;
    if (v3555) {
      v3555 = b$$263;
    }
    var v2303 = v3555;
    if (v2303) {
      var v3556 = !b$$263.body;
      if (!v3556) {
        v3556 = !b$$263.body.firstChild;
      }
      v2303 = v3556;
    }
    if (v2303) {
      JAM.call(a$$330.onload, a$$330, [], JAM.policy.p3);
    }
    return;
  }
  function v122(a$$329, b$$262) {
    JAM.set(this.hd.handlers, a$$329, b$$262, JAM.policy.p2);
    var v569 = this.p.addEventListener;
    if (v569) {
      var v2306 = this.p;
      JAM.call(v2306.addEventListener, v2306, ["load", JAM.call(r$$2, null, [this.Jb, this, a$$329], JAM.policy.p3), !1], JAM.policy.p3);
    }
    return;
  }
  function v121(a$$322, b$$256) {
    JAM.call(b$$256.push, b$$256, ["{"], JAM.policy.p3);
    var c$$173 = "";
    var d$$109;
    for (d$$109 in a$$322) {
      if (JAM.call(a$$322.hasOwnProperty, a$$322, [d$$109], JAM.policy.p3)) {
        var e$$68 = a$$322[d$$109];
        var v570 = "function" != typeof e$$68;
        if (v570) {
          JAM.call(b$$256.push, b$$256, [c$$173], JAM.policy.p3);
          JAM.call(this.r, this, [d$$109, b$$256], JAM.policy.p3);
          JAM.call(b$$256.push, b$$256, [":"], JAM.policy.p3);
          JAM.call(this.n, this, [e$$68, b$$256], JAM.policy.p3);
          c$$173 = ",";
        }
      }
    }
    JAM.call(b$$256.push, b$$256, ["}"], JAM.policy.p3);
    return;
  }
  function v120(a$$321, b$$255) {
    var c$$172 = a$$321.length;
    JAM.call(b$$255.push, b$$255, ["["], JAM.policy.p3);
    var d$$108 = "";
    var e$$67 = 0;
    var v572 = e$$67 < c$$172;
    for (;v572;) {
      JAM.call(b$$255.push, b$$255, [d$$108], JAM.policy.p3);
      JAM.call(this.n, this, [a$$321[e$$67], b$$255], JAM.policy.p3);
      d$$108 = ",";
      e$$67 = e$$67 + 1;
      v572 = e$$67 < c$$172;
    }
    JAM.call(b$$255.push, b$$255, ["]"], JAM.policy.p3);
    return;
  }
  function v119(a$$320, b$$254) {
    var v2310;
    var v4307 = isFinite(a$$320);
    if (v4307) {
      v4307 = !isNaN(a$$320);
    }
    if (v4307) {
      v2310 = a$$320;
    } else {
      v2310 = "null";
    }
    JAM.call(b$$254.push, b$$254, [v2310], JAM.policy.p3);
    return;
  }
  function v118(a$$318, b$$252) {
    function v117(a$$319) {
      if (a$$319 in Ce) {
        return Ce[a$$319];
      }
      var b$$253 = JAM.call(a$$319.charCodeAt, a$$319, [0], JAM.policy.p3);
      var e$$66 = "\\u";
      var v575;
      if (16 > b$$253) {
        v575 = e$$66 = e$$66 + "000";
      } else {
        var v2311;
        if (256 > b$$253) {
          v2311 = e$$66 = e$$66 + "00";
        } else {
          var v3560 = 4096 > b$$253;
          if (v3560) {
            v3560 = e$$66 = e$$66 + "0";
          }
          v2311 = v3560;
        }
        v575 = v2311;
      }
      v575;
      return JAM.set(Ce, a$$319, e$$66 + JAM.call(b$$253.toString, b$$253, [16], JAM.policy.p3), JAM.policy.p2);
    }
    JAM.call(b$$252.push, b$$252, ['"'], JAM.policy.p3);
    JAM.call(b$$252.push, b$$252, [JAM.call(a$$318.replace, a$$318, [De, v117], JAM.policy.p3)], JAM.policy.p3);
    JAM.call(b$$252.push, b$$252, ['"'], JAM.policy.p3);
    return;
  }
  function v116(a$$317, b$$251) {
    switch(typeof a$$317) {
      case "string":
        JAM.call(this.r, this, [a$$317, b$$251], JAM.policy.p3);
        break;
      case "number":
        JAM.call(this.L, this, [a$$317, b$$251], JAM.policy.p3);
        break;
      case "boolean":
        JAM.call(b$$251.push, b$$251, [a$$317], JAM.policy.p3);
        break;
      case "undefined":
        JAM.call(b$$251.push, b$$251, ["null"], JAM.policy.p3);
        break;
      case "object":
        if (null == a$$317) {
          JAM.call(b$$251.push, b$$251, ["null"], JAM.policy.p3);
          break;
        }
        if (a$$317 instanceof Array) {
          JAM.call(this.yc, this, [a$$317, b$$251], JAM.policy.p3);
          break;
        }
        JAM.call(this.M, this, [a$$317, b$$251], JAM.policy.p3);
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof a$$317);;
    }
    return;
  }
  function v115(a$$316) {
    var b$$250 = [];
    JAM.call(this.n, this, [a$$316, b$$250], JAM.policy.p3);
    return JAM.call(b$$250.join, b$$250, [""], JAM.policy.p3);
  }
  function v114() {
    return this.Lb;
  }
  function v113() {
    var v583 = window.google_enable_ose_periscope;
    if (v583) {
      this.Lb = !0;
    }
    return;
  }
  function v112(a$$299, b$$236, c$$162, d$$98, e$$60, f$$36) {
    function v111() {
      h$$17.lb = !0;
      return;
    }
    var g$$24 = null;
    var v584 = e$$60 && f$$36;
    if (v584) {
      g$$24 = new u$$2(e$$60, f$$36);
    }
    var v2316 = this.xa;
    if (v2316) {
      v2316 = d$$98;
    }
    if (v2316) {
      JAM.call(this.xa, this, [d$$98, a$$299, b$$236, !0, "", g$$24, ""], JAM.policy.p3);
    } else {
      if ("js" == c$$162) {
        JAM.call(this.oc, this, [a$$299, "google_ad_request_done"], JAM.policy.p3);
      } else {
        var h$$17 = new le(a$$299, b$$236, c$$162, d$$98, g$$24);
        var v586 = this.q;
        JAM.call(v586.push, v586, [h$$17], JAM.policy.p3);
        if (d$$98) {
          a$$299 = v111;
          fe(d$$98, a$$299);
        }
      }
      JAM.call(this.bc, this, [], JAM.policy.p3);
    }
    return;
  }
  function v110() {
    return this.ha.length + this.q.length;
  }
  function v109() {
    return this.Aa;
  }
  function v108() {
    var v591;
    if (window) {
      v591 = this.Wa;
    } else {
      v591 = 0;
    }
    return v591;
  }
  function v107() {
    return this.Db;
  }
  function v106() {
    return "";
  }
  function v105(a$$298) {
    if (JAM.call(this.getOseId, this, [], JAM.policy.p3)) {
      return JAM.call(this.getOseId, this, [], JAM.policy.p3);
    }
    var b$$235 = window.google_enable_ose;
    var c$$161;
    var v593;
    if (!0 === b$$235) {
      v593 = c$$161 = 2;
    } else {
      var v2319 = !1 !== b$$235;
      if (v2319) {
        var v3564 = c$$161 = vb([2], ie);
        if (!v3564) {
          v3564 = c$$161 = vb([3], je);
        }
        v2319 = v3564;
      }
      v593 = v2319;
    }
    v593;
    if (!c$$161) {
      return 0;
    }
    this.Wa = c$$161;
    var v5121 = String(a$$298 || 0);
    this.Aa = v5121;
    return JAM.call(this.getOseId, this, [], JAM.policy.p3);
  }
  function v104() {
    var a$$297 = [];
    var b$$234 = this.q.length;
    var c$$160 = 0;
    var v599 = c$$160 < b$$234;
    for (;v599;) {
      var d$$97 = this.q[c$$160];
      JAM.call(a$$297.push, a$$297, [d$$97.nb], JAM.policy.p3);
      c$$160 = c$$160 + 1;
      v599 = c$$160 < b$$234;
    }
    return a$$297;
  }
  function v103(a$$296, b$$233) {
    if (b$$233) {
      JAM.call(this.Fa, this, [this.wa, a$$296, 1], JAM.policy.p3);
    }
    var c$$159 = this.q.length;
    var d$$96 = 0;
    var v603 = d$$96 < c$$159;
    for (;v603;) {
      var e$$59 = this.q[d$$96];
      var v2322 = !e$$59.Vb;
      if (v2322) {
        v2322 = e$$59.kb;
      }
      var v602 = v2322;
      if (v602) {
        JAM.call(a$$296, null, [e$$59.kb, e$$59.nb, e$$59.fd, e$$59.lb, "", e$$59.Yc, ""], JAM.policy.p3);
        e$$59.Vb = !0;
      }
      d$$96 = d$$96 + 1;
      v603 = d$$96 < c$$159;
    }
    if (b$$233) {
      this.xa = a$$296;
    }
    return;
  }
  function v102(a$$295, b$$232, c$$158) {
    var d$$95 = this.ha;
    if (0 < d$$95.length) {
      var v604 = a$$295.document;
      var e$$58 = JAM.call(v604.getElementsByTagName, v604, ["a"], JAM.policy.p3);
      var f$$35 = 0;
      var v617 = f$$35 < e$$58.length;
      for (;v617;) {
        var g$$23 = 0;
        var v616 = g$$23 < d$$95.length;
        for (;v616;) {
          var h$$16 = d$$95[g$$23][1];
          var v3571 = e$$58[f$$35].href;
          if (0 <= JAM.call(v3571.indexOf, v3571, [h$$16], JAM.policy.p3)) {
            h$$16 = e$$58[f$$35].parentNode;
            if (d$$95[g$$23][2]) {
              var k$$6 = h$$16;
              var l$$9 = 0;
              var v608 = 4 > l$$9;
              for (;v608;) {
                var v3572 = k$$6.innerHTML;
                if (0 <= JAM.call(v3572.indexOf, v3572, [d$$95[g$$23][2]], JAM.policy.p3)) {
                  h$$16 = k$$6;
                  break;
                }
                k$$6 = k$$6.parentNode;
                l$$9 = l$$9 + 1;
                v608 = 4 > l$$9;
              }
            }
            k$$6 = !0;
            l$$9 = d$$95[g$$23][3];
            var z$$4 = d$$95[g$$23][5];
            JAM.call(b$$232, null, [h$$16, d$$95[g$$23][0], c$$158 || 0, k$$6, l$$9, void 0, z$$4], JAM.policy.p3);
            JAM.call(d$$95.splice, d$$95, [g$$23, 1], JAM.policy.p3);
            break;
          }
          g$$23 = g$$23 + 1;
          v616 = g$$23 < d$$95.length;
        }
        f$$35 = f$$35 + 1;
        v617 = f$$35 < e$$58.length;
      }
    }
    var v2332 = 0 < d$$95.length;
    if (v2332) {
      v2332 = a$$295 != hc();
    }
    if (v2332) {
      try {
        JAM.call(this.Fa, this, [a$$295.parent, b$$232, c$$158], JAM.policy.p3);
      } catch (C$$2) {
      }
    }
    return;
  }
  function v101() {
    var v621 = this.Ua;
    if (!v621) {
      mb$$1(D$$1());
      jb$$1(he);
      this.Ua = !0;
    }
    return;
  }
  function v100(a$$294, b$$230) {
    function v99(b$$231) {
      var v2334 = b$$231;
      if (v2334) {
        v2334 = 0 < b$$231.length;
      }
      if (v2334) {
        var v622;
        if (1 < b$$231.length) {
          v622 = b$$231[1].url;
        } else {
          v622 = null;
        }
        var f$$34 = v622;
        var v623 = b$$231[0].log_info;
        if (!v623) {
          v623 = null;
        }
        var g$$22 = v623;
        var v624 = b$$231[0].activeview_url;
        if (!v624) {
          v624 = null;
        }
        var h$$15 = v624;
        JAM.call(c$$157.push, c$$157, [[a$$294, Va$$1(b$$231[0].url), f$$34, g$$22, null, h$$15]], JAM.policy.p3);
      }
      JAM.call(d$$94, null, [b$$231], JAM.policy.p3);
      return;
    }
    var c$$157 = this.ha;
    var d$$94 = this.wa[b$$230];
    if (d$$94) {
      var v4315 = d$$94.orig_callback;
      if (!v4315) {
        v4315 = d$$94;
      }
      d$$94 = v4315;
      JAM.set(this.wa, b$$230, v99, JAM.policy.p2);
      this.wa[b$$230].orig_callback = d$$94;
    }
    return;
  }
  function v98(a$$254, b$$194) {
    var v628;
    if (q$$3(b$$194)) {
      v628 = b$$194;
    } else {
      v628 = a$$254;
    }
    var c$$127 = v628;
    this.left = this.left * a$$254;
    this.right = this.right * a$$254;
    this.top = this.top * c$$127;
    this.bottom = this.bottom * c$$127;
    return this;
  }
  function v97(a$$253, b$$193) {
    var v629;
    if (a$$253 instanceof M$$1) {
      this.left = this.left + a$$253.x;
      this.right = this.right + a$$253.x;
      this.top = this.top + a$$253.y;
      v629 = this.bottom = this.bottom + a$$253.y;
    } else {
      this.left = this.left + a$$253;
      this.right = this.right + a$$253;
      var v3581 = q$$3(b$$193);
      if (v3581) {
        this.top = this.top + b$$193;
        v3581 = this.bottom = this.bottom + b$$193;
      }
      v629 = v3581;
    }
    v629;
    return this;
  }
  function v96() {
    var v5122 = JAM.call(Math.round, Math, [this.top], JAM.policy.p3);
    this.top = v5122;
    var v5123 = JAM.call(Math.round, Math, [this.right], JAM.policy.p3);
    this.right = v5123;
    var v5124 = JAM.call(Math.round, Math, [this.bottom], JAM.policy.p3);
    this.bottom = v5124;
    var v5125 = JAM.call(Math.round, Math, [this.left], JAM.policy.p3);
    this.left = v5125;
    return this;
  }
  function v95() {
    var v5126 = JAM.call(Math.floor, Math, [this.top], JAM.policy.p3);
    this.top = v5126;
    var v5127 = JAM.call(Math.floor, Math, [this.right], JAM.policy.p3);
    this.right = v5127;
    var v5128 = JAM.call(Math.floor, Math, [this.bottom], JAM.policy.p3);
    this.bottom = v5128;
    var v5129 = JAM.call(Math.floor, Math, [this.left], JAM.policy.p3);
    this.left = v5129;
    return this;
  }
  function v94() {
    var v5130 = JAM.call(Math.ceil, Math, [this.top], JAM.policy.p3);
    this.top = v5130;
    var v5131 = JAM.call(Math.ceil, Math, [this.right], JAM.policy.p3);
    this.right = v5131;
    var v5132 = JAM.call(Math.ceil, Math, [this.bottom], JAM.policy.p3);
    this.bottom = v5132;
    var v5133 = JAM.call(Math.ceil, Math, [this.left], JAM.policy.p3);
    this.left = v5133;
    return this;
  }
  function v93(a$$252, b$$192, c$$126, d$$78) {
    var v642;
    if (da$$1(a$$252)) {
      this.top = this.top - a$$252.top;
      this.right = this.right + a$$252.right;
      this.bottom = this.bottom + a$$252.bottom;
      v642 = this.left = this.left - a$$252.left;
    } else {
      this.top = this.top - a$$252;
      this.right = this.right + b$$192;
      this.bottom = this.bottom + c$$126;
      v642 = this.left = this.left - d$$78;
    }
    v642;
    return this;
  }
  function v92(a$$251) {
    var v643;
    if (this && a$$251) {
      var v2349;
      if (a$$251 instanceof P$$1) {
        var v4747 = a$$251.left >= this.left;
        if (v4747) {
          v4747 = a$$251.right <= this.right;
        }
        var v4323 = v4747;
        if (v4323) {
          v4323 = a$$251.top >= this.top;
        }
        var v3582 = v4323;
        if (v3582) {
          v3582 = a$$251.bottom <= this.bottom;
        }
        v2349 = v3582;
      } else {
        var v4750 = a$$251.x >= this.left;
        if (v4750) {
          v4750 = a$$251.x <= this.right;
        }
        var v4326 = v4750;
        if (v4326) {
          v4326 = a$$251.y >= this.top;
        }
        var v3583 = v4326;
        if (v3583) {
          v3583 = a$$251.y <= this.bottom;
        }
        v2349 = v3583;
      }
      v643 = v2349;
    } else {
      v643 = !1;
    }
    return v643;
  }
  function v91() {
    var JSCompiler_inline_result$$2;
    var a$$inline_141 = this.V;
    var v644;
    var v3585 = Pc;
    if (!v3585) {
      v3585 = "CSS1Compat" != a$$inline_141.compatMode;
    }
    if (v3585) {
      var v2351 = a$$inline_141.body;
      if (!v2351) {
        v2351 = a$$inline_141.documentElement;
      }
      v644 = v2351;
    } else {
      v644 = a$$inline_141.documentElement;
    }
    var b$$inline_142 = v644;
    var v645 = a$$inline_141.parentWindow;
    if (!v645) {
      v645 = a$$inline_141.defaultView;
    }
    a$$inline_141 = v645;
    var v646;
    var v4331 = N$$1;
    if (v4331) {
      v4331 = Uc("10");
    }
    var v3587 = v4331;
    if (v3587) {
      v3587 = a$$inline_141.pageYOffset != b$$inline_142.scrollTop;
    }
    if (v3587) {
      v646 = new M$$1(b$$inline_142.scrollLeft, b$$inline_142.scrollTop);
    } else {
      var v3588 = a$$inline_141.pageXOffset;
      if (!v3588) {
        v3588 = b$$inline_142.scrollLeft;
      }
      var v2356 = v3588;
      var v3589 = a$$inline_141.pageYOffset;
      if (!v3589) {
        v3589 = b$$inline_142.scrollTop;
      }
      v646 = new M$$1(v2356, v3589);
    }
    JSCompiler_inline_result$$2 = v646;
    return JSCompiler_inline_result$$2;
  }
  function v90() {
    return "CSS1Compat" == this.V.compatMode;
  }
  function v89(a$$249) {
    var v648 = this.V;
    return JAM.call(v648.createTextNode, v648, [String(a$$249)], JAM.policy.p3);
  }
  function v88(a$$248) {
    var v650 = this.V;
    return JAM.call(v650.createElement, v650, [a$$248], JAM.policy.p3);
  }
  function v87() {
    var a$$224 = m$$3.document;
    if (a$$224 && N$$1) {
      var b$$175 = Qc();
      var v651 = b$$175;
      if (!v651) {
        var v2360;
        if ("CSS1Compat" == a$$224.compatMode) {
          v2360 = parseInt(Sc, 10);
        } else {
          v2360 = 5;
        }
        v651 = v2360;
      }
      return v651;
    }
    return;
  }
  function v86(a$$216, b$$169) {
    var v653;
    if (q$$3(b$$169)) {
      v653 = b$$169;
    } else {
      v653 = a$$216;
    }
    var c$$114 = v653;
    this.x = this.x * a$$216;
    this.y = this.y * c$$114;
    return this;
  }
  function v85(a$$215, b$$168) {
    var v654;
    if (a$$215 instanceof M$$1) {
      this.x = this.x + a$$215.x;
      v654 = this.y = this.y + a$$215.y;
    } else {
      this.x = this.x + a$$215;
      var v3591 = q$$3(b$$168);
      if (v3591) {
        v3591 = this.y = this.y + b$$168;
      }
      v654 = v3591;
    }
    v654;
    return this;
  }
  function v84() {
    var v5134 = JAM.call(Math.round, Math, [this.x], JAM.policy.p3);
    this.x = v5134;
    var v5135 = JAM.call(Math.round, Math, [this.y], JAM.policy.p3);
    this.y = v5135;
    return this;
  }
  function v83() {
    var v5136 = JAM.call(Math.floor, Math, [this.x], JAM.policy.p3);
    this.x = v5136;
    var v5137 = JAM.call(Math.floor, Math, [this.y], JAM.policy.p3);
    this.y = v5137;
    return this;
  }
  function v82() {
    var v5138 = JAM.call(Math.ceil, Math, [this.x], JAM.policy.p3);
    this.x = v5138;
    var v5139 = JAM.call(Math.ceil, Math, [this.y], JAM.policy.p3);
    this.y = v5139;
    return this;
  }
  function v81() {
    function b$$153(b$$154) {
      var v661 = "" != b$$154;
      if (v661) {
        JAM.call(a$$192.push, a$$192, [b$$154], JAM.policy.p3);
      }
      return;
    }
    var a$$192 = [];
    x$$50(this.layers, b$$153);
    var v663;
    var v3592 = 0 < this.defaultBucket.length;
    if (v3592) {
      v3592 = 0 < a$$192.length;
    }
    if (v3592) {
      var v4344 = this.defaultBucket;
      v663 = JAM.call(v4344.join, v4344, [","], JAM.policy.p3) + "," + JAM.call(a$$192.join, a$$192, [","], JAM.policy.p3);
    } else {
      var v3594 = this.defaultBucket;
      v663 = JAM.call(v3594.join, v3594, [","], JAM.policy.p3) + JAM.call(a$$192.join, a$$192, [","], JAM.policy.p3);
    }
    return v663;
  }
  function v80(a$$191) {
    var v664;
    var v3595 = this.layers;
    if (JAM.call(v3595.hasOwnProperty, v3595, [a$$191], JAM.policy.p3)) {
      v664 = this.layers[a$$191];
    } else {
      v664 = "";
    }
    return v664;
  }
  function v79(a$$190) {
    var v665;
    if (a$$190) {
      var v3596 = this.layers;
      var v2373 = JAM.call(v3596.hasOwnProperty, v3596, [a$$190], JAM.policy.p3);
      if (v2373) {
        v2373 = "" == this.layers[a$$190];
      }
      v665 = v2373;
    } else {
      v665 = !0;
    }
    return v665;
  }
  function v78(a$$189, b$$152, c$$107) {
    var v666;
    var v3598 = JAM.call(this.ac, this, [c$$107], JAM.policy.p3);
    if (v3598) {
      v3598 = a$$189 = vb(a$$189, b$$152);
    }
    if (v3598) {
      v666 = JAM.call(this.bb, this, [a$$189, c$$107], JAM.policy.p3);
    } else {
      v666 = "";
    }
    return v666;
  }
  function v77(a$$188, b$$151) {
    var v667;
    if ("" == a$$188) {
      v667 = "";
    } else {
      var v2375;
      if (b$$151) {
        var v3599;
        var v4755 = this.layers;
        if (JAM.call(v4755.hasOwnProperty, v4755, [b$$151], JAM.policy.p3)) {
          v3599 = JAM.set(this.layers, b$$151, a$$188, JAM.policy.p2);
        } else {
          v3599 = "";
        }
        v2375 = v3599;
      } else {
        var v4348 = this.defaultBucket;
        JAM.call(v4348.push, v4348, [a$$188], JAM.policy.p3);
        v2375 = a$$188;
      }
      v667 = v2375;
    }
    return v667;
  }
  function v76(a$$187, b$$150) {
    JAM.set(this.layers, b$$150, a$$187, JAM.policy.p2);
    return;
  }
  function v75() {
    return!0;
  }
  function v74(a$$181, b$$144, c$$102) {
    var d$$66 = a$$181.length;
    var v669;
    if (p$$1(a$$181)) {
      v669 = JAM.call(a$$181.split, a$$181, [""], JAM.policy.p3);
    } else {
      v669 = a$$181;
    }
    var e$$45 = v669;
    var f$$25 = 0;
    var v671 = f$$25 < d$$66;
    for (;v671;) {
      var v670 = f$$25 in e$$45;
      if (v670) {
        JAM.call(b$$144.call, b$$144, [c$$102, e$$45[f$$25], f$$25, a$$181], JAM.policy.p3);
      }
      f$$25 = f$$25 + 1;
      v671 = f$$25 < d$$66;
    }
    return;
  }
  function v73(a$$180, b$$143, c$$101) {
    var v672 = Xb.forEach;
    JAM.call(v672.call, v672, [a$$180, b$$143, c$$101], JAM.policy.p3);
    return;
  }
  function v72(a$$179, b$$142, c$$100) {
    var v673;
    if (null == c$$100) {
      v673 = 0;
    } else {
      var v2379;
      if (0 > c$$100) {
        v2379 = JAM.call(Math.max, Math, [0, a$$179.length + c$$100], JAM.policy.p3);
      } else {
        v2379 = c$$100;
      }
      v673 = v2379;
    }
    c$$100 = v673;
    if (p$$1(a$$179)) {
      var v674;
      var v3602 = p$$1(b$$142);
      if (v3602) {
        v3602 = 1 == b$$142.length;
      }
      if (v3602) {
        v674 = JAM.call(a$$179.indexOf, a$$179, [b$$142, c$$100], JAM.policy.p3);
      } else {
        v674 = -1;
      }
      return v674;
    }
    var v677 = c$$100 < a$$179.length;
    for (;v677;) {
      var v2383 = c$$100 in a$$179;
      if (v2383) {
        v2383 = a$$179[c$$100] === b$$142;
      }
      if (v2383) {
        return c$$100;
      }
      c$$100 = c$$100 + 1;
      v677 = c$$100 < a$$179.length;
    }
    return-1;
  }
  function v71(a$$178, b$$141, c$$99) {
    var v678 = Xb.indexOf;
    return JAM.call(v678.call, v678, [a$$178, b$$141, c$$99], JAM.policy.p3);
  }
  function v70(a$$140, b$$111) {
    var v679;
    if (q$$3(b$$111)) {
      v679 = b$$111;
    } else {
      v679 = a$$140;
    }
    var c$$75 = v679;
    this.width = this.width * a$$140;
    this.height = this.height * c$$75;
    return this;
  }
  function v69() {
    var v5140 = JAM.call(Math.round, Math, [this.width], JAM.policy.p3);
    this.width = v5140;
    var v5141 = JAM.call(Math.round, Math, [this.height], JAM.policy.p3);
    this.height = v5141;
    return this;
  }
  function v68() {
    var v5142 = JAM.call(Math.floor, Math, [this.width], JAM.policy.p3);
    this.width = v5142;
    var v5143 = JAM.call(Math.floor, Math, [this.height], JAM.policy.p3);
    this.height = v5143;
    return this;
  }
  function v67() {
    var v5144 = JAM.call(Math.ceil, Math, [this.width], JAM.policy.p3);
    this.width = v5144;
    var v5145 = JAM.call(Math.ceil, Math, [this.height], JAM.policy.p3);
    this.height = v5145;
    return this;
  }
  function v66() {
    return+new Date;
  }
  function gi() {
    var v2388 = H$$1();
    return JAM.call(v2388.m, v2388, [18], JAM.policy.p3) == K$$1.ASYNC_EXPANSION_EMBED.EXPERIMENT;
  }
  function mi(a$$568) {
    var b$$441 = vf;
    return ki({dtd:Hb(b$$441)}, a$$568);
  }
  function Zi(a$$567) {
    var b$$440 = window.google_container_id;
    var v2391 = b$$440;
    if (v2391) {
      v2391 = JAM.call(document.getElementById, document, [b$$440], JAM.policy.p3);
    }
    var v690 = v2391;
    if (!v690) {
      v690 = JAM.call(document.getElementById, document, [a$$567], JAM.policy.p3);
    }
    var c$$299 = v690;
    var v2393 = c$$299 || b$$440;
    if (!v2393) {
      v2393 = !a$$567;
    }
    var v691 = v2393;
    if (!v691) {
      JAM.call(document.write, document, ["<span id=" + a$$567 + "></span>"], JAM.policy.p3);
      c$$299 = JAM.call(document.getElementById, document, [a$$567], JAM.policy.p3);
    }
    return c$$299;
  }
  function Gi(a$$565) {
    var b$$438 = mc();
    var c$$298 = G$$1(b$$438, 8);
    var d$$183 = G$$1(b$$438, 9);
    var e$$108 = window.google_ad_section;
    if (ub(window)) {
      var v2395 = 3 < oc(b$$438, 5, G$$1(b$$438, 5) + 1);
      if (v2395) {
        v2395 = !a$$565;
      }
      if (v2395) {
        return!1;
      }
    } else {
      var f$$65 = oc(b$$438, 6, G$$1(b$$438, 6) + 1);
      if (window.google_num_slots_to_rotate) {
        var JSCompiler_inline_result$$19;
        ze = ze | 1;
        JSCompiler_inline_result$$19 = void 0;
        JSCompiler_inline_result$$19;
        JAM.set(c$$298, e$$108, "", JAM.policy.p2);
        var JSCompiler_temp_const$$70 = JAM.set(d$$183, e$$108, "", JAM.policy.p2);
        var JSCompiler_temp$$71;
        if (JSCompiler_temp$$71 = G$$1(b$$438, 12)) {
        } else {
          var v3607 = new Date;
          var b$$inline_551 = JAM.call(v3607.getTime, v3607, [], JAM.policy.p3) % window.google_num_slots_to_rotate + 1;
          JSCompiler_temp$$71 = oc(b$$438, 12, b$$inline_551);
        }
        JSCompiler_temp_const$$70;
        JSCompiler_temp$$71;
        if (G$$1(b$$438, 12) != f$$65) {
          return!1;
        }
      } else {
        var v3609 = !a$$565;
        if (v3609) {
          v3609 = 6 < f$$65;
        }
        var v2399 = v3609;
        if (v2399) {
          v2399 = "" == e$$108;
        }
        if (v2399) {
          return!1;
        }
      }
    }
    return!0;
  }
  function xi(a$$561, b$$434) {
    var c$$295 = b$$434.src;
    var d$$180;
    var a$$inline_518 = c$$295;
    var b$$inline_519 = "/pagead/blank.gif#?";
    var c$$inline_520 = a$$561;
    var d$$inline_521 = JAM.call(a$$inline_518.indexOf, a$$inline_518, [b$$inline_519], JAM.policy.p3);
    var v700;
    if (-1 == d$$inline_521) {
      v700 = a$$inline_518;
    } else {
      v700 = c$$inline_520 + JAM.call(a$$inline_518.substr, a$$inline_518, [d$$inline_521 + b$$inline_519.length], JAM.policy.p3);
    }
    d$$180 = v700;
    var v701 = d$$180 !== c$$295;
    if (v701) {
      b$$434.src = d$$180;
    }
    return;
  }
  function $i(a$$558) {
    function v25(b$$431, c$$292) {
      JAM.set(a$$558, b$$431, window[c$$292], JAM.policy.p2);
      return;
    }
    function v24(b$$430, c$$291) {
      JAM.set(a$$558, b$$430, window[c$$291], JAM.policy.p2);
      return;
    }
    function v23(b$$429, c$$290) {
      JAM.set(a$$558, b$$429, window[c$$290], JAM.policy.p2);
      return;
    }
    x$$50(wh, v23);
    x$$50(vh, v24);
    x$$50(xh, v25);
    return;
  }
  function Yi(a$$557, b$$428, c$$289, d$$178) {
    if (d$$178) {
      var e$$105 = 0;
      var v703 = e$$105 < d$$178.length;
      for (;v703;) {
        var f$$63 = d$$178[e$$105];
        if (!JAM.call(f$$63, null, [], JAM.policy.p3)) {
          return;
        }
        e$$105 = e$$105 + 1;
        v703 = e$$105 < d$$178.length;
      }
    }
    if (Xi) {
      var v3611 = new Date;
      Xi = JAM.call(v3611.getTime, v3611, [], JAM.policy.p3) - Xi;
    }
    var v2407 = c$$289;
    if (v2407) {
      v2407 = JAM.call(c$$289.fb, c$$289, [], JAM.policy.p3);
    }
    var v704 = v2407;
    if (v704) {
      JAM.call(c$$289.Hc, c$$289, [], JAM.policy.p3);
    }
    JSCompiler_inline_label_Ki_503: {
      var a$$inline_500 = a$$557;
      var a$$inline_698 = window;
      var b$$inline_699;
      var a$$inline_769 = a$$inline_698;
      var b$$inline_770 = D$$1().document;
      var c$$inline_771 = {};
      var d$$inline_772;
      var a$$inline_942 = window;
      a$$inline_942 = dc(a$$inline_942, !1);
      d$$inline_772 = a$$inline_942.win;
      var e$$inline_773 = cf(d$$inline_772);
      var f$$inline_774 = Ze(D$$1(), b$$inline_770, a$$inline_769.google_ad_width, a$$inline_769.google_ad_height);
      var JSCompiler_inline_result$$927;
      var a$$inline_944 = a$$inline_769;
      var b$$inline_945 = f$$inline_774;
      var c$$inline_946 = e$$inline_773.isTopUrl;
      var d$$inline_947 = JAM.call(T$$1.getIframingState, T$$1, [D$$1()], JAM.policy.p3);
      var e$$inline_948 = 4;
      var v711;
      var v3612 = b$$inline_945;
      if (!v3612) {
        v3612 = d$$inline_947 != T$$1.SAME_DOMAIN_IFRAMING;
      }
      if (v3612) {
        var v2408;
        var v4356 = b$$inline_945;
        if (!v4356) {
          v4356 = d$$inline_947 != T$$1.CROSS_DOMAIN_IFRAMING;
        }
        if (v4356) {
          var v3613;
          var v4759 = b$$inline_945;
          if (v4759) {
            v4759 = d$$inline_947 == T$$1.SAME_DOMAIN_IFRAMING;
          }
          if (v4759) {
            v3613 = e$$inline_948 = 7;
          } else {
            var v4760 = b$$inline_945;
            if (v4760) {
              v4760 = d$$inline_947 == T$$1.CROSS_DOMAIN_IFRAMING;
            }
            var v4357 = v4760;
            if (v4357) {
              v4357 = e$$inline_948 = 8;
            }
            v3613 = v4357;
          }
          v2408 = v3613;
        } else {
          v2408 = e$$inline_948 = 6;
        }
        v711 = v2408;
      } else {
        v711 = e$$inline_948 = 5;
      }
      v711;
      var v712 = !!a$$inline_944.google_referrer_url;
      if (v712) {
        v712 = !Ye();
      }
      a$$inline_944 = v712;
      e$$inline_948 = e$$inline_948 + 5 * a$$inline_944;
      if (c$$inline_946) {
        e$$inline_948 = e$$inline_948 | 16;
      }
      JSCompiler_inline_result$$927 = "" + e$$inline_948;
      c$$inline_771.iframing = JSCompiler_inline_result$$927;
      var v2413 = !a$$inline_769.google_page_url;
      if (v2413) {
        v2413 = "yieldmanager" == b$$inline_770.domain;
      }
      if (v2413) {
        var v713 = b$$inline_770.URL;
        var v2414 = b$$inline_770.URL;
        e$$inline_773 = JAM.call(v713.substring, v713, [JAM.call(v2414.lastIndexOf, v2414, ["http"], JAM.policy.p3)], JAM.policy.p3);
        var v715 = -1 < JAM.call(e$$inline_773.indexOf, e$$inline_773, ["%"], JAM.policy.p3);
        for (;v715;) {
          try {
            e$$inline_773 = decodeURIComponent(e$$inline_773);
          } catch (g$$inline_775) {
            break;
          }
          v715 = -1 < JAM.call(e$$inline_773.indexOf, e$$inline_773, ["%"], JAM.policy.p3);
        }
        a$$inline_769.google_page_url = e$$inline_773;
      }
      var JSCompiler_inline_result$$941;
      var a$$inline_950 = a$$inline_769;
      var b$$inline_951 = af();
      var v717 = !b$$inline_951;
      if (v717) {
        v717 = !!a$$inline_950.google_page_url;
      }
      JSCompiler_inline_result$$941 = v717;
      if (JSCompiler_inline_result$$941) {
        var a$$inline_953 = c$$inline_771;
        var c$$inline_955 = b$$inline_770;
        var d$$inline_956 = f$$inline_774;
        a$$inline_953.page_url = a$$inline_769.google_page_url;
        var v718 = a$$inline_953;
        var v2418 = bf(c$$inline_955, d$$inline_956);
        if (!v2418) {
          v2418 = "EMPTY";
        }
        v718.page_location = v2418;
      } else {
        var a$$inline_958 = c$$inline_771;
        var v719 = a$$inline_958;
        var v5146 = bf(b$$inline_770, f$$inline_774);
        v719.page_url = v5146;
        a$$inline_958.page_location = null;
      }
      var v720 = c$$inline_771;
      var v2419;
      if (b$$inline_770.URL == c$$inline_771.page_url) {
        v2419 = JAM.call(Date.parse, Date, [b$$inline_770.lastModified], JAM.policy.p3) / 1E3;
      } else {
        v2419 = null;
      }
      v720.last_modified_time = v2419;
      if (Ye()) {
        var JSCompiler_inline_result$$928;
        var a$$inline_962 = d$$inline_772;
        var v721;
        if (a$$inline_962 == a$$inline_962.top) {
          v721 = a$$inline_962.document.referrer;
        } else {
          var v2421 = a$$inline_962 = af(!0);
          if (!v2421) {
            v2421 = "";
          }
          v721 = v2421;
        }
        JSCompiler_inline_result$$928 = v721;
        c$$inline_771.referrer_url = JSCompiler_inline_result$$928;
      } else {
        var JSCompiler_inline_result$$925;
        var a$$inline_964 = a$$inline_769;
        var b$$inline_965 = b$$inline_770;
        var c$$inline_966 = f$$inline_774;
        var d$$inline_967 = af();
        var v722;
        if (d$$inline_967) {
          v722 = "";
        } else {
          var v2423;
          if (c$$inline_966) {
            v2423 = a$$inline_964.google_referrer_url;
          } else {
            var v3625;
            var v4761 = a$$inline_964.google_page_url;
            if (v4761) {
              v4761 = a$$inline_964.google_referrer_url;
            }
            if (v4761) {
              v3625 = a$$inline_964.google_referrer_url;
            } else {
              v3625 = b$$inline_965.referrer;
            }
            v2423 = v3625;
          }
          v722 = v2423;
        }
        JSCompiler_inline_result$$925 = v722;
        c$$inline_771.referrer_url = JSCompiler_inline_result$$925;
      }
      b$$inline_699 = c$$inline_771;
      $e(a$$inline_698, b$$inline_699);
      var v3626 = window.google_page_url;
      if (!v3626) {
        v3626 = window.google_referrer_url;
      }
      var v2424 = v3626;
      if (!v2424) {
        v2424 = window.google_page_location;
      }
      if (v2424) {
      } else {
        var a$$inline_701 = K$$1;
        var v724 = J$$1();
        JAM.call(v724.k, v724, [[a$$inline_701.TOP_URL_REPLACES_MISSING_URL.CONTROL, a$$inline_701.TOP_URL_REPLACES_MISSING_URL.EXPERIMENT], wa$$1, 4], JAM.policy.p3);
      }
      if (!Gi(!1)) {
        c$$289 = !1;
        break JSCompiler_inline_label_Ki_503;
      }
      var v728;
      if (Bc(window)) {
        v728 = ma$$1("", "googlesyndication");
      } else {
        v728 = Ja$$1();
      }
      var b$$inline_501 = v728;
      var a$$inline_703 = a$$inline_500;
      var b$$inline_704 = {};
      $i(b$$inline_704);
      var a$$inline_777 = b$$inline_704;
      a$$inline_777.dt = vf;
      var v2429 = B$$2;
      if (v2429) {
        v2429 = window.google_bpp;
      }
      var v729 = v2429;
      if (v729) {
        a$$inline_777.bpp = window.google_bpp;
      }
      var b$$inline_778;
      JSCompiler_inline_label_816: {
        var a$$inline_779 = void 0;
        var b$$inline_780 = D$$1();
        var c$$inline_781 = b$$inline_780.performance;
        var v3631 = c$$inline_781;
        if (v3631) {
          v3631 = c$$inline_781.timing;
        }
        var v2430 = v3631;
        if (v2430) {
          v2430 = c$$inline_781.now;
        }
        if (v2430) {
          var d$$inline_782 = c$$inline_781.timing.navigationStart + JAM.call(Math.round, Math, [JAM.call(c$$inline_781.now, c$$inline_781, [], JAM.policy.p3)], JAM.policy.p3);
          d$$inline_782 = d$$inline_782 - c$$inline_781.timing.domLoading;
        }
        if (!d$$inline_782) {
          b$$inline_778 = null;
          break JSCompiler_inline_label_816;
        }
        a$$inline_779 = a$$inline_779 || vf;
        var v2434 = b$$inline_780.Date;
        b$$inline_780 = JAM.call(v2434.now, v2434, [], JAM.policy.p3) - a$$inline_779;
        b$$inline_780 = d$$inline_782 - b$$inline_780;
        var v736;
        if (0 > b$$inline_780) {
          v736 = "-M";
        } else {
          var v2435;
          if (1E6 < b$$inline_780) {
            v2435 = "M";
          } else {
            v2435 = b$$inline_780;
          }
          v736 = v2435;
        }
        b$$inline_778 = v736;
      }
      if (b$$inline_778) {
        a$$inline_777.bdt = b$$inline_778;
      }
      var v737 = a$$inline_777;
      var v5147 = Da$$1();
      v737.shv = v5147;
      b$$inline_778 = !!window.google_test_1;
      var c$$inline_783 = !!window.google_test_2;
      if (b$$inline_778) {
        var v2439;
        if (c$$inline_783) {
          v2439 = "3";
        } else {
          v2439 = "2";
        }
        a$$inline_777.tsi = v2439;
      }
      var v740 = a$$inline_777;
      var v5148 = JAM.call("/r20130906".replace, "/r20130906", ["/", ""], JAM.policy.p3);
      v740.cbv = v5148;
      var v741 = JAM.call(/^\w{1,3}$/.test, /^\w{1,3}$/, [window.google_loader_used], JAM.policy.p3);
      if (v741) {
        a$$inline_777.saldr = window.google_loader_used;
      }
      b$$inline_778 = mc();
      if (Zg(window)) {
      } else {
        var a$$inline_784 = b$$inline_778;
        var b$$inline_785 = a$$inline_777;
        var c$$inline_786 = G$$1(a$$inline_784, 8);
        var d$$inline_787 = window.google_ad_section;
        var e$$inline_788 = window.google_ad_format;
        var f$$inline_789 = window.google_ad_slot;
        var v742 = c$$inline_786[d$$inline_787];
        if (v742) {
          b$$inline_785.prev_fmts = c$$inline_786[d$$inline_787];
        }
        var g$$inline_790 = G$$1(a$$inline_784, 9);
        var v743 = g$$inline_790[d$$inline_787];
        if (v743) {
          var v2441 = b$$inline_785;
          var v3633 = g$$inline_790[d$$inline_787];
          var v5149 = JAM.call(v3633.toLowerCase, v3633, [], JAM.policy.p3);
          v2441.prev_slotnames = v5149;
        }
        var v744;
        if (e$$inline_788) {
          var v2442;
          if (c$$inline_786[d$$inline_787]) {
            v2442 = c$$inline_786[d$$inline_787] + ("," + e$$inline_788);
          } else {
            v2442 = e$$inline_788;
          }
          v744 = JAM.set(c$$inline_786, d$$inline_787, v2442, JAM.policy.p2);
        } else {
          var v2443 = f$$inline_789;
          if (v2443) {
            var v3637;
            if (g$$inline_790[d$$inline_787]) {
              v3637 = g$$inline_790[d$$inline_787] + ("," + f$$inline_789);
            } else {
              v3637 = f$$inline_789;
            }
            v2443 = JAM.set(g$$inline_790, d$$inline_787, v3637, JAM.policy.p2);
          }
          v744 = v2443;
        }
        v744;
      }
      var v746 = a$$inline_777;
      var v5150 = G$$1(b$$inline_778, 7);
      v746.correlator = v5150;
      if (window.google_ad_channel) {
        c$$inline_783 = G$$1(b$$inline_778, 10);
        var d$$inline_791 = "";
        var v747 = window.google_ad_channel;
        var e$$inline_792 = JAM.call(v747.split, v747, [Ni], JAM.policy.p3);
        var f$$inline_793 = 0;
        var v749 = f$$inline_793 < e$$inline_792.length;
        for (;v749;) {
          var g$$inline_794 = e$$inline_792[f$$inline_793];
          var v748;
          if (c$$inline_783[g$$inline_794]) {
            v748 = d$$inline_791 = d$$inline_791 + (g$$inline_794 + "+");
          } else {
            v748 = JAM.set(c$$inline_783, g$$inline_794, !0, JAM.policy.p2);
          }
          v748;
          f$$inline_793 = f$$inline_793 + 1;
          v749 = f$$inline_793 < e$$inline_792.length;
        }
        a$$inline_777.pv_ch = d$$inline_791;
      }
      if (window.google_ad_host_channel) {
        var JSCompiler_inline_result$$inline_795;
        var b$$inline_796 = G$$1(b$$inline_778, 11);
        var v751 = window.google_ad_host_channel;
        var c$$inline_797 = JAM.call(v751.split, v751, ["|"], JAM.policy.p3);
        var d$$inline_798 = -1;
        var e$$inline_799 = [];
        var f$$inline_800 = 0;
        var v757 = f$$inline_800 < c$$inline_797.length;
        for (;v757;) {
          var v752 = c$$inline_797[f$$inline_800];
          var g$$inline_801 = JAM.call(v752.split, v752, [Ni], JAM.policy.p3);
          var v753 = b$$inline_796[f$$inline_800];
          if (!v753) {
            introspect(JAM.policy.p2) {
              b$$inline_796[f$$inline_800] = {};
            }
          }
          var h$$inline_802 = "";
          var k$$inline_803 = 0;
          var v755 = k$$inline_803 < g$$inline_801.length;
          for (;v755;) {
            var l$$inline_804 = g$$inline_801[k$$inline_803];
            var v754 = "" != l$$inline_804;
            if (v754) {
              var v2450;
              if (b$$inline_796[f$$inline_800][l$$inline_804]) {
                v2450 = h$$inline_802 = h$$inline_802 + ("+" + l$$inline_804);
              } else {
                v2450 = JAM.set(b$$inline_796[f$$inline_800], l$$inline_804, !0, JAM.policy.p2);
              }
              v2450;
            }
            k$$inline_803 = k$$inline_803 + 1;
            v755 = k$$inline_803 < g$$inline_801.length;
          }
          h$$inline_802 = JAM.call(h$$inline_802.slice, h$$inline_802, [1], JAM.policy.p3);
          introspect(JAM.policy.p2) {
            e$$inline_799[f$$inline_800] = h$$inline_802;
          }
          var v756 = "" != h$$inline_802;
          if (v756) {
            d$$inline_798 = f$$inline_800;
          }
          f$$inline_800 = f$$inline_800 + 1;
          v757 = f$$inline_800 < c$$inline_797.length;
        }
        c$$inline_797 = "";
        if (-1 < d$$inline_798) {
          f$$inline_800 = 0;
          var v758 = f$$inline_800 < d$$inline_798;
          for (;v758;) {
            c$$inline_797 = c$$inline_797 + (e$$inline_799[f$$inline_800] + "|");
            f$$inline_800 = f$$inline_800 + 1;
            v758 = f$$inline_800 < d$$inline_798;
          }
          c$$inline_797 = c$$inline_797 + e$$inline_799[d$$inline_798];
        }
        JSCompiler_inline_result$$inline_795 = c$$inline_797;
        b$$inline_778 = JSCompiler_inline_result$$inline_795;
        a$$inline_777.pv_h_ch = b$$inline_778;
      }
      if (Ea$$1) {
        a$$inline_777.jscb = 1;
      }
      if (Fa$$1) {
        a$$inline_777.jscd = 1;
      }
      a$$inline_777.frm = window.google_iframing;
      b$$inline_778 = D$$1().document;
      c$$inline_783 = "";
      try {
        c$$inline_783 = b$$inline_778.cookie;
      } catch (h$$inline_815) {
      }
      var a$$inline_805 = b$$inline_778.domain;
      var b$$inline_806 = c$$inline_783;
      var c$$inline_807 = ob$$1();
      var d$$inline_808 = window.screen;
      var e$$inline_809 = b$$inline_778.referrer;
      var v3642 = new Date;
      var f$$inline_810 = JAM.call(Math.round, Math, [JAM.call(v3642.getTime, v3642, [], JAM.policy.p3) / 1E3], JAM.policy.p3);
      var g$$inline_811 = window.google_analytics_domain_name;
      var v763;
      if ("undefined" == typeof g$$inline_811) {
        v763 = Fh("auto", a$$inline_805);
      } else {
        v763 = Fh(g$$inline_811, a$$inline_805);
      }
      a$$inline_805 = v763;
      var h$$inline_812 = -1 < JAM.call(b$$inline_806.indexOf, b$$inline_806, ["__utma=" + a$$inline_805 + "."], JAM.policy.p3);
      g$$inline_811 = -1 < JAM.call(b$$inline_806.indexOf, b$$inline_806, ["__utmb=" + a$$inline_805], JAM.policy.p3);
      var k$$inline_813 = mc("google_persistent_state");
      var JSCompiler_temp$$929;
      if (JSCompiler_temp$$929 = G$$1(k$$inline_813, 14)) {
      } else {
        var b$$inline_970 = {};
        JSCompiler_temp$$929 = oc(k$$inline_813, 14, b$$inline_970);
      }
      k$$inline_813 = JSCompiler_temp$$929;
      var l$$inline_814 = !1;
      if (h$$inline_812) {
        var v4975 = JAM.call(b$$inline_806.split, b$$inline_806, ["__utma=" + a$$inline_805 + "."], JAM.policy.p3)[1];
        var v4369 = JAM.call(v4975.split, v4975, [";"], JAM.policy.p3)[0];
        c$$inline_807 = JAM.call(v4369.split, v4369, ["."], JAM.policy.p3);
        var v4370;
        if (g$$inline_811) {
          v4370 = k$$inline_813.sid = c$$inline_807[3] + "";
        } else {
          var v4764 = k$$inline_813.sid;
          if (!v4764) {
            v4764 = k$$inline_813.sid = f$$inline_810 + "";
          }
          v4370 = v4764;
        }
        v4370;
        k$$inline_813.vid = c$$inline_807[0] + "." + c$$inline_807[1];
        k$$inline_813.from_cookie = !0;
      } else {
        var v767 = k$$inline_813.sid;
        if (!v767) {
          v767 = k$$inline_813.sid = f$$inline_810 + "";
        }
        var JSCompiler_temp_const$$933 = v767;
        var JSCompiler_temp$$934;
        if (JSCompiler_temp$$934 = k$$inline_813.vid) {
        } else {
          var JSCompiler_temp_const$$936 = l$$inline_814 = !0;
          var JSCompiler_temp_const$$935 = k$$inline_813;
          var JSCompiler_inline_result$$937;
          var a$$inline_972 = b$$inline_806;
          var b$$inline_973 = c$$inline_807;
          var c$$inline_974 = d$$inline_808;
          var d$$inline_975 = e$$inline_809;
          var JSCompiler_temp_const$$inline_976 = JAM.call(Math.round, Math, [2147483647 * JAM.call(Math.random, Math, [], JAM.policy.p3)], JAM.policy.p3);
          var JSCompiler_inline_result$$inline_977;
          var a$$inline_978 = a$$inline_972;
          var b$$inline_979 = b$$inline_973;
          var c$$inline_980 = c$$inline_974;
          var d$$inline_981 = d$$inline_975;
          var v2461 = Dh.appName;
          var v2462 = Dh.version;
          var v3647;
          if (Dh.language) {
            v3647 = Dh.language;
          } else {
            v3647 = Dh.browserLanguage;
          }
          var v2463 = v3647;
          var v2464 = Dh.platform;
          var v2465 = Dh.userAgent;
          var v3648;
          if (JAM.call(Dh.javaEnabled, Dh, [], JAM.policy.p3)) {
            v3648 = 1;
          } else {
            v3648 = 0;
          }
          var v769 = [v2461, v2462, v2463, v2464, v2465, v3648];
          var e$$inline_982 = JAM.call(v769.join, v769, [""], JAM.policy.p3);
          var v770;
          if (c$$inline_980) {
            v770 = e$$inline_982 = e$$inline_982 + (c$$inline_980.width + "x" + c$$inline_980.height + c$$inline_980.colorDepth);
          } else {
            var v2467 = window.java;
            if (v2467) {
              var v4767 = java.awt.Toolkit;
              var v4376 = JAM.call(v4767.getDefaultToolkit, v4767, [], JAM.policy.p3);
              c$$inline_980 = JAM.call(v4376.getScreenSize, v4376, [], JAM.policy.p3);
              v2467 = e$$inline_982 = e$$inline_982 + (c$$inline_980.screen.width + "x" + c$$inline_980.screen.height);
            }
            v770 = v2467;
          }
          v770;
          e$$inline_982 = e$$inline_982 + a$$inline_978;
          e$$inline_982 = e$$inline_982 + (d$$inline_981 || "");
          a$$inline_978 = e$$inline_982.length;
          var v771 = 0 < b$$inline_979;
          for (;v771;) {
            var v3650 = b$$inline_979;
            b$$inline_979 = b$$inline_979 - 1;
            var v3651 = a$$inline_978;
            a$$inline_978 = a$$inline_978 + 1;
            e$$inline_982 = e$$inline_982 + (v3650 ^ v3651);
            v771 = 0 < b$$inline_979;
          }
          JSCompiler_inline_result$$inline_977 = Jh(e$$inline_982);
          JSCompiler_inline_result$$937 = JSCompiler_temp_const$$inline_976 ^ JSCompiler_inline_result$$inline_977 & 2147483647;
          JSCompiler_temp_const$$936;
          JSCompiler_temp$$934 = JSCompiler_temp_const$$935.vid = JSCompiler_inline_result$$937 + "." + f$$inline_810;
        }
        JSCompiler_temp_const$$933;
        JSCompiler_temp$$934;
        k$$inline_813.from_cookie = !1;
      }
      if (k$$inline_813.cid) {
      } else {
        var JSCompiler_inline_result$$939;
        JSCompiler_inline_label_Hh_990: {
          var a$$inline_984 = b$$inline_806;
          var b$$inline_985 = 999;
          var c$$inline_986 = window.google_analytics_domain_name;
          if (c$$inline_986) {
            var v3652;
            if (0 == JAM.call(c$$inline_986.indexOf, c$$inline_986, ["."], JAM.policy.p3)) {
              v3652 = JAM.call(c$$inline_986.substr, c$$inline_986, [1], JAM.policy.p3);
            } else {
              v3652 = c$$inline_986;
            }
            c$$inline_986 = v3652;
            var v4378 = "" + c$$inline_986;
            b$$inline_985 = JAM.call(v4378.split, v4378, ["."], JAM.policy.p3).length;
          }
          var d$$inline_987;
          c$$inline_986 = 999;
          a$$inline_984 = JAM.call(a$$inline_984.split, a$$inline_984, [";"], JAM.policy.p3);
          var e$$inline_988 = 0;
          var v777 = e$$inline_988 < a$$inline_984.length;
          for (;v777;) {
            var v774 = JAM.call(Kh.exec, Kh, [a$$inline_984[e$$inline_988]], JAM.policy.p3);
            if (!v774) {
              v774 = JAM.call(Lh.exec, Lh, [a$$inline_984[e$$inline_988]], JAM.policy.p3);
            }
            var f$$inline_989 = v774;
            if (f$$inline_989) {
              if (f$$inline_989[1] == b$$inline_985) {
                JSCompiler_inline_result$$939 = f$$inline_989[2];
                break JSCompiler_inline_label_Hh_990;
              }
              var v776 = f$$inline_989[1] < c$$inline_986;
              if (v776) {
                c$$inline_986 = f$$inline_989[1];
                d$$inline_987 = f$$inline_989[2];
              }
            }
            e$$inline_988 = e$$inline_988 + 1;
            v777 = e$$inline_988 < a$$inline_984.length;
          }
          JSCompiler_inline_result$$939 = d$$inline_987;
        }
        b$$inline_806 = JSCompiler_inline_result$$939;
        var v2478;
        var v4379 = l$$inline_814 && b$$inline_806;
        if (v4379) {
          v4379 = -1 != JAM.call(b$$inline_806.search, b$$inline_806, [/^\d+\.\d+$/], JAM.policy.p3);
        }
        if (v4379) {
          v2478 = k$$inline_813.vid = b$$inline_806;
        } else {
          var v3654 = b$$inline_806 != k$$inline_813.vid;
          if (v3654) {
            v3654 = k$$inline_813.cid = b$$inline_806;
          }
          v2478 = v3654;
        }
        v2478;
      }
      k$$inline_813.dh = a$$inline_805;
      var v779 = k$$inline_813.hid;
      if (!v779) {
        var v2479 = k$$inline_813;
        var v5151 = JAM.call(Math.round, Math, [2147483647 * JAM.call(Math.random, Math, [], JAM.policy.p3)], JAM.policy.p3);
        v2479.hid = v5151;
      }
      b$$inline_778 = k$$inline_813;
      a$$inline_777.ga_vid = b$$inline_778.vid;
      a$$inline_777.ga_sid = b$$inline_778.sid;
      a$$inline_777.ga_hid = b$$inline_778.hid;
      a$$inline_777.ga_fc = b$$inline_778.from_cookie;
      a$$inline_777.ga_cid = b$$inline_778.cid;
      a$$inline_777.ga_wpids = window.google_analytics_uacct;
      var a$$inline_818 = b$$inline_704;
      var v780 = a$$inline_818;
      var v3657 = new Date;
      v780.u_tz = -JAM.call(v3657.getTimezoneOffset, v3657, [], JAM.policy.p3);
      var v781 = a$$inline_818;
      var v5152 = ob$$1();
      v781.u_his = v5152;
      var v782 = a$$inline_818;
      var v5153 = JAM.call(navigator.javaEnabled, navigator, [], JAM.policy.p3);
      v782.u_java = v5153;
      var v783 = window.screen;
      if (v783) {
        a$$inline_818.u_h = window.screen.height;
        a$$inline_818.u_w = window.screen.width;
        a$$inline_818.u_ah = window.screen.availHeight;
        a$$inline_818.u_aw = window.screen.availWidth;
        a$$inline_818.u_cd = window.screen.colorDepth;
      }
      var v784 = navigator.plugins;
      if (v784) {
        a$$inline_818.u_nplug = navigator.plugins.length;
      }
      var v785 = navigator.mimeTypes;
      if (v785) {
        a$$inline_818.u_nmime = navigator.mimeTypes.length;
      }
      if (a$$inline_703) {
        var JSCompiler_temp_const$$733;
        var a$$inline_820 = a$$inline_703;
        var b$$inline_821 = b$$inline_704;
        var JSCompiler_temp_const$$930 = b$$inline_821;
        var JSCompiler_inline_result$$931;
        var a$$inline_991 = a$$inline_820;
        var b$$inline_992 = cd(a$$inline_991);
        var c$$inline_993 = "";
        if (b$$inline_992.body.createTextRange) {
          var v786 = b$$inline_992.body;
          b$$inline_992 = JAM.call(v786.createTextRange, v786, [], JAM.policy.p3);
          JAM.call(b$$inline_992.moveToElementText, b$$inline_992, [a$$inline_991], JAM.policy.p3);
          try {
            c$$inline_993 = JAM.call(b$$inline_992.queryCommandValue, b$$inline_992, ["FontName"], JAM.policy.p3);
          } catch (d$$inline_1000) {
            c$$inline_993 = "";
          }
        }
        if (!c$$inline_993) {
          c$$inline_993 = R$$1(a$$inline_991, "fontFamily");
        }
        a$$inline_991 = JAM.call(c$$inline_993.split, c$$inline_993, [","], JAM.policy.p3);
        var v788 = 1 < a$$inline_991.length;
        if (v788) {
          c$$inline_993 = a$$inline_991[0];
        }
        var JSCompiler_inline_result$$inline_994;
        JSCompiler_inline_label_1001: {
          var a$$inline_995 = c$$inline_993;
          var b$$inline_996 = "\"'";
          var c$$inline_997 = b$$inline_996.length;
          var d$$inline_998 = 0;
          var v792 = d$$inline_998 < c$$inline_997;
          for (;v792;) {
            var v789;
            if (1 == c$$inline_997) {
              v789 = b$$inline_996;
            } else {
              v789 = JAM.call(b$$inline_996.charAt, b$$inline_996, [d$$inline_998], JAM.policy.p3);
            }
            var e$$inline_999 = v789;
            var v2488 = JAM.call(a$$inline_995.charAt, a$$inline_995, [0], JAM.policy.p3) == e$$inline_999;
            if (v2488) {
              v2488 = JAM.call(a$$inline_995.charAt, a$$inline_995, [a$$inline_995.length - 1], JAM.policy.p3) == e$$inline_999;
            }
            if (v2488) {
              JSCompiler_inline_result$$inline_994 = JAM.call(a$$inline_995.substring, a$$inline_995, [1, a$$inline_995.length - 1], JAM.policy.p3);
              break JSCompiler_inline_label_1001;
            }
            d$$inline_998 = d$$inline_998 + 1;
            v792 = d$$inline_998 < c$$inline_997;
          }
          JSCompiler_inline_result$$inline_994 = a$$inline_995;
        }
        JSCompiler_inline_result$$931 = JSCompiler_inline_result$$inline_994;
        var v793 = JSCompiler_temp_const$$930;
        var v5154 = JAM.call(JSCompiler_inline_result$$931.toLowerCase, JSCompiler_inline_result$$931, [], JAM.policy.p3);
        v793.dff = v5154;
        var v794 = b$$inline_821;
        var v5155 = Wd(a$$inline_820);
        v794.dfs = v5155;
        JSCompiler_temp_const$$733 = void 0;
        var JSCompiler_inline_result$$734;
        var a$$inline_823 = a$$inline_703;
        var b$$inline_824 = b$$inline_704;
        if ("html" == w$$6.google_ad_output) {
          var c$$inline_825 = D$$1();
          if (c$$inline_825.google_top_values) {
            var d$$inline_826;
            var a$$inline_1003 = c$$inline_825.google_top_values;
            var b$$inline_1004 = w$$6.google_ad_width;
            var c$$inline_1005 = w$$6.google_ad_height;
            var d$$inline_1006 = parseInt(a$$inline_1003[6], 10);
            var e$$inline_1007 = parseInt(a$$inline_1003[7], 10);
            var f$$inline_1008 = parseInt(a$$inline_1003[8], 10);
            a$$inline_1003 = parseInt(a$$inline_1003[9], 10);
            var v799;
            var v4983 = 0 < d$$inline_1006;
            if (v4983) {
              v4983 = 0 < e$$inline_1007;
            }
            var v4773 = v4983;
            if (v4773) {
              v4773 = 0 < f$$inline_1008;
            }
            var v4384 = v4773;
            if (v4384) {
              v4384 = 0 < a$$inline_1003;
            }
            var v3661 = v4384;
            if (v3661) {
              b$$inline_1004 = JAM.call(Math.abs, Math, [f$$inline_1008 - b$$inline_1004], JAM.policy.p3);
              c$$inline_1005 = JAM.call(Math.abs, Math, [a$$inline_1003 - c$$inline_1005], JAM.policy.p3);
              v3661 = 10 >= b$$inline_1004 + c$$inline_1005;
            }
            if (v3661) {
              v799 = new M$$1(d$$inline_1006, e$$inline_1007);
            } else {
              v799 = new M$$1(-12245933, -12245933);
            }
            d$$inline_826 = v799;
            var v800 = b$$inline_824;
            var v5156 = JAM.call(Math.round, Math, [d$$inline_826.x], JAM.policy.p3);
            v800.adx = v5156;
            var v801 = b$$inline_824;
            var v5157 = JAM.call(Math.round, Math, [d$$inline_826.y], JAM.policy.p3);
            v801.ady = v5157;
          }
          var v4385 = !b$$inline_824.adx;
          if (!v4385) {
            v4385 = -12245933 == b$$inline_824.adx;
          }
          var v3662 = v4385;
          if (!v3662) {
            v3662 = !b$$inline_824.ady;
          }
          var v2494 = v3662;
          if (!v2494) {
            v2494 = -12245933 == b$$inline_824.ady;
          }
          if (v2494) {
            try {
              var JSCompiler_inline_result$$926;
              var a$$inline_1010 = a$$inline_823;
              var b$$inline_1011 = window.top;
              var c$$inline_1012 = new M$$1(0, 0);
              var d$$inline_1013;
              var a$$inline_1014 = cd(a$$inline_1010);
              var v803;
              if (a$$inline_1014) {
                var v2495 = a$$inline_1014.parentWindow;
                if (!v2495) {
                  v2495 = a$$inline_1014.defaultView;
                }
                v803 = v2495;
              } else {
                v803 = window;
              }
              d$$inline_1013 = v803;
              var e$$inline_1015 = a$$inline_1010;
              var v4388 = d$$inline_1013;
              if (v4388) {
                v4388 = d$$inline_1013 != b$$inline_1011;
              }
              var v3666 = v4388;
              if (v3666) {
                v3666 = e$$inline_1015 = d$$inline_1013.frameElement;
              }
              var v2496 = v3666;
              if (v2496) {
                v2496 = d$$inline_1013 = d$$inline_1013.parent;
              }
              var v814 = v2496;
              do {
                var JSCompiler_temp$$inline_1016;
                if (d$$inline_1013 == b$$inline_1011) {
                  JSCompiler_temp$$inline_1016 = Cd(e$$inline_1015);
                } else {
                  var a$$inline_1017 = e$$inline_1015;
                  var b$$inline_1018 = void 0;
                  if (a$$inline_1017.getBoundingClientRect) {
                    b$$inline_1018 = Ad(a$$inline_1017);
                    b$$inline_1018 = new M$$1(b$$inline_1018.left, b$$inline_1018.top);
                  } else {
                    var v804 = dd(a$$inline_1017);
                    b$$inline_1018 = JAM.call(v804.Ja, v804, [], JAM.policy.p3);
                    var c$$inline_1019 = Cd(a$$inline_1017);
                    b$$inline_1018 = new M$$1(c$$inline_1019.x - b$$inline_1018.x, c$$inline_1019.y - b$$inline_1018.y);
                  }
                  var JSCompiler_temp$$inline_1020;
                  var v2503 = Oc;
                  if (v2503) {
                    v2503 = !Uc(12);
                  }
                  if (v2503) {
                    var JSCompiler_temp_const$$inline_1021 = b$$inline_1018;
                    var JSCompiler_inline_result$$inline_1022;
                    var a$$inline_1023 = a$$inline_1017;
                    var b$$inline_1024 = void 0;
                    var v808;
                    if (N$$1) {
                      v808 = b$$inline_1024 = "-ms-transform";
                    } else {
                      var v2504;
                      if (Pc) {
                        v2504 = b$$inline_1024 = "-webkit-transform";
                      } else {
                        var v3668;
                        if (Nc) {
                          v3668 = b$$inline_1024 = "-o-transform";
                        } else {
                          var v4389 = Oc;
                          if (v4389) {
                            v4389 = b$$inline_1024 = "-moz-transform";
                          }
                          v3668 = v4389;
                        }
                        v2504 = v3668;
                      }
                      v808 = v2504;
                    }
                    v808;
                    var c$$inline_1025 = void 0;
                    if (b$$inline_1024) {
                      c$$inline_1025 = R$$1(a$$inline_1023, b$$inline_1024);
                    }
                    if (!c$$inline_1025) {
                      c$$inline_1025 = R$$1(a$$inline_1023, "transform");
                    }
                    var v809;
                    if (c$$inline_1025) {
                      var v2506;
                      if (a$$inline_1023 = JAM.call(c$$inline_1025.match, c$$inline_1025, [Xd], JAM.policy.p3)) {
                        v2506 = new M$$1(parseFloat(a$$inline_1023[1]), parseFloat(a$$inline_1023[2]));
                      } else {
                        v2506 = new M$$1(0, 0);
                      }
                      v809 = v2506;
                    } else {
                      v809 = new M$$1(0, 0);
                    }
                    JSCompiler_inline_result$$inline_1022 = v809;
                    JSCompiler_temp$$inline_1020 = new M$$1(JSCompiler_temp_const$$inline_1021.x + JSCompiler_inline_result$$inline_1022.x, JSCompiler_temp_const$$inline_1021.y + JSCompiler_inline_result$$inline_1022.y);
                  } else {
                    JSCompiler_temp$$inline_1020 = b$$inline_1018;
                  }
                  JSCompiler_temp$$inline_1016 = JSCompiler_temp$$inline_1020;
                }
                var f$$inline_1026 = JSCompiler_temp$$inline_1016;
                c$$inline_1012.x = c$$inline_1012.x + f$$inline_1026.x;
                c$$inline_1012.y = c$$inline_1012.y + f$$inline_1026.y;
                var v4392 = d$$inline_1013;
                if (v4392) {
                  v4392 = d$$inline_1013 != b$$inline_1011;
                }
                var v3672 = v4392;
                if (v3672) {
                  v3672 = e$$inline_1015 = d$$inline_1013.frameElement;
                }
                var v2515 = v3672;
                if (v2515) {
                  v2515 = d$$inline_1013 = d$$inline_1013.parent;
                }
                v814 = v2515;
              } while (v814);
              JSCompiler_inline_result$$926 = c$$inline_1012;
              d$$inline_826 = JSCompiler_inline_result$$926;
              var v3673 = b$$inline_824;
              var v5158 = JAM.call(Math.round, Math, [d$$inline_826.x], JAM.policy.p3);
              v3673.adx = v5158;
              var v2516 = b$$inline_824;
              var v5159 = JAM.call(Math.round, Math, [d$$inline_826.y], JAM.policy.p3);
              v2516.ady = v5159;
            } catch (e$$inline_827) {
              b$$inline_824.adx = -12245933;
              b$$inline_824.ady = -12245933;
            }
          }
        }
        JSCompiler_inline_result$$734 = void 0;
      }
      var a$$inline_829 = b$$inline_704;
      var b$$inline_830 = D$$1();
      var c$$inline_831 = !1;
      var d$$inline_832 = de(c$$inline_831, b$$inline_830.top);
      if (d$$inline_832) {
        var JSCompiler_temp$$inline_833;
        var v2517 = -12245933 == d$$inline_832.width;
        if (v2517) {
          v2517 = b$$inline_830.google_top_values;
        }
        if (JSCompiler_temp$$inline_833 = v2517) {
          var JSCompiler_inline_result$$inline_834;
          var a$$inline_835 = b$$inline_830.google_top_values;
          var b$$inline_836 = parseInt(a$$inline_835[10], 10);
          a$$inline_835 = parseInt(a$$inline_835[11], 10);
          var v820;
          var v3676 = 0 < b$$inline_836;
          if (v3676) {
            v3676 = 0 < a$$inline_835;
          }
          if (v3676) {
            v820 = new u$$2(b$$inline_836, a$$inline_835);
          } else {
            v820 = new u$$2(-12245933, -12245933);
          }
          JSCompiler_inline_result$$inline_834 = v820;
          JSCompiler_temp$$inline_833 = d$$inline_832 = JSCompiler_inline_result$$inline_834;
        }
        JSCompiler_temp$$inline_833;
        a$$inline_829.biw = d$$inline_832.width;
        a$$inline_829.bih = d$$inline_832.height;
      }
      var v2519 = b$$inline_830.top != b$$inline_830;
      if (v2519) {
        v2519 = b$$inline_830 = de(c$$inline_831, b$$inline_830);
      }
      var v822 = v2519;
      if (v822) {
        a$$inline_829.isw = b$$inline_830.width;
        a$$inline_829.ish = b$$inline_830.height;
      }
      var a$$inline_838 = b$$inline_704;
      var b$$inline_839;
      JSCompiler_inline_label_843: {
        var a$$inline_840 = D$$1();
        if (a$$inline_840 == a$$inline_840.top) {
          b$$inline_839 = 0;
          break JSCompiler_inline_label_843;
        }
        var b$$inline_841 = [];
        JAM.call(b$$inline_841.push, b$$inline_841, [a$$inline_840.document.URL], JAM.policy.p3);
        var v825 = a$$inline_840.name;
        if (v825) {
          JAM.call(b$$inline_841.push, b$$inline_841, [a$$inline_840.name], JAM.policy.p3);
        }
        var c$$inline_842 = !0;
        a$$inline_840 = de(!c$$inline_842, a$$inline_840);
        var v2523 = a$$inline_840.width;
        JAM.call(b$$inline_841.push, b$$inline_841, [JAM.call(v2523.toString, v2523, [], JAM.policy.p3)], JAM.policy.p3);
        var v2524 = a$$inline_840.height;
        JAM.call(b$$inline_841.push, b$$inline_841, [JAM.call(v2524.toString, v2524, [], JAM.policy.p3)], JAM.policy.p3);
        b$$inline_839 = Ab(JAM.call(b$$inline_841.join, b$$inline_841, [""], JAM.policy.p3));
      }
      var v830 = 0 != b$$inline_839;
      if (v830) {
        var v2525 = a$$inline_838;
        var v5160 = JAM.call(b$$inline_839.toString, b$$inline_839, [], JAM.policy.p3);
        v2525.ifk = v5160;
      }
      var a$$inline_845 = b$$inline_704;
      var b$$inline_846 = J$$1();
      var v2526 = n$$2(window.google_eids);
      if (v2526) {
        v2526 = 0 !== window.google_eids.length;
      }
      if (v2526) {
        ze = ze | 64;
        var c$$inline_847 = 0;
        var v832 = c$$inline_847 < window.google_eids.length;
        for (;v832;) {
          var v831 = p$$1(window.google_eids[c$$inline_847]);
          if (v831) {
            JAM.call(b$$inline_846.bb, b$$inline_846, [window.google_eids[c$$inline_847]], JAM.policy.p3);
          }
          c$$inline_847 = c$$inline_847 + 1;
          v832 = c$$inline_847 < window.google_eids.length;
        }
      }
      var v834 = a$$inline_845;
      var v5161 = JAM.call(b$$inline_846.Ka, b$$inline_846, [], JAM.policy.p3);
      v834.eid = v5161;
      var a$$inline_849 = b$$inline_704;
      var b$$inline_850 = me();
      var v835 = b$$inline_850 = JAM.call(b$$inline_850.getOseId, b$$inline_850, [], JAM.policy.p3);
      if (v835) {
        a$$inline_849.oid = b$$inline_850;
      }
      var a$$inline_852 = b$$inline_704;
      var b$$inline_853 = D$$1();
      a$$inline_852.ref = window.google_referrer_url;
      a$$inline_852.loc = window.google_page_location;
      var c$$inline_854 = hc();
      c$$inline_854 = cf(c$$inline_854);
      var d$$inline_855 = K$$1;
      var e$$inline_856 = 4;
      var f$$inline_857 = J$$1();
      var g$$inline_858 = d$$inline_855.TOP_URL_REPLACES_MISSING_URL.EXPERIMENT;
      if (JAM.call(f$$inline_857.m, f$$inline_857, [e$$inline_856], JAM.policy.p3) == g$$inline_858) {
        var b$$inline_859 = c$$inline_854.url;
        var v4395 = a$$inline_852.url;
        if (!v4395) {
          v4395 = a$$inline_852.ref;
        }
        var v3684 = v4395;
        if (!v3684) {
          v3684 = a$$inline_852.loc;
        }
        var v2532 = v3684;
        if (!v2532) {
          v2532 = !b$$inline_859;
        }
        var v837 = v2532;
        if (!v837) {
          a$$inline_852.url = b$$inline_859;
        }
      }
      d$$inline_855 = d$$inline_855.ALWAYS_USE_DELAYED_IMPRESSIONS.EXPERIMENT;
      if (JAM.call(f$$inline_857.m, f$$inline_857, [e$$inline_856], JAM.policy.p3) == d$$inline_855) {
        a$$inline_852.unviewed_position_start = "1";
      }
      var v841 = a$$inline_852.loc;
      if (!v841) {
        v841 = a$$inline_852.url;
      }
      e$$inline_856 = v841;
      var v842 = !Ye();
      if (v842) {
        v842 = c$$inline_854.url == a$$inline_852.ref;
      }
      f$$inline_857 = v842;
      var v2539 = f$$inline_857;
      if (!v2539) {
        v2539 = c$$inline_854.url == e$$inline_856;
      }
      var v843 = v2539;
      if (!v843) {
        a$$inline_852.top = c$$inline_854.url;
      }
      var v844 = window.google_async_rrc;
      if (v844) {
        a$$inline_852.rr = window.google_async_rrc;
      }
      a$$inline_852.rs = 0;
      var v845 = c$$inline_854 = b$$inline_853.google_top_js_status;
      if (v845) {
        a$$inline_852.jp = c$$inline_854;
      }
      if (Xi) {
        a$$inline_852.jpd = Xi;
      }
      if (c$$inline_854 = Mh(b$$inline_853)) {
        e$$inline_856 = new Uh(c$$inline_854);
        var v3688 = JAM.call(e$$inline_856.yb, e$$inline_856, [], JAM.policy.p3);
        if (v3688) {
          var v4397 = a$$inline_852;
          var v5162 = JAM.call(e$$inline_856.Ob, e$$inline_856, [], JAM.policy.p3);
          v4397.dss = v5162;
        }
        var v2541 = JAM.call(c$$inline_854.Oa, c$$inline_854, [], JAM.policy.p3);
        if (v2541) {
          var v3689 = a$$inline_852;
          var v5163 = JAM.call(c$$inline_854.Oa, c$$inline_854, [], JAM.policy.p3);
          v3689.dsd = v5163;
        }
      }
      if (ch(window, b$$inline_853)) {
        var a$$inline_860 = b$$inline_853;
        var c$$inline_861;
        JSCompiler_inline_label_882: {
          var a$$inline_862 = a$$inline_860;
          var b$$inline_863 = window.google_ad_client;
          var c$$inline_864 = a$$inline_862.location.hash;
          var v2542 = !c$$inline_864;
          if (!v2542) {
            v2542 = !c$$inline_864.indexOf;
          }
          if (v2542) {
            c$$inline_861 = !1;
            break JSCompiler_inline_label_882;
          }
          var d$$inline_865;
          var v849 = -1 != JAM.call(c$$inline_864.indexOf, c$$inline_864, ["google_anchor_debug"], JAM.policy.p3);
          if (v849) {
            d$$inline_865 = Yg(1);
          }
          if (!d$$inline_865) {
            c$$inline_861 = !1;
            break JSCompiler_inline_label_882;
          }
          JAM.call(d$$inline_865.ja, d$$inline_865, [a$$inline_862, b$$inline_863], JAM.policy.p3);
          c$$inline_861 = !0;
        }
        if (!c$$inline_861) {
          new dh(a$$inline_860);
        }
      }
      c$$inline_854 = rg(b$$inline_853);
      var v852 = c$$inline_854.wasReactiveAdConfigHandlerRegistered;
      if (v852) {
        var v2545 = a$$inline_852;
        var v5164 = ah(window, b$$inline_853);
        v2545.fc = v5164;
      }
      if (ub(w$$6)) {
      } else {
        var JSCompiler_inline_result$$inline_866;
        var a$$inline_867 = "";
        if (document.documentMode) {
          var b$$inline_868 = JAM.call(document.createElement, document, ["IFRAME"], JAM.policy.p3);
          b$$inline_868.frameBorder = 0;
          b$$inline_868.style.height = 0;
          b$$inline_868.style.width = 0;
          b$$inline_868.style.position = "absolute";
          if (document.body) {
            var v856 = document.body;
            JAM.call(v856.appendChild, v856, [b$$inline_868], JAM.policy.p3);
            try {
              var c$$inline_869 = b$$inline_868.contentWindow.document;
              JAM.call(c$$inline_869.open, c$$inline_869, [], JAM.policy.p3);
              JAM.call(c$$inline_869.write, c$$inline_869, ["<!DOCTYPE html>"], JAM.policy.p3);
              JAM.call(c$$inline_869.close, c$$inline_869, [], JAM.policy.p3);
              a$$inline_867 = a$$inline_867 + c$$inline_869.documentMode;
            } catch (d$$inline_878) {
            }
            var v858 = document.body;
            JAM.call(v858.removeChild, v858, [b$$inline_868], JAM.policy.p3);
          }
        }
        JSCompiler_inline_result$$inline_866 = a$$inline_867;
        a$$inline_852.docm = JSCompiler_inline_result$$inline_866;
      }
      c$$inline_854 = K$$1.SS;
      var v862 = J$$1();
      e$$inline_856 = JAM.call(v862.m, v862, [14], JAM.policy.p3);
      var v863 = e$$inline_856 == c$$inline_854.COUNT_AD_FRAMES_ON_PAGE_EXPERIMENT;
      if (v863) {
        var v2548 = a$$inline_852;
        var v5165 = JAM.call(T$$1.frameCountsWithDelayedPingback, T$$1, [b$$inline_853, a$$inline_852.adk, a$$inline_852.correlator, a$$inline_852.frm], JAM.policy.p3);
        v2548.frmn = v5165;
      }
      if (e$$inline_856 == c$$inline_854.BROWSER_DIMENSIONS_EXPERIMENT) {
        var JSCompiler_inline_result$$inline_870;
        try {
          var b$$inline_871 = b$$inline_853.screenX;
          var c$$inline_872 = b$$inline_853.screenY;
        } catch (d$$inline_879) {
        }
        try {
          var e$$inline_873 = b$$inline_853.outerWidth;
          var f$$inline_874 = b$$inline_853.outerHeight;
        } catch (g$$inline_880) {
        }
        try {
          var h$$inline_875 = b$$inline_853.innerWidth;
          var k$$inline_876 = b$$inline_853.innerHeight;
        } catch (l$$inline_881) {
        }
        var v864 = b$$inline_853.screenLeft;
        var v865 = b$$inline_853.screenTop;
        var v2550;
        if (b$$inline_853.screen) {
          v2550 = b$$inline_853.screen.availWidth;
        } else {
          v2550 = void 0;
        }
        var v866 = v2550;
        var v2551;
        if (b$$inline_853.screen) {
          v2551 = b$$inline_853.screen.availTop;
        } else {
          v2551 = void 0;
        }
        JSCompiler_inline_result$$inline_870 = [v864, v865, b$$inline_871, c$$inline_872, v866, v2551, e$$inline_873, f$$inline_874, h$$inline_875, k$$inline_876];
        b$$inline_853 = JSCompiler_inline_result$$inline_870;
        var v2552 = a$$inline_852;
        var v5166 = JAM.call(b$$inline_853.join, b$$inline_853, [","], JAM.policy.p3);
        v2552.brdim = v5166;
      }
      var a$$inline_877 = 0;
      var v869 = void 0 === w$$6.postMessage;
      if (v869) {
        a$$inline_877 = a$$inline_877 | 1;
      }
      b$$inline_853 = a$$inline_877;
      var v870 = 0 < b$$inline_853;
      if (v870) {
        a$$inline_852.osd = b$$inline_853;
      }
      var v871 = a$$inline_852;
      var v5167 = Xe(document);
      v871.vis = v5167;
      b$$inline_704.fu = ze;
      a$$inline_500 = b$$inline_704;
      var c$$inline_502 = L$$1(b$$inline_501, "/pagead/ads?");
      var JSCompiler_inline_result$$575;
      var v872 = J$$1();
      var a$$inline_706 = JAM.call(v872.m, v872, [19], JAM.policy.p3);
      var b$$inline_707 = K$$1.PRERENDERING_DELAYED_IMPRESSION;
      var v873 = a$$inline_706 == b$$inline_707.EXPERIMENT;
      if (v873) {
        v873 = "html" == window.google_ad_output;
      }
      JSCompiler_inline_result$$575 = v873;
      if (JSCompiler_inline_result$$575) {
        a$$inline_500.unviewed_position_start = "1";
      }
      var v4398 = a$$inline_500.unviewed_position_start;
      if (!v4398) {
        var v4779 = w$$6.google_ad_output;
        if (v4779) {
          v4779 = "html" !== w$$6.google_ad_output;
        }
        v4398 = v4779;
      }
      var v3699 = v4398;
      if (!v3699) {
        v3699 = 3 != Xe(v$$1);
      }
      var v2557 = v3699;
      if (!v2557) {
        v2557 = !Ia$$1;
      }
      var v874 = v2557;
      if (!v874) {
        zi = !0;
        yi = c$$inline_502;
        c$$inline_502 = L$$1(b$$inline_501, "/pagead/blank.gif#?");
      }
      var v875 = window;
      var v5168 = ki(a$$inline_500, c$$inline_502 + "");
      v875.google_ad_url = v5168;
      c$$289 = !0;
    }
    var v2560 = a$$557;
    if (v2560) {
      v2560 = a$$557.id == b$$428;
    }
    var v876 = v2560;
    if (v876) {
      qd(a$$557);
    }
    if (c$$289) {
      var JSCompiler_inline_result$$6;
      var a$$inline_504 = window;
      var c$$inline_506 = window.google_ad_url;
      if (!B$$2) {
        wb(a$$inline_504);
      }
      var e$$inline_508 = yb(a$$inline_504);
      c$$inline_506 = ki({ifi:e$$inline_508}, c$$inline_506);
      var v878;
      if (1991 < c$$inline_506.length) {
        v878 = JAM.call(c$$inline_506.substring, c$$inline_506, [0, 1983], JAM.policy.p3) + "&trunc=1";
      } else {
        v878 = c$$inline_506;
      }
      c$$inline_506 = v878;
      c$$inline_506 = JAM.call(c$$inline_506.replace, c$$inline_506, [/%\w?$/, ""], JAM.policy.p3);
      var f$$inline_509 = "script";
      var g$$inline_510 = Lb(e$$inline_508);
      H$$1();
      var v3703 = "js" != a$$inline_504.google_ad_output;
      if (v3703) {
        v3703 = "json_html" != a$$inline_504.google_ad_output;
      }
      var v2564 = v3703;
      if (!v2564) {
        var v3704 = !a$$inline_504.google_ad_request_done;
        if (v3704) {
          v3704 = !a$$inline_504.google_radlink_request_done;
        }
        v2564 = v3704;
      }
      if (v2564) {
        if ("html" == a$$inline_504.google_ad_output) {
          var a$$inline_711 = a$$inline_504;
          var c$$inline_713 = c$$inline_506;
          var d$$inline_714 = e$$inline_508;
          var e$$inline_715 = ci;
          var f$$inline_716 = void 0;
          var v879;
          if (e$$inline_715) {
            v879 = JAM.call(c$$inline_713.replace, c$$inline_713, [/&ea=[^&]*/, ""], JAM.policy.p3) + "&ea=0";
          } else {
            v879 = c$$inline_713;
          }
          var g$$inline_717 = v879;
          var h$$inline_718 = Lb(d$$inline_714);
          var k$$inline_719 = {id:h$$inline_718, name:h$$inline_718};
          Ff(k$$inline_719, a$$inline_711.google_ad_width, a$$inline_711.google_ad_height, !1, mi(g$$inline_717));
          var l$$inline_720 = Cf(k$$inline_719);
          var v2567 = a$$inline_711.google_container_id;
          if (!v2567) {
            v2567 = f$$inline_716;
          }
          var v884 = v2567;
          if (!v884) {
            v884 = null;
          }
          var z$$inline_721 = v884;
          f$$inline_716 = a$$inline_711.google_async_iframe_id;
          var C$$inline_722 = a$$inline_711.google_container_id;
          var v885 = e$$inline_715;
          if (v885) {
            var v2569 = zf();
            if (!v2569) {
              v2569 = gi();
            }
            v885 = v2569;
          }
          e$$inline_715 = v885;
          var I$$inline_723 = "";
          if (e$$inline_715) {
            if (gi()) {
              var JSCompiler_inline_result$$737;
              var a$$inline_884 = 10;
              var v886 = void 0;
              if (!v886) {
                v886 = th;
              }
              var c$$inline_886 = v886;
              var d$$inline_887 = c$$inline_886.length;
              var e$$inline_888 = "";
              var v2571 = a$$inline_884;
              a$$inline_884 = a$$inline_884 - 1;
              var v887 = 0 < v2571;
              for (;v887;) {
                e$$inline_888 = e$$inline_888 + JAM.call(c$$inline_886.charAt, c$$inline_886, [JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p3) * d$$inline_887], JAM.policy.p3)], JAM.policy.p3);
                var v2574 = a$$inline_884;
                a$$inline_884 = a$$inline_884 - 1;
                v887 = 0 < v2574;
              }
              JSCompiler_inline_result$$737 = e$$inline_888;
              var JSCompiler_temp_const$$747 = I$$inline_723 = JSCompiler_inline_result$$737;
              var JSCompiler_temp_const$$746 = c$$inline_713;
              var JSCompiler_temp_const$$745 = I$$inline_723;
              var JSCompiler_inline_result$$748;
              var a$$inline_890 = v$$1.URL;
              var v888 = !!a$$inline_890;
              if (v888) {
                var v2576 = 0 < JAM.call(a$$inline_890.indexOf, a$$inline_890, ["?google_debug"], JAM.policy.p3);
                if (!v2576) {
                  v2576 = 0 < JAM.call(a$$inline_890.indexOf, a$$inline_890, ["&google_debug"], JAM.policy.p3);
                }
                v888 = v2576;
              }
              JSCompiler_inline_result$$748 = v888;
              JSCompiler_temp_const$$747;
              c$$inline_713 = Zd(JSCompiler_temp_const$$746, JSCompiler_temp_const$$745, JSCompiler_inline_result$$748);
            }
          } else {
            c$$inline_713 = g$$inline_717;
          }
          if (Zg(a$$inline_711)) {
            var a$$inline_892 = a$$inline_711;
            var c$$inline_894 = c$$inline_713;
            var d$$inline_895 = k$$inline_719;
            var e$$inline_896 = f$$inline_716;
            var f$$inline_897 = D$$1();
            var JSCompiler_inline_result$$inline_898;
            JSCompiler_inline_label_908: {
              var a$$inline_899 = f$$inline_897;
              var b$$inline_900 = a$$inline_892;
              var c$$inline_901 = b$$inline_900.google_reactive_ad_format;
              if (!Ec(lg, c$$inline_901)) {
                JSCompiler_inline_result$$inline_898 = !1;
                break JSCompiler_inline_label_908;
              }
              var v891 = Ug[c$$inline_901];
              if (!v891) {
                v891 = null;
              }
              c$$inline_901 = v891;
              var JSCompiler_inline_result$$inline_902;
              JSCompiler_inline_label_909: {
                var a$$inline_903 = a$$inline_899;
                var b$$inline_904 = b$$inline_900;
                switch(c$$inline_901) {
                  case 1:
                    var JSCompiler_temp$$940;
                    if (JSCompiler_temp$$940 = Hg(a$$inline_903)) {
                      rg(a$$inline_903);
                      JSCompiler_temp$$940 = !0;
                    }
                    JSCompiler_inline_result$$inline_902 = JSCompiler_temp$$940;
                    break JSCompiler_inline_label_909;
                  case 2:
                    var a$$inline_1030 = a$$inline_903;
                    var JSCompiler_temp$$1033;
                    if (JSCompiler_temp$$1033 = Rg(a$$inline_1030, b$$inline_904)) {
                      var a$$inline_1034 = a$$inline_1030;
                      a$$inline_1034 = rg(a$$inline_1034);
                      JSCompiler_temp$$1033 = !!a$$inline_1034.wasReactiveAdConfigReceived[2];
                    }
                    JSCompiler_inline_result$$inline_902 = JSCompiler_temp$$1033;
                    break JSCompiler_inline_label_909;
                }
                JSCompiler_inline_result$$inline_902 = !1;
              }
              if (!JSCompiler_inline_result$$inline_902) {
                JSCompiler_inline_result$$inline_898 = !1;
                break JSCompiler_inline_label_908;
              }
              var d$$inline_905 = rg(a$$inline_899);
              var e$$inline_906 = d$$inline_905.wasReactiveAdCreated[c$$inline_901];
              JAM.set(d$$inline_905.wasReactiveAdCreated, c$$inline_901, !0, JAM.policy.p2);
              JSCompiler_inline_result$$inline_898 = !e$$inline_906;
            }
            if (JSCompiler_inline_result$$inline_898) {
              f$$inline_897 = Zg(a$$inline_892);
              var g$$inline_907 = {};
              g$$inline_907.fa = f$$inline_897;
              c$$inline_894 = ki(g$$inline_907, c$$inline_894);
              var v898 = d$$inline_895;
              var v5169 = mi(c$$inline_894);
              v898.src = v5169;
              c$$inline_894 = Bf(document, d$$inline_895);
              var v899 = document.body;
              JAM.call(v899.appendChild, v899, [c$$inline_894], JAM.policy.p3);
              qh(a$$inline_892, e$$inline_896, c$$inline_894, D$$1());
            }
          } else {
            if (hi(a$$inline_711)) {
              g$$inline_717 = ga$$1(qi, a$$inline_711, document, e$$inline_715, c$$inline_713, h$$inline_718, k$$inline_719, a$$inline_711.google_ad_width, a$$inline_711.google_ad_height, z$$inline_721, f$$inline_716, C$$inline_722);
              g$$inline_717 = Mb(g$$inline_717);
              ni(a$$inline_711, c$$inline_713, g$$inline_717);
            } else {
              if ("S" == a$$inline_711.google_ad_handling_mode) {
                var a$$inline_911 = a$$inline_711;
                var b$$inline_912 = c$$inline_713;
                var c$$inline_913 = ce(b$$inline_912, "w");
                var d$$inline_914 = ce(b$$inline_912, "h");
                var e$$inline_915 = ce(b$$inline_912, "ifi");
                e$$inline_915 = Lb(e$$inline_915);
                e$$inline_915 = {id:e$$inline_915, name:e$$inline_915};
                var f$$inline_916 = "U-" + b$$inline_912;
                Ff(e$$inline_915, c$$inline_913, d$$inline_914, !1, Df(f$$inline_916));
                var v903 = a$$inline_911.document;
                JAM.call(v903.write, v903, [Cf(e$$inline_915)], JAM.policy.p3);
              } else {
                oi(a$$inline_711, document, e$$inline_715, c$$inline_713, h$$inline_718, k$$inline_719, a$$inline_711.google_ad_width, a$$inline_711.google_ad_height, z$$inline_721, f$$inline_716, C$$inline_722);
              }
            }
          }
          var v2581 = e$$inline_715;
          if (v2581) {
            v2581 = gi();
          }
          var v910 = v2581;
          if (v910) {
            var v3715 = zf();
            if (!v3715) {
              JAM.call(setTimeout, null, [xe("ac::write_ee", ei, xc), 0]);
            }
            var v3716 = w$$6.google_eas_queue;
            var v4408 = a$$inline_711.google_ad_width;
            var v4409 = a$$inline_711.google_ad_height;
            var v4410 = D$$1();
            var v4782 = f$$inline_716;
            if (!v4782) {
              v4782 = void 0;
            }
            JAM.call(v3716.push, v3716, [Yd(h$$inline_718, c$$inline_713, v4408, v4409, I$$inline_723, v4410, v4782, "google_expandable_ad_slot" + d$$inline_714)], JAM.policy.p3);
          }
          if (B$$2) {
            var a$$inline_918 = a$$inline_711.google_async_iframe_id;
            var v3718 = ["<!DOCTYPE html><html><body>", l$$inline_720, "</body></html>"];
            var c$$inline_920 = "javascript:" + ab$$1(JAM.call(v3718.join, v3718, [""], JAM.policy.p3));
            var d$$inline_921 = D$$1();
            var v912 = new Me(d$$inline_921);
            JAM.call(v912.set, v912, [a$$inline_918, c$$inline_920], JAM.policy.p3);
          }
          a$$inline_711 = JAM.call(document.getElementById, document, [h$$inline_718], JAM.policy.p3);
          var v913 = zi && a$$inline_711;
          if (v913) {
            Ai(a$$inline_711, document);
          }
        }
      } else {
        JAM.call(document.write, document, ["<" + f$$inline_509 + ' language="JavaScript1.1" src=' + ji(mi(c$$inline_506)) + "></" + f$$inline_509 + ">"], JAM.policy.p3);
      }
      sc = ga$$1(wi, g$$inline_510, c$$inline_506, a$$inline_504.google_ad_output, a$$inline_504.google_ad_width, a$$inline_504.google_ad_height);
      JSCompiler_inline_result$$6 = c$$inline_506;
      var JSCompiler_temp_const$$9 = JSCompiler_inline_result$$6;
      var JSCompiler_inline_result$$10;
      Bh(window);
      JSCompiler_inline_result$$10 = void 0;
      JSCompiler_temp_const$$9;
      var JSCompiler_temp_const$$32 = JSCompiler_inline_result$$10;
      var JSCompiler_temp$$33;
      var v2584 = a$$557 = bg;
      if (v2584) {
        v2584 = !JAM.call(a$$557.Ta, a$$557, [], JAM.policy.p3);
      }
      if (JSCompiler_temp$$33 = v2584) {
      } else {
        if (sc) {
          JAM.call(sc, null, [], JAM.policy.p3);
        }
        JSCompiler_temp$$33 = void 0;
      }
    } else {
      if (B$$2) {
        uf();
        Wb(window);
      }
    }
    return;
  }
  function Vi() {
    var a$$556 = w$$6;
    var v2585 = "html" != a$$556.google_ad_output;
    if (!v2585) {
      v2585 = ub(a$$556);
    }
    var v921 = v2585;
    if (!v921) {
      var v2586 = J$$1();
      JAM.call(v2586.k, v2586, [[K$$1.SEND_LOAD_TIME_PINGBACKS.EXPERIMENT], ra$$1, 16], JAM.policy.p3);
    }
    return;
  }
  function Ai(a$$541, b$$413) {
    function v26() {
      xi(yi, a$$541);
      A$$1(v$$1, "webkitvisibilitychange", c$$278);
      return;
    }
    if (3 != Xe(b$$413)) {
      xi(yi, a$$541);
    } else {
      var c$$278 = v26;
      y$$31(b$$413, "webkitvisibilitychange", c$$278);
    }
    zi = !1;
    return;
  }
  function wi(a$$540, b$$412, c$$277, d$$169, e$$100) {
    a$$540 = JAM.call(document.getElementById, document, [a$$540], JAM.policy.p3);
    var a$$inline_442 = b$$412;
    var b$$inline_443 = a$$540;
    var c$$inline_444 = c$$277;
    var d$$inline_445 = d$$169;
    var e$$inline_446 = e$$100;
    var f$$inline_447 = me();
    var v923 = JAM.call(f$$inline_447.getOseId, f$$inline_447, [], JAM.policy.p3);
    if (v923) {
      JAM.call(f$$inline_447.registerAdBlock, f$$inline_447, [a$$inline_442, 1, String(c$$inline_444 || ""), b$$inline_443, d$$inline_445, e$$inline_446], JAM.policy.p3);
    }
    if (B$$2) {
      uf();
      Wb(window);
    }
    return;
  }
  function oi(a$$537, b$$409, c$$274, d$$166, e$$97, f$$56, g$$34, h$$26, k$$13, l$$15, z$$8) {
    var v2591 = !c$$274;
    if (!v2591) {
      v2591 = gi();
    }
    if (v2591) {
      var v2592 = f$$56;
      var v5170 = mi(d$$166);
      v2592.src = v5170;
      var JSCompiler_temp_const$$64 = a$$537 = Cf(f$$56);
      var JSCompiler_temp$$65;
      if (z$$8) {
        var a$$inline_432 = z$$8;
        var c$$inline_434 = a$$537;
        var v4415 = a$$inline_432;
        if (v4415) {
          v4415 = a$$inline_432 = JAM.call(b$$409.getElementById, b$$409, [a$$inline_432], JAM.policy.p3);
        }
        var v3726 = v4415;
        if (v3726) {
          v3726 = c$$inline_434;
        }
        var v2593 = v3726;
        if (v2593) {
          v2593 = "" != c$$inline_434.length;
        }
        var v924 = v2593;
        if (v924) {
          a$$inline_432.style.visibility = "visible";
          JAM.set(a$$inline_432, "innerHTML", c$$inline_434);
        }
        JSCompiler_temp$$65 = void 0;
      } else {
        JSCompiler_temp$$65 = JAM.call(b$$409.write, b$$409, [a$$537], JAM.policy.p3);
      }
    } else {
      b$$409 = yb(a$$537);
      var v2594 = a$$537;
      var v2595 = "google_expandable_ad_slot" + b$$409;
      var v3729 = mi(d$$166);
      var v4416 = k$$13;
      if (!v4416) {
        v4416 = void 0;
      }
      var v3730 = v4416;
      var v3731 = D$$1();
      var v4417 = l$$15;
      if (!v4417) {
        v4417 = void 0;
      }
      var v5171 = JAM.call(ExpandableAdSlotFactory.createIframe, ExpandableAdSlotFactory, [e$$97, v3729, g$$34, h$$26, v3730, v3731, v4417], JAM.policy.p3);
      JAM.set(v2594, v2595, v5171, JAM.policy.p2);
    }
    return;
  }
  function qi(a$$536, b$$408, c$$273, d$$165, e$$96, f$$55, g$$33, h$$25, k$$12, l$$14, z$$7, C$$4, I$$2, xb$$1) {
    var a$$inline_427 = d$$165;
    var b$$inline_428 = C$$4;
    var c$$inline_429 = I$$2;
    a$$inline_427 = be(a$$inline_427, "pfi", b$$inline_428, void 0, !0);
    if (c$$inline_429) {
      var v4418;
      if (b$$inline_428 = ce(a$$inline_427, "eid")) {
        v4418 = c$$inline_429 + "%2C" + b$$inline_428;
      } else {
        v4418 = c$$inline_429;
      }
      b$$inline_428 = v4418;
      a$$inline_427 = be(a$$inline_427, "eid", b$$inline_428);
      var v3733 = 453848236 == c$$inline_429;
      if (v3733) {
        a$$inline_427 = be(a$$inline_427, "unviewed_position_start", 1, void 0, !0);
      }
    }
    d$$165 = a$$inline_427;
    var v2596 = 453848234 == I$$2;
    if (!v2596) {
      v2596 = 453848236 == I$$2;
    }
    if (v2596) {
      d$$165 = JAM.call(d$$165.replace, d$$165, [/&(adx|ady|oid|jp|top)=[^&]*/g, ""], JAM.policy.p3);
      d$$165 = d$$165 + "&ea=0";
      c$$273 = !1;
    }
    oi(a$$536, b$$408, c$$273, d$$165, e$$96, f$$55, g$$33, h$$25, k$$12, l$$14, z$$7);
    if (xb$$1) {
      if (sc) {
        JAM.call(sc, null, [], JAM.policy.p3);
      }
    }
    return;
  }
  function ni(a$$535, b$$407, c$$272) {
    function v27() {
      JAM.call(d$$164.R, d$$164, [], JAM.policy.p3);
      var v929 = JAM.call(d$$164.Ta, d$$164, [], JAM.policy.p3);
      if (!v929) {
        JAM.call(d$$164.ya, d$$164, [], JAM.policy.p3);
        JAM.call(c$$272, null, [JAM.call(d$$164.v, d$$164, [], JAM.policy.p3), null, !0], JAM.policy.p3);
      }
      return;
    }
    var d$$164 = bg;
    if (!d$$164) {
      JAM.call(c$$272, null, [-1, null, !1], JAM.policy.p3);
    }
    JAM.call(d$$164.R, d$$164, [], JAM.policy.p3);
    var v930;
    if (d$$164.ma) {
      v930 = JAM.call(c$$272, null, [JAM.call(d$$164.v, d$$164, [], JAM.policy.p3), d$$164.za, !1], JAM.policy.p3);
    } else {
      JAM.call(d$$164.zc, d$$164, [mi(b$$407), c$$272], JAM.policy.p3);
      var v3738 = d$$164.va;
      if (!v3738) {
        b$$407 = Fe;
        var v4789;
        if (JAM.call(b$$407.test, b$$407, [navigator.userAgent], JAM.policy.p3)) {
          JAM.call(d$$164.Ec, d$$164, [], JAM.policy.p3);
          b$$407 = v27;
          v4789 = JAM.call(a$$535.setTimeout, a$$535, [b$$407, Wh], JAM.policy.p3);
        } else {
          JAM.call(d$$164.ya, d$$164, [], JAM.policy.p3);
          v4789 = JAM.call(c$$272, null, [JAM.call(d$$164.v, d$$164, [], JAM.policy.p3), null, !1], JAM.policy.p3);
        }
        v3738 = v4789;
      }
      v930 = v3738;
    }
    v930;
    return;
  }
  function hi(a$$534) {
    var b$$406 = a$$534.google_ad_handling_mode;
    var v2604;
    if (B$$2) {
      v2604 = 1 == yb(a$$534);
    } else {
      v2604 = !yb(a$$534);
    }
    var v931 = v2604;
    if (v931) {
      v931 = Le(b$$406);
    }
    return v931;
  }
  function li() {
    var a$$533 = me();
    var b$$405 = mc();
    var v932 = a$$533.setUpForcePeriscope;
    if (v932) {
      JAM.call(a$$533.setUpForcePeriscope, a$$533, [], JAM.policy.p3);
    }
    return JAM.call(a$$533.setupOse, a$$533, [G$$1(b$$405, 7)], JAM.policy.p3);
  }
  function ki(a$$531, b$$403) {
    function v28(a$$532, b$$404) {
      var v3741 = a$$532;
      if (!v3741) {
        v3741 = 0 === a$$532;
      }
      var v2605 = v3741;
      if (!v2605) {
        v2605 = !1 === a$$532;
      }
      if (v2605) {
        var v3744 = "boolean" == typeof a$$532;
        if (v3744) {
          var v4424;
          if (a$$532) {
            v4424 = 1;
          } else {
            v4424 = 0;
          }
          a$$532 = v4424;
        }
        var v4425;
        if ("function" == typeof encodeURIComponent) {
          v4425 = encodeURIComponent(a$$532);
        } else {
          v4425 = escape(a$$532);
        }
        ib$$1(e$$95, d$$163, b$$404, "=", v4425);
        d$$163 = "&";
      }
      return;
    }
    var c$$271 = JAM.call(b$$403.slice, b$$403, [-1], JAM.policy.p3);
    var v935;
    var v3746 = "?" == c$$271;
    if (!v3746) {
      v3746 = "#" == c$$271;
    }
    if (v3746) {
      v935 = "";
    } else {
      v935 = "&";
    }
    var d$$163 = v935;
    var e$$95 = [b$$403];
    c$$271 = v28;
    x$$50(a$$531, c$$271);
    return JAM.call(e$$95.join, e$$95, [""], JAM.policy.p3);
  }
  function di() {
    return L$$1(Vh, "/pagead/expansion_embed.js");
  }
  function bi() {
    if (!JAM.call(/_sdo/.test, /_sdo/, [window.google_ad_format], JAM.policy.p3)) {
      if (!wc()) {
        var a$$inline_411 = H$$1();
        if (w$$6.google_top_experiment) {
          var a$$inline_645 = Of;
          var b$$inline_646 = K$$1.PERISCOPE_FOR_TARGETING;
          if (window.google_top_experiment) {
            var c$$inline_647;
            switch(window.google_top_experiment) {
              case a$$inline_645.CONTROL:
                c$$inline_647 = b$$inline_646.CONTROL;
                break;
              case a$$inline_645.EXPERIMENT_ZERO_LATENCY:
                c$$inline_647 = b$$inline_646.EXPERIMENT_ZERO_LATENCY;
                break;
              case a$$inline_645.EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE:
                c$$inline_647 = b$$inline_646.EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE;
            }
            if (c$$inline_647) {
              var v2609 = H$$1();
              JAM.call(v2609.k, v2609, [[c$$inline_647], 1, 10], JAM.policy.p3);
            }
          }
        }
        var a$$inline_649 = D$$1();
        var b$$inline_650 = K$$1.DEVICE_SENSORS;
        if (a$$inline_649.google_sensors) {
          a$$inline_649 = a$$inline_649.google_sensors.sensorsExperiment;
          var c$$inline_651;
          switch(a$$inline_649) {
            case "ds_c":
              c$$inline_651 = b$$inline_650.CONTROL;
              break;
            case "ds_zl":
              c$$inline_651 = b$$inline_650.EXPERIMENT_ZERO_LATENCY;
              break;
            case "ds_wfea":
              c$$inline_651 = b$$inline_650.EXPERIMENT_WAIT_FOR_EVENT_ARRIVAL;
          }
          if (c$$inline_651) {
            var v2611 = H$$1();
            JAM.call(v2611.k, v2611, [[c$$inline_651], 1, 10], JAM.policy.p3);
          }
        }
        var b$$inline_412 = [K$$1.EXPANDABLE_MOBILE_REVERSE.CONTROL, K$$1.EXPANDABLE_MOBILE_REVERSE.EXPERIMENT];
        JAM.call(a$$inline_411.k, a$$inline_411, [b$$inline_412, na$$1, 13], JAM.policy.p3);
        var b$$inline_654 = Ge;
        var c$$inline_655 = K$$1.PREFETCH_AD_HANDLING;
        var d$$inline_656;
        switch(w$$6.google_ad_handling_mode) {
          case b$$inline_654.CONTROL_NO_FRAME:
            d$$inline_656 = c$$inline_655.CONTROL_NO_FRAME;
            break;
          case b$$inline_654.ALWAYS_ZRT:
            d$$inline_656 = c$$inline_655.ALWAYS_ZRT;
            break;
          case b$$inline_654.SERIAL:
            d$$inline_656 = c$$inline_655.SERIAL;
        }
        if (d$$inline_656) {
          var v2615 = H$$1();
          JAM.call(v2615.k, v2615, [[d$$inline_656], 1, 4], JAM.policy.p3);
        }
        var c$$inline_413 = K$$1.SS;
        b$$inline_412 = [c$$inline_413.COUNT_AD_FRAMES_ON_PAGE_CONTROL, c$$inline_413.COUNT_AD_FRAMES_ON_PAGE_EXPERIMENT];
        JAM.call(a$$inline_411.k, a$$inline_411, [b$$inline_412, va$$1, 14], JAM.policy.p3);
        b$$inline_412 = [c$$inline_413.BROWSER_DIMENSIONS_CONTROL, c$$inline_413.BROWSER_DIMENSIONS_EXPERIMENT];
        JAM.call(a$$inline_411.k, a$$inline_411, [b$$inline_412, Ca$$1, 14], JAM.policy.p3);
        b$$inline_412 = K$$1.PERISCOPE_FOR_TARGETING;
        b$$inline_412 = [b$$inline_412.CONTROL_REFERER_CLEANUP, b$$inline_412.EXPERIMENT_REFERER_CLEANUP];
        JAM.call(a$$inline_411.k, a$$inline_411, [b$$inline_412, qa$$1, 10], JAM.policy.p3);
        if (window.google_ad_unit_key_2) {
          var a$$inline_658;
          var v950;
          if ("ctrl" == window.google_ad_unit_key_2) {
            v950 = a$$inline_658 = K$$1.ADD_ADK2.CONTROL;
          } else {
            var v2618 = JAM.call(/[0-9]+/.test, /[0-9]+/, [window.google_ad_unit_key_2], JAM.policy.p3);
            if (v2618) {
              v2618 = a$$inline_658 = K$$1.ADD_ADK2.EXPERIMENT;
            }
            v950 = v2618;
          }
          v950;
          if (a$$inline_658) {
            var v2620 = H$$1();
            JAM.call(v2620.k, v2620, [[a$$inline_658], 1, 4], JAM.policy.p3);
          }
        }
        b$$inline_412 = [K$$1.ASYNC_EXPANSION_EMBED.EXPERIMENT, K$$1.ASYNC_EXPANSION_EMBED.CONTROL];
        JAM.call(a$$inline_411.k, a$$inline_411, [b$$inline_412, ya$$1, 18], JAM.policy.p3);
        var a$$inline_660 = void 0;
        var b$$inline_661 = Pb;
        var c$$inline_662 = K$$1.ASYNC_FOR_OPERA_ANDROID;
        var v954 = a$$inline_660;
        if (!v954) {
          v954 = navigator.userAgent;
        }
        a$$inline_660 = v954;
        if (window.google_async_for_oa_experiment) {
          var d$$inline_663;
          a$$inline_660 = JAM.call(/Chrome/.test, /Chrome/, [a$$inline_660], JAM.policy.p3);
          var v955;
          if (window.google_async_for_oa_experiment == b$$inline_661.CONTROL) {
            var v2625;
            if (a$$inline_660) {
              v2625 = c$$inline_662.CONTROL_ANDROID_CHROME;
            } else {
              v2625 = c$$inline_662.CONTROL_ANDROID;
            }
            v955 = d$$inline_663 = v2625;
          } else {
            var v2626 = window.google_async_for_oa_experiment == b$$inline_661.EXPERIMENT;
            if (v2626) {
              var v3755;
              if (a$$inline_660) {
                v3755 = c$$inline_662.EXPERIMENT_ANDROID_CHROME;
              } else {
                v3755 = c$$inline_662.EXPERIMENT_ANDROID;
              }
              v2626 = d$$inline_663 = v3755;
            }
            v955 = v2626;
          }
          v955;
          if (d$$inline_663) {
            var v2628 = H$$1();
            JAM.call(v2628.k, v2628, [[d$$inline_663], 1, 4], JAM.policy.p3);
          }
        }
        b$$inline_412 = [K$$1.JS_RNG.CONTROL, K$$1.JS_RNG.EXPERIMENT];
        JAM.call(a$$inline_411.k, a$$inline_411, [b$$inline_412, za$$1, 17], JAM.policy.p3);
        var a$$inline_665 = v$$1;
        a$$inline_665 = Xe(a$$inline_665);
        if (3 == a$$inline_665) {
          a$$inline_665 = K$$1.PRERENDERING_DELAYED_IMPRESSION;
          var b$$inline_666 = H$$1();
          JAM.call(b$$inline_666.k, b$$inline_666, [[a$$inline_665.CONTROL, a$$inline_665.EXPERIMENT], ua$$1, 19], JAM.policy.p3);
        }
      }
      JSCompiler_inline_label_Vf_671: {
        var a$$inline_668 = Uf;
        var b$$inline_669 = K$$1.APPEND_AS_FOR_FORMAT_OVERRIDE;
        var c$$inline_670 = window.google_append_as_for_format_override;
        if (c$$inline_670) {
          var v2634;
          if (c$$inline_670 == a$$inline_668.EXPERIMENT) {
            v2634 = b$$inline_669.EXPERIMENT;
          } else {
            v2634 = b$$inline_669.CONTROL;
          }
          a$$inline_668 = v2634;
          var v2635 = J$$1();
          JAM.call(v2635.k, v2635, [[a$$inline_668], 1, 15], JAM.policy.p3);
          break JSCompiler_inline_label_Vf_671;
        }
      }
      JSCompiler_inline_label_Tf_676: {
        var a$$inline_672 = Sf;
        var b$$inline_673 = K$$1.ALWAYS_USE_DELAYED_IMPRESSIONS;
        var c$$inline_674 = window.google_always_use_delayed_impressions_experiment;
        var d$$inline_675 = window.google_ad_output;
        var v2637 = c$$inline_674;
        if (v2637) {
          var v3757 = !d$$inline_675;
          if (!v3757) {
            v3757 = "html" == d$$inline_675;
          }
          v2637 = v3757;
        }
        if (v2637) {
          var v2638;
          if (c$$inline_674 == a$$inline_672.EXPERIMENT) {
            v2638 = b$$inline_673.EXPERIMENT;
          } else {
            v2638 = b$$inline_673.CONTROL;
          }
          a$$inline_672 = v2638;
          var v2639 = J$$1();
          JAM.call(v2639.k, v2639, [[a$$inline_672], 1, 4], JAM.policy.p3);
          break JSCompiler_inline_label_Tf_676;
        }
      }
      var a$$inline_416 = window;
      var b$$inline_417;
      var a$$inline_677 = document.URL;
      var b$$inline_678 = {};
      a$$inline_677 = JAM.call(a$$inline_677.split, a$$inline_677, ["?"], JAM.policy.p3);
      var v963 = a$$inline_677[a$$inline_677.length - 1];
      a$$inline_677 = JAM.call(v963.split, v963, ["&"], JAM.policy.p3);
      var c$$inline_679 = 0;
      var v969 = c$$inline_679 < a$$inline_677.length;
      for (;v969;) {
        var v964 = a$$inline_677[c$$inline_679];
        var d$$inline_680 = JAM.call(v964.split, v964, ["="], JAM.policy.p3);
        if (d$$inline_680[0]) {
          try {
            var v965 = d$$inline_680[0];
            var JSCompiler_temp_const$$741 = JAM.call(v965.toLowerCase, v965, [], JAM.policy.p3);
            var JSCompiler_temp$$742;
            if (1 < d$$inline_680.length) {
              var a$$inline_755 = d$$inline_680[1];
              var v966;
              if (window.decodeURIComponent) {
                v966 = decodeURIComponent(JAM.call(a$$inline_755.replace, a$$inline_755, [/\+/g, " "], JAM.policy.p3));
              } else {
                v966 = unescape(a$$inline_755);
              }
              JSCompiler_temp$$742 = v966;
            } else {
              JSCompiler_temp$$742 = "";
            }
            JAM.set(b$$inline_678, JSCompiler_temp_const$$741, JSCompiler_temp$$742, JAM.policy.p2);
          } catch (e$$inline_681) {
          }
        }
        c$$inline_679 = c$$inline_679 + 1;
        v969 = c$$inline_679 < a$$inline_677.length;
      }
      b$$inline_417 = b$$inline_678;
      var v970 = b$$inline_417.google_ad_override;
      if (v970) {
        a$$inline_416.google_ad_override = b$$inline_417.google_ad_override;
        a$$inline_416.google_adtest = "on";
      }
      var a$$529 = window.google_start_time;
      var v971 = q$$3(a$$529);
      if (v971) {
        vf = a$$529;
        window.google_start_time = null;
      }
      te("show_ads::init_globals", ve, $h);
      var a$$inline_419 = window;
      var d$$inline_422 = "script";
      var a$$inline_683 = a$$inline_419;
      var b$$inline_684 = a$$inline_683.google_ad_width;
      var c$$inline_685 = a$$inline_683.google_ad_height;
      var d$$inline_686 = D$$1();
      var JSCompiler_inline_result$$749;
      JSCompiler_inline_label_yf_768: {
        var a$$inline_757 = a$$inline_683;
        var b$$inline_758 = d$$inline_686.document;
        try {
          var JSCompiler_temp$$inline_759;
          var v5058 = !1 === a$$inline_757.google_allow_expandable_ads;
          if (!v5058) {
            v5058 = !b$$inline_758.body;
          }
          var v4992 = v5058;
          if (!v4992) {
            var v5059 = a$$inline_757.google_ad_output;
            if (v5059) {
              v5059 = "html" != a$$inline_757.google_ad_output;
            }
            v4992 = v5059;
          }
          var v4791 = v4992;
          if (!v4791) {
            v4791 = isNaN(a$$inline_757.google_ad_height);
          }
          var v4430 = v4791;
          if (!v4430) {
            v4430 = isNaN(a$$inline_757.google_ad_width);
          }
          var v3760 = v4430;
          if (!v3760) {
            v3760 = b$$inline_758.domain != a$$inline_757.location.hostname;
          }
          var v2647 = v3760;
          if (!v2647) {
            v2647 = !JAM.call(/^http/.test, /^http/, [b$$inline_758.location.protocol], JAM.policy.p3);
          }
          if (JSCompiler_temp$$inline_759 = v2647) {
          } else {
            var JSCompiler_inline_result$$inline_760;
            JSCompiler_inline_label_767: {
              var b$$inline_761 = b$$inline_758;
              var v972;
              var v4435 = J$$1();
              if (JAM.call(v4435.m, v4435, [13], JAM.policy.p3) == K$$1.EXPANDABLE_MOBILE_REVERSE.EXPERIMENT) {
                v972 = /Win|Mac|Linux/;
              } else {
                v972 = /Win|Mac|Linux|iPad|iPod|iPhone/;
              }
              var c$$inline_762 = v972;
              var d$$inline_763 = navigator.userAgent;
              var e$$inline_764 = navigator.platform;
              c$$inline_762 = c$$inline_762 || /Win|Mac|Linux|iPad|iPod|iPhone/;
              var v2649 = JAM.call(c$$inline_762.test, c$$inline_762, [e$$inline_764], JAM.policy.p3);
              if (v2649) {
                v2649 = !JAM.call(/^Opera/.test, /^Opera/, [d$$inline_763], JAM.policy.p3);
              }
              if (v2649) {
                var v2650 = JAM.call(/WebKit\/(\d+)/.exec, /WebKit\/(\d+)/, [d$$inline_763], JAM.policy.p3);
                if (!v2650) {
                  v2650 = [0, 0];
                }
                c$$inline_762 = v2650[1];
                var v2651 = JAM.call(/rv\:(\d+\.\d+)/.exec, /rv\:(\d+\.\d+)/, [d$$inline_763], JAM.policy.p3);
                if (!v2651) {
                  v2651 = [0, 0];
                }
                var f$$inline_765 = v2651[1];
                var v4796 = JAM.call(/Win/.test, /Win/, [e$$inline_764], JAM.policy.p3);
                if (v4796) {
                  v4796 = JAM.call(/MSIE.*Trident/.test, /MSIE.*Trident/, [d$$inline_763], JAM.policy.p3);
                }
                var v4437 = v4796;
                if (v4437) {
                  v4437 = 8 < b$$inline_761.documentMode;
                }
                var v3768 = v4437;
                if (!v3768) {
                  var v4995 = !c$$inline_762;
                  if (v4995) {
                    v4995 = "Gecko" == navigator.product;
                  }
                  var v4798 = v4995;
                  if (v4798) {
                    v4798 = 1.7 < f$$inline_765;
                  }
                  var v4438 = v4798;
                  if (v4438) {
                    v4438 = !JAM.call(/rv\:1\.8([^.]|\.0)/.test, /rv\:1\.8([^.]|\.0)/, [d$$inline_763], JAM.policy.p3);
                  }
                  v3768 = v4438;
                }
                var v2652 = v3768;
                if (!v2652) {
                  v2652 = 524 < c$$inline_762;
                }
                if (v2652) {
                  JSCompiler_inline_result$$inline_760 = !0;
                  break JSCompiler_inline_label_767;
                }
              }
              JSCompiler_inline_result$$inline_760 = !1;
            }
            JSCompiler_temp$$inline_759 = !JSCompiler_inline_result$$inline_760;
          }
          if (JSCompiler_temp$$inline_759) {
            JSCompiler_inline_result$$749 = !0;
            break JSCompiler_inline_label_yf_768;
          }
        } catch (c$$inline_766) {
          JSCompiler_inline_result$$749 = !0;
          break JSCompiler_inline_label_yf_768;
        }
        JSCompiler_inline_result$$749 = !1;
      }
      var v978;
      var v4440 = JSCompiler_inline_result$$749;
      if (!v4440) {
        v4440 = Ze(d$$inline_686, d$$inline_686.document, b$$inline_684, c$$inline_685);
      }
      var v3770 = v4440;
      if (!v3770) {
        v3770 = Zg(a$$inline_683);
      }
      if (v3770) {
        v978 = !1;
      } else {
        v978 = !0;
      }
      ci = v978;
      if (!ci) {
        a$$inline_419.google_allow_expandable_ads = !1;
        var v979 = J$$1();
        var e$$inline_423 = JAM.call(v979.k, v979, [[K$$1.DIRECT_CALL_RENDER_AD.CONTROL, K$$1.DIRECT_CALL_RENDER_AD.EXPERIMENT], Aa$$1, 4], JAM.policy.p3);
      }
      var v982 = ci;
      if (v982) {
        v982 = !zf();
      }
      var f$$inline_424 = v982;
      var v983 = gi();
      if (v983) {
        f$$inline_424 = !1;
      }
      if (f$$inline_424) {
        JAM.call(document.write, document, ["<" + d$$inline_422 + ' src="' + di() + '"></' + d$$inline_422 + ">"], JAM.policy.p3);
      }
      if (hi(a$$inline_419)) {
        var g$$inline_425 = L$$1(Ja$$1(), "");
        bg = new V$$1(a$$inline_419, g$$inline_425, a$$inline_419.google_ad_handling_mode, xc);
      }
      var v987;
      var v4443 = f$$inline_424;
      if (!v4443) {
        v4443 = void 0;
      }
      var v3774 = a$$inline_419 = v4443;
      if (v3774) {
        v3774 = rb$$1();
      }
      if (v3774) {
        v987 = JAM.call(document.write, document, ["<" + d$$inline_422 + ' src="' + L$$1(Vh, "/pagead/render_ads.js") + '"></' + d$$inline_422 + ">"], JAM.policy.p3);
      } else {
        var v2659;
        var v4445 = a$$inline_419;
        if (!v4445) {
          v4445 = e$$inline_423 != K$$1.DIRECT_CALL_RENDER_AD.EXPERIMENT;
        }
        if (v4445) {
          v2659 = JAM.call(document.write, document, ["<" + d$$inline_422 + '>google_protectAndRun("ads_core.google_render_ad", google_handleError, google_render_ad);</' + d$$inline_422 + ">"], JAM.policy.p3);
        } else {
          v2659 = ii();
        }
        v987 = v2659;
      }
      v987;
    }
    return;
  }
  function Uh(a$$523) {
    this.t = a$$523;
    return;
  }
  function Nh(a$$518, b$$395, c$$265, d$$161) {
    function v29() {
      var v2661 = d$$161;
      if (v2661) {
        v2661 = 0 < a$$518.length;
      }
      var v989 = v2661;
      if (v989) {
        JAM.call(d$$161, null, [], JAM.policy.p3);
      }
      var a$$inline_396 = a$$518;
      var b$$inline_397 = 0;
      var v990 = b$$inline_397 < a$$inline_396.length;
      for (;v990;) {
        JAM.call(a$$inline_396[b$$inline_397], a$$inline_396, [], JAM.policy.p3);
        b$$inline_397 = b$$inline_397 + 1;
        v990 = b$$inline_397 < a$$inline_396.length;
      }
      a$$inline_396.length = 0;
      return;
    }
    JAM.call(a$$518.push, a$$518, [b$$395], JAM.policy.p3);
    if (c$$265) {
      JAM.call(window.setTimeout, window, [v29, c$$265], JAM.policy.p3);
    }
    return;
  }
  function Mh(a$$515) {
    var v991;
    if (a$$515.google_sensors) {
      a$$515 = a$$515.google_sensors;
      v991 = new $$$1(a$$515);
    } else {
      v991 = null;
    }
    return v991;
  }
  function $$$1(a$$514) {
    this.j = a$$514;
    return;
  }
  function zh(a$$511, b$$391) {
    ze = ze | 2;
    return a$$511[b$$391 % a$$511.length];
  }
  function Bh(a$$510) {
    function v32(b$$390, c$$262) {
      JAM.set(a$$510, c$$262, null, JAM.policy.p2);
      return;
    }
    function v31(b$$389, c$$261) {
      JAM.set(a$$510, c$$261, null, JAM.policy.p2);
      return;
    }
    function v30(b$$388, c$$260) {
      JAM.set(a$$510, c$$260, null, JAM.policy.p2);
      return;
    }
    x$$50(vh, v30);
    x$$50(wh, v31);
    x$$50(xh, v32);
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
    return;
  }
  function qh(a$$503, b$$382, c$$254, d$$155) {
    var v4447 = a$$503 && b$$382;
    if (v4447) {
      v4447 = c$$254;
    }
    var v3779 = v4447;
    if (v3779) {
      v3779 = d$$155;
    }
    if (!v3779) {
      return null;
    }
    var v994 = d$$155.document;
    b$$382 = JAM.call(v994.getElementById, v994, [b$$382], JAM.policy.p3);
    if (!b$$382) {
      return null;
    }
    var v996 = Ug[a$$503.google_reactive_ad_format];
    if (!v996) {
      v996 = null;
    }
    var e$$91 = v996;
    switch(e$$91) {
      case 1:
        var JSCompiler_inline_result$$28;
        var a$$inline_382 = a$$503;
        var b$$inline_383 = b$$382;
        var c$$inline_384 = c$$254;
        var d$$inline_385 = d$$155;
        JSCompiler_inline_label_Ig_642: {
          switch(a$$inline_382.google_reactive_ad_format) {
            case 1:
              a$$inline_382 = "bottom";
              break JSCompiler_inline_label_Ig_642;
          }
          a$$inline_382 = null;
        }
        b$$inline_383 = new X$$1(b$$inline_383, c$$inline_384, d$$inline_385, a$$inline_382);
        JSCompiler_inline_result$$28 = new jh(d$$inline_385, b$$inline_383);
        return JSCompiler_inline_result$$28;
      case 2:
        var JSCompiler_inline_result$$30;
        var a$$inline_387 = a$$503;
        var c$$inline_389 = c$$254;
        var d$$inline_390 = d$$155;
        a$$inline_387 = new Y$$1(b$$382, c$$inline_389, d$$inline_390);
        JSCompiler_inline_result$$30 = new Z$$1(d$$inline_390, c$$inline_389, a$$inline_387);
        return JSCompiler_inline_result$$30;
    }
    return null;
  }
  function Z$$1(a$$494, b$$378, c$$252) {
    JAM.call(ih.call, ih, [this, a$$494], JAM.policy.p3);
    this.s = b$$378;
    this.Zb = c$$252;
    this.G = {};
    this.Z = this.H = !1;
    return;
  }
  function kh(a$$483) {
    var b$$370 = Re(a$$483);
    var v998 = b$$370[5];
    if (!v998) {
      v998 = "";
    }
    a$$483 = v998;
    b$$370 = b$$370[6];
    var v2670;
    if (b$$370) {
      v2670 = "?" + b$$370;
    } else {
      v2670 = "";
    }
    return a$$483 + v2670;
  }
  function Y$$1(a$$482, b$$369, c$$247) {
    JAM.call(hh.call, hh, [this, a$$482, b$$369, c$$247], JAM.policy.p3);
    this.Wc = c$$247.location.hostname;
    var v5172 = kh(c$$247.location.href);
    this.Xc = v5172;
    this.ea = [];
    this.ob = this.kd = !1;
    JAM.call(this.N, this, [!1], JAM.policy.p3);
    JAM.call(this.Cc, this, [], JAM.policy.p3);
    return;
  }
  function jh(a$$480, b$$368) {
    JAM.call(ih.call, ih, [this, a$$480], JAM.policy.p3);
    this.Kb = b$$368;
    this.H = this.Cb = !1;
    return;
  }
  function ih(a$$477) {
    this.i = a$$477;
    this.cc = {};
    JAM.call(this.Wb, this, [], JAM.policy.p3);
    return;
  }
  function X$$1(a$$465, b$$360, c$$242, d$$152) {
    JAM.call(hh.call, hh, [this, a$$465, b$$360, c$$242], JAM.policy.p3);
    this.I = this.Ib = this.Da = !1;
    this.w = null;
    var v5173 = Qd(c$$242.document.body, "padding");
    this.Vc = v5173;
    this.B = 0;
    this.Ra = !1;
    this.ga = !0;
    var JSCompiler_inline_result$$49;
    JSCompiler_inline_label_Kd_378: {
      var a$$inline_371 = Ld;
      var b$$inline_372 = this.s;
      if ("none" != R$$1(b$$inline_372, "display")) {
        JSCompiler_inline_result$$49 = JAM.call(a$$inline_371, null, [b$$inline_372], JAM.policy.p3);
        break JSCompiler_inline_label_Kd_378;
      }
      var c$$inline_373 = b$$inline_372.style;
      var d$$inline_374 = c$$inline_373.display;
      var e$$inline_375 = c$$inline_373.visibility;
      var f$$inline_376 = c$$inline_373.position;
      c$$inline_373.visibility = "hidden";
      c$$inline_373.position = "absolute";
      c$$inline_373.display = "inline";
      var g$$inline_377 = JAM.call(a$$inline_371, null, [b$$inline_372], JAM.policy.p3);
      c$$inline_373.display = d$$inline_374;
      c$$inline_373.position = f$$inline_376;
      c$$inline_373.visibility = e$$inline_375;
      JSCompiler_inline_result$$49 = g$$inline_377;
    }
    this.gd = JSCompiler_inline_result$$49;
    this.ua = d$$152;
    JAM.call(this.hide, this, [], JAM.policy.p3);
    var v5174 = lb$$1(this.i, "orientationchange", this, this.ec);
    this.Zc = v5174;
    var v5175 = lb$$1(this.i, "resize", this, this.tc);
    this.$c = v5175;
    var v5176 = lb$$1(this.i, "scroll", this, this.vc);
    this.ad = v5176;
    var v5177 = lb$$1(this.i, "touchcancel", this, this.Kc);
    this.bd = v5177;
    var v5178 = lb$$1(this.i, "touchend", this, this.Lc);
    this.cd = v5178;
    var v5179 = lb$$1(this.i, "touchmove", this, this.Mc);
    this.dd = v5179;
    var v5180 = lb$$1(this.i, "touchstart", this, this.Nc);
    this.ed = v5180;
    return;
  }
  function hh(a$$462, b$$359, c$$241) {
    this.sb = a$$462;
    this.s = b$$359;
    this.i = c$$241;
    return;
  }
  function gh(a$$461, b$$358, c$$240) {
    this.W = a$$461;
    var v1019;
    if (c$$240) {
      v1019 = c$$240;
    } else {
      v1019 = null;
    }
    this.onEndCallback = v1019;
    JAM.call(W$$1.call, W$$1, [this, [Number(Md(a$$461))], [0], b$$358], JAM.policy.p3);
    return;
  }
  function fh(a$$460, b$$357) {
    this.W = a$$460;
    JAM.call(W$$1.call, W$$1, [this, [Number(Md(a$$460))], [1], b$$357], JAM.policy.p3);
    return;
  }
  function W$$1(a$$457, b$$355, c$$239) {
    this.ib = a$$457;
    this.Tc = b$$355;
    this.jd = c$$239;
    this.Ic = !1;
    this.current = null;
    return;
  }
  function dh(a$$454) {
    this.lc = a$$454;
    var v5181 = ye("rach::hdlr", JAM.call(r$$2, null, [this.ub, this], JAM.policy.p3));
    this.K = v5181;
    y$$31(a$$454, "message", this.K);
    return;
  }
  function $g(a$$453, b$$352, c$$236) {
    var d$$150 = rg(b$$352);
    var v1026 = Ug[a$$453.google_reactive_ad_format];
    if (!v1026) {
      v1026 = null;
    }
    var e$$88 = v1026;
    var JSCompiler_inline_result$$55;
    JSCompiler_inline_label_Wg_370: {
      var a$$inline_367 = b$$352;
      var b$$inline_368 = a$$453;
      switch(c$$236) {
        case 1:
          JSCompiler_inline_result$$55 = Hg(a$$inline_367);
          break JSCompiler_inline_label_Wg_370;
        case 2:
          JSCompiler_inline_result$$55 = Rg(a$$inline_367, b$$inline_368);
          break JSCompiler_inline_label_Wg_370;
      }
      JSCompiler_inline_result$$55 = !1;
    }
    var v2679 = JSCompiler_inline_result$$55;
    if (v2679) {
      v2679 = e$$88 != c$$236;
    }
    var v1027 = v2679;
    if (v1027) {
      v1027 = !d$$150.wasReactiveAdCreated[c$$236];
    }
    return v1027;
  }
  function ch(a$$452, b$$351) {
    function v33(c$$235) {
      var v1028 = $g(a$$452, b$$351, c$$235);
      if (v1028) {
        e$$87 = !0;
      }
      return;
    }
    var c$$234 = rg(b$$351);
    var d$$149 = !0;
    var v2681 = c$$234.wasReactiveAdConfigHandlerRegistered;
    if (!v2681) {
      v2681 = !d$$149;
    }
    if (v2681) {
      return!1;
    }
    var e$$87 = !1;
    x$$50(kg, v33);
    return c$$234.wasReactiveAdConfigHandlerRegistered = e$$87;
  }
  function ah(a$$450, b$$349) {
    function v34(d$$147) {
      var v1030 = $g(a$$450, b$$349, d$$147);
      if (v1030) {
        c$$232 = c$$232 | d$$147;
      }
      return;
    }
    var c$$232 = 0;
    x$$50(kg, v34);
    var v1031;
    if (c$$232) {
      v1031 = "" + c$$232;
    } else {
      v1031 = null;
    }
    return v1031;
  }
  function Zg(a$$449) {
    a$$449 = a$$449.google_reactive_ad_format;
    var v1032;
    if (Ec(lg, a$$449)) {
      v1032 = "" + a$$449;
    } else {
      v1032 = null;
    }
    return v1032;
  }
  function Yg(a$$448) {
    switch(a$$448) {
      case 1:
        return new Mg;
      case 2:
        return new Qg;
    }
    return null;
  }
  function Rg(a$$443, b$$345) {
    var c$$228 = !1;
    try {
      var v4808 = a$$443.top == a$$443;
      if (v4808) {
        v4808 = !!a$$443.postMessage;
      }
      var v4448 = v4808;
      if (v4448) {
        v4448 = og(a$$443);
      }
      var v3784 = v4448;
      if (v3784) {
        v3784 = ng(a$$443);
      }
      var v2683 = v3784;
      if (v2683) {
        v2683 = !Bc(b$$345);
      }
      var v1033 = v2683;
      if (v1033) {
        v1033 = !Ha$$1;
      }
      c$$228 = v1033;
    } catch (d$$145) {
    }
    return c$$228;
  }
  function Qg() {
    this.l = null;
    return;
  }
  function Og() {
    return;
  }
  function Mg() {
    this.l = null;
    return;
  }
  function Kg() {
    return;
  }
  function Hg(a$$429) {
    var b$$336 = !1;
    try {
      var JSCompiler_temp$$40;
      if (JSCompiler_temp$$40 = a$$429.top == a$$429) {
        var JSCompiler_inline_result$$41;
        var a$$inline_346 = a$$429.navigator.userAgent;
        var v3786 = !JAM.call(/(Android|iPhone OS|Windows Phone)/.test, /(Android|iPhone OS|Windows Phone)/, [a$$inline_346], JAM.policy.p3);
        if (!v3786) {
          v3786 = JAM.call(/Android 2/.test, /Android 2/, [a$$inline_346], JAM.policy.p3);
        }
        var v2685 = v3786;
        if (!v2685) {
          v2685 = JAM.call(/iPhone OS [34]_/.test, /iPhone OS [34]_/, [a$$inline_346], JAM.policy.p3);
        }
        var v1035 = v2685;
        if (!v1035) {
          v1035 = JAM.call(/Windows Phone (?:OS )?[67]/.test, /Windows Phone (?:OS )?[67]/, [a$$inline_346], JAM.policy.p3);
        }
        JSCompiler_inline_result$$41 = v1035;
        JSCompiler_temp$$40 = !JSCompiler_inline_result$$41;
      }
      var v4451 = JSCompiler_temp$$40;
      if (v4451) {
        v4451 = !!a$$429.postMessage;
      }
      var v3788 = v4451;
      if (v3788) {
        v3788 = a$$429.innerHeight >= a$$429.innerWidth;
      }
      var v2687 = v3788;
      if (v2687) {
        v2687 = ng(a$$429);
      }
      var v1037 = v2687;
      if (v1037) {
        v1037 = og(a$$429);
      }
      b$$336 = v1037;
    } catch (c$$223) {
    }
    return b$$336;
  }
  function Fg(a$$428, b$$335, c$$222) {
    var d$$142 = a$$428.attributes;
    var e$$84 = d$$142.length;
    var f$$51 = 0;
    var v1041 = f$$51 < e$$84;
    for (;v1041;) {
      var g$$30 = d$$142[f$$51];
      if (JAM.call(/data-/.test, /data-/, [g$$30.nodeName], JAM.policy.p3)) {
        var v2689 = g$$30.nodeName;
        var v1038 = JAM.call(v2689.replace, v2689, ["data", "google"], JAM.policy.p3);
        var h$$22 = JAM.call(v1038.replace, v1038, [/-/g, "_"], JAM.policy.p3);
        var v1039 = JAM.call(b$$335.hasOwnProperty, b$$335, [h$$22], JAM.policy.p3);
        if (!v1039) {
          JAM.set(b$$335, h$$22, g$$30.nodeValue, JAM.policy.p2);
        }
      }
      f$$51 = f$$51 + 1;
      v1041 = f$$51 < e$$84;
    }
    var JSCompiler_inline_result$$59;
    var a$$inline_332 = b$$335.google_ad_format;
    var v1042 = "auto" == a$$inline_332;
    if (!v1042) {
      v1042 = JAM.call(/^((^|,)(horizontal|vertical|rectangle))+$/.test, /^((^|,)(horizontal|vertical|rectangle))+$/, [a$$inline_332], JAM.policy.p3);
    }
    JSCompiler_inline_result$$59 = v1042;
    if (JSCompiler_inline_result$$59) {
      var JSCompiler_inline_result$$77;
      var a$$inline_334 = a$$428;
      var b$$inline_335 = b$$335;
      var c$$inline_336 = c$$222;
      var d$$inline_337 = a$$inline_334.offsetWidth;
      var e$$inline_338 = b$$inline_335.google_ad_format;
      c$$inline_336 = yg(d$$inline_337, e$$inline_338, c$$inline_336);
      if (!c$$inline_336) {
        throw Error("Cannot find a responsive size for a container of width=" + d$$inline_337 + "px and data-ad-format=" + e$$inline_338);
      }
      b$$inline_335.google_ad_height = c$$inline_336.height;
      var v1045 = b$$inline_335;
      var v2693;
      var v4454 = 300 < d$$inline_337;
      if (v4454) {
        v4454 = 300 < c$$inline_336.height;
      }
      if (v4454) {
        v2693 = c$$inline_336.width;
      } else {
        var v3790;
        if (1200 < d$$inline_337) {
          v3790 = 1200;
        } else {
          v3790 = JAM.call(Math.round, Math, [d$$inline_337], JAM.policy.p3);
        }
        v2693 = v3790;
      }
      v1045.google_ad_width = v2693;
      a$$inline_334.style.height = b$$inline_335.google_ad_height + "px";
      delete b$$inline_335.google_ad_format;
      JSCompiler_inline_result$$77 = void 0;
      JSCompiler_inline_result$$77;
      b$$335.google_loader_features_used = 128;
    } else {
      var JSCompiler_inline_result$$54;
      var a$$inline_340 = a$$428;
      var v1047 = !JAM.call(sg.test, sg, [a$$inline_340.style.width], JAM.policy.p3);
      if (!v1047) {
        v1047 = !JAM.call(sg.test, sg, [a$$inline_340.style.height], JAM.policy.p3);
      }
      JSCompiler_inline_result$$54 = v1047;
      if (JSCompiler_inline_result$$54) {
        var a$$inline_342 = a$$428;
        var b$$inline_343 = b$$335;
        var c$$inline_344 = c$$222;
        var v1048;
        if (c$$inline_344.getComputedStyle) {
          v1048 = JAM.call(c$$inline_344.getComputedStyle, c$$inline_344, [a$$inline_342, null], JAM.policy.p3);
        } else {
          v1048 = a$$inline_342.currentStyle;
        }
        c$$inline_344 = v1048;
        a$$inline_342.style.width = c$$inline_344.width;
        a$$inline_342.style.height = c$$inline_344.height;
        wg(c$$inline_344, b$$inline_343);
      } else {
        wg(a$$428.style, b$$335);
      }
    }
    return;
  }
  function Dg(a$$427, b$$334, c$$221) {
    function v35() {
      Kf(c$$221, b$$334, a$$427);
      return;
    }
    var v2699 = a$$427.style;
    if (v2699) {
      v2699 = "none" == a$$427.style.display;
    }
    var v1052 = v2699;
    if (v1052) {
      b$$334.google_dn = 1;
    }
    wb(c$$221);
    Fg(a$$427, b$$334, c$$221);
    var d$$141 = Bg;
    var e$$83 = 0;
    var v1054 = e$$83 < d$$141.length;
    for (;v1054;) {
      var v1053 = d$$141[e$$83];
      var v2701 = b$$334[d$$141[e$$83]];
      if (!v2701) {
        v2701 = c$$221[d$$141[e$$83]];
      }
      JAM.set(b$$334, v1053, v2701, JAM.policy.p2);
      e$$83 = e$$83 + 1;
      v1054 = e$$83 < d$$141.length;
    }
    b$$334.google_loader_used = "aa";
    var v2703 = d$$141 = b$$334.google_ad_output;
    if (v2703) {
      v2703 = "html" != d$$141;
    }
    if (v2703) {
      throw Error("No support for google_ad_output=" + d$$141);
    }
    te("aa::main", ve, v35);
    return;
  }
  function Cg(a$$426) {
    JAM.call(a$$426.setAttribute, a$$426, ["data-adsbygoogle-status", "done"], JAM.policy.p3);
    return;
  }
  function Ag(a$$424) {
    a$$424 = a$$424.document;
    var v1057 = a$$424.documentElement.clientWidth;
    if (!v1057) {
      v1057 = a$$424.body.clientWidth;
    }
    return v1057;
  }
  function yg(a$$422, b$$331, c$$219) {
    function v36(a$$423, b$$332) {
      var v1058 = a$$423.width - b$$332.width;
      if (!v1058) {
        v1058 = a$$423.height - b$$332.height;
      }
      return v1058;
    }
    var d$$140 = tg;
    JAM.call(d$$140.sort, d$$140, [v36], JAM.policy.p3);
    var v1059 = "auto" == b$$331;
    if (v1059) {
      b$$331 = a$$422 / Ag(c$$219);
      var v3800;
      if (.25 > b$$331) {
        v3800 = "vertical";
      } else {
        v3800 = "horizontal,rectangle";
      }
      b$$331 = v3800;
    }
    c$$219 = d$$140.length;
    var v1061 = c$$219;
    c$$219 = c$$219 - 1;
    for (;v1061;) {
      var v2712 = d$$140[c$$219].width <= a$$422;
      if (v2712) {
        v2712 = -1 != JAM.call(b$$331.indexOf, b$$331, [d$$140[c$$219].format], JAM.policy.p3);
      }
      if (v2712) {
        return d$$140[c$$219];
      }
      v1061 = c$$219;
      c$$219 = c$$219 - 1;
    }
    return null;
  }
  function wg(a$$420, b$$329) {
    var c$$217 = ["width", "height"];
    var d$$138 = 0;
    var v1065 = d$$138 < c$$217.length;
    for (;v1065;) {
      var e$$81 = "google_ad_" + c$$217[d$$138];
      if (!JAM.call(b$$329.hasOwnProperty, b$$329, [e$$81], JAM.policy.p3)) {
        var f$$50 = JAM.call(sg.exec, sg, [a$$420[c$$217[d$$138]]], JAM.policy.p3);
        if (f$$50) {
          var v2716 = b$$329;
          var v2717 = e$$81;
          var v5182 = JAM.call(Math.round, Math, [f$$50[1]], JAM.policy.p3);
          JAM.set(v2716, v2717, v5182, JAM.policy.p2);
        }
      }
      d$$138 = d$$138 + 1;
      v1065 = d$$138 < c$$217.length;
    }
    return;
  }
  function rg(a$$415) {
    var v1066 = a$$415.google_reactive_ads_global_state;
    if (!v1066) {
      var v2719 = a$$415;
      var v5183 = new pg;
      v2719.google_reactive_ads_global_state = v5183;
    }
    return a$$415.google_reactive_ads_global_state;
  }
  function pg() {
    this.wasReactiveAdConfigReceived = {};
    this.wasReactiveAdCreated = {};
    this.wasReactiveAdConfigHandlerRegistered = !1;
    return;
  }
  function og(a$$414) {
    var b$$327 = a$$414.document.documentElement.clientWidth;
    a$$414 = a$$414.innerWidth;
    return.05 > JAM.call(Math.abs, Math, [b$$327 / a$$414 - 1], JAM.policy.p3);
  }
  function ng(a$$413) {
    a$$413 = a$$413.document.documentElement.clientWidth;
    var v1070 = 320 <= a$$413;
    if (v1070) {
      v1070 = 420 >= a$$413;
    }
    return v1070;
  }
  function hg(a$$405) {
    this.qa = a$$405;
    return;
  }
  function gg(a$$404) {
    a$$404 = String(a$$404);
    if (fg(a$$404)) {
      try {
        var v1071 = "(" + a$$404 + ")";
        if (JAM.isEval(eval)) {
          return eval("introspect(JAM.policy.pFull) { " + v1071 + " }");
        } else {
          return JAM.call(eval, null, [v1071]);
        }
      } catch (b$$319) {
      }
    }
    throw Error("Invalid JSON string: " + a$$404);
  }
  function fg(a$$403) {
    if (JAM.call(/^\s*$/.test, /^\s*$/, [a$$403], JAM.policy.p3)) {
      return!1;
    }
    var b$$318 = /\\["\\\/bfnrtu]/g;
    var c$$213 = /"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var d$$135 = /(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g;
    var e$$77 = /^[\],:{}\s\u2028\u2029]*$/;
    var v3805 = JAM.call(a$$403.replace, a$$403, [b$$318, "@"], JAM.policy.p3);
    var v2725 = JAM.call(v3805.replace, v3805, [c$$213, "]"], JAM.policy.p3);
    return JAM.call(e$$77.test, e$$77, [JAM.call(v2725.replace, v2725, [d$$135, ""], JAM.policy.p3)], JAM.policy.p3);
  }
  function eg(a$$401, b$$315) {
    try {
      return void 0 != a$$401.frames[b$$315];
    } catch (c$$211) {
      return!1;
    }
    return;
  }
  function Xf(a$$388) {
    JAM.set(Wf, a$$388, !0, JAM.policy.p2);
    return a$$388;
  }
  function V$$1(a$$387, b$$306, c$$204, d$$130) {
    this.Q = a$$387;
    this.Fb = b$$306;
    this.Za = c$$204;
    this.hc = !1;
    this.F = "";
    this.za = this.U = null;
    this.Sb = this.Fc = this.Pa = this.Tb = this.jc = this.ma = this.va = !1;
    var v5184 = ye("zrt_mh::handler", JAM.call(r$$2, null, [V$$1.prototype.Qa, this], JAM.policy.p3), d$$130);
    this.K = v5184;
    y$$31(a$$387, "message", this.K);
    return;
  }
  function Jf(a$$378, b$$299, c$$197, d$$125, e$$75) {
    var f$$48 = "script";
    var g$$29 = b$$299.google_ad_width;
    var h$$21 = b$$299.google_ad_height;
    var k$$9 = {};
    Ff(k$$9, g$$29, h$$21, !0);
    JAM.set(k$$9, "onload", '"' + Ne + '"');
    e$$75 = JAM.call(e$$75, null, [a$$378, k$$9, b$$299], JAM.policy.p3);
    JSCompiler_inline_label_Lf_304: {
      var v2728 = window.google_override_format;
      if (!v2728) {
        var v3807 = !wf[window.google_ad_width + "x" + window.google_ad_height];
        if (v3807) {
          v3807 = "aa" == window.google_loader_used;
        }
        v2728 = v3807;
      }
      if (v2728) {
        var a$$inline_303 = Uf;
        k$$9 = vb([a$$inline_303.CONTROL, a$$inline_303.EXPERIMENT], Ba$$1);
        break JSCompiler_inline_label_Lf_304;
      }
      k$$9 = null;
    }
    var a$$inline_305 = c$$197;
    var b$$inline_306 = d$$125;
    var c$$inline_307 = b$$299;
    var a$$inline_623 = c$$inline_307;
    var c$$inline_625 = a$$inline_623.google_ad_output;
    var d$$inline_626 = a$$inline_623.google_ad_format;
    var v2731 = d$$inline_626;
    if (!v2731) {
      var v3809 = "html" != c$$inline_625;
      if (v3809) {
        v3809 = null != c$$inline_625;
      }
      v2731 = v3809;
    }
    var v1084 = v2731;
    if (!v1084) {
      d$$inline_626 = a$$inline_623.google_ad_width + "x" + a$$inline_623.google_ad_height;
      var v3813 = "e" == k$$9;
      if (v3813) {
        d$$inline_626 = d$$inline_626 + "_as";
      }
    }
    var v2733 = !a$$inline_623.google_ad_slot;
    if (!v2733) {
      v2733 = a$$inline_623.google_override_format;
    }
    var v1085 = v2733;
    if (!v1085) {
      var v2734 = !wf[a$$inline_623.google_ad_width + "x" + a$$inline_623.google_ad_height];
      if (v2734) {
        v2734 = "aa" == a$$inline_623.google_loader_used;
      }
      v1085 = v2734;
    }
    c$$inline_625 = v1085;
    var v1086;
    if (d$$inline_626 && c$$inline_625) {
      v1086 = JAM.call(d$$inline_626.toLowerCase, d$$inline_626, [], JAM.policy.p3);
    } else {
      v1086 = "";
    }
    d$$inline_626 = v1086;
    a$$inline_623.google_ad_format = d$$inline_626;
    var JSCompiler_temp_const$$564 = c$$inline_307;
    var JSCompiler_inline_result$$565;
    var a$$inline_628 = a$$inline_305;
    var v1087;
    if (b$$inline_306) {
      v1087 = a$$inline_628.parentElement;
    } else {
      v1087 = a$$inline_628;
    }
    a$$inline_628 = v1087;
    JSCompiler_inline_result$$565 = Fb(a$$inline_628, c$$inline_307, !0);
    JSCompiler_temp_const$$564.google_ad_unit_key = JSCompiler_inline_result$$565;
    var v1089 = window;
    var v3818 = window.google_adk2_experiment;
    if (!v3818) {
      v3818 = vb(["C", "E"], xa$$1);
    }
    var v2737 = v3818;
    if (!v2737) {
      v2737 = "N";
    }
    b$$inline_306 = v1089.google_adk2_experiment = v2737;
    var v1090;
    if ("E" == b$$inline_306) {
      var v2738 = c$$inline_307;
      var v5185 = Fb(a$$inline_305, c$$inline_307);
      v1090 = v2738.google_ad_unit_key_2 = v5185;
    } else {
      var v2739 = "C" == b$$inline_306;
      if (v2739) {
        v2739 = c$$inline_307.google_ad_unit_key_2 = "ctrl";
      }
      v1090 = v2739;
    }
    v1090;
    c$$197 = Ee(b$$299);
    var a$$inline_310 = a$$378;
    var b$$inline_311 = Ke(a$$inline_310);
    var c$$inline_312 = 3 == Xe(a$$inline_310.document);
    var d$$inline_313 = Ge;
    var v3820 = b$$inline_311;
    if (v3820) {
      v3820 = !c$$inline_312;
    }
    var v2742 = v3820;
    if (v2742) {
      v2742 = void 0 === a$$inline_310.google_ad_handling_mode;
    }
    var v1092 = v2742;
    if (v1092) {
      var v2743 = a$$inline_310;
      var v3823 = vb([d$$inline_313.CONTROL_NO_FRAME, d$$inline_313.ALWAYS_ZRT, d$$inline_313.SERIAL], sa$$1);
      if (!v3823) {
        v3823 = vb([d$$inline_313.IFRAME_SIGNALING], ta$$1);
      }
      v2743.google_ad_handling_mode = v3823;
    }
    var v1093;
    if (a$$inline_310.google_ad_handling_mode) {
      v1093 = String(a$$inline_310.google_ad_handling_mode);
    } else {
      v1093 = null;
    }
    d$$125 = v1093;
    JSCompiler_inline_label_If_324: {
      var a$$inline_315 = a$$378;
      var b$$inline_316 = d$$125;
      var c$$inline_317 = b$$299;
      var d$$inline_318 = g$$29;
      var e$$inline_319 = h$$21;
      var f$$inline_320 = Ge;
      var v4471 = Ke(a$$inline_315);
      if (v4471) {
        v4471 = 1 == a$$inline_315.google_unique_id;
      }
      var v3824 = v4471;
      if (v3824) {
        v3824 = b$$inline_316 != f$$inline_320.CONTROL_NO_FRAME;
      }
      var v2746 = v3824;
      if (v2746) {
        v2746 = b$$inline_316 != f$$inline_320.SERIAL;
      }
      if (v2746) {
        var g$$inline_321 = "zrt_ads_frame" + a$$inline_315.google_unique_id;
        var h$$inline_322;
        var a$$inline_632 = a$$inline_315;
        var d$$inline_635 = c$$inline_317.google_page_url;
        if (!d$$inline_635) {
          var v2747;
          if (Ze(a$$inline_632, a$$inline_632.document, d$$inline_318, e$$inline_319)) {
            v2747 = a$$inline_632.document.referrer;
          } else {
            v2747 = a$$inline_632.document.URL;
          }
          d$$inline_635 = v2747;
        }
        h$$inline_322 = encodeURIComponent(d$$inline_635);
        var k$$inline_323 = null;
        if (Le(b$$inline_316)) {
          k$$inline_323 = He;
          switch(b$$inline_316) {
            case f$$inline_320.IFRAME_SIGNALING:
              b$$inline_316 = k$$inline_323.PARALLEL_W_IFRAME_SIGNALING;
              break;
            case f$$inline_320.ALWAYS_ZRT:
              b$$inline_316 = k$$inline_323.PARALLEL_W_ALWAYS_ZRT;
              break;
            default:
              b$$inline_316 = k$$inline_323.PARALLEL;
          }
          k$$inline_323 = b$$inline_316 + "-" + (h$$inline_322 + "/" + c$$inline_317.google_ad_unit_key + "/" + a$$inline_315.google_unique_id);
        }
        a$$inline_315 = {};
        Ff(a$$inline_315, d$$inline_318, e$$inline_319, !1);
        a$$inline_315.style = "display:none";
        var a$$inline_637 = k$$inline_323;
        var b$$inline_638 = g$$inline_321;
        var c$$inline_639 = a$$inline_315;
        c$$inline_639.id = b$$inline_638;
        c$$inline_639.name = b$$inline_638;
        var v1099 = c$$inline_639;
        var v5186 = Df(a$$inline_637);
        v1099.src = v5186;
        b$$299 = Cf(c$$inline_639);
        break JSCompiler_inline_label_If_324;
      }
      b$$299 = null;
    }
    g$$29 = vf;
    var v1101 = new Date;
    h$$21 = JAM.call(v1101.getTime, v1101, [], JAM.policy.p3);
    var l$$11 = a$$378.google_top_experiment;
    var z$$5 = a$$378.google_async_for_oa_experiment;
    var C$$3 = a$$378.google_always_use_delayed_impressions_experiment;
    var v2751 = a$$378.google_unique_id;
    var v3830;
    if (l$$11) {
      v3830 = 'google_top_experiment="' + l$$11 + '";';
    } else {
      v3830 = "";
    }
    var v2752 = v3830;
    var v3831;
    if (d$$125) {
      v3831 = 'google_ad_handling_mode="' + d$$125 + '";';
    } else {
      v3831 = "";
    }
    var v2753 = v3831;
    var v3832;
    if (z$$5) {
      v3832 = 'google_async_for_oa_experiment="' + z$$5 + '";';
    } else {
      v3832 = "";
    }
    var v2754 = v3832;
    var v3833;
    if (C$$3) {
      v3833 = 'google_always_use_delayed_impressions_experiment="' + C$$3 + '";';
    } else {
      v3833 = "";
    }
    var v2755 = v3833;
    var v3834;
    if (k$$9) {
      v3834 = 'google_append_as_for_format_override="' + k$$9 + '";';
    } else {
      v3834 = "";
    }
    var v2756 = v3834;
    var v3835;
    if (h$$21 > g$$29) {
      v3835 = h$$21 - g$$29;
    } else {
      v3835 = 1;
    }
    var v1102 = ["<!doctype html><html><body>", b$$299, "<", f$$48, ">", c$$197, "google_show_ads_impl=true;google_unique_id=", v2751, ';google_async_iframe_id="', e$$75, '";google_start_time=', g$$29, ";", v2752, v2753, v2754, v2755, v2756, "google_bpp=", v3835, ";google_async_rrc=0;</", f$$48, ">", xf(), "</body></html>"];
    k$$9 = JAM.call(v1102.join, v1102, [""], JAM.policy.p3);
    var v1103;
    var v3836 = a$$378.document;
    if (JAM.call(v3836.getElementById, v3836, [e$$75], JAM.policy.p3)) {
      v1103 = rf;
    } else {
      v1103 = sf;
    }
    c$$197 = v1103;
    JAM.call(c$$197, null, [Af(a$$378, e$$75, k$$9, !0)], JAM.policy.p3);
    return;
  }
  function Kf(a$$376, b$$297, c$$196) {
    function v37(a$$377, b$$298, f$$47) {
      var JSCompiler_inline_result$$68;
      var a$$inline_298 = a$$377;
      var b$$inline_299 = b$$298;
      var c$$inline_300 = f$$47;
      var d$$inline_301 = c$$196;
      a$$inline_298 = a$$inline_298.document;
      var a$$inline_612 = a$$inline_298;
      var b$$inline_613 = b$$inline_299;
      var c$$inline_614 = b$$inline_613.id;
      var d$$inline_615 = 0;
      var v2761 = !c$$inline_614;
      if (!v2761) {
        v2761 = JAM.call(a$$inline_612.getElementById, a$$inline_612, [c$$inline_614], JAM.policy.p3);
      }
      var v1106 = v2761;
      for (;v1106;) {
        var v1105 = d$$inline_615;
        d$$inline_615 = d$$inline_615 + 1;
        c$$inline_614 = "aswift_" + v1105;
        var v2762 = !c$$inline_614;
        if (!v2762) {
          v2762 = JAM.call(a$$inline_612.getElementById, a$$inline_612, [c$$inline_614], JAM.policy.p3);
        }
        v1106 = v2762;
      }
      b$$inline_613.id = c$$inline_614;
      b$$inline_613.name = c$$inline_614;
      a$$inline_298 = Number(c$$inline_300.google_ad_width);
      c$$inline_300 = Number(c$$inline_300.google_ad_height);
      var JSCompiler_temp_const$$568 = d$$inline_301;
      var JSCompiler_inline_result$$569;
      var a$$inline_617 = b$$inline_299;
      var b$$inline_618 = a$$inline_298;
      var c$$inline_619 = c$$inline_300;
      var d$$inline_620 = ["<iframe"];
      var e$$inline_621;
      for (e$$inline_621 in a$$inline_617) {
        var v1109 = JAM.call(a$$inline_617.hasOwnProperty, a$$inline_617, [e$$inline_621], JAM.policy.p3);
        if (v1109) {
          ib$$1(d$$inline_620, e$$inline_621 + "=" + a$$inline_617[e$$inline_621]);
        }
      }
      JAM.call(d$$inline_620.push, d$$inline_620, ['style="left:0;position:absolute;top:0;"'], JAM.policy.p3);
      JAM.call(d$$inline_620.push, d$$inline_620, ["></iframe>"], JAM.policy.p3);
      d$$inline_620 = JAM.call(d$$inline_620.join, d$$inline_620, [" "], JAM.policy.p3);
      var JSCompiler_inline_result$$744;
      var a$$inline_750 = a$$inline_617.id + "_anchor";
      var b$$inline_751 = b$$inline_618;
      b$$inline_751 = "border:none;height:" + c$$inline_619 + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + b$$inline_751 + "px;background-color:transparent";
      a$$inline_750 = ['<ins style="display:inline-table;', b$$inline_751, '">', '<ins id="', a$$inline_750, '" style="display:block;', b$$inline_751, '">', d$$inline_620, "</ins></ins>"];
      JSCompiler_inline_result$$744 = JAM.call(a$$inline_750.join, a$$inline_750, [""], JAM.policy.p3);
      JSCompiler_inline_result$$569 = a$$inline_617 = JSCompiler_inline_result$$744;
      JAM.set(JSCompiler_temp_const$$568, "innerHTML", JSCompiler_inline_result$$569);
      JSCompiler_inline_result$$68 = b$$inline_299.id;
      return JSCompiler_inline_result$$68;
    }
    Jf(a$$376, b$$297, c$$196, !1, v37);
    return;
  }
  function Ff(a$$372, b$$293, c$$192, d$$121, e$$73) {
    var v1113;
    if (d$$121) {
      v1113 = '"';
    } else {
      v1113 = "";
    }
    d$$121 = v1113;
    var f$$45 = d$$121 + "0" + d$$121;
    a$$372.width = d$$121 + b$$293 + d$$121;
    a$$372.height = d$$121 + c$$192 + d$$121;
    a$$372.frameborder = f$$45;
    if (e$$73) {
      a$$372.src = d$$121 + e$$73 + d$$121;
    }
    a$$372.marginwidth = f$$45;
    a$$372.marginheight = f$$45;
    a$$372.vspace = f$$45;
    a$$372.hspace = f$$45;
    a$$372.allowtransparency = d$$121 + "true" + d$$121;
    a$$372.scrolling = d$$121 + "no" + d$$121;
    return;
  }
  function Df(a$$370) {
    var v1119 = Ja$$1();
    var v3842 = Da$$1();
    var v4482;
    if (a$$370) {
      v4482 = "#" + encodeURIComponent(a$$370);
    } else {
      v4482 = "";
    }
    var v2766 = ["/pagead/html/", v3842, "/r20130906/zrt_lookup.html", v4482];
    return L$$1(v1119, JAM.call(v2766.join, v2766, [""], JAM.policy.p3));
  }
  function Cf(a$$368) {
    function v38(a$$369, d$$120) {
      var v1121 = null != a$$369;
      if (v1121) {
        JAM.call(b$$291.push, b$$291, [" " + d$$120 + '="' + a$$369 + '"'], JAM.policy.p3);
      }
      return;
    }
    var b$$291 = ["<iframe"];
    x$$50(a$$368, v38);
    JAM.call(b$$291.push, b$$291, ["></iframe>"], JAM.policy.p3);
    return JAM.call(b$$291.join, b$$291, [""], JAM.policy.p3);
  }
  function Bf(a$$366, b$$289, c$$190) {
    function v39(a$$367, b$$290) {
      var v1122 = null != a$$367;
      if (v1122) {
        JAM.call(d$$119.setAttribute, d$$119, [b$$290, a$$367], JAM.policy.p3);
      }
      return;
    }
    var d$$119 = JAM.call(a$$366.createElement, a$$366, ["iframe"], JAM.policy.p3);
    x$$50(b$$289, v39);
    if (c$$190) {
      d$$119.style.display = c$$190;
    }
    return d$$119;
  }
  function Af(a$$365, b$$288, c$$189, d$$118) {
    function v40() {
      var e$$72 = !1;
      if (d$$118) {
        var v1123 = qf();
        JAM.call(v1123.al, v1123, [3E4], JAM.policy.p3);
      }
      try {
        var JSCompiler_inline_result$$60;
        var a$$inline_293 = a$$365;
        var b$$inline_294 = b$$288;
        var c$$inline_295 = c$$189;
        var v1124 = a$$inline_293.document;
        var d$$inline_296 = JAM.call(v1124.getElementById, v1124, [b$$inline_294], JAM.policy.p3);
        d$$inline_296 = d$$inline_296.contentWindow;
        if (Kb(d$$inline_296)) {
          var a$$inline_604 = a$$inline_293;
          var b$$inline_605 = b$$inline_294;
          var c$$inline_606 = c$$inline_295;
          var v2769 = a$$inline_604.document;
          a$$inline_604 = JAM.call(v2769.getElementById, v2769, [b$$inline_605], JAM.policy.p3).contentWindow;
          b$$inline_605 = a$$inline_604.document;
          var v2770 = b$$inline_605.body;
          if (v2770) {
            v2770 = b$$inline_605.body.firstChild;
          }
          var v1126 = v2770;
          if (!v1126) {
            JAM.call(b$$inline_605.open, b$$inline_605, [], JAM.policy.p3);
            a$$inline_604.google_async_iframe_close = !0;
            JAM.call(b$$inline_605.write, b$$inline_605, [c$$inline_606], JAM.policy.p3);
          }
        } else {
          var a$$inline_608 = a$$inline_293;
          var c$$inline_610 = c$$inline_295;
          var v2772 = a$$inline_608.document;
          a$$inline_608 = JAM.call(v2772.getElementById, v2772, [b$$inline_294], JAM.policy.p3).contentWindow;
          c$$inline_610 = "javascript:" + ab$$1(c$$inline_610);
          var v1129 = a$$inline_608.location;
          JAM.call(v1129.replace, v1129, [c$$inline_610], JAM.policy.p3);
        }
        JSCompiler_inline_result$$60 = void 0;
        JSCompiler_inline_result$$60;
        e$$72 = !0;
      } catch (f$$44) {
        uf();
      }
      if (e$$72) {
        e$$72 = Oe("google_async_rrc", c$$189);
        var v3846 = new Me(a$$365);
        JAM.call(v3846.set, v3846, [b$$288, Af(a$$365, b$$288, e$$72, !1)], JAM.policy.p3);
      }
      return;
    }
    return v40;
  }
  function zf() {
    var v1131 = "object" == typeof window.ExpandableAdSlotFactory;
    if (v1131) {
      v1131 = "function" == typeof window.ExpandableAdSlotFactory.createIframe;
    }
    return v1131;
  }
  function xf() {
    var a$$363 = "script";
    var v3850 = La$$1();
    var v4486 = ["/pagead/js/", Da$$1(), "/r20130906/show_ads_impl.js"];
    var v1132 = ["<", a$$363, ' src="', L$$1(v3850, JAM.call(v4486.join, v4486, [""], JAM.policy.p3), ""), '"></', a$$363, ">"];
    return JAM.call(v1132.join, v1132, [""], JAM.policy.p3);
  }
  function uf() {
    var a$$362 = hc().google_jobrunner;
    var v1134 = pf(a$$362);
    if (v1134) {
      JAM.call(a$$362.rl, a$$362, [], JAM.policy.p3);
    }
    return;
  }
  function sf(a$$360, b$$286) {
    var v1135 = qf();
    JAM.call(v1135.nqa, v1135, [a$$360, b$$286], JAM.policy.p3);
    return;
  }
  function rf(a$$359, b$$285) {
    var v1136 = qf();
    JAM.call(v1136.nq, v1136, [a$$359, b$$285], JAM.policy.p3);
    return;
  }
  function qf() {
    var v2776 = mf;
    if (v2776) {
      v2776 = of(mf);
    }
    if (v2776) {
      return mf;
    }
    var a$$358 = hc();
    var b$$284 = a$$358.google_jobrunner;
    var v1138;
    if (pf(b$$284)) {
      v1138 = mf = b$$284;
    } else {
      v1138 = a$$358.google_jobrunner = mf = new U$$1(a$$358);
    }
    return v1138;
  }
  function pf(a$$357) {
    var v4823 = gb$$1(a$$357);
    if (v4823) {
      v4823 = of(a$$357);
    }
    var v4487 = v4823;
    if (v4487) {
      v4487 = fb$$1(a$$357.nq);
    }
    var v3852 = v4487;
    if (v3852) {
      v3852 = fb$$1(a$$357.nqa);
    }
    var v2779 = v3852;
    if (v2779) {
      v2779 = fb$$1(a$$357.al);
    }
    var v1139 = v2779;
    if (v1139) {
      v1139 = fb$$1(a$$357.rl);
    }
    return v1139;
  }
  function of(a$$356) {
    try {
      return JAM.call(a$$356.sz, a$$356, [], JAM.policy.p3);
    } catch (b$$283) {
      return!1;
    }
    return;
  }
  function nf(a$$349, b$$278) {
    this.fn = a$$349;
    this.win = b$$278;
    return;
  }
  function U$$1(a$$348) {
    this.oa = [];
    this.p = a$$348 || window;
    this.j = 0;
    this.na = null;
    return;
  }
  function cf(a$$346) {
    var b$$277 = af();
    if (b$$277) {
      return{url:b$$277, isTopUrl:!0};
    }
    b$$277 = a$$346.location.href;
    if (a$$346 == a$$346.top) {
      return{url:b$$277, isTopUrl:!0};
    }
    var c$$187 = !1;
    var d$$117 = a$$346.document;
    var v2782 = d$$117;
    if (v2782) {
      v2782 = d$$117.referrer;
    }
    var v1144 = v2782;
    if (v1144) {
      b$$277 = d$$117.referrer;
      var v3854 = a$$346.parent == a$$346.top;
      if (v3854) {
        c$$187 = !0;
      }
    }
    var v3855 = a$$346 = a$$346.location.ancestorOrigins;
    if (v3855) {
      v3855 = a$$346 = a$$346[a$$346.length - 1];
    }
    var v2783 = v3855;
    if (v2783) {
      v2783 = -1 == JAM.call(b$$277.indexOf, b$$277, [a$$346], JAM.policy.p3);
    }
    var v1145 = v2783;
    if (v1145) {
      c$$187 = !1;
      b$$277 = a$$346;
    }
    return{url:b$$277, isTopUrl:c$$187};
  }
  function af(a$$345) {
    var b$$276 = D$$1().google_top_values;
    if (b$$276) {
      var c$$186 = b$$276[3];
      if (a$$345) {
        c$$186 = b$$276[4];
      }
      if (c$$186) {
        return c$$186 + "";
      }
    }
    return null;
  }
  function Ye() {
    var v1147 = H$$1();
    var a$$344 = JAM.call(v1147.m, v1147, [10], JAM.policy.p3);
    var b$$275 = K$$1.PERISCOPE_FOR_TARGETING;
    return a$$344 === b$$275.EXPERIMENT_REFERER_CLEANUP;
  }
  function Xe(a$$343) {
    var v3857 = a$$343.webkitVisibilityState;
    if (!v3857) {
      v3857 = a$$343.mozVisibilityState;
    }
    var v2784 = v3857;
    if (!v2784) {
      v2784 = a$$343.visibilityState;
    }
    var v1149 = v2784;
    if (!v1149) {
      v1149 = "";
    }
    a$$343 = v1149;
    var b$$274 = {visible:1, hidden:2, prerender:3, preview:4};
    var v1150 = b$$274[a$$343];
    if (!v1150) {
      v1150 = 0;
    }
    return v1150;
  }
  function Ve(a$$337, b$$268, c$$180) {
    if (n$$2(b$$268)) {
      var d$$112 = 0;
      var v1152 = d$$112 < b$$268.length;
      for (;v1152;) {
        Ve(a$$337, String(b$$268[d$$112]), c$$180);
        d$$112 = d$$112 + 1;
        v1152 = d$$112 < b$$268.length;
      }
    } else {
      var v1153 = null != b$$268;
      if (v1153) {
        var v3859;
        if ("" === b$$268) {
          v3859 = "";
        } else {
          v3859 = "=";
        }
        JAM.call(c$$180.push, c$$180, ["&", a$$337, v3859, encodeURIComponent(String(b$$268))], JAM.policy.p3);
      }
    }
    return;
  }
  function Re(a$$333) {
    if (Se) {
      Se = !1;
      var a$$inline_253 = m$$3.location;
      if (a$$inline_253) {
        var b$$inline_254 = a$$inline_253.href;
        var JSCompiler_temp$$560;
        if (JSCompiler_temp$$560 = b$$inline_254) {
          var JSCompiler_inline_result$$561;
          var v1155 = Re(b$$inline_254)[3];
          if (!v1155) {
            v1155 = null;
          }
          var a$$inline_602 = v1155;
          var v1156 = a$$inline_602;
          if (v1156) {
            v1156 = decodeURIComponent(a$$inline_602);
          }
          JSCompiler_inline_result$$561 = v1156;
          JSCompiler_temp$$560 = b$$inline_254 = JSCompiler_inline_result$$561;
        }
        var v2794 = JSCompiler_temp$$560;
        if (v2794) {
          v2794 = b$$inline_254 != a$$inline_253.hostname;
        }
        if (v2794) {
          Se = !0;
          throw Error();
        }
      }
    }
    return JAM.call(a$$333.match, a$$333, [Pe], JAM.policy.p3);
  }
  function Oe(a$$332, b$$265) {
    var c$$178 = RegExp("\\b" + a$$332 + "=(\\d+)");
    var d$$111 = JAM.call(c$$178.exec, c$$178, [b$$265], JAM.policy.p3);
    if (d$$111) {
      var v3862 = +d$$111[1] + 1;
      if (!v3862) {
        v3862 = 1;
      }
      d$$111 = v3862;
      b$$265 = JAM.call(b$$265.replace, b$$265, [c$$178, a$$332 + "=" + d$$111], JAM.policy.p3);
    }
    return b$$265;
  }
  function Me(a$$328) {
    this.p = a$$328;
    var v1160 = a$$328.google_iframe_oncopy;
    if (!v1160) {
      a$$328.google_iframe_oncopy = {handlers:{}, upd:JAM.call(r$$2, null, [this.Qc, this], JAM.policy.p3)};
    }
    this.hd = a$$328.google_iframe_oncopy;
    return;
  }
  function Le(a$$327) {
    var b$$261 = Ge;
    var v2798 = a$$327 == b$$261.PARALLEL_CANCEL_ON_NO_AD;
    if (!v2798) {
      v2798 = a$$327 == b$$261.IFRAME_SIGNALING;
    }
    var v1161 = v2798;
    if (!v1161) {
      v1161 = a$$327 == b$$261.ALWAYS_ZRT;
    }
    return v1161;
  }
  function Ke(a$$326) {
    try {
      var b$$260 = JAM.call(Ie.test, Ie, [a$$326.location.host], JAM.policy.p3);
      var v4499 = !a$$326.postMessage;
      if (!v4499) {
        v4499 = !a$$326.localStorage;
      }
      var v3868 = v4499;
      if (!v3868) {
        v3868 = !a$$326.JSON;
      }
      var v2802 = v3868;
      if (!v2802) {
        v2802 = b$$260;
      }
      return!v2802;
    } catch (c$$176) {
      return!1;
    }
    return;
  }
  function Ee(a$$323) {
    function v41(a$$324, b$$258) {
      if (null != a$$324) {
        var f$$41;
        try {
          var v1164 = new Be;
          f$$41 = JAM.call(v1164.serialize, v1164, [a$$324], JAM.policy.p3);
        } catch (g$$26) {
        }
        if (f$$41) {
          ib$$1(c$$174, b$$258, "=", f$$41, ";");
        }
      }
      return;
    }
    var b$$257 = "google_page_url";
    var v1166 = a$$323[b$$257];
    if (v1166) {
      var v2803 = a$$323;
      var v2804 = b$$257;
      var v5187 = String(a$$323[b$$257]);
      JAM.set(v2803, v2804, v5187, JAM.policy.p2);
    }
    var c$$174 = [];
    x$$50(a$$323, v41);
    return JAM.call(c$$174.join, c$$174, [""], JAM.policy.p3);
  }
  function Be() {
    return;
  }
  function we(a$$312) {
    function v42(a$$313, d$$106) {
      var v2805 = 0 === a$$313;
      if (!v2805) {
        v2805 = a$$313;
      }
      if (v2805) {
        var v2806 = b$$247;
        var v3872 = "&" + d$$106 + "=";
        var v4503;
        if ("function" == typeof encodeURIComponent) {
          v4503 = encodeURIComponent(a$$313);
        } else {
          v4503 = escape(a$$313);
        }
        b$$247 = v2806 + (v3872 + v4503);
      }
      return;
    }
    var b$$247 = "";
    x$$50(a$$312, v42);
    return b$$247;
  }
  function ye(a$$310, b$$246, c$$170, d$$105) {
    function v43(e$$65) {
      e$$65 = ga$$1(b$$246, e$$65);
      var f$$40 = d$$105 || ve;
      te(a$$310, f$$40, e$$65, c$$170);
      return;
    }
    return v43;
  }
  function xe(a$$309, b$$245, c$$169, d$$104) {
    return ga$$1(te, a$$309, d$$104 || ve, b$$245, c$$169);
  }
  function ue(a$$307) {
    function v44(a$$308, d$$103) {
      JAM.set(b$$244, d$$103, w$$6[a$$308], JAM.policy.p2);
      return;
    }
    var b$$244 = a$$307 || {};
    x$$50(pe, v44);
    return b$$244;
  }
  function se(a$$306, b$$243, c$$168) {
    c$$168 = c$$168 || .01;
    var v1169 = JAM.call(Math.random, Math, [], JAM.policy.p3) < c$$168;
    if (v1169) {
      a$$306 = "/pagead/gen_204?id=" + a$$306 + we(b$$243);
      a$$306 = L$$1(ma$$1("", "googlesyndication"), a$$306);
      a$$306 = JAM.call(a$$306.substring, a$$306, [0, 2E3], JAM.policy.p3);
      nb$$1(w$$6, a$$306);
    }
    return;
  }
  function ve(a$$305, b$$242, c$$167, d$$102, e$$64) {
    var f$$39 = v$$1;
    var v2809;
    if (Ea$$1) {
      v2809 = 1;
    } else {
      v2809 = 0;
    }
    var v1170 = v2809;
    var v2810;
    if (Fa$$1) {
      v2810 = 1;
    } else {
      v2810 = 0;
    }
    var v1171 = v2810;
    var v1172 = JAM.call(b$$242.substring, b$$242, [0, 512], JAM.policy.p3);
    var v2811 = e$$64;
    if (v2811) {
      v2811 = JAM.call(e$$64.substring, e$$64, [0, 40], JAM.policy.p3);
    }
    var v1173 = v2811;
    var v1174 = JAM.call(d$$102.toString, d$$102, [], JAM.policy.p3);
    var v2812 = f$$39.URL;
    var v1175 = JAM.call(v2812.substring, v2812, [0, 512], JAM.policy.p3);
    var v2813 = f$$39.referrer;
    a$$305 = {jscb:v1170, jscd:v1171, context:a$$305, msg:v1172, eid:v1173, file:c$$167, line:v1174, url:v1175, ref:JAM.call(v2813.substring, v2813, [0, 512], JAM.policy.p3)};
    ue(a$$305);
    se("jserror", a$$305);
    return!Ga$$1;
  }
  function te(a$$304, b$$241, c$$166, d$$101) {
    try {
      JAM.call(c$$166, null, [], JAM.policy.p3);
    } catch (e$$63) {
      c$$166 = !Ga$$1;
      try {
        var f$$38 = JAM.call(e$$63.toString, e$$63, [], JAM.policy.p3);
        var v2814 = e$$63.name;
        if (v2814) {
          v2814 = -1 == JAM.call(f$$38.indexOf, f$$38, [e$$63.name], JAM.policy.p3);
        }
        var v1177 = v2814;
        if (v1177) {
          f$$38 = f$$38 + (": " + e$$63.name);
        }
        var v2815 = e$$63.message;
        if (v2815) {
          v2815 = -1 == JAM.call(f$$38.indexOf, f$$38, [e$$63.message], JAM.policy.p3);
        }
        var v1178 = v2815;
        if (v1178) {
          f$$38 = f$$38 + (": " + e$$63.message);
        }
        if (e$$63.stack) {
          JSCompiler_inline_label_qe_241: {
            var a$$inline_237 = e$$63.stack;
            var b$$inline_238 = f$$38;
            try {
              var v1179 = -1 == JAM.call(a$$inline_237.indexOf, a$$inline_237, [b$$inline_238], JAM.policy.p3);
              if (v1179) {
                a$$inline_237 = b$$inline_238 + "\n" + a$$inline_237;
              }
              var c$$inline_239;
              var v1180 = a$$inline_237 != c$$inline_239;
              for (;v1180;) {
                c$$inline_239 = a$$inline_237;
                a$$inline_237 = JAM.call(a$$inline_237.replace, a$$inline_237, [/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"], JAM.policy.p3);
                v1180 = a$$inline_237 != c$$inline_239;
              }
              f$$38 = JAM.call(a$$inline_237.replace, a$$inline_237, [/\n */g, "\n"], JAM.policy.p3);
            } catch (d$$inline_240) {
              f$$38 = b$$inline_238;
            }
          }
        }
        var g$$25 = "";
        var v1182 = e$$63.fileName;
        if (v1182) {
          g$$25 = e$$63.fileName;
        }
        var h$$18 = -1;
        var v1183 = e$$63.lineNumber;
        if (v1183) {
          h$$18 = e$$63.lineNumber;
        }
        var k$$7;
        JSCompiler_inline_label_re_244: {
          try {
            var v1184;
            if (d$$101) {
              v1184 = JAM.call(d$$101, null, [], JAM.policy.p3);
            } else {
              v1184 = "";
            }
            k$$7 = v1184;
            break JSCompiler_inline_label_re_244;
          } catch (b$$inline_243) {
          }
          k$$7 = "";
        }
        c$$166 = JAM.call(b$$241, null, [a$$304, f$$38, g$$25, h$$18, k$$7], JAM.policy.p3);
      } catch (l$$10) {
        var v3878 = JAM.call(l$$10.toString, l$$10, [], JAM.policy.p3) + "\n";
        var v4509 = l$$10.stack;
        if (!v4509) {
          v4509 = "";
        }
        se("jserror", {context:"protectAndRun", msg:v3878 + v4509});
      }
      if (!c$$166) {
        throw e$$63;
      }
    }
    return;
  }
  function le(a$$301, b$$238, c$$164, d$$99, e$$61) {
    this.nb = a$$301;
    this.fd = b$$238;
    this.ld = c$$164;
    this.kb = d$$99;
    this.Vb = this.lb = !1;
    this.Yc = e$$61 || null;
    return;
  }
  function me() {
    var a$$300 = D$$1();
    var b$$237 = a$$300.__google_ad_urls;
    if (!b$$237) {
      var v1187 = a$$300;
      var v5188 = new S$$1(a$$300);
      return v1187.__google_ad_urls = v5188;
    }
    try {
      if (JAM.call(b$$237.getOseId, b$$237, [], JAM.policy.p3)) {
        return b$$237;
      }
    } catch (c$$163) {
    }
    var v1190 = a$$300;
    var v5189 = new S$$1(a$$300, b$$237);
    return v1190.__google_ad_urls = v5189;
  }
  function ke(a$$293, b$$229, c$$156, d$$93) {
    var v2819;
    if (a$$293) {
      v2819 = "https";
    } else {
      v2819 = "http";
    }
    he = L$$1(b$$229, "/pagead/osd.js", v2819);
    ie = c$$156;
    je = d$$93;
    return;
  }
  function S$$1(a$$292, b$$228) {
    this.wa = a$$292;
    var v1192;
    if (b$$228) {
      v1192 = b$$228.ha;
    } else {
      v1192 = [];
    }
    this.ha = v1192;
    var v1193;
    if (b$$228) {
      v1193 = b$$228.Ua;
    } else {
      v1193 = !1;
    }
    this.Ua = v1193;
    var v1194;
    if (b$$228) {
      v1194 = b$$228.Db;
    } else {
      v1194 = "";
    }
    this.Db = v1194;
    var v1195;
    if (b$$228) {
      v1195 = b$$228.Wa;
    } else {
      v1195 = 0;
    }
    this.Wa = v1195;
    var v1196;
    if (b$$228) {
      v1196 = b$$228.Aa;
    } else {
      v1196 = "";
    }
    this.Aa = v1196;
    var v1197;
    if (b$$228) {
      v1197 = b$$228.q;
    } else {
      v1197 = [];
    }
    this.q = v1197;
    this.xa = null;
    this.Lb = !1;
    return;
  }
  function fe(a$$290, b$$227) {
    function v45() {
      var v1198 = "complete" == a$$290.readyState;
      if (v1198) {
        JAM.call(b$$227, null, [], JAM.policy.p3);
      }
      return;
    }
    if (rb$$1()) {
      var c$$155 = v45;
      y$$31(a$$290, "readystatechange", c$$155);
    } else {
      y$$31(a$$290, "load", b$$227);
    }
    return;
  }
  function de(a$$288, b$$225) {
    var c$$153 = b$$225 || w$$6;
    var v2821 = a$$288;
    if (v2821) {
      v2821 = c$$153.top != c$$153;
    }
    var v1200 = v2821;
    if (v1200) {
      c$$153 = c$$153.top;
    }
    try {
      var JSCompiler_temp$$0;
      var v2822 = c$$153.document;
      if (v2822) {
        v2822 = !c$$153.document.body;
      }
      if (v2822) {
        JSCompiler_temp$$0 = new u$$2(-1, -1);
      } else {
        var a$$inline_183 = c$$153 || window;
        a$$inline_183 = a$$inline_183.document;
        var v1201;
        if ("CSS1Compat" == a$$inline_183.compatMode) {
          v1201 = a$$inline_183.documentElement;
        } else {
          v1201 = a$$inline_183.body;
        }
        a$$inline_183 = v1201;
        JSCompiler_temp$$0 = new u$$2(a$$inline_183.clientWidth, a$$inline_183.clientHeight);
      }
      return JSCompiler_temp$$0;
    } catch (d$$92) {
      return new u$$2(-12245933, -12245933);
    }
    return;
  }
  function ce(a$$287, b$$224) {
    if (a$$287) {
      var c$$152 = JAM.call(a$$287.match, a$$287, [b$$224 + "=([^&]+)"], JAM.policy.p3);
      var v2824 = c$$152;
      if (v2824) {
        v2824 = 2 == c$$152.length;
      }
      if (v2824) {
        return c$$152[1];
      }
    }
    return "";
  }
  function be(a$$286, b$$223, c$$151, d$$91, e$$57) {
    var JSCompiler_temp$$12;
    if (e$$57) {
      var b$$inline_175 = b$$223;
      b$$inline_175 = "&" + b$$inline_175 + "=" + c$$151;
      JSCompiler_temp$$12 = a$$286 + b$$inline_175;
    } else {
      var a$$inline_178 = a$$286;
      var b$$inline_179 = b$$223;
      var c$$inline_180 = c$$151;
      var d$$inline_181 = "&" + b$$inline_179 + "=";
      b$$inline_179 = JAM.call(a$$inline_178.indexOf, a$$inline_178, [d$$inline_181], JAM.policy.p3);
      var v1209;
      if (0 > b$$inline_179) {
        v1209 = a$$inline_178 = a$$inline_178 + d$$inline_181 + c$$inline_180;
      } else {
        b$$inline_179 = b$$inline_179 + d$$inline_181.length;
        d$$inline_181 = JAM.call(a$$inline_178.indexOf, a$$inline_178, ["&", b$$inline_179], JAM.policy.p3);
        var v3884;
        if (0 <= d$$inline_181) {
          v3884 = JAM.call(a$$inline_178.substring, a$$inline_178, [0, b$$inline_179], JAM.policy.p3) + c$$inline_180 + JAM.call(a$$inline_178.substring, a$$inline_178, [d$$inline_181], JAM.policy.p3);
        } else {
          v3884 = JAM.call(a$$inline_178.substring, a$$inline_178, [0, b$$inline_179], JAM.policy.p3) + c$$inline_180;
        }
        v1209 = a$$inline_178 = v3884;
      }
      v1209;
      JSCompiler_temp$$12 = a$$inline_178;
    }
    c$$151 = JSCompiler_temp$$12;
    var v1210;
    if (2E3 < c$$151.length) {
      var v2828;
      if (void 0 !== d$$91) {
        v2828 = be(a$$286, b$$223, d$$91, void 0, e$$57);
      } else {
        v2828 = a$$286;
      }
      v1210 = v2828;
    } else {
      v1210 = c$$151;
    }
    return v1210;
  }
  function Zd(a$$282, b$$220, c$$148, d$$89) {
    function v46(a$$283) {
      return a$$283;
    }
    var v3888;
    if (c$$148) {
      v3888 = "google_debug&";
    } else {
      v3888 = "";
    }
    var v1211 = [v3888, "xpc=", b$$220, "&p=", encodeURIComponent(v$$1.location.protocol), "//", encodeURIComponent(v$$1.location.host)];
    b$$220 = JAM.call(v1211.join, v1211, [""], JAM.policy.p3);
    var v1212;
    if (d$$89) {
      v1212 = encodeURIComponent;
    } else {
      v1212 = v46;
    }
    d$$89 = v1212;
    var v2833 = a$$282;
    var v3891;
    if (-1 == JAM.call(a$$282.indexOf, a$$282, [JAM.call(d$$89, null, ["?"], JAM.policy.p3)], JAM.policy.p3)) {
      v3891 = JAM.call(d$$89, null, ["?"], JAM.policy.p3);
    } else {
      v3891 = JAM.call(d$$89, null, ["&"], JAM.policy.p3);
    }
    return v2833 + v3891 + JAM.call(d$$89, null, [b$$220], JAM.policy.p3);
  }
  function Yd(a$$281, b$$219, c$$147, d$$88, e$$56, f$$33, g$$21, h$$14) {
    return{a:a$$281, b:b$$219, c:c$$147, d:d$$88, e:e$$56, f:f$$33, g:g$$21, h:h$$14};
  }
  function Wd(a$$279) {
    var b$$217 = R$$1(a$$279, "fontSize");
    var c$$145;
    var a$$inline_169 = b$$217;
    var v2835 = a$$inline_169 = JAM.call(a$$inline_169.match, a$$inline_169, [Sd], JAM.policy.p3);
    if (v2835) {
      v2835 = a$$inline_169[0];
    }
    var v1215 = v2835;
    if (!v1215) {
      v1215 = null;
    }
    c$$145 = v1215;
    var v2837 = b$$217;
    if (v2837) {
      v2837 = "px" == c$$145;
    }
    if (v2837) {
      return parseInt(b$$217, 10);
    }
    if (N$$1) {
      if (c$$145 in Ud) {
        return Od(a$$279, b$$217, "left", "pixelLeft");
      }
      var v3892 = a$$279.parentNode;
      if (v3892) {
        v3892 = 1 == a$$279.parentNode.nodeType;
      }
      var v2838 = v3892;
      if (v2838) {
        v2838 = c$$145 in Vd;
      }
      if (v2838) {
        a$$279 = a$$279.parentNode;
        c$$145 = R$$1(a$$279, "fontSize");
        var v3893;
        if (b$$217 == c$$145) {
          v3893 = "1em";
        } else {
          v3893 = b$$217;
        }
        return Od(a$$279, v3893, "left", "pixelLeft");
      }
    }
    c$$145 = kd("span", {style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});
    JAM.call(a$$279.appendChild, a$$279, [c$$145], JAM.policy.p3);
    b$$217 = c$$145.offsetHeight;
    qd(c$$145);
    return b$$217;
  }
  function Qd(a$$276, b$$215) {
    if (N$$1) {
      var c$$143 = Pd(a$$276, b$$215 + "Left");
      var d$$86 = Pd(a$$276, b$$215 + "Right");
      var e$$55 = Pd(a$$276, b$$215 + "Top");
      var f$$32 = Pd(a$$276, b$$215 + "Bottom");
      return new P$$1(e$$55, d$$86, f$$32, c$$143);
    }
    c$$143 = yd(a$$276, b$$215 + "Left");
    d$$86 = yd(a$$276, b$$215 + "Right");
    e$$55 = yd(a$$276, b$$215 + "Top");
    f$$32 = yd(a$$276, b$$215 + "Bottom");
    return new P$$1(parseFloat(e$$55), parseFloat(d$$86), parseFloat(f$$32), parseFloat(c$$143));
  }
  function Pd(a$$275, b$$214) {
    var v1232;
    if (a$$275.currentStyle) {
      v1232 = a$$275.currentStyle[b$$214];
    } else {
      v1232 = null;
    }
    var c$$142 = v1232;
    var v1233;
    if (c$$142) {
      v1233 = Od(a$$275, c$$142, "left", "pixelLeft");
    } else {
      v1233 = 0;
    }
    return v1233;
  }
  function Od(a$$274, b$$213, c$$141, d$$85) {
    if (JAM.call(/^\d+px?$/.test, /^\d+px?$/, [b$$213], JAM.policy.p3)) {
      return parseInt(b$$213, 10);
    }
    var e$$54 = a$$274.style[c$$141];
    var f$$31 = a$$274.runtimeStyle[c$$141];
    JAM.set(a$$274.runtimeStyle, c$$141, a$$274.currentStyle[c$$141], JAM.policy.p2);
    JAM.set(a$$274.style, c$$141, b$$213, JAM.policy.p2);
    b$$213 = a$$274.style[d$$85];
    JAM.set(a$$274.style, c$$141, e$$54, JAM.policy.p2);
    JAM.set(a$$274.runtimeStyle, c$$141, f$$31, JAM.policy.p2);
    return b$$213;
  }
  function Nd(a$$273, b$$212) {
    var c$$140 = a$$273.style;
    var v1242;
    if ("opacity" in c$$140) {
      v1242 = c$$140.opacity = b$$212;
    } else {
      var v2843;
      if ("MozOpacity" in c$$140) {
        v2843 = c$$140.MozOpacity = b$$212;
      } else {
        var v3894 = "filter" in c$$140;
        if (v3894) {
          var v4521;
          if ("" === b$$212) {
            v4521 = "";
          } else {
            v4521 = "alpha(opacity=" + 100 * b$$212 + ")";
          }
          v3894 = c$$140.filter = v4521;
        }
        v2843 = v3894;
      }
      v1242 = v2843;
    }
    v1242;
    return;
  }
  function Md(a$$272) {
    var b$$211 = a$$272.style;
    a$$272 = "";
    var v1243;
    if ("opacity" in b$$211) {
      v1243 = a$$272 = b$$211.opacity;
    } else {
      var v2845;
      if ("MozOpacity" in b$$211) {
        v2845 = a$$272 = b$$211.MozOpacity;
      } else {
        var v4522 = "filter" in b$$211;
        if (v4522) {
          var v4841 = b$$211.filter;
          v4522 = b$$211 = JAM.call(v4841.match, v4841, [/alpha\(opacity=([\d.]+)\)/], JAM.policy.p3);
        }
        var v3896 = v4522;
        if (v3896) {
          v3896 = a$$272 = String(b$$211[1] / 100);
        }
        v2845 = v3896;
      }
      v1243 = v2845;
    }
    v1243;
    var v1244;
    if ("" == a$$272) {
      v1244 = a$$272;
    } else {
      v1244 = Number(a$$272);
    }
    return v1244;
  }
  function Ld(a$$271) {
    var b$$210 = a$$271.offsetWidth;
    var c$$139 = a$$271.offsetHeight;
    var v2848 = Pc;
    if (v2848) {
      v2848 = !b$$210;
    }
    var v1245 = v2848;
    if (v1245) {
      v1245 = !c$$139;
    }
    var d$$84 = v1245;
    var v1246;
    var v4524 = void 0 === b$$210;
    if (!v4524) {
      v4524 = d$$84;
    }
    var v3898 = v4524;
    if (v3898) {
      v3898 = a$$271.getBoundingClientRect;
    }
    if (v3898) {
      a$$271 = Ad(a$$271);
      v1246 = new u$$2(a$$271.right - a$$271.left, a$$271.bottom - a$$271.top);
    } else {
      v1246 = new u$$2(b$$210, c$$139);
    }
    return v1246;
  }
  function Jd(a$$267, b$$206) {
    var v1247 = "number" == typeof a$$267;
    if (v1247) {
      var v3901;
      if (b$$206) {
        v3901 = JAM.call(Math.round, Math, [a$$267], JAM.policy.p3);
      } else {
        v3901 = a$$267;
      }
      a$$267 = v3901 + "px";
    }
    return a$$267;
  }
  function Id(a$$266, b$$205, c$$137) {
    if (b$$205 instanceof u$$2) {
      c$$137 = b$$205.height;
      b$$205 = b$$205.width;
    } else {
      if (void 0 == c$$137) {
        throw Error("missing height argument");
      }
    }
    var v1250 = a$$266.style;
    var v5190 = Jd(b$$205, !0);
    v1250.width = v5190;
    var v1251 = a$$266.style;
    var v5191 = Jd(c$$137, !0);
    v1251.height = v5191;
    return;
  }
  function Cd(a$$263) {
    var b$$202;
    var c$$134 = cd(a$$263);
    var d$$81 = R$$1(a$$263, "position");
    var v4845 = Oc;
    if (v4845) {
      v4845 = c$$134.getBoxObjectFor;
    }
    var v4529 = v4845;
    if (v4529) {
      v4529 = !a$$263.getBoundingClientRect;
    }
    var v3902 = v4529;
    if (v3902) {
      v3902 = "absolute" == d$$81;
    }
    var v2855 = v3902;
    if (v2855) {
      v2855 = b$$202 = JAM.call(c$$134.getBoxObjectFor, c$$134, [a$$263], JAM.policy.p3);
    }
    var v1252 = v2855;
    if (v1252) {
      var v2856 = 0 > b$$202.screenX;
      if (!v2856) {
        v2856 = 0 > b$$202.screenY;
      }
      v1252 = v2856;
    }
    var e$$51 = v1252;
    var f$$28 = new M$$1(0, 0);
    var g$$19;
    var a$$inline_149 = c$$134;
    var v1253;
    if (a$$inline_149) {
      v1253 = cd(a$$inline_149);
    } else {
      v1253 = document;
    }
    a$$inline_149 = v1253;
    var v1254;
    var v4530 = !N$$1;
    if (!v4530) {
      var v4847 = N$$1;
      if (v4847) {
        v4847 = 9 <= Vc;
      }
      v4530 = v4847;
    }
    var v3906 = v4530;
    if (!v3906) {
      var v4531 = dd(a$$inline_149);
      v3906 = JAM.call(v4531.$b, v4531, [], JAM.policy.p3);
    }
    if (v3906) {
      v1254 = a$$inline_149.documentElement;
    } else {
      v1254 = a$$inline_149.body;
    }
    g$$19 = v1254;
    if (a$$263 == g$$19) {
      return f$$28;
    }
    if (a$$263.getBoundingClientRect) {
      b$$202 = Ad(a$$263);
      var v4533 = dd(c$$134);
      a$$263 = JAM.call(v4533.Ja, v4533, [], JAM.policy.p3);
      f$$28.x = b$$202.left + a$$263.x;
      f$$28.y = b$$202.top + a$$263.y;
    } else {
      var v2860 = c$$134.getBoxObjectFor;
      if (v2860) {
        v2860 = !e$$51;
      }
      if (v2860) {
        b$$202 = JAM.call(c$$134.getBoxObjectFor, c$$134, [a$$263], JAM.policy.p3);
        a$$263 = JAM.call(c$$134.getBoxObjectFor, c$$134, [g$$19], JAM.policy.p3);
        f$$28.x = b$$202.screenX - a$$263.screenX;
        f$$28.y = b$$202.screenY - a$$263.screenY;
      } else {
        b$$202 = a$$263;
        var v2863 = b$$202;
        if (v2863) {
          v2863 = b$$202 != a$$263;
        }
        var v1258 = v2863;
        do {
          f$$28.x = f$$28.x + b$$202.offsetLeft;
          f$$28.y = f$$28.y + b$$202.offsetTop;
          var v1256 = b$$202 != a$$263;
          if (v1256) {
            var v4534 = f$$28.x;
            var v4849 = b$$202.clientLeft;
            if (!v4849) {
              v4849 = 0;
            }
            f$$28.x = v4534 + v4849;
            var v4536 = f$$28.y;
            var v4850 = b$$202.clientTop;
            if (!v4850) {
              v4850 = 0;
            }
            f$$28.y = v4536 + v4850;
          }
          var v2868 = Pc;
          if (v2868) {
            v2868 = "fixed" == R$$1(b$$202, "position");
          }
          if (v2868) {
            f$$28.x = f$$28.x + c$$134.body.scrollLeft;
            f$$28.y = f$$28.y + c$$134.body.scrollTop;
            break;
          }
          b$$202 = b$$202.offsetParent;
          var v2873 = b$$202;
          if (v2873) {
            v2873 = b$$202 != a$$263;
          }
          v1258 = v2873;
        } while (v1258);
        var v2874 = Nc;
        if (!v2874) {
          var v3914 = Pc;
          if (v3914) {
            v3914 = "absolute" == d$$81;
          }
          v2874 = v3914;
        }
        if (v2874) {
          f$$28.y = f$$28.y - c$$134.body.offsetTop;
        }
        b$$202 = a$$263;
        var v3917 = b$$202 = Bd(b$$202);
        if (v3917) {
          v3917 = b$$202 != c$$134.body;
        }
        var v2877 = v3917;
        if (v2877) {
          v2877 = b$$202 != g$$19;
        }
        var v1260 = v2877;
        for (;v1260;) {
          f$$28.x = f$$28.x - b$$202.scrollLeft;
          var v3920 = Nc;
          if (v3920) {
            v3920 = "TR" == b$$202.tagName;
          }
          var v2878 = v3920;
          if (!v2878) {
            f$$28.y = f$$28.y - b$$202.scrollTop;
          }
          var v3922 = b$$202 = Bd(b$$202);
          if (v3922) {
            v3922 = b$$202 != c$$134.body;
          }
          var v2879 = v3922;
          if (v2879) {
            v2879 = b$$202 != g$$19;
          }
          v1260 = v2879;
        }
      }
    }
    return f$$28;
  }
  function Bd(a$$262) {
    var v2880 = N$$1;
    if (v2880) {
      var v4543 = N$$1;
      if (v4543) {
        v4543 = 8 <= Vc;
      }
      v2880 = !v4543;
    }
    if (v2880) {
      return a$$262.offsetParent;
    }
    var b$$201 = cd(a$$262);
    var c$$133 = R$$1(a$$262, "position");
    var v1264 = "fixed" == c$$133;
    if (!v1264) {
      v1264 = "absolute" == c$$133;
    }
    var d$$80 = v1264;
    a$$262 = a$$262.parentNode;
    var v2882 = a$$262;
    if (v2882) {
      v2882 = a$$262 != b$$201;
    }
    var v1266 = v2882;
    for (;v1266;) {
      c$$133 = R$$1(a$$262, "position");
      var v5013 = d$$80;
      if (v5013) {
        v5013 = "static" == c$$133;
      }
      var v4851 = v5013;
      if (v4851) {
        v4851 = a$$262 != b$$201.documentElement;
      }
      var v4544 = v4851;
      if (v4544) {
        v4544 = a$$262 != b$$201.body;
      }
      d$$80 = v4544;
      var v3924 = !d$$80;
      if (v3924) {
        var v5066 = a$$262.scrollWidth > a$$262.clientWidth;
        if (!v5066) {
          v5066 = a$$262.scrollHeight > a$$262.clientHeight;
        }
        var v5015 = v5066;
        if (!v5015) {
          v5015 = "fixed" == c$$133;
        }
        var v4853 = v5015;
        if (!v4853) {
          v4853 = "absolute" == c$$133;
        }
        var v4545 = v4853;
        if (!v4545) {
          v4545 = "relative" == c$$133;
        }
        v3924 = v4545;
      }
      if (v3924) {
        return a$$262;
      }
      a$$262 = a$$262.parentNode;
      var v2883 = a$$262;
      if (v2883) {
        v2883 = a$$262 != b$$201;
      }
      v1266 = v2883;
    }
    return null;
  }
  function Ad(a$$261) {
    var b$$200;
    try {
      b$$200 = JAM.call(a$$261.getBoundingClientRect, a$$261, [], JAM.policy.p3);
    } catch (c$$132) {
      return{left:0, top:0, right:0, bottom:0};
    }
    var v2884 = N$$1;
    if (v2884) {
      v2884 = a$$261.ownerDocument.body;
    }
    var v1267 = v2884;
    if (v1267) {
      a$$261 = a$$261.ownerDocument;
      b$$200.left = b$$200.left - (a$$261.documentElement.clientLeft + a$$261.body.clientLeft);
      b$$200.top = b$$200.top - (a$$261.documentElement.clientTop + a$$261.body.clientTop);
    }
    return b$$200;
  }
  function R$$1(a$$259, b$$199) {
    var v2885 = yd(a$$259, b$$199);
    if (!v2885) {
      var v3926;
      if (a$$259.currentStyle) {
        v3926 = a$$259.currentStyle[b$$199];
      } else {
        v3926 = null;
      }
      v2885 = v3926;
    }
    var v1268 = v2885;
    if (!v1268) {
      var v2886 = a$$259.style;
      if (v2886) {
        v2886 = a$$259.style[b$$199];
      }
      v1268 = v2886;
    }
    return v1268;
  }
  function yd(a$$258, b$$198) {
    var c$$131 = cd(a$$258);
    var v1269;
    var v4550 = c$$131.defaultView;
    if (v4550) {
      v4550 = c$$131.defaultView.getComputedStyle;
    }
    var v3929 = v4550;
    if (v3929) {
      var v4551 = c$$131.defaultView;
      v3929 = c$$131 = JAM.call(v4551.getComputedStyle, v4551, [a$$258, null], JAM.policy.p3);
    }
    if (v3929) {
      var v3930 = c$$131[b$$198];
      if (!v3930) {
        v3930 = JAM.call(c$$131.getPropertyValue, c$$131, [b$$198], JAM.policy.p3);
      }
      var v2888 = v3930;
      if (!v2888) {
        v2888 = "";
      }
      v1269 = v2888;
    } else {
      v1269 = "";
    }
    return v1269;
  }
  function wd(a$$256, b$$196, c$$129) {
    var JSCompiler_inline_result$$52;
    JSCompiler_inline_label_xd_148: {
      var a$$inline_144 = a$$256;
      var b$$inline_145 = c$$129;
      var c$$inline_146 = db$$1(b$$inline_145);
      if (void 0 === a$$inline_144.style[c$$inline_146]) {
        var v2892;
        if (Pc) {
          v2892 = "Webkit";
        } else {
          var v3933;
          if (Oc) {
            v3933 = "Moz";
          } else {
            var v4553;
            if (N$$1) {
              v4553 = "ms";
            } else {
              var v4860;
              if (Nc) {
                v4860 = "O";
              } else {
                v4860 = null;
              }
              v4553 = v4860;
            }
            v3933 = v4553;
          }
          v2892 = v3933;
        }
        var d$$inline_147 = v2892 + eb$$1(b$$inline_145);
        if (void 0 !== a$$inline_144.style[d$$inline_147]) {
          JSCompiler_inline_result$$52 = d$$inline_147;
          break JSCompiler_inline_label_xd_148;
        }
      }
      JSCompiler_inline_result$$52 = c$$inline_146;
    }
    var v1274 = c$$129 = JSCompiler_inline_result$$52;
    if (v1274) {
      JAM.set(a$$256.style, c$$129, b$$196, JAM.policy.p2);
    }
    return;
  }
  function Q$$1(a$$255, b$$195, c$$128) {
    var v1275;
    if (p$$1(b$$195)) {
      v1275 = wd(a$$255, c$$128, b$$195);
    } else {
      v1275 = Dc(b$$195, ga$$1(wd, a$$255));
    }
    v1275;
    return;
  }
  function P$$1(a$$250, b$$191, c$$125, d$$77) {
    this.top = a$$250;
    this.right = b$$191;
    this.bottom = c$$125;
    this.left = d$$77;
    return;
  }
  function O$$1(a$$247) {
    var v2898 = a$$247;
    if (!v2898) {
      v2898 = m$$3.document;
    }
    var v1276 = v2898;
    if (!v1276) {
      v1276 = document;
    }
    this.V = v1276;
    return;
  }
  function md(a$$246) {
    var v2900 = a$$246;
    if (v2900) {
      v2900 = "number" == typeof a$$246.length;
    }
    if (v2900) {
      if (da$$1(a$$246)) {
        var v1277 = "function" == typeof a$$246.item;
        if (!v1277) {
          v1277 = "string" == typeof a$$246.item;
        }
        return v1277;
      }
      if ("function" == ba$$1(a$$246)) {
        return "function" == typeof a$$246.item;
      }
    }
    return!1;
  }
  function ud(a$$245, b$$190, c$$124) {
    if (!(a$$245.nodeName in sd)) {
      if (3 == a$$245.nodeType) {
        var v1282;
        if (c$$124) {
          var v3940 = String(a$$245.nodeValue);
          v1282 = JAM.call(b$$190.push, b$$190, [JAM.call(v3940.replace, v3940, [/(\r\n|\r|\n)/g, ""], JAM.policy.p3)], JAM.policy.p3);
        } else {
          v1282 = JAM.call(b$$190.push, b$$190, [a$$245.nodeValue], JAM.policy.p3);
        }
        v1282;
      } else {
        if (a$$245.nodeName in td) {
          JAM.call(b$$190.push, b$$190, [td[a$$245.nodeName]], JAM.policy.p3);
        } else {
          a$$245 = a$$245.firstChild;
          for (;a$$245;) {
            ud(a$$245, b$$190, c$$124);
            a$$245 = a$$245.nextSibling;
          }
        }
      }
    }
    return;
  }
  function cd(a$$243) {
    var v1287;
    if (9 == a$$243.nodeType) {
      v1287 = a$$243;
    } else {
      var v2912 = a$$243.ownerDocument;
      if (!v2912) {
        v2912 = a$$243.document;
      }
      v1287 = v2912;
    }
    return v1287;
  }
  function rd(a$$242, b$$188) {
    var v2914 = a$$242.contains;
    if (v2914) {
      v2914 = 1 == b$$188.nodeType;
    }
    if (v2914) {
      var v1288 = a$$242 == b$$188;
      if (!v1288) {
        v1288 = JAM.call(a$$242.contains, a$$242, [b$$188], JAM.policy.p3);
      }
      return v1288;
    }
    if ("undefined" != typeof a$$242.compareDocumentPosition) {
      var v1290 = a$$242 == b$$188;
      if (!v1290) {
        v1290 = Boolean(JAM.call(a$$242.compareDocumentPosition, a$$242, [b$$188], JAM.policy.p3) & 16);
      }
      return v1290;
    }
    var v2919 = b$$188;
    if (v2919) {
      v2919 = a$$242 != b$$188;
    }
    var v1292 = v2919;
    for (;v1292;) {
      b$$188 = b$$188.parentNode;
      var v2920 = b$$188;
      if (v2920) {
        v2920 = a$$242 != b$$188;
      }
      v1292 = v2920;
    }
    return b$$188 == a$$242;
  }
  function qd(a$$241) {
    var v1293;
    var v3946 = a$$241;
    if (v3946) {
      v3946 = a$$241.parentNode;
    }
    if (v3946) {
      var v2921 = a$$241.parentNode;
      v1293 = JAM.call(v2921.removeChild, v2921, [a$$241], JAM.policy.p3);
    } else {
      v1293 = null;
    }
    return v1293;
  }
  function pd(a$$240, b$$187) {
    ld(cd(a$$240), a$$240, arguments, 1);
    return;
  }
  function od(a$$239, b$$186) {
    JAM.call(a$$239.appendChild, a$$239, [b$$186], JAM.policy.p3);
    return;
  }
  function nd(a$$238) {
    if (1 != a$$238.nodeType) {
      return!1;
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
        return!1;
    }
    return!0;
  }
  function ld(a$$237, b$$185, c$$122, d$$76) {
    function e$$50(c$$123) {
      if (c$$123) {
        var v3947;
        if (p$$1(c$$123)) {
          v3947 = JAM.call(a$$237.createTextNode, a$$237, [c$$123], JAM.policy.p3);
        } else {
          v3947 = c$$123;
        }
        JAM.call(b$$185.appendChild, b$$185, [v3947], JAM.policy.p3);
      }
      return;
    }
    var v1298 = d$$76 < c$$122.length;
    for (;v1298;) {
      var f$$27 = c$$122[d$$76];
      var v1297;
      var v3948 = !ca$$1(f$$27);
      if (!v3948) {
        var v4558 = da$$1(f$$27);
        if (v4558) {
          v4558 = 0 < f$$27.nodeType;
        }
        v3948 = v4558;
      }
      if (v3948) {
        v1297 = e$$50(f$$27);
      } else {
        var v3949;
        if (md(f$$27)) {
          v3949 = ac(f$$27);
        } else {
          v3949 = f$$27;
        }
        v1297 = JAM.call(Zb, null, [v3949, e$$50], JAM.policy.p3);
      }
      v1297;
      d$$76 = d$$76 + 1;
      v1298 = d$$76 < c$$122.length;
    }
    return;
  }
  function kd(a$$235, b$$183, c$$120) {
    var JSCompiler_inline_result$$48;
    var b$$inline_136 = arguments;
    var c$$inline_137 = b$$inline_136[0];
    var d$$inline_138 = b$$inline_136[1];
    var v3950 = !Wc;
    if (v3950) {
      v3950 = d$$inline_138;
    }
    var v2929 = v3950;
    if (v2929) {
      var v3951 = d$$inline_138.name;
      if (!v3951) {
        v3951 = d$$inline_138.type;
      }
      v2929 = v3951;
    }
    if (v2929) {
      c$$inline_137 = ["<", c$$inline_137];
      var v1299 = d$$inline_138.name;
      if (v1299) {
        JAM.call(c$$inline_137.push, c$$inline_137, [' name="', Sa$$1(d$$inline_138.name), '"'], JAM.policy.p3);
      }
      if (d$$inline_138.type) {
        JAM.call(c$$inline_137.push, c$$inline_137, [' type="', Sa$$1(d$$inline_138.type), '"'], JAM.policy.p3);
        var e$$inline_139 = {};
        Gc(e$$inline_139, d$$inline_138);
        delete e$$inline_139.type;
        d$$inline_138 = e$$inline_139;
      }
      JAM.call(c$$inline_137.push, c$$inline_137, [">"], JAM.policy.p3);
      c$$inline_137 = JAM.call(c$$inline_137.join, c$$inline_137, [""], JAM.policy.p3);
    }
    c$$inline_137 = JAM.call(document.createElement, document, [c$$inline_137], JAM.policy.p3);
    if (d$$inline_138) {
      var v2932;
      if (p$$1(d$$inline_138)) {
        v2932 = c$$inline_137.className = d$$inline_138;
      } else {
        var v3953;
        if (n$$2(d$$inline_138)) {
          var v4862 = [c$$inline_137];
          v3953 = JAM.call(ad.apply, ad, [null, JAM.call(v4862.concat, v4862, [d$$inline_138], JAM.policy.p3)], JAM.policy.p3);
        } else {
          v3953 = fd(c$$inline_137, d$$inline_138);
        }
        v2932 = v3953;
      }
      v2932;
    }
    var v1303 = 2 < b$$inline_136.length;
    if (v1303) {
      ld(document, c$$inline_137, b$$inline_136, 2);
    }
    JSCompiler_inline_result$$48 = c$$inline_137;
    return JSCompiler_inline_result$$48;
  }
  function fd(a$$231, b$$180) {
    function v47(b$$181, d$$74) {
      var v1304;
      if ("style" == d$$74) {
        v1304 = a$$231.style.cssText = b$$181;
      } else {
        var v2935;
        if ("class" == d$$74) {
          v2935 = a$$231.className = b$$181;
        } else {
          var v3955;
          if ("for" == d$$74) {
            v3955 = a$$231.htmlFor = b$$181;
          } else {
            var v4564;
            if (d$$74 in ed) {
              v4564 = JAM.call(a$$231.setAttribute, a$$231, [ed[d$$74], b$$181], JAM.policy.p3);
            } else {
              var v4864;
              var v5070 = 0 == JAM.call(d$$74.lastIndexOf, d$$74, ["aria-", 0], JAM.policy.p3);
              if (!v5070) {
                v5070 = 0 == JAM.call(d$$74.lastIndexOf, d$$74, ["data-", 0], JAM.policy.p3);
              }
              if (v5070) {
                v4864 = JAM.call(a$$231.setAttribute, a$$231, [d$$74, b$$181], JAM.policy.p3);
              } else {
                v4864 = JAM.set(a$$231, d$$74, b$$181, JAM.policy.p2);
              }
              v4564 = v4864;
            }
            v3955 = v4564;
          }
          v2935 = v3955;
        }
        v1304 = v2935;
      }
      v1304;
      return;
    }
    Dc(b$$180, v47);
    return;
  }
  function dd(a$$230) {
    var v1305;
    if (a$$230) {
      v1305 = new O$$1(cd(a$$230));
    } else {
      var v2938 = Ma$$1;
      if (!v2938) {
        v2938 = Ma$$1 = new O$$1;
      }
      v1305 = v2938;
    }
    return v1305;
  }
  function ad(a$$227, b$$177) {
    var c$$118 = Zc(a$$227);
    var d$$73 = bc(arguments, 1);
    var e$$48 = c$$118.length + d$$73.length;
    var a$$inline_128 = c$$118;
    var b$$inline_129 = d$$73;
    var c$$inline_130 = 0;
    var v1309 = c$$inline_130 < b$$inline_129.length;
    for (;v1309;) {
      var v1308 = $b(a$$inline_128, b$$inline_129[c$$inline_130]);
      if (!v1308) {
        JAM.call(a$$inline_128.push, a$$inline_128, [b$$inline_129[c$$inline_130]], JAM.policy.p3);
      }
      c$$inline_130 = c$$inline_130 + 1;
      v1309 = c$$inline_130 < b$$inline_129.length;
    }
    var b$$inline_133 = JAM.call(c$$118.join, c$$118, [" "], JAM.policy.p3);
    a$$227.className = b$$inline_133;
    return c$$118.length == e$$48;
  }
  function Zc(a$$226) {
    a$$226 = a$$226.className;
    var v2944 = p$$1(a$$226);
    if (v2944) {
      v2944 = JAM.call(a$$226.match, a$$226, [/\S+/g], JAM.policy.p3);
    }
    var v1311 = v2944;
    if (!v1311) {
      v1311 = [];
    }
    return v1311;
  }
  function Uc(a$$223) {
    var JSCompiler_temp$$72;
    if (JSCompiler_temp$$72 = Tc[a$$223]) {
    } else {
      var JSCompiler_inline_result$$73;
      var b$$inline_114 = a$$223;
      var c$$inline_115 = 0;
      var v2946 = String(Sc);
      var v1312 = JAM.call(v2946.replace, v2946, [/^[\s\xa0]+|[\s\xa0]+$/g, ""], JAM.policy.p3);
      var d$$inline_116 = JAM.call(v1312.split, v1312, ["."], JAM.policy.p3);
      var v2947 = String(b$$inline_114);
      var v1313 = JAM.call(v2947.replace, v2947, [/^[\s\xa0]+|[\s\xa0]+$/g, ""], JAM.policy.p3);
      var e$$inline_117 = JAM.call(v1313.split, v1313, ["."], JAM.policy.p3);
      var f$$inline_118 = JAM.call(Math.max, Math, [d$$inline_116.length, e$$inline_117.length], JAM.policy.p3);
      var g$$inline_119 = 0;
      var v2948 = 0 == c$$inline_115;
      if (v2948) {
        v2948 = g$$inline_119 < f$$inline_118;
      }
      var v1325 = v2948;
      for (;v1325;) {
        var v1316 = d$$inline_116[g$$inline_119];
        if (!v1316) {
          v1316 = "";
        }
        var h$$inline_120 = v1316;
        var v1317 = e$$inline_117[g$$inline_119];
        if (!v1317) {
          v1317 = "";
        }
        var k$$inline_121 = v1317;
        var l$$inline_122 = RegExp("(\\d*)(\\D*)", "g");
        var z$$inline_123 = RegExp("(\\d*)(\\D*)", "g");
        var v1324 = 0 == c$$inline_115;
        do {
          var v1318 = JAM.call(l$$inline_122.exec, l$$inline_122, [h$$inline_120], JAM.policy.p3);
          if (!v1318) {
            v1318 = ["", "", ""];
          }
          var C$$inline_124 = v1318;
          var v1319 = JAM.call(z$$inline_123.exec, z$$inline_123, [k$$inline_121], JAM.policy.p3);
          if (!v1319) {
            v1319 = ["", "", ""];
          }
          var I$$inline_125 = v1319;
          var v2953 = 0 == C$$inline_124[0].length;
          if (v2953) {
            v2953 = 0 == I$$inline_125[0].length;
          }
          if (v2953) {
            break;
          }
          var v1321;
          if (0 == C$$inline_124[1].length) {
            v1321 = 0;
          } else {
            v1321 = parseInt(C$$inline_124[1], 10);
          }
          c$$inline_115 = v1321;
          var v1322;
          if (0 == I$$inline_125[1].length) {
            v1322 = 0;
          } else {
            v1322 = parseInt(I$$inline_125[1], 10);
          }
          var xb$$inline_126 = v1322;
          var v2958 = bb$$1(c$$inline_115, xb$$inline_126);
          if (!v2958) {
            v2958 = bb$$1(0 == C$$inline_124[2].length, 0 == I$$inline_125[2].length);
          }
          var v1323 = v2958;
          if (!v1323) {
            v1323 = bb$$1(C$$inline_124[2], I$$inline_125[2]);
          }
          c$$inline_115 = v1323;
          v1324 = 0 == c$$inline_115;
        } while (v1324);
        g$$inline_119 = g$$inline_119 + 1;
        var v2962 = 0 == c$$inline_115;
        if (v2962) {
          v2962 = g$$inline_119 < f$$inline_118;
        }
        v1325 = v2962;
      }
      JSCompiler_inline_result$$73 = c$$inline_115;
      JSCompiler_temp$$72 = JAM.set(Tc, a$$223, 0 <= JSCompiler_inline_result$$73, JAM.policy.p2);
    }
    return JSCompiler_temp$$72;
  }
  function Qc() {
    var a$$222 = m$$3.document;
    var v1327;
    if (a$$222) {
      v1327 = a$$222.documentMode;
    } else {
      v1327 = void 0;
    }
    return v1327;
  }
  function Rc() {
    var a$$221 = "";
    var b$$174;
    var v1328;
    var v3965 = Nc;
    if (v3965) {
      v3965 = m$$3.opera;
    }
    if (v3965) {
      a$$221 = m$$3.opera.version;
      var v3967;
      if ("function" == typeof a$$221) {
        v3967 = JAM.call(a$$221, null, [], JAM.policy.p3);
      } else {
        v3967 = a$$221;
      }
      v1328 = a$$221 = v3967;
    } else {
      var v3968;
      if (Oc) {
        v3968 = b$$174 = /rv\:([^\);]+)(\)|;)/;
      } else {
        var v4573;
        if (N$$1) {
          v4573 = b$$174 = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/;
        } else {
          var v4869 = Pc;
          if (v4869) {
            v4869 = b$$174 = /WebKit\/(\S+)/;
          }
          v4573 = v4869;
        }
        v3968 = v4573;
      }
      v3968;
      var v3969 = b$$174;
      if (v3969) {
        var v4574;
        var v5071;
        if (m$$3.navigator) {
          v5071 = m$$3.navigator.userAgent;
        } else {
          v5071 = null;
        }
        if (a$$221 = JAM.call(b$$174.exec, b$$174, [v5071], JAM.policy.p3)) {
          v4574 = a$$221[1];
        } else {
          v4574 = "";
        }
        v3969 = a$$221 = v4574;
      }
      v1328 = v3969;
    }
    v1328;
    var v1329;
    var v3970 = N$$1;
    if (v3970) {
      b$$174 = Qc();
      v3970 = b$$174 > parseFloat(a$$221);
    }
    if (v3970) {
      v1329 = String(b$$174);
    } else {
      v1329 = a$$221;
    }
    return v1329;
  }
  function Mc() {
    Kc = Jc = Ic = Hc = !1;
    var a$$220;
    var v2965;
    if (m$$3.navigator) {
      v2965 = m$$3.navigator.userAgent;
    } else {
      v2965 = null;
    }
    if (a$$220 = v2965) {
      var b$$173 = m$$3.navigator;
      Hc = 0 == JAM.call(a$$220.lastIndexOf, a$$220, ["Opera", 0], JAM.policy.p3);
      var v1331 = !Hc;
      if (v1331) {
        var v2966 = -1 != JAM.call(a$$220.indexOf, a$$220, ["MSIE"], JAM.policy.p3);
        if (!v2966) {
          v2966 = -1 != JAM.call(a$$220.indexOf, a$$220, ["Trident"], JAM.policy.p3);
        }
        v1331 = v2966;
      }
      Ic = v1331;
      var v1332 = !Hc;
      if (v1332) {
        v1332 = -1 != JAM.call(a$$220.indexOf, a$$220, ["WebKit"], JAM.policy.p3);
      }
      Jc = v1332;
      var v3976 = !Hc;
      if (v3976) {
        v3976 = !Jc;
      }
      var v2968 = v3976;
      if (v2968) {
        v2968 = !Ic;
      }
      var v1333 = v2968;
      if (v1333) {
        v1333 = "Gecko" == b$$173.product;
      }
      Kc = v1333;
    }
    return;
  }
  function Gc(a$$219, b$$172) {
    var c$$117;
    var d$$72;
    var e$$47 = 1;
    var v1336 = e$$47 < arguments.length;
    for (;v1336;) {
      d$$72 = arguments[e$$47];
      for (c$$117 in d$$72) {
        JAM.set(a$$219, c$$117, d$$72[c$$117], JAM.policy.p2);
      }
      var f$$26 = 0;
      var v1335 = f$$26 < Fc.length;
      for (;v1335;) {
        c$$117 = Fc[f$$26];
        var v3977 = Object.prototype.hasOwnProperty;
        var v2972 = JAM.call(v3977.call, v3977, [d$$72, c$$117], JAM.policy.p3);
        if (v2972) {
          JAM.set(a$$219, c$$117, d$$72[c$$117], JAM.policy.p2);
        }
        f$$26 = f$$26 + 1;
        v1335 = f$$26 < Fc.length;
      }
      e$$47 = e$$47 + 1;
      v1336 = e$$47 < arguments.length;
    }
    return;
  }
  function Ec(a$$218, b$$171) {
    var c$$116;
    for (c$$116 in a$$218) {
      if (a$$218[c$$116] == b$$171) {
        return!0;
      }
    }
    return!1;
  }
  function Dc(a$$217, b$$170, c$$115) {
    var d$$71;
    for (d$$71 in a$$217) {
      JAM.call(b$$170.call, b$$170, [c$$115, a$$217[d$$71], d$$71, a$$217], JAM.policy.p3);
    }
    return;
  }
  function M$$1(a$$213, b$$166) {
    var v1339;
    if (void 0 !== a$$213) {
      v1339 = a$$213;
    } else {
      v1339 = 0;
    }
    this.x = v1339;
    var v1340;
    if (void 0 !== b$$166) {
      v1340 = b$$166;
    } else {
      v1340 = 0;
    }
    this.y = v1340;
    return;
  }
  function L$$1(a$$212, b$$165, c$$113) {
    if (!c$$113) {
      var v2978;
      if (Ha$$1) {
        v2978 = "https";
      } else {
        v2978 = "http";
      }
      c$$113 = v2978;
    }
    var v1341 = [c$$113, "://", a$$212, b$$165];
    return JAM.call(v1341.join, v1341, [""], JAM.policy.p3);
  }
  function Bc(a$$211) {
    var v1342 = a$$211.google_page_location;
    if (!v1342) {
      v1342 = a$$211.google_page_url;
    }
    var b$$164 = v1342;
    var v1343 = "EMPTY" == b$$164;
    if (v1343) {
      b$$164 = a$$211.google_page_url;
    }
    var JSCompiler_inline_result$$20;
    var a$$inline_111 = a$$211;
    a$$inline_111 = a$$inline_111.google_ad_channel;
    var v1344;
    if (JAM.call(zc.test, zc, [a$$inline_111], JAM.policy.p3)) {
      v1344 = !0;
    } else {
      v1344 = !1;
    }
    JSCompiler_inline_result$$20 = v1344;
    if (JSCompiler_inline_result$$20) {
      return!0;
    }
    var v2982 = Ga$$1;
    if (!v2982) {
      v2982 = !b$$164;
    }
    if (v2982) {
      return!1;
    }
    b$$164 = JAM.call(b$$164.toString, b$$164, [], JAM.policy.p3);
    var v1346;
    if (0 == JAM.call(b$$164.indexOf, b$$164, ["http://"], JAM.policy.p3)) {
      v1346 = b$$164 = JAM.call(b$$164.substring, b$$164, [7, b$$164.length], JAM.policy.p3);
    } else {
      var v2984 = 0 == JAM.call(b$$164.indexOf, b$$164, ["https://"], JAM.policy.p3);
      if (v2984) {
        v2984 = b$$164 = JAM.call(b$$164.substring, b$$164, [8, b$$164.length], JAM.policy.p3);
      }
      v1346 = v2984;
    }
    v1346;
    a$$211 = JAM.call(b$$164.indexOf, b$$164, ["/"], JAM.policy.p3);
    var v1347 = -1 == a$$211;
    if (v1347) {
      a$$211 = b$$164.length;
    }
    b$$164 = JAM.call(b$$164.substring, b$$164, [0, a$$211], JAM.policy.p3);
    b$$164 = JAM.call(b$$164.split, b$$164, ["."], JAM.policy.p3);
    a$$211 = !1;
    var v1348 = 3 <= b$$164.length;
    if (v1348) {
      a$$211 = b$$164[b$$164.length - 3] in yc;
    }
    var v1349 = 2 <= b$$164.length;
    if (v1349) {
      var v2989 = a$$211;
      if (!v2989) {
        v2989 = b$$164[b$$164.length - 2] in yc;
      }
      a$$211 = v2989;
    }
    return a$$211;
  }
  function xc() {
    var a$$209 = J$$1();
    var v1350;
    if (a$$209) {
      v1350 = JAM.call(a$$209.Ka, a$$209, [], JAM.policy.p3);
    } else {
      v1350 = "";
    }
    return v1350;
  }
  function J$$1() {
    if (uc) {
    } else {
      var a$$inline_106 = H$$1();
      var b$$inline_107 = new E$$1;
      var c$$inline_108 = 0;
      var d$$inline_109 = a$$inline_106.defaultBucket.length;
      var v1354 = c$$inline_108 < d$$inline_109;
      for (;v1354;) {
        var v1352 = b$$inline_107.defaultBucket;
        JAM.call(v1352.push, v1352, [a$$inline_106.defaultBucket[c$$inline_108]], JAM.policy.p3);
        c$$inline_108 = c$$inline_108 + 1;
        v1354 = c$$inline_108 < d$$inline_109;
      }
      x$$50(a$$inline_106.layers, JAM.call(r$$2, null, [E$$1.prototype.Ga, b$$inline_107], JAM.policy.p3));
      uc = b$$inline_107;
    }
    return uc;
  }
  function H$$1() {
    if (wc()) {
      var a$$208 = tc;
      return a$$208;
    }
    a$$208 = mc();
    var JSCompiler_inline_result$$29;
    var b$$inline_104 = new E$$1(1, 3, 4, 7, 10, 12, 13, 14, 16, 17, 18, 19);
    JSCompiler_inline_result$$29 = oc(a$$208, 3, b$$inline_104);
    return tc = JSCompiler_inline_result$$29;
  }
  function wc() {
    var v2992 = tc;
    if (v2992) {
      v2992 = vc(tc);
    }
    if (v2992) {
      return!0;
    }
    var a$$207 = mc();
    var v1359;
    var v4874 = a$$207 = G$$1(a$$207, 3);
    if (v4874) {
      v4874 = gb$$1(a$$207);
    }
    var v4578 = v4874;
    if (v4578) {
      v4578 = hb$$1(a$$207, E$$1.prototype);
    }
    var v3988 = v4578;
    if (v3988) {
      v3988 = vc(a$$207);
    }
    if (v3988) {
      tc = a$$207;
      v1359 = !0;
    } else {
      v1359 = !1;
    }
    return v1359;
  }
  function vc(a$$206) {
    try {
      return JAM.call(a$$206.statusz, a$$206, [], JAM.policy.p3);
    } catch (b$$163) {
      return!1;
    }
    return;
  }
  function F$$1(a$$202, b$$159, c$$112) {
    a$$202 = a$$202.S;
    b$$159 = nc(b$$159);
    var v1360;
    if (void 0 === a$$202[b$$159]) {
      v1360 = JAM.set(a$$202, b$$159, c$$112, JAM.policy.p2);
    } else {
      v1360 = a$$202[b$$159];
    }
    return v1360;
  }
  function oc(a$$201, b$$158, c$$111) {
    return JAM.set(a$$201.S, nc(b$$158), c$$111, JAM.policy.p2);
  }
  function G$$1(a$$200, b$$157) {
    var c$$110 = nc(b$$157);
    return c$$110 = a$$200.S[c$$110];
  }
  function nc(a$$199) {
    switch(a$$199) {
      case 3:
        return "google_exp_persistent";
      case 4:
        return "google_num_sdo_slots";
      case 5:
        return "google_num_0ad_slots";
      case 6:
        return "google_num_ad_slots";
      case 7:
        return "google_correlator";
      case 8:
        return "google_prev_ad_formats_by_region";
      case 9:
        return "google_prev_ad_slotnames_by_region";
      case 10:
        return "google_num_slots_by_channel";
      case 11:
        return "google_viewed_host_channels";
      case 12:
        return "google_num_slot_to_show";
      case 14:
        return "gaGlobal";
    }
    return;
  }
  function mc(a$$197) {
    var v1364;
    var v3991 = a$$197;
    if (v3991) {
      v3991 = kc[a$$197];
    }
    if (v3991) {
      v1364 = a$$197;
    } else {
      var v2995;
      if (B$$2) {
        v2995 = "google_persistent_state_async";
      } else {
        v2995 = "google_persistent_state";
      }
      v1364 = v2995;
    }
    a$$197 = v1364;
    if (lc[a$$197]) {
      return lc[a$$197];
    }
    if ("google_persistent_state_async" == a$$197) {
      var b$$156 = D$$1();
      var c$$109 = {};
    } else {
      c$$109 = b$$156 = D$$1();
    }
    var d$$70 = b$$156[a$$197];
    var v1367;
    var v3992 = "object" != typeof d$$70;
    if (!v3992) {
      v3992 = "object" != typeof d$$70.S;
    }
    if (v3992) {
      var v2997 = b$$156;
      var v2998 = a$$197;
      var v5192 = new jc(c$$109);
      v1367 = JAM.set(v2997, v2998, JAM.set(lc, a$$197, v5192, JAM.policy.p2), JAM.policy.p2);
    } else {
      v1367 = JAM.set(lc, a$$197, d$$70, JAM.policy.p2);
    }
    return v1367;
  }
  function jc(a$$196) {
    this.S = a$$196;
    F$$1(this, 3, null);
    F$$1(this, 4, 0);
    F$$1(this, 5, 0);
    F$$1(this, 6, 0);
    var v3000 = new Date;
    F$$1(this, 7, JAM.call(v3000.getTime, v3000, [], JAM.policy.p3));
    F$$1(this, 8, {});
    F$$1(this, 9, {});
    F$$1(this, 10, {});
    F$$1(this, 11, []);
    F$$1(this, 12, 0);
    F$$1(this, 14, {});
    return;
  }
  function hc() {
    if (gc) {
    } else {
      var a$$inline_99 = window;
      a$$inline_99 = dc(a$$inline_99, !0);
      gc = a$$inline_99.win;
    }
    return gc;
  }
  function dc(a$$193, b$$155) {
    var c$$108 = 0;
    var d$$69 = a$$193;
    var e$$46 = 0;
    var v1371 = a$$193 != a$$193.parent;
    for (;v1371;) {
      a$$193 = a$$193.parent;
      e$$46 = e$$46 + 1;
      if (Kb(a$$193)) {
        d$$69 = a$$193;
        c$$108 = e$$46;
      } else {
        if (b$$155) {
          break;
        }
      }
      v1371 = a$$193 != a$$193.parent;
    }
    return{win:d$$69, level:c$$108};
  }
  function E$$1(a$$185) {
    this.defaultBucket = [];
    this.layers = {};
    var b$$148 = 0;
    var c$$105 = arguments.length;
    var v1374 = b$$148 < c$$105;
    for (;v1374;) {
      JAM.set(this.layers, arguments[b$$148], "", JAM.policy.p2);
      b$$148 = b$$148 + 1;
      v1374 = b$$148 < c$$105;
    }
    return;
  }
  function bc(a$$184, b$$147, c$$104) {
    var v1375;
    if (2 >= arguments.length) {
      var v3003 = Xb.slice;
      v1375 = JAM.call(v3003.call, v3003, [a$$184, b$$147], JAM.policy.p3);
    } else {
      var v3004 = Xb.slice;
      v1375 = JAM.call(v3004.call, v3004, [a$$184, b$$147, c$$104], JAM.policy.p3);
    }
    return v1375;
  }
  function ac(a$$183) {
    var b$$146 = a$$183.length;
    if (0 < b$$146) {
      var c$$103 = Array(b$$146);
      var d$$67 = 0;
      var v1376 = d$$67 < b$$146;
      for (;v1376;) {
        introspect(JAM.policy.p2) {
          c$$103[d$$67] = a$$183[d$$67];
        }
        d$$67 = d$$67 + 1;
        v1376 = d$$67 < b$$146;
      }
      return c$$103;
    }
    return[];
  }
  function $b(a$$182, b$$145) {
    return 0 <= JAM.call(Yb, null, [a$$182, b$$145], JAM.policy.p3);
  }
  function Wb(a$$177) {
    function v48() {
      var v1379 = a$$177.document;
      JAM.call(v1379.close, v1379, [], JAM.policy.p3);
      return;
    }
    var v3994 = B$$2;
    if (v3994) {
      v3994 = a$$177 != a$$177.parent;
    }
    var v3006 = v3994;
    if (v3006) {
      v3006 = a$$177.google_async_iframe_close;
    }
    var v1380 = v3006;
    if (v1380) {
      JAM.call(a$$177.setTimeout, a$$177, [v48, 0], JAM.policy.p3);
    }
    return;
  }
  function D$$1() {
    var v3007 = B$$2;
    if (v3007) {
      v3007 = !Kb(Ob);
    }
    if (v3007) {
      var a$$170 = "." + v$$1.domain;
      var v3008 = 2 < JAM.call(a$$170.split, a$$170, ["."], JAM.policy.p3).length;
      if (v3008) {
        v3008 = !Kb(Ob);
      }
      var v1382 = v3008;
      for (;v1382;) {
        v$$1.domain = a$$170 = JAM.call(a$$170.substr, a$$170, [JAM.call(a$$170.indexOf, a$$170, ["."], JAM.policy.p3) + 1], JAM.policy.p3);
        Ob = window.parent;
        var v3010 = 2 < JAM.call(a$$170.split, a$$170, ["."], JAM.policy.p3).length;
        if (v3010) {
          v3010 = !Kb(Ob);
        }
        v1382 = v3010;
      }
      var v1383 = Kb(Ob);
      if (!v1383) {
        Ob = window;
      }
    }
    return Ob;
  }
  function Mb(a$$168) {
    function v49() {
      if (a$$168) {
        var b$$133 = a$$168;
        a$$168 = null;
        JAM.call(b$$133.apply, b$$133, [null, arguments], JAM.policy.p3);
      }
      return;
    }
    return v49;
  }
  function Lb(a$$167) {
    return "google_ads_frame" + a$$167;
  }
  function Kb(a$$166) {
    try {
      var v1385 = !!a$$166.location.href;
      if (!v1385) {
        v1385 = "" === a$$166.location.href;
      }
      return v1385;
    } catch (b$$132) {
      return!1;
    }
    return;
  }
  function Hb(a$$163) {
    var v3015 = new Date;
    a$$163 = JAM.call(v3015.getTime, v3015, [], JAM.policy.p3) - a$$163;
    var v1387;
    if (1E4 > a$$163) {
      v1387 = a$$163 + "";
    } else {
      v1387 = "M";
    }
    return v1387;
  }
  function Fb(a$$162, b$$130, c$$90) {
    b$$130 = [b$$130.google_ad_slot, b$$130.google_ad_format, b$$130.google_ad_type, b$$130.google_ad_width, b$$130.google_ad_height];
    if (c$$90) {
      var JSCompiler_inline_result$$22;
      var a$$inline_95 = a$$162;
      var b$$inline_96 = [];
      var c$$inline_97 = 0;
      var v3017 = a$$inline_95;
      if (v3017) {
        v3017 = 25 > c$$inline_97;
      }
      var v1394 = v3017;
      for (;v1394;) {
        var v4003 = 9 != a$$inline_95.nodeType;
        if (v4003) {
          v4003 = a$$inline_95.id;
        }
        var v3018 = v4003;
        if (!v3018) {
          v3018 = "";
        }
        JAM.call(b$$inline_96.push, b$$inline_96, [v3018], JAM.policy.p3);
        a$$inline_95 = a$$inline_95.parentNode;
        c$$inline_97 = c$$inline_97 + 1;
        var v3019 = a$$inline_95;
        if (v3019) {
          v3019 = 25 > c$$inline_97;
        }
        v1394 = v3019;
      }
      JSCompiler_inline_result$$22 = JAM.call(b$$inline_96.join, b$$inline_96, [], JAM.policy.p3);
      var v1395 = a$$162 = JSCompiler_inline_result$$22;
      if (v1395) {
        JAM.call(b$$130.push, b$$130, [a$$162], JAM.policy.p3);
      }
    } else {
      JAM.call(b$$130.push, b$$130, [Db(a$$162)], JAM.policy.p3);
      JAM.call(b$$130.push, b$$130, [Eb(w$$6)], JAM.policy.p3);
    }
    var v1396 = Ab(JAM.call(b$$130.join, b$$130, [":"], JAM.policy.p3));
    return JAM.call(v1396.toString, v1396, [], JAM.policy.p3);
  }
  function Eb(a$$160) {
    var b$$128 = [];
    if (a$$160) {
      try {
        var c$$88 = a$$160.parent;
        var d$$59 = 0;
        var v4005 = c$$88;
        if (v4005) {
          v4005 = c$$88 != a$$160;
        }
        var v3023 = v4005;
        if (v3023) {
          v3023 = 25 > d$$59;
        }
        var v1399 = v3023;
        for (;v1399;) {
          var e$$42 = c$$88.frames;
          var f$$23 = 0;
          var v1398 = f$$23 < e$$42.length;
          for (;v1398;) {
            if (a$$160 == e$$42[f$$23]) {
              JAM.call(b$$128.push, b$$128, [f$$23], JAM.policy.p3);
              break;
            }
            f$$23 = f$$23 + 1;
            v1398 = f$$23 < e$$42.length;
          }
          a$$160 = c$$88;
          c$$88 = a$$160.parent;
          d$$59 = d$$59 + 1;
          var v4006 = c$$88;
          if (v4006) {
            v4006 = c$$88 != a$$160;
          }
          var v3027 = v4006;
          if (v3027) {
            v3027 = 25 > d$$59;
          }
          v1399 = v3027;
        }
      } catch (g$$18) {
      }
    }
    return JAM.call(b$$128.join, b$$128, [], JAM.policy.p3);
  }
  function Db(a$$159) {
    var b$$127 = [];
    var c$$87 = 0;
    var v3028 = a$$159;
    if (v3028) {
      v3028 = 25 > c$$87;
    }
    var v1404 = v3028;
    for (;v1404;) {
      var v1400 = 9 != a$$159.nodeType;
      if (v1400) {
        v1400 = a$$159.id;
      }
      var d$$58 = v1400;
      var v1401;
      if (d$$58) {
        v1401 = "/" + d$$58;
      } else {
        v1401 = "";
      }
      d$$58 = v1401;
      var v1402 = a$$159.nodeName;
      if (v1402) {
        var v3030 = a$$159.nodeName;
        v1402 = JAM.call(v3030.toLowerCase, v3030, [], JAM.policy.p3);
      }
      var e$$41 = v1402;
      JAM.call(b$$127.push, b$$127, [e$$41 + d$$58 + Cb(a$$159)], JAM.policy.p3);
      a$$159 = a$$159.parentElement;
      c$$87 = c$$87 + 1;
      var v3033 = a$$159;
      if (v3033) {
        v3033 = 25 > c$$87;
      }
      v1404 = v3033;
    }
    return JAM.call(b$$127.join, b$$127, [], JAM.policy.p3);
  }
  function Cb(a$$158) {
    var b$$126 = a$$158.parentElement;
    var v1405 = a$$158.nodeName;
    var c$$86 = JAM.call(v1405.toLowerCase, v1405, [], JAM.policy.p3);
    if (b$$126) {
      b$$126 = b$$126.childNodes;
      var d$$57 = 0;
      var e$$40 = 0;
      var v1408 = e$$40 < b$$126.length;
      for (;v1408;) {
        var f$$22 = b$$126[e$$40];
        var v3035 = f$$22.nodeName;
        if (v3035) {
          var v4588 = f$$22.nodeName;
          v3035 = JAM.call(v4588.toLowerCase, v4588, [], JAM.policy.p3) == c$$86;
        }
        if (v3035) {
          if (a$$158 == f$$22) {
            return "." + d$$57;
          }
          d$$57 = d$$57 + 1;
        }
        e$$40 = e$$40 + 1;
        v1408 = e$$40 < b$$126.length;
      }
    }
    return "";
  }
  function Ab(a$$156, b$$124) {
    var c$$84 = a$$156.length;
    if (0 == c$$84) {
      return 0;
    }
    var d$$56 = b$$124 || 305419896;
    var e$$39 = 0;
    var v1411 = e$$39 < c$$84;
    for (;v1411;) {
      var f$$21 = JAM.call(a$$156.charCodeAt, a$$156, [e$$39], JAM.policy.p3);
      d$$56 = d$$56 ^ (d$$56 << 5) + (d$$56 >> 2) + f$$21 & 4294967295;
      e$$39 = e$$39 + 1;
      v1411 = e$$39 < c$$84;
    }
    var v1412;
    if (0 < d$$56) {
      v1412 = d$$56;
    } else {
      v1412 = 4294967296 + d$$56;
    }
    return v1412;
  }
  function yb(a$$154) {
    var b$$123 = "google_unique_id";
    a$$154 = a$$154[b$$123];
    var v1413;
    if ("number" == typeof a$$154) {
      v1413 = a$$154;
    } else {
      v1413 = 0;
    }
    return v1413;
  }
  function wb(a$$153) {
    var b$$122 = "google_unique_id";
    var v1414;
    if (a$$153[b$$122]) {
      v1414 = JAM.set(a$$153, b$$122, a$$153[b$$122] + 1, JAM.policy.p2);
    } else {
      v1414 = JAM.set(a$$153, b$$122, 1, JAM.policy.p2);
    }
    v1414;
    return a$$153[b$$122];
  }
  function vb(a$$152, b$$121) {
    if (!(1E-4 > JAM.call(Math.random, Math, [], JAM.policy.p3))) {
      var c$$83 = JAM.call(Math.random, Math, [], JAM.policy.p3);
      if (c$$83 < b$$121) {
        try {
          var d$$55 = new Uint16Array(1);
          var v1415 = window.crypto;
          JAM.call(v1415.getRandomValues, v1415, [d$$55], JAM.policy.p3);
          c$$83 = d$$55[0] / 65536;
        } catch (e$$38) {
          c$$83 = JAM.call(Math.random, Math, [], JAM.policy.p3);
        }
        c$$83 = JAM.call(Math.floor, Math, [c$$83 * a$$152.length], JAM.policy.p3);
        return a$$152[c$$83];
      }
    }
    return null;
  }
  function ob$$1(a$$151) {
    a$$151 = a$$151 || window;
    try {
      return a$$151.history.length;
    } catch (b$$120) {
      return 0;
    }
    return;
  }
  function nb$$1(a$$150, b$$119) {
    var v1421 = a$$150.google_image_requests;
    if (!v1421) {
      a$$150.google_image_requests = [];
    }
    var v1422 = a$$150.document;
    var c$$82 = JAM.call(v1422.createElement, v1422, ["img"], JAM.policy.p3);
    c$$82.src = b$$119;
    var v1423 = a$$150.google_image_requests;
    JAM.call(v1423.push, v1423, [c$$82], JAM.policy.p3);
    return;
  }
  function mb$$1(a$$149) {
    function v50() {
      a$$149.google_onload_fired = !0;
      return;
    }
    var v1424 = "google_onload_fired" in a$$149;
    if (!v1424) {
      a$$149.google_onload_fired = !1;
      kb$$1(a$$149, v50);
    }
    return;
  }
  function A$$1(a$$148, b$$118, c$$81, d$$54) {
    var v1425;
    if (a$$148.removeEventListener) {
      var v4591 = d$$54;
      if (!v4591) {
        v4591 = !1;
      }
      JAM.call(a$$148.removeEventListener, a$$148, [b$$118, c$$81, v4591], JAM.policy.p3);
      v1425 = !0;
    } else {
      var v3045;
      if (a$$148.detachEvent) {
        JAM.call(a$$148.detachEvent, a$$148, ["on" + b$$118, c$$81], JAM.policy.p3);
        v3045 = !0;
      } else {
        v3045 = !1;
      }
      v1425 = v3045;
    }
    return v1425;
  }
  function lb$$1(a$$147, b$$117, c$$80, d$$53, e$$37) {
    c$$80 = JAM.call(r$$2, null, [d$$53, c$$80], JAM.policy.p3);
    var v1426;
    if (y$$31(a$$147, b$$117, c$$80, e$$37)) {
      v1426 = c$$80;
    } else {
      v1426 = null;
    }
    return v1426;
  }
  function y$$31(a$$146, b$$116, c$$79, d$$52) {
    var v1427;
    if (a$$146.addEventListener) {
      var v4593 = d$$52;
      if (!v4593) {
        v4593 = !1;
      }
      JAM.call(a$$146.addEventListener, a$$146, [b$$116, c$$79, v4593], JAM.policy.p3);
      v1427 = !0;
    } else {
      var v3048;
      if (a$$146.attachEvent) {
        JAM.call(a$$146.attachEvent, a$$146, ["on" + b$$116, c$$79], JAM.policy.p3);
        v3048 = !0;
      } else {
        v3048 = !1;
      }
      v1427 = v3048;
    }
    return v1427;
  }
  function ib$$1(a$$145, b$$115) {
    if (2 > arguments.length) {
      return a$$145.length;
    }
    var c$$78 = 1;
    var d$$51 = arguments.length;
    var v1430 = c$$78 < d$$51;
    for (;v1430;) {
      JAM.call(a$$145.push, a$$145, [arguments[c$$78]], JAM.policy.p3);
      c$$78 = c$$78 + 1;
      v1430 = c$$78 < d$$51;
    }
    return a$$145.length;
  }
  function hb$$1(a$$144, b$$113) {
    function v51(b$$114, e$$36) {
      var v4016 = c$$77;
      if (v4016) {
        v4016 = e$$36 in a$$144;
      }
      var v3051 = v4016;
      if (v3051) {
        v3051 = typeof b$$114 == typeof a$$144[e$$36];
      }
      var v1431 = v3051;
      if (!v1431) {
        c$$77 = !1;
      }
      return;
    }
    if (!a$$144) {
      return!1;
    }
    var c$$77 = !0;
    x$$50(b$$113, v51);
    return c$$77;
  }
  function gb$$1(a$$143) {
    var v1433 = !!a$$143;
    if (v1433) {
      var v3054 = "object" == typeof a$$143;
      if (!v3054) {
        v3054 = "function" == typeof a$$143;
      }
      v1433 = v3054;
    }
    return v1433;
  }
  function fb$$1(a$$142) {
    var v3055 = !!a$$142;
    if (v3055) {
      v3055 = "function" == typeof a$$142;
    }
    var v1434 = v3055;
    if (v1434) {
      v1434 = !!a$$142.call;
    }
    return v1434;
  }
  function x$$50(a$$141, b$$112) {
    var c$$76;
    for (c$$76 in a$$141) {
      var v3057 = Object.prototype.hasOwnProperty;
      var v1435 = JAM.call(v3057.call, v3057, [a$$141, c$$76], JAM.policy.p3);
      if (v1435) {
        JAM.call(b$$112.call, b$$112, [null, a$$141[c$$76], c$$76, a$$141], JAM.policy.p3);
      }
    }
    return;
  }
  function u$$2(a$$139, b$$110) {
    this.width = a$$139;
    this.height = b$$110;
    return;
  }
  function eb$$1(a$$137, b$$108) {
    function v52(a$$138, b$$109, c$$74) {
      return b$$109 + JAM.call(c$$74.toUpperCase, c$$74, [], JAM.policy.p3);
    }
    var v1438;
    if (p$$1(b$$108)) {
      var v4026 = String(b$$108);
      var v3059 = JAM.call(v4026.replace, v4026, [/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1"], JAM.policy.p3);
      v1438 = JAM.call(v3059.replace, v3059, [/\x08/g, "\\x08"], JAM.policy.p3);
    } else {
      v1438 = "\\s";
    }
    var c$$73 = v1438;
    var v1439;
    if (c$$73) {
      v1439 = "|[" + c$$73 + "]+";
    } else {
      v1439 = "";
    }
    c$$73 = v1439;
    c$$73 = RegExp("(^" + c$$73 + ")([a-z])", "g");
    return JAM.call(a$$137.replace, a$$137, [c$$73, v52], JAM.policy.p3);
  }
  function db$$1(a$$135) {
    function v53(a$$136, c$$72) {
      return JAM.call(c$$72.toUpperCase, c$$72, [], JAM.policy.p3);
    }
    var v1441 = String(a$$135);
    return JAM.call(v1441.replace, v1441, [/\-([a-z])/g, v53], JAM.policy.p3);
  }
  function bb$$1(a$$134, b$$107) {
    var v1442;
    if (a$$134 < b$$107) {
      v1442 = -1;
    } else {
      var v3063;
      if (a$$134 > b$$107) {
        v3063 = 1;
      } else {
        v3063 = 0;
      }
      v1442 = v3063;
    }
    return v1442;
  }
  function ab$$1(a$$131) {
    a$$131 = String(a$$131);
    if (a$$131.quote) {
      return JAM.call(a$$131.quote, a$$131, [], JAM.policy.p3);
    }
    var b$$104 = ['"'];
    var c$$69 = 0;
    var v1451 = c$$69 < a$$131.length;
    for (;v1451;) {
      var d$$49 = JAM.call(a$$131.charAt, a$$131, [c$$69], JAM.policy.p3);
      var e$$34 = JAM.call(d$$49.charCodeAt, d$$49, [0], JAM.policy.p3);
      var JSCompiler_temp_const$$24 = c$$69 + 1;
      var JSCompiler_temp$$25;
      if (JSCompiler_temp$$25 = Ya$$1[d$$49]) {
      } else {
        var JSCompiler_temp$$26;
        var v3066 = 31 < e$$34;
        if (v3066) {
          v3066 = 127 > e$$34;
        }
        if (v3066) {
          JSCompiler_temp$$26 = d$$49;
        } else {
          JSCompiler_inline_label_$a$$1_94: {
            var a$$inline_91 = d$$49;
            if (a$$inline_91 in Za$$1) {
              JSCompiler_temp$$26 = Za$$1[a$$inline_91];
              break JSCompiler_inline_label_$a$$1_94;
            }
            if (a$$inline_91 in Ya$$1) {
              JSCompiler_temp$$26 = JAM.set(Za$$1, a$$inline_91, Ya$$1[a$$inline_91], JAM.policy.p2);
              break JSCompiler_inline_label_$a$$1_94;
            }
            var b$$inline_92 = a$$inline_91;
            var c$$inline_93 = JAM.call(a$$inline_91.charCodeAt, a$$inline_91, [0], JAM.policy.p3);
            var v3067 = 31 < c$$inline_93;
            if (v3067) {
              v3067 = 127 > c$$inline_93;
            }
            if (v3067) {
              b$$inline_92 = a$$inline_91;
            } else {
              if (256 > c$$inline_93) {
                b$$inline_92 = "\\x";
                var v4028 = 16 > c$$inline_93;
                if (!v4028) {
                  v4028 = 256 < c$$inline_93;
                }
                if (v4028) {
                  b$$inline_92 = b$$inline_92 + "0";
                }
              } else {
                b$$inline_92 = "\\u";
                var v3068 = 4096 > c$$inline_93;
                if (v3068) {
                  b$$inline_92 = b$$inline_92 + "0";
                }
              }
              var v3069 = b$$inline_92;
              var v4029 = JAM.call(c$$inline_93.toString, c$$inline_93, [16], JAM.policy.p3);
              b$$inline_92 = v3069 + JAM.call(v4029.toUpperCase, v4029, [], JAM.policy.p3);
            }
            JSCompiler_temp$$26 = JAM.set(Za$$1, a$$inline_91, b$$inline_92, JAM.policy.p2);
          }
        }
        JSCompiler_temp$$25 = JSCompiler_temp$$26;
      }
      introspect(JAM.policy.p2) {
        b$$104[JSCompiler_temp_const$$24] = JSCompiler_temp$$25;
      }
      c$$69 = c$$69 + 1;
      v1451 = c$$69 < a$$131.length;
    }
    JAM.call(b$$104.push, b$$104, ['"'], JAM.policy.p3);
    return JAM.call(b$$104.join, b$$104, [""], JAM.policy.p3);
  }
  function Ua$$1(a$$128) {
    function v54(a$$129, c$$67) {
      switch(c$$67) {
        case "amp":
          return "&";
        case "lt":
          return "<";
        case "gt":
          return ">";
        case "quot":
          return'"';
        default:
          if ("#" == JAM.call(c$$67.charAt, c$$67, [0], JAM.policy.p3)) {
            var d$$47 = Number("0" + JAM.call(c$$67.substr, c$$67, [1], JAM.policy.p3));
            if (!isNaN(d$$47)) {
              return JAM.call(String.fromCharCode, String, [d$$47], JAM.policy.p3);
            }
          }
          return a$$129;
      }
      return;
    }
    return JAM.call(a$$128.replace, a$$128, [/&([^;]+);/g, v54], JAM.policy.p3);
  }
  function Ta$$1(a$$126, b$$101) {
    function v55(a$$127, b$$102) {
      var g$$16 = c$$66[a$$127];
      if (g$$16) {
        return g$$16;
      }
      if ("#" == JAM.call(b$$102.charAt, b$$102, [0], JAM.policy.p3)) {
        var h$$12 = Number("0" + JAM.call(b$$102.substr, b$$102, [1], JAM.policy.p3));
        var v1456 = isNaN(h$$12);
        if (!v1456) {
          g$$16 = JAM.call(String.fromCharCode, String, [h$$12], JAM.policy.p3);
        }
      }
      if (!g$$16) {
        JAM.set(d$$46, "innerHTML", a$$127 + " ");
        var v4030 = d$$46.firstChild.nodeValue;
        g$$16 = JAM.call(v4030.slice, v4030, [0, -1], JAM.policy.p3);
      }
      return JAM.set(c$$66, a$$127, g$$16, JAM.policy.p2);
    }
    var c$$66 = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'};
    var d$$46;
    var v1458;
    if (b$$101) {
      v1458 = JAM.call(b$$101.createElement, b$$101, ["div"], JAM.policy.p3);
    } else {
      v1458 = JAM.call(document.createElement, document, ["div"], JAM.policy.p3);
    }
    d$$46 = v1458;
    return JAM.call(a$$126.replace, a$$126, [Wa$$1, v55], JAM.policy.p3);
  }
  function Va$$1(a$$125) {
    var v1459;
    if (-1 != JAM.call(a$$125.indexOf, a$$125, ["&"], JAM.policy.p3)) {
      var v3079;
      if ("document" in m$$3) {
        v3079 = Ta$$1(a$$125);
      } else {
        v3079 = Ua$$1(a$$125);
      }
      v1459 = v3079;
    } else {
      v1459 = a$$125;
    }
    return v1459;
  }
  function Sa$$1(a$$124, b$$100) {
    if (b$$100) {
      var v4033 = JAM.call(a$$124.replace, a$$124, [Na$$1, "&amp;"], JAM.policy.p3);
      var v3081 = JAM.call(v4033.replace, v4033, [Oa$$1, "&lt;"], JAM.policy.p3);
      var v1460 = JAM.call(v3081.replace, v3081, [Pa$$1, "&gt;"], JAM.policy.p3);
      return JAM.call(v1460.replace, v1460, [Qa$$1, "&quot;"], JAM.policy.p3);
    }
    if (!JAM.call(Ra$$1.test, Ra$$1, [a$$124], JAM.policy.p3)) {
      return a$$124;
    }
    var v1462 = -1 != JAM.call(a$$124.indexOf, a$$124, ["&"], JAM.policy.p3);
    if (v1462) {
      a$$124 = JAM.call(a$$124.replace, a$$124, [Na$$1, "&amp;"], JAM.policy.p3);
    }
    var v1463 = -1 != JAM.call(a$$124.indexOf, a$$124, ["<"], JAM.policy.p3);
    if (v1463) {
      a$$124 = JAM.call(a$$124.replace, a$$124, [Oa$$1, "&lt;"], JAM.policy.p3);
    }
    var v1464 = -1 != JAM.call(a$$124.indexOf, a$$124, [">"], JAM.policy.p3);
    if (v1464) {
      a$$124 = JAM.call(a$$124.replace, a$$124, [Pa$$1, "&gt;"], JAM.policy.p3);
    }
    var v1465 = -1 != JAM.call(a$$124.indexOf, a$$124, ['"'], JAM.policy.p3);
    if (v1465) {
      a$$124 = JAM.call(a$$124.replace, a$$124, [Qa$$1, "&quot;"], JAM.policy.p3);
    }
    return a$$124;
  }
  function La$$1(a$$123) {
    var v1466;
    if (a$$123) {
      v1466 = "googlesyndication";
    } else {
      v1466 = ma$$1("", "googlesyndication");
    }
    return v1466;
  }
  function Ja$$1() {
    return ma$$1("", "doubleclick");
  }
  function Da$$1() {
    var a$$122 = "r20131120";
    return a$$122;
  }
  function ma$$1(a$$121, b$$99) {
    if (!a$$121) {
      return b$$99;
    }
    var c$$65 = JAM.call(a$$121.match, a$$121, [la$$1], JAM.policy.p3);
    var v1468;
    if (c$$65) {
      v1468 = c$$65[0];
    } else {
      v1468 = b$$99;
    }
    return v1468;
  }
  function ka$$1(a$$120, b$$98) {
    var v1469;
    if (JAM.call(/^true$/.test, /^true$/, [a$$120], JAM.policy.p3)) {
      v1469 = !0;
    } else {
      var v3087;
      if (JAM.call(/^false$/.test, /^false$/, [a$$120], JAM.policy.p3)) {
        v3087 = !1;
      } else {
        v3087 = b$$98;
      }
      v1469 = v3087;
    }
    return v1469;
  }
  function t$$1(a$$119, b$$97) {
    var c$$64 = parseFloat(a$$119);
    var v1470;
    var v4598 = isNaN(c$$64);
    if (!v4598) {
      v4598 = 1 < c$$64;
    }
    var v4035 = v4598;
    if (!v4035) {
      v4035 = 0 > c$$64;
    }
    if (v4035) {
      v1470 = b$$97;
    } else {
      v1470 = c$$64;
    }
    return v1470;
  }
  function ja$$1(a$$118, b$$96) {
    function c$$63() {
      return;
    }
    c$$63.prototype = b$$96.prototype;
    a$$118.md = b$$96.prototype;
    var v1471 = a$$118;
    var v5193 = new c$$63;
    v1471.prototype = v5193;
    a$$118.prototype.constructor = a$$118;
    return;
  }
  function ga$$1(a$$115, b$$92) {
    function v56() {
      var b$$93 = JAM.call(c$$60.slice, c$$60, [], JAM.policy.p3);
      var v1473 = b$$93.push;
      JAM.call(v1473.apply, v1473, [b$$93, arguments], JAM.policy.p3);
      return JAM.call(a$$115.apply, a$$115, [this, b$$93], JAM.policy.p3);
    }
    var v1474 = Array.prototype.slice;
    var c$$60 = JAM.call(v1474.call, v1474, [arguments, 1], JAM.policy.p3);
    return v56;
  }
  function r$$2(a$$114, b$$91, c$$59) {
    var v1475;
    var v4036 = Function.prototype.bind;
    if (v4036) {
      var v5023 = Function.prototype.bind;
      var v4880 = JAM.call(v5023.toString, v5023, [], JAM.policy.p3);
      v4036 = -1 != JAM.call(v4880.indexOf, v4880, ["native code"], JAM.policy.p3);
    }
    if (v4036) {
      v1475 = ea$$1;
    } else {
      v1475 = fa$$1;
    }
    r$$2 = v1475;
    return JAM.call(r$$2.apply, r$$2, [null, arguments], JAM.policy.p3);
  }
  function fa$$1(a$$113, b$$90, c$$57) {
    function v58() {
      return JAM.call(a$$113.apply, a$$113, [b$$90, arguments], JAM.policy.p3);
    }
    function v57() {
      var v1476 = Array.prototype.slice;
      var c$$58 = JAM.call(v1476.call, v1476, [arguments], JAM.policy.p3);
      var v1477 = Array.prototype.unshift;
      JAM.call(v1477.apply, v1477, [c$$58, d$$45], JAM.policy.p3);
      return JAM.call(a$$113.apply, a$$113, [b$$90, c$$58], JAM.policy.p3);
    }
    if (!a$$113) {
      throw Error();
    }
    if (2 < arguments.length) {
      var v1479 = Array.prototype.slice;
      var d$$45 = JAM.call(v1479.call, v1479, [arguments, 2], JAM.policy.p3);
      return v57;
    }
    return v58;
  }
  function ea$$1(a$$112, b$$89, c$$56) {
    var v1481 = a$$112.call;
    return JAM.call(v1481.apply, v1481, [a$$112.bind, arguments], JAM.policy.p3);
  }
  function da$$1(a$$111) {
    var b$$88 = typeof a$$111;
    var v3096 = "object" == b$$88;
    if (v3096) {
      v3096 = null != a$$111;
    }
    var v1483 = v3096;
    if (!v1483) {
      v1483 = "function" == b$$88;
    }
    return v1483;
  }
  function q$$3(a$$110) {
    return "number" == typeof a$$110;
  }
  function p$$1(a$$109) {
    return "string" == typeof a$$109;
  }
  function ca$$1(a$$108) {
    var b$$87 = ba$$1(a$$108);
    var v1486 = "array" == b$$87;
    if (!v1486) {
      var v3098 = "object" == b$$87;
      if (v3098) {
        v3098 = "number" == typeof a$$108.length;
      }
      v1486 = v3098;
    }
    return v1486;
  }
  function n$$2(a$$107) {
    return "array" == ba$$1(a$$107);
  }
  function ba$$1(a$$106) {
    var b$$86 = typeof a$$106;
    if ("object" == b$$86) {
      if (a$$106) {
        if (a$$106 instanceof Array) {
          return "array";
        }
        if (a$$106 instanceof Object) {
          return b$$86;
        }
        var v1490 = Object.prototype.toString;
        var c$$55 = JAM.call(v1490.call, v1490, [a$$106], JAM.policy.p3);
        if ("[object Window]" == c$$55) {
          return "object";
        }
        var v3101 = "[object Array]" == c$$55;
        if (!v3101) {
          var v4881 = "number" == typeof a$$106.length;
          if (v4881) {
            v4881 = "undefined" != typeof a$$106.splice;
          }
          var v4603 = v4881;
          if (v4603) {
            v4603 = "undefined" != typeof a$$106.propertyIsEnumerable;
          }
          var v4038 = v4603;
          if (v4038) {
            v4038 = !JAM.call(a$$106.propertyIsEnumerable, a$$106, ["splice"], JAM.policy.p3);
          }
          v3101 = v4038;
        }
        if (v3101) {
          return "array";
        }
        var v3102 = "[object Function]" == c$$55;
        if (!v3102) {
          var v4605 = "undefined" != typeof a$$106.call;
          if (v4605) {
            v4605 = "undefined" != typeof a$$106.propertyIsEnumerable;
          }
          var v4040 = v4605;
          if (v4040) {
            v4040 = !JAM.call(a$$106.propertyIsEnumerable, a$$106, ["call"], JAM.policy.p3);
          }
          v3102 = v4040;
        }
        if (v3102) {
          return "function";
        }
      } else {
        return "null";
      }
    } else {
      var v3103 = "function" == b$$86;
      if (v3103) {
        v3103 = "undefined" == typeof a$$106.call;
      }
      if (v3103) {
        return "object";
      }
    }
    return b$$86;
  }
  function aa$$1(a$$105, b$$85, c$$54) {
    a$$105 = JAM.call(a$$105.split, a$$105, ["."], JAM.policy.p3);
    c$$54 = c$$54 || m$$3;
    var v3104 = a$$105[0] in c$$54;
    if (!v3104) {
      v3104 = !c$$54.execScript;
    }
    var v1496 = v3104;
    if (!v1496) {
      JAM.call(c$$54.execScript, c$$54, ["var " + a$$105[0]], JAM.policy.p3);
    }
    var d$$44;
    var v3107 = a$$105.length;
    if (v3107) {
      v3107 = d$$44 = JAM.call(a$$105.shift, a$$105, [], JAM.policy.p3);
    }
    var v1498 = v3107;
    for (;v1498;) {
      var v1497;
      var v4047 = a$$105.length;
      if (!v4047) {
        v4047 = void 0 === b$$85;
      }
      if (v4047) {
        var v3108;
        if (c$$54[d$$44]) {
          v3108 = c$$54[d$$44];
        } else {
          v3108 = JAM.set(c$$54, d$$44, {}, JAM.policy.p2);
        }
        v1497 = c$$54 = v3108;
      } else {
        v1497 = JAM.set(c$$54, d$$44, b$$85, JAM.policy.p2);
      }
      v1497;
      var v3110 = a$$105.length;
      if (v3110) {
        v3110 = d$$44 = JAM.call(a$$105.shift, a$$105, [], JAM.policy.p3);
      }
      v1498 = v3110;
    }
    return;
  }
  function jb$$1(a$$70, b$$56, c$$33, d$$25) {
    function v60() {
      JAM.call(f$$10.appendChild, f$$10, [e$$20], JAM.policy.p3);
      return;
    }
    function v59() {
      var v3111 = "complete" == e$$20.readyState;
      if (!v3111) {
        v3111 = "loaded" == e$$20.readyState;
      }
      if (v3111) {
        try {
          JAM.call(b$$56, null, [], JAM.policy.p3);
        } catch (a$$71) {
        }
      }
      return;
    }
    d$$25 = d$$25 || document;
    var e$$20 = JAM.call(d$$25.createElement, d$$25, ["script"], JAM.policy.p3);
    e$$20.type = "text/javascript";
    if (b$$56) {
      var v3112;
      if (void 0 !== e$$20.onreadystatechange) {
        v3112 = JAM.set(e$$20, "onreadystatechange", v59);
      } else {
        v3112 = JAM.set(e$$20, "onload", b$$56);
      }
      v3112;
    }
    if (c$$33) {
      e$$20.id = c$$33;
    }
    e$$20.src = a$$70;
    var f$$10 = JAM.call(d$$25.getElementsByTagName, d$$25, ["head"], JAM.policy.p3)[0];
    if (!f$$10) {
      return!1;
    }
    try {
      JAM.call(window.setTimeout, window, [v60, 0], JAM.policy.p3);
    } catch (g$$8) {
      return!1;
    }
    return!0;
  }
  function kb$$1(a$$72, b$$57) {
    return y$$31(a$$72, "load", b$$57);
  }
  function rb$$1() {
    var JSCompiler_inline_result$$74;
    var a$$inline_78 = "msie";
    var v1502;
    if (a$$inline_78 in qb$$1) {
      v1502 = qb$$1[a$$inline_78];
    } else {
      var v3113 = qb$$1;
      var v3114 = a$$inline_78;
      var v4885 = navigator.userAgent;
      var v4612 = JAM.call(v4885.toLowerCase, v4885, [], JAM.policy.p3);
      v1502 = JAM.set(v3113, v3114, -1 != JAM.call(v4612.indexOf, v4612, [a$$inline_78], JAM.policy.p3), JAM.policy.p2);
    }
    JSCompiler_inline_result$$74 = v1502;
    var v1503 = JSCompiler_inline_result$$74;
    if (v1503) {
      v1503 = !window.opera;
    }
    return v1503;
  }
  function tb() {
    var v3117 = navigator.plugins;
    if (v3117) {
      v3117 = navigator.mimeTypes.length;
    }
    if (v3117) {
      var a$$75 = navigator.plugins["Shockwave Flash"];
      var v3118 = a$$75;
      if (v3118) {
        v3118 = a$$75.description;
      }
      if (v3118) {
        var v3119 = a$$75.description;
        var v1505 = JAM.call(v3119.replace, v3119, [/([a-zA-Z]|\s)+/, ""], JAM.policy.p3);
        return JAM.call(v1505.replace, v1505, [/(\s)+r/, "."], JAM.policy.p3);
      }
    } else {
      var v3120 = navigator.userAgent;
      if (v3120) {
        var v4613 = navigator.userAgent;
        v3120 = 0 <= JAM.call(v4613.indexOf, v4613, ["Windows CE"], JAM.policy.p3);
      }
      if (v3120) {
        a$$75 = 3;
        var b$$58 = 1;
        for (;b$$58;) {
          try {
            b$$58 = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + (a$$75 + 1));
            a$$75 = a$$75 + 1;
          } catch (c$$34) {
            b$$58 = null;
          }
        }
        return JAM.call(a$$75.toString, a$$75, [], JAM.policy.p3);
      }
      if (rb$$1()) {
        b$$58 = null;
        try {
          b$$58 = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
        } catch (d$$26) {
          a$$75 = 0;
          try {
            b$$58 = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            a$$75 = 6;
            b$$58.AllowScriptAccess = "always";
          } catch (e$$21) {
            if (6 == a$$75) {
              return JAM.call(a$$75.toString, a$$75, [], JAM.policy.p3);
            }
          }
          try {
            b$$58 = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
          } catch (f$$11) {
          }
        }
        if (b$$58) {
          var v4057 = JAM.call(b$$58.GetVariable, b$$58, ["$version"], JAM.policy.p3);
          a$$75 = JAM.call(v4057.split, v4057, [" "], JAM.policy.p3)[1];
          return JAM.call(a$$75.replace, a$$75, [/,/g, "."], JAM.policy.p3);
        }
      }
    }
    return "0";
  }
  function ub(a$$76) {
    var b$$59 = a$$76.google_ad_format;
    var v1511;
    if (b$$59) {
      v1511 = 0 < JAM.call(b$$59.indexOf, b$$59, ["_0ads"], JAM.policy.p3);
    } else {
      var v3124 = "html" != a$$76.google_ad_output;
      if (v3124) {
        v3124 = 0 < a$$76.google_num_radlinks;
      }
      v1511 = v3124;
    }
    return v1511;
  }
  function Ze(a$$77, b$$60, c$$35, d$$27) {
    var v1512 = c$$35;
    if (!v1512) {
      v1512 = a$$77.google_ad_width;
    }
    c$$35 = v1512;
    var v1513 = d$$27;
    if (!v1513) {
      v1513 = a$$77.google_ad_height;
    }
    d$$27 = v1513;
    if (a$$77.top == a$$77) {
      return!1;
    }
    var e$$22 = b$$60.documentElement;
    if (c$$35 && d$$27) {
      var f$$12 = 1;
      var g$$9 = 1;
      var v1515;
      if (a$$77.innerHeight) {
        f$$12 = a$$77.innerWidth;
        v1515 = g$$9 = a$$77.innerHeight;
      } else {
        var v3128;
        var v4614 = e$$22;
        if (v4614) {
          v4614 = e$$22.clientHeight;
        }
        if (v4614) {
          f$$12 = e$$22.clientWidth;
          v3128 = g$$9 = e$$22.clientHeight;
        } else {
          var v4060 = b$$60.body;
          if (v4060) {
            f$$12 = b$$60.body.clientWidth;
            v4060 = g$$9 = b$$60.body.clientHeight;
          }
          v3128 = v4060;
        }
        v1515 = v3128;
      }
      v1515;
      var v3130 = g$$9 > 2 * d$$27;
      if (!v3130) {
        v3130 = f$$12 > 2 * c$$35;
      }
      if (v3130) {
        return!1;
      }
    }
    return!0;
  }
  function $e(a$$78, b$$61) {
    function v61(b$$62, d$$28) {
      JAM.set(a$$78, "google_" + d$$28, b$$62, JAM.policy.p2);
      return;
    }
    x$$50(b$$61, v61);
    return;
  }
  function bf(a$$79, b$$63) {
    var c$$36 = af();
    var v1519;
    if (c$$36) {
      v1519 = c$$36;
    } else {
      var v3131;
      if (b$$63) {
        v3131 = a$$79.referrer;
      } else {
        v3131 = a$$79.URL;
      }
      v1519 = v3131;
    }
    return v1519;
  }
  function Jh(a$$90) {
    var b$$74 = 1;
    var c$$45 = 0;
    var d$$36;
    var v3132 = void 0 != a$$90;
    if (v3132) {
      v3132 = "" != a$$90;
    }
    if (v3132) {
      b$$74 = 0;
      d$$36 = a$$90.length - 1;
      var v1520 = 0 <= d$$36;
      for (;v1520;) {
        c$$45 = JAM.call(a$$90.charCodeAt, a$$90, [d$$36], JAM.policy.p3);
        b$$74 = (b$$74 << 6 & 268435455) + c$$45 + (c$$45 << 14);
        c$$45 = b$$74 & 266338304;
        var v3134;
        if (0 != c$$45) {
          v3134 = b$$74 ^ c$$45 >> 21;
        } else {
          v3134 = b$$74;
        }
        b$$74 = v3134;
        d$$36 = d$$36 - 1;
        v1520 = 0 <= d$$36;
      }
    }
    return b$$74;
  }
  function Fh(a$$91, b$$75) {
    var v3135 = !a$$91;
    if (!v3135) {
      v3135 = "none" == a$$91;
    }
    if (v3135) {
      return 1;
    }
    a$$91 = String(a$$91);
    var v1523 = "auto" == a$$91;
    if (v1523) {
      a$$91 = b$$75;
      var v4069 = "www." == JAM.call(a$$91.substring, a$$91, [0, 4], JAM.policy.p3);
      if (v4069) {
        a$$91 = JAM.call(a$$91.substring, a$$91, [4, a$$91.length], JAM.policy.p3);
      }
    }
    return Jh(JAM.call(a$$91.toLowerCase, a$$91, [], JAM.policy.p3));
  }
  function ji(a$$94) {
    var v1525;
    if (null != a$$94) {
      v1525 = '"' + a$$94 + '"';
    } else {
      v1525 = '""';
    }
    return v1525;
  }
  function ii() {
    function v65() {
      f$$19 = !0;
      var a$$100 = 0;
      var v1527 = a$$100 < c$$51.google_top_js_callbacks.length;
      for (;v1527;) {
        var v1526 = c$$51.google_top_js_callbacks[a$$100] === h$$11;
        if (v1526) {
          var v4072 = c$$51.google_top_js_callbacks;
          JAM.call(v4072.splice, v4072, [a$$100, 1], JAM.policy.p3);
          JAM.call(h$$11, null, [], JAM.policy.p3);
        }
        a$$100 = a$$100 + 1;
        v1527 = a$$100 < c$$51.google_top_js_callbacks.length;
      }
      return;
    }
    function v64() {
      var v3141 = null != e$$31.j.deviceAccelerationWithGravity;
      if (!v3141) {
        v3141 = null != e$$31.j.deviceAccelerationWithoutGravity;
      }
      var v1528 = v3141;
      if (!v1528) {
        v1528 = e$$31.j.didDeviceMotionCallbacksTimeoutExpire;
      }
      return v1528;
    }
    function v63() {
      var v1529 = null != e$$31.j.deviceOrientation;
      if (!v1529) {
        v1529 = e$$31.j.didDeviceOrientationCallbacksTimeoutExpire;
      }
      return v1529;
    }
    function v62() {
      var v1530 = 3 != c$$51.google_top_js_status;
      if (!v1530) {
        v1530 = f$$19;
      }
      return v1530;
    }
    if (hc() != D$$1()) {
      ze = ze | 4;
    }
    if (Ha$$1) {
      ze = ze | 16;
    }
    if (3 == Xe(document)) {
      ze = ze | 32;
    }
    if ("google_dn" in window) {
      ze = ze | 8;
    }
    if (window.google_loader_features_used) {
      ze = ze | window.google_loader_features_used;
    }
    var v3153;
    if (B$$2) {
      v3153 = 1 == yb(window);
    } else {
      v3153 = !yb(window);
    }
    var v1535 = v3153;
    if (v1535) {
      li();
    }
    Vi();
    var a$$99 = null;
    var b$$81 = "";
    a$$99 = window.google_async_iframe_id;
    var c$$51 = D$$1();
    var v1536;
    if (a$$99) {
      var v3154 = c$$51.document;
      v1536 = a$$99 = JAM.call(v3154.getElementById, v3154, [a$$99], JAM.policy.p3);
    } else {
      b$$81 = "google_temp_span";
      v1536 = a$$99 = Zi(b$$81);
    }
    v1536;
    var d$$42 = Of;
    var v1537 = c$$51.google_top_experiment !== d$$42.EXPERIMENT_ZERO_LATENCY;
    if (v1537) {
      v1537 = 3 === c$$51.google_top_js_status;
    }
    d$$42 = v1537;
    var e$$31 = Mh(c$$51);
    var v3158 = d$$42;
    if (!v3158) {
      var v4080 = e$$31;
      if (v4080) {
        var v4621 = JAM.call(e$$31.P, e$$31, [], JAM.policy.p3);
        if (!v4621) {
          v4621 = JAM.call(e$$31.O, e$$31, [], JAM.policy.p3);
        }
        v4080 = v4621;
      }
      v3158 = v4080;
    }
    if (v3158) {
      var f$$19 = !1;
      var g$$15 = [];
      if (d$$42) {
        JAM.call(g$$15.push, g$$15, [v62], JAM.policy.p3);
      }
      var v3159 = e$$31;
      if (v3159) {
        v3159 = JAM.call(e$$31.P, e$$31, [], JAM.policy.p3);
      }
      var v1538 = v3159;
      if (v1538) {
        JAM.call(g$$15.push, g$$15, [v63], JAM.policy.p3);
      }
      var v3160 = e$$31;
      if (v3160) {
        v3160 = JAM.call(e$$31.O, e$$31, [], JAM.policy.p3);
      }
      var v1539 = v3160;
      if (v1539) {
        JAM.call(g$$15.push, g$$15, [v64], JAM.policy.p3);
      }
      var h$$11 = ga$$1(Yi, a$$99, b$$81, e$$31, g$$15);
      if (d$$42) {
        var v5030 = new Date;
        Xi = JAM.call(v5030.getTime, v5030, [], JAM.policy.p3);
        var v5031 = c$$51.google_top_js_callbacks;
        if (!v5031) {
          v5031 = [];
        }
        c$$51.google_top_js_callbacks = v5031;
        var v4890 = c$$51.google_top_js_callbacks;
        JAM.call(v4890.push, v4890, [h$$11], JAM.policy.p3);
        b$$81 = v65;
        JAM.call(window.setTimeout, window, [b$$81, 150], JAM.policy.p3);
      }
      var v3161 = e$$31;
      if (v3161) {
        v3161 = JAM.call(e$$31.fb, e$$31, [], JAM.policy.p3);
      }
      var v1540 = v3161;
      if (v1540) {
        JAM.call(e$$31.Gc, e$$31, [], JAM.policy.p3);
      }
      var v3162 = e$$31;
      if (v3162) {
        v3162 = JAM.call(e$$31.P, e$$31, [], JAM.policy.p3);
      }
      var v1541 = v3162;
      if (v1541) {
        JAM.call(e$$31.nc, e$$31, [h$$11, 1E3], JAM.policy.p3);
      }
      var v3163 = e$$31;
      if (v3163) {
        v3163 = JAM.call(e$$31.O, e$$31, [], JAM.policy.p3);
      }
      var v1542 = v3163;
      if (v1542) {
        JAM.call(e$$31.mc, e$$31, [h$$11, 1E3], JAM.policy.p3);
      }
    } else {
      Yi(a$$99, b$$81);
    }
    return;
  }
  function $h() {
    var v1544 = null == window.google_ad_output;
    if (v1544) {
      window.google_ad_output = "html";
    }
    var JSCompiler_temp_const$$578 = window;
    var JSCompiler_inline_result$$579;
    JSCompiler_inline_label_yh_592: {
      var b$$inline_589 = window.google_ad_client;
      if (!b$$inline_589) {
        JSCompiler_inline_result$$579 = "";
        break JSCompiler_inline_label_yh_592;
      }
      b$$inline_589 = JAM.call(b$$inline_589.toLowerCase, b$$inline_589, [], JAM.policy.p3);
      var JSCompiler_inline_result$$inline_590;
      var a$$inline_591 = b$$inline_589;
      var v3165 = a$$inline_591;
      if (v3165) {
        v3165 = "ca-" != JAM.call(a$$inline_591.substring, a$$inline_591, [0, 3], JAM.policy.p3);
      }
      var v1546 = v3165;
      if (v1546) {
        a$$inline_591 = "ca-" + a$$inline_591;
      }
      JSCompiler_inline_result$$inline_590 = a$$inline_591;
      JSCompiler_inline_result$$579 = b$$inline_589 = JSCompiler_inline_result$$inline_590;
    }
    JSCompiler_temp_const$$578.google_ad_client = JSCompiler_inline_result$$579;
    if (null == window.google_flash_version) {
      var JSCompiler_temp_const$$555 = window;
      var JSCompiler_inline_result$$556;
      JSCompiler_inline_label_sb$$1_594: {
        try {
          JSCompiler_inline_result$$556 = tb();
        } catch (a$$inline_593) {
          JSCompiler_inline_result$$556 = "0";
        }
      }
      JSCompiler_temp_const$$555.google_flash_version = JSCompiler_inline_result$$556;
    }
    var v3167 = window.google_ad_section;
    if (!v3167) {
      v3167 = window.google_ad_region;
    }
    var v1548 = v3167;
    if (!v1548) {
      v1548 = "";
    }
    window.google_ad_section = v1548;
    var v3169 = window.google_country;
    if (!v3169) {
      v3169 = window.google_gl;
    }
    var v1549 = v3169;
    if (!v1549) {
      v1549 = "";
    }
    window.google_country = v1549;
    var v1550 = new Date;
    var a$$inline_89 = JAM.call(v1550.getTime, v1550, [], JAM.policy.p3);
    var v1551 = n$$2(window.google_color_bg);
    if (v1551) {
      var v3172 = window;
      var v5194 = zh(window.google_color_bg, a$$inline_89);
      v3172.google_color_bg = v5194;
    }
    var v1552 = n$$2(window.google_color_text);
    if (v1552) {
      var v3174 = window;
      var v5195 = zh(window.google_color_text, a$$inline_89);
      v3174.google_color_text = v5195;
    }
    var v1553 = n$$2(window.google_color_link);
    if (v1553) {
      var v3176 = window;
      var v5196 = zh(window.google_color_link, a$$inline_89);
      v3176.google_color_link = v5196;
    }
    var v1554 = n$$2(window.google_color_url);
    if (v1554) {
      var v3178 = window;
      var v5197 = zh(window.google_color_url, a$$inline_89);
      v3178.google_color_url = v5197;
    }
    var v1555 = n$$2(window.google_color_border);
    if (v1555) {
      var v3180 = window;
      var v5198 = zh(window.google_color_border, a$$inline_89);
      v3180.google_color_border = v5198;
    }
    var v1556 = n$$2(window.google_color_line);
    if (v1556) {
      var v3182 = window;
      var v5199 = zh(window.google_color_line, a$$inline_89);
      v3182.google_color_line = v5199;
    }
    return;
  }
  var m$$3 = this;
  var v1557 = Date.now;
  if (!v1557) {
    v1557 = v66;
  }
  var ha$$1 = v1557;
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
  var v3185 = B$$2;
  if (v3185) {
    v3185 = window.parent;
  }
  var v1568 = v3185;
  if (!v1568) {
    v1568 = window;
  }
  var Ob = v1568;
  var Pb = {CONTROL:"C", EXPERIMENT:"E"};
  var Xb = Array.prototype;
  var v1569;
  if (Xb.indexOf) {
    v1569 = v71;
  } else {
    v1569 = v72;
  }
  var Yb = v1569;
  var v1570;
  if (Xb.forEach) {
    v1570 = v73;
  } else {
    v1570 = v74;
  }
  var Zb = v1570;
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
  var Fc = JAM.call("constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split, "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf", [" "], JAM.policy.p3);
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
  var v1602 = !N$$1;
  if (!v1602) {
    var v3190 = N$$1;
    if (v3190) {
      v3190 = 9 <= Vc;
    }
    v1602 = v3190;
  }
  var Wc = v1602;
  var v4091 = !Oc;
  if (v4091) {
    v4091 = !N$$1;
  }
  var v3192 = v4091;
  if (!v3192) {
    var v4092 = N$$1 && N$$1;
    if (v4092) {
      v4092 = 9 <= Vc;
    }
    v3192 = v4092;
  }
  var v1603 = v3192;
  if (!v1603) {
    if (Oc) {
      Uc("1.9.1");
    }
  }
  var v1604 = N$$1;
  if (v1604) {
    v1604 = !Uc("9");
  }
  var Xc = v1604;
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
  var v1664;
  if (JAM.call(/\uffff/.test, /\uffff/, ["\uffff"], JAM.policy.p3)) {
    v1664 = /[\\\"\x00-\x1f\x7f-\uffff]/g;
  } else {
    v1664 = /[\\\"\x00-\x1f\x7f-\xff]/g;
  }
  var De = v1664;
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
  var v1685 = new Date;
  var vf = JAM.call(v1685.getTime, v1685, [], JAM.policy.p3);
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
  var v1714;
  if (JAM.call(/\uffff/.test, /\uffff/, ["\uffff"], JAM.policy.p3)) {
    v1714 = /[\\\"\x00-\x1f\x7f-\uffff]/g;
  } else {
    v1714 = /[\\\"\x00-\x1f\x7f-\xff]/g;
  }
  var jg = v1714;
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
  var v1823 = w$$6.google_eas_queue;
  if (!v1823) {
    v1823 = [];
  }
  w$$6.google_eas_queue = v1823;
  var ei = Mb(v253);
  var zi = !1;
  var yi = "";
  var Xi = 0;
  var Ni = /[+, ]/;
  window.google_render_ad = ii;
  te("show_ads::main", ve, bi, xc);
  return;
}
function v22() {
  function v21(a$$45) {
    this.a = 0;
    JAM.call(a$$45.k, a$$45, [], JAM.policy.p3);
    return;
  }
  function v20() {
    var v3215 = 0 == this.a;
    if (v3215) {
      v3215 = this.c.length;
    }
    if (v3215) {
      var v1824 = this.c;
      var a$$44 = JAM.call(v1824.shift, v1824, [], JAM.policy.p3);
      this.a = 2;
      var b$$36 = M("sjr::run", JAM.call(p, null, [this.f, this, a$$44], JAM.policy.p3));
      var v1826 = a$$44.h;
      JAM.call(v1826.setTimeout, v1826, [b$$36, 0], JAM.policy.p3);
      Ua(this);
    }
    return;
  }
  function v19() {
    var v3217 = !window;
    if (!v3217) {
      v3217 = !Array;
    }
    return!v3217;
  }
  function v18() {
    var v1829 = 1 == this.a;
    if (v1829) {
      var v4097 = null != this.d;
      if (v4097) {
        var v4891 = this.b;
        JAM.call(v4891.clearTimeout, v4891, [this.d], JAM.policy.p3);
        this.d = null;
      }
      this.a = 0;
    }
    Ua(this);
    return;
  }
  function v17(a$$42) {
    this.a = 1;
    if (a$$42) {
      var b$$34 = M("sjr::timeout", JAM.call(p, null, [this.e, this], JAM.policy.p3));
      var v1831 = this.b;
      var v5200 = JAM.call(v1831.setTimeout, v1831, [b$$34, a$$42], JAM.policy.p3);
      this.d = v5200;
    }
    return;
  }
  function v16(a$$41, b$$33) {
    var v1832 = this.c;
    var v4098 = b$$33;
    if (!v4098) {
      v4098 = this.b;
    }
    JAM.call(v1832.push, v1832, [new Ta(a$$41, v4098)], JAM.policy.p3);
    Ua(this);
    return;
  }
  function v15(a$$40, b$$32) {
    var v1834;
    var v4624 = 0 != this.a;
    if (!v4624) {
      v4624 = 0 != this.c.length;
    }
    var v4099 = v4624;
    if (!v4099) {
      var v4625 = b$$32;
      if (v4625) {
        v4625 = b$$32 != window;
      }
      v4099 = v4625;
    }
    if (v4099) {
      v1834 = JAM.call(this.g, this, [a$$40, b$$32], JAM.policy.p3);
    } else {
      this.a = 2;
      v1834 = JAM.call(this.f, this, [new Ta(a$$40, window)], JAM.policy.p3);
    }
    v1834;
    return;
  }
  function v14(a$$36, b$$29) {
    var c$$19 = La("rs", a$$36);
    var d$$13;
    t: {
      var v4101 = a$$36;
      if (v4101) {
        v4101 = d$$13 = JAM.call(a$$36.match, a$$36, ["dt=([^&]+)"], JAM.policy.p3);
      }
      var v3222 = v4101;
      if (v3222) {
        v3222 = 2 == d$$13.length;
      }
      if (v3222) {
        d$$13 = d$$13[1];
        break t;
      }
      d$$13 = "";
    }
    var v3223 = new Date;
    d$$13 = JAM.call(v3223.getTime, v3223, [], JAM.policy.p3) - d$$13;
    var v4103;
    if (1E4 > d$$13) {
      v4103 = d$$13 + "";
    } else {
      v4103 = "M";
    }
    c$$19 = JAM.call(c$$19.replace, c$$19, [/&dtd=(\d+|M)/, "&dtd=" + v4103], JAM.policy.p3);
    JAM.call(this.set, this, [b$$29, c$$19], JAM.policy.p3);
    return c$$19;
  }
  function v13(a$$35) {
    var v1838 = this.b.document;
    a$$35 = JAM.call(v1838.getElementById, v1838, [a$$35], JAM.policy.p3);
    var b$$28 = a$$35.contentWindow.document;
    var v4104 = a$$35.onload;
    if (v4104) {
      v4104 = b$$28;
    }
    var v3226 = v4104;
    if (v3226) {
      var v4105 = !b$$28.body;
      if (!v4105) {
        v4105 = !b$$28.body.firstChild;
      }
      v3226 = v4105;
    }
    if (v3226) {
      JAM.call(a$$35.onload, a$$35, [], JAM.policy.p3);
    }
    return;
  }
  function v12(a$$34, b$$27) {
    JAM.set(this.i.handlers, a$$34, b$$27, JAM.policy.p2);
    var v1842 = this.b.addEventListener;
    if (v1842) {
      var v3229 = this.b;
      JAM.call(v3229.addEventListener, v3229, ["load", JAM.call(p, null, [this.j, this, a$$34], JAM.policy.p3), !1], JAM.policy.p3);
    }
    return;
  }
  function rb() {
    var v3232 = !window.google_top_experiment;
    if (v3232) {
      v3232 = !window.google_top_js_status;
    }
    if (v3232) {
      var a$$69 = window;
      var v4109;
      if (a$$69.top == a$$69) {
        v4109 = 0;
      } else {
        var v4631;
        if (J(a$$69.top)) {
          v4631 = 1;
        } else {
          v4631 = 2;
        }
        v4109 = v4631;
      }
      if (2 !== v4109) {
        window.google_top_js_status = 0;
      } else {
        if (top.postMessage) {
          var b$$55;
          try {
            var v1843;
            if (D.top.frames.google_top_static_frame) {
              v1843 = !0;
            } else {
              v1843 = !1;
            }
            b$$55 = v1843;
          } catch (c$$32) {
            b$$55 = !1;
          }
          if (b$$55) {
            var v4111 = window;
            var v5201 = I(["jp_c", "jp_zl", "jp_wfpmr"], ja);
            v4111.google_top_experiment = v5201;
            if ("jp_c" !== window.google_top_experiment) {
              a$$69 = window;
              var v1844;
              if (a$$69.addEventListener) {
                v1844 = JAM.call(a$$69.addEventListener, a$$69, ["message", hb, !1], JAM.policy.p3);
              } else {
                var v3236 = a$$69.attachEvent;
                if (v3236) {
                  v3236 = JAM.call(a$$69.attachEvent, a$$69, ["onmessage", hb], JAM.policy.p3);
                }
                v1844 = v3236;
              }
              v1844;
              window.google_top_js_status = 3;
              a$$69 = {0:"google_loc_request", 1:gb};
              b$$55 = [];
              var d$$24;
              for (d$$24 in a$$69) {
                JAM.call(b$$55.push, b$$55, [d$$24 + "=" + a$$69[d$$24]], JAM.policy.p3);
              }
              JAM.call(top.postMessage, top, [JAM.call(b$$55.join, b$$55, ["\n"], JAM.policy.p3), "*"], JAM.policy.p3);
            }
          } else {
            window.google_top_js_status = 2;
          }
        } else {
          window.google_top_js_status = 1;
        }
      }
    }
    var v3240 = d$$24 = window.adsbygoogle;
    if (v3240) {
      v3240 = d$$24.shift;
    }
    if (v3240) {
      b$$55 = 20;
      var v3241 = a$$69 = JAM.call(d$$24.shift, d$$24, [], JAM.policy.p3);
      if (v3241) {
        var v4113 = b$$55;
        b$$55 = b$$55 - 1;
        v3241 = 0 < v4113;
      }
      var v1851 = v3241;
      for (;v1851;) {
        try {
          qb(a$$69);
        } catch (e$$19) {
          JAM.call(window.setTimeout, window, [rb, 0], JAM.policy.p3);
          throw e$$19;
        }
        var v3242 = a$$69 = JAM.call(d$$24.shift, d$$24, [], JAM.policy.p3);
        if (v3242) {
          var v4114 = b$$55;
          b$$55 = b$$55 - 1;
          v3242 = 0 < v4114;
        }
        v1851 = v3242;
      }
    }
    window.adsbygoogle = {push:qb};
    return;
  }
  function qb(a$$68) {
    var b$$54 = a$$68.element;
    var v1853 = a$$68.params;
    if (!v1853) {
      v1853 = {};
    }
    a$$68 = v1853;
    if (b$$54) {
      var v3244 = !mb(b$$54);
      if (v3244) {
        var v4635 = b$$54.id;
        if (v4635) {
          v4635 = pb(b$$54.id);
        }
        b$$54 = v4635;
        v3244 = !b$$54;
      }
      if (v3244) {
        throw Error("adsbygoogle: 'element' has already been filled.");
      }
      if (!("innerHTML" in b$$54)) {
        throw Error("adsbygoogle.push(): 'element' is not a good DOM element.");
      }
    } else {
      b$$54 = pb();
      if (!b$$54) {
        throw Error("adsbygoogle.push(): All ins elements in the DOM with class=adsbygoogle already have ads in them.");
      }
    }
    var c$$31 = window;
    JAM.call(b$$54.setAttribute, b$$54, ["data-adsbygoogle-status", "done"], JAM.policy.p3);
    ob(b$$54, a$$68, c$$31);
    return;
  }
  function pb(a$$67) {
    var b$$53 = JAM.call(document.getElementsByTagName, document, ["ins"], JAM.policy.p3);
    var c$$30 = 0;
    var d$$23 = b$$53[c$$30];
    var v1858 = c$$30 < b$$53.length;
    for (;v1858;) {
      var v3247 = mb(d$$23);
      if (v3247) {
        var v4116 = !a$$67;
        if (!v4116) {
          v4116 = d$$23.id == a$$67;
        }
        v3247 = v4116;
      }
      if (v3247) {
        return d$$23;
      }
      d$$23 = b$$53[c$$30 = c$$30 + 1];
      v1858 = c$$30 < b$$53.length;
    }
    return null;
  }
  function nb(a$$66, b$$52, c$$29) {
    var d$$22 = a$$66.attributes;
    var e$$18 = d$$22.length;
    var f$$9 = 0;
    var v1862 = f$$9 < e$$18;
    for (;v1862;) {
      var g$$7 = d$$22[f$$9];
      if (JAM.call(/data-/.test, /data-/, [g$$7.nodeName], JAM.policy.p3)) {
        var v3251 = g$$7.nodeName;
        var v1859 = JAM.call(v3251.replace, v3251, ["data", "google"], JAM.policy.p3);
        var l$$5 = JAM.call(v1859.replace, v1859, [/-/g, "_"], JAM.policy.p3);
        var v1860 = JAM.call(b$$52.hasOwnProperty, b$$52, [l$$5], JAM.policy.p3);
        if (!v1860) {
          JAM.set(b$$52, l$$5, g$$7.nodeValue, JAM.policy.p2);
        }
      }
      f$$9 = f$$9 + 1;
      v1862 = f$$9 < e$$18;
    }
    d$$22 = b$$52.google_ad_format;
    var v3253 = "auto" == d$$22;
    if (!v3253) {
      v3253 = JAM.call(/^((^|,)(horizontal|vertical|rectangle))+$/.test, /^((^|,)(horizontal|vertical|rectangle))+$/, [d$$22], JAM.policy.p3);
    }
    if (v3253) {
      d$$22 = a$$66.offsetWidth;
      e$$18 = b$$52.google_ad_format;
      c$$29 = lb(d$$22, e$$18, c$$29);
      if (!c$$29) {
        throw Error("Cannot find a responsive size for a container of width=" + d$$22 + "px and data-ad-format=" + e$$18);
      }
      b$$52.google_ad_height = c$$29.height;
      var v1865 = b$$52;
      var v3255;
      var v4638 = 300 < d$$22;
      if (v4638) {
        v4638 = 300 < c$$29.height;
      }
      if (v4638) {
        v3255 = c$$29.width;
      } else {
        var v4119;
        if (1200 < d$$22) {
          v4119 = 1200;
        } else {
          v4119 = JAM.call(Math.round, Math, [d$$22], JAM.policy.p3);
        }
        v3255 = v4119;
      }
      v1865.google_ad_width = v3255;
      a$$66.style.height = b$$52.google_ad_height + "px";
      delete b$$52.google_ad_format;
      b$$52.google_loader_features_used = 128;
    } else {
      var v1867;
      var v4121 = JAM.call(ib.test, ib, [a$$66.style.width], JAM.policy.p3);
      if (v4121) {
        v4121 = JAM.call(ib.test, ib, [a$$66.style.height], JAM.policy.p3);
      }
      if (v4121) {
        v1867 = jb(a$$66.style, b$$52);
      } else {
        var v4903;
        if (c$$29.getComputedStyle) {
          v4903 = JAM.call(c$$29.getComputedStyle, c$$29, [a$$66, null], JAM.policy.p3);
        } else {
          v4903 = a$$66.currentStyle;
        }
        c$$29 = v4903;
        a$$66.style.width = c$$29.width;
        a$$66.style.height = c$$29.height;
        v1867 = jb(c$$29, b$$52);
      }
      v1867;
    }
    return;
  }
  function ob(a$$65, b$$51, c$$28) {
    function v0() {
      fb(c$$28, b$$51, a$$65);
      return;
    }
    var v3259 = a$$65.style;
    if (v3259) {
      v3259 = "none" == a$$65.style.display;
    }
    var v1869 = v3259;
    if (v1869) {
      b$$51.google_dn = 1;
    }
    va(c$$28);
    nb(a$$65, b$$51, c$$28);
    var d$$21 = 0;
    var v1871 = d$$21 < $.length;
    for (;v1871;) {
      var v1870 = $[d$$21];
      var v3261 = b$$51[$[d$$21]];
      if (!v3261) {
        v3261 = c$$28[$[d$$21]];
      }
      JAM.set(b$$51, v1870, v3261, JAM.policy.p2);
      d$$21 = d$$21 + 1;
      v1871 = d$$21 < $.length;
    }
    b$$51.google_loader_used = "aa";
    var v3263 = d$$21 = b$$51.google_ad_output;
    if (v3263) {
      v3263 = "html" != d$$21;
    }
    if (v3263) {
      throw Error("No support for google_ad_output=" + d$$21);
    }
    K("aa::main", L, v0);
    return;
  }
  function mb(a$$64) {
    var v1874 = JAM.call(/(^| )adsbygoogle($| )/.test, /(^| )adsbygoogle($| )/, [a$$64.className], JAM.policy.p3);
    if (v1874) {
      v1874 = "done" != JAM.call(a$$64.getAttribute, a$$64, ["data-adsbygoogle-status"], JAM.policy.p3);
    }
    return v1874;
  }
  function kb(a$$63) {
    a$$63 = a$$63.document;
    var v1875 = a$$63.documentElement.clientWidth;
    if (!v1875) {
      v1875 = a$$63.body.clientWidth;
    }
    return v1875;
  }
  function lb(a$$61, b$$49, c$$27) {
    function v1(a$$62, b$$50) {
      var v1876 = a$$62.width - b$$50.width;
      if (!v1876) {
        v1876 = a$$62.height - b$$50.height;
      }
      return v1876;
    }
    JAM.call(Z.sort, Z, [v1], JAM.policy.p3);
    var v1877 = "auto" == b$$49;
    if (v1877) {
      var v3274;
      if (.25 > a$$61 / kb(c$$27)) {
        v3274 = "vertical";
      } else {
        v3274 = "horizontal,rectangle";
      }
      b$$49 = v3274;
    }
    c$$27 = Z.length;
    var v1879 = c$$27;
    c$$27 = c$$27 - 1;
    for (;v1879;) {
      var v3275 = Z[c$$27].width <= a$$61;
      if (v3275) {
        v3275 = -1 != JAM.call(b$$49.indexOf, b$$49, [Z[c$$27].format], JAM.policy.p3);
      }
      if (v3275) {
        return Z[c$$27];
      }
      v1879 = c$$27;
      c$$27 = c$$27 - 1;
    }
    return null;
  }
  function jb(a$$60, b$$48) {
    var c$$26 = ["width", "height"];
    var d$$20 = 0;
    var v1883 = d$$20 < c$$26.length;
    for (;v1883;) {
      var e$$17 = "google_ad_" + c$$26[d$$20];
      if (!JAM.call(b$$48.hasOwnProperty, b$$48, [e$$17], JAM.policy.p3)) {
        var f$$8 = JAM.call(ib.exec, ib, [a$$60[c$$26[d$$20]]], JAM.policy.p3);
        if (f$$8) {
          var v3279 = b$$48;
          var v3280 = e$$17;
          var v5202 = JAM.call(Math.round, Math, [f$$8[1]], JAM.policy.p3);
          JAM.set(v3279, v3280, v5202, JAM.policy.p2);
        }
      }
      d$$20 = d$$20 + 1;
      v1883 = d$$20 < c$$26.length;
    }
    return;
  }
  function hb(a$$59) {
    var v1884 = a$$59.data;
    var b$$47 = JAM.call(v1884.split, v1884, ["\n"], JAM.policy.p3);
    var c$$25 = {};
    var d$$19 = 0;
    var v1887 = d$$19 < b$$47.length;
    for (;v1887;) {
      var v1885 = b$$47[d$$19];
      var e$$16 = JAM.call(v1885.indexOf, v1885, ["="], JAM.policy.p3);
      var v1886 = -1 != e$$16;
      if (v1886) {
        var v3283 = c$$25;
        var v4130 = b$$47[d$$19];
        var v3284 = JAM.call(v4130.substr, v4130, [0, e$$16], JAM.policy.p3);
        var v4131 = b$$47[d$$19];
        var v5203 = JAM.call(v4131.substr, v4131, [e$$16 + 1], JAM.policy.p3);
        JAM.set(v3283, v3284, v5203, JAM.policy.p2);
      }
      d$$19 = d$$19 + 1;
      v1887 = d$$19 < b$$47.length;
    }
    b$$47 = c$$25[3];
    var v3286 = c$$25[1] == gb;
    if (v3286) {
      window.google_top_js_status = 4;
      var v5035 = a$$59.source == top;
      if (v5035) {
        v5035 = 0 == JAM.call(b$$47.indexOf, b$$47, [a$$59.origin], JAM.policy.p3);
      }
      var v4908 = v5035;
      if (v4908) {
        window.google_top_values = c$$25;
        window.google_top_js_status = 5;
      }
      v3286 = window.google_top_js_callbacks;
    }
    if (v3286) {
      a$$59 = 0;
      var v1889 = a$$59 < window.google_top_js_callbacks.length;
      for (;v1889;) {
        var v1888 = window.google_top_js_callbacks;
        JAM.call(v1888[a$$59], v1888, [], JAM.policy.p3);
        a$$59 = a$$59 + 1;
        v1889 = a$$59 < window.google_top_js_callbacks.length;
      }
      window.google_top_js_callbacks.length = 0;
    }
    return;
  }
  function eb(a$$58, b$$46, c$$24, d$$18) {
    var e$$15 = "script";
    var f$$7 = b$$46.google_ad_width;
    var g$$6 = b$$46.google_ad_height;
    var l$$4 = {};
    db(l$$4, f$$7, g$$6, !0);
    JAM.set(l$$4, "onload", '"' + Ka + '"');
    d$$18 = JAM.call(d$$18, null, [a$$58, l$$4, b$$46], JAM.policy.p3);
    var v1894;
    var v4136 = window.google_override_format;
    if (!v4136) {
      var v4647 = !$a[window.google_ad_width + "x" + window.google_ad_height];
      if (v4647) {
        v4647 = "aa" == window.google_loader_used;
      }
      v4136 = v4647;
    }
    if (v4136) {
      v1894 = I(["c", "e"], na);
    } else {
      v1894 = null;
    }
    l$$4 = v1894;
    var h$$8 = b$$46.google_ad_output;
    var k$$2 = b$$46.google_ad_format;
    var v3291 = k$$2;
    if (!v3291) {
      var v4137 = "html" != h$$8;
      if (v4137) {
        v4137 = null != h$$8;
      }
      v3291 = v4137;
    }
    var v1895 = v3291;
    if (!v1895) {
      k$$2 = b$$46.google_ad_width + "x" + b$$46.google_ad_height;
      var v4141 = "e" == l$$4;
      if (v4141) {
        k$$2 = k$$2 + "_as";
      }
    }
    var v3293 = !b$$46.google_ad_slot;
    if (!v3293) {
      v3293 = b$$46.google_override_format;
    }
    var v1896 = v3293;
    if (!v1896) {
      var v3294 = !$a[b$$46.google_ad_width + "x" + b$$46.google_ad_height];
      if (v3294) {
        v3294 = "aa" == b$$46.google_loader_used;
      }
      v1896 = v3294;
    }
    h$$8 = v1896;
    var v1897;
    if (k$$2 && h$$8) {
      v1897 = JAM.call(k$$2.toLowerCase, k$$2, [], JAM.policy.p3);
    } else {
      v1897 = "";
    }
    k$$2 = v1897;
    b$$46.google_ad_format = k$$2;
    k$$2 = ya(c$$24, b$$46, !0);
    b$$46.google_ad_unit_key = k$$2;
    var v1899 = window;
    var v4146 = window.google_adk2_experiment;
    if (!v4146) {
      v4146 = I(["C", "E"], ma);
    }
    var v3297 = v4146;
    if (!v3297) {
      v3297 = "N";
    }
    k$$2 = v1899.google_adk2_experiment = v3297;
    var v1900;
    if ("E" == k$$2) {
      var v3298 = b$$46;
      var v5204 = ya(c$$24, b$$46);
      v1900 = v3298.google_ad_unit_key_2 = v5204;
    } else {
      var v3299 = "C" == k$$2;
      if (v3299) {
        v3299 = b$$46.google_ad_unit_key_2 = "ctrl";
      }
      v1900 = v3299;
    }
    v1900;
    c$$24 = Ha(b$$46);
    k$$2 = Ja(a$$58);
    h$$8 = a$$58.document;
    var v4148 = {visible:1, hidden:2, prerender:3, preview:4};
    var v5038 = h$$8.webkitVisibilityState;
    if (!v5038) {
      v5038 = h$$8.mozVisibilityState;
    }
    var v4913 = v5038;
    if (!v4913) {
      v4913 = h$$8.visibilityState;
    }
    var v4653 = v4913;
    if (!v4653) {
      v4653 = "";
    }
    var v3301 = v4148[v4653];
    if (!v3301) {
      v3301 = 0;
    }
    h$$8 = 3 == v3301;
    var v4151 = k$$2;
    if (v4151) {
      v4151 = !h$$8;
    }
    var v3302 = v4151;
    if (v3302) {
      v3302 = void 0 === a$$58.google_ad_handling_mode;
    }
    var v1902 = v3302;
    if (v1902) {
      var v3303 = a$$58;
      var v4154 = I(["XN", "AZ", "S"], ka);
      if (!v4154) {
        v4154 = I(["EI"], la);
      }
      v3303.google_ad_handling_mode = v4154;
    }
    var v1903;
    if (a$$58.google_ad_handling_mode) {
      v1903 = String(a$$58.google_ad_handling_mode);
    } else {
      v1903 = null;
    }
    k$$2 = v1903;
    var v4657 = Ja(a$$58);
    if (v4657) {
      v4657 = 1 == a$$58.google_unique_id;
    }
    var v4155 = v4657;
    if (v4155) {
      v4155 = "XN" != k$$2;
    }
    var v3306 = v4155;
    if (v3306) {
      v3306 = "S" != k$$2;
    }
    if (v3306) {
      h$$8 = "zrt_ads_frame" + a$$58.google_unique_id;
      var m$$2;
      m$$2 = b$$46.google_page_url;
      if (!m$$2) {
        r: {
          m$$2 = a$$58.document;
          var v1905 = f$$7;
          if (!v1905) {
            v1905 = a$$58.google_ad_width;
          }
          var q$$2 = v1905;
          var v1906 = g$$6;
          if (!v1906) {
            v1906 = a$$58.google_ad_height;
          }
          var x$$49 = v1906;
          if (a$$58.top == a$$58) {
            m$$2 = !1;
          } else {
            var B$$1 = m$$2.documentElement;
            if (q$$2 && x$$49) {
              var u$$1 = 1;
              var r$$1 = 1;
              var v1907;
              if (a$$58.innerHeight) {
                u$$1 = a$$58.innerWidth;
                v1907 = r$$1 = a$$58.innerHeight;
              } else {
                var v3310;
                var v4658 = B$$1;
                if (v4658) {
                  v4658 = B$$1.clientHeight;
                }
                if (v4658) {
                  u$$1 = B$$1.clientWidth;
                  v3310 = r$$1 = B$$1.clientHeight;
                } else {
                  var v4156 = m$$2.body;
                  if (v4156) {
                    u$$1 = m$$2.body.clientWidth;
                    v4156 = r$$1 = m$$2.body.clientHeight;
                  }
                  v3310 = v4156;
                }
                v1907 = v3310;
              }
              v1907;
              var v3312 = r$$1 > 2 * x$$49;
              if (!v3312) {
                v3312 = u$$1 > 2 * q$$2;
              }
              if (v3312) {
                m$$2 = !1;
                break r;
              }
            }
            m$$2 = !0;
          }
        }
        var v1911;
        if (m$$2) {
          v1911 = a$$58.document.referrer;
        } else {
          v1911 = a$$58.document.URL;
        }
        m$$2 = v1911;
      }
      m$$2 = encodeURIComponent(m$$2);
      q$$2 = null;
      var v4161 = "PC" == k$$2;
      if (!v4161) {
        v4161 = "EI" == k$$2;
      }
      var v3315 = v4161;
      if (!v3315) {
        v3315 = "AZ" == k$$2;
      }
      if (v3315) {
        switch(k$$2) {
          case "EI":
            q$$2 = "I";
            break;
          case "AZ":
            q$$2 = "Z";
            break;
          default:
            q$$2 = "K";
        }
        q$$2 = q$$2 + "-" + (m$$2 + "/" + b$$46.google_ad_unit_key + "/" + a$$58.google_unique_id);
      }
      b$$46 = {};
      db(b$$46, f$$7, g$$6, !1);
      b$$46.style = "display:none";
      f$$7 = q$$2;
      b$$46.id = h$$8;
      b$$46.name = h$$8;
      var v1917 = A("", "doubleclick");
      var v4662;
      if (f$$7) {
        v4662 = "#" + encodeURIComponent(f$$7);
      } else {
        v4662 = "";
      }
      var v3318 = ["/pagead/html/r20131120/r20130906/zrt_lookup.html", v4662];
      f$$7 = C(v1917, JAM.call(v3318.join, v3318, [""], JAM.policy.p3));
      b$$46.src = f$$7;
      f$$7 = cb(b$$46);
    } else {
      f$$7 = null;
    }
    var v1920 = new Date;
    g$$6 = JAM.call(v1920.getTime, v1920, [], JAM.policy.p3);
    b$$46 = a$$58.google_top_experiment;
    h$$8 = a$$58.google_async_for_oa_experiment;
    m$$2 = a$$58.google_always_use_delayed_impressions_experiment;
    var v3319 = a$$58.google_unique_id;
    var v4165;
    if (b$$46) {
      v4165 = 'google_top_experiment="' + b$$46 + '";';
    } else {
      v4165 = "";
    }
    var v3320 = v4165;
    var v4166;
    if (k$$2) {
      v4166 = 'google_ad_handling_mode="' + k$$2 + '";';
    } else {
      v4166 = "";
    }
    var v3321 = v4166;
    var v4167;
    if (h$$8) {
      v4167 = 'google_async_for_oa_experiment="' + h$$8 + '";';
    } else {
      v4167 = "";
    }
    var v3322 = v4167;
    var v4168;
    if (m$$2) {
      v4168 = 'google_always_use_delayed_impressions_experiment="' + m$$2 + '";';
    } else {
      v4168 = "";
    }
    var v3323 = v4168;
    var v4169;
    if (l$$4) {
      v4169 = 'google_append_as_for_format_override="' + l$$4 + '";';
    } else {
      v4169 = "";
    }
    var v3324 = v4169;
    var v4170;
    if (g$$6 > v) {
      v4170 = g$$6 - v;
    } else {
      v4170 = 1;
    }
    var v1921 = ["<!doctype html><html><body>", f$$7, "<", e$$15, ">", c$$24, "google_show_ads_impl=true;google_unique_id=", v3319, ';google_async_iframe_id="', d$$18, '";google_start_time=', v, ";", v3320, v3321, v3322, v3323, v3324, "google_bpp=", v4170, ";google_async_rrc=0;</", e$$15, ">", ab(), "</body></html>"];
    l$$4 = JAM.call(v1921.join, v1921, [""], JAM.policy.p3);
    var v3327;
    var v4669 = a$$58.document;
    if (JAM.call(v4669.getElementById, v4669, [d$$18], JAM.policy.p3)) {
      v3327 = Ya;
    } else {
      v3327 = Za;
    }
    JAM.call(v3327, null, [bb(a$$58, d$$18, l$$4, !0)], JAM.policy.p3);
    return;
  }
  function fb(a$$56, b$$44, c$$23) {
    function v2(a$$57, b$$45, f$$6) {
      var g$$5 = b$$45.id;
      var l$$3 = 0;
      var v3329 = !g$$5;
      if (!v3329) {
        var v4172 = a$$57.document;
        v3329 = JAM.call(v4172.getElementById, v4172, [g$$5], JAM.policy.p3);
      }
      var v1925 = v3329;
      for (;v1925;) {
        var v1924 = l$$3;
        l$$3 = l$$3 + 1;
        g$$5 = "aswift_" + v1924;
        var v3330 = !g$$5;
        if (!v3330) {
          var v4174 = a$$57.document;
          v3330 = JAM.call(v4174.getElementById, v4174, [g$$5], JAM.policy.p3);
        }
        v1925 = v3330;
      }
      b$$45.id = g$$5;
      b$$45.name = g$$5;
      a$$57 = Number(f$$6.google_ad_width);
      g$$5 = Number(f$$6.google_ad_height);
      f$$6 = ["<iframe"];
      var h$$7;
      for (h$$7 in b$$45) {
        var v1928 = JAM.call(b$$45.hasOwnProperty, b$$45, [h$$7], JAM.policy.p3);
        if (v1928) {
          ua(f$$6, h$$7 + "=" + b$$45[h$$7]);
        }
      }
      JAM.call(f$$6.push, f$$6, ['style="left:0;position:absolute;top:0;"'], JAM.policy.p3);
      JAM.call(f$$6.push, f$$6, ["></iframe>"], JAM.policy.p3);
      h$$7 = "border:none;height:" + g$$5 + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + a$$57 + "px;background-color:transparent";
      var v1930 = c$$23;
      var v3333 = ['<ins style="display:inline-table;', h$$7, '"><ins id="', b$$45.id + "_anchor", '" style="display:block;', h$$7, '">', JAM.call(f$$6.join, f$$6, [" "], JAM.policy.p3), "</ins></ins>"];
      var v5205 = JAM.call(v3333.join, v3333, [""], JAM.policy.p3);
      JAM.set(v1930, "innerHTML", v5205);
      return b$$45.id;
    }
    eb(a$$56, b$$44, c$$23, v2);
    return;
  }
  function db(a$$55, b$$43, c$$22, d$$17) {
    var v1931;
    if (d$$17) {
      v1931 = '"';
    } else {
      v1931 = "";
    }
    d$$17 = v1931;
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
    return;
  }
  function cb(a$$53) {
    function v3(a$$54, d$$16) {
      var v1937 = null != a$$54;
      if (v1937) {
        JAM.call(b$$42.push, b$$42, [" " + d$$16 + '="' + a$$54 + '"'], JAM.policy.p3);
      }
      return;
    }
    var b$$42 = ["<iframe"];
    G(a$$53, v3);
    JAM.call(b$$42.push, b$$42, ["></iframe>"], JAM.policy.p3);
    return JAM.call(b$$42.join, b$$42, [""], JAM.policy.p3);
  }
  function bb(a$$52, b$$41, c$$21, d$$15) {
    function v4() {
      var e$$13 = !1;
      if (d$$15) {
        var v3335 = Xa();
        JAM.call(v3335.al, v3335, [3E4], JAM.policy.p3);
      }
      try {
        var v4672 = a$$52.document;
        if (J(JAM.call(v4672.getElementById, v4672, [b$$41], JAM.policy.p3).contentWindow)) {
          var v3337 = a$$52.document;
          var f$$5 = JAM.call(v3337.getElementById, v3337, [b$$41], JAM.policy.p3).contentWindow;
          var g$$4 = f$$5.document;
          var v3338 = g$$4.body;
          if (v3338) {
            v3338 = g$$4.body.firstChild;
          }
          var v1939 = v3338;
          if (!v1939) {
            JAM.call(g$$4.open, g$$4, [], JAM.policy.p3);
            f$$5.google_async_iframe_close = !0;
            JAM.call(g$$4.write, g$$4, [c$$21], JAM.policy.p3);
          }
        } else {
          var v3340 = a$$52.document;
          var l$$2 = JAM.call(v3340.getElementById, v3340, [b$$41], JAM.policy.p3).contentWindow;
          var h$$6;
          f$$5 = c$$21;
          f$$5 = String(f$$5);
          if (f$$5.quote) {
            h$$6 = JAM.call(f$$5.quote, f$$5, [], JAM.policy.p3);
          } else {
            g$$4 = ['"'];
            var k$$1 = 0;
            var v1948 = k$$1 < f$$5.length;
            for (;v1948;) {
              var m$$1 = JAM.call(f$$5.charAt, f$$5, [k$$1], JAM.policy.p3);
              var q$$1 = JAM.call(m$$1.charCodeAt, m$$1, [0], JAM.policy.p3);
              var x$$48 = g$$4;
              var B = k$$1 + 1;
              var u;
              if (!(u = E[m$$1])) {
                var r;
                var v3343 = 31 < q$$1;
                if (v3343) {
                  v3343 = 127 > q$$1;
                }
                if (v3343) {
                  r = m$$1;
                } else {
                  var t = m$$1;
                  if (t in F) {
                    r = F[t];
                  } else {
                    if (t in E) {
                      r = JAM.set(F, t, E[t], JAM.policy.p2);
                    } else {
                      var s$$2 = t;
                      var y$$30 = JAM.call(t.charCodeAt, t, [0], JAM.policy.p3);
                      var v3344 = 31 < y$$30;
                      if (v3344) {
                        v3344 = 127 > y$$30;
                      }
                      if (v3344) {
                        s$$2 = t;
                      } else {
                        if (256 > y$$30) {
                          s$$2 = "\\x";
                          var v4184 = 16 > y$$30;
                          if (!v4184) {
                            v4184 = 256 < y$$30;
                          }
                          if (v4184) {
                            s$$2 = s$$2 + "0";
                          }
                        } else {
                          s$$2 = "\\u";
                          var v3345 = 4096 > y$$30;
                          if (v3345) {
                            s$$2 = s$$2 + "0";
                          }
                        }
                        var v3346 = s$$2;
                        var v4185 = JAM.call(y$$30.toString, y$$30, [16], JAM.policy.p3);
                        s$$2 = v3346 + JAM.call(v4185.toUpperCase, v4185, [], JAM.policy.p3);
                      }
                      r = JAM.set(F, t, s$$2, JAM.policy.p2);
                    }
                  }
                }
                u = r;
              }
              introspect(JAM.policy.p2) {
                x$$48[B] = u;
              }
              k$$1 = k$$1 + 1;
              v1948 = k$$1 < f$$5.length;
            }
            JAM.call(g$$4.push, g$$4, ['"'], JAM.policy.p3);
            h$$6 = JAM.call(g$$4.join, g$$4, [""], JAM.policy.p3);
          }
          var v1950 = l$$2.location;
          JAM.call(v1950.replace, v1950, ["javascript:" + h$$6], JAM.policy.p3);
        }
        e$$13 = !0;
      } catch (sb) {
        l$$2 = Da().google_jobrunner;
        var v3350 = Wa(l$$2);
        if (v3350) {
          JAM.call(l$$2.rl, l$$2, [], JAM.policy.p3);
        }
      }
      if (e$$13) {
        e$$13 = La("google_async_rrc", c$$21);
        var v4186 = new Q(a$$52);
        JAM.call(v4186.set, v4186, [b$$41, bb(a$$52, b$$41, e$$13, !1)], JAM.policy.p3);
      }
      return;
    }
    return v4;
  }
  function ab() {
    var a$$51 = "script";
    var v1953 = ["<", a$$51, ' src="', C(A("", "googlesyndication"), "/pagead/js/r20131120/r20130906/show_ads_impl.js", ""), '"></', a$$51, ">"];
    return JAM.call(v1953.join, v1953, [""], JAM.policy.p3);
  }
  function Za(a$$50, b$$40) {
    var v1954 = Xa();
    JAM.call(v1954.nqa, v1954, [a$$50, b$$40], JAM.policy.p3);
    return;
  }
  function Ya(a$$49, b$$39) {
    var v1955 = Xa();
    JAM.call(v1955.nq, v1955, [a$$49, b$$39], JAM.policy.p3);
    return;
  }
  function Xa() {
    var v3352 = X;
    if (v3352) {
      v3352 = Va(X);
    }
    if (v3352) {
      return X;
    }
    var a$$48 = Da();
    var b$$38 = a$$48.google_jobrunner;
    var v1957;
    if (Wa(b$$38)) {
      v1957 = X = b$$38;
    } else {
      v1957 = a$$48.google_jobrunner = X = new Y(a$$48);
    }
    return v1957;
  }
  function Wa(a$$47) {
    var v5040 = !!a$$47;
    if (v5040) {
      var v5082 = "object" == typeof a$$47;
      if (!v5082) {
        v5082 = "function" == typeof a$$47;
      }
      v5040 = v5082;
    }
    var v4920 = v5040;
    if (v4920) {
      v4920 = Va(a$$47);
    }
    var v4675 = v4920;
    if (v4675) {
      v4675 = H(a$$47.nq);
    }
    var v4189 = v4675;
    if (v4189) {
      v4189 = H(a$$47.nqa);
    }
    var v3355 = v4189;
    if (v3355) {
      v3355 = H(a$$47.al);
    }
    var v1958 = v3355;
    if (v1958) {
      v1958 = H(a$$47.rl);
    }
    return v1958;
  }
  function Va(a$$46) {
    try {
      return JAM.call(a$$46.sz, a$$46, [], JAM.policy.p3);
    } catch (b$$37) {
      return!1;
    }
    return;
  }
  function Ua(a$$43) {
    var b$$35 = M("sjr::tryrun", JAM.call(p, null, [a$$43.m, a$$43], JAM.policy.p3));
    var v1960 = a$$43.b;
    JAM.call(v1960.setTimeout, v1960, [b$$35, 0], JAM.policy.p3);
    return;
  }
  function Ta(a$$39, b$$31) {
    this.k = a$$39;
    this.h = b$$31;
    return;
  }
  function Y(a$$38) {
    this.c = [];
    this.b = a$$38 || window;
    this.a = 0;
    this.d = null;
    return;
  }
  function La(a$$37, b$$30) {
    var c$$20 = RegExp("\\b" + a$$37 + "=(\\d+)");
    var d$$14 = JAM.call(c$$20.exec, c$$20, [b$$30], JAM.policy.p3);
    if (d$$14) {
      var v4191 = a$$37 + "=";
      var v4677 = +d$$14[1] + 1;
      if (!v4677) {
        v4677 = 1;
      }
      b$$30 = JAM.call(b$$30.replace, b$$30, [c$$20, v4191 + v4677], JAM.policy.p3);
    }
    return b$$30;
  }
  function Q(a$$33) {
    this.b = a$$33;
    var v1962 = a$$33.google_iframe_oncopy;
    if (!v1962) {
      a$$33.google_iframe_oncopy = {handlers:{}, upd:JAM.call(p, null, [this.l, this], JAM.policy.p3)};
    }
    this.i = a$$33.google_iframe_oncopy;
    return;
  }
  function Ja(a$$32) {
    try {
      var b$$26 = JAM.call(Ia.test, Ia, [a$$32.location.host], JAM.policy.p3);
      var v4679 = !a$$32.postMessage;
      if (!v4679) {
        v4679 = !a$$32.localStorage;
      }
      var v4194 = v4679;
      if (!v4194) {
        v4194 = !a$$32.JSON;
      }
      var v3363 = v4194;
      if (!v3363) {
        v3363 = b$$26;
      }
      return!v3363;
    } catch (c$$18) {
      return!1;
    }
    return;
  }
  function Ha(a$$30) {
    function v5(a$$31, d$$12) {
      if (null != a$$31) {
        var e$$12;
        try {
          var f$$4 = [];
          O(new Ea, a$$31, f$$4);
          e$$12 = JAM.call(f$$4.join, f$$4, [""], JAM.policy.p3);
        } catch (g$$3) {
        }
        if (e$$12) {
          ua(b$$25, d$$12, "=", e$$12, ";");
        }
      }
      return;
    }
    var v1967 = a$$30.google_page_url;
    if (v1967) {
      var v3364 = a$$30;
      var v5206 = String(a$$30.google_page_url);
      v3364.google_page_url = v5206;
    }
    var b$$25 = [];
    G(a$$30, v5);
    return JAM.call(b$$25.join, b$$25, [""], JAM.policy.p3);
  }
  function Fa(a$$28, b$$23) {
    function v6(a$$29) {
      if (a$$29 in P) {
        return P[a$$29];
      }
      var b$$24 = JAM.call(a$$29.charCodeAt, a$$29, [0], JAM.policy.p3);
      var e$$11 = "\\u";
      var v1969;
      if (16 > b$$24) {
        v1969 = e$$11 = e$$11 + "000";
      } else {
        var v3365;
        if (256 > b$$24) {
          v3365 = e$$11 = e$$11 + "00";
        } else {
          var v4197 = 4096 > b$$24;
          if (v4197) {
            v4197 = e$$11 = e$$11 + "0";
          }
          v3365 = v4197;
        }
        v1969 = v3365;
      }
      v1969;
      return JAM.set(P, a$$29, e$$11 + JAM.call(b$$24.toString, b$$24, [16], JAM.policy.p3), JAM.policy.p2);
    }
    JAM.call(b$$23.push, b$$23, ['"'], JAM.policy.p3);
    JAM.call(b$$23.push, b$$23, [JAM.call(a$$28.replace, a$$28, [Ga, v6], JAM.policy.p3)], JAM.policy.p3);
    JAM.call(b$$23.push, b$$23, ['"'], JAM.policy.p3);
    return;
  }
  function O(a$$27, b$$22, c$$17) {
    switch(typeof b$$22) {
      case "string":
        Fa(b$$22, c$$17);
        break;
      case "number":
        var v3369;
        var v4682 = isFinite(b$$22);
        if (v4682) {
          v4682 = !isNaN(b$$22);
        }
        if (v4682) {
          v3369 = b$$22;
        } else {
          v3369 = "null";
        }
        JAM.call(c$$17.push, c$$17, [v3369], JAM.policy.p3);
        break;
      case "boolean":
        JAM.call(c$$17.push, c$$17, [b$$22], JAM.policy.p3);
        break;
      case "undefined":
        JAM.call(c$$17.push, c$$17, ["null"], JAM.policy.p3);
        break;
      case "object":
        if (null == b$$22) {
          JAM.call(c$$17.push, c$$17, ["null"], JAM.policy.p3);
          break;
        }
        if (b$$22 instanceof Array) {
          var d$$11 = b$$22.length;
          JAM.call(c$$17.push, c$$17, ["["], JAM.policy.p3);
          var e$$10 = "";
          var f$$3 = 0;
          var v1975 = f$$3 < d$$11;
          for (;v1975;) {
            JAM.call(c$$17.push, c$$17, [e$$10], JAM.policy.p3);
            O(a$$27, b$$22[f$$3], c$$17);
            e$$10 = ",";
            f$$3 = f$$3 + 1;
            v1975 = f$$3 < d$$11;
          }
          JAM.call(c$$17.push, c$$17, ["]"], JAM.policy.p3);
          break;
        }
        JAM.call(c$$17.push, c$$17, ["{"], JAM.policy.p3);
        d$$11 = "";
        for (e$$10 in b$$22) {
          var v1977 = JAM.call(b$$22.hasOwnProperty, b$$22, [e$$10], JAM.policy.p3);
          if (v1977) {
            f$$3 = b$$22[e$$10];
            var v4201 = "function" != typeof f$$3;
            if (v4201) {
              JAM.call(c$$17.push, c$$17, [d$$11], JAM.policy.p3);
              Fa(e$$10, c$$17);
              JAM.call(c$$17.push, c$$17, [":"], JAM.policy.p3);
              O(a$$27, f$$3, c$$17);
              d$$11 = ",";
            }
          }
        }
        JAM.call(c$$17.push, c$$17, ["}"], JAM.policy.p3);
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof b$$22);;
    }
    return;
  }
  function Ea() {
    return;
  }
  function Da() {
    if (!N) {
      var a$$26 = window;
      var b$$21 = a$$26;
      var c$$16 = 0;
      var v1981 = a$$26 != a$$26.parent;
      for (;v1981;) {
        a$$26 = a$$26.parent;
        c$$16 = c$$16 + 1;
        if (J(a$$26)) {
          b$$21 = a$$26;
        } else {
          break;
        }
        v1981 = a$$26 != a$$26.parent;
      }
      N = b$$21;
    }
    return N;
  }
  function Ca(a$$24) {
    function v7(a$$25, d$$10) {
      var v3373 = 0 === a$$25;
      if (!v3373) {
        v3373 = a$$25;
      }
      if (v3373) {
        var v3374 = b$$20;
        var v4203 = "&" + d$$10 + "=";
        var v4685;
        if ("function" == typeof encodeURIComponent) {
          v4685 = encodeURIComponent(a$$25);
        } else {
          v4685 = escape(a$$25);
        }
        b$$20 = v3374 + (v4203 + v4685);
      }
      return;
    }
    var b$$20 = "";
    G(a$$24, v7);
    return b$$20;
  }
  function M(a$$23, b$$19) {
    return da(K, a$$23, L, b$$19, void 0);
  }
  function Ba(a$$21) {
    function v8(a$$22, d$$9) {
      JAM.set(b$$18, d$$9, D[a$$22], JAM.policy.p2);
      return;
    }
    var b$$18 = a$$21 || {};
    G(za, v8);
    return;
  }
  function Aa(a$$20) {
    if (.01 > JAM.call(Math.random, Math, [], JAM.policy.p3)) {
      a$$20 = "/pagead/gen_204?id=jserror" + Ca(a$$20);
      a$$20 = C(A("", "googlesyndication"), a$$20);
      a$$20 = JAM.call(a$$20.substring, a$$20, [0, 2E3], JAM.policy.p3);
      var v1987 = D.google_image_requests;
      if (!v1987) {
        D.google_image_requests = [];
      }
      var v1988 = D.document;
      var b$$17 = JAM.call(v1988.createElement, v1988, ["img"], JAM.policy.p3);
      b$$17.src = a$$20;
      var v1989 = D.google_image_requests;
      JAM.call(v1989.push, v1989, [b$$17], JAM.policy.p3);
    }
    return;
  }
  function L(a$$19, b$$16, c$$15, d$$8, e$$9) {
    var v3378;
    if (fa) {
      v3378 = 1;
    } else {
      v3378 = 0;
    }
    var v1991 = v3378;
    var v3379;
    if (ga) {
      v3379 = 1;
    } else {
      v3379 = 0;
    }
    var v1992 = v3379;
    var v1993 = JAM.call(b$$16.substring, b$$16, [0, 512], JAM.policy.p3);
    var v3380 = e$$9;
    if (v3380) {
      v3380 = JAM.call(e$$9.substring, e$$9, [0, 40], JAM.policy.p3);
    }
    var v1994 = v3380;
    var v1995 = JAM.call(d$$8.toString, d$$8, [], JAM.policy.p3);
    var v3381 = pa.URL;
    var v1996 = JAM.call(v3381.substring, v3381, [0, 512], JAM.policy.p3);
    var v3382 = pa.referrer;
    a$$19 = {jscb:v1991, jscd:v1992, context:a$$19, msg:v1993, eid:v1994, file:c$$15, line:v1995, url:v1996, ref:JAM.call(v3382.substring, v3382, [0, 512], JAM.policy.p3)};
    Ba(a$$19);
    Aa(a$$19);
    return!ha;
  }
  function K(a$$18, b$$15, c$$14, d$$7) {
    try {
      JAM.call(c$$14, null, [], JAM.policy.p3);
    } catch (e$$8) {
      c$$14 = !ha;
      try {
        var f$$2 = JAM.call(e$$8.toString, e$$8, [], JAM.policy.p3);
        var v3383 = e$$8.name;
        if (v3383) {
          v3383 = -1 == JAM.call(f$$2.indexOf, f$$2, [e$$8.name], JAM.policy.p3);
        }
        var v1998 = v3383;
        if (v1998) {
          f$$2 = f$$2 + (": " + e$$8.name);
        }
        var v3384 = e$$8.message;
        if (v3384) {
          v3384 = -1 == JAM.call(f$$2.indexOf, f$$2, [e$$8.message], JAM.policy.p3);
        }
        var v1999 = v3384;
        if (v1999) {
          f$$2 = f$$2 + (": " + e$$8.message);
        }
        if (e$$8.stack) {
          var g$$2 = e$$8.stack;
          var l$$1 = f$$2;
          try {
            var v2000 = -1 == JAM.call(g$$2.indexOf, g$$2, [l$$1], JAM.policy.p3);
            if (v2000) {
              g$$2 = l$$1 + "\n" + g$$2;
            }
            var h$$5;
            var v2001 = g$$2 != h$$5;
            for (;v2001;) {
              h$$5 = g$$2;
              g$$2 = JAM.call(g$$2.replace, g$$2, [/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"], JAM.policy.p3);
              v2001 = g$$2 != h$$5;
            }
            f$$2 = JAM.call(g$$2.replace, g$$2, [/\n */g, "\n"], JAM.policy.p3);
          } catch (k) {
            f$$2 = l$$1;
          }
        }
        g$$2 = "";
        var v2003 = e$$8.fileName;
        if (v2003) {
          g$$2 = e$$8.fileName;
        }
        h$$5 = -1;
        var v2004 = e$$8.lineNumber;
        if (v2004) {
          h$$5 = e$$8.lineNumber;
        }
        var m;
        t: {
          try {
            var v2005;
            if (d$$7) {
              v2005 = JAM.call(d$$7, null, [], JAM.policy.p3);
            } else {
              v2005 = "";
            }
            m = v2005;
            break t;
          } catch (q) {
          }
          m = "";
        }
        c$$14 = JAM.call(b$$15, null, [a$$18, f$$2, g$$2, h$$5, m], JAM.policy.p3);
      } catch (x$$47) {
        var v4209 = JAM.call(x$$47.toString, x$$47, [], JAM.policy.p3) + "\n";
        var v4691 = x$$47.stack;
        if (!v4691) {
          v4691 = "";
        }
        Aa({context:"protectAndRun", msg:v4209 + v4691});
      }
      if (!c$$14) {
        throw e$$8;
      }
    }
    return;
  }
  function J(a$$17) {
    try {
      var v2008 = !!a$$17.location.href;
      if (!v2008) {
        v2008 = "" === a$$17.location.href;
      }
      return v2008;
    } catch (b$$14) {
      return!1;
    }
    return;
  }
  function ya(a$$16, b$$13, c$$13) {
    b$$13 = [b$$13.google_ad_slot, b$$13.google_ad_format, b$$13.google_ad_type, b$$13.google_ad_width, b$$13.google_ad_height];
    if (c$$13) {
      c$$13 = [];
      var d$$6 = 0;
      var v3391 = a$$16;
      if (v3391) {
        v3391 = 25 > d$$6;
      }
      var v2015 = v3391;
      for (;v2015;) {
        var v4213 = 9 != a$$16.nodeType;
        if (v4213) {
          v4213 = a$$16.id;
        }
        var v3392 = v4213;
        if (!v3392) {
          v3392 = "";
        }
        JAM.call(c$$13.push, c$$13, [v3392], JAM.policy.p3);
        a$$16 = a$$16.parentNode;
        d$$6 = d$$6 + 1;
        var v3393 = a$$16;
        if (v3393) {
          v3393 = 25 > d$$6;
        }
        v2015 = v3393;
      }
      var v2016 = a$$16 = JAM.call(c$$13.join, c$$13, [], JAM.policy.p3);
      if (v2016) {
        JAM.call(b$$13.push, b$$13, [a$$16], JAM.policy.p3);
      }
    } else {
      JAM.call(b$$13.push, b$$13, [wa(a$$16)], JAM.policy.p3);
      JAM.call(b$$13.push, b$$13, [xa()], JAM.policy.p3);
    }
    b$$13 = JAM.call(b$$13.join, b$$13, [":"], JAM.policy.p3);
    a$$16 = b$$13.length;
    if (0 == a$$16) {
      b$$13 = 0;
    } else {
      c$$13 = 305419896;
      d$$6 = 0;
      var v2017 = d$$6 < a$$16;
      for (;v2017;) {
        c$$13 = c$$13 ^ (c$$13 << 5) + (c$$13 >> 2) + JAM.call(b$$13.charCodeAt, b$$13, [d$$6], JAM.policy.p3) & 4294967295;
        d$$6 = d$$6 + 1;
        v2017 = d$$6 < a$$16;
      }
      var v2018;
      if (0 < c$$13) {
        v2018 = c$$13;
      } else {
        v2018 = 4294967296 + c$$13;
      }
      b$$13 = v2018;
    }
    return JAM.call(b$$13.toString, b$$13, [], JAM.policy.p3);
  }
  function xa() {
    var a$$15 = D;
    var b$$12 = [];
    if (a$$15) {
      try {
        var c$$12 = a$$15.parent;
        var d$$5 = 0;
        var v4216 = c$$12;
        if (v4216) {
          v4216 = c$$12 != a$$15;
        }
        var v3399 = v4216;
        if (v3399) {
          v3399 = 25 > d$$5;
        }
        var v2022 = v3399;
        for (;v2022;) {
          var e$$7 = c$$12.frames;
          var f$$1 = 0;
          var v2021 = f$$1 < e$$7.length;
          for (;v2021;) {
            if (a$$15 == e$$7[f$$1]) {
              JAM.call(b$$12.push, b$$12, [f$$1], JAM.policy.p3);
              break;
            }
            f$$1 = f$$1 + 1;
            v2021 = f$$1 < e$$7.length;
          }
          a$$15 = c$$12;
          c$$12 = a$$15.parent;
          d$$5 = d$$5 + 1;
          var v4217 = c$$12;
          if (v4217) {
            v4217 = c$$12 != a$$15;
          }
          var v3403 = v4217;
          if (v3403) {
            v3403 = 25 > d$$5;
          }
          v2022 = v3403;
        }
      } catch (g$$1) {
      }
    }
    return JAM.call(b$$12.join, b$$12, [], JAM.policy.p3);
  }
  function wa(a$$14) {
    var b$$11 = [];
    var c$$11 = 0;
    var v3404 = a$$14;
    if (v3404) {
      v3404 = 25 > c$$11;
    }
    var v2030 = v3404;
    for (;v2030;) {
      var v2023 = 9 != a$$14.nodeType;
      if (v2023) {
        v2023 = a$$14.id;
      }
      var d$$4 = v2023;
      var v2024;
      if (d$$4) {
        v2024 = "/" + d$$4;
      } else {
        v2024 = "";
      }
      d$$4 = v2024;
      var e$$6;
      t: {
        var f = a$$14.parentElement;
        var v2025 = a$$14.nodeName;
        e$$6 = JAM.call(v2025.toLowerCase, v2025, [], JAM.policy.p3);
        if (f) {
          f = f.childNodes;
          var g = 0;
          var l = 0;
          var v2028 = l < f.length;
          for (;v2028;) {
            var h$$4 = f[l];
            var v3407 = h$$4.nodeName;
            if (v3407) {
              var v4696 = h$$4.nodeName;
              v3407 = JAM.call(v4696.toLowerCase, v4696, [], JAM.policy.p3) == e$$6;
            }
            if (v3407) {
              if (a$$14 == h$$4) {
                e$$6 = "." + g;
                break t;
              }
              g = g + 1;
            }
            l = l + 1;
            v2028 = l < f.length;
          }
        }
        e$$6 = "";
      }
      var v4697 = a$$14.nodeName;
      if (v4697) {
        var v4932 = a$$14.nodeName;
        v4697 = JAM.call(v4932.toLowerCase, v4932, [], JAM.policy.p3);
      }
      JAM.call(b$$11.push, b$$11, [v4697 + d$$4 + e$$6], JAM.policy.p3);
      a$$14 = a$$14.parentElement;
      c$$11 = c$$11 + 1;
      var v3410 = a$$14;
      if (v3410) {
        v3410 = 25 > c$$11;
      }
      v2030 = v3410;
    }
    return JAM.call(b$$11.join, b$$11, [], JAM.policy.p3);
  }
  function va(a$$13) {
    var v2031;
    if (a$$13.google_unique_id) {
      v2031 = a$$13.google_unique_id = a$$13.google_unique_id + 1;
    } else {
      v2031 = a$$13.google_unique_id = 1;
    }
    v2031;
    return;
  }
  function I(a$$12, b$$10) {
    if (!(1E-4 > JAM.call(Math.random, Math, [], JAM.policy.p3))) {
      var c$$10 = JAM.call(Math.random, Math, [], JAM.policy.p3);
      if (c$$10 < b$$10) {
        try {
          var d$$3 = new Uint16Array(1);
          var v2032 = window.crypto;
          JAM.call(v2032.getRandomValues, v2032, [d$$3], JAM.policy.p3);
          c$$10 = d$$3[0] / 65536;
        } catch (e$$5) {
          c$$10 = JAM.call(Math.random, Math, [], JAM.policy.p3);
        }
        return a$$12[JAM.call(Math.floor, Math, [c$$10 * a$$12.length], JAM.policy.p3)];
      }
    }
    return null;
  }
  function ua(a$$11, b$$9) {
    if (!(2 > arguments.length)) {
      var c$$9 = 1;
      var d$$2 = arguments.length;
      var v2039 = c$$9 < d$$2;
      for (;v2039;) {
        JAM.call(a$$11.push, a$$11, [arguments[c$$9]], JAM.policy.p3);
        c$$9 = c$$9 + 1;
        v2039 = c$$9 < d$$2;
      }
    }
    return;
  }
  function H(a$$10) {
    var v3415 = !!a$$10;
    if (v3415) {
      v3415 = "function" == typeof a$$10;
    }
    var v2041 = v3415;
    if (v2041) {
      v2041 = !!a$$10.call;
    }
    return v2041;
  }
  function G(a$$9, b$$8) {
    var c$$8;
    for (c$$8 in a$$9) {
      var v3417 = Object.prototype.hasOwnProperty;
      var v2042 = JAM.call(v3417.call, v3417, [a$$9, c$$8], JAM.policy.p3);
      if (v2042) {
        JAM.call(b$$8.call, b$$8, [null, a$$9[c$$8], c$$8, a$$9], JAM.policy.p3);
      }
    }
    return;
  }
  function C(a$$8, b$$7, c$$7) {
    if (!c$$7) {
      var v3419;
      if (ia) {
        v3419 = "https";
      } else {
        v3419 = "http";
      }
      c$$7 = v3419;
    }
    var v2043 = [c$$7, "://", a$$8, b$$7];
    return JAM.call(v2043.join, v2043, [""], JAM.policy.p3);
  }
  function A(a$$7, b$$6) {
    if (!a$$7) {
      return b$$6;
    }
    var c$$6 = JAM.call(a$$7.match, a$$7, [ea], JAM.policy.p3);
    var v2045;
    if (c$$6) {
      v2045 = c$$6[0];
    } else {
      v2045 = b$$6;
    }
    return v2045;
  }
  function z$$2(a$$6) {
    var v2046;
    if (JAM.call(/^true$/.test, /^true$/, [a$$6], JAM.policy.p3)) {
      v2046 = !0;
    } else {
      v2046 = !1;
    }
    return v2046;
  }
  function w$$5(a$$5) {
    a$$5 = parseFloat(a$$5);
    var v2047;
    var v4698 = isNaN(a$$5);
    if (!v4698) {
      v4698 = 1 < a$$5;
    }
    var v4228 = v4698;
    if (!v4228) {
      v4228 = 0 > a$$5;
    }
    if (v4228) {
      v2047 = 0;
    } else {
      v2047 = a$$5;
    }
    return v2047;
  }
  function da(a$$4, b$$4) {
    function v9() {
      var b$$5 = JAM.call(c$$5.slice, c$$5, [], JAM.policy.p3);
      var v2048 = b$$5.push;
      JAM.call(v2048.apply, v2048, [b$$5, arguments], JAM.policy.p3);
      return JAM.call(a$$4.apply, a$$4, [this, b$$5], JAM.policy.p3);
    }
    var v2049 = Array.prototype.slice;
    var c$$5 = JAM.call(v2049.call, v2049, [arguments, 1], JAM.policy.p3);
    return v9;
  }
  function p(a$$3, b$$3, c$$4) {
    var v2050;
    var v4229 = Function.prototype.bind;
    if (v4229) {
      var v5043 = Function.prototype.bind;
      var v4934 = JAM.call(v5043.toString, v5043, [], JAM.policy.p3);
      v4229 = -1 != JAM.call(v4934.indexOf, v4934, ["native code"], JAM.policy.p3);
    }
    if (v4229) {
      v2050 = ba;
    } else {
      v2050 = ca;
    }
    p = v2050;
    return JAM.call(p.apply, p, [null, arguments], JAM.policy.p3);
  }
  function ca(a$$2, b$$2, c$$2) {
    function v11() {
      return JAM.call(a$$2.apply, a$$2, [b$$2, arguments], JAM.policy.p3);
    }
    function v10() {
      var v2051 = Array.prototype.slice;
      var c$$3 = JAM.call(v2051.call, v2051, [arguments], JAM.policy.p3);
      var v2052 = Array.prototype.unshift;
      JAM.call(v2052.apply, v2052, [c$$3, d$$1], JAM.policy.p3);
      return JAM.call(a$$2.apply, a$$2, [b$$2, c$$3], JAM.policy.p3);
    }
    if (!a$$2) {
      throw Error();
    }
    if (2 < arguments.length) {
      var v2054 = Array.prototype.slice;
      var d$$1 = JAM.call(v2054.call, v2054, [arguments, 2], JAM.policy.p3);
      return v10;
    }
    return v11;
  }
  function ba(a$$1, b$$1, c$$1) {
    var v2056 = a$$1.call;
    return JAM.call(v2056.apply, v2056, [a$$1.bind, arguments], JAM.policy.p3);
  }
  function aa(a, b) {
    var c = JAM.call(a.split, a, ["."], JAM.policy.p3);
    var d = n$$1;
    var v3429 = c[0] in d;
    if (!v3429) {
      v3429 = !d.execScript;
    }
    var v2058 = v3429;
    if (!v2058) {
      JAM.call(d.execScript, d, ["var " + c[0]], JAM.policy.p3);
    }
    var e$$4;
    var v3432 = c.length;
    if (v3432) {
      v3432 = e$$4 = JAM.call(c.shift, c, [], JAM.policy.p3);
    }
    var v2060 = v3432;
    for (;v2060;) {
      var v2059;
      var v4234 = c.length;
      if (!v4234) {
        v4234 = void 0 === b;
      }
      if (v4234) {
        var v3433;
        if (d[e$$4]) {
          v3433 = d[e$$4];
        } else {
          v3433 = JAM.set(d, e$$4, {}, JAM.policy.p2);
        }
        v2059 = d = v3433;
      } else {
        v2059 = JAM.set(d, e$$4, b, JAM.policy.p2);
      }
      v2059;
      var v3435 = c.length;
      if (v3435) {
        v3435 = e$$4 = JAM.call(c.shift, c, [], JAM.policy.p3);
      }
      v2060 = v3435;
    }
    return;
  }
  var n$$1 = this;
  var v2061 = new Date;
  var v = JAM.call(v2061.getTime, v2061, [], JAM.policy.p3);
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
  var v2062;
  if (JAM.call(/\uffff/.test, /\uffff/, ["\uffff"], JAM.policy.p3)) {
    v2062 = /[\\\"\x00-\x1f\x7f-\uffff]/g;
  } else {
    v2062 = /[\\\"\x00-\x1f\x7f-\xff]/g;
  }
  var Ga = v2062;
  var Ia = /\.((google(|groups|mail|images|print))|gmail)\./;
  var Ka;
  var R = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
  var v2063 = JAM.call(/[&<>\"]/.test, /[&<>\"]/, [R], JAM.policy.p3);
  if (v2063) {
    var v4935 = -1 != JAM.call(R.indexOf, R, ["&"], JAM.policy.p3);
    if (v4935) {
      R = JAM.call(R.replace, R, [qa, "&amp;"], JAM.policy.p3);
    }
    var v4936 = -1 != JAM.call(R.indexOf, R, ["<"], JAM.policy.p3);
    if (v4936) {
      R = JAM.call(R.replace, R, [ra, "&lt;"], JAM.policy.p3);
    }
    var v4704 = -1 != JAM.call(R.indexOf, R, [">"], JAM.policy.p3);
    if (v4704) {
      R = JAM.call(R.replace, R, [sa, "&gt;"], JAM.policy.p3);
    }
    var v4236 = -1 != JAM.call(R.indexOf, R, ['"'], JAM.policy.p3);
    if (v4236) {
      R = JAM.call(R.replace, R, [ta, "&quot;"], JAM.policy.p3);
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
  var v3437;
  if (n$$1.navigator) {
    v3437 = n$$1.navigator.userAgent;
  } else {
    v3437 = null;
  }
  if (V = v3437) {
    var Oa = n$$1.navigator;
    S = 0 == JAM.call(V.lastIndexOf, V, ["Opera", 0], JAM.policy.p3);
    var v2068 = !S;
    if (v2068) {
      var v3438 = -1 != JAM.call(V.indexOf, V, ["MSIE"], JAM.policy.p3);
      if (!v3438) {
        v3438 = -1 != JAM.call(V.indexOf, V, ["Trident"], JAM.policy.p3);
      }
      v2068 = v3438;
    }
    T = v2068;
    var v2069 = !S;
    if (v2069) {
      v2069 = -1 != JAM.call(V.indexOf, V, ["WebKit"], JAM.policy.p3);
    }
    U = v2069;
    var v4242 = !S;
    if (v4242) {
      v4242 = !U;
    }
    var v3440 = v4242;
    if (v3440) {
      v3440 = !T;
    }
    var v2070 = v3440;
    if (v2070) {
      v2070 = "Gecko" == Oa.product;
    }
    Ma = v2070;
  }
  var Pa = T;
  var Qa = Ma;
  var Ra = U;
  var W;
  var v3442 = S;
  if (v3442) {
    v3442 = n$$1.opera;
  }
  if (v3442) {
    var Sa = n$$1.opera.version;
    var v2073 = "function" == typeof Sa;
    if (v2073) {
      JAM.call(Sa, null, [], JAM.policy.p3);
    }
  } else {
    var v3444;
    if (Qa) {
      v3444 = W = /rv\:([^\);]+)(\)|;)/;
    } else {
      var v4243;
      if (Pa) {
        v4243 = W = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/;
      } else {
        var v4706 = Ra;
        if (v4706) {
          v4706 = W = /WebKit\/(\S+)/;
        }
        v4243 = v4706;
      }
      v3444 = v4243;
    }
    v3444;
    if (W) {
      var v4707;
      if (n$$1.navigator) {
        v4707 = n$$1.navigator.userAgent;
      } else {
        v4707 = null;
      }
      JAM.call(W.exec, W, [v4707], JAM.policy.p3);
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
  var gb = JAM.call(Math.floor, Math, [1E6 * JAM.call(Math.random, Math, [], JAM.policy.p3)], JAM.policy.p3);
  var ib = /([0-9.]+)px/;
  var Z = [{width:120, height:240, format:"vertical"}, {width:120, height:600, format:"vertical"}, {width:125, height:125, format:"rectangle"}, {width:160, height:600, format:"vertical"}, {width:180, height:150, format:"rectangle"}, {width:200, height:200, format:"rectangle"}, {width:234, height:60, format:"horizontal"}, {width:250, height:250, format:"rectangle"}, {width:300, height:250, format:"rectangle"}, {width:300, height:600, format:"vertical"}, {width:320, height:50, format:"horizontal"}, 
  {width:336, height:280, format:"rectangle"}, {width:468, height:60, format:"horizontal"}, {width:728, height:90, format:"horizontal"}, {width:970, height:90, format:"horizontal"}];
  var $ = ["google_analytics_uacct", "google_analytics_domain_name"];
  rb();
  return;
}
v22();
v254()

