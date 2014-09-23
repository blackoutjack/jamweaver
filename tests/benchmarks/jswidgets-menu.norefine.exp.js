function getNSLayer(inNode, inName) {
  var node$$2;
  var i$$1;
  node$$2 = inNode[inName];
  i$$1 = 0;
  var v278 = !node$$2;
  if(v278) {
    var v494 = inNode.layers;
    if(v494) {
      v494 = i$$1 < inNode.layers.length
    }
    v278 = v494
  }
  var v1 = v278;
  for(;v1;) {
    node$$2 = getNSLayer(inNode.layers[i$$1].document, inName);
    i$$1 = i$$1 + 1;
    var v280 = !node$$2;
    if(v280) {
      var v496 = inNode.layers;
      if(v496) {
        v496 = i$$1 < inNode.layers.length
      }
      v280 = v496
    }
    v1 = v280
  }
  return node$$2
}
function getLayer(inNode$$1, inName$$1) {
  var node$$3;
  if(inNode$$1.getElementById) {
    node$$3 = JAM.call(inNode$$1.getElementById, inNode$$1, [inName$$1], JAM.policy.p1)
  }else {
    if(inNode$$1.all) {
      node$$3 = inNode$$1.all[inName$$1]
    }else {
      if(inNode$$1.layers) {
        node$$3 = getNSLayer(inNode$$1, inName$$1)
      }
    }
  }
  if(!node$$3) {
    alert("Could not find layer " + inName$$1 + ".")
  }
  return node$$3
}
function getStyle(inNode$$2) {
  var style;
  var v282 = is.w3c;
  if(!v282) {
    v282 = is.ie4
  }
  if(v282) {
    style = inNode$$2.style
  }else {
    if(is.ns4) {
      style = inNode$$2
    }else {
      style = 0
    }
  }
  return style
}
function setLayerPos(inNode$$3, left$$2, top$$2) {
  var v283 = is.ie4;
  if(!v283) {
    v283 = is.w3c
  }
  if(v283) {
    inNode$$3.style.left = left$$2 + "px";
    inNode$$3.style.top = top$$2 + "px"
  }else {
    if(is.ns4) {
      inNode$$3.left = left$$2;
      inNode$$3.top = top$$2
    }
  }
  return
}
function showLayer(mNode) {
  var style$$1;
  style$$1 = getStyle(mNode);
  if(style$$1) {
    style$$1.visibility = "visible"
  }
  return
}
function hideLayer(mNode$$1) {
  var style$$2;
  style$$2 = getStyle(mNode$$1);
  if(style$$2) {
    style$$2.visibility = "hidden"
  }
  return
}
function isPositioned(mNode$$2) {
  var v14 = mNode$$2.left;
  if(!v14) {
    v14 = mNode$$2.style.left
  }
  return v14
}
function layerWidth(mNode$$3) {
  var nWidth;
  var v286 = is.ie4;
  if(!v286) {
    v286 = is.w3c
  }
  if(v286) {
    nWidth = parseInt(mNode$$3.style.width)
  }else {
    if(is.ns4) {
      nWidth = parseInt(mNode$$3.width)
    }
  }
  return nWidth
}
function expandLayer(mNode$$4) {
  var style$$3;
  style$$3 = getStyle(mNode$$4);
  if(style$$3) {
    style$$3.display = "block"
  }
  return
}
function contractLayer(mNode$$5) {
  var style$$4;
  style$$4 = getStyle(mNode$$5);
  if(style$$4) {
    style$$4.display = "none"
  }
  return
}
function insertLayer(mNode$$6) {
  var style$$5;
  style$$5 = getStyle(mNode$$6);
  if(style$$5) {
    style$$5.display = "inline"
  }
  return
}
function setLayerColor(tag, bgColor, tColor) {
  var elLayer;
  elLayer = getLayer(document, tag);
  elStyle = getStyle(elLayer);
  if(elStyle) {
    if(is.ns4) {
      elStyle.bgColor = bgColor
    }else {
      elStyle.backgroundColor = bgColor;
      elStyle.color = tColor
    }
  }
  return
}
function setStyle(divType, fontSize, left$$3, top$$3, width$$9, height$$8, zIndex, bgColor$$1, visibility) {
  var dStyle;
  if(divType == "layer") {
    dStyle = 'left="' + left$$3;
    dStyle = dStyle + ('" top="' + top$$3);
    dStyle = dStyle + ('" width="' + width$$9);
    dStyle = dStyle + ('" height="' + height$$8);
    if(zIndex) {
      dStyle = dStyle + ('" z-index="' + zIndex)
    }
    if(bgColor$$1) {
      dStyle = dStyle + ('" bgColor="' + bgColor$$1)
    }else {
      dStyle = dStyle + '" bgColor="#000000'
    }
    if(visibility) {
      dStyle = dStyle + ('" visibility="' + NSVisType[visibility])
    }
    dStyle = dStyle + '" '
  }else {
    dStyle = 'style="font-size : ' + fontSize + "pt; ";
    dStyle = dStyle + ("left : " + left$$3 + "px; ");
    dStyle = dStyle + ("top : " + top$$3 + "px; ");
    dStyle = dStyle + ("width : " + width$$9 + "px; ");
    dStyle = dStyle + ("height : " + height$$8 + "px; ");
    if(zIndex) {
      dStyle = dStyle + ("z-index : " + zIndex + "; ")
    }
    if(bgColor$$1) {
      dStyle = dStyle + ("background-color : " + bgColor$$1 + "; ")
    }
    if(visibility) {
      dStyle = dStyle + ("visibility : " + visibility + "; ")
    }
    dStyle = dStyle + '" '
  }
  return dStyle
}
function Is() {
  var appName = navigator.appName.toLowerCase();
  var version$$5 = navigator.appVersion.toLowerCase();
  var agent = navigator.userAgent.toLowerCase();
  var platform = navigator.platform.toLowerCase();
  var v689 = parseInt(version$$5);
  this.major = v689;
  var v690 = parseFloat(version$$5);
  this.minor = v690;
  this.nsa = agent.indexOf("netscape") != -1;
  this.mza = agent.indexOf("mozilla") != -1;
  this.gla = agent.indexOf("galeon") != -1;
  var v29 = this.mza;
  if(v29) {
    v29 = !this.nsa
  }
  this.mza = v29;
  if(this.mza) {
    version$$5 = agent.substring(agent.indexOf("rv:") + 3, agent.indexOf(")"));
    this.nsa = false;
    if(agent.indexOf("rv:") != -1) {
      var v691 = parseInt(version$$5);
      this.major = v691;
      var v692 = parseFloat(version$$5);
      this.minor = v692;
      var v32 = this.mza;
      if(v32) {
        v32 = this.major == 1
      }
      this.mz1 = v32
    }else {
      this.mza = false;
      version$$5 = this.minor
    }
  }
  if(this.gla) {
    version$$5 = agent.substring(agent.indexOf("galeon/") + 7, agent.indexOf("(") - 1);
    this.nsa = false;
    if(agent.indexOf("galeon/") != -1) {
      var v693 = parseInt(version$$5);
      this.major = v693;
      var v694 = parseFloat(version$$5);
      this.minor = v694;
      var v37 = this.gla;
      if(v37) {
        v37 = this.major == 1
      }
      this.gl1 = v37
    }else {
      this.gla = false;
      version$$5 = this.version
    }
  }
  this.version = version$$5;
  this.nsn = appName.indexOf("netscape") != -1;
  var v41 = this.nsn;
  if(v41) {
    v41 = this.major == 2
  }
  this.ns2 = v41;
  var v42 = this.nsn;
  if(v42) {
    v42 = this.major == 3
  }
  this.ns3 = v42;
  var v43 = this.nsn;
  if(v43) {
    v43 = this.major == 4
  }
  this.ns4 = v43;
  var v44 = this.nsa;
  if(v44) {
    v44 = this.major >= 5
  }
  this.ns6 = v44;
  if(this.ns6) {
    var v695 = JAM.call(agent.slice, agent, [agent.indexOf("netscape6/") + 10, agent.length], JAM.policy.p1);
    this.version = v695
  }
  var v48 = appName.indexOf("internet explorer") != -1;
  if(v48) {
    v48 = agent.indexOf("opera") == -1
  }
  this.ie = v48;
  var v49 = this.ie;
  if(v49) {
    v49 = this.major == 3
  }
  this.ie3 = v49;
  var v50 = this.ie;
  if(v50) {
    var v317 = this.major == 4;
    if(v317) {
      v317 = agent.indexOf("msie 4.") != -1
    }
    v50 = v317
  }
  this.ie4 = v50;
  var v51 = this.ie;
  if(v51) {
    var v318 = this.major == 4;
    if(v318) {
      v318 = agent.indexOf("msie 5.") != -1
    }
    v51 = v318
  }
  this.ie5 = v51;
  var v52 = this.ie;
  if(v52) {
    var v319 = this.major == 4;
    if(v319) {
      v319 = agent.indexOf("msie 6.") != -1
    }
    v52 = v319
  }
  this.ie6 = v52;
  var v320 = this.ie4;
  if(!v320) {
    var v514 = this.ie5;
    if(!v514) {
      v514 = this.ie6
    }
    v320 = v514
  }
  if(v320) {
    var v696 = JAM.call(agent.slice, agent, [agent.indexOf("msie ") + 5, agent.length], JAM.policy.p1);
    this.version = v696;
    var v697 = this.version.slice(0, this.version.indexOf(";"));
    this.version = v697
  }
  var v58 = this.ie;
  if(v58) {
    var v323 = !this.ie3;
    if(v323) {
      v323 = !this.ie4
    }
    v58 = v323
  }
  this.ieX = v58;
  this.op = agent.indexOf("opera") != -1;
  var v60 = this.op;
  if(v60) {
    var v324 = this.major == 4;
    if(v324) {
      v324 = agent.indexOf("opera 4.") != -1
    }
    v60 = v324
  }
  this.op4 = v60;
  var v61 = this.op;
  if(v61) {
    var v325 = this.major == 4;
    if(v325) {
      v325 = agent.indexOf("opera 5.") != -1
    }
    v61 = v325
  }
  this.op5 = v61;
  var v62 = this.op;
  if(v62) {
    var v326 = this.major == 4;
    if(v326) {
      v326 = agent.indexOf("opera 6.") != -1
    }
    v62 = v326
  }
  this.op6 = v62;
  if(this.op) {
    this.ie = false;
    this.ie4 = false;
    this.ie5 = false;
    this.ie6 = false;
    var v698 = JAM.call(agent.slice, agent, [agent.indexOf("opera") + 6, agent.length], JAM.policy.p1);
    this.version = v698;
    var v699 = parseFloat(this.version);
    this.version = v699
  }
  this.kq = agent.indexOf("konqueror") != -1;
  if(this.kq) {
    var v700 = JAM.call(agent.substring, agent, [agent.indexOf("konqueror/") + 10, agent.length], JAM.policy.p1);
    this.version = v700;
    var v701 = this.version.substring(0, this.version.indexOf(";"));
    this.version = v701;
    var v702 = parseInt(this.version);
    this.major = v702;
    var v703 = parseFloat(this.version);
    this.minor = v703;
    this.mza = false
  }
  var v75 = this.kq;
  if(v75) {
    v75 = this.major == 2
  }
  this.kq2 = v75;
  var v76 = this.kq;
  if(v76) {
    v76 = this.major == 3
  }
  this.kq3 = v76;
  this.w3c = !!document.getElementById;
  this.win32 = platform.indexOf("win32") != -1;
  this.linux = platform.indexOf("linux") != -1;
  this.bsd = platform.indexOf("bsd") != -1;
  return
}
function setTagFontColor(tag$$1, color$$2) {
  var v333 = is.ie4;
  if(!v333) {
    v333 = is.w3c
  }
  if(v333) {
    tag$$1.style.color = color$$2
  }else {
    if(is.ns4) {
      tag$$1.color = color$$2
    }else {
    }
  }
  return
}
function setTagFontStyle(tag$$2, style$$6) {
  var v334 = is.ie4;
  if(!v334) {
    v334 = is.w3c
  }
  if(v334) {
    tag$$2.style.fontStyle = style$$6
  }else {
    if(is.ns4) {
      tag$$2.fontStyle = style$$6
    }else {
    }
  }
  return
}
function mousePosLeft(event$$1) {
  var leftPos;
  var v335 = is.ie4;
  if(!v335) {
    var v526 = is.w3c;
    if(v526) {
      var v669 = is.ns6;
      if(!v669) {
        v669 = is.mza
      }
      v526 = !v669
    }
    v335 = v526
  }
  if(v335) {
    leftPos = event$$1.clientX
  }else {
    var v336 = is.ns4;
    if(!v336) {
      var v528 = is.ns6;
      if(!v528) {
        v528 = is.mza
      }
      v336 = v528
    }
    if(v336) {
      leftPos = event$$1.pageX
    }
  }
  return leftPos
}
function mousePosTop(event$$2) {
  var topPos;
  var v337 = is.ie4;
  if(!v337) {
    var v530 = is.w3c;
    if(v530) {
      var v670 = is.ns6;
      if(!v670) {
        v670 = is.mza
      }
      v530 = !v670
    }
    v337 = v530
  }
  if(v337) {
    topPos = event$$2.clientY
  }else {
    var v338 = is.ns4;
    if(!v338) {
      var v532 = is.ns6;
      if(!v532) {
        v532 = is.mza
      }
      v338 = v532
    }
    if(v338) {
      topPos = event$$2.pageY
    }
  }
  return topPos
}
function BrowserMenuInfo() {
  if(is.ns4) {
    if(is.win32) {
      this.itemHeight = 16
    }else {
      if(is.linux) {
        this.itemHeight = 15
      }else {
        this.itemHeight = 15
      }
    }
    this.cellOffset = 2;
    this.leftOffset = 2;
    this.mTopOffset = 2;
    this.wBarPadding = 4;
    this.hBarPadding = 6;
    this.itemPadding = 10;
    this.itemSpacing = 2;
    this.menuPadding = -2;
    this.mBarOffset = 4;
    this.bBarOffset = -2;
    this.dividerHeight = 2;
    this.bwPadding = 4;
    this.bhPadding = 4;
    this.fontSize = 12;
    if(is.win32) {
      this.charWidth = 7
    }else {
      if(is.linux) {
        this.charWidth = 6
      }else {
        this.charWidth = 6
      }
    }
    this.divType = "layer";
    window.mtActive = "#FFFF00";
    window.mtPassive = "#FFFFFF";
    window.mbActive = "#FF0000";
    window.mbPassive = "#081C92"
  }else {
    if(is.kq) {
      this.itemHeight = 18;
      this.cellOffset = 4;
      this.leftOffset = 0;
      this.mTopOffset = 0;
      this.wBarPadding = 2;
      this.hBarPadding = 6;
      this.itemSpacing = 0;
      this.itemPadding = 2;
      this.menuPadding = 0;
      this.mBarOffset = 4;
      this.bBarOffset = 4;
      this.dividerHeight = 1;
      this.bwPadding = 2;
      this.bhPadding = 4;
      this.fontSize = 10;
      this.charWidth = 7;
      this.divType = "div"
    }else {
      var v339 = is.op5;
      if(!v339) {
        v339 = is.op6
      }
      if(v339) {
        this.itemHeight = 17;
        this.cellOffset = 4;
        this.leftOffset = 2;
        this.mTopOffset = 0;
        this.wBarPadding = 2;
        this.hBarPadding = 6;
        this.itemPadding = 10;
        this.itemSpacing = 2;
        this.menuPadding = 2;
        this.mBarOffset = 6;
        this.bBarOffset = 4;
        this.dividerHeight = 1;
        this.bwPadding = 2;
        this.bhPadding = 4;
        this.fontSize = 10;
        this.charWidth = 6;
        this.divType = "div"
      }else {
        if(is.ie4) {
          this.itemHeight = 18;
          this.cellOffset = 0;
          this.leftOffset = 0;
          this.mTopOffset = 0;
          this.wBarPadding = 4;
          this.hBarPadding = 5;
          this.itemPadding = 10;
          this.itemSpacing = 2;
          this.menuPadding = -2;
          this.mBarOffset = 3;
          this.bBarOffset = -3;
          this.dividerHeight = 1;
          this.bwPadding = 4;
          this.bhPadding = 2;
          this.fontSize = 10;
          this.charWidth = 6;
          this.divType = "div"
        }else {
          if(is.ie5) {
            this.itemHeight = 20;
            this.cellOffset = 0;
            this.leftOffset = 0;
            this.mTopOffset = 0;
            this.wBarPadding = 4;
            this.hBarPadding = 8;
            this.itemPadding = 11;
            this.itemSpacing = 0;
            this.menuPadding = 2;
            this.mBarOffset = 4;
            this.bBarOffset = -2;
            this.dividerHeight = 1;
            this.bwPadding = 4;
            this.bhPadding = 2;
            this.fontSize = 10;
            this.charWidth = 6;
            this.divType = "div"
          }else {
            if(is.ie6) {
              this.itemHeight = 18;
              this.cellOffset = 4;
              this.leftOffset = 0;
              this.mTopOffset = 0;
              this.wBarPadding = 0;
              this.hBarPadding = 6;
              this.itemPadding = 11;
              this.itemSpacing = 2;
              this.menuPadding = 2;
              this.mBarOffset = 4;
              this.bBarOffset = 4;
              this.dividerHeight = 1;
              this.bwPadding = 2;
              this.bhPadding = 4;
              this.fontSize = 10;
              this.charWidth = 6;
              this.divType = "div"
            }else {
              var v340 = is.mza;
              if(!v340) {
                var v535 = is.gla;
                if(!v535) {
                  v535 = is.ns6
                }
                v340 = v535
              }
              if(v340) {
                this.itemHeight = 18;
                this.cellOffset = 4;
                this.leftOffset = 0;
                this.mTopOffset = 0;
                this.wBarPadding = 2;
                this.hBarPadding = 6;
                this.itemSpacing = 0;
                this.itemPadding = 2;
                this.menuPadding = 0;
                this.mBarOffset = 4;
                this.bBarOffset = 4;
                this.dividerHeight = 1;
                this.bwPadding = 2;
                this.bhPadding = 4;
                this.fontSize = 10;
                this.charWidth = 7;
                this.divType = "div"
              }else {
                if(is.w3c) {
                  this.itemHeight = 19;
                  this.cellOffset = 0;
                  this.leftOffset = 0;
                  this.mTopOffset = 0;
                  this.wBarPadding = 0;
                  this.hBarPadding = 0;
                  this.itemSpacing = 6;
                  this.itemPadding = 2;
                  this.menuPadding = 0;
                  this.mBarOffset = 3;
                  this.bBarOffset = 5;
                  this.dividerHeight = 1;
                  this.bwPadding = 0;
                  this.bhPadding = 0;
                  this.fontSize = 10;
                  this.charWidth = 7;
                  this.divType = "div"
                }else {
                  alert("This should never happen.");
                  return 0
                }
              }
            }
          }
        }
      }
    }
  }
  return
}
function startSiteMap(mName, mTarget) {
  window.menuName = mName;
  window.menuTarget = mTarget;
  window.menuPntr = "images/tri.gif";
  var v103 = window;
  var v704 = new Array;
  v103.menuCells = v704;
  window.menuPopups = 0;
  window.menuHeads = 0;
  window.menuLevel = 0;
  window.menuMain = 0;
  var v104 = window;
  var v705 = new Object;
  v104.menuLayers = v705;
  var v105 = window;
  var v706 = new Array;
  v105.menuStack = v706;
  var v106 = window;
  var v707 = new Array;
  v106.menuBody = v707;
  var v107 = window;
  var v708 = new Array;
  v107.bodyCells = v708;
  window.mbActive = "#FF0000";
  window.mtActive = "#FFFF00";
  return
}
function menuItem(label$$2, action, width$$10, level$$7, popup) {
  if(label$$2 == 0) {
    this.label = label$$2
  }else {
    this.label = "&nbsp;" + label$$2
  }
  this.action = action;
  this.width = width$$10;
  this.level = level$$7;
  this.popup = popup;
  return
}
function bodyItem(cells, popup$$1, level$$8, left$$4, top$$4, width$$11, height$$9) {
  this.cells = cells;
  this.popup = popup$$1;
  this.level = level$$8;
  this.left = left$$4;
  this.top = top$$4;
  this.width = width$$11;
  this.height = height$$9;
  return
}
function stackMenuBody(queue, bPopup, bLevel, bLeft, bTop, bWidth, bHeight) {
  var mBody;
  var i$$2;
  mBody = new bodyItem(window.bodyCells.length, bPopup, bLevel, bLeft, bTop, bWidth, bHeight);
  JAM.set(window.menuBody, window.menuBody.length, mBody);
  i$$2 = 0;
  var v114 = i$$2 < queue.length;
  for(;v114;) {
    JAM.set(window.bodyCells, window.bodyCells.length, queue[i$$2]);
    i$$2 = i$$2 + 1;
    v114 = i$$2 < queue.length
  }
  JAM.set(window.bodyCells, window.bodyCells.length, 0);
  return
}
function addMenuDivider() {
  var mItem;
  var mLevel;
  mLevel = window.menuLevel;
  mItem = new menuItem(0, 0, 0, mLevel, 0);
  JAM.set(window.menuCells, window.menuCells.length, mItem);
  return
}
function estLabelWidth(label$$3) {
  var lWidth = 0;
  var i$$3;
  i$$3 = 0;
  var v119 = i$$3 < label$$3.length;
  for(;v119;) {
    lWidth = lWidth + alphaWidth[JAM.call(label$$3.charAt, label$$3, [i$$3], JAM.policy.p1)];
    i$$3 = i$$3 + 1;
    v119 = i$$3 < label$$3.length
  }
  return lWidth
}
function addMenuItem(label$$4, action$$1, popup$$2) {
  var mLabel$$1;
  var mAction;
  var mPopup$$1;
  var mItem$$1;
  var mWidth;
  var mLevel$$1;
  mLevel$$1 = window.menuLevel;
  mWidth = estLabelWidth(label$$4) + 4;
  if(label$$4) {
    mLabel$$1 = label$$4
  }else {
    alert("No label given for action " + action$$1 + ".");
    mLabel$$1 = "no label"
  }
  if(action$$1) {
    mAction = "location='" + action$$1 + "'"
  }else {
    mAction = "clearMenus(" + mLevel$$1 + ")"
  }
  mPopup$$1 = popup$$2;
  var v353 = mPopup$$1;
  if(v353) {
    v353 = mLevel$$1 > 0
  }
  if(v353) {
    mWidth = mWidth + 15
  }
  if(mLevel$$1 == 0) {
    window.menuHeads = window.menuHeads + 1
  }
  mItem$$1 = new menuItem(mLabel$$1, mAction, mWidth, mLevel$$1, mPopup$$1);
  JAM.set(window.menuCells, window.menuCells.length, mItem$$1);
  return
}
function startMenu(label$$5, action$$2) {
  var v356 = window.menuPopups;
  window.menuPopups = window.menuPopups + 1;
  addMenuItem(label$$5, action$$2, "popup" + v356);
  window.menuLevel = window.menuLevel + 1;
  return
}
function endMenu() {
  window.menuLevel = window.menuLevel - 1;
  return
}
function menuLayer(label$$6, action$$3) {
  this.name = name;
  this.label = label$$6;
  this.action = action$$3;
  return
}
function buildMenuCell(index$$39, left$$5, top$$5, width$$12, height$$10) {
  var mName$$1;
  var mLabel$$2;
  var mLeft;
  var mTop;
  var mWidth$$1;
  var mHeight;
  var mAction$$1;
  var mLevel$$2;
  mName$$1 = "cell" + index$$39;
  mClass = "menuItem";
  mLevel$$2 = window.menuCells[index$$39].level;
  mLeft = left$$5;
  mTop = top$$5;
  mWidth$$1 = width$$12;
  mHeight = height$$10;
  mLabel$$2 = window.menuCells[index$$39].label;
  mAction$$1 = window.menuCells[index$$39].action;
  JAM.call(document.write, document, ["<" + blInfo.divType + ' id="' + mName$$1], JAM.policy.p1);
  JAM.call(document.write, document, ['" class="' + mClass + '" '], JAM.policy.p1);
  JAM.call(document.write, document, [setStyle(blInfo.divType, blInfo.fontSize, mLeft, mTop, mWidth$$1, mHeight, 0, window.mbPassive, "inherit")], JAM.policy.p1);
  JAM.call(document.write, document, [' onclick="' + mAction$$1 + '" '], JAM.policy.p1);
  mPopup = window.menuCells[index$$39].popup;
  if(mPopup) {
    JAM.call(document.write, document, ['onmouseover="popMenu(' + mLevel$$2 + ",'" + mName$$1 + "','" + mPopup + "'" + ');" '], JAM.policy.p1);
    JAM.call(document.write, document, ['onmouseout="setColorPassive(' + "'" + mName$$1 + "'" + ');">'], JAM.policy.p1)
  }else {
    JAM.call(document.write, document, ['onmouseover="unPopMenus(' + mLevel$$2 + ",'" + mName$$1 + "'" + ');" '], JAM.policy.p1);
    JAM.call(document.write, document, ['onmouseout="setColorPassive(' + "'" + mName$$1 + "'" + ');">'], JAM.policy.p1)
  }
  var v141 = window.menuLayers;
  var v142 = mName$$1;
  var v709 = new menuLayer(mLabel$$2, mAction$$1);
  JAM.set(v141, v142, v709);
  if(blInfo.divType == "layer") {
    JAM.call(document.write, document, [JAM.call(mLabel$$2.fontcolor, mLabel$$2, [mtPassive], JAM.policy.p1)], JAM.policy.p1)
  }else {
    JAM.call(document.write, document, [mLabel$$2], JAM.policy.p1)
  }
  var v374 = mPopup;
  if(v374) {
    v374 = mLevel$$2 >= 1
  }
  if(v374) {
    JAM.call(document.write, document, ['&nbsp;<img src="' + window.menuPntr + '" border="0">'], JAM.policy.p1)
  }
  JAM.call(document.writeln, document, ["</" + blInfo.divType + ">"], JAM.policy.p1);
  return
}
function buildMenuBody(cQueue, bName, bLevel$$1, bLeft$$1, bTop$$1, bWidth$$1, bHeight$$1) {
  var i$$4;
  var bClass;
  var geometry;
  var zIndex$$1;
  var level$$9;
  var bLayer;
  var lWidth$$1;
  var lHeight;
  var mLeft$$1;
  var mTop$$1;
  bClass = "menuBody";
  lWidth$$1 = bWidth$$1 + blInfo.bwPadding;
  lHeight = bHeight$$1 + blInfo.bhPadding;
  JAM.call(document.write, document, ["<" + blInfo.divType + ' id="' + bName + '" class="' + bClass + '" '], JAM.policy.p1);
  JAM.call(document.write, document, [setStyle(blInfo.divType, blInfo.fontSize, bLeft$$1, bTop$$1, lWidth$$1, lHeight, bLevel$$1 + 1, "#000000", "hidden")], JAM.policy.p1);
  JAM.call(document.writeln, document, [">"]);
  mLeft$$1 = blInfo.leftOffset;
  mTop$$1 = blInfo.mTopOffset;
  i$$4 = 0;
  var v156 = i$$4 < cQueue.length;
  for(;v156;) {
    mLabel = window.menuCells[cQueue[i$$4]].label;
    if(mLabel) {
      buildMenuCell(cQueue[i$$4], mLeft$$1, mTop$$1, bWidth$$1, blInfo.itemHeight);
      mTop$$1 = mTop$$1 + (blInfo.itemHeight + blInfo.cellOffset)
    }else {
      if(mLabel == 0) {
        mTop$$1 = mTop$$1 + blInfo.dividerHeight
      }else {
        alert("Expecting label in buildMenuBody.");
        return 0
      }
    }
    i$$4 = i$$4 + 1;
    v156 = i$$4 < cQueue.length
  }
  JAM.call(document.writeln, document, ["</" + blInfo.divType + ">"], JAM.policy.p1);
  return
}
function buildMenuBodies() {
  var i$$5;
  var cQueue$$1;
  var bName$$1;
  var bLevel$$2;
  var bLeft$$2;
  var bTop$$2;
  var bWidth$$2;
  var bHeight$$2;
  var bCells;
  i$$5 = 0;
  var v167 = i$$5 < window.menuBody.length;
  for(;v167;) {
    bCells = window.menuBody[i$$5].cells;
    bName$$1 = window.menuBody[i$$5].popup;
    bLevel$$2 = window.menuBody[i$$5].level;
    bLeft$$2 = window.menuBody[i$$5].left;
    bTop$$2 = window.menuBody[i$$5].top;
    bWidth$$2 = window.menuBody[i$$5].width;
    bHeight$$2 = window.menuBody[i$$5].height;
    cQueue$$1 = new Array;
    cCount = 0;
    var v396 = bCells < window.bodyCells.length;
    if(v396) {
      v396 = window.bodyCells[bCells] > 0
    }
    var v166 = v396;
    for(;v166;) {
      var v165 = cCount;
      cCount = cCount + 1;
      var v397 = window.bodyCells;
      var v398 = bCells;
      bCells = bCells + 1;
      cQueue$$1[v165] = v397[v398];
      var v399 = bCells < window.bodyCells.length;
      if(v399) {
        v399 = window.bodyCells[bCells] > 0
      }
      v166 = v399
    }
    buildMenuBody(cQueue$$1, bName$$1, bLevel$$2, bLeft$$2, bTop$$2, bWidth$$2, bHeight$$2);
    cQueue$$1 = null;
    i$$5 = i$$5 + 1;
    v167 = i$$5 < window.menuBody.length
  }
  return
}
function queueMenuBuilds(mIndex, mLevel$$3, mPopup$$2, mLeft$$2, mTop$$2) {
  var queue$$1 = new Array;
  var i$$6;
  var sPopup;
  var sLeft;
  var sTop;
  var sWidth;
  var sHeight;
  sTop = mTop$$2;
  sWidth = 0;
  sHeight = 0;
  i$$6 = mIndex;
  var v401 = i$$6 < window.menuCells.length;
  if(v401) {
    v401 = window.menuCells[i$$6].level >= mLevel$$3
  }
  var v170 = v401;
  for(;v170;) {
    if(window.menuCells[i$$6].level == mLevel$$3) {
      sWidth = JAM.call(Math.max, Math, [sWidth, window.menuCells[i$$6].width], JAM.policy.p1)
    }
    i$$6 = i$$6 + 1;
    var v404 = i$$6 < window.menuCells.length;
    if(v404) {
      v404 = window.menuCells[i$$6].level >= mLevel$$3
    }
    v170 = v404
  }
  sLeft = mLeft$$2 + sWidth + 2;
  i$$6 = mIndex;
  var v405 = i$$6 < window.menuCells.length;
  if(v405) {
    v405 = window.menuCells[i$$6].level >= mLevel$$3
  }
  var v177 = v405;
  for(;v177;) {
    queue$$1[queue$$1.length] = i$$6;
    if(window.menuCells[i$$6].popup) {
      sPopup = window.menuCells[i$$6].popup;
      i$$6 = i$$6 + 1;
      i$$6 = queueMenuBuilds(i$$6, mLevel$$3 + 1, sPopup, sLeft, sTop);
      sTop = sTop + (blInfo.itemHeight + blInfo.cellOffset);
      sHeight = sHeight + (blInfo.itemHeight + blInfo.cellOffset)
    }else {
      if(window.menuCells[i$$6].label) {
        i$$6 = i$$6 + 1;
        sTop = sTop + (blInfo.itemHeight + blInfo.cellOffset);
        sHeight = sHeight + (blInfo.itemHeight + blInfo.cellOffset)
      }else {
        i$$6 = i$$6 + 1;
        sTop = sTop + blInfo.dividerHeight;
        sHeight = sHeight + blInfo.dividerHeight
      }
    }
    var v415 = i$$6 < window.menuCells.length;
    if(v415) {
      v415 = window.menuCells[i$$6].level >= mLevel$$3
    }
    v177 = v415
  }
  if(queue$$1.length > 0) {
    stackMenuBody(queue$$1, mPopup$$2, mLevel$$3, mLeft$$2, mTop$$2, sWidth, sHeight - blInfo.cellOffset)
  }
  queue$$1 = null;
  return i$$6
}
function endSiteMap() {
  return
}
function drawHMenuBar(left$$6, top$$6, width$$13, height$$11, padding, graphic) {
  var bLeft$$3;
  var bTop$$3;
  var bWidth$$3;
  var bHeight$$3;
  var iPadding;
  var bGraphic;
  var i$$7;
  var geometry$$1;
  var zIndex$$2;
  var iWidth;
  var iLeft;
  var mTop$$3;
  bLeft$$3 = left$$6;
  bTop$$3 = top$$6;
  bWidth$$3 = width$$13 + blInfo.wBarPadding;
  bHeight$$3 = height$$11 + blInfo.itemHeight + blInfo.hBarPadding;
  iPadding = padding + blInfo.itemPadding;
  bGraphic = graphic;
  JAM.call(document.write, document, ["<" + blInfo.divType + ' id="menuBar" class="menuBar" '], JAM.policy.p1);
  JAM.call(document.write, document, [setStyle(blInfo.divType, blInfo.fontSize, bLeft$$3, bTop$$3, bWidth$$3, bHeight$$3, 0, null, "visible")], JAM.policy.p1);
  JAM.call(document.writeln, document, [">"]);
  JAM.call(document.writeln, document, ['<img name="menuImage" src="' + bGraphic + '" class="menuBar" border="1" width="' + width$$13 + '" height="' + height$$11 + '">'], JAM.policy.p1);
  iLeft = blInfo.leftOffset;
  mTop$$3 = height$$11 + blInfo.mBarOffset;
  bTop$$3 = bTop$$3 + blInfo.bBarOffset;
  i$$7 = 0;
  var v194 = i$$7 < window.menuCells.length;
  for(;v194;) {
    iWidth = window.menuCells[i$$7].width + iPadding;
    iWidth = JAM.call(Math.min, Math, [iWidth, bWidth$$3 - iLeft + blInfo.menuPadding], JAM.policy.p1);
    buildMenuCell(i$$7, iLeft, mTop$$3, iWidth, blInfo.itemHeight);
    if(window.menuCells[i$$7].popup) {
      mPopup = window.menuCells[i$$7].popup;
      i$$7 = i$$7 + 1;
      i$$7 = queueMenuBuilds(i$$7, 1, mPopup, bLeft$$3, bTop$$3 + bHeight$$3)
    }
    bLeft$$3 = bLeft$$3 + (iWidth + blInfo.itemSpacing);
    iLeft = iLeft + (iWidth + blInfo.itemSpacing);
    v194 = i$$7 < window.menuCells.length
  }
  JAM.call(document.writeln, document, ["</" + blInfo.divType + ">"], JAM.policy.p1);
  buildMenuBodies();
  document.close();
  return
}
function drawVMenuBar(left$$7, top$$7, width$$14, height$$12, padding$$1, graphic$$1) {
  var bLeft$$4;
  var bTop$$4;
  var bWidth$$4;
  var bHeight$$4;
  var mHeight$$1;
  var iPadding$$1;
  var bGraphic$$1;
  var i$$8;
  var geometry$$2;
  var zIndex$$3;
  var iWidth$$1;
  var iLeft$$1;
  var mTop$$4;
  var nTopItems;
  bLeft$$4 = left$$7;
  bTop$$4 = top$$7;
  bWidth$$4 = width$$14 + blInfo.wBarPadding;
  bHeight$$4 = height$$12;
  nTopItems = 0;
  i$$8 = 0;
  var v198 = i$$8 < window.menuCells.length;
  for(;v198;) {
    if(window.menuCells[i$$8].level == 0) {
      nTopItems = nTopItems + 1
    }
    i$$8 = i$$8 + 1;
    v198 = i$$8 < window.menuCells.length
  }
  mHeight$$1 = nTopItems * (blInfo.itemHeight + blInfo.cellOffset);
  i$$8 = 0;
  iPadding$$1 = padding$$1 + blInfo.itemPadding;
  bGraphic$$1 = graphic$$1;
  JAM.call(document.write, document, ["<" + blInfo.divType + ' id="menuBar" class="menuBar" '], JAM.policy.p1);
  JAM.call(document.write, document, [setStyle(blInfo.divType, blInfo.fontSize, bLeft$$4, bTop$$4, bWidth$$4, bHeight$$4 + mHeight$$1, 0, null, "visible")], JAM.policy.p1);
  JAM.call(document.writeln, document, [">"]);
  JAM.call(document.writeln, document, ['<img name="menuImage" src="' + bGraphic$$1 + '"class="menuBar" border="1" width="' + width$$14 + '" height="' + height$$12 + '">'], JAM.policy.p1);
  iLeft$$1 = blInfo.leftOffset;
  mTop$$4 = height$$12 + blInfo.mBarOffset;
  bTop$$4 = bTop$$4 + blInfo.bBarOffset;
  var v212 = i$$8 < window.menuCells.length;
  for(;v212;) {
    iWidth$$1 = window.menuCells[i$$8].width + iPadding$$1;
    iWidth$$1 = JAM.call(Math.min, Math, [iWidth$$1, bWidth$$4 - iLeft$$1 + blInfo.menuPadding], JAM.policy.p1);
    buildMenuCell(i$$8, iLeft$$1, mTop$$4, iWidth$$1, blInfo.itemHeight);
    if(window.menuCells[i$$8].popup) {
      mPopup = window.menuCells[i$$8].popup;
      i$$8 = i$$8 + 1;
      i$$8 = queueMenuBuilds(i$$8, 1, mPopup, bLeft$$4 + iWidth$$1, bTop$$4 + bHeight$$4)
    }
    mTop$$4 = mTop$$4 + (blInfo.itemHeight + blInfo.cellOffset);
    bTop$$4 = bTop$$4 + (blInfo.itemHeight + blInfo.cellOffset);
    v212 = i$$8 < window.menuCells.length
  }
  JAM.call(document.writeln, document, ["</" + blInfo.divType + ">"], JAM.policy.p1);
  buildMenuBodies();
  document.close();
  return
}
function loadMe() {
  var v214 = this.action;
  if(JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + v214 + " }")
  }else {
    JAM.call(eval, null, [v214])
  }
  return
}
function activateMenus() {
  var mName$$2;
  var mAction$$2;
  var mNode$$7;
  var tStyle;
  tStyle = getStyle(getLayer(document, "test.cell"));
  if(!is.ns4) {
    window.mtPassive = tStyle.color;
    window.mbPassive = tStyle.backgroundColor;
    return
  }
  for(mName$$2 in window.menuLayers) {
    mAction$$2 = window.menuLayers[mName$$2].action;
    mNode$$7 = getLayer(document, mName$$2);
    JAM.call(mNode$$7.captureEvents, mNode$$7, [Event.MOUSEDOWN], JAM.policy.p1);
    JAM.set(mNode$$7, "onmousedown", loadMe);
    mNode$$7.action = mAction$$2;
    mNode$$7.fgColor = window.mtPassive
  }
  return
}
function findNode(elMain, mName$$3) {
  var elNode;
  var elIndex;
  elNode = getLayer(elMain, mName$$3);
  elIndex = 0;
  var v457 = !elNode;
  if(v457) {
    v457 = elIndex < stackDepth
  }
  var v221 = v457;
  for(;v221;) {
    elNode = getLayer(nodeStack[elIndex], mName$$3);
    elIndex = elIndex + 1;
    var v458 = !elNode;
    if(v458) {
      v458 = elIndex < stackDepth
    }
    v221 = v458
  }
  return elNode
}
function clearMenus(mNum) {
  var v223 = stackDepth > mNum;
  for(;v223;) {
    stackDepth = stackDepth - 1;
    hideLayer(nodeStack[stackDepth]);
    JAM.set(nameStack, stackDepth, 0);
    JAM.set(nodeStack, stackDepth, 0);
    v223 = stackDepth > mNum
  }
  return
}
function unPopMenus(mNum$$1, tag$$3) {
  setLayerColor(tag$$3, window.mbActive, window.mtActive);
  clearMenus(mNum$$1);
  if(is.ns4) {
    JAM.call(document.releaseEvents, document, [Event.MOUSEDOWN], JAM.policy.p1)
  }
  return
}
function setColorPassive(tag$$4) {
  setLayerColor(tag$$4, window.mbPassive, window.mtPassive);
  if(is.ns4) {
    JAM.call(document.captureEvents, document, [Event.MOUSEDOWN], JAM.policy.p1)
  }
  return
}
function popMenu(mNum$$2, tag$$5, mName$$4) {
  var style$$7;
  var elLayer$$1;
  clearMenus(mNum$$2);
  setLayerColor(tag$$5, window.mbActive, window.mtActive);
  elLayer$$1 = getLayer(document, mName$$4);
  if(elLayer$$1) {
    showLayer(elLayer$$1);
    JAM.set(nameStack, stackDepth, mName$$4);
    JAM.set(nodeStack, stackDepth, elLayer$$1);
    stackDepth = stackDepth + 1
  }
  if(is.ns4) {
    JAM.call(document.releaseEvents, document, [Event.MOUSEDOWN], JAM.policy.p1)
  }
  return
}
function clearAll(e$$4) {
  clearMenus(0);
  return
}
function initialize() {
  activateMenus();
  return
}
var NSVisType = new Array;
NSVisType["visible"] = "show";
NSVisType["hidden"] = "hide";
NSVisType["inherit"] = "inherit";
var is = new Is;
var blInfo = new BrowserMenuInfo;
JAM.call(document.write, document, ["<" + blInfo.divType + ' id="test.cell"'], JAM.policy.p1);
JAM.call(document.write, document, ['" class="menuItem" ']);
JAM.call(document.write, document, [setStyle(blInfo.divType, blInfo.fontSize, 0, 0, 100, 20, null, null, "hidden") + ">"], JAM.policy.p1);
JAM.call(document.write, document, ["test.cell"]);
JAM.call(document.writeln, document, ["</" + blInfo.divType + ">"], JAM.policy.p1);
var alphaWidth = Array();
alphaWidth["a"] = blInfo.charWidth;
alphaWidth["b"] = blInfo.charWidth;
alphaWidth["c"] = blInfo.charWidth;
alphaWidth["d"] = blInfo.charWidth;
alphaWidth["e"] = blInfo.charWidth;
alphaWidth["f"] = blInfo.charWidth;
alphaWidth["g"] = blInfo.charWidth;
alphaWidth["h"] = blInfo.charWidth;
var v239 = alphaWidth;
var v710 = JAM.call(Math.floor, Math, [blInfo.charWidth * 0.4], JAM.policy.p1);
v239["i"] = v710;
var v240 = alphaWidth;
var v711 = JAM.call(Math.floor, Math, [blInfo.charWidth * 0.7], JAM.policy.p1);
v240["j"] = v711;
alphaWidth["k"] = blInfo.charWidth;
var v241 = alphaWidth;
var v712 = JAM.call(Math.floor, Math, [blInfo.charWidth * 0.4], JAM.policy.p1);
v241["l"] = v712;
var v242 = alphaWidth;
var v713 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v242["m"] = v713;
alphaWidth["n"] = blInfo.charWidth;
alphaWidth["o"] = blInfo.charWidth;
alphaWidth["p"] = blInfo.charWidth;
alphaWidth["q"] = blInfo.charWidth;
alphaWidth["r"] = blInfo.charWidth;
alphaWidth["s"] = blInfo.charWidth;
alphaWidth["t"] = blInfo.charWidth;
alphaWidth["u"] = blInfo.charWidth;
alphaWidth["v"] = blInfo.charWidth;
var v243 = alphaWidth;
var v714 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.8], JAM.policy.p1);
v243["w"] = v714;
alphaWidth["x"] = blInfo.charWidth;
alphaWidth["y"] = blInfo.charWidth;
alphaWidth["z"] = blInfo.charWidth;
var v244 = alphaWidth;
var v715 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v244["A"] = v715;
var v245 = alphaWidth;
var v716 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v245["B"] = v716;
var v246 = alphaWidth;
var v717 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v246["C"] = v717;
var v247 = alphaWidth;
var v718 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v247["D"] = v718;
var v248 = alphaWidth;
var v719 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v248["E"] = v719;
var v249 = alphaWidth;
var v720 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v249["F"] = v720;
var v250 = alphaWidth;
var v721 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v250["G"] = v721;
var v251 = alphaWidth;
var v722 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v251["H"] = v722;
var v252 = alphaWidth;
var v723 = JAM.call(Math.floor, Math, [blInfo.charWidth], JAM.policy.p1);
v252["I"] = v723;
var v253 = alphaWidth;
var v724 = JAM.call(Math.floor, Math, [blInfo.charWidth], JAM.policy.p1);
v253["J"] = v724;
var v254 = alphaWidth;
var v725 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v254["K"] = v725;
var v255 = alphaWidth;
var v726 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v255["L"] = v726;
var v256 = alphaWidth;
var v727 = JAM.call(Math.floor, Math, [blInfo.charWidth * 2], JAM.policy.p1);
v256["M"] = v727;
var v257 = alphaWidth;
var v728 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v257["N"] = v728;
var v258 = alphaWidth;
var v729 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v258["O"] = v729;
var v259 = alphaWidth;
var v730 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v259["P"] = v730;
var v260 = alphaWidth;
var v731 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v260["Q"] = v731;
var v261 = alphaWidth;
var v732 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v261["R"] = v732;
var v262 = alphaWidth;
var v733 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v262["S"] = v733;
var v263 = alphaWidth;
var v734 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v263["T"] = v734;
var v264 = alphaWidth;
var v735 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v264["U"] = v735;
var v265 = alphaWidth;
var v736 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v265["V"] = v736;
var v266 = alphaWidth;
var v737 = JAM.call(Math.floor, Math, [blInfo.charWidth * 3], JAM.policy.p1);
v266["W"] = v737;
var v267 = alphaWidth;
var v738 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v267["X"] = v738;
var v268 = alphaWidth;
var v739 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v268["Y"] = v739;
var v269 = alphaWidth;
var v740 = JAM.call(Math.floor, Math, [blInfo.charWidth * 1.6], JAM.policy.p1);
v269["Z"] = v740;
alphaWidth["0"] = blInfo.charWidth;
alphaWidth["1"] = blInfo.charWidth;
alphaWidth["2"] = blInfo.charWidth;
alphaWidth["3"] = blInfo.charWidth;
alphaWidth["4"] = blInfo.charWidth;
alphaWidth["5"] = blInfo.charWidth;
alphaWidth["6"] = blInfo.charWidth;
alphaWidth["7"] = blInfo.charWidth;
alphaWidth["8"] = blInfo.charWidth;
alphaWidth["9"] = blInfo.charWidth;
alphaWidth["."] = blInfo.charWidth;
alphaWidth[","] = blInfo.charWidth;
alphaWidth["'"] = blInfo.charWidth;
alphaWidth[" "] = blInfo.charWidth;
alphaWidth['"'] = blInfo.charWidth;
alphaWidth["/"] = blInfo.charWidth;
alphaWidth["\\"] = blInfo.charWidth;
alphaWidth["<"] = blInfo.charWidth;
alphaWidth[">"] = blInfo.charWidth;
alphaWidth["?"] = blInfo.charWidth;
alphaWidth["~"] = blInfo.charWidth;
alphaWidth["!"] = blInfo.charWidth;
alphaWidth["#"] = blInfo.charWidth;
alphaWidth["$"] = blInfo.charWidth;
alphaWidth["%"] = blInfo.charWidth;
alphaWidth["^"] = blInfo.charWidth;
alphaWidth["&"] = blInfo.charWidth;
alphaWidth["*"] = blInfo.charWidth;
alphaWidth["("] = blInfo.charWidth;
alphaWidth[")"] = blInfo.charWidth;
alphaWidth["-"] = blInfo.charWidth;
alphaWidth["_"] = blInfo.charWidth;
alphaWidth["="] = blInfo.charWidth;
alphaWidth["+"] = blInfo.charWidth;
alphaWidth["{"] = blInfo.charWidth;
alphaWidth["}"] = blInfo.charWidth;
alphaWidth["["] = blInfo.charWidth;
alphaWidth["]"] = blInfo.charWidth;
alphaWidth["|"] = blInfo.charWidth;
alphaWidth[";"] = blInfo.charWidth;
alphaWidth[":"] = blInfo.charWidth;
var nameStack = new Array;
var nodeStack = new Array;
var stackDepth = 0;
if(is.ns4) {
  JAM.call(document.captureEvents, document, [Event.MOUSEDOWN], JAM.policy.p1);
  JAM.set(document, "onmousedown", clearAll)
}
startSiteMap("Menu", "_top");
startMenu("jsWidgets");
addMenuItem("Home", "/home.shtml");
addMenuItem("What is jsWidgets?", "/readme.shtml");
addMenuItem("Change Log", "/changelog.shtml");
addMenuItem("General Public License", "http://www.gnu.org/copyleft/gpl.html");
addMenuItem("Project Page", "http://sourceforge.net/projects/jswidgets");
addMenuItem("Download", "http://sourceforge.net/project/showfiles.php?group_id=33495");
startMenu("Competition at SF");
addMenuItem("DynAPI", "http://dynapi.sourceforge.net");
addMenuItem("netWindows", "http://sourceforge.net/projects/netwindows");
addMenuItem("jsui", "http://jsui.sourceforge.net");
addMenuItem("judelib", "http://judelib.sourceforge.net");
addMenuItem("XPDOM", "http://xpdom.sourceforge.net");
addMenuItem("Tree Menu", "http://www.treemenu.com");
addMenuItem("gmL-Modul", "http://gml-modul.sourceforge.net");
addMenuItem("PHP Layers", "http://phplayersmenu.sourceforge.net");
addMenuItem("WAB AWT", "http://www.skip-consulting.de/wab/wabawt/");
endMenu();
endMenu();
startMenu("Examples");
addMenuItem("Menus", "/examples/menus.shtml");
addMenuItem("Notes", "/examples/notes.shtml");
addMenuItem("Banners", "/examples/banners.shtml");
addMenuItem("Browsers", "/examples/browsers.shtml");
addMenuItem("Trees", "/examples/trees.shtml");
endMenu();
startMenu("Documentation");
addMenuItem("Menus", "/docs/menus.shtml");
addMenuItem("Notes", "/docs/notes.shtml");
addMenuItem("Banners", "/docs/banners.shtml");
addMenuItem("Browsers", "/docs/browsers.shtml");
addMenuItem("Trees", "/docs/trees.shtml");
endMenu();
startMenu("On JavaScript");
addMenuItem("Netscape Docs", "http://developer.netscape.com/docs/manuals/javascript.html");
startMenu("ECMA Script");
addMenuItem("ECMA -262", "http://www.ecma.ch/ecma1/STAND/ECMA-262.HTM");
addMenuItem("DOM Level 1 Binding", "http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html");
endMenu();
startMenu("Others Examples");
addMenuItem("Javascript Source", "http://javascript.internet.com/");
addMenuItem("Javascript.com", "http://www.javascript.com");
addMenuItem("Javascript Resources", "http://www.jsr.communitech.net/index3.htm");
addMenuItem("W3Schools Examples", "http://www.w3schools.com/js/js_examples.asp");
endMenu();
endSiteMap();
var v493 = is.w3c;
if(!v493) {
  var v632 = is.ie4;
  if(!v632) {
    var v665 = is.ns4;
    if(v665) {
      v665 = !is.hj
    }
    v632 = v665
  }
  v493 = v632
}
if(v493) {
  var barTop = 20;
  var barLeft = 50;
  var barWidth = 370;
  var barHeight = 44;
  var itemPadding = 5;
  var barImage = "images/title.png";
  drawHMenuBar(barLeft, barTop, barWidth, barHeight, itemPadding, barImage)
}
if(is.w3c) {
  JAM.call(document.writeln, document, ['<div style="position : relative; top : 15px; float : right; padding-right : 42px; text-align : right">']);
  JAM.call(document.writeln, document, ['<a href="http://sourceforge.net/projects/jswidgets"><img src="http://sflogo.sourceforge.net/sflogo.php?group_id=33495&type=15" width="150" height="40" border="0" alt="Get Browser-Independent Javascript Widgets at SourceForge.net. Fast, secure and Free Open Source software downloads" /></a>'], JAM.policy.p1);
  JAM.call(document.writeln, document, ["</div>"])
}else {
  if(is.ns4) {
    JAM.call(document.writeln, document, ['<layer top="20" left="400">']);
    JAM.call(document.writeln, document, ['<a href="http://sourceforge.net/projects/jswidgets"><img src="http://sflogo.sourceforge.net/sflogo.php?group_id=33495&type=15" width="150" height="40" border="0" alt="Get Browser-Independent Javascript Widgets at SourceForge.net. Fast, secure and Free Open Source software downloads" /></a>'], JAM.policy.p1);
    JAM.call(document.writeln, document, ["</layer>"])
  }
}
document.body.background = "images/researchbg.gif";
JAM.set(document.body, "onload", initialize);
JAM.set(document.getElementById("cleardiv"), "onmouseover", clearAll)
