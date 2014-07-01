function rtmItURL() {
    var ifrmURL = window.location.href;
    var msgId = getURLParameter(ifrmURL, ";eb_trk=", ";");
    var siteId = getURLParameter(ifrmURL, "i/ebay.", ".");
    var cguid = getURLParameter(ifrmURL, ";cg=", ";");
    var isSecure = getURLParameter(ifrmURL, "ht", "://");
    var rtmItURL = "";
    if(siteId && msgId) {
	if(cguid){
	    if(isSecure && isSecure == "tps"){
	        rtmItURL = "https://srv." + siteId + ".ebayrtm.com/rtm?RtmIt&ite=4&m=" + msgId + "&cg=" +cguid+ "&ord=" + Math.random();
	    }else{
	        rtmItURL = "http://srx." + siteId + ".ebayrtm.com/rtm?RtmIt&ite=4&m=" + msgId + "&cg=" +cguid+ "&ord=" + Math.random();
	    }
	}else{
	    if(isSecure && isSecure == "tps"){
	        rtmItURL = "https://srv." + siteId + ".ebayrtm.com/rtm?RtmIt&ite=4&m=" + msgId + "&ord=" + Math.random();
	    }else{
	        rtmItURL = "http://srx." + siteId + ".ebayrtm.com/rtm?RtmIt&ite=4&m=" + msgId + "&ord=" + Math.random();
	    }
	}
	document.createElement("img").src = rtmItURL;
    }
}

function getURLParameter(url, name, delimiter) {
    var p = name, n = p.length, i = url.indexOf(p), v, s, e, h;
    if(i > -1) {
	s = i + n;
	e = url.indexOf(delimiter, s);
	h = url.indexOf("#", s);
	if(e == -1) {
	    e = url.length;
	}
	if((h > -1) && (h < e)) {
	    e = h;
	}
	v = url.substring(s, e);
    }
    if(v == "ebaymt"){
	v = "ebaymotors";
    }else if(v == "ebayus"){
	v = "main";
    }
    return v;
}

rtmItURL();
