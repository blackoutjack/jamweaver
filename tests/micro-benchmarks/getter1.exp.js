function hello() {
  return"hello"
}
function v2() {
  function inner() {
    if(JAMScript.isEval(eval)) {
      var f = eval("introspect(JAMScript.introspectors.processAll) { " + "hello" + " }")
    }else {
      var f = JAMScript.call(eval, null, ["hello"])
    }
    var v0 = JAMScript.call(f, null, []);
    return v0 + " whatever"
  }
  var v1 = inner();
  return"ok" + v1
}
var a = {};
var v4 = {get:v2};
JAMScript.call(Object.defineProperty, Object, [a, "ok", v4]);
var v3 = a.ok;
alert(v3);

