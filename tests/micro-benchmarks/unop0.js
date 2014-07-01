var a = [0,1,2,3,4,5,6];
var b;
for (var i=0; i<a.length; i++) {
  var idx = i;
  var v0 = idx;
  a[v0] = ++idx;
  b = a[v0];
  alert("i: " + i + " b: " + b + " idx: " + idx + " a[idx]: " + a[idx] + " a[i]: " + a[i]);
}
