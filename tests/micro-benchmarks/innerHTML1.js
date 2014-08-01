var div = document.createElement("div");
introspect(JAM.process) {
div.innerHTML = "<a href='#'></a>";
var d = div.childNodes[0];
}
alert("VALUE: " + d);
