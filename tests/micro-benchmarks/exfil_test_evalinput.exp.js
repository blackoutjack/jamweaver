function exfiltrate_key_history() {
  var v0 = document.getElementById("expinput");
  var exp = v0.value;
  if(JAMScript.isEval(eval)) {
    eval("introspect(JAMScript.introspectors.processAll) { " + exp + " }")
  }else {
    JAMScript.call(eval, null, [exp])
  }
  return
}
var v1 = document.getElementById("test");
JAMScript.set(v1, "onclick", exfiltrate_key_history);

