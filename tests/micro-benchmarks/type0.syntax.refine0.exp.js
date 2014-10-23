// type0.js
var a = "ok";
var b = "k";
var c = JAM.call(a.indexOf, a, [b], JAM.policy.p1);
JAM.call(alert, null, [c], JAM.policy.p1)

