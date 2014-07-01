function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1 = [["GET", "http://AnalyticsInc:8000/submission.html?test=baseline", true], xmlhttp, xmlhttp.open]
  }
  JAMScript.call(v1[2], v1[1], v1[0]);
  xmlhttp.send(null);
  return
}
var v0 = document.getElementById("test");
JAMScript.set(v0, "onclick", exfiltrate_key_history);

