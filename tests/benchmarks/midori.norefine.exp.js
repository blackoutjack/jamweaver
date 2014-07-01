function v112(callback$$28) {
  this.callback = callback$$28;
  var v667 = midori.browserType;
  var v114 = v667 == "MSIE";
  if(v114) {
    var v668 = document.body;
    var v669 = document.createElement("div");
    var v113 = JAMScript.call(v668.appendChild, v668, [v669]);
    JAMScript.set(v113, "innerHTML", '<iframe id="midori_history" style="position: absolute; width: 1px; height: 1px"></iframe>')
  }
  var v115 = this.onChange;
  JAMScript.call(setInterval, null, [v115, 250]);
  return
}
function v111() {
  var v116 = window.location;
  var newLoc = v116.toString();
  var v117;
  var v1067 = midori.browserType;
  var v672 = v1067 == "MSIE";
  if(v672) {
    var v1470 = JAMScript.call(midori.get, midori, ["#midori_history"]);
    var v1334 = v1470.contentWindow;
    var v1068 = v1334.document;
    var v670 = v1068.getElementById("me");
    v117 = v670.innerText
  }else {
    var v671;
    var v1335 = newLoc.indexOf("#");
    var v1070 = v1335 != -1;
    if(v1070) {
      var v1069 = newLoc.match(/#(.+)$/);
      v671 = v1069[1]
    }else {
      v671 = ""
    }
    v117 = v671
  }
  var item$$3 = v117;
  var v673 = midori.browserType;
  var v120 = v673 == "MSIE";
  if(v120) {
    var v1071 = midoriHistory.oldItem;
    var v674 = v1071 != item$$3;
    if(v674) {
      var v1072 = midoriHistory.history;
      v674 = JAMScript.call(midori.inArray, midori, [item$$3, v1072])
    }
    var v118 = v674;
    if(v118) {
      midoriHistory.oldItem = item$$3;
      JAMScript.call(midoriHistory.modifyLocation, midoriHistory, [item$$3]);
      JAMScript.call(midoriHistory.callback, midoriHistory, [item$$3])
    }
  }else {
    var v1073 = midoriHistory.oldLoc;
    var v675 = v1073 != newLoc;
    if(v675) {
      var v1074 = midoriHistory.history;
      v675 = JAMScript.call(midori.inArray, midori, [item$$3, v1074])
    }
    var v119 = v675;
    if(v119) {
      midoriHistory.oldLoc = newLoc;
      JAMScript.call(midoriHistory.callback, midoriHistory, [item$$3])
    }
  }
  return
}
function v110(item$$2) {
  var history = this.history;
  var i$$17 = 0;
  var len$$1 = history.length;
  var v124 = i$$17 < len$$1;
  for(;v124;) {
    var v676 = history[i$$17];
    var v123 = v676 == item$$2;
    if(v123) {
      history.splice(i$$17, 1);
      var v122 = i$$17 == len$$1;
      if(v122) {
        var v677 = history.length;
        var v121 = v677 - 1;
        this.last = history[v121]
      }
    }
    i$$17 = i$$17 + 1;
    v124 = i$$17 < len$$1
  }
  this.history = history;
  return
}
function v109(item$$1) {
  var v678 = this.last;
  var v125 = item$$1 == v678;
  if(v125) {
    return
  }
  var v126 = this.history;
  v126.push(item$$1);
  JAMScript.call(this.modifyLocation, this, [item$$1]);
  this.last = item$$1;
  var v679 = midori.browserType;
  var v129 = v679 == "MSIE";
  if(v129) {
    var v680 = JAMScript.call(midori.get, midori, ["#midori_history"]);
    var v127 = v680.contentWindow;
    var iframe = v127.document;
    iframe.open('javascript: "<html></html>"');
    var v681 = '<html><body><div id="me">' + item$$1;
    var v128 = v681 + "</div></body></html>";
    JAMScript.call(iframe.write, iframe, [v128]);
    iframe.close()
  }
  return
}
function v108(item) {
  var v130 = window.location;
  var loc = v130.toString();
  var v131 = window;
  var v682;
  var v1336 = loc.indexOf("#");
  var v1077 = v1336 == -1;
  if(v1077) {
    var v1075 = loc + "#";
    v682 = v1075 + item
  }else {
    var v1076 = "#" + item;
    v682 = JAMScript.call(loc.replace, loc, [/#.+/, v1076])
  }
  v131.location = v682;
  return
}
function v107() {
  function v106(obj$$25) {
    function v105(o$$6) {
      function v104(e$$6) {
        var me$$1 = JAMScript.call(midori.getEventTarget, midori, [e$$6]);
        me$$1.blur();
        JAMScript.call(midoriTab.select, midoriTab, [me$$1]);
        JAMScript.call(midori.preventDefault, midori, [e$$6]);
        return
      }
      var v132 = obj$$25.id;
      JAMScript.call(o$$6.setAttribute, o$$6, ["tabset", v132]);
      var v1078 = o$$6.parentNode;
      var v683 = v1078.className;
      var v135 = v683 == "tab-selected";
      if(v135) {
        var v133 = midoriTab.selectedTabs;
        var v134 = obj$$25.id;
        JAMScript.set(v133, v134, o$$6, JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
        JAMScript.call(midoriTab.select, midoriTab, [o$$6, true])
      }
      JAMScript.call(midori.addEventListener, midori, [o$$6, "click", v104]);
      return
    }
    var v1337 = obj$$25.id;
    var v1079 = "#" + v1337;
    var v684 = v1079 + " a";
    var v136 = JAMScript.call(midori.get, midori, [v684]);
    JAMScript.call(v136.apply, v136, [v105]);
    return
  }
  var v137 = JAMScript.call(midori.get, midori, [".tab-set"]);
  JAMScript.call(v137.apply, v137, [v106]);
  return
}
function v103(obj$$24, noAnim) {
  var tabSet = obj$$24.getAttribute("tabset");
  var v685 = this.selectedTabs;
  var v140 = v685[tabSet];
  if(v140) {
    var v1080 = this.selectedTabs;
    var v686 = v1080[tabSet];
    var v138 = v686.parentNode;
    v138.className = "";
    var v1606 = this.selectedTabs;
    var v1555 = v1606[tabSet];
    var v1471 = v1555.hash;
    var v1338 = v1471.substr(1);
    var v1081 = "#" + v1338;
    var v687 = JAMScript.call(midori.get, midori, [v1081]);
    var v139 = v687.style;
    v139.display = "none"
  }
  var v141 = this.selectedTabs;
  JAMScript.set(v141, tabSet, obj$$24, JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
  var v142 = obj$$24.parentNode;
  v142.className = "tab-selected";
  var v143;
  if(noAnim) {
    var v1556 = obj$$24.hash;
    var v1472 = v1556.substr(1);
    var v1339 = "#" + v1472;
    var v1082 = JAMScript.call(midori.get, midori, [v1339]);
    var v688 = v1082.style;
    v143 = v688.display = "block"
  }else {
    var v1083 = obj$$24.hash;
    var v689 = v1083.substr(1);
    v143 = JAMScript.call(midoriFX.show, midoriFX, [v689])
  }
  v143;
  return
}
function v102(e$$5) {
  JAMScript.call(midoriPopup.hide, midoriPopup, []);
  return
}
function v101(e$$4) {
  JAMScript.call(midoriPopup.hide, midoriPopup, []);
  return
}
function v100() {
  var v690 = this.activePopup;
  var v144 = v690 == null;
  if(v144) {
    return
  }
  var v145 = this.hideCallback;
  if(v145) {
    JAMScript.call(this.hideCallback, this, [this])
  }
  var v146 = this.popupId;
  JAMScript.call(midoriFX.hide, midoriFX, [v146]);
  this.activePopup = null;
  return
}
function v99(vars$$5) {
  var v1084 = vars$$5.x;
  var v691 = typeof v1084;
  var v147 = v691 == "undefined";
  if(v147) {
    vars$$5.x = 5
  }
  var v1085 = vars$$5.y;
  var v692 = typeof v1085;
  var v148 = v692 == "undefined";
  if(v148) {
    vars$$5.y = -5
  }
  this.popupId = vars$$5.popupId;
  var v693 = vars$$5.popupId;
  var v149 = "#" + v693;
  var popup = JAMScript.call(midori.get, midori, [v149]);
  var dims$$1 = JAMScript.call(midori.getWindowDims, midori, []);
  var v150;
  var v696 = vars$$5.showAtMousePos;
  if(v696) {
    var v694 = vars$$5.event;
    v150 = JAMScript.call(midori.getMousePos, midori, [v694])
  }else {
    var v695 = vars$$5.obj;
    v150 = JAMScript.call(midori.getPos, midori, [v695])
  }
  var popupPos = v150;
  var v151 = popup.style;
  v151.display = "block";
  var v153 = this.activePopup;
  if(v153) {
    var v697 = this.activePopup;
    var v152 = v697.style;
    v152.display = "none"
  }
  var v154 = vars$$5.obj;
  v154.blur();
  var v698 = dims$$1.windowWidth;
  var v1340 = popupPos.x;
  var v1341 = popup.offsetWidth;
  var v1086 = v1340 + v1341;
  var v1087 = vars$$5.x;
  var v699 = v1086 + v1087;
  var v155 = v698 < v699;
  if(v155) {
    var v700 = popupPos;
    var v1088 = popupPos.x;
    var v1089 = popup.offsetWidth;
    v700.x = v1088 - v1089
  }
  var v1473 = popupPos.y;
  var v1474 = popup.offsetHeight;
  var v1342 = v1473 + v1474;
  var v1343 = vars$$5.y;
  var v1090 = v1342 + v1343;
  var v1091 = dims$$1.scrollTop;
  var v701 = v1090 - v1091;
  var v702 = dims$$1.windowHeight;
  var v156 = v701 > v702;
  for(;v156;) {
    var v703 = popupPos;
    var v1092 = popupPos.y;
    var v1344 = popup.offsetHeight;
    var v1093 = v1344 + 20;
    v703.y = v1092 - v1093;
    var v1475 = popupPos.y;
    var v1476 = popup.offsetHeight;
    var v1345 = v1475 + v1476;
    var v1346 = vars$$5.y;
    var v1094 = v1345 + v1346;
    var v1095 = dims$$1.scrollTop;
    var v704 = v1094 - v1095;
    var v705 = dims$$1.windowHeight;
    v156 = v704 > v705
  }
  var v1347 = popupPos.x;
  var v1348 = vars$$5.x;
  var v1096 = v1347 + v1348;
  var v706 = v1096 + "px";
  var v1477 = popupPos.y;
  var v1478 = vars$$5.y;
  var v1349 = v1477 + v1478;
  var v1479 = vars$$5.obj;
  var v1350 = v1479.offsetHeight;
  var v1097 = v1349 + v1350;
  var v707 = v1097 + "px";
  var v157 = {left:v706, top:v707};
  JAMScript.call(midori.setStyles, midori, [popup, v157]);
  this.activePopup = popup;
  var v158;
  var v710 = vars$$5.noAnim;
  if(v710) {
    var v708 = popup.style;
    v158 = v708.display = "block"
  }else {
    var v709 = this.popupId;
    v158 = JAMScript.call(midoriFX.show, midoriFX, [v709])
  }
  v158;
  var v160 = vars$$5.event;
  if(v160) {
    var v159 = vars$$5.event;
    JAMScript.call(midori.preventDefault, midori, [v159])
  }
  var v161 = vars$$5.showCallback;
  if(v161) {
    JAMScript.call(vars$$5.showCallback, vars$$5, [this])
  }
  var v162;
  var v711 = vars$$5.hideCallback;
  if(v711) {
    v162 = vars$$5.hideCallback
  }else {
    v162 = false
  }
  this.hideCallback = v162;
  return
}
function v98(containerId, targetId, correction$$1) {
  function v97() {
    JAMScript.call(midoriFX.sliderToWithAnim, midoriFX, [intervalKey$$3, container$$1, targetPos$$3]);
    return
  }
  var v163 = "#" + containerId;
  var container$$1 = JAMScript.call(midori.get, midori, [v163]);
  var v1098 = "#" + targetId;
  var v712 = JAMScript.call(midori.get, midori, [v1098]);
  var v164 = JAMScript.call(midori.getPos, midori, [v712, container$$1]);
  var targetPos$$3 = v164.x;
  var v165;
  var v1099 = container$$1.style;
  var v714 = v1099.marginLeft;
  if(v714) {
    var v1351 = container$$1.style;
    var v1100 = v1351.marginLeft;
    var v713 = parseInt(v1100, 10);
    v165 = Math.abs(v713)
  }else {
    v165 = 0
  }
  var currentPos = v165;
  var intervalKey$$3 = Math.random();
  var v167 = this.lastIntervalId;
  if(v167) {
    var v166 = this.lastIntervalId;
    clearInterval(v166)
  }
  var v168 = this.intervals;
  var v169 = intervalKey$$3;
  var v1101;
  var v1352 = currentPos > targetPos$$3;
  if(v1352) {
    v1101 = -1
  }else {
    v1101 = 1
  }
  var v715 = v1101;
  var v716 = JAMScript.call(setInterval, null, [v97, 15]);
  v168[v169] = {targetPos:currentPos, direction:v715, intervalId:v716};
  var v717 = this.intervals;
  var v170 = v717[intervalKey$$3];
  this.lastIntervalId = v170.intervalId;
  return
}
function v96(intervalKey$$2, container, targetPos$$2) {
  var v171 = this.intervals;
  var data$$18 = v171[intervalKey$$2];
  var v718 = data$$18.targetPos;
  var v172 = targetPos$$2 - v718;
  var diff = Math.abs(v172);
  var v173 = data$$18;
  var v1102 = v173.targetPos;
  var v1480 = diff / 8;
  var v1353 = Math.round(v1480);
  var v1354 = data$$18.direction;
  var v1103 = v1353 * v1354;
  v173.targetPos = v1102 + v1103;
  var v174 = container.style;
  var v1104 = data$$18.targetPos;
  var v719 = -v1104;
  v174.marginLeft = v719 + "px";
  var v176 = diff < 4;
  if(v176) {
    var v175 = data$$18.intervalId;
    clearInterval(v175)
  }
  return
}
function v95(id$$2, correction) {
  function v94() {
    JAMScript.call(midoriFX.scrollToWithAnim, midoriFX, [intervalKey$$1, targetPos$$1]);
    return
  }
  var v1355 = "#" + id$$2;
  var v1105 = JAMScript.call(midori.get, midori, [v1355]);
  var v720 = JAMScript.call(midori.getPos, midori, [v1105]);
  var v177 = v720.y;
  var v721;
  if(correction) {
    v721 = correction
  }else {
    v721 = 0
  }
  var v178 = v721;
  var targetPos$$1 = v177 + v178;
  var intervalKey$$1 = Math.random();
  var dims = JAMScript.call(midori.getWindowDims, midori, []);
  var v179 = this.intervals;
  var v180 = intervalKey$$1;
  var v722 = dims.scrollTop;
  var v723 = JAMScript.call(setInterval, null, [v94, 15]);
  v179[v180] = {scrollPos:v722, intervalId:v723};
  return
}
function v93(intervalKey, targetPos) {
  var v1557 = this.intervals;
  var v1481 = v1557[intervalKey];
  var v1356 = v1481.scrollPos;
  var v1106 = targetPos - v1356;
  var v724 = Math.abs(v1106);
  var v184 = v724 > 10;
  if(v184) {
    var v725 = this.intervals;
    var v181 = v725[intervalKey];
    var v1107 = v181.scrollPos;
    var v1626 = this.intervals;
    var v1607 = v1626[intervalKey];
    var v1558 = v1607.scrollPos;
    var v1482 = targetPos - v1558;
    var v1357 = v1482 / 8;
    var v1108 = Math.round(v1357);
    v181.scrollPos = v1107 + v1108;
    var v1109 = this.intervals;
    var v726 = v1109[intervalKey];
    var v182 = v726.scrollPos;
    JAMScript.call(scrollTo, null, [0, v182])
  }else {
    var v1110 = this.intervals;
    var v727 = v1110[intervalKey];
    var v183 = v727.intervalId;
    clearInterval(v183)
  }
  return
}
function v92(id$$1, callback$$27, constantSpeed, horiz$$1) {
  function v91() {
    JAMScript.call(midoriFX.hideWithAnim, midoriFX, [vars$$4]);
    return
  }
  var v185;
  if(horiz$$1) {
    v185 = "width"
  }else {
    v185 = "height"
  }
  var what$$2 = v185;
  var v186 = "#" + id$$1;
  var element$$6 = JAMScript.call(midori.get, midori, [v186]);
  var outsideSize$$1 = JAMScript.call(this.getOutsideSize, this, [element$$6, what$$2]);
  var v187 = Math.random();
  var v1111;
  if(horiz$$1) {
    v1111 = element$$6.offsetWidth
  }else {
    v1111 = element$$6.offsetHeight
  }
  var v728 = v1111;
  var v188 = v728 - outsideSize$$1;
  var vars$$4 = {intervalKey:v187, element:element$$6, outsideSize:outsideSize$$1, elementSize:v188, callback:callback$$27, constantSpeed:constantSpeed, what:what$$2};
  var v189 = element$$6.style;
  v189.overflow = "hidden";
  var v190 = this.intervals;
  var v191 = vars$$4.intervalKey;
  var v729 = JAMScript.call(setInterval, null, [v91, 40]);
  v190[v191] = {intervalId:v729};
  return
}
function v90(vars$$3) {
  var v730;
  var v1358 = vars$$3.what;
  var v1114 = v1358 == "width";
  if(v1114) {
    var v1112 = vars$$3.element;
    v730 = v1112.offsetWidth
  }else {
    var v1113 = vars$$3.element;
    v730 = v1113.offsetHeight
  }
  var v192 = v730;
  var v193 = vars$$3.outsideSize;
  var oldSize = v192 - v193;
  var v194;
  var v733 = vars$$3.constantSpeed;
  if(v733) {
    var v731 = vars$$3.oldSize;
    v194 = v731 - 4
  }else {
    var v732 = oldSize / 1.5;
    v194 = Math.round(v732)
  }
  var newSize = v194;
  var v205 = newSize > 2;
  if(v205) {
    var v734 = vars$$3.element;
    var v195 = v734.style;
    var v196 = vars$$3.what;
    var v735 = newSize.toString();
    JAMScript.set(v195, v196, v735 + "px", JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
    var v736 = vars$$3.element;
    var v197 = v736.style;
    v197.opacity = newSize / 50
  }else {
    var v1115 = this.intervals;
    var v1116 = vars$$3.intervalKey;
    var v737 = v1115[v1116];
    var v198 = v737.intervalId;
    clearInterval(v198);
    var v738 = vars$$3.element;
    var v199 = v738.style;
    v199.display = "none";
    var v739 = vars$$3.element;
    var v200 = v739.style;
    var v201 = vars$$3.what;
    var v1117 = vars$$3.elementSize;
    var v740 = v1117.toString();
    JAMScript.set(v200, v201, v740 + "px", JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
    var v741 = vars$$3.element;
    var v202 = v741.style;
    v202.opacity = 1;
    var v204 = vars$$3.callback;
    if(v204) {
      var v203 = vars$$3.element;
      JAMScript.call(vars$$3.callback, vars$$3, [v203])
    }
  }
  return
}
function v89(id, callback$$26, horiz) {
  function v88() {
    JAMScript.call(midoriFX.showWithAnim, midoriFX, [vars$$2]);
    return
  }
  var v206;
  if(horiz) {
    v206 = "width"
  }else {
    v206 = "height"
  }
  var what$$1 = v206;
  var v207 = "#" + id;
  var element$$5 = JAMScript.call(midori.get, midori, [v207]);
  var v208 = Math.random();
  var vars$$2 = {intervalKey:v208, element:element$$5, callback:callback$$26, what:what$$1};
  var v209 = {overflow:"hidden", visibility:"hidden", display:"block"};
  JAMScript.call(midori.setStyles, midori, [element$$5, v209]);
  var v742 = vars$$2;
  var v1359;
  if(horiz) {
    v1359 = element$$5.offsetWidth
  }else {
    v1359 = element$$5.offsetHeight
  }
  var v1118 = v1359;
  var v1119 = JAMScript.call(this.getOutsideSize, this, [element$$5, what$$1]);
  v742.elementSize = v1118 - v1119;
  var v743 = {display:"none", visibility:"visible"};
  JAMScript.call(midori.setStyles, midori, [element$$5, v743]);
  var v210 = this.intervals;
  var v211 = vars$$2.intervalKey;
  var v744 = JAMScript.call(setInterval, null, [v88, 40]);
  v210[v211] = {newSize:0, intervalId:v744};
  return
}
function v87(vars$$1) {
  var v212;
  var v1360 = this.intervals;
  var v1361 = vars$$1.intervalKey;
  var v1120 = v1360[v1361];
  var v745 = v1120.newSize;
  if(v745) {
    v212 = false
  }else {
    v212 = true
  }
  var firstRun = v212;
  var v746 = this.intervals;
  var v747 = vars$$1.intervalKey;
  var v213 = v746[v747];
  var v1121 = v213.newSize;
  var v1559 = vars$$1.elementSize;
  var v1627 = this.intervals;
  var v1628 = vars$$1.intervalKey;
  var v1608 = v1627[v1628];
  var v1560 = v1608.newSize;
  var v1483 = v1559 - v1560;
  var v1362 = v1483 / 2;
  var v1122 = Math.round(v1362);
  v213.newSize = v1121 + v1122;
  var v1363 = this.intervals;
  var v1364 = vars$$1.intervalKey;
  var v1123 = v1363[v1364];
  var v748 = v1123.newSize;
  var v749 = vars$$1.elementSize;
  var v222 = v748 < v749;
  if(v222) {
    var v750 = vars$$1.element;
    var v214 = v750.style;
    var v215 = vars$$1.what;
    var v1484 = this.intervals;
    var v1485 = vars$$1.intervalKey;
    var v1365 = v1484[v1485];
    var v1124 = v1365.newSize;
    var v751 = v1124.toString();
    JAMScript.set(v214, v215, v751 + "px", JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811)
  }else {
    var v1125 = this.intervals;
    var v1126 = vars$$1.intervalKey;
    var v752 = v1125[v1126];
    var v216 = v752.intervalId;
    clearInterval(v216);
    var v753 = vars$$1.element;
    var v217 = v753.style;
    var v218 = vars$$1.what;
    var v1127 = vars$$1.elementSize;
    var v754 = v1127.toString();
    JAMScript.set(v217, v218, v754 + "px", JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
    var v755 = vars$$1.element;
    var v219 = v755.style;
    v219.overflow = "visible";
    var v221 = vars$$1.callback;
    if(v221) {
      var v220 = vars$$1.element;
      JAMScript.call(vars$$1.callback, vars$$1, [v220])
    }
  }
  if(firstRun) {
    var v756 = vars$$1.element;
    var v223 = v756.style;
    v223.display = "block"
  }
  return
}
function v86(element$$4, what) {
  var v224;
  var v757 = what == "width";
  if(v757) {
    v224 = element$$4.offsetWidth
  }else {
    v224 = element$$4.offsetHeight
  }
  var offsetSize = v224;
  var v225 = element$$4.style;
  var v226 = what;
  var v758 = offsetSize.toString();
  JAMScript.set(v225, v226, v758 + "px", JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
  var v759;
  var v1128 = what == "width";
  if(v1128) {
    v759 = element$$4.offsetWidth
  }else {
    v759 = element$$4.offsetHeight
  }
  var v227 = v759;
  var outsideSize = v227 - offsetSize;
  var v228 = element$$4.style;
  var v229 = what;
  var v1129 = offsetSize - outsideSize;
  var v760 = v1129.toString();
  JAMScript.set(v228, v229, v760 + "px", JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
  return outsideSize
}
function v85(obj$$23, highlightClass, removeAll) {
  function v84(o$$5) {
    var v230 = o$$5.className;
    var className$$1 = v230.split(" ");
    var v231 = o$$5;
    var v761;
    var v1561 = className$$1.length;
    var v1486 = v1561 - 1;
    var v1366 = className$$1[v1486];
    var v1133 = v1366 == highlightClass;
    if(v1133) {
      var v1130 = o$$5.className;
      var v1562 = o$$5.className;
      var v1487 = v1562.length;
      var v1488 = highlightClass.length;
      var v1367 = v1487 - v1488;
      var v1131 = v1367 - 1;
      v761 = v1130.substr(0, v1131)
    }else {
      var v1132;
      if(removeAll) {
        v1132 = o$$5.className
      }else {
        var v1489 = o$$5.className;
        var v1368 = v1489 + " ";
        v1132 = v1368 + highlightClass
      }
      v761 = v1132
    }
    v231.className = v761;
    return
  }
  var v232 = JAMScript.call(this.get, this, ["td", obj$$23]);
  JAMScript.call(v232.apply, v232, [v84]);
  return
}
function v83(obj$$22, stopAt) {
  var xPos = 0;
  var yPos = 0;
  var v233;
  if(stopAt) {
    v233 = stopAt.offsetParent
  }else {
    v233 = null
  }
  stopAt = v233;
  var v762 = obj$$22.offsetParent;
  var v234 = v762 != stopAt;
  for(;v234;) {
    var v1369 = obj$$22.offsetLeft;
    xPos = xPos + v1369;
    var v1490 = obj$$22.offsetTop;
    var v1491 = obj$$22.scrollTop;
    var v1370 = v1490 - v1491;
    yPos = yPos + v1370;
    obj$$22 = obj$$22.offsetParent;
    var v763 = obj$$22.offsetParent;
    v234 = v763 != stopAt
  }
  return{x:xPos, y:yPos}
}
function v82() {
  var v764 = this.browserType;
  var v241 = v764 == "MSIE";
  if(v241) {
    var v765 = document.documentElement;
    var v235 = v765.clientWidth;
    var v766 = document.documentElement;
    var v236 = v766.clientHeight;
    var v767 = document.documentElement;
    var v237 = v767.scrollTop;
    return{windowWidth:v235, windowHeight:v236, scrollTop:v237}
  }else {
    var v238 = window.innerWidth;
    var v239 = window.innerHeight;
    var v240 = window.scrollY;
    return{windowWidth:v238, windowHeight:v239, scrollTop:v240}
  }
  return
}
function v81(vars) {
  var v242 = vars;
  var v768 = vars.required;
  var v1642 = v768.split(",");
  v242.required = v1642;
  var v769 = vars.formId;
  var v243 = "#" + v769;
  var form = JAMScript.call(this.get, this, [v243]);
  var stopSubmit = false;
  var fieldName;
  var field;
  var fieldType;
  var fieldStyle;
  var i$$16 = 0;
  var v244 = vars.required;
  var numFields = v244.length;
  var v250 = i$$16 < numFields;
  for(;v250;) {
    var v1134 = vars.required;
    var v770 = v1134[i$$16];
    var v249 = fieldName = JAMScript.call(this.trim, this, [v770]);
    if(v249) {
      var v245 = "#" + fieldName;
      field = JAMScript.call(this.get, this, [v245]);
      var v246;
      var v1371 = field.type;
      var v1135 = v1371.toLowerCase();
      var v771 = v1135 == "checkbox";
      if(v771) {
        v246 = "c"
      }else {
        v246 = "t"
      }
      fieldType = v246;
      var v247;
      var v773 = fieldType == "c";
      if(v773) {
        var v772 = field.parentNode;
        v247 = v772.style
      }else {
        v247 = field.style
      }
      fieldStyle = v247;
      fieldStyle.backgroundColor = "";
      var v1136 = fieldType == "c";
      if(v1136) {
        var v1372 = field.checked;
        v1136 = !v1372
      }
      var v774 = v1136;
      var v1138 = !v774;
      if(v1138) {
        var v1373 = field.value;
        var v1137 = JAMScript.call(this.trim, this, [v1373]);
        v774 = v1137 == ""
      }
      var v248 = v774;
      if(v248) {
        fieldStyle.backgroundColor = "#FAA";
        stopSubmit = true
      }
    }
    i$$16 = i$$16 + 1;
    v250 = i$$16 < numFields
  }
  var v1374 = vars.formId;
  var v1139 = "#" + v1374;
  var v775 = v1139 + "-status";
  var v251 = JAMScript.call(this.get, this, [v775]);
  var v776;
  if(stopSubmit) {
    v776 = vars.message
  }else {
    v776 = ""
  }
  JAMScript.set(v251, "innerHTML", v776);
  var v252;
  var v777 = vars.callback;
  if(v777) {
    v252 = JAMScript.call(vars.callback, vars, [])
  }else {
    v252 = ""
  }
  var callbackResult = v252;
  var v778 = callbackResult === false;
  var v1140 = !v778;
  if(v1140) {
    v778 = stopSubmit
  }
  var v256 = v778;
  if(v256) {
    var v254 = vars.event;
    if(v254) {
      var v253 = vars.event;
      JAMScript.call(this.preventDefault, this, [v253])
    }
    return false
  }else {
    var v779 = vars.event;
    var v255 = !v779;
    if(v255) {
      form.submit()
    }
  }
  return
}
function v80(element$$3, cb, callback$$25) {
  var v257;
  var v781 = cb.checked;
  if(v781) {
    v257 = element$$3.innerHTML;
    var v1141 = element$$3;
    var v1375 = element$$3.innerHTML;
    JAMScript.set(v1141, "innerHTML", v1375 + 1)
  }else {
    var v780;
    var v1563 = element$$3;
    var v1609 = element$$3.innerHTML;
    var v1376 = JAMScript.set(v1563, "innerHTML", v1609 - 1);
    var v1142 = v1376 == 0;
    if(v1142) {
      v780 = JAMScript.set(element$$3, "innerHTML", "")
    }else {
      v780 = {}
    }
    v257 = v780
  }
  v257;
  if(callback$$25) {
    var v258 = element$$3.innerHTML;
    JAMScript.call(callback$$25, null, [v258])
  }
  return
}
function v79(obj$$21, maxWidth) {
  function v78(o$$4) {
    var v782 = o$$4.width;
    var v261 = v782 > maxWidth;
    if(v261) {
      var v783 = o$$4.style;
      var v260 = v783.msInterpolationMode;
      if(v260) {
        var v259 = o$$4.style;
        v259.msInterpolationMode = "bicubic"
      }
      o$$4.width = maxWidth
    }
    return
  }
  var v262;
  if(maxWidth) {
    v262 = maxWidth
  }else {
    v262 = 400
  }
  maxWidth = v262;
  var v263 = JAMScript.call(this.get, this, ["img", obj$$21]);
  JAMScript.call(v263.apply, v263, [v78]);
  return
}
function v77(obj$$20, maxLen) {
  function v76(o$$3) {
    var v784 = o$$3.nodeType;
    var v264 = v784 != 3;
    if(v264) {
      return
    }
    var v265 = o$$3.data;
    var chunks$$1 = v265.split(" ");
    var shortened = false;
    var stlen;
    var i$$15 = 0;
    var numChunks = chunks$$1.length;
    var v271 = i$$15 < numChunks;
    for(;v271;) {
      var v1143 = chunks$$1[i$$15];
      var v785 = stLen = v1143.length;
      var v270 = v785 > maxLen;
      if(v270) {
        var v266 = stLen - maxLen;
        var diffLen = Math.floor(v266);
        var v786 = stLen / 2;
        var v787 = diffLen / 2;
        var v267 = v786 - v787;
        var startPos = Math.floor(v267);
        var v268 = chunks$$1;
        var v269 = i$$15;
        var v1377 = chunks$$1[i$$15];
        var v1144 = v1377.substr(0, startPos);
        var v788 = v1144 + "...";
        var v1145 = chunks$$1[i$$15];
        var v1146 = startPos + diffLen;
        var v789 = v1145.substr(v1146);
        v268[v269] = v788 + v789;
        shortened = true
      }
      i$$15 = i$$15 + 1;
      v271 = i$$15 < numChunks
    }
    if(shortened) {
      var v272 = o$$3;
      var v1643 = JAMScript.call(midori.implode, midori, [" ", chunks$$1]);
      v272.data = v1643
    }
    return
  }
  var v273;
  if(maxLen) {
    v273 = maxLen - 3
  }else {
    v273 = 45
  }
  maxLen = v273;
  JAMScript.call(this.each, this, [obj$$20, v76]);
  return
}
function v75(v$$2, a$$4) {
  var i$$14 = 0;
  var numA$$3 = a$$4.length;
  var v275 = i$$14 < numA$$3;
  for(;v275;) {
    var v1147 = v$$2 != null;
    if(v1147) {
      var v1564 = a$$4[i$$14];
      var v1492 = v1564.constructor;
      var v1378 = v1492 == Array;
      if(v1378) {
        var v1565 = v$$2.constructor;
        var v1493 = v1565 == Array;
        if(v1493) {
          var v1610 = a$$4[i$$14];
          var v1566 = v1610.toString();
          var v1567 = v$$2.toString();
          v1493 = v1566 == v1567
        }
        v1378 = v1493
      }
      v1147 = v1378
    }
    var v790 = v1147;
    var v1149 = !v790;
    if(v1149) {
      var v1148 = a$$4[i$$14];
      v790 = v1148 == v$$2
    }
    var v274 = v790;
    if(v274) {
      return true
    }
    i$$14 = i$$14 + 1;
    v275 = i$$14 < numA$$3
  }
  return
}
function v74(glue, a$$3) {
  var v791 = typeof a$$3;
  var v276 = v791 != "object";
  if(v276) {
    return a$$3
  }
  var o$$2 = "";
  var v792 = a$$3.length;
  if(v792) {
    var v1150 = a$$3.propertyIsEnumerable("length");
    v792 = !v1150
  }
  var v278 = v792;
  if(v278) {
    var i$$13 = 0;
    var numA$$2 = a$$3.length;
    var v277 = i$$13 < numA$$2;
    for(;v277;) {
      var v1151 = a$$3[i$$13];
      var v793 = glue + v1151;
      o$$2 = o$$2 + v793;
      i$$13 = i$$13 + 1;
      v277 = i$$13 < numA$$2
    }
  }else {
    var k$$1;
    for(k$$1 in a$$3) {
      var v1152 = a$$3[k$$1];
      var v794 = glue + v1152;
      o$$2 = o$$2 + v794
    }
  }
  var v279 = glue.length;
  return o$$2.substr(v279)
}
function v73(a1, a2) {
  var uniqA2 = [];
  var i$$12 = 0;
  var numA2 = a2.length;
  var v282 = i$$12 < numA2;
  for(;v282;) {
    var v1153 = a2[i$$12];
    var v795 = JAMScript.call(this.inArray, this, [v1153, a1]);
    var v281 = !v795;
    if(v281) {
      var v280 = a2[i$$12];
      uniqA2.push(v280)
    }
    i$$12 = i$$12 + 1;
    v282 = i$$12 < numA2
  }
  return a1.concat(uniqA2)
}
function v72(range$$5) {
  var v796 = Math.random();
  var v1154;
  if(range$$5) {
    v1154 = range$$5
  }else {
    v1154 = 1E5
  }
  var v797 = v1154;
  var v283 = v796 * v797;
  return Math.floor(v283)
}
function v71(st$$1) {
  return JAMScript.call(st$$1.replace, st$$1, [/^\s+|\s+$/g, ""])
}
function v70(st, params) {
  var v284 = !params;
  if(v284) {
    return st
  }
  var v798 = st.match(/:[A-Za-z0-9_]+/g);
  var v285 = v798.sort();
  var matches$$1 = v285.reverse();
  var i$$11 = 0;
  var numMatches = matches$$1.length;
  var v288 = i$$11 < numMatches;
  for(;v288;) {
    var v286 = matches$$1[i$$11];
    var v1155 = matches$$1[i$$11];
    var v799 = v1155.substr(1);
    var v287 = params[v799];
    st = JAMScript.call(st.replace, st, [v286, v287]);
    i$$11 = i$$11 + 1;
    v288 = i$$11 < numMatches
  }
  return st
}
function v69(parentNode$$1, prefix$$2, a$$2) {
  var k;
  for(k in a$$2) {
    var v1156 = a$$2[k];
    var v800 = typeof v1156;
    var v292 = v800 == "object";
    if(v292) {
      var v1157 = prefix$$2 + "[";
      var v801 = v1157 + k;
      var v289 = v801 + "]";
      var v290 = a$$2[k];
      JAMScript.call(this.convertToFields, this, [parentNode$$1, v289, v290])
    }else {
      var el = document.createElement("input");
      var v1379 = prefix$$2 + "[";
      var v1158 = v1379 + k;
      var v802 = v1158 + "]";
      var v803 = a$$2[k];
      var v291 = {type:"hidden", name:v802, value:v803};
      JAMScript.call(this.setAttributes, this, [el, v291]);
      JAMScript.call(parentNode$$1.appendChild, parentNode$$1, [el])
    }
  }
  return
}
function v68(name$$31, value$$30, expires, path, domain) {
  introspect(JAMScript.introspectors.process3F9F399AB000376076BBFF3A9A9C0103B23A9835) {
    setCookieSentinel = true
  }
  var today = new Date;
  var v293 = document;
  var v1568 = name$$31 + "=";
  var v1569 = escape(value$$30);
  var v1494 = v1568 + v1569;
  var v1380 = v1494 + "; expires=";
  var v1495 = today.setSeconds(expires);
  var v1381 = today.toUTCString(v1495);
  var v1159 = v1380 + v1381;
  var v1382;
  if(path) {
    v1382 = "; path=" + path
  }else {
    v1382 = ""
  }
  var v1160 = v1382;
  var v804 = v1159 + v1160;
  var v1161;
  if(domain) {
    v1161 = "; domain=" + domain
  }else {
    v1161 = ""
  }
  var v805 = v1161;
  introspect(JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811) {
    v293.cookie = v804 + v805
  }
  return
}
function v67(cookieName) {
  var v294 = document.cookie;
  var cookies = v294.split("; ");
  var i$$10 = 0;
  var numCookies = cookies.length;
  var v298 = i$$10 < numCookies;
  for(;v298;) {
    var v295 = cookies[i$$10];
    var parts = v295.split("=");
    var v806 = parts[0];
    var v297 = v806 == cookieName;
    if(v297) {
      var v807 = parts[1];
      var v296 = JAMScript.call(v807.replace, v807, [/\+/g, " "]);
      return unescape(v296)
    }
    i$$10 = i$$10 + 1;
    v298 = i$$10 < numCookies
  }
  return
}
function v66(cursorPos$$1) {
  var v299;
  var v1162 = this.browserType;
  var v808 = v1162 == "MSIE";
  if(v808) {
    v299 = cursorPos$$1.htmlText
  }else {
    v299 = cursorPos$$1.toString()
  }
  return v299
}
function v65(target$$40) {
  var v809 = this.browserType;
  var v300 = v809 != "MSIE";
  if(v300) {
    return JAMScript.call(target$$40.getSelection, target$$40, [])
  }
  var v301 = target$$40 == window;
  if(v301) {
    target$$40 = document
  }
  var v302 = target$$40.selection;
  var cursorPos = v302.createRange();
  var v1163 = target$$40.selection;
  var v810 = v1163.type;
  var v303 = v810 != "Control";
  if(v303) {
    return cursorPos
  }
  return
}
function v64(o$$1, v$$1) {
  var v304;
  var v1164 = this.browserType;
  var v813 = v1164 == "MSIE";
  if(v813) {
    var v811 = o$$1.style;
    v304 = v811.styleFloat = v$$1
  }else {
    var v812 = o$$1.style;
    v304 = v812.cssFloat = v$$1
  }
  v304;
  return
}
function v63(o) {
  var v305;
  var v1165 = this.browserType;
  var v816 = v1165 == "MSIE";
  if(v816) {
    var v814 = o.style;
    v305 = v814.styleFloat
  }else {
    var v815 = o.style;
    v305 = v815.cssFloat
  }
  return v305
}
function v62(event$$4) {
  var v306;
  var v818 = event$$4.preventDefault;
  if(v818) {
    v306 = JAMScript.call(event$$4.preventDefault, event$$4, [])
  }else {
    var v817 = window.event;
    v306 = v817.returnValue = false
  }
  v306;
  return
}
function v61(event$$3) {
  var v307;
  var v820 = event$$3.stopPropagation;
  if(v820) {
    v307 = event$$3.stopPropagation()
  }else {
    var v819 = window.event;
    v307 = v819.cancelBubble = true
  }
  v307;
  return
}
function v60(event$$2) {
  var v821 = event$$2.targetTouches;
  if(v821) {
    var v1166 = event$$2.targetTouches;
    v821 = v1166.length
  }
  var v315 = v821;
  if(v315) {
    var v1167 = event$$2.targetTouches;
    var v822 = v1167[0];
    var v308 = v822.pageX;
    var v1168 = event$$2.targetTouches;
    var v823 = v1168[0];
    var v309 = v823.pageY;
    return{x:v308, y:v309}
  }else {
    var v824 = event$$2.pageX;
    var v1169 = !v824;
    if(v1169) {
      v824 = event$$2.pageY
    }
    var v314 = v824;
    if(v314) {
      var v310 = event$$2.pageX;
      var v311 = event$$2.pageY;
      return{x:v310, y:v311}
    }else {
      var v1170 = event$$2.clientX;
      var v1383 = document.documentElement;
      var v1171 = v1383.scrollLeft;
      var v825 = v1170 + v1171;
      var v1172 = document.body;
      var v826 = v1172.clientLeft;
      var v312 = v825 - v826;
      var v1173 = event$$2.clientY;
      var v1384 = document.documentElement;
      var v1174 = v1384.scrollTop;
      var v827 = v1173 + v1174;
      var v1175 = document.body;
      var v828 = v1175.clientTop;
      var v313 = v827 - v828;
      return{x:v312, y:v313}
    }
  }
  return
}
function v59(event$$1) {
  var v316;
  var v829 = event$$1.target;
  if(v829) {
    v316 = event$$1.target
  }else {
    v316 = event$$1.srcElement
  }
  var target$$39 = v316;
  var v830 = target$$39.nodeType;
  var v317 = v830 == 3;
  if(v317) {
    target$$39 = target$$39.parentNode
  }
  return target$$39
}
function v58() {
  var v319 = this.readyTimer;
  if(v319) {
    var v318 = this.readyTimer;
    clearInterval(v318)
  }
  var i$$9 = 0;
  var v320 = this.domReady;
  var numE = v320.length;
  var v322 = i$$9 < numE;
  for(;v322;) {
    var v321 = this.domReady;
    JAMScript.call(v321[i$$9], v321, []);
    i$$9 = i$$9 + 1;
    v322 = i$$9 < numE
  }
  return
}
function v57(target$$38, eventType$$2, listenerFunc) {
  function v56() {
    function v55() {
      var v831 = this.readyState;
      var v323 = v831 == "complete";
      if(v323) {
        JAMScript.call(midori.runReadyEvents, midori, [])
      }
      return
    }
    JAMScript.call(document.write, document, ['<script id="midori_onload" src="javascript: {}" defer="true">\x3c/script>']);
    var v324 = JAMScript.call(this.get, this, ["#midori_onload"]);
    JAMScript.set(v324, "onreadystatechange", v55);
    return
  }
  function v54() {
    function v53() {
      var v832 = document.readyState;
      var v325 = /loaded|complete/.test(v832);
      if(v325) {
        JAMScript.call(midori.runReadyEvents, midori, [])
      }
      return
    }
    var v1644 = JAMScript.call(setInterval, null, [v53, 10]);
    this.readyTimer = v1644;
    return
  }
  this.safariReady = v54;
  this.msieReady = v56;
  var v330 = target$$38.addEventListener;
  if(v330) {
    var v329 = eventType$$2 == "ready";
    if(v329) {
      var v328 = this.browserType;
      switch(v328) {
        case "Safari":
          var v326 = this.domReady;
          v326.push(listenerFunc);
          var v833 = this.readyTimer;
          var v327 = !v833;
          if(v327) {
            JAMScript.call(this.safariReady, this, [])
          }
          return;
        case "Opera":
        ;
        case "Gecko":
          eventType$$2 = "DOMContentLoaded";
          break;
        default:
          eventType$$2 = "load"
      }
    }
    JAMScript.call(target$$38.addEventListener, target$$38, [eventType$$2, listenerFunc, false]);
    return
  }
  var v333 = eventType$$2 == "ready";
  if(v333) {
    var v1176 = this.domReady;
    var v834 = v1176.length;
    var v331 = !v834;
    if(v331) {
      JAMScript.call(this.msieReady, this, [])
    }
    var v332 = this.domReady;
    v332.push(listenerFunc);
    return
  }
  var v334 = "on" + eventType$$2;
  JAMScript.call(target$$38.attachEvent, target$$38, [v334, listenerFunc]);
  return
}
function v52(obj$$19) {
  var v335 = obj$$19.parentNode;
  return v335.removeChild(obj$$19)
}
function v51(obj$$18, attrList) {
  var i$$8;
  for(i$$8 in attrList) {
    var v336;
    var v836 = i$$8 == "className";
    if(v836) {
      v336 = obj$$18.className = attrList[i$$8]
    }else {
      var v835 = attrList[i$$8];
      v336 = JAMScript.call(obj$$18.setAttribute, obj$$18, [i$$8, v835])
    }
    v336
  }
  return
}
function v50(obj$$17, styleList) {
  var i$$7;
  for(i$$7 in styleList) {
    var v337;
    var v840 = i$$7 == "float";
    if(v840) {
      var v837 = styleList[i$$7];
      v337 = JAMScript.call(this.setFloat, this, [obj$$17, v837])
    }else {
      var v838 = obj$$17.style;
      var v839 = i$$7;
      var v1661 = JAMScript.set(v838, v839, styleList[i$$7], JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
      introspect(JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811) {
        v337 = v1661
      }
    }
    v337
  }
  return
}
function v49(stylesheet, rule$$2, property$$3) {
  var values$$4 = [];
  var v338 = document.styleSheets;
  var rules = v338[stylesheet];
  var v339;
  var v841 = rules.rules;
  if(v841) {
    v339 = rules.rules
  }else {
    v339 = rules.cssRules
  }
  rules = v339;
  rule$$2 = rule$$2.toLowerCase();
  var v340;
  var v1177 = this.browserType;
  var v843 = v1177 == "Safari";
  if(v843) {
    var v842 = JAMScript.call(property$$3.replace, property$$3, [/([A-Z])/, "-$1"]);
    v340 = v842.toLowerCase()
  }else {
    v340 = property$$3.toLowerCase()
  }
  property$$3 = v340;
  var i$$6 = 0;
  var numRules = rules.length;
  var v353 = i$$6 < numRules;
  for(;v353;) {
    var v844 = rule$$2 == "*";
    var v1179 = !v844;
    if(v1179) {
      var v1496 = rules[i$$6];
      var v1385 = v1496.selectorText;
      var v1178 = v1385.toLowerCase();
      v844 = v1178 == rule$$2
    }
    var v352 = v844;
    if(v352) {
      var j$$1;
      var v845 = rules[i$$6];
      var v351 = v845.style;
      for(j$$1 in v351) {
        var v846 = this.browserType;
        var v350 = v846 == "Safari";
        if(v350) {
          var v1497 = rules[i$$6];
          var v1386 = v1497.style;
          var v1180 = v1386[j$$1];
          var v847 = v1180.toLowerCase;
          if(v847) {
            var v1570 = rules[i$$6];
            var v1498 = v1570.style;
            var v1387 = v1498[j$$1];
            var v1181 = v1387.toLowerCase();
            v847 = v1181 == property$$3
          }
          var v345 = v847;
          if(v345) {
            var v344 = rule$$2 == "*";
            if(v344) {
              var v848 = rules[i$$6];
              var v341 = v848.selectorText;
              JAMScript.set(values$$4, v341, value, JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811)
            }else {
              var v849 = rules[i$$6];
              var v342 = v849.style;
              var v1182 = rules[i$$6];
              var v850 = v1182.style;
              var v343 = v850[j$$1];
              return v342[v343]
            }
          }
        }else {
          var v851 = j$$1.toLowerCase();
          var v349 = v851 == property$$3;
          if(v349) {
            var v348 = rule$$2 == "*";
            if(v348) {
              var v852 = rules[i$$6];
              var v346 = v852.selectorText;
              var v1183 = rules[i$$6];
              var v853 = v1183.style;
              JAMScript.set(values$$4, v346, v853[j$$1], JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811)
            }else {
              var v854 = rules[i$$6];
              var v347 = v854.style;
              return v347[j$$1]
            }
          }
        }
      }
    }
    i$$6 = i$$6 + 1;
    v353 = i$$6 < numRules
  }
  return values$$4
}
function v48(selectorText$$1, startAt) {
  function v47(p) {
    var i$$5 = 0;
    var numObjs$$2 = this.length;
    var v355 = i$$5 < numObjs$$2;
    for(;v355;) {
      var v354;
      var v1184 = typeof p;
      var v857 = v1184 == "function";
      if(v857) {
        var v855 = this[i$$5];
        v354 = JAMScript.call(p, null, [v855])
      }else {
        var v856 = "this[i]." + p;
        if(JAMScript.isEval(eval)) {
          v354 = eval("introspect(JAMScript.introspectors.processAll) { " + v856 + " }")
        }else {
          v354 = JAMScript.call(eval, null, [v856])
        }
      }
      v354;
      i$$5 = i$$5 + 1;
      v355 = i$$5 < numObjs$$2
    }
    return
  }
  var selectors$$7 = JAMScript.call(this.parseSelectors, this, [selectorText$$1]);
  var v356 = selectors$$7["elements"];
  var numS = v356.length;
  var v357 = !startAt;
  if(v357) {
    startAt = document
  }
  var v361 = numS == 1;
  if(v361) {
    var v858 = selectors$$7["elements"];
    var v358 = v858[0];
    var idMatch = v358.match(/^[a-z0-9*]*#([^,:]+)$/i);
    var v859 = idMatch;
    if(v859) {
      var v1499 = selectors$$7["attrs"];
      var v1388 = v1499[0];
      var v1185 = v1388 == "";
      if(v1185) {
        var v1389 = selectors$$7["separators"];
        v1185 = v1389 == ""
      }
      v859 = v1185
    }
    var v360 = v859;
    if(v360) {
      var v359 = idMatch[1];
      return document.getElementById(v359)
    }
  }
  var v860 = selectors$$7["elements"];
  var v362 = v860[0];
  var v861 = selectors$$7["attrs"];
  var v363 = v861[0];
  var objs$$1 = JAMScript.call(this.getMatches, this, [startAt, v362, v363]);
  var allObjs = [];
  var newObjs;
  var separator;
  var i$$4 = 1;
  var v372 = i$$4 < numS;
  for(;v372;) {
    newObjs = [];
    var v862 = selectors$$7["separators"];
    var v863 = i$$4 - 1;
    var v364 = v862[v863];
    separator = JAMScript.call(this.trim, this, [v364]);
    var v371 = separator == ",";
    if(v371) {
      allObjs = JAMScript.call(this.concatUnique, this, [allObjs, objs$$1]);
      var v864 = selectors$$7["elements"];
      var v365 = v864[i$$4];
      var v865 = selectors$$7["attrs"];
      var v366 = v865[i$$4];
      objs$$1 = JAMScript.call(this.getMatches, this, [startAt, v365, v366])
    }else {
      var v367;
      var v866 = separator == ">";
      if(v866) {
        v367 = true
      }else {
        v367 = false
      }
      var oneLevelOnly$$1 = v367;
      var j = 0;
      var numObjs$$1 = objs$$1.length;
      var v370 = j < numObjs$$1;
      for(;v370;) {
        var v1186 = objs$$1[j];
        var v867 = JAMScript.call(this.inArray, this, [v1186, newObjs]);
        var v369 = !v867;
        if(v369) {
          var v868 = objs$$1[j];
          var v1187 = selectors$$7["elements"];
          var v869 = v1187[i$$4];
          var v1188 = selectors$$7["attrs"];
          var v870 = v1188[i$$4];
          var v368 = JAMScript.call(this.getMatches, this, [v868, v869, v870]);
          newObjs = JAMScript.call(this.concatUnique, this, [newObjs, v368, oneLevelOnly$$1])
        }
        j = j + 1;
        v370 = j < numObjs$$1
      }
      objs$$1 = newObjs
    }
    i$$4 = i$$4 + 1;
    v372 = i$$4 < numS
  }
  allObjs = JAMScript.call(this.concatUnique, this, [allObjs, objs$$1]);
  allObjs.apply = v47;
  return allObjs
}
function v46(target$$37, s$$2, a$$1, oneLevelOnly) {
  function v45(me) {
    var v871 = !numA$$1;
    if(v871) {
      v871 = !pseudo
    }
    var v373 = v871;
    if(v373) {
      matches.push(me);
      return
    }
    var match$$2 = true;
    var v872 = numA$$1;
    if(v872) {
      var v1189 = JAMScript.call(this.processAttrs, this, [me, a$$1, exprs$$1]);
      v872 = !v1189
    }
    var v374 = v872;
    if(v374) {
      match$$2 = false
    }
    var v873 = pseudo;
    if(v873) {
      var v1190 = JAMScript.call(this.processPseudo, this, [me, pSelector$$1, pA$$1, pB$$1]);
      v873 = !v1190
    }
    var v375 = v873;
    if(v375) {
      match$$2 = false
    }
    if(match$$2) {
      matches.push(me)
    }
    return
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
  var v383 = i$$3 < numA$$1;
  for(;v383;) {
    var v376 = a$$1[i$$3];
    chunks = v376.match(/([a-z0-9_-]+)\s*([=^$*|!]{0,2})\s*"?([^"]*)"?$/i);
    a$$1[i$$3] = chunks[1];
    var v382 = chunks[2];
    switch(v382) {
      case "=":
        var v1191 = chunks[3];
        var v874 = "^" + v1191;
        var v377 = v874 + "$";
        var v1645 = new RegExp(v377, "i");
        exprs$$1[i$$3] = v1645;
        break;
      case "^=":
        var v875 = chunks[3];
        var v378 = "^" + v875;
        var v1646 = new RegExp(v378, "i");
        exprs$$1[i$$3] = v1646;
        break;
      case "$=":
        var v876 = chunks[3];
        var v379 = v876 + "$";
        var v1647 = new RegExp(v379, "i");
        exprs$$1[i$$3] = v1647;
        break;
      case "*=":
        var v380 = chunks[3];
        var v1648 = new RegExp(v380, "i");
        exprs$$1[i$$3] = v1648;
        break;
      case "&=":
        var v1639 = chunks[3];
        var v1629 = "^" + v1639;
        var v1611 = v1629 + "$|^";
        var v1612 = chunks[3];
        var v1571 = v1611 + v1612;
        var v1500 = v1571 + "\\s|\\s";
        var v1501 = chunks[3];
        var v1390 = v1500 + v1501;
        var v1192 = v1390 + "\\s|\\s";
        var v1193 = chunks[3];
        var v877 = v1192 + v1193;
        var v381 = v877 + "$";
        var v1649 = new RegExp(v381, "i");
        exprs$$1[i$$3] = v1649;
        break;
      case "!=":
        exprs$$1[i$$3] = chunks[3]
    }
    i$$3 = i$$3 + 1;
    v383 = i$$3 < numA$$1
  }
  var v878 = s$$2.indexOf(":");
  var v389 = v878 != -1;
  if(v389) {
    chunks = s$$2.split(":");
    s$$2 = chunks[0];
    var v384 = chunks[1];
    pseudo = v384.match(/([a-z-]+)\(?([a-z0-9+-]*)\)?/i);
    var v385 = pseudo[1];
    pSelector$$1 = v385.toLowerCase();
    var v879 = pseudo[2];
    var v386 = pOption = v879.toLowerCase();
    switch(v386) {
      case "odd":
        pOption = "2n+1";
        break;
      case "even":
        pOption = "2n"
    }
    chunks = pOption.match(/([0-9+-]*)(n?)([0-9+-]*)/i);
    var v880;
    var v1195 = chunks[2];
    if(v1195) {
      var v1194;
      var v1392 = chunks[1];
      if(v1392) {
        var v1391;
        var v1572 = chunks[1];
        var v1502 = v1572 == "-";
        if(v1502) {
          v1391 = -1
        }else {
          v1391 = chunks[1]
        }
        v1194 = v1391
      }else {
        v1194 = 1
      }
      v880 = v1194
    }else {
      v880 = 0
    }
    var v387 = v880;
    pA$$1 = parseInt(v387);
    var v881;
    var v1197 = chunks[3];
    if(v1197) {
      v881 = chunks[3]
    }else {
      var v1196;
      var v1503 = chunks[1];
      if(v1503) {
        var v1573 = chunks[2];
        v1503 = !v1573
      }
      var v1393 = v1503;
      if(v1393) {
        v1196 = chunks[1]
      }else {
        v1196 = 0
      }
      v881 = v1196
    }
    var v388 = v881;
    pB$$1 = parseInt(v388)
  }
  var v882 = s$$2.indexOf("#");
  var v402 = v882 != -1;
  if(v402) {
    var v1394 = s$$2.indexOf("#");
    var v1198 = v1394 + 1;
    var v883 = s$$2.substr(v1198);
    var v390 = document.getElementById(v883);
    JAMScript.call(this.postProcess, this, [v390])
  }else {
    var v884 = s$$2.indexOf(".");
    var v401 = v884 != -1;
    if(v401) {
      chunks = s$$2.split(".");
      var v1395 = chunks[0];
      var v1199 = v1395.length;
      var v885 = v1199 + 1;
      var v391 = s$$2.substr(v885);
      var classMatch = JAMScript.call(v391.replace, v391, [".", " "]);
      var v1630 = "^" + classMatch;
      var v1613 = v1630 + "$|^";
      var v1574 = v1613 + classMatch;
      var v1504 = v1574 + "\\s|\\s";
      var v1396 = v1504 + classMatch;
      var v1200 = v1396 + "\\s|\\s";
      var v886 = v1200 + classMatch;
      var v392 = v886 + "$";
      var className = new RegExp(v392, "i");
      var v887;
      var v1201 = chunks[0];
      if(v1201) {
        v887 = chunks[0]
      }else {
        v887 = "*"
      }
      var v393 = v887;
      objs = target$$37.getElementsByTagName(v393);
      i$$3 = 0;
      numObjs = objs.length;
      var v396 = i$$3 < numObjs;
      for(;v396;) {
        var v1202 = !oneLevelOnly;
        if(v1202) {
          var v1505 = objs[i$$3];
          var v1397 = v1505.className;
          v1202 = className.test(v1397)
        }
        var v888 = v1202;
        var v1204 = !v888;
        if(v1204) {
          var v1203 = oneLevelOnly;
          if(v1203) {
            var v1575 = objs[i$$3];
            var v1506 = v1575.className;
            var v1398 = className.test(v1506);
            if(v1398) {
              var v1576 = objs[i$$3];
              var v1507 = v1576.parentNode;
              v1398 = v1507 == target$$37
            }
            v1203 = v1398
          }
          v888 = v1203
        }
        var v395 = v888;
        if(v395) {
          var v394 = objs[i$$3];
          JAMScript.call(this.postProcess, this, [v394])
        }
        i$$3 = i$$3 + 1;
        v396 = i$$3 < numObjs
      }
    }else {
      var v889 = s$$2 == "*";
      var v1205 = !v889;
      if(v1205) {
        v889 = /^[A-Za-z0-9]+$/.test(s$$2)
      }
      var v400 = v889;
      if(v400) {
        i$$3 = 0;
        objs = target$$37.getElementsByTagName(s$$2);
        numObjs = objs.length;
        var v399 = i$$3 < numObjs;
        for(;v399;) {
          var v890 = !oneLevelOnly;
          var v1207 = !v890;
          if(v1207) {
            var v1206 = oneLevelOnly;
            if(v1206) {
              var v1508 = objs[i$$3];
              var v1399 = v1508.parentNode;
              v1206 = v1399 == target$$37
            }
            v890 = v1206
          }
          var v398 = v890;
          if(v398) {
            var v397 = objs[i$$3];
            JAMScript.call(this.postProcess, this, [v397])
          }
          i$$3 = i$$3 + 1;
          v399 = i$$3 < numObjs
        }
      }
    }
  }
  return matches
}
function v44(match$$1, pSelector, pA, pB) {
  var pCache;
  var nodeKey;
  var parentChildren = [];
  var pI = 0;
  var v1208 = match$$1.parentNode;
  var v891 = nodeKey = v1208.getAttribute("midorinodekey");
  var v405 = !v891;
  if(v405) {
    var v403 = match$$1.parentNode;
    var v1209 = Math.random();
    var v892 = v1209.toString();
    var v404 = nodeKey = v892.substr(2);
    JAMScript.call(v403.setAttribute, v403, ["midorinodekey", v404])
  }
  var v893 = this.pCache;
  var v409 = pCache = v893[nodeKey];
  if(v409) {
    parentChildren = pCache["parentChildren"];
    pI = pCache["pI"]
  }else {
    var v406 = match$$1.parentNode;
    var c$$2 = v406.firstChild;
    for(;c$$2;) {
      var v894 = c$$2.nodeType;
      var v407 = v894 == 1;
      if(v407) {
        parentChildren.push(c$$2)
      }
      c$$2 = c$$2.nextSibling
    }
    var v408 = this.pCache;
    JAMScript.set(v408, nodeKey, {parentChildren:parentChildren, pI:0}, JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811)
  }
  var parentNumChildren = parentChildren.length;
  switch(pSelector) {
    case "first-child":
      var v895 = parentChildren[0];
      var v410 = match$$1 == v895;
      if(v410) {
        return true
      }
      break;
    case "last-child":
      var v1210 = parentNumChildren - 1;
      var v896 = parentChildren[v1210];
      var v411 = match$$1 == v896;
      if(v411) {
        return true
      }
      break;
    case "only-child":
      var v412 = parentNumChildren == 1;
      if(v412) {
        return true
      }
  }
  var v418 = pSelector == "nth-child";
  if(v418) {
    var v413 = pA * pI;
    var v = v413 + pB;
    var oldV = -50;
    var v897 = v > -50;
    if(v897) {
      v897 = v <= parentNumChildren
    }
    var v417 = v897;
    for(;v417;) {
      var v898 = v >= 0;
      if(v898) {
        var v1400 = v - 1;
        var v1211 = parentChildren[v1400];
        v898 = v1211 == match$$1
      }
      var v415 = v898;
      if(v415) {
        var v899 = this.pCache;
        var v414 = v899[nodeKey];
        var v900;
        var v1212 = pA >= 0;
        if(v1212) {
          v900 = pI + 1
        }else {
          v900 = 0
        }
        v414["pI"] = v900;
        return true
      }
      pI = pI + 1;
      v = v + pA;
      var v416 = v == oldV;
      if(v416) {
        break
      }
      oldV = v;
      var v901 = v > -50;
      if(v901) {
        v901 = v <= parentNumChildren
      }
      v417 = v901
    }
  }
  return
}
function v43(match, a, exprs) {
  var i$$2 = 0;
  var numA = a.length;
  var attr;
  var v424 = i$$2 < numA;
  for(;v424;) {
    var v419;
    var v1213 = a[i$$2];
    var v904 = v1213 == "class";
    if(v904) {
      var v902;
      var v1214 = match.className;
      if(v1214) {
        v902 = match.className
      }else {
        v902 = null
      }
      v419 = v902
    }else {
      var v903 = a[i$$2];
      v419 = match.getAttribute(v903)
    }
    attr = v419;
    var v905 = exprs[i$$2];
    var v423 = typeof v905;
    switch(v423) {
      case "undefined":
        var v420 = attr == null;
        if(v420) {
          return false
        }
        break;
      case "string":
        var v906 = exprs[i$$2];
        var v421 = attr == v906;
        if(v421) {
          return false
        }
        break;
      default:
        var v1215 = exprs[i$$2];
        var v907 = v1215.test(attr);
        var v422 = !v907;
        if(v422) {
          return false
        }
    }
    i$$2 = i$$2 + 1;
    v424 = i$$2 < numA
  }
  return true
}
function v42(selectorText) {
  var v425 = JAMScript.call(this.trim, this, [selectorText]);
  var c$$1 = v425.split("");
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
  var v432 = i$$1 < len;
  for(;v432;) {
    if(inSelector) {
      if(inBrackets) {
        var v428 = c$$1[i$$1];
        switch(v428) {
          case '"':
            inQuotes = !inQuotes;
            break;
          case "]":
            var v427 = !inQuotes;
            if(v427) {
              var v426 = attrs[sI];
              v426.push(bracketContent);
              inBrackets = false;
              bracketContent = ""
            }
            break;
          case "\\":
            var v1216 = i$$1 = i$$1 + 1;
            var v908 = c$$1[v1216];
            bracketContent = bracketContent + v908;
            break;
          default:
            var v909 = c$$1[i$$1];
            bracketContent = bracketContent + v909
        }
      }else {
        var v429 = c$$1[i$$1];
        switch(v429) {
          case "[":
            inBrackets = true;
            break;
          case " ":
          ;
          case ">":
          ;
          case ",":
            inSelector = false;
            separators[sI] = c$$1[i$$1];
            break;
          case "\\":
            var v910 = elements;
            var v911 = sI;
            var v1217 = elements[sI];
            var v1401 = i$$1 = i$$1 + 1;
            var v1218 = c$$1[v1401];
            v910[v911] = v1217 + v1218;
            break;
          default:
            var v912 = elements;
            var v913 = sI;
            var v1219 = elements[sI];
            var v1220 = c$$1[i$$1];
            v912[v913] = v1219 + v1220
        }
      }
    }else {
      var v431 = c$$1[i$$1];
      switch(v431) {
        case " ":
        ;
        case ">":
        ;
        case ",":
          var v914 = separators;
          var v915 = sI;
          var v1221 = separators[sI];
          var v1222 = c$$1[i$$1];
          v914[v915] = v1221 + v1222;
          break;
        default:
          inSelector = true;
          var v430 = sI = sI + 1;
          elements[v430] = c$$1[i$$1];
          attrs[sI] = []
      }
    }
    i$$1 = i$$1 + 1;
    v432 = i$$1 < len
  }
  return{elements:elements, attrs:attrs, separators:separators}
}
function v41(obj$$16, direction$$3) {
  var sibling = obj$$16;
  var v436 = direction$$3 == "next";
  if(v436) {
    var v916 = sibling;
    if(v916) {
      var v1223 = sibling.nodeType;
      v916 = v1223 == 3
    }
    var v433 = v916;
    do {
      sibling = sibling.nextSibling;
      var v917 = sibling;
      if(v917) {
        var v1224 = sibling.nodeType;
        v917 = v1224 == 3
      }
      v433 = v917
    }while(v433)
  }else {
    var v435 = direction$$3 == "prev";
    if(v435) {
      var v918 = sibling;
      if(v918) {
        var v1225 = sibling.nodeType;
        v918 = v1225 == 3
      }
      var v434 = v918;
      do {
        sibling = sibling.previousSibling;
        var v919 = sibling;
        if(v919) {
          var v1226 = sibling.nodeType;
          v919 = v1226 == 3
        }
        v434 = v919
      }while(v434)
    }
  }
  var v437;
  var v920 = sibling == obj$$16;
  if(v920) {
    v437 = false
  }else {
    v437 = sibling
  }
  return v437
}
function v40(parentObj, callBack, depthFirst) {
  var c = parentObj.firstChild;
  for(;c;) {
    var v438 = !depthFirst;
    if(v438) {
      JAMScript.call(callBack, null, [c])
    }
    var v439 = c.firstChild;
    if(v439) {
      JAMScript.call(this.each, this, [c, callBack, depthFirst])
    }
    if(depthFirst) {
      JAMScript.call(callBack, null, [c])
    }
    c = c.nextSibling
  }
  return
}
function midoriTableSelection(vars$$6) {
  function v4() {
    var v440 = this.rowIds;
    var numRowIds = v440.length;
    var v1631 = this.vars;
    var v1614 = v1631.rowPrefix;
    var v1577 = "#" + v1614;
    var v1509 = v1577 + "header-cb";
    var v1402 = JAMScript.call(midori.get, midori, [v1509]);
    var v1227 = v1402.style;
    var v921 = v1227.display;
    var v455 = v921 == "none";
    if(v455) {
      var v1578 = this.vars;
      var v1510 = v1578.rowPrefix;
      var v1403 = "#" + v1510;
      var v1228 = v1403 + "header-cb";
      var v922 = JAMScript.call(midori.get, midori, [v1228]);
      var v441 = v922.style;
      v441.display = "";
      var i$$19 = 0;
      var v447 = i$$19 < numRowIds;
      for(;v447;) {
        var v442 = this.rowIds;
        var rowId = v442[i$$19];
        var v1615 = this.vars;
        var v1579 = v1615.rowPrefix;
        var v1511 = "#" + v1579;
        var v1404 = v1511 + "cb_";
        var v1229 = v1404 + rowId;
        var v923 = JAMScript.call(midori.get, midori, [v1229]);
        var v443 = v923.style;
        v443.display = "";
        var v1632 = this.vars;
        var v1616 = v1632.rowPrefix;
        var v1580 = "#" + v1616;
        var v1512 = v1580 + "cb_";
        var v1405 = v1512 + rowId;
        var v1230 = JAMScript.call(midori.get, midori, [v1405]);
        var v924 = v1230.firstChild;
        var v446 = v924.checked;
        if(v446) {
          var v1513 = this.vars;
          var v1406 = v1513.rowPrefix;
          var v1231 = "#" + v1406;
          var v925 = v1231 + rowId;
          var v444 = JAMScript.call(midori.get, midori, [v925]);
          var v926 = this.vars;
          var v445 = v926.rowHighlight;
          JAMScript.call(midori.highlightRow, midori, [v444, v445])
        }
        i$$19 = i$$19 + 1;
        v447 = i$$19 < numRowIds
      }
      var v448 = vars$$6.showCallback;
      if(v448) {
        JAMScript.call(vars$$6.showCallback, vars$$6, [this])
      }
    }else {
      var v1581 = this.vars;
      var v1514 = v1581.rowPrefix;
      var v1407 = "#" + v1514;
      var v1232 = v1407 + "header-cb";
      var v927 = JAMScript.call(midori.get, midori, [v1232]);
      var v449 = v927.style;
      v449.display = "none";
      i$$19 = 0;
      var v453 = i$$19 < numRowIds;
      for(;v453;) {
        var v1617 = this.vars;
        var v1582 = v1617.rowPrefix;
        var v1515 = "#" + v1582;
        var v1408 = v1515 + "cb_";
        var v1516 = this.rowIds;
        var v1409 = v1516[i$$19];
        var v1233 = v1408 + v1409;
        var v928 = JAMScript.call(midori.get, midori, [v1233]);
        var v450 = v928.style;
        v450.display = "none";
        var v1517 = this.vars;
        var v1410 = v1517.rowPrefix;
        var v1234 = "#" + v1410;
        var v1411 = this.rowIds;
        var v1235 = v1411[i$$19];
        var v929 = v1234 + v1235;
        var v451 = JAMScript.call(midori.get, midori, [v929]);
        var v930 = this.vars;
        var v452 = v930.rowHighlight;
        JAMScript.call(midori.highlightRow, midori, [v451, v452, true]);
        i$$19 = i$$19 + 1;
        v453 = i$$19 < numRowIds
      }
      var v454 = vars$$6.hideCallback;
      if(v454) {
        JAMScript.call(vars$$6.hideCallback, vars$$6, [this])
      }
    }
    return
  }
  function v3(o$$7) {
    function v2(e$$8) {
      var v1412 = vars$$6.rowPrefix;
      var v1236 = "#" + v1412;
      var v931 = v1236 + id$$4;
      var v456 = JAMScript.call(midori.get, midori, [v931]);
      var v457 = vars$$6.rowHighlight;
      JAMScript.call(midori.highlightRow, midori, [v456, v457]);
      var v1413 = vars$$6.tableId;
      var v1237 = "#" + v1413;
      var v932 = v1237 + "_cb_parent";
      var v458 = JAMScript.call(midori.get, midori, [v932]);
      JAMScript.call(midori.saveCheckboxState, midori, [v458, el$$2]);
      this.value = id$$4;
      return
    }
    function v1(c$$3) {
      className$$2 = c$$3.className;
      return
    }
    var td;
    var el$$2;
    var id$$4;
    var className$$2;
    var v459 = JAMScript.call(midori.get, midori, ["td:last-child", o$$7]);
    JAMScript.call(v459.apply, v459, [v1]);
    var v460 = o$$7.id;
    var v933 = vars$$6.rowPrefix;
    var v461 = v933.length;
    id$$4 = v460.substr(v461);
    td = document.createElement("td");
    var v462 = td.style;
    v462.display = "none";
    var v1414 = vars$$6.rowPrefix;
    var v1238 = v1414 + "cb_";
    var v934 = v1238 + id$$4;
    var v463 = {id:v934, className:className$$2};
    JAMScript.call(midori.setAttributes, midori, [td, v463]);
    el$$2 = document.createElement("input");
    var v935 = vars$$6.checkboxName;
    var v464 = {name:v935, type:"checkbox", value:id$$4};
    JAMScript.call(midori.setAttributes, midori, [el$$2, v464]);
    JAMScript.call(midori.addEventListener, midori, [el$$2, "click", v2]);
    JAMScript.call(td.appendChild, td, [el$$2]);
    JAMScript.call(o$$7.appendChild, o$$7, [td]);
    var v465 = thisObj.rowIds;
    v465.push(id$$4);
    return
  }
  function v0(e$$7) {
    var id$$3;
    var el$$1;
    var isChecked;
    var i$$18 = 0;
    var v466 = thisObj.rowIds;
    var numIds = v466.length;
    var v473 = i$$18 < numIds;
    for(;v473;) {
      var v467 = thisObj.rowIds;
      id$$3 = v467[i$$18];
      var v1518 = vars$$6.rowPrefix;
      var v1415 = "#" + v1518;
      var v1239 = v1415 + "cb_";
      var v936 = v1239 + id$$3;
      var v468 = JAMScript.call(midori.get, midori, [v936]);
      el$$1 = v468.firstChild;
      isChecked = el$$1.checked;
      el$$1.checked = !isChecked;
      var v469;
      if(isChecked) {
        v469 = ""
      }else {
        v469 = id$$3
      }
      el$$1.value = v469;
      var v1416 = vars$$6.rowPrefix;
      var v1240 = "#" + v1416;
      var v937 = v1240 + id$$3;
      var v470 = JAMScript.call(midori.get, midori, [v937]);
      var v471 = vars$$6.rowHighlight;
      JAMScript.call(midori.highlightRow, midori, [v470, v471]);
      var v1417 = vars$$6.tableId;
      var v1241 = "#" + v1417;
      var v938 = v1241 + "_cb_parent";
      var v472 = JAMScript.call(midori.get, midori, [v938]);
      JAMScript.call(midori.saveCheckboxState, midori, [v472, el$$1]);
      i$$18 = i$$18 + 1;
      v473 = i$$18 < numIds
    }
    return
  }
  this.vars = vars$$6;
  this.rowIds = [];
  var thisObj = this;
  var cb$$1 = document.createElement("input");
  JAMScript.call(cb$$1.setAttribute, cb$$1, ["type", "checkbox"]);
  JAMScript.call(midori.addEventListener, midori, [cb$$1, "click", v0]);
  var v1418 = vars$$6.tableId;
  var v1242 = "#" + v1418;
  var v939 = v1242 + " th";
  var v474 = JAMScript.call(midori.get, midori, [v939]);
  var firstTh = v474[0];
  var th = document.createElement("th");
  var v1243 = vars$$6.rowPrefix;
  var v940 = v1243 + "header-cb";
  var v941 = firstTh.className;
  var v475 = {id:v940, align:"left", className:v941};
  JAMScript.call(midori.setAttributes, midori, [th, v475]);
  JAMScript.call(th.appendChild, th, [cb$$1]);
  var v476 = th.style;
  v476.display = "none";
  var v477 = firstTh.parentNode;
  JAMScript.call(v477.appendChild, v477, [th]);
  var cbParent = document.createElement("div");
  var v478 = vars$$6.tableId;
  cbParent.id = v478 + "_cb_parent";
  var v479 = document.body;
  JAMScript.call(v479.appendChild, v479, [cbParent]);
  var v1583 = vars$$6.tableId;
  var v1519 = "#" + v1583;
  var v1419 = v1519 + ' tr[id^="';
  var v1420 = vars$$6.rowPrefix;
  var v1244 = v1419 + v1420;
  var v942 = v1244 + '"]';
  var v480 = JAMScript.call(midori.get, midori, [v942]);
  JAMScript.call(v480.apply, v480, [v3]);
  this.toggle = v4;
  return
}
function midoriDragDrop(containerId$$1, dropCallback) {
  function v18(e$$14) {
    JAMScript.call(thisObj$$1.mouseUp, thisObj$$1, [e$$14]);
    return
  }
  function v17(e$$13) {
    JAMScript.call(thisObj$$1.mouseMove, thisObj$$1, [e$$13]);
    return
  }
  function v16(e$$12) {
    var v481 = thisObj$$1.doneDragging;
    if(v481) {
      JAMScript.call(midori.preventDefault, midori, [e$$12])
    }
    return
  }
  function v15(e$$11) {
    JAMScript.call(thisObj$$1.mouseUp, thisObj$$1, [e$$11]);
    return
  }
  function v14(e$$10) {
    JAMScript.call(thisObj$$1.mouseMove, thisObj$$1, [e$$10]);
    return
  }
  function v13(o$$10, dragged, spacer) {
    var v1245 = o$$10.obj;
    var v943 = v1245.className;
    var v484 = /drop-target/.test(v943);
    if(v484) {
      var v482 = o$$10.obj;
      var v944;
      if(spacer) {
        v944 = spacer
      }else {
        v944 = dragged
      }
      var v483 = v944;
      return JAMScript.call(v482.appendChild, v482, [v483])
    }
    var v485;
    var v1421 = o$$10.where;
    var v1246 = v1421 == "next";
    if(v1246) {
      var v1520 = o$$10.obj;
      var v1422 = v1520.nextSibling;
      v1246 = !v1422
    }
    var v950 = v1246;
    if(v950) {
      var v1247 = o$$10.obj;
      var v945 = v1247.parentNode;
      var v1248;
      if(spacer) {
        v1248 = spacer
      }else {
        v1248 = dragged
      }
      var v946 = v1248;
      v485 = JAMScript.call(v945.appendChild, v945, [v946])
    }else {
      var v1249 = o$$10.obj;
      var v947 = v1249.parentNode;
      var v1250;
      if(spacer) {
        v1250 = spacer
      }else {
        v1250 = dragged
      }
      var v948 = v1250;
      var v1251;
      var v1521 = o$$10.where;
      var v1424 = v1521 == "prev";
      if(v1424) {
        v1251 = o$$10.obj
      }else {
        var v1423 = o$$10.obj;
        v1251 = v1423.nextSibling
      }
      var v949 = v1251;
      v485 = JAMScript.call(v947.insertBefore, v947, [v948, v949])
    }
    return v485
  }
  function v12(event$$7) {
    this.doneDragging = false;
    var v951 = this.dragged;
    var v486 = !v951;
    if(v486) {
      return
    }
    var objCoords$$2;
    var v952 = this.mouseMoved;
    if(v952) {
      v952 = objCoords$$2 = JAMScript.call(this.findPlace, this, [event$$7, true])
    }
    var v488 = v952;
    if(v488) {
      var v487 = this.dragged;
      JAMScript.call(this.dropCallback, this, [objCoords$$2, v487]);
      this.doneDragging = true
    }
    var v953 = this.dragged;
    var v489 = !v953;
    if(v489) {
      return
    }
    var v954 = this.spacer;
    var v490 = v954.style;
    v490.display = "none";
    var v491 = this.dragged;
    var v492 = {position:"", opacity:"1"};
    JAMScript.call(midori.setStyles, midori, [v491, v492]);
    var v493 = this.container;
    JAMScript.call(this.init, this, [v493]);
    return
  }
  function v11(event$$6) {
    var v1252 = this.dragged;
    var v955 = !v1252;
    var v1254 = !v955;
    if(v1254) {
      var v1425 = this.dragged;
      var v1253 = v1425.className;
      v955 = /drop-target/.test(v1253)
    }
    var v494 = v955;
    if(v494) {
      return
    }
    JAMScript.call(midori.preventDefault, midori, [event$$6]);
    var mousePos$$2 = JAMScript.call(midori.getMousePos, midori, [event$$6]);
    this.lastMousePos = mousePos$$2;
    this.mouseMoved = true;
    var v495 = this.dragged;
    var v1426 = mousePos$$2.x;
    var v1522 = this.mouseOffset;
    var v1427 = v1522.x;
    var v1255 = v1426 - v1427;
    var v956 = v1255 + "px";
    var v1428 = mousePos$$2.y;
    var v1523 = this.mouseOffset;
    var v1429 = v1523.y;
    var v1256 = v1428 - v1429;
    var v957 = v1256 + "px";
    var v496 = {position:"absolute", left:v956, top:v957};
    JAMScript.call(midori.setStyles, midori, [v495, v496]);
    var v497 = this.spacer;
    var v958 = this.dragged;
    var v498 = JAMScript.call(midori.getFloat, midori, [v958]);
    JAMScript.call(midori.setFloat, midori, [v497, v498]);
    var objCoords$$1;
    var v959 = objCoords$$1 = JAMScript.call(this.findPlace, this, [event$$6]);
    if(v959) {
      var v1257 = this.dragged;
      var v1258 = this.spacer;
      v959 = JAMScript.call(this.dropCallback, this, [objCoords$$1, v1257, v1258])
    }
    var v504 = v959;
    if(v504) {
      var v499 = this.spacer;
      var v1430 = this.dragged;
      var v1259 = v1430.offsetHeight;
      var v960 = v1259 + "px";
      var v500 = {display:"block", height:v960};
      JAMScript.call(midori.setStyles, midori, [v499, v500]);
      var v961 = this.spacer;
      var v502 = JAMScript.call(midori.getFloat, midori, [v961]);
      if(v502) {
        var v962 = this.spacer;
        var v501 = v962.style;
        var v1260 = this.dragged;
        var v963 = v1260.offsetWidth;
        v501.width = v963 + "px"
      }
    }else {
      var v964 = this.spacer;
      var v503 = v964.style;
      v503.display = "none"
    }
    return
  }
  function v10(parentObj$$1) {
    function v9(o$$9) {
      var v1261 = o$$9.className;
      var v965 = /draggable/.test(v1261);
      var v505 = !v965;
      if(v505) {
        return
      }
      j$$3 = 0;
      var v508 = j$$3 < numObjs$$4;
      for(;v508;) {
        var v1262 = thisObj$$1.objs;
        var v966 = v1262[j$$3];
        var v507 = v966 == o$$9;
        if(v507) {
          var v506 = thisObj$$1.objs;
          JAMScript.set(v506, j$$3, "", JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
          break
        }
        j$$3 = j$$3 + 1;
        v508 = j$$3 < numObjs$$4
      }
      return
    }
    var j$$3;
    var v509 = this.objs;
    var numObjs$$4 = v509.length;
    JAMScript.call(midori.each, midori, [parentObj$$1, v9, true]);
    j$$3 = 0;
    var v512 = j$$3 < numObjs$$4;
    for(;v512;) {
      var v1263 = this.objs;
      var v967 = v1263[j$$3];
      var v511 = v967 == parentObj$$1;
      if(v511) {
        var v510 = this.objs;
        JAMScript.set(v510, j$$3, "", JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
        break
      }
      j$$3 = j$$3 + 1;
      v512 = j$$3 < numObjs$$4
    }
    return
  }
  function v8(event$$5, mouseUp) {
    var v513;
    var v1264 = mouseUp;
    if(v1264) {
      v1264 = event$$5.targetTouches
    }
    var v968 = v1264;
    if(v968) {
      v513 = this.lastMousePos
    }else {
      v513 = JAMScript.call(midori.getMousePos, midori, [event$$5])
    }
    var mousePos$$1 = v513;
    var obj$$26;
    var objCoords;
    var objPos$$1;
    var v1265 = this.objsCoords;
    var v969 = v1265.length;
    var v519 = !v969;
    if(v519) {
      var i$$21 = 0;
      var v514 = this.objs;
      var numObjs$$3 = v514.length;
      var v518 = i$$21 < numObjs$$3;
      for(;v518;) {
        var v1266 = this.objs;
        var v970 = obj$$26 = v1266[i$$21];
        if(v970) {
          v970 = objPos$$1 = JAMScript.call(midori.getPos, midori, [obj$$26])
        }
        var v517 = v970;
        if(v517) {
          var v515 = this.objsCoords;
          var v971 = objPos$$1.x;
          var v972 = objPos$$1.y;
          var v973 = obj$$26.offsetWidth;
          var v974 = obj$$26.offsetHeight;
          var v516 = {obj:obj$$26, x:v971, y:v972, width:v973, height:v974};
          v515.push(v516)
        }
        i$$21 = i$$21 + 1;
        v518 = i$$21 < numObjs$$3
      }
    }
    var j$$2 = 0;
    var v520 = this.objsCoords;
    var numObjsCoords = v520.length;
    var v524 = j$$2 < numObjsCoords;
    for(;v524;) {
      var v975 = this.objsCoords;
      var v523 = objCoords = v975[j$$2];
      if(v523) {
        var v1524 = mousePos$$1.x;
        var v1525 = objCoords.x;
        var v1431 = v1524 >= v1525;
        if(v1431) {
          var v1526 = mousePos$$1.x;
          var v1584 = objCoords.x;
          var v1585 = objCoords.width;
          var v1527 = v1584 + v1585;
          v1431 = v1526 <= v1527
        }
        var v1267 = v1431;
        if(v1267) {
          var v1528 = mousePos$$1.y;
          var v1529 = objCoords.y;
          var v1432 = v1528 >= v1529;
          if(v1432) {
            var v1530 = mousePos$$1.y;
            var v1586 = objCoords.y;
            var v1587 = objCoords.height;
            var v1531 = v1586 + v1587;
            v1432 = v1530 <= v1531
          }
          v1267 = v1432
        }
        var v976 = v1267;
        var v521 = !v976;
        if(v521) {
          j$$2 = j$$2 + 1;
          v524 = j$$2 < numObjsCoords;
          continue
        }
        var v522 = objCoords;
        var v977;
        var v1433 = objCoords.obj;
        var v1270 = JAMScript.call(midori.getFloat, midori, [v1433]);
        if(v1270) {
          var v1268;
          var v1532 = mousePos$$1.x;
          var v1588 = objCoords.x;
          var v1618 = objCoords.width;
          var v1589 = v1618 / 2;
          var v1533 = v1588 + v1589;
          var v1434 = v1532 < v1533;
          if(v1434) {
            v1268 = "prev"
          }else {
            v1268 = "next"
          }
          v977 = v1268
        }else {
          var v1269;
          var v1534 = mousePos$$1.y;
          var v1590 = objCoords.y;
          var v1619 = objCoords.height;
          var v1591 = v1619 / 2;
          var v1535 = v1590 + v1591;
          var v1435 = v1534 < v1535;
          if(v1435) {
            v1269 = "prev"
          }else {
            v1269 = "next"
          }
          v977 = v1269
        }
        v522.where = v977;
        return objCoords
      }
      j$$2 = j$$2 + 1;
      v524 = j$$2 < numObjsCoords
    }
    return
  }
  function v7() {
    function v6(o$$8) {
      function v5(e$$9) {
        var mousePos = JAMScript.call(midori.getMousePos, midori, [e$$9]);
        var me$$2 = JAMScript.call(midori.getEventTarget, midori, [e$$9]);
        var v978 = me$$2.className;
        var v525 = /not-draggable/.test(v978);
        if(v525) {
          return
        }
        var v1271 = me$$2.className;
        var v979 = /draggable/.test(v1271);
        var v526 = !v979;
        for(;v526;) {
          me$$2 = me$$2.parentNode;
          var v1272 = me$$2.className;
          var v980 = /draggable/.test(v1272);
          v526 = !v980
        }
        var objPos = JAMScript.call(midori.getPos, midori, [me$$2]);
        thisObj$$1.dragged = me$$2;
        var v981 = mousePos.x;
        var v982 = objPos.x;
        var v527 = v981 - v982;
        var v983 = mousePos.y;
        var v984 = objPos.y;
        var v528 = v983 - v984;
        thisObj$$1.mouseOffset = {x:v527, y:v528};
        var v1273 = o$$8.className;
        var v985 = /drop-target/.test(v1273);
        var v530 = !v985;
        if(v530) {
          var v529 = me$$2.style;
          v529.opacity = ".5";
          JAMScript.call(midori.preventBubble, midori, [e$$9]);
          JAMScript.call(midori.preventDefault, midori, [e$$9])
        }
        JAMScript.call(thisObj$$1.removeDraggedObj, thisObj$$1, [me$$2]);
        return
      }
      var v1274 = o$$8.className;
      var v986 = /not-draggable/.test(v1274);
      var v1276 = !v986;
      if(v1276) {
        var v1536 = o$$8.className;
        var v1436 = /draggable/.test(v1536);
        var v1275 = !v1436;
        var v1438 = !v1275;
        if(v1438) {
          var v1537 = o$$8.style;
          var v1437 = v1537.display;
          v1275 = v1437 == "none"
        }
        v986 = v1275
      }
      var v531 = v986;
      if(v531) {
        return
      }
      var v532 = thisObj$$1.objs;
      v532.push(o$$8);
      var i$$20 = 0;
      var v534 = i$$20 < 2;
      for(;v534;) {
        var v987 = ["mousedown", "touchstart"];
        var v533 = v987[i$$20];
        JAMScript.call(midori.addEventListener, midori, [o$$8, v533, v5]);
        i$$20 = i$$20 + 1;
        v534 = i$$20 < 2
      }
      return
    }
    this.objs = [];
    this.objsCoords = [];
    this.mouseMoved = false;
    this.dragged = null;
    var v535 = this.container;
    JAMScript.call(midori.each, midori, [v535, v6, true]);
    return
  }
  var thisObj$$1 = this;
  var v536 = "#" + containerId$$1;
  var v1650 = JAMScript.call(midori.get, midori, [v536]);
  this.container = v1650;
  this.init = v7;
  this.findPlace = v8;
  this.removeDraggedObj = v10;
  this.mouseMove = v11;
  this.mouseUp = v12;
  this.defaultDropCallback = v13;
  var v537 = this.container;
  JAMScript.call(midori.addEventListener, midori, [v537, "mousemove", v14]);
  var v538 = this.container;
  JAMScript.call(midori.addEventListener, midori, [v538, "mouseup", v15]);
  var v539 = this.container;
  JAMScript.call(midori.addEventListener, midori, [v539, "click", v16]);
  var v540 = this.container;
  JAMScript.call(midori.addEventListener, midori, [v540, "touchmove", v17]);
  var v541 = this.container;
  JAMScript.call(midori.addEventListener, midori, [v541, "touchend", v18]);
  var v1651 = document.createElement("div");
  this.spacer = v1651;
  var v542 = this.spacer;
  JAMScript.set(v542, "innerHTML", "&nbsp;");
  var v543 = this.spacer;
  var v1277 = JAMScript.call(midori.uniqid, midori, []);
  var v988 = "midori_dd_spacer" + v1277;
  var v544 = {id:v988, className:"midori-dd-spacer"};
  JAMScript.call(midori.setAttributes, midori, [v543, v544]);
  var v545;
  if(dropCallback) {
    v545 = dropCallback
  }else {
    v545 = this.defaultDropCallback
  }
  this.dropCallback = v545;
  JAMScript.call(this.init, this, []);
  return
}
function midoriAjax(callback$$29, params$$1, cache) {
  function v20(where, what$$3, verb, headers) {
    var cachedValue;
    var v546 = where + "?";
    this.cacheKey = v546 + what$$3;
    var v989 = cache;
    if(v989) {
      var v1439 = this.cache;
      var v1440 = this.cacheKey;
      var v1278 = cachedValue = v1439[v1440];
      v989 = v1278 != null
    }
    var v547 = v989;
    if(v547) {
      this.responseText = cachedValue;
      JAMScript.call(this.runCallback, this, ["", true]);
      return
    }
    var v548 = this.request;
    JAMScript.set(v548, "onreadystatechange", this.runCallback);
    var v549;
    if(verb) {
      var v1441;
      var v1538 = verb == true;
      if(v1538) {
        v1441 = "GET"
      }else {
        v1441 = verb
      }
      var v1279 = v1441;
      var v990 = v1279.toUpperCase();
      v549 = JAMScript.call(midori.trim, midori, [v990])
    }else {
      v549 = "POST"
    }
    verb = v549;
    var v550 = this.request;
    var v991;
    var v1442 = ["POST", "PUT"];
    var v1281 = JAMScript.call(midori.inArray, midori, [verb, v1442]);
    if(v1281) {
      v991 = where
    }else {
      var v1443;
      if(what$$3) {
        v1443 = "?" + what$$3
      }else {
        v1443 = ""
      }
      var v1280 = v1443;
      v991 = where + v1280
    }
    var v551 = v991;
    v550.open(verb, v551, true);
    var v992 = ["POST", "PUT"];
    var v556 = JAMScript.call(midori.inArray, midori, [verb, v992]);
    if(v556) {
      var v552 = this.request;
      v552.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
      var v553 = this.request;
      var v554 = what$$3.length;
      v553.setRequestHeader("Content-length", v554);
      var v555 = this.request;
      v555.setRequestHeader("Connection", "close")
    }
    if(headers) {
      var i$$22 = 0;
      var len$$2 = headers.length;
      var v560 = i$$22 < len$$2;
      for(;v560;) {
        var v557 = this.request;
        var v993 = headers[i$$22];
        var v558 = v993[0];
        var v994 = headers[i$$22];
        var v559 = v994[1];
        v557.setRequestHeader(v558, v559);
        i$$22 = i$$22 + 1;
        v560 = i$$22 < len$$2
      }
    }
    var v561 = this.request;
    var v995;
    var v1444 = ["POST", "PUT"];
    var v1282 = JAMScript.call(midori.inArray, midori, [verb, v1444]);
    if(v1282) {
      v995 = what$$3
    }else {
      v995 = null
    }
    var v562 = v995;
    v561.send(v562);
    return
  }
  function v19(event$$8, cached) {
    var v569 = !cached;
    if(v569) {
      var v1283 = thisObj$$2.request;
      var v996 = v1283.readyState;
      var v563 = v996 != 4;
      if(v563) {
        return
      }
      var v564 = thisObj$$2;
      var v997 = thisObj$$2.request;
      v564.responseText = v997.responseText;
      var v565 = thisObj$$2;
      var v998 = thisObj$$2.request;
      v565.responseXML = v998.responseXML;
      var v566 = thisObj$$2;
      var v999 = thisObj$$2.request;
      v566.status = v999.status;
      var v567 = thisObj$$2.cache;
      var v568 = thisObj$$2.cacheKey;
      JAMScript.set(v567, v568, thisObj$$2.responseText, JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811)
    }
    JAMScript.call(thisObj$$2.callback, thisObj$$2, [params$$1]);
    return
  }
  var thisObj$$2 = this;
  this.cache = {};
  this.callback = callback$$29;
  try {
    var v1652 = new XMLHttpRequest;
    this.request = v1652
  }catch(e$$15) {
    try {
      var v1653 = JAMScript.new(ActiveXObject, ["Msxml2.XMLHTTP"]);
      this.request = v1653
    }catch(e$$16) {
      var v1654 = JAMScript.new(ActiveXObject, ["Microsoft.XMLHTTP"]);
      this.request = v1654
    }
  }
  this.runCallback = v19;
  this.post = v20;
  return
}
function midoriAutoComplete(vars$$7) {
  function v32() {
    function v31(e$$21) {
      JAMScript.call(thisObj$$3.process, thisObj$$3, [e$$21]);
      return
    }
    function v30(e$$20) {
      var v1000 = e$$20.keyCode;
      var v570 = v1000 == 13;
      if(v570) {
        return false
      }
      return
    }
    function v29(e$$19) {
      var v1001 = e$$19.keyCode;
      var v571 = v1001 == 13;
      if(v571) {
        JAMScript.call(midori.preventDefault, midori, [e$$19])
      }
      return
    }
    function v28() {
      var v1002 = thisObj$$3.ajax;
      var v576 = v1002.responseText;
      if(v576) {
        var v572;
        var v1539 = thisObj$$3.ajax;
        var v1445 = v1539.responseText;
        var v1284 = typeof v1445;
        var v1005 = v1284 == "string";
        if(v1005) {
          var v1540 = thisObj$$3.ajax;
          var v1446 = v1540.responseText;
          var v1285 = "(" + v1446;
          var v1003 = v1285 + ")";
          if(JAMScript.isEval(eval)) {
            v572 = eval("introspect(JAMScript.introspectors.processAll) { " + v1003 + " }")
          }else {
            v572 = JAMScript.call(eval, null, [v1003])
          }
        }else {
          var v1004 = thisObj$$3.ajax;
          v572 = v1004.responseText
        }
        var response = v572;
        var v573 = thisObj$$3.suggestions;
        var v574 = response["snippet"];
        JAMScript.set(v573, v574, response["result"], JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
        var v575 = response["snippet"];
        JAMScript.call(thisObj$$3.showSuggestions, thisObj$$3, [v575])
      }
      return
    }
    var v1006 = vars$$7.separator;
    var v577 = !v1006;
    if(v577) {
      vars$$7.separator = ""
    }
    this.ajaxCallback = v28;
    var v1655 = JAMScript.call(midori.uniqid, midori, []);
    this.uniqid = v1655;
    var v1007 = vars$$7.id;
    var v578 = "#" + v1007;
    var v1656 = JAMScript.call(midori.get, midori, [v578]);
    this.obj = v1656;
    var v579 = this.obj;
    this.content = v579.value;
    this.oldContent = this.content;
    this.suggestions = [];
    var v580;
    var v1447 = vars$$7.fileName;
    var v1286 = typeof v1447;
    var v1009 = v1286 == "string";
    if(v1009) {
      var v1008 = this.ajaxCallback;
      v580 = new midoriAjax(v1008, "", true)
    }else {
      v580 = {}
    }
    this.ajax = v580;
    var v1010 = this.browserType;
    var v583 = v1010 != "Gecko";
    if(v583) {
      var parentNode$$2 = this.obj;
      JAMScript.call(midori.addEventListener, midori, [parentNode$$2, "keypress", v29]);
      var v1011 = parentNode$$2.parentNode;
      var v582 = v1011 != null;
      for(;v582;) {
        parentNode$$2 = parentNode$$2.parentNode;
        var v1287 = parentNode$$2.nodeName;
        var v1012 = v1287.toLowerCase();
        var v581 = v1012 == "form";
        if(v581) {
          JAMScript.call(midori.addEventListener, midori, [parentNode$$2, "keypress", v30])
        }
        var v1013 = parentNode$$2.parentNode;
        v582 = v1013 != null
      }
    }
    var v584 = this.obj;
    JAMScript.call(v584.setAttribute, v584, ["autocomplete", "off"]);
    var v585 = this.obj;
    JAMScript.call(midori.addEventListener, midori, [v585, "keyup", v31]);
    return
  }
  function v27(snippet$$3) {
    var pos = 0;
    var i$$25;
    var v1014 = this.suggestions;
    var v588 = v1014[snippet$$3];
    for(i$$25 in v588) {
      var v1015 = pos = pos + 1;
      var v1016 = this.suggestionPos;
      var v587 = v1015 == v1016;
      if(v587) {
        var v586 = this.obj;
        var v1288 = this.obj;
        var v1017 = v1288.value;
        var v1289;
        var v1450 = vars$$7.callback;
        if(v1450) {
          var v1592 = this.suggestions;
          var v1541 = v1592[snippet$$3];
          var v1448 = v1541[i$$25];
          v1289 = JAMScript.call(vars$$7.callback, vars$$7, [v1448])
        }else {
          var v1542 = this.suggestions;
          var v1449 = v1542[snippet$$3];
          v1289 = v1449[i$$25]
        }
        var v1018 = v1289;
        var v1657 = JAMScript.call(v1017.replace, v1017, [snippet$$3, v1018]);
        v586.value = v1657;
        break
      }
    }
    var v589 = this.obj;
    this.content = v589.value;
    this.oldContent = this.content;
    var v590 = this.obj;
    v590.focus();
    return
  }
  function v26(suggestionPos) {
    var v1543 = this.popupId;
    var v1451 = "#" + v1543;
    var v1290 = v1451 + " .";
    var v1452 = vars$$7.suggestionSelectedClass;
    var v1291 = JAMScript.call(v1452.replace, v1452, [" ", "."]);
    var v1019 = v1290 + v1291;
    var v591 = JAMScript.call(midori.get, midori, [v1019]);
    var v1292 = vars$$7.suggestionClass;
    var v1020 = "className = '" + v1292;
    var v592 = v1020 + "'";
    JAMScript.call(v591.apply, v591, [v592]);
    var v1544 = this.uniqid;
    var v1453 = "#midori_suggestion" + v1544;
    var v1293 = v1453 + "_";
    var v1021 = v1293 + suggestionPos;
    var v593 = JAMScript.call(midori.get, midori, [v1021]);
    v593.className = vars$$7.suggestionSelectedClass;
    this.suggestionPos = suggestionPos;
    return
  }
  function v25(snippet$$2) {
    var v594 = this.suggestions;
    var suggestions = v594[snippet$$2];
    var html = "";
    var properties = [];
    var i$$24 = 0;
    var j$$5 = 0;
    var k$$2 = "";
    for(i$$24 in suggestions) {
      var v597 = vars$$7.htmlTemplate;
      if(v597) {
        var v596 = suggestions[i$$24];
        for(k$$2 in v596) {
          var v595 = k$$2;
          var v1022 = suggestions[i$$24];
          JAMScript.set(properties, v595, v1022[k$$2], JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811)
        }
      }
      var v1641 = this.uniqid;
      var v1640 = '<a id="midori_suggestion' + v1641;
      var v1633 = v1640 + "_";
      var v1634 = j$$5 = j$$5 + 1;
      var v1620 = v1633 + v1634;
      var v1593 = v1620 + '" class="';
      var v1594 = vars$$7.suggestionClass;
      var v1545 = v1593 + v1594;
      var v1454 = v1545 + '" href="#">';
      var v1546;
      var v1596 = vars$$7.htmlTemplate;
      if(v1596) {
        var v1595 = vars$$7.htmlTemplate;
        v1546 = JAMScript.call(midori.replace, midori, [v1595, properties])
      }else {
        v1546 = suggestions[i$$24]
      }
      var v1455 = v1546;
      var v1294 = v1454 + v1455;
      var v1023 = v1294 + "</a>\n";
      html = html + v1023
    }
    var v598 = !html;
    if(v598) {
      JAMScript.call(midoriPopup.hide, midoriPopup, []);
      return
    }
    this.snippet = snippet$$2;
    this.suggestionPos = 0;
    this.numSuggestions = j$$5;
    var v600 = this.popup;
    if(v600) {
      var v599 = this.popup;
      JAMScript.call(midori.removeNode, midori, [v599])
    }
    var v601 = this.uniqid;
    this.popupId = "midori_suggestions" + v601;
    var v1658 = document.createElement("div");
    this.popup = v1658;
    var v602 = this.popup;
    var v1024 = this.popupId;
    var v603 = {id:v1024, className:"popup"};
    JAMScript.call(midori.setAttributes, midori, [v602, v603]);
    var v604 = document.body;
    var v605 = this.popup;
    JAMScript.call(v604.appendChild, v604, [v605]);
    var v606 = this.popup;
    JAMScript.set(v606, "innerHTML", html);
    j$$5 = 0;
    var v1025 = this.suggestions;
    var v608 = v1025[snippet$$2];
    for(i$$24 in v608) {
      var v607 = j$$5 = j$$5 + 1;
      JAMScript.call(this.addProperties, this, [v607, snippet$$2])
    }
    var v1026 = this.obj;
    var v1027 = this.popupId;
    var v609 = {obj:v1026, popupId:v1027, x:0, y:0, noAnim:true};
    JAMScript.call(midoriPopup.show, midoriPopup, [v609]);
    var v610 = this.obj;
    v610.focus();
    return
  }
  function v24(id$$5, snippet$$1) {
    function v23(e$$18) {
      JAMScript.call(thisObj$$3.replaceSnippet, thisObj$$3, [snippet$$1]);
      JAMScript.call(midori.preventDefault, midori, [e$$18]);
      return
    }
    function v22(e$$17) {
      JAMScript.call(thisObj$$3.highlightSuggestion, thisObj$$3, [id$$5]);
      return
    }
    var v1456 = this.uniqid;
    var v1295 = "#midori_suggestion" + v1456;
    var v1028 = v1295 + "_";
    var v611 = v1028 + id$$5;
    var obj$$27 = JAMScript.call(midori.get, midori, [v611]);
    JAMScript.call(midori.addEventListener, midori, [obj$$27, "mouseover", v22]);
    JAMScript.call(midori.addEventListener, midori, [obj$$27, "click", v23]);
    return
  }
  function v21(event$$9) {
    var v1029 = this.popup;
    if(v1029) {
      var v1296 = this.popup;
      var v1297 = midoriPopup.activePopup;
      v1029 = v1296 == v1297
    }
    var v619 = v1029;
    if(v619) {
      var v617 = event$$9.keyCode;
      switch(v617) {
        case 27:
        ;
        case 37:
        ;
        case 39:
          JAMScript.call(midoriPopup.hide, midoriPopup, []);
          break;
        case 13:
          var v612 = this.snippet;
          JAMScript.call(this.replaceSnippet, this, [v612]);
          JAMScript.call(midoriPopup.hide, midoriPopup, []);
          break;
        case 38:
          var v1030 = this.suggestionPos;
          if(v1030) {
            var v1298 = this.suggestionPos;
            v1030 = v1298 != 1
          }
          var v614 = v1030;
          if(v614) {
            var v1031 = this.suggestionPos;
            var v613 = v1031 - 1;
            JAMScript.call(this.highlightSuggestion, this, [v613])
          }
          break;
        case 40:
          var v1032 = this.suggestionPos;
          var v1033 = this.numSuggestions;
          var v616 = v1032 != v1033;
          if(v616) {
            var v1034 = this.suggestionPos;
            var v615 = v1034 + 1;
            JAMScript.call(this.highlightSuggestion, this, [v615])
          }
      }
    }else {
      var v618 = vars$$7.callback2;
      if(v618) {
        JAMScript.call(vars$$7.callback2, vars$$7, [event$$9])
      }
    }
    var v620 = this.obj;
    this.content = v620.value;
    var v1299 = this.content;
    var v1300 = this.oldContent;
    var v1035 = v1299 == v1300;
    var v1303 = !v1035;
    if(v1303) {
      var v1301 = event$$9.keyCode;
      var v1302 = [13, 38, 40];
      v1035 = JAMScript.call(midori.inArray, midori, [v1301, v1302])
    }
    var v621 = v1035;
    if(v621) {
      return
    }
    var changed = false;
    var i$$23 = 0;
    var v622 = this.content;
    var len$$3 = v622.length;
    var v624 = i$$23 < len$$3;
    for(;v624;) {
      var v1304 = this.content;
      var v1036 = v1304.charAt(i$$23);
      var v1305 = this.oldContent;
      var v1037 = v1305.charAt(i$$23);
      var v623 = v1036 != v1037;
      if(v623) {
        changed = true;
        break
      }
      i$$23 = i$$23 + 1;
      v624 = i$$23 < len$$3
    }
    var v1038 = !changed;
    if(v1038) {
      var v1457 = this.oldContent;
      var v1306 = v1457.length;
      v1038 = v1306 < len$$3
    }
    var v625 = v1038;
    if(v625) {
      return
    }
    var v1307 = this.content;
    var v1039 = v1307.charAt(i$$23);
    var v1040 = vars$$7.separator;
    var v627 = v1039 == v1040;
    if(v627) {
      var v626;
      var v1308 = event$$9.keyCode;
      var v1041 = v1308 == 8;
      if(v1041) {
        v626 = i$$23;
        i$$23 = i$$23 - 1
      }else {
        v626 = i$$23;
        i$$23 = i$$23 + 1
      }
      v626
    }
    var j$$4 = i$$23;
    var v629 = j$$4 > 0;
    for(;v629;) {
      var v1309 = this.content;
      var v1042 = v1309.charAt(j$$4);
      var v1043 = vars$$7.separator;
      var v628 = v1042 == v1043;
      if(v628) {
        j$$4 = j$$4 + 1;
        break
      }
      j$$4 = j$$4 - 1;
      v629 = j$$4 > 0
    }
    var v630 = this.content;
    var v631 = i$$23 - j$$4;
    var snippet = v630.substr(j$$4, v631);
    j$$4 = i$$23;
    var v633 = j$$4 < len$$3;
    for(;v633;) {
      var v1310 = this.content;
      var v1044 = v1310.charAt(j$$4);
      var v1045 = vars$$7.separator;
      var v632 = v1044 == v1045;
      if(v632) {
        break
      }
      j$$4 = j$$4 + 1;
      v633 = j$$4 < len$$3
    }
    var v1311 = this.content;
    var v1312 = j$$4 - i$$23;
    var v1046 = v1311.substr(i$$23, v1312);
    snippet = snippet + v1046;
    snippet = JAMScript.call(midori.trim, midori, [snippet]);
    var v1047 = snippet.length;
    var v1048 = vars$$7.minChars;
    var v639 = v1047 >= v1048;
    if(v639) {
      var v1313 = vars$$7.fileName;
      var v1049 = typeof v1313;
      var v638 = v1049 == "string";
      if(v638) {
        var v634 = this.ajax;
        var v635 = vars$$7.fileName;
        var v1050 = vars$$7.params;
        var v1051 = JAMScript.call(midori.trim, midori, [snippet]);
        var v636 = v1050 + v1051;
        JAMScript.call(v634.post, v634, [v635, v636])
      }else {
        var v637 = this.ajax;
        var v1314 = vars$$7.params;
        var v1315 = JAMScript.call(midori.trim, midori, [snippet]);
        var v1052 = v1314 + v1315;
        var v1659 = JAMScript.call(vars$$7.fileName, vars$$7, [v1052]);
        v637.responseText = v1659;
        JAMScript.call(this.ajaxCallback, this, [])
      }
    }
    this.oldContent = this.content;
    return
  }
  var thisObj$$3 = this;
  this.process = v21;
  this.addProperties = v24;
  this.showSuggestions = v25;
  this.highlightSuggestion = v26;
  this.replaceSnippet = v27;
  this.init = v32;
  JAMScript.call(this.init, this, []);
  return
}
function midoriInlineEdit(vars$$8) {
  function v39() {
    var v1316 = this.myObj;
    var v1053 = v1316.getAttribute("editing");
    var v640 = v1053 != "on";
    if(v640) {
      return
    }
    var v1458 = this.editObj;
    var v1317 = v1458.value;
    var v1054 = JAMScript.call(v1317.replace, v1317, ["\n", ""]);
    var v641 = JAMScript.call(v1054.replace, v1054, ["\r", ""]);
    var text$$7 = JAMScript.call(midori.trim, midori, [v641]);
    var v643 = !text$$7;
    if(v643) {
      var v642 = this.editObj;
      v642.value = "";
      return
    }
    var v644 = this.myObj;
    JAMScript.call(v644.setAttribute, v644, ["editing", "off"]);
    var v645 = this.myObj;
    JAMScript.set(v645, "innerHTML", "");
    var v646 = this.myObj;
    JAMScript.set(v646, "innerHTML", text$$7);
    var v648 = vars$$8.callback;
    if(v648) {
      var v647 = this.myObj;
      JAMScript.call(vars$$8.callback, vars$$8, [text$$7, v647])
    }
    return
  }
  function v38() {
    var v1318 = this.myObj;
    var v1055 = v1318.getAttribute("editing");
    var v650 = v1055 == "on";
    if(v650) {
      var v649 = this.editObj;
      JAMScript.call(v649.select, v649, [])
    }
    return
  }
  function v37() {
    function v36(e$$25) {
      JAMScript.call(thisObj$$4.save, thisObj$$4, []);
      return
    }
    function v35(e$$24) {
      var v1319 = e$$24.keyCode;
      var v1056 = v1319 == 13;
      var v1321 = !v1056;
      if(v1321) {
        var v1320 = e$$24.keyCode;
        v1056 = v1320 == 27
      }
      var v651 = v1056;
      if(v651) {
        JAMScript.call(thisObj$$4.save, thisObj$$4, [])
      }
      return
    }
    function v34(e$$23) {
      JAMScript.call(midori.preventBubble, midori, [e$$23]);
      return
    }
    var v1459 = this.myObj;
    var v1322 = v1459.getAttribute("editing");
    var v1057 = v1322 == "on";
    var v1324 = !v1057;
    if(v1324) {
      var v1460 = this.input;
      var v1461 = this.myObj;
      var v1323 = JAMScript.call(midori.get, midori, [v1460, v1461]);
      v1057 = v1323[0]
    }
    var v652 = v1057;
    if(v652) {
      return
    }
    var v1058 = this.myObj;
    var v653 = v1058.innerHTML;
    var value$$31 = JAMScript.call(v653.replace, v653, [/"/g, "&quot;"]);
    var v654 = this.myObj;
    var v1059;
    var v1327 = vars$$8.textArea;
    if(v1327) {
      var v1635 = this.myObj;
      var v1621 = v1635.parentNode;
      var v1597 = v1621.offsetWidth;
      var v1622;
      var v1636 = vars$$8.x;
      if(v1636) {
        v1622 = vars$$8.x
      }else {
        v1622 = 32
      }
      var v1598 = v1622;
      var v1547 = v1597 - v1598;
      var v1462 = v1547 + "px";
      var v1637 = this.myObj;
      var v1623 = v1637.parentNode;
      var v1599 = v1623.offsetHeight;
      var v1624;
      var v1638 = vars$$8.y;
      if(v1638) {
        v1624 = vars$$8.y
      }else {
        v1624 = 32
      }
      var v1600 = v1624;
      var v1548 = v1599 - v1600;
      var v1463 = v1548 + "px";
      var v1325 = {w:v1462, h:v1463, value:value$$31};
      v1059 = JAMScript.call(midori.replace, midori, ['<textarea style="width: :w; height: :h; overflow: auto">:value</textarea>', v1325])
    }else {
      var v1549;
      var v1601 = vars$$8.size;
      if(v1601) {
        v1549 = vars$$8.size
      }else {
        v1549 = ""
      }
      var v1464 = v1549;
      var v1550;
      var v1602 = vars$$8.maxlen;
      if(v1602) {
        v1550 = vars$$8.maxlen
      }else {
        v1550 = ""
      }
      var v1465 = v1550;
      var v1326 = {size:v1464, maxlen:v1465, value:value$$31};
      v1059 = JAMScript.call(midori.replace, midori, ['<input type="text" size=":size" maxlength=":maxlen" value=":value" />', v1326])
    }
    JAMScript.set(v654, "innerHTML", v1059);
    var v1060 = this.input;
    var v1061 = this.myObj;
    var v655 = JAMScript.call(midori.get, midori, [v1060, v1061]);
    this.editObj = v655[0];
    var v656 = this.editObj;
    v656.focus();
    var v657 = this.editObj;
    v657.focus();
    var v658 = this.myObj;
    JAMScript.call(v658.setAttribute, v658, ["editing", "on"]);
    var v659 = this.editObj;
    JAMScript.call(midori.addEventListener, midori, [v659, "mousedown", v34]);
    var v660 = this.editObj;
    JAMScript.call(midori.addEventListener, midori, [v660, "keyup", v35]);
    var v661 = this.editObj;
    JAMScript.call(midori.addEventListener, midori, [v661, "blur", v36]);
    return
  }
  function v33(e$$22) {
    var v1062 = thisObj$$4.editObj;
    if(v1062) {
      var v1328 = JAMScript.call(midori.getEventTarget, midori, [e$$22]);
      var v1329 = thisObj$$4.editObj;
      v1062 = v1328 != v1329
    }
    var v662 = v1062;
    if(v662) {
      JAMScript.call(thisObj$$4.save, thisObj$$4, []);
      JAMScript.call(midori.preventDefault, midori, [e$$22])
    }
    return
  }
  var thisObj$$4 = this;
  var v1063 = vars$$8.id;
  var v663 = "#" + v1063;
  var v1660 = JAMScript.call(midori.get, midori, [v663]);
  this.myObj = v1660;
  this.editObj = "";
  var v664;
  var v1064 = vars$$8.textArea;
  if(v1064) {
    v664 = "textarea"
  }else {
    v664 = "input"
  }
  this.input = v664;
  JAMScript.call(midori.addEventListener, midori, [document, "mouseup", v33]);
  this.edit = v37;
  this.select = v38;
  this.save = v39;
  return
}
var v1065;
var v1331 = window.opera;
if(v1331) {
  v1065 = "Opera"
}else {
  var v1330;
  var v1603 = navigator.userAgent;
  var v1551 = v1603.indexOf("WebKit");
  var v1467 = v1551 != -1;
  if(v1467) {
    v1330 = "Safari"
  }else {
    var v1466;
    var v1625 = navigator.userAgent;
    var v1604 = v1625.indexOf("MSIE");
    var v1552 = v1604 != -1;
    if(v1552) {
      v1466 = "MSIE"
    }else {
      v1466 = "Gecko"
    }
    v1330 = v1466
  }
  v1065 = v1330
}
var v665 = v1065;
var v1066;
var v1553 = navigator.userAgent;
var v1468 = v1553.indexOf("Windows");
var v1333 = v1468 != -1;
if(v1333) {
  v1066 = "Win"
}else {
  var v1332;
  var v1605 = navigator.userAgent;
  var v1554 = v1605.indexOf("Macintosh");
  var v1469 = v1554 != -1;
  if(v1469) {
    v1332 = "Mac"
  }else {
    v1332 = "Other"
  }
  v1066 = v1332
}
var v666 = v1066;
var midori = {browserType:v665, browserOS:v666, domReady:[], each:v40, sibling:v41, parseSelectors:v42, processAttrs:v43, processPseudo:v44, getMatches:v46, get:v48, getCssRule:v49, setStyles:v50, setAttributes:v51, removeNode:v52, addEventListener:v57, runReadyEvents:v58, getEventTarget:v59, getMousePos:v60, preventBubble:v61, preventDefault:v62, getFloat:v63, setFloat:v64, getSelection:v65, getSelectionText:v66, getCookie:v67, setCookie:v68, convertToFields:v69, replace:v70, trim:v71, uniqid:v72, 
concatUnique:v73, implode:v74, inArray:v75, shortenWords:v77, resizeImg:v79, saveCheckboxState:v80, checkRequiredFields:v81, getWindowDims:v82, getPos:v83, highlightRow:v85};
var midoriFX = {intervals:{}, lastIntervalId:0, getOutsideSize:v86, showWithAnim:v87, show:v89, hideWithAnim:v90, hide:v92, scrollToWithAnim:v93, scrollTo:v95, sliderToWithAnim:v96, slider:v98};
var midoriPopup = {show:v99, hide:v100};
JAMScript.call(midori.addEventListener, midori, [document, "mouseup", v101]);
JAMScript.call(midori.addEventListener, midori, [document, "touchend", v102]);
var midoriTab = {selectedTabs:{}, select:v103, init:v107};
var midoriHistory = {history:[], modifyLocation:v108, add:v109, remove:v110, onChange:v111, init:v112};
JAMScript.call(midori.setCookie, midori, [1, 2, 3, 4, 5]);

