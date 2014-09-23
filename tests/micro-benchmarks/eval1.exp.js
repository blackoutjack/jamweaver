function f() {
  if(JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + "x = 2" + " }")
  }else {
    JAM.call(eval, null, ["x = 2"])
  }
  return
}
x = 0;
f()
