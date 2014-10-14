// jsbeautifier.js
function v1() {
  var tabsize = get_var("tabsize");
  var brace_style = get_var("braces");
  var end_braces_on_own_line = get_var("endbraces");
  var c;
  if (tabsize) {
    document.getElementById("tabsize").value = tabsize;
  }
  if (brace_style) {
    if (brace_style === true) {
      brace_style = "expand";
    }
    document.getElementById("brace-style").value = brace_style;
  }
  if (get_var("test")) {
    run_tests();
  } else {
    c = document.forms[0].content;
    var v33 = c;
    if (v33) {
      v33 = c.setSelectionRange;
    }
    var v6 = v33;
    if (v6) {
      c.setSelectionRange(0, 0);
    }
    var v34 = c;
    if (v34) {
      v34 = c.focus;
    }
    var v7 = v34;
    if (v7) {
      c.focus();
    }
  }
  return;
}
function add_onload_function(fn) {
  function v0() {
    if (oe) {
      oe();
    }
    fn();
    return;
  }
  var oe = window.onload;
  JAM.set(window, "onload", v0);
  return;
}
function trim_leading_comments(str$$6) {
  str$$6 = str$$6.replace(/^(\s*\/\/[^\n]*\n)+/, "");
  str$$6 = str$$6.replace(/^\s+/, "");
  return str$$6;
}
function unpacker_filter(source$$1) {
  if (document.getElementById("detect-packers").checked) {
    var stripped_source = trim_leading_comments(source$$1);
    var unpacked = "";
    if (JAM.call(P_A_C_K_E_R.detect, P_A_C_K_E_R, [stripped_source], JAM.policy.p1)) {
      unpacked = JAM.call(P_A_C_K_E_R.unpack, P_A_C_K_E_R, [stripped_source], JAM.policy.p1);
      if (unpacked !== stripped_source) {
        return unpacker_filter(unpacked);
      }
    }
    if (JAM.call(EscapedBookmarklet.detect, EscapedBookmarklet, [source$$1], JAM.policy.p1)) {
      unpacked = JAM.call(EscapedBookmarklet.unpack, EscapedBookmarklet, [source$$1], JAM.policy.p1);
      if (unpacked !== stripped_source) {
        return unpacker_filter(unpacked);
      }
    }
    if (JAM.call(JavascriptObfuscator.detect, JavascriptObfuscator, [stripped_source], JAM.policy.p1)) {
      unpacked = JAM.call(JavascriptObfuscator.unpack, JavascriptObfuscator, [stripped_source], JAM.policy.p1);
      if (unpacked !== stripped_source) {
        return unpacker_filter(unpacked);
      }
    }
  }
  return source$$1;
}
function do_js_beautify() {
  document.getElementById("beautify").disabled = true;
  var js_source = JAM.call(document.getElementById, document, ["content"], JAM.policy.p1).value.replace(/^\s+/, "");
  var indent_size = document.getElementById("tabsize").value;
  var indent_char = " ";
  var preserve_newlines = document.getElementById("preserve-newlines").checked;
  var keep_array_indentation = document.getElementById("keep-array-indentation").checked;
  var brace_style$$1 = document.getElementById("brace-style").value;
  if (indent_size == 1) {
    indent_char = "\t";
  }
  var v43 = js_source;
  if (v43) {
    v43 = js_source[0] === "<";
  }
  var v37 = v43;
  if (v37) {
    v37 = js_source.substring(0, 4) !== "<!" + "-" + "-";
  }
  if (v37) {
    var v23 = JAM.call(document.getElementById, document, ["content"], JAM.policy.p1);
    var v48 = JAM.call(style_html, null, [js_source, indent_size, indent_char, 80, brace_style$$1], JAM.policy.p1);
    v23.value = v48;
  } else {
    var v24 = JAM.call(document.getElementById, document, ["content"], JAM.policy.p1);
    var v49 = JAM.call(js_beautify, null, [unpacker_filter(js_source), {indent_size:indent_size, indent_char:indent_char, preserve_newlines:preserve_newlines, brace_style:brace_style$$1, keep_array_indentation:keep_array_indentation, space_after_anon_function:true}], JAM.policy.p1);
    v24.value = v49;
  }
  document.getElementById("beautify").disabled = false;
  return false;
}
function get_var(name$$30) {
  var reg = new RegExp("[\\?&]" + name$$30 + "=([^&#]*)");
  var res = JAM.call(reg.exec, reg, [window.location.href], JAM.policy.p1);
  var v29;
  if (res) {
    v29 = res[1];
  } else {
    v29 = "";
  }
  return v29;
}
function run_tests() {
  var st = new SanityTest;
  JAM.call(run_beautifier_tests, null, [st], JAM.policy.p1);
  JAM.call(JavascriptObfuscator.run_tests, JavascriptObfuscator, [st], JAM.policy.p1);
  JAM.call(P_A_C_K_E_R.run_tests, P_A_C_K_E_R, [st], JAM.policy.p1);
  JAM.call(EscapedBookmarklet.run_tests, EscapedBookmarklet, [st], JAM.policy.p1);
  document.getElementById("testresults").style.display = "block";
  var v31 = document.getElementById("testresults");
  var v50 = st.results();
  JAM.set(v31, "innerHTML", v50);
  return;
}
add_onload_function(v1);
do_js_beautify()
