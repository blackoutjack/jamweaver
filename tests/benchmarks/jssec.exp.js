function snipDisplay() {
  var c = "c1";
  var p = "s1";
  var v0 = document.getElementById(c);
  var v1 = v0.checked;
  var v2 = v1 == true;
  var v3 = document.getElementById(p);
  var v4 = v3.style;
  v4.display = "block";
  var v5 = document.getElementById(p);
  var v6 = v5.style;
  v6.display = "none";
  v2 ? v4.display : v6.display
}
function initSnippets() {
  function v8() {
    snipDisplay()
  }
  var d = document;
  var v7 = document.getElementById("c1");
  v7.onclick = v8
}
initSnippets();
var v9 = document.getElementById("c1");
v9.onclick();
