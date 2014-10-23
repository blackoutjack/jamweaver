// exfil_test_xss4.js
function exfiltrate_key_history() {
  var script = document.createElement("link");
  script.rel = "stylesheet";
  script.href = "./exfil.js";
  var v2 = document.getElementsByTagName("head");
  introspect(JAM.policy.p1) {
    var v0 = v2[0]
  }
  JAM.call(v0.appendChild, v0, [script]);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

