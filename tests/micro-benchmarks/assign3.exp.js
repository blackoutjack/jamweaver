function f() {
  cnt = cnt + 1;
  return 3
}
var cnt = 10;
var a = [4, 6, 8, 10, 12];
var i = 2;
var b;
var v0 = f();
var v3 = a[v0];
b = JAMScript.set(a, v0, v3 + 1);
var v8 = "a: " + a;
var v7 = v8 + " b: ";
var v6 = v7 + b;
var v5 = v6 + " i: ";
var v4 = v5 + i;
var v2 = v4 + " cnt: ";
var v1 = v2 + cnt;
alert(v1);

