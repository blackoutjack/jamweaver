function g() {
  try {
    if(x) {
      return
    }else {
      x = 4
    }
  }finally {
    introspect(JAM.policy.p1) {
      x = 2
    }
  }
  x = 1;
  return
}
x = 3;
g();
JAM.call(print, null, [x]);

