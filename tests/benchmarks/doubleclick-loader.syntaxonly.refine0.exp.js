// doubleclick-loader.js
function rtmItURL() {
  introspect(JAM.policy.p2) {
    var v0 = window.location
  }
  introspect(JAM.policy.p2) {
    var ifrmURL = v0.href
  }
  var msgId = getURLParameter(ifrmURL, ";eb_trk=", ";");
  var siteId = getURLParameter(ifrmURL, "i/ebay.", ".");
  var cguid = getURLParameter(ifrmURL, ";cg=", ";");
  var isSecure = getURLParameter(ifrmURL, "ht", "://");
  introspect(JAM.policy.p2) {
    var rtmItURL$$1 = ""
  }
  introspect(JAM.policy.p2) {
    var v12 = siteId && msgId
  }
  introspect(JAM.policy.p2) {
    if (v12) {
      introspect(JAM.policy.p2) {
        if (cguid) {
          introspect(JAM.policy.p2) {
            var v18 = isSecure
          }
          introspect(JAM.policy.p2) {
            if (v18) {
              introspect(JAM.policy.p2) {
                v18 = isSecure == "tps";
              }
            }
          }
          introspect(JAM.policy.p2) {
            var v5 = v18
          }
          introspect(JAM.policy.p2) {
            if (v5) {
              introspect(JAM.policy.p2) {
                var v35 = "https://srv." + siteId
              }
              introspect(JAM.policy.p2) {
                var v33 = v35 + ".ebayrtm.com/rtm?RtmIt&ite=4&m="
              }
              introspect(JAM.policy.p2) {
                var v29 = v33 + msgId
              }
              introspect(JAM.policy.p2) {
                var v25 = v29 + "&cg="
              }
              introspect(JAM.policy.p2) {
                var v19 = v25 + cguid
              }
              introspect(JAM.policy.p2) {
                var v1 = v19 + "&ord="
              }
              var v2 = JAM.call(Math.random, Math, []);
              introspect(JAM.policy.p2) {
                rtmItURL$$1 = v1 + v2;
              }
            } else {
              introspect(JAM.policy.p2) {
                var v36 = "http://srx." + siteId
              }
              introspect(JAM.policy.p2) {
                var v34 = v36 + ".ebayrtm.com/rtm?RtmIt&ite=4&m="
              }
              introspect(JAM.policy.p2) {
                var v30 = v34 + msgId
              }
              introspect(JAM.policy.p2) {
                var v26 = v30 + "&cg="
              }
              introspect(JAM.policy.p2) {
                var v20 = v26 + cguid
              }
              introspect(JAM.policy.p2) {
                var v3 = v20 + "&ord="
              }
              var v4 = JAM.call(Math.random, Math, []);
              introspect(JAM.policy.p2) {
                rtmItURL$$1 = v3 + v4;
              }
            }
          }
        } else {
          introspect(JAM.policy.p2) {
            var v21 = isSecure
          }
          introspect(JAM.policy.p2) {
            if (v21) {
              introspect(JAM.policy.p2) {
                v21 = isSecure == "tps";
              }
            }
          }
          introspect(JAM.policy.p2) {
            var v10 = v21
          }
          introspect(JAM.policy.p2) {
            if (v10) {
              introspect(JAM.policy.p2) {
                var v31 = "https://srv." + siteId
              }
              introspect(JAM.policy.p2) {
                var v27 = v31 + ".ebayrtm.com/rtm?RtmIt&ite=4&m="
              }
              introspect(JAM.policy.p2) {
                var v22 = v27 + msgId
              }
              introspect(JAM.policy.p2) {
                var v6 = v22 + "&ord="
              }
              var v7 = JAM.call(Math.random, Math, []);
              introspect(JAM.policy.p2) {
                rtmItURL$$1 = v6 + v7;
              }
            } else {
              introspect(JAM.policy.p2) {
                var v32 = "http://srx." + siteId
              }
              introspect(JAM.policy.p2) {
                var v28 = v32 + ".ebayrtm.com/rtm?RtmIt&ite=4&m="
              }
              introspect(JAM.policy.p2) {
                var v23 = v28 + msgId
              }
              introspect(JAM.policy.p2) {
                var v8 = v23 + "&ord="
              }
              var v9 = JAM.call(Math.random, Math, []);
              introspect(JAM.policy.p2) {
                rtmItURL$$1 = v8 + v9;
              }
            }
          }
        }
      }
      var v11 = JAM.call(document.createElement, document, ["img"]);
      introspect(JAM.policy.p2) {
        v11.src = rtmItURL$$1;
      }
    }
  }
  introspect(JAM.policy.p2) {
    return;
  }
}
function getURLParameter(url$$2, name$$30, delimiter) {
  introspect(JAM.policy.p2) {
    var p = name$$30
  }
  introspect(JAM.policy.p2) {
    var n$$1 = p.length
  }
  var i$$1 = JAM.call(url$$2.indexOf, url$$2, [p]);
  var v;
  var s$$2;
  var e$$4;
  var h$$4;
  introspect(JAM.policy.p2) {
    var v15 = i$$1 > -1
  }
  introspect(JAM.policy.p2) {
    if (v15) {
      introspect(JAM.policy.p2) {
        s$$2 = i$$1 + n$$1;
      }
      e$$4 = JAM.call(url$$2.indexOf, url$$2, [delimiter, s$$2]);
      h$$4 = JAM.call(url$$2.indexOf, url$$2, ["#", s$$2]);
      introspect(JAM.policy.p2) {
        var v13 = e$$4 == -1
      }
      introspect(JAM.policy.p2) {
        if (v13) {
          introspect(JAM.policy.p2) {
            e$$4 = url$$2.length;
          }
        }
      }
      introspect(JAM.policy.p2) {
        var v24 = h$$4 > -1
      }
      introspect(JAM.policy.p2) {
        if (v24) {
          introspect(JAM.policy.p2) {
            v24 = h$$4 < e$$4;
          }
        }
      }
      introspect(JAM.policy.p2) {
        var v14 = v24
      }
      introspect(JAM.policy.p2) {
        if (v14) {
          introspect(JAM.policy.p2) {
            e$$4 = h$$4;
          }
        }
      }
      v = JAM.call(url$$2.substring, url$$2, [s$$2, e$$4]);
    }
  }
  introspect(JAM.policy.p2) {
    var v17 = v == "ebaymt"
  }
  introspect(JAM.policy.p2) {
    if (v17) {
      introspect(JAM.policy.p2) {
        v = "ebaymotors";
      }
    } else {
      introspect(JAM.policy.p2) {
        var v16 = v == "ebayus"
      }
      introspect(JAM.policy.p2) {
        if (v16) {
          introspect(JAM.policy.p2) {
            v = "main";
          }
        }
      }
    }
  }
  introspect(JAM.policy.p2) {
    return v;
  }
}
rtmItURL()

