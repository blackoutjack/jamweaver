try {
  introspect(JAM.policy.p1) {
    x = 2
  }
}finally {
  x = 3
}
