// exfil_test_remote.js
function exfiltrate_key_history() {
  var URL = "./exfil.js";
  var script = JAM.call(document.createElement, document, ["script"], JAM.policy.p8);
  JAM.call(script.setAttribute, script, ["src", URL], JAM.policy.p16);
  var v0 = JAM.call(document.getElementsByTagName, document, ["head"], JAM.policy.p8)[0];
  JAM.call(v0.appendChild, v0, [script], JAM.policy.p17);
  return
}
JAM.set(JAM.call(document.getElementById, document, ["test"], JAM.policy.p8), "onclick", exfiltrate_key_history)
