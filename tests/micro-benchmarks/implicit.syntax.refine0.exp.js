// implicit.js
function f() {
  introspect(JAM.policy.p1) {
    x = 3;
  }
  return;
}
f();
introspect(JAM.policy.p1) {
  x = 2;
}

