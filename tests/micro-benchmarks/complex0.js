var result = 4;
var a = 2;
var x = [3, 4, 5, 6, 7];
var y = [6, 7, 8];
var z = 3;
var currentRow = 1;
var lastRow = 3;
var nextRow = 2;
result = x[currentRow] = (y[currentRow] + a * (result + x[++currentRow] + x[++lastRow] + x[++nextRow])) * z;
