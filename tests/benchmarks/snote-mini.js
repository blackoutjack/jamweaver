
/*
 * SNote/SNote.js
 */

var message = "Here's a secret stored message";
var password = "test";

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Secure note widget class used as part of the CRASH demo.
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
function SNote(serverPath, divParent) {

    ////////////////////////////////////////////////////////////////////////
    // Private object members
    ////////////////////////////////////////////////////////////////////////

    // The note id (obtained from the server once it has been saved)
    var m_strId = divParent.id;

    // The cipher text of the note
    var m_strCipherText = null;

    // Store the path to the secure note server
    var m_serverPath = null; 

    // Internal div to hold the contents of the note
    var m_divInternal = null;

    // Pre field to hold the contents of the note
    var m_preNote = null;

    // Edit note button
    var m_imageEdit = null;

    // View note button
    var m_imageView = null;

    // Div to hold the contents of the note edit dialog
    var m_divEdit = null;

    // Label indicating that passwords do not match in edit window
    var m_labelMismatchedPasswords = null;

    // Edit password field
    var m_inputNewPassword = null;
    var m_inputNewPasswordRetype = null;

    // Textbox used for entering the note in the edit div           
    var m_inputNote = null;

    // Div used for password dialog
    var m_divPassword = null;

    // Password field for viewing note           
    var m_inputPassword = null;

    init(divParent, serverPath);    

    ////////////////////////////////////////////////////////////////////////
    // Construct a new SNote if the div is empty other read the existing
    // div elements into an SNote object.
    ////////////////////////////////////////////////////////////////////////
    function init(divParent, serverPath) {

        // Store the path to the secure note server
        m_serverPath = serverPath; 

        // Store the parent div element
        m_divInternal = divParent;

        // Create the note widget
        createSNote(serverPath);

        // If this is a new note, then go to edit mode otherwise start at
        // "unlock view" mode.
        fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
    }

    ////////////////////////////////////////////////////////////////////////
    // Object construction
    ////////////////////////////////////////////////////////////////////////
    function createSNote(serverPath)
    {   
        // Set the div's style
        m_divInternal.style.border = "2px solid";
        m_divInternal.style.backgroundColor = "#FFFFCC";

        // Add a pre field to hold the contents of the note
        m_preNote = document.createElement("pre");
        m_preNote.id = genElemId("note");
        m_preNote.className = 'write-only non-editable';
        m_divInternal.appendChild(m_preNote);

        createButtonPanel(serverPath);

        createEditDialog();

        createUnlockDialog();

        createDeleteDialog();
    }

    function genElemId(strElemId) {
        return strElemId;
    }

    function createButtonPanel(serverPath) {

        // Create a button panel for secure note actions
        m_divButtons = document.createElement("div");
        m_divButtons.style.textAlign = "left";
        m_divInternal.appendChild(m_divButtons);

        // Create an edit button
        m_imageEdit = createNoteButton(serverPath + "SNoteEdit.png", 
                handleEditButtonClick,
                m_divButtons);

        // Create an unlock button
        m_imageView = createNoteButton(serverPath + "SNoteRead.png", 
                handleUnlockButtonClick,
                m_divButtons);

        // Create a delete button
        m_imageDelete = createNoteButton(serverPath + "SNoteDelete.png", 
                handleDeleteButtonClick,
                m_divButtons);

    }

    function createNoteButton(strIconFile, 
        funcHandleClick,
        parent) {

        image = document.createElement("input");
        image.type = "image";
        image.style.width = 23;
        image.style.height = 22;
        image.src = strIconFile;
        parent.appendChild(image);
        image.onclick = funcHandleClick;
        return image;
    }

    function createEditDialog() {

        m_divEdit = createPopupDialog("edit_dialog", m_divInternal);
        m_divEdit.style.width = 400;

        m_inputNewPassword = createPasswordPanel(m_divEdit,
                "Enter password:", "edit_password");

        m_inputNewPasswordRetype = createPasswordPanel(m_divEdit,
                "Retype password:", "edit_password_retype");

        m_inputNote = document.createElement("textarea");
        m_inputNote.style.width = 350;
        m_inputNote.style.height = 200;
        m_inputNote.className = 'destructive-read read-only';
        m_inputNote.id = genElemId("edit_note_input");
        m_divEdit.appendChild(m_inputNote);

        divButtons = createDialogButtonPanel(handleEditDialogOk, 
                handleEditDialogCancel, m_divEdit);

        m_divEdit.style.display = 'none';
    }

    function createUnlockDialog() {

        m_divUnlock = createPopupDialog("unlock_dialog", 
                m_divInternal);

        m_inputPassword = createPasswordPanel(m_divUnlock,
                "Enter password:", "unlock_password");

        createDialogButtonPanel(handleUnlockDialogOk, 
                handleUnlockDialogCancel, m_divUnlock);
        m_divUnlock.style.display = 'none';
    }

    function createPasswordPanel(parent, strPrompt, strPasswordInputId) {

        divPassword = document.createElement("div");
        parent.appendChild(divPassword);

        labelPassword = document.createElement("label");
        labelPassword.textContent = strPrompt;
        divPassword.appendChild(labelPassword);

        inputPassword = document.createElement("input");
        inputPassword.type = "password";
        inputPassword.className = 'destructive-read read-only';
        inputPassword.id = genElemId(strPasswordInputId);

        divPassword.appendChild(inputPassword);
        return inputPassword;
    }

    function createDeleteDialog() {

        m_divDeleteDialog = createPopupDialog("delete_dialog",
                  m_divInternal);

        createLabelElement("Are you sure you want to delete?",
                m_divDeleteDialog);
        
        createDialogButtonPanel(handleDeleteDialogOk, 
                handleDeleteDialogCancel, m_divDeleteDialog);
        m_divDeleteDialog.style.display = 'none';
    }

    function createLabelElement(strLabelText, parent) {

        label = document.createElement("label");
        label.textContent = strLabelText;
        parent.appendChild(label);
        return label;
    }

    function createPopupDialog(strDialogId, parent) {

        divDialog = document.createElement("div");
        divDialog.id = genElemId(strDialogId);
        divDialog.className ="popup";

        parent.appendChild(divDialog);
        return divDialog;
    }

    function createDialogButtonPanel(funcHandleOk, 
        funcHandleCancel, parent) {

        divButtons = document.createElement("div");

        buttonOk = document.createElement("button");
        buttonOk.type = "input";
        buttonOk.textContent = "ok";
        buttonOk.onclick = funcHandleOk;
        divButtons.appendChild(buttonOk);

        buttonCancel = document.createElement("button");
        buttonCancel.type = "input";
        buttonCancel.textContent = "cancel";
        buttonCancel.onclick = funcHandleCancel;
        divButtons.appendChild(buttonCancel);

        parent.appendChild(divButtons);
        return divButtons;
    }

    /////////////////////////////////////////////////////////////////////////  
    /////////////////////////////////////////////////////////////////////////
    //  UI / view methods
    /////////////////////////////////////////////////////////////////////////  
    /////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////////////
    // Open the note editor dialog
    /////////////////////////////////////////////////////////////////////////
    function openEditDialog() {
        var div = document.getElementById('edit_dialog');
        div.style.display = 'block';
    }

    /////////////////////////////////////////////////////////////////////////
    // Open the password prompt
    /////////////////////////////////////////////////////////////////////////
    function openUnlockDialog() {
        var div = document.getElementById('unlock_dialog');
        div.style.display = 'block';
    }

    function openDeleteDialog() {
        var div = document.getElementById('delete_dialog');
        div.style.display = 'block';
    }

    ////////////////////////////////////////////////////////////////////////
    // Close the password prompt and clear the fields
    ////////////////////////////////////////////////////////////////////////
    function closeUnlockDialog() {
        var div = document.getElementById('unlock_dialog');
        div.style.display = 'none';
        m_inputPassword.value = "";
    }

    function closeDeleteDialog() {
        var div = document.getElementById('delete_dialog');
        div.style.display = 'none';
    }

    ////////////////////////////////////////////////////////////////////////
    // Close the secure note edit window and clear it's fields
    ////////////////////////////////////////////////////////////////////////
    function closeEditDialog() {
        var div = document.getElementById('edit_dialog');
        div.style.display = 'none';
        m_inputNote.value = "";
        m_inputNewPassword.value = "";
        m_inputNewPasswordRetype.value = "";
    }

    function switchToUnlockedViewMode() {
        m_imageEdit.style.display = 'none';
        m_imageView.style.display = 'none';
        m_imageDelete.style.display = 'inline';
    }

    function switchToLockedViewMode() {
        m_imageEdit.style.display = 'none';
        m_imageDelete.style.display = 'none';
        m_imageView.style.display = 'inline';
    }

    function switchToEditMode() {
        m_imageView.style.display = 'none';
        m_imageDelete.style.display = 'none';
        m_imageEdit.style.display = 'inline';
    }

    function displayNote(strPlainText) {
        m_preNote.textContent = strPlainText;
    }

    function destructiveRead(elem) {
        val = elem.value;
        elem.value = "";
        return val;
    }

    function readPassword() {
        return destructiveRead(m_inputPassword);
    }

    function readNewPassword() {
        return destructiveRead(m_inputNewPassword);
    }

    function readNewPasswordRetype() {
        return destructiveRead(m_inputNewPasswordRetype);
    }

    function readInputNote() {
        return destructiveRead(m_inputNote);
    }

    /////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////
    // Control functions
    /////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////////////
    // Delete dialog
    /////////////////////////////////////////////////////////////////////////
    function handleDeleteButtonClick() {
        openDeleteDialog();
    }

    function handleDeleteDialogCancel() {
        closeDeleteDialog();
    }

    function handleDeleteDialogOk() {
        deleteSNote(
            function(strId) {
                displayNote("");
                fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
            },
            function() {
                alert("Failed to delete note.");
            }
        );
        closeDeleteDialog();
    }

    /////////////////////////////////////////////////////////////////////////
    // Unlock dialog
    ////////////////////////////////////////////////////////////////////////
    function handleUnlockButtonClick() {
        openUnlockDialog();
    }

    function handleUnlockDialogOk() {
        displayNote(message);
        closeUnlockDialog();
        switchToUnlockedViewMode();
    }

    function handleUnlockDialogCancel() {
       closeUnlockDialog();
    }


    /////////////////////////////////////////////////////////////////////////
    // Edit dialog
    /////////////////////////////////////////////////////////////////////////
    function handleEditButtonClick() {
        openEditDialog();
    }

    function handleEditDialogOk() {
        strNewPass = readNewPassword();
        strNewPassRetype = readNewPasswordRetype();
        if(strNewPass.length == 0) {
            alert("Must have non-empty password");
        } else if(strNewPass != strNewPassRetype) {
            alert("Passwords do not match");
        } else { 
            save(readInputNote(), strNewPass,
                           function(strId) {
                               if(strId != "") {
                                   closeEditDialog();
                               } else
                               {
                                   alert("Error: note could not be saved.");
                               }
                           });
            fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
        }

    }

    function handleEditDialogCancel() {
        closeEditDialog();
    }

    /////////////////////////////////////////////////////////////////////////
    // Fetch response handlers
    /////////////////////////////////////////////////////////////////////////
 
    function handleSuccessfulFetch(strCipherText) {
        m_strCipherText = strCipherText;
        switchToLockedViewMode();
        closeEditDialog();
    }

    function handleFailedFetch() {
        switchToEditMode();       
    }

    ////////////////////////////////////////////////////////////////////////
    // Fetch encrypted snote from the server given an id.  Call the callback
    // passing in the resulting ciphertext.  If the fetch was unsucessful
    // the callback will be passed an empty string.
    //////////////////////////////////////////////////////////////////////// 
    function fetch(strId, callbackSuccess, callbackFail) {
        if (message == "") {
          callbackFail();
        } else {
          callbackSuccess(message);
        }
    }

    ////////////////////////////////////////////////////////////////////////
    // Save the encrypted snote to the server
    //////////////////////////////////////////////////////////////////////// 
    function save(strEncNote, pwd, callbackDone) {
        password = pwd;
        message = strEncNote;
        callbackDone("Saved");
    }

    ////////////////////////////////////////////////////////////////////////
    // Delete the encrypted snote from the server
    //////////////////////////////////////////////////////////////////////// 
    function deleteSNote(callbackSuccess, callbackFail) {
        message = "";
        callbackSuccess("Deleted");
    }

}


