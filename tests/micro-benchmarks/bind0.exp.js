function f() {
  return this.indexOf("k")
}
var g = JAMScript.call(f.bind, f, ["ok"]);
var v = JAMScript.call(g, null, []);

