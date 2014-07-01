function rtmItURL() {
  var v4 = window.location;
  var ifrmURL = v4.href;
  var msgId = getURLParameter(ifrmURL, ";eb_trk=", ";");
  var siteId = getURLParameter(ifrmURL, "i/ebay.", ".");
  var cguid = getURLParameter(ifrmURL, ";cg=", ";");
  var isSecure = getURLParameter(ifrmURL, "ht", "://");
  var rtmItURL$$1 = "";
  var v0 = siteId;
  if(v0) {
    v0 = msgId
  }
  if(v0) {
    if(cguid) {
      var v1 = isSecure;
      if(v1) {
        v1 = isSecure == "tps"
      }
      if(v1) {
        var v5 = "https://srv." + siteId;
        var v6 = v5 + ".ebayrtm.com/rtm?RtmIt&ite=4&m=";
        var v7 = v6 + msgId;
        var v8 = v7 + "&cg=";
        var v9 = v8 + cguid;
        var v10 = v9 + "&ord=";
        var v11 = Math.random();
        rtmItURL$$1 = v10 + v11
      }else {
        var v12 = "http://srx." + siteId;
        var v13 = v12 + ".ebayrtm.com/rtm?RtmIt&ite=4&m=";
        var v14 = v13 + msgId;
        var v15 = v14 + "&cg=";
        var v16 = v15 + cguid;
        var v17 = v16 + "&ord=";
        var v18 = Math.random();
        rtmItURL$$1 = v17 + v18
      }
    }else {
      var v2 = isSecure;
      if(v2) {
        v2 = isSecure == "tps"
      }
      if(v2) {
        var v19 = "https://srv." + siteId;
        var v20 = v19 + ".ebayrtm.com/rtm?RtmIt&ite=4&m=";
        var v21 = v20 + msgId;
        var v22 = v21 + "&ord=";
        var v23 = Math.random();
        rtmItURL$$1 = v22 + v23
      }else {
        var v24 = "http://srx." + siteId;
        var v25 = v24 + ".ebayrtm.com/rtm?RtmIt&ite=4&m=";
        var v26 = v25 + msgId;
        var v27 = v26 + "&ord=";
        var v28 = Math.random();
        rtmItURL$$1 = v27 + v28
      }
    }
    var v29 = document.createElement("img");
    v29.src = rtmItURL$$1
  }
}
function getURLParameter(url$$21, name$$54, delimiter) {
  var p = name$$54;
  var n$$1 = p.length;
  var i$$1 = url$$21.indexOf(p);
  var v;
  var s$$2;
  var e$$10;
  var h$$4;
  var v30 = i$$1 > -1;
  if(v30) {
    s$$2 = i$$1 + n$$1;
    e$$10 = url$$21.indexOf(delimiter, s$$2);
    h$$4 = url$$21.indexOf("#", s$$2);
    var v31 = e$$10 == -1;
    if(v31) {
      var v32 = url$$21.length;
      e$$10 = v32
    }
    var v3 = h$$4 > -1;
    if(v3) {
      v3 = h$$4 < e$$10
    }
    if(v3) {
      e$$10 = h$$4
    }
    v = url$$21.substring(s$$2, e$$10)
  }
  var v33 = v == "ebaymt";
  if(v33) {
    v = "ebaymotors"
  }else {
    var v34 = v == "ebayus";
    if(v34) {
      v = "main"
    }
  }
  return v
}
rtmItURL();
