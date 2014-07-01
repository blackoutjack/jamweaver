function v118(s$$41) {
  return
}
function v117() {
  function v116(result$$4) {
    sc_display(result$$4);
    sc_newline();
    return result$$4 == 132
  }
  function v115() {
    return JAMScript.call(test, null, [k$$10])
  }
  var args$$6 = null;
  var v119 = arguments.length;
  var sc_tmp$$1 = v119 - 1;
  var v121 = sc_tmp$$1 >= 0;
  for(;v121;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v120 = arguments[sc_tmp$$1]
    }
    args$$6 = sc_cons(v120, args$$6);
    sc_tmp$$1 = sc_tmp$$1 - 1;
    v121 = sc_tmp$$1 >= 0
  }
  var k$$10;
  var v1097;
  var v1705 = args$$6 === null;
  if(v1705) {
    v1097 = 7
  }else {
    v1097 = args$$6.car
  }
  k$$10 = v1097;
  return JAMScript.call(BgL_runzd2benchmarkzd2, null, ["earley", 1, v115, v116])
}
function v114(k$$9) {
  function v113(l$$31) {
    var sc_x_134;
    var tail1134;
    var L1130;
    var falseHead1133;
    falseHead1133 = new sc_Pair(null, null);
    tail1134 = falseHead1133;
    L1130 = l$$31;
    var v1098 = L1130 === null;
    var v123 = !v1098;
    for(;v123;) {
      var v122 = tail1134;
      sc_x_134 = L1130.car;
      var v1099 = sc_list(sc_x_134, sc_x_134);
      var v3708 = new sc_Pair(v1099, null);
      v122.cdr = v3708;
      tail1134 = tail1134.cdr;
      L1130 = L1130.cdr;
      var v1100 = L1130 === null;
      v123 = !v1100
    }
    return falseHead1133.cdr;
    return
  }
  var x$$79;
  var p$$46;
  p$$46 = JAMScript.call(BgL_makezd2parserzd2, null, [const_earley, v113]);
  var v2103 = sc_makeVector(k$$9, "\u1e9ca");
  var v1706 = sc_vector2list(v2103);
  x$$79 = JAMScript.call(p$$46, null, [v1706]);
  var v1101 = JAMScript.call(BgL_parsezd2ze3treesz31, null, [x$$79, "\u1e9cs", 0, k$$9]);
  return sc_length(v1101)
}
function v112(parse$$2, nt$$9, i$$71, j$$11) {
  var BgL_sc_nbzd2derivzd2treesza2_133za2;
  var states$$3;
  var toks$$2;
  var steps$$2;
  var enders$$3;
  var nts$$3;
  nts$$3 = parse$$2[0];
  enders$$3 = parse$$2[2];
  steps$$2 = parse$$2[4];
  toks$$2 = parse$$2[6];
  states$$3 = parse$$2[7];
  BgL_sc_nbzd2derivzd2treesza2_133za2 = parse$$2[10];
  return JAMScript.call(BgL_sc_nbzd2derivzd2treesza2_133za2, null, [nt$$9, i$$71, j$$11, nts$$3, enders$$3, steps$$2, toks$$2, states$$3])
}
function v111(parse$$1, nt$$8, i$$70, j$$10) {
  var BgL_sc_derivzd2treesza2_132z70;
  var states$$2;
  var toks$$1;
  var names$$1;
  var steps$$1;
  var enders$$2;
  var nts$$2;
  nts$$2 = parse$$1[0];
  enders$$2 = parse$$1[2];
  steps$$1 = parse$$1[4];
  names$$1 = parse$$1[5];
  toks$$1 = parse$$1[6];
  states$$2 = parse$$1[7];
  BgL_sc_derivzd2treesza2_132z70 = parse$$1[9];
  return JAMScript.call(BgL_sc_derivzd2treesza2_132z70, null, [nt$$8, i$$70, j$$10, nts$$2, enders$$2, steps$$1, names$$1, toks$$1, states$$2])
}
function v110(parse, nt$$7, i$$69, j$$9) {
  var is_parsed$$1;
  var states$$1;
  var enders$$1;
  var nts$$1;
  nts$$1 = parse[0];
  enders$$1 = parse[2];
  states$$1 = parse[7];
  is_parsed$$1 = parse[8];
  return JAMScript.call(is_parsed$$1, null, [nt$$7, i$$69, j$$9, nts$$1, enders$$1, states$$1])
}
function v109(grammar, lexer) {
  function v108(input) {
    function v107() {
      function v106(l$$30) {
        var k$$8;
        var ender_set$$2;
        var state$$11;
        var ender$$3;
        for(;true;) {
          var v130 = l$$30 instanceof sc_Pair;
          if(v130) {
            ender$$3 = l$$30.car;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              state$$11 = sc_states_129[j$$8]
            }
            var v1102 = ender$$3 + 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              ender_set$$2 = state$$11[v1102]
            }
            var v129 = ender_set$$2 !== false;
            if(v129) {
              k$$8 = ender_set$$2[2];
              var v127 = k$$8 >= 0;
              for(;v127;) {
                var v125 = k$$8 >= i$$68;
                if(v125) {
                  var v1103 = JAMScript.call(BgL_sc_confzd2setzd2adjoinza2za2_46z00, null, [sc_states_129, BgL_sc_statesza2_128za2, k$$8, prev$$2, i$$68]);
                  var v124 = v1103 !== false;
                  if(v124) {
                    JAMScript.call(BgL_sc_confzd2setzd2adjoinza2za2_46z00, null, [sc_states_129, BgL_sc_statesza2_128za2, j$$8, ender$$3, k$$8])
                  }
                }
                var v126 = k$$8 + 5;
                introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                  k$$8 = ender_set$$2[v126]
                }
                v127 = k$$8 >= 0
              }
              var v128 = l$$30.cdr;
              return JAMScript.call(sc_loop1_127, null, [v128])
            }else {
              l$$30 = l$$30.cdr
            }
          }else {
            return undefined
          }
        }
        return
      }
      var sc_loop1_127;
      var prev$$2;
      var BgL_sc_statesza2_128za2;
      var sc_states_129;
      var j$$8;
      var i$$68;
      var sc_i_130;
      var head$$4;
      var conf_set$$12;
      var sc_conf_131;
      sc_conf_131 = BgL_sc_stateza2_23za2[0];
      var v136 = sc_conf_131 >= 0;
      if(v136) {
        var v131 = sc_conf_131 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          conf_set$$12 = BgL_sc_stateza2_23za2[v131]
        }
        head$$4 = conf_set$$12[4];
        BgL_sc_stateza2_23za2[0] = conf_set$$12[0];
        JAMScript.call(conf_set_merge_new_bang, null, [conf_set$$12]);
        sc_i_130 = head$$4;
        var v135 = sc_i_130 >= 0;
        for(;v135;) {
          i$$68 = sc_i_130;
          j$$8 = state_num;
          sc_states_129 = states;
          BgL_sc_statesza2_128za2 = BgL_sc_statesza2_27za2;
          prev$$2 = sc_conf_131 - 1;
          var v1104 = sc_conf_131 >= BgL_sc_nbzd2nts_24zd2;
          if(v1104) {
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v1707 = sc_steps_25[prev$$2]
            }
            v1104 = v1707 >= 0
          }
          var v133 = v1104;
          if(v133) {
            sc_loop1_127 = v106;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v1105 = sc_steps_25[prev$$2]
            }
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v132 = sc_enders_26[v1105]
            }
            JAMScript.call(sc_loop1_127, null, [v132])
          }
          var v134 = sc_i_130 + 5;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            sc_i_130 = conf_set$$12[v134]
          }
          v135 = sc_i_130 >= 0
        }
        return JAMScript.call(loop1, null, [])
      }else {
        return undefined
      }
      return
    }
    function v105(nt$$6, i$$67, j$$7, sc_nts_119, sc_enders_120, sc_steps_121, sc_toks_122, sc_states_123) {
      var conf_set$$11;
      var state$$10;
      var sc_conf_124;
      var l$$29;
      var nb_trees;
      var BgL_sc_nbzd2nts_125zd2;
      var BgL_sc_ntza2_126za2;
      BgL_sc_ntza2_126za2 = JAMScript.call(sc_ind_43, null, [nt$$6, sc_nts_119]);
      var v140 = BgL_sc_ntza2_126za2 !== false;
      if(v140) {
        BgL_sc_nbzd2nts_125zd2 = sc_nts_119.length;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          l$$29 = sc_enders_120[BgL_sc_ntza2_126za2]
        }
        nb_trees = 0;
        var v139 = l$$29 instanceof sc_Pair;
        for(;v139;) {
          sc_conf_124 = l$$29.car;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            state$$10 = sc_states_123[j$$7]
          }
          var v2413 = sc_conf_124 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            conf_set$$11 = state$$10[v2413]
          }
          var v2104;
          var v2415 = conf_set$$11 !== false;
          if(v2415) {
            var v2414 = i$$67 + 5;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              v2104 = conf_set$$11[v2414]
            }
          }else {
            v2104 = false
          }
          var v1106 = v2104;
          var v138 = v1106 !== false;
          if(v138) {
            l$$29 = l$$29.cdr;
            var v137 = JAMScript.call(nb_deriv_trees, null, [sc_conf_124, i$$67, j$$7, sc_enders_120, sc_steps_121, sc_toks_122, sc_states_123, BgL_sc_nbzd2nts_125zd2]);
            nb_trees = v137 + nb_trees
          }else {
            l$$29 = l$$29.cdr
          }
          v139 = l$$29 instanceof sc_Pair
        }
        return nb_trees
      }else {
        return false
      }
      return
    }
    function v104(sc_conf_110, i$$66, j$$6, sc_enders_111, sc_steps_112, sc_toks_113, sc_states_114, BgL_sc_nbzd2nts_115zd2) {
      function v103(l$$28, sc_n_118) {
        var nb_ender_trees;
        var nb_prev_trees;
        var conf_set$$10;
        var state$$9;
        var k$$7;
        var n$$13;
        var ender_set$$1;
        var sc_state_117;
        var ender$$2;
        for(;true;) {
          var v147 = l$$28 instanceof sc_Pair;
          if(v147) {
            ender$$2 = l$$28.car;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              sc_state_117 = sc_states_114[j$$6]
            }
            var v1107 = ender$$2 + 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              ender_set$$1 = sc_state_117[v1107]
            }
            var v146 = ender_set$$1 !== false;
            if(v146) {
              k$$7 = ender_set$$1[2];
              n$$13 = sc_n_118;
              var v144 = k$$7 >= 0;
              for(;v144;) {
                var v1108 = k$$7 >= i$$66;
                if(v1108) {
                  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                    state$$9 = sc_states_114[k$$7]
                  }
                  var v2746 = prev$$1 + 1;
                  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                    conf_set$$10 = state$$9[v2746]
                  }
                  var v2416;
                  var v2748 = conf_set$$10 !== false;
                  if(v2748) {
                    var v2747 = i$$66 + 5;
                    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                      v2416 = conf_set$$10[v2747]
                    }
                  }else {
                    v2416 = false
                  }
                  var v1708 = v2416;
                  v1108 = v1708 !== false
                }
                var v143 = v1108;
                if(v143) {
                  nb_prev_trees = JAMScript.call(nb_deriv_trees, null, [prev$$1, i$$66, k$$7, sc_enders_111, sc_steps_112, sc_toks_113, sc_states_114, BgL_sc_nbzd2nts_115zd2]);
                  nb_ender_trees = JAMScript.call(nb_deriv_trees, null, [ender$$2, k$$7, j$$6, sc_enders_111, sc_steps_112, sc_toks_113, sc_states_114, BgL_sc_nbzd2nts_115zd2]);
                  var v141 = k$$7 + 5;
                  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                    k$$7 = ender_set$$1[v141]
                  }
                  var v1109 = nb_prev_trees * nb_ender_trees;
                  n$$13 = n$$13 + v1109
                }else {
                  var v142 = k$$7 + 5;
                  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                    k$$7 = ender_set$$1[v142]
                  }
                }
                v144 = k$$7 >= 0
              }
              var v145 = l$$28.cdr;
              return JAMScript.call(sc_loop1_116, null, [v145, n$$13])
            }else {
              l$$28 = l$$28.cdr
            }
          }else {
            return sc_n_118
          }
        }
        return
      }
      var sc_loop1_116;
      var tmp1124;
      var prev$$1;
      prev$$1 = sc_conf_110 - 1;
      var v1110;
      tmp1124 = sc_conf_110 < BgL_sc_nbzd2nts_115zd2;
      var v2749;
      var v3023 = tmp1124 !== false;
      if(v3023) {
        v2749 = tmp1124
      }else {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v3022 = sc_steps_112[prev$$1]
        }
        v2749 = v3022 < 0
      }
      var v2105 = v2749;
      var v1709 = v2105 !== false;
      if(v1709) {
        v1110 = 1
      }else {
        sc_loop1_116 = v103;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v2417 = sc_steps_112[prev$$1]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v2106 = sc_enders_111[v2417]
        }
        v1110 = JAMScript.call(sc_loop1_116, null, [v2106, 0])
      }
      return v1110
    }
    function v102(nt$$5, i$$65, j$$5, sc_nts_101, sc_enders_102, sc_steps_103, sc_names_104, sc_toks_105, sc_states_106) {
      var conf_set$$9;
      var state$$8;
      var sc_conf_107;
      var l$$27;
      var trees;
      var BgL_sc_nbzd2nts_108zd2;
      var BgL_sc_ntza2_109za2;
      BgL_sc_ntza2_109za2 = JAMScript.call(sc_ind_43, null, [nt$$5, sc_nts_101]);
      var v151 = BgL_sc_ntza2_109za2 !== false;
      if(v151) {
        BgL_sc_nbzd2nts_108zd2 = sc_nts_101.length;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          l$$27 = sc_enders_102[BgL_sc_ntza2_109za2]
        }
        trees = null;
        var v150 = l$$27 instanceof sc_Pair;
        for(;v150;) {
          sc_conf_107 = l$$27.car;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            state$$8 = sc_states_106[j$$5]
          }
          var v2418 = sc_conf_107 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            conf_set$$9 = state$$8[v2418]
          }
          var v2107;
          var v2420 = conf_set$$9 !== false;
          if(v2420) {
            var v2419 = i$$65 + 5;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              v2107 = conf_set$$9[v2419]
            }
          }else {
            v2107 = false
          }
          var v1111 = v2107;
          var v149 = v1111 !== false;
          if(v149) {
            l$$27 = l$$27.cdr;
            var v148 = JAMScript.call(deriv_trees, null, [sc_conf_107, i$$65, j$$5, sc_enders_102, sc_steps_103, sc_names_104, sc_toks_105, sc_states_106, BgL_sc_nbzd2nts_108zd2]);
            trees = sc_append(v148, trees)
          }else {
            l$$27 = l$$27.cdr
          }
          v150 = l$$27 instanceof sc_Pair
        }
        return trees
      }else {
        return false
      }
      return
    }
    function v101(sc_conf_91, i$$64, j$$4, sc_enders_92, sc_steps_93, sc_names_94, sc_toks_95, sc_states_96, BgL_sc_nbzd2nts_97zd2) {
      function v100(l1$$14, l2$$6) {
        function v99(k$$6, l2$$7) {
          function v98(l3$$1, l2$$8) {
            var l4;
            var sc_l2_100;
            var ender_tree;
            var v157 = l3$$1 instanceof sc_Pair;
            if(v157) {
              var v152 = l3$$1.car;
              ender_tree = sc_list(v152);
              l4 = prev_trees;
              sc_l2_100 = l2$$8;
              var v154 = l4 instanceof sc_Pair;
              for(;v154;) {
                var v1112 = l4.car;
                var v153 = sc_append(v1112, ender_tree);
                sc_l2_100 = new sc_Pair(v153, sc_l2_100);
                l4 = l4.cdr;
                v154 = l4 instanceof sc_Pair
              }
              var v155 = l3$$1.cdr;
              return JAMScript.call(loop3, null, [v155, sc_l2_100])
            }else {
              var v1113 = k$$6 + 5;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v156 = ender_set[v1113]
              }
              return JAMScript.call(loop2, null, [v156, l2$$8])
            }
            return
          }
          var loop3;
          var ender_trees;
          var prev_trees;
          var conf_set$$8;
          var sc_state_99;
          for(;true;) {
            var v161 = k$$6 >= 0;
            if(v161) {
              var v1114 = k$$6 >= i$$64;
              if(v1114) {
                introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                  sc_state_99 = sc_states_96[k$$6]
                }
                var v2750 = prev + 1;
                introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                  conf_set$$8 = sc_state_99[v2750]
                }
                var v2421;
                var v2752 = conf_set$$8 !== false;
                if(v2752) {
                  var v2751 = i$$64 + 5;
                  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                    v2421 = conf_set$$8[v2751]
                  }
                }else {
                  v2421 = false
                }
                var v1710 = v2421;
                v1114 = v1710 !== false
              }
              var v159 = v1114;
              if(v159) {
                prev_trees = JAMScript.call(deriv_trees, null, [prev, i$$64, k$$6, sc_enders_92, sc_steps_93, sc_names_94, sc_toks_95, sc_states_96, BgL_sc_nbzd2nts_97zd2]);
                ender_trees = JAMScript.call(deriv_trees, null, [ender$$1, k$$6, j$$4, sc_enders_92, sc_steps_93, sc_names_94, sc_toks_95, sc_states_96, BgL_sc_nbzd2nts_97zd2]);
                loop3 = v98;
                return JAMScript.call(loop3, null, [ender_trees, l2$$7])
              }else {
                var v158 = k$$6 + 5;
                introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                  k$$6 = ender_set[v158]
                }
              }
            }else {
              var v160 = l1$$14.cdr;
              return JAMScript.call(sc_loop1_98, null, [v160, l2$$7])
            }
          }
          return
        }
        var loop2;
        var ender_set;
        var state$$7;
        var ender$$1;
        for(;true;) {
          var v164 = l1$$14 instanceof sc_Pair;
          if(v164) {
            ender$$1 = l1$$14.car;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              state$$7 = sc_states_96[j$$4]
            }
            var v1115 = ender$$1 + 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              ender_set = state$$7[v1115]
            }
            var v163 = ender_set !== false;
            if(v163) {
              loop2 = v99;
              var v162 = ender_set[2];
              return JAMScript.call(loop2, null, [v162, l2$$6])
            }else {
              l1$$14 = l1$$14.cdr
            }
          }else {
            return l2$$6
          }
        }
        return
      }
      var sc_loop1_98;
      var prev;
      var name$$38;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        name$$38 = sc_names_94[sc_conf_91]
      }
      var v1116;
      var v1712 = name$$38 !== false;
      if(v1712) {
        var v1711;
        var v2110 = sc_conf_91 < BgL_sc_nbzd2nts_97zd2;
        if(v2110) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v2753 = sc_toks_95[i$$64]
          }
          var v2422 = v2753.car;
          var v2108 = sc_list(name$$38, v2422);
          v1711 = sc_list(v2108)
        }else {
          var v2109 = sc_list(name$$38);
          v1711 = sc_list(v2109)
        }
        v1116 = v1711
      }else {
        prev = sc_conf_91 - 1;
        sc_loop1_98 = v100;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v2423 = sc_steps_93[prev]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v2111 = sc_enders_92[v2423]
        }
        v1116 = JAMScript.call(sc_loop1_98, null, [v2111, null])
      }
      return v1116
    }
    function v97(nt$$4, i$$63, j$$3, sc_nts_86, sc_enders_87, sc_states_88) {
      var conf_set$$7;
      var state$$6;
      var sc_conf_89;
      var l$$26;
      var BgL_sc_ntza2_90za2;
      BgL_sc_ntza2_90za2 = JAMScript.call(sc_ind_43, null, [nt$$4, sc_nts_86]);
      var v167 = BgL_sc_ntza2_90za2 !== false;
      if(v167) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          l$$26 = sc_enders_87[BgL_sc_ntza2_90za2]
        }
        for(;true;) {
          var v166 = l$$26 instanceof sc_Pair;
          if(v166) {
            sc_conf_89 = l$$26.car;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              state$$6 = sc_states_88[j$$3]
            }
            var v2424 = sc_conf_89 + 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              conf_set$$7 = state$$6[v2424]
            }
            var v2112;
            var v2426 = conf_set$$7 !== false;
            if(v2426) {
              var v2425 = i$$63 + 5;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                v2112 = conf_set$$7[v2425]
              }
            }else {
              v2112 = false
            }
            var v1117 = v2112;
            var v165 = v1117 !== false;
            if(v165) {
              return true
            }else {
              l$$26 = l$$26.cdr
            }
          }else {
            return false
          }
        }
      }else {
        return false
      }
      return
    }
    function v96(sc_states_67, BgL_sc_statezd2num_68zd2, sc_starters_69, sc_enders_70, sc_predictors_71, sc_steps_72, sc_nts_73) {
      function v95(l$$25) {
        var sc_state_83;
        var BgL_sc_nextzd2set_84zd2;
        var sc_next_85;
        var pred_set;
        var i$$62;
        var pred;
        var v172 = l$$25 instanceof sc_Pair;
        if(v172) {
          pred = l$$25.car;
          i$$62 = head$$3;
          var v170 = i$$62 >= 0;
          for(;v170;) {
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              sc_state_83 = sc_states_78[i$$62]
            }
            var v1118 = pred + 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              pred_set = sc_state_83[v1118]
            }
            var v168 = pred_set !== false;
            if(v168) {
              sc_next_85 = pred + 1;
              BgL_sc_nextzd2set_84zd2 = JAMScript.call(BgL_sc_confzd2setzd2getza2_44za2, null, [state$$5, BgL_sc_statezd2num_77zd2, sc_next_85]);
              JAMScript.call(conf_set_union, null, [state$$5, BgL_sc_nextzd2set_84zd2, sc_next_85, pred_set])
            }
            var v169 = i$$62 + 5;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              i$$62 = BgL_sc_confzd2set_76zd2[v169]
            }
            v170 = i$$62 >= 0
          }
          var v171 = l$$25.cdr;
          return JAMScript.call(sc_loop1_75, null, [v171])
        }else {
          return undefined
        }
        return
      }
      var next_set;
      var next$$1;
      var conf_set$$6;
      var ender;
      var l$$24;
      var starter_set;
      var starter;
      var sc_l_74;
      var sc_loop1_75;
      var head$$3;
      var BgL_sc_confzd2set_76zd2;
      var BgL_sc_statezd2num_77zd2;
      var state$$5;
      var sc_states_78;
      var preds;
      var BgL_sc_confzd2set_79zd2;
      var step;
      var sc_conf_80;
      var BgL_sc_nbzd2nts_81zd2;
      var sc_state_82;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        sc_state_82 = sc_states_67[BgL_sc_statezd2num_68zd2]
      }
      BgL_sc_nbzd2nts_81zd2 = sc_nts_73.length;
      for(;true;) {
        sc_conf_80 = sc_state_82[0];
        var v180 = sc_conf_80 >= 0;
        if(v180) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            step = sc_steps_72[sc_conf_80]
          }
          var v173 = sc_conf_80 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            BgL_sc_confzd2set_79zd2 = sc_state_82[v173]
          }
          head$$3 = BgL_sc_confzd2set_79zd2[4];
          sc_state_82[0] = BgL_sc_confzd2set_79zd2[0];
          JAMScript.call(conf_set_merge_new_bang, null, [BgL_sc_confzd2set_79zd2]);
          var v179 = step >= 0;
          if(v179) {
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              sc_l_74 = sc_starters_69[step]
            }
            var v175 = sc_l_74 instanceof sc_Pair;
            for(;v175;) {
              starter = sc_l_74.car;
              starter_set = JAMScript.call(BgL_sc_confzd2setzd2getza2_44za2, null, [sc_state_82, BgL_sc_statezd2num_68zd2, starter]);
              var v1713 = BgL_sc_statezd2num_68zd2 + 5;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v1119 = starter_set[v1713]
              }
              var v174 = v1119 === false;
              if(v174) {
                JAMScript.call(conf_set_adjoin, null, [sc_state_82, starter_set, starter, BgL_sc_statezd2num_68zd2]);
                sc_l_74 = sc_l_74.cdr
              }else {
                sc_l_74 = sc_l_74.cdr
              }
              v175 = sc_l_74 instanceof sc_Pair
            }
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              l$$24 = sc_enders_70[step]
            }
            var v177 = l$$24 instanceof sc_Pair;
            for(;v177;) {
              ender = l$$24.car;
              var v2113 = ender + 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                conf_set$$6 = sc_state_82[v2113]
              }
              var v2114;
              var v2428 = conf_set$$6 !== false;
              if(v2428) {
                var v2427 = BgL_sc_statezd2num_68zd2 + 5;
                introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                  v2114 = conf_set$$6[v2427]
                }
              }else {
                v2114 = false
              }
              var v1120 = v2114;
              var v176 = v1120 !== false;
              if(v176) {
                next$$1 = sc_conf_80 + 1;
                next_set = JAMScript.call(BgL_sc_confzd2setzd2getza2_44za2, null, [sc_state_82, BgL_sc_statezd2num_68zd2, next$$1]);
                JAMScript.call(conf_set_union, null, [sc_state_82, next_set, next$$1, BgL_sc_confzd2set_79zd2]);
                l$$24 = l$$24.cdr
              }else {
                l$$24 = l$$24.cdr
              }
              v177 = l$$24 instanceof sc_Pair
            }
          }else {
            var v178 = step + BgL_sc_nbzd2nts_81zd2;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              preds = sc_predictors_71[v178]
            }
            sc_states_78 = sc_states_67;
            state$$5 = sc_state_82;
            BgL_sc_statezd2num_77zd2 = BgL_sc_statezd2num_68zd2;
            BgL_sc_confzd2set_76zd2 = BgL_sc_confzd2set_79zd2;
            sc_loop1_75 = v95;
            JAMScript.call(sc_loop1_75, null, [preds])
          }
        }else {
          return undefined
        }
      }
      return
    }
    function v94(state$$4, conf_set$$5, sc_conf_66, other_set) {
      var i$$61;
      i$$61 = other_set[2];
      var v184 = i$$61 >= 0;
      for(;v184;) {
        var v1714 = i$$61 + 5;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v1121 = conf_set$$5[v1714]
        }
        var v183 = v1121 === false;
        if(v183) {
          JAMScript.call(conf_set_adjoin, null, [state$$4, conf_set$$5, sc_conf_66, i$$61]);
          var v181 = i$$61 + 5;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            i$$61 = other_set[v181]
          }
        }else {
          var v182 = i$$61 + 5;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            i$$61 = other_set[v182]
          }
        }
        v184 = i$$61 >= 0
      }
      return undefined;
      return
    }
    function v93(sc_states_60, BgL_sc_statesza2_61za2, BgL_sc_statezd2num_62zd2, sc_conf_63, i$$60) {
      var BgL_sc_confzd2setza2_64z70;
      var BgL_sc_stateza2_65za2;
      var conf_set$$4;
      var state$$3;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        state$$3 = sc_states_60[BgL_sc_statezd2num_62zd2]
      }
      var v1122;
      var v2754 = sc_conf_63 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        conf_set$$4 = state$$3[v2754]
      }
      var v2755;
      var v3025 = conf_set$$4 !== false;
      if(v3025) {
        var v3024 = i$$60 + 5;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          v2755 = conf_set$$4[v3024]
        }
      }else {
        v2755 = false
      }
      var v2115 = v2755;
      var v1715 = v2115 !== false;
      if(v1715) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          BgL_sc_stateza2_65za2 = BgL_sc_statesza2_61za2[BgL_sc_statezd2num_62zd2]
        }
        BgL_sc_confzd2setza2_64z70 = JAMScript.call(BgL_sc_confzd2setzd2getza2_44za2, null, [BgL_sc_stateza2_65za2, BgL_sc_statezd2num_62zd2, sc_conf_63]);
        var v2429;
        var v3265 = i$$60 + 5;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v3026 = BgL_sc_confzd2setza2_64z70[v3265]
        }
        var v2756 = v3026 === false;
        if(v2756) {
          v2429 = JAMScript.call(conf_set_adjoin, null, [BgL_sc_stateza2_65za2, BgL_sc_confzd2setza2_64z70, sc_conf_63, i$$60])
        }else {
          v2429 = undefined
        }
        v2429;
        v1122 = true
      }else {
        v1122 = false
      }
      return v1122
    }
    function v92(sc_states_57, BgL_sc_statezd2num_58zd2, l$$23, i$$59) {
      var conf_set$$3;
      var sc_conf_59;
      var l1$$13;
      var state$$2;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        state$$2 = sc_states_57[BgL_sc_statezd2num_58zd2]
      }
      l1$$13 = l$$23;
      var v186 = l1$$13 instanceof sc_Pair;
      for(;v186;) {
        sc_conf_59 = l1$$13.car;
        conf_set$$3 = JAMScript.call(BgL_sc_confzd2setzd2getza2_44za2, null, [state$$2, BgL_sc_statezd2num_58zd2, sc_conf_59]);
        var v1716 = i$$59 + 5;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v1123 = conf_set$$3[v1716]
        }
        var v185 = v1123 === false;
        if(v185) {
          JAMScript.call(conf_set_adjoin, null, [state$$2, conf_set$$3, sc_conf_59, i$$59]);
          l1$$13 = l1$$13.cdr
        }else {
          l1$$13 = l1$$13.cdr
        }
        v186 = l1$$13 instanceof sc_Pair
      }
      return undefined;
      return
    }
    function v91(state$$1, conf_set$$2, sc_conf_56, i$$58) {
      var tail$$5;
      tail$$5 = conf_set$$2[3];
      var v2430 = i$$58 + 5;
      JAMScript.set(conf_set$$2, v2430, -1);
      var v2116 = tail$$5 + 5;
      JAMScript.set(conf_set$$2, v2116, i$$58);
      conf_set$$2[3] = i$$58;
      var v1124;
      var v1717 = tail$$5 < 0;
      if(v1717) {
        conf_set$$2[0] = state$$1[0];
        v1124 = state$$1[0] = sc_conf_56
      }else {
        v1124 = undefined
      }
      return v1124
    }
    function v90(conf_set$$1) {
      var v2117 = conf_set$$1;
      var v2431 = conf_set$$1[1];
      var v2118 = v2431 + 5;
      JAMScript.set(v2117, v2118, conf_set$$1[4]);
      conf_set$$1[1] = conf_set$$1[3];
      conf_set$$1[3] = -1;
      return conf_set$$1[4] = -1
    }
    function v89(state, BgL_sc_statezd2num_53zd2, sc_conf_54) {
      var conf_set;
      var BgL_sc_confzd2set_55zd2;
      var v1125 = sc_conf_54 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        BgL_sc_confzd2set_55zd2 = state[v1125]
      }
      var v1126;
      var v1718 = BgL_sc_confzd2set_55zd2 !== false;
      if(v1718) {
        v1126 = BgL_sc_confzd2set_55zd2
      }else {
        var v3433 = BgL_sc_statezd2num_53zd2 + 6;
        conf_set = sc_makeVector(v3433, false);
        conf_set[1] = -3;
        conf_set[2] = -1;
        conf_set[3] = -1;
        conf_set[4] = -1;
        var v2432 = sc_conf_54 + 1;
        JAMScript.set(state, v2432, conf_set);
        v1126 = conf_set
      }
      return v1126
    }
    function v88(BgL_sc_nbzd2toks_50zd2, BgL_sc_nbzd2confs_51zd2) {
      var v$$5;
      var i$$57;
      var sc_states_52;
      var v187 = BgL_sc_nbzd2toks_50zd2 + 1;
      sc_states_52 = sc_makeVector(v187, false);
      i$$57 = BgL_sc_nbzd2toks_50zd2;
      var v189 = i$$57 >= 0;
      for(;v189;) {
        var v188 = BgL_sc_nbzd2confs_51zd2 + 1;
        v$$5 = sc_makeVector(v188, false);
        v$$5[0] = -1;
        JAMScript.set(sc_states_52, i$$57, v$$5);
        i$$57 = i$$57 - 1;
        v189 = i$$57 >= 0
      }
      return sc_states_52;
      return
    }
    function v87(nt$$3, sc_nts_49) {
      var i$$56;
      var v190 = sc_nts_49.length;
      i$$56 = v190 - 1;
      for(;true;) {
        var v192 = i$$56 >= 0;
        if(v192) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v1127 = sc_nts_49[i$$56]
          }
          var v191 = sc_isEqual(v1127, nt$$3);
          if(v191) {
            return i$$56
          }else {
            i$$56 = i$$56 - 1
          }
        }else {
          return false
        }
      }
      return
    }
    var optrOpnd$$2;
    var sc_optrOpnd_20;
    var sc_optrOpnd_21;
    var sc_optrOpnd_22;
    var loop1;
    var BgL_sc_stateza2_23za2;
    var toks;
    var BgL_sc_nbzd2nts_24zd2;
    var sc_steps_25;
    var sc_enders_26;
    var state_num;
    var BgL_sc_statesza2_27za2;
    var states;
    var i$$55;
    var conf$$2;
    var l$$22;
    var tok_nts;
    var sc_i_28;
    var sc_i_29;
    var l1$$12;
    var l2$$5;
    var tok;
    var tail1129;
    var L1125;
    var goal_enders;
    var BgL_sc_statesza2_30za2;
    var BgL_sc_nbzd2nts_31zd2;
    var BgL_sc_nbzd2confs_32zd2;
    var nb_toks;
    var goal_starters;
    var sc_states_33;
    var BgL_sc_nbzd2confs_34zd2;
    var BgL_sc_nbzd2toks_35zd2;
    var sc_toks_36;
    var falseHead1128;
    var sc_names_37;
    var sc_steps_38;
    var sc_predictors_39;
    var sc_enders_40;
    var sc_starters_41;
    var sc_nts_42;
    var lexer$$1;
    var sc_ind_43;
    var make_states;
    var BgL_sc_confzd2setzd2getza2_44za2;
    var conf_set_merge_new_bang;
    var conf_set_adjoin;
    var BgL_sc_confzd2setzd2adjoinza2_45za2;
    var BgL_sc_confzd2setzd2adjoinza2za2_46z00;
    var conf_set_union;
    var forw;
    var is_parsed;
    var deriv_trees;
    var BgL_sc_derivzd2treesza2_47z70;
    var nb_deriv_trees;
    var BgL_sc_nbzd2derivzd2treesza2_48za2;
    sc_ind_43 = v87;
    make_states = v88;
    BgL_sc_confzd2setzd2getza2_44za2 = v89;
    conf_set_merge_new_bang = v90;
    conf_set_adjoin = v91;
    BgL_sc_confzd2setzd2adjoinza2_45za2 = v92;
    BgL_sc_confzd2setzd2adjoinza2za2_46z00 = v93;
    conf_set_union = v94;
    forw = v96;
    is_parsed = v97;
    deriv_trees = v101;
    BgL_sc_derivzd2treesza2_47z70 = v102;
    nb_deriv_trees = v104;
    BgL_sc_nbzd2derivzd2treesza2_48za2 = v105;
    lexer$$1 = parser_descr[0];
    sc_nts_42 = parser_descr[1];
    sc_starters_41 = parser_descr[2];
    sc_enders_40 = parser_descr[3];
    sc_predictors_39 = parser_descr[4];
    sc_steps_38 = parser_descr[5];
    sc_names_37 = parser_descr[6];
    falseHead1128 = new sc_Pair(null, null);
    L1125 = JAMScript.call(lexer$$1, null, [input]);
    tail1129 = falseHead1128;
    var v1128 = L1125 === null;
    var v198 = !v1128;
    for(;v198;) {
      tok = L1125.car;
      l1$$12 = tok.cdr;
      l2$$5 = null;
      var v195 = l1$$12 instanceof sc_Pair;
      for(;v195;) {
        var v193 = l1$$12.car;
        sc_i_29 = JAMScript.call(sc_ind_43, null, [v193, sc_nts_42]);
        var v194 = sc_i_29 !== false;
        if(v194) {
          l1$$12 = l1$$12.cdr;
          l2$$5 = new sc_Pair(sc_i_29, l2$$5)
        }else {
          l1$$12 = l1$$12.cdr
        }
        v195 = l1$$12 instanceof sc_Pair
      }
      var v196 = tok.car;
      var v197 = sc_reverse(l2$$5);
      sc_optrOpnd_22 = new sc_Pair(v196, v197);
      sc_optrOpnd_21 = new sc_Pair(sc_optrOpnd_22, null);
      tail1129.cdr = sc_optrOpnd_21;
      tail1129 = tail1129.cdr;
      L1125 = L1125.cdr;
      var v1129 = L1125 === null;
      v198 = !v1129
    }
    sc_optrOpnd_20 = falseHead1128.cdr;
    sc_toks_36 = sc_list2vector(sc_optrOpnd_20);
    BgL_sc_nbzd2toks_35zd2 = sc_toks_36.length;
    BgL_sc_nbzd2confs_34zd2 = sc_steps_38.length;
    sc_states_33 = JAMScript.call(make_states, null, [BgL_sc_nbzd2toks_35zd2, BgL_sc_nbzd2confs_34zd2]);
    goal_starters = sc_starters_41[0];
    JAMScript.call(BgL_sc_confzd2setzd2adjoinza2_45za2, null, [sc_states_33, 0, goal_starters, 0]);
    JAMScript.call(forw, null, [sc_states_33, 0, sc_starters_41, sc_enders_40, sc_predictors_39, sc_steps_38, sc_nts_42]);
    sc_i_28 = 0;
    var v202 = sc_i_28 < BgL_sc_nbzd2toks_35zd2;
    for(;v202;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v199 = sc_toks_36[sc_i_28]
      }
      tok_nts = v199.cdr;
      var v200 = sc_i_28 + 1;
      JAMScript.call(BgL_sc_confzd2setzd2adjoinza2_45za2, null, [sc_states_33, v200, tok_nts, sc_i_28]);
      var v201 = sc_i_28 + 1;
      JAMScript.call(forw, null, [sc_states_33, v201, sc_starters_41, sc_enders_40, sc_predictors_39, sc_steps_38, sc_nts_42]);
      sc_i_28 = sc_i_28 + 1;
      v202 = sc_i_28 < BgL_sc_nbzd2toks_35zd2
    }
    nb_toks = sc_toks_36.length;
    BgL_sc_nbzd2confs_32zd2 = sc_steps_38.length;
    BgL_sc_nbzd2nts_31zd2 = sc_nts_42.length;
    BgL_sc_statesza2_30za2 = JAMScript.call(make_states, null, [nb_toks, BgL_sc_nbzd2confs_32zd2]);
    goal_enders = sc_enders_40[0];
    l$$22 = goal_enders;
    var v203 = l$$22 instanceof sc_Pair;
    for(;v203;) {
      conf$$2 = l$$22.car;
      JAMScript.call(BgL_sc_confzd2setzd2adjoinza2za2_46z00, null, [sc_states_33, BgL_sc_statesza2_30za2, nb_toks, conf$$2, 0]);
      l$$22 = l$$22.cdr;
      v203 = l$$22 instanceof sc_Pair
    }
    i$$55 = nb_toks;
    var v204 = i$$55 >= 0;
    for(;v204;) {
      states = sc_states_33;
      BgL_sc_statesza2_27za2 = BgL_sc_statesza2_30za2;
      state_num = i$$55;
      sc_enders_26 = sc_enders_40;
      sc_steps_25 = sc_steps_38;
      BgL_sc_nbzd2nts_24zd2 = BgL_sc_nbzd2nts_31zd2;
      toks = sc_toks_36;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        BgL_sc_stateza2_23za2 = BgL_sc_statesza2_30za2[i$$55]
      }
      loop1 = v107;
      JAMScript.call(loop1, null, []);
      i$$55 = i$$55 - 1;
      v204 = i$$55 >= 0
    }
    optrOpnd$$2 = BgL_sc_statesza2_30za2;
    return[sc_nts_42, sc_starters_41, sc_enders_40, sc_predictors_39, sc_steps_38, sc_names_37, sc_toks_36, optrOpnd$$2, is_parsed, BgL_sc_derivzd2treesza2_47z70, BgL_sc_nbzd2derivzd2treesza2_48za2];
    return
  }
  function v86(defs$$2, conf) {
    function v85(rules$$2, conf$$1, rule_num) {
      var i$$54;
      var sc_i_17;
      var nt$$2;
      var l$$21;
      var sc_conf_18;
      var sc_i_19;
      var rule$$4;
      var v218 = rules$$2 instanceof sc_Pair;
      if(v218) {
        rule$$4 = rules$$2.car;
        var v3709 = sc_list(head$$2, rule_num);
        JAMScript.set(names, conf$$1, v3709);
        sc_i_19 = JAMScript.call(ind, null, [head$$2, nts]);
        var v205 = starters;
        var v206 = sc_i_19;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v1130 = starters[sc_i_19]
        }
        var v3710 = new sc_Pair(conf$$1, v1130);
        JAMScript.set(v205, v206, v3710);
        l$$21 = rule$$4;
        sc_conf_18 = conf$$1;
        var v209 = l$$21 instanceof sc_Pair;
        for(;v209;) {
          nt$$2 = l$$21.car;
          var v3711 = JAMScript.call(ind, null, [nt$$2, nts]);
          JAMScript.set(steps, sc_conf_18, v3711);
          sc_i_17 = JAMScript.call(ind, null, [nt$$2, nts]);
          var v207 = predictors;
          var v208 = sc_i_17;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v1131 = predictors[sc_i_17]
          }
          var v3712 = new sc_Pair(sc_conf_18, v1131);
          JAMScript.set(v207, v208, v3712);
          l$$21 = l$$21.cdr;
          sc_conf_18 = sc_conf_18 + 1;
          v209 = l$$21 instanceof sc_Pair
        }
        var v210 = steps;
        var v211 = sc_conf_18;
        var v1132 = JAMScript.call(ind, null, [head$$2, nts]);
        JAMScript.set(v210, v211, v1132 - nb_nts);
        i$$54 = JAMScript.call(ind, null, [head$$2, nts]);
        var v212 = enders;
        var v213 = i$$54;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v1133 = enders[i$$54]
        }
        var v3713 = new sc_Pair(sc_conf_18, v1133);
        JAMScript.set(v212, v213, v3713);
        var v214 = rules$$2.cdr;
        var v215 = sc_conf_18 + 1;
        var v216 = rule_num + 1;
        return JAMScript.call(rule_loop$$2, null, [v214, v215, v216])
      }else {
        var v217 = defs$$2.cdr;
        return JAMScript.call(def_loop, null, [v217, conf$$1])
      }
      return
    }
    var rule_loop$$2;
    var head$$2;
    var def$$2;
    var v219;
    var v1134 = defs$$2 instanceof sc_Pair;
    if(v1134) {
      def$$2 = defs$$2.car;
      head$$2 = def$$2.car;
      rule_loop$$2 = v85;
      var v1719 = def$$2.cdr;
      v219 = JAMScript.call(rule_loop$$2, null, [v1719, conf, 1])
    }else {
      v219 = undefined
    }
    return v219
  }
  function v84(defs$$1, BgL_sc_nbzd2confs_14zd2) {
    function v83(rules$$1, BgL_sc_nbzd2confs_15zd2) {
      var l$$20;
      var BgL_sc_nbzd2confs_16zd2;
      var rule$$3;
      var v224 = rules$$1 instanceof sc_Pair;
      if(v224) {
        rule$$3 = rules$$1.car;
        l$$20 = rule$$3;
        BgL_sc_nbzd2confs_16zd2 = BgL_sc_nbzd2confs_15zd2;
        var v220 = l$$20 instanceof sc_Pair;
        for(;v220;) {
          l$$20 = l$$20.cdr;
          BgL_sc_nbzd2confs_16zd2 = BgL_sc_nbzd2confs_16zd2 + 1;
          v220 = l$$20 instanceof sc_Pair
        }
        var v221 = rules$$1.cdr;
        var v222 = BgL_sc_nbzd2confs_16zd2 + 1;
        return JAMScript.call(rule_loop$$1, null, [v221, v222])
      }else {
        var v223 = defs$$1.cdr;
        return JAMScript.call(BgL_sc_defzd2loop_6zd2, null, [v223, BgL_sc_nbzd2confs_15zd2])
      }
      return
    }
    var rule_loop$$1;
    var def$$1;
    var v225;
    var v1135 = defs$$1 instanceof sc_Pair;
    if(v1135) {
      def$$1 = defs$$1.car;
      rule_loop$$1 = v83;
      var v1720 = def$$1.cdr;
      v225 = JAMScript.call(rule_loop$$1, null, [v1720, BgL_sc_nbzd2confs_14zd2])
    }else {
      v225 = BgL_sc_nbzd2confs_14zd2
    }
    return v225
  }
  function v82(defs, sc_nts_11) {
    function v81(rules, sc_nts_12) {
      var nt$$1;
      var l$$19;
      var sc_nts_13;
      var rule$$2;
      var v230 = rules instanceof sc_Pair;
      if(v230) {
        rule$$2 = rules.car;
        l$$19 = rule$$2;
        sc_nts_13 = sc_nts_12;
        var v227 = l$$19 instanceof sc_Pair;
        for(;v227;) {
          nt$$1 = l$$19.car;
          l$$19 = l$$19.cdr;
          var v226;
          var v1721 = sc_member(nt$$1, sc_nts_13);
          var v1136 = v1721 !== false;
          if(v1136) {
            v226 = sc_nts_13
          }else {
            v226 = new sc_Pair(nt$$1, sc_nts_13)
          }
          sc_nts_13 = v226;
          v227 = l$$19 instanceof sc_Pair
        }
        var v228 = rules.cdr;
        return JAMScript.call(rule_loop, null, [v228, sc_nts_13])
      }else {
        var v229 = defs.cdr;
        return JAMScript.call(BgL_sc_defzd2loop_9zd2, null, [v229, sc_nts_12])
      }
      return
    }
    var rule_loop;
    var head$$1;
    var def;
    var v231;
    var v1138 = defs instanceof sc_Pair;
    if(v1138) {
      def = defs.car;
      head$$1 = def.car;
      rule_loop = v81;
      var v1722 = def.cdr;
      var v2119;
      var v2757 = sc_member(head$$1, sc_nts_11);
      var v2433 = v2757 !== false;
      if(v2433) {
        v2119 = sc_nts_11
      }else {
        v2119 = new sc_Pair(head$$1, sc_nts_11)
      }
      var v1723 = v2119;
      v231 = JAMScript.call(rule_loop, null, [v1722, v1723])
    }else {
      var v1137 = sc_reverse(sc_nts_11);
      v231 = sc_list2vector(v1137)
    }
    return v231
  }
  function v80(nt, sc_nts_10) {
    var i$$53;
    var v232 = sc_nts_10.length;
    i$$53 = v232 - 1;
    for(;true;) {
      var v234 = i$$53 >= 0;
      if(v234) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v1139 = sc_nts_10[i$$53]
        }
        var v233 = sc_isEqual(v1139, nt);
        if(v233) {
          return i$$53
        }else {
          i$$53 = i$$53 - 1
        }
      }else {
        return false
      }
    }
    return
  }
  var i$$52;
  var parser_descr;
  var def_loop;
  var nb_nts;
  var names;
  var steps;
  var predictors;
  var enders;
  var starters;
  var nts;
  var sc_names_1;
  var sc_steps_2;
  var sc_predictors_3;
  var sc_enders_4;
  var sc_starters_5;
  var nb_confs;
  var BgL_sc_defzd2loop_6zd2;
  var BgL_sc_nbzd2nts_7zd2;
  var sc_nts_8;
  var BgL_sc_defzd2loop_9zd2;
  var ind;
  ind = v80;
  BgL_sc_defzd2loop_9zd2 = v82;
  sc_nts_8 = JAMScript.call(BgL_sc_defzd2loop_9zd2, null, [grammar, null]);
  BgL_sc_nbzd2nts_7zd2 = sc_nts_8.length;
  BgL_sc_defzd2loop_6zd2 = v84;
  var v235 = JAMScript.call(BgL_sc_defzd2loop_6zd2, null, [grammar, 0]);
  nb_confs = v235 + BgL_sc_nbzd2nts_7zd2;
  sc_starters_5 = sc_makeVector(BgL_sc_nbzd2nts_7zd2, null);
  sc_enders_4 = sc_makeVector(BgL_sc_nbzd2nts_7zd2, null);
  sc_predictors_3 = sc_makeVector(BgL_sc_nbzd2nts_7zd2, null);
  sc_steps_2 = sc_makeVector(nb_confs, false);
  sc_names_1 = sc_makeVector(nb_confs, false);
  nts = sc_nts_8;
  starters = sc_starters_5;
  enders = sc_enders_4;
  predictors = sc_predictors_3;
  steps = sc_steps_2;
  names = sc_names_1;
  nb_nts = sc_nts_8.length;
  i$$52 = nb_nts - 1;
  var v238 = i$$52 >= 0;
  for(;v238;) {
    JAMScript.set(sc_steps_2, i$$52, i$$52 - nb_nts);
    var v236 = sc_names_1;
    var v237 = i$$52;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1140 = sc_nts_8[i$$52]
    }
    var v3714 = sc_list(v1140, 0);
    v236[v237] = v3714;
    var v3715 = sc_list(i$$52);
    JAMScript.set(sc_enders_4, i$$52, v3715);
    i$$52 = i$$52 - 1;
    v238 = i$$52 >= 0
  }
  def_loop = v86;
  var v239 = sc_nts_8.length;
  JAMScript.call(def_loop, null, [grammar, v239]);
  parser_descr = [lexer, sc_nts_8, sc_starters_5, sc_enders_4, sc_predictors_3, sc_steps_2, sc_names_1];
  return v108;
  return
}
function v79(n$$12) {
  var optrOpnd$$1;
  var term$$7;
  var sc_n_20;
  var answer;
  var sc_term_21;
  var sc_term_22;
  rewrite_count_nboyer = 0;
  term$$7 = sc_const_4_nboyer;
  sc_n_20 = n$$12;
  var v1141 = sc_n_20 === 0;
  var v241 = !v1141;
  for(;v241;) {
    var v240 = new sc_Pair("\u1e9cf", null);
    term$$7 = sc_list("\u1e9cor", term$$7, v240);
    sc_n_20 = sc_n_20 - 1;
    var v1142 = sc_n_20 === 0;
    v241 = !v1142
  }
  sc_term_22 = term$$7;
  var v1143 = sc_term_22 instanceof sc_Pair;
  var v244 = !v1143;
  if(v244) {
    optrOpnd$$1 = sc_term_22
  }else {
    var v1144 = sc_term_22.car;
    var v242 = JAMScript.call(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer, null, [v1144]);
    var v1145 = sc_term_22.cdr;
    var v243 = JAMScript.call(translate_args_nboyer, null, [v1145]);
    optrOpnd$$1 = new sc_Pair(v242, v243)
  }
  var v1146;
  var v1726 = const_nboyer === null;
  if(v1726) {
    v1146 = null
  }else {
    var v2434 = const_nboyer.car;
    var v2120 = v2434.car;
    var v2758 = const_nboyer.car;
    var v2435 = v2758.cdr;
    var v2121 = JAMScript.call(translate_term_nboyer, null, [v2435]);
    var v1724 = new sc_Pair(v2120, v2121);
    var v2122 = const_nboyer.cdr;
    var v1725 = JAMScript.call(translate_alist_nboyer, null, [v2122]);
    v1146 = new sc_Pair(v1724, v1725)
  }
  var v245 = v1146;
  sc_term_21 = JAMScript.call(apply_subst_nboyer, null, [v245, optrOpnd$$1]);
  var v246 = JAMScript.call(rewrite_nboyer, null, [sc_term_21]);
  answer = JAMScript.call(tautologyp_nboyer, null, [v246, null, null]);
  sc_write(rewrite_count_nboyer);
  sc_display(" rewrites");
  sc_newline();
  var v247 = answer !== false;
  if(v247) {
    return rewrite_count_nboyer
  }else {
    return false
  }
  return
}
function v78() {
  var symbol_record$$2;
  var value$$30;
  var BgL_sc_symbolzd2record_16zd2;
  var sym$$5;
  var sc_sym_17;
  var term$$6;
  var lst$$7;
  var sc_term_18;
  var sc_term_19;
  BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer = null;
  if_constructor_nboyer = JAMScript.call(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer, null, ["\u1e9cif"]);
  sc_term_19 = new sc_Pair("\u1e9cf", null);
  var v1147;
  var v2123 = sc_term_19 instanceof sc_Pair;
  var v1729 = !v2123;
  if(v1729) {
    v1147 = sc_term_19
  }else {
    var v2124 = sc_term_19.car;
    var v1727 = JAMScript.call(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer, null, [v2124]);
    var v2125 = sc_term_19.cdr;
    var v1728 = JAMScript.call(translate_args_nboyer, null, [v2125]);
    v1147 = new sc_Pair(v1727, v1728)
  }
  false_term_nboyer = v1147;
  sc_term_18 = new sc_Pair("\u1e9ct", null);
  var v1148;
  var v2126 = sc_term_18 instanceof sc_Pair;
  var v1732 = !v2126;
  if(v1732) {
    v1148 = sc_term_18
  }else {
    var v2127 = sc_term_18.car;
    var v1730 = JAMScript.call(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer, null, [v2127]);
    var v2128 = sc_term_18.cdr;
    var v1731 = JAMScript.call(translate_args_nboyer, null, [v2128]);
    v1148 = new sc_Pair(v1730, v1731)
  }
  true_term_nboyer = v1148;
  lst$$7 = sc_const_3_nboyer;
  var v1149 = lst$$7 === null;
  var v252 = !v1149;
  for(;v252;) {
    term$$6 = lst$$7.car;
    var v1150 = term$$6 instanceof sc_Pair;
    if(v1150) {
      var v2129 = term$$6.car;
      var v1733 = v2129 === "\u1e9cequal";
      if(v1733) {
        var v2436 = term$$6.cdr;
        var v2130 = v2436.car;
        v1733 = v2130 instanceof sc_Pair
      }
      v1150 = v1733
    }
    var v251 = v1150;
    if(v251) {
      var v1151 = term$$6.cdr;
      var v248 = v1151.car;
      sc_sym_17 = v248.car;
      var v1152;
      var v2131 = term$$6 instanceof sc_Pair;
      var v1736 = !v2131;
      if(v1736) {
        v1152 = term$$6
      }else {
        var v2132 = term$$6.car;
        var v1734 = JAMScript.call(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer, null, [v2132]);
        var v2133 = term$$6.cdr;
        var v1735 = JAMScript.call(translate_args_nboyer, null, [v2133]);
        v1152 = new sc_Pair(v1734, v1735)
      }
      var v249 = v1152;
      var v2437 = term$$6.cdr;
      var v2134 = v2437.car;
      sym$$5 = v2134.car;
      BgL_sc_symbolzd2record_16zd2 = JAMScript.call(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer, null, [sym$$5]);
      var v250 = BgL_sc_symbolzd2record_16zd2[1];
      value$$30 = new sc_Pair(v249, v250);
      symbol_record$$2 = JAMScript.call(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer, null, [sc_sym_17]);
      symbol_record$$2[1] = value$$30
    }else {
      sc_error("ADD-LEMMA did not like term:  ", term$$6)
    }
    lst$$7 = lst$$7.cdr;
    var v1153 = lst$$7 === null;
    v252 = !v1153
  }
  return true;
  return
}
function v77(x$$78, lst$$6) {
  for(;true;) {
    var v254 = lst$$6 === null;
    if(v254) {
      return false
    }else {
      var v1737 = lst$$6.car;
      var v1154 = JAMScript.call(is_term_equal_nboyer, null, [x$$78, v1737]);
      var v253 = v1154 !== false;
      if(v253) {
        return true
      }else {
        lst$$6 = lst$$6.cdr
      }
    }
  }
  return
}
function v76(x$$77, y$$43) {
  var lst1$$1;
  var lst2$$1;
  var r2;
  var r1$$1;
  var v260 = x$$77 instanceof sc_Pair;
  if(v260) {
    var v259 = y$$43 instanceof sc_Pair;
    if(v259) {
      r1$$1 = x$$77.car;
      r2 = y$$43.car;
      var v1155 = r1$$1 === r2;
      var v258 = v1155 !== false;
      if(v258) {
        lst1$$1 = x$$77.cdr;
        lst2$$1 = y$$43.cdr;
        for(;true;) {
          var v257 = lst1$$1 === null;
          if(v257) {
            return lst2$$1 === null
          }else {
            var v256 = lst2$$1 === null;
            if(v256) {
              return false
            }else {
              var v1738 = lst1$$1.car;
              var v1739 = lst2$$1.car;
              var v1156 = JAMScript.call(is_term_equal_nboyer, null, [v1738, v1739]);
              var v255 = v1156 !== false;
              if(v255) {
                lst1$$1 = lst1$$1.cdr;
                lst2$$1 = lst2$$1.cdr
              }else {
                return false
              }
            }
          }
        }
      }else {
        return false
      }
    }else {
      return false
    }
  }else {
    return sc_isEqual(x$$77, y$$43)
  }
  return
}
function v75(n$$11) {
  var sc_n_15;
  var v261;
  var v1159 = sc_isEqual(n$$11, 1);
  if(v1159) {
    v261 = sc_list("\u1e9cimplies", 0, 1)
  }else {
    var v1740 = n$$11 - 1;
    var v1157 = sc_list("\u1e9cimplies", v1740, n$$11);
    sc_n_15 = n$$11 - 1;
    var v2135;
    var v2440 = sc_isEqual(sc_n_15, 1);
    if(v2440) {
      v2135 = sc_list("\u1e9cimplies", 0, 1)
    }else {
      var v2759 = sc_n_15 - 1;
      var v2438 = sc_list("\u1e9cimplies", v2759, sc_n_15);
      var v2760 = sc_n_15 - 1;
      var v2439 = JAMScript.call(trans_of_implies1_nboyer, null, [v2760]);
      v2135 = sc_list("\u1e9cand", v2438, v2439)
    }
    var v1158 = v2135;
    v261 = sc_list("\u1e9cand", v1157, v1158)
  }
  return v261
}
function v74(term1, term2$$1) {
  var lst1;
  var lst2;
  var temp_temp$$1;
  var v1160 = term2$$1 instanceof sc_Pair;
  var v271 = !v1160;
  if(v271) {
    temp_temp$$1 = sc_assq(term2$$1, unify_subst_nboyer);
    var v265 = temp_temp$$1 !== false;
    if(v265) {
      var v262 = temp_temp$$1.cdr;
      return JAMScript.call(is_term_equal_nboyer, null, [term1, v262])
    }else {
      var v264 = sc_isNumber(term2$$1);
      if(v264) {
        return sc_isEqual(term1, term2$$1)
      }else {
        var v263 = new sc_Pair(term2$$1, term1);
        unify_subst_nboyer = new sc_Pair(v263, unify_subst_nboyer);
        return true
      }
    }
  }else {
    var v1161 = term1 instanceof sc_Pair;
    var v270 = !v1161;
    if(v270) {
      return false
    }else {
      var v1162 = term1.car;
      var v1163 = term2$$1.car;
      var v269 = v1162 === v1163;
      if(v269) {
        lst1 = term1.cdr;
        lst2 = term2$$1.cdr;
        for(;true;) {
          var v268 = lst1 === null;
          if(v268) {
            return lst2 === null
          }else {
            var v267 = lst2 === null;
            if(v267) {
              return false
            }else {
              var v1741 = lst1.car;
              var v1742 = lst2.car;
              var v1164 = JAMScript.call(one_way_unify1_nboyer, null, [v1741, v1742]);
              var v266 = v1164 !== false;
              if(v266) {
                lst1 = lst1.cdr;
                lst2 = lst2.cdr
              }else {
                return false
              }
            }
          }
        }
      }else {
        return false
      }
    }
  }
  return
}
function v73(lst$$5) {
  var sc_lst_14;
  var v272;
  var v1167 = lst$$5 === null;
  if(v1167) {
    v272 = null
  }else {
    var v1743 = lst$$5.car;
    var v1165 = JAMScript.call(rewrite_nboyer, null, [v1743]);
    sc_lst_14 = lst$$5.cdr;
    var v2136;
    var v2443 = sc_lst_14 === null;
    if(v2443) {
      v2136 = null
    }else {
      var v2761 = sc_lst_14.car;
      var v2441 = JAMScript.call(rewrite_nboyer, null, [v2761]);
      var v2762 = sc_lst_14.cdr;
      var v2442 = JAMScript.call(rewrite_args_nboyer, null, [v2762]);
      v2136 = new sc_Pair(v2441, v2442)
    }
    var v1166 = v2136;
    v272 = new sc_Pair(v1165, v1166)
  }
  return v272
}
function v72(term$$5) {
  var term2;
  var sc_term_12;
  var lst$$4;
  var symbol_record$$1;
  var sc_lst_13;
  rewrite_count_nboyer = rewrite_count_nboyer + 1;
  var v1168 = term$$5 instanceof sc_Pair;
  var v278 = !v1168;
  if(v278) {
    return term$$5
  }else {
    var v273 = term$$5.car;
    sc_lst_13 = term$$5.cdr;
    var v1744;
    var v2139 = sc_lst_13 === null;
    if(v2139) {
      v1744 = null
    }else {
      var v2444 = sc_lst_13.car;
      var v2137 = JAMScript.call(rewrite_nboyer, null, [v2444]);
      var v2445 = sc_lst_13.cdr;
      var v2138 = JAMScript.call(rewrite_args_nboyer, null, [v2445]);
      v1744 = new sc_Pair(v2137, v2138)
    }
    var v274 = v1744;
    sc_term_12 = new sc_Pair(v273, v274);
    symbol_record$$1 = term$$5.car;
    lst$$4 = symbol_record$$1[1];
    for(;true;) {
      var v277 = lst$$4 === null;
      if(v277) {
        return sc_term_12
      }else {
        var v2763 = lst$$4.car;
        var v2446 = v2763.cdr;
        term2 = v2446.car;
        unify_subst_nboyer = null;
        var v1169 = JAMScript.call(one_way_unify1_nboyer, null, [sc_term_12, term2]);
        var v276 = v1169 !== false;
        if(v276) {
          var v2447 = lst$$4.car;
          var v2140 = v2447.cdr;
          var v1745 = v2140.cdr;
          var v1170 = v1745.car;
          var v275 = JAMScript.call(apply_subst_nboyer, null, [unify_subst_nboyer, v1170]);
          return JAMScript.call(rewrite_nboyer, null, [v275])
        }else {
          lst$$4 = lst$$4.cdr
        }
      }
    }
  }
  return
}
function v71(sc_x_11, true_lst, false_lst) {
  var tmp1125;
  var x$$76;
  var tmp1126;
  var sc_x_8;
  var sc_tmp1125_9;
  var sc_tmp1126_10;
  for(;true;) {
    sc_tmp1126_10 = JAMScript.call(is_term_equal_nboyer, null, [sc_x_11, true_term_nboyer]);
    var v2141;
    var v2448 = sc_tmp1126_10 !== false;
    if(v2448) {
      v2141 = sc_tmp1126_10
    }else {
      v2141 = JAMScript.call(is_term_member_nboyer, null, [sc_x_11, true_lst])
    }
    var v1171 = v2141;
    var v289 = v1171 !== false;
    if(v289) {
      return true
    }else {
      sc_tmp1125_9 = JAMScript.call(is_term_equal_nboyer, null, [sc_x_11, false_term_nboyer]);
      var v2142;
      var v2449 = sc_tmp1125_9 !== false;
      if(v2449) {
        v2142 = sc_tmp1125_9
      }else {
        v2142 = JAMScript.call(is_term_member_nboyer, null, [sc_x_11, false_lst])
      }
      var v1172 = v2142;
      var v288 = v1172 !== false;
      if(v288) {
        return false
      }else {
        var v1173 = sc_x_11 instanceof sc_Pair;
        var v287 = !v1173;
        if(v287) {
          return false
        }else {
          var v1174 = sc_x_11.car;
          var v286 = v1174 === if_constructor_nboyer;
          if(v286) {
            var v2450 = sc_x_11.cdr;
            sc_x_8 = v2450.car;
            tmp1126 = JAMScript.call(is_term_equal_nboyer, null, [sc_x_8, true_term_nboyer]);
            var v2143;
            var v2451 = tmp1126 !== false;
            if(v2451) {
              v2143 = tmp1126
            }else {
              v2143 = JAMScript.call(is_term_member_nboyer, null, [sc_x_8, true_lst])
            }
            var v1175 = v2143;
            var v285 = v1175 !== false;
            if(v285) {
              var v1176 = sc_x_11.cdr;
              var v279 = v1176.cdr;
              sc_x_11 = v279.car
            }else {
              var v2452 = sc_x_11.cdr;
              x$$76 = v2452.car;
              tmp1125 = JAMScript.call(is_term_equal_nboyer, null, [x$$76, false_term_nboyer]);
              var v2144;
              var v2453 = tmp1125 !== false;
              if(v2453) {
                v2144 = tmp1125
              }else {
                v2144 = JAMScript.call(is_term_member_nboyer, null, [x$$76, false_lst])
              }
              var v1177 = v2144;
              var v284 = v1177 !== false;
              if(v284) {
                var v1746 = sc_x_11.cdr;
                var v1178 = v1746.cdr;
                var v280 = v1178.cdr;
                sc_x_11 = v280.car
              }else {
                var v2454 = sc_x_11.cdr;
                var v2145 = v2454.cdr;
                var v1747 = v2145.car;
                var v2455 = sc_x_11.cdr;
                var v2146 = v2455.car;
                var v1748 = new sc_Pair(v2146, true_lst);
                var v1179 = JAMScript.call(tautologyp_nboyer, null, [v1747, v1748, false_lst]);
                var v283 = v1179 !== false;
                if(v283) {
                  var v1180 = sc_x_11.cdr;
                  var v281 = v1180.car;
                  false_lst = new sc_Pair(v281, false_lst);
                  var v1749 = sc_x_11.cdr;
                  var v1181 = v1749.cdr;
                  var v282 = v1181.cdr;
                  sc_x_11 = v282.car
                }else {
                  return false
                }
              }
            }
          }else {
            return false
          }
        }
      }
    }
  }
  return
}
function v70(alist$$2, lst$$3) {
  var sc_lst_7;
  var v290;
  var v1184 = lst$$3 === null;
  if(v1184) {
    v290 = null
  }else {
    var v1750 = lst$$3.car;
    var v1182 = JAMScript.call(apply_subst_nboyer, null, [alist$$2, v1750]);
    sc_lst_7 = lst$$3.cdr;
    var v2147;
    var v2458 = sc_lst_7 === null;
    if(v2458) {
      v2147 = null
    }else {
      var v2764 = sc_lst_7.car;
      var v2456 = JAMScript.call(apply_subst_nboyer, null, [alist$$2, v2764]);
      var v2765 = sc_lst_7.cdr;
      var v2457 = JAMScript.call(apply_subst_lst_nboyer, null, [alist$$2, v2765]);
      v2147 = new sc_Pair(v2456, v2457)
    }
    var v1183 = v2147;
    v290 = new sc_Pair(v1182, v1183)
  }
  return v290
}
function v69(alist$$1, term$$4) {
  var lst$$2;
  var temp_temp;
  var v291;
  var v1751 = term$$4 instanceof sc_Pair;
  var v1187 = !v1751;
  if(v1187) {
    temp_temp = sc_assq(term$$4, alist$$1);
    var v1752;
    var v2148 = temp_temp !== false;
    if(v2148) {
      v1752 = temp_temp.cdr
    }else {
      v1752 = term$$4
    }
    v291 = v1752
  }else {
    var v1185 = term$$4.car;
    lst$$2 = term$$4.cdr;
    var v2149;
    var v2461 = lst$$2 === null;
    if(v2461) {
      v2149 = null
    }else {
      var v2766 = lst$$2.car;
      var v2459 = JAMScript.call(apply_subst_nboyer, null, [alist$$1, v2766]);
      var v2767 = lst$$2.cdr;
      var v2460 = JAMScript.call(apply_subst_lst_nboyer, null, [alist$$1, v2767]);
      v2149 = new sc_Pair(v2459, v2460)
    }
    var v1186 = v2149;
    v291 = new sc_Pair(v1185, v1186)
  }
  return v291
}
function v68(alist) {
  var sc_alist_6;
  var term$$3;
  var v292;
  var v1190 = alist === null;
  if(v1190) {
    v292 = null
  }else {
    var v2150 = alist.car;
    var v1753 = v2150.car;
    var v2462 = alist.car;
    term$$3 = v2462.cdr;
    var v2463;
    var v3027 = term$$3 instanceof sc_Pair;
    var v2770 = !v3027;
    if(v2770) {
      v2463 = term$$3
    }else {
      var v3028 = term$$3.car;
      var v2768 = JAMScript.call(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer, null, [v3028]);
      var v3029 = term$$3.cdr;
      var v2769 = JAMScript.call(translate_args_nboyer, null, [v3029]);
      v2463 = new sc_Pair(v2768, v2769)
    }
    var v1754 = v2463;
    var v1188 = new sc_Pair(v1753, v1754);
    sc_alist_6 = alist.cdr;
    var v2151;
    var v2466 = sc_alist_6 === null;
    if(v2466) {
      v2151 = null
    }else {
      var v3030 = sc_alist_6.car;
      var v2771 = v3030.car;
      var v3266 = sc_alist_6.car;
      var v3031 = v3266.cdr;
      var v2772 = JAMScript.call(translate_term_nboyer, null, [v3031]);
      var v2464 = new sc_Pair(v2771, v2772);
      var v2773 = sc_alist_6.cdr;
      var v2465 = JAMScript.call(translate_alist_nboyer, null, [v2773]);
      v2151 = new sc_Pair(v2464, v2465)
    }
    var v1189 = v2151;
    v292 = new sc_Pair(v1188, v1189)
  }
  return v292
}
function v67(sym$$4) {
  var r;
  var x$$75;
  x$$75 = sc_assq(sym$$4, BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer);
  var v1191;
  var v1755 = x$$75 !== false;
  if(v1755) {
    v1191 = x$$75.cdr
  }else {
    r = [sym$$4, null];
    var v2467 = new sc_Pair(sym$$4, r);
    BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer = new sc_Pair(v2467, BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer);
    v1191 = r
  }
  return v1191
}
function v66(term$$2) {
  var optrOpnd;
  var tail1131;
  var L1127;
  var falseHead1130;
  var symbol_record;
  var v1192 = term$$2 instanceof sc_Pair;
  var v296 = !v1192;
  if(v296) {
    return term$$2
  }else {
    falseHead1130 = new sc_Pair(null, null);
    L1127 = term$$2.cdr;
    tail1131 = falseHead1130;
    var v1193 = L1127 === null;
    var v294 = !v1193;
    for(;v294;) {
      var v293 = tail1131;
      var v1756 = L1127.car;
      var v1194 = JAMScript.call(untranslate_term_nboyer, null, [v1756]);
      var v3716 = new sc_Pair(v1194, null);
      v293.cdr = v3716;
      tail1131 = tail1131.cdr;
      L1127 = L1127.cdr;
      var v1195 = L1127 === null;
      v294 = !v1195
    }
    optrOpnd = falseHead1130.cdr;
    symbol_record = term$$2.car;
    var v295 = symbol_record[0];
    return new sc_Pair(v295, optrOpnd)
  }
  return
}
function v65(lst$$1) {
  var sc_lst_5;
  var term$$1;
  var v297;
  var v1198 = lst$$1 === null;
  if(v1198) {
    v297 = null
  }else {
    term$$1 = lst$$1.car;
    var v2152;
    var v2774 = term$$1 instanceof sc_Pair;
    var v2470 = !v2774;
    if(v2470) {
      v2152 = term$$1
    }else {
      var v2775 = term$$1.car;
      var v2468 = JAMScript.call(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer, null, [v2775]);
      var v2776 = term$$1.cdr;
      var v2469 = JAMScript.call(translate_args_nboyer, null, [v2776]);
      v2152 = new sc_Pair(v2468, v2469)
    }
    var v1196 = v2152;
    sc_lst_5 = lst$$1.cdr;
    var v2153;
    var v2473 = sc_lst_5 === null;
    if(v2473) {
      v2153 = null
    }else {
      var v2777 = sc_lst_5.car;
      var v2471 = JAMScript.call(translate_term_nboyer, null, [v2777]);
      var v2778 = sc_lst_5.cdr;
      var v2472 = JAMScript.call(translate_args_nboyer, null, [v2778]);
      v2153 = new sc_Pair(v2471, v2472)
    }
    var v1197 = v2153;
    v297 = new sc_Pair(v1196, v1197)
  }
  return v297
}
function v64(term) {
  var lst;
  var v298;
  var v1757 = term instanceof sc_Pair;
  var v1201 = !v1757;
  if(v1201) {
    v298 = term
  }else {
    var v1758 = term.car;
    var v1199 = JAMScript.call(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer, null, [v1758]);
    lst = term.cdr;
    var v2154;
    var v2476 = lst === null;
    if(v2476) {
      v2154 = null
    }else {
      var v2779 = lst.car;
      var v2474 = JAMScript.call(translate_term_nboyer, null, [v2779]);
      var v2780 = lst.cdr;
      var v2475 = JAMScript.call(translate_args_nboyer, null, [v2780]);
      v2154 = new sc_Pair(v2474, v2475)
    }
    var v1200 = v2154;
    v298 = new sc_Pair(v1199, v1200)
  }
  return v298
}
function v63() {
  return true
}
function v62() {
  return true
}
function v61() {
  function v60(rewrites) {
    var v299 = sc_isNumber(rewrites);
    if(v299) {
      switch(n$$10) {
        case 0:
          return rewrites === 95024;
        case 1:
          return rewrites === 591777;
        case 2:
          return rewrites === 1813975;
        case 3:
          return rewrites === 5375678;
        case 4:
          return rewrites === 16445406;
        case 5:
          return rewrites === 51507739;
        default:
          return true
      }
    }else {
      return false
    }
    return
  }
  function v59() {
    return JAMScript.call(BgL_testzd2boyerzd2, null, [n$$10])
  }
  var args$$5 = null;
  var v300 = arguments.length;
  var sc_tmp = v300 - 1;
  var v302 = sc_tmp >= 0;
  for(;v302;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v301 = arguments[sc_tmp]
    }
    args$$5 = sc_cons(v301, args$$5);
    sc_tmp = sc_tmp - 1;
    v302 = sc_tmp >= 0
  }
  var n$$10;
  var v1759;
  var v2155 = args$$5 === null;
  if(v2155) {
    v1759 = 0
  }else {
    v1759 = args$$5.car
  }
  n$$10 = v1759;
  JAMScript.call(BgL_setupzd2boyerzd2, null, []);
  var v1760 = JAMScript.call(sc_number2string, null, [n$$10]);
  var v1202 = "nboyer" + v1760;
  return JAMScript.call(BgL_runzd2benchmarkzd2, null, [v1202, 1, v59, v60])
}
function v58() {
  var v1203 = this.charAt(0);
  var v306 = v1203 === sc_SYMBOL_PREFIX;
  if(v306) {
    return this.slice(1)
  }else {
    var v1204 = this.charAt(0);
    var v305 = v1204 === sc_KEYWORD_PREFIX;
    if(v305) {
      var v303 = this.slice(1);
      return":" + v303
    }else {
      var v1205 = sc_escapeWriteString(this);
      var v304 = '"' + v1205;
      return v304 + '"'
    }
  }
  return
}
function v57() {
  var v1206 = this.charAt(0);
  var v309 = v1206 === sc_SYMBOL_PREFIX;
  if(v309) {
    return this.slice(1)
  }else {
    var v1207 = this.charAt(0);
    var v308 = v1207 === sc_KEYWORD_PREFIX;
    if(v308) {
      var v307 = this.slice(1);
      return":" + v307
    }else {
      return JAMScript.call(this.toString, this, [])
    }
  }
  return
}
function v56() {
  function v55(sym$$3) {
    counter = counter + 1;
    var v310 = !sym$$3;
    if(v310) {
      sym$$3 = sc_SYMBOL_PREFIX
    }
    var v1761 = sym$$3 + "s";
    var v1208 = v1761 + counter;
    var v311 = v1208 + "~";
    return v311 + "^sC-GeNsYm "
  }
  var counter = 1E3;
  return v55
}
function v54(symb$$4) {
  var v1209 = symb$$4 + "use";
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v317 = this[v1209]
  }
  if(v317) {
    var v312 = symb$$4 + "nb";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var nb$$5 = this[v312]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1210 = this[symb$$4]
    }
    var v2156 = symb$$4;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v2477 = this[symb$$4]
    }
    JAMScript.set(this, v2156, v2477 - 1);
    var v315 = v1210 === 0;
    if(v315) {
      delete this[symb$$4];
      var v313 = symb$$4 + "nb";
      delete this[v313];
      var v314 = symb$$4 + "use";
      delete this[v314]
    }
    var v316 = "#" + nb$$5;
    return v316 + "#"
  }
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1211 = this[symb$$4]
  }
  var v2157 = symb$$4;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v2478 = this[symb$$4]
  }
  JAMScript.set(this, v2157, v2478 - 1);
  var v320 = v1211 === 0;
  if(v320) {
    delete this[symb$$4];
    var v318 = symb$$4 + "nb";
    delete this[v318];
    var v319 = symb$$4 + "use";
    delete this[v319]
  }
  var res$$28 = "";
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1212 = this[symb$$4]
  }
  var v322 = v1212 !== undefined;
  if(v322) {
    var v321 = symb$$4 + "use";
    JAMScript.set(this, v321, true);
    var v2479 = symb$$4 + "nb";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v2158 = this[v2479]
    }
    var v1762 = "#" + v2158;
    var v1213 = v1762 + "=";
    res$$28 = res$$28 + v1213
  }
  res$$28 = res$$28 + "#(";
  var i$$46 = 0;
  var v1214 = this.length;
  var v324 = i$$46 < v1214;
  for(;v324;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1763 = this[i$$46]
    }
    var v1215 = sc_genToWriteCircleString(v1763, symb$$4);
    res$$28 = res$$28 + v1215;
    var v1764 = this.length;
    var v1216 = v1764 - 1;
    var v323 = i$$46 < v1216;
    if(v323) {
      res$$28 = res$$28 + " "
    }
    i$$46 = i$$46 + 1;
    var v1217 = this.length;
    v324 = i$$46 < v1217
  }
  res$$28 = res$$28 + ")";
  return res$$28
}
function v53(symb$$3, inList) {
  var v1218 = symb$$3 + "use";
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v331 = this[v1218]
  }
  if(v331) {
    var v325 = symb$$3 + "nb";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var nb$$4 = this[v325]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1219 = this[symb$$3]
    }
    var v2159 = symb$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v2480 = this[symb$$3]
    }
    JAMScript.set(this, v2159, v2480 - 1);
    var v328 = v1219 === 0;
    if(v328) {
      delete this[symb$$3];
      var v326 = symb$$3 + "nb";
      delete this[v326];
      var v327 = symb$$3 + "use";
      delete this[v327]
    }
    if(inList) {
      var v329 = ". #" + nb$$4;
      return v329 + "#"
    }else {
      var v330 = "#" + nb$$4;
      return v330 + "#"
    }
  }
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1220 = this[symb$$3]
  }
  var v2160 = symb$$3;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v2481 = this[symb$$3]
  }
  JAMScript.set(this, v2160, v2481 - 1);
  var v334 = v1220 === 0;
  if(v334) {
    delete this[symb$$3];
    var v332 = symb$$3 + "nb";
    delete this[v332];
    var v333 = symb$$3 + "use";
    delete this[v333]
  }
  var res$$27 = "";
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1221 = this[symb$$3]
  }
  var v336 = v1221 !== undefined;
  if(v336) {
    var v335 = symb$$3 + "use";
    JAMScript.set(this, v335, true);
    if(inList) {
      var v2482 = symb$$3 + "nb";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v2161 = this[v2482]
      }
      var v1765 = ". #" + v2161;
      var v1222 = v1765 + "=";
      res$$27 = res$$27 + v1222
    }else {
      var v2483 = symb$$3 + "nb";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v2162 = this[v2483]
      }
      var v1766 = "#" + v2162;
      var v1223 = v1766 + "=";
      res$$27 = res$$27 + v1223
    }
    inList = false
  }
  var v337 = !inList;
  if(v337) {
    res$$27 = res$$27 + "("
  }
  var v1767 = this.car;
  var v1224 = sc_genToWriteCircleString(v1767, symb$$3);
  res$$27 = res$$27 + v1224;
  var v1225 = this.cdr;
  var v339 = sc_isPair(v1225);
  if(v339) {
    var v2163 = this.cdr;
    var v1768 = JAMScript.call(v2163.sc_toWriteCircleString, v2163, [symb$$3, true]);
    var v1226 = " " + v1768;
    res$$27 = res$$27 + v1226
  }else {
    var v1227 = this.cdr;
    var v338 = v1227 !== null;
    if(v338) {
      var v2164 = this.cdr;
      var v1769 = sc_genToWriteCircleString(v2164, symb$$3);
      var v1228 = " . " + v1769;
      res$$27 = res$$27 + v1228
    }
  }
  var v340 = !inList;
  if(v340) {
    res$$27 = res$$27 + ")"
  }
  return res$$27
}
function v52() {
  return
}
function v51(s$$20) {
  throw"don't write on ErrorPort!";
}
function v50() {
  var v341 = this.res;
  return sc_jsstring2string(v341)
}
function v49(s$$19) {
  var v1229 = this.res;
  this.res = v1229 + s$$19;
  return
}
function v48() {
  return
}
function v47(obj$$17) {
  return
}
function v46() {
  function readList(listBeginType) {
    function matchesPeer(open$$2, close) {
      var v1230 = open$$2 === 1;
      if(v1230) {
        v1230 = close === 2
      }
      var v342 = v1230;
      var v1232 = !v342;
      if(v1232) {
        var v1770 = open$$2 === 3;
        if(v1770) {
          v1770 = close === 4
        }
        var v1231 = v1770;
        var v1772 = !v1231;
        if(v1772) {
          var v1771 = open$$2 === 5;
          if(v1771) {
            v1771 = close === 6
          }
          v1231 = v1771
        }
        v342 = v1231
      }
      return v342
    }
    var res$$25 = null;
    for(;true;) {
      var token$$5 = JAMScript.call(tokenizer$$1.peekToken, tokenizer$$1, []);
      var v349 = token$$5.type;
      switch(v349) {
        case 2:
        ;
        case 4:
        ;
        case 6:
          var v1233 = token$$5.type;
          var v344 = matchesPeer(listBeginType, v1233);
          if(v344) {
            JAMScript.call(tokenizer$$1.readToken, tokenizer$$1, []);
            return sc_reverseBang(res$$25)
          }else {
            var v1234 = "closing par doesn't match: " + listBeginType;
            var v343 = v1234 + " ";
            throw v343 + listEndType;
          }
        ;
        case 0:
          throw"unexpected end of file";;
        case 10:
          JAMScript.call(tokenizer$$1.readToken, tokenizer$$1, []);
          var cdr$$3 = JAMScript.call(this.read, this, []);
          var par = JAMScript.call(tokenizer$$1.readToken, tokenizer$$1, []);
          var v1773 = par.type;
          var v1235 = matchesPeer(listBeginType, v1773);
          var v347 = !v1235;
          if(v347) {
            var v1236 = "closing par doesn't match: " + listBeginType;
            var v345 = v1236 + " ";
            var v346 = par.type;
            throw v345 + v346;
          }else {
            return sc_reverseAppendBang(res$$25, cdr$$3)
          }
        ;
        default:
          var v348 = JAMScript.call(this.read, this, []);
          res$$25 = sc_cons(v348, res$$25)
      }
    }
    return
  }
  function readVector() {
    var a$$11 = new Array;
    for(;true;) {
      var token$$6 = JAMScript.call(tokenizer$$1.peekToken, tokenizer$$1, []);
      var v351 = token$$6.type;
      switch(v351) {
        case 2:
          JAMScript.call(tokenizer$$1.readToken, tokenizer$$1, []);
          return a$$11;
        default:
          var v350 = JAMScript.call(this.read, this, []);
          a$$11.push(v350)
      }
    }
    return
  }
  function storeRefence(nb$$2) {
    var tmp$$18 = JAMScript.call(this.read, this, []);
    var v352 = this.backref;
    JAMScript.set(v352, nb$$2, tmp$$18);
    return tmp$$18
  }
  function readReference(nb$$3) {
    var v1237 = this.backref;
    var v354 = nb$$3 in v1237;
    if(v354) {
      var v353 = this.backref;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        return v353[nb$$3]
      }
    }else {
      throw"bad reference: " + nb$$3;
    }
    return
  }
  var tokenizer$$1 = this.tokenizer;
  var token$$4 = JAMScript.call(tokenizer$$1.readToken, tokenizer$$1, []);
  var v1238 = token$$4.type;
  var v355 = v1238 === 13;
  if(v355) {
    throw token$$4.val;
  }
  var v365 = token$$4.type;
  switch(v365) {
    case 1:
    ;
    case 3:
    ;
    case 5:
      var v356 = token$$4.type;
      return readList.call(this, v356);
    case 8:
      var v1239 = JAMScript.call(this.read, this, []);
      var v357 = sc_cons(v1239, null);
      return sc_cons("quote", v357);
    case 11:
      var v358 = token$$4.val;
      return sc_jsstring2string(v358);
    case 20:
      var v359 = token$$4.val;
      return new sc_Char(v359);
    case 14:
      return readVector.call(this);
    case 18:
      var v360 = token$$4.val;
      return readReference.call(this, v360);
    case 19:
      var v361 = token$$4.val;
      return storeRefence.call(this, v361);
    case 9:
      var v362 = token$$4.val;
      return sc_jsstring2symbol(v362);
    case 0:
    ;
    case 12:
    ;
    case 15:
    ;
    case 16:
    ;
    case 17:
      return token$$4.val;
    default:
      var v1774 = token$$4.type;
      var v1240 = "unexpected token " + v1774;
      var v363 = v1240 + " ";
      var v364 = token$$4.val;
      throw v363 + v364;
  }
  return
}
function v45() {
  function isNumberChar(c$$15) {
    var v366 = c$$15 >= "0";
    if(v366) {
      v366 = c$$15 <= "9"
    }
    return v366
  }
  function isIdOrNumberChar(c$$16) {
    var v1241 = SC_ID_CLASS.indexOf(c$$16);
    var v367 = v1241 != -1;
    var v1243 = !v367;
    if(v1243) {
      var v1242 = c$$16 >= "0";
      if(v1242) {
        v1242 = c$$16 <= "9"
      }
      v367 = v1242
    }
    return v367
  }
  function isWhitespace(c$$17) {
    var v368 = c$$17 === " ";
    var v1245 = !v368;
    if(v1245) {
      var v1244 = c$$17 === "\r";
      var v1776 = !v1244;
      if(v1776) {
        var v1775 = c$$17 === "\n";
        var v2166 = !v1775;
        if(v2166) {
          var v2165 = c$$17 === "\t";
          var v2484 = !v2165;
          if(v2484) {
            v2165 = c$$17 === "\f"
          }
          v1775 = v2165
        }
        v1244 = v1775
      }
      v368 = v1244
    }
    return v368
  }
  function isWhitespaceOrEOF(c$$18) {
    var v369 = isWhitespace(c$$18);
    var v1246 = !v369;
    if(v1246) {
      v369 = c$$18 === SC_EOF_OBJECT
    }
    return v369
  }
  function readString() {
    res = "";
    for(;true;) {
      var c$$19 = JAMScript.call(port$$1.readChar, port$$1, []);
      switch(c$$19) {
        case '"':
          return new sc_Token(11, res);
        case "\\":
          var tmp$$16 = JAMScript.call(port$$1.readChar, port$$1, []);
          switch(tmp$$16) {
            case "0":
              res = res + "\x00";
              break;
            case "a":
              res = res + "a";
              break;
            case "b":
              res = res + "\b";
              break;
            case "f":
              res = res + "\f";
              break;
            case "n":
              res = res + "\n";
              break;
            case "r":
              res = res + "\r";
              break;
            case "t":
              res = res + "\t";
              break;
            case "v":
              res = res + "\v";
              break;
            case '"':
              res = res + '"';
              break;
            case "\\":
              res = res + "\\";
              break;
            case "x":
              var nb = 0;
              for(;true;) {
                var hexC = JAMScript.call(port$$1.peekChar, port$$1, []);
                var v1247 = hexC >= "0";
                if(v1247) {
                  v1247 = hexC <= "9"
                }
                var v378 = v1247;
                if(v378) {
                  JAMScript.call(port$$1.readChar, port$$1, []);
                  var v1248 = nb * 16;
                  var v1249 = hexC.charCodeAt(0);
                  var v370 = v1248 + v1249;
                  var v371 = "0".charCodeAt(0);
                  nb = v370 - v371
                }else {
                  var v1250 = hexC >= "a";
                  if(v1250) {
                    v1250 = hexC <= "f"
                  }
                  var v377 = v1250;
                  if(v377) {
                    JAMScript.call(port$$1.readChar, port$$1, []);
                    var v1251 = nb * 16;
                    var v1252 = hexC.charCodeAt(0);
                    var v372 = v1251 + v1252;
                    var v373 = "a".charCodeAt(0);
                    nb = v372 - v373
                  }else {
                    var v1253 = hexC >= "A";
                    if(v1253) {
                      v1253 = hexC <= "F"
                    }
                    var v376 = v1253;
                    if(v376) {
                      JAMScript.call(port$$1.readChar, port$$1, []);
                      var v1254 = nb * 16;
                      var v1255 = hexC.charCodeAt(0);
                      var v374 = v1254 + v1255;
                      var v375 = "A".charCodeAt(0);
                      nb = v374 - v375
                    }else {
                      var v1256 = String.fromCharCode(nb);
                      res = res + v1256;
                      break
                    }
                  }
                }
              }
              break;
            default:
              var v380 = tmp$$16 === SC_EOF_OBJECT;
              if(v380) {
                var v379 = "unclosed string-literal" + res;
                return new sc_Token(13, v379)
              }
              res = res + tmp$$16
          }
          break;
        default:
          var v382 = c$$19 === SC_EOF_OBJECT;
          if(v382) {
            var v381 = "unclosed string-literal" + res;
            return new sc_Token(13, v381)
          }
          res = res + c$$19
      }
    }
    return
  }
  function readIdOrNumber(firstChar) {
    var res$$23 = firstChar;
    var v1257 = JAMScript.call(port$$1.peekChar, port$$1, []);
    var v383 = isIdOrNumberChar(v1257);
    for(;v383;) {
      var v1258 = JAMScript.call(port$$1.readChar, port$$1, []);
      res$$23 = res$$23 + v1258;
      var v1259 = JAMScript.call(port$$1.peekChar, port$$1, []);
      v383 = isIdOrNumberChar(v1259)
    }
    var v385 = isNaN(res$$23);
    if(v385) {
      return new sc_Token(9, res$$23)
    }else {
      var v384 = res$$23 - 0;
      return new sc_Token(12, v384)
    }
    return
  }
  function skipWhitespaceAndComments() {
    var done = false;
    var v389 = !done;
    for(;v389;) {
      done = true;
      var v1260 = JAMScript.call(port$$1.peekChar, port$$1, []);
      var v386 = isWhitespace(v1260);
      for(;v386;) {
        JAMScript.call(port$$1.readChar, port$$1, []);
        var v1261 = JAMScript.call(port$$1.peekChar, port$$1, []);
        v386 = isWhitespace(v1261)
      }
      var v1262 = JAMScript.call(port$$1.peekChar, port$$1, []);
      var v388 = v1262 === ";";
      if(v388) {
        JAMScript.call(port$$1.readChar, port$$1, []);
        done = false;
        for(;true;) {
          curChar = JAMScript.call(port$$1.readChar, port$$1, []);
          var v1263 = curChar === SC_EOF_OBJECT;
          var v1777 = !v1263;
          if(v1777) {
            v1263 = curChar === "\n"
          }
          var v387 = v1263;
          if(v387) {
            break
          }
        }
      }
      v389 = !done
    }
    return
  }
  function readSharp() {
    var c$$20 = JAMScript.call(port$$1.readChar, port$$1, []);
    var v390 = isWhitespace(c$$20);
    if(v390) {
      return new sc_Token(13, "bad #-pattern0.")
    }
    var v396 = isNumberChar(c$$20);
    if(v396) {
      var nb$$1 = c$$20 - 0;
      var v1264 = JAMScript.call(port$$1.peekChar, port$$1, []);
      var v393 = isNumberChar(v1264);
      for(;v393;) {
        var v391 = nb$$1 * 10;
        var v1265 = JAMScript.call(port$$1.readChar, port$$1, []);
        var v392 = v1265 - 0;
        nb$$1 = v391 + v392;
        var v1266 = JAMScript.call(port$$1.peekChar, port$$1, []);
        v393 = isNumberChar(v1266)
      }
      var v395 = JAMScript.call(port$$1.readChar, port$$1, []);
      switch(v395) {
        case "#":
          return new sc_Token(18, nb$$1);
        case "=":
          return new sc_Token(19, nb$$1);
        default:
          var v394 = "bad #-pattern1." + nb$$1;
          return new sc_Token(13, v394)
      }
    }
    var v397 = c$$20 === "(";
    if(v397) {
      return new sc_Token(14)
    }
    var v405 = c$$20 === "\\";
    if(v405) {
      var tmp$$17 = "";
      var v1778 = JAMScript.call(port$$1.peekChar, port$$1, []);
      var v1267 = isWhitespaceOrEOF(v1778);
      var v398 = !v1267;
      for(;v398;) {
        var v1268 = JAMScript.call(port$$1.readChar, port$$1, []);
        tmp$$17 = tmp$$17 + v1268;
        var v1779 = JAMScript.call(port$$1.peekChar, port$$1, []);
        var v1269 = isWhitespaceOrEOF(v1779);
        v398 = !v1269
      }
      var v404 = tmp$$17.length;
      switch(v404) {
        case 0:
          var v1270 = port$$1.peekChar;
          var v400 = sc_isEOFObject(v1270);
          if(v400) {
            return new sc_Token(13, "bad #-pattern2.")
          }else {
            var v399 = JAMScript.call(port$$1.readChar, port$$1, []);
            return new sc_Token(20, v399)
          }
        ;
        case 1:
          return new sc_Token(20, tmp$$17);
        default:
          var v401 = sc_Char.readable2char;
          var v402 = tmp$$17.toLowerCase();
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var entry$$1 = v401[v402]
          }
          if(entry$$1) {
            return new sc_Token(20, entry$$1)
          }else {
            var v403 = "unknown character description: #\\" + tmp$$17;
            return new sc_Token(13, v403)
          }
      }
    }
    var res$$24;
    var needing;
    switch(c$$20) {
      case "t":
        res$$24 = new sc_Token(15, true);
        needing = "";
        break;
      case "f":
        res$$24 = new sc_Token(16, false);
        needing = "";
        break;
      case "u":
        res$$24 = new sc_Token(17, undefined);
        needing = "nspecified";
        break;
      default:
        var v406 = "bad #-pattern3: " + c$$20;
        return new sc_Token(13, v406)
    }
    for(;true;) {
      c$$20 = JAMScript.call(port$$1.peekChar, port$$1, []);
      var v1780 = isWhitespaceOrEOF(c$$20);
      var v2167 = !v1780;
      if(v2167) {
        v1780 = c$$20 === ")"
      }
      var v1271 = v1780;
      if(v1271) {
        v1271 = needing == ""
      }
      var v410 = v1271;
      if(v410) {
        return res$$24
      }else {
        var v1272 = isWhitespace(c$$20);
        var v1781 = !v1272;
        if(v1781) {
          v1272 = needing == ""
        }
        var v409 = v1272;
        if(v409) {
          var v1782 = "bad #-pattern4 " + c$$20;
          var v1273 = v1782 + " ";
          var v407 = v1273 + needing;
          return new sc_Token(13, v407)
        }else {
          var v1274 = needing.charAt(0);
          var v408 = v1274 == c$$20;
          if(v408) {
            JAMScript.call(port$$1.readChar, port$$1, []);
            needing = needing.slice(1)
          }else {
            return new sc_Token(13, "bad #-pattern5")
          }
        }
      }
    }
    return
  }
  var port$$1 = this.port;
  skipWhitespaceAndComments();
  var curChar = JAMScript.call(port$$1.readChar, port$$1, []);
  var v411 = curChar === SC_EOF_OBJECT;
  if(v411) {
    return new sc_Token(0, curChar)
  }
  switch(curChar) {
    case " ":
    ;
    case "\n":
    ;
    case "\t":
      return JAMScript.call(readWhitespace, null, []);
    case "(":
      return new sc_Token(1);
    case ")":
      return new sc_Token(2);
    case "{":
      return new sc_Token(3);
    case "}":
      return new sc_Token(4);
    case "[":
      return new sc_Token(5);
    case "]":
      return new sc_Token(6);
    case "'":
      return new sc_Token(8);
    case "#":
      return readSharp();
    case ".":
      var JSCompiler_inline_result$$0;
      JSCompiler_inline_label_readDot_1: {
        var v1275 = JAMScript.call(port$$1.peekChar, port$$1, []);
        var v412 = isWhitespace(v1275);
        if(v412) {
          JSCompiler_inline_result$$0 = new sc_Token(10)
        }else {
          JSCompiler_inline_result$$0 = readIdOrNumber(".")
        }
      }
      return JSCompiler_inline_result$$0;
    case '"':
      return readString();
    default:
      var v413 = isIdOrNumberChar(curChar);
      if(v413) {
        return readIdOrNumber(curChar)
      }
      throw"unexpected character: " + curChar;
  }
  return
}
function v44() {
  var tmp$$15 = JAMScript.call(this.peekToken, this, []);
  delete this.peeked;
  return tmp$$15
}
function v43() {
  var v414 = this.peeked;
  if(v414) {
    return this.peeked
  }
  var newToken = JAMScript.call(this.nextToken, this, []);
  this.peeked = newToken;
  return newToken
}
function v42() {
  var v1276 = this.pos;
  var v1783 = this.str;
  var v1277 = v1783.length;
  var v415 = v1276 >= v1277;
  if(v415) {
    return SC_EOF_OBJECT
  }
  var v416 = this.str;
  var v417 = this.pos;
  var v1784 = this.pos;
  this.pos = v1784 + 1;
  return v416.charAt(v417)
}
function v41() {
  return false
}
function v40() {
  throw"can't read from error-port.";
}
function v39() {
  return
}
function v38() {
  return true
}
function v37() {
  var tmp$$14 = JAMScript.call(this.peekChar, this, []);
  delete this.peeked;
  return tmp$$14
}
function v36() {
  var v1278 = "peeked" in this;
  var v418 = !v1278;
  if(v418) {
    var v3717 = JAMScript.call(this.getNextChar, this, []);
    this.peeked = v3717
  }
  return this.peeked
}
function v35() {
  var o$$22 = this;
  for(;true;) {
    var v419 = o$$22.MAX_TAIL_CALLs;
    SC_TAIL_OBJECT.calls = v419 - 1;
    var v420 = o$$22.args;
    var fun$$4 = v420.callee;
    var v421 = o$$22.args;
    var res$$21 = JAMScript.call(fun$$4.apply, fun$$4, [SC_TAIL_OBJECT, v421]);
    var v422 = res$$21 instanceof sc_Trampoline;
    if(v422) {
      o$$22 = res$$21
    }else {
      return res$$21
    }
  }
  return
}
function v34() {
  return"#{%hashtable}"
}
function v33() {
  var v1279 = sc_hash(this);
  var v423 = "#<struct" + v1279;
  return v423 + ">"
}
function v32() {
  return JAMScript.call(this.sc_toWriteOrDisplayString, this, [sc_toWriteString])
}
function v31() {
  return JAMScript.call(this.sc_toWriteOrDisplayString, this, [sc_toDisplayString])
}
function v30(writeOrDisplay$$1) {
  var v1280 = this.length;
  var v424 = v1280 === 0;
  if(v424) {
    return"#()"
  }
  var v1281 = this[0];
  var v425 = JAMScript.call(writeOrDisplay$$1, null, [v1281]);
  var res$$17 = "#(" + v425;
  var i$$28 = 1;
  var v1282 = this.length;
  var v426 = i$$28 < v1282;
  for(;v426;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v2168 = this[i$$28]
    }
    var v1785 = JAMScript.call(writeOrDisplay$$1, null, [v2168]);
    var v1283 = " " + v1785;
    res$$17 = res$$17 + v1283;
    i$$28 = i$$28 + 1;
    var v1284 = this.length;
    v426 = i$$28 < v1284
  }
  res$$17 = res$$17 + ")";
  return res$$17
}
function v29() {
  var v427 = sc_Char.char2readable;
  var v428 = this.val;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var entry = v427[v428]
  }
  if(entry) {
    return entry
  }else {
    var v429 = this.val;
    return"#\\" + v429
  }
  return
}
function v28() {
  return this.val
}
function v27() {
  return JAMScript.call(this.sc_toWriteOrDisplayString, this, [sc_toWriteString])
}
function v26() {
  return JAMScript.call(this.sc_toWriteOrDisplayString, this, [sc_toDisplayString])
}
function v25(writeOrDisplay) {
  var current = this;
  var res$$3 = "(";
  for(;true;) {
    var v1786 = current.car;
    var v1285 = JAMScript.call(writeOrDisplay, null, [v1786]);
    res$$3 = res$$3 + v1285;
    var v1286 = current.cdr;
    var v431 = sc_isPair(v1286);
    if(v431) {
      res$$3 = res$$3 + " ";
      current = current.cdr
    }else {
      var v1287 = current.cdr;
      var v430 = v1287 !== null;
      if(v430) {
        var v2169 = current.cdr;
        var v1787 = JAMScript.call(writeOrDisplay, null, [v2169]);
        var v1288 = " . " + v1787;
        res$$3 = res$$3 + v1288;
        break
      }else {
        break
      }
    }
  }
  res$$3 = res$$3 + ")";
  return res$$3
}
function v24() {
  return sc_toDisplayString(this)
}
function v23() {
  JAMScript.call(BgL_nboyerzd2benchmarkzd2, null, []);
  return
}
function v22() {
  JAMScript.call(BgL_earleyzd2benchmarkzd2, null, []);
  return
}
function v21(runner$$2) {
  function RunNextSetup() {
    var v433 = index$$40 < length$$12;
    if(v433) {
      try {
        var v1289 = suite$$1.benchmarks;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v432 = v1289[index$$40]
        }
        JAMScript.call(v432.Setup, v432, [])
      }catch(e$$4) {
        JAMScript.call(suite$$1.NotifyError, suite$$1, [e$$4]);
        return null
      }
      return RunNextBenchmark
    }
    JAMScript.call(suite$$1.NotifyResult, suite$$1, []);
    return null
  }
  function RunNextBenchmark() {
    try {
      var v1290 = suite$$1.benchmarks;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v434 = v1290[index$$40]
      }
      data$$20 = JAMScript.call(suite$$1.RunSingleBenchmark, suite$$1, [v434, data$$20])
    }catch(e$$5) {
      JAMScript.call(suite$$1.NotifyError, suite$$1, [e$$5]);
      return null
    }
    var v435;
    var v1291 = data$$20 == null;
    if(v1291) {
      v435 = RunNextTearDown
    }else {
      v435 = RunNextBenchmark()
    }
    return v435
  }
  function RunNextTearDown() {
    try {
      var v1292 = suite$$1.benchmarks;
      var v1293 = index$$40;
      index$$40 = index$$40 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v436 = v1292[v1293]
      }
      JAMScript.call(v436.TearDown, v436, [])
    }catch(e$$6) {
      JAMScript.call(suite$$1.NotifyError, suite$$1, [e$$6]);
      return null
    }
    return RunNextSetup
  }
  JAMScript.call(BenchmarkSuite.ResetRNG, BenchmarkSuite, []);
  this.results = [];
  this.runner = runner$$2;
  var v437 = this.benchmarks;
  var length$$12 = v437.length;
  var index$$40 = 0;
  var suite$$1 = this;
  var data$$20;
  return RunNextSetup()
}
function v20(benchmark$$1, data$$18) {
  function Measure(data$$19) {
    var elapsed = 0;
    var start$$4 = new Date;
    var i$$6 = 0;
    var v1294;
    if(doDeterministic$$1) {
      var v1788 = benchmark$$1.deterministicIterations;
      v1294 = i$$6 < v1788
    }else {
      v1294 = elapsed < 1E3
    }
    var v439 = v1294;
    for(;v439;) {
      JAMScript.call(benchmark$$1.run, benchmark$$1, []);
      var v438 = new Date;
      elapsed = v438 - start$$4;
      i$$6 = i$$6 + 1;
      var v1295;
      if(doDeterministic$$1) {
        var v1789 = benchmark$$1.deterministicIterations;
        v1295 = i$$6 < v1789
      }else {
        v1295 = elapsed < 1E3
      }
      v439 = v1295
    }
    var v440 = data$$19 != null;
    if(v440) {
      var v1296 = data$$19;
      var v1790 = data$$19.runs;
      v1296.runs = v1790 + i$$6;
      var v1297 = data$$19;
      var v1791 = data$$19.elapsed;
      v1297.elapsed = v1791 + elapsed
    }
    return
  }
  var config = BenchmarkSuite.config;
  var v441;
  var v1792 = config.doWarmup;
  var v1298 = v1792 !== undefined;
  if(v1298) {
    v441 = config.doWarmup
  }else {
    v441 = benchmark$$1.doWarmup
  }
  var doWarmup$$1 = v441;
  var v442;
  var v1793 = config.doDeterministic;
  var v1299 = v1793 !== undefined;
  if(v1299) {
    v442 = config.doDeterministic
  }else {
    v442 = benchmark$$1.doDeterministic
  }
  var doDeterministic$$1 = v442;
  var v1300 = !doWarmup$$1;
  if(v1300) {
    v1300 = data$$18 == null
  }
  var v443 = v1300;
  if(v443) {
    data$$18 = {runs:0, elapsed:0}
  }
  var v449 = data$$18 == null;
  if(v449) {
    Measure(null);
    return{runs:0, elapsed:0}
  }else {
    Measure(data$$18);
    var v1301 = data$$18.runs;
    var v1302 = benchmark$$1.minIterations;
    var v444 = v1301 < v1302;
    if(v444) {
      return data$$18
    }
    var v1303 = data$$18.elapsed;
    var v445 = v1303 * 1E3;
    var v446 = data$$18.runs;
    var usec = v445 / v446;
    var v447;
    var v1794 = benchmark$$1.rmsResult;
    var v1304 = v1794 != null;
    if(v1304) {
      v447 = JAMScript.call(benchmark$$1.rmsResult, benchmark$$1, [])
    }else {
      v447 = 0
    }
    var rms = v447;
    var v448 = new BenchmarkResult(benchmark$$1, usec, rms);
    JAMScript.call(this.NotifyStep, this, [v448]);
    return null
  }
  return
}
function v19(error$$2) {
  var v1305 = this.runner;
  var v452 = v1305.NotifyError;
  if(v452) {
    var v450 = this.runner;
    var v451 = this.name;
    JAMScript.call(v450.NotifyError, v450, [v451, error$$2])
  }
  var v1306 = this.runner;
  var v455 = v1306.NotifyStep;
  if(v455) {
    var v453 = this.runner;
    var v454 = this.name;
    JAMScript.call(v453.NotifyStep, v453, [v454])
  }
  return
}
function v18(runner$$1) {
  var v456 = BenchmarkSuite.scores;
  v456.push(1);
  var v458 = runner$$1.NotifyResult;
  if(v458) {
    var v457 = this.name;
    JAMScript.call(runner$$1.NotifyResult, runner$$1, [v457, "Skipped"])
  }
  return
}
function v17() {
  var v459 = this.results;
  var mean = JAMScript.call(BenchmarkSuite.GeometricMeanTime, BenchmarkSuite, [v459]);
  var v1307 = this.reference;
  var v460 = v1307[0];
  var score$$1 = v460 / mean;
  var v461 = BenchmarkSuite.scores;
  v461.push(score$$1);
  var v1308 = this.runner;
  var v465 = v1308.NotifyResult;
  if(v465) {
    var v462 = 100 * score$$1;
    var formatted$$1 = JAMScript.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [v462]);
    var v463 = this.runner;
    var v464 = this.name;
    JAMScript.call(v463.NotifyResult, v463, [v464, formatted$$1])
  }
  var v1795 = this.reference;
  var v1309 = v1795.length;
  var v474 = v1309 == 2;
  if(v474) {
    var v466 = this.results;
    var meanLatency = JAMScript.call(BenchmarkSuite.GeometricMeanLatency, BenchmarkSuite, [v466]);
    var v473 = meanLatency != 0;
    if(v473) {
      var v1310 = this.reference;
      var v467 = v1310[1];
      var scoreLatency = v467 / meanLatency;
      var v468 = BenchmarkSuite.scores;
      v468.push(scoreLatency);
      var v1311 = this.runner;
      var v472 = v1311.NotifyResult;
      if(v472) {
        var v469 = 100 * scoreLatency;
        var formattedLatency = JAMScript.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [v469]);
        var v470 = this.runner;
        var v1312 = this.name;
        var v471 = v1312 + "Latency";
        JAMScript.call(v470.NotifyResult, v470, [v471, formattedLatency])
      }
    }
  }
  return
}
function v16(result$$2) {
  var v475 = this.results;
  v475.push(result$$2);
  var v1313 = this.runner;
  var v478 = v1313.NotifyStep;
  if(v478) {
    var v476 = this.runner;
    var v1314 = result$$2.benchmark;
    var v477 = v1314.name;
    JAMScript.call(v476.NotifyStep, v476, [v477])
  }
  return
}
function v15(value$$29) {
  var v479 = value$$29 > 100;
  if(v479) {
    return value$$29.toFixed(0)
  }else {
    return value$$29.toPrecision(3)
  }
  return
}
function v14(measurements$$1) {
  var log$$2 = 0;
  var hasLatencyResult = false;
  var i$$5 = 0;
  var v1315 = measurements$$1.length;
  var v481 = i$$5 < v1315;
  for(;v481;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1796 = measurements$$1[i$$5]
    }
    var v1316 = v1796.latency;
    var v480 = v1316 != 0;
    if(v480) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v2170 = measurements$$1[i$$5]
      }
      var v1797 = v2170.latency;
      var v1317 = Math.log(v1797);
      log$$2 = log$$2 + v1317;
      hasLatencyResult = true
    }
    i$$5 = i$$5 + 1;
    var v1318 = measurements$$1.length;
    v481 = i$$5 < v1318
  }
  if(hasLatencyResult) {
    var v482 = Math.E;
    var v1319 = measurements$$1.length;
    var v483 = log$$2 / v1319;
    return Math.pow(v482, v483)
  }else {
    return 0
  }
  return
}
function v13(measurements) {
  var log$$1 = 0;
  var i$$4 = 0;
  var v1320 = measurements.length;
  var v484 = i$$4 < v1320;
  for(;v484;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v2171 = measurements[i$$4]
    }
    var v1798 = v2171.time;
    var v1321 = Math.log(v1798);
    log$$1 = log$$1 + v1321;
    i$$4 = i$$4 + 1;
    var v1322 = measurements.length;
    v484 = i$$4 < v1322
  }
  var v485 = Math.E;
  var v1323 = measurements.length;
  var v486 = log$$1 / v1323;
  return Math.pow(v485, v486)
}
function v12(numbers) {
  var log = 0;
  var i$$3 = 0;
  var v1324 = numbers.length;
  var v487 = i$$3 < v1324;
  for(;v487;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1799 = numbers[i$$3]
    }
    var v1325 = Math.log(v1799);
    log = log + v1325;
    i$$3 = i$$3 + 1;
    var v1326 = numbers.length;
    v487 = i$$3 < v1326
  }
  var v488 = Math.E;
  var v1327 = numbers.length;
  var v489 = log / v1327;
  return Math.pow(v488, v489)
}
function v11() {
  var result$$1 = 0;
  var suites$$1 = BenchmarkSuite.suites;
  var i$$2 = 0;
  var v1328 = suites$$1.length;
  var v490 = i$$2 < v1328;
  for(;v490;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v2172 = suites$$1[i$$2]
    }
    var v1800 = v2172.benchmarks;
    var v1329 = v1800.length;
    result$$1 = result$$1 + v1329;
    i$$2 = i$$2 + 1;
    var v1330 = suites$$1.length;
    v490 = i$$2 < v1330
  }
  return result$$1
}
function v10(runner, skipBenchmarks$$1) {
  function RunStep() {
    var v1331 = continuation;
    var v1801 = !v1331;
    if(v1801) {
      v1331 = index$$39 < length$$11
    }
    var v496 = v1331;
    for(;v496;) {
      if(continuation) {
        continuation = JAMScript.call(continuation, null, [])
      }else {
        var v491 = index$$39;
        index$$39 = index$$39 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var suite = suites[v491]
        }
        var v493 = runner.NotifyStart;
        if(v493) {
          var v492 = suite.name;
          JAMScript.call(runner.NotifyStart, runner, [v492])
        }
        var v1802 = suite.name;
        var v1332 = skipBenchmarks$$1.indexOf(v1802);
        var v494 = v1332 > -1;
        if(v494) {
          JAMScript.call(suite.NotifySkipped, suite, [runner])
        }else {
          continuation = JAMScript.call(suite.RunStep, suite, [runner])
        }
      }
      var v1333 = continuation;
      if(v1333) {
        var v2173 = typeof window;
        var v1803 = v2173 != "undefined";
        if(v1803) {
          v1803 = window.setTimeout
        }
        v1333 = v1803
      }
      var v495 = v1333;
      if(v495) {
        window.setTimeout(RunStep, 25);
        return
      }
      var v1334 = continuation;
      var v1804 = !v1334;
      if(v1804) {
        v1334 = index$$39 < length$$11
      }
      v496 = v1334
    }
    var v499 = runner.NotifyScore;
    if(v499) {
      var v497 = BenchmarkSuite.scores;
      var score = JAMScript.call(BenchmarkSuite.GeometricMean, BenchmarkSuite, [v497]);
      var v498 = 100 * score;
      var formatted = JAMScript.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [v498]);
      JAMScript.call(runner.NotifyScore, runner, [formatted])
    }
    return
  }
  var v500;
  var v1805 = typeof skipBenchmarks$$1;
  var v1335 = v1805 === "undefined";
  if(v1335) {
    v500 = []
  }else {
    v500 = skipBenchmarks$$1
  }
  skipBenchmarks$$1 = v500;
  var continuation = null;
  var suites = BenchmarkSuite.suites;
  var length$$11 = suites.length;
  BenchmarkSuite.scores = [];
  var index$$39 = 0;
  RunStep();
  return
}
function v9() {
  function v8() {
    function v7() {
      var v1336 = seed + 2127912214;
      var v1337 = seed << 12;
      var v501 = v1336 + v1337;
      seed = v501 & 4294967295;
      var v1338 = seed ^ 3345072700;
      var v1339 = seed >>> 19;
      var v502 = v1338 ^ v1339;
      seed = v502 & 4294967295;
      var v1340 = seed + 374761393;
      var v1341 = seed << 5;
      var v503 = v1340 + v1341;
      seed = v503 & 4294967295;
      var v1342 = seed + 3550635116;
      var v1343 = seed << 9;
      var v504 = v1342 ^ v1343;
      seed = v504 & 4294967295;
      var v1344 = seed + 4251993797;
      var v1345 = seed << 3;
      var v505 = v1344 + v1345;
      seed = v505 & 4294967295;
      var v1346 = seed ^ 3042594569;
      var v1347 = seed >>> 16;
      var v506 = v1346 ^ v1347;
      seed = v506 & 4294967295;
      var v507 = seed & 268435455;
      return v507 / 268435456
    }
    var seed = 49734321;
    return v7
  }
  var v508 = Math;
  var v3718 = v8();
  v508.random = v3718;
  return
}
function v6(s$$2) {
  throw"Alert called with argument: " + s$$2;
}
function v5() {
  return this.time
}
function v4() {
  var v509 = performance.now;
  var v1349 = !v509;
  if(v1349) {
    var v1348 = performance.mozNow;
    var v1807 = !v1348;
    if(v1807) {
      var v1806 = performance.msNow;
      var v2175 = !v1806;
      if(v2175) {
        var v2174 = performance.oNow;
        var v2486 = !v2174;
        if(v2486) {
          var v2485 = performance.webkitNow;
          var v2781 = !v2485;
          if(v2781) {
            v2485 = Date.now
          }
          v2174 = v2485
        }
        v1806 = v2174
      }
      v1348 = v1806
    }
    v509 = v1348
  }
  return v509
}
function Benchmark(name$$31, doWarmup, doDeterministic, deterministicIterations, run, setup, tearDown, rmsResult, minIterations) {
  function v1() {
    return
  }
  function v0() {
    return
  }
  this.name = name$$31;
  this.doWarmup = doWarmup;
  this.doDeterministic = doDeterministic;
  this.deterministicIterations = deterministicIterations;
  this.run = run;
  var v510;
  if(setup) {
    v510 = setup
  }else {
    v510 = v0
  }
  this.Setup = v510;
  var v511;
  if(tearDown) {
    v511 = tearDown
  }else {
    v511 = v1
  }
  this.TearDown = v511;
  var v512;
  if(rmsResult) {
    v512 = rmsResult
  }else {
    v512 = null
  }
  this.rmsResult = v512;
  var v513;
  if(minIterations) {
    v513 = minIterations
  }else {
    v513 = 32
  }
  this.minIterations = v513;
  return
}
function BenchmarkResult(benchmark, time, latency) {
  this.benchmark = benchmark;
  this.time = time;
  this.latency = latency;
  return
}
function BenchmarkSuite(name$$32, reference, benchmarks$$1) {
  this.name = name$$32;
  this.reference = reference;
  this.benchmarks = benchmarks$$1;
  var v514 = BenchmarkSuite.suites;
  v514.push(this);
  return
}
function sc_print_debug() {
  sc_print.apply(null, arguments);
  return
}
function sc_alert() {
  var len = arguments.length;
  var s$$3 = "";
  var i$$7;
  i$$7 = 0;
  var v515 = i$$7 < len;
  for(;v515;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1808 = arguments[i$$7]
    }
    var v1350 = sc_toDisplayString(v1808);
    s$$3 = s$$3 + v1350;
    i$$7 = i$$7 + 1;
    v515 = i$$7 < len
  }
  return JAMScript.call(alert, null, [s$$3])
}
function sc_typeof(x$$48) {
  return typeof x$$48
}
function sc_error() {
  var v516 = sc_jsstring2symbol("*error*");
  var a = [v516];
  var i$$8 = 0;
  var v1351 = arguments.length;
  var v518 = i$$8 < v1351;
  for(;v518;) {
    var v517 = i$$8 + 1;
    a[v517] = arguments[i$$8];
    i$$8 = i$$8 + 1;
    var v1352 = arguments.length;
    v518 = i$$8 < v1352
  }
  throw a;
}
function sc_raise(obj$$16) {
  throw obj$$16;
}
function sc_withHandlerLambda(handler$$3, body) {
  try {
    return JAMScript.call(body, null, [])
  }catch(e$$7) {
    var v1353 = e$$7._internalException;
    var v519 = !v1353;
    if(v519) {
      return JAMScript.call(handler$$3, null, [e$$7])
    }else {
      throw e$$7;
    }
  }
  return
}
function sc_putpropBang(sym, key$$14, val) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var ht = sc_properties[sym]
  }
  var v520 = !ht;
  if(v520) {
    ht = new Object;
    JAMScript.set(sc_properties, sym, ht)
  }
  JAMScript.set(ht, key$$14, val);
  return
}
function sc_getprop(sym$$1, key$$15) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var ht$$1 = sc_properties[sym$$1]
  }
  if(ht$$1) {
    var v521 = key$$15 in ht$$1;
    if(v521) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        return ht$$1[key$$15]
      }
    }else {
      return false
    }
  }else {
    return false
  }
  return
}
function sc_rempropBang(sym$$2, key$$16) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var ht$$2 = sc_properties[sym$$2]
  }
  if(ht$$2) {
    delete ht$$2[key$$16]
  }
  return
}
function sc_any2String(o) {
  var v522 = sc_toDisplayString(o);
  return JAMScript.call(jsstring2string, null, [v522])
}
function sc_isEqv(o1, o2) {
  return o1 === o2
}
function sc_isEq(o1$$1, o2$$1) {
  return o1$$1 === o2$$1
}
function sc_isNumber(n$$1) {
  var v523 = typeof n$$1;
  return v523 === "number"
}
function sc_isComplex(n$$2) {
  return sc_isNumber(n$$2)
}
function sc_isReal(n$$3) {
  return sc_isNumber(n$$3)
}
function sc_isRational(n$$4) {
  return sc_isReal(n$$4)
}
function sc_isInteger(n$$5) {
  var v524 = parseInt(n$$5);
  return v524 === n$$5
}
function sc_isExact(n$$6) {
  return false
}
function sc_isInexact(n$$7) {
  return true
}
function sc_equal(x$$49) {
  var i$$9 = 1;
  var v1354 = arguments.length;
  var v526 = i$$9 < v1354;
  for(;v526;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1355 = arguments[i$$9]
    }
    var v525 = x$$49 !== v1355;
    if(v525) {
      return false
    }
    i$$9 = i$$9 + 1;
    var v1356 = arguments.length;
    v526 = i$$9 < v1356
  }
  return true
}
function sc_less(x$$50) {
  var i$$10 = 1;
  var v1357 = arguments.length;
  var v528 = i$$10 < v1357;
  for(;v528;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1358 = arguments[i$$10]
    }
    var v527 = x$$50 >= v1358;
    if(v527) {
      return false
    }
    x$$50 = arguments[i$$10];
    i$$10 = i$$10 + 1;
    var v1359 = arguments.length;
    v528 = i$$10 < v1359
  }
  return true
}
function sc_greater(x$$51, y$$31) {
  var i$$11 = 1;
  var v1360 = arguments.length;
  var v530 = i$$11 < v1360;
  for(;v530;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1361 = arguments[i$$11]
    }
    var v529 = x$$51 <= v1361;
    if(v529) {
      return false
    }
    x$$51 = arguments[i$$11];
    i$$11 = i$$11 + 1;
    var v1362 = arguments.length;
    v530 = i$$11 < v1362
  }
  return true
}
function sc_lessEqual(x$$52, y$$32) {
  var i$$12 = 1;
  var v1363 = arguments.length;
  var v532 = i$$12 < v1363;
  for(;v532;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1364 = arguments[i$$12]
    }
    var v531 = x$$52 > v1364;
    if(v531) {
      return false
    }
    x$$52 = arguments[i$$12];
    i$$12 = i$$12 + 1;
    var v1365 = arguments.length;
    v532 = i$$12 < v1365
  }
  return true
}
function sc_greaterEqual(x$$53, y$$33) {
  var i$$13 = 1;
  var v1366 = arguments.length;
  var v534 = i$$13 < v1366;
  for(;v534;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1367 = arguments[i$$13]
    }
    var v533 = x$$53 < v1367;
    if(v533) {
      return false
    }
    x$$53 = arguments[i$$13];
    i$$13 = i$$13 + 1;
    var v1368 = arguments.length;
    v534 = i$$13 < v1368
  }
  return true
}
function sc_isZero(x$$54) {
  return x$$54 === 0
}
function sc_isPositive(x$$55) {
  return x$$55 > 0
}
function sc_isNegative(x$$56) {
  return x$$56 < 0
}
function sc_isOdd(x$$57) {
  var v535 = x$$57 % 2;
  return v535 === 1
}
function sc_isEven(x$$58) {
  var v536 = x$$58 % 2;
  return v536 === 0
}
function sc_plus() {
  var sum = 0;
  var i$$14 = 0;
  var v1369 = arguments.length;
  var v537 = i$$14 < v1369;
  for(;v537;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1370 = arguments[i$$14]
    }
    sum = sum + v1370;
    i$$14 = i$$14 + 1;
    var v1371 = arguments.length;
    v537 = i$$14 < v1371
  }
  return sum
}
function sc_multi() {
  var product = 1;
  var i$$15 = 0;
  var v1372 = arguments.length;
  var v538 = i$$15 < v1372;
  for(;v538;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1373 = arguments[i$$15]
    }
    product = product * v1373;
    i$$15 = i$$15 + 1;
    var v1374 = arguments.length;
    v538 = i$$15 < v1374
  }
  return product
}
function sc_minus(x$$59) {
  var v1375 = arguments.length;
  var v540 = v1375 === 1;
  if(v540) {
    return-x$$59
  }else {
    var res$$1 = x$$59;
    var i$$16 = 1;
    var v1376 = arguments.length;
    var v539 = i$$16 < v1376;
    for(;v539;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1377 = arguments[i$$16]
      }
      res$$1 = res$$1 - v1377;
      i$$16 = i$$16 + 1;
      var v1378 = arguments.length;
      v539 = i$$16 < v1378
    }
    return res$$1
  }
  return
}
function sc_div(x$$60) {
  var v1379 = arguments.length;
  var v542 = v1379 === 1;
  if(v542) {
    return 1 / x$$60
  }else {
    var res$$2 = x$$60;
    var i$$17 = 1;
    var v1380 = arguments.length;
    var v541 = i$$17 < v1380;
    for(;v541;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1381 = arguments[i$$17]
      }
      res$$2 = res$$2 / v1381;
      i$$17 = i$$17 + 1;
      var v1382 = arguments.length;
      v541 = i$$17 < v1382
    }
    return res$$2
  }
  return
}
function sc_quotient(x$$61, y$$34) {
  var v543 = x$$61 / y$$34;
  return parseInt(v543)
}
function sc_remainder(x$$62, y$$35) {
  return x$$62 % y$$35
}
function sc_modulo(x$$63, y$$36) {
  var remainder = x$$63 % y$$36;
  var v1383 = remainder * y$$36;
  var v544 = v1383 < 0;
  if(v544) {
    return remainder + y$$36
  }else {
    return remainder
  }
  return
}
function sc_euclid_gcd(a$$1, b) {
  var temp;
  var v545 = a$$1 === 0;
  if(v545) {
    return b
  }
  var v546 = b === 0;
  if(v546) {
    return a$$1
  }
  var v547 = a$$1 < 0;
  if(v547) {
    a$$1 = -a$$1
  }
  var v548 = b < 0;
  if(v548) {
    b = -b
  }
  var v549 = b > a$$1;
  if(v549) {
    temp = a$$1;
    a$$1 = b;
    b = temp
  }
  for(;true;) {
    a$$1 = a$$1 % b;
    var v550 = a$$1 === 0;
    if(v550) {
      return b
    }
    b = b % a$$1;
    var v551 = b === 0;
    if(v551) {
      return a$$1
    }
  }
  return b
}
function sc_gcd() {
  var gcd = 0;
  var i$$18 = 0;
  var v1384 = arguments.length;
  var v553 = i$$18 < v1384;
  for(;v553;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v552 = arguments[i$$18]
    }
    gcd = sc_euclid_gcd(gcd, v552);
    i$$18 = i$$18 + 1;
    var v1385 = arguments.length;
    v553 = i$$18 < v1385
  }
  return gcd
}
function sc_lcm() {
  var lcm = 1;
  var i$$19 = 0;
  var v1386 = arguments.length;
  var v555 = i$$19 < v1386;
  for(;v555;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1387 = arguments[i$$19]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1809 = arguments[i$$19]
    }
    var v1388 = sc_euclid_gcd(v1809, lcm);
    var v554 = v1387 / v1388;
    var f = Math.round(v554);
    var v1389 = Math.abs(f);
    lcm = lcm * v1389;
    i$$19 = i$$19 + 1;
    var v1390 = arguments.length;
    v555 = i$$19 < v1390
  }
  return lcm
}
function sc_exact2inexact(x$$64) {
  return x$$64
}
function sc_inexact2exact(x$$65) {
  return x$$65
}
function sc_number2jsstring(x$$66, radix) {
  if(radix) {
    return JAMScript.call(x$$66.toString, x$$66, [radix])
  }else {
    return JAMScript.call(x$$66.toString, x$$66, [])
  }
  return
}
function sc_jsstring2number(s$$4, radix$$1) {
  var v556 = s$$4 === "";
  if(v556) {
    return false
  }
  if(radix$$1) {
    var t = parseInt(s$$4, radix$$1);
    var v1391 = !t;
    if(v1391) {
      v1391 = t !== 0
    }
    var v557 = v1391;
    if(v557) {
      return false
    }
    var v558 = radix$$1 + 1;
    var allowedChars = "01234567890abcdefghijklmnopqrstuvwxyz".substring(0, v558);
    var v2176 = "^[" + allowedChars;
    var v1810 = v2176 + "]*$";
    var v1392 = new RegExp(v1810, "i");
    var v559 = v1392.test(s$$4);
    if(v559) {
      return t
    }else {
      return false
    }
  }else {
    t = +s$$4;
    var v1393 = !t;
    if(v1393) {
      v1393 = t !== 0
    }
    var v560 = v1393;
    if(v560) {
      return false
    }
    var c = s$$4.charAt(0);
    var v1811 = +c;
    var v1394 = v1811 === 0;
    if(v1394) {
      v1394 = c !== "0"
    }
    var v561 = v1394;
    if(v561) {
      return false
    }
    return t
  }
  return
}
function sc_not(b$$1) {
  return b$$1 === false
}
function sc_isBoolean(b$$2) {
  var v562 = b$$2 === true;
  var v1395 = !v562;
  if(v1395) {
    v562 = b$$2 === false
  }
  return v562
}
function sc_Pair(car, cdr) {
  this.car = car;
  this.cdr = cdr;
  return
}
function sc_isPair(p) {
  return p instanceof sc_Pair
}
function sc_isPairEqual(p1, p2, comp) {
  var v1396 = p1.car;
  var v1397 = p2.car;
  var v563 = JAMScript.call(comp, null, [v1396, v1397]);
  if(v563) {
    var v1398 = p1.cdr;
    var v1399 = p2.cdr;
    v563 = JAMScript.call(comp, null, [v1398, v1399])
  }
  return v563
}
function sc_cons(car$$1, cdr$$1) {
  return new sc_Pair(car$$1, cdr$$1)
}
function sc_consStar() {
  var v1400 = arguments.length;
  var v564 = v1400 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var res$$4 = arguments[v564]
  }
  var v565 = arguments.length;
  var i$$20 = v565 - 2;
  var v567 = i$$20 >= 0;
  for(;v567;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v566 = arguments[i$$20]
    }
    res$$4 = new sc_Pair(v566, res$$4);
    i$$20 = i$$20 - 1;
    v567 = i$$20 >= 0
  }
  return res$$4
}
function sc_car(p$$1) {
  return p$$1.car
}
function sc_cdr(p$$2) {
  return p$$2.cdr
}
function sc_setCarBang(p$$3, val$$1) {
  p$$3.car = val$$1;
  return
}
function sc_setCdrBang(p$$4, val$$2) {
  p$$4.cdr = val$$2;
  return
}
function sc_caar(p$$5) {
  var v568 = p$$5.car;
  return v568.car
}
function sc_cadr(p$$6) {
  var v569 = p$$6.cdr;
  return v569.car
}
function sc_cdar(p$$7) {
  var v570 = p$$7.car;
  return v570.cdr
}
function sc_cddr(p$$8) {
  var v571 = p$$8.cdr;
  return v571.cdr
}
function sc_caaar(p$$9) {
  var v1401 = p$$9.car;
  var v572 = v1401.car;
  return v572.car
}
function sc_cadar(p$$10) {
  var v1402 = p$$10.car;
  var v573 = v1402.cdr;
  return v573.car
}
function sc_caadr(p$$11) {
  var v1403 = p$$11.cdr;
  var v574 = v1403.car;
  return v574.car
}
function sc_caddr(p$$12) {
  var v1404 = p$$12.cdr;
  var v575 = v1404.cdr;
  return v575.car
}
function sc_cdaar(p$$13) {
  var v1405 = p$$13.car;
  var v576 = v1405.car;
  return v576.cdr
}
function sc_cdadr(p$$14) {
  var v1406 = p$$14.cdr;
  var v577 = v1406.car;
  return v577.cdr
}
function sc_cddar(p$$15) {
  var v1407 = p$$15.car;
  var v578 = v1407.cdr;
  return v578.cdr
}
function sc_cdddr(p$$16) {
  var v1408 = p$$16.cdr;
  var v579 = v1408.cdr;
  return v579.cdr
}
function sc_caaaar(p$$17) {
  var v1812 = p$$17.car;
  var v1409 = v1812.car;
  var v580 = v1409.car;
  return v580.car
}
function sc_caadar(p$$18) {
  var v1813 = p$$18.car;
  var v1410 = v1813.cdr;
  var v581 = v1410.car;
  return v581.car
}
function sc_caaadr(p$$19) {
  var v1814 = p$$19.cdr;
  var v1411 = v1814.car;
  var v582 = v1411.car;
  return v582.car
}
function sc_caaddr(p$$20) {
  var v1815 = p$$20.cdr;
  var v1412 = v1815.cdr;
  var v583 = v1412.car;
  return v583.car
}
function sc_cdaaar(p$$21) {
  var v1816 = p$$21.car;
  var v1413 = v1816.car;
  var v584 = v1413.car;
  return v584.cdr
}
function sc_cdadar(p$$22) {
  var v1817 = p$$22.car;
  var v1414 = v1817.cdr;
  var v585 = v1414.car;
  return v585.cdr
}
function sc_cdaadr(p$$23) {
  var v1818 = p$$23.cdr;
  var v1415 = v1818.car;
  var v586 = v1415.car;
  return v586.cdr
}
function sc_cdaddr(p$$24) {
  var v1819 = p$$24.cdr;
  var v1416 = v1819.cdr;
  var v587 = v1416.car;
  return v587.cdr
}
function sc_cadaar(p$$25) {
  var v1820 = p$$25.car;
  var v1417 = v1820.car;
  var v588 = v1417.cdr;
  return v588.car
}
function sc_caddar(p$$26) {
  var v1821 = p$$26.car;
  var v1418 = v1821.cdr;
  var v589 = v1418.cdr;
  return v589.car
}
function sc_cadadr(p$$27) {
  var v1822 = p$$27.cdr;
  var v1419 = v1822.car;
  var v590 = v1419.cdr;
  return v590.car
}
function sc_cadddr(p$$28) {
  var v1823 = p$$28.cdr;
  var v1420 = v1823.cdr;
  var v591 = v1420.cdr;
  return v591.car
}
function sc_cddaar(p$$29) {
  var v1824 = p$$29.car;
  var v1421 = v1824.car;
  var v592 = v1421.cdr;
  return v592.cdr
}
function sc_cdddar(p$$30) {
  var v1825 = p$$30.car;
  var v1422 = v1825.cdr;
  var v593 = v1422.cdr;
  return v593.cdr
}
function sc_cddadr(p$$31) {
  var v1826 = p$$31.cdr;
  var v1423 = v1826.car;
  var v594 = v1423.cdr;
  return v594.cdr
}
function sc_cddddr(p$$32) {
  var v1827 = p$$32.cdr;
  var v1424 = v1827.cdr;
  var v595 = v1424.cdr;
  return v595.cdr
}
function sc_lastPair(l) {
  var v1425 = sc_isPair(l);
  var v596 = !v1425;
  if(v596) {
    sc_error("sc_lastPair: pair expected")
  }
  var res$$5 = l;
  var cdr$$2 = l.cdr;
  var v597 = sc_isPair(cdr$$2);
  for(;v597;) {
    res$$5 = cdr$$2;
    cdr$$2 = res$$5.cdr;
    v597 = sc_isPair(cdr$$2)
  }
  return res$$5
}
function sc_isNull(o$$1) {
  return o$$1 === null
}
function sc_isList(o$$2) {
  var rabbit;
  var turtle;
  rabbit = o$$2;
  turtle = o$$2;
  for(;true;) {
    var v1426 = rabbit === null;
    var v1829 = !v1426;
    if(v1829) {
      var v1828 = rabbit instanceof sc_Pair;
      if(v1828) {
        var v2177 = rabbit.cdr;
        v1828 = v2177 === null
      }
      v1426 = v1828
    }
    var v601 = v1426;
    if(v601) {
      return true
    }else {
      var v1427 = rabbit instanceof sc_Pair;
      if(v1427) {
        var v1830 = rabbit.cdr;
        v1427 = v1830 instanceof sc_Pair
      }
      var v600 = v1427;
      if(v600) {
        var v598 = rabbit.cdr;
        rabbit = v598.cdr;
        turtle = turtle.cdr;
        var v599 = rabbit === turtle;
        if(v599) {
          return false
        }
      }else {
        return false
      }
    }
  }
  return
}
function sc_list() {
  var res$$6 = null;
  var a$$2 = arguments;
  var v602 = a$$2.length;
  var i$$21 = v602 - 1;
  var v604 = i$$21 >= 0;
  for(;v604;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v603 = a$$2[i$$21]
    }
    res$$6 = new sc_Pair(v603, res$$6);
    i$$21 = i$$21 - 1;
    v604 = i$$21 >= 0
  }
  return res$$6
}
function sc_iota(num$$4, init) {
  var res$$7 = null;
  var v605 = !init;
  if(v605) {
    init = 0
  }
  var i$$22 = num$$4 - 1;
  var v607 = i$$22 >= 0;
  for(;v607;) {
    var v606 = i$$22 + init;
    res$$7 = new sc_Pair(v606, res$$7);
    i$$22 = i$$22 - 1;
    v607 = i$$22 >= 0
  }
  return res$$7
}
function sc_makeList(nbEls, fill) {
  var res$$8 = null;
  var i$$23 = 0;
  var v608 = i$$23 < nbEls;
  for(;v608;) {
    res$$8 = new sc_Pair(fill, res$$8);
    i$$23 = i$$23 + 1;
    v608 = i$$23 < nbEls
  }
  return res$$8
}
function sc_length(l$$1) {
  var res$$9 = 0;
  var v609 = l$$1 !== null;
  for(;v609;) {
    res$$9 = res$$9 + 1;
    l$$1 = l$$1.cdr;
    v609 = l$$1 !== null
  }
  return res$$9
}
function sc_remq(o$$3, l$$2) {
  var dummy = {cdr:null};
  var tail = dummy;
  var v612 = l$$2 !== null;
  for(;v612;) {
    var v1428 = l$$2.car;
    var v611 = v1428 !== o$$3;
    if(v611) {
      var v610 = tail;
      var v1429 = l$$2.car;
      var v3719 = sc_cons(v1429, null);
      v610.cdr = v3719;
      tail = tail.cdr
    }
    l$$2 = l$$2.cdr;
    v612 = l$$2 !== null
  }
  return dummy.cdr
}
function sc_remqBang(o$$4, l$$3) {
  var dummy$$1 = {cdr:null};
  var tail$$1 = dummy$$1;
  var needsAssig = true;
  var v614 = l$$3 !== null;
  for(;v614;) {
    var v1430 = l$$3.car;
    var v613 = v1430 === o$$4;
    if(v613) {
      needsAssig = true
    }else {
      if(needsAssig) {
        tail$$1.cdr = l$$3;
        needsAssig = false
      }
      tail$$1 = l$$3
    }
    l$$3 = l$$3.cdr;
    v614 = l$$3 !== null
  }
  tail$$1.cdr = null;
  return dummy$$1.cdr
}
function sc_delete(o$$5, l$$4) {
  var dummy$$2 = {cdr:null};
  var tail$$2 = dummy$$2;
  var v617 = l$$4 !== null;
  for(;v617;) {
    var v1831 = l$$4.car;
    var v1431 = sc_isEqual(v1831, o$$5);
    var v616 = !v1431;
    if(v616) {
      var v615 = tail$$2;
      var v1432 = l$$4.car;
      var v3720 = sc_cons(v1432, null);
      v615.cdr = v3720;
      tail$$2 = tail$$2.cdr
    }
    l$$4 = l$$4.cdr;
    v617 = l$$4 !== null
  }
  return dummy$$2.cdr
}
function sc_deleteBang(o$$6, l$$5) {
  var dummy$$3 = {cdr:null};
  var tail$$3 = dummy$$3;
  var needsAssig$$1 = true;
  var v619 = l$$5 !== null;
  for(;v619;) {
    var v1433 = l$$5.car;
    var v618 = sc_isEqual(v1433, o$$6);
    if(v618) {
      needsAssig$$1 = true
    }else {
      if(needsAssig$$1) {
        tail$$3.cdr = l$$5;
        needsAssig$$1 = false
      }
      tail$$3 = l$$5
    }
    l$$5 = l$$5.cdr;
    v619 = l$$5 !== null
  }
  tail$$3.cdr = null;
  return dummy$$3.cdr
}
function sc_reverseAppendBang(l1, l2) {
  var res$$10 = l2;
  var v620 = l1 !== null;
  for(;v620;) {
    var tmp = res$$10;
    res$$10 = l1;
    l1 = l1.cdr;
    res$$10.cdr = tmp;
    v620 = l1 !== null
  }
  return res$$10
}
function sc_dualAppend(l1$$1, l2$$1) {
  var v621 = l1$$1 === null;
  if(v621) {
    return l2$$1
  }
  var v622 = l2$$1 === null;
  if(v622) {
    return l1$$1
  }
  var rev = sc_reverse(l1$$1);
  return sc_reverseAppendBang(rev, l2$$1)
}
function sc_append() {
  var v1434 = arguments.length;
  var v623 = v1434 === 0;
  if(v623) {
    return null
  }
  var v1435 = arguments.length;
  var v624 = v1435 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var res$$11 = arguments[v624]
  }
  var v625 = arguments.length;
  var i$$24 = v625 - 2;
  var v627 = i$$24 >= 0;
  for(;v627;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v626 = arguments[i$$24]
    }
    res$$11 = sc_dualAppend(v626, res$$11);
    i$$24 = i$$24 - 1;
    v627 = i$$24 >= 0
  }
  return res$$11
}
function sc_dualAppendBang(l1$$2, l2$$2) {
  var v628 = l1$$2 === null;
  if(v628) {
    return l2$$2
  }
  var v629 = l2$$2 === null;
  if(v629) {
    return l1$$2
  }
  var tmp$$1 = l1$$2;
  var v1436 = tmp$$1.cdr;
  var v630 = v1436 !== null;
  for(;v630;) {
    tmp$$1 = tmp$$1.cdr;
    var v1437 = tmp$$1.cdr;
    v630 = v1437 !== null
  }
  tmp$$1.cdr = l2$$2;
  return l1$$2
}
function sc_appendBang() {
  var res$$12 = null;
  var i$$25 = 0;
  var v1438 = arguments.length;
  var v632 = i$$25 < v1438;
  for(;v632;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v631 = arguments[i$$25]
    }
    res$$12 = sc_dualAppendBang(res$$12, v631);
    i$$25 = i$$25 + 1;
    var v1439 = arguments.length;
    v632 = i$$25 < v1439
  }
  return res$$12
}
function sc_reverse(l1$$3) {
  var res$$13 = null;
  var v634 = l1$$3 !== null;
  for(;v634;) {
    var v633 = l1$$3.car;
    res$$13 = sc_cons(v633, res$$13);
    l1$$3 = l1$$3.cdr;
    v634 = l1$$3 !== null
  }
  return res$$13
}
function sc_reverseBang(l$$6) {
  return sc_reverseAppendBang(l$$6, null)
}
function sc_listTail(l$$7, k) {
  var res$$14 = l$$7;
  var i$$26 = 0;
  var v635 = i$$26 < k;
  for(;v635;) {
    res$$14 = res$$14.cdr;
    i$$26 = i$$26 + 1;
    v635 = i$$26 < k
  }
  return res$$14
}
function sc_listRef(l$$8, k$$1) {
  var v636 = sc_listTail(l$$8, k$$1);
  return v636.car
}
function sc_memq(o$$7, l$$9) {
  var v638 = l$$9 !== null;
  for(;v638;) {
    var v1440 = l$$9.car;
    var v637 = v1440 === o$$7;
    if(v637) {
      return l$$9
    }
    l$$9 = l$$9.cdr;
    v638 = l$$9 !== null
  }
  return false
}
function sc_memv(o$$8, l$$10) {
  var v640 = l$$10 !== null;
  for(;v640;) {
    var v1441 = l$$10.car;
    var v639 = v1441 === o$$8;
    if(v639) {
      return l$$10
    }
    l$$10 = l$$10.cdr;
    v640 = l$$10 !== null
  }
  return false
}
function sc_member(o$$9, l$$11) {
  var v642 = l$$11 !== null;
  for(;v642;) {
    var v1442 = l$$11.car;
    var v641 = sc_isEqual(v1442, o$$9);
    if(v641) {
      return l$$11
    }
    l$$11 = l$$11.cdr;
    v642 = l$$11 !== null
  }
  return false
}
function sc_assq(o$$10, al) {
  var v644 = al !== null;
  for(;v644;) {
    var v1832 = al.car;
    var v1443 = v1832.car;
    var v643 = v1443 === o$$10;
    if(v643) {
      return al.car
    }
    al = al.cdr;
    v644 = al !== null
  }
  return false
}
function sc_assv(o$$11, al$$1) {
  var v646 = al$$1 !== null;
  for(;v646;) {
    var v1833 = al$$1.car;
    var v1444 = v1833.car;
    var v645 = v1444 === o$$11;
    if(v645) {
      return al$$1.car
    }
    al$$1 = al$$1.cdr;
    v646 = al$$1 !== null
  }
  return false
}
function sc_assoc(o$$12, al$$2) {
  var v648 = al$$2 !== null;
  for(;v648;) {
    var v1834 = al$$2.car;
    var v1445 = v1834.car;
    var v647 = sc_isEqual(v1445, o$$12);
    if(v647) {
      return al$$2.car
    }
    al$$2 = al$$2.cdr;
    v648 = al$$2 !== null
  }
  return false
}
function sc_isCharStringEqual(cs1, cs2) {
  var v649 = cs1.val;
  var v650 = cs2.val;
  return v649 === v650
}
function sc_isCharStringLess(cs1$$1, cs2$$1) {
  var v651 = cs1$$1.val;
  var v652 = cs2$$1.val;
  return v651 < v652
}
function sc_isCharStringGreater(cs1$$2, cs2$$2) {
  var v653 = cs1$$2.val;
  var v654 = cs2$$2.val;
  return v653 > v654
}
function sc_isCharStringLessEqual(cs1$$3, cs2$$3) {
  var v655 = cs1$$3.val;
  var v656 = cs2$$3.val;
  return v655 <= v656
}
function sc_isCharStringGreaterEqual(cs1$$4, cs2$$4) {
  var v657 = cs1$$4.val;
  var v658 = cs2$$4.val;
  return v657 >= v658
}
function sc_isCharStringCIEqual(cs1$$5, cs2$$5) {
  var v1446 = cs1$$5.val;
  var v659 = v1446.toLowerCase();
  var v1447 = cs2$$5.val;
  var v660 = v1447.toLowerCase();
  return v659 === v660
}
function sc_isCharStringCILess(cs1$$6, cs2$$6) {
  var v1448 = cs1$$6.val;
  var v661 = v1448.toLowerCase();
  var v1449 = cs2$$6.val;
  var v662 = v1449.toLowerCase();
  return v661 < v662
}
function sc_isCharStringCIGreater(cs1$$7, cs2$$7) {
  var v1450 = cs1$$7.val;
  var v663 = v1450.toLowerCase();
  var v1451 = cs2$$7.val;
  var v664 = v1451.toLowerCase();
  return v663 > v664
}
function sc_isCharStringCILessEqual(cs1$$8, cs2$$8) {
  var v1452 = cs1$$8.val;
  var v665 = v1452.toLowerCase();
  var v1453 = cs2$$8.val;
  var v666 = v1453.toLowerCase();
  return v665 <= v666
}
function sc_isCharStringCIGreaterEqual(cs1$$9, cs2$$9) {
  var v1454 = cs1$$9.val;
  var v667 = v1454.toLowerCase();
  var v1455 = cs2$$9.val;
  var v668 = v1455.toLowerCase();
  return v667 >= v668
}
function sc_Char(c$$1) {
  var v669 = sc_Char.lazy;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var cached = v669[c$$1]
  }
  if(cached) {
    return cached
  }
  this.val = c$$1;
  var v670 = sc_Char.lazy;
  JAMScript.set(v670, c$$1, this);
  return undefined
}
function sc_isChar(c$$2) {
  return c$$2 instanceof sc_Char
}
function sc_isCharOfClass(c$$3, cl) {
  var v671 = cl.indexOf(c$$3);
  return v671 != -1
}
function sc_isCharAlphabetic(c$$4) {
  var v1456 = c$$4.val;
  var v672 = sc_isCharOfClass(v1456, SC_LOWER_CLASS);
  var v1458 = !v672;
  if(v1458) {
    var v1457 = c$$4.val;
    v672 = sc_isCharOfClass(v1457, SC_UPPER_CLASS)
  }
  return v672
}
function sc_isCharNumeric(c$$5) {
  var v673 = c$$5.val;
  return sc_isCharOfClass(v673, SC_NUMBER_CLASS)
}
function sc_isCharWhitespace(c$$6) {
  var tmp$$2 = c$$6.val;
  var v674 = tmp$$2 === " ";
  var v1460 = !v674;
  if(v1460) {
    var v1459 = tmp$$2 === "\r";
    var v1836 = !v1459;
    if(v1836) {
      var v1835 = tmp$$2 === "\n";
      var v2179 = !v1835;
      if(v2179) {
        var v2178 = tmp$$2 === "\t";
        var v2487 = !v2178;
        if(v2487) {
          v2178 = tmp$$2 === "\f"
        }
        v1835 = v2178
      }
      v1459 = v1835
    }
    v674 = v1459
  }
  return v674
}
function sc_isCharUpperCase(c$$7) {
  var v675 = c$$7.val;
  return sc_isCharOfClass(v675, SC_UPPER_CLASS)
}
function sc_isCharLowerCase(c$$8) {
  var v676 = c$$8.val;
  return sc_isCharOfClass(v676, SC_LOWER_CLASS)
}
function sc_char2integer(c$$9) {
  var v677 = c$$9.val;
  return v677.charCodeAt(0)
}
function sc_integer2char(n$$8) {
  var v678 = String.fromCharCode(n$$8);
  return new sc_Char(v678)
}
function sc_charUpcase(c$$10) {
  var v1461 = c$$10.val;
  var v679 = v1461.toUpperCase();
  return new sc_Char(v679)
}
function sc_charDowncase(c$$11) {
  var v1462 = c$$11.val;
  var v680 = v1462.toLowerCase();
  return new sc_Char(v680)
}
function sc_makeJSStringOfLength(k$$2, c$$12) {
  var fill$$1;
  var v681 = c$$12 === undefined;
  if(v681) {
    fill$$1 = " "
  }else {
    fill$$1 = c$$12
  }
  var res$$15 = "";
  var len$$1 = 1;
  var v683 = k$$2 >= len$$1;
  for(;v683;) {
    var v682 = k$$2 & len$$1;
    if(v682) {
      res$$15 = res$$15.concat(fill$$1)
    }
    fill$$1 = fill$$1.concat(fill$$1);
    len$$1 = len$$1 * 2;
    v683 = k$$2 >= len$$1
  }
  return res$$15
}
function sc_makejsString(k$$3, c$$13) {
  var fill$$2;
  if(c$$13) {
    fill$$2 = c$$13.val
  }else {
    fill$$2 = " "
  }
  return sc_makeJSStringOfLength(k$$3, fill$$2)
}
function sc_jsstring2list(s$$5) {
  var res$$16 = null;
  var v684 = s$$5.length;
  var i$$27 = v684 - 1;
  var v686 = i$$27 >= 0;
  for(;v686;) {
    var v1463 = s$$5.charAt(i$$27);
    var v685 = new sc_Char(v1463);
    res$$16 = sc_cons(v685, res$$16);
    i$$27 = i$$27 - 1;
    v686 = i$$27 >= 0
  }
  return res$$16
}
function sc_list2jsstring(l$$12) {
  var a$$3 = new Array;
  var v688 = l$$12 !== null;
  for(;v688;) {
    var v1464 = l$$12.car;
    var v687 = v1464.val;
    a$$3.push(v687);
    l$$12 = l$$12.cdr;
    v688 = l$$12 !== null
  }
  var v689 = "".concat;
  return JAMScript.call(v689.apply, v689, ["", a$$3])
}
function sc_isVector(v) {
  return v instanceof sc_Vector
}
function sc_isVectorEqual(v1$$1, v2, comp$$1) {
  var v1465 = v1$$1.length;
  var v1466 = v2.length;
  var v690 = v1465 !== v1466;
  if(v690) {
    return false
  }
  var i$$29 = 0;
  var v1467 = v1$$1.length;
  var v692 = i$$29 < v1467;
  for(;v692;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1837 = v1$$1[i$$29]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1838 = v2[i$$29]
    }
    var v1468 = JAMScript.call(comp$$1, null, [v1837, v1838]);
    var v691 = !v1468;
    if(v691) {
      return false
    }
    i$$29 = i$$29 + 1;
    var v1469 = v1$$1.length;
    v692 = i$$29 < v1469
  }
  return true
}
function sc_makeVector(size$$4, fill$$3) {
  var a$$4 = JAMScript.new(sc_Vector, [size$$4]);
  var v693 = fill$$3 !== undefined;
  if(v693) {
    sc_vectorFillBang(a$$4, fill$$3)
  }
  return a$$4
}
function sc_vector() {
  var a$$5 = JAMScript.new(sc_Vector, []);
  var i$$30 = 0;
  var v1470 = arguments.length;
  var v695 = i$$30 < v1470;
  for(;v695;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v694 = arguments[i$$30]
    }
    a$$5.push(v694);
    i$$30 = i$$30 + 1;
    var v1471 = arguments.length;
    v695 = i$$30 < v1471
  }
  return a$$5
}
function sc_vectorLength(v$$1) {
  return v$$1.length
}
function sc_vectorRef(v$$2, pos) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    return v$$2[pos]
  }
}
function sc_vectorSetBang(v$$3, pos$$1, val$$3) {
  JAMScript.set(v$$3, pos$$1, val$$3);
  return
}
function sc_vector2list(a$$6) {
  var res$$18 = null;
  var v696 = a$$6.length;
  var i$$31 = v696 - 1;
  var v698 = i$$31 >= 0;
  for(;v698;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v697 = a$$6[i$$31]
    }
    res$$18 = sc_cons(v697, res$$18);
    i$$31 = i$$31 - 1;
    v698 = i$$31 >= 0
  }
  return res$$18
}
function sc_list2vector(l$$13) {
  var a$$7 = JAMScript.new(sc_Vector, []);
  var v700 = l$$13 !== null;
  for(;v700;) {
    var v699 = l$$13.car;
    a$$7.push(v699);
    l$$13 = l$$13.cdr;
    v700 = l$$13 !== null
  }
  return a$$7
}
function sc_vectorFillBang(a$$8, fill$$4) {
  var i$$32 = 0;
  var v1472 = a$$8.length;
  var v701 = i$$32 < v1472;
  for(;v701;) {
    a$$8[i$$32] = fill$$4;
    i$$32 = i$$32 + 1;
    var v1473 = a$$8.length;
    v701 = i$$32 < v1473
  }
  return
}
function sc_copyVector(a$$9, len$$2) {
  var v1474 = a$$9.length;
  var v702 = len$$2 <= v1474;
  if(v702) {
    return a$$9.slice(0, len$$2)
  }else {
    var tmp$$3 = a$$9.concat();
    tmp$$3.length = len$$2;
    return tmp$$3
  }
  return
}
function sc_vectorCopy(a$$10, start$$5, end$$1) {
  return a$$10.slice(start$$5, end$$1)
}
function sc_vectorCopyBang(target$$37, tstart, source$$1, sstart, send) {
  var v703 = !sstart;
  if(v703) {
    sstart = 0
  }
  var v704 = !send;
  if(v704) {
    send = source$$1.length
  }
  var v708 = tstart <= sstart;
  if(v708) {
    var i$$33 = tstart;
    var j = sstart;
    var v705 = j < send;
    for(;v705;) {
      JAMScript.set(target$$37, i$$33, source$$1[j], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
      i$$33 = i$$33 + 1;
      j = j + 1;
      v705 = j < send
    }
  }else {
    var diff = send - sstart;
    var v706 = tstart + diff;
    i$$33 = v706 - 1;
    j = send - 1;
    var v707 = j >= sstart;
    for(;v707;) {
      JAMScript.set(target$$37, i$$33, source$$1[j], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
      i$$33 = i$$33 - 1;
      j = j - 1;
      v707 = j >= sstart
    }
  }
  return target$$37
}
function sc_isProcedure(o$$13) {
  var v709 = typeof o$$13;
  return v709 === "function"
}
function sc_apply(proc) {
  var args = new Array;
  var i$$34 = 1;
  var v1839 = arguments.length;
  var v1475 = v1839 - 1;
  var v711 = i$$34 < v1475;
  for(;v711;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v710 = arguments[i$$34]
    }
    args.push(v710);
    i$$34 = i$$34 + 1;
    var v1840 = arguments.length;
    var v1476 = v1840 - 1;
    v711 = i$$34 < v1476
  }
  var v1477 = arguments.length;
  var v712 = v1477 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var l$$14 = arguments[v712]
  }
  var v714 = l$$14 !== null;
  for(;v714;) {
    var v713 = l$$14.car;
    args.push(v713);
    l$$14 = l$$14.cdr;
    v714 = l$$14 !== null
  }
  return JAMScript.call(proc.apply, proc, [null, args])
}
function sc_map(proc$$1, l1$$4) {
  var v715 = l1$$4 === undefined;
  if(v715) {
    return null
  }
  var v716 = arguments.length;
  var nbApplyArgs = v716 - 1;
  var applyArgs = new Array(nbApplyArgs);
  var revres = null;
  var v722 = l1$$4 !== null;
  for(;v722;) {
    var i$$35 = 0;
    var v720 = i$$35 < nbApplyArgs;
    for(;v720;) {
      var v717 = i$$35;
      var v1841 = i$$35 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1478 = arguments[v1841]
      }
      applyArgs[v717] = v1478.car;
      var v718 = arguments;
      var v719 = i$$35 + 1;
      var v1842 = i$$35 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1479 = arguments[v1842]
      }
      v718[v719] = v1479.cdr;
      i$$35 = i$$35 + 1;
      v720 = i$$35 < nbApplyArgs
    }
    var v721 = JAMScript.call(proc$$1.apply, proc$$1, [null, applyArgs]);
    revres = sc_cons(v721, revres);
    v722 = l1$$4 !== null
  }
  return sc_reverseAppendBang(revres, null)
}
function sc_mapBang(proc$$2, l1$$5) {
  var v723 = l1$$5 === undefined;
  if(v723) {
    return null
  }
  var l1_orig = l1$$5;
  var v724 = arguments.length;
  var nbApplyArgs$$1 = v724 - 1;
  var applyArgs$$1 = new Array(nbApplyArgs$$1);
  var v730 = l1$$5 !== null;
  for(;v730;) {
    var tmp$$4 = l1$$5;
    var i$$36 = 0;
    var v728 = i$$36 < nbApplyArgs$$1;
    for(;v728;) {
      var v725 = i$$36;
      var v1843 = i$$36 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1480 = arguments[v1843]
      }
      applyArgs$$1[v725] = v1480.car;
      var v726 = arguments;
      var v727 = i$$36 + 1;
      var v1844 = i$$36 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1481 = arguments[v1844]
      }
      v726[v727] = v1481.cdr;
      i$$36 = i$$36 + 1;
      v728 = i$$36 < nbApplyArgs$$1
    }
    var v729 = tmp$$4;
    var v3721 = JAMScript.call(proc$$2.apply, proc$$2, [null, applyArgs$$1]);
    v729.car = v3721;
    v730 = l1$$5 !== null
  }
  return l1_orig
}
function sc_forEach(proc$$3, l1$$6) {
  var v731 = l1$$6 === undefined;
  if(v731) {
    return undefined
  }
  var v732 = arguments.length;
  var nbApplyArgs$$2 = v732 - 1;
  var applyArgs$$2 = new Array(nbApplyArgs$$2);
  var v737 = l1$$6 !== null;
  for(;v737;) {
    var i$$37 = 0;
    var v736 = i$$37 < nbApplyArgs$$2;
    for(;v736;) {
      var v733 = i$$37;
      var v1845 = i$$37 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1482 = arguments[v1845]
      }
      applyArgs$$2[v733] = v1482.car;
      var v734 = arguments;
      var v735 = i$$37 + 1;
      var v1846 = i$$37 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1483 = arguments[v1846]
      }
      v734[v735] = v1483.cdr;
      i$$37 = i$$37 + 1;
      v736 = i$$37 < nbApplyArgs$$2
    }
    JAMScript.call(proc$$3.apply, proc$$3, [null, applyArgs$$2]);
    v737 = l1$$6 !== null
  }
  return undefined
}
function sc_filter(proc$$4, l1$$7) {
  var dummy$$4 = {cdr:null};
  var tail$$4 = dummy$$4;
  var v740 = l1$$7 !== null;
  for(;v740;) {
    var v1847 = l1$$7.car;
    var v1484 = JAMScript.call(proc$$4, null, [v1847]);
    var v739 = v1484 !== false;
    if(v739) {
      var v738 = tail$$4;
      var v1485 = l1$$7.car;
      var v3722 = sc_cons(v1485, null);
      v738.cdr = v3722;
      tail$$4 = tail$$4.cdr
    }
    l1$$7 = l1$$7.cdr;
    v740 = l1$$7 !== null
  }
  return dummy$$4.cdr
}
function sc_filterBang(proc$$5, l1$$8) {
  var head = sc_cons("dummy", l1$$8);
  var it = head;
  var next = l1$$8;
  var v742 = next !== null;
  for(;v742;) {
    var v1848 = next.car;
    var v1486 = JAMScript.call(proc$$5, null, [v1848]);
    var v741 = v1486 !== false;
    if(v741) {
      it.cdr = next;
      it = next
    }
    next = next.cdr;
    v742 = next !== null
  }
  it.cdr = null;
  return head.cdr
}
function sc_filterMap1(proc$$6, l1$$9) {
  var revres$$1 = null;
  var v745 = l1$$9 !== null;
  for(;v745;) {
    var v743 = l1$$9.car;
    var tmp$$5 = JAMScript.call(proc$$6, null, [v743]);
    var v744 = tmp$$5 !== false;
    if(v744) {
      revres$$1 = sc_cons(tmp$$5, revres$$1)
    }
    l1$$9 = l1$$9.cdr;
    v745 = l1$$9 !== null
  }
  return sc_reverseAppendBang(revres$$1, null)
}
function sc_filterMap2(proc$$7, l1$$10, l2$$3) {
  var revres$$2 = null;
  var v749 = l1$$10 !== null;
  for(;v749;) {
    var v746 = l1$$10.car;
    var v747 = l2$$3.car;
    var tmp$$6 = JAMScript.call(proc$$7, null, [v746, v747]);
    var v748 = tmp$$6 !== false;
    if(v748) {
      revres$$2 = sc_cons(tmp$$6, revres$$2)
    }
    l1$$10 = l1$$10.cdr;
    l2$$3 = l2$$3.cdr;
    v749 = l1$$10 !== null
  }
  return sc_reverseAppendBang(revres$$2, null)
}
function sc_filterMap(proc$$8, l1$$11, l2$$4, l3) {
  var v751 = l2$$4 === undefined;
  if(v751) {
    return sc_filterMap1(proc$$8, l1$$11)
  }else {
    var v750 = l3 === undefined;
    if(v750) {
      return sc_filterMap2(proc$$8, l1$$11, l2$$4)
    }
  }
  var v752 = arguments.length;
  var nbApplyArgs$$3 = v752 - 1;
  var applyArgs$$3 = new Array(nbApplyArgs$$3);
  var revres$$3 = null;
  var v758 = l1$$11 !== null;
  for(;v758;) {
    var i$$38 = 0;
    var v756 = i$$38 < nbApplyArgs$$3;
    for(;v756;) {
      var v753 = i$$38;
      var v1849 = i$$38 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1487 = arguments[v1849]
      }
      applyArgs$$3[v753] = v1487.car;
      var v754 = arguments;
      var v755 = i$$38 + 1;
      var v1850 = i$$38 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1488 = arguments[v1850]
      }
      v754[v755] = v1488.cdr;
      i$$38 = i$$38 + 1;
      v756 = i$$38 < nbApplyArgs$$3
    }
    var tmp$$7 = JAMScript.call(proc$$8.apply, proc$$8, [null, applyArgs$$3]);
    var v757 = tmp$$7 !== false;
    if(v757) {
      revres$$3 = sc_cons(tmp$$7, revres$$3)
    }
    v758 = l1$$11 !== null
  }
  return sc_reverseAppendBang(revres$$3, null)
}
function sc_any(proc$$9, l$$15) {
  var revres$$4 = null;
  var v761 = l$$15 !== null;
  for(;v761;) {
    var v759 = l$$15.car;
    var tmp$$8 = JAMScript.call(proc$$9, null, [v759]);
    var v760 = tmp$$8 !== false;
    if(v760) {
      return tmp$$8
    }
    l$$15 = l$$15.cdr;
    v761 = l$$15 !== null
  }
  return false
}
function sc_anyPred(proc$$10, l$$16) {
  var v762 = sc_any(proc$$10, l$$16);
  return v762 !== false
}
function sc_every(proc$$11, l$$17) {
  var revres$$5 = null;
  var tmp$$9 = true;
  var v765 = l$$17 !== null;
  for(;v765;) {
    var v763 = l$$17.car;
    tmp$$9 = JAMScript.call(proc$$11, null, [v763]);
    var v764 = tmp$$9 === false;
    if(v764) {
      return false
    }
    l$$17 = l$$17.cdr;
    v765 = l$$17 !== null
  }
  return tmp$$9
}
function sc_everyPred(proc$$12, l$$18) {
  var tmp$$10 = sc_every(proc$$12, l$$18);
  var v766 = tmp$$10 !== false;
  if(v766) {
    return true
  }
  return false
}
function sc_force(o$$14) {
  return JAMScript.call(o$$14, null, [])
}
function sc_makePromise(proc$$13) {
  function v2$$1() {
    var v768 = !isResultReady;
    if(v768) {
      var tmp$$11 = JAMScript.call(proc$$13, null, []);
      var v767 = !isResultReady;
      if(v767) {
        isResultReady = true;
        result$$3 = tmp$$11
      }
    }
    return result$$3
  }
  var isResultReady = false;
  var result$$3 = undefined;
  return v2$$1
}
function sc_Values(values$$4) {
  this.values = values$$4;
  return
}
function sc_values() {
  var v1489 = arguments.length;
  var v769 = v1489 === 1;
  if(v769) {
    return arguments[0]
  }else {
    return new sc_Values(arguments)
  }
  return
}
function sc_callWithValues(producer, consumer) {
  var produced = JAMScript.call(producer, null, []);
  var v771 = produced instanceof sc_Values;
  if(v771) {
    var v770 = produced.values;
    return JAMScript.call(consumer.apply, consumer, [null, v770])
  }else {
    return JAMScript.call(consumer, null, [produced])
  }
  return
}
function sc_dynamicWind(before$$1, thunk, after) {
  JAMScript.call(before$$1, null, []);
  try {
    var res$$19 = JAMScript.call(thunk, null, []);
    return res$$19
  }finally {
    JAMScript.call(after, null, [])
  }
  return
}
function sc_Struct(name$$33) {
  this.name = name$$33;
  return
}
function sc_makeStruct(name$$34) {
  return new sc_Struct(name$$34)
}
function sc_isStruct(o$$15) {
  return o$$15 instanceof sc_Struct
}
function sc_isStructNamed(name$$35, s$$6) {
  var v772 = s$$6 instanceof sc_Struct;
  if(v772) {
    var v1490 = s$$6.name;
    v772 = v1490 === name$$35
  }
  return v772
}
function sc_getStructField(s$$7, name$$36, field) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    return s$$7[field]
  }
}
function sc_setStructFieldBang(s$$8, name$$37, field$$1, val$$4) {
  JAMScript.set(s$$8, field$$1, val$$4);
  return
}
function sc_bitNot(x$$67) {
  return~x$$67
}
function sc_bitAnd(x$$68, y$$37) {
  return x$$68 & y$$37
}
function sc_bitOr(x$$69, y$$38) {
  return x$$69 | y$$38
}
function sc_bitXor(x$$70, y$$39) {
  return x$$70 ^ y$$39
}
function sc_bitLsh(x$$71, y$$40) {
  return x$$71 << y$$40
}
function sc_bitRsh(x$$72, y$$41) {
  return x$$72 >> y$$41
}
function sc_bitUrsh(x$$73, y$$42) {
  return x$$73 >>> y$$42
}
function sc_jsField(o$$16, field$$2) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    return o$$16[field$$2]
  }
}
function sc_setJsFieldBang(o$$17, field$$3, val$$5) {
  return JAMScript.set(o$$17, field$$3, val$$5)
}
function sc_deleteJsFieldBang(o$$18, field$$4) {
  delete o$$18[field$$4];
  return
}
function sc_jsCall(o$$19, fun$$3) {
  var args$$1 = new Array;
  var i$$39 = 2;
  var v1491 = arguments.length;
  var v774 = i$$39 < v1491;
  for(;v774;) {
    var v773 = i$$39 - 2;
    args$$1[v773] = arguments[i$$39];
    i$$39 = i$$39 + 1;
    var v1492 = arguments.length;
    v774 = i$$39 < v1492
  }
  return JAMScript.call(fun$$3.apply, fun$$3, [o$$19, args$$1])
}
function sc_jsMethodCall(o$$20, field$$5) {
  var args$$2 = new Array;
  var i$$40 = 2;
  var v1493 = arguments.length;
  var v776 = i$$40 < v1493;
  for(;v776;) {
    var v775 = i$$40 - 2;
    args$$2[v775] = arguments[i$$40];
    i$$40 = i$$40 + 1;
    var v1494 = arguments.length;
    v776 = i$$40 < v1494
  }
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v777 = o$$20[field$$5]
  }
  return JAMScript.call(v777.apply, v777, [o$$20, args$$2])
}
function sc_jsNew(c$$14) {
  var evalStr = "new c(";
  var v1851;
  var v2488 = arguments.length;
  var v2180 = v2488 > 1;
  if(v2180) {
    v1851 = "arguments[1]"
  }else {
    v1851 = ""
  }
  var v1495 = v1851;
  evalStr = evalStr + v1495;
  var i$$41 = 2;
  var v1496 = arguments.length;
  var v778 = i$$41 < v1496;
  for(;v778;) {
    var v1852 = ", arguments[" + i$$41;
    var v1497 = v1852 + "]";
    evalStr = evalStr + v1497;
    i$$41 = i$$41 + 1;
    var v1498 = arguments.length;
    v778 = i$$41 < v1498
  }
  evalStr = evalStr + ")";
  if(JAMScript.isEval(eval)) {
    return eval("introspect(JAMScript.introspectors.processAll) { " + evalStr + " }")
  }else {
    return JAMScript.call(eval, null, [evalStr])
  }
}
function sc_pregexp(re) {
  var v779 = sc_string2jsstring(re);
  return new RegExp(v779)
}
function sc_pregexpMatch(re$$1, s$$9) {
  var v780;
  var v1499 = re$$1 instanceof RegExp;
  if(v1499) {
    v780 = re$$1
  }else {
    v780 = sc_pregexp(re$$1)
  }
  var reg = v780;
  var v781 = sc_string2jsstring(s$$9);
  var tmp$$12 = reg.exec(v781);
  var v782 = tmp$$12 == null;
  if(v782) {
    return false
  }
  var res$$20 = null;
  var v783 = tmp$$12.length;
  var i$$42 = v783 - 1;
  var v786 = i$$42 >= 0;
  for(;v786;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1500 = tmp$$12[i$$42]
    }
    var v785 = v1500 !== null;
    if(v785) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1501 = tmp$$12[i$$42]
      }
      var v784 = sc_jsstring2string(v1501);
      res$$20 = sc_cons(v784, res$$20)
    }else {
      res$$20 = sc_cons(false, res$$20)
    }
    i$$42 = i$$42 - 1;
    v786 = i$$42 >= 0
  }
  return res$$20
}
function sc_pregexpReplace(re$$2, s1, s2) {
  var reg$$1;
  var jss1 = sc_string2jsstring(s1);
  var jss2 = sc_string2jsstring(s2);
  var v790 = re$$2 instanceof RegExp;
  if(v790) {
    var v788 = re$$2.global;
    if(v788) {
      reg$$1 = re$$2
    }else {
      var v787 = re$$2.source;
      reg$$1 = new RegExp(v787)
    }
  }else {
    var v789 = sc_string2jsstring(re$$2);
    reg$$1 = new RegExp(v789)
  }
  return jss1.replace(reg$$1, jss2)
}
function sc_pregexpReplaceAll(re$$3, s1$$1, s2$$1) {
  var reg$$2;
  var jss1$$1 = sc_string2jsstring(s1$$1);
  var jss2$$1 = sc_string2jsstring(s2$$1);
  var v794 = re$$3 instanceof RegExp;
  if(v794) {
    var v792 = re$$3.global;
    if(v792) {
      reg$$2 = re$$3
    }else {
      var v791 = re$$3.source;
      reg$$2 = new RegExp(v791, "g")
    }
  }else {
    var v793 = sc_string2jsstring(re$$3);
    reg$$2 = new RegExp(v793, "g")
  }
  return jss1$$1.replace(reg$$2, jss2$$1)
}
function sc_pregexpSplit(re$$4, s$$10) {
  var v795;
  var v1503 = re$$4 instanceof RegExp;
  if(v1503) {
    v795 = re$$4
  }else {
    var v1502 = sc_string2jsstring(re$$4);
    v795 = new RegExp(v1502)
  }
  var reg$$3 = v795;
  var jss = sc_string2jsstring(s$$10);
  var tmp$$13 = jss.split(reg$$3);
  var v796 = tmp$$13 == null;
  if(v796) {
    return false
  }
  return sc_vector2list(tmp$$13)
}
function sc_random(n$$9) {
  var v1504 = JAMScript.call(Math.random, Math, []);
  var v797 = v1504 * n$$9;
  return Math.floor(v797)
}
function sc_currentDate() {
  return new Date
}
function sc_Hashtable() {
  return
}
function sc_HashtableElement(key$$17, val$$6) {
  this.key = key$$17;
  this.val = val$$6;
  return
}
function sc_makeHashtable() {
  return new sc_Hashtable
}
function sc_hashtablePutBang(ht$$3, key$$18, val$$7) {
  var hash = sc_hash(key$$18);
  var v3723 = new sc_HashtableElement(key$$18, val$$7);
  JAMScript.set(ht$$3, hash, v3723);
  return
}
function sc_hashtableGet(ht$$4, key$$19) {
  var hash$$1 = sc_hash(key$$19);
  var v799 = hash$$1 in ht$$4;
  if(v799) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v798 = ht$$4[hash$$1]
    }
    return v798.val
  }else {
    return false
  }
  return
}
function sc_hashtableForEach(ht$$5, f$$1) {
  var v$$4;
  for(v$$4 in ht$$5) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1505 = ht$$5[v$$4]
    }
    var v802 = v1505 instanceof sc_HashtableElement;
    if(v802) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1506 = ht$$5[v$$4]
      }
      var v800 = v1506.key;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1507 = ht$$5[v$$4]
      }
      var v801 = v1507.val;
      JAMScript.call(f$$1, null, [v800, v801])
    }
  }
  return
}
function sc_hashtableContains(ht$$6, key$$20) {
  var hash$$2 = sc_hash(key$$20);
  var v803 = hash$$2 in ht$$6;
  if(v803) {
    return true
  }else {
    return false
  }
  return
}
function sc_hash(o$$21) {
  var v810 = o$$21 === null;
  if(v810) {
    return"null"
  }else {
    var v809 = o$$21 === undefined;
    if(v809) {
      return"undefined"
    }else {
      var v808 = o$$21 === true;
      if(v808) {
        return"true"
      }else {
        var v807 = o$$21 === false;
        if(v807) {
          return"false"
        }else {
          var v1508 = typeof o$$21;
          var v806 = v1508 === "number";
          if(v806) {
            return"num-" + o$$21
          }else {
            var v1509 = typeof o$$21;
            var v805 = v1509 === "string";
            if(v805) {
              return"jsstr-" + o$$21
            }else {
              var v804 = o$$21.sc_getHash;
              if(v804) {
                return JAMScript.call(o$$21.sc_getHash, o$$21, [])
              }else {
                return sc_counterHash.call(o$$21)
              }
            }
          }
        }
      }
    }
  }
  return
}
function sc_counterHash() {
  var v1510 = this.sc_hash;
  var v811 = !v1510;
  if(v811) {
    this.sc_hash = "hash-" + SC_HASH_COUNTER;
    SC_HASH_COUNTER = SC_HASH_COUNTER + 1
  }
  return this.sc_hash
}
function sc_Trampoline(args$$3, maxTailCalls) {
  this["__trampoline return__"] = true;
  this.args = args$$3;
  this.MAX_TAIL_CALLs = maxTailCalls;
  return
}
function sc_bindExitLambda(proc$$14) {
  function escape$$1(res$$22) {
    escape_obj.res = res$$22;
    throw escape_obj;
  }
  var escape_obj = new sc_BindExitException;
  try {
    return JAMScript.call(proc$$14, null, [escape$$1])
  }catch(e$$8) {
    var v812 = e$$8 === escape_obj;
    if(v812) {
      return e$$8.res
    }
    throw e$$8;
  }
  return
}
function sc_BindExitException() {
  this._internalException = true;
  return
}
function sc_EOF() {
  return
}
function sc_Port() {
  return
}
function sc_InputPort() {
  return
}
function sc_ErrorInputPort() {
  return
}
function sc_StringInputPort(jsStr) {
  var v3724 = new String(jsStr);
  this.str = v3724;
  this.pos = 0;
  return
}
function sc_Token(type$$25, val$$8, pos$$2) {
  this.type = type$$25;
  this.val = val$$8;
  this.pos = pos$$2;
  return
}
function sc_Tokenizer(port) {
  this.port = port;
  return
}
function sc_Reader(tokenizer) {
  this.tokenizer = tokenizer;
  var v3725 = new Array;
  this.backref = v3725;
  return
}
function sc_read(port$$2) {
  var v813 = port$$2 === undefined;
  if(v813) {
    port$$2 = SC_DEFAULT_IN
  }
  var v814 = new sc_Tokenizer(port$$2);
  var reader = new sc_Reader(v814);
  return JAMScript.call(reader.read, reader, [])
}
function sc_readChar(port$$3) {
  var v815 = port$$3 === undefined;
  if(v815) {
    port$$3 = SC_DEFAULT_IN
  }
  var t$$1 = JAMScript.call(port$$3.readChar, port$$3, []);
  var v816;
  var v1511 = t$$1 === SC_EOF_OBJECT;
  if(v1511) {
    v816 = t$$1
  }else {
    v816 = new sc_Char(t$$1)
  }
  return v816
}
function sc_peekChar(port$$4) {
  var v817 = port$$4 === undefined;
  if(v817) {
    port$$4 = SC_DEFAULT_IN
  }
  var t$$2 = JAMScript.call(port$$4.peekChar, port$$4, []);
  var v818;
  var v1512 = t$$2 === SC_EOF_OBJECT;
  if(v1512) {
    v818 = t$$2
  }else {
    v818 = new sc_Char(t$$2)
  }
  return v818
}
function sc_isCharReady(port$$5) {
  var v819 = port$$5 === undefined;
  if(v819) {
    port$$5 = SC_DEFAULT_IN
  }
  return JAMScript.call(port$$5.isCharReady, port$$5, [])
}
function sc_closeInputPort(p$$33) {
  return JAMScript.call(p$$33.close, p$$33, [])
}
function sc_isInputPort(o$$23) {
  return o$$23 instanceof sc_InputPort
}
function sc_isEOFObject(o$$24) {
  return o$$24 === SC_EOF_OBJECT
}
function sc_currentInputPort() {
  return SC_DEFAULT_IN
}
function sc_callWithInputFile(s$$11, proc$$15) {
  throw"can't open " + s$$11;
}
function sc_callWithOutputFile(s$$12, proc$$16) {
  throw"can't open " + s$$12;
}
function sc_withInputFromFile(s$$13, thunk$$1) {
  throw"can't open " + s$$13;
}
function sc_withOutputToFile(s$$14, thunk$$2) {
  throw"can't open " + s$$14;
}
function sc_openInputFile(s$$15) {
  throw"can't open " + s$$15;
}
function sc_openOutputFile(s$$16) {
  throw"can't open " + s$$16;
}
function sc_basename(p$$34) {
  var i$$43 = p$$34.lastIndexOf("/");
  var v822 = i$$43 >= 0;
  if(v822) {
    var v820 = i$$43 + 1;
    var v821 = p$$34.length;
    return p$$34.substring(v820, v821)
  }else {
    return""
  }
  return
}
function sc_dirname(p$$35) {
  var i$$44 = p$$35.lastIndexOf("/");
  var v823 = i$$44 >= 0;
  if(v823) {
    return p$$35.substring(0, i$$44)
  }else {
    return""
  }
  return
}
function sc_withInputFromPort(p$$36, thunk$$3) {
  try {
    var tmp$$19 = SC_DEFAULT_IN;
    SC_DEFAULT_IN = p$$36;
    return JAMScript.call(thunk$$3, null, [])
  }finally {
    SC_DEFAULT_IN = tmp$$19
  }
  return
}
function sc_withInputFromString(s$$17, thunk$$4) {
  var v1513 = sc_string2jsstring(s$$17);
  var v824 = new sc_StringInputPort(v1513);
  return sc_withInputFromPort(v824, thunk$$4)
}
function sc_withOutputToPort(p$$37, thunk$$5) {
  try {
    var tmp$$20 = SC_DEFAULT_OUT;
    SC_DEFAULT_OUT = p$$37;
    return JAMScript.call(thunk$$5, null, [])
  }finally {
    SC_DEFAULT_OUT = tmp$$20
  }
  return
}
function sc_withOutputToString(thunk$$6) {
  var p$$38 = new sc_StringOutputPort;
  sc_withOutputToPort(p$$38, thunk$$6);
  return JAMScript.call(p$$38.close, p$$38, [])
}
function sc_withOutputToProcedure(proc$$17, thunk$$7) {
  function t$$3(s$$18) {
    var v825 = sc_jsstring2string(s$$18);
    JAMScript.call(proc$$17, null, [v825]);
    return
  }
  var v826 = new sc_GenericOutputPort(t$$3);
  return sc_withOutputToPort(v826, thunk$$7)
}
function sc_openOutputString() {
  return new sc_StringOutputPort
}
function sc_openInputString(str$$6) {
  var v827 = sc_string2jsstring(str$$6);
  return new sc_StringInputPort(v827)
}
function sc_OutputPort() {
  return
}
function sc_StringOutputPort() {
  this.res = "";
  return
}
function sc_getOutputString(sp) {
  var v828 = sp.res;
  return sc_jsstring2string(v828)
}
function sc_ErrorOutputPort() {
  return
}
function sc_GenericOutputPort(appendJSString, close$$1) {
  this.appendJSString = appendJSString;
  if(close$$1) {
    this.close = close$$1
  }
  return
}
function sc_isOutputPort(o$$25) {
  return o$$25 instanceof sc_OutputPort
}
function sc_closeOutputPort(p$$39) {
  return JAMScript.call(p$$39.close, p$$39, [])
}
function sc_write(o$$26, p$$40) {
  var v829 = p$$40 === undefined;
  if(v829) {
    p$$40 = SC_DEFAULT_OUT
  }
  var v830 = sc_toWriteString(o$$26);
  JAMScript.call(p$$40.appendJSString, p$$40, [v830]);
  return
}
function sc_toWriteString(o$$27) {
  var v837 = o$$27 === null;
  if(v837) {
    return"()"
  }else {
    var v836 = o$$27 === true;
    if(v836) {
      return"#t"
    }else {
      var v835 = o$$27 === false;
      if(v835) {
        return"#f"
      }else {
        var v834 = o$$27 === undefined;
        if(v834) {
          return"#unspecified"
        }else {
          var v1514 = typeof o$$27;
          var v833 = v1514 === "function";
          if(v833) {
            var v1515 = sc_hash(o$$27);
            var v831 = "#<procedure " + v1515;
            return v831 + ">"
          }else {
            var v832 = o$$27.sc_toWriteString;
            if(v832) {
              return JAMScript.call(o$$27.sc_toWriteString, o$$27, [])
            }else {
              return JAMScript.call(o$$27.toString, o$$27, [])
            }
          }
        }
      }
    }
  }
  return
}
function sc_escapeWriteString(s$$21) {
  var res$$26 = "";
  var j$$1 = 0;
  i = 0;
  var v1516 = s$$21.length;
  var v842 = i < v1516;
  for(;v842;) {
    var v841 = s$$21.charAt(i);
    switch(v841) {
      case "\x00":
        var v1853 = s$$21.substring(j$$1, i);
        var v1517 = v1853 + "\\0";
        res$$26 = res$$26 + v1517;
        j$$1 = i + 1;
        break;
      case "\b":
        var v1854 = s$$21.substring(j$$1, i);
        var v1518 = v1854 + "\\b";
        res$$26 = res$$26 + v1518;
        j$$1 = i + 1;
        break;
      case "\f":
        var v1855 = s$$21.substring(j$$1, i);
        var v1519 = v1855 + "\\f";
        res$$26 = res$$26 + v1519;
        j$$1 = i + 1;
        break;
      case "\n":
        var v1856 = s$$21.substring(j$$1, i);
        var v1520 = v1856 + "\\n";
        res$$26 = res$$26 + v1520;
        j$$1 = i + 1;
        break;
      case "\r":
        var v1857 = s$$21.substring(j$$1, i);
        var v1521 = v1857 + "\\r";
        res$$26 = res$$26 + v1521;
        j$$1 = i + 1;
        break;
      case "\t":
        var v1858 = s$$21.substring(j$$1, i);
        var v1522 = v1858 + "\\t";
        res$$26 = res$$26 + v1522;
        j$$1 = i + 1;
        break;
      case "\v":
        var v1859 = s$$21.substring(j$$1, i);
        var v1523 = v1859 + "\\v";
        res$$26 = res$$26 + v1523;
        j$$1 = i + 1;
        break;
      case '"':
        var v1860 = s$$21.substring(j$$1, i);
        var v1524 = v1860 + '\\"';
        res$$26 = res$$26 + v1524;
        j$$1 = i + 1;
        break;
      case "\\":
        var v1861 = s$$21.substring(j$$1, i);
        var v1525 = v1861 + "\\\\";
        res$$26 = res$$26 + v1525;
        j$$1 = i + 1;
        break;
      default:
        var c$$21 = s$$21.charAt(i);
        var v1526 = "a" !== "a";
        if(v1526) {
          v1526 = c$$21 == "a"
        }
        var v838 = v1526;
        if(v838) {
          var v1862 = s$$21.substring(j$$1, i);
          var v1527 = v1862 + "\\a";
          res$$26 = res$$26 + v1527;
          j$$1 = i + 1;
          i = i + 1;
          var v1528 = s$$21.length;
          v842 = i < v1528;
          continue
        }
        var v1529 = "\v" !== "v";
        if(v1529) {
          v1529 = c$$21 == "\v"
        }
        var v839 = v1529;
        if(v839) {
          var v1863 = s$$21.substring(j$$1, i);
          var v1530 = v1863 + "\\v";
          res$$26 = res$$26 + v1530;
          j$$1 = i + 1;
          i = i + 1;
          var v1531 = s$$21.length;
          v842 = i < v1531;
          continue
        }
        var v1532 = s$$21.charAt(i);
        var v840 = v1532 < " ";
        if(v840) {
          var v2181 = s$$21.substring(j$$1, i);
          var v1864 = v2181 + "\\x";
          var v2182 = s$$21.charCodeAt(i);
          var v1865 = JAMScript.call(v2182.toString, v2182, [16]);
          var v1533 = v1864 + v1865;
          res$$26 = res$$26 + v1533;
          j$$1 = i + 1
        }
    }
    i = i + 1;
    var v1534 = s$$21.length;
    v842 = i < v1534
  }
  var v1535 = s$$21.substring(j$$1, i);
  res$$26 = res$$26 + v1535;
  return res$$26
}
function sc_display(o$$28, p$$41) {
  var v843 = p$$41 === undefined;
  if(v843) {
    p$$41 = SC_DEFAULT_OUT
  }
  var v844 = sc_toDisplayString(o$$28);
  JAMScript.call(p$$41.appendJSString, p$$41, [v844]);
  return
}
function sc_toDisplayString(o$$29) {
  var v851 = o$$29 === null;
  if(v851) {
    return"()"
  }else {
    var v850 = o$$29 === true;
    if(v850) {
      return"#t"
    }else {
      var v849 = o$$29 === false;
      if(v849) {
        return"#f"
      }else {
        var v848 = o$$29 === undefined;
        if(v848) {
          return"#unspecified"
        }else {
          var v1536 = typeof o$$29;
          var v847 = v1536 === "function";
          if(v847) {
            var v1537 = sc_hash(o$$29);
            var v845 = "#<procedure " + v1537;
            return v845 + ">"
          }else {
            var v846 = o$$29.sc_toDisplayString;
            if(v846) {
              return JAMScript.call(o$$29.sc_toDisplayString, o$$29, [])
            }else {
              return JAMScript.call(o$$29.toString, o$$29, [])
            }
          }
        }
      }
    }
  }
  return
}
function sc_newline(p$$42) {
  var v852 = p$$42 === undefined;
  if(v852) {
    p$$42 = SC_DEFAULT_OUT
  }
  JAMScript.call(p$$42.appendJSString, p$$42, ["\n"]);
  return
}
function sc_writeChar(c$$22, p$$43) {
  var v853 = p$$43 === undefined;
  if(v853) {
    p$$43 = SC_DEFAULT_OUT
  }
  var v854 = c$$22.val;
  JAMScript.call(p$$43.appendJSString, p$$43, [v854]);
  return
}
function sc_writeCircle(o$$30, p$$44) {
  var v855 = p$$44 === undefined;
  if(v855) {
    p$$44 = SC_DEFAULT_OUT
  }
  var v856 = sc_toWriteCircleString(o$$30);
  JAMScript.call(p$$44.appendJSString, p$$44, [v856]);
  return
}
function sc_toWriteCircleString(o$$31) {
  var symb = JAMScript.call(sc_gensym, null, ["writeCircle"]);
  var nbPointer = new Object;
  nbPointer.nb = 0;
  sc_prepWriteCircle(o$$31, symb, nbPointer);
  return sc_genToWriteCircleString(o$$31, symb)
}
function sc_prepWriteCircle(o$$32, symb$$1, nbPointer$$1) {
  var v1538 = o$$32 instanceof sc_Pair;
  var v1866 = !v1538;
  if(v1866) {
    v1538 = o$$32 instanceof sc_Vector
  }
  var v865 = v1538;
  if(v865) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1539 = o$$32[symb$$1]
    }
    var v859 = v1539 !== undefined;
    if(v859) {
      var v1540 = o$$32;
      var v1541 = symb$$1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1867 = o$$32[symb$$1]
      }
      JAMScript.set(v1540, v1541, v1867 + 1);
      var v1868 = symb$$1 + "nb";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1542 = o$$32[v1868]
      }
      var v858 = !v1542;
      if(v858) {
        var v857 = symb$$1 + "nb";
        JAMScript.set(o$$32, v857, nbPointer$$1.nb);
        var v1869 = nbPointer$$1;
        var v2183 = nbPointer$$1.nb;
        v1869.nb = v2183 + 1
      }
      return
    }
    JAMScript.set(o$$32, symb$$1, 0);
    var v864 = o$$32 instanceof sc_Pair;
    if(v864) {
      var v860 = o$$32.car;
      sc_prepWriteCircle(v860, symb$$1, nbPointer$$1);
      var v861 = o$$32.cdr;
      sc_prepWriteCircle(v861, symb$$1, nbPointer$$1)
    }else {
      var i$$45 = 0;
      var v1543 = o$$32.length;
      var v863 = i$$45 < v1543;
      for(;v863;) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v862 = o$$32[i$$45]
        }
        sc_prepWriteCircle(v862, symb$$1, nbPointer$$1);
        i$$45 = i$$45 + 1;
        var v1544 = o$$32.length;
        v863 = i$$45 < v1544
      }
    }
  }
  return
}
function sc_genToWriteCircleString(o$$33, symb$$2) {
  var v1870 = o$$33 instanceof sc_Pair;
  var v2184 = !v1870;
  if(v2184) {
    v1870 = o$$33 instanceof sc_Vector
  }
  var v1545 = v1870;
  var v866 = !v1545;
  if(v866) {
    return sc_toWriteString(o$$33)
  }
  return JAMScript.call(o$$33.sc_toWriteCircleString, o$$33, [symb$$2])
}
function sc_print(s$$22) {
  var v1546 = arguments.length;
  var v869 = v1546 === 1;
  if(v869) {
    sc_display(s$$22);
    sc_newline()
  }else {
    var i$$47 = 0;
    var v1547 = arguments.length;
    var v868 = i$$47 < v1547;
    for(;v868;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v867 = arguments[i$$47]
      }
      sc_display(v867);
      i$$47 = i$$47 + 1;
      var v1548 = arguments.length;
      v868 = i$$47 < v1548
    }
    sc_newline()
  }
  return
}
function sc_format(s$$23, args$$4) {
  var len$$3 = s$$23.length;
  var p$$45 = new sc_StringOutputPort;
  var i$$48 = 0;
  var j$$2 = 1;
  var v885 = i$$48 < len$$3;
  for(;v885;) {
    var i2 = s$$23.indexOf("~", i$$48);
    var v884 = i2 == -1;
    if(v884) {
      var v870 = s$$23.substring(i$$48, len$$3);
      JAMScript.call(p$$45.appendJSString, p$$45, [v870]);
      return JAMScript.call(p$$45.close, p$$45, [])
    }else {
      var v874 = i2 > i$$48;
      if(v874) {
        var v1549 = len$$3 - 1;
        var v873 = i2 == v1549;
        if(v873) {
          var v871 = s$$23.substring(i$$48, len$$3);
          JAMScript.call(p$$45.appendJSString, p$$45, [v871]);
          return JAMScript.call(p$$45.close, p$$45, [])
        }else {
          var v872 = s$$23.substring(i$$48, i2);
          JAMScript.call(p$$45.appendJSString, p$$45, [v872]);
          i$$48 = i2
        }
      }
      var v1550 = i2 + 1;
      var v883 = s$$23.charCodeAt(v1550);
      switch(v883) {
        case 65:
        ;
        case 97:
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v875 = arguments[j$$2]
          }
          sc_display(v875, p$$45);
          i$$48 = i$$48 + 2;
          j$$2 = j$$2 + 1;
          break;
        case 83:
        ;
        case 115:
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v876 = arguments[j$$2]
          }
          sc_write(v876, p$$45);
          i$$48 = i$$48 + 2;
          j$$2 = j$$2 + 1;
          break;
        case 86:
        ;
        case 118:
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v877 = arguments[j$$2]
          }
          sc_display(v877, p$$45);
          JAMScript.call(p$$45.appendJSString, p$$45, ["\n"]);
          i$$48 = i$$48 + 2;
          j$$2 = j$$2 + 1;
          break;
        case 67:
        ;
        case 99:
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v1551 = arguments[j$$2]
          }
          var v878 = String.fromCharCode(v1551);
          JAMScript.call(p$$45.appendJSString, p$$45, [v878]);
          i$$48 = i$$48 + 2;
          j$$2 = j$$2 + 1;
          break;
        case 88:
        ;
        case 120:
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v1552 = arguments[j$$2]
          }
          var v879 = JAMScript.call(v1552.toString, v1552, [6]);
          JAMScript.call(p$$45.appendJSString, p$$45, [v879]);
          i$$48 = i$$48 + 2;
          j$$2 = j$$2 + 1;
          break;
        case 79:
        ;
        case 111:
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v1553 = arguments[j$$2]
          }
          var v880 = JAMScript.call(v1553.toString, v1553, [8]);
          JAMScript.call(p$$45.appendJSString, p$$45, [v880]);
          i$$48 = i$$48 + 2;
          j$$2 = j$$2 + 1;
          break;
        case 66:
        ;
        case 98:
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v1554 = arguments[j$$2]
          }
          var v881 = JAMScript.call(v1554.toString, v1554, [2]);
          JAMScript.call(p$$45.appendJSString, p$$45, [v881]);
          i$$48 = i$$48 + 2;
          j$$2 = j$$2 + 1;
          break;
        case 37:
        ;
        case 110:
          JAMScript.call(p$$45.appendJSString, p$$45, ["\n"]);
          i$$48 = i$$48 + 2;
          break;
        case 114:
          JAMScript.call(p$$45.appendJSString, p$$45, ["\r"]);
          i$$48 = i$$48 + 2;
          break;
        case 126:
          JAMScript.call(p$$45.appendJSString, p$$45, ["~"]);
          i$$48 = i$$48 + 2;
          break;
        default:
          var v2489 = i2 + 1;
          var v2185 = s$$23.charCodeAt(v2489);
          var v1871 = String.fromCharCode(v2185);
          var v1555 = "format: illegal ~" + v1871;
          var v882 = v1555 + " sequence";
          sc_error(v882);
          return""
      }
    }
    v885 = i$$48 < len$$3
  }
  return JAMScript.call(p$$45.close, p$$45, [])
}
function sc_jsstring2string(s$$24) {
  return s$$24
}
function sc_jsstring2symbol(s$$25) {
  return sc_SYMBOL_PREFIX + s$$25
}
function sc_string2jsstring(s$$26) {
  return s$$26
}
function sc_symbol2jsstring(s$$27) {
  return s$$27.slice(1)
}
function sc_keyword2jsstring(k$$4) {
  return k$$4.slice(1)
}
function sc_jsstring2keyword(s$$28) {
  return sc_KEYWORD_PREFIX + s$$28
}
function sc_isKeyword(s$$29) {
  var v1556 = typeof s$$29;
  var v886 = v1556 === "string";
  if(v886) {
    var v1557 = s$$29.charAt(0);
    v886 = v1557 === sc_KEYWORD_PREFIX
  }
  return v886
}
function sc_isEqual(o1$$2, o2$$2) {
  var v887 = o1$$2 === o2$$2;
  var v1559 = !v887;
  if(v1559) {
    var v1872 = sc_isPair(o1$$2);
    if(v1872) {
      var v2186 = sc_isPair(o2$$2);
      if(v2186) {
        v2186 = sc_isPairEqual(o1$$2, o2$$2, sc_isEqual)
      }
      v1872 = v2186
    }
    var v1558 = v1872;
    var v1874 = !v1558;
    if(v1874) {
      var v1873 = sc_isVector(o1$$2);
      if(v1873) {
        var v2187 = sc_isVector(o2$$2);
        if(v2187) {
          v2187 = sc_isVectorEqual(o1$$2, o2$$2, sc_isEqual)
        }
        v1873 = v2187
      }
      v1558 = v1873
    }
    v887 = v1558
  }
  return v887
}
function sc_number2symbol(x$$74, radix$$2) {
  var v888 = sc_number2jsstring(x$$74, radix$$2);
  return sc_SYMBOL_PREFIX + v888
}
function sc_symbol2number(s$$30, radix$$3) {
  var v889 = s$$30.slice(1);
  return sc_jsstring2number(v889, radix$$3)
}
function sc_string2integer(s$$31, radix$$4) {
  var v890 = !radix$$4;
  if(v890) {
    return+s$$31
  }
  return parseInt(s$$31, radix$$4)
}
function sc_string2real(s$$32) {
  return+s$$32
}
function sc_isSymbol(s$$33) {
  var v1560 = typeof s$$33;
  var v891 = v1560 === "string";
  if(v891) {
    var v1561 = s$$33.charAt(0);
    v891 = v1561 === sc_SYMBOL_PREFIX
  }
  return v891
}
function sc_symbol2string(s$$34) {
  return s$$34.slice(1)
}
function sc_string2symbol(s$$35) {
  return sc_SYMBOL_PREFIX + s$$35
}
function sc_symbolAppend() {
  var res$$29 = sc_SYMBOL_PREFIX;
  var i$$49 = 0;
  var v1562 = arguments.length;
  var v892 = i$$49 < v1562;
  for(;v892;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1875 = arguments[i$$49]
    }
    var v1563 = v1875.slice(1);
    res$$29 = res$$29 + v1563;
    i$$49 = i$$49 + 1;
    var v1564 = arguments.length;
    v892 = i$$49 < v1564
  }
  return res$$29
}
function sc_char2string(c$$23) {
  return c$$23.val
}
function sc_char2symbol(c$$24) {
  var v893 = c$$24.val;
  return sc_SYMBOL_PREFIX + v893
}
function sc_isString(s$$36) {
  var v1565 = typeof s$$36;
  var v894 = v1565 === "string";
  if(v894) {
    var v1566 = s$$36.charAt(0);
    v894 = v1566 !== sc_SYMBOL_PREFIX
  }
  return v894
}
function sc_string() {
  var i$$50 = 0;
  var v1567 = arguments.length;
  var v897 = i$$50 < v1567;
  for(;v897;) {
    var v895 = arguments;
    var v896 = i$$50;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1568 = arguments[i$$50]
    }
    v895[v896] = v1568.val;
    i$$50 = i$$50 + 1;
    var v1569 = arguments.length;
    v897 = i$$50 < v1569
  }
  var v898 = "".concat;
  return JAMScript.call(v898.apply, v898, ["", arguments])
}
function sc_stringLength(s$$37) {
  return s$$37.length
}
function sc_stringRef(s$$38, k$$5) {
  var v899 = s$$38.charAt(k$$5);
  return new sc_Char(v899)
}
function sc_isStringEqual(s1$$2, s2$$2) {
  return s1$$2 === s2$$2
}
function sc_isStringLess(s1$$3, s2$$3) {
  return s1$$3 < s2$$3
}
function sc_isStringGreater(s1$$4, s2$$4) {
  return s1$$4 > s2$$4
}
function sc_isStringLessEqual(s1$$5, s2$$5) {
  return s1$$5 <= s2$$5
}
function sc_isStringGreaterEqual(s1$$6, s2$$6) {
  return s1$$6 >= s2$$6
}
function sc_isStringCIEqual(s1$$7, s2$$7) {
  var v900 = s1$$7.toLowerCase();
  var v901 = s2$$7.toLowerCase();
  return v900 === v901
}
function sc_isStringCILess(s1$$8, s2$$8) {
  var v902 = s1$$8.toLowerCase();
  var v903 = s2$$8.toLowerCase();
  return v902 < v903
}
function sc_isStringCIGreater(s1$$9, s2$$9) {
  var v904 = s1$$9.toLowerCase();
  var v905 = s2$$9.toLowerCase();
  return v904 > v905
}
function sc_isStringCILessEqual(s1$$10, s2$$10) {
  var v906 = s1$$10.toLowerCase();
  var v907 = s2$$10.toLowerCase();
  return v906 <= v907
}
function sc_isStringCIGreaterEqual(s1$$11, s2$$11) {
  var v908 = s1$$11.toLowerCase();
  var v909 = s2$$11.toLowerCase();
  return v908 >= v909
}
function sc_substring(s$$39, start$$6, end$$2) {
  return s$$39.substring(start$$6, end$$2)
}
function sc_isSubstring_at(s1$$12, s2$$12, i$$51) {
  var v1876 = s2$$12.length;
  var v1570 = i$$51 + v1876;
  var v910 = s1$$12.substring(i$$51, v1570);
  return s2$$12 == v910
}
function sc_stringAppend() {
  var v911 = "".concat;
  return JAMScript.call(v911.apply, v911, ["", arguments])
}
function sc_stringCopy(s$$40) {
  return s$$40
}
function sc_keyword2string(o$$34) {
  return o$$34.slice(1)
}
function sc_string2keyword(o$$35) {
  return sc_KEYWORD_PREFIX + o$$35
}
function RunBenchmark(name$$39, count$$6, run$$1, warn) {
  var n$$14 = 0;
  var v913 = n$$14 < count$$6;
  for(;v913;) {
    result = JAMScript.call(run$$1, null, []);
    var v1571 = JAMScript.call(warn, null, [result]);
    var v912 = !v1571;
    if(v912) {
      throw new Error("Earley or Boyer did incorrect number of rewrites");
    }
    n$$14 = n$$14 + 1;
    v913 = n$$14 < count$$6
  }
  return
}
function ShowBox(name$$40) {
  function v3(entry$$2) {
    var v1572 = JAMScript.call(name$$40.valueOf, name$$40, []);
    var v1573 = JAMScript.call(entry$$2.valueOf, entry$$2, []);
    var v916 = v1572 === v1573;
    if(v916) {
      var v1574 = "Box-" + name$$40;
      var v914 = v1574 + "Latency";
      var box1 = document.getElementById(v914);
      var v915 = box1.style;
      v915.visibility = "visible"
    }
    return
  }
  var v917 = "Box-" + name$$40;
  var box = document.getElementById(v917);
  var v918 = box.style;
  v918.visibility = "visible";
  var v1575 = document.getElementById("progress-bar");
  var v919 = v1575.style;
  var v2490 = completed = completed + 1;
  var v2188 = v2490 / benchmarks;
  var v1877 = v2188 * 100;
  var v1576 = "" + v1877;
  var bar = v919.width = v1576 + "%";
  latencyBenchmarks.forEach(v3);
  return
}
function AddResult(name$$41, result$$5) {
  var v1577 = name$$41 + ": ";
  var v920 = v1577 + result$$5;
  console.log(v920);
  var v921 = "Result-" + name$$41;
  var box$$1 = document.getElementById(v921);
  JAMScript.set(box$$1, "innerHTML", result$$5);
  return
}
function AddError(name$$42, error$$3) {
  var v1578 = name$$42 + ": ";
  var v1579 = error$$3.message;
  var v922 = v1578 + v1579;
  console.log(v922);
  var v924 = error$$3 == "TypedArrayUnsupported";
  if(v924) {
    AddResult(name$$42, "<b>Unsupported</b>")
  }else {
    var v923 = error$$3 == "PerformanceNowUnsupported";
    if(v923) {
      AddResult(name$$42, "<b>Timer error</b>")
    }else {
      AddResult(name$$42, "<b>Error</b>")
    }
  }
  success = false;
  return
}
function AddScore(score$$2) {
  var status = document.getElementById("main-banner");
  if(success) {
    JAMScript.set(status, "innerHTML", "Octane Score: " + score$$2)
  }else {
    JAMScript.set(status, "innerHTML", "Octane Score (incomplete): " + score$$2)
  }
  var v1580 = document.getElementById("progress-bar-container");
  var v925 = v1580.style;
  v925.visibility = "hidden";
  var v1581 = document.getElementById("bottom-text");
  var v926 = v1581.style;
  v926.visibility = "visible";
  var v927 = document.getElementById("inside-anchor");
  var v928 = document.getElementById("bar-appendix");
  v927.removeChild(v928);
  var v1582 = document.getElementById("alertbox");
  var v929 = v1582.style;
  v929.visibility = "hidden";
  return
}
function Run() {
  var v930 = document.getElementById("main-banner");
  JAMScript.set(v930, "innerHTML", "Running Octane...");
  var v931 = document.getElementById("bar-appendix");
  JAMScript.set(v931, "innerHTML", '<br/><div class="progress progress-striped" id="progress-bar-container" style="visibility:hidden"><div class="bar"style="width: 0%;" id="progress-bar"></div></div>');
  var anchor = document.getElementById("run-octane");
  var parent = document.getElementById("main-container");
  var v932 = document.getElementById("inside-anchor");
  JAMScript.call(parent.appendChild, parent, [v932]);
  parent.removeChild(anchor);
  var v933 = document.getElementById("startup-text");
  JAMScript.set(v933, "innerHTML", "");
  var v1583 = document.getElementById("progress-bar-container");
  var v934 = v1583.style;
  v934.visibility = "visible";
  var v935 = {NotifyStart:ShowBox, NotifyError:AddError, NotifyResult:AddResult, NotifyScore:AddScore};
  JAMScript.call(BenchmarkSuite.RunSuites, BenchmarkSuite, [v935, skipBenchmarks]);
  return
}
function CheckCompatibility() {
  var v1584 = typeof Uint8Array;
  var v936 = v1584 != "undefined";
  if(v936) {
    var v1878 = typeof Float64Array;
    var v1585 = v1878 != "undefined";
    if(v1585) {
      var v2491 = new Uint8Array(0);
      var v2189 = v2491.subarray;
      var v1879 = typeof v2189;
      v1585 = v1879 != "undefined"
    }
    v936 = v1585
  }
  var hasTypedArrays = v936;
  var v938 = !hasTypedArrays;
  if(v938) {
    console.log("Typed Arrays not supported");
    var v1586 = document.getElementById("alertbox");
    var v937 = v1586.style;
    v937.display = "block"
  }
  var v2190 = window.document;
  var v1880 = v2190.URL;
  var v1587 = v1880.indexOf("skip_zlib=1");
  var v939 = v1587 >= 0;
  if(v939) {
    skipBenchmarks.push("zlib")
  }
  var v2191 = window.document;
  var v1881 = v2191.URL;
  var v1588 = v1881.indexOf("auto=1");
  var v940 = v1588 >= 0;
  if(v940) {
    Run()
  }
  return
}
function Load() {
  JAMScript.call(setTimeout, null, [CheckCompatibility, 200]);
  return
}
var performance = performance || {};
var v941 = performance;
var v3726 = v4();
v941.now = v3726;
var v942 = BenchmarkResult.prototype;
v942.valueOf = v5;
BenchmarkSuite.suites = [];
BenchmarkSuite.version = "9";
BenchmarkSuite.config = {doWarmup:undefined, doDeterministic:undefined};
alert = v6;
BenchmarkSuite.ResetRNG = v9;
BenchmarkSuite.RunSuites = v10;
BenchmarkSuite.CountBenchmarks = v11;
BenchmarkSuite.GeometricMean = v12;
BenchmarkSuite.GeometricMeanTime = v13;
BenchmarkSuite.GeometricMeanLatency = v14;
BenchmarkSuite.FormatScore = v15;
var v943 = BenchmarkSuite.prototype;
v943.NotifyStep = v16;
var v944 = BenchmarkSuite.prototype;
v944.NotifyResult = v17;
var v945 = BenchmarkSuite.prototype;
v945.NotifySkipped = v18;
var v946 = BenchmarkSuite.prototype;
v946.NotifyError = v19;
var v947 = BenchmarkSuite.prototype;
v947.RunSingleBenchmark = v20;
var v948 = BenchmarkSuite.prototype;
v948.RunStep = v21;
var v949 = [666463];
var v1589 = new Benchmark("Earley", true, false, 2500, v22);
var v1590 = new Benchmark("Boyer", true, false, 200, v23);
var v950 = [v1589, v1590];
var EarleyBoyer = new BenchmarkSuite("EarleyBoyer", v949, v950);
var sc_JS_GLOBALS = this;
var __sc_LINE = -1;
var __sc_FILE = "";
var sc_properties = new Object;
var sc_max = Math.max;
var sc_min = Math.min;
var sc_abs = Math.abs;
var sc_floor = Math.floor;
var sc_ceiling = Math.ceil;
var sc_truncate = parseInt;
var sc_round = Math.round;
var sc_exp = Math.exp;
var sc_log = Math.log;
var sc_sin = Math.sin;
var sc_cos = Math.cos;
var sc_tan = Math.tan;
var sc_asin = Math.asin;
var sc_acos = Math.acos;
var sc_atan = Math.atan;
var sc_sqrt = Math.sqrt;
var sc_expt = Math.pow;
var v951 = sc_Pair.prototype;
v951.toString = v24;
var v952 = sc_Pair.prototype;
v952.sc_toWriteOrDisplayString = v25;
var v953 = sc_Pair.prototype;
v953.sc_toDisplayString = v26;
var v954 = sc_Pair.prototype;
v954.sc_toWriteString = v27;
var v3727 = new Object;
sc_Char.lazy = v3727;
sc_Char.char2readable = {"\x00":"#\\null", "\u0007":"#\\bell", "\b":"#\\backspace", "\t":"#\\tab", "\n":"#\\newline", "\f":"#\\page", "\r":"#\\return", "\u001b":"#\\escape", " ":"#\\space", "\u007f":"#\\delete", "\u0001":"#\\soh", "\u0002":"#\\stx", "\u0003":"#\\etx", "\u0004":"#\\eot", "\u0005":"#\\enq", "\u0006":"#\\ack", "\x0B":"#\\vt", "\u000e":"#\\so", "\u000f":"#\\si", "\u0010":"#\\dle", "\u0011":"#\\dc1", "\u0012":"#\\dc2", "\u0013":"#\\dc3", "\u0014":"#\\dc4", "\u0015":"#\\nak", "\u0016":"#\\syn", 
"\u0017":"#\\etb", "\u0018":"#\\can", "\u0019":"#\\em", "\u001a":"#\\sub", "\u001b":"#\\esc", "\u001c":"#\\fs", "\u001d":"#\\gs", "\u001e":"#\\rs", "\u001f":"#\\us"};
sc_Char.readable2char = {"null":"\x00", "bell":"\u0007", "backspace":"\b", "tab":"\t", "newline":"\n", "page":"\f", "return":"\r", "escape":"\u001b", "space":" ", "delete":"\x00", "soh":"\u0001", "stx":"\u0002", "etx":"\u0003", "eot":"\u0004", "enq":"\u0005", "ack":"\u0006", "bel":"\u0007", "bs":"\b", "ht":"\t", "nl":"\n", "vt":"\x0B", "np":"\f", "cr":"\r", "so":"\u000e", "si":"\u000f", "dle":"\u0010", "dc1":"\u0011", "dc2":"\u0012", "dc3":"\u0013", "dc4":"\u0014", "nak":"\u0015", "syn":"\u0016", 
"etb":"\u0017", "can":"\u0018", "em":"\u0019", "sub":"\u001a", "esc":"\u001b", "fs":"\u001c", "gs":"\u001d", "rs":"\u001e", "us":"\u001f", "sp":" ", "del":"\u007f"};
var v955 = sc_Char.prototype;
v955.toString = v28;
var v956 = sc_Char.prototype;
v956.sc_toWriteString = v29;
var sc_isCharEqual = sc_isCharStringEqual;
var sc_isCharLess = sc_isCharStringLess;
var sc_isCharGreater = sc_isCharStringGreater;
var sc_isCharLessEqual = sc_isCharStringLessEqual;
var sc_isCharGreaterEqual = sc_isCharStringGreaterEqual;
var sc_isCharCIEqual = sc_isCharStringCIEqual;
var sc_isCharCILess = sc_isCharStringCILess;
var sc_isCharCIGreater = sc_isCharStringCIGreater;
var sc_isCharCILessEqual = sc_isCharStringCILessEqual;
var sc_isCharCIGreaterEqual = sc_isCharStringCIGreaterEqual;
var SC_NUMBER_CLASS = "0123456789";
var SC_WHITESPACE_CLASS = " \r\n\t\f";
var SC_LOWER_CLASS = "abcdefghijklmnopqrstuvwxyz";
var SC_UPPER_CLASS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sc_Vector = Array;
var v957 = sc_Vector.prototype;
v957.sc_toWriteOrDisplayString = v30;
var v958 = sc_Vector.prototype;
v958.sc_toDisplayString = v31;
var v959 = sc_Vector.prototype;
v959.sc_toWriteString = v32;
var v960 = sc_Struct.prototype;
v960.sc_toDisplayString = v33;
var v961 = sc_Struct.prototype;
var v1591 = sc_Struct.prototype;
v961.sc_toWriteString = v1591.sc_toDisplayString;
var v962 = sc_Hashtable.prototype;
v962.toString = v34;
var SC_HASH_COUNTER = 0;
var v963 = sc_Trampoline.prototype;
v963.restart = v35;
var SC_SCM2JS_GLOBALS = new Object;
var SC_TAIL_OBJECT = new Object;
SC_SCM2JS_GLOBALS.TAIL_OBJECT = SC_TAIL_OBJECT;
var SC_EOF_OBJECT = new sc_EOF;
var v3728 = new sc_Port;
sc_InputPort.prototype = v3728;
var v964 = sc_InputPort.prototype;
v964.peekChar = v36;
var v965 = sc_InputPort.prototype;
v965.readChar = v37;
var v966 = sc_InputPort.prototype;
v966.isCharReady = v38;
var v967 = sc_InputPort.prototype;
v967.close = v39;
var v3729 = new sc_InputPort;
sc_ErrorInputPort.prototype = v3729;
var v968 = sc_ErrorInputPort.prototype;
v968.getNextChar = v40;
var v969 = sc_ErrorInputPort.prototype;
v969.isCharReady = v41;
var v3730 = new sc_InputPort;
sc_StringInputPort.prototype = v3730;
var v970 = sc_StringInputPort.prototype;
v970.getNextChar = v42;
sc_Token.EOF = 0;
sc_Token.OPEN_PAR = 1;
sc_Token.CLOSE_PAR = 2;
sc_Token.OPEN_BRACE = 3;
sc_Token.CLOSE_BRACE = 4;
sc_Token.OPEN_BRACKET = 5;
sc_Token.CLOSE_BRACKET = 6;
sc_Token.WHITESPACE = 7;
sc_Token.QUOTE = 8;
sc_Token.ID = 9;
sc_Token.DOT = 10;
sc_Token.STRING = 11;
sc_Token.NUMBER = 12;
sc_Token.ERROR = 13;
sc_Token.VECTOR_BEGIN = 14;
sc_Token.TRUE = 15;
sc_Token.FALSE = 16;
sc_Token.UNSPECIFIED = 17;
sc_Token.REFERENCE = 18;
sc_Token.STORE = 19;
sc_Token.CHAR = 20;
var v971 = SC_LOWER_CLASS + SC_UPPER_CLASS;
var SC_ID_CLASS = v971 + "!$%*+-./:<=>?@^_~";
var v972 = sc_Tokenizer.prototype;
v972.peekToken = v43;
var v973 = sc_Tokenizer.prototype;
v973.readToken = v44;
var v974 = sc_Tokenizer.prototype;
v974.nextToken = v45;
var v975 = sc_Reader.prototype;
v975.read = v46;
var v3731 = new sc_Port;
sc_OutputPort.prototype = v3731;
var v976 = sc_OutputPort.prototype;
v976.appendJSString = v47;
var v977 = sc_OutputPort.prototype;
v977.close = v48;
var v3732 = new sc_OutputPort;
sc_StringOutputPort.prototype = v3732;
var v978 = sc_StringOutputPort.prototype;
v978.appendJSString = v49;
var v979 = sc_StringOutputPort.prototype;
v979.close = v50;
var v3733 = new sc_OutputPort;
sc_ErrorOutputPort.prototype = v3733;
var v980 = sc_ErrorOutputPort.prototype;
v980.appendJSString = v51;
var v981 = sc_ErrorOutputPort.prototype;
v981.close = v52;
var v3734 = new sc_OutputPort;
sc_GenericOutputPort.prototype = v3734;
var v982 = sc_Pair.prototype;
v982.sc_toWriteCircleString = v53;
var v983 = sc_Vector.prototype;
v983.sc_toWriteCircleString = v54;
var SC_DEFAULT_IN = new sc_ErrorInputPort;
var SC_DEFAULT_OUT = new sc_ErrorOutputPort;
var SC_ERROR_OUT = new sc_ErrorOutputPort;
var sc_SYMBOL_PREFIX = "\u1e9c";
var sc_KEYWORD_PREFIX = "\u1e9d";
var sc_gensym = v56();
var sc_number2string = sc_number2jsstring;
var sc_string2number = sc_jsstring2number;
var sc_makeString = sc_makejsString;
var sc_string2list = sc_jsstring2list;
var sc_list2string = sc_list2jsstring;
var v984 = String.prototype;
v984.sc_toDisplayString = v57;
var v985 = String.prototype;
v985.sc_toWriteString = v58;
var BgL_testzd2boyerzd2;
var BgL_nboyerzd2benchmarkzd2;
var BgL_setupzd2boyerzd2;
var translate_term_nboyer;
var translate_args_nboyer;
var untranslate_term_nboyer;
var BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer;
var BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer;
var translate_alist_nboyer;
var apply_subst_nboyer;
var apply_subst_lst_nboyer;
var tautologyp_nboyer;
var if_constructor_nboyer;
var rewrite_count_nboyer;
var rewrite_nboyer;
var rewrite_args_nboyer;
var unify_subst_nboyer;
var one_way_unify1_nboyer;
var false_term_nboyer;
var true_term_nboyer;
var trans_of_implies1_nboyer;
var is_term_equal_nboyer;
var is_term_member_nboyer;
var const_nboyer;
var sc_const_3_nboyer;
var sc_const_4_nboyer;
var v2782 = new sc_Pair("\u1e9cy", null);
var v2492 = new sc_Pair("\u1e9cx", v2782);
var v2192 = new sc_Pair("\u1e9cimplies", v2492);
var v3434 = new sc_Pair("\u1e9cz", null);
var v3267 = new sc_Pair("\u1e9cy", v3434);
var v3032 = new sc_Pair("\u1e9cimplies", v3267);
var v3650 = new sc_Pair("\u1e9cu", null);
var v3607 = new sc_Pair("\u1e9cz", v3650);
var v3539 = new sc_Pair("\u1e9cimplies", v3607);
var v3675 = new sc_Pair("\u1e9cw", null);
var v3651 = new sc_Pair("\u1e9cu", v3675);
var v3608 = new sc_Pair("\u1e9cimplies", v3651);
var v3540 = new sc_Pair(v3608, null);
var v3435 = new sc_Pair(v3539, v3540);
var v3268 = new sc_Pair("\u1e9cand", v3435);
var v3033 = new sc_Pair(v3268, null);
var v2783 = new sc_Pair(v3032, v3033);
var v2493 = new sc_Pair("\u1e9cand", v2783);
var v2193 = new sc_Pair(v2493, null);
var v1882 = new sc_Pair(v2192, v2193);
var v1592 = new sc_Pair("\u1e9cand", v1882);
var v2494 = new sc_Pair("\u1e9cw", null);
var v2194 = new sc_Pair("\u1e9cx", v2494);
var v1883 = new sc_Pair("\u1e9cimplies", v2194);
var v1593 = new sc_Pair(v1883, null);
var v986 = new sc_Pair(v1592, v1593);
sc_const_4_nboyer = new sc_Pair("\u1e9cimplies", v986);
var v2195 = new sc_Pair("\u1e9cform", null);
var v1884 = new sc_Pair("\u1e9ccompile", v2195);
var v3436 = new sc_Pair("\u1e9cform", null);
var v3269 = new sc_Pair("\u1e9coptimize", v3436);
var v3437 = new sc_Pair("\u1e9cnil", null);
var v3270 = new sc_Pair(v3437, null);
var v3034 = new sc_Pair(v3269, v3270);
var v2784 = new sc_Pair("\u1e9ccodegen", v3034);
var v2495 = new sc_Pair(v2784, null);
var v2196 = new sc_Pair("\u1e9creverse", v2495);
var v1885 = new sc_Pair(v2196, null);
var v1594 = new sc_Pair(v1884, v1885);
var v987 = new sc_Pair("\u1e9cequal", v1594);
var v2496 = new sc_Pair("\u1e9cy", null);
var v2197 = new sc_Pair("\u1e9cx", v2496);
var v1886 = new sc_Pair("\u1e9ceqp", v2197);
var v3035 = new sc_Pair("\u1e9cx", null);
var v2785 = new sc_Pair("\u1e9cfix", v3035);
var v3271 = new sc_Pair("\u1e9cy", null);
var v3036 = new sc_Pair("\u1e9cfix", v3271);
var v2786 = new sc_Pair(v3036, null);
var v2497 = new sc_Pair(v2785, v2786);
var v2198 = new sc_Pair("\u1e9cequal", v2497);
var v1887 = new sc_Pair(v2198, null);
var v1595 = new sc_Pair(v1886, v1887);
var v988 = new sc_Pair("\u1e9cequal", v1595);
var v2498 = new sc_Pair("\u1e9cy", null);
var v2199 = new sc_Pair("\u1e9cx", v2498);
var v1888 = new sc_Pair("\u1e9cgreaterp", v2199);
var v2787 = new sc_Pair("\u1e9cx", null);
var v2499 = new sc_Pair("\u1e9cy", v2787);
var v2200 = new sc_Pair("\u1e9clessp", v2499);
var v1889 = new sc_Pair(v2200, null);
var v1596 = new sc_Pair(v1888, v1889);
var v989 = new sc_Pair("\u1e9cequal", v1596);
var v2500 = new sc_Pair("\u1e9cy", null);
var v2201 = new sc_Pair("\u1e9cx", v2500);
var v1890 = new sc_Pair("\u1e9clesseqp", v2201);
var v3272 = new sc_Pair("\u1e9cx", null);
var v3037 = new sc_Pair("\u1e9cy", v3272);
var v2788 = new sc_Pair("\u1e9clessp", v3037);
var v2501 = new sc_Pair(v2788, null);
var v2202 = new sc_Pair("\u1e9cnot", v2501);
var v1891 = new sc_Pair(v2202, null);
var v1597 = new sc_Pair(v1890, v1891);
var v990 = new sc_Pair("\u1e9cequal", v1597);
var v2502 = new sc_Pair("\u1e9cy", null);
var v2203 = new sc_Pair("\u1e9cx", v2502);
var v1892 = new sc_Pair("\u1e9cgreatereqp", v2203);
var v3273 = new sc_Pair("\u1e9cy", null);
var v3038 = new sc_Pair("\u1e9cx", v3273);
var v2789 = new sc_Pair("\u1e9clessp", v3038);
var v2503 = new sc_Pair(v2789, null);
var v2204 = new sc_Pair("\u1e9cnot", v2503);
var v1893 = new sc_Pair(v2204, null);
var v1598 = new sc_Pair(v1892, v1893);
var v991 = new sc_Pair("\u1e9cequal", v1598);
var v2205 = new sc_Pair("\u1e9cx", null);
var v1894 = new sc_Pair("\u1e9cboolean", v2205);
var v3438 = new sc_Pair("\u1e9ct", null);
var v3274 = new sc_Pair(v3438, null);
var v3039 = new sc_Pair("\u1e9cx", v3274);
var v2790 = new sc_Pair("\u1e9cequal", v3039);
var v3541 = new sc_Pair("\u1e9cf", null);
var v3439 = new sc_Pair(v3541, null);
var v3275 = new sc_Pair("\u1e9cx", v3439);
var v3040 = new sc_Pair("\u1e9cequal", v3275);
var v2791 = new sc_Pair(v3040, null);
var v2504 = new sc_Pair(v2790, v2791);
var v2206 = new sc_Pair("\u1e9cor", v2504);
var v1895 = new sc_Pair(v2206, null);
var v1599 = new sc_Pair(v1894, v1895);
var v992 = new sc_Pair("\u1e9cequal", v1599);
var v2505 = new sc_Pair("\u1e9cy", null);
var v2207 = new sc_Pair("\u1e9cx", v2505);
var v1896 = new sc_Pair("\u1e9ciff", v2207);
var v3276 = new sc_Pair("\u1e9cy", null);
var v3041 = new sc_Pair("\u1e9cx", v3276);
var v2792 = new sc_Pair("\u1e9cimplies", v3041);
var v3440 = new sc_Pair("\u1e9cx", null);
var v3277 = new sc_Pair("\u1e9cy", v3440);
var v3042 = new sc_Pair("\u1e9cimplies", v3277);
var v2793 = new sc_Pair(v3042, null);
var v2506 = new sc_Pair(v2792, v2793);
var v2208 = new sc_Pair("\u1e9cand", v2506);
var v1897 = new sc_Pair(v2208, null);
var v1600 = new sc_Pair(v1896, v1897);
var v993 = new sc_Pair("\u1e9cequal", v1600);
var v2209 = new sc_Pair("\u1e9cx", null);
var v1898 = new sc_Pair("\u1e9ceven1", v2209);
var v3043 = new sc_Pair("\u1e9cx", null);
var v2794 = new sc_Pair("\u1e9czerop", v3043);
var v3044 = new sc_Pair("\u1e9ct", null);
var v3609 = new sc_Pair("\u1e9cx", null);
var v3542 = new sc_Pair("\u1e9csub1", v3609);
var v3441 = new sc_Pair(v3542, null);
var v3278 = new sc_Pair("\u1e9codd", v3441);
var v3045 = new sc_Pair(v3278, null);
var v2795 = new sc_Pair(v3044, v3045);
var v2507 = new sc_Pair(v2794, v2795);
var v2210 = new sc_Pair("\u1e9cif", v2507);
var v1899 = new sc_Pair(v2210, null);
var v1601 = new sc_Pair(v1898, v1899);
var v994 = new sc_Pair("\u1e9cequal", v1601);
var v2508 = new sc_Pair("\u1e9cpred", null);
var v2211 = new sc_Pair("\u1e9cl", v2508);
var v1900 = new sc_Pair("\u1e9ccountps-", v2211);
var v3279 = new sc_Pair("\u1e9czero", null);
var v3046 = new sc_Pair(v3279, null);
var v2796 = new sc_Pair("\u1e9cpred", v3046);
var v2509 = new sc_Pair("\u1e9cl", v2796);
var v2212 = new sc_Pair("\u1e9ccountps-loop", v2509);
var v1901 = new sc_Pair(v2212, null);
var v1602 = new sc_Pair(v1900, v1901);
var v995 = new sc_Pair("\u1e9cequal", v1602);
var v2213 = new sc_Pair("\u1e9ci", null);
var v1902 = new sc_Pair("\u1e9cfact-", v2213);
var v2797 = new sc_Pair(1, null);
var v2510 = new sc_Pair("\u1e9ci", v2797);
var v2214 = new sc_Pair("\u1e9cfact-loop", v2510);
var v1903 = new sc_Pair(v2214, null);
var v1603 = new sc_Pair(v1902, v1903);
var v996 = new sc_Pair("\u1e9cequal", v1603);
var v2215 = new sc_Pair("\u1e9cx", null);
var v1904 = new sc_Pair("\u1e9creverse-", v2215);
var v3047 = new sc_Pair("\u1e9cnil", null);
var v2798 = new sc_Pair(v3047, null);
var v2511 = new sc_Pair("\u1e9cx", v2798);
var v2216 = new sc_Pair("\u1e9creverse-loop", v2511);
var v1905 = new sc_Pair(v2216, null);
var v1604 = new sc_Pair(v1904, v1905);
var v997 = new sc_Pair("\u1e9cequal", v1604);
var v2512 = new sc_Pair("\u1e9cy", null);
var v2217 = new sc_Pair("\u1e9cx", v2512);
var v1906 = new sc_Pair("\u1e9cdivides", v2217);
var v3280 = new sc_Pair("\u1e9cx", null);
var v3048 = new sc_Pair("\u1e9cy", v3280);
var v2799 = new sc_Pair("\u1e9cremainder", v3048);
var v2513 = new sc_Pair(v2799, null);
var v2218 = new sc_Pair("\u1e9czerop", v2513);
var v1907 = new sc_Pair(v2218, null);
var v1605 = new sc_Pair(v1906, v1907);
var v998 = new sc_Pair("\u1e9cequal", v1605);
var v2514 = new sc_Pair("\u1e9calist", null);
var v2219 = new sc_Pair("\u1e9cvar", v2514);
var v1908 = new sc_Pair("\u1e9cassume-true", v2219);
var v3442 = new sc_Pair("\u1e9ct", null);
var v3281 = new sc_Pair(v3442, null);
var v3049 = new sc_Pair("\u1e9cvar", v3281);
var v2800 = new sc_Pair("\u1e9ccons", v3049);
var v2801 = new sc_Pair("\u1e9calist", null);
var v2515 = new sc_Pair(v2800, v2801);
var v2220 = new sc_Pair("\u1e9ccons", v2515);
var v1909 = new sc_Pair(v2220, null);
var v1606 = new sc_Pair(v1908, v1909);
var v999 = new sc_Pair("\u1e9cequal", v1606);
var v2516 = new sc_Pair("\u1e9calist", null);
var v2221 = new sc_Pair("\u1e9cvar", v2516);
var v1910 = new sc_Pair("\u1e9cassume-false", v2221);
var v3443 = new sc_Pair("\u1e9cf", null);
var v3282 = new sc_Pair(v3443, null);
var v3050 = new sc_Pair("\u1e9cvar", v3282);
var v2802 = new sc_Pair("\u1e9ccons", v3050);
var v2803 = new sc_Pair("\u1e9calist", null);
var v2517 = new sc_Pair(v2802, v2803);
var v2222 = new sc_Pair("\u1e9ccons", v2517);
var v1911 = new sc_Pair(v2222, null);
var v1607 = new sc_Pair(v1910, v1911);
var v1000 = new sc_Pair("\u1e9cequal", v1607);
var v2223 = new sc_Pair("\u1e9cx", null);
var v1912 = new sc_Pair("\u1e9ctautology-checker", v2223);
var v3051 = new sc_Pair("\u1e9cx", null);
var v2804 = new sc_Pair("\u1e9cnormalize", v3051);
var v3052 = new sc_Pair("\u1e9cnil", null);
var v2805 = new sc_Pair(v3052, null);
var v2518 = new sc_Pair(v2804, v2805);
var v2224 = new sc_Pair("\u1e9ctautologyp", v2518);
var v1913 = new sc_Pair(v2224, null);
var v1608 = new sc_Pair(v1912, v1913);
var v1001 = new sc_Pair("\u1e9cequal", v1608);
var v2225 = new sc_Pair("\u1e9cx", null);
var v1914 = new sc_Pair("\u1e9cfalsify", v2225);
var v3053 = new sc_Pair("\u1e9cx", null);
var v2806 = new sc_Pair("\u1e9cnormalize", v3053);
var v3054 = new sc_Pair("\u1e9cnil", null);
var v2807 = new sc_Pair(v3054, null);
var v2519 = new sc_Pair(v2806, v2807);
var v2226 = new sc_Pair("\u1e9cfalsify1", v2519);
var v1915 = new sc_Pair(v2226, null);
var v1609 = new sc_Pair(v1914, v1915);
var v1002 = new sc_Pair("\u1e9cequal", v1609);
var v2227 = new sc_Pair("\u1e9cx", null);
var v1916 = new sc_Pair("\u1e9cprime", v2227);
var v3444 = new sc_Pair("\u1e9cx", null);
var v3283 = new sc_Pair("\u1e9czerop", v3444);
var v3055 = new sc_Pair(v3283, null);
var v2808 = new sc_Pair("\u1e9cnot", v3055);
var v3686 = new sc_Pair("\u1e9czero", null);
var v3676 = new sc_Pair(v3686, null);
var v3652 = new sc_Pair("\u1e9cadd1", v3676);
var v3610 = new sc_Pair(v3652, null);
var v3543 = new sc_Pair("\u1e9cx", v3610);
var v3445 = new sc_Pair("\u1e9cequal", v3543);
var v3284 = new sc_Pair(v3445, null);
var v3056 = new sc_Pair("\u1e9cnot", v3284);
var v3653 = new sc_Pair("\u1e9cx", null);
var v3611 = new sc_Pair("\u1e9csub1", v3653);
var v3544 = new sc_Pair(v3611, null);
var v3446 = new sc_Pair("\u1e9cx", v3544);
var v3285 = new sc_Pair("\u1e9cprime1", v3446);
var v3057 = new sc_Pair(v3285, null);
var v2809 = new sc_Pair(v3056, v3057);
var v2520 = new sc_Pair(v2808, v2809);
var v2228 = new sc_Pair("\u1e9cand", v2520);
var v1917 = new sc_Pair(v2228, null);
var v1610 = new sc_Pair(v1916, v1917);
var v1003 = new sc_Pair("\u1e9cequal", v1610);
var v2521 = new sc_Pair("\u1e9cq", null);
var v2229 = new sc_Pair("\u1e9cp", v2521);
var v1918 = new sc_Pair("\u1e9cand", v2229);
var v3545 = new sc_Pair("\u1e9ct", null);
var v3612 = new sc_Pair("\u1e9cf", null);
var v3546 = new sc_Pair(v3612, null);
var v3447 = new sc_Pair(v3545, v3546);
var v3286 = new sc_Pair("\u1e9cq", v3447);
var v3058 = new sc_Pair("\u1e9cif", v3286);
var v3287 = new sc_Pair("\u1e9cf", null);
var v3059 = new sc_Pair(v3287, null);
var v2810 = new sc_Pair(v3058, v3059);
var v2522 = new sc_Pair("\u1e9cp", v2810);
var v2230 = new sc_Pair("\u1e9cif", v2522);
var v1919 = new sc_Pair(v2230, null);
var v1611 = new sc_Pair(v1918, v1919);
var v1004 = new sc_Pair("\u1e9cequal", v1611);
var v2523 = new sc_Pair("\u1e9cq", null);
var v2231 = new sc_Pair("\u1e9cp", v2523);
var v1920 = new sc_Pair("\u1e9cor", v2231);
var v3060 = new sc_Pair("\u1e9ct", null);
var v3613 = new sc_Pair("\u1e9ct", null);
var v3654 = new sc_Pair("\u1e9cf", null);
var v3614 = new sc_Pair(v3654, null);
var v3547 = new sc_Pair(v3613, v3614);
var v3448 = new sc_Pair("\u1e9cq", v3547);
var v3288 = new sc_Pair("\u1e9cif", v3448);
var v3061 = new sc_Pair(v3288, null);
var v2811 = new sc_Pair(v3060, v3061);
var v2524 = new sc_Pair("\u1e9cp", v2811);
var v2232 = new sc_Pair("\u1e9cif", v2524);
var v1921 = new sc_Pair(v2232, null);
var v1612 = new sc_Pair(v1920, v1921);
var v1005 = new sc_Pair("\u1e9cequal", v1612);
var v2233 = new sc_Pair("\u1e9cp", null);
var v1922 = new sc_Pair("\u1e9cnot", v2233);
var v3062 = new sc_Pair("\u1e9cf", null);
var v3289 = new sc_Pair("\u1e9ct", null);
var v3063 = new sc_Pair(v3289, null);
var v2812 = new sc_Pair(v3062, v3063);
var v2525 = new sc_Pair("\u1e9cp", v2812);
var v2234 = new sc_Pair("\u1e9cif", v2525);
var v1923 = new sc_Pair(v2234, null);
var v1613 = new sc_Pair(v1922, v1923);
var v1006 = new sc_Pair("\u1e9cequal", v1613);
var v2526 = new sc_Pair("\u1e9cq", null);
var v2235 = new sc_Pair("\u1e9cp", v2526);
var v1924 = new sc_Pair("\u1e9cimplies", v2235);
var v3548 = new sc_Pair("\u1e9ct", null);
var v3615 = new sc_Pair("\u1e9cf", null);
var v3549 = new sc_Pair(v3615, null);
var v3449 = new sc_Pair(v3548, v3549);
var v3290 = new sc_Pair("\u1e9cq", v3449);
var v3064 = new sc_Pair("\u1e9cif", v3290);
var v3291 = new sc_Pair("\u1e9ct", null);
var v3065 = new sc_Pair(v3291, null);
var v2813 = new sc_Pair(v3064, v3065);
var v2527 = new sc_Pair("\u1e9cp", v2813);
var v2236 = new sc_Pair("\u1e9cif", v2527);
var v1925 = new sc_Pair(v2236, null);
var v1614 = new sc_Pair(v1924, v1925);
var v1007 = new sc_Pair("\u1e9cequal", v1614);
var v2237 = new sc_Pair("\u1e9cx", null);
var v1926 = new sc_Pair("\u1e9cfix", v2237);
var v3066 = new sc_Pair("\u1e9cx", null);
var v2814 = new sc_Pair("\u1e9cnumberp", v3066);
var v3292 = new sc_Pair("\u1e9czero", null);
var v3067 = new sc_Pair(v3292, null);
var v2815 = new sc_Pair("\u1e9cx", v3067);
var v2528 = new sc_Pair(v2814, v2815);
var v2238 = new sc_Pair("\u1e9cif", v2528);
var v1927 = new sc_Pair(v2238, null);
var v1615 = new sc_Pair(v1926, v1927);
var v1008 = new sc_Pair("\u1e9cequal", v1615);
var v3293 = new sc_Pair("\u1e9cc", null);
var v3068 = new sc_Pair("\u1e9cb", v3293);
var v2816 = new sc_Pair("\u1e9ca", v3068);
var v2529 = new sc_Pair("\u1e9cif", v2816);
var v2817 = new sc_Pair("\u1e9ce", null);
var v2530 = new sc_Pair("\u1e9cd", v2817);
var v2239 = new sc_Pair(v2529, v2530);
var v1928 = new sc_Pair("\u1e9cif", v2239);
var v3550 = new sc_Pair("\u1e9ce", null);
var v3450 = new sc_Pair("\u1e9cd", v3550);
var v3294 = new sc_Pair("\u1e9cb", v3450);
var v3069 = new sc_Pair("\u1e9cif", v3294);
var v3616 = new sc_Pair("\u1e9ce", null);
var v3551 = new sc_Pair("\u1e9cd", v3616);
var v3451 = new sc_Pair("\u1e9cc", v3551);
var v3295 = new sc_Pair("\u1e9cif", v3451);
var v3070 = new sc_Pair(v3295, null);
var v2818 = new sc_Pair(v3069, v3070);
var v2531 = new sc_Pair("\u1e9ca", v2818);
var v2240 = new sc_Pair("\u1e9cif", v2531);
var v1929 = new sc_Pair(v2240, null);
var v1616 = new sc_Pair(v1928, v1929);
var v1009 = new sc_Pair("\u1e9cequal", v1616);
var v2241 = new sc_Pair("\u1e9cx", null);
var v1930 = new sc_Pair("\u1e9czerop", v2241);
var v3452 = new sc_Pair("\u1e9czero", null);
var v3296 = new sc_Pair(v3452, null);
var v3071 = new sc_Pair("\u1e9cx", v3296);
var v2819 = new sc_Pair("\u1e9cequal", v3071);
var v3552 = new sc_Pair("\u1e9cx", null);
var v3453 = new sc_Pair("\u1e9cnumberp", v3552);
var v3297 = new sc_Pair(v3453, null);
var v3072 = new sc_Pair("\u1e9cnot", v3297);
var v2820 = new sc_Pair(v3072, null);
var v2532 = new sc_Pair(v2819, v2820);
var v2242 = new sc_Pair("\u1e9cor", v2532);
var v1931 = new sc_Pair(v2242, null);
var v1617 = new sc_Pair(v1930, v1931);
var v1010 = new sc_Pair("\u1e9cequal", v1617);
var v3073 = new sc_Pair("\u1e9cy", null);
var v2821 = new sc_Pair("\u1e9cx", v3073);
var v2533 = new sc_Pair("\u1e9cplus", v2821);
var v2534 = new sc_Pair("\u1e9cz", null);
var v2243 = new sc_Pair(v2533, v2534);
var v1932 = new sc_Pair("\u1e9cplus", v2243);
var v3454 = new sc_Pair("\u1e9cz", null);
var v3298 = new sc_Pair("\u1e9cy", v3454);
var v3074 = new sc_Pair("\u1e9cplus", v3298);
var v2822 = new sc_Pair(v3074, null);
var v2535 = new sc_Pair("\u1e9cx", v2822);
var v2244 = new sc_Pair("\u1e9cplus", v2535);
var v1933 = new sc_Pair(v2244, null);
var v1618 = new sc_Pair(v1932, v1933);
var v1011 = new sc_Pair("\u1e9cequal", v1618);
var v3075 = new sc_Pair("\u1e9cb", null);
var v2823 = new sc_Pair("\u1e9ca", v3075);
var v2536 = new sc_Pair("\u1e9cplus", v2823);
var v2824 = new sc_Pair("\u1e9czero", null);
var v2537 = new sc_Pair(v2824, null);
var v2245 = new sc_Pair(v2536, v2537);
var v1934 = new sc_Pair("\u1e9cequal", v2245);
var v3076 = new sc_Pair("\u1e9ca", null);
var v2825 = new sc_Pair("\u1e9czerop", v3076);
var v3299 = new sc_Pair("\u1e9cb", null);
var v3077 = new sc_Pair("\u1e9czerop", v3299);
var v2826 = new sc_Pair(v3077, null);
var v2538 = new sc_Pair(v2825, v2826);
var v2246 = new sc_Pair("\u1e9cand", v2538);
var v1935 = new sc_Pair(v2246, null);
var v1619 = new sc_Pair(v1934, v1935);
var v1012 = new sc_Pair("\u1e9cequal", v1619);
var v2539 = new sc_Pair("\u1e9cx", null);
var v2247 = new sc_Pair("\u1e9cx", v2539);
var v1936 = new sc_Pair("\u1e9cdifference", v2247);
var v2248 = new sc_Pair("\u1e9czero", null);
var v1937 = new sc_Pair(v2248, null);
var v1620 = new sc_Pair(v1936, v1937);
var v1013 = new sc_Pair("\u1e9cequal", v1620);
var v3078 = new sc_Pair("\u1e9cb", null);
var v2827 = new sc_Pair("\u1e9ca", v3078);
var v2540 = new sc_Pair("\u1e9cplus", v2827);
var v3300 = new sc_Pair("\u1e9cc", null);
var v3079 = new sc_Pair("\u1e9ca", v3300);
var v2828 = new sc_Pair("\u1e9cplus", v3079);
var v2541 = new sc_Pair(v2828, null);
var v2249 = new sc_Pair(v2540, v2541);
var v1938 = new sc_Pair("\u1e9cequal", v2249);
var v3080 = new sc_Pair("\u1e9cb", null);
var v2829 = new sc_Pair("\u1e9cfix", v3080);
var v3301 = new sc_Pair("\u1e9cc", null);
var v3081 = new sc_Pair("\u1e9cfix", v3301);
var v2830 = new sc_Pair(v3081, null);
var v2542 = new sc_Pair(v2829, v2830);
var v2250 = new sc_Pair("\u1e9cequal", v2542);
var v1939 = new sc_Pair(v2250, null);
var v1621 = new sc_Pair(v1938, v1939);
var v1014 = new sc_Pair("\u1e9cequal", v1621);
var v2543 = new sc_Pair("\u1e9czero", null);
var v3302 = new sc_Pair("\u1e9cy", null);
var v3082 = new sc_Pair("\u1e9cx", v3302);
var v2831 = new sc_Pair("\u1e9cdifference", v3082);
var v2544 = new sc_Pair(v2831, null);
var v2251 = new sc_Pair(v2543, v2544);
var v1940 = new sc_Pair("\u1e9cequal", v2251);
var v3303 = new sc_Pair("\u1e9cx", null);
var v3083 = new sc_Pair("\u1e9cy", v3303);
var v2832 = new sc_Pair("\u1e9clessp", v3083);
var v2545 = new sc_Pair(v2832, null);
var v2252 = new sc_Pair("\u1e9cnot", v2545);
var v1941 = new sc_Pair(v2252, null);
var v1622 = new sc_Pair(v1940, v1941);
var v1015 = new sc_Pair("\u1e9cequal", v1622);
var v3304 = new sc_Pair("\u1e9cy", null);
var v3084 = new sc_Pair("\u1e9cx", v3304);
var v2833 = new sc_Pair("\u1e9cdifference", v3084);
var v2546 = new sc_Pair(v2833, null);
var v2253 = new sc_Pair("\u1e9cx", v2546);
var v1942 = new sc_Pair("\u1e9cequal", v2253);
var v3085 = new sc_Pair("\u1e9cx", null);
var v2834 = new sc_Pair("\u1e9cnumberp", v3085);
var v3655 = new sc_Pair("\u1e9czero", null);
var v3617 = new sc_Pair(v3655, null);
var v3553 = new sc_Pair("\u1e9cx", v3617);
var v3455 = new sc_Pair("\u1e9cequal", v3553);
var v3618 = new sc_Pair("\u1e9cy", null);
var v3554 = new sc_Pair("\u1e9czerop", v3618);
var v3456 = new sc_Pair(v3554, null);
var v3305 = new sc_Pair(v3455, v3456);
var v3086 = new sc_Pair("\u1e9cor", v3305);
var v2835 = new sc_Pair(v3086, null);
var v2547 = new sc_Pair(v2834, v2835);
var v2254 = new sc_Pair("\u1e9cand", v2547);
var v1943 = new sc_Pair(v2254, null);
var v1623 = new sc_Pair(v1942, v1943);
var v1016 = new sc_Pair("\u1e9cequal", v1623);
var v3457 = new sc_Pair("\u1e9cy", null);
var v3306 = new sc_Pair("\u1e9cx", v3457);
var v3087 = new sc_Pair("\u1e9cappend", v3306);
var v2836 = new sc_Pair(v3087, null);
var v2548 = new sc_Pair("\u1e9cplus-tree", v2836);
var v2549 = new sc_Pair("\u1e9ca", null);
var v2255 = new sc_Pair(v2548, v2549);
var v1944 = new sc_Pair("\u1e9cmeaning", v2255);
var v3458 = new sc_Pair("\u1e9cx", null);
var v3307 = new sc_Pair("\u1e9cplus-tree", v3458);
var v3308 = new sc_Pair("\u1e9ca", null);
var v3088 = new sc_Pair(v3307, v3308);
var v2837 = new sc_Pair("\u1e9cmeaning", v3088);
var v3555 = new sc_Pair("\u1e9cy", null);
var v3459 = new sc_Pair("\u1e9cplus-tree", v3555);
var v3460 = new sc_Pair("\u1e9ca", null);
var v3309 = new sc_Pair(v3459, v3460);
var v3089 = new sc_Pair("\u1e9cmeaning", v3309);
var v2838 = new sc_Pair(v3089, null);
var v2550 = new sc_Pair(v2837, v2838);
var v2256 = new sc_Pair("\u1e9cplus", v2550);
var v1945 = new sc_Pair(v2256, null);
var v1624 = new sc_Pair(v1944, v1945);
var v1017 = new sc_Pair("\u1e9cequal", v1624);
var v3310 = new sc_Pair("\u1e9cx", null);
var v3090 = new sc_Pair("\u1e9cplus-fringe", v3310);
var v2839 = new sc_Pair(v3090, null);
var v2551 = new sc_Pair("\u1e9cplus-tree", v2839);
var v2552 = new sc_Pair("\u1e9ca", null);
var v2257 = new sc_Pair(v2551, v2552);
var v1946 = new sc_Pair("\u1e9cmeaning", v2257);
var v3311 = new sc_Pair("\u1e9ca", null);
var v3091 = new sc_Pair("\u1e9cx", v3311);
var v2840 = new sc_Pair("\u1e9cmeaning", v3091);
var v2553 = new sc_Pair(v2840, null);
var v2258 = new sc_Pair("\u1e9cfix", v2553);
var v1947 = new sc_Pair(v2258, null);
var v1625 = new sc_Pair(v1946, v1947);
var v1018 = new sc_Pair("\u1e9cequal", v1625);
var v3092 = new sc_Pair("\u1e9cy", null);
var v2841 = new sc_Pair("\u1e9cx", v3092);
var v2554 = new sc_Pair("\u1e9cappend", v2841);
var v2555 = new sc_Pair("\u1e9cz", null);
var v2259 = new sc_Pair(v2554, v2555);
var v1948 = new sc_Pair("\u1e9cappend", v2259);
var v3461 = new sc_Pair("\u1e9cz", null);
var v3312 = new sc_Pair("\u1e9cy", v3461);
var v3093 = new sc_Pair("\u1e9cappend", v3312);
var v2842 = new sc_Pair(v3093, null);
var v2556 = new sc_Pair("\u1e9cx", v2842);
var v2260 = new sc_Pair("\u1e9cappend", v2556);
var v1949 = new sc_Pair(v2260, null);
var v1626 = new sc_Pair(v1948, v1949);
var v1019 = new sc_Pair("\u1e9cequal", v1626);
var v3094 = new sc_Pair("\u1e9cb", null);
var v2843 = new sc_Pair("\u1e9ca", v3094);
var v2557 = new sc_Pair("\u1e9cappend", v2843);
var v2261 = new sc_Pair(v2557, null);
var v1950 = new sc_Pair("\u1e9creverse", v2261);
var v3095 = new sc_Pair("\u1e9cb", null);
var v2844 = new sc_Pair("\u1e9creverse", v3095);
var v3313 = new sc_Pair("\u1e9ca", null);
var v3096 = new sc_Pair("\u1e9creverse", v3313);
var v2845 = new sc_Pair(v3096, null);
var v2558 = new sc_Pair(v2844, v2845);
var v2262 = new sc_Pair("\u1e9cappend", v2558);
var v1951 = new sc_Pair(v2262, null);
var v1627 = new sc_Pair(v1950, v1951);
var v1020 = new sc_Pair("\u1e9cequal", v1627);
var v3314 = new sc_Pair("\u1e9cz", null);
var v3097 = new sc_Pair("\u1e9cy", v3314);
var v2846 = new sc_Pair("\u1e9cplus", v3097);
var v2559 = new sc_Pair(v2846, null);
var v2263 = new sc_Pair("\u1e9cx", v2559);
var v1952 = new sc_Pair("\u1e9ctimes", v2263);
var v3315 = new sc_Pair("\u1e9cy", null);
var v3098 = new sc_Pair("\u1e9cx", v3315);
var v2847 = new sc_Pair("\u1e9ctimes", v3098);
var v3462 = new sc_Pair("\u1e9cz", null);
var v3316 = new sc_Pair("\u1e9cx", v3462);
var v3099 = new sc_Pair("\u1e9ctimes", v3316);
var v2848 = new sc_Pair(v3099, null);
var v2560 = new sc_Pair(v2847, v2848);
var v2264 = new sc_Pair("\u1e9cplus", v2560);
var v1953 = new sc_Pair(v2264, null);
var v1628 = new sc_Pair(v1952, v1953);
var v1021 = new sc_Pair("\u1e9cequal", v1628);
var v3100 = new sc_Pair("\u1e9cy", null);
var v2849 = new sc_Pair("\u1e9cx", v3100);
var v2561 = new sc_Pair("\u1e9ctimes", v2849);
var v2562 = new sc_Pair("\u1e9cz", null);
var v2265 = new sc_Pair(v2561, v2562);
var v1954 = new sc_Pair("\u1e9ctimes", v2265);
var v3463 = new sc_Pair("\u1e9cz", null);
var v3317 = new sc_Pair("\u1e9cy", v3463);
var v3101 = new sc_Pair("\u1e9ctimes", v3317);
var v2850 = new sc_Pair(v3101, null);
var v2563 = new sc_Pair("\u1e9cx", v2850);
var v2266 = new sc_Pair("\u1e9ctimes", v2563);
var v1955 = new sc_Pair(v2266, null);
var v1629 = new sc_Pair(v1954, v1955);
var v1022 = new sc_Pair("\u1e9cequal", v1629);
var v3102 = new sc_Pair("\u1e9cy", null);
var v2851 = new sc_Pair("\u1e9cx", v3102);
var v2564 = new sc_Pair("\u1e9ctimes", v2851);
var v2852 = new sc_Pair("\u1e9czero", null);
var v2565 = new sc_Pair(v2852, null);
var v2267 = new sc_Pair(v2564, v2565);
var v1956 = new sc_Pair("\u1e9cequal", v2267);
var v3103 = new sc_Pair("\u1e9cx", null);
var v2853 = new sc_Pair("\u1e9czerop", v3103);
var v3318 = new sc_Pair("\u1e9cy", null);
var v3104 = new sc_Pair("\u1e9czerop", v3318);
var v2854 = new sc_Pair(v3104, null);
var v2566 = new sc_Pair(v2853, v2854);
var v2268 = new sc_Pair("\u1e9cor", v2566);
var v1957 = new sc_Pair(v2268, null);
var v1630 = new sc_Pair(v1956, v1957);
var v1023 = new sc_Pair("\u1e9cequal", v1630);
var v3105 = new sc_Pair("\u1e9cy", null);
var v2855 = new sc_Pair("\u1e9cx", v3105);
var v2567 = new sc_Pair("\u1e9cappend", v2855);
var v2856 = new sc_Pair("\u1e9cenvrn", null);
var v2568 = new sc_Pair("\u1e9cpds", v2856);
var v2269 = new sc_Pair(v2567, v2568);
var v1958 = new sc_Pair("\u1e9cexec", v2269);
var v3556 = new sc_Pair("\u1e9cenvrn", null);
var v3464 = new sc_Pair("\u1e9cpds", v3556);
var v3319 = new sc_Pair("\u1e9cx", v3464);
var v3106 = new sc_Pair("\u1e9cexec", v3319);
var v3107 = new sc_Pair("\u1e9cenvrn", null);
var v2857 = new sc_Pair(v3106, v3107);
var v2569 = new sc_Pair("\u1e9cy", v2857);
var v2270 = new sc_Pair("\u1e9cexec", v2569);
var v1959 = new sc_Pair(v2270, null);
var v1631 = new sc_Pair(v1958, v1959);
var v1024 = new sc_Pair("\u1e9cequal", v1631);
var v2570 = new sc_Pair("\u1e9cy", null);
var v2271 = new sc_Pair("\u1e9cx", v2570);
var v1960 = new sc_Pair("\u1e9cmc-flatten", v2271);
var v3108 = new sc_Pair("\u1e9cx", null);
var v2858 = new sc_Pair("\u1e9cflatten", v3108);
var v2859 = new sc_Pair("\u1e9cy", null);
var v2571 = new sc_Pair(v2858, v2859);
var v2272 = new sc_Pair("\u1e9cappend", v2571);
var v1961 = new sc_Pair(v2272, null);
var v1632 = new sc_Pair(v1960, v1961);
var v1025 = new sc_Pair("\u1e9cequal", v1632);
var v3320 = new sc_Pair("\u1e9cb", null);
var v3109 = new sc_Pair("\u1e9ca", v3320);
var v2860 = new sc_Pair("\u1e9cappend", v3109);
var v2572 = new sc_Pair(v2860, null);
var v2273 = new sc_Pair("\u1e9cx", v2572);
var v1962 = new sc_Pair("\u1e9cmember", v2273);
var v3321 = new sc_Pair("\u1e9ca", null);
var v3110 = new sc_Pair("\u1e9cx", v3321);
var v2861 = new sc_Pair("\u1e9cmember", v3110);
var v3465 = new sc_Pair("\u1e9cb", null);
var v3322 = new sc_Pair("\u1e9cx", v3465);
var v3111 = new sc_Pair("\u1e9cmember", v3322);
var v2862 = new sc_Pair(v3111, null);
var v2573 = new sc_Pair(v2861, v2862);
var v2274 = new sc_Pair("\u1e9cor", v2573);
var v1963 = new sc_Pair(v2274, null);
var v1633 = new sc_Pair(v1962, v1963);
var v1026 = new sc_Pair("\u1e9cequal", v1633);
var v3112 = new sc_Pair("\u1e9cy", null);
var v2863 = new sc_Pair("\u1e9creverse", v3112);
var v2574 = new sc_Pair(v2863, null);
var v2275 = new sc_Pair("\u1e9cx", v2574);
var v1964 = new sc_Pair("\u1e9cmember", v2275);
var v2864 = new sc_Pair("\u1e9cy", null);
var v2575 = new sc_Pair("\u1e9cx", v2864);
var v2276 = new sc_Pair("\u1e9cmember", v2575);
var v1965 = new sc_Pair(v2276, null);
var v1634 = new sc_Pair(v1964, v1965);
var v1027 = new sc_Pair("\u1e9cequal", v1634);
var v2865 = new sc_Pair("\u1e9cx", null);
var v2576 = new sc_Pair("\u1e9creverse", v2865);
var v2277 = new sc_Pair(v2576, null);
var v1966 = new sc_Pair("\u1e9clength", v2277);
var v2577 = new sc_Pair("\u1e9cx", null);
var v2278 = new sc_Pair("\u1e9clength", v2577);
var v1967 = new sc_Pair(v2278, null);
var v1635 = new sc_Pair(v1966, v1967);
var v1028 = new sc_Pair("\u1e9cequal", v1635);
var v3323 = new sc_Pair("\u1e9cc", null);
var v3113 = new sc_Pair("\u1e9cb", v3323);
var v2866 = new sc_Pair("\u1e9cintersect", v3113);
var v2578 = new sc_Pair(v2866, null);
var v2279 = new sc_Pair("\u1e9ca", v2578);
var v1968 = new sc_Pair("\u1e9cmember", v2279);
var v3324 = new sc_Pair("\u1e9cb", null);
var v3114 = new sc_Pair("\u1e9ca", v3324);
var v2867 = new sc_Pair("\u1e9cmember", v3114);
var v3466 = new sc_Pair("\u1e9cc", null);
var v3325 = new sc_Pair("\u1e9ca", v3466);
var v3115 = new sc_Pair("\u1e9cmember", v3325);
var v2868 = new sc_Pair(v3115, null);
var v2579 = new sc_Pair(v2867, v2868);
var v2280 = new sc_Pair("\u1e9cand", v2579);
var v1969 = new sc_Pair(v2280, null);
var v1636 = new sc_Pair(v1968, v1969);
var v1029 = new sc_Pair("\u1e9cequal", v1636);
var v2580 = new sc_Pair("\u1e9czero", null);
var v2581 = new sc_Pair("\u1e9ci", null);
var v2281 = new sc_Pair(v2580, v2581);
var v1970 = new sc_Pair("\u1e9cnth", v2281);
var v2282 = new sc_Pair("\u1e9czero", null);
var v1971 = new sc_Pair(v2282, null);
var v1637 = new sc_Pair(v1970, v1971);
var v1030 = new sc_Pair("\u1e9cequal", v1637);
var v3326 = new sc_Pair("\u1e9ck", null);
var v3116 = new sc_Pair("\u1e9cj", v3326);
var v2869 = new sc_Pair("\u1e9cplus", v3116);
var v2582 = new sc_Pair(v2869, null);
var v2283 = new sc_Pair("\u1e9ci", v2582);
var v1972 = new sc_Pair("\u1e9cexp", v2283);
var v3327 = new sc_Pair("\u1e9cj", null);
var v3117 = new sc_Pair("\u1e9ci", v3327);
var v2870 = new sc_Pair("\u1e9cexp", v3117);
var v3467 = new sc_Pair("\u1e9ck", null);
var v3328 = new sc_Pair("\u1e9ci", v3467);
var v3118 = new sc_Pair("\u1e9cexp", v3328);
var v2871 = new sc_Pair(v3118, null);
var v2583 = new sc_Pair(v2870, v2871);
var v2284 = new sc_Pair("\u1e9ctimes", v2583);
var v1973 = new sc_Pair(v2284, null);
var v1638 = new sc_Pair(v1972, v1973);
var v1031 = new sc_Pair("\u1e9cequal", v1638);
var v3329 = new sc_Pair("\u1e9ck", null);
var v3119 = new sc_Pair("\u1e9cj", v3329);
var v2872 = new sc_Pair("\u1e9ctimes", v3119);
var v2584 = new sc_Pair(v2872, null);
var v2285 = new sc_Pair("\u1e9ci", v2584);
var v1974 = new sc_Pair("\u1e9cexp", v2285);
var v3330 = new sc_Pair("\u1e9cj", null);
var v3120 = new sc_Pair("\u1e9ci", v3330);
var v2873 = new sc_Pair("\u1e9cexp", v3120);
var v2874 = new sc_Pair("\u1e9ck", null);
var v2585 = new sc_Pair(v2873, v2874);
var v2286 = new sc_Pair("\u1e9cexp", v2585);
var v1975 = new sc_Pair(v2286, null);
var v1639 = new sc_Pair(v1974, v1975);
var v1032 = new sc_Pair("\u1e9cequal", v1639);
var v2586 = new sc_Pair("\u1e9cy", null);
var v2287 = new sc_Pair("\u1e9cx", v2586);
var v1976 = new sc_Pair("\u1e9creverse-loop", v2287);
var v3121 = new sc_Pair("\u1e9cx", null);
var v2875 = new sc_Pair("\u1e9creverse", v3121);
var v2876 = new sc_Pair("\u1e9cy", null);
var v2587 = new sc_Pair(v2875, v2876);
var v2288 = new sc_Pair("\u1e9cappend", v2587);
var v1977 = new sc_Pair(v2288, null);
var v1640 = new sc_Pair(v1976, v1977);
var v1033 = new sc_Pair("\u1e9cequal", v1640);
var v2877 = new sc_Pair("\u1e9cnil", null);
var v2588 = new sc_Pair(v2877, null);
var v2289 = new sc_Pair("\u1e9cx", v2588);
var v1978 = new sc_Pair("\u1e9creverse-loop", v2289);
var v2589 = new sc_Pair("\u1e9cx", null);
var v2290 = new sc_Pair("\u1e9creverse", v2589);
var v1979 = new sc_Pair(v2290, null);
var v1641 = new sc_Pair(v1978, v1979);
var v1034 = new sc_Pair("\u1e9cequal", v1641);
var v3331 = new sc_Pair("\u1e9cy", null);
var v3122 = new sc_Pair("\u1e9cx", v3331);
var v2878 = new sc_Pair("\u1e9csort-lp", v3122);
var v2590 = new sc_Pair(v2878, null);
var v2291 = new sc_Pair("\u1e9cz", v2590);
var v1980 = new sc_Pair("\u1e9ccount-list", v2291);
var v3332 = new sc_Pair("\u1e9cx", null);
var v3123 = new sc_Pair("\u1e9cz", v3332);
var v2879 = new sc_Pair("\u1e9ccount-list", v3123);
var v3468 = new sc_Pair("\u1e9cy", null);
var v3333 = new sc_Pair("\u1e9cz", v3468);
var v3124 = new sc_Pair("\u1e9ccount-list", v3333);
var v2880 = new sc_Pair(v3124, null);
var v2591 = new sc_Pair(v2879, v2880);
var v2292 = new sc_Pair("\u1e9cplus", v2591);
var v1981 = new sc_Pair(v2292, null);
var v1642 = new sc_Pair(v1980, v1981);
var v1035 = new sc_Pair("\u1e9cequal", v1642);
var v3125 = new sc_Pair("\u1e9cb", null);
var v2881 = new sc_Pair("\u1e9ca", v3125);
var v2592 = new sc_Pair("\u1e9cappend", v2881);
var v3334 = new sc_Pair("\u1e9cc", null);
var v3126 = new sc_Pair("\u1e9ca", v3334);
var v2882 = new sc_Pair("\u1e9cappend", v3126);
var v2593 = new sc_Pair(v2882, null);
var v2293 = new sc_Pair(v2592, v2593);
var v1982 = new sc_Pair("\u1e9cequal", v2293);
var v2883 = new sc_Pair("\u1e9cc", null);
var v2594 = new sc_Pair("\u1e9cb", v2883);
var v2294 = new sc_Pair("\u1e9cequal", v2594);
var v1983 = new sc_Pair(v2294, null);
var v1643 = new sc_Pair(v1982, v1983);
var v1036 = new sc_Pair("\u1e9cequal", v1643);
var v3127 = new sc_Pair("\u1e9cy", null);
var v2884 = new sc_Pair("\u1e9cx", v3127);
var v2595 = new sc_Pair("\u1e9cremainder", v2884);
var v3619 = new sc_Pair("\u1e9cy", null);
var v3557 = new sc_Pair("\u1e9cx", v3619);
var v3469 = new sc_Pair("\u1e9cquotient", v3557);
var v3335 = new sc_Pair(v3469, null);
var v3128 = new sc_Pair("\u1e9cy", v3335);
var v2885 = new sc_Pair("\u1e9ctimes", v3128);
var v2596 = new sc_Pair(v2885, null);
var v2295 = new sc_Pair(v2595, v2596);
var v1984 = new sc_Pair("\u1e9cplus", v2295);
var v2597 = new sc_Pair("\u1e9cx", null);
var v2296 = new sc_Pair("\u1e9cfix", v2597);
var v1985 = new sc_Pair(v2296, null);
var v1644 = new sc_Pair(v1984, v1985);
var v1037 = new sc_Pair("\u1e9cequal", v1644);
var v3336 = new sc_Pair("\u1e9cbase", null);
var v3129 = new sc_Pair("\u1e9ci", v3336);
var v2886 = new sc_Pair("\u1e9cl", v3129);
var v2598 = new sc_Pair("\u1e9cbig-plus1", v2886);
var v2599 = new sc_Pair("\u1e9cbase", null);
var v2297 = new sc_Pair(v2598, v2599);
var v1986 = new sc_Pair("\u1e9cpower-eval", v2297);
var v3337 = new sc_Pair("\u1e9cbase", null);
var v3130 = new sc_Pair("\u1e9cl", v3337);
var v2887 = new sc_Pair("\u1e9cpower-eval", v3130);
var v2888 = new sc_Pair("\u1e9ci", null);
var v2600 = new sc_Pair(v2887, v2888);
var v2298 = new sc_Pair("\u1e9cplus", v2600);
var v1987 = new sc_Pair(v2298, null);
var v1645 = new sc_Pair(v1986, v1987);
var v1038 = new sc_Pair("\u1e9cequal", v1645);
var v3470 = new sc_Pair("\u1e9cbase", null);
var v3338 = new sc_Pair("\u1e9ci", v3470);
var v3131 = new sc_Pair("\u1e9cy", v3338);
var v2889 = new sc_Pair("\u1e9cx", v3131);
var v2601 = new sc_Pair("\u1e9cbig-plus", v2889);
var v2602 = new sc_Pair("\u1e9cbase", null);
var v2299 = new sc_Pair(v2601, v2602);
var v1988 = new sc_Pair("\u1e9cpower-eval", v2299);
var v3620 = new sc_Pair("\u1e9cbase", null);
var v3558 = new sc_Pair("\u1e9cx", v3620);
var v3471 = new sc_Pair("\u1e9cpower-eval", v3558);
var v3656 = new sc_Pair("\u1e9cbase", null);
var v3621 = new sc_Pair("\u1e9cy", v3656);
var v3559 = new sc_Pair("\u1e9cpower-eval", v3621);
var v3472 = new sc_Pair(v3559, null);
var v3339 = new sc_Pair(v3471, v3472);
var v3132 = new sc_Pair("\u1e9cplus", v3339);
var v2890 = new sc_Pair(v3132, null);
var v2603 = new sc_Pair("\u1e9ci", v2890);
var v2300 = new sc_Pair("\u1e9cplus", v2603);
var v1989 = new sc_Pair(v2300, null);
var v1646 = new sc_Pair(v1988, v1989);
var v1039 = new sc_Pair("\u1e9cequal", v1646);
var v2604 = new sc_Pair(1, null);
var v2301 = new sc_Pair("\u1e9cy", v2604);
var v1990 = new sc_Pair("\u1e9cremainder", v2301);
var v2302 = new sc_Pair("\u1e9czero", null);
var v1991 = new sc_Pair(v2302, null);
var v1647 = new sc_Pair(v1990, v1991);
var v1040 = new sc_Pair("\u1e9cequal", v1647);
var v3133 = new sc_Pair("\u1e9cy", null);
var v2891 = new sc_Pair("\u1e9cx", v3133);
var v2605 = new sc_Pair("\u1e9cremainder", v2891);
var v2606 = new sc_Pair("\u1e9cy", null);
var v2303 = new sc_Pair(v2605, v2606);
var v1992 = new sc_Pair("\u1e9clessp", v2303);
var v3134 = new sc_Pair("\u1e9cy", null);
var v2892 = new sc_Pair("\u1e9czerop", v3134);
var v2607 = new sc_Pair(v2892, null);
var v2304 = new sc_Pair("\u1e9cnot", v2607);
var v1993 = new sc_Pair(v2304, null);
var v1648 = new sc_Pair(v1992, v1993);
var v1041 = new sc_Pair("\u1e9cequal", v1648);
var v2608 = new sc_Pair("\u1e9cx", null);
var v2305 = new sc_Pair("\u1e9cx", v2608);
var v1994 = new sc_Pair("\u1e9cremainder", v2305);
var v2306 = new sc_Pair("\u1e9czero", null);
var v1995 = new sc_Pair(v2306, null);
var v1649 = new sc_Pair(v1994, v1995);
var v1042 = new sc_Pair("\u1e9cequal", v1649);
var v3135 = new sc_Pair("\u1e9cj", null);
var v2893 = new sc_Pair("\u1e9ci", v3135);
var v2609 = new sc_Pair("\u1e9cquotient", v2893);
var v2610 = new sc_Pair("\u1e9ci", null);
var v2307 = new sc_Pair(v2609, v2610);
var v1996 = new sc_Pair("\u1e9clessp", v2307);
var v3473 = new sc_Pair("\u1e9ci", null);
var v3340 = new sc_Pair("\u1e9czerop", v3473);
var v3136 = new sc_Pair(v3340, null);
var v2894 = new sc_Pair("\u1e9cnot", v3136);
var v3560 = new sc_Pair("\u1e9cj", null);
var v3474 = new sc_Pair("\u1e9czerop", v3560);
var v3687 = new sc_Pair(1, null);
var v3677 = new sc_Pair("\u1e9cj", v3687);
var v3657 = new sc_Pair("\u1e9cequal", v3677);
var v3622 = new sc_Pair(v3657, null);
var v3561 = new sc_Pair("\u1e9cnot", v3622);
var v3475 = new sc_Pair(v3561, null);
var v3341 = new sc_Pair(v3474, v3475);
var v3137 = new sc_Pair("\u1e9cor", v3341);
var v2895 = new sc_Pair(v3137, null);
var v2611 = new sc_Pair(v2894, v2895);
var v2308 = new sc_Pair("\u1e9cand", v2611);
var v1997 = new sc_Pair(v2308, null);
var v1650 = new sc_Pair(v1996, v1997);
var v1043 = new sc_Pair("\u1e9cequal", v1650);
var v3138 = new sc_Pair("\u1e9cy", null);
var v2896 = new sc_Pair("\u1e9cx", v3138);
var v2612 = new sc_Pair("\u1e9cremainder", v2896);
var v2613 = new sc_Pair("\u1e9cx", null);
var v2309 = new sc_Pair(v2612, v2613);
var v1998 = new sc_Pair("\u1e9clessp", v2309);
var v3476 = new sc_Pair("\u1e9cy", null);
var v3342 = new sc_Pair("\u1e9czerop", v3476);
var v3139 = new sc_Pair(v3342, null);
var v2897 = new sc_Pair("\u1e9cnot", v3139);
var v3562 = new sc_Pair("\u1e9cx", null);
var v3477 = new sc_Pair("\u1e9czerop", v3562);
var v3343 = new sc_Pair(v3477, null);
var v3140 = new sc_Pair("\u1e9cnot", v3343);
var v3658 = new sc_Pair("\u1e9cy", null);
var v3623 = new sc_Pair("\u1e9cx", v3658);
var v3563 = new sc_Pair("\u1e9clessp", v3623);
var v3478 = new sc_Pair(v3563, null);
var v3344 = new sc_Pair("\u1e9cnot", v3478);
var v3141 = new sc_Pair(v3344, null);
var v2898 = new sc_Pair(v3140, v3141);
var v2614 = new sc_Pair(v2897, v2898);
var v2310 = new sc_Pair("\u1e9cand", v2614);
var v1999 = new sc_Pair(v2310, null);
var v1651 = new sc_Pair(v1998, v1999);
var v1044 = new sc_Pair("\u1e9cequal", v1651);
var v3142 = new sc_Pair("\u1e9cbase", null);
var v2899 = new sc_Pair("\u1e9ci", v3142);
var v2615 = new sc_Pair("\u1e9cpower-rep", v2899);
var v2616 = new sc_Pair("\u1e9cbase", null);
var v2311 = new sc_Pair(v2615, v2616);
var v2000 = new sc_Pair("\u1e9cpower-eval", v2311);
var v2617 = new sc_Pair("\u1e9ci", null);
var v2312 = new sc_Pair("\u1e9cfix", v2617);
var v2001 = new sc_Pair(v2312, null);
var v1652 = new sc_Pair(v2000, v2001);
var v1045 = new sc_Pair("\u1e9cequal", v1652);
var v3479 = new sc_Pair("\u1e9cbase", null);
var v3345 = new sc_Pair("\u1e9ci", v3479);
var v3143 = new sc_Pair("\u1e9cpower-rep", v3345);
var v3564 = new sc_Pair("\u1e9cbase", null);
var v3480 = new sc_Pair("\u1e9cj", v3564);
var v3346 = new sc_Pair("\u1e9cpower-rep", v3480);
var v3481 = new sc_Pair("\u1e9czero", null);
var v3482 = new sc_Pair("\u1e9cbase", null);
var v3347 = new sc_Pair(v3481, v3482);
var v3144 = new sc_Pair(v3346, v3347);
var v2900 = new sc_Pair(v3143, v3144);
var v2618 = new sc_Pair("\u1e9cbig-plus", v2900);
var v2619 = new sc_Pair("\u1e9cbase", null);
var v2313 = new sc_Pair(v2618, v2619);
var v2002 = new sc_Pair("\u1e9cpower-eval", v2313);
var v2901 = new sc_Pair("\u1e9cj", null);
var v2620 = new sc_Pair("\u1e9ci", v2901);
var v2314 = new sc_Pair("\u1e9cplus", v2620);
var v2003 = new sc_Pair(v2314, null);
var v1653 = new sc_Pair(v2002, v2003);
var v1046 = new sc_Pair("\u1e9cequal", v1653);
var v2621 = new sc_Pair("\u1e9cy", null);
var v2315 = new sc_Pair("\u1e9cx", v2621);
var v2004 = new sc_Pair("\u1e9cgcd", v2315);
var v2902 = new sc_Pair("\u1e9cx", null);
var v2622 = new sc_Pair("\u1e9cy", v2902);
var v2316 = new sc_Pair("\u1e9cgcd", v2622);
var v2005 = new sc_Pair(v2316, null);
var v1654 = new sc_Pair(v2004, v2005);
var v1047 = new sc_Pair("\u1e9cequal", v1654);
var v3145 = new sc_Pair("\u1e9cb", null);
var v2903 = new sc_Pair("\u1e9ca", v3145);
var v2623 = new sc_Pair("\u1e9cappend", v2903);
var v2624 = new sc_Pair("\u1e9ci", null);
var v2317 = new sc_Pair(v2623, v2624);
var v2006 = new sc_Pair("\u1e9cnth", v2317);
var v3348 = new sc_Pair("\u1e9ci", null);
var v3146 = new sc_Pair("\u1e9ca", v3348);
var v2904 = new sc_Pair("\u1e9cnth", v3146);
var v3688 = new sc_Pair("\u1e9ca", null);
var v3678 = new sc_Pair("\u1e9clength", v3688);
var v3659 = new sc_Pair(v3678, null);
var v3624 = new sc_Pair("\u1e9ci", v3659);
var v3565 = new sc_Pair("\u1e9cdifference", v3624);
var v3483 = new sc_Pair(v3565, null);
var v3349 = new sc_Pair("\u1e9cb", v3483);
var v3147 = new sc_Pair("\u1e9cnth", v3349);
var v2905 = new sc_Pair(v3147, null);
var v2625 = new sc_Pair(v2904, v2905);
var v2318 = new sc_Pair("\u1e9cappend", v2625);
var v2007 = new sc_Pair(v2318, null);
var v1655 = new sc_Pair(v2006, v2007);
var v1048 = new sc_Pair("\u1e9cequal", v1655);
var v3148 = new sc_Pair("\u1e9cy", null);
var v2906 = new sc_Pair("\u1e9cx", v3148);
var v2626 = new sc_Pair("\u1e9cplus", v2906);
var v2627 = new sc_Pair("\u1e9cx", null);
var v2319 = new sc_Pair(v2626, v2627);
var v2008 = new sc_Pair("\u1e9cdifference", v2319);
var v2628 = new sc_Pair("\u1e9cy", null);
var v2320 = new sc_Pair("\u1e9cfix", v2628);
var v2009 = new sc_Pair(v2320, null);
var v1656 = new sc_Pair(v2008, v2009);
var v1049 = new sc_Pair("\u1e9cequal", v1656);
var v3149 = new sc_Pair("\u1e9cx", null);
var v2907 = new sc_Pair("\u1e9cy", v3149);
var v2629 = new sc_Pair("\u1e9cplus", v2907);
var v2630 = new sc_Pair("\u1e9cx", null);
var v2321 = new sc_Pair(v2629, v2630);
var v2010 = new sc_Pair("\u1e9cdifference", v2321);
var v2631 = new sc_Pair("\u1e9cy", null);
var v2322 = new sc_Pair("\u1e9cfix", v2631);
var v2011 = new sc_Pair(v2322, null);
var v1657 = new sc_Pair(v2010, v2011);
var v1050 = new sc_Pair("\u1e9cequal", v1657);
var v3150 = new sc_Pair("\u1e9cy", null);
var v2908 = new sc_Pair("\u1e9cx", v3150);
var v2632 = new sc_Pair("\u1e9cplus", v2908);
var v3350 = new sc_Pair("\u1e9cz", null);
var v3151 = new sc_Pair("\u1e9cx", v3350);
var v2909 = new sc_Pair("\u1e9cplus", v3151);
var v2633 = new sc_Pair(v2909, null);
var v2323 = new sc_Pair(v2632, v2633);
var v2012 = new sc_Pair("\u1e9cdifference", v2323);
var v2910 = new sc_Pair("\u1e9cz", null);
var v2634 = new sc_Pair("\u1e9cy", v2910);
var v2324 = new sc_Pair("\u1e9cdifference", v2634);
var v2013 = new sc_Pair(v2324, null);
var v1658 = new sc_Pair(v2012, v2013);
var v1051 = new sc_Pair("\u1e9cequal", v1658);
var v3351 = new sc_Pair("\u1e9cw", null);
var v3152 = new sc_Pair("\u1e9cc", v3351);
var v2911 = new sc_Pair("\u1e9cdifference", v3152);
var v2635 = new sc_Pair(v2911, null);
var v2325 = new sc_Pair("\u1e9cx", v2635);
var v2014 = new sc_Pair("\u1e9ctimes", v2325);
var v3352 = new sc_Pair("\u1e9cx", null);
var v3153 = new sc_Pair("\u1e9cc", v3352);
var v2912 = new sc_Pair("\u1e9ctimes", v3153);
var v3484 = new sc_Pair("\u1e9cx", null);
var v3353 = new sc_Pair("\u1e9cw", v3484);
var v3154 = new sc_Pair("\u1e9ctimes", v3353);
var v2913 = new sc_Pair(v3154, null);
var v2636 = new sc_Pair(v2912, v2913);
var v2326 = new sc_Pair("\u1e9cdifference", v2636);
var v2015 = new sc_Pair(v2326, null);
var v1659 = new sc_Pair(v2014, v2015);
var v1052 = new sc_Pair("\u1e9cequal", v1659);
var v3155 = new sc_Pair("\u1e9cz", null);
var v2914 = new sc_Pair("\u1e9cx", v3155);
var v2637 = new sc_Pair("\u1e9ctimes", v2914);
var v2638 = new sc_Pair("\u1e9cz", null);
var v2327 = new sc_Pair(v2637, v2638);
var v2016 = new sc_Pair("\u1e9cremainder", v2327);
var v2328 = new sc_Pair("\u1e9czero", null);
var v2017 = new sc_Pair(v2328, null);
var v1660 = new sc_Pair(v2016, v2017);
var v1053 = new sc_Pair("\u1e9cequal", v1660);
var v3566 = new sc_Pair("\u1e9cc", null);
var v3485 = new sc_Pair("\u1e9ca", v3566);
var v3354 = new sc_Pair("\u1e9cplus", v3485);
var v3156 = new sc_Pair(v3354, null);
var v2915 = new sc_Pair("\u1e9cb", v3156);
var v2639 = new sc_Pair("\u1e9cplus", v2915);
var v2640 = new sc_Pair("\u1e9ca", null);
var v2329 = new sc_Pair(v2639, v2640);
var v2018 = new sc_Pair("\u1e9cdifference", v2329);
var v2916 = new sc_Pair("\u1e9cc", null);
var v2641 = new sc_Pair("\u1e9cb", v2916);
var v2330 = new sc_Pair("\u1e9cplus", v2641);
var v2019 = new sc_Pair(v2330, null);
var v1661 = new sc_Pair(v2018, v2019);
var v1054 = new sc_Pair("\u1e9cequal", v1661);
var v3486 = new sc_Pair("\u1e9cz", null);
var v3355 = new sc_Pair("\u1e9cy", v3486);
var v3157 = new sc_Pair("\u1e9cplus", v3355);
var v2917 = new sc_Pair(v3157, null);
var v2642 = new sc_Pair("\u1e9cadd1", v2917);
var v2643 = new sc_Pair("\u1e9cz", null);
var v2331 = new sc_Pair(v2642, v2643);
var v2020 = new sc_Pair("\u1e9cdifference", v2331);
var v2644 = new sc_Pair("\u1e9cy", null);
var v2332 = new sc_Pair("\u1e9cadd1", v2644);
var v2021 = new sc_Pair(v2332, null);
var v1662 = new sc_Pair(v2020, v2021);
var v1055 = new sc_Pair("\u1e9cequal", v1662);
var v3158 = new sc_Pair("\u1e9cy", null);
var v2918 = new sc_Pair("\u1e9cx", v3158);
var v2645 = new sc_Pair("\u1e9cplus", v2918);
var v3356 = new sc_Pair("\u1e9cz", null);
var v3159 = new sc_Pair("\u1e9cx", v3356);
var v2919 = new sc_Pair("\u1e9cplus", v3159);
var v2646 = new sc_Pair(v2919, null);
var v2333 = new sc_Pair(v2645, v2646);
var v2022 = new sc_Pair("\u1e9clessp", v2333);
var v2920 = new sc_Pair("\u1e9cz", null);
var v2647 = new sc_Pair("\u1e9cy", v2920);
var v2334 = new sc_Pair("\u1e9clessp", v2647);
var v2023 = new sc_Pair(v2334, null);
var v1663 = new sc_Pair(v2022, v2023);
var v1056 = new sc_Pair("\u1e9cequal", v1663);
var v3160 = new sc_Pair("\u1e9cz", null);
var v2921 = new sc_Pair("\u1e9cx", v3160);
var v2648 = new sc_Pair("\u1e9ctimes", v2921);
var v3357 = new sc_Pair("\u1e9cz", null);
var v3161 = new sc_Pair("\u1e9cy", v3357);
var v2922 = new sc_Pair("\u1e9ctimes", v3161);
var v2649 = new sc_Pair(v2922, null);
var v2335 = new sc_Pair(v2648, v2649);
var v2024 = new sc_Pair("\u1e9clessp", v2335);
var v3487 = new sc_Pair("\u1e9cz", null);
var v3358 = new sc_Pair("\u1e9czerop", v3487);
var v3162 = new sc_Pair(v3358, null);
var v2923 = new sc_Pair("\u1e9cnot", v3162);
var v3488 = new sc_Pair("\u1e9cy", null);
var v3359 = new sc_Pair("\u1e9cx", v3488);
var v3163 = new sc_Pair("\u1e9clessp", v3359);
var v2924 = new sc_Pair(v3163, null);
var v2650 = new sc_Pair(v2923, v2924);
var v2336 = new sc_Pair("\u1e9cand", v2650);
var v2025 = new sc_Pair(v2336, null);
var v1664 = new sc_Pair(v2024, v2025);
var v1057 = new sc_Pair("\u1e9cequal", v1664);
var v3360 = new sc_Pair("\u1e9cy", null);
var v3164 = new sc_Pair("\u1e9cx", v3360);
var v2925 = new sc_Pair("\u1e9cplus", v3164);
var v2651 = new sc_Pair(v2925, null);
var v2337 = new sc_Pair("\u1e9cy", v2651);
var v2026 = new sc_Pair("\u1e9clessp", v2337);
var v3165 = new sc_Pair("\u1e9cx", null);
var v2926 = new sc_Pair("\u1e9czerop", v3165);
var v2652 = new sc_Pair(v2926, null);
var v2338 = new sc_Pair("\u1e9cnot", v2652);
var v2027 = new sc_Pair(v2338, null);
var v1665 = new sc_Pair(v2026, v2027);
var v1058 = new sc_Pair("\u1e9cequal", v1665);
var v3166 = new sc_Pair("\u1e9cz", null);
var v2927 = new sc_Pair("\u1e9cx", v3166);
var v2653 = new sc_Pair("\u1e9ctimes", v2927);
var v3361 = new sc_Pair("\u1e9cz", null);
var v3167 = new sc_Pair("\u1e9cy", v3361);
var v2928 = new sc_Pair("\u1e9ctimes", v3167);
var v2654 = new sc_Pair(v2928, null);
var v2339 = new sc_Pair(v2653, v2654);
var v2028 = new sc_Pair("\u1e9cgcd", v2339);
var v3489 = new sc_Pair("\u1e9cy", null);
var v3362 = new sc_Pair("\u1e9cx", v3489);
var v3168 = new sc_Pair("\u1e9cgcd", v3362);
var v2929 = new sc_Pair(v3168, null);
var v2655 = new sc_Pair("\u1e9cz", v2929);
var v2340 = new sc_Pair("\u1e9ctimes", v2655);
var v2029 = new sc_Pair(v2340, null);
var v1666 = new sc_Pair(v2028, v2029);
var v1059 = new sc_Pair("\u1e9cequal", v1666);
var v2930 = new sc_Pair("\u1e9cx", null);
var v2656 = new sc_Pair("\u1e9cnormalize", v2930);
var v2657 = new sc_Pair("\u1e9ca", null);
var v2341 = new sc_Pair(v2656, v2657);
var v2030 = new sc_Pair("\u1e9cvalue", v2341);
var v2931 = new sc_Pair("\u1e9ca", null);
var v2658 = new sc_Pair("\u1e9cx", v2931);
var v2342 = new sc_Pair("\u1e9cvalue", v2658);
var v2031 = new sc_Pair(v2342, null);
var v1667 = new sc_Pair(v2030, v2031);
var v1060 = new sc_Pair("\u1e9cequal", v1667);
var v2932 = new sc_Pair("\u1e9cx", null);
var v2659 = new sc_Pair("\u1e9cflatten", v2932);
var v3490 = new sc_Pair("\u1e9cnil", null);
var v3363 = new sc_Pair(v3490, null);
var v3169 = new sc_Pair("\u1e9cy", v3363);
var v2933 = new sc_Pair("\u1e9ccons", v3169);
var v2660 = new sc_Pair(v2933, null);
var v2343 = new sc_Pair(v2659, v2660);
var v2032 = new sc_Pair("\u1e9cequal", v2343);
var v3170 = new sc_Pair("\u1e9cx", null);
var v2934 = new sc_Pair("\u1e9cnlistp", v3170);
var v3491 = new sc_Pair("\u1e9cy", null);
var v3364 = new sc_Pair("\u1e9cx", v3491);
var v3171 = new sc_Pair("\u1e9cequal", v3364);
var v2935 = new sc_Pair(v3171, null);
var v2661 = new sc_Pair(v2934, v2935);
var v2344 = new sc_Pair("\u1e9cand", v2661);
var v2033 = new sc_Pair(v2344, null);
var v1668 = new sc_Pair(v2032, v2033);
var v1061 = new sc_Pair("\u1e9cequal", v1668);
var v2936 = new sc_Pair("\u1e9cx", null);
var v2662 = new sc_Pair("\u1e9cgopher", v2936);
var v2345 = new sc_Pair(v2662, null);
var v2034 = new sc_Pair("\u1e9clistp", v2345);
var v2663 = new sc_Pair("\u1e9cx", null);
var v2346 = new sc_Pair("\u1e9clistp", v2663);
var v2035 = new sc_Pair(v2346, null);
var v1669 = new sc_Pair(v2034, v2035);
var v1062 = new sc_Pair("\u1e9cequal", v1669);
var v2664 = new sc_Pair("\u1e9cy", null);
var v2347 = new sc_Pair("\u1e9cx", v2664);
var v2036 = new sc_Pair("\u1e9csamefringe", v2347);
var v3172 = new sc_Pair("\u1e9cx", null);
var v2937 = new sc_Pair("\u1e9cflatten", v3172);
var v3365 = new sc_Pair("\u1e9cy", null);
var v3173 = new sc_Pair("\u1e9cflatten", v3365);
var v2938 = new sc_Pair(v3173, null);
var v2665 = new sc_Pair(v2937, v2938);
var v2348 = new sc_Pair("\u1e9cequal", v2665);
var v2037 = new sc_Pair(v2348, null);
var v1670 = new sc_Pair(v2036, v2037);
var v1063 = new sc_Pair("\u1e9cequal", v1670);
var v3174 = new sc_Pair("\u1e9cy", null);
var v2939 = new sc_Pair("\u1e9cx", v3174);
var v2666 = new sc_Pair("\u1e9cgreatest-factor", v2939);
var v2940 = new sc_Pair("\u1e9czero", null);
var v2667 = new sc_Pair(v2940, null);
var v2349 = new sc_Pair(v2666, v2667);
var v2038 = new sc_Pair("\u1e9cequal", v2349);
var v3492 = new sc_Pair("\u1e9cy", null);
var v3366 = new sc_Pair("\u1e9czerop", v3492);
var v3625 = new sc_Pair(1, null);
var v3567 = new sc_Pair("\u1e9cy", v3625);
var v3493 = new sc_Pair("\u1e9cequal", v3567);
var v3367 = new sc_Pair(v3493, null);
var v3175 = new sc_Pair(v3366, v3367);
var v2941 = new sc_Pair("\u1e9cor", v3175);
var v3568 = new sc_Pair("\u1e9czero", null);
var v3494 = new sc_Pair(v3568, null);
var v3368 = new sc_Pair("\u1e9cx", v3494);
var v3176 = new sc_Pair("\u1e9cequal", v3368);
var v2942 = new sc_Pair(v3176, null);
var v2668 = new sc_Pair(v2941, v2942);
var v2350 = new sc_Pair("\u1e9cand", v2668);
var v2039 = new sc_Pair(v2350, null);
var v1671 = new sc_Pair(v2038, v2039);
var v1064 = new sc_Pair("\u1e9cequal", v1671);
var v3177 = new sc_Pair("\u1e9cy", null);
var v2943 = new sc_Pair("\u1e9cx", v3177);
var v2669 = new sc_Pair("\u1e9cgreatest-factor", v2943);
var v2670 = new sc_Pair(1, null);
var v2351 = new sc_Pair(v2669, v2670);
var v2040 = new sc_Pair("\u1e9cequal", v2351);
var v2944 = new sc_Pair(1, null);
var v2671 = new sc_Pair("\u1e9cx", v2944);
var v2352 = new sc_Pair("\u1e9cequal", v2671);
var v2041 = new sc_Pair(v2352, null);
var v1672 = new sc_Pair(v2040, v2041);
var v1065 = new sc_Pair("\u1e9cequal", v1672);
var v3178 = new sc_Pair("\u1e9cy", null);
var v2945 = new sc_Pair("\u1e9cx", v3178);
var v2672 = new sc_Pair("\u1e9cgreatest-factor", v2945);
var v2353 = new sc_Pair(v2672, null);
var v2042 = new sc_Pair("\u1e9cnumberp", v2353);
var v3626 = new sc_Pair("\u1e9cy", null);
var v3569 = new sc_Pair("\u1e9czerop", v3626);
var v3679 = new sc_Pair(1, null);
var v3660 = new sc_Pair("\u1e9cy", v3679);
var v3627 = new sc_Pair("\u1e9cequal", v3660);
var v3570 = new sc_Pair(v3627, null);
var v3495 = new sc_Pair(v3569, v3570);
var v3369 = new sc_Pair("\u1e9cor", v3495);
var v3661 = new sc_Pair("\u1e9cx", null);
var v3628 = new sc_Pair("\u1e9cnumberp", v3661);
var v3571 = new sc_Pair(v3628, null);
var v3496 = new sc_Pair("\u1e9cnot", v3571);
var v3370 = new sc_Pair(v3496, null);
var v3179 = new sc_Pair(v3369, v3370);
var v2946 = new sc_Pair("\u1e9cand", v3179);
var v2673 = new sc_Pair(v2946, null);
var v2354 = new sc_Pair("\u1e9cnot", v2673);
var v2043 = new sc_Pair(v2354, null);
var v1673 = new sc_Pair(v2042, v2043);
var v1066 = new sc_Pair("\u1e9cequal", v1673);
var v3180 = new sc_Pair("\u1e9cy", null);
var v2947 = new sc_Pair("\u1e9cx", v3180);
var v2674 = new sc_Pair("\u1e9cappend", v2947);
var v2355 = new sc_Pair(v2674, null);
var v2044 = new sc_Pair("\u1e9ctimes-list", v2355);
var v3181 = new sc_Pair("\u1e9cx", null);
var v2948 = new sc_Pair("\u1e9ctimes-list", v3181);
var v3371 = new sc_Pair("\u1e9cy", null);
var v3182 = new sc_Pair("\u1e9ctimes-list", v3371);
var v2949 = new sc_Pair(v3182, null);
var v2675 = new sc_Pair(v2948, v2949);
var v2356 = new sc_Pair("\u1e9ctimes", v2675);
var v2045 = new sc_Pair(v2356, null);
var v1674 = new sc_Pair(v2044, v2045);
var v1067 = new sc_Pair("\u1e9cequal", v1674);
var v3183 = new sc_Pair("\u1e9cy", null);
var v2950 = new sc_Pair("\u1e9cx", v3183);
var v2676 = new sc_Pair("\u1e9cappend", v2950);
var v2357 = new sc_Pair(v2676, null);
var v2046 = new sc_Pair("\u1e9cprime-list", v2357);
var v3184 = new sc_Pair("\u1e9cx", null);
var v2951 = new sc_Pair("\u1e9cprime-list", v3184);
var v3372 = new sc_Pair("\u1e9cy", null);
var v3185 = new sc_Pair("\u1e9cprime-list", v3372);
var v2952 = new sc_Pair(v3185, null);
var v2677 = new sc_Pair(v2951, v2952);
var v2358 = new sc_Pair("\u1e9cand", v2677);
var v2047 = new sc_Pair(v2358, null);
var v1675 = new sc_Pair(v2046, v2047);
var v1068 = new sc_Pair("\u1e9cequal", v1675);
var v3373 = new sc_Pair("\u1e9cz", null);
var v3186 = new sc_Pair("\u1e9cw", v3373);
var v2953 = new sc_Pair("\u1e9ctimes", v3186);
var v2678 = new sc_Pair(v2953, null);
var v2359 = new sc_Pair("\u1e9cz", v2678);
var v2048 = new sc_Pair("\u1e9cequal", v2359);
var v3187 = new sc_Pair("\u1e9cz", null);
var v2954 = new sc_Pair("\u1e9cnumberp", v3187);
var v3662 = new sc_Pair("\u1e9czero", null);
var v3629 = new sc_Pair(v3662, null);
var v3572 = new sc_Pair("\u1e9cz", v3629);
var v3497 = new sc_Pair("\u1e9cequal", v3572);
var v3663 = new sc_Pair(1, null);
var v3630 = new sc_Pair("\u1e9cw", v3663);
var v3573 = new sc_Pair("\u1e9cequal", v3630);
var v3498 = new sc_Pair(v3573, null);
var v3374 = new sc_Pair(v3497, v3498);
var v3188 = new sc_Pair("\u1e9cor", v3374);
var v2955 = new sc_Pair(v3188, null);
var v2679 = new sc_Pair(v2954, v2955);
var v2360 = new sc_Pair("\u1e9cand", v2679);
var v2049 = new sc_Pair(v2360, null);
var v1676 = new sc_Pair(v2048, v2049);
var v1069 = new sc_Pair("\u1e9cequal", v1676);
var v2680 = new sc_Pair("\u1e9cy", null);
var v2361 = new sc_Pair("\u1e9cx", v2680);
var v2050 = new sc_Pair("\u1e9cgreatereqp", v2361);
var v3375 = new sc_Pair("\u1e9cy", null);
var v3189 = new sc_Pair("\u1e9cx", v3375);
var v2956 = new sc_Pair("\u1e9clessp", v3189);
var v2681 = new sc_Pair(v2956, null);
var v2362 = new sc_Pair("\u1e9cnot", v2681);
var v2051 = new sc_Pair(v2362, null);
var v1677 = new sc_Pair(v2050, v2051);
var v1070 = new sc_Pair("\u1e9cequal", v1677);
var v3376 = new sc_Pair("\u1e9cy", null);
var v3190 = new sc_Pair("\u1e9cx", v3376);
var v2957 = new sc_Pair("\u1e9ctimes", v3190);
var v2682 = new sc_Pair(v2957, null);
var v2363 = new sc_Pair("\u1e9cx", v2682);
var v2052 = new sc_Pair("\u1e9cequal", v2363);
var v3499 = new sc_Pair("\u1e9czero", null);
var v3377 = new sc_Pair(v3499, null);
var v3191 = new sc_Pair("\u1e9cx", v3377);
var v2958 = new sc_Pair("\u1e9cequal", v3191);
var v3574 = new sc_Pair("\u1e9cx", null);
var v3500 = new sc_Pair("\u1e9cnumberp", v3574);
var v3664 = new sc_Pair(1, null);
var v3631 = new sc_Pair("\u1e9cy", v3664);
var v3575 = new sc_Pair("\u1e9cequal", v3631);
var v3501 = new sc_Pair(v3575, null);
var v3378 = new sc_Pair(v3500, v3501);
var v3192 = new sc_Pair("\u1e9cand", v3378);
var v2959 = new sc_Pair(v3192, null);
var v2683 = new sc_Pair(v2958, v2959);
var v2364 = new sc_Pair("\u1e9cor", v2683);
var v2053 = new sc_Pair(v2364, null);
var v1678 = new sc_Pair(v2052, v2053);
var v1071 = new sc_Pair("\u1e9cequal", v1678);
var v3193 = new sc_Pair("\u1e9cx", null);
var v2960 = new sc_Pair("\u1e9cy", v3193);
var v2684 = new sc_Pair("\u1e9ctimes", v2960);
var v2685 = new sc_Pair("\u1e9cy", null);
var v2365 = new sc_Pair(v2684, v2685);
var v2054 = new sc_Pair("\u1e9cremainder", v2365);
var v2366 = new sc_Pair("\u1e9czero", null);
var v2055 = new sc_Pair(v2366, null);
var v1679 = new sc_Pair(v2054, v2055);
var v1072 = new sc_Pair("\u1e9cequal", v1679);
var v3194 = new sc_Pair("\u1e9cb", null);
var v2961 = new sc_Pair("\u1e9ca", v3194);
var v2686 = new sc_Pair("\u1e9ctimes", v2961);
var v2687 = new sc_Pair(1, null);
var v2367 = new sc_Pair(v2686, v2687);
var v2056 = new sc_Pair("\u1e9cequal", v2367);
var v3576 = new sc_Pair("\u1e9czero", null);
var v3502 = new sc_Pair(v3576, null);
var v3379 = new sc_Pair("\u1e9ca", v3502);
var v3195 = new sc_Pair("\u1e9cequal", v3379);
var v2962 = new sc_Pair(v3195, null);
var v2688 = new sc_Pair("\u1e9cnot", v2962);
var v3577 = new sc_Pair("\u1e9czero", null);
var v3503 = new sc_Pair(v3577, null);
var v3380 = new sc_Pair("\u1e9cb", v3503);
var v3196 = new sc_Pair("\u1e9cequal", v3380);
var v2963 = new sc_Pair(v3196, null);
var v2689 = new sc_Pair("\u1e9cnot", v2963);
var v2964 = new sc_Pair("\u1e9ca", null);
var v2690 = new sc_Pair("\u1e9cnumberp", v2964);
var v2965 = new sc_Pair("\u1e9cb", null);
var v2691 = new sc_Pair("\u1e9cnumberp", v2965);
var v3381 = new sc_Pair("\u1e9ca", null);
var v3197 = new sc_Pair("\u1e9csub1", v3381);
var v3382 = new sc_Pair("\u1e9czero", null);
var v3198 = new sc_Pair(v3382, null);
var v2966 = new sc_Pair(v3197, v3198);
var v2692 = new sc_Pair("\u1e9cequal", v2966);
var v3383 = new sc_Pair("\u1e9cb", null);
var v3199 = new sc_Pair("\u1e9csub1", v3383);
var v3384 = new sc_Pair("\u1e9czero", null);
var v3200 = new sc_Pair(v3384, null);
var v2967 = new sc_Pair(v3199, v3200);
var v2693 = new sc_Pair("\u1e9cequal", v2967);
var v2368 = sc_list("\u1e9cand", v2688, v2689, v2690, v2691, v2692, v2693);
var v2057 = new sc_Pair(v2368, null);
var v1680 = new sc_Pair(v2056, v2057);
var v1073 = new sc_Pair("\u1e9cequal", v1680);
var v3504 = new sc_Pair("\u1e9cl", null);
var v3385 = new sc_Pair("\u1e9cx", v3504);
var v3201 = new sc_Pair("\u1e9cdelete", v3385);
var v2968 = new sc_Pair(v3201, null);
var v2694 = new sc_Pair("\u1e9clength", v2968);
var v3202 = new sc_Pair("\u1e9cl", null);
var v2969 = new sc_Pair("\u1e9clength", v3202);
var v2695 = new sc_Pair(v2969, null);
var v2369 = new sc_Pair(v2694, v2695);
var v2058 = new sc_Pair("\u1e9clessp", v2369);
var v2970 = new sc_Pair("\u1e9cl", null);
var v2696 = new sc_Pair("\u1e9cx", v2970);
var v2370 = new sc_Pair("\u1e9cmember", v2696);
var v2059 = new sc_Pair(v2370, null);
var v1681 = new sc_Pair(v2058, v2059);
var v1074 = new sc_Pair("\u1e9cequal", v1681);
var v3203 = new sc_Pair("\u1e9cl", null);
var v2971 = new sc_Pair("\u1e9cx", v3203);
var v2697 = new sc_Pair("\u1e9cdelete", v2971);
var v2371 = new sc_Pair(v2697, null);
var v2060 = new sc_Pair("\u1e9csort2", v2371);
var v3386 = new sc_Pair("\u1e9cl", null);
var v3204 = new sc_Pair("\u1e9csort2", v3386);
var v2972 = new sc_Pair(v3204, null);
var v2698 = new sc_Pair("\u1e9cx", v2972);
var v2372 = new sc_Pair("\u1e9cdelete", v2698);
var v2061 = new sc_Pair(v2372, null);
var v1682 = new sc_Pair(v2060, v2061);
var v1075 = new sc_Pair("\u1e9cequal", v1682);
var v2373 = new sc_Pair("\u1e9cx", null);
var v2062 = new sc_Pair("\u1e9cdsort", v2373);
var v2699 = new sc_Pair("\u1e9cx", null);
var v2374 = new sc_Pair("\u1e9csort2", v2699);
var v2063 = new sc_Pair(v2374, null);
var v1683 = new sc_Pair(v2062, v2063);
var v1076 = new sc_Pair("\u1e9cequal", v1683);
var v3707 = new sc_Pair("\u1e9cx7", null);
var v3706 = new sc_Pair("\u1e9cx6", v3707);
var v3705 = new sc_Pair("\u1e9ccons", v3706);
var v3704 = new sc_Pair(v3705, null);
var v3703 = new sc_Pair("\u1e9cx5", v3704);
var v3702 = new sc_Pair("\u1e9ccons", v3703);
var v3699 = new sc_Pair(v3702, null);
var v3694 = new sc_Pair("\u1e9cx4", v3699);
var v3689 = new sc_Pair("\u1e9ccons", v3694);
var v3680 = new sc_Pair(v3689, null);
var v3665 = new sc_Pair("\u1e9cx3", v3680);
var v3632 = new sc_Pair("\u1e9ccons", v3665);
var v3578 = new sc_Pair(v3632, null);
var v3505 = new sc_Pair("\u1e9cx2", v3578);
var v3387 = new sc_Pair("\u1e9ccons", v3505);
var v3205 = new sc_Pair(v3387, null);
var v2973 = new sc_Pair("\u1e9cx1", v3205);
var v2700 = new sc_Pair("\u1e9ccons", v2973);
var v2375 = new sc_Pair(v2700, null);
var v2064 = new sc_Pair("\u1e9clength", v2375);
var v3388 = new sc_Pair("\u1e9cx7", null);
var v3206 = new sc_Pair("\u1e9clength", v3388);
var v2974 = new sc_Pair(v3206, null);
var v2701 = new sc_Pair(6, v2974);
var v2376 = new sc_Pair("\u1e9cplus", v2701);
var v2065 = new sc_Pair(v2376, null);
var v1684 = new sc_Pair(v2064, v2065);
var v1077 = new sc_Pair("\u1e9cequal", v1684);
var v3389 = new sc_Pair("\u1e9cx", null);
var v3207 = new sc_Pair("\u1e9cadd1", v3389);
var v2975 = new sc_Pair(v3207, null);
var v2702 = new sc_Pair("\u1e9cadd1", v2975);
var v2703 = new sc_Pair(2, null);
var v2377 = new sc_Pair(v2702, v2703);
var v2066 = new sc_Pair("\u1e9cdifference", v2377);
var v2704 = new sc_Pair("\u1e9cx", null);
var v2378 = new sc_Pair("\u1e9cfix", v2704);
var v2067 = new sc_Pair(v2378, null);
var v1685 = new sc_Pair(v2066, v2067);
var v1078 = new sc_Pair("\u1e9cequal", v1685);
var v3579 = new sc_Pair("\u1e9cy", null);
var v3506 = new sc_Pair("\u1e9cx", v3579);
var v3390 = new sc_Pair("\u1e9cplus", v3506);
var v3208 = new sc_Pair(v3390, null);
var v2976 = new sc_Pair("\u1e9cx", v3208);
var v2705 = new sc_Pair("\u1e9cplus", v2976);
var v2706 = new sc_Pair(2, null);
var v2379 = new sc_Pair(v2705, v2706);
var v2068 = new sc_Pair("\u1e9cquotient", v2379);
var v3507 = new sc_Pair(2, null);
var v3391 = new sc_Pair("\u1e9cy", v3507);
var v3209 = new sc_Pair("\u1e9cquotient", v3391);
var v2977 = new sc_Pair(v3209, null);
var v2707 = new sc_Pair("\u1e9cx", v2977);
var v2380 = new sc_Pair("\u1e9cplus", v2707);
var v2069 = new sc_Pair(v2380, null);
var v1686 = new sc_Pair(v2068, v2069);
var v1079 = new sc_Pair("\u1e9cequal", v1686);
var v2708 = new sc_Pair("\u1e9czero", null);
var v2709 = new sc_Pair("\u1e9ci", null);
var v2381 = new sc_Pair(v2708, v2709);
var v2070 = new sc_Pair("\u1e9csigma", v2381);
var v3580 = new sc_Pair("\u1e9ci", null);
var v3508 = new sc_Pair("\u1e9cadd1", v3580);
var v3392 = new sc_Pair(v3508, null);
var v3210 = new sc_Pair("\u1e9ci", v3392);
var v2978 = new sc_Pair("\u1e9ctimes", v3210);
var v2979 = new sc_Pair(2, null);
var v2710 = new sc_Pair(v2978, v2979);
var v2382 = new sc_Pair("\u1e9cquotient", v2710);
var v2071 = new sc_Pair(v2382, null);
var v1687 = new sc_Pair(v2070, v2071);
var v1080 = new sc_Pair("\u1e9cequal", v1687);
var v3211 = new sc_Pair("\u1e9cy", null);
var v2980 = new sc_Pair("\u1e9cadd1", v3211);
var v2711 = new sc_Pair(v2980, null);
var v2383 = new sc_Pair("\u1e9cx", v2711);
var v2072 = new sc_Pair("\u1e9cplus", v2383);
var v3212 = new sc_Pair("\u1e9cy", null);
var v2981 = new sc_Pair("\u1e9cnumberp", v3212);
var v3633 = new sc_Pair("\u1e9cy", null);
var v3581 = new sc_Pair("\u1e9cx", v3633);
var v3509 = new sc_Pair("\u1e9cplus", v3581);
var v3393 = new sc_Pair(v3509, null);
var v3213 = new sc_Pair("\u1e9cadd1", v3393);
var v3510 = new sc_Pair("\u1e9cx", null);
var v3394 = new sc_Pair("\u1e9cadd1", v3510);
var v3214 = new sc_Pair(v3394, null);
var v2982 = new sc_Pair(v3213, v3214);
var v2712 = new sc_Pair(v2981, v2982);
var v2384 = new sc_Pair("\u1e9cif", v2712);
var v2073 = new sc_Pair(v2384, null);
var v1688 = new sc_Pair(v2072, v2073);
var v1081 = new sc_Pair("\u1e9cequal", v1688);
var v3215 = new sc_Pair("\u1e9cy", null);
var v2983 = new sc_Pair("\u1e9cx", v3215);
var v2713 = new sc_Pair("\u1e9cdifference", v2983);
var v3395 = new sc_Pair("\u1e9cy", null);
var v3216 = new sc_Pair("\u1e9cz", v3395);
var v2984 = new sc_Pair("\u1e9cdifference", v3216);
var v2714 = new sc_Pair(v2984, null);
var v2385 = new sc_Pair(v2713, v2714);
var v2074 = new sc_Pair("\u1e9cequal", v2385);
var v3396 = new sc_Pair("\u1e9cy", null);
var v3217 = new sc_Pair("\u1e9cx", v3396);
var v2985 = new sc_Pair("\u1e9clessp", v3217);
var v3634 = new sc_Pair("\u1e9cz", null);
var v3582 = new sc_Pair("\u1e9cy", v3634);
var v3511 = new sc_Pair("\u1e9clessp", v3582);
var v3397 = new sc_Pair(v3511, null);
var v3218 = new sc_Pair("\u1e9cnot", v3397);
var v3666 = new sc_Pair("\u1e9cy", null);
var v3635 = new sc_Pair("\u1e9cz", v3666);
var v3583 = new sc_Pair("\u1e9clessp", v3635);
var v3695 = new sc_Pair("\u1e9cx", null);
var v3690 = new sc_Pair("\u1e9cy", v3695);
var v3681 = new sc_Pair("\u1e9clessp", v3690);
var v3667 = new sc_Pair(v3681, null);
var v3636 = new sc_Pair("\u1e9cnot", v3667);
var v3696 = new sc_Pair("\u1e9cx", null);
var v3691 = new sc_Pair("\u1e9cfix", v3696);
var v3700 = new sc_Pair("\u1e9cz", null);
var v3697 = new sc_Pair("\u1e9cfix", v3700);
var v3692 = new sc_Pair(v3697, null);
var v3682 = new sc_Pair(v3691, v3692);
var v3668 = new sc_Pair("\u1e9cequal", v3682);
var v3637 = new sc_Pair(v3668, null);
var v3584 = new sc_Pair(v3636, v3637);
var v3512 = new sc_Pair(v3583, v3584);
var v3398 = new sc_Pair("\u1e9cif", v3512);
var v3219 = new sc_Pair(v3398, null);
var v2986 = new sc_Pair(v3218, v3219);
var v2715 = new sc_Pair(v2985, v2986);
var v2386 = new sc_Pair("\u1e9cif", v2715);
var v2075 = new sc_Pair(v2386, null);
var v1689 = new sc_Pair(v2074, v2075);
var v1082 = new sc_Pair("\u1e9cequal", v1689);
var v3513 = new sc_Pair("\u1e9cy", null);
var v3399 = new sc_Pair("\u1e9cx", v3513);
var v3220 = new sc_Pair("\u1e9cdelete", v3399);
var v2987 = new sc_Pair(v3220, null);
var v2716 = new sc_Pair("\u1e9cplus-tree", v2987);
var v2717 = new sc_Pair("\u1e9ca", null);
var v2387 = new sc_Pair(v2716, v2717);
var v2076 = new sc_Pair("\u1e9cmeaning", v2387);
var v3400 = new sc_Pair("\u1e9cy", null);
var v3221 = new sc_Pair("\u1e9cx", v3400);
var v2988 = new sc_Pair("\u1e9cmember", v3221);
var v3669 = new sc_Pair("\u1e9cy", null);
var v3638 = new sc_Pair("\u1e9cplus-tree", v3669);
var v3639 = new sc_Pair("\u1e9ca", null);
var v3585 = new sc_Pair(v3638, v3639);
var v3514 = new sc_Pair("\u1e9cmeaning", v3585);
var v3670 = new sc_Pair("\u1e9ca", null);
var v3640 = new sc_Pair("\u1e9cx", v3670);
var v3586 = new sc_Pair("\u1e9cmeaning", v3640);
var v3515 = new sc_Pair(v3586, null);
var v3401 = new sc_Pair(v3514, v3515);
var v3222 = new sc_Pair("\u1e9cdifference", v3401);
var v3641 = new sc_Pair("\u1e9cy", null);
var v3587 = new sc_Pair("\u1e9cplus-tree", v3641);
var v3588 = new sc_Pair("\u1e9ca", null);
var v3516 = new sc_Pair(v3587, v3588);
var v3402 = new sc_Pair("\u1e9cmeaning", v3516);
var v3223 = new sc_Pair(v3402, null);
var v2989 = new sc_Pair(v3222, v3223);
var v2718 = new sc_Pair(v2988, v2989);
var v2388 = new sc_Pair("\u1e9cif", v2718);
var v2077 = new sc_Pair(v2388, null);
var v1690 = new sc_Pair(v2076, v2077);
var v1083 = new sc_Pair("\u1e9cequal", v1690);
var v3224 = new sc_Pair("\u1e9cy", null);
var v2990 = new sc_Pair("\u1e9cadd1", v3224);
var v2719 = new sc_Pair(v2990, null);
var v2389 = new sc_Pair("\u1e9cx", v2719);
var v2078 = new sc_Pair("\u1e9ctimes", v2389);
var v3225 = new sc_Pair("\u1e9cy", null);
var v2991 = new sc_Pair("\u1e9cnumberp", v3225);
var v3671 = new sc_Pair("\u1e9cy", null);
var v3642 = new sc_Pair("\u1e9cx", v3671);
var v3589 = new sc_Pair("\u1e9ctimes", v3642);
var v3517 = new sc_Pair(v3589, null);
var v3403 = new sc_Pair("\u1e9cx", v3517);
var v3226 = new sc_Pair("\u1e9cplus", v3403);
var v3518 = new sc_Pair("\u1e9cx", null);
var v3404 = new sc_Pair("\u1e9cfix", v3518);
var v3227 = new sc_Pair(v3404, null);
var v2992 = new sc_Pair(v3226, v3227);
var v2720 = new sc_Pair(v2991, v2992);
var v2390 = new sc_Pair("\u1e9cif", v2720);
var v2079 = new sc_Pair(v2390, null);
var v1691 = new sc_Pair(v2078, v2079);
var v1084 = new sc_Pair("\u1e9cequal", v1691);
var v2721 = new sc_Pair("\u1e9cnil", null);
var v2722 = new sc_Pair("\u1e9ci", null);
var v2391 = new sc_Pair(v2721, v2722);
var v2080 = new sc_Pair("\u1e9cnth", v2391);
var v3228 = new sc_Pair("\u1e9ci", null);
var v2993 = new sc_Pair("\u1e9czerop", v3228);
var v3229 = new sc_Pair("\u1e9cnil", null);
var v3405 = new sc_Pair("\u1e9czero", null);
var v3230 = new sc_Pair(v3405, null);
var v2994 = new sc_Pair(v3229, v3230);
var v2723 = new sc_Pair(v2993, v2994);
var v2392 = new sc_Pair("\u1e9cif", v2723);
var v2081 = new sc_Pair(v2392, null);
var v1692 = new sc_Pair(v2080, v2081);
var v1085 = new sc_Pair("\u1e9cequal", v1692);
var v3231 = new sc_Pair("\u1e9cb", null);
var v2995 = new sc_Pair("\u1e9ca", v3231);
var v2724 = new sc_Pair("\u1e9cappend", v2995);
var v2393 = new sc_Pair(v2724, null);
var v2082 = new sc_Pair("\u1e9clast", v2393);
var v3232 = new sc_Pair("\u1e9cb", null);
var v2996 = new sc_Pair("\u1e9clistp", v3232);
var v3406 = new sc_Pair("\u1e9cb", null);
var v3233 = new sc_Pair("\u1e9clast", v3406);
var v3643 = new sc_Pair("\u1e9ca", null);
var v3590 = new sc_Pair("\u1e9clistp", v3643);
var v3701 = new sc_Pair("\u1e9ca", null);
var v3698 = new sc_Pair("\u1e9clast", v3701);
var v3693 = new sc_Pair(v3698, null);
var v3683 = new sc_Pair("\u1e9ccar", v3693);
var v3684 = new sc_Pair("\u1e9cb", null);
var v3672 = new sc_Pair(v3683, v3684);
var v3644 = new sc_Pair("\u1e9ccons", v3672);
var v3645 = new sc_Pair("\u1e9cb", null);
var v3591 = new sc_Pair(v3644, v3645);
var v3519 = new sc_Pair(v3590, v3591);
var v3407 = new sc_Pair("\u1e9cif", v3519);
var v3234 = new sc_Pair(v3407, null);
var v2997 = new sc_Pair(v3233, v3234);
var v2725 = new sc_Pair(v2996, v2997);
var v2394 = new sc_Pair("\u1e9cif", v2725);
var v2083 = new sc_Pair(v2394, null);
var v1693 = new sc_Pair(v2082, v2083);
var v1086 = new sc_Pair("\u1e9cequal", v1693);
var v3235 = new sc_Pair("\u1e9cy", null);
var v2998 = new sc_Pair("\u1e9cx", v3235);
var v2726 = new sc_Pair("\u1e9clessp", v2998);
var v2727 = new sc_Pair("\u1e9cz", null);
var v2395 = new sc_Pair(v2726, v2727);
var v2084 = new sc_Pair("\u1e9cequal", v2395);
var v3408 = new sc_Pair("\u1e9cy", null);
var v3236 = new sc_Pair("\u1e9cx", v3408);
var v2999 = new sc_Pair("\u1e9clessp", v3236);
var v3520 = new sc_Pair("\u1e9ct", null);
var v3521 = new sc_Pair("\u1e9cz", null);
var v3409 = new sc_Pair(v3520, v3521);
var v3237 = new sc_Pair("\u1e9cequal", v3409);
var v3592 = new sc_Pair("\u1e9cf", null);
var v3593 = new sc_Pair("\u1e9cz", null);
var v3522 = new sc_Pair(v3592, v3593);
var v3410 = new sc_Pair("\u1e9cequal", v3522);
var v3238 = new sc_Pair(v3410, null);
var v3000 = new sc_Pair(v3237, v3238);
var v2728 = new sc_Pair(v2999, v3000);
var v2396 = new sc_Pair("\u1e9cif", v2728);
var v2085 = new sc_Pair(v2396, null);
var v1694 = new sc_Pair(v2084, v2085);
var v1087 = new sc_Pair("\u1e9cequal", v1694);
var v3411 = new sc_Pair("\u1e9cb", null);
var v3239 = new sc_Pair("\u1e9ca", v3411);
var v3001 = new sc_Pair("\u1e9cappend", v3239);
var v2729 = new sc_Pair(v3001, null);
var v2397 = new sc_Pair("\u1e9cx", v2729);
var v2086 = new sc_Pair("\u1e9cassignment", v2397);
var v3412 = new sc_Pair("\u1e9ca", null);
var v3240 = new sc_Pair("\u1e9cx", v3412);
var v3002 = new sc_Pair("\u1e9cassignedp", v3240);
var v3523 = new sc_Pair("\u1e9ca", null);
var v3413 = new sc_Pair("\u1e9cx", v3523);
var v3241 = new sc_Pair("\u1e9cassignment", v3413);
var v3594 = new sc_Pair("\u1e9cb", null);
var v3524 = new sc_Pair("\u1e9cx", v3594);
var v3414 = new sc_Pair("\u1e9cassignment", v3524);
var v3242 = new sc_Pair(v3414, null);
var v3003 = new sc_Pair(v3241, v3242);
var v2730 = new sc_Pair(v3002, v3003);
var v2398 = new sc_Pair("\u1e9cif", v2730);
var v2087 = new sc_Pair(v2398, null);
var v1695 = new sc_Pair(v2086, v2087);
var v1088 = new sc_Pair("\u1e9cequal", v1695);
var v3004 = new sc_Pair("\u1e9cx", null);
var v2731 = new sc_Pair("\u1e9cgopher", v3004);
var v2399 = new sc_Pair(v2731, null);
var v2088 = new sc_Pair("\u1e9ccar", v2399);
var v3243 = new sc_Pair("\u1e9cx", null);
var v3005 = new sc_Pair("\u1e9clistp", v3243);
var v3595 = new sc_Pair("\u1e9cx", null);
var v3525 = new sc_Pair("\u1e9cflatten", v3595);
var v3415 = new sc_Pair(v3525, null);
var v3244 = new sc_Pair("\u1e9ccar", v3415);
var v3416 = new sc_Pair("\u1e9czero", null);
var v3245 = new sc_Pair(v3416, null);
var v3006 = new sc_Pair(v3244, v3245);
var v2732 = new sc_Pair(v3005, v3006);
var v2400 = new sc_Pair("\u1e9cif", v2732);
var v2089 = new sc_Pair(v2400, null);
var v1696 = new sc_Pair(v2088, v2089);
var v1089 = new sc_Pair("\u1e9cequal", v1696);
var v3417 = new sc_Pair("\u1e9cx", null);
var v3246 = new sc_Pair("\u1e9cgopher", v3417);
var v3007 = new sc_Pair(v3246, null);
var v2733 = new sc_Pair("\u1e9ccdr", v3007);
var v2401 = new sc_Pair(v2733, null);
var v2090 = new sc_Pair("\u1e9cflatten", v2401);
var v3247 = new sc_Pair("\u1e9cx", null);
var v3008 = new sc_Pair("\u1e9clistp", v3247);
var v3596 = new sc_Pair("\u1e9cx", null);
var v3526 = new sc_Pair("\u1e9cflatten", v3596);
var v3418 = new sc_Pair(v3526, null);
var v3248 = new sc_Pair("\u1e9ccdr", v3418);
var v3597 = new sc_Pair("\u1e9czero", null);
var v3646 = new sc_Pair("\u1e9cnil", null);
var v3598 = new sc_Pair(v3646, null);
var v3527 = new sc_Pair(v3597, v3598);
var v3419 = new sc_Pair("\u1e9ccons", v3527);
var v3249 = new sc_Pair(v3419, null);
var v3009 = new sc_Pair(v3248, v3249);
var v2734 = new sc_Pair(v3008, v3009);
var v2402 = new sc_Pair("\u1e9cif", v2734);
var v2091 = new sc_Pair(v2402, null);
var v1697 = new sc_Pair(v2090, v2091);
var v1090 = new sc_Pair("\u1e9cequal", v1697);
var v3250 = new sc_Pair("\u1e9cx", null);
var v3010 = new sc_Pair("\u1e9cy", v3250);
var v2735 = new sc_Pair("\u1e9ctimes", v3010);
var v2736 = new sc_Pair("\u1e9cy", null);
var v2403 = new sc_Pair(v2735, v2736);
var v2092 = new sc_Pair("\u1e9cquotient", v2403);
var v3251 = new sc_Pair("\u1e9cy", null);
var v3011 = new sc_Pair("\u1e9czerop", v3251);
var v3252 = new sc_Pair("\u1e9czero", null);
var v3528 = new sc_Pair("\u1e9cx", null);
var v3420 = new sc_Pair("\u1e9cfix", v3528);
var v3253 = new sc_Pair(v3420, null);
var v3012 = new sc_Pair(v3252, v3253);
var v2737 = new sc_Pair(v3011, v3012);
var v2404 = new sc_Pair("\u1e9cif", v2737);
var v2093 = new sc_Pair(v2404, null);
var v1698 = new sc_Pair(v2092, v2093);
var v1091 = new sc_Pair("\u1e9cequal", v1698);
var v3529 = new sc_Pair("\u1e9cmem", null);
var v3421 = new sc_Pair("\u1e9cval", v3529);
var v3254 = new sc_Pair("\u1e9ci", v3421);
var v3013 = new sc_Pair("\u1e9cset", v3254);
var v2738 = new sc_Pair(v3013, null);
var v2405 = new sc_Pair("\u1e9cj", v2738);
var v2094 = new sc_Pair("\u1e9cget", v2405);
var v3422 = new sc_Pair("\u1e9ci", null);
var v3255 = new sc_Pair("\u1e9cj", v3422);
var v3014 = new sc_Pair("\u1e9ceqp", v3255);
var v3599 = new sc_Pair("\u1e9cmem", null);
var v3530 = new sc_Pair("\u1e9cj", v3599);
var v3423 = new sc_Pair("\u1e9cget", v3530);
var v3256 = new sc_Pair(v3423, null);
var v3015 = new sc_Pair("\u1e9cval", v3256);
var v2739 = new sc_Pair(v3014, v3015);
var v2406 = new sc_Pair("\u1e9cif", v2739);
var v2095 = new sc_Pair(v2406, null);
var v1699 = new sc_Pair(v2094, v2095);
var v1092 = new sc_Pair("\u1e9cequal", v1699);
sc_const_3_nboyer = sc_list(v987, v988, v989, v990, v991, v992, v993, v994, v995, v996, v997, v998, v999, v1000, v1001, v1002, v1003, v1004, v1005, v1006, v1007, v1008, v1009, v1010, v1011, v1012, v1013, v1014, v1015, v1016, v1017, v1018, v1019, v1020, v1021, v1022, v1023, v1024, v1025, v1026, v1027, v1028, v1029, v1030, v1031, v1032, v1033, v1034, v1035, v1036, v1037, v1038, v1039, v1040, v1041, v1042, v1043, v1044, v1045, v1046, v1047, v1048, v1049, v1050, v1051, v1052, v1053, v1054, v1055, v1056, 
v1057, v1058, v1059, v1060, v1061, v1062, v1063, v1064, v1065, v1066, v1067, v1068, v1069, v1070, v1071, v1072, v1073, v1074, v1075, v1076, v1077, v1078, v1079, v1080, v1081, v1082, v1083, v1084, v1085, v1086, v1087, v1088, v1089, v1090, v1091, v1092);
var v3424 = new sc_Pair("\u1e9cb", null);
var v3257 = new sc_Pair("\u1e9ca", v3424);
var v3016 = new sc_Pair("\u1e9cplus", v3257);
var v3600 = new sc_Pair("\u1e9czero", null);
var v3531 = new sc_Pair(v3600, null);
var v3425 = new sc_Pair("\u1e9cc", v3531);
var v3258 = new sc_Pair("\u1e9cplus", v3425);
var v3017 = new sc_Pair(v3258, null);
var v2740 = new sc_Pair(v3016, v3017);
var v2407 = new sc_Pair("\u1e9cplus", v2740);
var v2096 = new sc_Pair(v2407, null);
var v1700 = new sc_Pair("\u1e9cf", v2096);
var v1093 = new sc_Pair("\u1e9cx", v1700);
var v3532 = new sc_Pair("\u1e9cb", null);
var v3426 = new sc_Pair("\u1e9ca", v3532);
var v3259 = new sc_Pair("\u1e9ctimes", v3426);
var v3601 = new sc_Pair("\u1e9cd", null);
var v3533 = new sc_Pair("\u1e9cc", v3601);
var v3427 = new sc_Pair("\u1e9cplus", v3533);
var v3260 = new sc_Pair(v3427, null);
var v3018 = new sc_Pair(v3259, v3260);
var v2741 = new sc_Pair("\u1e9ctimes", v3018);
var v2408 = new sc_Pair(v2741, null);
var v2097 = new sc_Pair("\u1e9cf", v2408);
var v1701 = new sc_Pair("\u1e9cy", v2097);
var v3673 = new sc_Pair("\u1e9cb", null);
var v3647 = new sc_Pair("\u1e9ca", v3673);
var v3602 = new sc_Pair("\u1e9cappend", v3647);
var v3648 = new sc_Pair("\u1e9cnil", null);
var v3603 = new sc_Pair(v3648, null);
var v3534 = new sc_Pair(v3602, v3603);
var v3428 = new sc_Pair("\u1e9cappend", v3534);
var v3261 = new sc_Pair(v3428, null);
var v3019 = new sc_Pair("\u1e9creverse", v3261);
var v2742 = new sc_Pair(v3019, null);
var v2409 = new sc_Pair("\u1e9cf", v2742);
var v2098 = new sc_Pair("\u1e9cz", v2409);
var v3535 = new sc_Pair("\u1e9cb", null);
var v3429 = new sc_Pair("\u1e9ca", v3535);
var v3262 = new sc_Pair("\u1e9cplus", v3429);
var v3604 = new sc_Pair("\u1e9cy", null);
var v3536 = new sc_Pair("\u1e9cx", v3604);
var v3430 = new sc_Pair("\u1e9cdifference", v3536);
var v3263 = new sc_Pair(v3430, null);
var v3020 = new sc_Pair(v3262, v3263);
var v2743 = new sc_Pair("\u1e9cequal", v3020);
var v2410 = new sc_Pair("\u1e9cu", v2743);
var v3605 = new sc_Pair("\u1e9cb", null);
var v3537 = new sc_Pair("\u1e9ca", v3605);
var v3431 = new sc_Pair("\u1e9cremainder", v3537);
var v3685 = new sc_Pair("\u1e9cb", null);
var v3674 = new sc_Pair("\u1e9clength", v3685);
var v3649 = new sc_Pair(v3674, null);
var v3606 = new sc_Pair("\u1e9ca", v3649);
var v3538 = new sc_Pair("\u1e9cmember", v3606);
var v3432 = new sc_Pair(v3538, null);
var v3264 = new sc_Pair(v3431, v3432);
var v3021 = new sc_Pair("\u1e9clessp", v3264);
var v2744 = new sc_Pair("\u1e9cw", v3021);
var v2411 = new sc_Pair(v2744, null);
var v2099 = new sc_Pair(v2410, v2411);
var v1702 = new sc_Pair(v2098, v2099);
var v1094 = new sc_Pair(v1701, v1702);
const_nboyer = new sc_Pair(v1093, v1094);
BgL_nboyerzd2benchmarkzd2 = v61;
BgL_setupzd2boyerzd2 = v62;
BgL_testzd2boyerzd2 = v63;
translate_term_nboyer = v64;
translate_args_nboyer = v65;
untranslate_term_nboyer = v66;
BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer = v67;
BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer = null;
translate_alist_nboyer = v68;
apply_subst_nboyer = v69;
apply_subst_lst_nboyer = v70;
tautologyp_nboyer = v71;
if_constructor_nboyer = "\u1e9c*";
rewrite_count_nboyer = 0;
rewrite_nboyer = v72;
rewrite_args_nboyer = v73;
unify_subst_nboyer = "\u1e9c*";
one_way_unify1_nboyer = v74;
false_term_nboyer = "\u1e9c*";
true_term_nboyer = "\u1e9c*";
trans_of_implies1_nboyer = v75;
is_term_equal_nboyer = v76;
is_term_member_nboyer = v77;
BgL_setupzd2boyerzd2 = v78;
BgL_testzd2boyerzd2 = v79;
var BgL_parsezd2ze3nbzd2treesze3;
var BgL_earleyzd2benchmarkzd2;
var BgL_parsezd2ze3parsedzf3zc2;
var test;
var BgL_parsezd2ze3treesz31;
var BgL_makezd2parserzd2;
var const_earley;
var v2100 = new sc_Pair("\u1e9ca", null);
var v2745 = new sc_Pair("\u1e9cs", null);
var v2412 = new sc_Pair("\u1e9cs", v2745);
var v2101 = new sc_Pair(v2412, null);
var v1703 = new sc_Pair(v2100, v2101);
var v1095 = new sc_Pair("\u1e9cs", v1703);
const_earley = new sc_Pair(v1095, null);
BgL_makezd2parserzd2 = v109;
BgL_parsezd2ze3parsedzf3zc2 = v110;
BgL_parsezd2ze3treesz31 = v111;
BgL_parsezd2ze3nbzd2treesze3 = v112;
test = v114;
BgL_earleyzd2benchmarkzd2 = v117;
SC_DEFAULT_OUT = new sc_GenericOutputPort(v118);
SC_ERROR_OUT = SC_DEFAULT_OUT;
var BgL_runzd2benchmarkzd2 = RunBenchmark;
var completed = 0;
var benchmarks = JAMScript.call(BenchmarkSuite.CountBenchmarks, BenchmarkSuite, []);
var success = true;
var latencyBenchmarks = ["Splay", "Mandreel"];
var v1096;
var v2102 = typeof skipBenchmarks;
var v1704 = v2102 === "undefined";
if(v1704) {
  v1096 = []
}else {
  v1096 = skipBenchmarks
}
var skipBenchmarks = v1096;

