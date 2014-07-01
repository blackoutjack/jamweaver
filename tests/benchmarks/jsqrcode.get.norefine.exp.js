function v154(patterns) {
  function distance(pattern1$$1, pattern2$$1) {
    var v155 = pattern1$$1.X;
    var v156 = pattern2$$1.X;
    xDiff = v155 - v156;
    var v157 = pattern1$$1.Y;
    var v158 = pattern2$$1.Y;
    yDiff = v157 - v158;
    var v1071 = xDiff * xDiff;
    var v1072 = yDiff * yDiff;
    var v159 = v1071 + v1072;
    return Math.sqrt(v159)
  }
  function crossProductZ(pointA$$1, pointB$$1, pointC$$1) {
    var bX = pointB$$1.x;
    var bY = pointB$$1.y;
    var v1854 = pointC$$1.x;
    var v1073 = v1854 - bX;
    var v1855 = pointA$$1.y;
    var v1074 = v1855 - bY;
    var v160 = v1073 * v1074;
    var v1856 = pointC$$1.y;
    var v1075 = v1856 - bY;
    var v1857 = pointA$$1.x;
    var v1076 = v1857 - bX;
    var v161 = v1075 * v1076;
    return v160 - v161
  }
  var v162 = patterns[0];
  var v163 = patterns[1];
  var zeroOneDistance = distance(v162, v163);
  var v164 = patterns[1];
  var v165 = patterns[2];
  var oneTwoDistance = distance(v164, v165);
  var v166 = patterns[0];
  var v167 = patterns[2];
  var zeroTwoDistance = distance(v166, v167);
  var pointA;
  var pointB;
  var pointC;
  var v1077 = oneTwoDistance >= zeroOneDistance;
  if(v1077) {
    v1077 = oneTwoDistance >= zeroTwoDistance
  }
  var v169 = v1077;
  if(v169) {
    pointB = patterns[0];
    pointA = patterns[1];
    pointC = patterns[2]
  }else {
    var v1078 = zeroTwoDistance >= oneTwoDistance;
    if(v1078) {
      v1078 = zeroTwoDistance >= zeroOneDistance
    }
    var v168 = v1078;
    if(v168) {
      pointB = patterns[1];
      pointA = patterns[0];
      pointC = patterns[2]
    }else {
      pointB = patterns[2];
      pointA = patterns[0];
      pointC = patterns[1]
    }
  }
  var v1079 = crossProductZ(pointA, pointB, pointC);
  var v170 = v1079 < 0;
  if(v170) {
    var temp$$5 = pointA;
    pointA = pointC;
    pointC = temp$$5
  }
  patterns[0] = pointA;
  patterns[1] = pointB;
  patterns[2] = pointC;
  return
}
function v153(from, to) {
  var v1858 = to || from;
  var v1080 = v1858 + 1;
  var v1859 = !v1080;
  if(v1859) {
    v1080 = this.length
  }
  var v171 = v1080;
  var rest = this.slice(v171);
  var v172;
  var v1082 = from < 0;
  if(v1082) {
    var v1081 = this.length;
    v172 = v1081 + from
  }else {
    v172 = from
  }
  this.length = v172;
  var v173 = this.push;
  return JAMScript.call(v173.apply, v173, [this, rest])
}
function v152() {
  var v1083 = qrcode.width;
  var v1084 = qrcode.height;
  var v174 = v1083 * v1084;
  var ret$$1 = new Array(v174);
  var y$$44 = 0;
  var v1085 = qrcode.height;
  var v177 = y$$44 < v1085;
  for(;v177;) {
    var x$$62 = 0;
    var v1086 = qrcode.width;
    var v176 = x$$62 < v1086;
    for(;v176;) {
      var gray$$1 = JAMScript.call(qrcode.getPixel, qrcode, [x$$62, y$$44]);
      var v1860 = qrcode.width;
      var v1087 = y$$44 * v1860;
      var v175 = x$$62 + v1087;
      ret$$1[v175] = gray$$1;
      x$$62 = x$$62 + 1;
      var v1088 = qrcode.width;
      v176 = x$$62 < v1088
    }
    y$$44 = y$$44 + 1;
    var v1089 = qrcode.height;
    v177 = y$$44 < v1089
  }
  return ret$$1
}
function v151(grayScale) {
  var middle$$1 = JAMScript.call(qrcode.getMiddleBrightnessPerArea, qrcode, [grayScale]);
  var sqrtNumArea = middle$$1.length;
  var v1090 = qrcode.width;
  var v178 = v1090 / sqrtNumArea;
  var areaWidth$$1 = Math.floor(v178);
  var v1091 = qrcode.height;
  var v179 = v1091 / sqrtNumArea;
  var areaHeight$$1 = Math.floor(v179);
  var v1092 = qrcode.height;
  var v1093 = qrcode.width;
  var v180 = v1092 * v1093;
  var bitmap = new Array(v180);
  var ay$$1 = 0;
  var v185 = ay$$1 < sqrtNumArea;
  for(;v185;) {
    var ax$$1 = 0;
    var v184 = ax$$1 < sqrtNumArea;
    for(;v184;) {
      var dy$$6 = 0;
      var v183 = dy$$6 < areaHeight$$1;
      for(;v183;) {
        var dx$$6 = 0;
        var v182 = dx$$6 < areaWidth$$1;
        for(;v182;) {
          var v1861 = areaWidth$$1 * ax$$1;
          var v1094 = v1861 + dx$$6;
          var v2507 = areaHeight$$1 * ay$$1;
          var v1862 = v2507 + dy$$6;
          var v1863 = qrcode.width;
          var v1095 = v1862 * v1863;
          var v181 = v1094 + v1095;
          var v1096;
          var v2836 = areaWidth$$1 * ax$$1;
          var v2788 = v2836 + dx$$6;
          var v2858 = areaHeight$$1 * ay$$1;
          var v2837 = v2858 + dy$$6;
          var v2838 = qrcode.width;
          var v2789 = v2837 * v2838;
          var v2708 = v2788 + v2789;
          introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
            var v2508 = grayScale[v2708]
          }
          introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
            var v2709 = middle$$1[ax$$1]
          }
          introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
            var v2509 = v2709[ay$$1]
          }
          var v1864 = v2508 < v2509;
          if(v1864) {
            v1096 = true
          }else {
            v1096 = false
          }
          bitmap[v181] = v1096;
          dx$$6 = dx$$6 + 1;
          v182 = dx$$6 < areaWidth$$1
        }
        dy$$6 = dy$$6 + 1;
        v183 = dy$$6 < areaHeight$$1
      }
      ax$$1 = ax$$1 + 1;
      v184 = ax$$1 < sqrtNumArea
    }
    ay$$1 = ay$$1 + 1;
    v185 = ay$$1 < sqrtNumArea
  }
  return bitmap
}
function v150(image$$9) {
  var numSqrtArea = 4;
  var v1097 = qrcode.width;
  var v186 = v1097 / numSqrtArea;
  var areaWidth = Math.floor(v186);
  var v1098 = qrcode.height;
  var v187 = v1098 / numSqrtArea;
  var areaHeight = Math.floor(v187);
  var minmax = new Array(numSqrtArea);
  var i$$46 = 0;
  var v190 = i$$46 < numSqrtArea;
  for(;v190;) {
    var v2865 = new Array(numSqrtArea);
    minmax[i$$46] = v2865;
    var i2 = 0;
    var v189 = i2 < numSqrtArea;
    for(;v189;) {
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v188 = minmax[i$$46]
      }
      var v2866 = new Array(0, 0);
      v188[i2] = v2866;
      i2 = i2 + 1;
      v189 = i2 < numSqrtArea
    }
    i$$46 = i$$46 + 1;
    v190 = i$$46 < numSqrtArea
  }
  var ay = 0;
  var v200 = ay < numSqrtArea;
  for(;v200;) {
    var ax = 0;
    var v199 = ax < numSqrtArea;
    for(;v199;) {
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v1099 = minmax[ax]
      }
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v191 = v1099[ay]
      }
      v191[0] = 255;
      var dy$$5 = 0;
      var v198 = dy$$5 < areaHeight;
      for(;v198;) {
        var dx$$5 = 0;
        var v197 = dx$$5 < areaWidth;
        for(;v197;) {
          var v1865 = areaWidth * ax;
          var v1100 = v1865 + dx$$5;
          var v2510 = areaHeight * ay;
          var v1866 = v2510 + dy$$5;
          var v1867 = qrcode.width;
          var v1101 = v1866 * v1867;
          var v192 = v1100 + v1101;
          introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
            var target$$37 = image$$9[v192]
          }
          introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
            var v2511 = minmax[ax]
          }
          introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
            var v1868 = v2511[ay]
          }
          var v1102 = v1868[0];
          var v194 = target$$37 < v1102;
          if(v194) {
            introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
              var v1103 = minmax[ax]
            }
            introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
              var v193 = v1103[ay]
            }
            v193[0] = target$$37
          }
          introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
            var v2512 = minmax[ax]
          }
          introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
            var v1869 = v2512[ay]
          }
          var v1104 = v1869[1];
          var v196 = target$$37 > v1104;
          if(v196) {
            introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
              var v1105 = minmax[ax]
            }
            introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
              var v195 = v1105[ay]
            }
            v195[1] = target$$37
          }
          dx$$5 = dx$$5 + 1;
          v197 = dx$$5 < areaWidth
        }
        dy$$5 = dy$$5 + 1;
        v198 = dy$$5 < areaHeight
      }
      ax = ax + 1;
      v199 = ax < numSqrtArea
    }
    ay = ay + 1;
    v200 = ay < numSqrtArea
  }
  var middle = new Array(numSqrtArea);
  var i3 = 0;
  var v201 = i3 < numSqrtArea;
  for(;v201;) {
    var v2867 = new Array(numSqrtArea);
    middle[i3] = v2867;
    i3 = i3 + 1;
    v201 = i3 < numSqrtArea
  }
  ay = 0;
  var v205 = ay < numSqrtArea;
  for(;v205;) {
    ax = 0;
    var v204 = ax < numSqrtArea;
    for(;v204;) {
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v202 = middle[ax]
      }
      var v203 = ay;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v2790 = minmax[ax]
      }
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v2710 = v2790[ay]
      }
      var v2513 = v2710[0];
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v2791 = minmax[ax]
      }
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v2711 = v2791[ay]
      }
      var v2514 = v2711[1];
      var v1870 = v2513 + v2514;
      var v1106 = v1870 / 2;
      var v2868 = Math.floor(v1106);
      v202[v203] = v2868;
      ax = ax + 1;
      v204 = ax < numSqrtArea
    }
    ay = ay + 1;
    v205 = ay < numSqrtArea
  }
  return middle
}
function v149(th) {
  var v1107 = qrcode.width;
  var v1108 = qrcode.height;
  var v206 = v1107 * v1108;
  var ret = new Array(v206);
  var y$$43 = 0;
  var v1109 = qrcode.height;
  var v209 = y$$43 < v1109;
  for(;v209;) {
    var x$$61 = 0;
    var v1110 = qrcode.width;
    var v208 = x$$61 < v1110;
    for(;v208;) {
      var gray = JAMScript.call(qrcode.getPixel, qrcode, [x$$61, y$$43]);
      var v1871 = qrcode.width;
      var v1111 = y$$43 * v1871;
      var v207 = x$$61 + v1111;
      var v1112;
      var v1872 = gray <= th;
      if(v1872) {
        v1112 = true
      }else {
        v1112 = false
      }
      ret[v207] = v1112;
      x$$61 = x$$61 + 1;
      var v1113 = qrcode.width;
      v208 = x$$61 < v1113
    }
    y$$43 = y$$43 + 1;
    var v1114 = qrcode.height;
    v209 = y$$43 < v1114
  }
  return ret
}
function v148(x$$60, y$$42) {
  var v1115 = qrcode.width;
  var v210 = v1115 < x$$60;
  if(v210) {
    throw"point error";
  }
  var v1116 = qrcode.height;
  var v211 = v1116 < y$$42;
  if(v211) {
    throw"point error";
  }
  var v212 = x$$60 * 4;
  var v1873 = qrcode.width;
  var v1117 = y$$42 * v1873;
  var v213 = v1117 * 4;
  var point$$1 = v212 + v213;
  var v2792 = qrcode.imagedata;
  var v2712 = v2792.data;
  introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
    var v2515 = v2712[point$$1]
  }
  var v1874 = v2515 * 33;
  var v2793 = qrcode.imagedata;
  var v2713 = v2793.data;
  var v2714 = point$$1 + 1;
  introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
    var v2516 = v2713[v2714]
  }
  var v1875 = v2516 * 34;
  var v1118 = v1874 + v1875;
  var v2715 = qrcode.imagedata;
  var v2517 = v2715.data;
  var v2518 = point$$1 + 2;
  introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
    var v1876 = v2517[v2518]
  }
  var v1119 = v1876 * 33;
  var v214 = v1118 + v1119;
  p = v214 / 100;
  return p
}
function v147(ctx) {
  var v215 = new Date;
  var start$$4 = v215.getTime();
  var v216 = JAMScript.call(qrcode.grayscale, qrcode, []);
  var image$$8 = JAMScript.call(qrcode.grayScaleToBitmap, qrcode, [v216]);
  var v227 = qrcode.debug;
  if(v227) {
    var y$$41 = 0;
    var v1120 = qrcode.height;
    var v225 = y$$41 < v1120;
    for(;v225;) {
      var x$$59 = 0;
      var v1121 = qrcode.width;
      var v224 = x$$59 < v1121;
      for(;v224;) {
        var v217 = x$$59 * 4;
        var v1877 = qrcode.width;
        var v1122 = y$$41 * v1877;
        var v218 = v1122 * 4;
        var point = v217 + v218;
        var v1123 = qrcode.imagedata;
        var v219 = v1123.data;
        var v1124;
        var v2794 = qrcode.width;
        var v2716 = y$$41 * v2794;
        var v2519 = x$$59 + v2716;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v1878 = image$$8[v2519]
        }
        if(v1878) {
          v1124 = 0
        }else {
          v1124 = 0
        }
        v219[point] = v1124;
        var v1125 = qrcode.imagedata;
        var v220 = v1125.data;
        var v221 = point + 1;
        var v1126;
        var v2795 = qrcode.width;
        var v2717 = y$$41 * v2795;
        var v2520 = x$$59 + v2717;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v1879 = image$$8[v2520]
        }
        if(v1879) {
          v1126 = 0
        }else {
          v1126 = 0
        }
        v220[v221] = v1126;
        var v1127 = qrcode.imagedata;
        var v222 = v1127.data;
        var v223 = point + 2;
        var v1128;
        var v2796 = qrcode.width;
        var v2718 = y$$41 * v2796;
        var v2521 = x$$59 + v2718;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v1880 = image$$8[v2521]
        }
        if(v1880) {
          v1128 = 255
        }else {
          v1128 = 0
        }
        v222[v223] = v1128;
        x$$59 = x$$59 + 1;
        var v1129 = qrcode.width;
        v224 = x$$59 < v1129
      }
      y$$41 = y$$41 + 1;
      var v1130 = qrcode.height;
      v225 = y$$41 < v1130
    }
    var v226 = qrcode.imagedata;
    ctx.putImageData(v226, 0, 0)
  }
  var detector = new Detector(image$$8);
  var qRCodeMatrix = JAMScript.call(detector.detect, detector, []);
  var v229 = qrcode.debug;
  if(v229) {
    var v228 = qrcode.imagedata;
    ctx.putImageData(v228, 0, 0)
  }
  var v230 = qRCodeMatrix.bits;
  var reader$$1 = JAMScript.call(Decoder.decode, Decoder, [v230]);
  var data$$18 = reader$$1.DataByte;
  var str$$6 = "";
  var i$$45 = 0;
  var v1131 = data$$18.length;
  var v232 = i$$45 < v1131;
  for(;v232;) {
    var j$$24 = 0;
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v1881 = data$$18[i$$45]
    }
    var v1132 = v1881.length;
    var v231 = j$$24 < v1132;
    for(;v231;) {
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v2522 = data$$18[i$$45]
      }
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v1882 = v2522[j$$24]
      }
      var v1133 = String.fromCharCode(v1882);
      str$$6 = str$$6 + v1133;
      j$$24 = j$$24 + 1;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v1883 = data$$18[i$$45]
      }
      var v1134 = v1883.length;
      v231 = j$$24 < v1134
    }
    i$$45 = i$$45 + 1;
    var v1135 = data$$18.length;
    v232 = i$$45 < v1135
  }
  var v233 = new Date;
  var end$$1 = v233.getTime();
  var time = end$$1 - start$$4;
  JAMScript.call(console.log, console, [time]);
  return JAMScript.call(qrcode.decode_utf8, qrcode, [str$$6])
}
function v146(s$$4) {
  var v234 = escape(s$$4);
  return decodeURIComponent(v234)
}
function v145(src$$1) {
  function v144() {
    var canvas_qr$$1 = document.createElement("canvas");
    var context$$1 = canvas_qr$$1.getContext("2d");
    var canvas_out = document.getElementById("out-canvas");
    var v235 = canvas_out != null;
    if(v235) {
      var outctx = canvas_out.getContext("2d");
      outctx.clearRect(0, 0, 320, 240);
      outctx.drawImage(image$$7, 0, 0, 320, 240)
    }
    canvas_qr$$1.width = image$$7.width;
    canvas_qr$$1.height = image$$7.height;
    context$$1.drawImage(image$$7, 0, 0);
    qrcode.width = image$$7.width;
    qrcode.height = image$$7.height;
    try {
      var v236 = qrcode;
      var v1136 = image$$7.width;
      var v1137 = image$$7.height;
      var v2869 = context$$1.getImageData(0, 0, v1136, v1137);
      v236.imagedata = v2869
    }catch(e$$5) {
      qrcode.result = "Cross domain image reading not supported in your browser! Save it to your computer then drag and drop the file!";
      var v1138 = qrcode.callback;
      var v238 = v1138 != null;
      if(v238) {
        var v237 = qrcode.result;
        JAMScript.call(qrcode.callback, qrcode, [v237])
      }
      return
    }
    try {
      var v239 = qrcode;
      var v2870 = JAMScript.call(qrcode.process, qrcode, [context$$1]);
      v239.result = v2870
    }catch(e$$6) {
      JAMScript.call(console.log, console, [e$$6]);
      qrcode.result = "error decoding QR Code"
    }
    var v1139 = qrcode.callback;
    var v241 = v1139 != null;
    if(v241) {
      var v240 = qrcode.result;
      JAMScript.call(qrcode.callback, qrcode, [v240])
    }
    return
  }
  var v1140 = arguments.length;
  var v246 = v1140 == 0;
  if(v246) {
    var canvas_qr = document.getElementById("qr-canvas");
    var context = canvas_qr.getContext("2d");
    qrcode.width = canvas_qr.width;
    qrcode.height = canvas_qr.height;
    var v242 = qrcode;
    var v1141 = qrcode.width;
    var v1142 = qrcode.height;
    var v2871 = context.getImageData(0, 0, v1141, v1142);
    v242.imagedata = v2871;
    var v243 = qrcode;
    var v2872 = JAMScript.call(qrcode.process, qrcode, [context]);
    v243.result = v2872;
    var v1143 = qrcode.callback;
    var v245 = v1143 != null;
    if(v245) {
      var v244 = qrcode.result;
      JAMScript.call(qrcode.callback, qrcode, [v244])
    }
    return qrcode.result
  }else {
    var image$$7 = new Image;
    JAMScript.set(image$$7, "onload", v144);
    introspect(JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747) {
      image$$7.src = src$$1
    }
  }
  return
}
function v143(bits$$13) {
  var parser = new BitMatrixParser(bits$$13);
  var version$$7 = JAMScript.call(parser.readVersion, parser, []);
  var v247 = JAMScript.call(parser.readFormatInformation, parser, []);
  var ecLevel$$2 = v247.ErrorCorrectionLevel;
  var codewords$$1 = JAMScript.call(parser.readCodewords, parser, []);
  var dataBlocks = JAMScript.call(DataBlock.getDataBlocks, DataBlock, [codewords$$1, version$$7, ecLevel$$2]);
  var totalBytes = 0;
  var i$$44 = 0;
  var v1144 = dataBlocks.Length;
  var v248 = i$$44 < v1144;
  for(;v248;) {
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v1884 = dataBlocks[i$$44]
    }
    var v1145 = v1884.NumDataCodewords;
    totalBytes = totalBytes + v1145;
    i$$44 = i$$44 + 1;
    var v1146 = dataBlocks.Length;
    v248 = i$$44 < v1146
  }
  var resultBytes = new Array(totalBytes);
  var resultOffset$$1 = 0;
  var j$$23 = 0;
  var v1147 = dataBlocks.length;
  var v251 = j$$23 < v1147;
  for(;v251;) {
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var dataBlock = dataBlocks[j$$23]
    }
    var codewordBytes$$1 = dataBlock.Codewords;
    var numDataCodewords$$3 = dataBlock.NumDataCodewords;
    JAMScript.call(Decoder.correctErrors, Decoder, [codewordBytes$$1, numDataCodewords$$3]);
    i$$44 = 0;
    var v250 = i$$44 < numDataCodewords$$3;
    for(;v250;) {
      var v249 = resultOffset$$1;
      resultOffset$$1 = resultOffset$$1 + 1;
      resultBytes[v249] = codewordBytes$$1[i$$44];
      i$$44 = i$$44 + 1;
      v250 = i$$44 < numDataCodewords$$3
    }
    j$$23 = j$$23 + 1;
    var v1148 = dataBlocks.length;
    v251 = j$$23 < v1148
  }
  var v252 = version$$7.VersionNumber;
  var v253 = ecLevel$$2.Bits;
  var reader = new QRCodeDataBlockReader(resultBytes, v252, v253);
  return reader
}
function v142(codewordBytes, numDataCodewords$$2) {
  var numCodewords$$1 = codewordBytes.length;
  var codewordsInts = new Array(numCodewords$$1);
  var i$$43 = 0;
  var v255 = i$$43 < numCodewords$$1;
  for(;v255;) {
    var v254 = i$$43;
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v1149 = codewordBytes[i$$43]
    }
    codewordsInts[v254] = v1149 & 255;
    i$$43 = i$$43 + 1;
    v255 = i$$43 < numCodewords$$1
  }
  var v256 = codewordBytes.length;
  var numECCodewords = v256 - numDataCodewords$$2;
  try {
    var v257 = Decoder.rsDecoder;
    JAMScript.call(v257.decode, v257, [codewordsInts, numECCodewords])
  }catch(rse) {
    throw rse;
  }
  i$$43 = 0;
  var v258 = i$$43 < numDataCodewords$$2;
  for(;v258;) {
    codewordBytes[i$$43] = codewordsInts[i$$43];
    i$$43 = i$$43 + 1;
    v258 = i$$43 < numDataCodewords$$2
  }
  return
}
function v141(a$$7, b$$4) {
  return a$$7 ^ b$$4
}
function v140(reference) {
  var v1150 = reference < 0;
  var v1885 = !v1150;
  if(v1885) {
    v1150 = reference > 7
  }
  var v259 = v1150;
  if(v259) {
    throw"System.ArgumentException";
  }
  var v260 = DataMask.DATA_MASKS;
  introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
    return v260[reference]
  }
}
function v139(rawCodewords, version$$5, ecLevel$$1) {
  var v1151 = rawCodewords.length;
  var v1152 = version$$5.TotalCodewords;
  var v261 = v1151 != v1152;
  if(v261) {
    throw"ArgumentException";
  }
  var ecBlocks = JAMScript.call(version$$5.getECBlocksForLevel, version$$5, [ecLevel$$1]);
  var totalBlocks = 0;
  var ecBlockArray = ecBlocks.ecBlocks;
  var i$$11 = 0;
  var v1153 = ecBlockArray.length;
  var v262 = i$$11 < v1153;
  for(;v262;) {
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v1886 = ecBlockArray[i$$11]
    }
    var v1154 = v1886.Count;
    totalBlocks = totalBlocks + v1154;
    i$$11 = i$$11 + 1;
    var v1155 = ecBlockArray.length;
    v262 = i$$11 < v1155
  }
  var result$$1 = new Array(totalBlocks);
  var numResultBlocks = 0;
  var j = 0;
  var v1156 = ecBlockArray.length;
  var v266 = j < v1156;
  for(;v266;) {
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var ecBlock$$1 = ecBlockArray[j]
    }
    i$$11 = 0;
    var v1157 = ecBlock$$1.Count;
    var v265 = i$$11 < v1157;
    for(;v265;) {
      var numDataCodewords$$1 = ecBlock$$1.DataCodewords;
      var v263 = ecBlocks.ECCodewordsPerBlock;
      var numBlockCodewords = v263 + numDataCodewords$$1;
      var v264 = numResultBlocks;
      numResultBlocks = numResultBlocks + 1;
      var v1158 = new Array(numBlockCodewords);
      var v2873 = new DataBlock(numDataCodewords$$1, v1158);
      result$$1[v264] = v2873;
      i$$11 = i$$11 + 1;
      var v1159 = ecBlock$$1.Count;
      v265 = i$$11 < v1159
    }
    j = j + 1;
    var v1160 = ecBlockArray.length;
    v266 = j < v1160
  }
  var v1161 = result$$1[0];
  var v267 = v1161.codewords;
  var shorterBlocksTotalCodewords = v267.length;
  var v268 = result$$1.length;
  var longerBlocksStartAt = v268 - 1;
  var v271 = longerBlocksStartAt >= 0;
  for(;v271;) {
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v1162 = result$$1[longerBlocksStartAt]
    }
    var v269 = v1162.codewords;
    var numCodewords = v269.length;
    var v270 = numCodewords == shorterBlocksTotalCodewords;
    if(v270) {
      break
    }
    longerBlocksStartAt = longerBlocksStartAt - 1;
    v271 = longerBlocksStartAt >= 0
  }
  longerBlocksStartAt = longerBlocksStartAt + 1;
  var v272 = ecBlocks.ECCodewordsPerBlock;
  var shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - v272;
  var rawCodewordsOffset = 0;
  i$$11 = 0;
  var v275 = i$$11 < shorterBlocksNumDataCodewords;
  for(;v275;) {
    j = 0;
    var v274 = j < numResultBlocks;
    for(;v274;) {
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v1163 = result$$1[j]
      }
      var v273 = v1163.codewords;
      var v1164 = rawCodewordsOffset;
      rawCodewordsOffset = rawCodewordsOffset + 1;
      v273[i$$11] = rawCodewords[v1164];
      j = j + 1;
      v274 = j < numResultBlocks
    }
    i$$11 = i$$11 + 1;
    v275 = i$$11 < shorterBlocksNumDataCodewords
  }
  j = longerBlocksStartAt;
  var v277 = j < numResultBlocks;
  for(;v277;) {
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v1165 = result$$1[j]
    }
    var v276 = v1165.codewords;
    var v1166 = rawCodewordsOffset;
    rawCodewordsOffset = rawCodewordsOffset + 1;
    v276[shorterBlocksNumDataCodewords] = rawCodewords[v1166];
    j = j + 1;
    v277 = j < numResultBlocks
  }
  var v1167 = result$$1[0];
  var v278 = v1167.codewords;
  var max$$4 = v278.length;
  i$$11 = shorterBlocksNumDataCodewords;
  var v282 = i$$11 < max$$4;
  for(;v282;) {
    j = 0;
    var v281 = j < numResultBlocks;
    for(;v281;) {
      var v279;
      var v1168 = j < longerBlocksStartAt;
      if(v1168) {
        v279 = i$$11
      }else {
        v279 = i$$11 + 1
      }
      var iOffset = v279;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v1169 = result$$1[j]
      }
      var v280 = v1169.codewords;
      var v1170 = rawCodewordsOffset;
      rawCodewordsOffset = rawCodewordsOffset + 1;
      v280[iOffset] = rawCodewords[v1170];
      j = j + 1;
      v281 = j < numResultBlocks
    }
    i$$11 = i$$11 + 1;
    v282 = i$$11 < max$$4
  }
  return result$$1
}
function v138(bits$$4) {
  var v1171 = bits$$4 < 0;
  var v1888 = !v1171;
  if(v1888) {
    var v1887 = FOR_BITS.Length;
    v1171 = bits$$4 >= v1887
  }
  var v283 = v1171;
  if(v283) {
    throw"ArgumentException";
  }
  introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
    return FOR_BITS[bits$$4]
  }
}
function v137(maskedFormatInfo$$1) {
  var bestDifference$$1 = 4294967295;
  var bestFormatInfo = 0;
  var i$$8 = 0;
  var v1172 = FORMAT_INFO_DECODE_LOOKUP.length;
  var v287 = i$$8 < v1172;
  for(;v287;) {
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var decodeInfo = FORMAT_INFO_DECODE_LOOKUP[i$$8]
    }
    var targetInfo = decodeInfo[0];
    var v285 = targetInfo == maskedFormatInfo$$1;
    if(v285) {
      var v284 = decodeInfo[1];
      return new FormatInformation(v284)
    }
    var bitsDifference$$1 = JAMScript.call(this.numBitsDiffering, this, [maskedFormatInfo$$1, targetInfo]);
    var v286 = bitsDifference$$1 < bestDifference$$1;
    if(v286) {
      bestFormatInfo = decodeInfo[1];
      bestDifference$$1 = bitsDifference$$1
    }
    i$$8 = i$$8 + 1;
    var v1173 = FORMAT_INFO_DECODE_LOOKUP.length;
    v287 = i$$8 < v1173
  }
  var v288 = bestDifference$$1 <= 3;
  if(v288) {
    return new FormatInformation(bestFormatInfo)
  }
  return null
}
function v136(maskedFormatInfo) {
  var formatInfo$$1 = JAMScript.call(FormatInformation.doDecodeFormatInformation, FormatInformation, [maskedFormatInfo]);
  var v289 = formatInfo$$1 != null;
  if(v289) {
    return formatInfo$$1
  }
  var v290 = maskedFormatInfo ^ FORMAT_INFO_MASK_QR;
  return JAMScript.call(FormatInformation.doDecodeFormatInformation, FormatInformation, [v290])
}
function v135(a, b$$1) {
  a = a ^ b$$1;
  var v2859 = a & 15;
  introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
    var v2839 = BITS_SET_IN_HALF_BYTE[v2859]
  }
  var v2864 = URShift(a, 4);
  var v2860 = v2864 & 15;
  introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
    var v2840 = BITS_SET_IN_HALF_BYTE[v2860]
  }
  var v2797 = v2839 + v2840;
  var v2861 = URShift(a, 8);
  var v2841 = v2861 & 15;
  introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
    var v2798 = BITS_SET_IN_HALF_BYTE[v2841]
  }
  var v2719 = v2797 + v2798;
  var v2842 = URShift(a, 12);
  var v2799 = v2842 & 15;
  introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
    var v2720 = BITS_SET_IN_HALF_BYTE[v2799]
  }
  var v2523 = v2719 + v2720;
  var v2800 = URShift(a, 16);
  var v2721 = v2800 & 15;
  introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
    var v2524 = BITS_SET_IN_HALF_BYTE[v2721]
  }
  var v1889 = v2523 + v2524;
  var v2722 = URShift(a, 20);
  var v2525 = v2722 & 15;
  introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
    var v1890 = BITS_SET_IN_HALF_BYTE[v2525]
  }
  var v1174 = v1889 + v1890;
  var v2526 = URShift(a, 24);
  var v1891 = v2526 & 15;
  introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
    var v1175 = BITS_SET_IN_HALF_BYTE[v1891]
  }
  var v291 = v1174 + v1175;
  var v1892 = URShift(a, 28);
  var v1176 = v1892 & 15;
  introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
    var v292 = BITS_SET_IN_HALF_BYTE[v1176]
  }
  return v291 + v292
}
function v134(x0$$4, y0$$4, x1$$5, y1$$5, x2$$3, y2$$3, x3$$2, y3$$2) {
  var v293 = JAMScript.call(this.squareToQuadrilateral, this, [x0$$4, y0$$4, x1$$5, y1$$5, x2$$3, y2$$3, x3$$2, y3$$2]);
  return JAMScript.call(v293.buildAdjoint, v293, [])
}
function v133(x0$$3, y0$$3, x1$$4, y1$$4, x2$$2, y2$$2, x3$$1, y3$$1) {
  dy2 = y3$$1 - y2$$2;
  var v1177 = y0$$3 - y1$$4;
  var v294 = v1177 + y2$$2;
  dy3 = v294 - y3$$1;
  var v1178 = dy2 == 0;
  if(v1178) {
    v1178 = dy3 == 0
  }
  var v308 = v1178;
  if(v308) {
    var v295 = x1$$4 - x0$$3;
    var v296 = x2$$2 - x1$$4;
    var v297 = y1$$4 - y0$$3;
    var v298 = y2$$2 - y1$$4;
    return new PerspectiveTransform(v295, v296, x0$$3, v297, v298, y0$$3, 0, 0, 1)
  }else {
    dx1 = x1$$4 - x2$$2;
    dx2 = x3$$1 - x2$$2;
    var v1179 = x0$$3 - x1$$4;
    var v299 = v1179 + x2$$2;
    dx3 = v299 - x3$$1;
    dy1 = y1$$4 - y2$$2;
    var v300 = dx1 * dy2;
    var v301 = dx2 * dy1;
    denominator = v300 - v301;
    var v1180 = dx3 * dy2;
    var v1181 = dx2 * dy3;
    var v302 = v1180 - v1181;
    a13 = v302 / denominator;
    var v1182 = dx1 * dy3;
    var v1183 = dx3 * dy1;
    var v303 = v1182 - v1183;
    a23 = v303 / denominator;
    var v1184 = x1$$4 - x0$$3;
    var v1185 = a13 * x1$$4;
    var v304 = v1184 + v1185;
    var v1186 = x3$$1 - x0$$3;
    var v1187 = a23 * x3$$1;
    var v305 = v1186 + v1187;
    var v1188 = y1$$4 - y0$$3;
    var v1189 = a13 * y1$$4;
    var v306 = v1188 + v1189;
    var v1190 = y3$$1 - y0$$3;
    var v1191 = a23 * y3$$1;
    var v307 = v1190 + v1191;
    return new PerspectiveTransform(v304, v305, x0$$3, v306, v307, y0$$3, a13, a23, 1)
  }
  return
}
function v132(x0$$2, y0$$2, x1$$3, y1$$3, x2$$1, y2$$1, x3, y3, x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p) {
  var qToS = JAMScript.call(this.quadrilateralToSquare, this, [x0$$2, y0$$2, x1$$3, y1$$3, x2$$1, y2$$1, x3, y3]);
  var sToQ = JAMScript.call(this.squareToQuadrilateral, this, [x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p]);
  return JAMScript.call(sToQ.times, sToQ, [qToS])
}
function v131(versionBits) {
  var bestDifference = 4294967295;
  var bestVersion = 0;
  var i$$4 = 0;
  var v1893 = Version.VERSION_DECODE_INFO;
  var v1192 = v1893.length;
  var v313 = i$$4 < v1192;
  for(;v313;) {
    var v309 = Version.VERSION_DECODE_INFO;
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var targetVersion = v309[i$$4]
    }
    var v311 = targetVersion == versionBits;
    if(v311) {
      var v310 = i$$4 + 7;
      return JAMScript.call(this.getVersionForNumber, this, [v310])
    }
    var bitsDifference = JAMScript.call(FormatInformation.numBitsDiffering, FormatInformation, [versionBits, targetVersion]);
    var v312 = bitsDifference < bestDifference;
    if(v312) {
      bestVersion = i$$4 + 7;
      bestDifference = bitsDifference
    }
    i$$4 = i$$4 + 1;
    var v1894 = Version.VERSION_DECODE_INFO;
    var v1193 = v1894.length;
    v313 = i$$4 < v1193
  }
  var v314 = bestDifference <= 3;
  if(v314) {
    return JAMScript.call(this.getVersionForNumber, this, [bestVersion])
  }
  return null
}
function v130(dimension$$3) {
  var v1194 = dimension$$3 % 4;
  var v315 = v1194 != 1;
  if(v315) {
    throw"Error getProvisionalVersionForDimension";
  }
  try {
    var v1195 = dimension$$3 - 17;
    var v316 = v1195 >> 2;
    return JAMScript.call(Version.getVersionForNumber, Version, [v316])
  }catch(iae) {
    throw"Error getVersionForNumber";
  }
  return
}
function v129(versionNumber$$1) {
  var v1196 = versionNumber$$1 < 1;
  var v1895 = !v1196;
  if(v1895) {
    v1196 = versionNumber$$1 > 40
  }
  var v317 = v1196;
  if(v317) {
    throw"ArgumentException";
  }
  var v318 = Version.VERSIONS;
  var v319 = versionNumber$$1 - 1;
  introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
    return v318[v319]
  }
}
function v128(image$$4, dimension$$1, p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY) {
  var transform$$1 = JAMScript.call(PerspectiveTransform.quadrilateralToQuadrilateral, PerspectiveTransform, [p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY]);
  return JAMScript.call(GridSampler.sampleGrid3, GridSampler, [image$$4, dimension$$1, transform$$1])
}
function v127(image$$3, dimension, transform) {
  var bits = new BitMatrix(dimension);
  var v320 = dimension << 1;
  var points$$1 = new Array(v320);
  var y$$32 = 0;
  var v336 = y$$32 < dimension;
  for(;v336;) {
    var max = points$$1.length;
    var iValue = y$$32 + 0.5;
    var x$$49 = 0;
    var v323 = x$$49 < max;
    for(;v323;) {
      var v321 = x$$49;
      var v1197 = x$$49 >> 1;
      points$$1[v321] = v1197 + 0.5;
      var v322 = x$$49 + 1;
      points$$1[v322] = iValue;
      x$$49 = x$$49 + 2;
      v323 = x$$49 < max
    }
    JAMScript.call(transform.transformPoints1, transform, [points$$1]);
    JAMScript.call(GridSampler.checkAndNudgePoints, GridSampler, [image$$3, points$$1]);
    try {
      x$$49 = 0;
      var v335 = x$$49 < max;
      for(;v335;) {
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v1896 = points$$1[x$$49]
        }
        var v1198 = Math.floor(v1896);
        var v324 = v1198 * 4;
        var v2723 = x$$49 + 1;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v2527 = points$$1[v2723]
        }
        var v1897 = Math.floor(v2527);
        var v1898 = qrcode.width;
        var v1199 = v1897 * v1898;
        var v325 = v1199 * 4;
        var xpoint = v324 + v325;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v1899 = points$$1[x$$49]
        }
        var v1200 = Math.floor(v1899);
        var v1900 = qrcode.width;
        var v2724 = x$$49 + 1;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v2528 = points$$1[v2724]
        }
        var v1901 = Math.floor(v2528);
        var v1201 = v1900 * v1901;
        var v326 = v1200 + v1201;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var bit = image$$3[v326]
        }
        var v1202 = qrcode.imagedata;
        var v327 = v1202.data;
        var v1203;
        if(bit) {
          v1203 = 255
        }else {
          v1203 = 0
        }
        v327[xpoint] = v1203;
        var v1204 = qrcode.imagedata;
        var v328 = v1204.data;
        var v329 = xpoint + 1;
        var v1205;
        if(bit) {
          v1205 = 255
        }else {
          v1205 = 0
        }
        v328[v329] = v1205;
        var v1206 = qrcode.imagedata;
        var v330 = v1206.data;
        var v331 = xpoint + 2;
        v330[v331] = 0;
        var v1207 = qrcode.imagedata;
        var v332 = v1207.data;
        var v333 = xpoint + 3;
        v332[v333] = 255;
        if(bit) {
          var v334 = x$$49 >> 1;
          JAMScript.call(bits.set_Renamed, bits, [v334, y$$32])
        }
        x$$49 = x$$49 + 2;
        v335 = x$$49 < max
      }
    }catch(aioobe) {
      throw"Error.checkAndNudgePoints";
    }
    y$$32 = y$$32 + 1;
    v336 = y$$32 < dimension
  }
  return bits
}
function v126(image$$2, points) {
  var width$$9 = qrcode.width;
  var height$$8 = qrcode.height;
  var nudged = true;
  var offset$$12 = 0;
  var v1902 = points.Length;
  var v1208 = offset$$12 < v1902;
  if(v1208) {
    v1208 = nudged
  }
  var v346 = v1208;
  for(;v346;) {
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v337 = points[offset$$12]
    }
    var x$$48 = Math.floor(v337);
    var v1209 = offset$$12 + 1;
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v338 = points[v1209]
    }
    var y$$31 = Math.floor(v338);
    var v1210 = x$$48 < -1;
    var v1904 = !v1210;
    if(v1904) {
      var v1903 = x$$48 > width$$9;
      var v2530 = !v1903;
      if(v2530) {
        var v2529 = y$$31 < -1;
        var v2725 = !v2529;
        if(v2725) {
          v2529 = y$$31 > height$$8
        }
        v1903 = v2529
      }
      v1210 = v1903
    }
    var v339 = v1210;
    if(v339) {
      throw"Error.checkAndNudgePoints ";
    }
    nudged = false;
    var v341 = x$$48 == -1;
    if(v341) {
      points[offset$$12] = 0;
      nudged = true
    }else {
      var v340 = x$$48 == width$$9;
      if(v340) {
        points[offset$$12] = width$$9 - 1;
        nudged = true
      }
    }
    var v345 = y$$31 == -1;
    if(v345) {
      var v342 = offset$$12 + 1;
      points[v342] = 0;
      nudged = true
    }else {
      var v344 = y$$31 == height$$8;
      if(v344) {
        var v343 = offset$$12 + 1;
        points[v343] = height$$8 - 1;
        nudged = true
      }
    }
    offset$$12 = offset$$12 + 2;
    var v1905 = points.Length;
    var v1211 = offset$$12 < v1905;
    if(v1211) {
      v1211 = nudged
    }
    v346 = v1211
  }
  nudged = true;
  var v347 = points.Length;
  offset$$12 = v347 - 2;
  var v1212 = offset$$12 >= 0;
  if(v1212) {
    v1212 = nudged
  }
  var v357 = v1212;
  for(;v357;) {
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v348 = points[offset$$12]
    }
    x$$48 = Math.floor(v348);
    var v1213 = offset$$12 + 1;
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v349 = points[v1213]
    }
    y$$31 = Math.floor(v349);
    var v1214 = x$$48 < -1;
    var v1907 = !v1214;
    if(v1907) {
      var v1906 = x$$48 > width$$9;
      var v2532 = !v1906;
      if(v2532) {
        var v2531 = y$$31 < -1;
        var v2726 = !v2531;
        if(v2726) {
          v2531 = y$$31 > height$$8
        }
        v1906 = v2531
      }
      v1214 = v1906
    }
    var v350 = v1214;
    if(v350) {
      throw"Error.checkAndNudgePoints ";
    }
    nudged = false;
    var v352 = x$$48 == -1;
    if(v352) {
      points[offset$$12] = 0;
      nudged = true
    }else {
      var v351 = x$$48 == width$$9;
      if(v351) {
        points[offset$$12] = width$$9 - 1;
        nudged = true
      }
    }
    var v356 = y$$31 == -1;
    if(v356) {
      var v353 = offset$$12 + 1;
      points[v353] = 0;
      nudged = true
    }else {
      var v355 = y$$31 == height$$8;
      if(v355) {
        var v354 = offset$$12 + 1;
        points[v354] = height$$8 - 1;
        nudged = true
      }
    }
    offset$$12 = offset$$12 - 2;
    var v1215 = offset$$12 >= 0;
    if(v1215) {
      v1215 = nudged
    }
    v357 = v1215
  }
  return
}
function ECB(count$$6, dataCodewords) {
  function v1() {
    return this.dataCodewords
  }
  function v0() {
    return this.count
  }
  this.count = count$$6;
  this.dataCodewords = dataCodewords;
  JAMScript.call(this.__defineGetter__, this, ["Count", v0]);
  JAMScript.call(this.__defineGetter__, this, ["DataCodewords", v1]);
  return
}
function ECBlocks(ecCodewordsPerBlock, ecBlocks1, ecBlocks2) {
  function v5() {
    return this.ecBlocks
  }
  function v4() {
    var total = 0;
    var i$$1 = 0;
    var v1908 = this.ecBlocks;
    var v1216 = v1908.length;
    var v358 = i$$1 < v1216;
    for(;v358;) {
      var v2533 = this.ecBlocks;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v1909 = v2533[i$$1]
      }
      var v1217 = v1909.length;
      total = total + v1217;
      i$$1 = i$$1 + 1;
      var v1910 = this.ecBlocks;
      var v1218 = v1910.length;
      v358 = i$$1 < v1218
    }
    return total
  }
  function v3() {
    var v359 = this.ecCodewordsPerBlock;
    var v360 = this.NumBlocks;
    return v359 * v360
  }
  function v2() {
    return this.ecCodewordsPerBlock
  }
  this.ecCodewordsPerBlock = ecCodewordsPerBlock;
  if(ecBlocks2) {
    var v2874 = new Array(ecBlocks1, ecBlocks2);
    this.ecBlocks = v2874
  }else {
    var v2875 = new Array(ecBlocks1);
    this.ecBlocks = v2875
  }
  JAMScript.call(this.__defineGetter__, this, ["ECCodewordsPerBlock", v2]);
  JAMScript.call(this.__defineGetter__, this, ["TotalECCodewords", v3]);
  JAMScript.call(this.__defineGetter__, this, ["NumBlocks", v4]);
  this.getECBlocks = v5;
  return
}
function Version(versionNumber, alignmentPatternCenters, ecBlocks1$$1, ecBlocks2$$1, ecBlocks3, ecBlocks4) {
  function v11(ecLevel) {
    var v361 = this.ecBlocks;
    var v362 = ecLevel.ordinal_Renamed_Field;
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      return v361[v362]
    }
  }
  function v10() {
    var dimension$$2 = this.DimensionForVersion;
    var bitMatrix = new BitMatrix(dimension$$2);
    JAMScript.call(bitMatrix.setRegion, bitMatrix, [0, 0, 9, 9]);
    var v363 = dimension$$2 - 8;
    JAMScript.call(bitMatrix.setRegion, bitMatrix, [v363, 0, 8, 9]);
    var v364 = dimension$$2 - 8;
    JAMScript.call(bitMatrix.setRegion, bitMatrix, [0, v364, 9, 8]);
    var v365 = this.alignmentPatternCenters;
    var max$$1 = v365.length;
    var x$$50 = 0;
    var v370 = x$$50 < max$$1;
    for(;v370;) {
      var v1219 = this.alignmentPatternCenters;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v366 = v1219[x$$50]
      }
      var i$$3 = v366 - 2;
      var y$$33 = 0;
      var v369 = y$$33 < max$$1;
      for(;v369;) {
        var v1911 = x$$50 == 0;
        if(v1911) {
          var v2534 = y$$33 == 0;
          var v2728 = !v2534;
          if(v2728) {
            var v2727 = max$$1 - 1;
            v2534 = y$$33 == v2727
          }
          v1911 = v2534
        }
        var v1220 = v1911;
        var v1913 = !v1220;
        if(v1913) {
          var v2535 = max$$1 - 1;
          var v1912 = x$$50 == v2535;
          if(v1912) {
            v1912 = y$$33 == 0
          }
          v1220 = v1912
        }
        var v367 = v1220;
        if(v367) {
          y$$33 = y$$33 + 1;
          v369 = y$$33 < max$$1;
          continue
        }
        var v1914 = this.alignmentPatternCenters;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v1221 = v1914[y$$33]
        }
        var v368 = v1221 - 2;
        JAMScript.call(bitMatrix.setRegion, bitMatrix, [v368, i$$3, 5, 5]);
        y$$33 = y$$33 + 1;
        v369 = y$$33 < max$$1
      }
      x$$50 = x$$50 + 1;
      v370 = x$$50 < max$$1
    }
    var v371 = dimension$$2 - 17;
    JAMScript.call(bitMatrix.setRegion, bitMatrix, [6, 9, 1, v371]);
    var v372 = dimension$$2 - 17;
    JAMScript.call(bitMatrix.setRegion, bitMatrix, [9, 6, v372, 1]);
    var v1222 = this.versionNumber;
    var v375 = v1222 > 6;
    if(v375) {
      var v373 = dimension$$2 - 11;
      JAMScript.call(bitMatrix.setRegion, bitMatrix, [v373, 0, 3, 6]);
      var v374 = dimension$$2 - 11;
      JAMScript.call(bitMatrix.setRegion, bitMatrix, [0, v374, 6, 3])
    }
    return bitMatrix
  }
  function v9() {
    var v1223 = this.versionNumber;
    var v376 = 4 * v1223;
    return 17 + v376
  }
  function v8() {
    return this.totalCodewords
  }
  function v7() {
    return this.alignmentPatternCenters
  }
  function v6() {
    return this.versionNumber
  }
  this.versionNumber = versionNumber;
  this.alignmentPatternCenters = alignmentPatternCenters;
  var v2876 = new Array(ecBlocks1$$1, ecBlocks2$$1, ecBlocks3, ecBlocks4);
  this.ecBlocks = v2876;
  var total$$1 = 0;
  var ecCodewords = ecBlocks1$$1.ECCodewordsPerBlock;
  var ecbArray = ecBlocks1$$1.ecBlocks;
  var i$$2 = 0;
  var v1224 = ecbArray.length;
  var v377 = i$$2 < v1224;
  for(;v377;) {
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var ecBlock = ecbArray[i$$2]
    }
    var v1915 = ecBlock.Count;
    var v2536 = ecBlock.DataCodewords;
    var v1916 = v2536 + ecCodewords;
    var v1225 = v1915 * v1916;
    total$$1 = total$$1 + v1225;
    i$$2 = i$$2 + 1;
    var v1226 = ecbArray.length;
    v377 = i$$2 < v1226
  }
  this.totalCodewords = total$$1;
  JAMScript.call(this.__defineGetter__, this, ["VersionNumber", v6]);
  JAMScript.call(this.__defineGetter__, this, ["AlignmentPatternCenters", v7]);
  JAMScript.call(this.__defineGetter__, this, ["TotalCodewords", v8]);
  JAMScript.call(this.__defineGetter__, this, ["DimensionForVersion", v9]);
  this.buildFunctionPattern = v10;
  this.getECBlocksForLevel = v11;
  return
}
function buildVersions() {
  var v1227 = new Array;
  var v1917 = new ECB(1, 19);
  var v1228 = new ECBlocks(7, v1917);
  var v1918 = new ECB(1, 16);
  var v1229 = new ECBlocks(10, v1918);
  var v1919 = new ECB(1, 13);
  var v1230 = new ECBlocks(13, v1919);
  var v1920 = new ECB(1, 9);
  var v1231 = new ECBlocks(17, v1920);
  var v378 = new Version(1, v1227, v1228, v1229, v1230, v1231);
  var v1232 = new Array(6, 18);
  var v1921 = new ECB(1, 34);
  var v1233 = new ECBlocks(10, v1921);
  var v1922 = new ECB(1, 28);
  var v1234 = new ECBlocks(16, v1922);
  var v1923 = new ECB(1, 22);
  var v1235 = new ECBlocks(22, v1923);
  var v1924 = new ECB(1, 16);
  var v1236 = new ECBlocks(28, v1924);
  var v379 = new Version(2, v1232, v1233, v1234, v1235, v1236);
  var v1237 = new Array(6, 22);
  var v1925 = new ECB(1, 55);
  var v1238 = new ECBlocks(15, v1925);
  var v1926 = new ECB(1, 44);
  var v1239 = new ECBlocks(26, v1926);
  var v1927 = new ECB(2, 17);
  var v1240 = new ECBlocks(18, v1927);
  var v1928 = new ECB(2, 13);
  var v1241 = new ECBlocks(22, v1928);
  var v380 = new Version(3, v1237, v1238, v1239, v1240, v1241);
  var v1242 = new Array(6, 26);
  var v1929 = new ECB(1, 80);
  var v1243 = new ECBlocks(20, v1929);
  var v1930 = new ECB(2, 32);
  var v1244 = new ECBlocks(18, v1930);
  var v1931 = new ECB(2, 24);
  var v1245 = new ECBlocks(26, v1931);
  var v1932 = new ECB(4, 9);
  var v1246 = new ECBlocks(16, v1932);
  var v381 = new Version(4, v1242, v1243, v1244, v1245, v1246);
  var v1247 = new Array(6, 30);
  var v1933 = new ECB(1, 108);
  var v1248 = new ECBlocks(26, v1933);
  var v1934 = new ECB(2, 43);
  var v1249 = new ECBlocks(24, v1934);
  var v1935 = new ECB(2, 15);
  var v1936 = new ECB(2, 16);
  var v1250 = new ECBlocks(18, v1935, v1936);
  var v1937 = new ECB(2, 11);
  var v1938 = new ECB(2, 12);
  var v1251 = new ECBlocks(22, v1937, v1938);
  var v382 = new Version(5, v1247, v1248, v1249, v1250, v1251);
  var v1252 = new Array(6, 34);
  var v1939 = new ECB(2, 68);
  var v1253 = new ECBlocks(18, v1939);
  var v1940 = new ECB(4, 27);
  var v1254 = new ECBlocks(16, v1940);
  var v1941 = new ECB(4, 19);
  var v1255 = new ECBlocks(24, v1941);
  var v1942 = new ECB(4, 15);
  var v1256 = new ECBlocks(28, v1942);
  var v383 = new Version(6, v1252, v1253, v1254, v1255, v1256);
  var v1257 = new Array(6, 22, 38);
  var v1943 = new ECB(2, 78);
  var v1258 = new ECBlocks(20, v1943);
  var v1944 = new ECB(4, 31);
  var v1259 = new ECBlocks(18, v1944);
  var v1945 = new ECB(2, 14);
  var v1946 = new ECB(4, 15);
  var v1260 = new ECBlocks(18, v1945, v1946);
  var v1947 = new ECB(4, 13);
  var v1948 = new ECB(1, 14);
  var v1261 = new ECBlocks(26, v1947, v1948);
  var v384 = new Version(7, v1257, v1258, v1259, v1260, v1261);
  var v1262 = new Array(6, 24, 42);
  var v1949 = new ECB(2, 97);
  var v1263 = new ECBlocks(24, v1949);
  var v1950 = new ECB(2, 38);
  var v1951 = new ECB(2, 39);
  var v1264 = new ECBlocks(22, v1950, v1951);
  var v1952 = new ECB(4, 18);
  var v1953 = new ECB(2, 19);
  var v1265 = new ECBlocks(22, v1952, v1953);
  var v1954 = new ECB(4, 14);
  var v1955 = new ECB(2, 15);
  var v1266 = new ECBlocks(26, v1954, v1955);
  var v385 = new Version(8, v1262, v1263, v1264, v1265, v1266);
  var v1267 = new Array(6, 26, 46);
  var v1956 = new ECB(2, 116);
  var v1268 = new ECBlocks(30, v1956);
  var v1957 = new ECB(3, 36);
  var v1958 = new ECB(2, 37);
  var v1269 = new ECBlocks(22, v1957, v1958);
  var v1959 = new ECB(4, 16);
  var v1960 = new ECB(4, 17);
  var v1270 = new ECBlocks(20, v1959, v1960);
  var v1961 = new ECB(4, 12);
  var v1962 = new ECB(4, 13);
  var v1271 = new ECBlocks(24, v1961, v1962);
  var v386 = new Version(9, v1267, v1268, v1269, v1270, v1271);
  var v1272 = new Array(6, 28, 50);
  var v1963 = new ECB(2, 68);
  var v1964 = new ECB(2, 69);
  var v1273 = new ECBlocks(18, v1963, v1964);
  var v1965 = new ECB(4, 43);
  var v1966 = new ECB(1, 44);
  var v1274 = new ECBlocks(26, v1965, v1966);
  var v1967 = new ECB(6, 19);
  var v1968 = new ECB(2, 20);
  var v1275 = new ECBlocks(24, v1967, v1968);
  var v1969 = new ECB(6, 15);
  var v1970 = new ECB(2, 16);
  var v1276 = new ECBlocks(28, v1969, v1970);
  var v387 = new Version(10, v1272, v1273, v1274, v1275, v1276);
  var v1277 = new Array(6, 30, 54);
  var v1971 = new ECB(4, 81);
  var v1278 = new ECBlocks(20, v1971);
  var v1972 = new ECB(1, 50);
  var v1973 = new ECB(4, 51);
  var v1279 = new ECBlocks(30, v1972, v1973);
  var v1974 = new ECB(4, 22);
  var v1975 = new ECB(4, 23);
  var v1280 = new ECBlocks(28, v1974, v1975);
  var v1976 = new ECB(3, 12);
  var v1977 = new ECB(8, 13);
  var v1281 = new ECBlocks(24, v1976, v1977);
  var v388 = new Version(11, v1277, v1278, v1279, v1280, v1281);
  var v1282 = new Array(6, 32, 58);
  var v1978 = new ECB(2, 92);
  var v1979 = new ECB(2, 93);
  var v1283 = new ECBlocks(24, v1978, v1979);
  var v1980 = new ECB(6, 36);
  var v1981 = new ECB(2, 37);
  var v1284 = new ECBlocks(22, v1980, v1981);
  var v1982 = new ECB(4, 20);
  var v1983 = new ECB(6, 21);
  var v1285 = new ECBlocks(26, v1982, v1983);
  var v1984 = new ECB(7, 14);
  var v1985 = new ECB(4, 15);
  var v1286 = new ECBlocks(28, v1984, v1985);
  var v389 = new Version(12, v1282, v1283, v1284, v1285, v1286);
  var v1287 = new Array(6, 34, 62);
  var v1986 = new ECB(4, 107);
  var v1288 = new ECBlocks(26, v1986);
  var v1987 = new ECB(8, 37);
  var v1988 = new ECB(1, 38);
  var v1289 = new ECBlocks(22, v1987, v1988);
  var v1989 = new ECB(8, 20);
  var v1990 = new ECB(4, 21);
  var v1290 = new ECBlocks(24, v1989, v1990);
  var v1991 = new ECB(12, 11);
  var v1992 = new ECB(4, 12);
  var v1291 = new ECBlocks(22, v1991, v1992);
  var v390 = new Version(13, v1287, v1288, v1289, v1290, v1291);
  var v1292 = new Array(6, 26, 46, 66);
  var v1993 = new ECB(3, 115);
  var v1994 = new ECB(1, 116);
  var v1293 = new ECBlocks(30, v1993, v1994);
  var v1995 = new ECB(4, 40);
  var v1996 = new ECB(5, 41);
  var v1294 = new ECBlocks(24, v1995, v1996);
  var v1997 = new ECB(11, 16);
  var v1998 = new ECB(5, 17);
  var v1295 = new ECBlocks(20, v1997, v1998);
  var v1999 = new ECB(11, 12);
  var v2000 = new ECB(5, 13);
  var v1296 = new ECBlocks(24, v1999, v2000);
  var v391 = new Version(14, v1292, v1293, v1294, v1295, v1296);
  var v1297 = new Array(6, 26, 48, 70);
  var v2001 = new ECB(5, 87);
  var v2002 = new ECB(1, 88);
  var v1298 = new ECBlocks(22, v2001, v2002);
  var v2003 = new ECB(5, 41);
  var v2004 = new ECB(5, 42);
  var v1299 = new ECBlocks(24, v2003, v2004);
  var v2005 = new ECB(5, 24);
  var v2006 = new ECB(7, 25);
  var v1300 = new ECBlocks(30, v2005, v2006);
  var v2007 = new ECB(11, 12);
  var v2008 = new ECB(7, 13);
  var v1301 = new ECBlocks(24, v2007, v2008);
  var v392 = new Version(15, v1297, v1298, v1299, v1300, v1301);
  var v1302 = new Array(6, 26, 50, 74);
  var v2009 = new ECB(5, 98);
  var v2010 = new ECB(1, 99);
  var v1303 = new ECBlocks(24, v2009, v2010);
  var v2011 = new ECB(7, 45);
  var v2012 = new ECB(3, 46);
  var v1304 = new ECBlocks(28, v2011, v2012);
  var v2013 = new ECB(15, 19);
  var v2014 = new ECB(2, 20);
  var v1305 = new ECBlocks(24, v2013, v2014);
  var v2015 = new ECB(3, 15);
  var v2016 = new ECB(13, 16);
  var v1306 = new ECBlocks(30, v2015, v2016);
  var v393 = new Version(16, v1302, v1303, v1304, v1305, v1306);
  var v1307 = new Array(6, 30, 54, 78);
  var v2017 = new ECB(1, 107);
  var v2018 = new ECB(5, 108);
  var v1308 = new ECBlocks(28, v2017, v2018);
  var v2019 = new ECB(10, 46);
  var v2020 = new ECB(1, 47);
  var v1309 = new ECBlocks(28, v2019, v2020);
  var v2021 = new ECB(1, 22);
  var v2022 = new ECB(15, 23);
  var v1310 = new ECBlocks(28, v2021, v2022);
  var v2023 = new ECB(2, 14);
  var v2024 = new ECB(17, 15);
  var v1311 = new ECBlocks(28, v2023, v2024);
  var v394 = new Version(17, v1307, v1308, v1309, v1310, v1311);
  var v1312 = new Array(6, 30, 56, 82);
  var v2025 = new ECB(5, 120);
  var v2026 = new ECB(1, 121);
  var v1313 = new ECBlocks(30, v2025, v2026);
  var v2027 = new ECB(9, 43);
  var v2028 = new ECB(4, 44);
  var v1314 = new ECBlocks(26, v2027, v2028);
  var v2029 = new ECB(17, 22);
  var v2030 = new ECB(1, 23);
  var v1315 = new ECBlocks(28, v2029, v2030);
  var v2031 = new ECB(2, 14);
  var v2032 = new ECB(19, 15);
  var v1316 = new ECBlocks(28, v2031, v2032);
  var v395 = new Version(18, v1312, v1313, v1314, v1315, v1316);
  var v1317 = new Array(6, 30, 58, 86);
  var v2033 = new ECB(3, 113);
  var v2034 = new ECB(4, 114);
  var v1318 = new ECBlocks(28, v2033, v2034);
  var v2035 = new ECB(3, 44);
  var v2036 = new ECB(11, 45);
  var v1319 = new ECBlocks(26, v2035, v2036);
  var v2037 = new ECB(17, 21);
  var v2038 = new ECB(4, 22);
  var v1320 = new ECBlocks(26, v2037, v2038);
  var v2039 = new ECB(9, 13);
  var v2040 = new ECB(16, 14);
  var v1321 = new ECBlocks(26, v2039, v2040);
  var v396 = new Version(19, v1317, v1318, v1319, v1320, v1321);
  var v1322 = new Array(6, 34, 62, 90);
  var v2041 = new ECB(3, 107);
  var v2042 = new ECB(5, 108);
  var v1323 = new ECBlocks(28, v2041, v2042);
  var v2043 = new ECB(3, 41);
  var v2044 = new ECB(13, 42);
  var v1324 = new ECBlocks(26, v2043, v2044);
  var v2045 = new ECB(15, 24);
  var v2046 = new ECB(5, 25);
  var v1325 = new ECBlocks(30, v2045, v2046);
  var v2047 = new ECB(15, 15);
  var v2048 = new ECB(10, 16);
  var v1326 = new ECBlocks(28, v2047, v2048);
  var v397 = new Version(20, v1322, v1323, v1324, v1325, v1326);
  var v1327 = new Array(6, 28, 50, 72, 94);
  var v2049 = new ECB(4, 116);
  var v2050 = new ECB(4, 117);
  var v1328 = new ECBlocks(28, v2049, v2050);
  var v2051 = new ECB(17, 42);
  var v1329 = new ECBlocks(26, v2051);
  var v2052 = new ECB(17, 22);
  var v2053 = new ECB(6, 23);
  var v1330 = new ECBlocks(28, v2052, v2053);
  var v2054 = new ECB(19, 16);
  var v2055 = new ECB(6, 17);
  var v1331 = new ECBlocks(30, v2054, v2055);
  var v398 = new Version(21, v1327, v1328, v1329, v1330, v1331);
  var v1332 = new Array(6, 26, 50, 74, 98);
  var v2056 = new ECB(2, 111);
  var v2057 = new ECB(7, 112);
  var v1333 = new ECBlocks(28, v2056, v2057);
  var v2058 = new ECB(17, 46);
  var v1334 = new ECBlocks(28, v2058);
  var v2059 = new ECB(7, 24);
  var v2060 = new ECB(16, 25);
  var v1335 = new ECBlocks(30, v2059, v2060);
  var v2061 = new ECB(34, 13);
  var v1336 = new ECBlocks(24, v2061);
  var v399 = new Version(22, v1332, v1333, v1334, v1335, v1336);
  var v1337 = new Array(6, 30, 54, 74, 102);
  var v2062 = new ECB(4, 121);
  var v2063 = new ECB(5, 122);
  var v1338 = new ECBlocks(30, v2062, v2063);
  var v2064 = new ECB(4, 47);
  var v2065 = new ECB(14, 48);
  var v1339 = new ECBlocks(28, v2064, v2065);
  var v2066 = new ECB(11, 24);
  var v2067 = new ECB(14, 25);
  var v1340 = new ECBlocks(30, v2066, v2067);
  var v2068 = new ECB(16, 15);
  var v2069 = new ECB(14, 16);
  var v1341 = new ECBlocks(30, v2068, v2069);
  var v400 = new Version(23, v1337, v1338, v1339, v1340, v1341);
  var v1342 = new Array(6, 28, 54, 80, 106);
  var v2070 = new ECB(6, 117);
  var v2071 = new ECB(4, 118);
  var v1343 = new ECBlocks(30, v2070, v2071);
  var v2072 = new ECB(6, 45);
  var v2073 = new ECB(14, 46);
  var v1344 = new ECBlocks(28, v2072, v2073);
  var v2074 = new ECB(11, 24);
  var v2075 = new ECB(16, 25);
  var v1345 = new ECBlocks(30, v2074, v2075);
  var v2076 = new ECB(30, 16);
  var v2077 = new ECB(2, 17);
  var v1346 = new ECBlocks(30, v2076, v2077);
  var v401 = new Version(24, v1342, v1343, v1344, v1345, v1346);
  var v1347 = new Array(6, 32, 58, 84, 110);
  var v2078 = new ECB(8, 106);
  var v2079 = new ECB(4, 107);
  var v1348 = new ECBlocks(26, v2078, v2079);
  var v2080 = new ECB(8, 47);
  var v2081 = new ECB(13, 48);
  var v1349 = new ECBlocks(28, v2080, v2081);
  var v2082 = new ECB(7, 24);
  var v2083 = new ECB(22, 25);
  var v1350 = new ECBlocks(30, v2082, v2083);
  var v2084 = new ECB(22, 15);
  var v2085 = new ECB(13, 16);
  var v1351 = new ECBlocks(30, v2084, v2085);
  var v402 = new Version(25, v1347, v1348, v1349, v1350, v1351);
  var v1352 = new Array(6, 30, 58, 86, 114);
  var v2086 = new ECB(10, 114);
  var v2087 = new ECB(2, 115);
  var v1353 = new ECBlocks(28, v2086, v2087);
  var v2088 = new ECB(19, 46);
  var v2089 = new ECB(4, 47);
  var v1354 = new ECBlocks(28, v2088, v2089);
  var v2090 = new ECB(28, 22);
  var v2091 = new ECB(6, 23);
  var v1355 = new ECBlocks(28, v2090, v2091);
  var v2092 = new ECB(33, 16);
  var v2093 = new ECB(4, 17);
  var v1356 = new ECBlocks(30, v2092, v2093);
  var v403 = new Version(26, v1352, v1353, v1354, v1355, v1356);
  var v1357 = new Array(6, 34, 62, 90, 118);
  var v2094 = new ECB(8, 122);
  var v2095 = new ECB(4, 123);
  var v1358 = new ECBlocks(30, v2094, v2095);
  var v2096 = new ECB(22, 45);
  var v2097 = new ECB(3, 46);
  var v1359 = new ECBlocks(28, v2096, v2097);
  var v2098 = new ECB(8, 23);
  var v2099 = new ECB(26, 24);
  var v1360 = new ECBlocks(30, v2098, v2099);
  var v2100 = new ECB(12, 15);
  var v2101 = new ECB(28, 16);
  var v1361 = new ECBlocks(30, v2100, v2101);
  var v404 = new Version(27, v1357, v1358, v1359, v1360, v1361);
  var v1362 = new Array(6, 26, 50, 74, 98, 122);
  var v2102 = new ECB(3, 117);
  var v2103 = new ECB(10, 118);
  var v1363 = new ECBlocks(30, v2102, v2103);
  var v2104 = new ECB(3, 45);
  var v2105 = new ECB(23, 46);
  var v1364 = new ECBlocks(28, v2104, v2105);
  var v2106 = new ECB(4, 24);
  var v2107 = new ECB(31, 25);
  var v1365 = new ECBlocks(30, v2106, v2107);
  var v2108 = new ECB(11, 15);
  var v2109 = new ECB(31, 16);
  var v1366 = new ECBlocks(30, v2108, v2109);
  var v405 = new Version(28, v1362, v1363, v1364, v1365, v1366);
  var v1367 = new Array(6, 30, 54, 78, 102, 126);
  var v2110 = new ECB(7, 116);
  var v2111 = new ECB(7, 117);
  var v1368 = new ECBlocks(30, v2110, v2111);
  var v2112 = new ECB(21, 45);
  var v2113 = new ECB(7, 46);
  var v1369 = new ECBlocks(28, v2112, v2113);
  var v2114 = new ECB(1, 23);
  var v2115 = new ECB(37, 24);
  var v1370 = new ECBlocks(30, v2114, v2115);
  var v2116 = new ECB(19, 15);
  var v2117 = new ECB(26, 16);
  var v1371 = new ECBlocks(30, v2116, v2117);
  var v406 = new Version(29, v1367, v1368, v1369, v1370, v1371);
  var v1372 = new Array(6, 26, 52, 78, 104, 130);
  var v2118 = new ECB(5, 115);
  var v2119 = new ECB(10, 116);
  var v1373 = new ECBlocks(30, v2118, v2119);
  var v2120 = new ECB(19, 47);
  var v2121 = new ECB(10, 48);
  var v1374 = new ECBlocks(28, v2120, v2121);
  var v2122 = new ECB(15, 24);
  var v2123 = new ECB(25, 25);
  var v1375 = new ECBlocks(30, v2122, v2123);
  var v2124 = new ECB(23, 15);
  var v2125 = new ECB(25, 16);
  var v1376 = new ECBlocks(30, v2124, v2125);
  var v407 = new Version(30, v1372, v1373, v1374, v1375, v1376);
  var v1377 = new Array(6, 30, 56, 82, 108, 134);
  var v2126 = new ECB(13, 115);
  var v2127 = new ECB(3, 116);
  var v1378 = new ECBlocks(30, v2126, v2127);
  var v2128 = new ECB(2, 46);
  var v2129 = new ECB(29, 47);
  var v1379 = new ECBlocks(28, v2128, v2129);
  var v2130 = new ECB(42, 24);
  var v2131 = new ECB(1, 25);
  var v1380 = new ECBlocks(30, v2130, v2131);
  var v2132 = new ECB(23, 15);
  var v2133 = new ECB(28, 16);
  var v1381 = new ECBlocks(30, v2132, v2133);
  var v408 = new Version(31, v1377, v1378, v1379, v1380, v1381);
  var v1382 = new Array(6, 34, 60, 86, 112, 138);
  var v2134 = new ECB(17, 115);
  var v1383 = new ECBlocks(30, v2134);
  var v2135 = new ECB(10, 46);
  var v2136 = new ECB(23, 47);
  var v1384 = new ECBlocks(28, v2135, v2136);
  var v2137 = new ECB(10, 24);
  var v2138 = new ECB(35, 25);
  var v1385 = new ECBlocks(30, v2137, v2138);
  var v2139 = new ECB(19, 15);
  var v2140 = new ECB(35, 16);
  var v1386 = new ECBlocks(30, v2139, v2140);
  var v409 = new Version(32, v1382, v1383, v1384, v1385, v1386);
  var v1387 = new Array(6, 30, 58, 86, 114, 142);
  var v2141 = new ECB(17, 115);
  var v2142 = new ECB(1, 116);
  var v1388 = new ECBlocks(30, v2141, v2142);
  var v2143 = new ECB(14, 46);
  var v2144 = new ECB(21, 47);
  var v1389 = new ECBlocks(28, v2143, v2144);
  var v2145 = new ECB(29, 24);
  var v2146 = new ECB(19, 25);
  var v1390 = new ECBlocks(30, v2145, v2146);
  var v2147 = new ECB(11, 15);
  var v2148 = new ECB(46, 16);
  var v1391 = new ECBlocks(30, v2147, v2148);
  var v410 = new Version(33, v1387, v1388, v1389, v1390, v1391);
  var v1392 = new Array(6, 34, 62, 90, 118, 146);
  var v2149 = new ECB(13, 115);
  var v2150 = new ECB(6, 116);
  var v1393 = new ECBlocks(30, v2149, v2150);
  var v2151 = new ECB(14, 46);
  var v2152 = new ECB(23, 47);
  var v1394 = new ECBlocks(28, v2151, v2152);
  var v2153 = new ECB(44, 24);
  var v2154 = new ECB(7, 25);
  var v1395 = new ECBlocks(30, v2153, v2154);
  var v2155 = new ECB(59, 16);
  var v2156 = new ECB(1, 17);
  var v1396 = new ECBlocks(30, v2155, v2156);
  var v411 = new Version(34, v1392, v1393, v1394, v1395, v1396);
  var v1397 = new Array(6, 30, 54, 78, 102, 126, 150);
  var v2157 = new ECB(12, 121);
  var v2158 = new ECB(7, 122);
  var v1398 = new ECBlocks(30, v2157, v2158);
  var v2159 = new ECB(12, 47);
  var v2160 = new ECB(26, 48);
  var v1399 = new ECBlocks(28, v2159, v2160);
  var v2161 = new ECB(39, 24);
  var v2162 = new ECB(14, 25);
  var v1400 = new ECBlocks(30, v2161, v2162);
  var v2163 = new ECB(22, 15);
  var v2164 = new ECB(41, 16);
  var v1401 = new ECBlocks(30, v2163, v2164);
  var v412 = new Version(35, v1397, v1398, v1399, v1400, v1401);
  var v1402 = new Array(6, 24, 50, 76, 102, 128, 154);
  var v2165 = new ECB(6, 121);
  var v2166 = new ECB(14, 122);
  var v1403 = new ECBlocks(30, v2165, v2166);
  var v2167 = new ECB(6, 47);
  var v2168 = new ECB(34, 48);
  var v1404 = new ECBlocks(28, v2167, v2168);
  var v2169 = new ECB(46, 24);
  var v2170 = new ECB(10, 25);
  var v1405 = new ECBlocks(30, v2169, v2170);
  var v2171 = new ECB(2, 15);
  var v2172 = new ECB(64, 16);
  var v1406 = new ECBlocks(30, v2171, v2172);
  var v413 = new Version(36, v1402, v1403, v1404, v1405, v1406);
  var v1407 = new Array(6, 28, 54, 80, 106, 132, 158);
  var v2173 = new ECB(17, 122);
  var v2174 = new ECB(4, 123);
  var v1408 = new ECBlocks(30, v2173, v2174);
  var v2175 = new ECB(29, 46);
  var v2176 = new ECB(14, 47);
  var v1409 = new ECBlocks(28, v2175, v2176);
  var v2177 = new ECB(49, 24);
  var v2178 = new ECB(10, 25);
  var v1410 = new ECBlocks(30, v2177, v2178);
  var v2179 = new ECB(24, 15);
  var v2180 = new ECB(46, 16);
  var v1411 = new ECBlocks(30, v2179, v2180);
  var v414 = new Version(37, v1407, v1408, v1409, v1410, v1411);
  var v1412 = new Array(6, 32, 58, 84, 110, 136, 162);
  var v2181 = new ECB(4, 122);
  var v2182 = new ECB(18, 123);
  var v1413 = new ECBlocks(30, v2181, v2182);
  var v2183 = new ECB(13, 46);
  var v2184 = new ECB(32, 47);
  var v1414 = new ECBlocks(28, v2183, v2184);
  var v2185 = new ECB(48, 24);
  var v2186 = new ECB(14, 25);
  var v1415 = new ECBlocks(30, v2185, v2186);
  var v2187 = new ECB(42, 15);
  var v2188 = new ECB(32, 16);
  var v1416 = new ECBlocks(30, v2187, v2188);
  var v415 = new Version(38, v1412, v1413, v1414, v1415, v1416);
  var v1417 = new Array(6, 26, 54, 82, 110, 138, 166);
  var v2189 = new ECB(20, 117);
  var v2190 = new ECB(4, 118);
  var v1418 = new ECBlocks(30, v2189, v2190);
  var v2191 = new ECB(40, 47);
  var v2192 = new ECB(7, 48);
  var v1419 = new ECBlocks(28, v2191, v2192);
  var v2193 = new ECB(43, 24);
  var v2194 = new ECB(22, 25);
  var v1420 = new ECBlocks(30, v2193, v2194);
  var v2195 = new ECB(10, 15);
  var v2196 = new ECB(67, 16);
  var v1421 = new ECBlocks(30, v2195, v2196);
  var v416 = new Version(39, v1417, v1418, v1419, v1420, v1421);
  var v1422 = new Array(6, 30, 58, 86, 114, 142, 170);
  var v2197 = new ECB(19, 118);
  var v2198 = new ECB(6, 119);
  var v1423 = new ECBlocks(30, v2197, v2198);
  var v2199 = new ECB(18, 47);
  var v2200 = new ECB(31, 48);
  var v1424 = new ECBlocks(28, v2199, v2200);
  var v2201 = new ECB(34, 24);
  var v2202 = new ECB(34, 25);
  var v1425 = new ECBlocks(30, v2201, v2202);
  var v2203 = new ECB(20, 15);
  var v2204 = new ECB(61, 16);
  var v1426 = new ECBlocks(30, v2203, v2204);
  var v417 = new Version(40, v1422, v1423, v1424, v1425, v1426);
  return new Array(v378, v379, v380, v381, v382, v383, v384, v385, v386, v387, v388, v389, v390, v391, v392, v393, v394, v395, v396, v397, v398, v399, v400, v401, v402, v403, v404, v405, v406, v407, v408, v409, v410, v411, v412, v413, v414, v415, v416, v417)
}
function PerspectiveTransform(a11, a21, a31, a12, a22, a32, a13$$1, a23$$1, a33) {
  function v15(other$$4) {
    var v2537 = this.a11;
    var v2538 = other$$4.a11;
    var v2205 = v2537 * v2538;
    var v2539 = this.a21;
    var v2540 = other$$4.a12;
    var v2206 = v2539 * v2540;
    var v1427 = v2205 + v2206;
    var v2207 = this.a31;
    var v2208 = other$$4.a13;
    var v1428 = v2207 * v2208;
    var v418 = v1427 + v1428;
    var v2541 = this.a11;
    var v2542 = other$$4.a21;
    var v2209 = v2541 * v2542;
    var v2543 = this.a21;
    var v2544 = other$$4.a22;
    var v2210 = v2543 * v2544;
    var v1429 = v2209 + v2210;
    var v2211 = this.a31;
    var v2212 = other$$4.a23;
    var v1430 = v2211 * v2212;
    var v419 = v1429 + v1430;
    var v2545 = this.a11;
    var v2546 = other$$4.a31;
    var v2213 = v2545 * v2546;
    var v2547 = this.a21;
    var v2548 = other$$4.a32;
    var v2214 = v2547 * v2548;
    var v1431 = v2213 + v2214;
    var v2215 = this.a31;
    var v2216 = other$$4.a33;
    var v1432 = v2215 * v2216;
    var v420 = v1431 + v1432;
    var v2549 = this.a12;
    var v2550 = other$$4.a11;
    var v2217 = v2549 * v2550;
    var v2551 = this.a22;
    var v2552 = other$$4.a12;
    var v2218 = v2551 * v2552;
    var v1433 = v2217 + v2218;
    var v2219 = this.a32;
    var v2220 = other$$4.a13;
    var v1434 = v2219 * v2220;
    var v421 = v1433 + v1434;
    var v2553 = this.a12;
    var v2554 = other$$4.a21;
    var v2221 = v2553 * v2554;
    var v2555 = this.a22;
    var v2556 = other$$4.a22;
    var v2222 = v2555 * v2556;
    var v1435 = v2221 + v2222;
    var v2223 = this.a32;
    var v2224 = other$$4.a23;
    var v1436 = v2223 * v2224;
    var v422 = v1435 + v1436;
    var v2557 = this.a12;
    var v2558 = other$$4.a31;
    var v2225 = v2557 * v2558;
    var v2559 = this.a22;
    var v2560 = other$$4.a32;
    var v2226 = v2559 * v2560;
    var v1437 = v2225 + v2226;
    var v2227 = this.a32;
    var v2228 = other$$4.a33;
    var v1438 = v2227 * v2228;
    var v423 = v1437 + v1438;
    var v2561 = this.a13;
    var v2562 = other$$4.a11;
    var v2229 = v2561 * v2562;
    var v2563 = this.a23;
    var v2564 = other$$4.a12;
    var v2230 = v2563 * v2564;
    var v1439 = v2229 + v2230;
    var v2231 = this.a33;
    var v2232 = other$$4.a13;
    var v1440 = v2231 * v2232;
    var v424 = v1439 + v1440;
    var v2565 = this.a13;
    var v2566 = other$$4.a21;
    var v2233 = v2565 * v2566;
    var v2567 = this.a23;
    var v2568 = other$$4.a22;
    var v2234 = v2567 * v2568;
    var v1441 = v2233 + v2234;
    var v2235 = this.a33;
    var v2236 = other$$4.a23;
    var v1442 = v2235 * v2236;
    var v425 = v1441 + v1442;
    var v2569 = this.a13;
    var v2570 = other$$4.a31;
    var v2237 = v2569 * v2570;
    var v2571 = this.a23;
    var v2572 = other$$4.a32;
    var v2238 = v2571 * v2572;
    var v1443 = v2237 + v2238;
    var v2239 = this.a33;
    var v2240 = other$$4.a33;
    var v1444 = v2239 * v2240;
    var v426 = v1443 + v1444;
    return new PerspectiveTransform(v418, v419, v420, v421, v422, v423, v424, v425, v426)
  }
  function v14() {
    var v2241 = this.a22;
    var v2242 = this.a33;
    var v1445 = v2241 * v2242;
    var v2243 = this.a23;
    var v2244 = this.a32;
    var v1446 = v2243 * v2244;
    var v427 = v1445 - v1446;
    var v2245 = this.a23;
    var v2246 = this.a31;
    var v1447 = v2245 * v2246;
    var v2247 = this.a21;
    var v2248 = this.a33;
    var v1448 = v2247 * v2248;
    var v428 = v1447 - v1448;
    var v2249 = this.a21;
    var v2250 = this.a32;
    var v1449 = v2249 * v2250;
    var v2251 = this.a22;
    var v2252 = this.a31;
    var v1450 = v2251 * v2252;
    var v429 = v1449 - v1450;
    var v2253 = this.a13;
    var v2254 = this.a32;
    var v1451 = v2253 * v2254;
    var v2255 = this.a12;
    var v2256 = this.a33;
    var v1452 = v2255 * v2256;
    var v430 = v1451 - v1452;
    var v2257 = this.a11;
    var v2258 = this.a33;
    var v1453 = v2257 * v2258;
    var v2259 = this.a13;
    var v2260 = this.a31;
    var v1454 = v2259 * v2260;
    var v431 = v1453 - v1454;
    var v2261 = this.a12;
    var v2262 = this.a31;
    var v1455 = v2261 * v2262;
    var v2263 = this.a11;
    var v2264 = this.a32;
    var v1456 = v2263 * v2264;
    var v432 = v1455 - v1456;
    var v2265 = this.a12;
    var v2266 = this.a23;
    var v1457 = v2265 * v2266;
    var v2267 = this.a13;
    var v2268 = this.a22;
    var v1458 = v2267 * v2268;
    var v433 = v1457 - v1458;
    var v2269 = this.a13;
    var v2270 = this.a21;
    var v1459 = v2269 * v2270;
    var v2271 = this.a11;
    var v2272 = this.a23;
    var v1460 = v2271 * v2272;
    var v434 = v1459 - v1460;
    var v2273 = this.a11;
    var v2274 = this.a22;
    var v1461 = v2273 * v2274;
    var v2275 = this.a12;
    var v2276 = this.a21;
    var v1462 = v2275 * v2276;
    var v435 = v1461 - v1462;
    return new PerspectiveTransform(v427, v428, v429, v430, v431, v432, v433, v434, v435)
  }
  function v13(xValues, yValues) {
    var n$$1 = xValues.length;
    var i$$6 = 0;
    var v440 = i$$6 < n$$1;
    for(;v440;) {
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var x$$52 = xValues[i$$6]
      }
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var y$$35 = yValues[i$$6]
      }
      var v2277 = this.a13;
      var v1463 = v2277 * x$$52;
      var v2278 = this.a23;
      var v1464 = v2278 * y$$35;
      var v436 = v1463 + v1464;
      var v437 = this.a33;
      var denominator$$2 = v436 + v437;
      var v2573 = this.a11;
      var v2279 = v2573 * x$$52;
      var v2574 = this.a21;
      var v2280 = v2574 * y$$35;
      var v1465 = v2279 + v2280;
      var v1466 = this.a31;
      var v438 = v1465 + v1466;
      xValues[i$$6] = v438 / denominator$$2;
      var v2575 = this.a12;
      var v2281 = v2575 * x$$52;
      var v2576 = this.a22;
      var v2282 = v2576 * y$$35;
      var v1467 = v2281 + v2282;
      var v1468 = this.a32;
      var v439 = v1467 + v1468;
      yValues[i$$6] = v439 / denominator$$2;
      i$$6 = i$$6 + 1;
      v440 = i$$6 < n$$1
    }
    return
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
    var v445 = i$$5 < max$$2;
    for(;v445;) {
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var x$$51 = points$$2[i$$5]
      }
      var v441 = i$$5 + 1;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var y$$34 = points$$2[v441]
      }
      var v1469 = a13$$2 * x$$51;
      var v1470 = a23$$2 * y$$34;
      var v442 = v1469 + v1470;
      var denominator$$1 = v442 + a33$$1;
      var v2283 = a11$$1 * x$$51;
      var v2284 = a21$$1 * y$$34;
      var v1471 = v2283 + v2284;
      var v443 = v1471 + a31$$1;
      points$$2[i$$5] = v443 / denominator$$1;
      var v444 = i$$5 + 1;
      var v2577 = a12$$1 * x$$51;
      var v2578 = a22$$1 * y$$34;
      var v2285 = v2577 + v2578;
      var v1472 = v2285 + a32$$1;
      points$$2[v444] = v1472 / denominator$$1;
      i$$5 = i$$5 + 2;
      v445 = i$$5 < max$$2
    }
    return
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
  return
}
function DetectorResult(bits$$1, points$$3) {
  this.bits = bits$$1;
  this.points = points$$3;
  return
}
function Detector(image$$5) {
  function v26() {
    var v446 = new FinderPatternFinder;
    var v447 = this.image;
    var info$$1 = JAMScript.call(v446.findFinderPattern, v446, [v447]);
    return JAMScript.call(this.processFinderPatternInfo, this, [info$$1])
  }
  function v25(info) {
    var topLeft$$3 = info.TopLeft;
    var topRight$$3 = info.TopRight;
    var bottomLeft$$3 = info.BottomLeft;
    var moduleSize$$1 = JAMScript.call(this.calculateModuleSize, this, [topLeft$$3, topRight$$3, bottomLeft$$3]);
    var v448 = moduleSize$$1 < 1;
    if(v448) {
      throw"Error";
    }
    var dimension$$7 = JAMScript.call(this.computeDimension, this, [topLeft$$3, topRight$$3, bottomLeft$$3, moduleSize$$1]);
    var provisionalVersion = JAMScript.call(Version.getProvisionalVersionForDimension, Version, [dimension$$7]);
    var v449 = provisionalVersion.DimensionForVersion;
    var modulesBetweenFPCenters = v449 - 7;
    var alignmentPattern$$1 = null;
    var v2286 = provisionalVersion.AlignmentPatternCenters;
    var v1473 = v2286.length;
    var v458 = v1473 > 0;
    if(v458) {
      var v1474 = topRight$$3.X;
      var v1475 = topLeft$$3.X;
      var v450 = v1474 - v1475;
      var v451 = bottomLeft$$3.X;
      var bottomRightX$$1 = v450 + v451;
      var v1476 = topRight$$3.Y;
      var v1477 = topLeft$$3.Y;
      var v452 = v1476 - v1477;
      var v453 = bottomLeft$$3.Y;
      var bottomRightY$$1 = v452 + v453;
      var v454 = 3 / modulesBetweenFPCenters;
      var correctionToTopLeft = 1 - v454;
      var v1478 = topLeft$$3.X;
      var v2579 = topLeft$$3.X;
      var v2287 = bottomRightX$$1 - v2579;
      var v1479 = correctionToTopLeft * v2287;
      var v455 = v1478 + v1479;
      var estAlignmentX$$1 = Math.floor(v455);
      var v1480 = topLeft$$3.Y;
      var v2580 = topLeft$$3.Y;
      var v2288 = bottomRightY$$1 - v2580;
      var v1481 = correctionToTopLeft * v2288;
      var v456 = v1480 + v1481;
      var estAlignmentY$$1 = Math.floor(v456);
      var i$$7 = 4;
      var v457 = i$$7 <= 16;
      for(;v457;) {
        alignmentPattern$$1 = JAMScript.call(this.findAlignmentInRegion, this, [moduleSize$$1, estAlignmentX$$1, estAlignmentY$$1, i$$7]);
        break
      }
    }
    var transform$$4 = JAMScript.call(this.createTransform, this, [topLeft$$3, topRight$$3, bottomLeft$$3, alignmentPattern$$1, dimension$$7]);
    var v459 = this.image;
    var bits$$2 = JAMScript.call(this.sampleGrid, this, [v459, transform$$4, dimension$$7]);
    var points$$4;
    var v460 = alignmentPattern$$1 == null;
    if(v460) {
      points$$4 = new Array(bottomLeft$$3, topLeft$$3, topRight$$3)
    }else {
      points$$4 = new Array(bottomLeft$$3, topLeft$$3, topRight$$3, alignmentPattern$$1)
    }
    return new DetectorResult(bits$$2, points$$4)
  }
  function v24(image$$6, transform$$3, dimension$$6) {
    var sampler = GridSampler;
    return JAMScript.call(sampler.sampleGrid3, sampler, [image$$6, dimension$$6, transform$$3])
  }
  function v23(topLeft$$2, topRight$$2, bottomLeft$$2, alignmentPattern, dimension$$5) {
    var dimMinusThree = dimension$$5 - 3.5;
    var bottomRightX;
    var bottomRightY;
    var sourceBottomRightX;
    var sourceBottomRightY;
    var v465 = alignmentPattern != null;
    if(v465) {
      bottomRightX = alignmentPattern.X;
      bottomRightY = alignmentPattern.Y;
      sourceBottomRightX = sourceBottomRightY = dimMinusThree - 3
    }else {
      var v1482 = topRight$$2.X;
      var v1483 = topLeft$$2.X;
      var v461 = v1482 - v1483;
      var v462 = bottomLeft$$2.X;
      bottomRightX = v461 + v462;
      var v1484 = topRight$$2.Y;
      var v1485 = topLeft$$2.Y;
      var v463 = v1484 - v1485;
      var v464 = bottomLeft$$2.Y;
      bottomRightY = v463 + v464;
      sourceBottomRightX = sourceBottomRightY = dimMinusThree
    }
    var v466 = topLeft$$2.X;
    var v467 = topLeft$$2.Y;
    var v468 = topRight$$2.X;
    var v469 = topRight$$2.Y;
    var v470 = bottomLeft$$2.X;
    var v471 = bottomLeft$$2.Y;
    var transform$$2 = JAMScript.call(PerspectiveTransform.quadrilateralToQuadrilateral, PerspectiveTransform, [3.5, 3.5, dimMinusThree, 3.5, sourceBottomRightX, sourceBottomRightY, 3.5, dimMinusThree, v466, v467, v468, v469, bottomRightX, bottomRightY, v470, v471]);
    return transform$$2
  }
  function v22(overallEstModuleSize, estAlignmentX, estAlignmentY, allowanceFactor) {
    var v472 = allowanceFactor * overallEstModuleSize;
    var allowance = Math.floor(v472);
    var v473 = estAlignmentX - allowance;
    var alignmentAreaLeftX = Math.max(0, v473);
    var v1486 = qrcode.width;
    var v474 = v1486 - 1;
    var v475 = estAlignmentX + allowance;
    var alignmentAreaRightX = Math.min(v474, v475);
    var v1487 = alignmentAreaRightX - alignmentAreaLeftX;
    var v1488 = overallEstModuleSize * 3;
    var v476 = v1487 < v1488;
    if(v476) {
      throw"Error";
    }
    var v477 = estAlignmentY - allowance;
    var alignmentAreaTopY = Math.max(0, v477);
    var v1489 = qrcode.height;
    var v478 = v1489 - 1;
    var v479 = estAlignmentY + allowance;
    var alignmentAreaBottomY = Math.min(v478, v479);
    var v480 = this.image;
    var v481 = alignmentAreaRightX - alignmentAreaLeftX;
    var v482 = alignmentAreaBottomY - alignmentAreaTopY;
    var v483 = this.resultPointCallback;
    var alignmentFinder = new AlignmentPatternFinder(v480, alignmentAreaLeftX, alignmentAreaTopY, v481, v482, overallEstModuleSize, v483);
    return JAMScript.call(alignmentFinder.find, alignmentFinder, [])
  }
  function v21(topLeft$$1, topRight$$1, bottomLeft$$1, moduleSize) {
    var v1490 = JAMScript.call(this.distance, this, [topLeft$$1, topRight$$1]);
    var v484 = v1490 / moduleSize;
    var tltrCentersDimension = Math.round(v484);
    var v1491 = JAMScript.call(this.distance, this, [topLeft$$1, bottomLeft$$1]);
    var v485 = v1491 / moduleSize;
    var tlblCentersDimension = Math.round(v485);
    var v1492 = tltrCentersDimension + tlblCentersDimension;
    var v486 = v1492 >> 1;
    var dimension$$4 = v486 + 7;
    var v487 = dimension$$4 & 3;
    switch(v487) {
      case 0:
        dimension$$4 = dimension$$4 + 1;
        break;
      case 2:
        dimension$$4 = dimension$$4 - 1;
        break;
      case 3:
        throw"Error";
    }
    return dimension$$4
  }
  function v20(pattern1, pattern2) {
    var v488 = pattern1.X;
    var v489 = pattern2.X;
    xDiff = v488 - v489;
    var v490 = pattern1.Y;
    var v491 = pattern2.Y;
    yDiff = v490 - v491;
    var v1493 = xDiff * xDiff;
    var v1494 = yDiff * yDiff;
    var v492 = v1493 + v1494;
    return Math.sqrt(v492)
  }
  function v19(topLeft, topRight, bottomLeft) {
    var v1495 = JAMScript.call(this.calculateModuleSizeOneWay, this, [topLeft, topRight]);
    var v1496 = JAMScript.call(this.calculateModuleSizeOneWay, this, [topLeft, bottomLeft]);
    var v493 = v1495 + v1496;
    return v493 / 2
  }
  function v18(pattern$$1, otherPattern) {
    var v1497 = pattern$$1.X;
    var v494 = Math.floor(v1497);
    var v1498 = pattern$$1.Y;
    var v495 = Math.floor(v1498);
    var v1499 = otherPattern.X;
    var v496 = Math.floor(v1499);
    var v1500 = otherPattern.Y;
    var v497 = Math.floor(v1500);
    var moduleSizeEst1 = JAMScript.call(this.sizeOfBlackWhiteBlackRunBothWays, this, [v494, v495, v496, v497]);
    var v1501 = otherPattern.X;
    var v498 = Math.floor(v1501);
    var v1502 = otherPattern.Y;
    var v499 = Math.floor(v1502);
    var v1503 = pattern$$1.X;
    var v500 = Math.floor(v1503);
    var v1504 = pattern$$1.Y;
    var v501 = Math.floor(v1504);
    var moduleSizeEst2 = JAMScript.call(this.sizeOfBlackWhiteBlackRunBothWays, this, [v498, v499, v500, v501]);
    var v502 = isNaN(moduleSizeEst1);
    if(v502) {
      return moduleSizeEst2 / 7
    }
    var v503 = isNaN(moduleSizeEst2);
    if(v503) {
      return moduleSizeEst1 / 7
    }
    var v504 = moduleSizeEst1 + moduleSizeEst2;
    return v504 / 14
  }
  function v17(fromX$$1, fromY$$1, toX$$1, toY$$1) {
    var result = JAMScript.call(this.sizeOfBlackWhiteBlackRun, this, [fromX$$1, fromY$$1, toX$$1, toY$$1]);
    var scale = 1;
    var v505 = toX$$1 - fromX$$1;
    var otherToX = fromX$$1 - v505;
    var v511 = otherToX < 0;
    if(v511) {
      var v506 = fromX$$1 - otherToX;
      scale = fromX$$1 / v506;
      otherToX = 0
    }else {
      var v1505 = qrcode.width;
      var v510 = otherToX >= v1505;
      if(v510) {
        var v2289 = qrcode.width;
        var v1506 = v2289 - 1;
        var v507 = v1506 - fromX$$1;
        var v508 = otherToX - fromX$$1;
        scale = v507 / v508;
        var v509 = qrcode.width;
        otherToX = v509 - 1
      }
    }
    var v2290 = toY$$1 - fromY$$1;
    var v1507 = v2290 * scale;
    var v512 = fromY$$1 - v1507;
    var otherToY = Math.floor(v512);
    scale = 1;
    var v518 = otherToY < 0;
    if(v518) {
      var v513 = fromY$$1 - otherToY;
      scale = fromY$$1 / v513;
      otherToY = 0
    }else {
      var v1508 = qrcode.height;
      var v517 = otherToY >= v1508;
      if(v517) {
        var v2291 = qrcode.height;
        var v1509 = v2291 - 1;
        var v514 = v1509 - fromY$$1;
        var v515 = otherToY - fromY$$1;
        scale = v514 / v515;
        var v516 = qrcode.height;
        otherToY = v516 - 1
      }
    }
    var v2292 = otherToX - fromX$$1;
    var v1510 = v2292 * scale;
    var v519 = fromX$$1 + v1510;
    otherToX = Math.floor(v519);
    var v1511 = JAMScript.call(this.sizeOfBlackWhiteBlackRun, this, [fromX$$1, fromY$$1, otherToX, otherToY]);
    result = result + v1511;
    return result - 1
  }
  function v16(fromX, fromY, toX, toY) {
    var v1512 = toY - fromY;
    var v520 = Math.abs(v1512);
    var v1513 = toX - fromX;
    var v521 = Math.abs(v1513);
    var steep = v520 > v521;
    if(steep) {
      var temp = fromX;
      fromX = fromY;
      fromY = temp;
      temp = toX;
      toX = toY;
      toY = temp
    }
    var v522 = toX - fromX;
    var dx$$4 = Math.abs(v522);
    var v523 = toY - fromY;
    var dy$$4 = Math.abs(v523);
    var v524 = -dx$$4;
    var error$$2 = v524 >> 1;
    var v525;
    var v1514 = fromY < toY;
    if(v1514) {
      v525 = 1
    }else {
      v525 = -1
    }
    var ystep = v525;
    var v526;
    var v1515 = fromX < toX;
    if(v1515) {
      v526 = 1
    }else {
      v526 = -1
    }
    var xstep = v526;
    var state = 0;
    var x$$53 = fromX;
    var y$$36 = fromY;
    var v536 = x$$53 != toX;
    for(;v536;) {
      var v527;
      if(steep) {
        v527 = y$$36
      }else {
        v527 = x$$53
      }
      var realX = v527;
      var v528;
      if(steep) {
        v528 = x$$53
      }else {
        v528 = y$$36
      }
      var realY = v528;
      var v531 = state == 1;
      if(v531) {
        var v1516 = this.image;
        var v2581 = qrcode.width;
        var v2293 = realY * v2581;
        var v1517 = realX + v2293;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v529 = v1516[v1517]
        }
        if(v529) {
          state = state + 1
        }
      }else {
        var v2294 = this.image;
        var v2729 = qrcode.width;
        var v2582 = realY * v2729;
        var v2295 = realX + v2582;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v1518 = v2294[v2295]
        }
        var v530 = !v1518;
        if(v530) {
          state = state + 1
        }
      }
      var v533 = state == 3;
      if(v533) {
        var diffX = x$$53 - fromX;
        var diffY = y$$36 - fromY;
        var v1519 = diffX * diffX;
        var v1520 = diffY * diffY;
        var v532 = v1519 + v1520;
        return Math.sqrt(v532)
      }
      error$$2 = error$$2 + dy$$4;
      var v535 = error$$2 > 0;
      if(v535) {
        var v534 = y$$36 == toY;
        if(v534) {
          break
        }
        y$$36 = y$$36 + ystep;
        error$$2 = error$$2 - dx$$4
      }
      x$$53 = x$$53 + xstep;
      v536 = x$$53 != toX
    }
    var diffX2 = toX - fromX;
    var diffY2 = toY - fromY;
    var v1521 = diffX2 * diffX2;
    var v1522 = diffY2 * diffY2;
    var v537 = v1521 + v1522;
    return Math.sqrt(v537)
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
  return
}
function FormatInformation(formatInfo) {
  function v30(o) {
    var other$$5 = o;
    var v1523 = this.errorCorrectionLevel;
    var v1524 = other$$5.errorCorrectionLevel;
    var v538 = v1523 == v1524;
    if(v538) {
      var v1525 = this.dataMask;
      var v1526 = other$$5.dataMask;
      v538 = v1525 == v1526
    }
    return v538
  }
  function v29() {
    var v2296 = this.errorCorrectionLevel;
    var v1527 = v2296.ordinal_Renamed_Field;
    var v539 = v1527 << 3;
    return v539 | dataMask
  }
  function v28() {
    return this.dataMask
  }
  function v27() {
    return this.errorCorrectionLevel
  }
  var v1528 = formatInfo >> 3;
  var v540 = v1528 & 3;
  var v2877 = JAMScript.call(ErrorCorrectionLevel.forBits, ErrorCorrectionLevel, [v540]);
  this.errorCorrectionLevel = v2877;
  this.dataMask = formatInfo & 7;
  JAMScript.call(this.__defineGetter__, this, ["ErrorCorrectionLevel", v27]);
  JAMScript.call(this.__defineGetter__, this, ["DataMask", v28]);
  this.GetHashCode = v29;
  this.Equals = v30;
  return
}
function ErrorCorrectionLevel(ordinal, bits$$3, name$$31) {
  function v33() {
    return this.ordinal_Renamed_Field
  }
  function v32() {
    return this.name
  }
  function v31() {
    return this.bits
  }
  this.ordinal_Renamed_Field = ordinal;
  this.bits = bits$$3;
  this.name = name$$31;
  JAMScript.call(this.__defineGetter__, this, ["Bits", v31]);
  JAMScript.call(this.__defineGetter__, this, ["Name", v32]);
  this.ordinal = v33;
  return
}
function BitMatrix(width$$10, height$$9) {
  function v41(left$$2, top$$2, width$$11, height$$10) {
    var v1529 = top$$2 < 0;
    var v2297 = !v1529;
    if(v2297) {
      v1529 = left$$2 < 0
    }
    var v541 = v1529;
    if(v541) {
      throw"Left and top must be nonnegative";
    }
    var v1530 = height$$10 < 1;
    var v2298 = !v1530;
    if(v2298) {
      v1530 = width$$11 < 1
    }
    var v542 = v1530;
    if(v542) {
      throw"Height and width must be at least 1";
    }
    var right$$2 = left$$2 + width$$11;
    var bottom$$1 = top$$2 + height$$10;
    var v2299 = this.height;
    var v1531 = bottom$$1 > v2299;
    var v2301 = !v1531;
    if(v2301) {
      var v2300 = this.width;
      v1531 = right$$2 > v2300
    }
    var v543 = v1531;
    if(v543) {
      throw"The region must fit inside the matrix";
    }
    var y$$40 = top$$2;
    var v548 = y$$40 < bottom$$1;
    for(;v548;) {
      var v544 = this.rowSize;
      var offset$$16 = y$$40 * v544;
      var x$$57 = left$$2;
      var v547 = x$$57 < right$$2;
      for(;v547;) {
        var v545 = this.bits;
        var v1532 = x$$57 >> 5;
        var v546 = offset$$16 + v1532;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v2302 = v545[v546]
        }
        var v2583 = x$$57 & 31;
        var v2303 = 1 << v2583;
        v545[v546] = v2302 | v2303;
        x$$57 = x$$57 + 1;
        v547 = x$$57 < right$$2
      }
      y$$40 = y$$40 + 1;
      v548 = y$$40 < bottom$$1
    }
    return
  }
  function v40() {
    var v549 = this.bits;
    var max$$3 = v549.length;
    var i$$10 = 0;
    var v551 = i$$10 < max$$3;
    for(;v551;) {
      var v550 = this.bits;
      v550[i$$10] = 0;
      i$$10 = i$$10 + 1;
      v551 = i$$10 < max$$3
    }
    return
  }
  function v39(x$$56, y$$39) {
    var v1533 = this.rowSize;
    var v552 = y$$39 * v1533;
    var v553 = x$$56 >> 5;
    var offset$$15 = v552 + v553;
    var v554 = this.bits;
    var v2304 = offset$$15;
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v2584 = v554[offset$$15]
    }
    var v2730 = x$$56 & 31;
    var v2585 = 1 << v2730;
    v554[v2304] = v2584 ^ v2585;
    return
  }
  function v38(x$$55, y$$38) {
    var v1534 = this.rowSize;
    var v555 = y$$38 * v1534;
    var v556 = x$$55 >> 5;
    var offset$$14 = v555 + v556;
    var v557 = this.bits;
    var v2305 = offset$$14;
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v2586 = v557[offset$$14]
    }
    var v2731 = x$$55 & 31;
    var v2587 = 1 << v2731;
    v557[v2305] = v2586 | v2587;
    return
  }
  function v37(x$$54, y$$37) {
    var v1535 = this.rowSize;
    var v558 = y$$37 * v1535;
    var v559 = x$$54 >> 5;
    var offset$$13 = v558 + v559;
    var v2588 = this.bits;
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v2306 = v2588[offset$$13]
    }
    var v2307 = x$$54 & 31;
    var v1536 = URShift(v2306, v2307);
    var v560 = v1536 & 1;
    return v560 != 0
  }
  function v36() {
    var v1537 = this.width;
    var v1538 = this.height;
    var v561 = v1537 != v1538;
    if(v561) {
      throw"Can't call getDimension() on a non-square matrix";
    }
    return this.width
  }
  function v35() {
    return this.height
  }
  function v34() {
    return this.width
  }
  var v562 = !height$$9;
  if(v562) {
    height$$9 = width$$10
  }
  var v1539 = width$$10 < 1;
  var v2308 = !v1539;
  if(v2308) {
    v1539 = height$$9 < 1
  }
  var v563 = v1539;
  if(v563) {
    throw"Both dimensions must be greater than 0";
  }
  this.width = width$$10;
  this.height = height$$9;
  var rowSize = width$$10 >> 5;
  var v1540 = width$$10 & 31;
  var v564 = v1540 != 0;
  if(v564) {
    rowSize = rowSize + 1
  }
  this.rowSize = rowSize;
  var v565 = rowSize * height$$9;
  var v2878 = new Array(v565);
  this.bits = v2878;
  var i$$9 = 0;
  var v2309 = this.bits;
  var v1541 = v2309.length;
  var v567 = i$$9 < v1541;
  for(;v567;) {
    var v566 = this.bits;
    v566[i$$9] = 0;
    i$$9 = i$$9 + 1;
    var v2310 = this.bits;
    var v1542 = v2310.length;
    v567 = i$$9 < v1542
  }
  JAMScript.call(this.__defineGetter__, this, ["Width", v34]);
  JAMScript.call(this.__defineGetter__, this, ["Height", v35]);
  JAMScript.call(this.__defineGetter__, this, ["Dimension", v36]);
  this.get_Renamed = v37;
  this.set_Renamed = v38;
  this.flip = v39;
  this.clear = v40;
  this.setRegion = v41;
  return
}
function DataBlock(numDataCodewords, codewords) {
  function v43() {
    return this.codewords
  }
  function v42() {
    return this.numDataCodewords
  }
  this.numDataCodewords = numDataCodewords;
  this.codewords = codewords;
  JAMScript.call(this.__defineGetter__, this, ["NumDataCodewords", v42]);
  JAMScript.call(this.__defineGetter__, this, ["Codewords", v43]);
  return
}
function BitMatrixParser(bitMatrix$$1) {
  function v47() {
    var formatInfo$$2 = JAMScript.call(this.readFormatInformation, this, []);
    var version$$6 = JAMScript.call(this.readVersion, this, []);
    var v568 = formatInfo$$2.DataMask;
    var dataMask$$1 = JAMScript.call(DataMask.forReference, DataMask, [v568]);
    var v569 = this.bitMatrix;
    var dimension$$11 = v569.Dimension;
    var v570 = this.bitMatrix;
    JAMScript.call(dataMask$$1.unmaskBitMatrix, dataMask$$1, [v570, dimension$$11]);
    var functionPattern = JAMScript.call(version$$6.buildFunctionPattern, version$$6, []);
    var readingUp = true;
    var v571 = version$$6.TotalCodewords;
    var result$$2 = new Array(v571);
    var resultOffset = 0;
    var currentByte = 0;
    var bitsRead = 0;
    var j$$4 = dimension$$11 - 1;
    var v580 = j$$4 > 0;
    for(;v580;) {
      var v572 = j$$4 == 6;
      if(v572) {
        j$$4 = j$$4 - 1
      }
      var count$$7 = 0;
      var v579 = count$$7 < dimension$$11;
      for(;v579;) {
        var v573;
        if(readingUp) {
          var v1543 = dimension$$11 - 1;
          v573 = v1543 - count$$7
        }else {
          v573 = count$$7
        }
        var i$$15 = v573;
        var col = 0;
        var v578 = col < 2;
        for(;v578;) {
          var v2311 = j$$4 - col;
          var v1544 = JAMScript.call(functionPattern.get_Renamed, functionPattern, [v2311, i$$15]);
          var v577 = !v1544;
          if(v577) {
            bitsRead = bitsRead + 1;
            currentByte = currentByte << 1;
            var v1545 = this.bitMatrix;
            var v1546 = j$$4 - col;
            var v574 = JAMScript.call(v1545.get_Renamed, v1545, [v1546, i$$15]);
            if(v574) {
              currentByte = currentByte | 1
            }
            var v576 = bitsRead == 8;
            if(v576) {
              var v575 = resultOffset;
              resultOffset = resultOffset + 1;
              result$$2[v575] = currentByte;
              bitsRead = 0;
              currentByte = 0
            }
          }
          col = col + 1;
          v578 = col < 2
        }
        count$$7 = count$$7 + 1;
        v579 = count$$7 < dimension$$11
      }
      readingUp = readingUp ^ true;
      j$$4 = j$$4 - 2;
      v580 = j$$4 > 0
    }
    var v1547 = version$$6.TotalCodewords;
    var v581 = resultOffset != v1547;
    if(v581) {
      throw"Error readCodewords";
    }
    return result$$2
  }
  function v46() {
    var v1548 = this.parsedVersion;
    var v582 = v1548 != null;
    if(v582) {
      return this.parsedVersion
    }
    var v583 = this.bitMatrix;
    var dimension$$10 = v583.Dimension;
    var v584 = dimension$$10 - 17;
    var provisionalVersion$$1 = v584 >> 2;
    var v585 = provisionalVersion$$1 <= 6;
    if(v585) {
      return JAMScript.call(Version.getVersionForNumber, Version, [provisionalVersion$$1])
    }
    var versionBits$$2 = 0;
    var ijMin = dimension$$10 - 11;
    var j$$3 = 5;
    var v587 = j$$3 >= 0;
    for(;v587;) {
      var i$$14 = dimension$$10 - 9;
      var v586 = i$$14 >= ijMin;
      for(;v586;) {
        versionBits$$2 = JAMScript.call(this.copyBit, this, [i$$14, j$$3, versionBits$$2]);
        i$$14 = i$$14 - 1;
        v586 = i$$14 >= ijMin
      }
      j$$3 = j$$3 - 1;
      v587 = j$$3 >= 0
    }
    var v2879 = JAMScript.call(Version.decodeVersionInformation, Version, [versionBits$$2]);
    this.parsedVersion = v2879;
    var v2312 = this.parsedVersion;
    var v1549 = v2312 != null;
    if(v1549) {
      var v2589 = this.parsedVersion;
      var v2313 = v2589.DimensionForVersion;
      v1549 = v2313 == dimension$$10
    }
    var v588 = v1549;
    if(v588) {
      return this.parsedVersion
    }
    versionBits$$2 = 0;
    i$$14 = 5;
    var v590 = i$$14 >= 0;
    for(;v590;) {
      j$$3 = dimension$$10 - 9;
      var v589 = j$$3 >= ijMin;
      for(;v589;) {
        versionBits$$2 = JAMScript.call(this.copyBit, this, [i$$14, j$$3, versionBits$$2]);
        j$$3 = j$$3 - 1;
        v589 = j$$3 >= ijMin
      }
      i$$14 = i$$14 - 1;
      v590 = i$$14 >= 0
    }
    var v2880 = JAMScript.call(Version.decodeVersionInformation, Version, [versionBits$$2]);
    this.parsedVersion = v2880;
    var v2314 = this.parsedVersion;
    var v1550 = v2314 != null;
    if(v1550) {
      var v2590 = this.parsedVersion;
      var v2315 = v2590.DimensionForVersion;
      v1550 = v2315 == dimension$$10
    }
    var v591 = v1550;
    if(v591) {
      return this.parsedVersion
    }
    throw"Error readVersion";
  }
  function v45() {
    var v1551 = this.parsedFormatInfo;
    var v592 = v1551 != null;
    if(v592) {
      return this.parsedFormatInfo
    }
    var formatInfoBits = 0;
    var i$$13 = 0;
    var v593 = i$$13 < 6;
    for(;v593;) {
      formatInfoBits = JAMScript.call(this.copyBit, this, [i$$13, 8, formatInfoBits]);
      i$$13 = i$$13 + 1;
      v593 = i$$13 < 6
    }
    formatInfoBits = JAMScript.call(this.copyBit, this, [7, 8, formatInfoBits]);
    formatInfoBits = JAMScript.call(this.copyBit, this, [8, 8, formatInfoBits]);
    formatInfoBits = JAMScript.call(this.copyBit, this, [8, 7, formatInfoBits]);
    var j$$2 = 5;
    var v594 = j$$2 >= 0;
    for(;v594;) {
      formatInfoBits = JAMScript.call(this.copyBit, this, [8, j$$2, formatInfoBits]);
      j$$2 = j$$2 - 1;
      v594 = j$$2 >= 0
    }
    var v2881 = JAMScript.call(FormatInformation.decodeFormatInformation, FormatInformation, [formatInfoBits]);
    this.parsedFormatInfo = v2881;
    var v1552 = this.parsedFormatInfo;
    var v595 = v1552 != null;
    if(v595) {
      return this.parsedFormatInfo
    }
    var v596 = this.bitMatrix;
    var dimension$$9 = v596.Dimension;
    formatInfoBits = 0;
    var iMin = dimension$$9 - 8;
    i$$13 = dimension$$9 - 1;
    var v597 = i$$13 >= iMin;
    for(;v597;) {
      formatInfoBits = JAMScript.call(this.copyBit, this, [i$$13, 8, formatInfoBits]);
      i$$13 = i$$13 - 1;
      v597 = i$$13 >= iMin
    }
    j$$2 = dimension$$9 - 7;
    var v598 = j$$2 < dimension$$9;
    for(;v598;) {
      formatInfoBits = JAMScript.call(this.copyBit, this, [8, j$$2, formatInfoBits]);
      j$$2 = j$$2 + 1;
      v598 = j$$2 < dimension$$9
    }
    var v2882 = JAMScript.call(FormatInformation.decodeFormatInformation, FormatInformation, [formatInfoBits]);
    this.parsedFormatInfo = v2882;
    var v1553 = this.parsedFormatInfo;
    var v599 = v1553 != null;
    if(v599) {
      return this.parsedFormatInfo
    }
    throw"Error readFormatInformation";
  }
  function v44(i$$12, j$$1, versionBits$$1) {
    var v600;
    var v2316 = this.bitMatrix;
    var v1555 = JAMScript.call(v2316.get_Renamed, v2316, [i$$12, j$$1]);
    if(v1555) {
      var v1554 = versionBits$$1 << 1;
      v600 = v1554 | 1
    }else {
      v600 = versionBits$$1 << 1
    }
    return v600
  }
  var dimension$$8 = bitMatrix$$1.Dimension;
  var v1556 = dimension$$8 < 21;
  var v2318 = !v1556;
  if(v2318) {
    var v2317 = dimension$$8 & 3;
    v1556 = v2317 != 1
  }
  var v601 = v1556;
  if(v601) {
    throw"Error BitMatrixParser";
  }
  this.bitMatrix = bitMatrix$$1;
  this.parsedVersion = null;
  this.parsedFormatInfo = null;
  this.copyBit = v44;
  this.readFormatInformation = v45;
  this.readVersion = v46;
  this.readCodewords = v47;
  return
}
function DataMask000() {
  function v49(i$$17, j$$6) {
    var v1557 = i$$17 + j$$6;
    var v602 = v1557 & 1;
    return v602 == 0
  }
  function v48(bits$$5, dimension$$12) {
    var i$$16 = 0;
    var v605 = i$$16 < dimension$$12;
    for(;v605;) {
      var j$$5 = 0;
      var v604 = j$$5 < dimension$$12;
      for(;v604;) {
        var v603 = JAMScript.call(this.isMasked, this, [i$$16, j$$5]);
        if(v603) {
          JAMScript.call(bits$$5.flip, bits$$5, [j$$5, i$$16])
        }
        j$$5 = j$$5 + 1;
        v604 = j$$5 < dimension$$12
      }
      i$$16 = i$$16 + 1;
      v605 = i$$16 < dimension$$12
    }
    return
  }
  this.unmaskBitMatrix = v48;
  this.isMasked = v49;
  return
}
function DataMask001() {
  function v51(i$$19, j$$8) {
    var v606 = i$$19 & 1;
    return v606 == 0
  }
  function v50(bits$$6, dimension$$13) {
    var i$$18 = 0;
    var v609 = i$$18 < dimension$$13;
    for(;v609;) {
      var j$$7 = 0;
      var v608 = j$$7 < dimension$$13;
      for(;v608;) {
        var v607 = JAMScript.call(this.isMasked, this, [i$$18, j$$7]);
        if(v607) {
          JAMScript.call(bits$$6.flip, bits$$6, [j$$7, i$$18])
        }
        j$$7 = j$$7 + 1;
        v608 = j$$7 < dimension$$13
      }
      i$$18 = i$$18 + 1;
      v609 = i$$18 < dimension$$13
    }
    return
  }
  this.unmaskBitMatrix = v50;
  this.isMasked = v51;
  return
}
function DataMask010() {
  function v53(i$$21, j$$10) {
    var v610 = j$$10 % 3;
    return v610 == 0
  }
  function v52(bits$$7, dimension$$14) {
    var i$$20 = 0;
    var v613 = i$$20 < dimension$$14;
    for(;v613;) {
      var j$$9 = 0;
      var v612 = j$$9 < dimension$$14;
      for(;v612;) {
        var v611 = JAMScript.call(this.isMasked, this, [i$$20, j$$9]);
        if(v611) {
          JAMScript.call(bits$$7.flip, bits$$7, [j$$9, i$$20])
        }
        j$$9 = j$$9 + 1;
        v612 = j$$9 < dimension$$14
      }
      i$$20 = i$$20 + 1;
      v613 = i$$20 < dimension$$14
    }
    return
  }
  this.unmaskBitMatrix = v52;
  this.isMasked = v53;
  return
}
function DataMask011() {
  function v55(i$$23, j$$12) {
    var v1558 = i$$23 + j$$12;
    var v614 = v1558 % 3;
    return v614 == 0
  }
  function v54(bits$$8, dimension$$15) {
    var i$$22 = 0;
    var v617 = i$$22 < dimension$$15;
    for(;v617;) {
      var j$$11 = 0;
      var v616 = j$$11 < dimension$$15;
      for(;v616;) {
        var v615 = JAMScript.call(this.isMasked, this, [i$$22, j$$11]);
        if(v615) {
          JAMScript.call(bits$$8.flip, bits$$8, [j$$11, i$$22])
        }
        j$$11 = j$$11 + 1;
        v616 = j$$11 < dimension$$15
      }
      i$$22 = i$$22 + 1;
      v617 = i$$22 < dimension$$15
    }
    return
  }
  this.unmaskBitMatrix = v54;
  this.isMasked = v55;
  return
}
function DataMask100() {
  function v57(i$$25, j$$14) {
    var v2319 = URShift(i$$25, 1);
    var v2320 = j$$14 / 3;
    var v1559 = v2319 + v2320;
    var v618 = v1559 & 1;
    return v618 == 0
  }
  function v56(bits$$9, dimension$$16) {
    var i$$24 = 0;
    var v621 = i$$24 < dimension$$16;
    for(;v621;) {
      var j$$13 = 0;
      var v620 = j$$13 < dimension$$16;
      for(;v620;) {
        var v619 = JAMScript.call(this.isMasked, this, [i$$24, j$$13]);
        if(v619) {
          JAMScript.call(bits$$9.flip, bits$$9, [j$$13, i$$24])
        }
        j$$13 = j$$13 + 1;
        v620 = j$$13 < dimension$$16
      }
      i$$24 = i$$24 + 1;
      v621 = i$$24 < dimension$$16
    }
    return
  }
  this.unmaskBitMatrix = v56;
  this.isMasked = v57;
  return
}
function DataMask101() {
  function v59(i$$27, j$$16) {
    var temp$$1 = i$$27 * j$$16;
    var v1560 = temp$$1 & 1;
    var v1561 = temp$$1 % 3;
    var v622 = v1560 + v1561;
    return v622 == 0
  }
  function v58(bits$$10, dimension$$17) {
    var i$$26 = 0;
    var v625 = i$$26 < dimension$$17;
    for(;v625;) {
      var j$$15 = 0;
      var v624 = j$$15 < dimension$$17;
      for(;v624;) {
        var v623 = JAMScript.call(this.isMasked, this, [i$$26, j$$15]);
        if(v623) {
          JAMScript.call(bits$$10.flip, bits$$10, [j$$15, i$$26])
        }
        j$$15 = j$$15 + 1;
        v624 = j$$15 < dimension$$17
      }
      i$$26 = i$$26 + 1;
      v625 = i$$26 < dimension$$17
    }
    return
  }
  this.unmaskBitMatrix = v58;
  this.isMasked = v59;
  return
}
function DataMask110() {
  function v61(i$$29, j$$18) {
    var temp$$2 = i$$29 * j$$18;
    var v2321 = temp$$2 & 1;
    var v2322 = temp$$2 % 3;
    var v1562 = v2321 + v2322;
    var v626 = v1562 & 1;
    return v626 == 0
  }
  function v60(bits$$11, dimension$$18) {
    var i$$28 = 0;
    var v629 = i$$28 < dimension$$18;
    for(;v629;) {
      var j$$17 = 0;
      var v628 = j$$17 < dimension$$18;
      for(;v628;) {
        var v627 = JAMScript.call(this.isMasked, this, [i$$28, j$$17]);
        if(v627) {
          JAMScript.call(bits$$11.flip, bits$$11, [j$$17, i$$28])
        }
        j$$17 = j$$17 + 1;
        v628 = j$$17 < dimension$$18
      }
      i$$28 = i$$28 + 1;
      v629 = i$$28 < dimension$$18
    }
    return
  }
  this.unmaskBitMatrix = v60;
  this.isMasked = v61;
  return
}
function DataMask111() {
  function v63(i$$31, j$$20) {
    var v2591 = i$$31 + j$$20;
    var v2323 = v2591 & 1;
    var v2592 = i$$31 * j$$20;
    var v2324 = v2592 % 3;
    var v1563 = v2323 + v2324;
    var v630 = v1563 & 1;
    return v630 == 0
  }
  function v62(bits$$12, dimension$$19) {
    var i$$30 = 0;
    var v633 = i$$30 < dimension$$19;
    for(;v633;) {
      var j$$19 = 0;
      var v632 = j$$19 < dimension$$19;
      for(;v632;) {
        var v631 = JAMScript.call(this.isMasked, this, [i$$30, j$$19]);
        if(v631) {
          JAMScript.call(bits$$12.flip, bits$$12, [j$$19, i$$30])
        }
        j$$19 = j$$19 + 1;
        v632 = j$$19 < dimension$$19
      }
      i$$30 = i$$30 + 1;
      v633 = i$$30 < dimension$$19
    }
    return
  }
  this.unmaskBitMatrix = v62;
  this.isMasked = v63;
  return
}
function ReedSolomonDecoder(field) {
  function v67(errorEvaluator, errorLocations$$1, dataMatrix$$1) {
    var s$$3 = errorLocations$$1.length;
    var result$$4 = new Array(s$$3);
    var i$$34 = 0;
    var v644 = i$$34 < s$$3;
    for(;v644;) {
      var v634 = this.field;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v635 = errorLocations$$1[i$$34]
      }
      var xiInverse = JAMScript.call(v634.inverse, v634, [v635]);
      var denominator$$3 = 1;
      var j$$21 = 0;
      var v639 = j$$21 < s$$3;
      for(;v639;) {
        var v638 = i$$34 != j$$21;
        if(v638) {
          var v636 = this.field;
          var v2325 = this.field;
          introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
            var v2326 = errorLocations$$1[j$$21]
          }
          var v1564 = JAMScript.call(v2325.multiply, v2325, [v2326, xiInverse]);
          var v637 = JAMScript.call(GF256.addOrSubtract, GF256, [1, v1564]);
          denominator$$3 = JAMScript.call(v636.multiply, v636, [denominator$$3, v637])
        }
        j$$21 = j$$21 + 1;
        v639 = j$$21 < s$$3
      }
      var v640 = result$$4;
      var v641 = i$$34;
      var v1565 = this.field;
      var v1566 = JAMScript.call(errorEvaluator.evaluateAt, errorEvaluator, [xiInverse]);
      var v2327 = this.field;
      var v1567 = JAMScript.call(v2327.inverse, v2327, [denominator$$3]);
      var v2883 = JAMScript.call(v1565.multiply, v1565, [v1566, v1567]);
      v640[v641] = v2883;
      if(dataMatrix$$1) {
        var v642 = result$$4;
        var v643 = i$$34;
        var v1568 = this.field;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v1569 = result$$4[i$$34]
        }
        var v2884 = JAMScript.call(v1568.multiply, v1568, [v1569, xiInverse]);
        v642[v643] = v2884
      }
      i$$34 = i$$34 + 1;
      v644 = i$$34 < s$$3
    }
    return result$$4
  }
  function v66(errorLocator) {
    var numErrors = errorLocator.Degree;
    var v646 = numErrors == 1;
    if(v646) {
      var v645 = JAMScript.call(errorLocator.getCoefficient, errorLocator, [1]);
      return new Array(v645)
    }
    var result$$3 = new Array(numErrors);
    var e$$4 = 0;
    var i$$33 = 1;
    var v1570 = i$$33 < 256;
    if(v1570) {
      v1570 = e$$4 < numErrors
    }
    var v650 = v1570;
    for(;v650;) {
      var v1571 = JAMScript.call(errorLocator.evaluateAt, errorLocator, [i$$33]);
      var v649 = v1571 == 0;
      if(v649) {
        var v647 = result$$3;
        var v648 = e$$4;
        var v1572 = this.field;
        var v2885 = JAMScript.call(v1572.inverse, v1572, [i$$33]);
        v647[v648] = v2885;
        e$$4 = e$$4 + 1
      }
      i$$33 = i$$33 + 1;
      var v1573 = i$$33 < 256;
      if(v1573) {
        v1573 = e$$4 < numErrors
      }
      v650 = v1573
    }
    var v651 = e$$4 != numErrors;
    if(v651) {
      throw"Error locator degree does not match number of roots";
    }
    return result$$3
  }
  function v65(a$$1, b$$2, R) {
    var v1574 = a$$1.Degree;
    var v1575 = b$$2.Degree;
    var v652 = v1574 < v1575;
    if(v652) {
      var temp$$3 = a$$1;
      a$$1 = b$$2;
      b$$2 = temp$$3
    }
    var rLast = a$$1;
    var r$$1 = b$$2;
    var v653 = this.field;
    var sLast = v653.One;
    var v654 = this.field;
    var s$$2 = v654.Zero;
    var v655 = this.field;
    var tLast = v655.Zero;
    var v656 = this.field;
    var t = v656.One;
    var v1576 = r$$1.Degree;
    var v2328 = R / 2;
    var v1577 = Math.floor(v2328);
    var v670 = v1576 >= v1577;
    for(;v670;) {
      var rLastLast = rLast;
      var sLastLast = sLast;
      var tLastLast = tLast;
      rLast = r$$1;
      sLast = s$$2;
      tLast = t;
      var v657 = rLast.Zero;
      if(v657) {
        throw"r_{i-1} was zero";
      }
      r$$1 = rLastLast;
      var v658 = this.field;
      var q = v658.Zero;
      var v659 = rLast.Degree;
      var denominatorLeadingTerm = JAMScript.call(rLast.getCoefficient, rLast, [v659]);
      var v660 = this.field;
      var dltInverse = JAMScript.call(v660.inverse, v660, [denominatorLeadingTerm]);
      var v2329 = r$$1.Degree;
      var v2330 = rLast.Degree;
      var v1578 = v2329 >= v2330;
      if(v1578) {
        var v2331 = r$$1.Zero;
        v1578 = !v2331
      }
      var v667 = v1578;
      for(;v667;) {
        var v661 = r$$1.Degree;
        var v662 = rLast.Degree;
        var degreeDiff = v661 - v662;
        var v663 = this.field;
        var v1579 = r$$1.Degree;
        var v664 = JAMScript.call(r$$1.getCoefficient, r$$1, [v1579]);
        var scale$$1 = JAMScript.call(v663.multiply, v663, [v664, dltInverse]);
        var v1580 = this.field;
        var v665 = JAMScript.call(v1580.buildMonomial, v1580, [degreeDiff, scale$$1]);
        q = JAMScript.call(q.addOrSubtract, q, [v665]);
        var v666 = JAMScript.call(rLast.multiplyByMonomial, rLast, [degreeDiff, scale$$1]);
        r$$1 = JAMScript.call(r$$1.addOrSubtract, r$$1, [v666]);
        var v2332 = r$$1.Degree;
        var v2333 = rLast.Degree;
        var v1581 = v2332 >= v2333;
        if(v1581) {
          var v2334 = r$$1.Zero;
          v1581 = !v2334
        }
        v667 = v1581
      }
      var v668 = JAMScript.call(q.multiply1, q, [sLast]);
      s$$2 = JAMScript.call(v668.addOrSubtract, v668, [sLastLast]);
      var v669 = JAMScript.call(q.multiply1, q, [tLast]);
      t = JAMScript.call(v669.addOrSubtract, v669, [tLastLast]);
      var v1582 = r$$1.Degree;
      var v2335 = R / 2;
      var v1583 = Math.floor(v2335);
      v670 = v1582 >= v1583
    }
    var sigmaTildeAtZero = JAMScript.call(t.getCoefficient, t, [0]);
    var v671 = sigmaTildeAtZero == 0;
    if(v671) {
      throw"ReedSolomonException sigmaTilde(0) was zero";
    }
    var v672 = this.field;
    var inverse = JAMScript.call(v672.inverse, v672, [sigmaTildeAtZero]);
    var sigma$$1 = JAMScript.call(t.multiply2, t, [inverse]);
    var omega$$1 = JAMScript.call(r$$1.multiply2, r$$1, [inverse]);
    return new Array(sigma$$1, omega$$1)
  }
  function v64(received, twoS) {
    var v673 = this.field;
    var poly = new GF256Poly(v673, received);
    var syndromeCoefficients = new Array(twoS);
    var i$$32 = 0;
    var v1584 = syndromeCoefficients.length;
    var v674 = i$$32 < v1584;
    for(;v674;) {
      syndromeCoefficients[i$$32] = 0;
      i$$32 = i$$32 + 1;
      var v1585 = syndromeCoefficients.length;
      v674 = i$$32 < v1585
    }
    var dataMatrix = false;
    var noError = true;
    i$$32 = 0;
    var v678 = i$$32 < twoS;
    for(;v678;) {
      var v1586 = this.field;
      var v2336;
      if(dataMatrix) {
        v2336 = i$$32 + 1
      }else {
        v2336 = i$$32
      }
      var v1587 = v2336;
      var v675 = JAMScript.call(v1586.exp, v1586, [v1587]);
      var eval$$1 = JAMScript.call(poly.evaluateAt, poly, [v675]);
      var v2337 = syndromeCoefficients.length;
      var v1588 = v2337 - 1;
      var v676 = v1588 - i$$32;
      syndromeCoefficients[v676] = eval$$1;
      var v677 = eval$$1 != 0;
      if(v677) {
        noError = false
      }
      i$$32 = i$$32 + 1;
      v678 = i$$32 < twoS
    }
    if(noError) {
      return
    }
    var v679 = this.field;
    var syndrome = new GF256Poly(v679, syndromeCoefficients);
    var v1589 = this.field;
    var v680 = JAMScript.call(v1589.buildMonomial, v1589, [twoS, 1]);
    var sigmaOmega = JAMScript.call(this.runEuclideanAlgorithm, this, [v680, syndrome, twoS]);
    var sigma = sigmaOmega[0];
    var omega = sigmaOmega[1];
    var errorLocations = JAMScript.call(this.findErrorLocations, this, [sigma]);
    var errorMagnitudes = JAMScript.call(this.findErrorMagnitudes, this, [omega, errorLocations, dataMatrix]);
    i$$32 = 0;
    var v1590 = errorLocations.length;
    var v686 = i$$32 < v1590;
    for(;v686;) {
      var v1591 = received.length;
      var v681 = v1591 - 1;
      var v1592 = this.field;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v1593 = errorLocations[i$$32]
      }
      var v682 = JAMScript.call(v1592.log, v1592, [v1593]);
      var position = v681 - v682;
      var v683 = position < 0;
      if(v683) {
        throw"ReedSolomonException Bad error location";
      }
      var v684 = received;
      var v685 = position;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v1594 = received[position]
      }
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v1595 = errorMagnitudes[i$$32]
      }
      var v2886 = JAMScript.call(GF256.addOrSubtract, GF256, [v1594, v1595]);
      v684[v685] = v2886;
      i$$32 = i$$32 + 1;
      var v1596 = errorLocations.length;
      v686 = i$$32 < v1596
    }
    return
  }
  this.field = field;
  this.decode = v64;
  this.runEuclideanAlgorithm = v65;
  this.findErrorLocations = v66;
  this.findErrorMagnitudes = v67;
  return
}
function GF256Poly(field$$1, coefficients) {
  function v77(other$$8) {
    var v1597 = this.field;
    var v1598 = other$$8.field;
    var v687 = v1597 != v1598;
    if(v687) {
      throw"GF256Polys do not have same GF256 field";
    }
    var v688 = other$$8.Zero;
    if(v688) {
      throw"Divide by 0";
    }
    var v689 = this.field;
    var quotient = v689.Zero;
    var remainder = this;
    var v690 = other$$8.Degree;
    var denominatorLeadingTerm$$1 = JAMScript.call(other$$8.getCoefficient, other$$8, [v690]);
    var v691 = this.field;
    var inverseDenominatorLeadingTerm = JAMScript.call(v691.inverse, v691, [denominatorLeadingTerm$$1]);
    var v2338 = remainder.Degree;
    var v2339 = other$$8.Degree;
    var v1599 = v2338 >= v2339;
    if(v1599) {
      var v2340 = remainder.Zero;
      v1599 = !v2340
    }
    var v697 = v1599;
    for(;v697;) {
      var v692 = remainder.Degree;
      var v693 = other$$8.Degree;
      var degreeDifference = v692 - v693;
      var v694 = this.field;
      var v1600 = remainder.Degree;
      var v695 = JAMScript.call(remainder.getCoefficient, remainder, [v1600]);
      var scale$$2 = JAMScript.call(v694.multiply, v694, [v695, inverseDenominatorLeadingTerm]);
      var term = JAMScript.call(other$$8.multiplyByMonomial, other$$8, [degreeDifference, scale$$2]);
      var v696 = this.field;
      var iterationQuotient = JAMScript.call(v696.buildMonomial, v696, [degreeDifference, scale$$2]);
      quotient = JAMScript.call(quotient.addOrSubtract, quotient, [iterationQuotient]);
      remainder = JAMScript.call(remainder.addOrSubtract, remainder, [term]);
      var v2341 = remainder.Degree;
      var v2342 = other$$8.Degree;
      var v1601 = v2341 >= v2342;
      if(v1601) {
        var v2343 = remainder.Zero;
        v1601 = !v2343
      }
      v697 = v1601
    }
    return new Array(quotient, remainder)
  }
  function v76(degree$$1, coefficient) {
    var v698 = degree$$1 < 0;
    if(v698) {
      throw"System.ArgumentException";
    }
    var v700 = coefficient == 0;
    if(v700) {
      var v699 = this.field;
      return v699.Zero
    }
    var v701 = this.coefficients;
    var size$$6 = v701.length;
    var v702 = size$$6 + degree$$1;
    var product$$2 = new Array(v702);
    var i$$40 = 0;
    var v1602 = product$$2.length;
    var v703 = i$$40 < v1602;
    for(;v703;) {
      product$$2[i$$40] = 0;
      i$$40 = i$$40 + 1;
      var v1603 = product$$2.length;
      v703 = i$$40 < v1603
    }
    i$$40 = 0;
    var v706 = i$$40 < size$$6;
    for(;v706;) {
      var v704 = product$$2;
      var v705 = i$$40;
      var v1604 = this.field;
      var v2344 = this.coefficients;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v1605 = v2344[i$$40]
      }
      var v2887 = JAMScript.call(v1604.multiply, v1604, [v1605, coefficient]);
      v704[v705] = v2887;
      i$$40 = i$$40 + 1;
      v706 = i$$40 < size$$6
    }
    var v707 = this.field;
    return new GF256Poly(v707, product$$2)
  }
  function v75(scalar) {
    var v709 = scalar == 0;
    if(v709) {
      var v708 = this.field;
      return v708.Zero
    }
    var v710 = scalar == 1;
    if(v710) {
      return this
    }
    var v711 = this.coefficients;
    var size$$5 = v711.length;
    var product$$1 = new Array(size$$5);
    var i$$39 = 0;
    var v714 = i$$39 < size$$5;
    for(;v714;) {
      var v712 = product$$1;
      var v713 = i$$39;
      var v1606 = this.field;
      var v2345 = this.coefficients;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v1607 = v2345[i$$39]
      }
      var v2888 = JAMScript.call(v1606.multiply, v1606, [v1607, scalar]);
      v712[v713] = v2888;
      i$$39 = i$$39 + 1;
      v714 = i$$39 < size$$5
    }
    var v715 = this.field;
    return new GF256Poly(v715, product$$1)
  }
  function v74(other$$7) {
    var v1608 = this.field;
    var v1609 = other$$7.field;
    var v716 = v1608 != v1609;
    if(v716) {
      throw"GF256Polys do not have same GF256 field";
    }
    var v1610 = this.Zero;
    var v2346 = !v1610;
    if(v2346) {
      v1610 = other$$7.Zero
    }
    var v718 = v1610;
    if(v718) {
      var v717 = this.field;
      return v717.Zero
    }
    var aCoefficients = this.coefficients;
    var aLength = aCoefficients.length;
    var bCoefficients = other$$7.coefficients;
    var bLength = bCoefficients.length;
    var v1611 = aLength + bLength;
    var v719 = v1611 - 1;
    var product = new Array(v719);
    var i$$38 = 0;
    var v723 = i$$38 < aLength;
    for(;v723;) {
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var aCoeff = aCoefficients[i$$38]
      }
      var j$$22 = 0;
      var v722 = j$$22 < bLength;
      for(;v722;) {
        var v720 = product;
        var v721 = i$$38 + j$$22;
        var v2347 = i$$38 + j$$22;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v1612 = product[v2347]
        }
        var v2348 = this.field;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v2349 = bCoefficients[j$$22]
        }
        var v1613 = JAMScript.call(v2348.multiply, v2348, [aCoeff, v2349]);
        var v2889 = JAMScript.call(GF256.addOrSubtract, GF256, [v1612, v1613]);
        v720[v721] = v2889;
        j$$22 = j$$22 + 1;
        v722 = j$$22 < bLength
      }
      i$$38 = i$$38 + 1;
      v723 = i$$38 < aLength
    }
    var v724 = this.field;
    return new GF256Poly(v724, product)
  }
  function v73(other$$6) {
    var v1614 = this.field;
    var v1615 = other$$6.field;
    var v725 = v1614 != v1615;
    if(v725) {
      throw"GF256Polys do not have same GF256 field";
    }
    var v726 = this.Zero;
    if(v726) {
      return other$$6
    }
    var v727 = other$$6.Zero;
    if(v727) {
      return this
    }
    var smallerCoefficients = this.coefficients;
    var largerCoefficients = other$$6.coefficients;
    var v1616 = smallerCoefficients.length;
    var v1617 = largerCoefficients.length;
    var v728 = v1616 > v1617;
    if(v728) {
      var temp$$4 = smallerCoefficients;
      smallerCoefficients = largerCoefficients;
      largerCoefficients = temp$$4
    }
    var v729 = largerCoefficients.length;
    var sumDiff = new Array(v729);
    var v730 = largerCoefficients.length;
    var v731 = smallerCoefficients.length;
    var lengthDiff = v730 - v731;
    var ci$$1 = 0;
    var v732 = ci$$1 < lengthDiff;
    for(;v732;) {
      sumDiff[ci$$1] = largerCoefficients[ci$$1];
      ci$$1 = ci$$1 + 1;
      v732 = ci$$1 < lengthDiff
    }
    var i$$37 = lengthDiff;
    var v1618 = largerCoefficients.length;
    var v735 = i$$37 < v1618;
    for(;v735;) {
      var v733 = sumDiff;
      var v734 = i$$37;
      var v2350 = i$$37 - lengthDiff;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v1619 = smallerCoefficients[v2350]
      }
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v1620 = largerCoefficients[i$$37]
      }
      var v2890 = JAMScript.call(GF256.addOrSubtract, GF256, [v1619, v1620]);
      v733[v734] = v2890;
      i$$37 = i$$37 + 1;
      var v1621 = largerCoefficients.length;
      v735 = i$$37 < v1621
    }
    return new GF256Poly(field$$1, sumDiff)
  }
  function v72(a$$2) {
    var v736 = a$$2 == 0;
    if(v736) {
      return JAMScript.call(this.getCoefficient, this, [0])
    }
    var v737 = this.coefficients;
    var size$$4 = v737.length;
    var v740 = a$$2 == 1;
    if(v740) {
      var result$$5 = 0;
      var i$$36 = 0;
      var v739 = i$$36 < size$$4;
      for(;v739;) {
        var v1622 = this.coefficients;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v738 = v1622[i$$36]
        }
        result$$5 = JAMScript.call(GF256.addOrSubtract, GF256, [result$$5, v738]);
        i$$36 = i$$36 + 1;
        v739 = i$$36 < size$$4
      }
      return result$$5
    }
    var v741 = this.coefficients;
    var result2 = v741[0];
    i$$36 = 1;
    var v744 = i$$36 < size$$4;
    for(;v744;) {
      var v1623 = this.field;
      var v742 = JAMScript.call(v1623.multiply, v1623, [a$$2, result2]);
      var v1624 = this.coefficients;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v743 = v1624[i$$36]
      }
      result2 = JAMScript.call(GF256.addOrSubtract, GF256, [v742, v743]);
      i$$36 = i$$36 + 1;
      v744 = i$$36 < size$$4
    }
    return result2
  }
  function v71(degree) {
    var v745 = this.coefficients;
    var v2593 = this.coefficients;
    var v2351 = v2593.length;
    var v1625 = v2351 - 1;
    var v746 = v1625 - degree;
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      return v745[v746]
    }
  }
  function v70() {
    return this.coefficients
  }
  function v69() {
    var v1626 = this.coefficients;
    var v747 = v1626.length;
    return v747 - 1
  }
  function v68() {
    var v1627 = this.coefficients;
    var v748 = v1627[0];
    return v748 == 0
  }
  var v1628 = coefficients == null;
  var v2353 = !v1628;
  if(v2353) {
    var v2352 = coefficients.length;
    v1628 = v2352 == 0
  }
  var v749 = v1628;
  if(v749) {
    throw"System.ArgumentException";
  }
  this.field = field$$1;
  var coefficientsLength = coefficients.length;
  var v1629 = coefficientsLength > 1;
  if(v1629) {
    var v2354 = coefficients[0];
    v1629 = v2354 == 0
  }
  var v759 = v1629;
  if(v759) {
    var firstNonZero = 1;
    var v1630 = firstNonZero < coefficientsLength;
    if(v1630) {
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v2355 = coefficients[firstNonZero]
      }
      v1630 = v2355 == 0
    }
    var v750 = v1630;
    for(;v750;) {
      firstNonZero = firstNonZero + 1;
      var v1631 = firstNonZero < coefficientsLength;
      if(v1631) {
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v2356 = coefficients[firstNonZero]
        }
        v1631 = v2356 == 0
      }
      v750 = v1631
    }
    var v758 = firstNonZero == coefficientsLength;
    if(v758) {
      var v751 = field$$1.Zero;
      this.coefficients = v751.coefficients
    }else {
      var v752 = coefficientsLength - firstNonZero;
      var v2891 = new Array(v752);
      this.coefficients = v2891;
      var i$$35 = 0;
      var v2357 = this.coefficients;
      var v1632 = v2357.length;
      var v754 = i$$35 < v1632;
      for(;v754;) {
        var v753 = this.coefficients;
        v753[i$$35] = 0;
        i$$35 = i$$35 + 1;
        var v2358 = this.coefficients;
        var v1633 = v2358.length;
        v754 = i$$35 < v1633
      }
      var ci = 0;
      var v2359 = this.coefficients;
      var v1634 = v2359.length;
      var v757 = ci < v1634;
      for(;v757;) {
        var v755 = this.coefficients;
        var v756 = ci;
        var v1635 = firstNonZero + ci;
        v755[v756] = coefficients[v1635];
        ci = ci + 1;
        var v2360 = this.coefficients;
        var v1636 = v2360.length;
        v757 = ci < v1636
      }
    }
  }else {
    this.coefficients = coefficients
  }
  JAMScript.call(this.__defineGetter__, this, ["Zero", v68]);
  JAMScript.call(this.__defineGetter__, this, ["Degree", v69]);
  JAMScript.call(this.__defineGetter__, this, ["Coefficients", v70]);
  this.getCoefficient = v71;
  this.evaluateAt = v72;
  this.addOrSubtract = v73;
  this.multiply1 = v74;
  this.multiply2 = v75;
  this.multiplyByMonomial = v76;
  this.divide = v77;
  return
}
function GF256(primitive) {
  function v84(a$$6, b$$3) {
    var v1637 = a$$6 == 0;
    var v2361 = !v1637;
    if(v2361) {
      v1637 = b$$3 == 0
    }
    var v760 = v1637;
    if(v760) {
      return 0
    }
    var v761 = a$$6 == 1;
    if(v761) {
      return b$$3
    }
    var v762 = b$$3 == 1;
    if(v762) {
      return a$$6
    }
    var v763 = this.expTable;
    var v2594 = this.logTable;
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v2362 = v2594[a$$6]
    }
    var v2595 = this.logTable;
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v2363 = v2595[b$$3]
    }
    var v1638 = v2362 + v2363;
    var v764 = v1638 % 255;
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      return v763[v764]
    }
  }
  function v83(a$$5) {
    var v765 = a$$5 == 0;
    if(v765) {
      throw"System.ArithmeticException";
    }
    var v766 = this.expTable;
    var v2364 = this.logTable;
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v1639 = v2364[a$$5]
    }
    var v767 = 255 - v1639;
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      return v766[v767]
    }
  }
  function v82(a$$4) {
    var v768 = a$$4 == 0;
    if(v768) {
      throw"System.ArgumentException";
    }
    var v769 = this.logTable;
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      return v769[a$$4]
    }
  }
  function v81(a$$3) {
    var v770 = this.expTable;
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      return v770[a$$3]
    }
  }
  function v80(degree$$2, coefficient$$1) {
    var v771 = degree$$2 < 0;
    if(v771) {
      throw"System.ArgumentException";
    }
    var v772 = coefficient$$1 == 0;
    if(v772) {
      return zero
    }
    var v773 = degree$$2 + 1;
    var coefficients$$1 = new Array(v773);
    var i$$42 = 0;
    var v1640 = coefficients$$1.length;
    var v774 = i$$42 < v1640;
    for(;v774;) {
      coefficients$$1[i$$42] = 0;
      i$$42 = i$$42 + 1;
      var v1641 = coefficients$$1.length;
      v774 = i$$42 < v1641
    }
    coefficients$$1[0] = coefficient$$1;
    return new GF256Poly(this, coefficients$$1)
  }
  function v79() {
    return this.one
  }
  function v78() {
    return this.zero
  }
  var v2892 = new Array(256);
  this.expTable = v2892;
  var v2893 = new Array(256);
  this.logTable = v2893;
  var x$$58 = 1;
  var i$$41 = 0;
  var v777 = i$$41 < 256;
  for(;v777;) {
    var v775 = this.expTable;
    v775[i$$41] = x$$58;
    x$$58 = x$$58 << 1;
    var v776 = x$$58 >= 256;
    if(v776) {
      x$$58 = x$$58 ^ primitive
    }
    i$$41 = i$$41 + 1;
    v777 = i$$41 < 256
  }
  i$$41 = 0;
  var v780 = i$$41 < 255;
  for(;v780;) {
    var v778 = this.logTable;
    var v1642 = this.expTable;
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v779 = v1642[i$$41]
    }
    JAMScript.set(v778, v779, i$$41, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
    i$$41 = i$$41 + 1;
    v780 = i$$41 < 255
  }
  var at0 = new Array(1);
  at0[0] = 0;
  var v781 = new Array(at0);
  var v2894 = new GF256Poly(this, v781);
  this.zero = v2894;
  var at1 = new Array(1);
  at1[0] = 1;
  var v782 = new Array(at1);
  var v2895 = new GF256Poly(this, v782);
  this.one = v2895;
  JAMScript.call(this.__defineGetter__, this, ["Zero", v78]);
  JAMScript.call(this.__defineGetter__, this, ["One", v79]);
  this.buildMonomial = v80;
  this.exp = v81;
  this.log = v82;
  this.inverse = v83;
  this.multiply = v84;
  return
}
function URShift(number, bits$$14) {
  var v785 = number >= 0;
  if(v785) {
    return number >> bits$$14
  }else {
    var v783 = number >> bits$$14;
    var v1643 = ~bits$$14;
    var v784 = 2 << v1643;
    return v783 + v784
  }
  return
}
function FinderPattern(posX, posY, estimatedModuleSize) {
  function v90(moduleSize$$2, i$$47, j$$25) {
    var v2732 = this.y;
    var v2596 = i$$47 - v2732;
    var v2365 = Math.abs(v2596);
    var v1644 = v2365 <= moduleSize$$2;
    if(v1644) {
      var v2733 = this.x;
      var v2597 = j$$25 - v2733;
      var v2366 = Math.abs(v2597);
      v1644 = v2366 <= moduleSize$$2
    }
    var v788 = v1644;
    if(v788) {
      var v1645 = this.estimatedModuleSize;
      var v786 = moduleSize$$2 - v1645;
      var moduleSizeDiff = Math.abs(v786);
      var v787 = moduleSizeDiff <= 1;
      var v1647 = !v787;
      if(v1647) {
        var v2367 = this.estimatedModuleSize;
        var v1646 = moduleSizeDiff / v2367;
        v787 = v1646 <= 1
      }
      return v787
    }
    return false
  }
  function v89() {
    var v1648 = this.count;
    this.count = v1648 + 1;
    return
  }
  function v88() {
    return this.y
  }
  function v87() {
    return this.x
  }
  function v86() {
    return this.count
  }
  function v85() {
    return this.estimatedModuleSize
  }
  this.x = posX;
  this.y = posY;
  this.count = 1;
  this.estimatedModuleSize = estimatedModuleSize;
  JAMScript.call(this.__defineGetter__, this, ["EstimatedModuleSize", v85]);
  JAMScript.call(this.__defineGetter__, this, ["Count", v86]);
  JAMScript.call(this.__defineGetter__, this, ["X", v87]);
  JAMScript.call(this.__defineGetter__, this, ["Y", v88]);
  this.incrementCount = v89;
  this.aboutEquals = v90;
  return
}
function FinderPatternInfo(patternCenters) {
  function v93() {
    return this.topRight
  }
  function v92() {
    return this.topLeft
  }
  function v91() {
    return this.bottomLeft
  }
  this.bottomLeft = patternCenters[0];
  this.topLeft = patternCenters[1];
  this.topRight = patternCenters[2];
  JAMScript.call(this.__defineGetter__, this, ["BottomLeft", v91]);
  JAMScript.call(this.__defineGetter__, this, ["TopLeft", v92]);
  JAMScript.call(this.__defineGetter__, this, ["TopRight", v93]);
  return
}
function FinderPatternFinder() {
  function v104(image$$12) {
    var tryHarder = false;
    this.image = image$$12;
    var maxI$$1 = qrcode.height;
    var maxJ$$1 = qrcode.width;
    var v1649 = 3 * maxI$$1;
    var v1650 = 4 * MAX_MODULES;
    var v789 = v1649 / v1650;
    var iSkip = Math.floor(v789);
    var v1651 = iSkip < MIN_SKIP;
    var v2368 = !v1651;
    if(v2368) {
      v1651 = tryHarder
    }
    var v790 = v1651;
    if(v790) {
      iSkip = MIN_SKIP
    }
    var done = false;
    var stateCount$$5 = new Array(5);
    var i$$54 = iSkip - 1;
    var v1652 = i$$54 < maxI$$1;
    if(v1652) {
      v1652 = !done
    }
    var v802 = v1652;
    for(;v802;) {
      stateCount$$5[0] = 0;
      stateCount$$5[1] = 0;
      stateCount$$5[2] = 0;
      stateCount$$5[3] = 0;
      stateCount$$5[4] = 0;
      var currentState = 0;
      var j$$28 = 0;
      var v799 = j$$28 < maxJ$$1;
      for(;v799;) {
        var v2598 = qrcode.width;
        var v2369 = i$$54 * v2598;
        var v1653 = j$$28 + v2369;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v798 = image$$12[v1653]
        }
        if(v798) {
          var v1654 = currentState & 1;
          var v791 = v1654 == 1;
          if(v791) {
            currentState = currentState + 1
          }
          var v1655 = stateCount$$5;
          var v1656 = currentState;
          introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
            var v2370 = stateCount$$5[currentState]
          }
          v1655[v1656] = v2370 + 1
        }else {
          var v1657 = currentState & 1;
          var v797 = v1657 == 0;
          if(v797) {
            var v796 = currentState == 4;
            if(v796) {
              var v795 = JAMScript.call(this.foundPatternCross, this, [stateCount$$5]);
              if(v795) {
                var confirmed = JAMScript.call(this.handlePossibleCenter, this, [stateCount$$5, i$$54, j$$28]);
                if(confirmed) {
                  iSkip = 2;
                  var v793 = this.hasSkipped;
                  if(v793) {
                    done = JAMScript.call(this.haveMultiplyConfirmedCenters, this, [])
                  }else {
                    var rowSkip = JAMScript.call(this.findRowSkip, this, []);
                    var v1658 = stateCount$$5[2];
                    var v792 = rowSkip > v1658;
                    if(v792) {
                      var v2599 = stateCount$$5[2];
                      var v2371 = rowSkip - v2599;
                      var v1659 = v2371 - iSkip;
                      i$$54 = i$$54 + v1659;
                      j$$28 = maxJ$$1 - 1
                    }
                  }
                }else {
                  var v1660 = j$$28 < maxJ$$1;
                  if(v1660) {
                    var v2801 = qrcode.width;
                    var v2734 = i$$54 * v2801;
                    var v2600 = j$$28 + v2734;
                    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
                      var v2372 = image$$12[v2600]
                    }
                    v1660 = !v2372
                  }
                  var v794 = v1660;
                  do {
                    j$$28 = j$$28 + 1;
                    var v1661 = j$$28 < maxJ$$1;
                    if(v1661) {
                      var v2802 = qrcode.width;
                      var v2735 = i$$54 * v2802;
                      var v2601 = j$$28 + v2735;
                      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
                        var v2373 = image$$12[v2601]
                      }
                      v1661 = !v2373
                    }
                    v794 = v1661
                  }while(v794);
                  j$$28 = j$$28 - 1
                }
                currentState = 0;
                stateCount$$5[0] = 0;
                stateCount$$5[1] = 0;
                stateCount$$5[2] = 0;
                stateCount$$5[3] = 0;
                stateCount$$5[4] = 0
              }else {
                stateCount$$5[0] = stateCount$$5[2];
                stateCount$$5[1] = stateCount$$5[3];
                stateCount$$5[2] = stateCount$$5[4];
                stateCount$$5[3] = 1;
                stateCount$$5[4] = 0;
                currentState = 3
              }
            }else {
              var v1662 = stateCount$$5;
              var v1663 = currentState = currentState + 1;
              var v2602 = currentState = currentState + 1;
              introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
                var v2374 = stateCount$$5[v2602]
              }
              v1662[v1663] = v2374 + 1
            }
          }else {
            var v1664 = stateCount$$5;
            var v1665 = currentState;
            introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
              var v2375 = stateCount$$5[currentState]
            }
            v1664[v1665] = v2375 + 1
          }
        }
        j$$28 = j$$28 + 1;
        v799 = j$$28 < maxJ$$1
      }
      var v801 = JAMScript.call(this.foundPatternCross, this, [stateCount$$5]);
      if(v801) {
        confirmed = JAMScript.call(this.handlePossibleCenter, this, [stateCount$$5, i$$54, maxJ$$1]);
        if(confirmed) {
          iSkip = stateCount$$5[0];
          var v800 = this.hasSkipped;
          if(v800) {
            done = JAMScript.call(haveMultiplyConfirmedCenters, null, [])
          }
        }
      }
      i$$54 = i$$54 + iSkip;
      var v1666 = i$$54 < maxI$$1;
      if(v1666) {
        v1666 = !done
      }
      v802 = v1666
    }
    var patternInfo = JAMScript.call(this.selectBestPatterns, this, []);
    JAMScript.call(qrcode.orderBestPatterns, qrcode, [patternInfo]);
    return new FinderPatternInfo(patternInfo)
  }
  function v103() {
    var confirmedCount = 0;
    var totalModuleSize$$2 = 0;
    var v803 = this.possibleCenters;
    var max$$7 = v803.length;
    var i$$53 = 0;
    var v806 = i$$53 < max$$7;
    for(;v806;) {
      var v804 = this.possibleCenters;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var pattern$$3 = v804[i$$53]
      }
      var v1667 = pattern$$3.Count;
      var v805 = v1667 >= CENTER_QUORUM;
      if(v805) {
        confirmedCount = confirmedCount + 1;
        var v1668 = pattern$$3.EstimatedModuleSize;
        totalModuleSize$$2 = totalModuleSize$$2 + v1668
      }
      i$$53 = i$$53 + 1;
      v806 = i$$53 < max$$7
    }
    var v807 = confirmedCount < 3;
    if(v807) {
      return false
    }
    var average$$1 = totalModuleSize$$2 / max$$7;
    var totalDeviation = 0;
    i$$53 = 0;
    var v809 = i$$53 < max$$7;
    for(;v809;) {
      var v808 = this.possibleCenters;
      pattern$$3 = v808[i$$53];
      var v2603 = pattern$$3.EstimatedModuleSize;
      var v2376 = v2603 - average$$1;
      var v1669 = Math.abs(v2376);
      totalDeviation = totalDeviation + v1669;
      i$$53 = i$$53 + 1;
      v809 = i$$53 < max$$7
    }
    var v810 = 0.05 * totalModuleSize$$2;
    return totalDeviation <= v810
  }
  function v102() {
    var v811 = this.possibleCenters;
    var max$$6 = v811.length;
    var v812 = max$$6 <= 1;
    if(v812) {
      return 0
    }
    var firstConfirmedCenter = null;
    var i$$52 = 0;
    var v817 = i$$52 < max$$6;
    for(;v817;) {
      var v813 = this.possibleCenters;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var center$$1 = v813[i$$52]
      }
      var v1670 = center$$1.Count;
      var v816 = v1670 >= CENTER_QUORUM;
      if(v816) {
        var v815 = firstConfirmedCenter == null;
        if(v815) {
          firstConfirmedCenter = center$$1
        }else {
          this.hasSkipped = true;
          var v2736 = firstConfirmedCenter.X;
          var v2737 = center$$1.X;
          var v2604 = v2736 - v2737;
          var v2377 = Math.abs(v2604);
          var v2738 = firstConfirmedCenter.Y;
          var v2739 = center$$1.Y;
          var v2605 = v2738 - v2739;
          var v2378 = Math.abs(v2605);
          var v1671 = v2377 - v2378;
          var v814 = v1671 / 2;
          return Math.floor(v814)
        }
      }
      i$$52 = i$$52 + 1;
      v817 = i$$52 < max$$6
    }
    return 0
  }
  function v101() {
    function v100(a$$8, b$$5) {
      var v1672 = a$$8.count;
      var v1673 = b$$5.count;
      var v818 = v1672 > v1673;
      if(v818) {
        return-1
      }
      var v1674 = a$$8.count;
      var v1675 = b$$5.count;
      var v819 = v1674 < v1675;
      if(v819) {
        return 1
      }
      return 0
    }
    var v820 = this.possibleCenters;
    var startSize = v820.length;
    var v821 = startSize < 3;
    if(v821) {
      throw"Couldn't find enough finder patterns";
    }
    var v827 = startSize > 3;
    if(v827) {
      var totalModuleSize$$1 = 0;
      var i$$51 = 0;
      var v822 = i$$51 < startSize;
      for(;v822;) {
        var v2606 = this.possibleCenters;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v2379 = v2606[i$$51]
        }
        var v1676 = v2379.EstimatedModuleSize;
        totalModuleSize$$1 = totalModuleSize$$1 + v1676;
        i$$51 = i$$51 + 1;
        v822 = i$$51 < startSize
      }
      var average = totalModuleSize$$1 / startSize;
      i$$51 = 0;
      var v2607 = this.possibleCenters;
      var v2380 = v2607.length;
      var v1677 = i$$51 < v2380;
      if(v1677) {
        var v2608 = this.possibleCenters;
        var v2381 = v2608.length;
        v1677 = v2381 > 3
      }
      var v826 = v1677;
      for(;v826;) {
        var v823 = this.possibleCenters;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var pattern$$2 = v823[i$$51]
        }
        var v2609 = pattern$$2.EstimatedModuleSize;
        var v2382 = v2609 - average;
        var v1678 = Math.abs(v2382);
        var v1679 = 0.2 * average;
        var v825 = v1678 > v1679;
        if(v825) {
          var v824 = this.possibleCenters;
          JAMScript.call(v824.remove, v824, [i$$51]);
          i$$51 = i$$51 - 1
        }
        i$$51 = i$$51 + 1;
        var v2610 = this.possibleCenters;
        var v2383 = v2610.length;
        var v1680 = i$$51 < v2383;
        if(v1680) {
          var v2611 = this.possibleCenters;
          var v2384 = v2611.length;
          v1680 = v2384 > 3
        }
        v826 = v1680
      }
    }
    var v2385 = this.possibleCenters;
    var v1681 = v2385.length;
    var v829 = v1681 > 3;
    if(v829) {
      var v828 = this.possibleCenters;
      v828.sort(v100)
    }
    var v1682 = this.possibleCenters;
    var v830 = v1682[0];
    var v1683 = this.possibleCenters;
    var v831 = v1683[1];
    var v1684 = this.possibleCenters;
    var v832 = v1684[2];
    return new Array(v830, v831, v832)
  }
  function v99(stateCount$$4, i$$50, j$$27) {
    var v2612 = stateCount$$4[0];
    var v2613 = stateCount$$4[1];
    var v2386 = v2612 + v2613;
    var v2387 = stateCount$$4[2];
    var v1685 = v2386 + v2387;
    var v1686 = stateCount$$4[3];
    var v833 = v1685 + v1686;
    var v834 = stateCount$$4[4];
    var stateCountTotal$$2 = v833 + v834;
    var centerJ$$1 = JAMScript.call(this.centerFromEnd, this, [stateCount$$4, j$$27]);
    var v835 = Math.floor(centerJ$$1);
    var v836 = stateCount$$4[2];
    var centerI$$1 = JAMScript.call(this.crossCheckVertical, this, [i$$50, v835, v836, stateCountTotal$$2]);
    var v1687 = isNaN(centerI$$1);
    var v849 = !v1687;
    if(v849) {
      var v837 = Math.floor(centerJ$$1);
      var v838 = Math.floor(centerI$$1);
      var v839 = stateCount$$4[2];
      centerJ$$1 = JAMScript.call(this.crossCheckHorizontal, this, [v837, v838, v839, stateCountTotal$$2]);
      var v1688 = isNaN(centerJ$$1);
      var v848 = !v1688;
      if(v848) {
        var estimatedModuleSize$$1 = stateCountTotal$$2 / 7;
        var found = false;
        var v840 = this.possibleCenters;
        var max$$5 = v840.length;
        var index$$39 = 0;
        var v843 = index$$39 < max$$5;
        for(;v843;) {
          var v841 = this.possibleCenters;
          introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
            var center = v841[index$$39]
          }
          var v842 = JAMScript.call(center.aboutEquals, center, [estimatedModuleSize$$1, centerI$$1, centerJ$$1]);
          if(v842) {
            JAMScript.call(center.incrementCount, center, []);
            found = true;
            break
          }
          index$$39 = index$$39 + 1;
          v843 = index$$39 < max$$5
        }
        var v847 = !found;
        if(v847) {
          var point$$2 = new FinderPattern(centerJ$$1, centerI$$1, estimatedModuleSize$$1);
          var v844 = this.possibleCenters;
          v844.push(point$$2);
          var v1689 = this.resultPointCallback;
          var v846 = v1689 != null;
          if(v846) {
            var v845 = this.resultPointCallback;
            JAMScript.call(v845.foundPossibleResultPoint, v845, [point$$2])
          }
        }
        return true
      }
    }
    return false
  }
  function v98(startJ, centerI, maxCount$$1, originalStateCountTotal$$1) {
    var image$$11 = this.image;
    var maxJ = qrcode.width;
    var stateCount$$3 = this.CrossCheckStateCount;
    var j$$26 = startJ;
    var v1690 = j$$26 >= 0;
    if(v1690) {
      var v2740 = qrcode.width;
      var v2614 = centerI * v2740;
      var v2388 = j$$26 + v2614;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        v1690 = image$$11[v2388]
      }
    }
    var v850 = v1690;
    for(;v850;) {
      var v1691 = stateCount$$3;
      var v2389 = stateCount$$3[2];
      v1691[2] = v2389 + 1;
      j$$26 = j$$26 - 1;
      var v1692 = j$$26 >= 0;
      if(v1692) {
        var v2741 = qrcode.width;
        var v2615 = centerI * v2741;
        var v2390 = j$$26 + v2615;
        v1692 = image$$11[v2390]
      }
      v850 = v1692
    }
    var v851 = j$$26 < 0;
    if(v851) {
      return NaN
    }
    var v1693 = j$$26 >= 0;
    if(v1693) {
      var v2843 = qrcode.width;
      var v2803 = centerI * v2843;
      var v2742 = j$$26 + v2803;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v2616 = image$$11[v2742]
      }
      var v2391 = !v2616;
      if(v2391) {
        var v2617 = stateCount$$3[1];
        v2391 = v2617 <= maxCount$$1
      }
      v1693 = v2391
    }
    var v852 = v1693;
    for(;v852;) {
      var v1694 = stateCount$$3;
      var v2392 = stateCount$$3[1];
      v1694[1] = v2392 + 1;
      j$$26 = j$$26 - 1;
      var v1695 = j$$26 >= 0;
      if(v1695) {
        var v2844 = qrcode.width;
        var v2804 = centerI * v2844;
        var v2743 = j$$26 + v2804;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v2618 = image$$11[v2743]
        }
        var v2393 = !v2618;
        if(v2393) {
          var v2619 = stateCount$$3[1];
          v2393 = v2619 <= maxCount$$1
        }
        v1695 = v2393
      }
      v852 = v1695
    }
    var v1696 = j$$26 < 0;
    var v2395 = !v1696;
    if(v2395) {
      var v2394 = stateCount$$3[1];
      v1696 = v2394 > maxCount$$1
    }
    var v853 = v1696;
    if(v853) {
      return NaN
    }
    var v1697 = j$$26 >= 0;
    if(v1697) {
      var v2805 = qrcode.width;
      var v2744 = centerI * v2805;
      var v2620 = j$$26 + v2744;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v2396 = image$$11[v2620]
      }
      if(v2396) {
        var v2621 = stateCount$$3[0];
        v2396 = v2621 <= maxCount$$1
      }
      v1697 = v2396
    }
    var v854 = v1697;
    for(;v854;) {
      var v1698 = stateCount$$3;
      var v2397 = stateCount$$3[0];
      v1698[0] = v2397 + 1;
      j$$26 = j$$26 - 1;
      var v1699 = j$$26 >= 0;
      if(v1699) {
        var v2806 = qrcode.width;
        var v2745 = centerI * v2806;
        var v2622 = j$$26 + v2745;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v2398 = image$$11[v2622]
        }
        if(v2398) {
          var v2623 = stateCount$$3[0];
          v2398 = v2623 <= maxCount$$1
        }
        v1699 = v2398
      }
      v854 = v1699
    }
    var v1700 = stateCount$$3[0];
    var v855 = v1700 > maxCount$$1;
    if(v855) {
      return NaN
    }
    j$$26 = startJ + 1;
    var v1701 = j$$26 < maxJ;
    if(v1701) {
      var v2746 = qrcode.width;
      var v2624 = centerI * v2746;
      var v2399 = j$$26 + v2624;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        v1701 = image$$11[v2399]
      }
    }
    var v856 = v1701;
    for(;v856;) {
      var v1702 = stateCount$$3;
      var v2400 = stateCount$$3[2];
      v1702[2] = v2400 + 1;
      j$$26 = j$$26 + 1;
      var v1703 = j$$26 < maxJ;
      if(v1703) {
        var v2747 = qrcode.width;
        var v2625 = centerI * v2747;
        var v2401 = j$$26 + v2625;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          v1703 = image$$11[v2401]
        }
      }
      v856 = v1703
    }
    var v857 = j$$26 == maxJ;
    if(v857) {
      return NaN
    }
    var v1704 = j$$26 < maxJ;
    if(v1704) {
      var v2845 = qrcode.width;
      var v2807 = centerI * v2845;
      var v2748 = j$$26 + v2807;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v2626 = image$$11[v2748]
      }
      var v2402 = !v2626;
      if(v2402) {
        var v2627 = stateCount$$3[3];
        v2402 = v2627 < maxCount$$1
      }
      v1704 = v2402
    }
    var v858 = v1704;
    for(;v858;) {
      var v1705 = stateCount$$3;
      var v2403 = stateCount$$3[3];
      v1705[3] = v2403 + 1;
      j$$26 = j$$26 + 1;
      var v1706 = j$$26 < maxJ;
      if(v1706) {
        var v2846 = qrcode.width;
        var v2808 = centerI * v2846;
        var v2749 = j$$26 + v2808;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v2628 = image$$11[v2749]
        }
        var v2404 = !v2628;
        if(v2404) {
          var v2629 = stateCount$$3[3];
          v2404 = v2629 < maxCount$$1
        }
        v1706 = v2404
      }
      v858 = v1706
    }
    var v1707 = j$$26 == maxJ;
    var v2406 = !v1707;
    if(v2406) {
      var v2405 = stateCount$$3[3];
      v1707 = v2405 >= maxCount$$1
    }
    var v859 = v1707;
    if(v859) {
      return NaN
    }
    var v1708 = j$$26 < maxJ;
    if(v1708) {
      var v2809 = qrcode.width;
      var v2750 = centerI * v2809;
      var v2630 = j$$26 + v2750;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v2407 = image$$11[v2630]
      }
      if(v2407) {
        var v2631 = stateCount$$3[4];
        v2407 = v2631 < maxCount$$1
      }
      v1708 = v2407
    }
    var v860 = v1708;
    for(;v860;) {
      var v1709 = stateCount$$3;
      var v2408 = stateCount$$3[4];
      v1709[4] = v2408 + 1;
      j$$26 = j$$26 + 1;
      var v1710 = j$$26 < maxJ;
      if(v1710) {
        var v2810 = qrcode.width;
        var v2751 = centerI * v2810;
        var v2632 = j$$26 + v2751;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v2409 = image$$11[v2632]
        }
        if(v2409) {
          var v2633 = stateCount$$3[4];
          v2409 = v2633 < maxCount$$1
        }
        v1710 = v2409
      }
      v860 = v1710
    }
    var v1711 = stateCount$$3[4];
    var v861 = v1711 >= maxCount$$1;
    if(v861) {
      return NaN
    }
    var v2634 = stateCount$$3[0];
    var v2635 = stateCount$$3[1];
    var v2410 = v2634 + v2635;
    var v2411 = stateCount$$3[2];
    var v1712 = v2410 + v2411;
    var v1713 = stateCount$$3[3];
    var v862 = v1712 + v1713;
    var v863 = stateCount$$3[4];
    var stateCountTotal$$1 = v862 + v863;
    var v2636 = stateCountTotal$$1 - originalStateCountTotal$$1;
    var v2412 = Math.abs(v2636);
    var v1714 = 5 * v2412;
    var v864 = v1714 >= originalStateCountTotal$$1;
    if(v864) {
      return NaN
    }
    var v865;
    var v1715 = JAMScript.call(this.foundPatternCross, this, [stateCount$$3]);
    if(v1715) {
      v865 = JAMScript.call(this.centerFromEnd, this, [stateCount$$3, j$$26])
    }else {
      v865 = NaN
    }
    return v865
  }
  function v97(startI, centerJ, maxCount, originalStateCountTotal) {
    var image$$10 = this.image;
    var maxI = qrcode.height;
    var stateCount$$2 = this.CrossCheckStateCount;
    var i$$49 = startI;
    var v1716 = i$$49 >= 0;
    if(v1716) {
      var v2752 = qrcode.width;
      var v2637 = i$$49 * v2752;
      var v2413 = centerJ + v2637;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        v1716 = image$$10[v2413]
      }
    }
    var v866 = v1716;
    for(;v866;) {
      var v1717 = stateCount$$2;
      var v2414 = stateCount$$2[2];
      v1717[2] = v2414 + 1;
      i$$49 = i$$49 - 1;
      var v1718 = i$$49 >= 0;
      if(v1718) {
        var v2753 = qrcode.width;
        var v2638 = i$$49 * v2753;
        var v2415 = centerJ + v2638;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          v1718 = image$$10[v2415]
        }
      }
      v866 = v1718
    }
    var v867 = i$$49 < 0;
    if(v867) {
      return NaN
    }
    var v1719 = i$$49 >= 0;
    if(v1719) {
      var v2847 = qrcode.width;
      var v2811 = i$$49 * v2847;
      var v2754 = centerJ + v2811;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v2639 = image$$10[v2754]
      }
      var v2416 = !v2639;
      if(v2416) {
        var v2640 = stateCount$$2[1];
        v2416 = v2640 <= maxCount
      }
      v1719 = v2416
    }
    var v868 = v1719;
    for(;v868;) {
      var v1720 = stateCount$$2;
      var v2417 = stateCount$$2[1];
      v1720[1] = v2417 + 1;
      i$$49 = i$$49 - 1;
      var v1721 = i$$49 >= 0;
      if(v1721) {
        var v2848 = qrcode.width;
        var v2812 = i$$49 * v2848;
        var v2755 = centerJ + v2812;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v2641 = image$$10[v2755]
        }
        var v2418 = !v2641;
        if(v2418) {
          var v2642 = stateCount$$2[1];
          v2418 = v2642 <= maxCount
        }
        v1721 = v2418
      }
      v868 = v1721
    }
    var v1722 = i$$49 < 0;
    var v2420 = !v1722;
    if(v2420) {
      var v2419 = stateCount$$2[1];
      v1722 = v2419 > maxCount
    }
    var v869 = v1722;
    if(v869) {
      return NaN
    }
    var v1723 = i$$49 >= 0;
    if(v1723) {
      var v2813 = qrcode.width;
      var v2756 = i$$49 * v2813;
      var v2643 = centerJ + v2756;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v2421 = image$$10[v2643]
      }
      if(v2421) {
        var v2644 = stateCount$$2[0];
        v2421 = v2644 <= maxCount
      }
      v1723 = v2421
    }
    var v870 = v1723;
    for(;v870;) {
      var v1724 = stateCount$$2;
      var v2422 = stateCount$$2[0];
      v1724[0] = v2422 + 1;
      i$$49 = i$$49 - 1;
      var v1725 = i$$49 >= 0;
      if(v1725) {
        var v2814 = qrcode.width;
        var v2757 = i$$49 * v2814;
        var v2645 = centerJ + v2757;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v2423 = image$$10[v2645]
        }
        if(v2423) {
          var v2646 = stateCount$$2[0];
          v2423 = v2646 <= maxCount
        }
        v1725 = v2423
      }
      v870 = v1725
    }
    var v1726 = stateCount$$2[0];
    var v871 = v1726 > maxCount;
    if(v871) {
      return NaN
    }
    i$$49 = startI + 1;
    var v1727 = i$$49 < maxI;
    if(v1727) {
      var v2758 = qrcode.width;
      var v2647 = i$$49 * v2758;
      var v2424 = centerJ + v2647;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        v1727 = image$$10[v2424]
      }
    }
    var v872 = v1727;
    for(;v872;) {
      var v1728 = stateCount$$2;
      var v2425 = stateCount$$2[2];
      v1728[2] = v2425 + 1;
      i$$49 = i$$49 + 1;
      var v1729 = i$$49 < maxI;
      if(v1729) {
        var v2759 = qrcode.width;
        var v2648 = i$$49 * v2759;
        var v2426 = centerJ + v2648;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          v1729 = image$$10[v2426]
        }
      }
      v872 = v1729
    }
    var v873 = i$$49 == maxI;
    if(v873) {
      return NaN
    }
    var v1730 = i$$49 < maxI;
    if(v1730) {
      var v2849 = qrcode.width;
      var v2815 = i$$49 * v2849;
      var v2760 = centerJ + v2815;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v2649 = image$$10[v2760]
      }
      var v2427 = !v2649;
      if(v2427) {
        var v2650 = stateCount$$2[3];
        v2427 = v2650 < maxCount
      }
      v1730 = v2427
    }
    var v874 = v1730;
    for(;v874;) {
      var v1731 = stateCount$$2;
      var v2428 = stateCount$$2[3];
      v1731[3] = v2428 + 1;
      i$$49 = i$$49 + 1;
      var v1732 = i$$49 < maxI;
      if(v1732) {
        var v2850 = qrcode.width;
        var v2816 = i$$49 * v2850;
        var v2761 = centerJ + v2816;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v2651 = image$$10[v2761]
        }
        var v2429 = !v2651;
        if(v2429) {
          var v2652 = stateCount$$2[3];
          v2429 = v2652 < maxCount
        }
        v1732 = v2429
      }
      v874 = v1732
    }
    var v1733 = i$$49 == maxI;
    var v2431 = !v1733;
    if(v2431) {
      var v2430 = stateCount$$2[3];
      v1733 = v2430 >= maxCount
    }
    var v875 = v1733;
    if(v875) {
      return NaN
    }
    var v1734 = i$$49 < maxI;
    if(v1734) {
      var v2817 = qrcode.width;
      var v2762 = i$$49 * v2817;
      var v2653 = centerJ + v2762;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v2432 = image$$10[v2653]
      }
      if(v2432) {
        var v2654 = stateCount$$2[4];
        v2432 = v2654 < maxCount
      }
      v1734 = v2432
    }
    var v876 = v1734;
    for(;v876;) {
      var v1735 = stateCount$$2;
      var v2433 = stateCount$$2[4];
      v1735[4] = v2433 + 1;
      i$$49 = i$$49 + 1;
      var v1736 = i$$49 < maxI;
      if(v1736) {
        var v2818 = qrcode.width;
        var v2763 = i$$49 * v2818;
        var v2655 = centerJ + v2763;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v2434 = image$$10[v2655]
        }
        if(v2434) {
          var v2656 = stateCount$$2[4];
          v2434 = v2656 < maxCount
        }
        v1736 = v2434
      }
      v876 = v1736
    }
    var v1737 = stateCount$$2[4];
    var v877 = v1737 >= maxCount;
    if(v877) {
      return NaN
    }
    var v2657 = stateCount$$2[0];
    var v2658 = stateCount$$2[1];
    var v2435 = v2657 + v2658;
    var v2436 = stateCount$$2[2];
    var v1738 = v2435 + v2436;
    var v1739 = stateCount$$2[3];
    var v878 = v1738 + v1739;
    var v879 = stateCount$$2[4];
    var stateCountTotal = v878 + v879;
    var v2659 = stateCountTotal - originalStateCountTotal;
    var v2437 = Math.abs(v2659);
    var v1740 = 5 * v2437;
    var v1741 = 2 * originalStateCountTotal;
    var v880 = v1740 >= v1741;
    if(v880) {
      return NaN
    }
    var v881;
    var v1742 = JAMScript.call(this.foundPatternCross, this, [stateCount$$2]);
    if(v1742) {
      v881 = JAMScript.call(this.centerFromEnd, this, [stateCount$$2, i$$49])
    }else {
      v881 = NaN
    }
    return v881
  }
  function v96(stateCount$$1, end$$2) {
    var v2438 = stateCount$$1[4];
    var v1743 = end$$2 - v2438;
    var v1744 = stateCount$$1[3];
    var v882 = v1743 - v1744;
    var v1745 = stateCount$$1[2];
    var v883 = v1745 / 2;
    return v882 - v883
  }
  function v95(stateCount) {
    var totalModuleSize = 0;
    var i$$48 = 0;
    var v885 = i$$48 < 5;
    for(;v885;) {
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var count$$8 = stateCount[i$$48]
      }
      var v884 = count$$8 == 0;
      if(v884) {
        return false
      }
      totalModuleSize = totalModuleSize + count$$8;
      i$$48 = i$$48 + 1;
      v885 = i$$48 < 5
    }
    var v886 = totalModuleSize < 7;
    if(v886) {
      return false
    }
    var v1746 = totalModuleSize << INTEGER_MATH_SHIFT;
    var v887 = v1746 / 7;
    var moduleSize$$3 = Math.floor(v887);
    var v888 = moduleSize$$3 / 2;
    var maxVariance = Math.floor(v888);
    var v2764 = stateCount[0];
    var v2660 = v2764 << INTEGER_MATH_SHIFT;
    var v2439 = moduleSize$$3 - v2660;
    var v1747 = Math.abs(v2439);
    var v889 = v1747 < maxVariance;
    if(v889) {
      var v2819 = stateCount[1];
      var v2765 = v2819 << INTEGER_MATH_SHIFT;
      var v2661 = moduleSize$$3 - v2765;
      var v2440 = Math.abs(v2661);
      var v1748 = v2440 < maxVariance;
      if(v1748) {
        var v2820 = 3 * moduleSize$$3;
        var v2851 = stateCount[2];
        var v2821 = v2851 << INTEGER_MATH_SHIFT;
        var v2766 = v2820 - v2821;
        var v2662 = Math.abs(v2766);
        var v2663 = 3 * maxVariance;
        var v2441 = v2662 < v2663;
        if(v2441) {
          var v2862 = stateCount[3];
          var v2852 = v2862 << INTEGER_MATH_SHIFT;
          var v2822 = moduleSize$$3 - v2852;
          var v2767 = Math.abs(v2822);
          var v2664 = v2767 < maxVariance;
          if(v2664) {
            var v2863 = stateCount[4];
            var v2853 = v2863 << INTEGER_MATH_SHIFT;
            var v2823 = moduleSize$$3 - v2853;
            var v2768 = Math.abs(v2823);
            v2664 = v2768 < maxVariance
          }
          v2441 = v2664
        }
        v1748 = v2441
      }
      v889 = v1748
    }
    return v889
  }
  function v94() {
    var v890 = this.crossCheckStateCount;
    v890[0] = 0;
    var v891 = this.crossCheckStateCount;
    v891[1] = 0;
    var v892 = this.crossCheckStateCount;
    v892[2] = 0;
    var v893 = this.crossCheckStateCount;
    v893[3] = 0;
    var v894 = this.crossCheckStateCount;
    v894[4] = 0;
    return this.crossCheckStateCount
  }
  this.image = null;
  this.possibleCenters = [];
  this.hasSkipped = false;
  var v2896 = new Array(0, 0, 0, 0, 0);
  this.crossCheckStateCount = v2896;
  this.resultPointCallback = null;
  JAMScript.call(this.__defineGetter__, this, ["CrossCheckStateCount", v94]);
  this.foundPatternCross = v95;
  this.centerFromEnd = v96;
  this.crossCheckVertical = v97;
  this.crossCheckHorizontal = v98;
  this.handlePossibleCenter = v99;
  this.selectBestPatterns = v101;
  this.findRowSkip = v102;
  this.haveMultiplyConfirmedCenters = v103;
  this.findFinderPattern = v104;
  return
}
function AlignmentPattern(posX$$1, posY$$1, estimatedModuleSize$$2) {
  function v110(moduleSize$$4, i$$55, j$$29) {
    var v2769 = this.y;
    var v2665 = i$$55 - v2769;
    var v2442 = Math.abs(v2665);
    var v1749 = v2442 <= moduleSize$$4;
    if(v1749) {
      var v2770 = this.x;
      var v2666 = j$$29 - v2770;
      var v2443 = Math.abs(v2666);
      v1749 = v2443 <= moduleSize$$4
    }
    var v897 = v1749;
    if(v897) {
      var v1750 = this.estimatedModuleSize;
      var v895 = moduleSize$$4 - v1750;
      var moduleSizeDiff$$1 = Math.abs(v895);
      var v896 = moduleSizeDiff$$1 <= 1;
      var v1752 = !v896;
      if(v1752) {
        var v2444 = this.estimatedModuleSize;
        var v1751 = moduleSizeDiff$$1 / v2444;
        v896 = v1751 <= 1
      }
      return v896
    }
    return false
  }
  function v109() {
    var v1753 = this.count;
    this.count = v1753 + 1;
    return
  }
  function v108() {
    var v898 = this.y;
    return Math.floor(v898)
  }
  function v107() {
    var v899 = this.x;
    return Math.floor(v899)
  }
  function v106() {
    return this.count
  }
  function v105() {
    return this.estimatedModuleSize
  }
  this.x = posX$$1;
  this.y = posY$$1;
  this.count = 1;
  this.estimatedModuleSize = estimatedModuleSize$$2;
  JAMScript.call(this.__defineGetter__, this, ["EstimatedModuleSize", v105]);
  JAMScript.call(this.__defineGetter__, this, ["Count", v106]);
  JAMScript.call(this.__defineGetter__, this, ["X", v107]);
  JAMScript.call(this.__defineGetter__, this, ["Y", v108]);
  this.incrementCount = v109;
  this.aboutEquals = v110;
  return
}
function AlignmentPatternFinder(image$$13, startX, startY, width$$12, height$$11, moduleSize$$5, resultPointCallback) {
  function v115() {
    var startX$$1 = this.startX;
    var height$$12 = this.height;
    var maxJ$$2 = startX$$1 + width$$12;
    var v900 = height$$12 >> 1;
    var middleI = startY + v900;
    var stateCount$$10 = new Array(0, 0, 0);
    var iGen = 0;
    var v912 = iGen < height$$12;
    for(;v912;) {
      var v1754;
      var v2667 = iGen & 1;
      var v2447 = v2667 == 0;
      if(v2447) {
        var v2445 = iGen + 1;
        v1754 = v2445 >> 1
      }else {
        var v2668 = iGen + 1;
        var v2446 = v2668 >> 1;
        v1754 = -v2446
      }
      var v901 = v1754;
      var i$$59 = middleI + v901;
      stateCount$$10[0] = 0;
      stateCount$$10[1] = 0;
      stateCount$$10[2] = 0;
      var j$$31 = startX$$1;
      var v1755 = j$$31 < maxJ$$2;
      if(v1755) {
        var v2824 = qrcode.width;
        var v2771 = v2824 * i$$59;
        var v2669 = j$$31 + v2771;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v2448 = image$$13[v2669]
        }
        v1755 = !v2448
      }
      var v902 = v1755;
      for(;v902;) {
        j$$31 = j$$31 + 1;
        var v1756 = j$$31 < maxJ$$2;
        if(v1756) {
          var v2825 = qrcode.width;
          var v2772 = v2825 * i$$59;
          var v2670 = j$$31 + v2772;
          introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
            var v2449 = image$$13[v2670]
          }
          v1756 = !v2449
        }
        v902 = v1756
      }
      var currentState$$1 = 0;
      var v909 = j$$31 < maxJ$$2;
      for(;v909;) {
        var v2671 = qrcode.width;
        var v2450 = i$$59 * v2671;
        var v1757 = j$$31 + v2450;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v908 = image$$13[v1757]
        }
        if(v908) {
          var v906 = currentState$$1 == 1;
          if(v906) {
            var v1758 = stateCount$$10;
            var v1759 = currentState$$1;
            introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
              var v2451 = stateCount$$10[currentState$$1]
            }
            v1758[v1759] = v2451 + 1
          }else {
            var v905 = currentState$$1 == 2;
            if(v905) {
              var v904 = JAMScript.call(this.foundPatternCross, this, [stateCount$$10]);
              if(v904) {
                var confirmed$$1 = JAMScript.call(this.handlePossibleCenter, this, [stateCount$$10, i$$59, j$$31]);
                var v903 = confirmed$$1 != null;
                if(v903) {
                  return confirmed$$1
                }
              }
              stateCount$$10[0] = stateCount$$10[2];
              stateCount$$10[1] = 1;
              stateCount$$10[2] = 0;
              currentState$$1 = 1
            }else {
              var v1760 = stateCount$$10;
              var v1761 = currentState$$1 = currentState$$1 + 1;
              var v2672 = currentState$$1 = currentState$$1 + 1;
              introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
                var v2452 = stateCount$$10[v2672]
              }
              v1760[v1761] = v2452 + 1
            }
          }
        }else {
          var v907 = currentState$$1 == 1;
          if(v907) {
            currentState$$1 = currentState$$1 + 1
          }
          var v1762 = stateCount$$10;
          var v1763 = currentState$$1;
          introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
            var v2453 = stateCount$$10[currentState$$1]
          }
          v1762[v1763] = v2453 + 1
        }
        j$$31 = j$$31 + 1;
        v909 = j$$31 < maxJ$$2
      }
      var v911 = JAMScript.call(this.foundPatternCross, this, [stateCount$$10]);
      if(v911) {
        confirmed$$1 = JAMScript.call(this.handlePossibleCenter, this, [stateCount$$10, i$$59, maxJ$$2]);
        var v910 = confirmed$$1 != null;
        if(v910) {
          return confirmed$$1
        }
      }
      iGen = iGen + 1;
      v912 = iGen < height$$12
    }
    var v2673 = this.possibleCenters;
    var v2454 = v2673.length;
    var v1764 = v2454 == 0;
    var v914 = !v1764;
    if(v914) {
      var v913 = this.possibleCenters;
      return v913[0]
    }
    throw"Couldn't find enough alignment patterns";
  }
  function v114(stateCount$$9, i$$58, j$$30) {
    var v1765 = stateCount$$9[0];
    var v1766 = stateCount$$9[1];
    var v915 = v1765 + v1766;
    var v916 = stateCount$$9[2];
    var stateCountTotal$$4 = v915 + v916;
    var centerJ$$3 = JAMScript.call(this.centerFromEnd, this, [stateCount$$9, j$$30]);
    var v917 = Math.floor(centerJ$$3);
    var v1767 = stateCount$$9[1];
    var v918 = 2 * v1767;
    var centerI$$2 = JAMScript.call(this.crossCheckVertical, this, [i$$58, v917, v918, stateCountTotal$$4]);
    var v1768 = isNaN(centerI$$2);
    var v927 = !v1768;
    if(v927) {
      var v2455 = stateCount$$9[0];
      var v2456 = stateCount$$9[1];
      var v1769 = v2455 + v2456;
      var v1770 = stateCount$$9[2];
      var v919 = v1769 + v1770;
      var estimatedModuleSize$$3 = v919 / 3;
      var v920 = this.possibleCenters;
      var max$$8 = v920.length;
      var index$$40 = 0;
      var v923 = index$$40 < max$$8;
      for(;v923;) {
        var v921 = this.possibleCenters;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var center$$2 = v921[index$$40]
        }
        var v922 = JAMScript.call(center$$2.aboutEquals, center$$2, [estimatedModuleSize$$3, centerI$$2, centerJ$$3]);
        if(v922) {
          return new AlignmentPattern(centerJ$$3, centerI$$2, estimatedModuleSize$$3)
        }
        index$$40 = index$$40 + 1;
        v923 = index$$40 < max$$8
      }
      var point$$3 = new AlignmentPattern(centerJ$$3, centerI$$2, estimatedModuleSize$$3);
      var v924 = this.possibleCenters;
      v924.push(point$$3);
      var v1771 = this.resultPointCallback;
      var v926 = v1771 != null;
      if(v926) {
        var v925 = this.resultPointCallback;
        JAMScript.call(v925.foundPossibleResultPoint, v925, [point$$3])
      }
    }
    return null
  }
  function v113(startI$$1, centerJ$$2, maxCount$$2, originalStateCountTotal$$2) {
    var image$$14 = this.image;
    var maxI$$2 = qrcode.height;
    var stateCount$$8 = this.crossCheckStateCount;
    stateCount$$8[0] = 0;
    stateCount$$8[1] = 0;
    stateCount$$8[2] = 0;
    var i$$57 = startI$$1;
    var v1772 = i$$57 >= 0;
    if(v1772) {
      var v2826 = qrcode.width;
      var v2773 = i$$57 * v2826;
      var v2674 = centerJ$$2 + v2773;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v2457 = image$$14[v2674]
      }
      if(v2457) {
        var v2675 = stateCount$$8[1];
        v2457 = v2675 <= maxCount$$2
      }
      v1772 = v2457
    }
    var v928 = v1772;
    for(;v928;) {
      var v1773 = stateCount$$8;
      var v2458 = stateCount$$8[1];
      v1773[1] = v2458 + 1;
      i$$57 = i$$57 - 1;
      var v1774 = i$$57 >= 0;
      if(v1774) {
        var v2827 = qrcode.width;
        var v2774 = i$$57 * v2827;
        var v2676 = centerJ$$2 + v2774;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v2459 = image$$14[v2676]
        }
        if(v2459) {
          var v2677 = stateCount$$8[1];
          v2459 = v2677 <= maxCount$$2
        }
        v1774 = v2459
      }
      v928 = v1774
    }
    var v1775 = i$$57 < 0;
    var v2461 = !v1775;
    if(v2461) {
      var v2460 = stateCount$$8[1];
      v1775 = v2460 > maxCount$$2
    }
    var v929 = v1775;
    if(v929) {
      return NaN
    }
    var v1776 = i$$57 >= 0;
    if(v1776) {
      var v2854 = qrcode.width;
      var v2828 = i$$57 * v2854;
      var v2775 = centerJ$$2 + v2828;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v2678 = image$$14[v2775]
      }
      var v2462 = !v2678;
      if(v2462) {
        var v2679 = stateCount$$8[0];
        v2462 = v2679 <= maxCount$$2
      }
      v1776 = v2462
    }
    var v930 = v1776;
    for(;v930;) {
      var v1777 = stateCount$$8;
      var v2463 = stateCount$$8[0];
      v1777[0] = v2463 + 1;
      i$$57 = i$$57 - 1;
      var v1778 = i$$57 >= 0;
      if(v1778) {
        var v2855 = qrcode.width;
        var v2829 = i$$57 * v2855;
        var v2776 = centerJ$$2 + v2829;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v2680 = image$$14[v2776]
        }
        var v2464 = !v2680;
        if(v2464) {
          var v2681 = stateCount$$8[0];
          v2464 = v2681 <= maxCount$$2
        }
        v1778 = v2464
      }
      v930 = v1778
    }
    var v1779 = stateCount$$8[0];
    var v931 = v1779 > maxCount$$2;
    if(v931) {
      return NaN
    }
    i$$57 = startI$$1 + 1;
    var v1780 = i$$57 < maxI$$2;
    if(v1780) {
      var v2830 = qrcode.width;
      var v2777 = i$$57 * v2830;
      var v2682 = centerJ$$2 + v2777;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v2465 = image$$14[v2682]
      }
      if(v2465) {
        var v2683 = stateCount$$8[1];
        v2465 = v2683 <= maxCount$$2
      }
      v1780 = v2465
    }
    var v932 = v1780;
    for(;v932;) {
      var v1781 = stateCount$$8;
      var v2466 = stateCount$$8[1];
      v1781[1] = v2466 + 1;
      i$$57 = i$$57 + 1;
      var v1782 = i$$57 < maxI$$2;
      if(v1782) {
        var v2831 = qrcode.width;
        var v2778 = i$$57 * v2831;
        var v2684 = centerJ$$2 + v2778;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v2467 = image$$14[v2684]
        }
        if(v2467) {
          var v2685 = stateCount$$8[1];
          v2467 = v2685 <= maxCount$$2
        }
        v1782 = v2467
      }
      v932 = v1782
    }
    var v1783 = i$$57 == maxI$$2;
    var v2469 = !v1783;
    if(v2469) {
      var v2468 = stateCount$$8[1];
      v1783 = v2468 > maxCount$$2
    }
    var v933 = v1783;
    if(v933) {
      return NaN
    }
    var v1784 = i$$57 < maxI$$2;
    if(v1784) {
      var v2856 = qrcode.width;
      var v2832 = i$$57 * v2856;
      var v2779 = centerJ$$2 + v2832;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v2686 = image$$14[v2779]
      }
      var v2470 = !v2686;
      if(v2470) {
        var v2687 = stateCount$$8[2];
        v2470 = v2687 <= maxCount$$2
      }
      v1784 = v2470
    }
    var v934 = v1784;
    for(;v934;) {
      var v1785 = stateCount$$8;
      var v2471 = stateCount$$8[2];
      v1785[2] = v2471 + 1;
      i$$57 = i$$57 + 1;
      var v1786 = i$$57 < maxI$$2;
      if(v1786) {
        var v2857 = qrcode.width;
        var v2833 = i$$57 * v2857;
        var v2780 = centerJ$$2 + v2833;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v2688 = image$$14[v2780]
        }
        var v2472 = !v2688;
        if(v2472) {
          var v2689 = stateCount$$8[2];
          v2472 = v2689 <= maxCount$$2
        }
        v1786 = v2472
      }
      v934 = v1786
    }
    var v1787 = stateCount$$8[2];
    var v935 = v1787 > maxCount$$2;
    if(v935) {
      return NaN
    }
    var v1788 = stateCount$$8[0];
    var v1789 = stateCount$$8[1];
    var v936 = v1788 + v1789;
    var v937 = stateCount$$8[2];
    var stateCountTotal$$3 = v936 + v937;
    var v2690 = stateCountTotal$$3 - originalStateCountTotal$$2;
    var v2473 = Math.abs(v2690);
    var v1790 = 5 * v2473;
    var v1791 = 2 * originalStateCountTotal$$2;
    var v938 = v1790 >= v1791;
    if(v938) {
      return NaN
    }
    var v939;
    var v1792 = JAMScript.call(this.foundPatternCross, this, [stateCount$$8]);
    if(v1792) {
      v939 = JAMScript.call(this.centerFromEnd, this, [stateCount$$8, i$$57])
    }else {
      v939 = NaN
    }
    return v939
  }
  function v112(stateCount$$7) {
    var moduleSize$$6 = this.moduleSize;
    var maxVariance$$1 = moduleSize$$6 / 2;
    var i$$56 = 0;
    var v941 = i$$56 < 3;
    for(;v941;) {
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v2691 = stateCount$$7[i$$56]
      }
      var v2474 = moduleSize$$6 - v2691;
      var v1793 = Math.abs(v2474);
      var v940 = v1793 >= maxVariance$$1;
      if(v940) {
        return false
      }
      i$$56 = i$$56 + 1;
      v941 = i$$56 < 3
    }
    return true
  }
  function v111(stateCount$$6, end$$3) {
    var v1794 = stateCount$$6[2];
    var v942 = end$$3 - v1794;
    var v1795 = stateCount$$6[1];
    var v943 = v1795 / 2;
    return v942 - v943
  }
  this.image = image$$13;
  var v2897 = new Array;
  this.possibleCenters = v2897;
  this.startX = startX;
  this.startY = startY;
  this.width = width$$12;
  this.height = height$$11;
  this.moduleSize = moduleSize$$5;
  var v2898 = new Array(0, 0, 0);
  this.crossCheckStateCount = v2898;
  this.resultPointCallback = resultPointCallback;
  this.centerFromEnd = v111;
  this.foundPatternCross = v112;
  this.crossCheckVertical = v113;
  this.handlePossibleCenter = v114;
  this.find = v115;
  return
}
function QRCodeDataBlockReader(blocks, version$$8, numErrorCorrectionCode) {
  function v123() {
    var output$$1 = new Array;
    var MODE_NUMBER = 1;
    var MODE_ROMAN_AND_NUMBER = 2;
    var MODE_8BIT_BYTE = 4;
    var MODE_KANJI = 8;
    do {
      var mode$$8 = JAMScript.call(this.NextMode, this, []);
      var v945 = mode$$8 == 0;
      if(v945) {
        var v1796 = output$$1.length;
        var v944 = v1796 > 0;
        if(v944) {
          break
        }else {
          throw"Empty data block";
        }
      }
      var v1797 = mode$$8 != MODE_NUMBER;
      if(v1797) {
        var v2475 = mode$$8 != MODE_ROMAN_AND_NUMBER;
        if(v2475) {
          var v2692 = mode$$8 != MODE_8BIT_BYTE;
          if(v2692) {
            v2692 = mode$$8 != MODE_KANJI
          }
          v2475 = v2692
        }
        v1797 = v2475
      }
      var v947 = v1797;
      if(v947) {
        var v2781 = "Invalid mode: " + mode$$8;
        var v2693 = v2781 + " in (block:";
        var v2694 = this.blockPointer;
        var v2476 = v2693 + v2694;
        var v1798 = v2476 + " bit:";
        var v1799 = this.bitPointer;
        var v946 = v1798 + v1799;
        throw v946 + ")";
      }
      dataLength = JAMScript.call(this.getDataLength, this, [mode$$8]);
      var v948 = dataLength < 1;
      if(v948) {
        throw"Invalid data length: " + dataLength;
      }
      switch(mode$$8) {
        case MODE_NUMBER:
          var temp_str = JAMScript.call(this.getFigureString, this, [dataLength]);
          var v949 = temp_str.length;
          var ta = new Array(v949);
          var j$$32 = 0;
          var v1800 = temp_str.length;
          var v952 = j$$32 < v1800;
          for(;v952;) {
            var v950 = ta;
            var v951 = j$$32;
            var v2899 = temp_str.charCodeAt(j$$32);
            v950[v951] = v2899;
            j$$32 = j$$32 + 1;
            var v1801 = temp_str.length;
            v952 = j$$32 < v1801
          }
          output$$1.push(ta);
          break;
        case MODE_ROMAN_AND_NUMBER:
          temp_str = JAMScript.call(this.getRomanAndFigureString, this, [dataLength]);
          var v953 = temp_str.length;
          ta = new Array(v953);
          j$$32 = 0;
          var v1802 = temp_str.length;
          var v956 = j$$32 < v1802;
          for(;v956;) {
            var v954 = ta;
            var v955 = j$$32;
            var v2900 = temp_str.charCodeAt(j$$32);
            v954[v955] = v2900;
            j$$32 = j$$32 + 1;
            var v1803 = temp_str.length;
            v956 = j$$32 < v1803
          }
          output$$1.push(ta);
          break;
        case MODE_8BIT_BYTE:
          var temp_sbyteArray3 = JAMScript.call(this.get8bitByteArray, this, [dataLength]);
          output$$1.push(temp_sbyteArray3);
          break;
        case MODE_KANJI:
          temp_str = JAMScript.call(this.getKanjiString, this, [dataLength]);
          output$$1.push(temp_str)
      }
    }while(true);
    return output$$1
  }
  function v122(dataLength$$4) {
    var length$$14 = dataLength$$4;
    var intData$$3 = 0;
    var unicodeString = "";
    var v959 = length$$14 > 0;
    do {
      intData$$3 = JAMScript.call(getNextBits, null, [13]);
      var lowerByte = intData$$3 % 192;
      var higherByte = intData$$3 / 192;
      var v957 = higherByte << 8;
      var tempWord = v957 + lowerByte;
      var shiftjisWord = 0;
      var v1804 = tempWord + 33088;
      var v958 = v1804 <= 40956;
      if(v958) {
        shiftjisWord = tempWord + 33088
      }else {
        shiftjisWord = tempWord + 49472
      }
      var v1805 = String.fromCharCode(shiftjisWord);
      unicodeString = unicodeString + v1805;
      length$$14 = length$$14 - 1;
      v959 = length$$14 > 0
    }while(v959);
    return unicodeString
  }
  function v121(dataLength$$3) {
    var length$$13 = dataLength$$3;
    var intData$$2 = 0;
    var output = new Array;
    var v960 = length$$13 > 0;
    do {
      intData$$2 = JAMScript.call(this.getNextBits, this, [8]);
      output.push(intData$$2);
      length$$13 = length$$13 - 1;
      v960 = length$$13 > 0
    }while(v960);
    return output
  }
  function v120(dataLength$$2) {
    var length$$12 = dataLength$$2;
    var intData$$1 = 0;
    var strData$$1 = "";
    var v967 = length$$12 > 0;
    do {
      var v966 = length$$12 >= 3;
      if(v966) {
        intData$$1 = JAMScript.call(this.getNextBits, this, [10]);
        var v961 = intData$$1 < 100;
        if(v961) {
          strData$$1 = strData$$1 + "0"
        }
        var v962 = intData$$1 < 10;
        if(v962) {
          strData$$1 = strData$$1 + "0"
        }
        length$$12 = length$$12 - 3
      }else {
        var v965 = length$$12 == 2;
        if(v965) {
          intData$$1 = JAMScript.call(this.getNextBits, this, [7]);
          var v963 = intData$$1 < 10;
          if(v963) {
            strData$$1 = strData$$1 + "0"
          }
          length$$12 = length$$12 - 2
        }else {
          var v964 = length$$12 == 1;
          if(v964) {
            intData$$1 = JAMScript.call(this.getNextBits, this, [4]);
            length$$12 = length$$12 - 1
          }
        }
      }
      strData$$1 = strData$$1 + intData$$1;
      v967 = length$$12 > 0
    }while(v967);
    return strData$$1
  }
  function v119(dataLength$$1) {
    var length$$11 = dataLength$$1;
    var intData = 0;
    var strData = "";
    var tableRomanAndFigure = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":");
    var v971 = length$$11 > 0;
    do {
      var v970 = length$$11 > 1;
      if(v970) {
        intData = JAMScript.call(this.getNextBits, this, [11]);
        var v968 = intData / 45;
        var firstLetter = Math.floor(v968);
        var secondLetter = intData % 45;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v1806 = tableRomanAndFigure[firstLetter]
        }
        strData = strData + v1806;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v1807 = tableRomanAndFigure[secondLetter]
        }
        strData = strData + v1807;
        length$$11 = length$$11 - 2
      }else {
        var v969 = length$$11 == 1;
        if(v969) {
          intData = JAMScript.call(this.getNextBits, this, [6]);
          introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
            var v1808 = tableRomanAndFigure[intData]
          }
          strData = strData + v1808;
          length$$11 = length$$11 - 1
        }
      }
      v971 = length$$11 > 0
    }while(v971);
    return strData
  }
  function v118(modeIndicator) {
    var index$$41 = 0;
    for(;true;) {
      var v1809 = modeIndicator >> index$$41;
      var v972 = v1809 == 1;
      if(v972) {
        break
      }
      index$$41 = index$$41 + 1
    }
    var v2477 = qrcode.sizeOfDataLengthInfo;
    var v2478 = this.dataLengthMode;
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v1810 = v2477[v2478]
    }
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v973 = v1810[index$$41]
    }
    return JAMScript.call(this.getNextBits, this, [v973])
  }
  function v117() {
    var v1811 = this.blockPointer;
    var v2782 = this.blocks;
    var v2695 = v2782.length;
    var v2696 = this.numErrorCorrectionCode;
    var v2479 = v2695 - v2696;
    var v1812 = v2479 - 2;
    var v974 = v1811 > v1812;
    if(v974) {
      return 0
    }else {
      return JAMScript.call(this.getNextBits, this, [4])
    }
    return
  }
  function v116(numBits) {
    var bits$$15 = 0;
    var v2480 = this.bitPointer;
    var v1813 = v2480 + 1;
    var v1000 = numBits < v1813;
    if(v1000) {
      var mask$$5 = 0;
      var i$$60 = 0;
      var v975 = i$$60 < numBits;
      for(;v975;) {
        var v1814 = 1 << i$$60;
        mask$$5 = mask$$5 + v1814;
        i$$60 = i$$60 + 1;
        v975 = i$$60 < numBits
      }
      var v2697 = this.bitPointer;
      var v2481 = v2697 - numBits;
      var v1815 = v2481 + 1;
      mask$$5 = mask$$5 << v1815;
      var v2482 = this.blocks;
      var v2483 = this.blockPointer;
      introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
        var v1816 = v2482[v2483]
      }
      var v976 = v1816 & mask$$5;
      var v2484 = this.bitPointer;
      var v1817 = v2484 - numBits;
      var v977 = v1817 + 1;
      bits$$15 = v976 >> v977;
      var v1818 = this.bitPointer;
      this.bitPointer = v1818 - numBits;
      return bits$$15
    }else {
      var v2698 = this.bitPointer;
      var v2485 = v2698 + 1;
      var v1819 = v2485 + 8;
      var v999 = numBits < v1819;
      if(v999) {
        var mask1 = 0;
        i$$60 = 0;
        var v2486 = this.bitPointer;
        var v1820 = v2486 + 1;
        var v978 = i$$60 < v1820;
        for(;v978;) {
          var v1821 = 1 << i$$60;
          mask1 = mask1 + v1821;
          i$$60 = i$$60 + 1;
          var v2487 = this.bitPointer;
          var v1822 = v2487 + 1;
          v978 = i$$60 < v1822
        }
        var v2488 = this.blocks;
        var v2489 = this.blockPointer;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v1823 = v2488[v2489]
        }
        var v979 = v1823 & mask1;
        var v2490 = this.bitPointer;
        var v1824 = v2490 + 1;
        var v980 = numBits - v1824;
        bits$$15 = v979 << v980;
        var v1825 = this.blockPointer;
        this.blockPointer = v1825 + 1;
        var v2699 = this.blocks;
        var v2700 = this.blockPointer;
        introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
          var v2491 = v2699[v2700]
        }
        var v2834 = this.bitPointer;
        var v2783 = v2834 + 1;
        var v2701 = numBits - v2783;
        var v2492 = 8 - v2701;
        var v1826 = v2491 >> v2492;
        bits$$15 = bits$$15 + v1826;
        var v981 = this.bitPointer;
        var v982 = numBits % 8;
        this.bitPointer = v981 - v982;
        var v1827 = this.bitPointer;
        var v984 = v1827 < 0;
        if(v984) {
          var v983 = this.bitPointer;
          this.bitPointer = 8 + v983
        }
        return bits$$15
      }else {
        var v2702 = this.bitPointer;
        var v2493 = v2702 + 1;
        var v1828 = v2493 + 16;
        var v998 = numBits < v1828;
        if(v998) {
          mask1 = 0;
          var mask3 = 0;
          i$$60 = 0;
          var v2494 = this.bitPointer;
          var v1829 = v2494 + 1;
          var v985 = i$$60 < v1829;
          for(;v985;) {
            var v1830 = 1 << i$$60;
            mask1 = mask1 + v1830;
            i$$60 = i$$60 + 1;
            var v2495 = this.bitPointer;
            var v1831 = v2495 + 1;
            v985 = i$$60 < v1831
          }
          var v2496 = this.blocks;
          var v2497 = this.blockPointer;
          introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
            var v1832 = v2496[v2497]
          }
          var v986 = v1832 & mask1;
          var v2498 = this.bitPointer;
          var v1833 = v2498 + 1;
          var v987 = numBits - v1833;
          var bitsFirstBlock = v986 << v987;
          var v1834 = this.blockPointer;
          this.blockPointer = v1834 + 1;
          var v1835 = this.blocks;
          var v1836 = this.blockPointer;
          introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
            var v988 = v1835[v1836]
          }
          var v2703 = this.bitPointer;
          var v2499 = v2703 + 1;
          var v1837 = v2499 + 8;
          var v989 = numBits - v1837;
          var bitsSecondBlock = v988 << v989;
          var v1838 = this.blockPointer;
          this.blockPointer = v1838 + 1;
          i$$60 = 0;
          var v2784 = this.bitPointer;
          var v2704 = v2784 + 1;
          var v2500 = v2704 + 8;
          var v1839 = numBits - v2500;
          var v990 = i$$60 < v1839;
          for(;v990;) {
            var v1840 = 1 << i$$60;
            mask3 = mask3 + v1840;
            i$$60 = i$$60 + 1;
            var v2785 = this.bitPointer;
            var v2705 = v2785 + 1;
            var v2501 = v2705 + 8;
            var v1841 = numBits - v2501;
            v990 = i$$60 < v1841
          }
          var v2835 = this.bitPointer;
          var v2786 = v2835 + 1;
          var v2706 = v2786 + 8;
          var v2502 = numBits - v2706;
          var v1842 = 8 - v2502;
          mask3 = mask3 << v1842;
          var v2503 = this.blocks;
          var v2504 = this.blockPointer;
          introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
            var v1843 = v2503[v2504]
          }
          var v991 = v1843 & mask3;
          var v2787 = this.bitPointer;
          var v2707 = v2787 + 1;
          var v2505 = v2707 + 8;
          var v1844 = numBits - v2505;
          var v992 = 8 - v1844;
          var bitsThirdBlock = v991 >> v992;
          var v993 = bitsFirstBlock + bitsSecondBlock;
          bits$$15 = v993 + bitsThirdBlock;
          var v994 = this.bitPointer;
          var v1845 = numBits - 8;
          var v995 = v1845 % 8;
          this.bitPointer = v994 - v995;
          var v1846 = this.bitPointer;
          var v997 = v1846 < 0;
          if(v997) {
            var v996 = this.bitPointer;
            this.bitPointer = 8 + v996
          }
          return bits$$15
        }else {
          return 0
        }
      }
    }
    return
  }
  this.blockPointer = 0;
  this.bitPointer = 7;
  this.dataLength = 0;
  this.blocks = blocks;
  this.numErrorCorrectionCode = numErrorCorrectionCode;
  var v1003 = version$$8 <= 9;
  if(v1003) {
    this.dataLengthMode = 0
  }else {
    var v1847 = version$$8 >= 10;
    if(v1847) {
      v1847 = version$$8 <= 26
    }
    var v1002 = v1847;
    if(v1002) {
      this.dataLengthMode = 1
    }else {
      var v1848 = version$$8 >= 27;
      if(v1848) {
        v1848 = version$$8 <= 40
      }
      var v1001 = v1848;
      if(v1001) {
        this.dataLengthMode = 2
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
  JAMScript.call(this.__defineGetter__, this, ["DataByte", v123]);
  return
}
function dragenter(e$$7) {
  e$$7.stopPropagation();
  e$$7.preventDefault();
  return
}
function dragover(e$$8) {
  e$$8.stopPropagation();
  e$$8.preventDefault();
  return
}
function drop(e$$9) {
  e$$9.stopPropagation();
  e$$9.preventDefault();
  var dt = e$$9.dataTransfer;
  var files = dt.files;
  handleFiles(files);
  return
}
function handleFiles(f) {
  function v125(theFile) {
    function v124(e$$10) {
      var v1849 = e$$10.target;
      var v1004 = v1849.result;
      JAMScript.call(qrcode.decode, qrcode, [v1004]);
      return
    }
    return v124
  }
  var o$$1 = [];
  var i$$61 = 0;
  var v1850 = f.length;
  var v1007 = i$$61 < v1850;
  for(;v1007;) {
    var reader$$2 = new FileReader;
    var v1005 = reader$$2;
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v1851 = f[i$$61]
    }
    var v2901 = v125(v1851);
    JAMScript.set(v1005, "onload", v2901);
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v1006 = f[i$$61]
    }
    reader$$2.readAsDataURL(v1006);
    i$$61 = i$$61 + 1;
    var v1852 = f.length;
    v1007 = i$$61 < v1852
  }
  return
}
function read(a$$9) {
  alert(a$$9);
  return
}
function load() {
  qrcode.callback = read;
  var v1008 = document.getElementById("imgpath");
  var img$$2 = v1008.value;
  JAMScript.call(qrcode.decode, qrcode, [img$$2]);
  return
}
function passLine(stringPixels) {
  var coll = stringPixels.split("-");
  var i$$62 = 0;
  var v1020 = i$$62 < 320;
  for(;v1020;) {
    introspect(JAMScript.introspectors.processF7C8E2108C090FA3F4DD5A2125B3FB92D58BE890D546C761CED665DED45CBF6870228299E161DFBAC545F199BE443C5FB0DC91C55134FB746FD8B074A23E9182769E8D9B95FAF55EDF81687C8E0F31AE3DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFBCA084048444E0500F7D02CE286BD2ADD7F50C4ECC1271F9E1DAD96E748E83EC3619D5FD408645BB9) {
      var v1009 = coll[i$$62]
    }
    var intVal = parseInt(v1009);
    var v1010 = intVal >> 16;
    r = v1010 & 255;
    var v1011 = intVal >> 8;
    g = v1011 & 255;
    b = intVal & 255;
    var v1012 = imageData.data;
    var v1013 = c + 0;
    JAMScript.set(v1012, v1013, r, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
    var v1014 = imageData.data;
    var v1015 = c + 1;
    JAMScript.set(v1014, v1015, g, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
    var v1016 = imageData.data;
    var v1017 = c + 2;
    JAMScript.set(v1016, v1017, b, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
    var v1018 = imageData.data;
    var v1019 = c + 3;
    JAMScript.set(v1018, v1019, 255, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
    c = c + 4;
    i$$62 = i$$62 + 1;
    v1020 = i$$62 < 320
  }
  var v2506 = 320 * 240;
  var v1853 = v2506 * 4;
  var v1021 = c >= v1853;
  if(v1021) {
    c = 0;
    gCtx.putImageData(imageData, 0, 0)
  }
  return
}
function captureToCanvas() {
  flash = document.getElementById("embedflash");
  JAMScript.call(flash.ccCapture, flash, []);
  JAMScript.call(qrcode.decode, qrcode, []);
  return
}
GridSampler = {};
GridSampler.checkAndNudgePoints = v126;
GridSampler.sampleGrid3 = v127;
GridSampler.sampleGridx = v128;
var v2902 = new Array(31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017);
Version.VERSION_DECODE_INFO = v2902;
var v1022 = Version;
var v2903 = buildVersions();
v1022.VERSIONS = v2903;
Version.getVersionForNumber = v129;
Version.getProvisionalVersionForDimension = v130;
Version.decodeVersionInformation = v131;
PerspectiveTransform.quadrilateralToQuadrilateral = v132;
PerspectiveTransform.squareToQuadrilateral = v133;
PerspectiveTransform.quadrilateralToSquare = v134;
var FORMAT_INFO_MASK_QR = 21522;
var v1023 = new Array(21522, 0);
var v1024 = new Array(20773, 1);
var v1025 = new Array(24188, 2);
var v1026 = new Array(23371, 3);
var v1027 = new Array(17913, 4);
var v1028 = new Array(16590, 5);
var v1029 = new Array(20375, 6);
var v1030 = new Array(19104, 7);
var v1031 = new Array(30660, 8);
var v1032 = new Array(29427, 9);
var v1033 = new Array(32170, 10);
var v1034 = new Array(30877, 11);
var v1035 = new Array(26159, 12);
var v1036 = new Array(25368, 13);
var v1037 = new Array(27713, 14);
var v1038 = new Array(26998, 15);
var v1039 = new Array(5769, 16);
var v1040 = new Array(5054, 17);
var v1041 = new Array(7399, 18);
var v1042 = new Array(6608, 19);
var v1043 = new Array(1890, 20);
var v1044 = new Array(597, 21);
var v1045 = new Array(3340, 22);
var v1046 = new Array(2107, 23);
var v1047 = new Array(13663, 24);
var v1048 = new Array(12392, 25);
var v1049 = new Array(16177, 26);
var v1050 = new Array(14854, 27);
var v1051 = new Array(9396, 28);
var v1052 = new Array(8579, 29);
var v1053 = new Array(11994, 30);
var v1054 = new Array(11245, 31);
var FORMAT_INFO_DECODE_LOOKUP = new Array(v1023, v1024, v1025, v1026, v1027, v1028, v1029, v1030, v1031, v1032, v1033, v1034, v1035, v1036, v1037, v1038, v1039, v1040, v1041, v1042, v1043, v1044, v1045, v1046, v1047, v1048, v1049, v1050, v1051, v1052, v1053, v1054);
var BITS_SET_IN_HALF_BYTE = new Array(0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4);
FormatInformation.numBitsDiffering = v135;
FormatInformation.decodeFormatInformation = v136;
FormatInformation.doDecodeFormatInformation = v137;
ErrorCorrectionLevel.forBits = v138;
var L = new ErrorCorrectionLevel(0, 1, "L");
var M = new ErrorCorrectionLevel(1, 0, "M");
var Q = new ErrorCorrectionLevel(2, 3, "Q");
var H = new ErrorCorrectionLevel(3, 2, "H");
var FOR_BITS = new Array(M, L, H, Q);
DataBlock.getDataBlocks = v139;
DataMask = {};
DataMask.forReference = v140;
var v1055 = new DataMask000;
var v1056 = new DataMask001;
var v1057 = new DataMask010;
var v1058 = new DataMask011;
var v1059 = new DataMask100;
var v1060 = new DataMask101;
var v1061 = new DataMask110;
var v1062 = new DataMask111;
var v2904 = new Array(v1055, v1056, v1057, v1058, v1059, v1060, v1061, v1062);
DataMask.DATA_MASKS = v2904;
var v1063 = GF256;
var v2905 = new GF256(285);
v1063.QR_CODE_FIELD = v2905;
var v1064 = GF256;
var v2906 = new GF256(301);
v1064.DATA_MATRIX_FIELD = v2906;
GF256.addOrSubtract = v141;
Decoder = {};
var v1065 = GF256.QR_CODE_FIELD;
var v2907 = new ReedSolomonDecoder(v1065);
Decoder.rsDecoder = v2907;
Decoder.correctErrors = v142;
Decoder.decode = v143;
qrcode = {};
qrcode.imagedata = null;
qrcode.width = 0;
qrcode.height = 0;
qrcode.qrCodeSymbol = null;
qrcode.debug = false;
var v1066 = [10, 9, 8, 8];
var v1067 = [12, 11, 16, 10];
var v1068 = [14, 13, 16, 12];
qrcode.sizeOfDataLengthInfo = [v1066, v1067, v1068];
qrcode.callback = null;
qrcode.decode = v145;
qrcode.decode_utf8 = v146;
qrcode.process = v147;
qrcode.getPixel = v148;
qrcode.binarize = v149;
qrcode.getMiddleBrightnessPerArea = v150;
qrcode.grayScaleToBitmap = v151;
qrcode.grayscale = v152;
var v1069 = Array.prototype;
v1069.remove = v153;
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
var v1070 = document.getElementById("decode");
JAMScript.set(v1070, "onclick", load);

