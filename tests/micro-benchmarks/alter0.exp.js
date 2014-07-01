function f() {
  prop = "b";
  return 2
}
function g() {
  n = o;
  o = {x:"other"};
  return-1
}
var o = {a:5, b:7, c:"ok"};
var prop = "a";
var n = null;
var v0 = o;
var v1 = prop;
var v10 = f();
var v11 = g();
var v5 = v10 + v11;
JAMScript.set(v0, v1, v5 + 1);
var v2 = "prop: " + prop;
alert(v2);
var q;
for(q in n) {
  var v12 = "n[" + q;
  var v6 = v12 + "]: ";
  var v7 = n[q];
  var v3 = v6 + v7;
  alert(v3)
}
var p;
for(p in o) {
  var v13 = "o[" + p;
  var v8 = v13 + "]: ";
  var v9 = o[p];
  var v4 = v8 + v9;
  alert(v4)
}
;
