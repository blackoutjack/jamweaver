// short-circuit.js
var a = 0;
var b = 1;
var v0 = a;
if (v0) {
  v0 = b + 1;
}
introspect(JAM.policy.p1) {
  x = v0;
}

