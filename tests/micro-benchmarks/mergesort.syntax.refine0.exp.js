// mergesort.js
function merge(left$$1, right$$1) {
  var result = [];
  var v15 = left$$1.length > 0;
  if (!v15) {
    v15 = right$$1.length > 0;
  }
  var v6 = v15;
  for (;v6;) {
    var v16 = left$$1.length > 0;
    if (v16) {
      v16 = right$$1.length > 0;
    }
    if (v16) {
      var l0 = left$$1[0];
      var r0$$1 = right$$1[0];
      if (l0 <= r0$$1) {
        result.push(l0);
        left$$1.shift();
      } else {
        result.push(r0$$1);
        right$$1.shift();
      }
    } else {
      if (left$$1.length > 0) {
        result.push(left$$1.shift());
      } else {
        if (right$$1.length > 0) {
          result.push(right$$1.shift());
        }
      }
    }
    var v19 = left$$1.length > 0;
    if (!v19) {
      v19 = right$$1.length > 0;
    }
    v6 = v19;
  }
  return result;
}
function mergeSort(a) {
  if (a.length <= 1) {
    return a;
  }
  var left$$2 = [];
  var right$$2 = [];
  var mid = a.length / 2;
  var i$$2 = 0;
  var v10 = i$$2 < mid;
  for (;v10;) {
    left$$2.push(a[i$$2]);
    i$$2 = i$$2 + 1;
    v10 = i$$2 < mid;
  }
  var j = mid;
  var v12 = j < a.length;
  for (;v12;) {
    right$$2.push(a[j]);
    j = j + 1;
    v12 = j < a.length;
  }
  left$$2 = mergeSort(left$$2);
  right$$2 = mergeSort(right$$2);
  return merge(left$$2, right$$2);
}
var cnt = 4;
var vals = [];
var i = 0;
var v14 = i < cnt;
for (;v14;) {
  vals.push(Math.random() * 10);
  i = i + 1;
  v14 = i < cnt;
}
var sorted = mergeSort(vals)

