function v1() {
  var v2 = cnt < 6;
  if(v2) {
    cnt = cnt + 1;
    JAMScript.call(g, null, [])
  }
  return
}
function v0() {
  var v3 = cnt < 3;
  if(v3) {
    cnt = cnt + 1;
    JAMScript.call(f, null, [])
  }
  return
}
var x = true;
if(x) {
  var cnt = 0;
  var f = v0;
  var g = v1;
  JAMScript.call(f, null, []);
  JAMScript.call(g, null, [])
}
;
