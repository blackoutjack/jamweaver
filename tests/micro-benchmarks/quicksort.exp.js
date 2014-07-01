function partition(a, lo, hi) {
  var i$$2 = lo + 1;
  var j = hi;
  for(;true;) {
    var v11 = a[i$$2];
    var v12 = a[lo];
    var v1 = v11 < v12;
    for(;v1;) {
      i$$2 = i$$2 + 1;
      var v0 = i$$2 == hi;
      if(v0) {
        break
      }
      var v13 = a[i$$2];
      var v14 = a[lo];
      v1 = v13 < v14
    }
    var v15 = a[lo];
    var v16 = a[j];
    var v3 = v15 < v16;
    for(;v3;) {
      j = j - 1;
      var v2 = j == lo;
      if(v2) {
        break
      }
      var v17 = a[lo];
      var v18 = a[j];
      v3 = v17 < v18
    }
    var v4 = i$$2 >= j;
    if(v4) {
      break
    }
    var tmp1 = a[j];
    JAMScript.set(a, j, a[i$$2]);
    JAMScript.set(a, i$$2, tmp1)
  }
  var tmp2 = a[j];
  JAMScript.set(a, j, a[lo]);
  JAMScript.set(a, lo, tmp2);
  return j
}
function quickSort(a$$1, lo$$1, hi$$1) {
  var v5 = hi$$1 <= lo$$1;
  if(v5) {
    return
  }
  var p = partition(a$$1, lo$$1, hi$$1);
  var v6 = p - 1;
  quickSort(a$$1, lo$$1, v6);
  var v7 = p + 1;
  quickSort(a$$1, v7, hi$$1);
  return
}
var cnt = 10;
var vals = [];
var i = 0;
var v9 = i < cnt;
for(;v9;) {
  var v19 = Math.random();
  var v8 = v19 * 10;
  vals.push(v8);
  i = i + 1;
  v9 = i < cnt
}
var v20 = vals.length;
var v10 = v20 - 1;
quickSort(vals, 0, v10);

