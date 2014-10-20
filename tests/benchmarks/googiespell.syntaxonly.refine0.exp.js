// googiespell.js
function v230(name$$35) {
  return JAM.call(AJS.A, AJS, [{"href":"javascript:;", name:name$$35}]);
}
function v229(elm$$52) {
  var img$$3 = JAM.call(AJS.IMG, AJS, [{"src":this.img_dir + "indicator.gif", "style":"margin-right: 5px;"}]);
  JAM.call(AJS.setWidth, AJS, [img$$3, 16]);
  JAM.call(AJS.setHeight, AJS, [img$$3, 16]);
  this.indicator = img$$3;
  img$$3.style.textDecoration = "none";
  try {
    JAM.call(AJS.insertBefore, AJS, [img$$3, elm$$52]);
  } catch (e$$36) {
  }
  return;
}
function v228(elm$$51) {
  try {
    JAM.call(AJS.removeElement, AJS, [this.indicator]);
  } catch (e$$35) {
  }
  return;
}
function v227(name$$34, css_class, c_fn$$1) {
  var btn_row = AJS.TR();
  var btn = AJS.TD();
  JAM.set(btn, "onmouseover", GoogieSpell.item_onmouseover);
  JAM.set(btn, "onmouseout", GoogieSpell.item_onmouseout);
  var spn_btn;
  if (css_class != "") {
    spn_btn = JAM.call(AJS.SPAN, AJS, [{"class":css_class}]);
    JAM.set(spn_btn, "innerHTML", name$$34);
  } else {
    spn_btn = JAM.call(AJS.TN, AJS, [name$$34]);
  }
  JAM.call(btn.appendChild, btn, [spn_btn]);
  JAM.call(AJS.AEV, AJS, [btn, "click", c_fn$$1]);
  JAM.call(btn_row.appendChild, btn_row, [btn]);
  return btn_row;
}
function v226(c_fn) {
  return JAM.call(this.createButton, this, [this.lang_close, "googie_list_close", JAM.call(AJS.$b, AJS, [c_fn, this])]);
}
function v225(e$$34) {
  var elm$$50 = JAM.call(AJS.getEventElm, AJS, [e$$34]);
  var v889 = elm$$50.className != "googie_list_revert";
  if (v889) {
    v889 = elm$$50.className != "googie_list_close";
  }
  if (v889) {
    elm$$50.className = "googie_list_onout";
  } else {
    elm$$50.parentNode.className = "googie_list_onout";
  }
  return;
}
function v224(e$$33) {
  var elm$$49 = JAM.call(AJS.getEventElm, AJS, [e$$33]);
  var v890 = elm$$49.className != "googie_list_revert";
  if (v890) {
    v890 = elm$$49.className != "googie_list_close";
  }
  if (v890) {
    elm$$49.className = "googie_list_onhover";
  } else {
    elm$$49.parentNode.className = "googie_list_onhover";
  }
  return;
}
function v223(fire) {
  function fn$$24() {
    this.spellCheck();
    return;
  }
  var v891 = !JAM.call(AJS.isDefined, AJS, [fire]);
  if (!v891) {
    v891 = fire;
  }
  if (v891) {
    JAM.call(this.setStateChanged, this, ["spell_check"]);
  }
  if (this.show_change_lang_pic) {
    var v1371 = this.createChangeLangPic();
    this.switch_lan_pic = v1371;
  } else {
    var v1372 = AJS.SPAN();
    this.switch_lan_pic = v1372;
  }
  var span_chck = this.createSpellDiv();
  if (this.custom_spellcheck_starter) {
    JAM.set(span_chck, "onclick", this.custom_spellcheck_starter);
  } else {
    var myfn$$1 = JAM.call(AJS.$b, AJS, [fn$$24, this]);
    JAM.call(AJS.AEV, AJS, [span_chck, "click", myfn$$1]);
  }
  this.spell_span = span_chck;
  if (this.main_controller) {
    if (this.change_lang_pic_placement == "left") {
      JAM.call(AJS.RCN, AJS, [this.spell_container, span_chck, " ", this.switch_lan_pic]);
    } else {
      JAM.call(AJS.RCN, AJS, [this.spell_container, this.switch_lan_pic, " ", span_chck]);
    }
  }
  return;
}
function v222() {
  function v221(e$$31) {
    this.resumeEditing();
    return;
  }
  JAM.call(this.setStateChanged, this, ["resume_editing"]);
  if (this.main_controller) {
    JAM.call(AJS.hideElement, AJS, [this.switch_lan_pic]);
    var dummy$$2 = JAM.call(AJS.IMG, AJS, [{"src":this.img_dir + "blank.gif", "style":"height: 16px; width: 1px;"}]);
    var rsm$$1 = AJS.SPAN();
    JAM.set(rsm$$1, "innerHTML", this.lang_rsm_edt);
    JAM.call(AJS.RCN, AJS, [this.spell_span, JAM.call(AJS.SPAN, AJS, [dummy$$2, rsm$$1])]);
    var fn$$23 = v221;
    var myfn = JAM.call(AJS.$b, AJS, [fn$$23, this]);
    this.spell_span.addEventListener("click", myfn, false);
    this.spell_span.className = "googie_resume_editing";
  }
  try {
    this.edit_layer.scrollTop = this.ta_scroll_top;
  } catch (e$$32) {
  }
  return;
}
function v220(on_finish) {
  function v219() {
    on_finish();
    this.checkSpellingState();
    return;
  }
  var no_spell_errors;
  if (on_finish) {
    var fn$$22 = v219;
    no_spell_errors = fn$$22;
  } else {
    no_spell_errors = this.checkSpellingState;
  }
  JAM.call(this.setStateChanged, this, ["no_error_found"]);
  if (this.main_controller) {
    JAM.call(AJS.hideElement, AJS, [this.switch_lan_pic]);
    var dummy$$1 = JAM.call(AJS.IMG, AJS, [{"src":this.img_dir + "blank.gif", "style":"height: 16px; width: 1px;"}]);
    var rsm = AJS.SPAN();
    JAM.set(rsm, "innerHTML", this.lang_no_error_found);
    JAM.call(AJS.RCN, AJS, [this.spell_span, JAM.call(AJS.SPAN, AJS, [dummy$$1, rsm])]);
    this.spell_span.className = "googie_check_spelling_ok";
    this.spell_span.style.textDecoration = "none";
    this.spell_span.style.cursor = "default";
    JAM.call(setTimeout, null, [JAM.call(AJS.$b, AJS, [no_spell_errors, this]), 1200]);
  }
  return;
}
function v218() {
  var chk_spell = JAM.call(AJS.SPAN, AJS, [{"class":"googie_check_spelling_link", "id":"googie_check_spelling_link"}]);
  JAM.set(chk_spell, "innerHTML", this.lang_chck_spell);
  var spell_img = null;
  if (this.show_spell_img) {
    spell_img = JAM.call(AJS.IMG, AJS, [{"src":this.img_dir + "spellc.gif"}]);
  }
  return JAM.call(AJS.SPAN, AJS, [spell_img, " ", chk_spell]);
}
function v217() {
  function fn$$21(e$$30) {
    var elm$$48 = JAM.call(AJS.getEventElm, AJS, [e$$30]);
    if (JAM.call(AJS.nodeName, AJS, [elm$$48]) == "img") {
      elm$$48 = elm$$48.parentNode;
    }
    if (elm$$48.className == "googie_lang_3d_click") {
      elm$$48.className = "googie_lang_3d_on";
      this.hideLangWindow();
    } else {
      elm$$48.className = "googie_lang_3d_click";
      JAM.call(this.showLangWindow, this, [switch_lan]);
    }
    return;
  }
  var img$$2 = JAM.call(AJS.IMG, AJS, [{"src":this.img_dir + "change_lang.gif", "alt":"Change language"}]);
  img$$2.googie_action_btn = "1";
  var switch_lan = JAM.call(AJS.SPAN, AJS, [{"class":"googie_lang_3d_on", "style":"padding-left: 6px;"}, img$$2]);
  JAM.call(AJS.AEV, AJS, [switch_lan, "click", JAM.call(AJS.$b, AJS, [fn$$21, this])]);
  return switch_lan;
}
function v216(elm$$47, ofst_top, ofst_left) {
  if (this.show_menu_observer) {
    JAM.call(this.show_menu_observer, this, [this]);
  }
  if (!JAM.call(AJS.isDefined, AJS, [ofst_top])) {
    ofst_top = 20;
  }
  if (!JAM.call(AJS.isDefined, AJS, [ofst_left])) {
    ofst_left = 100;
  }
  this.createLangWindow();
  var v280 = AJS.getBody();
  JAM.call(v280.appendChild, v280, [this.language_window]);
  var abs_pos$$1 = JAM.call(AJS.absolutePosition, AJS, [elm$$47]);
  JAM.call(AJS.showElement, AJS, [this.language_window]);
  JAM.call(AJS.setTop, AJS, [this.language_window, abs_pos$$1.y + ofst_top]);
  JAM.call(AJS.setLeft, AJS, [this.language_window, abs_pos$$1.x + ofst_left - this.language_window.offsetWidth]);
  this.highlightCurSel();
  this.language_window.style.visibility = "visible";
  return;
}
function v215() {
  if (GOOGIE_CUR_LANG == null) {
    GOOGIE_CUR_LANG = GOOGIE_DEFAULT_LANG;
  }
  var i$$21 = 0;
  var v293 = i$$21 < this.lang_elms.length;
  for (;v293;) {
    var v1318 = this.lang_elms;
    introspect(JAM.policy.p1) {
      var v1199 = v1318[i$$21]
    }
    if (v1199.googieId == GOOGIE_CUR_LANG) {
      var v909 = this.lang_elms;
      introspect(JAM.policy.p1) {
        var v289 = v909[i$$21]
      }
      v289.className = "googie_list_selected";
      var v290 = this.lang_elms;
      introspect(JAM.policy.p1) {
        this.lang_cur_elm = v290[i$$21];
      }
    } else {
      var v910 = this.lang_elms;
      introspect(JAM.policy.p1) {
        var v291 = v910[i$$21]
      }
      v291.className = "googie_list_onout";
    }
    i$$21 = i$$21 + 1;
    v293 = i$$21 < this.lang_elms.length;
  }
  return;
}
function v214() {
  this.lang_cur_elm.className = "googie_list_onout";
  return;
}
function v213() {
  try {
    this.language_window.style.visibility = "hidden";
    this.switch_lan_pic.className = "googie_lang_3d_on";
  } catch (e$$29) {
  }
  return;
}
function v212() {
  var v297 = this.language_window != null;
  if (v297) {
    v297 = this.language_window.style.visibility == "visible";
  }
  return v297;
}
function v211(lan_code) {
  GOOGIE_CUR_LANG = lan_code;
  var now = new Date;
  now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1E3);
  setCookie("language", lan_code, now);
  return;
}
function v210() {
  function v209(e$$28) {
    var i_it$$1 = JAM.call(AJS.getEventElm, AJS, [e$$28]);
    if (i_it$$1.className != "googie_list_selected") {
      i_it$$1.className = "googie_list_onout";
    }
    return;
  }
  function v208(e$$27) {
    var i_it = JAM.call(AJS.getEventElm, AJS, [e$$27]);
    if (i_it.className != "googie_list_selected") {
      i_it.className = "googie_list_onhover";
    }
    return;
  }
  function v207(e$$26) {
    var elm$$46 = JAM.call(AJS.getEventElm, AJS, [e$$26]);
    this.deHighlightCurSel();
    JAM.call(this.setCurrentLanguage, this, [elm$$46.googieId]);
    if (this.lang_state_observer != null) {
      this.lang_state_observer();
    }
    this.highlightCurSel();
    this.hideLangWindow();
    return;
  }
  var v1373 = JAM.call(AJS.DIV, AJS, [{"class":"googie_window"}]);
  this.language_window = v1373;
  JAM.call(AJS.setWidth, AJS, [this.language_window, 100]);
  this.language_window.googie_action_btn = "1";
  var table$$2 = JAM.call(AJS.TABLE, AJS, [{"class":"googie_list"}]);
  JAM.call(AJS.setWidth, AJS, [table$$2, "100%"]);
  var list$$12 = AJS.TBODY();
  var v1374 = new Array;
  this.lang_elms = v1374;
  i = 0;
  var v313 = i < this.langlist_codes.length;
  for (;v313;) {
    var row$$1 = AJS.TR();
    var item$$2 = AJS.TD();
    var v307 = this.langlist_codes;
    introspect(JAM.policy.p1) {
      item$$2.googieId = v307[i];
    }
    this.lang_elms.push(item$$2);
    var lang_span = AJS.SPAN();
    var v309 = this.lang_to_word;
    var v921 = this.langlist_codes;
    introspect(JAM.policy.p1) {
      var v310 = v921[i]
    }
    JAM.set(lang_span, "innerHTML", JAM.get(v309, v310, JAM.policy.p1));
    JAM.call(item$$2.appendChild, item$$2, [JAM.call(AJS.TN, AJS, [lang_span.innerHTML])]);
    var fn$$20 = v207;
    JAM.call(AJS.AEV, AJS, [item$$2, "click", JAM.call(AJS.$b, AJS, [fn$$20, this])]);
    JAM.set(item$$2, "onmouseover", v208);
    JAM.set(item$$2, "onmouseout", v209);
    JAM.call(row$$1.appendChild, row$$1, [item$$2]);
    JAM.call(list$$12.appendChild, list$$12, [row$$1]);
    i = i + 1;
    v313 = i < this.langlist_codes.length;
  }
  if (this.use_close_btn) {
    JAM.call(list$$12.appendChild, list$$12, [JAM.call(this.createCloseButton, this, [this.hideLangWindow])]);
  }
  this.highlightCurSel();
  JAM.call(table$$2.appendChild, table$$2, [list$$12]);
  var v316 = this.language_window;
  JAM.call(v316.appendChild, v316, [table$$2]);
  return;
}
function v206() {
  function v205(elm$$45) {
    JAM.call(me$$6.custom_item_evaulator, me$$6, [me$$6, elm$$45]);
    return;
  }
  var output = AJS.DIV();
  output.style.textAlign = "left";
  var pointer = 0;
  var results$$1 = this.results;
  if (results$$1.length > 0) {
    var i$$20 = 0;
    var v323 = i$$20 < results$$1.length;
    for (;v323;) {
      introspect(JAM.policy.p1) {
        var v927 = results$$1[i$$20]
      }
      var offset$$11 = v927["attrs"]["o"];
      introspect(JAM.policy.p1) {
        var v928 = results$$1[i$$20]
      }
      var len$$1 = v928["attrs"]["l"];
      var part_1_text = this.orginal_text.substring(pointer, offset$$11);
      var part_1$$1 = JAM.call(GoogieSpell.createPart, GoogieSpell, [part_1_text]);
      JAM.call(output.appendChild, output, [part_1$$1]);
      pointer = pointer + (offset$$11 - pointer);
      var err_link = JAM.call(this.createErrorLink, this, [this.orginal_text.substr(offset$$11, len$$1), i$$20]);
      this.error_links.push(err_link);
      JAM.call(output.appendChild, output, [err_link]);
      pointer = pointer + len$$1;
      i$$20 = i$$20 + 1;
      v323 = i$$20 < results$$1.length;
    }
    var part_2_text = this.orginal_text.substr(pointer, this.orginal_text.length);
    var part_2$$1 = JAM.call(GoogieSpell.createPart, GoogieSpell, [part_2_text]);
    JAM.call(output.appendChild, output, [part_2$$1]);
  } else {
    JAM.set(output, "innerHTML", this.orginal_text);
  }
  var me$$6 = this;
  if (this.custom_item_evaulator) {
    JAM.call(AJS.map, AJS, [this.error_links, v205]);
  }
  JAM.call(AJS.ACN, AJS, [this.edit_layer, output]);
  this.text_area_bottom = this.text_area.offsetTop + this.text_area.offsetHeight;
  JAM.call(AJS.hideElement, AJS, [this.text_area]);
  JAM.call(AJS.insertBefore, AJS, [this.edit_layer, this.text_area]);
  if (this.use_focus) {
    var v1375 = JAM.call(this.createFocusLink, this, ["focus_t"]);
    this.focus_link_t = v1375;
    var v1376 = JAM.call(this.createFocusLink, this, ["focus_b"]);
    this.focus_link_b = v1376;
    JAM.call(AJS.insertBefore, AJS, [this.focus_link_t, this.edit_layer]);
    JAM.call(AJS.insertAfter, AJS, [this.focus_link_b, this.edit_layer]);
  }
  this.edit_layer.scrollTop = this.ta_scroll_top;
  return;
}
function v204(txt_part) {
  if (txt_part == " ") {
    return JAM.call(AJS.TN, AJS, [" "]);
  }
  var result$$2 = AJS.SPAN();
  var is_first = true;
  var is_safari = navigator.userAgent.toLowerCase().indexOf("safari") != -1;
  var part = AJS.SPAN();
  txt_part = JAM.call(GoogieSpell.escapeSepcial, GoogieSpell, [txt_part]);
  txt_part = txt_part.replace(/\n/g, "<br>");
  txt_part = txt_part.replace(/    /g, " &nbsp;");
  txt_part = txt_part.replace(/^ /g, "&nbsp;");
  txt_part = txt_part.replace(/ $/g, "&nbsp;");
  JAM.set(part, "innerHTML", txt_part);
  return part;
}
function v203(text$$10, id$$5) {
  function d$$4(e$$25) {
    JAM.call(me$$5.showErrorWindow, me$$5, [elm$$44, id$$5]);
    d$$4 = null;
    return false;
  }
  var elm$$44 = JAM.call(AJS.SPAN, AJS, [{"class":"googie_link"}]);
  var me$$5 = this;
  JAM.call(AJS.AEV, AJS, [elm$$44, "click", d$$4]);
  elm$$44.googie_action_btn = "1";
  elm$$44.g_id = id$$5;
  elm$$44.is_corrected = false;
  JAM.call(AJS.AEV, AJS, [elm$$44, "contextmenu", d$$4]);
  JAM.set(elm$$44, "innerHTML", text$$10);
  return elm$$44;
}
function v202() {
  JAM.call(this.setStateChanged, this, ["spell_check"]);
  this.switch_lan_pic.style.display = "inline";
  if (this.edit_layer) {
    this.el_scroll_top = this.edit_layer.scrollTop;
  }
  this.hideErrorWindow();
  if (this.main_controller) {
    this.spell_span.className = "googie_no_style";
  }
  if (!this.ignore) {
    try {
      this.edit_layer.parentNode.removeChild(this.edit_layer);
      if (this.use_focus) {
        JAM.call(AJS.removeElement, AJS, [this.focus_link_t]);
        JAM.call(AJS.removeElement, AJS, [this.focus_link_b]);
      }
    } catch (e$$24) {
    }
    JAM.call(AJS.showElement, AJS, [this.text_area]);
    if (this.el_scroll_top != undefined) {
      this.text_area.scrollTop = this.el_scroll_top;
    }
  }
  JAM.call(this.checkSpellingState, this, [false]);
  return;
}
function v201(width$$10, height$$9) {
  function v200(e$$23) {
    function v199() {
      me$$4.text_area.focus();
      fn1$$1 = null;
      return;
    }
    var v940 = JAM.call(AJS.getEventElm, AJS, [e$$23]).className != "googie_link";
    if (v940) {
      v940 = !me$$4.isErrorWindowShown();
    }
    if (v940) {
      me$$4.resumeEditing();
      var fn1$$1 = v199;
      JAM.call(setTimeout, null, [fn1$$1, 10]);
    }
    return false;
  }
  var v1377 = JAM.call(AJS.DIV, AJS, [{"class":"googie_edit_layer"}]);
  this.edit_layer = v1377;
  this.edit_layer.className = this.text_area.className;
  this.edit_layer.style.border = "1px solid #999";
  this.edit_layer.style.backgroundColor = "#f7f7f7";
  this.edit_layer.style.padding = "3px";
  this.edit_layer.style.margin = "0px";
  JAM.call(AJS.setWidth, AJS, [this.edit_layer, width$$10 - 8]);
  var v946 = JAM.call(AJS.nodeName, AJS, [this.text_area]) != "input";
  if (!v946) {
    v946 = JAM.call(this.getValue, this, [this.text_area]) == "";
  }
  if (v946) {
    this.edit_layer.style.overflow = "auto";
    JAM.call(AJS.setHeight, AJS, [this.edit_layer, height$$9 - 6]);
  } else {
    this.edit_layer.style.overflow = "hidden";
  }
  if (this.edit_layer_dbl_click) {
    var me$$4 = this;
    var fn$$19 = v200;
    JAM.set(this.edit_layer, "ondblclick", fn$$19);
    fn$$19 = null;
  }
  return;
}
function v198(elm$$43, id$$4) {
  function v197(i$$19) {
    function v196() {
      return JAM.call(JAM.get(e_elm, 1, JAM.policy.p1), e_elm, [elm$$43, me$$3]);
    }
    if (i$$19 < me$$3.extra_menu_items.length) {
      var v375 = me$$3.extra_menu_items;
      introspect(JAM.policy.p1) {
        var e_elm = v375[i$$19]
      }
      introspect(JAM.policy.p1) {
        var v1212 = e_elm[2]
      }
      var v950 = !v1212;
      if (!v950) {
        v950 = JAM.call(JAM.get(e_elm, 2, JAM.policy.p1), e_elm, [elm$$43, me$$3]);
      }
      if (v950) {
        var e_row = AJS.TR();
        introspect(JAM.policy.p1) {
          var v376 = e_elm[0]
        }
        var e_col$$1 = JAM.call(AJS.TD, AJS, [v376]);
        JAM.set(e_col$$1, "onmouseover", GoogieSpell.item_onmouseover);
        JAM.set(e_col$$1, "onmouseout", GoogieSpell.item_onmouseout);
        var fn$$18 = v196;
        JAM.call(AJS.AEV, AJS, [e_col$$1, "click", fn$$18]);
        JAM.call(AJS.ACN, AJS, [e_row, e_col$$1]);
        JAM.call(AJS.ACN, AJS, [list$$11, e_row]);
      }
      JAM.call(loop, null, [i$$19 + 1]);
    }
    return;
  }
  function v195() {
    if (edit_input.value != "") {
      if (!JAM.call(AJS.isDefined, AJS, [elm$$43.old_value])) {
        JAM.call(this.saveOldValue, this, [elm$$43, elm$$43.innerHTML]);
      }
      JAM.call(this.updateOrginalText, this, [offset$$10, elm$$43.innerHTML, edit_input.value, id$$4]);
      elm$$43.style.color = "green";
      elm$$43.is_corrected = true;
      JAM.set(elm$$43, "innerHTML", edit_input.value);
      this.hideErrorWindow();
    }
    return false;
  }
  function v194(e$$22) {
    JAM.call(this.updateOrginalText, this, [offset$$10, elm$$43.innerHTML, old_value$$3, id$$4]);
    elm$$43.is_corrected = true;
    elm$$43.style.color = "#b91414";
    JAM.set(elm$$43, "innerHTML", old_value$$3);
    this.hideErrorWindow();
    return;
  }
  function v193(e$$21) {
    var l_elm$$1 = JAM.call(AJS.getEventElm, AJS, [e$$21]);
    JAM.call(this.correctError, this, [id$$4, elm$$43, l_elm$$1]);
    return;
  }
  if (this.show_menu_observer) {
    JAM.call(this.show_menu_observer, this, [this]);
  }
  var me$$3 = this;
  var abs_pos = JAM.call(AJS.absolutePosition, AJS, [elm$$43]);
  abs_pos.y = abs_pos.y - this.edit_layer.scrollTop;
  this.error_window.style.visibility = "visible";
  JAM.call(AJS.setTop, AJS, [this.error_window, abs_pos.y + 20]);
  JAM.call(AJS.setLeft, AJS, [this.error_window, abs_pos.x]);
  var table$$1 = JAM.call(AJS.TABLE, AJS, [{"class":"googie_list"}]);
  table$$1.googie_action_btn = "1";
  var list$$11 = AJS.TBODY();
  var changed = false;
  if (this.custom_menu_builder != []) {
    var k$$4 = 0;
    var v397 = k$$4 < this.custom_menu_builder.length;
    for (;v397;) {
      var v395 = this.custom_menu_builder;
      introspect(JAM.policy.p1) {
        var eb = v395[k$$4]
      }
      var v1217 = this.results;
      introspect(JAM.policy.p1) {
        var v959 = v1217[id$$4]
      }
      if (JAM.call(JAM.get(eb, 0, JAM.policy.p1), eb, [v959])) {
        changed = JAM.call(JAM.get(eb, 1, JAM.policy.p1), eb, [this, list$$11, elm$$43]);
        break;
      }
      k$$4 = k$$4 + 1;
      v397 = k$$4 < this.custom_menu_builder.length;
    }
  }
  if (!changed) {
    var v961 = this.results;
    introspect(JAM.policy.p1) {
      var v399 = v961[id$$4]
    }
    var suggestions = v399["suggestions"];
    var v1219 = this.results;
    introspect(JAM.policy.p1) {
      var v962 = v1219[id$$4]
    }
    var offset$$10 = v962["attrs"]["o"];
    var v1220 = this.results;
    introspect(JAM.policy.p1) {
      var v963 = v1220[id$$4]
    }
    var len = v963["attrs"]["l"];
    if (suggestions.length == 0) {
      var row = AJS.TR();
      var item$$1 = JAM.call(AJS.TD, AJS, [{"style":"cursor: default;"}]);
      var dummy = AJS.SPAN();
      JAM.set(dummy, "innerHTML", this.lang_no_suggestions);
      JAM.call(AJS.ACN, AJS, [item$$1, JAM.call(AJS.TN, AJS, [dummy.innerHTML])]);
      item$$1.googie_action_btn = "1";
      JAM.call(row.appendChild, row, [item$$1]);
      JAM.call(list$$11.appendChild, list$$11, [row]);
    }
    i = 0;
    var v407 = i < suggestions.length;
    for (;v407;) {
      row = AJS.TR();
      item$$1 = AJS.TD();
      dummy = AJS.SPAN();
      JAM.set(dummy, "innerHTML", JAM.get(suggestions, i, JAM.policy.p1));
      var tre = JAM.call(AJS.TN, AJS, [dummy.innerHTML]);
      JAM.call(item$$1.appendChild, item$$1, [tre]);
      var fn$$17 = v193;
      JAM.call(AJS.AEV, AJS, [item$$1, "click", JAM.call(AJS.$b, AJS, [fn$$17, this])]);
      var mytxfn1 = GoogieSpell.item_onmouseover;
      JAM.call(AJS.AEV, AJS, [item$$1, "mouseover", mytxfn1]);
      var mytxfn2 = GoogieSpell.item_onmouseout;
      JAM.call(AJS.AEV, AJS, [item$$1, "mouseout", mytxfn2]);
      JAM.call(row.appendChild, row, [item$$1]);
      JAM.call(list$$11.appendChild, list$$11, [row]);
      i = i + 1;
      v407 = i < suggestions.length;
    }
    var v968 = elm$$43.is_changed;
    if (v968) {
      v968 = elm$$43.innerHTML != elm$$43.old_value;
    }
    if (v968) {
      var old_value$$3 = elm$$43.old_value;
      var revert_row = AJS.TR();
      var revert = AJS.TD();
      mytxfn1 = GoogieSpell.item_onmouseover;
      JAM.call(AJS.AEV, AJS, [revert, "mouseover", mytxfn1]);
      mytxfn2 = GoogieSpell.item_onmouseout;
      JAM.call(AJS.AEV, AJS, [revert, "mouseout", mytxfn2]);
      var rev_span = JAM.call(AJS.SPAN, AJS, [{"class":"googie_list_revert"}]);
      JAM.set(rev_span, "innerHTML", this.lang_revert + " " + old_value$$3);
      JAM.call(revert.appendChild, revert, [rev_span]);
      fn$$17 = v194;
      JAM.call(AJS.AEV, AJS, [revert, "click", JAM.call(AJS.$b, AJS, [fn$$17, this])]);
      JAM.call(revert_row.appendChild, revert_row, [revert]);
      JAM.call(list$$11.appendChild, list$$11, [revert_row]);
    }
    var edit_row = AJS.TR();
    var edit = JAM.call(AJS.TD, AJS, [{"style":"cursor: default"}]);
    var edit_input = JAM.call(AJS.INPUT, AJS, [{"style":"width: 120px; margin:0; padding:0", "value":elm$$43.innerHTML}]);
    edit_input.googie_action_btn = "1";
    var onsub = v195;
    onsub = JAM.call(AJS.$b, AJS, [onsub, this]);
    var ok_pic = JAM.call(AJS.IMG, AJS, [{"src":this.img_dir + "ok.gif", "style":"width: 32px; height: 16px; margin-left: 2px; margin-right: 2px; cursor: pointer;"}]);
    var edit_form = JAM.call(AJS.FORM, AJS, [{"style":"margin: 0; padding: 0; cursor: default;"}, edit_input, ok_pic]);
    edit_form.googie_action_btn = "1";
    edit.googie_action_btn = "1";
    JAM.call(AJS.AEV, AJS, [edit_form, "submit", onsub]);
    JAM.call(AJS.AEV, AJS, [ok_pic, "click", onsub]);
    JAM.call(edit.appendChild, edit, [edit_form]);
    JAM.call(edit_row.appendChild, edit_row, [edit]);
    JAM.call(list$$11.appendChild, list$$11, [edit_row]);
    if (this.extra_menu_items.length > 0) {
      JAM.call(AJS.ACN, AJS, [list$$11, this.createListSeparator()]);
    }
    var loop = v197;
    JAM.call(loop, null, [0]);
    loop = null;
    if (this.use_close_btn) {
      JAM.call(AJS.ACN, AJS, [list$$11, JAM.call(this.createCloseButton, this, [this.hideErrorWindow])]);
    }
  }
  JAM.call(table$$1.appendChild, table$$1, [list$$11]);
  var v421 = this.error_window;
  JAM.call(v421.appendChild, v421, [table$$1]);
  var v974 = AJS.isIe();
  if (v974) {
    v974 = !this.error_window_iframe;
  }
  if (v974) {
    var iframe = JAM.call(AJS.IFRAME, AJS, [{"style":"position: absolute; z-index: 0;"}]);
    JAM.call(AJS.ACN, AJS, [AJS.getBody(), iframe]);
    this.error_window_iframe = iframe;
  }
  if (AJS.isIe()) {
    iframe = this.error_window_iframe;
    JAM.call(AJS.setTop, AJS, [iframe, this.error_window.offsetTop]);
    JAM.call(AJS.setLeft, AJS, [iframe, this.error_window.offsetLeft]);
    JAM.call(AJS.setWidth, AJS, [iframe, this.error_window.offsetWidth]);
    JAM.call(AJS.setHeight, AJS, [iframe, this.error_window.offsetHeight]);
    iframe.style.visibility = "visible";
  }
  var link = JAM.call(this.createFocusLink, this, ["link"]);
  var a1 = JAM.call(AJS.TD, AJS, [{"style":"text-align: right; font-size: 1px; height: 1px; margin: 0; padding: 0;"}, link]);
  var a2 = JAM.call(AJS.TR, AJS, [a1]);
  JAM.call(list$$11.appendChild, list$$11, [a2]);
  link.focus();
  return;
}
function v192(id$$3, elm$$42, l_elm, rm_pre_space) {
  var old_value$$2 = elm$$42.innerHTML;
  var new_value$$1 = l_elm.innerHTML;
  var v1226 = this.results;
  introspect(JAM.policy.p1) {
    var v979 = v1226[id$$3]
  }
  var offset$$9 = v979["attrs"]["o"];
  if (rm_pre_space) {
    var pre_length = elm$$42.previousSibling.innerHTML;
    var v434 = elm$$42.previousSibling;
    var v1378 = pre_length.slice(0, pre_length.length - 1);
    JAM.set(v434, "innerHTML", v1378);
    old_value$$2 = " " + old_value$$2;
    offset$$9 = offset$$9 - 1;
  }
  this.hideErrorWindow();
  JAM.call(this.updateOrginalText, this, [offset$$9, old_value$$2, new_value$$1, id$$3]);
  JAM.set(elm$$42, "innerHTML", new_value$$1);
  elm$$42.style.color = "green";
  elm$$42.is_corrected = true;
  var v1228 = this.results;
  introspect(JAM.policy.p1) {
    var v981 = v1228[id$$3]
  }
  v981["attrs"]["l"] = new_value$$1.length;
  if (!JAM.call(AJS.isDefined, AJS, [elm$$42.old_value])) {
    JAM.call(this.saveOldValue, this, [elm$$42, old_value$$2]);
  }
  this.errorFixed();
  return;
}
function v191() {
  var e_col = JAM.call(AJS.TD, AJS, [" "]);
  e_col.googie_action_btn = "1";
  e_col.style.cursor = "default";
  e_col.style.fontSize = "3px";
  e_col.style.borderTop = "1px solid #ccc";
  e_col.style.paddingTop = "3px";
  return JAM.call(AJS.TR, AJS, [e_col]);
}
function v190(elm$$41, old_value$$1) {
  elm$$41.is_changed = true;
  elm$$41.old_value = old_value$$1;
  return;
}
function v189(offset$$8, old_value, new_value, id$$2) {
  var part_1 = this.orginal_text.substring(0, offset$$8);
  var part_2 = this.orginal_text.substring(offset$$8 + old_value.length);
  this.orginal_text = part_1 + new_value + part_2;
  JAM.call(this.setValue, this, [this.text_area, this.orginal_text]);
  var add_2_offset = new_value.length - old_value.length;
  var j$$3 = 0;
  var v452 = j$$3 < this.results.length;
  for (;v452;) {
    var v985 = j$$3 != id$$2;
    if (v985) {
      v985 = j$$3 > id$$2;
    }
    if (v985) {
      var v1231 = this.results;
      introspect(JAM.policy.p1) {
        var v986 = v1231[j$$3]
      }
      var v450 = v986["attrs"];
      v450["o"] = v450["o"] + add_2_offset;
    }
    j$$3 = j$$3 + 1;
    v452 = j$$3 < this.results.length;
  }
  return;
}
function v188() {
  try {
    this.error_window.style.visibility = "hidden";
    if (this.error_window_iframe) {
      this.error_window_iframe.style.visibility = "hidden";
    }
  } catch (e$$20) {
  }
  return;
}
function v187() {
  var v456 = this.error_window != null;
  if (v456) {
    v456 = this.error_window.style.visibility == "visible";
  }
  return v456;
}
function v186() {
  var v1379 = AJS.DIV();
  this.error_window = v1379;
  this.error_window.className = "googie_window";
  this.error_window.googie_action_btn = "1";
  return;
}
function v185() {
  this.cnt_errors = this.cnt_errors + 1;
  return;
}
function v184() {
  this.cnt_errors_fixed = this.cnt_errors_fixed + 1;
  if (this.all_errors_fixed_observer) {
    if (this.cnt_errors_fixed == this.cnt_errors) {
      this.hideErrorWindow();
      this.all_errors_fixed_observer();
    }
  }
  return;
}
function v183(r_text$$1) {
  var re_split_attr_c = /\w+="(\d+|true)"/g;
  var re_split_text = /\t/g;
  var matched_c = r_text$$1.match(/<c[^>]*>[^<]*<\/c>/g);
  var results = new Array;
  if (matched_c == null) {
    return results;
  }
  var i$$18 = 0;
  var v476 = i$$18 < matched_c.length;
  for (;v476;) {
    var item = new Array;
    this.errorFound();
    var v1380 = new Array;
    item["attrs"] = v1380;
    introspect(JAM.policy.p1) {
      var v462 = matched_c[i$$18]
    }
    var split_c = v462.match(re_split_attr_c);
    var j$$2 = 0;
    var v470 = j$$2 < split_c.length;
    for (;v470;) {
      introspect(JAM.policy.p1) {
        var v463 = split_c[j$$2]
      }
      var c_attr = v463.split(/=/);
      introspect(JAM.policy.p1) {
        var v464 = c_attr[1]
      }
      var val$$5 = v464.replace(/"/g, "");
      if (val$$5 != "true") {
        var v465 = item["attrs"];
        introspect(JAM.policy.p1) {
          var v466 = c_attr[0]
        }
        var v1381 = parseInt(val$$5);
        JAM.set(v465, v466, v1381);
      } else {
        var v467 = item["attrs"];
        introspect(JAM.policy.p1) {
          var v468 = c_attr[0]
        }
        JAM.set(v467, v468, val$$5);
      }
      j$$2 = j$$2 + 1;
      v470 = j$$2 < split_c.length;
    }
    var v1382 = new Array;
    item["suggestions"] = v1382;
    introspect(JAM.policy.p1) {
      var v471 = matched_c[i$$18]
    }
    var only_text = v471.replace(/<[^>]*>/g, "");
    var split_t = only_text.split(re_split_text);
    var k$$3 = 0;
    var v475 = k$$3 < split_t.length;
    for (;v475;) {
      introspect(JAM.policy.p1) {
        var v1000 = split_t[k$$3]
      }
      if (v1000 != "") {
        var v472 = item["suggestions"];
        introspect(JAM.policy.p1) {
          var v473 = split_t[k$$3]
        }
        v472.push(v473);
      }
      k$$3 = k$$3 + 1;
      v475 = k$$3 < split_t.length;
    }
    results.push(item);
    i$$18 = i$$18 + 1;
    v476 = i$$18 < matched_c.length;
  }
  return results;
}
function v182(ignore) {
  function reqfailed(res_txt$$1, req$$7) {
    if (me$$2.custom_ajax_error) {
      JAM.call(me$$2.custom_ajax_error, me$$2, [req$$7]);
    } else {
      alert("An error was encountered on the server. Please try again later.");
    }
    if (me$$2.main_controller) {
      JAM.call(AJS.removeElement, AJS, [me$$2.spell_span]);
      me$$2.removeIndicator();
    }
    me$$2.checkSpellingState();
    return;
  }
  function reqdone(res_txt) {
    var r_text = res_txt;
    var v480 = me$$2;
    var v1383 = JAM.call(me$$2.parseResult, me$$2, [r_text]);
    v480.results = v1383;
    if (r_text.match(/<c.*>/) != null) {
      me$$2.showErrorsInIframe();
      me$$2.resumeEditingState();
    } else {
      if (!me$$2.custom_no_spelling_error) {
        me$$2.flashNoSpellingErrorState();
      } else {
        JAM.call(me$$2.custom_no_spelling_error, me$$2, [me$$2]);
      }
    }
    me$$2.removeIndicator();
    return;
  }
  var me$$2 = this;
  this.cnt_errors_fixed = 0;
  this.cnt_errors = 0;
  JAM.call(this.setStateChanged, this, ["checking_spell"]);
  if (this.main_controller) {
    JAM.call(this.appendIndicator, this, [this.spell_span]);
  }
  this.error_links = [];
  this.ta_scroll_top = this.text_area.scrollTop;
  try {
    this.hideLangWindow();
  } catch (e$$19) {
  }
  this.ignore = ignore;
  var v1005 = JAM.call(this.getValue, this, [this.text_area]) == "";
  if (!v1005) {
    v1005 = ignore;
  }
  if (v1005) {
    if (!me$$2.custom_no_spelling_error) {
      me$$2.flashNoSpellingErrorState();
    } else {
      JAM.call(me$$2.custom_no_spelling_error, me$$2, [me$$2]);
    }
    me$$2.removeIndicator();
    return;
  }
  JAM.call(this.createEditLayer, this, [this.text_area.offsetWidth, this.text_area.offsetHeight]);
  this.createErrorWindow();
  var v490 = AJS.getBody();
  JAM.call(v490.appendChild, v490, [this.error_window]);
  if (this.main_controller) {
    JAM.set(this.spell_span, "onclick", null);
  }
  var v1384 = JAM.call(this.getValue, this, [this.text_area]);
  this.orginal_text = v1384;
  var d$$3 = JAM.call(AJS.getRequest, AJS, [this.getGoogleUrl()]);
  JAM.call(d$$3.addCallback, d$$3, [reqdone]);
  reqdone = null;
  JAM.call(d$$3.addErrback, d$$3, [reqfailed]);
  reqfailed = null;
  var req_text = JAM.call(GoogieSpell.escapeSepcial, GoogieSpell, [this.orginal_text]);
  JAM.call(d$$3.sendReq, d$$3, [JAM.call(GoogieSpell.createXMLReq, GoogieSpell, [req_text])]);
  return;
}
function v181(text$$9) {
  return'<?xml version="1.0" encoding="utf-8" ?><spellrequest textalreadyclipped="0" ignoredups="0" ignoredigits="1" ignoreallcaps="1"><text>' + text$$9 + "</text></spellrequest>";
}
function v180(val$$4) {
  return val$$4.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function v179() {
  return this.server_url + GOOGIE_CUR_LANG;
}
function v178(bool$$1) {
  this.report_state_change = bool$$1;
  return;
}
function v177(current_state) {
  this.state = current_state;
  var v1010 = this.spelling_state_observer != null;
  if (v1010) {
    v1010 = this.report_state_change;
  }
  if (v1010) {
    JAM.call(this.spelling_state_observer, this, [current_state, this]);
  }
  return;
}
function v176(ta$$1, value$$28) {
  ta$$1.value = value$$28;
  return;
}
function v175(ta) {
  return ta.value;
}
function v174() {
  try {
    this.focus_link_b.focus();
    this.focus_link_t.focus();
    return true;
  } catch (e$$18) {
    return false;
  }
  return;
}
function v173(eval$$1, builder) {
  this.custom_menu_builder.push([eval$$1, builder]);
  return;
}
function v172(name$$33, call_back_fn, checker) {
  this.extra_menu_items.push([name$$33, call_back_fn, checker]);
  return;
}
function v171() {
  this.use_close_btn = false;
  return;
}
function v170(bool) {
  this.decoration = bool;
  return;
}
function v169(width$$9, height$$8) {
  this.force_width = width$$9;
  this.force_height = height$$8;
  return;
}
function v168(lang_dict) {
  this.lang_to_word = lang_dict;
  var v1385 = JAM.call(AJS.keys, AJS, [lang_dict]);
  this.langlist_codes = v1385;
  return;
}
function v167(elm$$40) {
  var v1386 = JAM.call(AJS.$, AJS, [elm$$40]);
  this.spell_container = v1386;
  return;
}
function v166(id$$1) {
  if (typeof id$$1 == "string") {
    var v1387 = JAM.call(AJS.$, AJS, [id$$1]);
    this.text_area = v1387;
  } else {
    this.text_area = id$$1;
  }
  var r_width;
  var r_height;
  if (this.text_area != null) {
    var v1013 = !JAM.call(AJS.isDefined, AJS, [this.spell_container]);
    if (v1013) {
      v1013 = this.decoration;
    }
    if (v1013) {
      var table = AJS.TABLE();
      var tbody = AJS.TBODY();
      var tr = AJS.TR();
      if (JAM.call(AJS.isDefined, AJS, [this.force_width])) {
        r_width = this.force_width;
      } else {
        r_width = this.text_area.offsetWidth + "px";
      }
      if (JAM.call(AJS.isDefined, AJS, [this.force_height])) {
        r_height = this.force_height;
      } else {
        r_height = "";
      }
      var spell_container = AJS.TD();
      this.spell_container = spell_container;
      JAM.call(tr.appendChild, tr, [spell_container]);
      JAM.call(tbody.appendChild, tbody, [tr]);
      JAM.call(table.appendChild, table, [tbody]);
      JAM.call(AJS.insertBefore, AJS, [table, this.text_area]);
      JAM.call(AJS.setHeight, AJS, [table, spell_container, r_height]);
      JAM.call(AJS.setWidth, AJS, [table, spell_container, r_width]);
      spell_container.style.textAlign = "right";
    }
    this.checkSpellingState();
  } else {
    if (this.report_ta_not_found) {
      alert("Text area not found");
    }
  }
  return;
}
function v165(data$$21) {
  var req$$6 = this.req;
  var http_method = this.http_method;
  var http_url = this.http_url;
  if (http_method == "POST") {
    req$$6.open(http_method, http_url, true);
    var v517 = req$$6;
    var v1388 = JAM.call(AJS.$b, AJS, [this._onreadystatechange, this]);
    JAM.set(v517, "onreadystatechange", v1388);
    req$$6.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    if (JAM.call(AJS.isObject, AJS, [data$$21])) {
      req$$6.send(JAM.call(AJS.encodeArguments, AJS, [data$$21]));
    } else {
      if (JAM.call(AJS.isDefined, AJS, [data$$21])) {
        req$$6.send(data$$21);
      } else {
        req$$6.send("");
      }
    }
  } else {
    req$$6.open("GET", http_url, true);
    var v521 = req$$6;
    var v1389 = JAM.call(AJS.$b, AJS, [this._onreadystatechange, this]);
    JAM.set(v521, "onreadystatechange", v1389);
    req$$6.send(null);
  }
  return;
}
function v164() {
  var req$$5 = this.req;
  var d$$2 = this;
  if (req$$5.readyState == 4) {
    var status = "";
    try {
      status = req$$5.status;
    } catch (e$$16) {
    }
    var v1239 = status == 200;
    if (!v1239) {
      v1239 = status == 304;
    }
    var v1020 = v1239;
    if (!v1020) {
      v1020 = req$$5.responseText == null;
    }
    if (v1020) {
      this.callback();
    } else {
      this.errback();
    }
  }
  return;
}
function v163(fn1, fn2) {
  JAM.call(this.addCallback, this, [fn1]);
  JAM.call(this.addErrback, this, [fn2]);
  return;
}
function v162() {
  this.req.abort();
  return;
}
function v161(fn$$15) {
  this.callbacks.unshift(fn$$15);
  return;
}
function v160(fn$$14) {
  this.errbacks.unshift(fn$$14);
  return;
}
function v159() {
  if (this.errbacks.length == 0) {
    if (AJS.ajaxErrorHandler) {
      JAM.call(AJS.ajaxErrorHandler, AJS, [req.responseText, req]);
    } else {
      var txt$$1 = this.req.responseText.substring(0, 200);
      var v1023 = JAM.call(AJS.strip, AJS, [txt$$1]);
      if (v1023) {
        v1023 = txt$$1.indexOf("<html") == -1;
      }
      if (v1023) {
        alert("Error encountered:\n" + txt$$1);
      }
    }
  }
  if (AJS.generalErrorback) {
    var result$$1 = JAM.call(AJS.generalErrorback, AJS, [this.req]);
    if (!result$$1) {
      return;
    }
  }
  JAM.call(this.excCallbackSeq, this, [this.req, this.errbacks]);
  return;
}
function v158() {
  JAM.call(this.excCallbackSeq, this, [this.req, this.callbacks]);
  return;
}
function v157(req$$4, list$$10) {
  var data$$20 = req$$4.responseText;
  if (AJS.generalCallback) {
    data$$20 = JAM.call(AJS.generalCallback, AJS, [req$$4, list$$10]);
    if (!data$$20) {
      return;
    }
  }
  var v544 = list$$10.length > 0;
  for (;v544;) {
    var fn$$13 = list$$10.pop();
    var new_data = JAM.call(fn$$13, null, [data$$20, req$$4]);
    if (new_data) {
      data$$20 = new_data;
    } else {
      if (new_data == false) {
        break;
      }
    }
    v544 = list$$10.length > 0;
  }
  return;
}
function v156(req$$3, method$$2, url$$4) {
  this.callbacks = [];
  this.errbacks = [];
  this.req = req$$3;
  this.http_method = method$$2;
  this.http_url = url$$4;
  return;
}
function v155(cur$$1, prev$$1) {
  function v154() {
    this.parent = prev$$1;
    return JAM.call(cur$$1.apply, cur$$1, [this, arguments]);
  }
  return v154;
}
function v153(members$$2) {
  JAM.call(AJS.update, AJS, [this.prototype, members$$2]);
  return;
}
function v152(members$$1) {
  var parent$$2 = JAM.new(this, ["no_init"]);
  for (k in members$$1) {
    introspect(JAM.policy.p1) {
      var prev = parent$$2[k]
    }
    introspect(JAM.policy.p1) {
      var cur = members$$1[k]
    }
    var v1244 = prev;
    if (v1244) {
      v1244 = prev != cur;
    }
    var v1026 = v1244;
    if (v1026) {
      v1026 = typeof cur == "function";
    }
    if (v1026) {
      cur = JAM.call(this._parentize, this, [cur, prev]);
    }
    JAM.set(parent$$2, k, cur);
  }
  return JAM.new(AJS.Class, [parent$$2]);
}
function v151(members) {
  function fn$$12() {
    introspect(JAM.policy.p1) {
      var v1027 = arguments[0]
    }
    if (v1027 != "no_init") {
      var v548 = this.init;
      return JAM.call(v548.apply, v548, [this, arguments]);
    }
    return;
  }
  fn$$12.prototype = members;
  JAM.call(AJS.update, AJS, [fn$$12, AJS.Class.prototype]);
  return fn$$12;
}
function v150(str$$9, limit, delim$$1) {
  if (str$$9.length > limit) {
    return str$$9.substring(0, limit) + (delim$$1 || "...");
  }
  return str$$9;
}
function v149(str$$8) {
  return str$$8.replace(/^\s+/, "").replace(/\s+$/g, "");
}
function v148(export_scope, fn$$11) {
  JAM.call(fn$$11.apply, fn$$11, [export_scope, []]);
  return;
}
function v147(o$$7) {
  try {
    if (window._firebug) {
      var v555 = window._firebug;
      JAM.call(v555.log, v555, [o$$7]);
    } else {
      if (window.console) {
        JAM.call(console.log, console, [o$$7]);
      }
    }
  } catch (e$$15) {
  }
  return;
}
function v146(scope$$3) {
  scope$$3 = scope$$3 || window;
  for (e in AJS) {
    if (e != "addEventListener") {
      JAM.set(scope$$3, e, JAM.get(AJS, e, JAM.policy.p1));
    }
  }
  return;
}
function v145(o$$6) {
  var str_repr = String(o$$6);
  return str_repr.indexOf(" Object") != -1;
}
function v144(obj$$22) {
  return typeof obj$$22 == "function";
}
function v143(obj$$21) {
  return typeof obj$$21 == "object";
}
function v142(obj$$20) {
  return typeof obj$$20 == "number";
}
function v141(obj$$19) {
  return typeof obj$$19 == "string";
}
function v140(obj$$18) {
  try {
    return obj$$18 instanceof Array;
  } catch (e$$14) {
    return false;
  }
  return;
}
function v139(o$$5) {
  var v564 = o$$5 != "undefined";
  if (v564) {
    v564 = o$$5 != null;
  }
  return v564;
}
function v138(str$$7) {
  var v1246 = JAM.call(AJS.isDefined, AJS, [str$$7]);
  if (v1246) {
    v1246 = str$$7.toString();
  }
  var v1030 = v1246;
  if (!v1030) {
    v1030 = "";
  }
  var result = decodeURIComponent(v1030);
  return result.replace(/\+/g, " ");
}
function v137(str$$6) {
  var v1248 = JAM.call(AJS.isDefined, AJS, [str$$6]);
  if (v1248) {
    v1248 = str$$6.toString();
  }
  var v1031 = v1248;
  if (!v1031) {
    v1031 = "";
  }
  return encodeURIComponent(v1031);
}
function v136(obj$$17) {
  var rval$$1 = [];
  var prop$$6;
  for (prop$$6 in obj$$17) {
    introspect(JAM.policy.p1) {
      var v567 = obj$$17[prop$$6]
    }
    rval$$1.push(v567);
  }
  return rval$$1;
}
function v135(obj$$16) {
  var rval = [];
  var prop$$5;
  for (prop$$5 in obj$$16) {
    rval.push(prop$$5);
  }
  return rval;
}
function v134(name$$32, fn$$10, interval) {
  var v568 = AJS._reccruing_tos;
  introspect(JAM.policy.p1) {
    var current = v568[name$$32]
  }
  if (current) {
    clearTimeout(current);
  }
  var v569 = AJS._reccruing_tos;
  var v570 = name$$32;
  var v1390 = JAM.call(setTimeout, null, [fn$$10, interval]);
  JAM.set(v569, v570, v1390);
  return;
}
function v133(fn$$9, extra_args$$1) {
  function v132() {
    try {
      var args$$14 = JAM.call(AJS.$FA, AJS, [arguments]).concat(extra_args$$1);
      return JAM.call(fn$$9.apply, fn$$9, [scope$$2, args$$14]);
    } catch (e$$13) {
    }
    return;
  }
  extra_args$$1 = JAM.call(AJS.$A, AJS, [extra_args$$1]);
  var v572 = fn$$9._cscope;
  if (!v572) {
    v572 = window;
  }
  var scope$$2 = v572;
  return v132;
}
function v131(elm$$38, type$$30, fn$$8) {
  function r_fn() {
    JAM.call(AJS.removeEventListener, AJS, [elm$$38, type$$30, r_fn]);
    JAM.call(fn$$8, null, [arguments]);
    return;
  }
  return r_fn;
}
function v130(e$$12) {
  if (AJS.isIe()) {
    window.event.returnValue = false;
  } else {
    e$$12.preventDefault();
  }
  return;
}
function v129(self$$1) {
  var k$$2;
  for (k$$2 in self$$1) {
    introspect(JAM.policy.p1) {
      var func$$4 = self$$1[k$$2]
    }
    if (typeof func$$4 == "function") {
      var v575 = self$$1;
      var v576 = k$$2;
      var v1391 = JAM.call(AJS.$b, AJS, [func$$4, self$$1]);
      JAM.set(v575, v576, v1391);
    }
  }
  return;
}
function v128(fn$$7, scope$$1, extra_args) {
  fn$$7._cscope = scope$$1;
  return JAM.call(AJS._getRealScope, AJS, [fn$$7, extra_args]);
}
function v127(elms$$4, type$$29, handler$$7) {
  function v126(elm$$37) {
    var v1034 = elm$$37.events;
    if (v1034) {
      var v1250 = elm$$37.events;
      introspect(JAM.policy.p1) {
        v1034 = v1250[type$$29];
      }
    }
    if (v1034) {
      var v1035 = elm$$37.events;
      introspect(JAM.policy.p1) {
        var v578 = v1035[type$$29]
      }
      var v579 = handler$$7.$f_guid;
      introspect(JAM.policy.p1) {
        delete v578[v579];
      }
    }
    return;
  }
  elms$$4 = JAM.call(AJS.$A, AJS, [elms$$4]);
  map(elms$$4, v126);
  return;
}
function v125(event$$1) {
  function v124(handler$$6) {
    var v1036 = me$$1.events;
    var v1037 = event$$1.type;
    introspect(JAM.policy.p1) {
      var v581 = v1036[v1037]
    }
    var v582 = handler$$6.$f_guid;
    introspect(JAM.policy.p1) {
      delete v581[v582];
    }
    return;
  }
  var me$$1 = this;
  var v583 = event$$1;
  if (!v583) {
    v583 = window.event;
  }
  event$$1 = v583;
  if (!event$$1) {
    return;
  }
  var v1039 = !event$$1.ctrl;
  if (v1039) {
    v1039 = event$$1.type.indexOf("key") != -1;
  }
  if (v1039) {
    JAM.call(AJS.setEventKey, AJS, [event$$1]);
  }
  var v586 = this.events;
  var v587 = event$$1.type;
  introspect(JAM.policy.p1) {
    var handlers$$1 = v586[v587]
  }
  var handlers_to_delete = [];
  var res$$1 = true;
  var i$$17;
  for (i$$17 in handlers$$1) {
    introspect(JAM.policy.p1) {
      var handler$$5 = this.$$handleEvent = handlers$$1[i$$17]
    }
    if (handler$$5 == AJS.handleEvent) {
      continue;
    }
    res$$1 = JAM.call(handler$$5, null, [event$$1]);
    if (handler$$5.listen_once) {
      handlers_to_delete.push(handler$$5);
    }
  }
  if (handlers_to_delete.length > 0) {
    JAM.call(AJS.map, AJS, [handlers_to_delete, v124]);
  }
  return res$$1;
}
function v123(elms$$3, types, handler$$4, listen_once$$1) {
  function v122(elm$$36) {
    function v121(type$$28) {
      var v591 = elm$$36.events;
      introspect(JAM.policy.p1) {
        var handlers = v591[type$$28]
      }
      var v1042 = elm$$36 == window;
      if (v1042) {
        v1042 = type$$28 == "load";
      }
      if (v1042) {
        AJS.ready_list.push(handler$$4);
      } else {
        if (type$$28 == "lazy_load") {
          type$$28 = "load";
        }
        if (!handlers) {
          handlers = JAM.set(elm$$36.events, type$$28, {});
          var v1043 = "on" + type$$28;
          introspect(JAM.policy.p1) {
            var v596 = elm$$36[v1043]
          }
          if (v596) {
            var v595 = "on" + type$$28;
            introspect(JAM.policy.p1) {
              handlers[0] = elm$$36[v595];
            }
          }
        }
        if (!elm$$36._wipe_guid) {
          elm$$36._wipe_guid = AJS._wipe_guid;
          AJS._wipe_guid = AJS._wipe_guid + 1;
        }
        JAM.set(handlers, handler$$4.$f_guid, handler$$4);
        elm$$36.addEventListener(type$$28, AJS.handleEvent, false);
      }
      return;
    }
    if (listen_once$$1) {
      handler$$4.listen_once = true;
    }
    if (!handler$$4.$f_guid) {
      handler$$4.$f_guid = AJS._f_guid;
      AJS._f_guid = AJS._f_guid + 1;
    }
    if (!elm$$36.events) {
      elm$$36.events = {};
    }
    JAM.call(AJS.map, AJS, [types, v121]);
    elm$$36 = null;
    return;
  }
  elms$$3 = JAM.call(AJS.$A, AJS, [elms$$3]);
  types = JAM.call(AJS.$A, AJS, [types]);
  JAM.call(AJS.map, AJS, [elms$$3, v122]);
  return;
}
function v120(fn$$5) {
  function v119(fn$$6) {
    JAM.call(fn$$6.call, fn$$6, [window]);
    return;
  }
  if (AJS.is_ready) {
    return;
  }
  AJS.is_ready = true;
  JAM.call(AJS.map, AJS, [AJS.ready_list, v119]);
  AJS.ready_list = [];
  return;
}
function v118() {
  function v117() {
    if (AJS.is_ready) {
      return;
    }
    try {
      var v607 = document.documentElement;
      JAM.call(v607.doScroll, v607, ["left"]);
    } catch (error$$1) {
      JAM.call(setTimeout, null, [arguments.callee, 0]);
      return;
    }
    AJS.ready();
    return;
  }
  function v116() {
    if (document.readyState === "complete") {
      JAM.call(document.detachEvent, document, ["onreadystatechange", arguments.callee]);
      AJS.ready();
    }
    return;
  }
  function v115() {
    JAM.call(document.removeEventListener, document, ["DOMContentLoaded", arguments.callee, false]);
    AJS.ready();
    return;
  }
  if (AJS.ready_bound) {
    return;
  }
  AJS.ready_bound = true;
  if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", v115, false);
  } else {
    if (document.attachEvent) {
      JAM.call(document.attachEvent, document, ["onreadystatechange", v116]);
      var v1050 = document.documentElement.doScroll;
      if (v1050) {
        v1050 = window == window.top;
      }
      if (v1050) {
        v117();
      }
    }
  }
  JAM.call(AJS.AEV, AJS, [window, "load", AJS.ready]);
  return;
}
function v114(elms$$2, type$$27, handler$$3, listen_once) {
  function v113(elm$$35) {
    if (elm$$35.events) {
      JAM.set(elm$$35.events, type$$27, {});
    }
    return;
  }
  elms$$2 = JAM.call(AJS.$A, AJS, [elms$$2]);
  JAM.call(AJS.map, AJS, [elms$$2, v113]);
  return JAM.call(AJS.AEV, AJS, [elms$$2, type$$27, handler$$3, listen_once]);
}
function v112(e$$11) {
  if (!e$$11) {
    e$$11 = window.event;
  }
  var v620;
  if (e$$11.keyCode) {
    v620 = e$$11.keyCode;
  } else {
    v620 = e$$11.charCode;
  }
  e$$11.key = v620;
  e$$11.ctrl = e$$11.ctrlKey;
  e$$11.alt = e$$11.altKey;
  e$$11.meta = e$$11.metaKey;
  e$$11.shift = e$$11.shiftKey;
  return;
}
function v111(e$$10) {
  var v1255 = e$$10;
  if (v1255) {
    v1255 = !e$$10.type;
  }
  var v1052 = v1255;
  if (v1052) {
    v1052 = !e$$10.keyCode;
  }
  if (v1052) {
    return e$$10;
  }
  var targ;
  if (!e$$10) {
    e$$10 = window.event;
  }
  if (e$$10.target) {
    targ = e$$10.target;
  } else {
    if (e$$10.srcElement) {
      targ = e$$10.srcElement;
    }
  }
  var v1053 = targ;
  if (v1053) {
    v1053 = targ.nodeType == 3;
  }
  if (v1053) {
    targ = targ.parentNode;
  }
  return targ;
}
function v110(elm1, elm2) {
  function getSign(v$$1) {
    if (v$$1 > 0) {
      return "+";
    } else {
      if (v$$1 < 0) {
        return "-";
      } else {
        return 0;
      }
    }
    return;
  }
  var pos_elm1 = JAM.call(AJS.absolutePosition, AJS, [elm1]);
  var pos_elm2 = JAM.call(AJS.absolutePosition, AJS, [elm2]);
  var top1 = pos_elm1.y;
  var left1 = pos_elm1.x;
  var right1 = left1 + elm1.offsetWidth;
  var bottom1 = top1 + elm1.offsetHeight;
  var top2 = pos_elm2.y;
  var left2 = pos_elm2.x;
  var right2 = left2 + elm2.offsetWidth;
  var bottom2 = top2 + elm2.offsetHeight;
  var v1054 = getSign(top1 - bottom2) != getSign(bottom1 - top2);
  if (v1054) {
    v1054 = getSign(left1 - right2) != getSign(right1 - left2);
  }
  if (v1054) {
    return true;
  }
  return false;
}
function v109(doc) {
  doc = doc || document;
  var win_w;
  var win_h;
  if (self.innerHeight) {
    win_w = self.innerWidth;
    win_h = self.innerHeight;
  } else {
    var v1055 = doc.documentElement;
    if (v1055) {
      v1055 = doc.documentElement.clientHeight;
    }
    if (v1055) {
      win_w = doc.documentElement.clientWidth;
      win_h = doc.documentElement.clientHeight;
    } else {
      if (doc.body) {
        win_w = doc.body.clientWidth;
        win_h = doc.body.clientHeight;
      }
    }
  }
  return{"w":win_w, "h":win_h};
}
function v108(elm$$34) {
  if (!elm$$34) {
    return{x:0, y:0};
  }
  if (elm$$34.scrollLeft) {
    return{x:elm$$34.scrollLeft, y:elm$$34.scrollTop};
  } else {
    if (elm$$34.clientX) {
      return{x:elm$$34.clientX, y:elm$$34.clientY};
    }
  }
  var posObj = {"x":elm$$34.offsetLeft, "y":elm$$34.offsetTop};
  if (elm$$34.offsetParent) {
    var next = elm$$34.offsetParent;
    for (;next;) {
      posObj.x = posObj.x + next.offsetLeft;
      posObj.y = posObj.y + next.offsetTop;
      next = next.offsetParent;
    }
  }
  var v1060 = AJS.isSafari();
  if (v1060) {
    v1060 = elm$$34.style.position == "absolute";
  }
  if (v1060) {
    posObj.x = posObj.x - document.body.offsetLeft;
    posObj.y = posObj.y - document.body.offsetTop;
  }
  return posObj;
}
function v107() {
  var t;
  var v1065 = document.documentElement;
  if (v1065) {
    v1065 = document.documentElement.scrollTop;
  }
  if (v1065) {
    t = document.documentElement.scrollTop;
  } else {
    if (document.body) {
      t = document.body.scrollTop;
    }
  }
  return t;
}
function v106(e$$9) {
  var posx = 0;
  var posy = 0;
  if (!e$$9) {
    e$$9 = window.event;
  }
  var v1066 = e$$9.pageX;
  if (!v1066) {
    v1066 = e$$9.pageY;
  }
  if (v1066) {
    posx = e$$9.pageX;
    posy = e$$9.pageY;
  } else {
    var v1067 = e$$9.clientX;
    if (!v1067) {
      v1067 = e$$9.clientY;
    }
    if (v1067) {
      posx = e$$9.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posy = e$$9.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
  }
  return{x:posx, y:posy};
}
function v105(date$$1) {
  function leadingZero(nr) {
    if (nr < 10) {
      nr = "0" + nr;
    }
    return nr;
  }
  var year$$1 = date$$1.getUTCFullYear();
  var dd = date$$1.getUTCDate();
  var mm = date$$1.getUTCMonth() + 1;
  return'"' + year$$1 + "-" + mm + "-" + dd + "T" + leadingZero(date$$1.getUTCHours()) + ":" + leadingZero(date$$1.getUTCMinutes()) + ":" + leadingZero(date$$1.getUTCSeconds()) + '"';
}
function v104(o$$4) {
  return('"' + o$$4.replace(/(["\\])/g, "\\$1") + '"').replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r");
}
function v103(data$$19) {
  var post_data = [];
  for (k in data$$19) {
    var v1077 = k + "=";
    introspect(JAM.policy.p1) {
      var v1274 = data$$19[k]
    }
    post_data.push(v1077 + JAM.call(AJS.urlencode, AJS, [v1274]));
  }
  return JAM.call(post_data.join, post_data, ["&"]);
}
function v102(html$$2) {
  var script_data = html$$2.match(/<script.*?>((\n|\r|.)*?)<\/script>/g);
  if (script_data != null) {
    var i$$16 = 0;
    var v668 = i$$16 < script_data.length;
    for (;v668;) {
      introspect(JAM.policy.p1) {
        var v667 = script_data[i$$16]
      }
      var script_only = v667.replace(/<script.*?>/g, "");
      script_only = script_only.replace(/<\/script>/g, "");
      if (JAM.isEval(eval)) {
        eval("introspect(JAM.policy.pFull) { " + script_only + " }");
      } else {
        JAM.call(eval, null, [script_only]);
      }
      i$$16 = i$$16 + 1;
      v668 = i$$16 < script_data.length;
    }
  }
  return;
}
function v101(txt) {
  try {
    var v670 = "(" + txt + ")";
    if (JAM.isEval(eval)) {
      return eval("introspect(JAM.policy.pFull) { " + v670 + " }");
    } else {
      return JAM.call(eval, null, [v670]);
    }
  } catch (e$$8) {
    if (JAM.isEval(eval)) {
      return eval("introspect(JAM.policy.pFull) { " + txt + " }");
    } else {
      return JAM.call(eval, null, [txt]);
    }
  }
  return;
}
function v100(url$$3, type$$26, debug) {
  function eval_req(data$$18, req$$2) {
    var text$$8 = req$$2.responseText;
    if (text$$8 == "Error") {
      JAM.call(d$$1.errback, d$$1, [req$$2]);
    } else {
      return JAM.call(AJS.evalTxt, AJS, [text$$8]);
    }
    return;
  }
  var d$$1 = JAM.call(AJS.getRequest, AJS, [url$$3, type$$26]);
  JAM.call(d$$1.addCallback, d$$1, [eval_req]);
  return d$$1;
}
function v99(o$$3) {
  var objtype = typeof o$$3;
  if (objtype == "undefined") {
    return "null";
  } else {
    var v1082 = objtype == "number";
    if (!v1082) {
      v1082 = objtype == "boolean";
    }
    if (v1082) {
      return o$$3 + "";
    } else {
      if (o$$3 === null) {
        return "null";
      }
    }
  }
  if (objtype == "string") {
    return JAM.call(AJS._reprString, AJS, [o$$3]);
  }
  var v1083 = objtype == "object";
  if (v1083) {
    v1083 = o$$3.getFullYear;
  }
  if (v1083) {
    return JAM.call(AJS._reprDate, AJS, [o$$3]);
  }
  var me = arguments.callee;
  var v1084 = objtype != "function";
  if (v1084) {
    v1084 = typeof o$$3.length == "number";
  }
  if (v1084) {
    var res = [];
    var i$$15 = 0;
    var v679 = i$$15 < o$$3.length;
    for (;v679;) {
      introspect(JAM.policy.p1) {
        var v677 = o$$3[i$$15]
      }
      var val$$3 = JAM.call(me, null, [v677]);
      if (typeof val$$3 != "string") {
        val$$3 = "undefined";
      }
      res.push(val$$3);
      i$$15 = i$$15 + 1;
      v679 = i$$15 < o$$3.length;
    }
    return "[" + JAM.call(res.join, res, [","]) + "]";
  }
  if (objtype == "function") {
    return null;
  }
  res = [];
  var k$$1;
  for (k$$1 in o$$3) {
    var useKey;
    if (typeof k$$1 == "number") {
      useKey = '"' + k$$1 + '"';
    } else {
      if (typeof k$$1 == "string") {
        useKey = JAM.call(AJS._reprString, AJS, [k$$1]);
      } else {
        continue;
      }
    }
    introspect(JAM.policy.p1) {
      var v686 = o$$3[k$$1]
    }
    val$$3 = JAM.call(me, null, [v686]);
    if (typeof val$$3 != "string") {
      continue;
    }
    res.push(useKey + ":" + val$$3);
  }
  return "{" + JAM.call(res.join, res, [","]) + "}";
}
function v98(url$$2, method$$1) {
  var req$$1 = AJS.getXMLHttpRequest();
  if (url$$2.match(/^https?:\/\//) == null) {
    if (AJS.BASE_URL != "") {
      if (AJS.BASE_URL.lastIndexOf("/") != AJS.BASE_URL.length - 1) {
        AJS.BASE_URL = AJS.BASE_URL + "/";
      }
      url$$2 = AJS.BASE_URL + url$$2;
    }
  }
  if (!method$$1) {
    method$$1 = "POST";
  }
  return JAM.new(AJSDeferred, [req$$1, method$$1, url$$2]);
}
function v97() {
  function v96() {
    throw "Browser does not support XMLHttpRequest";
  }
  function v95() {
    return new ActiveXObject("Msxml2.XMLHTTP.4.0");
  }
  function v94() {
    return new ActiveXObject("Microsoft.XMLHTTP");
  }
  function v93() {
    return new ActiveXObject("Msxml2.XMLHTTP");
  }
  function v92() {
    return new XMLHttpRequest;
  }
  var try_these = [v92, v93, v94, v95, v96];
  var i$$14 = 0;
  var v695 = i$$14 < try_these.length;
  for (;v695;) {
    introspect(JAM.policy.p1) {
      var func$$3 = try_these[i$$14]
    }
    try {
      return func$$3();
    } catch (e$$7) {
      JAM.call(AJS.log, AJS, [e$$7]);
    }
    i$$14 = i$$14 + 1;
    v695 = i$$14 < try_these.length;
  }
  return;
}
function v91(tmpl, ns, scope) {
  function fn$$4(w$$5, g) {
    g = g.split("|");
    introspect(JAM.policy.p1) {
      var v696 = g[0]
    }
    introspect(JAM.policy.p1) {
      var cnt = ns[v696]
    }
    var i$$13 = 1;
    var v698 = i$$13 < g.length;
    for (;v698;) {
      introspect(JAM.policy.p1) {
        var v697 = g[i$$13]
      }
      cnt = JAM.call(JAM.get(scope, v697, JAM.policy.p1), scope, [cnt]);
      i$$13 = i$$13 + 1;
      v698 = i$$13 < g.length;
    }
    if (cnt == "") {
      return "";
    }
    var v1103 = cnt == 0;
    if (!v1103) {
      v1103 = cnt == -1;
    }
    if (v1103) {
      cnt = cnt + "";
    }
    return cnt || w$$5;
  }
  scope = scope || window;
  return tmpl.replace(/%\(([A-Za-z0-9_|.]*)\)/g, fn$$4);
}
function v90() {
  function v89(args$$13) {
    function v88(src$$2) {
      var pic = new Image;
      pic.src = src$$2;
      return;
    }
    JAM.call(AJS.map, AJS, [args$$13, v88]);
    return;
  }
  JAM.call(AJS.AEV, AJS, [window, "load", JAM.call(AJS.$p, AJS, [v89, arguments])]);
  return;
}
function v87(html$$1, first_child$$1) {
  var d = AJS.DIV();
  JAM.set(d, "innerHTML", html$$1);
  if (first_child$$1) {
    var v702 = d.childNodes;
    introspect(JAM.policy.p1) {
      return v702[0];
    }
  } else {
    return d;
  }
  return;
}
function v86(elm$$33, p$$4) {
  if (p$$4 == 1) {
    elm$$33.style.opacity = 1;
    elm$$33.style.filter = "";
  } else {
    elm$$33.style.opacity = p$$4;
    elm$$33.style.filter = "alpha(opacity=" + p$$4 * 100 + ")";
  }
  return;
}
function v85() {
  function v84(elm$$32) {
    var v708 = elm$$32;
    var v1392 = elm$$32.className.replace(new RegExp("(^|\\s)" + cls$$2, "g"), "");
    v708.className = v1392;
    return;
  }
  var args$$12 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var cls$$2 = args$$12.pop();
  JAM.call(AJS.map, AJS, [args$$12, v84]);
  return;
}
function v83(elm$$31, cls$$1) {
  var v1107 = !elm$$31;
  if (!v1107) {
    v1107 = !elm$$31.className;
  }
  if (v1107) {
    return false;
  }
  var e_cls = elm$$31.className;
  var v710 = e_cls.length > 0;
  if (v710) {
    var v1109 = e_cls == cls$$1;
    if (!v1109) {
      v1109 = (new RegExp("(^|\\s)" + cls$$1 + "(\\s|$)")).test(e_cls);
    }
    v710 = v1109;
  }
  return v710;
}
function v82() {
  function v81(elm$$30) {
    var o$$inline_0 = elm$$30;
    if (!(new RegExp("(^|\\s)" + cls + "(\\s|$)")).test(o$$inline_0.className)) {
      var v1111 = o$$inline_0.className;
      var v1342;
      if (o$$inline_0.className) {
        v1342 = " ";
      } else {
        v1342 = "";
      }
      o$$inline_0.className = v1111 + (v1342 + cls);
    }
    return;
  }
  var args$$11 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var cls = args$$11.pop();
  JAM.call(AJS.map, AJS, [args$$11, v81]);
  return;
}
function v80() {
  function v79(elm$$29) {
    elm$$29.className = c;
    return;
  }
  var args$$10 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var c = args$$10.pop();
  JAM.call(AJS.map, AJS, [args$$10, v79]);
  return;
}
function v78() {
  return JAM.call(AJS.__cssDim, AJS, [arguments, "top"]);
}
function v77() {
  return JAM.call(AJS.__cssDim, AJS, [arguments, "right"]);
}
function v76() {
  return JAM.call(AJS.__cssDim, AJS, [arguments, "left"]);
}
function v75() {
  return JAM.call(AJS.__cssDim, AJS, [arguments, "height"]);
}
function v74() {
  return JAM.call(AJS.__cssDim, AJS, [arguments, "width"]);
}
function v73(args$$9, property$$1) {
  args$$9 = JAM.call(AJS.$FA, AJS, [args$$9]);
  args$$9.splice(args$$9.length - 1, 0, property$$1);
  var v713 = AJS.setStyle;
  JAM.call(v713.apply, v713, [null, args$$9]);
  return;
}
function v72() {
  function v71(elm$$28) {
    if (JAM.call(AJS.isIn, AJS, [property, num_styles])) {
      var v1114 = JAM.call(AJS.isString, AJS, [value$$27]);
      if (v1114) {
        v1114 = value$$27;
      }
      var v714 = v1114;
      if (!v714) {
        v714 = value$$27 + "px";
      }
      value$$27 = v714;
    }
    JAM.set(elm$$28.style, property, value$$27);
    return;
  }
  function v70(elm$$27) {
    function v69(prop$$4) {
      introspect(JAM.policy.p1) {
        var css_dim = value$$27[prop$$4]
      }
      if (JAM.call(AJS.isIn, AJS, [prop$$4, num_styles])) {
        var v1116 = JAM.call(AJS.isString, AJS, [css_dim]);
        if (v1116) {
          v1116 = css_dim;
        }
        var v717 = v1116;
        if (!v717) {
          v717 = css_dim + "px";
        }
        css_dim = v717;
      }
      JAM.set(elm$$27.style, prop$$4, css_dim);
      return;
    }
    JAM.call(AJS.map, AJS, [JAM.call(AJS.keys, AJS, [value$$27]), v69]);
    return;
  }
  var args$$8 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var value$$27 = args$$8.pop();
  var num_styles = ["top", "left", "right", "width", "height"];
  if (JAM.call(AJS.isObject, AJS, [value$$27])) {
    JAM.call(AJS.map, AJS, [args$$8, v70]);
  } else {
    var property = args$$8.pop();
    JAM.call(AJS.map, AJS, [args$$8, v71]);
  }
  return;
}
function v68(elm$$26) {
  return!JAM.call(AJS.isElementHidden, AJS, [elm$$26]);
}
function v67(elm$$25) {
  var v723 = elm$$25.style.display == "none";
  if (!v723) {
    v723 = elm$$25.style.visibility == "hidden";
  }
  return v723;
}
function v66(elm$$24) {
  JAM.call(AJS.setStyle, AJS, [JAM.call(AJS.flattenElmArguments, AJS, [arguments]), "display", "none"]);
  return;
}
function v65() {
  JAM.call(AJS.setStyle, AJS, [JAM.call(AJS.flattenElmArguments, AJS, [arguments]), "display", ""]);
  return;
}
function v64() {
  var args$$7 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var v1121 = args$$7.pop();
  if (v1121) {
    v1121 = "visible";
  }
  var v726 = v1121;
  if (!v726) {
    v726 = "hidden";
  }
  var val$$2 = v726;
  JAM.call(AJS.setStyle, AJS, [args$$7, "visibility", val$$2]);
  return;
}
function v63() {
  function v62(elm$$23) {
    if (elm$$23) {
      JAM.set(elm$$23, "innerHTML", html);
    }
    return;
  }
  var args$$6 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var html = args$$6.pop();
  JAM.call(AJS.map, AJS, [args$$6, v62]);
  introspect(JAM.policy.p1) {
    return args$$6[0];
  }
}
function v61() {
  function v60(text$$7) {
    return document.createTextNode(text$$7);
  }
  function extends_ajs(elm$$22) {
    function v59() {
      var v727 = AJS.createDOM;
      return JAM.call(v727.apply, v727, [null, [elm$$22, arguments]]);
    }
    JAM.set(AJS, elm$$22.toUpperCase(), v59);
    return;
  }
  var elms$$1 = ["ul", "li", "td", "tr", "th", "tbody", "table", "input", "span", "b", "a", "div", "img", "button", "h1", "h2", "h3", "h4", "h5", "h6", "br", "textarea", "form", "p", "select", "option", "optgroup", "iframe", "script", "center", "dl", "dt", "dd", "small", "pre", "i", "label", "thead"];
  JAM.call(AJS.map, AJS, [elms$$1, extends_ajs]);
  AJS.TN = v60;
  return;
}
function v58(name$$31, attrs) {
  var i$$12 = 0;
  var attr;
  var elm$$21 = document.createElement(name$$31);
  introspect(JAM.policy.p1) {
    var first_attr = attrs[0]
  }
  introspect(JAM.policy.p1) {
    var v1123 = attrs[i$$12]
  }
  if (JAM.call(AJS.isDict, AJS, [v1123])) {
    for (k in first_attr) {
      introspect(JAM.policy.p1) {
        attr = first_attr[k];
      }
      var v1124 = k == "style";
      if (!v1124) {
        v1124 = k == "s";
      }
      if (v1124) {
        elm$$21.style.cssText = attr;
      } else {
        var v1292 = k == "c";
        if (!v1292) {
          v1292 = k == "class";
        }
        var v1125 = v1292;
        if (!v1125) {
          v1125 = k == "className";
        }
        if (v1125) {
          elm$$21.className = attr;
        } else {
          JAM.call(elm$$21.setAttribute, elm$$21, [k, attr]);
        }
      }
    }
    i$$12 = i$$12 + 1;
  }
  if (first_attr == null) {
    i$$12 = 1;
  }
  var j$$1 = i$$12;
  var v736 = j$$1 < attrs.length;
  for (;v736;) {
    introspect(JAM.policy.p1) {
      attr = attrs[j$$1];
    }
    if (attr) {
      var type$$25 = typeof attr;
      var v1127 = type$$25 == "string";
      if (!v1127) {
        v1127 = type$$25 == "number";
      }
      if (v1127) {
        attr = JAM.call(AJS.TN, AJS, [attr]);
      }
      JAM.call(elm$$21.appendChild, elm$$21, [attr]);
    }
    j$$1 = j$$1 + 1;
    v736 = j$$1 < attrs.length;
  }
  return elm$$21;
}
function v57() {
  function v56(elm$$20) {
    if ($(elm$$20)) {
      JAM.call(AJS.swapDOM, AJS, [elm$$20, null]);
    }
    return;
  }
  var args$$5 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  try {
    JAM.call(AJS.map, AJS, [args$$5, v56]);
  } catch (e$$6) {
  }
  return;
}
function v55(dest, src$$1) {
  dest = JAM.call(AJS.getElement, AJS, [dest]);
  var parent$$1 = dest.parentNode;
  if (src$$1) {
    src$$1 = JAM.call(AJS.getElement, AJS, [src$$1]);
    JAM.call(parent$$1.replaceChild, parent$$1, [src$$1, dest]);
  } else {
    parent$$1.removeChild(dest);
  }
  return src$$1;
}
function v54(elm$$19, reference_elm$$1) {
  var v738 = reference_elm$$1.parentNode;
  JAM.call(v738.insertBefore, v738, [elm$$19, reference_elm$$1]);
  return elm$$19;
}
function v53(elm$$18, reference_elm) {
  var v739 = reference_elm.parentNode;
  JAM.call(v739.insertBefore, v739, [elm$$18, reference_elm.nextSibling]);
  return elm$$18;
}
function v52(elm$$17) {
  var child$$1;
  var v741 = child$$1 = elm$$17.firstChild;
  for (;v741;) {
    JAM.call(AJS.swapDOM, AJS, [child$$1, null]);
    v741 = child$$1 = elm$$17.firstChild;
  }
  if (arguments.length < 2) {
    return elm$$17;
  } else {
    var v742 = AJS.appendChildNodes;
    return JAM.call(v742.apply, v742, [null, arguments]);
  }
  return;
}
function v51(elm$$16) {
  var args$$4 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]).slice(1);
  if (args$$4.length >= 1) {
    var first_child = elm$$16.firstChild;
    if (first_child) {
      for (;true;) {
        var t_elm = args$$4.shift();
        if (t_elm) {
          JAM.call(AJS.insertBefore, AJS, [t_elm, first_child]);
        } else {
          break;
        }
      }
    } else {
      var v745 = AJS.ACN;
      JAM.call(v745.apply, v745, [null, arguments]);
    }
  }
  return elm$$16;
}
function v50(elm$$15) {
  function v49(n$$1) {
    if (JAM.call(AJS.isString, AJS, [n$$1])) {
      n$$1 = JAM.call(AJS.TN, AJS, [n$$1]);
    }
    if (JAM.call(AJS.isDefined, AJS, [n$$1])) {
      JAM.call(elm$$15.appendChild, elm$$15, [n$$1]);
    }
    return;
  }
  if (arguments.length >= 2) {
    JAM.call(AJS.map, AJS, [arguments, v49, 1]);
  }
  return elm$$15;
}
function v48(elm$$14) {
  if (typeof elm$$14 == "string") {
    elm$$14 = JAM.call(AJS.HTML2DOM, AJS, [elm$$14]);
  }
  JAM.call(JAM.get(document, "write", JAM.policy.p1), document, ['<span id="dummy_holder"></span>']);
  JAM.call(AJS.swapDOM, AJS, [JAM.call(AJS.$, AJS, ["dummy_holder"]), elm$$14]);
  return;
}
function v47(select) {
  select = JAM.call(AJS.$, AJS, [select]);
  var v1133 = select.options;
  var v1134 = select.selectedIndex;
  introspect(JAM.policy.p1) {
    var v752 = v1133[v1134]
  }
  return v752.value;
}
function v46(form, name$$30) {
  function v45(elm$$13) {
    var v1135 = elm$$13.name;
    if (v1135) {
      v1135 = elm$$13.name == name$$30;
    }
    if (v1135) {
      r$$5 = elm$$13;
    }
    return;
  }
  function v44(elm$$12) {
    var v1136 = elm$$12.name;
    if (v1136) {
      v1136 = elm$$12.name == name$$30;
    }
    if (v1136) {
      r$$5 = elm$$12;
    }
    return;
  }
  form = JAM.call(AJS.$, AJS, [form]);
  var r$$5 = null;
  JAM.call(AJS.map, AJS, [form.elements, v44]);
  if (r$$5) {
    return r$$5;
  }
  JAM.call(AJS.map, AJS, [JAM.call(AJS.$bytc, AJS, ["select", null, form]), v45]);
  return r$$5;
}
function v43() {
  var v757 = JAM.call(AJS.$bytc, AJS, ["body"]);
  introspect(JAM.policy.p1) {
    return v757[0];
  }
}
function v42(elm$$11, tag_name$$5, class_name$$5) {
  function v41(m$$2) {
    return m$$2.nextSibling;
  }
  return JAM.call(AJS._nodeWalk, AJS, [elm$$11, tag_name$$5, class_name$$5, v41]);
}
function v40(elm$$10, tag_name$$4, class_name$$4) {
  function v39(m$$1) {
    return m$$1.previousSibling;
  }
  return JAM.call(AJS._nodeWalk, AJS, [elm$$10, tag_name$$4, class_name$$4, v39]);
}
function v38(elm$$9, parent_to_consider, max_look_up) {
  if (elm$$9 == parent_to_consider) {
    return true;
  }
  if (max_look_up == 0) {
    return false;
  }
  return JAM.call(AJS.hasParent, AJS, [elm$$9.parentNode, parent_to_consider, max_look_up - 1]);
}
function v37(elm$$8, tag_name$$3, class_name$$3) {
  var elms = JAM.call(AJS.$bytc, AJS, [tag_name$$3, class_name$$3, elm$$8]);
  if (elms.length > 0) {
    introspect(JAM.policy.p1) {
      return elms[0];
    }
  } else {
    return null;
  }
  return;
}
function v36(elm$$7, tag_name$$2, class_name$$2) {
  function v35(m) {
    if (m) {
      return m.parentNode;
    }
    return;
  }
  return JAM.call(AJS._nodeWalk, AJS, [elm$$7, tag_name$$2, class_name$$2, v35]);
}
function v34(elm$$6, tag_name$$1, class_name$$1, fn_next_elm) {
  function v33(p$$3) {
    return JAM.call(AJS.hasClass, AJS, [p$$3, class_name$$1]);
  }
  function v32(p$$2) {
    return JAM.call(AJS.nodeName, AJS, [p$$2]) == tag_name$$1;
  }
  function v31(p$$1) {
    var v764 = JAM.call(AJS.nodeName, AJS, [p$$1]) == tag_name$$1;
    if (v764) {
      v764 = JAM.call(AJS.hasClass, AJS, [p$$1, class_name$$1]);
    }
    return v764;
  }
  var p = JAM.call(fn_next_elm, null, [elm$$6]);
  var checkFn;
  if (tag_name$$1 && class_name$$1) {
    checkFn = v31;
  } else {
    if (tag_name$$1) {
      checkFn = v32;
    } else {
      checkFn = v33;
    }
  }
  if (JAM.call(checkFn, null, [elm$$6])) {
    return elm$$6;
  }
  for (;p;) {
    if (JAM.call(checkFn, null, [p])) {
      return p;
    }
    p = JAM.call(fn_next_elm, null, [p]);
  }
  return null;
}
function v30(elm$$5) {
  return elm$$5.nodeName.toLowerCase();
}
function v29(tag_name, class_name, parent, first_match) {
  var class_elements = [];
  if (!JAM.call(AJS.isDefined, AJS, [parent])) {
    parent = document;
  }
  if (!JAM.call(AJS.isDefined, AJS, [tag_name])) {
    tag_name = "*";
  }
  var i$$11;
  var j;
  var v1141 = class_name;
  if (v1141) {
    v1141 = document.getElementsByClassName;
  }
  if (v1141) {
    var els = parent.getElementsByClassName(class_name);
    if (tag_name == "*") {
      class_elements = JAM.call(AJS.forceArray, AJS, [els]);
    } else {
      var els_len = els.length;
      i$$11 = 0;
      var v773 = i$$11 < els_len;
      for (;v773;) {
        introspect(JAM.policy.p1) {
          var v1344 = els[i$$11]
        }
        if (v1344.nodeName.toLowerCase() == tag_name) {
          introspect(JAM.policy.p1) {
            var v771 = els[i$$11]
          }
          class_elements.push(v771);
        }
        i$$11 = i$$11 + 1;
        v773 = i$$11 < els_len;
      }
    }
  } else {
    els = parent.getElementsByTagName(tag_name);
    if (!class_name) {
      class_elements = JAM.call(AJS.forceArray, AJS, [els]);
    } else {
      els_len = els.length;
      var pattern$$1 = new RegExp("(^|\\s)" + class_name + "(\\s|$)");
      i$$11 = 0;
      var v778 = i$$11 < els_len;
      for (;v778;) {
        introspect(JAM.policy.p1) {
          var v1345 = els[i$$11]
        }
        var v1144 = pattern$$1.test(v1345.className);
        if (!v1144) {
          v1144 = !class_name;
        }
        if (v1144) {
          introspect(JAM.policy.p1) {
            var v776 = els[i$$11]
          }
          class_elements.push(v776);
        }
        i$$11 = i$$11 + 1;
        v778 = i$$11 < els_len;
      }
    }
  }
  if (first_match) {
    introspect(JAM.policy.p1) {
      return class_elements[0];
    }
  } else {
    return class_elements;
  }
  return;
}
function v28() {
  var args$$3 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var elements = new Array;
  var i$$10 = 0;
  var v782 = i$$10 < args$$3.length;
  for (;v782;) {
    introspect(JAM.policy.p1) {
      var v781 = args$$3[i$$10]
    }
    var element$$2 = JAM.call(AJS.getElement, AJS, [v781]);
    elements.push(element$$2);
    i$$10 = i$$10 + 1;
    v782 = i$$10 < args$$3.length;
  }
  return elements;
}
function v27(id) {
  var v1147 = JAM.call(AJS.isString, AJS, [id]);
  if (!v1147) {
    v1147 = JAM.call(AJS.isNumber, AJS, [id]);
  }
  if (v1147) {
    return document.getElementById(id);
  } else {
    return id;
  }
  return;
}
function v26(fn$$3) {
  function v25() {
    args$$2 = args$$2.concat(JAM.call(AJS.$FA, AJS, [arguments]));
    return JAM.call(fn$$3.apply, fn$$3, [window, args$$2]);
  }
  var args$$2 = JAM.call(AJS.$FA, AJS, [arguments]);
  args$$2.shift();
  return v25;
}
function v24(list$$9, fn$$2, start_index$$1, end_index$$1) {
  function v23(elm$$4) {
    if (JAM.call(fn$$2, null, [elm$$4])) {
      r$$4.push(elm$$4);
    }
    return;
  }
  var r$$4 = [];
  JAM.call(AJS.map, AJS, [list$$9, v23, start_index$$1, end_index$$1]);
  return r$$4;
}
function v22(list$$8, fn$$1) {
  var i$$9 = list$$8.length - 1;
  var l$$2 = 0;
  var v789 = i$$9 >= l$$2;
  for (;v789;) {
    introspect(JAM.policy.p1) {
      var v1148 = list$$8[i$$9]
    }
    var val$$1 = JAM.call(fn$$1.apply, fn$$1, [null, [v1148, i$$9]]);
    if (val$$1 != undefined) {
      return val$$1;
    }
    i$$9 = i$$9 - 1;
    v789 = i$$9 >= l$$2;
  }
  return;
}
function v21(list$$7, fn, start_index, end_index) {
  var i$$8 = 0;
  var l$$1 = list$$7.length;
  if (start_index) {
    i$$8 = start_index;
  }
  if (end_index) {
    l$$1 = end_index;
  }
  var v792 = i$$8 < l$$1;
  for (;v792;) {
    introspect(JAM.policy.p1) {
      var v790 = list$$7[i$$8]
    }
    var val = JAM.call(fn, null, [v790, i$$8]);
    if (val != undefined) {
      return val;
    }
    i$$8 = i$$8 + 1;
    v792 = i$$8 < l$$1;
  }
  return;
}
function v20(args$$1) {
  var f = JAM.call(AJS.forceArray, AJS, [args$$1]);
  return JAM.call(AJS.flattenList, AJS, [f]);
}
function v19(list$$6) {
  function _flatten(r$$3, l) {
    function v18(o) {
      if (o == null) {
      } else {
        if (JAM.call(AJS.isArray, AJS, [o])) {
          _flatten(r$$3, o);
        } else {
          r$$3.push(o);
        }
      }
      return;
    }
    JAM.call(AJS.map, AJS, [l, v18]);
    return;
  }
  var has_list = false;
  var new_list = [];
  var i$$7 = 0;
  var v797 = i$$7 < list$$6.length;
  for (;v797;) {
    introspect(JAM.policy.p1) {
      var elm$$3 = list$$6[i$$7]
    }
    if (JAM.call(AJS.isArray, AJS, [elm$$3])) {
      has_list = true;
      break;
    }
    if (elm$$3 != null) {
      new_list.push(elm$$3);
    }
    i$$7 = i$$7 + 1;
    v797 = i$$7 < list$$6.length;
  }
  if (!has_list) {
    return new_list;
  }
  var r$$2 = [];
  _flatten(r$$2, list$$6);
  return r$$2;
}
function v17(l1, l2) {
  var i$$6;
  for (i$$6 in l2) {
    JAM.set(l1, i$$6, JAM.get(l2, i$$6, JAM.policy.p1));
  }
  return l1;
}
function v16(list$$5) {
  var v799 = list$$5;
  var v800 = Math.floor(Math.random() * list$$5.length);
  introspect(JAM.policy.p1) {
    return v799[v800];
  }
}
function v15(list$$4) {
  if (list$$4.length > 0) {
    var v801 = list$$4.length - 1;
    introspect(JAM.policy.p1) {
      return list$$4[v801];
    }
  } else {
    return null;
  }
  return;
}
function v14(list$$3) {
  if (list$$3.length > 0) {
    introspect(JAM.policy.p1) {
      return list$$3[0];
    }
  } else {
    return null;
  }
  return;
}
function v13(elm$$2, list$$2, eval_fn) {
  var i$$5 = 0;
  var v805 = i$$5 < list$$2.length;
  for (;v805;) {
    var v1303 = eval_fn;
    if (v1303) {
      introspect(JAM.policy.p1) {
        var v1346 = list$$2[i$$5]
      }
      v1303 = JAM.call(eval_fn, null, [v1346]);
    }
    var v1156 = v1303;
    if (!v1156) {
      introspect(JAM.policy.p1) {
        var v1304 = list$$2[i$$5]
      }
      v1156 = elm$$2 == v1304;
    }
    if (v1156) {
      return i$$5;
    }
    i$$5 = i$$5 + 1;
    v805 = i$$5 < list$$2.length;
  }
  return-1;
}
function v12(elm$$1, list$$1) {
  var i$$4 = JAM.call(AJS.getIndex, AJS, [elm$$1, list$$1]);
  if (i$$4 != -1) {
    return true;
  } else {
    return false;
  }
  return;
}
function v11(delim, list) {
  function v10(elm) {
    r$$1 = r$$1 + (delim + elm);
    return;
  }
  try {
    return JAM.call(list.join, list, [delim]);
  } catch (e$$5) {
    introspect(JAM.policy.p1) {
      var v807 = list[0]
    }
    if (!v807) {
      v807 = "";
    }
    var r$$1 = v807;
    JAM.call(AJS.map, AJS, [list, v10, 1]);
    return r$$1 + "";
  }
  return;
}
function v9(args) {
  var r = [];
  var i$$3 = 0;
  var v809 = i$$3 < args.length;
  for (;v809;) {
    introspect(JAM.policy.p1) {
      var v808 = args[i$$3]
    }
    r.push(v808);
    i$$3 = i$$3 + 1;
    v809 = i$$3 < args.length;
  }
  return r;
}
function v8(v) {
  var v1162 = JAM.call(AJS.isArray, AJS, [v]);
  if (v1162) {
    v1162 = !JAM.call(AJS.isString, AJS, [v]);
  }
  if (v1162) {
    return v;
  } else {
    if (!v) {
      return[];
    } else {
      return[v];
    }
  }
  return;
}
function v7() {
  return AJS._agent.indexOf("camino") != -1;
}
function v6() {
  return AJS._agent.indexOf("macintosh") != -1;
}
function v5() {
  var v814 = AJS._agent.indexOf("gecko") != -1;
  if (v814) {
    v814 = AJS._agent_version >= 20030210;
  }
  return v814;
}
function v4() {
  return AJS._agent.indexOf("opera") != -1;
}
function v3(all) {
  if (all) {
    return AJS._agent.indexOf("khtml");
  }
  var v817 = AJS._agent.indexOf("khtml") != -1;
  if (v817) {
    v817 = AJS._agent.match(/3\.\d\.\d safari/) == null;
  }
  return v817;
}
function v2() {
  return AJS._agent.indexOf("msie 8") != -1;
}
function v1() {
  var v819 = AJS._agent.indexOf("msie") != -1;
  if (v819) {
    v819 = AJS._agent.indexOf("opera") == -1;
  }
  return v819;
}
function v0(var_name) {
  var query$$2 = window.location.search.substring(1);
  var vars = query$$2.split("&");
  var i$$2 = 0;
  var v823 = i$$2 < vars.length;
  for (;v823;) {
    introspect(JAM.policy.p1) {
      var v821 = vars[i$$2]
    }
    var pair = v821.split("=");
    introspect(JAM.policy.p1) {
      var v1175 = pair[0]
    }
    if (v1175 == var_name) {
      introspect(JAM.policy.p1) {
        return pair[1];
      }
    }
    i$$2 = i$$2 + 1;
    v823 = i$$2 < vars.length;
  }
  return null;
}
function GoogieSpell(img_dir, server_url) {
  function fn$$16(e$$17) {
    var elm$$39 = JAM.call(AJS.getEventElm, AJS, [e$$17]);
    var v1177 = elm$$39.googie_action_btn != "1";
    if (v1177) {
      v1177 = this.isLangWindowShown();
    }
    if (v1177) {
      this.hideLangWindow();
    }
    var v1178 = elm$$39.googie_action_btn != "1";
    if (v1178) {
      v1178 = this.isErrorWindowShown();
    }
    if (v1178) {
      this.hideErrorWindow();
    }
    return;
  }
  var cookie_value;
  var lang;
  cookie_value = getCookie("language");
  if (cookie_value != null) {
    GOOGIE_CUR_LANG = cookie_value;
  } else {
    GOOGIE_CUR_LANG = GOOGIE_DEFAULT_LANG;
  }
  this.img_dir = img_dir;
  this.server_url = server_url;
  this.org_lang_to_word = {"da":"Dansk", "de":"Deutsch", "en":"English", "es":"Espa&#241;ol", "fr":"Fran&#231;ais", "it":"Italiano", "nl":"Nederlands", "pl":"Polski", "pt":"Portugu&#234;s", "fi":"Suomi", "sv":"Svenska"};
  this.lang_to_word = this.org_lang_to_word;
  var v1393 = JAM.call(AJS.keys, AJS, [this.lang_to_word]);
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
  JAM.call(AJS.AEV, AJS, [document, "click", JAM.call(AJS.$b, AJS, [fn$$16, this])]);
  return;
}
function setCookie(name$$36, value$$29, expires, path, domain, secure) {
  var v1347 = name$$36 + "=" + escape(value$$29);
  var v1359;
  if (expires) {
    v1359 = "; expires=" + expires.toGMTString();
  } else {
    v1359 = "";
  }
  var v1314 = v1347 + v1359;
  var v1349;
  if (path) {
    v1349 = "; path=" + path;
  } else {
    v1349 = "";
  }
  var v1179 = v1314 + v1349;
  var v1316;
  if (domain) {
    v1316 = "; domain=" + domain;
  } else {
    v1316 = "";
  }
  var v829 = v1179 + v1316;
  var v1181;
  if (secure) {
    v1181 = "; secure";
  } else {
    v1181 = "";
  }
  var curCookie = v829 + v1181;
  document.cookie = curCookie;
  return;
}
function getCookie(name$$37) {
  var dc = document.cookie;
  var prefix$$2 = name$$37 + "=";
  var begin$$11 = dc.indexOf("; " + prefix$$2);
  if (begin$$11 == -1) {
    begin$$11 = dc.indexOf(prefix$$2);
    if (begin$$11 != 0) {
      return null;
    }
  } else {
    begin$$11 = begin$$11 + 2;
  }
  var end$$1 = document.cookie.indexOf(";", begin$$11);
  if (end$$1 == -1) {
    end$$1 = dc.length;
  }
  return unescape(dc.substring(begin$$11 + prefix$$2.length, end$$1));
}
if (!window.AJS) {
  var AJS = {BASE_URL:"", ajaxErrorHandler:null, getQueryArgument:v0, _agent:navigator.userAgent.toLowerCase(), _agent_version:navigator.productSub, isIe:v1, isIe8:v2, isSafari:v3, isOpera:v4, isMozilla:v5, isMac:v6, isCamino:v7, createArray:v8, forceArray:v9, join:v11, isIn:v12, getIndex:v13, getFirst:v14, getLast:v15, getRandom:v16, update:v17, flattenList:v19, flattenElmArguments:v20, map:v21, rmap:v22, filter:v24, partial:v26, getElement:v27, getElements:v28, getElementsByTagAndClassName:v29, 
  nodeName:v30, _nodeWalk:v34, getParentBytc:v36, getChildBytc:v37, hasParent:v38, getPreviousSiblingBytc:v40, getNextSiblingBytc:v42, getBody:v43, getFormElement:v46, getSelectValue:v47, documentInsert:v48, appendChildNodes:v50, appendToTop:v51, replaceChildNodes:v52, insertAfter:v53, insertBefore:v54, swapDOM:v55, removeElement:v57, createDOM:v58, _createDomShortcuts:v61, setHTML:v63, setVisibility:v64, showElement:v65, hideElement:v66, isElementHidden:v67, isElementShown:v68, setStyle:v72, __cssDim:v73, 
  setWidth:v74, setHeight:v75, setLeft:v76, setRight:v77, setTop:v78, setClass:v80, addClass:v82, hasClass:v83, removeClass:v85, setOpacity:v86, HTML2DOM:v87, preloadImages:v90, RND:v91, getXMLHttpRequest:v97, getRequest:v98, serializeJSON:v99, loadJSON:v100, evalTxt:v101, evalScriptTags:v102, encodeArguments:v103, _reprString:v104, _reprDate:v105, getMousePos:v106, getScrollTop:v107, absolutePosition:v108, getWindowSize:v109, isOverlapping:v110, getEventElm:v111, setEventKey:v112, onEvent:v114, 
  ready_bound:false, is_ready:false, bindReady:v118, ready_list:[], ready:v120, _f_guid:0, _wipe_guid:0, myaddEventListener:v123, handleEvent:v125, removeEventListener:v127, bind:v128, bindMethods:v129, preventDefault:v130, _listenOnce:v131, _getRealScope:v133, _reccruing_tos:{}, setSingleTimeout:v134, keys:v135, values:v136, urlencode:v137, urldecode:v138, isDefined:v139, isArray:v140, isString:v141, isNumber:v142, isObject:v143, isFunction:v144, isDict:v145, exportToGlobalScope:v146, log:v147, 
  withScope:v148, strip:v149, trim_if_needed:v150};
  AJS.Class = v151;
  AJS.Class.prototype = {extend:v152, implement:v153, _parentize:v155};
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
  AJS._createDomShortcuts();
}
script_loaded = true;
AJS.exportToGlobalScope();
AJS.bindReady();
var GOOGIE_CUR_LANG = null;
var GOOGIE_DEFAULT_LANG = "en";
GoogieSpell.prototype.decorateTextarea = v166;
GoogieSpell.prototype.setSpellContainer = v167;
GoogieSpell.prototype.setLanguages = v168;
GoogieSpell.prototype.setForceWidthHeight = v169;
GoogieSpell.prototype.setDecoration = v170;
GoogieSpell.prototype.dontUseCloseButtons = v171;
GoogieSpell.prototype.appendNewMenuItem = v172;
GoogieSpell.prototype.appendCustomMenuBuilder = v173;
GoogieSpell.prototype.setFocus = v174;
GoogieSpell.prototype.getValue = v175;
GoogieSpell.prototype.setValue = v176;
GoogieSpell.prototype.setStateChanged = v177;
GoogieSpell.prototype.setReportStateChange = v178;
GoogieSpell.prototype.getGoogleUrl = v179;
GoogieSpell.escapeSepcial = v180;
GoogieSpell.createXMLReq = v181;
GoogieSpell.prototype.spellCheck = v182;
GoogieSpell.prototype.parseResult = v183;
GoogieSpell.prototype.errorFixed = v184;
GoogieSpell.prototype.errorFound = v185;
GoogieSpell.prototype.createErrorWindow = v186;
GoogieSpell.prototype.isErrorWindowShown = v187;
GoogieSpell.prototype.hideErrorWindow = v188;
GoogieSpell.prototype.updateOrginalText = v189;
GoogieSpell.prototype.saveOldValue = v190;
GoogieSpell.prototype.createListSeparator = v191;
GoogieSpell.prototype.correctError = v192;
GoogieSpell.prototype.showErrorWindow = v198;
GoogieSpell.prototype.createEditLayer = v201;
GoogieSpell.prototype.resumeEditing = v202;
GoogieSpell.prototype.createErrorLink = v203;
GoogieSpell.createPart = v204;
GoogieSpell.prototype.showErrorsInIframe = v206;
GoogieSpell.prototype.createLangWindow = v210;
GoogieSpell.prototype.setCurrentLanguage = v211;
GoogieSpell.prototype.isLangWindowShown = v212;
GoogieSpell.prototype.hideLangWindow = v213;
GoogieSpell.prototype.deHighlightCurSel = v214;
GoogieSpell.prototype.highlightCurSel = v215;
GoogieSpell.prototype.showLangWindow = v216;
GoogieSpell.prototype.createChangeLangPic = v217;
GoogieSpell.prototype.createSpellDiv = v218;
GoogieSpell.prototype.flashNoSpellingErrorState = v220;
GoogieSpell.prototype.resumeEditingState = v222;
GoogieSpell.prototype.checkSpellingState = v223;
GoogieSpell.item_onmouseover = v224;
GoogieSpell.item_onmouseout = v225;
GoogieSpell.prototype.createCloseButton = v226;
GoogieSpell.prototype.createButton = v227;
GoogieSpell.prototype.removeIndicator = v228;
GoogieSpell.prototype.appendIndicator = v229;
GoogieSpell.prototype.createFocusLink = v230;
var x = document.cookie;
var googie1 = new GoogieSpell("./", "./spell-check/spell-check.php?lang=");
JAM.call(googie1.decorateTextarea, googie1, ["ta1"])

