x = 4;
function f() {
  var y = x;
  eval("eval(\"var x;\");");
  return y;
}
var z = f();
// |z| should be 4, not undefined, which would be the case if the
// eval'd string is doubly unwrapped. It is safe to unwrap once though.
