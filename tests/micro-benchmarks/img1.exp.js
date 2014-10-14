// img1.js
function v0() {
  alert("indexOf 2: " + String.prototype.indexOf);
  return;
}
var html = "<img src='notapic.jpg' onerror='String.prototype.indexOf = false' />";
var elts = document.getElementsByTagName("div");
var elt = elts.item(0);
JAM.set(elt, "innerHTML", html);
alert("indexOf 1: " + String.prototype.indexOf);
JAM.call(setTimeout, null, [v0, 1E3])
