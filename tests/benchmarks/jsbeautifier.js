/**
 * From jsbeautifier.org
 *
 * This is the code embedded in the web page. It would be a good benchmark for
 * some basic DOM wrangling. It calls out to a lot of long parser functions defined
 * in other files that seem to be basically pure functions that use the string API.
 * We might want to use one of those as well, either integrated with this or
 * separately.
 */

function add_onload_function(fn)
{
    var oe=window.onload;
    window.onload = function() { if (oe) oe(); fn(); }
}
add_onload_function(function() {

    var tabsize = get_var('tabsize');
    var brace_style = get_var('braces');
    var end_braces_on_own_line = get_var('endbraces');
    var c;
    if (tabsize) {
        document.getElementById('tabsize').value = tabsize;
    }
    if (brace_style) {
        if (brace_style===true)
            brace_style = "expand";
        document.getElementById('brace-style').value = brace_style;
    }

    if (get_var('test')) {
        run_tests();
    } else {
        c = document.forms[0].content;
        c && c.setSelectionRange && c.setSelectionRange(0, 0);
        c && c.focus && c.focus();
    }

});

function trim_leading_comments(str)
{
    // very basic. doesn't support /* ... */
    str = str.replace(/^(\s*\/\/[^\n]*\n)+/, '');
    str = str.replace(/^\s+/, '');
    return str;
}

function unpacker_filter(source)
{

    if (document.getElementById('detect-packers').checked) {

        var stripped_source = trim_leading_comments(source);
        var unpacked = '';

        if (P_A_C_K_E_R.detect(stripped_source)) {
            unpacked = P_A_C_K_E_R.unpack(stripped_source);
            if (unpacked !== stripped_source) {
                return unpacker_filter(unpacked);
            }
        }

        if (EscapedBookmarklet.detect(source)) {
            unpacked = EscapedBookmarklet.unpack(source);
            if (unpacked !== stripped_source) {
                return unpacker_filter(unpacked);
            }
        }

        if (JavascriptObfuscator.detect(stripped_source)) {
            unpacked = JavascriptObfuscator.unpack(stripped_source);
            if (unpacked !== stripped_source) {
                return unpacker_filter(unpacked);
            }
        }
    }
    return source;

}

function do_js_beautify()
{
    document.getElementById('beautify').disabled = true;
    var js_source = document.getElementById('content').value.replace(/^\s+/, '');
    var indent_size = document.getElementById('tabsize').value;
    var indent_char = ' ';
    var preserve_newlines = document.getElementById('preserve-newlines').checked;
    var keep_array_indentation = document.getElementById('keep-array-indentation').checked;
    var brace_style = document.getElementById('brace-style').value;

    if (indent_size == 1) {
        indent_char = '\t';
    }


    if (js_source && js_source[0] === '<' && js_source.substring(0, 4) !== '<!' + '-' + '-') {
        document.getElementById('content').value = style_html(js_source, indent_size, indent_char, 80, brace_style);
    } else {
        document.getElementById('content').value =
        js_beautify(unpacker_filter(js_source), {
            indent_size: indent_size,
            indent_char: indent_char,
            preserve_newlines:preserve_newlines,
            brace_style: brace_style,
            keep_array_indentation:keep_array_indentation,
            space_after_anon_function:true});
    }

    document.getElementById('beautify').disabled = false;
    return false;
}


function get_var( name )
{
    var reg = new RegExp( "[\\?&]" + name + "=([^&#]*)" );
    var res = reg.exec( window.location.href );
    return res ? res[1] : "";
}

function run_tests()
{
    var st = new SanityTest();
    run_beautifier_tests(st);
    JavascriptObfuscator.run_tests(st);
    P_A_C_K_E_R.run_tests(st);
    EscapedBookmarklet.run_tests(st);

    document.getElementById('testresults').style.display='block';
    document.getElementById('testresults').innerHTML=st.results();
}

do_js_beautify();
