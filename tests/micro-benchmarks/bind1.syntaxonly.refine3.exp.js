// bind1.js
introspect(JAM.policy.p1) {
  x = 1;
}
var e = JAM.call(eval.bind, eval, [null, "x = 2"]);
e()

