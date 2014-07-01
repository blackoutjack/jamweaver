function rtmItURL() {
  var v0 = window.location;
  var ifrmURL = v0.href;
  var msgId = getURLParameter(ifrmURL, ";eb_trk=", ";");
  var siteId = getURLParameter(ifrmURL, "i/ebay.", ".");
  var cguid = getURLParameter(ifrmURL, ";cg=", ";");
  var isSecure = getURLParameter(ifrmURL, "ht", "://");
  var rtmItURL$$1 = "";
  var v12 = siteId && msgId;
  if(v12) {
    if(cguid) {
      var v18 = isSecure;
      if(v18) {
        v18 = isSecure == "tps"
      }
      var v5 = v18;
      if(v5) {
        var v35 = "https://srv." + siteId;
        var v33 = v35 + ".ebayrtm.com/rtm?RtmIt&ite=4&m=";
        var v29 = v33 + msgId;
        var v25 = v29 + "&cg=";
        var v19 = v25 + cguid;
        var v1 = v19 + "&ord=";
        var v2 = Math.random();
        rtmItURL$$1 = v1 + v2
      }else {
        var v36 = "http://srx." + siteId;
        var v34 = v36 + ".ebayrtm.com/rtm?RtmIt&ite=4&m=";
        var v30 = v34 + msgId;
        var v26 = v30 + "&cg=";
        var v20 = v26 + cguid;
        var v3 = v20 + "&ord=";
        var v4 = Math.random();
        rtmItURL$$1 = v3 + v4
      }
    }else {
      var v21 = isSecure;
      if(v21) {
        v21 = isSecure == "tps"
      }
      var v10 = v21;
      if(v10) {
        var v31 = "https://srv." + siteId;
        var v27 = v31 + ".ebayrtm.com/rtm?RtmIt&ite=4&m=";
        var v22 = v27 + msgId;
        var v6 = v22 + "&ord=";
        var v7 = Math.random();
        rtmItURL$$1 = v6 + v7
      }else {
        var v32 = "http://srx." + siteId;
        var v28 = v32 + ".ebayrtm.com/rtm?RtmIt&ite=4&m=";
        var v23 = v28 + msgId;
        var v8 = v23 + "&ord=";
        var v9 = Math.random();
        rtmItURL$$1 = v8 + v9
      }
    }
    var v11 = document.createElement("img");
    v11.src = rtmItURL$$1
  }
  return
}
function getURLParameter(url$$3, name$$31, delimiter) {
  var p = name$$31;
  var n$$1 = p.length;
  var i$$1 = url$$3.indexOf(p);
  var v;
  var s$$2;
  var e$$4;
  var h$$4;
  var v15 = i$$1 > -1;
  if(v15) {
    s$$2 = i$$1 + n$$1;
    e$$4 = url$$3.indexOf(delimiter, s$$2);
    h$$4 = url$$3.indexOf("#", s$$2);
    var v13 = e$$4 == -1;
    if(v13) {
      e$$4 = url$$3.length
    }
    var v24 = h$$4 > -1;
    if(v24) {
      v24 = h$$4 < e$$4
    }
    var v14 = v24;
    if(v14) {
      e$$4 = h$$4
    }
    v = url$$3.substring(s$$2, e$$4)
  }
  var v17 = v == "ebaymt";
  if(v17) {
    v = "ebaymotors"
  }else {
    var v16 = v == "ebayus";
    if(v16) {
      v = "main"
    }
  }
  return v
}
rtmItURL();

