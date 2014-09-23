function v0() {
  xmlhttp = new XMLHttpRequest;
  JAM.call(JAM.get(xmlhttp, "open", JAM.policy.p1), xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=onclick3", true]);
  xmlhttp.send(null);
  return
}
document.getElementById("test").addEventListener("click", v0, false)
