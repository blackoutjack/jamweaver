try {
alert("OK1");
function f() {
  notanid();
}
f();
} catch (ex) {
  console.error(ex.name + ": " + ex.message);
}

try {
alert("OK2");
} catch (ex) {
  console.error(ex.name + ": " + ex.message);
}
