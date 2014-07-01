var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onclick1", true);xmlhttp.send(null);';
var v0 = document.getElementById("test");
JAMScript.call(v0.setAttribute, v0, ["onclick", exp]);

