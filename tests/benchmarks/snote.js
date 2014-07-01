
/*
 * SNote/SNote.js
 */

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
        m_imageEdit = createNoteButton("Edit", 
                handleEditButtonClick,
                m_divButtons);

        // Create an unlock button
        m_imageView = createNoteButton("Read", 
                handleUnlockButtonClick,
                m_divButtons);

        // Create a delete button
        m_imageDelete = createNoteButton("Delete", 
                handleDeleteButtonClick,
                m_divButtons);
    }

    function createNoteButton(strLabel, 
        funcHandleClick,
        parent) {
        button = document.createElement("input");
        button.type = "button";
	button.value = strLabel;
        parent.appendChild(button);
        button.onclick = funcHandleClick;
        return button;
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

    function closeDialogsBoxes() {
        closeEditDialog();
	closeDeleteDialog();
	closeUnlockDialog();
    }

    function switchToUnlockedViewMode() {
	closeDialogsBoxes();
        m_imageEdit.style.display = 'none';
        m_imageView.style.display = 'none';
        m_imageDelete.style.display = 'inline';
    }

    function switchToLockedViewMode() {
	closeDialogsBoxes();
        m_imageEdit.style.display = 'none';
        m_imageDelete.style.display = 'none';
        m_imageView.style.display = 'inline';
    }

    function switchToEditMode() {
	closeDialogsBoxes();
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
        	closeDeleteDialog();
            }
        );
    }

    /////////////////////////////////////////////////////////////////////////
    // Unlock dialog
    ////////////////////////////////////////////////////////////////////////
    function handleUnlockButtonClick() {
        openUnlockDialog();
    }

    function handleUnlockDialogOk() {
        displayNote(decryptText(m_strCipherText, readPassword()));
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
            encryptAndSave(readInputNote(), strNewPass,
                           function(strId) {
                               if(strId != "") {
 	                           switchToLockedViewMode();
				   fetch(m_strId, handleSuccessfulFetch,
 					handleFailedFetch);
                               } else
                               {
                                   alert("Error: note could not be saved.");
                               }
                           });
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

        xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
  	   if (xmlhttp.readyState==4 && xmlhttp.status==200) {
           	jsonObjResponse = JSON.parse(xmlhttp.responseText);
	     	if(jsonObjResponse.bSuccess) {
                    callbackSuccess(jsonObjResponse.strCipherText);
	     	} else {
                    callbackFail();
             	} 
    	   }
  	}
 	var strUrl = m_serverPath + "FetchSNote.php" + "?snotehandle=" + 
		encodeURIComponent(strId);
	xmlhttp.open("GET", strUrl, true); 
	xmlhttp.send();
    }

    function encryptAndSave(strNote, strPassword, callbackDone) {
        save(encryptText(strNote, strPassword), callbackDone);
    }

    ////////////////////////////////////////////////////////////////////////
    // Save the encrypted snote to the server
    //////////////////////////////////////////////////////////////////////// 
    function save(strEncNote, callbackDone) {

        xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
  	   if (xmlhttp.readyState==4 && xmlhttp.status==200) {
             	jsonObjResponse = JSON.parse(xmlhttp.responseText);
             	if(jsonObjResponse.bSuccess) {
                    callbackDone(jsonObjResponse.strId);
             	} else {
                    callbackDone("");
             	} 
    	   }
  	}
	xmlhttp.open("POST", m_serverPath + "SaveSNote.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send("snoteHandle=" + encodeURIComponent(m_strId) + 
		"&snote=" + strEncNote);
    }

    ////////////////////////////////////////////////////////////////////////
    // Delete the encrypted snote from the server
    //////////////////////////////////////////////////////////////////////// 
    function deleteSNote(callbackSuccess, callbackFail) {
        xmlhttp = new XMLHttpRequest();
 	xmlhttp.onreadystatechange = function() {
              jsonObjResponse = JSON.parse(xmlhttp.responseText);
              if(jsonObjResponse.bSuccess) {
                   callbackSuccess(jsonObjResponse.strId);
              } else {
                   callbackFail();
              }
        };
	xmlhttp.open("POST", m_serverPath + "DeleteSNote.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send("snoteHandle=" + encodeURIComponent(m_strId));
    }

    /////////////////////////////////////////////////////////////////////////
    // Function used to password encrypt text.  The function will try to 
    // read the password from session storage or prompt as necessary.
    /////////////////////////////////////////////////////////////////////////
    function encryptText(strPlainText, strPasswd) {
	if(strPasswd) {
	   wordArrPlainText = CryptoJS.enc.Utf8.parse(strPlainText); 
	   return CryptoJS.AES.encrypt(wordArrPlainText, strPasswd).toString();
	} else {
	   return undefined;
	}
    }

    /////////////////////////////////////////////////////////////////////////
    // Function used to decrypt text.  The function will try to 
    // read the password from session storage or prompt as necessary. The
    // return cipher text will be encoded in UTF-8.
    /////////////////////////////////////////////////////////////////////////
    function decryptText(strCipherText, strPasswd) {
       if(strPasswd != undefined) {
	 wordArrPlainText = CryptoJS.AES.decrypt(strCipherText, strPasswd);
	 return CryptoJS.enc.Utf8.stringify(wordArrPlainText);	
       } else {
	     return undefined;
       }
    }
}

