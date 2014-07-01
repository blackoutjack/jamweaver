function f() {
  var v111 = 1;
  x = undefined;
  introspect(alert) {
    x = 2
  }
  alert(x);
}
f();
