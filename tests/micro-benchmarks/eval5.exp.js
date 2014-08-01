function f1(a) {
  var i$$1 = 0;
  var v1 = i$$1 < 2;
  for(;v1;) {
    a[i$$1] = letters[i$$1 * 2];
    i$$1 = i$$1 + 1;
    v1 = i$$1 < 2
  }
  return
}
function f2(a$$1) {
  var i$$2 = 0;
  var v3 = i$$2 < 2;
  for(;v3;) {
    a$$1[i$$2 + 2] = letters[i$$2 * 2 + 1];
    i$$2 = i$$2 + 1;
    v3 = i$$2 < 2
  }
  return
}
var letters = ["e", "a", "v", "l"];
var name = [];
f1(name);
f2(name);
name = name.join("");
var f3 = this[name];
var code = "String.prototype.indexOf = String.prototype.toLowerCase";
JAM.call(f3, null, [code]);
var result = "YOU'VE BEEN EVAL'D".indexOf("V");

