// portscanner.js
function v3(callback$$26, target$$38, ports$$1, timeout$$1) {
  index = 0;
  var v6 = index < ports$$1.length;
  for(;v6;) {
    var v4 = AttackAPI.PortScanner;
    JAM.call(v4.scanPort, v4, [callback$$26, target$$38, ports$$1[index], timeout$$1]);
    index = index + 1;
    v6 = index < ports$$1.length
  }
  return
}
function v2(callback$$25, target$$37, port, timeout) {
  function v1() {
    if(!img$$2) {
      return
    }
    img$$2 = undefined;
    JAM.call(callback$$25, null, [target$$37, port, "closed"]);
    return
  }
  function v0() {
    if(!img$$2) {
      return
    }
    img$$2 = undefined;
    JAM.call(callback$$25, null, [target$$37, port, "open"]);
    return
  }
  var v9;
  if(timeout == null) {
    v9 = 100
  }else {
    v9 = timeout
  }
  timeout = v9;
  var img$$2 = new Image;
  JAM.set(img$$2, "onerror", v0);
  JAM.set(img$$2, "onload", img$$2.onerror);
  var v10 = "http://" + target$$37 + ":";
  introspect(JAM.policy.p1) {
    img$$2.src = v10 + port
  }
  JAM.call(setTimeout, null, [v1, timeout]);
  return
}
function cb(tgt, p, res) {
  console.log(tgt + ":" + p + " " + res);
  return
}
var AttackAPI = {version:"0.1", author:"Petko Petkov (architect)", homepage:"http://www.gnucitizen.org"};
AttackAPI.PortScanner = {};
AttackAPI.PortScanner.scanPort = v2;
AttackAPI.PortScanner.scanTarget = v3;
var v14 = AttackAPI.PortScanner;
JAM.call(v14.scanTarget, v14, [cb, "localhost", [20, 21, 22, 23, 24, 100, 101, 102, 103], 1E3])
