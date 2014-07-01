var elt = document.createElement("script");
JAMScript.set(elt, "innerHTML", "x = 2; alert('gotcha');");
var v0 = document.body;
JAMScript.call(v0.appendChild, v0, [elt]);

