// exfil_test_remote2.js
function exfiltrate_key_history() {
  var URL = "./jump.js";
  var script = JAM.call(document.createElement, document, ["script"], JAM.policy.p1);
  script.src = URL;
  var v0 = JAM.call(document.getElementsByTagName, document, ["head"], JAM.policy.p1)[0];
  JAM.call(v0.appendChild, v0, [script], JAM.policy.p1);
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
