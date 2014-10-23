// json2.js
/*
    http://www.JSON.org/json2.js
    2009-09-29

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    this.JSON = {};
}

(function () {

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/.
test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());


// results.html
//XXX generate this automatically
var explanations = {
    "astar":"../explanations/astar.html",
    "gaussian-blur":"../explanations/gaussian-blur.html",
    "darkroom":"../explanations/darkroom.html",
    "desaturate":"../explanations/desaturate.html",
    "beat-detection":"../explanations/beat-detection.html",
    "dft":"../explanations/dft.html",
    "fft":"../explanations/fft.html",
    "oscillator":"../explanations/oscillator.html",
    "parse-financial":"../explanations/parse-financial.html",
    "stringify-tinderbox":"../explanations/stringify-tinderbox.html"
    
}

var selfUrlInput = document.getElementById("selfUrl");
selfUrlInput.value = location;

var outputJSON = JSON.parse(decodeURI(location.search.substring(1)));
var version = outputJSON["v"];
delete outputJSON["v"];
var output = pivot(outputJSON);

function pivot(input) {
    var output = [];
    for (var test in input) {
        for (var i = 0; i < input[test].length; i++) {
             if (!output[i])
                 output[i] = {};
             output[i][test] =  input[test][i];
        }
    }
    return output;
}

function print(str) {
    var console = document.getElementById("console");
    console.innerHTML += str;
    console.innerHTML += "<br>";
}

// test-prefix.js
var tests = [ "ai-astar", "audio-beat-detection", "audio-dft", "audio-fft", "audio-oscillator", "imaging-gaussian-blur", "imaging-darkroom", "imaging-desaturate", "json-parse-financial", "json-stringify-tinderbox", "stanford-crypto-aes", "stanford-crypto-ccm", "stanford-crypto-pbkdf2", "stanford-crypto-sha256-iterative" ];
var categories = [ "ai", "audio", "imaging", "json", "stanford" ];

// analyze-results.js
/*
 * Copyright (C) 2007 Apple Inc.  All rights reserved.
 * Copyright (C) 2010 Mozilla Foundation
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE COMPUTER, INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE COMPUTER, INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 
 */

var count = output.length;

var itemTotals = {};
itemTotals.length = count;

var total = 0;
var categoryTotals = {};
var testTotalsByCategory = {};

var mean = 0;
var categoryMeans = {};
var testMeansByCategory = {};

var stdDev = 0;
var categoryStdDevs = {};
var testStdDevsByCategory = {};

var stdErr = 0;
var categoryStdErrs = {};
var testStdErrsByCategory = {};

function initialize()
{
    itemTotals = {total: []};

    for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
        itemTotals[category] = [];
        categoryTotals[category] = 0;
        testTotalsByCategory[category] = {};
        categoryMeans[category] = 0;
        testMeansByCategory[category] = {};
        categoryStdDevs[category] = 0;
        testStdDevsByCategory[category] = {};
        categoryStdErrs[category] = 0;
        testStdErrsByCategory[category] = {};
    }

    for (var i = 0; i < tests.length; i++) {
        var test = tests[i];
        itemTotals[test] = [];
        var category = test.replace(/-.*/, "");
        testTotalsByCategory[category][test] = 0;
        testMeansByCategory[category][test] = 0;
        testStdDevsByCategory[category][test] = 0;
        testStdErrsByCategory[category][test] = 0;
    }

    for (var i = 0; i < count; i++) {
        itemTotals["total"][i] = 0;
        for (var category in categoryTotals) {
            itemTotals[category][i] = 0;
            for (var test in testTotalsByCategory[category]) {
                itemTotals[test][i] = 0;
            }
        }
    }
}

function computeItemTotals()
{
    for (var i = 0; i < output.length; i++) {
        var result = output[i];
        for (var test in result) {
            var time = result[test];
            var category = test.replace(/-.*/, "");
            itemTotals["total"][i] += time;
            itemTotals[category][i] += time;
            itemTotals[test][i] += time;
        }
    }
}

