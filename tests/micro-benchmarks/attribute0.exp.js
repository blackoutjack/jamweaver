var elt = document.createElement("script");
var node = document.createAttribute("src");
node.value = "exfil.js";
JAM.call(elt.setAttributeNode, elt, [node]);
var v0 = document.body;
JAM.call(v0.appendChild, v0, [elt])
