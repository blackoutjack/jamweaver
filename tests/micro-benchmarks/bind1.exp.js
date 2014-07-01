x = 1;
var e = JAMScript.call(eval.bind, eval, [null, "x = 2"]);
JAMScript.call(e, null, []);

