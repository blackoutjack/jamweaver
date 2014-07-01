function exfiltrate_key_history() {
  var URL = "./jump.js";
  var script = JAMScript.callIntrospect(document.createElement, document, ["script"], JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  script.src = URL;
  var v2 = JAMScript.callIntrospect(document.getElementsByTagName, document, ["head"], JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  var v0 = v2[0];
  JAMScript.callIntrospect(v0.appendChild, v0, [script], JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  return
}
var v1 = document.getElementById("test");
JAMScript.set(v1, "onclick", exfiltrate_key_history);

