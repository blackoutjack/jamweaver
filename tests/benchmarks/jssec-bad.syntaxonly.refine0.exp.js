// jssec-bad.js
function snipDisplay(c, p) {
  var v1;
  if (document.getElementById(c).checked == true) {
    var v13 = document.getElementById(p).style;
    introspect(JAM.policy.p1) {
      v1 = v13.display = "block";
    }
  } else {
    var v14 = document.getElementById(p).style;
    introspect(JAM.policy.p1) {
      v1 = v14.displayx = "none";
    }
  }
  v1;
  return;
}
function initSnippets() {
  function v0() {
    snipDisplay("c1", "s1");
    return;
  }
  var d = document;
  JAM.set(document.getElementById("c1"), "onclick", v0, JAM.policy.p1);
  return;
}
function snapDisplay(c$$1) {
  var d$$1 = document;
  if (document.getElementById(c$$1).innerHTML == "Show All") {
    JAM.set(document.getElementById(c$$1), "innerHTML", "Hide All", JAM.policy.p1);
    var i$$1 = 1;
    var v6 = i$$1 <= 31;
    for (;v6;) {
      var v4 = document.getElementById("c" + i$$1);
      introspect(JAM.policy.p1) {
        v4.checked = true;
      }
      var v5 = document.getElementById("s" + i$$1).style;
      introspect(JAM.policy.p1) {
        v5.display = "block";
      }
      introspect(JAM.policy.p1) {
        i$$1 = i$$1 + 1;
      }
      introspect(JAM.policy.p1) {
        v6 = i$$1 <= 31;
      }
    }
  } else {
    JAM.set(document.getElementById(c$$1), "innerHTML", "Show All", JAM.policy.p1);
    introspect(JAM.policy.p1) {
      i$$1 = 1;
    }
    var v10 = i$$1 <= 31;
    for (;v10;) {
      var v8 = document.getElementById("c" + i$$1);
      introspect(JAM.policy.p1) {
        v8.checked = false;
      }
      var v9 = document.getElementById("s" + i$$1).style;
      introspect(JAM.policy.p1) {
        v9.display = "none";
      }
      introspect(JAM.policy.p1) {
        i$$1 = i$$1 + 1;
      }
      introspect(JAM.policy.p1) {
        v10 = i$$1 <= 31;
      }
    }
  }
  return;
}
initSnippets();
JAM.call(document.getElementById, document, ["c1"]).onclick()

