// attribute2.js
var elt = document.createElement("script");
JAM.call(elt.setAttribute, elt, ["src", "notascript.js"]);
var node = elt.getAttributeNode("src");
node.value = "exfil.js";
var v0 = document.body;
JAM.call(v0.appendChild, v0, [elt])

