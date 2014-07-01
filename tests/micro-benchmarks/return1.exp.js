function g() {
  try {
    if(x) {
      return
    }else {
      x = 4
    }
  }finally {
    introspect(JAMScript.introspectors.process6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2) {
      x = 2
    }
  }
  x = 1;
  return
}
x = 3;
g();
JAMScript.call(print, null, [x]);

