var p = { c: 3 };
function O() {
  this.a = 1;
  this.b = 2;
}
var x = 9;
O.prototype = p;
var o = new O();
with (o) {
  var d = a;
  var e = c;
  var f = x;
}
print("d: " + d + " e: " + e + " f: " + f);
