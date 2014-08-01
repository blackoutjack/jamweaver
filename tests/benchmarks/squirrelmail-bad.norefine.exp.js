var f = document.forms.length;
var i = 0;
var pos = -1;
var v8 = pos == -1;
if(v8) {
  v8 = i < f
}
var v4 = v8;
for(;v4;) {
  var e = document.forms[i].elements.length;
  var j = 0;
  var v10 = pos == -1;
  if(v10) {
    v10 = j < e
  }
  var v3 = v10;
  for(;v3;) {
    var v11 = document.forms[i].elements[j].type == "text";
    if(!v11) {
      v11 = document.forms[i].elements[j].type == "password"
    }
    if(v11) {
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
if(pos >= 0) {
  document.forms[i - 1].elements[pos].focus();
  var v6 = document.getElementById("c1");
  introspect(JAM.policy.pD0BBA7FAE07D4CAC3C07091FDFB8C6213A5ACAAB) {
    v6.src = "http://www.blackoutjack.com/pics/TweekGhost.jpg"
  }
}
;
