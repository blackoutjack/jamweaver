function f() {
  return this.indexOf("k");
}
var g = f.bind("ok");
var v = g();
