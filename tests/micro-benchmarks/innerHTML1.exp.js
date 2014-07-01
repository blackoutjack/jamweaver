var div = document.createElement("div");
JAMScript.set(div, "innerHTML", "<a href='#'></a>", JAMScript.process);
introspect(JAMScript.process) {
  var v0 = div.childNodes;
  var d = v0[0]
}
var v1 = "VALUE: " + d;
alert(v1);

