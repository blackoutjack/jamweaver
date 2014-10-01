// mwwidgets.js
function v98() {
  function v97(a$$54, b$$34, d$$20, e$$34, f$$18, h$$15, i$$16, g$$11) {
    var l$$8 = this._nRounds;
    introspect(JAM.policy.p12) {
      var v99 = a$$54[b$$34]
    }
    var k$$6 = v99 ^ d$$20[0];
    var v459 = b$$34 + 1;
    introspect(JAM.policy.p12) {
      var v101 = a$$54[v459]
    }
    var m$$7 = v101 ^ d$$20[1];
    var v460 = b$$34 + 2;
    introspect(JAM.policy.p12) {
      var v103 = a$$54[v460]
    }
    var o$$6 = v103 ^ d$$20[2];
    var v461 = b$$34 + 3;
    introspect(JAM.policy.p12) {
      var v105 = a$$54[v461]
    }
    var n$$8 = v105 ^ d$$20[3];
    var p$$7 = 4;
    var r$$6 = 1;
    var v115 = r$$6 < l$$8;
    for(;v115;) {
      var v872 = k$$6 >>> 24;
      introspect(JAM.policy.p12) {
        var v776 = e$$34[v872]
      }
      var v873 = m$$7 >>> 16 & 255;
      introspect(JAM.policy.p12) {
        var v777 = f$$18[v873]
      }
      var v664 = v776 ^ v777;
      var v778 = o$$6 >>> 8 & 255;
      introspect(JAM.policy.p12) {
        var v665 = h$$15[v778]
      }
      var v462 = v664 ^ v665;
      var v666 = n$$8 & 255;
      introspect(JAM.policy.p12) {
        var v463 = i$$16[v666]
      }
      var v107 = v462 ^ v463;
      var v464 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p12) {
        var v108 = d$$20[v464]
      }
      var s$$8 = v107 ^ v108;
      var v875 = m$$7 >>> 24;
      introspect(JAM.policy.p12) {
        var v779 = e$$34[v875]
      }
      var v876 = o$$6 >>> 16 & 255;
      introspect(JAM.policy.p12) {
        var v780 = f$$18[v876]
      }
      var v667 = v779 ^ v780;
      var v781 = n$$8 >>> 8 & 255;
      introspect(JAM.policy.p12) {
        var v668 = h$$15[v781]
      }
      var v465 = v667 ^ v668;
      var v669 = k$$6 & 255;
      introspect(JAM.policy.p12) {
        var v466 = i$$16[v669]
      }
      var v109 = v465 ^ v466;
      var v467 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p12) {
        var v110 = d$$20[v467]
      }
      var u = v109 ^ v110;
      var v878 = o$$6 >>> 24;
      introspect(JAM.policy.p12) {
        var v782 = e$$34[v878]
      }
      var v879 = n$$8 >>> 16 & 255;
      introspect(JAM.policy.p12) {
        var v783 = f$$18[v879]
      }
      var v670 = v782 ^ v783;
      var v784 = k$$6 >>> 8 & 255;
      introspect(JAM.policy.p12) {
        var v671 = h$$15[v784]
      }
      var v468 = v670 ^ v671;
      var v672 = m$$7 & 255;
      introspect(JAM.policy.p12) {
        var v469 = i$$16[v672]
      }
      var v111 = v468 ^ v469;
      var v470 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p12) {
        var v112 = d$$20[v470]
      }
      var v = v111 ^ v112;
      var v881 = n$$8 >>> 24;
      introspect(JAM.policy.p12) {
        var v785 = e$$34[v881]
      }
      var v882 = k$$6 >>> 16 & 255;
      introspect(JAM.policy.p12) {
        var v786 = f$$18[v882]
      }
      var v673 = v785 ^ v786;
      var v787 = m$$7 >>> 8 & 255;
      introspect(JAM.policy.p12) {
        var v674 = h$$15[v787]
      }
      var v471 = v673 ^ v674;
      var v675 = o$$6 & 255;
      introspect(JAM.policy.p12) {
        var v472 = i$$16[v675]
      }
      var v113 = v471 ^ v472;
      var v473 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p12) {
        var v114 = d$$20[v473]
      }
      n$$8 = v113 ^ v114;
      k$$6 = s$$8;
      m$$7 = u;
      o$$6 = v;
      r$$6 = r$$6 + 1;
      v115 = r$$6 < l$$8
    }
    var v954 = k$$6 >>> 24;
    introspect(JAM.policy.p12) {
      var v884 = g$$11[v954]
    }
    var v788 = v884 << 24;
    var v955 = m$$7 >>> 16 & 255;
    introspect(JAM.policy.p12) {
      var v885 = g$$11[v955]
    }
    var v676 = v788 | v885 << 16;
    var v886 = o$$6 >>> 8 & 255;
    introspect(JAM.policy.p12) {
      var v790 = g$$11[v886]
    }
    var v474 = v676 | v790 << 8;
    var v678 = n$$8 & 255;
    introspect(JAM.policy.p12) {
      var v475 = g$$11[v678]
    }
    var v116 = v474 | v475;
    var v476 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p12) {
      var v117 = d$$20[v476]
    }
    s$$8 = v116 ^ v117;
    var v957 = m$$7 >>> 24;
    introspect(JAM.policy.p12) {
      var v887 = g$$11[v957]
    }
    var v791 = v887 << 24;
    var v958 = o$$6 >>> 16 & 255;
    introspect(JAM.policy.p12) {
      var v888 = g$$11[v958]
    }
    var v679 = v791 | v888 << 16;
    var v889 = n$$8 >>> 8 & 255;
    introspect(JAM.policy.p12) {
      var v793 = g$$11[v889]
    }
    var v477 = v679 | v793 << 8;
    var v681 = k$$6 & 255;
    introspect(JAM.policy.p12) {
      var v478 = g$$11[v681]
    }
    var v118 = v477 | v478;
    var v479 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p12) {
      var v119 = d$$20[v479]
    }
    u = v118 ^ v119;
    var v960 = o$$6 >>> 24;
    introspect(JAM.policy.p12) {
      var v890 = g$$11[v960]
    }
    var v794 = v890 << 24;
    var v961 = n$$8 >>> 16 & 255;
    introspect(JAM.policy.p12) {
      var v891 = g$$11[v961]
    }
    var v682 = v794 | v891 << 16;
    var v892 = k$$6 >>> 8 & 255;
    introspect(JAM.policy.p12) {
      var v796 = g$$11[v892]
    }
    var v480 = v682 | v796 << 8;
    var v684 = m$$7 & 255;
    introspect(JAM.policy.p12) {
      var v481 = g$$11[v684]
    }
    var v120 = v480 | v481;
    var v482 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p12) {
      var v121 = d$$20[v482]
    }
    v = v120 ^ v121;
    var v963 = n$$8 >>> 24;
    introspect(JAM.policy.p12) {
      var v893 = g$$11[v963]
    }
    var v797 = v893 << 24;
    var v964 = k$$6 >>> 16 & 255;
    introspect(JAM.policy.p12) {
      var v894 = g$$11[v964]
    }
    var v685 = v797 | v894 << 16;
    var v895 = m$$7 >>> 8 & 255;
    introspect(JAM.policy.p12) {
      var v799 = g$$11[v895]
    }
    var v483 = v685 | v799 << 8;
    var v687 = o$$6 & 255;
    introspect(JAM.policy.p12) {
      var v484 = g$$11[v687]
    }
    var v122 = v483 | v484;
    var v485 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p12) {
      var v123 = d$$20[v485]
    }
    n$$8 = v122 ^ v123;
    JAM.set(a$$54, b$$34, s$$8, JAM.policy.p3);
    JAM.set(a$$54, b$$34 + 1, u, JAM.policy.p3);
    JAM.set(a$$54, b$$34 + 2, v, JAM.policy.p3);
    JAM.set(a$$54, b$$34 + 3, n$$8, JAM.policy.p3);
    return
  }
  function v96(c$$31, b$$33) {
    var v127 = b$$33 + 1;
    introspect(JAM.policy.p12) {
      var d$$19 = c$$31[v127]
    }
    JAM.set(c$$31, b$$33 + 1, JAM.get(c$$31, b$$33 + 3, JAM.policy.p19), JAM.policy.p19);
    JAM.set(c$$31, b$$33 + 3, d$$19, JAM.policy.p18);
    JAM.call(this._doCryptBlock, this, [c$$31, b$$33, this._invKeySchedule, k$$5, f$$17, g$$10, a$$52, r$$5]);
    var v131 = b$$33 + 1;
    introspect(JAM.policy.p12) {
      d$$19 = c$$31[v131]
    }
    JAM.set(c$$31, b$$33 + 1, JAM.get(c$$31, b$$33 + 3, JAM.policy.p19), JAM.policy.p19);
    JAM.set(c$$31, b$$33 + 3, d$$19, JAM.policy.p18);
    return
  }
  function v95(a$$53, b$$32) {
    JAM.call(this._doCryptBlock, this, [a$$53, b$$32, this._keySchedule, o$$5, m$$6, s$$7, n$$7, l$$7]);
    return
  }
  function v94() {
    var c$$30 = this._key;
    var b$$31 = c$$30.words;
    var d$$18 = c$$30.sigBytes / 4;
    c$$30 = 4 * ((this._nRounds = d$$18 + 6) + 1);
    var i$$15 = this._keySchedule = [];
    var j$$6 = 0;
    var v141 = j$$6 < c$$30;
    for(;v141;) {
      if(j$$6 < d$$18) {
        i$$15[j$$6] = b$$31[j$$6]
      }else {
        var v137 = j$$6 - 1;
        introspect(JAM.policy.p12) {
          var h$$14 = i$$15[v137]
        }
        var v138;
        if(j$$6 % d$$18) {
          var v489 = 6 < d$$18;
          if(v489) {
            var v688 = 4 == j$$6 % d$$18;
            if(v688) {
              var v1049 = h$$14 >>> 24;
              introspect(JAM.policy.p12) {
                var v1014 = l$$7[v1049]
              }
              var v966 = v1014 << 24;
              var v1050 = h$$14 >>> 16 & 255;
              introspect(JAM.policy.p12) {
                var v1015 = l$$7[v1050]
              }
              var v896 = v966 | v1015 << 16;
              var v1016 = h$$14 >>> 8 & 255;
              introspect(JAM.policy.p12) {
                var v968 = l$$7[v1016]
              }
              var v801 = v896 | v968 << 8;
              var v898 = h$$14 & 255;
              introspect(JAM.policy.p12) {
                var v802 = l$$7[v898]
              }
              v688 = h$$14 = v801 | v802
            }
            v489 = v688
          }
          v138 = v489
        }else {
          h$$14 = h$$14 << 8 | h$$14 >>> 24;
          var v1052 = h$$14 >>> 24;
          introspect(JAM.policy.p12) {
            var v1017 = l$$7[v1052]
          }
          var v969 = v1017 << 24;
          var v1053 = h$$14 >>> 16 & 255;
          introspect(JAM.policy.p12) {
            var v1018 = l$$7[v1053]
          }
          var v899 = v969 | v1018 << 16;
          var v1019 = h$$14 >>> 8 & 255;
          introspect(JAM.policy.p12) {
            var v971 = l$$7[v1019]
          }
          var v805 = v899 | v971 << 8;
          var v901 = h$$14 & 255;
          introspect(JAM.policy.p12) {
            var v806 = l$$7[v901]
          }
          h$$14 = v805 | v806;
          var v972 = j$$6 / d$$18 | 0;
          introspect(JAM.policy.p12) {
            var v902 = e$$32[v972]
          }
          v138 = h$$14 = h$$14 ^ v902 << 24
        }
        v138;
        var v491 = j$$6 - d$$18;
        introspect(JAM.policy.p12) {
          var v139 = i$$15[v491]
        }
        i$$15[j$$6] = v139 ^ h$$14
      }
      j$$6 = j$$6 + 1;
      v141 = j$$6 < c$$30
    }
    b$$31 = this._invKeySchedule = [];
    d$$18 = 0;
    var v142 = d$$18 < c$$30;
    for(;v142;) {
      j$$6 = c$$30 - d$$18;
      var v689;
      if(d$$18 % 4) {
        v689 = i$$15[j$$6]
      }else {
        v689 = i$$15[j$$6 - 4]
      }
      h$$14 = v689;
      var v492;
      var v810 = 4 > d$$18;
      if(!v810) {
        v810 = 4 >= j$$6
      }
      if(v810) {
        v492 = h$$14
      }else {
        var v1021 = h$$14 >>> 24;
        introspect(JAM.policy.p12) {
          var v973 = l$$7[v1021]
        }
        introspect(JAM.policy.p12) {
          var v904 = k$$5[v973]
        }
        var v1022 = h$$14 >>> 16 & 255;
        introspect(JAM.policy.p12) {
          var v974 = l$$7[v1022]
        }
        introspect(JAM.policy.p12) {
          var v905 = f$$17[v974]
        }
        var v811 = v904 ^ v905;
        var v975 = h$$14 >>> 8 & 255;
        introspect(JAM.policy.p12) {
          var v906 = l$$7[v975]
        }
        introspect(JAM.policy.p12) {
          var v812 = g$$10[v906]
        }
        var v690 = v811 ^ v812;
        var v907 = h$$14 & 255;
        introspect(JAM.policy.p12) {
          var v813 = l$$7[v907]
        }
        introspect(JAM.policy.p12) {
          var v691 = a$$52[v813]
        }
        v492 = v690 ^ v691
      }
      b$$31[d$$18] = v492;
      d$$18 = d$$18 + 1;
      v142 = d$$18 < c$$30
    }
    return
  }
  function v93() {
    var c$$29 = [];
    var b$$30 = 0;
    var v144 = 256 > b$$30;
    for(;v144;) {
      var v143;
      if(128 > b$$30) {
        v143 = b$$30 << 1
      }else {
        v143 = b$$30 << 1 ^ 283
      }
      c$$29[b$$30] = v143;
      b$$30 = b$$30 + 1;
      v144 = 256 > b$$30
    }
    var d$$17 = 0;
    var e$$33 = 0;
    b$$30 = 0;
    var v165 = 256 > b$$30;
    for(;v165;) {
      var j$$5 = e$$33 ^ e$$33 << 1 ^ e$$33 << 2 ^ e$$33 << 3 ^ e$$33 << 4;
      j$$5 = j$$5 >>> 8 ^ j$$5 & 255 ^ 99;
      l$$7[d$$17] = j$$5;
      r$$5[j$$5] = d$$17;
      introspect(JAM.policy.p12) {
        var i$$14 = c$$29[d$$17]
      }
      introspect(JAM.policy.p12) {
        var h$$13 = c$$29[i$$14]
      }
      introspect(JAM.policy.p12) {
        var p$$6 = c$$29[h$$13]
      }
      introspect(JAM.policy.p12) {
        var v499 = c$$29[j$$5]
      }
      var t = 257 * v499 ^ 16843008 * j$$5;
      o$$5[d$$17] = t << 24 | t >>> 8;
      m$$6[d$$17] = t << 16 | t >>> 16;
      s$$7[d$$17] = t << 8 | t >>> 24;
      n$$7[d$$17] = t;
      t = 16843009 * p$$6 ^ 65537 * h$$13 ^ 257 * i$$14 ^ 16843008 * d$$17;
      k$$5[j$$5] = t << 24 | t >>> 8;
      f$$17[j$$5] = t << 16 | t >>> 16;
      g$$10[j$$5] = t << 8 | t >>> 24;
      a$$52[j$$5] = t;
      var v164;
      if(d$$17) {
        var v976 = p$$6 ^ i$$14;
        introspect(JAM.policy.p12) {
          var v908 = c$$29[v976]
        }
        introspect(JAM.policy.p12) {
          var v815 = c$$29[v908]
        }
        introspect(JAM.policy.p12) {
          var v697 = c$$29[v815]
        }
        d$$17 = i$$14 ^ v697;
        introspect(JAM.policy.p12) {
          var v909 = c$$29[e$$33]
        }
        introspect(JAM.policy.p12) {
          var v816 = c$$29[v909]
        }
        v164 = e$$33 = e$$33 ^ v816
      }else {
        v164 = d$$17 = e$$33 = 1
      }
      v164;
      b$$30 = b$$30 + 1;
      v165 = 256 > b$$30
    }
    return
  }
  var p$$5 = CryptoJS;
  var h$$12 = p$$5.lib.BlockCipher;
  var i$$13 = p$$5.algo;
  var l$$7 = [];
  var r$$5 = [];
  var o$$5 = [];
  var m$$6 = [];
  var s$$7 = [];
  var n$$7 = [];
  var k$$5 = [];
  var f$$17 = [];
  var g$$10 = [];
  var a$$52 = [];
  v93();
  var e$$32 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
  var v167 = i$$13;
  var v1092 = JAM.call(h$$12.extend, h$$12, [{_doReset:v94, encryptBlock:v95, decryptBlock:v96, _doCryptBlock:v97, keySize:8}]);
  i$$13 = v167.AES = v1092;
  var v168 = p$$5;
  var v1093 = JAM.call(h$$12._createHelper, h$$12, [i$$13]);
  v168.AES = v1093;
  return
}
function v92(p$$4) {
  function v91(a$$51, c$$28, f$$16, j$$4) {
    var v169 = this.cfg;
    j$$4 = JAM.call(v169.extend, v169, [j$$4]);
    c$$28 = JAM.call(this._parse, this, [c$$28, j$$4.format]);
    var v171 = j$$4.kdf;
    f$$16 = JAM.call(v171.compute, v171, [f$$16, a$$51.keySize, a$$51.ivSize, c$$28.salt]);
    j$$4.iv = f$$16.iv;
    var v175 = e$$24.decrypt;
    return JAM.call(v175.call, v175, [this, a$$51, c$$28, f$$16.key, j$$4])
  }
  function v90(a$$50, c$$27, f$$15, j$$3) {
    var v177 = this.cfg;
    j$$3 = JAM.call(v177.extend, v177, [j$$3]);
    var v178 = j$$3.kdf;
    f$$15 = JAM.call(v178.compute, v178, [f$$15, a$$50.keySize, a$$50.ivSize]);
    j$$3.iv = f$$15.iv;
    var v181 = e$$24.encrypt;
    a$$50 = JAM.call(v181.call, v181, [this, a$$50, c$$27, f$$15.key, j$$3]);
    JAM.call(a$$50.mixIn, a$$50, [f$$15]);
    return a$$50
  }
  function v89(b$$29, c$$26, e$$31, f$$14) {
    if(!f$$14) {
      f$$14 = JAM.call(r$$4.random, r$$4, [8])
    }
    var v183 = JAM.call(s$$6.create, s$$6, [{keySize:c$$26 + e$$31}]);
    b$$29 = JAM.call(v183.compute, v183, [b$$29, f$$14]);
    e$$31 = JAM.call(r$$4.create, r$$4, [b$$29.words.slice(c$$26), 4 * e$$31]);
    b$$29.sigBytes = 4 * c$$26;
    return JAM.call(a$$30.create, a$$30, [{key:b$$29, iv:e$$31, salt:f$$14}])
  }
  function v88(a$$49, c$$25) {
    var v187;
    if("string" == typeof a$$49) {
      v187 = JAM.call(c$$25.parse, c$$25, [a$$49])
    }else {
      v187 = a$$49
    }
    return v187
  }
  function v87(a$$48, c$$24, e$$30, f$$13) {
    var v188 = this.cfg;
    f$$13 = JAM.call(v188.extend, v188, [f$$13]);
    c$$24 = JAM.call(this._parse, this, [c$$24, f$$13.format]);
    var v190 = JAM.call(a$$48.createDecryptor, a$$48, [e$$30, f$$13]);
    return JAM.call(v190.finalize, v190, [c$$24.ciphertext])
  }
  function v86(b$$28, d$$16, c$$23, e$$29) {
    var v192 = this.cfg;
    e$$29 = JAM.call(v192.extend, v192, [e$$29]);
    var f$$12 = JAM.call(b$$28.createEncryptor, b$$28, [c$$23, e$$29]);
    d$$16 = JAM.call(f$$12.finalize, f$$12, [d$$16]);
    f$$12 = f$$12.cfg;
    return JAM.call(a$$30.create, a$$30, [{ciphertext:d$$16, key:c$$23, iv:f$$12.iv, algorithm:b$$28, mode:f$$12.mode, padding:f$$12.padding, blockSize:b$$28.blockSize, formatter:e$$29.format}])
  }
  function v85(b$$27) {
    b$$27 = JAM.call(m$$5.parse, m$$5, [b$$27]);
    var d$$15 = b$$27.words;
    var v512 = 1398893684 == d$$15[0];
    if(v512) {
      v512 = 1701076831 == d$$15[1]
    }
    if(v512) {
      var c$$22 = JAM.call(r$$4.create, r$$4, [d$$15.slice(2, 4)]);
      d$$15.splice(0, 4);
      b$$27.sigBytes = b$$27.sigBytes - 16
    }
    return JAM.call(a$$30.create, a$$30, [{ciphertext:b$$27, salt:c$$22}])
  }
  function v84(a$$47) {
    var d$$14 = a$$47.ciphertext;
    a$$47 = a$$47.salt;
    var v514;
    if(a$$47) {
      var v817 = JAM.call(r$$4.create, r$$4, [[1398893684, 1701076831]]);
      var v702 = JAM.call(v817.concat, v817, [a$$47]);
      v514 = JAM.call(v702.concat, v702, [d$$14])
    }else {
      v514 = d$$14
    }
    var v197 = v514;
    d$$14 = JAM.call(v197.toString, v197, [m$$5]);
    return d$$14 = d$$14.replace(/(.{64})/g, "$1\n")
  }
  function v83(a$$46) {
    var v515 = a$$46;
    if(!v515) {
      v515 = this.formatter
    }
    var v198 = v515;
    return JAM.call(v198.stringify, v198, [this])
  }
  function v82(a$$45) {
    JAM.call(this.mixIn, this, [a$$45]);
    return
  }
  function v81() {
    var b$$26 = this.cfg.padding;
    if(this._xformMode == this._ENC_XFORM_MODE) {
      JAM.call(b$$26.pad, b$$26, [this._data, this.blockSize]);
      var a$$44 = JAM.call(this._process, this, [!0])
    }else {
      a$$44 = JAM.call(this._process, this, [!0]);
      JAM.call(b$$26.unpad, b$$26, [a$$44])
    }
    return a$$44
  }
  function v80(b$$25, a$$43) {
    var v204 = this._mode;
    JAM.call(v204.processBlock, v204, [b$$25, a$$43]);
    return
  }
  function v79() {
    var v205 = n$$6.reset;
    JAM.call(v205.call, v205, [this]);
    var b$$24 = this.cfg;
    var a$$42 = b$$24.iv;
    b$$24 = b$$24.mode;
    if(this._xformMode == this._ENC_XFORM_MODE) {
      var c$$21 = b$$24.createEncryptor
    }else {
      c$$21 = b$$24.createDecryptor;
      this._minBufferSize = 1
    }
    var v521 = a$$42;
    if(v521) {
      v521 = a$$42.words
    }
    var v1094 = JAM.call(c$$21.call, c$$21, [b$$24, this, v521]);
    this._mode = v1094;
    return
  }
  function v78(b$$23) {
    var v522 = b$$23.sigBytes;
    var v818 = b$$23.words;
    var v819 = b$$23.sigBytes - 1 >>> 2;
    introspect(JAM.policy.p12) {
      var v704 = v818[v819]
    }
    b$$23.sigBytes = v522 - (v704 & 255);
    return
  }
  function v77(b$$22, a$$41) {
    var c$$20 = 4 * a$$41;
    c$$20 = c$$20 - b$$22.sigBytes % c$$20;
    var e$$28 = c$$20 << 24 | c$$20 << 16 | c$$20 << 8 | c$$20;
    var f$$11 = [];
    var g$$9 = 0;
    var v210 = g$$9 < c$$20;
    for(;v210;) {
      f$$11.push(e$$28);
      g$$9 = g$$9 + 4;
      v210 = g$$9 < c$$20
    }
    c$$20 = JAM.call(r$$4.create, r$$4, [f$$11, c$$20]);
    JAM.call(b$$22.concat, b$$22, [c$$20]);
    return
  }
  function v76() {
    function v75(a$$40, d$$13) {
      var c$$19 = this._cipher;
      var e$$27 = c$$19.blockSize;
      var f$$10 = a$$40.slice(d$$13, d$$13 + e$$27);
      JAM.call(c$$19.decryptBlock, c$$19, [a$$40, d$$13]);
      b$$20.call(this, a$$40, d$$13, e$$27);
      this._prevBlock = f$$10;
      return
    }
    function v74(a$$39, d$$12) {
      var c$$18 = this._cipher;
      var e$$26 = c$$18.blockSize;
      b$$20.call(this, a$$39, d$$12, e$$26);
      JAM.call(c$$18.encryptBlock, c$$18, [a$$39, d$$12]);
      var v1095 = a$$39.slice(d$$12, d$$12 + e$$26);
      this._prevBlock = v1095;
      return
    }
    function b$$20(b$$21, a$$38, d$$11) {
      var c$$17 = this._iv;
      var v213;
      if(c$$17) {
        v213 = this._iv = p$$4
      }else {
        v213 = c$$17 = this._prevBlock
      }
      v213;
      var e$$25 = 0;
      var v215 = e$$25 < d$$11;
      for(;v215;) {
        var v214 = a$$38 + e$$25;
        introspect(JAM.policy.p12) {
          var v707 = b$$21[v214]
        }
        introspect(JAM.policy.p12) {
          var v708 = c$$17[e$$25]
        }
        JAM.set(b$$21, v214, v707 ^ v708, JAM.policy.p3);
        e$$25 = e$$25 + 1;
        v215 = e$$25 < d$$11
      }
      return
    }
    var a$$37 = f$$9.extend();
    var v216 = a$$37;
    var v1096 = JAM.call(a$$37.extend, a$$37, [{processBlock:v74}]);
    v216.Encryptor = v1096;
    var v217 = a$$37;
    var v1097 = JAM.call(a$$37.extend, a$$37, [{processBlock:v75}]);
    v217.Decryptor = v1097;
    return a$$37
  }
  function v73(b$$19, a$$36) {
    this._cipher = b$$19;
    this._iv = a$$36;
    return
  }
  function v72(b$$18, a$$35) {
    var v218 = this.Decryptor;
    return JAM.call(v218.create, v218, [b$$18, a$$35])
  }
  function v71(b$$17, a$$34) {
    var v219 = this.Encryptor;
    return JAM.call(v219.create, v219, [b$$17, a$$34])
  }
  function v70() {
    return JAM.call(this._process, this, [!0])
  }
  function v69() {
    function v68(b$$16) {
      function v67(a$$33, q$$3, j$$2) {
        var v529;
        if("string" == typeof q$$3) {
          v529 = c$$16
        }else {
          v529 = e$$24
        }
        var v221 = v529;
        return JAM.call(v221.decrypt, v221, [b$$16, a$$33, q$$3, j$$2])
      }
      function v66(a$$32, q$$2, j$$1) {
        var v530;
        if("string" == typeof q$$2) {
          v530 = c$$16
        }else {
          v530 = e$$24
        }
        var v222 = v530;
        return JAM.call(v222.encrypt, v222, [b$$16, a$$32, q$$2, j$$1])
      }
      return{encrypt:v66, decrypt:v67}
    }
    return v68
  }
  function v65(b$$15) {
    if(b$$15) {
      JAM.call(this._append, this, [b$$15])
    }
    return this._doFinalize()
  }
  function v64(b$$14) {
    JAM.call(this._append, this, [b$$14]);
    return this._process()
  }
  function v63() {
    var v223 = o$$4.reset;
    JAM.call(v223.call, v223, [this]);
    this._doReset();
    return
  }
  function v62(b$$13, d$$10, a$$31) {
    var v224 = this.cfg;
    var v1098 = JAM.call(v224.extend, v224, [a$$31]);
    this.cfg = v1098;
    this._xformMode = b$$13;
    this._key = d$$10;
    this.reset();
    return
  }
  function v61(b$$12, d$$9) {
    return JAM.call(this.create, this, [this._DEC_XFORM_MODE, b$$12, d$$9])
  }
  function v60(b$$11, d$$8) {
    return JAM.call(this.create, this, [this._ENC_XFORM_MODE, b$$11, d$$8])
  }
  var h$$11 = CryptoJS;
  var i$$12 = h$$11.lib;
  var l$$6 = i$$12.Base;
  var r$$4 = i$$12.WordArray;
  var o$$4 = i$$12.BufferedBlockAlgorithm;
  var m$$5 = h$$11.enc.Base64;
  var s$$6 = h$$11.algo.EvpKDF;
  var v229 = i$$12;
  var v1099 = JAM.call(o$$4.extend, o$$4, [{cfg:l$$6.extend(), createEncryptor:v60, createDecryptor:v61, init:v62, reset:v63, process:v64, finalize:v65, keySize:4, ivSize:4, _ENC_XFORM_MODE:1, _DEC_XFORM_MODE:2, _createHelper:v69()}]);
  var n$$6 = v229.Cipher = v1099;
  var v230 = i$$12;
  var v1100 = JAM.call(n$$6.extend, n$$6, [{_doFinalize:v70, blockSize:1}]);
  v230.StreamCipher = v1100;
  var k$$4 = h$$11.mode = {};
  var v231 = i$$12;
  var v1101 = JAM.call(l$$6.extend, l$$6, [{createEncryptor:v71, createDecryptor:v72, init:v73}]);
  var f$$9 = v231.BlockCipherMode = v1101;
  var v232 = k$$4;
  var v1102 = v76();
  k$$4 = v232.CBC = v1102;
  var g$$8 = (h$$11.pad = {}).Pkcs7 = {pad:v77, unpad:v78};
  var v234 = i$$12;
  var v822 = n$$6.cfg;
  var v1103 = JAM.call(n$$6.extend, n$$6, [{cfg:JAM.call(v822.extend, v822, [{mode:k$$4, padding:g$$8}]), reset:v79, _doProcessBlock:v80, _doFinalize:v81, blockSize:4}]);
  v234.BlockCipher = v1103;
  var v235 = i$$12;
  var v1104 = JAM.call(l$$6.extend, l$$6, [{init:v82, toString:v83}]);
  var a$$30 = v235.CipherParams = v1104;
  k$$4 = (h$$11.format = {}).OpenSSL = {stringify:v84, parse:v85};
  var v237 = i$$12;
  var v1105 = JAM.call(l$$6.extend, l$$6, [{cfg:JAM.call(l$$6.extend, l$$6, [{format:k$$4}]), encrypt:v86, decrypt:v87, _parse:v88}]);
  var e$$24 = v237.SerializableCipher = v1105;
  h$$11 = (h$$11.kdf = {}).OpenSSL = {compute:v89};
  var v239 = i$$12;
  var v825 = e$$24.cfg;
  var v1106 = JAM.call(e$$24.extend, e$$24, [{cfg:JAM.call(v825.extend, v825, [{kdf:h$$11}]), encrypt:v90, decrypt:v91}]);
  var c$$16 = v239.PasswordBasedCipher = v1106;
  return
}
function v59() {
  function v58(i$$11, l$$5, h$$10) {
    var v240 = JAM.call(r$$3.create, r$$3, [h$$10]);
    return JAM.call(v240.compute, v240, [i$$11, l$$5])
  }
  function v57(i$$10, m$$4) {
    var h$$9 = this.cfg;
    var n$$5 = h$$9.hasher.create();
    var k$$3 = l$$4.create();
    var f$$8 = k$$3.words;
    var g$$7 = h$$9.keySize;
    h$$9 = h$$9.iterations;
    var v244 = f$$8.length < g$$7;
    for(;v244;) {
      if(a$$29) {
        JAM.call(n$$5.update, n$$5, [a$$29])
      }
      var v242 = JAM.call(n$$5.update, n$$5, [i$$10]);
      var a$$29 = JAM.call(v242.finalize, v242, [m$$4]);
      n$$5.reset();
      var e$$23 = 1;
      var v243 = e$$23 < h$$9;
      for(;v243;) {
        a$$29 = JAM.call(n$$5.finalize, n$$5, [a$$29]);
        n$$5.reset();
        e$$23 = e$$23 + 1;
        v243 = e$$23 < h$$9
      }
      JAM.call(k$$3.concat, k$$3, [a$$29]);
      v244 = f$$8.length < g$$7
    }
    k$$3.sigBytes = 4 * g$$7;
    return k$$3
  }
  function v56(i$$9) {
    var v245 = this.cfg;
    var v1107 = JAM.call(v245.extend, v245, [i$$9]);
    this.cfg = v1107;
    return
  }
  var p$$3 = CryptoJS;
  var h$$8 = p$$3.lib;
  var i$$8 = h$$8.Base;
  var l$$4 = h$$8.WordArray;
  h$$8 = p$$3.algo;
  var v246 = h$$8;
  var v1108 = JAM.call(i$$8.extend, i$$8, [{cfg:JAM.call(i$$8.extend, i$$8, [{keySize:4, hasher:h$$8.MD5, iterations:1}]), init:v56, compute:v57}]);
  var r$$3 = v246.EvpKDF = v1108;
  p$$3.EvpKDF = v58;
  return
}
function v55(p$$2) {
  function v54() {
    var f$$7 = this._data;
    var g$$6 = f$$7.words;
    var a$$28 = 8 * this._nDataBytes;
    var e$$22 = 8 * f$$7.sigBytes;
    var v249 = e$$22 >>> 5;
    introspect(JAM.policy.p12) {
      var v717 = g$$6[v249]
    }
    g$$6[v249] = v717 | 128 << 24 - e$$22 % 32;
    g$$6[(e$$22 + 64 >>> 9 << 4) + 14] = (a$$28 << 8 | a$$28 >>> 24) & 16711935 | (a$$28 << 24 | a$$28 >>> 8) & 4278255360;
    f$$7.sigBytes = 4 * (g$$6.length + 1);
    this._process();
    f$$7 = this._hash.words;
    g$$6 = 0;
    var v253 = 4 > g$$6;
    for(;v253;) {
      introspect(JAM.policy.p12) {
        a$$28 = f$$7[g$$6]
      }
      JAM.set(f$$7, g$$6, (a$$28 << 8 | a$$28 >>> 24) & 16711935 | (a$$28 << 24 | a$$28 >>> 8) & 4278255360, JAM.policy.p3);
      g$$6 = g$$6 + 1;
      v253 = 4 > g$$6
    }
    return
  }
  function v53(f$$6, g$$5) {
    var a$$27 = 0;
    var v256 = 16 > a$$27;
    for(;v256;) {
      var e$$21 = g$$5 + a$$27;
      introspect(JAM.policy.p12) {
        var c$$15 = f$$6[e$$21]
      }
      JAM.set(f$$6, e$$21, (c$$15 << 8 | c$$15 >>> 24) & 16711935 | (c$$15 << 24 | c$$15 >>> 8) & 4278255360, JAM.policy.p3);
      a$$27 = a$$27 + 1;
      v256 = 16 > a$$27
    }
    e$$21 = this._hash.words;
    c$$15 = e$$21[0];
    var b$$10 = e$$21[1];
    var d$$7 = e$$21[2];
    var q$$1 = e$$21[3];
    a$$27 = 0;
    var v259 = 64 > a$$27;
    for(;v259;) {
      var v258;
      if(16 > a$$27) {
        var v978 = g$$5 + a$$27;
        introspect(JAM.policy.p12) {
          var v914 = f$$6[v978]
        }
        introspect(JAM.policy.p12) {
          var v915 = k$$2[a$$27]
        }
        c$$15 = h$$7(c$$15, b$$10, d$$7, q$$1, v914, 7, v915);
        var v979 = g$$5 + a$$27 + 1;
        introspect(JAM.policy.p12) {
          var v916 = f$$6[v979]
        }
        var v980 = a$$27 + 1;
        introspect(JAM.policy.p12) {
          var v917 = k$$2[v980]
        }
        q$$1 = h$$7(q$$1, c$$15, b$$10, d$$7, v916, 12, v917);
        var v918 = g$$5 + a$$27 + 2;
        introspect(JAM.policy.p12) {
          var v838 = f$$6[v918]
        }
        var v919 = a$$27 + 2;
        introspect(JAM.policy.p12) {
          var v839 = k$$2[v919]
        }
        d$$7 = h$$7(d$$7, q$$1, c$$15, b$$10, v838, 17, v839);
        var v840 = g$$5 + a$$27 + 3;
        introspect(JAM.policy.p12) {
          var v728 = f$$6[v840]
        }
        var v841 = a$$27 + 3;
        introspect(JAM.policy.p12) {
          var v729 = k$$2[v841]
        }
        v258 = b$$10 = h$$7(b$$10, d$$7, q$$1, c$$15, v728, 22, v729)
      }else {
        var v549;
        if(32 > a$$27) {
          var v1025 = g$$5 + (a$$27 + 1) % 16;
          introspect(JAM.policy.p12) {
            var v982 = f$$6[v1025]
          }
          introspect(JAM.policy.p12) {
            var v983 = k$$2[a$$27]
          }
          c$$15 = i$$7(c$$15, b$$10, d$$7, q$$1, v982, 5, v983);
          var v1026 = g$$5 + (a$$27 + 6) % 16;
          introspect(JAM.policy.p12) {
            var v984 = f$$6[v1026]
          }
          var v1027 = a$$27 + 1;
          introspect(JAM.policy.p12) {
            var v985 = k$$2[v1027]
          }
          q$$1 = i$$7(q$$1, c$$15, b$$10, d$$7, v984, 9, v985);
          var v986 = g$$5 + (a$$27 + 11) % 16;
          introspect(JAM.policy.p12) {
            var v921 = f$$6[v986]
          }
          var v987 = a$$27 + 2;
          introspect(JAM.policy.p12) {
            var v922 = k$$2[v987]
          }
          d$$7 = i$$7(d$$7, q$$1, c$$15, b$$10, v921, 14, v922);
          var v923 = g$$5 + a$$27 % 16;
          introspect(JAM.policy.p12) {
            var v842 = f$$6[v923]
          }
          var v924 = a$$27 + 3;
          introspect(JAM.policy.p12) {
            var v843 = k$$2[v924]
          }
          v549 = b$$10 = i$$7(b$$10, d$$7, q$$1, c$$15, v842, 20, v843)
        }else {
          var v730;
          if(48 > a$$27) {
            var v1059 = g$$5 + (3 * a$$27 + 5) % 16;
            introspect(JAM.policy.p12) {
              var v1029 = f$$6[v1059]
            }
            introspect(JAM.policy.p12) {
              var v1030 = k$$2[a$$27]
            }
            c$$15 = l$$3(c$$15, b$$10, d$$7, q$$1, v1029, 4, v1030);
            var v1060 = g$$5 + (3 * a$$27 + 8) % 16;
            introspect(JAM.policy.p12) {
              var v1031 = f$$6[v1060]
            }
            var v1061 = a$$27 + 1;
            introspect(JAM.policy.p12) {
              var v1032 = k$$2[v1061]
            }
            q$$1 = l$$3(q$$1, c$$15, b$$10, d$$7, v1031, 11, v1032);
            var v1033 = g$$5 + (3 * a$$27 + 11) % 16;
            introspect(JAM.policy.p12) {
              var v989 = f$$6[v1033]
            }
            var v1034 = a$$27 + 2;
            introspect(JAM.policy.p12) {
              var v990 = k$$2[v1034]
            }
            d$$7 = l$$3(d$$7, q$$1, c$$15, b$$10, v989, 16, v990);
            var v991 = g$$5 + (3 * a$$27 + 14) % 16;
            introspect(JAM.policy.p12) {
              var v925 = f$$6[v991]
            }
            var v992 = a$$27 + 3;
            introspect(JAM.policy.p12) {
              var v926 = k$$2[v992]
            }
            v730 = b$$10 = l$$3(b$$10, d$$7, q$$1, c$$15, v925, 23, v926)
          }else {
            var v1064 = g$$5 + 3 * a$$27 % 16;
            introspect(JAM.policy.p12) {
              var v1036 = f$$6[v1064]
            }
            introspect(JAM.policy.p12) {
              var v1037 = k$$2[a$$27]
            }
            c$$15 = r$$2(c$$15, b$$10, d$$7, q$$1, v1036, 6, v1037);
            var v1065 = g$$5 + (3 * a$$27 + 7) % 16;
            introspect(JAM.policy.p12) {
              var v1038 = f$$6[v1065]
            }
            var v1066 = a$$27 + 1;
            introspect(JAM.policy.p12) {
              var v1039 = k$$2[v1066]
            }
            q$$1 = r$$2(q$$1, c$$15, b$$10, d$$7, v1038, 10, v1039);
            var v1040 = g$$5 + (3 * a$$27 + 14) % 16;
            introspect(JAM.policy.p12) {
              var v993 = f$$6[v1040]
            }
            var v1041 = a$$27 + 2;
            introspect(JAM.policy.p12) {
              var v994 = k$$2[v1041]
            }
            d$$7 = r$$2(d$$7, q$$1, c$$15, b$$10, v993, 15, v994);
            var v995 = g$$5 + (3 * a$$27 + 5) % 16;
            introspect(JAM.policy.p12) {
              var v927 = f$$6[v995]
            }
            var v996 = a$$27 + 3;
            introspect(JAM.policy.p12) {
              var v928 = k$$2[v996]
            }
            v730 = b$$10 = r$$2(b$$10, d$$7, q$$1, c$$15, v927, 21, v928)
          }
          v549 = v730
        }
        v258 = v549
      }
      v258;
      a$$27 = a$$27 + 4;
      v259 = 64 > a$$27
    }
    e$$21[0] = e$$21[0] + c$$15 | 0;
    e$$21[1] = e$$21[1] + b$$10 | 0;
    e$$21[2] = e$$21[2] + d$$7 | 0;
    e$$21[3] = e$$21[3] + q$$1 | 0;
    return
  }
  function v52() {
    var v1109 = JAM.call(s$$5.create, s$$5, [[1732584193, 4023233417, 2562383102, 271733878]]);
    this._hash = v1109;
    return
  }
  function v51() {
    var f$$5 = 0;
    var v267 = 64 > f$$5;
    for(;v267;) {
      k$$2[f$$5] = 4294967296 * p$$2.abs(p$$2.sin(f$$5 + 1)) | 0;
      f$$5 = f$$5 + 1;
      v267 = 64 > f$$5
    }
    return
  }
  function h$$7(f$$1, g$$1, a$$23, e$$17, c$$11, b$$6, d$$3) {
    f$$1 = f$$1 + (g$$1 & a$$23 | ~g$$1 & e$$17) + c$$11 + d$$3;
    return(f$$1 << b$$6 | f$$1 >>> 32 - b$$6) + g$$1
  }
  function i$$7(f$$2, g$$2, a$$24, e$$18, c$$12, b$$7, d$$4) {
    f$$2 = f$$2 + (g$$2 & e$$18 | a$$24 & ~e$$18) + c$$12 + d$$4;
    return(f$$2 << b$$7 | f$$2 >>> 32 - b$$7) + g$$2
  }
  function l$$3(f$$3, g$$3, a$$25, e$$19, c$$13, b$$8, d$$5) {
    f$$3 = f$$3 + (g$$3 ^ a$$25 ^ e$$19) + c$$13 + d$$5;
    return(f$$3 << b$$8 | f$$3 >>> 32 - b$$8) + g$$3
  }
  function r$$2(f$$4, g$$4, a$$26, e$$20, c$$14, b$$9, d$$6) {
    f$$4 = f$$4 + (a$$26 ^ (g$$4 | ~e$$20)) + c$$14 + d$$6;
    return(f$$4 << b$$9 | f$$4 >>> 32 - b$$9) + g$$4
  }
  var o$$3 = CryptoJS;
  var m$$3 = o$$3.lib;
  var s$$5 = m$$3.WordArray;
  m$$3 = m$$3.Hasher;
  var n$$4 = o$$3.algo;
  var k$$2 = [];
  v51();
  var v276 = n$$4;
  var v1110 = JAM.call(m$$3.extend, m$$3, [{_doReset:v52, _doProcessBlock:v53, _doFinalize:v54}]);
  n$$4 = v276.MD5 = v1110;
  var v277 = o$$3;
  var v1111 = JAM.call(m$$3._createHelper, m$$3, [n$$4]);
  v277.MD5 = v1111;
  var v278 = o$$3;
  var v1112 = JAM.call(m$$3._createHmacHelper, m$$3, [n$$4]);
  v278.HmacMD5 = v1112;
  return
}
function v50() {
  function v49(i$$6) {
    i$$6 = i$$6.replace(/\s/g, "");
    var l$$2 = i$$6.length;
    var r$$1 = this._map;
    var o$$2 = r$$1.charAt(64);
    if(o$$2) {
      o$$2 = i$$6.indexOf(o$$2);
      var v741 = -1 != o$$2;
      if(v741) {
        l$$2 = o$$2
      }
    }
    o$$2 = [];
    var m$$2 = 0;
    var s$$4 = 0;
    var v285 = s$$4 < l$$2;
    for(;v285;) {
      if(s$$4 % 4) {
        var n$$3 = r$$1.indexOf(i$$6.charAt(s$$4 - 1)) << 2 * (s$$4 % 4);
        var k$$1 = r$$1.indexOf(i$$6.charAt(s$$4)) >>> 6 - 2 * (s$$4 % 4);
        var v283 = m$$2 >>> 2;
        introspect(JAM.policy.p12) {
          var v744 = o$$2[v283]
        }
        o$$2[v283] = v744 | (n$$3 | k$$1) << 24 - 8 * (m$$2 % 4);
        m$$2 = m$$2 + 1
      }
      s$$4 = s$$4 + 1;
      v285 = s$$4 < l$$2
    }
    return JAM.call(h$$5.create, h$$5, [o$$2, m$$2])
  }
  function v48(i$$5) {
    var l$$1 = i$$5.words;
    var h$$6 = i$$5.sigBytes;
    var o$$1 = this._map;
    i$$5.clamp();
    i$$5 = [];
    var m$$1 = 0;
    var v290 = m$$1 < h$$6;
    for(;v290;) {
      var v998 = m$$1 >>> 2;
      introspect(JAM.policy.p12) {
        var v934 = l$$1[v998]
      }
      var v573 = (v934 >>> 24 - 8 * (m$$1 % 4) & 255) << 16;
      var v1000 = m$$1 + 1 >>> 2;
      introspect(JAM.policy.p12) {
        var v936 = l$$1[v1000]
      }
      var v286 = v573 | (v936 >>> 24 - 8 * ((m$$1 + 1) % 4) & 255) << 8;
      var v856 = m$$1 + 2 >>> 2;
      introspect(JAM.policy.p12) {
        var v748 = l$$1[v856]
      }
      var s$$3 = v286 | v748 >>> 24 - 8 * ((m$$1 + 2) % 4) & 255;
      var n$$2 = 0;
      var v576 = 4 > n$$2;
      if(v576) {
        v576 = m$$1 + 0.75 * n$$2 < h$$6
      }
      var v289 = v576;
      for(;v289;) {
        i$$5.push(o$$1.charAt(s$$3 >>> 6 * (3 - n$$2) & 63));
        n$$2 = n$$2 + 1;
        var v578 = 4 > n$$2;
        if(v578) {
          v578 = m$$1 + 0.75 * n$$2 < h$$6
        }
        v289 = v578
      }
      m$$1 = m$$1 + 3;
      v290 = m$$1 < h$$6
    }
    if(l$$1 = o$$1.charAt(64)) {
      var v291 = i$$5.length % 4;
      for(;v291;) {
        i$$5.push(l$$1);
        v291 = i$$5.length % 4
      }
    }
    return i$$5.join("")
  }
  var p$$1 = CryptoJS;
  var h$$5 = p$$1.lib.WordArray;
  p$$1.enc.Base64 = {stringify:v48, parse:v49, _map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};
  return
}
function v47(p, h$$4) {
  function v46(a$$22) {
    function v45(e$$16, c$$10) {
      var v581 = g.HMAC;
      var v295 = JAM.call(v581.create, v581, [a$$22, c$$10]);
      return JAM.call(v295.finalize, v295, [e$$16])
    }
    return v45
  }
  function v44(a$$21) {
    function v43(e$$15, c$$9) {
      var v296 = JAM.call(a$$21.create, a$$21, [c$$9]);
      return JAM.call(v296.finalize, v296, [e$$15])
    }
    return v43
  }
  function v42() {
    var v297 = f.clone;
    var a$$20 = JAM.call(v297.call, v297, [this]);
    var v298 = a$$20;
    var v1113 = this._hash.clone();
    v298._hash = v1113;
    return a$$20
  }
  function v41(a$$19) {
    if(a$$19) {
      JAM.call(this._append, this, [a$$19])
    }
    this._doFinalize();
    return this._hash
  }
  function v40(a$$18) {
    JAM.call(this._append, this, [a$$18]);
    this._process();
    return this
  }
  function v39() {
    var v299 = f.reset;
    JAM.call(v299.call, v299, [this]);
    this._doReset();
    return
  }
  function v38() {
    this.reset();
    return
  }
  function v37() {
    var v300 = r.clone;
    var a$$17 = JAM.call(v300.call, v300, [this]);
    var v301 = a$$17;
    var v1114 = this._data.clone();
    v301._data = v1114;
    return a$$17
  }
  function v36(a$$16) {
    var e$$14 = this._data;
    var c$$8 = e$$14.words;
    var b$$5 = e$$14.sigBytes;
    var d$$2 = this.blockSize;
    var q = b$$5 / (4 * d$$2);
    var v303;
    if(a$$16) {
      v303 = p.ceil(q)
    }else {
      v303 = p.max((q | 0) - this._minBufferSize, 0)
    }
    q = v303;
    a$$16 = q * d$$2;
    b$$5 = p.min(4 * a$$16, b$$5);
    if(a$$16) {
      var j = 0;
      var v305 = j < a$$16;
      for(;v305;) {
        JAM.call(this._doProcessBlock, this, [c$$8, j]);
        j = j + d$$2;
        v305 = j < a$$16
      }
      j = c$$8.splice(0, a$$16);
      e$$14.sigBytes = e$$14.sigBytes - b$$5
    }
    return JAM.call(o.create, o, [j, b$$5])
  }
  function v35(a$$15) {
    var v306 = "string" == typeof a$$15;
    if(v306) {
      a$$15 = JAM.call(k.parse, k, [a$$15])
    }
    var v307 = this._data;
    JAM.call(v307.concat, v307, [a$$15]);
    this._nDataBytes = this._nDataBytes + a$$15.sigBytes;
    return
  }
  function v34() {
    var v1115 = o.create();
    this._data = v1115;
    this._nDataBytes = 0;
    return
  }
  function v33(a$$14) {
    return JAM.call(n$$1.parse, n$$1, [unescape(encodeURIComponent(a$$14))])
  }
  function v32(a$$13) {
    try {
      return decodeURIComponent(escape(JAM.call(n$$1.stringify, n$$1, [a$$13])))
    }catch(e$$13) {
      throw Error("Malformed UTF-8 data");
    }
    return
  }
  function v31(a$$12) {
    var e$$12 = a$$12.length;
    var c$$7 = [];
    var b$$4 = 0;
    var v312 = b$$4 < e$$12;
    for(;v312;) {
      var v310 = c$$7;
      var v311 = b$$4 >>> 2;
      introspect(JAM.policy.p12) {
        var v755 = v310[v311]
      }
      v310[v311] = v755 | (a$$12.charCodeAt(b$$4) & 255) << 24 - 8 * (b$$4 % 4);
      b$$4 = b$$4 + 1;
      v312 = b$$4 < e$$12
    }
    return JAM.call(o.create, o, [c$$7, e$$12])
  }
  function v30(a$$11) {
    var e$$11 = a$$11.words;
    a$$11 = a$$11.sigBytes;
    var c$$6 = [];
    var b$$3 = 0;
    var v314 = b$$3 < a$$11;
    for(;v314;) {
      var v943 = b$$3 >>> 2;
      introspect(JAM.policy.p12) {
        var v863 = e$$11[v943]
      }
      c$$6.push(String.fromCharCode(v863 >>> 24 - 8 * (b$$3 % 4) & 255));
      b$$3 = b$$3 + 1;
      v314 = b$$3 < a$$11
    }
    return c$$6.join("")
  }
  function v29(a$$10) {
    var e$$10 = a$$10.length;
    var c$$5 = [];
    var b$$2 = 0;
    var v317 = b$$2 < e$$10;
    for(;v317;) {
      var v315 = c$$5;
      var v316 = b$$2 >>> 3;
      introspect(JAM.policy.p12) {
        var v758 = v315[v316]
      }
      v315[v316] = v758 | parseInt(a$$10.substr(b$$2, 2), 16) << 24 - 4 * (b$$2 % 8);
      b$$2 = b$$2 + 2;
      v317 = b$$2 < e$$10
    }
    return JAM.call(o.create, o, [c$$5, e$$10 / 2])
  }
  function v28(a$$9) {
    var e$$9 = a$$9.words;
    a$$9 = a$$9.sigBytes;
    var c$$4 = [];
    var b$$1 = 0;
    var v322 = b$$1 < a$$9;
    for(;v322;) {
      var v760 = b$$1 >>> 2;
      introspect(JAM.policy.p12) {
        var v592 = e$$9[v760]
      }
      var d$$1 = v592 >>> 24 - 8 * (b$$1 % 4) & 255;
      var v594 = d$$1 >>> 4;
      c$$4.push(JAM.call(v594.toString, v594, [16]));
      var v595 = d$$1 & 15;
      c$$4.push(JAM.call(v595.toString, v595, [16]));
      b$$1 = b$$1 + 1;
      v322 = b$$1 < a$$9
    }
    return c$$4.join("")
  }
  function v27(a$$8) {
    var e$$8 = [];
    var c$$3 = 0;
    var v324 = c$$3 < a$$8;
    for(;v324;) {
      e$$8.push(4294967296 * p.random() | 0);
      c$$3 = c$$3 + 4;
      v324 = c$$3 < a$$8
    }
    return JAM.call(o.create, o, [e$$8, a$$8])
  }
  function v26() {
    var v325 = r.clone;
    var a$$7 = JAM.call(v325.call, v325, [this]);
    var v326 = a$$7;
    var v1116 = this.words.slice(0);
    v326.words = v1116;
    return a$$7
  }
  function v25() {
    var a$$6 = this.words;
    var e$$7 = this.sigBytes;
    var v327 = e$$7 >>> 2;
    introspect(JAM.policy.p12) {
      var v763 = a$$6[v327]
    }
    a$$6[v327] = v763 & 4294967295 << 32 - 8 * (e$$7 % 4);
    var v328 = a$$6;
    var v1117 = p.ceil(e$$7 / 4);
    v328.length = v1117;
    return
  }
  function v24(a$$5) {
    var e$$6 = this.words;
    var c$$2 = a$$5.words;
    var b = this.sigBytes;
    a$$5 = a$$5.sigBytes;
    this.clamp();
    if(b % 4) {
      var d = 0;
      var v330 = d < a$$5;
      for(;v330;) {
        var v329 = b + d >>> 2;
        introspect(JAM.policy.p12) {
          var v765 = e$$6[v329]
        }
        var v1046 = d >>> 2;
        introspect(JAM.policy.p12) {
          var v1007 = c$$2[v1046]
        }
        e$$6[v329] = v765 | (v1007 >>> 24 - 8 * (d % 4) & 255) << 24 - 8 * ((b + d) % 4);
        d = d + 1;
        v330 = d < a$$5
      }
    }else {
      if(65535 < c$$2.length) {
        d = 0;
        var v332 = d < a$$5;
        for(;v332;) {
          e$$6[b + d >>> 2] = c$$2[d >>> 2];
          d = d + 4;
          v332 = d < a$$5
        }
      }else {
        var v333 = e$$6.push;
        JAM.call(v333.apply, v333, [e$$6, c$$2])
      }
    }
    this.sigBytes = this.sigBytes + a$$5;
    return this
  }
  function v23(a$$4) {
    var v336 = a$$4 || s$$2;
    return JAM.call(v336.stringify, v336, [this])
  }
  function v22(a$$3, e$$5) {
    a$$3 = this.words = a$$3 || [];
    var v337;
    if(e$$5 != h$$4) {
      v337 = e$$5
    }else {
      v337 = 4 * a$$3.length
    }
    this.sigBytes = v337;
    return
  }
  function v21() {
    function v20() {
      var v338 = this.$super;
      return JAM.call(v338.extend, v338, [this])
    }
    function v19(a$$2) {
      var c$$1;
      for(c$$1 in a$$2) {
        var v339 = a$$2.hasOwnProperty(c$$1);
        if(v339) {
          JAM.set(this, c$$1, JAM.get(a$$2, c$$1, JAM.policy.p19), JAM.policy.p19)
        }
      }
      var v340 = a$$2.hasOwnProperty("toString");
      if(v340) {
        this.toString = a$$2.toString
      }
      return
    }
    function v18() {
      return
    }
    function v17() {
      var a$$1 = this.extend();
      var v341 = a$$1.init;
      JAM.call(v341.apply, v341, [a$$1, arguments]);
      return a$$1
    }
    function v16(e$$4) {
      a.prototype = this;
      var c = new a;
      if(e$$4) {
        JAM.call(c.mixIn, c, [e$$4])
      }
      c.$super = this;
      return c
    }
    function a() {
      return
    }
    return{extend:v16, create:v17, init:v18, mixIn:v19, clone:v20}
  }
  var i$$4 = {};
  var l = i$$4.lib = {};
  var v342 = l;
  var v1118 = v21();
  var r = v342.Base = v1118;
  var v343 = l;
  var v1119 = JAM.call(r.extend, r, [{init:v22, toString:v23, concat:v24, clamp:v25, clone:v26, random:v27}]);
  var o = v343.WordArray = v1119;
  var m = i$$4.enc = {};
  var s$$2 = m.Hex = {stringify:v28, parse:v29};
  var n$$1 = m.Latin1 = {stringify:v30, parse:v31};
  var k = m.Utf8 = {stringify:v32, parse:v33};
  var v344 = l;
  var v1120 = JAM.call(r.extend, r, [{reset:v34, _append:v35, _process:v36, clone:v37, _minBufferSize:0}]);
  var f = v344.BufferedBlockAlgorithm = v1120;
  var v345 = l;
  var v1121 = JAM.call(f.extend, f, [{init:v38, reset:v39, update:v40, finalize:v41, clone:v42, blockSize:16, _createHelper:v44, _createHmacHelper:v46}]);
  v345.Hasher = v1121;
  var g = i$$4.algo = {};
  return i$$4
}
function getElementsByClass(strClassName) {
  var arrayElemsFound = new Array;
  var arrayElems = document.getElementsByTagName("*");
  var i$$2 = 0;
  var v348 = i$$2 < arrayElems.length;
  for(;v348;) {
    introspect(JAM.policy.p12) {
      var v767 = arrayElems[i$$2]
    }
    if(v767.className == strClassName) {
      introspect(JAM.policy.p12) {
        var v346 = arrayElems[i$$2]
      }
      arrayElemsFound.push(v346)
    }
    i$$2 = i$$2 + 1;
    v348 = i$$2 < arrayElems.length
  }
  return arrayElemsFound
}
function getElementsByType(strType) {
  var arrayElemsFound$$1 = new Array;
  var arrayElems$$1 = document.getElementsByTagName("*");
  var i$$3 = 0;
  var v351 = i$$3 < arrayElems$$1.length;
  for(;v351;) {
    introspect(JAM.policy.p12) {
      var v768 = arrayElems$$1[i$$3]
    }
    if(v768.type == strType) {
      introspect(JAM.policy.p12) {
        var v349 = arrayElems$$1[i$$3]
      }
      arrayElemsFound$$1.push(v349)
    }
    i$$3 = i$$3 + 1;
    v351 = i$$3 < arrayElems$$1.length
  }
  return arrayElemsFound$$1
}
function ajaxPost(strData$$1, strUrl$$1, callback$$25) {
  ajaxRequest("POST", strData$$1, strUrl$$1, callback$$25);
  return
}
function ajaxGet(strUrl$$2, callback$$26) {
  ajaxRequest("GET", "", strUrl$$2, callback$$26);
  return
}
function ajaxRequest(strCommand, strData$$2, strUrl$$3, callback$$27) {
  function v0() {
    var v615 = xmlhttp.readyState == 4;
    if(v615) {
      v615 = xmlhttp.status == 200
    }
    if(v615) {
      JAM.call(callback$$27, null, [xmlhttp.responseText])
    }
    return
  }
  xmlhttp = new XMLHttpRequest;
  JAM.set(xmlhttp, "onreadystatechange", v0);
  xmlhttp.open(strCommand, strUrl$$3, true);
  if(strData$$2 != "") {
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(strData$$2)
  }else {
    xmlhttp.send()
  }
  return
}
function SNote(serverPath, divParent) {
  function v14(jsonStr) {
    var jsonObj$$1 = JAM.call(JSON.parse, JSON, [jsonStr]);
    var v355 = CryptoJS.lib.CipherParams;
    var v771 = CryptoJS.enc.Base64;
    var cipherParams$$1 = JAM.call(v355.create, v355, [{ciphertext:JAM.call(v771.parse, v771, [jsonObj$$1.ct])}]);
    if(jsonObj$$1.iv) {
      var v357 = cipherParams$$1;
      var v618 = CryptoJS.enc.Hex;
      var v1122 = JAM.call(v618.parse, v618, [jsonObj$$1.iv]);
      v357.iv = v1122
    }
    if(jsonObj$$1.s) {
      var v359 = cipherParams$$1;
      var v620 = CryptoJS.enc.Hex;
      var v1123 = JAM.call(v620.parse, v620, [jsonObj$$1.s]);
      v359.salt = v1123
    }
    return cipherParams$$1
  }
  function v13(cipherParams) {
    var v622 = cipherParams.ciphertext;
    var jsonObj = {ct:JAM.call(v622.toString, v622, [CryptoJS.enc.Base64])};
    if(cipherParams.iv) {
      var v362 = jsonObj;
      var v1124 = cipherParams.iv.toString();
      v362.iv = v1124
    }
    if(cipherParams.salt) {
      var v364 = jsonObj;
      var v1125 = cipherParams.salt.toString();
      v364.s = v1125
    }
    return JAM.call(JSON.stringify, JSON, [jsonObj])
  }
  function init(divParent$$1, strServerPath) {
    strNoteId = divParent$$1.id;
    var divParent$$inline_8 = divParent$$1;
    var strServerPath$$inline_9 = strServerPath;
    var strNoteId$$inline_10 = strNoteId;
    divParent$$inline_8.style.border = "2px solid";
    divParent$$inline_8.style.backgroundColor = "#FFFFCC";
    divParent$$inline_8.className = "mwwidget:snote";
    var divParent$$inline_84 = divParent$$inline_8;
    preNote = document.createElement("pre");
    preNote.id = divParent$$inline_84.id + "_" + "pre_note";
    preNote.className = "write-only non-editable";
    JAM.call(divParent$$inline_84.appendChild, divParent$$inline_84, [preNote]);
    preCipherText = document.createElement("pre");
    preCipherText.id = divParent$$inline_84.id + "_" + "pre_cipher_text";
    preCipherText.style.display = "none";
    JAM.call(divParent$$inline_84.appendChild, divParent$$inline_84, [preCipherText]);
    var divParent$$inline_86 = divParent$$inline_8;
    var strNoteId$$inline_87 = strNoteId$$inline_10;
    divButtons = document.createElement("div");
    divButtons.style.textAlign = "left";
    JAM.call(divParent$$inline_86.appendChild, divParent$$inline_86, [divButtons]);
    createNoteButton("edit", createEditButtonHandler(strNoteId$$inline_87), divButtons, strNoteId$$inline_87);
    createNoteButton("read", createUnlockButtonHandler(strNoteId$$inline_87), divButtons, strNoteId$$inline_87);
    createNoteButton("delete", createDeleteButtonHandler(strNoteId$$inline_87), divButtons, strNoteId$$inline_87);
    var divParent$$inline_89 = divParent$$inline_8;
    var strServerPath$$inline_90 = strServerPath$$inline_9;
    var strNoteId$$inline_91 = strNoteId$$inline_10;
    divEdit = createPopupDialog("edit_dialog", divParent$$inline_89, divParent$$inline_89.id);
    divEdit.style.width = 400;
    divEdit.style.display = "none";
    inputNewPassword = createPasswordPanel(divEdit, "Enter password:", "input_new_password", divParent$$inline_89.id);
    inputNewPasswordRetype = createPasswordPanel(divEdit, "Retype password:", "input_new_password_retype", divParent$$inline_89.id);
    inputNote = document.createElement("textarea");
    inputNote.style.width = 350;
    inputNote.style.height = 200;
    inputNote.className = "destructive-read read-only";
    inputNote.id = divParent$$inline_89.id + "_" + "input_new_note";
    JAM.call(divEdit.appendChild, divEdit, [inputNote]);
    divButtons = createDialogButtonPanel(createEditDialogOkHandler(strServerPath$$inline_90, strNoteId$$inline_91), createEditDialogCancelHandler(strNoteId$$inline_91), divEdit);
    var divParent$$inline_93 = divParent$$inline_8;
    var strNoteId$$inline_94 = strNoteId$$inline_10;
    divUnlock = createPopupDialog("unlock_dialog", divParent$$inline_93, divParent$$inline_93.id);
    divUnlock.style.display = "none";
    inputPassword = createPasswordPanel(divUnlock, "Enter password:", "input_password", divParent$$inline_93.id);
    createDialogButtonPanel(createUnlockDialogOkHandler(strNoteId$$inline_94), createUnlockDialogCancelHandler(strNoteId$$inline_94), divUnlock, divParent$$inline_93.id);
    var strServerPath$$inline_97 = strServerPath$$inline_9;
    var strNoteId$$inline_98 = strNoteId$$inline_10;
    divDeleteDialog = createPopupDialog("delete_dialog", divParent$$inline_8, divParent$$inline_8.id);
    divDeleteDialog.style.display = "none";
    var parent$$inline_99 = divDeleteDialog;
    label = document.createElement("label");
    JAM.set(label, "textContent", "Are you sure you want to delete?", JAM.policy.p17);
    JAM.call(parent$$inline_99.appendChild, parent$$inline_99, [label]);
    createDialogButtonPanel(createDeleteDialogOkHandler(strServerPath$$inline_97, strNoteId$$inline_98), createDeleteDialogCancelHandler(strNoteId$$inline_98), divDeleteDialog);
    fetch(strServerPath, strNoteId, createFetchHandler(strNoteId));
    return
  }
  function createNoteButton(strLabel, funcHandleClick, divButtons$$1, strNoteId$$6) {
    button = document.createElement("input");
    button.type = "button";
    button.value = strLabel;
    button.id = strNoteId$$6 + "_" + ("button_" + strLabel);
    JAM.call(divButtons$$1.appendChild, divButtons$$1, [button]);
    JAM.set(button, "onclick", funcHandleClick);
    return button
  }
  function createPasswordPanel(divParent$$8, strPrompt, strPasswordInputId, strNoteId$$7) {
    divPassword = document.createElement("div");
    JAM.call(divParent$$8.appendChild, divParent$$8, [divPassword]);
    labelPassword = document.createElement("label");
    JAM.set(labelPassword, "textContent", strPrompt, JAM.policy.p17);
    JAM.call(divPassword.appendChild, divPassword, [labelPassword]);
    inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.className = "destructive-read read-only";
    inputPassword.id = strNoteId$$7 + "_" + strPasswordInputId;
    JAM.call(divPassword.appendChild, divPassword, [inputPassword]);
    return inputPassword
  }
  function createPopupDialog(strDialogId, divParent$$9, strNoteId$$8) {
    divDialog = document.createElement("div");
    divDialog.id = strNoteId$$8 + "_" + strDialogId;
    divDialog.className = "popup";
    JAM.call(divParent$$9.appendChild, divParent$$9, [divDialog]);
    return divDialog
  }
  function createDialogButtonPanel(funcHandleOk, funcHandleCancel, parent$$1) {
    divButtons = document.createElement("div");
    buttonOk = document.createElement("button");
    buttonOk.type = "input";
    JAM.set(buttonOk, "textContent", "ok", JAM.policy.p17);
    JAM.set(buttonOk, "onclick", funcHandleOk);
    JAM.call(divButtons.appendChild, divButtons, [buttonOk]);
    buttonCancel = document.createElement("button");
    buttonCancel.type = "input";
    JAM.set(buttonCancel, "textContent", "cancel", JAM.policy.p17);
    JAM.set(buttonCancel, "onclick", funcHandleCancel);
    JAM.call(divButtons.appendChild, divButtons, [buttonCancel]);
    JAM.call(parent$$1.appendChild, parent$$1, [divButtons]);
    return divButtons
  }
  function closeUnlockDialog(strNoteId$$12) {
    var div$$3 = document.getElementById(strNoteId$$12 + "_" + "unlock_dialog");
    div$$3.style.display = "none";
    var inputPassword$$inline_17 = document.getElementById(strNoteId$$12 + "_" + "input_password");
    inputPassword$$inline_17.value = "";
    return
  }
  function closeDeleteDialog(strNoteId$$13) {
    var div$$4 = document.getElementById(strNoteId$$13 + "_" + "delete_dialog");
    div$$4.style.display = "none";
    return
  }
  function closeEditDialog(strNoteId$$14) {
    var div$$5 = document.getElementById(strNoteId$$14 + "_" + "edit_dialog");
    div$$5.style.display = "none";
    var inputNewNote$$inline_21 = document.getElementById(strNoteId$$14 + "_" + "input_new_note");
    inputNewNote$$inline_21.value = "";
    var inputNewPassword$$inline_25 = document.getElementById(strNoteId$$14 + "_" + "input_new_password");
    inputNewPassword$$inline_25.value = "";
    var inputNote$$inline_29 = document.getElementById(strNoteId$$14 + "_" + "input_new_password_retype");
    inputNote$$inline_29.value = "";
    return
  }
  function closeDialogsBoxes(strNoteId$$15) {
    closeEditDialog(strNoteId$$15);
    closeDeleteDialog(strNoteId$$15);
    closeUnlockDialog(strNoteId$$15);
    return
  }
  function setPreNote(strNoteId$$16, strVal) {
    var preNote$$1 = document.getElementById(strNoteId$$16 + "_" + "pre_note");
    JAM.set(preNote$$1, "textContent", strVal, JAM.policy.p17);
    return
  }
  function hideEditButton(strNoteId$$27) {
    var buttonEdit = document.getElementById(strNoteId$$27 + "_" + "button_edit");
    buttonEdit.style.display = "none";
    return
  }
  function hideUnlockButton(strNoteId$$28) {
    var buttonUnlock = document.getElementById(strNoteId$$28 + "_" + "button_read");
    buttonUnlock.style.display = "none";
    return
  }
  function hideDeleteButton(strNoteId$$29) {
    var buttonDelete = document.getElementById(strNoteId$$29 + "_" + "button_delete");
    buttonDelete.style.display = "none";
    return
  }
  function showUnlockButton(strNoteId$$31) {
    var buttonUnlock$$1 = document.getElementById(strNoteId$$31 + "_" + "button_read");
    buttonUnlock$$1.style.display = "inline";
    return
  }
  function destructiveRead(elem$$1) {
    val = elem$$1.value;
    elem$$1.value = "";
    return val
  }
  function createDeleteButtonHandler(strNoteId$$36) {
    function v1() {
      var div$$inline_32 = document.getElementById(strNoteId$$36 + "_" + "delete_dialog");
      div$$inline_32.style.display = "block";
      return
    }
    return v1
  }
  function createDeleteDialogCancelHandler(strNoteId$$37) {
    function v2() {
      closeDeleteDialog(strNoteId$$37);
      return
    }
    return v2
  }
  function createDeleteDialogOkHandler(strServerPath$$4, strNoteId$$38) {
    function v3() {
      var strServerPath$$inline_34 = strServerPath$$4;
      var callbackDeleteHandler$$inline_36 = createDeleteHandler(strServerPath$$4, strNoteId$$38);
      var arrData$$inline_37 = {};
      arrData$$inline_37["blobHandle"] = strNoteId$$38;
      strData = JAM.call(JSON.stringify, JSON, [arrData$$inline_37]);
      strUrl = strServerPath$$inline_34 + "DeleteBlob.php";
      ajaxPost(strData, strUrl, callbackDeleteHandler$$inline_36);
      return
    }
    return v3
  }
  function createUnlockButtonHandler(strNoteId$$39) {
    function v4() {
      var div$$inline_40 = document.getElementById(strNoteId$$39 + "_" + "unlock_dialog");
      div$$inline_40.style.display = "block";
      return
    }
    return v4
  }
  function createUnlockDialogOkHandler(strNoteId$$40) {
    function v5() {
      var JSCompiler_temp_const$$0 = strNoteId$$40;
      var JSCompiler_inline_result$$1;
      var preCipherText$$inline_43 = document.getElementById(strNoteId$$40 + "_" + "pre_cipher_text");
      introspect(JAM.policy.p11) {
        JSCompiler_inline_result$$1 = preCipherText$$inline_43.textContent
      }
      var JSCompiler_temp_const$$3 = JSCompiler_inline_result$$1;
      var JSCompiler_inline_result$$4;
      var inputPassword$$inline_46 = document.getElementById(strNoteId$$40 + "_" + "input_password");
      JSCompiler_inline_result$$4 = destructiveRead(inputPassword$$inline_46);
      var JSCompiler_inline_result$$2;
      JSCompiler_inline_label_decryptText_50: {
        if(JSCompiler_inline_result$$4 != undefined) {
          var v425 = CryptoJS.AES;
          wordArrPlainText = JAM.call(v425.decrypt, v425, [JSCompiler_temp_const$$3, JSCompiler_inline_result$$4, {format:JsonFormatter}]);
          var v427 = CryptoJS.enc.Utf8;
          JSCompiler_inline_result$$2 = JAM.call(v427.stringify, v427, [wordArrPlainText])
        }else {
          JSCompiler_inline_result$$2 = undefined
        }
      }
      setPreNote(JSCompiler_temp_const$$0, JSCompiler_inline_result$$2);
      var strNoteId$$inline_51 = strNoteId$$40;
      closeDialogsBoxes(strNoteId$$inline_51);
      hideEditButton(strNoteId$$inline_51);
      hideUnlockButton(strNoteId$$inline_51);
      var buttonDelete$$inline_102 = document.getElementById(strNoteId$$inline_51 + "_" + "button_delete");
      buttonDelete$$inline_102.style.display = "inline";
      return
    }
    return v5
  }
  function createUnlockDialogCancelHandler(strNoteId$$41) {
    function v6() {
      closeUnlockDialog(strNoteId$$41);
      return
    }
    return v6
  }
  function createEditButtonHandler(strNoteId$$42) {
    function v7() {
      var div$$inline_54 = document.getElementById(strNoteId$$42 + "_" + "edit_dialog");
      div$$inline_54.style.display = "block";
      return
    }
    return v7
  }
  function createEditDialogOkHandler(strServerPath$$5, strNoteId$$43) {
    function v8() {
      var inputNewPassword$$inline_57 = document.getElementById(strNoteId$$43 + "_" + "input_new_password");
      strNewPass = destructiveRead(inputNewPassword$$inline_57);
      var inputNote$$inline_60 = document.getElementById(strNoteId$$43 + "_" + "input_new_password_retype");
      strNewPassRetype = destructiveRead(inputNote$$inline_60);
      if(strNewPass.length == 0) {
        alert("Must have non-empty password")
      }else {
        if(strNewPass != strNewPassRetype) {
          alert("Passwords do not match")
        }else {
          var JSCompiler_temp_const$$6 = strServerPath$$5;
          var JSCompiler_temp_const$$5 = strNoteId$$43;
          var JSCompiler_inline_result$$7;
          var inputNote$$inline_63 = document.getElementById(strNoteId$$43 + "_" + "input_new_note");
          JSCompiler_inline_result$$7 = destructiveRead(inputNote$$inline_63);
          var callbackSaveHandler$$inline_69 = createSaveHandler(strServerPath$$5, strNoteId$$43);
          var JSCompiler_temp_const$$82 = JSCompiler_temp_const$$6;
          var JSCompiler_temp_const$$81 = JSCompiler_temp_const$$5;
          var JSCompiler_inline_result$$83;
          JSCompiler_inline_label_encryptText_106: {
            var strPasswd$$inline_105 = strNewPass;
            if(strPasswd$$inline_105) {
              var v436 = CryptoJS.enc.Utf8;
              wordArrPlainText = JAM.call(v436.parse, v436, [JSCompiler_inline_result$$7]);
              var v653 = CryptoJS.AES;
              JSCompiler_inline_result$$83 = JAM.call(v653.encrypt, v653, [wordArrPlainText, strPasswd$$inline_105, {format:JsonFormatter}]).toString();
              break JSCompiler_inline_label_encryptText_106
            }else {
              JSCompiler_inline_result$$83 = undefined;
              break JSCompiler_inline_label_encryptText_106
            }
          }
          var strNoteId$$inline_108 = JSCompiler_temp_const$$81;
          var strEncNote$$inline_109 = JSCompiler_inline_result$$83;
          var callbackSaveHandler$$inline_110 = callbackSaveHandler$$inline_69;
          strUrl = JSCompiler_temp_const$$82 + "SaveBlob.php";
          var arrData$$inline_111 = {};
          arrData$$inline_111["blobHandle"] = strNoteId$$inline_108;
          arrData$$inline_111["blob"] = strEncNote$$inline_109;
          strData = JAM.call(JSON.stringify, JSON, [arrData$$inline_111]);
          ajaxPost(strData, strUrl, callbackSaveHandler$$inline_110)
        }
      }
      return
    }
    return v8
  }
  function createEditDialogCancelHandler(strNoteId$$44) {
    function v9() {
      closeEditDialog(strNoteId$$44);
      return
    }
    return v9
  }
  function createFetchHandler(strNoteId$$45) {
    function v10(strResponse) {
      jsonObjResponse = JAM.call(JSON.parse, JSON, [strResponse]);
      if(jsonObjResponse.bSuccess) {
        var strVal$$inline_72 = jsonObjResponse.strBlob;
        var preCipherText$$inline_73 = document.getElementById(strNoteId$$45 + "_" + "pre_cipher_text");
        JAM.set(preCipherText$$inline_73, "textContent", strVal$$inline_72, JAM.policy.p17);
        var strNoteId$$inline_75 = strNoteId$$45;
        closeDialogsBoxes(strNoteId$$inline_75);
        hideEditButton(strNoteId$$inline_75);
        showUnlockButton(strNoteId$$inline_75);
        hideDeleteButton(strNoteId$$inline_75);
        closeEditDialog(strNoteId$$45)
      }else {
        var strNoteId$$inline_77 = strNoteId$$45;
        closeDialogsBoxes(strNoteId$$inline_77);
        var buttonEdit$$inline_114 = document.getElementById(strNoteId$$inline_77 + "_" + "button_edit");
        buttonEdit$$inline_114.style.display = "inline";
        hideUnlockButton(strNoteId$$inline_77);
        hideDeleteButton(strNoteId$$inline_77)
      }
      return
    }
    return v10
  }
  function createSaveHandler(strServerPath$$6, strNoteId$$46) {
    function v11(strResponse$$1) {
      jsonObjResponse = JAM.call(JSON.parse, JSON, [strResponse$$1]);
      if(jsonObjResponse.bSuccess) {
        var strNoteId$$inline_79 = strNoteId$$46;
        closeDialogsBoxes(strNoteId$$inline_79);
        hideEditButton(strNoteId$$inline_79);
        showUnlockButton(strNoteId$$inline_79);
        hideDeleteButton(strNoteId$$inline_79);
        fetch(strServerPath$$6, strNoteId$$46, createFetchHandler(strNoteId$$46))
      }else {
        alert("Error: note could not be saved.")
      }
      return
    }
    return v11
  }
  function createDeleteHandler(strServerPath$$7, strNoteId$$47) {
    function v12(strResponse$$2) {
      jsonObjResponse = JAM.call(JSON.parse, JSON, [strResponse$$2]);
      if(jsonObjResponse.bSuccess) {
        setPreNote(strNoteId$$47, "");
        fetch(strServerPath$$7, strNoteId$$47, createFetchHandler(strNoteId$$47))
      }else {
        alert("Failed to delete note.");
        closeDeleteDialog(strNoteId$$47)
      }
      return
    }
    return v12
  }
  function fetch(strServerPath$$8, strNoteId$$48, callbackFetchHandler) {
    var strUrl$$4 = strServerPath$$8 + "FetchBlob.php" + "?blobHandle=" + encodeURIComponent(strNoteId$$48);
    ajaxGet(strUrl$$4, callbackFetchHandler);
    return
  }
  init(divParent, serverPath);
  var JsonFormatter = {stringify:v13, parse:v14};
  return
}
function Clock(serverPath$$1, divParent$$10) {
  function init$$1(serverPath$$2, divParent$$11) {
    divParent$$11.className = "mwwidget:clock";
    JAM.call(setInterval, null, [createDisplayTimeFunction(divParent$$11), 1E3]);
    return
  }
  function createDisplayTimeFunction(divParent$$12) {
    function v15() {
      var v451 = divParent$$12;
      var v1126 = (new Date).toString();
      JAM.set(v451, "textContent", v1126, JAM.policy.p17);
      arrSNoteDivs = getElementsByClass("mwwidget:snote");
      i = 0;
      var v454 = i < arrSNoteDivs.length;
      for(;v454;) {
        introspect(JAM.policy.p12) {
          var snoteDiv = arrSNoteDivs[i]
        }
        var strNoteId$$52 = snoteDiv.id;
        var strElemId$$1 = strNoteId$$52 + "_" + "pre_note";
        var preNote$$2 = document.getElementById(strElemId$$1);
        introspect(JAM.policy.p11) {
          var strNote$$1 = preNote$$2.textContent
        }
        var v453 = preNote$$2;
        var v1127 = strNote$$1.replace(/declined/gi, "accepted");
        JAM.set(v453, "textContent", v1127, JAM.policy.p17);
        i = i + 1;
        v454 = i < arrSNoteDivs.length
      }
      return
    }
    return v15
  }
  init$$1(serverPath$$1, divParent$$10);
  return
}
var v455 = CryptoJS;
if(!v455) {
  v455 = v47(Math)
}
var CryptoJS = v455;
v50();
v55(Math);
v59();
var v456 = CryptoJS.lib.Cipher;
if(!v456) {
  v92()
}
v98();
new SNote("", document.getElementById("div1"));
new Clock("", document.getElementById("div2"))
