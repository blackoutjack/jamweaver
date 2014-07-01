var v0 = document.forms;
var f = v0.length;
var i = 0;
var pos = -1;
var v8 = pos == -1;
if(v8) {
  v8 = i < f
}
var v4 = v8;
for(;v4;) {
  var v15 = document.forms;
  var v9 = v15[i];
  var v1 = v9.elements;
  var e = v1.length;
  var j = 0;
  var v10 = pos == -1;
  if(v10) {
    v10 = j < e
  }
  var v3 = v10;
  for(;v3;) {
    var v28 = document.forms;
    var v26 = v28[i];
    var v24 = v26.elements;
    var v20 = v24[j];
    var v16 = v20.type;
    var v11 = v16 == "text";
    var v18 = !v11;
    if(v18) {
      var v29 = document.forms;
      var v27 = v29[i];
      var v25 = v27.elements;
      var v21 = v25[j];
      var v17 = v21.type;
      v11 = v17 == "password"
    }
    var v2 = v11;
    if(v2) {
      pos = j
    }
    j = j + 1;
    var v12 = pos == -1;
    if(v12) {
      v12 = j < e
    }
    v3 = v12
  }
  i = i + 1;
  var v13 = pos == -1;
  if(v13) {
    v13 = i < f
  }
  v4 = v13
}
var v7 = pos >= 0;
if(v7) {
  var v22 = document.forms;
  var v23 = i - 1;
  var v19 = v22[v23];
  var v14 = v19.elements;
  var v5 = v14[pos];
  v5.focus();
  var v6 = document.getElementById("c1");
  introspect(JAMScript.introspectors.processD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB) {
    v6.src = "http://www.blackoutjack.com/pics/TweekGhost.jpg"
  }
}
;
