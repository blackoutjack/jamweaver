var cnt = 10;
function f() {
  cnt++;
  return 3;
}
var a = [4,6,8,10,12];
var i = 2;
var b;
//b = ++(a[f()]);
b = a[f()] += 1;
//b = a[f()] = a[f()] + 1;
alert("a: " + a + " b: " + b + " i: " + i + " cnt: " + cnt);
