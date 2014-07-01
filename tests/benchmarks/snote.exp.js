function SNote(serverPath, divParent) {
  function init(divParent$$1, serverPath$$1) {
    m_serverPath = serverPath$$1;
    m_divInternal$$1 = divParent$$1;
    var serverPath$$inline_3 = serverPath$$1;
    var v141 = m_divInternal$$1.style;
    v141.border = "2px solid";
    var v142 = m_divInternal$$1.style;
    v142.backgroundColor = "#FFFFCC";
    m_preNote = document.createElement("pre");
    m_preNote.id = "note";
    m_preNote.className = "write-only non-editable";
    m_divInternal$$1.appendChild(m_preNote);
    m_divButtons = document.createElement("div");
    var v143 = m_divButtons.style;
    v143.textAlign = "left";
    m_divInternal$$1.appendChild(m_divButtons);
    m_imageEdit = createNoteButton("Edit", handleEditButtonClick, m_divButtons);
    m_imageView = createNoteButton("Read", handleUnlockButtonClick, m_divButtons);
    m_imageDelete = createNoteButton("Delete", handleDeleteButtonClick, m_divButtons);
    m_divEdit = createPopupDialog("edit_dialog", m_divInternal$$1);
    var v144 = m_divEdit.style;
    v144.width = 400;
    m_inputNewPassword = createPasswordPanel(m_divEdit, "Enter password:", "edit_password");
    m_inputNewPasswordRetype = createPasswordPanel(m_divEdit, "Retype password:", "edit_password_retype");
    m_inputNote = document.createElement("textarea");
    var v145 = m_inputNote.style;
    v145.width = 350;
    var v146 = m_inputNote.style;
    v146.height = 200;
    m_inputNote.className = "destructive-read read-only";
    m_inputNote.id = "edit_note_input";
    m_divEdit.appendChild(m_inputNote);
    divButtons = createDialogButtonPanel(handleEditDialogOk, handleEditDialogCancel, m_divEdit);
    var v147 = m_divEdit.style;
    v147.display = "none";
    m_divUnlock = createPopupDialog("unlock_dialog", m_divInternal$$1);
    m_inputPassword = createPasswordPanel(m_divUnlock, "Enter password:", "unlock_password");
    createDialogButtonPanel(handleUnlockDialogOk, handleUnlockDialogCancel, m_divUnlock);
    var v148 = m_divUnlock.style;
    v148.display = "none";
    m_divDeleteDialog = createPopupDialog("delete_dialog", m_divInternal$$1);
    var parent$$inline_33 = m_divDeleteDialog;
    label = document.createElement("label");
    transaction(JAMScript.handlers.processAAAD8296A9C64738646805A49CA025BCAEA5F313FB00E25BCD479A8A9D813FB6BDBD3C72431DAB6971927A4A0ADA24698844D02CC35D71CAE8F4DDF3) {
      label.textContent = "Are you sure you want to delete?"
    }
    parent$$inline_33.appendChild(label);
    createDialogButtonPanel(handleDeleteDialogOk, handleDeleteDialogCancel, m_divDeleteDialog);
    var v149 = m_divDeleteDialog.style;
    v149.display = "none";
    fetch(m_strId, handleSuccessfulFetch, handleFailedFetch)
  }
  function createNoteButton(strLabel, funcHandleClick, parent$$2) {
    button = document.createElement("input");
    button.type = "button";
    button.value = strLabel;
    parent$$2.appendChild(button);
    button.onclick = funcHandleClick;
    return button
  }
  function createPasswordPanel(parent$$3, strPrompt, strPasswordInputId) {
    divPassword = document.createElement("div");
    parent$$3.appendChild(divPassword);
    labelPassword = document.createElement("label");
    transaction(JAMScript.handlers.processAAAD8296A9C64738646805A49CA025BCAEA5F313FB00E25BCD479A8A9D813FB6BDBD3C72431DAB6971927A4A0ADA24698844D02CC35D71CAE8F4DDF3) {
      labelPassword.textContent = strPrompt
    }
    divPassword.appendChild(labelPassword);
    inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.className = "destructive-read read-only";
    inputPassword.id = strPasswordInputId;
    divPassword.appendChild(inputPassword);
    return inputPassword
  }
  function createPopupDialog(strDialogId, parent$$5) {
    divDialog = document.createElement("div");
    divDialog.id = strDialogId;
    divDialog.className = "popup";
    parent$$5.appendChild(divDialog);
    return divDialog
  }
  function createDialogButtonPanel(funcHandleOk, funcHandleCancel, parent$$6) {
    divButtons = document.createElement("div");
    buttonOk = document.createElement("button");
    buttonOk.type = "input";
    transaction(JAMScript.handlers.processAAAD8296A9C64738646805A49CA025BCAEA5F313FB00E25BCD479A8A9D813FB6BDBD3C72431DAB6971927A4A0ADA24698844D02CC35D71CAE8F4DDF3) {
      buttonOk.textContent = "ok"
    }
    buttonOk.onclick = funcHandleOk;
    divButtons.appendChild(buttonOk);
    buttonCancel = document.createElement("button");
    buttonCancel.type = "input";
    transaction(JAMScript.handlers.processAAAD8296A9C64738646805A49CA025BCAEA5F313FB00E25BCD479A8A9D813FB6BDBD3C72431DAB6971927A4A0ADA24698844D02CC35D71CAE8F4DDF3) {
      buttonCancel.textContent = "cancel"
    }
    buttonCancel.onclick = funcHandleCancel;
    divButtons.appendChild(buttonCancel);
    parent$$6.appendChild(divButtons);
    return divButtons
  }
  function closeUnlockDialog() {
    var div$$3 = document.getElementById("unlock_dialog");
    var v150 = div$$3.style;
    v150.display = "none";
    m_inputPassword.value = ""
  }
  function closeDeleteDialog() {
    var div$$4 = document.getElementById("delete_dialog");
    var v151 = div$$4.style;
    v151.display = "none"
  }
  function closeEditDialog() {
    var div$$5 = document.getElementById("edit_dialog");
    var v152 = div$$5.style;
    v152.display = "none";
    m_inputNote.value = "";
    m_inputNewPassword.value = "";
    m_inputNewPasswordRetype.value = ""
  }
  function closeDialogsBoxes() {
    closeEditDialog();
    closeDeleteDialog();
    closeUnlockDialog()
  }
  function switchToLockedViewMode() {
    closeDialogsBoxes();
    var v153 = m_imageEdit.style;
    v153.display = "none";
    var v154 = m_imageDelete.style;
    v154.display = "none";
    var v155 = m_imageView.style;
    v155.display = "inline"
  }
  function destructiveRead(elem$$1) {
    var v156 = elem$$1.value;
    val = v156;
    elem$$1.value = "";
    return val
  }
  function handleDeleteButtonClick() {
    var div$$inline_8 = document.getElementById("delete_dialog");
    var v157 = div$$inline_8.style;
    v157.display = "block"
  }
  function handleDeleteDialogCancel() {
    closeDeleteDialog()
  }
  function handleDeleteDialogOk() {
    function v0(strId) {
      transaction(JAMScript.handlers.processAAAD8296A9C64738646805A49CA025BCAEA5F313FB00E25BCD479A8A9D813FB6BDBD3C72431DAB6971927A4A0ADA24698844D02CC35D71CAE8F4DDF3) {
        m_preNote.textContent = ""
      }
      fetch(m_strId, handleSuccessfulFetch, handleFailedFetch)
    }
    function v1() {
      alert("Failed to delete note.");
      closeDeleteDialog()
    }
    deleteSNote(v0, v1)
  }
  function handleUnlockButtonClick() {
    var div$$inline_12 = document.getElementById("unlock_dialog");
    var v158 = div$$inline_12.style;
    v158.display = "block"
  }
  function handleUnlockDialogOk() {
    var JSCompiler_inline_result$$0;
    JSCompiler_inline_label_decryptText_16: {
      var strPasswd$$inline_15 = destructiveRead(m_inputPassword);
      var v159 = strPasswd$$inline_15 != undefined;
      if(v159) {
        var v160 = CryptoJS.AES;
        wordArrPlainText = v160.decrypt(m_strCipherText, strPasswd$$inline_15);
        var v161 = CryptoJS.enc;
        var v162 = v161.Utf8;
        JSCompiler_inline_result$$0 = v162.stringify(wordArrPlainText);
        break JSCompiler_inline_label_decryptText_16
      }else {
        JSCompiler_inline_result$$0 = undefined;
        break JSCompiler_inline_label_decryptText_16
      }
    }
    transaction(JAMScript.handlers.processAAAD8296A9C64738646805A49CA025BCAEA5F313FB00E25BCD479A8A9D813FB6BDBD3C72431DAB6971927A4A0ADA24698844D02CC35D71CAE8F4DDF3) {
      m_preNote.textContent = JSCompiler_inline_result$$0
    }
    closeDialogsBoxes();
    var v163 = m_imageEdit.style;
    v163.display = "none";
    var v164 = m_imageView.style;
    v164.display = "none";
    var v165 = m_imageDelete.style;
    v165.display = "inline"
  }
  function handleUnlockDialogCancel() {
    closeUnlockDialog()
  }
  function handleEditButtonClick() {
    var div$$inline_20 = document.getElementById("edit_dialog");
    var v166 = div$$inline_20.style;
    v166.display = "block"
  }
  function handleEditDialogOk() {
    function v2(strId$$1) {
      var v167 = strId$$1 != "";
      if(v167) {
        switchToLockedViewMode();
        fetch(m_strId, handleSuccessfulFetch, handleFailedFetch)
      }else {
        alert("Error: note could not be saved.")
      }
    }
    strNewPass = destructiveRead(m_inputNewPassword);
    strNewPassRetype = destructiveRead(m_inputNewPasswordRetype);
    var v168 = strNewPass.length;
    var v169 = v168 == 0;
    if(v169) {
      alert("Must have non-empty password")
    }else {
      var v170 = strNewPass != strNewPassRetype;
      if(v170) {
        alert("Passwords do not match")
      }else {
        var v171 = destructiveRead(m_inputNote);
        encryptAndSave(v171, strNewPass, v2)
      }
    }
  }
  function handleEditDialogCancel() {
    closeEditDialog()
  }
  function handleSuccessfulFetch(strCipherText) {
    m_strCipherText = strCipherText;
    switchToLockedViewMode();
    closeEditDialog()
  }
  function handleFailedFetch() {
    closeDialogsBoxes();
    var v172 = m_imageView.style;
    v172.display = "none";
    var v173 = m_imageDelete.style;
    v173.display = "none";
    var v174 = m_imageEdit.style;
    v174.display = "inline"
  }
  function fetch(strId$$2, callbackSuccess, callbackFail) {
    function v3() {
      var v175 = xmlhttp.readyState;
      var v123 = v175 == 4;
      if(v123) {
        var v176 = xmlhttp.status;
        v123 = v176 == 200
      }
      if(v123) {
        var v177 = xmlhttp.responseText;
        jsonObjResponse = JSON.parse(v177);
        var v178 = jsonObjResponse.bSuccess;
        if(v178) {
          var v179 = jsonObjResponse.strCipherText;
          callbackSuccess(v179)
        }else {
          callbackFail()
        }
      }
    }
    xmlhttp = new XMLHttpRequest;
    xmlhttp.onreadystatechange = v3;
    var v180 = m_serverPath + "FetchSNote.php";
    var v181 = v180 + "?snotehandle=";
    var v182 = encodeURIComponent(strId$$2);
    var strUrl = v181 + v182;
    xmlhttp.open("GET", strUrl, true);
    xmlhttp.send()
  }
  function encryptAndSave(strNote, strPassword, callbackDone) {
    var JSCompiler_temp_const$$1 = save;
    var JSCompiler_inline_result$$2;
    JSCompiler_inline_label_encryptText_25: {
      var strPasswd$$inline_24 = strPassword;
      if(strPasswd$$inline_24) {
        var v183 = CryptoJS.enc;
        var v184 = v183.Utf8;
        wordArrPlainText = v184.parse(strNote);
        var v185 = CryptoJS.AES;
        var v186 = v185.encrypt(wordArrPlainText, strPasswd$$inline_24);
        JSCompiler_inline_result$$2 = v186.toString()
      }else {
        JSCompiler_inline_result$$2 = undefined
      }
    }
    JSCompiler_temp_const$$1(JSCompiler_inline_result$$2, callbackDone)
  }
  function save(strEncNote, callbackDone$$1) {
    function v4() {
      var v187 = xmlhttp.readyState;
      var v124 = v187 == 4;
      if(v124) {
        var v188 = xmlhttp.status;
        v124 = v188 == 200
      }
      if(v124) {
        var v189 = xmlhttp.responseText;
        jsonObjResponse = JSON.parse(v189);
        var v190 = jsonObjResponse.bSuccess;
        if(v190) {
          var v191 = jsonObjResponse.strId;
          callbackDone$$1(v191)
        }else {
          callbackDone$$1("")
        }
      }
    }
    xmlhttp = new XMLHttpRequest;
    xmlhttp.onreadystatechange = v4;
    var v192 = m_serverPath + "SaveSNote.php";
    xmlhttp.open("POST", v192, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var v193 = encodeURIComponent(m_strId);
    var v194 = "snoteHandle=" + v193;
    var v195 = v194 + "&snote=";
    var v196 = v195 + strEncNote;
    xmlhttp.send(v196)
  }
  function deleteSNote(callbackSuccess$$1, callbackFail$$1) {
    function v5() {
      var v197 = xmlhttp.responseText;
      jsonObjResponse = JSON.parse(v197);
      var v198 = jsonObjResponse.bSuccess;
      if(v198) {
        var v199 = jsonObjResponse.strId;
        callbackSuccess$$1(v199)
      }else {
        callbackFail$$1()
      }
    }
    xmlhttp = new XMLHttpRequest;
    xmlhttp.onreadystatechange = v5;
    var v200 = m_serverPath + "DeleteSNote.php";
    xmlhttp.open("POST", v200, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var v201 = encodeURIComponent(m_strId);
    var v202 = "snoteHandle=" + v201;
    xmlhttp.send(v202)
  }
  var m_strId = divParent.id;
  var m_strCipherText = null;
  var m_serverPath = null;
  var m_divInternal$$1 = null;
  var m_preNote = null;
  var m_imageEdit = null;
  var m_imageView = null;
  var m_divEdit = null;
  var m_labelMismatchedPasswords = null;
  var m_inputNewPassword = null;
  var m_inputNewPasswordRetype = null;
  var m_inputNote = null;
  var m_divPassword = null;
  var m_inputPassword = null;
  init(divParent, serverPath)
}
function v37(p, h$$4) {
  function v11() {
    function a() {
    }
    function v6(e$$12) {
      a.prototype = this;
      var c = new a;
      if(e$$12) {
        c.mixIn(e$$12)
      }
      c.$super = this;
      return c
    }
    function v7() {
      var a$$1 = this.extend();
      var v204 = a$$1.init;
      v204.apply(a$$1, arguments);
      return a$$1
    }
    function v8() {
    }
    function v9(a$$2) {
      var c$$1;
      for(c$$1 in a$$2) {
        var v125 = a$$2.hasOwnProperty(c$$1);
        if(v125) {
          transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
            var v205 = a$$2[c$$1]
          }
          transaction(JAMScript.handlers.processAAAD8296A9C64738646805A49CA025BCAEA5F3134834199F0411442EA3537F0AC966267195E47F04FB00E25BCD479A8A9D813FB6BDBD3C72431DAB6971927A4A0ADA24698844D02CC35D71CAE8F4DDF3) {
            this[c$$1] = v205
          }
        }
      }
      var v126 = a$$2.hasOwnProperty("toString");
      if(v126) {
        var v206 = a$$2.toString;
        this.toString = v206
      }
    }
    function v10() {
      var v207 = this.$super;
      var v208 = v207.extend(this);
      return v208
    }
    var v209 = {extend:v6, create:v7, init:v8, mixIn:v9, clone:v10};
    return v209
  }
  function v12(a$$3, e$$13) {
    var v133 = a$$3;
    if(!v133) {
      v133 = []
    }
    this.words = v133;
    a$$3 = this.words;
    var v114;
    var v211 = e$$13 != h$$4;
    if(v211) {
      v114 = e$$13
    }else {
      var v212 = a$$3.length;
      v114 = 4 * v212
    }
    this.sigBytes = v114
  }
  function v13(a$$4) {
    var v134 = a$$4;
    if(!v134) {
      v134 = s$$2
    }
    var v213 = v134.stringify(this);
    return v213
  }
  function v14(a$$5) {
    var e$$14 = this.words;
    var c$$2 = a$$5.words;
    var b = this.sigBytes;
    var v214 = a$$5.sigBytes;
    a$$5 = v214;
    this.clamp();
    var v215 = b % 4;
    if(v215) {
      var d = 0;
      var v89 = d < a$$5;
      for(;v89;) {
        var v216 = b + d;
        var v217 = v216 >>> 2;
        var v218 = d >>> 2;
        var v219 = c$$2[v218];
        var v220 = d % 4;
        var v221 = 8 * v220;
        var v222 = 24 - v221;
        var v223 = v219 >>> v222;
        var v224 = v223 & 255;
        var v225 = b + d;
        var v226 = v225 % 4;
        var v227 = 8 * v226;
        var v228 = 24 - v227;
        var v229 = v224 << v228;
        e$$14[v217] |= v229;
        d++;
        v89 = d < a$$5
      }
    }else {
      var v230 = c$$2.length;
      var v231 = 65535 < v230;
      if(v231) {
        d = 0;
        var v90 = d < a$$5;
        for(;v90;) {
          var v232 = b + d;
          var v233 = v232 >>> 2;
          var v234 = d >>> 2;
          var v235 = c$$2[v234];
          e$$14[v233] = v235;
          d += 4;
          v90 = d < a$$5
        }
      }else {
        var v236 = e$$14.push;
        v236.apply(e$$14, c$$2)
      }
    }
    this.sigBytes += a$$5;
    return this
  }
  function v15() {
    var a$$6 = this.words;
    var e$$15 = this.sigBytes;
    var v237 = e$$15 >>> 2;
    var v238 = e$$15 % 4;
    var v239 = 8 * v238;
    var v240 = 32 - v239;
    var v241 = 4294967295 << v240;
    a$$6[v237] &= v241;
    var v242 = e$$15 / 4;
    var v243 = p.ceil(v242);
    a$$6.length = v243
  }
  function v16() {
    var v244 = r.clone;
    var a$$7 = v244.call(this);
    var v245 = this.words;
    var v246 = v245.slice(0);
    a$$7.words = v246;
    return a$$7
  }
  function v17(a$$8) {
    var e$$16 = [];
    var c$$3 = 0;
    var v91 = c$$3 < a$$8;
    for(;v91;) {
      var v247 = p.random();
      var v248 = 4294967296 * v247;
      var v249 = v248 | 0;
      e$$16.push(v249);
      c$$3 += 4;
      v91 = c$$3 < a$$8
    }
    var v250 = o.create(e$$16, a$$8);
    return v250
  }
  function v18(a$$9) {
    var e$$17 = a$$9.words;
    var v254 = a$$9.sigBytes;
    a$$9 = v254;
    var c$$4 = [];
    var b$$1 = 0;
    var v92 = b$$1 < a$$9;
    for(;v92;) {
      var v255 = b$$1 >>> 2;
      var v256 = e$$17[v255];
      var v257 = b$$1 % 4;
      var v258 = 8 * v257;
      var v259 = 24 - v258;
      var v260 = v256 >>> v259;
      var d$$1 = v260 & 255;
      var v261 = d$$1 >>> 4;
      var v262 = v261.toString(16);
      c$$4.push(v262);
      var v263 = d$$1 & 15;
      var v264 = v263.toString(16);
      c$$4.push(v264);
      b$$1++;
      v92 = b$$1 < a$$9
    }
    var v265 = c$$4.join("");
    return v265
  }
  function v19(a$$10) {
    var e$$18 = a$$10.length;
    var c$$5 = [];
    var b$$2 = 0;
    var v93 = b$$2 < e$$18;
    for(;v93;) {
      var v266 = b$$2 >>> 3;
      var v267 = a$$10.substr(b$$2, 2);
      var v268 = parseInt(v267, 16);
      var v269 = b$$2 % 8;
      var v270 = 4 * v269;
      var v271 = 24 - v270;
      var v272 = v268 << v271;
      c$$5[v266] |= v272;
      b$$2 += 2;
      v93 = b$$2 < e$$18
    }
    var v273 = e$$18 / 2;
    var v274 = o.create(c$$5, v273);
    return v274
  }
  function v20(a$$11) {
    var e$$19 = a$$11.words;
    var v276 = a$$11.sigBytes;
    a$$11 = v276;
    var c$$6 = [];
    var b$$3 = 0;
    var v94 = b$$3 < a$$11;
    for(;v94;) {
      var v277 = b$$3 >>> 2;
      var v278 = e$$19[v277];
      var v279 = b$$3 % 4;
      var v280 = 8 * v279;
      var v281 = 24 - v280;
      var v282 = v278 >>> v281;
      var v283 = v282 & 255;
      var v284 = String.fromCharCode(v283);
      c$$6.push(v284);
      b$$3++;
      v94 = b$$3 < a$$11
    }
    var v285 = c$$6.join("");
    return v285
  }
  function v21(a$$12) {
    var e$$20 = a$$12.length;
    var c$$7 = [];
    var b$$4 = 0;
    var v95 = b$$4 < e$$20;
    for(;v95;) {
      var v286 = b$$4 >>> 2;
      var v287 = a$$12.charCodeAt(b$$4);
      var v288 = v287 & 255;
      var v289 = b$$4 % 4;
      var v290 = 8 * v289;
      var v291 = 24 - v290;
      var v292 = v288 << v291;
      c$$7[v286] |= v292;
      b$$4++;
      v95 = b$$4 < e$$20
    }
    var v293 = o.create(c$$7, e$$20);
    return v293
  }
  function v22(a$$13) {
    var v295 = n$$1.stringify(a$$13);
    var v296 = escape(v295);
    var v297 = decodeURIComponent(v296);
    return v297
  }
  function v23(a$$14) {
    var v298 = encodeURIComponent(a$$14);
    var v299 = unescape(v298);
    var v300 = n$$1.parse(v299);
    return v300
  }
  function v24() {
    var v302 = o.create();
    this._data = v302;
    this._nDataBytes = 0
  }
  function v25(a$$15) {
    var v303 = typeof a$$15;
    var v127 = "string" == v303;
    if(v127) {
      a$$15 = k.parse(a$$15)
    }
    var v304 = this._data;
    v304.concat(a$$15);
    var v305 = a$$15.sigBytes;
    this._nDataBytes += v305
  }
  function v26(a$$16) {
    var e$$21 = this._data;
    var c$$8 = e$$21.words;
    var b$$5 = e$$21.sigBytes;
    var d$$2 = this.blockSize;
    var v306 = 4 * d$$2;
    var q = b$$5 / v306;
    var v115;
    if(a$$16) {
      v115 = p.ceil(q)
    }else {
      var v307 = q | 0;
      var v308 = this._minBufferSize;
      var v309 = v307 - v308;
      v115 = p.max(v309, 0)
    }
    q = v115;
    a$$16 = q * d$$2;
    var v310 = 4 * a$$16;
    b$$5 = p.min(v310, b$$5);
    if(a$$16) {
      var j = 0;
      var v96 = j < a$$16;
      for(;v96;) {
        this._doProcessBlock(c$$8, j);
        j += d$$2;
        v96 = j < a$$16
      }
      j = c$$8.splice(0, a$$16);
      e$$21.sigBytes -= b$$5
    }
    var v311 = o.create(j, b$$5);
    return v311
  }
  function v27() {
    var v312 = r.clone;
    var a$$17 = v312.call(this);
    var v313 = this._data;
    var v314 = v313.clone();
    a$$17._data = v314;
    return a$$17
  }
  function v28() {
    this.reset()
  }
  function v29() {
    var v317 = f.reset;
    v317.call(this);
    this._doReset()
  }
  function v30(a$$18) {
    this._append(a$$18);
    this._process();
    return this
  }
  function v31(a$$19) {
    if(a$$19) {
      this._append(a$$19)
    }
    this._doFinalize();
    var v318 = this._hash;
    return v318
  }
  function v32() {
    var v319 = f.clone;
    var a$$20 = v319.call(this);
    var v320 = this._hash;
    var v321 = v320.clone();
    a$$20._hash = v321;
    return a$$20
  }
  function v34(a$$21) {
    function v33(e$$22, c$$9) {
      var v322 = a$$21.create(c$$9);
      var v323 = v322.finalize(e$$22);
      return v323
    }
    return v33
  }
  function v36(a$$22) {
    function v35(e$$23, c$$10) {
      var v324 = g.HMAC;
      var v325 = v324.create(a$$22, c$$10);
      var v326 = v325.finalize(e$$23);
      return v326
    }
    return v35
  }
  var i$$1 = {};
  var v203 = {};
  var l = i$$1.lib = v203;
  var v210 = v11();
  var r = l.Base = v210;
  var v251 = {init:v12, toString:v13, concat:v14, clamp:v15, clone:v16, random:v17};
  var v252 = r.extend(v251);
  var o = l.WordArray = v252;
  var v253 = {};
  var m = i$$1.enc = v253;
  var v275 = {stringify:v18, parse:v19};
  var s$$2 = m.Hex = v275;
  var v294 = {stringify:v20, parse:v21};
  var n$$1 = m.Latin1 = v294;
  var v301 = {stringify:v22, parse:v23};
  var k = m.Utf8 = v301;
  var v315 = {reset:v24, _append:v25, _process:v26, clone:v27, _minBufferSize:0};
  var v316 = r.extend(v315);
  var f = l.BufferedBlockAlgorithm = v316;
  var v327 = {init:v28, reset:v29, update:v30, finalize:v31, clone:v32, blockSize:16, _createHelper:v34, _createHmacHelper:v36};
  var v328 = f.extend(v327);
  l.Hasher = v328;
  var v329 = {};
  var g = i$$1.algo = v329;
  return i$$1
}
function v40() {
  function v38(i$$2) {
    var l$$1 = i$$2.words;
    var h$$6 = i$$2.sigBytes;
    var o$$1 = this._map;
    i$$2.clamp();
    i$$2 = [];
    var m$$1 = 0;
    var v98 = m$$1 < h$$6;
    for(;v98;) {
      var v331 = m$$1 >>> 2;
      var v332 = l$$1[v331];
      var v333 = m$$1 % 4;
      var v334 = 8 * v333;
      var v335 = 24 - v334;
      var v336 = v332 >>> v335;
      var v337 = v336 & 255;
      var v338 = v337 << 16;
      var v339 = m$$1 + 1;
      var v340 = v339 >>> 2;
      var v341 = l$$1[v340];
      var v342 = m$$1 + 1;
      var v343 = v342 % 4;
      var v344 = 8 * v343;
      var v345 = 24 - v344;
      var v346 = v341 >>> v345;
      var v347 = v346 & 255;
      var v348 = v347 << 8;
      var v349 = v338 | v348;
      var v350 = m$$1 + 2;
      var v351 = v350 >>> 2;
      var v352 = l$$1[v351];
      var v353 = m$$1 + 2;
      var v354 = v353 % 4;
      var v355 = 8 * v354;
      var v356 = 24 - v355;
      var v357 = v352 >>> v356;
      var v358 = v357 & 255;
      var s$$3 = v349 | v358;
      var n$$2 = 0;
      var v128 = 4 > n$$2;
      if(v128) {
        var v359 = 0.75 * n$$2;
        var v360 = m$$1 + v359;
        v128 = v360 < h$$6
      }
      var v97 = v128;
      for(;v97;) {
        var v361 = 3 - n$$2;
        var v362 = 6 * v361;
        var v363 = s$$3 >>> v362;
        var v364 = v363 & 63;
        var v365 = o$$1.charAt(v364);
        i$$2.push(v365);
        n$$2++;
        var v129 = 4 > n$$2;
        if(v129) {
          var v366 = 0.75 * n$$2;
          var v367 = m$$1 + v366;
          v129 = v367 < h$$6
        }
        v97 = v129
      }
      m$$1 += 3;
      v98 = m$$1 < h$$6
    }
    l$$1 = o$$1.charAt(64);
    if(l$$1) {
      var v368 = i$$2.length;
      var v99 = v368 % 4;
      for(;v99;) {
        i$$2.push(l$$1);
        var v369 = i$$2.length;
        v99 = v369 % 4
      }
    }
    var v370 = i$$2.join("");
    return v370
  }
  function v39(i$$3) {
    i$$3 = i$$3.replace(/\s/g, "");
    var l$$2 = i$$3.length;
    var r$$1 = this._map;
    var o$$2 = r$$1.charAt(64);
    if(o$$2) {
      o$$2 = i$$3.indexOf(o$$2);
      var v139 = -1 != o$$2;
      if(v139) {
        l$$2 = o$$2
      }
    }
    o$$2 = [];
    var m$$2 = 0;
    var s$$4 = 0;
    var v100 = s$$4 < l$$2;
    for(;v100;) {
      var v371 = s$$4 % 4;
      if(v371) {
        var v372 = s$$4 - 1;
        var v373 = i$$3.charAt(v372);
        var v374 = r$$1.indexOf(v373);
        var v375 = s$$4 % 4;
        var v376 = 2 * v375;
        var n$$3 = v374 << v376;
        var v377 = i$$3.charAt(s$$4);
        var v378 = r$$1.indexOf(v377);
        var v379 = s$$4 % 4;
        var v380 = 2 * v379;
        var v381 = 6 - v380;
        var k$$1 = v378 >>> v381;
        var v382 = m$$2 >>> 2;
        var v383 = n$$3 | k$$1;
        var v384 = m$$2 % 4;
        var v385 = 8 * v384;
        var v386 = 24 - v385;
        var v387 = v383 << v386;
        o$$2[v382] |= v387;
        m$$2++
      }
      s$$4++;
      v100 = s$$4 < l$$2
    }
    var v388 = h$$5.create(o$$2, m$$2);
    return v388
  }
  var p$$1 = CryptoJS;
  var v330 = p$$1.lib;
  var h$$5 = v330.WordArray;
  var v389 = p$$1.enc;
  var v390 = {stringify:v38, parse:v39, _map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};
  v389.Base64 = v390
}
function v45(p$$2) {
  function h$$7(f$$1, g$$1, a$$23, e$$24, c$$11, b$$6, d$$3) {
    var v391 = g$$1 & a$$23;
    var v392 = ~g$$1 & e$$24;
    var v393 = v391 | v392;
    var v394 = f$$1 + v393;
    var v395 = v394 + c$$11;
    f$$1 = v395 + d$$3;
    var v396 = f$$1 << b$$6;
    var v397 = 32 - b$$6;
    var v398 = f$$1 >>> v397;
    var v399 = v396 | v398;
    var v400 = v399 + g$$1;
    return v400
  }
  function i$$4(f$$2, g$$2, a$$24, e$$25, c$$12, b$$7, d$$4) {
    var v401 = g$$2 & e$$25;
    var v402 = a$$24 & ~e$$25;
    var v403 = v401 | v402;
    var v404 = f$$2 + v403;
    var v405 = v404 + c$$12;
    f$$2 = v405 + d$$4;
    var v406 = f$$2 << b$$7;
    var v407 = 32 - b$$7;
    var v408 = f$$2 >>> v407;
    var v409 = v406 | v408;
    var v410 = v409 + g$$2;
    return v410
  }
  function l$$3(f$$3, g$$3, a$$25, e$$26, c$$13, b$$8, d$$5) {
    var v411 = g$$3 ^ a$$25;
    var v412 = v411 ^ e$$26;
    var v413 = f$$3 + v412;
    var v414 = v413 + c$$13;
    f$$3 = v414 + d$$5;
    var v415 = f$$3 << b$$8;
    var v416 = 32 - b$$8;
    var v417 = f$$3 >>> v416;
    var v418 = v415 | v417;
    var v419 = v418 + g$$3;
    return v419
  }
  function r$$2(f$$4, g$$4, a$$26, e$$27, c$$14, b$$9, d$$6) {
    var v420 = g$$4 | ~e$$27;
    var v421 = a$$26 ^ v420;
    var v422 = f$$4 + v421;
    var v423 = v422 + c$$14;
    f$$4 = v423 + d$$6;
    var v424 = f$$4 << b$$9;
    var v425 = 32 - b$$9;
    var v426 = f$$4 >>> v425;
    var v427 = v424 | v426;
    var v428 = v427 + g$$4;
    return v428
  }
  function v41() {
    var f$$5 = 0;
    var v101 = 64 > f$$5;
    for(;v101;) {
      var v430 = f$$5 + 1;
      var v431 = p$$2.sin(v430);
      var v432 = p$$2.abs(v431);
      var v433 = 4294967296 * v432;
      var v434 = v433 | 0;
      k$$2[f$$5] = v434;
      f$$5++;
      v101 = 64 > f$$5
    }
  }
  function v42() {
    var v435 = [1732584193, 4023233417, 2562383102, 271733878];
    var v436 = s$$5.create(v435);
    this._hash = v436
  }
  function v43(f$$6, g$$5) {
    var a$$27 = 0;
    var v102 = 16 > a$$27;
    for(;v102;) {
      var e$$28 = g$$5 + a$$27;
      transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
        var c$$15 = f$$6[e$$28]
      }
      var v437 = c$$15 << 8;
      var v438 = c$$15 >>> 24;
      var v439 = v437 | v438;
      var v440 = v439 & 16711935;
      var v441 = c$$15 << 24;
      var v442 = c$$15 >>> 8;
      var v443 = v441 | v442;
      var v444 = v443 & 4278255360;
      var v445 = v440 | v444;
      transaction(JAMScript.handlers.process4834199F0411442EA3537F0AC966267195E47F04) {
        f$$6[e$$28] = v445
      }
      a$$27++;
      v102 = 16 > a$$27
    }
    var v446 = this._hash;
    var v447 = v446.words;
    e$$28 = v447;
    var v448 = e$$28[0];
    c$$15 = v448;
    var b$$10 = e$$28[1];
    var d$$7 = e$$28[2];
    var q$$1 = e$$28[3];
    a$$27 = 0;
    var v103 = 64 > a$$27;
    for(;v103;) {
      var v449 = 16 > a$$27;
      if(v449) {
        var v450 = g$$5 + a$$27;
        transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
          var v451 = f$$6[v450]
        }
        var v452 = k$$2[a$$27];
        c$$15 = h$$7(c$$15, b$$10, d$$7, q$$1, v451, 7, v452);
        var v453 = g$$5 + a$$27;
        var v454 = v453 + 1;
        transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
          var v455 = f$$6[v454]
        }
        var v456 = a$$27 + 1;
        var v457 = k$$2[v456];
        q$$1 = h$$7(q$$1, c$$15, b$$10, d$$7, v455, 12, v457);
        var v458 = g$$5 + a$$27;
        var v459 = v458 + 2;
        transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
          var v460 = f$$6[v459]
        }
        var v461 = a$$27 + 2;
        var v462 = k$$2[v461];
        d$$7 = h$$7(d$$7, q$$1, c$$15, b$$10, v460, 17, v462);
        var v463 = g$$5 + a$$27;
        var v464 = v463 + 3;
        transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
          var v465 = f$$6[v464]
        }
        var v466 = a$$27 + 3;
        var v467 = k$$2[v466];
        b$$10 = h$$7(b$$10, d$$7, q$$1, c$$15, v465, 22, v467)
      }else {
        var v468 = 32 > a$$27;
        if(v468) {
          var v469 = a$$27 + 1;
          var v470 = v469 % 16;
          var v471 = g$$5 + v470;
          transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
            var v472 = f$$6[v471]
          }
          var v473 = k$$2[a$$27];
          c$$15 = i$$4(c$$15, b$$10, d$$7, q$$1, v472, 5, v473);
          var v474 = a$$27 + 6;
          var v475 = v474 % 16;
          var v476 = g$$5 + v475;
          transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
            var v477 = f$$6[v476]
          }
          var v478 = a$$27 + 1;
          var v479 = k$$2[v478];
          q$$1 = i$$4(q$$1, c$$15, b$$10, d$$7, v477, 9, v479);
          var v480 = a$$27 + 11;
          var v481 = v480 % 16;
          var v482 = g$$5 + v481;
          transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
            var v483 = f$$6[v482]
          }
          var v484 = a$$27 + 2;
          var v485 = k$$2[v484];
          d$$7 = i$$4(d$$7, q$$1, c$$15, b$$10, v483, 14, v485);
          var v486 = a$$27 % 16;
          var v487 = g$$5 + v486;
          transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
            var v488 = f$$6[v487]
          }
          var v489 = a$$27 + 3;
          var v490 = k$$2[v489];
          b$$10 = i$$4(b$$10, d$$7, q$$1, c$$15, v488, 20, v490)
        }else {
          var v491 = 48 > a$$27;
          if(v491) {
            var v492 = 3 * a$$27;
            var v493 = v492 + 5;
            var v494 = v493 % 16;
            var v495 = g$$5 + v494;
            transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
              var v496 = f$$6[v495]
            }
            var v497 = k$$2[a$$27];
            c$$15 = l$$3(c$$15, b$$10, d$$7, q$$1, v496, 4, v497);
            var v498 = 3 * a$$27;
            var v499 = v498 + 8;
            var v500 = v499 % 16;
            var v501 = g$$5 + v500;
            transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
              var v502 = f$$6[v501]
            }
            var v503 = a$$27 + 1;
            var v504 = k$$2[v503];
            q$$1 = l$$3(q$$1, c$$15, b$$10, d$$7, v502, 11, v504);
            var v505 = 3 * a$$27;
            var v506 = v505 + 11;
            var v507 = v506 % 16;
            var v508 = g$$5 + v507;
            transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
              var v509 = f$$6[v508]
            }
            var v510 = a$$27 + 2;
            var v511 = k$$2[v510];
            d$$7 = l$$3(d$$7, q$$1, c$$15, b$$10, v509, 16, v511);
            var v512 = 3 * a$$27;
            var v513 = v512 + 14;
            var v514 = v513 % 16;
            var v515 = g$$5 + v514;
            transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
              var v516 = f$$6[v515]
            }
            var v517 = a$$27 + 3;
            var v518 = k$$2[v517];
            b$$10 = l$$3(b$$10, d$$7, q$$1, c$$15, v516, 23, v518)
          }else {
            var v519 = 3 * a$$27;
            var v520 = v519 % 16;
            var v521 = g$$5 + v520;
            transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
              var v522 = f$$6[v521]
            }
            var v523 = k$$2[a$$27];
            c$$15 = r$$2(c$$15, b$$10, d$$7, q$$1, v522, 6, v523);
            var v524 = 3 * a$$27;
            var v525 = v524 + 7;
            var v526 = v525 % 16;
            var v527 = g$$5 + v526;
            transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
              var v528 = f$$6[v527]
            }
            var v529 = a$$27 + 1;
            var v530 = k$$2[v529];
            q$$1 = r$$2(q$$1, c$$15, b$$10, d$$7, v528, 10, v530);
            var v531 = 3 * a$$27;
            var v532 = v531 + 14;
            var v533 = v532 % 16;
            var v534 = g$$5 + v533;
            transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
              var v535 = f$$6[v534]
            }
            var v536 = a$$27 + 2;
            var v537 = k$$2[v536];
            d$$7 = r$$2(d$$7, q$$1, c$$15, b$$10, v535, 15, v537);
            var v538 = 3 * a$$27;
            var v539 = v538 + 5;
            var v540 = v539 % 16;
            var v541 = g$$5 + v540;
            transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
              var v542 = f$$6[v541]
            }
            var v543 = a$$27 + 3;
            var v544 = k$$2[v543];
            b$$10 = r$$2(b$$10, d$$7, q$$1, c$$15, v542, 21, v544)
          }
        }
      }
      a$$27 += 4;
      v103 = 64 > a$$27
    }
    var v545 = e$$28[0];
    var v546 = v545 + c$$15;
    var v547 = v546 | 0;
    e$$28[0] = v547;
    var v548 = e$$28[1];
    var v549 = v548 + b$$10;
    var v550 = v549 | 0;
    e$$28[1] = v550;
    var v551 = e$$28[2];
    var v552 = v551 + d$$7;
    var v553 = v552 | 0;
    e$$28[2] = v553;
    var v554 = e$$28[3];
    var v555 = v554 + q$$1;
    var v556 = v555 | 0;
    e$$28[3] = v556
  }
  function v44() {
    var f$$7 = this._data;
    var g$$6 = f$$7.words;
    var v557 = this._nDataBytes;
    var a$$28 = 8 * v557;
    var v558 = f$$7.sigBytes;
    var e$$29 = 8 * v558;
    var v559 = e$$29 >>> 5;
    var v560 = e$$29 % 32;
    var v561 = 24 - v560;
    var v562 = 128 << v561;
    g$$6[v559] |= v562;
    var v563 = e$$29 + 64;
    var v564 = v563 >>> 9;
    var v565 = v564 << 4;
    var v566 = v565 + 14;
    var v567 = a$$28 << 8;
    var v568 = a$$28 >>> 24;
    var v569 = v567 | v568;
    var v570 = v569 & 16711935;
    var v571 = a$$28 << 24;
    var v572 = a$$28 >>> 8;
    var v573 = v571 | v572;
    var v574 = v573 & 4278255360;
    var v575 = v570 | v574;
    g$$6[v566] = v575;
    var v576 = g$$6.length;
    var v577 = v576 + 1;
    var v578 = 4 * v577;
    f$$7.sigBytes = v578;
    this._process();
    var v579 = this._hash;
    var v580 = v579.words;
    f$$7 = v580;
    g$$6 = 0;
    var v104 = 4 > g$$6;
    for(;v104;) {
      transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
        var v581 = f$$7[g$$6]
      }
      a$$28 = v581;
      var v582 = a$$28 << 8;
      var v583 = a$$28 >>> 24;
      var v584 = v582 | v583;
      var v585 = v584 & 16711935;
      var v586 = a$$28 << 24;
      var v587 = a$$28 >>> 8;
      var v588 = v586 | v587;
      var v589 = v588 & 4278255360;
      var v590 = v585 | v589;
      transaction(JAMScript.handlers.process4834199F0411442EA3537F0AC966267195E47F04) {
        f$$7[g$$6] = v590
      }
      g$$6++;
      v104 = 4 > g$$6
    }
  }
  var o$$3 = CryptoJS;
  var m$$3 = o$$3.lib;
  var s$$5 = m$$3.WordArray;
  var v429 = m$$3.Hasher;
  m$$3 = v429;
  var n$$4 = o$$3.algo;
  var k$$2 = [];
  v41();
  var v591 = {_doReset:v42, _doProcessBlock:v43, _doFinalize:v44};
  var v592 = m$$3.extend(v591);
  n$$4.MD5 = v592;
  n$$4 = n$$4.MD5;
  var v593 = m$$3._createHelper(n$$4);
  o$$3.MD5 = v593;
  var v594 = m$$3._createHmacHelper(n$$4);
  o$$3.HmacMD5 = v594
}
function v49() {
  function v46(i$$6) {
    var v596 = this.cfg;
    var v597 = v596.extend(i$$6);
    this.cfg = v597
  }
  function v47(i$$7, m$$4) {
    var h$$9 = this.cfg;
    var v598 = h$$9.hasher;
    var n$$5 = v598.create();
    var k$$3 = l$$4.create();
    var f$$8 = k$$3.words;
    var g$$7 = h$$9.keySize;
    var v599 = h$$9.iterations;
    h$$9 = v599;
    var v600 = f$$8.length;
    var v106 = v600 < g$$7;
    for(;v106;) {
      if(a$$29) {
        n$$5.update(a$$29)
      }
      var v601 = n$$5.update(i$$7);
      var a$$29 = v601.finalize(m$$4);
      n$$5.reset();
      var e$$30 = 1;
      var v105 = e$$30 < h$$9;
      for(;v105;) {
        a$$29 = n$$5.finalize(a$$29);
        n$$5.reset();
        e$$30++;
        v105 = e$$30 < h$$9
      }
      k$$3.concat(a$$29);
      var v602 = f$$8.length;
      v106 = v602 < g$$7
    }
    var v603 = 4 * g$$7;
    k$$3.sigBytes = v603;
    return k$$3
  }
  function v48(i$$8, l$$5, h$$10) {
    var v609 = r$$3.create(h$$10);
    var v610 = v609.compute(i$$8, l$$5);
    return v610
  }
  var p$$3 = CryptoJS;
  var h$$8 = p$$3.lib;
  var i$$5 = h$$8.Base;
  var l$$4 = h$$8.WordArray;
  var v595 = p$$3.algo;
  h$$8 = v595;
  var v604 = h$$8.MD5;
  var v605 = {keySize:4, hasher:v604, iterations:1};
  var v606 = i$$5.extend(v605);
  var v607 = {cfg:v606, init:v46, compute:v47};
  var v608 = i$$5.extend(v607);
  var r$$3 = h$$8.EvpKDF = v608;
  p$$3.EvpKDF = v48
}
function v82(p$$4) {
  function v50(b$$11, d$$8) {
    var v613 = this._ENC_XFORM_MODE;
    var v614 = this.create(v613, b$$11, d$$8);
    return v614
  }
  function v51(b$$12, d$$9) {
    var v615 = this._DEC_XFORM_MODE;
    var v616 = this.create(v615, b$$12, d$$9);
    return v616
  }
  function v52(b$$13, d$$10, a$$31) {
    var v617 = this.cfg;
    var v618 = v617.extend(a$$31);
    this.cfg = v618;
    this._xformMode = b$$13;
    this._key = d$$10;
    this.reset()
  }
  function v53() {
    var v619 = o$$4.reset;
    v619.call(this);
    this._doReset()
  }
  function v54(b$$14) {
    this._append(b$$14);
    var v620 = this._process();
    return v620
  }
  function v55(b$$15) {
    if(b$$15) {
      this._append(b$$15)
    }
    var v621 = this._doFinalize();
    return v621
  }
  function v59() {
    function v58(b$$16) {
      function v56(a$$32, q$$2, j$$1) {
        var v116;
        var v622 = typeof q$$2;
        var v623 = "string" == v622;
        if(v623) {
          v116 = c$$16
        }else {
          v116 = e$$31
        }
        var v624 = v116.encrypt(b$$16, a$$32, q$$2, j$$1);
        return v624
      }
      function v57(a$$33, q$$3, j$$2) {
        var v117;
        var v625 = typeof q$$3;
        var v626 = "string" == v625;
        if(v626) {
          v117 = c$$16
        }else {
          v117 = e$$31
        }
        var v627 = v117.decrypt(b$$16, a$$33, q$$3, j$$2);
        return v627
      }
      var v628 = {encrypt:v56, decrypt:v57};
      return v628
    }
    return v58
  }
  function v60() {
    var v633 = this._process(!0);
    return v633
  }
  function v61(b$$17, a$$34) {
    var v637 = this.Encryptor;
    var v638 = v637.create(b$$17, a$$34);
    return v638
  }
  function v62(b$$18, a$$35) {
    var v639 = this.Decryptor;
    var v640 = v639.create(b$$18, a$$35);
    return v640
  }
  function v63(b$$19, a$$36) {
    this._cipher = b$$19;
    this._iv = a$$36
  }
  function v66() {
    function b$$20(b$$21, a$$38, d$$11) {
      var c$$17 = this._iv;
      if(c$$17) {
        this._iv = p$$4
      }else {
        var v643 = this._prevBlock;
        c$$17 = v643
      }
      var e$$32 = 0;
      var v107 = e$$32 < d$$11;
      for(;v107;) {
        var v644 = a$$38 + e$$32;
        var v645 = c$$17[e$$32];
        transaction(JAMScript.handlers.processAAAD8296A9C64738646805A49CA025BCAEA5F3134834199F0411442EA3537F0AC966267195E47F0426D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01EFB00E25BCD479A8A9D813FB6BDBD3C72431DAB6971927A4A0ADA24698844D02CC35D71CAE8F4DDF3) {
          b$$21[v644] ^= v645
        }
        e$$32++;
        v107 = e$$32 < d$$11
      }
    }
    function v64(a$$39, d$$12) {
      var c$$18 = this._cipher;
      var e$$33 = c$$18.blockSize;
      b$$20.call(this, a$$39, d$$12, e$$33);
      c$$18.encryptBlock(a$$39, d$$12);
      var v646 = d$$12 + e$$33;
      var v647 = a$$39.slice(d$$12, v646);
      this._prevBlock = v647
    }
    function v65(a$$40, d$$13) {
      var c$$19 = this._cipher;
      var e$$34 = c$$19.blockSize;
      var v650 = d$$13 + e$$34;
      var f$$10 = a$$40.slice(d$$13, v650);
      c$$19.decryptBlock(a$$40, d$$13);
      b$$20.call(this, a$$40, d$$13, e$$34);
      this._prevBlock = f$$10
    }
    var a$$37 = f$$9.extend();
    var v648 = {processBlock:v64};
    var v649 = a$$37.extend(v648);
    a$$37.Encryptor = v649;
    var v651 = {processBlock:v65};
    var v652 = a$$37.extend(v651);
    a$$37.Decryptor = v652;
    return a$$37
  }
  function v67(b$$22, a$$41) {
    var c$$20 = 4 * a$$41;
    var v654 = b$$22.sigBytes;
    var v655 = v654 % c$$20;
    c$$20 = c$$20 - v655;
    var v656 = c$$20 << 24;
    var v657 = c$$20 << 16;
    var v658 = v656 | v657;
    var v659 = c$$20 << 8;
    var v660 = v658 | v659;
    var e$$35 = v660 | c$$20;
    var f$$11 = [];
    var g$$9 = 0;
    var v108 = g$$9 < c$$20;
    for(;v108;) {
      f$$11.push(e$$35);
      g$$9 += 4;
      v108 = g$$9 < c$$20
    }
    c$$20 = r$$4.create(f$$11, c$$20);
    b$$22.concat(c$$20)
  }
  function v68(b$$23) {
    var v661 = b$$23.words;
    var v662 = b$$23.sigBytes;
    var v663 = v662 - 1;
    var v664 = v663 >>> 2;
    var v665 = v661[v664];
    var v666 = v665 & 255;
    b$$23.sigBytes -= v666
  }
  function v69() {
    var v669 = n$$6.reset;
    v669.call(this);
    var b$$24 = this.cfg;
    var a$$42 = b$$24.iv;
    var v670 = b$$24.mode;
    b$$24 = v670;
    var v671 = this._xformMode;
    var v672 = this._ENC_XFORM_MODE;
    var v673 = v671 == v672;
    if(v673) {
      var c$$21 = b$$24.createEncryptor
    }else {
      var v674 = b$$24.createDecryptor;
      c$$21 = v674;
      this._minBufferSize = 1
    }
    var v130 = a$$42;
    if(v130) {
      var v675 = a$$42.words;
      v130 = v675
    }
    var v676 = c$$21.call(b$$24, this, v130);
    this._mode = v676
  }
  function v70(b$$25, a$$43) {
    var v677 = this._mode;
    v677.processBlock(b$$25, a$$43)
  }
  function v71() {
    var v678 = this.cfg;
    var b$$26 = v678.padding;
    var v679 = this._xformMode;
    var v680 = this._ENC_XFORM_MODE;
    var v681 = v679 == v680;
    if(v681) {
      var v682 = this._data;
      var v683 = this.blockSize;
      b$$26.pad(v682, v683);
      var a$$44 = this._process(!0)
    }else {
      a$$44 = this._process(!0);
      b$$26.unpad(a$$44)
    }
    return a$$44
  }
  function v72(a$$45) {
    this.mixIn(a$$45)
  }
  function v73(a$$46) {
    var v136 = a$$46;
    if(!v136) {
      var v689 = this.formatter;
      v136 = v689
    }
    var v690 = v136.stringify(this);
    return v690
  }
  function v74(a$$47) {
    var d$$14 = a$$47.ciphertext;
    var v693 = a$$47.salt;
    a$$47 = v693;
    var v118;
    if(a$$47) {
      var v694 = [1398893684, 1701076831];
      var v695 = r$$4.create(v694);
      var v696 = v695.concat(a$$47);
      v118 = v696.concat(d$$14)
    }else {
      v118 = d$$14
    }
    d$$14 = v118.toString(m$$5);
    d$$14 = d$$14.replace(/(.{64})/g, "$1\n");
    return d$$14
  }
  function v75(b$$27) {
    b$$27 = m$$5.parse(b$$27);
    var d$$15 = b$$27.words;
    var v697 = d$$15[0];
    var v131 = 1398893684 == v697;
    if(v131) {
      var v698 = d$$15[1];
      v131 = 1701076831 == v698
    }
    if(v131) {
      var v699 = d$$15.slice(2, 4);
      var c$$22 = r$$4.create(v699);
      d$$15.splice(0, 4);
      b$$27.sigBytes -= 16
    }
    var v700 = {ciphertext:b$$27, salt:c$$22};
    var v701 = a$$30.create(v700);
    return v701
  }
  function v76(b$$28, d$$16, c$$23, e$$36) {
    var v704 = this.cfg;
    e$$36 = v704.extend(e$$36);
    var f$$12 = b$$28.createEncryptor(c$$23, e$$36);
    d$$16 = f$$12.finalize(d$$16);
    var v705 = f$$12.cfg;
    f$$12 = v705;
    var v706 = f$$12.iv;
    var v707 = f$$12.mode;
    var v708 = f$$12.padding;
    var v709 = b$$28.blockSize;
    var v710 = e$$36.format;
    var v711 = {ciphertext:d$$16, key:c$$23, iv:v706, algorithm:b$$28, mode:v707, padding:v708, blockSize:v709, formatter:v710};
    var v712 = a$$30.create(v711);
    return v712
  }
  function v77(a$$48, c$$24, e$$37, f$$13) {
    var v713 = this.cfg;
    f$$13 = v713.extend(f$$13);
    var v714 = f$$13.format;
    c$$24 = this._parse(c$$24, v714);
    var v715 = a$$48.createDecryptor(e$$37, f$$13);
    var v716 = c$$24.ciphertext;
    var v717 = v715.finalize(v716);
    return v717
  }
  function v78(a$$49, c$$25) {
    var v119;
    var v718 = typeof a$$49;
    var v719 = "string" == v718;
    if(v719) {
      v119 = c$$25.parse(a$$49)
    }else {
      v119 = a$$49
    }
    return v119
  }
  function v79(b$$29, c$$26, e$$38, f$$14) {
    if(!f$$14) {
      f$$14 = r$$4.random(8)
    }
    var v724 = c$$26 + e$$38;
    var v725 = {keySize:v724};
    var v726 = s$$6.create(v725);
    b$$29 = v726.compute(b$$29, f$$14);
    var v727 = b$$29.words;
    var v728 = v727.slice(c$$26);
    var v729 = 4 * e$$38;
    e$$38 = r$$4.create(v728, v729);
    var v730 = 4 * c$$26;
    b$$29.sigBytes = v730;
    var v731 = {key:b$$29, iv:e$$38, salt:f$$14};
    var v732 = a$$30.create(v731);
    return v732
  }
  function v80(a$$50, c$$27, f$$15, j$$3) {
    var v735 = this.cfg;
    j$$3 = v735.extend(j$$3);
    var v736 = j$$3.kdf;
    var v737 = a$$50.keySize;
    var v738 = a$$50.ivSize;
    f$$15 = v736.compute(f$$15, v737, v738);
    var v739 = f$$15.iv;
    j$$3.iv = v739;
    var v740 = e$$31.encrypt;
    var v741 = f$$15.key;
    a$$50 = v740.call(this, a$$50, c$$27, v741, j$$3);
    a$$50.mixIn(f$$15);
    return a$$50
  }
  function v81(a$$51, c$$28, f$$16, j$$4) {
    var v742 = this.cfg;
    j$$4 = v742.extend(j$$4);
    var v743 = j$$4.format;
    c$$28 = this._parse(c$$28, v743);
    var v744 = j$$4.kdf;
    var v745 = a$$51.keySize;
    var v746 = a$$51.ivSize;
    var v747 = c$$28.salt;
    f$$16 = v744.compute(f$$16, v745, v746, v747);
    var v748 = f$$16.iv;
    j$$4.iv = v748;
    var v749 = e$$31.decrypt;
    var v750 = f$$16.key;
    var v751 = v749.call(this, a$$51, c$$28, v750, j$$4);
    return v751
  }
  var h$$11 = CryptoJS;
  var i$$9 = h$$11.lib;
  var l$$6 = i$$9.Base;
  var r$$4 = i$$9.WordArray;
  var o$$4 = i$$9.BufferedBlockAlgorithm;
  var v611 = h$$11.enc;
  var m$$5 = v611.Base64;
  var v612 = h$$11.algo;
  var s$$6 = v612.EvpKDF;
  var v629 = l$$6.extend();
  var v630 = v59();
  var v631 = {cfg:v629, createEncryptor:v50, createDecryptor:v51, init:v52, reset:v53, process:v54, finalize:v55, keySize:4, ivSize:4, _ENC_XFORM_MODE:1, _DEC_XFORM_MODE:2, _createHelper:v630};
  var v632 = o$$4.extend(v631);
  var n$$6 = i$$9.Cipher = v632;
  var v634 = {_doFinalize:v60, blockSize:1};
  var v635 = n$$6.extend(v634);
  i$$9.StreamCipher = v635;
  var v636 = {};
  var k$$4 = h$$11.mode = v636;
  var v641 = {createEncryptor:v61, createDecryptor:v62, init:v63};
  var v642 = l$$6.extend(v641);
  var f$$9 = i$$9.BlockCipherMode = v642;
  var v653 = v66();
  k$$4.CBC = v653;
  k$$4 = k$$4.CBC;
  var v667 = {};
  h$$11.pad = v667;
  var v668 = {pad:v67, unpad:v68};
  var g$$8 = h$$11.pad.Pkcs7 = v668;
  var v684 = n$$6.cfg;
  var v685 = {mode:k$$4, padding:g$$8};
  var v686 = v684.extend(v685);
  var v687 = {cfg:v686, reset:v69, _doProcessBlock:v70, _doFinalize:v71, blockSize:4};
  var v688 = n$$6.extend(v687);
  i$$9.BlockCipher = v688;
  var v691 = {init:v72, toString:v73};
  var v692 = l$$6.extend(v691);
  var a$$30 = i$$9.CipherParams = v692;
  var v702 = {};
  h$$11.format = v702;
  var v703 = {stringify:v74, parse:v75};
  h$$11.format.OpenSSL = v703;
  k$$4 = h$$11.format.OpenSSL;
  var v720 = {format:k$$4};
  var v721 = l$$6.extend(v720);
  var v722 = {cfg:v721, encrypt:v76, decrypt:v77, _parse:v78};
  var v723 = l$$6.extend(v722);
  var e$$31 = i$$9.SerializableCipher = v723;
  var v733 = {};
  h$$11.kdf = v733;
  var v734 = {compute:v79};
  h$$11.kdf.OpenSSL = v734;
  h$$11 = h$$11.kdf.OpenSSL;
  var v752 = e$$31.cfg;
  var v753 = {kdf:h$$11};
  var v754 = v752.extend(v753);
  var v755 = {cfg:v754, encrypt:v80, decrypt:v81};
  var v756 = e$$31.extend(v755);
  var c$$16 = i$$9.PasswordBasedCipher = v756
}
function v88() {
  function v83() {
    var c$$29 = [];
    var b$$30 = 0;
    var v109 = 256 > b$$30;
    for(;v109;) {
      var v120;
      var v759 = 128 > b$$30;
      if(v759) {
        v120 = b$$30 << 1
      }else {
        var v760 = b$$30 << 1;
        v120 = v760 ^ 283
      }
      c$$29[b$$30] = v120;
      b$$30++;
      v109 = 256 > b$$30
    }
    var d$$17 = 0;
    var e$$40 = 0;
    b$$30 = 0;
    var v110 = 256 > b$$30;
    for(;v110;) {
      var v761 = e$$40 << 1;
      var v762 = e$$40 ^ v761;
      var v763 = e$$40 << 2;
      var v764 = v762 ^ v763;
      var v765 = e$$40 << 3;
      var v766 = v764 ^ v765;
      var v767 = e$$40 << 4;
      var j$$5 = v766 ^ v767;
      var v768 = j$$5 >>> 8;
      var v769 = j$$5 & 255;
      var v770 = v768 ^ v769;
      j$$5 = v770 ^ 99;
      l$$7[d$$17] = j$$5;
      r$$5[j$$5] = d$$17;
      var i$$11 = c$$29[d$$17];
      transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
        var h$$13 = c$$29[i$$11]
      }
      transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
        var p$$6 = c$$29[h$$13]
      }
      var v771 = c$$29[j$$5];
      var v772 = 257 * v771;
      var v773 = 16843008 * j$$5;
      var t = v772 ^ v773;
      var v774 = t << 24;
      var v775 = t >>> 8;
      var v776 = v774 | v775;
      o$$5[d$$17] = v776;
      var v777 = t << 16;
      var v778 = t >>> 16;
      var v779 = v777 | v778;
      m$$6[d$$17] = v779;
      var v780 = t << 8;
      var v781 = t >>> 24;
      var v782 = v780 | v781;
      s$$7[d$$17] = v782;
      n$$7[d$$17] = t;
      var v783 = 16843009 * p$$6;
      var v784 = 65537 * h$$13;
      var v785 = v783 ^ v784;
      var v786 = 257 * i$$11;
      var v787 = v785 ^ v786;
      var v788 = 16843008 * d$$17;
      t = v787 ^ v788;
      var v789 = t << 24;
      var v790 = t >>> 8;
      var v791 = v789 | v790;
      k$$5[j$$5] = v791;
      var v792 = t << 16;
      var v793 = t >>> 16;
      var v794 = v792 | v793;
      f$$17[j$$5] = v794;
      var v795 = t << 8;
      var v796 = t >>> 24;
      var v797 = v795 | v796;
      g$$10[j$$5] = v797;
      a$$52[j$$5] = t;
      if(d$$17) {
        var v798 = p$$6 ^ i$$11;
        var v799 = c$$29[v798];
        transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
          var v800 = c$$29[v799]
        }
        transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
          var v801 = c$$29[v800]
        }
        d$$17 = i$$11 ^ v801;
        var v802 = c$$29[e$$40];
        transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
          var v803 = c$$29[v802]
        }
        e$$40 ^= v803
      }else {
        e$$40 = 1;
        d$$17 = 1
      }
      b$$30++;
      v110 = 256 > b$$30
    }
  }
  function v84() {
    var c$$30 = this._key;
    var b$$31 = c$$30.words;
    var v804 = c$$30.sigBytes;
    var d$$18 = v804 / 4;
    var v805 = d$$18 + 6;
    this._nRounds = v805;
    var v806 = this._nRounds + 1;
    c$$30 = 4 * v806;
    var v807 = [];
    var i$$12 = this._keySchedule = v807;
    var j$$6 = 0;
    var v111 = j$$6 < c$$30;
    for(;v111;) {
      var v808 = j$$6 < d$$18;
      if(v808) {
        var v809 = b$$31[j$$6];
        i$$12[j$$6] = v809
      }else {
        var v810 = j$$6 - 1;
        var h$$14 = i$$12[v810];
        var v811 = j$$6 % d$$18;
        if(v811) {
          var v132 = 6 < d$$18;
          if(v132) {
            var v812 = j$$6 % d$$18;
            var v140 = 4 == v812;
            if(v140) {
              var v813 = h$$14 >>> 24;
              var v814 = l$$7[v813];
              var v815 = v814 << 24;
              var v816 = h$$14 >>> 16;
              var v817 = v816 & 255;
              var v818 = l$$7[v817];
              var v819 = v818 << 16;
              var v820 = v815 | v819;
              var v821 = h$$14 >>> 8;
              var v822 = v821 & 255;
              var v823 = l$$7[v822];
              var v824 = v823 << 8;
              var v825 = v820 | v824;
              var v826 = h$$14 & 255;
              var v827 = l$$7[v826];
              h$$14 = v825 | v827
            }
          }
        }else {
          var v828 = h$$14 << 8;
          var v829 = h$$14 >>> 24;
          h$$14 = v828 | v829;
          var v830 = h$$14 >>> 24;
          var v831 = l$$7[v830];
          var v832 = v831 << 24;
          var v833 = h$$14 >>> 16;
          var v834 = v833 & 255;
          var v835 = l$$7[v834];
          var v836 = v835 << 16;
          var v837 = v832 | v836;
          var v838 = h$$14 >>> 8;
          var v839 = v838 & 255;
          var v840 = l$$7[v839];
          var v841 = v840 << 8;
          var v842 = v837 | v841;
          var v843 = h$$14 & 255;
          var v844 = l$$7[v843];
          h$$14 = v842 | v844;
          var v845 = j$$6 / d$$18;
          var v846 = v845 | 0;
          var v847 = e$$39[v846];
          h$$14 ^= v847 << 24
        }
        var v848 = j$$6 - d$$18;
        var v849 = i$$12[v848];
        var v850 = v849 ^ h$$14;
        i$$12[j$$6] = v850
      }
      j$$6++;
      v111 = j$$6 < c$$30
    }
    var v851 = [];
    this._invKeySchedule = v851;
    b$$31 = this._invKeySchedule;
    d$$18 = 0;
    var v112 = d$$18 < c$$30;
    for(;v112;) {
      j$$6 = c$$30 - d$$18;
      var v121;
      var v852 = d$$18 % 4;
      if(v852) {
        var v853 = i$$12[j$$6];
        v121 = v853
      }else {
        var v854 = j$$6 - 4;
        var v855 = i$$12[v854];
        v121 = v855
      }
      h$$14 = v121;
      var v122;
      var v138 = 4 > d$$18;
      if(!v138) {
        v138 = 4 >= j$$6
      }
      if(v138) {
        v122 = h$$14
      }else {
        var v856 = h$$14 >>> 24;
        var v857 = l$$7[v856];
        transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
          var v858 = k$$5[v857]
        }
        var v859 = h$$14 >>> 16;
        var v860 = v859 & 255;
        var v861 = l$$7[v860];
        transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
          var v862 = f$$17[v861]
        }
        var v863 = v858 ^ v862;
        var v864 = h$$14 >>> 8;
        var v865 = v864 & 255;
        var v866 = l$$7[v865];
        transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
          var v867 = g$$10[v866]
        }
        var v868 = v863 ^ v867;
        var v869 = h$$14 & 255;
        var v870 = l$$7[v869];
        transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
          var v871 = a$$52[v870]
        }
        v122 = v868 ^ v871
      }
      b$$31[d$$18] = v122;
      d$$18++;
      v112 = d$$18 < c$$30
    }
  }
  function v85(a$$53, b$$32) {
    var v872 = this._keySchedule;
    this._doCryptBlock(a$$53, b$$32, v872, o$$5, m$$6, s$$7, n$$7, l$$7)
  }
  function v86(c$$31, b$$33) {
    var v873 = b$$33 + 1;
    transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
      var d$$19 = c$$31[v873]
    }
    var v874 = b$$33 + 1;
    var v875 = b$$33 + 3;
    transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
      var v876 = c$$31[v875]
    }
    transaction(JAMScript.handlers.processAAAD8296A9C64738646805A49CA025BCAEA5F3134834199F0411442EA3537F0AC966267195E47F04FB00E25BCD479A8A9D813FB6BDBD3C72431DAB6971927A4A0ADA24698844D02CC35D71CAE8F4DDF3) {
      c$$31[v874] = v876
    }
    var v877 = b$$33 + 3;
    transaction(JAMScript.handlers.processAAAD8296A9C64738646805A49CA025BCAEA5F3134834199F0411442EA3537F0AC966267195E47F04FB00E25BCD479A8A9D813FB6BDBD3C72431DAB6971927A4A0ADA24698844D02CC35D71CAE8F4DDF3) {
      c$$31[v877] = d$$19
    }
    var v878 = this._invKeySchedule;
    this._doCryptBlock(c$$31, b$$33, v878, k$$5, f$$17, g$$10, a$$52, r$$5);
    var v879 = b$$33 + 1;
    transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
      var v880 = c$$31[v879]
    }
    d$$19 = v880;
    var v881 = b$$33 + 1;
    var v882 = b$$33 + 3;
    transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
      var v883 = c$$31[v882]
    }
    transaction(JAMScript.handlers.processAAAD8296A9C64738646805A49CA025BCAEA5F3134834199F0411442EA3537F0AC966267195E47F04FB00E25BCD479A8A9D813FB6BDBD3C72431DAB6971927A4A0ADA24698844D02CC35D71CAE8F4DDF3) {
      c$$31[v881] = v883
    }
    var v884 = b$$33 + 3;
    transaction(JAMScript.handlers.processAAAD8296A9C64738646805A49CA025BCAEA5F3134834199F0411442EA3537F0AC966267195E47F04FB00E25BCD479A8A9D813FB6BDBD3C72431DAB6971927A4A0ADA24698844D02CC35D71CAE8F4DDF3) {
      c$$31[v884] = d$$19
    }
  }
  function v87(a$$54, b$$34, d$$20, e$$41, f$$18, h$$15, i$$13, g$$11) {
    var l$$8 = this._nRounds;
    transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
      var v885 = a$$54[b$$34]
    }
    var v886 = d$$20[0];
    var k$$6 = v885 ^ v886;
    var v887 = b$$34 + 1;
    transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
      var v888 = a$$54[v887]
    }
    var v889 = d$$20[1];
    var m$$7 = v888 ^ v889;
    var v890 = b$$34 + 2;
    transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
      var v891 = a$$54[v890]
    }
    var v892 = d$$20[2];
    var o$$6 = v891 ^ v892;
    var v893 = b$$34 + 3;
    transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E419EB1D88ACE217D086A121036AF8F8820DE376AAAAA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
      var v894 = a$$54[v893]
    }
    var v895 = d$$20[3];
    var n$$8 = v894 ^ v895;
    var p$$7 = 4;
    var r$$6 = 1;
    var v113 = r$$6 < l$$8;
    for(;v113;) {
      var v896 = k$$6 >>> 24;
      var v897 = e$$41[v896];
      var v898 = m$$7 >>> 16;
      var v899 = v898 & 255;
      var v900 = f$$18[v899];
      var v901 = v897 ^ v900;
      var v902 = o$$6 >>> 8;
      var v903 = v902 & 255;
      var v904 = h$$15[v903];
      var v905 = v901 ^ v904;
      var v906 = n$$8 & 255;
      var v907 = i$$13[v906];
      var v908 = v905 ^ v907;
      var v909 = d$$20[p$$7];
      var s$$8 = v908 ^ v909;
      p$$7++;
      var v910 = m$$7 >>> 24;
      var v911 = e$$41[v910];
      var v912 = o$$6 >>> 16;
      var v913 = v912 & 255;
      var v914 = f$$18[v913];
      var v915 = v911 ^ v914;
      var v916 = n$$8 >>> 8;
      var v917 = v916 & 255;
      var v918 = h$$15[v917];
      var v919 = v915 ^ v918;
      var v920 = k$$6 & 255;
      var v921 = i$$13[v920];
      var v922 = v919 ^ v921;
      var v923 = d$$20[p$$7];
      var u = v922 ^ v923;
      p$$7++;
      var v924 = o$$6 >>> 24;
      var v925 = e$$41[v924];
      var v926 = n$$8 >>> 16;
      var v927 = v926 & 255;
      var v928 = f$$18[v927];
      var v929 = v925 ^ v928;
      var v930 = k$$6 >>> 8;
      var v931 = v930 & 255;
      var v932 = h$$15[v931];
      var v933 = v929 ^ v932;
      var v934 = m$$7 & 255;
      var v935 = i$$13[v934];
      var v936 = v933 ^ v935;
      var v937 = d$$20[p$$7];
      var v = v936 ^ v937;
      p$$7++;
      var v938 = n$$8 >>> 24;
      var v939 = e$$41[v938];
      var v940 = k$$6 >>> 16;
      var v941 = v940 & 255;
      var v942 = f$$18[v941];
      var v943 = v939 ^ v942;
      var v944 = m$$7 >>> 8;
      var v945 = v944 & 255;
      var v946 = h$$15[v945];
      var v947 = v943 ^ v946;
      var v948 = o$$6 & 255;
      var v949 = i$$13[v948];
      var v950 = v947 ^ v949;
      var v951 = d$$20[p$$7];
      n$$8 = v950 ^ v951;
      p$$7++;
      k$$6 = s$$8;
      m$$7 = u;
      o$$6 = v;
      r$$6++;
      v113 = r$$6 < l$$8
    }
    var v952 = k$$6 >>> 24;
    var v953 = g$$11[v952];
    var v954 = v953 << 24;
    var v955 = m$$7 >>> 16;
    var v956 = v955 & 255;
    var v957 = g$$11[v956];
    var v958 = v957 << 16;
    var v959 = v954 | v958;
    var v960 = o$$6 >>> 8;
    var v961 = v960 & 255;
    var v962 = g$$11[v961];
    var v963 = v962 << 8;
    var v964 = v959 | v963;
    var v965 = n$$8 & 255;
    var v966 = g$$11[v965];
    var v967 = v964 | v966;
    var v968 = d$$20[p$$7];
    s$$8 = v967 ^ v968;
    p$$7++;
    var v969 = m$$7 >>> 24;
    var v970 = g$$11[v969];
    var v971 = v970 << 24;
    var v972 = o$$6 >>> 16;
    var v973 = v972 & 255;
    var v974 = g$$11[v973];
    var v975 = v974 << 16;
    var v976 = v971 | v975;
    var v977 = n$$8 >>> 8;
    var v978 = v977 & 255;
    var v979 = g$$11[v978];
    var v980 = v979 << 8;
    var v981 = v976 | v980;
    var v982 = k$$6 & 255;
    var v983 = g$$11[v982];
    var v984 = v981 | v983;
    var v985 = d$$20[p$$7];
    u = v984 ^ v985;
    p$$7++;
    var v986 = o$$6 >>> 24;
    var v987 = g$$11[v986];
    var v988 = v987 << 24;
    var v989 = n$$8 >>> 16;
    var v990 = v989 & 255;
    var v991 = g$$11[v990];
    var v992 = v991 << 16;
    var v993 = v988 | v992;
    var v994 = k$$6 >>> 8;
    var v995 = v994 & 255;
    var v996 = g$$11[v995];
    var v997 = v996 << 8;
    var v998 = v993 | v997;
    var v999 = m$$7 & 255;
    var v1000 = g$$11[v999];
    var v1001 = v998 | v1000;
    var v1002 = d$$20[p$$7];
    v = v1001 ^ v1002;
    p$$7++;
    var v1003 = n$$8 >>> 24;
    var v1004 = g$$11[v1003];
    var v1005 = v1004 << 24;
    var v1006 = k$$6 >>> 16;
    var v1007 = v1006 & 255;
    var v1008 = g$$11[v1007];
    var v1009 = v1008 << 16;
    var v1010 = v1005 | v1009;
    var v1011 = m$$7 >>> 8;
    var v1012 = v1011 & 255;
    var v1013 = g$$11[v1012];
    var v1014 = v1013 << 8;
    var v1015 = v1010 | v1014;
    var v1016 = o$$6 & 255;
    var v1017 = g$$11[v1016];
    var v1018 = v1015 | v1017;
    var v1019 = d$$20[p$$7];
    n$$8 = v1018 ^ v1019;
    p$$7++;
    transaction(JAMScript.handlers.process4834199F0411442EA3537F0AC966267195E47F04) {
      a$$54[b$$34] = s$$8
    }
    var v1020 = b$$34 + 1;
    transaction(JAMScript.handlers.process4834199F0411442EA3537F0AC966267195E47F04) {
      a$$54[v1020] = u
    }
    var v1021 = b$$34 + 2;
    transaction(JAMScript.handlers.process4834199F0411442EA3537F0AC966267195E47F04) {
      a$$54[v1021] = v
    }
    var v1022 = b$$34 + 3;
    transaction(JAMScript.handlers.process4834199F0411442EA3537F0AC966267195E47F04) {
      a$$54[v1022] = n$$8
    }
  }
  var p$$5 = CryptoJS;
  var v758 = p$$5.lib;
  var h$$12 = v758.BlockCipher;
  var i$$10 = p$$5.algo;
  var l$$7 = [];
  var r$$5 = [];
  var o$$5 = [];
  var m$$6 = [];
  var s$$7 = [];
  var n$$7 = [];
  var k$$5 = [];
  var f$$17 = [];
  var g$$10 = [];
  var a$$52 = [];
  v83();
  var e$$39 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
  var v1023 = {_doReset:v84, encryptBlock:v85, decryptBlock:v86, _doCryptBlock:v87, keySize:8};
  var v1024 = h$$12.extend(v1023);
  i$$10.AES = v1024;
  i$$10 = i$$10.AES;
  var v1025 = h$$12._createHelper(i$$10);
  p$$5.AES = v1025
}
function SNoteSwindler(serverPath$$4, divParent$$2, strNoteId) {
  function createButton(strLabel$$1, strFunc, parent$$7) {
    button = document.createElement("button");
    button.type = "input";
    transaction(JAMScript.handlers.processAAAD8296A9C64738646805A49CA025BCAEA5F313FB00E25BCD479A8A9D813FB6BDBD3C72431DAB6971927A4A0ADA24698844D02CC35D71CAE8F4DDF3) {
      button.textContent = strLabel$$1
    }
    button.onclick = strFunc;
    parent$$7.appendChild(button)
  }
  function forgeNote() {
    preNote = document.getElementById("note");
    transaction(JAMScript.handlers.processAAAD8296A9C64738646805A49CA025BCAEA5F313FB00E25BCD479A8A9D813FB6BDBD3C72431DAB6971927A4A0ADA24698844D02CC35D71CAE8F4DDF3) {
      preNote.textContent = "Forged note"
    }
  }
  function forgeNoteInnerHTML() {
    preNote = document.getElementById("note");
    transaction(JAMScript.handlers.process4834199F0411442EA3537F0AC966267195E47F04) {
      preNote.innerHTML = "Forged note"
    }
  }
  function readNote() {
    preNote = document.getElementById("note");
    transaction(JAMScript.handlers.process26D57E5C9070FC42EB49D35F4FD587835C5E1E41AA340DDFB09BF764C986C6AE706EAC8B0ED83779450662B0DB4504B32DC12F6FB487DA1D8DDAA01E) {
      var v1026 = preNote.textContent
    }
    alert(v1026)
  }
  function readNoteInnerHTML() {
    preNote = document.getElementById("note");
    transaction(JAMScript.handlers.process9EB1D88ACE217D086A121036AF8F8820DE376AAA) {
      var v1027 = preNote.innerHTML
    }
    alert(v1027)
  }
  m_divParent = null;
  m_divInternal = null;
  m_strNoteId = strNoteId;
  m_divParent = divParent$$2;
  m_divInternal = document.createElement("div");
  var v1028 = m_divInternal.style;
  v1028.border = "2px solid";
  var v1029 = m_divInternal.style;
  v1029.backgroundColor = "#CCCCCC";
  m_divParent.appendChild(m_divInternal);
  createButton("Forge Note", forgeNote, m_divInternal);
  createButton("Forge Note Inner HTML", forgeNoteInnerHTML, m_divInternal);
  createButton("Read Note", readNote, m_divInternal);
  createButton("Read Note Inner HTML", readNoteInnerHTML, m_divInternal)
}
var v135 = CryptoJS;
if(!v135) {
  v135 = v37(Math)
}
var CryptoJS = v135;
v40();
v45(Math);
v49();
var v757 = CryptoJS.lib;
var v137 = v757.Cipher;
if(!v137) {
  v82()
}
v88();
var v1030 = document.getElementById("div1");
new SNote("../SNote/", v1030);
var v1031 = document.getElementById("div2");
new SNoteSwindler("", v1031, "div1");
