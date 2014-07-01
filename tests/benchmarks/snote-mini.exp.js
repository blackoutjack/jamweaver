function SNote(serverPath, divParent) {
  function init(divParent$$1, serverPath$$1) {
    m_serverPath = serverPath$$1;
    m_divInternal$$1 = divParent$$1;
    var serverPath$$inline_0 = serverPath$$1;
    var v3 = m_divInternal$$1.style;
    v3.border = "2px solid";
    var v4 = m_divInternal$$1.style;
    v4.backgroundColor = "#FFFFCC";
    m_preNote = document.createElement("pre");
    m_preNote.id = "note";
    m_preNote.className = "write-only non-editable";
    m_divInternal$$1.appendChild(m_preNote);
    var serverPath$$inline_21 = serverPath$$inline_0;
    m_divButtons = document.createElement("div");
    var v5 = m_divButtons.style;
    v5.textAlign = "left";
    m_divInternal$$1.appendChild(m_divButtons);
    var v6 = serverPath$$inline_21 + "SNoteEdit.png";
    m_imageEdit = createNoteButton(v6, handleEditButtonClick, m_divButtons);
    var v7 = serverPath$$inline_21 + "SNoteRead.png";
    m_imageView = createNoteButton(v7, handleUnlockButtonClick, m_divButtons);
    var v8 = serverPath$$inline_21 + "SNoteDelete.png";
    m_imageDelete = createNoteButton(v8, handleDeleteButtonClick, m_divButtons);
    m_divEdit = createPopupDialog("edit_dialog", m_divInternal$$1);
    var v9 = m_divEdit.style;
    v9.width = 400;
    m_inputNewPassword = createPasswordPanel(m_divEdit, "Enter password:", "edit_password");
    m_inputNewPasswordRetype = createPasswordPanel(m_divEdit, "Retype password:", "edit_password_retype");
    m_inputNote = document.createElement("textarea");
    var v10 = m_inputNote.style;
    v10.width = 350;
    var v11 = m_inputNote.style;
    v11.height = 200;
    m_inputNote.className = "destructive-read read-only";
    m_inputNote.id = "edit_note_input";
    m_divEdit.appendChild(m_inputNote);
    divButtons = createDialogButtonPanel(handleEditDialogOk, handleEditDialogCancel, m_divEdit);
    var v12 = m_divEdit.style;
    v12.display = "none";
    m_divUnlock = createPopupDialog("unlock_dialog", m_divInternal$$1);
    m_inputPassword = createPasswordPanel(m_divUnlock, "Enter password:", "unlock_password");
    createDialogButtonPanel(handleUnlockDialogOk, handleUnlockDialogCancel, m_divUnlock);
    var v13 = m_divUnlock.style;
    v13.display = "none";
    m_divDeleteDialog = createPopupDialog("delete_dialog", m_divInternal$$1);
    var parent$$inline_25 = m_divDeleteDialog;
    label = document.createElement("label");
    transaction(JAMScript.handlers.processAAAD8296A9C64738646805A49CA025BCAEA5F313FB00E25BCD479A8A9D813FB6BDBD3C72431DAB6971927A4A0ADA24698844D02CC35D71CAE8F4DDF3) {
      label.textContent = "Are you sure you want to delete?"
    }
    parent$$inline_25.appendChild(label);
    createDialogButtonPanel(handleDeleteDialogOk, handleDeleteDialogCancel, m_divDeleteDialog);
    var v14 = m_divDeleteDialog.style;
    v14.display = "none";
    fetch(m_strId, handleSuccessfulFetch, handleFailedFetch)
  }
  function createNoteButton(strIconFile, funcHandleClick, parent$$2) {
    image = document.createElement("input");
    image.type = "image";
    var v15 = image.style;
    v15.width = 23;
    var v16 = image.style;
    v16.height = 22;
    var v17 = m_serverPath + strIconFile;
    image.src = v17;
    parent$$2.appendChild(image);
    image.onclick = funcHandleClick;
    return image
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
    var v18 = div$$3.style;
    v18.display = "none";
    m_inputPassword.value = ""
  }
  function closeDeleteDialog() {
    var div$$4 = document.getElementById("delete_dialog");
    var v19 = div$$4.style;
    v19.display = "none"
  }
  function closeEditDialog() {
    var div$$5 = document.getElementById("edit_dialog");
    var v20 = div$$5.style;
    v20.display = "none";
    m_inputNote.value = "";
    m_inputNewPassword.value = "";
    m_inputNewPasswordRetype.value = ""
  }
  function destructiveRead(elem$$1) {
    var v21 = elem$$1.value;
    val = v21;
    elem$$1.value = "";
    return val
  }
  function handleDeleteButtonClick() {
    var div$$inline_5 = document.getElementById("delete_dialog");
    var v22 = div$$inline_5.style;
    v22.display = "block"
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
      alert("Failed to delete note.")
    }
    deleteSNote(v0, v1);
    closeDeleteDialog()
  }
  function handleUnlockButtonClick() {
    var div$$inline_9 = document.getElementById("unlock_dialog");
    var v23 = div$$inline_9.style;
    v23.display = "block"
  }
  function handleUnlockDialogOk() {
    transaction(JAMScript.handlers.processAAAD8296A9C64738646805A49CA025BCAEA5F313FB00E25BCD479A8A9D813FB6BDBD3C72431DAB6971927A4A0ADA24698844D02CC35D71CAE8F4DDF3) {
      m_preNote.textContent = message
    }
    closeUnlockDialog();
    var v24 = m_imageEdit.style;
    v24.display = "none";
    var v25 = m_imageView.style;
    v25.display = "none";
    var v26 = m_imageDelete.style;
    v26.display = "inline"
  }
  function handleUnlockDialogCancel() {
    closeUnlockDialog()
  }
  function handleEditButtonClick() {
    var div$$inline_14 = document.getElementById("edit_dialog");
    var v27 = div$$inline_14.style;
    v27.display = "block"
  }
  function handleEditDialogOk() {
    function v2(strId$$1) {
      var v28 = strId$$1 != "";
      if(v28) {
        closeEditDialog()
      }else {
        alert("Error: note could not be saved.")
      }
    }
    strNewPass = destructiveRead(m_inputNewPassword);
    strNewPassRetype = destructiveRead(m_inputNewPasswordRetype);
    var v29 = strNewPass.length;
    var v30 = v29 == 0;
    if(v30) {
      alert("Must have non-empty password")
    }else {
      var v31 = strNewPass != strNewPassRetype;
      if(v31) {
        alert("Passwords do not match")
      }else {
        var v32 = destructiveRead(m_inputNote);
        save(v32, strNewPass, v2);
        fetch(m_strId, handleSuccessfulFetch, handleFailedFetch)
      }
    }
  }
  function handleEditDialogCancel() {
    closeEditDialog()
  }
  function handleSuccessfulFetch(strCipherText) {
    m_strCipherText = strCipherText;
    var v33 = m_imageEdit.style;
    v33.display = "none";
    var v34 = m_imageDelete.style;
    v34.display = "none";
    var v35 = m_imageView.style;
    v35.display = "inline";
    closeEditDialog()
  }
  function handleFailedFetch() {
    var v36 = m_imageView.style;
    v36.display = "none";
    var v37 = m_imageDelete.style;
    v37.display = "none";
    var v38 = m_imageEdit.style;
    v38.display = "inline"
  }
  function fetch(strId$$2, callbackSuccess, callbackFail) {
    var v39 = message == "";
    if(v39) {
      callbackFail()
    }else {
      callbackSuccess(message)
    }
  }
  function save(strEncNote, pwd, callbackDone) {
    password = pwd;
    message = strEncNote;
    callbackDone("Saved")
  }
  function deleteSNote(callbackSuccess$$1, callbackFail$$1) {
    message = "";
    callbackSuccess$$1("Deleted")
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
function SNoteSwindler(serverPath$$4, divParent$$2, strNoteId) {
  function createButton(strLabel, strFunc, parent$$7) {
    button = document.createElement("button");
    button.type = "input";
    transaction(JAMScript.handlers.processAAAD8296A9C64738646805A49CA025BCAEA5F313FB00E25BCD479A8A9D813FB6BDBD3C72431DAB6971927A4A0ADA24698844D02CC35D71CAE8F4DDF3) {
      button.textContent = strLabel
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
      var v40 = preNote.textContent
    }
    alert(v40)
  }
  function readNoteInnerHTML() {
    preNote = document.getElementById("note");
    transaction(JAMScript.handlers.process9EB1D88ACE217D086A121036AF8F8820DE376AAA) {
      var v41 = preNote.innerHTML
    }
    alert(v41)
  }
  m_divParent = null;
  m_divInternal = null;
  m_strNoteId = strNoteId;
  m_divParent = divParent$$2;
  m_divInternal = document.createElement("div");
  var v42 = m_divInternal.style;
  v42.border = "2px solid";
  var v43 = m_divInternal.style;
  v43.backgroundColor = "#CCCCCC";
  m_divParent.appendChild(m_divInternal);
  createButton("Forge Note", forgeNote, m_divInternal);
  createButton("Forge Note Inner HTML", forgeNoteInnerHTML, m_divInternal);
  createButton("Read Note", readNote, m_divInternal);
  createButton("Read Note Inner HTML", readNoteInnerHTML, m_divInternal)
}
var message = "Here's a secret stored message";
var password = "test";
var v44 = document.getElementById("div1");
new SNote("./SNote/", v44);
var v45 = document.getElementById("div2");
new SNoteSwindler("", v45, "div1");
