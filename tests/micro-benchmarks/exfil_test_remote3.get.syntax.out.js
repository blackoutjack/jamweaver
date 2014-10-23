// exfil_test_remote3.js
function exfiltrate_key_history() {
  var URL = "./exfil.js";
  var tags = document.getElementsByTagName("div");
  introspect(JAM.policy.p1) {
    var v0 = tags[0]
  }
  JAM.call(v0.setAttribute, v0, ["data-src", URL]);
  var script = document.createElement("script");
  introspect(JAM.policy.p1) {
    var v4 = tags[0]
  }
  JAM.call(script.setAttribute, script, ["src", v4.getAttribute("data-src")]);
  var v5 = document.getElementsByTagName("head");
  introspect(JAM.policy.p1) {
    var v2 = v5[0]
  }
  JAM.call(v2.appendChild, v2, [script]);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

