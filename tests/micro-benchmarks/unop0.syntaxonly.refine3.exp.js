// unop0.js
var a = [0, 1, 2, 3, 4, 5, 6];
var b;
var i = 0;
var v2 = i < a.length;
for (;v2;) {
  var idx = i;
  var v0 = idx;
  introspect(JAM.policy.p1) {
    a[v0] = idx = idx + 1;
  }
  b = a[v0];
  alert("i: " + i + " b: " + b + " idx: " + idx + " a[idx]: " + a[idx] + " a[i]: " + a[i]);
  i = i + 1;
  v2 = i < a.length;
}

