// transaction0.js
function pol(tx) {
  tx.commit();
  return;
}
introspect(JAM.policy.p1) {
  x = undefined;
}
introspect(pol) {
  introspect(JAM.policy.p1) {
    x = 2;
  }
}

