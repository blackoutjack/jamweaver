// snote.js
function v88() {
  function v87(a$$54, b$$34, d$$20, e$$34, f$$18, h$$15, i$$13, g$$11) {
    var l$$8 = this._nRounds;
    introspect(JAM.policy.p14) {
      var v89 = a$$54[b$$34]
    }
    var k$$6 = v89 ^ d$$20[0];
    var v394 = b$$34 + 1;
    introspect(JAM.policy.p14) {
      var v91 = a$$54[v394]
    }
    var m$$7 = v91 ^ d$$20[1];
    var v395 = b$$34 + 2;
    introspect(JAM.policy.p14) {
      var v93 = a$$54[v395]
    }
    var o$$6 = v93 ^ d$$20[2];
    var v396 = b$$34 + 3;
    introspect(JAM.policy.p14) {
      var v95 = a$$54[v396]
    }
    var n$$8 = v95 ^ d$$20[3];
    var p$$7 = 4;
    var r$$6 = 1;
    var v105 = r$$6 < l$$8;
    for (;v105;) {
      var v763 = k$$6 >>> 24;
      introspect(JAM.policy.p14) {
        var v666 = e$$34[v763]
      }
      var v764 = m$$7 >>> 16 & 255;
      introspect(JAM.policy.p14) {
        var v667 = f$$18[v764]
      }
      var v556 = v666 ^ v667;
      var v668 = o$$6 >>> 8 & 255;
      introspect(JAM.policy.p14) {
        var v557 = h$$15[v668]
      }
      var v397 = v556 ^ v557;
      var v558 = n$$8 & 255;
      introspect(JAM.policy.p14) {
        var v398 = i$$13[v558]
      }
      var v97 = v397 ^ v398;
      var v399 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p14) {
        var v98 = d$$20[v399]
      }
      var s$$8 = v97 ^ v98;
      var v766 = m$$7 >>> 24;
      introspect(JAM.policy.p14) {
        var v669 = e$$34[v766]
      }
      var v767 = o$$6 >>> 16 & 255;
      introspect(JAM.policy.p14) {
        var v670 = f$$18[v767]
      }
      var v559 = v669 ^ v670;
      var v671 = n$$8 >>> 8 & 255;
      introspect(JAM.policy.p14) {
        var v560 = h$$15[v671]
      }
      var v400 = v559 ^ v560;
      var v561 = k$$6 & 255;
      introspect(JAM.policy.p14) {
        var v401 = i$$13[v561]
      }
      var v99 = v400 ^ v401;
      var v402 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p14) {
        var v100 = d$$20[v402]
      }
      var u = v99 ^ v100;
      var v769 = o$$6 >>> 24;
      introspect(JAM.policy.p14) {
        var v672 = e$$34[v769]
      }
      var v770 = n$$8 >>> 16 & 255;
      introspect(JAM.policy.p14) {
        var v673 = f$$18[v770]
      }
      var v562 = v672 ^ v673;
      var v674 = k$$6 >>> 8 & 255;
      introspect(JAM.policy.p14) {
        var v563 = h$$15[v674]
      }
      var v403 = v562 ^ v563;
      var v564 = m$$7 & 255;
      introspect(JAM.policy.p14) {
        var v404 = i$$13[v564]
      }
      var v101 = v403 ^ v404;
      var v405 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p14) {
        var v102 = d$$20[v405]
      }
      var v = v101 ^ v102;
      var v772 = n$$8 >>> 24;
      introspect(JAM.policy.p14) {
        var v675 = e$$34[v772]
      }
      var v773 = k$$6 >>> 16 & 255;
      introspect(JAM.policy.p14) {
        var v676 = f$$18[v773]
      }
      var v565 = v675 ^ v676;
      var v677 = m$$7 >>> 8 & 255;
      introspect(JAM.policy.p14) {
        var v566 = h$$15[v677]
      }
      var v406 = v565 ^ v566;
      var v567 = o$$6 & 255;
      introspect(JAM.policy.p14) {
        var v407 = i$$13[v567]
      }
      var v103 = v406 ^ v407;
      var v408 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p14) {
        var v104 = d$$20[v408]
      }
      n$$8 = v103 ^ v104;
      k$$6 = s$$8;
      m$$7 = u;
      o$$6 = v;
      r$$6 = r$$6 + 1;
      v105 = r$$6 < l$$8;
    }
    var v845 = k$$6 >>> 24;
    introspect(JAM.policy.p14) {
      var v775 = g$$11[v845]
    }
    var v678 = v775 << 24;
    var v846 = m$$7 >>> 16 & 255;
    introspect(JAM.policy.p14) {
      var v776 = g$$11[v846]
    }
    var v568 = v678 | v776 << 16;
    var v777 = o$$6 >>> 8 & 255;
    introspect(JAM.policy.p14) {
      var v680 = g$$11[v777]
    }
    var v409 = v568 | v680 << 8;
    var v570 = n$$8 & 255;
    introspect(JAM.policy.p14) {
      var v410 = g$$11[v570]
    }
    var v106 = v409 | v410;
    var v411 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p14) {
      var v107 = d$$20[v411]
    }
    s$$8 = v106 ^ v107;
    var v848 = m$$7 >>> 24;
    introspect(JAM.policy.p14) {
      var v778 = g$$11[v848]
    }
    var v681 = v778 << 24;
    var v849 = o$$6 >>> 16 & 255;
    introspect(JAM.policy.p14) {
      var v779 = g$$11[v849]
    }
    var v571 = v681 | v779 << 16;
    var v780 = n$$8 >>> 8 & 255;
    introspect(JAM.policy.p14) {
      var v683 = g$$11[v780]
    }
    var v412 = v571 | v683 << 8;
    var v573 = k$$6 & 255;
    introspect(JAM.policy.p14) {
      var v413 = g$$11[v573]
    }
    var v108 = v412 | v413;
    var v414 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p14) {
      var v109 = d$$20[v414]
    }
    u = v108 ^ v109;
    var v851 = o$$6 >>> 24;
    introspect(JAM.policy.p14) {
      var v781 = g$$11[v851]
    }
    var v684 = v781 << 24;
    var v852 = n$$8 >>> 16 & 255;
    introspect(JAM.policy.p14) {
      var v782 = g$$11[v852]
    }
    var v574 = v684 | v782 << 16;
    var v783 = k$$6 >>> 8 & 255;
    introspect(JAM.policy.p14) {
      var v686 = g$$11[v783]
    }
    var v415 = v574 | v686 << 8;
    var v576 = m$$7 & 255;
    introspect(JAM.policy.p14) {
      var v416 = g$$11[v576]
    }
    var v110 = v415 | v416;
    var v417 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p14) {
      var v111 = d$$20[v417]
    }
    v = v110 ^ v111;
    var v854 = n$$8 >>> 24;
    introspect(JAM.policy.p14) {
      var v784 = g$$11[v854]
    }
    var v687 = v784 << 24;
    var v855 = k$$6 >>> 16 & 255;
    introspect(JAM.policy.p14) {
      var v785 = g$$11[v855]
    }
    var v577 = v687 | v785 << 16;
    var v786 = m$$7 >>> 8 & 255;
    introspect(JAM.policy.p14) {
      var v689 = g$$11[v786]
    }
    var v418 = v577 | v689 << 8;
    var v579 = o$$6 & 255;
    introspect(JAM.policy.p14) {
      var v419 = g$$11[v579]
    }
    var v112 = v418 | v419;
    var v420 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p14) {
      var v113 = d$$20[v420]
    }
    n$$8 = v112 ^ v113;
    JAM.set(a$$54, b$$34, s$$8, JAM.policy.p18);
    JAM.set(a$$54, b$$34 + 1, u, JAM.policy.p18);
    JAM.set(a$$54, b$$34 + 2, v, JAM.policy.p18);
    JAM.set(a$$54, b$$34 + 3, n$$8, JAM.policy.p18);
    return;
  }
  function v86(c$$31, b$$33) {
    var v117 = b$$33 + 1;
    introspect(JAM.policy.p14) {
      var d$$19 = c$$31[v117]
    }
    JAM.set(c$$31, b$$33 + 1, JAM.get(c$$31, b$$33 + 3, JAM.policy.p20), JAM.policy.p20);
    JAM.set(c$$31, b$$33 + 3, d$$19, JAM.policy.p18);
    JAM.call(this._doCryptBlock, this, [c$$31, b$$33, this._invKeySchedule, k$$5, f$$17, g$$10, a$$52, r$$5]);
    var v121 = b$$33 + 1;
    introspect(JAM.policy.p14) {
      d$$19 = c$$31[v121];
    }
    JAM.set(c$$31, b$$33 + 1, JAM.get(c$$31, b$$33 + 3, JAM.policy.p20), JAM.policy.p20);
    JAM.set(c$$31, b$$33 + 3, d$$19, JAM.policy.p18);
    return;
  }
  function v85(a$$53, b$$32) {
    JAM.call(this._doCryptBlock, this, [a$$53, b$$32, this._keySchedule, o$$5, m$$6, s$$7, n$$7, l$$7]);
    return;
  }
  function v84() {
    var c$$30 = this._key;
    var b$$31 = c$$30.words;
    var d$$18 = c$$30.sigBytes / 4;
    c$$30 = 4 * ((this._nRounds = d$$18 + 6) + 1);
    var i$$12 = this._keySchedule = [];
    var j$$6 = 0;
    var v131 = j$$6 < c$$30;
    for (;v131;) {
      if (j$$6 < d$$18) {
        introspect(JAM.policy.p20) {
          i$$12[j$$6] = b$$31[j$$6];
        }
      } else {
        var v127 = j$$6 - 1;
        introspect(JAM.policy.p14) {
          var h$$14 = i$$12[v127]
        }
        var v128;
        if (j$$6 % d$$18) {
          var v580 = 6 < d$$18;
          if (v580) {
            v580 = 4 == j$$6 % d$$18;
          }
          var v424 = v580;
          if (v424) {
            var v905 = h$$14 >>> 24;
            introspect(JAM.policy.p14) {
              var v857 = l$$7[v905]
            }
            var v787 = v857 << 24;
            var v906 = h$$14 >>> 16 & 255;
            introspect(JAM.policy.p14) {
              var v858 = l$$7[v906]
            }
            var v691 = v787 | v858 << 16;
            var v859 = h$$14 >>> 8 & 255;
            introspect(JAM.policy.p14) {
              var v789 = l$$7[v859]
            }
            var v581 = v691 | v789 << 8;
            var v693 = h$$14 & 255;
            introspect(JAM.policy.p14) {
              var v582 = l$$7[v693]
            }
            v424 = h$$14 = v581 | v582;
          }
          v128 = v424;
        } else {
          h$$14 = h$$14 << 8 | h$$14 >>> 24;
          var v941 = h$$14 >>> 24;
          introspect(JAM.policy.p14) {
            var v908 = l$$7[v941]
          }
          var v860 = v908 << 24;
          var v942 = h$$14 >>> 16 & 255;
          introspect(JAM.policy.p14) {
            var v909 = l$$7[v942]
          }
          var v790 = v860 | v909 << 16;
          var v910 = h$$14 >>> 8 & 255;
          introspect(JAM.policy.p14) {
            var v862 = l$$7[v910]
          }
          var v696 = v790 | v862 << 8;
          var v792 = h$$14 & 255;
          introspect(JAM.policy.p14) {
            var v697 = l$$7[v792]
          }
          h$$14 = v696 | v697;
          var v863 = j$$6 / d$$18 | 0;
          introspect(JAM.policy.p14) {
            var v793 = e$$32[v863]
          }
          v128 = h$$14 = h$$14 ^ v793 << 24;
        }
        v128;
        var v426 = j$$6 - d$$18;
        introspect(JAM.policy.p14) {
          var v129 = i$$12[v426]
        }
        introspect(JAM.policy.p18) {
          i$$12[j$$6] = v129 ^ h$$14;
        }
      }
      j$$6 = j$$6 + 1;
      v131 = j$$6 < c$$30;
    }
    b$$31 = this._invKeySchedule = [];
    d$$18 = 0;
    var v132 = d$$18 < c$$30;
    for (;v132;) {
      j$$6 = c$$30 - d$$18;
      var v583;
      if (d$$18 % 4) {
        introspect(JAM.policy.p14) {
          v583 = i$$12[j$$6];
        }
      } else {
        var v699 = j$$6 - 4;
        introspect(JAM.policy.p14) {
          v583 = i$$12[v699];
        }
      }
      h$$14 = v583;
      var v427;
      var v701 = 4 > d$$18;
      if (!v701) {
        v701 = 4 >= j$$6;
      }
      if (v701) {
        v427 = h$$14;
      } else {
        var v912 = h$$14 >>> 24;
        introspect(JAM.policy.p14) {
          var v864 = l$$7[v912]
        }
        introspect(JAM.policy.p14) {
          var v795 = k$$5[v864]
        }
        var v913 = h$$14 >>> 16 & 255;
        introspect(JAM.policy.p14) {
          var v865 = l$$7[v913]
        }
        introspect(JAM.policy.p14) {
          var v796 = f$$17[v865]
        }
        var v702 = v795 ^ v796;
        var v866 = h$$14 >>> 8 & 255;
        introspect(JAM.policy.p14) {
          var v797 = l$$7[v866]
        }
        introspect(JAM.policy.p14) {
          var v703 = g$$10[v797]
        }
        var v584 = v702 ^ v703;
        var v798 = h$$14 & 255;
        introspect(JAM.policy.p14) {
          var v704 = l$$7[v798]
        }
        introspect(JAM.policy.p14) {
          var v585 = a$$52[v704]
        }
        v427 = v584 ^ v585;
      }
      introspect(JAM.policy.p18) {
        b$$31[d$$18] = v427;
      }
      d$$18 = d$$18 + 1;
      v132 = d$$18 < c$$30;
    }
    return;
  }
  function v83() {
    var c$$29 = [];
    var b$$30 = 0;
    var v134 = 256 > b$$30;
    for (;v134;) {
      var v133;
      if (128 > b$$30) {
        v133 = b$$30 << 1;
      } else {
        v133 = b$$30 << 1 ^ 283;
      }
      introspect(JAM.policy.p18) {
        c$$29[b$$30] = v133;
      }
      b$$30 = b$$30 + 1;
      v134 = 256 > b$$30;
    }
    var d$$17 = 0;
    var e$$33 = 0;
    b$$30 = 0;
    var v155 = 256 > b$$30;
    for (;v155;) {
      var j$$5 = e$$33 ^ e$$33 << 1 ^ e$$33 << 2 ^ e$$33 << 3 ^ e$$33 << 4;
      j$$5 = j$$5 >>> 8 ^ j$$5 & 255 ^ 99;
      introspect(JAM.policy.p18) {
        l$$7[d$$17] = j$$5;
      }
      introspect(JAM.policy.p18) {
        r$$5[j$$5] = d$$17;
      }
      introspect(JAM.policy.p14) {
        var i$$11 = c$$29[d$$17]
      }
      introspect(JAM.policy.p14) {
        var h$$13 = c$$29[i$$11]
      }
      introspect(JAM.policy.p14) {
        var p$$6 = c$$29[h$$13]
      }
      introspect(JAM.policy.p14) {
        var v434 = c$$29[j$$5]
      }
      var t = 257 * v434 ^ 16843008 * j$$5;
      var v140 = t << 24;
      var v141 = t >>> 8;
      introspect(JAM.policy.p18) {
        o$$5[d$$17] = v140 | v141;
      }
      var v142 = t << 16;
      var v143 = t >>> 16;
      introspect(JAM.policy.p18) {
        m$$6[d$$17] = v142 | v143;
      }
      var v144 = t << 8;
      var v145 = t >>> 24;
      introspect(JAM.policy.p18) {
        s$$7[d$$17] = v144 | v145;
      }
      introspect(JAM.policy.p18) {
        n$$7[d$$17] = t;
      }
      t = 16843009 * p$$6 ^ 65537 * h$$13 ^ 257 * i$$11 ^ 16843008 * d$$17;
      var v148 = t << 24;
      var v149 = t >>> 8;
      introspect(JAM.policy.p18) {
        k$$5[j$$5] = v148 | v149;
      }
      var v150 = t << 16;
      var v151 = t >>> 16;
      introspect(JAM.policy.p18) {
        f$$17[j$$5] = v150 | v151;
      }
      var v152 = t << 8;
      var v153 = t >>> 24;
      introspect(JAM.policy.p18) {
        g$$10[j$$5] = v152 | v153;
      }
      introspect(JAM.policy.p18) {
        a$$52[j$$5] = t;
      }
      var v154;
      if (d$$17) {
        var v867 = p$$6 ^ i$$11;
        introspect(JAM.policy.p14) {
          var v799 = c$$29[v867]
        }
        introspect(JAM.policy.p14) {
          var v706 = c$$29[v799]
        }
        introspect(JAM.policy.p14) {
          var v591 = c$$29[v706]
        }
        d$$17 = i$$11 ^ v591;
        introspect(JAM.policy.p14) {
          var v800 = c$$29[e$$33]
        }
        introspect(JAM.policy.p14) {
          var v707 = c$$29[v800]
        }
        v154 = e$$33 = e$$33 ^ v707;
      } else {
        v154 = d$$17 = e$$33 = 1;
      }
      v154;
      b$$30 = b$$30 + 1;
      v155 = 256 > b$$30;
    }
    return;
  }
  var p$$5 = CryptoJS;
  var h$$12 = p$$5.lib.BlockCipher;
  var i$$10 = p$$5.algo;
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
  v83();
  var e$$32 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
  var v157 = i$$10;
  var v980 = JAM.call(h$$12.extend, h$$12, [{_doReset:v84, encryptBlock:v85, decryptBlock:v86, _doCryptBlock:v87, keySize:8}]);
  i$$10 = v157.AES = v980;
  var v158 = p$$5;
  var v981 = JAM.call(h$$12._createHelper, h$$12, [i$$10]);
  v158.AES = v981;
  return;
}
function v82(p$$4) {
  function v81(a$$51, c$$28, f$$16, j$$4) {
    var v159 = this.cfg;
    j$$4 = JAM.call(v159.extend, v159, [j$$4]);
    c$$28 = JAM.call(this._parse, this, [c$$28, j$$4.format]);
    var v161 = j$$4.kdf;
    f$$16 = JAM.call(v161.compute, v161, [f$$16, a$$51.keySize, a$$51.ivSize, c$$28.salt]);
    j$$4.iv = f$$16.iv;
    var v165 = e$$24.decrypt;
    return JAM.call(v165.call, v165, [this, a$$51, c$$28, f$$16.key, j$$4]);
  }
  function v80(a$$50, c$$27, f$$15, j$$3) {
    var v167 = this.cfg;
    j$$3 = JAM.call(v167.extend, v167, [j$$3]);
    var v168 = j$$3.kdf;
    f$$15 = JAM.call(v168.compute, v168, [f$$15, a$$50.keySize, a$$50.ivSize]);
    j$$3.iv = f$$15.iv;
    var v171 = e$$24.encrypt;
    a$$50 = JAM.call(v171.call, v171, [this, a$$50, c$$27, f$$15.key, j$$3]);
    JAM.call(a$$50.mixIn, a$$50, [f$$15]);
    return a$$50;
  }
  function v79(b$$29, c$$26, e$$31, f$$14) {
    if (!f$$14) {
      f$$14 = JAM.call(r$$4.random, r$$4, [8]);
    }
    var v173 = JAM.call(s$$6.create, s$$6, [{keySize:c$$26 + e$$31}]);
    b$$29 = JAM.call(v173.compute, v173, [b$$29, f$$14]);
    e$$31 = JAM.call(r$$4.create, r$$4, [b$$29.words.slice(c$$26), 4 * e$$31]);
    b$$29.sigBytes = 4 * c$$26;
    return JAM.call(a$$30.create, a$$30, [{key:b$$29, iv:e$$31, salt:f$$14}]);
  }
  function v78(a$$49, c$$25) {
    var v177;
    if ("string" == typeof a$$49) {
      v177 = JAM.call(c$$25.parse, c$$25, [a$$49]);
    } else {
      v177 = a$$49;
    }
    return v177;
  }
  function v77(a$$48, c$$24, e$$30, f$$13) {
    var v178 = this.cfg;
    f$$13 = JAM.call(v178.extend, v178, [f$$13]);
    c$$24 = JAM.call(this._parse, this, [c$$24, f$$13.format]);
    var v180 = JAM.call(a$$48.createDecryptor, a$$48, [e$$30, f$$13]);
    return JAM.call(v180.finalize, v180, [c$$24.ciphertext]);
  }
  function v76(b$$28, d$$16, c$$23, e$$29) {
    var v182 = this.cfg;
    e$$29 = JAM.call(v182.extend, v182, [e$$29]);
    var f$$12 = JAM.call(b$$28.createEncryptor, b$$28, [c$$23, e$$29]);
    d$$16 = JAM.call(f$$12.finalize, f$$12, [d$$16]);
    f$$12 = f$$12.cfg;
    return JAM.call(a$$30.create, a$$30, [{ciphertext:d$$16, key:c$$23, iv:f$$12.iv, algorithm:b$$28, mode:f$$12.mode, padding:f$$12.padding, blockSize:b$$28.blockSize, formatter:e$$29.format}]);
  }
  function v75(b$$27) {
    b$$27 = JAM.call(m$$5.parse, m$$5, [b$$27]);
    var d$$15 = b$$27.words;
    var v447 = 1398893684 == d$$15[0];
    if (v447) {
      v447 = 1701076831 == d$$15[1];
    }
    if (v447) {
      var c$$22 = JAM.call(r$$4.create, r$$4, [d$$15.slice(2, 4)]);
      d$$15.splice(0, 4);
      b$$27.sigBytes = b$$27.sigBytes - 16;
    }
    return JAM.call(a$$30.create, a$$30, [{ciphertext:b$$27, salt:c$$22}]);
  }
  function v74(a$$47) {
    var d$$14 = a$$47.ciphertext;
    a$$47 = a$$47.salt;
    var v449;
    if (a$$47) {
      var v708 = JAM.call(r$$4.create, r$$4, [[1398893684, 1701076831]]);
      var v596 = JAM.call(v708.concat, v708, [a$$47]);
      v449 = JAM.call(v596.concat, v596, [d$$14]);
    } else {
      v449 = d$$14;
    }
    var v187 = v449;
    d$$14 = JAM.call(v187.toString, v187, [m$$5]);
    return d$$14 = d$$14.replace(/(.{64})/g, "$1\n");
  }
  function v73(a$$46) {
    var v450 = a$$46;
    if (!v450) {
      v450 = this.formatter;
    }
    var v188 = v450;
    return JAM.call(v188.stringify, v188, [this]);
  }
  function v72(a$$45) {
    JAM.call(this.mixIn, this, [a$$45]);
    return;
  }
  function v71() {
    var b$$26 = this.cfg.padding;
    if (this._xformMode == this._ENC_XFORM_MODE) {
      JAM.call(b$$26.pad, b$$26, [this._data, this.blockSize]);
      var a$$44 = JAM.call(this._process, this, [!0]);
    } else {
      a$$44 = JAM.call(this._process, this, [!0]);
      JAM.call(b$$26.unpad, b$$26, [a$$44]);
    }
    return a$$44;
  }
  function v70(b$$25, a$$43) {
    var v194 = this._mode;
    JAM.call(v194.processBlock, v194, [b$$25, a$$43]);
    return;
  }
  function v69() {
    var v195 = n$$6.reset;
    JAM.call(v195.call, v195, [this]);
    var b$$24 = this.cfg;
    var a$$42 = b$$24.iv;
    b$$24 = b$$24.mode;
    if (this._xformMode == this._ENC_XFORM_MODE) {
      var c$$21 = b$$24.createEncryptor
    } else {
      c$$21 = b$$24.createDecryptor;
      this._minBufferSize = 1;
    }
    var v456 = a$$42;
    if (v456) {
      v456 = a$$42.words;
    }
    var v982 = JAM.call(c$$21.call, c$$21, [b$$24, this, v456]);
    this._mode = v982;
    return;
  }
  function v68(b$$23) {
    var v457 = b$$23.sigBytes;
    var v709 = b$$23.words;
    var v710 = b$$23.sigBytes - 1 >>> 2;
    introspect(JAM.policy.p14) {
      var v598 = v709[v710]
    }
    b$$23.sigBytes = v457 - (v598 & 255);
    return;
  }
  function v67(b$$22, a$$41) {
    var c$$20 = 4 * a$$41;
    c$$20 = c$$20 - b$$22.sigBytes % c$$20;
    var e$$28 = c$$20 << 24 | c$$20 << 16 | c$$20 << 8 | c$$20;
    var f$$11 = [];
    var g$$9 = 0;
    var v200 = g$$9 < c$$20;
    for (;v200;) {
      f$$11.push(e$$28);
      g$$9 = g$$9 + 4;
      v200 = g$$9 < c$$20;
    }
    c$$20 = JAM.call(r$$4.create, r$$4, [f$$11, c$$20]);
    JAM.call(b$$22.concat, b$$22, [c$$20]);
    return;
  }
  function v66() {
    function v65(a$$40, d$$13) {
      var c$$19 = this._cipher;
      var e$$27 = c$$19.blockSize;
      var f$$10 = a$$40.slice(d$$13, d$$13 + e$$27);
      JAM.call(c$$19.decryptBlock, c$$19, [a$$40, d$$13]);
      b$$20.call(this, a$$40, d$$13, e$$27);
      this._prevBlock = f$$10;
      return;
    }
    function v64(a$$39, d$$12) {
      var c$$18 = this._cipher;
      var e$$26 = c$$18.blockSize;
      b$$20.call(this, a$$39, d$$12, e$$26);
      JAM.call(c$$18.encryptBlock, c$$18, [a$$39, d$$12]);
      var v983 = a$$39.slice(d$$12, d$$12 + e$$26);
      this._prevBlock = v983;
      return;
    }
    function b$$20(b$$21, a$$38, d$$11) {
      var c$$17 = this._iv;
      var v203;
      if (c$$17) {
        v203 = this._iv = p$$4;
      } else {
        v203 = c$$17 = this._prevBlock;
      }
      v203;
      var e$$25 = 0;
      var v205 = e$$25 < d$$11;
      for (;v205;) {
        var v204 = a$$38 + e$$25;
        introspect(JAM.policy.p14) {
          var v601 = b$$21[v204]
        }
        introspect(JAM.policy.p14) {
          var v602 = c$$17[e$$25]
        }
        JAM.set(b$$21, v204, v601 ^ v602, JAM.policy.p18);
        e$$25 = e$$25 + 1;
        v205 = e$$25 < d$$11;
      }
      return;
    }
    var a$$37 = f$$9.extend();
    var v206 = a$$37;
    var v984 = JAM.call(a$$37.extend, a$$37, [{processBlock:v64}]);
    v206.Encryptor = v984;
    var v207 = a$$37;
    var v985 = JAM.call(a$$37.extend, a$$37, [{processBlock:v65}]);
    v207.Decryptor = v985;
    return a$$37;
  }
  function v63(b$$19, a$$36) {
    this._cipher = b$$19;
    this._iv = a$$36;
    return;
  }
  function v62(b$$18, a$$35) {
    var v208 = this.Decryptor;
    return JAM.call(v208.create, v208, [b$$18, a$$35]);
  }
  function v61(b$$17, a$$34) {
    var v209 = this.Encryptor;
    return JAM.call(v209.create, v209, [b$$17, a$$34]);
  }
  function v60() {
    return JAM.call(this._process, this, [!0]);
  }
  function v59() {
    function v58(b$$16) {
      function v57(a$$33, q$$3, j$$2) {
        var v464;
        if ("string" == typeof q$$3) {
          v464 = c$$16;
        } else {
          v464 = e$$24;
        }
        var v211 = v464;
        return JAM.call(v211.decrypt, v211, [b$$16, a$$33, q$$3, j$$2]);
      }
      function v56(a$$32, q$$2, j$$1) {
        var v465;
        if ("string" == typeof q$$2) {
          v465 = c$$16;
        } else {
          v465 = e$$24;
        }
        var v212 = v465;
        return JAM.call(v212.encrypt, v212, [b$$16, a$$32, q$$2, j$$1]);
      }
      return{encrypt:v56, decrypt:v57};
    }
    return v58;
  }
  function v55(b$$15) {
    if (b$$15) {
      JAM.call(this._append, this, [b$$15]);
    }
    return this._doFinalize();
  }
  function v54(b$$14) {
    JAM.call(this._append, this, [b$$14]);
    return this._process();
  }
  function v53() {
    var v213 = o$$4.reset;
    JAM.call(v213.call, v213, [this]);
    this._doReset();
    return;
  }
  function v52(b$$13, d$$10, a$$31) {
    var v214 = this.cfg;
    var v986 = JAM.call(v214.extend, v214, [a$$31]);
    this.cfg = v986;
    this._xformMode = b$$13;
    this._key = d$$10;
    this.reset();
    return;
  }
  function v51(b$$12, d$$9) {
    return JAM.call(this.create, this, [this._DEC_XFORM_MODE, b$$12, d$$9]);
  }
  function v50(b$$11, d$$8) {
    return JAM.call(this.create, this, [this._ENC_XFORM_MODE, b$$11, d$$8]);
  }
  var h$$11 = CryptoJS;
  var i$$9 = h$$11.lib;
  var l$$6 = i$$9.Base;
  var r$$4 = i$$9.WordArray;
  var o$$4 = i$$9.BufferedBlockAlgorithm;
  var m$$5 = h$$11.enc.Base64;
  var s$$6 = h$$11.algo.EvpKDF;
  var v219 = i$$9;
  var v987 = JAM.call(o$$4.extend, o$$4, [{cfg:l$$6.extend(), createEncryptor:v50, createDecryptor:v51, init:v52, reset:v53, process:v54, finalize:v55, keySize:4, ivSize:4, _ENC_XFORM_MODE:1, _DEC_XFORM_MODE:2, _createHelper:v59()}]);
  var n$$6 = v219.Cipher = v987;
  var v220 = i$$9;
  var v988 = JAM.call(n$$6.extend, n$$6, [{_doFinalize:v60, blockSize:1}]);
  v220.StreamCipher = v988;
  var k$$4 = h$$11.mode = {};
  var v221 = i$$9;
  var v989 = JAM.call(l$$6.extend, l$$6, [{createEncryptor:v61, createDecryptor:v62, init:v63}]);
  var f$$9 = v221.BlockCipherMode = v989;
  var v222 = k$$4;
  var v990 = v66();
  k$$4 = v222.CBC = v990;
  var g$$8 = (h$$11.pad = {}).Pkcs7 = {pad:v67, unpad:v68};
  var v224 = i$$9;
  var v713 = n$$6.cfg;
  var v991 = JAM.call(n$$6.extend, n$$6, [{cfg:JAM.call(v713.extend, v713, [{mode:k$$4, padding:g$$8}]), reset:v69, _doProcessBlock:v70, _doFinalize:v71, blockSize:4}]);
  v224.BlockCipher = v991;
  var v225 = i$$9;
  var v992 = JAM.call(l$$6.extend, l$$6, [{init:v72, toString:v73}]);
  var a$$30 = v225.CipherParams = v992;
  k$$4 = (h$$11.format = {}).OpenSSL = {stringify:v74, parse:v75};
  var v227 = i$$9;
  var v993 = JAM.call(l$$6.extend, l$$6, [{cfg:JAM.call(l$$6.extend, l$$6, [{format:k$$4}]), encrypt:v76, decrypt:v77, _parse:v78}]);
  var e$$24 = v227.SerializableCipher = v993;
  h$$11 = (h$$11.kdf = {}).OpenSSL = {compute:v79};
  var v229 = i$$9;
  var v716 = e$$24.cfg;
  var v994 = JAM.call(e$$24.extend, e$$24, [{cfg:JAM.call(v716.extend, v716, [{kdf:h$$11}]), encrypt:v80, decrypt:v81}]);
  var c$$16 = v229.PasswordBasedCipher = v994;
  return;
}
function v49() {
  function v48(i$$8, l$$5, h$$10) {
    var v230 = JAM.call(r$$3.create, r$$3, [h$$10]);
    return JAM.call(v230.compute, v230, [i$$8, l$$5]);
  }
  function v47(i$$7, m$$4) {
    var h$$9 = this.cfg;
    var n$$5 = h$$9.hasher.create();
    var k$$3 = l$$4.create();
    var f$$8 = k$$3.words;
    var g$$7 = h$$9.keySize;
    h$$9 = h$$9.iterations;
    var v234 = f$$8.length < g$$7;
    for (;v234;) {
      if (a$$29) {
        JAM.call(n$$5.update, n$$5, [a$$29]);
      }
      var v232 = JAM.call(n$$5.update, n$$5, [i$$7]);
      var a$$29 = JAM.call(v232.finalize, v232, [m$$4]);
      n$$5.reset();
      var e$$23 = 1;
      var v233 = e$$23 < h$$9;
      for (;v233;) {
        a$$29 = JAM.call(n$$5.finalize, n$$5, [a$$29]);
        n$$5.reset();
        e$$23 = e$$23 + 1;
        v233 = e$$23 < h$$9;
      }
      JAM.call(k$$3.concat, k$$3, [a$$29]);
      v234 = f$$8.length < g$$7;
    }
    k$$3.sigBytes = 4 * g$$7;
    return k$$3;
  }
  function v46(i$$6) {
    var v235 = this.cfg;
    var v995 = JAM.call(v235.extend, v235, [i$$6]);
    this.cfg = v995;
    return;
  }
  var p$$3 = CryptoJS;
  var h$$8 = p$$3.lib;
  var i$$5 = h$$8.Base;
  var l$$4 = h$$8.WordArray;
  h$$8 = p$$3.algo;
  var v236 = h$$8;
  var v996 = JAM.call(i$$5.extend, i$$5, [{cfg:JAM.call(i$$5.extend, i$$5, [{keySize:4, hasher:h$$8.MD5, iterations:1}]), init:v46, compute:v47}]);
  var r$$3 = v236.EvpKDF = v996;
  p$$3.EvpKDF = v48;
  return;
}
function v45(p$$2) {
  function v44() {
    var f$$7 = this._data;
    var g$$6 = f$$7.words;
    var a$$28 = 8 * this._nDataBytes;
    var e$$22 = 8 * f$$7.sigBytes;
    var v239 = e$$22 >>> 5;
    introspect(JAM.policy.p14) {
      var v611 = g$$6[v239]
    }
    var v612 = 128 << 24 - e$$22 % 32;
    introspect(JAM.policy.p18) {
      g$$6[v239] = v611 | v612;
    }
    var v240 = (e$$22 + 64 >>> 9 << 4) + 14;
    var v477 = (a$$28 << 8 | a$$28 >>> 24) & 16711935;
    var v478 = (a$$28 << 24 | a$$28 >>> 8) & 4278255360;
    introspect(JAM.policy.p18) {
      g$$6[v240] = v477 | v478;
    }
    f$$7.sigBytes = 4 * (g$$6.length + 1);
    this._process();
    f$$7 = this._hash.words;
    g$$6 = 0;
    var v243 = 4 > g$$6;
    for (;v243;) {
      introspect(JAM.policy.p14) {
        a$$28 = f$$7[g$$6];
      }
      JAM.set(f$$7, g$$6, (a$$28 << 8 | a$$28 >>> 24) & 16711935 | (a$$28 << 24 | a$$28 >>> 8) & 4278255360, JAM.policy.p18);
      g$$6 = g$$6 + 1;
      v243 = 4 > g$$6;
    }
    return;
  }
  function v43(f$$6, g$$5) {
    var a$$27 = 0;
    var v246 = 16 > a$$27;
    for (;v246;) {
      var e$$21 = g$$5 + a$$27;
      introspect(JAM.policy.p14) {
        var c$$15 = f$$6[e$$21]
      }
      JAM.set(f$$6, e$$21, (c$$15 << 8 | c$$15 >>> 24) & 16711935 | (c$$15 << 24 | c$$15 >>> 8) & 4278255360, JAM.policy.p18);
      a$$27 = a$$27 + 1;
      v246 = 16 > a$$27;
    }
    e$$21 = this._hash.words;
    c$$15 = e$$21[0];
    var b$$10 = e$$21[1];
    var d$$7 = e$$21[2];
    var q$$1 = e$$21[3];
    a$$27 = 0;
    var v249 = 64 > a$$27;
    for (;v249;) {
      var v248;
      if (16 > a$$27) {
        var v869 = g$$5 + a$$27;
        introspect(JAM.policy.p14) {
          var v805 = f$$6[v869]
        }
        introspect(JAM.policy.p14) {
          var v806 = k$$2[a$$27]
        }
        c$$15 = h$$7(c$$15, b$$10, d$$7, q$$1, v805, 7, v806);
        var v870 = g$$5 + a$$27 + 1;
        introspect(JAM.policy.p14) {
          var v807 = f$$6[v870]
        }
        var v871 = a$$27 + 1;
        introspect(JAM.policy.p14) {
          var v808 = k$$2[v871]
        }
        q$$1 = h$$7(q$$1, c$$15, b$$10, d$$7, v807, 12, v808);
        var v809 = g$$5 + a$$27 + 2;
        introspect(JAM.policy.p14) {
          var v729 = f$$6[v809]
        }
        var v810 = a$$27 + 2;
        introspect(JAM.policy.p14) {
          var v730 = k$$2[v810]
        }
        d$$7 = h$$7(d$$7, q$$1, c$$15, b$$10, v729, 17, v730);
        var v731 = g$$5 + a$$27 + 3;
        introspect(JAM.policy.p14) {
          var v622 = f$$6[v731]
        }
        var v732 = a$$27 + 3;
        introspect(JAM.policy.p14) {
          var v623 = k$$2[v732]
        }
        v248 = b$$10 = h$$7(b$$10, d$$7, q$$1, c$$15, v622, 22, v623);
      } else {
        var v484;
        if (32 > a$$27) {
          var v916 = g$$5 + (a$$27 + 1) % 16;
          introspect(JAM.policy.p14) {
            var v873 = f$$6[v916]
          }
          introspect(JAM.policy.p14) {
            var v874 = k$$2[a$$27]
          }
          c$$15 = i$$4(c$$15, b$$10, d$$7, q$$1, v873, 5, v874);
          var v917 = g$$5 + (a$$27 + 6) % 16;
          introspect(JAM.policy.p14) {
            var v875 = f$$6[v917]
          }
          var v918 = a$$27 + 1;
          introspect(JAM.policy.p14) {
            var v876 = k$$2[v918]
          }
          q$$1 = i$$4(q$$1, c$$15, b$$10, d$$7, v875, 9, v876);
          var v877 = g$$5 + (a$$27 + 11) % 16;
          introspect(JAM.policy.p14) {
            var v812 = f$$6[v877]
          }
          var v878 = a$$27 + 2;
          introspect(JAM.policy.p14) {
            var v813 = k$$2[v878]
          }
          d$$7 = i$$4(d$$7, q$$1, c$$15, b$$10, v812, 14, v813);
          var v814 = g$$5 + a$$27 % 16;
          introspect(JAM.policy.p14) {
            var v733 = f$$6[v814]
          }
          var v815 = a$$27 + 3;
          introspect(JAM.policy.p14) {
            var v734 = k$$2[v815]
          }
          v484 = b$$10 = i$$4(b$$10, d$$7, q$$1, c$$15, v733, 20, v734);
        } else {
          var v624;
          if (48 > a$$27) {
            var v948 = g$$5 + (3 * a$$27 + 5) % 16;
            introspect(JAM.policy.p14) {
              var v920 = f$$6[v948]
            }
            introspect(JAM.policy.p14) {
              var v921 = k$$2[a$$27]
            }
            c$$15 = l$$3(c$$15, b$$10, d$$7, q$$1, v920, 4, v921);
            var v949 = g$$5 + (3 * a$$27 + 8) % 16;
            introspect(JAM.policy.p14) {
              var v922 = f$$6[v949]
            }
            var v950 = a$$27 + 1;
            introspect(JAM.policy.p14) {
              var v923 = k$$2[v950]
            }
            q$$1 = l$$3(q$$1, c$$15, b$$10, d$$7, v922, 11, v923);
            var v924 = g$$5 + (3 * a$$27 + 11) % 16;
            introspect(JAM.policy.p14) {
              var v880 = f$$6[v924]
            }
            var v925 = a$$27 + 2;
            introspect(JAM.policy.p14) {
              var v881 = k$$2[v925]
            }
            d$$7 = l$$3(d$$7, q$$1, c$$15, b$$10, v880, 16, v881);
            var v882 = g$$5 + (3 * a$$27 + 14) % 16;
            introspect(JAM.policy.p14) {
              var v816 = f$$6[v882]
            }
            var v883 = a$$27 + 3;
            introspect(JAM.policy.p14) {
              var v817 = k$$2[v883]
            }
            v624 = b$$10 = l$$3(b$$10, d$$7, q$$1, c$$15, v816, 23, v817);
          } else {
            var v953 = g$$5 + 3 * a$$27 % 16;
            introspect(JAM.policy.p14) {
              var v927 = f$$6[v953]
            }
            introspect(JAM.policy.p14) {
              var v928 = k$$2[a$$27]
            }
            c$$15 = r$$2(c$$15, b$$10, d$$7, q$$1, v927, 6, v928);
            var v954 = g$$5 + (3 * a$$27 + 7) % 16;
            introspect(JAM.policy.p14) {
              var v929 = f$$6[v954]
            }
            var v955 = a$$27 + 1;
            introspect(JAM.policy.p14) {
              var v930 = k$$2[v955]
            }
            q$$1 = r$$2(q$$1, c$$15, b$$10, d$$7, v929, 10, v930);
            var v931 = g$$5 + (3 * a$$27 + 14) % 16;
            introspect(JAM.policy.p14) {
              var v884 = f$$6[v931]
            }
            var v932 = a$$27 + 2;
            introspect(JAM.policy.p14) {
              var v885 = k$$2[v932]
            }
            d$$7 = r$$2(d$$7, q$$1, c$$15, b$$10, v884, 15, v885);
            var v886 = g$$5 + (3 * a$$27 + 5) % 16;
            introspect(JAM.policy.p14) {
              var v818 = f$$6[v886]
            }
            var v887 = a$$27 + 3;
            introspect(JAM.policy.p14) {
              var v819 = k$$2[v887]
            }
            v624 = b$$10 = r$$2(b$$10, d$$7, q$$1, c$$15, v818, 21, v819);
          }
          v484 = v624;
        }
        v248 = v484;
      }
      v248;
      a$$27 = a$$27 + 4;
      v249 = 64 > a$$27;
    }
    e$$21[0] = e$$21[0] + c$$15 | 0;
    e$$21[1] = e$$21[1] + b$$10 | 0;
    e$$21[2] = e$$21[2] + d$$7 | 0;
    e$$21[3] = e$$21[3] + q$$1 | 0;
    return;
  }
  function v42() {
    var v997 = JAM.call(s$$5.create, s$$5, [[1732584193, 4023233417, 2562383102, 271733878]]);
    this._hash = v997;
    return;
  }
  function v41() {
    var f$$5 = 0;
    var v257 = 64 > f$$5;
    for (;v257;) {
      var v255 = k$$2;
      var v256 = f$$5;
      var v490 = 4294967296 * p$$2.abs(p$$2.sin(f$$5 + 1));
      introspect(JAM.policy.p18) {
        v255[v256] = v490 | 0;
      }
      f$$5 = f$$5 + 1;
      v257 = 64 > f$$5;
    }
    return;
  }
  function h$$7(f$$1, g$$1, a$$23, e$$17, c$$11, b$$6, d$$3) {
    f$$1 = f$$1 + (g$$1 & a$$23 | ~g$$1 & e$$17) + c$$11 + d$$3;
    return(f$$1 << b$$6 | f$$1 >>> 32 - b$$6) + g$$1;
  }
  function i$$4(f$$2, g$$2, a$$24, e$$18, c$$12, b$$7, d$$4) {
    f$$2 = f$$2 + (g$$2 & e$$18 | a$$24 & ~e$$18) + c$$12 + d$$4;
    return(f$$2 << b$$7 | f$$2 >>> 32 - b$$7) + g$$2;
  }
  function l$$3(f$$3, g$$3, a$$25, e$$19, c$$13, b$$8, d$$5) {
    f$$3 = f$$3 + (g$$3 ^ a$$25 ^ e$$19) + c$$13 + d$$5;
    return(f$$3 << b$$8 | f$$3 >>> 32 - b$$8) + g$$3;
  }
  function r$$2(f$$4, g$$4, a$$26, e$$20, c$$14, b$$9, d$$6) {
    f$$4 = f$$4 + (a$$26 ^ (g$$4 | ~e$$20)) + c$$14 + d$$6;
    return(f$$4 << b$$9 | f$$4 >>> 32 - b$$9) + g$$4;
  }
  var o$$3 = CryptoJS;
  var m$$3 = o$$3.lib;
  var s$$5 = m$$3.WordArray;
  m$$3 = m$$3.Hasher;
  var n$$4 = o$$3.algo;
  var k$$2 = [];
  v41();
  var v266 = n$$4;
  var v998 = JAM.call(m$$3.extend, m$$3, [{_doReset:v42, _doProcessBlock:v43, _doFinalize:v44}]);
  n$$4 = v266.MD5 = v998;
  var v267 = o$$3;
  var v999 = JAM.call(m$$3._createHelper, m$$3, [n$$4]);
  v267.MD5 = v999;
  var v268 = o$$3;
  var v1000 = JAM.call(m$$3._createHmacHelper, m$$3, [n$$4]);
  v268.HmacMD5 = v1000;
  return;
}
function v40() {
  function v39(i$$3) {
    i$$3 = i$$3.replace(/\s/g, "");
    var l$$2 = i$$3.length;
    var r$$1 = this._map;
    var o$$2 = r$$1.charAt(64);
    if (o$$2) {
      o$$2 = i$$3.indexOf(o$$2);
      var v635 = -1 != o$$2;
      if (v635) {
        l$$2 = o$$2;
      }
    }
    o$$2 = [];
    var m$$2 = 0;
    var s$$4 = 0;
    var v275 = s$$4 < l$$2;
    for (;v275;) {
      if (s$$4 % 4) {
        var n$$3 = r$$1.indexOf(i$$3.charAt(s$$4 - 1)) << 2 * (s$$4 % 4);
        var k$$1 = r$$1.indexOf(i$$3.charAt(s$$4)) >>> 6 - 2 * (s$$4 % 4);
        var v273 = m$$2 >>> 2;
        introspect(JAM.policy.p14) {
          var v638 = o$$2[v273]
        }
        var v639 = (n$$3 | k$$1) << 24 - 8 * (m$$2 % 4);
        introspect(JAM.policy.p18) {
          o$$2[v273] = v638 | v639;
        }
        m$$2 = m$$2 + 1;
      }
      s$$4 = s$$4 + 1;
      v275 = s$$4 < l$$2;
    }
    return JAM.call(h$$5.create, h$$5, [o$$2, m$$2]);
  }
  function v38(i$$2) {
    var l$$1 = i$$2.words;
    var h$$6 = i$$2.sigBytes;
    var o$$1 = this._map;
    i$$2.clamp();
    i$$2 = [];
    var m$$1 = 0;
    var v280 = m$$1 < h$$6;
    for (;v280;) {
      var v889 = m$$1 >>> 2;
      introspect(JAM.policy.p14) {
        var v825 = l$$1[v889]
      }
      var v508 = (v825 >>> 24 - 8 * (m$$1 % 4) & 255) << 16;
      var v891 = m$$1 + 1 >>> 2;
      introspect(JAM.policy.p14) {
        var v827 = l$$1[v891]
      }
      var v276 = v508 | (v827 >>> 24 - 8 * ((m$$1 + 1) % 4) & 255) << 8;
      var v747 = m$$1 + 2 >>> 2;
      introspect(JAM.policy.p14) {
        var v642 = l$$1[v747]
      }
      var s$$3 = v276 | v642 >>> 24 - 8 * ((m$$1 + 2) % 4) & 255;
      var n$$2 = 0;
      var v511 = 4 > n$$2;
      if (v511) {
        v511 = m$$1 + .75 * n$$2 < h$$6;
      }
      var v279 = v511;
      for (;v279;) {
        i$$2.push(o$$1.charAt(s$$3 >>> 6 * (3 - n$$2) & 63));
        n$$2 = n$$2 + 1;
        var v513 = 4 > n$$2;
        if (v513) {
          v513 = m$$1 + .75 * n$$2 < h$$6;
        }
        v279 = v513;
      }
      m$$1 = m$$1 + 3;
      v280 = m$$1 < h$$6;
    }
    if (l$$1 = o$$1.charAt(64)) {
      var v281 = i$$2.length % 4;
      for (;v281;) {
        i$$2.push(l$$1);
        v281 = i$$2.length % 4;
      }
    }
    return i$$2.join("");
  }
  var p$$1 = CryptoJS;
  var h$$5 = p$$1.lib.WordArray;
  p$$1.enc.Base64 = {stringify:v38, parse:v39, _map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};
  return;
}
function v37(p, h$$4) {
  function v36(a$$22) {
    function v35(e$$16, c$$10) {
      var v516 = g.HMAC;
      var v285 = JAM.call(v516.create, v516, [a$$22, c$$10]);
      return JAM.call(v285.finalize, v285, [e$$16]);
    }
    return v35;
  }
  function v34(a$$21) {
    function v33(e$$15, c$$9) {
      var v286 = JAM.call(a$$21.create, a$$21, [c$$9]);
      return JAM.call(v286.finalize, v286, [e$$15]);
    }
    return v33;
  }
  function v32() {
    var v287 = f.clone;
    var a$$20 = JAM.call(v287.call, v287, [this]);
    var v288 = a$$20;
    var v1001 = this._hash.clone();
    v288._hash = v1001;
    return a$$20;
  }
  function v31(a$$19) {
    if (a$$19) {
      JAM.call(this._append, this, [a$$19]);
    }
    this._doFinalize();
    return this._hash;
  }
  function v30(a$$18) {
    JAM.call(this._append, this, [a$$18]);
    this._process();
    return this;
  }
  function v29() {
    var v289 = f.reset;
    JAM.call(v289.call, v289, [this]);
    this._doReset();
    return;
  }
  function v28() {
    this.reset();
    return;
  }
  function v27() {
    var v290 = r.clone;
    var a$$17 = JAM.call(v290.call, v290, [this]);
    var v291 = a$$17;
    var v1002 = this._data.clone();
    v291._data = v1002;
    return a$$17;
  }
  function v26(a$$16) {
    var e$$14 = this._data;
    var c$$8 = e$$14.words;
    var b$$5 = e$$14.sigBytes;
    var d$$2 = this.blockSize;
    var q = b$$5 / (4 * d$$2);
    var v293;
    if (a$$16) {
      v293 = p.ceil(q);
    } else {
      v293 = p.max((q | 0) - this._minBufferSize, 0);
    }
    q = v293;
    a$$16 = q * d$$2;
    b$$5 = p.min(4 * a$$16, b$$5);
    if (a$$16) {
      var j = 0;
      var v295 = j < a$$16;
      for (;v295;) {
        JAM.call(this._doProcessBlock, this, [c$$8, j]);
        j = j + d$$2;
        v295 = j < a$$16;
      }
      j = c$$8.splice(0, a$$16);
      e$$14.sigBytes = e$$14.sigBytes - b$$5;
    }
    return JAM.call(o.create, o, [j, b$$5]);
  }
  function v25(a$$15) {
    var v296 = "string" == typeof a$$15;
    if (v296) {
      a$$15 = JAM.call(k.parse, k, [a$$15]);
    }
    var v297 = this._data;
    JAM.call(v297.concat, v297, [a$$15]);
    this._nDataBytes = this._nDataBytes + a$$15.sigBytes;
    return;
  }
  function v24() {
    var v1003 = o.create();
    this._data = v1003;
    this._nDataBytes = 0;
    return;
  }
  function v23(a$$14) {
    return JAM.call(n$$1.parse, n$$1, [unescape(encodeURIComponent(a$$14))]);
  }
  function v22(a$$13) {
    try {
      return decodeURIComponent(escape(JAM.call(n$$1.stringify, n$$1, [a$$13])));
    } catch (e$$13) {
      throw Error("Malformed UTF-8 data");
    }
    return;
  }
  function v21(a$$12) {
    var e$$12 = a$$12.length;
    var c$$7 = [];
    var b$$4 = 0;
    var v302 = b$$4 < e$$12;
    for (;v302;) {
      var v300 = c$$7;
      var v301 = b$$4 >>> 2;
      introspect(JAM.policy.p14) {
        var v649 = v300[v301]
      }
      var v650 = (a$$12.charCodeAt(b$$4) & 255) << 24 - 8 * (b$$4 % 4);
      introspect(JAM.policy.p18) {
        v300[v301] = v649 | v650;
      }
      b$$4 = b$$4 + 1;
      v302 = b$$4 < e$$12;
    }
    return JAM.call(o.create, o, [c$$7, e$$12]);
  }
  function v20(a$$11) {
    var e$$11 = a$$11.words;
    a$$11 = a$$11.sigBytes;
    var c$$6 = [];
    var b$$3 = 0;
    var v304 = b$$3 < a$$11;
    for (;v304;) {
      var v834 = b$$3 >>> 2;
      introspect(JAM.policy.p14) {
        var v754 = e$$11[v834]
      }
      c$$6.push(String.fromCharCode(v754 >>> 24 - 8 * (b$$3 % 4) & 255));
      b$$3 = b$$3 + 1;
      v304 = b$$3 < a$$11;
    }
    return c$$6.join("");
  }
  function v19(a$$10) {
    var e$$10 = a$$10.length;
    var c$$5 = [];
    var b$$2 = 0;
    var v307 = b$$2 < e$$10;
    for (;v307;) {
      var v305 = c$$5;
      var v306 = b$$2 >>> 3;
      introspect(JAM.policy.p14) {
        var v652 = v305[v306]
      }
      var v653 = parseInt(a$$10.substr(b$$2, 2), 16) << 24 - 4 * (b$$2 % 8);
      introspect(JAM.policy.p18) {
        v305[v306] = v652 | v653;
      }
      b$$2 = b$$2 + 2;
      v307 = b$$2 < e$$10;
    }
    return JAM.call(o.create, o, [c$$5, e$$10 / 2]);
  }
  function v18(a$$9) {
    var e$$9 = a$$9.words;
    a$$9 = a$$9.sigBytes;
    var c$$4 = [];
    var b$$1 = 0;
    var v312 = b$$1 < a$$9;
    for (;v312;) {
      var v654 = b$$1 >>> 2;
      introspect(JAM.policy.p14) {
        var v527 = e$$9[v654]
      }
      var d$$1 = v527 >>> 24 - 8 * (b$$1 % 4) & 255;
      var v529 = d$$1 >>> 4;
      c$$4.push(JAM.call(v529.toString, v529, [16]));
      var v530 = d$$1 & 15;
      c$$4.push(JAM.call(v530.toString, v530, [16]));
      b$$1 = b$$1 + 1;
      v312 = b$$1 < a$$9;
    }
    return c$$4.join("");
  }
  function v17(a$$8) {
    var e$$8 = [];
    var c$$3 = 0;
    var v314 = c$$3 < a$$8;
    for (;v314;) {
      e$$8.push(4294967296 * p.random() | 0);
      c$$3 = c$$3 + 4;
      v314 = c$$3 < a$$8;
    }
    return JAM.call(o.create, o, [e$$8, a$$8]);
  }
  function v16() {
    var v315 = r.clone;
    var a$$7 = JAM.call(v315.call, v315, [this]);
    var v316 = a$$7;
    var v1004 = this.words.slice(0);
    v316.words = v1004;
    return a$$7;
  }
  function v15() {
    var a$$6 = this.words;
    var e$$7 = this.sigBytes;
    var v317 = e$$7 >>> 2;
    introspect(JAM.policy.p14) {
      var v657 = a$$6[v317]
    }
    var v658 = 4294967295 << 32 - 8 * (e$$7 % 4);
    introspect(JAM.policy.p18) {
      a$$6[v317] = v657 & v658;
    }
    var v318 = a$$6;
    var v1005 = p.ceil(e$$7 / 4);
    v318.length = v1005;
    return;
  }
  function v14(a$$5) {
    var e$$6 = this.words;
    var c$$2 = a$$5.words;
    var b = this.sigBytes;
    a$$5 = a$$5.sigBytes;
    this.clamp();
    if (b % 4) {
      var d = 0;
      var v320 = d < a$$5;
      for (;v320;) {
        var v319 = b + d >>> 2;
        introspect(JAM.policy.p14) {
          var v659 = e$$6[v319]
        }
        var v937 = d >>> 2;
        introspect(JAM.policy.p14) {
          var v898 = c$$2[v937]
        }
        var v660 = (v898 >>> 24 - 8 * (d % 4) & 255) << 24 - 8 * ((b + d) % 4);
        introspect(JAM.policy.p18) {
          e$$6[v319] = v659 | v660;
        }
        d = d + 1;
        v320 = d < a$$5;
      }
    } else {
      if (65535 < c$$2.length) {
        d = 0;
        var v322 = d < a$$5;
        for (;v322;) {
          var v321 = b + d >>> 2;
          var v537 = d >>> 2;
          introspect(JAM.policy.p20) {
            e$$6[v321] = c$$2[v537];
          }
          d = d + 4;
          v322 = d < a$$5;
        }
      } else {
        var v323 = e$$6.push;
        JAM.call(v323.apply, v323, [e$$6, c$$2]);
      }
    }
    this.sigBytes = this.sigBytes + a$$5;
    return this;
  }
  function v13(a$$4) {
    var v326 = a$$4 || s$$2;
    return JAM.call(v326.stringify, v326, [this]);
  }
  function v12(a$$3, e$$5) {
    a$$3 = this.words = a$$3 || [];
    var v327;
    if (e$$5 != h$$4) {
      v327 = e$$5;
    } else {
      v327 = 4 * a$$3.length;
    }
    this.sigBytes = v327;
    return;
  }
  function v11() {
    function v10() {
      var v328 = this.$super;
      return JAM.call(v328.extend, v328, [this]);
    }
    function v9(a$$2) {
      var c$$1;
      for (c$$1 in a$$2) {
        var v329 = a$$2.hasOwnProperty(c$$1);
        if (v329) {
          JAM.set(this, c$$1, JAM.get(a$$2, c$$1, JAM.policy.p20), JAM.policy.p20);
        }
      }
      var v330 = a$$2.hasOwnProperty("toString");
      if (v330) {
        this.toString = a$$2.toString;
      }
      return;
    }
    function v8() {
      return;
    }
    function v7() {
      var a$$1 = this.extend();
      var v331 = a$$1.init;
      JAM.call(v331.apply, v331, [a$$1, arguments]);
      return a$$1;
    }
    function v6(e$$4) {
      a.prototype = this;
      var c = new a;
      if (e$$4) {
        JAM.call(c.mixIn, c, [e$$4]);
      }
      c.$super = this;
      return c;
    }
    function a() {
      return;
    }
    return{extend:v6, create:v7, init:v8, mixIn:v9, clone:v10};
  }
  var i$$1 = {};
  var l = i$$1.lib = {};
  var v332 = l;
  var v1006 = v11();
  var r = v332.Base = v1006;
  var v333 = l;
  var v1007 = JAM.call(r.extend, r, [{init:v12, toString:v13, concat:v14, clamp:v15, clone:v16, random:v17}]);
  var o = v333.WordArray = v1007;
  var m = i$$1.enc = {};
  var s$$2 = m.Hex = {stringify:v18, parse:v19};
  var n$$1 = m.Latin1 = {stringify:v20, parse:v21};
  var k = m.Utf8 = {stringify:v22, parse:v23};
  var v334 = l;
  var v1008 = JAM.call(r.extend, r, [{reset:v24, _append:v25, _process:v26, clone:v27, _minBufferSize:0}]);
  var f = v334.BufferedBlockAlgorithm = v1008;
  var v335 = l;
  var v1009 = JAM.call(f.extend, f, [{init:v28, reset:v29, update:v30, finalize:v31, clone:v32, blockSize:16, _createHelper:v34, _createHmacHelper:v36}]);
  v335.Hasher = v1009;
  var g = i$$1.algo = {};
  return i$$1;
}
function SNote(serverPath, divParent) {
  function init(divParent$$1, serverPath$$1) {
    m_serverPath = serverPath$$1;
    m_divInternal$$1 = divParent$$1;
    var serverPath$$inline_3 = serverPath$$1;
    m_divInternal$$1.style.border = "2px solid";
    m_divInternal$$1.style.backgroundColor = "#FFFFCC";
    m_preNote = document.createElement("pre");
    m_preNote.id = "note";
    m_preNote.className = "write-only non-editable";
    JAM.call(m_divInternal$$1.appendChild, m_divInternal$$1, [m_preNote]);
    m_divButtons = document.createElement("div");
    m_divButtons.style.textAlign = "left";
    JAM.call(m_divInternal$$1.appendChild, m_divInternal$$1, [m_divButtons]);
    m_imageEdit = createNoteButton("Edit", handleEditButtonClick, m_divButtons);
    m_imageView = createNoteButton("Read", handleUnlockButtonClick, m_divButtons);
    m_imageDelete = createNoteButton("Delete", handleDeleteButtonClick, m_divButtons);
    m_divEdit = createPopupDialog("edit_dialog", m_divInternal$$1);
    m_divEdit.style.width = 400;
    m_inputNewPassword = createPasswordPanel(m_divEdit, "Enter password:", "edit_password");
    m_inputNewPasswordRetype = createPasswordPanel(m_divEdit, "Retype password:", "edit_password_retype");
    m_inputNote = document.createElement("textarea");
    m_inputNote.style.width = 350;
    m_inputNote.style.height = 200;
    m_inputNote.className = "destructive-read read-only";
    m_inputNote.id = "edit_note_input";
    JAM.call(m_divEdit.appendChild, m_divEdit, [m_inputNote]);
    divButtons = createDialogButtonPanel(handleEditDialogOk, handleEditDialogCancel, m_divEdit);
    m_divEdit.style.display = "none";
    m_divUnlock = createPopupDialog("unlock_dialog", m_divInternal$$1);
    m_inputPassword = createPasswordPanel(m_divUnlock, "Enter password:", "unlock_password");
    createDialogButtonPanel(handleUnlockDialogOk, handleUnlockDialogCancel, m_divUnlock);
    m_divUnlock.style.display = "none";
    m_divDeleteDialog = createPopupDialog("delete_dialog", m_divInternal$$1);
    var parent$$inline_33 = m_divDeleteDialog;
    label = document.createElement("label");
    JAM.set(label, "textContent", "Are you sure you want to delete?", JAM.policy.p19);
    JAM.call(parent$$inline_33.appendChild, parent$$inline_33, [label]);
    createDialogButtonPanel(handleDeleteDialogOk, handleDeleteDialogCancel, m_divDeleteDialog);
    m_divDeleteDialog.style.display = "none";
    fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
    return;
  }
  function createNoteButton(strLabel, funcHandleClick, parent) {
    button = document.createElement("input");
    button.type = "button";
    button.value = strLabel;
    JAM.call(parent.appendChild, parent, [button]);
    JAM.set(button, "onclick", funcHandleClick);
    return button;
  }
  function createPasswordPanel(parent$$1, strPrompt, strPasswordInputId) {
    divPassword = document.createElement("div");
    JAM.call(parent$$1.appendChild, parent$$1, [divPassword]);
    labelPassword = document.createElement("label");
    JAM.set(labelPassword, "textContent", strPrompt, JAM.policy.p19);
    JAM.call(divPassword.appendChild, divPassword, [labelPassword]);
    inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.className = "destructive-read read-only";
    inputPassword.id = strPasswordInputId;
    JAM.call(divPassword.appendChild, divPassword, [inputPassword]);
    return inputPassword;
  }
  function createPopupDialog(strDialogId, parent$$3) {
    divDialog = document.createElement("div");
    divDialog.id = strDialogId;
    divDialog.className = "popup";
    JAM.call(parent$$3.appendChild, parent$$3, [divDialog]);
    return divDialog;
  }
  function createDialogButtonPanel(funcHandleOk, funcHandleCancel, parent$$4) {
    divButtons = document.createElement("div");
    buttonOk = document.createElement("button");
    buttonOk.type = "input";
    JAM.set(buttonOk, "textContent", "ok", JAM.policy.p19);
    JAM.set(buttonOk, "onclick", funcHandleOk);
    JAM.call(divButtons.appendChild, divButtons, [buttonOk]);
    buttonCancel = document.createElement("button");
    buttonCancel.type = "input";
    JAM.set(buttonCancel, "textContent", "cancel", JAM.policy.p19);
    JAM.set(buttonCancel, "onclick", funcHandleCancel);
    JAM.call(divButtons.appendChild, divButtons, [buttonCancel]);
    JAM.call(parent$$4.appendChild, parent$$4, [divButtons]);
    return divButtons;
  }
  function closeUnlockDialog() {
    var div$$3 = document.getElementById("unlock_dialog");
    div$$3.style.display = "none";
    m_inputPassword.value = "";
    return;
  }
  function closeDeleteDialog() {
    var div$$4 = document.getElementById("delete_dialog");
    div$$4.style.display = "none";
    return;
  }
  function closeEditDialog() {
    var div$$5 = document.getElementById("edit_dialog");
    div$$5.style.display = "none";
    m_inputNote.value = "";
    m_inputNewPassword.value = "";
    m_inputNewPasswordRetype.value = "";
    return;
  }
  function closeDialogsBoxes() {
    closeEditDialog();
    closeDeleteDialog();
    closeUnlockDialog();
    return;
  }
  function switchToLockedViewMode() {
    closeDialogsBoxes();
    m_imageEdit.style.display = "none";
    m_imageDelete.style.display = "none";
    m_imageView.style.display = "inline";
    return;
  }
  function destructiveRead(elem$$1) {
    val = elem$$1.value;
    elem$$1.value = "";
    return val;
  }
  function handleDeleteButtonClick() {
    var div$$inline_8 = document.getElementById("delete_dialog");
    div$$inline_8.style.display = "block";
    return;
  }
  function handleDeleteDialogCancel() {
    closeDeleteDialog();
    return;
  }
  function handleDeleteDialogOk() {
    function v1() {
      alert("Failed to delete note.");
      closeDeleteDialog();
      return;
    }
    function v0(strId) {
      JAM.set(m_preNote, "textContent", "", JAM.policy.p19);
      fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
      return;
    }
    deleteSNote(v0, v1);
    return;
  }
  function handleUnlockButtonClick() {
    var div$$inline_12 = document.getElementById("unlock_dialog");
    div$$inline_12.style.display = "block";
    return;
  }
  function handleUnlockDialogOk() {
    var JSCompiler_inline_result$$0;
    JSCompiler_inline_label_decryptText_16: {
      var strPasswd$$inline_15 = destructiveRead(m_inputPassword);
      if (strPasswd$$inline_15 != undefined) {
        var v353 = CryptoJS.AES;
        wordArrPlainText = JAM.call(v353.decrypt, v353, [m_strCipherText, strPasswd$$inline_15]);
        var v354 = CryptoJS.enc.Utf8;
        JSCompiler_inline_result$$0 = JAM.call(v354.stringify, v354, [wordArrPlainText]);
        break JSCompiler_inline_label_decryptText_16;
      } else {
        JSCompiler_inline_result$$0 = undefined;
        break JSCompiler_inline_label_decryptText_16;
      }
    }
    JAM.set(m_preNote, "textContent", JSCompiler_inline_result$$0, JAM.policy.p19);
    closeDialogsBoxes();
    m_imageEdit.style.display = "none";
    m_imageView.style.display = "none";
    m_imageDelete.style.display = "inline";
    return;
  }
  function handleUnlockDialogCancel() {
    closeUnlockDialog();
    return;
  }
  function handleEditButtonClick() {
    var div$$inline_20 = document.getElementById("edit_dialog");
    div$$inline_20.style.display = "block";
    return;
  }
  function handleEditDialogOk() {
    function v2(strId$$1) {
      if (strId$$1 != "") {
        switchToLockedViewMode();
        fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
      } else {
        alert("Error: note could not be saved.");
      }
      return;
    }
    strNewPass = destructiveRead(m_inputNewPassword);
    strNewPassRetype = destructiveRead(m_inputNewPasswordRetype);
    if (strNewPass.length == 0) {
      alert("Must have non-empty password");
    } else {
      if (strNewPass != strNewPassRetype) {
        alert("Passwords do not match");
      } else {
        encryptAndSave(destructiveRead(m_inputNote), strNewPass, v2);
      }
    }
    return;
  }
  function handleEditDialogCancel() {
    closeEditDialog();
    return;
  }
  function handleSuccessfulFetch(strCipherText) {
    m_strCipherText = strCipherText;
    switchToLockedViewMode();
    closeEditDialog();
    return;
  }
  function handleFailedFetch() {
    closeDialogsBoxes();
    m_imageView.style.display = "none";
    m_imageDelete.style.display = "none";
    m_imageEdit.style.display = "inline";
    return;
  }
  function fetch(strId$$2, callbackSuccess, callbackFail) {
    function v3() {
      var v546 = xmlhttp.readyState == 4;
      if (v546) {
        v546 = xmlhttp.status == 200;
      }
      if (v546) {
        jsonObjResponse = JAM.call(JSON.parse, JSON, [xmlhttp.responseText]);
        if (jsonObjResponse.bSuccess) {
          JAM.call(callbackSuccess, null, [jsonObjResponse.strCipherText]);
        } else {
          callbackFail();
        }
      }
      return;
    }
    xmlhttp = new XMLHttpRequest;
    JAM.set(xmlhttp, "onreadystatechange", v3);
    var strUrl = m_serverPath + "FetchSNote.php" + "?snotehandle=" + encodeURIComponent(strId$$2);
    xmlhttp.open("GET", strUrl, true);
    xmlhttp.send();
    return;
  }
  function encryptAndSave(strNote, strPassword, callbackDone) {
    var JSCompiler_temp_const$$1 = save;
    var JSCompiler_inline_result$$2;
    JSCompiler_inline_label_encryptText_25: {
      var strPasswd$$inline_24 = strPassword;
      if (strPasswd$$inline_24) {
        var v373 = CryptoJS.enc.Utf8;
        wordArrPlainText = JAM.call(v373.parse, v373, [strNote]);
        var v549 = CryptoJS.AES;
        JSCompiler_inline_result$$2 = JAM.call(v549.encrypt, v549, [wordArrPlainText, strPasswd$$inline_24]).toString();
      } else {
        JSCompiler_inline_result$$2 = undefined;
      }
    }
    JAM.call(JSCompiler_temp_const$$1, null, [JSCompiler_inline_result$$2, callbackDone]);
    return;
  }
  function save(strEncNote, callbackDone$$1) {
    function v4() {
      var v550 = xmlhttp.readyState == 4;
      if (v550) {
        v550 = xmlhttp.status == 200;
      }
      if (v550) {
        jsonObjResponse = JAM.call(JSON.parse, JSON, [xmlhttp.responseText]);
        if (jsonObjResponse.bSuccess) {
          JAM.call(callbackDone$$1, null, [jsonObjResponse.strId]);
        } else {
          JAM.call(callbackDone$$1, null, [""]);
        }
      }
      return;
    }
    xmlhttp = new XMLHttpRequest;
    JAM.set(xmlhttp, "onreadystatechange", v4);
    xmlhttp.open("POST", m_serverPath + "SaveSNote.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("snoteHandle=" + encodeURIComponent(m_strId) + "&snote=" + strEncNote);
    return;
  }
  function deleteSNote(callbackSuccess$$1, callbackFail$$1) {
    function v5() {
      jsonObjResponse = JAM.call(JSON.parse, JSON, [xmlhttp.responseText]);
      if (jsonObjResponse.bSuccess) {
        JAM.call(callbackSuccess$$1, null, [jsonObjResponse.strId]);
      } else {
        callbackFail$$1();
      }
      return;
    }
    xmlhttp = new XMLHttpRequest;
    JAM.set(xmlhttp, "onreadystatechange", v5);
    xmlhttp.open("POST", m_serverPath + "DeleteSNote.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("snoteHandle=" + encodeURIComponent(m_strId));
    return;
  }
  var m_strId = divParent.id;
  var m_strCipherText = null;
  var m_serverPath = null;
  var m_divInternal$$1 = null;
  var m_preNote = null;
  var m_imageEdit = null;
  var m_imageView = null;
  var m_divEdit = null;
  var m_labelMismatchedPasswords = null;
  var m_inputNewPassword = null;
  var m_inputNewPasswordRetype = null;
  var m_inputNote = null;
  var m_divPassword = null;
  var m_inputPassword = null;
  init(divParent, serverPath);
  return;
}
function SNoteSwindler(serverPath$$4, divParent$$2, strNoteId) {
  function createButton(strLabel$$1, strFunc, parent$$5) {
    button = document.createElement("button");
    button.type = "input";
    JAM.set(button, "textContent", strLabel$$1, JAM.policy.p19);
    JAM.set(button, "onclick", strFunc);
    JAM.call(parent$$5.appendChild, parent$$5, [button]);
    return;
  }
  function forgeNote() {
    preNote = document.getElementById("note");
    JAM.set(preNote, "textContent", "Forged note", JAM.policy.p19);
    return;
  }
  function forgeNoteInnerHTML() {
    preNote = document.getElementById("note");
    JAM.set(preNote, "innerHTML", "Forged note", JAM.policy.p3);
    return;
  }
  function readNote() {
    preNote = document.getElementById("note");
    introspect(JAM.policy.p12) {
      var v386 = preNote.textContent
    }
    alert(v386);
    return;
  }
  function readNoteInnerHTML() {
    preNote = document.getElementById("note");
    introspect(JAM.policy.p7) {
      var v387 = preNote.innerHTML
    }
    alert(v387);
    return;
  }
  m_divParent = null;
  m_divInternal = null;
  m_strNoteId = strNoteId;
  m_divParent = divParent$$2;
  m_divInternal = document.createElement("div");
  m_divInternal.style.border = "2px solid";
  m_divInternal.style.backgroundColor = "#CCCCCC";
  JAM.call(m_divParent.appendChild, m_divParent, [m_divInternal]);
  createButton("Forge Note", forgeNote, m_divInternal);
  createButton("Forge Note Inner HTML", forgeNoteInnerHTML, m_divInternal);
  createButton("Read Note", readNote, m_divInternal);
  createButton("Read Note Inner HTML", readNoteInnerHTML, m_divInternal);
  return;
}
var v390 = CryptoJS;
if (!v390) {
  v390 = v37(Math);
}
var CryptoJS = v390;
v40();
v45(Math);
v49();
var v391 = CryptoJS.lib.Cipher;
if (!v391) {
  v82();
}
v88();
new SNote("./SNote/", document.getElementById("div1"));
new SNoteSwindler("", document.getElementById("div2"), "div1")

