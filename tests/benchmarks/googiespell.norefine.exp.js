function v230(name$$36) {
  var v231 = {"href":"javascript:;", name:name$$36};
  return JAMScript.call(AJS.A, AJS, [v231])
}
function v229(elm$$52) {
  var v1185 = this.img_dir;
  var v888 = v1185 + "indicator.gif";
  var v232 = {"src":v888, "style":"margin-right: 5px;"};
  var img$$3 = JAMScript.call(AJS.IMG, AJS, [v232]);
  JAMScript.call(AJS.setWidth, AJS, [img$$3, 16]);
  JAMScript.call(AJS.setHeight, AJS, [img$$3, 16]);
  this.indicator = img$$3;
  var v233 = img$$3.style;
  v233.textDecoration = "none";
  try {
    JAMScript.call(AJS.insertBefore, AJS, [img$$3, elm$$52])
  }catch(e$$36) {
  }
  return
}
function v228(elm$$51) {
  try {
    var v234 = this.indicator;
    JAMScript.call(AJS.removeElement, AJS, [v234])
  }catch(e$$35) {
  }
  return
}
function v227(name$$35, css_class, c_fn$$1) {
  var btn_row = JAMScript.call(AJS.TR, AJS, []);
  var btn = JAMScript.call(AJS.TD, AJS, []);
  JAMScript.set(btn, "onmouseover", GoogieSpell.item_onmouseover);
  JAMScript.set(btn, "onmouseout", GoogieSpell.item_onmouseout);
  var spn_btn;
  var v236 = css_class != "";
  if(v236) {
    var v235 = {"class":css_class};
    spn_btn = JAMScript.call(AJS.SPAN, AJS, [v235]);
    JAMScript.set(spn_btn, "innerHTML", name$$35)
  }else {
    spn_btn = JAMScript.call(AJS.TN, AJS, [name$$35])
  }
  JAMScript.call(btn.appendChild, btn, [spn_btn]);
  JAMScript.call(AJS.AEV, AJS, [btn, "click", c_fn$$1]);
  JAMScript.call(btn_row.appendChild, btn_row, [btn]);
  return btn_row
}
function v226(c_fn) {
  var v237 = this.lang_close;
  var v238 = JAMScript.call(AJS.$b, AJS, [c_fn, this]);
  return JAMScript.call(this.createButton, this, [v237, "googie_list_close", v238])
}
function v225(e$$34) {
  var elm$$50 = JAMScript.call(AJS.getEventElm, AJS, [e$$34]);
  var v1186 = elm$$50.className;
  var v889 = v1186 != "googie_list_revert";
  if(v889) {
    var v1187 = elm$$50.className;
    v889 = v1187 != "googie_list_close"
  }
  var v240 = v889;
  if(v240) {
    elm$$50.className = "googie_list_onout"
  }else {
    var v239 = elm$$50.parentNode;
    v239.className = "googie_list_onout"
  }
  return
}
function v224(e$$33) {
  var elm$$49 = JAMScript.call(AJS.getEventElm, AJS, [e$$33]);
  var v1188 = elm$$49.className;
  var v890 = v1188 != "googie_list_revert";
  if(v890) {
    var v1189 = elm$$49.className;
    v890 = v1189 != "googie_list_close"
  }
  var v242 = v890;
  if(v242) {
    elm$$49.className = "googie_list_onhover"
  }else {
    var v241 = elm$$49.parentNode;
    v241.className = "googie_list_onhover"
  }
  return
}
function v223(fire) {
  function fn$$24() {
    JAMScript.call(this.spellCheck, this, []);
    return
  }
  var v1190 = JAMScript.call(AJS.isDefined, AJS, [fire]);
  var v891 = !v1190;
  var v1191 = !v891;
  if(v1191) {
    v891 = fire
  }
  var v243 = v891;
  if(v243) {
    JAMScript.call(this.setStateChanged, this, ["spell_check"])
  }
  var v244 = this.show_change_lang_pic;
  if(v244) {
    var v1371 = JAMScript.call(this.createChangeLangPic, this, []);
    this.switch_lan_pic = v1371
  }else {
    var v1372 = JAMScript.call(AJS.SPAN, AJS, []);
    this.switch_lan_pic = v1372
  }
  var span_chck = JAMScript.call(this.createSpellDiv, this, []);
  var v245 = this.custom_spellcheck_starter;
  if(v245) {
    JAMScript.set(span_chck, "onclick", this.custom_spellcheck_starter)
  }else {
    var myfn$$1 = JAMScript.call(AJS.$b, AJS, [fn$$24, this]);
    JAMScript.call(AJS.AEV, AJS, [span_chck, "click", myfn$$1])
  }
  this.spell_span = span_chck;
  var v251 = this.main_controller;
  if(v251) {
    var v892 = this.change_lang_pic_placement;
    var v250 = v892 == "left";
    if(v250) {
      var v246 = this.spell_container;
      var v247 = this.switch_lan_pic;
      JAMScript.call(AJS.RCN, AJS, [v246, span_chck, " ", v247])
    }else {
      var v248 = this.spell_container;
      var v249 = this.switch_lan_pic;
      JAMScript.call(AJS.RCN, AJS, [v248, v249, " ", span_chck])
    }
  }
  return
}
function v222() {
  function v221(e$$31) {
    JAMScript.call(this.resumeEditing, this, []);
    return
  }
  JAMScript.call(this.setStateChanged, this, ["resume_editing"]);
  var v258 = this.main_controller;
  if(v258) {
    var v252 = this.switch_lan_pic;
    JAMScript.call(AJS.hideElement, AJS, [v252]);
    var v1192 = this.img_dir;
    var v893 = v1192 + "blank.gif";
    var v253 = {"src":v893, "style":"height: 16px; width: 1px;"};
    var dummy$$2 = JAMScript.call(AJS.IMG, AJS, [v253]);
    var rsm$$1 = JAMScript.call(AJS.SPAN, AJS, []);
    JAMScript.set(rsm$$1, "innerHTML", this.lang_rsm_edt);
    var v254 = this.spell_span;
    var v255 = JAMScript.call(AJS.SPAN, AJS, [dummy$$2, rsm$$1]);
    JAMScript.call(AJS.RCN, AJS, [v254, v255]);
    var fn$$23 = v221;
    var myfn = JAMScript.call(AJS.$b, AJS, [fn$$23, this]);
    var v256 = this.spell_span;
    v256.addEventListener("click", myfn, false);
    var v257 = this.spell_span;
    v257.className = "googie_resume_editing"
  }
  try {
    var v259 = this.edit_layer;
    v259.scrollTop = this.ta_scroll_top
  }catch(e$$32) {
  }
  return
}
function v220(on_finish) {
  function v219() {
    JAMScript.call(on_finish, null, []);
    JAMScript.call(this.checkSpellingState, this, []);
    return
  }
  var no_spell_errors;
  if(on_finish) {
    var fn$$22 = v219;
    no_spell_errors = fn$$22
  }else {
    no_spell_errors = this.checkSpellingState
  }
  JAMScript.call(this.setStateChanged, this, ["no_error_found"]);
  var v268 = this.main_controller;
  if(v268) {
    var v260 = this.switch_lan_pic;
    JAMScript.call(AJS.hideElement, AJS, [v260]);
    var v1193 = this.img_dir;
    var v894 = v1193 + "blank.gif";
    var v261 = {"src":v894, "style":"height: 16px; width: 1px;"};
    var dummy$$1 = JAMScript.call(AJS.IMG, AJS, [v261]);
    var rsm = JAMScript.call(AJS.SPAN, AJS, []);
    JAMScript.set(rsm, "innerHTML", this.lang_no_error_found);
    var v262 = this.spell_span;
    var v263 = JAMScript.call(AJS.SPAN, AJS, [dummy$$1, rsm]);
    JAMScript.call(AJS.RCN, AJS, [v262, v263]);
    var v264 = this.spell_span;
    v264.className = "googie_check_spelling_ok";
    var v895 = this.spell_span;
    var v265 = v895.style;
    v265.textDecoration = "none";
    var v896 = this.spell_span;
    var v266 = v896.style;
    v266.cursor = "default";
    var v267 = JAMScript.call(AJS.$b, AJS, [no_spell_errors, this]);
    JAMScript.call(setTimeout, null, [v267, 1200])
  }
  return
}
function v218() {
  var v269 = {"class":"googie_check_spelling_link", "id":"googie_check_spelling_link"};
  var chk_spell = JAMScript.call(AJS.SPAN, AJS, [v269]);
  JAMScript.set(chk_spell, "innerHTML", this.lang_chck_spell);
  var spell_img = null;
  var v271 = this.show_spell_img;
  if(v271) {
    var v1194 = this.img_dir;
    var v897 = v1194 + "spellc.gif";
    var v270 = {"src":v897};
    spell_img = JAMScript.call(AJS.IMG, AJS, [v270])
  }
  return JAMScript.call(AJS.SPAN, AJS, [spell_img, " ", chk_spell])
}
function v217() {
  function fn$$21(e$$30) {
    var elm$$48 = JAMScript.call(AJS.getEventElm, AJS, [e$$30]);
    var v898 = JAMScript.call(AJS.nodeName, AJS, [elm$$48]);
    var v272 = v898 == "img";
    if(v272) {
      elm$$48 = elm$$48.parentNode
    }
    var v899 = elm$$48.className;
    var v273 = v899 == "googie_lang_3d_click";
    if(v273) {
      elm$$48.className = "googie_lang_3d_on";
      JAMScript.call(this.hideLangWindow, this, [])
    }else {
      elm$$48.className = "googie_lang_3d_click";
      JAMScript.call(this.showLangWindow, this, [switch_lan])
    }
    return
  }
  var v1195 = this.img_dir;
  var v900 = v1195 + "change_lang.gif";
  var v274 = {"src":v900, "alt":"Change language"};
  var img$$2 = JAMScript.call(AJS.IMG, AJS, [v274]);
  img$$2.googie_action_btn = "1";
  var v275 = {"class":"googie_lang_3d_on", "style":"padding-left: 6px;"};
  var switch_lan = JAMScript.call(AJS.SPAN, AJS, [v275, img$$2]);
  var v276 = JAMScript.call(AJS.$b, AJS, [fn$$21, this]);
  JAMScript.call(AJS.AEV, AJS, [switch_lan, "click", v276]);
  return switch_lan
}
function v216(elm$$47, ofst_top, ofst_left) {
  var v277 = this.show_menu_observer;
  if(v277) {
    JAMScript.call(this.show_menu_observer, this, [this])
  }
  var v901 = JAMScript.call(AJS.isDefined, AJS, [ofst_top]);
  var v278 = !v901;
  if(v278) {
    ofst_top = 20
  }
  var v902 = JAMScript.call(AJS.isDefined, AJS, [ofst_left]);
  var v279 = !v902;
  if(v279) {
    ofst_left = 100
  }
  JAMScript.call(this.createLangWindow, this, []);
  var v280 = JAMScript.call(AJS.getBody, AJS, []);
  var v281 = this.language_window;
  JAMScript.call(v280.appendChild, v280, [v281]);
  var abs_pos$$1 = JAMScript.call(AJS.absolutePosition, AJS, [elm$$47]);
  var v282 = this.language_window;
  JAMScript.call(AJS.showElement, AJS, [v282]);
  var v283 = this.language_window;
  var v903 = abs_pos$$1.y;
  var v284 = v903 + ofst_top;
  JAMScript.call(AJS.setTop, AJS, [v283, v284]);
  var v285 = this.language_window;
  var v1196 = abs_pos$$1.x;
  var v904 = v1196 + ofst_left;
  var v1197 = this.language_window;
  var v905 = v1197.offsetWidth;
  var v286 = v904 - v905;
  JAMScript.call(AJS.setLeft, AJS, [v285, v286]);
  JAMScript.call(this.highlightCurSel, this, []);
  var v906 = this.language_window;
  var v287 = v906.style;
  v287.visibility = "visible";
  return
}
function v215() {
  var v288 = GOOGIE_CUR_LANG == null;
  if(v288) {
    GOOGIE_CUR_LANG = GOOGIE_DEFAULT_LANG
  }
  var i$$21 = 0;
  var v1198 = this.lang_elms;
  var v907 = v1198.length;
  var v293 = i$$21 < v907;
  for(;v293;) {
    var v1315 = this.lang_elms;
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var v1199 = v1315[i$$21]
    }
    var v908 = v1199.googieId;
    var v292 = v908 == GOOGIE_CUR_LANG;
    if(v292) {
      var v909 = this.lang_elms;
      introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
        var v289 = v909[i$$21]
      }
      v289.className = "googie_list_selected";
      var v290 = this.lang_elms;
      this.lang_cur_elm = v290[i$$21]
    }else {
      var v910 = this.lang_elms;
      introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
        var v291 = v910[i$$21]
      }
      v291.className = "googie_list_onout"
    }
    i$$21 = i$$21 + 1;
    var v1200 = this.lang_elms;
    var v911 = v1200.length;
    v293 = i$$21 < v911
  }
  return
}
function v214() {
  var v294 = this.lang_cur_elm;
  v294.className = "googie_list_onout";
  return
}
function v213() {
  try {
    var v912 = this.language_window;
    var v295 = v912.style;
    v295.visibility = "hidden";
    var v296 = this.switch_lan_pic;
    v296.className = "googie_lang_3d_on"
  }catch(e$$29) {
  }
  return
}
function v212() {
  var v913 = this.language_window;
  var v297 = v913 != null;
  if(v297) {
    var v1316 = this.language_window;
    var v1201 = v1316.style;
    var v914 = v1201.visibility;
    v297 = v914 == "visible"
  }
  return v297
}
function v211(lan_code) {
  GOOGIE_CUR_LANG = lan_code;
  var now = new Date;
  var v915 = now.getTime();
  var v1350 = 365 * 24;
  var v1317 = v1350 * 60;
  var v1202 = v1317 * 60;
  var v916 = v1202 * 1E3;
  var v298 = v915 + v916;
  now.setTime(v298);
  setCookie("language", lan_code, now);
  return
}
function v210() {
  function v209(e$$28) {
    var i_it$$1 = JAMScript.call(AJS.getEventElm, AJS, [e$$28]);
    var v917 = i_it$$1.className;
    var v299 = v917 != "googie_list_selected";
    if(v299) {
      i_it$$1.className = "googie_list_onout"
    }
    return
  }
  function v208(e$$27) {
    var i_it = JAMScript.call(AJS.getEventElm, AJS, [e$$27]);
    var v918 = i_it.className;
    var v300 = v918 != "googie_list_selected";
    if(v300) {
      i_it.className = "googie_list_onhover"
    }
    return
  }
  function v207(e$$26) {
    var elm$$46 = JAMScript.call(AJS.getEventElm, AJS, [e$$26]);
    JAMScript.call(this.deHighlightCurSel, this, []);
    var v301 = elm$$46.googieId;
    JAMScript.call(this.setCurrentLanguage, this, [v301]);
    var v919 = this.lang_state_observer;
    var v302 = v919 != null;
    if(v302) {
      JAMScript.call(this.lang_state_observer, this, [])
    }
    JAMScript.call(this.highlightCurSel, this, []);
    JAMScript.call(this.hideLangWindow, this, []);
    return
  }
  var v303 = {"class":"googie_window"};
  var v1373 = JAMScript.call(AJS.DIV, AJS, [v303]);
  this.language_window = v1373;
  var v304 = this.language_window;
  JAMScript.call(AJS.setWidth, AJS, [v304, 100]);
  var v305 = this.language_window;
  v305.googie_action_btn = "1";
  var v306 = {"class":"googie_list"};
  var table$$2 = JAMScript.call(AJS.TABLE, AJS, [v306]);
  JAMScript.call(AJS.setWidth, AJS, [table$$2, "100%"]);
  var list$$12 = JAMScript.call(AJS.TBODY, AJS, []);
  var v1374 = new Array;
  this.lang_elms = v1374;
  i = 0;
  var v1203 = this.langlist_codes;
  var v920 = v1203.length;
  var v313 = i < v920;
  for(;v313;) {
    var row$$1 = JAMScript.call(AJS.TR, AJS, []);
    var item$$2 = JAMScript.call(AJS.TD, AJS, []);
    var v307 = this.langlist_codes;
    item$$2.googieId = v307[i];
    var v308 = this.lang_elms;
    v308.push(item$$2);
    var lang_span = JAMScript.call(AJS.SPAN, AJS, []);
    var v309 = this.lang_to_word;
    var v921 = this.langlist_codes;
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var v310 = v921[i]
    }
    JAMScript.set(lang_span, "innerHTML", v309[v310], JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F);
    var v922 = lang_span.innerHTML;
    var v311 = JAMScript.call(AJS.TN, AJS, [v922]);
    JAMScript.call(item$$2.appendChild, item$$2, [v311]);
    var fn$$20 = v207;
    var v312 = JAMScript.call(AJS.$b, AJS, [fn$$20, this]);
    JAMScript.call(AJS.AEV, AJS, [item$$2, "click", v312]);
    JAMScript.set(item$$2, "onmouseover", v208);
    JAMScript.set(item$$2, "onmouseout", v209);
    JAMScript.call(row$$1.appendChild, row$$1, [item$$2]);
    JAMScript.call(list$$12.appendChild, list$$12, [row$$1]);
    i = i + 1;
    var v1204 = this.langlist_codes;
    var v923 = v1204.length;
    v313 = i < v923
  }
  var v315 = this.use_close_btn;
  if(v315) {
    var v924 = this.hideLangWindow;
    var v314 = JAMScript.call(this.createCloseButton, this, [v924]);
    JAMScript.call(list$$12.appendChild, list$$12, [v314])
  }
  JAMScript.call(this.highlightCurSel, this, []);
  JAMScript.call(table$$2.appendChild, table$$2, [list$$12]);
  var v316 = this.language_window;
  JAMScript.call(v316.appendChild, v316, [table$$2]);
  return
}
function v206() {
  function v205(elm$$45) {
    JAMScript.call(me$$6.custom_item_evaulator, me$$6, [me$$6, elm$$45]);
    return
  }
  var output = JAMScript.call(AJS.DIV, AJS, []);
  var v317 = output.style;
  v317.textAlign = "left";
  var pointer = 0;
  var results$$1 = this.results;
  var v925 = results$$1.length;
  var v326 = v925 > 0;
  if(v326) {
    var i$$20 = 0;
    var v926 = results$$1.length;
    var v323 = i$$20 < v926;
    for(;v323;) {
      introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
        var v927 = results$$1[i$$20]
      }
      var v318 = v927["attrs"];
      var offset$$15 = v318["o"];
      introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
        var v928 = results$$1[i$$20]
      }
      var v319 = v928["attrs"];
      var len$$1 = v319["l"];
      var v320 = this.orginal_text;
      var part_1_text = v320.substring(pointer, offset$$15);
      var part_1$$1 = JAMScript.call(GoogieSpell.createPart, GoogieSpell, [part_1_text]);
      JAMScript.call(output.appendChild, output, [part_1$$1]);
      var v929 = offset$$15 - pointer;
      pointer = pointer + v929;
      var v930 = this.orginal_text;
      var v321 = v930.substr(offset$$15, len$$1);
      var err_link = JAMScript.call(this.createErrorLink, this, [v321, i$$20]);
      var v322 = this.error_links;
      v322.push(err_link);
      JAMScript.call(output.appendChild, output, [err_link]);
      pointer = pointer + len$$1;
      i$$20 = i$$20 + 1;
      var v931 = results$$1.length;
      v323 = i$$20 < v931
    }
    var v324 = this.orginal_text;
    var v932 = this.orginal_text;
    var v325 = v932.length;
    var part_2_text = v324.substr(pointer, v325);
    var part_2$$1 = JAMScript.call(GoogieSpell.createPart, GoogieSpell, [part_2_text]);
    JAMScript.call(output.appendChild, output, [part_2$$1])
  }else {
    JAMScript.set(output, "innerHTML", this.orginal_text)
  }
  var me$$6 = this;
  var v328 = this.custom_item_evaulator;
  if(v328) {
    var v327 = this.error_links;
    JAMScript.call(AJS.map, AJS, [v327, v205])
  }
  var v329 = this.edit_layer;
  JAMScript.call(AJS.ACN, AJS, [v329, output]);
  var v933 = this.text_area;
  var v330 = v933.offsetTop;
  var v934 = this.text_area;
  var v331 = v934.offsetHeight;
  this.text_area_bottom = v330 + v331;
  var v332 = this.text_area;
  JAMScript.call(AJS.hideElement, AJS, [v332]);
  var v333 = this.edit_layer;
  var v334 = this.text_area;
  JAMScript.call(AJS.insertBefore, AJS, [v333, v334]);
  var v339 = this.use_focus;
  if(v339) {
    var v1375 = JAMScript.call(this.createFocusLink, this, ["focus_t"]);
    this.focus_link_t = v1375;
    var v1376 = JAMScript.call(this.createFocusLink, this, ["focus_b"]);
    this.focus_link_b = v1376;
    var v335 = this.focus_link_t;
    var v336 = this.edit_layer;
    JAMScript.call(AJS.insertBefore, AJS, [v335, v336]);
    var v337 = this.focus_link_b;
    var v338 = this.edit_layer;
    JAMScript.call(AJS.insertAfter, AJS, [v337, v338])
  }
  var v340 = this.edit_layer;
  v340.scrollTop = this.ta_scroll_top;
  return
}
function v204(txt_part) {
  var v341 = txt_part == " ";
  if(v341) {
    return JAMScript.call(AJS.TN, AJS, [" "])
  }
  var result$$2 = JAMScript.call(AJS.SPAN, AJS, []);
  var is_first = true;
  var v1205 = navigator.userAgent;
  var v935 = v1205.toLowerCase();
  var v342 = v935.indexOf("safari");
  var is_safari = v342 != -1;
  var part = JAMScript.call(AJS.SPAN, AJS, []);
  txt_part = JAMScript.call(GoogieSpell.escapeSepcial, GoogieSpell, [txt_part]);
  txt_part = txt_part.replace(/\n/g, "<br>");
  txt_part = txt_part.replace(/    /g, " &nbsp;");
  txt_part = txt_part.replace(/^ /g, "&nbsp;");
  txt_part = txt_part.replace(/ $/g, "&nbsp;");
  JAMScript.set(part, "innerHTML", txt_part);
  return part
}
function v203(text$$10, id$$5) {
  function d$$4(e$$25) {
    JAMScript.call(me$$5.showErrorWindow, me$$5, [elm$$44, id$$5]);
    d$$4 = null;
    return false
  }
  var v343 = {"class":"googie_link"};
  var elm$$44 = JAMScript.call(AJS.SPAN, AJS, [v343]);
  var me$$5 = this;
  JAMScript.call(AJS.AEV, AJS, [elm$$44, "click", d$$4]);
  elm$$44.googie_action_btn = "1";
  elm$$44.g_id = id$$5;
  elm$$44.is_corrected = false;
  JAMScript.call(AJS.AEV, AJS, [elm$$44, "contextmenu", d$$4]);
  JAMScript.set(elm$$44, "innerHTML", text$$10);
  return elm$$44
}
function v202() {
  JAMScript.call(this.setStateChanged, this, ["spell_check"]);
  var v936 = this.switch_lan_pic;
  var v344 = v936.style;
  v344.display = "inline";
  var v346 = this.edit_layer;
  if(v346) {
    var v345 = this.edit_layer;
    this.el_scroll_top = v345.scrollTop
  }
  JAMScript.call(this.hideErrorWindow, this, []);
  var v348 = this.main_controller;
  if(v348) {
    var v347 = this.spell_span;
    v347.className = "googie_no_style"
  }
  var v937 = this.ignore;
  var v357 = !v937;
  if(v357) {
    try {
      var v938 = this.edit_layer;
      var v349 = v938.parentNode;
      var v350 = this.edit_layer;
      v349.removeChild(v350);
      var v353 = this.use_focus;
      if(v353) {
        var v351 = this.focus_link_t;
        JAMScript.call(AJS.removeElement, AJS, [v351]);
        var v352 = this.focus_link_b;
        JAMScript.call(AJS.removeElement, AJS, [v352])
      }
    }catch(e$$24) {
    }
    var v354 = this.text_area;
    JAMScript.call(AJS.showElement, AJS, [v354]);
    var v939 = this.el_scroll_top;
    var v356 = v939 != undefined;
    if(v356) {
      var v355 = this.text_area;
      v355.scrollTop = this.el_scroll_top
    }
  }
  JAMScript.call(this.checkSpellingState, this, [false]);
  return
}
function v201(width$$10, height$$9) {
  function v200(e$$23) {
    function v199() {
      var v358 = me$$4.text_area;
      v358.focus();
      fn1$$1 = null;
      return
    }
    var v1318 = JAMScript.call(AJS.getEventElm, AJS, [e$$23]);
    var v1206 = v1318.className;
    var v940 = v1206 != "googie_link";
    if(v940) {
      var v1207 = JAMScript.call(me$$4.isErrorWindowShown, me$$4, []);
      v940 = !v1207
    }
    var v359 = v940;
    if(v359) {
      JAMScript.call(me$$4.resumeEditing, me$$4, []);
      var fn1$$1 = v199;
      JAMScript.call(setTimeout, null, [fn1$$1, 10])
    }
    return false
  }
  var v360 = {"class":"googie_edit_layer"};
  var v1377 = JAMScript.call(AJS.DIV, AJS, [v360]);
  this.edit_layer = v1377;
  var v361 = this.edit_layer;
  var v941 = this.text_area;
  v361.className = v941.className;
  var v942 = this.edit_layer;
  var v362 = v942.style;
  v362.border = "1px solid #999";
  var v943 = this.edit_layer;
  var v363 = v943.style;
  v363.backgroundColor = "#f7f7f7";
  var v944 = this.edit_layer;
  var v364 = v944.style;
  v364.padding = "3px";
  var v945 = this.edit_layer;
  var v365 = v945.style;
  v365.margin = "0px";
  var v366 = this.edit_layer;
  var v367 = width$$10 - 8;
  JAMScript.call(AJS.setWidth, AJS, [v366, v367]);
  var v1319 = this.text_area;
  var v1208 = JAMScript.call(AJS.nodeName, AJS, [v1319]);
  var v946 = v1208 != "input";
  var v1210 = !v946;
  if(v1210) {
    var v1320 = this.text_area;
    var v1209 = JAMScript.call(this.getValue, this, [v1320]);
    v946 = v1209 == ""
  }
  var v372 = v946;
  if(v372) {
    var v947 = this.edit_layer;
    var v368 = v947.style;
    v368.overflow = "auto";
    var v369 = this.edit_layer;
    var v370 = height$$9 - 6;
    JAMScript.call(AJS.setHeight, AJS, [v369, v370])
  }else {
    var v948 = this.edit_layer;
    var v371 = v948.style;
    v371.overflow = "hidden"
  }
  var v374 = this.edit_layer_dbl_click;
  if(v374) {
    var me$$4 = this;
    var fn$$19 = v200;
    var v373 = this.edit_layer;
    JAMScript.set(v373, "ondblclick", fn$$19);
    fn$$19 = null
  }
  return
}
function v198(elm$$43, id$$4) {
  function v197(i$$19) {
    function v196() {
      return JAMScript.call(e_elm[1], e_elm, [elm$$43, me$$3])
    }
    var v1211 = me$$3.extra_menu_items;
    var v949 = v1211.length;
    var v379 = i$$19 < v949;
    if(v379) {
      var v375 = me$$3.extra_menu_items;
      introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
        var e_elm = v375[i$$19]
      }
      var v1212 = e_elm[2];
      var v950 = !v1212;
      var v1213 = !v950;
      if(v1213) {
        v950 = JAMScript.call(e_elm[2], e_elm, [elm$$43, me$$3])
      }
      var v377 = v950;
      if(v377) {
        var e_row = JAMScript.call(AJS.TR, AJS, []);
        var v376 = e_elm[0];
        var e_col$$1 = JAMScript.call(AJS.TD, AJS, [v376]);
        JAMScript.set(e_col$$1, "onmouseover", GoogieSpell.item_onmouseover);
        JAMScript.set(e_col$$1, "onmouseout", GoogieSpell.item_onmouseout);
        var fn$$18 = v196;
        JAMScript.call(AJS.AEV, AJS, [e_col$$1, "click", fn$$18]);
        JAMScript.call(AJS.ACN, AJS, [e_row, e_col$$1]);
        JAMScript.call(AJS.ACN, AJS, [list$$11, e_row])
      }
      var v378 = i$$19 + 1;
      JAMScript.call(loop, null, [v378])
    }
    return
  }
  function v195() {
    var v951 = edit_input.value;
    var v385 = v951 != "";
    if(v385) {
      var v1214 = elm$$43.old_value;
      var v952 = JAMScript.call(AJS.isDefined, AJS, [v1214]);
      var v381 = !v952;
      if(v381) {
        var v380 = elm$$43.innerHTML;
        JAMScript.call(this.saveOldValue, this, [elm$$43, v380])
      }
      var v382 = elm$$43.innerHTML;
      var v383 = edit_input.value;
      JAMScript.call(this.updateOrginalText, this, [offset$$14, v382, v383, id$$4]);
      var v384 = elm$$43.style;
      v384.color = "green";
      elm$$43.is_corrected = true;
      JAMScript.set(elm$$43, "innerHTML", edit_input.value);
      JAMScript.call(this.hideErrorWindow, this, [])
    }
    return false
  }
  function v194(e$$22) {
    var v386 = elm$$43.innerHTML;
    JAMScript.call(this.updateOrginalText, this, [offset$$14, v386, old_value$$3, id$$4]);
    elm$$43.is_corrected = true;
    var v387 = elm$$43.style;
    v387.color = "#b91414";
    JAMScript.set(elm$$43, "innerHTML", old_value$$3);
    JAMScript.call(this.hideErrorWindow, this, []);
    return
  }
  function v193(e$$21) {
    var l_elm$$1 = JAMScript.call(AJS.getEventElm, AJS, [e$$21]);
    JAMScript.call(this.correctError, this, [id$$4, elm$$43, l_elm$$1]);
    return
  }
  var v388 = this.show_menu_observer;
  if(v388) {
    JAMScript.call(this.show_menu_observer, this, [this])
  }
  var me$$3 = this;
  var abs_pos = JAMScript.call(AJS.absolutePosition, AJS, [elm$$43]);
  var v953 = abs_pos.y;
  var v1215 = this.edit_layer;
  var v954 = v1215.scrollTop;
  abs_pos.y = v953 - v954;
  var v955 = this.error_window;
  var v389 = v955.style;
  v389.visibility = "visible";
  var v390 = this.error_window;
  var v956 = abs_pos.y;
  var v391 = v956 + 20;
  JAMScript.call(AJS.setTop, AJS, [v390, v391]);
  var v392 = this.error_window;
  var v393 = abs_pos.x;
  JAMScript.call(AJS.setLeft, AJS, [v392, v393]);
  var v394 = {"class":"googie_list"};
  var table$$1 = JAMScript.call(AJS.TABLE, AJS, [v394]);
  table$$1.googie_action_btn = "1";
  var list$$11 = JAMScript.call(AJS.TBODY, AJS, []);
  var changed = false;
  var v957 = this.custom_menu_builder;
  var v398 = v957 != [];
  if(v398) {
    var k$$4 = 0;
    var v1216 = this.custom_menu_builder;
    var v958 = v1216.length;
    var v397 = k$$4 < v958;
    for(;v397;) {
      var v395 = this.custom_menu_builder;
      introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
        var eb = v395[k$$4]
      }
      var v1217 = this.results;
      introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
        var v959 = v1217[id$$4]
      }
      var v396 = JAMScript.call(eb[0], eb, [v959]);
      if(v396) {
        changed = JAMScript.call(eb[1], eb, [this, list$$11, elm$$43]);
        break
      }
      k$$4 = k$$4 + 1;
      var v1218 = this.custom_menu_builder;
      var v960 = v1218.length;
      v397 = k$$4 < v960
    }
  }
  var v420 = !changed;
  if(v420) {
    var v961 = this.results;
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var v399 = v961[id$$4]
    }
    var suggestions = v399["suggestions"];
    var v1219 = this.results;
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var v962 = v1219[id$$4]
    }
    var v400 = v962["attrs"];
    var offset$$14 = v400["o"];
    var v1220 = this.results;
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var v963 = v1220[id$$4]
    }
    var v401 = v963["attrs"];
    var len = v401["l"];
    var v964 = suggestions.length;
    var v404 = v964 == 0;
    if(v404) {
      var row = JAMScript.call(AJS.TR, AJS, []);
      var v402 = {"style":"cursor: default;"};
      var item$$1 = JAMScript.call(AJS.TD, AJS, [v402]);
      var dummy = JAMScript.call(AJS.SPAN, AJS, []);
      JAMScript.set(dummy, "innerHTML", this.lang_no_suggestions);
      var v965 = dummy.innerHTML;
      var v403 = JAMScript.call(AJS.TN, AJS, [v965]);
      JAMScript.call(AJS.ACN, AJS, [item$$1, v403]);
      item$$1.googie_action_btn = "1";
      JAMScript.call(row.appendChild, row, [item$$1]);
      JAMScript.call(list$$11.appendChild, list$$11, [row])
    }
    i = 0;
    var v966 = suggestions.length;
    var v407 = i < v966;
    for(;v407;) {
      row = JAMScript.call(AJS.TR, AJS, []);
      item$$1 = JAMScript.call(AJS.TD, AJS, []);
      dummy = JAMScript.call(AJS.SPAN, AJS, []);
      JAMScript.set(dummy, "innerHTML", suggestions[i]);
      var v405 = dummy.innerHTML;
      var tre = JAMScript.call(AJS.TN, AJS, [v405]);
      JAMScript.call(item$$1.appendChild, item$$1, [tre]);
      var fn$$17 = v193;
      var v406 = JAMScript.call(AJS.$b, AJS, [fn$$17, this]);
      JAMScript.call(AJS.AEV, AJS, [item$$1, "click", v406]);
      var mytxfn1 = GoogieSpell.item_onmouseover;
      JAMScript.call(AJS.AEV, AJS, [item$$1, "mouseover", mytxfn1]);
      var mytxfn2 = GoogieSpell.item_onmouseout;
      JAMScript.call(AJS.AEV, AJS, [item$$1, "mouseout", mytxfn2]);
      JAMScript.call(row.appendChild, row, [item$$1]);
      JAMScript.call(list$$11.appendChild, list$$11, [row]);
      i = i + 1;
      var v967 = suggestions.length;
      v407 = i < v967
    }
    var v968 = elm$$43.is_changed;
    if(v968) {
      var v1221 = elm$$43.innerHTML;
      var v1222 = elm$$43.old_value;
      v968 = v1221 != v1222
    }
    var v411 = v968;
    if(v411) {
      var old_value$$3 = elm$$43.old_value;
      var revert_row = JAMScript.call(AJS.TR, AJS, []);
      var revert = JAMScript.call(AJS.TD, AJS, []);
      mytxfn1 = GoogieSpell.item_onmouseover;
      JAMScript.call(AJS.AEV, AJS, [revert, "mouseover", mytxfn1]);
      mytxfn2 = GoogieSpell.item_onmouseout;
      JAMScript.call(AJS.AEV, AJS, [revert, "mouseout", mytxfn2]);
      var v408 = {"class":"googie_list_revert"};
      var rev_span = JAMScript.call(AJS.SPAN, AJS, [v408]);
      var v969 = this.lang_revert;
      var v409 = v969 + " ";
      JAMScript.set(rev_span, "innerHTML", v409 + old_value$$3);
      JAMScript.call(revert.appendChild, revert, [rev_span]);
      fn$$17 = v194;
      var v410 = JAMScript.call(AJS.$b, AJS, [fn$$17, this]);
      JAMScript.call(AJS.AEV, AJS, [revert, "click", v410]);
      JAMScript.call(revert_row.appendChild, revert_row, [revert]);
      JAMScript.call(list$$11.appendChild, list$$11, [revert_row])
    }
    var edit_row = JAMScript.call(AJS.TR, AJS, []);
    var v412 = {"style":"cursor: default"};
    var edit = JAMScript.call(AJS.TD, AJS, [v412]);
    var v970 = elm$$43.innerHTML;
    var v413 = {"style":"width: 120px; margin:0; padding:0", "value":v970};
    var edit_input = JAMScript.call(AJS.INPUT, AJS, [v413]);
    edit_input.googie_action_btn = "1";
    var onsub = v195;
    onsub = JAMScript.call(AJS.$b, AJS, [onsub, this]);
    var v1223 = this.img_dir;
    var v971 = v1223 + "ok.gif";
    var v414 = {"src":v971, "style":"width: 32px; height: 16px; margin-left: 2px; margin-right: 2px; cursor: pointer;"};
    var ok_pic = JAMScript.call(AJS.IMG, AJS, [v414]);
    var v415 = {"style":"margin: 0; padding: 0; cursor: default;"};
    var edit_form = JAMScript.call(AJS.FORM, AJS, [v415, edit_input, ok_pic]);
    edit_form.googie_action_btn = "1";
    edit.googie_action_btn = "1";
    JAMScript.call(AJS.AEV, AJS, [edit_form, "submit", onsub]);
    JAMScript.call(AJS.AEV, AJS, [ok_pic, "click", onsub]);
    JAMScript.call(edit.appendChild, edit, [edit_form]);
    JAMScript.call(edit_row.appendChild, edit_row, [edit]);
    JAMScript.call(list$$11.appendChild, list$$11, [edit_row]);
    var v1224 = this.extra_menu_items;
    var v972 = v1224.length;
    var v417 = v972 > 0;
    if(v417) {
      var v416 = JAMScript.call(this.createListSeparator, this, []);
      JAMScript.call(AJS.ACN, AJS, [list$$11, v416])
    }
    var loop = v197;
    JAMScript.call(loop, null, [0]);
    loop = null;
    var v419 = this.use_close_btn;
    if(v419) {
      var v973 = this.hideErrorWindow;
      var v418 = JAMScript.call(this.createCloseButton, this, [v973]);
      JAMScript.call(AJS.ACN, AJS, [list$$11, v418])
    }
  }
  JAMScript.call(table$$1.appendChild, table$$1, [list$$11]);
  var v421 = this.error_window;
  JAMScript.call(v421.appendChild, v421, [table$$1]);
  var v974 = JAMScript.call(AJS.isIe, AJS, []);
  if(v974) {
    var v1225 = this.error_window_iframe;
    v974 = !v1225
  }
  var v424 = v974;
  if(v424) {
    var v422 = {"style":"position: absolute; z-index: 0;"};
    var iframe = JAMScript.call(AJS.IFRAME, AJS, [v422]);
    var v423 = JAMScript.call(AJS.getBody, AJS, []);
    JAMScript.call(AJS.ACN, AJS, [v423, iframe]);
    this.error_window_iframe = iframe
  }
  var v430 = JAMScript.call(AJS.isIe, AJS, []);
  if(v430) {
    iframe = this.error_window_iframe;
    var v975 = this.error_window;
    var v425 = v975.offsetTop;
    JAMScript.call(AJS.setTop, AJS, [iframe, v425]);
    var v976 = this.error_window;
    var v426 = v976.offsetLeft;
    JAMScript.call(AJS.setLeft, AJS, [iframe, v426]);
    var v977 = this.error_window;
    var v427 = v977.offsetWidth;
    JAMScript.call(AJS.setWidth, AJS, [iframe, v427]);
    var v978 = this.error_window;
    var v428 = v978.offsetHeight;
    JAMScript.call(AJS.setHeight, AJS, [iframe, v428]);
    var v429 = iframe.style;
    v429.visibility = "visible"
  }
  var link = JAMScript.call(this.createFocusLink, this, ["link"]);
  var v431 = {"style":"text-align: right; font-size: 1px; height: 1px; margin: 0; padding: 0;"};
  var a1 = JAMScript.call(AJS.TD, AJS, [v431, link]);
  var a2 = JAMScript.call(AJS.TR, AJS, [a1]);
  JAMScript.call(list$$11.appendChild, list$$11, [a2]);
  link.focus();
  return
}
function v192(id$$3, elm$$42, l_elm, rm_pre_space) {
  var old_value$$2 = elm$$42.innerHTML;
  var new_value$$1 = l_elm.innerHTML;
  var v1226 = this.results;
  introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
    var v979 = v1226[id$$3]
  }
  var v432 = v979["attrs"];
  var offset$$13 = v432["o"];
  if(rm_pre_space) {
    var v433 = elm$$42.previousSibling;
    var pre_length = v433.innerHTML;
    var v434 = elm$$42.previousSibling;
    var v1227 = pre_length.length;
    var v980 = v1227 - 1;
    var v1378 = pre_length.slice(0, v980);
    JAMScript.set(v434, "innerHTML", v1378);
    old_value$$2 = " " + old_value$$2;
    offset$$13 = offset$$13 - 1
  }
  JAMScript.call(this.hideErrorWindow, this, []);
  JAMScript.call(this.updateOrginalText, this, [offset$$13, old_value$$2, new_value$$1, id$$3]);
  JAMScript.set(elm$$42, "innerHTML", new_value$$1);
  var v435 = elm$$42.style;
  v435.color = "green";
  elm$$42.is_corrected = true;
  var v1228 = this.results;
  introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
    var v981 = v1228[id$$3]
  }
  var v436 = v981["attrs"];
  v436["l"] = new_value$$1.length;
  var v1229 = elm$$42.old_value;
  var v982 = JAMScript.call(AJS.isDefined, AJS, [v1229]);
  var v437 = !v982;
  if(v437) {
    JAMScript.call(this.saveOldValue, this, [elm$$42, old_value$$2])
  }
  JAMScript.call(this.errorFixed, this, []);
  return
}
function v191() {
  var e_col = JAMScript.call(AJS.TD, AJS, [" "]);
  e_col.googie_action_btn = "1";
  var v438 = e_col.style;
  v438.cursor = "default";
  var v439 = e_col.style;
  v439.fontSize = "3px";
  var v440 = e_col.style;
  v440.borderTop = "1px solid #ccc";
  var v441 = e_col.style;
  v441.paddingTop = "3px";
  return JAMScript.call(AJS.TR, AJS, [e_col])
}
function v190(elm$$41, old_value$$1) {
  elm$$41.is_changed = true;
  elm$$41.old_value = old_value$$1;
  return
}
function v189(offset$$12, old_value, new_value, id$$2) {
  var v442 = this.orginal_text;
  var part_1 = v442.substring(0, offset$$12);
  var v443 = this.orginal_text;
  var v983 = old_value.length;
  var v444 = offset$$12 + v983;
  var part_2 = v443.substring(v444);
  var v445 = part_1 + new_value;
  this.orginal_text = v445 + part_2;
  var v446 = this.text_area;
  var v447 = this.orginal_text;
  JAMScript.call(this.setValue, this, [v446, v447]);
  var v448 = new_value.length;
  var v449 = old_value.length;
  var add_2_offset = v448 - v449;
  var j$$3 = 0;
  var v1230 = this.results;
  var v984 = v1230.length;
  var v452 = j$$3 < v984;
  for(;v452;) {
    var v985 = j$$3 != id$$2;
    if(v985) {
      v985 = j$$3 > id$$2
    }
    var v451 = v985;
    if(v451) {
      var v1231 = this.results;
      introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
        var v986 = v1231[j$$3]
      }
      var v450 = v986["attrs"];
      var v1232 = v450["o"];
      v450["o"] = v1232 + add_2_offset
    }
    j$$3 = j$$3 + 1;
    var v1233 = this.results;
    var v987 = v1233.length;
    v452 = j$$3 < v987
  }
  return
}
function v188() {
  try {
    var v988 = this.error_window;
    var v453 = v988.style;
    v453.visibility = "hidden";
    var v455 = this.error_window_iframe;
    if(v455) {
      var v989 = this.error_window_iframe;
      var v454 = v989.style;
      v454.visibility = "hidden"
    }
  }catch(e$$20) {
  }
  return
}
function v187() {
  var v990 = this.error_window;
  var v456 = v990 != null;
  if(v456) {
    var v1321 = this.error_window;
    var v1234 = v1321.style;
    var v991 = v1234.visibility;
    v456 = v991 == "visible"
  }
  return v456
}
function v186() {
  var v1379 = JAMScript.call(AJS.DIV, AJS, []);
  this.error_window = v1379;
  var v457 = this.error_window;
  v457.className = "googie_window";
  var v458 = this.error_window;
  v458.googie_action_btn = "1";
  return
}
function v185() {
  var v992 = this.cnt_errors;
  this.cnt_errors = v992 + 1;
  return
}
function v184() {
  var v993 = this.cnt_errors_fixed;
  this.cnt_errors_fixed = v993 + 1;
  var v460 = this.all_errors_fixed_observer;
  if(v460) {
    var v994 = this.cnt_errors_fixed;
    var v995 = this.cnt_errors;
    var v459 = v994 == v995;
    if(v459) {
      JAMScript.call(this.hideErrorWindow, this, []);
      JAMScript.call(this.all_errors_fixed_observer, this, [])
    }
  }
  return
}
function v183(r_text$$1) {
  var re_split_attr_c = /\w+="(\d+|true)"/g;
  var re_split_text = /\t/g;
  var matched_c = r_text$$1.match(/<c[^>]*>[^<]*<\/c>/g);
  var results = new Array;
  var v461 = matched_c == null;
  if(v461) {
    return results
  }
  var i$$18 = 0;
  var v996 = matched_c.length;
  var v476 = i$$18 < v996;
  for(;v476;) {
    var item = new Array;
    JAMScript.call(this.errorFound, this, []);
    var v1380 = new Array;
    item["attrs"] = v1380;
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var v462 = matched_c[i$$18]
    }
    var split_c = v462.match(re_split_attr_c);
    var j$$2 = 0;
    var v997 = split_c.length;
    var v470 = j$$2 < v997;
    for(;v470;) {
      introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
        var v463 = split_c[j$$2]
      }
      var c_attr = v463.split(/=/);
      var v464 = c_attr[1];
      var val$$5 = v464.replace(/"/g, "");
      var v469 = val$$5 != "true";
      if(v469) {
        var v465 = item["attrs"];
        var v466 = c_attr[0];
        var v1381 = parseInt(val$$5);
        JAMScript.set(v465, v466, v1381)
      }else {
        var v467 = item["attrs"];
        var v468 = c_attr[0];
        JAMScript.set(v467, v468, val$$5)
      }
      j$$2 = j$$2 + 1;
      var v998 = split_c.length;
      v470 = j$$2 < v998
    }
    var v1382 = new Array;
    item["suggestions"] = v1382;
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var v471 = matched_c[i$$18]
    }
    var only_text = v471.replace(/<[^>]*>/g, "");
    var split_t = only_text.split(re_split_text);
    var k$$3 = 0;
    var v999 = split_t.length;
    var v475 = k$$3 < v999;
    for(;v475;) {
      introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
        var v1000 = split_t[k$$3]
      }
      var v474 = v1000 != "";
      if(v474) {
        var v472 = item["suggestions"];
        introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
          var v473 = split_t[k$$3]
        }
        v472.push(v473)
      }
      k$$3 = k$$3 + 1;
      var v1001 = split_t.length;
      v475 = k$$3 < v1001
    }
    results.push(item);
    i$$18 = i$$18 + 1;
    var v1002 = matched_c.length;
    v476 = i$$18 < v1002
  }
  return results
}
function v182(ignore) {
  function reqfailed(res_txt$$1, req$$7) {
    var v477 = me$$2.custom_ajax_error;
    if(v477) {
      JAMScript.call(me$$2.custom_ajax_error, me$$2, [req$$7])
    }else {
      alert("An error was encountered on the server. Please try again later.")
    }
    var v479 = me$$2.main_controller;
    if(v479) {
      var v478 = me$$2.spell_span;
      JAMScript.call(AJS.removeElement, AJS, [v478]);
      JAMScript.call(me$$2.removeIndicator, me$$2, [])
    }
    JAMScript.call(me$$2.checkSpellingState, me$$2, []);
    return
  }
  function reqdone(res_txt) {
    var r_text = res_txt;
    var v480 = me$$2;
    var v1383 = JAMScript.call(me$$2.parseResult, me$$2, [r_text]);
    v480.results = v1383;
    var v1003 = r_text.match(/<c.*>/);
    var v482 = v1003 != null;
    if(v482) {
      JAMScript.call(me$$2.showErrorsInIframe, me$$2, []);
      JAMScript.call(me$$2.resumeEditingState, me$$2, [])
    }else {
      var v1004 = me$$2.custom_no_spelling_error;
      var v481 = !v1004;
      if(v481) {
        JAMScript.call(me$$2.flashNoSpellingErrorState, me$$2, [])
      }else {
        JAMScript.call(me$$2.custom_no_spelling_error, me$$2, [me$$2])
      }
    }
    JAMScript.call(me$$2.removeIndicator, me$$2, []);
    return
  }
  var me$$2 = this;
  this.cnt_errors_fixed = 0;
  this.cnt_errors = 0;
  JAMScript.call(this.setStateChanged, this, ["checking_spell"]);
  var v484 = this.main_controller;
  if(v484) {
    var v483 = this.spell_span;
    JAMScript.call(this.appendIndicator, this, [v483])
  }
  this.error_links = [];
  var v485 = this.text_area;
  this.ta_scroll_top = v485.scrollTop;
  try {
    JAMScript.call(this.hideLangWindow, this, [])
  }catch(e$$19) {
  }
  this.ignore = ignore;
  var v1322 = this.text_area;
  var v1235 = JAMScript.call(this.getValue, this, [v1322]);
  var v1005 = v1235 == "";
  var v1236 = !v1005;
  if(v1236) {
    v1005 = ignore
  }
  var v487 = v1005;
  if(v487) {
    var v1006 = me$$2.custom_no_spelling_error;
    var v486 = !v1006;
    if(v486) {
      JAMScript.call(me$$2.flashNoSpellingErrorState, me$$2, [])
    }else {
      JAMScript.call(me$$2.custom_no_spelling_error, me$$2, [me$$2])
    }
    JAMScript.call(me$$2.removeIndicator, me$$2, []);
    return
  }
  var v1007 = this.text_area;
  var v488 = v1007.offsetWidth;
  var v1008 = this.text_area;
  var v489 = v1008.offsetHeight;
  JAMScript.call(this.createEditLayer, this, [v488, v489]);
  JAMScript.call(this.createErrorWindow, this, []);
  var v490 = JAMScript.call(AJS.getBody, AJS, []);
  var v491 = this.error_window;
  JAMScript.call(v490.appendChild, v490, [v491]);
  var v493 = this.main_controller;
  if(v493) {
    var v492 = this.spell_span;
    JAMScript.set(v492, "onclick", null)
  }
  var v494 = this.text_area;
  var v1384 = JAMScript.call(this.getValue, this, [v494]);
  this.orginal_text = v1384;
  var v495 = JAMScript.call(this.getGoogleUrl, this, []);
  var d$$3 = JAMScript.call(AJS.getRequest, AJS, [v495]);
  JAMScript.call(d$$3.addCallback, d$$3, [reqdone]);
  reqdone = null;
  JAMScript.call(d$$3.addErrback, d$$3, [reqfailed]);
  reqfailed = null;
  var v496 = this.orginal_text;
  var req_text = JAMScript.call(GoogieSpell.escapeSepcial, GoogieSpell, [v496]);
  var v497 = JAMScript.call(GoogieSpell.createXMLReq, GoogieSpell, [req_text]);
  JAMScript.call(d$$3.sendReq, d$$3, [v497]);
  return
}
function v181(text$$9) {
  var v498 = '<?xml version="1.0" encoding="utf-8" ?><spellrequest textalreadyclipped="0" ignoredups="0" ignoredigits="1" ignoreallcaps="1"><text>' + text$$9;
  return v498 + "</text></spellrequest>"
}
function v180(val$$4) {
  var v1009 = val$$4.replace(/&/g, "&amp;");
  var v499 = v1009.replace(/</g, "&lt;");
  return v499.replace(/>/g, "&gt;")
}
function v179() {
  var v500 = this.server_url;
  return v500 + GOOGIE_CUR_LANG
}
function v178(bool$$1) {
  this.report_state_change = bool$$1;
  return
}
function v177(current_state) {
  this.state = current_state;
  var v1237 = this.spelling_state_observer;
  var v1010 = v1237 != null;
  if(v1010) {
    v1010 = this.report_state_change
  }
  var v501 = v1010;
  if(v501) {
    JAMScript.call(this.spelling_state_observer, this, [current_state, this])
  }
  return
}
function v176(ta$$1, value$$30) {
  ta$$1.value = value$$30;
  return
}
function v175(ta) {
  return ta.value
}
function v174() {
  try {
    var v502 = this.focus_link_b;
    v502.focus();
    var v503 = this.focus_link_t;
    v503.focus();
    return true
  }catch(e$$18) {
    return false
  }
  return
}
function v173(eval$$1, builder) {
  var v504 = this.custom_menu_builder;
  var v505 = [eval$$1, builder];
  v504.push(v505);
  return
}
function v172(name$$34, call_back_fn, checker) {
  var v506 = this.extra_menu_items;
  var v507 = [name$$34, call_back_fn, checker];
  v506.push(v507);
  return
}
function v171() {
  this.use_close_btn = false;
  return
}
function v170(bool) {
  this.decoration = bool;
  return
}
function v169(width$$9, height$$8) {
  this.force_width = width$$9;
  this.force_height = height$$8;
  return
}
function v168(lang_dict) {
  this.lang_to_word = lang_dict;
  var v1385 = JAMScript.call(AJS.keys, AJS, [lang_dict]);
  this.langlist_codes = v1385;
  return
}
function v167(elm$$40) {
  var v1386 = JAMScript.call(AJS.$, AJS, [elm$$40]);
  this.spell_container = v1386;
  return
}
function v166(id$$1) {
  var v1011 = typeof id$$1;
  var v508 = v1011 == "string";
  if(v508) {
    var v1387 = JAMScript.call(AJS.$, AJS, [id$$1]);
    this.text_area = v1387
  }else {
    this.text_area = id$$1
  }
  var r_width;
  var r_height;
  var v1012 = this.text_area;
  var v516 = v1012 != null;
  if(v516) {
    var v1323 = this.spell_container;
    var v1238 = JAMScript.call(AJS.isDefined, AJS, [v1323]);
    var v1013 = !v1238;
    if(v1013) {
      v1013 = this.decoration
    }
    var v514 = v1013;
    if(v514) {
      var table = JAMScript.call(AJS.TABLE, AJS, []);
      var tbody = JAMScript.call(AJS.TBODY, AJS, []);
      var tr = JAMScript.call(AJS.TR, AJS, []);
      var v1014 = this.force_width;
      var v510 = JAMScript.call(AJS.isDefined, AJS, [v1014]);
      if(v510) {
        r_width = this.force_width
      }else {
        var v1015 = this.text_area;
        var v509 = v1015.offsetWidth;
        r_width = v509 + "px"
      }
      var v1016 = this.force_height;
      var v511 = JAMScript.call(AJS.isDefined, AJS, [v1016]);
      if(v511) {
        r_height = this.force_height
      }else {
        r_height = ""
      }
      var spell_container = JAMScript.call(AJS.TD, AJS, []);
      this.spell_container = spell_container;
      JAMScript.call(tr.appendChild, tr, [spell_container]);
      JAMScript.call(tbody.appendChild, tbody, [tr]);
      JAMScript.call(table.appendChild, table, [tbody]);
      var v512 = this.text_area;
      JAMScript.call(AJS.insertBefore, AJS, [table, v512]);
      JAMScript.call(AJS.setHeight, AJS, [table, spell_container, r_height]);
      JAMScript.call(AJS.setWidth, AJS, [table, spell_container, r_width]);
      var v513 = spell_container.style;
      v513.textAlign = "right"
    }
    JAMScript.call(this.checkSpellingState, this, [])
  }else {
    var v515 = this.report_ta_not_found;
    if(v515) {
      alert("Text area not found")
    }
  }
  return
}
function v165(data$$21) {
  var req$$6 = this.req;
  var http_method = this.http_method;
  var http_url = this.http_url;
  var v522 = http_method == "POST";
  if(v522) {
    req$$6.open(http_method, http_url, true);
    var v517 = req$$6;
    var v1017 = this._onreadystatechange;
    var v1388 = JAMScript.call(AJS.$b, AJS, [v1017, this]);
    JAMScript.set(v517, "onreadystatechange", v1388);
    req$$6.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var v520 = JAMScript.call(AJS.isObject, AJS, [data$$21]);
    if(v520) {
      var v518 = JAMScript.call(AJS.encodeArguments, AJS, [data$$21]);
      req$$6.send(v518)
    }else {
      var v519 = JAMScript.call(AJS.isDefined, AJS, [data$$21]);
      if(v519) {
        req$$6.send(data$$21)
      }else {
        req$$6.send("")
      }
    }
  }else {
    req$$6.open("GET", http_url, true);
    var v521 = req$$6;
    var v1018 = this._onreadystatechange;
    var v1389 = JAMScript.call(AJS.$b, AJS, [v1018, this]);
    JAMScript.set(v521, "onreadystatechange", v1389);
    req$$6.send(null)
  }
  return
}
function v164() {
  var req$$5 = this.req;
  var d$$2 = this;
  var v1019 = req$$5.readyState;
  var v524 = v1019 == 4;
  if(v524) {
    var status = "";
    try {
      status = req$$5.status
    }catch(e$$16) {
    }
    var v1020 = status == 200;
    var v1240 = !v1020;
    if(v1240) {
      var v1239 = status == 304;
      var v1325 = !v1239;
      if(v1325) {
        var v1324 = req$$5.responseText;
        v1239 = v1324 == null
      }
      v1020 = v1239
    }
    var v523 = v1020;
    if(v523) {
      JAMScript.call(this.callback, this, [])
    }else {
      JAMScript.call(this.errback, this, [])
    }
  }
  return
}
function v163(fn1, fn2) {
  JAMScript.call(this.addCallback, this, [fn1]);
  JAMScript.call(this.addErrback, this, [fn2]);
  return
}
function v162() {
  var v525 = this.req;
  JAMScript.call(v525.abort, v525, []);
  return
}
function v161(fn$$15) {
  var v526 = this.callbacks;
  v526.unshift(fn$$15);
  return
}
function v160(fn$$14) {
  var v527 = this.errbacks;
  v527.unshift(fn$$14);
  return
}
function v159() {
  var v1241 = this.errbacks;
  var v1021 = v1241.length;
  var v533 = v1021 == 0;
  if(v533) {
    var v532 = AJS.ajaxErrorHandler;
    if(v532) {
      var v528 = req.responseText;
      JAMScript.call(AJS.ajaxErrorHandler, AJS, [v528, req])
    }else {
      var v1022 = this.req;
      var v529 = v1022.responseText;
      var txt$$1 = v529.substring(0, 200);
      var v1023 = JAMScript.call(AJS.strip, AJS, [txt$$1]);
      if(v1023) {
        var v1242 = txt$$1.indexOf("<html");
        v1023 = v1242 == -1
      }
      var v531 = v1023;
      if(v531) {
        var v530 = "Error encountered:\n" + txt$$1;
        alert(v530)
      }
    }
  }
  var v536 = AJS.generalErrorback;
  if(v536) {
    var v534 = this.req;
    var result$$1 = JAMScript.call(AJS.generalErrorback, AJS, [v534]);
    var v535 = !result$$1;
    if(v535) {
      return
    }
  }
  var v537 = this.req;
  var v538 = this.errbacks;
  JAMScript.call(this.excCallbackSeq, this, [v537, v538]);
  return
}
function v158() {
  var v539 = this.req;
  var v540 = this.callbacks;
  JAMScript.call(this.excCallbackSeq, this, [v539, v540]);
  return
}
function v157(req$$4, list$$10) {
  var data$$20 = req$$4.responseText;
  var v542 = AJS.generalCallback;
  if(v542) {
    data$$20 = JAMScript.call(AJS.generalCallback, AJS, [req$$4, list$$10]);
    var v541 = !data$$20;
    if(v541) {
      return
    }
  }
  var v1024 = list$$10.length;
  var v544 = v1024 > 0;
  for(;v544;) {
    var fn$$13 = list$$10.pop();
    var new_data = JAMScript.call(fn$$13, null, [data$$20, req$$4]);
    if(new_data) {
      data$$20 = new_data
    }else {
      var v543 = new_data == false;
      if(v543) {
        break
      }
    }
    var v1025 = list$$10.length;
    v544 = v1025 > 0
  }
  return
}
function v156(req$$3, method$$2, url$$5) {
  this.callbacks = [];
  this.errbacks = [];
  this.req = req$$3;
  this.http_method = method$$2;
  this.http_url = url$$5;
  return
}
function v155(cur$$1, prev$$1) {
  function v154() {
    this.parent = prev$$1;
    return JAMScript.call(cur$$1.apply, cur$$1, [this, arguments])
  }
  return v154
}
function v153(members$$2) {
  var v545 = this.prototype;
  JAMScript.call(AJS.update, AJS, [v545, members$$2]);
  return
}
function v152(members$$1) {
  var parent$$2 = JAMScript.new(this, ["no_init"]);
  for(k in members$$1) {
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var prev = parent$$2[k]
    }
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var cur = members$$1[k]
    }
    var v1026 = prev;
    if(v1026) {
      var v1243 = prev != cur;
      if(v1243) {
        var v1326 = typeof cur;
        v1243 = v1326 == "function"
      }
      v1026 = v1243
    }
    var v546 = v1026;
    if(v546) {
      cur = JAMScript.call(this._parentize, this, [cur, prev])
    }
    JAMScript.set(parent$$2, k, cur)
  }
  var v547 = AJS.Class;
  return JAMScript.new(v547, [parent$$2])
}
function v151(members) {
  function fn$$12() {
    var v1027 = arguments[0];
    var v549 = v1027 != "no_init";
    if(v549) {
      var v548 = this.init;
      return JAMScript.call(v548.apply, v548, [this, arguments])
    }
    return
  }
  fn$$12.prototype = members;
  var v1028 = AJS.Class;
  var v550 = v1028.prototype;
  JAMScript.call(AJS.update, AJS, [fn$$12, v550]);
  return fn$$12
}
function v150(str$$9, limit, delim$$1) {
  var v1029 = str$$9.length;
  var v553 = v1029 > limit;
  if(v553) {
    var v551 = str$$9.substring(0, limit);
    var v552 = delim$$1 || "...";
    return v551 + v552
  }
  return str$$9
}
function v149(str$$8) {
  var v554 = str$$8.replace(/^\s+/, "");
  return v554.replace(/\s+$/g, "")
}
function v148(export_scope, fn$$11) {
  JAMScript.call(fn$$11.apply, fn$$11, [export_scope, []]);
  return
}
function v147(o$$7) {
  try {
    var v557 = window._firebug;
    if(v557) {
      var v555 = window._firebug;
      JAMScript.call(v555.log, v555, [o$$7])
    }else {
      var v556 = window.console;
      if(v556) {
        JAMScript.call(console.log, console, [o$$7])
      }
    }
  }catch(e$$15) {
  }
  return
}
function v146(scope$$3) {
  scope$$3 = scope$$3 || window;
  for(e in AJS) {
    var v558 = e != "addEventListener";
    if(v558) {
      JAMScript.set(scope$$3, e, AJS[e], JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F)
    }
  }
  return
}
function v145(o$$6) {
  var str_repr = String(o$$6);
  var v559 = str_repr.indexOf(" Object");
  return v559 != -1
}
function v144(obj$$22) {
  var v560 = typeof obj$$22;
  return v560 == "function"
}
function v143(obj$$21) {
  var v561 = typeof obj$$21;
  return v561 == "object"
}
function v142(obj$$20) {
  var v562 = typeof obj$$20;
  return v562 == "number"
}
function v141(obj$$19) {
  var v563 = typeof obj$$19;
  return v563 == "string"
}
function v140(obj$$18) {
  try {
    return obj$$18 instanceof Array
  }catch(e$$14) {
    return false
  }
  return
}
function v139(o$$5) {
  var v564 = o$$5 != "undefined";
  if(v564) {
    v564 = o$$5 != null
  }
  return v564
}
function v138(str$$7) {
  var v1244 = JAMScript.call(AJS.isDefined, AJS, [str$$7]);
  if(v1244) {
    v1244 = str$$7.toString()
  }
  var v1030 = v1244;
  var v1245 = !v1030;
  if(v1245) {
    v1030 = ""
  }
  var v565 = v1030;
  var result = decodeURIComponent(v565);
  return result.replace(/\+/g, " ")
}
function v137(str$$6) {
  var v1246 = JAMScript.call(AJS.isDefined, AJS, [str$$6]);
  if(v1246) {
    v1246 = str$$6.toString()
  }
  var v1031 = v1246;
  var v1247 = !v1031;
  if(v1247) {
    v1031 = ""
  }
  var v566 = v1031;
  return encodeURIComponent(v566)
}
function v136(obj$$17) {
  var rval$$1 = [];
  var prop$$6;
  for(prop$$6 in obj$$17) {
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var v567 = obj$$17[prop$$6]
    }
    rval$$1.push(v567)
  }
  return rval$$1
}
function v135(obj$$16) {
  var rval = [];
  var prop$$5;
  for(prop$$5 in obj$$16) {
    rval.push(prop$$5)
  }
  return rval
}
function v134(name$$33, fn$$10, interval) {
  var v568 = AJS._reccruing_tos;
  introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
    var current = v568[name$$33]
  }
  if(current) {
    clearTimeout(current)
  }
  var v569 = AJS._reccruing_tos;
  var v570 = name$$33;
  var v1390 = JAMScript.call(setTimeout, null, [fn$$10, interval]);
  JAMScript.set(v569, v570, v1390);
  return
}
function v133(fn$$9, extra_args$$1) {
  function v132() {
    try {
      var v571 = JAMScript.call(AJS.$FA, AJS, [arguments]);
      var args$$14 = v571.concat(extra_args$$1);
      return JAMScript.call(fn$$9.apply, fn$$9, [scope$$2, args$$14])
    }catch(e$$13) {
    }
    return
  }
  extra_args$$1 = JAMScript.call(AJS.$A, AJS, [extra_args$$1]);
  var v572 = fn$$9._cscope;
  var v1032 = !v572;
  if(v1032) {
    v572 = window
  }
  var scope$$2 = v572;
  return v132
}
function v131(elm$$38, type$$30, fn$$8) {
  function r_fn() {
    JAMScript.call(AJS.removeEventListener, AJS, [elm$$38, type$$30, r_fn]);
    JAMScript.call(fn$$8, null, [arguments]);
    return
  }
  return r_fn
}
function v130(e$$12) {
  var v574 = JAMScript.call(AJS.isIe, AJS, []);
  if(v574) {
    var v573 = window.event;
    v573.returnValue = false
  }else {
    JAMScript.call(e$$12.preventDefault, e$$12, [])
  }
  return
}
function v129(self$$1) {
  var k$$2;
  for(k$$2 in self$$1) {
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var func$$4 = self$$1[k$$2]
    }
    var v1033 = typeof func$$4;
    var v577 = v1033 == "function";
    if(v577) {
      var v575 = self$$1;
      var v576 = k$$2;
      var v1391 = JAMScript.call(AJS.$b, AJS, [func$$4, self$$1]);
      JAMScript.set(v575, v576, v1391)
    }
  }
  return
}
function v128(fn$$7, scope$$1, extra_args) {
  fn$$7._cscope = scope$$1;
  return JAMScript.call(AJS._getRealScope, AJS, [fn$$7, extra_args])
}
function v127(elms$$4, type$$29, handler$$7) {
  function v126(elm$$37) {
    var v1034 = elm$$37.events;
    if(v1034) {
      var v1248 = elm$$37.events;
      introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
        v1034 = v1248[type$$29]
      }
    }
    var v580 = v1034;
    if(v580) {
      var v1035 = elm$$37.events;
      introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
        var v578 = v1035[type$$29]
      }
      var v579 = handler$$7.$f_guid;
      delete v578[v579]
    }
    return
  }
  elms$$4 = JAMScript.call(AJS.$A, AJS, [elms$$4]);
  JAMScript.call(map, null, [elms$$4, v126]);
  return
}
function v125(event$$1) {
  function v124(handler$$6) {
    var v1036 = me$$1.events;
    var v1037 = event$$1.type;
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var v581 = v1036[v1037]
    }
    var v582 = handler$$6.$f_guid;
    delete v581[v582];
    return
  }
  var me$$1 = this;
  var v583 = event$$1;
  var v1038 = !v583;
  if(v1038) {
    v583 = window.event
  }
  event$$1 = v583;
  var v584 = !event$$1;
  if(v584) {
    return
  }
  var v1249 = event$$1.ctrl;
  var v1039 = !v1249;
  if(v1039) {
    var v1327 = event$$1.type;
    var v1250 = v1327.indexOf("key");
    v1039 = v1250 != -1
  }
  var v585 = v1039;
  if(v585) {
    JAMScript.call(AJS.setEventKey, AJS, [event$$1])
  }
  var v586 = this.events;
  var v587 = event$$1.type;
  introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
    var handlers$$1 = v586[v587]
  }
  var handlers_to_delete = [];
  var res$$1 = true;
  var i$$17;
  for(i$$17 in handlers$$1) {
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var handler$$5 = this.$$handleEvent = handlers$$1[i$$17]
    }
    var v1040 = AJS.handleEvent;
    var v588 = handler$$5 == v1040;
    if(v588) {
      continue
    }
    res$$1 = JAMScript.call(handler$$5, null, [event$$1]);
    var v589 = handler$$5.listen_once;
    if(v589) {
      handlers_to_delete.push(handler$$5)
    }
  }
  var v1041 = handlers_to_delete.length;
  var v590 = v1041 > 0;
  if(v590) {
    JAMScript.call(AJS.map, AJS, [handlers_to_delete, v124])
  }
  return res$$1
}
function v123(elms$$3, types, handler$$4, listen_once$$1) {
  function v122(elm$$36) {
    function v121(type$$28) {
      var v591 = elm$$36.events;
      introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
        var handlers = v591[type$$28]
      }
      var v1042 = elm$$36 == window;
      if(v1042) {
        v1042 = type$$28 == "load"
      }
      var v601 = v1042;
      if(v601) {
        var v592 = AJS.ready_list;
        v592.push(handler$$4)
      }else {
        var v593 = type$$28 == "lazy_load";
        if(v593) {
          type$$28 = "load"
        }
        var v597 = !handlers;
        if(v597) {
          var v594 = elm$$36.events;
          handlers = JAMScript.set(v594, type$$28, {});
          var v1043 = "on" + type$$28;
          introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
            var v596 = elm$$36[v1043]
          }
          if(v596) {
            var v595 = "on" + type$$28;
            introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
              handlers[0] = elm$$36[v595]
            }
          }
        }
        var v1044 = elm$$36._wipe_guid;
        var v598 = !v1044;
        if(v598) {
          elm$$36._wipe_guid = AJS._wipe_guid;
          var v1045 = AJS._wipe_guid;
          AJS._wipe_guid = v1045 + 1
        }
        var v599 = handler$$4.$f_guid;
        JAMScript.set(handlers, v599, handler$$4);
        var v600 = AJS.handleEvent;
        elm$$36.addEventListener(type$$28, v600, false)
      }
      return
    }
    if(listen_once$$1) {
      handler$$4.listen_once = true
    }
    var v1046 = handler$$4.$f_guid;
    var v602 = !v1046;
    if(v602) {
      handler$$4.$f_guid = AJS._f_guid;
      var v1047 = AJS._f_guid;
      AJS._f_guid = v1047 + 1
    }
    var v1048 = elm$$36.events;
    var v603 = !v1048;
    if(v603) {
      elm$$36.events = {}
    }
    JAMScript.call(AJS.map, AJS, [types, v121]);
    elm$$36 = null;
    return
  }
  elms$$3 = JAMScript.call(AJS.$A, AJS, [elms$$3]);
  types = JAMScript.call(AJS.$A, AJS, [types]);
  JAMScript.call(AJS.map, AJS, [elms$$3, v122]);
  return
}
function v120(fn$$5) {
  function v119(fn$$6) {
    JAMScript.call(fn$$6.call, fn$$6, [window]);
    return
  }
  var v604 = AJS.is_ready;
  if(v604) {
    return
  }
  AJS.is_ready = true;
  var v605 = AJS.ready_list;
  JAMScript.call(AJS.map, AJS, [v605, v119]);
  AJS.ready_list = [];
  return
}
function v118() {
  function v117() {
    var v606 = AJS.is_ready;
    if(v606) {
      return
    }
    try {
      var v607 = document.documentElement;
      JAMScript.call(v607.doScroll, v607, ["left"])
    }catch(error$$2) {
      var v608 = arguments.callee;
      JAMScript.call(setTimeout, null, [v608, 0]);
      return
    }
    JAMScript.call(AJS.ready, AJS, []);
    return
  }
  function v116() {
    var v1049 = document.readyState;
    var v610 = v1049 === "complete";
    if(v610) {
      var v609 = arguments.callee;
      JAMScript.call(document.detachEvent, document, ["onreadystatechange", v609]);
      JAMScript.call(AJS.ready, AJS, [])
    }
    return
  }
  function v115() {
    var v611 = arguments.callee;
    JAMScript.call(document.removeEventListener, document, ["DOMContentLoaded", v611, false]);
    JAMScript.call(AJS.ready, AJS, []);
    return
  }
  var v612 = AJS.ready_bound;
  if(v612) {
    return
  }
  AJS.ready_bound = true;
  var v615 = document.addEventListener;
  if(v615) {
    document.addEventListener("DOMContentLoaded", v115, false)
  }else {
    var v614 = document.attachEvent;
    if(v614) {
      JAMScript.call(document.attachEvent, document, ["onreadystatechange", v116]);
      var v1251 = document.documentElement;
      var v1050 = v1251.doScroll;
      if(v1050) {
        var v1252 = window.top;
        v1050 = window == v1252
      }
      var v613 = v1050;
      if(v613) {
        v117()
      }
    }
  }
  var v616 = AJS.ready;
  JAMScript.call(AJS.AEV, AJS, [window, "load", v616]);
  return
}
function v114(elms$$2, type$$27, handler$$3, listen_once) {
  function v113(elm$$35) {
    var v618 = elm$$35.events;
    if(v618) {
      var v617 = elm$$35.events;
      JAMScript.set(v617, type$$27, {})
    }
    return
  }
  elms$$2 = JAMScript.call(AJS.$A, AJS, [elms$$2]);
  JAMScript.call(AJS.map, AJS, [elms$$2, v113]);
  return JAMScript.call(AJS.AEV, AJS, [elms$$2, type$$27, handler$$3, listen_once])
}
function v112(e$$11) {
  var v619 = !e$$11;
  if(v619) {
    e$$11 = window.event
  }
  var v620;
  var v1051 = e$$11.keyCode;
  if(v1051) {
    v620 = e$$11.keyCode
  }else {
    v620 = e$$11.charCode
  }
  e$$11.key = v620;
  e$$11.ctrl = e$$11.ctrlKey;
  e$$11.alt = e$$11.altKey;
  e$$11.meta = e$$11.metaKey;
  e$$11.shift = e$$11.shiftKey;
  return
}
function v111(e$$10) {
  var v1052 = e$$10;
  if(v1052) {
    var v1328 = e$$10.type;
    var v1253 = !v1328;
    if(v1253) {
      var v1329 = e$$10.keyCode;
      v1253 = !v1329
    }
    v1052 = v1253
  }
  var v621 = v1052;
  if(v621) {
    return e$$10
  }
  var targ;
  var v622 = !e$$10;
  if(v622) {
    e$$10 = window.event
  }
  var v624 = e$$10.target;
  if(v624) {
    targ = e$$10.target
  }else {
    var v623 = e$$10.srcElement;
    if(v623) {
      targ = e$$10.srcElement
    }
  }
  var v1053 = targ;
  if(v1053) {
    var v1254 = targ.nodeType;
    v1053 = v1254 == 3
  }
  var v625 = v1053;
  if(v625) {
    targ = targ.parentNode
  }
  return targ
}
function v110(elm1, elm2) {
  function getSign(v$$1) {
    var v627 = v$$1 > 0;
    if(v627) {
      return"+"
    }else {
      var v626 = v$$1 < 0;
      if(v626) {
        return"-"
      }else {
        return 0
      }
    }
    return
  }
  var pos_elm1 = JAMScript.call(AJS.absolutePosition, AJS, [elm1]);
  var pos_elm2 = JAMScript.call(AJS.absolutePosition, AJS, [elm2]);
  var top1 = pos_elm1.y;
  var left1 = pos_elm1.x;
  var v628 = elm1.offsetWidth;
  var right1 = left1 + v628;
  var v629 = elm1.offsetHeight;
  var bottom1 = top1 + v629;
  var top2 = pos_elm2.y;
  var left2 = pos_elm2.x;
  var v630 = elm2.offsetWidth;
  var right2 = left2 + v630;
  var v631 = elm2.offsetHeight;
  var bottom2 = top2 + v631;
  var v1330 = top1 - bottom2;
  var v1255 = getSign(v1330);
  var v1331 = bottom1 - top2;
  var v1256 = getSign(v1331);
  var v1054 = v1255 != v1256;
  if(v1054) {
    var v1332 = left1 - right2;
    var v1257 = getSign(v1332);
    var v1333 = right1 - left2;
    var v1258 = getSign(v1333);
    v1054 = v1257 != v1258
  }
  var v632 = v1054;
  if(v632) {
    return true
  }
  return false
}
function v109(doc) {
  doc = doc || document;
  var win_w;
  var win_h;
  var v639 = self.innerHeight;
  if(v639) {
    win_w = self.innerWidth;
    win_h = self.innerHeight
  }else {
    var v1055 = doc.documentElement;
    if(v1055) {
      var v1259 = doc.documentElement;
      v1055 = v1259.clientHeight
    }
    var v638 = v1055;
    if(v638) {
      var v633 = doc.documentElement;
      win_w = v633.clientWidth;
      var v634 = doc.documentElement;
      win_h = v634.clientHeight
    }else {
      var v637 = doc.body;
      if(v637) {
        var v635 = doc.body;
        win_w = v635.clientWidth;
        var v636 = doc.body;
        win_h = v636.clientHeight
      }
    }
  }
  return{"w":win_w, "h":win_h}
}
function v108(elm$$34) {
  var v640 = !elm$$34;
  if(v640) {
    return{x:0, y:0}
  }
  var v646 = elm$$34.scrollLeft;
  if(v646) {
    var v641 = elm$$34.scrollLeft;
    var v642 = elm$$34.scrollTop;
    return{x:v641, y:v642}
  }else {
    var v645 = elm$$34.clientX;
    if(v645) {
      var v643 = elm$$34.clientX;
      var v644 = elm$$34.clientY;
      return{x:v643, y:v644}
    }
  }
  var v647 = elm$$34.offsetLeft;
  var v648 = elm$$34.offsetTop;
  var posObj = {"x":v647, "y":v648};
  var v649 = elm$$34.offsetParent;
  if(v649) {
    var next = elm$$34.offsetParent;
    for(;next;) {
      var v1056 = posObj.x;
      var v1057 = next.offsetLeft;
      posObj.x = v1056 + v1057;
      var v1058 = posObj.y;
      var v1059 = next.offsetTop;
      posObj.y = v1058 + v1059;
      next = next.offsetParent
    }
  }
  var v1060 = JAMScript.call(AJS.isSafari, AJS, []);
  if(v1060) {
    var v1334 = elm$$34.style;
    var v1260 = v1334.position;
    v1060 = v1260 == "absolute"
  }
  var v650 = v1060;
  if(v650) {
    var v1061 = posObj.x;
    var v1261 = document.body;
    var v1062 = v1261.offsetLeft;
    posObj.x = v1061 - v1062;
    var v1063 = posObj.y;
    var v1262 = document.body;
    var v1064 = v1262.offsetTop;
    posObj.y = v1063 - v1064
  }
  return posObj
}
function v107() {
  var t;
  var v1065 = document.documentElement;
  if(v1065) {
    var v1263 = document.documentElement;
    v1065 = v1263.scrollTop
  }
  var v654 = v1065;
  if(v654) {
    var v651 = document.documentElement;
    t = v651.scrollTop
  }else {
    var v653 = document.body;
    if(v653) {
      var v652 = document.body;
      t = v652.scrollTop
    }
  }
  return t
}
function v106(e$$9) {
  var posx = 0;
  var posy = 0;
  var v655 = !e$$9;
  if(v655) {
    e$$9 = window.event
  }
  var v1066 = e$$9.pageX;
  var v1264 = !v1066;
  if(v1264) {
    v1066 = e$$9.pageY
  }
  var v661 = v1066;
  if(v661) {
    posx = e$$9.pageX;
    posy = e$$9.pageY
  }else {
    var v1067 = e$$9.clientX;
    var v1265 = !v1067;
    if(v1265) {
      v1067 = e$$9.clientY
    }
    var v660 = v1067;
    if(v660) {
      var v1068 = e$$9.clientX;
      var v1266 = document.body;
      var v1069 = v1266.scrollLeft;
      var v656 = v1068 + v1069;
      var v1070 = document.documentElement;
      var v657 = v1070.scrollLeft;
      posx = v656 + v657;
      var v1071 = e$$9.clientY;
      var v1267 = document.body;
      var v1072 = v1267.scrollTop;
      var v658 = v1071 + v1072;
      var v1073 = document.documentElement;
      var v659 = v1073.scrollTop;
      posy = v658 + v659
    }
  }
  return{x:posx, y:posy}
}
function v105(date$$1) {
  function leadingZero(nr) {
    var v662 = nr < 10;
    if(v662) {
      nr = "0" + nr
    }
    return nr
  }
  var year$$1 = date$$1.getUTCFullYear();
  var dd = date$$1.getUTCDate();
  var v663 = date$$1.getUTCMonth();
  var mm = v663 + 1;
  var v1370 = '"' + year$$1;
  var v1369 = v1370 + "-";
  var v1368 = v1369 + mm;
  var v1367 = v1368 + "-";
  var v1364 = v1367 + dd;
  var v1360 = v1364 + "T";
  var v1365 = date$$1.getUTCHours();
  var v1361 = leadingZero(v1365);
  var v1351 = v1360 + v1361;
  var v1335 = v1351 + ":";
  var v1352 = date$$1.getUTCMinutes();
  var v1336 = leadingZero(v1352);
  var v1268 = v1335 + v1336;
  var v1074 = v1268 + ":";
  var v1269 = date$$1.getUTCSeconds();
  var v1075 = leadingZero(v1269);
  var v664 = v1074 + v1075;
  return v664 + '"'
}
function v104(o$$4) {
  var v1366 = o$$4.replace(/(["\\])/g, "\\$1");
  var v1362 = '"' + v1366;
  var v1353 = v1362 + '"';
  var v1337 = v1353.replace(/[\f]/g, "\\f");
  var v1270 = v1337.replace(/[\b]/g, "\\b");
  var v1076 = v1270.replace(/[\n]/g, "\\n");
  var v665 = v1076.replace(/[\t]/g, "\\t");
  return v665.replace(/[\r]/g, "\\r")
}
function v103(data$$19) {
  var post_data = [];
  for(k in data$$19) {
    var v1077 = k + "=";
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var v1271 = data$$19[k]
    }
    var v1078 = JAMScript.call(AJS.urlencode, AJS, [v1271]);
    var v666 = v1077 + v1078;
    post_data.push(v666)
  }
  return JAMScript.call(post_data.join, post_data, ["&"])
}
function v102(html$$2) {
  var script_data = html$$2.match(/<script.*?>((\n|\r|.)*?)<\/script>/g);
  var v669 = script_data != null;
  if(v669) {
    var i$$16 = 0;
    var v1079 = script_data.length;
    var v668 = i$$16 < v1079;
    for(;v668;) {
      introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
        var v667 = script_data[i$$16]
      }
      var script_only = v667.replace(/<script.*?>/g, "");
      script_only = script_only.replace(/<\/script>/g, "");
      if(JAMScript.isEval(eval)) {
        eval("introspect(JAMScript.introspectors.processAll) { " + script_only + " }")
      }else {
        JAMScript.call(eval, null, [script_only])
      }
      i$$16 = i$$16 + 1;
      var v1080 = script_data.length;
      v668 = i$$16 < v1080
    }
  }
  return
}
function v101(txt) {
  try {
    var v1081 = "(" + txt;
    var v670 = v1081 + ")";
    if(JAMScript.isEval(eval)) {
      return eval("introspect(JAMScript.introspectors.processAll) { " + v670 + " }")
    }else {
      return JAMScript.call(eval, null, [v670])
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
function v100(url$$4, type$$26, debug) {
  function eval_req(data$$18, req$$2) {
    var text$$8 = req$$2.responseText;
    var v671 = text$$8 == "Error";
    if(v671) {
      JAMScript.call(d$$1.errback, d$$1, [req$$2])
    }else {
      return JAMScript.call(AJS.evalTxt, AJS, [text$$8])
    }
    return
  }
  var d$$1 = JAMScript.call(AJS.getRequest, AJS, [url$$4, type$$26]);
  JAMScript.call(d$$1.addCallback, d$$1, [eval_req]);
  return d$$1
}
function v99(o$$3) {
  var objtype = typeof o$$3;
  var v674 = objtype == "undefined";
  if(v674) {
    return"null"
  }else {
    var v1082 = objtype == "number";
    var v1272 = !v1082;
    if(v1272) {
      v1082 = objtype == "boolean"
    }
    var v673 = v1082;
    if(v673) {
      return o$$3 + ""
    }else {
      var v672 = o$$3 === null;
      if(v672) {
        return"null"
      }
    }
  }
  var v675 = objtype == "string";
  if(v675) {
    return JAMScript.call(AJS._reprString, AJS, [o$$3])
  }
  var v1083 = objtype == "object";
  if(v1083) {
    v1083 = o$$3.getFullYear
  }
  var v676 = v1083;
  if(v676) {
    return JAMScript.call(AJS._reprDate, AJS, [o$$3])
  }
  var me = arguments.callee;
  var v1084 = objtype != "function";
  if(v1084) {
    var v1338 = o$$3.length;
    var v1273 = typeof v1338;
    v1084 = v1273 == "number"
  }
  var v681 = v1084;
  if(v681) {
    var res = [];
    var i$$15 = 0;
    var v1085 = o$$3.length;
    var v679 = i$$15 < v1085;
    for(;v679;) {
      introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
        var v677 = o$$3[i$$15]
      }
      var val$$3 = JAMScript.call(me, null, [v677]);
      var v1086 = typeof val$$3;
      var v678 = v1086 != "string";
      if(v678) {
        val$$3 = "undefined"
      }
      res.push(val$$3);
      i$$15 = i$$15 + 1;
      var v1087 = o$$3.length;
      v679 = i$$15 < v1087
    }
    var v1088 = JAMScript.call(res.join, res, [","]);
    var v680 = "[" + v1088;
    return v680 + "]"
  }
  var v682 = objtype == "function";
  if(v682) {
    return null
  }
  res = [];
  var k$$1;
  for(k$$1 in o$$3) {
    var useKey;
    var v1089 = typeof k$$1;
    var v685 = v1089 == "number";
    if(v685) {
      var v683 = '"' + k$$1;
      useKey = v683 + '"'
    }else {
      var v1090 = typeof k$$1;
      var v684 = v1090 == "string";
      if(v684) {
        useKey = JAMScript.call(AJS._reprString, AJS, [k$$1])
      }else {
        continue
      }
    }
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var v686 = o$$3[k$$1]
    }
    val$$3 = JAMScript.call(me, null, [v686]);
    var v1091 = typeof val$$3;
    var v687 = v1091 != "string";
    if(v687) {
      continue
    }
    var v1092 = useKey + ":";
    var v688 = v1092 + val$$3;
    res.push(v688)
  }
  var v1093 = JAMScript.call(res.join, res, [","]);
  var v689 = "{" + v1093;
  return v689 + "}"
}
function v98(url$$3, method$$1) {
  var req$$1 = JAMScript.call(AJS.getXMLHttpRequest, AJS, []);
  var v1094 = url$$3.match(/^https?:\/\//);
  var v693 = v1094 == null;
  if(v693) {
    var v1095 = AJS.BASE_URL;
    var v692 = v1095 != "";
    if(v692) {
      var v1274 = AJS.BASE_URL;
      var v1096 = v1274.lastIndexOf("/");
      var v1339 = AJS.BASE_URL;
      var v1275 = v1339.length;
      var v1097 = v1275 - 1;
      var v690 = v1096 != v1097;
      if(v690) {
        var v1098 = AJS.BASE_URL;
        AJS.BASE_URL = v1098 + "/"
      }
      var v691 = AJS.BASE_URL;
      url$$3 = v691 + url$$3
    }
  }
  var v694 = !method$$1;
  if(v694) {
    method$$1 = "POST"
  }
  return JAMScript.new(AJSDeferred, [req$$1, method$$1, url$$3])
}
function v97() {
  function v96() {
    throw"Browser does not support XMLHttpRequest";
  }
  function v95() {
    return JAMScript.new(ActiveXObject, ["Msxml2.XMLHTTP.4.0"])
  }
  function v94() {
    return JAMScript.new(ActiveXObject, ["Microsoft.XMLHTTP"])
  }
  function v93() {
    return JAMScript.new(ActiveXObject, ["Msxml2.XMLHTTP"])
  }
  function v92() {
    return new XMLHttpRequest
  }
  var try_these = [v92, v93, v94, v95, v96];
  var i$$14 = 0;
  var v1099 = try_these.length;
  var v695 = i$$14 < v1099;
  for(;v695;) {
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var func$$3 = try_these[i$$14]
    }
    try {
      return JAMScript.call(func$$3, null, [])
    }catch(e$$7) {
      JAMScript.call(AJS.log, AJS, [e$$7])
    }
    i$$14 = i$$14 + 1;
    var v1100 = try_these.length;
    v695 = i$$14 < v1100
  }
  return
}
function v91(tmpl, ns, scope) {
  function fn$$4(w$$5, g) {
    g = g.split("|");
    var v696 = g[0];
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var cnt = ns[v696]
    }
    var i$$13 = 1;
    var v1101 = g.length;
    var v698 = i$$13 < v1101;
    for(;v698;) {
      introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
        var v697 = g[i$$13]
      }
      introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
        var v1394 = [[cnt], scope, scope[v697]]
      }
      cnt = JAMScript.call(v1394[2], v1394[1], v1394[0]);
      i$$13 = i$$13 + 1;
      var v1102 = g.length;
      v698 = i$$13 < v1102
    }
    var v699 = cnt == "";
    if(v699) {
      return""
    }
    var v1103 = cnt == 0;
    var v1276 = !v1103;
    if(v1276) {
      v1103 = cnt == -1
    }
    var v700 = v1103;
    if(v700) {
      cnt = cnt + ""
    }
    return cnt || w$$5
  }
  scope = scope || window;
  return tmpl.replace(/%\(([A-Za-z0-9_|.]*)\)/g, fn$$4)
}
function v90() {
  function v89(args$$13) {
    function v88(src$$2) {
      var pic = new Image;
      pic.src = src$$2;
      return
    }
    JAMScript.call(AJS.map, AJS, [args$$13, v88]);
    return
  }
  var v701 = JAMScript.call(AJS.$p, AJS, [v89, arguments]);
  JAMScript.call(AJS.AEV, AJS, [window, "load", v701]);
  return
}
function v87(html$$1, first_child$$1) {
  var d = JAMScript.call(AJS.DIV, AJS, []);
  JAMScript.set(d, "innerHTML", html$$1);
  if(first_child$$1) {
    var v702 = d.childNodes;
    return v702[0]
  }else {
    return d
  }
  return
}
function v86(elm$$33, p$$4) {
  var v707 = p$$4 == 1;
  if(v707) {
    var v703 = elm$$33.style;
    v703.opacity = 1;
    var v704 = elm$$33.style;
    v704.filter = ""
  }else {
    var v705 = elm$$33.style;
    v705.opacity = p$$4;
    var v706 = elm$$33.style;
    var v1277 = p$$4 * 100;
    var v1104 = "alpha(opacity=" + v1277;
    v706.filter = v1104 + ")"
  }
  return
}
function v85() {
  function v84(elm$$32) {
    var v708 = elm$$32;
    var v1105 = elm$$32.className;
    var v1278 = "(^|\\s)" + cls$$2;
    var v1106 = new RegExp(v1278, "g");
    var v1392 = v1105.replace(v1106, "");
    v708.className = v1392;
    return
  }
  var args$$12 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  var cls$$2 = args$$12.pop();
  JAMScript.call(AJS.map, AJS, [args$$12, v84]);
  return
}
function v83(elm$$31, cls$$1) {
  var v1107 = !elm$$31;
  var v1280 = !v1107;
  if(v1280) {
    var v1279 = elm$$31.className;
    v1107 = !v1279
  }
  var v709 = v1107;
  if(v709) {
    return false
  }
  var e_cls = elm$$31.className;
  var v1108 = e_cls.length;
  var v710 = v1108 > 0;
  if(v710) {
    var v1109 = e_cls == cls$$1;
    var v1282 = !v1109;
    if(v1282) {
      var v1354 = "(^|\\s)" + cls$$1;
      var v1340 = v1354 + "(\\s|$)";
      var v1281 = new RegExp(v1340);
      v1109 = v1281.test(e_cls)
    }
    v710 = v1109
  }
  return v710
}
function v82() {
  function v81(elm$$30) {
    var o$$inline_0 = elm$$30;
    var v1355 = "(^|\\s)" + cls;
    var v1341 = v1355 + "(\\s|$)";
    var v1283 = new RegExp(v1341);
    var v1284 = o$$inline_0.className;
    var v1110 = v1283.test(v1284);
    var v711 = !v1110;
    if(v711) {
      var v1111 = o$$inline_0.className;
      var v1342;
      var v1356 = o$$inline_0.className;
      if(v1356) {
        v1342 = " "
      }else {
        v1342 = ""
      }
      var v1285 = v1342;
      var v1112 = v1285 + cls;
      o$$inline_0.className = v1111 + v1112
    }
    return
  }
  var args$$11 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  var cls = args$$11.pop();
  JAMScript.call(AJS.map, AJS, [args$$11, v81]);
  return
}
function v80() {
  function v79(elm$$29) {
    elm$$29.className = c;
    return
  }
  var args$$10 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  var c = args$$10.pop();
  JAMScript.call(AJS.map, AJS, [args$$10, v79]);
  return
}
function v78() {
  return JAMScript.call(AJS.__cssDim, AJS, [arguments, "top"])
}
function v77() {
  return JAMScript.call(AJS.__cssDim, AJS, [arguments, "right"])
}
function v76() {
  return JAMScript.call(AJS.__cssDim, AJS, [arguments, "left"])
}
function v75() {
  return JAMScript.call(AJS.__cssDim, AJS, [arguments, "height"])
}
function v74() {
  return JAMScript.call(AJS.__cssDim, AJS, [arguments, "width"])
}
function v73(args$$9, property$$4) {
  args$$9 = JAMScript.call(AJS.$FA, AJS, [args$$9]);
  var v1113 = args$$9.length;
  var v712 = v1113 - 1;
  args$$9.splice(v712, 0, property$$4);
  var v713 = AJS.setStyle;
  JAMScript.call(v713.apply, v713, [null, args$$9]);
  return
}
function v72() {
  function v71(elm$$28) {
    var v715 = JAMScript.call(AJS.isIn, AJS, [property$$3, num_styles]);
    if(v715) {
      var v1114 = JAMScript.call(AJS.isString, AJS, [value$$29]);
      if(v1114) {
        v1114 = value$$29
      }
      var v714 = v1114;
      var v1115 = !v714;
      if(v1115) {
        v714 = value$$29 + "px"
      }
      value$$29 = v714
    }
    var v716 = elm$$28.style;
    JAMScript.set(v716, property$$3, value$$29);
    return
  }
  function v70(elm$$27) {
    function v69(prop$$4) {
      introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
        var css_dim = value$$29[prop$$4]
      }
      var v718 = JAMScript.call(AJS.isIn, AJS, [prop$$4, num_styles]);
      if(v718) {
        var v1116 = JAMScript.call(AJS.isString, AJS, [css_dim]);
        if(v1116) {
          v1116 = css_dim
        }
        var v717 = v1116;
        var v1117 = !v717;
        if(v1117) {
          v717 = css_dim + "px"
        }
        css_dim = v717
      }
      var v719 = elm$$27.style;
      JAMScript.set(v719, prop$$4, css_dim);
      return
    }
    var v720 = JAMScript.call(AJS.keys, AJS, [value$$29]);
    JAMScript.call(AJS.map, AJS, [v720, v69]);
    return
  }
  var args$$8 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  var value$$29 = args$$8.pop();
  var num_styles = ["top", "left", "right", "width", "height"];
  var v721 = JAMScript.call(AJS.isObject, AJS, [value$$29]);
  if(v721) {
    JAMScript.call(AJS.map, AJS, [args$$8, v70])
  }else {
    var property$$3 = args$$8.pop();
    JAMScript.call(AJS.map, AJS, [args$$8, v71])
  }
  return
}
function v68(elm$$26) {
  var v722 = JAMScript.call(AJS.isElementHidden, AJS, [elm$$26]);
  return!v722
}
function v67(elm$$25) {
  var v1286 = elm$$25.style;
  var v1118 = v1286.display;
  var v723 = v1118 == "none";
  var v1120 = !v723;
  if(v1120) {
    var v1287 = elm$$25.style;
    var v1119 = v1287.visibility;
    v723 = v1119 == "hidden"
  }
  return v723
}
function v66(elm$$24) {
  var v724 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  JAMScript.call(AJS.setStyle, AJS, [v724, "display", "none"]);
  return
}
function v65() {
  var v725 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  JAMScript.call(AJS.setStyle, AJS, [v725, "display", ""]);
  return
}
function v64() {
  var args$$7 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  var v1121 = args$$7.pop();
  if(v1121) {
    v1121 = "visible"
  }
  var v726 = v1121;
  var v1122 = !v726;
  if(v1122) {
    v726 = "hidden"
  }
  var val$$2 = v726;
  JAMScript.call(AJS.setStyle, AJS, [args$$7, "visibility", val$$2]);
  return
}
function v63() {
  function v62(elm$$23) {
    if(elm$$23) {
      JAMScript.set(elm$$23, "innerHTML", html)
    }
    return
  }
  var args$$6 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  var html = args$$6.pop();
  JAMScript.call(AJS.map, AJS, [args$$6, v62]);
  return args$$6[0]
}
function v61() {
  function v60(text$$7) {
    return document.createTextNode(text$$7)
  }
  function extends_ajs(elm$$22) {
    function v59() {
      var v727 = AJS.createDOM;
      var v728 = [elm$$22, arguments];
      return JAMScript.call(v727.apply, v727, [null, v728])
    }
    var v729 = elm$$22.toUpperCase();
    JAMScript.set(AJS, v729, v59);
    return
  }
  var elms$$1 = ["ul", "li", "td", "tr", "th", "tbody", "table", "input", "span", "b", "a", "div", "img", "button", "h1", "h2", "h3", "h4", "h5", "h6", "br", "textarea", "form", "p", "select", "option", "optgroup", "iframe", "script", "center", "dl", "dt", "dd", "small", "pre", "i", "label", "thead"];
  JAMScript.call(AJS.map, AJS, [elms$$1, extends_ajs]);
  AJS.TN = v60;
  return
}
function v58(name$$32, attrs) {
  var i$$12 = 0;
  var attr;
  var elm$$21 = document.createElement(name$$32);
  var first_attr = attrs[0];
  introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
    var v1123 = attrs[i$$12]
  }
  var v733 = JAMScript.call(AJS.isDict, AJS, [v1123]);
  if(v733) {
    for(k in first_attr) {
      introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
        attr = first_attr[k]
      }
      var v1124 = k == "style";
      var v1288 = !v1124;
      if(v1288) {
        v1124 = k == "s"
      }
      var v732 = v1124;
      if(v732) {
        var v730 = elm$$21.style;
        v730.cssText = attr
      }else {
        var v1125 = k == "c";
        var v1290 = !v1125;
        if(v1290) {
          var v1289 = k == "class";
          var v1343 = !v1289;
          if(v1343) {
            v1289 = k == "className"
          }
          v1125 = v1289
        }
        var v731 = v1125;
        if(v731) {
          elm$$21.className = attr
        }else {
          JAMScript.call(elm$$21.setAttribute, elm$$21, [k, attr])
        }
      }
    }
    i$$12 = i$$12 + 1
  }
  var v734 = first_attr == null;
  if(v734) {
    i$$12 = 1
  }
  var j$$1 = i$$12;
  var v1126 = attrs.length;
  var v736 = j$$1 < v1126;
  for(;v736;) {
    attr = attrs[j$$1];
    if(attr) {
      var type$$25 = typeof attr;
      var v1127 = type$$25 == "string";
      var v1291 = !v1127;
      if(v1291) {
        v1127 = type$$25 == "number"
      }
      var v735 = v1127;
      if(v735) {
        attr = JAMScript.call(AJS.TN, AJS, [attr])
      }
      JAMScript.call(elm$$21.appendChild, elm$$21, [attr])
    }
    j$$1 = j$$1 + 1;
    var v1128 = attrs.length;
    v736 = j$$1 < v1128
  }
  return elm$$21
}
function v57() {
  function v56(elm$$20) {
    var v737 = JAMScript.call($, null, [elm$$20]);
    if(v737) {
      JAMScript.call(AJS.swapDOM, AJS, [elm$$20, null])
    }
    return
  }
  var args$$5 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  try {
    JAMScript.call(AJS.map, AJS, [args$$5, v56])
  }catch(e$$6) {
  }
  return
}
function v55(dest, src$$1) {
  dest = JAMScript.call(AJS.getElement, AJS, [dest]);
  var parent$$1 = dest.parentNode;
  if(src$$1) {
    src$$1 = JAMScript.call(AJS.getElement, AJS, [src$$1]);
    JAMScript.call(parent$$1.replaceChild, parent$$1, [src$$1, dest])
  }else {
    parent$$1.removeChild(dest)
  }
  return src$$1
}
function v54(elm$$19, reference_elm$$1) {
  var v738 = reference_elm$$1.parentNode;
  JAMScript.call(v738.insertBefore, v738, [elm$$19, reference_elm$$1]);
  return elm$$19
}
function v53(elm$$18, reference_elm) {
  var v739 = reference_elm.parentNode;
  var v740 = reference_elm.nextSibling;
  JAMScript.call(v739.insertBefore, v739, [elm$$18, v740]);
  return elm$$18
}
function v52(elm$$17) {
  var child$$1;
  var v741 = child$$1 = elm$$17.firstChild;
  for(;v741;) {
    JAMScript.call(AJS.swapDOM, AJS, [child$$1, null]);
    v741 = child$$1 = elm$$17.firstChild
  }
  var v1129 = arguments.length;
  var v743 = v1129 < 2;
  if(v743) {
    return elm$$17
  }else {
    var v742 = AJS.appendChildNodes;
    return JAMScript.call(v742.apply, v742, [null, arguments])
  }
  return
}
function v51(elm$$16) {
  var v744 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  var args$$4 = v744.slice(1);
  var v1130 = args$$4.length;
  var v746 = v1130 >= 1;
  if(v746) {
    var first_child = elm$$16.firstChild;
    if(first_child) {
      for(;true;) {
        var t_elm = JAMScript.call(args$$4.shift, args$$4, []);
        if(t_elm) {
          JAMScript.call(AJS.insertBefore, AJS, [t_elm, first_child])
        }else {
          break
        }
      }
    }else {
      var v745 = AJS.ACN;
      JAMScript.call(v745.apply, v745, [null, arguments])
    }
  }
  return elm$$16
}
function v50(elm$$15) {
  function v49(n$$1) {
    var v747 = JAMScript.call(AJS.isString, AJS, [n$$1]);
    if(v747) {
      n$$1 = JAMScript.call(AJS.TN, AJS, [n$$1])
    }
    var v748 = JAMScript.call(AJS.isDefined, AJS, [n$$1]);
    if(v748) {
      JAMScript.call(elm$$15.appendChild, elm$$15, [n$$1])
    }
    return
  }
  var v1131 = arguments.length;
  var v749 = v1131 >= 2;
  if(v749) {
    JAMScript.call(AJS.map, AJS, [arguments, v49, 1])
  }
  return elm$$15
}
function v48(elm$$14) {
  var v1132 = typeof elm$$14;
  var v750 = v1132 == "string";
  if(v750) {
    elm$$14 = JAMScript.call(AJS.HTML2DOM, AJS, [elm$$14])
  }
  introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
    var v1395 = [['<span id="dummy_holder"></span>'], document, document.write]
  }
  JAMScript.call(v1395[2], v1395[1], v1395[0]);
  var v751 = JAMScript.call(AJS.$, AJS, ["dummy_holder"]);
  JAMScript.call(AJS.swapDOM, AJS, [v751, elm$$14]);
  return
}
function v47(select) {
  select = JAMScript.call(AJS.$, AJS, [select]);
  var v1133 = select.options;
  var v1134 = select.selectedIndex;
  introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
    var v752 = v1133[v1134]
  }
  return v752.value
}
function v46(form, name$$31) {
  function v45(elm$$13) {
    var v1135 = elm$$13.name;
    if(v1135) {
      var v1292 = elm$$13.name;
      v1135 = v1292 == name$$31
    }
    var v753 = v1135;
    if(v753) {
      r$$5 = elm$$13
    }
    return
  }
  function v44(elm$$12) {
    var v1136 = elm$$12.name;
    if(v1136) {
      var v1293 = elm$$12.name;
      v1136 = v1293 == name$$31
    }
    var v754 = v1136;
    if(v754) {
      r$$5 = elm$$12
    }
    return
  }
  form = JAMScript.call(AJS.$, AJS, [form]);
  var r$$5 = null;
  var v755 = form.elements;
  JAMScript.call(AJS.map, AJS, [v755, v44]);
  if(r$$5) {
    return r$$5
  }
  var v756 = JAMScript.call(AJS.$bytc, AJS, ["select", null, form]);
  JAMScript.call(AJS.map, AJS, [v756, v45]);
  return r$$5
}
function v43() {
  var v757 = JAMScript.call(AJS.$bytc, AJS, ["body"]);
  return v757[0]
}
function v42(elm$$11, tag_name$$5, class_name$$5) {
  function v41(m$$2) {
    return m$$2.nextSibling
  }
  return JAMScript.call(AJS._nodeWalk, AJS, [elm$$11, tag_name$$5, class_name$$5, v41])
}
function v40(elm$$10, tag_name$$4, class_name$$4) {
  function v39(m$$1) {
    return m$$1.previousSibling
  }
  return JAMScript.call(AJS._nodeWalk, AJS, [elm$$10, tag_name$$4, class_name$$4, v39])
}
function v38(elm$$9, parent_to_consider, max_look_up) {
  var v758 = elm$$9 == parent_to_consider;
  if(v758) {
    return true
  }
  var v759 = max_look_up == 0;
  if(v759) {
    return false
  }
  var v760 = elm$$9.parentNode;
  var v761 = max_look_up - 1;
  return JAMScript.call(AJS.hasParent, AJS, [v760, parent_to_consider, v761])
}
function v37(elm$$8, tag_name$$3, class_name$$3) {
  var elms = JAMScript.call(AJS.$bytc, AJS, [tag_name$$3, class_name$$3, elm$$8]);
  var v1137 = elms.length;
  var v762 = v1137 > 0;
  if(v762) {
    return elms[0]
  }else {
    return null
  }
  return
}
function v36(elm$$7, tag_name$$2, class_name$$2) {
  function v35(m) {
    if(m) {
      return m.parentNode
    }
    return
  }
  return JAMScript.call(AJS._nodeWalk, AJS, [elm$$7, tag_name$$2, class_name$$2, v35])
}
function v34(elm$$6, tag_name$$1, class_name$$1, fn_next_elm) {
  function v33(p$$3) {
    return JAMScript.call(AJS.hasClass, AJS, [p$$3, class_name$$1])
  }
  function v32(p$$2) {
    var v763 = JAMScript.call(AJS.nodeName, AJS, [p$$2]);
    return v763 == tag_name$$1
  }
  function v31(p$$1) {
    var v1138 = JAMScript.call(AJS.nodeName, AJS, [p$$1]);
    var v764 = v1138 == tag_name$$1;
    if(v764) {
      v764 = JAMScript.call(AJS.hasClass, AJS, [p$$1, class_name$$1])
    }
    return v764
  }
  var p = JAMScript.call(fn_next_elm, null, [elm$$6]);
  var checkFn;
  var v765 = tag_name$$1 && class_name$$1;
  if(v765) {
    checkFn = v31
  }else {
    if(tag_name$$1) {
      checkFn = v32
    }else {
      checkFn = v33
    }
  }
  var v766 = JAMScript.call(checkFn, null, [elm$$6]);
  if(v766) {
    return elm$$6
  }
  for(;p;) {
    var v767 = JAMScript.call(checkFn, null, [p]);
    if(v767) {
      return p
    }
    p = JAMScript.call(fn_next_elm, null, [p])
  }
  return null
}
function v30(elm$$5) {
  var v768 = elm$$5.nodeName;
  return v768.toLowerCase()
}
function v29(tag_name, class_name, parent, first_match) {
  var class_elements = [];
  var v1139 = JAMScript.call(AJS.isDefined, AJS, [parent]);
  var v769 = !v1139;
  if(v769) {
    parent = document
  }
  var v1140 = JAMScript.call(AJS.isDefined, AJS, [tag_name]);
  var v770 = !v1140;
  if(v770) {
    tag_name = "*"
  }
  var i$$11;
  var j;
  var v1141 = class_name;
  if(v1141) {
    v1141 = document.getElementsByClassName
  }
  var v780 = v1141;
  if(v780) {
    var els = parent.getElementsByClassName(class_name);
    var v774 = tag_name == "*";
    if(v774) {
      class_elements = JAMScript.call(AJS.forceArray, AJS, [els])
    }else {
      var els_len = els.length;
      i$$11 = 0;
      var v773 = i$$11 < els_len;
      for(;v773;) {
        introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
          var v1344 = els[i$$11]
        }
        var v1294 = v1344.nodeName;
        var v1142 = v1294.toLowerCase();
        var v772 = v1142 == tag_name;
        if(v772) {
          introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
            var v771 = els[i$$11]
          }
          class_elements.push(v771)
        }
        i$$11 = i$$11 + 1;
        v773 = i$$11 < els_len
      }
    }
  }else {
    els = parent.getElementsByTagName(tag_name);
    var v779 = !class_name;
    if(v779) {
      class_elements = JAMScript.call(AJS.forceArray, AJS, [els])
    }else {
      els_len = els.length;
      var v1143 = "(^|\\s)" + class_name;
      var v775 = v1143 + "(\\s|$)";
      var pattern$$1 = new RegExp(v775);
      i$$11 = 0;
      var v778 = i$$11 < els_len;
      for(;v778;) {
        introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
          var v1345 = els[i$$11]
        }
        var v1295 = v1345.className;
        var v1144 = pattern$$1.test(v1295);
        var v1296 = !v1144;
        if(v1296) {
          v1144 = !class_name
        }
        var v777 = v1144;
        if(v777) {
          introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
            var v776 = els[i$$11]
          }
          class_elements.push(v776)
        }
        i$$11 = i$$11 + 1;
        v778 = i$$11 < els_len
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
function v28() {
  var args$$3 = JAMScript.call(AJS.flattenElmArguments, AJS, [arguments]);
  var elements = new Array;
  var i$$10 = 0;
  var v1145 = args$$3.length;
  var v782 = i$$10 < v1145;
  for(;v782;) {
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var v781 = args$$3[i$$10]
    }
    var element$$3 = JAMScript.call(AJS.getElement, AJS, [v781]);
    elements.push(element$$3);
    i$$10 = i$$10 + 1;
    var v1146 = args$$3.length;
    v782 = i$$10 < v1146
  }
  return elements
}
function v27(id) {
  var v1147 = JAMScript.call(AJS.isString, AJS, [id]);
  var v1297 = !v1147;
  if(v1297) {
    v1147 = JAMScript.call(AJS.isNumber, AJS, [id])
  }
  var v783 = v1147;
  if(v783) {
    return document.getElementById(id)
  }else {
    return id
  }
  return
}
function v26(fn$$3) {
  function v25() {
    var v784 = JAMScript.call(AJS.$FA, AJS, [arguments]);
    args$$2 = args$$2.concat(v784);
    return JAMScript.call(fn$$3.apply, fn$$3, [window, args$$2])
  }
  var args$$2 = JAMScript.call(AJS.$FA, AJS, [arguments]);
  JAMScript.call(args$$2.shift, args$$2, []);
  return v25
}
function v24(list$$9, fn$$2, start_index$$1, end_index$$1) {
  function v23(elm$$4) {
    var v785 = JAMScript.call(fn$$2, null, [elm$$4]);
    if(v785) {
      r$$4.push(elm$$4)
    }
    return
  }
  var r$$4 = [];
  JAMScript.call(AJS.map, AJS, [list$$9, v23, start_index$$1, end_index$$1]);
  return r$$4
}
function v22(list$$8, fn$$1) {
  var v786 = list$$8.length;
  var i$$9 = v786 - 1;
  var l$$2 = 0;
  var v789 = i$$9 >= l$$2;
  for(;v789;) {
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var v1148 = list$$8[i$$9]
    }
    var v787 = [v1148, i$$9];
    var val$$1 = JAMScript.call(fn$$1.apply, fn$$1, [null, v787]);
    var v788 = val$$1 != undefined;
    if(v788) {
      return val$$1
    }
    i$$9 = i$$9 - 1;
    v789 = i$$9 >= l$$2
  }
  return
}
function v21(list$$7, fn, start_index, end_index) {
  var i$$8 = 0;
  var l$$1 = list$$7.length;
  if(start_index) {
    i$$8 = start_index
  }
  if(end_index) {
    l$$1 = end_index
  }
  var v792 = i$$8 < l$$1;
  for(;v792;) {
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var v790 = list$$7[i$$8]
    }
    var val = JAMScript.call(fn, null, [v790, i$$8]);
    var v791 = val != undefined;
    if(v791) {
      return val
    }
    i$$8 = i$$8 + 1;
    v792 = i$$8 < l$$1
  }
  return
}
function v20(args$$1) {
  var f = JAMScript.call(AJS.forceArray, AJS, [args$$1]);
  return JAMScript.call(AJS.flattenList, AJS, [f])
}
function v19(list$$6) {
  function _flatten(r$$3, l) {
    function v18(o) {
      var v794 = o == null;
      if(v794) {
      }else {
        var v793 = JAMScript.call(AJS.isArray, AJS, [o]);
        if(v793) {
          _flatten(r$$3, o)
        }else {
          r$$3.push(o)
        }
      }
      return
    }
    JAMScript.call(AJS.map, AJS, [l, v18]);
    return
  }
  var has_list = false;
  var new_list = [];
  var i$$7 = 0;
  var v1149 = list$$6.length;
  var v797 = i$$7 < v1149;
  for(;v797;) {
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var elm$$3 = list$$6[i$$7]
    }
    var v795 = JAMScript.call(AJS.isArray, AJS, [elm$$3]);
    if(v795) {
      has_list = true;
      break
    }
    var v796 = elm$$3 != null;
    if(v796) {
      new_list.push(elm$$3)
    }
    i$$7 = i$$7 + 1;
    var v1150 = list$$6.length;
    v797 = i$$7 < v1150
  }
  var v798 = !has_list;
  if(v798) {
    return new_list
  }
  var r$$2 = [];
  _flatten(r$$2, list$$6);
  return r$$2
}
function v17(l1, l2) {
  var i$$6;
  for(i$$6 in l2) {
    JAMScript.set(l1, i$$6, l2[i$$6], JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F)
  }
  return l1
}
function v16(list$$5) {
  var v799 = list$$5;
  var v1298 = Math.random();
  var v1299 = list$$5.length;
  var v1151 = v1298 * v1299;
  var v800 = Math.floor(v1151);
  introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
    return v799[v800]
  }
}
function v15(list$$4) {
  var v1152 = list$$4.length;
  var v802 = v1152 > 0;
  if(v802) {
    var v1153 = list$$4.length;
    var v801 = v1153 - 1;
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      return list$$4[v801]
    }
  }else {
    return null
  }
  return
}
function v14(list$$3) {
  var v1154 = list$$3.length;
  var v803 = v1154 > 0;
  if(v803) {
    return list$$3[0]
  }else {
    return null
  }
  return
}
function v13(elm$$2, list$$2, eval_fn) {
  var i$$5 = 0;
  var v1155 = list$$2.length;
  var v805 = i$$5 < v1155;
  for(;v805;) {
    var v1300 = eval_fn;
    if(v1300) {
      introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
        var v1346 = list$$2[i$$5]
      }
      v1300 = JAMScript.call(eval_fn, null, [v1346])
    }
    var v1156 = v1300;
    var v1302 = !v1156;
    if(v1302) {
      introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
        var v1301 = list$$2[i$$5]
      }
      v1156 = elm$$2 == v1301
    }
    var v804 = v1156;
    if(v804) {
      return i$$5
    }
    i$$5 = i$$5 + 1;
    var v1157 = list$$2.length;
    v805 = i$$5 < v1157
  }
  return-1
}
function v12(elm$$1, list$$1) {
  var i$$4 = JAMScript.call(AJS.getIndex, AJS, [elm$$1, list$$1]);
  var v806 = i$$4 != -1;
  if(v806) {
    return true
  }else {
    return false
  }
  return
}
function v11(delim, list) {
  function v10(elm) {
    var v1158 = delim + elm;
    r$$1 = r$$1 + v1158;
    return
  }
  try {
    return JAMScript.call(list.join, list, [delim])
  }catch(e$$5) {
    var v807 = list[0];
    var v1159 = !v807;
    if(v1159) {
      v807 = ""
    }
    var r$$1 = v807;
    JAMScript.call(AJS.map, AJS, [list, v10, 1]);
    return r$$1 + ""
  }
  return
}
function v9(args) {
  var r = [];
  var i$$3 = 0;
  var v1160 = args.length;
  var v809 = i$$3 < v1160;
  for(;v809;) {
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var v808 = args[i$$3]
    }
    r.push(v808);
    i$$3 = i$$3 + 1;
    var v1161 = args.length;
    v809 = i$$3 < v1161
  }
  return r
}
function v8(v) {
  var v1162 = JAMScript.call(AJS.isArray, AJS, [v]);
  if(v1162) {
    var v1303 = JAMScript.call(AJS.isString, AJS, [v]);
    v1162 = !v1303
  }
  var v811 = v1162;
  if(v811) {
    return v
  }else {
    var v810 = !v;
    if(v810) {
      return[]
    }else {
      return[v]
    }
  }
  return
}
function v7() {
  var v1163 = AJS._agent;
  var v812 = v1163.indexOf("camino");
  return v812 != -1
}
function v6() {
  var v1164 = AJS._agent;
  var v813 = v1164.indexOf("macintosh");
  return v813 != -1
}
function v5() {
  var v1304 = AJS._agent;
  var v1165 = v1304.indexOf("gecko");
  var v814 = v1165 != -1;
  if(v814) {
    var v1166 = AJS._agent_version;
    v814 = v1166 >= 20030210
  }
  return v814
}
function v4() {
  var v1167 = AJS._agent;
  var v815 = v1167.indexOf("opera");
  return v815 != -1
}
function v3(all) {
  if(all) {
    var v816 = AJS._agent;
    return v816.indexOf("khtml")
  }
  var v1305 = AJS._agent;
  var v1168 = v1305.indexOf("khtml");
  var v817 = v1168 != -1;
  if(v817) {
    var v1306 = AJS._agent;
    var v1169 = v1306.match(/3\.\d\.\d safari/);
    v817 = v1169 == null
  }
  return v817
}
function v2() {
  var v1170 = AJS._agent;
  var v818 = v1170.indexOf("msie 8");
  return v818 != -1
}
function v1() {
  var v1307 = AJS._agent;
  var v1171 = v1307.indexOf("msie");
  var v819 = v1171 != -1;
  if(v819) {
    var v1308 = AJS._agent;
    var v1172 = v1308.indexOf("opera");
    v819 = v1172 == -1
  }
  return v819
}
function v0(var_name) {
  var v1173 = window.location;
  var v820 = v1173.search;
  var query$$2 = v820.substring(1);
  var vars = query$$2.split("&");
  var i$$2 = 0;
  var v1174 = vars.length;
  var v823 = i$$2 < v1174;
  for(;v823;) {
    introspect(JAMScript.introspectors.processD1AC21BB80EC25700F3E2B60070EE2799345578F) {
      var v821 = vars[i$$2]
    }
    var pair = v821.split("=");
    var v1175 = pair[0];
    var v822 = v1175 == var_name;
    if(v822) {
      return pair[1]
    }
    i$$2 = i$$2 + 1;
    var v1176 = vars.length;
    v823 = i$$2 < v1176
  }
  return null
}
function GoogieSpell(img_dir, server_url) {
  function fn$$16(e$$17) {
    var elm$$39 = JAMScript.call(AJS.getEventElm, AJS, [e$$17]);
    var v1309 = elm$$39.googie_action_btn;
    var v1177 = v1309 != "1";
    if(v1177) {
      v1177 = JAMScript.call(this.isLangWindowShown, this, [])
    }
    var v824 = v1177;
    if(v824) {
      JAMScript.call(this.hideLangWindow, this, [])
    }
    var v1310 = elm$$39.googie_action_btn;
    var v1178 = v1310 != "1";
    if(v1178) {
      v1178 = JAMScript.call(this.isErrorWindowShown, this, [])
    }
    var v825 = v1178;
    if(v825) {
      JAMScript.call(this.hideErrorWindow, this, [])
    }
    return
  }
  var cookie_value;
  var lang;
  cookie_value = getCookie("language");
  var v826 = cookie_value != null;
  if(v826) {
    GOOGIE_CUR_LANG = cookie_value
  }else {
    GOOGIE_CUR_LANG = GOOGIE_DEFAULT_LANG
  }
  this.img_dir = img_dir;
  this.server_url = server_url;
  this.org_lang_to_word = {"da":"Dansk", "de":"Deutsch", "en":"English", "es":"Espa&#241;ol", "fr":"Fran&#231;ais", "it":"Italiano", "nl":"Nederlands", "pl":"Polski", "pt":"Portugu&#234;s", "fi":"Suomi", "sv":"Svenska"};
  this.lang_to_word = this.org_lang_to_word;
  var v827 = this.lang_to_word;
  var v1393 = JAMScript.call(AJS.keys, AJS, [v827]);
  this.langlist_codes = v1393;
  this.show_change_lang_pic = true;
  this.change_lang_pic_placement = "left";
  this.report_state_change = true;
  this.ta_scroll_top = 0;
  this.el_scroll_top = 0;
  this.lang_chck_spell = "Check spelling";
  this.lang_revert = "Revert to";
  this.lang_close = "Close";
  this.lang_rsm_edt = "Resume editing";
  this.lang_no_error_found = "No spelling errors found";
  this.lang_no_suggestions = "No suggestions";
  this.show_spell_img = true;
  this.decoration = true;
  this.use_close_btn = true;
  this.edit_layer_dbl_click = true;
  this.report_ta_not_found = true;
  this.custom_ajax_error = null;
  this.custom_no_spelling_error = null;
  this.custom_menu_builder = [];
  this.custom_item_evaulator = null;
  this.extra_menu_items = [];
  this.custom_spellcheck_starter = null;
  this.main_controller = true;
  this.lang_state_observer = null;
  this.spelling_state_observer = null;
  this.show_menu_observer = null;
  this.all_errors_fixed_observer = null;
  this.use_focus = false;
  this.focus_link_t = null;
  this.focus_link_b = null;
  this.cnt_errors = 0;
  this.cnt_errors_fixed = 0;
  var v828 = JAMScript.call(AJS.$b, AJS, [fn$$16, this]);
  JAMScript.call(AJS.AEV, AJS, [document, "click", v828]);
  return
}
function setCookie(name$$37, value$$31, expires, path, domain, secure) {
  var v1357 = name$$37 + "=";
  var v1358 = escape(value$$31);
  var v1347 = v1357 + v1358;
  var v1359;
  if(expires) {
    var v1363 = expires.toGMTString();
    v1359 = "; expires=" + v1363
  }else {
    v1359 = ""
  }
  var v1348 = v1359;
  var v1311 = v1347 + v1348;
  var v1349;
  if(path) {
    v1349 = "; path=" + path
  }else {
    v1349 = ""
  }
  var v1312 = v1349;
  var v1179 = v1311 + v1312;
  var v1313;
  if(domain) {
    v1313 = "; domain=" + domain
  }else {
    v1313 = ""
  }
  var v1180 = v1313;
  var v829 = v1179 + v1180;
  var v1181;
  if(secure) {
    v1181 = "; secure"
  }else {
    v1181 = ""
  }
  var v830 = v1181;
  var curCookie = v829 + v830;
  document.cookie = curCookie;
  return
}
function getCookie(name$$38) {
  var dc = document.cookie;
  var prefix$$2 = name$$38 + "=";
  var v831 = "; " + prefix$$2;
  var begin$$11 = dc.indexOf(v831);
  var v833 = begin$$11 == -1;
  if(v833) {
    begin$$11 = dc.indexOf(prefix$$2);
    var v832 = begin$$11 != 0;
    if(v832) {
      return null
    }
  }else {
    begin$$11 = begin$$11 + 2
  }
  var v834 = document.cookie;
  var end$$1 = v834.indexOf(";", begin$$11);
  var v835 = end$$1 == -1;
  if(v835) {
    end$$1 = dc.length
  }
  var v1314 = prefix$$2.length;
  var v1182 = begin$$11 + v1314;
  var v836 = dc.substring(v1182, end$$1);
  return unescape(v836)
}
var v1183 = window.AJS;
var v840 = !v1183;
if(v840) {
  var v1184 = navigator.userAgent;
  var v837 = v1184.toLowerCase();
  var v838 = navigator.productSub;
  var AJS = {BASE_URL:"", ajaxErrorHandler:null, getQueryArgument:v0, _agent:v837, _agent_version:v838, isIe:v1, isIe8:v2, isSafari:v3, isOpera:v4, isMozilla:v5, isMac:v6, isCamino:v7, createArray:v8, forceArray:v9, join:v11, isIn:v12, getIndex:v13, getFirst:v14, getLast:v15, getRandom:v16, update:v17, flattenList:v19, flattenElmArguments:v20, map:v21, rmap:v22, filter:v24, partial:v26, getElement:v27, getElements:v28, getElementsByTagAndClassName:v29, nodeName:v30, _nodeWalk:v34, getParentBytc:v36, 
  getChildBytc:v37, hasParent:v38, getPreviousSiblingBytc:v40, getNextSiblingBytc:v42, getBody:v43, getFormElement:v46, getSelectValue:v47, documentInsert:v48, appendChildNodes:v50, appendToTop:v51, replaceChildNodes:v52, insertAfter:v53, insertBefore:v54, swapDOM:v55, removeElement:v57, createDOM:v58, _createDomShortcuts:v61, setHTML:v63, setVisibility:v64, showElement:v65, hideElement:v66, isElementHidden:v67, isElementShown:v68, setStyle:v72, __cssDim:v73, setWidth:v74, setHeight:v75, setLeft:v76, 
  setRight:v77, setTop:v78, setClass:v80, addClass:v82, hasClass:v83, removeClass:v85, setOpacity:v86, HTML2DOM:v87, preloadImages:v90, RND:v91, getXMLHttpRequest:v97, getRequest:v98, serializeJSON:v99, loadJSON:v100, evalTxt:v101, evalScriptTags:v102, encodeArguments:v103, _reprString:v104, _reprDate:v105, getMousePos:v106, getScrollTop:v107, absolutePosition:v108, getWindowSize:v109, isOverlapping:v110, getEventElm:v111, setEventKey:v112, onEvent:v114, ready_bound:false, is_ready:false, bindReady:v118, 
  ready_list:[], ready:v120, _f_guid:0, _wipe_guid:0, myaddEventListener:v123, handleEvent:v125, removeEventListener:v127, bind:v128, bindMethods:v129, preventDefault:v130, _listenOnce:v131, _getRealScope:v133, _reccruing_tos:{}, setSingleTimeout:v134, keys:v135, values:v136, urlencode:v137, urldecode:v138, isDefined:v139, isArray:v140, isString:v141, isNumber:v142, isObject:v143, isFunction:v144, isDict:v145, exportToGlobalScope:v146, log:v147, withScope:v148, strip:v149, trim_if_needed:v150};
  AJS.Class = v151;
  var v839 = AJS.Class;
  v839.prototype = {extend:v152, implement:v153, _parentize:v155};
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
  AJSDeferred = v156;
  AJSDeferred.prototype = {excCallbackSeq:v157, callback:v158, errback:v159, addErrback:v160, addCallback:v161, abort:v162, addCallbacks:v163, _onreadystatechange:v164, sendReq:v165};
  JAMScript.call(AJS._createDomShortcuts, AJS, [])
}
script_loaded = true;
JAMScript.call(AJS.exportToGlobalScope, AJS, []);
JAMScript.call(AJS.bindReady, AJS, []);
var GOOGIE_CUR_LANG = null;
var GOOGIE_DEFAULT_LANG = "en";
var v841 = GoogieSpell.prototype;
v841.decorateTextarea = v166;
var v842 = GoogieSpell.prototype;
v842.setSpellContainer = v167;
var v843 = GoogieSpell.prototype;
v843.setLanguages = v168;
var v844 = GoogieSpell.prototype;
v844.setForceWidthHeight = v169;
var v845 = GoogieSpell.prototype;
v845.setDecoration = v170;
var v846 = GoogieSpell.prototype;
v846.dontUseCloseButtons = v171;
var v847 = GoogieSpell.prototype;
v847.appendNewMenuItem = v172;
var v848 = GoogieSpell.prototype;
v848.appendCustomMenuBuilder = v173;
var v849 = GoogieSpell.prototype;
v849.setFocus = v174;
var v850 = GoogieSpell.prototype;
v850.getValue = v175;
var v851 = GoogieSpell.prototype;
v851.setValue = v176;
var v852 = GoogieSpell.prototype;
v852.setStateChanged = v177;
var v853 = GoogieSpell.prototype;
v853.setReportStateChange = v178;
var v854 = GoogieSpell.prototype;
v854.getGoogleUrl = v179;
GoogieSpell.escapeSepcial = v180;
GoogieSpell.createXMLReq = v181;
var v855 = GoogieSpell.prototype;
v855.spellCheck = v182;
var v856 = GoogieSpell.prototype;
v856.parseResult = v183;
var v857 = GoogieSpell.prototype;
v857.errorFixed = v184;
var v858 = GoogieSpell.prototype;
v858.errorFound = v185;
var v859 = GoogieSpell.prototype;
v859.createErrorWindow = v186;
var v860 = GoogieSpell.prototype;
v860.isErrorWindowShown = v187;
var v861 = GoogieSpell.prototype;
v861.hideErrorWindow = v188;
var v862 = GoogieSpell.prototype;
v862.updateOrginalText = v189;
var v863 = GoogieSpell.prototype;
v863.saveOldValue = v190;
var v864 = GoogieSpell.prototype;
v864.createListSeparator = v191;
var v865 = GoogieSpell.prototype;
v865.correctError = v192;
var v866 = GoogieSpell.prototype;
v866.showErrorWindow = v198;
var v867 = GoogieSpell.prototype;
v867.createEditLayer = v201;
var v868 = GoogieSpell.prototype;
v868.resumeEditing = v202;
var v869 = GoogieSpell.prototype;
v869.createErrorLink = v203;
GoogieSpell.createPart = v204;
var v870 = GoogieSpell.prototype;
v870.showErrorsInIframe = v206;
var v871 = GoogieSpell.prototype;
v871.createLangWindow = v210;
var v872 = GoogieSpell.prototype;
v872.setCurrentLanguage = v211;
var v873 = GoogieSpell.prototype;
v873.isLangWindowShown = v212;
var v874 = GoogieSpell.prototype;
v874.hideLangWindow = v213;
var v875 = GoogieSpell.prototype;
v875.deHighlightCurSel = v214;
var v876 = GoogieSpell.prototype;
v876.highlightCurSel = v215;
var v877 = GoogieSpell.prototype;
v877.showLangWindow = v216;
var v878 = GoogieSpell.prototype;
v878.createChangeLangPic = v217;
var v879 = GoogieSpell.prototype;
v879.createSpellDiv = v218;
var v880 = GoogieSpell.prototype;
v880.flashNoSpellingErrorState = v220;
var v881 = GoogieSpell.prototype;
v881.resumeEditingState = v222;
var v882 = GoogieSpell.prototype;
v882.checkSpellingState = v223;
GoogieSpell.item_onmouseover = v224;
GoogieSpell.item_onmouseout = v225;
var v883 = GoogieSpell.prototype;
v883.createCloseButton = v226;
var v884 = GoogieSpell.prototype;
v884.createButton = v227;
var v885 = GoogieSpell.prototype;
v885.removeIndicator = v228;
var v886 = GoogieSpell.prototype;
v886.appendIndicator = v229;
var v887 = GoogieSpell.prototype;
v887.createFocusLink = v230;
var x = document.cookie;
var googie1 = new GoogieSpell("./", "./spell-check/spell-check.php?lang=");
JAMScript.call(googie1.decorateTextarea, googie1, ["ta1"]);

