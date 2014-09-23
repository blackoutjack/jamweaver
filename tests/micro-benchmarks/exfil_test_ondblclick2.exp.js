var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=ondblclick2", true);xmlhttp.send(null);';
document.getElementById("test").addEventListener("dblclick", JAM.call(Function, null, [exp]), false)
