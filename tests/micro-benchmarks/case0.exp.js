// case0.js
x = 3;
y = 4;
switch(y) {
  case x = 1:
    JAM.call(print, null, ["1st case"]);
    break;
  case introspect(JAM.policy.p1) {
    x = 2
  }
  :
    JAM.call(print, null, ["2nd case"]);
    break;
  case x = 3:
    JAM.call(print, null, ["3rd case"]);
    break;
  default:
    introspect(JAM.policy.p1) {
      x = 2
    }
}
JAM.call(print, null, ["x: " + x])
