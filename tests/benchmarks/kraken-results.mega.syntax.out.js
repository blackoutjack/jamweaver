// kraken-results.js
function v7(event$$1) {
  JAM.call(event$$1.preventDefault, event$$1, [], JAM.policy.p178);
  JAM.call(compare, null, [other.value], JAM.policy.p178);
  return;
}
function v6() {
  function v5(text$$7, reviver) {
    function v4(a$$1) {
      var v411 = JAM.call(a$$1.charCodeAt, a$$1, [0], JAM.policy.p180);
      var v197 = "0000" + JAM.call(v411.toString, v411, [16], JAM.policy.p180);
      return "\\u" + JAM.call(v197.slice, v197, [-4], JAM.policy.p180);
    }
    function walk(holder$$1, key$$17) {
      var k$$1;
      var v$$1;
      introspect(JAM.policy.p193) {
        var value$$29 = holder$$1[key$$17]
      }
      var v198 = value$$29;
      if (v198) {
        var v337 = typeof value$$29;
        introspect(JAM.policy.p15) {
          v198 = v337 === "object";
        }
      }
      if (v198) {
        for (k$$1 in value$$29) {
          var v199 = Object.hasOwnProperty;
          if (JAM.call(v199.call, v199, [value$$29, k$$1], JAM.policy.p181)) {
            v$$1 = JAM.call(walk, null, [value$$29, k$$1], JAM.policy.p182);
            if (v$$1 !== undefined) {
              JAM.set(value$$29, k$$1, v$$1, JAM.policy.p196);
            } else {
              introspect(JAM.policy.p193) {
                delete value$$29[k$$1];
              }
            }
          }
        }
      }
      return JAM.call(reviver.call, reviver, [holder$$1, key$$17, value$$29], JAM.policy.p181);
    }
    var j;
    introspect(JAM.policy.p15) {
      cx.lastIndex = 0;
    }
    if (JAM.call(cx.test, cx, [text$$7], JAM.policy.p178)) {
      text$$7 = JAM.call(text$$7.replace, text$$7, [cx, v4], JAM.policy.p182);
    }
    var v412 = JAM.call(text$$7.replace, text$$7, [/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@"], JAM.policy.p178);
    var v338 = JAM.call(v412.replace, v412, [/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]"], JAM.policy.p178);
    if (JAM.call(/^[\],:{}\s]*$/.test, /^[\],:{}\s]*$/, [JAM.call(v338.replace, v338, [/(?:^|:|,)(?:\s*\[)+/g, ""], JAM.policy.p178)], JAM.policy.p178)) {
      var v14 = "(" + text$$7 + ")";
      if (JAM.isEval(eval)) {
        j = eval("introspect(JAM.policy.pFull) { " + v14 + " }");
      } else {
        j = JAM.call(eval, null, [v14]);
      }
      var v15;
      if (typeof reviver === "function") {
        v15 = JAM.call(walk, null, [{"":j}, ""], JAM.policy.p177);
      } else {
        introspect(JAM.policy.p15) {
          v15 = j;
        }
      }
      return v15;
    }
    throw JAM.new(SyntaxError, ["JSON.parse"], JAM.policy.p180);
  }
  function v3(value$$28, replacer, space) {
    var i$$3;
    introspect(JAM.policy.p15) {
      gap = "";
    }
    introspect(JAM.policy.p15) {
      indent = "";
    }
    if (typeof space === "number") {
      introspect(JAM.policy.p15) {
        i$$3 = 0;
      }
      var v17 = i$$3 < space;
      for (;v17;) {
        introspect(JAM.policy.p15) {
          indent = indent + " ";
        }
        introspect(JAM.policy.p15) {
          i$$3 = i$$3 + 1;
        }
        introspect(JAM.policy.p15) {
          v17 = i$$3 < space;
        }
      }
    } else {
      if (typeof space === "string") {
        introspect(JAM.policy.p15) {
          indent = space;
        }
      }
    }
    introspect(JAM.policy.p15) {
      rep = replacer;
    }
    var v340 = replacer;
    if (v340) {
      var v413 = typeof replacer;
      introspect(JAM.policy.p15) {
        v340 = v413 !== "function";
      }
    }
    var v206 = v340;
    if (v206) {
      var v341 = typeof replacer !== "object";
      if (!v341) {
        var v415 = typeof replacer.length;
        introspect(JAM.policy.p15) {
          v341 = v415 !== "number";
        }
      }
      introspect(JAM.policy.p15) {
        v206 = v341;
      }
    }
    if (v206) {
      throw JAM.new(Error, ["JSON.stringify"], JAM.policy.p180);
    }
    return JAM.call(str$$6, null, ["", {"":value$$28}], JAM.policy.p180);
  }
  function v2(key$$16) {
    return JAM.call(this.valueOf, this, [], JAM.policy.p178);
  }
  function v1(key$$15) {
    var v22;
    if (JAM.call(isFinite, null, [JAM.call(this.valueOf, this, [], JAM.policy.p178)], JAM.policy.p178)) {
      var v207 = JAM.call(this.getUTCFullYear, this, [], JAM.policy.p178) + "-" + JAM.call(f, null, [JAM.call(this.getUTCMonth, this, [], JAM.policy.p178) + 1], JAM.policy.p178) + "-" + JAM.call(f, null, [JAM.call(this.getUTCDate, this, [], JAM.policy.p178)], JAM.policy.p178) + "T" + JAM.call(f, null, [JAM.call(this.getUTCHours, this, [], JAM.policy.p178)], JAM.policy.p178) + ":" + JAM.call(f, null, [JAM.call(this.getUTCMinutes, this, [], JAM.policy.p178)], JAM.policy.p178) + ":" + JAM.call(f, null, 
      [JAM.call(this.getUTCSeconds, this, [], JAM.policy.p178)], JAM.policy.p178);
      introspect(JAM.policy.p15) {
        v22 = v207 + "Z";
      }
    } else {
      introspect(JAM.policy.p15) {
        v22 = null;
      }
    }
    return v22;
  }
  function f(n$$1) {
    var v23;
    if (n$$1 < 10) {
      introspect(JAM.policy.p15) {
        v23 = "0" + n$$1;
      }
    } else {
      introspect(JAM.policy.p15) {
        v23 = n$$1;
      }
    }
    return v23;
  }
  function quote(string) {
    function v0(a) {
      introspect(JAM.policy.p193) {
        var c = meta[a]
      }
      var v24;
      if (typeof c === "string") {
        introspect(JAM.policy.p15) {
          v24 = c;
        }
      } else {
        var v442 = JAM.call(a.charCodeAt, a, [0], JAM.policy.p180);
        var v346 = "0000" + JAM.call(v442.toString, v442, [16], JAM.policy.p180);
        var v210 = JAM.call(v346.slice, v346, [-4], JAM.policy.p180);
        introspect(JAM.policy.p15) {
          v24 = "\\u" + v210;
        }
      }
      return v24;
    }
    introspect(JAM.policy.p15) {
      escapable.lastIndex = 0;
    }
    var v25;
    if (JAM.call(escapable.test, escapable, [string], JAM.policy.p178)) {
      var v212 = '"' + JAM.call(string.replace, string, [escapable, v0], JAM.policy.p181);
      introspect(JAM.policy.p15) {
        v25 = v212 + '"';
      }
    } else {
      var v213 = '"' + string;
      introspect(JAM.policy.p15) {
        v25 = v213 + '"';
      }
    }
    return v25;
  }
  function str$$6(key$$14, holder) {
    var i$$2;
    var k;
    var v;
    var length$$11;
    var mind = gap;
    var partial;
    introspect(JAM.policy.p193) {
      var value$$27 = holder[key$$14]
    }
    var v348 = value$$27;
    if (v348) {
      var v420 = typeof value$$27;
      introspect(JAM.policy.p15) {
        v348 = v420 === "object";
      }
    }
    var v215 = v348;
    if (v215) {
      var v349 = typeof value$$27.toJSON;
      introspect(JAM.policy.p15) {
        v215 = v349 === "function";
      }
    }
    if (v215) {
      value$$27 = JAM.call(value$$27.toJSON, value$$27, [key$$14], JAM.policy.p177);
    }
    if (typeof rep === "function") {
      value$$27 = JAM.call(rep.call, rep, [holder, key$$14, value$$27], JAM.policy.p182);
    }
    var v42 = typeof value$$27;
    introspect(JAM.policy.p193) {
      switch(v42) {
        case "string":
          return JAM.call(quote, null, [value$$27], JAM.policy.p178);
        case "number":
          var v28;
          var v217 = JAM.call(isFinite, null, [value$$27], JAM.policy.p178);
          if (v217) {
            v28 = JAM.call(String, null, [value$$27], JAM.policy.p177);
          } else {
            introspect(JAM.policy.p15) {
              v28 = "null";
            }
          }
          return v28;
        case "boolean":
        ;
        case "null":
          return JAM.call(String, null, [value$$27], JAM.policy.p178);
        case "object":
          var v29 = !value$$27;
          if (v29) {
            return "null";
          }
          introspect(JAM.policy.p15) {
            gap = gap + indent;
          }
          introspect(JAM.policy.p15) {
            partial = [];
          }
          var v422 = Object.prototype;
          var v350 = v422.toString;
          var v218 = JAM.call(v350.apply, v350, [value$$27], JAM.policy.p178);
          var v34 = v218 === "[object Array]";
          if (v34) {
            introspect(JAM.policy.p15) {
              length$$11 = value$$27.length;
            }
            introspect(JAM.policy.p15) {
              i$$2 = 0;
            }
            var v32 = i$$2 < length$$11;
            for (;v32;) {
              var v30 = partial;
              var v31 = i$$2;
              var v219 = JAM.call(str$$6, null, [i$$2, value$$27], JAM.policy.p181);
              var v351 = !v219;
              if (v351) {
                introspect(JAM.policy.p15) {
                  v219 = "null";
                }
              }
              introspect(JAM.policy.p196) {
                v30[v31] = v219;
              }
              introspect(JAM.policy.p15) {
                i$$2 = i$$2 + 1;
              }
              introspect(JAM.policy.p15) {
                v32 = i$$2 < length$$11;
              }
            }
            var v33;
            var v352 = partial.length;
            var v221 = v352 === 0;
            if (v221) {
              introspect(JAM.policy.p15) {
                v33 = "[]";
              }
            } else {
              var v220;
              if (gap) {
                var v452 = "[\n" + gap;
                var v461 = ",\n" + gap;
                var v453 = JAM.call(partial.join, partial, [v461], JAM.policy.p178);
                var v443 = v452 + v453;
                var v423 = v443 + "\n";
                var v353 = v423 + mind;
                introspect(JAM.policy.p15) {
                  v220 = v353 + "]";
                }
              } else {
                var v424 = JAM.call(partial.join, partial, [","], JAM.policy.p180);
                var v354 = "[" + v424;
                introspect(JAM.policy.p15) {
                  v220 = v354 + "]";
                }
              }
              introspect(JAM.policy.p15) {
                v33 = v220;
              }
            }
            introspect(JAM.policy.p15) {
              v = v33;
            }
            introspect(JAM.policy.p15) {
              gap = mind;
            }
            return v;
          }
          var v222 = rep;
          if (v222) {
            var v355 = typeof rep;
            introspect(JAM.policy.p15) {
              v222 = v355 === "object";
            }
          }
          var v40 = v222;
          if (v40) {
            introspect(JAM.policy.p15) {
              length$$11 = rep.length;
            }
            introspect(JAM.policy.p15) {
              i$$2 = 0;
            }
            var v37 = i$$2 < length$$11;
            for (;v37;) {
              introspect(JAM.policy.p195) {
                k = rep[i$$2];
              }
              var v223 = typeof k;
              var v36 = v223 === "string";
              if (v36) {
                v = JAM.call(str$$6, null, [k, value$$27], JAM.policy.p182);
                if (v) {
                  var v356 = JAM.call(quote, null, [k], JAM.policy.p178);
                  var v425;
                  if (gap) {
                    introspect(JAM.policy.p15) {
                      v425 = ": ";
                    }
                  } else {
                    introspect(JAM.policy.p15) {
                      v425 = ":";
                    }
                  }
                  var v357 = v425;
                  var v224 = v356 + v357;
                  var v35 = v224 + v;
                  JAM.call(partial.push, partial, [v35], JAM.policy.p178);
                }
              }
              introspect(JAM.policy.p15) {
                i$$2 = i$$2 + 1;
              }
              introspect(JAM.policy.p15) {
                v37 = i$$2 < length$$11;
              }
            }
          } else {
            for (k in value$$27) {
              var v225 = Object.hasOwnProperty;
              var v39 = JAM.call(v225.call, v225, [value$$27, k], JAM.policy.p181);
              if (v39) {
                v = JAM.call(str$$6, null, [k, value$$27], JAM.policy.p182);
                if (v) {
                  var v358 = JAM.call(quote, null, [k], JAM.policy.p178);
                  var v426;
                  if (gap) {
                    introspect(JAM.policy.p15) {
                      v426 = ": ";
                    }
                  } else {
                    introspect(JAM.policy.p15) {
                      v426 = ":";
                    }
                  }
                  var v359 = v426;
                  var v226 = v358 + v359;
                  var v38 = v226 + v;
                  JAM.call(partial.push, partial, [v38], JAM.policy.p178);
                }
              }
            }
          }
          var v41;
          var v360 = partial.length;
          var v228 = v360 === 0;
          if (v228) {
            introspect(JAM.policy.p15) {
              v41 = "{}";
            }
          } else {
            var v227;
            if (gap) {
              var v454 = "{\n" + gap;
              var v462 = ",\n" + gap;
              var v455 = JAM.call(partial.join, partial, [v462], JAM.policy.p178);
              var v444 = v454 + v455;
              var v427 = v444 + "\n";
              var v361 = v427 + mind;
              introspect(JAM.policy.p15) {
                v227 = v361 + "}";
              }
            } else {
              var v428 = JAM.call(partial.join, partial, [","], JAM.policy.p180);
              var v362 = "{" + v428;
              introspect(JAM.policy.p15) {
                v227 = v362 + "}";
              }
            }
            introspect(JAM.policy.p15) {
              v41 = v227;
            }
          }
          introspect(JAM.policy.p15) {
            v = v41;
          }
          introspect(JAM.policy.p15) {
            gap = mind;
          }
          return v;
      }
    }
    return;
  }
  if (typeof Date.prototype.toJSON !== "function") {
    var v43 = Date.prototype;
    introspect(JAM.policy.p15) {
      v43.toJSON = v1;
    }
    var v44 = String.prototype;
    var v230 = Number.prototype;
    var v364 = Boolean.prototype;
    introspect(JAM.policy.p15) {
      v44.toJSON = v230.toJSON = v364.toJSON = v2;
    }
  }
  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
  var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
  var gap;
  var indent;
  var meta = {"\b":"\\b", "\t":"\\t", "\n":"\\n", "\f":"\\f", "\r":"\\r", '"':'\\"', "\\":"\\\\"};
  var rep;
  if (typeof JSON.stringify !== "function") {
    introspect(JAM.policy.p15) {
      JSON.stringify = v3;
    }
  }
  if (typeof JSON.parse !== "function") {
    introspect(JAM.policy.p15) {
      JSON.parse = v5;
    }
  }
  return;
}
function pivot(input) {
  var output$$1 = [];
  var test;
  for (test in input) {
    var i$$4 = 0;
    introspect(JAM.policy.p193) {
      var v367 = input[test]
    }
    var v50 = i$$4 < v367.length;
    for (;v50;) {
      introspect(JAM.policy.p193) {
        var v234 = output$$1[i$$4]
      }
      if (!v234) {
        introspect(JAM.policy.p196) {
          output$$1[i$$4] = {};
        }
      }
      introspect(JAM.policy.p193) {
        var v49 = output$$1[i$$4]
      }
      introspect(JAM.policy.p193) {
        var v235 = input[test]
      }
      JAM.set(v49, test, JAM.get(v235, i$$4, JAM.policy.p196), JAM.policy.p196);
      introspect(JAM.policy.p15) {
        i$$4 = i$$4 + 1;
      }
      introspect(JAM.policy.p193) {
        var v368 = input[test]
      }
      var v236 = v368.length;
      introspect(JAM.policy.p15) {
        v50 = i$$4 < v236;
      }
    }
  }
  return output$$1;
}
function print(str$$7) {
  var console = JAM.call(JAM.get(document, "getElementById", JAM.policy.p179), document, ["console"], JAM.policy.p179);
  JAM.set(console, "innerHTML", console.innerHTML + str$$7, JAM.policy.p96);
  JAM.set(console, "innerHTML", console.innerHTML + "<br>", JAM.policy.p96);
  return;
}
function initialize() {
  introspect(JAM.policy.p15) {
    itemTotals = {total:[]};
  }
  var i$$5 = 0;
  var v51 = i$$5 < categories.length;
  for (;v51;) {
    introspect(JAM.policy.p193) {
      var category = categories[i$$5]
    }
    JAM.set(itemTotals, category, [], JAM.policy.p196);
    JAM.set(categoryTotals, category, 0, JAM.policy.p196);
    JAM.set(testTotalsByCategory, category, {}, JAM.policy.p196);
    JAM.set(categoryMeans, category, 0, JAM.policy.p196);
    JAM.set(testMeansByCategory, category, {}, JAM.policy.p196);
    JAM.set(categoryStdDevs, category, 0, JAM.policy.p196);
    JAM.set(testStdDevsByCategory, category, {}, JAM.policy.p196);
    JAM.set(categoryStdErrs, category, 0, JAM.policy.p196);
    JAM.set(testStdErrsByCategory, category, {}, JAM.policy.p196);
    introspect(JAM.policy.p15) {
      i$$5 = i$$5 + 1;
    }
    var v240 = categories.length;
    introspect(JAM.policy.p15) {
      v51 = i$$5 < v240;
    }
  }
  introspect(JAM.policy.p15) {
    i$$5 = 0;
  }
  var v56 = i$$5 < tests.length;
  for (;v56;) {
    introspect(JAM.policy.p193) {
      var test$$1 = tests[i$$5]
    }
    JAM.set(itemTotals, test$$1, [], JAM.policy.p196);
    category = JAM.call(test$$1.replace, test$$1, [/-.*/, ""], JAM.policy.p177);
    introspect(JAM.policy.p193) {
      var v52 = testTotalsByCategory[category]
    }
    JAM.set(v52, test$$1, 0, JAM.policy.p196);
    introspect(JAM.policy.p193) {
      var v53 = testMeansByCategory[category]
    }
    JAM.set(v53, test$$1, 0, JAM.policy.p196);
    introspect(JAM.policy.p193) {
      var v54 = testStdDevsByCategory[category]
    }
    JAM.set(v54, test$$1, 0, JAM.policy.p196);
    introspect(JAM.policy.p193) {
      var v55 = testStdErrsByCategory[category]
    }
    JAM.set(v55, test$$1, 0, JAM.policy.p196);
    introspect(JAM.policy.p15) {
      i$$5 = i$$5 + 1;
    }
    var v242 = tests.length;
    introspect(JAM.policy.p15) {
      v56 = i$$5 < v242;
    }
  }
  introspect(JAM.policy.p15) {
    i$$5 = 0;
  }
  var v61 = i$$5 < count;
  for (;v61;) {
    var v57 = itemTotals["total"];
    introspect(JAM.policy.p196) {
      v57[i$$5] = 0;
    }
    for (category in categoryTotals) {
      introspect(JAM.policy.p193) {
        var v58 = itemTotals[category]
      }
      introspect(JAM.policy.p196) {
        v58[i$$5] = 0;
      }
      introspect(JAM.policy.p193) {
        var v60 = testTotalsByCategory[category]
      }
      for (test$$1 in v60) {
        introspect(JAM.policy.p193) {
          var v59 = itemTotals[test$$1]
        }
        introspect(JAM.policy.p196) {
          v59[i$$5] = 0;
        }
      }
    }
    introspect(JAM.policy.p15) {
      i$$5 = i$$5 + 1;
    }
    introspect(JAM.policy.p15) {
      v61 = i$$5 < count;
    }
  }
  return;
}
function computeItemTotals() {
  var i$$6 = 0;
  var v65 = i$$6 < output.length;
  for (;v65;) {
    introspect(JAM.policy.p193) {
      var result$$1 = output[i$$6]
    }
    var test$$2;
    for (test$$2 in result$$1) {
      introspect(JAM.policy.p193) {
        var time = result$$1[test$$2]
      }
      var category$$1 = JAM.call(test$$2.replace, test$$2, [/-.*/, ""], JAM.policy.p178);
      var v62 = itemTotals["total"];
      introspect(JAM.policy.p193) {
        var v369 = v62[i$$6]
      }
      introspect(JAM.policy.p196) {
        v62[i$$6] = v369 + time;
      }
      introspect(JAM.policy.p193) {
        var v63 = itemTotals[category$$1]
      }
      introspect(JAM.policy.p193) {
        var v370 = v63[i$$6]
      }
      introspect(JAM.policy.p196) {
        v63[i$$6] = v370 + time;
      }
      introspect(JAM.policy.p193) {
        var v64 = itemTotals[test$$2]
      }
      introspect(JAM.policy.p193) {
        var v371 = v64[i$$6]
      }
      introspect(JAM.policy.p196) {
        v64[i$$6] = v371 + time;
      }
    }
    introspect(JAM.policy.p15) {
      i$$6 = i$$6 + 1;
    }
    var v244 = output.length;
    introspect(JAM.policy.p15) {
      v65 = i$$6 < v244;
    }
  }
  return;
}
function computeTotals() {
  var i$$7 = 0;
  var v67 = i$$7 < output.length;
  for (;v67;) {
    introspect(JAM.policy.p193) {
      var result$$2 = output[i$$7]
    }
    var test$$3;
    for (test$$3 in result$$2) {
      introspect(JAM.policy.p193) {
        var time$$1 = result$$2[test$$3]
      }
      var category$$2 = JAM.call(test$$3.replace, test$$3, [/-.*/, ""], JAM.policy.p178);
      introspect(JAM.policy.p15) {
        total = total + time$$1;
      }
      introspect(JAM.policy.p193) {
        var v246 = categoryTotals[category$$2]
      }
      JAM.set(categoryTotals, category$$2, v246 + time$$1, JAM.policy.p196);
      introspect(JAM.policy.p193) {
        var v66 = testTotalsByCategory[category$$2]
      }
      introspect(JAM.policy.p193) {
        var v372 = v66[test$$3]
      }
      JAM.set(v66, test$$3, v372 + time$$1, JAM.policy.p196);
    }
    introspect(JAM.policy.p15) {
      i$$7 = i$$7 + 1;
    }
    var v247 = output.length;
    introspect(JAM.policy.p15) {
      v67 = i$$7 < v247;
    }
  }
  return;
}
function computeMeans() {
  introspect(JAM.policy.p15) {
    mean = total / count;
  }
  var category$$3;
  for (category$$3 in categoryTotals) {
    introspect(JAM.policy.p193) {
      var v68 = categoryTotals[category$$3]
    }
    JAM.set(categoryMeans, category$$3, v68 / count, JAM.policy.p196);
    var test$$4;
    introspect(JAM.policy.p193) {
      var v70 = testTotalsByCategory[category$$3]
    }
    for (test$$4 in v70) {
      introspect(JAM.policy.p193) {
        var v69 = testMeansByCategory[category$$3]
      }
      introspect(JAM.policy.p193) {
        var v373 = testTotalsByCategory[category$$3]
      }
      introspect(JAM.policy.p193) {
        var v248 = v373[test$$4]
      }
      JAM.set(v69, test$$4, v248 / count, JAM.policy.p196);
    }
  }
  return;
}
function standardDeviation(mean$$1, items) {
  var deltaSquaredSum = 0;
  var i$$8 = 0;
  var v72 = i$$8 < items.length;
  for (;v72;) {
    introspect(JAM.policy.p193) {
      var v71 = items[i$$8]
    }
    var delta$$1 = v71 - mean$$1;
    var v250 = delta$$1 * delta$$1;
    introspect(JAM.policy.p15) {
      deltaSquaredSum = deltaSquaredSum + v250;
    }
    introspect(JAM.policy.p15) {
      i$$8 = i$$8 + 1;
    }
    var v251 = items.length;
    introspect(JAM.policy.p15) {
      v72 = i$$8 < v251;
    }
  }
  var v73 = items.length - 1;
  introspect(JAM.policy.p15) {
    variance = deltaSquaredSum / v73;
  }
  return JAM.call(Math.sqrt, Math, [variance], JAM.policy.p178);
}
function computeStdDevs() {
  stdDev = JAM.call(standardDeviation, null, [mean, itemTotals["total"]], JAM.policy.p182);
  var category$$4;
  for (category$$4 in categoryStdDevs) {
    var v75 = categoryStdDevs;
    var v76 = category$$4;
    introspect(JAM.policy.p193) {
      var v253 = categoryMeans[category$$4]
    }
    introspect(JAM.policy.p193) {
      var v254 = itemTotals[category$$4]
    }
    var v474 = JAM.call(standardDeviation, null, [v253, v254], JAM.policy.p181);
    JAM.set(v75, v76, v474, JAM.policy.p196);
  }
  for (category$$4 in categoryStdDevs) {
    var test$$5;
    introspect(JAM.policy.p193) {
      var v79 = testStdDevsByCategory[category$$4]
    }
    for (test$$5 in v79) {
      introspect(JAM.policy.p193) {
        var v77 = testStdDevsByCategory[category$$4]
      }
      var v78 = test$$5;
      introspect(JAM.policy.p193) {
        var v374 = testMeansByCategory[category$$4]
      }
      introspect(JAM.policy.p193) {
        var v255 = v374[test$$5]
      }
      introspect(JAM.policy.p193) {
        var v256 = itemTotals[test$$5]
      }
      var v475 = JAM.call(standardDeviation, null, [v255, v256], JAM.policy.p181);
      JAM.set(v77, v78, v475, JAM.policy.p196);
    }
  }
  return;
}
function computeStdErrors() {
  var sqrtCount = JAM.call(Math.sqrt, Math, [count], JAM.policy.p178);
  introspect(JAM.policy.p15) {
    stdErr = stdDev / sqrtCount;
  }
  var category$$5;
  for (category$$5 in categoryStdErrs) {
    introspect(JAM.policy.p193) {
      var v80 = categoryStdDevs[category$$5]
    }
    JAM.set(categoryStdErrs, category$$5, v80 / sqrtCount, JAM.policy.p196);
  }
  for (category$$5 in categoryStdDevs) {
    var test$$6;
    introspect(JAM.policy.p193) {
      var v82 = testStdErrsByCategory[category$$5]
    }
    for (test$$6 in v82) {
      introspect(JAM.policy.p193) {
        var v81 = testStdErrsByCategory[category$$5]
      }
      introspect(JAM.policy.p193) {
        var v375 = testStdDevsByCategory[category$$5]
      }
      introspect(JAM.policy.p193) {
        var v257 = v375[test$$6]
      }
      JAM.set(v81, test$$6, v257 / sqrtCount, JAM.policy.p196);
    }
  }
  return;
}
function tDist(n$$2) {
  if (n$$2 > tMax) {
    return tLimit;
  }
  introspect(JAM.policy.p193) {
    return tDistribution[n$$2];
  }
}
function formatResult(meanWidth, mean$$2, stdErr$$1, n$$3) {
  var v84 = JAM.call(mean$$2.toFixed, mean$$2, [1], JAM.policy.p180);
  var meanString = JAM.call(v84.toString, v84, [], JAM.policy.p178);
  var v85 = meanString.length < meanWidth;
  for (;v85;) {
    introspect(JAM.policy.p15) {
      meanString = " " + meanString;
    }
    var v259 = meanString.length;
    introspect(JAM.policy.p15) {
      v85 = v259 < meanWidth;
    }
  }
  if (n$$3 == 1) {
    return meanString + "ms";
  }
  var v260 = meanString + "ms +/- ";
  var v376 = JAM.call(tDist, null, [n$$3], JAM.policy.p178) * stdErr$$1 / mean$$2 * 100;
  return v260 + JAM.call(v376.toFixed, v376, [1], JAM.policy.p180) + "%";
}
function computeLabelWidth() {
  var width$$9 = "Total".length;
  var category$$6;
  for (category$$6 in categoryMeans) {
    if (category$$6.length + 2 > width$$9) {
      var v88 = category$$6.length;
      introspect(JAM.policy.p15) {
        width$$9 = v88 + 2;
      }
    }
  }
  var i$$9 = 0;
  var v93 = i$$9 < tests.length;
  for (;v93;) {
    introspect(JAM.policy.p193) {
      var v90 = tests[i$$9]
    }
    var shortName = JAM.call(v90.replace, v90, [/^[^-]*-/, ""], JAM.policy.p178);
    if (shortName.length + 4 > width$$9) {
      var v91 = shortName.length;
      introspect(JAM.policy.p15) {
        width$$9 = v91 + 4;
      }
    }
    introspect(JAM.policy.p15) {
      i$$9 = i$$9 + 1;
    }
    var v265 = tests.length;
    introspect(JAM.policy.p15) {
      v93 = i$$9 < v265;
    }
  }
  return width$$9;
}
function computeMeanWidth() {
  var v266 = JAM.call(mean.toFixed, mean, [1], JAM.policy.p180);
  var width$$10 = JAM.call(v266.toString, v266, [], JAM.policy.p178).length;
  var category$$7;
  for (category$$7 in categoryMeans) {
    introspect(JAM.policy.p193) {
      var v379 = categoryMeans[category$$7]
    }
    var v267 = JAM.call(v379.toFixed, v379, [2], JAM.policy.p180);
    var candidate = JAM.call(v267.toString, v267, [], JAM.policy.p178).length;
    if (candidate > width$$10) {
      introspect(JAM.policy.p15) {
        width$$10 = candidate;
      }
    }
    var test$$7;
    introspect(JAM.policy.p193) {
      var v99 = testMeansByCategory[category$$7]
    }
    for (test$$7 in v99) {
      introspect(JAM.policy.p193) {
        var v431 = testMeansByCategory[category$$7]
      }
      introspect(JAM.policy.p193) {
        var v380 = v431[test$$7]
      }
      var v268 = JAM.call(v380.toFixed, v380, [2], JAM.policy.p180);
      var v97 = JAM.call(v268.toString, v268, [], JAM.policy.p178);
      introspect(JAM.policy.p15) {
        candidate = v97.length;
      }
      if (candidate > width$$10) {
        introspect(JAM.policy.p15) {
          width$$10 = candidate;
        }
      }
    }
  }
  return width$$10;
}
function resultLine(labelWidth, indent$$1, label, meanWidth$$1, mean$$3, stdErr$$2) {
  var result$$3 = "";
  introspect(JAM.policy.p15) {
    i = 0;
  }
  var v100 = i < indent$$1;
  for (;v100;) {
    introspect(JAM.policy.p15) {
      result$$3 = result$$3 + " ";
    }
    introspect(JAM.policy.p15) {
      i = i + 1;
    }
    introspect(JAM.policy.p15) {
      v100 = i < indent$$1;
    }
  }
  if (label in explanations) {
    introspect(JAM.policy.p193) {
      var v457 = explanations[label]
    }
    var v269 = "<a href='" + v457 + "'>" + label + "</a>: ";
    introspect(JAM.policy.p15) {
      result$$3 = result$$3 + v269;
    }
  } else {
    var v270 = label + ": ";
    introspect(JAM.policy.p15) {
      result$$3 = result$$3 + v270;
    }
  }
  introspect(JAM.policy.p15) {
    i = 0;
  }
  var v102 = i < labelWidth - (label.length + indent$$1);
  for (;v102;) {
    introspect(JAM.policy.p15) {
      result$$3 = result$$3 + " ";
    }
    introspect(JAM.policy.p15) {
      i = i + 1;
    }
    var v272 = labelWidth - (label.length + indent$$1);
    introspect(JAM.policy.p15) {
      v102 = i < v272;
    }
  }
  return result$$3 + JAM.call(formatResult, null, [meanWidth$$1, mean$$3, stdErr$$2, count], JAM.policy.p181);
}
function printOutput() {
  var labelWidth$$1 = JAM.call(computeLabelWidth, null, [], JAM.policy.p178);
  var meanWidth$$2 = JAM.call(computeMeanWidth, null, [], JAM.policy.p178);
  JAM.call(print, null, ["\n"], JAM.policy.p180);
  JAM.call(print, null, ["==============================================="], JAM.policy.p180);
  if (count == 1) {
    JAM.call(print, null, ["RESULTS"], JAM.policy.p180);
  } else {
    JAM.call(print, null, ["RESULTS (means and 95% confidence intervals)"], JAM.policy.p180);
  }
  JAM.call(print, null, ["-----------------------------------------------"], JAM.policy.p180);
  JAM.call(print, null, [JAM.call(resultLine, null, [labelWidth$$1, 0, "Total", meanWidth$$2, mean, stdErr], JAM.policy.p178)], JAM.policy.p178);
  JAM.call(print, null, ["-----------------------------------------------"], JAM.policy.p180);
  var category$$8;
  for (category$$8 in categoryMeans) {
    JAM.call(print, null, [""], JAM.policy.p180);
    introspect(JAM.policy.p193) {
      var v273 = categoryMeans[category$$8]
    }
    introspect(JAM.policy.p193) {
      var v274 = categoryStdErrs[category$$8]
    }
    JAM.call(print, null, [JAM.call(resultLine, null, [labelWidth$$1, 2, category$$8, meanWidth$$2, v273, v274], JAM.policy.p178)], JAM.policy.p178);
    var test$$8;
    introspect(JAM.policy.p193) {
      var v109 = testMeansByCategory[category$$8]
    }
    for (test$$8 in v109) {
      var shortName$$1 = JAM.call(test$$8.replace, test$$8, [/^[^-]*-/, ""], JAM.policy.p178);
      introspect(JAM.policy.p193) {
        var v384 = testMeansByCategory[category$$8]
      }
      introspect(JAM.policy.p193) {
        var v275 = v384[test$$8]
      }
      introspect(JAM.policy.p193) {
        var v385 = testStdErrsByCategory[category$$8]
      }
      introspect(JAM.policy.p193) {
        var v276 = v385[test$$8]
      }
      JAM.call(print, null, [JAM.call(resultLine, null, [labelWidth$$1, 4, shortName$$1, meanWidth$$2, v275, v276], JAM.policy.p178)], JAM.policy.p178);
    }
  }
  return;
}
function sunspiderCompareResults(output1, output2$$1) {
  function initialize$$1() {
    introspect(JAM.policy.p15) {
      itemTotals1 = {total:[]};
    }
    var i$$10 = 0;
    var v110 = i$$10 < categories.length;
    for (;v110;) {
      introspect(JAM.policy.p193) {
        var category$$9 = categories[i$$10]
      }
      JAM.set(itemTotals1, category$$9, [], JAM.policy.p196);
      JAM.set(categoryTotals1, category$$9, 0, JAM.policy.p196);
      JAM.set(testTotalsByCategory1, category$$9, {}, JAM.policy.p196);
      JAM.set(categoryMeans1, category$$9, 0, JAM.policy.p196);
      JAM.set(testMeansByCategory1, category$$9, {}, JAM.policy.p196);
      JAM.set(categoryStdDevs1, category$$9, 0, JAM.policy.p196);
      JAM.set(testStdDevsByCategory1, category$$9, {}, JAM.policy.p196);
      JAM.set(categoryStdErrs1, category$$9, 0, JAM.policy.p196);
      JAM.set(testStdErrsByCategory1, category$$9, {}, JAM.policy.p196);
      introspect(JAM.policy.p15) {
        i$$10 = i$$10 + 1;
      }
      var v278 = categories.length;
      introspect(JAM.policy.p15) {
        v110 = i$$10 < v278;
      }
    }
    introspect(JAM.policy.p15) {
      i$$10 = 0;
    }
    var v115 = i$$10 < tests.length;
    for (;v115;) {
      introspect(JAM.policy.p193) {
        var test$$9 = tests[i$$10]
      }
      JAM.set(itemTotals1, test$$9, [], JAM.policy.p196);
      category$$9 = JAM.call(test$$9.replace, test$$9, [/-.*/, ""], JAM.policy.p177);
      introspect(JAM.policy.p193) {
        var v111 = testTotalsByCategory1[category$$9]
      }
      JAM.set(v111, test$$9, 0, JAM.policy.p196);
      introspect(JAM.policy.p193) {
        var v112 = testMeansByCategory1[category$$9]
      }
      JAM.set(v112, test$$9, 0, JAM.policy.p196);
      introspect(JAM.policy.p193) {
        var v113 = testStdDevsByCategory1[category$$9]
      }
      JAM.set(v113, test$$9, 0, JAM.policy.p196);
      introspect(JAM.policy.p193) {
        var v114 = testStdErrsByCategory1[category$$9]
      }
      JAM.set(v114, test$$9, 0, JAM.policy.p196);
      introspect(JAM.policy.p15) {
        i$$10 = i$$10 + 1;
      }
      var v280 = tests.length;
      introspect(JAM.policy.p15) {
        v115 = i$$10 < v280;
      }
    }
    introspect(JAM.policy.p15) {
      i$$10 = 0;
    }
    var v120 = i$$10 < count1;
    for (;v120;) {
      var v116 = itemTotals1["total"];
      introspect(JAM.policy.p196) {
        v116[i$$10] = 0;
      }
      for (category$$9 in categoryTotals1) {
        introspect(JAM.policy.p193) {
          var v117 = itemTotals1[category$$9]
        }
        introspect(JAM.policy.p196) {
          v117[i$$10] = 0;
        }
        introspect(JAM.policy.p193) {
          var v119 = testTotalsByCategory1[category$$9]
        }
        for (test$$9 in v119) {
          introspect(JAM.policy.p193) {
            var v118 = itemTotals1[test$$9]
          }
          introspect(JAM.policy.p196) {
            v118[i$$10] = 0;
          }
        }
      }
      introspect(JAM.policy.p15) {
        i$$10 = i$$10 + 1;
      }
      introspect(JAM.policy.p15) {
        v120 = i$$10 < count1;
      }
    }
    introspect(JAM.policy.p15) {
      itemTotals2 = {total:[]};
    }
    introspect(JAM.policy.p15) {
      i$$10 = 0;
    }
    var v121 = i$$10 < categories.length;
    for (;v121;) {
      introspect(JAM.policy.p195) {
        category$$9 = categories[i$$10];
      }
      JAM.set(itemTotals2, category$$9, [], JAM.policy.p196);
      JAM.set(categoryTotals2, category$$9, 0, JAM.policy.p196);
      JAM.set(testTotalsByCategory2, category$$9, {}, JAM.policy.p196);
      JAM.set(categoryMeans2, category$$9, 0, JAM.policy.p196);
      JAM.set(testMeansByCategory2, category$$9, {}, JAM.policy.p196);
      JAM.set(categoryStdDevs2, category$$9, 0, JAM.policy.p196);
      JAM.set(testStdDevsByCategory2, category$$9, {}, JAM.policy.p196);
      JAM.set(categoryStdErrs2, category$$9, 0, JAM.policy.p196);
      JAM.set(testStdErrsByCategory2, category$$9, {}, JAM.policy.p196);
      introspect(JAM.policy.p15) {
        i$$10 = i$$10 + 1;
      }
      var v282 = categories.length;
      introspect(JAM.policy.p15) {
        v121 = i$$10 < v282;
      }
    }
    introspect(JAM.policy.p15) {
      i$$10 = 0;
    }
    var v126 = i$$10 < tests.length;
    for (;v126;) {
      introspect(JAM.policy.p195) {
        test$$9 = tests[i$$10];
      }
      JAM.set(itemTotals2, test$$9, [], JAM.policy.p196);
      category$$9 = JAM.call(test$$9.replace, test$$9, [/-.*/, ""], JAM.policy.p177);
      introspect(JAM.policy.p193) {
        var v122 = testTotalsByCategory2[category$$9]
      }
      JAM.set(v122, test$$9, 0, JAM.policy.p196);
      introspect(JAM.policy.p193) {
        var v123 = testMeansByCategory2[category$$9]
      }
      JAM.set(v123, test$$9, 0, JAM.policy.p196);
      introspect(JAM.policy.p193) {
        var v124 = testStdDevsByCategory2[category$$9]
      }
      JAM.set(v124, test$$9, 0, JAM.policy.p196);
      introspect(JAM.policy.p193) {
        var v125 = testStdErrsByCategory2[category$$9]
      }
      JAM.set(v125, test$$9, 0, JAM.policy.p196);
      introspect(JAM.policy.p15) {
        i$$10 = i$$10 + 1;
      }
      var v284 = tests.length;
      introspect(JAM.policy.p15) {
        v126 = i$$10 < v284;
      }
    }
    introspect(JAM.policy.p15) {
      i$$10 = 0;
    }
    var v131 = i$$10 < count2;
    for (;v131;) {
      var v127 = itemTotals2["total"];
      introspect(JAM.policy.p196) {
        v127[i$$10] = 0;
      }
      for (category$$9 in categoryTotals2) {
        introspect(JAM.policy.p193) {
          var v128 = itemTotals2[category$$9]
        }
        introspect(JAM.policy.p196) {
          v128[i$$10] = 0;
        }
        introspect(JAM.policy.p193) {
          var v130 = testTotalsByCategory2[category$$9]
        }
        for (test$$9 in v130) {
          introspect(JAM.policy.p193) {
            var v129 = itemTotals2[test$$9]
          }
          introspect(JAM.policy.p196) {
            v129[i$$10] = 0;
          }
        }
      }
      introspect(JAM.policy.p15) {
        i$$10 = i$$10 + 1;
      }
      introspect(JAM.policy.p15) {
        v131 = i$$10 < count2;
      }
    }
    return;
  }
  function computeItemTotals$$1(output$$2, itemTotals$$1) {
    var i$$11 = 0;
    var v135 = i$$11 < output$$2.length;
    for (;v135;) {
      introspect(JAM.policy.p193) {
        var result$$4 = output$$2[i$$11]
      }
      var test$$10;
      for (test$$10 in result$$4) {
        introspect(JAM.policy.p193) {
          var time$$2 = result$$4[test$$10]
        }
        var category$$10 = JAM.call(test$$10.replace, test$$10, [/-.*/, ""], JAM.policy.p178);
        var v132 = itemTotals$$1["total"];
        introspect(JAM.policy.p193) {
          var v386 = v132[i$$11]
        }
        introspect(JAM.policy.p196) {
          v132[i$$11] = v386 + time$$2;
        }
        introspect(JAM.policy.p193) {
          var v133 = itemTotals$$1[category$$10]
        }
        introspect(JAM.policy.p193) {
          var v387 = v133[i$$11]
        }
        introspect(JAM.policy.p196) {
          v133[i$$11] = v387 + time$$2;
        }
        introspect(JAM.policy.p193) {
          var v134 = itemTotals$$1[test$$10]
        }
        introspect(JAM.policy.p193) {
          var v388 = v134[i$$11]
        }
        introspect(JAM.policy.p196) {
          v134[i$$11] = v388 + time$$2;
        }
      }
      introspect(JAM.policy.p15) {
        i$$11 = i$$11 + 1;
      }
      var v286 = output$$2.length;
      introspect(JAM.policy.p15) {
        v135 = i$$11 < v286;
      }
    }
    return;
  }
  function computeTotals$$1(output$$3, categoryTotals$$1, testTotalsByCategory$$1) {
    var total$$1 = 0;
    var i$$12 = 0;
    var v137 = i$$12 < output$$3.length;
    for (;v137;) {
      introspect(JAM.policy.p193) {
        var result$$5 = output$$3[i$$12]
      }
      var test$$11;
      for (test$$11 in result$$5) {
        introspect(JAM.policy.p193) {
          var time$$3 = result$$5[test$$11]
        }
        var category$$11 = JAM.call(test$$11.replace, test$$11, [/-.*/, ""], JAM.policy.p178);
        introspect(JAM.policy.p15) {
          total$$1 = total$$1 + time$$3;
        }
        introspect(JAM.policy.p193) {
          var v288 = categoryTotals$$1[category$$11]
        }
        JAM.set(categoryTotals$$1, category$$11, v288 + time$$3, JAM.policy.p196);
        introspect(JAM.policy.p193) {
          var v136 = testTotalsByCategory$$1[category$$11]
        }
        introspect(JAM.policy.p193) {
          var v389 = v136[test$$11]
        }
        JAM.set(v136, test$$11, v389 + time$$3, JAM.policy.p196);
      }
      introspect(JAM.policy.p15) {
        i$$12 = i$$12 + 1;
      }
      var v289 = output$$3.length;
      introspect(JAM.policy.p15) {
        v137 = i$$12 < v289;
      }
    }
    return total$$1;
  }
  function computeMeans$$1(count$$4, total$$2, categoryTotals$$2, categoryMeans$$1, testTotalsByCategory$$2, testMeansByCategory$$1) {
    var mean$$4 = total$$2 / count$$4;
    var category$$12;
    for (category$$12 in categoryTotals$$2) {
      introspect(JAM.policy.p193) {
        var v138 = categoryTotals$$2[category$$12]
      }
      JAM.set(categoryMeans$$1, category$$12, v138 / count$$4, JAM.policy.p196);
      var test$$12;
      introspect(JAM.policy.p193) {
        var v140 = testTotalsByCategory$$2[category$$12]
      }
      for (test$$12 in v140) {
        introspect(JAM.policy.p193) {
          var v139 = testMeansByCategory$$1[category$$12]
        }
        introspect(JAM.policy.p193) {
          var v390 = testTotalsByCategory$$2[category$$12]
        }
        introspect(JAM.policy.p193) {
          var v290 = v390[test$$12]
        }
        JAM.set(v139, test$$12, v290 / count$$4, JAM.policy.p196);
      }
    }
    return mean$$4;
  }
  function standardDeviation$$1(mean$$5, items$$1) {
    var deltaSquaredSum$$1 = 0;
    var i$$13 = 0;
    var v142 = i$$13 < items$$1.length;
    for (;v142;) {
      introspect(JAM.policy.p193) {
        var v141 = items$$1[i$$13]
      }
      var delta$$2 = v141 - mean$$5;
      var v292 = delta$$2 * delta$$2;
      introspect(JAM.policy.p15) {
        deltaSquaredSum$$1 = deltaSquaredSum$$1 + v292;
      }
      introspect(JAM.policy.p15) {
        i$$13 = i$$13 + 1;
      }
      var v293 = items$$1.length;
      introspect(JAM.policy.p15) {
        v142 = i$$13 < v293;
      }
    }
    var v143 = items$$1.length - 1;
    introspect(JAM.policy.p15) {
      variance = deltaSquaredSum$$1 / v143;
    }
    return JAM.call(Math.sqrt, Math, [variance], JAM.policy.p178);
  }
  function computeStdDevs$$1(mean$$6, itemTotals$$2, categoryStdDevs$$1, categoryMeans$$2, testStdDevsByCategory$$1, testMeansByCategory$$2) {
    var stdDev$$1 = JAM.call(standardDeviation$$1, null, [mean$$6, itemTotals$$2["total"]], JAM.policy.p181);
    var category$$13;
    for (category$$13 in categoryStdDevs$$1) {
      var v145 = categoryStdDevs$$1;
      var v146 = category$$13;
      introspect(JAM.policy.p193) {
        var v295 = categoryMeans$$2[category$$13]
      }
      introspect(JAM.policy.p193) {
        var v296 = itemTotals$$2[category$$13]
      }
      var v476 = JAM.call(standardDeviation$$1, null, [v295, v296], JAM.policy.p181);
      JAM.set(v145, v146, v476, JAM.policy.p196);
    }
    for (category$$13 in categoryStdDevs$$1) {
      var test$$13;
      introspect(JAM.policy.p193) {
        var v149 = testStdDevsByCategory$$1[category$$13]
      }
      for (test$$13 in v149) {
        introspect(JAM.policy.p193) {
          var v147 = testStdDevsByCategory$$1[category$$13]
        }
        var v148 = test$$13;
        introspect(JAM.policy.p193) {
          var v391 = testMeansByCategory$$2[category$$13]
        }
        introspect(JAM.policy.p193) {
          var v297 = v391[test$$13]
        }
        introspect(JAM.policy.p193) {
          var v298 = itemTotals$$2[test$$13]
        }
        var v477 = JAM.call(standardDeviation$$1, null, [v297, v298], JAM.policy.p181);
        JAM.set(v147, v148, v477, JAM.policy.p196);
      }
    }
    return stdDev$$1;
  }
  function computeStdErrors$$1(count$$5, stdDev$$2, categoryStdErrs$$1, categoryStdDevs$$2, testStdErrsByCategory$$1, testStdDevsByCategory$$2) {
    var sqrtCount$$1 = JAM.call(Math.sqrt, Math, [count$$5], JAM.policy.p178);
    var stdErr$$3 = stdDev$$2 / sqrtCount$$1;
    var category$$14;
    for (category$$14 in categoryStdErrs$$1) {
      introspect(JAM.policy.p193) {
        var v150 = categoryStdDevs$$2[category$$14]
      }
      JAM.set(categoryStdErrs$$1, category$$14, v150 / sqrtCount$$1, JAM.policy.p196);
    }
    for (category$$14 in categoryStdDevs$$2) {
      var test$$14;
      introspect(JAM.policy.p193) {
        var v152 = testStdErrsByCategory$$1[category$$14]
      }
      for (test$$14 in v152) {
        introspect(JAM.policy.p193) {
          var v151 = testStdErrsByCategory$$1[category$$14]
        }
        introspect(JAM.policy.p193) {
          var v392 = testStdDevsByCategory$$2[category$$14]
        }
        introspect(JAM.policy.p193) {
          var v299 = v392[test$$14]
        }
        JAM.set(v151, test$$14, v299 / sqrtCount$$1, JAM.policy.p196);
      }
    }
    return stdErr$$3;
  }
  function tDist$$1(n$$4) {
    if (n$$4 > tMax$$1) {
      return tLimit$$1;
    }
    introspect(JAM.policy.p193) {
      return tDistribution$$1[n$$4];
    }
  }
  function formatMean(meanWidth$$3, mean$$7, stdErr$$4, count$$6) {
    var v154 = JAM.call(mean$$7.toFixed, mean$$7, [1], JAM.policy.p180);
    var meanString$$1 = JAM.call(v154.toString, v154, [], JAM.policy.p178);
    var v155 = meanString$$1.length < meanWidth$$3;
    for (;v155;) {
      introspect(JAM.policy.p15) {
        meanString$$1 = " " + meanString$$1;
      }
      var v301 = meanString$$1.length;
      introspect(JAM.policy.p15) {
        v155 = v301 < meanWidth$$3;
      }
    }
    var v393 = JAM.call(tDist$$1, null, [count$$6], JAM.policy.p178) * stdErr$$4 / mean$$7 * 100;
    var error$$1 = "+/- " + JAM.call(v393.toFixed, v393, [1], JAM.policy.p180) + "% ";
    return meanString$$1 + "ms " + error$$1;
  }
  function computeMeanWidth$$1(mean$$8, categoryMeans$$3, testMeansByCategory$$3) {
    var v303 = JAM.call(mean$$8.toFixed, mean$$8, [1], JAM.policy.p180);
    var width$$12 = JAM.call(v303.toString, v303, [], JAM.policy.p178).length;
    var category$$16;
    for (category$$16 in categoryMeans$$3) {
      introspect(JAM.policy.p193) {
        var v394 = categoryMeans$$3[category$$16]
      }
      var v304 = JAM.call(v394.toFixed, v394, [1], JAM.policy.p180);
      var candidate$$1 = JAM.call(v304.toString, v304, [], JAM.policy.p178).length;
      if (candidate$$1 > width$$12) {
        introspect(JAM.policy.p15) {
          width$$12 = candidate$$1;
        }
      }
      var test$$15;
      introspect(JAM.policy.p193) {
        var v163 = testMeansByCategory$$3[category$$16]
      }
      for (test$$15 in v163) {
        introspect(JAM.policy.p193) {
          var v436 = testMeansByCategory$$3[category$$16]
        }
        introspect(JAM.policy.p193) {
          var v395 = v436[test$$15]
        }
        var v305 = JAM.call(v395.toFixed, v395, [1], JAM.policy.p180);
        var v161 = JAM.call(v305.toString, v305, [], JAM.policy.p178);
        introspect(JAM.policy.p15) {
          candidate$$1 = v161.length;
        }
        if (candidate$$1 > width$$12) {
          introspect(JAM.policy.p15) {
            width$$12 = candidate$$1;
          }
        }
      }
    }
    return width$$12;
  }
  function pad(str$$8, n$$5) {
    var v164 = str$$8.length < n$$5;
    for (;v164;) {
      introspect(JAM.policy.p15) {
        str$$8 = str$$8 + " ";
      }
      var v307 = str$$8.length;
      introspect(JAM.policy.p15) {
        v164 = v307 < n$$5;
      }
    }
    return str$$8;
  }
  function resultLine$$1(labelWidth$$2, indent$$2, label$$1, meanWidth1, mean1$$1, stdErr1$$1, meanWidth2, mean2$$1, stdErr2$$1) {
    result = JAM.call(pad, null, ["", indent$$2], JAM.policy.p176);
    var v308 = label$$1 + ": ";
    introspect(JAM.policy.p15) {
      result = result + v308;
    }
    result = JAM.call(pad, null, [result, labelWidth$$2 + 2], JAM.policy.p182);
    var t = (mean1$$1 - mean2$$1) / JAM.call(Math.sqrt, Math, [stdErr1$$1 * stdErr1$$1 + stdErr2$$1 * stdErr2$$1], JAM.policy.p178);
    var df = count1 + count2 - 2;
    var statisticallySignificant = JAM.call(Math.abs, Math, [t], JAM.policy.p178) > JAM.call(tDist$$1, null, [df + 1], JAM.policy.p178);
    var diff = mean2$$1 - mean1$$1;
    var percentage = 100 * diff / mean1$$1;
    var isFaster = diff < 0;
    var v172 = percentage < .1;
    if (v172) {
      introspect(JAM.policy.p15) {
        v172 = !statisticallySignificant;
      }
    }
    var probablySame = v172;
    var v173;
    if (isFaster) {
      introspect(JAM.policy.p15) {
        v173 = mean1$$1 / mean2$$1;
      }
    } else {
      introspect(JAM.policy.p15) {
        v173 = mean2$$1 / mean1$$1;
      }
    }
    var ratio = v173;
    var v174;
    if (ratio < 1.2) {
      var v311 = JAM.call(ratio.toFixed, ratio, [3], JAM.policy.p180);
      v174 = JAM.call(v311.toString, v311, [], JAM.policy.p177);
    } else {
      var v312;
      if (ratio < 10) {
        var v398 = JAM.call(ratio.toFixed, ratio, [2], JAM.policy.p180);
        v312 = JAM.call(v398.toString, v398, [], JAM.policy.p177);
      } else {
        var v399 = JAM.call(ratio.toFixed, ratio, [1], JAM.policy.p180);
        v312 = JAM.call(v399.toString, v399, [], JAM.policy.p177);
      }
      introspect(JAM.policy.p15) {
        v174 = v312;
      }
    }
    var fixedRatio = v174;
    var v175;
    if (isFaster) {
      introspect(JAM.policy.p15) {
        v175 = fixedRatio + "x as fast";
      }
    } else {
      var v314 = "*" + fixedRatio;
      introspect(JAM.policy.p15) {
        v175 = v314 + "x as slow*";
      }
    }
    var formattedRatio = v175;
    var diffSummary;
    var diffDetail;
    if (probablySame) {
      introspect(JAM.policy.p15) {
        diffSummary = "-";
      }
      introspect(JAM.policy.p15) {
        diffDetail = "";
      }
    } else {
      if (!statisticallySignificant) {
        introspect(JAM.policy.p15) {
          diffSummary = "??";
        }
        introspect(JAM.policy.p15) {
          diffDetail = "    might be " + formattedRatio;
        }
      } else {
        introspect(JAM.policy.p15) {
          diffSummary = formattedRatio;
        }
        introspect(JAM.policy.p15) {
          diffDetail = "    significant";
        }
      }
    }
    return result + JAM.call(pad, null, [diffSummary, 18], JAM.policy.p178) + JAM.call(formatMean, null, [meanWidth1, mean1$$1, stdErr1$$1, count1], JAM.policy.p181) + "  " + JAM.call(formatMean, null, [meanWidth2, mean2$$1, stdErr2$$1, count2], JAM.policy.p181) + diffDetail;
  }
  function printOutput$$1() {
    var labelWidth$$3;
    var width$$inline_0 = "Total".length;
    var category$$inline_1;
    for (category$$inline_1 in categoryMeans1) {
      if (category$$inline_1.length + 2 > width$$inline_0) {
        var v178 = category$$inline_1.length;
        introspect(JAM.policy.p15) {
          width$$inline_0 = v178 + 2;
        }
      }
    }
    var i$$inline_2 = 0;
    var v183 = i$$inline_2 < tests.length;
    for (;v183;) {
      introspect(JAM.policy.p193) {
        var v180 = tests[i$$inline_2]
      }
      var shortName$$inline_3 = JAM.call(v180.replace, v180, [/^[^-]*-/, ""], JAM.policy.p178);
      if (shortName$$inline_3.length + 4 > width$$inline_0) {
        var v181 = shortName$$inline_3.length;
        introspect(JAM.policy.p15) {
          width$$inline_0 = v181 + 4;
        }
      }
      introspect(JAM.policy.p15) {
        i$$inline_2 = i$$inline_2 + 1;
      }
      var v320 = tests.length;
      introspect(JAM.policy.p15) {
        v183 = i$$inline_2 < v320;
      }
    }
    introspect(JAM.policy.p15) {
      labelWidth$$3 = width$$inline_0;
    }
    var meanWidth1$$1 = JAM.call(computeMeanWidth$$1, null, [mean1, categoryMeans1, testMeansByCategory1], JAM.policy.p181);
    var meanWidth2$$1 = JAM.call(computeMeanWidth$$1, null, [mean2, categoryMeans2, testMeansByCategory2], JAM.policy.p181);
    JAM.call(print, null, ["\n"], JAM.policy.p180);
    var header$$2 = "TEST";
    var v184 = header$$2.length < labelWidth$$3;
    for (;v184;) {
      introspect(JAM.policy.p15) {
        header$$2 = header$$2 + " ";
      }
      var v322 = header$$2.length;
      introspect(JAM.policy.p15) {
        v184 = v322 < labelWidth$$3;
      }
    }
    introspect(JAM.policy.p15) {
      header$$2 = header$$2 + "  COMPARISON            FROM                 TO               DETAILS";
    }
    JAM.call(print, null, [header$$2], JAM.policy.p178);
    JAM.call(print, null, [""], JAM.policy.p180);
    JAM.call(print, null, ["===================================================================================="], JAM.policy.p180);
    JAM.call(print, null, [""], JAM.policy.p180);
    JAM.call(print, null, [JAM.call(resultLine$$1, null, [labelWidth$$3, 0, "** TOTAL **", meanWidth1$$1, mean1, stdErr1, meanWidth2$$1, mean2, stdErr2], JAM.policy.p178)], JAM.policy.p178);
    JAM.call(print, null, [""], JAM.policy.p180);
    JAM.call(print, null, ["===================================================================================="], JAM.policy.p180);
    var category$$17;
    for (category$$17 in categoryMeans1) {
      JAM.call(print, null, [""], JAM.policy.p180);
      introspect(JAM.policy.p193) {
        var v323 = categoryMeans1[category$$17]
      }
      introspect(JAM.policy.p193) {
        var v324 = categoryStdErrs1[category$$17]
      }
      introspect(JAM.policy.p193) {
        var v325 = categoryMeans2[category$$17]
      }
      introspect(JAM.policy.p193) {
        var v326 = categoryStdErrs2[category$$17]
      }
      JAM.call(print, null, [JAM.call(resultLine$$1, null, [labelWidth$$3, 2, category$$17, meanWidth1$$1, v323, v324, meanWidth2$$1, v325, v326], JAM.policy.p178)], JAM.policy.p178);
      var test$$16;
      introspect(JAM.policy.p193) {
        var v188 = testMeansByCategory1[category$$17]
      }
      for (test$$16 in v188) {
        var shortName$$3 = JAM.call(test$$16.replace, test$$16, [/^[^-]*-/, ""], JAM.policy.p178);
        introspect(JAM.policy.p193) {
          var v404 = testMeansByCategory1[category$$17]
        }
        introspect(JAM.policy.p193) {
          var v327 = v404[test$$16]
        }
        introspect(JAM.policy.p193) {
          var v405 = testStdErrsByCategory1[category$$17]
        }
        introspect(JAM.policy.p193) {
          var v328 = v405[test$$16]
        }
        introspect(JAM.policy.p193) {
          var v406 = testMeansByCategory2[category$$17]
        }
        introspect(JAM.policy.p193) {
          var v329 = v406[test$$16]
        }
        introspect(JAM.policy.p193) {
          var v407 = testStdErrsByCategory2[category$$17]
        }
        introspect(JAM.policy.p193) {
          var v330 = v407[test$$16]
        }
        JAM.call(print, null, [JAM.call(resultLine$$1, null, [labelWidth$$3, 4, shortName$$3, meanWidth1$$1, v327, v328, meanWidth2$$1, v329, v330], JAM.policy.p178)], JAM.policy.p178);
      }
    }
    return;
  }
  var count1 = output1.length;
  var count2 = output2$$1.length;
  var itemTotals1 = {};
  introspect(JAM.policy.p15) {
    itemTotals1.length = count1;
  }
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
  introspect(JAM.policy.p15) {
    itemTotals2.length = count2;
  }
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
  var tDistribution$$1 = [NaN, NaN, 12.71, 4.3, 3.18, 2.78, 2.57, 2.45, 2.36, 2.31, 2.26, 2.23, 2.2, 2.18, 2.16, 2.14, 2.13, 2.12, 2.11, 2.1, 2.09, 2.09, 2.08, 2.07, 2.07, 2.06, 2.06, 2.06, 2.05, 2.05, 2.05, 2.04, 2.04, 2.04, 2.03, 2.03, 2.03, 2.03, 2.03, 2.02, 2.02, 2.02, 2.02, 2.02, 2.02, 2.02, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 
  1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 
  1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 
  1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 
  1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 
  1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.96];
  var tMax$$1 = tDistribution$$1.length;
  var tLimit$$1 = 1.96;
  JAM.call(initialize$$1, null, [], JAM.policy.p178);
  JAM.call(computeItemTotals$$1, null, [output1, itemTotals1], JAM.policy.p181);
  JAM.call(computeItemTotals$$1, null, [output2$$1, itemTotals2], JAM.policy.p181);
  total1 = JAM.call(computeTotals$$1, null, [output1, categoryTotals1, testTotalsByCategory1], JAM.policy.p182);
  total2 = JAM.call(computeTotals$$1, null, [output2$$1, categoryTotals2, testTotalsByCategory2], JAM.policy.p182);
  mean1 = JAM.call(computeMeans$$1, null, [count1, total1, categoryTotals1, categoryMeans1, testTotalsByCategory1, testMeansByCategory1], JAM.policy.p182);
  mean2 = JAM.call(computeMeans$$1, null, [count2, total2, categoryTotals2, categoryMeans2, testTotalsByCategory2, testMeansByCategory2], JAM.policy.p182);
  stdDev1 = JAM.call(computeStdDevs$$1, null, [mean1, itemTotals1, categoryStdDevs1, categoryMeans1, testStdDevsByCategory1, testMeansByCategory1], JAM.policy.p182);
  stdDev2 = JAM.call(computeStdDevs$$1, null, [mean2, itemTotals2, categoryStdDevs2, categoryMeans2, testStdDevsByCategory2, testMeansByCategory2], JAM.policy.p182);
  stdErr1 = JAM.call(computeStdErrors$$1, null, [count1, stdDev1, categoryStdErrs1, categoryStdDevs1, testStdErrsByCategory1, testStdDevsByCategory1], JAM.policy.p182);
  stdErr2 = JAM.call(computeStdErrors$$1, null, [count2, stdDev2, categoryStdErrs2, categoryStdDevs2, testStdErrsByCategory2, testStdDevsByCategory2], JAM.policy.p182);
  JAM.call(printOutput$$1, null, [], JAM.policy.p178);
  return;
}
function compare(other$$5) {
  JAM.set(JAM.call(JAM.get(document, "getElementById", JAM.policy.p179), document, ["console"], JAM.policy.p179), "innerHTML", "", JAM.policy.p96);
  var v408 = JAM.call(other$$5.split, other$$5, ["?"], JAM.policy.p180);
  introspect(JAM.policy.p193) {
    var v331 = v408[1]
  }
  var output1JSON = JAM.call(JSON.parse, JSON, [JAM.call(decodeURI, null, [v331], JAM.policy.p178)], JAM.policy.p178);
  var version1 = output1JSON["v"];
  delete output1JSON["v"];
  if (version1 != version2) {
    JAM.call(print, null, ["ERROR: cannot compare version " + version1 + " with version " + version2], JAM.policy.p178);
  } else {
    var output1$$1 = JAM.call(pivot, null, [output1JSON], JAM.policy.p178);
    JAM.call(sunspiderCompareResults, null, [output1$$1, output2], JAM.policy.p181);
  }
  return;
}
introspect(JAM.policy.p15) {
  var v333 = this.JSON
}
introspect(JAM.policy.p15) {
  var v193 = !v333
}
if (v193) {
  introspect(JAM.policy.p15) {
    this.JSON = {};
  }
}
JAM.call(v6, null, [], JAM.policy.p178);
introspect(JAM.policy.p15) {
  var explanations = {"astar":"../explanations/astar.html", "gaussian-blur":"../explanations/gaussian-blur.html", "darkroom":"../explanations/darkroom.html", "desaturate":"../explanations/desaturate.html", "beat-detection":"../explanations/beat-detection.html", "dft":"../explanations/dft.html", "fft":"../explanations/fft.html", "oscillator":"../explanations/oscillator.html", "parse-financial":"../explanations/parse-financial.html", "stringify-tinderbox":"../explanations/stringify-tinderbox.html"}
}
var selfUrlInput = JAM.call(JAM.get(document, "getElementById", JAM.policy.p175), document, ["selfUrl"], JAM.policy.p175);
introspect(JAM.policy.p15) {
  selfUrlInput.value = location;
}
introspect(JAM.policy.p15) {
  var v410 = location.search
}
var outputJSON = JAM.call(JSON.parse, JSON, [JAM.call(decodeURI, null, [JAM.call(v410.substring, v410, [1], JAM.policy.p176)], JAM.policy.p177)], JAM.policy.p177);
introspect(JAM.policy.p15) {
  var version = outputJSON["v"]
}
delete outputJSON["v"];
var output = JAM.call(pivot, null, [outputJSON], JAM.policy.p177);
introspect(JAM.policy.p15) {
  var tests = ["ai-astar", "audio-beat-detection", "audio-dft", "audio-fft", "audio-oscillator", "imaging-gaussian-blur", "imaging-darkroom", "imaging-desaturate", "json-parse-financial", "json-stringify-tinderbox", "stanford-crypto-aes", "stanford-crypto-ccm", "stanford-crypto-pbkdf2", "stanford-crypto-sha256-iterative"]
}
introspect(JAM.policy.p15) {
  var categories = ["ai", "audio", "imaging", "json", "stanford"]
}
introspect(JAM.policy.p15) {
  var count = output.length
}
introspect(JAM.policy.p15) {
  var itemTotals = {}
}
introspect(JAM.policy.p15) {
  itemTotals.length = count;
}
introspect(JAM.policy.p15) {
  var total = 0
}
introspect(JAM.policy.p15) {
  var categoryTotals = {}
}
introspect(JAM.policy.p15) {
  var testTotalsByCategory = {}
}
introspect(JAM.policy.p15) {
  var mean = 0
}
introspect(JAM.policy.p15) {
  var categoryMeans = {}
}
introspect(JAM.policy.p15) {
  var testMeansByCategory = {}
}
introspect(JAM.policy.p15) {
  var stdDev = 0
}
introspect(JAM.policy.p15) {
  var categoryStdDevs = {}
}
introspect(JAM.policy.p15) {
  var testStdDevsByCategory = {}
}
introspect(JAM.policy.p15) {
  var stdErr = 0
}
introspect(JAM.policy.p15) {
  var categoryStdErrs = {}
}
introspect(JAM.policy.p15) {
  var testStdErrsByCategory = {}
}
introspect(JAM.policy.p15) {
  var tDistribution = [NaN, NaN, 12.71, 4.3, 3.18, 2.78, 2.57, 2.45, 2.36, 2.31, 2.26, 2.23, 2.2, 2.18, 2.16, 2.14, 2.13, 2.12, 2.11, 2.1, 2.09, 2.09, 2.08, 2.07, 2.07, 2.06, 2.06, 2.06, 2.05, 2.05, 2.05, 2.04, 2.04, 2.04, 2.03, 2.03, 2.03, 2.03, 2.03, 2.02, 2.02, 2.02, 2.02, 2.02, 2.02, 2.02, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 
  1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 
  1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 
  1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 
  1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 
  1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.96]
}
introspect(JAM.policy.p15) {
  var tMax = tDistribution.length
}
introspect(JAM.policy.p15) {
  var tLimit = 1.96
}
introspect(JAM.policy.p15) {
  var v335 = this["explanations"]
}
introspect(JAM.policy.p15) {
  var v195 = !v335
}
if (v195) {
  introspect(JAM.policy.p15) {
    explanations = {};
  }
}
JAM.call(initialize, null, [], JAM.policy.p178);
JAM.call(computeItemTotals, null, [], JAM.policy.p178);
JAM.call(computeTotals, null, [], JAM.policy.p178);
JAM.call(computeMeans, null, [], JAM.policy.p178);
JAM.call(computeStdDevs, null, [], JAM.policy.p178);
JAM.call(computeStdErrors, null, [], JAM.policy.p178);
JAM.call(printOutput, null, [], JAM.policy.p178);
introspect(JAM.policy.p15) {
  var output2 = output
}
introspect(JAM.policy.p15) {
  var version2 = version
}
JAM.set(JAM.call(JAM.get(document, "getElementById", JAM.policy.p175), document, ["compare"], JAM.policy.p175), "onsubmit", v7, JAM.policy.p15)

