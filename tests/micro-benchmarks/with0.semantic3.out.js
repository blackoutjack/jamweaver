// with0.js
with(document) {
  var elt = JAM.call(getElementById, null, ["note"], JAM.policy.p1)
}
JAM.set(elt, "innerHTML", "ok")

