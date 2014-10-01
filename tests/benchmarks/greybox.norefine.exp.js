// greybox.js
function v247() {
  JAM.call(AJS.preloadImages, AJS, [GB_ROOT_DIR + "next.gif", GB_ROOT_DIR + "prev.gif"], JAM.policy.p1);
  return
}
function v246() {
  if(this.current_index != this.current_set.length - 1) {
    this.current_index = this.current_index + 1;
    this.updateFrame();
    this.updateStatus()
  }
  return
}
function v245() {
  if(this.current_index != 0) {
    this.current_index = this.current_index - 1;
    this.updateFrame();
    this.updateStatus()
  }
  return
}
function v244() {
  var item$$3 = this.current_set[this.current_index];
  JAM.call(this._setCaption, this, [item$$3.caption], JAM.policy.p1);
  this.url = item$$3.url;
  this.startLoading();
  return
}
function v243(caption$$5) {
  JAM.call(AJS.setHTML, AJS, [JAM.call(AJS.$, AJS, ["GB_caption"]), caption$$5], JAM.policy.p1);
  return
}
function v242() {
  JAM.call(AJS.setHTML, AJS, [GB_STATUS, this.current_index + 1 + " / " + this.current_set.length], JAM.policy.p1);
  if(this.current_index == 0) {
    JAM.call(AJS.addClass, AJS, [this.btn_prev, "disabled"], JAM.policy.p1)
  }else {
    JAM.call(AJS.removeClass, AJS, [this.btn_prev, "disabled"], JAM.policy.p1)
  }
  if(this.current_index == this.current_set.length - 1) {
    JAM.call(AJS.addClass, AJS, [this.btn_next, "disabled"], JAM.policy.p1)
  }else {
    JAM.call(AJS.removeClass, AJS, [this.btn_next, "disabled"], JAM.policy.p1)
  }
  return
}
function v241(start_index$$4) {
  this.current_index = start_index$$4;
  var item$$2 = this.current_set[this.current_index];
  JAM.call(this.show, this, [item$$2.url], JAM.policy.p1);
  JAM.call(this._setCaption, this, [item$$2.caption], JAM.policy.p1);
  var v1246 = JAM.call(AJS.IMG, AJS, [{"class":"left", src:this.img_prev}], JAM.policy.p1);
  this.btn_prev = v1246;
  var v1247 = JAM.call(AJS.IMG, AJS, [{"class":"right", src:this.img_next}], JAM.policy.p1);
  this.btn_next = v1247;
  JAM.call(AJS.AEV, AJS, [this.btn_prev, "click", JAM.call(AJS.$b, AJS, [this.switchPrev, this], JAM.policy.p1)], JAM.policy.p1);
  JAM.call(AJS.AEV, AJS, [this.btn_next, "click", JAM.call(AJS.$b, AJS, [this.switchNext, this], JAM.policy.p1)], JAM.policy.p1);
  GB_STATUS = JAM.call(AJS.SPAN, AJS, [{"class":"GB_navStatus"}], JAM.policy.p1);
  JAM.call(AJS.ACN, AJS, [JAM.call(AJS.$, AJS, ["GB_middle"]), this.btn_prev, GB_STATUS, this.btn_next], JAM.policy.p1);
  this.updateStatus();
  return
}
function v240(options$$20, set$$2) {
  JAM.call(this.parent, this, [options$$20], JAM.policy.p1);
  if(!this.img_next) {
    this.img_next = this.root_dir + "next.gif"
  }
  if(!this.img_prev) {
    this.img_prev = this.root_dir + "prev.gif"
  }
  this.current_set = set$$2;
  return
}
function v239(set$$1, start_index$$3, callback_fn$$6) {
  var options$$19 = {type:"image", fullscreen:false, center_win:true, width:300, height:300};
  var gb_sets$$1 = JAM.new(GB_Sets, [options$$19, set$$1]);
  JAM.call(gb_sets$$1.addCallback, gb_sets$$1, [callback_fn$$6], JAM.policy.p1);
  JAM.call(gb_sets$$1.showSet, gb_sets$$1, [start_index$$3 - 1]);
  return false
}
function v238(set, start_index$$2, callback_fn$$5) {
  var options$$18 = {type:"page", fullscreen:true, center_win:false};
  var gb_sets = JAM.new(GB_Sets, [options$$18, set]);
  JAM.call(gb_sets.addCallback, gb_sets, [callback_fn$$5], JAM.policy.p1);
  JAM.call(gb_sets.showSet, gb_sets, [start_index$$2 - 1]);
  return false
}
function v237() {
  var page_size$$4 = AJS.getWindowSize();
  JAM.call(AJS.setLeft, AJS, [this.g_window, (page_size$$4.w - this.width) / 2 - 13], JAM.policy.p1);
  if(!this.center_win) {
    JAM.call(AJS.setTop, AJS, [this.g_window, AJS.getScrollTop()], JAM.policy.p1)
  }else {
    var fl$$1 = (page_size$$4.h - this.height) / 2 - 20 + AJS.getScrollTop();
    if(fl$$1 < 0) {
      fl$$1 = 0
    }
    JAM.call(AJS.setTop, AJS, [this.g_window, fl$$1], JAM.policy.p1)
  }
  return
}
function v236() {
  if(this.fullscreen) {
    var page_size$$3 = AJS.getWindowSize();
    overlay_h = page_size$$3.h;
    var v1248 = JAM.call(Math.round, Math, [this.overlay.offsetWidth - this.overlay.offsetWidth / 100 * 10], JAM.policy.p1);
    this.width = v1248;
    var v1249 = JAM.call(Math.round, Math, [overlay_h - overlay_h / 100 * 10], JAM.policy.p1);
    this.height = v1249
  }
  JAM.call(AJS.setWidth, AJS, [this.header, this.width + 6], JAM.policy.p1);
  JAM.call(AJS.setWidth, AJS, [this.iframe, this.width], JAM.policy.p1);
  JAM.call(AJS.setHeight, AJS, [this.iframe, this.height], JAM.policy.p1);
  return
}
function v235() {
  function v234() {
    JAM.call(AJS.removeClass, AJS, [span, "click"], JAM.policy.p1);
    return
  }
  function v233() {
    JAM.call(AJS.addClass, AJS, [span, "click"], JAM.policy.p1);
    return
  }
  function v232() {
    JAM.call(AJS.removeClass, AJS, [span, "on"], JAM.policy.p1);
    return
  }
  function v231() {
    JAM.call(AJS.addClass, AJS, [span, "on"], JAM.policy.p1);
    return
  }
  JAM.call(AJS.addClass, AJS, [this.g_window, "GB_Window"], JAM.policy.p1);
  var v1250 = JAM.call(AJS.TABLE, AJS, [{"class":"header"}], JAM.policy.p1);
  this.header = v1250;
  this.header.style.backgroundImage = "url(" + this.img_header + ")";
  var td_caption$$1 = JAM.call(AJS.TD, AJS, [{"class":"caption"}, this.caption], JAM.policy.p1);
  var td_close$$1 = JAM.call(AJS.TD, AJS, [{"class":"close"}], JAM.policy.p1);
  if(this.show_close_img) {
    var img_close$$1 = JAM.call(AJS.IMG, AJS, [{"src":this.img_close}], JAM.policy.p1);
    var span = JAM.call(AJS.SPAN, AJS, ["Close"]);
    var btn = JAM.call(AJS.DIV, AJS, [img_close$$1, span], JAM.policy.p1);
    JAM.call(AJS.AEV, AJS, [[img_close$$1, span], "mouseover", v231], JAM.policy.p1);
    JAM.call(AJS.AEV, AJS, [[img_close$$1, span], "mouseout", v232], JAM.policy.p1);
    JAM.call(AJS.AEV, AJS, [[img_close$$1, span], "mousedown", v233], JAM.policy.p1);
    JAM.call(AJS.AEV, AJS, [[img_close$$1, span], "mouseup", v234], JAM.policy.p1);
    JAM.call(AJS.AEV, AJS, [[img_close$$1, span], "click", GB_hide], JAM.policy.p1);
    JAM.call(AJS.ACN, AJS, [td_close$$1, btn], JAM.policy.p1)
  }
  tbody_header = AJS.TBODY();
  JAM.call(AJS.ACN, AJS, [tbody_header, JAM.call(AJS.TR, AJS, [td_caption$$1, td_close$$1], JAM.policy.p1)], JAM.policy.p1);
  JAM.call(AJS.ACN, AJS, [this.header, tbody_header], JAM.policy.p1);
  JAM.call(AJS.ACN, AJS, [this.top_cnt, this.header], JAM.policy.p1);
  if(this.fullscreen) {
    JAM.call(AJS.AEV, AJS, [window, "scroll", JAM.call(AJS.$b, AJS, [this.setWindowPosition, this], JAM.policy.p1)], JAM.policy.p1)
  }
  return
}
function v230(options$$17) {
  JAM.call(this.parent, this, [{}]);
  this.img_header = this.root_dir + "header_bg.gif";
  this.img_close = this.root_dir + "w_close.gif";
  this.show_close_img = true;
  JAM.call(AJS.update, AJS, [this, options$$17], JAM.policy.p1);
  JAM.call(this.addCallback, this, [this.callback_fn], JAM.policy.p1);
  return
}
function v229(caption$$4, url$$11, callback_fn$$4) {
  var options$$16 = {caption:caption$$4, fullscreen:true, callback_fn:callback_fn$$4};
  var win$$4 = JAM.new(GB_Window, [options$$16]);
  return JAM.call(win$$4.show, win$$4, [url$$11], JAM.policy.p1)
}
function v228(caption$$3, url$$10, height$$9, width$$10, callback_fn$$3) {
  var options$$15 = {caption:caption$$3, center_win:true, height:height$$9 || 500, width:width$$10 || 500, fullscreen:false, callback_fn:callback_fn$$3};
  var win$$3 = JAM.new(GB_Window, [options$$15]);
  return JAM.call(win$$3.show, win$$3, [url$$10], JAM.policy.p1)
}
function v227(caption$$2, url$$9, height$$8, width$$9, callback_fn$$2) {
  var options$$14 = {caption:caption$$2, height:height$$8 || 500, width:width$$9 || 500, fullscreen:false, callback_fn:callback_fn$$2};
  var win$$2 = JAM.new(GB_Window, [options$$14]);
  return JAM.call(win$$2.show, win$$2, [url$$9], JAM.policy.p1)
}
function v226() {
  if(this.use_fx) {
    var v327 = AJS.fx;
    JAM.call(v327.fadeIn, v327, [this.header, {to:1}], JAM.policy.p1)
  }else {
    JAM.call(AJS.setOpacity, AJS, [this.header, 1], JAM.policy.p1)
  }
  return
}
function v225() {
  JAM.call(AJS.removeElement, AJS, [this.header], JAM.policy.p1);
  JAM.call(AJS.removeClass, AJS, [this.g_window, "GB_Gallery"], JAM.policy.p1);
  return
}
function v224() {
  var overlay_w$$1 = this.overlay.offsetWidth;
  var page_size$$2 = AJS.getWindowSize();
  JAM.call(AJS.setLeft, AJS, [this.g_window, (overlay_w$$1 - 50 - this.width) / 2], JAM.policy.p1);
  var header_top = AJS.getScrollTop() + 55;
  if(!this.center_win) {
    JAM.call(AJS.setTop, AJS, [this.g_window, header_top], JAM.policy.p1)
  }else {
    var fl = (page_size$$2.h - this.height) / 2 + 20 + AJS.getScrollTop();
    if(fl < 0) {
      fl = 0
    }
    if(header_top > fl) {
      fl = header_top
    }
    JAM.call(AJS.setTop, AJS, [this.g_window, fl], JAM.policy.p1)
  }
  this._setHeaderPos();
  return
}
function v223() {
  JAM.call(AJS.setTop, AJS, [this.header, AJS.getScrollTop() + 10], JAM.policy.p1);
  return
}
function v222() {
  var overlay_w = this.overlay.offsetWidth;
  var page_size$$1 = AJS.getWindowSize();
  if(this.fullscreen) {
    this.width = overlay_w - 40;
    this.height = page_size$$1.h - 80
  }
  JAM.call(AJS.setWidth, AJS, [this.iframe, this.width], JAM.policy.p1);
  JAM.call(AJS.setHeight, AJS, [this.iframe, this.height], JAM.policy.p1);
  JAM.call(AJS.setWidth, AJS, [this.header, overlay_w], JAM.policy.p1);
  return
}
function v221() {
  JAM.call(AJS.addClass, AJS, [this.g_window, "GB_Gallery"], JAM.policy.p1);
  var inner = JAM.call(AJS.DIV, AJS, [{"class":"inner"}], JAM.policy.p1);
  var v1251 = JAM.call(AJS.DIV, AJS, [{"class":"GB_header"}, inner], JAM.policy.p1);
  this.header = v1251;
  JAM.call(AJS.setOpacity, AJS, [this.header, 0], JAM.policy.p1);
  var v359 = AJS.getBody();
  JAM.call(v359.insertBefore, v359, [this.header, this.overlay.nextSibling], JAM.policy.p1);
  var td_caption = JAM.call(AJS.TD, AJS, [{"id":"GB_caption", "class":"caption", "width":"40%"}, this.caption], JAM.policy.p1);
  var td_middle = JAM.call(AJS.TD, AJS, [{"id":"GB_middle", "class":"middle", "width":"20%"}], JAM.policy.p1);
  var img_close = JAM.call(AJS.IMG, AJS, [{"src":this.img_close}], JAM.policy.p1);
  JAM.call(AJS.AEV, AJS, [img_close, "click", GB_hide], JAM.policy.p1);
  var td_close = JAM.call(AJS.TD, AJS, [{"class":"close", "width":"40%"}, img_close], JAM.policy.p1);
  var tbody = JAM.call(AJS.TBODY, AJS, [JAM.call(AJS.TR, AJS, [td_caption, td_middle, td_close], JAM.policy.p1)], JAM.policy.p1);
  var table = JAM.call(AJS.TABLE, AJS, [{"cellspacing":"0", "cellpadding":0, "border":0}, tbody], JAM.policy.p1);
  JAM.call(AJS.ACN, AJS, [inner, table], JAM.policy.p1);
  if(this.fullscreen) {
    JAM.call(AJS.AEV, AJS, [window, "scroll", JAM.call(AJS.$b, AJS, [this.setWindowPosition, this], JAM.policy.p1)], JAM.policy.p1)
  }else {
    JAM.call(AJS.AEV, AJS, [window, "scroll", JAM.call(AJS.$b, AJS, [this._setHeaderPos, this], JAM.policy.p1)], JAM.policy.p1)
  }
  return
}
function v220(options$$13) {
  JAM.call(this.parent, this, [{}]);
  this.img_close = this.root_dir + "g_close.gif";
  JAM.call(AJS.update, AJS, [this, options$$13], JAM.policy.p1);
  JAM.call(this.addCallback, this, [this.callback_fn], JAM.policy.p1);
  return
}
function v219(caption$$1, url$$8, callback_fn$$1) {
  var options$$12 = {type:"page", caption:caption$$1, callback_fn:callback_fn$$1, fullscreen:true, center_win:false};
  var win$$1 = JAM.new(GB_Gallery, [options$$12]);
  return JAM.call(win$$1.show, win$$1, [url$$8], JAM.policy.p1)
}
function v218(caption, url$$7, callback_fn) {
  var options$$11 = {width:300, height:300, type:"image", fullscreen:false, center_win:true, caption:caption, callback_fn:callback_fn};
  var win = JAM.new(GB_Gallery, [options$$11]);
  return JAM.call(win.show, win, [url$$7], JAM.policy.p1)
}
function v217() {
  if(GB_CURRENT) {
    GB_CURRENT.setOverlayDimension()
  }
  return
}
function v216() {
  if(GB_CURRENT) {
    GB_CURRENT.update()
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
  if(!this.iframe) {
    var d$$5 = {"name":"GB_frame", "class":"GB_frame", "frameBorder":0};
    if(AJS.isIe()) {
      d$$5.src = 'javascript:false;document.write("");'
    }
    var v1252 = JAM.call(AJS.IFRAME, AJS, [d$$5], JAM.policy.p1);
    this.iframe = v1252;
    var v1253 = JAM.call(AJS.DIV, AJS, [{"class":"content"}, this.iframe], JAM.policy.p1);
    this.middle_cnt = v1253;
    var v1254 = AJS.DIV();
    this.top_cnt = v1254;
    var v1255 = AJS.DIV();
    this.bottom_cnt = v1255;
    JAM.call(AJS.ACN, AJS, [this.g_window, this.top_cnt, this.middle_cnt, this.bottom_cnt], JAM.policy.p1)
  }
  return
}
function v209() {
  var v1256 = JAM.call(AJS.DIV, AJS, [{"id":"GB_overlay"}], JAM.policy.p1);
  this.overlay = v1256;
  if(this.overlay_click_close) {
    JAM.call(AJS.AEV, AJS, [this.overlay, "click", GB_hide], JAM.policy.p1)
  }
  JAM.call(AJS.setOpacity, AJS, [this.overlay, 0], JAM.policy.p1);
  var v386 = AJS.getBody();
  JAM.call(v386.insertBefore, v386, [this.overlay, AJS.getBody().firstChild], JAM.policy.p1);
  return
}
function v208() {
  var page_size = AJS.getWindowSize();
  var v871 = AJS.isMozilla();
  if(!v871) {
    v871 = AJS.isOpera()
  }
  if(v871) {
    JAM.call(AJS.setWidth, AJS, [this.overlay, "100%"], JAM.policy.p1)
  }else {
    JAM.call(AJS.setWidth, AJS, [this.overlay, page_size.w], JAM.policy.p1)
  }
  var max_height = JAM.call(Math.max, Math, [AJS.getScrollTop() + page_size.h, AJS.getScrollTop() + this.height], JAM.policy.p1);
  if(max_height < AJS.getScrollTop()) {
    JAM.call(AJS.setHeight, AJS, [this.overlay, max_height], JAM.policy.p1)
  }else {
    JAM.call(AJS.setHeight, AJS, [this.overlay, AJS.getScrollTop() + page_size.h], JAM.policy.p1)
  }
  return
}
function v207() {
  var v399 = this.iframe;
  var v880 = this.src_loader + "?s=";
  var v881 = this.salt;
  this.salt = this.salt + 1;
  v399.src = v880 + v881;
  JAM.call(AJS.showElement, AJS, [this.iframe], JAM.policy.p1);
  return
}
function v206() {
  try {
    JAM.call(AJS.removeElement, AJS, [this.iframe], JAM.policy.p1)
  }catch(e$$17) {
  }
  this.iframe = null;
  return
}
function v205() {
  function v204() {
    me$$3.onShow();
    JAM.call(AJS.showElement, AJS, [me$$3.g_window], JAM.policy.p1);
    me$$3.startLoading();
    return
  }
  this.initOverlay();
  var v1257 = JAM.call(AJS.DIV, AJS, [{"id":"GB_window"}], JAM.policy.p1);
  this.g_window = v1257;
  JAM.call(AJS.hideElement, AJS, [this.g_window], JAM.policy.p1);
  var v405 = AJS.getBody();
  JAM.call(v405.insertBefore, v405, [this.g_window, this.overlay.nextSibling], JAM.policy.p1);
  this.initFrame();
  this.initHook();
  this.update();
  var me$$3 = this;
  if(this.use_fx) {
    var v408 = AJS.fx;
    JAM.call(v408.fadeIn, v408, [this.overlay, {duration:300, to:0.7, onComplete:v204}], JAM.policy.p1)
  }else {
    JAM.call(AJS.setOpacity, AJS, [this.overlay, 0.7], JAM.policy.p1);
    JAM.call(AJS.showElement, AJS, [this.g_window], JAM.policy.p1);
    this.onShow();
    this.startLoading()
  }
  JAM.call(AJS.AEV, AJS, [window, "scroll", _GB_setOverlayDimension], JAM.policy.p1);
  JAM.call(AJS.AEV, AJS, [window, "resize", _GB_update], JAM.policy.p1);
  return
}
function v203() {
  this.setOverlayDimension();
  this.setFrameSize();
  this.setWindowPosition();
  return
}
function v202(cb$$1) {
  function v201() {
    function v200(elm$$49) {
      elm$$49.style.visibility = "visible";
      return
    }
    function v199() {
      JAM.call(AJS.removeElement, AJS, [elm$$48], JAM.policy.p1);
      elm$$48 = null;
      return
    }
    function v198(fn$$17) {
      fn$$17();
      return
    }
    var c_bs = me$$2.callback_fns;
    if(c_bs != []) {
      JAM.call(AJS.map, AJS, [c_bs, v198], JAM.policy.p1)
    }
    me$$2.onHide();
    if(me$$2.use_fx) {
      var elm$$48 = me$$2.overlay;
      var v416 = AJS.fx;
      JAM.call(v416.fadeOut, v416, [me$$2.overlay, {onComplete:v199, duration:300}], JAM.policy.p1);
      JAM.call(AJS.removeElement, AJS, [me$$2.g_window], JAM.policy.p1)
    }else {
      JAM.call(AJS.removeElement, AJS, [me$$2.g_window, me$$2.overlay], JAM.policy.p1)
    }
    me$$2.removeFrame();
    JAM.call(AJS.REV, AJS, [window, "scroll", _GB_setOverlayDimension], JAM.policy.p1);
    JAM.call(AJS.REV, AJS, [window, "resize", _GB_update], JAM.policy.p1);
    var elms$$6 = [JAM.call(AJS.$bytc, AJS, ["object"]), JAM.call(AJS.$bytc, AJS, ["select"])];
    JAM.call(AJS.map, AJS, [JAM.call(AJS.flattenList, AJS, [elms$$6], JAM.policy.p1), v200], JAM.policy.p1);
    GB_CURRENT = null;
    if(me$$2.reload_on_close) {
      window.location.reload()
    }
    if(JAM.call(AJS.isFunction, AJS, [cb$$1], JAM.policy.p1)) {
      cb$$1()
    }
    return
  }
  var me$$2 = this;
  JAM.call(setTimeout, null, [v201, 10]);
  return
}
function v197(url$$6) {
  function v196(elm$$47) {
    elm$$47.style.visibility = "hidden";
    return
  }
  GB_CURRENT = this;
  this.url = url$$6;
  var elms$$5 = [JAM.call(AJS.$bytc, AJS, ["object"]), JAM.call(AJS.$bytc, AJS, ["select"])];
  JAM.call(AJS.map, AJS, [JAM.call(AJS.flattenList, AJS, [elms$$5], JAM.policy.p1), v196], JAM.policy.p1);
  this.createElements();
  return false
}
function v195(fn$$16) {
  if(fn$$16) {
    var v433 = this.callback_fns;
    JAM.call(v433.push, v433, [fn$$16], JAM.policy.p1)
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
  this.src_loader = this.root_dir + "loader_frame.html";
  var h_www = window.location.hostname.indexOf("www");
  var src_www = this.src_loader.indexOf("www");
  var v884 = h_www != -1;
  if(v884) {
    v884 = src_www == -1
  }
  if(v884) {
    var v1258 = this.src_loader.replace("://", "://www.");
    this.src_loader = v1258
  }
  var v885 = h_www == -1;
  if(v885) {
    v885 = src_www != -1
  }
  if(v885) {
    var v1259 = this.src_loader.replace("://www.", "://");
    this.src_loader = v1259
  }
  this.show_loading = true;
  JAM.call(AJS.update, AJS, [this, options$$10], JAM.policy.p1);
  return
}
function v193(cb) {
  JAM.call(GB_CURRENT.hide, GB_CURRENT, [cb], JAM.policy.p1);
  return
}
function v192(t$$2, b$$1, c$$2, d$$4) {
  return-c$$2 / 2 * (JAM.call(Math.cos, Math, [Math.PI * t$$2 / d$$4], JAM.policy.p1) - 1) + b$$1
}
function v191(t$$1, b, c$$1, d$$3) {
  return c$$1 * t$$1 / d$$3 + b
}
function v190() {
  var p$$6;
  for(p$$6 in this.now) {
    JAM.call(this.setStyle, this, [this.elm, p$$6, this.now[p$$6]], JAM.policy.p1)
  }
  return
}
function v189(obj$$23) {
  var v890 = this.timer;
  if(v890) {
    v890 = this.options.wait
  }
  if(v890) {
    return
  }
  var from$$3 = {};
  var to$$4 = {};
  for(p in obj$$23) {
    JAM.set(from$$3, p, obj$$23[p][0]);
    JAM.set(to$$4, p, obj$$23[p][1])
  }
  return JAM.call(this._start, this, [from$$3, to$$4], JAM.policy.p1)
}
function v188() {
  for(p in this.from) {
    var v449 = this.now;
    var v450 = p;
    var v1260 = JAM.call(this.compute, this, [this.from[p], this.to[p]], JAM.policy.p1);
    JAM.set(v449, v450, v1260)
  }
  return
}
function v187(elm$$46, options$$9) {
  this.parent();
  var v1261 = JAM.call(AJS.$, AJS, [elm$$46], JAM.policy.p1);
  this.elm = v1261;
  JAM.call(this.setOptions, this, [options$$9], JAM.policy.p1);
  this.now = {};
  return
}
function v186() {
  JAM.call(this.setStyle, this, [this.elm, this.property, this.now], JAM.policy.p1);
  return
}
function v185(elm$$45, property$$6, options$$8) {
  this.parent();
  this.elm = elm$$45;
  JAM.call(this.setOptions, this, [options$$8], JAM.policy.p1);
  this.property = property$$6;
  return
}
function v184(elm$$44, property$$5, val$$4) {
  if(this.property == "opacity") {
    JAM.call(AJS.setOpacity, AJS, [elm$$44, val$$4], JAM.policy.p1)
  }else {
    JAM.call(AJS.setStyle, AJS, [elm$$44, property$$5, val$$4], JAM.policy.p1)
  }
  return
}
function v183(to$$3) {
  this.now = to$$3;
  this.increase();
  return this
}
function v182(from$$2, to$$2) {
  return JAM.call(this._start, this, [from$$2, to$$2], JAM.policy.p1)
}
function v181(from$$1, to$$1) {
  if(!this.options.wait) {
    this.clearTimer()
  }
  if(this.timer) {
    return
  }
  JAM.call(setTimeout, null, [JAM.call(AJS.$p, AJS, [this.options.onStart, this.elm], JAM.policy.p1), 10]);
  this.from = from$$1;
  this.to = to$$1;
  var v1262 = (new Date).getTime();
  this.time = v1262;
  var v1263 = JAM.call(setInterval, null, [this.step, JAM.call(Math.round, Math, [1E3 / this.options.fps], JAM.policy.p1)]);
  this.timer = v1263;
  return this
}
function v180() {
  clearInterval(this.timer);
  this.timer = null;
  return this
}
function v179(from, to) {
  var change = to - from;
  var v463 = this.options;
  return JAM.call(v463.transition, v463, [this.cTime, from, change, this.options.duration], JAM.policy.p1)
}
function v178() {
  var v1264 = JAM.call(this.compute, this, [this.from, this.to], JAM.policy.p1);
  this.now = v1264;
  return
}
function v177() {
  var time = (new Date).getTime();
  if(time < this.time + this.options.duration) {
    this.cTime = time - this.time;
    this.setNow()
  }else {
    JAM.call(setTimeout, null, [JAM.call(AJS.$b, AJS, [this.options.onComplete, this, [this.elm]], JAM.policy.p1), 10]);
    this.clearTimer();
    this.now = this.to
  }
  this.increase();
  return
}
function v176(options$$7) {
  JAM.call(AJS.update, AJS, [this.options, options$$7], JAM.policy.p1);
  return
}
function v175(options$$6) {
  function v174() {
    return
  }
  function v173() {
    return
  }
  this.options = {onStart:v173, onComplete:v174, transition:AJS.fx.Transitions.sineInOut, duration:500, wait:true, fps:50};
  JAM.call(AJS.update, AJS, [this.options, options$$6], JAM.policy.p1);
  JAM.call(AJS.bindMethods, AJS, [this], JAM.policy.p1);
  return
}
function v172(elm$$43, options$$5) {
  var s$$5 = JAM.new(AJS.fx.Style, [elm$$43, "height", options$$5]);
  return JAM.call(s$$5.custom, s$$5, [options$$5.from, options$$5.to], JAM.policy.p1)
}
function v171(elm$$42, options$$4) {
  var s$$4 = JAM.new(AJS.fx.Style, [elm$$42, "width", options$$4]);
  return JAM.call(s$$4.custom, s$$4, [options$$4.from, options$$4.to], JAM.policy.p1)
}
function v170(elm$$41, options$$3) {
  options$$3 = options$$3 || {};
  if(!options$$3.from) {
    options$$3.from = 1
  }
  if(!options$$3.to) {
    options$$3.to = 0
  }
  options$$3.duration = 300;
  var s$$3 = JAM.new(AJS.fx.Style, [elm$$41, "opacity", options$$3]);
  return JAM.call(s$$3.custom, s$$3, [options$$3.from, options$$3.to], JAM.policy.p1)
}
function v169(elm$$40, options$$2) {
  options$$2 = options$$2 || {};
  if(!options$$2.from) {
    options$$2.from = 0;
    JAM.call(AJS.setOpacity, AJS, [elm$$40, 0], JAM.policy.p1)
  }
  if(!options$$2.to) {
    options$$2.to = 1
  }
  var s$$2 = JAM.new(AJS.fx.Style, [elm$$40, "opacity", options$$2]);
  return JAM.call(s$$2.custom, s$$2, [options$$2.from, options$$2.to], JAM.policy.p1)
}
function v168(elm$$39, options$$1) {
  function v167() {
    if(this.now == 7) {
      elm$$39.style.backgroundColor = "#fff"
    }else {
      elm$$39.style.backgroundColor = "#" + AJS.fx._shades[JAM.call(Math.floor, Math, [this.now], JAM.policy.p1)]
    }
    return
  }
  var base$$1 = new AJS.fx.Base;
  var v495 = base$$1;
  var v1265 = JAM.call(AJS.$, AJS, [elm$$39], JAM.policy.p1);
  v495.elm = v1265;
  base$$1.options.duration = 600;
  JAM.call(base$$1.setOptions, base$$1, [options$$1], JAM.policy.p1);
  JAM.call(AJS.update, AJS, [base$$1, {increase:v167}], JAM.policy.p1);
  return JAM.call(base$$1.custom, base$$1, [6, 0])
}
function v166(data$$21) {
  var req$$6 = this.req;
  var http_method = this.http_method;
  var http_url = this.http_url;
  if(http_method == "POST") {
    JAM.call(req$$6.open, req$$6, [http_method, http_url, true], JAM.policy.p1);
    var v498 = req$$6;
    var v1266 = JAM.call(AJS.$b, AJS, [this._onreadystatechange, this], JAM.policy.p1);
    JAM.set(v498, "onreadystatechange", v1266);
    req$$6.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    if(JAM.call(AJS.isObject, AJS, [data$$21], JAM.policy.p1)) {
      JAM.call(req$$6.send, req$$6, [JAM.call(AJS.encodeArguments, AJS, [data$$21], JAM.policy.p1)], JAM.policy.p1)
    }else {
      if(JAM.call(AJS.isDefined, AJS, [data$$21], JAM.policy.p1)) {
        JAM.call(req$$6.send, req$$6, [data$$21], JAM.policy.p1)
      }else {
        req$$6.send("")
      }
    }
  }else {
    req$$6.open("GET", http_url, true);
    var v502 = req$$6;
    var v1267 = JAM.call(AJS.$b, AJS, [this._onreadystatechange, this], JAM.policy.p1);
    JAM.set(v502, "onreadystatechange", v1267);
    req$$6.send(null)
  }
  return
}
function v165() {
  var req$$5 = this.req;
  var d$$2 = this;
  if(req$$5.readyState == 4) {
    var status = "";
    try {
      status = req$$5.status
    }catch(e$$16) {
    }
    var v917 = status == 200;
    if(!v917) {
      var v1115 = status == 304;
      if(!v1115) {
        v1115 = req$$5.responseText == null
      }
      v917 = v1115
    }
    if(v917) {
      this.callback()
    }else {
      this.errback()
    }
  }
  return
}
function v164(fn1, fn2) {
  JAM.call(this.addCallback, this, [fn1], JAM.policy.p1);
  JAM.call(this.addErrback, this, [fn2], JAM.policy.p1);
  return
}
function v163() {
  this.req.abort();
  return
}
function v162(fn$$15) {
  var v507 = this.callbacks;
  JAM.call(v507.unshift, v507, [fn$$15], JAM.policy.p1);
  return
}
function v161(fn$$14) {
  var v508 = this.errbacks;
  JAM.call(v508.unshift, v508, [fn$$14], JAM.policy.p1);
  return
}
function v160() {
  if(this.errbacks.length == 0) {
    if(AJS.ajaxErrorHandler) {
      JAM.call(AJS.ajaxErrorHandler, AJS, [req.responseText, req], JAM.policy.p1)
    }else {
      var txt$$1 = this.req.responseText.substring(0, 200);
      var v920 = JAM.call(AJS.strip, AJS, [txt$$1], JAM.policy.p1);
      if(v920) {
        v920 = txt$$1.indexOf("<html") == -1
      }
      if(v920) {
        alert("Error encountered:\n" + txt$$1)
      }
    }
  }
  if(AJS.generalErrorback) {
    var result$$1 = JAM.call(AJS.generalErrorback, AJS, [this.req], JAM.policy.p1);
    if(!result$$1) {
      return
    }
  }
  JAM.call(this.excCallbackSeq, this, [this.req, this.errbacks], JAM.policy.p1);
  return
}
function v159() {
  JAM.call(this.excCallbackSeq, this, [this.req, this.callbacks], JAM.policy.p1);
  return
}
function v158(req$$4, list$$10) {
  var data$$20 = req$$4.responseText;
  if(AJS.generalCallback) {
    data$$20 = JAM.call(AJS.generalCallback, AJS, [req$$4, list$$10], JAM.policy.p1);
    if(!data$$20) {
      return
    }
  }
  var v525 = list$$10.length > 0;
  for(;v525;) {
    var fn$$13 = list$$10.pop();
    var new_data = JAM.call(fn$$13, null, [data$$20, req$$4], JAM.policy.p1);
    if(new_data) {
      data$$20 = new_data
    }else {
      if(new_data == false) {
        break
      }
    }
    v525 = list$$10.length > 0
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
    return JAM.call(cur$$1.apply, cur$$1, [this, arguments], JAM.policy.p1)
  }
  return v155
}
function v154(members$$2) {
  JAM.call(AJS.update, AJS, [this.prototype, members$$2], JAM.policy.p1);
  return
}
function v153(members$$1) {
  var parent$$2 = JAM.new(this, ["no_init"]);
  for(k in members$$1) {
    var prev = parent$$2[k];
    var cur = members$$1[k];
    var v923 = prev;
    if(v923) {
      var v1119 = prev != cur;
      if(v1119) {
        v1119 = typeof cur == "function"
      }
      v923 = v1119
    }
    if(v923) {
      cur = JAM.call(this._parentize, this, [cur, prev], JAM.policy.p1)
    }
    JAM.set(parent$$2, k, cur)
  }
  return JAM.new(AJS.Class, [parent$$2])
}
function v152(members) {
  function fn$$12() {
    if(arguments[0] != "no_init") {
      var v529 = this.init;
      return JAM.call(v529.apply, v529, [this, arguments], JAM.policy.p1)
    }
    return
  }
  fn$$12.prototype = members;
  JAM.call(AJS.update, AJS, [fn$$12, AJS.Class.prototype], JAM.policy.p1);
  return fn$$12
}
function v151(str$$9, limit, delim$$1) {
  if(str$$9.length > limit) {
    return str$$9.substring(0, limit) + (delim$$1 || "...")
  }
  return str$$9
}
function v150(str$$8) {
  return str$$8.replace(/^\s+/, "").replace(/\s+$/g, "")
}
function v149(export_scope, fn$$11) {
  JAM.call(fn$$11.apply, fn$$11, [export_scope, []], JAM.policy.p1);
  return
}
function v148(o$$7) {
  try {
    if(window._firebug) {
      var v536 = window._firebug;
      JAM.call(v536.log, v536, [o$$7], JAM.policy.p1)
    }else {
      if(window.console) {
        JAM.call(console.log, console, [o$$7], JAM.policy.p1)
      }
    }
  }catch(e$$15) {
  }
  return
}
function v147(scope$$3) {
  scope$$3 = scope$$3 || window;
  for(e in AJS) {
    if(e != "addEventListener") {
      JAM.set(scope$$3, e, AJS[e])
    }
  }
  return
}
function v146(o$$6) {
  var str_repr = String(o$$6);
  return str_repr.indexOf(" Object") != -1
}
function v145(obj$$22) {
  return typeof obj$$22 == "function"
}
function v144(obj$$21) {
  return typeof obj$$21 == "object"
}
function v143(obj$$20) {
  return typeof obj$$20 == "number"
}
function v142(obj$$19) {
  return typeof obj$$19 == "string"
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
  var v1120 = JAM.call(AJS.isDefined, AJS, [str$$7], JAM.policy.p1);
  if(v1120) {
    v1120 = str$$7.toString()
  }
  var v927 = v1120;
  if(!v927) {
    v927 = ""
  }
  var result = decodeURIComponent(v927);
  return result.replace(/\+/g, " ")
}
function v138(str$$6) {
  var v1122 = JAM.call(AJS.isDefined, AJS, [str$$6], JAM.policy.p1);
  if(v1122) {
    v1122 = str$$6.toString()
  }
  var v928 = v1122;
  if(!v928) {
    v928 = ""
  }
  return encodeURIComponent(v928)
}
function v137(obj$$17) {
  var rval$$1 = [];
  var prop$$6;
  for(prop$$6 in obj$$17) {
    JAM.call(rval$$1.push, rval$$1, [obj$$17[prop$$6]], JAM.policy.p1)
  }
  return rval$$1
}
function v136(obj$$16) {
  var rval = [];
  var prop$$5;
  for(prop$$5 in obj$$16) {
    JAM.call(rval.push, rval, [prop$$5], JAM.policy.p1)
  }
  return rval
}
function v135(name$$33, fn$$10, interval) {
  var current = AJS._reccruing_tos[name$$33];
  if(current) {
    clearTimeout(current)
  }
  var v550 = AJS._reccruing_tos;
  var v551 = name$$33;
  var v1268 = JAM.call(setTimeout, null, [fn$$10, interval]);
  JAM.set(v550, v551, v1268);
  return
}
function v134(fn$$9, extra_args$$1) {
  function v133() {
    try {
      var v552 = JAM.call(AJS.$FA, AJS, [arguments]);
      var args$$14 = JAM.call(v552.concat, v552, [extra_args$$1], JAM.policy.p1);
      return JAM.call(fn$$9.apply, fn$$9, [scope$$2, args$$14], JAM.policy.p1)
    }catch(e$$13) {
    }
    return
  }
  extra_args$$1 = JAM.call(AJS.$A, AJS, [extra_args$$1], JAM.policy.p1);
  var v553 = fn$$9._cscope;
  if(!v553) {
    v553 = window
  }
  var scope$$2 = v553;
  return v133
}
function v132(elm$$38, type$$30, fn$$8) {
  function r_fn() {
    JAM.call(AJS.removeEventListener, AJS, [elm$$38, type$$30, r_fn], JAM.policy.p1);
    JAM.call(fn$$8, null, [arguments]);
    return
  }
  return r_fn
}
function v131(e$$12) {
  if(AJS.isIe()) {
    window.event.returnValue = false
  }else {
    e$$12.preventDefault()
  }
  return
}
function v130(self$$1) {
  var k$$2;
  for(k$$2 in self$$1) {
    var func$$4 = self$$1[k$$2];
    if(typeof func$$4 == "function") {
      var v556 = self$$1;
      var v557 = k$$2;
      var v1269 = JAM.call(AJS.$b, AJS, [func$$4, self$$1], JAM.policy.p1);
      JAM.set(v556, v557, v1269)
    }
  }
  return
}
function v129(fn$$7, scope$$1, extra_args) {
  fn$$7._cscope = scope$$1;
  return JAM.call(AJS._getRealScope, AJS, [fn$$7, extra_args], JAM.policy.p1)
}
function v128(elms$$4, type$$29, handler$$7) {
  function v127(elm$$37) {
    var v931 = elm$$37.events;
    if(v931) {
      v931 = elm$$37.events[type$$29]
    }
    if(v931) {
      delete elm$$37.events[type$$29][handler$$7.$f_guid]
    }
    return
  }
  elms$$4 = JAM.call(AJS.$A, AJS, [elms$$4], JAM.policy.p1);
  JAM.call(map, null, [elms$$4, v127], JAM.policy.p1);
  return
}
function v126(event$$1) {
  function v125(handler$$6) {
    delete me$$1.events[event$$1.type][handler$$6.$f_guid];
    return
  }
  var me$$1 = this;
  var v564 = event$$1;
  if(!v564) {
    v564 = window.event
  }
  event$$1 = v564;
  if(!event$$1) {
    return
  }
  var v936 = !event$$1.ctrl;
  if(v936) {
    v936 = event$$1.type.indexOf("key") != -1
  }
  if(v936) {
    JAM.call(AJS.setEventKey, AJS, [event$$1], JAM.policy.p1)
  }
  var handlers$$1 = this.events[event$$1.type];
  var handlers_to_delete = [];
  var res$$1 = true;
  var i$$16;
  for(i$$16 in handlers$$1) {
    var handler$$5 = this.$$handleEvent = handlers$$1[i$$16];
    if(handler$$5 == AJS.handleEvent) {
      continue
    }
    res$$1 = JAM.call(handler$$5, null, [event$$1], JAM.policy.p1);
    if(handler$$5.listen_once) {
      JAM.call(handlers_to_delete.push, handlers_to_delete, [handler$$5], JAM.policy.p1)
    }
  }
  if(handlers_to_delete.length > 0) {
    JAM.call(AJS.map, AJS, [handlers_to_delete, v125], JAM.policy.p1)
  }
  return res$$1
}
function v124(elms$$3, types, handler$$4, listen_once$$1) {
  function v123(elm$$36) {
    function v122(type$$28) {
      var handlers = elm$$36.events[type$$28];
      var v939 = elm$$36 == window;
      if(v939) {
        v939 = type$$28 == "load"
      }
      if(v939) {
        var v573 = AJS.ready_list;
        JAM.call(v573.push, v573, [handler$$4], JAM.policy.p1)
      }else {
        if(type$$28 == "lazy_load") {
          type$$28 = "load"
        }
        if(!handlers) {
          handlers = JAM.set(elm$$36.events, type$$28, {});
          if(elm$$36["on" + type$$28]) {
            handlers[0] = elm$$36["on" + type$$28]
          }
        }
        if(!elm$$36._wipe_guid) {
          elm$$36._wipe_guid = AJS._wipe_guid;
          AJS._wipe_guid = AJS._wipe_guid + 1
        }
        JAM.set(handlers, handler$$4.$f_guid, handler$$4);
        JAM.call(elm$$36.addEventListener, elm$$36, [type$$28, AJS.handleEvent, false], JAM.policy.p1)
      }
      return
    }
    if(listen_once$$1) {
      handler$$4.listen_once = true
    }
    if(!handler$$4.$f_guid) {
      handler$$4.$f_guid = AJS._f_guid;
      AJS._f_guid = AJS._f_guid + 1
    }
    if(!elm$$36.events) {
      elm$$36.events = {}
    }
    JAM.call(AJS.map, AJS, [types, v122], JAM.policy.p1);
    elm$$36 = null;
    return
  }
  elms$$3 = JAM.call(AJS.$A, AJS, [elms$$3], JAM.policy.p1);
  types = JAM.call(AJS.$A, AJS, [types], JAM.policy.p1);
  JAM.call(AJS.map, AJS, [elms$$3, v123], JAM.policy.p1);
  return
}
function v121(fn$$5) {
  function v120(fn$$6) {
    JAM.call(fn$$6.call, fn$$6, [window], JAM.policy.p1);
    return
  }
  if(AJS.is_ready) {
    return
  }
  AJS.is_ready = true;
  var rt = AJS.ready_list;
  JAM.call(AJS.map, AJS, [rt, v120], JAM.policy.p1);
  AJS.ready_list = [];
  return
}
function v119() {
  function v118() {
    if(AJS.is_ready) {
      return
    }
    try {
      var v587 = document.documentElement;
      JAM.call(v587.doScroll, v587, ["left"])
    }catch(error$$2) {
      JAM.call(setTimeout, null, [arguments.callee, 0]);
      return
    }
    AJS.ready();
    return
  }
  function v117() {
    if(document.readyState === "complete") {
      JAM.call(document.detachEvent, document, ["onreadystatechange", arguments.callee]);
      AJS.ready()
    }
    return
  }
  function v116() {
    JAM.call(document.removeEventListener, document, ["DOMContentLoaded", arguments.callee, false]);
    AJS.ready();
    return
  }
  if(AJS.ready_bound) {
    return
  }
  AJS.ready_bound = true;
  if(document.addEventListener) {
    document.addEventListener("DOMContentLoaded", v116, false)
  }else {
    if(document.attachEvent) {
      JAM.call(document.attachEvent, document, ["onreadystatechange", v117]);
      var v947 = document.documentElement.doScroll;
      if(v947) {
        v947 = window == window.top
      }
      if(v947) {
        v118()
      }
    }
  }
  JAM.call(AJS.AEV, AJS, [window, "load", AJS.ready], JAM.policy.p1);
  return
}
function v115(elms$$2, type$$27, handler$$3, listen_once) {
  function v114(elm$$35) {
    if(elm$$35.events) {
      JAM.set(elm$$35.events, type$$27, {})
    }
    return
  }
  elms$$2 = JAM.call(AJS.$A, AJS, [elms$$2], JAM.policy.p1);
  JAM.call(AJS.map, AJS, [elms$$2, v114], JAM.policy.p1);
  return JAM.call(AJS.AEV, AJS, [elms$$2, type$$27, handler$$3, listen_once], JAM.policy.p1)
}
function v113(e$$11) {
  if(!e$$11) {
    e$$11 = window.event
  }
  var v600;
  if(e$$11.keyCode) {
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
    var v1129 = !e$$10.type;
    if(v1129) {
      v1129 = !e$$10.keyCode
    }
    v949 = v1129
  }
  if(v949) {
    return e$$10
  }
  var targ;
  if(!e$$10) {
    e$$10 = window.event
  }
  if(e$$10.target) {
    targ = e$$10.target
  }else {
    if(e$$10.srcElement) {
      targ = e$$10.srcElement
    }
  }
  var v950 = targ;
  if(v950) {
    v950 = targ.nodeType == 3
  }
  if(v950) {
    targ = targ.parentNode
  }
  return targ
}
function v111(elm1, elm2) {
  function getSign(v$$1) {
    if(v$$1 > 0) {
      return"+"
    }else {
      if(v$$1 < 0) {
        return"-"
      }else {
        return 0
      }
    }
    return
  }
  var pos_elm1 = JAM.call(AJS.absolutePosition, AJS, [elm1], JAM.policy.p1);
  var pos_elm2 = JAM.call(AJS.absolutePosition, AJS, [elm2], JAM.policy.p1);
  var top1 = pos_elm1.y;
  var left1 = pos_elm1.x;
  var right1 = left1 + elm1.offsetWidth;
  var bottom1 = top1 + elm1.offsetHeight;
  var top2 = pos_elm2.y;
  var left2 = pos_elm2.x;
  var right2 = left2 + elm2.offsetWidth;
  var bottom2 = top2 + elm2.offsetHeight;
  var v951 = getSign(top1 - bottom2) != getSign(bottom1 - top2);
  if(v951) {
    v951 = getSign(left1 - right2) != getSign(right1 - left2)
  }
  if(v951) {
    return true
  }
  return false
}
function v110(doc) {
  doc = doc || document;
  var win_w;
  var win_h;
  if(self.innerHeight) {
    win_w = self.innerWidth;
    win_h = self.innerHeight
  }else {
    var v952 = doc.documentElement;
    if(v952) {
      v952 = doc.documentElement.clientHeight
    }
    if(v952) {
      win_w = doc.documentElement.clientWidth;
      win_h = doc.documentElement.clientHeight
    }else {
      if(doc.body) {
        win_w = doc.body.clientWidth;
        win_h = doc.body.clientHeight
      }
    }
  }
  return{"w":win_w, "h":win_h}
}
function v109(elm$$34) {
  if(!elm$$34) {
    return{x:0, y:0}
  }
  if(elm$$34.scrollLeft) {
    return{x:elm$$34.scrollLeft, y:elm$$34.scrollTop}
  }else {
    if(elm$$34.clientX) {
      return{x:elm$$34.clientX, y:elm$$34.clientY}
    }
  }
  var posObj = {"x":elm$$34.offsetLeft, "y":elm$$34.offsetTop};
  if(elm$$34.offsetParent) {
    var next = elm$$34.offsetParent;
    for(;next;) {
      posObj.x = posObj.x + next.offsetLeft;
      posObj.y = posObj.y + next.offsetTop;
      next = next.offsetParent
    }
  }
  var v957 = AJS.isSafari();
  if(v957) {
    v957 = elm$$34.style.position == "absolute"
  }
  if(v957) {
    posObj.x = posObj.x - document.body.offsetLeft;
    posObj.y = posObj.y - document.body.offsetTop
  }
  return posObj
}
function v108() {
  var t;
  var v962 = document.documentElement;
  if(v962) {
    v962 = document.documentElement.scrollTop
  }
  if(v962) {
    t = document.documentElement.scrollTop
  }else {
    if(document.body) {
      t = document.body.scrollTop
    }
  }
  return t
}
function v107(e$$9) {
  var posx = 0;
  var posy = 0;
  if(!e$$9) {
    e$$9 = window.event
  }
  var v963 = e$$9.pageX;
  if(!v963) {
    v963 = e$$9.pageY
  }
  if(v963) {
    posx = e$$9.pageX;
    posy = e$$9.pageY
  }else {
    var v964 = e$$9.clientX;
    if(!v964) {
      v964 = e$$9.clientY
    }
    if(v964) {
      posx = e$$9.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posy = e$$9.clientY + document.body.scrollTop + document.documentElement.scrollTop
    }
  }
  return{x:posx, y:posy}
}
function v106(date$$1) {
  function leadingZero(nr) {
    if(nr < 10) {
      nr = "0" + nr
    }
    return nr
  }
  var year$$1 = date$$1.getUTCFullYear();
  var dd = date$$1.getUTCDate();
  var mm = date$$1.getUTCMonth() + 1;
  return'"' + year$$1 + "-" + mm + "-" + dd + "T" + leadingZero(date$$1.getUTCHours()) + ":" + leadingZero(date$$1.getUTCMinutes()) + ":" + leadingZero(date$$1.getUTCSeconds()) + '"'
}
function v105(o$$4) {
  return('"' + o$$4.replace(/(["\\])/g, "\\$1") + '"').replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r")
}
function v104(data$$19) {
  var post_data = [];
  for(k in data$$19) {
    JAM.call(post_data.push, post_data, [k + "=" + JAM.call(AJS.urlencode, AJS, [data$$19[k]], JAM.policy.p1)], JAM.policy.p1)
  }
  return JAM.call(post_data.join, post_data, ["&"])
}
function v103(html$$2) {
  var script_data = html$$2.match(/<script.*?>((\n|\r|.)*?)<\/script>/g);
  if(script_data != null) {
    var i$$15 = 0;
    var v648 = i$$15 < script_data.length;
    for(;v648;) {
      var script_only = script_data[i$$15].replace(/<script.*?>/g, "");
      script_only = script_only.replace(/<\/script>/g, "");
      if(JAM.isEval(eval)) {
        eval("introspect(JAM.policy.pFull) { " + script_only + " }")
      }else {
        JAM.call(eval, null, [script_only])
      }
      i$$15 = i$$15 + 1;
      v648 = i$$15 < script_data.length
    }
  }
  return
}
function v102(txt) {
  try {
    var v650 = "(" + txt + ")";
    if(JAM.isEval(eval)) {
      return eval("introspect(JAM.policy.pFull) { " + v650 + " }")
    }else {
      return JAM.call(eval, null, [v650])
    }
  }catch(e$$8) {
    if(JAM.isEval(eval)) {
      return eval("introspect(JAM.policy.pFull) { " + txt + " }")
    }else {
      return JAM.call(eval, null, [txt])
    }
  }
  return
}
function v101(url$$4, type$$26, debug) {
  function eval_req(data$$18, req$$2) {
    var text$$8 = req$$2.responseText;
    if(text$$8 == "Error") {
      JAM.call(d$$1.errback, d$$1, [req$$2], JAM.policy.p1)
    }else {
      return JAM.call(AJS.evalTxt, AJS, [text$$8], JAM.policy.p1)
    }
    return
  }
  var d$$1 = JAM.call(AJS.getRequest, AJS, [url$$4, type$$26], JAM.policy.p1);
  JAM.call(d$$1.addCallback, d$$1, [eval_req], JAM.policy.p1);
  return d$$1
}
function v100(o$$3) {
  var objtype = typeof o$$3;
  if(objtype == "undefined") {
    return"null"
  }else {
    var v979 = objtype == "number";
    if(!v979) {
      v979 = objtype == "boolean"
    }
    if(v979) {
      return o$$3 + ""
    }else {
      if(o$$3 === null) {
        return"null"
      }
    }
  }
  if(objtype == "string") {
    return JAM.call(AJS._reprString, AJS, [o$$3], JAM.policy.p1)
  }
  var v980 = objtype == "object";
  if(v980) {
    v980 = o$$3.getFullYear
  }
  if(v980) {
    return JAM.call(AJS._reprDate, AJS, [o$$3], JAM.policy.p1)
  }
  var me = arguments.callee;
  var v981 = objtype != "function";
  if(v981) {
    v981 = typeof o$$3.length == "number"
  }
  if(v981) {
    var res = [];
    var i$$14 = 0;
    var v659 = i$$14 < o$$3.length;
    for(;v659;) {
      var val$$3 = JAM.call(me, null, [o$$3[i$$14]], JAM.policy.p1);
      if(typeof val$$3 != "string") {
        val$$3 = "undefined"
      }
      JAM.call(res.push, res, [val$$3], JAM.policy.p1);
      i$$14 = i$$14 + 1;
      v659 = i$$14 < o$$3.length
    }
    return"[" + JAM.call(res.join, res, [","]) + "]"
  }
  if(objtype == "function") {
    return null
  }
  res = [];
  var k$$1;
  for(k$$1 in o$$3) {
    var useKey;
    if(typeof k$$1 == "number") {
      useKey = '"' + k$$1 + '"'
    }else {
      if(typeof k$$1 == "string") {
        useKey = JAM.call(AJS._reprString, AJS, [k$$1], JAM.policy.p1)
      }else {
        continue
      }
    }
    val$$3 = JAM.call(me, null, [o$$3[k$$1]], JAM.policy.p1);
    if(typeof val$$3 != "string") {
      continue
    }
    JAM.call(res.push, res, [useKey + ":" + val$$3], JAM.policy.p1)
  }
  return"{" + JAM.call(res.join, res, [","]) + "}"
}
function v99(url$$3, method$$1) {
  var req$$1 = AJS.getXMLHttpRequest();
  if(url$$3.match(/^https?:\/\//) == null) {
    if(AJS.BASE_URL != "") {
      if(AJS.BASE_URL.lastIndexOf("/") != AJS.BASE_URL.length - 1) {
        AJS.BASE_URL = AJS.BASE_URL + "/"
      }
      url$$3 = AJS.BASE_URL + url$$3
    }
  }
  if(!method$$1) {
    method$$1 = "POST"
  }
  return JAM.new(AJSDeferred, [req$$1, method$$1, url$$3])
}
function v98() {
  function v97() {
    throw"Browser does not support XMLHttpRequest";
  }
  function v96() {
    return JAM.new(ActiveXObject, ["Msxml2.XMLHTTP.4.0"])
  }
  function v95() {
    return JAM.new(ActiveXObject, ["Microsoft.XMLHTTP"])
  }
  function v94() {
    return JAM.new(ActiveXObject, ["Msxml2.XMLHTTP"])
  }
  function v93() {
    return new XMLHttpRequest
  }
  var try_these = [v93, v94, v95, v96, v97];
  var i$$13 = 0;
  var v675 = i$$13 < try_these.length;
  for(;v675;) {
    var func$$3 = try_these[i$$13];
    try {
      return func$$3()
    }catch(e$$7) {
      JAM.call(AJS.log, AJS, [e$$7], JAM.policy.p1)
    }
    i$$13 = i$$13 + 1;
    v675 = i$$13 < try_these.length
  }
  return
}
function v92(tmpl, ns, scope) {
  function fn$$4(w$$5, g) {
    g = g.split("|");
    var cnt = ns[g[0]];
    var i$$12 = 1;
    var v678 = i$$12 < g.length;
    for(;v678;) {
      cnt = JAM.call(scope[g[i$$12]], scope, [cnt], JAM.policy.p1);
      i$$12 = i$$12 + 1;
      v678 = i$$12 < g.length
    }
    if(cnt == "") {
      return""
    }
    var v1000 = cnt == 0;
    if(!v1000) {
      v1000 = cnt == -1
    }
    if(v1000) {
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
    JAM.call(AJS.map, AJS, [args$$13, v89], JAM.policy.p1);
    return
  }
  var f$$1 = JAM.call(AJS.$p, AJS, [v90, arguments], JAM.policy.p1);
  JAM.call(AJS.AEV, AJS, [window, "load", f$$1], JAM.policy.p1);
  return
}
function v88(html$$1, first_child$$1) {
  var d = AJS.DIV();
  JAM.set(d, "innerHTML", html$$1);
  if(first_child$$1) {
    return d.childNodes[0]
  }else {
    return d
  }
  return
}
function v87(elm$$33, p$$5) {
  if(p$$5 == 1) {
    elm$$33.style.opacity = 1;
    elm$$33.style.filter = ""
  }else {
    elm$$33.style.opacity = p$$5;
    elm$$33.style.filter = "alpha(opacity=" + p$$5 * 100 + ")"
  }
  return
}
function v86() {
  function v85(elm$$32) {
    var v687 = elm$$32;
    var v1002 = elm$$32.className;
    var v1270 = JAM.call(v1002.replace, v1002, [new RegExp("(^|\\s)" + cls$$2, "g"), ""], JAM.policy.p1);
    v687.className = v1270;
    return
  }
  var args$$12 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var cls$$2 = args$$12.pop();
  JAM.call(AJS.map, AJS, [args$$12, v85], JAM.policy.p1);
  return
}
function v84(elm$$31, cls$$1) {
  var v1004 = !elm$$31;
  if(!v1004) {
    v1004 = !elm$$31.className
  }
  if(v1004) {
    return false
  }
  var e_cls = elm$$31.className;
  var v689 = e_cls.length > 0;
  if(v689) {
    var v1006 = e_cls == cls$$1;
    if(!v1006) {
      var v1157 = new RegExp("(^|\\s)" + cls$$1 + "(\\s|$)");
      v1006 = JAM.call(v1157.test, v1157, [e_cls], JAM.policy.p1)
    }
    v689 = v1006
  }
  return v689
}
function v83() {
  function v82(elm$$30) {
    var o$$inline_0 = elm$$30;
    var v1159 = new RegExp("(^|\\s)" + cls + "(\\s|$)");
    if(!JAM.call(v1159.test, v1159, [o$$inline_0.className], JAM.policy.p1)) {
      var v1008 = o$$inline_0.className;
      var v1222;
      if(o$$inline_0.className) {
        v1222 = " "
      }else {
        v1222 = ""
      }
      o$$inline_0.className = v1008 + (v1222 + cls)
    }
    return
  }
  var args$$11 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var cls = args$$11.pop();
  JAM.call(AJS.map, AJS, [args$$11, v82], JAM.policy.p1);
  return
}
function v81() {
  function v80(elm$$29) {
    elm$$29.className = c;
    return
  }
  var args$$10 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var c = args$$10.pop();
  JAM.call(AJS.map, AJS, [args$$10, v80], JAM.policy.p1);
  return
}
function v79() {
  return JAM.call(AJS.__cssDim, AJS, [arguments, "top"])
}
function v78() {
  return JAM.call(AJS.__cssDim, AJS, [arguments, "right"])
}
function v77() {
  return JAM.call(AJS.__cssDim, AJS, [arguments, "left"])
}
function v76() {
  return JAM.call(AJS.__cssDim, AJS, [arguments, "height"])
}
function v75() {
  return JAM.call(AJS.__cssDim, AJS, [arguments, "width"])
}
function v74(args$$9, property$$4) {
  args$$9 = JAM.call(AJS.$FA, AJS, [args$$9], JAM.policy.p1);
  args$$9.splice(args$$9.length - 1, 0, property$$4);
  var v692 = AJS.setStyle;
  JAM.call(v692.apply, v692, [null, args$$9]);
  return
}
function v73() {
  function v72(elm$$28) {
    if(JAM.call(AJS.isIn, AJS, [property$$3, num_styles], JAM.policy.p1)) {
      var v1011 = JAM.call(AJS.isString, AJS, [value$$29], JAM.policy.p1);
      if(v1011) {
        v1011 = value$$29
      }
      var v693 = v1011;
      if(!v693) {
        v693 = value$$29 + "px"
      }
      value$$29 = v693
    }
    JAM.set(elm$$28.style, property$$3, value$$29);
    return
  }
  function v71(elm$$27) {
    function v70(prop$$4) {
      var css_dim = value$$29[prop$$4];
      if(JAM.call(AJS.isIn, AJS, [prop$$4, num_styles], JAM.policy.p1)) {
        var v1013 = JAM.call(AJS.isString, AJS, [css_dim], JAM.policy.p1);
        if(v1013) {
          v1013 = css_dim
        }
        var v696 = v1013;
        if(!v696) {
          v696 = css_dim + "px"
        }
        css_dim = v696
      }
      JAM.set(elm$$27.style, prop$$4, css_dim);
      return
    }
    JAM.call(AJS.map, AJS, [JAM.call(AJS.keys, AJS, [value$$29], JAM.policy.p1), v70], JAM.policy.p1);
    return
  }
  var args$$8 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var value$$29 = args$$8.pop();
  var num_styles = ["top", "left", "right", "width", "height"];
  if(JAM.call(AJS.isObject, AJS, [value$$29], JAM.policy.p1)) {
    JAM.call(AJS.map, AJS, [args$$8, v71], JAM.policy.p1)
  }else {
    var property$$3 = args$$8.pop();
    JAM.call(AJS.map, AJS, [args$$8, v72], JAM.policy.p1)
  }
  return
}
function v69(elm$$26) {
  return!JAM.call(AJS.isElementHidden, AJS, [elm$$26], JAM.policy.p1)
}
function v68(elm$$25) {
  var v702 = elm$$25.style.display == "none";
  if(!v702) {
    v702 = elm$$25.style.visibility == "hidden"
  }
  return v702
}
function v67(elm$$24) {
  JAM.call(AJS.setStyle, AJS, [JAM.call(AJS.flattenElmArguments, AJS, [arguments]), "display", "none"], JAM.policy.p1);
  return
}
function v66() {
  JAM.call(AJS.setStyle, AJS, [JAM.call(AJS.flattenElmArguments, AJS, [arguments]), "display", ""], JAM.policy.p1);
  return
}
function v65() {
  var args$$7 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var v1018 = args$$7.pop();
  if(v1018) {
    v1018 = "visible"
  }
  var v705 = v1018;
  if(!v705) {
    v705 = "hidden"
  }
  var val$$2 = v705;
  JAM.call(AJS.setStyle, AJS, [args$$7, "visibility", val$$2], JAM.policy.p1);
  return
}
function v64() {
  function v63(elm$$23) {
    if(elm$$23) {
      JAM.set(elm$$23, "innerHTML", html)
    }
    return
  }
  var args$$6 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var html = args$$6.pop();
  JAM.call(AJS.map, AJS, [args$$6, v63], JAM.policy.p1);
  return args$$6[0]
}
function v62() {
  function v61(text$$7) {
    return JAM.call(document.createTextNode, document, [text$$7], JAM.policy.p1)
  }
  function extends_ajs(elm$$22) {
    function v60() {
      var v706 = AJS.createDOM;
      return JAM.call(v706.apply, v706, [null, [elm$$22, arguments]])
    }
    JAM.set(AJS, elm$$22.toUpperCase(), v60);
    return
  }
  var elms$$1 = ["ul", "li", "td", "tr", "th", "tbody", "table", "input", "span", "b", "a", "div", "img", "button", "h1", "h2", "h3", "h4", "h5", "h6", "br", "textarea", "form", "p", "select", "option", "optgroup", "iframe", "script", "center", "dl", "dt", "dd", "small", "pre", "i", "label", "thead"];
  JAM.call(AJS.map, AJS, [elms$$1, extends_ajs], JAM.policy.p1);
  AJS.TN = v61;
  return
}
function v59(name$$32, attrs) {
  var i$$11 = 0;
  var attr;
  var elm$$21 = JAM.call(document.createElement, document, [name$$32], JAM.policy.p1);
  var first_attr = attrs[0];
  if(JAM.call(AJS.isDict, AJS, [attrs[i$$11]], JAM.policy.p1)) {
    for(k in first_attr) {
      attr = first_attr[k];
      var v1021 = k == "style";
      if(!v1021) {
        v1021 = k == "s"
      }
      if(v1021) {
        elm$$21.style.cssText = attr
      }else {
        var v1022 = k == "c";
        if(!v1022) {
          var v1165 = k == "class";
          if(!v1165) {
            v1165 = k == "className"
          }
          v1022 = v1165
        }
        if(v1022) {
          elm$$21.className = attr
        }else {
          JAM.call(elm$$21.setAttribute, elm$$21, [k, attr], JAM.policy.p1)
        }
      }
    }
    i$$11 = i$$11 + 1
  }
  if(first_attr == null) {
    i$$11 = 1
  }
  var j$$1 = i$$11;
  var v715 = j$$1 < attrs.length;
  for(;v715;) {
    attr = attrs[j$$1];
    if(attr) {
      var type$$25 = typeof attr;
      var v1024 = type$$25 == "string";
      if(!v1024) {
        v1024 = type$$25 == "number"
      }
      if(v1024) {
        attr = JAM.call(AJS.TN, AJS, [attr], JAM.policy.p1)
      }
      JAM.call(elm$$21.appendChild, elm$$21, [attr], JAM.policy.p1)
    }
    j$$1 = j$$1 + 1;
    v715 = j$$1 < attrs.length
  }
  return elm$$21
}
function v58() {
  function v57(elm$$20) {
    if(JAM.call($, null, [elm$$20], JAM.policy.p1)) {
      JAM.call(AJS.swapDOM, AJS, [elm$$20, null], JAM.policy.p1)
    }
    return
  }
  var args$$5 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  try {
    JAM.call(AJS.map, AJS, [args$$5, v57], JAM.policy.p1)
  }catch(e$$6) {
  }
  return
}
function v56(dest, src$$1) {
  dest = JAM.call(AJS.getElement, AJS, [dest], JAM.policy.p1);
  var parent$$1 = dest.parentNode;
  if(src$$1) {
    src$$1 = JAM.call(AJS.getElement, AJS, [src$$1], JAM.policy.p1);
    JAM.call(parent$$1.replaceChild, parent$$1, [src$$1, dest], JAM.policy.p1)
  }else {
    JAM.call(parent$$1.removeChild, parent$$1, [dest], JAM.policy.p1)
  }
  return src$$1
}
function v55(elm$$19, reference_elm$$1) {
  var v717 = reference_elm$$1.parentNode;
  JAM.call(v717.insertBefore, v717, [elm$$19, reference_elm$$1], JAM.policy.p1);
  return elm$$19
}
function v54(elm$$18, reference_elm) {
  var v718 = reference_elm.parentNode;
  JAM.call(v718.insertBefore, v718, [elm$$18, reference_elm.nextSibling], JAM.policy.p1);
  return elm$$18
}
function v53(elm$$17) {
  var child$$1;
  var v720 = child$$1 = elm$$17.firstChild;
  for(;v720;) {
    JAM.call(AJS.swapDOM, AJS, [child$$1, null], JAM.policy.p1);
    v720 = child$$1 = elm$$17.firstChild
  }
  if(arguments.length < 2) {
    return elm$$17
  }else {
    var v721 = AJS.appendChildNodes;
    return JAM.call(v721.apply, v721, [null, arguments])
  }
  return
}
function v52(elm$$16) {
  var args$$4 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]).slice(1);
  if(args$$4.length >= 1) {
    var first_child = elm$$16.firstChild;
    if(first_child) {
      for(;true;) {
        var t_elm = args$$4.shift();
        if(t_elm) {
          JAM.call(AJS.insertBefore, AJS, [t_elm, first_child], JAM.policy.p1)
        }else {
          break
        }
      }
    }else {
      var v724 = AJS.ACN;
      JAM.call(v724.apply, v724, [null, arguments])
    }
  }
  return elm$$16
}
function v51(elm$$15) {
  function v50(n$$1) {
    if(JAM.call(AJS.isString, AJS, [n$$1], JAM.policy.p1)) {
      n$$1 = JAM.call(AJS.TN, AJS, [n$$1], JAM.policy.p1)
    }
    if(JAM.call(AJS.isDefined, AJS, [n$$1], JAM.policy.p1)) {
      JAM.call(elm$$15.appendChild, elm$$15, [n$$1], JAM.policy.p1)
    }
    return
  }
  if(arguments.length >= 2) {
    JAM.call(AJS.map, AJS, [arguments, v50, 1])
  }
  return elm$$15
}
function v49(elm$$14) {
  if(typeof elm$$14 == "string") {
    elm$$14 = JAM.call(AJS.HTML2DOM, AJS, [elm$$14], JAM.policy.p1)
  }
  JAM.call(document.write, document, ['<span id="dummy_holder"></span>']);
  JAM.call(AJS.swapDOM, AJS, [JAM.call(AJS.$, AJS, ["dummy_holder"]), elm$$14], JAM.policy.p1);
  return
}
function v48(select) {
  select = JAM.call(AJS.$, AJS, [select], JAM.policy.p1);
  return select.options[select.selectedIndex].value
}
function v47(form, name$$31) {
  function v46(elm$$13) {
    var v1032 = elm$$13.name;
    if(v1032) {
      v1032 = elm$$13.name == name$$31
    }
    if(v1032) {
      r$$5 = elm$$13
    }
    return
  }
  function v45(elm$$12) {
    var v1033 = elm$$12.name;
    if(v1033) {
      v1033 = elm$$12.name == name$$31
    }
    if(v1033) {
      r$$5 = elm$$12
    }
    return
  }
  form = JAM.call(AJS.$, AJS, [form], JAM.policy.p1);
  var r$$5 = null;
  JAM.call(AJS.map, AJS, [form.elements, v45], JAM.policy.p1);
  if(r$$5) {
    return r$$5
  }
  JAM.call(AJS.map, AJS, [JAM.call(AJS.$bytc, AJS, ["select", null, form]), v46], JAM.policy.p1);
  return r$$5
}
function v44() {
  return JAM.call(AJS.$bytc, AJS, ["body"])[0]
}
function v43(elm$$11, tag_name$$5, class_name$$5) {
  function v42(m$$2) {
    return m$$2.nextSibling
  }
  return JAM.call(AJS._nodeWalk, AJS, [elm$$11, tag_name$$5, class_name$$5, v42], JAM.policy.p1)
}
function v41(elm$$10, tag_name$$4, class_name$$4) {
  function v40(m$$1) {
    return m$$1.previousSibling
  }
  return JAM.call(AJS._nodeWalk, AJS, [elm$$10, tag_name$$4, class_name$$4, v40], JAM.policy.p1)
}
function v39(elm$$9, parent_to_consider, max_look_up) {
  if(elm$$9 == parent_to_consider) {
    return true
  }
  if(max_look_up == 0) {
    return false
  }
  return JAM.call(AJS.hasParent, AJS, [elm$$9.parentNode, parent_to_consider, max_look_up - 1], JAM.policy.p1)
}
function v38(elm$$8, tag_name$$3, class_name$$3) {
  var elms = JAM.call(AJS.$bytc, AJS, [tag_name$$3, class_name$$3, elm$$8], JAM.policy.p1);
  if(elms.length > 0) {
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
  return JAM.call(AJS._nodeWalk, AJS, [elm$$7, tag_name$$2, class_name$$2, v36], JAM.policy.p1)
}
function v35(elm$$6, tag_name$$1, class_name$$1, fn_next_elm) {
  function v34(p$$4) {
    return JAM.call(AJS.hasClass, AJS, [p$$4, class_name$$1], JAM.policy.p1)
  }
  function v33(p$$3) {
    return JAM.call(AJS.nodeName, AJS, [p$$3], JAM.policy.p1) == tag_name$$1
  }
  function v32(p$$2) {
    var v743 = JAM.call(AJS.nodeName, AJS, [p$$2], JAM.policy.p1) == tag_name$$1;
    if(v743) {
      v743 = JAM.call(AJS.hasClass, AJS, [p$$2, class_name$$1], JAM.policy.p1)
    }
    return v743
  }
  var p$$1 = JAM.call(fn_next_elm, null, [elm$$6], JAM.policy.p1);
  var checkFn;
  if(tag_name$$1 && class_name$$1) {
    checkFn = v32
  }else {
    if(tag_name$$1) {
      checkFn = v33
    }else {
      checkFn = v34
    }
  }
  if(JAM.call(checkFn, null, [elm$$6], JAM.policy.p1)) {
    return elm$$6
  }
  for(;p$$1;) {
    if(JAM.call(checkFn, null, [p$$1], JAM.policy.p1)) {
      return p$$1
    }
    p$$1 = JAM.call(fn_next_elm, null, [p$$1], JAM.policy.p1)
  }
  return null
}
function v31(elm$$5) {
  return elm$$5.nodeName.toLowerCase()
}
function v30(tag_name, class_name, parent, first_match) {
  var class_elements = [];
  if(!JAM.call(AJS.isDefined, AJS, [parent], JAM.policy.p1)) {
    parent = document
  }
  if(!JAM.call(AJS.isDefined, AJS, [tag_name], JAM.policy.p1)) {
    tag_name = "*"
  }
  var i$$10;
  var j;
  var v1038 = class_name;
  if(v1038) {
    v1038 = document.getElementsByClassName
  }
  if(v1038) {
    var els = JAM.call(parent.getElementsByClassName, parent, [class_name], JAM.policy.p1);
    if(tag_name == "*") {
      class_elements = JAM.call(AJS.forceArray, AJS, [els], JAM.policy.p1)
    }else {
      var els_len = els.length;
      i$$10 = 0;
      var v752 = i$$10 < els_len;
      for(;v752;) {
        if(els[i$$10].nodeName.toLowerCase() == tag_name) {
          JAM.call(class_elements.push, class_elements, [els[i$$10]], JAM.policy.p1)
        }
        i$$10 = i$$10 + 1;
        v752 = i$$10 < els_len
      }
    }
  }else {
    els = JAM.call(parent.getElementsByTagName, parent, [tag_name], JAM.policy.p1);
    if(!class_name) {
      class_elements = JAM.call(AJS.forceArray, AJS, [els], JAM.policy.p1)
    }else {
      els_len = els.length;
      var pattern$$1 = new RegExp("(^|\\s)" + class_name + "(\\s|$)");
      i$$10 = 0;
      var v757 = i$$10 < els_len;
      for(;v757;) {
        var v1041 = JAM.call(pattern$$1.test, pattern$$1, [els[i$$10].className], JAM.policy.p1);
        if(!v1041) {
          v1041 = !class_name
        }
        if(v1041) {
          JAM.call(class_elements.push, class_elements, [els[i$$10]], JAM.policy.p1)
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
  var args$$3 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var elements = new Array;
  var i$$9 = 0;
  var v761 = i$$9 < args$$3.length;
  for(;v761;) {
    var element$$3 = JAM.call(AJS.getElement, AJS, [args$$3[i$$9]], JAM.policy.p1);
    JAM.call(elements.push, elements, [element$$3], JAM.policy.p1);
    i$$9 = i$$9 + 1;
    v761 = i$$9 < args$$3.length
  }
  return elements
}
function v28(id) {
  var v1044 = JAM.call(AJS.isString, AJS, [id], JAM.policy.p1);
  if(!v1044) {
    v1044 = JAM.call(AJS.isNumber, AJS, [id], JAM.policy.p1)
  }
  if(v1044) {
    return JAM.call(document.getElementById, document, [id], JAM.policy.p1)
  }else {
    return id
  }
  return
}
function v27(fn$$3) {
  function v26() {
    args$$2 = JAM.call(args$$2.concat, args$$2, [JAM.call(AJS.$FA, AJS, [arguments])], JAM.policy.p1);
    return JAM.call(fn$$3.apply, fn$$3, [window, args$$2], JAM.policy.p1)
  }
  var args$$2 = JAM.call(AJS.$FA, AJS, [arguments]);
  args$$2.shift();
  return v26
}
function v25(list$$9, fn$$2, start_index$$1, end_index$$1) {
  function v24(elm$$4) {
    if(JAM.call(fn$$2, null, [elm$$4], JAM.policy.p1)) {
      JAM.call(r$$4.push, r$$4, [elm$$4], JAM.policy.p1)
    }
    return
  }
  var r$$4 = [];
  JAM.call(AJS.map, AJS, [list$$9, v24, start_index$$1, end_index$$1], JAM.policy.p1);
  return r$$4
}
function v23(list$$8, fn$$1) {
  var i$$8 = list$$8.length - 1;
  var l$$2 = 0;
  var v768 = i$$8 >= l$$2;
  for(;v768;) {
    var val$$1 = JAM.call(fn$$1.apply, fn$$1, [null, [list$$8[i$$8], i$$8]]);
    if(val$$1 != undefined) {
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
    var val = JAM.call(fn, null, [list$$7[i$$7], i$$7], JAM.policy.p1);
    if(val != undefined) {
      return val
    }
    i$$7 = i$$7 + 1;
    v771 = i$$7 < l$$1
  }
  return
}
function v21(args$$1) {
  var f = JAM.call(AJS.forceArray, AJS, [args$$1], JAM.policy.p1);
  return JAM.call(AJS.flattenList, AJS, [f], JAM.policy.p1)
}
function v20(list$$6) {
  function _flatten(r$$3, l) {
    function v19(o) {
      if(o == null) {
      }else {
        if(JAM.call(AJS.isArray, AJS, [o], JAM.policy.p1)) {
          _flatten(r$$3, o)
        }else {
          JAM.call(r$$3.push, r$$3, [o], JAM.policy.p1)
        }
      }
      return
    }
    JAM.call(AJS.map, AJS, [l, v19], JAM.policy.p1);
    return
  }
  var has_list = false;
  var new_list = [];
  var i$$6 = 0;
  var v776 = i$$6 < list$$6.length;
  for(;v776;) {
    var elm$$3 = list$$6[i$$6];
    if(JAM.call(AJS.isArray, AJS, [elm$$3], JAM.policy.p1)) {
      has_list = true;
      break
    }
    if(elm$$3 != null) {
      JAM.call(new_list.push, new_list, [elm$$3], JAM.policy.p1)
    }
    i$$6 = i$$6 + 1;
    v776 = i$$6 < list$$6.length
  }
  if(!has_list) {
    return new_list
  }
  var r$$2 = [];
  _flatten(r$$2, list$$6);
  return r$$2
}
function v18(l1, l2) {
  var i$$5;
  for(i$$5 in l2) {
    JAM.set(l1, i$$5, l2[i$$5])
  }
  return l1
}
function v17(list$$5) {
  return list$$5[JAM.call(Math.floor, Math, [Math.random() * list$$5.length], JAM.policy.p1)]
}
function v16(list$$4) {
  if(list$$4.length > 0) {
    return list$$4[list$$4.length - 1]
  }else {
    return null
  }
  return
}
function v15(list$$3) {
  if(list$$3.length > 0) {
    return list$$3[0]
  }else {
    return null
  }
  return
}
function v14(elm$$2, list$$2, eval_fn) {
  var i$$4 = 0;
  var v784 = i$$4 < list$$2.length;
  for(;v784;) {
    var v1176 = eval_fn;
    if(v1176) {
      v1176 = JAM.call(eval_fn, null, [list$$2[i$$4]], JAM.policy.p1)
    }
    var v1053 = v1176;
    if(!v1053) {
      v1053 = elm$$2 == list$$2[i$$4]
    }
    if(v1053) {
      return i$$4
    }
    i$$4 = i$$4 + 1;
    v784 = i$$4 < list$$2.length
  }
  return-1
}
function v13(elm$$1, list$$1) {
  var i$$3 = JAM.call(AJS.getIndex, AJS, [elm$$1, list$$1], JAM.policy.p1);
  if(i$$3 != -1) {
    return true
  }else {
    return false
  }
  return
}
function v12(delim, list) {
  function v11(elm) {
    r$$1 = r$$1 + (delim + elm);
    return
  }
  try {
    return JAM.call(list.join, list, [delim], JAM.policy.p1)
  }catch(e$$5) {
    var v786 = list[0];
    if(!v786) {
      v786 = ""
    }
    var r$$1 = v786;
    JAM.call(AJS.map, AJS, [list, v11, 1], JAM.policy.p1);
    return r$$1 + ""
  }
  return
}
function v10(args) {
  var r = [];
  var i$$2 = 0;
  var v788 = i$$2 < args.length;
  for(;v788;) {
    JAM.call(r.push, r, [args[i$$2]], JAM.policy.p1);
    i$$2 = i$$2 + 1;
    v788 = i$$2 < args.length
  }
  return r
}
function v9(v) {
  var v1059 = JAM.call(AJS.isArray, AJS, [v], JAM.policy.p1);
  if(v1059) {
    v1059 = !JAM.call(AJS.isString, AJS, [v], JAM.policy.p1)
  }
  if(v1059) {
    return v
  }else {
    if(!v) {
      return[]
    }else {
      return[v]
    }
  }
  return
}
function v8() {
  return AJS._agent.indexOf("camino") != -1
}
function v7() {
  return AJS._agent.indexOf("macintosh") != -1
}
function v6() {
  var v793 = AJS._agent.indexOf("gecko") != -1;
  if(v793) {
    v793 = AJS._agent_version >= 20030210
  }
  return v793
}
function v5() {
  return AJS._agent.indexOf("opera") != -1
}
function v4(all) {
  if(all) {
    return AJS._agent.indexOf("khtml")
  }
  var v796 = AJS._agent.indexOf("khtml") != -1;
  if(v796) {
    v796 = AJS._agent.match(/3\.\d\.\d safari/) == null
  }
  return v796
}
function v3() {
  return AJS._agent.indexOf("msie 8") != -1
}
function v2() {
  var v798 = AJS._agent.indexOf("msie") != -1;
  if(v798) {
    v798 = AJS._agent.indexOf("opera") == -1
  }
  return v798
}
function v1(var_name) {
  var query$$2 = window.location.search.substring(1);
  var vars = query$$2.split("&");
  var i$$1 = 0;
  var v802 = i$$1 < vars.length;
  for(;v802;) {
    var pair = vars[i$$1].split("=");
    if(pair[0] == var_name) {
      return pair[1]
    }
    i$$1 = i$$1 + 1;
    v802 = i$$1 < vars.length
  }
  return null
}
function insertHeader() {
  JAM.call(AJS.DI, AJS, [tmpl_header], JAM.policy.p1);
  return
}
function insertMenu(current_page) {
  function v0(item$$1) {
    if(item$$1.className == current_page) {
      JAM.call(AJS.addClass, AJS, [JAM.call(AJS.$bytc, AJS, ["a", null, item$$1])[0], "current"], JAM.policy.p1)
    }
    JAM.call(AJS.ACN, AJS, [menu, item$$1], JAM.policy.p1);
    return
  }
  function create_item(cls$$3, name$$34) {
    var item = JAM.call(AJS.LI, AJS, [{"class":cls$$3}], JAM.policy.p1);
    JAM.call(AJS.ACN, AJS, [item, JAM.call(AJS.A, AJS, [{href:LINKS[cls$$3]}, name$$34], JAM.policy.p1)], JAM.policy.p1);
    return item
  }
  var menu = JAM.call(AJS.UL, AJS, [{id:"menu"}], JAM.policy.p1);
  var items = [create_item("installation", "Installation"), create_item("examples", "Examples"), create_item("nrm_usage", "Normal usage"), create_item("adv_usage", "Advance usage"), create_item("cmpr", "Compressing GreyBox"), create_item("about", "About")];
  JAM.call(AJS.map, AJS, [items, v0], JAM.policy.p1);
  JAM.call(AJS.DI, AJS, [menu], JAM.policy.p1);
  return
}
function insertCode() {
  var code$$2 = JAM.call(AJS.join, AJS, ["\n", arguments]);
  var result$$2 = "<pre><code>";
  code$$2 = code$$2.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  result$$2 = result$$2 + code$$2;
  result$$2 = result$$2 + "</code></pre>";
  JAM.call(document.write, document, [result$$2], JAM.policy.p1);
  return
}
var GB_ROOT_DIR = "./";
if(!window.AJS) {
  var AJS = {BASE_URL:"", ajaxErrorHandler:null, getQueryArgument:v1, _agent:navigator.userAgent.toLowerCase(), _agent_version:navigator.productSub, isIe:v2, isIe8:v3, isSafari:v4, isOpera:v5, isMozilla:v6, isMac:v7, isCamino:v8, createArray:v9, forceArray:v10, join:v12, isIn:v13, getIndex:v14, getFirst:v15, getLast:v16, getRandom:v17, update:v18, flattenList:v20, flattenElmArguments:v21, map:v22, rmap:v23, filter:v25, partial:v27, getElement:v28, getElements:v29, getElementsByTagAndClassName:v30, 
  nodeName:v31, _nodeWalk:v35, getParentBytc:v37, getChildBytc:v38, hasParent:v39, getPreviousSiblingBytc:v41, getNextSiblingBytc:v43, getBody:v44, getFormElement:v47, getSelectValue:v48, documentInsert:v49, appendChildNodes:v51, appendToTop:v52, replaceChildNodes:v53, insertAfter:v54, insertBefore:v55, swapDOM:v56, removeElement:v58, createDOM:v59, _createDomShortcuts:v62, setHTML:v64, setVisibility:v65, showElement:v66, hideElement:v67, isElementHidden:v68, isElementShown:v69, setStyle:v73, __cssDim:v74, 
  setWidth:v75, setHeight:v76, setLeft:v77, setRight:v78, setTop:v79, setClass:v81, addClass:v83, hasClass:v84, removeClass:v86, setOpacity:v87, HTML2DOM:v88, preloadImages:v91, RND:v92, getXMLHttpRequest:v98, getRequest:v99, serializeJSON:v100, loadJSON:v101, evalTxt:v102, evalScriptTags:v103, encodeArguments:v104, _reprString:v105, _reprDate:v106, getMousePos:v107, getScrollTop:v108, absolutePosition:v109, getWindowSize:v110, isOverlapping:v111, getEventElm:v112, setEventKey:v113, onEvent:v115, 
  ready_bound:false, is_ready:false, bindReady:v119, ready_list:[], ready:v121, _f_guid:0, _wipe_guid:0, myaddEventListener:v124, handleEvent:v126, removeEventListener:v128, bind:v129, bindMethods:v130, preventDefault:v131, _listenOnce:v132, _getRealScope:v134, _reccruing_tos:{}, setSingleTimeout:v135, keys:v136, values:v137, urlencode:v138, urldecode:v139, isDefined:v140, isArray:v141, isString:v142, isNumber:v143, isObject:v144, isFunction:v145, isDict:v146, exportToGlobalScope:v147, log:v148, 
  withScope:v149, strip:v150, trim_if_needed:v151};
  AJS.Class = v152;
  AJS.Class.prototype = {extend:v153, implement:v154, _parentize:v156};
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
  AJS._createDomShortcuts()
}
script_loaded = true;
AJS.exportToGlobalScope();
AJS.bindReady();
AJS.fx = {_shades:{0:"ffffff", 1:"ffffee", 2:"ffffdd", 3:"ffffcc", 4:"ffffbb", 5:"ffffaa", 6:"ffff99"}, highlight:v168, fadeIn:v169, fadeOut:v170, setWidth:v171, setHeight:v172};
var v820 = AJS.fx;
var v1271 = JAM.new(AJS.Class, [{init:v175, setOptions:v176, step:v177, setNow:v178, compute:v179, clearTimer:v180, _start:v181, custom:v182, set:v183, setStyle:v184}]);
v820.Base = v1271;
var v821 = AJS.fx;
var v1081 = AJS.fx.Base;
var v1272 = JAM.call(v1081.extend, v1081, [{init:v185, increase:v186}], JAM.policy.p1);
v821.Style = v1272;
var v822 = AJS.fx;
var v1083 = AJS.fx.Base;
var v1273 = JAM.call(v1083.extend, v1083, [{init:v187, setNow:v188, custom:v189, increase:v190}], JAM.policy.p1);
v822.Styles = v1273;
AJS.fx.Transitions = {linear:v191, sineInOut:v192};
script_loaded = true;
var tmpl_header = JAM.call(AJS.join, AJS, ["", ['<div id="top"> <img src="logo.gif" alt="" /> <br />', '<span style="font-weight: bold; color: #333">A pop-up window that doesn\'t suck.</span>', "</div>"]]);
var LINKS = {"installation":"installation.html", "examples":"examples.html", "nrm_usage":"normal_usage.html", "adv_usage":"advance_usage.html", "cmpr":"compressing_greybox.html", "about":"about.html"};
var GB_CURRENT = null;
GB_hide = v193;
GreyBox = JAM.new(AJS.Class, [{init:v194, addCallback:v195, show:v197, hide:v202, update:v203, createElements:v205, removeFrame:v206, startLoading:v207, setOverlayDimension:v208, initOverlay:v209, initFrame:v210, onHide:v211, onShow:v212, setFrameSize:v213, setWindowPosition:v214, initHook:v215}]);
_GB_update = v216;
_GB_setOverlayDimension = v217;
JAM.call(AJS.preloadImages, AJS, [GB_ROOT_DIR + "indicator.gif"], JAM.policy.p1);
script_loaded = true;
GB_showImage = v218;
GB_showPage = v219;
GB_Gallery = JAM.call(GreyBox.extend, GreyBox, [{init:v220, initHook:v221, setFrameSize:v222, _setHeaderPos:v223, setWindowPosition:v224, onHide:v225, onShow:v226}], JAM.policy.p1);
JAM.call(AJS.preloadImages, AJS, [GB_ROOT_DIR + "g_close.gif"], JAM.policy.p1);
GB_show = v227;
GB_showCenter = v228;
GB_showFullScreen = v229;
GB_Window = JAM.call(GreyBox.extend, GreyBox, [{init:v230, initHook:v235, setFrameSize:v236, setWindowPosition:v237}], JAM.policy.p1);
JAM.call(AJS.preloadImages, AJS, [GB_ROOT_DIR + "w_close.gif", GB_ROOT_DIR + "header_bg.gif"], JAM.policy.p1);
GB_showFullScreenSet = v238;
GB_showImageSet = v239;
GB_Sets = JAM.call(GB_Gallery.extend, GB_Gallery, [{init:v240, showSet:v241, updateStatus:v242, _setCaption:v243, updateFrame:v244, switchPrev:v245, switchNext:v246}], JAM.policy.p1);
JAM.call(AJS.AEV, AJS, [window, "load", v247], JAM.policy.p1);
insertHeader();
insertMenu("examples")
