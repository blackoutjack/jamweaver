introspect(JAMScript.introspectors.processAll) {
  document.write("<script>document.write(");
  document.write("'BOY HOWDY'");
  document.write(");\x3c/script>");
  document.close()
}
;
