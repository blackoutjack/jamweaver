var a = new String;
if(JAM.isEval(eval)) {
  eval("introspect(JAM.policy.pFull) { " + "String = Boolean" + " }")
}else {
  JAM.call(eval, null, ["String = Boolean"])
}
var b = new String
