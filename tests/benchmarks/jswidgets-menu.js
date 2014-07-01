// This application comes from the SourceForge page for the JSWidgets
// project, and is itself a use of the JSWidgets library.
// http://jswidgets.sourceforge.net/home.shtml


// layers.js

function getNSLayer(inNode, inName) {

	var node, i;

	node = inNode[inName];
	for (i = 0; !node && inNode.layers && i < inNode.layers.length; i++) {
		node = getNSLayer(inNode.layers[i].document,inName);
	}
	return node;
}

function getLayer(inNode,inName) {

	var node;

	if (inNode.getElementById) {
		node = inNode.getElementById(inName);
	} else if (inNode.all) {
		node = inNode.all[inName];
	} else if (inNode.layers) {
		node = getNSLayer(inNode, inName);
	}
	if (!node) alert("Could not find layer " + inName + ".");
	return node;
}

function getStyle(inNode) {

	var style;

	if (is.w3c || is.ie4) {
		style = inNode.style;
	} else if (is.ns4) {
		style = inNode;
	} else {
		style = 0;
	}
	return style;
}

function setLayerPos(inNode, left, top) {

	if (is.ie4 || is.w3c) {
		inNode.style.left = left + "px";
		inNode.style.top  = top + "px";
	} else if (is.ns4) {
		inNode.left = left;
		inNode.top  = top;
	}
}

function showLayer(mNode) {

	var style;

	style = getStyle(mNode);
	if (style) style.visibility = "visible";
}

function hideLayer(mNode) {

	var style;

	style = getStyle(mNode);
	if (style) style.visibility = "hidden";
}

function isPositioned(mNode) {

	return (mNode.left || mNode.style.left);
}

function layerWidth(mNode) {

	var nWidth;

	if (is.ie4 || is.w3c) {
		//alert("Node width = " + mNode.style.width);
		nWidth  = parseInt(mNode.style.width);
	} else if (is.ns4) {
		nWidth  = parseInt(mNode.width);
	}
	return nWidth;
}

function expandLayer(mNode) {

	var style;

	style = getStyle(mNode);
	if (style) style.display = "block";
}

function contractLayer(mNode) {

	var style;

	style = getStyle(mNode);
	if (style) style.display = "none";
}

function insertLayer(mNode) {

	var style;

	style = getStyle(mNode);
	if (style) style.display = "inline";
}

function setLayerColor(tag,bgColor,tColor) {

	var elLayer;

	elLayer = getLayer(document,tag);
	elStyle = getStyle(elLayer);
	if (elStyle) {
		if (is.ns4) {
			elStyle.bgColor = bgColor;
			//Netscape 4.xx browsers don't support this!
			//elStyle.fgColor = tColor;
		} else {
			elStyle.backgroundColor = bgColor;
			elStyle.color = tColor;
		}
	}
}

var NSVisType = new Array();
	NSVisType["visible"] = "show";
	NSVisType["hidden"]  = "hide";
	NSVisType["inherit"] = "inherit";

function setStyle(divType, fontSize, left, top, width, height, zIndex, bgColor, visibility) {

	 var dStyle;

	 if (divType == "layer") {
		dStyle  = 'left="' + left;
		dStyle += '" top="' + top;
		dStyle += '" width="' + width;
		dStyle += '" height="' + height;
		if (zIndex) dStyle += '" z-index="' + zIndex;
		if (bgColor) {
		    dStyle += '" bgColor="' + bgColor;
		} else {
		    dStyle += '" bgColor="#000000';
		}
		if (visibility) dStyle += '" visibility="' + NSVisType[visibility];
		dStyle += '" ';
	 } else {
		dStyle  = 'style="font-size : ' + fontSize + 'pt; ';
		dStyle += 'left : ' + left + 'px; ';
		dStyle += 'top : ' + top + 'px; ';
		dStyle += 'width : ' + width + 'px; ';
		dStyle += 'height : ' + height + 'px; ';
		if (zIndex) dStyle += 'z-index : ' + zIndex + '; ';
		if (bgColor) dStyle += 'background-color : ' + bgColor + '; ';
		if (visibility) dStyle += 'visibility : ' + visibility + '; ';
		dStyle += '" ';
	 }
	 //alert("dStyle = " + dStyle);
	 return dStyle;
}


// browser.js

