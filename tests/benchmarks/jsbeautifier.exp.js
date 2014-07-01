function add_onload_function(fn) {
  function v0() {
    if(oe) {
      oe()
    }
    fn()
  }
  var oe = window.onload;
  window.onload = v0
}
function v8() {
  var tabsize = get_var("tabsize");
  var brace_style = get_var("braces");
  var end_braces_on_own_line = get_var("endbraces");
  var c;
  if(tabsize) {
    var v1 = document.getElementById("tabsize");
    v1.value = tabsize
  }
  if(brace_style) {
    var v2 = brace_style === true;
    if(v2) {
      brace_style = "expand"
    }
    var v3 = document.getElementById("brace-style");
    v3.value = brace_style
  }
  var v4 = get_var("test");
  if(v4) {
    run_tests()
  }else {
    var v5 = document.forms;
    var v6 = v5[0];
    var v7 = v6.content;
    c = v7;
    c && c.setSelectionRange && c.setSelectionRange(0, 0);
    c && c.focus && c.focus()
  }
}
function trim_leading_comments(str$$7) {
  str$$7 = str$$7.replace(/^(\s*\/\/[^\n]*\n)+/, "");
  str$$7 = str$$7.replace(/^\s+/, "");
  return str$$7
}
function unpacker_filter(source$$1) {
  var v9 = document.getElementById("detect-packers");
  var v10 = v9.checked;
  if(v10) {
    var stripped_source = trim_leading_comments(source$$1);
    var unpacked = "";
    var v11 = P_A_C_K_E_R.detect(stripped_source);
    if(v11) {
      unpacked = P_A_C_K_E_R.unpack(stripped_source);
      var v12 = unpacked !== stripped_source;
      if(v12) {
        var v13 = unpacker_filter(unpacked);
        return v13
      }
    }
    var v14 = EscapedBookmarklet.detect(source$$1);
    if(v14) {
      unpacked = EscapedBookmarklet.unpack(source$$1);
      var v15 = unpacked !== stripped_source;
      if(v15) {
        var v16 = unpacker_filter(unpacked);
        return v16
      }
    }
    var v17 = JavascriptObfuscator.detect(stripped_source);
    if(v17) {
      unpacked = JavascriptObfuscator.unpack(stripped_source);
      var v18 = unpacked !== stripped_source;
      if(v18) {
        var v19 = unpacker_filter(unpacked);
        return v19
      }
    }
  }
  return source$$1
}
function do_js_beautify() {
  var v20 = document.getElementById("beautify");
  v20.disabled = true;
  var v21 = document.getElementById("content");
  var v22 = v21.value;
  var js_source = v22.replace(/^\s+/, "");
  var v23 = document.getElementById("tabsize");
  var indent_size = v23.value;
  var indent_char = " ";
  var v24 = document.getElementById("preserve-newlines");
  var preserve_newlines = v24.checked;
  var v25 = document.getElementById("keep-array-indentation");
  var keep_array_indentation = v25.checked;
  var v26 = document.getElementById("brace-style");
  var brace_style$$1 = v26.value;
  var v27 = indent_size == 1;
  if(v27) {
    indent_char = "\t"
  }
  var v28 = js_source[0];
  var v29 = js_source.substring(0, 4);
  var v30 = "<!" + "-";
  var v31 = v30 + "-";
  var v32 = js_source && v28 === "<" && v29 !== v31;
  if(v32) {
    var v33 = document.getElementById("content");
    var v34 = style_html(js_source, indent_size, indent_char, 80, brace_style$$1);
    v33.value = v34
  }else {
    var v35 = document.getElementById("content");
    var v36 = unpacker_filter(js_source);
    var v37 = {indent_size:indent_size, indent_char:indent_char, preserve_newlines:preserve_newlines, brace_style:brace_style$$1, keep_array_indentation:keep_array_indentation, space_after_anon_function:true};
    var v38 = js_beautify(v36, v37);
    v35.value = v38
  }
  var v39 = document.getElementById("beautify");
  v39.disabled = false
}
function get_var(name$$54) {
  var v40 = "[\\?&]" + name$$54;
  var v41 = v40 + "=([^&#]*)";
  var reg = new RegExp(v41);
  var v42 = window.location;
  var res = reg.exec(v42.href);
  var v43 = res[1];
  var v44 = res ? v43 : "";
  return v44
}
function run_tests() {
  var st = new SanityTest;
  run_beautifier_tests(st);
  JavascriptObfuscator.run_tests(st);
  P_A_C_K_E_R.run_tests(st);
  EscapedBookmarklet.run_tests(st);
  var v45 = document.getElementById("testresults");
  var v46 = v45.style;
  v46.display = "block";
  var v47 = document.getElementById("testresults");
  var v48 = st.results();
  v47.innerHTML = v48
}
add_onload_function(v8);
do_js_beautify();