/*
 * cryptojs/aes.js
 */
var CryptoJS=CryptoJS||function(p,h){var i={},l=i.lib={},r=l.Base=function(){function a(){}return{extend:function(e){a.prototype=this;var c=new a;e&&c.mixIn(e);c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.$super.extend(this)}}}(),o=l.WordArray=r.extend({init:function(a,e){a=
this.words=a||[];this.sigBytes=e!=h?e:4*a.length},toString:function(a){return(a||s).stringify(this)},concat:function(a){var e=this.words,c=a.words,b=this.sigBytes,a=a.sigBytes;this.clamp();if(b%4)for(var d=0;d<a;d++)e[b+d>>>2]|=(c[d>>>2]>>>24-8*(d%4)&255)<<24-8*((b+d)%4);else if(65535<c.length)for(d=0;d<a;d+=4)e[b+d>>>2]=c[d>>>2];else e.push.apply(e,c);this.sigBytes+=a;return this},clamp:function(){var a=this.words,e=this.sigBytes;a[e>>>2]&=4294967295<<32-8*(e%4);a.length=p.ceil(e/4)},clone:function(){var a=
r.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var e=[],c=0;c<a;c+=4)e.push(4294967296*p.random()|0);return o.create(e,a)}}),m=i.enc={},s=m.Hex={stringify:function(a){for(var e=a.words,a=a.sigBytes,c=[],b=0;b<a;b++){var d=e[b>>>2]>>>24-8*(b%4)&255;c.push((d>>>4).toString(16));c.push((d&15).toString(16))}return c.join("")},parse:function(a){for(var e=a.length,c=[],b=0;b<e;b+=2)c[b>>>3]|=parseInt(a.substr(b,2),16)<<24-4*(b%8);return o.create(c,e/2)}},n=m.Latin1={stringify:function(a){for(var e=
a.words,a=a.sigBytes,c=[],b=0;b<a;b++)c.push(String.fromCharCode(e[b>>>2]>>>24-8*(b%4)&255));return c.join("")},parse:function(a){for(var e=a.length,c=[],b=0;b<e;b++)c[b>>>2]|=(a.charCodeAt(b)&255)<<24-8*(b%4);return o.create(c,e)}},k=m.Utf8={stringify:function(a){try{return decodeURIComponent(escape(n.stringify(a)))}catch(e){throw Error("Malformed UTF-8 data");}},parse:function(a){return n.parse(unescape(encodeURIComponent(a)))}},f=l.BufferedBlockAlgorithm=r.extend({reset:function(){this._data=o.create();
this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=k.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var e=this._data,c=e.words,b=e.sigBytes,d=this.blockSize,q=b/(4*d),q=a?p.ceil(q):p.max((q|0)-this._minBufferSize,0),a=q*d,b=p.min(4*a,b);if(a){for(var j=0;j<a;j+=d)this._doProcessBlock(c,j);j=c.splice(0,a);e.sigBytes-=b}return o.create(j,b)},clone:function(){var a=r.clone.call(this);a._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=f.extend({init:function(){this.reset()},
reset:function(){f.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);this._doFinalize();return this._hash},clone:function(){var a=f.clone.call(this);a._hash=this._hash.clone();return a},blockSize:16,_createHelper:function(a){return function(e,c){return a.create(c).finalize(e)}},_createHmacHelper:function(a){return function(e,c){return g.HMAC.create(a,c).finalize(e)}}});var g=i.algo={};return i}(Math);
(function(){var p=CryptoJS,h=p.lib.WordArray;p.enc.Base64={stringify:function(i){var l=i.words,h=i.sigBytes,o=this._map;i.clamp();for(var i=[],m=0;m<h;m+=3)for(var s=(l[m>>>2]>>>24-8*(m%4)&255)<<16|(l[m+1>>>2]>>>24-8*((m+1)%4)&255)<<8|l[m+2>>>2]>>>24-8*((m+2)%4)&255,n=0;4>n&&m+0.75*n<h;n++)i.push(o.charAt(s>>>6*(3-n)&63));if(l=o.charAt(64))for(;i.length%4;)i.push(l);return i.join("")},parse:function(i){var i=i.replace(/\s/g,""),l=i.length,r=this._map,o=r.charAt(64);o&&(o=i.indexOf(o),-1!=o&&(l=o));
for(var o=[],m=0,s=0;s<l;s++)if(s%4){var n=r.indexOf(i.charAt(s-1))<<2*(s%4),k=r.indexOf(i.charAt(s))>>>6-2*(s%4);o[m>>>2]|=(n|k)<<24-8*(m%4);m++}return h.create(o,m)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();
(function(p){function h(f,g,a,e,c,b,d){f=f+(g&a|~g&e)+c+d;return(f<<b|f>>>32-b)+g}function i(f,g,a,e,c,b,d){f=f+(g&e|a&~e)+c+d;return(f<<b|f>>>32-b)+g}function l(f,g,a,e,c,b,d){f=f+(g^a^e)+c+d;return(f<<b|f>>>32-b)+g}function r(f,g,a,e,c,b,d){f=f+(a^(g|~e))+c+d;return(f<<b|f>>>32-b)+g}var o=CryptoJS,m=o.lib,s=m.WordArray,m=m.Hasher,n=o.algo,k=[];(function(){for(var f=0;64>f;f++)k[f]=4294967296*p.abs(p.sin(f+1))|0})();n=n.MD5=m.extend({_doReset:function(){this._hash=s.create([1732584193,4023233417,
2562383102,271733878])},_doProcessBlock:function(f,g){for(var a=0;16>a;a++){var e=g+a,c=f[e];f[e]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360}for(var e=this._hash.words,c=e[0],b=e[1],d=e[2],q=e[3],a=0;64>a;a+=4)16>a?(c=h(c,b,d,q,f[g+a],7,k[a]),q=h(q,c,b,d,f[g+a+1],12,k[a+1]),d=h(d,q,c,b,f[g+a+2],17,k[a+2]),b=h(b,d,q,c,f[g+a+3],22,k[a+3])):32>a?(c=i(c,b,d,q,f[g+(a+1)%16],5,k[a]),q=i(q,c,b,d,f[g+(a+6)%16],9,k[a+1]),d=i(d,q,c,b,f[g+(a+11)%16],14,k[a+2]),b=i(b,d,q,c,f[g+a%16],20,k[a+3])):48>a?(c=
l(c,b,d,q,f[g+(3*a+5)%16],4,k[a]),q=l(q,c,b,d,f[g+(3*a+8)%16],11,k[a+1]),d=l(d,q,c,b,f[g+(3*a+11)%16],16,k[a+2]),b=l(b,d,q,c,f[g+(3*a+14)%16],23,k[a+3])):(c=r(c,b,d,q,f[g+3*a%16],6,k[a]),q=r(q,c,b,d,f[g+(3*a+7)%16],10,k[a+1]),d=r(d,q,c,b,f[g+(3*a+14)%16],15,k[a+2]),b=r(b,d,q,c,f[g+(3*a+5)%16],21,k[a+3]));e[0]=e[0]+c|0;e[1]=e[1]+b|0;e[2]=e[2]+d|0;e[3]=e[3]+q|0},_doFinalize:function(){var f=this._data,g=f.words,a=8*this._nDataBytes,e=8*f.sigBytes;g[e>>>5]|=128<<24-e%32;g[(e+64>>>9<<4)+14]=(a<<8|a>>>
24)&16711935|(a<<24|a>>>8)&4278255360;f.sigBytes=4*(g.length+1);this._process();f=this._hash.words;for(g=0;4>g;g++)a=f[g],f[g]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360}});o.MD5=m._createHelper(n);o.HmacMD5=m._createHmacHelper(n)})(Math);
(function(){var p=CryptoJS,h=p.lib,i=h.Base,l=h.WordArray,h=p.algo,r=h.EvpKDF=i.extend({cfg:i.extend({keySize:4,hasher:h.MD5,iterations:1}),init:function(i){this.cfg=this.cfg.extend(i)},compute:function(i,m){for(var h=this.cfg,n=h.hasher.create(),k=l.create(),f=k.words,g=h.keySize,h=h.iterations;f.length<g;){a&&n.update(a);var a=n.update(i).finalize(m);n.reset();for(var e=1;e<h;e++)a=n.finalize(a),n.reset();k.concat(a)}k.sigBytes=4*g;return k}});p.EvpKDF=function(i,l,h){return r.create(h).compute(i,
l)}})();
CryptoJS.lib.Cipher||function(p){var h=CryptoJS,i=h.lib,l=i.Base,r=i.WordArray,o=i.BufferedBlockAlgorithm,m=h.enc.Base64,s=h.algo.EvpKDF,n=i.Cipher=o.extend({cfg:l.extend(),createEncryptor:function(b,d){return this.create(this._ENC_XFORM_MODE,b,d)},createDecryptor:function(b,d){return this.create(this._DEC_XFORM_MODE,b,d)},init:function(b,d,a){this.cfg=this.cfg.extend(a);this._xformMode=b;this._key=d;this.reset()},reset:function(){o.reset.call(this);this._doReset()},process:function(b){this._append(b);return this._process()},
finalize:function(b){b&&this._append(b);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){return function(b){return{encrypt:function(a,q,j){return("string"==typeof q?c:e).encrypt(b,a,q,j)},decrypt:function(a,q,j){return("string"==typeof q?c:e).decrypt(b,a,q,j)}}}}()});i.StreamCipher=n.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var k=h.mode={},f=i.BlockCipherMode=l.extend({createEncryptor:function(b,a){return this.Encryptor.create(b,
a)},createDecryptor:function(b,a){return this.Decryptor.create(b,a)},init:function(b,a){this._cipher=b;this._iv=a}}),k=k.CBC=function(){function b(b,a,d){var c=this._iv;c?this._iv=p:c=this._prevBlock;for(var e=0;e<d;e++)b[a+e]^=c[e]}var a=f.extend();a.Encryptor=a.extend({processBlock:function(a,d){var c=this._cipher,e=c.blockSize;b.call(this,a,d,e);c.encryptBlock(a,d);this._prevBlock=a.slice(d,d+e)}});a.Decryptor=a.extend({processBlock:function(a,d){var c=this._cipher,e=c.blockSize,f=a.slice(d,d+
e);c.decryptBlock(a,d);b.call(this,a,d,e);this._prevBlock=f}});return a}(),g=(h.pad={}).Pkcs7={pad:function(b,a){for(var c=4*a,c=c-b.sigBytes%c,e=c<<24|c<<16|c<<8|c,f=[],g=0;g<c;g+=4)f.push(e);c=r.create(f,c);b.concat(c)},unpad:function(b){b.sigBytes-=b.words[b.sigBytes-1>>>2]&255}};i.BlockCipher=n.extend({cfg:n.cfg.extend({mode:k,padding:g}),reset:function(){n.reset.call(this);var b=this.cfg,a=b.iv,b=b.mode;if(this._xformMode==this._ENC_XFORM_MODE)var c=b.createEncryptor;else c=b.createDecryptor,
this._minBufferSize=1;this._mode=c.call(b,this,a&&a.words)},_doProcessBlock:function(b,a){this._mode.processBlock(b,a)},_doFinalize:function(){var b=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){b.pad(this._data,this.blockSize);var a=this._process(!0)}else a=this._process(!0),b.unpad(a);return a},blockSize:4});var a=i.CipherParams=l.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),k=(h.format={}).OpenSSL={stringify:function(a){var d=
a.ciphertext,a=a.salt,d=(a?r.create([1398893684,1701076831]).concat(a).concat(d):d).toString(m);return d=d.replace(/(.{64})/g,"$1\n")},parse:function(b){var b=m.parse(b),d=b.words;if(1398893684==d[0]&&1701076831==d[1]){var c=r.create(d.slice(2,4));d.splice(0,4);b.sigBytes-=16}return a.create({ciphertext:b,salt:c})}},e=i.SerializableCipher=l.extend({cfg:l.extend({format:k}),encrypt:function(b,d,c,e){var e=this.cfg.extend(e),f=b.createEncryptor(c,e),d=f.finalize(d),f=f.cfg;return a.create({ciphertext:d,
key:c,iv:f.iv,algorithm:b,mode:f.mode,padding:f.padding,blockSize:b.blockSize,formatter:e.format})},decrypt:function(a,c,e,f){f=this.cfg.extend(f);c=this._parse(c,f.format);return a.createDecryptor(e,f).finalize(c.ciphertext)},_parse:function(a,c){return"string"==typeof a?c.parse(a):a}}),h=(h.kdf={}).OpenSSL={compute:function(b,c,e,f){f||(f=r.random(8));b=s.create({keySize:c+e}).compute(b,f);e=r.create(b.words.slice(c),4*e);b.sigBytes=4*c;return a.create({key:b,iv:e,salt:f})}},c=i.PasswordBasedCipher=
e.extend({cfg:e.cfg.extend({kdf:h}),encrypt:function(a,c,f,j){j=this.cfg.extend(j);f=j.kdf.compute(f,a.keySize,a.ivSize);j.iv=f.iv;a=e.encrypt.call(this,a,c,f.key,j);a.mixIn(f);return a},decrypt:function(a,c,f,j){j=this.cfg.extend(j);c=this._parse(c,j.format);f=j.kdf.compute(f,a.keySize,a.ivSize,c.salt);j.iv=f.iv;return e.decrypt.call(this,a,c,f.key,j)}})}();
(function(){var p=CryptoJS,h=p.lib.BlockCipher,i=p.algo,l=[],r=[],o=[],m=[],s=[],n=[],k=[],f=[],g=[],a=[];(function(){for(var c=[],b=0;256>b;b++)c[b]=128>b?b<<1:b<<1^283;for(var d=0,e=0,b=0;256>b;b++){var j=e^e<<1^e<<2^e<<3^e<<4,j=j>>>8^j&255^99;l[d]=j;r[j]=d;var i=c[d],h=c[i],p=c[h],t=257*c[j]^16843008*j;o[d]=t<<24|t>>>8;m[d]=t<<16|t>>>16;s[d]=t<<8|t>>>24;n[d]=t;t=16843009*p^65537*h^257*i^16843008*d;k[j]=t<<24|t>>>8;f[j]=t<<16|t>>>16;g[j]=t<<8|t>>>24;a[j]=t;d?(d=i^c[c[c[p^i]]],e^=c[c[e]]):d=e=1}})();
var e=[0,1,2,4,8,16,32,64,128,27,54],i=i.AES=h.extend({_doReset:function(){for(var c=this._key,b=c.words,d=c.sigBytes/4,c=4*((this._nRounds=d+6)+1),i=this._keySchedule=[],j=0;j<c;j++)if(j<d)i[j]=b[j];else{var h=i[j-1];j%d?6<d&&4==j%d&&(h=l[h>>>24]<<24|l[h>>>16&255]<<16|l[h>>>8&255]<<8|l[h&255]):(h=h<<8|h>>>24,h=l[h>>>24]<<24|l[h>>>16&255]<<16|l[h>>>8&255]<<8|l[h&255],h^=e[j/d|0]<<24);i[j]=i[j-d]^h}b=this._invKeySchedule=[];for(d=0;d<c;d++)j=c-d,h=d%4?i[j]:i[j-4],b[d]=4>d||4>=j?h:k[l[h>>>24]]^f[l[h>>>
16&255]]^g[l[h>>>8&255]]^a[l[h&255]]},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._keySchedule,o,m,s,n,l)},decryptBlock:function(c,b){var d=c[b+1];c[b+1]=c[b+3];c[b+3]=d;this._doCryptBlock(c,b,this._invKeySchedule,k,f,g,a,r);d=c[b+1];c[b+1]=c[b+3];c[b+3]=d},_doCryptBlock:function(a,b,d,e,f,h,i,g){for(var l=this._nRounds,k=a[b]^d[0],m=a[b+1]^d[1],o=a[b+2]^d[2],n=a[b+3]^d[3],p=4,r=1;r<l;r++)var s=e[k>>>24]^f[m>>>16&255]^h[o>>>8&255]^i[n&255]^d[p++],u=e[m>>>24]^f[o>>>16&255]^h[n>>>8&255]^
i[k&255]^d[p++],v=e[o>>>24]^f[n>>>16&255]^h[k>>>8&255]^i[m&255]^d[p++],n=e[n>>>24]^f[k>>>16&255]^h[m>>>8&255]^i[o&255]^d[p++],k=s,m=u,o=v;s=(g[k>>>24]<<24|g[m>>>16&255]<<16|g[o>>>8&255]<<8|g[n&255])^d[p++];u=(g[m>>>24]<<24|g[o>>>16&255]<<16|g[n>>>8&255]<<8|g[k&255])^d[p++];v=(g[o>>>24]<<24|g[n>>>16&255]<<16|g[k>>>8&255]<<8|g[m&255])^d[p++];n=(g[n>>>24]<<24|g[k>>>16&255]<<16|g[m>>>8&255]<<8|g[o&255])^d[p++];a[b]=s;a[b+1]=u;a[b+2]=v;a[b+3]=n},keySize:8});p.AES=h._createHelper(i)})();

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

