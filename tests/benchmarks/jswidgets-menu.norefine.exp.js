function getNSLayer(inNode, inName) {
  var node$$2;
  var i$$1;
  node$$2 = inNode[inName];
  i$$1 = 0;
  var v272 = !node$$2;
  if(v272) {
    var v487 = inNode.layers;
    if(v487) {
      var v662 = inNode.layers;
      var v629 = v662.length;
      v487 = i$$1 < v629
    }
    v272 = v487
  }
  var v1 = v272;
  for(;v1;) {
    var v488 = inNode.layers;
    var v273 = v488[i$$1];
    var v0 = v273.document;
    node$$2 = getNSLayer(v0, inName);
    i$$1 = i$$1 + 1;
    var v274 = !node$$2;
    if(v274) {
      var v489 = inNode.layers;
      if(v489) {
        var v663 = inNode.layers;
        var v630 = v663.length;
        v489 = i$$1 < v630
      }
      v274 = v489
    }
    v1 = v274
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
    var v275 = "Could not find layer " + inName$$1;
    var v6 = v275 + ".";
    alert(v6)
  }
  return node$$3
}
function getStyle(inNode$$2) {
  var style;
  var v276 = is.w3c;
  var v490 = !v276;
  if(v490) {
    v276 = is.ie4
  }
  var v9 = v276;
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
  var v277 = is.ie4;
  var v491 = !v277;
  if(v491) {
    v277 = is.w3c
  }
  var v13 = v277;
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
  var v279 = !v14;
  if(v279) {
    var v278 = mNode$$2.style;
    v14 = v278.left
  }
  return v14
}
function layerWidth(mNode$$3) {
  var nWidth;
  var v280 = is.ie4;
  var v492 = !v280;
  if(v492) {
    v280 = is.w3c
  }
  var v18 = v280;
  if(v18) {
    var v281 = mNode$$3.style;
    var v15 = v281.width;
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
    var v282 = '" top="' + top$$3;
    dStyle = dStyle + v282;
    var v283 = '" width="' + width$$9;
    dStyle = dStyle + v283;
    var v284 = '" height="' + height$$8;
    dStyle = dStyle + v284;
    if(zIndex) {
      var v285 = '" z-index="' + zIndex;
      dStyle = dStyle + v285
    }
    if(bgColor$$1) {
      var v286 = '" bgColor="' + bgColor$$1;
      dStyle = dStyle + v286
    }else {
      dStyle = dStyle + '" bgColor="#000000'
    }
    if(visibility) {
      var v493 = NSVisType[visibility];
      var v287 = '" visibility="' + v493;
      dStyle = dStyle + v287
    }
    dStyle = dStyle + '" '
  }else {
    var v20 = 'style="font-size : ' + fontSize;
    dStyle = v20 + "pt; ";
    var v494 = "left : " + left$$3;
    var v288 = v494 + "px; ";
    dStyle = dStyle + v288;
    var v495 = "top : " + top$$3;
    var v289 = v495 + "px; ";
    dStyle = dStyle + v289;
    var v496 = "width : " + width$$9;
    var v290 = v496 + "px; ";
    dStyle = dStyle + v290;
    var v497 = "height : " + height$$8;
    var v291 = v497 + "px; ";
    dStyle = dStyle + v291;
    if(zIndex) {
      var v498 = "z-index : " + zIndex;
      var v292 = v498 + "; ";
      dStyle = dStyle + v292
    }
    if(bgColor$$1) {
      var v499 = "background-color : " + bgColor$$1;
      var v293 = v499 + "; ";
      dStyle = dStyle + v293
    }
    if(visibility) {
      var v500 = "visibility : " + visibility;
      var v294 = v500 + "; ";
      dStyle = dStyle + v294
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
  var v685 = parseInt(version$$5);
  this.major = v685;
  var v686 = parseFloat(version$$5);
  this.minor = v686;
  var v26 = agent.indexOf("netscape");
  this.nsa = v26 != -1;
  var v27 = agent.indexOf("mozilla");
  this.mza = v27 != -1;
  var v28 = agent.indexOf("galeon");
  this.gla = v28 != -1;
  var v29 = this.mza;
  if(v29) {
    var v295 = this.nsa;
    v29 = !v295
  }
  this.mza = v29;
  var v34 = this.mza;
  if(v34) {
    var v296 = agent.indexOf("rv:");
    var v30 = v296 + 3;
    var v31 = agent.indexOf(")");
    version$$5 = agent.substring(v30, v31);
    this.nsa = false;
    var v297 = agent.indexOf("rv:");
    var v33 = v297 != -1;
    if(v33) {
      var v687 = parseInt(version$$5);
      this.major = v687;
      var v688 = parseFloat(version$$5);
      this.minor = v688;
      var v32 = this.mza;
      if(v32) {
        var v298 = this.major;
        v32 = v298 == 1
      }
      this.mz1 = v32
    }else {
      this.mza = false;
      version$$5 = this.minor
    }
  }
  var v39 = this.gla;
  if(v39) {
    var v299 = agent.indexOf("galeon/");
    var v35 = v299 + 7;
    var v300 = agent.indexOf("(");
    var v36 = v300 - 1;
    version$$5 = agent.substring(v35, v36);
    this.nsa = false;
    var v301 = agent.indexOf("galeon/");
    var v38 = v301 != -1;
    if(v38) {
      var v689 = parseInt(version$$5);
      this.major = v689;
      var v690 = parseFloat(version$$5);
      this.minor = v690;
      var v37 = this.gla;
      if(v37) {
        var v302 = this.major;
        v37 = v302 == 1
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
    var v303 = this.major;
    v41 = v303 == 2
  }
  this.ns2 = v41;
  var v42 = this.nsn;
  if(v42) {
    var v304 = this.major;
    v42 = v304 == 3
  }
  this.ns3 = v42;
  var v43 = this.nsn;
  if(v43) {
    var v305 = this.major;
    v43 = v305 == 4
  }
  this.ns4 = v43;
  var v44 = this.nsa;
  if(v44) {
    var v306 = this.major;
    v44 = v306 >= 5
  }
  this.ns6 = v44;
  var v47 = this.ns6;
  if(v47) {
    var v307 = agent.indexOf("netscape6/");
    var v45 = v307 + 10;
    var v46 = agent.length;
    var v691 = JAMScript.callIntrospect(agent.slice, agent, [v45, v46], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    this.version = v691
  }
  var v308 = appName.indexOf("internet explorer");
  var v48 = v308 != -1;
  if(v48) {
    var v309 = agent.indexOf("opera");
    v48 = v309 == -1
  }
  this.ie = v48;
  var v49 = this.ie;
  if(v49) {
    var v310 = this.major;
    v49 = v310 == 3
  }
  this.ie3 = v49;
  var v50 = this.ie;
  if(v50) {
    var v501 = this.major;
    var v311 = v501 == 4;
    if(v311) {
      var v502 = agent.indexOf("msie 4.");
      v311 = v502 != -1
    }
    v50 = v311
  }
  this.ie4 = v50;
  var v51 = this.ie;
  if(v51) {
    var v503 = this.major;
    var v312 = v503 == 4;
    if(v312) {
      var v504 = agent.indexOf("msie 5.");
      v312 = v504 != -1
    }
    v51 = v312
  }
  this.ie5 = v51;
  var v52 = this.ie;
  if(v52) {
    var v505 = this.major;
    var v313 = v505 == 4;
    if(v313) {
      var v506 = agent.indexOf("msie 6.");
      v313 = v506 != -1
    }
    v52 = v313
  }
  this.ie6 = v52;
  var v314 = this.ie4;
  var v508 = !v314;
  if(v508) {
    var v507 = this.ie5;
    var v631 = !v507;
    if(v631) {
      v507 = this.ie6
    }
    v314 = v507
  }
  var v57 = v314;
  if(v57) {
    var v315 = agent.indexOf("msie ");
    var v53 = v315 + 5;
    var v54 = agent.length;
    var v692 = JAMScript.callIntrospect(agent.slice, agent, [v53, v54], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    this.version = v692;
    var v55 = this.version;
    var v316 = this.version;
    var v56 = v316.indexOf(";");
    var v693 = v55.slice(0, v56);
    this.version = v693
  }
  var v58 = this.ie;
  if(v58) {
    var v509 = this.ie3;
    var v317 = !v509;
    if(v317) {
      var v510 = this.ie4;
      v317 = !v510
    }
    v58 = v317
  }
  this.ieX = v58;
  var v59 = agent.indexOf("opera");
  this.op = v59 != -1;
  var v60 = this.op;
  if(v60) {
    var v511 = this.major;
    var v318 = v511 == 4;
    if(v318) {
      var v512 = agent.indexOf("opera 4.");
      v318 = v512 != -1
    }
    v60 = v318
  }
  this.op4 = v60;
  var v61 = this.op;
  if(v61) {
    var v513 = this.major;
    var v319 = v513 == 4;
    if(v319) {
      var v514 = agent.indexOf("opera 5.");
      v319 = v514 != -1
    }
    v61 = v319
  }
  this.op5 = v61;
  var v62 = this.op;
  if(v62) {
    var v515 = this.major;
    var v320 = v515 == 4;
    if(v320) {
      var v516 = agent.indexOf("opera 6.");
      v320 = v516 != -1
    }
    v62 = v320
  }
  this.op6 = v62;
  var v66 = this.op;
  if(v66) {
    this.ie = false;
    this.ie4 = false;
    this.ie5 = false;
    this.ie6 = false;
    var v321 = agent.indexOf("opera");
    var v63 = v321 + 6;
    var v64 = agent.length;
    var v694 = JAMScript.callIntrospect(agent.slice, agent, [v63, v64], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    this.version = v694;
    var v65 = this.version;
    var v695 = parseFloat(v65);
    this.version = v695
  }
  var v67 = agent.indexOf("konqueror");
  this.kq = v67 != -1;
  var v74 = this.kq;
  if(v74) {
    var v322 = agent.indexOf("konqueror/");
    var v68 = v322 + 10;
    var v69 = agent.length;
    var v696 = JAMScript.callIntrospect(agent.substring, agent, [v68, v69], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    this.version = v696;
    var v70 = this.version;
    var v323 = this.version;
    var v71 = v323.indexOf(";");
    var v697 = v70.substring(0, v71);
    this.version = v697;
    var v72 = this.version;
    var v698 = parseInt(v72);
    this.major = v698;
    var v73 = this.version;
    var v699 = parseFloat(v73);
    this.minor = v699;
    this.mza = false
  }
  var v75 = this.kq;
  if(v75) {
    var v324 = this.major;
    v75 = v324 == 2
  }
  this.kq2 = v75;
  var v76 = this.kq;
  if(v76) {
    var v325 = this.major;
    v76 = v325 == 3
  }
  this.kq3 = v76;
  var v326 = document.getElementById;
  var v77 = !v326;
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
  var v327 = is.ie4;
  var v517 = !v327;
  if(v517) {
    v327 = is.w3c
  }
  var v83 = v327;
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
  var v328 = is.ie4;
  var v518 = !v328;
  if(v518) {
    v328 = is.w3c
  }
  var v86 = v328;
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
  var v329 = is.ie4;
  var v520 = !v329;
  if(v520) {
    var v519 = is.w3c;
    if(v519) {
      var v664 = is.ns6;
      var v677 = !v664;
      if(v677) {
        v664 = is.mza
      }
      var v632 = v664;
      v519 = !v632
    }
    v329 = v519
  }
  var v88 = v329;
  if(v88) {
    leftPos = event$$1.clientX
  }else {
    var v330 = is.ns4;
    var v522 = !v330;
    if(v522) {
      var v521 = is.ns6;
      var v633 = !v521;
      if(v633) {
        v521 = is.mza
      }
      v330 = v521
    }
    var v87 = v330;
    if(v87) {
      leftPos = event$$1.pageX
    }
  }
  return leftPos
}
function mousePosTop(event$$2) {
  var topPos;
  var v331 = is.ie4;
  var v524 = !v331;
  if(v524) {
    var v523 = is.w3c;
    if(v523) {
      var v665 = is.ns6;
      var v678 = !v665;
      if(v678) {
        v665 = is.mza
      }
      var v634 = v665;
      v523 = !v634
    }
    v331 = v523
  }
  var v90 = v331;
  if(v90) {
    topPos = event$$2.clientY
  }else {
    var v332 = is.ns4;
    var v526 = !v332;
    if(v526) {
      var v525 = is.ns6;
      var v635 = !v525;
      if(v635) {
        v525 = is.mza
      }
      v332 = v525
    }
    var v89 = v332;
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
      var v333 = is.op5;
      var v527 = !v333;
      if(v527) {
        v333 = is.op6
      }
      var v100 = v333;
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
              var v334 = is.mza;
              var v529 = !v334;
              if(v529) {
                var v528 = is.gla;
                var v636 = !v528;
                if(v636) {
                  v528 = is.ns6
                }
                v334 = v528
              }
              var v96 = v334;
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
  var v700 = new Array;
  window.menuCells = v700;
  window.menuPopups = 0;
  window.menuHeads = 0;
  window.menuLevel = 0;
  window.menuMain = 0;
  var v701 = new Object;
  window.menuLayers = v701;
  var v702 = new Array;
  window.menuStack = v702;
  var v703 = new Array;
  window.menuBody = v703;
  var v704 = new Array;
  window.bodyCells = v704;
  window.mbActive = "#FF0000";
  window.mtActive = "#FFFF00";
  return
}
function menuItem(label$$2, action, width$$10, level$$7, popup) {
  var v103 = label$$2 == 0;
  if(v103) {
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
  var v335 = window.bodyCells;
  var v104 = v335.length;
  mBody = new bodyItem(v104, bPopup, bLevel, bLeft, bTop, bWidth, bHeight);
  var v105 = window.menuBody;
  var v336 = window.menuBody;
  var v106 = v336.length;
  JAMScript.set(v105, v106, mBody);
  i$$2 = 0;
  var v337 = queue.length;
  var v109 = i$$2 < v337;
  for(;v109;) {
    var v107 = window.bodyCells;
    var v338 = window.bodyCells;
    var v108 = v338.length;
    JAMScript.set(v107, v108, queue[i$$2]);
    i$$2 = i$$2 + 1;
    var v339 = queue.length;
    v109 = i$$2 < v339
  }
  var v110 = window.bodyCells;
  var v340 = window.bodyCells;
  var v111 = v340.length;
  JAMScript.set(v110, v111, 0);
  return
}
function addMenuDivider() {
  var mItem;
  var mLevel;
  mLevel = window.menuLevel;
  mItem = new menuItem(0, 0, 0, mLevel, 0);
  var v112 = window.menuCells;
  var v341 = window.menuCells;
  var v113 = v341.length;
  JAMScript.set(v112, v113, mItem);
  return
}
function estLabelWidth(label$$3) {
  var lWidth = 0;
  var i$$3;
  i$$3 = 0;
  var v342 = label$$3.length;
  var v114 = i$$3 < v342;
  for(;v114;) {
    var v530 = JAMScript.callIntrospect(label$$3.charAt, label$$3, [i$$3], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v343 = alphaWidth[v530];
    lWidth = lWidth + v343;
    i$$3 = i$$3 + 1;
    var v344 = label$$3.length;
    v114 = i$$3 < v344
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
  var v115 = estLabelWidth(label$$4);
  mWidth = v115 + 4;
  if(label$$4) {
    mLabel$$1 = label$$4
  }else {
    var v345 = "No label given for action " + action$$1;
    var v116 = v345 + ".";
    alert(v116);
    mLabel$$1 = "no label"
  }
  if(action$$1) {
    var v117 = "location='" + action$$1;
    mAction = v117 + "'"
  }else {
    var v118 = "clearMenus(" + mLevel$$1;
    mAction = v118 + ")"
  }
  mPopup$$1 = popup$$2;
  var v346 = mPopup$$1;
  if(v346) {
    v346 = mLevel$$1 > 0
  }
  var v119 = v346;
  if(v119) {
    mWidth = mWidth + 15
  }
  var v120 = mLevel$$1 == 0;
  if(v120) {
    var v347 = window;
    var v531 = window.menuHeads;
    v347.menuHeads = v531 + 1
  }
  mItem$$1 = new menuItem(mLabel$$1, mAction, mWidth, mLevel$$1, mPopup$$1);
  var v121 = window.menuCells;
  var v348 = window.menuCells;
  var v122 = v348.length;
  JAMScript.set(v121, v122, mItem$$1);
  return
}
function startMenu(label$$5, action$$2) {
  var v349 = window.menuPopups;
  var v637 = window;
  var v666 = window.menuPopups;
  v637.menuPopups = v666 + 1;
  var v123 = "popup" + v349;
  addMenuItem(label$$5, action$$2, v123);
  var v350 = window;
  var v532 = window.menuLevel;
  v350.menuLevel = v532 + 1;
  return
}
function endMenu() {
  var v351 = window;
  var v533 = window.menuLevel;
  v351.menuLevel = v533 - 1;
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
  var v352 = window.menuCells;
  var v124 = v352[index$$39];
  mLevel$$2 = v124.level;
  mLeft = left$$5;
  mTop = top$$5;
  mWidth$$1 = width$$12;
  mHeight = height$$10;
  var v353 = window.menuCells;
  var v125 = v353[index$$39];
  mLabel$$2 = v125.label;
  var v354 = window.menuCells;
  var v126 = v354[index$$39];
  mAction$$1 = v126.action;
  var v638 = blInfo.divType;
  var v534 = "<" + v638;
  var v355 = v534 + ' id="';
  var v127 = v355 + mName$$1;
  JAMScript.callIntrospect(document.write, document, [v127], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v356 = '" class="' + mClass;
  var v128 = v356 + '" ';
  JAMScript.callIntrospect(document.write, document, [v128], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v357 = blInfo.divType;
  var v358 = blInfo.fontSize;
  var v359 = window.mbPassive;
  var v129 = setStyle(v357, v358, mLeft, mTop, mWidth$$1, mHeight, 0, v359, "inherit");
  JAMScript.callIntrospect(document.write, document, [v129], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v360 = ' onclick="' + mAction$$1;
  var v130 = v360 + '" ';
  JAMScript.callIntrospect(document.write, document, [v130], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v361 = window.menuCells;
  var v131 = v361[index$$39];
  mPopup = v131.popup;
  if(mPopup) {
    var v683 = 'onmouseover="popMenu(' + mLevel$$2;
    var v679 = v683 + ",'";
    var v667 = v679 + mName$$1;
    var v639 = v667 + "','";
    var v535 = v639 + mPopup;
    var v362 = v535 + "'";
    var v132 = v362 + ');" ';
    JAMScript.callIntrospect(document.write, document, [v132], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v640 = 'onmouseout="setColorPassive(' + "'";
    var v536 = v640 + mName$$1;
    var v363 = v536 + "'";
    var v133 = v363 + ');">';
    JAMScript.callIntrospect(document.write, document, [v133], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }else {
    var v668 = 'onmouseover="unPopMenus(' + mLevel$$2;
    var v641 = v668 + ",'";
    var v537 = v641 + mName$$1;
    var v364 = v537 + "'";
    var v134 = v364 + ');" ';
    JAMScript.callIntrospect(document.write, document, [v134], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v642 = 'onmouseout="setColorPassive(' + "'";
    var v538 = v642 + mName$$1;
    var v365 = v538 + "'";
    var v135 = v365 + ');">';
    JAMScript.callIntrospect(document.write, document, [v135], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  var v136 = window.menuLayers;
  var v705 = new menuLayer(mLabel$$2, mAction$$1);
  JAMScript.set(v136, mName$$1, v705);
  var v366 = blInfo.divType;
  var v138 = v366 == "layer";
  if(v138) {
    var v137 = JAMScript.callIntrospect(mLabel$$2.fontcolor, mLabel$$2, [mtPassive], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.callIntrospect(document.write, document, [v137], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }else {
    JAMScript.callIntrospect(document.write, document, [mLabel$$2], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  var v367 = mPopup;
  if(v367) {
    v367 = mLevel$$2 >= 1
  }
  var v140 = v367;
  if(v140) {
    var v539 = window.menuPntr;
    var v368 = '&nbsp;<img src="' + v539;
    var v139 = v368 + '" border="0">';
    JAMScript.callIntrospect(document.write, document, [v139], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  var v540 = blInfo.divType;
  var v369 = "</" + v540;
  var v141 = v369 + ">";
  JAMScript.callIntrospect(document.writeln, document, [v141], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
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
  var v142 = blInfo.bwPadding;
  lWidth$$1 = bWidth$$1 + v142;
  var v143 = blInfo.bhPadding;
  lHeight = bHeight$$1 + v143;
  var v684 = blInfo.divType;
  var v680 = "<" + v684;
  var v669 = v680 + ' id="';
  var v643 = v669 + bName;
  var v541 = v643 + '" class="';
  var v370 = v541 + bClass;
  var v144 = v370 + '" ';
  JAMScript.callIntrospect(document.write, document, [v144], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v371 = blInfo.divType;
  var v372 = blInfo.fontSize;
  var v373 = bLevel$$1 + 1;
  var v145 = setStyle(v371, v372, bLeft$$1, bTop$$1, lWidth$$1, lHeight, v373, "#000000", "hidden");
  JAMScript.callIntrospect(document.write, document, [v145], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.call(document.writeln, document, [">"]);
  mLeft$$1 = blInfo.leftOffset;
  mTop$$1 = blInfo.mTopOffset;
  i$$4 = 0;
  var v374 = cQueue.length;
  var v150 = i$$4 < v374;
  for(;v150;) {
    var v375 = window.menuCells;
    var v376 = cQueue[i$$4];
    var v146 = v375[v376];
    mLabel = v146.label;
    if(mLabel) {
      var v147 = cQueue[i$$4];
      var v148 = blInfo.itemHeight;
      buildMenuCell(v147, mLeft$$1, mTop$$1, bWidth$$1, v148);
      var v542 = blInfo.itemHeight;
      var v543 = blInfo.cellOffset;
      var v377 = v542 + v543;
      mTop$$1 = mTop$$1 + v377
    }else {
      var v149 = mLabel == 0;
      if(v149) {
        var v378 = blInfo.dividerHeight;
        mTop$$1 = mTop$$1 + v378
      }else {
        alert("Expecting label in buildMenuBody.");
        return 0
      }
    }
    i$$4 = i$$4 + 1;
    var v379 = cQueue.length;
    v150 = i$$4 < v379
  }
  var v544 = blInfo.divType;
  var v380 = "</" + v544;
  var v151 = v380 + ">";
  JAMScript.callIntrospect(document.writeln, document, [v151], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
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
  var v545 = window.menuBody;
  var v381 = v545.length;
  var v161 = i$$5 < v381;
  for(;v161;) {
    var v382 = window.menuBody;
    var v152 = v382[i$$5];
    bCells = v152.cells;
    var v383 = window.menuBody;
    var v153 = v383[i$$5];
    bName$$1 = v153.popup;
    var v384 = window.menuBody;
    var v154 = v384[i$$5];
    bLevel$$2 = v154.level;
    var v385 = window.menuBody;
    var v155 = v385[i$$5];
    bLeft$$2 = v155.left;
    var v386 = window.menuBody;
    var v156 = v386[i$$5];
    bTop$$2 = v156.top;
    var v387 = window.menuBody;
    var v157 = v387[i$$5];
    bWidth$$2 = v157.width;
    var v388 = window.menuBody;
    var v158 = v388[i$$5];
    bHeight$$2 = v158.height;
    cQueue$$1 = new Array;
    cCount = 0;
    var v644 = window.bodyCells;
    var v546 = v644.length;
    var v389 = bCells < v546;
    if(v389) {
      var v645 = window.bodyCells;
      var v547 = v645[bCells];
      v389 = v547 > 0
    }
    var v160 = v389;
    for(;v160;) {
      var v159 = cCount;
      cCount = cCount + 1;
      var v390 = window.bodyCells;
      var v391 = bCells;
      bCells = bCells + 1;
      cQueue$$1[v159] = v390[v391];
      var v646 = window.bodyCells;
      var v548 = v646.length;
      var v392 = bCells < v548;
      if(v392) {
        var v647 = window.bodyCells;
        var v549 = v647[bCells];
        v392 = v549 > 0
      }
      v160 = v392
    }
    buildMenuBody(cQueue$$1, bName$$1, bLevel$$2, bLeft$$2, bTop$$2, bWidth$$2, bHeight$$2);
    cQueue$$1 = null;
    i$$5 = i$$5 + 1;
    var v550 = window.menuBody;
    var v393 = v550.length;
    v161 = i$$5 < v393
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
  var v648 = window.menuCells;
  var v551 = v648.length;
  var v394 = i$$6 < v551;
  if(v394) {
    var v670 = window.menuCells;
    var v649 = v670[i$$6];
    var v552 = v649.level;
    v394 = v552 >= mLevel$$3
  }
  var v164 = v394;
  for(;v164;) {
    var v650 = window.menuCells;
    var v553 = v650[i$$6];
    var v395 = v553.level;
    var v163 = v395 == mLevel$$3;
    if(v163) {
      var v554 = window.menuCells;
      var v396 = v554[i$$6];
      var v162 = v396.width;
      sWidth = JAMScript.callIntrospect(Math.max, Math, [sWidth, v162], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }
    i$$6 = i$$6 + 1;
    var v651 = window.menuCells;
    var v555 = v651.length;
    var v397 = i$$6 < v555;
    if(v397) {
      var v671 = window.menuCells;
      var v652 = v671[i$$6];
      var v556 = v652.level;
      v397 = v556 >= mLevel$$3
    }
    v164 = v397
  }
  var v165 = mLeft$$2 + sWidth;
  sLeft = v165 + 2;
  i$$6 = mIndex;
  var v653 = window.menuCells;
  var v557 = v653.length;
  var v398 = i$$6 < v557;
  if(v398) {
    var v672 = window.menuCells;
    var v654 = v672[i$$6];
    var v558 = v654.level;
    v398 = v558 >= mLevel$$3
  }
  var v171 = v398;
  for(;v171;) {
    var v166 = queue$$1.length;
    queue$$1[v166] = i$$6;
    var v559 = window.menuCells;
    var v399 = v559[i$$6];
    var v170 = v399.popup;
    if(v170) {
      var v400 = window.menuCells;
      var v167 = v400[i$$6];
      sPopup = v167.popup;
      i$$6 = i$$6 + 1;
      var v168 = mLevel$$3 + 1;
      i$$6 = queueMenuBuilds(i$$6, v168, sPopup, sLeft, sTop);
      var v560 = blInfo.itemHeight;
      var v561 = blInfo.cellOffset;
      var v401 = v560 + v561;
      sTop = sTop + v401;
      var v562 = blInfo.itemHeight;
      var v563 = blInfo.cellOffset;
      var v402 = v562 + v563;
      sHeight = sHeight + v402
    }else {
      var v564 = window.menuCells;
      var v403 = v564[i$$6];
      var v169 = v403.label;
      if(v169) {
        i$$6 = i$$6 + 1;
        var v565 = blInfo.itemHeight;
        var v566 = blInfo.cellOffset;
        var v404 = v565 + v566;
        sTop = sTop + v404;
        var v567 = blInfo.itemHeight;
        var v568 = blInfo.cellOffset;
        var v405 = v567 + v568;
        sHeight = sHeight + v405
      }else {
        i$$6 = i$$6 + 1;
        var v406 = blInfo.dividerHeight;
        sTop = sTop + v406;
        var v407 = blInfo.dividerHeight;
        sHeight = sHeight + v407
      }
    }
    var v655 = window.menuCells;
    var v569 = v655.length;
    var v408 = i$$6 < v569;
    if(v408) {
      var v673 = window.menuCells;
      var v656 = v673[i$$6];
      var v570 = v656.level;
      v408 = v570 >= mLevel$$3
    }
    v171 = v408
  }
  var v409 = queue$$1.length;
  var v173 = v409 > 0;
  if(v173) {
    var v410 = blInfo.cellOffset;
    var v172 = sHeight - v410;
    stackMenuBody(queue$$1, mPopup$$2, mLevel$$3, mLeft$$2, mTop$$2, sWidth, v172)
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
  var v174 = blInfo.wBarPadding;
  bWidth$$3 = width$$13 + v174;
  var v411 = blInfo.itemHeight;
  var v175 = height$$11 + v411;
  var v176 = blInfo.hBarPadding;
  bHeight$$3 = v175 + v176;
  var v177 = blInfo.itemPadding;
  iPadding = padding + v177;
  bGraphic = graphic;
  var v571 = blInfo.divType;
  var v412 = "<" + v571;
  var v178 = v412 + ' id="menuBar" class="menuBar" ';
  JAMScript.callIntrospect(document.write, document, [v178], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v413 = blInfo.divType;
  var v414 = blInfo.fontSize;
  var v179 = setStyle(v413, v414, bLeft$$3, bTop$$3, bWidth$$3, bHeight$$3, 0, null, "visible");
  JAMScript.callIntrospect(document.write, document, [v179], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.call(document.writeln, document, [">"]);
  var v681 = '<img name="menuImage" src="' + bGraphic;
  var v674 = v681 + '" class="menuBar" border="1" width="';
  var v657 = v674 + width$$13;
  var v572 = v657 + '" height="';
  var v415 = v572 + height$$11;
  var v180 = v415 + '">';
  JAMScript.callIntrospect(document.writeln, document, [v180], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  iLeft = blInfo.leftOffset;
  var v181 = blInfo.mBarOffset;
  mTop$$3 = height$$11 + v181;
  var v416 = blInfo.bBarOffset;
  bTop$$3 = bTop$$3 + v416;
  i$$7 = 0;
  var v573 = window.menuCells;
  var v417 = v573.length;
  var v188 = i$$7 < v417;
  for(;v188;) {
    var v574 = window.menuCells;
    var v418 = v574[i$$7];
    var v182 = v418.width;
    iWidth = v182 + iPadding;
    var v419 = bWidth$$3 - iLeft;
    var v420 = blInfo.menuPadding;
    var v183 = v419 + v420;
    iWidth = JAMScript.callIntrospect(Math.min, Math, [iWidth, v183], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v184 = blInfo.itemHeight;
    buildMenuCell(i$$7, iLeft, mTop$$3, iWidth, v184);
    var v575 = window.menuCells;
    var v421 = v575[i$$7];
    var v187 = v421.popup;
    if(v187) {
      var v422 = window.menuCells;
      var v185 = v422[i$$7];
      mPopup = v185.popup;
      i$$7 = i$$7 + 1;
      var v186 = bTop$$3 + bHeight$$3;
      i$$7 = queueMenuBuilds(i$$7, 1, mPopup, bLeft$$3, v186)
    }
    var v576 = blInfo.itemSpacing;
    var v423 = iWidth + v576;
    bLeft$$3 = bLeft$$3 + v423;
    var v577 = blInfo.itemSpacing;
    var v424 = iWidth + v577;
    iLeft = iLeft + v424;
    var v578 = window.menuCells;
    var v425 = v578.length;
    v188 = i$$7 < v425
  }
  var v579 = blInfo.divType;
  var v426 = "</" + v579;
  var v189 = v426 + ">";
  JAMScript.callIntrospect(document.writeln, document, [v189], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
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
  var v190 = blInfo.wBarPadding;
  bWidth$$4 = width$$14 + v190;
  bHeight$$4 = height$$12;
  nTopItems = 0;
  i$$8 = 0;
  var v580 = window.menuCells;
  var v427 = v580.length;
  var v192 = i$$8 < v427;
  for(;v192;) {
    var v658 = window.menuCells;
    var v581 = v658[i$$8];
    var v428 = v581.level;
    var v191 = v428 == 0;
    if(v191) {
      nTopItems = nTopItems + 1
    }
    i$$8 = i$$8 + 1;
    var v582 = window.menuCells;
    var v429 = v582.length;
    v192 = i$$8 < v429
  }
  var v430 = blInfo.itemHeight;
  var v431 = blInfo.cellOffset;
  var v193 = v430 + v431;
  mHeight$$1 = nTopItems * v193;
  i$$8 = 0;
  var v194 = blInfo.itemPadding;
  iPadding$$1 = padding$$1 + v194;
  bGraphic$$1 = graphic$$1;
  var v583 = blInfo.divType;
  var v432 = "<" + v583;
  var v195 = v432 + ' id="menuBar" class="menuBar" ';
  JAMScript.callIntrospect(document.write, document, [v195], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v433 = blInfo.divType;
  var v434 = blInfo.fontSize;
  var v435 = bHeight$$4 + mHeight$$1;
  var v196 = setStyle(v433, v434, bLeft$$4, bTop$$4, bWidth$$4, v435, 0, null, "visible");
  JAMScript.callIntrospect(document.write, document, [v196], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.call(document.writeln, document, [">"]);
  var v682 = '<img name="menuImage" src="' + bGraphic$$1;
  var v675 = v682 + '"class="menuBar" border="1" width="';
  var v659 = v675 + width$$14;
  var v584 = v659 + '" height="';
  var v436 = v584 + height$$12;
  var v197 = v436 + '">';
  JAMScript.callIntrospect(document.writeln, document, [v197], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  iLeft$$1 = blInfo.leftOffset;
  var v198 = blInfo.mBarOffset;
  mTop$$4 = height$$12 + v198;
  var v437 = blInfo.bBarOffset;
  bTop$$4 = bTop$$4 + v437;
  var v585 = window.menuCells;
  var v438 = v585.length;
  var v206 = i$$8 < v438;
  for(;v206;) {
    var v586 = window.menuCells;
    var v439 = v586[i$$8];
    var v199 = v439.width;
    iWidth$$1 = v199 + iPadding$$1;
    var v440 = bWidth$$4 - iLeft$$1;
    var v441 = blInfo.menuPadding;
    var v200 = v440 + v441;
    iWidth$$1 = JAMScript.callIntrospect(Math.min, Math, [iWidth$$1, v200], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v201 = blInfo.itemHeight;
    buildMenuCell(i$$8, iLeft$$1, mTop$$4, iWidth$$1, v201);
    var v587 = window.menuCells;
    var v442 = v587[i$$8];
    var v205 = v442.popup;
    if(v205) {
      var v443 = window.menuCells;
      var v202 = v443[i$$8];
      mPopup = v202.popup;
      i$$8 = i$$8 + 1;
      var v203 = bLeft$$4 + iWidth$$1;
      var v204 = bTop$$4 + bHeight$$4;
      i$$8 = queueMenuBuilds(i$$8, 1, mPopup, v203, v204)
    }
    var v588 = blInfo.itemHeight;
    var v589 = blInfo.cellOffset;
    var v444 = v588 + v589;
    mTop$$4 = mTop$$4 + v444;
    var v590 = blInfo.itemHeight;
    var v591 = blInfo.cellOffset;
    var v445 = v590 + v591;
    bTop$$4 = bTop$$4 + v445;
    var v592 = window.menuCells;
    var v446 = v592.length;
    v206 = i$$8 < v446
  }
  var v593 = blInfo.divType;
  var v447 = "</" + v593;
  var v207 = v447 + ">";
  JAMScript.callIntrospect(document.writeln, document, [v207], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  buildMenuBodies();
  document.close();
  return
}
function loadMe() {
  var v208 = this.action;
  if(JAMScript.isEval(eval)) {
    eval("introspect(JAMScript.introspectors.processAll) { " + v208 + " }")
  }else {
    JAMScript.call(eval, null, [v208])
  }
  return
}
function activateMenus() {
  var mName$$2;
  var mAction$$2;
  var mNode$$7;
  var tStyle;
  var v209 = getLayer(document, "test.cell");
  tStyle = getStyle(v209);
  var v448 = is.ns4;
  var v210 = !v448;
  if(v210) {
    window.mtPassive = tStyle.color;
    window.mbPassive = tStyle.backgroundColor;
    return
  }
  var v213 = window.menuLayers;
  for(mName$$2 in v213) {
    var v449 = window.menuLayers;
    var v211 = v449[mName$$2];
    mAction$$2 = v211.action;
    mNode$$7 = getLayer(document, mName$$2);
    var v212 = Event.MOUSEDOWN;
    JAMScript.callIntrospect(mNode$$7.captureEvents, mNode$$7, [v212], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
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
  var v450 = !elNode;
  if(v450) {
    v450 = elIndex < stackDepth
  }
  var v215 = v450;
  for(;v215;) {
    var v214 = nodeStack[elIndex];
    elNode = getLayer(v214, mName$$3);
    elIndex = elIndex + 1;
    var v451 = !elNode;
    if(v451) {
      v451 = elIndex < stackDepth
    }
    v215 = v451
  }
  return elNode
}
function clearMenus(mNum) {
  var v217 = stackDepth > mNum;
  for(;v217;) {
    stackDepth = stackDepth - 1;
    var v216 = nodeStack[stackDepth];
    hideLayer(v216);
    JAMScript.set(nameStack, stackDepth, 0);
    JAMScript.set(nodeStack, stackDepth, 0);
    v217 = stackDepth > mNum
  }
  return
}
function unPopMenus(mNum$$1, tag$$3) {
  var v218 = window.mbActive;
  var v219 = window.mtActive;
  setLayerColor(tag$$3, v218, v219);
  clearMenus(mNum$$1);
  var v221 = is.ns4;
  if(v221) {
    var v220 = Event.MOUSEDOWN;
    JAMScript.callIntrospect(document.releaseEvents, document, [v220], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return
}
function setColorPassive(tag$$4) {
  var v222 = window.mbPassive;
  var v223 = window.mtPassive;
  setLayerColor(tag$$4, v222, v223);
  var v225 = is.ns4;
  if(v225) {
    var v224 = Event.MOUSEDOWN;
    JAMScript.callIntrospect(document.captureEvents, document, [v224], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return
}
function popMenu(mNum$$2, tag$$5, mName$$4) {
  var style$$7;
  var elLayer$$1;
  clearMenus(mNum$$2);
  var v226 = window.mbActive;
  var v227 = window.mtActive;
  setLayerColor(tag$$5, v226, v227);
  elLayer$$1 = getLayer(document, mName$$4);
  if(elLayer$$1) {
    showLayer(elLayer$$1);
    JAMScript.set(nameStack, stackDepth, mName$$4);
    JAMScript.set(nodeStack, stackDepth, elLayer$$1);
    stackDepth = stackDepth + 1
  }
  var v229 = is.ns4;
  if(v229) {
    var v228 = Event.MOUSEDOWN;
    JAMScript.callIntrospect(document.releaseEvents, document, [v228], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
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
var v594 = blInfo.divType;
var v452 = "<" + v594;
var v230 = v452 + ' id="test.cell"';
JAMScript.callIntrospect(document.write, document, [v230], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
JAMScript.call(document.write, document, ['" class="menuItem" ']);
var v595 = blInfo.divType;
var v596 = blInfo.fontSize;
var v453 = setStyle(v595, v596, 0, 0, 100, 20, null, null, "hidden");
var v231 = v453 + ">";
JAMScript.callIntrospect(document.write, document, [v231], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
JAMScript.call(document.write, document, ["test.cell"]);
var v597 = blInfo.divType;
var v454 = "</" + v597;
var v232 = v454 + ">";
JAMScript.callIntrospect(document.writeln, document, [v232], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
var alphaWidth = Array();
alphaWidth["a"] = blInfo.charWidth;
alphaWidth["b"] = blInfo.charWidth;
alphaWidth["c"] = blInfo.charWidth;
alphaWidth["d"] = blInfo.charWidth;
alphaWidth["e"] = blInfo.charWidth;
alphaWidth["f"] = blInfo.charWidth;
alphaWidth["g"] = blInfo.charWidth;
alphaWidth["h"] = blInfo.charWidth;
var v233 = alphaWidth;
var v598 = blInfo.charWidth;
var v455 = v598 * 0.4;
var v706 = JAMScript.callIntrospect(Math.floor, Math, [v455], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v233["i"] = v706;
var v234 = alphaWidth;
var v599 = blInfo.charWidth;
var v456 = v599 * 0.7;
var v707 = JAMScript.callIntrospect(Math.floor, Math, [v456], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v234["j"] = v707;
alphaWidth["k"] = blInfo.charWidth;
var v235 = alphaWidth;
var v600 = blInfo.charWidth;
var v457 = v600 * 0.4;
var v708 = JAMScript.callIntrospect(Math.floor, Math, [v457], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v235["l"] = v708;
var v236 = alphaWidth;
var v601 = blInfo.charWidth;
var v458 = v601 * 1.6;
var v709 = JAMScript.callIntrospect(Math.floor, Math, [v458], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v236["m"] = v709;
alphaWidth["n"] = blInfo.charWidth;
alphaWidth["o"] = blInfo.charWidth;
alphaWidth["p"] = blInfo.charWidth;
alphaWidth["q"] = blInfo.charWidth;
alphaWidth["r"] = blInfo.charWidth;
alphaWidth["s"] = blInfo.charWidth;
alphaWidth["t"] = blInfo.charWidth;
alphaWidth["u"] = blInfo.charWidth;
alphaWidth["v"] = blInfo.charWidth;
var v237 = alphaWidth;
var v602 = blInfo.charWidth;
var v459 = v602 * 1.8;
var v710 = JAMScript.callIntrospect(Math.floor, Math, [v459], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v237["w"] = v710;
alphaWidth["x"] = blInfo.charWidth;
alphaWidth["y"] = blInfo.charWidth;
alphaWidth["z"] = blInfo.charWidth;
var v238 = alphaWidth;
var v603 = blInfo.charWidth;
var v460 = v603 * 1.6;
var v711 = JAMScript.callIntrospect(Math.floor, Math, [v460], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v238["A"] = v711;
var v239 = alphaWidth;
var v604 = blInfo.charWidth;
var v461 = v604 * 1.6;
var v712 = JAMScript.callIntrospect(Math.floor, Math, [v461], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v239["B"] = v712;
var v240 = alphaWidth;
var v605 = blInfo.charWidth;
var v462 = v605 * 1.6;
var v713 = JAMScript.callIntrospect(Math.floor, Math, [v462], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v240["C"] = v713;
var v241 = alphaWidth;
var v606 = blInfo.charWidth;
var v463 = v606 * 1.6;
var v714 = JAMScript.callIntrospect(Math.floor, Math, [v463], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v241["D"] = v714;
var v242 = alphaWidth;
var v607 = blInfo.charWidth;
var v464 = v607 * 1.6;
var v715 = JAMScript.callIntrospect(Math.floor, Math, [v464], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v242["E"] = v715;
var v243 = alphaWidth;
var v608 = blInfo.charWidth;
var v465 = v608 * 1.6;
var v716 = JAMScript.callIntrospect(Math.floor, Math, [v465], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v243["F"] = v716;
var v244 = alphaWidth;
var v609 = blInfo.charWidth;
var v466 = v609 * 1.6;
var v717 = JAMScript.callIntrospect(Math.floor, Math, [v466], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v244["G"] = v717;
var v245 = alphaWidth;
var v610 = blInfo.charWidth;
var v467 = v610 * 1.6;
var v718 = JAMScript.callIntrospect(Math.floor, Math, [v467], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v245["H"] = v718;
var v246 = alphaWidth;
var v468 = blInfo.charWidth;
var v719 = JAMScript.callIntrospect(Math.floor, Math, [v468], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v246["I"] = v719;
var v247 = alphaWidth;
var v469 = blInfo.charWidth;
var v720 = JAMScript.callIntrospect(Math.floor, Math, [v469], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v247["J"] = v720;
var v248 = alphaWidth;
var v611 = blInfo.charWidth;
var v470 = v611 * 1.6;
var v721 = JAMScript.callIntrospect(Math.floor, Math, [v470], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v248["K"] = v721;
var v249 = alphaWidth;
var v612 = blInfo.charWidth;
var v471 = v612 * 1.6;
var v722 = JAMScript.callIntrospect(Math.floor, Math, [v471], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v249["L"] = v722;
var v250 = alphaWidth;
var v613 = blInfo.charWidth;
var v472 = v613 * 2;
var v723 = JAMScript.callIntrospect(Math.floor, Math, [v472], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v250["M"] = v723;
var v251 = alphaWidth;
var v614 = blInfo.charWidth;
var v473 = v614 * 1.6;
var v724 = JAMScript.callIntrospect(Math.floor, Math, [v473], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v251["N"] = v724;
var v252 = alphaWidth;
var v615 = blInfo.charWidth;
var v474 = v615 * 1.6;
var v725 = JAMScript.callIntrospect(Math.floor, Math, [v474], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v252["O"] = v725;
var v253 = alphaWidth;
var v616 = blInfo.charWidth;
var v475 = v616 * 1.6;
var v726 = JAMScript.callIntrospect(Math.floor, Math, [v475], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v253["P"] = v726;
var v254 = alphaWidth;
var v617 = blInfo.charWidth;
var v476 = v617 * 1.6;
var v727 = JAMScript.callIntrospect(Math.floor, Math, [v476], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v254["Q"] = v727;
var v255 = alphaWidth;
var v618 = blInfo.charWidth;
var v477 = v618 * 1.6;
var v728 = JAMScript.callIntrospect(Math.floor, Math, [v477], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v255["R"] = v728;
var v256 = alphaWidth;
var v619 = blInfo.charWidth;
var v478 = v619 * 1.6;
var v729 = JAMScript.callIntrospect(Math.floor, Math, [v478], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v256["S"] = v729;
var v257 = alphaWidth;
var v620 = blInfo.charWidth;
var v479 = v620 * 1.6;
var v730 = JAMScript.callIntrospect(Math.floor, Math, [v479], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v257["T"] = v730;
var v258 = alphaWidth;
var v621 = blInfo.charWidth;
var v480 = v621 * 1.6;
var v731 = JAMScript.callIntrospect(Math.floor, Math, [v480], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v258["U"] = v731;
var v259 = alphaWidth;
var v622 = blInfo.charWidth;
var v481 = v622 * 1.6;
var v732 = JAMScript.callIntrospect(Math.floor, Math, [v481], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v259["V"] = v732;
var v260 = alphaWidth;
var v623 = blInfo.charWidth;
var v482 = v623 * 3;
var v733 = JAMScript.callIntrospect(Math.floor, Math, [v482], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v260["W"] = v733;
var v261 = alphaWidth;
var v624 = blInfo.charWidth;
var v483 = v624 * 1.6;
var v734 = JAMScript.callIntrospect(Math.floor, Math, [v483], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v261["X"] = v734;
var v262 = alphaWidth;
var v625 = blInfo.charWidth;
var v484 = v625 * 1.6;
var v735 = JAMScript.callIntrospect(Math.floor, Math, [v484], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v262["Y"] = v735;
var v263 = alphaWidth;
var v626 = blInfo.charWidth;
var v485 = v626 * 1.6;
var v736 = JAMScript.callIntrospect(Math.floor, Math, [v485], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v263["Z"] = v736;
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
var v265 = is.ns4;
if(v265) {
  var v264 = Event.MOUSEDOWN;
  JAMScript.callIntrospect(document.captureEvents, document, [v264], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
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
var v486 = is.w3c;
var v628 = !v486;
if(v628) {
  var v627 = is.ie4;
  var v661 = !v627;
  if(v661) {
    var v660 = is.ns4;
    if(v660) {
      var v676 = is.hj;
      v660 = !v676
    }
    v627 = v660
  }
  v486 = v627
}
var v266 = v486;
if(v266) {
  var barTop = 20;
  var barLeft = 50;
  var barWidth = 370;
  var barHeight = 44;
  var itemPadding = 5;
  var barImage = "images/title.png";
  drawHMenuBar(barLeft, barTop, barWidth, barHeight, itemPadding, barImage)
}
var v268 = is.w3c;
if(v268) {
  JAMScript.call(document.writeln, document, ['<div style="position : relative; top : 15px; float : right; padding-right : 42px; text-align : right">']);
  JAMScript.callIntrospect(document.writeln, document, ['<a href="http://sourceforge.net/projects/jswidgets"><img src="http://sflogo.sourceforge.net/sflogo.php?group_id=33495&type=15" width="150" height="40" border="0" alt="Get Browser-Independent Javascript Widgets at SourceForge.net. Fast, secure and Free Open Source software downloads" /></a>'], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.call(document.writeln, document, ["</div>"])
}else {
  var v267 = is.ns4;
  if(v267) {
    JAMScript.call(document.writeln, document, ['<layer top="20" left="400">']);
    JAMScript.callIntrospect(document.writeln, document, ['<a href="http://sourceforge.net/projects/jswidgets"><img src="http://sflogo.sourceforge.net/sflogo.php?group_id=33495&type=15" width="150" height="40" border="0" alt="Get Browser-Independent Javascript Widgets at SourceForge.net. Fast, secure and Free Open Source software downloads" /></a>'], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.call(document.writeln, document, ["</layer>"])
  }
}
var v269 = document.body;
v269.background = "images/researchbg.gif";
var v270 = document.body;
JAMScript.set(v270, "onload", initialize);
var v271 = document.getElementById("cleardiv");
JAMScript.set(v271, "onmouseover", clearAll);

