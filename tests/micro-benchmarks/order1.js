function f() {
  return { ok: "got it!" };
}
function g() {
  return "ok";
}
var v = f()[g()];
