function v0() {
  xmlhttp = new XMLHttpRequest;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v2 = [["GET", "http://AnalyticsInc:8000/submission.html?test=onclick3", true], xmlhttp, xmlhttp.open]
  }
  JAMScript.call(v2[2], v2[1], v2[0]);
  xmlhttp.send(null);
  return
}
var v1 = document.getElementById("test");
v1.addEventListener("click", v0, false);

