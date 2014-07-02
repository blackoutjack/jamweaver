function getNSLayer(inNode, inName) {
  var node$$2;
  var i$$1;
  node$$2 = inNode[inName];
  i$$1 = 0;
  var v278 = !node$$2;
  if(v278) {
    var v494 = inNode.layers;
    if(v494) {
      var v667 = inNode.layers;
      var v634 = v667.length;
      v494 = i$$1 < v634
    }
    v278 = v494
  }
  var v1 = v278;
  for(;v1;) {
    var v495 = inNode.layers;
    var v279 = v495[i$$1];
    var v0 = v279.document;
    node$$2 = getNSLayer(v0, inName);
    i$$1 = i$$1 + 1;
    var v280 = !node$$2;
    if(v280) {
      var v496 = inNode.layers;
      if(v496) {
        var v668 = inNode.layers;
        var v635 = v668.length;
        v496 = i$$1 < v635
      }
      v280 = v496
    }
    v1 = v280
  }
  return node$$2
}
function getLayer(inNode$$1, inName$$1) {
  var node$$3;
  var v5 = inNode$$1.getElementById;
  if(v5) {
    node$$3 = JAMScript.callIntrospect(inNode$$1.getElementById, inNode$$1, [inName$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }else {
    var v4 = inNode$$1.all;
    if(v4) {
      var v2 = inNode$$1.all;
      node$$3 = v2[inName$$1]
    }else {
      var v3 = inNode$$1.layers;
      if(v3) {
        node$$3 = getNSLayer(inNode$$1, inName$$1)
      }
    }
  }
  var v7 = !node$$3;
  if(v7) {
    var v281 = "Could not find layer " + inName$$1;
    var v6 = v281 + ".";
    alert(v6)
  }
  return node$$3
}
function getStyle(inNode$$2) {
  var style;
  var v282 = is.w3c;
  var v497 = !v282;
  if(v497) {
    v282 = is.ie4
  }
  var v9 = v282;
  if(v9) {
    style = inNode$$2.style
  }else {
    var v8 = is.ns4;
    if(v8) {
      style = inNode$$2
    }else {
      style = 0
    }
  }
  return style
}
function setLayerPos(inNode$$3, left$$2, top$$2) {
  var v283 = is.ie4;
  var v498 = !v283;
  if(v498) {
    v283 = is.w3c
  }
  var v13 = v283;
  if(v13) {
    var v10 = inNode$$3.style;
    v10.left = left$$2 + "px";
    var v11 = inNode$$3.style;
    v11.top = top$$2 + "px"
  }else {
    var v12 = is.ns4;
    if(v12) {
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
  var v285 = !v14;
  if(v285) {
    var v284 = mNode$$2.style;
    v14 = v284.left
  }
  return v14
}
function layerWidth(mNode$$3) {
  var nWidth;
  var v286 = is.ie4;
  var v499 = !v286;
  if(v499) {
    v286 = is.w3c
  }
  var v18 = v286;
  if(v18) {
    var v287 = mNode$$3.style;
    var v15 = v287.width;
    nWidth = parseInt(v15)
  }else {
    var v17 = is.ns4;
    if(v17) {
      var v16 = mNode$$3.width;
      nWidth = parseInt(v16)
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
    var v19 = is.ns4;
    if(v19) {
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
  var v21 = divType == "layer";
  if(v21) {
    dStyle = 'left="' + left$$3;
    var v288 = '" top="' + top$$3;
    dStyle = dStyle + v288;
    var v289 = '" width="' + width$$9;
    dStyle = dStyle + v289;
    var v290 = '" height="' + height$$8;
    dStyle = dStyle + v290;
    if(zIndex) {
      var v291 = '" z-index="' + zIndex;
      dStyle = dStyle + v291
    }
    if(bgColor$$1) {
      var v292 = '" bgColor="' + bgColor$$1;
      dStyle = dStyle + v292
    }else {
      dStyle = dStyle + '" bgColor="#000000'
    }
    if(visibility) {
      var v500 = NSVisType[visibility];
      var v293 = '" visibility="' + v500;
      dStyle = dStyle + v293
    }
    dStyle = dStyle + '" '
  }else {
    var v20 = 'style="font-size : ' + fontSize;
    dStyle = v20 + "pt; ";
    var v501 = "left : " + left$$3;
    var v294 = v501 + "px; ";
    dStyle = dStyle + v294;
    var v502 = "top : " + top$$3;
    var v295 = v502 + "px; ";
    dStyle = dStyle + v295;
    var v503 = "width : " + width$$9;
    var v296 = v503 + "px; ";
    dStyle = dStyle + v296;
    var v504 = "height : " + height$$8;
    var v297 = v504 + "px; ";
    dStyle = dStyle + v297;
    if(zIndex) {
      var v505 = "z-index : " + zIndex;
      var v298 = v505 + "; ";
      dStyle = dStyle + v298
    }
    if(bgColor$$1) {
      var v506 = "background-color : " + bgColor$$1;
      var v299 = v506 + "; ";
      dStyle = dStyle + v299
    }
    if(visibility) {
      var v507 = "visibility : " + visibility;
      var v300 = v507 + "; ";
      dStyle = dStyle + v300
    }
    dStyle = dStyle + '" '
  }
  return dStyle
}
function Is() {
  var v22 = navigator.appName;
  var appName = v22.toLowerCase();
  var v23 = navigator.appVersion;
  var version$$5 = v23.toLowerCase();
  var v24 = navigator.userAgent;
  var agent = v24.toLowerCase();
  var v25 = navigator.platform;
  var platform = v25.toLowerCase();
  var v689 = parseInt(version$$5);
  this.major = v689;
  var v690 = parseFloat(version$$5);
  this.minor = v690;
  var v26 = agent.indexOf("netscape");
  this.nsa = v26 != -1;
  var v27 = agent.indexOf("mozilla");
  this.mza = v27 != -1;
  var v28 = agent.indexOf("galeon");
  this.gla = v28 != -1;
  var v29 = this.mza;
  if(v29) {
    var v301 = this.nsa;
    v29 = !v301
  }
  this.mza = v29;
  var v34 = this.mza;
  if(v34) {
    var v302 = agent.indexOf("rv:");
    var v30 = v302 + 3;
    var v31 = agent.indexOf(")");
    version$$5 = agent.substring(v30, v31);
    this.nsa = false;
    var v303 = agent.indexOf("rv:");
    var v33 = v303 != -1;
    if(v33) {
      var v691 = parseInt(version$$5);
      this.major = v691;
      var v692 = parseFloat(version$$5);
      this.minor = v692;
      var v32 = this.mza;
      if(v32) {
        var v304 = this.major;
        v32 = v304 == 1
      }
      this.mz1 = v32
    }else {
      this.mza = false;
      version$$5 = this.minor
    }
  }
  var v39 = this.gla;
  if(v39) {
    var v305 = agent.indexOf("galeon/");
    var v35 = v305 + 7;
    var v306 = agent.indexOf("(");
    var v36 = v306 - 1;
    version$$5 = agent.substring(v35, v36);
    this.nsa = false;
    var v307 = agent.indexOf("galeon/");
    var v38 = v307 != -1;
    if(v38) {
      var v693 = parseInt(version$$5);
      this.major = v693;
      var v694 = parseFloat(version$$5);
      this.minor = v694;
      var v37 = this.gla;
      if(v37) {
        var v308 = this.major;
        v37 = v308 == 1
      }
      this.gl1 = v37
    }else {
      this.gla = false;
      version$$5 = this.version
    }
  }
  this.version = version$$5;
  var v40 = appName.indexOf("netscape");
  this.nsn = v40 != -1;
  var v41 = this.nsn;
  if(v41) {
    var v309 = this.major;
    v41 = v309 == 2
  }
  this.ns2 = v41;
  var v42 = this.nsn;
  if(v42) {
    var v310 = this.major;
    v42 = v310 == 3
  }
  this.ns3 = v42;
  var v43 = this.nsn;
  if(v43) {
    var v311 = this.major;
    v43 = v311 == 4
  }
  this.ns4 = v43;
  var v44 = this.nsa;
  if(v44) {
    var v312 = this.major;
    v44 = v312 >= 5
  }
  this.ns6 = v44;
  var v47 = this.ns6;
  if(v47) {
    var v313 = agent.indexOf("netscape6/");
    var v45 = v313 + 10;
    var v46 = agent.length;
    var v695 = JAMScript.callIntrospect(agent.slice, agent, [v45, v46], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    this.version = v695
  }
  var v314 = appName.indexOf("internet explorer");
  var v48 = v314 != -1;
  if(v48) {
    var v315 = agent.indexOf("opera");
    v48 = v315 == -1
  }
  this.ie = v48;
  var v49 = this.ie;
  if(v49) {
    var v316 = this.major;
    v49 = v316 == 3
  }
  this.ie3 = v49;
  var v50 = this.ie;
  if(v50) {
    var v508 = this.major;
    var v317 = v508 == 4;
    if(v317) {
      var v509 = agent.indexOf("msie 4.");
      v317 = v509 != -1
    }
    v50 = v317
  }
  this.ie4 = v50;
  var v51 = this.ie;
  if(v51) {
    var v510 = this.major;
    var v318 = v510 == 4;
    if(v318) {
      var v511 = agent.indexOf("msie 5.");
      v318 = v511 != -1
    }
    v51 = v318
  }
  this.ie5 = v51;
  var v52 = this.ie;
  if(v52) {
    var v512 = this.major;
    var v319 = v512 == 4;
    if(v319) {
      var v513 = agent.indexOf("msie 6.");
      v319 = v513 != -1
    }
    v52 = v319
  }
  this.ie6 = v52;
  var v320 = this.ie4;
  var v515 = !v320;
  if(v515) {
    var v514 = this.ie5;
    var v636 = !v514;
    if(v636) {
      v514 = this.ie6
    }
    v320 = v514
  }
  var v57 = v320;
  if(v57) {
    var v321 = agent.indexOf("msie ");
    var v53 = v321 + 5;
    var v54 = agent.length;
    var v696 = JAMScript.callIntrospect(agent.slice, agent, [v53, v54], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    this.version = v696;
    var v55 = this.version;
    var v322 = this.version;
    var v56 = v322.indexOf(";");
    var v697 = v55.slice(0, v56);
    this.version = v697
  }
  var v58 = this.ie;
  if(v58) {
    var v516 = this.ie3;
    var v323 = !v516;
    if(v323) {
      var v517 = this.ie4;
      v323 = !v517
    }
    v58 = v323
  }
  this.ieX = v58;
  var v59 = agent.indexOf("opera");
  this.op = v59 != -1;
  var v60 = this.op;
  if(v60) {
    var v518 = this.major;
    var v324 = v518 == 4;
    if(v324) {
      var v519 = agent.indexOf("opera 4.");
      v324 = v519 != -1
    }
    v60 = v324
  }
  this.op4 = v60;
  var v61 = this.op;
  if(v61) {
    var v520 = this.major;
    var v325 = v520 == 4;
    if(v325) {
      var v521 = agent.indexOf("opera 5.");
      v325 = v521 != -1
    }
    v61 = v325
  }
  this.op5 = v61;
  var v62 = this.op;
  if(v62) {
    var v522 = this.major;
    var v326 = v522 == 4;
    if(v326) {
      var v523 = agent.indexOf("opera 6.");
      v326 = v523 != -1
    }
    v62 = v326
  }
  this.op6 = v62;
  var v66 = this.op;
  if(v66) {
    this.ie = false;
    this.ie4 = false;
    this.ie5 = false;
    this.ie6 = false;
    var v327 = agent.indexOf("opera");
    var v63 = v327 + 6;
    var v64 = agent.length;
    var v698 = JAMScript.callIntrospect(agent.slice, agent, [v63, v64], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    this.version = v698;
    var v65 = this.version;
    var v699 = parseFloat(v65);
    this.version = v699
  }
  var v67 = agent.indexOf("konqueror");
  this.kq = v67 != -1;
  var v74 = this.kq;
  if(v74) {
    var v328 = agent.indexOf("konqueror/");
    var v68 = v328 + 10;
    var v69 = agent.length;
    var v700 = JAMScript.callIntrospect(agent.substring, agent, [v68, v69], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    this.version = v700;
    var v70 = this.version;
    var v329 = this.version;
    var v71 = v329.indexOf(";");
    var v701 = v70.substring(0, v71);
    this.version = v701;
    var v72 = this.version;
    var v702 = parseInt(v72);
    this.major = v702;
    var v73 = this.version;
    var v703 = parseFloat(v73);
    this.minor = v703;
    this.mza = false
  }
  var v75 = this.kq;
  if(v75) {
    var v330 = this.major;
    v75 = v330 == 2
  }
  this.kq2 = v75;
  var v76 = this.kq;
  if(v76) {
    var v331 = this.major;
    v76 = v331 == 3
  }
  this.kq3 = v76;
  var v332 = document.getElementById;
  var v77 = !v332;
  this.w3c = !v77;
  var v78 = platform.indexOf("win32");
  this.win32 = v78 != -1;
  var v79 = platform.indexOf("linux");
  this.linux = v79 != -1;
  var v80 = platform.indexOf("bsd");
  this.bsd = v80 != -1;
  return
}
function setTagFontColor(tag$$1, color$$2) {
  var v333 = is.ie4;
  var v524 = !v333;
  if(v524) {
    v333 = is.w3c
  }
  var v83 = v333;
  if(v83) {
    var v81 = tag$$1.style;
    v81.color = color$$2
  }else {
    var v82 = is.ns4;
    if(v82) {
      tag$$1.color = color$$2
    }else {
    }
  }
  return
}
function setTagFontStyle(tag$$2, style$$6) {
  var v334 = is.ie4;
  var v525 = !v334;
  if(v525) {
    v334 = is.w3c
  }
  var v86 = v334;
  if(v86) {
    var v84 = tag$$2.style;
    v84.fontStyle = style$$6
  }else {
    var v85 = is.ns4;
    if(v85) {
      tag$$2.fontStyle = style$$6
    }else {
    }
  }
  return
}
function mousePosLeft(event$$1) {
  var leftPos;
  var v335 = is.ie4;
  var v527 = !v335;
  if(v527) {
    var v526 = is.w3c;
    if(v526) {
      var v669 = is.ns6;
      var v681 = !v669;
      if(v681) {
        v669 = is.mza
      }
      var v637 = v669;
      v526 = !v637
    }
    v335 = v526
  }
  var v88 = v335;
  if(v88) {
    leftPos = event$$1.clientX
  }else {
    var v336 = is.ns4;
    var v529 = !v336;
    if(v529) {
      var v528 = is.ns6;
      var v638 = !v528;
      if(v638) {
        v528 = is.mza
      }
      v336 = v528
    }
    var v87 = v336;
    if(v87) {
      leftPos = event$$1.pageX
    }
  }
  return leftPos
}
function mousePosTop(event$$2) {
  var topPos;
  var v337 = is.ie4;
  var v531 = !v337;
  if(v531) {
    var v530 = is.w3c;
    if(v530) {
      var v670 = is.ns6;
      var v682 = !v670;
      if(v682) {
        v670 = is.mza
      }
      var v639 = v670;
      v530 = !v639
    }
    v337 = v530
  }
  var v90 = v337;
  if(v90) {
    topPos = event$$2.clientY
  }else {
    var v338 = is.ns4;
    var v533 = !v338;
    if(v533) {
      var v532 = is.ns6;
      var v640 = !v532;
      if(v640) {
        v532 = is.mza
      }
      v338 = v532
    }
    var v89 = v338;
    if(v89) {
      topPos = event$$2.pageY
    }
  }
  return topPos
}
function BrowserMenuInfo() {
  var v102 = is.ns4;
  if(v102) {
    var v92 = is.win32;
    if(v92) {
      this.itemHeight = 16
    }else {
      var v91 = is.linux;
      if(v91) {
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
    var v94 = is.win32;
    if(v94) {
      this.charWidth = 7
    }else {
      var v93 = is.linux;
      if(v93) {
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
    var v101 = is.kq;
    if(v101) {
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
      var v534 = !v339;
      if(v534) {
        v339 = is.op6
      }
      var v100 = v339;
      if(v100) {
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
        var v99 = is.ie4;
        if(v99) {
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
          var v98 = is.ie5;
          if(v98) {
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
            var v97 = is.ie6;
            if(v97) {
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
              var v536 = !v340;
              if(v536) {
                var v535 = is.gla;
                var v641 = !v535;
                if(v641) {
                  v535 = is.ns6
                }
                v340 = v535
              }
              var v96 = v340;
              if(v96) {
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
                var v95 = is.w3c;
                if(v95) {
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
  var v108 = label$$2 == 0;
  if(v108) {
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
  var v341 = window.bodyCells;
  var v109 = v341.length;
  mBody = new bodyItem(v109, bPopup, bLevel, bLeft, bTop, bWidth, bHeight);
  var v110 = window.menuBody;
  var v342 = window.menuBody;
  var v111 = v342.length;
  JAMScript.set(v110, v111, mBody);
  i$$2 = 0;
  var v343 = queue.length;
  var v114 = i$$2 < v343;
  for(;v114;) {
    var v112 = window.bodyCells;
    var v344 = window.bodyCells;
    var v113 = v344.length;
    JAMScript.set(v112, v113, queue[i$$2]);
    i$$2 = i$$2 + 1;
    var v345 = queue.length;
    v114 = i$$2 < v345
  }
  var v115 = window.bodyCells;
  var v346 = window.bodyCells;
  var v116 = v346.length;
  JAMScript.set(v115, v116, 0);
  return
}
function addMenuDivider() {
  var mItem;
  var mLevel;
  mLevel = window.menuLevel;
  mItem = new menuItem(0, 0, 0, mLevel, 0);
  var v117 = window.menuCells;
  var v347 = window.menuCells;
  var v118 = v347.length;
  JAMScript.set(v117, v118, mItem);
  return
}
function estLabelWidth(label$$3) {
  var lWidth = 0;
  var i$$3;
  i$$3 = 0;
  var v348 = label$$3.length;
  var v119 = i$$3 < v348;
  for(;v119;) {
    var v349 = lWidth;
    var v537 = alphaWidth;
    var v538 = JAMScript.callIntrospect(label$$3.charAt, label$$3, [i$$3], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v350 = v537[v538];
    lWidth = v349 + v350;
    i$$3 = i$$3 + 1;
    var v351 = label$$3.length;
    v119 = i$$3 < v351
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
  var v120 = estLabelWidth(label$$4);
  mWidth = v120 + 4;
  if(label$$4) {
    mLabel$$1 = label$$4
  }else {
    var v352 = "No label given for action " + action$$1;
    var v121 = v352 + ".";
    alert(v121);
    mLabel$$1 = "no label"
  }
  if(action$$1) {
    var v122 = "location='" + action$$1;
    mAction = v122 + "'"
  }else {
    var v123 = "clearMenus(" + mLevel$$1;
    mAction = v123 + ")"
  }
  mPopup$$1 = popup$$2;
  var v353 = mPopup$$1;
  if(v353) {
    v353 = mLevel$$1 > 0
  }
  var v124 = v353;
  if(v124) {
    mWidth = mWidth + 15
  }
  var v125 = mLevel$$1 == 0;
  if(v125) {
    var v354 = window.menuHeads;
    window.menuHeads = v354 + 1
  }
  mItem$$1 = new menuItem(mLabel$$1, mAction, mWidth, mLevel$$1, mPopup$$1);
  var v126 = window.menuCells;
  var v355 = window.menuCells;
  var v127 = v355.length;
  JAMScript.set(v126, v127, mItem$$1);
  return
}
function startMenu(label$$5, action$$2) {
  var v356 = window.menuPopups;
  var v642 = window.menuPopups;
  window.menuPopups = v642 + 1;
  var v128 = "popup" + v356;
  addMenuItem(label$$5, action$$2, v128);
  var v357 = window.menuLevel;
  window.menuLevel = v357 + 1;
  return
}
function endMenu() {
  var v358 = window.menuLevel;
  window.menuLevel = v358 - 1;
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
  var v359 = window.menuCells;
  var v129 = v359[index$$39];
  mLevel$$2 = v129.level;
  mLeft = left$$5;
  mTop = top$$5;
  mWidth$$1 = width$$12;
  mHeight = height$$10;
  var v360 = window.menuCells;
  var v130 = v360[index$$39];
  mLabel$$2 = v130.label;
  var v361 = window.menuCells;
  var v131 = v361[index$$39];
  mAction$$1 = v131.action;
  var v643 = blInfo.divType;
  var v539 = "<" + v643;
  var v362 = v539 + ' id="';
  var v132 = v362 + mName$$1;
  JAMScript.callIntrospect(document.write, document, [v132], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v363 = '" class="' + mClass;
  var v133 = v363 + '" ';
  JAMScript.callIntrospect(document.write, document, [v133], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v364 = blInfo.divType;
  var v365 = blInfo.fontSize;
  var v366 = window.mbPassive;
  var v134 = setStyle(v364, v365, mLeft, mTop, mWidth$$1, mHeight, 0, v366, "inherit");
  JAMScript.callIntrospect(document.write, document, [v134], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v367 = ' onclick="' + mAction$$1;
  var v135 = v367 + '" ';
  JAMScript.callIntrospect(document.write, document, [v135], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v368 = window.menuCells;
  var v136 = v368[index$$39];
  mPopup = v136.popup;
  if(mPopup) {
    var v687 = 'onmouseover="popMenu(' + mLevel$$2;
    var v683 = v687 + ",'";
    var v671 = v683 + mName$$1;
    var v644 = v671 + "','";
    var v540 = v644 + mPopup;
    var v369 = v540 + "'";
    var v137 = v369 + ');" ';
    JAMScript.callIntrospect(document.write, document, [v137], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v645 = 'onmouseout="setColorPassive(' + "'";
    var v541 = v645 + mName$$1;
    var v370 = v541 + "'";
    var v138 = v370 + ');">';
    JAMScript.callIntrospect(document.write, document, [v138], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }else {
    var v672 = 'onmouseover="unPopMenus(' + mLevel$$2;
    var v646 = v672 + ",'";
    var v542 = v646 + mName$$1;
    var v371 = v542 + "'";
    var v139 = v371 + ');" ';
    JAMScript.callIntrospect(document.write, document, [v139], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v647 = 'onmouseout="setColorPassive(' + "'";
    var v543 = v647 + mName$$1;
    var v372 = v543 + "'";
    var v140 = v372 + ');">';
    JAMScript.callIntrospect(document.write, document, [v140], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  var v141 = window.menuLayers;
  var v142 = mName$$1;
  var v709 = new menuLayer(mLabel$$2, mAction$$1);
  JAMScript.set(v141, v142, v709);
  var v373 = blInfo.divType;
  var v144 = v373 == "layer";
  if(v144) {
    var v143 = JAMScript.callIntrospect(mLabel$$2.fontcolor, mLabel$$2, [mtPassive], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.callIntrospect(document.write, document, [v143], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }else {
    JAMScript.callIntrospect(document.write, document, [mLabel$$2], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  var v374 = mPopup;
  if(v374) {
    v374 = mLevel$$2 >= 1
  }
  var v146 = v374;
  if(v146) {
    var v544 = window.menuPntr;
    var v375 = '&nbsp;<img src="' + v544;
    var v145 = v375 + '" border="0">';
    JAMScript.callIntrospect(document.write, document, [v145], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  var v545 = blInfo.divType;
  var v376 = "</" + v545;
  var v147 = v376 + ">";
  JAMScript.callIntrospect(document.writeln, document, [v147], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
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
  var v148 = blInfo.bwPadding;
  lWidth$$1 = bWidth$$1 + v148;
  var v149 = blInfo.bhPadding;
  lHeight = bHeight$$1 + v149;
  var v688 = blInfo.divType;
  var v684 = "<" + v688;
  var v673 = v684 + ' id="';
  var v648 = v673 + bName;
  var v546 = v648 + '" class="';
  var v377 = v546 + bClass;
  var v150 = v377 + '" ';
  JAMScript.callIntrospect(document.write, document, [v150], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v378 = blInfo.divType;
  var v379 = blInfo.fontSize;
  var v380 = bLevel$$1 + 1;
  var v151 = setStyle(v378, v379, bLeft$$1, bTop$$1, lWidth$$1, lHeight, v380, "#000000", "hidden");
  JAMScript.callIntrospect(document.write, document, [v151], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.call(document.writeln, document, [">"]);
  mLeft$$1 = blInfo.leftOffset;
  mTop$$1 = blInfo.mTopOffset;
  i$$4 = 0;
  var v381 = cQueue.length;
  var v156 = i$$4 < v381;
  for(;v156;) {
    var v382 = window.menuCells;
    var v383 = cQueue[i$$4];
    var v152 = v382[v383];
    mLabel = v152.label;
    if(mLabel) {
      var v153 = cQueue[i$$4];
      var v154 = blInfo.itemHeight;
      buildMenuCell(v153, mLeft$$1, mTop$$1, bWidth$$1, v154);
      var v547 = blInfo.itemHeight;
      var v548 = blInfo.cellOffset;
      var v384 = v547 + v548;
      mTop$$1 = mTop$$1 + v384
    }else {
      var v155 = mLabel == 0;
      if(v155) {
        var v385 = blInfo.dividerHeight;
        mTop$$1 = mTop$$1 + v385
      }else {
        alert("Expecting label in buildMenuBody.");
        return 0
      }
    }
    i$$4 = i$$4 + 1;
    var v386 = cQueue.length;
    v156 = i$$4 < v386
  }
  var v549 = blInfo.divType;
  var v387 = "</" + v549;
  var v157 = v387 + ">";
  JAMScript.callIntrospect(document.writeln, document, [v157], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
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
  var v550 = window.menuBody;
  var v388 = v550.length;
  var v167 = i$$5 < v388;
  for(;v167;) {
    var v389 = window.menuBody;
    var v158 = v389[i$$5];
    bCells = v158.cells;
    var v390 = window.menuBody;
    var v159 = v390[i$$5];
    bName$$1 = v159.popup;
    var v391 = window.menuBody;
    var v160 = v391[i$$5];
    bLevel$$2 = v160.level;
    var v392 = window.menuBody;
    var v161 = v392[i$$5];
    bLeft$$2 = v161.left;
    var v393 = window.menuBody;
    var v162 = v393[i$$5];
    bTop$$2 = v162.top;
    var v394 = window.menuBody;
    var v163 = v394[i$$5];
    bWidth$$2 = v163.width;
    var v395 = window.menuBody;
    var v164 = v395[i$$5];
    bHeight$$2 = v164.height;
    cQueue$$1 = new Array;
    cCount = 0;
    var v649 = window.bodyCells;
    var v551 = v649.length;
    var v396 = bCells < v551;
    if(v396) {
      var v650 = window.bodyCells;
      var v552 = v650[bCells];
      v396 = v552 > 0
    }
    var v166 = v396;
    for(;v166;) {
      var v165 = cCount;
      cCount = cCount + 1;
      var v397 = window.bodyCells;
      var v398 = bCells;
      bCells = bCells + 1;
      cQueue$$1[v165] = v397[v398];
      var v651 = window.bodyCells;
      var v553 = v651.length;
      var v399 = bCells < v553;
      if(v399) {
        var v652 = window.bodyCells;
        var v554 = v652[bCells];
        v399 = v554 > 0
      }
      v166 = v399
    }
    buildMenuBody(cQueue$$1, bName$$1, bLevel$$2, bLeft$$2, bTop$$2, bWidth$$2, bHeight$$2);
    cQueue$$1 = null;
    i$$5 = i$$5 + 1;
    var v555 = window.menuBody;
    var v400 = v555.length;
    v167 = i$$5 < v400
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
  var v653 = window.menuCells;
  var v556 = v653.length;
  var v401 = i$$6 < v556;
  if(v401) {
    var v674 = window.menuCells;
    var v654 = v674[i$$6];
    var v557 = v654.level;
    v401 = v557 >= mLevel$$3
  }
  var v170 = v401;
  for(;v170;) {
    var v655 = window.menuCells;
    var v558 = v655[i$$6];
    var v402 = v558.level;
    var v169 = v402 == mLevel$$3;
    if(v169) {
      var v559 = window.menuCells;
      var v403 = v559[i$$6];
      var v168 = v403.width;
      sWidth = JAMScript.callIntrospect(Math.max, Math, [sWidth, v168], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }
    i$$6 = i$$6 + 1;
    var v656 = window.menuCells;
    var v560 = v656.length;
    var v404 = i$$6 < v560;
    if(v404) {
      var v675 = window.menuCells;
      var v657 = v675[i$$6];
      var v561 = v657.level;
      v404 = v561 >= mLevel$$3
    }
    v170 = v404
  }
  var v171 = mLeft$$2 + sWidth;
  sLeft = v171 + 2;
  i$$6 = mIndex;
  var v658 = window.menuCells;
  var v562 = v658.length;
  var v405 = i$$6 < v562;
  if(v405) {
    var v676 = window.menuCells;
    var v659 = v676[i$$6];
    var v563 = v659.level;
    v405 = v563 >= mLevel$$3
  }
  var v177 = v405;
  for(;v177;) {
    var v172 = queue$$1.length;
    queue$$1[v172] = i$$6;
    var v564 = window.menuCells;
    var v406 = v564[i$$6];
    var v176 = v406.popup;
    if(v176) {
      var v407 = window.menuCells;
      var v173 = v407[i$$6];
      sPopup = v173.popup;
      i$$6 = i$$6 + 1;
      var v174 = mLevel$$3 + 1;
      i$$6 = queueMenuBuilds(i$$6, v174, sPopup, sLeft, sTop);
      var v565 = blInfo.itemHeight;
      var v566 = blInfo.cellOffset;
      var v408 = v565 + v566;
      sTop = sTop + v408;
      var v567 = blInfo.itemHeight;
      var v568 = blInfo.cellOffset;
      var v409 = v567 + v568;
      sHeight = sHeight + v409
    }else {
      var v569 = window.menuCells;
      var v410 = v569[i$$6];
      var v175 = v410.label;
      if(v175) {
        i$$6 = i$$6 + 1;
        var v570 = blInfo.itemHeight;
        var v571 = blInfo.cellOffset;
        var v411 = v570 + v571;
        sTop = sTop + v411;
        var v572 = blInfo.itemHeight;
        var v573 = blInfo.cellOffset;
        var v412 = v572 + v573;
        sHeight = sHeight + v412
      }else {
        i$$6 = i$$6 + 1;
        var v413 = blInfo.dividerHeight;
        sTop = sTop + v413;
        var v414 = blInfo.dividerHeight;
        sHeight = sHeight + v414
      }
    }
    var v660 = window.menuCells;
    var v574 = v660.length;
    var v415 = i$$6 < v574;
    if(v415) {
      var v677 = window.menuCells;
      var v661 = v677[i$$6];
      var v575 = v661.level;
      v415 = v575 >= mLevel$$3
    }
    v177 = v415
  }
  var v416 = queue$$1.length;
  var v179 = v416 > 0;
  if(v179) {
    var v417 = blInfo.cellOffset;
    var v178 = sHeight - v417;
    stackMenuBody(queue$$1, mPopup$$2, mLevel$$3, mLeft$$2, mTop$$2, sWidth, v178)
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
  var v180 = blInfo.wBarPadding;
  bWidth$$3 = width$$13 + v180;
  var v418 = blInfo.itemHeight;
  var v181 = height$$11 + v418;
  var v182 = blInfo.hBarPadding;
  bHeight$$3 = v181 + v182;
  var v183 = blInfo.itemPadding;
  iPadding = padding + v183;
  bGraphic = graphic;
  var v576 = blInfo.divType;
  var v419 = "<" + v576;
  var v184 = v419 + ' id="menuBar" class="menuBar" ';
  JAMScript.callIntrospect(document.write, document, [v184], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v420 = blInfo.divType;
  var v421 = blInfo.fontSize;
  var v185 = setStyle(v420, v421, bLeft$$3, bTop$$3, bWidth$$3, bHeight$$3, 0, null, "visible");
  JAMScript.callIntrospect(document.write, document, [v185], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.call(document.writeln, document, [">"]);
  var v685 = '<img name="menuImage" src="' + bGraphic;
  var v678 = v685 + '" class="menuBar" border="1" width="';
  var v662 = v678 + width$$13;
  var v577 = v662 + '" height="';
  var v422 = v577 + height$$11;
  var v186 = v422 + '">';
  JAMScript.callIntrospect(document.writeln, document, [v186], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  iLeft = blInfo.leftOffset;
  var v187 = blInfo.mBarOffset;
  mTop$$3 = height$$11 + v187;
  var v423 = blInfo.bBarOffset;
  bTop$$3 = bTop$$3 + v423;
  i$$7 = 0;
  var v578 = window.menuCells;
  var v424 = v578.length;
  var v194 = i$$7 < v424;
  for(;v194;) {
    var v579 = window.menuCells;
    var v425 = v579[i$$7];
    var v188 = v425.width;
    iWidth = v188 + iPadding;
    var v426 = bWidth$$3 - iLeft;
    var v427 = blInfo.menuPadding;
    var v189 = v426 + v427;
    iWidth = JAMScript.callIntrospect(Math.min, Math, [iWidth, v189], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v190 = blInfo.itemHeight;
    buildMenuCell(i$$7, iLeft, mTop$$3, iWidth, v190);
    var v580 = window.menuCells;
    var v428 = v580[i$$7];
    var v193 = v428.popup;
    if(v193) {
      var v429 = window.menuCells;
      var v191 = v429[i$$7];
      mPopup = v191.popup;
      i$$7 = i$$7 + 1;
      var v192 = bTop$$3 + bHeight$$3;
      i$$7 = queueMenuBuilds(i$$7, 1, mPopup, bLeft$$3, v192)
    }
    var v581 = blInfo.itemSpacing;
    var v430 = iWidth + v581;
    bLeft$$3 = bLeft$$3 + v430;
    var v582 = blInfo.itemSpacing;
    var v431 = iWidth + v582;
    iLeft = iLeft + v431;
    var v583 = window.menuCells;
    var v432 = v583.length;
    v194 = i$$7 < v432
  }
  var v584 = blInfo.divType;
  var v433 = "</" + v584;
  var v195 = v433 + ">";
  JAMScript.callIntrospect(document.writeln, document, [v195], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
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
  var v196 = blInfo.wBarPadding;
  bWidth$$4 = width$$14 + v196;
  bHeight$$4 = height$$12;
  nTopItems = 0;
  i$$8 = 0;
  var v585 = window.menuCells;
  var v434 = v585.length;
  var v198 = i$$8 < v434;
  for(;v198;) {
    var v663 = window.menuCells;
    var v586 = v663[i$$8];
    var v435 = v586.level;
    var v197 = v435 == 0;
    if(v197) {
      nTopItems = nTopItems + 1
    }
    i$$8 = i$$8 + 1;
    var v587 = window.menuCells;
    var v436 = v587.length;
    v198 = i$$8 < v436
  }
  var v437 = blInfo.itemHeight;
  var v438 = blInfo.cellOffset;
  var v199 = v437 + v438;
  mHeight$$1 = nTopItems * v199;
  i$$8 = 0;
  var v200 = blInfo.itemPadding;
  iPadding$$1 = padding$$1 + v200;
  bGraphic$$1 = graphic$$1;
  var v588 = blInfo.divType;
  var v439 = "<" + v588;
  var v201 = v439 + ' id="menuBar" class="menuBar" ';
  JAMScript.callIntrospect(document.write, document, [v201], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v440 = blInfo.divType;
  var v441 = blInfo.fontSize;
  var v442 = bHeight$$4 + mHeight$$1;
  var v202 = setStyle(v440, v441, bLeft$$4, bTop$$4, bWidth$$4, v442, 0, null, "visible");
  JAMScript.callIntrospect(document.write, document, [v202], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.call(document.writeln, document, [">"]);
  var v686 = '<img name="menuImage" src="' + bGraphic$$1;
  var v679 = v686 + '"class="menuBar" border="1" width="';
  var v664 = v679 + width$$14;
  var v589 = v664 + '" height="';
  var v443 = v589 + height$$12;
  var v203 = v443 + '">';
  JAMScript.callIntrospect(document.writeln, document, [v203], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  iLeft$$1 = blInfo.leftOffset;
  var v204 = blInfo.mBarOffset;
  mTop$$4 = height$$12 + v204;
  var v444 = blInfo.bBarOffset;
  bTop$$4 = bTop$$4 + v444;
  var v590 = window.menuCells;
  var v445 = v590.length;
  var v212 = i$$8 < v445;
  for(;v212;) {
    var v591 = window.menuCells;
    var v446 = v591[i$$8];
    var v205 = v446.width;
    iWidth$$1 = v205 + iPadding$$1;
    var v447 = bWidth$$4 - iLeft$$1;
    var v448 = blInfo.menuPadding;
    var v206 = v447 + v448;
    iWidth$$1 = JAMScript.callIntrospect(Math.min, Math, [iWidth$$1, v206], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v207 = blInfo.itemHeight;
    buildMenuCell(i$$8, iLeft$$1, mTop$$4, iWidth$$1, v207);
    var v592 = window.menuCells;
    var v449 = v592[i$$8];
    var v211 = v449.popup;
    if(v211) {
      var v450 = window.menuCells;
      var v208 = v450[i$$8];
      mPopup = v208.popup;
      i$$8 = i$$8 + 1;
      var v209 = bLeft$$4 + iWidth$$1;
      var v210 = bTop$$4 + bHeight$$4;
      i$$8 = queueMenuBuilds(i$$8, 1, mPopup, v209, v210)
    }
    var v593 = blInfo.itemHeight;
    var v594 = blInfo.cellOffset;
    var v451 = v593 + v594;
    mTop$$4 = mTop$$4 + v451;
    var v595 = blInfo.itemHeight;
    var v596 = blInfo.cellOffset;
    var v452 = v595 + v596;
    bTop$$4 = bTop$$4 + v452;
    var v597 = window.menuCells;
    var v453 = v597.length;
    v212 = i$$8 < v453
  }
  var v598 = blInfo.divType;
  var v454 = "</" + v598;
  var v213 = v454 + ">";
  JAMScript.callIntrospect(document.writeln, document, [v213], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  buildMenuBodies();
  document.close();
  return
}
function loadMe() {
  var v214 = this.action;
  if(JAMScript.isEval(eval)) {
    eval("introspect(JAMScript.introspectors.processAll) { " + v214 + " }")
  }else {
    JAMScript.call(eval, null, [v214])
  }
  return
}
function activateMenus() {
  var mName$$2;
  var mAction$$2;
  var mNode$$7;
  var tStyle;
  var v215 = getLayer(document, "test.cell");
  tStyle = getStyle(v215);
  var v455 = is.ns4;
  var v216 = !v455;
  if(v216) {
    window.mtPassive = tStyle.color;
    window.mbPassive = tStyle.backgroundColor;
    return
  }
  var v219 = window.menuLayers;
  for(mName$$2 in v219) {
    var v456 = window.menuLayers;
    var v217 = v456[mName$$2];
    mAction$$2 = v217.action;
    mNode$$7 = getLayer(document, mName$$2);
    var v218 = Event.MOUSEDOWN;
    JAMScript.callIntrospect(mNode$$7.captureEvents, mNode$$7, [v218], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.set(mNode$$7, "onmousedown", loadMe);
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
    var v220 = nodeStack[elIndex];
    elNode = getLayer(v220, mName$$3);
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
    var v222 = nodeStack[stackDepth];
    hideLayer(v222);
    JAMScript.set(nameStack, stackDepth, 0);
    JAMScript.set(nodeStack, stackDepth, 0);
    v223 = stackDepth > mNum
  }
  return
}
function unPopMenus(mNum$$1, tag$$3) {
  var v224 = window.mbActive;
  var v225 = window.mtActive;
  setLayerColor(tag$$3, v224, v225);
  clearMenus(mNum$$1);
  var v227 = is.ns4;
  if(v227) {
    var v226 = Event.MOUSEDOWN;
    JAMScript.callIntrospect(document.releaseEvents, document, [v226], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return
}
function setColorPassive(tag$$4) {
  var v228 = window.mbPassive;
  var v229 = window.mtPassive;
  setLayerColor(tag$$4, v228, v229);
  var v231 = is.ns4;
  if(v231) {
    var v230 = Event.MOUSEDOWN;
    JAMScript.callIntrospect(document.captureEvents, document, [v230], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return
}
function popMenu(mNum$$2, tag$$5, mName$$4) {
  var style$$7;
  var elLayer$$1;
  clearMenus(mNum$$2);
  var v232 = window.mbActive;
  var v233 = window.mtActive;
  setLayerColor(tag$$5, v232, v233);
  elLayer$$1 = getLayer(document, mName$$4);
  if(elLayer$$1) {
    showLayer(elLayer$$1);
    JAMScript.set(nameStack, stackDepth, mName$$4);
    JAMScript.set(nodeStack, stackDepth, elLayer$$1);
    stackDepth = stackDepth + 1
  }
  var v235 = is.ns4;
  if(v235) {
    var v234 = Event.MOUSEDOWN;
    JAMScript.callIntrospect(document.releaseEvents, document, [v234], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
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
var v599 = blInfo.divType;
var v459 = "<" + v599;
var v236 = v459 + ' id="test.cell"';
JAMScript.callIntrospect(document.write, document, [v236], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
JAMScript.call(document.write, document, ['" class="menuItem" ']);
var v600 = blInfo.divType;
var v601 = blInfo.fontSize;
var v460 = setStyle(v600, v601, 0, 0, 100, 20, null, null, "hidden");
var v237 = v460 + ">";
JAMScript.callIntrospect(document.write, document, [v237], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
JAMScript.call(document.write, document, ["test.cell"]);
var v602 = blInfo.divType;
var v461 = "</" + v602;
var v238 = v461 + ">";
JAMScript.callIntrospect(document.writeln, document, [v238], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
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
var v603 = blInfo.charWidth;
var v462 = v603 * 0.4;
var v710 = JAMScript.callIntrospect(Math.floor, Math, [v462], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v239["i"] = v710;
var v240 = alphaWidth;
var v604 = blInfo.charWidth;
var v463 = v604 * 0.7;
var v711 = JAMScript.callIntrospect(Math.floor, Math, [v463], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v240["j"] = v711;
alphaWidth["k"] = blInfo.charWidth;
var v241 = alphaWidth;
var v605 = blInfo.charWidth;
var v464 = v605 * 0.4;
var v712 = JAMScript.callIntrospect(Math.floor, Math, [v464], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v241["l"] = v712;
var v242 = alphaWidth;
var v606 = blInfo.charWidth;
var v465 = v606 * 1.6;
var v713 = JAMScript.callIntrospect(Math.floor, Math, [v465], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
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
var v607 = blInfo.charWidth;
var v466 = v607 * 1.8;
var v714 = JAMScript.callIntrospect(Math.floor, Math, [v466], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v243["w"] = v714;
alphaWidth["x"] = blInfo.charWidth;
alphaWidth["y"] = blInfo.charWidth;
alphaWidth["z"] = blInfo.charWidth;
var v244 = alphaWidth;
var v608 = blInfo.charWidth;
var v467 = v608 * 1.6;
var v715 = JAMScript.callIntrospect(Math.floor, Math, [v467], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v244["A"] = v715;
var v245 = alphaWidth;
var v609 = blInfo.charWidth;
var v468 = v609 * 1.6;
var v716 = JAMScript.callIntrospect(Math.floor, Math, [v468], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v245["B"] = v716;
var v246 = alphaWidth;
var v610 = blInfo.charWidth;
var v469 = v610 * 1.6;
var v717 = JAMScript.callIntrospect(Math.floor, Math, [v469], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v246["C"] = v717;
var v247 = alphaWidth;
var v611 = blInfo.charWidth;
var v470 = v611 * 1.6;
var v718 = JAMScript.callIntrospect(Math.floor, Math, [v470], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v247["D"] = v718;
var v248 = alphaWidth;
var v612 = blInfo.charWidth;
var v471 = v612 * 1.6;
var v719 = JAMScript.callIntrospect(Math.floor, Math, [v471], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v248["E"] = v719;
var v249 = alphaWidth;
var v613 = blInfo.charWidth;
var v472 = v613 * 1.6;
var v720 = JAMScript.callIntrospect(Math.floor, Math, [v472], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v249["F"] = v720;
var v250 = alphaWidth;
var v614 = blInfo.charWidth;
var v473 = v614 * 1.6;
var v721 = JAMScript.callIntrospect(Math.floor, Math, [v473], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v250["G"] = v721;
var v251 = alphaWidth;
var v615 = blInfo.charWidth;
var v474 = v615 * 1.6;
var v722 = JAMScript.callIntrospect(Math.floor, Math, [v474], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v251["H"] = v722;
var v252 = alphaWidth;
var v475 = blInfo.charWidth;
var v723 = JAMScript.callIntrospect(Math.floor, Math, [v475], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v252["I"] = v723;
var v253 = alphaWidth;
var v476 = blInfo.charWidth;
var v724 = JAMScript.callIntrospect(Math.floor, Math, [v476], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v253["J"] = v724;
var v254 = alphaWidth;
var v616 = blInfo.charWidth;
var v477 = v616 * 1.6;
var v725 = JAMScript.callIntrospect(Math.floor, Math, [v477], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v254["K"] = v725;
var v255 = alphaWidth;
var v617 = blInfo.charWidth;
var v478 = v617 * 1.6;
var v726 = JAMScript.callIntrospect(Math.floor, Math, [v478], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v255["L"] = v726;
var v256 = alphaWidth;
var v618 = blInfo.charWidth;
var v479 = v618 * 2;
var v727 = JAMScript.callIntrospect(Math.floor, Math, [v479], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v256["M"] = v727;
var v257 = alphaWidth;
var v619 = blInfo.charWidth;
var v480 = v619 * 1.6;
var v728 = JAMScript.callIntrospect(Math.floor, Math, [v480], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v257["N"] = v728;
var v258 = alphaWidth;
var v620 = blInfo.charWidth;
var v481 = v620 * 1.6;
var v729 = JAMScript.callIntrospect(Math.floor, Math, [v481], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v258["O"] = v729;
var v259 = alphaWidth;
var v621 = blInfo.charWidth;
var v482 = v621 * 1.6;
var v730 = JAMScript.callIntrospect(Math.floor, Math, [v482], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v259["P"] = v730;
var v260 = alphaWidth;
var v622 = blInfo.charWidth;
var v483 = v622 * 1.6;
var v731 = JAMScript.callIntrospect(Math.floor, Math, [v483], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v260["Q"] = v731;
var v261 = alphaWidth;
var v623 = blInfo.charWidth;
var v484 = v623 * 1.6;
var v732 = JAMScript.callIntrospect(Math.floor, Math, [v484], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v261["R"] = v732;
var v262 = alphaWidth;
var v624 = blInfo.charWidth;
var v485 = v624 * 1.6;
var v733 = JAMScript.callIntrospect(Math.floor, Math, [v485], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v262["S"] = v733;
var v263 = alphaWidth;
var v625 = blInfo.charWidth;
var v486 = v625 * 1.6;
var v734 = JAMScript.callIntrospect(Math.floor, Math, [v486], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v263["T"] = v734;
var v264 = alphaWidth;
var v626 = blInfo.charWidth;
var v487 = v626 * 1.6;
var v735 = JAMScript.callIntrospect(Math.floor, Math, [v487], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v264["U"] = v735;
var v265 = alphaWidth;
var v627 = blInfo.charWidth;
var v488 = v627 * 1.6;
var v736 = JAMScript.callIntrospect(Math.floor, Math, [v488], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v265["V"] = v736;
var v266 = alphaWidth;
var v628 = blInfo.charWidth;
var v489 = v628 * 3;
var v737 = JAMScript.callIntrospect(Math.floor, Math, [v489], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v266["W"] = v737;
var v267 = alphaWidth;
var v629 = blInfo.charWidth;
var v490 = v629 * 1.6;
var v738 = JAMScript.callIntrospect(Math.floor, Math, [v490], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v267["X"] = v738;
var v268 = alphaWidth;
var v630 = blInfo.charWidth;
var v491 = v630 * 1.6;
var v739 = JAMScript.callIntrospect(Math.floor, Math, [v491], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v268["Y"] = v739;
var v269 = alphaWidth;
var v631 = blInfo.charWidth;
var v492 = v631 * 1.6;
var v740 = JAMScript.callIntrospect(Math.floor, Math, [v492], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
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
var v271 = is.ns4;
if(v271) {
  var v270 = Event.MOUSEDOWN;
  JAMScript.callIntrospect(document.captureEvents, document, [v270], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.set(document, "onmousedown", clearAll)
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
var v633 = !v493;
if(v633) {
  var v632 = is.ie4;
  var v666 = !v632;
  if(v666) {
    var v665 = is.ns4;
    if(v665) {
      var v680 = is.hj;
      v665 = !v680
    }
    v632 = v665
  }
  v493 = v632
}
var v272 = v493;
if(v272) {
  var barTop = 20;
  var barLeft = 50;
  var barWidth = 370;
  var barHeight = 44;
  var itemPadding = 5;
  var barImage = "images/title.png";
  drawHMenuBar(barLeft, barTop, barWidth, barHeight, itemPadding, barImage)
}
var v274 = is.w3c;
if(v274) {
  JAMScript.call(document.writeln, document, ['<div style="position : relative; top : 15px; float : right; padding-right : 42px; text-align : right">']);
  JAMScript.callIntrospect(document.writeln, document, ['<a href="http://sourceforge.net/projects/jswidgets"><img src="http://sflogo.sourceforge.net/sflogo.php?group_id=33495&type=15" width="150" height="40" border="0" alt="Get Browser-Independent Javascript Widgets at SourceForge.net. Fast, secure and Free Open Source software downloads" /></a>'], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.call(document.writeln, document, ["</div>"])
}else {
  var v273 = is.ns4;
  if(v273) {
    JAMScript.call(document.writeln, document, ['<layer top="20" left="400">']);
    JAMScript.callIntrospect(document.writeln, document, ['<a href="http://sourceforge.net/projects/jswidgets"><img src="http://sflogo.sourceforge.net/sflogo.php?group_id=33495&type=15" width="150" height="40" border="0" alt="Get Browser-Independent Javascript Widgets at SourceForge.net. Fast, secure and Free Open Source software downloads" /></a>'], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.call(document.writeln, document, ["</layer>"])
  }
}
var v275 = document.body;
v275.background = "images/researchbg.gif";
var v276 = document.body;
JAMScript.set(v276, "onload", initialize);
var v277 = document.getElementById("cleardiv");
JAMScript.set(v277, "onmouseover", clearAll);

