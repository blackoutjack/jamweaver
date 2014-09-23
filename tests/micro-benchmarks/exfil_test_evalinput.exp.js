function exfiltrate_key_history() {
  var exp = document.getElementById("expinput").value;
  if(JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + exp + " }")
  }else {
    JAM.call(eval, null, [exp])
  }
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
