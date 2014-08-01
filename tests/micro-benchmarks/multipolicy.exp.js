var a = JAM.call(document.getElementById, document, ["ok"], JAM.policy.p76F930B34187247043082CAF9881927B310E8F56);
introspect(JAM.policy.pB66E1E6A02EE17375C126A2C8AC7D7F8CC6B0C12) {
  var b = document.cookie
}
introspect(JAM.policy.p425E08A28862414CF7130381FE99A660F52DB811) {
  document.cookie = "other"
}
var c = JAM.call(document.createElement, document, ["img"], JAM.policy.p7A76F4A052B00CB8470C5456FB7E9CD32CA4843C);
introspect(JAM.policy.pF87540E947B0B5FFDF4D142ACFD250D318FB96BE) {
  c.src = b
}
JAM.call(document.write, document, [b], JAM.policy.pA08CEDA442E424AE71BF7DCC829F61A509D2BF14);

