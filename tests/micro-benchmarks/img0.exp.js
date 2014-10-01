// img0.js
function v0() {
  alert("indexOf 2: " + String.prototype.indexOf);
  return
}
var html = "<img src='notapic.jpg' onerror='String.prototype.indexOf = false' />";
var elt = document.getElementById("note");
JAM.set(elt, "innerHTML", html);
alert("indexOf 1: " + String.prototype.indexOf);
JAM.call(setTimeout, null, [v0, 1E3])
