// apply0.js
x = 1;
var e = eval;
JAM.call(e.apply, e, [null, ["x = 2"]]);
alert(x)

