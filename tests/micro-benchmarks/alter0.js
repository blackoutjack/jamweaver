function f() {
  prop = "b";
  return 2;
}
function g() {
  n = o;
  o = {x: "other"};
  return -1;
}
var o = {a: 5, b: 7, c: "ok"};
var prop = "a";
var n = null;
// This demonstrates the order of operations for property assignment.
// The LHS is first evaluated to get a memory location to await the
// value produced by the RHS. Then the RHS is evaluated.
o[prop] = f() + g() + 1;
alert("prop: " + prop);
for (var q in n) {
  alert("n[" + q + "]: " + n[q]);
}
for (var p in o) {
  alert("o[" + p + "]: " + o[p]);
}
