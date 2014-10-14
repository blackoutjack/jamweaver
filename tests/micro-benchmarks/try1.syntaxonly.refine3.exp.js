// try1.js
try {
  introspect(JAM.policy.p1) {
    x = 2;
  }
} finally {
  introspect(JAM.policy.p1) {
    x = 3;
  }
}

