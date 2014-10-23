// multipolicy1.js
var b = 1;
var v0 = document.cookie;
introspect(JAM.policy.p4) {
  document.cookie = v0 + 1;
}
introspect(JAM.policy.p6) {
  var v1 = a[b]
}
introspect(JAM.policy.p5) {
  a[b] = v1 + 1;
}
JAM.set(a, c, 10, JAM.policy.p5)

