// seedtest.js
var a = 0;
var b = 1;
var d = "fine";
var e = 4;
var c = [];
introspect(JAM.policy.p1) {
  c[a] = 0;
}
introspect(JAM.policy.p1) {
  c[b] = 1;
}
JAM.set(c, d, 3, JAM.policy.p1);
introspect(JAM.policy.p1) {
  c[e] = 4;
}