function Is() {
	var appName = navigator.appName.toLowerCase();
	var version = navigator.appVersion.toLowerCase();
	var agent   = navigator.userAgent.toLowerCase();
	var platform = navigator.platform.toLowerCase();
	this.major = parseInt(version);
	this.minor = parseFloat(version);
	this.nsa = (agent.indexOf('netscape') != -1);
	this.mza = (agent.indexOf('mozilla') != -1);
	this.gla = (agent.indexOf('galeon') != -1);
	this.mza = (this.mza && !this.nsa);

	if (this.mza) {
		version = agent.substring(agent.indexOf("rv:")+3,agent.indexOf(")"));
		this.nsa = false;
		if (agent.indexOf("rv:") != -1) {
			this.major = parseInt(version);
			this.minor = parseFloat(version);
			this.mz1 = (this.mza && (this.major == 1));
		} else {
			this.mza = false;
			version = this.minor;
		}
	}

  	if (this.gla) {
  		version = agent.substring(agent.indexOf("galeon/")+7,agent.indexOf("(")-1);
  		this.nsa = false;
  		if (agent.indexOf("galeon/") != -1) {
  			this.major = parseInt(version);
  			this.minor = parseFloat(version);
  			this.gl1 = (this.gla && (this.major == 1));
  		} else {
  			this.gla = false;
  			version = this.version;
  		}
  	}

	this.version = version;

	this.nsn = (appName.indexOf('netscape') != -1);
	this.ns2 = (this.nsn && (this.major == 2));
	this.ns3 = (this.nsn && (this.major == 3));
	this.ns4 = (this.nsn && (this.major == 4));
	this.ns6 = (this.nsa && (this.major >= 5));
	if (this.ns6) {
		this.version = agent.slice(agent.indexOf("netscape6/")+10,agent.length);
	}

	this.ie = ((appName.indexOf("internet explorer") != -1)
		&& (agent.indexOf("opera") == -1));
	this.ie3 = (this.ie && (this.major == 3));
	this.ie4 = (this.ie && (this.major == 4)
		&& (agent.indexOf("msie 4.") != -1));
	this.ie5 = (this.ie && (this.major == 4)
		&& (agent.indexOf("msie 5.") != -1));
	this.ie6 = (this.ie && (this.major == 4)
		&& (agent.indexOf("msie 6.") != -1));
	if (this.ie4 || this.ie5 || this.ie6) {
		this.version = agent.slice(agent.indexOf("msie ")+5,agent.length);
		this.version = this.version.slice(0,this.version.indexOf(";"));
	}
	this.ieX = (this.ie && !this.ie3 && !this.ie4);

	this.op  = (agent.indexOf('opera') != -1);
	this.op4 = (this.op && (this.major == 4)
		&& (agent.indexOf("opera 4.") != -1));
	this.op5 = (this.op && (this.major == 4)
		&& (agent.indexOf("opera 5.") != -1));
	this.op6 = (this.op && (this.major == 4)
		&& (agent.indexOf("opera 6.") != -1));
	if (this.op) {
		this.ie = false;
		this.ie4 = false;
		this.ie5 = false;
		this.ie6 = false;
		this.version = agent.slice(agent.indexOf("opera")+6,agent.length)
		this.version = parseFloat(this.version);
	}

	this.kq  = (agent.indexOf("konqueror") != -1);
	if (this.kq) {
		this.version = agent.substring(agent.indexOf("konqueror/")+10,agent.length);
		this.version = this.version.substring(0,this.version.indexOf(";"));
		this.major = parseInt(this.version);
		this.minor = parseFloat(this.version);
		this.mza = false;
	}
	this.kq2 = (this.kq && (this.major == 2));
	this.kq3 = (this.kq && (this.major == 3));

	this.w3c = (!(!(document.getElementById)));
	this.win32 = (platform.indexOf("win32") != -1);
	this.linux = (platform.indexOf("linux") != -1);
	this.bsd   = (platform.indexOf("bsd") != -1);
}

var is = new Is();

function setTagFontColor(tag, color) {

	if (is.ie4 || is.w3c) {
		tag.style.color = color;
	} else if (is.ns4) {
		tag.color = color;
	} else {
		return;
	}
}

function setTagFontStyle(tag, style) {

	if (is.ie4 || is.w3c) {
		tag.style.fontStyle = style;
	} else if (is.ns4) {
		tag.fontStyle = style;
	} else {
		return;
	}
}

function mousePosLeft(event) {

	var leftPos;

	if (is.ie4 || (is.w3c && !(is.ns6 || is.mza))) {
		leftPos = event.clientX;
		//alert("event.clientX = " + event.clientX);
	} else if (is.ns4 || is.ns6 || is.mza) {
		leftPos = event.pageX;
	}
	return leftPos;
}

