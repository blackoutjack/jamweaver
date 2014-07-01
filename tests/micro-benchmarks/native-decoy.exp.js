function f() {
  return
}
document.getElementById = f;
var elt = JAMScript.call(document.getElementById, document, ["ok"]);

