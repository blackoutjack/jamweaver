var v7 = document.forms;
var f = v7.length;
var i = 0;
var pos = -1;
var v2 = pos == -1;
if(v2) {
  v2 = i < f
}
var v1 = v2;
for(;v1;) {
  var v8 = document.forms;
  var v9 = v8[i];
  var v10 = v9.elements;
  var e = v10.length;
  var j = 0;
  var v3 = pos == -1;
  if(v3) {
    v3 = j < e
  }
  var v0 = v3;
  for(;v0;) {
    var v11 = document.forms;
    var v12 = v11[i];
    var v13 = v12.elements;
    var v14 = v13[j];
    var v15 = v14.type;
    var v6 = v15 == "text";
    if(!v6) {
      var v16 = document.forms;
      var v17 = v16[i];
      var v18 = v17.elements;
      var v19 = v18[j];
      var v20 = v19.type;
      v6 = v20 == "password"
    }
    if(v6) {
      pos = j
    }
    j++;
    var v4 = pos == -1;
    if(v4) {
      v4 = j < e
    }
    v0 = v4
  }
  i++;
  var v5 = pos == -1;
  if(v5) {
    v5 = i < f
  }
  v1 = v5
}
var v21 = pos >= 0;
if(v21) {
  var v22 = document.forms;
  var v23 = i - 1;
  var v24 = v22[v23];
  var v25 = v24.elements;
  var v26 = v25[pos];
  v26.focus();
  var v27 = document.getElementById("c1");
  checkState('v27.src = "http://www.richjoiner.com"', 'set("%x","src") && getValue("%x","constructor") === obj("#Element")', 0, -1);
  v27.src = "http://www.richjoiner.com"
}
;