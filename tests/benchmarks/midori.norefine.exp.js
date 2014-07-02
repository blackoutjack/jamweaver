function v112(callback$$28) {
  this.callback = callback$$28;
  var v672 = midori.browserType;
  var v114 = v672 == "MSIE";
  if(v114) {
    var v673 = document.body;
    var v674 = document.createElement("div");
    var v113 = JAMScript.call(v673.appendChild, v673, [v674]);
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
  var v1073 = midori.browserType;
  var v677 = v1073 == "MSIE";
  if(v677) {
    var v1468 = JAMScript.call(midori.get, midori, ["#midori_history"]);
    var v1333 = v1468.contentWindow;
    var v1074 = v1333.document;
    var v675 = v1074.getElementById("me");
    v117 = v675.innerText
  }else {
    var v676;
    var v1334 = newLoc.indexOf("#");
    var v1076 = v1334 != -1;
    if(v1076) {
      var v1075 = newLoc.match(/#(.+)$/);
      v676 = v1075[1]
    }else {
      v676 = ""
    }
    v117 = v676
  }
  var item$$3 = v117;
  var v678 = midori.browserType;
  var v120 = v678 == "MSIE";
  if(v120) {
    var v1077 = midoriHistory.oldItem;
    var v679 = v1077 != item$$3;
    if(v679) {
      var v1078 = midoriHistory.history;
      v679 = JAMScript.call(midori.inArray, midori, [item$$3, v1078])
    }
    var v118 = v679;
    if(v118) {
      midoriHistory.oldItem = item$$3;
      JAMScript.call(midoriHistory.modifyLocation, midoriHistory, [item$$3]);
      JAMScript.call(midoriHistory.callback, midoriHistory, [item$$3])
    }
  }else {
    var v1079 = midoriHistory.oldLoc;
    var v680 = v1079 != newLoc;
    if(v680) {
      var v1080 = midoriHistory.history;
      v680 = JAMScript.call(midori.inArray, midori, [item$$3, v1080])
    }
    var v119 = v680;
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
    var v681 = history[i$$17];
    var v123 = v681 == item$$2;
    if(v123) {
      history.splice(i$$17, 1);
      var v122 = i$$17 == len$$1;
      if(v122) {
        var v682 = history.length;
        var v121 = v682 - 1;
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
  var v683 = this.last;
  var v125 = item$$1 == v683;
  if(v125) {
    return
  }
  var v126 = this.history;
  v126.push(item$$1);
  JAMScript.call(this.modifyLocation, this, [item$$1]);
  this.last = item$$1;
  var v684 = midori.browserType;
  var v129 = v684 == "MSIE";
  if(v129) {
    var v685 = JAMScript.call(midori.get, midori, ["#midori_history"]);
    var v127 = v685.contentWindow;
    var iframe = v127.document;
    iframe.open('javascript: "<html></html>"');
    var v686 = '<html><body><div id="me">' + item$$1;
    var v128 = v686 + "</div></body></html>";
    JAMScript.call(iframe.write, iframe, [v128]);
    iframe.close()
  }
  return
}
function v108(item) {
  var v130 = window.location;
  var loc = v130.toString();
  var v131 = window;
  var v687;
  var v1335 = loc.indexOf("#");
  var v1083 = v1335 == -1;
  if(v1083) {
    var v1081 = loc + "#";
    v687 = v1081 + item
  }else {
    var v1082 = "#" + item;
    v687 = JAMScript.call(loc.replace, loc, [/#.+/, v1082])
  }
  v131.location = v687;
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
      var v1084 = o$$6.parentNode;
      var v688 = v1084.className;
      var v135 = v688 == "tab-selected";
      if(v135) {
        var v133 = midoriTab.selectedTabs;
        var v134 = obj$$25.id;
        JAMScript.set(v133, v134, o$$6, JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
        JAMScript.call(midoriTab.select, midoriTab, [o$$6, true])
      }
      JAMScript.call(midori.addEventListener, midori, [o$$6, "click", v104]);
      return
    }
    var v1336 = obj$$25.id;
    var v1085 = "#" + v1336;
    var v689 = v1085 + " a";
    var v136 = JAMScript.call(midori.get, midori, [v689]);
    JAMScript.call(v136.apply, v136, [v105]);
    return
  }
  var v137 = JAMScript.call(midori.get, midori, [".tab-set"]);
  JAMScript.call(v137.apply, v137, [v106]);
  return
}
function v103(obj$$24, noAnim) {
  var tabSet = obj$$24.getAttribute("tabset");
  var v690 = this.selectedTabs;
  var v140 = v690[tabSet];
  if(v140) {
    var v1086 = this.selectedTabs;
    var v691 = v1086[tabSet];
    var v138 = v691.parentNode;
    v138.className = "";
    var v1604 = this.selectedTabs;
    var v1552 = v1604[tabSet];
    var v1469 = v1552.hash;
    var v1337 = v1469.substr(1);
    var v1087 = "#" + v1337;
    var v692 = JAMScript.call(midori.get, midori, [v1087]);
    var v139 = v692.style;
    v139.display = "none"
  }
  var v141 = this.selectedTabs;
  JAMScript.set(v141, tabSet, obj$$24, JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
  var v142 = obj$$24.parentNode;
  v142.className = "tab-selected";
  var v143;
  if(noAnim) {
    var v1553 = obj$$24.hash;
    var v1470 = v1553.substr(1);
    var v1338 = "#" + v1470;
    var v1088 = JAMScript.call(midori.get, midori, [v1338]);
    var v693 = v1088.style;
    v143 = v693.display = "block"
  }else {
    var v1089 = obj$$24.hash;
    var v694 = v1089.substr(1);
    v143 = JAMScript.call(midoriFX.show, midoriFX, [v694])
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
  var v695 = this.activePopup;
  var v144 = v695 == null;
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
  var v1090 = vars$$5.x;
  var v696 = typeof v1090;
  var v147 = v696 == "undefined";
  if(v147) {
    vars$$5.x = 5
  }
  var v1091 = vars$$5.y;
  var v697 = typeof v1091;
  var v148 = v697 == "undefined";
  if(v148) {
    vars$$5.y = -5
  }
  this.popupId = vars$$5.popupId;
  var v698 = vars$$5.popupId;
  var v149 = "#" + v698;
  var popup = JAMScript.call(midori.get, midori, [v149]);
  var dims$$1 = JAMScript.call(midori.getWindowDims, midori, []);
  var v150;
  var v701 = vars$$5.showAtMousePos;
  if(v701) {
    var v699 = vars$$5.event;
    v150 = JAMScript.call(midori.getMousePos, midori, [v699])
  }else {
    var v700 = vars$$5.obj;
    v150 = JAMScript.call(midori.getPos, midori, [v700])
  }
  var popupPos = v150;
  var v151 = popup.style;
  v151.display = "block";
  var v153 = this.activePopup;
  if(v153) {
    var v702 = this.activePopup;
    var v152 = v702.style;
    v152.display = "none"
  }
  var v154 = vars$$5.obj;
  v154.blur();
  var v703 = dims$$1.windowWidth;
  var v1339 = popupPos.x;
  var v1340 = popup.offsetWidth;
  var v1092 = v1339 + v1340;
  var v1093 = vars$$5.x;
  var v704 = v1092 + v1093;
  var v155 = v703 < v704;
  if(v155) {
    var v705 = popupPos.x;
    var v706 = popup.offsetWidth;
    popupPos.x = v705 - v706
  }
  var v1471 = popupPos.y;
  var v1472 = popup.offsetHeight;
  var v1341 = v1471 + v1472;
  var v1342 = vars$$5.y;
  var v1094 = v1341 + v1342;
  var v1095 = dims$$1.scrollTop;
  var v707 = v1094 - v1095;
  var v708 = dims$$1.windowHeight;
  var v156 = v707 > v708;
  for(;v156;) {
    var v709 = popupPos.y;
    var v1096 = popup.offsetHeight;
    var v710 = v1096 + 20;
    popupPos.y = v709 - v710;
    var v1473 = popupPos.y;
    var v1474 = popup.offsetHeight;
    var v1343 = v1473 + v1474;
    var v1344 = vars$$5.y;
    var v1097 = v1343 + v1344;
    var v1098 = dims$$1.scrollTop;
    var v711 = v1097 - v1098;
    var v712 = dims$$1.windowHeight;
    v156 = v711 > v712
  }
  var v1345 = popupPos.x;
  var v1346 = vars$$5.x;
  var v1099 = v1345 + v1346;
  var v713 = v1099 + "px";
  var v1475 = popupPos.y;
  var v1476 = vars$$5.y;
  var v1347 = v1475 + v1476;
  var v1477 = vars$$5.obj;
  var v1348 = v1477.offsetHeight;
  var v1100 = v1347 + v1348;
  var v714 = v1100 + "px";
  var v157 = {left:v713, top:v714};
  JAMScript.call(midori.setStyles, midori, [popup, v157]);
  this.activePopup = popup;
  var v158;
  var v717 = vars$$5.noAnim;
  if(v717) {
    var v715 = popup.style;
    v158 = v715.display = "block"
  }else {
    var v716 = this.popupId;
    v158 = JAMScript.call(midoriFX.show, midoriFX, [v716])
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
  var v718 = vars$$5.hideCallback;
  if(v718) {
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
  var v1101 = "#" + targetId;
  var v719 = JAMScript.call(midori.get, midori, [v1101]);
  var v164 = JAMScript.call(midori.getPos, midori, [v719, container$$1]);
  var targetPos$$3 = v164.x;
  var v165;
  var v1102 = container$$1.style;
  var v721 = v1102.marginLeft;
  if(v721) {
    var v1349 = container$$1.style;
    var v1103 = v1349.marginLeft;
    var v720 = parseInt(v1103, 10);
    v165 = Math.abs(v720)
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
  var v1104;
  var v1350 = currentPos > targetPos$$3;
  if(v1350) {
    v1104 = -1
  }else {
    v1104 = 1
  }
  var v722 = v1104;
  var v723 = JAMScript.call(setInterval, null, [v97, 15]);
  v168[v169] = {targetPos:currentPos, direction:v722, intervalId:v723};
  var v724 = this.intervals;
  var v170 = v724[intervalKey$$3];
  this.lastIntervalId = v170.intervalId;
  return
}
function v96(intervalKey$$2, container, targetPos$$2) {
  var v171 = this.intervals;
  var data$$18 = v171[intervalKey$$2];
  var v725 = data$$18.targetPos;
  var v172 = targetPos$$2 - v725;
  var diff = Math.abs(v172);
  var v173 = data$$18;
  var v1105 = v173.targetPos;
  var v1478 = diff / 8;
  var v1351 = Math.round(v1478);
  var v1352 = data$$18.direction;
  var v1106 = v1351 * v1352;
  v173.targetPos = v1105 + v1106;
  var v174 = container.style;
  var v1107 = data$$18.targetPos;
  var v726 = -v1107;
  v174.marginLeft = v726 + "px";
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
  var v1353 = "#" + id$$2;
  var v1108 = JAMScript.call(midori.get, midori, [v1353]);
  var v727 = JAMScript.call(midori.getPos, midori, [v1108]);
  var v177 = v727.y;
  var v728;
  if(correction) {
    v728 = correction
  }else {
    v728 = 0
  }
  var v178 = v728;
  var targetPos$$1 = v177 + v178;
  var intervalKey$$1 = Math.random();
  var dims = JAMScript.call(midori.getWindowDims, midori, []);
  var v179 = this.intervals;
  var v180 = intervalKey$$1;
  var v729 = dims.scrollTop;
  var v730 = JAMScript.call(setInterval, null, [v94, 15]);
  v179[v180] = {scrollPos:v729, intervalId:v730};
  return
}
function v93(intervalKey, targetPos) {
  var v1554 = this.intervals;
  var v1479 = v1554[intervalKey];
  var v1354 = v1479.scrollPos;
  var v1109 = targetPos - v1354;
  var v731 = Math.abs(v1109);
  var v184 = v731 > 10;
  if(v184) {
    var v732 = this.intervals;
    var v181 = v732[intervalKey];
    var v1110 = v181.scrollPos;
    var v1622 = this.intervals;
    var v1605 = v1622[intervalKey];
    var v1555 = v1605.scrollPos;
    var v1480 = targetPos - v1555;
    var v1355 = v1480 / 8;
    var v1111 = Math.round(v1355);
    v181.scrollPos = v1110 + v1111;
    var v1112 = this.intervals;
    var v733 = v1112[intervalKey];
    var v182 = v733.scrollPos;
    JAMScript.call(scrollTo, null, [0, v182])
  }else {
    var v1113 = this.intervals;
    var v734 = v1113[intervalKey];
    var v183 = v734.intervalId;
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
  var v1114;
  if(horiz$$1) {
    v1114 = element$$6.offsetWidth
  }else {
    v1114 = element$$6.offsetHeight
  }
  var v735 = v1114;
  var v188 = v735 - outsideSize$$1;
  var vars$$4 = {intervalKey:v187, element:element$$6, outsideSize:outsideSize$$1, elementSize:v188, callback:callback$$27, constantSpeed:constantSpeed, what:what$$2};
  var v189 = element$$6.style;
  v189.overflow = "hidden";
  var v190 = this.intervals;
  var v191 = vars$$4.intervalKey;
  var v736 = JAMScript.call(setInterval, null, [v91, 40]);
  v190[v191] = {intervalId:v736};
  return
}
function v90(vars$$3) {
  var v737;
  var v1356 = vars$$3.what;
  var v1117 = v1356 == "width";
  if(v1117) {
    var v1115 = vars$$3.element;
    v737 = v1115.offsetWidth
  }else {
    var v1116 = vars$$3.element;
    v737 = v1116.offsetHeight
  }
  var v192 = v737;
  var v193 = vars$$3.outsideSize;
  var oldSize = v192 - v193;
  var v194;
  var v740 = vars$$3.constantSpeed;
  if(v740) {
    var v738 = vars$$3.oldSize;
    v194 = v738 - 4
  }else {
    var v739 = oldSize / 1.5;
    v194 = Math.round(v739)
  }
  var newSize = v194;
  var v205 = newSize > 2;
  if(v205) {
    var v741 = vars$$3.element;
    var v195 = v741.style;
    var v196 = vars$$3.what;
    var v742 = newSize.toString();
    JAMScript.set(v195, v196, v742 + "px", JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
    var v743 = vars$$3.element;
    var v197 = v743.style;
    v197.opacity = newSize / 50
  }else {
    var v1118 = this.intervals;
    var v1119 = vars$$3.intervalKey;
    var v744 = v1118[v1119];
    var v198 = v744.intervalId;
    clearInterval(v198);
    var v745 = vars$$3.element;
    var v199 = v745.style;
    v199.display = "none";
    var v746 = vars$$3.element;
    var v200 = v746.style;
    var v201 = vars$$3.what;
    var v1120 = vars$$3.elementSize;
    var v747 = v1120.toString();
    JAMScript.set(v200, v201, v747 + "px", JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
    var v748 = vars$$3.element;
    var v202 = v748.style;
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
  var v749 = vars$$2;
  var v1357;
  if(horiz) {
    v1357 = element$$5.offsetWidth
  }else {
    v1357 = element$$5.offsetHeight
  }
  var v1121 = v1357;
  var v1122 = JAMScript.call(this.getOutsideSize, this, [element$$5, what$$1]);
  v749.elementSize = v1121 - v1122;
  var v750 = {display:"none", visibility:"visible"};
  JAMScript.call(midori.setStyles, midori, [element$$5, v750]);
  var v210 = this.intervals;
  var v211 = vars$$2.intervalKey;
  var v751 = JAMScript.call(setInterval, null, [v88, 40]);
  v210[v211] = {newSize:0, intervalId:v751};
  return
}
function v87(vars$$1) {
  var v212;
  var v1358 = this.intervals;
  var v1359 = vars$$1.intervalKey;
  var v1123 = v1358[v1359];
  var v752 = v1123.newSize;
  if(v752) {
    v212 = false
  }else {
    v212 = true
  }
  var firstRun = v212;
  var v753 = this.intervals;
  var v754 = vars$$1.intervalKey;
  var v213 = v753[v754];
  var v1124 = v213.newSize;
  var v1556 = vars$$1.elementSize;
  var v1623 = this.intervals;
  var v1624 = vars$$1.intervalKey;
  var v1606 = v1623[v1624];
  var v1557 = v1606.newSize;
  var v1481 = v1556 - v1557;
  var v1360 = v1481 / 2;
  var v1125 = Math.round(v1360);
  v213.newSize = v1124 + v1125;
  var v1361 = this.intervals;
  var v1362 = vars$$1.intervalKey;
  var v1126 = v1361[v1362];
  var v755 = v1126.newSize;
  var v756 = vars$$1.elementSize;
  var v222 = v755 < v756;
  if(v222) {
    var v757 = vars$$1.element;
    var v214 = v757.style;
    var v215 = vars$$1.what;
    var v1482 = this.intervals;
    var v1483 = vars$$1.intervalKey;
    var v1363 = v1482[v1483];
    var v1127 = v1363.newSize;
    var v758 = v1127.toString();
    JAMScript.set(v214, v215, v758 + "px", JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811)
  }else {
    var v1128 = this.intervals;
    var v1129 = vars$$1.intervalKey;
    var v759 = v1128[v1129];
    var v216 = v759.intervalId;
    clearInterval(v216);
    var v760 = vars$$1.element;
    var v217 = v760.style;
    var v218 = vars$$1.what;
    var v1130 = vars$$1.elementSize;
    var v761 = v1130.toString();
    JAMScript.set(v217, v218, v761 + "px", JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
    var v762 = vars$$1.element;
    var v219 = v762.style;
    v219.overflow = "visible";
    var v221 = vars$$1.callback;
    if(v221) {
      var v220 = vars$$1.element;
      JAMScript.call(vars$$1.callback, vars$$1, [v220])
    }
  }
  if(firstRun) {
    var v763 = vars$$1.element;
    var v223 = v763.style;
    v223.display = "block"
  }
  return
}
function v86(element$$4, what) {
  var v224;
  var v764 = what == "width";
  if(v764) {
    v224 = element$$4.offsetWidth
  }else {
    v224 = element$$4.offsetHeight
  }
  var offsetSize = v224;
  var v225 = element$$4.style;
  var v226 = what;
  var v765 = offsetSize.toString();
  JAMScript.set(v225, v226, v765 + "px", JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
  var v766;
  var v1131 = what == "width";
  if(v1131) {
    v766 = element$$4.offsetWidth
  }else {
    v766 = element$$4.offsetHeight
  }
  var v227 = v766;
  var outsideSize = v227 - offsetSize;
  var v228 = element$$4.style;
  var v229 = what;
  var v1132 = offsetSize - outsideSize;
  var v767 = v1132.toString();
  JAMScript.set(v228, v229, v767 + "px", JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
  return outsideSize
}
function v85(obj$$23, highlightClass, removeAll) {
  function v84(o$$5) {
    var v230 = o$$5.className;
    var className$$1 = v230.split(" ");
    var v231 = o$$5;
    var v768;
    var v1558 = className$$1.length;
    var v1484 = v1558 - 1;
    var v1364 = className$$1[v1484];
    var v1136 = v1364 == highlightClass;
    if(v1136) {
      var v1133 = o$$5.className;
      var v1559 = o$$5.className;
      var v1485 = v1559.length;
      var v1486 = highlightClass.length;
      var v1365 = v1485 - v1486;
      var v1134 = v1365 - 1;
      v768 = v1133.substr(0, v1134)
    }else {
      var v1135;
      if(removeAll) {
        v1135 = o$$5.className
      }else {
        var v1487 = o$$5.className;
        var v1366 = v1487 + " ";
        v1135 = v1366 + highlightClass
      }
      v768 = v1135
    }
    v231.className = v768;
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
  var v769 = obj$$22.offsetParent;
  var v234 = v769 != stopAt;
  for(;v234;) {
    var v1367 = obj$$22.offsetLeft;
    xPos = xPos + v1367;
    var v1488 = obj$$22.offsetTop;
    var v1489 = obj$$22.scrollTop;
    var v1368 = v1488 - v1489;
    yPos = yPos + v1368;
    obj$$22 = obj$$22.offsetParent;
    var v770 = obj$$22.offsetParent;
    v234 = v770 != stopAt
  }
  return{x:xPos, y:yPos}
}
function v82() {
  var v771 = this.browserType;
  var v241 = v771 == "MSIE";
  if(v241) {
    var v772 = document.documentElement;
    var v235 = v772.clientWidth;
    var v773 = document.documentElement;
    var v236 = v773.clientHeight;
    var v774 = document.documentElement;
    var v237 = v774.scrollTop;
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
  var v775 = vars.required;
  var v1640 = v775.split(",");
  v242.required = v1640;
  var v776 = vars.formId;
  var v243 = "#" + v776;
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
    var v1137 = vars.required;
    var v777 = v1137[i$$16];
    var v249 = fieldName = JAMScript.call(this.trim, this, [v777]);
    if(v249) {
      var v245 = "#" + fieldName;
      field = JAMScript.call(this.get, this, [v245]);
      var v246;
      var v1369 = field.type;
      var v1138 = v1369.toLowerCase();
      var v778 = v1138 == "checkbox";
      if(v778) {
        v246 = "c"
      }else {
        v246 = "t"
      }
      fieldType = v246;
      var v247;
      var v780 = fieldType == "c";
      if(v780) {
        var v779 = field.parentNode;
        v247 = v779.style
      }else {
        v247 = field.style
      }
      fieldStyle = v247;
      fieldStyle.backgroundColor = "";
      var v1139 = fieldType == "c";
      if(v1139) {
        var v1370 = field.checked;
        v1139 = !v1370
      }
      var v781 = v1139;
      var v1141 = !v781;
      if(v1141) {
        var v1371 = field.value;
        var v1140 = JAMScript.call(this.trim, this, [v1371]);
        v781 = v1140 == ""
      }
      var v248 = v781;
      if(v248) {
        fieldStyle.backgroundColor = "#FAA";
        stopSubmit = true
      }
    }
    i$$16 = i$$16 + 1;
    v250 = i$$16 < numFields
  }
  var v1372 = vars.formId;
  var v1142 = "#" + v1372;
  var v782 = v1142 + "-status";
  var v251 = JAMScript.call(this.get, this, [v782]);
  var v783;
  if(stopSubmit) {
    v783 = vars.message
  }else {
    v783 = ""
  }
  JAMScript.set(v251, "innerHTML", v783);
  var v252;
  var v784 = vars.callback;
  if(v784) {
    v252 = JAMScript.call(vars.callback, vars, [])
  }else {
    v252 = ""
  }
  var callbackResult = v252;
  var v785 = callbackResult === false;
  var v1143 = !v785;
  if(v1143) {
    v785 = stopSubmit
  }
  var v256 = v785;
  if(v256) {
    var v254 = vars.event;
    if(v254) {
      var v253 = vars.event;
      JAMScript.call(this.preventDefault, this, [v253])
    }
    return false
  }else {
    var v786 = vars.event;
    var v255 = !v786;
    if(v255) {
      form.submit()
    }
  }
  return
}
function v80(element$$3, cb, callback$$25) {
  var v257;
  var v788 = cb.checked;
  if(v788) {
    v257 = element$$3.innerHTML;
    var v1144 = element$$3.innerHTML;
    JAMScript.set(element$$3, "innerHTML", v1144 + 1)
  }else {
    var v787;
    var v1560 = element$$3.innerHTML;
    var v1373 = JAMScript.set(element$$3, "innerHTML", v1560 - 1);
    var v1145 = v1373 == 0;
    if(v1145) {
      v787 = JAMScript.set(element$$3, "innerHTML", "")
    }else {
      v787 = {}
    }
    v257 = v787
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
    var v789 = o$$4.width;
    var v261 = v789 > maxWidth;
    if(v261) {
      var v790 = o$$4.style;
      var v260 = v790.msInterpolationMode;
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
    var v791 = o$$3.nodeType;
    var v264 = v791 != 3;
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
      var v1146 = chunks$$1[i$$15];
      var v792 = stLen = v1146.length;
      var v270 = v792 > maxLen;
      if(v270) {
        var v266 = stLen - maxLen;
        var diffLen = Math.floor(v266);
        var v793 = stLen / 2;
        var v794 = diffLen / 2;
        var v267 = v793 - v794;
        var startPos = Math.floor(v267);
        var v268 = chunks$$1;
        var v269 = i$$15;
        var v1374 = chunks$$1[i$$15];
        var v1147 = v1374.substr(0, startPos);
        var v795 = v1147 + "...";
        var v1148 = chunks$$1[i$$15];
        var v1149 = startPos + diffLen;
        var v796 = v1148.substr(v1149);
        v268[v269] = v795 + v796;
        shortened = true
      }
      i$$15 = i$$15 + 1;
      v271 = i$$15 < numChunks
    }
    if(shortened) {
      var v272 = o$$3;
      var v1641 = JAMScript.call(midori.implode, midori, [" ", chunks$$1]);
      v272.data = v1641
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
    var v1150 = v$$2 != null;
    if(v1150) {
      var v1561 = a$$4[i$$14];
      var v1490 = v1561.constructor;
      var v1375 = v1490 == Array;
      if(v1375) {
        var v1562 = v$$2.constructor;
        var v1491 = v1562 == Array;
        if(v1491) {
          var v1607 = a$$4[i$$14];
          var v1563 = v1607.toString();
          var v1564 = v$$2.toString();
          v1491 = v1563 == v1564
        }
        v1375 = v1491
      }
      v1150 = v1375
    }
    var v797 = v1150;
    var v1152 = !v797;
    if(v1152) {
      var v1151 = a$$4[i$$14];
      v797 = v1151 == v$$2
    }
    var v274 = v797;
    if(v274) {
      return true
    }
    i$$14 = i$$14 + 1;
    v275 = i$$14 < numA$$3
  }
  return
}
function v74(glue, a$$3) {
  var v798 = typeof a$$3;
  var v276 = v798 != "object";
  if(v276) {
    return a$$3
  }
  var o$$2 = "";
  var v799 = a$$3.length;
  if(v799) {
    var v1153 = a$$3.propertyIsEnumerable("length");
    v799 = !v1153
  }
  var v278 = v799;
  if(v278) {
    var i$$13 = 0;
    var numA$$2 = a$$3.length;
    var v277 = i$$13 < numA$$2;
    for(;v277;) {
      var v1154 = a$$3[i$$13];
      var v800 = glue + v1154;
      o$$2 = o$$2 + v800;
      i$$13 = i$$13 + 1;
      v277 = i$$13 < numA$$2
    }
  }else {
    var k$$1;
    for(k$$1 in a$$3) {
      var v1155 = a$$3[k$$1];
      var v801 = glue + v1155;
      o$$2 = o$$2 + v801
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
    var v1156 = a2[i$$12];
    var v802 = JAMScript.call(this.inArray, this, [v1156, a1]);
    var v281 = !v802;
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
  var v803 = Math.random();
  var v1157;
  if(range$$5) {
    v1157 = range$$5
  }else {
    v1157 = 1E5
  }
  var v804 = v1157;
  var v283 = v803 * v804;
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
  var v805 = st.match(/:[A-Za-z0-9_]+/g);
  var v285 = v805.sort();
  var matches$$1 = v285.reverse();
  var i$$11 = 0;
  var numMatches = matches$$1.length;
  var v288 = i$$11 < numMatches;
  for(;v288;) {
    var v286 = matches$$1[i$$11];
    var v806 = params;
    var v1158 = matches$$1[i$$11];
    var v807 = v1158.substr(1);
    var v287 = v806[v807];
    st = JAMScript.call(st.replace, st, [v286, v287]);
    i$$11 = i$$11 + 1;
    v288 = i$$11 < numMatches
  }
  return st
}
function v69(parentNode$$1, prefix$$2, a$$2) {
  var k;
  for(k in a$$2) {
    var v1159 = a$$2[k];
    var v808 = typeof v1159;
    var v292 = v808 == "object";
    if(v292) {
      var v1160 = prefix$$2 + "[";
      var v809 = v1160 + k;
      var v289 = v809 + "]";
      var v290 = a$$2[k];
      JAMScript.call(this.convertToFields, this, [parentNode$$1, v289, v290])
    }else {
      var el = document.createElement("input");
      var v1376 = prefix$$2 + "[";
      var v1161 = v1376 + k;
      var v810 = v1161 + "]";
      var v811 = a$$2[k];
      var v291 = {type:"hidden", name:v810, value:v811};
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
  var v1565 = name$$31 + "=";
  var v1566 = escape(value$$30);
  var v1492 = v1565 + v1566;
  var v1377 = v1492 + "; expires=";
  var v1493 = today.setSeconds(expires);
  var v1378 = today.toUTCString(v1493);
  var v1162 = v1377 + v1378;
  var v1379;
  if(path) {
    v1379 = "; path=" + path
  }else {
    v1379 = ""
  }
  var v1163 = v1379;
  var v812 = v1162 + v1163;
  var v1164;
  if(domain) {
    v1164 = "; domain=" + domain
  }else {
    v1164 = ""
  }
  var v813 = v1164;
  introspect(JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811) {
    v293.cookie = v812 + v813
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
    var v814 = parts[0];
    var v297 = v814 == cookieName;
    if(v297) {
      var v815 = parts[1];
      var v296 = JAMScript.call(v815.replace, v815, [/\+/g, " "]);
      return unescape(v296)
    }
    i$$10 = i$$10 + 1;
    v298 = i$$10 < numCookies
  }
  return
}
function v66(cursorPos$$1) {
  var v299;
  var v1165 = this.browserType;
  var v816 = v1165 == "MSIE";
  if(v816) {
    v299 = cursorPos$$1.htmlText
  }else {
    v299 = cursorPos$$1.toString()
  }
  return v299
}
function v65(target$$40) {
  var v817 = this.browserType;
  var v300 = v817 != "MSIE";
  if(v300) {
    return JAMScript.call(target$$40.getSelection, target$$40, [])
  }
  var v301 = target$$40 == window;
  if(v301) {
    target$$40 = document
  }
  var v302 = target$$40.selection;
  var cursorPos = v302.createRange();
  var v1166 = target$$40.selection;
  var v818 = v1166.type;
  var v303 = v818 != "Control";
  if(v303) {
    return cursorPos
  }
  return
}
function v64(o$$1, v$$1) {
  var v304;
  var v1167 = this.browserType;
  var v821 = v1167 == "MSIE";
  if(v821) {
    var v819 = o$$1.style;
    v304 = v819.styleFloat = v$$1
  }else {
    var v820 = o$$1.style;
    v304 = v820.cssFloat = v$$1
  }
  v304;
  return
}
function v63(o) {
  var v305;
  var v1168 = this.browserType;
  var v824 = v1168 == "MSIE";
  if(v824) {
    var v822 = o.style;
    v305 = v822.styleFloat
  }else {
    var v823 = o.style;
    v305 = v823.cssFloat
  }
  return v305
}
function v62(event$$4) {
  var v306;
  var v826 = event$$4.preventDefault;
  if(v826) {
    v306 = JAMScript.call(event$$4.preventDefault, event$$4, [])
  }else {
    var v825 = window.event;
    v306 = v825.returnValue = false
  }
  v306;
  return
}
function v61(event$$3) {
  var v307;
  var v828 = event$$3.stopPropagation;
  if(v828) {
    v307 = event$$3.stopPropagation()
  }else {
    var v827 = window.event;
    v307 = v827.cancelBubble = true
  }
  v307;
  return
}
function v60(event$$2) {
  var v829 = event$$2.targetTouches;
  if(v829) {
    var v1169 = event$$2.targetTouches;
    v829 = v1169.length
  }
  var v315 = v829;
  if(v315) {
    var v1170 = event$$2.targetTouches;
    var v830 = v1170[0];
    var v308 = v830.pageX;
    var v1171 = event$$2.targetTouches;
    var v831 = v1171[0];
    var v309 = v831.pageY;
    return{x:v308, y:v309}
  }else {
    var v832 = event$$2.pageX;
    var v1172 = !v832;
    if(v1172) {
      v832 = event$$2.pageY
    }
    var v314 = v832;
    if(v314) {
      var v310 = event$$2.pageX;
      var v311 = event$$2.pageY;
      return{x:v310, y:v311}
    }else {
      var v1173 = event$$2.clientX;
      var v1380 = document.documentElement;
      var v1174 = v1380.scrollLeft;
      var v833 = v1173 + v1174;
      var v1175 = document.body;
      var v834 = v1175.clientLeft;
      var v312 = v833 - v834;
      var v1176 = event$$2.clientY;
      var v1381 = document.documentElement;
      var v1177 = v1381.scrollTop;
      var v835 = v1176 + v1177;
      var v1178 = document.body;
      var v836 = v1178.clientTop;
      var v313 = v835 - v836;
      return{x:v312, y:v313}
    }
  }
  return
}
function v59(event$$1) {
  var v316;
  var v837 = event$$1.target;
  if(v837) {
    v316 = event$$1.target
  }else {
    v316 = event$$1.srcElement
  }
  var target$$39 = v316;
  var v838 = target$$39.nodeType;
  var v317 = v838 == 3;
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
      var v839 = this.readyState;
      var v323 = v839 == "complete";
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
      var v840 = document.readyState;
      var v325 = /loaded|complete/.test(v840);
      if(v325) {
        JAMScript.call(midori.runReadyEvents, midori, [])
      }
      return
    }
    var v1642 = JAMScript.call(setInterval, null, [v53, 10]);
    this.readyTimer = v1642;
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
          var v841 = this.readyTimer;
          var v327 = !v841;
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
    var v1179 = this.domReady;
    var v842 = v1179.length;
    var v331 = !v842;
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
    var v844 = i$$8 == "className";
    if(v844) {
      v336 = obj$$18.className = attrList[i$$8]
    }else {
      var v843 = attrList[i$$8];
      v336 = JAMScript.call(obj$$18.setAttribute, obj$$18, [i$$8, v843])
    }
    v336
  }
  return
}
function v50(obj$$17, styleList) {
  var i$$7;
  for(i$$7 in styleList) {
    var v337;
    var v847 = i$$7 == "float";
    if(v847) {
      var v845 = styleList[i$$7];
      v337 = JAMScript.call(this.setFloat, this, [obj$$17, v845])
    }else {
      var v846 = obj$$17.style;
      var v1659 = JAMScript.set(v846, i$$7, styleList[i$$7], JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
      introspect(JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811) {
        v337 = v1659
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
  var v848 = rules.rules;
  if(v848) {
    v339 = rules.rules
  }else {
    v339 = rules.cssRules
  }
  rules = v339;
  rule$$2 = rule$$2.toLowerCase();
  var v340;
  var v1180 = this.browserType;
  var v850 = v1180 == "Safari";
  if(v850) {
    var v849 = JAMScript.call(property$$3.replace, property$$3, [/([A-Z])/, "-$1"]);
    v340 = v849.toLowerCase()
  }else {
    v340 = property$$3.toLowerCase()
  }
  property$$3 = v340;
  var i$$6 = 0;
  var numRules = rules.length;
  var v353 = i$$6 < numRules;
  for(;v353;) {
    var v851 = rule$$2 == "*";
    var v1182 = !v851;
    if(v1182) {
      var v1494 = rules[i$$6];
      var v1382 = v1494.selectorText;
      var v1181 = v1382.toLowerCase();
      v851 = v1181 == rule$$2
    }
    var v352 = v851;
    if(v352) {
      var j$$1;
      var v852 = rules[i$$6];
      var v351 = v852.style;
      for(j$$1 in v351) {
        var v853 = this.browserType;
        var v350 = v853 == "Safari";
        if(v350) {
          var v1495 = rules[i$$6];
          var v1383 = v1495.style;
          var v1183 = v1383[j$$1];
          var v854 = v1183.toLowerCase;
          if(v854) {
            var v1567 = rules[i$$6];
            var v1496 = v1567.style;
            var v1384 = v1496[j$$1];
            var v1184 = v1384.toLowerCase();
            v854 = v1184 == property$$3
          }
          var v345 = v854;
          if(v345) {
            var v344 = rule$$2 == "*";
            if(v344) {
              var v855 = rules[i$$6];
              var v341 = v855.selectorText;
              JAMScript.set(values$$4, v341, value, JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811)
            }else {
              var v856 = rules[i$$6];
              var v342 = v856.style;
              var v1185 = rules[i$$6];
              var v857 = v1185.style;
              var v343 = v857[j$$1];
              return v342[v343]
            }
          }
        }else {
          var v858 = j$$1.toLowerCase();
          var v349 = v858 == property$$3;
          if(v349) {
            var v348 = rule$$2 == "*";
            if(v348) {
              var v859 = rules[i$$6];
              var v346 = v859.selectorText;
              var v1186 = rules[i$$6];
              var v860 = v1186.style;
              JAMScript.set(values$$4, v346, v860[j$$1], JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811)
            }else {
              var v861 = rules[i$$6];
              var v347 = v861.style;
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
      var v1187 = typeof p;
      var v864 = v1187 == "function";
      if(v864) {
        var v862 = this[i$$5];
        v354 = JAMScript.call(p, null, [v862])
      }else {
        var v863 = "this[i]." + p;
        if(JAMScript.isEval(eval)) {
          v354 = eval("introspect(JAMScript.introspectors.processAll) { " + v863 + " }")
        }else {
          v354 = JAMScript.call(eval, null, [v863])
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
    var v865 = selectors$$7["elements"];
    var v358 = v865[0];
    var idMatch = v358.match(/^[a-z0-9*]*#([^,:]+)$/i);
    var v866 = idMatch;
    if(v866) {
      var v1497 = selectors$$7["attrs"];
      var v1385 = v1497[0];
      var v1188 = v1385 == "";
      if(v1188) {
        var v1386 = selectors$$7["separators"];
        v1188 = v1386 == ""
      }
      v866 = v1188
    }
    var v360 = v866;
    if(v360) {
      var v359 = idMatch[1];
      return document.getElementById(v359)
    }
  }
  var v867 = selectors$$7["elements"];
  var v362 = v867[0];
  var v868 = selectors$$7["attrs"];
  var v363 = v868[0];
  var objs$$1 = JAMScript.call(this.getMatches, this, [startAt, v362, v363]);
  var allObjs = [];
  var newObjs;
  var separator;
  var i$$4 = 1;
  var v372 = i$$4 < numS;
  for(;v372;) {
    newObjs = [];
    var v869 = selectors$$7["separators"];
    var v870 = i$$4 - 1;
    var v364 = v869[v870];
    separator = JAMScript.call(this.trim, this, [v364]);
    var v371 = separator == ",";
    if(v371) {
      allObjs = JAMScript.call(this.concatUnique, this, [allObjs, objs$$1]);
      var v871 = selectors$$7["elements"];
      var v365 = v871[i$$4];
      var v872 = selectors$$7["attrs"];
      var v366 = v872[i$$4];
      objs$$1 = JAMScript.call(this.getMatches, this, [startAt, v365, v366])
    }else {
      var v367;
      var v873 = separator == ">";
      if(v873) {
        v367 = true
      }else {
        v367 = false
      }
      var oneLevelOnly$$1 = v367;
      var j = 0;
      var numObjs$$1 = objs$$1.length;
      var v370 = j < numObjs$$1;
      for(;v370;) {
        var v1189 = objs$$1[j];
        var v874 = JAMScript.call(this.inArray, this, [v1189, newObjs]);
        var v369 = !v874;
        if(v369) {
          var v875 = objs$$1[j];
          var v1190 = selectors$$7["elements"];
          var v876 = v1190[i$$4];
          var v1191 = selectors$$7["attrs"];
          var v877 = v1191[i$$4];
          var v368 = JAMScript.call(this.getMatches, this, [v875, v876, v877]);
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
    var v878 = !numA$$1;
    if(v878) {
      v878 = !pseudo
    }
    var v373 = v878;
    if(v373) {
      matches.push(me);
      return
    }
    var match$$2 = true;
    var v879 = numA$$1;
    if(v879) {
      var v1192 = JAMScript.call(this.processAttrs, this, [me, a$$1, exprs$$1]);
      v879 = !v1192
    }
    var v374 = v879;
    if(v374) {
      match$$2 = false
    }
    var v880 = pseudo;
    if(v880) {
      var v1193 = JAMScript.call(this.processPseudo, this, [me, pSelector$$1, pA$$1, pB$$1]);
      v880 = !v1193
    }
    var v375 = v880;
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
  var v388 = i$$3 < numA$$1;
  for(;v388;) {
    var v376 = a$$1[i$$3];
    chunks = v376.match(/([a-z0-9_-]+)\s*([=^$*|!]{0,2})\s*"?([^"]*)"?$/i);
    a$$1[i$$3] = chunks[1];
    var v387 = chunks[2];
    switch(v387) {
      case "=":
        var v377 = exprs$$1;
        var v378 = i$$3;
        var v1387 = chunks[3];
        var v1194 = "^" + v1387;
        var v881 = v1194 + "$";
        var v1643 = new RegExp(v881, "i");
        v377[v378] = v1643;
        break;
      case "^=":
        var v379 = exprs$$1;
        var v380 = i$$3;
        var v1195 = chunks[3];
        var v882 = "^" + v1195;
        var v1644 = new RegExp(v882, "i");
        v379[v380] = v1644;
        break;
      case "$=":
        var v381 = exprs$$1;
        var v382 = i$$3;
        var v1196 = chunks[3];
        var v883 = v1196 + "$";
        var v1645 = new RegExp(v883, "i");
        v381[v382] = v1645;
        break;
      case "*=":
        var v383 = exprs$$1;
        var v384 = i$$3;
        var v884 = chunks[3];
        var v1646 = new RegExp(v884, "i");
        v383[v384] = v1646;
        break;
      case "&=":
        var v385 = exprs$$1;
        var v386 = i$$3;
        var v1638 = chunks[3];
        var v1636 = "^" + v1638;
        var v1625 = v1636 + "$|^";
        var v1626 = chunks[3];
        var v1608 = v1625 + v1626;
        var v1568 = v1608 + "\\s|\\s";
        var v1569 = chunks[3];
        var v1498 = v1568 + v1569;
        var v1388 = v1498 + "\\s|\\s";
        var v1389 = chunks[3];
        var v1197 = v1388 + v1389;
        var v885 = v1197 + "$";
        var v1647 = new RegExp(v885, "i");
        v385[v386] = v1647;
        break;
      case "!=":
        exprs$$1[i$$3] = chunks[3]
    }
    i$$3 = i$$3 + 1;
    v388 = i$$3 < numA$$1
  }
  var v886 = s$$2.indexOf(":");
  var v394 = v886 != -1;
  if(v394) {
    chunks = s$$2.split(":");
    s$$2 = chunks[0];
    var v389 = chunks[1];
    pseudo = v389.match(/([a-z-]+)\(?([a-z0-9+-]*)\)?/i);
    var v390 = pseudo[1];
    pSelector$$1 = v390.toLowerCase();
    var v887 = pseudo[2];
    var v391 = pOption = v887.toLowerCase();
    switch(v391) {
      case "odd":
        pOption = "2n+1";
        break;
      case "even":
        pOption = "2n"
    }
    chunks = pOption.match(/([0-9+-]*)(n?)([0-9+-]*)/i);
    var v888;
    var v1199 = chunks[2];
    if(v1199) {
      var v1198;
      var v1391 = chunks[1];
      if(v1391) {
        var v1390;
        var v1570 = chunks[1];
        var v1499 = v1570 == "-";
        if(v1499) {
          v1390 = -1
        }else {
          v1390 = chunks[1]
        }
        v1198 = v1390
      }else {
        v1198 = 1
      }
      v888 = v1198
    }else {
      v888 = 0
    }
    var v392 = v888;
    pA$$1 = parseInt(v392);
    var v889;
    var v1201 = chunks[3];
    if(v1201) {
      v889 = chunks[3]
    }else {
      var v1200;
      var v1500 = chunks[1];
      if(v1500) {
        var v1571 = chunks[2];
        v1500 = !v1571
      }
      var v1392 = v1500;
      if(v1392) {
        v1200 = chunks[1]
      }else {
        v1200 = 0
      }
      v889 = v1200
    }
    var v393 = v889;
    pB$$1 = parseInt(v393)
  }
  var v890 = s$$2.indexOf("#");
  var v407 = v890 != -1;
  if(v407) {
    var v1393 = s$$2.indexOf("#");
    var v1202 = v1393 + 1;
    var v891 = s$$2.substr(v1202);
    var v395 = document.getElementById(v891);
    JAMScript.call(this.postProcess, this, [v395])
  }else {
    var v892 = s$$2.indexOf(".");
    var v406 = v892 != -1;
    if(v406) {
      chunks = s$$2.split(".");
      var v1394 = chunks[0];
      var v1203 = v1394.length;
      var v893 = v1203 + 1;
      var v396 = s$$2.substr(v893);
      var classMatch = JAMScript.call(v396.replace, v396, [".", " "]);
      var v1627 = "^" + classMatch;
      var v1609 = v1627 + "$|^";
      var v1572 = v1609 + classMatch;
      var v1501 = v1572 + "\\s|\\s";
      var v1395 = v1501 + classMatch;
      var v1204 = v1395 + "\\s|\\s";
      var v894 = v1204 + classMatch;
      var v397 = v894 + "$";
      var className = new RegExp(v397, "i");
      var v895;
      var v1205 = chunks[0];
      if(v1205) {
        v895 = chunks[0]
      }else {
        v895 = "*"
      }
      var v398 = v895;
      objs = target$$37.getElementsByTagName(v398);
      i$$3 = 0;
      numObjs = objs.length;
      var v401 = i$$3 < numObjs;
      for(;v401;) {
        var v1206 = !oneLevelOnly;
        if(v1206) {
          var v1502 = objs[i$$3];
          var v1396 = v1502.className;
          v1206 = className.test(v1396)
        }
        var v896 = v1206;
        var v1208 = !v896;
        if(v1208) {
          var v1207 = oneLevelOnly;
          if(v1207) {
            var v1573 = objs[i$$3];
            var v1503 = v1573.className;
            var v1397 = className.test(v1503);
            if(v1397) {
              var v1574 = objs[i$$3];
              var v1504 = v1574.parentNode;
              v1397 = v1504 == target$$37
            }
            v1207 = v1397
          }
          v896 = v1207
        }
        var v400 = v896;
        if(v400) {
          var v399 = objs[i$$3];
          JAMScript.call(this.postProcess, this, [v399])
        }
        i$$3 = i$$3 + 1;
        v401 = i$$3 < numObjs
      }
    }else {
      var v897 = s$$2 == "*";
      var v1209 = !v897;
      if(v1209) {
        v897 = /^[A-Za-z0-9]+$/.test(s$$2)
      }
      var v405 = v897;
      if(v405) {
        i$$3 = 0;
        objs = target$$37.getElementsByTagName(s$$2);
        numObjs = objs.length;
        var v404 = i$$3 < numObjs;
        for(;v404;) {
          var v898 = !oneLevelOnly;
          var v1211 = !v898;
          if(v1211) {
            var v1210 = oneLevelOnly;
            if(v1210) {
              var v1505 = objs[i$$3];
              var v1398 = v1505.parentNode;
              v1210 = v1398 == target$$37
            }
            v898 = v1210
          }
          var v403 = v898;
          if(v403) {
            var v402 = objs[i$$3];
            JAMScript.call(this.postProcess, this, [v402])
          }
          i$$3 = i$$3 + 1;
          v404 = i$$3 < numObjs
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
  var v1212 = match$$1.parentNode;
  var v899 = nodeKey = v1212.getAttribute("midorinodekey");
  var v410 = !v899;
  if(v410) {
    var v408 = match$$1.parentNode;
    var v1213 = Math.random();
    var v900 = v1213.toString();
    var v409 = nodeKey = v900.substr(2);
    JAMScript.call(v408.setAttribute, v408, ["midorinodekey", v409])
  }
  var v901 = this.pCache;
  var v414 = pCache = v901[nodeKey];
  if(v414) {
    parentChildren = pCache["parentChildren"];
    pI = pCache["pI"]
  }else {
    var v411 = match$$1.parentNode;
    var c$$2 = v411.firstChild;
    for(;c$$2;) {
      var v902 = c$$2.nodeType;
      var v412 = v902 == 1;
      if(v412) {
        parentChildren.push(c$$2)
      }
      c$$2 = c$$2.nextSibling
    }
    var v413 = this.pCache;
    JAMScript.set(v413, nodeKey, {parentChildren:parentChildren, pI:0}, JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811)
  }
  var parentNumChildren = parentChildren.length;
  switch(pSelector) {
    case "first-child":
      var v903 = parentChildren[0];
      var v415 = match$$1 == v903;
      if(v415) {
        return true
      }
      break;
    case "last-child":
      var v1214 = parentNumChildren - 1;
      var v904 = parentChildren[v1214];
      var v416 = match$$1 == v904;
      if(v416) {
        return true
      }
      break;
    case "only-child":
      var v417 = parentNumChildren == 1;
      if(v417) {
        return true
      }
  }
  var v423 = pSelector == "nth-child";
  if(v423) {
    var v418 = pA * pI;
    var v = v418 + pB;
    var oldV = -50;
    var v905 = v > -50;
    if(v905) {
      v905 = v <= parentNumChildren
    }
    var v422 = v905;
    for(;v422;) {
      var v906 = v >= 0;
      if(v906) {
        var v1399 = v - 1;
        var v1215 = parentChildren[v1399];
        v906 = v1215 == match$$1
      }
      var v420 = v906;
      if(v420) {
        var v907 = this.pCache;
        var v419 = v907[nodeKey];
        var v908;
        var v1216 = pA >= 0;
        if(v1216) {
          v908 = pI + 1
        }else {
          v908 = 0
        }
        v419["pI"] = v908;
        return true
      }
      pI = pI + 1;
      v = v + pA;
      var v421 = v == oldV;
      if(v421) {
        break
      }
      oldV = v;
      var v909 = v > -50;
      if(v909) {
        v909 = v <= parentNumChildren
      }
      v422 = v909
    }
  }
  return
}
function v43(match, a, exprs) {
  var i$$2 = 0;
  var numA = a.length;
  var attr;
  var v429 = i$$2 < numA;
  for(;v429;) {
    var v424;
    var v1217 = a[i$$2];
    var v912 = v1217 == "class";
    if(v912) {
      var v910;
      var v1218 = match.className;
      if(v1218) {
        v910 = match.className
      }else {
        v910 = null
      }
      v424 = v910
    }else {
      var v911 = a[i$$2];
      v424 = match.getAttribute(v911)
    }
    attr = v424;
    var v913 = exprs[i$$2];
    var v428 = typeof v913;
    switch(v428) {
      case "undefined":
        var v425 = attr == null;
        if(v425) {
          return false
        }
        break;
      case "string":
        var v914 = exprs[i$$2];
        var v426 = attr == v914;
        if(v426) {
          return false
        }
        break;
      default:
        var v1219 = exprs[i$$2];
        var v915 = v1219.test(attr);
        var v427 = !v915;
        if(v427) {
          return false
        }
    }
    i$$2 = i$$2 + 1;
    v429 = i$$2 < numA
  }
  return true
}
function v42(selectorText) {
  var v430 = JAMScript.call(this.trim, this, [selectorText]);
  var c$$1 = v430.split("");
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
  for(;v437;) {
    if(inSelector) {
      if(inBrackets) {
        var v433 = c$$1[i$$1];
        switch(v433) {
          case '"':
            inQuotes = !inQuotes;
            break;
          case "]":
            var v432 = !inQuotes;
            if(v432) {
              var v431 = attrs[sI];
              v431.push(bracketContent);
              inBrackets = false;
              bracketContent = ""
            }
            break;
          case "\\":
            var v1220 = i$$1 = i$$1 + 1;
            var v916 = c$$1[v1220];
            bracketContent = bracketContent + v916;
            break;
          default:
            var v917 = c$$1[i$$1];
            bracketContent = bracketContent + v917
        }
      }else {
        var v434 = c$$1[i$$1];
        switch(v434) {
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
            var v918 = elements[sI];
            var v1221 = i$$1 = i$$1 + 1;
            var v919 = c$$1[v1221];
            elements[sI] = v918 + v919;
            break;
          default:
            var v920 = elements[sI];
            var v921 = c$$1[i$$1];
            elements[sI] = v920 + v921
        }
      }
    }else {
      var v436 = c$$1[i$$1];
      switch(v436) {
        case " ":
        ;
        case ">":
        ;
        case ",":
          var v922 = separators[sI];
          var v923 = c$$1[i$$1];
          separators[sI] = v922 + v923;
          break;
        default:
          inSelector = true;
          var v435 = sI = sI + 1;
          elements[v435] = c$$1[i$$1];
          attrs[sI] = []
      }
    }
    i$$1 = i$$1 + 1;
    v437 = i$$1 < len
  }
  return{elements:elements, attrs:attrs, separators:separators}
}
function v41(obj$$16, direction$$3) {
  var sibling = obj$$16;
  var v441 = direction$$3 == "next";
  if(v441) {
    var v924 = sibling;
    if(v924) {
      var v1222 = sibling.nodeType;
      v924 = v1222 == 3
    }
    var v438 = v924;
    do {
      sibling = sibling.nextSibling;
      var v925 = sibling;
      if(v925) {
        var v1223 = sibling.nodeType;
        v925 = v1223 == 3
      }
      v438 = v925
    }while(v438)
  }else {
    var v440 = direction$$3 == "prev";
    if(v440) {
      var v926 = sibling;
      if(v926) {
        var v1224 = sibling.nodeType;
        v926 = v1224 == 3
      }
      var v439 = v926;
      do {
        sibling = sibling.previousSibling;
        var v927 = sibling;
        if(v927) {
          var v1225 = sibling.nodeType;
          v927 = v1225 == 3
        }
        v439 = v927
      }while(v439)
    }
  }
  var v442;
  var v928 = sibling == obj$$16;
  if(v928) {
    v442 = false
  }else {
    v442 = sibling
  }
  return v442
}
function v40(parentObj, callBack, depthFirst) {
  var c = parentObj.firstChild;
  for(;c;) {
    var v443 = !depthFirst;
    if(v443) {
      JAMScript.call(callBack, null, [c])
    }
    var v444 = c.firstChild;
    if(v444) {
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
    var v445 = this.rowIds;
    var numRowIds = v445.length;
    var v1628 = this.vars;
    var v1610 = v1628.rowPrefix;
    var v1575 = "#" + v1610;
    var v1506 = v1575 + "header-cb";
    var v1400 = JAMScript.call(midori.get, midori, [v1506]);
    var v1226 = v1400.style;
    var v929 = v1226.display;
    var v460 = v929 == "none";
    if(v460) {
      var v1576 = this.vars;
      var v1507 = v1576.rowPrefix;
      var v1401 = "#" + v1507;
      var v1227 = v1401 + "header-cb";
      var v930 = JAMScript.call(midori.get, midori, [v1227]);
      var v446 = v930.style;
      v446.display = "";
      var i$$19 = 0;
      var v452 = i$$19 < numRowIds;
      for(;v452;) {
        var v447 = this.rowIds;
        var rowId = v447[i$$19];
        var v1611 = this.vars;
        var v1577 = v1611.rowPrefix;
        var v1508 = "#" + v1577;
        var v1402 = v1508 + "cb_";
        var v1228 = v1402 + rowId;
        var v931 = JAMScript.call(midori.get, midori, [v1228]);
        var v448 = v931.style;
        v448.display = "";
        var v1629 = this.vars;
        var v1612 = v1629.rowPrefix;
        var v1578 = "#" + v1612;
        var v1509 = v1578 + "cb_";
        var v1403 = v1509 + rowId;
        var v1229 = JAMScript.call(midori.get, midori, [v1403]);
        var v932 = v1229.firstChild;
        var v451 = v932.checked;
        if(v451) {
          var v1510 = this.vars;
          var v1404 = v1510.rowPrefix;
          var v1230 = "#" + v1404;
          var v933 = v1230 + rowId;
          var v449 = JAMScript.call(midori.get, midori, [v933]);
          var v934 = this.vars;
          var v450 = v934.rowHighlight;
          JAMScript.call(midori.highlightRow, midori, [v449, v450])
        }
        i$$19 = i$$19 + 1;
        v452 = i$$19 < numRowIds
      }
      var v453 = vars$$6.showCallback;
      if(v453) {
        JAMScript.call(vars$$6.showCallback, vars$$6, [this])
      }
    }else {
      var v1579 = this.vars;
      var v1511 = v1579.rowPrefix;
      var v1405 = "#" + v1511;
      var v1231 = v1405 + "header-cb";
      var v935 = JAMScript.call(midori.get, midori, [v1231]);
      var v454 = v935.style;
      v454.display = "none";
      i$$19 = 0;
      var v458 = i$$19 < numRowIds;
      for(;v458;) {
        var v1613 = this.vars;
        var v1580 = v1613.rowPrefix;
        var v1512 = "#" + v1580;
        var v1406 = v1512 + "cb_";
        var v1513 = this.rowIds;
        var v1407 = v1513[i$$19];
        var v1232 = v1406 + v1407;
        var v936 = JAMScript.call(midori.get, midori, [v1232]);
        var v455 = v936.style;
        v455.display = "none";
        var v1514 = this.vars;
        var v1408 = v1514.rowPrefix;
        var v1233 = "#" + v1408;
        var v1409 = this.rowIds;
        var v1234 = v1409[i$$19];
        var v937 = v1233 + v1234;
        var v456 = JAMScript.call(midori.get, midori, [v937]);
        var v938 = this.vars;
        var v457 = v938.rowHighlight;
        JAMScript.call(midori.highlightRow, midori, [v456, v457, true]);
        i$$19 = i$$19 + 1;
        v458 = i$$19 < numRowIds
      }
      var v459 = vars$$6.hideCallback;
      if(v459) {
        JAMScript.call(vars$$6.hideCallback, vars$$6, [this])
      }
    }
    return
  }
  function v3(o$$7) {
    function v2(e$$8) {
      var v1410 = vars$$6.rowPrefix;
      var v1235 = "#" + v1410;
      var v939 = v1235 + id$$4;
      var v461 = JAMScript.call(midori.get, midori, [v939]);
      var v462 = vars$$6.rowHighlight;
      JAMScript.call(midori.highlightRow, midori, [v461, v462]);
      var v1411 = vars$$6.tableId;
      var v1236 = "#" + v1411;
      var v940 = v1236 + "_cb_parent";
      var v463 = JAMScript.call(midori.get, midori, [v940]);
      JAMScript.call(midori.saveCheckboxState, midori, [v463, el$$2]);
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
    var v464 = JAMScript.call(midori.get, midori, ["td:last-child", o$$7]);
    JAMScript.call(v464.apply, v464, [v1]);
    var v465 = o$$7.id;
    var v941 = vars$$6.rowPrefix;
    var v466 = v941.length;
    id$$4 = v465.substr(v466);
    td = document.createElement("td");
    var v467 = td.style;
    v467.display = "none";
    var v1412 = vars$$6.rowPrefix;
    var v1237 = v1412 + "cb_";
    var v942 = v1237 + id$$4;
    var v468 = {id:v942, className:className$$2};
    JAMScript.call(midori.setAttributes, midori, [td, v468]);
    el$$2 = document.createElement("input");
    var v943 = vars$$6.checkboxName;
    var v469 = {name:v943, type:"checkbox", value:id$$4};
    JAMScript.call(midori.setAttributes, midori, [el$$2, v469]);
    JAMScript.call(midori.addEventListener, midori, [el$$2, "click", v2]);
    JAMScript.call(td.appendChild, td, [el$$2]);
    JAMScript.call(o$$7.appendChild, o$$7, [td]);
    var v470 = thisObj.rowIds;
    v470.push(id$$4);
    return
  }
  function v0(e$$7) {
    var id$$3;
    var el$$1;
    var isChecked;
    var i$$18 = 0;
    var v471 = thisObj.rowIds;
    var numIds = v471.length;
    var v478 = i$$18 < numIds;
    for(;v478;) {
      var v472 = thisObj.rowIds;
      id$$3 = v472[i$$18];
      var v1515 = vars$$6.rowPrefix;
      var v1413 = "#" + v1515;
      var v1238 = v1413 + "cb_";
      var v944 = v1238 + id$$3;
      var v473 = JAMScript.call(midori.get, midori, [v944]);
      el$$1 = v473.firstChild;
      isChecked = el$$1.checked;
      el$$1.checked = !isChecked;
      var v474;
      if(isChecked) {
        v474 = ""
      }else {
        v474 = id$$3
      }
      el$$1.value = v474;
      var v1414 = vars$$6.rowPrefix;
      var v1239 = "#" + v1414;
      var v945 = v1239 + id$$3;
      var v475 = JAMScript.call(midori.get, midori, [v945]);
      var v476 = vars$$6.rowHighlight;
      JAMScript.call(midori.highlightRow, midori, [v475, v476]);
      var v1415 = vars$$6.tableId;
      var v1240 = "#" + v1415;
      var v946 = v1240 + "_cb_parent";
      var v477 = JAMScript.call(midori.get, midori, [v946]);
      JAMScript.call(midori.saveCheckboxState, midori, [v477, el$$1]);
      i$$18 = i$$18 + 1;
      v478 = i$$18 < numIds
    }
    return
  }
  this.vars = vars$$6;
  this.rowIds = [];
  var thisObj = this;
  var cb$$1 = document.createElement("input");
  JAMScript.call(cb$$1.setAttribute, cb$$1, ["type", "checkbox"]);
  JAMScript.call(midori.addEventListener, midori, [cb$$1, "click", v0]);
  var v1416 = vars$$6.tableId;
  var v1241 = "#" + v1416;
  var v947 = v1241 + " th";
  var v479 = JAMScript.call(midori.get, midori, [v947]);
  var firstTh = v479[0];
  var th = document.createElement("th");
  var v1242 = vars$$6.rowPrefix;
  var v948 = v1242 + "header-cb";
  var v949 = firstTh.className;
  var v480 = {id:v948, align:"left", className:v949};
  JAMScript.call(midori.setAttributes, midori, [th, v480]);
  JAMScript.call(th.appendChild, th, [cb$$1]);
  var v481 = th.style;
  v481.display = "none";
  var v482 = firstTh.parentNode;
  JAMScript.call(v482.appendChild, v482, [th]);
  var cbParent = document.createElement("div");
  var v483 = vars$$6.tableId;
  cbParent.id = v483 + "_cb_parent";
  var v484 = document.body;
  JAMScript.call(v484.appendChild, v484, [cbParent]);
  var v1581 = vars$$6.tableId;
  var v1516 = "#" + v1581;
  var v1417 = v1516 + ' tr[id^="';
  var v1418 = vars$$6.rowPrefix;
  var v1243 = v1417 + v1418;
  var v950 = v1243 + '"]';
  var v485 = JAMScript.call(midori.get, midori, [v950]);
  JAMScript.call(v485.apply, v485, [v3]);
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
    var v486 = thisObj$$1.doneDragging;
    if(v486) {
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
    var v1244 = o$$10.obj;
    var v951 = v1244.className;
    var v489 = /drop-target/.test(v951);
    if(v489) {
      var v487 = o$$10.obj;
      var v952;
      if(spacer) {
        v952 = spacer
      }else {
        v952 = dragged
      }
      var v488 = v952;
      return JAMScript.call(v487.appendChild, v487, [v488])
    }
    var v490;
    var v1419 = o$$10.where;
    var v1245 = v1419 == "next";
    if(v1245) {
      var v1517 = o$$10.obj;
      var v1420 = v1517.nextSibling;
      v1245 = !v1420
    }
    var v958 = v1245;
    if(v958) {
      var v1246 = o$$10.obj;
      var v953 = v1246.parentNode;
      var v1247;
      if(spacer) {
        v1247 = spacer
      }else {
        v1247 = dragged
      }
      var v954 = v1247;
      v490 = JAMScript.call(v953.appendChild, v953, [v954])
    }else {
      var v1248 = o$$10.obj;
      var v955 = v1248.parentNode;
      var v1249;
      if(spacer) {
        v1249 = spacer
      }else {
        v1249 = dragged
      }
      var v956 = v1249;
      var v1250;
      var v1518 = o$$10.where;
      var v1422 = v1518 == "prev";
      if(v1422) {
        v1250 = o$$10.obj
      }else {
        var v1421 = o$$10.obj;
        v1250 = v1421.nextSibling
      }
      var v957 = v1250;
      v490 = JAMScript.call(v955.insertBefore, v955, [v956, v957])
    }
    return v490
  }
  function v12(event$$7) {
    this.doneDragging = false;
    var v959 = this.dragged;
    var v491 = !v959;
    if(v491) {
      return
    }
    var objCoords$$2;
    var v960 = this.mouseMoved;
    if(v960) {
      v960 = objCoords$$2 = JAMScript.call(this.findPlace, this, [event$$7, true])
    }
    var v493 = v960;
    if(v493) {
      var v492 = this.dragged;
      JAMScript.call(this.dropCallback, this, [objCoords$$2, v492]);
      this.doneDragging = true
    }
    var v961 = this.dragged;
    var v494 = !v961;
    if(v494) {
      return
    }
    var v962 = this.spacer;
    var v495 = v962.style;
    v495.display = "none";
    var v496 = this.dragged;
    var v497 = {position:"", opacity:"1"};
    JAMScript.call(midori.setStyles, midori, [v496, v497]);
    var v498 = this.container;
    JAMScript.call(this.init, this, [v498]);
    return
  }
  function v11(event$$6) {
    var v1251 = this.dragged;
    var v963 = !v1251;
    var v1253 = !v963;
    if(v1253) {
      var v1423 = this.dragged;
      var v1252 = v1423.className;
      v963 = /drop-target/.test(v1252)
    }
    var v499 = v963;
    if(v499) {
      return
    }
    JAMScript.call(midori.preventDefault, midori, [event$$6]);
    var mousePos$$2 = JAMScript.call(midori.getMousePos, midori, [event$$6]);
    this.lastMousePos = mousePos$$2;
    this.mouseMoved = true;
    var v500 = this.dragged;
    var v1424 = mousePos$$2.x;
    var v1519 = this.mouseOffset;
    var v1425 = v1519.x;
    var v1254 = v1424 - v1425;
    var v964 = v1254 + "px";
    var v1426 = mousePos$$2.y;
    var v1520 = this.mouseOffset;
    var v1427 = v1520.y;
    var v1255 = v1426 - v1427;
    var v965 = v1255 + "px";
    var v501 = {position:"absolute", left:v964, top:v965};
    JAMScript.call(midori.setStyles, midori, [v500, v501]);
    var v502 = this.spacer;
    var v966 = this.dragged;
    var v503 = JAMScript.call(midori.getFloat, midori, [v966]);
    JAMScript.call(midori.setFloat, midori, [v502, v503]);
    var objCoords$$1;
    var v967 = objCoords$$1 = JAMScript.call(this.findPlace, this, [event$$6]);
    if(v967) {
      var v1256 = this.dragged;
      var v1257 = this.spacer;
      v967 = JAMScript.call(this.dropCallback, this, [objCoords$$1, v1256, v1257])
    }
    var v509 = v967;
    if(v509) {
      var v504 = this.spacer;
      var v1428 = this.dragged;
      var v1258 = v1428.offsetHeight;
      var v968 = v1258 + "px";
      var v505 = {display:"block", height:v968};
      JAMScript.call(midori.setStyles, midori, [v504, v505]);
      var v969 = this.spacer;
      var v507 = JAMScript.call(midori.getFloat, midori, [v969]);
      if(v507) {
        var v970 = this.spacer;
        var v506 = v970.style;
        var v1259 = this.dragged;
        var v971 = v1259.offsetWidth;
        v506.width = v971 + "px"
      }
    }else {
      var v972 = this.spacer;
      var v508 = v972.style;
      v508.display = "none"
    }
    return
  }
  function v10(parentObj$$1) {
    function v9(o$$9) {
      var v1260 = o$$9.className;
      var v973 = /draggable/.test(v1260);
      var v510 = !v973;
      if(v510) {
        return
      }
      j$$3 = 0;
      var v513 = j$$3 < numObjs$$4;
      for(;v513;) {
        var v1261 = thisObj$$1.objs;
        var v974 = v1261[j$$3];
        var v512 = v974 == o$$9;
        if(v512) {
          var v511 = thisObj$$1.objs;
          JAMScript.set(v511, j$$3, "", JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
          break
        }
        j$$3 = j$$3 + 1;
        v513 = j$$3 < numObjs$$4
      }
      return
    }
    var j$$3;
    var v514 = this.objs;
    var numObjs$$4 = v514.length;
    JAMScript.call(midori.each, midori, [parentObj$$1, v9, true]);
    j$$3 = 0;
    var v517 = j$$3 < numObjs$$4;
    for(;v517;) {
      var v1262 = this.objs;
      var v975 = v1262[j$$3];
      var v516 = v975 == parentObj$$1;
      if(v516) {
        var v515 = this.objs;
        JAMScript.set(v515, j$$3, "", JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
        break
      }
      j$$3 = j$$3 + 1;
      v517 = j$$3 < numObjs$$4
    }
    return
  }
  function v8(event$$5, mouseUp) {
    var v518;
    var v1263 = mouseUp;
    if(v1263) {
      v1263 = event$$5.targetTouches
    }
    var v976 = v1263;
    if(v976) {
      v518 = this.lastMousePos
    }else {
      v518 = JAMScript.call(midori.getMousePos, midori, [event$$5])
    }
    var mousePos$$1 = v518;
    var obj$$26;
    var objCoords;
    var objPos$$1;
    var v1264 = this.objsCoords;
    var v977 = v1264.length;
    var v524 = !v977;
    if(v524) {
      var i$$21 = 0;
      var v519 = this.objs;
      var numObjs$$3 = v519.length;
      var v523 = i$$21 < numObjs$$3;
      for(;v523;) {
        var v1265 = this.objs;
        var v978 = obj$$26 = v1265[i$$21];
        if(v978) {
          v978 = objPos$$1 = JAMScript.call(midori.getPos, midori, [obj$$26])
        }
        var v522 = v978;
        if(v522) {
          var v520 = this.objsCoords;
          var v979 = objPos$$1.x;
          var v980 = objPos$$1.y;
          var v981 = obj$$26.offsetWidth;
          var v982 = obj$$26.offsetHeight;
          var v521 = {obj:obj$$26, x:v979, y:v980, width:v981, height:v982};
          v520.push(v521)
        }
        i$$21 = i$$21 + 1;
        v523 = i$$21 < numObjs$$3
      }
    }
    var j$$2 = 0;
    var v525 = this.objsCoords;
    var numObjsCoords = v525.length;
    var v529 = j$$2 < numObjsCoords;
    for(;v529;) {
      var v983 = this.objsCoords;
      var v528 = objCoords = v983[j$$2];
      if(v528) {
        var v1521 = mousePos$$1.x;
        var v1522 = objCoords.x;
        var v1429 = v1521 >= v1522;
        if(v1429) {
          var v1523 = mousePos$$1.x;
          var v1582 = objCoords.x;
          var v1583 = objCoords.width;
          var v1524 = v1582 + v1583;
          v1429 = v1523 <= v1524
        }
        var v1266 = v1429;
        if(v1266) {
          var v1525 = mousePos$$1.y;
          var v1526 = objCoords.y;
          var v1430 = v1525 >= v1526;
          if(v1430) {
            var v1527 = mousePos$$1.y;
            var v1584 = objCoords.y;
            var v1585 = objCoords.height;
            var v1528 = v1584 + v1585;
            v1430 = v1527 <= v1528
          }
          v1266 = v1430
        }
        var v984 = v1266;
        var v526 = !v984;
        if(v526) {
          j$$2 = j$$2 + 1;
          v529 = j$$2 < numObjsCoords;
          continue
        }
        var v527 = objCoords;
        var v985;
        var v1431 = objCoords.obj;
        var v1269 = JAMScript.call(midori.getFloat, midori, [v1431]);
        if(v1269) {
          var v1267;
          var v1529 = mousePos$$1.x;
          var v1586 = objCoords.x;
          var v1614 = objCoords.width;
          var v1587 = v1614 / 2;
          var v1530 = v1586 + v1587;
          var v1432 = v1529 < v1530;
          if(v1432) {
            v1267 = "prev"
          }else {
            v1267 = "next"
          }
          v985 = v1267
        }else {
          var v1268;
          var v1531 = mousePos$$1.y;
          var v1588 = objCoords.y;
          var v1615 = objCoords.height;
          var v1589 = v1615 / 2;
          var v1532 = v1588 + v1589;
          var v1433 = v1531 < v1532;
          if(v1433) {
            v1268 = "prev"
          }else {
            v1268 = "next"
          }
          v985 = v1268
        }
        v527.where = v985;
        return objCoords
      }
      j$$2 = j$$2 + 1;
      v529 = j$$2 < numObjsCoords
    }
    return
  }
  function v7() {
    function v6(o$$8) {
      function v5(e$$9) {
        var mousePos = JAMScript.call(midori.getMousePos, midori, [e$$9]);
        var me$$2 = JAMScript.call(midori.getEventTarget, midori, [e$$9]);
        var v986 = me$$2.className;
        var v530 = /not-draggable/.test(v986);
        if(v530) {
          return
        }
        var v1270 = me$$2.className;
        var v987 = /draggable/.test(v1270);
        var v531 = !v987;
        for(;v531;) {
          me$$2 = me$$2.parentNode;
          var v1271 = me$$2.className;
          var v988 = /draggable/.test(v1271);
          v531 = !v988
        }
        var objPos = JAMScript.call(midori.getPos, midori, [me$$2]);
        thisObj$$1.dragged = me$$2;
        var v989 = mousePos.x;
        var v990 = objPos.x;
        var v532 = v989 - v990;
        var v991 = mousePos.y;
        var v992 = objPos.y;
        var v533 = v991 - v992;
        thisObj$$1.mouseOffset = {x:v532, y:v533};
        var v1272 = o$$8.className;
        var v993 = /drop-target/.test(v1272);
        var v535 = !v993;
        if(v535) {
          var v534 = me$$2.style;
          v534.opacity = ".5";
          JAMScript.call(midori.preventBubble, midori, [e$$9]);
          JAMScript.call(midori.preventDefault, midori, [e$$9])
        }
        JAMScript.call(thisObj$$1.removeDraggedObj, thisObj$$1, [me$$2]);
        return
      }
      var v1273 = o$$8.className;
      var v994 = /not-draggable/.test(v1273);
      var v1275 = !v994;
      if(v1275) {
        var v1533 = o$$8.className;
        var v1434 = /draggable/.test(v1533);
        var v1274 = !v1434;
        var v1436 = !v1274;
        if(v1436) {
          var v1534 = o$$8.style;
          var v1435 = v1534.display;
          v1274 = v1435 == "none"
        }
        v994 = v1274
      }
      var v536 = v994;
      if(v536) {
        return
      }
      var v537 = thisObj$$1.objs;
      v537.push(o$$8);
      var i$$20 = 0;
      var v539 = i$$20 < 2;
      for(;v539;) {
        var v995 = ["mousedown", "touchstart"];
        var v538 = v995[i$$20];
        JAMScript.call(midori.addEventListener, midori, [o$$8, v538, v5]);
        i$$20 = i$$20 + 1;
        v539 = i$$20 < 2
      }
      return
    }
    this.objs = [];
    this.objsCoords = [];
    this.mouseMoved = false;
    this.dragged = null;
    var v540 = this.container;
    JAMScript.call(midori.each, midori, [v540, v6, true]);
    return
  }
  var thisObj$$1 = this;
  var v541 = "#" + containerId$$1;
  var v1648 = JAMScript.call(midori.get, midori, [v541]);
  this.container = v1648;
  this.init = v7;
  this.findPlace = v8;
  this.removeDraggedObj = v10;
  this.mouseMove = v11;
  this.mouseUp = v12;
  this.defaultDropCallback = v13;
  var v542 = this.container;
  JAMScript.call(midori.addEventListener, midori, [v542, "mousemove", v14]);
  var v543 = this.container;
  JAMScript.call(midori.addEventListener, midori, [v543, "mouseup", v15]);
  var v544 = this.container;
  JAMScript.call(midori.addEventListener, midori, [v544, "click", v16]);
  var v545 = this.container;
  JAMScript.call(midori.addEventListener, midori, [v545, "touchmove", v17]);
  var v546 = this.container;
  JAMScript.call(midori.addEventListener, midori, [v546, "touchend", v18]);
  var v1649 = document.createElement("div");
  this.spacer = v1649;
  var v547 = this.spacer;
  JAMScript.set(v547, "innerHTML", "&nbsp;");
  var v548 = this.spacer;
  var v1276 = JAMScript.call(midori.uniqid, midori, []);
  var v996 = "midori_dd_spacer" + v1276;
  var v549 = {id:v996, className:"midori-dd-spacer"};
  JAMScript.call(midori.setAttributes, midori, [v548, v549]);
  var v550;
  if(dropCallback) {
    v550 = dropCallback
  }else {
    v550 = this.defaultDropCallback
  }
  this.dropCallback = v550;
  JAMScript.call(this.init, this, []);
  return
}
function midoriAjax(callback$$29, params$$1, cache) {
  function v20(where, what$$3, verb, headers) {
    var cachedValue;
    var v551 = where + "?";
    this.cacheKey = v551 + what$$3;
    var v997 = cache;
    if(v997) {
      var v1437 = this.cache;
      var v1438 = this.cacheKey;
      var v1277 = cachedValue = v1437[v1438];
      v997 = v1277 != null
    }
    var v552 = v997;
    if(v552) {
      this.responseText = cachedValue;
      JAMScript.call(this.runCallback, this, ["", true]);
      return
    }
    var v553 = this.request;
    JAMScript.set(v553, "onreadystatechange", this.runCallback);
    var v554;
    if(verb) {
      var v1439;
      var v1535 = verb == true;
      if(v1535) {
        v1439 = "GET"
      }else {
        v1439 = verb
      }
      var v1278 = v1439;
      var v998 = v1278.toUpperCase();
      v554 = JAMScript.call(midori.trim, midori, [v998])
    }else {
      v554 = "POST"
    }
    verb = v554;
    var v555 = this.request;
    var v999;
    var v1440 = ["POST", "PUT"];
    var v1280 = JAMScript.call(midori.inArray, midori, [verb, v1440]);
    if(v1280) {
      v999 = where
    }else {
      var v1441;
      if(what$$3) {
        v1441 = "?" + what$$3
      }else {
        v1441 = ""
      }
      var v1279 = v1441;
      v999 = where + v1279
    }
    var v556 = v999;
    v555.open(verb, v556, true);
    var v1000 = ["POST", "PUT"];
    var v561 = JAMScript.call(midori.inArray, midori, [verb, v1000]);
    if(v561) {
      var v557 = this.request;
      v557.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
      var v558 = this.request;
      var v559 = what$$3.length;
      v558.setRequestHeader("Content-length", v559);
      var v560 = this.request;
      v560.setRequestHeader("Connection", "close")
    }
    if(headers) {
      var i$$22 = 0;
      var len$$2 = headers.length;
      var v565 = i$$22 < len$$2;
      for(;v565;) {
        var v562 = this.request;
        var v1001 = headers[i$$22];
        var v563 = v1001[0];
        var v1002 = headers[i$$22];
        var v564 = v1002[1];
        v562.setRequestHeader(v563, v564);
        i$$22 = i$$22 + 1;
        v565 = i$$22 < len$$2
      }
    }
    var v566 = this.request;
    var v1003;
    var v1442 = ["POST", "PUT"];
    var v1281 = JAMScript.call(midori.inArray, midori, [verb, v1442]);
    if(v1281) {
      v1003 = what$$3
    }else {
      v1003 = null
    }
    var v567 = v1003;
    v566.send(v567);
    return
  }
  function v19(event$$8, cached) {
    var v574 = !cached;
    if(v574) {
      var v1282 = thisObj$$2.request;
      var v1004 = v1282.readyState;
      var v568 = v1004 != 4;
      if(v568) {
        return
      }
      var v569 = thisObj$$2.request;
      thisObj$$2.responseText = v569.responseText;
      var v570 = thisObj$$2.request;
      thisObj$$2.responseXML = v570.responseXML;
      var v571 = thisObj$$2.request;
      thisObj$$2.status = v571.status;
      var v572 = thisObj$$2.cache;
      var v573 = thisObj$$2.cacheKey;
      JAMScript.set(v572, v573, thisObj$$2.responseText, JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811)
    }
    JAMScript.call(thisObj$$2.callback, thisObj$$2, [params$$1]);
    return
  }
  var thisObj$$2 = this;
  this.cache = {};
  this.callback = callback$$29;
  try {
    var v1650 = new XMLHttpRequest;
    this.request = v1650
  }catch(e$$15) {
    try {
      var v1651 = JAMScript.new(ActiveXObject, ["Msxml2.XMLHTTP"]);
      this.request = v1651
    }catch(e$$16) {
      var v1652 = JAMScript.new(ActiveXObject, ["Microsoft.XMLHTTP"]);
      this.request = v1652
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
      var v1005 = e$$20.keyCode;
      var v575 = v1005 == 13;
      if(v575) {
        return false
      }
      return
    }
    function v29(e$$19) {
      var v1006 = e$$19.keyCode;
      var v576 = v1006 == 13;
      if(v576) {
        JAMScript.call(midori.preventDefault, midori, [e$$19])
      }
      return
    }
    function v28() {
      var v1007 = thisObj$$3.ajax;
      var v581 = v1007.responseText;
      if(v581) {
        var v577;
        var v1536 = thisObj$$3.ajax;
        var v1443 = v1536.responseText;
        var v1283 = typeof v1443;
        var v1010 = v1283 == "string";
        if(v1010) {
          var v1537 = thisObj$$3.ajax;
          var v1444 = v1537.responseText;
          var v1284 = "(" + v1444;
          var v1008 = v1284 + ")";
          if(JAMScript.isEval(eval)) {
            v577 = eval("introspect(JAMScript.introspectors.processAll) { " + v1008 + " }")
          }else {
            v577 = JAMScript.call(eval, null, [v1008])
          }
        }else {
          var v1009 = thisObj$$3.ajax;
          v577 = v1009.responseText
        }
        var response = v577;
        var v578 = thisObj$$3.suggestions;
        var v579 = response["snippet"];
        JAMScript.set(v578, v579, response["result"], JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811);
        var v580 = response["snippet"];
        JAMScript.call(thisObj$$3.showSuggestions, thisObj$$3, [v580])
      }
      return
    }
    var v1011 = vars$$7.separator;
    var v582 = !v1011;
    if(v582) {
      vars$$7.separator = ""
    }
    this.ajaxCallback = v28;
    var v1653 = JAMScript.call(midori.uniqid, midori, []);
    this.uniqid = v1653;
    var v1012 = vars$$7.id;
    var v583 = "#" + v1012;
    var v1654 = JAMScript.call(midori.get, midori, [v583]);
    this.obj = v1654;
    var v584 = this.obj;
    this.content = v584.value;
    this.oldContent = this.content;
    this.suggestions = [];
    var v585;
    var v1445 = vars$$7.fileName;
    var v1285 = typeof v1445;
    var v1014 = v1285 == "string";
    if(v1014) {
      var v1013 = this.ajaxCallback;
      v585 = new midoriAjax(v1013, "", true)
    }else {
      v585 = {}
    }
    this.ajax = v585;
    var v1015 = this.browserType;
    var v588 = v1015 != "Gecko";
    if(v588) {
      var parentNode$$2 = this.obj;
      JAMScript.call(midori.addEventListener, midori, [parentNode$$2, "keypress", v29]);
      var v1016 = parentNode$$2.parentNode;
      var v587 = v1016 != null;
      for(;v587;) {
        parentNode$$2 = parentNode$$2.parentNode;
        var v1286 = parentNode$$2.nodeName;
        var v1017 = v1286.toLowerCase();
        var v586 = v1017 == "form";
        if(v586) {
          JAMScript.call(midori.addEventListener, midori, [parentNode$$2, "keypress", v30])
        }
        var v1018 = parentNode$$2.parentNode;
        v587 = v1018 != null
      }
    }
    var v589 = this.obj;
    JAMScript.call(v589.setAttribute, v589, ["autocomplete", "off"]);
    var v590 = this.obj;
    JAMScript.call(midori.addEventListener, midori, [v590, "keyup", v31]);
    return
  }
  function v27(snippet$$3) {
    var pos = 0;
    var i$$25;
    var v1019 = this.suggestions;
    var v593 = v1019[snippet$$3];
    for(i$$25 in v593) {
      var v1020 = pos = pos + 1;
      var v1021 = this.suggestionPos;
      var v592 = v1020 == v1021;
      if(v592) {
        var v591 = this.obj;
        var v1287 = this.obj;
        var v1022 = v1287.value;
        var v1288;
        var v1448 = vars$$7.callback;
        if(v1448) {
          var v1590 = this.suggestions;
          var v1538 = v1590[snippet$$3];
          var v1446 = v1538[i$$25];
          v1288 = JAMScript.call(vars$$7.callback, vars$$7, [v1446])
        }else {
          var v1539 = this.suggestions;
          var v1447 = v1539[snippet$$3];
          v1288 = v1447[i$$25]
        }
        var v1023 = v1288;
        var v1655 = JAMScript.call(v1022.replace, v1022, [snippet$$3, v1023]);
        v591.value = v1655;
        break
      }
    }
    var v594 = this.obj;
    this.content = v594.value;
    this.oldContent = this.content;
    var v595 = this.obj;
    v595.focus();
    return
  }
  function v26(suggestionPos) {
    var v1540 = this.popupId;
    var v1449 = "#" + v1540;
    var v1289 = v1449 + " .";
    var v1450 = vars$$7.suggestionSelectedClass;
    var v1290 = JAMScript.call(v1450.replace, v1450, [" ", "."]);
    var v1024 = v1289 + v1290;
    var v596 = JAMScript.call(midori.get, midori, [v1024]);
    var v1291 = vars$$7.suggestionClass;
    var v1025 = "className = '" + v1291;
    var v597 = v1025 + "'";
    JAMScript.call(v596.apply, v596, [v597]);
    var v1541 = this.uniqid;
    var v1451 = "#midori_suggestion" + v1541;
    var v1292 = v1451 + "_";
    var v1026 = v1292 + suggestionPos;
    var v598 = JAMScript.call(midori.get, midori, [v1026]);
    v598.className = vars$$7.suggestionSelectedClass;
    this.suggestionPos = suggestionPos;
    return
  }
  function v25(snippet$$2) {
    var v599 = this.suggestions;
    var suggestions = v599[snippet$$2];
    var html = "";
    var properties = [];
    var i$$24 = 0;
    var j$$5 = 0;
    var k$$2 = "";
    for(i$$24 in suggestions) {
      var v602 = vars$$7.htmlTemplate;
      if(v602) {
        var v601 = suggestions[i$$24];
        for(k$$2 in v601) {
          var v600 = suggestions[i$$24];
          JAMScript.set(properties, k$$2, v600[k$$2], JAMScript.introspectors.process425E08A28862414CF7130381FE99A660F52DB811)
        }
      }
      var v1027 = html;
      var v1639 = this.uniqid;
      var v1637 = '<a id="midori_suggestion' + v1639;
      var v1630 = v1637 + "_";
      var v1631 = j$$5 = j$$5 + 1;
      var v1616 = v1630 + v1631;
      var v1591 = v1616 + '" class="';
      var v1592 = vars$$7.suggestionClass;
      var v1542 = v1591 + v1592;
      var v1452 = v1542 + '" href="#">';
      var v1543;
      var v1594 = vars$$7.htmlTemplate;
      if(v1594) {
        var v1593 = vars$$7.htmlTemplate;
        v1543 = JAMScript.call(midori.replace, midori, [v1593, properties])
      }else {
        v1543 = suggestions[i$$24]
      }
      var v1453 = v1543;
      var v1293 = v1452 + v1453;
      var v1028 = v1293 + "</a>\n";
      html = v1027 + v1028
    }
    var v603 = !html;
    if(v603) {
      JAMScript.call(midoriPopup.hide, midoriPopup, []);
      return
    }
    this.snippet = snippet$$2;
    this.suggestionPos = 0;
    this.numSuggestions = j$$5;
    var v605 = this.popup;
    if(v605) {
      var v604 = this.popup;
      JAMScript.call(midori.removeNode, midori, [v604])
    }
    var v606 = this.uniqid;
    this.popupId = "midori_suggestions" + v606;
    var v1656 = document.createElement("div");
    this.popup = v1656;
    var v607 = this.popup;
    var v1029 = this.popupId;
    var v608 = {id:v1029, className:"popup"};
    JAMScript.call(midori.setAttributes, midori, [v607, v608]);
    var v609 = document.body;
    var v610 = this.popup;
    JAMScript.call(v609.appendChild, v609, [v610]);
    var v611 = this.popup;
    JAMScript.set(v611, "innerHTML", html);
    j$$5 = 0;
    var v1030 = this.suggestions;
    var v613 = v1030[snippet$$2];
    for(i$$24 in v613) {
      var v612 = j$$5 = j$$5 + 1;
      JAMScript.call(this.addProperties, this, [v612, snippet$$2])
    }
    var v1031 = this.obj;
    var v1032 = this.popupId;
    var v614 = {obj:v1031, popupId:v1032, x:0, y:0, noAnim:true};
    JAMScript.call(midoriPopup.show, midoriPopup, [v614]);
    var v615 = this.obj;
    v615.focus();
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
    var v1454 = this.uniqid;
    var v1294 = "#midori_suggestion" + v1454;
    var v1033 = v1294 + "_";
    var v616 = v1033 + id$$5;
    var obj$$27 = JAMScript.call(midori.get, midori, [v616]);
    JAMScript.call(midori.addEventListener, midori, [obj$$27, "mouseover", v22]);
    JAMScript.call(midori.addEventListener, midori, [obj$$27, "click", v23]);
    return
  }
  function v21(event$$9) {
    var v1034 = this.popup;
    if(v1034) {
      var v1295 = this.popup;
      var v1296 = midoriPopup.activePopup;
      v1034 = v1295 == v1296
    }
    var v624 = v1034;
    if(v624) {
      var v622 = event$$9.keyCode;
      switch(v622) {
        case 27:
        ;
        case 37:
        ;
        case 39:
          JAMScript.call(midoriPopup.hide, midoriPopup, []);
          break;
        case 13:
          var v617 = this.snippet;
          JAMScript.call(this.replaceSnippet, this, [v617]);
          JAMScript.call(midoriPopup.hide, midoriPopup, []);
          break;
        case 38:
          var v1035 = this.suggestionPos;
          if(v1035) {
            var v1297 = this.suggestionPos;
            v1035 = v1297 != 1
          }
          var v619 = v1035;
          if(v619) {
            var v1036 = this.suggestionPos;
            var v618 = v1036 - 1;
            JAMScript.call(this.highlightSuggestion, this, [v618])
          }
          break;
        case 40:
          var v1037 = this.suggestionPos;
          var v1038 = this.numSuggestions;
          var v621 = v1037 != v1038;
          if(v621) {
            var v1039 = this.suggestionPos;
            var v620 = v1039 + 1;
            JAMScript.call(this.highlightSuggestion, this, [v620])
          }
      }
    }else {
      var v623 = vars$$7.callback2;
      if(v623) {
        JAMScript.call(vars$$7.callback2, vars$$7, [event$$9])
      }
    }
    var v625 = this.obj;
    this.content = v625.value;
    var v1298 = this.content;
    var v1299 = this.oldContent;
    var v1040 = v1298 == v1299;
    var v1302 = !v1040;
    if(v1302) {
      var v1300 = event$$9.keyCode;
      var v1301 = [13, 38, 40];
      v1040 = JAMScript.call(midori.inArray, midori, [v1300, v1301])
    }
    var v626 = v1040;
    if(v626) {
      return
    }
    var changed = false;
    var i$$23 = 0;
    var v627 = this.content;
    var len$$3 = v627.length;
    var v629 = i$$23 < len$$3;
    for(;v629;) {
      var v1303 = this.content;
      var v1041 = v1303.charAt(i$$23);
      var v1304 = this.oldContent;
      var v1042 = v1304.charAt(i$$23);
      var v628 = v1041 != v1042;
      if(v628) {
        changed = true;
        break
      }
      i$$23 = i$$23 + 1;
      v629 = i$$23 < len$$3
    }
    var v1043 = !changed;
    if(v1043) {
      var v1455 = this.oldContent;
      var v1305 = v1455.length;
      v1043 = v1305 < len$$3
    }
    var v630 = v1043;
    if(v630) {
      return
    }
    var v1306 = this.content;
    var v1044 = v1306.charAt(i$$23);
    var v1045 = vars$$7.separator;
    var v632 = v1044 == v1045;
    if(v632) {
      var v631;
      var v1307 = event$$9.keyCode;
      var v1046 = v1307 == 8;
      if(v1046) {
        v631 = i$$23;
        i$$23 = i$$23 - 1
      }else {
        v631 = i$$23;
        i$$23 = i$$23 + 1
      }
      v631
    }
    var j$$4 = i$$23;
    var v634 = j$$4 > 0;
    for(;v634;) {
      var v1308 = this.content;
      var v1047 = v1308.charAt(j$$4);
      var v1048 = vars$$7.separator;
      var v633 = v1047 == v1048;
      if(v633) {
        j$$4 = j$$4 + 1;
        break
      }
      j$$4 = j$$4 - 1;
      v634 = j$$4 > 0
    }
    var v635 = this.content;
    var v636 = i$$23 - j$$4;
    var snippet = v635.substr(j$$4, v636);
    j$$4 = i$$23;
    var v638 = j$$4 < len$$3;
    for(;v638;) {
      var v1309 = this.content;
      var v1049 = v1309.charAt(j$$4);
      var v1050 = vars$$7.separator;
      var v637 = v1049 == v1050;
      if(v637) {
        break
      }
      j$$4 = j$$4 + 1;
      v638 = j$$4 < len$$3
    }
    var v1051 = snippet;
    var v1310 = this.content;
    var v1311 = j$$4 - i$$23;
    var v1052 = v1310.substr(i$$23, v1311);
    snippet = v1051 + v1052;
    snippet = JAMScript.call(midori.trim, midori, [snippet]);
    var v1053 = snippet.length;
    var v1054 = vars$$7.minChars;
    var v644 = v1053 >= v1054;
    if(v644) {
      var v1312 = vars$$7.fileName;
      var v1055 = typeof v1312;
      var v643 = v1055 == "string";
      if(v643) {
        var v639 = this.ajax;
        var v640 = vars$$7.fileName;
        var v1056 = vars$$7.params;
        var v1057 = JAMScript.call(midori.trim, midori, [snippet]);
        var v641 = v1056 + v1057;
        JAMScript.call(v639.post, v639, [v640, v641])
      }else {
        var v642 = this.ajax;
        var v1313 = vars$$7.params;
        var v1314 = JAMScript.call(midori.trim, midori, [snippet]);
        var v1058 = v1313 + v1314;
        var v1657 = JAMScript.call(vars$$7.fileName, vars$$7, [v1058]);
        v642.responseText = v1657;
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
    var v1315 = this.myObj;
    var v1059 = v1315.getAttribute("editing");
    var v645 = v1059 != "on";
    if(v645) {
      return
    }
    var v1456 = this.editObj;
    var v1316 = v1456.value;
    var v1060 = JAMScript.call(v1316.replace, v1316, ["\n", ""]);
    var v646 = JAMScript.call(v1060.replace, v1060, ["\r", ""]);
    var text$$7 = JAMScript.call(midori.trim, midori, [v646]);
    var v648 = !text$$7;
    if(v648) {
      var v647 = this.editObj;
      v647.value = "";
      return
    }
    var v649 = this.myObj;
    JAMScript.call(v649.setAttribute, v649, ["editing", "off"]);
    var v650 = this.myObj;
    JAMScript.set(v650, "innerHTML", "");
    var v651 = this.myObj;
    JAMScript.set(v651, "innerHTML", text$$7);
    var v653 = vars$$8.callback;
    if(v653) {
      var v652 = this.myObj;
      JAMScript.call(vars$$8.callback, vars$$8, [text$$7, v652])
    }
    return
  }
  function v38() {
    var v1317 = this.myObj;
    var v1061 = v1317.getAttribute("editing");
    var v655 = v1061 == "on";
    if(v655) {
      var v654 = this.editObj;
      JAMScript.call(v654.select, v654, [])
    }
    return
  }
  function v37() {
    function v36(e$$25) {
      JAMScript.call(thisObj$$4.save, thisObj$$4, []);
      return
    }
    function v35(e$$24) {
      var v1318 = e$$24.keyCode;
      var v1062 = v1318 == 13;
      var v1320 = !v1062;
      if(v1320) {
        var v1319 = e$$24.keyCode;
        v1062 = v1319 == 27
      }
      var v656 = v1062;
      if(v656) {
        JAMScript.call(thisObj$$4.save, thisObj$$4, [])
      }
      return
    }
    function v34(e$$23) {
      JAMScript.call(midori.preventBubble, midori, [e$$23]);
      return
    }
    var v1457 = this.myObj;
    var v1321 = v1457.getAttribute("editing");
    var v1063 = v1321 == "on";
    var v1323 = !v1063;
    if(v1323) {
      var v1458 = this.input;
      var v1459 = this.myObj;
      var v1322 = JAMScript.call(midori.get, midori, [v1458, v1459]);
      v1063 = v1322[0]
    }
    var v657 = v1063;
    if(v657) {
      return
    }
    var v1064 = this.myObj;
    var v658 = v1064.innerHTML;
    var value$$31 = JAMScript.call(v658.replace, v658, [/"/g, "&quot;"]);
    var v659 = this.myObj;
    var v1065;
    var v1326 = vars$$8.textArea;
    if(v1326) {
      var v1632 = this.myObj;
      var v1617 = v1632.parentNode;
      var v1595 = v1617.offsetWidth;
      var v1618;
      var v1633 = vars$$8.x;
      if(v1633) {
        v1618 = vars$$8.x
      }else {
        v1618 = 32
      }
      var v1596 = v1618;
      var v1544 = v1595 - v1596;
      var v1460 = v1544 + "px";
      var v1634 = this.myObj;
      var v1619 = v1634.parentNode;
      var v1597 = v1619.offsetHeight;
      var v1620;
      var v1635 = vars$$8.y;
      if(v1635) {
        v1620 = vars$$8.y
      }else {
        v1620 = 32
      }
      var v1598 = v1620;
      var v1545 = v1597 - v1598;
      var v1461 = v1545 + "px";
      var v1324 = {w:v1460, h:v1461, value:value$$31};
      v1065 = JAMScript.call(midori.replace, midori, ['<textarea style="width: :w; height: :h; overflow: auto">:value</textarea>', v1324])
    }else {
      var v1546;
      var v1599 = vars$$8.size;
      if(v1599) {
        v1546 = vars$$8.size
      }else {
        v1546 = ""
      }
      var v1462 = v1546;
      var v1547;
      var v1600 = vars$$8.maxlen;
      if(v1600) {
        v1547 = vars$$8.maxlen
      }else {
        v1547 = ""
      }
      var v1463 = v1547;
      var v1325 = {size:v1462, maxlen:v1463, value:value$$31};
      v1065 = JAMScript.call(midori.replace, midori, ['<input type="text" size=":size" maxlength=":maxlen" value=":value" />', v1325])
    }
    JAMScript.set(v659, "innerHTML", v1065);
    var v1066 = this.input;
    var v1067 = this.myObj;
    var v660 = JAMScript.call(midori.get, midori, [v1066, v1067]);
    this.editObj = v660[0];
    var v661 = this.editObj;
    v661.focus();
    var v662 = this.editObj;
    v662.focus();
    var v663 = this.myObj;
    JAMScript.call(v663.setAttribute, v663, ["editing", "on"]);
    var v664 = this.editObj;
    JAMScript.call(midori.addEventListener, midori, [v664, "mousedown", v34]);
    var v665 = this.editObj;
    JAMScript.call(midori.addEventListener, midori, [v665, "keyup", v35]);
    var v666 = this.editObj;
    JAMScript.call(midori.addEventListener, midori, [v666, "blur", v36]);
    return
  }
  function v33(e$$22) {
    var v1068 = thisObj$$4.editObj;
    if(v1068) {
      var v1327 = JAMScript.call(midori.getEventTarget, midori, [e$$22]);
      var v1328 = thisObj$$4.editObj;
      v1068 = v1327 != v1328
    }
    var v667 = v1068;
    if(v667) {
      JAMScript.call(thisObj$$4.save, thisObj$$4, []);
      JAMScript.call(midori.preventDefault, midori, [e$$22])
    }
    return
  }
  var thisObj$$4 = this;
  var v1069 = vars$$8.id;
  var v668 = "#" + v1069;
  var v1658 = JAMScript.call(midori.get, midori, [v668]);
  this.myObj = v1658;
  this.editObj = "";
  var v669;
  var v1070 = vars$$8.textArea;
  if(v1070) {
    v669 = "textarea"
  }else {
    v669 = "input"
  }
  this.input = v669;
  JAMScript.call(midori.addEventListener, midori, [document, "mouseup", v33]);
  this.edit = v37;
  this.select = v38;
  this.save = v39;
  return
}
var v1071;
var v1330 = window.opera;
if(v1330) {
  v1071 = "Opera"
}else {
  var v1329;
  var v1601 = navigator.userAgent;
  var v1548 = v1601.indexOf("WebKit");
  var v1465 = v1548 != -1;
  if(v1465) {
    v1329 = "Safari"
  }else {
    var v1464;
    var v1621 = navigator.userAgent;
    var v1602 = v1621.indexOf("MSIE");
    var v1549 = v1602 != -1;
    if(v1549) {
      v1464 = "MSIE"
    }else {
      v1464 = "Gecko"
    }
    v1329 = v1464
  }
  v1071 = v1329
}
var v670 = v1071;
var v1072;
var v1550 = navigator.userAgent;
var v1466 = v1550.indexOf("Windows");
var v1332 = v1466 != -1;
if(v1332) {
  v1072 = "Win"
}else {
  var v1331;
  var v1603 = navigator.userAgent;
  var v1551 = v1603.indexOf("Macintosh");
  var v1467 = v1551 != -1;
  if(v1467) {
    v1331 = "Mac"
  }else {
    v1331 = "Other"
  }
  v1072 = v1331
}
var v671 = v1072;
var midori = {browserType:v670, browserOS:v671, domReady:[], each:v40, sibling:v41, parseSelectors:v42, processAttrs:v43, processPseudo:v44, getMatches:v46, get:v48, getCssRule:v49, setStyles:v50, setAttributes:v51, removeNode:v52, addEventListener:v57, runReadyEvents:v58, getEventTarget:v59, getMousePos:v60, preventBubble:v61, preventDefault:v62, getFloat:v63, setFloat:v64, getSelection:v65, getSelectionText:v66, getCookie:v67, setCookie:v68, convertToFields:v69, replace:v70, trim:v71, uniqid:v72, 
concatUnique:v73, implode:v74, inArray:v75, shortenWords:v77, resizeImg:v79, saveCheckboxState:v80, checkRequiredFields:v81, getWindowDims:v82, getPos:v83, highlightRow:v85};
var midoriFX = {intervals:{}, lastIntervalId:0, getOutsideSize:v86, showWithAnim:v87, show:v89, hideWithAnim:v90, hide:v92, scrollToWithAnim:v93, scrollTo:v95, sliderToWithAnim:v96, slider:v98};
var midoriPopup = {show:v99, hide:v100};
JAMScript.call(midori.addEventListener, midori, [document, "mouseup", v101]);
JAMScript.call(midori.addEventListener, midori, [document, "touchend", v102]);
var midoriTab = {selectedTabs:{}, select:v103, init:v107};
var midoriHistory = {history:[], modifyLocation:v108, add:v109, remove:v110, onChange:v111, init:v112};
JAMScript.call(midori.setCookie, midori, [1, 2, 3, 4, 5]);

