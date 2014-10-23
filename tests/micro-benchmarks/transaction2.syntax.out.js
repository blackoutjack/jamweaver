// transaction2.js
function f() {
  var v111 = 1;
  introspect(JAM.policy.p1) {
    x = undefined;
  }
  introspect(p.alert) {
    introspect(JAM.policy.p1) {
      x = 2;
    }
  }
  alert(x);
  return;
}
f()

