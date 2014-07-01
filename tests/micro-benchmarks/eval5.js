var letters = ["e", "a", "v", "l"];
function f1(a) {
  for (var i=0; i<2; i++) {
    a[i] = letters[i * 2];
  }
}
function f2(a) {
  for (var i=0; i<2; i++) {
    a[i + 2] = letters[i * 2 + 1];
  }
}
var name = [];
f1(name);
f2(name);
name = name.join("");
var f3 = this[name];
var code = "String.prototype.indexOf = String.prototype.toLowerCase";
f3(code);
var result = "YOU'VE BEEN EVAL'D".indexOf("V");
