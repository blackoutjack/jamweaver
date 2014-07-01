function f(p) { alert(p); }
function c() {
  this.m = f;
}
var o = new c();
var a = o.m("ok");
