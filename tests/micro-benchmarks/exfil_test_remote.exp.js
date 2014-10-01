// exfil_test_remote.js
function exfiltrate_key_history() {
  var URL = "./exfil.js";
  var script = document.createElement("script");
  JAM.call(script.setAttribute, script, ["src", URL]);
  var v0 = document.getElementsByTagName("head")[0];
  JAM.call(v0.appendChild, v0, [script]);
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
