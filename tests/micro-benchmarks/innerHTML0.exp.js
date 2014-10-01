// innerHTML0.js
x = 1;
var elt = document.getElementById("test");
JAM.set(elt, "innerHTML", "<script>x = 2\x3c/script>")
