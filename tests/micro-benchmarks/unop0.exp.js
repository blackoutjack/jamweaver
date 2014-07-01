var a = [0, 1, 2, 3, 4, 5, 6];
var b;
var i = 0;
var v3 = a.length;
var v2 = i < v3;
for(;v2;) {
  var idx = i;
  var v0 = idx;
  a[v0] = idx = idx + 1;
  b = a[v0];
  var v14 = "i: " + i;
  var v13 = v14 + " b: ";
  var v12 = v13 + b;
  var v11 = v12 + " idx: ";
  var v10 = v11 + idx;
  var v8 = v10 + " a[idx]: ";
  var v9 = a[idx];
  var v7 = v8 + v9;
  var v4 = v7 + " a[i]: ";
  var v5 = a[i];
  var v1 = v4 + v5;
  alert(v1);
  i = i + 1;
  var v6 = a.length;
  v2 = i < v6
}
;