function computeTotals()
{
    for (var i = 0; i < output.length; i++) {
        var result = output[i];
        for (var test in result) {
            var time = result[test];
            var category = test.replace(/-.*/, "");
            total += time;
            categoryTotals[category] += time;
            testTotalsByCategory[category][test] += time;
        }
    }
}

function computeMeans()
{
    mean = total / count;
    for (var category in categoryTotals) {
        categoryMeans[category] = categoryTotals[category] / count;
        for (var test in testTotalsByCategory[category]) {
            testMeansByCategory[category][test] = testTotalsByCategory[category][test] / count;
        }
    }
}

function standardDeviation(mean, items)
{
    var deltaSquaredSum = 0;
    for (var i = 0; i < items.length; i++) {
        var delta = items[i] - mean;
        deltaSquaredSum += delta * delta;
    }
    variance = deltaSquaredSum / (items.length - 1);
    return Math.sqrt(variance);
}

function computeStdDevs()
{
    stdDev = standardDeviation(mean, itemTotals["total"]);
    for (var category in categoryStdDevs) {
        categoryStdDevs[category] = standardDeviation(categoryMeans[category], itemTotals[category]);
    }
    for (var category in categoryStdDevs) {
        for (var test in testStdDevsByCategory[category]) {
            testStdDevsByCategory[category][test] = standardDeviation(testMeansByCategory[category][test], itemTotals[test]);
        }
    }
}

function computeStdErrors()
{
    var sqrtCount = Math.sqrt(count);

    stdErr = stdDev / sqrtCount;
    for (var category in categoryStdErrs) {
        categoryStdErrs[category] = categoryStdDevs[category] / sqrtCount;
    }
    for (var category in categoryStdDevs) {
        for (var test in testStdErrsByCategory[category]) {
            testStdErrsByCategory[category][test] = testStdDevsByCategory[category][test] / sqrtCount;
        }
    }

}

var tDistribution = [NaN, NaN, 12.71, 4.30, 3.18, 2.78, 2.57, 2.45, 2.36, 2.31, 2.26, 2.23, 2.20, 2.18, 2.16, 2.14, 2.13, 2.12, 2.11, 2.10, 2.09, 2.09, 2.08, 2.07, 2.07, 2.06, 2.06, 2.06, 2.05, 2.05, 2.05, 2.04, 2.04, 2.04, 2.03, 2.03, 2.03, 2.03, 2.03, 2.02, 2.02, 2.02, 2.02, 2.02, 2.02, 2.02, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.96];
var tMax = tDistribution.length;
var tLimit = 1.96;

function tDist(n)
{
    if (n > tMax)
        return tLimit;
    return tDistribution[n];
}


function formatResult(meanWidth, mean, stdErr, n)
{
    var meanString = mean.toFixed(1).toString();
    while (meanString.length < meanWidth) {
        meanString = " " + meanString;
    }

    if (n == 1)
        return meanString + "ms";

    return meanString + "ms +/- " + ((tDist(n) * stdErr / mean) * 100).toFixed(1) + "%";
}

function computeLabelWidth()
{
    var width = "Total".length;
    for (var category in categoryMeans) {
        if (category.length + 2 > width)
            width = category.length + 2;
    }
    for (var i = 0; i < tests.length; i++) {
        var shortName = tests[i].replace(/^[^-]*-/, "");
        if (shortName.length + 4 > width)
            width = shortName.length + 4;
    }

    return width;
}

function computeMeanWidth()
{
    var width = mean.toFixed(1).toString().length;
    for (var category in categoryMeans) {
        var candidate = categoryMeans[category].toFixed(2).toString().length;
        if (candidate > width)
            width = candidate;
        for (var test in testMeansByCategory[category]) {
            var candidate = testMeansByCategory[category][test].toFixed(2).toString().length;
            if (candidate > width)
                width = candidate;
        }
    }

    return width;
}

