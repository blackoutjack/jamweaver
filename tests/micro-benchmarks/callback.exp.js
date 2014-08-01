function f() {
  introspect(JAM.policy.p6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2) {
    x = 2
  }
  return
}
JAM.call(setTimeout, null, [f, 1E3]);

