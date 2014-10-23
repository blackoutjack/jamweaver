// doublepred.js
introspect(JAM.policy.p2) {
  x = 2;
}
introspect(JAM.policy.p2) {
  x = 3;
}
introspect(JAM.policy.p2) {
  x = 2;
}
introspect(JAM.policy.p2) {
  x = 4;
}

