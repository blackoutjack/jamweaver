x = 4;
function f() {
  var y = x;
  eval("var x;");
  return y;
}
var z = f();
// |z| should be 4, not undefined, which would be the case if the
// eval'd string is simply unwrapped.
