function merge(left, right) {
    // receive the left and right sublist as arguments.
    // 'result' variable for the merged result of two sublists.
    var result = [];
    // assign the element of the sublists to 'result' variable until there is no element to merge. 
    while (left.length > 0 || right.length > 0) {
        if (left.length > 0 && right.length > 0) {
            var l0 = left[0];
            var r0 = right[0];
            // compare the first two element, which is the small one, of each two sublists.
            if (l0 <= r0) {
                // the small element is copied to 'result' variable.
                // delete the copied one(a first element) in the sublist.
                result.push(l0);
                left.shift();
            } else {
                // same operation as the above(in the right sublist).
                result.push(r0);
                right.shift();
            }
        } else if (left.length > 0) {
            // copy all of remaining elements from the sublist to 'result' variable, 
            // when there is no more element to compare with.
            result.push(left.shift());
        } else if (right.length > 0) {
            // same operation as the above(in the right sublist).
            result.push(right.shift());
        }
    }
    // return the result of the merged sublists(or completed one, finally).
    // the length of the left and right sublists will grow bigger and bigger, after the next call of this function.
    return result
}

function mergeSort(a) {
    // if list size is 0 (empty) or 1, consider it sorted and return it
    // (using less than or equal prevents infinite recursion for a zero length m)
    if (a.length <= 1) {
        return a
    }
    // else list size is > 1, so split the list into two sublists
    // 1. DIVIDE Part...
    var left = [];
    var right = [];
    var mid = a.length / 2;
    for (var i=0; i<mid; i++) {
      left.push(a[i]);
    }
    for (var j=mid; j<a.length; j++) {
      right.push(a[j]);
    }

    // recursively call mergeSort() to further split each sublist
    // until sublist size is 1
    left = mergeSort(left)
    right = mergeSort(right)
    // merge the sublists returned from prior calls to mergeSort()
    // and return the resulting merged sublist
    // 2. CONQUER Part...
    return merge(left, right)
}


// Generate the array to be sorted.
var cnt = 4;
var vals = [];
for (var i=0; i<cnt; i++) {
  vals.push(Math.random() * 10);
}
//print("BEFORE: " + vals);

// Sort the array.
var sorted = mergeSort(vals);