function mousePosTop(event) {

	var topPos;

	if (is.ie4 || (is.w3c && !(is.ns6 || is.mza))) {
		topPos = event.clientY;
		//alert("mousePosTop is clientY = " + event.clientY);
	} else if (is.ns4 || is.ns6 || is.mza) {
		topPos = event.pageY;
		//alert("mousePosTop is pageX = " + event.pageX);
	}
	return topPos;
}


// brmenu.js

function BrowserMenuInfo() {

	if (is.ns4) {
		if (is.win32) {
			this.itemHeight = 16;
		} else if (is.linux) {
			this.itemHeight = 15;
		} else {
			this.itemHeight = 15;
		}
		this.cellOffset  = 2;
		this.leftOffset  = 2;
		this.mTopOffset  = 2;
		this.wBarPadding = 4;
		this.hBarPadding = 6;
		this.itemPadding = 10;
		this.itemSpacing = 2;
		this.menuPadding = -2;
		this.mBarOffset  = 4;
		this.bBarOffset  = -2;
		this.dividerHeight = 2;
		this.bwPadding = 4;
		this.bhPadding = 4;
		this.fontSize = 12;
		if (is.win32) {
			this.charWidth = 7;
		} else if (is.linux) {
			this.charWidth = 6;
		} else {
			this.charWidth = 6;
		}
		this.divType = "layer";
		//Now set foreground/background colors -- Netscape 4.xx only.
		window.mtActive   = "#FFFF00";
		window.mtPassive  = "#FFFFFF";
		window.mbActive   = "#FF0000";
		window.mbPassive  = "#081C92";
	} else if (is.kq) {
		this.itemHeight  = 18;
		this.cellOffset  = 4;
		this.leftOffset  = 0;
		this.mTopOffset  = 0;
		this.wBarPadding = 2;
		this.hBarPadding = 6;
		this.itemSpacing = 0;
		this.itemPadding = 2;
		this.menuPadding = 0;
		this.mBarOffset  = 4;
		this.bBarOffset  = 4;
		this.dividerHeight = 1;
		this.bwPadding = 2;
		this.bhPadding = 4;
		this.fontSize = 10;
		this.charWidth = 7;
		this.divType = "div";
	} else if (is.op5 || is.op6) {
		this.itemHeight  = 17;
		this.cellOffset  = 4;
		this.leftOffset  = 2;
		this.mTopOffset  = 0;
		this.wBarPadding = 2;
		this.hBarPadding = 6;
		this.itemPadding = 10;
		this.itemSpacing = 2;
		this.menuPadding = 2;
		this.mBarOffset  = 6;
		this.bBarOffset  = 4;
		this.dividerHeight = 1;
		this.bwPadding = 2;
		this.bhPadding = 4;
		this.fontSize = 10;
		this.charWidth = 6;
		this.divType = "div";
	} else if (is.ie4) {
		this.itemHeight  = 18;
		this.cellOffset  = 0;
		this.leftOffset  = 0;
		this.mTopOffset  = 0;
		this.wBarPadding = 4;
		this.hBarPadding = 5;
		this.itemPadding = 10;
		this.itemSpacing = 2;
		this.menuPadding = -2;
		this.mBarOffset  = 3;
		this.bBarOffset  = -3;
		this.dividerHeight = 1;
		this.bwPadding = 4;
		this.bhPadding = 2;
		this.fontSize = 10;
		this.charWidth = 6;
		this.divType = "div";
	} else if (is.ie5) {
		this.itemHeight  = 20;
		this.cellOffset  = 0;
		this.leftOffset  = 0;
		this.mTopOffset  = 0;
		this.wBarPadding = 4;
		this.hBarPadding = 8;
		this.itemPadding = 11;
		this.itemSpacing = 0;
		this.menuPadding = 2;
		this.mBarOffset  = 4;
		this.bBarOffset  = -2;
		this.dividerHeight = 1;
		this.bwPadding = 4;
		this.bhPadding = 2;
		this.fontSize = 10;
		this.charWidth = 6;
		this.divType = "div";
	} else if (is.ie6) {
		this.itemHeight  = 18;
		this.cellOffset  = 4;
		this.leftOffset  = 0;
		this.mTopOffset  = 0;
		this.wBarPadding = 0;
		this.hBarPadding = 6;
		this.itemPadding = 11;
		this.itemSpacing = 2;
		this.menuPadding = 2;
		this.mBarOffset  = 4;
		this.bBarOffset  = 4;
		this.dividerHeight = 1;
		this.bwPadding = 2;
		this.bhPadding = 4;
		this.fontSize = 10;
		this.charWidth = 6;
		this.divType = "div";
	} else if (is.mza || is.gla || is.ns6) {
		this.itemHeight = 18;
		this.cellOffset  = 4;
		this.leftOffset  = 0;
		this.mTopOffset  = 0;
		this.wBarPadding = 2;
		this.hBarPadding = 6;
		this.itemSpacing = 0;
		this.itemPadding = 2;
		this.menuPadding = 0;
		this.mBarOffset  = 4;
		this.bBarOffset  = 4;
		this.dividerHeight = 1;
		this.bwPadding = 2;
		this.bhPadding = 4;
		this.fontSize  = 10;
		this.charWidth = 7;
		this.divType = "div";
	} else if (is.w3c) {
		this.itemHeight  = 19;
		this.cellOffset  = 0;
		this.leftOffset  = 0;
		this.mTopOffset  = 0;
		this.wBarPadding = 0;
		this.hBarPadding = 0;
		this.itemSpacing = 6;
		this.itemPadding = 2;
		this.menuPadding = 0;
		this.mBarOffset  = 3;
		this.bBarOffset  = 5;
		this.dividerHeight = 1;
		this.bwPadding = 0;
		this.bhPadding = 0;
		this.fontSize = 10;
		this.charWidth = 7;
		this.divType = "div";
	} else {
		alert("This should never happen.");
		return 0;
	}
}


