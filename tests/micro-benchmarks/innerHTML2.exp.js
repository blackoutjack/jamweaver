// innerHTML2.js
var elt = document.createElement("script");
JAM.set(elt, "innerHTML", "x = 2; alert('gotcha');");
var v0 = document.body;
JAM.call(v0.appendChild, v0, [elt])
