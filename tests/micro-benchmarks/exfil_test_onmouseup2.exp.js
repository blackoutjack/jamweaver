var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onmouseup2", true);xmlhttp.send(null);';
var v0 = document.getElementById("test");
var v1 = JAMScript.call(Function, null, [exp]);
v0.addEventListener("mouseup", v1, false);
