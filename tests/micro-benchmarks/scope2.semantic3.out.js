// scope2.js
function f(p) {
  alert(p);
  return;
}
function c() {
  this.m = f;
  return;
}
var o = new c;
var a = JAM.call(o.m, o, ["ok"])

