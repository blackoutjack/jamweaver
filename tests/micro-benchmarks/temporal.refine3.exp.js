// temporal.js
x = 3;
introspect(JAM.policy.p1) {
  x = 2;
}
x = 6;
introspect(JAM.policy.p3) {
  x = 5;
}

