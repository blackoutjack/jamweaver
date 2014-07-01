var v0 = document.forms;
var f = v0.length;
var i = 0;
var pos = -1;
var v7 = pos == -1;
if(v7) {
  v7 = i < f
}
var v4 = v7;
for(;v4;) {
  var v14 = document.forms;
  var v8 = v14[i];
  var v1 = v8.elements;
  var e = v1.length;
  var j = 0;
  var v9 = pos == -1;
  if(v9) {
    v9 = j < e
  }
  var v3 = v9;
  for(;v3;) {
    var v27 = document.forms;
    var v25 = v27[i];
    var v23 = v25.elements;
    var v19 = v23[j];
    var v15 = v19.type;
    var v10 = v15 == "text";
    var v17 = !v10;
    if(v17) {
      var v28 = document.forms;
      var v26 = v28[i];
      var v24 = v26.elements;
      var v20 = v24[j];
      var v16 = v20.type;
      v10 = v16 == "password"
    }
    var v2 = v10;
    if(v2) {
      pos = j
    }
    j = j + 1;
    var v11 = pos == -1;
    if(v11) {
      v11 = j < e
    }
    v3 = v11
  }
  i = i + 1;
  var v12 = pos == -1;
  if(v12) {
    v12 = i < f
  }
  v4 = v12
}
var v6 = pos >= 0;
if(v6) {
  var v21 = document.forms;
  var v22 = i - 1;
  var v18 = v21[v22];
  var v13 = v18.elements;
  var v5 = v13[pos];
  v5.focus()
}
;
