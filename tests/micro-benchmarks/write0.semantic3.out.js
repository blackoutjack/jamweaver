// write0.js
JAM.call(document.write, document, ["<script>document.write("]);
JAM.call(document.write, document, ["'BOY HOWDY'"]);
JAM.call(document.write, document, [");\x3c/script>"]);
JAM.call(document.close, document, [])

