// jsqrcode.js
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
  var v1073 = oneTwoDistance >= zeroOneDistance;
  if (v1073) {
    v1073 = oneTwoDistance >= zeroTwoDistance;
  }
  if (v1073) {
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
    var v1074 = zeroTwoDistance >= oneTwoDistance;
    if (v1074) {
      v1074 = zeroTwoDistance >= zeroOneDistance;
    }
    if (v1074) {
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
  var v1076 = (to || from) + 1;
  if (!v1076) {
    v1076 = this.length;
  }
  var rest = JAM.call(this.slice, this, [v1076], JAM.policy.p39);
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
          var v1092;
          var v2692 = areaWidth$$1 * ax$$1 + dx$$6 + (areaHeight$$1 * ay$$1 + dy$$6) * qrcode.width;
          introspect(JAM.policy.p26) {
            var v2517 = grayScale[v2692]
          }
          introspect(JAM.policy.p26) {
            var v2693 = middle$$1[ax$$1]
          }
          introspect(JAM.policy.p26) {
            var v2518 = v2693[ay$$1]
          }
          if (v2517 < v2518) {
            v1092 = true;
          } else {
            v1092 = false;
          }
          introspect(JAM.policy.p27) {
            bitmap[v181] = v1092;
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
function v150(image$$9) {
  var numSqrtArea = 4;
  var areaWidth = JAM.call(Math.floor, Math, [qrcode.width / numSqrtArea], JAM.policy.p39);
  var areaHeight = JAM.call(Math.floor, Math, [qrcode.height / numSqrtArea], JAM.policy.p39);
  var minmax = JAM.new(Array, [numSqrtArea], JAM.policy.p39);
  var i$$46 = 0;
  var v191 = i$$46 < numSqrtArea;
  for (;v191;) {
    var v2851 = JAM.new(Array, [numSqrtArea], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      minmax[i$$46] = v2851;
    }
    var i2 = 0;
    var v190 = i2 < numSqrtArea;
    for (;v190;) {
      introspect(JAM.policy.p26) {
        var v188 = minmax[i$$46]
      }
      var v189 = i2;
      var v2852 = JAM.new(Array, [0, 0], JAM.policy.p22);
      introspect(JAM.policy.p27) {
        v188[v189] = v2852;
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
        var v1095 = minmax[ax]
      }
      introspect(JAM.policy.p26) {
        var v192 = v1095[ay]
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
            var target$$26 = image$$9[v193]
          }
          introspect(JAM.policy.p26) {
            var v2520 = minmax[ax]
          }
          introspect(JAM.policy.p26) {
            var v1870 = v2520[ay]
          }
          introspect(JAM.policy.p26) {
            var v1098 = v1870[0]
          }
          if (target$$26 < v1098) {
            introspect(JAM.policy.p26) {
              var v1099 = minmax[ax]
            }
            introspect(JAM.policy.p26) {
              var v194 = v1099[ay]
            }
            introspect(JAM.policy.p27) {
              v194[0] = target$$26;
            }
          }
          introspect(JAM.policy.p26) {
            var v2521 = minmax[ax]
          }
          introspect(JAM.policy.p26) {
            var v1871 = v2521[ay]
          }
          introspect(JAM.policy.p26) {
            var v1100 = v1871[1]
          }
          if (target$$26 > v1100) {
            introspect(JAM.policy.p26) {
              var v1101 = minmax[ax]
            }
            introspect(JAM.policy.p26) {
              var v196 = v1101[ay]
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
    var v2853 = JAM.new(Array, [numSqrtArea], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      middle[i3] = v2853;
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
        var v2773 = minmax[ax]
      }
      introspect(JAM.policy.p26) {
        var v2694 = v2773[ay]
      }
      introspect(JAM.policy.p26) {
        var v2522 = v2694[0]
      }
      introspect(JAM.policy.p26) {
        var v2774 = minmax[ax]
      }
      introspect(JAM.policy.p26) {
        var v2695 = v2774[ay]
      }
      introspect(JAM.policy.p26) {
        var v2523 = v2695[1]
      }
      var v2854 = JAM.call(Math.floor, Math, [(v2522 + v2523) / 2], JAM.policy.p39);
      introspect(JAM.policy.p27) {
        v203[v204] = v2854;
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
      var v1108;
      if (gray <= th) {
        v1108 = true;
      } else {
        v1108 = false;
      }
      introspect(JAM.policy.p27) {
        ret[v208] = v1108;
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
  var point$$1 = x$$59 * 4 + y$$41 * qrcode.width * 4;
  var v2696 = qrcode.imagedata.data;
  introspect(JAM.policy.p26) {
    var v2524 = v2696[point$$1]
  }
  var v1876 = v2524 * 33;
  var v2697 = qrcode.imagedata.data;
  var v2698 = point$$1 + 1;
  introspect(JAM.policy.p26) {
    var v2525 = v2697[v2698]
  }
  var v1114 = v1876 + v2525 * 34;
  var v2526 = qrcode.imagedata.data;
  var v2527 = point$$1 + 2;
  introspect(JAM.policy.p26) {
    var v1878 = v2526[v2527]
  }
  p = (v1114 + v1878 * 33) / 100;
  return p;
}
function v147(ctx) {
  var v216 = JAM.new(Date, [], JAM.policy.p40);
  var start$$4 = JAM.call(v216.getTime, v216, [], JAM.policy.p40);
  var image$$8 = JAM.call(qrcode.grayScaleToBitmap, qrcode, [JAM.call(qrcode.grayscale, qrcode, [], JAM.policy.p40)], JAM.policy.p39);
  if (qrcode.debug) {
    var y$$40 = 0;
    var v226 = y$$40 < qrcode.height;
    for (;v226;) {
      var x$$58 = 0;
      var v225 = x$$58 < qrcode.width;
      for (;v225;) {
        var point = x$$58 * 4 + y$$40 * qrcode.width * 4;
        var v220 = qrcode.imagedata.data;
        var v1120;
        var v2528 = x$$58 + y$$40 * qrcode.width;
        introspect(JAM.policy.p26) {
          var v1880 = image$$8[v2528]
        }
        if (v1880) {
          v1120 = 0;
        } else {
          v1120 = 0;
        }
        introspect(JAM.policy.p27) {
          v220[point] = v1120;
        }
        var v221 = qrcode.imagedata.data;
        var v222 = point + 1;
        var v1122;
        var v2529 = x$$58 + y$$40 * qrcode.width;
        introspect(JAM.policy.p26) {
          var v1881 = image$$8[v2529]
        }
        if (v1881) {
          v1122 = 0;
        } else {
          v1122 = 0;
        }
        introspect(JAM.policy.p27) {
          v221[v222] = v1122;
        }
        var v223 = qrcode.imagedata.data;
        var v224 = point + 2;
        var v1124;
        var v2530 = x$$58 + y$$40 * qrcode.width;
        introspect(JAM.policy.p26) {
          var v1882 = image$$8[v2530]
        }
        if (v1882) {
          v1124 = 255;
        } else {
          v1124 = 0;
        }
        introspect(JAM.policy.p27) {
          v223[v224] = v1124;
        }
        x$$58 = x$$58 + 1;
        v225 = x$$58 < qrcode.width;
      }
      y$$40 = y$$40 + 1;
      v226 = y$$40 < qrcode.height;
    }
    JAM.call(ctx.putImageData, ctx, [qrcode.imagedata, 0, 0], JAM.policy.p41);
  }
  var detector = JAM.new(Detector, [image$$8], JAM.policy.p39);
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
      var v1883 = data$$18[i$$45]
    }
    var v232 = j$$24 < v1883.length;
    for (;v232;) {
      var v1129 = str$$6;
      introspect(JAM.policy.p26) {
        var v2531 = data$$18[i$$45]
      }
      introspect(JAM.policy.p26) {
        var v1884 = v2531[j$$24]
      }
      str$$6 = v1129 + JAM.call(String.fromCharCode, String, [v1884], JAM.policy.p39);
      j$$24 = j$$24 + 1;
      introspect(JAM.policy.p26) {
        var v1885 = data$$18[i$$45]
      }
      v232 = j$$24 < v1885.length;
    }
    i$$45 = i$$45 + 1;
    v233 = i$$45 < data$$18.length;
  }
  var v234 = JAM.new(Date, [], JAM.policy.p40);
  var end$$1 = JAM.call(v234.getTime, v234, [], JAM.policy.p40);
  var time = end$$1 - start$$4;
  JAM.call(console.log, console, [time], JAM.policy.p39);
  return JAM.call(qrcode.decode_utf8, qrcode, [str$$6], JAM.policy.p39);
}
function v146(s$$4) {
  return JAM.call(decodeURIComponent, null, [JAM.call(escape, null, [s$$4], JAM.policy.p39)], JAM.policy.p39);
}
function v145(src$$1) {
  function v144() {
    var canvas_qr$$1 = JAM.call(document.createElement, document, ["canvas"], JAM.policy.p24);
    var context$$1 = JAM.call(canvas_qr$$1.getContext, canvas_qr$$1, ["2d"], JAM.policy.p24);
    var canvas_out = JAM.call(document.getElementById, document, ["out-canvas"], JAM.policy.p24);
    if (canvas_out != null) {
      var outctx = JAM.call(canvas_out.getContext, canvas_out, ["2d"], JAM.policy.p24);
      JAM.call(outctx.clearRect, outctx, [0, 0, 320, 240], JAM.policy.p22);
      JAM.call(outctx.drawImage, outctx, [image$$7, 0, 0, 320, 240], JAM.policy.p41);
    }
    canvas_qr$$1.width = image$$7.width;
    canvas_qr$$1.height = image$$7.height;
    JAM.call(context$$1.drawImage, context$$1, [image$$7, 0, 0], JAM.policy.p41);
    qrcode.width = image$$7.width;
    qrcode.height = image$$7.height;
    try {
      var v237 = qrcode;
      var v2855 = JAM.call(context$$1.getImageData, context$$1, [0, 0, image$$7.width, image$$7.height], JAM.policy.p22);
      v237.imagedata = v2855;
    } catch (e$$5) {
      qrcode.result = "Cross domain image reading not supported in your browser! Save it to your computer then drag and drop the file!";
      if (qrcode.callback != null) {
        JAM.call(qrcode.callback, qrcode, [qrcode.result], JAM.policy.p39);
      }
      return;
    }
    try {
      var v240 = qrcode;
      var v2856 = JAM.call(qrcode.process, qrcode, [context$$1], JAM.policy.p39);
      v240.result = v2856;
    } catch (e$$6) {
      JAM.call(console.log, console, [e$$6], JAM.policy.p39);
      qrcode.result = "error decoding QR Code";
    }
    if (qrcode.callback != null) {
      JAM.call(qrcode.callback, qrcode, [qrcode.result], JAM.policy.p39);
    }
    return;
  }
  if (arguments.length == 0) {
    var canvas_qr = JAM.call(document.getElementById, document, ["qr-canvas"], JAM.policy.p24);
    var context = JAM.call(canvas_qr.getContext, canvas_qr, ["2d"], JAM.policy.p24);
    qrcode.width = canvas_qr.width;
    qrcode.height = canvas_qr.height;
    var v243 = qrcode;
    var v2857 = JAM.call(context.getImageData, context, [0, 0, qrcode.width, qrcode.height], JAM.policy.p22);
    v243.imagedata = v2857;
    var v244 = qrcode;
    var v2858 = JAM.call(qrcode.process, qrcode, [context], JAM.policy.p39);
    v244.result = v2858;
    if (qrcode.callback != null) {
      JAM.call(qrcode.callback, qrcode, [qrcode.result], JAM.policy.p39);
    }
    return qrcode.result;
  } else {
    var image$$7 = JAM.new(Image, [], JAM.policy.p40);
    JAM.set(image$$7, "onload", v144);
    introspect(JAM.policy.p8) {
      image$$7.src = src$$1;
    }
  }
  return;
}
function v143(bits$$13) {
  var parser = JAM.new(BitMatrixParser, [bits$$13], JAM.policy.p39);
  var version$$7 = JAM.call(parser.readVersion, parser, [], JAM.policy.p40);
  var ecLevel$$2 = JAM.call(parser.readFormatInformation, parser, [], JAM.policy.p40).ErrorCorrectionLevel;
  var codewords$$1 = JAM.call(parser.readCodewords, parser, [], JAM.policy.p40);
  var dataBlocks = JAM.call(DataBlock.getDataBlocks, DataBlock, [codewords$$1, version$$7, ecLevel$$2], JAM.policy.p38);
  var totalBytes = 0;
  var i$$44 = 0;
  var v249 = i$$44 < dataBlocks.Length;
  for (;v249;) {
    introspect(JAM.policy.p26) {
      var v1886 = dataBlocks[i$$44]
    }
    totalBytes = totalBytes + v1886.NumDataCodewords;
    i$$44 = i$$44 + 1;
    v249 = i$$44 < dataBlocks.Length;
  }
  var resultBytes = JAM.new(Array, [totalBytes], JAM.policy.p39);
  var resultOffset$$1 = 0;
  var j$$23 = 0;
  var v252 = j$$23 < dataBlocks.length;
  for (;v252;) {
    introspect(JAM.policy.p26) {
      var dataBlock = dataBlocks[j$$23]
    }
    var codewordBytes$$1 = dataBlock.Codewords;
    var numDataCodewords$$3 = dataBlock.NumDataCodewords;
    JAM.call(Decoder.correctErrors, Decoder, [codewordBytes$$1, numDataCodewords$$3], JAM.policy.p38);
    i$$44 = 0;
    var v251 = i$$44 < numDataCodewords$$3;
    for (;v251;) {
      var v250 = resultOffset$$1;
      resultOffset$$1 = resultOffset$$1 + 1;
      introspect(JAM.policy.p27) {
        resultBytes[v250] = codewordBytes$$1[i$$44];
      }
      i$$44 = i$$44 + 1;
      v251 = i$$44 < numDataCodewords$$3;
    }
    j$$23 = j$$23 + 1;
    v252 = j$$23 < dataBlocks.length;
  }
  var reader = JAM.new(QRCodeDataBlockReader, [resultBytes, version$$7.VersionNumber, ecLevel$$2.Bits], JAM.policy.p38);
  return reader;
}
function v142(codewordBytes, numDataCodewords$$2) {
  var numCodewords$$1 = codewordBytes.length;
  var codewordsInts = JAM.new(Array, [numCodewords$$1], JAM.policy.p39);
  var i$$43 = 0;
  var v256 = i$$43 < numCodewords$$1;
  for (;v256;) {
    introspect(JAM.policy.p26) {
      var v255 = codewordBytes[i$$43]
    }
    introspect(JAM.policy.p27) {
      codewordsInts[i$$43] = v255 & 255;
    }
    i$$43 = i$$43 + 1;
    v256 = i$$43 < numCodewords$$1;
  }
  var numECCodewords = codewordBytes.length - numDataCodewords$$2;
  try {
    var v258 = Decoder.rsDecoder;
    JAM.call(v258.decode, v258, [codewordsInts, numECCodewords], JAM.policy.p38);
  } catch (rse) {
    throw rse;
  }
  i$$43 = 0;
  var v259 = i$$43 < numDataCodewords$$2;
  for (;v259;) {
    introspect(JAM.policy.p27) {
      codewordBytes[i$$43] = codewordsInts[i$$43];
    }
    i$$43 = i$$43 + 1;
    v259 = i$$43 < numDataCodewords$$2;
  }
  return;
}
function v141(a$$7, b$$4) {
  return a$$7 ^ b$$4;
}
function v140(reference) {
  var v1146 = reference < 0;
  if (!v1146) {
    v1146 = reference > 7;
  }
  if (v1146) {
    throw "System.ArgumentException";
  }
  var v261 = DataMask.DATA_MASKS;
  introspect(JAM.policy.p26) {
    return v261[reference];
  }
}
function v139(rawCodewords, version$$5, ecLevel$$1) {
  if (rawCodewords.length != version$$5.TotalCodewords) {
    throw "ArgumentException";
  }
  var ecBlocks = JAM.call(version$$5.getECBlocksForLevel, version$$5, [ecLevel$$1], JAM.policy.p39);
  var totalBlocks = 0;
  var ecBlockArray = ecBlocks.ecBlocks;
  var i$$11 = 0;
  var v263 = i$$11 < ecBlockArray.length;
  for (;v263;) {
    introspect(JAM.policy.p26) {
      var v1888 = ecBlockArray[i$$11]
    }
    totalBlocks = totalBlocks + v1888.Count;
    i$$11 = i$$11 + 1;
    v263 = i$$11 < ecBlockArray.length;
  }
  var result$$1 = JAM.new(Array, [totalBlocks], JAM.policy.p39);
  var numResultBlocks = 0;
  var j = 0;
  var v268 = j < ecBlockArray.length;
  for (;v268;) {
    introspect(JAM.policy.p26) {
      var ecBlock$$1 = ecBlockArray[j]
    }
    i$$11 = 0;
    var v267 = i$$11 < ecBlock$$1.Count;
    for (;v267;) {
      var numDataCodewords$$1 = ecBlock$$1.DataCodewords;
      var numBlockCodewords = ecBlocks.ECCodewordsPerBlock + numDataCodewords$$1;
      var v265 = result$$1;
      var v266 = numResultBlocks;
      numResultBlocks = numResultBlocks + 1;
      var v2859 = JAM.new(DataBlock, [numDataCodewords$$1, JAM.new(Array, [numBlockCodewords], JAM.policy.p39)], JAM.policy.p38);
      introspect(JAM.policy.p27) {
        v265[v266] = v2859;
      }
      i$$11 = i$$11 + 1;
      v267 = i$$11 < ecBlock$$1.Count;
    }
    j = j + 1;
    v268 = j < ecBlockArray.length;
  }
  introspect(JAM.policy.p26) {
    var v1157 = result$$1[0]
  }
  var shorterBlocksTotalCodewords = v1157.codewords.length;
  var longerBlocksStartAt = result$$1.length - 1;
  var v273 = longerBlocksStartAt >= 0;
  for (;v273;) {
    introspect(JAM.policy.p26) {
      var v1158 = result$$1[longerBlocksStartAt]
    }
    var numCodewords = v1158.codewords.length;
    if (numCodewords == shorterBlocksTotalCodewords) {
      break;
    }
    longerBlocksStartAt = longerBlocksStartAt - 1;
    v273 = longerBlocksStartAt >= 0;
  }
  longerBlocksStartAt = longerBlocksStartAt + 1;
  var shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - ecBlocks.ECCodewordsPerBlock;
  var rawCodewordsOffset = 0;
  i$$11 = 0;
  var v277 = i$$11 < shorterBlocksNumDataCodewords;
  for (;v277;) {
    j = 0;
    var v276 = j < numResultBlocks;
    for (;v276;) {
      introspect(JAM.policy.p26) {
        var v1159 = result$$1[j]
      }
      var v275 = v1159.codewords;
      var v1160 = rawCodewordsOffset;
      rawCodewordsOffset = rawCodewordsOffset + 1;
      introspect(JAM.policy.p27) {
        v275[i$$11] = rawCodewords[v1160];
      }
      j = j + 1;
      v276 = j < numResultBlocks;
    }
    i$$11 = i$$11 + 1;
    v277 = i$$11 < shorterBlocksNumDataCodewords;
  }
  j = longerBlocksStartAt;
  var v279 = j < numResultBlocks;
  for (;v279;) {
    introspect(JAM.policy.p26) {
      var v1161 = result$$1[j]
    }
    var v278 = v1161.codewords;
    var v1162 = rawCodewordsOffset;
    rawCodewordsOffset = rawCodewordsOffset + 1;
    introspect(JAM.policy.p27) {
      v278[shorterBlocksNumDataCodewords] = rawCodewords[v1162];
    }
    j = j + 1;
    v279 = j < numResultBlocks;
  }
  introspect(JAM.policy.p26) {
    var v1163 = result$$1[0]
  }
  var max$$4 = v1163.codewords.length;
  i$$11 = shorterBlocksNumDataCodewords;
  var v284 = i$$11 < max$$4;
  for (;v284;) {
    j = 0;
    var v283 = j < numResultBlocks;
    for (;v283;) {
      var v281;
      if (j < longerBlocksStartAt) {
        v281 = i$$11;
      } else {
        v281 = i$$11 + 1;
      }
      var iOffset = v281;
      introspect(JAM.policy.p26) {
        var v1165 = result$$1[j]
      }
      var v282 = v1165.codewords;
      var v1166 = rawCodewordsOffset;
      rawCodewordsOffset = rawCodewordsOffset + 1;
      introspect(JAM.policy.p27) {
        v282[iOffset] = rawCodewords[v1166];
      }
      j = j + 1;
      v283 = j < numResultBlocks;
    }
    i$$11 = i$$11 + 1;
    v284 = i$$11 < max$$4;
  }
  return result$$1;
}
function v138(bits$$4) {
  var v1167 = bits$$4 < 0;
  if (!v1167) {
    v1167 = bits$$4 >= FOR_BITS.Length;
  }
  if (v1167) {
    throw "ArgumentException";
  }
  introspect(JAM.policy.p26) {
    return FOR_BITS[bits$$4];
  }
}
function v137(maskedFormatInfo$$1) {
  var bestDifference$$1 = 4294967295;
  var bestFormatInfo = 0;
  var i$$8 = 0;
  var v289 = i$$8 < FORMAT_INFO_DECODE_LOOKUP.length;
  for (;v289;) {
    introspect(JAM.policy.p26) {
      var decodeInfo = FORMAT_INFO_DECODE_LOOKUP[i$$8]
    }
    introspect(JAM.policy.p26) {
      var targetInfo = decodeInfo[0]
    }
    if (targetInfo == maskedFormatInfo$$1) {
      introspect(JAM.policy.p26) {
        var v286 = decodeInfo[1]
      }
      return JAM.new(FormatInformation, [v286], JAM.policy.p39);
    }
    var bitsDifference$$1 = JAM.call(this.numBitsDiffering, this, [maskedFormatInfo$$1, targetInfo], JAM.policy.p38);
    if (bitsDifference$$1 < bestDifference$$1) {
      introspect(JAM.policy.p26) {
        bestFormatInfo = decodeInfo[1];
      }
      bestDifference$$1 = bitsDifference$$1;
    }
    i$$8 = i$$8 + 1;
    v289 = i$$8 < FORMAT_INFO_DECODE_LOOKUP.length;
  }
  if (bestDifference$$1 <= 3) {
    return JAM.new(FormatInformation, [bestFormatInfo], JAM.policy.p39);
  }
  return null;
}
function v136(maskedFormatInfo) {
  var formatInfo$$1 = JAM.call(FormatInformation.doDecodeFormatInformation, FormatInformation, [maskedFormatInfo], JAM.policy.p39);
  if (formatInfo$$1 != null) {
    return formatInfo$$1;
  }
  return JAM.call(FormatInformation.doDecodeFormatInformation, FormatInformation, [maskedFormatInfo ^ FORMAT_INFO_MASK_QR], JAM.policy.p39);
}
function v135(a, b$$1) {
  a = a ^ b$$1;
  var v2844 = a & 15;
  introspect(JAM.policy.p26) {
    var v2823 = BITS_SET_IN_HALF_BYTE[v2844]
  }
  var v2845 = BITS_SET_IN_HALF_BYTE;
  var v2846 = JAM.call(URShift, null, [a, 4], JAM.policy.p41) & 15;
  introspect(JAM.policy.p26) {
    var v2824 = v2845[v2846]
  }
  var v2780 = v2823 + v2824;
  var v2825 = BITS_SET_IN_HALF_BYTE;
  var v2826 = JAM.call(URShift, null, [a, 8], JAM.policy.p41) & 15;
  introspect(JAM.policy.p26) {
    var v2781 = v2825[v2826]
  }
  var v2703 = v2780 + v2781;
  var v2782 = BITS_SET_IN_HALF_BYTE;
  var v2783 = JAM.call(URShift, null, [a, 12], JAM.policy.p41) & 15;
  introspect(JAM.policy.p26) {
    var v2704 = v2782[v2783]
  }
  var v2532 = v2703 + v2704;
  var v2705 = BITS_SET_IN_HALF_BYTE;
  var v2706 = JAM.call(URShift, null, [a, 16], JAM.policy.p41) & 15;
  introspect(JAM.policy.p26) {
    var v2533 = v2705[v2706]
  }
  var v1891 = v2532 + v2533;
  var v2534 = BITS_SET_IN_HALF_BYTE;
  var v2535 = JAM.call(URShift, null, [a, 20], JAM.policy.p41) & 15;
  introspect(JAM.policy.p26) {
    var v1892 = v2534[v2535]
  }
  var v1170 = v1891 + v1892;
  var v1893 = BITS_SET_IN_HALF_BYTE;
  var v1894 = JAM.call(URShift, null, [a, 24], JAM.policy.p41) & 15;
  introspect(JAM.policy.p26) {
    var v1171 = v1893[v1894]
  }
  var v293 = v1170 + v1171;
  var v1172 = BITS_SET_IN_HALF_BYTE;
  var v1173 = JAM.call(URShift, null, [a, 28], JAM.policy.p41) & 15;
  introspect(JAM.policy.p26) {
    var v294 = v1172[v1173]
  }
  return v293 + v294;
}
function v134(x0$$4, y0$$4, x1$$5, y1$$5, x2$$3, y2$$3, x3$$2, y3$$2) {
  var v295 = JAM.call(this.squareToQuadrilateral, this, [x0$$4, y0$$4, x1$$5, y1$$5, x2$$3, y2$$3, x3$$2, y3$$2], JAM.policy.p38);
  return JAM.call(v295.buildAdjoint, v295, [], JAM.policy.p40);
}
function v133(x0$$3, y0$$3, x1$$4, y1$$4, x2$$2, y2$$2, x3$$1, y3$$1) {
  dy2 = y3$$1 - y2$$2;
  dy3 = y0$$3 - y1$$4 + y2$$2 - y3$$1;
  var v1175 = dy2 == 0;
  if (v1175) {
    v1175 = dy3 == 0;
  }
  if (v1175) {
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
function v132(x0$$2, y0$$2, x1$$3, y1$$3, x2$$1, y2$$1, x3, y3, x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p) {
  var qToS = JAM.call(this.quadrilateralToSquare, this, [x0$$2, y0$$2, x1$$3, y1$$3, x2$$1, y2$$1, x3, y3], JAM.policy.p38);
  var sToQ = JAM.call(this.squareToQuadrilateral, this, [x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p], JAM.policy.p38);
  return JAM.call(sToQ.times, sToQ, [qToS], JAM.policy.p39);
}
function v131(versionBits) {
  var bestDifference = 4294967295;
  var bestVersion = 0;
  var i$$4 = 0;
  var v315 = i$$4 < Version.VERSION_DECODE_INFO.length;
  for (;v315;) {
    var v311 = Version.VERSION_DECODE_INFO;
    introspect(JAM.policy.p26) {
      var targetVersion = v311[i$$4]
    }
    if (targetVersion == versionBits) {
      return JAM.call(this.getVersionForNumber, this, [i$$4 + 7], JAM.policy.p39);
    }
    var bitsDifference = JAM.call(FormatInformation.numBitsDiffering, FormatInformation, [versionBits, targetVersion], JAM.policy.p38);
    if (bitsDifference < bestDifference) {
      bestVersion = i$$4 + 7;
      bestDifference = bitsDifference;
    }
    i$$4 = i$$4 + 1;
    v315 = i$$4 < Version.VERSION_DECODE_INFO.length;
  }
  if (bestDifference <= 3) {
    return JAM.call(this.getVersionForNumber, this, [bestVersion], JAM.policy.p39);
  }
  return null;
}
function v130(dimension$$3) {
  if (dimension$$3 % 4 != 1) {
    throw "Error getProvisionalVersionForDimension";
  }
  try {
    return JAM.call(Version.getVersionForNumber, Version, [dimension$$3 - 17 >> 2], JAM.policy.p39);
  } catch (iae) {
    throw "Error getVersionForNumber";
  }
  return;
}
function v129(versionNumber$$1) {
  var v1193 = versionNumber$$1 < 1;
  if (!v1193) {
    v1193 = versionNumber$$1 > 40;
  }
  if (v1193) {
    throw "ArgumentException";
  }
  var v320 = Version.VERSIONS;
  var v321 = versionNumber$$1 - 1;
  introspect(JAM.policy.p26) {
    return v320[v321];
  }
}
function v128(image$$4, dimension$$1, p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY) {
  var transform$$1 = JAM.call(PerspectiveTransform.quadrilateralToQuadrilateral, PerspectiveTransform, [p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY], JAM.policy.p38);
  return JAM.call(GridSampler.sampleGrid3, GridSampler, [image$$4, dimension$$1, transform$$1], JAM.policy.p38);
}
function v127(image$$3, dimension, transform) {
  var bits = JAM.new(BitMatrix, [dimension], JAM.policy.p39);
  var points$$1 = JAM.new(Array, [dimension << 1], JAM.policy.p39);
  var y$$31 = 0;
  var v339 = y$$31 < dimension;
  for (;v339;) {
    var max = points$$1.length;
    var iValue = y$$31 + .5;
    var x$$48 = 0;
    var v325 = x$$48 < max;
    for (;v325;) {
      var v323 = x$$48 >> 1;
      introspect(JAM.policy.p27) {
        points$$1[x$$48] = v323 + .5;
      }
      var v324 = x$$48 + 1;
      introspect(JAM.policy.p27) {
        points$$1[v324] = iValue;
      }
      x$$48 = x$$48 + 2;
      v325 = x$$48 < max;
    }
    JAM.call(transform.transformPoints1, transform, [points$$1], JAM.policy.p39);
    JAM.call(GridSampler.checkAndNudgePoints, GridSampler, [image$$3, points$$1], JAM.policy.p38);
    try {
      x$$48 = 0;
      var v338 = x$$48 < max;
      for (;v338;) {
        introspect(JAM.policy.p26) {
          var v1899 = points$$1[x$$48]
        }
        var v326 = JAM.call(Math.floor, Math, [v1899], JAM.policy.p39) * 4;
        var v2708 = x$$48 + 1;
        introspect(JAM.policy.p26) {
          var v2537 = points$$1[v2708]
        }
        var xpoint = v326 + JAM.call(Math.floor, Math, [v2537], JAM.policy.p39) * qrcode.width * 4;
        var v328 = image$$3;
        introspect(JAM.policy.p26) {
          var v1902 = points$$1[x$$48]
        }
        var v1196 = JAM.call(Math.floor, Math, [v1902], JAM.policy.p39);
        var v1903 = qrcode.width;
        var v2709 = x$$48 + 1;
        introspect(JAM.policy.p26) {
          var v2538 = points$$1[v2709]
        }
        var v329 = v1196 + v1903 * JAM.call(Math.floor, Math, [v2538], JAM.policy.p39);
        introspect(JAM.policy.p26) {
          var bit = v328[v329]
        }
        var v330 = qrcode.imagedata.data;
        var v1199;
        if (bit) {
          v1199 = 255;
        } else {
          v1199 = 0;
        }
        introspect(JAM.policy.p27) {
          v330[xpoint] = v1199;
        }
        var v331 = qrcode.imagedata.data;
        var v332 = xpoint + 1;
        var v1201;
        if (bit) {
          v1201 = 255;
        } else {
          v1201 = 0;
        }
        introspect(JAM.policy.p27) {
          v331[v332] = v1201;
        }
        var v333 = qrcode.imagedata.data;
        var v334 = xpoint + 2;
        introspect(JAM.policy.p27) {
          v333[v334] = 0;
        }
        var v335 = qrcode.imagedata.data;
        var v336 = xpoint + 3;
        introspect(JAM.policy.p27) {
          v335[v336] = 255;
        }
        if (bit) {
          JAM.call(bits.set_Renamed, bits, [x$$48 >> 1, y$$31], JAM.policy.p38);
        }
        x$$48 = x$$48 + 2;
        v338 = x$$48 < max;
      }
    } catch (aioobe) {
      throw "Error.checkAndNudgePoints";
    }
    y$$31 = y$$31 + 1;
    v339 = y$$31 < dimension;
  }
  return bits;
}
function v126(image$$2, points) {
  var width$$9 = qrcode.width;
  var height$$8 = qrcode.height;
  var nudged = true;
  var offset$$8 = 0;
  var v1204 = offset$$8 < points.Length;
  if (v1204) {
    v1204 = nudged;
  }
  var v349 = v1204;
  for (;v349;) {
    introspect(JAM.policy.p26) {
      var v340 = points[offset$$8]
    }
    var x$$47 = JAM.call(Math.floor, Math, [v340], JAM.policy.p39);
    var v1205 = offset$$8 + 1;
    introspect(JAM.policy.p26) {
      var v341 = points[v1205]
    }
    var y$$30 = JAM.call(Math.floor, Math, [v341], JAM.policy.p39);
    var v2539 = x$$47 < -1;
    if (!v2539) {
      v2539 = x$$47 > width$$9;
    }
    var v1906 = v2539;
    if (!v1906) {
      v1906 = y$$30 < -1;
    }
    var v1206 = v1906;
    if (!v1206) {
      v1206 = y$$30 > height$$8;
    }
    if (v1206) {
      throw "Error.checkAndNudgePoints ";
    }
    nudged = false;
    if (x$$47 == -1) {
      introspect(JAM.policy.p27) {
        points[offset$$8] = 0;
      }
      nudged = true;
    } else {
      if (x$$47 == width$$9) {
        introspect(JAM.policy.p27) {
          points[offset$$8] = width$$9 - 1;
        }
        nudged = true;
      }
    }
    if (y$$30 == -1) {
      var v345 = offset$$8 + 1;
      introspect(JAM.policy.p27) {
        points[v345] = 0;
      }
      nudged = true;
    } else {
      if (y$$30 == height$$8) {
        var v346 = offset$$8 + 1;
        introspect(JAM.policy.p27) {
          points[v346] = height$$8 - 1;
        }
        nudged = true;
      }
    }
    offset$$8 = offset$$8 + 2;
    var v1207 = offset$$8 < points.Length;
    if (v1207) {
      v1207 = nudged;
    }
    v349 = v1207;
  }
  nudged = true;
  offset$$8 = points.Length - 2;
  var v1208 = offset$$8 >= 0;
  if (v1208) {
    v1208 = nudged;
  }
  var v360 = v1208;
  for (;v360;) {
    introspect(JAM.policy.p26) {
      var v351 = points[offset$$8]
    }
    x$$47 = JAM.call(Math.floor, Math, [v351], JAM.policy.p39);
    var v1209 = offset$$8 + 1;
    introspect(JAM.policy.p26) {
      var v352 = points[v1209]
    }
    y$$30 = JAM.call(Math.floor, Math, [v352], JAM.policy.p39);
    var v2541 = x$$47 < -1;
    if (!v2541) {
      v2541 = x$$47 > width$$9;
    }
    var v1909 = v2541;
    if (!v1909) {
      v1909 = y$$30 < -1;
    }
    var v1210 = v1909;
    if (!v1210) {
      v1210 = y$$30 > height$$8;
    }
    if (v1210) {
      throw "Error.checkAndNudgePoints ";
    }
    nudged = false;
    if (x$$47 == -1) {
      introspect(JAM.policy.p27) {
        points[offset$$8] = 0;
      }
      nudged = true;
    } else {
      if (x$$47 == width$$9) {
        introspect(JAM.policy.p27) {
          points[offset$$8] = width$$9 - 1;
        }
        nudged = true;
      }
    }
    if (y$$30 == -1) {
      var v356 = offset$$8 + 1;
      introspect(JAM.policy.p27) {
        points[v356] = 0;
      }
      nudged = true;
    } else {
      if (y$$30 == height$$8) {
        var v357 = offset$$8 + 1;
        introspect(JAM.policy.p27) {
          points[v357] = height$$8 - 1;
        }
        nudged = true;
      }
    }
    offset$$8 = offset$$8 - 2;
    var v1211 = offset$$8 >= 0;
    if (v1211) {
      v1211 = nudged;
    }
    v360 = v1211;
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
    var v361 = i$$1 < this.ecBlocks.length;
    for (;v361;) {
      var v2543 = this.ecBlocks;
      introspect(JAM.policy.p26) {
        var v1912 = v2543[i$$1]
      }
      total = total + v1912.length;
      i$$1 = i$$1 + 1;
      v361 = i$$1 < this.ecBlocks.length;
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
    var v2860 = JAM.new(Array, [ecBlocks1, ecBlocks2], JAM.policy.p38);
    this.ecBlocks = v2860;
  } else {
    var v2861 = JAM.new(Array, [ecBlocks1], JAM.policy.p39);
    this.ecBlocks = v2861;
  }
  JAM.call(this.__defineGetter__, this, ["ECCodewordsPerBlock", v2], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["TotalECCodewords", v3], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["NumBlocks", v4], JAM.policy.p23);
  this.getECBlocks = v5;
  return;
}
function Version(versionNumber, alignmentPatternCenters, ecBlocks1$$1, ecBlocks2$$1, ecBlocks3, ecBlocks4) {
  function v11(ecLevel) {
    var v364 = this.ecBlocks;
    var v365 = ecLevel.ordinal_Renamed_Field;
    introspect(JAM.policy.p26) {
      return v364[v365];
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
    var v373 = x$$49 < max$$1;
    for (;v373;) {
      var v1215 = this.alignmentPatternCenters;
      introspect(JAM.policy.p26) {
        var v369 = v1215[x$$49]
      }
      var i$$3 = v369 - 2;
      var y$$32 = 0;
      var v372 = y$$32 < max$$1;
      for (;v372;) {
        var v1914 = x$$49 == 0;
        if (v1914) {
          var v2544 = y$$32 == 0;
          if (!v2544) {
            v2544 = y$$32 == max$$1 - 1;
          }
          v1914 = v2544;
        }
        var v1216 = v1914;
        if (!v1216) {
          var v1915 = x$$49 == max$$1 - 1;
          if (v1915) {
            v1915 = y$$32 == 0;
          }
          v1216 = v1915;
        }
        if (v1216) {
          y$$32 = y$$32 + 1;
          v372 = y$$32 < max$$1;
          continue;
        }
        var v1917 = this.alignmentPatternCenters;
        introspect(JAM.policy.p26) {
          var v1217 = v1917[y$$32]
        }
        JAM.call(bitMatrix.setRegion, bitMatrix, [v1217 - 2, i$$3, 5, 5], JAM.policy.p38);
        y$$32 = y$$32 + 1;
        v372 = y$$32 < max$$1;
      }
      x$$49 = x$$49 + 1;
      v373 = x$$49 < max$$1;
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
  var v2862 = JAM.new(Array, [ecBlocks1$$1, ecBlocks2$$1, ecBlocks3, ecBlocks4], JAM.policy.p38);
  this.ecBlocks = v2862;
  var total$$1 = 0;
  var ecCodewords = ecBlocks1$$1.ECCodewordsPerBlock;
  var ecbArray = ecBlocks1$$1.ecBlocks;
  var i$$2 = 0;
  var v380 = i$$2 < ecbArray.length;
  for (;v380;) {
    introspect(JAM.policy.p26) {
      var ecBlock = ecbArray[i$$2]
    }
    total$$1 = total$$1 + ecBlock.Count * (ecBlock.DataCodewords + ecCodewords);
    i$$2 = i$$2 + 1;
    v380 = i$$2 < ecbArray.length;
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
    var v443 = i$$6 < n$$1;
    for (;v443;) {
      introspect(JAM.policy.p26) {
        var x$$51 = xValues[i$$6]
      }
      introspect(JAM.policy.p26) {
        var y$$34 = yValues[i$$6]
      }
      var denominator$$2 = this.a13 * x$$51 + this.a23 * y$$34 + this.a33;
      var v441 = this.a11 * x$$51 + this.a21 * y$$34 + this.a31;
      introspect(JAM.policy.p27) {
        xValues[i$$6] = v441 / denominator$$2;
      }
      var v442 = this.a12 * x$$51 + this.a22 * y$$34 + this.a32;
      introspect(JAM.policy.p27) {
        yValues[i$$6] = v442 / denominator$$2;
      }
      i$$6 = i$$6 + 1;
      v443 = i$$6 < n$$1;
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
    var v448 = i$$5 < max$$2;
    for (;v448;) {
      introspect(JAM.policy.p26) {
        var x$$50 = points$$2[i$$5]
      }
      var v444 = i$$5 + 1;
      introspect(JAM.policy.p26) {
        var y$$33 = points$$2[v444]
      }
      var denominator$$1 = a13$$2 * x$$50 + a23$$2 * y$$33 + a33$$1;
      var v446 = a11$$1 * x$$50 + a21$$1 * y$$33 + a31$$1;
      introspect(JAM.policy.p27) {
        points$$2[i$$5] = v446 / denominator$$1;
      }
      var v447 = i$$5 + 1;
      var v1468 = a12$$1 * x$$50 + a22$$1 * y$$33 + a32$$1;
      introspect(JAM.policy.p27) {
        points$$2[v447] = v1468 / denominator$$1;
      }
      i$$5 = i$$5 + 2;
      v448 = i$$5 < max$$2;
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
    var v449 = JAM.new(FinderPatternFinder, [], JAM.policy.p40);
    var info$$1 = JAM.call(v449.findFinderPattern, v449, [this.image], JAM.policy.p39);
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
      var v460 = i$$7 <= 16;
      for (;v460;) {
        alignmentPattern$$1 = JAM.call(this.findAlignmentInRegion, this, [moduleSize$$1, estAlignmentX$$1, estAlignmentY$$1, i$$7], JAM.policy.p38);
        break;
      }
    }
    var transform$$4 = JAM.call(this.createTransform, this, [topLeft$$3, topRight$$3, bottomLeft$$3, alignmentPattern$$1, dimension$$7], JAM.policy.p38);
    var bits$$2 = JAM.call(this.sampleGrid, this, [this.image, transform$$4, dimension$$7], JAM.policy.p38);
    var points$$4;
    if (alignmentPattern$$1 == null) {
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
    if (alignmentPattern != null) {
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
    var v528;
    if (fromY < toY) {
      v528 = 1;
    } else {
      v528 = -1;
    }
    var ystep = v528;
    var v529;
    if (fromX < toX) {
      v529 = 1;
    } else {
      v529 = -1;
    }
    var xstep = v529;
    var state = 0;
    var x$$52 = fromX;
    var y$$35 = fromY;
    var v539 = x$$52 != toX;
    for (;v539;) {
      var v530;
      if (steep) {
        v530 = y$$35;
      } else {
        v530 = x$$52;
      }
      var realX = v530;
      var v531;
      if (steep) {
        v531 = x$$52;
      } else {
        v531 = y$$35;
      }
      var realY = v531;
      if (state == 1) {
        var v1513 = this.image;
        var v1514 = realX + realY * qrcode.width;
        introspect(JAM.policy.p26) {
          var v532 = v1513[v1514]
        }
        if (v532) {
          state = state + 1;
        }
      } else {
        var v2297 = this.image;
        var v2298 = realX + realY * qrcode.width;
        introspect(JAM.policy.p26) {
          var v1515 = v2297[v2298]
        }
        if (!v1515) {
          state = state + 1;
        }
      }
      if (state == 3) {
        var diffX = x$$52 - fromX;
        var diffY = y$$35 - fromY;
        return JAM.call(Math.sqrt, Math, [diffX * diffX + diffY * diffY], JAM.policy.p39);
      }
      error$$1 = error$$1 + dy$$4;
      if (error$$1 > 0) {
        if (y$$35 == toY) {
          break;
        }
        y$$35 = y$$35 + ystep;
        error$$1 = error$$1 - dx$$4;
      }
      x$$52 = x$$52 + xstep;
      v539 = x$$52 != toX;
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
    var v541 = this.errorCorrectionLevel == other$$5.errorCorrectionLevel;
    if (v541) {
      v541 = this.dataMask == other$$5.dataMask;
    }
    return v541;
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
  var v2863 = JAM.call(ErrorCorrectionLevel.forBits, ErrorCorrectionLevel, [formatInfo >> 3 & 3], JAM.policy.p39);
  this.errorCorrectionLevel = v2863;
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
    var v1526 = top$$1 < 0;
    if (!v1526) {
      v1526 = left$$1 < 0;
    }
    if (v1526) {
      throw "Left and top must be nonnegative";
    }
    var v1527 = height$$10 < 1;
    if (!v1527) {
      v1527 = width$$11 < 1;
    }
    if (v1527) {
      throw "Height and width must be at least 1";
    }
    var right$$1 = left$$1 + width$$11;
    var bottom = top$$1 + height$$10;
    var v1528 = bottom > this.height;
    if (!v1528) {
      v1528 = right$$1 > this.width;
    }
    if (v1528) {
      throw "The region must fit inside the matrix";
    }
    var y$$39 = top$$1;
    var v551 = y$$39 < bottom;
    for (;v551;) {
      var offset$$12 = y$$39 * this.rowSize;
      var x$$56 = left$$1;
      var v550 = x$$56 < right$$1;
      for (;v550;) {
        var v548 = this.bits;
        var v549 = offset$$12 + (x$$56 >> 5);
        introspect(JAM.policy.p26) {
          var v2305 = v548[v549]
        }
        var v2306 = 1 << (x$$56 & 31);
        introspect(JAM.policy.p27) {
          v548[v549] = v2305 | v2306;
        }
        x$$56 = x$$56 + 1;
        v550 = x$$56 < right$$1;
      }
      y$$39 = y$$39 + 1;
      v551 = y$$39 < bottom;
    }
    return;
  }
  function v40() {
    var max$$3 = this.bits.length;
    var i$$10 = 0;
    var v554 = i$$10 < max$$3;
    for (;v554;) {
      var v553 = this.bits;
      introspect(JAM.policy.p27) {
        v553[i$$10] = 0;
      }
      i$$10 = i$$10 + 1;
      v554 = i$$10 < max$$3;
    }
    return;
  }
  function v39(x$$55, y$$38) {
    var offset$$11 = y$$38 * this.rowSize + (x$$55 >> 5);
    var v557 = this.bits;
    introspect(JAM.policy.p26) {
      var v2307 = v557[offset$$11]
    }
    var v2308 = 1 << (x$$55 & 31);
    introspect(JAM.policy.p27) {
      v557[offset$$11] = v2307 ^ v2308;
    }
    return;
  }
  function v38(x$$54, y$$37) {
    var offset$$10 = y$$37 * this.rowSize + (x$$54 >> 5);
    var v560 = this.bits;
    introspect(JAM.policy.p26) {
      var v2309 = v560[offset$$10]
    }
    var v2310 = 1 << (x$$54 & 31);
    introspect(JAM.policy.p27) {
      v560[offset$$10] = v2309 | v2310;
    }
    return;
  }
  function v37(x$$53, y$$36) {
    var offset$$9 = y$$36 * this.rowSize + (x$$53 >> 5);
    var v2596 = this.bits;
    introspect(JAM.policy.p26) {
      var v2311 = v2596[offset$$9]
    }
    return(JAM.call(URShift, null, [v2311, x$$53 & 31], JAM.policy.p38) & 1) != 0;
  }
  function v36() {
    if (this.width != this.height) {
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
  var v1536 = width$$10 < 1;
  if (!v1536) {
    v1536 = height$$9 < 1;
  }
  if (v1536) {
    throw "Both dimensions must be greater than 0";
  }
  this.width = width$$10;
  this.height = height$$9;
  var rowSize = width$$10 >> 5;
  if ((width$$10 & 31) != 0) {
    rowSize = rowSize + 1;
  }
  this.rowSize = rowSize;
  var v2864 = JAM.new(Array, [rowSize * height$$9], JAM.policy.p39);
  this.bits = v2864;
  var i$$9 = 0;
  var v570 = i$$9 < this.bits.length;
  for (;v570;) {
    var v569 = this.bits;
    introspect(JAM.policy.p27) {
      v569[i$$9] = 0;
    }
    i$$9 = i$$9 + 1;
    v570 = i$$9 < this.bits.length;
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
    var v583 = j$$4 > 0;
    for (;v583;) {
      if (j$$4 == 6) {
        j$$4 = j$$4 - 1;
      }
      var count$$4 = 0;
      var v582 = count$$4 < dimension$$11;
      for (;v582;) {
        var v576;
        if (readingUp) {
          v576 = dimension$$11 - 1 - count$$4;
        } else {
          v576 = count$$4;
        }
        var i$$15 = v576;
        var col = 0;
        var v581 = col < 2;
        for (;v581;) {
          if (!JAM.call(functionPattern.get_Renamed, functionPattern, [j$$4 - col, i$$15], JAM.policy.p38)) {
            bitsRead = bitsRead + 1;
            currentByte = currentByte << 1;
            var v1542 = this.bitMatrix;
            if (JAM.call(v1542.get_Renamed, v1542, [j$$4 - col, i$$15], JAM.policy.p38)) {
              currentByte = currentByte | 1;
            }
            if (bitsRead == 8) {
              var v578 = resultOffset;
              resultOffset = resultOffset + 1;
              introspect(JAM.policy.p27) {
                result$$2[v578] = currentByte;
              }
              bitsRead = 0;
              currentByte = 0;
            }
          }
          col = col + 1;
          v581 = col < 2;
        }
        count$$4 = count$$4 + 1;
        v582 = count$$4 < dimension$$11;
      }
      readingUp = readingUp ^ true;
      j$$4 = j$$4 - 2;
      v583 = j$$4 > 0;
    }
    if (resultOffset != version$$6.TotalCodewords) {
      throw "Error readCodewords";
    }
    return result$$2;
  }
  function v46() {
    if (this.parsedVersion != null) {
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
    var v590 = j$$3 >= 0;
    for (;v590;) {
      var i$$14 = dimension$$10 - 9;
      var v589 = i$$14 >= ijMin;
      for (;v589;) {
        versionBits$$2 = JAM.call(this.copyBit, this, [i$$14, j$$3, versionBits$$2], JAM.policy.p38);
        i$$14 = i$$14 - 1;
        v589 = i$$14 >= ijMin;
      }
      j$$3 = j$$3 - 1;
      v590 = j$$3 >= 0;
    }
    var v2865 = JAM.call(Version.decodeVersionInformation, Version, [versionBits$$2], JAM.policy.p39);
    this.parsedVersion = v2865;
    var v1546 = this.parsedVersion != null;
    if (v1546) {
      v1546 = this.parsedVersion.DimensionForVersion == dimension$$10;
    }
    if (v1546) {
      return this.parsedVersion;
    }
    versionBits$$2 = 0;
    i$$14 = 5;
    var v593 = i$$14 >= 0;
    for (;v593;) {
      j$$3 = dimension$$10 - 9;
      var v592 = j$$3 >= ijMin;
      for (;v592;) {
        versionBits$$2 = JAM.call(this.copyBit, this, [i$$14, j$$3, versionBits$$2], JAM.policy.p38);
        j$$3 = j$$3 - 1;
        v592 = j$$3 >= ijMin;
      }
      i$$14 = i$$14 - 1;
      v593 = i$$14 >= 0;
    }
    var v2866 = JAM.call(Version.decodeVersionInformation, Version, [versionBits$$2], JAM.policy.p39);
    this.parsedVersion = v2866;
    var v1547 = this.parsedVersion != null;
    if (v1547) {
      v1547 = this.parsedVersion.DimensionForVersion == dimension$$10;
    }
    if (v1547) {
      return this.parsedVersion;
    }
    throw "Error readVersion";
  }
  function v45() {
    if (this.parsedFormatInfo != null) {
      return this.parsedFormatInfo;
    }
    var formatInfoBits = 0;
    var i$$13 = 0;
    var v596 = i$$13 < 6;
    for (;v596;) {
      formatInfoBits = JAM.call(this.copyBit, this, [i$$13, 8, formatInfoBits], JAM.policy.p41);
      i$$13 = i$$13 + 1;
      v596 = i$$13 < 6;
    }
    formatInfoBits = JAM.call(this.copyBit, this, [7, 8, formatInfoBits], JAM.policy.p22);
    formatInfoBits = JAM.call(this.copyBit, this, [8, 8, formatInfoBits], JAM.policy.p22);
    formatInfoBits = JAM.call(this.copyBit, this, [8, 7, formatInfoBits], JAM.policy.p22);
    var j$$2 = 5;
    var v597 = j$$2 >= 0;
    for (;v597;) {
      formatInfoBits = JAM.call(this.copyBit, this, [8, j$$2, formatInfoBits], JAM.policy.p22);
      j$$2 = j$$2 - 1;
      v597 = j$$2 >= 0;
    }
    var v2867 = JAM.call(FormatInformation.decodeFormatInformation, FormatInformation, [formatInfoBits], JAM.policy.p39);
    this.parsedFormatInfo = v2867;
    if (this.parsedFormatInfo != null) {
      return this.parsedFormatInfo;
    }
    var dimension$$9 = this.bitMatrix.Dimension;
    formatInfoBits = 0;
    var iMin = dimension$$9 - 8;
    i$$13 = dimension$$9 - 1;
    var v600 = i$$13 >= iMin;
    for (;v600;) {
      formatInfoBits = JAM.call(this.copyBit, this, [i$$13, 8, formatInfoBits], JAM.policy.p41);
      i$$13 = i$$13 - 1;
      v600 = i$$13 >= iMin;
    }
    j$$2 = dimension$$9 - 7;
    var v601 = j$$2 < dimension$$9;
    for (;v601;) {
      formatInfoBits = JAM.call(this.copyBit, this, [8, j$$2, formatInfoBits], JAM.policy.p22);
      j$$2 = j$$2 + 1;
      v601 = j$$2 < dimension$$9;
    }
    var v2868 = JAM.call(FormatInformation.decodeFormatInformation, FormatInformation, [formatInfoBits], JAM.policy.p39);
    this.parsedFormatInfo = v2868;
    if (this.parsedFormatInfo != null) {
      return this.parsedFormatInfo;
    }
    throw "Error readFormatInformation";
  }
  function v44(i$$12, j$$1, versionBits$$1) {
    var v603;
    var v2321 = this.bitMatrix;
    if (JAM.call(v2321.get_Renamed, v2321, [i$$12, j$$1], JAM.policy.p38)) {
      v603 = versionBits$$1 << 1 | 1;
    } else {
      v603 = versionBits$$1 << 1;
    }
    return v603;
  }
  var dimension$$8 = bitMatrix$$1.Dimension;
  var v1553 = dimension$$8 < 21;
  if (!v1553) {
    v1553 = (dimension$$8 & 3) != 1;
  }
  if (v1553) {
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
    return(i$$17 + j$$6 & 1) == 0;
  }
  function v48(bits$$5, dimension$$12) {
    var i$$16 = 0;
    var v608 = i$$16 < dimension$$12;
    for (;v608;) {
      var j$$5 = 0;
      var v607 = j$$5 < dimension$$12;
      for (;v607;) {
        if (JAM.call(this.isMasked, this, [i$$16, j$$5], JAM.policy.p38)) {
          JAM.call(bits$$5.flip, bits$$5, [j$$5, i$$16], JAM.policy.p38);
        }
        j$$5 = j$$5 + 1;
        v607 = j$$5 < dimension$$12;
      }
      i$$16 = i$$16 + 1;
      v608 = i$$16 < dimension$$12;
    }
    return;
  }
  this.unmaskBitMatrix = v48;
  this.isMasked = v49;
  return;
}
function DataMask001() {
  function v51(i$$19, j$$8) {
    return(i$$19 & 1) == 0;
  }
  function v50(bits$$6, dimension$$13) {
    var i$$18 = 0;
    var v612 = i$$18 < dimension$$13;
    for (;v612;) {
      var j$$7 = 0;
      var v611 = j$$7 < dimension$$13;
      for (;v611;) {
        if (JAM.call(this.isMasked, this, [i$$18, j$$7], JAM.policy.p38)) {
          JAM.call(bits$$6.flip, bits$$6, [j$$7, i$$18], JAM.policy.p38);
        }
        j$$7 = j$$7 + 1;
        v611 = j$$7 < dimension$$13;
      }
      i$$18 = i$$18 + 1;
      v612 = i$$18 < dimension$$13;
    }
    return;
  }
  this.unmaskBitMatrix = v50;
  this.isMasked = v51;
  return;
}
function DataMask010() {
  function v53(i$$21, j$$10) {
    return j$$10 % 3 == 0;
  }
  function v52(bits$$7, dimension$$14) {
    var i$$20 = 0;
    var v616 = i$$20 < dimension$$14;
    for (;v616;) {
      var j$$9 = 0;
      var v615 = j$$9 < dimension$$14;
      for (;v615;) {
        if (JAM.call(this.isMasked, this, [i$$20, j$$9], JAM.policy.p38)) {
          JAM.call(bits$$7.flip, bits$$7, [j$$9, i$$20], JAM.policy.p38);
        }
        j$$9 = j$$9 + 1;
        v615 = j$$9 < dimension$$14;
      }
      i$$20 = i$$20 + 1;
      v616 = i$$20 < dimension$$14;
    }
    return;
  }
  this.unmaskBitMatrix = v52;
  this.isMasked = v53;
  return;
}
function DataMask011() {
  function v55(i$$23, j$$12) {
    return(i$$23 + j$$12) % 3 == 0;
  }
  function v54(bits$$8, dimension$$15) {
    var i$$22 = 0;
    var v620 = i$$22 < dimension$$15;
    for (;v620;) {
      var j$$11 = 0;
      var v619 = j$$11 < dimension$$15;
      for (;v619;) {
        if (JAM.call(this.isMasked, this, [i$$22, j$$11], JAM.policy.p38)) {
          JAM.call(bits$$8.flip, bits$$8, [j$$11, i$$22], JAM.policy.p38);
        }
        j$$11 = j$$11 + 1;
        v619 = j$$11 < dimension$$15;
      }
      i$$22 = i$$22 + 1;
      v620 = i$$22 < dimension$$15;
    }
    return;
  }
  this.unmaskBitMatrix = v54;
  this.isMasked = v55;
  return;
}
function DataMask100() {
  function v57(i$$25, j$$14) {
    return(JAM.call(URShift, null, [i$$25, 1], JAM.policy.p41) + j$$14 / 3 & 1) == 0;
  }
  function v56(bits$$9, dimension$$16) {
    var i$$24 = 0;
    var v624 = i$$24 < dimension$$16;
    for (;v624;) {
      var j$$13 = 0;
      var v623 = j$$13 < dimension$$16;
      for (;v623;) {
        if (JAM.call(this.isMasked, this, [i$$24, j$$13], JAM.policy.p38)) {
          JAM.call(bits$$9.flip, bits$$9, [j$$13, i$$24], JAM.policy.p38);
        }
        j$$13 = j$$13 + 1;
        v623 = j$$13 < dimension$$16;
      }
      i$$24 = i$$24 + 1;
      v624 = i$$24 < dimension$$16;
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
    return(temp$$1 & 1) + temp$$1 % 3 == 0;
  }
  function v58(bits$$10, dimension$$17) {
    var i$$26 = 0;
    var v628 = i$$26 < dimension$$17;
    for (;v628;) {
      var j$$15 = 0;
      var v627 = j$$15 < dimension$$17;
      for (;v627;) {
        if (JAM.call(this.isMasked, this, [i$$26, j$$15], JAM.policy.p38)) {
          JAM.call(bits$$10.flip, bits$$10, [j$$15, i$$26], JAM.policy.p38);
        }
        j$$15 = j$$15 + 1;
        v627 = j$$15 < dimension$$17;
      }
      i$$26 = i$$26 + 1;
      v628 = i$$26 < dimension$$17;
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
    return((temp$$2 & 1) + temp$$2 % 3 & 1) == 0;
  }
  function v60(bits$$11, dimension$$18) {
    var i$$28 = 0;
    var v632 = i$$28 < dimension$$18;
    for (;v632;) {
      var j$$17 = 0;
      var v631 = j$$17 < dimension$$18;
      for (;v631;) {
        if (JAM.call(this.isMasked, this, [i$$28, j$$17], JAM.policy.p38)) {
          JAM.call(bits$$11.flip, bits$$11, [j$$17, i$$28], JAM.policy.p38);
        }
        j$$17 = j$$17 + 1;
        v631 = j$$17 < dimension$$18;
      }
      i$$28 = i$$28 + 1;
      v632 = i$$28 < dimension$$18;
    }
    return;
  }
  this.unmaskBitMatrix = v60;
  this.isMasked = v61;
  return;
}
function DataMask111() {
  function v63(i$$31, j$$20) {
    return((i$$31 + j$$20 & 1) + i$$31 * j$$20 % 3 & 1) == 0;
  }
  function v62(bits$$12, dimension$$19) {
    var i$$30 = 0;
    var v636 = i$$30 < dimension$$19;
    for (;v636;) {
      var j$$19 = 0;
      var v635 = j$$19 < dimension$$19;
      for (;v635;) {
        if (JAM.call(this.isMasked, this, [i$$30, j$$19], JAM.policy.p38)) {
          JAM.call(bits$$12.flip, bits$$12, [j$$19, i$$30], JAM.policy.p38);
        }
        j$$19 = j$$19 + 1;
        v635 = j$$19 < dimension$$19;
      }
      i$$30 = i$$30 + 1;
      v636 = i$$30 < dimension$$19;
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
    var v647 = i$$34 < s$$3;
    for (;v647;) {
      var v637 = this.field;
      introspect(JAM.policy.p26) {
        var v638 = errorLocations$$1[i$$34]
      }
      var xiInverse = JAM.call(v637.inverse, v637, [v638], JAM.policy.p39);
      var denominator$$3 = 1;
      var j$$21 = 0;
      var v642 = j$$21 < s$$3;
      for (;v642;) {
        if (i$$34 != j$$21) {
          var v639 = this.field;
          var v2330 = this.field;
          introspect(JAM.policy.p26) {
            var v2331 = errorLocations$$1[j$$21]
          }
          denominator$$3 = JAM.call(v639.multiply, v639, [denominator$$3, JAM.call(GF256.addOrSubtract, GF256, [1, JAM.call(v2330.multiply, v2330, [v2331, xiInverse], JAM.policy.p38)], JAM.policy.p22)], JAM.policy.p38);
        }
        j$$21 = j$$21 + 1;
        v642 = j$$21 < s$$3;
      }
      var v643 = result$$4;
      var v644 = i$$34;
      var v1562 = this.field;
      var v1563 = JAM.call(errorEvaluator.evaluateAt, errorEvaluator, [xiInverse], JAM.policy.p39);
      var v2332 = this.field;
      var v2869 = JAM.call(v1562.multiply, v1562, [v1563, JAM.call(v2332.inverse, v2332, [denominator$$3], JAM.policy.p39)], JAM.policy.p38);
      introspect(JAM.policy.p27) {
        v643[v644] = v2869;
      }
      if (dataMatrix$$1) {
        var v645 = result$$4;
        var v646 = i$$34;
        var v1565 = this.field;
        introspect(JAM.policy.p26) {
          var v1566 = result$$4[i$$34]
        }
        var v2870 = JAM.call(v1565.multiply, v1565, [v1566, xiInverse], JAM.policy.p38);
        introspect(JAM.policy.p27) {
          v645[v646] = v2870;
        }
      }
      i$$34 = i$$34 + 1;
      v647 = i$$34 < s$$3;
    }
    return result$$4;
  }
  function v66(errorLocator) {
    var numErrors = errorLocator.Degree;
    if (numErrors == 1) {
      return JAM.new(Array, [JAM.call(errorLocator.getCoefficient, errorLocator, [1], JAM.policy.p25)], JAM.policy.p39);
    }
    var result$$3 = JAM.new(Array, [numErrors], JAM.policy.p39);
    var e$$4 = 0;
    var i$$33 = 1;
    var v1567 = i$$33 < 256;
    if (v1567) {
      v1567 = e$$4 < numErrors;
    }
    var v653 = v1567;
    for (;v653;) {
      if (JAM.call(errorLocator.evaluateAt, errorLocator, [i$$33], JAM.policy.p39) == 0) {
        var v650 = result$$3;
        var v651 = e$$4;
        var v1569 = this.field;
        var v2871 = JAM.call(v1569.inverse, v1569, [i$$33], JAM.policy.p39);
        introspect(JAM.policy.p27) {
          v650[v651] = v2871;
        }
        e$$4 = e$$4 + 1;
      }
      i$$33 = i$$33 + 1;
      var v1570 = i$$33 < 256;
      if (v1570) {
        v1570 = e$$4 < numErrors;
      }
      v653 = v1570;
    }
    if (e$$4 != numErrors) {
      throw "Error locator degree does not match number of roots";
    }
    return result$$3;
  }
  function v65(a$$1, b$$2, R) {
    if (a$$1.Degree < b$$2.Degree) {
      var temp$$3 = a$$1;
      a$$1 = b$$2;
      b$$2 = temp$$3;
    }
    var rLast = a$$1;
    var r$$1 = b$$2;
    var sLast = this.field.One;
    var s$$2 = this.field.Zero;
    var tLast = this.field.Zero;
    var t = this.field.One;
    var v673 = r$$1.Degree >= JAM.call(Math.floor, Math, [R / 2], JAM.policy.p39);
    for (;v673;) {
      var rLastLast = rLast;
      var sLastLast = sLast;
      var tLastLast = tLast;
      rLast = r$$1;
      sLast = s$$2;
      tLast = t;
      if (rLast.Zero) {
        throw "r_{i-1} was zero";
      }
      r$$1 = rLastLast;
      var q = this.field.Zero;
      var denominatorLeadingTerm = JAM.call(rLast.getCoefficient, rLast, [rLast.Degree], JAM.policy.p39);
      var v663 = this.field;
      var dltInverse = JAM.call(v663.inverse, v663, [denominatorLeadingTerm], JAM.policy.p39);
      var v1575 = r$$1.Degree >= rLast.Degree;
      if (v1575) {
        v1575 = !r$$1.Zero;
      }
      var v670 = v1575;
      for (;v670;) {
        var degreeDiff = r$$1.Degree - rLast.Degree;
        var v666 = this.field;
        var scale$$1 = JAM.call(v666.multiply, v666, [JAM.call(r$$1.getCoefficient, r$$1, [r$$1.Degree], JAM.policy.p39), dltInverse], JAM.policy.p38);
        var v1577 = this.field;
        q = JAM.call(q.addOrSubtract, q, [JAM.call(v1577.buildMonomial, v1577, [degreeDiff, scale$$1], JAM.policy.p38)], JAM.policy.p39);
        r$$1 = JAM.call(r$$1.addOrSubtract, r$$1, [JAM.call(rLast.multiplyByMonomial, rLast, [degreeDiff, scale$$1], JAM.policy.p38)], JAM.policy.p39);
        var v1578 = r$$1.Degree >= rLast.Degree;
        if (v1578) {
          v1578 = !r$$1.Zero;
        }
        v670 = v1578;
      }
      var v671 = JAM.call(q.multiply1, q, [sLast], JAM.policy.p39);
      s$$2 = JAM.call(v671.addOrSubtract, v671, [sLastLast], JAM.policy.p39);
      var v672 = JAM.call(q.multiply1, q, [tLast], JAM.policy.p39);
      t = JAM.call(v672.addOrSubtract, v672, [tLastLast], JAM.policy.p39);
      v673 = r$$1.Degree >= JAM.call(Math.floor, Math, [R / 2], JAM.policy.p39);
    }
    var sigmaTildeAtZero = JAM.call(t.getCoefficient, t, [0], JAM.policy.p25);
    if (sigmaTildeAtZero == 0) {
      throw "ReedSolomonException sigmaTilde(0) was zero";
    }
    var v675 = this.field;
    var inverse = JAM.call(v675.inverse, v675, [sigmaTildeAtZero], JAM.policy.p39);
    var sigma$$1 = JAM.call(t.multiply2, t, [inverse], JAM.policy.p39);
    var omega$$1 = JAM.call(r$$1.multiply2, r$$1, [inverse], JAM.policy.p39);
    return JAM.new(Array, [sigma$$1, omega$$1], JAM.policy.p38);
  }
  function v64(received, twoS) {
    var poly = JAM.new(GF256Poly, [this.field, received], JAM.policy.p38);
    var syndromeCoefficients = JAM.new(Array, [twoS], JAM.policy.p39);
    var i$$32 = 0;
    var v677 = i$$32 < syndromeCoefficients.length;
    for (;v677;) {
      introspect(JAM.policy.p27) {
        syndromeCoefficients[i$$32] = 0;
      }
      i$$32 = i$$32 + 1;
      v677 = i$$32 < syndromeCoefficients.length;
    }
    var dataMatrix = false;
    var noError = true;
    i$$32 = 0;
    var v681 = i$$32 < twoS;
    for (;v681;) {
      var v1583 = this.field;
      var v2341;
      if (dataMatrix) {
        v2341 = i$$32 + 1;
      } else {
        v2341 = i$$32;
      }
      var eval$$1 = JAM.call(poly.evaluateAt, poly, [JAM.call(v1583.exp, v1583, [v2341], JAM.policy.p39)], JAM.policy.p39);
      var v679 = syndromeCoefficients.length - 1 - i$$32;
      introspect(JAM.policy.p27) {
        syndromeCoefficients[v679] = eval$$1;
      }
      if (eval$$1 != 0) {
        noError = false;
      }
      i$$32 = i$$32 + 1;
      v681 = i$$32 < twoS;
    }
    if (noError) {
      return;
    }
    var syndrome = JAM.new(GF256Poly, [this.field, syndromeCoefficients], JAM.policy.p38);
    var v1586 = this.field;
    var sigmaOmega = JAM.call(this.runEuclideanAlgorithm, this, [JAM.call(v1586.buildMonomial, v1586, [twoS, 1], JAM.policy.p41), syndrome, twoS], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      var sigma = sigmaOmega[0]
    }
    introspect(JAM.policy.p26) {
      var omega = sigmaOmega[1]
    }
    var errorLocations = JAM.call(this.findErrorLocations, this, [sigma], JAM.policy.p39);
    var errorMagnitudes = JAM.call(this.findErrorMagnitudes, this, [omega, errorLocations, dataMatrix], JAM.policy.p38);
    i$$32 = 0;
    var v689 = i$$32 < errorLocations.length;
    for (;v689;) {
      var v684 = received.length - 1;
      var v1589 = this.field;
      introspect(JAM.policy.p26) {
        var v1590 = errorLocations[i$$32]
      }
      var position = v684 - JAM.call(v1589.log, v1589, [v1590], JAM.policy.p39);
      if (position < 0) {
        throw "ReedSolomonException Bad error location";
      }
      var v687 = received;
      var v688 = position;
      introspect(JAM.policy.p26) {
        var v1591 = received[position]
      }
      introspect(JAM.policy.p26) {
        var v1592 = errorMagnitudes[i$$32]
      }
      var v2872 = JAM.call(GF256.addOrSubtract, GF256, [v1591, v1592], JAM.policy.p38);
      introspect(JAM.policy.p27) {
        v687[v688] = v2872;
      }
      i$$32 = i$$32 + 1;
      v689 = i$$32 < errorLocations.length;
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
    if (this.field != other$$8.field) {
      throw "GF256Polys do not have same GF256 field";
    }
    if (other$$8.Zero) {
      throw "Divide by 0";
    }
    var quotient = this.field.Zero;
    var remainder = this;
    var denominatorLeadingTerm$$1 = JAM.call(other$$8.getCoefficient, other$$8, [other$$8.Degree], JAM.policy.p39);
    var v694 = this.field;
    var inverseDenominatorLeadingTerm = JAM.call(v694.inverse, v694, [denominatorLeadingTerm$$1], JAM.policy.p39);
    var v1596 = remainder.Degree >= other$$8.Degree;
    if (v1596) {
      v1596 = !remainder.Zero;
    }
    var v700 = v1596;
    for (;v700;) {
      var degreeDifference = remainder.Degree - other$$8.Degree;
      var v697 = this.field;
      var scale$$2 = JAM.call(v697.multiply, v697, [JAM.call(remainder.getCoefficient, remainder, [remainder.Degree], JAM.policy.p39), inverseDenominatorLeadingTerm], JAM.policy.p38);
      var term = JAM.call(other$$8.multiplyByMonomial, other$$8, [degreeDifference, scale$$2], JAM.policy.p38);
      var v699 = this.field;
      var iterationQuotient = JAM.call(v699.buildMonomial, v699, [degreeDifference, scale$$2], JAM.policy.p38);
      quotient = JAM.call(quotient.addOrSubtract, quotient, [iterationQuotient], JAM.policy.p39);
      remainder = JAM.call(remainder.addOrSubtract, remainder, [term], JAM.policy.p39);
      var v1598 = remainder.Degree >= other$$8.Degree;
      if (v1598) {
        v1598 = !remainder.Zero;
      }
      v700 = v1598;
    }
    return JAM.new(Array, [quotient, remainder], JAM.policy.p38);
  }
  function v76(degree$$1, coefficient) {
    if (degree$$1 < 0) {
      throw "System.ArgumentException";
    }
    if (coefficient == 0) {
      return this.field.Zero;
    }
    var size$$6 = this.coefficients.length;
    var product$$2 = JAM.new(Array, [size$$6 + degree$$1], JAM.policy.p39);
    var i$$40 = 0;
    var v706 = i$$40 < product$$2.length;
    for (;v706;) {
      introspect(JAM.policy.p27) {
        product$$2[i$$40] = 0;
      }
      i$$40 = i$$40 + 1;
      v706 = i$$40 < product$$2.length;
    }
    i$$40 = 0;
    var v709 = i$$40 < size$$6;
    for (;v709;) {
      var v707 = product$$2;
      var v708 = i$$40;
      var v1601 = this.field;
      var v2349 = this.coefficients;
      introspect(JAM.policy.p26) {
        var v1602 = v2349[i$$40]
      }
      var v2873 = JAM.call(v1601.multiply, v1601, [v1602, coefficient], JAM.policy.p38);
      introspect(JAM.policy.p27) {
        v707[v708] = v2873;
      }
      i$$40 = i$$40 + 1;
      v709 = i$$40 < size$$6;
    }
    return JAM.new(GF256Poly, [this.field, product$$2], JAM.policy.p38);
  }
  function v75(scalar) {
    if (scalar == 0) {
      return this.field.Zero;
    }
    if (scalar == 1) {
      return this;
    }
    var size$$5 = this.coefficients.length;
    var product$$1 = JAM.new(Array, [size$$5], JAM.policy.p39);
    var i$$39 = 0;
    var v717 = i$$39 < size$$5;
    for (;v717;) {
      var v715 = product$$1;
      var v716 = i$$39;
      var v1603 = this.field;
      var v2350 = this.coefficients;
      introspect(JAM.policy.p26) {
        var v1604 = v2350[i$$39]
      }
      var v2874 = JAM.call(v1603.multiply, v1603, [v1604, scalar], JAM.policy.p38);
      introspect(JAM.policy.p27) {
        v715[v716] = v2874;
      }
      i$$39 = i$$39 + 1;
      v717 = i$$39 < size$$5;
    }
    return JAM.new(GF256Poly, [this.field, product$$1], JAM.policy.p38);
  }
  function v74(other$$7) {
    if (this.field != other$$7.field) {
      throw "GF256Polys do not have same GF256 field";
    }
    var v1607 = this.Zero;
    if (!v1607) {
      v1607 = other$$7.Zero;
    }
    if (v1607) {
      return this.field.Zero;
    }
    var aCoefficients = this.coefficients;
    var aLength = aCoefficients.length;
    var bCoefficients = other$$7.coefficients;
    var bLength = bCoefficients.length;
    var product = JAM.new(Array, [aLength + bLength - 1], JAM.policy.p39);
    var i$$38 = 0;
    var v726 = i$$38 < aLength;
    for (;v726;) {
      introspect(JAM.policy.p26) {
        var aCoeff = aCoefficients[i$$38]
      }
      var j$$22 = 0;
      var v725 = j$$22 < bLength;
      for (;v725;) {
        var v723 = product;
        var v724 = i$$38 + j$$22;
        var v2352 = i$$38 + j$$22;
        introspect(JAM.policy.p26) {
          var v1609 = product[v2352]
        }
        var v2353 = this.field;
        introspect(JAM.policy.p26) {
          var v2354 = bCoefficients[j$$22]
        }
        var v2875 = JAM.call(GF256.addOrSubtract, GF256, [v1609, JAM.call(v2353.multiply, v2353, [aCoeff, v2354], JAM.policy.p38)], JAM.policy.p38);
        introspect(JAM.policy.p27) {
          v723[v724] = v2875;
        }
        j$$22 = j$$22 + 1;
        v725 = j$$22 < bLength;
      }
      i$$38 = i$$38 + 1;
      v726 = i$$38 < aLength;
    }
    return JAM.new(GF256Poly, [this.field, product], JAM.policy.p38);
  }
  function v73(other$$6) {
    if (this.field != other$$6.field) {
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
    var v735 = ci$$1 < lengthDiff;
    for (;v735;) {
      introspect(JAM.policy.p27) {
        sumDiff[ci$$1] = largerCoefficients[ci$$1];
      }
      ci$$1 = ci$$1 + 1;
      v735 = ci$$1 < lengthDiff;
    }
    var i$$37 = lengthDiff;
    var v738 = i$$37 < largerCoefficients.length;
    for (;v738;) {
      var v736 = sumDiff;
      var v737 = i$$37;
      var v2355 = i$$37 - lengthDiff;
      introspect(JAM.policy.p26) {
        var v1616 = smallerCoefficients[v2355]
      }
      introspect(JAM.policy.p26) {
        var v1617 = largerCoefficients[i$$37]
      }
      var v2876 = JAM.call(GF256.addOrSubtract, GF256, [v1616, v1617], JAM.policy.p38);
      introspect(JAM.policy.p27) {
        v736[v737] = v2876;
      }
      i$$37 = i$$37 + 1;
      v738 = i$$37 < largerCoefficients.length;
    }
    return JAM.new(GF256Poly, [field$$1, sumDiff], JAM.policy.p38);
  }
  function v72(a$$2) {
    if (a$$2 == 0) {
      return JAM.call(this.getCoefficient, this, [0], JAM.policy.p25);
    }
    var size$$4 = this.coefficients.length;
    if (a$$2 == 1) {
      var result$$5 = 0;
      var i$$36 = 0;
      var v742 = i$$36 < size$$4;
      for (;v742;) {
        var v1619 = this.coefficients;
        introspect(JAM.policy.p26) {
          var v741 = v1619[i$$36]
        }
        result$$5 = JAM.call(GF256.addOrSubtract, GF256, [result$$5, v741], JAM.policy.p38);
        i$$36 = i$$36 + 1;
        v742 = i$$36 < size$$4;
      }
      return result$$5;
    }
    var v744 = this.coefficients;
    introspect(JAM.policy.p26) {
      var result2 = v744[0]
    }
    i$$36 = 1;
    var v747 = i$$36 < size$$4;
    for (;v747;) {
      var v1620 = this.field;
      var v745 = JAM.call(v1620.multiply, v1620, [a$$2, result2], JAM.policy.p38);
      var v1621 = this.coefficients;
      introspect(JAM.policy.p26) {
        var v746 = v1621[i$$36]
      }
      result2 = JAM.call(GF256.addOrSubtract, GF256, [v745, v746], JAM.policy.p38);
      i$$36 = i$$36 + 1;
      v747 = i$$36 < size$$4;
    }
    return result2;
  }
  function v71(degree) {
    var v748 = this.coefficients;
    var v749 = this.coefficients.length - 1 - degree;
    introspect(JAM.policy.p26) {
      return v748[v749];
    }
  }
  function v70() {
    return this.coefficients;
  }
  function v69() {
    return this.coefficients.length - 1;
  }
  function v68() {
    var v1624 = this.coefficients;
    introspect(JAM.policy.p26) {
      var v751 = v1624[0]
    }
    return v751 == 0;
  }
  var v1625 = coefficients == null;
  if (!v1625) {
    v1625 = coefficients.length == 0;
  }
  if (v1625) {
    throw "System.ArgumentException";
  }
  this.field = field$$1;
  var coefficientsLength = coefficients.length;
  var v1626 = coefficientsLength > 1;
  if (v1626) {
    introspect(JAM.policy.p26) {
      var v2359 = coefficients[0]
    }
    v1626 = v2359 == 0;
  }
  if (v1626) {
    var firstNonZero = 1;
    var v1627 = firstNonZero < coefficientsLength;
    if (v1627) {
      introspect(JAM.policy.p26) {
        var v2360 = coefficients[firstNonZero]
      }
      v1627 = v2360 == 0;
    }
    var v753 = v1627;
    for (;v753;) {
      firstNonZero = firstNonZero + 1;
      var v1628 = firstNonZero < coefficientsLength;
      if (v1628) {
        introspect(JAM.policy.p26) {
          var v2361 = coefficients[firstNonZero]
        }
        v1628 = v2361 == 0;
      }
      v753 = v1628;
    }
    if (firstNonZero == coefficientsLength) {
      this.coefficients = field$$1.Zero.coefficients;
    } else {
      var v2877 = JAM.new(Array, [coefficientsLength - firstNonZero], JAM.policy.p39);
      this.coefficients = v2877;
      var i$$35 = 0;
      var v757 = i$$35 < this.coefficients.length;
      for (;v757;) {
        var v756 = this.coefficients;
        introspect(JAM.policy.p27) {
          v756[i$$35] = 0;
        }
        i$$35 = i$$35 + 1;
        v757 = i$$35 < this.coefficients.length;
      }
      var ci = 0;
      var v759 = ci < this.coefficients.length;
      for (;v759;) {
        var v758 = this.coefficients;
        var v1632 = firstNonZero + ci;
        introspect(JAM.policy.p27) {
          v758[ci] = coefficients[v1632];
        }
        ci = ci + 1;
        v759 = ci < this.coefficients.length;
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
  function v84(a$$6, b$$3) {
    var v1634 = a$$6 == 0;
    if (!v1634) {
      v1634 = b$$3 == 0;
    }
    if (v1634) {
      return 0;
    }
    if (a$$6 == 1) {
      return b$$3;
    }
    if (b$$3 == 1) {
      return a$$6;
    }
    var v765 = this.expTable;
    var v2602 = this.logTable;
    introspect(JAM.policy.p26) {
      var v2367 = v2602[a$$6]
    }
    var v2603 = this.logTable;
    introspect(JAM.policy.p26) {
      var v2368 = v2603[b$$3]
    }
    var v766 = (v2367 + v2368) % 255;
    introspect(JAM.policy.p26) {
      return v765[v766];
    }
  }
  function v83(a$$5) {
    if (a$$5 == 0) {
      throw "System.ArithmeticException";
    }
    var v768 = this.expTable;
    var v2369 = this.logTable;
    introspect(JAM.policy.p26) {
      var v1636 = v2369[a$$5]
    }
    var v769 = 255 - v1636;
    introspect(JAM.policy.p26) {
      return v768[v769];
    }
  }
  function v82(a$$4) {
    if (a$$4 == 0) {
      throw "System.ArgumentException";
    }
    var v771 = this.logTable;
    introspect(JAM.policy.p26) {
      return v771[a$$4];
    }
  }
  function v81(a$$3) {
    var v772 = this.expTable;
    introspect(JAM.policy.p26) {
      return v772[a$$3];
    }
  }
  function v80(degree$$2, coefficient$$1) {
    if (degree$$2 < 0) {
      throw "System.ArgumentException";
    }
    if (coefficient$$1 == 0) {
      return zero;
    }
    var coefficients$$1 = JAM.new(Array, [degree$$2 + 1], JAM.policy.p39);
    var i$$42 = 0;
    var v776 = i$$42 < coefficients$$1.length;
    for (;v776;) {
      introspect(JAM.policy.p27) {
        coefficients$$1[i$$42] = 0;
      }
      i$$42 = i$$42 + 1;
      v776 = i$$42 < coefficients$$1.length;
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
  var v2878 = JAM.new(Array, [256], JAM.policy.p25);
  this.expTable = v2878;
  var v2879 = JAM.new(Array, [256], JAM.policy.p25);
  this.logTable = v2879;
  var x$$57 = 1;
  var i$$41 = 0;
  var v779 = i$$41 < 256;
  for (;v779;) {
    var v777 = this.expTable;
    introspect(JAM.policy.p27) {
      v777[i$$41] = x$$57;
    }
    x$$57 = x$$57 << 1;
    if (x$$57 >= 256) {
      x$$57 = x$$57 ^ primitive;
    }
    i$$41 = i$$41 + 1;
    v779 = i$$41 < 256;
  }
  i$$41 = 0;
  var v782 = i$$41 < 255;
  for (;v782;) {
    var v780 = this.logTable;
    var v1639 = this.expTable;
    introspect(JAM.policy.p26) {
      var v781 = v1639[i$$41]
    }
    JAM.set(v780, v781, i$$41, JAM.policy.p27);
    i$$41 = i$$41 + 1;
    v782 = i$$41 < 255;
  }
  var at0 = JAM.new(Array, [1], JAM.policy.p25);
  introspect(JAM.policy.p27) {
    at0[0] = 0;
  }
  var v2880 = JAM.new(GF256Poly, [this, JAM.new(Array, [at0], JAM.policy.p39)], JAM.policy.p38);
  this.zero = v2880;
  var at1 = JAM.new(Array, [1], JAM.policy.p25);
  introspect(JAM.policy.p27) {
    at1[0] = 1;
  }
  var v2881 = JAM.new(GF256Poly, [this, JAM.new(Array, [at1], JAM.policy.p39)], JAM.policy.p38);
  this.one = v2881;
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
    var v1641 = JAM.call(Math.abs, Math, [i$$47 - this.y], JAM.policy.p39) <= moduleSize$$2;
    if (v1641) {
      v1641 = JAM.call(Math.abs, Math, [j$$25 - this.x], JAM.policy.p39) <= moduleSize$$2;
    }
    if (v1641) {
      var moduleSizeDiff = JAM.call(Math.abs, Math, [moduleSize$$2 - this.estimatedModuleSize], JAM.policy.p39);
      var v789 = moduleSizeDiff <= 1;
      if (!v789) {
        v789 = moduleSizeDiff / this.estimatedModuleSize <= 1;
      }
      return v789;
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
  function v104(image$$12) {
    var tryHarder = false;
    this.image = image$$12;
    var maxI$$1 = qrcode.height;
    var maxJ$$1 = qrcode.width;
    var iSkip = JAM.call(Math.floor, Math, [3 * maxI$$1 / (4 * MAX_MODULES)], JAM.policy.p39);
    var v1648 = iSkip < MIN_SKIP;
    if (!v1648) {
      v1648 = tryHarder;
    }
    if (v1648) {
      iSkip = MIN_SKIP;
    }
    var done = false;
    var stateCount$$5 = JAM.new(Array, [5], JAM.policy.p25);
    var i$$54 = iSkip - 1;
    var v1649 = i$$54 < maxI$$1;
    if (v1649) {
      v1649 = !done;
    }
    var v804 = v1649;
    for (;v804;) {
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
      var v801 = j$$28 < maxJ$$1;
      for (;v801;) {
        var v1650 = j$$28 + i$$54 * qrcode.width;
        introspect(JAM.policy.p26) {
          var v800 = image$$12[v1650]
        }
        if (v800) {
          if ((currentState & 1) == 1) {
            currentState = currentState + 1;
          }
          introspect(JAM.policy.p26) {
            var v1652 = stateCount$$5[currentState]
          }
          introspect(JAM.policy.p27) {
            stateCount$$5[currentState] = v1652 + 1;
          }
        } else {
          if ((currentState & 1) == 0) {
            if (currentState == 4) {
              if (JAM.call(this.foundPatternCross, this, [stateCount$$5], JAM.policy.p39)) {
                var confirmed = JAM.call(this.handlePossibleCenter, this, [stateCount$$5, i$$54, j$$28], JAM.policy.p38);
                if (confirmed) {
                  iSkip = 2;
                  if (this.hasSkipped) {
                    done = JAM.call(this.haveMultiplyConfirmedCenters, this, [], JAM.policy.p40);
                  } else {
                    var rowSkip = JAM.call(this.findRowSkip, this, [], JAM.policy.p40);
                    introspect(JAM.policy.p26) {
                      var v1654 = stateCount$$5[2]
                    }
                    if (rowSkip > v1654) {
                      introspect(JAM.policy.p26) {
                        var v2607 = stateCount$$5[2]
                      }
                      i$$54 = i$$54 + (rowSkip - v2607 - iSkip);
                      j$$28 = maxJ$$1 - 1;
                    }
                  }
                } else {
                  var v1656 = j$$28 < maxJ$$1;
                  if (v1656) {
                    var v2608 = j$$28 + i$$54 * qrcode.width;
                    introspect(JAM.policy.p26) {
                      var v2376 = image$$12[v2608]
                    }
                    v1656 = !v2376;
                  }
                  var v796 = v1656;
                  do {
                    j$$28 = j$$28 + 1;
                    var v1657 = j$$28 < maxJ$$1;
                    if (v1657) {
                      var v2609 = j$$28 + i$$54 * qrcode.width;
                      introspect(JAM.policy.p26) {
                        var v2377 = image$$12[v2609]
                      }
                      v1657 = !v2377;
                    }
                    v796 = v1657;
                  } while (v796);
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
              var v1658 = currentState = currentState + 1;
              var v2610 = currentState = currentState + 1;
              introspect(JAM.policy.p26) {
                var v2378 = stateCount$$5[v2610]
              }
              introspect(JAM.policy.p27) {
                stateCount$$5[v1658] = v2378 + 1;
              }
            }
          } else {
            introspect(JAM.policy.p26) {
              var v1659 = stateCount$$5[currentState]
            }
            introspect(JAM.policy.p27) {
              stateCount$$5[currentState] = v1659 + 1;
            }
          }
        }
        j$$28 = j$$28 + 1;
        v801 = j$$28 < maxJ$$1;
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
      var v1660 = i$$54 < maxI$$1;
      if (v1660) {
        v1660 = !done;
      }
      v804 = v1660;
    }
    var patternInfo = JAM.call(this.selectBestPatterns, this, [], JAM.policy.p40);
    JAM.call(qrcode.orderBestPatterns, qrcode, [patternInfo], JAM.policy.p39);
    return JAM.new(FinderPatternInfo, [patternInfo], JAM.policy.p39);
  }
  function v103() {
    var confirmedCount = 0;
    var totalModuleSize$$2 = 0;
    var max$$7 = this.possibleCenters.length;
    var i$$53 = 0;
    var v808 = i$$53 < max$$7;
    for (;v808;) {
      var v806 = this.possibleCenters;
      introspect(JAM.policy.p26) {
        var pattern$$3 = v806[i$$53]
      }
      if (pattern$$3.Count >= CENTER_QUORUM) {
        confirmedCount = confirmedCount + 1;
        totalModuleSize$$2 = totalModuleSize$$2 + pattern$$3.EstimatedModuleSize;
      }
      i$$53 = i$$53 + 1;
      v808 = i$$53 < max$$7;
    }
    if (confirmedCount < 3) {
      return false;
    }
    var average$$1 = totalModuleSize$$2 / max$$7;
    var totalDeviation = 0;
    i$$53 = 0;
    var v811 = i$$53 < max$$7;
    for (;v811;) {
      var v810 = this.possibleCenters;
      introspect(JAM.policy.p26) {
        pattern$$3 = v810[i$$53];
      }
      totalDeviation = totalDeviation + JAM.call(Math.abs, Math, [pattern$$3.EstimatedModuleSize - average$$1], JAM.policy.p39);
      i$$53 = i$$53 + 1;
      v811 = i$$53 < max$$7;
    }
    return totalDeviation <= .05 * totalModuleSize$$2;
  }
  function v102() {
    var max$$6 = this.possibleCenters.length;
    if (max$$6 <= 1) {
      return 0;
    }
    var firstConfirmedCenter = null;
    var i$$52 = 0;
    var v819 = i$$52 < max$$6;
    for (;v819;) {
      var v815 = this.possibleCenters;
      introspect(JAM.policy.p26) {
        var center$$1 = v815[i$$52]
      }
      if (center$$1.Count >= CENTER_QUORUM) {
        if (firstConfirmedCenter == null) {
          firstConfirmedCenter = center$$1;
        } else {
          this.hasSkipped = true;
          return JAM.call(Math.floor, Math, [(JAM.call(Math.abs, Math, [firstConfirmedCenter.X - center$$1.X], JAM.policy.p39) - JAM.call(Math.abs, Math, [firstConfirmedCenter.Y - center$$1.Y], JAM.policy.p39)) / 2], JAM.policy.p39);
        }
      }
      i$$52 = i$$52 + 1;
      v819 = i$$52 < max$$6;
    }
    return 0;
  }
  function v101() {
    function v100(a$$8, b$$5) {
      if (a$$8.count > b$$5.count) {
        return-1;
      }
      if (a$$8.count < b$$5.count) {
        return 1;
      }
      return 0;
    }
    var startSize = this.possibleCenters.length;
    if (startSize < 3) {
      throw "Couldn't find enough finder patterns";
    }
    if (startSize > 3) {
      var totalModuleSize$$1 = 0;
      var i$$51 = 0;
      var v824 = i$$51 < startSize;
      for (;v824;) {
        var v2614 = this.possibleCenters;
        introspect(JAM.policy.p26) {
          var v2382 = v2614[i$$51]
        }
        totalModuleSize$$1 = totalModuleSize$$1 + v2382.EstimatedModuleSize;
        i$$51 = i$$51 + 1;
        v824 = i$$51 < startSize;
      }
      var average = totalModuleSize$$1 / startSize;
      i$$51 = 0;
      var v1672 = i$$51 < this.possibleCenters.length;
      if (v1672) {
        v1672 = this.possibleCenters.length > 3;
      }
      var v828 = v1672;
      for (;v828;) {
        var v825 = this.possibleCenters;
        introspect(JAM.policy.p26) {
          var pattern$$2 = v825[i$$51]
        }
        if (JAM.call(Math.abs, Math, [pattern$$2.EstimatedModuleSize - average], JAM.policy.p39) > .2 * average) {
          var v826 = this.possibleCenters;
          JAM.call(v826.remove, v826, [i$$51], JAM.policy.p39);
          i$$51 = i$$51 - 1;
        }
        i$$51 = i$$51 + 1;
        var v1675 = i$$51 < this.possibleCenters.length;
        if (v1675) {
          v1675 = this.possibleCenters.length > 3;
        }
        v828 = v1675;
      }
    }
    if (this.possibleCenters.length > 3) {
      var v830 = this.possibleCenters;
      JAM.call(v830.sort, v830, [v100], JAM.policy.p39);
    }
    var v1677 = this.possibleCenters;
    introspect(JAM.policy.p26) {
      var v832 = v1677[0]
    }
    var v1678 = this.possibleCenters;
    introspect(JAM.policy.p26) {
      var v833 = v1678[1]
    }
    var v1679 = this.possibleCenters;
    introspect(JAM.policy.p26) {
      var v834 = v1679[2]
    }
    return JAM.new(Array, [v832, v833, v834], JAM.policy.p38);
  }
  function v99(stateCount$$4, i$$50, j$$27) {
    introspect(JAM.policy.p26) {
      var v2620 = stateCount$$4[0]
    }
    introspect(JAM.policy.p26) {
      var v2621 = stateCount$$4[1]
    }
    var v2389 = v2620 + v2621;
    introspect(JAM.policy.p26) {
      var v2390 = stateCount$$4[2]
    }
    var v1680 = v2389 + v2390;
    introspect(JAM.policy.p26) {
      var v1681 = stateCount$$4[3]
    }
    var v835 = v1680 + v1681;
    introspect(JAM.policy.p26) {
      var v836 = stateCount$$4[4]
    }
    var stateCountTotal$$2 = v835 + v836;
    var centerJ$$1 = JAM.call(this.centerFromEnd, this, [stateCount$$4, j$$27], JAM.policy.p38);
    var v837 = JAM.call(Math.floor, Math, [centerJ$$1], JAM.policy.p39);
    introspect(JAM.policy.p26) {
      var v838 = stateCount$$4[2]
    }
    var centerI$$1 = JAM.call(this.crossCheckVertical, this, [i$$50, v837, v838, stateCountTotal$$2], JAM.policy.p38);
    if (!JAM.call(isNaN, null, [centerI$$1], JAM.policy.p39)) {
      var v839 = JAM.call(Math.floor, Math, [centerJ$$1], JAM.policy.p39);
      var v840 = JAM.call(Math.floor, Math, [centerI$$1], JAM.policy.p39);
      introspect(JAM.policy.p26) {
        var v841 = stateCount$$4[2]
      }
      centerJ$$1 = JAM.call(this.crossCheckHorizontal, this, [v839, v840, v841, stateCountTotal$$2], JAM.policy.p38);
      if (!JAM.call(isNaN, null, [centerJ$$1], JAM.policy.p39)) {
        var estimatedModuleSize$$1 = stateCountTotal$$2 / 7;
        var found = false;
        var max$$5 = this.possibleCenters.length;
        var index$$39 = 0;
        var v845 = index$$39 < max$$5;
        for (;v845;) {
          var v843 = this.possibleCenters;
          introspect(JAM.policy.p26) {
            var center = v843[index$$39]
          }
          if (JAM.call(center.aboutEquals, center, [estimatedModuleSize$$1, centerI$$1, centerJ$$1], JAM.policy.p38)) {
            JAM.call(center.incrementCount, center, [], JAM.policy.p40);
            found = true;
            break;
          }
          index$$39 = index$$39 + 1;
          v845 = index$$39 < max$$5;
        }
        if (!found) {
          var point$$2 = JAM.new(FinderPattern, [centerJ$$1, centerI$$1, estimatedModuleSize$$1], JAM.policy.p38);
          var v846 = this.possibleCenters;
          JAM.call(v846.push, v846, [point$$2], JAM.policy.p39);
          if (this.resultPointCallback != null) {
            var v847 = this.resultPointCallback;
            JAM.call(v847.foundPossibleResultPoint, v847, [point$$2], JAM.policy.p39);
          }
        }
        return true;
      }
    }
    return false;
  }
  function v98(startJ, centerI, maxCount$$1, originalStateCountTotal$$1) {
    var image$$11 = this.image;
    var maxJ = qrcode.width;
    var stateCount$$3 = this.CrossCheckStateCount;
    var j$$26 = startJ;
    var v1685 = j$$26 >= 0;
    if (v1685) {
      var v2391 = j$$26 + centerI * qrcode.width;
      introspect(JAM.policy.p26) {
        v1685 = image$$11[v2391];
      }
    }
    var v852 = v1685;
    for (;v852;) {
      introspect(JAM.policy.p26) {
        var v1686 = stateCount$$3[2]
      }
      introspect(JAM.policy.p27) {
        stateCount$$3[2] = v1686 + 1;
      }
      j$$26 = j$$26 - 1;
      var v1687 = j$$26 >= 0;
      if (v1687) {
        var v2392 = j$$26 + centerI * qrcode.width;
        introspect(JAM.policy.p26) {
          v1687 = image$$11[v2392];
        }
      }
      v852 = v1687;
    }
    if (j$$26 < 0) {
      return NaN;
    }
    var v2393 = j$$26 >= 0;
    if (v2393) {
      var v2725 = j$$26 + centerI * qrcode.width;
      introspect(JAM.policy.p26) {
        var v2624 = image$$11[v2725]
      }
      v2393 = !v2624;
    }
    var v1688 = v2393;
    if (v1688) {
      introspect(JAM.policy.p26) {
        var v2394 = stateCount$$3[1]
      }
      v1688 = v2394 <= maxCount$$1;
    }
    var v854 = v1688;
    for (;v854;) {
      introspect(JAM.policy.p26) {
        var v1689 = stateCount$$3[1]
      }
      introspect(JAM.policy.p27) {
        stateCount$$3[1] = v1689 + 1;
      }
      j$$26 = j$$26 - 1;
      var v2395 = j$$26 >= 0;
      if (v2395) {
        var v2726 = j$$26 + centerI * qrcode.width;
        introspect(JAM.policy.p26) {
          var v2625 = image$$11[v2726]
        }
        v2395 = !v2625;
      }
      var v1690 = v2395;
      if (v1690) {
        introspect(JAM.policy.p26) {
          var v2396 = stateCount$$3[1]
        }
        v1690 = v2396 <= maxCount$$1;
      }
      v854 = v1690;
    }
    var v1691 = j$$26 < 0;
    if (!v1691) {
      introspect(JAM.policy.p26) {
        var v2397 = stateCount$$3[1]
      }
      v1691 = v2397 > maxCount$$1;
    }
    if (v1691) {
      return NaN;
    }
    var v2399 = j$$26 >= 0;
    if (v2399) {
      var v2626 = j$$26 + centerI * qrcode.width;
      introspect(JAM.policy.p26) {
        v2399 = image$$11[v2626];
      }
    }
    var v1692 = v2399;
    if (v1692) {
      introspect(JAM.policy.p26) {
        var v2400 = stateCount$$3[0]
      }
      v1692 = v2400 <= maxCount$$1;
    }
    var v856 = v1692;
    for (;v856;) {
      introspect(JAM.policy.p26) {
        var v1693 = stateCount$$3[0]
      }
      introspect(JAM.policy.p27) {
        stateCount$$3[0] = v1693 + 1;
      }
      j$$26 = j$$26 - 1;
      var v2401 = j$$26 >= 0;
      if (v2401) {
        var v2627 = j$$26 + centerI * qrcode.width;
        introspect(JAM.policy.p26) {
          v2401 = image$$11[v2627];
        }
      }
      var v1694 = v2401;
      if (v1694) {
        introspect(JAM.policy.p26) {
          var v2402 = stateCount$$3[0]
        }
        v1694 = v2402 <= maxCount$$1;
      }
      v856 = v1694;
    }
    introspect(JAM.policy.p26) {
      var v1695 = stateCount$$3[0]
    }
    if (v1695 > maxCount$$1) {
      return NaN;
    }
    j$$26 = startJ + 1;
    var v1696 = j$$26 < maxJ;
    if (v1696) {
      var v2403 = j$$26 + centerI * qrcode.width;
      introspect(JAM.policy.p26) {
        v1696 = image$$11[v2403];
      }
    }
    var v858 = v1696;
    for (;v858;) {
      introspect(JAM.policy.p26) {
        var v1697 = stateCount$$3[2]
      }
      introspect(JAM.policy.p27) {
        stateCount$$3[2] = v1697 + 1;
      }
      j$$26 = j$$26 + 1;
      var v1698 = j$$26 < maxJ;
      if (v1698) {
        var v2404 = j$$26 + centerI * qrcode.width;
        introspect(JAM.policy.p26) {
          v1698 = image$$11[v2404];
        }
      }
      v858 = v1698;
    }
    if (j$$26 == maxJ) {
      return NaN;
    }
    var v2405 = j$$26 < maxJ;
    if (v2405) {
      var v2731 = j$$26 + centerI * qrcode.width;
      introspect(JAM.policy.p26) {
        var v2630 = image$$11[v2731]
      }
      v2405 = !v2630;
    }
    var v1699 = v2405;
    if (v1699) {
      introspect(JAM.policy.p26) {
        var v2406 = stateCount$$3[3]
      }
      v1699 = v2406 < maxCount$$1;
    }
    var v860 = v1699;
    for (;v860;) {
      introspect(JAM.policy.p26) {
        var v1700 = stateCount$$3[3]
      }
      introspect(JAM.policy.p27) {
        stateCount$$3[3] = v1700 + 1;
      }
      j$$26 = j$$26 + 1;
      var v2407 = j$$26 < maxJ;
      if (v2407) {
        var v2732 = j$$26 + centerI * qrcode.width;
        introspect(JAM.policy.p26) {
          var v2631 = image$$11[v2732]
        }
        v2407 = !v2631;
      }
      var v1701 = v2407;
      if (v1701) {
        introspect(JAM.policy.p26) {
          var v2408 = stateCount$$3[3]
        }
        v1701 = v2408 < maxCount$$1;
      }
      v860 = v1701;
    }
    var v1702 = j$$26 == maxJ;
    if (!v1702) {
      introspect(JAM.policy.p26) {
        var v2409 = stateCount$$3[3]
      }
      v1702 = v2409 >= maxCount$$1;
    }
    if (v1702) {
      return NaN;
    }
    var v2411 = j$$26 < maxJ;
    if (v2411) {
      var v2632 = j$$26 + centerI * qrcode.width;
      introspect(JAM.policy.p26) {
        v2411 = image$$11[v2632];
      }
    }
    var v1703 = v2411;
    if (v1703) {
      introspect(JAM.policy.p26) {
        var v2412 = stateCount$$3[4]
      }
      v1703 = v2412 < maxCount$$1;
    }
    var v862 = v1703;
    for (;v862;) {
      introspect(JAM.policy.p26) {
        var v1704 = stateCount$$3[4]
      }
      introspect(JAM.policy.p27) {
        stateCount$$3[4] = v1704 + 1;
      }
      j$$26 = j$$26 + 1;
      var v2413 = j$$26 < maxJ;
      if (v2413) {
        var v2633 = j$$26 + centerI * qrcode.width;
        introspect(JAM.policy.p26) {
          v2413 = image$$11[v2633];
        }
      }
      var v1705 = v2413;
      if (v1705) {
        introspect(JAM.policy.p26) {
          var v2414 = stateCount$$3[4]
        }
        v1705 = v2414 < maxCount$$1;
      }
      v862 = v1705;
    }
    introspect(JAM.policy.p26) {
      var v1706 = stateCount$$3[4]
    }
    if (v1706 >= maxCount$$1) {
      return NaN;
    }
    introspect(JAM.policy.p26) {
      var v2634 = stateCount$$3[0]
    }
    introspect(JAM.policy.p26) {
      var v2635 = stateCount$$3[1]
    }
    var v2415 = v2634 + v2635;
    introspect(JAM.policy.p26) {
      var v2416 = stateCount$$3[2]
    }
    var v1707 = v2415 + v2416;
    introspect(JAM.policy.p26) {
      var v1708 = stateCount$$3[3]
    }
    var v864 = v1707 + v1708;
    introspect(JAM.policy.p26) {
      var v865 = stateCount$$3[4]
    }
    var stateCountTotal$$1 = v864 + v865;
    if (5 * JAM.call(Math.abs, Math, [stateCountTotal$$1 - originalStateCountTotal$$1], JAM.policy.p39) >= originalStateCountTotal$$1) {
      return NaN;
    }
    var v867;
    if (JAM.call(this.foundPatternCross, this, [stateCount$$3], JAM.policy.p39)) {
      v867 = JAM.call(this.centerFromEnd, this, [stateCount$$3, j$$26], JAM.policy.p38);
    } else {
      v867 = NaN;
    }
    return v867;
  }
  function v97(startI, centerJ, maxCount, originalStateCountTotal) {
    var image$$10 = this.image;
    var maxI = qrcode.height;
    var stateCount$$2 = this.CrossCheckStateCount;
    var i$$49 = startI;
    var v1711 = i$$49 >= 0;
    if (v1711) {
      var v2418 = centerJ + i$$49 * qrcode.width;
      introspect(JAM.policy.p26) {
        v1711 = image$$10[v2418];
      }
    }
    var v868 = v1711;
    for (;v868;) {
      introspect(JAM.policy.p26) {
        var v1712 = stateCount$$2[2]
      }
      introspect(JAM.policy.p27) {
        stateCount$$2[2] = v1712 + 1;
      }
      i$$49 = i$$49 - 1;
      var v1713 = i$$49 >= 0;
      if (v1713) {
        var v2419 = centerJ + i$$49 * qrcode.width;
        introspect(JAM.policy.p26) {
          v1713 = image$$10[v2419];
        }
      }
      v868 = v1713;
    }
    if (i$$49 < 0) {
      return NaN;
    }
    var v2420 = i$$49 >= 0;
    if (v2420) {
      var v2737 = centerJ + i$$49 * qrcode.width;
      introspect(JAM.policy.p26) {
        var v2639 = image$$10[v2737]
      }
      v2420 = !v2639;
    }
    var v1714 = v2420;
    if (v1714) {
      introspect(JAM.policy.p26) {
        var v2421 = stateCount$$2[1]
      }
      v1714 = v2421 <= maxCount;
    }
    var v870 = v1714;
    for (;v870;) {
      introspect(JAM.policy.p26) {
        var v1715 = stateCount$$2[1]
      }
      introspect(JAM.policy.p27) {
        stateCount$$2[1] = v1715 + 1;
      }
      i$$49 = i$$49 - 1;
      var v2422 = i$$49 >= 0;
      if (v2422) {
        var v2738 = centerJ + i$$49 * qrcode.width;
        introspect(JAM.policy.p26) {
          var v2640 = image$$10[v2738]
        }
        v2422 = !v2640;
      }
      var v1716 = v2422;
      if (v1716) {
        introspect(JAM.policy.p26) {
          var v2423 = stateCount$$2[1]
        }
        v1716 = v2423 <= maxCount;
      }
      v870 = v1716;
    }
    var v1717 = i$$49 < 0;
    if (!v1717) {
      introspect(JAM.policy.p26) {
        var v2424 = stateCount$$2[1]
      }
      v1717 = v2424 > maxCount;
    }
    if (v1717) {
      return NaN;
    }
    var v2426 = i$$49 >= 0;
    if (v2426) {
      var v2641 = centerJ + i$$49 * qrcode.width;
      introspect(JAM.policy.p26) {
        v2426 = image$$10[v2641];
      }
    }
    var v1718 = v2426;
    if (v1718) {
      introspect(JAM.policy.p26) {
        var v2427 = stateCount$$2[0]
      }
      v1718 = v2427 <= maxCount;
    }
    var v872 = v1718;
    for (;v872;) {
      introspect(JAM.policy.p26) {
        var v1719 = stateCount$$2[0]
      }
      introspect(JAM.policy.p27) {
        stateCount$$2[0] = v1719 + 1;
      }
      i$$49 = i$$49 - 1;
      var v2428 = i$$49 >= 0;
      if (v2428) {
        var v2642 = centerJ + i$$49 * qrcode.width;
        introspect(JAM.policy.p26) {
          v2428 = image$$10[v2642];
        }
      }
      var v1720 = v2428;
      if (v1720) {
        introspect(JAM.policy.p26) {
          var v2429 = stateCount$$2[0]
        }
        v1720 = v2429 <= maxCount;
      }
      v872 = v1720;
    }
    introspect(JAM.policy.p26) {
      var v1721 = stateCount$$2[0]
    }
    if (v1721 > maxCount) {
      return NaN;
    }
    i$$49 = startI + 1;
    var v1722 = i$$49 < maxI;
    if (v1722) {
      var v2430 = centerJ + i$$49 * qrcode.width;
      introspect(JAM.policy.p26) {
        v1722 = image$$10[v2430];
      }
    }
    var v874 = v1722;
    for (;v874;) {
      introspect(JAM.policy.p26) {
        var v1723 = stateCount$$2[2]
      }
      introspect(JAM.policy.p27) {
        stateCount$$2[2] = v1723 + 1;
      }
      i$$49 = i$$49 + 1;
      var v1724 = i$$49 < maxI;
      if (v1724) {
        var v2431 = centerJ + i$$49 * qrcode.width;
        introspect(JAM.policy.p26) {
          v1724 = image$$10[v2431];
        }
      }
      v874 = v1724;
    }
    if (i$$49 == maxI) {
      return NaN;
    }
    var v2432 = i$$49 < maxI;
    if (v2432) {
      var v2743 = centerJ + i$$49 * qrcode.width;
      introspect(JAM.policy.p26) {
        var v2645 = image$$10[v2743]
      }
      v2432 = !v2645;
    }
    var v1725 = v2432;
    if (v1725) {
      introspect(JAM.policy.p26) {
        var v2433 = stateCount$$2[3]
      }
      v1725 = v2433 < maxCount;
    }
    var v876 = v1725;
    for (;v876;) {
      introspect(JAM.policy.p26) {
        var v1726 = stateCount$$2[3]
      }
      introspect(JAM.policy.p27) {
        stateCount$$2[3] = v1726 + 1;
      }
      i$$49 = i$$49 + 1;
      var v2434 = i$$49 < maxI;
      if (v2434) {
        var v2744 = centerJ + i$$49 * qrcode.width;
        introspect(JAM.policy.p26) {
          var v2646 = image$$10[v2744]
        }
        v2434 = !v2646;
      }
      var v1727 = v2434;
      if (v1727) {
        introspect(JAM.policy.p26) {
          var v2435 = stateCount$$2[3]
        }
        v1727 = v2435 < maxCount;
      }
      v876 = v1727;
    }
    var v1728 = i$$49 == maxI;
    if (!v1728) {
      introspect(JAM.policy.p26) {
        var v2436 = stateCount$$2[3]
      }
      v1728 = v2436 >= maxCount;
    }
    if (v1728) {
      return NaN;
    }
    var v2438 = i$$49 < maxI;
    if (v2438) {
      var v2647 = centerJ + i$$49 * qrcode.width;
      introspect(JAM.policy.p26) {
        v2438 = image$$10[v2647];
      }
    }
    var v1729 = v2438;
    if (v1729) {
      introspect(JAM.policy.p26) {
        var v2439 = stateCount$$2[4]
      }
      v1729 = v2439 < maxCount;
    }
    var v878 = v1729;
    for (;v878;) {
      introspect(JAM.policy.p26) {
        var v1730 = stateCount$$2[4]
      }
      introspect(JAM.policy.p27) {
        stateCount$$2[4] = v1730 + 1;
      }
      i$$49 = i$$49 + 1;
      var v2440 = i$$49 < maxI;
      if (v2440) {
        var v2648 = centerJ + i$$49 * qrcode.width;
        introspect(JAM.policy.p26) {
          v2440 = image$$10[v2648];
        }
      }
      var v1731 = v2440;
      if (v1731) {
        introspect(JAM.policy.p26) {
          var v2441 = stateCount$$2[4]
        }
        v1731 = v2441 < maxCount;
      }
      v878 = v1731;
    }
    introspect(JAM.policy.p26) {
      var v1732 = stateCount$$2[4]
    }
    if (v1732 >= maxCount) {
      return NaN;
    }
    introspect(JAM.policy.p26) {
      var v2649 = stateCount$$2[0]
    }
    introspect(JAM.policy.p26) {
      var v2650 = stateCount$$2[1]
    }
    var v2442 = v2649 + v2650;
    introspect(JAM.policy.p26) {
      var v2443 = stateCount$$2[2]
    }
    var v1733 = v2442 + v2443;
    introspect(JAM.policy.p26) {
      var v1734 = stateCount$$2[3]
    }
    var v880 = v1733 + v1734;
    introspect(JAM.policy.p26) {
      var v881 = stateCount$$2[4]
    }
    var stateCountTotal = v880 + v881;
    if (5 * JAM.call(Math.abs, Math, [stateCountTotal - originalStateCountTotal], JAM.policy.p39) >= 2 * originalStateCountTotal) {
      return NaN;
    }
    var v883;
    if (JAM.call(this.foundPatternCross, this, [stateCount$$2], JAM.policy.p39)) {
      v883 = JAM.call(this.centerFromEnd, this, [stateCount$$2, i$$49], JAM.policy.p38);
    } else {
      v883 = NaN;
    }
    return v883;
  }
  function v96(stateCount$$1, end$$2) {
    introspect(JAM.policy.p26) {
      var v2445 = stateCount$$1[4]
    }
    var v1738 = end$$2 - v2445;
    introspect(JAM.policy.p26) {
      var v1739 = stateCount$$1[3]
    }
    var v884 = v1738 - v1739;
    introspect(JAM.policy.p26) {
      var v1740 = stateCount$$1[2]
    }
    return v884 - v1740 / 2;
  }
  function v95(stateCount) {
    var totalModuleSize = 0;
    var i$$48 = 0;
    var v887 = i$$48 < 5;
    for (;v887;) {
      introspect(JAM.policy.p26) {
        var count$$5 = stateCount[i$$48]
      }
      if (count$$5 == 0) {
        return false;
      }
      totalModuleSize = totalModuleSize + count$$5;
      i$$48 = i$$48 + 1;
      v887 = i$$48 < 5;
    }
    if (totalModuleSize < 7) {
      return false;
    }
    var moduleSize$$3 = JAM.call(Math.floor, Math, [(totalModuleSize << INTEGER_MATH_SHIFT) / 7], JAM.policy.p39);
    var maxVariance = JAM.call(Math.floor, Math, [moduleSize$$3 / 2], JAM.policy.p39);
    introspect(JAM.policy.p26) {
      var v2848 = stateCount[0]
    }
    var v2652 = JAM.call(Math.abs, Math, [moduleSize$$3 - (v2848 << INTEGER_MATH_SHIFT)], JAM.policy.p39) < maxVariance;
    if (v2652) {
      introspect(JAM.policy.p26) {
        var v2849 = stateCount[1]
      }
      v2652 = JAM.call(Math.abs, Math, [moduleSize$$3 - (v2849 << INTEGER_MATH_SHIFT)], JAM.policy.p39) < maxVariance;
    }
    var v2446 = v2652;
    if (v2446) {
      var v2805 = 3 * moduleSize$$3;
      introspect(JAM.policy.p26) {
        var v2838 = stateCount[2]
      }
      v2446 = JAM.call(Math.abs, Math, [v2805 - (v2838 << INTEGER_MATH_SHIFT)], JAM.policy.p39) < 3 * maxVariance;
    }
    var v1742 = v2446;
    if (v1742) {
      introspect(JAM.policy.p26) {
        var v2807 = stateCount[3]
      }
      v1742 = JAM.call(Math.abs, Math, [moduleSize$$3 - (v2807 << INTEGER_MATH_SHIFT)], JAM.policy.p39) < maxVariance;
    }
    var v891 = v1742;
    if (v891) {
      introspect(JAM.policy.p26) {
        var v2751 = stateCount[4]
      }
      v891 = JAM.call(Math.abs, Math, [moduleSize$$3 - (v2751 << INTEGER_MATH_SHIFT)], JAM.policy.p39) < maxVariance;
    }
    return v891;
  }
  function v94() {
    var v892 = this.crossCheckStateCount;
    introspect(JAM.policy.p27) {
      v892[0] = 0;
    }
    var v893 = this.crossCheckStateCount;
    introspect(JAM.policy.p27) {
      v893[1] = 0;
    }
    var v894 = this.crossCheckStateCount;
    introspect(JAM.policy.p27) {
      v894[2] = 0;
    }
    var v895 = this.crossCheckStateCount;
    introspect(JAM.policy.p27) {
      v895[3] = 0;
    }
    var v896 = this.crossCheckStateCount;
    introspect(JAM.policy.p27) {
      v896[4] = 0;
    }
    return this.crossCheckStateCount;
  }
  this.image = null;
  this.possibleCenters = [];
  this.hasSkipped = false;
  var v2882 = JAM.new(Array, [0, 0, 0, 0, 0], JAM.policy.p22);
  this.crossCheckStateCount = v2882;
  this.resultPointCallback = null;
  JAM.call(this.__defineGetter__, this, ["CrossCheckStateCount", v94], JAM.policy.p23);
  this.foundPatternCross = v95;
  this.centerFromEnd = v96;
  this.crossCheckVertical = v97;
  this.crossCheckHorizontal = v98;
  this.handlePossibleCenter = v99;
  this.selectBestPatterns = v101;
  this.findRowSkip = v102;
  this.haveMultiplyConfirmedCenters = v103;
  this.findFinderPattern = v104;
  return;
}
function AlignmentPattern(posX$$1, posY$$1, estimatedModuleSize$$2) {
  function v110(moduleSize$$4, i$$55, j$$29) {
    var v1744 = JAM.call(Math.abs, Math, [i$$55 - this.y], JAM.policy.p39) <= moduleSize$$4;
    if (v1744) {
      v1744 = JAM.call(Math.abs, Math, [j$$29 - this.x], JAM.policy.p39) <= moduleSize$$4;
    }
    if (v1744) {
      var moduleSizeDiff$$1 = JAM.call(Math.abs, Math, [moduleSize$$4 - this.estimatedModuleSize], JAM.policy.p39);
      var v898 = moduleSizeDiff$$1 <= 1;
      if (!v898) {
        v898 = moduleSizeDiff$$1 / this.estimatedModuleSize <= 1;
      }
      return v898;
    }
    return false;
  }
  function v109() {
    this.count = this.count + 1;
    return;
  }
  function v108() {
    return JAM.call(Math.floor, Math, [this.y], JAM.policy.p39);
  }
  function v107() {
    return JAM.call(Math.floor, Math, [this.x], JAM.policy.p39);
  }
  function v106() {
    return this.count;
  }
  function v105() {
    return this.estimatedModuleSize;
  }
  this.x = posX$$1;
  this.y = posY$$1;
  this.count = 1;
  this.estimatedModuleSize = estimatedModuleSize$$2;
  JAM.call(this.__defineGetter__, this, ["EstimatedModuleSize", v105], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["Count", v106], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["X", v107], JAM.policy.p23);
  JAM.call(this.__defineGetter__, this, ["Y", v108], JAM.policy.p23);
  this.incrementCount = v109;
  this.aboutEquals = v110;
  return;
}
function AlignmentPatternFinder(image$$13, startX, startY, width$$12, height$$11, moduleSize$$5, resultPointCallback) {
  function v115() {
    var startX$$1 = this.startX;
    var height$$12 = this.height;
    var maxJ$$2 = startX$$1 + width$$12;
    var middleI = startY + (height$$12 >> 1);
    var stateCount$$10 = JAM.new(Array, [0, 0, 0], JAM.policy.p22);
    var iGen = 0;
    var v914 = iGen < height$$12;
    for (;v914;) {
      var v1749;
      if ((iGen & 1) == 0) {
        v1749 = iGen + 1 >> 1;
      } else {
        v1749 = -(iGen + 1 >> 1);
      }
      var i$$59 = middleI + v1749;
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
      var v1750 = j$$31 < maxJ$$2;
      if (v1750) {
        var v2661 = j$$31 + qrcode.width * i$$59;
        introspect(JAM.policy.p26) {
          var v2455 = image$$13[v2661]
        }
        v1750 = !v2455;
      }
      var v904 = v1750;
      for (;v904;) {
        j$$31 = j$$31 + 1;
        var v1751 = j$$31 < maxJ$$2;
        if (v1751) {
          var v2662 = j$$31 + qrcode.width * i$$59;
          introspect(JAM.policy.p26) {
            var v2456 = image$$13[v2662]
          }
          v1751 = !v2456;
        }
        v904 = v1751;
      }
      var currentState$$1 = 0;
      var v911 = j$$31 < maxJ$$2;
      for (;v911;) {
        var v1752 = j$$31 + i$$59 * qrcode.width;
        introspect(JAM.policy.p26) {
          var v910 = image$$13[v1752]
        }
        if (v910) {
          if (currentState$$1 == 1) {
            introspect(JAM.policy.p26) {
              var v1753 = stateCount$$10[currentState$$1]
            }
            introspect(JAM.policy.p27) {
              stateCount$$10[currentState$$1] = v1753 + 1;
            }
          } else {
            if (currentState$$1 == 2) {
              if (JAM.call(this.foundPatternCross, this, [stateCount$$10], JAM.policy.p39)) {
                var confirmed$$1 = JAM.call(this.handlePossibleCenter, this, [stateCount$$10, i$$59, j$$31], JAM.policy.p38);
                if (confirmed$$1 != null) {
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
              var v1754 = currentState$$1 = currentState$$1 + 1;
              var v2664 = currentState$$1 = currentState$$1 + 1;
              introspect(JAM.policy.p26) {
                var v2458 = stateCount$$10[v2664]
              }
              introspect(JAM.policy.p27) {
                stateCount$$10[v1754] = v2458 + 1;
              }
            }
          }
        } else {
          if (currentState$$1 == 1) {
            currentState$$1 = currentState$$1 + 1;
          }
          introspect(JAM.policy.p26) {
            var v1755 = stateCount$$10[currentState$$1]
          }
          introspect(JAM.policy.p27) {
            stateCount$$10[currentState$$1] = v1755 + 1;
          }
        }
        j$$31 = j$$31 + 1;
        v911 = j$$31 < maxJ$$2;
      }
      if (JAM.call(this.foundPatternCross, this, [stateCount$$10], JAM.policy.p39)) {
        confirmed$$1 = JAM.call(this.handlePossibleCenter, this, [stateCount$$10, i$$59, maxJ$$2], JAM.policy.p38);
        if (confirmed$$1 != null) {
          return confirmed$$1;
        }
      }
      iGen = iGen + 1;
      v914 = iGen < height$$12;
    }
    if (!(this.possibleCenters.length == 0)) {
      var v915 = this.possibleCenters;
      introspect(JAM.policy.p26) {
        return v915[0];
      }
    }
    throw "Couldn't find enough alignment patterns";
  }
  function v114(stateCount$$9, i$$58, j$$30) {
    introspect(JAM.policy.p26) {
      var v1757 = stateCount$$9[0]
    }
    introspect(JAM.policy.p26) {
      var v1758 = stateCount$$9[1]
    }
    var v917 = v1757 + v1758;
    introspect(JAM.policy.p26) {
      var v918 = stateCount$$9[2]
    }
    var stateCountTotal$$4 = v917 + v918;
    var centerJ$$3 = JAM.call(this.centerFromEnd, this, [stateCount$$9, j$$30], JAM.policy.p38);
    var v919 = JAM.call(Math.floor, Math, [centerJ$$3], JAM.policy.p39);
    introspect(JAM.policy.p26) {
      var v1759 = stateCount$$9[1]
    }
    var centerI$$2 = JAM.call(this.crossCheckVertical, this, [i$$58, v919, 2 * v1759, stateCountTotal$$4], JAM.policy.p38);
    if (!JAM.call(isNaN, null, [centerI$$2], JAM.policy.p39)) {
      introspect(JAM.policy.p26) {
        var v2460 = stateCount$$9[0]
      }
      introspect(JAM.policy.p26) {
        var v2461 = stateCount$$9[1]
      }
      var v1761 = v2460 + v2461;
      introspect(JAM.policy.p26) {
        var v1762 = stateCount$$9[2]
      }
      var estimatedModuleSize$$3 = (v1761 + v1762) / 3;
      var max$$8 = this.possibleCenters.length;
      var index$$40 = 0;
      var v925 = index$$40 < max$$8;
      for (;v925;) {
        var v923 = this.possibleCenters;
        introspect(JAM.policy.p26) {
          var center$$2 = v923[index$$40]
        }
        if (JAM.call(center$$2.aboutEquals, center$$2, [estimatedModuleSize$$3, centerI$$2, centerJ$$3], JAM.policy.p38)) {
          return JAM.new(AlignmentPattern, [centerJ$$3, centerI$$2, estimatedModuleSize$$3], JAM.policy.p38);
        }
        index$$40 = index$$40 + 1;
        v925 = index$$40 < max$$8;
      }
      var point$$3 = JAM.new(AlignmentPattern, [centerJ$$3, centerI$$2, estimatedModuleSize$$3], JAM.policy.p38);
      var v926 = this.possibleCenters;
      JAM.call(v926.push, v926, [point$$3], JAM.policy.p39);
      if (this.resultPointCallback != null) {
        var v927 = this.resultPointCallback;
        JAM.call(v927.foundPossibleResultPoint, v927, [point$$3], JAM.policy.p39);
      }
    }
    return null;
  }
  function v113(startI$$1, centerJ$$2, maxCount$$2, originalStateCountTotal$$2) {
    var image$$14 = this.image;
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
    var v2462 = i$$57 >= 0;
    if (v2462) {
      var v2666 = centerJ$$2 + i$$57 * qrcode.width;
      introspect(JAM.policy.p26) {
        v2462 = image$$14[v2666];
      }
    }
    var v1764 = v2462;
    if (v1764) {
      introspect(JAM.policy.p26) {
        var v2463 = stateCount$$8[1]
      }
      v1764 = v2463 <= maxCount$$2;
    }
    var v930 = v1764;
    for (;v930;) {
      introspect(JAM.policy.p26) {
        var v1765 = stateCount$$8[1]
      }
      introspect(JAM.policy.p27) {
        stateCount$$8[1] = v1765 + 1;
      }
      i$$57 = i$$57 - 1;
      var v2464 = i$$57 >= 0;
      if (v2464) {
        var v2667 = centerJ$$2 + i$$57 * qrcode.width;
        introspect(JAM.policy.p26) {
          v2464 = image$$14[v2667];
        }
      }
      var v1766 = v2464;
      if (v1766) {
        introspect(JAM.policy.p26) {
          var v2465 = stateCount$$8[1]
        }
        v1766 = v2465 <= maxCount$$2;
      }
      v930 = v1766;
    }
    var v1767 = i$$57 < 0;
    if (!v1767) {
      introspect(JAM.policy.p26) {
        var v2466 = stateCount$$8[1]
      }
      v1767 = v2466 > maxCount$$2;
    }
    if (v1767) {
      return NaN;
    }
    var v2468 = i$$57 >= 0;
    if (v2468) {
      var v2758 = centerJ$$2 + i$$57 * qrcode.width;
      introspect(JAM.policy.p26) {
        var v2668 = image$$14[v2758]
      }
      v2468 = !v2668;
    }
    var v1768 = v2468;
    if (v1768) {
      introspect(JAM.policy.p26) {
        var v2469 = stateCount$$8[0]
      }
      v1768 = v2469 <= maxCount$$2;
    }
    var v932 = v1768;
    for (;v932;) {
      introspect(JAM.policy.p26) {
        var v1769 = stateCount$$8[0]
      }
      introspect(JAM.policy.p27) {
        stateCount$$8[0] = v1769 + 1;
      }
      i$$57 = i$$57 - 1;
      var v2470 = i$$57 >= 0;
      if (v2470) {
        var v2759 = centerJ$$2 + i$$57 * qrcode.width;
        introspect(JAM.policy.p26) {
          var v2669 = image$$14[v2759]
        }
        v2470 = !v2669;
      }
      var v1770 = v2470;
      if (v1770) {
        introspect(JAM.policy.p26) {
          var v2471 = stateCount$$8[0]
        }
        v1770 = v2471 <= maxCount$$2;
      }
      v932 = v1770;
    }
    introspect(JAM.policy.p26) {
      var v1771 = stateCount$$8[0]
    }
    if (v1771 > maxCount$$2) {
      return NaN;
    }
    i$$57 = startI$$1 + 1;
    var v2472 = i$$57 < maxI$$2;
    if (v2472) {
      var v2670 = centerJ$$2 + i$$57 * qrcode.width;
      introspect(JAM.policy.p26) {
        v2472 = image$$14[v2670];
      }
    }
    var v1772 = v2472;
    if (v1772) {
      introspect(JAM.policy.p26) {
        var v2473 = stateCount$$8[1]
      }
      v1772 = v2473 <= maxCount$$2;
    }
    var v934 = v1772;
    for (;v934;) {
      introspect(JAM.policy.p26) {
        var v1773 = stateCount$$8[1]
      }
      introspect(JAM.policy.p27) {
        stateCount$$8[1] = v1773 + 1;
      }
      i$$57 = i$$57 + 1;
      var v2474 = i$$57 < maxI$$2;
      if (v2474) {
        var v2671 = centerJ$$2 + i$$57 * qrcode.width;
        introspect(JAM.policy.p26) {
          v2474 = image$$14[v2671];
        }
      }
      var v1774 = v2474;
      if (v1774) {
        introspect(JAM.policy.p26) {
          var v2475 = stateCount$$8[1]
        }
        v1774 = v2475 <= maxCount$$2;
      }
      v934 = v1774;
    }
    var v1775 = i$$57 == maxI$$2;
    if (!v1775) {
      introspect(JAM.policy.p26) {
        var v2476 = stateCount$$8[1]
      }
      v1775 = v2476 > maxCount$$2;
    }
    if (v1775) {
      return NaN;
    }
    var v2478 = i$$57 < maxI$$2;
    if (v2478) {
      var v2762 = centerJ$$2 + i$$57 * qrcode.width;
      introspect(JAM.policy.p26) {
        var v2672 = image$$14[v2762]
      }
      v2478 = !v2672;
    }
    var v1776 = v2478;
    if (v1776) {
      introspect(JAM.policy.p26) {
        var v2479 = stateCount$$8[2]
      }
      v1776 = v2479 <= maxCount$$2;
    }
    var v936 = v1776;
    for (;v936;) {
      introspect(JAM.policy.p26) {
        var v1777 = stateCount$$8[2]
      }
      introspect(JAM.policy.p27) {
        stateCount$$8[2] = v1777 + 1;
      }
      i$$57 = i$$57 + 1;
      var v2480 = i$$57 < maxI$$2;
      if (v2480) {
        var v2763 = centerJ$$2 + i$$57 * qrcode.width;
        introspect(JAM.policy.p26) {
          var v2673 = image$$14[v2763]
        }
        v2480 = !v2673;
      }
      var v1778 = v2480;
      if (v1778) {
        introspect(JAM.policy.p26) {
          var v2481 = stateCount$$8[2]
        }
        v1778 = v2481 <= maxCount$$2;
      }
      v936 = v1778;
    }
    introspect(JAM.policy.p26) {
      var v1779 = stateCount$$8[2]
    }
    if (v1779 > maxCount$$2) {
      return NaN;
    }
    introspect(JAM.policy.p26) {
      var v1780 = stateCount$$8[0]
    }
    introspect(JAM.policy.p26) {
      var v1781 = stateCount$$8[1]
    }
    var v938 = v1780 + v1781;
    introspect(JAM.policy.p26) {
      var v939 = stateCount$$8[2]
    }
    var stateCountTotal$$3 = v938 + v939;
    if (5 * JAM.call(Math.abs, Math, [stateCountTotal$$3 - originalStateCountTotal$$2], JAM.policy.p39) >= 2 * originalStateCountTotal$$2) {
      return NaN;
    }
    var v941;
    if (JAM.call(this.foundPatternCross, this, [stateCount$$8], JAM.policy.p39)) {
      v941 = JAM.call(this.centerFromEnd, this, [stateCount$$8, i$$57], JAM.policy.p38);
    } else {
      v941 = NaN;
    }
    return v941;
  }
  function v112(stateCount$$7) {
    var moduleSize$$6 = this.moduleSize;
    var maxVariance$$1 = moduleSize$$6 / 2;
    var i$$56 = 0;
    var v943 = i$$56 < 3;
    for (;v943;) {
      introspect(JAM.policy.p26) {
        var v2675 = stateCount$$7[i$$56]
      }
      if (JAM.call(Math.abs, Math, [moduleSize$$6 - v2675], JAM.policy.p39) >= maxVariance$$1) {
        return false;
      }
      i$$56 = i$$56 + 1;
      v943 = i$$56 < 3;
    }
    return true;
  }
  function v111(stateCount$$6, end$$3) {
    introspect(JAM.policy.p26) {
      var v1786 = stateCount$$6[2]
    }
    var v944 = end$$3 - v1786;
    introspect(JAM.policy.p26) {
      var v1787 = stateCount$$6[1]
    }
    return v944 - v1787 / 2;
  }
  this.image = image$$13;
  var v2883 = JAM.new(Array, [], JAM.policy.p40);
  this.possibleCenters = v2883;
  this.startX = startX;
  this.startY = startY;
  this.width = width$$12;
  this.height = height$$11;
  this.moduleSize = moduleSize$$5;
  var v2884 = JAM.new(Array, [0, 0, 0], JAM.policy.p22);
  this.crossCheckStateCount = v2884;
  this.resultPointCallback = resultPointCallback;
  this.centerFromEnd = v111;
  this.foundPatternCross = v112;
  this.crossCheckVertical = v113;
  this.handlePossibleCenter = v114;
  this.find = v115;
  return;
}
function QRCodeDataBlockReader(blocks, version$$8, numErrorCorrectionCode) {
  function v123() {
    var output$$1 = JAM.new(Array, [], JAM.policy.p40);
    var MODE_NUMBER = 1;
    var MODE_ROMAN_AND_NUMBER = 2;
    var MODE_8BIT_BYTE = 4;
    var MODE_KANJI = 8;
    do {
      var mode$$7 = JAM.call(this.NextMode, this, [], JAM.policy.p40);
      if (mode$$7 == 0) {
        if (output$$1.length > 0) {
          break;
        } else {
          throw "Empty data block";
        }
      }
      var v2676 = mode$$7 != MODE_NUMBER;
      if (v2676) {
        v2676 = mode$$7 != MODE_ROMAN_AND_NUMBER;
      }
      var v2484 = v2676;
      if (v2484) {
        v2484 = mode$$7 != MODE_8BIT_BYTE;
      }
      var v1789 = v2484;
      if (v1789) {
        v1789 = mode$$7 != MODE_KANJI;
      }
      if (v1789) {
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
            var v951 = temp_str.length;
            var ta = JAM.new(Array, [v951], JAM.policy.p39);
            var j$$32 = 0;
            var v1792 = temp_str.length;
            var v954 = j$$32 < v1792;
            for (;v954;) {
              var v952 = ta;
              var v953 = j$$32;
              var v2885 = JAM.call(temp_str.charCodeAt, temp_str, [j$$32], JAM.policy.p39);
              introspect(JAM.policy.p27) {
                v952[v953] = v2885;
              }
              j$$32 = j$$32 + 1;
              var v1793 = temp_str.length;
              v954 = j$$32 < v1793;
            }
            JAM.call(output$$1.push, output$$1, [ta], JAM.policy.p39);
            break;
          case MODE_ROMAN_AND_NUMBER:
            temp_str = JAM.call(this.getRomanAndFigureString, this, [dataLength], JAM.policy.p39);
            var v955 = temp_str.length;
            ta = JAM.new(Array, [v955], JAM.policy.p39);
            j$$32 = 0;
            var v1794 = temp_str.length;
            var v958 = j$$32 < v1794;
            for (;v958;) {
              var v956 = ta;
              var v957 = j$$32;
              var v2886 = JAM.call(temp_str.charCodeAt, temp_str, [j$$32], JAM.policy.p39);
              introspect(JAM.policy.p27) {
                v956[v957] = v2886;
              }
              j$$32 = j$$32 + 1;
              var v1795 = temp_str.length;
              v958 = j$$32 < v1795;
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
  function v122(dataLength$$4) {
    var length$$14 = dataLength$$4;
    var intData$$3 = 0;
    var unicodeString = "";
    var v961 = length$$14 > 0;
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
      v961 = length$$14 > 0;
    } while (v961);
    return unicodeString;
  }
  function v121(dataLength$$3) {
    var length$$13 = dataLength$$3;
    var intData$$2 = 0;
    var output = JAM.new(Array, [], JAM.policy.p40);
    var v962 = length$$13 > 0;
    do {
      intData$$2 = JAM.call(this.getNextBits, this, [8], JAM.policy.p25);
      JAM.call(output.push, output, [intData$$2], JAM.policy.p39);
      length$$13 = length$$13 - 1;
      v962 = length$$13 > 0;
    } while (v962);
    return output;
  }
  function v120(dataLength$$2) {
    var length$$12 = dataLength$$2;
    var intData$$1 = 0;
    var strData$$1 = "";
    var v969 = length$$12 > 0;
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
        if (length$$12 == 2) {
          intData$$1 = JAM.call(this.getNextBits, this, [7], JAM.policy.p25);
          if (intData$$1 < 10) {
            strData$$1 = strData$$1 + "0";
          }
          length$$12 = length$$12 - 2;
        } else {
          if (length$$12 == 1) {
            intData$$1 = JAM.call(this.getNextBits, this, [4], JAM.policy.p25);
            length$$12 = length$$12 - 1;
          }
        }
      }
      strData$$1 = strData$$1 + intData$$1;
      v969 = length$$12 > 0;
    } while (v969);
    return strData$$1;
  }
  function v119(dataLength$$1) {
    var length$$11 = dataLength$$1;
    var intData = 0;
    var strData = "";
    var tableRomanAndFigure = JAM.new(Array, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"], JAM.policy.p23);
    var v973 = length$$11 > 0;
    do {
      if (length$$11 > 1) {
        intData = JAM.call(this.getNextBits, this, [11], JAM.policy.p25);
        var firstLetter = JAM.call(Math.floor, Math, [intData / 45], JAM.policy.p39);
        var secondLetter = intData % 45;
        introspect(JAM.policy.p26) {
          var v1799 = tableRomanAndFigure[firstLetter]
        }
        strData = strData + v1799;
        introspect(JAM.policy.p26) {
          var v1800 = tableRomanAndFigure[secondLetter]
        }
        strData = strData + v1800;
        length$$11 = length$$11 - 2;
      } else {
        if (length$$11 == 1) {
          intData = JAM.call(this.getNextBits, this, [6], JAM.policy.p25);
          introspect(JAM.policy.p26) {
            var v1801 = tableRomanAndFigure[intData]
          }
          strData = strData + v1801;
          length$$11 = length$$11 - 1;
        }
      }
      v973 = length$$11 > 0;
    } while (v973);
    return strData;
  }
  function v118(modeIndicator) {
    var index$$41 = 0;
    for (;true;) {
      if (modeIndicator >> index$$41 == 1) {
        break;
      }
      index$$41 = index$$41 + 1;
    }
    var v2486 = qrcode.sizeOfDataLengthInfo;
    var v2487 = this.dataLengthMode;
    introspect(JAM.policy.p26) {
      var v1803 = v2486[v2487]
    }
    introspect(JAM.policy.p26) {
      var v975 = v1803[index$$41]
    }
    return JAM.call(this.getNextBits, this, [v975], JAM.policy.p39);
  }
  function v117() {
    if (this.blockPointer > this.blocks.length - this.numErrorCorrectionCode - 2) {
      return 0;
    } else {
      return JAM.call(this.getNextBits, this, [4], JAM.policy.p25);
    }
    return;
  }
  function v116(numBits) {
    var bits$$15 = 0;
    if (numBits < this.bitPointer + 1) {
      var mask$$5 = 0;
      var i$$60 = 0;
      var v977 = i$$60 < numBits;
      for (;v977;) {
        mask$$5 = mask$$5 + (1 << i$$60);
        i$$60 = i$$60 + 1;
        v977 = i$$60 < numBits;
      }
      mask$$5 = mask$$5 << this.bitPointer - numBits + 1;
      var v2491 = this.blocks;
      var v2492 = this.blockPointer;
      introspect(JAM.policy.p26) {
        var v1809 = v2491[v2492]
      }
      bits$$15 = (v1809 & mask$$5) >> this.bitPointer - numBits + 1;
      this.bitPointer = this.bitPointer - numBits;
      return bits$$15;
    } else {
      if (numBits < this.bitPointer + 1 + 8) {
        var mask1 = 0;
        i$$60 = 0;
        var v980 = i$$60 < this.bitPointer + 1;
        for (;v980;) {
          mask1 = mask1 + (1 << i$$60);
          i$$60 = i$$60 + 1;
          v980 = i$$60 < this.bitPointer + 1;
        }
        var v2497 = this.blocks;
        var v2498 = this.blockPointer;
        introspect(JAM.policy.p26) {
          var v1816 = v2497[v2498]
        }
        bits$$15 = (v1816 & mask1) << numBits - (this.bitPointer + 1);
        this.blockPointer = this.blockPointer + 1;
        var v2683 = this.blocks;
        var v2684 = this.blockPointer;
        introspect(JAM.policy.p26) {
          var v2500 = v2683[v2684]
        }
        bits$$15 = bits$$15 + (v2500 >> 8 - (numBits - (this.bitPointer + 1)));
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
          var v987 = i$$60 < this.bitPointer + 1;
          for (;v987;) {
            mask1 = mask1 + (1 << i$$60);
            i$$60 = i$$60 + 1;
            v987 = i$$60 < this.bitPointer + 1;
          }
          var v2505 = this.blocks;
          var v2506 = this.blockPointer;
          introspect(JAM.policy.p26) {
            var v1825 = v2505[v2506]
          }
          var bitsFirstBlock = (v1825 & mask1) << numBits - (this.bitPointer + 1);
          this.blockPointer = this.blockPointer + 1;
          var v1828 = this.blocks;
          var v1829 = this.blockPointer;
          introspect(JAM.policy.p26) {
            var v990 = v1828[v1829]
          }
          var bitsSecondBlock = v990 << numBits - (this.bitPointer + 1 + 8);
          this.blockPointer = this.blockPointer + 1;
          i$$60 = 0;
          var v992 = i$$60 < numBits - (this.bitPointer + 1 + 8);
          for (;v992;) {
            mask3 = mask3 + (1 << i$$60);
            i$$60 = i$$60 + 1;
            v992 = i$$60 < numBits - (this.bitPointer + 1 + 8);
          }
          mask3 = mask3 << 8 - (numBits - (this.bitPointer + 1 + 8));
          var v2512 = this.blocks;
          var v2513 = this.blockPointer;
          introspect(JAM.policy.p26) {
            var v1836 = v2512[v2513]
          }
          var bitsThirdBlock = (v1836 & mask3) >> 8 - (numBits - (this.bitPointer + 1 + 8));
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
    var v1840 = version$$8 >= 10;
    if (v1840) {
      v1840 = version$$8 <= 26;
    }
    if (v1840) {
      this.dataLengthMode = 1;
    } else {
      var v1841 = version$$8 >= 27;
      if (v1841) {
        v1841 = version$$8 <= 40;
      }
      if (v1841) {
        this.dataLengthMode = 2;
      }
    }
  }
  this.getNextBits = v116;
  this.NextMode = v117;
  this.getDataLength = v118;
  this.getRomanAndFigureString = v119;
  this.getFigureString = v120;
  this.get8bitByteArray = v121;
  this.getKanjiString = v122;
  JAM.call(this.__defineGetter__, this, ["DataByte", v123], JAM.policy.p23);
  return;
}
function dragenter(e$$7) {
  JAM.call(e$$7.stopPropagation, e$$7, [], JAM.policy.p40);
  JAM.call(e$$7.preventDefault, e$$7, [], JAM.policy.p40);
  return;
}
function dragover(e$$8) {
  JAM.call(e$$8.stopPropagation, e$$8, [], JAM.policy.p40);
  JAM.call(e$$8.preventDefault, e$$8, [], JAM.policy.p40);
  return;
}
function drop(e$$9) {
  JAM.call(e$$9.stopPropagation, e$$9, [], JAM.policy.p40);
  JAM.call(e$$9.preventDefault, e$$9, [], JAM.policy.p40);
  var dt = e$$9.dataTransfer;
  var files = dt.files;
  JAM.call(handleFiles, null, [files], JAM.policy.p39);
  return;
}
function handleFiles(f) {
  function v125(theFile) {
    function v124(e$$10) {
      JAM.call(qrcode.decode, qrcode, [e$$10.target.result], JAM.policy.p39);
      return;
    }
    return v124;
  }
  var o$$1 = [];
  var i$$61 = 0;
  var v1009 = i$$61 < f.length;
  for (;v1009;) {
    var reader$$2 = JAM.new(FileReader, [], JAM.policy.p40);
    var v1007 = reader$$2;
    introspect(JAM.policy.p26) {
      var v1844 = f[i$$61]
    }
    var v2887 = JAM.call(v125, null, [v1844], JAM.policy.p39);
    JAM.set(v1007, "onload", v2887);
    introspect(JAM.policy.p26) {
      var v1008 = f[i$$61]
    }
    JAM.call(reader$$2.readAsDataURL, reader$$2, [v1008], JAM.policy.p39);
    i$$61 = i$$61 + 1;
    v1009 = i$$61 < f.length;
  }
  return;
}
function read(a$$9) {
  JAM.call(alert, null, [a$$9], JAM.policy.p39);
  return;
}
function load() {
  qrcode.callback = read;
  var img$$2 = JAM.call(document.getElementById, document, ["imgpath"], JAM.policy.p24).value;
  JAM.call(qrcode.decode, qrcode, [img$$2], JAM.policy.p39);
  return;
}
function passLine(stringPixels) {
  var coll = JAM.call(stringPixels.split, stringPixels, ["-"], JAM.policy.p24);
  var i$$62 = 0;
  var v1022 = i$$62 < 320;
  for (;v1022;) {
    introspect(JAM.policy.p26) {
      var v1011 = coll[i$$62]
    }
    var intVal = JAM.call(parseInt, null, [v1011], JAM.policy.p39);
    r = intVal >> 16 & 255;
    g = intVal >> 8 & 255;
    b = intVal & 255;
    JAM.set(imageData.data, c + 0, r, JAM.policy.p27);
    JAM.set(imageData.data, c + 1, g, JAM.policy.p27);
    JAM.set(imageData.data, c + 2, b, JAM.policy.p27);
    JAM.set(imageData.data, c + 3, 255, JAM.policy.p27);
    c = c + 4;
    i$$62 = i$$62 + 1;
    v1022 = i$$62 < 320;
  }
  if (c >= 320 * 240 * 4) {
    c = 0;
    JAM.call(gCtx.putImageData, gCtx, [imageData, 0, 0], JAM.policy.p41);
  }
  return;
}
function captureToCanvas() {
  flash = JAM.call(document.getElementById, document, ["embedflash"], JAM.policy.p24);
  JAM.call(flash.ccCapture, flash, [], JAM.policy.p40);
  JAM.call(qrcode.decode, qrcode, [], JAM.policy.p40);
  return;
}
GridSampler = {};
GridSampler.checkAndNudgePoints = v126;
GridSampler.sampleGrid3 = v127;
GridSampler.sampleGridx = v128;
var v1024 = Version;
var v2888 = JAM.new(Array, [31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017], JAM.policy.p22);
v1024.VERSION_DECODE_INFO = v2888;
var v1025 = Version;
var v2889 = JAM.call(buildVersions, null, [], JAM.policy.p40);
v1025.VERSIONS = v2889;
Version.getVersionForNumber = v129;
Version.getProvisionalVersionForDimension = v130;
Version.decodeVersionInformation = v131;
PerspectiveTransform.quadrilateralToQuadrilateral = v132;
PerspectiveTransform.squareToQuadrilateral = v133;
PerspectiveTransform.quadrilateralToSquare = v134;
var FORMAT_INFO_MASK_QR = 21522;
var FORMAT_INFO_DECODE_LOOKUP = JAM.new(Array, [JAM.new(Array, [21522, 0], JAM.policy.p22), JAM.new(Array, [20773, 1], JAM.policy.p22), JAM.new(Array, [24188, 2], JAM.policy.p22), JAM.new(Array, [23371, 3], JAM.policy.p22), JAM.new(Array, [17913, 4], JAM.policy.p22), JAM.new(Array, [16590, 5], JAM.policy.p22), JAM.new(Array, [20375, 6], JAM.policy.p22), JAM.new(Array, [19104, 7], JAM.policy.p22), JAM.new(Array, [30660, 8], JAM.policy.p22), JAM.new(Array, [29427, 9], JAM.policy.p22), JAM.new(Array, 
[32170, 10], JAM.policy.p22), JAM.new(Array, [30877, 11], JAM.policy.p22), JAM.new(Array, [26159, 12], JAM.policy.p22), JAM.new(Array, [25368, 13], JAM.policy.p22), JAM.new(Array, [27713, 14], JAM.policy.p22), JAM.new(Array, [26998, 15], JAM.policy.p22), JAM.new(Array, [5769, 16], JAM.policy.p22), JAM.new(Array, [5054, 17], JAM.policy.p22), JAM.new(Array, [7399, 18], JAM.policy.p22), JAM.new(Array, [6608, 19], JAM.policy.p22), JAM.new(Array, [1890, 20], JAM.policy.p22), JAM.new(Array, [597, 21], 
JAM.policy.p22), JAM.new(Array, [3340, 22], JAM.policy.p22), JAM.new(Array, [2107, 23], JAM.policy.p22), JAM.new(Array, [13663, 24], JAM.policy.p22), JAM.new(Array, [12392, 25], JAM.policy.p22), JAM.new(Array, [16177, 26], JAM.policy.p22), JAM.new(Array, [14854, 27], JAM.policy.p22), JAM.new(Array, [9396, 28], JAM.policy.p22), JAM.new(Array, [8579, 29], JAM.policy.p22), JAM.new(Array, [11994, 30], JAM.policy.p22), JAM.new(Array, [11245, 31], JAM.policy.p22)], JAM.policy.p38);
var BITS_SET_IN_HALF_BYTE = JAM.new(Array, [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4], JAM.policy.p22);
FormatInformation.numBitsDiffering = v135;
FormatInformation.decodeFormatInformation = v136;
FormatInformation.doDecodeFormatInformation = v137;
ErrorCorrectionLevel.forBits = v138;
var L = JAM.new(ErrorCorrectionLevel, [0, 1, "L"], JAM.policy.p22);
var M = JAM.new(ErrorCorrectionLevel, [1, 0, "M"], JAM.policy.p22);
var Q = JAM.new(ErrorCorrectionLevel, [2, 3, "Q"], JAM.policy.p22);
var H = JAM.new(ErrorCorrectionLevel, [3, 2, "H"], JAM.policy.p22);
var FOR_BITS = JAM.new(Array, [M, L, H, Q], JAM.policy.p38);
DataBlock.getDataBlocks = v139;
DataMask = {};
DataMask.forReference = v140;
var v1058 = DataMask;
var v2890 = JAM.new(Array, [JAM.new(DataMask000, [], JAM.policy.p40), JAM.new(DataMask001, [], JAM.policy.p40), JAM.new(DataMask010, [], JAM.policy.p40), JAM.new(DataMask011, [], JAM.policy.p40), JAM.new(DataMask100, [], JAM.policy.p40), JAM.new(DataMask101, [], JAM.policy.p40), JAM.new(DataMask110, [], JAM.policy.p40), JAM.new(DataMask111, [], JAM.policy.p40)], JAM.policy.p38);
v1058.DATA_MASKS = v2890;
var v1059 = GF256;
var v2891 = JAM.new(GF256, [285], JAM.policy.p25);
v1059.QR_CODE_FIELD = v2891;
var v1060 = GF256;
var v2892 = JAM.new(GF256, [301], JAM.policy.p25);
v1060.DATA_MATRIX_FIELD = v2892;
GF256.addOrSubtract = v141;
Decoder = {};
var v1061 = Decoder;
var v2893 = JAM.new(ReedSolomonDecoder, [GF256.QR_CODE_FIELD], JAM.policy.p39);
v1061.rsDecoder = v2893;
Decoder.correctErrors = v142;
Decoder.decode = v143;
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
var gCtx = null;
var gCanvas = null;
var imageData = null;
var ii = 0;
var jj = 0;
var c = 0;
JAM.set(JAM.call(document.getElementById, document, ["decode"], JAM.policy.p24), "onclick", load)

