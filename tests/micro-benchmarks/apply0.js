x = 1;
var e = eval;
e.apply(null, ["x = 2"]);
alert(x);
