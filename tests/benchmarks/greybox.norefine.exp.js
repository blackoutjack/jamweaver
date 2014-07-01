function v247() {
  var v248 = GB_ROOT_DIR + "next.gif";
  var v249 = GB_ROOT_DIR + "prev.gif";
  JAMScript.callIntrospect(AJS.preloadImages, AJS, [v248, v249], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v246() {
  var v834 = this.current_index;
  var v1188 = this.current_set;
  var v1085 = v1188.length;
  var v835 = v1085 - 1;
  var v250 = v834 != v835;
  if(v250) {
    var v836 = this.current_index;
    this.current_index = v836 + 1;
    JAMScript.call(this.updateFrame, this, []);
    JAMScript.call(this.updateStatus, this, [])
  }
  return
}
function v245() {
  var v837 = this.current_index;
  var v251 = v837 != 0;
  if(v251) {
    var v838 = this.current_index;
    this.current_index = v838 - 1;
    JAMScript.call(this.updateFrame, this, []);
    JAMScript.call(this.updateStatus, this, [])
  }
  return
}
function v244() {
  var v252 = this.current_set;
  var v253 = this.current_index;
  var item$$3 = v252[v253];
  var v254 = item$$3.caption;
  JAMScript.callIntrospect(this._setCaption, this, [v254], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  this.url = item$$3.url;
  JAMScript.call(this.startLoading, this, []);
  return
}
function v243(caption$$5) {
  var v255 = JAMScript.call(AJS.$, AJS, ["GB_caption"]);
  JAMScript.callIntrospect(AJS.setHTML, AJS, [v255, caption$$5], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v242() {
  var v1189 = this.current_index;
  var v1086 = v1189 + 1;
  var v839 = v1086 + " / ";
  var v1087 = this.current_set;
  var v840 = v1087.length;
  var v256 = v839 + v840;
  JAMScript.callIntrospect(AJS.setHTML, AJS, [GB_STATUS, v256], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v841 = this.current_index;
  var v259 = v841 == 0;
  if(v259) {
    var v257 = this.btn_prev;
    JAMScript.callIntrospect(AJS.addClass, AJS, [v257, "disabled"], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }else {
    var v258 = this.btn_prev;
    JAMScript.callIntrospect(AJS.removeClass, AJS, [v258, "disabled"], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  var v842 = this.current_index;
  var v1190 = this.current_set;
  var v1088 = v1190.length;
  var v843 = v1088 - 1;
  var v262 = v842 == v843;
  if(v262) {
    var v260 = this.btn_next;
    JAMScript.callIntrospect(AJS.addClass, AJS, [v260, "disabled"], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }else {
    var v261 = this.btn_next;
    JAMScript.callIntrospect(AJS.removeClass, AJS, [v261, "disabled"], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return
}
function v241(start_index$$4) {
  this.current_index = start_index$$4;
  var v263 = this.current_set;
  var v264 = this.current_index;
  var item$$2 = v263[v264];
  var v265 = item$$2.url;
  JAMScript.callIntrospect(this.show, this, [v265], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v266 = item$$2.caption;
  JAMScript.callIntrospect(this._setCaption, this, [v266], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v844 = this.img_prev;
  var v267 = {"class":"left", src:v844};
  var v1246 = JAMScript.callIntrospect(AJS.IMG, AJS, [v267], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  this.btn_prev = v1246;
  var v845 = this.img_next;
  var v268 = {"class":"right", src:v845};
  var v1247 = JAMScript.callIntrospect(AJS.IMG, AJS, [v268], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  this.btn_next = v1247;
  var v269 = this.btn_prev;
  var v846 = this.switchPrev;
  var v270 = JAMScript.callIntrospect(AJS.$b, AJS, [v846, this], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.callIntrospect(AJS.AEV, AJS, [v269, "click", v270], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v271 = this.btn_next;
  var v847 = this.switchNext;
  var v272 = JAMScript.callIntrospect(AJS.$b, AJS, [v847, this], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.callIntrospect(AJS.AEV, AJS, [v271, "click", v272], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v273 = {"class":"GB_navStatus"};
  GB_STATUS = JAMScript.callIntrospect(AJS.SPAN, AJS, [v273], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v274 = JAMScript.call(AJS.$, AJS, ["GB_middle"]);
  var v275 = this.btn_prev;
  var v276 = this.btn_next;
  JAMScript.callIntrospect(AJS.ACN, AJS, [v274, v275, GB_STATUS, v276], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.call(this.updateStatus, this, []);
  return
}
function v240(options$$20, set$$2) {
  JAMScript.callIntrospect(this.parent, this, [options$$20], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v848 = this.img_next;
  var v278 = !v848;
  if(v278) {
    var v277 = this.root_dir;
    this.img_next = v277 + "next.gif"
  }
  var v849 = this.img_prev;
  var v280 = !v849;
  if(v280) {
    var v279 = this.root_dir;
    this.img_prev = v279 + "prev.gif"
  }
  this.current_set = set$$2;
  return
}
function v239(set$$1, start_index$$3, callback_fn$$6) {
  var options$$19 = {type:"image", fullscreen:false, center_win:true, width:300, height:300};
  var gb_sets$$1 = JAMScript.new(GB_Sets, [options$$19, set$$1]);
  JAMScript.callIntrospect(gb_sets$$1.addCallback, gb_sets$$1, [callback_fn$$6], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v281 = start_index$$3 - 1;
  JAMScript.call(gb_sets$$1.showSet, gb_sets$$1, [v281]);
  return false
}
function v238(set, start_index$$2, callback_fn$$5) {
  var options$$18 = {type:"page", fullscreen:true, center_win:false};
  var gb_sets = JAMScript.new(GB_Sets, [options$$18, set]);
  JAMScript.callIntrospect(gb_sets.addCallback, gb_sets, [callback_fn$$5], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v282 = start_index$$2 - 1;
  JAMScript.call(gb_sets.showSet, gb_sets, [v282]);
  return false
}
function v237() {
  var page_size$$4 = JAMScript.call(AJS.getWindowSize, AJS, []);
  var v283 = this.g_window;
  var v1191 = page_size$$4.w;
  var v1192 = this.width;
  var v1089 = v1191 - v1192;
  var v850 = v1089 / 2;
  var v284 = v850 - 13;
  JAMScript.callIntrospect(AJS.setLeft, AJS, [v283, v284], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v851 = this.center_win;
  var v291 = !v851;
  if(v291) {
    var v285 = this.g_window;
    var v286 = JAMScript.call(AJS.getScrollTop, AJS, []);
    JAMScript.callIntrospect(AJS.setTop, AJS, [v285, v286], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }else {
    var v1193 = page_size$$4.h;
    var v1194 = this.height;
    var v1090 = v1193 - v1194;
    var v852 = v1090 / 2;
    var v287 = v852 - 20;
    var v288 = JAMScript.call(AJS.getScrollTop, AJS, []);
    var fl$$1 = v287 + v288;
    var v289 = fl$$1 < 0;
    if(v289) {
      fl$$1 = 0
    }
    var v290 = this.g_window;
    JAMScript.callIntrospect(AJS.setTop, AJS, [v290, fl$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return
}
function v236() {
  var v294 = this.fullscreen;
  if(v294) {
    var page_size$$3 = JAMScript.call(AJS.getWindowSize, AJS, []);
    overlay_h = page_size$$3.h;
    var v1091 = this.overlay;
    var v853 = v1091.offsetWidth;
    var v1227 = this.overlay;
    var v1195 = v1227.offsetWidth;
    var v1092 = v1195 / 100;
    var v854 = v1092 * 10;
    var v292 = v853 - v854;
    var v1248 = JAMScript.callIntrospect(Math.round, Math, [v292], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    this.width = v1248;
    var v1093 = overlay_h / 100;
    var v855 = v1093 * 10;
    var v293 = overlay_h - v855;
    var v1249 = JAMScript.callIntrospect(Math.round, Math, [v293], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    this.height = v1249
  }
  var v295 = this.header;
  var v856 = this.width;
  var v296 = v856 + 6;
  JAMScript.callIntrospect(AJS.setWidth, AJS, [v295, v296], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v297 = this.iframe;
  var v298 = this.width;
  JAMScript.callIntrospect(AJS.setWidth, AJS, [v297, v298], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v299 = this.iframe;
  var v300 = this.height;
  JAMScript.callIntrospect(AJS.setHeight, AJS, [v299, v300], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v235() {
  function v234() {
    JAMScript.callIntrospect(AJS.removeClass, AJS, [span, "click"], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    return
  }
  function v233() {
    JAMScript.callIntrospect(AJS.addClass, AJS, [span, "click"], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    return
  }
  function v232() {
    JAMScript.callIntrospect(AJS.removeClass, AJS, [span, "on"], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    return
  }
  function v231() {
    JAMScript.callIntrospect(AJS.addClass, AJS, [span, "on"], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    return
  }
  var v301 = this.g_window;
  JAMScript.callIntrospect(AJS.addClass, AJS, [v301, "GB_Window"], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v302 = {"class":"header"};
  var v1250 = JAMScript.callIntrospect(AJS.TABLE, AJS, [v302], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  this.header = v1250;
  var v857 = this.header;
  var v303 = v857.style;
  var v1094 = this.img_header;
  var v858 = "url(" + v1094;
  v303.backgroundImage = v858 + ")";
  var v304 = {"class":"caption"};
  var v305 = this.caption;
  var td_caption$$1 = JAMScript.callIntrospect(AJS.TD, AJS, [v304, v305], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v306 = {"class":"close"};
  var td_close$$1 = JAMScript.callIntrospect(AJS.TD, AJS, [v306], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v313 = this.show_close_img;
  if(v313) {
    var v859 = this.img_close;
    var v307 = {"src":v859};
    var img_close$$1 = JAMScript.callIntrospect(AJS.IMG, AJS, [v307], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var span = JAMScript.call(AJS.SPAN, AJS, ["Close"]);
    var btn = JAMScript.callIntrospect(AJS.DIV, AJS, [img_close$$1, span], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v308 = [img_close$$1, span];
    JAMScript.callIntrospect(AJS.AEV, AJS, [v308, "mouseover", v231], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v309 = [img_close$$1, span];
    JAMScript.callIntrospect(AJS.AEV, AJS, [v309, "mouseout", v232], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v310 = [img_close$$1, span];
    JAMScript.callIntrospect(AJS.AEV, AJS, [v310, "mousedown", v233], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v311 = [img_close$$1, span];
    JAMScript.callIntrospect(AJS.AEV, AJS, [v311, "mouseup", v234], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v312 = [img_close$$1, span];
    JAMScript.callIntrospect(AJS.AEV, AJS, [v312, "click", GB_hide], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.callIntrospect(AJS.ACN, AJS, [td_close$$1, btn], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  tbody_header = JAMScript.call(AJS.TBODY, AJS, []);
  var v314 = JAMScript.callIntrospect(AJS.TR, AJS, [td_caption$$1, td_close$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.callIntrospect(AJS.ACN, AJS, [tbody_header, v314], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v315 = this.header;
  JAMScript.callIntrospect(AJS.ACN, AJS, [v315, tbody_header], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v316 = this.top_cnt;
  var v317 = this.header;
  JAMScript.callIntrospect(AJS.ACN, AJS, [v316, v317], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v319 = this.fullscreen;
  if(v319) {
    var v860 = this.setWindowPosition;
    var v318 = JAMScript.callIntrospect(AJS.$b, AJS, [v860, this], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.callIntrospect(AJS.AEV, AJS, [window, "scroll", v318], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return
}
function v230(options$$17) {
  JAMScript.call(this.parent, this, [{}]);
  var v320 = this.root_dir;
  this.img_header = v320 + "header_bg.gif";
  var v321 = this.root_dir;
  this.img_close = v321 + "w_close.gif";
  this.show_close_img = true;
  JAMScript.callIntrospect(AJS.update, AJS, [this, options$$17], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v322 = this.callback_fn;
  JAMScript.callIntrospect(this.addCallback, this, [v322], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v229(caption$$4, url$$11, callback_fn$$4) {
  var options$$16 = {caption:caption$$4, fullscreen:true, callback_fn:callback_fn$$4};
  var win$$4 = JAMScript.new(GB_Window, [options$$16]);
  return JAMScript.callIntrospect(win$$4.show, win$$4, [url$$11], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
}
function v228(caption$$3, url$$10, height$$9, width$$10, callback_fn$$3) {
  var v323 = height$$9 || 500;
  var v324 = width$$10 || 500;
  var options$$15 = {caption:caption$$3, center_win:true, height:v323, width:v324, fullscreen:false, callback_fn:callback_fn$$3};
  var win$$3 = JAMScript.new(GB_Window, [options$$15]);
  return JAMScript.callIntrospect(win$$3.show, win$$3, [url$$10], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
}
function v227(caption$$2, url$$9, height$$8, width$$9, callback_fn$$2) {
  var v325 = height$$8 || 500;
  var v326 = width$$9 || 500;
  var options$$14 = {caption:caption$$2, height:v325, width:v326, fullscreen:false, callback_fn:callback_fn$$2};
  var win$$2 = JAMScript.new(GB_Window, [options$$14]);
  return JAMScript.callIntrospect(win$$2.show, win$$2, [url$$9], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
}
function v226() {
  var v331 = this.use_fx;
  if(v331) {
    var v327 = AJS.fx;
    var v328 = this.header;
    var v329 = {to:1};
    JAMScript.callIntrospect(v327.fadeIn, v327, [v328, v329], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }else {
    var v330 = this.header;
    JAMScript.callIntrospect(AJS.setOpacity, AJS, [v330, 1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return
}
function v225() {
  var v332 = this.header;
  JAMScript.callIntrospect(AJS.removeElement, AJS, [v332], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v333 = this.g_window;
  JAMScript.callIntrospect(AJS.removeClass, AJS, [v333, "GB_Gallery"], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v224() {
  var v334 = this.overlay;
  var overlay_w$$1 = v334.offsetWidth;
  var page_size$$2 = JAMScript.call(AJS.getWindowSize, AJS, []);
  var v335 = this.g_window;
  var v1095 = overlay_w$$1 - 50;
  var v1096 = this.width;
  var v861 = v1095 - v1096;
  var v336 = v861 / 2;
  JAMScript.callIntrospect(AJS.setLeft, AJS, [v335, v336], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v337 = JAMScript.call(AJS.getScrollTop, AJS, []);
  var header_top = v337 + 55;
  var v862 = this.center_win;
  var v344 = !v862;
  if(v344) {
    var v338 = this.g_window;
    JAMScript.callIntrospect(AJS.setTop, AJS, [v338, header_top], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }else {
    var v1196 = page_size$$2.h;
    var v1197 = this.height;
    var v1097 = v1196 - v1197;
    var v863 = v1097 / 2;
    var v339 = v863 + 20;
    var v340 = JAMScript.call(AJS.getScrollTop, AJS, []);
    var fl = v339 + v340;
    var v341 = fl < 0;
    if(v341) {
      fl = 0
    }
    var v342 = header_top > fl;
    if(v342) {
      fl = header_top
    }
    var v343 = this.g_window;
    JAMScript.callIntrospect(AJS.setTop, AJS, [v343, fl], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  JAMScript.call(this._setHeaderPos, this, []);
  return
}
function v223() {
  var v345 = this.header;
  var v864 = JAMScript.call(AJS.getScrollTop, AJS, []);
  var v346 = v864 + 10;
  JAMScript.callIntrospect(AJS.setTop, AJS, [v345, v346], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v222() {
  var v347 = this.overlay;
  var overlay_w = v347.offsetWidth;
  var page_size$$1 = JAMScript.call(AJS.getWindowSize, AJS, []);
  var v349 = this.fullscreen;
  if(v349) {
    this.width = overlay_w - 40;
    var v348 = page_size$$1.h;
    this.height = v348 - 80
  }
  var v350 = this.iframe;
  var v351 = this.width;
  JAMScript.callIntrospect(AJS.setWidth, AJS, [v350, v351], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v352 = this.iframe;
  var v353 = this.height;
  JAMScript.callIntrospect(AJS.setHeight, AJS, [v352, v353], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v354 = this.header;
  JAMScript.callIntrospect(AJS.setWidth, AJS, [v354, overlay_w], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v221() {
  var v355 = this.g_window;
  JAMScript.callIntrospect(AJS.addClass, AJS, [v355, "GB_Gallery"], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v356 = {"class":"inner"};
  var inner = JAMScript.callIntrospect(AJS.DIV, AJS, [v356], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v357 = {"class":"GB_header"};
  var v1251 = JAMScript.callIntrospect(AJS.DIV, AJS, [v357, inner], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  this.header = v1251;
  var v358 = this.header;
  JAMScript.callIntrospect(AJS.setOpacity, AJS, [v358, 0], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v359 = JAMScript.call(AJS.getBody, AJS, []);
  var v360 = this.header;
  var v865 = this.overlay;
  var v361 = v865.nextSibling;
  JAMScript.callIntrospect(v359.insertBefore, v359, [v360, v361], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v362 = {"id":"GB_caption", "class":"caption", "width":"40%"};
  var v363 = this.caption;
  var td_caption = JAMScript.callIntrospect(AJS.TD, AJS, [v362, v363], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v364 = {"id":"GB_middle", "class":"middle", "width":"20%"};
  var td_middle = JAMScript.callIntrospect(AJS.TD, AJS, [v364], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v866 = this.img_close;
  var v365 = {"src":v866};
  var img_close = JAMScript.callIntrospect(AJS.IMG, AJS, [v365], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.callIntrospect(AJS.AEV, AJS, [img_close, "click", GB_hide], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v366 = {"class":"close", "width":"40%"};
  var td_close = JAMScript.callIntrospect(AJS.TD, AJS, [v366, img_close], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v367 = JAMScript.callIntrospect(AJS.TR, AJS, [td_caption, td_middle, td_close], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var tbody = JAMScript.callIntrospect(AJS.TBODY, AJS, [v367], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v368 = {"cellspacing":"0", "cellpadding":0, "border":0};
  var table = JAMScript.callIntrospect(AJS.TABLE, AJS, [v368, tbody], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.callIntrospect(AJS.ACN, AJS, [inner, table], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v371 = this.fullscreen;
  if(v371) {
    var v867 = this.setWindowPosition;
    var v369 = JAMScript.callIntrospect(AJS.$b, AJS, [v867, this], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.callIntrospect(AJS.AEV, AJS, [window, "scroll", v369], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }else {
    var v868 = this._setHeaderPos;
    var v370 = JAMScript.callIntrospect(AJS.$b, AJS, [v868, this], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.callIntrospect(AJS.AEV, AJS, [window, "scroll", v370], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return
}
function v220(options$$13) {
  JAMScript.call(this.parent, this, [{}]);
  var v372 = this.root_dir;
  this.img_close = v372 + "g_close.gif";
  JAMScript.callIntrospect(AJS.update, AJS, [this, options$$13], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v373 = this.callback_fn;
  JAMScript.callIntrospect(this.addCallback, this, [v373], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v219(caption$$1, url$$8, callback_fn$$1) {
  var options$$12 = {type:"page", caption:caption$$1, callback_fn:callback_fn$$1, fullscreen:true, center_win:false};
  var win$$1 = JAMScript.new(GB_Gallery, [options$$12]);
  return JAMScript.callIntrospect(win$$1.show, win$$1, [url$$8], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
}
function v218(caption, url$$7, callback_fn) {
  var options$$11 = {width:300, height:300, type:"image", fullscreen:false, center_win:true, caption:caption, callback_fn:callback_fn};
  var win = JAMScript.new(GB_Gallery, [options$$11]);
  return JAMScript.callIntrospect(win.show, win, [url$$7], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
}
function v217() {
  if(GB_CURRENT) {
    JAMScript.call(GB_CURRENT.setOverlayDimension, GB_CURRENT, [])
  }
  return
}
function v216() {
  if(GB_CURRENT) {
    JAMScript.call(GB_CURRENT.update, GB_CURRENT, [])
  }
  return
}
function v215() {
  return
}
function v214() {
  return
}
function v213() {
  return
}
function v212() {
  return
}
function v211() {
  return
}
function v210() {
  var v869 = this.iframe;
  var v381 = !v869;
  if(v381) {
    var d$$5 = {"name":"GB_frame", "class":"GB_frame", "frameBorder":0};
    var v374 = JAMScript.call(AJS.isIe, AJS, []);
    if(v374) {
      d$$5.src = 'javascript:false;document.write("");'
    }
    var v1252 = JAMScript.callIntrospect(AJS.IFRAME, AJS, [d$$5], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    this.iframe = v1252;
    var v375 = {"class":"content"};
    var v376 = this.iframe;
    var v1253 = JAMScript.callIntrospect(AJS.DIV, AJS, [v375, v376], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    this.middle_cnt = v1253;
    var v1254 = JAMScript.call(AJS.DIV, AJS, []);
    this.top_cnt = v1254;
    var v1255 = JAMScript.call(AJS.DIV, AJS, []);
    this.bottom_cnt = v1255;
    var v377 = this.g_window;
    var v378 = this.top_cnt;
    var v379 = this.middle_cnt;
    var v380 = this.bottom_cnt;
    JAMScript.callIntrospect(AJS.ACN, AJS, [v377, v378, v379, v380], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return
}
function v209() {
  var v382 = {"id":"GB_overlay"};
  var v1256 = JAMScript.callIntrospect(AJS.DIV, AJS, [v382], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  this.overlay = v1256;
  var v384 = this.overlay_click_close;
  if(v384) {
    var v383 = this.overlay;
    JAMScript.callIntrospect(AJS.AEV, AJS, [v383, "click", GB_hide], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  var v385 = this.overlay;
  JAMScript.callIntrospect(AJS.setOpacity, AJS, [v385, 0], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v386 = JAMScript.call(AJS.getBody, AJS, []);
  var v387 = this.overlay;
  var v870 = JAMScript.call(AJS.getBody, AJS, []);
  var v388 = v870.firstChild;
  JAMScript.callIntrospect(v386.insertBefore, v386, [v387, v388], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v208() {
  var page_size = JAMScript.call(AJS.getWindowSize, AJS, []);
  var v871 = JAMScript.call(AJS.isMozilla, AJS, []);
  var v1098 = !v871;
  if(v1098) {
    v871 = JAMScript.call(AJS.isOpera, AJS, [])
  }
  var v392 = v871;
  if(v392) {
    var v389 = this.overlay;
    JAMScript.callIntrospect(AJS.setWidth, AJS, [v389, "100%"], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }else {
    var v390 = this.overlay;
    var v391 = page_size.w;
    JAMScript.callIntrospect(AJS.setWidth, AJS, [v390, v391], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  var v872 = JAMScript.call(AJS.getScrollTop, AJS, []);
  var v873 = page_size.h;
  var v393 = v872 + v873;
  var v874 = JAMScript.call(AJS.getScrollTop, AJS, []);
  var v875 = this.height;
  var v394 = v874 + v875;
  var max_height = JAMScript.callIntrospect(Math.max, Math, [v393, v394], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v876 = max_height;
  var v877 = JAMScript.call(AJS.getScrollTop, AJS, []);
  var v398 = v876 < v877;
  if(v398) {
    var v395 = this.overlay;
    JAMScript.callIntrospect(AJS.setHeight, AJS, [v395, max_height], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }else {
    var v396 = this.overlay;
    var v878 = JAMScript.call(AJS.getScrollTop, AJS, []);
    var v879 = page_size.h;
    var v397 = v878 + v879;
    JAMScript.callIntrospect(AJS.setHeight, AJS, [v396, v397], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return
}
function v207() {
  var v399 = this.iframe;
  var v1099 = this.src_loader;
  var v880 = v1099 + "?s=";
  var v881 = this.salt;
  var v1198 = this.salt;
  this.salt = v1198 + 1;
  v399.src = v880 + v881;
  var v400 = this.iframe;
  JAMScript.callIntrospect(AJS.showElement, AJS, [v400], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v206() {
  try {
    var v401 = this.iframe;
    JAMScript.callIntrospect(AJS.removeElement, AJS, [v401], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }catch(e$$17) {
  }
  this.iframe = null;
  return
}
function v205() {
  function v204() {
    JAMScript.call(me$$3.onShow, me$$3, []);
    var v402 = me$$3.g_window;
    JAMScript.callIntrospect(AJS.showElement, AJS, [v402], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.call(me$$3.startLoading, me$$3, []);
    return
  }
  JAMScript.call(this.initOverlay, this, []);
  var v403 = {"id":"GB_window"};
  var v1257 = JAMScript.callIntrospect(AJS.DIV, AJS, [v403], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  this.g_window = v1257;
  var v404 = this.g_window;
  JAMScript.callIntrospect(AJS.hideElement, AJS, [v404], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v405 = JAMScript.call(AJS.getBody, AJS, []);
  var v406 = this.g_window;
  var v882 = this.overlay;
  var v407 = v882.nextSibling;
  JAMScript.callIntrospect(v405.insertBefore, v405, [v406, v407], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.call(this.initFrame, this, []);
  JAMScript.call(this.initHook, this, []);
  JAMScript.call(this.update, this, []);
  var me$$3 = this;
  var v413 = this.use_fx;
  if(v413) {
    var v408 = AJS.fx;
    var v409 = this.overlay;
    var v410 = {duration:300, to:0.7, onComplete:v204};
    JAMScript.callIntrospect(v408.fadeIn, v408, [v409, v410], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }else {
    var v411 = this.overlay;
    JAMScript.callIntrospect(AJS.setOpacity, AJS, [v411, 0.7], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v412 = this.g_window;
    JAMScript.callIntrospect(AJS.showElement, AJS, [v412], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.call(this.onShow, this, []);
    JAMScript.call(this.startLoading, this, [])
  }
  JAMScript.callIntrospect(AJS.AEV, AJS, [window, "scroll", _GB_setOverlayDimension], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.callIntrospect(AJS.AEV, AJS, [window, "resize", _GB_update], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v203() {
  JAMScript.call(this.setOverlayDimension, this, []);
  JAMScript.call(this.setFrameSize, this, []);
  JAMScript.call(this.setWindowPosition, this, []);
  return
}
function v202(cb$$1) {
  function v201() {
    function v200(elm$$49) {
      var v414 = elm$$49.style;
      v414.visibility = "visible";
      return
    }
    function v199() {
      JAMScript.callIntrospect(AJS.removeElement, AJS, [elm$$48], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
      elm$$48 = null;
      return
    }
    function v198(fn$$17) {
      JAMScript.call(fn$$17, null, []);
      return
    }
    var c_bs = me$$2.callback_fns;
    var v415 = c_bs != [];
    if(v415) {
      JAMScript.callIntrospect(AJS.map, AJS, [c_bs, v198], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }
    JAMScript.call(me$$2.onHide, me$$2, []);
    var v422 = me$$2.use_fx;
    if(v422) {
      var elm$$48 = me$$2.overlay;
      var v416 = AJS.fx;
      var v417 = me$$2.overlay;
      var v418 = {onComplete:v199, duration:300};
      JAMScript.callIntrospect(v416.fadeOut, v416, [v417, v418], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
      var v419 = me$$2.g_window;
      JAMScript.callIntrospect(AJS.removeElement, AJS, [v419], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }else {
      var v420 = me$$2.g_window;
      var v421 = me$$2.overlay;
      JAMScript.callIntrospect(AJS.removeElement, AJS, [v420, v421], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }
    JAMScript.call(me$$2.removeFrame, me$$2, []);
    JAMScript.callIntrospect(AJS.REV, AJS, [window, "scroll", _GB_setOverlayDimension], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.callIntrospect(AJS.REV, AJS, [window, "resize", _GB_update], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v423 = JAMScript.call(AJS.$bytc, AJS, ["object"]);
    var v424 = JAMScript.call(AJS.$bytc, AJS, ["select"]);
    var elms$$6 = [v423, v424];
    var v425 = JAMScript.callIntrospect(AJS.flattenList, AJS, [elms$$6], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.callIntrospect(AJS.map, AJS, [v425, v200], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    GB_CURRENT = null;
    var v427 = me$$2.reload_on_close;
    if(v427) {
      var v426 = window.location;
      JAMScript.call(v426.reload, v426, [])
    }
    var v428 = JAMScript.callIntrospect(AJS.isFunction, AJS, [cb$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    if(v428) {
      JAMScript.call(cb$$1, null, [])
    }
    return
  }
  var me$$2 = this;
  JAMScript.call(setTimeout, null, [v201, 10]);
  return
}
function v197(url$$6) {
  function v196(elm$$47) {
    var v429 = elm$$47.style;
    v429.visibility = "hidden";
    return
  }
  GB_CURRENT = this;
  this.url = url$$6;
  var v430 = JAMScript.call(AJS.$bytc, AJS, ["object"]);
  var v431 = JAMScript.call(AJS.$bytc, AJS, ["select"]);
  var elms$$5 = [v430, v431];
  var v432 = JAMScript.callIntrospect(AJS.flattenList, AJS, [elms$$5], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.callIntrospect(AJS.map, AJS, [v432, v196], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.call(this.createElements, this, []);
  return false
}
function v195(fn$$16) {
  if(fn$$16) {
    var v433 = this.callback_fns;
    JAMScript.callIntrospect(v433.push, v433, [fn$$16], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return
}
function v194(options$$10) {
  this.use_fx = AJS.fx;
  this.type = "page";
  this.overlay_click_close = false;
  this.salt = 0;
  this.root_dir = GB_ROOT_DIR;
  this.callback_fns = [];
  this.reload_on_close = false;
  var v434 = this.root_dir;
  this.src_loader = v434 + "loader_frame.html";
  var v883 = window.location;
  var v435 = v883.hostname;
  var h_www = v435.indexOf("www");
  var v436 = this.src_loader;
  var src_www = v436.indexOf("www");
  var v884 = h_www != -1;
  if(v884) {
    v884 = src_www == -1
  }
  var v438 = v884;
  if(v438) {
    var v437 = this.src_loader;
    var v1258 = v437.replace("://", "://www.");
    this.src_loader = v1258
  }
  var v885 = h_www == -1;
  if(v885) {
    v885 = src_www != -1
  }
  var v440 = v885;
  if(v440) {
    var v439 = this.src_loader;
    var v1259 = v439.replace("://www.", "://");
    this.src_loader = v1259
  }
  this.show_loading = true;
  JAMScript.callIntrospect(AJS.update, AJS, [this, options$$10], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v193(cb) {
  JAMScript.callIntrospect(GB_CURRENT.hide, GB_CURRENT, [cb], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v192(t$$2, b$$1, c$$2, d$$4) {
  var v1100 = -c$$2;
  var v886 = v1100 / 2;
  var v1235 = Math.PI;
  var v1228 = v1235 * t$$2;
  var v1199 = v1228 / d$$4;
  var v1101 = JAMScript.callIntrospect(Math.cos, Math, [v1199], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v887 = v1101 - 1;
  var v441 = v886 * v887;
  return v441 + b$$1
}
function v191(t$$1, b, c$$1, d$$3) {
  var v888 = c$$1 * t$$1;
  var v442 = v888 / d$$3;
  return v442 + b
}
function v190() {
  var p$$6;
  var v445 = this.now;
  for(p$$6 in v445) {
    var v443 = this.elm;
    var v889 = this.now;
    var v444 = v889[p$$6];
    JAMScript.callIntrospect(this.setStyle, this, [v443, p$$6, v444], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return
}
function v189(obj$$23) {
  var v890 = this.timer;
  if(v890) {
    var v1102 = this.options;
    v890 = v1102.wait
  }
  var v446 = v890;
  if(v446) {
    return
  }
  var from$$3 = {};
  var to$$4 = {};
  for(p in obj$$23) {
    var v447 = obj$$23[p];
    JAMScript.set(from$$3, p, v447[0]);
    var v448 = obj$$23[p];
    JAMScript.set(to$$4, p, v448[1])
  }
  return JAMScript.callIntrospect(this._start, this, [from$$3, to$$4], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
}
function v188() {
  var v451 = this.from;
  for(p in v451) {
    var v449 = this.now;
    var v450 = p;
    var v1103 = this.from;
    var v891 = v1103[p];
    var v1104 = this.to;
    var v892 = v1104[p];
    var v1260 = JAMScript.callIntrospect(this.compute, this, [v891, v892], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.set(v449, v450, v1260)
  }
  return
}
function v187(elm$$46, options$$9) {
  JAMScript.call(this.parent, this, []);
  var v1261 = JAMScript.callIntrospect(AJS.$, AJS, [elm$$46], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  this.elm = v1261;
  JAMScript.callIntrospect(this.setOptions, this, [options$$9], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  this.now = {};
  return
}
function v186() {
  var v452 = this.elm;
  var v453 = this.property;
  var v454 = this.now;
  JAMScript.callIntrospect(this.setStyle, this, [v452, v453, v454], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v185(elm$$45, property$$6, options$$8) {
  JAMScript.call(this.parent, this, []);
  this.elm = elm$$45;
  JAMScript.callIntrospect(this.setOptions, this, [options$$8], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  this.property = property$$6;
  return
}
function v184(elm$$44, property$$5, val$$4) {
  var v893 = this.property;
  var v455 = v893 == "opacity";
  if(v455) {
    JAMScript.callIntrospect(AJS.setOpacity, AJS, [elm$$44, val$$4], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }else {
    JAMScript.callIntrospect(AJS.setStyle, AJS, [elm$$44, property$$5, val$$4], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return
}
function v183(to$$3) {
  this.now = to$$3;
  JAMScript.call(this.increase, this, []);
  return this
}
function v182(from$$2, to$$2) {
  return JAMScript.callIntrospect(this._start, this, [from$$2, to$$2], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
}
function v181(from$$1, to$$1) {
  var v1105 = this.options;
  var v894 = v1105.wait;
  var v456 = !v894;
  if(v456) {
    JAMScript.call(this.clearTimer, this, [])
  }
  var v457 = this.timer;
  if(v457) {
    return
  }
  var v1106 = this.options;
  var v895 = v1106.onStart;
  var v896 = this.elm;
  var v458 = JAMScript.callIntrospect(AJS.$p, AJS, [v895, v896], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.call(setTimeout, null, [v458, 10]);
  this.from = from$$1;
  this.to = to$$1;
  var v459 = new Date;
  var v1262 = v459.getTime();
  this.time = v1262;
  var v460 = this.step;
  var v1200 = this.options;
  var v1107 = v1200.fps;
  var v897 = 1E3 / v1107;
  var v461 = JAMScript.callIntrospect(Math.round, Math, [v897], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v1263 = JAMScript.call(setInterval, null, [v460, v461]);
  this.timer = v1263;
  return this
}
function v180() {
  var v462 = this.timer;
  clearInterval(v462);
  this.timer = null;
  return this
}
function v179(from, to) {
  var change = to - from;
  var v463 = this.options;
  var v464 = this.cTime;
  var v898 = this.options;
  var v465 = v898.duration;
  return JAMScript.callIntrospect(v463.transition, v463, [v464, from, change, v465], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
}
function v178() {
  var v466 = this.from;
  var v467 = this.to;
  var v1264 = JAMScript.callIntrospect(this.compute, this, [v466, v467], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  this.now = v1264;
  return
}
function v177() {
  var v468 = new Date;
  var time = v468.getTime();
  var v1108 = this.time;
  var v1201 = this.options;
  var v1109 = v1201.duration;
  var v899 = v1108 + v1109;
  var v471 = time < v899;
  if(v471) {
    var v469 = this.time;
    this.cTime = time - v469;
    JAMScript.call(this.setNow, this, [])
  }else {
    var v1110 = this.options;
    var v900 = v1110.onComplete;
    var v1111 = this.elm;
    var v901 = [v1111];
    var v470 = JAMScript.callIntrospect(AJS.$b, AJS, [v900, this, v901], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.call(setTimeout, null, [v470, 10]);
    JAMScript.call(this.clearTimer, this, []);
    this.now = this.to
  }
  JAMScript.call(this.increase, this, []);
  return
}
function v176(options$$7) {
  var v472 = this.options;
  JAMScript.callIntrospect(AJS.update, AJS, [v472, options$$7], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v175(options$$6) {
  function v174() {
    return
  }
  function v173() {
    return
  }
  var v1112 = AJS.fx;
  var v902 = v1112.Transitions;
  var v473 = v902.sineInOut;
  this.options = {onStart:v173, onComplete:v174, transition:v473, duration:500, wait:true, fps:50};
  var v474 = this.options;
  JAMScript.callIntrospect(AJS.update, AJS, [v474, options$$6], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.callIntrospect(AJS.bindMethods, AJS, [this], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v172(elm$$43, options$$5) {
  var v903 = AJS.fx;
  var v475 = v903.Style;
  var s$$5 = JAMScript.new(v475, [elm$$43, "height", options$$5]);
  var v476 = options$$5.from;
  var v477 = options$$5.to;
  return JAMScript.callIntrospect(s$$5.custom, s$$5, [v476, v477], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
}
function v171(elm$$42, options$$4) {
  var v904 = AJS.fx;
  var v478 = v904.Style;
  var s$$4 = JAMScript.new(v478, [elm$$42, "width", options$$4]);
  var v479 = options$$4.from;
  var v480 = options$$4.to;
  return JAMScript.callIntrospect(s$$4.custom, s$$4, [v479, v480], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
}
function v170(elm$$41, options$$3) {
  options$$3 = options$$3 || {};
  var v905 = options$$3.from;
  var v481 = !v905;
  if(v481) {
    options$$3.from = 1
  }
  var v906 = options$$3.to;
  var v482 = !v906;
  if(v482) {
    options$$3.to = 0
  }
  options$$3.duration = 300;
  var v907 = AJS.fx;
  var v483 = v907.Style;
  var s$$3 = JAMScript.new(v483, [elm$$41, "opacity", options$$3]);
  var v484 = options$$3.from;
  var v485 = options$$3.to;
  return JAMScript.callIntrospect(s$$3.custom, s$$3, [v484, v485], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
}
function v169(elm$$40, options$$2) {
  options$$2 = options$$2 || {};
  var v908 = options$$2.from;
  var v486 = !v908;
  if(v486) {
    options$$2.from = 0;
    JAMScript.callIntrospect(AJS.setOpacity, AJS, [elm$$40, 0], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  var v909 = options$$2.to;
  var v487 = !v909;
  if(v487) {
    options$$2.to = 1
  }
  var v910 = AJS.fx;
  var v488 = v910.Style;
  var s$$2 = JAMScript.new(v488, [elm$$40, "opacity", options$$2]);
  var v489 = options$$2.from;
  var v490 = options$$2.to;
  return JAMScript.callIntrospect(s$$2.custom, s$$2, [v489, v490], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
}
function v168(elm$$39, options$$1) {
  function v167() {
    var v911 = this.now;
    var v493 = v911 == 7;
    if(v493) {
      var v491 = elm$$39.style;
      v491.backgroundColor = "#fff"
    }else {
      var v492 = elm$$39.style;
      var v1202 = AJS.fx;
      var v1113 = v1202._shades;
      var v1203 = this.now;
      var v1114 = JAMScript.callIntrospect(Math.floor, Math, [v1203], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
      var v912 = v1113[v1114];
      v492.backgroundColor = "#" + v912
    }
    return
  }
  var v913 = AJS.fx;
  var v494 = v913.Base;
  var base$$1 = JAMScript.new(v494, []);
  var v495 = base$$1;
  var v1265 = JAMScript.callIntrospect(AJS.$, AJS, [elm$$39], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  v495.elm = v1265;
  var v496 = base$$1.options;
  v496.duration = 600;
  JAMScript.callIntrospect(base$$1.setOptions, base$$1, [options$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v497 = {increase:v167};
  JAMScript.callIntrospect(AJS.update, AJS, [base$$1, v497], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return JAMScript.call(base$$1.custom, base$$1, [6, 0])
}
function v166(data$$21) {
  var req$$6 = this.req;
  var http_method = this.http_method;
  var http_url = this.http_url;
  var v503 = http_method == "POST";
  if(v503) {
    JAMScript.callIntrospect(req$$6.open, req$$6, [http_method, http_url, true], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v498 = req$$6;
    var v914 = this._onreadystatechange;
    var v1266 = JAMScript.callIntrospect(AJS.$b, AJS, [v914, this], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.set(v498, "onreadystatechange", v1266);
    req$$6.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var v501 = JAMScript.callIntrospect(AJS.isObject, AJS, [data$$21], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    if(v501) {
      var v499 = JAMScript.callIntrospect(AJS.encodeArguments, AJS, [data$$21], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
      JAMScript.callIntrospect(req$$6.send, req$$6, [v499], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }else {
      var v500 = JAMScript.callIntrospect(AJS.isDefined, AJS, [data$$21], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
      if(v500) {
        JAMScript.callIntrospect(req$$6.send, req$$6, [data$$21], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
      }else {
        req$$6.send("")
      }
    }
  }else {
    req$$6.open("GET", http_url, true);
    var v502 = req$$6;
    var v915 = this._onreadystatechange;
    var v1267 = JAMScript.callIntrospect(AJS.$b, AJS, [v915, this], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.set(v502, "onreadystatechange", v1267);
    req$$6.send(null)
  }
  return
}
function v165() {
  var req$$5 = this.req;
  var d$$2 = this;
  var v916 = req$$5.readyState;
  var v505 = v916 == 4;
  if(v505) {
    var status = "";
    try {
      status = req$$5.status
    }catch(e$$16) {
    }
    var v917 = status == 200;
    var v1116 = !v917;
    if(v1116) {
      var v1115 = status == 304;
      var v1205 = !v1115;
      if(v1205) {
        var v1204 = req$$5.responseText;
        v1115 = v1204 == null
      }
      v917 = v1115
    }
    var v504 = v917;
    if(v504) {
      JAMScript.call(this.callback, this, [])
    }else {
      JAMScript.call(this.errback, this, [])
    }
  }
  return
}
function v164(fn1, fn2) {
  JAMScript.callIntrospect(this.addCallback, this, [fn1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.callIntrospect(this.addErrback, this, [fn2], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v163() {
  var v506 = this.req;
  JAMScript.call(v506.abort, v506, []);
  return
}
function v162(fn$$15) {
  var v507 = this.callbacks;
  JAMScript.callIntrospect(v507.unshift, v507, [fn$$15], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v161(fn$$14) {
  var v508 = this.errbacks;
  JAMScript.callIntrospect(v508.unshift, v508, [fn$$14], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v160() {
  var v1117 = this.errbacks;
  var v918 = v1117.length;
  var v514 = v918 == 0;
  if(v514) {
    var v513 = AJS.ajaxErrorHandler;
    if(v513) {
      var v509 = req.responseText;
      JAMScript.callIntrospect(AJS.ajaxErrorHandler, AJS, [v509, req], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }else {
      var v919 = this.req;
      var v510 = v919.responseText;
      var txt$$1 = v510.substring(0, 200);
      var v920 = JAMScript.callIntrospect(AJS.strip, AJS, [txt$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
      if(v920) {
        var v1118 = txt$$1.indexOf("<html");
        v920 = v1118 == -1
      }
      var v512 = v920;
      if(v512) {
        var v511 = "Error encountered:\n" + txt$$1;
        alert(v511)
      }
    }
  }
  var v517 = AJS.generalErrorback;
  if(v517) {
    var v515 = this.req;
    var result$$1 = JAMScript.callIntrospect(AJS.generalErrorback, AJS, [v515], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v516 = !result$$1;
    if(v516) {
      return
    }
  }
  var v518 = this.req;
  var v519 = this.errbacks;
  JAMScript.callIntrospect(this.excCallbackSeq, this, [v518, v519], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v159() {
  var v520 = this.req;
  var v521 = this.callbacks;
  JAMScript.callIntrospect(this.excCallbackSeq, this, [v520, v521], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v158(req$$4, list$$10) {
  var data$$20 = req$$4.responseText;
  var v523 = AJS.generalCallback;
  if(v523) {
    data$$20 = JAMScript.callIntrospect(AJS.generalCallback, AJS, [req$$4, list$$10], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v522 = !data$$20;
    if(v522) {
      return
    }
  }
  var v921 = list$$10.length;
  var v525 = v921 > 0;
  for(;v525;) {
    var fn$$13 = list$$10.pop();
    var new_data = JAMScript.callIntrospect(fn$$13, null, [data$$20, req$$4], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    if(new_data) {
      data$$20 = new_data
    }else {
      var v524 = new_data == false;
      if(v524) {
        break
      }
    }
    var v922 = list$$10.length;
    v525 = v922 > 0
  }
  return
}
function v157(req$$3, method$$2, url$$5) {
  this.callbacks = [];
  this.errbacks = [];
  this.req = req$$3;
  this.http_method = method$$2;
  this.http_url = url$$5;
  return
}
function v156(cur$$1, prev$$1) {
  function v155() {
    this.parent = prev$$1;
    return JAMScript.callIntrospect(cur$$1.apply, cur$$1, [this, arguments], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return v155
}
function v154(members$$2) {
  var v526 = this.prototype;
  JAMScript.callIntrospect(AJS.update, AJS, [v526, members$$2], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v153(members$$1) {
  var parent$$2 = JAMScript.new(this, ["no_init"]);
  for(k in members$$1) {
    var prev = parent$$2[k];
    var cur = members$$1[k];
    var v923 = prev;
    if(v923) {
      var v1119 = prev != cur;
      if(v1119) {
        var v1206 = typeof cur;
        v1119 = v1206 == "function"
      }
      v923 = v1119
    }
    var v527 = v923;
    if(v527) {
      cur = JAMScript.callIntrospect(this._parentize, this, [cur, prev], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }
    JAMScript.set(parent$$2, k, cur)
  }
  var v528 = AJS.Class;
  return JAMScript.new(v528, [parent$$2])
}
function v152(members) {
  function fn$$12() {
    var v924 = arguments[0];
    var v530 = v924 != "no_init";
    if(v530) {
      var v529 = this.init;
      return JAMScript.callIntrospect(v529.apply, v529, [this, arguments], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }
    return
  }
  fn$$12.prototype = members;
  var v925 = AJS.Class;
  var v531 = v925.prototype;
  JAMScript.callIntrospect(AJS.update, AJS, [fn$$12, v531], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return fn$$12
}
function v151(str$$9, limit, delim$$1) {
  var v926 = str$$9.length;
  var v534 = v926 > limit;
  if(v534) {
    var v532 = str$$9.substring(0, limit);
    var v533 = delim$$1 || "...";
    return v532 + v533
  }
  return str$$9
}
function v150(str$$8) {
  var v535 = str$$8.replace(/^\s+/, "");
  return v535.replace(/\s+$/g, "")
}
function v149(export_scope, fn$$11) {
  JAMScript.callIntrospect(fn$$11.apply, fn$$11, [export_scope, []], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v148(o$$7) {
  try {
    var v538 = window._firebug;
    if(v538) {
      var v536 = window._firebug;
      JAMScript.callIntrospect(v536.log, v536, [o$$7], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }else {
      var v537 = window.console;
      if(v537) {
        JAMScript.callIntrospect(console.log, console, [o$$7], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
      }
    }
  }catch(e$$15) {
  }
  return
}
function v147(scope$$3) {
  scope$$3 = scope$$3 || window;
  for(e in AJS) {
    var v539 = e != "addEventListener";
    if(v539) {
      JAMScript.set(scope$$3, e, AJS[e])
    }
  }
  return
}
function v146(o$$6) {
  var str_repr = String(o$$6);
  var v540 = str_repr.indexOf(" Object");
  return v540 != -1
}
function v145(obj$$22) {
  var v541 = typeof obj$$22;
  return v541 == "function"
}
function v144(obj$$21) {
  var v542 = typeof obj$$21;
  return v542 == "object"
}
function v143(obj$$20) {
  var v543 = typeof obj$$20;
  return v543 == "number"
}
function v142(obj$$19) {
  var v544 = typeof obj$$19;
  return v544 == "string"
}
function v141(obj$$18) {
  try {
    return obj$$18 instanceof Array
  }catch(e$$14) {
    return false
  }
  return
}
function v140(o$$5) {
  var v545 = o$$5 != "undefined";
  if(v545) {
    v545 = o$$5 != null
  }
  return v545
}
function v139(str$$7) {
  var v1120 = JAMScript.callIntrospect(AJS.isDefined, AJS, [str$$7], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  if(v1120) {
    v1120 = str$$7.toString()
  }
  var v927 = v1120;
  var v1121 = !v927;
  if(v1121) {
    v927 = ""
  }
  var v546 = v927;
  var result = decodeURIComponent(v546);
  return result.replace(/\+/g, " ")
}
function v138(str$$6) {
  var v1122 = JAMScript.callIntrospect(AJS.isDefined, AJS, [str$$6], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  if(v1122) {
    v1122 = str$$6.toString()
  }
  var v928 = v1122;
  var v1123 = !v928;
  if(v1123) {
    v928 = ""
  }
  var v547 = v928;
  return encodeURIComponent(v547)
}
function v137(obj$$17) {
  var rval$$1 = [];
  var prop$$6;
  for(prop$$6 in obj$$17) {
    var v548 = obj$$17[prop$$6];
    JAMScript.callIntrospect(rval$$1.push, rval$$1, [v548], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return rval$$1
}
function v136(obj$$16) {
  var rval = [];
  var prop$$5;
  for(prop$$5 in obj$$16) {
    JAMScript.callIntrospect(rval.push, rval, [prop$$5], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return rval
}
function v135(name$$33, fn$$10, interval) {
  var v549 = AJS._reccruing_tos;
  var current = v549[name$$33];
  if(current) {
    clearTimeout(current)
  }
  var v550 = AJS._reccruing_tos;
  var v551 = name$$33;
  var v1268 = JAMScript.call(setTimeout, null, [fn$$10, interval]);
  JAMScript.set(v550, v551, v1268);
  return
}
function v134(fn$$9, extra_args$$1) {
  function v133() {
    try {
      var v552 = JAMScript.call(AJS.$FA, AJS, [arguments]);
      var args$$14 = JAMScript.callIntrospect(v552.concat, v552, [extra_args$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
      return JAMScript.callIntrospect(fn$$9.apply, fn$$9, [scope$$2, args$$14], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }catch(e$$13) {
    }
    return
  }
  extra_args$$1 = JAMScript.callIntrospect(AJS.$A, AJS, [extra_args$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v553 = fn$$9._cscope;
  var v929 = !v553;
  if(v929) {
    v553 = window
  }
  var scope$$2 = v553;
  return v133
}
function v132(elm$$38, type$$30, fn$$8) {
  function r_fn() {
    JAMScript.callIntrospect(AJS.removeEventListener, AJS, [elm$$38, type$$30, r_fn], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.call(fn$$8, null, [arguments]);
    return
  }
  return r_fn
}
function v131(e$$12) {
  var v555 = JAMScript.call(AJS.isIe, AJS, []);
  if(v555) {
    var v554 = window.event;
    v554.returnValue = false
  }else {
    JAMScript.call(e$$12.preventDefault, e$$12, [])
  }
  return
}
function v130(self$$1) {
  var k$$2;
  for(k$$2 in self$$1) {
    var func$$4 = self$$1[k$$2];
    var v930 = typeof func$$4;
    var v558 = v930 == "function";
    if(v558) {
      var v556 = self$$1;
      var v557 = k$$2;
      var v1269 = JAMScript.callIntrospect(AJS.$b, AJS, [func$$4, self$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
      JAMScript.set(v556, v557, v1269)
    }
  }
  return
}
function v129(fn$$7, scope$$1, extra_args) {
  fn$$7._cscope = scope$$1;
  return JAMScript.callIntrospect(AJS._getRealScope, AJS, [fn$$7, extra_args], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
}
function v128(elms$$4, type$$29, handler$$7) {
  function v127(elm$$37) {
    var v931 = elm$$37.events;
    if(v931) {
      var v1124 = elm$$37.events;
      v931 = v1124[type$$29]
    }
    var v561 = v931;
    if(v561) {
      var v932 = elm$$37.events;
      var v559 = v932[type$$29];
      var v560 = handler$$7.$f_guid;
      delete v559[v560]
    }
    return
  }
  elms$$4 = JAMScript.callIntrospect(AJS.$A, AJS, [elms$$4], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.callIntrospect(map, null, [elms$$4, v127], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v126(event$$1) {
  function v125(handler$$6) {
    var v933 = me$$1.events;
    var v934 = event$$1.type;
    var v562 = v933[v934];
    var v563 = handler$$6.$f_guid;
    delete v562[v563];
    return
  }
  var me$$1 = this;
  var v564 = event$$1;
  var v935 = !v564;
  if(v935) {
    v564 = window.event
  }
  event$$1 = v564;
  var v565 = !event$$1;
  if(v565) {
    return
  }
  var v1125 = event$$1.ctrl;
  var v936 = !v1125;
  if(v936) {
    var v1207 = event$$1.type;
    var v1126 = v1207.indexOf("key");
    v936 = v1126 != -1
  }
  var v566 = v936;
  if(v566) {
    JAMScript.callIntrospect(AJS.setEventKey, AJS, [event$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  var v567 = this.events;
  var v568 = event$$1.type;
  var handlers$$1 = v567[v568];
  var handlers_to_delete = [];
  var res$$1 = true;
  var i$$16;
  for(i$$16 in handlers$$1) {
    var handler$$5 = this.$$handleEvent = handlers$$1[i$$16];
    var v937 = AJS.handleEvent;
    var v569 = handler$$5 == v937;
    if(v569) {
      continue
    }
    res$$1 = JAMScript.callIntrospect(handler$$5, null, [event$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v570 = handler$$5.listen_once;
    if(v570) {
      JAMScript.callIntrospect(handlers_to_delete.push, handlers_to_delete, [handler$$5], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }
  }
  var v938 = handlers_to_delete.length;
  var v571 = v938 > 0;
  if(v571) {
    JAMScript.callIntrospect(AJS.map, AJS, [handlers_to_delete, v125], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return res$$1
}
function v124(elms$$3, types, handler$$4, listen_once$$1) {
  function v123(elm$$36) {
    function v122(type$$28) {
      var v572 = elm$$36.events;
      var handlers = v572[type$$28];
      var v939 = elm$$36 == window;
      if(v939) {
        v939 = type$$28 == "load"
      }
      var v582 = v939;
      if(v582) {
        var v573 = AJS.ready_list;
        JAMScript.callIntrospect(v573.push, v573, [handler$$4], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
      }else {
        var v574 = type$$28 == "lazy_load";
        if(v574) {
          type$$28 = "load"
        }
        var v578 = !handlers;
        if(v578) {
          var v575 = elm$$36.events;
          handlers = JAMScript.set(v575, type$$28, {});
          var v940 = "on" + type$$28;
          var v577 = elm$$36[v940];
          if(v577) {
            var v576 = "on" + type$$28;
            handlers[0] = elm$$36[v576]
          }
        }
        var v941 = elm$$36._wipe_guid;
        var v579 = !v941;
        if(v579) {
          elm$$36._wipe_guid = AJS._wipe_guid;
          var v942 = AJS._wipe_guid;
          AJS._wipe_guid = v942 + 1
        }
        var v580 = handler$$4.$f_guid;
        JAMScript.set(handlers, v580, handler$$4);
        var v581 = AJS.handleEvent;
        JAMScript.callIntrospect(elm$$36.addEventListener, elm$$36, [type$$28, v581, false], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
      }
      return
    }
    if(listen_once$$1) {
      handler$$4.listen_once = true
    }
    var v943 = handler$$4.$f_guid;
    var v583 = !v943;
    if(v583) {
      handler$$4.$f_guid = AJS._f_guid;
      var v944 = AJS._f_guid;
      AJS._f_guid = v944 + 1
    }
    var v945 = elm$$36.events;
    var v584 = !v945;
    if(v584) {
      elm$$36.events = {}
    }
    JAMScript.callIntrospect(AJS.map, AJS, [types, v122], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    elm$$36 = null;
    return
  }
  elms$$3 = JAMScript.callIntrospect(AJS.$A, AJS, [elms$$3], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  types = JAMScript.callIntrospect(AJS.$A, AJS, [types], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.callIntrospect(AJS.map, AJS, [elms$$3, v123], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v121(fn$$5) {
  function v120(fn$$6) {
    JAMScript.callIntrospect(fn$$6.call, fn$$6, [window], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    return
  }
  var v585 = AJS.is_ready;
  if(v585) {
    return
  }
  AJS.is_ready = true;
  var rt = AJS.ready_list;
  JAMScript.callIntrospect(AJS.map, AJS, [rt, v120], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  AJS.ready_list = [];
  return
}
function v119() {
  function v118() {
    var v586 = AJS.is_ready;
    if(v586) {
      return
    }
    try {
      var v587 = document.documentElement;
      JAMScript.call(v587.doScroll, v587, ["left"])
    }catch(error$$2) {
      var v588 = arguments.callee;
      JAMScript.call(setTimeout, null, [v588, 0]);
      return
    }
    JAMScript.call(AJS.ready, AJS, []);
    return
  }
  function v117() {
    var v946 = document.readyState;
    var v590 = v946 === "complete";
    if(v590) {
      var v589 = arguments.callee;
      JAMScript.call(document.detachEvent, document, ["onreadystatechange", v589]);
      JAMScript.call(AJS.ready, AJS, [])
    }
    return
  }
  function v116() {
    var v591 = arguments.callee;
    JAMScript.call(document.removeEventListener, document, ["DOMContentLoaded", v591, false]);
    JAMScript.call(AJS.ready, AJS, []);
    return
  }
  var v592 = AJS.ready_bound;
  if(v592) {
    return
  }
  AJS.ready_bound = true;
  var v595 = document.addEventListener;
  if(v595) {
    document.addEventListener("DOMContentLoaded", v116, false)
  }else {
    var v594 = document.attachEvent;
    if(v594) {
      JAMScript.call(document.attachEvent, document, ["onreadystatechange", v117]);
      var v1127 = document.documentElement;
      var v947 = v1127.doScroll;
      if(v947) {
        var v1128 = window.top;
        v947 = window == v1128
      }
      var v593 = v947;
      if(v593) {
        v118()
      }
    }
  }
  var v596 = AJS.ready;
  JAMScript.callIntrospect(AJS.AEV, AJS, [window, "load", v596], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v115(elms$$2, type$$27, handler$$3, listen_once) {
  function v114(elm$$35) {
    var v598 = elm$$35.events;
    if(v598) {
      var v597 = elm$$35.events;
      JAMScript.set(v597, type$$27, {})
    }
    return
  }
  elms$$2 = JAMScript.callIntrospect(AJS.$A, AJS, [elms$$2], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.callIntrospect(AJS.map, AJS, [elms$$2, v114], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return JAMScript.callIntrospect(AJS.AEV, AJS, [elms$$2, type$$27, handler$$3, listen_once], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
}
function v113(e$$11) {
  var v599 = !e$$11;
  if(v599) {
    e$$11 = window.event
  }
  var v600;
  var v948 = e$$11.keyCode;
  if(v948) {
    v600 = e$$11.keyCode
  }else {
    v600 = e$$11.charCode
  }
  e$$11.key = v600;
  e$$11.ctrl = e$$11.ctrlKey;
  e$$11.alt = e$$11.altKey;
  e$$11.meta = e$$11.metaKey;
  e$$11.shift = e$$11.shiftKey;
  return
}
function v112(e$$10) {
  var v949 = e$$10;
  if(v949) {
    var v1208 = e$$10.type;
    var v1129 = !v1208;
    if(v1129) {
      var v1209 = e$$10.keyCode;
      v1129 = !v1209
    }
    v949 = v1129
  }
  var v601 = v949;
  if(v601) {
    return e$$10
  }
  var targ;
  var v602 = !e$$10;
  if(v602) {
    e$$10 = window.event
  }
  var v604 = e$$10.target;
  if(v604) {
    targ = e$$10.target
  }else {
    var v603 = e$$10.srcElement;
    if(v603) {
      targ = e$$10.srcElement
    }
  }
  var v950 = targ;
  if(v950) {
    var v1130 = targ.nodeType;
    v950 = v1130 == 3
  }
  var v605 = v950;
  if(v605) {
    targ = targ.parentNode
  }
  return targ
}
function v111(elm1, elm2) {
  function getSign(v$$1) {
    var v607 = v$$1 > 0;
    if(v607) {
      return"+"
    }else {
      var v606 = v$$1 < 0;
      if(v606) {
        return"-"
      }else {
        return 0
      }
    }
    return
  }
  var pos_elm1 = JAMScript.callIntrospect(AJS.absolutePosition, AJS, [elm1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var pos_elm2 = JAMScript.callIntrospect(AJS.absolutePosition, AJS, [elm2], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var top1 = pos_elm1.y;
  var left1 = pos_elm1.x;
  var v608 = elm1.offsetWidth;
  var right1 = left1 + v608;
  var v609 = elm1.offsetHeight;
  var bottom1 = top1 + v609;
  var top2 = pos_elm2.y;
  var left2 = pos_elm2.x;
  var v610 = elm2.offsetWidth;
  var right2 = left2 + v610;
  var v611 = elm2.offsetHeight;
  var bottom2 = top2 + v611;
  var v1210 = top1 - bottom2;
  var v1131 = getSign(v1210);
  var v1211 = bottom1 - top2;
  var v1132 = getSign(v1211);
  var v951 = v1131 != v1132;
  if(v951) {
    var v1212 = left1 - right2;
    var v1133 = getSign(v1212);
    var v1213 = right1 - left2;
    var v1134 = getSign(v1213);
    v951 = v1133 != v1134
  }
  var v612 = v951;
  if(v612) {
    return true
  }
  return false
}
function v110(doc) {
  doc = doc || document;
  var win_w;
  var win_h;
  var v619 = self.innerHeight;
  if(v619) {
    win_w = self.innerWidth;
    win_h = self.innerHeight
  }else {
    var v952 = doc.documentElement;
    if(v952) {
      var v1135 = doc.documentElement;
      v952 = v1135.clientHeight
    }
    var v618 = v952;
    if(v618) {
      var v613 = doc.documentElement;
      win_w = v613.clientWidth;
      var v614 = doc.documentElement;
      win_h = v614.clientHeight
    }else {
      var v617 = doc.body;
      if(v617) {
        var v615 = doc.body;
        win_w = v615.clientWidth;
        var v616 = doc.body;
        win_h = v616.clientHeight
      }
    }
  }
  return{"w":win_w, "h":win_h}
}
function v109(elm$$34) {
  var v620 = !elm$$34;
  if(v620) {
    return{x:0, y:0}
  }
  var v626 = elm$$34.scrollLeft;
  if(v626) {
    var v621 = elm$$34.scrollLeft;
    var v622 = elm$$34.scrollTop;
    return{x:v621, y:v622}
  }else {
    var v625 = elm$$34.clientX;
    if(v625) {
      var v623 = elm$$34.clientX;
      var v624 = elm$$34.clientY;
      return{x:v623, y:v624}
    }
  }
  var v627 = elm$$34.offsetLeft;
  var v628 = elm$$34.offsetTop;
  var posObj = {"x":v627, "y":v628};
  var v629 = elm$$34.offsetParent;
  if(v629) {
    var next = elm$$34.offsetParent;
    for(;next;) {
      var v953 = posObj.x;
      var v954 = next.offsetLeft;
      posObj.x = v953 + v954;
      var v955 = posObj.y;
      var v956 = next.offsetTop;
      posObj.y = v955 + v956;
      next = next.offsetParent
    }
  }
  var v957 = JAMScript.call(AJS.isSafari, AJS, []);
  if(v957) {
    var v1214 = elm$$34.style;
    var v1136 = v1214.position;
    v957 = v1136 == "absolute"
  }
  var v630 = v957;
  if(v630) {
    var v958 = posObj.x;
    var v1137 = document.body;
    var v959 = v1137.offsetLeft;
    posObj.x = v958 - v959;
    var v960 = posObj.y;
    var v1138 = document.body;
    var v961 = v1138.offsetTop;
    posObj.y = v960 - v961
  }
  return posObj
}
function v108() {
  var t;
  var v962 = document.documentElement;
  if(v962) {
    var v1139 = document.documentElement;
    v962 = v1139.scrollTop
  }
  var v634 = v962;
  if(v634) {
    var v631 = document.documentElement;
    t = v631.scrollTop
  }else {
    var v633 = document.body;
    if(v633) {
      var v632 = document.body;
      t = v632.scrollTop
    }
  }
  return t
}
function v107(e$$9) {
  var posx = 0;
  var posy = 0;
  var v635 = !e$$9;
  if(v635) {
    e$$9 = window.event
  }
  var v963 = e$$9.pageX;
  var v1140 = !v963;
  if(v1140) {
    v963 = e$$9.pageY
  }
  var v641 = v963;
  if(v641) {
    posx = e$$9.pageX;
    posy = e$$9.pageY
  }else {
    var v964 = e$$9.clientX;
    var v1141 = !v964;
    if(v1141) {
      v964 = e$$9.clientY
    }
    var v640 = v964;
    if(v640) {
      var v965 = e$$9.clientX;
      var v1142 = document.body;
      var v966 = v1142.scrollLeft;
      var v636 = v965 + v966;
      var v967 = document.documentElement;
      var v637 = v967.scrollLeft;
      posx = v636 + v637;
      var v968 = e$$9.clientY;
      var v1143 = document.body;
      var v969 = v1143.scrollTop;
      var v638 = v968 + v969;
      var v970 = document.documentElement;
      var v639 = v970.scrollTop;
      posy = v638 + v639
    }
  }
  return{x:posx, y:posy}
}
function v106(date$$1) {
  function leadingZero(nr) {
    var v642 = nr < 10;
    if(v642) {
      nr = "0" + nr
    }
    return nr
  }
  var year$$1 = date$$1.getUTCFullYear();
  var dd = date$$1.getUTCDate();
  var v643 = date$$1.getUTCMonth();
  var mm = v643 + 1;
  var v1245 = '"' + year$$1;
  var v1244 = v1245 + "-";
  var v1243 = v1244 + mm;
  var v1242 = v1243 + "-";
  var v1239 = v1242 + dd;
  var v1236 = v1239 + "T";
  var v1240 = date$$1.getUTCHours();
  var v1237 = leadingZero(v1240);
  var v1229 = v1236 + v1237;
  var v1215 = v1229 + ":";
  var v1230 = date$$1.getUTCMinutes();
  var v1216 = leadingZero(v1230);
  var v1144 = v1215 + v1216;
  var v971 = v1144 + ":";
  var v1145 = date$$1.getUTCSeconds();
  var v972 = leadingZero(v1145);
  var v644 = v971 + v972;
  return v644 + '"'
}
function v105(o$$4) {
  var v1241 = o$$4.replace(/(["\\])/g, "\\$1");
  var v1238 = '"' + v1241;
  var v1231 = v1238 + '"';
  var v1217 = v1231.replace(/[\f]/g, "\\f");
  var v1146 = v1217.replace(/[\b]/g, "\\b");
  var v973 = v1146.replace(/[\n]/g, "\\n");
  var v645 = v973.replace(/[\t]/g, "\\t");
  return v645.replace(/[\r]/g, "\\r")
}
function v104(data$$19) {
  var post_data = [];
  for(k in data$$19) {
    var v974 = k + "=";
    var v1147 = data$$19[k];
    var v975 = JAMScript.callIntrospect(AJS.urlencode, AJS, [v1147], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v646 = v974 + v975;
    JAMScript.callIntrospect(post_data.push, post_data, [v646], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return JAMScript.call(post_data.join, post_data, ["&"])
}
function v103(html$$2) {
  var script_data = html$$2.match(/<script.*?>((\n|\r|.)*?)<\/script>/g);
  var v649 = script_data != null;
  if(v649) {
    var i$$15 = 0;
    var v976 = script_data.length;
    var v648 = i$$15 < v976;
    for(;v648;) {
      var v647 = script_data[i$$15];
      var script_only = v647.replace(/<script.*?>/g, "");
      script_only = script_only.replace(/<\/script>/g, "");
      if(JAMScript.isEval(eval)) {
        eval("introspect(JAMScript.introspectors.processAll) { " + script_only + " }")
      }else {
        JAMScript.call(eval, null, [script_only])
      }
      i$$15 = i$$15 + 1;
      var v977 = script_data.length;
      v648 = i$$15 < v977
    }
  }
  return
}
function v102(txt) {
  try {
    var v978 = "(" + txt;
    var v650 = v978 + ")";
    if(JAMScript.isEval(eval)) {
      return eval("introspect(JAMScript.introspectors.processAll) { " + v650 + " }")
    }else {
      return JAMScript.call(eval, null, [v650])
    }
  }catch(e$$8) {
    if(JAMScript.isEval(eval)) {
      return eval("introspect(JAMScript.introspectors.processAll) { " + txt + " }")
    }else {
      return JAMScript.call(eval, null, [txt])
    }
  }
  return
}
function v101(url$$4, type$$26, debug) {
  function eval_req(data$$18, req$$2) {
    var text$$8 = req$$2.responseText;
    var v651 = text$$8 == "Error";
    if(v651) {
      JAMScript.callIntrospect(d$$1.errback, d$$1, [req$$2], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }else {
      return JAMScript.callIntrospect(AJS.evalTxt, AJS, [text$$8], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }
    return
  }
  var d$$1 = JAMScript.callIntrospect(AJS.getRequest, AJS, [url$$4, type$$26], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.callIntrospect(d$$1.addCallback, d$$1, [eval_req], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return d$$1
}
function v100(o$$3) {
  var objtype = typeof o$$3;
  var v654 = objtype == "undefined";
  if(v654) {
    return"null"
  }else {
    var v979 = objtype == "number";
    var v1148 = !v979;
    if(v1148) {
      v979 = objtype == "boolean"
    }
    var v653 = v979;
    if(v653) {
      return o$$3 + ""
    }else {
      var v652 = o$$3 === null;
      if(v652) {
        return"null"
      }
    }
  }
  var v655 = objtype == "string";
  if(v655) {
    return JAMScript.callIntrospect(AJS._reprString, AJS, [o$$3], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  var v980 = objtype == "object";
  if(v980) {
    v980 = o$$3.getFullYear
  }
  var v656 = v980;
  if(v656) {
    return JAMScript.callIntrospect(AJS._reprDate, AJS, [o$$3], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  var me = arguments.callee;
  var v981 = objtype != "function";
  if(v981) {
    var v1218 = o$$3.length;
    var v1149 = typeof v1218;
    v981 = v1149 == "number"
  }
  var v661 = v981;
  if(v661) {
    var res = [];
    var i$$14 = 0;
    var v982 = o$$3.length;
    var v659 = i$$14 < v982;
    for(;v659;) {
      var v657 = o$$3[i$$14];
      var val$$3 = JAMScript.callIntrospect(me, null, [v657], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
      var v983 = typeof val$$3;
      var v658 = v983 != "string";
      if(v658) {
        val$$3 = "undefined"
      }
      JAMScript.callIntrospect(res.push, res, [val$$3], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
      i$$14 = i$$14 + 1;
      var v984 = o$$3.length;
      v659 = i$$14 < v984
    }
    var v985 = JAMScript.call(res.join, res, [","]);
    var v660 = "[" + v985;
    return v660 + "]"
  }
  var v662 = objtype == "function";
  if(v662) {
    return null
  }
  res = [];
  var k$$1;
  for(k$$1 in o$$3) {
    var useKey;
    var v986 = typeof k$$1;
    var v665 = v986 == "number";
    if(v665) {
      var v663 = '"' + k$$1;
      useKey = v663 + '"'
    }else {
      var v987 = typeof k$$1;
      var v664 = v987 == "string";
      if(v664) {
        useKey = JAMScript.callIntrospect(AJS._reprString, AJS, [k$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
      }else {
        continue
      }
    }
    var v666 = o$$3[k$$1];
    val$$3 = JAMScript.callIntrospect(me, null, [v666], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v988 = typeof val$$3;
    var v667 = v988 != "string";
    if(v667) {
      continue
    }
    var v989 = useKey + ":";
    var v668 = v989 + val$$3;
    JAMScript.callIntrospect(res.push, res, [v668], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  var v990 = JAMScript.call(res.join, res, [","]);
  var v669 = "{" + v990;
  return v669 + "}"
}
function v99(url$$3, method$$1) {
  var req$$1 = JAMScript.call(AJS.getXMLHttpRequest, AJS, []);
  var v991 = url$$3.match(/^https?:\/\//);
  var v673 = v991 == null;
  if(v673) {
    var v992 = AJS.BASE_URL;
    var v672 = v992 != "";
    if(v672) {
      var v1150 = AJS.BASE_URL;
      var v993 = v1150.lastIndexOf("/");
      var v1219 = AJS.BASE_URL;
      var v1151 = v1219.length;
      var v994 = v1151 - 1;
      var v670 = v993 != v994;
      if(v670) {
        var v995 = AJS.BASE_URL;
        AJS.BASE_URL = v995 + "/"
      }
      var v671 = AJS.BASE_URL;
      url$$3 = v671 + url$$3
    }
  }
  var v674 = !method$$1;
  if(v674) {
    method$$1 = "POST"
  }
  return JAMScript.new(AJSDeferred, [req$$1, method$$1, url$$3])
}
function v98() {
  function v97() {
    throw"Browser does not support XMLHttpRequest";
  }
  function v96() {
    return JAMScript.new(ActiveXObject, ["Msxml2.XMLHTTP.4.0"])
  }
  function v95() {
    return JAMScript.new(ActiveXObject, ["Microsoft.XMLHTTP"])
  }
  function v94() {
    return JAMScript.new(ActiveXObject, ["Msxml2.XMLHTTP"])
  }
  function v93() {
    return new XMLHttpRequest
  }
  var try_these = [v93, v94, v95, v96, v97];
  var i$$13 = 0;
  var v996 = try_these.length;
  var v675 = i$$13 < v996;
  for(;v675;) {
    var func$$3 = try_these[i$$13];
    try {
      return JAMScript.call(func$$3, null, [])
    }catch(e$$7) {
      JAMScript.callIntrospect(AJS.log, AJS, [e$$7], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }
    i$$13 = i$$13 + 1;
    var v997 = try_these.length;
    v675 = i$$13 < v997
  }
  return
}
function v92(tmpl, ns, scope) {
  function fn$$4(w$$5, g) {
    g = g.split("|");
    var v676 = g[0];
    var cnt = ns[v676];
    var i$$12 = 1;
    var v998 = g.length;
    var v678 = i$$12 < v998;
    for(;v678;) {
      var v677 = g[i$$12];
      cnt = JAMScript.callIntrospect(scope[v677], scope, [cnt], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
      i$$12 = i$$12 + 1;
      var v999 = g.length;
      v678 = i$$12 < v999
    }
    var v679 = cnt == "";
    if(v679) {
      return""
    }
    var v1000 = cnt == 0;
    var v1152 = !v1000;
    if(v1152) {
      v1000 = cnt == -1
    }
    var v680 = v1000;
    if(v680) {
      cnt = cnt + ""
    }
    return cnt || w$$5
  }
  scope = scope || window;
  return tmpl.replace(/%\(([A-Za-z0-9_|.]*)\)/g, fn$$4)
}
function v91() {
  function v90(args$$13) {
    function v89(src$$2) {
      var pic = new Image;
      pic.src = src$$2;
      return
    }
    JAMScript.callIntrospect(AJS.map, AJS, [args$$13, v89], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    return
  }
  var f$$1 = JAMScript.callIntrospect(AJS.$p, AJS, [v90, arguments], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.callIntrospect(AJS.AEV, AJS, [window, "load", f$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v88(html$$1, first_child$$1) {
  var d = JAMScript.call(AJS.DIV, AJS, []);
  JAMScript.set(d, "innerHTML", html$$1);
  if(first_child$$1) {
    var v681 = d.childNodes;
    return v681[0]
  }else {
    return d
  }
  return
}
function v87(elm$$33, p$$5) {
  var v686 = p$$5 == 1;
  if(v686) {
    var v682 = elm$$33.style;
    v682.opacity = 1;
    var v683 = elm$$33.style;
    v683.filter = ""
  }else {
    var v684 = elm$$33.style;
    v684.opacity = p$$5;
    var v685 = elm$$33.style;
    var v1153 = p$$5 * 100;
    var v1001 = "alpha(opacity=" + v1153;
    v685.filter = v1001 + ")"
  }
  return
}
function v86() {
  function v85(elm$$32) {
    var v687 = elm$$32;
    var v1002 = elm$$32.className;
    var v1154 = "(^|\\s)" + cls$$2;
    var v1003 = new RegExp(v1154, "g");
    var v1270 = JAMScript.callIntrospect(v1002.replace, v1002, [v1003, ""], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    v687.className = v1270;
    return
  }
  var args$$12 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  var cls$$2 = args$$12.pop();
  JAMScript.callIntrospect(AJS.map, AJS, [args$$12, v85], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v84(elm$$31, cls$$1) {
  var v1004 = !elm$$31;
  var v1156 = !v1004;
  if(v1156) {
    var v1155 = elm$$31.className;
    v1004 = !v1155
  }
  var v688 = v1004;
  if(v688) {
    return false
  }
  var e_cls = elm$$31.className;
  var v1005 = e_cls.length;
  var v689 = v1005 > 0;
  if(v689) {
    var v1006 = e_cls == cls$$1;
    var v1158 = !v1006;
    if(v1158) {
      var v1232 = "(^|\\s)" + cls$$1;
      var v1220 = v1232 + "(\\s|$)";
      var v1157 = new RegExp(v1220);
      v1006 = JAMScript.callIntrospect(v1157.test, v1157, [e_cls], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }
    v689 = v1006
  }
  return v689
}
function v83() {
  function v82(elm$$30) {
    var o$$inline_0 = elm$$30;
    var v1233 = "(^|\\s)" + cls;
    var v1221 = v1233 + "(\\s|$)";
    var v1159 = new RegExp(v1221);
    var v1160 = o$$inline_0.className;
    var v1007 = JAMScript.callIntrospect(v1159.test, v1159, [v1160], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v690 = !v1007;
    if(v690) {
      var v1008 = o$$inline_0.className;
      var v1222;
      var v1234 = o$$inline_0.className;
      if(v1234) {
        v1222 = " "
      }else {
        v1222 = ""
      }
      var v1161 = v1222;
      var v1009 = v1161 + cls;
      o$$inline_0.className = v1008 + v1009
    }
    return
  }
  var args$$11 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  var cls = args$$11.pop();
  JAMScript.callIntrospect(AJS.map, AJS, [args$$11, v82], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v81() {
  function v80(elm$$29) {
    elm$$29.className = c;
    return
  }
  var args$$10 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  var c = args$$10.pop();
  JAMScript.callIntrospect(AJS.map, AJS, [args$$10, v80], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v79() {
  return JAMScript.call(AJS.__cssDim, AJS, [arguments, "top"])
}
function v78() {
  return JAMScript.call(AJS.__cssDim, AJS, [arguments, "right"])
}
function v77() {
  return JAMScript.call(AJS.__cssDim, AJS, [arguments, "left"])
}
function v76() {
  return JAMScript.call(AJS.__cssDim, AJS, [arguments, "height"])
}
function v75() {
  return JAMScript.call(AJS.__cssDim, AJS, [arguments, "width"])
}
function v74(args$$9, property$$4) {
  args$$9 = JAMScript.callIntrospect(AJS.$FA, AJS, [args$$9], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v1010 = args$$9.length;
  var v691 = v1010 - 1;
  args$$9.splice(v691, 0, property$$4);
  var v692 = AJS.setStyle;
  JAMScript.call(v692.apply, v692, [null, args$$9]);
  return
}
function v73() {
  function v72(elm$$28) {
    var v694 = JAMScript.callIntrospect(AJS.isIn, AJS, [property$$3, num_styles], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    if(v694) {
      var v1011 = JAMScript.callIntrospect(AJS.isString, AJS, [value$$29], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
      if(v1011) {
        v1011 = value$$29
      }
      var v693 = v1011;
      var v1012 = !v693;
      if(v1012) {
        v693 = value$$29 + "px"
      }
      value$$29 = v693
    }
    var v695 = elm$$28.style;
    JAMScript.set(v695, property$$3, value$$29);
    return
  }
  function v71(elm$$27) {
    function v70(prop$$4) {
      var css_dim = value$$29[prop$$4];
      var v697 = JAMScript.callIntrospect(AJS.isIn, AJS, [prop$$4, num_styles], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
      if(v697) {
        var v1013 = JAMScript.callIntrospect(AJS.isString, AJS, [css_dim], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
        if(v1013) {
          v1013 = css_dim
        }
        var v696 = v1013;
        var v1014 = !v696;
        if(v1014) {
          v696 = css_dim + "px"
        }
        css_dim = v696
      }
      var v698 = elm$$27.style;
      JAMScript.set(v698, prop$$4, css_dim);
      return
    }
    var v699 = JAMScript.callIntrospect(AJS.keys, AJS, [value$$29], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.callIntrospect(AJS.map, AJS, [v699, v70], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    return
  }
  var args$$8 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  var value$$29 = args$$8.pop();
  var num_styles = ["top", "left", "right", "width", "height"];
  var v700 = JAMScript.callIntrospect(AJS.isObject, AJS, [value$$29], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  if(v700) {
    JAMScript.callIntrospect(AJS.map, AJS, [args$$8, v71], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }else {
    var property$$3 = args$$8.pop();
    JAMScript.callIntrospect(AJS.map, AJS, [args$$8, v72], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return
}
function v69(elm$$26) {
  var v701 = JAMScript.callIntrospect(AJS.isElementHidden, AJS, [elm$$26], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return!v701
}
function v68(elm$$25) {
  var v1162 = elm$$25.style;
  var v1015 = v1162.display;
  var v702 = v1015 == "none";
  var v1017 = !v702;
  if(v1017) {
    var v1163 = elm$$25.style;
    var v1016 = v1163.visibility;
    v702 = v1016 == "hidden"
  }
  return v702
}
function v67(elm$$24) {
  var v703 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  JAMScript.callIntrospect(AJS.setStyle, AJS, [v703, "display", "none"], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v66() {
  var v704 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  JAMScript.callIntrospect(AJS.setStyle, AJS, [v704, "display", ""], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v65() {
  var args$$7 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  var v1018 = args$$7.pop();
  if(v1018) {
    v1018 = "visible"
  }
  var v705 = v1018;
  var v1019 = !v705;
  if(v1019) {
    v705 = "hidden"
  }
  var val$$2 = v705;
  JAMScript.callIntrospect(AJS.setStyle, AJS, [args$$7, "visibility", val$$2], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v64() {
  function v63(elm$$23) {
    if(elm$$23) {
      JAMScript.set(elm$$23, "innerHTML", html)
    }
    return
  }
  var args$$6 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  var html = args$$6.pop();
  JAMScript.callIntrospect(AJS.map, AJS, [args$$6, v63], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return args$$6[0]
}
function v62() {
  function v61(text$$7) {
    return JAMScript.callIntrospect(document.createTextNode, document, [text$$7], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  function extends_ajs(elm$$22) {
    function v60() {
      var v706 = AJS.createDOM;
      var v707 = [elm$$22, arguments];
      return JAMScript.call(v706.apply, v706, [null, v707])
    }
    var v708 = elm$$22.toUpperCase();
    JAMScript.set(AJS, v708, v60);
    return
  }
  var elms$$1 = ["ul", "li", "td", "tr", "th", "tbody", "table", "input", "span", "b", "a", "div", "img", "button", "h1", "h2", "h3", "h4", "h5", "h6", "br", "textarea", "form", "p", "select", "option", "optgroup", "iframe", "script", "center", "dl", "dt", "dd", "small", "pre", "i", "label", "thead"];
  JAMScript.callIntrospect(AJS.map, AJS, [elms$$1, extends_ajs], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  AJS.TN = v61;
  return
}
function v59(name$$32, attrs) {
  var i$$11 = 0;
  var attr;
  var elm$$21 = JAMScript.callIntrospect(document.createElement, document, [name$$32], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var first_attr = attrs[0];
  var v1020 = attrs[i$$11];
  var v712 = JAMScript.callIntrospect(AJS.isDict, AJS, [v1020], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  if(v712) {
    for(k in first_attr) {
      attr = first_attr[k];
      var v1021 = k == "style";
      var v1164 = !v1021;
      if(v1164) {
        v1021 = k == "s"
      }
      var v711 = v1021;
      if(v711) {
        var v709 = elm$$21.style;
        v709.cssText = attr
      }else {
        var v1022 = k == "c";
        var v1166 = !v1022;
        if(v1166) {
          var v1165 = k == "class";
          var v1223 = !v1165;
          if(v1223) {
            v1165 = k == "className"
          }
          v1022 = v1165
        }
        var v710 = v1022;
        if(v710) {
          elm$$21.className = attr
        }else {
          JAMScript.callIntrospect(elm$$21.setAttribute, elm$$21, [k, attr], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
        }
      }
    }
    i$$11 = i$$11 + 1
  }
  var v713 = first_attr == null;
  if(v713) {
    i$$11 = 1
  }
  var j$$1 = i$$11;
  var v1023 = attrs.length;
  var v715 = j$$1 < v1023;
  for(;v715;) {
    attr = attrs[j$$1];
    if(attr) {
      var type$$25 = typeof attr;
      var v1024 = type$$25 == "string";
      var v1167 = !v1024;
      if(v1167) {
        v1024 = type$$25 == "number"
      }
      var v714 = v1024;
      if(v714) {
        attr = JAMScript.callIntrospect(AJS.TN, AJS, [attr], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
      }
      JAMScript.callIntrospect(elm$$21.appendChild, elm$$21, [attr], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }
    j$$1 = j$$1 + 1;
    var v1025 = attrs.length;
    v715 = j$$1 < v1025
  }
  return elm$$21
}
function v58() {
  function v57(elm$$20) {
    var v716 = JAMScript.callIntrospect($, null, [elm$$20], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    if(v716) {
      JAMScript.callIntrospect(AJS.swapDOM, AJS, [elm$$20, null], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }
    return
  }
  var args$$5 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  try {
    JAMScript.callIntrospect(AJS.map, AJS, [args$$5, v57], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }catch(e$$6) {
  }
  return
}
function v56(dest, src$$1) {
  dest = JAMScript.callIntrospect(AJS.getElement, AJS, [dest], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var parent$$1 = dest.parentNode;
  if(src$$1) {
    src$$1 = JAMScript.callIntrospect(AJS.getElement, AJS, [src$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.callIntrospect(parent$$1.replaceChild, parent$$1, [src$$1, dest], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }else {
    JAMScript.callIntrospect(parent$$1.removeChild, parent$$1, [dest], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return src$$1
}
function v55(elm$$19, reference_elm$$1) {
  var v717 = reference_elm$$1.parentNode;
  JAMScript.callIntrospect(v717.insertBefore, v717, [elm$$19, reference_elm$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return elm$$19
}
function v54(elm$$18, reference_elm) {
  var v718 = reference_elm.parentNode;
  var v719 = reference_elm.nextSibling;
  JAMScript.callIntrospect(v718.insertBefore, v718, [elm$$18, v719], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return elm$$18
}
function v53(elm$$17) {
  var child$$1;
  var v720 = child$$1 = elm$$17.firstChild;
  for(;v720;) {
    JAMScript.callIntrospect(AJS.swapDOM, AJS, [child$$1, null], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    v720 = child$$1 = elm$$17.firstChild
  }
  var v1026 = arguments.length;
  var v722 = v1026 < 2;
  if(v722) {
    return elm$$17
  }else {
    var v721 = AJS.appendChildNodes;
    return JAMScript.call(v721.apply, v721, [null, arguments])
  }
  return
}
function v52(elm$$16) {
  var v723 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  var args$$4 = v723.slice(1);
  var v1027 = args$$4.length;
  var v725 = v1027 >= 1;
  if(v725) {
    var first_child = elm$$16.firstChild;
    if(first_child) {
      for(;true;) {
        var t_elm = JAMScript.call(args$$4.shift, args$$4, []);
        if(t_elm) {
          JAMScript.callIntrospect(AJS.insertBefore, AJS, [t_elm, first_child], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
        }else {
          break
        }
      }
    }else {
      var v724 = AJS.ACN;
      JAMScript.call(v724.apply, v724, [null, arguments])
    }
  }
  return elm$$16
}
function v51(elm$$15) {
  function v50(n$$1) {
    var v726 = JAMScript.callIntrospect(AJS.isString, AJS, [n$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    if(v726) {
      n$$1 = JAMScript.callIntrospect(AJS.TN, AJS, [n$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }
    var v727 = JAMScript.callIntrospect(AJS.isDefined, AJS, [n$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    if(v727) {
      JAMScript.callIntrospect(elm$$15.appendChild, elm$$15, [n$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }
    return
  }
  var v1028 = arguments.length;
  var v728 = v1028 >= 2;
  if(v728) {
    JAMScript.call(AJS.map, AJS, [arguments, v50, 1])
  }
  return elm$$15
}
function v49(elm$$14) {
  var v1029 = typeof elm$$14;
  var v729 = v1029 == "string";
  if(v729) {
    elm$$14 = JAMScript.callIntrospect(AJS.HTML2DOM, AJS, [elm$$14], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  JAMScript.call(document.write, document, ['<span id="dummy_holder"></span>']);
  var v730 = JAMScript.call(AJS.$, AJS, ["dummy_holder"]);
  JAMScript.callIntrospect(AJS.swapDOM, AJS, [v730, elm$$14], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function v48(select) {
  select = JAMScript.callIntrospect(AJS.$, AJS, [select], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v1030 = select.options;
  var v1031 = select.selectedIndex;
  var v731 = v1030[v1031];
  return v731.value
}
function v47(form, name$$31) {
  function v46(elm$$13) {
    var v1032 = elm$$13.name;
    if(v1032) {
      var v1168 = elm$$13.name;
      v1032 = v1168 == name$$31
    }
    var v732 = v1032;
    if(v732) {
      r$$5 = elm$$13
    }
    return
  }
  function v45(elm$$12) {
    var v1033 = elm$$12.name;
    if(v1033) {
      var v1169 = elm$$12.name;
      v1033 = v1169 == name$$31
    }
    var v733 = v1033;
    if(v733) {
      r$$5 = elm$$12
    }
    return
  }
  form = JAMScript.callIntrospect(AJS.$, AJS, [form], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var r$$5 = null;
  var v734 = form.elements;
  JAMScript.callIntrospect(AJS.map, AJS, [v734, v45], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  if(r$$5) {
    return r$$5
  }
  var v735 = JAMScript.call(AJS.$bytc, AJS, ["select", null, form]);
  JAMScript.callIntrospect(AJS.map, AJS, [v735, v46], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return r$$5
}
function v44() {
  var v736 = JAMScript.call(AJS.$bytc, AJS, ["body"]);
  return v736[0]
}
function v43(elm$$11, tag_name$$5, class_name$$5) {
  function v42(m$$2) {
    return m$$2.nextSibling
  }
  return JAMScript.callIntrospect(AJS._nodeWalk, AJS, [elm$$11, tag_name$$5, class_name$$5, v42], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
}
function v41(elm$$10, tag_name$$4, class_name$$4) {
  function v40(m$$1) {
    return m$$1.previousSibling
  }
  return JAMScript.callIntrospect(AJS._nodeWalk, AJS, [elm$$10, tag_name$$4, class_name$$4, v40], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
}
function v39(elm$$9, parent_to_consider, max_look_up) {
  var v737 = elm$$9 == parent_to_consider;
  if(v737) {
    return true
  }
  var v738 = max_look_up == 0;
  if(v738) {
    return false
  }
  var v739 = elm$$9.parentNode;
  var v740 = max_look_up - 1;
  return JAMScript.callIntrospect(AJS.hasParent, AJS, [v739, parent_to_consider, v740], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
}
function v38(elm$$8, tag_name$$3, class_name$$3) {
  var elms = JAMScript.callIntrospect(AJS.$bytc, AJS, [tag_name$$3, class_name$$3, elm$$8], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v1034 = elms.length;
  var v741 = v1034 > 0;
  if(v741) {
    return elms[0]
  }else {
    return null
  }
  return
}
function v37(elm$$7, tag_name$$2, class_name$$2) {
  function v36(m) {
    if(m) {
      return m.parentNode
    }
    return
  }
  return JAMScript.callIntrospect(AJS._nodeWalk, AJS, [elm$$7, tag_name$$2, class_name$$2, v36], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
}
function v35(elm$$6, tag_name$$1, class_name$$1, fn_next_elm) {
  function v34(p$$4) {
    return JAMScript.callIntrospect(AJS.hasClass, AJS, [p$$4, class_name$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  function v33(p$$3) {
    var v742 = JAMScript.callIntrospect(AJS.nodeName, AJS, [p$$3], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    return v742 == tag_name$$1
  }
  function v32(p$$2) {
    var v1035 = JAMScript.callIntrospect(AJS.nodeName, AJS, [p$$2], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v743 = v1035 == tag_name$$1;
    if(v743) {
      v743 = JAMScript.callIntrospect(AJS.hasClass, AJS, [p$$2, class_name$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }
    return v743
  }
  var p$$1 = JAMScript.callIntrospect(fn_next_elm, null, [elm$$6], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var checkFn;
  var v744 = tag_name$$1 && class_name$$1;
  if(v744) {
    checkFn = v32
  }else {
    if(tag_name$$1) {
      checkFn = v33
    }else {
      checkFn = v34
    }
  }
  var v745 = JAMScript.callIntrospect(checkFn, null, [elm$$6], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  if(v745) {
    return elm$$6
  }
  for(;p$$1;) {
    var v746 = JAMScript.callIntrospect(checkFn, null, [p$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    if(v746) {
      return p$$1
    }
    p$$1 = JAMScript.callIntrospect(fn_next_elm, null, [p$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  return null
}
function v31(elm$$5) {
  var v747 = elm$$5.nodeName;
  return v747.toLowerCase()
}
function v30(tag_name, class_name, parent, first_match) {
  var class_elements = [];
  var v1036 = JAMScript.callIntrospect(AJS.isDefined, AJS, [parent], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v748 = !v1036;
  if(v748) {
    parent = document
  }
  var v1037 = JAMScript.callIntrospect(AJS.isDefined, AJS, [tag_name], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v749 = !v1037;
  if(v749) {
    tag_name = "*"
  }
  var i$$10;
  var j;
  var v1038 = class_name;
  if(v1038) {
    v1038 = document.getElementsByClassName
  }
  var v759 = v1038;
  if(v759) {
    var els = JAMScript.callIntrospect(parent.getElementsByClassName, parent, [class_name], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v753 = tag_name == "*";
    if(v753) {
      class_elements = JAMScript.callIntrospect(AJS.forceArray, AJS, [els], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }else {
      var els_len = els.length;
      i$$10 = 0;
      var v752 = i$$10 < els_len;
      for(;v752;) {
        var v1224 = els[i$$10];
        var v1170 = v1224.nodeName;
        var v1039 = v1170.toLowerCase();
        var v751 = v1039 == tag_name;
        if(v751) {
          var v750 = els[i$$10];
          JAMScript.callIntrospect(class_elements.push, class_elements, [v750], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
        }
        i$$10 = i$$10 + 1;
        v752 = i$$10 < els_len
      }
    }
  }else {
    els = JAMScript.callIntrospect(parent.getElementsByTagName, parent, [tag_name], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v758 = !class_name;
    if(v758) {
      class_elements = JAMScript.callIntrospect(AJS.forceArray, AJS, [els], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }else {
      els_len = els.length;
      var v1040 = "(^|\\s)" + class_name;
      var v754 = v1040 + "(\\s|$)";
      var pattern$$1 = new RegExp(v754);
      i$$10 = 0;
      var v757 = i$$10 < els_len;
      for(;v757;) {
        var v1225 = els[i$$10];
        var v1171 = v1225.className;
        var v1041 = JAMScript.callIntrospect(pattern$$1.test, pattern$$1, [v1171], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
        var v1172 = !v1041;
        if(v1172) {
          v1041 = !class_name
        }
        var v756 = v1041;
        if(v756) {
          var v755 = els[i$$10];
          JAMScript.callIntrospect(class_elements.push, class_elements, [v755], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
        }
        i$$10 = i$$10 + 1;
        v757 = i$$10 < els_len
      }
    }
  }
  if(first_match) {
    return class_elements[0]
  }else {
    return class_elements
  }
  return
}
function v29() {
  var args$$3 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  var elements = new Array;
  var i$$9 = 0;
  var v1042 = args$$3.length;
  var v761 = i$$9 < v1042;
  for(;v761;) {
    var v760 = args$$3[i$$9];
    var element$$3 = JAMScript.callIntrospect(AJS.getElement, AJS, [v760], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.callIntrospect(elements.push, elements, [element$$3], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    i$$9 = i$$9 + 1;
    var v1043 = args$$3.length;
    v761 = i$$9 < v1043
  }
  return elements
}
function v28(id) {
  var v1044 = JAMScript.callIntrospect(AJS.isString, AJS, [id], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v1173 = !v1044;
  if(v1173) {
    v1044 = JAMScript.callIntrospect(AJS.isNumber, AJS, [id], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  var v762 = v1044;
  if(v762) {
    return JAMScript.callIntrospect(document.getElementById, document, [id], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }else {
    return id
  }
  return
}
function v27(fn$$3) {
  function v26() {
    var v763 = JAMScript.call(AJS.$FA, AJS, [arguments]);
    args$$2 = JAMScript.callIntrospect(args$$2.concat, args$$2, [v763], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    return JAMScript.callIntrospect(fn$$3.apply, fn$$3, [window, args$$2], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }
  var args$$2 = JAMScript.call(AJS.$FA, AJS, [arguments]);
  JAMScript.call(args$$2.shift, args$$2, []);
  return v26
}
function v25(list$$9, fn$$2, start_index$$1, end_index$$1) {
  function v24(elm$$4) {
    var v764 = JAMScript.callIntrospect(fn$$2, null, [elm$$4], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    if(v764) {
      JAMScript.callIntrospect(r$$4.push, r$$4, [elm$$4], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }
    return
  }
  var r$$4 = [];
  JAMScript.callIntrospect(AJS.map, AJS, [list$$9, v24, start_index$$1, end_index$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return r$$4
}
function v23(list$$8, fn$$1) {
  var v765 = list$$8.length;
  var i$$8 = v765 - 1;
  var l$$2 = 0;
  var v768 = i$$8 >= l$$2;
  for(;v768;) {
    var v1045 = list$$8[i$$8];
    var v766 = [v1045, i$$8];
    var val$$1 = JAMScript.call(fn$$1.apply, fn$$1, [null, v766]);
    var v767 = val$$1 != undefined;
    if(v767) {
      return val$$1
    }
    i$$8 = i$$8 - 1;
    v768 = i$$8 >= l$$2
  }
  return
}
function v22(list$$7, fn, start_index, end_index) {
  var i$$7 = 0;
  var l$$1 = list$$7.length;
  if(start_index) {
    i$$7 = start_index
  }
  if(end_index) {
    l$$1 = end_index
  }
  var v771 = i$$7 < l$$1;
  for(;v771;) {
    var v769 = list$$7[i$$7];
    var val = JAMScript.callIntrospect(fn, null, [v769, i$$7], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v770 = val != undefined;
    if(v770) {
      return val
    }
    i$$7 = i$$7 + 1;
    v771 = i$$7 < l$$1
  }
  return
}
function v21(args$$1) {
  var f = JAMScript.callIntrospect(AJS.forceArray, AJS, [args$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return JAMScript.callIntrospect(AJS.flattenList, AJS, [f], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
}
function v20(list$$6) {
  function _flatten(r$$3, l) {
    function v19(o) {
      var v773 = o == null;
      if(v773) {
      }else {
        var v772 = JAMScript.callIntrospect(AJS.isArray, AJS, [o], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
        if(v772) {
          _flatten(r$$3, o)
        }else {
          JAMScript.callIntrospect(r$$3.push, r$$3, [o], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
        }
      }
      return
    }
    JAMScript.callIntrospect(AJS.map, AJS, [l, v19], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    return
  }
  var has_list = false;
  var new_list = [];
  var i$$6 = 0;
  var v1046 = list$$6.length;
  var v776 = i$$6 < v1046;
  for(;v776;) {
    var elm$$3 = list$$6[i$$6];
    var v774 = JAMScript.callIntrospect(AJS.isArray, AJS, [elm$$3], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    if(v774) {
      has_list = true;
      break
    }
    var v775 = elm$$3 != null;
    if(v775) {
      JAMScript.callIntrospect(new_list.push, new_list, [elm$$3], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }
    i$$6 = i$$6 + 1;
    var v1047 = list$$6.length;
    v776 = i$$6 < v1047
  }
  var v777 = !has_list;
  if(v777) {
    return new_list
  }
  var r$$2 = [];
  _flatten(r$$2, list$$6);
  return r$$2
}
function v18(l1, l2) {
  var i$$5;
  for(i$$5 in l2) {
    JAMScript.set(l1, i$$5, l2[i$$5])
  }
  return l1
}
function v17(list$$5) {
  var v778 = list$$5;
  var v1174 = Math.random();
  var v1175 = list$$5.length;
  var v1048 = v1174 * v1175;
  var v779 = JAMScript.callIntrospect(Math.floor, Math, [v1048], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return v778[v779]
}
function v16(list$$4) {
  var v1049 = list$$4.length;
  var v781 = v1049 > 0;
  if(v781) {
    var v1050 = list$$4.length;
    var v780 = v1050 - 1;
    return list$$4[v780]
  }else {
    return null
  }
  return
}
function v15(list$$3) {
  var v1051 = list$$3.length;
  var v782 = v1051 > 0;
  if(v782) {
    return list$$3[0]
  }else {
    return null
  }
  return
}
function v14(elm$$2, list$$2, eval_fn) {
  var i$$4 = 0;
  var v1052 = list$$2.length;
  var v784 = i$$4 < v1052;
  for(;v784;) {
    var v1176 = eval_fn;
    if(v1176) {
      var v1226 = list$$2[i$$4];
      v1176 = JAMScript.callIntrospect(eval_fn, null, [v1226], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }
    var v1053 = v1176;
    var v1178 = !v1053;
    if(v1178) {
      var v1177 = list$$2[i$$4];
      v1053 = elm$$2 == v1177
    }
    var v783 = v1053;
    if(v783) {
      return i$$4
    }
    i$$4 = i$$4 + 1;
    var v1054 = list$$2.length;
    v784 = i$$4 < v1054
  }
  return-1
}
function v13(elm$$1, list$$1) {
  var i$$3 = JAMScript.callIntrospect(AJS.getIndex, AJS, [elm$$1, list$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v785 = i$$3 != -1;
  if(v785) {
    return true
  }else {
    return false
  }
  return
}
function v12(delim, list) {
  function v11(elm) {
    var v1055 = delim + elm;
    r$$1 = r$$1 + v1055;
    return
  }
  try {
    return JAMScript.callIntrospect(list.join, list, [delim], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
  }catch(e$$5) {
    var v786 = list[0];
    var v1056 = !v786;
    if(v1056) {
      v786 = ""
    }
    var r$$1 = v786;
    JAMScript.callIntrospect(AJS.map, AJS, [list, v11, 1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    return r$$1 + ""
  }
  return
}
function v10(args) {
  var r = [];
  var i$$2 = 0;
  var v1057 = args.length;
  var v788 = i$$2 < v1057;
  for(;v788;) {
    var v787 = args[i$$2];
    JAMScript.callIntrospect(r.push, r, [v787], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    i$$2 = i$$2 + 1;
    var v1058 = args.length;
    v788 = i$$2 < v1058
  }
  return r
}
function v9(v) {
  var v1059 = JAMScript.callIntrospect(AJS.isArray, AJS, [v], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  if(v1059) {
    var v1179 = JAMScript.callIntrospect(AJS.isString, AJS, [v], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    v1059 = !v1179
  }
  var v790 = v1059;
  if(v790) {
    return v
  }else {
    var v789 = !v;
    if(v789) {
      return[]
    }else {
      return[v]
    }
  }
  return
}
function v8() {
  var v1060 = AJS._agent;
  var v791 = v1060.indexOf("camino");
  return v791 != -1
}
function v7() {
  var v1061 = AJS._agent;
  var v792 = v1061.indexOf("macintosh");
  return v792 != -1
}
function v6() {
  var v1180 = AJS._agent;
  var v1062 = v1180.indexOf("gecko");
  var v793 = v1062 != -1;
  if(v793) {
    var v1063 = AJS._agent_version;
    v793 = v1063 >= 20030210
  }
  return v793
}
function v5() {
  var v1064 = AJS._agent;
  var v794 = v1064.indexOf("opera");
  return v794 != -1
}
function v4(all) {
  if(all) {
    var v795 = AJS._agent;
    return v795.indexOf("khtml")
  }
  var v1181 = AJS._agent;
  var v1065 = v1181.indexOf("khtml");
  var v796 = v1065 != -1;
  if(v796) {
    var v1182 = AJS._agent;
    var v1066 = v1182.match(/3\.\d\.\d safari/);
    v796 = v1066 == null
  }
  return v796
}
function v3() {
  var v1067 = AJS._agent;
  var v797 = v1067.indexOf("msie 8");
  return v797 != -1
}
function v2() {
  var v1183 = AJS._agent;
  var v1068 = v1183.indexOf("msie");
  var v798 = v1068 != -1;
  if(v798) {
    var v1184 = AJS._agent;
    var v1069 = v1184.indexOf("opera");
    v798 = v1069 == -1
  }
  return v798
}
function v1(var_name) {
  var v1070 = window.location;
  var v799 = v1070.search;
  var query$$2 = v799.substring(1);
  var vars = query$$2.split("&");
  var i$$1 = 0;
  var v1071 = vars.length;
  var v802 = i$$1 < v1071;
  for(;v802;) {
    var v800 = vars[i$$1];
    var pair = v800.split("=");
    var v1072 = pair[0];
    var v801 = v1072 == var_name;
    if(v801) {
      return pair[1]
    }
    i$$1 = i$$1 + 1;
    var v1073 = vars.length;
    v802 = i$$1 < v1073
  }
  return null
}
function insertHeader() {
  JAMScript.callIntrospect(AJS.DI, AJS, [tmpl_header], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function insertMenu(current_page) {
  function v0(item$$1) {
    var v1074 = item$$1.className;
    var v804 = v1074 == current_page;
    if(v804) {
      var v1075 = JAMScript.call(AJS.$bytc, AJS, ["a", null, item$$1]);
      var v803 = v1075[0];
      JAMScript.callIntrospect(AJS.addClass, AJS, [v803, "current"], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C)
    }
    JAMScript.callIntrospect(AJS.ACN, AJS, [menu, item$$1], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    return
  }
  function create_item(cls$$3, name$$34) {
    var v805 = {"class":cls$$3};
    var item = JAMScript.callIntrospect(AJS.LI, AJS, [v805], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    var v1185 = LINKS[cls$$3];
    var v1076 = {href:v1185};
    var v806 = JAMScript.callIntrospect(AJS.A, AJS, [v1076, name$$34], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    JAMScript.callIntrospect(AJS.ACN, AJS, [item, v806], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
    return item
  }
  var v807 = {id:"menu"};
  var menu = JAMScript.callIntrospect(AJS.UL, AJS, [v807], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  var v808 = create_item("installation", "Installation");
  var v809 = create_item("examples", "Examples");
  var v810 = create_item("nrm_usage", "Normal usage");
  var v811 = create_item("adv_usage", "Advance usage");
  var v812 = create_item("cmpr", "Compressing GreyBox");
  var v813 = create_item("about", "About");
  var items = [v808, v809, v810, v811, v812, v813];
  JAMScript.callIntrospect(AJS.map, AJS, [items, v0], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  JAMScript.callIntrospect(AJS.DI, AJS, [menu], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
function insertCode() {
  var code$$2 = JAMScript.call(AJS.join, AJS, ["\n", arguments]);
  var result$$2 = "<pre><code>";
  var v814 = code$$2.replace(/</g, "&lt;");
  code$$2 = v814.replace(/>/g, "&gt;");
  result$$2 = result$$2 + code$$2;
  result$$2 = result$$2 + "</code></pre>";
  JAMScript.callIntrospect(document.write, document, [result$$2], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
  return
}
var GB_ROOT_DIR = "./";
var v1077 = window.AJS;
var v818 = !v1077;
if(v818) {
  var v1078 = navigator.userAgent;
  var v815 = v1078.toLowerCase();
  var v816 = navigator.productSub;
  var AJS = {BASE_URL:"", ajaxErrorHandler:null, getQueryArgument:v1, _agent:v815, _agent_version:v816, isIe:v2, isIe8:v3, isSafari:v4, isOpera:v5, isMozilla:v6, isMac:v7, isCamino:v8, createArray:v9, forceArray:v10, join:v12, isIn:v13, getIndex:v14, getFirst:v15, getLast:v16, getRandom:v17, update:v18, flattenList:v20, flattenElmArguments:v21, map:v22, rmap:v23, filter:v25, partial:v27, getElement:v28, getElements:v29, getElementsByTagAndClassName:v30, nodeName:v31, _nodeWalk:v35, getParentBytc:v37, 
  getChildBytc:v38, hasParent:v39, getPreviousSiblingBytc:v41, getNextSiblingBytc:v43, getBody:v44, getFormElement:v47, getSelectValue:v48, documentInsert:v49, appendChildNodes:v51, appendToTop:v52, replaceChildNodes:v53, insertAfter:v54, insertBefore:v55, swapDOM:v56, removeElement:v58, createDOM:v59, _createDomShortcuts:v62, setHTML:v64, setVisibility:v65, showElement:v66, hideElement:v67, isElementHidden:v68, isElementShown:v69, setStyle:v73, __cssDim:v74, setWidth:v75, setHeight:v76, setLeft:v77, 
  setRight:v78, setTop:v79, setClass:v81, addClass:v83, hasClass:v84, removeClass:v86, setOpacity:v87, HTML2DOM:v88, preloadImages:v91, RND:v92, getXMLHttpRequest:v98, getRequest:v99, serializeJSON:v100, loadJSON:v101, evalTxt:v102, evalScriptTags:v103, encodeArguments:v104, _reprString:v105, _reprDate:v106, getMousePos:v107, getScrollTop:v108, absolutePosition:v109, getWindowSize:v110, isOverlapping:v111, getEventElm:v112, setEventKey:v113, onEvent:v115, ready_bound:false, is_ready:false, bindReady:v119, 
  ready_list:[], ready:v121, _f_guid:0, _wipe_guid:0, myaddEventListener:v124, handleEvent:v126, removeEventListener:v128, bind:v129, bindMethods:v130, preventDefault:v131, _listenOnce:v132, _getRealScope:v134, _reccruing_tos:{}, setSingleTimeout:v135, keys:v136, values:v137, urlencode:v138, urldecode:v139, isDefined:v140, isArray:v141, isString:v142, isNumber:v143, isObject:v144, isFunction:v145, isDict:v146, exportToGlobalScope:v147, log:v148, withScope:v149, strip:v150, trim_if_needed:v151};
  AJS.Class = v152;
  var v817 = AJS.Class;
  v817.prototype = {extend:v153, implement:v154, _parentize:v156};
  AJS.$ = AJS.getElement;
  AJS.$$ = AJS.getElements;
  AJS.$f = AJS.getFormElement;
  AJS.$b = AJS.bind;
  AJS.$p = AJS.partial;
  AJS.$FA = AJS.forceArray;
  AJS.$A = AJS.createArray;
  AJS.DI = AJS.documentInsert;
  AJS.ACN = AJS.appendChildNodes;
  AJS.RCN = AJS.replaceChildNodes;
  AJS.AEV = AJS.myaddEventListener;
  AJS.REV = AJS.removeEventListener;
  AJS.$bytc = AJS.getElementsByTagAndClassName;
  AJS.$AP = AJS.absolutePosition;
  AJS.loadJSONDoc = AJS.loadJSON;
  AJS.queryArguments = AJS.encodeArguments;
  AJS.$gp = AJS.getParentBytc;
  AJS.$gc = AJS.getChildBytc;
  AJS.$sv = AJS.setVisibility;
  AJS.generalErrorback = null;
  AJS.generalCallback = null;
  AJSDeferred = v157;
  AJSDeferred.prototype = {excCallbackSeq:v158, callback:v159, errback:v160, addErrback:v161, addCallback:v162, abort:v163, addCallbacks:v164, _onreadystatechange:v165, sendReq:v166};
  JAMScript.call(AJS._createDomShortcuts, AJS, [])
}
script_loaded = true;
JAMScript.call(AJS.exportToGlobalScope, AJS, []);
JAMScript.call(AJS.bindReady, AJS, []);
var v819 = {0:"ffffff", 1:"ffffee", 2:"ffffdd", 3:"ffffcc", 4:"ffffbb", 5:"ffffaa", 6:"ffff99"};
AJS.fx = {_shades:v819, highlight:v168, fadeIn:v169, fadeOut:v170, setWidth:v171, setHeight:v172};
var v820 = AJS.fx;
var v1079 = AJS.Class;
var v1080 = {init:v175, setOptions:v176, step:v177, setNow:v178, compute:v179, clearTimer:v180, _start:v181, custom:v182, set:v183, setStyle:v184};
var v1271 = JAMScript.new(v1079, [v1080]);
v820.Base = v1271;
var v821 = AJS.fx;
var v1186 = AJS.fx;
var v1081 = v1186.Base;
var v1082 = {init:v185, increase:v186};
var v1272 = JAMScript.callIntrospect(v1081.extend, v1081, [v1082], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v821.Style = v1272;
var v822 = AJS.fx;
var v1187 = AJS.fx;
var v1083 = v1187.Base;
var v1084 = {init:v187, setNow:v188, custom:v189, increase:v190};
var v1273 = JAMScript.callIntrospect(v1083.extend, v1083, [v1084], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
v822.Styles = v1273;
var v823 = AJS.fx;
v823.Transitions = {linear:v191, sineInOut:v192};
script_loaded = true;
var v824 = ['<div id="top"> <img src="logo.gif" alt="" /> <br />', '<span style="font-weight: bold; color: #333">A pop-up window that doesn\'t suck.</span>', "</div>"];
var tmpl_header = JAMScript.call(AJS.join, AJS, ["", v824]);
var LINKS = {"installation":"installation.html", "examples":"examples.html", "nrm_usage":"normal_usage.html", "adv_usage":"advance_usage.html", "cmpr":"compressing_greybox.html", "about":"about.html"};
var GB_CURRENT = null;
GB_hide = v193;
var v825 = AJS.Class;
var v826 = {init:v194, addCallback:v195, show:v197, hide:v202, update:v203, createElements:v205, removeFrame:v206, startLoading:v207, setOverlayDimension:v208, initOverlay:v209, initFrame:v210, onHide:v211, onShow:v212, setFrameSize:v213, setWindowPosition:v214, initHook:v215};
GreyBox = JAMScript.new(v825, [v826]);
_GB_update = v216;
_GB_setOverlayDimension = v217;
var v827 = GB_ROOT_DIR + "indicator.gif";
JAMScript.callIntrospect(AJS.preloadImages, AJS, [v827], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
script_loaded = true;
GB_showImage = v218;
GB_showPage = v219;
var v828 = {init:v220, initHook:v221, setFrameSize:v222, _setHeaderPos:v223, setWindowPosition:v224, onHide:v225, onShow:v226};
GB_Gallery = JAMScript.callIntrospect(GreyBox.extend, GreyBox, [v828], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
var v829 = GB_ROOT_DIR + "g_close.gif";
JAMScript.callIntrospect(AJS.preloadImages, AJS, [v829], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
GB_show = v227;
GB_showCenter = v228;
GB_showFullScreen = v229;
var v830 = {init:v230, initHook:v235, setFrameSize:v236, setWindowPosition:v237};
GB_Window = JAMScript.callIntrospect(GreyBox.extend, GreyBox, [v830], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
var v831 = GB_ROOT_DIR + "w_close.gif";
var v832 = GB_ROOT_DIR + "header_bg.gif";
JAMScript.callIntrospect(AJS.preloadImages, AJS, [v831, v832], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
GB_showFullScreenSet = v238;
GB_showImageSet = v239;
var v833 = {init:v240, showSet:v241, updateStatus:v242, _setCaption:v243, updateFrame:v244, switchPrev:v245, switchNext:v246};
GB_Sets = JAMScript.callIntrospect(GB_Gallery.extend, GB_Gallery, [v833], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
JAMScript.callIntrospect(AJS.AEV, AJS, [window, "load", v247], JAMScript.introspectors.processBEAFBB2FD8125A1CE4C97F75106BD93D0D091F0C);
insertHeader();
insertMenu("examples");

