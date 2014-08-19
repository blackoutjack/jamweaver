function SNote(serverPath, divParent) {
  function init(divParent$$1, serverPath$$1) {
    m_serverPath = serverPath$$1;
    m_divInternal$$1 = divParent$$1;
    var serverPath$$inline_0 = serverPath$$1;
    m_divInternal$$1.style.border = "2px solid";
    m_divInternal$$1.style.backgroundColor = "#FFFFCC";
    m_preNote = document.createElement("pre");
    m_preNote.id = "note";
    m_preNote.className = "write-only non-editable";
    JAM.call(m_divInternal$$1.appendChild, m_divInternal$$1, [m_preNote]);
    var serverPath$$inline_21 = serverPath$$inline_0;
    m_divButtons = document.createElement("div");
    m_divButtons.style.textAlign = "left";
    JAM.call(m_divInternal$$1.appendChild, m_divInternal$$1, [m_divButtons]);
    m_imageEdit = createNoteButton(serverPath$$inline_21 + "SNoteEdit.png", handleEditButtonClick, m_divButtons);
    m_imageView = createNoteButton(serverPath$$inline_21 + "SNoteRead.png", handleUnlockButtonClick, m_divButtons);
    m_imageDelete = createNoteButton(serverPath$$inline_21 + "SNoteDelete.png", handleDeleteButtonClick, m_divButtons);
    m_divEdit = createPopupDialog("edit_dialog", m_divInternal$$1);
    m_divEdit.style.width = 400;
    m_inputNewPassword = createPasswordPanel(m_divEdit, "Enter password:", "edit_password");
    m_inputNewPasswordRetype = createPasswordPanel(m_divEdit, "Retype password:", "edit_password_retype");
    m_inputNote = document.createElement("textarea");
    m_inputNote.style.width = 350;
    m_inputNote.style.height = 200;
    m_inputNote.className = "destructive-read read-only";
    m_inputNote.id = "edit_note_input";
    JAM.call(m_divEdit.appendChild, m_divEdit, [m_inputNote]);
    divButtons = createDialogButtonPanel(handleEditDialogOk, handleEditDialogCancel, m_divEdit);
    m_divEdit.style.display = "none";
    m_divUnlock = createPopupDialog("unlock_dialog", m_divInternal$$1);
    m_inputPassword = createPasswordPanel(m_divUnlock, "Enter password:", "unlock_password");
    createDialogButtonPanel(handleUnlockDialogOk, handleUnlockDialogCancel, m_divUnlock);
    m_divUnlock.style.display = "none";
    m_divDeleteDialog = createPopupDialog("delete_dialog", m_divInternal$$1);
    var parent$$inline_25 = m_divDeleteDialog;
    label = document.createElement("label");
    JAM.set(label, "textContent", "Are you sure you want to delete?", JAM.policy.p8);
    JAM.call(parent$$inline_25.appendChild, parent$$inline_25, [label]);
    createDialogButtonPanel(handleDeleteDialogOk, handleDeleteDialogCancel, m_divDeleteDialog);
    m_divDeleteDialog.style.display = "none";
    fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
    return
  }
  function createNoteButton(strIconFile, funcHandleClick, parent) {
    image = document.createElement("input");
    image.type = "image";
    image.style.width = 23;
    image.style.height = 22;
    image.src = strIconFile;
    JAM.call(parent.appendChild, parent, [image]);
    JAM.set(image, "onclick", funcHandleClick);
    return image
  }
  function createPasswordPanel(parent$$1, strPrompt, strPasswordInputId) {
    divPassword = document.createElement("div");
    JAM.call(parent$$1.appendChild, parent$$1, [divPassword]);
    labelPassword = document.createElement("label");
    JAM.set(labelPassword, "textContent", strPrompt, JAM.policy.p8);
    JAM.call(divPassword.appendChild, divPassword, [labelPassword]);
    inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.className = "destructive-read read-only";
    inputPassword.id = strPasswordInputId;
    JAM.call(divPassword.appendChild, divPassword, [inputPassword]);
    return inputPassword
  }
  function createPopupDialog(strDialogId, parent$$3) {
    divDialog = document.createElement("div");
    divDialog.id = strDialogId;
    divDialog.className = "popup";
    JAM.call(parent$$3.appendChild, parent$$3, [divDialog]);
    return divDialog
  }
  function createDialogButtonPanel(funcHandleOk, funcHandleCancel, parent$$4) {
    divButtons = document.createElement("div");
    buttonOk = document.createElement("button");
    buttonOk.type = "input";
    JAM.set(buttonOk, "textContent", "ok", JAM.policy.p8);
    JAM.set(buttonOk, "onclick", funcHandleOk);
    JAM.call(divButtons.appendChild, divButtons, [buttonOk]);
    buttonCancel = document.createElement("button");
    buttonCancel.type = "input";
    JAM.set(buttonCancel, "textContent", "cancel", JAM.policy.p8);
    JAM.set(buttonCancel, "onclick", funcHandleCancel);
    JAM.call(divButtons.appendChild, divButtons, [buttonCancel]);
    JAM.call(parent$$4.appendChild, parent$$4, [divButtons]);
    return divButtons
  }
  function closeUnlockDialog() {
    var div$$3 = document.getElementById("unlock_dialog");
    div$$3.style.display = "none";
    m_inputPassword.value = "";
    return
  }
  function closeDeleteDialog() {
    var div$$4 = document.getElementById("delete_dialog");
    div$$4.style.display = "none";
    return
  }
  function closeEditDialog() {
    var div$$5 = document.getElementById("edit_dialog");
    div$$5.style.display = "none";
    m_inputNote.value = "";
    m_inputNewPassword.value = "";
    m_inputNewPasswordRetype.value = "";
    return
  }
  function destructiveRead(elem$$1) {
    val = elem$$1.value;
    elem$$1.value = "";
    return val
  }
  function handleDeleteButtonClick() {
    var div$$inline_5 = document.getElementById("delete_dialog");
    div$$inline_5.style.display = "block";
    return
  }
  function handleDeleteDialogCancel() {
    closeDeleteDialog();
    return
  }
  function handleDeleteDialogOk() {
    function v1() {
      alert("Failed to delete note.");
      return
    }
    function v0(strId) {
      JAM.set(m_preNote, "textContent", "", JAM.policy.p8);
      fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
      return
    }
    deleteSNote(v0, v1);
    closeDeleteDialog();
    return
  }
  function handleUnlockButtonClick() {
    var div$$inline_9 = document.getElementById("unlock_dialog");
    div$$inline_9.style.display = "block";
    return
  }
  function handleUnlockDialogOk() {
    JAM.set(m_preNote, "textContent", message, JAM.policy.p8);
    closeUnlockDialog();
    m_imageEdit.style.display = "none";
    m_imageView.style.display = "none";
    m_imageDelete.style.display = "inline";
    return
  }
  function handleUnlockDialogCancel() {
    closeUnlockDialog();
    return
  }
  function handleEditButtonClick() {
    var div$$inline_14 = document.getElementById("edit_dialog");
    div$$inline_14.style.display = "block";
    return
  }
  function handleEditDialogOk() {
    function v2(strId$$1) {
      if(strId$$1 != "") {
        closeEditDialog()
      }else {
        alert("Error: note could not be saved.")
      }
      return
    }
    strNewPass = destructiveRead(m_inputNewPassword);
    strNewPassRetype = destructiveRead(m_inputNewPasswordRetype);
    if(strNewPass.length == 0) {
      alert("Must have non-empty password")
    }else {
      if(strNewPass != strNewPassRetype) {
        alert("Passwords do not match")
      }else {
        save(destructiveRead(m_inputNote), strNewPass, v2);
        fetch(m_strId, handleSuccessfulFetch, handleFailedFetch)
      }
    }
    return
  }
  function handleEditDialogCancel() {
    closeEditDialog();
    return
  }
  function handleSuccessfulFetch(strCipherText) {
    m_strCipherText = strCipherText;
    m_imageEdit.style.display = "none";
    m_imageDelete.style.display = "none";
    m_imageView.style.display = "inline";
    closeEditDialog();
    return
  }
  function handleFailedFetch() {
    m_imageView.style.display = "none";
    m_imageDelete.style.display = "none";
    m_imageEdit.style.display = "inline";
    return
  }
  function fetch(strId$$2, callbackSuccess, callbackFail) {
    if(message == "") {
      callbackFail()
    }else {
      JAM.call(callbackSuccess, null, [message])
    }
    return
  }
  function save(strEncNote, pwd, callbackDone) {
    password = pwd;
    message = strEncNote;
    JAM.call(callbackDone, null, ["Saved"]);
    return
  }
  function deleteSNote(callbackSuccess$$1, callbackFail$$1) {
    message = "";
    JAM.call(callbackSuccess$$1, null, ["Deleted"]);
    return
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
  init(divParent, serverPath);
  return
}
function SNoteSwindler(serverPath$$4, divParent$$2, strNoteId) {
  function createButton(strLabel, strFunc, parent$$5) {
    button = document.createElement("button");
    button.type = "input";
    JAM.set(button, "textContent", strLabel, JAM.policy.p8);
    JAM.set(button, "onclick", strFunc);
    JAM.call(parent$$5.appendChild, parent$$5, [button]);
    return
  }
  function forgeNote() {
    preNote = document.getElementById("note");
    JAM.set(preNote, "textContent", "Forged note", JAM.policy.p8);
    return
  }
  function forgeNoteInnerHTML() {
    preNote = document.getElementById("note");
    JAM.set(preNote, "innerHTML", "Forged note", JAM.policy.p2);
    return
  }
  function readNote() {
    preNote = document.getElementById("note");
    introspect(JAM.policy.p6) {
      var v37 = preNote.textContent
    }
    alert(v37);
    return
  }
  function readNoteInnerHTML() {
    preNote = document.getElementById("note");
    introspect(JAM.policy.p4) {
      var v38 = preNote.innerHTML
    }
    alert(v38);
    return
  }
  m_divParent = null;
  m_divInternal = null;
  m_strNoteId = strNoteId;
  m_divParent = divParent$$2;
  m_divInternal = document.createElement("div");
  m_divInternal.style.border = "2px solid";
  m_divInternal.style.backgroundColor = "#CCCCCC";
  JAM.call(m_divParent.appendChild, m_divParent, [m_divInternal]);
  createButton("Forge Note", forgeNote, m_divInternal);
  createButton("Forge Note Inner HTML", forgeNoteInnerHTML, m_divInternal);
  createButton("Read Note", readNote, m_divInternal);
  createButton("Read Note Inner HTML", readNoteInnerHTML, m_divInternal);
  return
}
var message = "Here's a secret stored message";
var password = "test";
new SNote("./SNote/", document.getElementById("div1"));
new SNoteSwindler("", document.getElementById("div2"), "div1");

