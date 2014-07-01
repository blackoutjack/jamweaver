function main() {
  function h$$4() {
    m.l("/fragment.gne?name=social-auth-fragment");
    b$$1.setTimeout(h$$4, 1E4)
  }
  function f1(a) {
    function f10() {
      var v0 = e$$5.req;
      var v1 = v0.readyState;
      var v2 = e$$5.req;
      var v3 = v2.status;
      var v4 = v1 == 4 && v3 == 200;
      if(v4) {
        var v5 = e$$5.req;
        var d = v5.responseText;
        var v6 = d == "1,1" || d == "1,0";
        if(v6) {
          var v7 = b$$1.location;
          v7.reload()
        }
      }
    }
    var v8 = this.c();
    this.req = v8;
    if(this.req) {
      var v9 = this.req;
      v9.open("GET", a, true);
      var e$$5 = this;
      var v10 = this.req;
      v10.onreadystatechange = f10;
      var v11 = this.req;
      v11.send(null)
    }
  }
  function f2() {
    var j;
    var d$$1;
    var a$$1;
    a$$1 = new XMLHttpRequest;
    return a$$1
  }
  function f3(a$$2) {
    function f11() {
      if(!g) {
        var v12 = a$$2 + "?popup=0&redir=";
        var v13 = b$$1.location;
        var v14 = "/photo_grease_postlogin.gne?d=" + v13;
        var v15 = v14 + "&notpopup=1";
        var v16 = encodeURIComponent(v15);
        var v17 = v12 + v16;
        b$$1.location = v17
      }
    }
    var v18 = a$$2 + "?popup=1&redir=";
    var v19 = b$$1.location;
    var e$$6 = v18 + v19;
    checkState('i$$1 = b$$1.open(e$$6, "newWindow", "width=650,height=650");', 'arguments.callee === window.open && arguments[0] !== "flickr.com"', 0, -1);
    i$$1 = b$$1.open(e$$6, "newWindow", "width=650,height=650");
    i$$1.focus && i$$1.focus();
    b$$1.setTimeout(f11, 2E3);
    return false
  }
  function f4(a$$3) {
    f = true;
    if(!a$$3) {
      var v20 = b$$1.event;
      a$$3 = v20
    }
    a$$3.cancelBubble = true;
    a$$3.returnValue = false;
    a$$3.stopPropagation && a$$3.stopPropagation();
    a$$3.preventDefault && a$$3.preventDefault();
    n$$1("/signin");
    b$$1.setTimeout(k, 20);
    return false
  }
  function f5() {
    var a$$4;
    var v21 = document.cookie;
    var v22 = v21.match(/cookie_session=[^;]+/gi);
    if(v22) {
      a$$4 = true
    }else {
      a$$4 = false
    }
    if(a$$4) {
      f = false;
      h$$4()
    }else {
      b$$1.setTimeout(k, 10)
    }
  }
  function f6() {
    if(g) {
      f = false;
      h$$4()
    }
  }
  function f7() {
    if(g) {
      f = false;
      h$$4()
    }
  }
  function f8() {
    if(f) {
      g = true
    }
  }
  function f9() {
    if(f) {
      g = true
    }
  }
  var c = window.navigator;
  var b$$1 = window;
  c = document;
  var v23 = ["MSXML2.XMLHTTP.6.0", "MSXML3.XMLHTTP", "Microsoft.XMLHTTP", "MSXML2.XMLHTTP.3.0"];
  var m = {_msxml_progid:v23, l:f1, c:f2};
  if(enable_popup_login) {
    var g = false;
    var f = false;
    var i$$1;
    var n$$1 = f3;
    var o = document.getElementById("head-signin-link");
    var l = f4;
    var v24 = document.getElementById("signup-link");
    v24.onclick = l;
    o.onclick = l;
    var k = f5;
    c.onfocusin = f6;
    b$$1.onfocus = f7;
    b$$1.onblur = f8;
    c.onfocusout = f9
  }
  f3("flickr.com")
}
var enable_popup_login = true;
b = window;
main();
