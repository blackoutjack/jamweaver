function f() {
  var y$$31 = x;
  if(JAMScript.isEval(eval)) {
    eval("introspect(JAMScript.introspectors.processAll) { " + "var z;" + " }")
  }else {
    JAMScript.call(eval, null, ["var z;"])
  }
  return y$$31
}
if(JAMScript.isEval(eval)) {
  eval("introspect(JAMScript.introspectors.processAll) { " + "var x = 4;" + " }")
}else {
  JAMScript.call(eval, null, ["var x = 4;"])
}
z = f();
alert(z);

