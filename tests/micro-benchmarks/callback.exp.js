// callback.js
function f() {
  introspect(JAM.policy.p1) {
    x = 2
  }
  return
}
JAM.call(setTimeout, null, [f, 1E3])
