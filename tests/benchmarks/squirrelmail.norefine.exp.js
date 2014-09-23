var f = document.forms.length;
var i = 0;
var pos = -1;
var v7 = pos == -1;
if(v7) {
  v7 = i < f
}
var v4 = v7;
for(;v4;) {
  var e = document.forms[i].elements.length;
  var j = 0;
  var v9 = pos == -1;
  if(v9) {
    v9 = j < e
  }
  var v3 = v9;
  for(;v3;) {
    var v10 = document.forms[i].elements[j].type == "text";
    if(!v10) {
      v10 = document.forms[i].elements[j].type == "password"
    }
    if(v10) {
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
if(pos >= 0) {
  document.forms[i - 1].elements[pos].focus()
}
