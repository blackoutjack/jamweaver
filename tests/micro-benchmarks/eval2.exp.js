// eval2.js
function f() {
  if (JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + "String.prototype.indexOf = String.prototype.toLowerCase;" + " }");
  } else {
    JAM.call(eval, null, ["String.prototype.indexOf = String.prototype.toLowerCase;"]);
  }
  var v = "OK".indexOf("K");
  return v;
}
x = f()
