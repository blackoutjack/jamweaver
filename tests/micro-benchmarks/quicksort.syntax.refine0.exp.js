// quicksort.js
function partition(a, lo, hi) {
  var i$$2 = lo + 1;
  var j = hi;
  for (;true;) {
    var v1 = a[i$$2] < a[lo];
    for (;v1;) {
      i$$2 = i$$2 + 1;
      if (i$$2 == hi) {
        break;
      }
      v1 = a[i$$2] < a[lo];
    }
    var v3 = a[lo] < a[j];
    for (;v3;) {
      j = j - 1;
      if (j == lo) {
        break;
      }
      v3 = a[lo] < a[j];
    }
    if (i$$2 >= j) {
      break;
    }
    var tmp1 = a[j];
    JAM.set(a, j, a[i$$2], JAM.policy.p1);
    JAM.set(a, i$$2, tmp1, JAM.policy.p1);
  }
  var tmp2 = a[j];
  JAM.set(a, j, a[lo], JAM.policy.p1);
  JAM.set(a, lo, tmp2, JAM.policy.p1);
  return j;
}
function quickSort(a$$1, lo$$1, hi$$1) {
  if (hi$$1 <= lo$$1) {
    return;
  }
  var p = partition(a$$1, lo$$1, hi$$1);
  quickSort(a$$1, lo$$1, p - 1);
  quickSort(a$$1, p + 1, hi$$1);
  return;
}
var cnt = 10;
var vals = [];
var i = 0;
var v9 = i < cnt;
for (;v9;) {
  vals.push(Math.random() * 10);
  i = i + 1;
  v9 = i < cnt;
}
quickSort(vals, 0, vals.length - 1)