if (!this['explanations'])
  var explanations = {};

function resultLine(labelWidth, indent, label, meanWidth, mean, stdErr)
{
    var result = "";
    for (i = 0; i < indent; i++) {
        result += " ";
    }
    
    if (label in explanations)
        result += "<a href='" + explanations[label] + "'>" + label + "</a>: ";
    else
        result += label + ": ";

    for (i = 0; i < (labelWidth - (label.length + indent)); i++) {
        result += " ";
    }
    
    return result + formatResult(meanWidth, mean, stdErr, count);
}

function printOutput()
{
    var labelWidth = computeLabelWidth();
    var meanWidth = computeMeanWidth();

    print("\n");
    print("===============================================");
    if (count == 1)
        print("RESULTS");
    else
        print("RESULTS (means and 95% confidence intervals)");
    print("-----------------------------------------------");
    print(resultLine(labelWidth, 0, "Total", meanWidth, mean, stdErr));
    print("-----------------------------------------------");
    for (var category in categoryMeans) {
        print("");
        print(resultLine(labelWidth, 2, category, meanWidth, categoryMeans[category], categoryStdErrs[category]));
        for (var test in testMeansByCategory[category]) {
            var shortName = test.replace(/^[^-]*-/, "");
            print(resultLine(labelWidth, 4, shortName, meanWidth, testMeansByCategory[category][test], testStdErrsByCategory[category][test]));
        }
    }
}

initialize();
computeItemTotals();
computeTotals();
computeMeans();
computeStdDevs();
computeStdErrors();
printOutput();


// compare-results.js
/*
 * Copyright (C) 2007 Apple Inc.  All rights reserved.
 * Copyright (C) 2010 Mozilla Foundation
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE COMPUTER, INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE COMPUTER, INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 
 */

