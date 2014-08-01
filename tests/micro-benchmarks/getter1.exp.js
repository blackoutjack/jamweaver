function hello() {
  return"hello"
}
function v2() {
  function inner() {
    if(JAM.isEval(eval)) {
      var f = eval("introspect(JAM.policy.pFull) { " + "hello" + " }")
    }else {
      var f = JAM.call(eval, null, ["hello"])
    }
    return f() + " whatever"
  }
  return"ok" + inner()
}
var a = {};
JAM.call(Object.defineProperty, Object, [a, "ok", {get:v2}]);
alert(a.ok);

