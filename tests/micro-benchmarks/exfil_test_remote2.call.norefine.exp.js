function exfiltrate_key_history() {
  var URL = "./jump.js";
  var script = JAM.call(document.createElement, document, ["script"], JAM.policy.p16);
  introspect(JAM.policy.p8) {
    script.src = URL
  }
  var v0 = JAM.call(document.getElementsByTagName, document, ["head"], JAM.policy.p16)[0];
  JAM.call(v0.appendChild, v0, [script], JAM.policy.p17);
  return
}
JAM.set(JAM.call(document.getElementById, document, ["test"], JAM.policy.p16), "onclick", exfiltrate_key_history)
