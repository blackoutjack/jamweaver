function exfiltrate_key_history() {
	// Eval - User Input
    // Exfiltrate data using XMLHTTP request
    var exp = document.getElementById('expinput').value
	eval(exp);
}

document.getElementById('test').onclick = exfiltrate_key_history;