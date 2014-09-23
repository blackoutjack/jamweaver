function exfiltrate_key_history() {
  var URL = "./exfil.js";
  var tags = document.getElementsByTagName("div");
  var v0 = tags[0];
  JAM.call(v0.setAttribute, v0, ["data-src", URL]);
  var script = document.createElement("script");
  JAM.call(script.setAttribute, script, ["src", tags[0].getAttribute("data-src")]);
  var v2 = document.getElementsByTagName("head")[0];
  JAM.call(v2.appendChild, v2, [script]);
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
