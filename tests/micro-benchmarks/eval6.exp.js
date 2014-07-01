if(JAMScript.isEval(eval)) {
  eval("introspect(JAMScript.introspectors.processAll) { " + "var xxx = 5;" + " }")
}else {
  JAMScript.call(eval, null, ["var xxx = 5;"])
}
alert(xxx);

