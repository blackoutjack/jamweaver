function v3(callback$$26, target$$38, ports$$1, timeout$$1) {
  index = 0;
  var v17 = ports$$1.length;
  var v6 = index < v17;
  for(;v6;) {
    var v4 = AttackAPI.PortScanner;
    var v5 = ports$$1[index];
    JAMScript.call(v4.scanPort, v4, [callback$$26, target$$38, v5, timeout$$1]);
    index = index + 1;
    var v18 = ports$$1.length;
    v6 = index < v18
  }
  return
}
function v2(callback$$25, target$$37, port, timeout) {
  function v1() {
    var v7 = !img$$2;
    if(v7) {
      return
    }
    img$$2 = undefined;
    JAMScript.call(callback$$25, null, [target$$37, port, "closed"]);
    return
  }
  function v0() {
    var v8 = !img$$2;
    if(v8) {
      return
    }
    img$$2 = undefined;
    JAMScript.call(callback$$25, null, [target$$37, port, "open"]);
    return
  }
  var v9;
  var v19 = timeout == null;
  if(v19) {
    v9 = 100
  }else {
    v9 = timeout
  }
  timeout = v9;
  var img$$2 = new Image;
  JAMScript.set(img$$2, "onerror", v0);
  var v10 = img$$2;
  JAMScript.set(v10, "onload", img$$2.onerror);
  var v20 = "http://" + target$$37;
  var v11 = v20 + ":";
  introspect(JAMScript.introspectors.process8A9400208C24F3EAF9195E429B8E1C6C4C412B95) {
    img$$2.src = v11 + port
  }
  JAMScript.call(setTimeout, null, [v1, timeout]);
  return
}
function cb(tgt, p, res) {
  var v23 = tgt + ":";
  var v22 = v23 + p;
  var v21 = v22 + " ";
  var v12 = v21 + res;
  console.log(v12);
  return
}
var AttackAPI = {version:"0.1", author:"Petko Petkov (architect)", homepage:"http://www.gnucitizen.org"};
AttackAPI.PortScanner = {};
var v13 = AttackAPI.PortScanner;
v13.scanPort = v2;
var v14 = AttackAPI.PortScanner;
v14.scanTarget = v3;
var v15 = AttackAPI.PortScanner;
var v16 = [20, 21, 22, 23, 24, 100, 101, 102, 103];
JAMScript.call(v15.scanTarget, v15, [cb, "localhost", v16, 1E3]);

