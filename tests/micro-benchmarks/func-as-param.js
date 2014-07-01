function f(g) {
  g();
}
f(function h() {
  x = 2;
});
