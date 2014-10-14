// label0.js
x = 0;
var i = 0;
var v1 = i < 4;
lbl: for (;v1;) {
  introspect(JAM.policy.p1) {
    x = x + 1;
  }
  if (i == 1) {
    break lbl;
  }
  i = i + 1;
  v1 = i < 4;
}