var blInfo     = new BrowserMenuInfo();

//  Create a test cell to read the style.
    document.write("<" + blInfo.divType + ' id="test.cell"');
    document.write('" class="menuItem" ');
    document.write(setStyle(blInfo.divType, blInfo.fontSize, 0, 0, 100, 20,null,null,"hidden") + ">");
    document.write("test.cell");
    document.writeln('</' + blInfo.divType + '>');
//  Read the style during activateMenus();


function startSiteMap(mName,mTarget) {

	window.menuName   = mName;
	window.menuTarget = mTarget;
	window.menuPntr   = "images/tri.gif";
	window.menuCells  = new Array();
	window.menuPopups = 0;
	window.menuHeads  = 0;
	window.menuLevel  = 0;
	window.menuMain   = 0;
	window.menuLayers = new Object();
	window.menuStack  = new Array();
	window.menuBody   = new Array();
	window.bodyCells  = new Array();
	window.mbActive   = "#FF0000";
	window.mtActive   = "#FFFF00";
}

function menuItem(label,action,width,level,popup) {

	if (label == 0) {
		this.label = label;
	} else {
		this.label = "&nbsp;" + label;
	}
	this.action = action;
	this.width  = width;
	this.level  = level;
	this.popup  = popup;
}

function bodyItem(cells,popup,level,left,top,width,height) {

	this.cells  = cells;
	this.popup  = popup;
	this.level  = level;
	this.left   = left;
	this.top    = top;
	this.width  = width;
	this.height = height;
}

function stackMenuBody(queue,bPopup,bLevel,bLeft,bTop,bWidth,bHeight) {

	var mBody,i;

	mBody = new bodyItem(window.bodyCells.length,bPopup,bLevel,bLeft,bTop,bWidth,bHeight);
	window.menuBody[window.menuBody.length] = mBody;
	for (i = 0; i < queue.length; i++) {
		window.bodyCells[window.bodyCells.length] = queue[i];
	}
	window.bodyCells[window.bodyCells.length] = 0;
}

function addMenuDivider() {

	var mItem,mLevel;

	mLevel = window.menuLevel;
	mItem  = new menuItem(0,0,0,mLevel,0);
	window.menuCells[window.menuCells.length] = mItem;
}

var alphaWidth = Array();

