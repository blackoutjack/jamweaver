function f() {
  return 2
}
function g() {
  return 1
}
var v = 5;
var v2 = v;
v = v + 1;
var a = v2 + f() + g();

