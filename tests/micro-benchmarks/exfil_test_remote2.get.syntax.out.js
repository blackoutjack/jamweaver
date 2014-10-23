// exfil_test_remote2.js
function exfiltrate_key_history() {
  var URL = "./jump.js";
  var script = document.createElement("script");
  script.src = URL;
  var v2 = document.getElementsByTagName("head");
  introspect(JAM.policy.p1) {
    var v0 = v2[0]
  }
  JAM.call(v0.appendChild, v0, [script]);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

