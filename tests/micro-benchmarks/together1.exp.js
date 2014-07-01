function v0() {
  JAMScript.call(notanid, null, []);
  return
}
try {
  alert("OK1");
  var f = v0;
  JAMScript.call(f, null, [])
}catch(ex) {
  var v7 = ex.name;
  var v3 = v7 + ": ";
  var v4 = ex.message;
  var v1 = v3 + v4;
  console.error(v1);
  introspect(JAMScript.introspectors.process6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2) {
    x = 2
  }
}
try {
  alert("OK2")
}catch(ex$$1) {
  var v8 = ex$$1.name;
  var v5 = v8 + ": ";
  var v6 = ex$$1.message;
  var v2 = v5 + v6;
  console.error(v2)
}
;
