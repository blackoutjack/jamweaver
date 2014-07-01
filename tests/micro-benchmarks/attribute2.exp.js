var elt = document.createElement("script");
JAMScript.call(elt.setAttribute, elt, ["src", "notascript.js"]);
var node = elt.getAttributeNode("src");
node.value = "exfil.js";
var v0 = document.body;
JAMScript.call(v0.appendChild, v0, [elt]);

