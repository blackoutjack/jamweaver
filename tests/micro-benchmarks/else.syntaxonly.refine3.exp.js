// else.js
introspect(JAM.policy.p1) {
  x = 4;
}
if (x == 4) {
  introspect(JAM.policy.p1) {
    x = 3;
  }
} else {
  introspect(JAM.policy.p1) {
    x = 2;
  }
}

