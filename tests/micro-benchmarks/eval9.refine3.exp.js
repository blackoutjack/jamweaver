// eval9.js
function f() {
  var y$$30 = x;
  if (JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + "var x;" + " }");
  } else {
    JAM.call(eval, null, ["var x;"]);
  }
  return y$$30;
}
x = 4;
var z = f()
