// multipolicy.js
var a = JAM.call(document.getElementById, document, ["ok"], JAM.policy.p6);
introspect(JAM.policy.p1) {
  var b = document.cookie
}
introspect(JAM.policy.p4) {
  document.cookie = "other";
}
var c = JAM.call(document.createElement, document, ["img"], JAM.policy.p6);
introspect(JAM.policy.p3) {
  c.src = b;
}
JAM.call(document.write, document, [b], JAM.policy.p6)

