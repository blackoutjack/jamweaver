// hulurespawn.js
function v392() {
  function v391(key$$37) {
    if (store$$1) {
      JAM.call(store$$1.remove, store$$1, [key$$37], JAM.policy.p1);
    }
    return;
  }
  function v390(key$$36, value$$103) {
    if (store$$1) {
      JAM.call(store$$1.set, store$$1, [key$$36, JAM.call(escape, null, [JAM.call(Object.toJSON, Object, [value$$103], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1);
    }
    return;
  }
  function v389(key$$35) {
    var r = null;
    if (store$$1) {
      var v394 = JAM.call(store$$1.getel, store$$1, [key$$35], JAM.policy.p1);
      if (!v394) {
        v394 = "null";
      }
      var value$$102 = v394;
      var v395 = JAM.call(unescape, null, [value$$102], JAM.policy.p1);
      r = JAM.call(v395.evalJSON, v395, [true], JAM.policy.p1);
    }
    return r;
  }
  function v388(manualStore) {
    store$$1 = manualStore;
    return;
  }
  function v387() {
    var v2098 = store$$1;
    if (v2098) {
      v2098 = store$$1.free;
    }
    if (v2098) {
      JAM.call(store$$1.free, store$$1, [], JAM.policy.p1);
    }
    JAM.call(document.fire, document, ["cram:unload"], JAM.policy.p1);
    return;
  }
  function v386() {
    return!!store$$1;
  }
  function v385() {
    var i$$66 = 0;
    var v400 = i$$66 < order.length;
    for (;v400;) {
      var method$$10 = methods$$8[order[i$$66]];
      if (JAM.call(method$$10.valid, method$$10, [], JAM.policy.p1)) {
        store$$1 = JAM.new(method$$10, [], JAM.policy.p1);
        break;
      }
      i$$66 = i$$66 + 1;
      v400 = i$$66 < order.length;
    }
    JAM.call(document.fire, document, ["cram:load"], JAM.policy.p1);
    return;
  }
  function v384() {
    function v383() {
      swf = null;
      return;
    }
    function v382(k$$9) {
      var v2101 = swf;
      if (v2101) {
        v2101 = swf.remove;
      }
      if (v2101) {
        JAM.call(swf.remove, swf, [k$$9], JAM.policy.p1);
      }
      return;
    }
    function v381(k$$8, v$$2) {
      var v2102 = swf;
      if (v2102) {
        v2102 = swf.set;
      }
      if (v2102) {
        JAM.call(swf.set, swf, [k$$8, v$$2], JAM.policy.p1);
      }
      return;
    }
    function v380(k$$7) {
      var v2103 = swf;
      if (v2103) {
        v2103 = swf.get;
      }
      if (v2103) {
        return JAM.call(swf.get, swf, [k$$7], JAM.policy.p1);
      }
      return;
    }
    function v379(div$$8) {
      div$$8.id = "_cram_flash";
      div$$8.style.position = "absolute";
      div$$8.style.top = "-100px";
      div$$8.style.left = "-100px";
      return;
    }
    if (JAM.call(document.getElementById, document, ["_cram_flash"], JAM.policy.p1)) {
      return;
    }
    var div$$7 = JAM.call(appendDiv, null, [v379], JAM.policy.p1);
    if (!div$$7) {
      return;
    }
    var so = JAM.new(SWFObject, ["/cram.swf", "_cram_swf", "1", "1", "9"], JAM.policy.p1);
    JAM.call(so.addParam, so, ["allowScriptAccess", "sameDomain"], JAM.policy.p1);
    if (JAM.call(so.write, so, ["_cram_flash"], JAM.policy.p1)) {
      var swf = JAM.call(document.getElementById, document, ["_cram_swf"], JAM.policy.p1);
      if (swf) {
        this.getel = v380;
        this.set = v381;
        this.remove = v382;
        this.free = v383;
      }
    }
    return;
  }
  function v378() {
    return window.SWFObject;
  }
  function v377() {
    function v376() {
      store$$3 = null;
      return;
    }
    function v375(k$$6) {
      JAM.call(store$$3.removeAttribute, store$$3, [k$$6], JAM.policy.p1);
      return;
    }
    function v374(k$$5, v$$1) {
      if (store$$3) {
        JAM.call(store$$3.setAttribute, store$$3, [k$$5, v$$1], JAM.policy.p1);
      }
      JAM.call(store$$3.save, store$$3, ["_cram"], JAM.policy.p1);
      return;
    }
    function v373(k$$4) {
      if (store$$3) {
        return JAM.call(store$$3.getAttribute, store$$3, [k$$4], JAM.policy.p1);
      }
      return;
    }
    function v372(div$$6) {
      div$$6.id = "_cram_userData";
      div$$6.style.display = "none";
      JAM.call(div$$6.addBehavior, div$$6, ["#default#userData"], JAM.policy.p1);
      return;
    }
    var store$$3 = JAM.call(appendDiv, null, [v372], JAM.policy.p1);
    JAM.call(store$$3.load, store$$3, ["_cram"], JAM.policy.p1);
    this.getel = v373;
    this.set = v374;
    this.remove = v375;
    this.free = v376;
    return;
  }
  function v371() {
    var JSCompiler_temp$$1;
    if (JSCompiler_temp$$1 = !!window.ActiveXObject) {
      var JSCompiler_inline_result$$2;
      JSCompiler_inline_label_msieVersion_86: {
        var reg$$inline_85 = /MSIE ([0-9]+[\.0-9]*)/;
        var v2105 = navigator.appName == "Microsoft Internet Explorer";
        if (v2105) {
          v2105 = JAM.call(reg$$inline_85.test, reg$$inline_85, [navigator.userAgent], JAM.policy.p1);
        }
        if (v2105) {
          JSCompiler_inline_result$$2 = JAM.call(parseFloat, null, [RegExp.$1], JAM.policy.p1);
          break JSCompiler_inline_label_msieVersion_86;
        }
        JSCompiler_inline_result$$2 = 0;
      }
      JSCompiler_temp$$1 = JSCompiler_inline_result$$2 >= 7;
    }
    return JSCompiler_temp$$1;
  }
  function v370() {
    function v369(key$$34) {
      if (store$$2) {
        JAM.call(store$$2.removeItem, store$$2, [key$$34], JAM.policy.p1);
      }
      return;
    }
    function v368(k$$3, v) {
      if (store$$2) {
        JAM.call(store$$2.setItem, store$$2, [k$$3, v], JAM.policy.p1);
      }
      return;
    }
    function v367(key$$33) {
      if (store$$2) {
        return JAM.call(store$$2.getItem, store$$2, [key$$33], JAM.policy.p1);
      }
      return;
    }
    var store$$2 = window.localStorage;
    this.getel = v367;
    this.set = v368;
    this.remove = v369;
    return;
  }
  function v366() {
    var v414 = window.localStorage;
    if (v414) {
      v414 = window.localStorage.getItem;
    }
    return v414;
  }
  function v365(valid, init) {
    function v364() {
      return;
    }
    var k$$2 = init || v364;
    var v415 = valid;
    if (!v415) {
      v415 = backend.valid;
    }
    k$$2.valid = v415;
    var v416 = k$$2;
    var v3967 = JAM.new(backend, [], JAM.policy.p1);
    v416.prototype = v3967;
    return k$$2;
  }
  function v363() {
    return true;
  }
  function backend() {
    function v362(key$$32) {
      delete this.store[key$$32];
      return;
    }
    function v361(key$$31, value$$101) {
      JAM.set(this.store, key$$31, value$$101, JAM.policy.p2);
      return;
    }
    function v360(key$$30) {
      return this.store[key$$30];
    }
    this.store = {};
    this.getel = v360;
    this.set = v361;
    this.remove = v362;
    return;
  }
  function appendDiv(fn) {
    if (!document.createElement) {
      return null;
    }
    var body$$2 = JAM.call(document.getElementsByTagName, document, ["body"], JAM.policy.p1);
    var v421;
    if (body$$2.length > 0) {
      v421 = body$$2[0];
    } else {
      v421 = null;
    }
    body$$2 = v421;
    if (!body$$2) {
      return null;
    }
    var div$$5 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
    if (!div$$5) {
      return null;
    }
    JAM.call(fn, null, [div$$5], JAM.policy.p1);
    JAM.call(body$$2.appendChild, body$$2, [div$$5], JAM.policy.p1);
    return div$$5;
  }
  backend.valid = v363;
  backend.create = v365;
  var html5 = JAM.call(backend.create, backend, [v366, v370], JAM.policy.p1);
  var userData = JAM.call(backend.create, backend, [v371, v377], JAM.policy.p1);
  var flash = JAM.call(backend.create, backend, [v378, v384], JAM.policy.p1);
  var methods$$8 = {html5:html5, flash:flash};
  var order = ["html5", "flash"];
  var store$$1 = null;
  var self$$1 = {load:v385, methods:methods$$8, valid:v386, unload:v387, setStore:v388, getel:v389, set:v390, remove:v391};
  JAM.call(window.addEventListener, window, ["load", self$$1.load], JAM.policy.p1);
  JAM.call(window.addEventListener, window, ["unload", self$$1.unload], JAM.policy.p1);
  return self$$1;
}
function v359() {
  function v358(element$$217, expressions$$2) {
    var v426 = JAM.call(expressions$$2.toArray, expressions$$2, [], JAM.policy.p1);
    var selector$$7 = JAM.call(v426.join, v426, [", "], JAM.policy.p1);
    var v427 = Prototype.Selector;
    return JAM.call(v427.select, v427, [selector$$7, element$$217 || document], JAM.policy.p1);
  }
  function v357(elements$$11, expression$$10, index$$63) {
    index$$63 = index$$63 || 0;
    var matchIndex$$1 = 0;
    var element$$216;
    var i$$65 = 0;
    var length$$35 = elements$$11.length;
    var v430 = i$$65 < length$$35;
    for (;v430;) {
      element$$216 = elements$$11[i$$65];
      var v3095 = Prototype.Selector;
      var v2110 = JAM.call(v3095.match, v3095, [element$$216, expression$$10], JAM.policy.p1);
      if (v2110) {
        var v3096 = matchIndex$$1;
        matchIndex$$1 = matchIndex$$1 + 1;
        v2110 = index$$63 === v3096;
      }
      if (v2110) {
        return JAM.call(Element.extend, Element, [element$$216], JAM.policy.p1);
      }
      i$$65 = i$$65 + 1;
      v430 = i$$65 < length$$35;
    }
    return;
  }
  function v356(elements$$10, expression$$9) {
    var match$$48 = Prototype.Selector.match;
    var results$$20 = [];
    var i$$64 = 0;
    var length$$34 = elements$$10.length;
    var v434 = i$$64 < length$$34;
    for (;v434;) {
      var element$$215 = elements$$10[i$$64];
      if (JAM.call(match$$48, null, [element$$215, expression$$9], JAM.policy.p1)) {
        JAM.call(results$$20.push, results$$20, [JAM.call(Element.extend, Element, [element$$215], JAM.policy.p1)], JAM.policy.p1);
      }
      i$$64 = i$$64 + 1;
      v434 = i$$64 < length$$34;
    }
    return results$$20;
  }
  function v355() {
    return "#<Selector: " + this.expression + ">";
  }
  function v354() {
    return this.expression;
  }
  function v353(element$$214) {
    var v436 = Prototype.Selector;
    return JAM.call(v436.match, v436, [element$$214, this.expression], JAM.policy.p1);
  }
  function v352(rootElement) {
    var v438 = Prototype.Selector;
    return JAM.call(v438.select, v438, [this.expression, rootElement], JAM.policy.p1);
  }
  function v351(expression$$8) {
    var v3968 = JAM.call(expression$$8.strip, expression$$8, [], JAM.policy.p1);
    this.expression = v3968;
    return;
  }
  var v440 = window;
  var v3969 = JAM.call(Class.create, Class, [{initialize:v351, findElements:v352, match:v353, toString:v354, inspect:v355}], JAM.policy.p1);
  v440.Selector = v3969;
  JAM.call(Object.extend, Object, [Selector, {matchElements:v356, findElement:v357, findChildElements:v358}], JAM.policy.p1);
  return;
}
function v350() {
  var v442 = JAM.call($A, null, [this], JAM.policy.p1);
  return JAM.call(v442.join, v442, [" "], JAM.policy.p1);
}
function v349(classNameToRemove) {
  if (!JAM.call(this.include, this, [classNameToRemove], JAM.policy.p1)) {
    return;
  }
  var v3097 = JAM.call($A, null, [this], JAM.policy.p1);
  var v2114 = JAM.call(v3097.without, v3097, [classNameToRemove], JAM.policy.p1);
  JAM.call(this.set, this, [JAM.call(v2114.join, v2114, [" "], JAM.policy.p1)], JAM.policy.p1);
  return;
}
function v348(classNameToAdd) {
  if (JAM.call(this.include, this, [classNameToAdd], JAM.policy.p1)) {
    return;
  }
  var v3098 = JAM.call($A, null, [this], JAM.policy.p1);
  var v2115 = JAM.call(v3098.concat, v3098, [classNameToAdd], JAM.policy.p1);
  JAM.call(this.set, this, [JAM.call(v2115.join, v2115, [" "], JAM.policy.p1)], JAM.policy.p1);
  return;
}
function v347(className$$8) {
  this.element.className = className$$8;
  return;
}
function v346(iterator$$27, context$$39) {
  function v345(name$$48) {
    return name$$48.length > 0;
  }
  var v3099 = this.element.className;
  var v2116 = JAM.call(v3099.split, v3099, [/\s+/], JAM.policy.p1);
  var v449 = JAM.call(v2116.select, v2116, [v345], JAM.policy.p1);
  JAM.call(v449._each, v449, [iterator$$27, context$$39], JAM.policy.p1);
  return;
}
function v344(element$$213) {
  var v3970 = JAM.call($, null, [element$$213], JAM.policy.p1);
  this.element = v3970;
  return;
}
function v343(instanceMethods) {
  function v342(className$$7, parentElement) {
    var v3100 = parentElement;
    if (!v3100) {
      v3100 = document.body;
    }
    var v450 = JAM.call($, null, [v3100], JAM.policy.p1);
    return JAM.call(v450.getElementsByClassName, v450, [className$$7], JAM.policy.p1);
  }
  function v341(element$$212, className$$6) {
    function v340(name$$47) {
      var v3101 = JAM.call(name$$47.toString, name$$47, [], JAM.policy.p1);
      var v451 = !JAM.call(v3101.blank, v3101, [], JAM.policy.p1);
      if (v451) {
        v451 = JAM.call(cn.include, cn, [" " + name$$47 + " "], JAM.policy.p1);
      }
      return v451;
    }
    var v452 = JAM.call(className$$6.toString, className$$6, [], JAM.policy.p1);
    className$$6 = JAM.call(v452.strip, v452, [], JAM.policy.p1);
    var elements$$9 = [];
    var v453;
    if (JAM.call(/\s/.test, /\s/, [className$$6], JAM.policy.p1)) {
      v453 = JAM.call($w, null, [className$$6], JAM.policy.p1);
    } else {
      v453 = null;
    }
    var classNames$$2 = v453;
    var v2121 = !classNames$$2;
    if (v2121) {
      v2121 = !className$$6;
    }
    if (v2121) {
      return elements$$9;
    }
    var v455 = JAM.call($, null, [element$$212], JAM.policy.p1);
    var nodes$$1 = JAM.call(v455.getElementsByTagName, v455, ["*"], JAM.policy.p1);
    className$$6 = " " + className$$6 + " ";
    var i$$63 = 0;
    var child$$2;
    var cn;
    var v459 = child$$2 = nodes$$1[i$$63];
    for (;v459;) {
      var v3103 = child$$2.className;
      if (v3103) {
        v3103 = cn = " " + child$$2.className + " ";
      }
      var v2122 = v3103;
      if (v2122) {
        var v3104 = JAM.call(cn.include, cn, [className$$6], JAM.policy.p1);
        if (!v3104) {
          var v3592 = classNames$$2;
          if (v3592) {
            v3592 = JAM.call(classNames$$2.all, classNames$$2, [v340], JAM.policy.p1);
          }
          v3104 = v3592;
        }
        v2122 = v3104;
      }
      if (v2122) {
        JAM.call(elements$$9.push, elements$$9, [JAM.call(Element.extend, Element, [child$$2], JAM.policy.p1)], JAM.policy.p1);
      }
      i$$63 = i$$63 + 1;
      v459 = child$$2 = nodes$$1[i$$63];
    }
    return elements$$9;
  }
  function v339(element$$211, className$$5) {
    var v460 = JAM.call(className$$5.toString, className$$5, [], JAM.policy.p1);
    className$$5 = JAM.call(v460.strip, v460, [], JAM.policy.p1);
    var v461;
    if (JAM.call(/\s/.test, /\s/, [className$$5], JAM.policy.p1)) {
      var v3105 = JAM.call($w, null, [className$$5], JAM.policy.p1);
      var v2123 = JAM.call(v3105.map, v3105, [iter], JAM.policy.p1);
      v461 = JAM.call(v2123.join, v2123, [""], JAM.policy.p1);
    } else {
      v461 = JAM.call(iter, null, [className$$5], JAM.policy.p1);
    }
    var cond = v461;
    var v462;
    if (cond) {
      v462 = JAM.call(document._getElementsByXPath, document, [".//*" + cond, element$$211], JAM.policy.p1);
    } else {
      v462 = [];
    }
    return v462;
  }
  function iter(name$$46) {
    var v463;
    if (JAM.call(name$$46.blank, name$$46, [], JAM.policy.p1)) {
      v463 = null;
    } else {
      v463 = "[contains(concat(' ', @class, ' '), ' " + name$$46 + " ')]";
    }
    return v463;
  }
  var v464;
  if (Prototype.BrowserFeatures.XPath) {
    v464 = v339;
  } else {
    v464 = v341;
  }
  instanceMethods.getElementsByClassName = v464;
  return v342;
}
function v338(source$$5, target$$37, options$$11) {
  options$$11 = options$$11 || {};
  return JAM.call(Element.clonePosition, Element, [target$$37, source$$5, options$$11], JAM.policy.p1);
}
function v337(element$$210) {
  JAM.call(Position.prepare, Position, [], JAM.policy.p1);
  return JAM.call(Element.relativize, Element, [element$$210], JAM.policy.p1);
}
function v336(element$$209) {
  JAM.call(Position.prepare, Position, [], JAM.policy.p1);
  return JAM.call(Element.absolutize, Element, [element$$209], JAM.policy.p1);
}
function v335(mode$$8, element$$208) {
  if (!mode$$8) {
    return 0;
  }
  if (mode$$8 == "vertical") {
    return(this.offset[1] + element$$208.offsetHeight - this.ycomp) / element$$208.offsetHeight;
  }
  if (mode$$8 == "horizontal") {
    return(this.offset[0] + element$$208.offsetWidth - this.xcomp) / element$$208.offsetWidth;
  }
  return;
}
function v334(element$$207, x$$51, y$$33) {
  var offsetcache = JAM.call(Element.cumulativeScrollOffset, Element, [element$$207], JAM.policy.p1);
  this.xcomp = x$$51 + offsetcache[0] - this.deltaX;
  this.ycomp = y$$33 + offsetcache[1] - this.deltaY;
  var v3971 = JAM.call(Element.cumulativeOffset, Element, [element$$207], JAM.policy.p1);
  this.offset = v3971;
  var v3111 = this.ycomp >= this.offset[1];
  if (v3111) {
    v3111 = this.ycomp < this.offset[1] + element$$207.offsetHeight;
  }
  var v2135 = v3111;
  if (v2135) {
    v2135 = this.xcomp >= this.offset[0];
  }
  var v476 = v2135;
  if (v476) {
    v476 = this.xcomp < this.offset[0] + element$$207.offsetWidth;
  }
  return v476;
}
function v333(element$$206, x$$50, y$$32) {
  if (this.includeScrollOffsets) {
    return JAM.call(this.withinIncludingScrolloffsets, this, [element$$206, x$$50, y$$32], JAM.policy.p1);
  }
  this.xcomp = x$$50;
  this.ycomp = y$$32;
  var v3972 = JAM.call(Element.cumulativeOffset, Element, [element$$206], JAM.policy.p1);
  this.offset = v3972;
  var v3116 = y$$32 >= this.offset[1];
  if (v3116) {
    v3116 = y$$32 < this.offset[1] + element$$206.offsetHeight;
  }
  var v2138 = v3116;
  if (v2138) {
    v2138 = x$$50 >= this.offset[0];
  }
  var v478 = v2138;
  if (v478) {
    v478 = x$$50 < this.offset[0] + element$$206.offsetWidth;
  }
  return v478;
}
function v332() {
  var v3120 = window.pageXOffset;
  if (!v3120) {
    v3120 = document.documentElement.scrollLeft;
  }
  var v2140 = v3120;
  if (!v2140) {
    v2140 = document.body.scrollLeft;
  }
  var v479 = v2140;
  if (!v479) {
    v479 = 0;
  }
  this.deltaX = v479;
  var v3123 = window.pageYOffset;
  if (!v3123) {
    v3123 = document.documentElement.scrollTop;
  }
  var v2142 = v3123;
  if (!v2142) {
    v2142 = document.body.scrollTop;
  }
  var v480 = v2142;
  if (!v480) {
    v480 = 0;
  }
  this.deltaY = v480;
  return;
}
function v331(element$$205, content$$8) {
  return JAM.call(Element.insert, Element, [element$$205, {after:content$$8}], JAM.policy.p1);
}
function v330(element$$204, content$$7) {
  return JAM.call(Element.insert, Element, [element$$204, {bottom:content$$7}], JAM.policy.p1);
}
function v329(element$$203, content$$6) {
  return JAM.call(Element.insert, Element, [element$$203, {top:content$$6}], JAM.policy.p1);
}
function v328(element$$202, content$$5) {
  return JAM.call(Element.insert, Element, [element$$202, {before:content$$5}], JAM.policy.p1);
}
function v327(GLOBAL$$3) {
  function fireContentLoadedEvent() {
    if (document.loaded) {
      return;
    }
    if (TIMER) {
      JAM.call(window.clearTimeout, window, [TIMER], JAM.policy.p1);
    }
    document.loaded = true;
    JAM.call(document.fire, document, ["dom:loaded"], JAM.policy.p1);
    return;
  }
  function checkReadyState() {
    if (document.readyState === "complete") {
      JAM.call(document.detachEvent, document, ["onreadystatechange", checkReadyState], JAM.policy.p1);
      JAM.call(fireContentLoadedEvent, null, [], JAM.policy.p1);
    }
    return;
  }
  function pollDoScroll() {
    try {
      var v487 = document.documentElement;
      JAM.call(v487.doScroll, v487, ["left"], JAM.policy.p1);
    } catch (e$$28) {
      TIMER = JAM.call(pollDoScroll.defer, pollDoScroll, [], JAM.policy.p1);
      return;
    }
    JAM.call(fireContentLoadedEvent, null, [], JAM.policy.p1);
    return;
  }
  var TIMER;
  if (document.addEventListener) {
    JAM.call(document.addEventListener, document, ["DOMContentLoaded", fireContentLoadedEvent, false], JAM.policy.p1);
  } else {
    JAM.call(document.attachEvent, document, ["onreadystatechange", checkReadyState], JAM.policy.p1);
    if (window == top) {
      TIMER = JAM.call(pollDoScroll.defer, pollDoScroll, [], JAM.policy.p1);
    }
  }
  JAM.call(Event.observe, Event, [window, "load", fireContentLoadedEvent], JAM.policy.p1);
  return;
}
function v326(GLOBAL$$2) {
  function createResponder(uid$$8, eventName$$19, handler$$8) {
    function v323(event$$25) {
      var cacheEntry = Event.cache[uid$$8];
      var element$$199 = cacheEntry.element;
      JAM.call(Event.extend, Event, [event$$25, element$$199], JAM.policy.p1);
      JAM.call(handler$$8.call, handler$$8, [element$$199, event$$25], JAM.policy.p1);
      return;
    }
    if (JAM.call(Event._isCustomEvent, Event, [eventName$$19], JAM.policy.p1)) {
      return JAM.call(createResponderForCustomEvent, null, [uid$$8, eventName$$19, handler$$8], JAM.policy.p1);
    }
    var v2145 = !MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED$$1;
    if (v2145) {
      var v3126 = eventName$$19 === "mouseenter";
      if (!v3126) {
        v3126 = eventName$$19 === "mouseleave";
      }
      v2145 = v3126;
    }
    if (v2145) {
      return JAM.call(createMouseEnterLeaveResponder, null, [uid$$8, eventName$$19, handler$$8], JAM.policy.p1);
    }
    return v323;
  }
  function createResponderForCustomEvent(uid$$9, eventName$$20, handler$$9) {
    function v324(event$$26) {
      var cacheEntry$$1 = Event.cache[uid$$9];
      var element$$200 = cacheEntry$$1.element;
      if (JAM.call(Object.isUndefined, Object, [event$$26.eventName], JAM.policy.p1)) {
        return false;
      }
      if (event$$26.eventName !== eventName$$20) {
        return false;
      }
      JAM.call(Event.extend, Event, [event$$26, element$$200], JAM.policy.p1);
      JAM.call(handler$$9.call, handler$$9, [element$$200, event$$26], JAM.policy.p1);
      return;
    }
    return v324;
  }
  function createMouseEnterLeaveResponder(uid$$10, eventName$$21, handler$$10) {
    function v325(event$$27) {
      var cacheEntry$$2 = Event.cache[uid$$10];
      var element$$201 = cacheEntry$$2.element;
      JAM.call(Event.extend, Event, [event$$27, element$$201], JAM.policy.p1);
      var parent$$10 = event$$27.relatedTarget;
      var v2148 = parent$$10;
      if (v2148) {
        v2148 = parent$$10 !== element$$201;
      }
      var v497 = v2148;
      for (;v497;) {
        try {
          parent$$10 = parent$$10.parentNode;
        } catch (e$$27) {
          parent$$10 = element$$201;
        }
        var v2149 = parent$$10;
        if (v2149) {
          v2149 = parent$$10 !== element$$201;
        }
        v497 = v2149;
      }
      if (parent$$10 === element$$201) {
        return;
      }
      JAM.call(handler$$10.call, handler$$10, [element$$201, event$$27], JAM.policy.p1);
      return;
    }
    return v325;
  }
  var docEl$$2 = document.documentElement;
  var v499 = "onmouseenter" in docEl$$2;
  if (v499) {
    v499 = "onmouseleave" in docEl$$2;
  }
  var MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED$$1 = v499;
  GLOBAL$$2.Event._createResponder = createResponder;
  docEl$$2 = null;
  return;
}
function v322(GLOBAL$$1) {
  function v321(event$$24) {
    var element$$198 = JAM.call(Event$$1.findElement, Event$$1, [event$$24, this.selector], JAM.policy.p1);
    if (element$$198) {
      var v502 = this.callback;
      JAM.call(v502.call, v502, [this.element, event$$24, element$$198], JAM.policy.p1);
    }
    return;
  }
  function v320() {
    JAM.call(Event$$1.stopObserving, Event$$1, [this.element, this.eventName, this.handler], JAM.policy.p1);
    return this;
  }
  function v319() {
    JAM.call(Event$$1.observe, Event$$1, [this.element, this.eventName, this.handler], JAM.policy.p1);
    return this;
  }
  function v318(element$$197, eventName$$17, selector$$6, callback$$30) {
    var v3973 = JAM.call($, null, [element$$197], JAM.policy.p1);
    this.element = v3973;
    this.eventName = eventName$$17;
    this.selector = selector$$6;
    this.callback = callback$$30;
    var v510 = this.handleEvent;
    var v3974 = JAM.call(v510.bind, v510, [this], JAM.policy.p1);
    this.handler = v3974;
    return;
  }
  function v317(event$$23, element$$196) {
    if (!event$$23) {
      return false;
    }
    if (!JAM.call(isIELegacyEvent, null, [event$$23], JAM.policy.p1)) {
      return event$$23;
    }
    if (event$$23._extendedByPrototype) {
      return event$$23;
    }
    event$$23._extendedByPrototype = Prototype.emptyFunction;
    var pointer$$1 = JAM.call(Event$$1.pointer, Event$$1, [event$$23], JAM.policy.p1);
    var v3127 = event$$23.srcElement;
    if (!v3127) {
      v3127 = element$$196;
    }
    JAM.call(Object.extend, Object, [event$$23, {target:v3127, relatedTarget:JAM.call(_relatedTarget, null, [event$$23], JAM.policy.p1), pageX:pointer$$1.x, pageY:pointer$$1.y}], JAM.policy.p1);
    JAM.call(Object.extend, Object, [event$$23, methods$$7], JAM.policy.p1);
    JAM.call(Object.extend, Object, [event$$23, additionalMethods], JAM.policy.p1);
    return event$$23;
  }
  function v316() {
    return "[object Event]";
  }
  function v315() {
    this.returnValue = false;
    return;
  }
  function v314() {
    this.cancelBubble = true;
    return;
  }
  function v313(event$$22) {
    var element$$195;
    switch(event$$22.type) {
      case "mouseover":
      ;
      case "mouseenter":
        element$$195 = event$$22.fromElement;
        break;
      case "mouseout":
      ;
      case "mouseleave":
        element$$195 = event$$22.toElement;
        break;
      default:
        return null;
    }
    return JAM.call(Element.extend, Element, [element$$195], JAM.policy.p1);
  }
  function v312(m$$5, name$$45) {
    var v516 = m$$5;
    var v517 = name$$45;
    var v2155 = Event$$1.Methods[name$$45];
    var v3975 = JAM.call(v2155.methodize, v2155, [], JAM.policy.p1);
    JAM.set(v516, v517, v3975, JAM.policy.p2);
    return m$$5;
  }
  function v311(event$$21, code$$5) {
    var v518;
    if (JAM.call(isIELegacyEvent, null, [event$$21], JAM.policy.p1)) {
      v518 = JAM.call(_isButtonForLegacyEvents, null, [event$$21, code$$5], JAM.policy.p1);
    } else {
      v518 = JAM.call(_isButtonForDOMEvents, null, [event$$21, code$$5], JAM.policy.p1);
    }
    return v518;
  }
  function v310(event$$20) {
    return true;
  }
  function v309(event$$19) {
    return!(event$$19 instanceof window.Event);
  }
  function isIELegacyEvent(event$$18) {
    return false;
  }
  function _isButtonForDOMEvents(event$$2, code$$2) {
    var v520;
    if (event$$2.which) {
      v520 = event$$2.which === code$$2 + 1;
    } else {
      v520 = event$$2.button === code$$2;
    }
    return v520;
  }
  function _isButtonForLegacyEvents(event$$3, code$$3) {
    return event$$3.button === legacyButtonMap[code$$3];
  }
  function _isButtonForWebKit(event$$4, code$$4) {
    switch(code$$4) {
      case 0:
        var v523 = event$$4.which == 1;
        if (v523) {
          v523 = !event$$4.metaKey;
        }
        return v523;
      case 1:
        var v524 = event$$4.which == 2;
        if (!v524) {
          var v2165 = event$$4.which == 1;
          if (v2165) {
            v2165 = event$$4.metaKey;
          }
          v524 = v2165;
        }
        return v524;
      case 2:
        return event$$4.which == 3;
      default:
        return false;
    }
    return;
  }
  function isLeftClick(event$$5) {
    return JAM.call(_isButton, null, [event$$5, 0], JAM.policy.p1);
  }
  function isMiddleClick(event$$6) {
    return JAM.call(_isButton, null, [event$$6, 1], JAM.policy.p1);
  }
  function isRightClick(event$$7) {
    return JAM.call(_isButton, null, [event$$7, 2], JAM.policy.p1);
  }
  function element$$173(event$$8) {
    return JAM.call(Element.extend, Element, [JAM.call(_element, null, [event$$8], JAM.policy.p1)], JAM.policy.p1);
  }
  function _element(event$$9) {
    event$$9 = JAM.call(Event$$1.extend, Event$$1, [event$$9], JAM.policy.p1);
    var node$$19 = event$$9.target;
    var type$$33 = event$$9.type;
    var currentTarget = event$$9.currentTarget;
    var v2167 = currentTarget;
    if (v2167) {
      v2167 = currentTarget.tagName;
    }
    if (v2167) {
      var v3130 = type$$33 === "load";
      if (!v3130) {
        v3130 = type$$33 === "error";
      }
      var v2168 = v3130;
      if (!v2168) {
        var v3613 = type$$33 === "click";
        if (v3613) {
          var v3882 = currentTarget.tagName;
          v3613 = JAM.call(v3882.toLowerCase, v3882, [], JAM.policy.p1) === "input";
        }
        var v3131 = v3613;
        if (v3131) {
          v3131 = currentTarget.type === "radio";
        }
        v2168 = v3131;
      }
      if (v2168) {
        node$$19 = currentTarget;
      }
    }
    if (node$$19.nodeType == Node.TEXT_NODE) {
      node$$19 = node$$19.parentNode;
    }
    return JAM.call(Element.extend, Element, [node$$19], JAM.policy.p1);
  }
  function findElement(event$$10, expression$$7) {
    var element$$174 = JAM.call(_element, null, [event$$10], JAM.policy.p1);
    var match$$47 = Prototype.Selector.match;
    if (!expression$$7) {
      return JAM.call(Element.extend, Element, [element$$174], JAM.policy.p1);
    }
    for (;element$$174;) {
      var v2171 = JAM.call(Object.isElement, Object, [element$$174], JAM.policy.p1);
      if (v2171) {
        v2171 = JAM.call(match$$47, null, [element$$174, expression$$7], JAM.policy.p1);
      }
      if (v2171) {
        return JAM.call(Element.extend, Element, [element$$174], JAM.policy.p1);
      }
      element$$174 = element$$174.parentNode;
    }
    return;
  }
  function pointer(event$$11) {
    return{x:JAM.call(pointerX, null, [event$$11], JAM.policy.p1), y:JAM.call(pointerY, null, [event$$11], JAM.policy.p1)};
  }
  function pointerX(event$$12) {
    var docElement = document.documentElement;
    var v535 = document.body;
    if (!v535) {
      v535 = {scrollLeft:0};
    }
    var body = v535;
    var v536 = event$$12.pageX;
    if (!v536) {
      var v3133 = event$$12.clientX;
      var v3615 = docElement.scrollLeft;
      if (!v3615) {
        v3615 = body.scrollLeft;
      }
      var v2173 = v3133 + v3615;
      var v3135 = docElement.clientLeft;
      if (!v3135) {
        v3135 = 0;
      }
      v536 = v2173 - v3135;
    }
    return v536;
  }
  function pointerY(event$$13) {
    var docElement$$1 = document.documentElement;
    var v537 = document.body;
    if (!v537) {
      v537 = {scrollTop:0};
    }
    var body$$1 = v537;
    var v538 = event$$13.pageY;
    if (!v538) {
      var v3136 = event$$13.clientY;
      var v3617 = docElement$$1.scrollTop;
      if (!v3617) {
        v3617 = body$$1.scrollTop;
      }
      var v2177 = v3136 + v3617;
      var v3138 = docElement$$1.clientTop;
      if (!v3138) {
        v3138 = 0;
      }
      v538 = v2177 - v3138;
    }
    return v538;
  }
  function stop(event$$14) {
    JAM.call(Event$$1.extend, Event$$1, [event$$14], JAM.policy.p1);
    JAM.call(event$$14.preventDefault, event$$14, [], JAM.policy.p1);
    JAM.call(event$$14.stopPropagation, event$$14, [], JAM.policy.p1);
    event$$14.stopped = true;
    return;
  }
  function getDOMEventName(eventName) {
    var v539 = EVENT_TRANSLATIONS[eventName];
    if (!v539) {
      v539 = eventName;
    }
    return v539;
  }
  function getUniqueElementID$$1(element$$175) {
    if (element$$175 === window) {
      return 0;
    }
    if (typeof element$$175._prototypeUID === "undefined") {
      element$$175._prototypeUID = Element.Storage.UID;
      Element.Storage.UID = Element.Storage.UID + 1;
    }
    return element$$175._prototypeUID;
  }
  function getUniqueElementID_IE$$1(element$$176) {
    if (element$$176 === window) {
      return 0;
    }
    if (element$$176 == document) {
      return 1;
    }
    return element$$176.uniqueID;
  }
  function isCustomEvent(eventName$$1) {
    return JAM.call(eventName$$1.include, eventName$$1, [":"], JAM.policy.p1);
  }
  function getRegistryForElement(element$$177, uid$$4) {
    var CACHE = GLOBAL$$1.Event.cache;
    if (JAM.call(Object.isUndefined, Object, [uid$$4], JAM.policy.p1)) {
      uid$$4 = JAM.call(getUniqueElementID$$1, null, [element$$177], JAM.policy.p1);
    }
    if (!CACHE[uid$$4]) {
      JAM.set(CACHE, uid$$4, {element:element$$177}, JAM.policy.p2);
    }
    return CACHE[uid$$4];
  }
  function observe(element$$181, eventName$$4, handler$$5) {
    element$$181 = JAM.call($, null, [element$$181], JAM.policy.p1);
    var entry$$2;
    JSCompiler_inline_label_register_42: {
      var element$$inline_33 = element$$181;
      var eventName$$inline_34 = eventName$$4;
      var handler$$inline_35 = handler$$5;
      var registry$$inline_36 = JAM.call(getRegistryForElement, null, [element$$inline_33], JAM.policy.p1);
      if (!registry$$inline_36[eventName$$inline_34]) {
        JAM.set(registry$$inline_36, eventName$$inline_34, [], JAM.policy.p2);
      }
      var entries$$inline_37 = registry$$inline_36[eventName$$inline_34];
      var i$$inline_38 = entries$$inline_37.length;
      var v549 = i$$inline_38;
      i$$inline_38 = i$$inline_38 - 1;
      for (;v549;) {
        if (entries$$inline_37[i$$inline_38].handler === handler$$inline_35) {
          entry$$2 = null;
          break JSCompiler_inline_label_register_42;
        }
        v549 = i$$inline_38;
        i$$inline_38 = i$$inline_38 - 1;
      }
      var uid$$inline_39 = JAM.call(getUniqueElementID$$1, null, [element$$inline_33], JAM.policy.p1);
      var v550 = GLOBAL$$1.Event;
      var responder$$inline_40 = JAM.call(v550._createResponder, v550, [uid$$inline_39, eventName$$inline_34, handler$$inline_35], JAM.policy.p1);
      var entry$$inline_41 = {responder:responder$$inline_40, handler:handler$$inline_35};
      JAM.call(entries$$inline_37.push, entries$$inline_37, [entry$$inline_41], JAM.policy.p1);
      entry$$2 = entry$$inline_41;
    }
    if (entry$$2 === null) {
      return element$$181;
    }
    var responder$$4 = entry$$2.responder;
    if (JAM.call(isCustomEvent, null, [eventName$$4], JAM.policy.p1)) {
      var element$$inline_43 = element$$181;
      var responder$$inline_45 = responder$$4;
      if (element$$inline_43.addEventListener) {
        JAM.call(element$$inline_43.addEventListener, element$$inline_43, ["dataavailable", responder$$inline_45, false], JAM.policy.p1);
      } else {
        JAM.call(element$$inline_43.attachEvent, element$$inline_43, ["ondataavailable", responder$$inline_45], JAM.policy.p1);
        JAM.call(element$$inline_43.attachEvent, element$$inline_43, ["onlosecapture", responder$$inline_45], JAM.policy.p1);
      }
    } else {
      var element$$inline_47 = element$$181;
      var responder$$inline_49 = responder$$4;
      var actualEventName$$inline_50 = JAM.call(getDOMEventName, null, [eventName$$4], JAM.policy.p1);
      if (element$$inline_47.addEventListener) {
        JAM.call(element$$inline_47.addEventListener, element$$inline_47, [actualEventName$$inline_50, responder$$inline_49, false], JAM.policy.p1);
      } else {
        JAM.call(element$$inline_47.attachEvent, element$$inline_47, ["on" + actualEventName$$inline_50, responder$$inline_49], JAM.policy.p1);
      }
    }
    return element$$181;
  }
  function stopObserving(element$$184, eventName$$7, handler$$6) {
    element$$184 = JAM.call($, null, [element$$184], JAM.policy.p1);
    var handlerGiven = !JAM.call(Object.isUndefined, Object, [handler$$6], JAM.policy.p1);
    var eventNameGiven = !JAM.call(Object.isUndefined, Object, [eventName$$7], JAM.policy.p1);
    var v2187 = !eventNameGiven;
    if (v2187) {
      v2187 = !handlerGiven;
    }
    if (v2187) {
      var element$$inline_52 = element$$184;
      var uid$$inline_53 = JAM.call(getUniqueElementID$$1, null, [element$$inline_52], JAM.policy.p1);
      var registry$$inline_54 = JAM.call(getRegistryForElement, null, [element$$inline_52, uid$$inline_53], JAM.policy.p1);
      var element$$inline_87 = element$$inline_52;
      var uid$$inline_88 = uid$$inline_53;
      if (JAM.call(Object.isUndefined, Object, [uid$$inline_88], JAM.policy.p1)) {
        uid$$inline_88 = JAM.call(getUniqueElementID$$1, null, [element$$inline_87], JAM.policy.p1);
      }
      delete GLOBAL$$1.Event.cache[uid$$inline_88];
      var entries$$inline_55;
      var i$$inline_56;
      var eventName$$inline_57;
      for (eventName$$inline_57 in registry$$inline_54) {
        if (eventName$$inline_57 === "element") {
          continue;
        }
        entries$$inline_55 = registry$$inline_54[eventName$$inline_57];
        i$$inline_56 = entries$$inline_55.length;
        var v562 = i$$inline_56;
        i$$inline_56 = i$$inline_56 - 1;
        for (;v562;) {
          JAM.call(removeEvent, null, [element$$inline_52, eventName$$inline_57, entries$$inline_55[i$$inline_56].responder], JAM.policy.p1);
          v562 = i$$inline_56;
          i$$inline_56 = i$$inline_56 - 1;
        }
      }
      return element$$184;
    }
    if (!handlerGiven) {
      JSCompiler_inline_label_stopObservingEventName_64: {
        var element$$inline_59 = element$$184;
        var eventName$$inline_60 = eventName$$7;
        var registry$$inline_61 = JAM.call(getRegistryForElement, null, [element$$inline_59], JAM.policy.p1);
        var entries$$inline_62 = registry$$inline_61[eventName$$inline_60];
        if (!entries$$inline_62) {
          break JSCompiler_inline_label_stopObservingEventName_64;
        }
        delete registry$$inline_61[eventName$$inline_60];
        var i$$inline_63 = entries$$inline_62.length;
        var v566 = i$$inline_63;
        i$$inline_63 = i$$inline_63 - 1;
        for (;v566;) {
          JAM.call(removeEvent, null, [element$$inline_59, eventName$$inline_60, entries$$inline_62[i$$inline_63].responder], JAM.policy.p1);
          v566 = i$$inline_63;
          i$$inline_63 = i$$inline_63 - 1;
        }
      }
      return element$$184;
    }
    var entry$$3;
    JSCompiler_inline_label_unregister_73: {
      var eventName$$inline_66 = eventName$$7;
      var handler$$inline_67 = handler$$6;
      var registry$$inline_68 = JAM.call(getRegistryForElement, null, [element$$184], JAM.policy.p1);
      var entries$$inline_69 = registry$$inline_68[eventName$$inline_66];
      if (!entries$$inline_69) {
        entry$$3 = void 0;
        break JSCompiler_inline_label_unregister_73;
      }
      var i$$inline_70 = entries$$inline_69.length;
      var entry$$inline_71;
      var v570 = i$$inline_70;
      i$$inline_70 = i$$inline_70 - 1;
      for (;v570;) {
        if (entries$$inline_69[i$$inline_70].handler === handler$$inline_67) {
          entry$$inline_71 = entries$$inline_69[i$$inline_70];
          break;
        }
        v570 = i$$inline_70;
        i$$inline_70 = i$$inline_70 - 1;
      }
      if (!entry$$inline_71) {
        entry$$3 = void 0;
        break JSCompiler_inline_label_unregister_73;
      }
      var index$$inline_72 = JAM.call(entries$$inline_69.indexOf, entries$$inline_69, [entry$$inline_71], JAM.policy.p1);
      JAM.call(entries$$inline_69.splice, entries$$inline_69, [index$$inline_72, 1], JAM.policy.p1);
      entry$$3 = entry$$inline_71;
    }
    if (!entry$$3) {
      return element$$184;
    }
    JAM.call(removeEvent, null, [element$$184, eventName$$7, entry$$3.responder], JAM.policy.p1);
    return element$$184;
  }
  function removeEvent(element$$189, eventName$$12, handler$$7) {
    if (JAM.call(isCustomEvent, null, [eventName$$12], JAM.policy.p1)) {
      var element$$inline_74 = element$$189;
      var responder$$inline_76 = handler$$7;
      if (element$$inline_74.removeEventListener) {
        JAM.call(element$$inline_74.removeEventListener, element$$inline_74, ["dataavailable", responder$$inline_76, false], JAM.policy.p1);
      } else {
        JAM.call(element$$inline_74.detachEvent, element$$inline_74, ["ondataavailable", responder$$inline_76], JAM.policy.p1);
        JAM.call(element$$inline_74.detachEvent, element$$inline_74, ["onlosecapture", responder$$inline_76], JAM.policy.p1);
      }
    } else {
      var element$$inline_78 = element$$189;
      var responder$$inline_80 = handler$$7;
      var actualEventName$$inline_81 = JAM.call(getDOMEventName, null, [eventName$$12], JAM.policy.p1);
      if (element$$inline_78.removeEventListener) {
        JAM.call(element$$inline_78.removeEventListener, element$$inline_78, [actualEventName$$inline_81, responder$$inline_80, false], JAM.policy.p1);
      } else {
        JAM.call(element$$inline_78.detachEvent, element$$inline_78, ["on" + actualEventName$$inline_81, responder$$inline_80], JAM.policy.p1);
      }
    }
    return;
  }
  function fire(element$$191, eventName$$13, memo$$2, bubble) {
    JSCompiler_inline_label_getFireTarget_84: {
      var element$$inline_83 = JAM.call($, null, [element$$191], JAM.policy.p1);
      if (element$$inline_83 !== document) {
        element$$191 = element$$inline_83;
        break JSCompiler_inline_label_getFireTarget_84;
      }
      var v2192 = document.createEvent;
      if (v2192) {
        v2192 = !element$$inline_83.dispatchEvent;
      }
      if (v2192) {
        element$$191 = document.documentElement;
        break JSCompiler_inline_label_getFireTarget_84;
      }
      element$$191 = element$$inline_83;
    }
    if (JAM.call(Object.isUndefined, Object, [bubble], JAM.policy.p1)) {
      bubble = true;
    }
    memo$$2 = memo$$2 || {};
    var event$$15 = JAM.call(fireEvent, null, [element$$191, eventName$$13, memo$$2, bubble], JAM.policy.p1);
    return JAM.call(Event$$1.extend, Event$$1, [event$$15], JAM.policy.p1);
  }
  function fireEvent_DOM(element$$192, eventName$$14, memo$$3, bubble$$1) {
    var event$$16 = JAM.call(document.createEvent, document, ["HTMLEvents"], JAM.policy.p1);
    JAM.call(event$$16.initEvent, event$$16, ["dataavailable", bubble$$1, true], JAM.policy.p1);
    event$$16.eventName = eventName$$14;
    event$$16.memo = memo$$3;
    JAM.call(element$$192.dispatchEvent, element$$192, [event$$16], JAM.policy.p1);
    return event$$16;
  }
  function fireEvent_IE(element$$193, eventName$$15, memo$$4, bubble$$2) {
    var event$$17 = JAM.call(document.createEventObject, document, [], JAM.policy.p1);
    var v581;
    if (bubble$$2) {
      v581 = "ondataavailable";
    } else {
      v581 = "onlosecapture";
    }
    event$$17.eventType = v581;
    event$$17.eventName = eventName$$15;
    event$$17.memo = memo$$4;
    JAM.call(element$$193.fireEvent, element$$193, [event$$17.eventType, event$$17], JAM.policy.p1);
    return event$$17;
  }
  function on(element$$194, eventName$$16, selector$$5, callback$$29) {
    element$$194 = JAM.call($, null, [element$$194], JAM.policy.p1);
    var v2193 = JAM.call(Object.isFunction, Object, [selector$$5], JAM.policy.p1);
    if (v2193) {
      v2193 = JAM.call(Object.isUndefined, Object, [callback$$29], JAM.policy.p1);
    }
    if (v2193) {
      callback$$29 = selector$$5;
      selector$$5 = null;
    }
    var v584 = JAM.new(Event$$1.Handler, [element$$194, eventName$$16, selector$$5, callback$$29], JAM.policy.p1);
    return JAM.call(v584.start, v584, [], JAM.policy.p1);
  }
  function destroyCache_IE() {
    GLOBAL$$1.Event.cache = null;
    return;
  }
  var DIV$$1 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
  var docEl$$1 = document.documentElement;
  var v586 = "onmouseenter" in docEl$$1;
  if (v586) {
    v586 = "onmouseleave" in docEl$$1;
  }
  var MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED = v586;
  var Event$$1 = {KEY_BACKSPACE:8, KEY_TAB:9, KEY_RETURN:13, KEY_ESC:27, KEY_LEFT:37, KEY_UP:38, KEY_RIGHT:39, KEY_DOWN:40, KEY_DELETE:46, KEY_HOME:36, KEY_END:35, KEY_PAGEUP:33, KEY_PAGEDOWN:34, KEY_INSERT:45};
  if (window.attachEvent) {
    if (window.addEventListener) {
      isIELegacyEvent = v309;
    } else {
      isIELegacyEvent = v310;
    }
  }
  var _isButton;
  var legacyButtonMap = {0:1, 1:4, 2:2};
  if (window.attachEvent) {
    if (!window.addEventListener) {
      _isButton = _isButtonForLegacyEvents;
    } else {
      _isButton = v311;
    }
  } else {
    if (Prototype.Browser.WebKit) {
      _isButton = _isButtonForWebKit;
    } else {
      _isButton = _isButtonForDOMEvents;
    }
  }
  Event$$1.Methods = {isLeftClick:isLeftClick, isMiddleClick:isMiddleClick, isRightClick:isRightClick, element:element$$173, findElement:findElement, pointer:pointer, pointerX:pointerX, pointerY:pointerY, stop:stop};
  var v592 = JAM.call(Object.keys, Object, [Event$$1.Methods], JAM.policy.p1);
  var methods$$7 = JAM.call(v592.inject, v592, [{}, v312], JAM.policy.p1);
  if (window.attachEvent) {
    var _relatedTarget = v313;
    var additionalMethods = {stopPropagation:v314, preventDefault:v315, inspect:v316};
    Event$$1.extend = v317;
  } else {
    Event$$1.extend = Prototype.K;
  }
  if (window.addEventListener) {
    var v594 = Event$$1;
    var v2198 = window.Event.prototype;
    if (!v2198) {
      v2198 = JAM.call(document.createEvent, document, ["HTMLEvents"], JAM.policy.p1).__proto__;
    }
    v594.prototype = v2198;
    JAM.call(Object.extend, Object, [Event$$1.prototype, methods$$7], JAM.policy.p1);
  }
  var EVENT_TRANSLATIONS = {mouseenter:"mouseover", mouseleave:"mouseout"};
  if (MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED) {
    getDOMEventName = Prototype.K;
  }
  if ("uniqueID" in DIV$$1) {
    getUniqueElementID$$1 = getUniqueElementID_IE$$1;
  }
  Event$$1._isCustomEvent = isCustomEvent;
  var v598;
  if (document.createEvent) {
    v598 = fireEvent_DOM;
  } else {
    v598 = fireEvent_IE;
  }
  var fireEvent = v598;
  var v599 = Event$$1;
  var v3976 = JAM.call(Class.create, Class, [{initialize:v318, start:v319, stop:v320, handleEvent:v321}], JAM.policy.p1);
  v599.Handler = v3976;
  JAM.call(Object.extend, Object, [Event$$1, Event$$1.Methods], JAM.policy.p1);
  JAM.call(Object.extend, Object, [Event$$1, {fire:fire, observe:observe, stopObserving:stopObserving, on:on}], JAM.policy.p1);
  JAM.call(Element.addMethods, Element, [{fire:fire, observe:observe, stopObserving:stopObserving, on:on}], JAM.policy.p1);
  JAM.call(Object.extend, Object, [document, {fire:JAM.call(fire.methodize, fire, [], JAM.policy.p1), observe:JAM.call(observe.methodize, observe, [], JAM.policy.p1), stopObserving:JAM.call(stopObserving.methodize, stopObserving, [], JAM.policy.p1), on:JAM.call(on.methodize, on, [], JAM.policy.p1), loaded:false}], JAM.policy.p1);
  if (GLOBAL$$1.Event) {
    JAM.call(Object.extend, Object, [window.Event, Event$$1], JAM.policy.p1);
  } else {
    GLOBAL$$1.Event = Event$$1;
  }
  GLOBAL$$1.Event.cache = {};
  if (window.attachEvent) {
    JAM.call(window.attachEvent, window, ["onunload", destroyCache_IE], JAM.policy.p1);
  }
  DIV$$1 = null;
  docEl$$1 = null;
  return;
}
function v308() {
  return JAM.call(Form.serialize, Form, [this.element], JAM.policy.p1);
}
function v307() {
  var v609 = Form.Element;
  return JAM.call(v609.getValue, v609, [this.element], JAM.policy.p1);
}
function v306(element$$172) {
  if (element$$172.type) {
    var v2205 = element$$172.type;
    var v613 = JAM.call(v2205.toLowerCase, v2205, [], JAM.policy.p1);
    introspect(JAM.policy.p1) {
      switch(v613) {
        case "checkbox":
        ;
        case "radio":
          var v2206 = this.onElementEvent;
          var v611 = JAM.call(v2206.bind, v2206, [this], JAM.policy.p1);
          JAM.call(Event.observe, Event, [element$$172, "click", v611], JAM.policy.p1);
          break;
        default:
          var v2207 = this.onElementEvent;
          var v612 = JAM.call(v2207.bind, v2207, [this], JAM.policy.p1);
          JAM.call(Event.observe, Event, [element$$172, "change", v612], JAM.policy.p1);
      }
    }
  }
  return;
}
function v305() {
  var v615 = JAM.call(Form.getElements, Form, [this.element], JAM.policy.p1);
  JAM.call(v615.each, v615, [this.registerCallback, this], JAM.policy.p1);
  return;
}
function v304() {
  var value$$100 = JAM.call(this.getValue, this, [], JAM.policy.p1);
  if (this.lastValue != value$$100) {
    JAM.call(this.callback, this, [this.element, value$$100], JAM.policy.p1);
    this.lastValue = value$$100;
  }
  return;
}
function v303(element$$171, callback$$28) {
  var v3977 = JAM.call($, null, [element$$171], JAM.policy.p1);
  this.element = v3977;
  this.callback = callback$$28;
  var v3978 = JAM.call(this.getValue, this, [], JAM.policy.p1);
  this.lastValue = v3978;
  var v3147 = this.element.tagName;
  if (JAM.call(v3147.toLowerCase, v3147, [], JAM.policy.p1) == "form") {
    JAM.call(this.registerFormCallbacks, this, [], JAM.policy.p1);
  } else {
    JAM.call(this.registerCallback, this, [this.element], JAM.policy.p1);
  }
  return;
}
function v302() {
  return JAM.call(Form.serialize, Form, [this.element], JAM.policy.p1);
}
function v301() {
  var v622 = Form.Element;
  return JAM.call(v622.getValue, v622, [this.element], JAM.policy.p1);
}
function v300() {
  var value$$99 = JAM.call(this.getValue, this, [], JAM.policy.p1);
  var v2211;
  var v3621 = JAM.call(Object.isString, Object, [this.lastValue], JAM.policy.p1);
  if (v3621) {
    v3621 = JAM.call(Object.isString, Object, [value$$99], JAM.policy.p1);
  }
  if (v3621) {
    v2211 = this.lastValue != value$$99;
  } else {
    v2211 = JAM.call(String, null, [this.lastValue], JAM.policy.p1) != JAM.call(String, null, [value$$99], JAM.policy.p1);
  }
  if (v2211) {
    JAM.call(this.callback, this, [this.element, value$$99], JAM.policy.p1);
    this.lastValue = value$$99;
  }
  return;
}
function v299($super$$5, element$$170, frequency$$1, callback$$27) {
  JAM.call($super$$5, null, [callback$$27, frequency$$1], JAM.policy.p1);
  var v3979 = JAM.call($, null, [element$$170], JAM.policy.p1);
  this.element = v3979;
  var v3980 = JAM.call(this.getValue, this, [], JAM.policy.p1);
  this.lastValue = v3980;
  return;
}
function v298() {
  function input$$1(element$$164, value$$95) {
    var v2212 = element$$164.type;
    var v626 = JAM.call(v2212.toLowerCase, v2212, [], JAM.policy.p1);
    introspect(JAM.policy.p1) {
      switch(v626) {
        case "checkbox":
        ;
        case "radio":
          return JAM.call(inputSelector, null, [element$$164, value$$95], JAM.policy.p1);
        default:
          return JAM.call(valueSelector, null, [element$$164, value$$95], JAM.policy.p1);
      }
    }
    return;
  }
  function inputSelector(element$$165, value$$96) {
    if (JAM.call(Object.isUndefined, Object, [value$$96], JAM.policy.p1)) {
      var v627;
      if (element$$165.checked) {
        v627 = element$$165.value;
      } else {
        v627 = null;
      }
      return v627;
    } else {
      element$$165.checked = !!value$$96;
    }
    return;
  }
  function valueSelector(element$$166, value$$97) {
    if (JAM.call(Object.isUndefined, Object, [value$$97], JAM.policy.p1)) {
      return element$$166.value;
    } else {
      element$$166.value = value$$97;
    }
    return;
  }
  function select$$3(element$$167, value$$98) {
    if (JAM.call(Object.isUndefined, Object, [value$$98], JAM.policy.p1)) {
      var v2214;
      if (element$$167.type === "select-one") {
        v2214 = selectOne;
      } else {
        v2214 = selectMany;
      }
      return JAM.call(v2214, null, [element$$167], JAM.policy.p1);
    }
    var opt;
    var currentValue;
    var single = !JAM.call(Object.isArray, Object, [value$$98], JAM.policy.p1);
    var i$$57 = 0;
    var length$$32 = element$$167.length;
    var v637 = i$$57 < length$$32;
    for (;v637;) {
      opt = element$$167.options[i$$57];
      currentValue = JAM.call(this.optionValue, this, [opt], JAM.policy.p1);
      if (single) {
        if (currentValue == value$$98) {
          opt.selected = true;
          return;
        }
      } else {
        var v636 = opt;
        var v3981 = JAM.call(value$$98.include, value$$98, [currentValue], JAM.policy.p1);
        v636.selected = v3981;
      }
      i$$57 = i$$57 + 1;
      v637 = i$$57 < length$$32;
    }
    return;
  }
  function selectOne(element$$168) {
    var index$$61 = element$$168.selectedIndex;
    var v638;
    if (index$$61 >= 0) {
      v638 = JAM.call(optionValue, null, [element$$168.options[index$$61]], JAM.policy.p1);
    } else {
      v638 = null;
    }
    return v638;
  }
  function selectMany(element$$169) {
    var values$$8;
    var length$$33 = element$$169.length;
    if (!length$$33) {
      return null;
    }
    var i$$58 = 0;
    values$$8 = [];
    var v643 = i$$58 < length$$33;
    for (;v643;) {
      var opt$$1 = element$$169.options[i$$58];
      if (opt$$1.selected) {
        JAM.call(values$$8.push, values$$8, [JAM.call(optionValue, null, [opt$$1], JAM.policy.p1)], JAM.policy.p1);
      }
      i$$58 = i$$58 + 1;
      v643 = i$$58 < length$$33;
    }
    return values$$8;
  }
  function optionValue(opt$$2) {
    var v644;
    if (JAM.call(Element.hasAttribute, Element, [opt$$2, "value"], JAM.policy.p1)) {
      v644 = opt$$2.value;
    } else {
      v644 = opt$$2.text;
    }
    return v644;
  }
  return{input:input$$1, inputSelector:inputSelector, textarea:valueSelector, select:select$$3, selectOne:selectOne, selectMany:selectMany, optionValue:optionValue, button:valueSelector};
}
function v297(element$$163) {
  element$$163 = JAM.call($, null, [element$$163], JAM.policy.p1);
  element$$163.disabled = false;
  return element$$163;
}
function v296(element$$162) {
  element$$162 = JAM.call($, null, [element$$162], JAM.policy.p1);
  element$$162.disabled = true;
  return element$$162;
}
function v295(element$$161) {
  element$$161 = JAM.call($, null, [element$$161], JAM.policy.p1);
  try {
    JAM.call(element$$161.focus, element$$161, [], JAM.policy.p1);
    var v2218 = element$$161.select;
    if (v2218) {
      var v3811 = element$$161.tagName;
      var v3154 = JAM.call(v3811.toLowerCase, v3811, [], JAM.policy.p1) != "input";
      if (!v3154) {
        v3154 = !JAM.call(/^(?:button|reset|submit)$/i.test, /^(?:button|reset|submit)$/i, [element$$161.type], JAM.policy.p1);
      }
      v2218 = v3154;
    }
    if (v2218) {
      JAM.call(element$$161.select, element$$161, [], JAM.policy.p1);
    }
  } catch (e$$26) {
  }
  return element$$161;
}
function v294(element$$160) {
  return JAM.call($, null, [element$$160], JAM.policy.p1).value != "";
}
function v293(element$$159) {
  JAM.call($, null, [element$$159], JAM.policy.p1).value = "";
  return element$$159;
}
function v292(element$$158, value$$94) {
  element$$158 = JAM.call($, null, [element$$158], JAM.policy.p1);
  var v648 = element$$158.tagName;
  var method$$9 = JAM.call(v648.toLowerCase, v648, [], JAM.policy.p1);
  var v649 = Form.Element.Serializers;
  JAM.call(v649[method$$9], v649, [element$$158, value$$94], JAM.policy.p1);
  return element$$158;
}
function v291(element$$157) {
  element$$157 = JAM.call($, null, [element$$157], JAM.policy.p1);
  var v650 = element$$157.tagName;
  var method$$8 = JAM.call(v650.toLowerCase, v650, [], JAM.policy.p1);
  var v651 = Form.Element.Serializers;
  return JAM.call(v651[method$$8], v651, [element$$157], JAM.policy.p1);
}
function v290(element$$156) {
  element$$156 = JAM.call($, null, [element$$156], JAM.policy.p1);
  var v2222 = !element$$156.disabled;
  if (v2222) {
    v2222 = element$$156.name;
  }
  if (v2222) {
    var value$$93 = JAM.call(element$$156.getValue, element$$156, [], JAM.policy.p1);
    if (value$$93 != undefined) {
      var pair$$7 = {};
      JAM.set(pair$$7, element$$156.name, value$$93, JAM.policy.p2);
      return JAM.call(Object.toQueryString, Object, [pair$$7], JAM.policy.p1);
    }
  }
  return "";
}
function v289(element$$155) {
  var v655 = JAM.call($, null, [element$$155], JAM.policy.p1);
  JAM.call(v655.select, v655, [], JAM.policy.p1);
  return element$$155;
}
function v288(element$$154) {
  var v656 = JAM.call($, null, [element$$154], JAM.policy.p1);
  JAM.call(v656.focus, v656, [], JAM.policy.p1);
  return element$$154;
}
function v287(form$$10, options$$10) {
  form$$10 = JAM.call($, null, [form$$10], JAM.policy.p1);
  options$$10 = JAM.call(Object.clone, Object, [options$$10 || {}], JAM.policy.p1);
  var params$$1 = options$$10.parameters;
  var v657 = JAM.call(form$$10.readAttribute, form$$10, ["action"], JAM.policy.p1);
  if (!v657) {
    v657 = "";
  }
  var action = v657;
  if (JAM.call(action.blank, action, [], JAM.policy.p1)) {
    action = window.location.href;
  }
  var v660 = options$$10;
  var v3982 = JAM.call(form$$10.serialize, form$$10, [true], JAM.policy.p1);
  v660.parameters = v3982;
  if (params$$1) {
    if (JAM.call(Object.isString, Object, [params$$1], JAM.policy.p1)) {
      params$$1 = JAM.call(params$$1.toQueryParams, params$$1, [], JAM.policy.p1);
    }
    JAM.call(Object.extend, Object, [options$$10.parameters, params$$1], JAM.policy.p1);
  }
  var v2225 = JAM.call(form$$10.hasAttribute, form$$10, ["method"], JAM.policy.p1);
  if (v2225) {
    v2225 = !options$$10.method;
  }
  if (v2225) {
    options$$10.method = form$$10.method;
  }
  return JAM.new(Ajax.Request, [action, options$$10], JAM.policy.p1);
}
function v286(form$$9) {
  form$$9 = JAM.call($, null, [form$$9], JAM.policy.p1);
  var element$$153 = JAM.call(form$$9.findFirstElement, form$$9, [], JAM.policy.p1);
  if (element$$153) {
    JAM.call(element$$153.activate, element$$153, [], JAM.policy.p1);
  }
  return form$$9;
}
function v285(form$$8) {
  function v284(element$$152) {
    return JAM.call(/^(?:input|select|textarea)$/i.test, /^(?:input|select|textarea)$/i, [element$$152.tagName], JAM.policy.p1);
  }
  function v283(element$$151) {
    return element$$151.tabIndex;
  }
  function v282(element$$150) {
    var v666 = JAM.call(element$$150.hasAttribute, element$$150, ["tabIndex"], JAM.policy.p1);
    if (v666) {
      v666 = element$$150.tabIndex >= 0;
    }
    return v666;
  }
  function v281(element$$149) {
    var v667 = "hidden" != element$$149.type;
    if (v667) {
      v667 = !element$$149.disabled;
    }
    return v667;
  }
  var v2229 = JAM.call($, null, [form$$8], JAM.policy.p1);
  var v668 = JAM.call(v2229.getElements, v2229, [], JAM.policy.p1);
  var elements$$8 = JAM.call(v668.findAll, v668, [v281], JAM.policy.p1);
  var v2230 = JAM.call(elements$$8.findAll, elements$$8, [v282], JAM.policy.p1);
  var v669 = JAM.call(v2230.sortBy, v2230, [v283], JAM.policy.p1);
  var firstByIndex = JAM.call(v669.first, v669, [], JAM.policy.p1);
  var v670;
  if (firstByIndex) {
    v670 = firstByIndex;
  } else {
    v670 = JAM.call(elements$$8.find, elements$$8, [v284], JAM.policy.p1);
  }
  return v670;
}
function v280(form$$7) {
  form$$7 = JAM.call($, null, [form$$7], JAM.policy.p1);
  var v671 = JAM.call(Form.getElements, Form, [form$$7], JAM.policy.p1);
  JAM.call(v671.invoke, v671, ["enable"], JAM.policy.p1);
  return form$$7;
}
function v279(form$$6) {
  form$$6 = JAM.call($, null, [form$$6], JAM.policy.p1);
  var v672 = JAM.call(Form.getElements, Form, [form$$6], JAM.policy.p1);
  JAM.call(v672.invoke, v672, ["disable"], JAM.policy.p1);
  return form$$6;
}
function v278(form$$5, typeName, name$$44) {
  form$$5 = JAM.call($, null, [form$$5], JAM.policy.p1);
  var inputs = JAM.call(form$$5.getElementsByTagName, form$$5, ["input"], JAM.policy.p1);
  var v2231 = !typeName;
  if (v2231) {
    v2231 = !name$$44;
  }
  if (v2231) {
    var v673 = JAM.call($A, null, [inputs], JAM.policy.p1);
    return JAM.call(v673.map, v673, [Element.extend], JAM.policy.p1);
  }
  var i$$56 = 0;
  var matchingInputs = [];
  var length$$31 = inputs.length;
  var v678 = i$$56 < length$$31;
  for (;v678;) {
    var input = inputs[i$$56];
    var v3157 = typeName;
    if (v3157) {
      v3157 = input.type != typeName;
    }
    var v2232 = v3157;
    if (!v2232) {
      var v3158 = name$$44;
      if (v3158) {
        v3158 = input.name != name$$44;
      }
      v2232 = v3158;
    }
    if (v2232) {
      i$$56 = i$$56 + 1;
      v678 = i$$56 < length$$31;
      continue;
    }
    JAM.call(matchingInputs.push, matchingInputs, [JAM.call(Element.extend, Element, [input], JAM.policy.p1)], JAM.policy.p1);
    i$$56 = i$$56 + 1;
    v678 = i$$56 < length$$31;
  }
  return matchingInputs;
}
function v277(form$$4) {
  var v679 = JAM.call($, null, [form$$4], JAM.policy.p1);
  var elements$$7 = JAM.call(v679.getElementsByTagName, v679, ["*"], JAM.policy.p1);
  var element$$148;
  var results$$19 = [];
  var serializers = Form.Element.Serializers;
  var i$$55 = 0;
  var v683 = element$$148 = elements$$7[i$$55];
  for (;v683;) {
    var v2233 = serializers;
    var v3160 = element$$148.tagName;
    if (v2233[JAM.call(v3160.toLowerCase, v3160, [], JAM.policy.p1)]) {
      JAM.call(results$$19.push, results$$19, [JAM.call(Element.extend, Element, [element$$148], JAM.policy.p1)], JAM.policy.p1);
    }
    i$$55 = i$$55 + 1;
    v683 = element$$148 = elements$$7[i$$55];
  }
  return results$$19;
}
function v276(form$$3, options$$9) {
  return JAM.call(Form.serializeElements, Form, [JAM.call(Form.getElements, Form, [form$$3], JAM.policy.p1), options$$9], JAM.policy.p1);
}
function v275(elements$$6, options$$8) {
  function v274(result$$15, element$$147) {
    var v2235 = !element$$147.disabled;
    if (v2235) {
      v2235 = element$$147.name;
    }
    if (v2235) {
      key$$27 = element$$147.name;
      var v685 = JAM.call($, null, [element$$147], JAM.policy.p1);
      value$$90 = JAM.call(v685.getValue, v685, [], JAM.policy.p1);
      var v3162 = value$$90 != null;
      if (v3162) {
        v3162 = element$$147.type != "file";
      }
      var v2236 = v3162;
      if (v2236) {
        var v3163 = element$$147.type != "submit";
        if (!v3163) {
          var v3883 = !submitted;
          if (v3883) {
            v3883 = submit !== false;
          }
          var v3813 = v3883;
          if (v3813) {
            var v3884 = !submit;
            if (!v3884) {
              v3884 = key$$27 == submit;
            }
            v3813 = v3884;
          }
          var v3631 = v3813;
          if (v3631) {
            v3631 = submitted = true;
          }
          v3163 = v3631;
        }
        v2236 = v3163;
      }
      if (v2236) {
        result$$15 = JAM.call(accumulator, null, [result$$15, key$$27, value$$90], JAM.policy.p1);
      }
    }
    return result$$15;
  }
  function v273(result$$14, key$$29, value$$92) {
    value$$92 = JAM.call(value$$92.gsub, value$$92, [/(\r)?\n/, "\r\n"], JAM.policy.p1);
    value$$92 = JAM.call(encodeURIComponent, null, [value$$92], JAM.policy.p1);
    value$$92 = JAM.call(value$$92.gsub, value$$92, [/%20/, "+"], JAM.policy.p1);
    var v3814;
    if (result$$14) {
      v3814 = "&";
    } else {
      v3814 = "";
    }
    return result$$14 + v3814 + JAM.call(encodeURIComponent, null, [key$$29], JAM.policy.p1) + "=" + value$$92;
  }
  function v272(result$$13, key$$28, value$$91) {
    if (key$$28 in result$$13) {
      if (!JAM.call(Object.isArray, Object, [result$$13[key$$28]], JAM.policy.p1)) {
        JAM.set(result$$13, key$$28, [result$$13[key$$28]], JAM.policy.p2);
      }
      var v691 = result$$13[key$$28];
      JAM.call(v691.push, v691, [value$$91], JAM.policy.p1);
    } else {
      JAM.set(result$$13, key$$28, value$$91, JAM.policy.p2);
    }
    return result$$13;
  }
  if (typeof options$$8 != "object") {
    options$$8 = {hash:!!options$$8};
  } else {
    if (JAM.call(Object.isUndefined, Object, [options$$8.hash], JAM.policy.p1)) {
      options$$8.hash = true;
    }
  }
  var key$$27;
  var value$$90;
  var submitted = false;
  var submit = options$$8.submit;
  var accumulator;
  var initial;
  if (options$$8.hash) {
    initial = {};
    accumulator = v272;
  } else {
    initial = "";
    accumulator = v273;
  }
  return JAM.call(elements$$6.inject, elements$$6, [initial, v274], JAM.policy.p1);
}
function v271(form$$2) {
  form$$2 = JAM.call($, null, [form$$2], JAM.policy.p1);
  JAM.call(form$$2.reset, form$$2, [], JAM.policy.p1);
  return form$$2;
}
function v270(engine) {
  function select$$2(selector$$3, scope) {
    return JAM.call(extendElements$$1, null, [JAM.call(engine, null, [selector$$3, scope || document], JAM.policy.p1)], JAM.policy.p1);
  }
  function match$$46(element$$146, selector$$4) {
    return JAM.call(engine.matches, engine, [selector$$4, [element$$146]], JAM.policy.p1).length == 1;
  }
  var extendElements$$1 = Prototype.Selector.extendElements;
  Prototype.Selector.engine = engine;
  Prototype.Selector.select = select$$2;
  Prototype.Selector.match = match$$46;
  return;
}
function v269() {
  function v268(elem$$46) {
    var v2244;
    if (elem$$46) {
      var v3168 = elem$$46.ownerDocument;
      if (!v3168) {
        v3168 = elem$$46;
      }
      v2244 = v3168;
    } else {
      v2244 = 0;
    }
    var documentElement = v2244.documentElement;
    var v704;
    if (documentElement) {
      v704 = documentElement.nodeName !== "HTML";
    } else {
      v704 = false;
    }
    return v704;
  }
  function v267() {
    return false;
  }
  function v266(a$$11, b$$5) {
    return!!(JAM.call(a$$11.compareDocumentPosition, a$$11, [b$$5], JAM.policy.p1) & 16);
  }
  function v265(a$$10, b$$4) {
    var v706 = a$$10 !== b$$4;
    if (v706) {
      var v2247;
      if (a$$10.contains) {
        v2247 = JAM.call(a$$10.contains, a$$10, [b$$4], JAM.policy.p1);
      } else {
        v2247 = true;
      }
      v706 = v2247;
    }
    return v706;
  }
  function v264() {
    function v263(match$$44, context$$37, isXML$$9) {
      var v2248 = typeof context$$37.getElementsByClassName !== "undefined";
      if (v2248) {
        v2248 = !isXML$$9;
      }
      if (v2248) {
        return JAM.call(context$$37.getElementsByClassName, context$$37, [match$$44[1]], JAM.policy.p1);
      }
      return;
    }
    var div$$4 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
    JAM.set(div$$4, "innerHTML", "<div class='test e'></div><div class='test'></div>");
    var v2249 = !div$$4.getElementsByClassName;
    if (!v2249) {
      v2249 = JAM.call(div$$4.getElementsByClassName, div$$4, ["e"], JAM.policy.p1).length === 0;
    }
    if (v2249) {
      return;
    }
    div$$4.lastChild.className = "e";
    if (JAM.call(div$$4.getElementsByClassName, div$$4, ["e"], JAM.policy.p1).length === 1) {
      return;
    }
    var v712 = Expr.order;
    JAM.call(v712.splice, v712, [1, 0, "CLASS"], JAM.policy.p1);
    Expr.find.CLASS = v263;
    div$$4 = null;
    return;
  }
  function v262() {
    function v261(node$$18, expr$$8) {
      expr$$8 = JAM.call(expr$$8.replace, expr$$8, [/\=\s*([^'"\]]*)\s*\]/g, "='$1']"], JAM.policy.p1);
      if (!JAM.call(Sizzle$$1.isXML, Sizzle$$1, [node$$18], JAM.policy.p1)) {
        try {
          var v2252 = pseudoWorks;
          if (!v2252) {
            var v3815 = Expr.match.PSEUDO;
            var v3176 = !JAM.call(v3815.test, v3815, [expr$$8], JAM.policy.p1);
            if (v3176) {
              v3176 = !JAM.call(/!=/.test, /!=/, [expr$$8], JAM.policy.p1);
            }
            v2252 = v3176;
          }
          if (v2252) {
            var ret$$6 = JAM.call(matches.call, matches, [node$$18, expr$$8], JAM.policy.p1);
            var v3178 = ret$$6;
            if (!v3178) {
              v3178 = !disconnectedMatch;
            }
            var v2253 = v3178;
            if (!v2253) {
              var v3179 = node$$18.document;
              if (v3179) {
                v3179 = node$$18.document.nodeType !== 11;
              }
              v2253 = v3179;
            }
            if (v2253) {
              return ret$$6;
            }
          }
        } catch (e$$25) {
        }
      }
      return JAM.call(Sizzle$$1, null, [expr$$8, null, null, [node$$18]], JAM.policy.p1).length > 0;
    }
    var html$$1 = document.documentElement;
    var v3182 = html$$1.matchesSelector;
    if (!v3182) {
      v3182 = html$$1.mozMatchesSelector;
    }
    var v2255 = v3182;
    if (!v2255) {
      v2255 = html$$1.webkitMatchesSelector;
    }
    var v718 = v2255;
    if (!v718) {
      v718 = html$$1.msMatchesSelector;
    }
    var matches = v718;
    if (matches) {
      var disconnectedMatch = !JAM.call(matches.call, matches, [JAM.call(document.createElement, document, ["div"], JAM.policy.p1), "div"], JAM.policy.p1);
      var pseudoWorks = false;
      try {
        JAM.call(matches.call, matches, [document.documentElement, "[test!='']:sizzle"], JAM.policy.p1);
      } catch (pseudoError$$1) {
        pseudoWorks = true;
      }
      Sizzle$$1.matchesSelector = v261;
    }
    return;
  }
  function v260() {
    function v259(query$$2, context$$36, extra$$1, seed$$1) {
      context$$36 = context$$36 || document;
      var v2258 = !seed$$1;
      if (v2258) {
        v2258 = !JAM.call(Sizzle$$1.isXML, Sizzle$$1, [context$$36], JAM.policy.p1);
      }
      if (v2258) {
        var match$$43 = JAM.call(/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec, /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/, [query$$2], JAM.policy.p1);
        var v2259 = match$$43;
        if (v2259) {
          var v3185 = context$$36.nodeType === 1;
          if (!v3185) {
            v3185 = context$$36.nodeType === 9;
          }
          v2259 = v3185;
        }
        if (v2259) {
          if (match$$43[1]) {
            return JAM.call(makeArray, null, [JAM.call(context$$36.getElementsByTagName, context$$36, [query$$2], JAM.policy.p1), extra$$1], JAM.policy.p1);
          } else {
            var v3186 = match$$43[2];
            if (v3186) {
              v3186 = Expr.find.CLASS;
            }
            var v2260 = v3186;
            if (v2260) {
              v2260 = context$$36.getElementsByClassName;
            }
            if (v2260) {
              return JAM.call(makeArray, null, [JAM.call(context$$36.getElementsByClassName, context$$36, [match$$43[2]], JAM.policy.p1), extra$$1], JAM.policy.p1);
            }
          }
        }
        if (context$$36.nodeType === 9) {
          var v2263 = query$$2 === "body";
          if (v2263) {
            v2263 = context$$36.body;
          }
          if (v2263) {
            return JAM.call(makeArray, null, [[context$$36.body], extra$$1], JAM.policy.p1);
          } else {
            var v2265 = match$$43;
            if (v2265) {
              v2265 = match$$43[3];
            }
            if (v2265) {
              var elem$$45 = JAM.call(context$$36.getElementById, context$$36, [match$$43[3]], JAM.policy.p1);
              var v2266 = elem$$45;
              if (v2266) {
                v2266 = elem$$45.parentNode;
              }
              if (v2266) {
                if (elem$$45.id === match$$43[3]) {
                  return JAM.call(makeArray, null, [[elem$$45], extra$$1], JAM.policy.p1);
                }
              } else {
                return JAM.call(makeArray, null, [[], extra$$1], JAM.policy.p1);
              }
            }
          }
          try {
            return JAM.call(makeArray, null, [JAM.call(context$$36.querySelectorAll, context$$36, [query$$2], JAM.policy.p1), extra$$1], JAM.policy.p1);
          } catch (qsaError) {
          }
        } else {
          var v2269 = context$$36.nodeType === 1;
          if (v2269) {
            var v3646 = context$$36.nodeName;
            v2269 = JAM.call(v3646.toLowerCase, v3646, [], JAM.policy.p1) !== "object";
          }
          if (v2269) {
            var oldContext = context$$36;
            var old$$1 = JAM.call(context$$36.getAttribute, context$$36, ["id"], JAM.policy.p1);
            var nid = old$$1 || id$$3;
            var hasParent = context$$36.parentNode;
            var relativeHierarchySelector = JAM.call(/^\s*[+~]/.test, /^\s*[+~]/, [query$$2], JAM.policy.p1);
            if (!old$$1) {
              JAM.call(context$$36.setAttribute, context$$36, ["id", nid], JAM.policy.p1);
            } else {
              nid = JAM.call(nid.replace, nid, [/'/g, "\\$&"], JAM.policy.p1);
            }
            if (relativeHierarchySelector && hasParent) {
              context$$36 = context$$36.parentNode;
            }
            try {
              var v2270 = !relativeHierarchySelector;
              if (!v2270) {
                v2270 = hasParent;
              }
              if (v2270) {
                return JAM.call(makeArray, null, [JAM.call(context$$36.querySelectorAll, context$$36, ["[id='" + nid + "'] " + query$$2], JAM.policy.p1), extra$$1], JAM.policy.p1);
              }
            } catch (pseudoError) {
            } finally {
              if (!old$$1) {
                JAM.call(oldContext.removeAttribute, oldContext, ["id"], JAM.policy.p1);
              }
            }
          }
        }
      }
      return JAM.call(oldSizzle, null, [query$$2, context$$36, extra$$1, seed$$1], JAM.policy.p1);
    }
    var oldSizzle = Sizzle$$1;
    var div$$3 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
    var id$$3 = "__sizzle__";
    JAM.set(div$$3, "innerHTML", "<p class='TEST'></p>");
    var v2272 = div$$3.querySelectorAll;
    if (v2272) {
      v2272 = JAM.call(div$$3.querySelectorAll, div$$3, [".TEST"], JAM.policy.p1).length === 0;
    }
    if (v2272) {
      return;
    }
    Sizzle$$1 = v259;
    var prop$$4;
    for (prop$$4 in oldSizzle) {
      JAM.set(Sizzle$$1, prop$$4, oldSizzle[prop$$4], JAM.policy.p2);
    }
    div$$3 = null;
    return;
  }
  function v258() {
    function v257(elem$$44) {
      return JAM.call(elem$$44.getAttribute, elem$$44, ["href", 2], JAM.policy.p1);
    }
    function v256(match$$42, context$$35) {
      var results$$18 = JAM.call(context$$35.getElementsByTagName, context$$35, [match$$42[1]], JAM.policy.p1);
      if (match$$42[1] === "*") {
        var tmp = [];
        var i$$53 = 0;
        var v746 = results$$18[i$$53];
        for (;v746;) {
          if (results$$18[i$$53].nodeType === 1) {
            JAM.call(tmp.push, tmp, [results$$18[i$$53]], JAM.policy.p1);
          }
          i$$53 = i$$53 + 1;
          v746 = results$$18[i$$53];
        }
        results$$18 = tmp;
      }
      return results$$18;
    }
    var div$$2 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
    JAM.call(div$$2.appendChild, div$$2, [JAM.call(document.createComment, document, [""], JAM.policy.p1)], JAM.policy.p1);
    if (JAM.call(div$$2.getElementsByTagName, div$$2, ["*"], JAM.policy.p1).length > 0) {
      Expr.find.TAG = v256;
    }
    JAM.set(div$$2, "innerHTML", "<a href='#'></a>");
    var v3194 = div$$2.firstChild;
    if (v3194) {
      v3194 = typeof div$$2.firstChild.getAttribute !== "undefined";
    }
    var v2276 = v3194;
    if (v2276) {
      var v3650 = div$$2.firstChild;
      v2276 = JAM.call(v3650.getAttribute, v3650, ["href"], JAM.policy.p1) !== "#";
    }
    if (v2276) {
      Expr.attrHandle.href = v257;
    }
    div$$2 = null;
    return;
  }
  function v255() {
    function v254(elem$$43, match$$41) {
      var v753 = typeof elem$$43.getAttributeNode !== "undefined";
      if (v753) {
        v753 = JAM.call(elem$$43.getAttributeNode, elem$$43, ["id"], JAM.policy.p1);
      }
      var node$$17 = v753;
      var v2278 = elem$$43.nodeType === 1;
      if (v2278) {
        v2278 = node$$17;
      }
      var v754 = v2278;
      if (v754) {
        v754 = node$$17.nodeValue === match$$41;
      }
      return v754;
    }
    function v253(match$$40, context$$34, isXML$$8) {
      var v2280 = typeof context$$34.getElementById !== "undefined";
      if (v2280) {
        v2280 = !isXML$$8;
      }
      if (v2280) {
        var m$$4 = JAM.call(context$$34.getElementById, context$$34, [match$$40[1]], JAM.policy.p1);
        var v756;
        if (m$$4) {
          var v2281;
          var v3652 = m$$4.id === match$$40[1];
          if (!v3652) {
            var v3820 = typeof m$$4.getAttributeNode !== "undefined";
            if (v3820) {
              v3820 = JAM.call(m$$4.getAttributeNode, m$$4, ["id"], JAM.policy.p1).nodeValue === match$$40[1];
            }
            v3652 = v3820;
          }
          if (v3652) {
            v2281 = [m$$4];
          } else {
            v2281 = undefined;
          }
          v756 = v2281;
        } else {
          v756 = [];
        }
        return v756;
      }
      return;
    }
    var form$$1 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
    var v2282 = JAM.new(Date, [], JAM.policy.p1);
    var id$$2 = "script" + JAM.call(v2282.getTime, v2282, [], JAM.policy.p1);
    var root = document.documentElement;
    JAM.set(form$$1, "innerHTML", "<a name='" + id$$2 + "'/>");
    JAM.call(root.insertBefore, root, [form$$1, root.firstChild], JAM.policy.p1);
    if (JAM.call(document.getElementById, document, [id$$2], JAM.policy.p1)) {
      Expr.find.ID = v253;
      Expr.filter.ID = v254;
    }
    JAM.call(root.removeChild, root, [form$$1], JAM.policy.p1);
    root = form$$1 = null;
    return;
  }
  function v252(elems) {
    var ret$$5 = "";
    var elem$$42;
    var i$$52 = 0;
    var v766 = elems[i$$52];
    for (;v766;) {
      elem$$42 = elems[i$$52];
      var v2283 = elem$$42.nodeType === 3;
      if (!v2283) {
        v2283 = elem$$42.nodeType === 4;
      }
      if (v2283) {
        ret$$5 = ret$$5 + elem$$42.nodeValue;
      } else {
        if (elem$$42.nodeType !== 8) {
          ret$$5 = ret$$5 + JAM.call(Sizzle$$1.getText, Sizzle$$1, [elem$$42.childNodes], JAM.policy.p1);
        }
      }
      i$$52 = i$$52 + 1;
      v766 = elems[i$$52];
    }
    return ret$$5;
  }
  function v251(a$$9, b$$3, ret$$4) {
    if (a$$9 === b$$3) {
      return ret$$4;
    }
    var cur$$4 = a$$9.nextSibling;
    for (;cur$$4;) {
      if (cur$$4 === b$$3) {
        return-1;
      }
      cur$$4 = cur$$4.nextSibling;
    }
    return 1;
  }
  function v250(a$$8, b$$2) {
    if (a$$8 === b$$2) {
      hasDuplicate = true;
      return 0;
    } else {
      var v2288 = a$$8.sourceIndex;
      if (v2288) {
        v2288 = b$$2.sourceIndex;
      }
      if (v2288) {
        return a$$8.sourceIndex - b$$2.sourceIndex;
      }
    }
    var al;
    var bl$$1;
    var ap = [];
    var bp = [];
    var aup = a$$8.parentNode;
    var bup = b$$2.parentNode;
    var cur$$3 = aup;
    if (aup === bup) {
      return JAM.call(siblingCheck, null, [a$$8, b$$2], JAM.policy.p1);
    } else {
      if (!aup) {
        return-1;
      } else {
        if (!bup) {
          return 1;
        }
      }
    }
    for (;cur$$3;) {
      JAM.call(ap.unshift, ap, [cur$$3], JAM.policy.p1);
      cur$$3 = cur$$3.parentNode;
    }
    cur$$3 = bup;
    for (;cur$$3;) {
      JAM.call(bp.unshift, bp, [cur$$3], JAM.policy.p1);
      cur$$3 = cur$$3.parentNode;
    }
    al = ap.length;
    bl$$1 = bp.length;
    var i$$51 = 0;
    var v2289 = i$$51 < al;
    if (v2289) {
      v2289 = i$$51 < bl$$1;
    }
    var v779 = v2289;
    for (;v779;) {
      if (ap[i$$51] !== bp[i$$51]) {
        return JAM.call(siblingCheck, null, [ap[i$$51], bp[i$$51]], JAM.policy.p1);
      }
      i$$51 = i$$51 + 1;
      var v2292 = i$$51 < al;
      if (v2292) {
        v2292 = i$$51 < bl$$1;
      }
      v779 = v2292;
    }
    var v780;
    if (i$$51 === al) {
      v780 = JAM.call(siblingCheck, null, [a$$8, bp[i$$51], -1], JAM.policy.p1);
    } else {
      v780 = JAM.call(siblingCheck, null, [ap[i$$51], b$$2, 1], JAM.policy.p1);
    }
    return v780;
  }
  function v249(a$$7, b$$1) {
    if (a$$7 === b$$1) {
      hasDuplicate = true;
      return 0;
    }
    var v2296 = !a$$7.compareDocumentPosition;
    if (!v2296) {
      v2296 = !b$$1.compareDocumentPosition;
    }
    if (v2296) {
      var v782;
      if (a$$7.compareDocumentPosition) {
        v782 = -1;
      } else {
        v782 = 1;
      }
      return v782;
    }
    var v784;
    if (JAM.call(a$$7.compareDocumentPosition, a$$7, [b$$1], JAM.policy.p1) & 4) {
      v784 = -1;
    } else {
      v784 = 1;
    }
    return v784;
  }
  function v248(array$$22, results$$17) {
    var i$$50 = 0;
    var ret$$3 = results$$17 || [];
    if (JAM.call(toString.call, toString, [array$$22], JAM.policy.p1) === "[object Array]") {
      var v785 = Array.prototype.push;
      JAM.call(v785.apply, v785, [ret$$3, array$$22], JAM.policy.p1);
    } else {
      if (typeof array$$22.length === "number") {
        var l$$7 = array$$22.length;
        var v787 = i$$50 < l$$7;
        for (;v787;) {
          JAM.call(ret$$3.push, ret$$3, [array$$22[i$$50]], JAM.policy.p1);
          i$$50 = i$$50 + 1;
          v787 = i$$50 < l$$7;
        }
      } else {
        var v789 = array$$22[i$$50];
        for (;v789;) {
          JAM.call(ret$$3.push, ret$$3, [array$$22[i$$50]], JAM.policy.p1);
          i$$50 = i$$50 + 1;
          v789 = array$$22[i$$50];
        }
      }
    }
    return ret$$3;
  }
  function v247(elem$$41, match$$39, i$$49, array$$20) {
    var name$$43 = match$$39[2];
    var filter$$8 = Expr.setFilters[name$$43];
    if (filter$$8) {
      return JAM.call(filter$$8, null, [elem$$41, i$$49, match$$39, array$$20], JAM.policy.p1);
    }
    return;
  }
  function v246(elem$$40, match$$38) {
    var name$$42 = match$$38[1];
    var v793;
    if (Expr.attrHandle[name$$42]) {
      var v2302 = Expr.attrHandle;
      v793 = JAM.call(v2302[name$$42], v2302, [elem$$40], JAM.policy.p1);
    } else {
      var v2303;
      if (elem$$40[name$$42] != null) {
        v2303 = elem$$40[name$$42];
      } else {
        v2303 = JAM.call(elem$$40.getAttribute, elem$$40, [name$$42], JAM.policy.p1);
      }
      v793 = v2303;
    }
    var result$$12 = v793;
    var value$$89 = result$$12 + "";
    var type$$32 = match$$38[2];
    var check = match$$38[4];
    var v794;
    if (result$$12 == null) {
      v794 = type$$32 === "!=";
    } else {
      var v2305;
      if (type$$32 === "=") {
        v2305 = value$$89 === check;
      } else {
        var v3211;
        if (type$$32 === "*=") {
          v3211 = JAM.call(value$$89.indexOf, value$$89, [check], JAM.policy.p1) >= 0;
        } else {
          var v3655;
          if (type$$32 === "~=") {
            var v3890 = " " + value$$89 + " ";
            v3655 = JAM.call(v3890.indexOf, v3890, [check], JAM.policy.p1) >= 0;
          } else {
            var v3823;
            if (!check) {
              var v3891 = value$$89;
              if (v3891) {
                v3891 = result$$12 !== false;
              }
              v3823 = v3891;
            } else {
              var v3892;
              if (type$$32 === "!=") {
                v3892 = value$$89 !== check;
              } else {
                var v3926;
                if (type$$32 === "^=") {
                  v3926 = JAM.call(value$$89.indexOf, value$$89, [check], JAM.policy.p1) === 0;
                } else {
                  var v3938;
                  if (type$$32 === "$=") {
                    v3938 = JAM.call(value$$89.substr, value$$89, [value$$89.length - check.length], JAM.policy.p1) === check;
                  } else {
                    var v3948;
                    if (type$$32 === "|=") {
                      var v3953 = value$$89 === check;
                      if (!v3953) {
                        v3953 = JAM.call(value$$89.substr, value$$89, [0, check.length + 1], JAM.policy.p1) === check + "-";
                      }
                      v3948 = v3953;
                    } else {
                      v3948 = false;
                    }
                    v3938 = v3948;
                  }
                  v3926 = v3938;
                }
                v3892 = v3926;
              }
              v3823 = v3892;
            }
            v3655 = v3823;
          }
          v3211 = v3655;
        }
        v2305 = v3211;
      }
      v794 = v2305;
    }
    return v794;
  }
  function v245(elem$$39, match$$37) {
    var v3825 = elem$$39.className;
    if (!v3825) {
      v3825 = JAM.call(elem$$39.getAttribute, elem$$39, ["class"], JAM.policy.p1);
    }
    var v2307 = " " + v3825 + " ";
    return JAM.call(v2307.indexOf, v2307, [match$$37], JAM.policy.p1) > -1;
  }
  function v244(elem$$38, match$$36) {
    var v2308 = match$$36 === "*";
    if (v2308) {
      v2308 = elem$$38.nodeType === 1;
    }
    var v796 = v2308;
    if (!v796) {
      var v3215 = elem$$38.nodeName;
      v796 = JAM.call(v3215.toLowerCase, v3215, [], JAM.policy.p1) === match$$36;
    }
    return v796;
  }
  function v243(elem$$37, match$$35) {
    var v797 = elem$$37.nodeType === 1;
    if (v797) {
      v797 = JAM.call(elem$$37.getAttribute, elem$$37, ["id"], JAM.policy.p1) === match$$35;
    }
    return v797;
  }
  function v242(elem$$36, match$$34) {
    var type$$31 = match$$34[1];
    var node$$16 = elem$$36;
    switch(type$$31) {
      case "only":
      ;
      case "first":
        var v799 = node$$16 = node$$16.previousSibling;
        for (;v799;) {
          if (node$$16.nodeType === 1) {
            return false;
          }
          v799 = node$$16 = node$$16.previousSibling;
        }
        if (type$$31 === "first") {
          return true;
        }
        node$$16 = elem$$36;
      case "last":
        var v802 = node$$16 = node$$16.nextSibling;
        for (;v802;) {
          if (node$$16.nodeType === 1) {
            return false;
          }
          v802 = node$$16 = node$$16.nextSibling;
        }
        return true;
      case "nth":
        var first$$2 = match$$34[2];
        var last$$1 = match$$34[3];
        var v2315 = first$$2 === 1;
        if (v2315) {
          v2315 = last$$1 === 0;
        }
        if (v2315) {
          return true;
        }
        var doneName$$4 = match$$34[0];
        var parent$$9 = elem$$36.parentNode;
        var v2316 = parent$$9;
        if (v2316) {
          var v3216 = parent$$9.sizcache !== doneName$$4;
          if (!v3216) {
            v3216 = !elem$$36.nodeIndex;
          }
          v2316 = v3216;
        }
        if (v2316) {
          var count$$5 = 0;
          node$$16 = parent$$9.firstChild;
          for (;node$$16;) {
            if (node$$16.nodeType === 1) {
              node$$16.nodeIndex = count$$5 = count$$5 + 1;
            }
            node$$16 = node$$16.nextSibling;
          }
          parent$$9.sizcache = doneName$$4;
        }
        var diff = elem$$36.nodeIndex - last$$1;
        if (first$$2 === 0) {
          return diff === 0;
        } else {
          var v807 = diff % first$$2 === 0;
          if (v807) {
            v807 = diff / first$$2 >= 0;
          }
          return v807;
        }
      ;
    }
    return;
  }
  function v241(elem$$35, match$$33, i$$48, array$$19) {
    var name$$41 = match$$33[1];
    var filter$$7 = Expr.filters[name$$41];
    if (filter$$7) {
      return JAM.call(filter$$7, null, [elem$$35, i$$48, match$$33, array$$19], JAM.policy.p1);
    } else {
      if (name$$41 === "contains") {
        var v3826 = elem$$35.textContent;
        if (!v3826) {
          v3826 = elem$$35.innerText;
        }
        var v3661 = v3826;
        if (!v3661) {
          v3661 = JAM.call(Sizzle$$1.getText, Sizzle$$1, [[elem$$35]], JAM.policy.p1);
        }
        var v3217 = v3661;
        if (!v3217) {
          v3217 = "";
        }
        var v2320 = v3217;
        return JAM.call(v2320.indexOf, v2320, [match$$33[3]], JAM.policy.p1) >= 0;
      } else {
        if (name$$41 === "not") {
          var not$$4 = match$$33[3];
          var j$$1 = 0;
          var l$$6 = not$$4.length;
          var v812 = j$$1 < l$$6;
          for (;v812;) {
            if (not$$4[j$$1] === elem$$35) {
              return false;
            }
            j$$1 = j$$1 + 1;
            v812 = j$$1 < l$$6;
          }
          return true;
        } else {
          JAM.call(Sizzle$$1.error, Sizzle$$1, [name$$41], JAM.policy.p1);
        }
      }
    }
    return;
  }
  function v240(elem$$34, i$$47, match$$32) {
    return match$$32[3] - 0 === i$$47;
  }
  function v239(elem$$33, i$$46, match$$31) {
    return match$$31[3] - 0 === i$$46;
  }
  function v238(elem$$32, i$$45, match$$30) {
    return i$$45 > match$$30[3] - 0;
  }
  function v237(elem$$31, i$$44, match$$29) {
    return i$$44 < match$$29[3] - 0;
  }
  function v236(elem$$30, i$$43) {
    return i$$43 % 2 === 1;
  }
  function v235(elem$$29, i$$42) {
    return i$$42 % 2 === 0;
  }
  function v234(elem$$28, i$$41, match$$28, array$$18) {
    return i$$41 === array$$18.length - 1;
  }
  function v233(elem$$27, i$$40) {
    return i$$40 === 0;
  }
  function v232(elem$$26) {
    return elem$$26 === elem$$26.ownerDocument.activeElement;
  }
  function v231(elem$$25) {
    return JAM.call(/input|select|textarea|button/i.test, /input|select|textarea|button/i, [elem$$25.nodeName], JAM.policy.p1);
  }
  function v230(elem$$24) {
    var v824 = elem$$24.nodeName;
    var name$$40 = JAM.call(v824.toLowerCase, v824, [], JAM.policy.p1);
    var v2329 = name$$40 === "input";
    if (v2329) {
      v2329 = "button" === elem$$24.type;
    }
    var v825 = v2329;
    if (!v825) {
      v825 = name$$40 === "button";
    }
    return v825;
  }
  function v229(elem$$23) {
    var v826 = elem$$23.nodeName;
    var name$$39 = JAM.call(v826.toLowerCase, v826, [], JAM.policy.p1);
    var v2331 = name$$39 === "input";
    if (!v2331) {
      v2331 = name$$39 === "button";
    }
    var v827 = v2331;
    if (v827) {
      v827 = "reset" === elem$$23.type;
    }
    return v827;
  }
  function v228(elem$$22) {
    var v3220 = elem$$22.nodeName;
    var v828 = JAM.call(v3220.toLowerCase, v3220, [], JAM.policy.p1) === "input";
    if (v828) {
      v828 = "image" === elem$$22.type;
    }
    return v828;
  }
  function v227(elem$$21) {
    var v829 = elem$$21.nodeName;
    var name$$38 = JAM.call(v829.toLowerCase, v829, [], JAM.policy.p1);
    var v2335 = name$$38 === "input";
    if (!v2335) {
      v2335 = name$$38 === "button";
    }
    var v830 = v2335;
    if (v830) {
      v830 = "submit" === elem$$21.type;
    }
    return v830;
  }
  function v226(elem$$20) {
    var v3222 = elem$$20.nodeName;
    var v831 = JAM.call(v3222.toLowerCase, v3222, [], JAM.policy.p1) === "input";
    if (v831) {
      v831 = "password" === elem$$20.type;
    }
    return v831;
  }
  function v225(elem$$19) {
    var v3223 = elem$$19.nodeName;
    var v832 = JAM.call(v3223.toLowerCase, v3223, [], JAM.policy.p1) === "input";
    if (v832) {
      v832 = "file" === elem$$19.type;
    }
    return v832;
  }
  function v224(elem$$18) {
    var v3224 = elem$$18.nodeName;
    var v833 = JAM.call(v3224.toLowerCase, v3224, [], JAM.policy.p1) === "input";
    if (v833) {
      v833 = "checkbox" === elem$$18.type;
    }
    return v833;
  }
  function v223(elem$$17) {
    var v3225 = elem$$17.nodeName;
    var v834 = JAM.call(v3225.toLowerCase, v3225, [], JAM.policy.p1) === "input";
    if (v834) {
      v834 = "radio" === elem$$17.type;
    }
    return v834;
  }
  function v222(elem$$16) {
    var attr$$2 = JAM.call(elem$$16.getAttribute, elem$$16, ["type"], JAM.policy.p1);
    var type$$30 = elem$$16.type;
    var v3663 = elem$$16.nodeName;
    var v2345 = JAM.call(v3663.toLowerCase, v3663, [], JAM.policy.p1) === "input";
    if (v2345) {
      v2345 = "text" === type$$30;
    }
    var v835 = v2345;
    if (v835) {
      var v2346 = attr$$2 === type$$30;
      if (!v2346) {
        v2346 = attr$$2 === null;
      }
      v835 = v2346;
    }
    return v835;
  }
  function v221(elem$$15) {
    return JAM.call(/h\d/i.test, /h\d/i, [elem$$15.nodeName], JAM.policy.p1);
  }
  function v220(elem$$14, i$$39, match$$27) {
    return!!JAM.call(Sizzle$$1, null, [match$$27[3], elem$$14], JAM.policy.p1).length;
  }
  function v219(elem$$13) {
    return!elem$$13.firstChild;
  }
  function v218(elem$$12) {
    return!!elem$$12.firstChild;
  }
  function v217(elem$$11) {
    return elem$$11.selected === true;
  }
  function v216(elem$$10) {
    return elem$$10.checked === true;
  }
  function v215(elem$$9) {
    return elem$$9.disabled === true;
  }
  function v214(elem$$8) {
    var v843 = elem$$8.disabled === false;
    if (v843) {
      v843 = elem$$8.type !== "hidden";
    }
    return v843;
  }
  function v213(match$$26) {
    JAM.call(match$$26.unshift, match$$26, [true], JAM.policy.p1);
    return match$$26;
  }
  function v212(match$$25, curLoop$$4, inplace$$3, result$$11, not$$3) {
    if (match$$25[1] === "not") {
      var v3829 = JAM.call(chunker.exec, chunker, [match$$25[3]], JAM.policy.p1);
      if (!v3829) {
        v3829 = "";
      }
      var v2352 = v3829.length > 1;
      if (!v2352) {
        v2352 = JAM.call(/^\w/.test, /^\w/, [match$$25[3]], JAM.policy.p1);
      }
      if (v2352) {
        var v844 = match$$25;
        var v3983 = JAM.call(Sizzle$$1, null, [match$$25[3], null, null, curLoop$$4], JAM.policy.p1);
        introspect(JAM.policy.p2) {
          v844[3] = v3983;
        }
      } else {
        var ret$$2 = JAM.call(Sizzle$$1.filter, Sizzle$$1, [match$$25[3], curLoop$$4, inplace$$3, true ^ not$$3], JAM.policy.p1);
        if (!inplace$$3) {
          var v847 = result$$11.push;
          JAM.call(v847.apply, v847, [result$$11, ret$$2], JAM.policy.p1);
        }
        return false;
      }
    } else {
      var v3232 = Expr.match.POS;
      var v2354 = JAM.call(v3232.test, v3232, [match$$25[0]], JAM.policy.p1);
      if (!v2354) {
        var v3234 = Expr.match.CHILD;
        v2354 = JAM.call(v3234.test, v3234, [match$$25[0]], JAM.policy.p1);
      }
      if (v2354) {
        return true;
      }
    }
    return match$$25;
  }
  function v211(match$$24, curLoop$$3, inplace$$2, result$$10, not$$2, isXML$$7) {
    var v852 = match$$24;
    var v2355 = match$$24[1];
    var v3984 = JAM.call(v2355.replace, v2355, [rBackslash, ""], JAM.policy.p1);
    introspect(JAM.policy.p2) {
      var name$$37 = v852[1] = v3984
    }
    var v2356 = !isXML$$7;
    if (v2356) {
      v2356 = Expr.attrMap[name$$37];
    }
    if (v2356) {
      var v853 = Expr.attrMap;
      introspect(JAM.policy.p2) {
        match$$24[1] = v853[name$$37];
      }
    }
    var v855 = match$$24;
    var v3668 = match$$24[4];
    if (!v3668) {
      v3668 = match$$24[5];
    }
    var v3238 = v3668;
    if (!v3238) {
      v3238 = "";
    }
    var v2357 = v3238;
    var v3985 = JAM.call(v2357.replace, v2357, [rBackslash, ""], JAM.policy.p1);
    introspect(JAM.policy.p2) {
      v855[4] = v3985;
    }
    if (match$$24[2] === "~=") {
      var v856 = " " + match$$24[4];
      introspect(JAM.policy.p2) {
        match$$24[4] = v856 + " ";
      }
    }
    return match$$24;
  }
  function v210(match$$23) {
    if (match$$23[1] === "nth") {
      if (!match$$23[2]) {
        JAM.call(Sizzle$$1.error, Sizzle$$1, [match$$23[0]], JAM.policy.p1);
      }
      var v860 = match$$23;
      var v2362 = match$$23[2];
      var v3986 = JAM.call(v2362.replace, v2362, [/^\+|\s*/g, ""], JAM.policy.p1);
      introspect(JAM.policy.p2) {
        v860[2] = v3986;
      }
      var v3831 = match$$23[2] === "even";
      if (v3831) {
        v3831 = "2n";
      }
      var v3670 = v3831;
      if (!v3670) {
        var v3832 = match$$23[2] === "odd";
        if (v3832) {
          v3832 = "2n+1";
        }
        v3670 = v3832;
      }
      var v3239 = v3670;
      if (!v3239) {
        var v3671 = !JAM.call(/\D/.test, /\D/, [match$$23[2]], JAM.policy.p1);
        if (v3671) {
          v3671 = "0n+" + match$$23[2];
        }
        v3239 = v3671;
      }
      var v2363 = v3239;
      if (!v2363) {
        v2363 = match$$23[2];
      }
      var test = JAM.call(/(-?)(\d*)(?:n([+\-]?\d*))?/.exec, /(-?)(\d*)(?:n([+\-]?\d*))?/, [v2363], JAM.policy.p1);
      var v2364 = test[1];
      var v3241 = test[2];
      if (!v3241) {
        v3241 = 1;
      }
      var v862 = v2364 + v3241;
      introspect(JAM.policy.p2) {
        match$$23[2] = v862 - 0;
      }
      var v863 = test[3];
      introspect(JAM.policy.p2) {
        match$$23[3] = v863 - 0;
      }
    } else {
      if (match$$23[2]) {
        JAM.call(Sizzle$$1.error, Sizzle$$1, [match$$23[0]], JAM.policy.p1);
      }
    }
    introspect(JAM.policy.p2) {
      match$$23[0] = done;
    }
    done = done + 1;
    return match$$23;
  }
  function v209(match$$22, curLoop$$2) {
    var v2366 = match$$22[1];
    var v867 = JAM.call(v2366.replace, v2366, [rBackslash, ""], JAM.policy.p1);
    return JAM.call(v867.toLowerCase, v867, [], JAM.policy.p1);
  }
  function v208(match$$21) {
    var v868 = match$$21[1];
    return JAM.call(v868.replace, v868, [rBackslash, ""], JAM.policy.p1);
  }
  function v207(match$$20, curLoop$$1, inplace$$1, result$$9, not$$1, isXML$$6) {
    var v3242 = match$$20[1];
    match$$20 = " " + JAM.call(v3242.replace, v3242, [rBackslash, ""], JAM.policy.p1) + " ";
    if (isXML$$6) {
      return match$$20;
    }
    var i$$38 = 0;
    var elem$$7;
    var v872 = (elem$$7 = curLoop$$1[i$$38]) != null;
    for (;v872;) {
      if (elem$$7) {
        var v2369 = not$$1;
        var v3243 = elem$$7.className;
        if (v3243) {
          var v3901 = " " + elem$$7.className + " ";
          var v3836 = JAM.call(v3901.replace, v3901, [/[\t\n\r]/g, " "], JAM.policy.p1);
          v3243 = JAM.call(v3836.indexOf, v3836, [match$$20], JAM.policy.p1) >= 0;
        }
        if (v2369 ^ v3243) {
          if (!inplace$$1) {
            JAM.call(result$$9.push, result$$9, [elem$$7], JAM.policy.p1);
          }
        } else {
          if (inplace$$1) {
            introspect(JAM.policy.p2) {
              curLoop$$1[i$$38] = false;
            }
          }
        }
      }
      i$$38 = i$$38 + 1;
      v872 = (elem$$7 = curLoop$$1[i$$38]) != null;
    }
    return false;
  }
  function v206(match$$19, context$$33) {
    if (typeof context$$33.getElementsByTagName !== "undefined") {
      return JAM.call(context$$33.getElementsByTagName, context$$33, [match$$19[1]], JAM.policy.p1);
    }
    return;
  }
  function v205(match$$18, context$$32) {
    if (typeof context$$32.getElementsByName !== "undefined") {
      var ret$$1 = [];
      var results$$15 = JAM.call(context$$32.getElementsByName, context$$32, [match$$18[1]], JAM.policy.p1);
      var i$$37 = 0;
      var l$$5 = results$$15.length;
      var v878 = i$$37 < l$$5;
      for (;v878;) {
        var v3246 = results$$15[i$$37];
        if (JAM.call(v3246.getAttribute, v3246, ["name"], JAM.policy.p1) === match$$18[1]) {
          JAM.call(ret$$1.push, ret$$1, [results$$15[i$$37]], JAM.policy.p1);
        }
        i$$37 = i$$37 + 1;
        v878 = i$$37 < l$$5;
      }
      var v879;
      if (ret$$1.length === 0) {
        v879 = null;
      } else {
        v879 = ret$$1;
      }
      return v879;
    }
    return;
  }
  function v204(match$$17, context$$31, isXML$$5) {
    var v2377 = typeof context$$31.getElementById !== "undefined";
    if (v2377) {
      v2377 = !isXML$$5;
    }
    if (v2377) {
      var m$$3 = JAM.call(context$$31.getElementById, context$$31, [match$$17[1]], JAM.policy.p1);
      var v882;
      var v3249 = m$$3;
      if (v3249) {
        v3249 = m$$3.parentNode;
      }
      if (v3249) {
        v882 = [m$$3];
      } else {
        v882 = [];
      }
      return v882;
    }
    return;
  }
  function v203(checkSet$$6, part$$3, isXML$$4) {
    var nodeCheck$$3;
    var doneName$$3 = done;
    done = done + 1;
    var checkFn$$1 = dirCheck;
    var v2379 = typeof part$$3 === "string";
    if (v2379) {
      v2379 = !JAM.call(rNonWord.test, rNonWord, [part$$3], JAM.policy.p1);
    }
    if (v2379) {
      part$$3 = JAM.call(part$$3.toLowerCase, part$$3, [], JAM.policy.p1);
      nodeCheck$$3 = part$$3;
      checkFn$$1 = dirNodeCheck;
    }
    JAM.call(checkFn$$1, null, ["previousSibling", part$$3, doneName$$3, checkSet$$6, nodeCheck$$3, isXML$$4], JAM.policy.p1);
    return;
  }
  function v202(checkSet$$5, part$$2, isXML$$3) {
    var nodeCheck$$2;
    var doneName$$2 = done;
    done = done + 1;
    var checkFn = dirCheck;
    var v2380 = typeof part$$2 === "string";
    if (v2380) {
      v2380 = !JAM.call(rNonWord.test, rNonWord, [part$$2], JAM.policy.p1);
    }
    if (v2380) {
      part$$2 = JAM.call(part$$2.toLowerCase, part$$2, [], JAM.policy.p1);
      nodeCheck$$2 = part$$2;
      checkFn = dirNodeCheck;
    }
    JAM.call(checkFn, null, ["parentNode", part$$2, doneName$$2, checkSet$$5, nodeCheck$$2, isXML$$3], JAM.policy.p1);
    return;
  }
  function v201(checkSet$$4, part$$1) {
    var elem$$6;
    var isPartStr$$1 = typeof part$$1 === "string";
    var i$$36 = 0;
    var l$$4 = checkSet$$4.length;
    var v2381 = isPartStr$$1;
    if (v2381) {
      v2381 = !JAM.call(rNonWord.test, rNonWord, [part$$1], JAM.policy.p1);
    }
    if (v2381) {
      part$$1 = JAM.call(part$$1.toLowerCase, part$$1, [], JAM.policy.p1);
      var v889 = i$$36 < l$$4;
      for (;v889;) {
        elem$$6 = checkSet$$4[i$$36];
        if (elem$$6) {
          var parent$$8 = elem$$6.parentNode;
          var v887 = checkSet$$4;
          var v888 = i$$36;
          var v2382;
          var v3837 = parent$$8.nodeName;
          if (JAM.call(v3837.toLowerCase, v3837, [], JAM.policy.p1) === part$$1) {
            v2382 = parent$$8;
          } else {
            v2382 = false;
          }
          introspect(JAM.policy.p2) {
            v887[v888] = v2382;
          }
        }
        i$$36 = i$$36 + 1;
        v889 = i$$36 < l$$4;
      }
    } else {
      var v891 = i$$36 < l$$4;
      for (;v891;) {
        elem$$6 = checkSet$$4[i$$36];
        if (elem$$6) {
          var v890;
          if (isPartStr$$1) {
            v890 = elem$$6.parentNode;
          } else {
            v890 = elem$$6.parentNode === part$$1;
          }
          introspect(JAM.policy.p2) {
            checkSet$$4[i$$36] = v890;
          }
        }
        i$$36 = i$$36 + 1;
        v891 = i$$36 < l$$4;
      }
      if (isPartStr$$1) {
        JAM.call(Sizzle$$1.filter, Sizzle$$1, [part$$1, checkSet$$4, true], JAM.policy.p1);
      }
    }
    return;
  }
  function v200(checkSet$$3, part) {
    var isPartStr = typeof part === "string";
    var v894 = isPartStr;
    if (v894) {
      v894 = !JAM.call(rNonWord.test, rNonWord, [part], JAM.policy.p1);
    }
    var isTag = v894;
    var v895 = isPartStr;
    if (v895) {
      v895 = !isTag;
    }
    var isPartStrNotTag = v895;
    if (isTag) {
      part = JAM.call(part.toLowerCase, part, [], JAM.policy.p1);
    }
    var i$$35 = 0;
    var l$$3 = checkSet$$3.length;
    var elem$$5;
    var v900 = i$$35 < l$$3;
    for (;v900;) {
      if (elem$$5 = checkSet$$3[i$$35]) {
        var v2385 = elem$$5 = elem$$5.previousSibling;
        if (v2385) {
          v2385 = elem$$5.nodeType !== 1;
        }
        var v896 = v2385;
        for (;v896;) {
          var v2386 = elem$$5 = elem$$5.previousSibling;
          if (v2386) {
            v2386 = elem$$5.nodeType !== 1;
          }
          v896 = v2386;
        }
        var v897 = checkSet$$3;
        var v898 = i$$35;
        var v2387;
        var v3677 = isPartStrNotTag;
        if (!v3677) {
          var v3838 = elem$$5;
          if (v3838) {
            var v3929 = elem$$5.nodeName;
            v3838 = JAM.call(v3929.toLowerCase, v3929, [], JAM.policy.p1) === part;
          }
          v3677 = v3838;
        }
        if (v3677) {
          v2387 = elem$$5 || false;
        } else {
          v2387 = elem$$5 === part;
        }
        introspect(JAM.policy.p2) {
          v897[v898] = v2387;
        }
      }
      i$$35 = i$$35 + 1;
      v900 = i$$35 < l$$3;
    }
    if (isPartStrNotTag) {
      JAM.call(Sizzle$$1.filter, Sizzle$$1, [part, checkSet$$3, true], JAM.policy.p1);
    }
    return;
  }
  function v199(elem$$4) {
    return JAM.call(elem$$4.getAttribute, elem$$4, ["type"], JAM.policy.p1);
  }
  function v198(elem$$3) {
    return JAM.call(elem$$3.getAttribute, elem$$3, ["href"], JAM.policy.p1);
  }
  function v197(msg) {
    throw "Syntax error, unrecognized expression: " + msg;
  }
  function v196(expr$$7, set$$4, inplace, not) {
    var match$$16;
    var anyFound;
    var old = expr$$7;
    var result$$8 = [];
    var curLoop = set$$4;
    var v2388 = set$$4;
    if (v2388) {
      v2388 = set$$4[0];
    }
    var v901 = v2388;
    if (v901) {
      v901 = JAM.call(Sizzle$$1.isXML, Sizzle$$1, [set$$4[0]], JAM.policy.p1);
    }
    var isXMLFilter = v901;
    var v2390 = expr$$7;
    if (v2390) {
      v2390 = set$$4.length;
    }
    var v920 = v2390;
    for (;v920;) {
      var type$$29;
      for (type$$29 in Expr.filter) {
        var v3678 = Expr.leftMatch[type$$29];
        var v2391 = (match$$16 = JAM.call(v3678.exec, v3678, [expr$$7], JAM.policy.p1)) != null;
        if (v2391) {
          v2391 = match$$16[2];
        }
        if (v2391) {
          var found$$1;
          var item$$4;
          var filter$$6 = Expr.filter[type$$29];
          var left$$5 = match$$16[1];
          anyFound = false;
          JAM.call(match$$16.splice, match$$16, [1, 1], JAM.policy.p1);
          if (JAM.call(left$$5.substr, left$$5, [left$$5.length - 1], JAM.policy.p1) === "\\") {
            continue;
          }
          if (curLoop === result$$8) {
            result$$8 = [];
          }
          if (Expr.preFilter[type$$29]) {
            var v905 = Expr.preFilter;
            match$$16 = JAM.call(v905[type$$29], v905, [match$$16, curLoop, inplace, result$$8, not, isXMLFilter], JAM.policy.p1);
            if (!match$$16) {
              anyFound = found$$1 = true;
            } else {
              if (match$$16 === true) {
                continue;
              }
            }
          }
          if (match$$16) {
            var i$$34 = 0;
            var v911 = (item$$4 = curLoop[i$$34]) != null;
            for (;v911;) {
              if (item$$4) {
                found$$1 = JAM.call(filter$$6, null, [item$$4, match$$16, i$$34, curLoop], JAM.policy.p1);
                var pass = not ^ !!found$$1;
                var v2396 = inplace;
                if (v2396) {
                  v2396 = found$$1 != null;
                }
                if (v2396) {
                  if (pass) {
                    anyFound = true;
                  } else {
                    introspect(JAM.policy.p2) {
                      curLoop[i$$34] = false;
                    }
                  }
                } else {
                  if (pass) {
                    JAM.call(result$$8.push, result$$8, [item$$4], JAM.policy.p1);
                    anyFound = true;
                  }
                }
              }
              i$$34 = i$$34 + 1;
              v911 = (item$$4 = curLoop[i$$34]) != null;
            }
          }
          if (found$$1 !== undefined) {
            if (!inplace) {
              curLoop = result$$8;
            }
            expr$$7 = JAM.call(expr$$7.replace, expr$$7, [Expr.match[type$$29], ""], JAM.policy.p1);
            if (!anyFound) {
              return[];
            }
            break;
          }
        }
      }
      if (expr$$7 === old) {
        if (anyFound == null) {
          JAM.call(Sizzle$$1.error, Sizzle$$1, [expr$$7], JAM.policy.p1);
        } else {
          break;
        }
      }
      old = expr$$7;
      var v2399 = expr$$7;
      if (v2399) {
        v2399 = set$$4.length;
      }
      v920 = v2399;
    }
    return curLoop;
  }
  function v195(expr$$6, context$$30, isXML$$2) {
    var set$$3;
    if (!expr$$6) {
      return[];
    }
    var i$$33 = 0;
    var l$$2 = Expr.order.length;
    var v930 = i$$33 < l$$2;
    for (;v930;) {
      var match$$15;
      var type$$28 = Expr.order[i$$33];
      var v2400 = Expr.leftMatch[type$$28];
      if (match$$15 = JAM.call(v2400.exec, v2400, [expr$$6], JAM.policy.p1)) {
        var left$$4 = match$$15[1];
        JAM.call(match$$15.splice, match$$15, [1, 1], JAM.policy.p1);
        if (JAM.call(left$$4.substr, left$$4, [left$$4.length - 1], JAM.policy.p1) !== "\\") {
          var v924 = match$$15;
          var v3263 = match$$15[1];
          if (!v3263) {
            v3263 = "";
          }
          var v2402 = v3263;
          var v3987 = JAM.call(v2402.replace, v2402, [rBackslash, ""], JAM.policy.p1);
          introspect(JAM.policy.p2) {
            v924[1] = v3987;
          }
          var v925 = Expr.find;
          set$$3 = JAM.call(v925[type$$28], v925, [match$$15, context$$30, isXML$$2], JAM.policy.p1);
          if (set$$3 != null) {
            expr$$6 = JAM.call(expr$$6.replace, expr$$6, [Expr.match[type$$28], ""], JAM.policy.p1);
            break;
          }
        }
      }
      i$$33 = i$$33 + 1;
      v930 = i$$33 < l$$2;
    }
    if (!set$$3) {
      var v931;
      if (typeof context$$30.getElementsByTagName !== "undefined") {
        v931 = JAM.call(context$$30.getElementsByTagName, context$$30, ["*"], JAM.policy.p1);
      } else {
        v931 = [];
      }
      set$$3 = v931;
    }
    return{set:set$$3, expr:expr$$6};
  }
  function v194(node$$15, expr$$5) {
    return JAM.call(Sizzle$$1, null, [expr$$5, null, null, [node$$15]], JAM.policy.p1).length > 0;
  }
  function v193(expr$$4, set$$2) {
    return JAM.call(Sizzle$$1, null, [expr$$4, null, null, set$$2], JAM.policy.p1);
  }
  function v192(results$$14) {
    if (sortOrder) {
      hasDuplicate = baseHasDuplicate;
      JAM.call(results$$14.sort, results$$14, [sortOrder], JAM.policy.p1);
      if (hasDuplicate) {
        var i$$32 = 1;
        var v936 = i$$32 < results$$14.length;
        for (;v936;) {
          if (results$$14[i$$32] === results$$14[i$$32 - 1]) {
            var v934 = i$$32;
            i$$32 = i$$32 - 1;
            JAM.call(results$$14.splice, results$$14, [v934, 1], JAM.policy.p1);
          }
          i$$32 = i$$32 + 1;
          v936 = i$$32 < results$$14.length;
        }
      }
    }
    return results$$14;
  }
  function v191() {
    baseHasDuplicate = false;
    return 0;
  }
  function posProcess(selector$$2, context$$38) {
    var match$$45;
    var tmpSet = [];
    var later = "";
    var v937;
    if (context$$38.nodeType) {
      v937 = [context$$38];
    } else {
      v937 = context$$38;
    }
    var root$$1 = v937;
    var v2411 = Expr.match.PSEUDO;
    var v939 = match$$45 = JAM.call(v2411.exec, v2411, [selector$$2], JAM.policy.p1);
    for (;v939;) {
      later = later + match$$45[0];
      selector$$2 = JAM.call(selector$$2.replace, selector$$2, [Expr.match.PSEUDO, ""], JAM.policy.p1);
      var v2414 = Expr.match.PSEUDO;
      v939 = match$$45 = JAM.call(v2414.exec, v2414, [selector$$2], JAM.policy.p1);
    }
    var v940;
    if (Expr.relative[selector$$2]) {
      v940 = selector$$2 + "*";
    } else {
      v940 = selector$$2;
    }
    selector$$2 = v940;
    var i$$54 = 0;
    var l$$8 = root$$1.length;
    var v942 = i$$54 < l$$8;
    for (;v942;) {
      JAM.call(Sizzle$$1, null, [selector$$2, root$$1[i$$54], tmpSet], JAM.policy.p1);
      i$$54 = i$$54 + 1;
      v942 = i$$54 < l$$8;
    }
    return JAM.call(Sizzle$$1.filter, Sizzle$$1, [later, tmpSet], JAM.policy.p1);
  }
  function makeArray(array$$21, results$$16) {
    var v943 = Array.prototype.slice;
    array$$21 = JAM.call(v943.call, v943, [array$$21, 0], JAM.policy.p1);
    if (results$$16) {
      var v944 = results$$16.push;
      JAM.call(v944.apply, v944, [results$$16, array$$21], JAM.policy.p1);
      return results$$16;
    }
    return array$$21;
  }
  function fescape(all$$1, num$$4) {
    return "\\" + (num$$4 - 0 + 1);
  }
  function Sizzle$$1(selector$$1, context$$29, results$$13, seed) {
    results$$13 = results$$13 || [];
    context$$29 = context$$29 || document;
    var origContext = context$$29;
    var v2418 = context$$29.nodeType !== 1;
    if (v2418) {
      v2418 = context$$29.nodeType !== 9;
    }
    if (v2418) {
      return[];
    }
    var v2419 = !selector$$1;
    if (!v2419) {
      v2419 = typeof selector$$1 !== "string";
    }
    if (v2419) {
      return results$$13;
    }
    var m$$2;
    var set$$1;
    var checkSet$$2;
    var extra;
    var ret;
    var cur$$2;
    var pop;
    var i$$31;
    var prune = true;
    var contextXML = JAM.call(Sizzle$$1.isXML, Sizzle$$1, [context$$29], JAM.policy.p1);
    var parts = [];
    var soFar = selector$$1;
    do {
      JAM.call(chunker.exec, chunker, [""], JAM.policy.p1);
      m$$2 = JAM.call(chunker.exec, chunker, [soFar], JAM.policy.p1);
      if (m$$2) {
        soFar = m$$2[3];
        JAM.call(parts.push, parts, [m$$2[1]], JAM.policy.p1);
        if (m$$2[2]) {
          extra = m$$2[3];
          break;
        }
      }
    } while (m$$2);
    var v2420 = parts.length > 1;
    if (v2420) {
      v2420 = JAM.call(origPOS.exec, origPOS, [selector$$1], JAM.policy.p1);
    }
    if (v2420) {
      var v2421 = parts.length === 2;
      if (v2421) {
        v2421 = Expr.relative[parts[0]];
      }
      if (v2421) {
        set$$1 = JAM.call(posProcess, null, [parts[0] + parts[1], context$$29], JAM.policy.p1);
      } else {
        var v951;
        if (Expr.relative[parts[0]]) {
          v951 = [context$$29];
        } else {
          v951 = JAM.call(Sizzle$$1, null, [JAM.call(parts.shift, parts, [], JAM.policy.p1), context$$29], JAM.policy.p1);
        }
        set$$1 = v951;
        var v953 = parts.length;
        for (;v953;) {
          selector$$1 = JAM.call(parts.shift, parts, [], JAM.policy.p1);
          if (Expr.relative[selector$$1]) {
            selector$$1 = selector$$1 + JAM.call(parts.shift, parts, [], JAM.policy.p1);
          }
          set$$1 = JAM.call(posProcess, null, [selector$$1, set$$1], JAM.policy.p1);
          v953 = parts.length;
        }
      }
    } else {
      var v3903 = !seed;
      if (v3903) {
        v3903 = parts.length > 1;
      }
      var v3841 = v3903;
      if (v3841) {
        v3841 = context$$29.nodeType === 9;
      }
      var v3683 = v3841;
      if (v3683) {
        v3683 = !contextXML;
      }
      var v3280 = v3683;
      if (v3280) {
        var v3684 = Expr.match.ID;
        v3280 = JAM.call(v3684.test, v3684, [parts[0]], JAM.policy.p1);
      }
      var v2429 = v3280;
      if (v2429) {
        var v3686 = Expr.match.ID;
        v2429 = !JAM.call(v3686.test, v3686, [parts[parts.length - 1]], JAM.policy.p1);
      }
      if (v2429) {
        ret = JAM.call(Sizzle$$1.find, Sizzle$$1, [JAM.call(parts.shift, parts, [], JAM.policy.p1), context$$29, contextXML], JAM.policy.p1);
        var v956;
        if (ret.expr) {
          v956 = JAM.call(Sizzle$$1.filter, Sizzle$$1, [ret.expr, ret.set], JAM.policy.p1)[0];
        } else {
          v956 = ret.set[0];
        }
        context$$29 = v956;
      }
      if (context$$29) {
        var v958;
        if (seed) {
          v958 = {expr:JAM.call(parts.pop, parts, [], JAM.policy.p1), set:JAM.call(makeArray, null, [seed], JAM.policy.p1)};
        } else {
          var v2435 = JAM.call(parts.pop, parts, [], JAM.policy.p1);
          var v3284;
          var v3906 = parts.length === 1;
          if (v3906) {
            var v3932 = parts[0] === "~";
            if (!v3932) {
              v3932 = parts[0] === "+";
            }
            v3906 = v3932;
          }
          var v3845 = v3906;
          if (v3845) {
            v3845 = context$$29.parentNode;
          }
          if (v3845) {
            v3284 = context$$29.parentNode;
          } else {
            v3284 = context$$29;
          }
          v958 = JAM.call(Sizzle$$1.find, Sizzle$$1, [v2435, v3284, contextXML], JAM.policy.p1);
        }
        ret = v958;
        var v959;
        if (ret.expr) {
          v959 = JAM.call(Sizzle$$1.filter, Sizzle$$1, [ret.expr, ret.set], JAM.policy.p1);
        } else {
          v959 = ret.set;
        }
        set$$1 = v959;
        if (parts.length > 0) {
          checkSet$$2 = JAM.call(makeArray, null, [set$$1], JAM.policy.p1);
        } else {
          prune = false;
        }
        var v964 = parts.length;
        for (;v964;) {
          cur$$2 = JAM.call(parts.pop, parts, [], JAM.policy.p1);
          pop = cur$$2;
          if (!Expr.relative[cur$$2]) {
            cur$$2 = "";
          } else {
            pop = JAM.call(parts.pop, parts, [], JAM.policy.p1);
          }
          if (pop == null) {
            pop = context$$29;
          }
          var v963 = Expr.relative;
          JAM.call(v963[cur$$2], v963, [checkSet$$2, pop, contextXML], JAM.policy.p1);
          v964 = parts.length;
        }
      } else {
        checkSet$$2 = parts = [];
      }
    }
    if (!checkSet$$2) {
      checkSet$$2 = set$$1;
    }
    if (!checkSet$$2) {
      JAM.call(Sizzle$$1.error, Sizzle$$1, [cur$$2 || selector$$1], JAM.policy.p1);
    }
    if (JAM.call(toString.call, toString, [checkSet$$2], JAM.policy.p1) === "[object Array]") {
      if (!prune) {
        var v969 = results$$13.push;
        JAM.call(v969.apply, v969, [results$$13, checkSet$$2], JAM.policy.p1);
      } else {
        var v2443 = context$$29;
        if (v2443) {
          v2443 = context$$29.nodeType === 1;
        }
        if (v2443) {
          i$$31 = 0;
          var v972 = checkSet$$2[i$$31] != null;
          for (;v972;) {
            var v2445 = checkSet$$2[i$$31];
            if (v2445) {
              var v3287 = checkSet$$2[i$$31] === true;
              if (!v3287) {
                var v3690 = checkSet$$2[i$$31].nodeType === 1;
                if (v3690) {
                  v3690 = JAM.call(Sizzle$$1.contains, Sizzle$$1, [context$$29, checkSet$$2[i$$31]], JAM.policy.p1);
                }
                v3287 = v3690;
              }
              v2445 = v3287;
            }
            if (v2445) {
              JAM.call(results$$13.push, results$$13, [set$$1[i$$31]], JAM.policy.p1);
            }
            i$$31 = i$$31 + 1;
            v972 = checkSet$$2[i$$31] != null;
          }
        } else {
          i$$31 = 0;
          var v975 = checkSet$$2[i$$31] != null;
          for (;v975;) {
            var v2448 = checkSet$$2[i$$31];
            if (v2448) {
              v2448 = checkSet$$2[i$$31].nodeType === 1;
            }
            if (v2448) {
              JAM.call(results$$13.push, results$$13, [set$$1[i$$31]], JAM.policy.p1);
            }
            i$$31 = i$$31 + 1;
            v975 = checkSet$$2[i$$31] != null;
          }
        }
      }
    } else {
      JAM.call(makeArray, null, [checkSet$$2, results$$13], JAM.policy.p1);
    }
    if (extra) {
      JAM.call(Sizzle$$1, null, [extra, origContext, results$$13, seed], JAM.policy.p1);
      JAM.call(Sizzle$$1.uniqueSort, Sizzle$$1, [results$$13], JAM.policy.p1);
    }
    return results$$13;
  }
  function dirNodeCheck(dir, cur, doneName, checkSet, nodeCheck, isXML) {
    var i$$29 = 0;
    var l = checkSet.length;
    var v983 = i$$29 < l;
    for (;v983;) {
      var elem$$1 = checkSet[i$$29];
      if (elem$$1) {
        var match$$13 = false;
        elem$$1 = elem$$1[dir];
        for (;elem$$1;) {
          if (elem$$1.sizcache === doneName) {
            match$$13 = checkSet[elem$$1.sizset];
            break;
          }
          var v2451 = elem$$1.nodeType === 1;
          if (v2451) {
            v2451 = !isXML;
          }
          if (v2451) {
            elem$$1.sizcache = doneName;
            elem$$1.sizset = i$$29;
          }
          var v3290 = elem$$1.nodeName;
          if (JAM.call(v3290.toLowerCase, v3290, [], JAM.policy.p1) === cur) {
            match$$13 = elem$$1;
            break;
          }
          elem$$1 = elem$$1[dir];
        }
        introspect(JAM.policy.p2) {
          checkSet[i$$29] = match$$13;
        }
      }
      i$$29 = i$$29 + 1;
      v983 = i$$29 < l;
    }
    return;
  }
  function dirCheck(dir$$1, cur$$1, doneName$$1, checkSet$$1, nodeCheck$$1, isXML$$1) {
    var i$$30 = 0;
    var l$$1 = checkSet$$1.length;
    var v991 = i$$30 < l$$1;
    for (;v991;) {
      var elem$$2 = checkSet$$1[i$$30];
      if (elem$$2) {
        var match$$14 = false;
        elem$$2 = elem$$2[dir$$1];
        for (;elem$$2;) {
          if (elem$$2.sizcache === doneName$$1) {
            match$$14 = checkSet$$1[elem$$2.sizset];
            break;
          }
          if (elem$$2.nodeType === 1) {
            if (!isXML$$1) {
              elem$$2.sizcache = doneName$$1;
              elem$$2.sizset = i$$30;
            }
            if (typeof cur$$1 !== "string") {
              if (elem$$2 === cur$$1) {
                match$$14 = true;
                break;
              }
            } else {
              if (JAM.call(Sizzle$$1.filter, Sizzle$$1, [cur$$1, [elem$$2]], JAM.policy.p1).length > 0) {
                match$$14 = elem$$2;
                break;
              }
            }
          }
          elem$$2 = elem$$2[dir$$1];
        }
        introspect(JAM.policy.p2) {
          checkSet$$1[i$$30] = match$$14;
        }
      }
      i$$30 = i$$30 + 1;
      v991 = i$$30 < l$$1;
    }
    return;
  }
  var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
  var done = 0;
  var toString = Object.prototype.toString;
  var hasDuplicate = false;
  var baseHasDuplicate = true;
  var rBackslash = /\\/g;
  var rNonWord = /\W/;
  var v993 = [0, 0];
  JAM.call(v993.sort, v993, [v191], JAM.policy.p1);
  Sizzle$$1.uniqueSort = v192;
  Sizzle$$1.matches = v193;
  Sizzle$$1.matchesSelector = v194;
  Sizzle$$1.find = v195;
  Sizzle$$1.filter = v196;
  Sizzle$$1.error = v197;
  var Expr = Sizzle$$1.selectors = {order:["ID", "NAME", "TAG"], match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, 
  PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/}, leftMatch:{}, attrMap:{"class":"className", "for":"htmlFor"}, attrHandle:{href:v198, type:v199}, relative:{"+":v200, ">":v201, "":v202, "~":v203}, find:{ID:v204, NAME:v205, TAG:v206}, preFilter:{CLASS:v207, ID:v208, TAG:v209, CHILD:v210, ATTR:v211, PSEUDO:v212, POS:v213}, filters:{enabled:v214, disabled:v215, checked:v216, selected:v217, parent:v218, empty:v219, has:v220, header:v221, text:v222, radio:v223, checkbox:v224, 
  file:v225, password:v226, submit:v227, image:v228, reset:v229, button:v230, input:v231, focus:v232}, setFilters:{first:v233, last:v234, even:v235, odd:v236, lt:v237, gt:v238, nth:v239, eq:v240}, filter:{PSEUDO:v241, CHILD:v242, ID:v243, TAG:v244, CLASS:v245, ATTR:v246, POS:v247}};
  var origPOS = Expr.match.POS;
  var type$$27;
  for (type$$27 in Expr.match) {
    var v1005 = Expr.match;
    var v1006 = type$$27;
    var v3988 = JAM.new(RegExp, [Expr.match[type$$27].source + /(?![^\[]*\])(?![^\(]*\))/.source], JAM.policy.p1);
    JAM.set(v1005, v1006, v3988, JAM.policy.p2);
    var v1007 = Expr.leftMatch;
    var v1008 = type$$27;
    var v3294 = /(^(?:.|\r|\n)*?)/.source;
    var v3695 = Expr.match[type$$27].source;
    var v3989 = JAM.new(RegExp, [v3294 + JAM.call(v3695.replace, v3695, [/\\(\d+)/g, fescape], JAM.policy.p1)], JAM.policy.p1);
    JAM.set(v1007, v1008, v3989, JAM.policy.p2);
  }
  try {
    var v3296 = Array.prototype.slice;
    JAM.call(v3296.call, v3296, [document.documentElement.childNodes, 0], JAM.policy.p1)[0].nodeType;
  } catch (e$$24) {
    makeArray = v248;
  }
  var sortOrder;
  var siblingCheck;
  if (document.documentElement.compareDocumentPosition) {
    sortOrder = v249;
  } else {
    sortOrder = v250;
    siblingCheck = v251;
  }
  Sizzle$$1.getText = v252;
  JAM.call(v255, null, [], JAM.policy.p1);
  JAM.call(v258, null, [], JAM.policy.p1);
  if (document.querySelectorAll) {
    JAM.call(v260, null, [], JAM.policy.p1);
  }
  JAM.call(v262, null, [], JAM.policy.p1);
  JAM.call(v264, null, [], JAM.policy.p1);
  if (document.documentElement.contains) {
    Sizzle$$1.contains = v265;
  } else {
    if (document.documentElement.compareDocumentPosition) {
      Sizzle$$1.contains = v266;
    } else {
      Sizzle$$1.contains = v267;
    }
  }
  Sizzle$$1.isXML = v268;
  window.Sizzle = Sizzle$$1;
  return;
}
function v190() {
  function select$$1() {
    throw JAM.new(Error, ['Method "Prototype.Selector.select" must be defined.'], JAM.policy.p1);
  }
  function match$$11() {
    throw JAM.new(Error, ['Method "Prototype.Selector.match" must be defined.'], JAM.policy.p1);
  }
  function find(elements$$4, expression$$6, index$$60) {
    index$$60 = index$$60 || 0;
    var match$$12 = Prototype.Selector.match;
    var length$$29 = elements$$4.length;
    var matchIndex = 0;
    var i$$27;
    i$$27 = 0;
    var v1018 = i$$27 < length$$29;
    for (;v1018;) {
      var v2463 = JAM.call(match$$12, null, [elements$$4[i$$27], expression$$6], JAM.policy.p1);
      if (v2463) {
        var v3299 = matchIndex;
        matchIndex = matchIndex + 1;
        v2463 = index$$60 == v3299;
      }
      if (v2463) {
        return JAM.call(Element.extend, Element, [elements$$4[i$$27]], JAM.policy.p1);
      }
      i$$27 = i$$27 + 1;
      v1018 = i$$27 < length$$29;
    }
    return;
  }
  function extendElements(elements$$5) {
    var i$$28 = 0;
    var length$$30 = elements$$5.length;
    var v1020 = i$$28 < length$$30;
    for (;v1020;) {
      JAM.call(Element.extend, Element, [elements$$5[i$$28]], JAM.policy.p1);
      i$$28 = i$$28 + 1;
      v1020 = i$$28 < length$$30;
    }
    return elements$$5;
  }
  var K = Prototype.K;
  var v2464;
  if (Element.extend === K) {
    v2464 = K;
  } else {
    v2464 = extendElements;
  }
  return{select:select$$1, match:match$$11, find:find, extendElements:v2464, extendElement:Element.extend};
}
function v189() {
  var v1023 = JAM.call($A, null, [arguments], JAM.policy.p1);
  var expression$$5 = JAM.call(v1023.join, v1023, [", "], JAM.policy.p1);
  var v1024 = Prototype.Selector;
  return JAM.call(v1024.select, v1024, [expression$$5, document], JAM.policy.p1);
}
function v188() {
  function getRootElement() {
    if (ROOT) {
      return ROOT;
    }
    var v1025;
    if (IS_OLD_OPERA) {
      v1025 = document.body;
    } else {
      v1025 = document.documentElement;
    }
    ROOT = v1025;
    return ROOT;
  }
  function getDimensions$$1() {
    return{width:JAM.call(this.getWidth, this, [], JAM.policy.p1), height:JAM.call(this.getHeight, this, [], JAM.policy.p1)};
  }
  function getWidth$$1() {
    return JAM.call(getRootElement, null, [], JAM.policy.p1).clientWidth;
  }
  function getHeight$$1() {
    return JAM.call(getRootElement, null, [], JAM.policy.p1).clientHeight;
  }
  function getScrollOffsets() {
    var v2465 = window.pageXOffset;
    if (!v2465) {
      v2465 = document.documentElement.scrollLeft;
    }
    var v1030 = v2465;
    if (!v1030) {
      v1030 = document.body.scrollLeft;
    }
    var x$$49 = v1030;
    var v2468 = window.pageYOffset;
    if (!v2468) {
      v2468 = document.documentElement.scrollTop;
    }
    var v1031 = v2468;
    if (!v1031) {
      v1031 = document.body.scrollTop;
    }
    var y$$31 = v1031;
    return JAM.new(Element.Offset, [x$$49, y$$31], JAM.policy.p1);
  }
  var v1033 = Prototype.Browser.Opera;
  if (v1033) {
    var v3699 = window.opera;
    v1033 = JAM.call(window.parseFloat, window, [JAM.call(v3699.version, v3699, [], JAM.policy.p1)], JAM.policy.p1) < 9.5;
  }
  var IS_OLD_OPERA = v1033;
  var ROOT = null;
  document.viewport = {getDimensions:getDimensions$$1, getWidth:getWidth$$1, getHeight:getHeight$$1, getScrollOffsets:getScrollOffsets};
  return;
}
function v187() {
  function v186(element$$145) {
    element$$145 = JAM.call($, null, [element$$145], JAM.policy.p1);
    if (JAM.call(isDetached, null, [element$$145], JAM.policy.p1)) {
      return JAM.new(Element.Offset, [0, 0], JAM.policy.p1);
    }
    var rect$$2 = JAM.call(element$$145.getBoundingClientRect, element$$145, [], JAM.policy.p1);
    var docEl = document.documentElement;
    return JAM.new(Element.Offset, [rect$$2.left - docEl.clientLeft, rect$$2.top - docEl.clientTop], JAM.policy.p1);
  }
  function v185(element$$144) {
    element$$144 = JAM.call($, null, [element$$144], JAM.policy.p1);
    var valueT$$4 = 0;
    var valueL$$4 = 0;
    do {
      var v3306 = element$$144.offsetTop;
      if (!v3306) {
        v3306 = 0;
      }
      valueT$$4 = valueT$$4 + v3306;
      var v3307 = element$$144.offsetLeft;
      if (!v3307) {
        v3307 = 0;
      }
      valueL$$4 = valueL$$4 + v3307;
      if (element$$144.offsetParent == document.body) {
        if (JAM.call(Element.getStyle, Element, [element$$144, "position"], JAM.policy.p1) == "absolute") {
          break;
        }
      }
      element$$144 = element$$144.offsetParent;
    } while (element$$144);
    return JAM.new(Element.Offset, [valueL$$4, valueT$$4], JAM.policy.p1);
  }
  function v184(proceed$$1, element$$143) {
    element$$143 = JAM.call($, null, [element$$143], JAM.policy.p1);
    if (!element$$143.parentNode) {
      return JAM.new(Element.Offset, [0, 0], JAM.policy.p1);
    }
    var position$$5 = JAM.call(element$$143.getStyle, element$$143, ["position"], JAM.policy.p1);
    if (position$$5 !== "static") {
      return JAM.call(proceed$$1, null, [element$$143], JAM.policy.p1);
    }
    var offsetParent$$1 = JAM.call(element$$143.getOffsetParent, element$$143, [], JAM.policy.p1);
    var v2483 = offsetParent$$1;
    if (v2483) {
      v2483 = JAM.call(offsetParent$$1.getStyle, offsetParent$$1, ["position"], JAM.policy.p1) === "fixed";
    }
    if (v2483) {
      JAM.call(hasLayout, null, [offsetParent$$1], JAM.policy.p1);
    }
    JAM.call(element$$143.setStyle, element$$143, [{position:"relative"}], JAM.policy.p1);
    var value$$88 = JAM.call(proceed$$1, null, [element$$143], JAM.policy.p1);
    JAM.call(element$$143.setStyle, element$$143, [{position:position$$5}], JAM.policy.p1);
    return value$$88;
  }
  function v183(proceed, element$$142) {
    element$$142 = JAM.call($, null, [element$$142], JAM.policy.p1);
    var v3702 = element$$142.nodeType === Node.DOCUMENT_NODE;
    if (!v3702) {
      v3702 = JAM.call(isDetached, null, [element$$142], JAM.policy.p1);
    }
    var v3309 = v3702;
    if (!v3309) {
      var v3853 = element$$142.nodeName;
      v3309 = JAM.call(v3853.toUpperCase, v3853, [], JAM.policy.p1) === "BODY";
    }
    var v2484 = v3309;
    if (!v2484) {
      var v3705 = element$$142.nodeName;
      v2484 = JAM.call(v3705.toUpperCase, v3705, [], JAM.policy.p1) === "HTML";
    }
    if (v2484) {
      return JAM.call($, null, [document.body], JAM.policy.p1);
    }
    var position$$4 = JAM.call(element$$142.getStyle, element$$142, ["position"], JAM.policy.p1);
    if (position$$4 !== "static") {
      return JAM.call(proceed, null, [element$$142], JAM.policy.p1);
    }
    JAM.call(element$$142.setStyle, element$$142, [{position:"relative"}], JAM.policy.p1);
    var value$$87 = JAM.call(proceed, null, [element$$142], JAM.policy.p1);
    JAM.call(element$$142.setStyle, element$$142, [{position:position$$4}], JAM.policy.p1);
    return value$$87;
  }
  function v182() {
    return[this.left, this.top];
  }
  function v181() {
    return JAM.call("[#{left}, #{top}]".interpolate, "[#{left}, #{top}]", [this], JAM.policy.p1);
  }
  function v180() {
    return JAM.call("#<Element.Offset left: #{left} top: #{top}>".interpolate, "#<Element.Offset left: #{left} top: #{top}>", [this], JAM.policy.p1);
  }
  function v179(offset$$13) {
    return JAM.new(Element.Offset, [this.left - offset$$13.left, this.top - offset$$13.top], JAM.policy.p1);
  }
  function v178(left$$3, top$$2) {
    var v3990 = JAM.call(left$$3.round, left$$3, [], JAM.policy.p1);
    this.left = v3990;
    var v3991 = JAM.call(top$$2.round, top$$2, [], JAM.policy.p1);
    this.top = v3991;
    introspect(JAM.policy.p2) {
      this[0] = this.left;
    }
    introspect(JAM.policy.p2) {
      this[1] = this.top;
    }
    return;
  }
  function v177(element$$141) {
    var parent$$7 = JAM.call(hasLayout, null, [JAM.call(element$$141.getOffsetParent, element$$141, [], JAM.policy.p1)], JAM.policy.p1);
    var rect$$1 = JAM.call(element$$141.getBoundingClientRect, element$$141, [], JAM.policy.p1);
    var pRect$$1 = JAM.call(parent$$7.getBoundingClientRect, parent$$7, [], JAM.policy.p1);
    var v1059 = pRect$$1.bottom - rect$$1.bottom;
    return JAM.call(v1059.round, v1059, [], JAM.policy.p1);
  }
  function v176(element$$140) {
    var parent$$6 = JAM.call(hasLayout, null, [JAM.call(element$$140.getOffsetParent, element$$140, [], JAM.policy.p1)], JAM.policy.p1);
    var rect = JAM.call(element$$140.getBoundingClientRect, element$$140, [], JAM.policy.p1);
    var pRect = JAM.call(parent$$6.getBoundingClientRect, parent$$6, [], JAM.policy.p1);
    var v1061 = pRect.right - rect.right;
    return JAM.call(v1061.round, v1061, [], JAM.policy.p1);
  }
  function v175(element$$139) {
    return JAM.call(getPixelValue, null, [element$$139, "marginRight"], JAM.policy.p1);
  }
  function v174(element$$138) {
    return JAM.call(getPixelValue, null, [element$$138, "marginLeft"], JAM.policy.p1);
  }
  function v173(element$$137) {
    return JAM.call(getPixelValue, null, [element$$137, "marginBottom"], JAM.policy.p1);
  }
  function v172(element$$136) {
    return JAM.call(getPixelValue, null, [element$$136, "marginTop"], JAM.policy.p1);
  }
  function v171(element$$135) {
    return JAM.call(getPixelValue, null, [element$$135, "borderRightWidth"], JAM.policy.p1);
  }
  function v170(element$$134) {
    return JAM.call(getPixelValue, null, [element$$134, "borderLeftWidth"], JAM.policy.p1);
  }
  function v169(element$$133) {
    return JAM.call(getPixelValue, null, [element$$133, "borderBottomWidth"], JAM.policy.p1);
  }
  function v168(element$$132) {
    return JAM.call(getPixelValue, null, [element$$132, "borderTopWidth"], JAM.policy.p1);
  }
  function v167(element$$131) {
    return JAM.call(getPixelValue, null, [element$$131, "paddingRight"], JAM.policy.p1);
  }
  function v166(element$$130) {
    return JAM.call(getPixelValue, null, [element$$130, "paddingLeft"], JAM.policy.p1);
  }
  function v165(element$$129) {
    return JAM.call(getPixelValue, null, [element$$129, "paddingBottom"], JAM.policy.p1);
  }
  function v164(element$$128) {
    return JAM.call(getPixelValue, null, [element$$128, "paddingTop"], JAM.policy.p1);
  }
  function v163(element$$127) {
    var offset$$12 = JAM.call(element$$127.positionedOffset, element$$127, [], JAM.policy.p1);
    var parent$$5 = JAM.call(element$$127.getOffsetParent, element$$127, [], JAM.policy.p1);
    var pWidth = JAM.call(parent$$5.measure, parent$$5, ["width"], JAM.policy.p1);
    var mWidth = JAM.call(this.get, this, ["border-box-width"], JAM.policy.p1);
    return pWidth - mWidth - offset$$12.left;
  }
  function v162(element$$126) {
    var offset$$11 = JAM.call(element$$126.positionedOffset, element$$126, [], JAM.policy.p1);
    return offset$$11.left;
  }
  function v161(element$$125) {
    var offset$$10 = JAM.call(element$$125.positionedOffset, element$$125, [], JAM.policy.p1);
    var parent$$4 = JAM.call(element$$125.getOffsetParent, element$$125, [], JAM.policy.p1);
    var pHeight = JAM.call(parent$$4.measure, parent$$4, ["height"], JAM.policy.p1);
    var mHeight = JAM.call(this.get, this, ["border-box-height"], JAM.policy.p1);
    return pHeight - mHeight - offset$$10.top;
  }
  function v160(element$$124) {
    var offset$$9 = JAM.call(element$$124.positionedOffset, element$$124, [], JAM.policy.p1);
    return offset$$9.top;
  }
  function v159(element$$123) {
    var bWidth$$1 = JAM.call(this.get, this, ["border-box-width"], JAM.policy.p1);
    var mLeft = JAM.call(this.get, this, ["margin-left"], JAM.policy.p1);
    var mRight = JAM.call(this.get, this, ["margin-right"], JAM.policy.p1);
    if (bWidth$$1 <= 0) {
      return 0;
    }
    return bWidth$$1 + mLeft + mRight;
  }
  function v158(element$$122) {
    var bHeight$$1 = JAM.call(this.get, this, ["border-box-height"], JAM.policy.p1);
    var mTop = JAM.call(this.get, this, ["margin-top"], JAM.policy.p1);
    var mBottom = JAM.call(this.get, this, ["margin-bottom"], JAM.policy.p1);
    if (bHeight$$1 <= 0) {
      return 0;
    }
    return bHeight$$1 + mTop + mBottom;
  }
  function v157(element$$121) {
    if (!this._preComputing) {
      JAM.call(this._begin, this, [], JAM.policy.p1);
    }
    var width$$11 = element$$121.offsetWidth;
    if (!this._preComputing) {
      JAM.call(this._end, this, [], JAM.policy.p1);
    }
    return width$$11;
  }
  function v156(element$$120) {
    if (!this._preComputing) {
      JAM.call(this._begin, this, [], JAM.policy.p1);
    }
    var height$$9 = element$$120.offsetHeight;
    if (!this._preComputing) {
      JAM.call(this._end, this, [], JAM.policy.p1);
    }
    return height$$9;
  }
  function v155(element$$119) {
    var width$$10 = JAM.call(this.get, this, ["width"], JAM.policy.p1);
    var pLeft$$1 = JAM.call(this.get, this, ["padding-left"], JAM.policy.p1);
    var pRight$$1 = JAM.call(this.get, this, ["padding-right"], JAM.policy.p1);
    return width$$10 + pLeft$$1 + pRight$$1;
  }
  function v154(element$$118) {
    var height$$8 = JAM.call(this.get, this, ["height"], JAM.policy.p1);
    var pTop$$1 = JAM.call(this.get, this, ["padding-top"], JAM.policy.p1);
    var pBottom$$1 = JAM.call(this.get, this, ["padding-bottom"], JAM.policy.p1);
    return height$$8 + pTop$$1 + pBottom$$1;
  }
  function v153(element$$117) {
    if (!this._preComputing) {
      JAM.call(this._begin, this, [], JAM.policy.p1);
    }
    var bWidth = JAM.call(this.get, this, ["border-box-width"], JAM.policy.p1);
    if (bWidth <= 0) {
      if (!this._preComputing) {
        JAM.call(this._end, this, [], JAM.policy.p1);
      }
      return 0;
    }
    var bLeft = JAM.call(this.get, this, ["border-left"], JAM.policy.p1);
    var bRight = JAM.call(this.get, this, ["border-right"], JAM.policy.p1);
    var pLeft = JAM.call(this.get, this, ["padding-left"], JAM.policy.p1);
    var pRight = JAM.call(this.get, this, ["padding-right"], JAM.policy.p1);
    if (!this._preComputing) {
      JAM.call(this._end, this, [], JAM.policy.p1);
    }
    return bWidth - bLeft - bRight - pLeft - pRight;
  }
  function v152(element$$116) {
    if (!this._preComputing) {
      JAM.call(this._begin, this, [], JAM.policy.p1);
    }
    var bHeight = JAM.call(this.get, this, ["border-box-height"], JAM.policy.p1);
    if (bHeight <= 0) {
      if (!this._preComputing) {
        JAM.call(this._end, this, [], JAM.policy.p1);
      }
      return 0;
    }
    var bTop = JAM.call(this.get, this, ["border-top"], JAM.policy.p1);
    var bBottom = JAM.call(this.get, this, ["border-bottom"], JAM.policy.p1);
    var pTop = JAM.call(this.get, this, ["padding-top"], JAM.policy.p1);
    var pBottom = JAM.call(this.get, this, ["padding-bottom"], JAM.policy.p1);
    if (!this._preComputing) {
      JAM.call(this._end, this, [], JAM.policy.p1);
    }
    return bHeight - bTop - bBottom - pTop - pBottom;
  }
  function v151() {
    return "#<Element.Layout>";
  }
  function v150() {
    function v149(key$$26) {
      var v3314 = Element.Layout.PROPERTIES;
      if (!JAM.call(v3314.include, v3314, [key$$26], JAM.policy.p1)) {
        return;
      }
      var v2506 = Element.Layout.COMPOSITE_PROPERTIES;
      if (JAM.call(v2506.include, v2506, [key$$26], JAM.policy.p1)) {
        return;
      }
      var value$$86 = JAM.call(this.get, this, [key$$26], JAM.policy.p1);
      if (value$$86 != null) {
        var JSCompiler_inline_result$$0;
        var key$$inline_31 = key$$26;
        if (JAM.call(key$$inline_31.include, key$$inline_31, ["border"], JAM.policy.p1)) {
          key$$inline_31 = key$$inline_31 + "-width";
        }
        JSCompiler_inline_result$$0 = JAM.call(key$$inline_31.camelize, key$$inline_31, [], JAM.policy.p1);
        JAM.set(css$$2, JSCompiler_inline_result$$0, value$$86 + "px", JAM.policy.p2);
      }
      return;
    }
    var args$$11 = JAM.call($A, null, [arguments], JAM.policy.p1);
    var v1090;
    if (args$$11.length === 0) {
      v1090 = Element.Layout.PROPERTIES;
    } else {
      var v2508 = JAM.call(args$$11.join, args$$11, [" "], JAM.policy.p1);
      v1090 = JAM.call(v2508.split, v2508, [" "], JAM.policy.p1);
    }
    var keys$$4 = v1090;
    var css$$2 = {};
    JAM.call(keys$$4.each, keys$$4, [v149, this], JAM.policy.p1);
    return css$$2;
  }
  function v148() {
    var v1091 = this.toObject;
    var obj$$17 = JAM.call(v1091.apply, v1091, [this, arguments], JAM.policy.p1);
    return JAM.new(Hash, [obj$$17], JAM.policy.p1);
  }
  function v147() {
    function v146(key$$25) {
      var v3317 = Element.Layout.PROPERTIES;
      if (!JAM.call(v3317.include, v3317, [key$$25], JAM.policy.p1)) {
        return;
      }
      var value$$85 = JAM.call(this.get, this, [key$$25], JAM.policy.p1);
      if (value$$85 != null) {
        JAM.set(obj$$16, key$$25, value$$85, JAM.policy.p2);
      }
      return;
    }
    var args$$10 = JAM.call($A, null, [arguments], JAM.policy.p1);
    var v1094;
    if (args$$10.length === 0) {
      v1094 = Element.Layout.PROPERTIES;
    } else {
      var v2512 = JAM.call(args$$10.join, args$$10, [" "], JAM.policy.p1);
      v1094 = JAM.call(v2512.split, v2512, [" "], JAM.policy.p1);
    }
    var keys$$3 = v1094;
    var obj$$16 = {};
    JAM.call(keys$$3.each, keys$$3, [v146, this], JAM.policy.p1);
    return obj$$16;
  }
  function v145(bool$$2) {
    var v1095 = this.element;
    return JAM.call(v1095.store, v1095, ["prototype_element_layout_prepared", bool$$2], JAM.policy.p1);
  }
  function v144() {
    var v1096 = this.element;
    return JAM.call(v1096.retrieve, v1096, ["prototype_element_layout_prepared", false], JAM.policy.p1);
  }
  function v143(property$$20) {
    var COMPUTATIONS = Element.Layout.COMPUTATIONS;
    if (!(property$$20 in COMPUTATIONS)) {
      throw "Property not found.";
    }
    var v2515 = COMPUTATIONS[property$$20];
    return JAM.call(this._set, this, [property$$20, JAM.call(v2515.call, v2515, [this, this.element], JAM.policy.p1)], JAM.policy.p1);
  }
  function v142() {
    var element$$115 = this.element;
    var originalStyles$$3 = JAM.call(element$$115.retrieve, element$$115, ["prototype_original_styles"], JAM.policy.p1);
    JAM.call(element$$115.store, element$$115, ["prototype_original_styles", null], JAM.policy.p1);
    JAM.call(element$$115.setStyle, element$$115, [originalStyles$$3], JAM.policy.p1);
    JAM.call(this._setPrepared, this, [false], JAM.policy.p1);
    return;
  }
  function v141() {
    if (JAM.call(this._isPrepared, this, [], JAM.policy.p1)) {
      return;
    }
    var element$$114 = this.element;
    var JSCompiler_inline_result$$4;
    JSCompiler_inline_label_isDisplayed_30: {
      var element$$inline_28 = element$$114;
      var v2517 = element$$inline_28;
      if (v2517) {
        v2517 = element$$inline_28.parentNode;
      }
      var v1103 = v2517;
      for (;v1103;) {
        var display$$inline_29 = JAM.call(element$$inline_28.getStyle, element$$inline_28, ["display"], JAM.policy.p1);
        if (display$$inline_29 === "none") {
          JSCompiler_inline_result$$4 = false;
          break JSCompiler_inline_label_isDisplayed_30;
        }
        element$$inline_28 = JAM.call($, null, [element$$inline_28.parentNode], JAM.policy.p1);
        var v2518 = element$$inline_28;
        if (v2518) {
          v2518 = element$$inline_28.parentNode;
        }
        v1103 = v2518;
      }
      JSCompiler_inline_result$$4 = true;
    }
    if (JSCompiler_inline_result$$4) {
      JAM.call(this._setPrepared, this, [true], JAM.policy.p1);
      return;
    }
    var v2519 = element$$114.style.position;
    if (!v2519) {
      v2519 = "";
    }
    var v1104 = v2519;
    var v2520 = element$$114.style.width;
    if (!v2520) {
      v2520 = "";
    }
    var v1105 = v2520;
    var v2521 = element$$114.style.visibility;
    if (!v2521) {
      v2521 = "";
    }
    var v1106 = v2521;
    var v2522 = element$$114.style.display;
    if (!v2522) {
      v2522 = "";
    }
    var originalStyles$$2 = {position:v1104, width:v1105, visibility:v1106, display:v2522};
    JAM.call(element$$114.store, element$$114, ["prototype_original_styles", originalStyles$$2], JAM.policy.p1);
    var position$$3 = JAM.call(getRawStyle, null, [element$$114, "position"], JAM.policy.p1);
    var width$$9 = element$$114.offsetWidth;
    var v2523 = width$$9 === 0;
    if (!v2523) {
      v2523 = width$$9 === null;
    }
    if (v2523) {
      element$$114.style.display = "block";
      width$$9 = element$$114.offsetWidth;
    }
    var v1110;
    if (position$$3 === "fixed") {
      v1110 = document.viewport;
    } else {
      v1110 = element$$114.parentNode;
    }
    var context$$28 = v1110;
    var tempStyles = {visibility:"hidden", display:"block"};
    if (position$$3 !== "fixed") {
      tempStyles.position = "absolute";
    }
    JAM.call(element$$114.setStyle, element$$114, [tempStyles], JAM.policy.p1);
    var positionedWidth = element$$114.offsetWidth;
    var newWidth;
    var v2525 = width$$9;
    if (v2525) {
      v2525 = positionedWidth === width$$9;
    }
    if (v2525) {
      newWidth = JAM.call(getContentWidth, null, [element$$114, context$$28], JAM.policy.p1);
    } else {
      var v2526 = position$$3 === "absolute";
      if (!v2526) {
        v2526 = position$$3 === "fixed";
      }
      if (v2526) {
        newWidth = JAM.call(getContentWidth, null, [element$$114, context$$28], JAM.policy.p1);
      } else {
        var parent$$3 = element$$114.parentNode;
        var v1112 = JAM.call($, null, [parent$$3], JAM.policy.p1);
        var pLayout = JAM.call(v1112.getLayout, v1112, [], JAM.policy.p1);
        newWidth = JAM.call(pLayout.get, pLayout, ["width"], JAM.policy.p1) - JAM.call(this.get, this, ["margin-left"], JAM.policy.p1) - JAM.call(this.get, this, ["border-left"], JAM.policy.p1) - JAM.call(this.get, this, ["padding-left"], JAM.policy.p1) - JAM.call(this.get, this, ["padding-right"], JAM.policy.p1) - JAM.call(this.get, this, ["border-right"], JAM.policy.p1) - JAM.call(this.get, this, ["margin-right"], JAM.policy.p1);
      }
    }
    JAM.call(element$$114.setStyle, element$$114, [{width:newWidth + "px"}], JAM.policy.p1);
    JAM.call(this._setPrepared, this, [true], JAM.policy.p1);
    return;
  }
  function v140($super$$4, property$$19) {
    var value$$84 = JAM.call($super$$4, null, [property$$19], JAM.policy.p1);
    var v1118;
    if (value$$84 === null) {
      v1118 = JAM.call(this._compute, this, [property$$19], JAM.policy.p1);
    } else {
      v1118 = value$$84;
    }
    return v1118;
  }
  function v139(property$$18, value$$83) {
    throw "Properties of Element.Layout are read-only.";
  }
  function v138(property$$17, value$$82) {
    var v1119 = Hash.prototype.set;
    return JAM.call(v1119.call, v1119, [this, property$$17, value$$82], JAM.policy.p1);
  }
  function v137($super$$3, element$$113, preCompute$$1) {
    function v136(property$$16) {
      JAM.call(this._set, this, [property$$16, null], JAM.policy.p1);
      return;
    }
    JAM.call($super$$3, null, [], JAM.policy.p1);
    var v3992 = JAM.call($, null, [element$$113], JAM.policy.p1);
    this.element = v3992;
    var v1120 = Element.Layout.PROPERTIES;
    JAM.call(v1120.each, v1120, [v136, this], JAM.policy.p1);
    if (preCompute$$1) {
      this._preComputing = true;
      JAM.call(this._begin, this, [], JAM.policy.p1);
      var v1121 = Element.Layout.PROPERTIES;
      JAM.call(v1121.each, v1121, [this._compute, this], JAM.policy.p1);
      JAM.call(this._end, this, [], JAM.policy.p1);
      this._preComputing = false;
    }
    return;
  }
  function v135(element$$112) {
    if (!element$$112.currentStyle.hasLayout) {
      element$$112.style.zoom = 1;
    }
    return element$$112;
  }
  function getRawStyle(element$$85, style$$6) {
    element$$85 = JAM.call($, null, [element$$85], JAM.policy.p1);
    var value$$79 = element$$85.style[style$$6];
    var v2535 = !value$$79;
    if (!v2535) {
      v2535 = value$$79 === "auto";
    }
    if (v2535) {
      var v1126 = document.defaultView;
      var css$$1 = JAM.call(v1126.getComputedStyle, v1126, [element$$85, null], JAM.policy.p1);
      var v1127;
      if (css$$1) {
        v1127 = css$$1[style$$6];
      } else {
        v1127 = null;
      }
      value$$79 = v1127;
    }
    if (style$$6 === "opacity") {
      var v1129;
      if (value$$79) {
        v1129 = JAM.call(parseFloat, null, [value$$79], JAM.policy.p1);
      } else {
        v1129 = 1;
      }
      return v1129;
    }
    var v1131;
    if (value$$79 === "auto") {
      v1131 = null;
    } else {
      v1131 = value$$79;
    }
    return v1131;
  }
  function getRawStyle_IE(element$$86, style$$7) {
    var value$$80 = element$$86.style[style$$7];
    var v2537 = !value$$80;
    if (v2537) {
      v2537 = element$$86.currentStyle;
    }
    if (v2537) {
      value$$80 = element$$86.currentStyle[style$$7];
    }
    return value$$80;
  }
  function getContentWidth(element$$87, context$$26) {
    var boxWidth = element$$87.offsetWidth;
    var v1135 = JAM.call(getPixelValue, null, [element$$87, "borderLeftWidth", context$$26], JAM.policy.p1);
    if (!v1135) {
      v1135 = 0;
    }
    var bl = v1135;
    var v1136 = JAM.call(getPixelValue, null, [element$$87, "borderRightWidth", context$$26], JAM.policy.p1);
    if (!v1136) {
      v1136 = 0;
    }
    var br = v1136;
    var v1137 = JAM.call(getPixelValue, null, [element$$87, "paddingLeft", context$$26], JAM.policy.p1);
    if (!v1137) {
      v1137 = 0;
    }
    var pl = v1137;
    var v1138 = JAM.call(getPixelValue, null, [element$$87, "paddingRight", context$$26], JAM.policy.p1);
    if (!v1138) {
      v1138 = 0;
    }
    var pr = v1138;
    return boxWidth - bl - br - pl - pr;
  }
  function getPixelValue(value$$81, property$$14, context$$27) {
    var element$$88 = null;
    if (JAM.call(Object.isElement, Object, [value$$81], JAM.policy.p1)) {
      element$$88 = value$$81;
      value$$81 = JAM.call(getRawStyle, null, [element$$88, property$$14], JAM.policy.p1);
    }
    var v2543 = value$$81 === null;
    if (!v2543) {
      v2543 = JAM.call(Object.isUndefined, Object, [value$$81], JAM.policy.p1);
    }
    if (v2543) {
      return null;
    }
    if (JAM.call(/^(?:-)?\d+(\.\d+)?(px)?$/i.test, /^(?:-)?\d+(\.\d+)?(px)?$/i, [value$$81], JAM.policy.p1)) {
      return JAM.call(window.parseFloat, window, [value$$81], JAM.policy.p1);
    }
    var isPercentage = JAM.call(value$$81.include, value$$81, ["%"], JAM.policy.p1);
    var isViewport = context$$27 === document.viewport;
    var v3710 = JAM.call(/\d/.test, /\d/, [value$$81], JAM.policy.p1);
    if (v3710) {
      v3710 = element$$88;
    }
    var v3335 = v3710;
    if (v3335) {
      v3335 = element$$88.runtimeStyle;
    }
    var v2544 = v3335;
    if (v2544) {
      v2544 = !(isPercentage && isViewport);
    }
    if (v2544) {
      var style$$8 = element$$88.style.left;
      var rStyle = element$$88.runtimeStyle.left;
      element$$88.runtimeStyle.left = element$$88.currentStyle.left;
      element$$88.style.left = value$$81 || 0;
      value$$81 = element$$88.style.pixelLeft;
      element$$88.style.left = style$$8;
      element$$88.runtimeStyle.left = rStyle;
      return value$$81;
    }
    if (element$$88 && isPercentage) {
      var v1152 = context$$27;
      if (!v1152) {
        v1152 = element$$88.parentNode;
      }
      context$$27 = v1152;
      var decimal;
      JSCompiler_inline_label_toDecimal_27: {
        var match$$inline_26 = JAM.call(value$$81.match, value$$81, [/^(\d+)%?$/i], JAM.policy.p1);
        if (!match$$inline_26) {
          decimal = null;
          break JSCompiler_inline_label_toDecimal_27;
        }
        decimal = JAM.call(Number, null, [match$$inline_26[1]], JAM.policy.p1) / 100;
      }
      var whole = null;
      var v2548 = JAM.call(property$$14.include, property$$14, ["left"], JAM.policy.p1);
      if (!v2548) {
        v2548 = JAM.call(property$$14.include, property$$14, ["right"], JAM.policy.p1);
      }
      var v1155 = v2548;
      if (!v1155) {
        v1155 = JAM.call(property$$14.include, property$$14, ["width"], JAM.policy.p1);
      }
      var isHorizontal = v1155;
      var v2550 = JAM.call(property$$14.include, property$$14, ["top"], JAM.policy.p1);
      if (!v2550) {
        v2550 = JAM.call(property$$14.include, property$$14, ["bottom"], JAM.policy.p1);
      }
      var v1156 = v2550;
      if (!v1156) {
        v1156 = JAM.call(property$$14.include, property$$14, ["height"], JAM.policy.p1);
      }
      var isVertical = v1156;
      if (context$$27 === document.viewport) {
        if (isHorizontal) {
          var v1157 = document.viewport;
          whole = JAM.call(v1157.getWidth, v1157, [], JAM.policy.p1);
        } else {
          if (isVertical) {
            var v1158 = document.viewport;
            whole = JAM.call(v1158.getHeight, v1158, [], JAM.policy.p1);
          }
        }
      } else {
        if (isHorizontal) {
          var v1159 = JAM.call($, null, [context$$27], JAM.policy.p1);
          whole = JAM.call(v1159.measure, v1159, ["width"], JAM.policy.p1);
        } else {
          if (isVertical) {
            var v1160 = JAM.call($, null, [context$$27], JAM.policy.p1);
            whole = JAM.call(v1160.measure, v1160, ["height"], JAM.policy.p1);
          }
        }
      }
      var v1162;
      if (whole === null) {
        v1162 = 0;
      } else {
        v1162 = whole * decimal;
      }
      return v1162;
    }
    return 0;
  }
  function getLayout(element$$90, preCompute) {
    return JAM.new(Element.Layout, [element$$90, preCompute], JAM.policy.p1);
  }
  function measure(element$$91, property$$15) {
    var v2554 = JAM.call($, null, [element$$91], JAM.policy.p1);
    var v1165 = JAM.call(v2554.getLayout, v2554, [], JAM.policy.p1);
    return JAM.call(v1165.get, v1165, [property$$15], JAM.policy.p1);
  }
  function getHeight(element$$92) {
    return JAM.call(Element.getDimensions, Element, [element$$92], JAM.policy.p1).height;
  }
  function getWidth(element$$93) {
    return JAM.call(Element.getDimensions, Element, [element$$93], JAM.policy.p1).width;
  }
  function getDimensions(element$$94) {
    element$$94 = JAM.call($, null, [element$$94], JAM.policy.p1);
    var display$$1 = JAM.call(Element.getStyle, Element, [element$$94, "display"], JAM.policy.p1);
    var v2555 = display$$1;
    if (v2555) {
      v2555 = display$$1 !== "none";
    }
    if (v2555) {
      return{width:element$$94.offsetWidth, height:element$$94.offsetHeight};
    }
    var style$$9 = element$$94.style;
    var originalStyles = {visibility:style$$9.visibility, position:style$$9.position, display:style$$9.display};
    var newStyles = {visibility:"hidden", display:"block"};
    if (originalStyles.position !== "fixed") {
      newStyles.position = "absolute";
    }
    JAM.call(Element.setStyle, Element, [element$$94, newStyles], JAM.policy.p1);
    var dimensions = {width:element$$94.offsetWidth, height:element$$94.offsetHeight};
    JAM.call(Element.setStyle, Element, [element$$94, originalStyles], JAM.policy.p1);
    return dimensions;
  }
  function getOffsetParent(element$$95) {
    element$$95 = JAM.call($, null, [element$$95], JAM.policy.p1);
    var v3711 = element$$95.nodeType === Node.DOCUMENT_NODE;
    if (!v3711) {
      v3711 = JAM.call(isDetached, null, [element$$95], JAM.policy.p1);
    }
    var v3339 = v3711;
    if (!v3339) {
      var v3859 = element$$95.nodeName;
      v3339 = JAM.call(v3859.toUpperCase, v3859, [], JAM.policy.p1) === "BODY";
    }
    var v2557 = v3339;
    if (!v2557) {
      var v3714 = element$$95.nodeName;
      v2557 = JAM.call(v3714.toUpperCase, v3714, [], JAM.policy.p1) === "HTML";
    }
    if (v2557) {
      return JAM.call($, null, [document.body], JAM.policy.p1);
    }
    var isInline = JAM.call(Element.getStyle, Element, [element$$95, "display"], JAM.policy.p1) === "inline";
    var v2558 = !isInline;
    if (v2558) {
      v2558 = element$$95.offsetParent;
    }
    if (v2558) {
      return JAM.call($, null, [element$$95.offsetParent], JAM.policy.p1);
    }
    var v2559 = element$$95 = element$$95.parentNode;
    if (v2559) {
      v2559 = element$$95 !== document.body;
    }
    var v1184 = v2559;
    for (;v1184;) {
      if (JAM.call(Element.getStyle, Element, [element$$95, "position"], JAM.policy.p1) !== "static") {
        var v1182;
        var v3715 = element$$95.nodeName;
        if (JAM.call(v3715.toUpperCase, v3715, [], JAM.policy.p1) === "HTML") {
          v1182 = JAM.call($, null, [document.body], JAM.policy.p1);
        } else {
          v1182 = JAM.call($, null, [element$$95], JAM.policy.p1);
        }
        return v1182;
      }
      var v2563 = element$$95 = element$$95.parentNode;
      if (v2563) {
        v2563 = element$$95 !== document.body;
      }
      v1184 = v2563;
    }
    return JAM.call($, null, [document.body], JAM.policy.p1);
  }
  function cumulativeOffset(element$$96) {
    element$$96 = JAM.call($, null, [element$$96], JAM.policy.p1);
    var valueT = 0;
    var valueL = 0;
    if (element$$96.parentNode) {
      do {
        var v3345 = element$$96.offsetTop;
        if (!v3345) {
          v3345 = 0;
        }
        valueT = valueT + v3345;
        var v3346 = element$$96.offsetLeft;
        if (!v3346) {
          v3346 = 0;
        }
        valueL = valueL + v3346;
        element$$96 = element$$96.offsetParent;
      } while (element$$96);
    }
    return JAM.new(Element.Offset, [valueL, valueT], JAM.policy.p1);
  }
  function positionedOffset(element$$97) {
    element$$97 = JAM.call($, null, [element$$97], JAM.policy.p1);
    var layout = JAM.call(element$$97.getLayout, element$$97, [], JAM.policy.p1);
    var valueT$$1 = 0;
    var valueL$$1 = 0;
    do {
      var v3347 = element$$97.offsetTop;
      if (!v3347) {
        v3347 = 0;
      }
      valueT$$1 = valueT$$1 + v3347;
      var v3348 = element$$97.offsetLeft;
      if (!v3348) {
        v3348 = 0;
      }
      valueL$$1 = valueL$$1 + v3348;
      element$$97 = element$$97.offsetParent;
      if (element$$97) {
        var v3349 = element$$97.nodeName;
        if (JAM.call(v3349.toUpperCase, v3349, [], JAM.policy.p1) === "BODY") {
          break;
        }
        var p$$2 = JAM.call(Element.getStyle, Element, [element$$97, "position"], JAM.policy.p1);
        if (p$$2 !== "static") {
          break;
        }
      }
    } while (element$$97);
    valueL$$1 = valueL$$1 - JAM.call(layout.get, layout, ["margin-top"], JAM.policy.p1);
    valueT$$1 = valueT$$1 - JAM.call(layout.get, layout, ["margin-left"], JAM.policy.p1);
    return JAM.new(Element.Offset, [valueL$$1, valueT$$1], JAM.policy.p1);
  }
  function cumulativeScrollOffset(element$$98) {
    var valueT$$2 = 0;
    var valueL$$2 = 0;
    do {
      var v3350 = element$$98.scrollTop;
      if (!v3350) {
        v3350 = 0;
      }
      valueT$$2 = valueT$$2 + v3350;
      var v3351 = element$$98.scrollLeft;
      if (!v3351) {
        v3351 = 0;
      }
      valueL$$2 = valueL$$2 + v3351;
      element$$98 = element$$98.parentNode;
    } while (element$$98);
    return JAM.new(Element.Offset, [valueL$$2, valueT$$2], JAM.policy.p1);
  }
  function viewportOffset(forElement) {
    var valueT$$3 = 0;
    var valueL$$3 = 0;
    var docBody = document.body;
    var element$$99 = JAM.call($, null, [forElement], JAM.policy.p1);
    var v1193 = element$$99 = element$$99.offsetParent;
    do {
      var v3352 = element$$99.offsetTop;
      if (!v3352) {
        v3352 = 0;
      }
      valueT$$3 = valueT$$3 + v3352;
      var v3353 = element$$99.offsetLeft;
      if (!v3353) {
        v3353 = 0;
      }
      valueL$$3 = valueL$$3 + v3353;
      var v2577 = element$$99.offsetParent == docBody;
      if (v2577) {
        v2577 = JAM.call(Element.getStyle, Element, [element$$99, "position"], JAM.policy.p1) == "absolute";
      }
      if (v2577) {
        break;
      }
      v1193 = element$$99 = element$$99.offsetParent;
    } while (v1193);
    element$$99 = forElement;
    var v1195 = element$$99 = element$$99.parentNode;
    do {
      if (element$$99 != docBody) {
        var v3356 = element$$99.scrollTop;
        if (!v3356) {
          v3356 = 0;
        }
        valueT$$3 = valueT$$3 - v3356;
        var v3357 = element$$99.scrollLeft;
        if (!v3357) {
          v3357 = 0;
        }
        valueL$$3 = valueL$$3 - v3357;
      }
      v1195 = element$$99 = element$$99.parentNode;
    } while (v1195);
    return JAM.new(Element.Offset, [valueL$$3, valueT$$3], JAM.policy.p1);
  }
  function absolutize(element$$100) {
    element$$100 = JAM.call($, null, [element$$100], JAM.policy.p1);
    if (JAM.call(Element.getStyle, Element, [element$$100, "position"], JAM.policy.p1) === "absolute") {
      return element$$100;
    }
    var offsetParent = JAM.call(getOffsetParent, null, [element$$100], JAM.policy.p1);
    var eOffset = JAM.call(element$$100.viewportOffset, element$$100, [], JAM.policy.p1);
    var pOffset = JAM.call(offsetParent.viewportOffset, offsetParent, [], JAM.policy.p1);
    var offset$$8 = JAM.call(eOffset.relativeTo, eOffset, [pOffset], JAM.policy.p1);
    var layout$$1 = JAM.call(element$$100.getLayout, element$$100, [], JAM.policy.p1);
    JAM.call(element$$100.store, element$$100, ["prototype_absolutize_original_styles", {left:JAM.call(element$$100.getStyle, element$$100, ["left"], JAM.policy.p1), top:JAM.call(element$$100.getStyle, element$$100, ["top"], JAM.policy.p1), width:JAM.call(element$$100.getStyle, element$$100, ["width"], JAM.policy.p1), height:JAM.call(element$$100.getStyle, element$$100, ["height"], JAM.policy.p1)}], JAM.policy.p1);
    JAM.call(element$$100.setStyle, element$$100, [{position:"absolute", top:offset$$8.top + "px", left:offset$$8.left + "px", width:JAM.call(layout$$1.get, layout$$1, ["width"], JAM.policy.p1) + "px", height:JAM.call(layout$$1.get, layout$$1, ["height"], JAM.policy.p1) + "px"}], JAM.policy.p1);
    return element$$100;
  }
  function relativize(element$$101) {
    element$$101 = JAM.call($, null, [element$$101], JAM.policy.p1);
    if (JAM.call(Element.getStyle, Element, [element$$101, "position"], JAM.policy.p1) === "relative") {
      return element$$101;
    }
    var originalStyles$$1 = JAM.call(element$$101.retrieve, element$$101, ["prototype_absolutize_original_styles"], JAM.policy.p1);
    if (originalStyles$$1) {
      JAM.call(element$$101.setStyle, element$$101, [originalStyles$$1], JAM.policy.p1);
    }
    return element$$101;
  }
  function scrollTo(element$$102) {
    element$$102 = JAM.call($, null, [element$$102], JAM.policy.p1);
    var pos = JAM.call(Element.cumulativeOffset, Element, [element$$102], JAM.policy.p1);
    JAM.call(window.scrollTo, window, [pos.left, pos.top], JAM.policy.p1);
    return element$$102;
  }
  function makePositioned(element$$103) {
    element$$103 = JAM.call($, null, [element$$103], JAM.policy.p1);
    var position$$2 = JAM.call(Element.getStyle, Element, [element$$103, "position"], JAM.policy.p1);
    var styles$$1 = {};
    var v2590 = position$$2 === "static";
    if (!v2590) {
      v2590 = !position$$2;
    }
    if (v2590) {
      styles$$1.position = "relative";
      if (Prototype.Browser.Opera) {
        styles$$1.top = 0;
        styles$$1.left = 0;
      }
      JAM.call(Element.setStyle, Element, [element$$103, styles$$1], JAM.policy.p1);
      JAM.call(Element.store, Element, [element$$103, "prototype_made_positioned", true], JAM.policy.p1);
    }
    return element$$103;
  }
  function undoPositioned(element$$104) {
    element$$104 = JAM.call($, null, [element$$104], JAM.policy.p1);
    var storage$$2 = JAM.call(Element.getStorage, Element, [element$$104], JAM.policy.p1);
    var madePositioned = JAM.call(storage$$2.get, storage$$2, ["prototype_made_positioned"], JAM.policy.p1);
    if (madePositioned) {
      JAM.call(storage$$2.unset, storage$$2, ["prototype_made_positioned"], JAM.policy.p1);
      JAM.call(Element.setStyle, Element, [element$$104, {position:"", top:"", bottom:"", left:"", right:""}], JAM.policy.p1);
    }
    return element$$104;
  }
  function makeClipping(element$$105) {
    element$$105 = JAM.call($, null, [element$$105], JAM.policy.p1);
    var storage$$3 = JAM.call(Element.getStorage, Element, [element$$105], JAM.policy.p1);
    var madeClipping = JAM.call(storage$$3.get, storage$$3, ["prototype_made_clipping"], JAM.policy.p1);
    if (JAM.call(Object.isUndefined, Object, [madeClipping], JAM.policy.p1)) {
      var overflow = JAM.call(Element.getStyle, Element, [element$$105, "overflow"], JAM.policy.p1);
      JAM.call(storage$$3.set, storage$$3, ["prototype_made_clipping", overflow], JAM.policy.p1);
      if (overflow !== "hidden") {
        element$$105.style.overflow = "hidden";
      }
    }
    return element$$105;
  }
  function undoClipping(element$$106) {
    element$$106 = JAM.call($, null, [element$$106], JAM.policy.p1);
    var storage$$4 = JAM.call(Element.getStorage, Element, [element$$106], JAM.policy.p1);
    var overflow$$1 = JAM.call(storage$$4.get, storage$$4, ["prototype_made_clipping"], JAM.policy.p1);
    if (!JAM.call(Object.isUndefined, Object, [overflow$$1], JAM.policy.p1)) {
      JAM.call(storage$$4.unset, storage$$4, ["prototype_made_clipping"], JAM.policy.p1);
      element$$106.style.overflow = overflow$$1 || "";
    }
    return element$$106;
  }
  function clonePosition(element$$107, source$$4, options$$7) {
    options$$7 = JAM.call(Object.extend, Object, [{setLeft:true, setTop:true, setWidth:true, setHeight:true, offsetTop:0, offsetLeft:0}, options$$7 || {}], JAM.policy.p1);
    source$$4 = JAM.call($, null, [source$$4], JAM.policy.p1);
    element$$107 = JAM.call($, null, [element$$107], JAM.policy.p1);
    var p$$3;
    var delta$$1;
    var layout$$2;
    var styles$$2 = {};
    var v2593 = options$$7.setLeft;
    if (!v2593) {
      v2593 = options$$7.setTop;
    }
    if (v2593) {
      p$$3 = JAM.call(Element.viewportOffset, Element, [source$$4], JAM.policy.p1);
      delta$$1 = [0, 0];
      if (JAM.call(Element.getStyle, Element, [element$$107, "position"], JAM.policy.p1) === "absolute") {
        var parent$$2 = JAM.call(Element.getOffsetParent, Element, [element$$107], JAM.policy.p1);
        if (parent$$2 !== document.body) {
          delta$$1 = JAM.call(Element.viewportOffset, Element, [parent$$2], JAM.policy.p1);
        }
      }
    }
    var v2596 = options$$7.setWidth;
    if (!v2596) {
      v2596 = options$$7.setHeight;
    }
    if (v2596) {
      layout$$2 = JAM.call(Element.getLayout, Element, [source$$4], JAM.policy.p1);
    }
    if (options$$7.setLeft) {
      styles$$2.left = p$$3[0] - delta$$1[0] + options$$7.offsetLeft + "px";
    }
    if (options$$7.setTop) {
      styles$$2.top = p$$3[1] - delta$$1[1] + options$$7.offsetTop + "px";
    }
    if (options$$7.setWidth) {
      styles$$2.width = JAM.call(layout$$2.get, layout$$2, ["border-box-width"], JAM.policy.p1) + "px";
    }
    if (options$$7.setHeight) {
      styles$$2.height = JAM.call(layout$$2.get, layout$$2, ["border-box-height"], JAM.policy.p1) + "px";
    }
    return JAM.call(Element.setStyle, Element, [element$$107, styles$$2], JAM.policy.p1);
  }
  function isDetached(element$$111) {
    var v1225 = element$$111 !== document.body;
    if (v1225) {
      v1225 = !JAM.call(Element.descendantOf, Element, [element$$111, document.body], JAM.policy.p1);
    }
    return v1225;
  }
  if ("currentStyle" in document.documentElement) {
    getRawStyle = getRawStyle_IE;
  }
  var hasLayout = Prototype.K;
  if ("currentStyle" in document.documentElement) {
    hasLayout = v135;
  }
  var v1228 = Element;
  var v3993 = JAM.call(Class.create, Class, [Hash, {initialize:v137, _set:v138, set:v139, get:v140, _begin:v141, _end:v142, _compute:v143, _isPrepared:v144, _setPrepared:v145, toObject:v147, toHash:v148, toCSS:v150, inspect:v151}], JAM.policy.p1);
  v1228.Layout = v3993;
  JAM.call(Object.extend, Object, [Element.Layout, {PROPERTIES:JAM.call($w, null, ["height width top left right bottom border-left border-right border-top border-bottom padding-left padding-right padding-top padding-bottom margin-top margin-bottom margin-left margin-right padding-box-width padding-box-height border-box-width border-box-height margin-box-width margin-box-height"], JAM.policy.p1), COMPOSITE_PROPERTIES:JAM.call($w, null, ["padding-box-width padding-box-height margin-box-width margin-box-height border-box-width border-box-height"], 
  JAM.policy.p1), COMPUTATIONS:{"height":v152, "width":v153, "padding-box-height":v154, "padding-box-width":v155, "border-box-height":v156, "border-box-width":v157, "margin-box-height":v158, "margin-box-width":v159, "top":v160, "bottom":v161, "left":v162, "right":v163, "padding-top":v164, "padding-bottom":v165, "padding-left":v166, "padding-right":v167, "border-top":v168, "border-bottom":v169, "border-left":v170, "border-right":v171, "margin-top":v172, "margin-bottom":v173, "margin-left":v174, "margin-right":v175}}], 
  JAM.policy.p1);
  if ("getBoundingClientRect" in document.documentElement) {
    JAM.call(Object.extend, Object, [Element.Layout.COMPUTATIONS, {"right":v176, "bottom":v177}], JAM.policy.p1);
  }
  var v1234 = Element;
  var v3994 = JAM.call(Class.create, Class, [{initialize:v178, relativeTo:v179, inspect:v180, toString:v181, toArray:v182}], JAM.policy.p1);
  v1234.Offset = v3994;
  if (Prototype.Browser.IE) {
    getOffsetParent = JAM.call(getOffsetParent.wrap, getOffsetParent, [v183], JAM.policy.p1);
    positionedOffset = JAM.call(positionedOffset.wrap, positionedOffset, [v184], JAM.policy.p1);
  } else {
    if (Prototype.Browser.Webkit) {
      cumulativeOffset = v185;
    }
  }
  JAM.call(Element.addMethods, Element, [{getLayout:getLayout, measure:measure, getWidth:getWidth, getHeight:getHeight, getDimensions:getDimensions, getOffsetParent:getOffsetParent, cumulativeOffset:cumulativeOffset, positionedOffset:positionedOffset, cumulativeScrollOffset:cumulativeScrollOffset, viewportOffset:viewportOffset, absolutize:absolutize, relativize:relativize, scrollTo:scrollTo, makePositioned:makePositioned, undoPositioned:undoPositioned, makeClipping:makeClipping, undoClipping:undoClipping, 
  clonePosition:clonePosition}], JAM.policy.p1);
  if ("getBoundingClientRect" in document.documentElement) {
    JAM.call(Element.addMethods, Element, [{viewportOffset:v186}], JAM.policy.p1);
  }
  return;
}
function v134(GLOBAL) {
  function v133() {
    if (Prototype.BrowserFeatures.ElementExtensions) {
      return;
    }
    JAM.call(Object.extend, Object, [Methods, Element$$1.Methods], JAM.policy.p1);
    JAM.call(Object.extend, Object, [Methods, Element$$1.Methods.Simulated], JAM.policy.p1);
    EXTENDED = {};
    return;
  }
  function v132(element$$84, value$$78) {
    var v1243 = element$$84.style;
    var v2619;
    if (value$$78) {
      v2619 = value$$78;
    } else {
      v2619 = "";
    }
    v1243.cssText = v2619;
    return;
  }
  function v131(element$$83, value$$77) {
    element$$83.checked = !!value$$77;
    return;
  }
  function v130(element$$82) {
    return element$$82.title;
  }
  function v129(element$$81) {
    var v1245 = element$$81.style.cssText;
    return JAM.call(v1245.toLowerCase, v1245, [], JAM.policy.p1);
  }
  function v128(element$$80, attribute$$7) {
    var value$$76 = JAM.call(element$$80.getAttribute, element$$80, [attribute$$7], JAM.policy.p1);
    if (!value$$76) {
      return null;
    }
    return JAM.call(value$$76.strip, value$$76, [], JAM.policy.p1);
  }
  function v127(element$$79, attribute$$6) {
    var value$$75 = JAM.call(element$$79.getAttribute, element$$79, [attribute$$6], JAM.policy.p1);
    if (!value$$75) {
      return null;
    }
    value$$75 = JAM.call(value$$75.toString, value$$75, [], JAM.policy.p1);
    value$$75 = JAM.call(value$$75.split, value$$75, ["{"], JAM.policy.p1)[1];
    value$$75 = JAM.call(value$$75.split, value$$75, ["}"], JAM.policy.p1)[0];
    return JAM.call(value$$75.strip, value$$75, [], JAM.policy.p1);
  }
  function v126() {
    JAM.call(DIV.setAttribute, DIV, ["onclick", Prototype.emptyFunction], JAM.policy.p1);
    var value$$74 = JAM.call(DIV.getAttribute, DIV, ["onclick"], JAM.policy.p1);
    var isFunction$$1 = typeof value$$74 === "function";
    JAM.call(DIV.removeAttribute, DIV, ["onclick"], JAM.policy.p1);
    return isFunction$$1;
  }
  function v125(element$$78, node$$14) {
    var v1252 = element$$78.parentNode;
    JAM.call(v1252.insertBefore, v1252, [node$$14, element$$78.nextSibling], JAM.policy.p1);
    return;
  }
  function v124(element$$77, node$$13) {
    JAM.call(element$$77.appendChild, element$$77, [node$$13], JAM.policy.p1);
    return;
  }
  function v123(element$$76, node$$12) {
    JAM.call(element$$76.insertBefore, element$$76, [node$$12, element$$76.firstChild], JAM.policy.p1);
    return;
  }
  function v122(element$$75, node$$11) {
    var v1255 = element$$75.parentNode;
    JAM.call(v1255.insertBefore, v1255, [node$$11, element$$75], JAM.policy.p1);
    return;
  }
  function v121() {
    var s$$2 = JAM.call(document.createElement, document, ["script"], JAM.policy.p1);
    var isBuggy$$4 = false;
    try {
      JAM.call(s$$2.appendChild, s$$2, [JAM.call(document.createTextNode, document, [""], JAM.policy.p1)], JAM.policy.p1);
      var v1257 = !s$$2.firstChild;
      if (!v1257) {
        var v2622 = s$$2.firstChild;
        if (v2622) {
          v2622 = s$$2.firstChild.nodeType !== 3;
        }
        v1257 = v2622;
      }
      isBuggy$$4 = v1257;
    } catch (e$$23) {
      isBuggy$$4 = true;
    }
    s$$2 = null;
    return isBuggy$$4;
  }
  function v120() {
    try {
      var el$$4 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
      JAM.set(el$$4, "innerHTML", "<link />");
      var isBuggy$$3 = el$$4.childNodes.length === 0;
      el$$4 = null;
      return isBuggy$$3;
    } catch (e$$22) {
      return true;
    }
    return;
  }
  function v119() {
    try {
      var el$$3 = JAM.call(document.createElement, document, ["table"], JAM.policy.p1);
      var v2625 = el$$3;
      if (v2625) {
        v2625 = el$$3.tBodies;
      }
      if (v2625) {
        JAM.set(el$$3, "innerHTML", "<tbody><tr><td>test</td></tr></tbody>");
        var isBuggy$$2 = typeof el$$3.tBodies[0] == "undefined";
        el$$3 = null;
        return isBuggy$$2;
      }
    } catch (e$$21) {
      return true;
    }
    return;
  }
  function v118() {
    var el$$2 = JAM.call(document.createElement, document, ["select"], JAM.policy.p1);
    var isBuggy$$1 = true;
    JAM.set(el$$2, "innerHTML", '<option value="test">test</option>');
    var v2627 = el$$2.options;
    if (v2627) {
      v2627 = el$$2.options[0];
    }
    if (v2627) {
      var v2628 = el$$2.options[0].nodeName;
      isBuggy$$1 = JAM.call(v2628.toUpperCase, v2628, [], JAM.policy.p1) !== "OPTION";
    }
    el$$2 = null;
    return isBuggy$$1;
  }
  function v117() {
    try {
      var el$$1 = JAM.call(document.createElement, document, ['<input name="x">'], JAM.policy.p1);
      var v3374 = el$$1.tagName;
      var v1263 = JAM.call(v3374.toLowerCase, v3374, [], JAM.policy.p1) === "input";
      if (v1263) {
        v1263 = el$$1.name === "x";
      }
      return v1263;
    } catch (err) {
      return false;
    }
    return;
  }
  function $$$1(element$$3) {
    if (arguments.length > 1) {
      var i$$17 = 0;
      var elements = [];
      var length$$28 = arguments.length;
      var v1265 = i$$17 < length$$28;
      for (;v1265;) {
        JAM.call(elements.push, elements, [JAM.call($$$1, null, [arguments[i$$17]], JAM.policy.p1)], JAM.policy.p1);
        i$$17 = i$$17 + 1;
        v1265 = i$$17 < length$$28;
      }
      return elements;
    }
    if (JAM.call(Object.isString, Object, [element$$3], JAM.policy.p1)) {
      element$$3 = JAM.call(document.getElementById, document, [element$$3], JAM.policy.p1);
    }
    return JAM.call(Element$$1.extend, Element$$1, [element$$3], JAM.policy.p1);
  }
  function Element$$1(tagName$$2, attributes$$1) {
    attributes$$1 = attributes$$1 || {};
    tagName$$2 = JAM.call(tagName$$2.toLowerCase, tagName$$2, [], JAM.policy.p1);
    var v2633 = HAS_EXTENDED_CREATE_ELEMENT_SYNTAX;
    if (v2633) {
      v2633 = attributes$$1.name;
    }
    if (v2633) {
      tagName$$2 = "<" + tagName$$2 + ' name="' + attributes$$1.name + '">';
      delete attributes$$1.name;
      return JAM.call(Element$$1.writeAttribute, Element$$1, [JAM.call(document.createElement, document, [tagName$$2], JAM.policy.p1), attributes$$1], JAM.policy.p1);
    }
    if (!ELEMENT_CACHE[tagName$$2]) {
      var v1271 = ELEMENT_CACHE;
      var v1272 = tagName$$2;
      var v3995 = JAM.call(Element$$1.extend, Element$$1, [JAM.call(document.createElement, document, [tagName$$2], JAM.policy.p1)], JAM.policy.p1);
      JAM.set(v1271, v1272, v3995, JAM.policy.p2);
    }
    var JSCompiler_inline_result$$3;
    JSCompiler_inline_label_shouldUseCreationCache_7: {
      if (tagName$$2 === "select") {
        JSCompiler_inline_result$$3 = false;
        break JSCompiler_inline_label_shouldUseCreationCache_7;
      }
      if ("type" in attributes$$1) {
        JSCompiler_inline_result$$3 = false;
        break JSCompiler_inline_label_shouldUseCreationCache_7;
      }
      JSCompiler_inline_result$$3 = true;
    }
    var v1276;
    if (JSCompiler_inline_result$$3) {
      var v2638 = ELEMENT_CACHE[tagName$$2];
      v1276 = JAM.call(v2638.cloneNode, v2638, [false], JAM.policy.p1);
    } else {
      v1276 = JAM.call(document.createElement, document, [tagName$$2], JAM.policy.p1);
    }
    var node$$2 = v1276;
    return JAM.call(Element$$1.writeAttribute, Element$$1, [node$$2, attributes$$1], JAM.policy.p1);
  }
  function inspect$$5(element$$4) {
    element$$4 = JAM.call($$$1, null, [element$$4], JAM.policy.p1);
    var v2639 = element$$4.tagName;
    var result$$7 = "<" + JAM.call(v2639.toLowerCase, v2639, [], JAM.policy.p1);
    var attribute;
    var value$$63;
    var property$$8;
    for (property$$8 in INSPECT_ATTRIBUTES) {
      attribute = INSPECT_ATTRIBUTES[property$$8];
      var v2640 = element$$4[property$$8];
      if (!v2640) {
        v2640 = "";
      }
      var v1278 = v2640;
      value$$63 = JAM.call(v1278.toString, v1278, [], JAM.policy.p1);
      if (value$$63) {
        result$$7 = result$$7 + (" " + attribute + "=" + JAM.call(value$$63.inspect, value$$63, [true], JAM.policy.p1));
      }
    }
    return result$$7 + ">";
  }
  function visible(element$$5) {
    return JAM.call($$$1, null, [element$$5], JAM.policy.p1).style.display !== "none";
  }
  function toggle(element$$6, bool) {
    element$$6 = JAM.call($$$1, null, [element$$6], JAM.policy.p1);
    if (JAM.call(Object.isUndefined, Object, [bool], JAM.policy.p1)) {
      bool = !JAM.call(Element$$1.visible, Element$$1, [element$$6], JAM.policy.p1);
    }
    var v2644;
    if (bool) {
      v2644 = "show";
    } else {
      v2644 = "hide";
    }
    JAM.call(Element$$1[v2644], Element$$1, [element$$6], JAM.policy.p1);
    return element$$6;
  }
  function hide(element$$7) {
    element$$7 = JAM.call($$$1, null, [element$$7], JAM.policy.p1);
    element$$7.style.display = "none";
    return element$$7;
  }
  function show(element$$8) {
    element$$8 = JAM.call($$$1, null, [element$$8], JAM.policy.p1);
    element$$8.style.display = "";
    return element$$8;
  }
  function remove(element$$9) {
    element$$9 = JAM.call($$$1, null, [element$$9], JAM.policy.p1);
    var v1285 = element$$9.parentNode;
    JAM.call(v1285.removeChild, v1285, [element$$9], JAM.policy.p1);
    return element$$9;
  }
  function update$$2(element$$10, content) {
    element$$10 = JAM.call($$$1, null, [element$$10], JAM.policy.p1);
    var descendants$$1 = JAM.call(element$$10.getElementsByTagName, element$$10, ["*"], JAM.policy.p1);
    var i$$18 = descendants$$1.length;
    var v1287 = i$$18;
    i$$18 = i$$18 - 1;
    for (;v1287;) {
      JAM.call(purgeElement, null, [descendants$$1[i$$18]], JAM.policy.p1);
      v1287 = i$$18;
      i$$18 = i$$18 - 1;
    }
    var v2645 = content;
    if (v2645) {
      v2645 = content.toElement;
    }
    if (v2645) {
      content = JAM.call(content.toElement, content, [], JAM.policy.p1);
    }
    if (JAM.call(Object.isElement, Object, [content], JAM.policy.p1)) {
      var v1289 = JAM.call(element$$10.update, element$$10, [], JAM.policy.p1);
      return JAM.call(v1289.insert, v1289, [content], JAM.policy.p1);
    }
    content = JAM.call(Object.toHTML, Object, [content], JAM.policy.p1);
    var v1291 = element$$10.tagName;
    var tagName$$3 = JAM.call(v1291.toUpperCase, v1291, [], JAM.policy.p1);
    var v2646 = tagName$$3 === "SCRIPT";
    if (v2646) {
      v2646 = SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING;
    }
    if (v2646) {
      element$$10.text = content;
      return element$$10;
    }
    if (ANY_INNERHTML_BUGGY) {
      if (tagName$$3 in INSERTION_TRANSLATIONS.tags) {
        var v1294 = element$$10.firstChild;
        for (;v1294;) {
          JAM.call(element$$10.removeChild, element$$10, [element$$10.firstChild], JAM.policy.p1);
          v1294 = element$$10.firstChild;
        }
        var nodes = JAM.call(getContentFromAnonymousElement, null, [tagName$$3, JAM.call(content.stripScripts, content, [], JAM.policy.p1)], JAM.policy.p1);
        i$$18 = 0;
        var node$$3;
        var v1296 = node$$3 = nodes[i$$18];
        for (;v1296;) {
          JAM.call(element$$10.appendChild, element$$10, [node$$3], JAM.policy.p1);
          i$$18 = i$$18 + 1;
          v1296 = node$$3 = nodes[i$$18];
        }
      } else {
        var v3380 = LINK_ELEMENT_INNERHTML_BUGGY;
        if (v3380) {
          v3380 = JAM.call(Object.isString, Object, [content], JAM.policy.p1);
        }
        var v2648 = v3380;
        if (v2648) {
          v2648 = JAM.call(content.indexOf, content, ["<link"], JAM.policy.p1) > -1;
        }
        if (v2648) {
          var v1298 = element$$10.firstChild;
          for (;v1298;) {
            JAM.call(element$$10.removeChild, element$$10, [element$$10.firstChild], JAM.policy.p1);
            v1298 = element$$10.firstChild;
          }
          nodes = JAM.call(getContentFromAnonymousElement, null, [tagName$$3, JAM.call(content.stripScripts, content, [], JAM.policy.p1), true], JAM.policy.p1);
          i$$18 = 0;
          var v1300 = node$$3 = nodes[i$$18];
          for (;v1300;) {
            JAM.call(element$$10.appendChild, element$$10, [node$$3], JAM.policy.p1);
            i$$18 = i$$18 + 1;
            v1300 = node$$3 = nodes[i$$18];
          }
        } else {
          var v1301 = element$$10;
          var v3996 = JAM.call(content.stripScripts, content, [], JAM.policy.p1);
          JAM.set(v1301, "innerHTML", v3996);
        }
      }
    } else {
      var v1304 = element$$10;
      var v3997 = JAM.call(content.stripScripts, content, [], JAM.policy.p1);
      JAM.set(v1304, "innerHTML", v3997);
    }
    var v2649 = content.evalScripts;
    var v1305 = JAM.call(v2649.bind, v2649, [content], JAM.policy.p1);
    JAM.call(v1305.defer, v1305, [], JAM.policy.p1);
    return element$$10;
  }
  function replace(element$$11, content$$1) {
    element$$11 = JAM.call($$$1, null, [element$$11], JAM.policy.p1);
    var v2650 = content$$1;
    if (v2650) {
      v2650 = content$$1.toElement;
    }
    if (v2650) {
      content$$1 = JAM.call(content$$1.toElement, content$$1, [], JAM.policy.p1);
    } else {
      if (!JAM.call(Object.isElement, Object, [content$$1], JAM.policy.p1)) {
        content$$1 = JAM.call(Object.toHTML, Object, [content$$1], JAM.policy.p1);
        var v1306 = element$$11.ownerDocument;
        var range$$5 = JAM.call(v1306.createRange, v1306, [], JAM.policy.p1);
        JAM.call(range$$5.selectNode, range$$5, [element$$11], JAM.policy.p1);
        var v2652 = content$$1.evalScripts;
        var v1307 = JAM.call(v2652.bind, v2652, [content$$1], JAM.policy.p1);
        JAM.call(v1307.defer, v1307, [], JAM.policy.p1);
        content$$1 = JAM.call(range$$5.createContextualFragment, range$$5, [JAM.call(content$$1.stripScripts, content$$1, [], JAM.policy.p1)], JAM.policy.p1);
      }
    }
    var v1311 = element$$11.parentNode;
    JAM.call(v1311.replaceChild, v1311, [content$$1, element$$11], JAM.policy.p1);
    return element$$11;
  }
  function replace_IE(element$$12, content$$2) {
    function v116(node$$5) {
      JAM.call(parent$$1.appendChild, parent$$1, [node$$5], JAM.policy.p1);
      return;
    }
    function v115(node$$4) {
      JAM.call(parent$$1.insertBefore, parent$$1, [node$$4, nextSibling], JAM.policy.p1);
      return;
    }
    element$$12 = JAM.call($$$1, null, [element$$12], JAM.policy.p1);
    var v2653 = content$$2;
    if (v2653) {
      v2653 = content$$2.toElement;
    }
    if (v2653) {
      content$$2 = JAM.call(content$$2.toElement, content$$2, [], JAM.policy.p1);
    }
    if (JAM.call(Object.isElement, Object, [content$$2], JAM.policy.p1)) {
      var v1313 = element$$12.parentNode;
      JAM.call(v1313.replaceChild, v1313, [content$$2, element$$12], JAM.policy.p1);
      return element$$12;
    }
    content$$2 = JAM.call(Object.toHTML, Object, [content$$2], JAM.policy.p1);
    var parent$$1 = element$$12.parentNode;
    var v1315 = parent$$1.tagName;
    var tagName$$4 = JAM.call(v1315.toUpperCase, v1315, [], JAM.policy.p1);
    if (tagName$$4 in INSERTION_TRANSLATIONS.tags) {
      var nextSibling = JAM.call(Element$$1.next, Element$$1, [element$$12], JAM.policy.p1);
      var fragments = JAM.call(getContentFromAnonymousElement, null, [tagName$$4, JAM.call(content$$2.stripScripts, content$$2, [], JAM.policy.p1)], JAM.policy.p1);
      JAM.call(parent$$1.removeChild, parent$$1, [element$$12], JAM.policy.p1);
      var iterator$$26;
      if (nextSibling) {
        iterator$$26 = v115;
      } else {
        iterator$$26 = v116;
      }
      JAM.call(fragments.each, fragments, [iterator$$26], JAM.policy.p1);
    } else {
      var v1317 = element$$12;
      var v3998 = JAM.call(content$$2.stripScripts, content$$2, [], JAM.policy.p1);
      JAM.set(v1317, "outerHTML", v3998);
    }
    var v2655 = content$$2.evalScripts;
    var v1319 = JAM.call(v2655.bind, v2655, [content$$2], JAM.policy.p1);
    JAM.call(v1319.defer, v1319, [], JAM.policy.p1);
    return element$$12;
  }
  function isContent(content$$3) {
    var v2656 = JAM.call(Object.isUndefined, Object, [content$$3], JAM.policy.p1);
    if (!v2656) {
      v2656 = content$$3 === null;
    }
    if (v2656) {
      return false;
    }
    var v2657 = JAM.call(Object.isString, Object, [content$$3], JAM.policy.p1);
    if (!v2657) {
      v2657 = JAM.call(Object.isNumber, Object, [content$$3], JAM.policy.p1);
    }
    if (v2657) {
      return true;
    }
    if (JAM.call(Object.isElement, Object, [content$$3], JAM.policy.p1)) {
      return true;
    }
    var v2658 = content$$3.toElement;
    if (!v2658) {
      v2658 = content$$3.toHTML;
    }
    if (v2658) {
      return true;
    }
    return false;
  }
  function insert(element$$14, insertions) {
    element$$14 = JAM.call($$$1, null, [element$$14], JAM.policy.p1);
    if (JAM.call(isContent, null, [insertions], JAM.policy.p1)) {
      insertions = {bottom:insertions};
    }
    var position$$1;
    for (position$$1 in insertions) {
      JSCompiler_inline_label_insertContentAt_16: {
        var element$$inline_8 = element$$14;
        var content$$inline_9 = insertions[position$$1];
        var position$$inline_10 = position$$1;
        position$$inline_10 = JAM.call(position$$inline_10.toLowerCase, position$$inline_10, [], JAM.policy.p1);
        var method$$inline_11 = INSERTION_TRANSLATIONS[position$$inline_10];
        var v2659 = content$$inline_9;
        if (v2659) {
          v2659 = content$$inline_9.toElement;
        }
        if (v2659) {
          content$$inline_9 = JAM.call(content$$inline_9.toElement, content$$inline_9, [], JAM.policy.p1);
        }
        if (JAM.call(Object.isElement, Object, [content$$inline_9], JAM.policy.p1)) {
          JAM.call(method$$inline_11, null, [element$$inline_8, content$$inline_9], JAM.policy.p1);
          break JSCompiler_inline_label_insertContentAt_16;
        }
        content$$inline_9 = JAM.call(Object.toHTML, Object, [content$$inline_9], JAM.policy.p1);
        var v3385;
        var v3860 = position$$inline_10 === "before";
        if (!v3860) {
          v3860 = position$$inline_10 === "after";
        }
        if (v3860) {
          v3385 = element$$inline_8.parentNode;
        } else {
          v3385 = element$$inline_8;
        }
        var v1327 = v3385.tagName;
        var tagName$$inline_12 = JAM.call(v1327.toUpperCase, v1327, [], JAM.policy.p1);
        var childNodes$$inline_13 = JAM.call(getContentFromAnonymousElement, null, [tagName$$inline_12, JAM.call(content$$inline_9.stripScripts, content$$inline_9, [], JAM.policy.p1)], JAM.policy.p1);
        var v2661 = position$$inline_10 === "top";
        if (!v2661) {
          v2661 = position$$inline_10 === "after";
        }
        if (v2661) {
          JAM.call(childNodes$$inline_13.reverse, childNodes$$inline_13, [], JAM.policy.p1);
        }
        var i$$inline_14 = 0;
        var node$$inline_15 = void 0;
        var v1330 = node$$inline_15 = childNodes$$inline_13[i$$inline_14];
        for (;v1330;) {
          JAM.call(method$$inline_11, null, [element$$inline_8, node$$inline_15], JAM.policy.p1);
          i$$inline_14 = i$$inline_14 + 1;
          v1330 = node$$inline_15 = childNodes$$inline_13[i$$inline_14];
        }
        var v2662 = content$$inline_9.evalScripts;
        var v1331 = JAM.call(v2662.bind, v2662, [content$$inline_9], JAM.policy.p1);
        JAM.call(v1331.defer, v1331, [], JAM.policy.p1);
      }
    }
    return element$$14;
  }
  function wrap$$1(element$$15, wrapper$$1, attributes$$2) {
    element$$15 = JAM.call($$$1, null, [element$$15], JAM.policy.p1);
    if (JAM.call(Object.isElement, Object, [wrapper$$1], JAM.policy.p1)) {
      var v1332 = JAM.call($$$1, null, [wrapper$$1], JAM.policy.p1);
      JAM.call(v1332.writeAttribute, v1332, [attributes$$2 || {}], JAM.policy.p1);
    } else {
      if (JAM.call(Object.isString, Object, [wrapper$$1], JAM.policy.p1)) {
        wrapper$$1 = JAM.new(Element$$1, [wrapper$$1, attributes$$2], JAM.policy.p1);
      } else {
        wrapper$$1 = JAM.new(Element$$1, ["div", wrapper$$1], JAM.policy.p1);
      }
    }
    if (element$$15.parentNode) {
      var v1336 = element$$15.parentNode;
      JAM.call(v1336.replaceChild, v1336, [wrapper$$1, element$$15], JAM.policy.p1);
    }
    JAM.call(wrapper$$1.appendChild, wrapper$$1, [element$$15], JAM.policy.p1);
    return wrapper$$1;
  }
  function cleanWhitespace(element$$16) {
    element$$16 = JAM.call($$$1, null, [element$$16], JAM.policy.p1);
    var node$$7 = element$$16.firstChild;
    for (;node$$7;) {
      var nextNode = node$$7.nextSibling;
      var v2663 = node$$7.nodeType === Node.TEXT_NODE;
      if (v2663) {
        v2663 = !JAM.call(/\S/.test, /\S/, [node$$7.nodeValue], JAM.policy.p1);
      }
      if (v2663) {
        JAM.call(element$$16.removeChild, element$$16, [node$$7], JAM.policy.p1);
      }
      node$$7 = nextNode;
    }
    return element$$16;
  }
  function empty$$1(element$$17) {
    var v1339 = JAM.call($$$1, null, [element$$17], JAM.policy.p1).innerHTML;
    return JAM.call(v1339.blank, v1339, [], JAM.policy.p1);
  }
  function getContentFromAnonymousElement(tagName$$6, html, force) {
    var t = INSERTION_TRANSLATIONS.tags[tagName$$6];
    var div$$1 = DIV;
    var workaround = !!t;
    var v2665 = !workaround;
    if (v2665) {
      v2665 = force;
    }
    if (v2665) {
      workaround = true;
      t = ["", "", 0];
    }
    if (workaround) {
      JAM.set(div$$1, "innerHTML", "&#160;" + t[0] + html + t[1]);
      JAM.call(div$$1.removeChild, div$$1, [div$$1.firstChild], JAM.policy.p1);
      var i$$20 = t[2];
      var v1346 = i$$20;
      i$$20 = i$$20 - 1;
      for (;v1346;) {
        div$$1 = div$$1.firstChild;
        v1346 = i$$20;
        i$$20 = i$$20 - 1;
      }
    } else {
      JAM.set(div$$1, "innerHTML", html);
    }
    return JAM.call($A, null, [div$$1.childNodes], JAM.policy.p1);
  }
  function clone$$3(element$$18, deep$$2) {
    if (!(element$$18 = JAM.call($$$1, null, [element$$18], JAM.policy.p1))) {
      return;
    }
    var clone$$4 = JAM.call(element$$18.cloneNode, element$$18, [deep$$2], JAM.policy.p1);
    if (!HAS_UNIQUE_ID_PROPERTY) {
      clone$$4._prototypeUID = UNDEFINED;
      if (deep$$2) {
        var descendants$$2 = JAM.call(Element$$1.select, Element$$1, [clone$$4, "*"], JAM.policy.p1);
        var i$$21 = descendants$$2.length;
        var v1350 = i$$21;
        i$$21 = i$$21 - 1;
        for (;v1350;) {
          descendants$$2[i$$21]._prototypeUID = UNDEFINED;
          v1350 = i$$21;
          i$$21 = i$$21 - 1;
        }
      }
    }
    return JAM.call(Element$$1.extend, Element$$1, [clone$$4], JAM.policy.p1);
  }
  function purgeElement(element$$19) {
    var uid = JAM.call(getUniqueElementID, null, [element$$19], JAM.policy.p1);
    if (uid) {
      JAM.call(Element$$1.stopObserving, Element$$1, [element$$19], JAM.policy.p1);
      if (!HAS_UNIQUE_ID_PROPERTY) {
        element$$19._prototypeUID = UNDEFINED;
      }
      delete Element$$1.Storage[uid];
    }
    return;
  }
  function purgeCollection(elements$$1) {
    var i$$22 = elements$$1.length;
    var v1355 = i$$22;
    i$$22 = i$$22 - 1;
    for (;v1355;) {
      JAM.call(purgeElement, null, [elements$$1[i$$22]], JAM.policy.p1);
      v1355 = i$$22;
      i$$22 = i$$22 - 1;
    }
    return;
  }
  function purgeCollection_IE(elements$$2) {
    var i$$23 = elements$$2.length;
    var element$$20;
    var uid$$1;
    var v1358 = i$$23;
    i$$23 = i$$23 - 1;
    for (;v1358;) {
      element$$20 = elements$$2[i$$23];
      uid$$1 = JAM.call(getUniqueElementID, null, [element$$20], JAM.policy.p1);
      delete Element$$1.Storage[uid$$1];
      delete Event.cache[uid$$1];
      v1358 = i$$23;
      i$$23 = i$$23 - 1;
    }
    return;
  }
  function purge(element$$21) {
    if (!(element$$21 = JAM.call($$$1, null, [element$$21], JAM.policy.p1))) {
      return;
    }
    JAM.call(purgeElement, null, [element$$21], JAM.policy.p1);
    var descendants$$3 = JAM.call(element$$21.getElementsByTagName, element$$21, ["*"], JAM.policy.p1);
    var i$$24 = descendants$$3.length;
    var v1361 = i$$24;
    i$$24 = i$$24 - 1;
    for (;v1361;) {
      JAM.call(purgeElement, null, [descendants$$3[i$$24]], JAM.policy.p1);
      v1361 = i$$24;
      i$$24 = i$$24 - 1;
    }
    return null;
  }
  function recursivelyCollect(element$$22, property$$9, maximumLength) {
    element$$22 = JAM.call($$$1, null, [element$$22], JAM.policy.p1);
    maximumLength = maximumLength || -1;
    var elements$$3 = [];
    var v1365 = element$$22 = element$$22[property$$9];
    for (;v1365;) {
      if (element$$22.nodeType === Node.ELEMENT_NODE) {
        JAM.call(elements$$3.push, elements$$3, [JAM.call(Element$$1.extend, Element$$1, [element$$22], JAM.policy.p1)], JAM.policy.p1);
      }
      if (elements$$3.length === maximumLength) {
        break;
      }
      v1365 = element$$22 = element$$22[property$$9];
    }
    return elements$$3;
  }
  function ancestors(element$$23) {
    return JAM.call(recursivelyCollect, null, [element$$23, "parentNode"], JAM.policy.p1);
  }
  function descendants(element$$24) {
    return JAM.call(Element$$1.select, Element$$1, [element$$24, "*"], JAM.policy.p1);
  }
  function firstDescendant(element$$25) {
    element$$25 = JAM.call($$$1, null, [element$$25], JAM.policy.p1).firstChild;
    var v2672 = element$$25;
    if (v2672) {
      v2672 = element$$25.nodeType !== Node.ELEMENT_NODE;
    }
    var v1367 = v2672;
    for (;v1367;) {
      element$$25 = element$$25.nextSibling;
      var v2673 = element$$25;
      if (v2673) {
        v2673 = element$$25.nodeType !== Node.ELEMENT_NODE;
      }
      v1367 = v2673;
    }
    return JAM.call($$$1, null, [element$$25], JAM.policy.p1);
  }
  function immediateDescendants(element$$26) {
    var results$$11 = [];
    var child$$1 = JAM.call($$$1, null, [element$$26], JAM.policy.p1).firstChild;
    for (;child$$1;) {
      if (child$$1.nodeType === Node.ELEMENT_NODE) {
        JAM.call(results$$11.push, results$$11, [JAM.call(Element$$1.extend, Element$$1, [child$$1], JAM.policy.p1)], JAM.policy.p1);
      }
      child$$1 = child$$1.nextSibling;
    }
    return results$$11;
  }
  function previousSiblings(element$$27) {
    return JAM.call(recursivelyCollect, null, [element$$27, "previousSibling"], JAM.policy.p1);
  }
  function nextSiblings(element$$28) {
    return JAM.call(recursivelyCollect, null, [element$$28, "nextSibling"], JAM.policy.p1);
  }
  function siblings(element$$29) {
    element$$29 = JAM.call($$$1, null, [element$$29], JAM.policy.p1);
    var previous$$1 = JAM.call(previousSiblings, null, [element$$29], JAM.policy.p1);
    var next$$1 = JAM.call(nextSiblings, null, [element$$29], JAM.policy.p1);
    var v1371 = JAM.call(previous$$1.reverse, previous$$1, [], JAM.policy.p1);
    return JAM.call(v1371.concat, v1371, [next$$1], JAM.policy.p1);
  }
  function match$$7(element$$30, selector) {
    element$$30 = JAM.call($$$1, null, [element$$30], JAM.policy.p1);
    if (JAM.call(Object.isString, Object, [selector], JAM.policy.p1)) {
      var v1372 = Prototype.Selector;
      return JAM.call(v1372.match, v1372, [element$$30, selector], JAM.policy.p1);
    }
    return JAM.call(selector.match, selector, [element$$30], JAM.policy.p1);
  }
  function _recursivelyFind(element$$31, property$$10, expression, index$$55) {
    element$$31 = JAM.call($$$1, null, [element$$31], JAM.policy.p1);
    expression = expression || 0;
    index$$55 = index$$55 || 0;
    if (JAM.call(Object.isNumber, Object, [expression], JAM.policy.p1)) {
      index$$55 = expression;
      expression = null;
    }
    var v1378 = element$$31 = element$$31[property$$10];
    for (;v1378;) {
      if (element$$31.nodeType !== 1) {
        v1378 = element$$31 = element$$31[property$$10];
        continue;
      }
      var v2677 = expression;
      if (v2677) {
        var v3731 = Prototype.Selector;
        v2677 = !JAM.call(v3731.match, v3731, [element$$31, expression], JAM.policy.p1);
      }
      if (v2677) {
        v1378 = element$$31 = element$$31[property$$10];
        continue;
      }
      if ((index$$55 = index$$55 - 1) >= 0) {
        v1378 = element$$31 = element$$31[property$$10];
        continue;
      }
      return JAM.call(Element$$1.extend, Element$$1, [element$$31], JAM.policy.p1);
    }
    return;
  }
  function up(element$$32, expression$$1, index$$56) {
    element$$32 = JAM.call($$$1, null, [element$$32], JAM.policy.p1);
    if (arguments.length === 1) {
      return JAM.call($$$1, null, [element$$32.parentNode], JAM.policy.p1);
    }
    return JAM.call(_recursivelyFind, null, [element$$32, "parentNode", expression$$1, index$$56], JAM.policy.p1);
  }
  function down(element$$33, expression$$2, index$$57) {
    element$$33 = JAM.call($$$1, null, [element$$33], JAM.policy.p1);
    expression$$2 = expression$$2 || 0;
    index$$57 = index$$57 || 0;
    if (JAM.call(Object.isNumber, Object, [expression$$2], JAM.policy.p1)) {
      index$$57 = expression$$2;
      expression$$2 = "*";
    }
    var v2680 = Prototype.Selector;
    var node$$8 = JAM.call(v2680.select, v2680, [expression$$2, element$$33], JAM.policy.p1)[index$$57];
    return JAM.call(Element$$1.extend, Element$$1, [node$$8], JAM.policy.p1);
  }
  function previous(element$$34, expression$$3, index$$58) {
    return JAM.call(_recursivelyFind, null, [element$$34, "previousSibling", expression$$3, index$$58], JAM.policy.p1);
  }
  function next(element$$35, expression$$4, index$$59) {
    return JAM.call(_recursivelyFind, null, [element$$35, "nextSibling", expression$$4, index$$59], JAM.policy.p1);
  }
  function select(element$$36) {
    element$$36 = JAM.call($$$1, null, [element$$36], JAM.policy.p1);
    var v1383 = JAM.call(SLICE.call, SLICE, [arguments, 1], JAM.policy.p1);
    var expressions = JAM.call(v1383.join, v1383, [", "], JAM.policy.p1);
    var v1384 = Prototype.Selector;
    return JAM.call(v1384.select, v1384, [expressions, element$$36], JAM.policy.p1);
  }
  function adjacent(element$$37) {
    element$$37 = JAM.call($$$1, null, [element$$37], JAM.policy.p1);
    var v1385 = JAM.call(SLICE.call, SLICE, [arguments, 1], JAM.policy.p1);
    var expressions$$1 = JAM.call(v1385.join, v1385, [", "], JAM.policy.p1);
    var siblings$$1 = JAM.call(Element$$1.siblings, Element$$1, [element$$37], JAM.policy.p1);
    var results$$12 = [];
    var i$$25 = 0;
    var sibling;
    var v1387 = sibling = siblings$$1[i$$25];
    for (;v1387;) {
      var v2681 = Prototype.Selector;
      if (JAM.call(v2681.match, v2681, [sibling, expressions$$1], JAM.policy.p1)) {
        JAM.call(results$$12.push, results$$12, [sibling], JAM.policy.p1);
      }
      i$$25 = i$$25 + 1;
      v1387 = sibling = siblings$$1[i$$25];
    }
    return results$$12;
  }
  function descendantOf_DOM(element$$38, ancestor$$1) {
    element$$38 = JAM.call($$$1, null, [element$$38], JAM.policy.p1);
    ancestor$$1 = JAM.call($$$1, null, [ancestor$$1], JAM.policy.p1);
    var v1389 = element$$38 = element$$38.parentNode;
    for (;v1389;) {
      if (element$$38 === ancestor$$1) {
        return true;
      }
      v1389 = element$$38 = element$$38.parentNode;
    }
    return false;
  }
  function descendantOf_contains(element$$39, ancestor$$2) {
    element$$39 = JAM.call($$$1, null, [element$$39], JAM.policy.p1);
    ancestor$$2 = JAM.call($$$1, null, [ancestor$$2], JAM.policy.p1);
    if (!ancestor$$2.contains) {
      return JAM.call(descendantOf_DOM, null, [element$$39, ancestor$$2], JAM.policy.p1);
    }
    var v1391 = JAM.call(ancestor$$2.contains, ancestor$$2, [element$$39], JAM.policy.p1);
    if (v1391) {
      v1391 = ancestor$$2 !== element$$39;
    }
    return v1391;
  }
  function descendantOf_compareDocumentPosition(element$$40, ancestor$$3) {
    element$$40 = JAM.call($$$1, null, [element$$40], JAM.policy.p1);
    ancestor$$3 = JAM.call($$$1, null, [ancestor$$3], JAM.policy.p1);
    return(JAM.call(element$$40.compareDocumentPosition, element$$40, [ancestor$$3], JAM.policy.p1) & 8) === 8;
  }
  function identify(element$$41) {
    element$$41 = JAM.call($$$1, null, [element$$41], JAM.policy.p1);
    var id = JAM.call(Element$$1.readAttribute, Element$$1, [element$$41, "id"], JAM.policy.p1);
    if (id) {
      return id;
    }
    var v1394 = JAM.call($$$1, null, [id], JAM.policy.p1);
    do {
      var v1393 = idCounter;
      idCounter = idCounter + 1;
      id = "anonymous_element_" + v1393;
      v1394 = JAM.call($$$1, null, [id], JAM.policy.p1);
    } while (v1394);
    JAM.call(Element$$1.writeAttribute, Element$$1, [element$$41, "id", id], JAM.policy.p1);
    return id;
  }
  function readAttribute(element$$42, name$$33) {
    var v1395 = JAM.call($$$1, null, [element$$42], JAM.policy.p1);
    return JAM.call(v1395.getAttribute, v1395, [name$$33], JAM.policy.p1);
  }
  function readAttribute_IE(element$$43, name$$34) {
    element$$43 = JAM.call($$$1, null, [element$$43], JAM.policy.p1);
    var table = ATTRIBUTE_TRANSLATIONS.read;
    if (table.values[name$$34]) {
      var v1396 = table.values;
      return JAM.call(v1396[name$$34], v1396, [element$$43, name$$34], JAM.policy.p1);
    }
    if (table.names[name$$34]) {
      name$$34 = table.names[name$$34];
    }
    if (JAM.call(name$$34.include, name$$34, [":"], JAM.policy.p1)) {
      var v2686 = !element$$43.attributes;
      if (!v2686) {
        v2686 = !element$$43.attributes[name$$34];
      }
      if (v2686) {
        return null;
      }
      return element$$43.attributes[name$$34].value;
    }
    return JAM.call(element$$43.getAttribute, element$$43, [name$$34], JAM.policy.p1);
  }
  function readAttribute_Opera(element$$44, name$$35) {
    if (name$$35 === "title") {
      return element$$44.title;
    }
    return JAM.call(element$$44.getAttribute, element$$44, [name$$35], JAM.policy.p1);
  }
  function writeAttribute(element$$45, name$$36, value$$64) {
    element$$45 = JAM.call($$$1, null, [element$$45], JAM.policy.p1);
    var attributes$$3 = {};
    var table$$1 = ATTRIBUTE_TRANSLATIONS.write;
    if (typeof name$$36 === "object") {
      attributes$$3 = name$$36;
    } else {
      var v1404 = attributes$$3;
      var v1405 = name$$36;
      var v2689;
      if (JAM.call(Object.isUndefined, Object, [value$$64], JAM.policy.p1)) {
        v2689 = true;
      } else {
        v2689 = value$$64;
      }
      JAM.set(v1404, v1405, v2689, JAM.policy.p2);
    }
    var attr$$1;
    for (attr$$1 in attributes$$3) {
      var v1407 = table$$1.names[attr$$1];
      if (!v1407) {
        v1407 = attr$$1;
      }
      name$$36 = v1407;
      value$$64 = attributes$$3[attr$$1];
      if (table$$1.values[attr$$1]) {
        var v1408 = table$$1.values;
        name$$36 = JAM.call(v1408[attr$$1], v1408, [element$$45, value$$64], JAM.policy.p1);
      }
      var v2693 = value$$64 === false;
      if (!v2693) {
        v2693 = value$$64 === null;
      }
      if (v2693) {
        JAM.call(element$$45.removeAttribute, element$$45, [name$$36], JAM.policy.p1);
      } else {
        if (value$$64 === true) {
          JAM.call(element$$45.setAttribute, element$$45, [name$$36, name$$36], JAM.policy.p1);
        } else {
          JAM.call(element$$45.setAttribute, element$$45, [name$$36, value$$64], JAM.policy.p1);
        }
      }
    }
    return element$$45;
  }
  function hasAttribute(element$$46, attribute$$1) {
    var v1412 = ATTRIBUTE_TRANSLATIONS.has[attribute$$1];
    if (!v1412) {
      v1412 = attribute$$1;
    }
    attribute$$1 = v1412;
    var v1413 = JAM.call($$$1, null, [element$$46], JAM.policy.p1);
    var node$$9 = JAM.call(v1413.getAttributeNode, v1413, [attribute$$1], JAM.policy.p1);
    var v3401 = node$$9;
    if (v3401) {
      v3401 = node$$9.specified;
    }
    return!!v3401;
  }
  function classNames$$1(element$$47) {
    return JAM.new(Element$$1.ClassNames, [element$$47], JAM.policy.p1);
  }
  function getRegExpForClassName(className) {
    if (regExpCache[className]) {
      return regExpCache[className];
    }
    var re = JAM.new(RegExp, ["(^|\\s+)" + className + "(\\s+|$)"], JAM.policy.p1);
    JAM.set(regExpCache, className, re, JAM.policy.p2);
    return re;
  }
  function hasClassName(element$$48, className$$1) {
    if (!(element$$48 = JAM.call($$$1, null, [element$$48], JAM.policy.p1))) {
      return;
    }
    var elementClassName = element$$48.className;
    if (elementClassName.length === 0) {
      return false;
    }
    if (elementClassName === className$$1) {
      return true;
    }
    var v1421 = JAM.call(getRegExpForClassName, null, [className$$1], JAM.policy.p1);
    return JAM.call(v1421.test, v1421, [elementClassName], JAM.policy.p1);
  }
  function addClassName(element$$49, className$$2) {
    if (!(element$$49 = JAM.call($$$1, null, [element$$49], JAM.policy.p1))) {
      return;
    }
    if (!JAM.call(hasClassName, null, [element$$49, className$$2], JAM.policy.p1)) {
      var v2702 = element$$49.className;
      var v3733;
      if (element$$49.className) {
        v3733 = " ";
      } else {
        v3733 = "";
      }
      element$$49.className = v2702 + (v3733 + className$$2);
    }
    return element$$49;
  }
  function removeClassName(element$$50, className$$3) {
    if (!(element$$50 = JAM.call($$$1, null, [element$$50], JAM.policy.p1))) {
      return;
    }
    var v1425 = element$$50;
    var v3403 = element$$50.className;
    var v2705 = JAM.call(v3403.replace, v3403, [JAM.call(getRegExpForClassName, null, [className$$3], JAM.policy.p1), " "], JAM.policy.p1);
    var v3999 = JAM.call(v2705.strip, v2705, [], JAM.policy.p1);
    v1425.className = v3999;
    return element$$50;
  }
  function toggleClassName(element$$51, className$$4, bool$$1) {
    if (!(element$$51 = JAM.call($$$1, null, [element$$51], JAM.policy.p1))) {
      return;
    }
    if (JAM.call(Object.isUndefined, Object, [bool$$1], JAM.policy.p1)) {
      bool$$1 = !JAM.call(hasClassName, null, [element$$51, className$$4], JAM.policy.p1);
    }
    var v2707;
    if (bool$$1) {
      v2707 = "addClassName";
    } else {
      v2707 = "removeClassName";
    }
    var method$$7 = Element$$1[v2707];
    return JAM.call(method$$7, null, [element$$51, className$$4], JAM.policy.p1);
  }
  function _getAttr(element$$52, attribute$$2) {
    return JAM.call(element$$52.getAttribute, element$$52, [attribute$$2], JAM.policy.p1);
  }
  function _getAttr2(element$$53, attribute$$3) {
    return JAM.call(element$$53.getAttribute, element$$53, [attribute$$3, 2], JAM.policy.p1);
  }
  function _getAttrNode(element$$54, attribute$$4) {
    var node$$10 = JAM.call(element$$54.getAttributeNode, element$$54, [attribute$$4], JAM.policy.p1);
    var v1430;
    if (node$$10) {
      v1430 = node$$10.value;
    } else {
      v1430 = "";
    }
    return v1430;
  }
  function _getFlag(element$$55, attribute$$5) {
    var v1431;
    var v3405 = JAM.call($$$1, null, [element$$55], JAM.policy.p1);
    if (JAM.call(v3405.hasAttribute, v3405, [attribute$$5], JAM.policy.p1)) {
      v1431 = attribute$$5;
    } else {
      v1431 = null;
    }
    return v1431;
  }
  function setStyle(element$$56, styles) {
    element$$56 = JAM.call($$$1, null, [element$$56], JAM.policy.p1);
    var elementStyle = element$$56.style;
    var match$$8;
    if (JAM.call(Object.isString, Object, [styles], JAM.policy.p1)) {
      elementStyle.cssText = elementStyle.cssText + (";" + styles);
      if (JAM.call(styles.include, styles, ["opacity"], JAM.policy.p1)) {
        var opacity = JAM.call(styles.match, styles, [/opacity:\s*(\d?\.?\d*)/], JAM.policy.p1)[1];
        JAM.call(Element$$1.setOpacity, Element$$1, [element$$56, opacity], JAM.policy.p1);
      }
      return element$$56;
    }
    var property$$11;
    for (property$$11 in styles) {
      if (property$$11 === "opacity") {
        JAM.call(Element$$1.setOpacity, Element$$1, [element$$56, styles[property$$11]], JAM.policy.p1);
      } else {
        var value$$65 = styles[property$$11];
        var v2711 = property$$11 === "float";
        if (!v2711) {
          v2711 = property$$11 === "cssFloat";
        }
        if (v2711) {
          var v1436;
          if (JAM.call(Object.isUndefined, Object, [elementStyle.styleFloat], JAM.policy.p1)) {
            v1436 = "cssFloat";
          } else {
            v1436 = "styleFloat";
          }
          property$$11 = v1436;
        }
        JAM.set(elementStyle, property$$11, value$$65, JAM.policy.p2);
      }
    }
    return element$$56;
  }
  function getStyle(element$$57, style$$2) {
    element$$57 = JAM.call($$$1, null, [element$$57], JAM.policy.p1);
    JSCompiler_inline_label_normalizeStyleName_18: {
      var v2713 = style$$2 === "float";
      if (!v2713) {
        v2713 = style$$2 === "styleFloat";
      }
      if (v2713) {
        style$$2 = "cssFloat";
        break JSCompiler_inline_label_normalizeStyleName_18;
      }
      style$$2 = JAM.call(style$$2.camelize, style$$2, [], JAM.policy.p1);
    }
    var value$$66 = element$$57.style[style$$2];
    var v2714 = !value$$66;
    if (!v2714) {
      v2714 = value$$66 === "auto";
    }
    if (v2714) {
      var v1441 = document.defaultView;
      var css = JAM.call(v1441.getComputedStyle, v1441, [element$$57, null], JAM.policy.p1);
      var v1442;
      if (css) {
        v1442 = css[style$$2];
      } else {
        v1442 = null;
      }
      value$$66 = v1442;
    }
    if (style$$2 === "opacity") {
      var v1444;
      if (value$$66) {
        v1444 = JAM.call(parseFloat, null, [value$$66], JAM.policy.p1);
      } else {
        v1444 = 1;
      }
      return v1444;
    }
    var v1446;
    if (value$$66 === "auto") {
      v1446 = null;
    } else {
      v1446 = value$$66;
    }
    return v1446;
  }
  function getStyle_IE(element$$59, style$$4) {
    element$$59 = JAM.call($$$1, null, [element$$59], JAM.policy.p1);
    JSCompiler_inline_label_normalizeStyleName_IE_20: {
      var v2716 = style$$4 === "float";
      if (!v2716) {
        v2716 = style$$4 === "cssFloat";
      }
      if (v2716) {
        style$$4 = "styleFloat";
        break JSCompiler_inline_label_normalizeStyleName_IE_20;
      }
      style$$4 = JAM.call(style$$4.camelize, style$$4, [], JAM.policy.p1);
    }
    var value$$67 = element$$59.style[style$$4];
    var v2717 = !value$$67;
    if (v2717) {
      v2717 = element$$59.currentStyle;
    }
    if (v2717) {
      value$$67 = element$$59.currentStyle[style$$4];
    }
    var v2718 = style$$4 === "opacity";
    if (v2718) {
      v2718 = !STANDARD_CSS_OPACITY_SUPPORTED;
    }
    if (v2718) {
      return JAM.call(getOpacity_IE, null, [element$$59], JAM.policy.p1);
    }
    if (value$$67 === "auto") {
      var v3411 = style$$4 === "width";
      if (!v3411) {
        v3411 = style$$4 === "height";
      }
      var v2719 = v3411;
      if (v2719) {
        v2719 = JAM.call(Element$$1.visible, Element$$1, [element$$59], JAM.policy.p1);
      }
      if (v2719) {
        return JAM.call(Element$$1.measure, Element$$1, [element$$59, style$$4], JAM.policy.p1) + "px";
      }
      return null;
    }
    return value$$67;
  }
  function setOpacity(element$$61, value$$68) {
    element$$61 = JAM.call($$$1, null, [element$$61], JAM.policy.p1);
    var v2720 = value$$68 == 1;
    if (!v2720) {
      v2720 = value$$68 === "";
    }
    if (v2720) {
      value$$68 = "";
    } else {
      if (value$$68 < 1E-5) {
        value$$68 = 0;
      }
    }
    element$$61.style.opacity = value$$68;
    return element$$61;
  }
  function setOpacity_IE(element$$62, value$$69) {
    if (STANDARD_CSS_OPACITY_SUPPORTED) {
      return JAM.call(setOpacity, null, [element$$62, value$$69], JAM.policy.p1);
    }
    var element$$inline_21 = JAM.call($$$1, null, [element$$62], JAM.policy.p1);
    if (!element$$inline_21.currentStyle.hasLayout) {
      element$$inline_21.style.zoom = 1;
    }
    element$$62 = element$$inline_21;
    var filter$$4 = JAM.call(Element$$1.getStyle, Element$$1, [element$$62, "filter"], JAM.policy.p1);
    var style$$5 = element$$62.style;
    var v2722 = value$$69 == 1;
    if (!v2722) {
      v2722 = value$$69 === "";
    }
    if (v2722) {
      var v1460 = filter$$4 || "";
      filter$$4 = JAM.call(v1460.replace, v1460, [/alpha\([^\)]*\)/gi, ""], JAM.policy.p1);
      if (filter$$4) {
        style$$5.filter = filter$$4;
      } else {
        JAM.call(style$$5.removeAttribute, style$$5, ["filter"], JAM.policy.p1);
      }
      return element$$62;
    }
    if (value$$69 < 1E-5) {
      value$$69 = 0;
    }
    var v1463 = style$$5;
    var v3862 = filter$$4 || "";
    v1463.filter = JAM.call(v3862.replace, v3862, [/alpha\([^\)]*\)/gi, ""], JAM.policy.p1) + "alpha(opacity=" + value$$69 * 100 + ")";
    return element$$62;
  }
  function getOpacity(element$$63) {
    return JAM.call(Element$$1.getStyle, Element$$1, [element$$63, "opacity"], JAM.policy.p1);
  }
  function getOpacity_IE(element$$64) {
    if (STANDARD_CSS_OPACITY_SUPPORTED) {
      return JAM.call(getOpacity, null, [element$$64], JAM.policy.p1);
    }
    var filter$$5 = JAM.call(Element$$1.getStyle, Element$$1, [element$$64, "filter"], JAM.policy.p1);
    if (filter$$5.length === 0) {
      return 1;
    }
    var v1465 = filter$$5 || "";
    var match$$9 = JAM.call(v1465.match, v1465, [/alpha\(opacity=(.*)\)/], JAM.policy.p1);
    if (match$$9[1]) {
      return JAM.call(parseFloat, null, [match$$9[1]], JAM.policy.p1) / 100;
    }
    return 1;
  }
  function getUniqueElementID(element$$65) {
    if (element$$65 === window) {
      return 0;
    }
    if (typeof element$$65._prototypeUID === "undefined") {
      element$$65._prototypeUID = Element$$1.Storage.UID;
      Element$$1.Storage.UID = Element$$1.Storage.UID + 1;
    }
    return element$$65._prototypeUID;
  }
  function getUniqueElementID_IE(element$$66) {
    if (element$$66 === window) {
      return 0;
    }
    if (element$$66 == document) {
      return 1;
    }
    return element$$66.uniqueID;
  }
  function getStorage(element$$67) {
    if (!(element$$67 = JAM.call($$$1, null, [element$$67], JAM.policy.p1))) {
      return;
    }
    var uid$$2 = JAM.call(getUniqueElementID, null, [element$$67], JAM.policy.p1);
    if (!Element$$1.Storage[uid$$2]) {
      var v1473 = Element$$1.Storage;
      var v1474 = uid$$2;
      var v4000 = JAM.call($H, null, [], JAM.policy.p1);
      JAM.set(v1473, v1474, v4000, JAM.policy.p2);
    }
    return Element$$1.Storage[uid$$2];
  }
  function store(element$$68, key$$22, value$$70) {
    if (!(element$$68 = JAM.call($$$1, null, [element$$68], JAM.policy.p1))) {
      return;
    }
    var storage = JAM.call(getStorage, null, [element$$68], JAM.policy.p1);
    if (arguments.length === 2) {
      JAM.call(storage.update, storage, [key$$22], JAM.policy.p1);
    } else {
      JAM.call(storage.set, storage, [key$$22, value$$70], JAM.policy.p1);
    }
    return element$$68;
  }
  function retrieve(element$$69, key$$23, defaultValue) {
    if (!(element$$69 = JAM.call($$$1, null, [element$$69], JAM.policy.p1))) {
      return;
    }
    var storage$$1 = JAM.call(getStorage, null, [element$$69], JAM.policy.p1);
    var value$$71 = JAM.call(storage$$1.get, storage$$1, [key$$23], JAM.policy.p1);
    if (JAM.call(Object.isUndefined, Object, [value$$71], JAM.policy.p1)) {
      JAM.call(storage$$1.set, storage$$1, [key$$23, defaultValue], JAM.policy.p1);
      value$$71 = defaultValue;
    }
    return value$$71;
  }
  function checkElementPrototypeDeficiency(tagName$$7) {
    if (typeof window.Element === "undefined") {
      return false;
    }
    var proto$$2 = window.Element.prototype;
    if (proto$$2) {
      var v2735 = JAM.call(Math.random, Math, [], JAM.policy.p1) + "";
      var id$$1 = "_" + JAM.call(v2735.slice, v2735, [2], JAM.policy.p1);
      var el = JAM.call(document.createElement, document, [tagName$$7], JAM.policy.p1);
      JAM.set(proto$$2, id$$1, "x", JAM.policy.p2);
      var isBuggy = el[id$$1] !== "x";
      delete proto$$2[id$$1];
      el = null;
      return isBuggy;
    }
    return false;
  }
  function extendElementWith(element$$70, methods$$2) {
    var property$$12;
    for (property$$12 in methods$$2) {
      var value$$72 = methods$$2[property$$12];
      var v2736 = JAM.call(Object.isFunction, Object, [value$$72], JAM.policy.p1);
      if (v2736) {
        v2736 = !(property$$12 in element$$70);
      }
      if (v2736) {
        var v1485 = element$$70;
        var v1486 = property$$12;
        var v4001 = JAM.call(value$$72.methodize, value$$72, [], JAM.policy.p1);
        JAM.set(v1485, v1486, v4001, JAM.policy.p2);
      }
    }
    return;
  }
  function elementIsExtended(element$$71) {
    var uid$$3 = JAM.call(getUniqueElementID, null, [element$$71], JAM.policy.p1);
    return uid$$3 in EXTENDED;
  }
  function extend$$1(element$$72) {
    var v2737 = !element$$72;
    if (!v2737) {
      v2737 = JAM.call(elementIsExtended, null, [element$$72], JAM.policy.p1);
    }
    if (v2737) {
      return element$$72;
    }
    var v2738 = element$$72.nodeType !== Node.ELEMENT_NODE;
    if (!v2738) {
      v2738 = element$$72 == window;
    }
    if (v2738) {
      return element$$72;
    }
    var methods$$3 = JAM.call(Object.clone, Object, [Methods], JAM.policy.p1);
    var v1490 = element$$72.tagName;
    var tagName$$8 = JAM.call(v1490.toUpperCase, v1490, [], JAM.policy.p1);
    if (ByTag[tagName$$8]) {
      JAM.call(Object.extend, Object, [methods$$3, ByTag[tagName$$8]], JAM.policy.p1);
    }
    JAM.call(extendElementWith, null, [element$$72, methods$$3], JAM.policy.p1);
    JAM.set(EXTENDED, JAM.call(getUniqueElementID, null, [element$$72], JAM.policy.p1), true, JAM.policy.p2);
    return element$$72;
  }
  function extend_IE8(element$$73) {
    var v2739 = !element$$73;
    if (!v2739) {
      v2739 = JAM.call(elementIsExtended, null, [element$$73], JAM.policy.p1);
    }
    if (v2739) {
      return element$$73;
    }
    var t$$1 = element$$73.tagName;
    var v2740 = t$$1;
    if (v2740) {
      v2740 = JAM.call(/^(?:object|applet|embed)$/i.test, /^(?:object|applet|embed)$/i, [t$$1], JAM.policy.p1);
    }
    if (v2740) {
      JAM.call(extendElementWith, null, [element$$73, Element$$1.Methods], JAM.policy.p1);
      JAM.call(extendElementWith, null, [element$$73, Element$$1.Methods.Simulated], JAM.policy.p1);
      JAM.call(extendElementWith, null, [element$$73, Element$$1.Methods.ByTag[JAM.call(t$$1.toUpperCase, t$$1, [], JAM.policy.p1)]], JAM.policy.p1);
    }
    return element$$73;
  }
  function addMethodsToTagName(tagName$$9, methods$$4) {
    tagName$$9 = JAM.call(tagName$$9.toUpperCase, tagName$$9, [], JAM.policy.p1);
    if (!ByTag[tagName$$9]) {
      JAM.set(ByTag, tagName$$9, {}, JAM.policy.p2);
    }
    JAM.call(Object.extend, Object, [ByTag[tagName$$9], methods$$4], JAM.policy.p1);
    return;
  }
  function mergeMethods(destination$$1, methods$$5, onlyIfAbsent) {
    if (JAM.call(Object.isUndefined, Object, [onlyIfAbsent], JAM.policy.p1)) {
      onlyIfAbsent = false;
    }
    var property$$13;
    for (property$$13 in methods$$5) {
      var value$$73 = methods$$5[property$$13];
      if (!JAM.call(Object.isFunction, Object, [value$$73], JAM.policy.p1)) {
        continue;
      }
      var v2746 = !onlyIfAbsent;
      if (!v2746) {
        v2746 = !(property$$13 in destination$$1);
      }
      if (v2746) {
        var v1503 = destination$$1;
        var v1504 = property$$13;
        var v4002 = JAM.call(value$$73.methodize, value$$73, [], JAM.policy.p1);
        JAM.set(v1503, v1504, v4002, JAM.policy.p2);
      }
    }
    return;
  }
  function findDOMClass(tagName$$10) {
    var klass$$1;
    var trans = {"OPTGROUP":"OptGroup", "TEXTAREA":"TextArea", "P":"Paragraph", "FIELDSET":"FieldSet", "UL":"UList", "OL":"OList", "DL":"DList", "DIR":"Directory", "H1":"Heading", "H2":"Heading", "H3":"Heading", "H4":"Heading", "H5":"Heading", "H6":"Heading", "Q":"Quote", "INS":"Mod", "DEL":"Mod", "A":"Anchor", "IMG":"Image", "CAPTION":"TableCaption", "COL":"TableCol", "COLGROUP":"TableCol", "THEAD":"TableSection", "TFOOT":"TableSection", "TBODY":"TableSection", "TR":"TableRow", "TH":"TableCell", 
    "TD":"TableCell", "FRAMESET":"FrameSet", "IFRAME":"IFrame"};
    if (trans[tagName$$10]) {
      klass$$1 = "HTML" + trans[tagName$$10] + "Element";
    }
    if (window[klass$$1]) {
      return window[klass$$1];
    }
    klass$$1 = "HTML" + tagName$$10 + "Element";
    if (window[klass$$1]) {
      return window[klass$$1];
    }
    klass$$1 = "HTML" + JAM.call(tagName$$10.capitalize, tagName$$10, [], JAM.policy.p1) + "Element";
    if (window[klass$$1]) {
      return window[klass$$1];
    }
    var element$$74 = JAM.call(document.createElement, document, [tagName$$10], JAM.policy.p1);
    var v1513 = element$$74["__proto__"];
    if (!v1513) {
      v1513 = element$$74.constructor.prototype;
    }
    var proto$$3 = v1513;
    element$$74 = null;
    return proto$$3;
  }
  function addMethods$$1(methods$$6) {
    if (arguments.length === 0) {
      JAM.call(Object.extend, Object, [Form, Form.Methods], JAM.policy.p1);
      JAM.call(Object.extend, Object, [Form.Element, Form.Element.Methods], JAM.policy.p1);
      JAM.call(Object.extend, Object, [Element$$1.Methods.ByTag, {"FORM":JAM.call(Object.clone, Object, [Form.Methods], JAM.policy.p1), "INPUT":JAM.call(Object.clone, Object, [Form.Element.Methods], JAM.policy.p1), "SELECT":JAM.call(Object.clone, Object, [Form.Element.Methods], JAM.policy.p1), "TEXTAREA":JAM.call(Object.clone, Object, [Form.Element.Methods], JAM.policy.p1), "BUTTON":JAM.call(Object.clone, Object, [Form.Element.Methods], JAM.policy.p1)}], JAM.policy.p1);
    }
    if (arguments.length === 2) {
      var tagName$$11 = methods$$6;
      methods$$6 = arguments[1];
    }
    if (!tagName$$11) {
      JAM.call(Object.extend, Object, [Element$$1.Methods, methods$$6 || {}], JAM.policy.p1);
    } else {
      if (JAM.call(Object.isArray, Object, [tagName$$11], JAM.policy.p1)) {
        var i$$26 = 0;
        var tag;
        var v1523 = tag = tagName$$11[i$$26];
        for (;v1523;) {
          JAM.call(addMethodsToTagName, null, [tag, methods$$6], JAM.policy.p1);
          i$$26 = i$$26 + 1;
          v1523 = tag = tagName$$11[i$$26];
        }
      } else {
        JAM.call(addMethodsToTagName, null, [tagName$$11, methods$$6], JAM.policy.p1);
      }
    }
    var v1526;
    if (window.HTMLElement) {
      v1526 = HTMLElement.prototype;
    } else {
      v1526 = Element$$1.prototype;
    }
    var ELEMENT_PROTOTYPE = v1526;
    if (F.ElementExtensions) {
      JAM.call(mergeMethods, null, [ELEMENT_PROTOTYPE, Element$$1.Methods], JAM.policy.p1);
      JAM.call(mergeMethods, null, [ELEMENT_PROTOTYPE, Element$$1.Methods.Simulated, true], JAM.policy.p1);
    }
    if (F.SpecificElementExtensions) {
      for (tag in Element$$1.Methods.ByTag) {
        var klass$$2 = JAM.call(findDOMClass, null, [tag], JAM.policy.p1);
        if (JAM.call(Object.isUndefined, Object, [klass$$2], JAM.policy.p1)) {
          continue;
        }
        JAM.call(mergeMethods, null, [klass$$2.prototype, ByTag[tag]], JAM.policy.p1);
      }
    }
    JAM.call(Object.extend, Object, [Element$$1, Element$$1.Methods], JAM.policy.p1);
    JAM.call(Object.extend, Object, [Element$$1, Element$$1.Methods.Simulated], JAM.policy.p1);
    delete Element$$1.ByTag;
    delete Element$$1.Simulated;
    var v1537 = Element$$1.extend;
    JAM.call(v1537.refresh, v1537, [], JAM.policy.p1);
    ELEMENT_CACHE = {};
    return;
  }
  var UNDEFINED;
  var SLICE = Array.prototype.slice;
  var DIV = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
  GLOBAL.$ = $$$1;
  if (!GLOBAL.Node) {
    GLOBAL.Node = {};
  }
  if (!GLOBAL.Node.ELEMENT_NODE) {
    JAM.call(Object.extend, Object, [GLOBAL.Node, {ELEMENT_NODE:1, ATTRIBUTE_NODE:2, TEXT_NODE:3, CDATA_SECTION_NODE:4, ENTITY_REFERENCE_NODE:5, ENTITY_NODE:6, PROCESSING_INSTRUCTION_NODE:7, COMMENT_NODE:8, DOCUMENT_NODE:9, DOCUMENT_TYPE_NODE:10, DOCUMENT_FRAGMENT_NODE:11, NOTATION_NODE:12}], JAM.policy.p1);
  }
  var ELEMENT_CACHE = {};
  var HAS_EXTENDED_CREATE_ELEMENT_SYNTAX = JAM.call(v117, null, [], JAM.policy.p1);
  var oldElement = GLOBAL.Element;
  GLOBAL.Element = Element$$1;
  JAM.call(Object.extend, Object, [GLOBAL.Element, oldElement || {}], JAM.policy.p1);
  if (oldElement) {
    GLOBAL.Element.prototype = oldElement.prototype;
  }
  Element$$1.Methods = {ByTag:{}, Simulated:{}};
  var methods$$1 = {};
  var INSPECT_ATTRIBUTES = {id:"id", className:"class"};
  methods$$1.inspect = inspect$$5;
  JAM.call(Object.extend, Object, [methods$$1, {visible:visible, toggle:toggle, hide:hide, show:show}], JAM.policy.p1);
  var SELECT_ELEMENT_INNERHTML_BUGGY = JAM.call(v118, null, [], JAM.policy.p1);
  var TABLE_ELEMENT_INNERHTML_BUGGY = JAM.call(v119, null, [], JAM.policy.p1);
  var LINK_ELEMENT_INNERHTML_BUGGY = JAM.call(v120, null, [], JAM.policy.p1);
  var v1547 = SELECT_ELEMENT_INNERHTML_BUGGY || TABLE_ELEMENT_INNERHTML_BUGGY;
  if (!v1547) {
    v1547 = LINK_ELEMENT_INNERHTML_BUGGY;
  }
  var ANY_INNERHTML_BUGGY = v1547;
  var SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING = JAM.call(v121, null, [], JAM.policy.p1);
  var INSERTION_TRANSLATIONS = {before:v122, top:v123, bottom:v124, after:v125, tags:{TABLE:["<table>", "</table>", 1], TBODY:["<table><tbody>", "</tbody></table>", 2], TR:["<table><tbody><tr>", "</tr></tbody></table>", 3], TD:["<table><tbody><tr><td>", "</td></tr></tbody></table>", 4], SELECT:["<select>", "</select>", 1]}};
  var tags = INSERTION_TRANSLATIONS.tags;
  JAM.call(Object.extend, Object, [tags, {THEAD:tags.TBODY, TFOOT:tags.TBODY, TH:tags.TD}], JAM.policy.p1);
  if ("outerHTML" in document.documentElement) {
    replace = replace_IE;
  }
  if (HAS_UNIQUE_ID_PROPERTY) {
    purgeCollection = purgeCollection_IE;
  }
  JAM.call(Object.extend, Object, [methods$$1, {remove:remove, update:update$$2, replace:replace, insert:insert, wrap:wrap$$1, cleanWhitespace:cleanWhitespace, empty:empty$$1, clone:clone$$3, purge:purge}], JAM.policy.p1);
  var descendantOf;
  if (DIV.compareDocumentPosition) {
    descendantOf = descendantOf_compareDocumentPosition;
  } else {
    if (DIV.contains) {
      descendantOf = descendantOf_contains;
    } else {
      descendantOf = descendantOf_DOM;
    }
  }
  JAM.call(Object.extend, Object, [methods$$1, {recursivelyCollect:recursivelyCollect, ancestors:ancestors, descendants:descendants, firstDescendant:firstDescendant, immediateDescendants:immediateDescendants, previousSiblings:previousSiblings, nextSiblings:nextSiblings, siblings:siblings, match:match$$7, up:up, down:down, previous:previous, next:next, select:select, adjacent:adjacent, descendantOf:descendantOf, getElementsBySelector:select, childElements:immediateDescendants}], JAM.policy.p1);
  var idCounter = 1;
  var PROBLEMATIC_ATTRIBUTE_READING = JAM.call(v126, null, [], JAM.policy.p1);
  if (PROBLEMATIC_ATTRIBUTE_READING) {
    readAttribute = readAttribute_IE;
  } else {
    if (Prototype.Browser.Opera) {
      readAttribute = readAttribute_Opera;
    }
  }
  GLOBAL.Element.Methods.Simulated.hasAttribute = hasAttribute;
  var regExpCache = {};
  var ATTRIBUTE_TRANSLATIONS = {};
  var classProp = "className";
  var forProp = "for";
  JAM.call(DIV.setAttribute, DIV, [classProp, "x"], JAM.policy.p1);
  if (DIV.className !== "x") {
    JAM.call(DIV.setAttribute, DIV, ["class", "x"], JAM.policy.p1);
    if (DIV.className === "x") {
      classProp = "class";
    }
  }
  var LABEL = JAM.call(document.createElement, document, ["label"], JAM.policy.p1);
  JAM.call(LABEL.setAttribute, LABEL, [forProp, "x"], JAM.policy.p1);
  if (LABEL.htmlFor !== "x") {
    JAM.call(LABEL.setAttribute, LABEL, ["htmlFor", "x"], JAM.policy.p1);
    if (LABEL.htmlFor === "x") {
      forProp = "htmlFor";
    }
  }
  LABEL = null;
  JAM.set(DIV, "onclick", Prototype.emptyFunction);
  var onclickValue = JAM.call(DIV.getAttribute, DIV, ["onclick"], JAM.policy.p1);
  var _getEv;
  var v3438 = JAM.call(String, null, [onclickValue], JAM.policy.p1);
  if (JAM.call(v3438.indexOf, v3438, ["{"], JAM.policy.p1) > -1) {
    _getEv = v127;
  } else {
    if (onclickValue === "") {
      _getEv = v128;
    }
  }
  ATTRIBUTE_TRANSLATIONS.read = {names:{"class":classProp, "className":classProp, "for":forProp, "htmlFor":forProp}, values:{style:v129, title:v130}};
  ATTRIBUTE_TRANSLATIONS.write = {names:{className:"class", htmlFor:"for", cellpadding:"cellPadding", cellspacing:"cellSpacing"}, values:{checked:v131, style:v132}};
  ATTRIBUTE_TRANSLATIONS.has = {names:{}};
  JAM.call(Object.extend, Object, [ATTRIBUTE_TRANSLATIONS.write.names, ATTRIBUTE_TRANSLATIONS.read.names], JAM.policy.p1);
  var CAMEL_CASED_ATTRIBUTE_NAMES = JAM.call($w, null, ["colSpan rowSpan vAlign dateTime " + "accessKey tabIndex encType maxLength readOnly longDesc frameBorder"], JAM.policy.p1);
  var i$$16 = 0;
  var attr;
  var v1574 = attr = CAMEL_CASED_ATTRIBUTE_NAMES[i$$16];
  for (;v1574;) {
    JAM.set(ATTRIBUTE_TRANSLATIONS.write.names, JAM.call(attr.toLowerCase, attr, [], JAM.policy.p1), attr, JAM.policy.p2);
    JAM.set(ATTRIBUTE_TRANSLATIONS.has.names, JAM.call(attr.toLowerCase, attr, [], JAM.policy.p1), attr, JAM.policy.p2);
    i$$16 = i$$16 + 1;
    v1574 = attr = CAMEL_CASED_ATTRIBUTE_NAMES[i$$16];
  }
  JAM.call(Object.extend, Object, [ATTRIBUTE_TRANSLATIONS.read.values, {href:_getAttr2, src:_getAttr2, type:_getAttr, action:_getAttrNode, disabled:_getFlag, checked:_getFlag, readonly:_getFlag, multiple:_getFlag, onload:_getEv, onunload:_getEv, onclick:_getEv, ondblclick:_getEv, onmousedown:_getEv, onmouseup:_getEv, onmouseover:_getEv, onmousemove:_getEv, onmouseout:_getEv, onfocus:_getEv, onblur:_getEv, onkeypress:_getEv, onkeydown:_getEv, onkeyup:_getEv, onsubmit:_getEv, onreset:_getEv, onselect:_getEv, 
  onchange:_getEv}], JAM.policy.p1);
  JAM.call(Object.extend, Object, [methods$$1, {identify:identify, readAttribute:readAttribute, writeAttribute:writeAttribute, classNames:classNames$$1, hasClassName:hasClassName, addClassName:addClassName, removeClassName:removeClassName, toggleClassName:toggleClassName}], JAM.policy.p1);
  var STANDARD_CSS_OPACITY_SUPPORTED;
  DIV.style.cssText = "opacity:.55";
  STANDARD_CSS_OPACITY_SUPPORTED = JAM.call(/^0.55/.test, /^0.55/, [DIV.style.opacity], JAM.policy.p1);
  JAM.call(Object.extend, Object, [methods$$1, {setStyle:setStyle, getStyle:getStyle, setOpacity:setOpacity, getOpacity:getOpacity}], JAM.policy.p1);
  if ("styleFloat" in DIV.style) {
    methods$$1.getStyle = getStyle_IE;
    methods$$1.setOpacity = setOpacity_IE;
    methods$$1.getOpacity = getOpacity_IE;
  }
  var UID = 0;
  GLOBAL.Element.Storage = {UID:1};
  var HAS_UNIQUE_ID_PROPERTY = "uniqueID" in DIV;
  if (HAS_UNIQUE_ID_PROPERTY) {
    getUniqueElementID = getUniqueElementID_IE;
  }
  JAM.call(Object.extend, Object, [methods$$1, {getStorage:getStorage, store:store, retrieve:retrieve}], JAM.policy.p1);
  var Methods = {};
  var ByTag = Element$$1.Methods.ByTag;
  var F = Prototype.BrowserFeatures;
  var v2790 = !F.ElementExtensions;
  if (v2790) {
    v2790 = "__proto__" in DIV;
  }
  if (v2790) {
    GLOBAL.HTMLElement = {};
    GLOBAL.HTMLElement.prototype = DIV["__proto__"];
    F.ElementExtensions = true;
  }
  var HTMLOBJECTELEMENT_PROTOTYPE_BUGGY = JAM.call(checkElementPrototypeDeficiency, null, ["object"], JAM.policy.p1);
  var EXTENDED = {};
  if (F.SpecificElementExtensions) {
    var v1587;
    if (HTMLOBJECTELEMENT_PROTOTYPE_BUGGY) {
      v1587 = extend_IE8;
    } else {
      v1587 = Prototype.K;
    }
    extend$$1 = v1587;
  }
  JAM.call(Object.extend, Object, [GLOBAL.Element, {extend:extend$$1, addMethods:addMethods$$1}], JAM.policy.p1);
  if (extend$$1 === Prototype.K) {
    GLOBAL.Element.extend.refresh = Prototype.emptyFunction;
  } else {
    GLOBAL.Element.extend.refresh = v133;
  }
  JAM.call(Element$$1.addMethods, Element$$1, [methods$$1], JAM.policy.p1);
  return;
}
function v114() {
  var v4003 = JAM.new(Ajax.Updater, [this.container, this.url, this.options], JAM.policy.p1);
  this.updater = v4003;
  return;
}
function v113(response$$3) {
  if (this.options.decay) {
    var v1598;
    if (response$$3.responseText == this.lastText) {
      v1598 = this.decay * this.options.decay;
    } else {
      v1598 = 1;
    }
    this.decay = v1598;
    this.lastText = response$$3.responseText;
  }
  var v2798 = this.onTimerEvent;
  var v1600 = JAM.call(v2798.bind, v2798, [this], JAM.policy.p1);
  var v4004 = JAM.call(v1600.delay, v1600, [this.decay * this.frequency], JAM.policy.p1);
  this.timer = v4004;
  return;
}
function v112() {
  this.updater.options.onComplete = undefined;
  JAM.call(clearTimeout, null, [this.timer], JAM.policy.p1);
  var v2802 = this.onComplete;
  if (!v2802) {
    v2802 = Prototype.emptyFunction;
  }
  var v1604 = v2802;
  JAM.call(v1604.apply, v1604, [this, arguments], JAM.policy.p1);
  return;
}
function v111() {
  var v1605 = this.options;
  var v2803 = this.updateComplete;
  var v4005 = JAM.call(v2803.bind, v2803, [this], JAM.policy.p1);
  v1605.onComplete = v4005;
  JAM.call(this.onTimerEvent, this, [], JAM.policy.p1);
  return;
}
function v110($super$$2, container$$1, url$$6, options$$6) {
  JAM.call($super$$2, null, [options$$6], JAM.policy.p1);
  this.onComplete = this.options.onComplete;
  var v1607 = this.options.frequency;
  if (!v1607) {
    v1607 = 2;
  }
  this.frequency = v1607;
  var v1608 = this.options.decay;
  if (!v1608) {
    v1608 = 1;
  }
  this.decay = v1608;
  this.updater = {};
  this.container = container$$1;
  this.url = url$$6;
  JAM.call(this.start, this, [], JAM.policy.p1);
  return;
}
function v109(responseText) {
  var v1609 = this.container;
  var v2808;
  if (JAM.call(this.success, this, [], JAM.policy.p1)) {
    v2808 = "success";
  } else {
    v2808 = "failure";
  }
  var receiver = v1609[v2808];
  var options$$5 = this.options;
  if (!options$$5.evalScripts) {
    responseText = JAM.call(responseText.stripScripts, responseText, [], JAM.policy.p1);
  }
  if (receiver = JAM.call($, null, [receiver], JAM.policy.p1)) {
    if (options$$5.insertion) {
      if (JAM.call(Object.isString, Object, [options$$5.insertion], JAM.policy.p1)) {
        var insertion = {};
        JAM.set(insertion, options$$5.insertion, responseText, JAM.policy.p2);
        JAM.call(receiver.insert, receiver, [insertion], JAM.policy.p1);
      } else {
        JAM.call(options$$5.insertion, options$$5, [receiver, responseText], JAM.policy.p1);
      }
    } else {
      JAM.call(receiver.update, receiver, [responseText], JAM.policy.p1);
    }
  }
  return;
}
function v108($super$$1, container, url$$5, options$$4) {
  function v107(response$$2, json$$4) {
    JAM.call(this.updateContent, this, [response$$2.responseText], JAM.policy.p1);
    if (JAM.call(Object.isFunction, Object, [onComplete], JAM.policy.p1)) {
      JAM.call(onComplete, null, [response$$2, json$$4], JAM.policy.p1);
    }
    return;
  }
  var v2811 = container.success;
  if (!v2811) {
    v2811 = container;
  }
  var v1618 = v2811;
  var v2812 = container.failure;
  if (!v2812) {
    var v3446;
    if (container.success) {
      v3446 = null;
    } else {
      v3446 = container;
    }
    v2812 = v3446;
  }
  this.container = {success:v1618, failure:v2812};
  options$$4 = JAM.call(Object.clone, Object, [options$$4], JAM.policy.p1);
  var onComplete = options$$4.onComplete;
  var v1620 = options$$4;
  var v4006 = JAM.call(v107.bind, v107, [this], JAM.policy.p1);
  v1620.onComplete = v4006;
  JAM.call($super$$1, null, [url$$5, options$$4], JAM.policy.p1);
  return;
}
function v106() {
  var options$$3 = this.request.options;
  var v3448 = !options$$3.evalJSON;
  if (!v3448) {
    var v3743 = options$$3.evalJSON != "force";
    if (v3743) {
      var v3933 = JAM.call(this.getHeader, this, ["Content-type"], JAM.policy.p1);
      if (!v3933) {
        v3933 = "";
      }
      var v3912 = v3933;
      v3743 = !JAM.call(v3912.include, v3912, ["application/json"], JAM.policy.p1);
    }
    v3448 = v3743;
  }
  var v2813 = v3448;
  if (!v2813) {
    var v3449 = this.responseText;
    v2813 = JAM.call(v3449.blank, v3449, [], JAM.policy.p1);
  }
  if (v2813) {
    return null;
  }
  try {
    var v1623 = this.responseText;
    var v2814 = options$$3.sanitizeJSON;
    if (!v2814) {
      var v3745 = this.request;
      v2814 = !JAM.call(v3745.isSameOrigin, v3745, [], JAM.policy.p1);
    }
    return JAM.call(v1623.evalJSON, v1623, [v2814], JAM.policy.p1);
  } catch (e$$20) {
    var v1625 = this.request;
    JAM.call(v1625.dispatchException, v1625, [e$$20], JAM.policy.p1);
  }
  return;
}
function v105() {
  var json$$3 = JAM.call(this.getHeader, this, ["X-JSON"], JAM.policy.p1);
  if (!json$$3) {
    return null;
  }
  try {
    json$$3 = JAM.call(decodeURIComponent, null, [JAM.call(escape, null, [json$$3], JAM.policy.p1)], JAM.policy.p1);
  } catch (e$$18) {
  }
  try {
    var v2815 = this.request.options.sanitizeJSON;
    if (!v2815) {
      var v3747 = this.request;
      v2815 = !JAM.call(v3747.isSameOrigin, v3747, [], JAM.policy.p1);
    }
    return JAM.call(json$$3.evalJSON, json$$3, [v2815], JAM.policy.p1);
  } catch (e$$19) {
    var v1629 = this.request;
    JAM.call(v1629.dispatchException, v1629, [e$$19], JAM.policy.p1);
  }
  return;
}
function v104() {
  var v1630 = this.transport;
  return JAM.call(v1630.getAllResponseHeaders, v1630, [], JAM.policy.p1);
}
function v103(name$$32) {
  var v1631 = this.transport;
  return JAM.call(v1631.getResponseHeader, v1631, [name$$32], JAM.policy.p1);
}
function v102() {
  try {
    return JAM.call(this.getAllResponseHeaders, this, [], JAM.policy.p1);
  } catch (e$$17) {
    return null;
  }
  return;
}
function v101() {
  try {
    var v1632 = this.transport.statusText;
    if (!v1632) {
      v1632 = "";
    }
    return v1632;
  } catch (e$$16) {
    return "";
  }
  return;
}
function v100(request$$1) {
  this.request = request$$1;
  var transport$$1 = this.transport = request$$1.transport;
  var readyState$$2 = this.readyState = transport$$1.readyState;
  var v3456 = readyState$$2 > 2;
  if (v3456) {
    v3456 = !Prototype.Browser.IE;
  }
  var v2818 = v3456;
  if (!v2818) {
    v2818 = readyState$$2 == 4;
  }
  if (v2818) {
    var v4007 = JAM.call(this.getStatus, this, [], JAM.policy.p1);
    this.status = v4007;
    var v4008 = JAM.call(this.getStatusText, this, [], JAM.policy.p1);
    this.statusText = v4008;
    var v4009 = JAM.call(String.interpret, String, [transport$$1.responseText], JAM.policy.p1);
    this.responseText = v4009;
    var v4010 = JAM.call(this._getHeaderJSON, this, [], JAM.policy.p1);
    this.headerJSON = v4010;
  }
  if (readyState$$2 == 4) {
    var xml = transport$$1.responseXML;
    var v1635;
    if (JAM.call(Object.isUndefined, Object, [xml], JAM.policy.p1)) {
      v1635 = null;
    } else {
      v1635 = xml;
    }
    this.responseXML = v1635;
    var v4011 = JAM.call(this._getResponseJSON, this, [], JAM.policy.p1);
    this.responseJSON = v4011;
  }
  return;
}
function v99(exception) {
  var v2820 = this.options.onException;
  if (!v2820) {
    v2820 = Prototype.emptyFunction;
  }
  JAM.call(v2820, null, [this, exception], JAM.policy.p1);
  var v1638 = Ajax.Responders;
  JAM.call(v1638.dispatch, v1638, ["onException", this, exception], JAM.policy.p1);
  return;
}
function v98() {
  try {
    var v3460 = this.transport.responseText;
    if (!v3460) {
      v3460 = "";
    }
    var v2821 = v3460;
    var v1639 = JAM.call(v2821.unfilterJSON, v2821, [], JAM.policy.p1);
    if (JAM.isEval(eval)) {
      return eval("introspect(JAM.policy.pFull) { " + v1639 + " }");
    } else {
      return JAM.call(eval, null, [v1639]);
    }
  } catch (e$$15) {
    JAM.call(this.dispatchException, this, [e$$15], JAM.policy.p1);
  }
  return;
}
function v97(name$$31) {
  try {
    var v2822 = this.transport;
    var v1640 = JAM.call(v2822.getResponseHeader, v2822, [name$$31], JAM.policy.p1);
    if (!v1640) {
      v1640 = null;
    }
    return v1640;
  } catch (e$$14) {
    return null;
  }
  return;
}
function v96() {
  var v1641 = this.url;
  var m$$1 = JAM.call(v1641.match, v1641, [/^\s*https?:\/\/[^\/]*/], JAM.policy.p1);
  var v1642 = !m$$1;
  if (!v1642) {
    var v2824 = m$$1[0];
    var v3751 = location.protocol;
    var v3752 = document.domain;
    var v3866;
    if (location.port) {
      v3866 = ":" + location.port;
    } else {
      v3866 = "";
    }
    v1642 = v2824 == JAM.call("#{protocol}//#{domain}#{port}".interpolate, "#{protocol}//#{domain}#{port}", [{protocol:v3751, domain:v3752, port:v3866}], JAM.policy.p1);
  }
  return v1642;
}
function v95(readyState$$1) {
  var state = Ajax.Request.Events[readyState$$1];
  var response$$1 = JAM.new(Ajax.Response, [this], JAM.policy.p1);
  if (state == "Complete") {
    try {
      this._complete = true;
      var v3462 = this.options["on" + response$$1.status];
      if (!v3462) {
        var v3756 = this.options;
        var v3915;
        if (JAM.call(this.success, this, [], JAM.policy.p1)) {
          v3915 = "Success";
        } else {
          v3915 = "Failure";
        }
        v3462 = v3756["on" + v3915];
      }
      var v2828 = v3462;
      if (!v2828) {
        v2828 = Prototype.emptyFunction;
      }
      JAM.call(v2828, null, [response$$1, response$$1.headerJSON], JAM.policy.p1);
    } catch (e$$12) {
      JAM.call(this.dispatchException, this, [e$$12], JAM.policy.p1);
    }
    var contentType = JAM.call(response$$1.getHeader, response$$1, ["Content-type"], JAM.policy.p1);
    var v2829 = this.options.evalJS == "force";
    if (!v2829) {
      var v3869 = this.options.evalJS;
      if (v3869) {
        v3869 = JAM.call(this.isSameOrigin, this, [], JAM.policy.p1);
      }
      var v3760 = v3869;
      if (v3760) {
        v3760 = contentType;
      }
      var v3465 = v3760;
      if (v3465) {
        v3465 = JAM.call(contentType.match, contentType, [/^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i], JAM.policy.p1);
      }
      v2829 = v3465;
    }
    if (v2829) {
      JAM.call(this.evalResponse, this, [], JAM.policy.p1);
    }
  }
  try {
    var v2830 = this.options["on" + state];
    if (!v2830) {
      v2830 = Prototype.emptyFunction;
    }
    JAM.call(v2830, null, [response$$1, response$$1.headerJSON], JAM.policy.p1);
    var v1651 = Ajax.Responders;
    JAM.call(v1651.dispatch, v1651, ["on" + state, this, response$$1, response$$1.headerJSON], JAM.policy.p1);
  } catch (e$$13) {
    JAM.call(this.dispatchException, this, [e$$13], JAM.policy.p1);
  }
  if (state == "Complete") {
    JAM.set(this.transport, "onreadystatechange", Prototype.emptyFunction);
  }
  return;
}
function v94() {
  try {
    if (this.transport.status === 1223) {
      return 204;
    }
    var v1657 = this.transport.status;
    if (!v1657) {
      v1657 = 0;
    }
    return v1657;
  } catch (e$$11) {
    return 0;
  }
  return;
}
function v93() {
  var status = JAM.call(this.getStatus, this, [], JAM.policy.p1);
  var v2834 = !status;
  if (!v2834) {
    var v3471 = status >= 200;
    if (v3471) {
      v3471 = status < 300;
    }
    v2834 = v3471;
  }
  var v1658 = v2834;
  if (!v1658) {
    v1658 = status == 304;
  }
  return v1658;
}
function v92() {
  function v91(pair$$6) {
    JAM.set(headers, pair$$6.key, pair$$6.value, JAM.policy.p2);
    return;
  }
  var headers = {"X-Requested-With":"XMLHttpRequest", "X-Prototype-Version":Prototype.Version, "Accept":"text/javascript, text/html, application/xml, text/xml, */*"};
  if (this.method == "post") {
    var v1661 = this.options.contentType;
    var v2838;
    if (this.options.encoding) {
      v2838 = "; charset=" + this.options.encoding;
    } else {
      v2838 = "";
    }
    headers["Content-type"] = v1661 + v2838;
    var v2839 = this.transport.overrideMimeType;
    if (v2839) {
      var v3917 = navigator.userAgent;
      var v3870 = JAM.call(v3917.match, v3917, [/Gecko\/(\d{4})/], JAM.policy.p1);
      if (!v3870) {
        v3870 = [0, 2005];
      }
      v2839 = v3870[1] < 2005;
    }
    if (v2839) {
      headers["Connection"] = "close";
    }
  }
  if (typeof this.options.requestHeaders == "object") {
    var extras = this.options.requestHeaders;
    if (JAM.call(Object.isFunction, Object, [extras.push], JAM.policy.p1)) {
      var i$$15 = 0;
      var length$$27 = extras.length;
      var v1667 = i$$15 < length$$27;
      for (;v1667;) {
        JAM.set(headers, extras[i$$15], extras[i$$15 + 1], JAM.policy.p2);
        i$$15 = i$$15 + 2;
        v1667 = i$$15 < length$$27;
      }
    } else {
      var v1668 = JAM.call($H, null, [extras], JAM.policy.p1);
      JAM.call(v1668.each, v1668, [v91], JAM.policy.p1);
    }
  }
  var name$$30;
  for (name$$30 in headers) {
    var v1671 = this.transport;
    JAM.call(v1671.setRequestHeader, v1671, [name$$30, headers[name$$30]], JAM.policy.p1);
  }
  return;
}
function v90() {
  var readyState = this.transport.readyState;
  var v2843 = readyState > 1;
  if (v2843) {
    var v3765 = readyState == 4;
    if (v3765) {
      v3765 = this._complete;
    }
    v2843 = !v3765;
  }
  if (v2843) {
    JAM.call(this.respondToReadyState, this, [this.transport.readyState], JAM.policy.p1);
  }
  return;
}
function v89(url$$4) {
  this.url = url$$4;
  this.method = this.options.method;
  var v1677;
  if (JAM.call(Object.isString, Object, [this.options.parameters], JAM.policy.p1)) {
    v1677 = this.options.parameters;
  } else {
    v1677 = JAM.call(Object.toQueryString, Object, [this.options.parameters], JAM.policy.p1);
  }
  var params = v1677;
  var v3481 = ["get", "post"];
  if (!JAM.call(v3481.include, v3481, [this.method], JAM.policy.p1)) {
    var v3871;
    if (params) {
      v3871 = "&";
    } else {
      v3871 = "";
    }
    params = params + (v3871 + "_method=" + this.method);
    this.method = "post";
  }
  var v2850 = params;
  if (v2850) {
    v2850 = this.method === "get";
  }
  if (v2850) {
    var v2851 = this.url;
    var v3768;
    var v3919 = this.url;
    if (JAM.call(v3919.include, v3919, ["?"], JAM.policy.p1)) {
      v3768 = "&";
    } else {
      v3768 = "?";
    }
    this.url = v2851 + (v3768 + params);
  }
  var v4012 = JAM.call(params.toQueryParams, params, [], JAM.policy.p1);
  this.parameters = v4012;
  try {
    var response = JAM.new(Ajax.Response, [this], JAM.policy.p1);
    if (this.options.onCreate) {
      var v1681 = this.options;
      JAM.call(v1681.onCreate, v1681, [response], JAM.policy.p1);
    }
    var v1683 = Ajax.Responders;
    JAM.call(v1683.dispatch, v1683, ["onCreate", this, response], JAM.policy.p1);
    var v1684 = this.transport;
    var v2854 = this.method;
    JAM.call(v1684.open, v1684, [JAM.call(v2854.toUpperCase, v2854, [], JAM.policy.p1), this.url, this.options.asynchronous], JAM.policy.p1);
    if (this.options.asynchronous) {
      var v2857 = this.respondToReadyState;
      var v1688 = JAM.call(v2857.bind, v2857, [this], JAM.policy.p1);
      JAM.call(v1688.defer, v1688, [1], JAM.policy.p1);
    }
    var v1690 = this.transport;
    var v2858 = this.onStateChange;
    var v4013 = JAM.call(v2858.bind, v2858, [this], JAM.policy.p1);
    JAM.set(v1690, "onreadystatechange", v4013);
    JAM.call(this.setRequestHeaders, this, [], JAM.policy.p1);
    var v1691;
    if (this.method == "post") {
      var v2859 = this.options.postBody;
      if (!v2859) {
        v2859 = params;
      }
      v1691 = v2859;
    } else {
      v1691 = null;
    }
    this.body = v1691;
    var v1692 = this.transport;
    JAM.call(v1692.send, v1692, [this.body], JAM.policy.p1);
    var v2861 = !this.options.asynchronous;
    if (v2861) {
      v2861 = this.transport.overrideMimeType;
    }
    if (v2861) {
      JAM.call(this.onStateChange, this, [], JAM.policy.p1);
    }
  } catch (e$$10) {
    JAM.call(this.dispatchException, this, [e$$10], JAM.policy.p1);
  }
  return;
}
function v88($super, url$$3, options$$2) {
  JAM.call($super, null, [options$$2], JAM.policy.p1);
  var v4014 = JAM.call(Ajax.getTransport, Ajax, [], JAM.policy.p1);
  this.transport = v4014;
  JAM.call(this.request, this, [url$$3], JAM.policy.p1);
  return;
}
function v87(options$$1) {
  this.options = {method:"post", asynchronous:true, contentType:"application/x-www-form-urlencoded", encoding:"UTF-8", parameters:"", evalJSON:true, evalJS:true};
  JAM.call(Object.extend, Object, [this.options, options$$1 || {}], JAM.policy.p1);
  var v1697 = this.options;
  var v2862 = this.options.method;
  var v4015 = JAM.call(v2862.toLowerCase, v2862, [], JAM.policy.p1);
  v1697.method = v4015;
  if (JAM.call(Object.isHash, Object, [this.options.parameters], JAM.policy.p1)) {
    var v1698 = this.options;
    var v2864 = this.options.parameters;
    var v4016 = JAM.call(v2864.toObject, v2864, [], JAM.policy.p1);
    v1698.parameters = v4016;
  }
  return;
}
function v86() {
  Ajax.activeRequestCount = Ajax.activeRequestCount - 1;
  return;
}
function v85() {
  Ajax.activeRequestCount = Ajax.activeRequestCount + 1;
  return;
}
function v84(callback$$26, request, transport, json$$2) {
  function v83(responder$$2) {
    if (JAM.call(Object.isFunction, Object, [responder$$2[callback$$26]], JAM.policy.p1)) {
      try {
        var v1700 = responder$$2[callback$$26];
        JAM.call(v1700.apply, v1700, [responder$$2, [request, transport, json$$2]], JAM.policy.p1);
      } catch (e$$9) {
      }
    }
    return;
  }
  JAM.call(this.each, this, [v83], JAM.policy.p1);
  return;
}
function v82(responder$$1) {
  var v1703 = this.responders;
  var v4017 = JAM.call(v1703.without, v1703, [responder$$1], JAM.policy.p1);
  this.responders = v4017;
  return;
}
function v81(responder) {
  if (!JAM.call(this.include, this, [responder], JAM.policy.p1)) {
    var v1704 = this.responders;
    JAM.call(v1704.push, v1704, [responder], JAM.policy.p1);
  }
  return;
}
function v80(iterator$$25, context$$25) {
  var v1706 = this.responders;
  JAM.call(v1706._each, v1706, [iterator$$25, context$$25], JAM.policy.p1);
  return;
}
function v79() {
  function v78() {
    return JAM.new(ActiveXObject, ["Microsoft.XMLHTTP"], JAM.policy.p1);
  }
  function v77() {
    return JAM.new(ActiveXObject, ["Msxml2.XMLHTTP"], JAM.policy.p1);
  }
  function v76() {
    return JAM.new(XMLHttpRequest, [], JAM.policy.p1);
  }
  var v1707 = JAM.call(Try.these, Try, [v76, v77, v78], JAM.policy.p1);
  if (!v1707) {
    v1707 = false;
  }
  return v1707;
}
function v75() {
  var returnValue;
  var i$$14 = 0;
  var length$$26 = arguments.length;
  var v1708 = i$$14 < length$$26;
  for (;v1708;) {
    var lambda = arguments[i$$14];
    try {
      returnValue = JAM.call(lambda, null, [], JAM.policy.p1);
      break;
    } catch (e$$8) {
    }
    i$$14 = i$$14 + 1;
    v1708 = i$$14 < length$$26;
  }
  return returnValue;
}
function v74() {
  function initialize$$1(start$$5, end$$2, exclusive$$1) {
    this.start = start$$5;
    this.end = end$$2;
    this.exclusive = exclusive$$1;
    return;
  }
  function _each$$2(iterator$$24, context$$24) {
    var value$$61 = this.start;
    var v1709 = JAM.call(this.include, this, [value$$61], JAM.policy.p1);
    for (;v1709;) {
      JAM.call(iterator$$24.call, iterator$$24, [context$$24, value$$61], JAM.policy.p1);
      value$$61 = JAM.call(value$$61.succ, value$$61, [], JAM.policy.p1);
      v1709 = JAM.call(this.include, this, [value$$61], JAM.policy.p1);
    }
    return;
  }
  function include$$2(value$$62) {
    if (value$$62 < this.start) {
      return false;
    }
    if (this.exclusive) {
      return value$$62 < this.end;
    }
    return value$$62 <= this.end;
  }
  return{initialize:initialize$$1, _each:_each$$2, include:include$$2};
}
function v73() {
  function toColorPart() {
    return JAM.call(this.toPaddedString, this, [2, 16], JAM.policy.p1);
  }
  function succ$$1() {
    return this + 1;
  }
  function times$$1(iterator$$23, context$$23) {
    var v1714 = JAM.call($R, null, [0, this, true], JAM.policy.p1);
    JAM.call(v1714.each, v1714, [iterator$$23, context$$23], JAM.policy.p1);
    return this;
  }
  function toPaddedString(length$$25, radix) {
    var string$$1 = JAM.call(this.toString, this, [radix || 10], JAM.policy.p1);
    return JAM.call("0".times, "0", [length$$25 - string$$1.length], JAM.policy.p1) + string$$1;
  }
  function abs() {
    return JAM.call(Math.abs, Math, [this], JAM.policy.p1);
  }
  function round() {
    return JAM.call(Math.round, Math, [this], JAM.policy.p1);
  }
  function ceil() {
    return JAM.call(Math.ceil, Math, [this], JAM.policy.p1);
  }
  function floor() {
    return JAM.call(Math.floor, Math, [this], JAM.policy.p1);
  }
  return{toColorPart:toColorPart, succ:succ$$1, times:times$$1, toPaddedString:toPaddedString, abs:abs, round:round, ceil:ceil, floor:floor};
}
function v72() {
  function initialize(object$$23) {
    var v1717;
    if (JAM.call(Object.isHash, Object, [object$$23], JAM.policy.p1)) {
      v1717 = JAM.call(object$$23.toObject, object$$23, [], JAM.policy.p1);
    } else {
      v1717 = JAM.call(Object.clone, Object, [object$$23], JAM.policy.p1);
    }
    this._object = v1717;
    return;
  }
  function _each$$1(iterator$$22, context$$22) {
    var key$$16;
    for (key$$16 in this._object) {
      var value$$55 = this._object[key$$16];
      var pair$$1 = [key$$16, value$$55];
      pair$$1.key = key$$16;
      pair$$1.value = value$$55;
      JAM.call(iterator$$22.call, iterator$$22, [context$$22, pair$$1], JAM.policy.p1);
    }
    return;
  }
  function set(key$$17, value$$56) {
    return JAM.set(this._object, key$$17, value$$56, JAM.policy.p2);
  }
  function get(key$$18) {
    if (this._object[key$$18] !== Object.prototype[key$$18]) {
      return this._object[key$$18];
    }
    return;
  }
  function unset(key$$19) {
    var value$$57 = this._object[key$$19];
    delete this._object[key$$19];
    return value$$57;
  }
  function toObject() {
    return JAM.call(Object.clone, Object, [this._object], JAM.policy.p1);
  }
  function keys$$2() {
    return JAM.call(this.pluck, this, ["key"], JAM.policy.p1);
  }
  function values$$6() {
    return JAM.call(this.pluck, this, ["value"], JAM.policy.p1);
  }
  function index$$54(value$$58) {
    function v68(pair$$2) {
      return pair$$2.value === value$$58;
    }
    var match$$6 = JAM.call(this.detect, this, [v68], JAM.policy.p1);
    var v1727 = match$$6;
    if (v1727) {
      v1727 = match$$6.key;
    }
    return v1727;
  }
  function merge$$1(object$$24) {
    var v1728 = JAM.call(this.clone, this, [], JAM.policy.p1);
    return JAM.call(v1728.update, v1728, [object$$24], JAM.policy.p1);
  }
  function update$$1(object$$25) {
    function v69(result$$6, pair$$3) {
      JAM.call(result$$6.set, result$$6, [pair$$3.key, pair$$3.value], JAM.policy.p1);
      return result$$6;
    }
    var v1731 = JAM.new(Hash, [object$$25], JAM.policy.p1);
    return JAM.call(v1731.inject, v1731, [this, v69], JAM.policy.p1);
  }
  function toQueryPair(key$$20, value$$59) {
    if (JAM.call(Object.isUndefined, Object, [value$$59], JAM.policy.p1)) {
      return key$$20;
    }
    value$$59 = JAM.call(String.interpret, String, [value$$59], JAM.policy.p1);
    value$$59 = JAM.call(value$$59.gsub, value$$59, [/(\r)?\n/, "\r\n"], JAM.policy.p1);
    value$$59 = JAM.call(encodeURIComponent, null, [value$$59], JAM.policy.p1);
    value$$59 = JAM.call(value$$59.gsub, value$$59, [/%20/, "+"], JAM.policy.p1);
    return key$$20 + "=" + value$$59;
  }
  function toQueryString$$1() {
    function v70(results$$10, pair$$4) {
      var key$$21 = JAM.call(encodeURIComponent, null, [pair$$4.key], JAM.policy.p1);
      var values$$7 = pair$$4.value;
      var v2875 = values$$7;
      if (v2875) {
        v2875 = typeof values$$7 == "object";
      }
      if (v2875) {
        if (JAM.call(Object.isArray, Object, [values$$7], JAM.policy.p1)) {
          var queryValues = [];
          var i$$13 = 0;
          var len = values$$7.length;
          var value$$60;
          var v1736 = i$$13 < len;
          for (;v1736;) {
            value$$60 = values$$7[i$$13];
            JAM.call(queryValues.push, queryValues, [JAM.call(toQueryPair, null, [key$$21, value$$60], JAM.policy.p1)], JAM.policy.p1);
            i$$13 = i$$13 + 1;
            v1736 = i$$13 < len;
          }
          return JAM.call(results$$10.concat, results$$10, [queryValues], JAM.policy.p1);
        }
      } else {
        JAM.call(results$$10.push, results$$10, [JAM.call(toQueryPair, null, [key$$21, values$$7], JAM.policy.p1)], JAM.policy.p1);
      }
      return results$$10;
    }
    var v1740 = JAM.call(this.inject, this, [[], v70], JAM.policy.p1);
    return JAM.call(v1740.join, v1740, ["&"], JAM.policy.p1);
  }
  function inspect$$4() {
    function v71(pair$$5) {
      var v1741 = JAM.call(pair$$5.map, pair$$5, [Object.inspect], JAM.policy.p1);
      return JAM.call(v1741.join, v1741, [": "], JAM.policy.p1);
    }
    var v3499 = JAM.call(this.map, this, [v71], JAM.policy.p1);
    return "#<Hash:{" + JAM.call(v3499.join, v3499, [", "], JAM.policy.p1) + "}>";
  }
  function clone$$2() {
    return JAM.new(Hash, [this], JAM.policy.p1);
  }
  return{initialize:initialize, _each:_each$$1, set:set, get:get, unset:unset, toObject:toObject, toTemplateReplacements:toObject, keys:keys$$2, values:values$$6, index:index$$54, merge:merge$$1, update:update$$1, toQueryString:toQueryString$$1, inspect:inspect$$4, toJSON:toObject, clone:clone$$2};
}
function v67() {
  function v66() {
    return JAM.call([].concat, [], [arguments], JAM.policy.p1)[0][0] !== 1;
  }
  function each$$1(iterator$$16, context$$16) {
    var i$$5 = 0;
    var length$$17 = this.length >>> 0;
    var v1747 = i$$5 < length$$17;
    for (;v1747;) {
      if (i$$5 in this) {
        JAM.call(iterator$$16.call, iterator$$16, [context$$16, this[i$$5], i$$5, this], JAM.policy.p1);
      }
      i$$5 = i$$5 + 1;
      v1747 = i$$5 < length$$17;
    }
    return;
  }
  function clear() {
    this.length = 0;
    return this;
  }
  function first$$1() {
    return this[0];
  }
  function last() {
    return this[this.length - 1];
  }
  function compact() {
    function v60(value$$50) {
      return value$$50 != null;
    }
    return JAM.call(this.select, this, [v60], JAM.policy.p1);
  }
  function flatten() {
    function v61(array$$12, value$$51) {
      if (JAM.call(Object.isArray, Object, [value$$51], JAM.policy.p1)) {
        return JAM.call(array$$12.concat, array$$12, [JAM.call(value$$51.flatten, value$$51, [], JAM.policy.p1)], JAM.policy.p1);
      }
      JAM.call(array$$12.push, array$$12, [value$$51], JAM.policy.p1);
      return array$$12;
    }
    return JAM.call(this.inject, this, [[], v61], JAM.policy.p1);
  }
  function without() {
    function v62(value$$52) {
      return!JAM.call(values$$5.include, values$$5, [value$$52], JAM.policy.p1);
    }
    var values$$5 = JAM.call(slice$$2.call, slice$$2, [arguments, 0], JAM.policy.p1);
    return JAM.call(this.select, this, [v62], JAM.policy.p1);
  }
  function reverse(inline) {
    var v2880;
    if (inline === false) {
      v2880 = JAM.call(this.toArray, this, [], JAM.policy.p1);
    } else {
      v2880 = this;
    }
    var v1752 = v2880;
    return JAM.call(v1752._reverse, v1752, [], JAM.policy.p1);
  }
  function uniq(sorted) {
    function v63(array$$13, value$$53, index$$53) {
      var v2881 = 0 == index$$53;
      if (!v2881) {
        var v3502;
        if (sorted) {
          v3502 = JAM.call(array$$13.last, array$$13, [], JAM.policy.p1) != value$$53;
        } else {
          v3502 = !JAM.call(array$$13.include, array$$13, [value$$53], JAM.policy.p1);
        }
        v2881 = v3502;
      }
      if (v2881) {
        JAM.call(array$$13.push, array$$13, [value$$53], JAM.policy.p1);
      }
      return array$$13;
    }
    return JAM.call(this.inject, this, [[], v63], JAM.policy.p1);
  }
  function intersect(array$$14) {
    function v64(item) {
      return JAM.call(array$$14.indexOf, array$$14, [item], JAM.policy.p1) !== -1;
    }
    var v1755 = JAM.call(this.uniq, this, [], JAM.policy.p1);
    return JAM.call(v1755.findAll, v1755, [v64], JAM.policy.p1);
  }
  function clone$$1() {
    return JAM.call(slice$$2.call, slice$$2, [this, 0], JAM.policy.p1);
  }
  function size$$5() {
    return this.length;
  }
  function inspect$$3() {
    var v3504 = JAM.call(this.map, this, [Object.inspect], JAM.policy.p1);
    return "[" + JAM.call(v3504.join, v3504, [", "], JAM.policy.p1) + "]";
  }
  function indexOf(item$$1, i$$6) {
    if (this == null) {
      throw JAM.new(TypeError, [], JAM.policy.p1);
    }
    var array$$15 = JAM.call(Object, null, [this], JAM.policy.p1);
    var length$$18 = array$$15.length >>> 0;
    if (length$$18 === 0) {
      return-1;
    }
    i$$6 = JAM.call(Number, null, [i$$6], JAM.policy.p1);
    if (JAM.call(isNaN, null, [i$$6], JAM.policy.p1)) {
      i$$6 = 0;
    } else {
      var v2883 = i$$6 !== 0;
      if (v2883) {
        v2883 = JAM.call(isFinite, null, [i$$6], JAM.policy.p1);
      }
      if (v2883) {
        var v2884;
        if (i$$6 > 0) {
          v2884 = 1;
        } else {
          v2884 = -1;
        }
        i$$6 = v2884 * JAM.call(Math.floor, Math, [JAM.call(Math.abs, Math, [i$$6], JAM.policy.p1)], JAM.policy.p1);
      }
    }
    if (i$$6 > length$$18) {
      return-1;
    }
    var v1765;
    if (i$$6 >= 0) {
      v1765 = i$$6;
    } else {
      v1765 = JAM.call(Math.max, Math, [length$$18 - JAM.call(Math.abs, Math, [i$$6], JAM.policy.p1), 0], JAM.policy.p1);
    }
    var k = v1765;
    var v1767 = k < length$$18;
    for (;v1767;) {
      var v2888 = k in array$$15;
      if (v2888) {
        v2888 = array$$15[k] === item$$1;
      }
      if (v2888) {
        return k;
      }
      k = k + 1;
      v1767 = k < length$$18;
    }
    return-1;
  }
  function lastIndexOf(item$$2, i$$7) {
    if (this == null) {
      throw JAM.new(TypeError, [], JAM.policy.p1);
    }
    var array$$16 = JAM.call(Object, null, [this], JAM.policy.p1);
    var length$$19 = array$$16.length >>> 0;
    if (length$$19 === 0) {
      return-1;
    }
    if (!JAM.call(Object.isUndefined, Object, [i$$7], JAM.policy.p1)) {
      i$$7 = JAM.call(Number, null, [i$$7], JAM.policy.p1);
      if (JAM.call(isNaN, null, [i$$7], JAM.policy.p1)) {
        i$$7 = 0;
      } else {
        var v2890 = i$$7 !== 0;
        if (v2890) {
          v2890 = JAM.call(isFinite, null, [i$$7], JAM.policy.p1);
        }
        if (v2890) {
          var v2891;
          if (i$$7 > 0) {
            v2891 = 1;
          } else {
            v2891 = -1;
          }
          i$$7 = v2891 * JAM.call(Math.floor, Math, [JAM.call(Math.abs, Math, [i$$7], JAM.policy.p1)], JAM.policy.p1);
        }
      }
    } else {
      i$$7 = length$$19;
    }
    var v1776;
    if (i$$7 >= 0) {
      v1776 = JAM.call(Math.min, Math, [i$$7, length$$19 - 1], JAM.policy.p1);
    } else {
      v1776 = length$$19 - JAM.call(Math.abs, Math, [i$$7], JAM.policy.p1);
    }
    var k$$1 = v1776;
    var v1778 = k$$1 >= 0;
    for (;v1778;) {
      var v2897 = k$$1 in array$$16;
      if (v2897) {
        v2897 = array$$16[k$$1] === item$$2;
      }
      if (v2897) {
        return k$$1;
      }
      k$$1 = k$$1 - 1;
      v1778 = k$$1 >= 0;
    }
    return-1;
  }
  function concat(_) {
    var array$$17 = [];
    var items = JAM.call(slice$$2.call, slice$$2, [arguments, 0], JAM.policy.p1);
    var item$$3;
    var n$$1 = 0;
    JAM.call(items.unshift, items, [this], JAM.policy.p1);
    var i$$8 = 0;
    var length$$20 = items.length;
    var v1783 = i$$8 < length$$20;
    for (;v1783;) {
      item$$3 = items[i$$8];
      var v2898 = JAM.call(Object.isArray, Object, [item$$3], JAM.policy.p1);
      if (v2898) {
        v2898 = !("callee" in item$$3);
      }
      if (v2898) {
        var j = 0;
        var arrayLength$$1 = item$$3.length;
        var v1780 = j < arrayLength$$1;
        for (;v1780;) {
          if (j in item$$3) {
            introspect(JAM.policy.p2) {
              array$$17[n$$1] = item$$3[j];
            }
          }
          n$$1 = n$$1 + 1;
          j = j + 1;
          v1780 = j < arrayLength$$1;
        }
      } else {
        var v1781 = n$$1;
        n$$1 = n$$1 + 1;
        introspect(JAM.policy.p2) {
          array$$17[v1781] = item$$3;
        }
      }
      i$$8 = i$$8 + 1;
      v1783 = i$$8 < length$$20;
    }
    array$$17.length = n$$1;
    return array$$17;
  }
  function wrapNative(method$$5) {
    function v65() {
      if (arguments.length === 0) {
        return JAM.call(method$$5.call, method$$5, [this, Prototype.K], JAM.policy.p1);
      } else {
        if (arguments[0] === undefined) {
          var args$$9 = JAM.call(slice$$2.call, slice$$2, [arguments, 1], JAM.policy.p1);
          JAM.call(args$$9.unshift, args$$9, [Prototype.K], JAM.policy.p1);
          return JAM.call(method$$5.apply, method$$5, [this, args$$9], JAM.policy.p1);
        } else {
          return JAM.call(method$$5.apply, method$$5, [this, arguments], JAM.policy.p1);
        }
      }
      return;
    }
    return v65;
  }
  function map(iterator$$17) {
    if (this == null) {
      throw JAM.new(TypeError, [], JAM.policy.p1);
    }
    var v1789 = iterator$$17;
    if (!v1789) {
      v1789 = Prototype.K;
    }
    iterator$$17 = v1789;
    var object$$18 = JAM.call(Object, null, [this], JAM.policy.p1);
    var results$$8 = [];
    var context$$17 = arguments[1];
    var n$$2 = 0;
    var i$$9 = 0;
    var length$$21 = object$$18.length >>> 0;
    var v1794 = i$$9 < length$$21;
    for (;v1794;) {
      if (i$$9 in object$$18) {
        var v1791 = results$$8;
        var v1792 = n$$2;
        var v4018 = JAM.call(iterator$$17.call, iterator$$17, [context$$17, object$$18[i$$9], i$$9, object$$18], JAM.policy.p1);
        introspect(JAM.policy.p2) {
          v1791[v1792] = v4018;
        }
      }
      n$$2 = n$$2 + 1;
      i$$9 = i$$9 + 1;
      v1794 = i$$9 < length$$21;
    }
    results$$8.length = n$$2;
    return results$$8;
  }
  function filter$$2(iterator$$18) {
    var v2903 = this == null;
    if (!v2903) {
      v2903 = !JAM.call(Object.isFunction, Object, [iterator$$18], JAM.policy.p1);
    }
    if (v2903) {
      throw JAM.new(TypeError, [], JAM.policy.p1);
    }
    var object$$19 = JAM.call(Object, null, [this], JAM.policy.p1);
    var results$$9 = [];
    var context$$18 = arguments[1];
    var value$$54;
    var i$$10 = 0;
    var length$$22 = object$$19.length >>> 0;
    var v1799 = i$$10 < length$$22;
    for (;v1799;) {
      if (i$$10 in object$$19) {
        value$$54 = object$$19[i$$10];
        if (JAM.call(iterator$$18.call, iterator$$18, [context$$18, value$$54, i$$10, object$$19], JAM.policy.p1)) {
          JAM.call(results$$9.push, results$$9, [value$$54], JAM.policy.p1);
        }
      }
      i$$10 = i$$10 + 1;
      v1799 = i$$10 < length$$22;
    }
    return results$$9;
  }
  function some(iterator$$19) {
    if (this == null) {
      throw JAM.new(TypeError, [], JAM.policy.p1);
    }
    var v1801 = iterator$$19;
    if (!v1801) {
      v1801 = Prototype.K;
    }
    iterator$$19 = v1801;
    var context$$19 = arguments[1];
    var object$$20 = JAM.call(Object, null, [this], JAM.policy.p1);
    var i$$11 = 0;
    var length$$23 = object$$20.length >>> 0;
    var v1804 = i$$11 < length$$23;
    for (;v1804;) {
      var v2905 = i$$11 in object$$20;
      if (v2905) {
        v2905 = JAM.call(iterator$$19.call, iterator$$19, [context$$19, object$$20[i$$11], i$$11, object$$20], JAM.policy.p1);
      }
      if (v2905) {
        return true;
      }
      i$$11 = i$$11 + 1;
      v1804 = i$$11 < length$$23;
    }
    return false;
  }
  function every(iterator$$20) {
    if (this == null) {
      throw JAM.new(TypeError, [], JAM.policy.p1);
    }
    var v1806 = iterator$$20;
    if (!v1806) {
      v1806 = Prototype.K;
    }
    iterator$$20 = v1806;
    var context$$20 = arguments[1];
    var object$$21 = JAM.call(Object, null, [this], JAM.policy.p1);
    var i$$12 = 0;
    var length$$24 = object$$21.length >>> 0;
    var v1809 = i$$12 < length$$24;
    for (;v1809;) {
      var v2907 = i$$12 in object$$21;
      if (v2907) {
        v2907 = !JAM.call(iterator$$20.call, iterator$$20, [context$$20, object$$21[i$$12], i$$12, object$$21], JAM.policy.p1);
      }
      if (v2907) {
        return false;
      }
      i$$12 = i$$12 + 1;
      v1809 = i$$12 < length$$24;
    }
    return true;
  }
  function inject$$1(memo$$1, iterator$$21) {
    var v1810 = iterator$$21;
    if (!v1810) {
      v1810 = Prototype.K;
    }
    iterator$$21 = v1810;
    var context$$21 = arguments[2];
    return JAM.call(_reduce.call, _reduce, [this, JAM.call(iterator$$21.bind, iterator$$21, [context$$21], JAM.policy.p1), memo$$1], JAM.policy.p1);
  }
  var arrayProto = Array.prototype;
  var slice$$2 = arrayProto.slice;
  var _each = arrayProto.forEach;
  if (!_each) {
    _each = each$$1;
  }
  if (arrayProto.map) {
    map = JAM.call(wrapNative, null, [Array.prototype.map], JAM.policy.p1);
  }
  if (arrayProto.filter) {
    filter$$2 = Array.prototype.filter;
  }
  if (arrayProto.some) {
    some = JAM.call(wrapNative, null, [Array.prototype.some], JAM.policy.p1);
  }
  if (arrayProto.every) {
    every = JAM.call(wrapNative, null, [Array.prototype.every], JAM.policy.p1);
  }
  var _reduce = arrayProto.reduce;
  if (!arrayProto.reduce) {
    inject$$1 = Enumerable.inject;
  }
  JAM.call(Object.extend, Object, [arrayProto, Enumerable], JAM.policy.p1);
  if (!arrayProto._reverse) {
    arrayProto._reverse = arrayProto.reverse;
  }
  JAM.call(Object.extend, Object, [arrayProto, {_each:_each, map:map, collect:map, select:filter$$2, filter:filter$$2, findAll:filter$$2, some:some, any:some, every:every, all:every, inject:inject$$1, clear:clear, first:first$$1, last:last, compact:compact, flatten:flatten, without:without, reverse:reverse, uniq:uniq, intersect:intersect, clone:clone$$1, toArray:clone$$1, size:size$$5, inspect:inspect$$3}], JAM.policy.p1);
  var CONCAT_ARGUMENTS_BUGGY = JAM.call(v66, null, [1, 2], JAM.policy.p1);
  if (CONCAT_ARGUMENTS_BUGGY) {
    arrayProto.concat = concat;
  }
  if (!arrayProto.indexOf) {
    arrayProto.indexOf = indexOf;
  }
  if (!arrayProto.lastIndexOf) {
    arrayProto.lastIndexOf = lastIndexOf;
  }
  return;
}
function v59() {
  function each(iterator$$1, context$$2) {
    try {
      JAM.call(this._each, this, [iterator$$1, context$$2], JAM.policy.p1);
    } catch (e$$7) {
      if (e$$7 != $break) {
        throw e$$7;
      }
    }
    return this;
  }
  function eachSlice(number, iterator$$2, context$$3) {
    var index$$39 = -number;
    var slices = [];
    var array$$11 = JAM.call(this.toArray, this, [], JAM.policy.p1);
    if (number < 1) {
      return array$$11;
    }
    var v1829 = (index$$39 = index$$39 + number) < array$$11.length;
    for (;v1829;) {
      JAM.call(slices.push, slices, [JAM.call(array$$11.slice, array$$11, [index$$39, index$$39 + number], JAM.policy.p1)], JAM.policy.p1);
      v1829 = (index$$39 = index$$39 + number) < array$$11.length;
    }
    return JAM.call(slices.collect, slices, [iterator$$2, context$$3], JAM.policy.p1);
  }
  function all(iterator$$3, context$$4) {
    function v41(value$$34, index$$40) {
      var v1830 = result$$1;
      if (v1830) {
        v1830 = !!JAM.call(iterator$$3.call, iterator$$3, [context$$4, value$$34, index$$40, this], JAM.policy.p1);
      }
      result$$1 = v1830;
      if (!result$$1) {
        throw $break;
      }
      return;
    }
    var v1832 = iterator$$3;
    if (!v1832) {
      v1832 = Prototype.K;
    }
    iterator$$3 = v1832;
    var result$$1 = true;
    JAM.call(this.each, this, [v41, this], JAM.policy.p1);
    return result$$1;
  }
  function any(iterator$$4, context$$5) {
    function v42(value$$35, index$$41) {
      if (result$$2 = !!JAM.call(iterator$$4.call, iterator$$4, [context$$5, value$$35, index$$41, this], JAM.policy.p1)) {
        throw $break;
      }
      return;
    }
    var v1834 = iterator$$4;
    if (!v1834) {
      v1834 = Prototype.K;
    }
    iterator$$4 = v1834;
    var result$$2 = false;
    JAM.call(this.each, this, [v42, this], JAM.policy.p1);
    return result$$2;
  }
  function collect(iterator$$5, context$$6) {
    function v43(value$$36, index$$42) {
      JAM.call(results$$3.push, results$$3, [JAM.call(iterator$$5.call, iterator$$5, [context$$6, value$$36, index$$42, this], JAM.policy.p1)], JAM.policy.p1);
      return;
    }
    var v1836 = iterator$$5;
    if (!v1836) {
      v1836 = Prototype.K;
    }
    iterator$$5 = v1836;
    var results$$3 = [];
    JAM.call(this.each, this, [v43, this], JAM.policy.p1);
    return results$$3;
  }
  function detect(iterator$$6, context$$7) {
    function v44(value$$37, index$$43) {
      if (JAM.call(iterator$$6.call, iterator$$6, [context$$7, value$$37, index$$43, this], JAM.policy.p1)) {
        result$$3 = value$$37;
        throw $break;
      }
      return;
    }
    var result$$3;
    JAM.call(this.each, this, [v44, this], JAM.policy.p1);
    return result$$3;
  }
  function findAll(iterator$$7, context$$8) {
    function v45(value$$38, index$$44) {
      if (JAM.call(iterator$$7.call, iterator$$7, [context$$8, value$$38, index$$44, this], JAM.policy.p1)) {
        JAM.call(results$$4.push, results$$4, [value$$38], JAM.policy.p1);
      }
      return;
    }
    var results$$4 = [];
    JAM.call(this.each, this, [v45, this], JAM.policy.p1);
    return results$$4;
  }
  function grep(filter$$1, iterator$$8, context$$9) {
    function v46(value$$39, index$$45) {
      if (JAM.call(filter$$1.match, filter$$1, [value$$39], JAM.policy.p1)) {
        JAM.call(results$$5.push, results$$5, [JAM.call(iterator$$8.call, iterator$$8, [context$$9, value$$39, index$$45, this], JAM.policy.p1)], JAM.policy.p1);
      }
      return;
    }
    var v1841 = iterator$$8;
    if (!v1841) {
      v1841 = Prototype.K;
    }
    iterator$$8 = v1841;
    var results$$5 = [];
    if (JAM.call(Object.isString, Object, [filter$$1], JAM.policy.p1)) {
      filter$$1 = JAM.new(RegExp, [JAM.call(RegExp.escape, RegExp, [filter$$1], JAM.policy.p1)], JAM.policy.p1);
    }
    JAM.call(this.each, this, [v46, this], JAM.policy.p1);
    return results$$5;
  }
  function include$$1(object$$17) {
    function v47(value$$40) {
      if (value$$40 == object$$17) {
        found = true;
        throw $break;
      }
      return;
    }
    if (JAM.call(Object.isFunction, Object, [this.indexOf], JAM.policy.p1)) {
      if (JAM.call(this.indexOf, this, [object$$17], JAM.policy.p1) != -1) {
        return true;
      }
    }
    var found = false;
    JAM.call(this.each, this, [v47], JAM.policy.p1);
    return found;
  }
  function inGroupsOf(number$$1, fillWith) {
    function v48(slice$$1) {
      var v1847 = slice$$1.length < number$$1;
      for (;v1847;) {
        JAM.call(slice$$1.push, slice$$1, [fillWith], JAM.policy.p1);
        v1847 = slice$$1.length < number$$1;
      }
      return slice$$1;
    }
    var v1848;
    if (JAM.call(Object.isUndefined, Object, [fillWith], JAM.policy.p1)) {
      v1848 = null;
    } else {
      v1848 = fillWith;
    }
    fillWith = v1848;
    return JAM.call(this.eachSlice, this, [number$$1, v48], JAM.policy.p1);
  }
  function inject(memo, iterator$$9, context$$10) {
    function v49(value$$41, index$$46) {
      memo = JAM.call(iterator$$9.call, iterator$$9, [context$$10, memo, value$$41, index$$46, this], JAM.policy.p1);
      return;
    }
    JAM.call(this.each, this, [v49, this], JAM.policy.p1);
    return memo;
  }
  function invoke(method$$4) {
    function v50(value$$42) {
      var v1849 = value$$42[method$$4];
      return JAM.call(v1849.apply, v1849, [value$$42, args$$7], JAM.policy.p1);
    }
    var v1850 = JAM.call($A, null, [arguments], JAM.policy.p1);
    var args$$7 = JAM.call(v1850.slice, v1850, [1], JAM.policy.p1);
    return JAM.call(this.map, this, [v50], JAM.policy.p1);
  }
  function max(iterator$$10, context$$11) {
    function v51(value$$43, index$$47) {
      value$$43 = JAM.call(iterator$$10.call, iterator$$10, [context$$11, value$$43, index$$47, this], JAM.policy.p1);
      var v2932 = result$$4 == null;
      if (!v2932) {
        v2932 = value$$43 >= result$$4;
      }
      if (v2932) {
        result$$4 = value$$43;
      }
      return;
    }
    var v1852 = iterator$$10;
    if (!v1852) {
      v1852 = Prototype.K;
    }
    iterator$$10 = v1852;
    var result$$4;
    JAM.call(this.each, this, [v51, this], JAM.policy.p1);
    return result$$4;
  }
  function min(iterator$$11, context$$12) {
    function v52(value$$44, index$$48) {
      value$$44 = JAM.call(iterator$$11.call, iterator$$11, [context$$12, value$$44, index$$48, this], JAM.policy.p1);
      var v2934 = result$$5 == null;
      if (!v2934) {
        v2934 = value$$44 < result$$5;
      }
      if (v2934) {
        result$$5 = value$$44;
      }
      return;
    }
    var v1854 = iterator$$11;
    if (!v1854) {
      v1854 = Prototype.K;
    }
    iterator$$11 = v1854;
    var result$$5;
    JAM.call(this.each, this, [v52, this], JAM.policy.p1);
    return result$$5;
  }
  function partition(iterator$$12, context$$13) {
    function v53(value$$45, index$$49) {
      var v2936;
      if (JAM.call(iterator$$12.call, iterator$$12, [context$$13, value$$45, index$$49, this], JAM.policy.p1)) {
        v2936 = trues;
      } else {
        v2936 = falses;
      }
      var v1855 = v2936;
      JAM.call(v1855.push, v1855, [value$$45], JAM.policy.p1);
      return;
    }
    var v1856 = iterator$$12;
    if (!v1856) {
      v1856 = Prototype.K;
    }
    iterator$$12 = v1856;
    var trues = [];
    var falses = [];
    JAM.call(this.each, this, [v53, this], JAM.policy.p1);
    return[trues, falses];
  }
  function pluck(property$$7) {
    function v54(value$$46) {
      JAM.call(results$$6.push, results$$6, [value$$46[property$$7]], JAM.policy.p1);
      return;
    }
    var results$$6 = [];
    JAM.call(this.each, this, [v54], JAM.policy.p1);
    return results$$6;
  }
  function reject(iterator$$13, context$$14) {
    function v55(value$$47, index$$50) {
      if (!JAM.call(iterator$$13.call, iterator$$13, [context$$14, value$$47, index$$50, this], JAM.policy.p1)) {
        JAM.call(results$$7.push, results$$7, [value$$47], JAM.policy.p1);
      }
      return;
    }
    var results$$7 = [];
    JAM.call(this.each, this, [v55, this], JAM.policy.p1);
    return results$$7;
  }
  function sortBy(iterator$$14, context$$15) {
    function v57(left$$2, right$$2) {
      var a$$6 = left$$2.criteria;
      var b = right$$2.criteria;
      var v1859;
      if (a$$6 < b) {
        v1859 = -1;
      } else {
        var v2939;
        if (a$$6 > b) {
          v2939 = 1;
        } else {
          v2939 = 0;
        }
        v1859 = v2939;
      }
      return v1859;
    }
    function v56(value$$48, index$$51) {
      return{value:value$$48, criteria:JAM.call(iterator$$14.call, iterator$$14, [context$$15, value$$48, index$$51, this], JAM.policy.p1)};
    }
    var v2941 = JAM.call(this.map, this, [v56, this], JAM.policy.p1);
    var v1861 = JAM.call(v2941.sort, v2941, [v57], JAM.policy.p1);
    return JAM.call(v1861.pluck, v1861, ["value"], JAM.policy.p1);
  }
  function toArray$$1() {
    return JAM.call(this.map, this, [], JAM.policy.p1);
  }
  function zip() {
    function v58(value$$49, index$$52) {
      return JAM.call(iterator$$15, null, [JAM.call(collections.pluck, collections, [index$$52], JAM.policy.p1)], JAM.policy.p1);
    }
    var iterator$$15 = Prototype.K;
    var args$$8 = JAM.call($A, null, [arguments], JAM.policy.p1);
    if (JAM.call(Object.isFunction, Object, [JAM.call(args$$8.last, args$$8, [], JAM.policy.p1)], JAM.policy.p1)) {
      iterator$$15 = JAM.call(args$$8.pop, args$$8, [], JAM.policy.p1);
    }
    var v2943 = [this];
    var v1864 = JAM.call(v2943.concat, v2943, [args$$8], JAM.policy.p1);
    var collections = JAM.call(v1864.map, v1864, [$A], JAM.policy.p1);
    return JAM.call(this.map, this, [v58], JAM.policy.p1);
  }
  function size$$4() {
    return JAM.call(this.toArray, this, [], JAM.policy.p1).length;
  }
  function inspect$$2() {
    var v3522 = JAM.call(this.toArray, this, [], JAM.policy.p1);
    return "#<Enumerable:" + JAM.call(v3522.inspect, v3522, [], JAM.policy.p1) + ">";
  }
  return{each:each, eachSlice:eachSlice, all:all, every:all, any:any, some:any, collect:collect, map:collect, detect:detect, findAll:findAll, select:findAll, filter:findAll, grep:grep, include:include$$1, member:include$$1, inGroupsOf:inGroupsOf, inject:inject, invoke:invoke, max:max, min:min, partition:partition, pluck:pluck, reject:reject, sortBy:sortBy, toArray:toArray$$1, entries:toArray$$1, zip:zip, size:size$$4, inspect:inspect$$2, find:detect};
}
function v40(object$$16) {
  function v39(match$$5) {
    if (object$$16 == null) {
      return match$$5[1] + "";
    }
    var v1869 = match$$5[1];
    if (!v1869) {
      v1869 = "";
    }
    var before$$1 = v1869;
    if (before$$1 == "\\") {
      return match$$5[2];
    }
    var ctx = object$$16;
    var expr$$3 = match$$5[3];
    var pattern$$9 = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;
    match$$5 = JAM.call(pattern$$9.exec, pattern$$9, [expr$$3], JAM.policy.p1);
    if (match$$5 == null) {
      return before$$1;
    }
    var v1875 = match$$5 != null;
    for (;v1875;) {
      var v1872;
      var v3523 = match$$5[1];
      if (JAM.call(v3523.startsWith, v3523, ["["], JAM.policy.p1)) {
        var v2946 = match$$5[2];
        v1872 = JAM.call(v2946.replace, v2946, [/\\\\]/g, "]"], JAM.policy.p1);
      } else {
        v1872 = match$$5[1];
      }
      var comp = v1872;
      ctx = ctx[comp];
      var v2948 = null == ctx;
      if (!v2948) {
        v2948 = "" == match$$5[3];
      }
      if (v2948) {
        break;
      }
      var v2949;
      if ("[" == match$$5[3]) {
        v2949 = match$$5[1].length;
      } else {
        v2949 = match$$5[0].length;
      }
      expr$$3 = JAM.call(expr$$3.substring, expr$$3, [v2949], JAM.policy.p1);
      match$$5 = JAM.call(pattern$$9.exec, pattern$$9, [expr$$3], JAM.policy.p1);
      v1875 = match$$5 != null;
    }
    return before$$1 + JAM.call(String.interpret, String, [ctx], JAM.policy.p1);
  }
  var v2950 = object$$16;
  if (v2950) {
    v2950 = JAM.call(Object.isFunction, Object, [object$$16.toTemplateReplacements], JAM.policy.p1);
  }
  if (v2950) {
    object$$16 = JAM.call(object$$16.toTemplateReplacements, object$$16, [], JAM.policy.p1);
  }
  var v1879 = this.template;
  return JAM.call(v1879.gsub, v1879, [this.pattern, v39], JAM.policy.p1);
}
function v38(template$$1, pattern$$8) {
  var v4019 = JAM.call(template$$1.toString, template$$1, [], JAM.policy.p1);
  this.template = v4019;
  var v1881 = pattern$$8;
  if (!v1881) {
    v1881 = Template.Pattern;
  }
  this.pattern = v1881;
  return;
}
function v37() {
  function prepareReplacement(replacement) {
    function v29(match) {
      return JAM.call(template.evaluate, template, [match], JAM.policy.p1);
    }
    if (JAM.call(Object.isFunction, Object, [replacement], JAM.policy.p1)) {
      return replacement;
    }
    var template = JAM.new(Template, [replacement], JAM.policy.p1);
    return v29;
  }
  function gsub(pattern$$1, replacement$$1) {
    var result = "";
    var source$$3 = this;
    var match$$1;
    replacement$$1 = JAM.call(prepareReplacement, null, [replacement$$1], JAM.policy.p1);
    if (JAM.call(Object.isString, Object, [pattern$$1], JAM.policy.p1)) {
      pattern$$1 = JAM.call(RegExp.escape, RegExp, [pattern$$1], JAM.policy.p1);
    }
    var v3530 = pattern$$1.length;
    if (!v3530) {
      v3530 = pattern$$1.source;
    }
    if (!v3530) {
      replacement$$1 = JAM.call(replacement$$1, null, [""], JAM.policy.p1);
      var v2953 = replacement$$1;
      var v3531 = JAM.call(source$$3.split, source$$3, [""], JAM.policy.p1);
      return v2953 + JAM.call(v3531.join, v3531, [replacement$$1], JAM.policy.p1) + replacement$$1;
    }
    var v1888 = source$$3.length > 0;
    for (;v1888;) {
      if (match$$1 = JAM.call(source$$3.match, source$$3, [pattern$$1], JAM.policy.p1)) {
        result = result + JAM.call(source$$3.slice, source$$3, [0, match$$1.index], JAM.policy.p1);
        result = result + JAM.call(String.interpret, String, [JAM.call(replacement$$1, null, [match$$1], JAM.policy.p1)], JAM.policy.p1);
        source$$3 = JAM.call(source$$3.slice, source$$3, [match$$1.index + match$$1[0].length], JAM.policy.p1);
      } else {
        result = result + source$$3;
        source$$3 = "";
      }
      v1888 = source$$3.length > 0;
    }
    return result;
  }
  function sub(pattern$$2, replacement$$2, count$$3) {
    function v30(match$$2) {
      if ((count$$3 = count$$3 - 1) < 0) {
        return match$$2[0];
      }
      return JAM.call(replacement$$2, null, [match$$2], JAM.policy.p1);
    }
    replacement$$2 = JAM.call(prepareReplacement, null, [replacement$$2], JAM.policy.p1);
    var v1890;
    if (JAM.call(Object.isUndefined, Object, [count$$3], JAM.policy.p1)) {
      v1890 = 1;
    } else {
      v1890 = count$$3;
    }
    count$$3 = v1890;
    return JAM.call(this.gsub, this, [pattern$$2, v30], JAM.policy.p1);
  }
  function scan(pattern$$3, iterator) {
    JAM.call(this.gsub, this, [pattern$$3, iterator], JAM.policy.p1);
    return JAM.call(String, null, [this], JAM.policy.p1);
  }
  function truncate(length$$16, truncation) {
    length$$16 = length$$16 || 30;
    var v1891;
    if (JAM.call(Object.isUndefined, Object, [truncation], JAM.policy.p1)) {
      v1891 = "...";
    } else {
      v1891 = truncation;
    }
    truncation = v1891;
    var v1892;
    if (this.length > length$$16) {
      v1892 = JAM.call(this.slice, this, [0, length$$16 - truncation.length], JAM.policy.p1) + truncation;
    } else {
      v1892 = JAM.call(String, null, [this], JAM.policy.p1);
    }
    return v1892;
  }
  function strip() {
    var v1893 = JAM.call(this.replace, this, [/^\s+/, ""], JAM.policy.p1);
    return JAM.call(v1893.replace, v1893, [/\s+$/, ""], JAM.policy.p1);
  }
  function stripTags() {
    return JAM.call(this.replace, this, [/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, ""], JAM.policy.p1);
  }
  function stripScripts() {
    return JAM.call(this.replace, this, [JAM.new(RegExp, [Prototype.ScriptFragment, "img"], JAM.policy.p1), ""], JAM.policy.p1);
  }
  function extractScripts() {
    function v31(scriptTag) {
      var v2969 = JAM.call(scriptTag.match, scriptTag, [matchOne], JAM.policy.p1);
      if (!v2969) {
        v2969 = ["", ""];
      }
      return v2969[1];
    }
    var matchAll = JAM.new(RegExp, [Prototype.ScriptFragment, "img"], JAM.policy.p1);
    var matchOne = JAM.new(RegExp, [Prototype.ScriptFragment, "im"], JAM.policy.p1);
    var v2970 = JAM.call(this.match, this, [matchAll], JAM.policy.p1);
    if (!v2970) {
      v2970 = [];
    }
    var v1898 = v2970;
    return JAM.call(v1898.map, v1898, [v31], JAM.policy.p1);
  }
  function evalScripts() {
    function v32(script) {
      if (JAM.isEval(eval)) {
        return eval("introspect(JAM.policy.pFull) { " + script + " }");
      } else {
        return JAM.call(eval, null, [script]);
      }
    }
    var v1899 = JAM.call(this.extractScripts, this, [], JAM.policy.p1);
    return JAM.call(v1899.map, v1899, [v32], JAM.policy.p1);
  }
  function escapeHTML() {
    var v2971 = JAM.call(this.replace, this, [/&/g, "&amp;"], JAM.policy.p1);
    var v1900 = JAM.call(v2971.replace, v2971, [/</g, "&lt;"], JAM.policy.p1);
    return JAM.call(v1900.replace, v1900, [/>/g, "&gt;"], JAM.policy.p1);
  }
  function unescapeHTML() {
    var v3539 = JAM.call(this.stripTags, this, [], JAM.policy.p1);
    var v2972 = JAM.call(v3539.replace, v3539, [/&lt;/g, "<"], JAM.policy.p1);
    var v1901 = JAM.call(v2972.replace, v2972, [/&gt;/g, ">"], JAM.policy.p1);
    return JAM.call(v1901.replace, v1901, [/&amp;/g, "&"], JAM.policy.p1);
  }
  function toQueryParams(separator) {
    function v33(hash, pair) {
      if ((pair = JAM.call(pair.split, pair, ["="], JAM.policy.p1))[0]) {
        var key$$15 = JAM.call(decodeURIComponent, null, [JAM.call(pair.shift, pair, [], JAM.policy.p1)], JAM.policy.p1);
        var v1903;
        if (pair.length > 1) {
          v1903 = JAM.call(pair.join, pair, ["="], JAM.policy.p1);
        } else {
          v1903 = pair[0];
        }
        var value$$33 = v1903;
        if (value$$33 != undefined) {
          value$$33 = JAM.call(decodeURIComponent, null, [value$$33], JAM.policy.p1);
        }
        if (key$$15 in hash) {
          if (!JAM.call(Object.isArray, Object, [hash[key$$15]], JAM.policy.p1)) {
            JAM.set(hash, key$$15, [hash[key$$15]], JAM.policy.p2);
          }
          var v1907 = hash[key$$15];
          JAM.call(v1907.push, v1907, [value$$33], JAM.policy.p1);
        } else {
          JAM.set(hash, key$$15, value$$33, JAM.policy.p2);
        }
      }
      return hash;
    }
    var v1910 = JAM.call(this.strip, this, [], JAM.policy.p1);
    var match$$3 = JAM.call(v1910.match, v1910, [/([^?#]*)(#.*)?$/], JAM.policy.p1);
    if (!match$$3) {
      return{};
    }
    var v2976 = match$$3[1];
    var v1912 = JAM.call(v2976.split, v2976, [separator || "&"], JAM.policy.p1);
    return JAM.call(v1912.inject, v1912, [{}, v33], JAM.policy.p1);
  }
  function toArray() {
    return JAM.call(this.split, this, [""], JAM.policy.p1);
  }
  function succ() {
    return JAM.call(this.slice, this, [0, this.length - 1], JAM.policy.p1) + JAM.call(String.fromCharCode, String, [JAM.call(this.charCodeAt, this, [this.length - 1], JAM.policy.p1) + 1], JAM.policy.p1);
  }
  function times(count$$4) {
    var v1915;
    if (count$$4 < 1) {
      v1915 = "";
    } else {
      var v2980 = JAM.new(Array, [count$$4 + 1], JAM.policy.p1);
      v1915 = JAM.call(v2980.join, v2980, [this], JAM.policy.p1);
    }
    return v1915;
  }
  function camelize() {
    function v34(match$$4, chr) {
      var v1916;
      if (chr) {
        v1916 = JAM.call(chr.toUpperCase, chr, [], JAM.policy.p1);
      } else {
        v1916 = "";
      }
      return v1916;
    }
    return JAM.call(this.replace, this, [/-+(.)?/g, v34], JAM.policy.p1);
  }
  function capitalize() {
    var v2982 = JAM.call(this.charAt, this, [0], JAM.policy.p1);
    var v1917 = JAM.call(v2982.toUpperCase, v2982, [], JAM.policy.p1);
    var v2983 = JAM.call(this.substring, this, [1], JAM.policy.p1);
    return v1917 + JAM.call(v2983.toLowerCase, v2983, [], JAM.policy.p1);
  }
  function underscore() {
    var v3778 = JAM.call(this.replace, this, [/::/g, "/"], JAM.policy.p1);
    var v3545 = JAM.call(v3778.replace, v3778, [/([A-Z]+)([A-Z][a-z])/g, "$1_$2"], JAM.policy.p1);
    var v2984 = JAM.call(v3545.replace, v3545, [/([a-z\d])([A-Z])/g, "$1_$2"], JAM.policy.p1);
    var v1919 = JAM.call(v2984.replace, v2984, [/-/g, "_"], JAM.policy.p1);
    return JAM.call(v1919.toLowerCase, v1919, [], JAM.policy.p1);
  }
  function dasherize() {
    return JAM.call(this.replace, this, [/_/g, "-"], JAM.policy.p1);
  }
  function inspect$$1(useDoubleQuotes) {
    function v35(character) {
      if (character in String.specialChar) {
        return String.specialChar[character];
      }
      var v2986 = JAM.call(character.charCodeAt, character, [], JAM.policy.p1);
      return "\\u00" + JAM.call(v2986.toPaddedString, v2986, [2, 16], JAM.policy.p1);
    }
    var escapedString = JAM.call(this.replace, this, [/[\x00-\x1f\\]/g, v35], JAM.policy.p1);
    if (useDoubleQuotes) {
      return'"' + JAM.call(escapedString.replace, escapedString, [/"/g, '\\"'], JAM.policy.p1) + '"';
    }
    return "'" + JAM.call(escapedString.replace, escapedString, [/'/g, "\\'"], JAM.policy.p1) + "'";
  }
  function unfilterJSON(filter) {
    var v2989 = filter;
    if (!v2989) {
      v2989 = Prototype.JSONFilter;
    }
    return JAM.call(this.replace, this, [v2989, "$1"], JAM.policy.p1);
  }
  function isJSON() {
    var str$$8 = this;
    if (JAM.call(str$$8.blank, str$$8, [], JAM.policy.p1)) {
      return false;
    }
    str$$8 = JAM.call(str$$8.replace, str$$8, [/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@"], JAM.policy.p1);
    str$$8 = JAM.call(str$$8.replace, str$$8, [/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]"], JAM.policy.p1);
    str$$8 = JAM.call(str$$8.replace, str$$8, [/(?:^|:|,)(?:\s*\[)+/g, ""], JAM.policy.p1);
    return JAM.call(/^[\],:{}\s]*$/.test, /^[\],:{}\s]*$/, [str$$8], JAM.policy.p1);
  }
  function evalJSON(sanitize) {
    function v36(a$$5) {
      var v3779 = JAM.call(a$$5.charCodeAt, a$$5, [0], JAM.policy.p1);
      var v2990 = "0000" + JAM.call(v3779.toString, v3779, [16], JAM.policy.p1);
      return "\\u" + JAM.call(v2990.slice, v2990, [-4], JAM.policy.p1);
    }
    var json = JAM.call(this.unfilterJSON, this, [], JAM.policy.p1);
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    if (JAM.call(cx.test, cx, [json], JAM.policy.p1)) {
      json = JAM.call(json.replace, json, [cx, v36], JAM.policy.p1);
    }
    try {
      var v2991 = !sanitize;
      if (!v2991) {
        v2991 = JAM.call(json.isJSON, json, [], JAM.policy.p1);
      }
      if (v2991) {
        var v1929 = "(" + json + ")";
        if (JAM.isEval(eval)) {
          return eval("introspect(JAM.policy.pFull) { " + v1929 + " }");
        } else {
          return JAM.call(eval, null, [v1929]);
        }
      }
    } catch (e$$6) {
    }
    throw JAM.new(SyntaxError, ["Badly formed JSON string: " + JAM.call(this.inspect, this, [], JAM.policy.p1)], JAM.policy.p1);
  }
  function parseJSON() {
    var json$$1 = JAM.call(this.unfilterJSON, this, [], JAM.policy.p1);
    return JAM.call(JSON.parse, JSON, [json$$1], JAM.policy.p1);
  }
  function include(pattern$$4) {
    return JAM.call(this.indexOf, this, [pattern$$4], JAM.policy.p1) > -1;
  }
  function startsWith(pattern$$5) {
    return JAM.call(this.lastIndexOf, this, [pattern$$5, 0], JAM.policy.p1) === 0;
  }
  function endsWith(pattern$$6) {
    var d = this.length - pattern$$6.length;
    var v1936 = d >= 0;
    if (v1936) {
      v1936 = JAM.call(this.indexOf, this, [pattern$$6, d], JAM.policy.p1) === d;
    }
    return v1936;
  }
  function empty() {
    return this == "";
  }
  function blank() {
    return JAM.call(/^\s*$/.test, /^\s*$/, [this], JAM.policy.p1);
  }
  function interpolate(object$$15, pattern$$7) {
    var v1937 = JAM.new(Template, [this, pattern$$7], JAM.policy.p1);
    return JAM.call(v1937.evaluate, v1937, [object$$15], JAM.policy.p1);
  }
  var v2995 = window.JSON;
  if (v2995) {
    v2995 = typeof JSON.parse === "function";
  }
  var v1938 = v2995;
  if (v1938) {
    v1938 = JAM.call(JSON.parse, JSON, ['{"test": true}'], JAM.policy.p1).test;
  }
  var NATIVE_JSON_PARSE_SUPPORT = v1938;
  var v2997 = String.prototype.trim;
  if (!v2997) {
    v2997 = strip;
  }
  var v1939 = v2997;
  var v2998;
  if (NATIVE_JSON_PARSE_SUPPORT) {
    v2998 = parseJSON;
  } else {
    v2998 = evalJSON;
  }
  return{gsub:gsub, sub:sub, scan:scan, truncate:truncate, strip:v1939, stripTags:stripTags, stripScripts:stripScripts, extractScripts:extractScripts, evalScripts:evalScripts, escapeHTML:escapeHTML, unescapeHTML:unescapeHTML, toQueryParams:toQueryParams, parseQuery:toQueryParams, toArray:toArray, succ:succ, times:times, camelize:camelize, capitalize:capitalize, underscore:underscore, dasherize:dasherize, inspect:inspect$$1, unfilterJSON:unfilterJSON, isJSON:isJSON, evalJSON:v2998, include:include, 
  startsWith:startsWith, endsWith:endsWith, empty:empty, blank:blank, interpolate:interpolate};
}
function v28(value$$32) {
  var v1941;
  if (value$$32 == null) {
    v1941 = "";
  } else {
    v1941 = JAM.call(String, null, [value$$32], JAM.policy.p1);
  }
  return v1941;
}
function v27() {
  if (!this.currentlyExecuting) {
    try {
      this.currentlyExecuting = true;
      JAM.call(this.execute, this, [], JAM.policy.p1);
      this.currentlyExecuting = false;
    } catch (e$$5) {
      this.currentlyExecuting = false;
      throw e$$5;
    }
  }
  return;
}
function v26() {
  if (!this.timer) {
    return;
  }
  JAM.call(clearInterval, null, [this.timer], JAM.policy.p1);
  this.timer = null;
  return;
}
function v25() {
  JAM.call(this.callback, this, [this], JAM.policy.p1);
  return;
}
function v24() {
  var v3002 = this.onTimerEvent;
  var v4020 = JAM.call(setInterval, null, [JAM.call(v3002.bind, v3002, [this], JAM.policy.p1), this.frequency * 1E3], JAM.policy.p1);
  this.timer = v4020;
  return;
}
function v23(callback$$25, frequency) {
  this.callback = callback$$25;
  this.frequency = frequency;
  this.currentlyExecuting = false;
  JAM.call(this.registerCallback, this, [], JAM.policy.p1);
  return;
}
function v22(str$$7) {
  var v1947 = JAM.call(String, null, [str$$7], JAM.policy.p1);
  return JAM.call(v1947.replace, v1947, [/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"], JAM.policy.p1);
}
function v21(proto$$1) {
  function toISOString() {
    var v3955 = JAM.call(this.getUTCFullYear, this, [], JAM.policy.p1) + "-";
    var v3963 = JAM.call(this.getUTCMonth, this, [], JAM.policy.p1) + 1;
    var v3945 = v3955 + JAM.call(v3963.toPaddedString, v3963, [2], JAM.policy.p1) + "-";
    var v3951 = JAM.call(this.getUTCDate, this, [], JAM.policy.p1);
    var v3920 = v3945 + JAM.call(v3951.toPaddedString, v3951, [2], JAM.policy.p1) + "T";
    var v3936 = JAM.call(this.getUTCHours, this, [], JAM.policy.p1);
    var v3781 = v3920 + JAM.call(v3936.toPaddedString, v3936, [2], JAM.policy.p1) + ":";
    var v3875 = JAM.call(this.getUTCMinutes, this, [], JAM.policy.p1);
    var v3004 = v3781 + JAM.call(v3875.toPaddedString, v3875, [2], JAM.policy.p1) + ":";
    var v3553 = JAM.call(this.getUTCSeconds, this, [], JAM.policy.p1);
    return v3004 + JAM.call(v3553.toPaddedString, v3553, [2], JAM.policy.p1) + "Z";
  }
  function toJSON$$1() {
    return JAM.call(this.toISOString, this, [], JAM.policy.p1);
  }
  if (!proto$$1.toISOString) {
    proto$$1.toISOString = toISOString;
  }
  if (!proto$$1.toJSON) {
    proto$$1.toJSON = toJSON$$1;
  }
  return;
}
function v20() {
  function update(array$$9, args) {
    var arrayLength = array$$9.length;
    var length$$15 = args.length;
    var v1952 = length$$15;
    length$$15 = length$$15 - 1;
    for (;v1952;) {
      JAM.set(array$$9, arrayLength + length$$15, args[length$$15], JAM.policy.p2);
      v1952 = length$$15;
      length$$15 = length$$15 - 1;
    }
    return array$$9;
  }
  function merge(array$$10, args$$1) {
    array$$10 = JAM.call(slice.call, slice, [array$$10, 0], JAM.policy.p1);
    return JAM.call(update, null, [array$$10, args$$1], JAM.policy.p1);
  }
  function argumentNames() {
    var v3876 = JAM.call(this.toString, this, [], JAM.policy.p1);
    var v3554 = JAM.call(v3876.match, v3876, [/^[\s\(]*function[^(]*\(([^)]*)\)/], JAM.policy.p1)[1];
    var v3008 = JAM.call(v3554.replace, v3554, [/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, ""], JAM.policy.p1);
    var v1953 = JAM.call(v3008.replace, v3008, [/\s+/g, ""], JAM.policy.p1);
    var names = JAM.call(v1953.split, v1953, [","], JAM.policy.p1);
    var v1954;
    var v3555 = names.length == 1;
    if (v3555) {
      v3555 = !names[0];
    }
    if (v3555) {
      v1954 = [];
    } else {
      v1954 = names;
    }
    return v1954;
  }
  function bind(context) {
    function bound$$2() {
      var a = JAM.call(merge, null, [args$$2, arguments], JAM.policy.p1);
      var c = context;
      var v1955;
      if (this instanceof bound$$2) {
        v1955 = this;
      } else {
        v1955 = context;
      }
      c = v1955;
      return JAM.call(__method.apply, __method, [c, a], JAM.policy.p1);
    }
    function nop() {
      return;
    }
    var v3011 = arguments.length < 2;
    if (v3011) {
      v3011 = JAM.call(Object.isUndefined, Object, [arguments[0]], JAM.policy.p1);
    }
    if (v3011) {
      return this;
    }
    if (!JAM.call(Object.isFunction, Object, [this], JAM.policy.p1)) {
      throw JAM.new(TypeError, ["The object is not callable."], JAM.policy.p1);
    }
    var __method = this;
    var args$$2 = JAM.call(slice.call, slice, [arguments, 1], JAM.policy.p1);
    nop.prototype = this.prototype;
    var v1958 = bound$$2;
    var v4021 = JAM.new(nop, [], JAM.policy.p1);
    v1958.prototype = v4021;
    return bound$$2;
  }
  function bindAsEventListener(context$$1) {
    function v15(event$$1) {
      var v3558 = event$$1;
      if (!v3558) {
        v3558 = window.event;
      }
      var a$$1 = JAM.call(update, null, [[v3558], args$$3], JAM.policy.p1);
      return JAM.call(__method$$1.apply, __method$$1, [context$$1, a$$1], JAM.policy.p1);
    }
    var __method$$1 = this;
    var args$$3 = JAM.call(slice.call, slice, [arguments, 1], JAM.policy.p1);
    return v15;
  }
  function curry() {
    function v16() {
      var a$$2 = JAM.call(merge, null, [args$$4, arguments], JAM.policy.p1);
      return JAM.call(__method$$2.apply, __method$$2, [this, a$$2], JAM.policy.p1);
    }
    if (!arguments.length) {
      return this;
    }
    var __method$$2 = this;
    var args$$4 = JAM.call(slice.call, slice, [arguments, 0], JAM.policy.p1);
    return v16;
  }
  function delay$$3(timeout) {
    function v17() {
      return JAM.call(__method$$3.apply, __method$$3, [__method$$3, args$$5], JAM.policy.p1);
    }
    var __method$$3 = this;
    var args$$5 = JAM.call(slice.call, slice, [arguments, 1], JAM.policy.p1);
    timeout = timeout * 1E3;
    return JAM.call(window.setTimeout, window, [v17, timeout], JAM.policy.p1);
  }
  function defer() {
    var args$$6 = JAM.call(update, null, [[.01], arguments], JAM.policy.p1);
    var v1962 = this.delay;
    return JAM.call(v1962.apply, v1962, [this, args$$6], JAM.policy.p1);
  }
  function wrap(wrapper) {
    function v18() {
      var a$$3 = JAM.call(update, null, [[JAM.call(__method$$4.bind, __method$$4, [this], JAM.policy.p1)], arguments], JAM.policy.p1);
      return JAM.call(wrapper.apply, wrapper, [this, a$$3], JAM.policy.p1);
    }
    var __method$$4 = this;
    return v18;
  }
  function methodize() {
    function v19() {
      var a$$4 = JAM.call(update, null, [[this], arguments], JAM.policy.p1);
      return JAM.call(__method$$5.apply, __method$$5, [null, a$$4], JAM.policy.p1);
    }
    if (this._methodized) {
      return this._methodized;
    }
    var __method$$5 = this;
    return this._methodized = v19;
  }
  var slice = Array.prototype.slice;
  var extensions = {argumentNames:argumentNames, bindAsEventListener:bindAsEventListener, curry:curry, delay:delay$$3, defer:defer, wrap:wrap, methodize:methodize};
  if (!Function.prototype.bind) {
    extensions.bind = bind;
  }
  return extensions;
}
function v14() {
  function v13() {
    var p$$1;
    for (p$$1 in{toString:1}) {
      if (p$$1 === "toString") {
        return false;
      }
    }
    return true;
  }
  function Type(o) {
    switch(o) {
      case null:
        return NULL_TYPE;
      case void 0:
        return UNDEFINED_TYPE;
    }
    var type$$25 = typeof o;
    switch(type$$25) {
      case "boolean":
        return BOOLEAN_TYPE;
      case "number":
        return NUMBER_TYPE;
      case "string":
        return STRING_TYPE;
    }
    return OBJECT_TYPE;
  }
  function extend(destination, source$$2) {
    var property$$4;
    for (property$$4 in source$$2) {
      JAM.set(destination, property$$4, source$$2[property$$4], JAM.policy.p2);
    }
    return destination;
  }
  function inspect(object) {
    try {
      if (JAM.call(isUndefined, null, [object], JAM.policy.p1)) {
        return "undefined";
      }
      if (object === null) {
        return "null";
      }
      var v1972;
      if (object.inspect) {
        v1972 = JAM.call(object.inspect, object, [], JAM.policy.p1);
      } else {
        v1972 = JAM.call(String, null, [object], JAM.policy.p1);
      }
      return v1972;
    } catch (e$$4) {
      if (e$$4 instanceof RangeError) {
        return "...";
      }
      throw e$$4;
    }
    return;
  }
  function toJSON(value$$30) {
    return JAM.call(Str, null, ["", {"":value$$30}, []], JAM.policy.p1);
  }
  function Str(key$$14, holder, stack) {
    var value$$31 = holder[key$$14];
    var v3018 = JAM.call(Type, null, [value$$31], JAM.policy.p1) === OBJECT_TYPE;
    if (v3018) {
      v3018 = typeof value$$31.toJSON === "function";
    }
    if (v3018) {
      value$$31 = JAM.call(value$$31.toJSON, value$$31, [key$$14], JAM.policy.p1);
    }
    var _class = JAM.call(_toString.call, _toString, [value$$31], JAM.policy.p1);
    introspect(JAM.policy.p1) {
      switch(_class) {
        case NUMBER_CLASS:
        ;
        case BOOLEAN_CLASS:
        ;
        case STRING_CLASS:
          value$$31 = JAM.call(value$$31.valueOf, value$$31, [], JAM.policy.p1);
      }
    }
    switch(value$$31) {
      case null:
        return "null";
      case true:
        return "true";
      case false:
        return "false";
    }
    var type$$26 = typeof value$$31;
    introspect(JAM.policy.p1) {
      switch(type$$26) {
        case "string":
          return JAM.call(value$$31.inspect, value$$31, [true], JAM.policy.p1);
        case "number":
          var v1976;
          var v3019 = JAM.call(isFinite, null, [value$$31], JAM.policy.p1);
          if (v3019) {
            v1976 = JAM.call(String, null, [value$$31], JAM.policy.p1);
          } else {
            v1976 = "null";
          }
          return v1976;
        case "object":
          var i$$3 = 0;
          var length$$14 = stack.length;
          var v1979 = i$$3 < length$$14;
          for (;v1979;) {
            var v3020 = stack[i$$3];
            var v1978 = v3020 === value$$31;
            if (v1978) {
              var v3021 = "Cyclic reference to '" + value$$31;
              var v1977 = v3021 + "' in object";
              throw JAM.new(TypeError, [v1977], JAM.policy.p1);
            }
            i$$3 = i$$3 + 1;
            v1979 = i$$3 < length$$14;
          }
          JAM.call(stack.push, stack, [value$$31], JAM.policy.p1);
          var partial = [];
          var v1987 = _class === ARRAY_CLASS;
          if (v1987) {
            i$$3 = 0;
            length$$14 = value$$31.length;
            var v1981 = i$$3 < length$$14;
            for (;v1981;) {
              var str$$6 = JAM.call(Str, null, [i$$3, value$$31, stack], JAM.policy.p1);
              var v3022;
              var v3788 = typeof str$$6;
              var v3562 = v3788 === "undefined";
              if (v3562) {
                v3022 = "null";
              } else {
                v3022 = str$$6;
              }
              var v1980 = v3022;
              JAM.call(partial.push, partial, [v1980], JAM.policy.p1);
              i$$3 = i$$3 + 1;
              v1981 = i$$3 < length$$14;
            }
            var v3023 = JAM.call(partial.join, partial, [","], JAM.policy.p1);
            var v1982 = "[" + v3023;
            partial = v1982 + "]";
          } else {
            var keys$$1 = JAM.call(Object.keys, Object, [value$$31], JAM.policy.p1);
            i$$3 = 0;
            length$$14 = keys$$1.length;
            var v1985 = i$$3 < length$$14;
            for (;v1985;) {
              key$$14 = keys$$1[i$$3];
              str$$6 = JAM.call(Str, null, [key$$14, value$$31, stack], JAM.policy.p1);
              var v3024 = typeof str$$6;
              var v1984 = v3024 !== "undefined";
              if (v1984) {
                var v3563 = JAM.call(key$$14.inspect, key$$14, [true], JAM.policy.p1);
                var v3025 = v3563 + ":";
                var v1983 = v3025 + str$$6;
                JAM.call(partial.push, partial, [v1983], JAM.policy.p1);
              }
              i$$3 = i$$3 + 1;
              v1985 = i$$3 < length$$14;
            }
            var v3026 = JAM.call(partial.join, partial, [","], JAM.policy.p1);
            var v1986 = "{" + v3026;
            partial = v1986 + "}";
          }
          JAM.call(stack.pop, stack, [], JAM.policy.p1);
          return partial;
      }
    }
    return;
  }
  function stringify(object$$1) {
    return JAM.call(JSON.stringify, JSON, [object$$1], JAM.policy.p1);
  }
  function toQueryString(object$$2) {
    var v1988 = JAM.call($H, null, [object$$2], JAM.policy.p1);
    return JAM.call(v1988.toQueryString, v1988, [], JAM.policy.p1);
  }
  function toHTML(object$$3) {
    var v1989;
    var v3564 = object$$3;
    if (v3564) {
      v3564 = object$$3.toHTML;
    }
    if (v3564) {
      v1989 = JAM.call(object$$3.toHTML, object$$3, [], JAM.policy.p1);
    } else {
      v1989 = JAM.call(String.interpret, String, [object$$3], JAM.policy.p1);
    }
    return v1989;
  }
  function keys(object$$4) {
    if (JAM.call(Type, null, [object$$4], JAM.policy.p1) !== OBJECT_TYPE) {
      throw JAM.new(TypeError, [], JAM.policy.p1);
    }
    var results$$1 = [];
    var property$$5;
    for (property$$5 in object$$4) {
      if (JAM.call(_hasOwnProperty.call, _hasOwnProperty, [object$$4, property$$5], JAM.policy.p1)) {
        JAM.call(results$$1.push, results$$1, [property$$5], JAM.policy.p1);
      }
    }
    if (IS_DONTENUM_BUGGY$$1) {
      var i$$4 = 0;
      var v1993 = property$$5 = DONT_ENUMS[i$$4];
      for (;v1993;) {
        if (JAM.call(_hasOwnProperty.call, _hasOwnProperty, [object$$4, property$$5], JAM.policy.p1)) {
          JAM.call(results$$1.push, results$$1, [property$$5], JAM.policy.p1);
        }
        i$$4 = i$$4 + 1;
        v1993 = property$$5 = DONT_ENUMS[i$$4];
      }
    }
    return results$$1;
  }
  function values$$4(object$$5) {
    var results$$2 = [];
    var property$$6;
    for (property$$6 in object$$5) {
      JAM.call(results$$2.push, results$$2, [object$$5[property$$6]], JAM.policy.p1);
    }
    return results$$2;
  }
  function clone(object$$6) {
    return JAM.call(extend, null, [{}, object$$6], JAM.policy.p1);
  }
  function isElement(object$$7) {
    var v3565 = object$$7;
    if (v3565) {
      v3565 = object$$7.nodeType == 1;
    }
    return!!v3565;
  }
  function isArray(object$$8) {
    return JAM.call(_toString.call, _toString, [object$$8], JAM.policy.p1) === ARRAY_CLASS;
  }
  function isHash(object$$9) {
    return object$$9 instanceof Hash;
  }
  function isFunction(object$$10) {
    return JAM.call(_toString.call, _toString, [object$$10], JAM.policy.p1) === FUNCTION_CLASS;
  }
  function isString(object$$11) {
    return JAM.call(_toString.call, _toString, [object$$11], JAM.policy.p1) === STRING_CLASS;
  }
  function isNumber(object$$12) {
    return JAM.call(_toString.call, _toString, [object$$12], JAM.policy.p1) === NUMBER_CLASS;
  }
  function isDate(object$$13) {
    return JAM.call(_toString.call, _toString, [object$$13], JAM.policy.p1) === DATE_CLASS;
  }
  function isUndefined(object$$14) {
    return typeof object$$14 === "undefined";
  }
  var _toString = Object.prototype.toString;
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var NULL_TYPE = "Null";
  var UNDEFINED_TYPE = "Undefined";
  var BOOLEAN_TYPE = "Boolean";
  var NUMBER_TYPE = "Number";
  var STRING_TYPE = "String";
  var OBJECT_TYPE = "Object";
  var FUNCTION_CLASS = "[object Function]";
  var BOOLEAN_CLASS = "[object Boolean]";
  var NUMBER_CLASS = "[object Number]";
  var STRING_CLASS = "[object String]";
  var ARRAY_CLASS = "[object Array]";
  var DATE_CLASS = "[object Date]";
  var v3566 = window.JSON;
  if (v3566) {
    v3566 = typeof JSON.stringify === "function";
  }
  var v3030 = v3566;
  if (v3030) {
    v3030 = JAM.call(JSON.stringify, JSON, [0], JAM.policy.p1) === "0";
  }
  var v2004 = v3030;
  if (v2004) {
    v2004 = typeof JAM.call(JSON.stringify, JSON, [Prototype.K], JAM.policy.p1) === "undefined";
  }
  var NATIVE_JSON_STRINGIFY_SUPPORT = v2004;
  var DONT_ENUMS = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
  var IS_DONTENUM_BUGGY$$1 = JAM.call(v13, null, [], JAM.policy.p1);
  var v3032 = typeof Array.isArray == "function";
  if (v3032) {
    v3032 = JAM.call(Array.isArray, Array, [[]], JAM.policy.p1);
  }
  var v2005 = v3032;
  if (v2005) {
    v2005 = !JAM.call(Array.isArray, Array, [{}], JAM.policy.p1);
  }
  var hasNativeIsArray = v2005;
  if (hasNativeIsArray) {
    isArray = Array.isArray;
  }
  var v3570;
  if (NATIVE_JSON_STRINGIFY_SUPPORT) {
    v3570 = stringify;
  } else {
    v3570 = toJSON;
  }
  var v3034 = v3570;
  var v3571 = Object.keys;
  if (!v3571) {
    v3571 = keys;
  }
  JAM.call(extend, null, [Object, {extend:extend, inspect:inspect, toJSON:v3034, toQueryString:toQueryString, toHTML:toHTML, keys:v3571, values:values$$4, clone:clone, isElement:isElement, isArray:isArray, isHash:isHash, isFunction:isFunction, isString:isString, isNumber:isNumber, isDate:isDate, isUndefined:isUndefined}], JAM.policy.p1);
  return;
}
function v12() {
  function v11() {
    var p;
    for (p in{toString:1}) {
      if (p === "toString") {
        return false;
      }
    }
    return true;
  }
  function subclass() {
    return;
  }
  function create() {
    function klass() {
      var v2009 = this.initialize;
      JAM.call(v2009.apply, v2009, [this, arguments], JAM.policy.p1);
      return;
    }
    var parent = null;
    var properties = JAM.call($A, null, [arguments], JAM.policy.p1);
    if (JAM.call(Object.isFunction, Object, [properties[0]], JAM.policy.p1)) {
      parent = JAM.call(properties.shift, properties, [], JAM.policy.p1);
    }
    JAM.call(Object.extend, Object, [klass, Class.Methods], JAM.policy.p1);
    klass.superclass = parent;
    klass.subclasses = [];
    if (parent) {
      subclass.prototype = parent.prototype;
      var v2012 = klass;
      var v4022 = JAM.new(subclass, [], JAM.policy.p1);
      v2012.prototype = v4022;
      var v2013 = parent.subclasses;
      JAM.call(v2013.push, v2013, [klass], JAM.policy.p1);
    }
    var i$$1 = 0;
    var length$$12 = properties.length;
    var v2015 = i$$1 < length$$12;
    for (;v2015;) {
      JAM.call(klass.addMethods, klass, [properties[i$$1]], JAM.policy.p1);
      i$$1 = i$$1 + 1;
      v2015 = i$$1 < length$$12;
    }
    if (!klass.prototype.initialize) {
      klass.prototype.initialize = Prototype.emptyFunction;
    }
    klass.prototype.constructor = klass;
    return klass;
  }
  function addMethods(source$$1) {
    function v10(method$$3) {
      function v9() {
        var v2019 = method$$3.toString;
        return JAM.call(v2019.call, v2019, [method$$3], JAM.policy.p1);
      }
      return v9;
    }
    function v8(method$$2) {
      function v7() {
        var v2020 = method$$2.valueOf;
        return JAM.call(v2020.call, v2020, [method$$2], JAM.policy.p1);
      }
      return v7;
    }
    function v6(m) {
      function v5() {
        var v2021 = ancestor[m];
        return JAM.call(v2021.apply, v2021, [this, arguments], JAM.policy.p1);
      }
      return v5;
    }
    var v2022 = this.superclass;
    if (v2022) {
      v2022 = this.superclass.prototype;
    }
    var ancestor = v2022;
    var properties$$1 = JAM.call(Object.keys, Object, [source$$1], JAM.policy.p1);
    if (IS_DONTENUM_BUGGY) {
      if (source$$1.toString != Object.prototype.toString) {
        JAM.call(properties$$1.push, properties$$1, ["toString"], JAM.policy.p1);
      }
      if (source$$1.valueOf != Object.prototype.valueOf) {
        JAM.call(properties$$1.push, properties$$1, ["valueOf"], JAM.policy.p1);
      }
    }
    var i$$2 = 0;
    var length$$13 = properties$$1.length;
    var v2030 = i$$2 < length$$13;
    for (;v2030;) {
      var property$$3 = properties$$1[i$$2];
      var value$$29 = source$$1[property$$3];
      var v3575 = ancestor;
      if (v3575) {
        v3575 = JAM.call(Object.isFunction, Object, [value$$29], JAM.policy.p1);
      }
      var v3043 = v3575;
      if (v3043) {
        v3043 = JAM.call(value$$29.argumentNames, value$$29, [], JAM.policy.p1)[0] == "$super";
      }
      if (v3043) {
        var method$$1 = value$$29;
        var v2025 = JAM.call(v6, null, [property$$3], JAM.policy.p1);
        value$$29 = JAM.call(v2025.wrap, v2025, [method$$1], JAM.policy.p1);
        var v2026 = value$$29;
        var v4023 = JAM.call(v8, null, [method$$1], JAM.policy.p1);
        v2026.valueOf = v4023;
        var v2027 = value$$29;
        var v4024 = JAM.call(v10, null, [method$$1], JAM.policy.p1);
        v2027.toString = v4024;
      }
      JAM.set(this.prototype, property$$3, value$$29, JAM.policy.p2);
      i$$2 = i$$2 + 1;
      v2030 = i$$2 < length$$13;
    }
    return this;
  }
  var IS_DONTENUM_BUGGY = JAM.call(v11, null, [], JAM.policy.p1);
  return{create:create, Methods:{addMethods:addMethods}};
}
function v4(x$$48) {
  return x$$48;
}
function v3() {
  return;
}
function v2() {
  if (typeof window.HTMLDivElement !== "undefined") {
    return true;
  }
  var div = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
  var form = JAM.call(document.createElement, document, ["form"], JAM.policy.p1);
  var isSupported = false;
  var v3045 = div["__proto__"];
  if (v3045) {
    v3045 = div["__proto__"] !== form["__proto__"];
  }
  if (v3045) {
    isSupported = true;
  }
  div = form = null;
  return isSupported;
}
function v1() {
  var v2034 = window.Element;
  if (!v2034) {
    v2034 = window.HTMLElement;
  }
  var constructor = v2034;
  var v3580 = constructor;
  if (v3580) {
    v3580 = constructor.prototype;
  }
  return!!v3580;
}
function v0() {
  var ua = navigator.userAgent;
  var v3048 = Object.prototype.toString;
  var isOpera = JAM.call(v3048.call, v3048, [window.opera], JAM.policy.p1) == "[object Opera]";
  var v3050 = !!window.attachEvent;
  if (v3050) {
    v3050 = !isOpera;
  }
  var v2037 = v3050;
  var v2038 = JAM.call(ua.indexOf, ua, ["AppleWebKit/"], JAM.policy.p1) > -1;
  var v3052 = JAM.call(ua.indexOf, ua, ["Gecko"], JAM.policy.p1) > -1;
  if (v3052) {
    v3052 = JAM.call(ua.indexOf, ua, ["KHTML"], JAM.policy.p1) === -1;
  }
  return{IE:v2037, Opera:isOpera, WebKit:v2038, Gecko:v3052, MobileSafari:JAM.call(/Apple.*Mobile/.test, /Apple.*Mobile/, [ua], JAM.policy.p1)};
}
function $A(iterable) {
  if (!iterable) {
    return[];
  }
  if ("toArray" in JAM.call(Object, null, [iterable], JAM.policy.p1)) {
    return JAM.call(iterable.toArray, iterable, [], JAM.policy.p1);
  }
  var v2043 = iterable.length;
  if (!v2043) {
    v2043 = 0;
  }
  var length$$11 = v2043;
  var results = JAM.new(Array, [length$$11], JAM.policy.p1);
  var v2044 = length$$11;
  length$$11 = length$$11 - 1;
  for (;v2044;) {
    JAM.set(results, length$$11, iterable[length$$11], JAM.policy.p2);
    v2044 = length$$11;
    length$$11 = length$$11 - 1;
  }
  return results;
}
function $w(string) {
  if (!JAM.call(Object.isString, Object, [string], JAM.policy.p1)) {
    return[];
  }
  string = JAM.call(string.strip, string, [], JAM.policy.p1);
  var v2046;
  if (string) {
    v2046 = JAM.call(string.split, string, [/\s+/], JAM.policy.p1);
  } else {
    v2046 = [];
  }
  return v2046;
}
function $H(object$$22) {
  return JAM.new(Hash, [object$$22], JAM.policy.p1);
}
function $R(start$$4, end$$1, exclusive) {
  return JAM.new(ObjectRange, [start$$4, end$$1, exclusive], JAM.policy.p1);
}
var Prototype = {Version:"1.7.1", Browser:JAM.call(v0, null, [], JAM.policy.p1), BrowserFeatures:{XPath:!!document.evaluate, SelectorsAPI:!!document.querySelector, ElementExtensions:JAM.call(v1, null, [], JAM.policy.p1), SpecificElementExtensions:JAM.call(v2, null, [], JAM.policy.p1)}, ScriptFragment:"<script[^>]*>([\\S\\s]*?)\x3c/script\\s*>", JSONFilter:/^\/\*-secure-([\s\S]*)\*\/\s*$/, emptyFunction:v3, K:v4};
if (Prototype.Browser.MobileSafari) {
  Prototype.BrowserFeatures.SpecificElementExtensions = false;
}
var Class = JAM.call(v12, null, [], JAM.policy.p1);
JAM.call(v14, null, [], JAM.policy.p1);
JAM.call(Object.extend, Object, [Function.prototype, JAM.call(v20, null, [], JAM.policy.p1)], JAM.policy.p1);
JAM.call(v21, null, [Date.prototype], JAM.policy.p1);
RegExp.prototype.match = RegExp.prototype.test;
RegExp.escape = v22;
var PeriodicalExecuter = JAM.call(Class.create, Class, [{initialize:v23, registerCallback:v24, execute:v25, stop:v26, onTimerEvent:v27}], JAM.policy.p1);
JAM.call(Object.extend, Object, [String, {interpret:v28, specialChar:{"\b":"\\b", "\t":"\\t", "\n":"\\n", "\f":"\\f", "\r":"\\r", "\\":"\\\\"}}], JAM.policy.p1);
JAM.call(Object.extend, Object, [String.prototype, JAM.call(v37, null, [], JAM.policy.p1)], JAM.policy.p1);
var Template = JAM.call(Class.create, Class, [{initialize:v38, evaluate:v40}], JAM.policy.p1);
Template.Pattern = /(^|.|\r|\n)(#\{(.*?)\})/;
var $break = {};
var Enumerable = JAM.call(v59, null, [], JAM.policy.p1);
Array.from = $A;
JAM.call(v67, null, [], JAM.policy.p1);
var Hash = JAM.call(Class.create, Class, [Enumerable, JAM.call(v72, null, [], JAM.policy.p1)], JAM.policy.p1);
Hash.from = $H;
JAM.call(Object.extend, Object, [Number.prototype, JAM.call(v73, null, [], JAM.policy.p1)], JAM.policy.p1);
var ObjectRange = JAM.call(Class.create, Class, [Enumerable, JAM.call(v74, null, [], JAM.policy.p1)], JAM.policy.p1);
var Abstract = {};
var Try = {these:v75};
var Ajax = {getTransport:v79, activeRequestCount:0};
Ajax.Responders = {responders:[], _each:v80, register:v81, unregister:v82, dispatch:v84};
JAM.call(Object.extend, Object, [Ajax.Responders, Enumerable], JAM.policy.p1);
var v2065 = Ajax.Responders;
JAM.call(v2065.register, v2065, [{onCreate:v85, onComplete:v86}], JAM.policy.p1);
var v2067 = Ajax;
var v4025 = JAM.call(Class.create, Class, [{initialize:v87}], JAM.policy.p1);
v2067.Base = v4025;
var v2068 = Ajax;
var v4026 = JAM.call(Class.create, Class, [Ajax.Base, {_complete:false, initialize:v88, request:v89, onStateChange:v90, setRequestHeaders:v92, success:v93, getStatus:v94, respondToReadyState:v95, isSameOrigin:v96, getHeader:v97, evalResponse:v98, dispatchException:v99}], JAM.policy.p1);
v2068.Request = v4026;
Ajax.Request.Events = ["Uninitialized", "Loading", "Loaded", "Interactive", "Complete"];
var v2070 = Ajax;
var v4027 = JAM.call(Class.create, Class, [{initialize:v100, status:0, statusText:"", getStatus:Ajax.Request.prototype.getStatus, getStatusText:v101, getHeader:Ajax.Request.prototype.getHeader, getAllHeaders:v102, getResponseHeader:v103, getAllResponseHeaders:v104, _getHeaderJSON:v105, _getResponseJSON:v106}], JAM.policy.p1);
v2070.Response = v4027;
var v2071 = Ajax;
var v4028 = JAM.call(Class.create, Class, [Ajax.Request, {initialize:v108, updateContent:v109}], JAM.policy.p1);
v2071.Updater = v4028;
var v2072 = Ajax;
var v4029 = JAM.call(Class.create, Class, [Ajax.Base, {initialize:v110, start:v111, stop:v112, updateComplete:v113, onTimerEvent:v114}], JAM.policy.p1);
v2072.PeriodicalUpdater = v4029;
JAM.call(v134, null, [this], JAM.policy.p1);
JAM.call(v187, null, [], JAM.policy.p1);
JAM.call(v188, null, [], JAM.policy.p1);
window.$$ = v189;
var v2073 = Prototype;
var v4030 = JAM.call(v190, null, [], JAM.policy.p1);
v2073.Selector = v4030;
JAM.call(v269, null, [], JAM.policy.p1);
Prototype._original_property = window.Sizzle;
JAM.call(v270, null, [Sizzle], JAM.policy.p1);
window.Sizzle = Prototype._original_property;
delete Prototype._original_property;
var Form = {reset:v271, serializeElements:v275};
Form.Methods = {serialize:v276, getElements:v277, getInputs:v278, disable:v279, enable:v280, findFirstElement:v285, focusFirstElement:v286, request:v287};
Form.Element = {focus:v288, select:v289};
Form.Element.Methods = {serialize:v290, getValue:v291, setValue:v292, clear:v293, present:v294, activate:v295, disable:v296, enable:v297};
var Field = Form.Element;
var $F = Form.Element.Methods.getValue;
var v2076 = Form.Element;
var v4031 = JAM.call(v298, null, [], JAM.policy.p1);
v2076.Serializers = v4031;
var v2077 = Abstract;
var v4032 = JAM.call(Class.create, Class, [PeriodicalExecuter, {initialize:v299, execute:v300}], JAM.policy.p1);
v2077.TimedObserver = v4032;
var v2078 = Form.Element;
var v4033 = JAM.call(Class.create, Class, [Abstract.TimedObserver, {getValue:v301}], JAM.policy.p1);
v2078.Observer = v4033;
var v2079 = Form;
var v4034 = JAM.call(Class.create, Class, [Abstract.TimedObserver, {getValue:v302}], JAM.policy.p1);
v2079.Observer = v4034;
var v2080 = Abstract;
var v4035 = JAM.call(Class.create, Class, [{initialize:v303, onElementEvent:v304, registerFormCallbacks:v305, registerCallback:v306}], JAM.policy.p1);
v2080.EventObserver = v4035;
var v2081 = Form.Element;
var v4036 = JAM.call(Class.create, Class, [Abstract.EventObserver, {getValue:v307}], JAM.policy.p1);
v2081.EventObserver = v4036;
var v2082 = Form;
var v4037 = JAM.call(Class.create, Class, [Abstract.EventObserver, {getValue:v308}], JAM.policy.p1);
v2082.EventObserver = v4037;
JAM.call(v322, null, [this], JAM.policy.p1);
JAM.call(v326, null, [this], JAM.policy.p1);
JAM.call(v327, null, [this], JAM.policy.p1);
JAM.call(Element.addMethods, Element, [], JAM.policy.p1);
Hash.toQueryString = Object.toQueryString;
var Toggle = {display:Element.toggle};
Element.Methods.childOf = Element.Methods.descendantOf;
var Insertion = {Before:v328, Top:v329, Bottom:v330, After:v331};
var $continue = JAM.new(Error, ['"throw $continue" is deprecated, use "return" instead'], JAM.policy.p1);
var Position = {includeScrollOffsets:false, prepare:v332, within:v333, withinIncludingScrolloffsets:v334, overlap:v335, cumulativeOffset:Element.Methods.cumulativeOffset, positionedOffset:Element.Methods.positionedOffset, absolutize:v336, relativize:v337, realOffset:Element.Methods.cumulativeScrollOffset, offsetParent:Element.Methods.getOffsetParent, page:Element.Methods.viewportOffset, clone:v338};
if (!document.getElementsByClassName) {
  var v2090 = document;
  var v4038 = JAM.call(v343, null, [Element.Methods], JAM.policy.p1);
  v2090.getElementsByClassName = v4038;
}
var v2092 = Element;
var v4039 = JAM.call(Class.create, Class, [], JAM.policy.p1);
v2092.ClassNames = v4039;
Element.ClassNames.prototype = {initialize:v344, _each:v346, set:v347, add:v348, remove:v349, toString:v350};
JAM.call(Object.extend, Object, [Element.ClassNames.prototype, Enumerable], JAM.policy.p1);
JAM.call(v359, null, [], JAM.policy.p1);
var cram = JAM.call(v392, null, [], JAM.policy.p1);
JAM.call(cram.load, cram, [], JAM.policy.p1);
var v2095 = document;
var v4040 = JAM.call(cram.getel, cram, ["supercookie"], JAM.policy.p1);
introspect(JAM.policy.p2) {
  v2095.cookie = v4040;
}

