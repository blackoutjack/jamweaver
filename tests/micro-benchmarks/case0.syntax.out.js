// case0.js
introspect(JAM.policy.p1) {
  x = 3;
}
y = 4;
switch(y) {
  case introspect(JAM.policy.p1) {
    x = 1;
  }
  :
    print("1st case");
    break;
  case introspect(JAM.policy.p1) {
    x = 2;
  }
  :
    print("2nd case");
    break;
  case introspect(JAM.policy.p1) {
    x = 3;
  }
  :
    print("3rd case");
    break;
  default:
    introspect(JAM.policy.p1) {
      x = 2;
    }
  ;
}
print("x: " + x)