/*
 * SNoteSwindler/SNoteSwindler.js
 */

function SNoteSwindler(serverPath, divParent, strNoteId) {

   m_divParent = null;
   m_divInternal = null;
   m_strNoteId = strNoteId;
   init(serverPath, divParent);

   function init(serverPath, divParent) {

        m_divParent = divParent;

        // Create an internal div to hold the contents of the note
        m_divInternal = document.createElement("div");
        m_divInternal.style.border = "2px solid";
        m_divInternal.style.backgroundColor = "#CCCCCC";
        m_divParent.appendChild(m_divInternal);

        createButton("Forge Note", forgeNote, m_divInternal);
        createButton("Forge Note Inner HTML", 
                forgeNoteInnerHTML, m_divInternal);
        createButton("Read Note", readNote, m_divInternal);
        createButton("Read Note Inner HTML", 
                readNoteInnerHTML, m_divInternal);
    }

    function createButton(strLabel, strFunc, parent) {
        button = document.createElement("button");
        button.type = "input";
        button.textContent = strLabel;
        button.onclick = strFunc;
        parent.appendChild(button);
    }

    function genNoteElemId(strElemId) {
        return strElemId;
    }    

    function forgeNote() {
        preNote = document.getElementById(genNoteElemId("note"));
        preNote.textContent = "Forged note";        
    }

    function forgeNoteInnerHTML() {
        preNote = document.getElementById(genNoteElemId("note"));
        preNote.innerHTML = "Forged note";        
    }

    function readNote() {
        preNote = document.getElementById(genNoteElemId("note"));
        alert(preNote.textContent);        
    }

    function readNoteInnerHTML() {
        preNote = document.getElementById(genNoteElemId("note"));
        alert(preNote.innerHTML);        
    }

}


/*
 * SNoteSwindler/SNoteSwindlerDemo.html
 */

new SNote("./SNote/", document.getElementById("div1"));
new SNoteSwindler("", document.getElementById("div2"), "div1");

