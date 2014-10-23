// jswidgets-menu.js
function getNSLayer(inNode, inName) {
  var node$$2;
  var i$$1;
  node$$2 = inNode[inName];
  i$$1 = 0;
  var v501 = !node$$2;
  if (v501) {
    v501 = inNode.layers;
  }
  var v278 = v501;
  if (v278) {
    v278 = i$$1 < inNode.layers.length;
  }
  var v1 = v278;
  for (;v1;) {
    node$$2 = JAM.call(getNSLayer, null, [inNode.layers[i$$1].document, inName], JAM.policy.p1);
    i$$1 = i$$1 + 1;
    var v504 = !node$$2;
    if (v504) {
      v504 = inNode.layers;
    }
    var v280 = v504;
    if (v280) {
      v280 = i$$1 < inNode.layers.length;
    }
    v1 = v280;
  }
  return node$$2;
}
function getLayer(inNode$$1, inName$$1) {
  var node$$3;
  if (inNode$$1.getElementById) {
    node$$3 = JAM.call(inNode$$1.getElementById, inNode$$1, [inName$$1], JAM.policy.p1);
  } else {
    if (inNode$$1.all) {
      node$$3 = inNode$$1.all[inName$$1];
    } else {
      if (inNode$$1.layers) {
        node$$3 = JAM.call(getNSLayer, null, [inNode$$1, inName$$1], JAM.policy.p1);
      }
    }
  }
  if (!node$$3) {
    JAM.call(alert, null, ["Could not find layer " + inName$$1 + "."], JAM.policy.p1);
  }
  return node$$3;
}
function getStyle(inNode$$2) {
  var style;
  var v282 = is.w3c;
  if (!v282) {
    v282 = is.ie4;
  }
  if (v282) {
    style = inNode$$2.style;
  } else {
    if (is.ns4) {
      style = inNode$$2;
    } else {
      style = 0;
    }
  }
  return style;
}
function setLayerPos(inNode$$3, left$$1, top$$1) {
  var v283 = is.ie4;
  if (!v283) {
    v283 = is.w3c;
  }
  if (v283) {
    inNode$$3.style.left = left$$1 + "px";
    inNode$$3.style.top = top$$1 + "px";
  } else {
    if (is.ns4) {
      inNode$$3.left = left$$1;
      inNode$$3.top = top$$1;
    }
  }
  return;
}
function showLayer(mNode) {
  var style$$1;
  style$$1 = JAM.call(getStyle, null, [mNode], JAM.policy.p1);
  if (style$$1) {
    style$$1.visibility = "visible";
  }
  return;
}
function hideLayer(mNode$$1) {
  var style$$2;
  style$$2 = JAM.call(getStyle, null, [mNode$$1], JAM.policy.p1);
  if (style$$2) {
    style$$2.visibility = "hidden";
  }
  return;
}
function isPositioned(mNode$$2) {
  var v14 = mNode$$2.left;
  if (!v14) {
    v14 = mNode$$2.style.left;
  }
  return v14;
}
function layerWidth(mNode$$3) {
  var nWidth;
  var v286 = is.ie4;
  if (!v286) {
    v286 = is.w3c;
  }
  if (v286) {
    nWidth = JAM.call(parseInt, null, [mNode$$3.style.width], JAM.policy.p1);
  } else {
    if (is.ns4) {
      nWidth = JAM.call(parseInt, null, [mNode$$3.width], JAM.policy.p1);
    }
  }
  return nWidth;
}
function expandLayer(mNode$$4) {
  var style$$3;
  style$$3 = JAM.call(getStyle, null, [mNode$$4], JAM.policy.p1);
  if (style$$3) {
    style$$3.display = "block";
  }
  return;
}
function contractLayer(mNode$$5) {
  var style$$4;
  style$$4 = JAM.call(getStyle, null, [mNode$$5], JAM.policy.p1);
  if (style$$4) {
    style$$4.display = "none";
  }
  return;
}
function insertLayer(mNode$$6) {
  var style$$5;
  style$$5 = JAM.call(getStyle, null, [mNode$$6], JAM.policy.p1);
  if (style$$5) {
    style$$5.display = "inline";
  }
  return;
}
function setLayerColor(tag, bgColor, tColor) {
  var elLayer;
  elLayer = JAM.call(getLayer, null, [document, tag], JAM.policy.p1);
  elStyle = JAM.call(getStyle, null, [elLayer], JAM.policy.p1);
  if (elStyle) {
    if (is.ns4) {
      elStyle.bgColor = bgColor;
    } else {
      elStyle.backgroundColor = bgColor;
      elStyle.color = tColor;
    }
  }
  return;
}
function setStyle(divType, fontSize, left$$2, top$$2, width$$9, height$$8, zIndex, bgColor$$1, visibility) {
  var dStyle;
  if (divType == "layer") {
    dStyle = 'left="' + left$$2;
    dStyle = dStyle + ('" top="' + top$$2);
    dStyle = dStyle + ('" width="' + width$$9);
    dStyle = dStyle + ('" height="' + height$$8);
    if (zIndex) {
      dStyle = dStyle + ('" z-index="' + zIndex);
    }
    if (bgColor$$1) {
      dStyle = dStyle + ('" bgColor="' + bgColor$$1);
    } else {
      dStyle = dStyle + '" bgColor="#000000';
    }
    if (visibility) {
      dStyle = dStyle + ('" visibility="' + NSVisType[visibility]);
    }
    dStyle = dStyle + '" ';
  } else {
    dStyle = 'style="font-size : ' + fontSize + "pt; ";
    dStyle = dStyle + ("left : " + left$$2 + "px; ");
    dStyle = dStyle + ("top : " + top$$2 + "px; ");
    dStyle = dStyle + ("width : " + width$$9 + "px; ");
    dStyle = dStyle + ("height : " + height$$8 + "px; ");
    if (zIndex) {
      dStyle = dStyle + ("z-index : " + zIndex + "; ");
    }
    if (bgColor$$1) {
      dStyle = dStyle + ("background-color : " + bgColor$$1 + "; ");
    }
    if (visibility) {
      dStyle = dStyle + ("visibility : " + visibility + "; ");
    }
    dStyle = dStyle + '" ';
  }
  return dStyle;
}
function Is() {
  var v22 = navigator.appName;
  var appName = JAM.call(v22.toLowerCase, v22, [], JAM.policy.p1);
  var v23 = navigator.appVersion;
  var version$$5 = JAM.call(v23.toLowerCase, v23, [], JAM.policy.p1);
  var v24 = navigator.userAgent;
  var agent = JAM.call(v24.toLowerCase, v24, [], JAM.policy.p1);
  var v25 = navigator.platform;
  var platform = JAM.call(v25.toLowerCase, v25, [], JAM.policy.p1);
  var v689 = JAM.call(parseInt, null, [version$$5], JAM.policy.p1);
  this.major = v689;
  var v690 = JAM.call(parseFloat, null, [version$$5], JAM.policy.p1);
  this.minor = v690;
  this.nsa = JAM.call(agent.indexOf, agent, ["netscape"], JAM.policy.p1) != -1;
  this.mza = JAM.call(agent.indexOf, agent, ["mozilla"], JAM.policy.p1) != -1;
  this.gla = JAM.call(agent.indexOf, agent, ["galeon"], JAM.policy.p1) != -1;
  var v29 = this.mza;
  if (v29) {
    v29 = !this.nsa;
  }
  this.mza = v29;
  if (this.mza) {
    version$$5 = JAM.call(agent.substring, agent, [JAM.call(agent.indexOf, agent, ["rv:"], JAM.policy.p1) + 3, JAM.call(agent.indexOf, agent, [")"], JAM.policy.p1)], JAM.policy.p1);
    this.nsa = false;
    if (JAM.call(agent.indexOf, agent, ["rv:"], JAM.policy.p1) != -1) {
      var v691 = JAM.call(parseInt, null, [version$$5], JAM.policy.p1);
      this.major = v691;
      var v692 = JAM.call(parseFloat, null, [version$$5], JAM.policy.p1);
      this.minor = v692;
      var v32 = this.mza;
      if (v32) {
        v32 = this.major == 1;
      }
      this.mz1 = v32;
    } else {
      this.mza = false;
      version$$5 = this.minor;
    }
  }
  if (this.gla) {
    version$$5 = JAM.call(agent.substring, agent, [JAM.call(agent.indexOf, agent, ["galeon/"], JAM.policy.p1) + 7, JAM.call(agent.indexOf, agent, ["("], JAM.policy.p1) - 1], JAM.policy.p1);
    this.nsa = false;
    if (JAM.call(agent.indexOf, agent, ["galeon/"], JAM.policy.p1) != -1) {
      var v693 = JAM.call(parseInt, null, [version$$5], JAM.policy.p1);
      this.major = v693;
      var v694 = JAM.call(parseFloat, null, [version$$5], JAM.policy.p1);
      this.minor = v694;
      var v37 = this.gla;
      if (v37) {
        v37 = this.major == 1;
      }
      this.gl1 = v37;
    } else {
      this.gla = false;
      version$$5 = this.version;
    }
  }
  this.version = version$$5;
  this.nsn = JAM.call(appName.indexOf, appName, ["netscape"], JAM.policy.p1) != -1;
  var v41 = this.nsn;
  if (v41) {
    v41 = this.major == 2;
  }
  this.ns2 = v41;
  var v42 = this.nsn;
  if (v42) {
    v42 = this.major == 3;
  }
  this.ns3 = v42;
  var v43 = this.nsn;
  if (v43) {
    v43 = this.major == 4;
  }
  this.ns4 = v43;
  var v44 = this.nsa;
  if (v44) {
    v44 = this.major >= 5;
  }
  this.ns6 = v44;
  if (this.ns6) {
    var v695 = JAM.call(agent.slice, agent, [JAM.call(agent.indexOf, agent, ["netscape6/"], JAM.policy.p1) + 10, agent.length], JAM.policy.p1);
    this.version = v695;
  }
  var v48 = JAM.call(appName.indexOf, appName, ["internet explorer"], JAM.policy.p1) != -1;
  if (v48) {
    v48 = JAM.call(agent.indexOf, agent, ["opera"], JAM.policy.p1) == -1;
  }
  this.ie = v48;
  var v49 = this.ie;
  if (v49) {
    v49 = this.major == 3;
  }
  this.ie3 = v49;
  var v317 = this.ie;
  if (v317) {
    v317 = this.major == 4;
  }
  var v50 = v317;
  if (v50) {
    v50 = JAM.call(agent.indexOf, agent, ["msie 4."], JAM.policy.p1) != -1;
  }
  this.ie4 = v50;
  var v319 = this.ie;
  if (v319) {
    v319 = this.major == 4;
  }
  var v51 = v319;
  if (v51) {
    v51 = JAM.call(agent.indexOf, agent, ["msie 5."], JAM.policy.p1) != -1;
  }
  this.ie5 = v51;
  var v321 = this.ie;
  if (v321) {
    v321 = this.major == 4;
  }
  var v52 = v321;
  if (v52) {
    v52 = JAM.call(agent.indexOf, agent, ["msie 6."], JAM.policy.p1) != -1;
  }
  this.ie6 = v52;
  var v520 = this.ie4;
  if (!v520) {
    v520 = this.ie5;
  }
  var v323 = v520;
  if (!v323) {
    v323 = this.ie6;
  }
  if (v323) {
    var v696 = JAM.call(agent.slice, agent, [JAM.call(agent.indexOf, agent, ["msie "], JAM.policy.p1) + 5, agent.length], JAM.policy.p1);
    this.version = v696;
    var v55 = this.version;
    var v325 = this.version;
    var v697 = JAM.call(v55.slice, v55, [0, JAM.call(v325.indexOf, v325, [";"], JAM.policy.p1)], JAM.policy.p1);
    this.version = v697;
  }
  var v326 = this.ie;
  if (v326) {
    v326 = !this.ie3;
  }
  var v58 = v326;
  if (v58) {
    v58 = !this.ie4;
  }
  this.ieX = v58;
  this.op = JAM.call(agent.indexOf, agent, ["opera"], JAM.policy.p1) != -1;
  var v328 = this.op;
  if (v328) {
    v328 = this.major == 4;
  }
  var v60 = v328;
  if (v60) {
    v60 = JAM.call(agent.indexOf, agent, ["opera 4."], JAM.policy.p1) != -1;
  }
  this.op4 = v60;
  var v330 = this.op;
  if (v330) {
    v330 = this.major == 4;
  }
  var v61 = v330;
  if (v61) {
    v61 = JAM.call(agent.indexOf, agent, ["opera 5."], JAM.policy.p1) != -1;
  }
  this.op5 = v61;
  var v332 = this.op;
  if (v332) {
    v332 = this.major == 4;
  }
  var v62 = v332;
  if (v62) {
    v62 = JAM.call(agent.indexOf, agent, ["opera 6."], JAM.policy.p1) != -1;
  }
  this.op6 = v62;
  if (this.op) {
    this.ie = false;
    this.ie4 = false;
    this.ie5 = false;
    this.ie6 = false;
    var v698 = JAM.call(agent.slice, agent, [JAM.call(agent.indexOf, agent, ["opera"], JAM.policy.p1) + 6, agent.length], JAM.policy.p1);
    this.version = v698;
    var v699 = JAM.call(parseFloat, null, [this.version], JAM.policy.p1);
    this.version = v699;
  }
  this.kq = JAM.call(agent.indexOf, agent, ["konqueror"], JAM.policy.p1) != -1;
  if (this.kq) {
    var v700 = JAM.call(agent.substring, agent, [JAM.call(agent.indexOf, agent, ["konqueror/"], JAM.policy.p1) + 10, agent.length], JAM.policy.p1);
    this.version = v700;
    var v70 = this.version;
    var v336 = this.version;
    var v701 = JAM.call(v70.substring, v70, [0, JAM.call(v336.indexOf, v336, [";"], JAM.policy.p1)], JAM.policy.p1);
    this.version = v701;
    var v702 = JAM.call(parseInt, null, [this.version], JAM.policy.p1);
    this.major = v702;
    var v703 = JAM.call(parseFloat, null, [this.version], JAM.policy.p1);
    this.minor = v703;
    this.mza = false;
  }
  var v75 = this.kq;
  if (v75) {
    v75 = this.major == 2;
  }
  this.kq2 = v75;
  var v76 = this.kq;
  if (v76) {
    v76 = this.major == 3;
  }
  this.kq3 = v76;
  this.w3c = !!document.getElementById;
  this.win32 = JAM.call(platform.indexOf, platform, ["win32"], JAM.policy.p1) != -1;
  this.linux = JAM.call(platform.indexOf, platform, ["linux"], JAM.policy.p1) != -1;
  this.bsd = JAM.call(platform.indexOf, platform, ["bsd"], JAM.policy.p1) != -1;
  return;
}
function setTagFontColor(tag$$1, color$$2) {
  var v340 = is.ie4;
  if (!v340) {
    v340 = is.w3c;
  }
  if (v340) {
    tag$$1.style.color = color$$2;
  } else {
    if (is.ns4) {
      tag$$1.color = color$$2;
    } else {
    }
  }
  return;
}
function setTagFontStyle(tag$$2, style$$6) {
  var v341 = is.ie4;
  if (!v341) {
    v341 = is.w3c;
  }
  if (v341) {
    tag$$2.style.fontStyle = style$$6;
  } else {
    if (is.ns4) {
      tag$$2.fontStyle = style$$6;
    } else {
    }
  }
  return;
}
function mousePosLeft(event$$1) {
  var leftPos;
  var v342 = is.ie4;
  if (!v342) {
    var v528 = is.w3c;
    if (v528) {
      var v670 = is.ns6;
      if (!v670) {
        v670 = is.mza;
      }
      v528 = !v670;
    }
    v342 = v528;
  }
  if (v342) {
    leftPos = event$$1.clientX;
  } else {
    var v530 = is.ns4;
    if (!v530) {
      v530 = is.ns6;
    }
    var v343 = v530;
    if (!v343) {
      v343 = is.mza;
    }
    if (v343) {
      leftPos = event$$1.pageX;
    }
  }
  return leftPos;
}
function mousePosTop(event$$2) {
  var topPos;
  var v344 = is.ie4;
  if (!v344) {
    var v532 = is.w3c;
    if (v532) {
      var v671 = is.ns6;
      if (!v671) {
        v671 = is.mza;
      }
      v532 = !v671;
    }
    v344 = v532;
  }
  if (v344) {
    topPos = event$$2.clientY;
  } else {
    var v534 = is.ns4;
    if (!v534) {
      v534 = is.ns6;
    }
    var v345 = v534;
    if (!v345) {
      v345 = is.mza;
    }
    if (v345) {
      topPos = event$$2.pageY;
    }
  }
  return topPos;
}
function BrowserMenuInfo() {
  if (is.ns4) {
    if (is.win32) {
      this.itemHeight = 16;
    } else {
      if (is.linux) {
        this.itemHeight = 15;
      } else {
        this.itemHeight = 15;
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
    if (is.win32) {
      this.charWidth = 7;
    } else {
      if (is.linux) {
        this.charWidth = 6;
      } else {
        this.charWidth = 6;
      }
    }
    this.divType = "layer";
    window.mtActive = "#FFFF00";
    window.mtPassive = "#FFFFFF";
    window.mbActive = "#FF0000";
    window.mbPassive = "#081C92";
  } else {
    if (is.kq) {
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
      this.divType = "div";
    } else {
      var v346 = is.op5;
      if (!v346) {
        v346 = is.op6;
      }
      if (v346) {
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
        this.divType = "div";
      } else {
        if (is.ie4) {
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
          this.divType = "div";
        } else {
          if (is.ie5) {
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
            this.divType = "div";
          } else {
            if (is.ie6) {
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
              this.divType = "div";
            } else {
              var v537 = is.mza;
              if (!v537) {
                v537 = is.gla;
              }
              var v347 = v537;
              if (!v347) {
                v347 = is.ns6;
              }
              if (v347) {
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
                this.divType = "div";
              } else {
                if (is.w3c) {
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
                  this.divType = "div";
                } else {
                  JAM.call(alert, null, ["This should never happen."], JAM.policy.p1);
                  return 0;
                }
              }
            }
          }
        }
      }
    }
  }
  return;
}
function startSiteMap(mName, mTarget) {
  window.menuName = mName;
  window.menuTarget = mTarget;
  window.menuPntr = "images/tri.gif";
  var v103 = window;
  var v704 = JAM.new(Array, [], JAM.policy.p1);
  v103.menuCells = v704;
  window.menuPopups = 0;
  window.menuHeads = 0;
  window.menuLevel = 0;
  window.menuMain = 0;
  var v104 = window;
  var v705 = JAM.new(Object, [], JAM.policy.p1);
  v104.menuLayers = v705;
  var v105 = window;
  var v706 = JAM.new(Array, [], JAM.policy.p1);
  v105.menuStack = v706;
  var v106 = window;
  var v707 = JAM.new(Array, [], JAM.policy.p1);
  v106.menuBody = v707;
  var v107 = window;
  var v708 = JAM.new(Array, [], JAM.policy.p1);
  v107.bodyCells = v708;
  window.mbActive = "#FF0000";
  window.mtActive = "#FFFF00";
  return;
}
function menuItem(label, action, width$$10, level$$7, popup) {
  if (label == 0) {
    this.label = label;
  } else {
    this.label = "&nbsp;" + label;
  }
  this.action = action;
  this.width = width$$10;
  this.level = level$$7;
  this.popup = popup;
  return;
}
function bodyItem(cells, popup$$1, level$$8, left$$3, top$$3, width$$11, height$$9) {
  this.cells = cells;
  this.popup = popup$$1;
  this.level = level$$8;
  this.left = left$$3;
  this.top = top$$3;
  this.width = width$$11;
  this.height = height$$9;
  return;
}
function stackMenuBody(queue, bPopup, bLevel, bLeft, bTop, bWidth, bHeight) {
  var mBody;
  var i$$2;
  mBody = JAM.new(bodyItem, [window.bodyCells.length, bPopup, bLevel, bLeft, bTop, bWidth, bHeight], JAM.policy.p1);
  JAM.set(window.menuBody, window.menuBody.length, mBody);
  i$$2 = 0;
  var v114 = i$$2 < queue.length;
  for (;v114;) {
    JAM.set(window.bodyCells, window.bodyCells.length, queue[i$$2]);
    i$$2 = i$$2 + 1;
    v114 = i$$2 < queue.length;
  }
  JAM.set(window.bodyCells, window.bodyCells.length, 0);
  return;
}
function addMenuDivider() {
  var mItem;
  var mLevel;
  mLevel = window.menuLevel;
  mItem = JAM.new(menuItem, [0, 0, 0, mLevel, 0], JAM.policy.p1);
  JAM.set(window.menuCells, window.menuCells.length, mItem);
  return;
}
function estLabelWidth(label$$1) {
  var lWidth = 0;
  var i$$3;
  i$$3 = 0;
  var v119 = i$$3 < label$$1.length;
  for (;v119;) {
    lWidth = lWidth + alphaWidth[JAM.call(label$$1.charAt, label$$1, [i$$3], JAM.policy.p1)];
    i$$3 = i$$3 + 1;
    v119 = i$$3 < label$$1.length;
  }
  return lWidth;
}
function addMenuItem(label$$2, action$$1, popup$$2) {
  var mLabel$$1;
  var mAction;
  var mPopup$$1;
  var mItem$$1;
  var mWidth;
  var mLevel$$1;
  mLevel$$1 = window.menuLevel;
  mWidth = JAM.call(estLabelWidth, null, [label$$2], JAM.policy.p1) + 4;
  if (label$$2) {
    mLabel$$1 = label$$2;
  } else {
    JAM.call(alert, null, ["No label given for action " + action$$1 + "."], JAM.policy.p1);
    mLabel$$1 = "no label";
  }
  if (action$$1) {
    mAction = "location='" + action$$1 + "'";
  } else {
    mAction = "clearMenus(" + mLevel$$1 + ")";
  }
  mPopup$$1 = popup$$2;
  var v360 = mPopup$$1;
  if (v360) {
    v360 = mLevel$$1 > 0;
  }
  if (v360) {
    mWidth = mWidth + 15;
  }
  if (mLevel$$1 == 0) {
    window.menuHeads = window.menuHeads + 1;
  }
  mItem$$1 = JAM.new(menuItem, [mLabel$$1, mAction, mWidth, mLevel$$1, mPopup$$1], JAM.policy.p1);
  JAM.set(window.menuCells, window.menuCells.length, mItem$$1);
  return;
}
function startMenu(label$$3, action$$2) {
  var v363 = window.menuPopups;
  window.menuPopups = window.menuPopups + 1;
  JAM.call(addMenuItem, null, [label$$3, action$$2, "popup" + v363], JAM.policy.p1);
  window.menuLevel = window.menuLevel + 1;
  return;
}
function endMenu() {
  window.menuLevel = window.menuLevel - 1;
  return;
}
function menuLayer(label$$4, action$$3) {
  this.name = name;
  this.label = label$$4;
  this.action = action$$3;
  return;
}
function buildMenuCell(index$$39, left$$4, top$$4, width$$12, height$$10) {
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
  mLeft = left$$4;
  mTop = top$$4;
  mWidth$$1 = width$$12;
  mHeight = height$$10;
  mLabel$$2 = window.menuCells[index$$39].label;
  mAction$$1 = window.menuCells[index$$39].action;
  JAM.call(document.write, document, ["<" + blInfo.divType + ' id="' + mName$$1], JAM.policy.p1);
  JAM.call(document.write, document, ['" class="' + mClass + '" '], JAM.policy.p1);
  JAM.call(document.write, document, [JAM.call(setStyle, null, [blInfo.divType, blInfo.fontSize, mLeft, mTop, mWidth$$1, mHeight, 0, window.mbPassive, "inherit"], JAM.policy.p1)], JAM.policy.p1);
  JAM.call(document.write, document, [' onclick="' + mAction$$1 + '" '], JAM.policy.p1);
  mPopup = window.menuCells[index$$39].popup;
  if (mPopup) {
    JAM.call(document.write, document, ['onmouseover="popMenu(' + mLevel$$2 + ",'" + mName$$1 + "','" + mPopup + "'" + ');" '], JAM.policy.p1);
    JAM.call(document.write, document, ['onmouseout="setColorPassive(' + "'" + mName$$1 + "'" + ');">'], JAM.policy.p1);
  } else {
    JAM.call(document.write, document, ['onmouseover="unPopMenus(' + mLevel$$2 + ",'" + mName$$1 + "'" + ');" '], JAM.policy.p1);
    JAM.call(document.write, document, ['onmouseout="setColorPassive(' + "'" + mName$$1 + "'" + ');">'], JAM.policy.p1);
  }
  var v141 = window.menuLayers;
  var v142 = mName$$1;
  var v709 = JAM.new(menuLayer, [mLabel$$2, mAction$$1], JAM.policy.p1);
  JAM.set(v141, v142, v709);
  if (blInfo.divType == "layer") {
    JAM.call(document.write, document, [JAM.call(mLabel$$2.fontcolor, mLabel$$2, [mtPassive], JAM.policy.p1)], JAM.policy.p1);
  } else {
    JAM.call(document.write, document, [mLabel$$2], JAM.policy.p1);
  }
  var v381 = mPopup;
  if (v381) {
    v381 = mLevel$$2 >= 1;
  }
  if (v381) {
    JAM.call(document.write, document, ['&nbsp;<img src="' + window.menuPntr + '" border="0">'], JAM.policy.p1);
  }
  JAM.call(document.writeln, document, ["</" + blInfo.divType + ">"], JAM.policy.p1);
  return;
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
  JAM.call(document.write, document, [JAM.call(setStyle, null, [blInfo.divType, blInfo.fontSize, bLeft$$1, bTop$$1, lWidth$$1, lHeight, bLevel$$1 + 1, "#000000", "hidden"], JAM.policy.p1)], JAM.policy.p1);
  JAM.call(document.writeln, document, [">"], JAM.policy.p1);
  mLeft$$1 = blInfo.leftOffset;
  mTop$$1 = blInfo.mTopOffset;
  i$$4 = 0;
  var v156 = i$$4 < cQueue.length;
  for (;v156;) {
    mLabel = window.menuCells[cQueue[i$$4]].label;
    if (mLabel) {
      JAM.call(buildMenuCell, null, [cQueue[i$$4], mLeft$$1, mTop$$1, bWidth$$1, blInfo.itemHeight], JAM.policy.p1);
      mTop$$1 = mTop$$1 + (blInfo.itemHeight + blInfo.cellOffset);
    } else {
      if (mLabel == 0) {
        mTop$$1 = mTop$$1 + blInfo.dividerHeight;
      } else {
        JAM.call(alert, null, ["Expecting label in buildMenuBody."], JAM.policy.p1);
        return 0;
      }
    }
    i$$4 = i$$4 + 1;
    v156 = i$$4 < cQueue.length;
  }
  JAM.call(document.writeln, document, ["</" + blInfo.divType + ">"], JAM.policy.p1);
  return;
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
  for (;v167;) {
    bCells = window.menuBody[i$$5].cells;
    bName$$1 = window.menuBody[i$$5].popup;
    bLevel$$2 = window.menuBody[i$$5].level;
    bLeft$$2 = window.menuBody[i$$5].left;
    bTop$$2 = window.menuBody[i$$5].top;
    bWidth$$2 = window.menuBody[i$$5].width;
    bHeight$$2 = window.menuBody[i$$5].height;
    cQueue$$1 = JAM.new(Array, [], JAM.policy.p1);
    cCount = 0;
    var v403 = bCells < window.bodyCells.length;
    if (v403) {
      v403 = window.bodyCells[bCells] > 0;
    }
    var v166 = v403;
    for (;v166;) {
      var v165 = cCount;
      cCount = cCount + 1;
      var v404 = window.bodyCells;
      var v405 = bCells;
      bCells = bCells + 1;
      cQueue$$1[v165] = v404[v405];
      var v406 = bCells < window.bodyCells.length;
      if (v406) {
        v406 = window.bodyCells[bCells] > 0;
      }
      v166 = v406;
    }
    JAM.call(buildMenuBody, null, [cQueue$$1, bName$$1, bLevel$$2, bLeft$$2, bTop$$2, bWidth$$2, bHeight$$2], JAM.policy.p1);
    cQueue$$1 = null;
    i$$5 = i$$5 + 1;
    v167 = i$$5 < window.menuBody.length;
  }
  return;
}
function queueMenuBuilds(mIndex, mLevel$$3, mPopup$$2, mLeft$$2, mTop$$2) {
  var queue$$1 = JAM.new(Array, [], JAM.policy.p1);
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
  var v408 = i$$6 < window.menuCells.length;
  if (v408) {
    v408 = window.menuCells[i$$6].level >= mLevel$$3;
  }
  var v170 = v408;
  for (;v170;) {
    if (window.menuCells[i$$6].level == mLevel$$3) {
      sWidth = JAM.call(Math.max, Math, [sWidth, window.menuCells[i$$6].width], JAM.policy.p1);
    }
    i$$6 = i$$6 + 1;
    var v411 = i$$6 < window.menuCells.length;
    if (v411) {
      v411 = window.menuCells[i$$6].level >= mLevel$$3;
    }
    v170 = v411;
  }
  sLeft = mLeft$$2 + sWidth + 2;
  i$$6 = mIndex;
  var v412 = i$$6 < window.menuCells.length;
  if (v412) {
    v412 = window.menuCells[i$$6].level >= mLevel$$3;
  }
  var v177 = v412;
  for (;v177;) {
    queue$$1[queue$$1.length] = i$$6;
    if (window.menuCells[i$$6].popup) {
      sPopup = window.menuCells[i$$6].popup;
      i$$6 = i$$6 + 1;
      i$$6 = JAM.call(queueMenuBuilds, null, [i$$6, mLevel$$3 + 1, sPopup, sLeft, sTop], JAM.policy.p1);
      sTop = sTop + (blInfo.itemHeight + blInfo.cellOffset);
      sHeight = sHeight + (blInfo.itemHeight + blInfo.cellOffset);
    } else {
      if (window.menuCells[i$$6].label) {
        i$$6 = i$$6 + 1;
        sTop = sTop + (blInfo.itemHeight + blInfo.cellOffset);
        sHeight = sHeight + (blInfo.itemHeight + blInfo.cellOffset);
      } else {
        i$$6 = i$$6 + 1;
        sTop = sTop + blInfo.dividerHeight;
        sHeight = sHeight + blInfo.dividerHeight;
      }
    }
    var v422 = i$$6 < window.menuCells.length;
    if (v422) {
      v422 = window.menuCells[i$$6].level >= mLevel$$3;
    }
    v177 = v422;
  }
  if (queue$$1.length > 0) {
    JAM.call(stackMenuBody, null, [queue$$1, mPopup$$2, mLevel$$3, mLeft$$2, mTop$$2, sWidth, sHeight - blInfo.cellOffset], JAM.policy.p1);
  }
  queue$$1 = null;
  return i$$6;
}
function endSiteMap() {
  return;
}
function drawHMenuBar(left$$5, top$$5, width$$13, height$$11, padding, graphic) {
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
  bLeft$$3 = left$$5;
  bTop$$3 = top$$5;
  bWidth$$3 = width$$13 + blInfo.wBarPadding;
  bHeight$$3 = height$$11 + blInfo.itemHeight + blInfo.hBarPadding;
  iPadding = padding + blInfo.itemPadding;
  bGraphic = graphic;
  JAM.call(document.write, document, ["<" + blInfo.divType + ' id="menuBar" class="menuBar" '], JAM.policy.p1);
  JAM.call(document.write, document, [JAM.call(setStyle, null, [blInfo.divType, blInfo.fontSize, bLeft$$3, bTop$$3, bWidth$$3, bHeight$$3, 0, null, "visible"], JAM.policy.p1)], JAM.policy.p1);
  JAM.call(document.writeln, document, [">"], JAM.policy.p1);
  JAM.call(document.writeln, document, ['<img name="menuImage" src="' + bGraphic + '" class="menuBar" border="1" width="' + width$$13 + '" height="' + height$$11 + '">'], JAM.policy.p1);
  iLeft = blInfo.leftOffset;
  mTop$$3 = height$$11 + blInfo.mBarOffset;
  bTop$$3 = bTop$$3 + blInfo.bBarOffset;
  i$$7 = 0;
  var v194 = i$$7 < window.menuCells.length;
  for (;v194;) {
    iWidth = window.menuCells[i$$7].width + iPadding;
    iWidth = JAM.call(Math.min, Math, [iWidth, bWidth$$3 - iLeft + blInfo.menuPadding], JAM.policy.p1);
    JAM.call(buildMenuCell, null, [i$$7, iLeft, mTop$$3, iWidth, blInfo.itemHeight], JAM.policy.p1);
    if (window.menuCells[i$$7].popup) {
      mPopup = window.menuCells[i$$7].popup;
      i$$7 = i$$7 + 1;
      i$$7 = JAM.call(queueMenuBuilds, null, [i$$7, 1, mPopup, bLeft$$3, bTop$$3 + bHeight$$3], JAM.policy.p1);
    }
    bLeft$$3 = bLeft$$3 + (iWidth + blInfo.itemSpacing);
    iLeft = iLeft + (iWidth + blInfo.itemSpacing);
    v194 = i$$7 < window.menuCells.length;
  }
  JAM.call(document.writeln, document, ["</" + blInfo.divType + ">"], JAM.policy.p1);
  JAM.call(buildMenuBodies, null, [], JAM.policy.p1);
  JAM.call(document.close, document, [], JAM.policy.p1);
  return;
}
function drawVMenuBar(left$$6, top$$6, width$$14, height$$12, padding$$1, graphic$$1) {
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
  bLeft$$4 = left$$6;
  bTop$$4 = top$$6;
  bWidth$$4 = width$$14 + blInfo.wBarPadding;
  bHeight$$4 = height$$12;
  nTopItems = 0;
  i$$8 = 0;
  var v198 = i$$8 < window.menuCells.length;
  for (;v198;) {
    if (window.menuCells[i$$8].level == 0) {
      nTopItems = nTopItems + 1;
    }
    i$$8 = i$$8 + 1;
    v198 = i$$8 < window.menuCells.length;
  }
  mHeight$$1 = nTopItems * (blInfo.itemHeight + blInfo.cellOffset);
  i$$8 = 0;
  iPadding$$1 = padding$$1 + blInfo.itemPadding;
  bGraphic$$1 = graphic$$1;
  JAM.call(document.write, document, ["<" + blInfo.divType + ' id="menuBar" class="menuBar" '], JAM.policy.p1);
  JAM.call(document.write, document, [JAM.call(setStyle, null, [blInfo.divType, blInfo.fontSize, bLeft$$4, bTop$$4, bWidth$$4, bHeight$$4 + mHeight$$1, 0, null, "visible"], JAM.policy.p1)], JAM.policy.p1);
  JAM.call(document.writeln, document, [">"], JAM.policy.p1);
  JAM.call(document.writeln, document, ['<img name="menuImage" src="' + bGraphic$$1 + '"class="menuBar" border="1" width="' + width$$14 + '" height="' + height$$12 + '">'], JAM.policy.p1);
  iLeft$$1 = blInfo.leftOffset;
  mTop$$4 = height$$12 + blInfo.mBarOffset;
  bTop$$4 = bTop$$4 + blInfo.bBarOffset;
  var v212 = i$$8 < window.menuCells.length;
  for (;v212;) {
    iWidth$$1 = window.menuCells[i$$8].width + iPadding$$1;
    iWidth$$1 = JAM.call(Math.min, Math, [iWidth$$1, bWidth$$4 - iLeft$$1 + blInfo.menuPadding], JAM.policy.p1);
    JAM.call(buildMenuCell, null, [i$$8, iLeft$$1, mTop$$4, iWidth$$1, blInfo.itemHeight], JAM.policy.p1);
    if (window.menuCells[i$$8].popup) {
      mPopup = window.menuCells[i$$8].popup;
      i$$8 = i$$8 + 1;
      i$$8 = JAM.call(queueMenuBuilds, null, [i$$8, 1, mPopup, bLeft$$4 + iWidth$$1, bTop$$4 + bHeight$$4], JAM.policy.p1);
    }
    mTop$$4 = mTop$$4 + (blInfo.itemHeight + blInfo.cellOffset);
    bTop$$4 = bTop$$4 + (blInfo.itemHeight + blInfo.cellOffset);
    v212 = i$$8 < window.menuCells.length;
  }
  JAM.call(document.writeln, document, ["</" + blInfo.divType + ">"], JAM.policy.p1);
  JAM.call(buildMenuBodies, null, [], JAM.policy.p1);
  JAM.call(document.close, document, [], JAM.policy.p1);
  return;
}
function loadMe() {
  var v214 = this.action;
  if (JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + v214 + " }");
  } else {
    JAM.call(eval, null, [v214]);
  }
  return;
}
function activateMenus() {
  var mName$$2;
  var mAction$$2;
  var mNode$$7;
  var tStyle;
  tStyle = JAM.call(getStyle, null, [JAM.call(getLayer, null, [document, "test.cell"], JAM.policy.p1)], JAM.policy.p1);
  if (!is.ns4) {
    window.mtPassive = tStyle.color;
    window.mbPassive = tStyle.backgroundColor;
    return;
  }
  for (mName$$2 in window.menuLayers) {
    mAction$$2 = window.menuLayers[mName$$2].action;
    mNode$$7 = JAM.call(getLayer, null, [document, mName$$2], JAM.policy.p1);
    JAM.call(mNode$$7.captureEvents, mNode$$7, [Event.MOUSEDOWN], JAM.policy.p1);
    JAM.set(mNode$$7, "onmousedown", loadMe);
    mNode$$7.action = mAction$$2;
    mNode$$7.fgColor = window.mtPassive;
  }
  return;
}
function findNode(elMain, mName$$3) {
  var elNode;
  var elIndex;
  elNode = JAM.call(getLayer, null, [elMain, mName$$3], JAM.policy.p1);
  elIndex = 0;
  var v464 = !elNode;
  if (v464) {
    v464 = elIndex < stackDepth;
  }
  var v221 = v464;
  for (;v221;) {
    elNode = JAM.call(getLayer, null, [nodeStack[elIndex], mName$$3], JAM.policy.p1);
    elIndex = elIndex + 1;
    var v465 = !elNode;
    if (v465) {
      v465 = elIndex < stackDepth;
    }
    v221 = v465;
  }
  return elNode;
}
function clearMenus(mNum) {
  var v223 = stackDepth > mNum;
  for (;v223;) {
    stackDepth = stackDepth - 1;
    JAM.call(hideLayer, null, [nodeStack[stackDepth]], JAM.policy.p1);
    JAM.set(nameStack, stackDepth, 0);
    JAM.set(nodeStack, stackDepth, 0);
    v223 = stackDepth > mNum;
  }
  return;
}
function unPopMenus(mNum$$1, tag$$3) {
  JAM.call(setLayerColor, null, [tag$$3, window.mbActive, window.mtActive], JAM.policy.p1);
  JAM.call(clearMenus, null, [mNum$$1], JAM.policy.p1);
  if (is.ns4) {
    JAM.call(document.releaseEvents, document, [Event.MOUSEDOWN], JAM.policy.p1);
  }
  return;
}
function setColorPassive(tag$$4) {
  JAM.call(setLayerColor, null, [tag$$4, window.mbPassive, window.mtPassive], JAM.policy.p1);
  if (is.ns4) {
    JAM.call(document.captureEvents, document, [Event.MOUSEDOWN], JAM.policy.p1);
  }
  return;
}
function popMenu(mNum$$2, tag$$5, mName$$4) {
  var style$$7;
  var elLayer$$1;
  JAM.call(clearMenus, null, [mNum$$2], JAM.policy.p1);
  JAM.call(setLayerColor, null, [tag$$5, window.mbActive, window.mtActive], JAM.policy.p1);
  elLayer$$1 = JAM.call(getLayer, null, [document, mName$$4], JAM.policy.p1);
  if (elLayer$$1) {
    JAM.call(showLayer, null, [elLayer$$1], JAM.policy.p1);
    JAM.set(nameStack, stackDepth, mName$$4);
    JAM.set(nodeStack, stackDepth, elLayer$$1);
    stackDepth = stackDepth + 1;
  }
  if (is.ns4) {
    JAM.call(document.releaseEvents, document, [Event.MOUSEDOWN], JAM.policy.p1);
  }
  return;
}
function clearAll(e$$4) {
  JAM.call(clearMenus, null, [0], JAM.policy.p1);
  return;
}
function initialize() {
  JAM.call(activateMenus, null, [], JAM.policy.p1);
  return;
}
var NSVisType = JAM.new(Array, [], JAM.policy.p1);
NSVisType["visible"] = "show";
NSVisType["hidden"] = "hide";
NSVisType["inherit"] = "inherit";
var is = JAM.new(Is, [], JAM.policy.p1);
var blInfo = JAM.new(BrowserMenuInfo, [], JAM.policy.p1);
JAM.call(document.write, document, ["<" + blInfo.divType + ' id="test.cell"'], JAM.policy.p1);
JAM.call(document.write, document, ['" class="menuItem" '], JAM.policy.p1);
JAM.call(document.write, document, [JAM.call(setStyle, null, [blInfo.divType, blInfo.fontSize, 0, 0, 100, 20, null, null, "hidden"], JAM.policy.p1) + ">"], JAM.policy.p1);
JAM.call(document.write, document, ["test.cell"], JAM.policy.p1);
JAM.call(document.writeln, document, ["</" + blInfo.divType + ">"], JAM.policy.p1);
var alphaWidth = JAM.call(Array, null, [], JAM.policy.p1);
alphaWidth["a"] = blInfo.charWidth;
alphaWidth["b"] = blInfo.charWidth;
alphaWidth["c"] = blInfo.charWidth;
alphaWidth["d"] = blInfo.charWidth;
alphaWidth["e"] = blInfo.charWidth;
alphaWidth["f"] = blInfo.charWidth;
alphaWidth["g"] = blInfo.charWidth;
alphaWidth["h"] = blInfo.charWidth;
var v239 = alphaWidth;
var v710 = JAM.call(Math.floor, Math, [blInfo.charWidth * .4], JAM.policy.p1);
v239["i"] = v710;
var v240 = alphaWidth;
var v711 = JAM.call(Math.floor, Math, [blInfo.charWidth * .7], JAM.policy.p1);
v240["j"] = v711;
alphaWidth["k"] = blInfo.charWidth;
var v241 = alphaWidth;
var v712 = JAM.call(Math.floor, Math, [blInfo.charWidth * .4], JAM.policy.p1);
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
var nameStack = JAM.new(Array, [], JAM.policy.p1);
var nodeStack = JAM.new(Array, [], JAM.policy.p1);
var stackDepth = 0;
if (is.ns4) {
  JAM.call(document.captureEvents, document, [Event.MOUSEDOWN], JAM.policy.p1);
  JAM.set(document, "onmousedown", clearAll);
}
JAM.call(startSiteMap, null, ["Menu", "_top"], JAM.policy.p1);
JAM.call(startMenu, null, ["jsWidgets"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Home", "/home.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["What is jsWidgets?", "/readme.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Change Log", "/changelog.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["General Public License", "http://www.gnu.org/copyleft/gpl.html"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Project Page", "http://sourceforge.net/projects/jswidgets"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Download", "http://sourceforge.net/project/showfiles.php?group_id=33495"], JAM.policy.p1);
JAM.call(startMenu, null, ["Competition at SF"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["DynAPI", "http://dynapi.sourceforge.net"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["netWindows", "http://sourceforge.net/projects/netwindows"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["jsui", "http://jsui.sourceforge.net"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["judelib", "http://judelib.sourceforge.net"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["XPDOM", "http://xpdom.sourceforge.net"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Tree Menu", "http://www.treemenu.com"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["gmL-Modul", "http://gml-modul.sourceforge.net"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["PHP Layers", "http://phplayersmenu.sourceforge.net"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["WAB AWT", "http://www.skip-consulting.de/wab/wabawt/"], JAM.policy.p1);
JAM.call(endMenu, null, [], JAM.policy.p1);
JAM.call(endMenu, null, [], JAM.policy.p1);
JAM.call(startMenu, null, ["Examples"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Menus", "/examples/menus.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Notes", "/examples/notes.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Banners", "/examples/banners.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Browsers", "/examples/browsers.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Trees", "/examples/trees.shtml"], JAM.policy.p1);
JAM.call(endMenu, null, [], JAM.policy.p1);
JAM.call(startMenu, null, ["Documentation"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Menus", "/docs/menus.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Notes", "/docs/notes.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Banners", "/docs/banners.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Browsers", "/docs/browsers.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Trees", "/docs/trees.shtml"], JAM.policy.p1);
JAM.call(endMenu, null, [], JAM.policy.p1);
JAM.call(startMenu, null, ["On JavaScript"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Netscape Docs", "http://developer.netscape.com/docs/manuals/javascript.html"], JAM.policy.p1);
JAM.call(startMenu, null, ["ECMA Script"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["ECMA -262", "http://www.ecma.ch/ecma1/STAND/ECMA-262.HTM"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["DOM Level 1 Binding", "http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html"], JAM.policy.p1);
JAM.call(endMenu, null, [], JAM.policy.p1);
JAM.call(startMenu, null, ["Others Examples"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Javascript Source", "http://javascript.internet.com/"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Javascript.com", "http://www.javascript.com"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Javascript Resources", "http://www.jsr.communitech.net/index3.htm"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["W3Schools Examples", "http://www.w3schools.com/js/js_examples.asp"], JAM.policy.p1);
JAM.call(endMenu, null, [], JAM.policy.p1);
JAM.call(endSiteMap, null, [], JAM.policy.p1);
var v634 = is.w3c;
if (!v634) {
  v634 = is.ie4;
}
var v500 = v634;
if (!v500) {
  var v635 = is.ns4;
  if (v635) {
    v635 = !is.hj;
  }
  v500 = v635;
}
if (v500) {
  var barTop = 20;
  var barLeft = 50;
  var barWidth = 370;
  var barHeight = 44;
  var itemPadding = 5;
  var barImage = "images/title.png";
  JAM.call(drawHMenuBar, null, [barLeft, barTop, barWidth, barHeight, itemPadding, barImage], JAM.policy.p1);
}
if (is.w3c) {
  JAM.call(document.writeln, document, ['<div style="position : relative; top : 15px; float : right; padding-right : 42px; text-align : right">'], JAM.policy.p1);
  JAM.call(document.writeln, document, ['<a href="http://sourceforge.net/projects/jswidgets"><img src="http://sflogo.sourceforge.net/sflogo.php?group_id=33495&type=15" width="150" height="40" border="0" alt="Get Browser-Independent Javascript Widgets at SourceForge.net. Fast, secure and Free Open Source software downloads" /></a>'], JAM.policy.p1);
  JAM.call(document.writeln, document, ["</div>"], JAM.policy.p1);
} else {
  if (is.ns4) {
    JAM.call(document.writeln, document, ['<layer top="20" left="400">'], JAM.policy.p1);
    JAM.call(document.writeln, document, ['<a href="http://sourceforge.net/projects/jswidgets"><img src="http://sflogo.sourceforge.net/sflogo.php?group_id=33495&type=15" width="150" height="40" border="0" alt="Get Browser-Independent Javascript Widgets at SourceForge.net. Fast, secure and Free Open Source software downloads" /></a>'], JAM.policy.p1);
    JAM.call(document.writeln, document, ["</layer>"], JAM.policy.p1);
  }
}
document.body.background = "images/researchbg.gif";
JAM.set(document.body, "onload", initialize);
JAM.set(JAM.call(document.getElementById, document, ["cleardiv"], JAM.policy.p1), "onmouseover", clearAll)

