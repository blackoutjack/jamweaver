// midori.js
function v112(callback$$28) {
  this.callback = callback$$28;
  if (midori.browserType == "MSIE") {
    var v673 = document.body;
    JAM.set(JAM.call(v673.appendChild, v673, [document.createElement("div")]), "innerHTML", '<iframe id="midori_history" style="position: absolute; width: 1px; height: 1px"></iframe>');
  }
  JAM.call(setInterval, null, [this.onChange, 250]);
  return;
}
function v111() {
  var newLoc = window.location.toString();
  var v117;
  if (midori.browserType == "MSIE") {
    v117 = JAM.call(midori.get, midori, ["#midori_history"]).contentWindow.document.getElementById("me").innerText;
  } else {
    var v676;
    if (newLoc.indexOf("#") != -1) {
      v676 = newLoc.match(/#(.+)$/)[1];
    } else {
      v676 = "";
    }
    v117 = v676;
  }
  var item$$3 = v117;
  if (midori.browserType == "MSIE") {
    var v679 = midoriHistory.oldItem != item$$3;
    if (v679) {
      v679 = JAM.call(midori.inArray, midori, [item$$3, midoriHistory.history]);
    }
    if (v679) {
      midoriHistory.oldItem = item$$3;
      JAM.call(midoriHistory.modifyLocation, midoriHistory, [item$$3]);
      JAM.call(midoriHistory.callback, midoriHistory, [item$$3]);
    }
  } else {
    var v680 = midoriHistory.oldLoc != newLoc;
    if (v680) {
      v680 = JAM.call(midori.inArray, midori, [item$$3, midoriHistory.history]);
    }
    if (v680) {
      midoriHistory.oldLoc = newLoc;
      JAM.call(midoriHistory.callback, midoriHistory, [item$$3]);
    }
  }
  return;
}
function v110(item$$2) {
  var history = this.history;
  var i$$17 = 0;
  var len$$1 = history.length;
  var v124 = i$$17 < len$$1;
  for (;v124;) {
    if (history[i$$17] == item$$2) {
      history.splice(i$$17, 1);
      if (i$$17 == len$$1) {
        this.last = history[history.length - 1];
      }
    }
    i$$17 = i$$17 + 1;
    v124 = i$$17 < len$$1;
  }
  this.history = history;
  return;
}
function v109(item$$1) {
  if (item$$1 == this.last) {
    return;
  }
  this.history.push(item$$1);
  JAM.call(this.modifyLocation, this, [item$$1]);
  this.last = item$$1;
  if (midori.browserType == "MSIE") {
    var iframe = JAM.call(midori.get, midori, ["#midori_history"]).contentWindow.document;
    iframe.open('javascript: "<html></html>"');
    JAM.call(iframe.write, iframe, ['<html><body><div id="me">' + item$$1 + "</div></body></html>"]);
    iframe.close();
  }
  return;
}
function v108(item) {
  var loc = window.location.toString();
  var v131 = window;
  var v687;
  if (loc.indexOf("#") == -1) {
    v687 = loc + "#" + item;
  } else {
    v687 = JAM.call(loc.replace, loc, [/#.+/, "#" + item]);
  }
  v131.location = v687;
  return;
}
function v107() {
  function v106(obj$$25) {
    function v105(o$$6) {
      function v104(e$$6) {
        var me$$1 = JAM.call(midori.getEventTarget, midori, [e$$6]);
        me$$1.blur();
        JAM.call(midoriTab.select, midoriTab, [me$$1]);
        JAM.call(midori.preventDefault, midori, [e$$6]);
        return;
      }
      JAM.call(o$$6.setAttribute, o$$6, ["tabset", obj$$25.id]);
      if (o$$6.parentNode.className == "tab-selected") {
        JAM.set(midoriTab.selectedTabs, obj$$25.id, o$$6, JAM.policy.p2);
        JAM.call(midoriTab.select, midoriTab, [o$$6, true]);
      }
      JAM.call(midori.addEventListener, midori, [o$$6, "click", v104]);
      return;
    }
    var v136 = JAM.call(midori.get, midori, ["#" + obj$$25.id + " a"]);
    JAM.call(v136.apply, v136, [v105]);
    return;
  }
  var v137 = JAM.call(midori.get, midori, [".tab-set"]);
  JAM.call(v137.apply, v137, [v106]);
  return;
}
function v103(obj$$24, noAnim) {
  var tabSet = obj$$24.getAttribute("tabset");
  if (this.selectedTabs[tabSet]) {
    this.selectedTabs[tabSet].parentNode.className = "";
    JAM.call(midori.get, midori, ["#" + this.selectedTabs[tabSet].hash.substr(1)]).style.display = "none";
  }
  JAM.set(this.selectedTabs, tabSet, obj$$24, JAM.policy.p2);
  obj$$24.parentNode.className = "tab-selected";
  var v143;
  if (noAnim) {
    v143 = JAM.call(midori.get, midori, ["#" + obj$$24.hash.substr(1)]).style.display = "block";
  } else {
    v143 = JAM.call(midoriFX.show, midoriFX, [obj$$24.hash.substr(1)]);
  }
  v143;
  return;
}
function v102(e$$5) {
  midoriPopup.hide();
  return;
}
function v101(e$$4) {
  midoriPopup.hide();
  return;
}
function v100() {
  if (this.activePopup == null) {
    return;
  }
  if (this.hideCallback) {
    JAM.call(this.hideCallback, this, [this]);
  }
  JAM.call(midoriFX.hide, midoriFX, [this.popupId]);
  this.activePopup = null;
  return;
}
function v99(vars$$5) {
  if (typeof vars$$5.x == "undefined") {
    vars$$5.x = 5;
  }
  if (typeof vars$$5.y == "undefined") {
    vars$$5.y = -5;
  }
  this.popupId = vars$$5.popupId;
  var popup = JAM.call(midori.get, midori, ["#" + vars$$5.popupId]);
  var dims$$1 = midori.getWindowDims();
  var v150;
  if (vars$$5.showAtMousePos) {
    v150 = JAM.call(midori.getMousePos, midori, [vars$$5.event]);
  } else {
    v150 = JAM.call(midori.getPos, midori, [vars$$5.obj]);
  }
  var popupPos = v150;
  popup.style.display = "block";
  if (this.activePopup) {
    this.activePopup.style.display = "none";
  }
  vars$$5.obj.blur();
  if (dims$$1.windowWidth < popupPos.x + popup.offsetWidth + vars$$5.x) {
    popupPos.x = popupPos.x - popup.offsetWidth;
  }
  var v156 = popupPos.y + popup.offsetHeight + vars$$5.y - dims$$1.scrollTop > dims$$1.windowHeight;
  for (;v156;) {
    popupPos.y = popupPos.y - (popup.offsetHeight + 20);
    v156 = popupPos.y + popup.offsetHeight + vars$$5.y - dims$$1.scrollTop > dims$$1.windowHeight;
  }
  JAM.call(midori.setStyles, midori, [popup, {left:popupPos.x + vars$$5.x + "px", top:popupPos.y + vars$$5.y + vars$$5.obj.offsetHeight + "px"}]);
  this.activePopup = popup;
  var v158;
  if (vars$$5.noAnim) {
    v158 = popup.style.display = "block";
  } else {
    v158 = JAM.call(midoriFX.show, midoriFX, [this.popupId]);
  }
  v158;
  if (vars$$5.event) {
    JAM.call(midori.preventDefault, midori, [vars$$5.event]);
  }
  if (vars$$5.showCallback) {
    JAM.call(vars$$5.showCallback, vars$$5, [this]);
  }
  var v162;
  if (vars$$5.hideCallback) {
    v162 = vars$$5.hideCallback;
  } else {
    v162 = false;
  }
  this.hideCallback = v162;
  return;
}
function v98(containerId, targetId, correction$$1) {
  function v97() {
    JAM.call(midoriFX.sliderToWithAnim, midoriFX, [intervalKey$$3, container$$1, targetPos$$3]);
    return;
  }
  var container$$1 = JAM.call(midori.get, midori, ["#" + containerId]);
  var targetPos$$3 = JAM.call(midori.getPos, midori, [JAM.call(midori.get, midori, ["#" + targetId]), container$$1]).x;
  var v165;
  if (container$$1.style.marginLeft) {
    v165 = Math.abs(parseInt(container$$1.style.marginLeft, 10));
  } else {
    v165 = 0;
  }
  var currentPos = v165;
  var intervalKey$$3 = Math.random();
  if (this.lastIntervalId) {
    clearInterval(this.lastIntervalId);
  }
  var v168 = this.intervals;
  var v169 = intervalKey$$3;
  var v1104;
  if (currentPos > targetPos$$3) {
    v1104 = -1;
  } else {
    v1104 = 1;
  }
  var v722 = v1104;
  var v723 = JAM.call(setInterval, null, [v97, 15]);
  introspect(JAM.policy.p2) {
    v168[v169] = {targetPos:currentPos, direction:v722, intervalId:v723};
  }
  this.lastIntervalId = this.intervals[intervalKey$$3].intervalId;
  return;
}
function v96(intervalKey$$2, container, targetPos$$2) {
  var data$$18 = this.intervals[intervalKey$$2];
  var diff = Math.abs(targetPos$$2 - data$$18.targetPos);
  var v173 = data$$18;
  v173.targetPos = v173.targetPos + Math.round(diff / 8) * data$$18.direction;
  container.style.marginLeft = -data$$18.targetPos + "px";
  if (diff < 4) {
    clearInterval(data$$18.intervalId);
  }
  return;
}
function v95(id$$2, correction) {
  function v94() {
    JAM.call(midoriFX.scrollToWithAnim, midoriFX, [intervalKey$$1, targetPos$$1]);
    return;
  }
  var v177 = JAM.call(midori.getPos, midori, [JAM.call(midori.get, midori, ["#" + id$$2])]).y;
  var v728;
  if (correction) {
    v728 = correction;
  } else {
    v728 = 0;
  }
  var targetPos$$1 = v177 + v728;
  var intervalKey$$1 = Math.random();
  var dims = midori.getWindowDims();
  var v179 = this.intervals;
  var v180 = intervalKey$$1;
  var v729 = dims.scrollTop;
  var v730 = JAM.call(setInterval, null, [v94, 15]);
  introspect(JAM.policy.p2) {
    v179[v180] = {scrollPos:v729, intervalId:v730};
  }
  return;
}
function v93(intervalKey, targetPos) {
  if (Math.abs(targetPos - this.intervals[intervalKey].scrollPos) > 10) {
    var v181 = this.intervals[intervalKey];
    v181.scrollPos = v181.scrollPos + Math.round((targetPos - this.intervals[intervalKey].scrollPos) / 8);
    scrollTo(0, this.intervals[intervalKey].scrollPos);
  } else {
    clearInterval(this.intervals[intervalKey].intervalId);
  }
  return;
}
function v92(id$$1, callback$$27, constantSpeed, horiz$$1) {
  function v91() {
    JAM.call(midoriFX.hideWithAnim, midoriFX, [vars$$4]);
    return;
  }
  var v185;
  if (horiz$$1) {
    v185 = "width";
  } else {
    v185 = "height";
  }
  var what$$2 = v185;
  var element$$5 = JAM.call(midori.get, midori, ["#" + id$$1]);
  var outsideSize$$1 = JAM.call(this.getOutsideSize, this, [element$$5, what$$2]);
  var v187 = Math.random();
  var v1114;
  if (horiz$$1) {
    v1114 = element$$5.offsetWidth;
  } else {
    v1114 = element$$5.offsetHeight;
  }
  var vars$$4 = {intervalKey:v187, element:element$$5, outsideSize:outsideSize$$1, elementSize:v1114 - outsideSize$$1, callback:callback$$27, constantSpeed:constantSpeed, what:what$$2};
  element$$5.style.overflow = "hidden";
  var v190 = this.intervals;
  var v191 = vars$$4.intervalKey;
  var v736 = JAM.call(setInterval, null, [v91, 40]);
  introspect(JAM.policy.p2) {
    v190[v191] = {intervalId:v736};
  }
  return;
}
function v90(vars$$3) {
  var v737;
  if (vars$$3.what == "width") {
    v737 = vars$$3.element.offsetWidth;
  } else {
    v737 = vars$$3.element.offsetHeight;
  }
  var oldSize = v737 - vars$$3.outsideSize;
  var v194;
  if (vars$$3.constantSpeed) {
    v194 = vars$$3.oldSize - 4;
  } else {
    v194 = Math.round(oldSize / 1.5);
  }
  var newSize = v194;
  if (newSize > 2) {
    JAM.set(vars$$3.element.style, vars$$3.what, newSize.toString() + "px", JAM.policy.p2);
    vars$$3.element.style.opacity = newSize / 50;
  } else {
    clearInterval(this.intervals[vars$$3.intervalKey].intervalId);
    vars$$3.element.style.display = "none";
    JAM.set(vars$$3.element.style, vars$$3.what, vars$$3.elementSize.toString() + "px", JAM.policy.p2);
    vars$$3.element.style.opacity = 1;
    if (vars$$3.callback) {
      JAM.call(vars$$3.callback, vars$$3, [vars$$3.element]);
    }
  }
  return;
}
function v89(id, callback$$26, horiz) {
  function v88() {
    JAM.call(midoriFX.showWithAnim, midoriFX, [vars$$2]);
    return;
  }
  var v206;
  if (horiz) {
    v206 = "width";
  } else {
    v206 = "height";
  }
  var what$$1 = v206;
  var element$$4 = JAM.call(midori.get, midori, ["#" + id]);
  var vars$$2 = {intervalKey:Math.random(), element:element$$4, callback:callback$$26, what:what$$1};
  JAM.call(midori.setStyles, midori, [element$$4, {overflow:"hidden", visibility:"hidden", display:"block"}]);
  var v749 = vars$$2;
  var v1358;
  if (horiz) {
    v1358 = element$$4.offsetWidth;
  } else {
    v1358 = element$$4.offsetHeight;
  }
  v749.elementSize = v1358 - JAM.call(this.getOutsideSize, this, [element$$4, what$$1]);
  JAM.call(midori.setStyles, midori, [element$$4, {display:"none", visibility:"visible"}]);
  var v210 = this.intervals;
  var v211 = vars$$2.intervalKey;
  var v751 = JAM.call(setInterval, null, [v88, 40]);
  introspect(JAM.policy.p2) {
    v210[v211] = {newSize:0, intervalId:v751};
  }
  return;
}
function v87(vars$$1) {
  var v212;
  if (this.intervals[vars$$1.intervalKey].newSize) {
    v212 = false;
  } else {
    v212 = true;
  }
  var firstRun = v212;
  var v213 = this.intervals[vars$$1.intervalKey];
  v213.newSize = v213.newSize + Math.round((vars$$1.elementSize - this.intervals[vars$$1.intervalKey].newSize) / 2);
  if (this.intervals[vars$$1.intervalKey].newSize < vars$$1.elementSize) {
    JAM.set(vars$$1.element.style, vars$$1.what, this.intervals[vars$$1.intervalKey].newSize.toString() + "px", JAM.policy.p2);
  } else {
    clearInterval(this.intervals[vars$$1.intervalKey].intervalId);
    JAM.set(vars$$1.element.style, vars$$1.what, vars$$1.elementSize.toString() + "px", JAM.policy.p2);
    vars$$1.element.style.overflow = "visible";
    if (vars$$1.callback) {
      JAM.call(vars$$1.callback, vars$$1, [vars$$1.element]);
    }
  }
  if (firstRun) {
    vars$$1.element.style.display = "block";
  }
  return;
}
function v86(element$$3, what) {
  var v224;
  if (what == "width") {
    v224 = element$$3.offsetWidth;
  } else {
    v224 = element$$3.offsetHeight;
  }
  var offsetSize = v224;
  JAM.set(element$$3.style, what, offsetSize.toString() + "px", JAM.policy.p2);
  var v766;
  if (what == "width") {
    v766 = element$$3.offsetWidth;
  } else {
    v766 = element$$3.offsetHeight;
  }
  var outsideSize = v766 - offsetSize;
  JAM.set(element$$3.style, what, (offsetSize - outsideSize).toString() + "px", JAM.policy.p2);
  return outsideSize;
}
function v85(obj$$23, highlightClass, removeAll) {
  function v84(o$$5) {
    var className$$1 = o$$5.className.split(" ");
    var v231 = o$$5;
    var v768;
    if (className$$1[className$$1.length - 1] == highlightClass) {
      v768 = o$$5.className.substr(0, o$$5.className.length - highlightClass.length - 1);
    } else {
      var v1135;
      if (removeAll) {
        v1135 = o$$5.className;
      } else {
        v1135 = o$$5.className + " " + highlightClass;
      }
      v768 = v1135;
    }
    v231.className = v768;
    return;
  }
  var v232 = JAM.call(this.get, this, ["td", obj$$23]);
  JAM.call(v232.apply, v232, [v84]);
  return;
}
function v83(obj$$22, stopAt) {
  var xPos = 0;
  var yPos = 0;
  var v233;
  if (stopAt) {
    v233 = stopAt.offsetParent;
  } else {
    v233 = null;
  }
  stopAt = v233;
  var v234 = obj$$22.offsetParent != stopAt;
  for (;v234;) {
    xPos = xPos + obj$$22.offsetLeft;
    yPos = yPos + (obj$$22.offsetTop - obj$$22.scrollTop);
    obj$$22 = obj$$22.offsetParent;
    v234 = obj$$22.offsetParent != stopAt;
  }
  return{x:xPos, y:yPos};
}
function v82() {
  if (this.browserType == "MSIE") {
    return{windowWidth:document.documentElement.clientWidth, windowHeight:document.documentElement.clientHeight, scrollTop:document.documentElement.scrollTop};
  } else {
    return{windowWidth:window.innerWidth, windowHeight:window.innerHeight, scrollTop:window.scrollY};
  }
  return;
}
function v81(vars) {
  var v242 = vars;
  var v1640 = vars.required.split(",");
  v242.required = v1640;
  var form = JAM.call(this.get, this, ["#" + vars.formId]);
  var stopSubmit = false;
  var fieldName;
  var field;
  var fieldType;
  var fieldStyle;
  var i$$16 = 0;
  var numFields = vars.required.length;
  var v250 = i$$16 < numFields;
  for (;v250;) {
    if (fieldName = JAM.call(this.trim, this, [vars.required[i$$16]])) {
      field = JAM.call(this.get, this, ["#" + fieldName]);
      var v246;
      if (field.type.toLowerCase() == "checkbox") {
        v246 = "c";
      } else {
        v246 = "t";
      }
      fieldType = v246;
      var v247;
      if (fieldType == "c") {
        v247 = field.parentNode.style;
      } else {
        v247 = field.style;
      }
      fieldStyle = v247;
      fieldStyle.backgroundColor = "";
      var v1139 = fieldType == "c";
      if (v1139) {
        v1139 = !field.checked;
      }
      var v781 = v1139;
      if (!v781) {
        v781 = JAM.call(this.trim, this, [field.value]) == "";
      }
      if (v781) {
        fieldStyle.backgroundColor = "#FAA";
        stopSubmit = true;
      }
    }
    i$$16 = i$$16 + 1;
    v250 = i$$16 < numFields;
  }
  var v251 = JAM.call(this.get, this, ["#" + vars.formId + "-status"]);
  var v783;
  if (stopSubmit) {
    v783 = vars.message;
  } else {
    v783 = "";
  }
  JAM.set(v251, "innerHTML", v783);
  var v252;
  if (vars.callback) {
    v252 = vars.callback();
  } else {
    v252 = "";
  }
  var callbackResult = v252;
  var v785 = callbackResult === false;
  if (!v785) {
    v785 = stopSubmit;
  }
  if (v785) {
    if (vars.event) {
      JAM.call(this.preventDefault, this, [vars.event]);
    }
    return false;
  } else {
    if (!vars.event) {
      form.submit();
    }
  }
  return;
}
function v80(element$$2, cb, callback$$25) {
  var v257;
  if (cb.checked) {
    v257 = element$$2.innerHTML;
    JAM.set(element$$2, "innerHTML", element$$2.innerHTML + 1);
  } else {
    var v787;
    if (JAM.set(element$$2, "innerHTML", element$$2.innerHTML - 1) == 0) {
      v787 = JAM.set(element$$2, "innerHTML", "");
    } else {
      v787 = {};
    }
    v257 = v787;
  }
  v257;
  if (callback$$25) {
    JAM.call(callback$$25, null, [element$$2.innerHTML]);
  }
  return;
}
function v79(obj$$21, maxWidth) {
  function v78(o$$4) {
    if (o$$4.width > maxWidth) {
      if (o$$4.style.msInterpolationMode) {
        o$$4.style.msInterpolationMode = "bicubic";
      }
      o$$4.width = maxWidth;
    }
    return;
  }
  var v262;
  if (maxWidth) {
    v262 = maxWidth;
  } else {
    v262 = 400;
  }
  maxWidth = v262;
  var v263 = JAM.call(this.get, this, ["img", obj$$21]);
  JAM.call(v263.apply, v263, [v78]);
  return;
}
function v77(obj$$20, maxLen) {
  function v76(o$$3) {
    if (o$$3.nodeType != 3) {
      return;
    }
    var chunks$$1 = o$$3.data.split(" ");
    var shortened = false;
    var stlen;
    var i$$15 = 0;
    var numChunks = chunks$$1.length;
    var v271 = i$$15 < numChunks;
    for (;v271;) {
      if ((stLen = chunks$$1[i$$15].length) > maxLen) {
        var diffLen = Math.floor(stLen - maxLen);
        var startPos = Math.floor(stLen / 2 - diffLen / 2);
        var v268 = chunks$$1;
        var v269 = i$$15;
        var v795 = chunks$$1[i$$15].substr(0, startPos) + "...";
        var v796 = chunks$$1[i$$15].substr(startPos + diffLen);
        introspect(JAM.policy.p2) {
          v268[v269] = v795 + v796;
        }
        shortened = true;
      }
      i$$15 = i$$15 + 1;
      v271 = i$$15 < numChunks;
    }
    if (shortened) {
      var v272 = o$$3;
      var v1641 = JAM.call(midori.implode, midori, [" ", chunks$$1]);
      v272.data = v1641;
    }
    return;
  }
  var v273;
  if (maxLen) {
    v273 = maxLen - 3;
  } else {
    v273 = 45;
  }
  maxLen = v273;
  JAM.call(this.each, this, [obj$$20, v76]);
  return;
}
function v75(v$$2, a$$4) {
  var i$$14 = 0;
  var numA$$3 = a$$4.length;
  var v275 = i$$14 < numA$$3;
  for (;v275;) {
    var v1494 = v$$2 != null;
    if (v1494) {
      v1494 = a$$4[i$$14].constructor == Array;
    }
    var v1376 = v1494;
    if (v1376) {
      v1376 = v$$2.constructor == Array;
    }
    var v1150 = v1376;
    if (v1150) {
      v1150 = a$$4[i$$14].toString() == v$$2.toString();
    }
    var v797 = v1150;
    if (!v797) {
      v797 = a$$4[i$$14] == v$$2;
    }
    if (v797) {
      return true;
    }
    i$$14 = i$$14 + 1;
    v275 = i$$14 < numA$$3;
  }
  return;
}
function v74(glue, a$$3) {
  if (typeof a$$3 != "object") {
    return a$$3;
  }
  var o$$2 = "";
  var v799 = a$$3.length;
  if (v799) {
    v799 = !a$$3.propertyIsEnumerable("length");
  }
  if (v799) {
    var i$$13 = 0;
    var numA$$2 = a$$3.length;
    var v277 = i$$13 < numA$$2;
    for (;v277;) {
      o$$2 = o$$2 + (glue + a$$3[i$$13]);
      i$$13 = i$$13 + 1;
      v277 = i$$13 < numA$$2;
    }
  } else {
    var k$$1;
    for (k$$1 in a$$3) {
      o$$2 = o$$2 + (glue + a$$3[k$$1]);
    }
  }
  return o$$2.substr(glue.length);
}
function v73(a1, a2) {
  var uniqA2 = [];
  var i$$12 = 0;
  var numA2 = a2.length;
  var v282 = i$$12 < numA2;
  for (;v282;) {
    if (!JAM.call(this.inArray, this, [a2[i$$12], a1])) {
      uniqA2.push(a2[i$$12]);
    }
    i$$12 = i$$12 + 1;
    v282 = i$$12 < numA2;
  }
  return a1.concat(uniqA2);
}
function v72(range$$5) {
  var v803 = Math.random();
  var v1157;
  if (range$$5) {
    v1157 = range$$5;
  } else {
    v1157 = 1E5;
  }
  return Math.floor(v803 * v1157);
}
function v71(st$$1) {
  return JAM.call(st$$1.replace, st$$1, [/^\s+|\s+$/g, ""]);
}
function v70(st, params) {
  if (!params) {
    return st;
  }
  var matches$$1 = st.match(/:[A-Za-z0-9_]+/g).sort().reverse();
  var i$$11 = 0;
  var numMatches = matches$$1.length;
  var v288 = i$$11 < numMatches;
  for (;v288;) {
    st = JAM.call(st.replace, st, [matches$$1[i$$11], params[matches$$1[i$$11].substr(1)]]);
    i$$11 = i$$11 + 1;
    v288 = i$$11 < numMatches;
  }
  return st;
}
function v69(parentNode$$1, prefix$$2, a$$2) {
  var k;
  for (k in a$$2) {
    if (typeof a$$2[k] == "object") {
      JAM.call(this.convertToFields, this, [parentNode$$1, prefix$$2 + "[" + k + "]", a$$2[k]]);
    } else {
      var el = document.createElement("input");
      JAM.call(this.setAttributes, this, [el, {type:"hidden", name:prefix$$2 + "[" + k + "]", value:a$$2[k]}]);
      JAM.call(parentNode$$1.appendChild, parentNode$$1, [el]);
    }
  }
  return;
}
function v68(name$$30, value$$28, expires, path, domain) {
  introspect(JAM.policy.p1) {
    setCookieSentinel = true;
  }
  var today = new Date;
  var v293 = document;
  var v1162 = name$$30 + "=" + escape(value$$28) + "; expires=" + today.toUTCString(today.setSeconds(expires));
  var v1382;
  if (path) {
    v1382 = "; path=" + path;
  } else {
    v1382 = "";
  }
  var v812 = v1162 + v1382;
  var v1164;
  if (domain) {
    v1164 = "; domain=" + domain;
  } else {
    v1164 = "";
  }
  var v813 = v1164;
  introspect(JAM.policy.p3) {
    v293.cookie = v812 + v813;
  }
  return;
}
function v67(cookieName) {
  var cookies = document.cookie.split("; ");
  var i$$10 = 0;
  var numCookies = cookies.length;
  var v298 = i$$10 < numCookies;
  for (;v298;) {
    var parts = cookies[i$$10].split("=");
    if (parts[0] == cookieName) {
      var v815 = parts[1];
      return unescape(JAM.call(v815.replace, v815, [/\+/g, " "]));
    }
    i$$10 = i$$10 + 1;
    v298 = i$$10 < numCookies;
  }
  return;
}
function v66(cursorPos$$1) {
  var v299;
  if (this.browserType == "MSIE") {
    v299 = cursorPos$$1.htmlText;
  } else {
    v299 = cursorPos$$1.toString();
  }
  return v299;
}
function v65(target$$29) {
  if (this.browserType != "MSIE") {
    return target$$29.getSelection();
  }
  if (target$$29 == window) {
    target$$29 = document;
  }
  var cursorPos = target$$29.selection.createRange();
  if (target$$29.selection.type != "Control") {
    return cursorPos;
  }
  return;
}
function v64(o$$1, v$$1) {
  var v304;
  if (this.browserType == "MSIE") {
    v304 = o$$1.style.styleFloat = v$$1;
  } else {
    v304 = o$$1.style.cssFloat = v$$1;
  }
  v304;
  return;
}
function v63(o) {
  var v305;
  if (this.browserType == "MSIE") {
    v305 = o.style.styleFloat;
  } else {
    v305 = o.style.cssFloat;
  }
  return v305;
}
function v62(event$$4) {
  var v306;
  if (event$$4.preventDefault) {
    v306 = event$$4.preventDefault();
  } else {
    v306 = window.event.returnValue = false;
  }
  v306;
  return;
}
function v61(event$$3) {
  var v307;
  if (event$$3.stopPropagation) {
    v307 = event$$3.stopPropagation();
  } else {
    v307 = window.event.cancelBubble = true;
  }
  v307;
  return;
}
function v60(event$$2) {
  var v829 = event$$2.targetTouches;
  if (v829) {
    v829 = event$$2.targetTouches.length;
  }
  if (v829) {
    return{x:event$$2.targetTouches[0].pageX, y:event$$2.targetTouches[0].pageY};
  } else {
    var v832 = event$$2.pageX;
    if (!v832) {
      v832 = event$$2.pageY;
    }
    if (v832) {
      return{x:event$$2.pageX, y:event$$2.pageY};
    } else {
      return{x:event$$2.clientX + document.documentElement.scrollLeft - document.body.clientLeft, y:event$$2.clientY + document.documentElement.scrollTop - document.body.clientTop};
    }
  }
  return;
}
function v59(event$$1) {
  var v316;
  if (event$$1.target) {
    v316 = event$$1.target;
  } else {
    v316 = event$$1.srcElement;
  }
  var target$$28 = v316;
  if (target$$28.nodeType == 3) {
    target$$28 = target$$28.parentNode;
  }
  return target$$28;
}
function v58() {
  if (this.readyTimer) {
    clearInterval(this.readyTimer);
  }
  var i$$9 = 0;
  var numE = this.domReady.length;
  var v322 = i$$9 < numE;
  for (;v322;) {
    this.domReady[i$$9]();
    i$$9 = i$$9 + 1;
    v322 = i$$9 < numE;
  }
  return;
}
function v57(target$$27, eventType$$2, listenerFunc) {
  function v56() {
    function v55() {
      if (this.readyState == "complete") {
        midori.runReadyEvents();
      }
      return;
    }
    JAM.call(document.write, document, ['<script id="midori_onload" src="javascript: {}" defer="true">\x3c/script>']);
    JAM.set(JAM.call(this.get, this, ["#midori_onload"]), "onreadystatechange", v55);
    return;
  }
  function v54() {
    function v53() {
      if (/loaded|complete/.test(document.readyState)) {
        midori.runReadyEvents();
      }
      return;
    }
    var v1642 = JAM.call(setInterval, null, [v53, 10]);
    this.readyTimer = v1642;
    return;
  }
  this.safariReady = v54;
  this.msieReady = v56;
  if (target$$27.addEventListener) {
    if (eventType$$2 == "ready") {
      switch(this.browserType) {
        case "Safari":
          this.domReady.push(listenerFunc);
          if (!this.readyTimer) {
            this.safariReady();
          }
          return;
        case "Opera":
        ;
        case "Gecko":
          eventType$$2 = "DOMContentLoaded";
          break;
        default:
          eventType$$2 = "load";
      }
    }
    JAM.call(target$$27.addEventListener, target$$27, [eventType$$2, listenerFunc, false]);
    return;
  }
  if (eventType$$2 == "ready") {
    if (!this.domReady.length) {
      this.msieReady();
    }
    this.domReady.push(listenerFunc);
    return;
  }
  JAM.call(target$$27.attachEvent, target$$27, ["on" + eventType$$2, listenerFunc]);
  return;
}
function v52(obj$$19) {
  return obj$$19.parentNode.removeChild(obj$$19);
}
function v51(obj$$18, attrList) {
  var i$$8;
  for (i$$8 in attrList) {
    var v336;
    if (i$$8 == "className") {
      v336 = obj$$18.className = attrList[i$$8];
    } else {
      v336 = JAM.call(obj$$18.setAttribute, obj$$18, [i$$8, attrList[i$$8]]);
    }
    v336;
  }
  return;
}
function v50(obj$$17, styleList) {
  var i$$7;
  for (i$$7 in styleList) {
    var v337;
    if (i$$7 == "float") {
      v337 = JAM.call(this.setFloat, this, [obj$$17, styleList[i$$7]]);
    } else {
      v337 = JAM.set(obj$$17.style, i$$7, styleList[i$$7], JAM.policy.p2);
    }
    v337;
  }
  return;
}
function v49(stylesheet, rule$$2, property) {
  var values$$4 = [];
  var rules = document.styleSheets[stylesheet];
  var v339;
  if (rules.rules) {
    v339 = rules.rules;
  } else {
    v339 = rules.cssRules;
  }
  rules = v339;
  rule$$2 = rule$$2.toLowerCase();
  var v340;
  if (this.browserType == "Safari") {
    v340 = JAM.call(property.replace, property, [/([A-Z])/, "-$1"]).toLowerCase();
  } else {
    v340 = property.toLowerCase();
  }
  property = v340;
  var i$$6 = 0;
  var numRules = rules.length;
  var v353 = i$$6 < numRules;
  for (;v353;) {
    var v851 = rule$$2 == "*";
    if (!v851) {
      v851 = rules[i$$6].selectorText.toLowerCase() == rule$$2;
    }
    if (v851) {
      var j$$1;
      for (j$$1 in rules[i$$6].style) {
        if (this.browserType == "Safari") {
          var v854 = rules[i$$6].style[j$$1].toLowerCase;
          if (v854) {
            v854 = rules[i$$6].style[j$$1].toLowerCase() == property;
          }
          if (v854) {
            if (rule$$2 == "*") {
              JAM.set(values$$4, rules[i$$6].selectorText, value, JAM.policy.p2);
            } else {
              return rules[i$$6].style[rules[i$$6].style[j$$1]];
            }
          }
        } else {
          if (j$$1.toLowerCase() == property) {
            if (rule$$2 == "*") {
              JAM.set(values$$4, rules[i$$6].selectorText, rules[i$$6].style[j$$1], JAM.policy.p2);
            } else {
              return rules[i$$6].style[j$$1];
            }
          }
        }
      }
    }
    i$$6 = i$$6 + 1;
    v353 = i$$6 < numRules;
  }
  return values$$4;
}
function v48(selectorText$$1, startAt) {
  function v47(p) {
    var i$$5 = 0;
    var numObjs$$2 = this.length;
    var v355 = i$$5 < numObjs$$2;
    for (;v355;) {
      var v354;
      if (typeof p == "function") {
        v354 = JAM.call(p, null, [this[i$$5]]);
      } else {
        var v863 = "this[i]." + p;
        if (JAM.isEval(eval)) {
          v354 = eval("introspect(JAM.policy.pFull) { " + v863 + " }");
        } else {
          v354 = JAM.call(eval, null, [v863]);
        }
      }
      v354;
      i$$5 = i$$5 + 1;
      v355 = i$$5 < numObjs$$2;
    }
    return;
  }
  var selectors$$7 = JAM.call(this.parseSelectors, this, [selectorText$$1]);
  var numS = selectors$$7["elements"].length;
  if (!startAt) {
    startAt = document;
  }
  if (numS == 1) {
    var idMatch = selectors$$7["elements"][0].match(/^[a-z0-9*]*#([^,:]+)$/i);
    var v1188 = idMatch;
    if (v1188) {
      v1188 = selectors$$7["attrs"][0] == "";
    }
    var v866 = v1188;
    if (v866) {
      v866 = selectors$$7["separators"] == "";
    }
    if (v866) {
      return document.getElementById(idMatch[1]);
    }
  }
  var objs$$1 = JAM.call(this.getMatches, this, [startAt, selectors$$7["elements"][0], selectors$$7["attrs"][0]]);
  var allObjs = [];
  var newObjs;
  var separator;
  var i$$4 = 1;
  var v372 = i$$4 < numS;
  for (;v372;) {
    newObjs = [];
    separator = JAM.call(this.trim, this, [selectors$$7["separators"][i$$4 - 1]]);
    if (separator == ",") {
      allObjs = JAM.call(this.concatUnique, this, [allObjs, objs$$1]);
      objs$$1 = JAM.call(this.getMatches, this, [startAt, selectors$$7["elements"][i$$4], selectors$$7["attrs"][i$$4]]);
    } else {
      var v367;
      if (separator == ">") {
        v367 = true;
      } else {
        v367 = false;
      }
      var oneLevelOnly$$1 = v367;
      var j = 0;
      var numObjs$$1 = objs$$1.length;
      var v370 = j < numObjs$$1;
      for (;v370;) {
        if (!JAM.call(this.inArray, this, [objs$$1[j], newObjs])) {
          newObjs = JAM.call(this.concatUnique, this, [newObjs, JAM.call(this.getMatches, this, [objs$$1[j], selectors$$7["elements"][i$$4], selectors$$7["attrs"][i$$4]]), oneLevelOnly$$1]);
        }
        j = j + 1;
        v370 = j < numObjs$$1;
      }
      objs$$1 = newObjs;
    }
    i$$4 = i$$4 + 1;
    v372 = i$$4 < numS;
  }
  allObjs = JAM.call(this.concatUnique, this, [allObjs, objs$$1]);
  allObjs.apply = v47;
  return allObjs;
}
function v46(target$$26, s$$2, a$$1, oneLevelOnly) {
  function v45(me) {
    var v878 = !numA$$1;
    if (v878) {
      v878 = !pseudo;
    }
    if (v878) {
      matches.push(me);
      return;
    }
    var match$$2 = true;
    var v879 = numA$$1;
    if (v879) {
      v879 = !JAM.call(this.processAttrs, this, [me, a$$1, exprs$$1]);
    }
    if (v879) {
      match$$2 = false;
    }
    var v880 = pseudo;
    if (v880) {
      v880 = !JAM.call(this.processPseudo, this, [me, pSelector$$1, pA$$1, pB$$1]);
    }
    if (v880) {
      match$$2 = false;
    }
    if (match$$2) {
      matches.push(me);
    }
    return;
  }
  this.pCache = {};
  var matches = [];
  var exprs$$1 = [];
  var chunks;
  var objs;
  var numObjs;
  var pseudo;
  var pSelector$$1;
  var pOption;
  var pA$$1;
  var pB$$1;
  this.postProcess = v45;
  var i$$3 = 0;
  var numA$$1 = a$$1.length;
  var v388 = i$$3 < numA$$1;
  for (;v388;) {
    chunks = a$$1[i$$3].match(/([a-z0-9_-]+)\s*([=^$*|!]{0,2})\s*"?([^"]*)"?$/i);
    introspect(JAM.policy.p2) {
      a$$1[i$$3] = chunks[1];
    }
    switch(chunks[2]) {
      case "=":
        var v377 = exprs$$1;
        var v378 = i$$3;
        var v1643 = new RegExp("^" + chunks[3] + "$", "i");
        introspect(JAM.policy.p2) {
          v377[v378] = v1643;
        }
        break;
      case "^=":
        var v379 = exprs$$1;
        var v380 = i$$3;
        var v1644 = new RegExp("^" + chunks[3], "i");
        introspect(JAM.policy.p2) {
          v379[v380] = v1644;
        }
        break;
      case "$=":
        var v381 = exprs$$1;
        var v382 = i$$3;
        var v1645 = new RegExp(chunks[3] + "$", "i");
        introspect(JAM.policy.p2) {
          v381[v382] = v1645;
        }
        break;
      case "*=":
        var v383 = exprs$$1;
        var v384 = i$$3;
        var v1646 = new RegExp(chunks[3], "i");
        introspect(JAM.policy.p2) {
          v383[v384] = v1646;
        }
        break;
      case "&=":
        var v385 = exprs$$1;
        var v386 = i$$3;
        var v1647 = new RegExp("^" + chunks[3] + "$|^" + chunks[3] + "\\s|\\s" + chunks[3] + "\\s|\\s" + chunks[3] + "$", "i");
        introspect(JAM.policy.p2) {
          v385[v386] = v1647;
        }
        break;
      case "!=":
        introspect(JAM.policy.p2) {
          exprs$$1[i$$3] = chunks[3];
        }
      ;
    }
    i$$3 = i$$3 + 1;
    v388 = i$$3 < numA$$1;
  }
  if (s$$2.indexOf(":") != -1) {
    chunks = s$$2.split(":");
    s$$2 = chunks[0];
    pseudo = chunks[1].match(/([a-z-]+)\(?([a-z0-9+-]*)\)?/i);
    pSelector$$1 = pseudo[1].toLowerCase();
    switch(pOption = pseudo[2].toLowerCase()) {
      case "odd":
        pOption = "2n+1";
        break;
      case "even":
        pOption = "2n";
    }
    chunks = pOption.match(/([0-9+-]*)(n?)([0-9+-]*)/i);
    var v888;
    if (chunks[2]) {
      var v1199;
      if (chunks[1]) {
        var v1392;
        if (chunks[1] == "-") {
          v1392 = -1;
        } else {
          v1392 = chunks[1];
        }
        v1199 = v1392;
      } else {
        v1199 = 1;
      }
      v888 = v1199;
    } else {
      v888 = 0;
    }
    pA$$1 = parseInt(v888);
    var v889;
    if (chunks[3]) {
      v889 = chunks[3];
    } else {
      var v1201;
      var v1505 = chunks[1];
      if (v1505) {
        v1505 = !chunks[2];
      }
      if (v1505) {
        v1201 = chunks[1];
      } else {
        v1201 = 0;
      }
      v889 = v1201;
    }
    pB$$1 = parseInt(v889);
  }
  if (s$$2.indexOf("#") != -1) {
    JAM.call(this.postProcess, this, [document.getElementById(s$$2.substr(s$$2.indexOf("#") + 1))]);
  } else {
    if (s$$2.indexOf(".") != -1) {
      chunks = s$$2.split(".");
      var v396 = s$$2.substr(chunks[0].length + 1);
      var classMatch = JAM.call(v396.replace, v396, [".", " "]);
      var className = new RegExp("^" + classMatch + "$|^" + classMatch + "\\s|\\s" + classMatch + "\\s|\\s" + classMatch + "$", "i");
      var v895;
      if (chunks[0]) {
        v895 = chunks[0];
      } else {
        v895 = "*";
      }
      objs = target$$26.getElementsByTagName(v895);
      i$$3 = 0;
      numObjs = objs.length;
      var v401 = i$$3 < numObjs;
      for (;v401;) {
        var v1207 = !oneLevelOnly;
        if (v1207) {
          v1207 = className.test(objs[i$$3].className);
        }
        var v896 = v1207;
        if (!v896) {
          var v1399 = oneLevelOnly;
          if (v1399) {
            v1399 = className.test(objs[i$$3].className);
          }
          var v1208 = v1399;
          if (v1208) {
            v1208 = objs[i$$3].parentNode == target$$26;
          }
          v896 = v1208;
        }
        if (v896) {
          JAM.call(this.postProcess, this, [objs[i$$3]]);
        }
        i$$3 = i$$3 + 1;
        v401 = i$$3 < numObjs;
      }
    } else {
      var v897 = s$$2 == "*";
      if (!v897) {
        v897 = /^[A-Za-z0-9]+$/.test(s$$2);
      }
      if (v897) {
        i$$3 = 0;
        objs = target$$26.getElementsByTagName(s$$2);
        numObjs = objs.length;
        var v404 = i$$3 < numObjs;
        for (;v404;) {
          var v898 = !oneLevelOnly;
          if (!v898) {
            var v1211 = oneLevelOnly;
            if (v1211) {
              v1211 = objs[i$$3].parentNode == target$$26;
            }
            v898 = v1211;
          }
          if (v898) {
            JAM.call(this.postProcess, this, [objs[i$$3]]);
          }
          i$$3 = i$$3 + 1;
          v404 = i$$3 < numObjs;
        }
      }
    }
  }
  return matches;
}
function v44(match$$1, pSelector, pA, pB) {
  var pCache;
  var nodeKey;
  var parentChildren = [];
  var pI = 0;
  if (!(nodeKey = match$$1.parentNode.getAttribute("midorinodekey"))) {
    var v408 = match$$1.parentNode;
    JAM.call(v408.setAttribute, v408, ["midorinodekey", nodeKey = Math.random().toString().substr(2)]);
  }
  if (pCache = this.pCache[nodeKey]) {
    parentChildren = pCache["parentChildren"];
    pI = pCache["pI"];
  } else {
    var c$$2 = match$$1.parentNode.firstChild;
    for (;c$$2;) {
      if (c$$2.nodeType == 1) {
        parentChildren.push(c$$2);
      }
      c$$2 = c$$2.nextSibling;
    }
    JAM.set(this.pCache, nodeKey, {parentChildren:parentChildren, pI:0}, JAM.policy.p2);
  }
  var parentNumChildren = parentChildren.length;
  switch(pSelector) {
    case "first-child":
      if (match$$1 == parentChildren[0]) {
        return true;
      }
      break;
    case "last-child":
      if (match$$1 == parentChildren[parentNumChildren - 1]) {
        return true;
      }
      break;
    case "only-child":
      if (parentNumChildren == 1) {
        return true;
      }
    ;
  }
  if (pSelector == "nth-child") {
    var v = pA * pI + pB;
    var oldV = -50;
    var v905 = v > -50;
    if (v905) {
      v905 = v <= parentNumChildren;
    }
    var v422 = v905;
    for (;v422;) {
      var v906 = v >= 0;
      if (v906) {
        v906 = parentChildren[v - 1] == match$$1;
      }
      if (v906) {
        var v419 = this.pCache[nodeKey];
        var v908;
        if (pA >= 0) {
          v908 = pI + 1;
        } else {
          v908 = 0;
        }
        v419["pI"] = v908;
        return true;
      }
      pI = pI + 1;
      v = v + pA;
      if (v == oldV) {
        break;
      }
      oldV = v;
      var v909 = v > -50;
      if (v909) {
        v909 = v <= parentNumChildren;
      }
      v422 = v909;
    }
  }
  return;
}
function v43(match, a, exprs) {
  var i$$2 = 0;
  var numA = a.length;
  var attr;
  var v429 = i$$2 < numA;
  for (;v429;) {
    var v424;
    if (a[i$$2] == "class") {
      var v910;
      if (match.className) {
        v910 = match.className;
      } else {
        v910 = null;
      }
      v424 = v910;
    } else {
      v424 = match.getAttribute(a[i$$2]);
    }
    attr = v424;
    switch(typeof exprs[i$$2]) {
      case "undefined":
        if (attr == null) {
          return false;
        }
        break;
      case "string":
        if (attr == exprs[i$$2]) {
          return false;
        }
        break;
      default:
        if (!exprs[i$$2].test(attr)) {
          return false;
        }
      ;
    }
    i$$2 = i$$2 + 1;
    v429 = i$$2 < numA;
  }
  return true;
}
function v42(selectorText) {
  var c$$1 = JAM.call(this.trim, this, [selectorText]).split("");
  var sI = -1;
  var bracketContent = "";
  var elements = [];
  var attrs = [];
  var separators = [];
  var inSelector = false;
  var inBrackets = false;
  var inQuotes = false;
  var i$$1 = 0;
  var len = c$$1.length;
  var v437 = i$$1 < len;
  for (;v437;) {
    if (inSelector) {
      if (inBrackets) {
        switch(c$$1[i$$1]) {
          case '"':
            inQuotes = !inQuotes;
            break;
          case "]":
            if (!inQuotes) {
              attrs[sI].push(bracketContent);
              inBrackets = false;
              bracketContent = "";
            }
            break;
          case "\\":
            bracketContent = bracketContent + c$$1[i$$1 = i$$1 + 1];
            break;
          default:
            bracketContent = bracketContent + c$$1[i$$1];
        }
      } else {
        switch(c$$1[i$$1]) {
          case "[":
            inBrackets = true;
            break;
          case " ":
          ;
          case ">":
          ;
          case ",":
            inSelector = false;
            introspect(JAM.policy.p2) {
              separators[sI] = c$$1[i$$1];
            }
            break;
          case "\\":
            var v918 = elements[sI];
            var v919 = c$$1[i$$1 = i$$1 + 1];
            introspect(JAM.policy.p2) {
              elements[sI] = v918 + v919;
            }
            break;
          default:
            var v920 = elements[sI];
            var v921 = c$$1[i$$1];
            introspect(JAM.policy.p2) {
              elements[sI] = v920 + v921;
            }
          ;
        }
      }
    } else {
      switch(c$$1[i$$1]) {
        case " ":
        ;
        case ">":
        ;
        case ",":
          var v922 = separators[sI];
          var v923 = c$$1[i$$1];
          introspect(JAM.policy.p2) {
            separators[sI] = v922 + v923;
          }
          break;
        default:
          inSelector = true;
          var v435 = sI = sI + 1;
          introspect(JAM.policy.p2) {
            elements[v435] = c$$1[i$$1];
          }
          introspect(JAM.policy.p2) {
            attrs[sI] = [];
          }
        ;
      }
    }
    i$$1 = i$$1 + 1;
    v437 = i$$1 < len;
  }
  return{elements:elements, attrs:attrs, separators:separators};
}
function v41(obj$$16, direction$$3) {
  var sibling = obj$$16;
  if (direction$$3 == "next") {
    var v924 = sibling;
    if (v924) {
      v924 = sibling.nodeType == 3;
    }
    var v438 = v924;
    do {
      sibling = sibling.nextSibling;
      var v925 = sibling;
      if (v925) {
        v925 = sibling.nodeType == 3;
      }
      v438 = v925;
    } while (v438);
  } else {
    if (direction$$3 == "prev") {
      var v926 = sibling;
      if (v926) {
        v926 = sibling.nodeType == 3;
      }
      var v439 = v926;
      do {
        sibling = sibling.previousSibling;
        var v927 = sibling;
        if (v927) {
          v927 = sibling.nodeType == 3;
        }
        v439 = v927;
      } while (v439);
    }
  }
  var v442;
  if (sibling == obj$$16) {
    v442 = false;
  } else {
    v442 = sibling;
  }
  return v442;
}
function v40(parentObj, callBack, depthFirst) {
  var c = parentObj.firstChild;
  for (;c;) {
    if (!depthFirst) {
      JAM.call(callBack, null, [c]);
    }
    if (c.firstChild) {
      JAM.call(this.each, this, [c, callBack, depthFirst]);
    }
    if (depthFirst) {
      JAM.call(callBack, null, [c]);
    }
    c = c.nextSibling;
  }
  return;
}
function midoriTableSelection(vars$$6) {
  function v4() {
    var numRowIds = this.rowIds.length;
    if (JAM.call(midori.get, midori, ["#" + this.vars.rowPrefix + "header-cb"]).style.display == "none") {
      JAM.call(midori.get, midori, ["#" + this.vars.rowPrefix + "header-cb"]).style.display = "";
      var i$$19 = 0;
      var v452 = i$$19 < numRowIds;
      for (;v452;) {
        var rowId = this.rowIds[i$$19];
        JAM.call(midori.get, midori, ["#" + this.vars.rowPrefix + "cb_" + rowId]).style.display = "";
        if (JAM.call(midori.get, midori, ["#" + this.vars.rowPrefix + "cb_" + rowId]).firstChild.checked) {
          JAM.call(midori.highlightRow, midori, [JAM.call(midori.get, midori, ["#" + this.vars.rowPrefix + rowId]), this.vars.rowHighlight]);
        }
        i$$19 = i$$19 + 1;
        v452 = i$$19 < numRowIds;
      }
      if (vars$$6.showCallback) {
        JAM.call(vars$$6.showCallback, vars$$6, [this]);
      }
    } else {
      JAM.call(midori.get, midori, ["#" + this.vars.rowPrefix + "header-cb"]).style.display = "none";
      i$$19 = 0;
      var v458 = i$$19 < numRowIds;
      for (;v458;) {
        JAM.call(midori.get, midori, ["#" + this.vars.rowPrefix + "cb_" + this.rowIds[i$$19]]).style.display = "none";
        JAM.call(midori.highlightRow, midori, [JAM.call(midori.get, midori, ["#" + this.vars.rowPrefix + this.rowIds[i$$19]]), this.vars.rowHighlight, true]);
        i$$19 = i$$19 + 1;
        v458 = i$$19 < numRowIds;
      }
      if (vars$$6.hideCallback) {
        JAM.call(vars$$6.hideCallback, vars$$6, [this]);
      }
    }
    return;
  }
  function v3(o$$7) {
    function v2(e$$8) {
      JAM.call(midori.highlightRow, midori, [JAM.call(midori.get, midori, ["#" + vars$$6.rowPrefix + id$$4]), vars$$6.rowHighlight]);
      JAM.call(midori.saveCheckboxState, midori, [JAM.call(midori.get, midori, ["#" + vars$$6.tableId + "_cb_parent"]), el$$2]);
      this.value = id$$4;
      return;
    }
    function v1(c$$3) {
      className$$2 = c$$3.className;
      return;
    }
    var td;
    var el$$2;
    var id$$4;
    var className$$2;
    var v464 = JAM.call(midori.get, midori, ["td:last-child", o$$7]);
    JAM.call(v464.apply, v464, [v1]);
    id$$4 = o$$7.id.substr(vars$$6.rowPrefix.length);
    td = document.createElement("td");
    td.style.display = "none";
    JAM.call(midori.setAttributes, midori, [td, {id:vars$$6.rowPrefix + "cb_" + id$$4, className:className$$2}]);
    el$$2 = document.createElement("input");
    JAM.call(midori.setAttributes, midori, [el$$2, {name:vars$$6.checkboxName, type:"checkbox", value:id$$4}]);
    JAM.call(midori.addEventListener, midori, [el$$2, "click", v2]);
    JAM.call(td.appendChild, td, [el$$2]);
    JAM.call(o$$7.appendChild, o$$7, [td]);
    thisObj.rowIds.push(id$$4);
    return;
  }
  function v0(e$$7) {
    var id$$3;
    var el$$1;
    var isChecked;
    var i$$18 = 0;
    var numIds = thisObj.rowIds.length;
    var v478 = i$$18 < numIds;
    for (;v478;) {
      id$$3 = thisObj.rowIds[i$$18];
      el$$1 = JAM.call(midori.get, midori, ["#" + vars$$6.rowPrefix + "cb_" + id$$3]).firstChild;
      isChecked = el$$1.checked;
      el$$1.checked = !isChecked;
      var v474;
      if (isChecked) {
        v474 = "";
      } else {
        v474 = id$$3;
      }
      el$$1.value = v474;
      JAM.call(midori.highlightRow, midori, [JAM.call(midori.get, midori, ["#" + vars$$6.rowPrefix + id$$3]), vars$$6.rowHighlight]);
      JAM.call(midori.saveCheckboxState, midori, [JAM.call(midori.get, midori, ["#" + vars$$6.tableId + "_cb_parent"]), el$$1]);
      i$$18 = i$$18 + 1;
      v478 = i$$18 < numIds;
    }
    return;
  }
  this.vars = vars$$6;
  this.rowIds = [];
  var thisObj = this;
  var cb$$1 = document.createElement("input");
  JAM.call(cb$$1.setAttribute, cb$$1, ["type", "checkbox"]);
  JAM.call(midori.addEventListener, midori, [cb$$1, "click", v0]);
  var firstTh = JAM.call(midori.get, midori, ["#" + vars$$6.tableId + " th"])[0];
  var th = document.createElement("th");
  JAM.call(midori.setAttributes, midori, [th, {id:vars$$6.rowPrefix + "header-cb", align:"left", className:firstTh.className}]);
  JAM.call(th.appendChild, th, [cb$$1]);
  th.style.display = "none";
  var v482 = firstTh.parentNode;
  JAM.call(v482.appendChild, v482, [th]);
  var cbParent = document.createElement("div");
  cbParent.id = vars$$6.tableId + "_cb_parent";
  var v484 = document.body;
  JAM.call(v484.appendChild, v484, [cbParent]);
  var v485 = JAM.call(midori.get, midori, ["#" + vars$$6.tableId + ' tr[id^="' + vars$$6.rowPrefix + '"]']);
  JAM.call(v485.apply, v485, [v3]);
  this.toggle = v4;
  return;
}
function midoriDragDrop(containerId$$1, dropCallback) {
  function v18(e$$14) {
    JAM.call(thisObj$$1.mouseUp, thisObj$$1, [e$$14]);
    return;
  }
  function v17(e$$13) {
    JAM.call(thisObj$$1.mouseMove, thisObj$$1, [e$$13]);
    return;
  }
  function v16(e$$12) {
    if (thisObj$$1.doneDragging) {
      JAM.call(midori.preventDefault, midori, [e$$12]);
    }
    return;
  }
  function v15(e$$11) {
    JAM.call(thisObj$$1.mouseUp, thisObj$$1, [e$$11]);
    return;
  }
  function v14(e$$10) {
    JAM.call(thisObj$$1.mouseMove, thisObj$$1, [e$$10]);
    return;
  }
  function v13(o$$10, dragged, spacer) {
    if (/drop-target/.test(o$$10.obj.className)) {
      var v487 = o$$10.obj;
      var v952;
      if (spacer) {
        v952 = spacer;
      } else {
        v952 = dragged;
      }
      return JAM.call(v487.appendChild, v487, [v952]);
    }
    var v490;
    var v1246 = o$$10.where == "next";
    if (v1246) {
      v1246 = !o$$10.obj.nextSibling;
    }
    if (v1246) {
      var v953 = o$$10.obj.parentNode;
      var v1248;
      if (spacer) {
        v1248 = spacer;
      } else {
        v1248 = dragged;
      }
      v490 = JAM.call(v953.appendChild, v953, [v1248]);
    } else {
      var v955 = o$$10.obj.parentNode;
      var v1250;
      if (spacer) {
        v1250 = spacer;
      } else {
        v1250 = dragged;
      }
      var v956 = v1250;
      var v1251;
      if (o$$10.where == "prev") {
        v1251 = o$$10.obj;
      } else {
        v1251 = o$$10.obj.nextSibling;
      }
      v490 = JAM.call(v955.insertBefore, v955, [v956, v1251]);
    }
    return v490;
  }
  function v12(event$$7) {
    this.doneDragging = false;
    if (!this.dragged) {
      return;
    }
    var objCoords$$2;
    var v960 = this.mouseMoved;
    if (v960) {
      v960 = objCoords$$2 = JAM.call(this.findPlace, this, [event$$7, true]);
    }
    if (v960) {
      JAM.call(this.dropCallback, this, [objCoords$$2, this.dragged]);
      this.doneDragging = true;
    }
    if (!this.dragged) {
      return;
    }
    this.spacer.style.display = "none";
    JAM.call(midori.setStyles, midori, [this.dragged, {position:"", opacity:"1"}]);
    JAM.call(this.init, this, [this.container]);
    return;
  }
  function v11(event$$6) {
    var v963 = !this.dragged;
    if (!v963) {
      v963 = /drop-target/.test(this.dragged.className);
    }
    if (v963) {
      return;
    }
    JAM.call(midori.preventDefault, midori, [event$$6]);
    var mousePos$$2 = JAM.call(midori.getMousePos, midori, [event$$6]);
    this.lastMousePos = mousePos$$2;
    this.mouseMoved = true;
    JAM.call(midori.setStyles, midori, [this.dragged, {position:"absolute", left:mousePos$$2.x - this.mouseOffset.x + "px", top:mousePos$$2.y - this.mouseOffset.y + "px"}]);
    JAM.call(midori.setFloat, midori, [this.spacer, JAM.call(midori.getFloat, midori, [this.dragged])]);
    var objCoords$$1;
    var v967 = objCoords$$1 = JAM.call(this.findPlace, this, [event$$6]);
    if (v967) {
      v967 = JAM.call(this.dropCallback, this, [objCoords$$1, this.dragged, this.spacer]);
    }
    if (v967) {
      JAM.call(midori.setStyles, midori, [this.spacer, {display:"block", height:this.dragged.offsetHeight + "px"}]);
      if (JAM.call(midori.getFloat, midori, [this.spacer])) {
        this.spacer.style.width = this.dragged.offsetWidth + "px";
      }
    } else {
      this.spacer.style.display = "none";
    }
    return;
  }
  function v10(parentObj$$1) {
    function v9(o$$9) {
      if (!/draggable/.test(o$$9.className)) {
        return;
      }
      j$$3 = 0;
      var v513 = j$$3 < numObjs$$4;
      for (;v513;) {
        if (thisObj$$1.objs[j$$3] == o$$9) {
          JAM.set(thisObj$$1.objs, j$$3, "", JAM.policy.p2);
          break;
        }
        j$$3 = j$$3 + 1;
        v513 = j$$3 < numObjs$$4;
      }
      return;
    }
    var j$$3;
    var numObjs$$4 = this.objs.length;
    JAM.call(midori.each, midori, [parentObj$$1, v9, true]);
    j$$3 = 0;
    var v517 = j$$3 < numObjs$$4;
    for (;v517;) {
      if (this.objs[j$$3] == parentObj$$1) {
        JAM.set(this.objs, j$$3, "", JAM.policy.p2);
        break;
      }
      j$$3 = j$$3 + 1;
      v517 = j$$3 < numObjs$$4;
    }
    return;
  }
  function v8(event$$5, mouseUp) {
    var v518;
    var v1264 = mouseUp;
    if (v1264) {
      v1264 = event$$5.targetTouches;
    }
    if (v1264) {
      v518 = this.lastMousePos;
    } else {
      v518 = JAM.call(midori.getMousePos, midori, [event$$5]);
    }
    var mousePos$$1 = v518;
    var obj$$26;
    var objCoords;
    var objPos$$1;
    if (!this.objsCoords.length) {
      var i$$21 = 0;
      var numObjs$$3 = this.objs.length;
      var v523 = i$$21 < numObjs$$3;
      for (;v523;) {
        var v978 = obj$$26 = this.objs[i$$21];
        if (v978) {
          v978 = objPos$$1 = JAM.call(midori.getPos, midori, [obj$$26]);
        }
        if (v978) {
          this.objsCoords.push({obj:obj$$26, x:objPos$$1.x, y:objPos$$1.y, width:obj$$26.offsetWidth, height:obj$$26.offsetHeight});
        }
        i$$21 = i$$21 + 1;
        v523 = i$$21 < numObjs$$3;
      }
    }
    var j$$2 = 0;
    var numObjsCoords = this.objsCoords.length;
    var v529 = j$$2 < numObjsCoords;
    for (;v529;) {
      if (objCoords = this.objsCoords[j$$2]) {
        var v1432 = mousePos$$1.x >= objCoords.x;
        if (v1432) {
          v1432 = mousePos$$1.x <= objCoords.x + objCoords.width;
        }
        var v1267 = v1432;
        if (v1267) {
          var v1433 = mousePos$$1.y >= objCoords.y;
          if (v1433) {
            v1433 = mousePos$$1.y <= objCoords.y + objCoords.height;
          }
          v1267 = v1433;
        }
        if (!v1267) {
          j$$2 = j$$2 + 1;
          v529 = j$$2 < numObjsCoords;
          continue;
        }
        var v527 = objCoords;
        var v985;
        if (JAM.call(midori.getFloat, midori, [objCoords.obj])) {
          var v1268;
          if (mousePos$$1.x < objCoords.x + objCoords.width / 2) {
            v1268 = "prev";
          } else {
            v1268 = "next";
          }
          v985 = v1268;
        } else {
          var v1269;
          if (mousePos$$1.y < objCoords.y + objCoords.height / 2) {
            v1269 = "prev";
          } else {
            v1269 = "next";
          }
          v985 = v1269;
        }
        v527.where = v985;
        return objCoords;
      }
      j$$2 = j$$2 + 1;
      v529 = j$$2 < numObjsCoords;
    }
    return;
  }
  function v7() {
    function v6(o$$8) {
      function v5(e$$9) {
        var mousePos = JAM.call(midori.getMousePos, midori, [e$$9]);
        var me$$2 = JAM.call(midori.getEventTarget, midori, [e$$9]);
        if (/not-draggable/.test(me$$2.className)) {
          return;
        }
        var v531 = !/draggable/.test(me$$2.className);
        for (;v531;) {
          me$$2 = me$$2.parentNode;
          v531 = !/draggable/.test(me$$2.className);
        }
        var objPos = JAM.call(midori.getPos, midori, [me$$2]);
        thisObj$$1.dragged = me$$2;
        thisObj$$1.mouseOffset = {x:mousePos.x - objPos.x, y:mousePos.y - objPos.y};
        if (!/drop-target/.test(o$$8.className)) {
          me$$2.style.opacity = ".5";
          JAM.call(midori.preventBubble, midori, [e$$9]);
          JAM.call(midori.preventDefault, midori, [e$$9]);
        }
        JAM.call(thisObj$$1.removeDraggedObj, thisObj$$1, [me$$2]);
        return;
      }
      var v1274 = /not-draggable/.test(o$$8.className);
      if (!v1274) {
        v1274 = !/draggable/.test(o$$8.className);
      }
      var v994 = v1274;
      if (!v994) {
        v994 = o$$8.style.display == "none";
      }
      if (v994) {
        return;
      }
      thisObj$$1.objs.push(o$$8);
      var i$$20 = 0;
      var v539 = i$$20 < 2;
      for (;v539;) {
        JAM.call(midori.addEventListener, midori, [o$$8, ["mousedown", "touchstart"][i$$20], v5]);
        i$$20 = i$$20 + 1;
        v539 = i$$20 < 2;
      }
      return;
    }
    this.objs = [];
    this.objsCoords = [];
    this.mouseMoved = false;
    this.dragged = null;
    JAM.call(midori.each, midori, [this.container, v6, true]);
    return;
  }
  var thisObj$$1 = this;
  var v1648 = JAM.call(midori.get, midori, ["#" + containerId$$1]);
  this.container = v1648;
  this.init = v7;
  this.findPlace = v8;
  this.removeDraggedObj = v10;
  this.mouseMove = v11;
  this.mouseUp = v12;
  this.defaultDropCallback = v13;
  JAM.call(midori.addEventListener, midori, [this.container, "mousemove", v14]);
  JAM.call(midori.addEventListener, midori, [this.container, "mouseup", v15]);
  JAM.call(midori.addEventListener, midori, [this.container, "click", v16]);
  JAM.call(midori.addEventListener, midori, [this.container, "touchmove", v17]);
  JAM.call(midori.addEventListener, midori, [this.container, "touchend", v18]);
  var v1649 = document.createElement("div");
  this.spacer = v1649;
  JAM.set(this.spacer, "innerHTML", "&nbsp;");
  JAM.call(midori.setAttributes, midori, [this.spacer, {id:"midori_dd_spacer" + midori.uniqid(), className:"midori-dd-spacer"}]);
  var v550;
  if (dropCallback) {
    v550 = dropCallback;
  } else {
    v550 = this.defaultDropCallback;
  }
  this.dropCallback = v550;
  this.init();
  return;
}
function midoriAjax(callback$$29, params$$1, cache) {
  function v20(where, what$$3, verb, headers) {
    var cachedValue;
    this.cacheKey = where + "?" + what$$3;
    var v997 = cache;
    if (v997) {
      v997 = (cachedValue = this.cache[this.cacheKey]) != null;
    }
    if (v997) {
      this.responseText = cachedValue;
      JAM.call(this.runCallback, this, ["", true]);
      return;
    }
    JAM.set(this.request, "onreadystatechange", this.runCallback);
    var v554;
    if (verb) {
      var v1443;
      if (verb == true) {
        v1443 = "GET";
      } else {
        v1443 = verb;
      }
      v554 = JAM.call(midori.trim, midori, [v1443.toUpperCase()]);
    } else {
      v554 = "POST";
    }
    verb = v554;
    var v555 = this.request;
    var v999;
    if (JAM.call(midori.inArray, midori, [verb, ["POST", "PUT"]])) {
      v999 = where;
    } else {
      var v1445;
      if (what$$3) {
        v1445 = "?" + what$$3;
      } else {
        v1445 = "";
      }
      v999 = where + v1445;
    }
    v555.open(verb, v999, true);
    if (JAM.call(midori.inArray, midori, [verb, ["POST", "PUT"]])) {
      this.request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
      this.request.setRequestHeader("Content-length", what$$3.length);
      this.request.setRequestHeader("Connection", "close");
    }
    if (headers) {
      var i$$22 = 0;
      var len$$2 = headers.length;
      var v565 = i$$22 < len$$2;
      for (;v565;) {
        this.request.setRequestHeader(headers[i$$22][0], headers[i$$22][1]);
        i$$22 = i$$22 + 1;
        v565 = i$$22 < len$$2;
      }
    }
    var v566 = this.request;
    var v1003;
    if (JAM.call(midori.inArray, midori, [verb, ["POST", "PUT"]])) {
      v1003 = what$$3;
    } else {
      v1003 = null;
    }
    v566.send(v1003);
    return;
  }
  function v19(event$$8, cached) {
    if (!cached) {
      if (thisObj$$2.request.readyState != 4) {
        return;
      }
      thisObj$$2.responseText = thisObj$$2.request.responseText;
      thisObj$$2.responseXML = thisObj$$2.request.responseXML;
      thisObj$$2.status = thisObj$$2.request.status;
      JAM.set(thisObj$$2.cache, thisObj$$2.cacheKey, thisObj$$2.responseText, JAM.policy.p2);
    }
    JAM.call(thisObj$$2.callback, thisObj$$2, [params$$1]);
    return;
  }
  var thisObj$$2 = this;
  this.cache = {};
  this.callback = callback$$29;
  try {
    var v1650 = new XMLHttpRequest;
    this.request = v1650;
  } catch (e$$15) {
    try {
      var v1651 = new ActiveXObject("Msxml2.XMLHTTP");
      this.request = v1651;
    } catch (e$$16) {
      var v1652 = new ActiveXObject("Microsoft.XMLHTTP");
      this.request = v1652;
    }
  }
  this.runCallback = v19;
  this.post = v20;
  return;
}
function midoriAutoComplete(vars$$7) {
  function v32() {
    function v31(e$$21) {
      JAM.call(thisObj$$3.process, thisObj$$3, [e$$21]);
      return;
    }
    function v30(e$$20) {
      if (e$$20.keyCode == 13) {
        return false;
      }
      return;
    }
    function v29(e$$19) {
      if (e$$19.keyCode == 13) {
        JAM.call(midori.preventDefault, midori, [e$$19]);
      }
      return;
    }
    function v28() {
      if (thisObj$$3.ajax.responseText) {
        var v577;
        if (typeof thisObj$$3.ajax.responseText == "string") {
          var v1008 = "(" + thisObj$$3.ajax.responseText + ")";
          if (JAM.isEval(eval)) {
            v577 = eval("introspect(JAM.policy.pFull) { " + v1008 + " }");
          } else {
            v577 = JAM.call(eval, null, [v1008]);
          }
        } else {
          v577 = thisObj$$3.ajax.responseText;
        }
        var response = v577;
        JAM.set(thisObj$$3.suggestions, response["snippet"], response["result"], JAM.policy.p2);
        JAM.call(thisObj$$3.showSuggestions, thisObj$$3, [response["snippet"]]);
      }
      return;
    }
    if (!vars$$7.separator) {
      vars$$7.separator = "";
    }
    this.ajaxCallback = v28;
    var v1653 = midori.uniqid();
    this.uniqid = v1653;
    var v1654 = JAM.call(midori.get, midori, ["#" + vars$$7.id]);
    this.obj = v1654;
    this.content = this.obj.value;
    this.oldContent = this.content;
    this.suggestions = [];
    var v585;
    if (typeof vars$$7.fileName == "string") {
      v585 = new midoriAjax(this.ajaxCallback, "", true);
    } else {
      v585 = {};
    }
    this.ajax = v585;
    if (this.browserType != "Gecko") {
      var parentNode$$2 = this.obj;
      JAM.call(midori.addEventListener, midori, [parentNode$$2, "keypress", v29]);
      var v587 = parentNode$$2.parentNode != null;
      for (;v587;) {
        parentNode$$2 = parentNode$$2.parentNode;
        if (parentNode$$2.nodeName.toLowerCase() == "form") {
          JAM.call(midori.addEventListener, midori, [parentNode$$2, "keypress", v30]);
        }
        v587 = parentNode$$2.parentNode != null;
      }
    }
    var v589 = this.obj;
    JAM.call(v589.setAttribute, v589, ["autocomplete", "off"]);
    JAM.call(midori.addEventListener, midori, [this.obj, "keyup", v31]);
    return;
  }
  function v27(snippet$$3) {
    var pos = 0;
    var i$$25;
    for (i$$25 in this.suggestions[snippet$$3]) {
      if ((pos = pos + 1) == this.suggestionPos) {
        var v591 = this.obj;
        var v1022 = this.obj.value;
        var v1289;
        if (vars$$7.callback) {
          v1289 = JAM.call(vars$$7.callback, vars$$7, [this.suggestions[snippet$$3][i$$25]]);
        } else {
          v1289 = this.suggestions[snippet$$3][i$$25];
        }
        var v1655 = JAM.call(v1022.replace, v1022, [snippet$$3, v1289]);
        v591.value = v1655;
        break;
      }
    }
    this.content = this.obj.value;
    this.oldContent = this.content;
    this.obj.focus();
    return;
  }
  function v26(suggestionPos) {
    var v1290 = "#" + this.popupId + " .";
    var v1454 = vars$$7.suggestionSelectedClass;
    var v596 = JAM.call(midori.get, midori, [v1290 + JAM.call(v1454.replace, v1454, [" ", "."])]);
    JAM.call(v596.apply, v596, ["className = '" + vars$$7.suggestionClass + "'"]);
    JAM.call(midori.get, midori, ["#midori_suggestion" + this.uniqid + "_" + suggestionPos]).className = vars$$7.suggestionSelectedClass;
    this.suggestionPos = suggestionPos;
    return;
  }
  function v25(snippet$$2) {
    var suggestions = this.suggestions[snippet$$2];
    var html = "";
    var properties = [];
    var i$$24 = 0;
    var j$$5 = 0;
    var k$$2 = "";
    for (i$$24 in suggestions) {
      if (vars$$7.htmlTemplate) {
        for (k$$2 in suggestions[i$$24]) {
          JAM.set(properties, k$$2, suggestions[i$$24][k$$2], JAM.policy.p2);
        }
      }
      var v1027 = html;
      var v1456 = '<a id="midori_suggestion' + this.uniqid + "_" + (j$$5 = j$$5 + 1) + '" class="' + vars$$7.suggestionClass + '" href="#">';
      var v1547;
      if (vars$$7.htmlTemplate) {
        v1547 = JAM.call(midori.replace, midori, [vars$$7.htmlTemplate, properties]);
      } else {
        v1547 = suggestions[i$$24];
      }
      html = v1027 + (v1456 + v1547 + "</a>\n");
    }
    if (!html) {
      midoriPopup.hide();
      return;
    }
    this.snippet = snippet$$2;
    this.suggestionPos = 0;
    this.numSuggestions = j$$5;
    if (this.popup) {
      JAM.call(midori.removeNode, midori, [this.popup]);
    }
    this.popupId = "midori_suggestions" + this.uniqid;
    var v1656 = document.createElement("div");
    this.popup = v1656;
    JAM.call(midori.setAttributes, midori, [this.popup, {id:this.popupId, className:"popup"}]);
    var v609 = document.body;
    JAM.call(v609.appendChild, v609, [this.popup]);
    JAM.set(this.popup, "innerHTML", html);
    j$$5 = 0;
    for (i$$24 in this.suggestions[snippet$$2]) {
      JAM.call(this.addProperties, this, [j$$5 = j$$5 + 1, snippet$$2]);
    }
    JAM.call(midoriPopup.show, midoriPopup, [{obj:this.obj, popupId:this.popupId, x:0, y:0, noAnim:true}]);
    this.obj.focus();
    return;
  }
  function v24(id$$5, snippet$$1) {
    function v23(e$$18) {
      JAM.call(thisObj$$3.replaceSnippet, thisObj$$3, [snippet$$1]);
      JAM.call(midori.preventDefault, midori, [e$$18]);
      return;
    }
    function v22(e$$17) {
      JAM.call(thisObj$$3.highlightSuggestion, thisObj$$3, [id$$5]);
      return;
    }
    var obj$$27 = JAM.call(midori.get, midori, ["#midori_suggestion" + this.uniqid + "_" + id$$5]);
    JAM.call(midori.addEventListener, midori, [obj$$27, "mouseover", v22]);
    JAM.call(midori.addEventListener, midori, [obj$$27, "click", v23]);
    return;
  }
  function v21(event$$9) {
    var v1034 = this.popup;
    if (v1034) {
      v1034 = this.popup == midoriPopup.activePopup;
    }
    if (v1034) {
      switch(event$$9.keyCode) {
        case 27:
        ;
        case 37:
        ;
        case 39:
          midoriPopup.hide();
          break;
        case 13:
          JAM.call(this.replaceSnippet, this, [this.snippet]);
          midoriPopup.hide();
          break;
        case 38:
          var v1035 = this.suggestionPos;
          if (v1035) {
            v1035 = this.suggestionPos != 1;
          }
          if (v1035) {
            JAM.call(this.highlightSuggestion, this, [this.suggestionPos - 1]);
          }
          break;
        case 40:
          if (this.suggestionPos != this.numSuggestions) {
            JAM.call(this.highlightSuggestion, this, [this.suggestionPos + 1]);
          }
        ;
      }
    } else {
      if (vars$$7.callback2) {
        JAM.call(vars$$7.callback2, vars$$7, [event$$9]);
      }
    }
    this.content = this.obj.value;
    var v1040 = this.content == this.oldContent;
    if (!v1040) {
      v1040 = JAM.call(midori.inArray, midori, [event$$9.keyCode, [13, 38, 40]]);
    }
    if (v1040) {
      return;
    }
    var changed = false;
    var i$$23 = 0;
    var len$$3 = this.content.length;
    var v629 = i$$23 < len$$3;
    for (;v629;) {
      if (this.content.charAt(i$$23) != this.oldContent.charAt(i$$23)) {
        changed = true;
        break;
      }
      i$$23 = i$$23 + 1;
      v629 = i$$23 < len$$3;
    }
    var v1043 = !changed;
    if (v1043) {
      v1043 = this.oldContent.length < len$$3;
    }
    if (v1043) {
      return;
    }
    if (this.content.charAt(i$$23) == vars$$7.separator) {
      var v631;
      if (event$$9.keyCode == 8) {
        v631 = i$$23;
        i$$23 = i$$23 - 1;
      } else {
        v631 = i$$23;
        i$$23 = i$$23 + 1;
      }
      v631;
    }
    var j$$4 = i$$23;
    var v634 = j$$4 > 0;
    for (;v634;) {
      if (this.content.charAt(j$$4) == vars$$7.separator) {
        j$$4 = j$$4 + 1;
        break;
      }
      j$$4 = j$$4 - 1;
      v634 = j$$4 > 0;
    }
    var snippet = this.content.substr(j$$4, i$$23 - j$$4);
    j$$4 = i$$23;
    var v638 = j$$4 < len$$3;
    for (;v638;) {
      if (this.content.charAt(j$$4) == vars$$7.separator) {
        break;
      }
      j$$4 = j$$4 + 1;
      v638 = j$$4 < len$$3;
    }
    snippet = snippet + this.content.substr(i$$23, j$$4 - i$$23);
    snippet = JAM.call(midori.trim, midori, [snippet]);
    if (snippet.length >= vars$$7.minChars) {
      if (typeof vars$$7.fileName == "string") {
        var v639 = this.ajax;
        JAM.call(v639.post, v639, [vars$$7.fileName, vars$$7.params + JAM.call(midori.trim, midori, [snippet])]);
      } else {
        var v642 = this.ajax;
        var v1657 = JAM.call(vars$$7.fileName, vars$$7, [vars$$7.params + JAM.call(midori.trim, midori, [snippet])]);
        v642.responseText = v1657;
        this.ajaxCallback();
      }
    }
    this.oldContent = this.content;
    return;
  }
  var thisObj$$3 = this;
  this.process = v21;
  this.addProperties = v24;
  this.showSuggestions = v25;
  this.highlightSuggestion = v26;
  this.replaceSnippet = v27;
  this.init = v32;
  this.init();
  return;
}
function midoriInlineEdit(vars$$8) {
  function v39() {
    if (this.myObj.getAttribute("editing") != "on") {
      return;
    }
    var v1317 = this.editObj.value;
    var v1060 = JAM.call(v1317.replace, v1317, ["\n", ""]);
    var text$$7 = JAM.call(midori.trim, midori, [JAM.call(v1060.replace, v1060, ["\r", ""])]);
    if (!text$$7) {
      this.editObj.value = "";
      return;
    }
    var v649 = this.myObj;
    JAM.call(v649.setAttribute, v649, ["editing", "off"]);
    JAM.set(this.myObj, "innerHTML", "");
    JAM.set(this.myObj, "innerHTML", text$$7);
    if (vars$$8.callback) {
      JAM.call(vars$$8.callback, vars$$8, [text$$7, this.myObj]);
    }
    return;
  }
  function v38() {
    if (this.myObj.getAttribute("editing") == "on") {
      this.editObj.select();
    }
    return;
  }
  function v37() {
    function v36(e$$25) {
      thisObj$$4.save();
      return;
    }
    function v35(e$$24) {
      var v1062 = e$$24.keyCode == 13;
      if (!v1062) {
        v1062 = e$$24.keyCode == 27;
      }
      if (v1062) {
        thisObj$$4.save();
      }
      return;
    }
    function v34(e$$23) {
      JAM.call(midori.preventBubble, midori, [e$$23]);
      return;
    }
    var v1063 = this.myObj.getAttribute("editing") == "on";
    if (!v1063) {
      v1063 = JAM.call(midori.get, midori, [this.input, this.myObj])[0];
    }
    if (v1063) {
      return;
    }
    var v658 = this.myObj.innerHTML;
    var value$$29 = JAM.call(v658.replace, v658, [/"/g, "&quot;"]);
    var v659 = this.myObj;
    var v1065;
    if (vars$$8.textArea) {
      var v1595 = this.myObj.parentNode.offsetWidth;
      var v1618;
      if (vars$$8.x) {
        v1618 = vars$$8.x;
      } else {
        v1618 = 32;
      }
      var v1464 = v1595 - v1618 + "px";
      var v1597 = this.myObj.parentNode.offsetHeight;
      var v1620;
      if (vars$$8.y) {
        v1620 = vars$$8.y;
      } else {
        v1620 = 32;
      }
      v1065 = JAM.call(midori.replace, midori, ['<textarea style="width: :w; height: :h; overflow: auto">:value</textarea>', {w:v1464, h:v1597 - v1620 + "px", value:value$$29}]);
    } else {
      var v1550;
      if (vars$$8.size) {
        v1550 = vars$$8.size;
      } else {
        v1550 = "";
      }
      var v1466 = v1550;
      var v1551;
      if (vars$$8.maxlen) {
        v1551 = vars$$8.maxlen;
      } else {
        v1551 = "";
      }
      v1065 = JAM.call(midori.replace, midori, ['<input type="text" size=":size" maxlength=":maxlen" value=":value" />', {size:v1466, maxlen:v1551, value:value$$29}]);
    }
    JAM.set(v659, "innerHTML", v1065);
    this.editObj = JAM.call(midori.get, midori, [this.input, this.myObj])[0];
    this.editObj.focus();
    this.editObj.focus();
    var v663 = this.myObj;
    JAM.call(v663.setAttribute, v663, ["editing", "on"]);
    JAM.call(midori.addEventListener, midori, [this.editObj, "mousedown", v34]);
    JAM.call(midori.addEventListener, midori, [this.editObj, "keyup", v35]);
    JAM.call(midori.addEventListener, midori, [this.editObj, "blur", v36]);
    return;
  }
  function v33(e$$22) {
    var v1068 = thisObj$$4.editObj;
    if (v1068) {
      v1068 = JAM.call(midori.getEventTarget, midori, [e$$22]) != thisObj$$4.editObj;
    }
    if (v1068) {
      thisObj$$4.save();
      JAM.call(midori.preventDefault, midori, [e$$22]);
    }
    return;
  }
  var thisObj$$4 = this;
  var v1658 = JAM.call(midori.get, midori, ["#" + vars$$8.id]);
  this.myObj = v1658;
  this.editObj = "";
  var v669;
  if (vars$$8.textArea) {
    v669 = "textarea";
  } else {
    v669 = "input";
  }
  this.input = v669;
  JAM.call(midori.addEventListener, midori, [document, "mouseup", v33]);
  this.edit = v37;
  this.select = v38;
  this.save = v39;
  return;
}
var v1071;
if (window.opera) {
  v1071 = "Opera";
} else {
  var v1330;
  if (navigator.userAgent.indexOf("WebKit") != -1) {
    v1330 = "Safari";
  } else {
    var v1468;
    if (navigator.userAgent.indexOf("MSIE") != -1) {
      v1468 = "MSIE";
    } else {
      v1468 = "Gecko";
    }
    v1330 = v1468;
  }
  v1071 = v1330;
}
var v670 = v1071;
var v1072;
if (navigator.userAgent.indexOf("Windows") != -1) {
  v1072 = "Win";
} else {
  var v1332;
  if (navigator.userAgent.indexOf("Macintosh") != -1) {
    v1332 = "Mac";
  } else {
    v1332 = "Other";
  }
  v1072 = v1332;
}
var midori = {browserType:v670, browserOS:v1072, domReady:[], each:v40, sibling:v41, parseSelectors:v42, processAttrs:v43, processPseudo:v44, getMatches:v46, get:v48, getCssRule:v49, setStyles:v50, setAttributes:v51, removeNode:v52, addEventListener:v57, runReadyEvents:v58, getEventTarget:v59, getMousePos:v60, preventBubble:v61, preventDefault:v62, getFloat:v63, setFloat:v64, getSelection:v65, getSelectionText:v66, getCookie:v67, setCookie:v68, convertToFields:v69, replace:v70, trim:v71, uniqid:v72, 
concatUnique:v73, implode:v74, inArray:v75, shortenWords:v77, resizeImg:v79, saveCheckboxState:v80, checkRequiredFields:v81, getWindowDims:v82, getPos:v83, highlightRow:v85};
var midoriFX = {intervals:{}, lastIntervalId:0, getOutsideSize:v86, showWithAnim:v87, show:v89, hideWithAnim:v90, hide:v92, scrollToWithAnim:v93, scrollTo:v95, sliderToWithAnim:v96, slider:v98};
var midoriPopup = {show:v99, hide:v100};
JAM.call(midori.addEventListener, midori, [document, "mouseup", v101]);
JAM.call(midori.addEventListener, midori, [document, "touchend", v102]);
var midoriTab = {selectedTabs:{}, select:v103, init:v107};
var midoriHistory = {history:[], modifyLocation:v108, add:v109, remove:v110, onChange:v111, init:v112};
JAM.call(midori.setCookie, midori, [1, 2, 3, 4, 5])

