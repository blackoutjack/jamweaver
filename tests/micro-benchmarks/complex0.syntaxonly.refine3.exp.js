// complex0.js
var result = 4;
var a = 2;
var x = [3, 4, 5, 6, 7];
var y = [6, 7, 8];
var z = 3;
var currentRow = 1;
var lastRow = 3;
var nextRow = 2;
var v0 = currentRow;
var v1 = y[currentRow] + a * (result + x[currentRow = currentRow + 1] + x[lastRow = lastRow + 1] + x[nextRow = nextRow + 1]);
introspect(JAM.policy.p1) {
  result = x[v0] = v1 * z;
}