alphaWidth["a"] = blInfo.charWidth;
alphaWidth["b"] = blInfo.charWidth;
alphaWidth["c"] = blInfo.charWidth;
alphaWidth["d"] = blInfo.charWidth;
alphaWidth["e"] = blInfo.charWidth;
alphaWidth["f"] = blInfo.charWidth;
alphaWidth["g"] = blInfo.charWidth;
alphaWidth["h"] = blInfo.charWidth;
alphaWidth["i"] = Math.floor(blInfo.charWidth*0.4);
alphaWidth["j"] = Math.floor(blInfo.charWidth*0.7);
alphaWidth["k"] = blInfo.charWidth;
alphaWidth["l"] = Math.floor(blInfo.charWidth*0.4);
alphaWidth["m"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["n"] = blInfo.charWidth;
alphaWidth["o"] = blInfo.charWidth;
alphaWidth["p"] = blInfo.charWidth;
alphaWidth["q"] = blInfo.charWidth;
alphaWidth["r"] = blInfo.charWidth;
alphaWidth["s"] = blInfo.charWidth;
alphaWidth["t"] = blInfo.charWidth;
alphaWidth["u"] = blInfo.charWidth;
alphaWidth["v"] = blInfo.charWidth;
alphaWidth["w"] = Math.floor(blInfo.charWidth*1.8);
alphaWidth["x"] = blInfo.charWidth;
alphaWidth["y"] = blInfo.charWidth;
alphaWidth["z"] = blInfo.charWidth;
alphaWidth["A"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["B"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["C"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["D"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["E"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["F"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["G"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["H"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["I"] = Math.floor(blInfo.charWidth);
alphaWidth["J"] = Math.floor(blInfo.charWidth);
alphaWidth["K"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["L"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["M"] = Math.floor(blInfo.charWidth*2);
alphaWidth["N"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["O"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["P"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["Q"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["R"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["S"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["T"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["U"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["V"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["W"] = Math.floor(blInfo.charWidth*3);
alphaWidth["X"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["Y"] = Math.floor(blInfo.charWidth*1.6);
alphaWidth["Z"] = Math.floor(blInfo.charWidth*1.6);
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
alphaWidth["\""] = blInfo.charWidth;
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


function estLabelWidth(label) {

	 var lWidth = 0, i;
	 
	 for (i=0; i < label.length; i++) {
	     lWidth += alphaWidth[label.charAt(i)];
	 }
	 //alert("Width of " + label + " = " + lWidth + ".  label.charAt(0) = " + label.charAt(0) + ".");
	 return lWidth;
}

function addMenuItem(label,action,popup) {

	var mLabel,mAction,mPopup,mItem,mWidth,mLevel;

	mLevel = window.menuLevel;
	mWidth = estLabelWidth(label)+4;
	if (label) {
		mLabel = label;
	} else {
		alert("No label given for action " + action + ".");
		mLabel = "no label";
	}
	if (action) {
		mAction = "location='" + action + "'";
	} else {
		mAction = "clearMenus(" + mLevel + ")";
	}
	mPopup = popup;
	if (mPopup && (mLevel > 0)) mWidth += 15;	// Add margin for window.menuPntr.
	if (mLevel == 0) window.menuHeads++;
	mItem  = new menuItem(mLabel,mAction,mWidth,mLevel,mPopup);
	window.menuCells[window.menuCells.length] = mItem;
}

function startMenu(label,action) {

	addMenuItem(label,action,"popup" + window.menuPopups++);
	window.menuLevel++;
}

function endMenu() {

	window.menuLevel--;
}

function menuLayer(label,action) {

	this.name   = name;
	this.label  = label;
	this.action = action;
}

function buildMenuCell(index,left,top,width,height) {

	var mName,mLabel,mLeft,mTop,mWidth,mHeight,mAction,mLevel;

	mName  = "cell" + index;
	mClass = "menuItem";
	mLevel = window.menuCells[index].level;
	mLeft   = left;
	mTop    = top;
	mWidth  = width;
	mHeight = height;
	mLabel  = window.menuCells[index].label;
	mAction = window.menuCells[index].action;
	document.write("<" + blInfo.divType + ' id="' + mName);
	document.write('" class="' + mClass + '" ');
	document.write(setStyle(blInfo.divType, blInfo.fontSize, mLeft, mTop, mWidth, mHeight, 0, window.mbPassive, "inherit"));
	document.write(' onclick="' + mAction + '" ');
	mPopup = window.menuCells[index].popup;
	if (mPopup) {
		document.write('onmouseover="popMenu(' + mLevel + ",'" + mName + "','" + mPopup + "'" + ');" ');
		document.write('onmouseout="setColorPassive(' + "'" + mName + "'" + ');">');
	} else {
		document.write('onmouseover="unPopMenus(' + mLevel + ",'" + mName + "'" + ');" ');
		document.write('onmouseout="setColorPassive(' + "'" + mName + "'" + ');">');
	}
	window.menuLayers[mName] = new menuLayer(mLabel,mAction);
	if (blInfo.divType == "layer") {
		document.write(mLabel.fontcolor(mtPassive));
	} else {
		document.write(mLabel);
	}
	if (mPopup && (mLevel >= 1)) {
		document.write('&nbsp;<img src="' + window.menuPntr + '" border="0">');
	}
	document.writeln('</' + blInfo.divType + '>');
}

function buildMenuBody(cQueue,bName,bLevel,bLeft,bTop,bWidth,bHeight) {

	var i,bClass,geometry,zIndex,level,bLayer;
	var lWidth,lHeight,mLeft,mTop;

	bClass   = "menuBody";
	lWidth   = bWidth + blInfo.bwPadding;
	lHeight  = bHeight + blInfo.bhPadding;
	document.write("<" + blInfo.divType + ' id="' + bName + '" class="' + bClass + '" ');
	document.write(setStyle(blInfo.divType, blInfo.fontSize, bLeft, bTop, lWidth, lHeight, bLevel+1, "#000000", "hidden"));
	document.writeln(">");
	mLeft = blInfo.leftOffset;
	mTop  = blInfo.mTopOffset;
	for (i = 0; i < cQueue.length; i++) {
		mLabel = window.menuCells[cQueue[i]].label;
		if (mLabel) {
			buildMenuCell(cQueue[i],mLeft,mTop,bWidth,blInfo.itemHeight);
			mTop += blInfo.itemHeight + blInfo.cellOffset;
		} else if (mLabel == 0) {
			mTop += blInfo.dividerHeight;
		} else {
			alert("Expecting label in buildMenuBody.");	// This should never happen!
			return 0;
		}
	}
	document.writeln("</" + blInfo.divType + ">");
}

function buildMenuBodies() {

	var i,cQueue,bName,bLevel,bLeft,bTop,bWidth,bHeight,bCells;
	
	for (i = 0; i < window.menuBody.length; i++) {
		bCells  = window.menuBody[i].cells;
		bName   = window.menuBody[i].popup;
		bLevel  = window.menuBody[i].level;
		bLeft   = window.menuBody[i].left;
		bTop    = window.menuBody[i].top;
		bWidth  = window.menuBody[i].width;
		bHeight = window.menuBody[i].height;
		cQueue  = new Array();
		cCount  = 0;
		while ((bCells < window.bodyCells.length) && (window.bodyCells[bCells] > 0))
		{
			cQueue[cCount++] = window.bodyCells[bCells++];
		}
		buildMenuBody(cQueue,bName,bLevel,bLeft,bTop,bWidth,bHeight);
		cQueue  = null;
	}
}

function queueMenuBuilds(mIndex,mLevel,mPopup,mLeft,mTop) {

	var queue = new Array();
	var i,sPopup,sLeft,sTop,sWidth,sHeight;

	sTop    = mTop;
	sWidth  = 0;
	sHeight = 0;
	i = mIndex;
	while ((i < window.menuCells.length) && (window.menuCells[i].level >= mLevel)) {
		if (window.menuCells[i].level == mLevel) {
			sWidth = Math.max(sWidth,window.menuCells[i].width);
		}
		i++
	}
	sLeft   = mLeft + sWidth + 2;
	i = mIndex;
	while ((i < window.menuCells.length) && (window.menuCells[i].level >= mLevel)) {
		queue[queue.length] = i;
		if (window.menuCells[i].popup) {
			sPopup = window.menuCells[i].popup;
			i++;
			i = queueMenuBuilds(i,mLevel+1,sPopup,sLeft,sTop);
			sTop    += blInfo.itemHeight + blInfo.cellOffset;
			sHeight += blInfo.itemHeight + blInfo.cellOffset;
		} else if (window.menuCells[i].label) {
			i++;
			sTop    += blInfo.itemHeight + blInfo.cellOffset;
			sHeight += blInfo.itemHeight + blInfo.cellOffset;
		} else {	// This must be a menu divider.
			i++;
			sTop    += blInfo.dividerHeight;
			sHeight += blInfo.dividerHeight;
		}
	}
	if (queue.length > 0) stackMenuBody(queue,mPopup,mLevel,mLeft,mTop,sWidth,sHeight-blInfo.cellOffset);
	queue = null;
	return i;
}

function endSiteMap() {

}

function drawHMenuBar(left, top, width, height, padding, graphic) {

	var bLeft,bTop,bWidth,bHeight,iPadding,bGraphic;
	var i,geometry,zIndex,iWidth,iLeft,mTop;

	bLeft   = left;
	bTop    = top;
	bWidth  = width + blInfo.wBarPadding;
	bHeight = height + blInfo.itemHeight + blInfo.hBarPadding;
	iPadding = padding + blInfo.itemPadding;
	bGraphic = graphic;
	document.write('<' + blInfo.divType + ' id="menuBar" class="menuBar" ');
	document.write(setStyle(blInfo.divType, blInfo.fontSize, bLeft, bTop, bWidth, bHeight, 0, null, "visible"));
	document.writeln('>');
	document.writeln('<img name="menuImage" src="' + bGraphic + '" class="menuBar" border="1" width="' + width + '" height="' + height + '">');
	iLeft = blInfo.leftOffset;
	mTop  = height + blInfo.mBarOffset;
	bTop += blInfo.bBarOffset;
	i = 0;
	while (i < window.menuCells.length) {
		iWidth = window.menuCells[i].width + iPadding;
		iWidth = Math.min(iWidth, bWidth-iLeft+blInfo.menuPadding);
		buildMenuCell(i,iLeft,mTop,iWidth,blInfo.itemHeight);
		if (window.menuCells[i].popup) {
			mPopup = window.menuCells[i].popup;
			i++;
			i = queueMenuBuilds(i,1,mPopup,bLeft,bTop+bHeight);
		}
		bLeft += iWidth + blInfo.itemSpacing;
		iLeft += iWidth + blInfo.itemSpacing;
	}
	document.writeln('</' + blInfo.divType + '>');
	buildMenuBodies();
	document.close();
}

function drawVMenuBar(left, top, width, height, padding, graphic) {

	var bLeft,bTop,bWidth,bHeight,mHeight,iPadding,bGraphic;
	var i,geometry,zIndex,iWidth,iLeft,mTop,nTopItems;

	bLeft   = left;
	bTop    = top;
	bWidth  = width + blInfo.wBarPadding;
	bHeight = height;// + blInfo.itemHeight + blInfo.hBarPadding;
	nTopItems = 0;
	i = 0;
	while (i < window.menuCells.length) {
		if (window.menuCells[i].level == 0) {
			nTopItems++;
		}
		i++;
	}
	mHeight = nTopItems*(blInfo.itemHeight + blInfo.cellOffset);
	i = 0;
	iPadding = padding + blInfo.itemPadding;
	bGraphic = graphic;
	document.write('<' + blInfo.divType + ' id="menuBar" class="menuBar" ');
	document.write(setStyle(blInfo.divType, blInfo.fontSize, bLeft, bTop, bWidth, bHeight+mHeight, 0, null, "visible"));
	document.writeln('>');
	document.writeln('<img name="menuImage" src="' + bGraphic + '"class="menuBar" border="1" width="' + width + '" height="' + height + '">');
	iLeft = blInfo.leftOffset;
	mTop  = height + blInfo.mBarOffset;
	bTop += blInfo.bBarOffset;
	while (i < window.menuCells.length) {
		iWidth = window.menuCells[i].width + iPadding;
		iWidth = Math.min(iWidth, bWidth-iLeft+blInfo.menuPadding);
		buildMenuCell(i,iLeft,mTop,iWidth,blInfo.itemHeight);
		if (window.menuCells[i].popup) {
			mPopup = window.menuCells[i].popup;
			i++;
			i = queueMenuBuilds(i,1,mPopup,bLeft+iWidth,bTop+bHeight);
		}
		mTop    += blInfo.itemHeight + blInfo.cellOffset;
		bTop    += blInfo.itemHeight + blInfo.cellOffset;
	}
	document.writeln('</' + blInfo.divType + '>');
	buildMenuBodies();
	document.close();
}

function loadMe() {

	eval(this.action);
}

function activateMenus() {

	var mName,mAction,mNode,tStyle;

	tStyle = getStyle(getLayer(document, "test.cell"));
	if (!is.ns4) {
	    //Netscape 4.xx doesn't support this.
	    window.mtPassive = tStyle.color;
	    window.mbPassive = tStyle.backgroundColor;
	    return;	     // Nothing further to do for non Netscape 4.xx browsers.
	}

	for (mName in window.menuLayers) {
		mAction = window.menuLayers[mName].action;
		mNode = getLayer(document,mName);
		mNode.captureEvents(Event.MOUSEDOWN);
		mNode.onmousedown = loadMe;
		mNode.action = mAction;
		mNode.fgColor = window.mtPassive;
	}
}

var nameStack = new Array();
var nodeStack = new Array();
var stackDepth = 0;

function findNode(elMain,mName) {

	var elNode,elIndex;

	elNode  = getLayer(elMain,mName);
	elIndex = 0;
	while ((!elNode) && (elIndex < stackDepth)) {
		elNode = getLayer(nodeStack[elIndex],mName);
		elIndex++;
	}
	return elNode;
}

function clearMenus(mNum) {

	while (stackDepth > mNum) {
		stackDepth--;
		hideLayer(nodeStack[stackDepth]);
		nameStack[stackDepth] = 0;
		nodeStack[stackDepth] = 0;
	}
}

function unPopMenus(mNum,tag) {

	setLayerColor(tag,window.mbActive,window.mtActive);
	clearMenus(mNum);
	if (is.ns4) document.releaseEvents(Event.MOUSEDOWN);
}

function setColorPassive(tag) {

	setLayerColor(tag,window.mbPassive,window.mtPassive);
	if (is.ns4) document.captureEvents(Event.MOUSEDOWN);
}

function popMenu(mNum,tag,mName) {

	var style,elLayer;

	clearMenus(mNum);
	setLayerColor(tag,window.mbActive,window.mtActive);
	elLayer = getLayer(document,mName);
	if (elLayer) {
		showLayer(elLayer);
		nameStack[stackDepth] = mName;
		nodeStack[stackDepth] = elLayer;
		stackDepth++
	}
	if (is.ns4) document.releaseEvents(Event.MOUSEDOWN);
}

function clearAll(e) {

	clearMenus(0);
}

if (is.ns4) {
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown=clearAll;
}


// site-map.js

startSiteMap("Menu","_top");
    startMenu("jsWidgets");
  addMenuItem("Home", "/home.shtml");
  addMenuItem("What is jsWidgets?", "/readme.shtml");
  addMenuItem("Change Log", "/changelog.shtml");
  addMenuItem("General Public License", "http://www.gnu.org/copyleft/gpl.html");
  addMenuItem("Project Page","http://sourceforge.net/projects/jswidgets");
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
  addMenuItem("Banners","/examples/banners.shtml");
  addMenuItem("Browsers", "/examples/browsers.shtml");
  addMenuItem("Trees", "/examples/trees.shtml");
  //addMenuItem("Sections", "/examples/sections.shtml");
    endMenu();
    startMenu("Documentation");
  addMenuItem("Menus", "/docs/menus.shtml");
  addMenuItem("Notes", "/docs/notes.shtml");
  addMenuItem("Banners", "/docs/banners.shtml");
  addMenuItem("Browsers", "/docs/browsers.shtml");
  addMenuItem("Trees", "/docs/trees.shtml");
  //addMenuItem("Sections", "/docs/sections.shtml");
    endMenu();
    startMenu("On JavaScript");
  addMenuItem("Netscape Docs", "http://developer.netscape.com/docs/manuals/javascript.html");
  startMenu("ECMA Script");
      addMenuItem("ECMA -262", "http://www.ecma.ch/ecma1/STAND/ECMA-262.HTM");
      addMenuItem("DOM Level 1 Binding", "http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html");
  endMenu();
  startMenu("Others Examples");
      addMenuItem("Javascript Source","http://javascript.internet.com/");
      addMenuItem("Javascript.com","http://www.javascript.com");
      addMenuItem("Javascript Resources","http://www.jsr.communitech.net/index3.htm");
      addMenuItem("W3Schools Examples", "http://www.w3schools.com/js/js_examples.asp");
  endMenu();
endSiteMap();


// home.shtml

//For almost all examples, some initialization may be necessary 
//for maximum cross-browser compatibility.
function initialize() {
  activateMenus();
}

if (is.w3c || is.ie4 || (is.ns4 && !is.hj)) {
  var barTop = 20;
  var barLeft = 50;
  var barWidth = 370;
  var barHeight = 44;
  var itemPadding = 5;
  var barImage = "images/title.png";
  drawHMenuBar(barLeft,barTop,barWidth,barHeight,itemPadding,barImage);
}
if (is.w3c) {
  document.writeln('<div style="position : relative; top : 15px; float : right; padding-right : 42px; text-align : right">');
  document.writeln('<a href="http://sourceforge.net/projects/jswidgets"><img src="http://sflogo.sourceforge.net/sflogo.php?group_id=33495&type=15" width="150" height="40" border="0" alt="Get Browser-Independent Javascript Widgets at SourceForge.net. Fast, secure and Free Open Source software downloads" /></a>');
  document.writeln('</div>');
} else if (is.ns4) {
  document.writeln('<layer top="20" left="400">');
  document.writeln('<a href="http://sourceforge.net/projects/jswidgets"><img src="http://sflogo.sourceforge.net/sflogo.php?group_id=33495&type=15" width="150" height="40" border="0" alt="Get Browser-Independent Javascript Widgets at SourceForge.net. Fast, secure and Free Open Source software downloads" /></a>');
  document.writeln('</layer>');
}


document.body.background = "images/researchbg.gif";
document.body.onload = initialize;
document.getElementById("cleardiv").onmouseover = clearAll;

