var html = "<img src='notapic.jpg' onerror='String.prototype.indexOf = false' />";
var elt = document.getElementById("note");
elt.innerHTML = html;
alert("indexOf 1: " + String.prototype.indexOf);
setTimeout(function() { alert("indexOf 2: " + String.prototype.indexOf); }, 1000);
