var div = document.createElement("div");
introspect(JAMScript.process) {
div.innerHTML = "<a href='#'></a>";
var d = div.childNodes[0];
}
alert("VALUE: " + d);
