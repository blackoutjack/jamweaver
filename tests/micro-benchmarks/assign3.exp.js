// assign3.js
function f() {
  cnt = cnt + 1;
  return 3
}
var cnt = 10;
var a = [4, 6, 8, 10, 12];
var i = 2;
var b;
var v0 = f();
b = JAM.set(a, v0, a[v0] + 1);
alert("a: " + a + " b: " + b + " i: " + i + " cnt: " + cnt)
