var a = 5;
if(JAM.isEval(eval)) {
  eval("introspect(JAM.policy.pFull) { " + 'a = "ok"' + " }")
}else {
  JAM.call(eval, null, ['a = "ok"'])
}
var b = a;

