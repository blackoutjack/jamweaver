function v0() {
  return"ok"
}
var a = {};
var v2 = {get:v0};
JAMScript.call(Object.defineProperty, Object, [a, "ok", v2]);
var v1 = a.ok;
alert(v1);