function sunspiderCompareResults(output1, output2)
{
    var count1 = output1.length;
    var count2 = output2.length;

    var itemTotals1 = {};
    itemTotals1.length = count1;
    
    var total1 = 0;
    var categoryTotals1 = {};
    var testTotalsByCategory1 = {};
    
    var mean1 = 0;
    var categoryMeans1 = {};
    var testMeansByCategory1 = {};
    
    var stdDev1 = 0;
    var categoryStdDevs1 = {};
    var testStdDevsByCategory1 = {};
    
    var stdErr1 = 0;
    var categoryStdErrs1 = {};
    var testStdErrsByCategory1 = {};
    
    var itemTotals2 = {};
    itemTotals2.length = count2;
    
    var total2 = 0;
    var categoryTotals2 = {};
    var testTotalsByCategory2 = {};
    
    var mean2 = 0;
    var categoryMeans2 = {};
    var testMeansByCategory2 = {};
    
    var stdDev2 = 0;
    var categoryStdDevs2 = {};
    var testStdDevsByCategory2 = {};
    
    var stdErr2 = 0;
    var categoryStdErrs2 = {};
    var testStdErrsByCategory2 = {};
    
    function initialize()
    {
        itemTotals1 = {total: []};
        
        for (var i = 0; i < categories.length; i++) {
            var category = categories[i];
            itemTotals1[category] = [];
            categoryTotals1[category] = 0;
            testTotalsByCategory1[category] = {};
            categoryMeans1[category] = 0;
            testMeansByCategory1[category] = {};
            categoryStdDevs1[category] = 0;
            testStdDevsByCategory1[category] = {};
            categoryStdErrs1[category] = 0;
            testStdErrsByCategory1[category] = {};
        }
        
        for (var i = 0; i < tests.length; i++) {
            var test = tests[i];
            itemTotals1[test] = [];
            var category = test.replace(/-.*/, "");
            testTotalsByCategory1[category][test] = 0;
            testMeansByCategory1[category][test] = 0;
            testStdDevsByCategory1[category][test] = 0;
            testStdErrsByCategory1[category][test] = 0;
        }
        
        for (var i = 0; i < count1; i++) {
            itemTotals1["total"][i] = 0;
            for (var category in categoryTotals1) {
                itemTotals1[category][i] = 0;
                for (var test in testTotalsByCategory1[category]) {
                    itemTotals1[test][i] = 0;
                }
            }
        }
        
        itemTotals2 = {total: []};
        
        for (var i = 0; i < categories.length; i++) {
            var category = categories[i];
            itemTotals2[category] = [];
            categoryTotals2[category] = 0;
            testTotalsByCategory2[category] = {};
            categoryMeans2[category] = 0;
            testMeansByCategory2[category] = {};
            categoryStdDevs2[category] = 0;
            testStdDevsByCategory2[category] = {};
            categoryStdErrs2[category] = 0;
            testStdErrsByCategory2[category] = {};
        }
        
        for (var i = 0; i < tests.length; i++) {
            var test = tests[i];
            itemTotals2[test] = [];
            var category = test.replace(/-.*/, "");
            testTotalsByCategory2[category][test] = 0;
            testMeansByCategory2[category][test] = 0;
            testStdDevsByCategory2[category][test] = 0;
            testStdErrsByCategory2[category][test] = 0;
        }
        
        for (var i = 0; i < count2; i++) {
            itemTotals2["total"][i] = 0;
            for (var category in categoryTotals2) {
                itemTotals2[category][i] = 0;
                for (var test in testTotalsByCategory2[category]) {
                    itemTotals2[test][i] = 0;
                }
            }
        }
        
    }
    
    function computeItemTotals(output, itemTotals)
    {
        for (var i = 0; i < output.length; i++) {
            var result = output[i];
            for (var test in result) {
                var time = result[test];
                var category = test.replace(/-.*/, "");
                itemTotals["total"][i] += time;
                itemTotals[category][i] += time;
                itemTotals[test][i] += time;
            }
        }
    }
    
    function computeTotals(output, categoryTotals, testTotalsByCategory)
    {
        var total = 0;
        
        for (var i = 0; i < output.length; i++) {
            var result = output[i];
            for (var test in result) {
                var time = result[test];
                var category = test.replace(/-.*/, "");
                total += time;
                categoryTotals[category] += time;
                testTotalsByCategory[category][test] += time;
            }
        }
        
        return total;
    }
    
    function computeMeans(count, total, categoryTotals, categoryMeans, testTotalsByCategory, testMeansByCategory)
    {
        var mean = total / count;
        for (var category in categoryTotals) {
            categoryMeans[category] = categoryTotals[category] / count;
            for (var test in testTotalsByCategory[category]) {
                testMeansByCategory[category][test] = testTotalsByCategory[category][test] / count;
            }
        }
        return mean;
    }
    
    function standardDeviation(mean, items)
    {
        var deltaSquaredSum = 0;
        for (var i = 0; i < items.length; i++) {
            var delta = items[i] - mean;
            deltaSquaredSum += delta * delta;
        }
        variance = deltaSquaredSum / (items.length - 1);
        return Math.sqrt(variance);
    }
    
    function computeStdDevs(mean, itemTotals, categoryStdDevs, categoryMeans, testStdDevsByCategory, testMeansByCategory)
    {
        var stdDev = standardDeviation(mean, itemTotals["total"]);
        for (var category in categoryStdDevs) {
            categoryStdDevs[category] = standardDeviation(categoryMeans[category], itemTotals[category]);
        }
        for (var category in categoryStdDevs) {
            for (var test in testStdDevsByCategory[category]) {
                testStdDevsByCategory[category][test] = standardDeviation(testMeansByCategory[category][test], itemTotals[test]);
            }
        }
        return stdDev;
    }
    
    function computeStdErrors(count, stdDev, categoryStdErrs, categoryStdDevs, testStdErrsByCategory, testStdDevsByCategory)
    {
        var sqrtCount = Math.sqrt(count);
        
        var stdErr = stdDev / sqrtCount;
        for (var category in categoryStdErrs) {
            categoryStdErrs[category] = categoryStdDevs[category] / sqrtCount;
        }
        for (var category in categoryStdDevs) {
            for (var test in testStdErrsByCategory[category]) {
                testStdErrsByCategory[category][test] = testStdDevsByCategory[category][test] / sqrtCount;
            }
        }
        
        return stdErr;
    }
    
    var tDistribution = [NaN, NaN, 12.71, 4.30, 3.18, 2.78, 2.57, 2.45, 2.36, 2.31, 2.26, 2.23, 2.20, 2.18, 2.16, 2.14, 2.13, 2.12, 2.11, 2.10, 2.09, 2.09, 2.08, 2.07, 2.07, 2.06, 2.06, 2.06, 2.05, 2.05, 2.05, 2.04, 2.04, 2.04, 2.03, 2.03, 2.03, 2.03, 2.03, 2.02, 2.02, 2.02, 2.02, 2.02, 2.02, 2.02, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.96];
    var tMax = tDistribution.length;
    var tLimit = 1.96;
    
    function tDist(n)
    {
        if (n > tMax)
            return tLimit;
        return tDistribution[n];
    }
    
    
    function formatMean(meanWidth, mean, stdErr, count)
    {
        var meanString = mean.toFixed(1).toString();
        while (meanString.length < meanWidth) {
            meanString = " " + meanString;
        }
        
        var error = "+/- " + ((tDist(count) * stdErr / mean) * 100).toFixed(1) + "% ";
        
        return meanString + "ms " + error;
    }
    
    function computeLabelWidth()
    {
        var width = "Total".length;
        for (var category in categoryMeans1) {
            if (category.length + 2 > width)
                width = category.length + 2;
        }
        for (var i = 0; i < tests.length; i++) {
            var shortName = tests[i].replace(/^[^-]*-/, "");
            if (shortName.length + 4 > width)
                width = shortName.length + 4;
        }
        
        return width;
    }
    
    function computeMeanWidth(mean, categoryMeans, testMeansByCategory)
    {
        var width = mean.toFixed(1).toString().length;
        for (var category in categoryMeans) {
            var candidate = categoryMeans[category].toFixed(1).toString().length;
            if (candidate > width)
                width = candidate;
            for (var test in testMeansByCategory[category]) {
                var candidate = testMeansByCategory[category][test].toFixed(1).toString().length;
                if (candidate > width)
                    width = candidate;
            }
        }
        
        return width;
    }
    
    function pad(str, n)
    {
        while (str.length < n) {
            str += " ";
        }
        return str;
    }
    
    function resultLine(labelWidth, indent, label, meanWidth1, mean1, stdErr1, meanWidth2, mean2, stdErr2)
    {
        result = pad("", indent);    
        result += label + ": ";
        result = pad(result, labelWidth + 2);
        
        var t = (mean1 - mean2) / (Math.sqrt((stdErr1 * stdErr1) + (stdErr2 * stdErr2)));
        var df = count1 + count2 - 2;
        
        var statisticallySignificant = (Math.abs(t) > tDist(df+1));
        var diff = mean2 - mean1;
        var percentage = 100 * diff / mean1;
        var isFaster = diff < 0;
        var probablySame = (percentage < 0.1) && !statisticallySignificant;
        var ratio = isFaster ? (mean1 / mean2) : (mean2 / mean1);
        var fixedRatio = (ratio < 1.2) ? ratio.toFixed(3).toString() : ((ratio < 10) ? ratio.toFixed(2).toString() : ratio.toFixed(1).toString());
        var formattedRatio = isFaster ? fixedRatio + "x as fast" : "*" + fixedRatio + "x as slow*";

        var diffSummary;
        var diffDetail;
        
        if (probablySame) {
            diffSummary = "-";
            diffDetail = "";
        } else if (!statisticallySignificant) {
            diffSummary = "??";
            diffDetail =  "    might be " + formattedRatio;
        } else {
            diffSummary = formattedRatio;
            diffDetail = "    significant"; 
        }
        
        return result + pad(diffSummary, 18) + formatMean(meanWidth1, mean1, stdErr1, count1) + "  " + formatMean(meanWidth2, mean2, stdErr2, count2) + diffDetail;
    }
    
    function printOutput()
    {
        var labelWidth = computeLabelWidth();
        var meanWidth1 = computeMeanWidth(mean1, categoryMeans1, testMeansByCategory1);
        var meanWidth2 = computeMeanWidth(mean2, categoryMeans2, testMeansByCategory2);
        
        print("\n");
        var header = "TEST";
        while (header.length < labelWidth)
            header += " ";
        header += "  COMPARISON            FROM                 TO               DETAILS";
        print(header);
        print("");
        print("====================================================================================");
        print("");
        print(resultLine(labelWidth, 0, "** TOTAL **", meanWidth1, mean1, stdErr1, meanWidth2, mean2, stdErr2));
        print("");
        print("====================================================================================");
        
        for (var category in categoryMeans1) {
            print("");
            print(resultLine(labelWidth, 2, category,
                             meanWidth1, categoryMeans1[category], categoryStdErrs1[category],
                             meanWidth2, categoryMeans2[category], categoryStdErrs2[category]));
            for (var test in testMeansByCategory1[category]) {
                var shortName = test.replace(/^[^-]*-/, "");
                print(resultLine(labelWidth, 4, shortName, 
                                 meanWidth1, testMeansByCategory1[category][test], testStdErrsByCategory1[category][test],
                                 meanWidth2, testMeansByCategory2[category][test], testStdErrsByCategory2[category][test]));
            }
        }
    }
    
    initialize();
    
    computeItemTotals(output1, itemTotals1);
    computeItemTotals(output2, itemTotals2);

    total1 = computeTotals(output1, categoryTotals1, testTotalsByCategory1);
    total2 = computeTotals(output2, categoryTotals2, testTotalsByCategory2);

    mean1 = computeMeans(count1, total1, categoryTotals1, categoryMeans1, testTotalsByCategory1, testMeansByCategory1);
    mean2 = computeMeans(count2, total2, categoryTotals2, categoryMeans2, testTotalsByCategory2, testMeansByCategory2);

    stdDev1 = computeStdDevs(mean1, itemTotals1, categoryStdDevs1, categoryMeans1, testStdDevsByCategory1, testMeansByCategory1);
    stdDev2 = computeStdDevs(mean2, itemTotals2, categoryStdDevs2, categoryMeans2, testStdDevsByCategory2, testMeansByCategory2);

    stdErr1 = computeStdErrors(count1, stdDev1, categoryStdErrs1, categoryStdDevs1, testStdErrsByCategory1, testStdDevsByCategory1);
    stdErr2 = computeStdErrors(count2, stdDev2, categoryStdErrs2, categoryStdDevs2, testStdErrsByCategory2, testStdDevsByCategory2);

    printOutput();
}


// results.html
var output2 = output;
var version2 = version;

function compare(other)
{
    document.getElementById("console").innerHTML = "";

    var output1JSON = JSON.parse(decodeURI(other.split("?")[1]));
    var version1 = output1JSON["v"];
    delete output1JSON["v"];
    if (version1 != version2) {
        print("ERROR: cannot compare version " + version1 + ' with version ' + version2);
    } else {
        var output1 = pivot(output1JSON);
        sunspiderCompareResults(output1, output2);
    }
}

document.getElementById("compare").onsubmit = function(event) {
  event.preventDefault();
  compare(other.value);
}
