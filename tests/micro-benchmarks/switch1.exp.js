// switch1.js
function f() {
  alert("CNT: " + cnt);
  return cnt++
}
var cnt = 0;
var i = 0;
out:for(;true;) {
  switch(i) {
    case f():
      alert("GOT 0");
      break;
    case f():
      alert("GOT 1");
      break;
    case f():
      alert("GOT 2");
      break;
    case f():
      alert("GOT 3");
      break;
    default:
      alert("GOT DEFAULT");
      break out
  }
  i = i * 2
}
