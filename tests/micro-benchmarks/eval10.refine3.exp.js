// eval10.js
function f() {
  var y$$30 = x;
  if (JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + 'eval("var x;");' + " }");
  } else {
    JAM.call(eval, null, ['eval("var x;");']);
  }
  return y$$30;
}
x = 4;
var z = f()
