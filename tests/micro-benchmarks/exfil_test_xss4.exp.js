function exfiltrate_key_history() {
  var script = document.createElement("link");
  script.rel = "stylesheet";
  script.href = "./exfil.js";
  var v2 = document.getElementsByTagName("head");
  var v0 = v2[0];
  JAMScript.call(v0.appendChild, v0, [script]);
  return
}
var v1 = document.getElementById("test");
JAMScript.set(v1, "onclick", exfiltrate_key_history);

