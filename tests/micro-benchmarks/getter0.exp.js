// getter0.js
function v0() {
  return "ok";
}
var a = {};
JAM.call(Object.defineProperty, Object, [a, "ok", {get:v0}]);
alert(a.ok)
