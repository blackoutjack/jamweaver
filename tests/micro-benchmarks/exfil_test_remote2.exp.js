function exfiltrate_key_history() {
  var URL = "./jump.js";
  var script = JAM.call(document.createElement, document, ["script"], JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  script.src = URL;
  var v0 = JAM.call(document.getElementsByTagName, document, ["head"], JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1)[0];
  JAM.call(v0.appendChild, v0, [script], JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history);

