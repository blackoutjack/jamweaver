x = 3;
y = 4;
switch(y) {
  case x = 1:
    JAMScript.call(print, null, ["1st case"]);
    break;
  case introspect(JAMScript.introspectors.process6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2) {
    x = 2
  }
  :
    JAMScript.call(print, null, ["2nd case"]);
    break;
  case x = 3:
    JAMScript.call(print, null, ["3rd case"]);
    break;
  default:
    introspect(JAMScript.introspectors.process6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2) {
      x = 2
    }
}
var v0 = "x: " + x;
JAMScript.call(print, null, [v0]);

