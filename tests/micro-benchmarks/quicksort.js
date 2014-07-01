function partition(a, lo, hi) {
  var i = lo + 1;
  var j = hi;
  while (true) {
    // Get a pair of indices that should be exchanged. 
    while (a[i] < a[lo]) {
      ++i;
      if (i == hi) break;
    }
    while (a[lo] < a[j]) {
      --j;
      if (j == lo) break;
    }
    // Don't exchange the values if they're already in order.
    if (i >= j) break;
    // Exchange the i'th and j'th values.
    var tmp1 = a[j];
    a[j] = a[i];
    a[i] = tmp1;
  }
  var tmp2 = a[j];
  a[j] = a[lo];
  a[lo] = tmp2;
  return j;
}

function quickSort(a, lo, hi) {
  if (hi <= lo) return;
  var p = partition(a, lo, hi);
  
  quickSort(a, lo, p-1);
  quickSort(a, p+1, hi);
}

// Generate the array to be sorted.
var cnt = 10;
var vals = [];
for (var i=0; i<cnt; i++) {
  vals.push(Math.random() * 10);
}
//print("BEFORE: " + vals);

// Sort the array.
quickSort(vals, 0, vals.length-1);
