// octane-eb.js
function v118(s$$41) {
  return;
}
function v117() {
  function v116(result$$4) {
    JAM.call(sc_display, null, [result$$4], JAM.policy.p1);
    JAM.call(sc_newline, null, [], JAM.policy.p1);
    return result$$4 == 132;
  }
  function v115() {
    return JAM.call(test, null, [k$$10], JAM.policy.p1);
  }
  var args$$6 = null;
  var sc_tmp$$1 = arguments.length - 1;
  var v121 = sc_tmp$$1 >= 0;
  for (;v121;) {
    args$$6 = JAM.call(sc_cons, null, [arguments[sc_tmp$$1], args$$6], JAM.policy.p1);
    sc_tmp$$1 = sc_tmp$$1 - 1;
    v121 = sc_tmp$$1 >= 0;
  }
  var k$$10;
  var v1102;
  if (args$$6 === null) {
    v1102 = 7;
  } else {
    v1102 = args$$6.car;
  }
  k$$10 = v1102;
  return JAM.call(BgL_runzd2benchmarkzd2, null, ["earley", 1, v115, v116], JAM.policy.p1);
}
function v114(k$$9) {
  function v113(l$$31) {
    var sc_x_134;
    var tail1134;
    var L1130;
    var falseHead1133;
    falseHead1133 = JAM.new(sc_Pair, [null, null], JAM.policy.p1);
    tail1134 = falseHead1133;
    L1130 = l$$31;
    var v123 = !(L1130 === null);
    for (;v123;) {
      var v122 = tail1134;
      sc_x_134 = L1130.car;
      var v3727 = JAM.new(sc_Pair, [JAM.call(sc_list, null, [sc_x_134, sc_x_134], JAM.policy.p1), null], JAM.policy.p1);
      v122.cdr = v3727;
      tail1134 = tail1134.cdr;
      L1130 = L1130.cdr;
      v123 = !(L1130 === null);
    }
    return falseHead1133.cdr;
  }
  var x$$79;
  var p$$46;
  p$$46 = JAM.call(BgL_makezd2parserzd2, null, [const_earley, v113], JAM.policy.p1);
  x$$79 = JAM.call(p$$46, null, [JAM.call(sc_vector2list, null, [JAM.call(sc_makeVector, null, [k$$9, "\u1e9ca"], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1);
  return JAM.call(sc_length, null, [JAM.call(BgL_parsezd2ze3treesz31, null, [x$$79, "\u1e9cs", 0, k$$9], JAM.policy.p1)], JAM.policy.p1);
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
  return JAM.call(BgL_sc_nbzd2derivzd2treesza2_133za2, null, [nt$$9, i$$71, j$$11, nts$$3, enders$$3, steps$$2, toks$$2, states$$3], JAM.policy.p1);
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
  return JAM.call(BgL_sc_derivzd2treesza2_132z70, null, [nt$$8, i$$70, j$$10, nts$$2, enders$$2, steps$$1, names$$1, toks$$1, states$$2], JAM.policy.p1);
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
  return JAM.call(is_parsed$$1, null, [nt$$7, i$$69, j$$9, nts$$1, enders$$1, states$$1], JAM.policy.p1);
}
function v109(grammar, lexer) {
  function v108(input) {
    function v107() {
      function v106(l$$30) {
        var k$$8;
        var ender_set$$2;
        var state$$11;
        var ender$$3;
        for (;true;) {
          if (l$$30 instanceof sc_Pair) {
            ender$$3 = l$$30.car;
            state$$11 = sc_states_129[j$$8];
            ender_set$$2 = state$$11[ender$$3 + 1];
            if (ender_set$$2 !== false) {
              k$$8 = ender_set$$2[2];
              var v127 = k$$8 >= 0;
              for (;v127;) {
                if (k$$8 >= i$$68) {
                  if (JAM.call(BgL_sc_confzd2setzd2adjoinza2za2_46z00, null, [sc_states_129, BgL_sc_statesza2_128za2, k$$8, prev$$2, i$$68], JAM.policy.p1) !== false) {
                    JAM.call(BgL_sc_confzd2setzd2adjoinza2za2_46z00, null, [sc_states_129, BgL_sc_statesza2_128za2, j$$8, ender$$3, k$$8], JAM.policy.p1);
                  }
                }
                k$$8 = ender_set$$2[k$$8 + 5];
                v127 = k$$8 >= 0;
              }
              return JAM.call(sc_loop1_127, null, [l$$30.cdr], JAM.policy.p1);
            } else {
              l$$30 = l$$30.cdr;
            }
          } else {
            return undefined;
          }
        }
        return;
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
      if (sc_conf_131 >= 0) {
        conf_set$$12 = BgL_sc_stateza2_23za2[sc_conf_131 + 1];
        head$$4 = conf_set$$12[4];
        BgL_sc_stateza2_23za2[0] = conf_set$$12[0];
        JAM.call(conf_set_merge_new_bang, null, [conf_set$$12], JAM.policy.p1);
        sc_i_130 = head$$4;
        var v135 = sc_i_130 >= 0;
        for (;v135;) {
          i$$68 = sc_i_130;
          j$$8 = state_num;
          sc_states_129 = states;
          BgL_sc_statesza2_128za2 = BgL_sc_statesza2_27za2;
          prev$$2 = sc_conf_131 - 1;
          var v1109 = sc_conf_131 >= BgL_sc_nbzd2nts_24zd2;
          if (v1109) {
            v1109 = sc_steps_25[prev$$2] >= 0;
          }
          if (v1109) {
            sc_loop1_127 = v106;
            JAM.call(sc_loop1_127, null, [sc_enders_26[sc_steps_25[prev$$2]]], JAM.policy.p1);
          }
          sc_i_130 = conf_set$$12[sc_i_130 + 5];
          v135 = sc_i_130 >= 0;
        }
        return JAM.call(loop1, null, [], JAM.policy.p1);
      } else {
        return undefined;
      }
      return;
    }
    function v105(nt$$6, i$$67, j$$7, sc_nts_119, sc_enders_120, sc_steps_121, sc_toks_122, sc_states_123) {
      var conf_set$$11;
      var state$$10;
      var sc_conf_124;
      var l$$29;
      var nb_trees;
      var BgL_sc_nbzd2nts_125zd2;
      var BgL_sc_ntza2_126za2;
      BgL_sc_ntza2_126za2 = JAM.call(sc_ind_43, null, [nt$$6, sc_nts_119], JAM.policy.p1);
      if (BgL_sc_ntza2_126za2 !== false) {
        BgL_sc_nbzd2nts_125zd2 = sc_nts_119.length;
        l$$29 = sc_enders_120[BgL_sc_ntza2_126za2];
        nb_trees = 0;
        var v139 = l$$29 instanceof sc_Pair;
        for (;v139;) {
          sc_conf_124 = l$$29.car;
          state$$10 = sc_states_123[j$$7];
          conf_set$$11 = state$$10[sc_conf_124 + 1];
          var v2131;
          if (conf_set$$11 !== false) {
            v2131 = conf_set$$11[i$$67 + 5];
          } else {
            v2131 = false;
          }
          if (v2131 !== false) {
            l$$29 = l$$29.cdr;
            nb_trees = JAM.call(nb_deriv_trees, null, [sc_conf_124, i$$67, j$$7, sc_enders_120, sc_steps_121, sc_toks_122, sc_states_123, BgL_sc_nbzd2nts_125zd2], JAM.policy.p1) + nb_trees;
          } else {
            l$$29 = l$$29.cdr;
          }
          v139 = l$$29 instanceof sc_Pair;
        }
        return nb_trees;
      } else {
        return false;
      }
      return;
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
        for (;true;) {
          if (l$$28 instanceof sc_Pair) {
            ender$$2 = l$$28.car;
            sc_state_117 = sc_states_114[j$$6];
            ender_set$$1 = sc_state_117[ender$$2 + 1];
            if (ender_set$$1 !== false) {
              k$$7 = ender_set$$1[2];
              n$$13 = sc_n_118;
              var v144 = k$$7 >= 0;
              for (;v144;) {
                var v1113 = k$$7 >= i$$66;
                if (v1113) {
                  state$$9 = sc_states_114[k$$7];
                  conf_set$$10 = state$$9[prev$$1 + 1];
                  var v2440;
                  if (conf_set$$10 !== false) {
                    v2440 = conf_set$$10[i$$66 + 5];
                  } else {
                    v2440 = false;
                  }
                  v1113 = v2440 !== false;
                }
                if (v1113) {
                  nb_prev_trees = JAM.call(nb_deriv_trees, null, [prev$$1, i$$66, k$$7, sc_enders_111, sc_steps_112, sc_toks_113, sc_states_114, BgL_sc_nbzd2nts_115zd2], JAM.policy.p1);
                  nb_ender_trees = JAM.call(nb_deriv_trees, null, [ender$$2, k$$7, j$$6, sc_enders_111, sc_steps_112, sc_toks_113, sc_states_114, BgL_sc_nbzd2nts_115zd2], JAM.policy.p1);
                  k$$7 = ender_set$$1[k$$7 + 5];
                  n$$13 = n$$13 + nb_prev_trees * nb_ender_trees;
                } else {
                  k$$7 = ender_set$$1[k$$7 + 5];
                }
                v144 = k$$7 >= 0;
              }
              return JAM.call(sc_loop1_116, null, [l$$28.cdr, n$$13], JAM.policy.p1);
            } else {
              l$$28 = l$$28.cdr;
            }
          } else {
            return sc_n_118;
          }
        }
        return;
      }
      var sc_loop1_116;
      var tmp1124;
      var prev$$1;
      prev$$1 = sc_conf_110 - 1;
      var v1115;
      tmp1124 = sc_conf_110 < BgL_sc_nbzd2nts_115zd2;
      var v2768;
      if (tmp1124 !== false) {
        v2768 = tmp1124;
      } else {
        v2768 = sc_steps_112[prev$$1] < 0;
      }
      if (v2768 !== false) {
        v1115 = 1;
      } else {
        sc_loop1_116 = v103;
        v1115 = JAM.call(sc_loop1_116, null, [sc_enders_111[sc_steps_112[prev$$1]], 0], JAM.policy.p1);
      }
      return v1115;
    }
    function v102(nt$$5, i$$65, j$$5, sc_nts_101, sc_enders_102, sc_steps_103, sc_names_104, sc_toks_105, sc_states_106) {
      var conf_set$$9;
      var state$$8;
      var sc_conf_107;
      var l$$27;
      var trees;
      var BgL_sc_nbzd2nts_108zd2;
      var BgL_sc_ntza2_109za2;
      BgL_sc_ntza2_109za2 = JAM.call(sc_ind_43, null, [nt$$5, sc_nts_101], JAM.policy.p1);
      if (BgL_sc_ntza2_109za2 !== false) {
        BgL_sc_nbzd2nts_108zd2 = sc_nts_101.length;
        l$$27 = sc_enders_102[BgL_sc_ntza2_109za2];
        trees = null;
        var v150 = l$$27 instanceof sc_Pair;
        for (;v150;) {
          sc_conf_107 = l$$27.car;
          state$$8 = sc_states_106[j$$5];
          conf_set$$9 = state$$8[sc_conf_107 + 1];
          var v2134;
          if (conf_set$$9 !== false) {
            v2134 = conf_set$$9[i$$65 + 5];
          } else {
            v2134 = false;
          }
          if (v2134 !== false) {
            l$$27 = l$$27.cdr;
            trees = JAM.call(sc_append, null, [JAM.call(deriv_trees, null, [sc_conf_107, i$$65, j$$5, sc_enders_102, sc_steps_103, sc_names_104, sc_toks_105, sc_states_106, BgL_sc_nbzd2nts_108zd2], JAM.policy.p1), trees], JAM.policy.p1);
          } else {
            l$$27 = l$$27.cdr;
          }
          v150 = l$$27 instanceof sc_Pair;
        }
        return trees;
      } else {
        return false;
      }
      return;
    }
    function v101(sc_conf_91, i$$64, j$$4, sc_enders_92, sc_steps_93, sc_names_94, sc_toks_95, sc_states_96, BgL_sc_nbzd2nts_97zd2) {
      function v100(l1$$14, l2$$6) {
        function v99(k$$6, l2$$7) {
          function v98(l3$$1, l2$$8) {
            var l4;
            var sc_l2_100;
            var ender_tree;
            if (l3$$1 instanceof sc_Pair) {
              ender_tree = JAM.call(sc_list, null, [l3$$1.car], JAM.policy.p1);
              l4 = prev_trees;
              sc_l2_100 = l2$$8;
              var v154 = l4 instanceof sc_Pair;
              for (;v154;) {
                sc_l2_100 = JAM.new(sc_Pair, [JAM.call(sc_append, null, [l4.car, ender_tree], JAM.policy.p1), sc_l2_100], JAM.policy.p1);
                l4 = l4.cdr;
                v154 = l4 instanceof sc_Pair;
              }
              return JAM.call(loop3, null, [l3$$1.cdr, sc_l2_100], JAM.policy.p1);
            } else {
              return JAM.call(loop2, null, [ender_set[k$$6 + 5], l2$$8], JAM.policy.p1);
            }
            return;
          }
          var loop3;
          var ender_trees;
          var prev_trees;
          var conf_set$$8;
          var sc_state_99;
          for (;true;) {
            if (k$$6 >= 0) {
              var v1119 = k$$6 >= i$$64;
              if (v1119) {
                sc_state_99 = sc_states_96[k$$6];
                conf_set$$8 = sc_state_99[prev + 1];
                var v2445;
                if (conf_set$$8 !== false) {
                  v2445 = conf_set$$8[i$$64 + 5];
                } else {
                  v2445 = false;
                }
                v1119 = v2445 !== false;
              }
              if (v1119) {
                prev_trees = JAM.call(deriv_trees, null, [prev, i$$64, k$$6, sc_enders_92, sc_steps_93, sc_names_94, sc_toks_95, sc_states_96, BgL_sc_nbzd2nts_97zd2], JAM.policy.p1);
                ender_trees = JAM.call(deriv_trees, null, [ender$$1, k$$6, j$$4, sc_enders_92, sc_steps_93, sc_names_94, sc_toks_95, sc_states_96, BgL_sc_nbzd2nts_97zd2], JAM.policy.p1);
                loop3 = v98;
                return JAM.call(loop3, null, [ender_trees, l2$$7], JAM.policy.p1);
              } else {
                k$$6 = ender_set[k$$6 + 5];
              }
            } else {
              return JAM.call(sc_loop1_98, null, [l1$$14.cdr, l2$$7], JAM.policy.p1);
            }
          }
          return;
        }
        var loop2;
        var ender_set;
        var state$$7;
        var ender$$1;
        for (;true;) {
          if (l1$$14 instanceof sc_Pair) {
            ender$$1 = l1$$14.car;
            state$$7 = sc_states_96[j$$4];
            ender_set = state$$7[ender$$1 + 1];
            if (ender_set !== false) {
              loop2 = v99;
              return JAM.call(loop2, null, [ender_set[2], l2$$6], JAM.policy.p1);
            } else {
              l1$$14 = l1$$14.cdr;
            }
          } else {
            return l2$$6;
          }
        }
        return;
      }
      var sc_loop1_98;
      var prev;
      var name$$37;
      name$$37 = sc_names_94[sc_conf_91];
      var v1121;
      if (name$$37 !== false) {
        var v1744;
        if (sc_conf_91 < BgL_sc_nbzd2nts_97zd2) {
          v1744 = JAM.call(sc_list, null, [JAM.call(sc_list, null, [name$$37, sc_toks_95[i$$64].car], JAM.policy.p1)], JAM.policy.p1);
        } else {
          v1744 = JAM.call(sc_list, null, [JAM.call(sc_list, null, [name$$37], JAM.policy.p1)], JAM.policy.p1);
        }
        v1121 = v1744;
      } else {
        prev = sc_conf_91 - 1;
        sc_loop1_98 = v100;
        v1121 = JAM.call(sc_loop1_98, null, [sc_enders_92[sc_steps_93[prev]], null], JAM.policy.p1);
      }
      return v1121;
    }
    function v97(nt$$4, i$$63, j$$3, sc_nts_86, sc_enders_87, sc_states_88) {
      var conf_set$$7;
      var state$$6;
      var sc_conf_89;
      var l$$26;
      var BgL_sc_ntza2_90za2;
      BgL_sc_ntza2_90za2 = JAM.call(sc_ind_43, null, [nt$$4, sc_nts_86], JAM.policy.p1);
      if (BgL_sc_ntza2_90za2 !== false) {
        l$$26 = sc_enders_87[BgL_sc_ntza2_90za2];
        for (;true;) {
          if (l$$26 instanceof sc_Pair) {
            sc_conf_89 = l$$26.car;
            state$$6 = sc_states_88[j$$3];
            conf_set$$7 = state$$6[sc_conf_89 + 1];
            var v2139;
            if (conf_set$$7 !== false) {
              v2139 = conf_set$$7[i$$63 + 5];
            } else {
              v2139 = false;
            }
            if (v2139 !== false) {
              return true;
            } else {
              l$$26 = l$$26.cdr;
            }
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
      return;
    }
    function v96(sc_states_67, BgL_sc_statezd2num_68zd2, sc_starters_69, sc_enders_70, sc_predictors_71, sc_steps_72, sc_nts_73) {
      function v95(l$$25) {
        var sc_state_83;
        var BgL_sc_nextzd2set_84zd2;
        var sc_next_85;
        var pred_set;
        var i$$62;
        var pred;
        if (l$$25 instanceof sc_Pair) {
          pred = l$$25.car;
          i$$62 = head$$3;
          var v170 = i$$62 >= 0;
          for (;v170;) {
            sc_state_83 = sc_states_78[i$$62];
            pred_set = sc_state_83[pred + 1];
            if (pred_set !== false) {
              sc_next_85 = pred + 1;
              BgL_sc_nextzd2set_84zd2 = JAM.call(BgL_sc_confzd2setzd2getza2_44za2, null, [state$$5, BgL_sc_statezd2num_77zd2, sc_next_85], JAM.policy.p1);
              JAM.call(conf_set_union, null, [state$$5, BgL_sc_nextzd2set_84zd2, sc_next_85, pred_set], JAM.policy.p1);
            }
            i$$62 = BgL_sc_confzd2set_76zd2[i$$62 + 5];
            v170 = i$$62 >= 0;
          }
          return JAM.call(sc_loop1_75, null, [l$$25.cdr], JAM.policy.p1);
        } else {
          return undefined;
        }
        return;
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
      sc_state_82 = sc_states_67[BgL_sc_statezd2num_68zd2];
      BgL_sc_nbzd2nts_81zd2 = sc_nts_73.length;
      for (;true;) {
        sc_conf_80 = sc_state_82[0];
        if (sc_conf_80 >= 0) {
          step = sc_steps_72[sc_conf_80];
          BgL_sc_confzd2set_79zd2 = sc_state_82[sc_conf_80 + 1];
          head$$3 = BgL_sc_confzd2set_79zd2[4];
          sc_state_82[0] = BgL_sc_confzd2set_79zd2[0];
          JAM.call(conf_set_merge_new_bang, null, [BgL_sc_confzd2set_79zd2], JAM.policy.p1);
          if (step >= 0) {
            sc_l_74 = sc_starters_69[step];
            var v175 = sc_l_74 instanceof sc_Pair;
            for (;v175;) {
              starter = sc_l_74.car;
              starter_set = JAM.call(BgL_sc_confzd2setzd2getza2_44za2, null, [sc_state_82, BgL_sc_statezd2num_68zd2, starter], JAM.policy.p1);
              if (starter_set[BgL_sc_statezd2num_68zd2 + 5] === false) {
                JAM.call(conf_set_adjoin, null, [sc_state_82, starter_set, starter, BgL_sc_statezd2num_68zd2], JAM.policy.p1);
                sc_l_74 = sc_l_74.cdr;
              } else {
                sc_l_74 = sc_l_74.cdr;
              }
              v175 = sc_l_74 instanceof sc_Pair;
            }
            l$$24 = sc_enders_70[step];
            var v177 = l$$24 instanceof sc_Pair;
            for (;v177;) {
              ender = l$$24.car;
              conf_set$$6 = sc_state_82[ender + 1];
              var v2141;
              if (conf_set$$6 !== false) {
                v2141 = conf_set$$6[BgL_sc_statezd2num_68zd2 + 5];
              } else {
                v2141 = false;
              }
              if (v2141 !== false) {
                next$$1 = sc_conf_80 + 1;
                next_set = JAM.call(BgL_sc_confzd2setzd2getza2_44za2, null, [sc_state_82, BgL_sc_statezd2num_68zd2, next$$1], JAM.policy.p1);
                JAM.call(conf_set_union, null, [sc_state_82, next_set, next$$1, BgL_sc_confzd2set_79zd2], JAM.policy.p1);
                l$$24 = l$$24.cdr;
              } else {
                l$$24 = l$$24.cdr;
              }
              v177 = l$$24 instanceof sc_Pair;
            }
          } else {
            preds = sc_predictors_71[step + BgL_sc_nbzd2nts_81zd2];
            sc_states_78 = sc_states_67;
            state$$5 = sc_state_82;
            BgL_sc_statezd2num_77zd2 = BgL_sc_statezd2num_68zd2;
            BgL_sc_confzd2set_76zd2 = BgL_sc_confzd2set_79zd2;
            sc_loop1_75 = v95;
            JAM.call(sc_loop1_75, null, [preds], JAM.policy.p1);
          }
        } else {
          return undefined;
        }
      }
      return;
    }
    function v94(state$$4, conf_set$$5, sc_conf_66, other_set) {
      var i$$61;
      i$$61 = other_set[2];
      var v184 = i$$61 >= 0;
      for (;v184;) {
        if (conf_set$$5[i$$61 + 5] === false) {
          JAM.call(conf_set_adjoin, null, [state$$4, conf_set$$5, sc_conf_66, i$$61], JAM.policy.p1);
          i$$61 = other_set[i$$61 + 5];
        } else {
          i$$61 = other_set[i$$61 + 5];
        }
        v184 = i$$61 >= 0;
      }
      return undefined;
    }
    function v93(sc_states_60, BgL_sc_statesza2_61za2, BgL_sc_statezd2num_62zd2, sc_conf_63, i$$60) {
      var BgL_sc_confzd2setza2_64z70;
      var BgL_sc_stateza2_65za2;
      var conf_set$$4;
      var state$$3;
      state$$3 = sc_states_60[BgL_sc_statezd2num_62zd2];
      var v1127;
      conf_set$$4 = state$$3[sc_conf_63 + 1];
      var v2774;
      if (conf_set$$4 !== false) {
        v2774 = conf_set$$4[i$$60 + 5];
      } else {
        v2774 = false;
      }
      if (v2774 !== false) {
        BgL_sc_stateza2_65za2 = BgL_sc_statesza2_61za2[BgL_sc_statezd2num_62zd2];
        BgL_sc_confzd2setza2_64z70 = JAM.call(BgL_sc_confzd2setzd2getza2_44za2, null, [BgL_sc_stateza2_65za2, BgL_sc_statezd2num_62zd2, sc_conf_63], JAM.policy.p1);
        var v2453;
        if (BgL_sc_confzd2setza2_64z70[i$$60 + 5] === false) {
          v2453 = JAM.call(conf_set_adjoin, null, [BgL_sc_stateza2_65za2, BgL_sc_confzd2setza2_64z70, sc_conf_63, i$$60], JAM.policy.p1);
        } else {
          v2453 = undefined;
        }
        v2453;
        v1127 = true;
      } else {
        v1127 = false;
      }
      return v1127;
    }
    function v92(sc_states_57, BgL_sc_statezd2num_58zd2, l$$23, i$$59) {
      var conf_set$$3;
      var sc_conf_59;
      var l1$$13;
      var state$$2;
      state$$2 = sc_states_57[BgL_sc_statezd2num_58zd2];
      l1$$13 = l$$23;
      var v186 = l1$$13 instanceof sc_Pair;
      for (;v186;) {
        sc_conf_59 = l1$$13.car;
        conf_set$$3 = JAM.call(BgL_sc_confzd2setzd2getza2_44za2, null, [state$$2, BgL_sc_statezd2num_58zd2, sc_conf_59], JAM.policy.p1);
        if (conf_set$$3[i$$59 + 5] === false) {
          JAM.call(conf_set_adjoin, null, [state$$2, conf_set$$3, sc_conf_59, i$$59], JAM.policy.p1);
          l1$$13 = l1$$13.cdr;
        } else {
          l1$$13 = l1$$13.cdr;
        }
        v186 = l1$$13 instanceof sc_Pair;
      }
      return undefined;
    }
    function v91(state$$1, conf_set$$2, sc_conf_56, i$$58) {
      var tail$$5;
      tail$$5 = conf_set$$2[3];
      JAM.set(conf_set$$2, i$$58 + 5, -1);
      JAM.set(conf_set$$2, tail$$5 + 5, i$$58);
      conf_set$$2[3] = i$$58;
      var v1129;
      if (tail$$5 < 0) {
        conf_set$$2[0] = state$$1[0];
        v1129 = state$$1[0] = sc_conf_56;
      } else {
        v1129 = undefined;
      }
      return v1129;
    }
    function v90(conf_set$$1) {
      JAM.set(conf_set$$1, conf_set$$1[1] + 5, conf_set$$1[4]);
      conf_set$$1[1] = conf_set$$1[3];
      conf_set$$1[3] = -1;
      return conf_set$$1[4] = -1;
    }
    function v89(state, BgL_sc_statezd2num_53zd2, sc_conf_54) {
      var conf_set;
      var BgL_sc_confzd2set_55zd2;
      BgL_sc_confzd2set_55zd2 = state[sc_conf_54 + 1];
      var v1131;
      if (BgL_sc_confzd2set_55zd2 !== false) {
        v1131 = BgL_sc_confzd2set_55zd2;
      } else {
        conf_set = JAM.call(sc_makeVector, null, [BgL_sc_statezd2num_53zd2 + 6, false], JAM.policy.p1);
        conf_set[1] = -3;
        conf_set[2] = -1;
        conf_set[3] = -1;
        conf_set[4] = -1;
        JAM.set(state, sc_conf_54 + 1, conf_set);
        v1131 = conf_set;
      }
      return v1131;
    }
    function v88(BgL_sc_nbzd2toks_50zd2, BgL_sc_nbzd2confs_51zd2) {
      var v$$5;
      var i$$57;
      var sc_states_52;
      sc_states_52 = JAM.call(sc_makeVector, null, [BgL_sc_nbzd2toks_50zd2 + 1, false], JAM.policy.p1);
      i$$57 = BgL_sc_nbzd2toks_50zd2;
      var v189 = i$$57 >= 0;
      for (;v189;) {
        v$$5 = JAM.call(sc_makeVector, null, [BgL_sc_nbzd2confs_51zd2 + 1, false], JAM.policy.p1);
        v$$5[0] = -1;
        JAM.set(sc_states_52, i$$57, v$$5);
        i$$57 = i$$57 - 1;
        v189 = i$$57 >= 0;
      }
      return sc_states_52;
    }
    function v87(nt$$3, sc_nts_49) {
      var i$$56;
      i$$56 = sc_nts_49.length - 1;
      for (;true;) {
        if (i$$56 >= 0) {
          if (JAM.call(sc_isEqual, null, [sc_nts_49[i$$56], nt$$3], JAM.policy.p1)) {
            return i$$56;
          } else {
            i$$56 = i$$56 - 1;
          }
        } else {
          return false;
        }
      }
      return;
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
    falseHead1128 = JAM.new(sc_Pair, [null, null], JAM.policy.p1);
    L1125 = JAM.call(lexer$$1, null, [input], JAM.policy.p1);
    tail1129 = falseHead1128;
    var v198 = !(L1125 === null);
    for (;v198;) {
      tok = L1125.car;
      l1$$12 = tok.cdr;
      l2$$5 = null;
      var v195 = l1$$12 instanceof sc_Pair;
      for (;v195;) {
        sc_i_29 = JAM.call(sc_ind_43, null, [l1$$12.car, sc_nts_42], JAM.policy.p1);
        if (sc_i_29 !== false) {
          l1$$12 = l1$$12.cdr;
          l2$$5 = JAM.new(sc_Pair, [sc_i_29, l2$$5], JAM.policy.p1);
        } else {
          l1$$12 = l1$$12.cdr;
        }
        v195 = l1$$12 instanceof sc_Pair;
      }
      sc_optrOpnd_22 = JAM.new(sc_Pair, [tok.car, JAM.call(sc_reverse, null, [l2$$5], JAM.policy.p1)], JAM.policy.p1);
      sc_optrOpnd_21 = JAM.new(sc_Pair, [sc_optrOpnd_22, null], JAM.policy.p1);
      tail1129.cdr = sc_optrOpnd_21;
      tail1129 = tail1129.cdr;
      L1125 = L1125.cdr;
      v198 = !(L1125 === null);
    }
    sc_optrOpnd_20 = falseHead1128.cdr;
    sc_toks_36 = JAM.call(sc_list2vector, null, [sc_optrOpnd_20], JAM.policy.p1);
    BgL_sc_nbzd2toks_35zd2 = sc_toks_36.length;
    BgL_sc_nbzd2confs_34zd2 = sc_steps_38.length;
    sc_states_33 = JAM.call(make_states, null, [BgL_sc_nbzd2toks_35zd2, BgL_sc_nbzd2confs_34zd2], JAM.policy.p1);
    goal_starters = sc_starters_41[0];
    JAM.call(BgL_sc_confzd2setzd2adjoinza2_45za2, null, [sc_states_33, 0, goal_starters, 0], JAM.policy.p1);
    JAM.call(forw, null, [sc_states_33, 0, sc_starters_41, sc_enders_40, sc_predictors_39, sc_steps_38, sc_nts_42], JAM.policy.p1);
    sc_i_28 = 0;
    var v202 = sc_i_28 < BgL_sc_nbzd2toks_35zd2;
    for (;v202;) {
      tok_nts = sc_toks_36[sc_i_28].cdr;
      JAM.call(BgL_sc_confzd2setzd2adjoinza2_45za2, null, [sc_states_33, sc_i_28 + 1, tok_nts, sc_i_28], JAM.policy.p1);
      JAM.call(forw, null, [sc_states_33, sc_i_28 + 1, sc_starters_41, sc_enders_40, sc_predictors_39, sc_steps_38, sc_nts_42], JAM.policy.p1);
      sc_i_28 = sc_i_28 + 1;
      v202 = sc_i_28 < BgL_sc_nbzd2toks_35zd2;
    }
    nb_toks = sc_toks_36.length;
    BgL_sc_nbzd2confs_32zd2 = sc_steps_38.length;
    BgL_sc_nbzd2nts_31zd2 = sc_nts_42.length;
    BgL_sc_statesza2_30za2 = JAM.call(make_states, null, [nb_toks, BgL_sc_nbzd2confs_32zd2], JAM.policy.p1);
    goal_enders = sc_enders_40[0];
    l$$22 = goal_enders;
    var v203 = l$$22 instanceof sc_Pair;
    for (;v203;) {
      conf$$2 = l$$22.car;
      JAM.call(BgL_sc_confzd2setzd2adjoinza2za2_46z00, null, [sc_states_33, BgL_sc_statesza2_30za2, nb_toks, conf$$2, 0], JAM.policy.p1);
      l$$22 = l$$22.cdr;
      v203 = l$$22 instanceof sc_Pair;
    }
    i$$55 = nb_toks;
    var v204 = i$$55 >= 0;
    for (;v204;) {
      states = sc_states_33;
      BgL_sc_statesza2_27za2 = BgL_sc_statesza2_30za2;
      state_num = i$$55;
      sc_enders_26 = sc_enders_40;
      sc_steps_25 = sc_steps_38;
      BgL_sc_nbzd2nts_24zd2 = BgL_sc_nbzd2nts_31zd2;
      toks = sc_toks_36;
      BgL_sc_stateza2_23za2 = BgL_sc_statesza2_30za2[i$$55];
      loop1 = v107;
      JAM.call(loop1, null, [], JAM.policy.p1);
      i$$55 = i$$55 - 1;
      v204 = i$$55 >= 0;
    }
    optrOpnd$$2 = BgL_sc_statesza2_30za2;
    return[sc_nts_42, sc_starters_41, sc_enders_40, sc_predictors_39, sc_steps_38, sc_names_37, sc_toks_36, optrOpnd$$2, is_parsed, BgL_sc_derivzd2treesza2_47z70, BgL_sc_nbzd2derivzd2treesza2_48za2];
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
      if (rules$$2 instanceof sc_Pair) {
        rule$$4 = rules$$2.car;
        var v3728 = JAM.call(sc_list, null, [head$$2, rule_num], JAM.policy.p1);
        JAM.set(names, conf$$1, v3728);
        sc_i_19 = JAM.call(ind, null, [head$$2, nts], JAM.policy.p1);
        var v205 = starters;
        var v206 = sc_i_19;
        var v3729 = JAM.new(sc_Pair, [conf$$1, starters[sc_i_19]], JAM.policy.p1);
        JAM.set(v205, v206, v3729);
        l$$21 = rule$$4;
        sc_conf_18 = conf$$1;
        var v209 = l$$21 instanceof sc_Pair;
        for (;v209;) {
          nt$$2 = l$$21.car;
          var v3730 = JAM.call(ind, null, [nt$$2, nts], JAM.policy.p1);
          JAM.set(steps, sc_conf_18, v3730);
          sc_i_17 = JAM.call(ind, null, [nt$$2, nts], JAM.policy.p1);
          var v207 = predictors;
          var v208 = sc_i_17;
          var v3731 = JAM.new(sc_Pair, [sc_conf_18, predictors[sc_i_17]], JAM.policy.p1);
          JAM.set(v207, v208, v3731);
          l$$21 = l$$21.cdr;
          sc_conf_18 = sc_conf_18 + 1;
          v209 = l$$21 instanceof sc_Pair;
        }
        JAM.set(steps, sc_conf_18, JAM.call(ind, null, [head$$2, nts], JAM.policy.p1) - nb_nts);
        i$$54 = JAM.call(ind, null, [head$$2, nts], JAM.policy.p1);
        var v212 = enders;
        var v213 = i$$54;
        var v3732 = JAM.new(sc_Pair, [sc_conf_18, enders[i$$54]], JAM.policy.p1);
        JAM.set(v212, v213, v3732);
        return JAM.call(rule_loop$$2, null, [rules$$2.cdr, sc_conf_18 + 1, rule_num + 1], JAM.policy.p1);
      } else {
        return JAM.call(def_loop, null, [defs$$2.cdr, conf$$1], JAM.policy.p1);
      }
      return;
    }
    var rule_loop$$2;
    var head$$2;
    var def$$2;
    var v219;
    if (defs$$2 instanceof sc_Pair) {
      def$$2 = defs$$2.car;
      head$$2 = def$$2.car;
      rule_loop$$2 = v85;
      v219 = JAM.call(rule_loop$$2, null, [def$$2.cdr, conf, 1], JAM.policy.p1);
    } else {
      v219 = undefined;
    }
    return v219;
  }
  function v84(defs$$1, BgL_sc_nbzd2confs_14zd2) {
    function v83(rules$$1, BgL_sc_nbzd2confs_15zd2) {
      var l$$20;
      var BgL_sc_nbzd2confs_16zd2;
      var rule$$3;
      if (rules$$1 instanceof sc_Pair) {
        rule$$3 = rules$$1.car;
        l$$20 = rule$$3;
        BgL_sc_nbzd2confs_16zd2 = BgL_sc_nbzd2confs_15zd2;
        var v220 = l$$20 instanceof sc_Pair;
        for (;v220;) {
          l$$20 = l$$20.cdr;
          BgL_sc_nbzd2confs_16zd2 = BgL_sc_nbzd2confs_16zd2 + 1;
          v220 = l$$20 instanceof sc_Pair;
        }
        return JAM.call(rule_loop$$1, null, [rules$$1.cdr, BgL_sc_nbzd2confs_16zd2 + 1], JAM.policy.p1);
      } else {
        return JAM.call(BgL_sc_defzd2loop_6zd2, null, [defs$$1.cdr, BgL_sc_nbzd2confs_15zd2], JAM.policy.p1);
      }
      return;
    }
    var rule_loop$$1;
    var def$$1;
    var v225;
    if (defs$$1 instanceof sc_Pair) {
      def$$1 = defs$$1.car;
      rule_loop$$1 = v83;
      v225 = JAM.call(rule_loop$$1, null, [def$$1.cdr, BgL_sc_nbzd2confs_14zd2], JAM.policy.p1);
    } else {
      v225 = BgL_sc_nbzd2confs_14zd2;
    }
    return v225;
  }
  function v82(defs, sc_nts_11) {
    function v81(rules, sc_nts_12) {
      var nt$$1;
      var l$$19;
      var sc_nts_13;
      var rule$$2;
      if (rules instanceof sc_Pair) {
        rule$$2 = rules.car;
        l$$19 = rule$$2;
        sc_nts_13 = sc_nts_12;
        var v227 = l$$19 instanceof sc_Pair;
        for (;v227;) {
          nt$$1 = l$$19.car;
          l$$19 = l$$19.cdr;
          var v226;
          if (JAM.call(sc_member, null, [nt$$1, sc_nts_13], JAM.policy.p1) !== false) {
            v226 = sc_nts_13;
          } else {
            v226 = JAM.new(sc_Pair, [nt$$1, sc_nts_13], JAM.policy.p1);
          }
          sc_nts_13 = v226;
          v227 = l$$19 instanceof sc_Pair;
        }
        return JAM.call(rule_loop, null, [rules.cdr, sc_nts_13], JAM.policy.p1);
      } else {
        return JAM.call(BgL_sc_defzd2loop_9zd2, null, [defs.cdr, sc_nts_12], JAM.policy.p1);
      }
      return;
    }
    var rule_loop;
    var head$$1;
    var def;
    var v231;
    if (defs instanceof sc_Pair) {
      def = defs.car;
      head$$1 = def.car;
      rule_loop = v81;
      var v1755 = def.cdr;
      var v2145;
      if (JAM.call(sc_member, null, [head$$1, sc_nts_11], JAM.policy.p1) !== false) {
        v2145 = sc_nts_11;
      } else {
        v2145 = JAM.new(sc_Pair, [head$$1, sc_nts_11], JAM.policy.p1);
      }
      v231 = JAM.call(rule_loop, null, [v1755, v2145], JAM.policy.p1);
    } else {
      v231 = JAM.call(sc_list2vector, null, [JAM.call(sc_reverse, null, [sc_nts_11], JAM.policy.p1)], JAM.policy.p1);
    }
    return v231;
  }
  function v80(nt, sc_nts_10) {
    var i$$53;
    i$$53 = sc_nts_10.length - 1;
    for (;true;) {
      if (i$$53 >= 0) {
        if (JAM.call(sc_isEqual, null, [sc_nts_10[i$$53], nt], JAM.policy.p1)) {
          return i$$53;
        } else {
          i$$53 = i$$53 - 1;
        }
      } else {
        return false;
      }
    }
    return;
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
  sc_nts_8 = JAM.call(BgL_sc_defzd2loop_9zd2, null, [grammar, null], JAM.policy.p1);
  BgL_sc_nbzd2nts_7zd2 = sc_nts_8.length;
  BgL_sc_defzd2loop_6zd2 = v84;
  nb_confs = JAM.call(BgL_sc_defzd2loop_6zd2, null, [grammar, 0], JAM.policy.p1) + BgL_sc_nbzd2nts_7zd2;
  sc_starters_5 = JAM.call(sc_makeVector, null, [BgL_sc_nbzd2nts_7zd2, null], JAM.policy.p1);
  sc_enders_4 = JAM.call(sc_makeVector, null, [BgL_sc_nbzd2nts_7zd2, null], JAM.policy.p1);
  sc_predictors_3 = JAM.call(sc_makeVector, null, [BgL_sc_nbzd2nts_7zd2, null], JAM.policy.p1);
  sc_steps_2 = JAM.call(sc_makeVector, null, [nb_confs, false], JAM.policy.p1);
  sc_names_1 = JAM.call(sc_makeVector, null, [nb_confs, false], JAM.policy.p1);
  nts = sc_nts_8;
  starters = sc_starters_5;
  enders = sc_enders_4;
  predictors = sc_predictors_3;
  steps = sc_steps_2;
  names = sc_names_1;
  nb_nts = sc_nts_8.length;
  i$$52 = nb_nts - 1;
  var v238 = i$$52 >= 0;
  for (;v238;) {
    JAM.set(sc_steps_2, i$$52, i$$52 - nb_nts);
    var v236 = sc_names_1;
    var v237 = i$$52;
    var v3733 = JAM.call(sc_list, null, [sc_nts_8[i$$52], 0], JAM.policy.p1);
    v236[v237] = v3733;
    var v3734 = JAM.call(sc_list, null, [i$$52], JAM.policy.p1);
    JAM.set(sc_enders_4, i$$52, v3734);
    i$$52 = i$$52 - 1;
    v238 = i$$52 >= 0;
  }
  def_loop = v86;
  JAM.call(def_loop, null, [grammar, sc_nts_8.length], JAM.policy.p1);
  parser_descr = [lexer, sc_nts_8, sc_starters_5, sc_enders_4, sc_predictors_3, sc_steps_2, sc_names_1];
  return v108;
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
  var v241 = !(sc_n_20 === 0);
  for (;v241;) {
    term$$7 = JAM.call(sc_list, null, ["\u1e9cor", term$$7, JAM.new(sc_Pair, ["\u1e9cf", null], JAM.policy.p1)], JAM.policy.p1);
    sc_n_20 = sc_n_20 - 1;
    v241 = !(sc_n_20 === 0);
  }
  sc_term_22 = term$$7;
  if (!(sc_term_22 instanceof sc_Pair)) {
    optrOpnd$$1 = sc_term_22;
  } else {
    optrOpnd$$1 = JAM.new(sc_Pair, [JAM.call(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer, null, [sc_term_22.car], JAM.policy.p1), JAM.call(translate_args_nboyer, null, [sc_term_22.cdr], JAM.policy.p1)], JAM.policy.p1);
  }
  var v1151;
  if (const_nboyer === null) {
    v1151 = null;
  } else {
    v1151 = JAM.new(sc_Pair, [JAM.new(sc_Pair, [const_nboyer.car.car, JAM.call(translate_term_nboyer, null, [const_nboyer.car.cdr], JAM.policy.p1)], JAM.policy.p1), JAM.call(translate_alist_nboyer, null, [const_nboyer.cdr], JAM.policy.p1)], JAM.policy.p1);
  }
  sc_term_21 = JAM.call(apply_subst_nboyer, null, [v1151, optrOpnd$$1], JAM.policy.p1);
  answer = JAM.call(tautologyp_nboyer, null, [JAM.call(rewrite_nboyer, null, [sc_term_21], JAM.policy.p1), null, null], JAM.policy.p1);
  JAM.call(sc_write, null, [rewrite_count_nboyer], JAM.policy.p1);
  JAM.call(sc_display, null, [" rewrites"], JAM.policy.p1);
  JAM.call(sc_newline, null, [], JAM.policy.p1);
  if (answer !== false) {
    return rewrite_count_nboyer;
  } else {
    return false;
  }
  return;
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
  if_constructor_nboyer = JAM.call(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer, null, ["\u1e9cif"], JAM.policy.p1);
  sc_term_19 = JAM.new(sc_Pair, ["\u1e9cf", null], JAM.policy.p1);
  var v1152;
  if (!(sc_term_19 instanceof sc_Pair)) {
    v1152 = sc_term_19;
  } else {
    v1152 = JAM.new(sc_Pair, [JAM.call(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer, null, [sc_term_19.car], JAM.policy.p1), JAM.call(translate_args_nboyer, null, [sc_term_19.cdr], JAM.policy.p1)], JAM.policy.p1);
  }
  false_term_nboyer = v1152;
  sc_term_18 = JAM.new(sc_Pair, ["\u1e9ct", null], JAM.policy.p1);
  var v1153;
  if (!(sc_term_18 instanceof sc_Pair)) {
    v1153 = sc_term_18;
  } else {
    v1153 = JAM.new(sc_Pair, [JAM.call(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer, null, [sc_term_18.car], JAM.policy.p1), JAM.call(translate_args_nboyer, null, [sc_term_18.cdr], JAM.policy.p1)], JAM.policy.p1);
  }
  true_term_nboyer = v1153;
  lst$$7 = sc_const_3_nboyer;
  var v252 = !(lst$$7 === null);
  for (;v252;) {
    term$$6 = lst$$7.car;
    var v1155 = term$$6 instanceof sc_Pair;
    if (v1155) {
      var v1766 = term$$6.car === "\u1e9cequal";
      if (v1766) {
        v1766 = term$$6.cdr.car instanceof sc_Pair;
      }
      v1155 = v1766;
    }
    if (v1155) {
      sc_sym_17 = term$$6.cdr.car.car;
      var v1157;
      if (!(term$$6 instanceof sc_Pair)) {
        v1157 = term$$6;
      } else {
        v1157 = JAM.new(sc_Pair, [JAM.call(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer, null, [term$$6.car], JAM.policy.p1), JAM.call(translate_args_nboyer, null, [term$$6.cdr], JAM.policy.p1)], JAM.policy.p1);
      }
      var v249 = v1157;
      sym$$5 = term$$6.cdr.car.car;
      BgL_sc_symbolzd2record_16zd2 = JAM.call(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer, null, [sym$$5], JAM.policy.p1);
      value$$30 = JAM.new(sc_Pair, [v249, BgL_sc_symbolzd2record_16zd2[1]], JAM.policy.p1);
      symbol_record$$2 = JAM.call(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer, null, [sc_sym_17], JAM.policy.p1);
      symbol_record$$2[1] = value$$30;
    } else {
      JAM.call(sc_error, null, ["ADD-LEMMA did not like term:  ", term$$6], JAM.policy.p1);
    }
    lst$$7 = lst$$7.cdr;
    v252 = !(lst$$7 === null);
  }
  return true;
}
function v77(x$$78, lst$$6) {
  for (;true;) {
    if (lst$$6 === null) {
      return false;
    } else {
      if (JAM.call(is_term_equal_nboyer, null, [x$$78, lst$$6.car], JAM.policy.p1) !== false) {
        return true;
      } else {
        lst$$6 = lst$$6.cdr;
      }
    }
  }
  return;
}
function v76(x$$77, y$$43) {
  var lst1$$1;
  var lst2$$1;
  var r2;
  var r1$$1;
  if (x$$77 instanceof sc_Pair) {
    if (y$$43 instanceof sc_Pair) {
      r1$$1 = x$$77.car;
      r2 = y$$43.car;
      if (r1$$1 === r2 !== false) {
        lst1$$1 = x$$77.cdr;
        lst2$$1 = y$$43.cdr;
        for (;true;) {
          if (lst1$$1 === null) {
            return lst2$$1 === null;
          } else {
            if (lst2$$1 === null) {
              return false;
            } else {
              if (JAM.call(is_term_equal_nboyer, null, [lst1$$1.car, lst2$$1.car], JAM.policy.p1) !== false) {
                lst1$$1 = lst1$$1.cdr;
                lst2$$1 = lst2$$1.cdr;
              } else {
                return false;
              }
            }
          }
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return JAM.call(sc_isEqual, null, [x$$77, y$$43], JAM.policy.p1);
  }
  return;
}
function v75(n$$11) {
  var sc_n_15;
  var v261;
  if (JAM.call(sc_isEqual, null, [n$$11, 1], JAM.policy.p1)) {
    v261 = JAM.call(sc_list, null, ["\u1e9cimplies", 0, 1], JAM.policy.p1);
  } else {
    var v1162 = JAM.call(sc_list, null, ["\u1e9cimplies", n$$11 - 1, n$$11], JAM.policy.p1);
    sc_n_15 = n$$11 - 1;
    var v2161;
    if (JAM.call(sc_isEqual, null, [sc_n_15, 1], JAM.policy.p1)) {
      v2161 = JAM.call(sc_list, null, ["\u1e9cimplies", 0, 1], JAM.policy.p1);
    } else {
      v2161 = JAM.call(sc_list, null, ["\u1e9cand", JAM.call(sc_list, null, ["\u1e9cimplies", sc_n_15 - 1, sc_n_15], JAM.policy.p1), JAM.call(trans_of_implies1_nboyer, null, [sc_n_15 - 1], JAM.policy.p1)], JAM.policy.p1);
    }
    v261 = JAM.call(sc_list, null, ["\u1e9cand", v1162, v2161], JAM.policy.p1);
  }
  return v261;
}
function v74(term1, term2$$1) {
  var lst1;
  var lst2;
  var temp_temp$$1;
  if (!(term2$$1 instanceof sc_Pair)) {
    temp_temp$$1 = JAM.call(sc_assq, null, [term2$$1, unify_subst_nboyer], JAM.policy.p1);
    if (temp_temp$$1 !== false) {
      return JAM.call(is_term_equal_nboyer, null, [term1, temp_temp$$1.cdr], JAM.policy.p1);
    } else {
      if (JAM.call(sc_isNumber, null, [term2$$1], JAM.policy.p1)) {
        return JAM.call(sc_isEqual, null, [term1, term2$$1], JAM.policy.p1);
      } else {
        unify_subst_nboyer = JAM.new(sc_Pair, [JAM.new(sc_Pair, [term2$$1, term1], JAM.policy.p1), unify_subst_nboyer], JAM.policy.p1);
        return true;
      }
    }
  } else {
    if (!(term1 instanceof sc_Pair)) {
      return false;
    } else {
      if (term1.car === term2$$1.car) {
        lst1 = term1.cdr;
        lst2 = term2$$1.cdr;
        for (;true;) {
          if (lst1 === null) {
            return lst2 === null;
          } else {
            if (lst2 === null) {
              return false;
            } else {
              if (JAM.call(one_way_unify1_nboyer, null, [lst1.car, lst2.car], JAM.policy.p1) !== false) {
                lst1 = lst1.cdr;
                lst2 = lst2.cdr;
              } else {
                return false;
              }
            }
          }
        }
      } else {
        return false;
      }
    }
  }
  return;
}
function v73(lst$$5) {
  var sc_lst_14;
  var v272;
  if (lst$$5 === null) {
    v272 = null;
  } else {
    var v1170 = JAM.call(rewrite_nboyer, null, [lst$$5.car], JAM.policy.p1);
    sc_lst_14 = lst$$5.cdr;
    var v2162;
    if (sc_lst_14 === null) {
      v2162 = null;
    } else {
      v2162 = JAM.new(sc_Pair, [JAM.call(rewrite_nboyer, null, [sc_lst_14.car], JAM.policy.p1), JAM.call(rewrite_args_nboyer, null, [sc_lst_14.cdr], JAM.policy.p1)], JAM.policy.p1);
    }
    v272 = JAM.new(sc_Pair, [v1170, v2162], JAM.policy.p1);
  }
  return v272;
}
function v72(term$$5) {
  var term2;
  var sc_term_12;
  var lst$$4;
  var symbol_record$$1;
  var sc_lst_13;
  rewrite_count_nboyer = rewrite_count_nboyer + 1;
  if (!(term$$5 instanceof sc_Pair)) {
    return term$$5;
  } else {
    var v273 = term$$5.car;
    sc_lst_13 = term$$5.cdr;
    var v1777;
    if (sc_lst_13 === null) {
      v1777 = null;
    } else {
      v1777 = JAM.new(sc_Pair, [JAM.call(rewrite_nboyer, null, [sc_lst_13.car], JAM.policy.p1), JAM.call(rewrite_args_nboyer, null, [sc_lst_13.cdr], JAM.policy.p1)], JAM.policy.p1);
    }
    sc_term_12 = JAM.new(sc_Pair, [v273, v1777], JAM.policy.p1);
    symbol_record$$1 = term$$5.car;
    lst$$4 = symbol_record$$1[1];
    for (;true;) {
      if (lst$$4 === null) {
        return sc_term_12;
      } else {
        term2 = lst$$4.car.cdr.car;
        unify_subst_nboyer = null;
        if (JAM.call(one_way_unify1_nboyer, null, [sc_term_12, term2], JAM.policy.p1) !== false) {
          return JAM.call(rewrite_nboyer, null, [JAM.call(apply_subst_nboyer, null, [unify_subst_nboyer, lst$$4.car.cdr.cdr.car], JAM.policy.p1)], JAM.policy.p1);
        } else {
          lst$$4 = lst$$4.cdr;
        }
      }
    }
  }
  return;
}
function v71(sc_x_11, true_lst, false_lst) {
  var tmp1125;
  var x$$76;
  var tmp1126;
  var sc_x_8;
  var sc_tmp1125_9;
  var sc_tmp1126_10;
  for (;true;) {
    sc_tmp1126_10 = JAM.call(is_term_equal_nboyer, null, [sc_x_11, true_term_nboyer], JAM.policy.p1);
    var v2167;
    if (sc_tmp1126_10 !== false) {
      v2167 = sc_tmp1126_10;
    } else {
      v2167 = JAM.call(is_term_member_nboyer, null, [sc_x_11, true_lst], JAM.policy.p1);
    }
    if (v2167 !== false) {
      return true;
    } else {
      sc_tmp1125_9 = JAM.call(is_term_equal_nboyer, null, [sc_x_11, false_term_nboyer], JAM.policy.p1);
      var v2168;
      if (sc_tmp1125_9 !== false) {
        v2168 = sc_tmp1125_9;
      } else {
        v2168 = JAM.call(is_term_member_nboyer, null, [sc_x_11, false_lst], JAM.policy.p1);
      }
      if (v2168 !== false) {
        return false;
      } else {
        if (!(sc_x_11 instanceof sc_Pair)) {
          return false;
        } else {
          if (sc_x_11.car === if_constructor_nboyer) {
            sc_x_8 = sc_x_11.cdr.car;
            tmp1126 = JAM.call(is_term_equal_nboyer, null, [sc_x_8, true_term_nboyer], JAM.policy.p1);
            var v2169;
            if (tmp1126 !== false) {
              v2169 = tmp1126;
            } else {
              v2169 = JAM.call(is_term_member_nboyer, null, [sc_x_8, true_lst], JAM.policy.p1);
            }
            if (v2169 !== false) {
              sc_x_11 = sc_x_11.cdr.cdr.car;
            } else {
              x$$76 = sc_x_11.cdr.car;
              tmp1125 = JAM.call(is_term_equal_nboyer, null, [x$$76, false_term_nboyer], JAM.policy.p1);
              var v2170;
              if (tmp1125 !== false) {
                v2170 = tmp1125;
              } else {
                v2170 = JAM.call(is_term_member_nboyer, null, [x$$76, false_lst], JAM.policy.p1);
              }
              if (v2170 !== false) {
                sc_x_11 = sc_x_11.cdr.cdr.cdr.car;
              } else {
                if (JAM.call(tautologyp_nboyer, null, [sc_x_11.cdr.cdr.car, JAM.new(sc_Pair, [sc_x_11.cdr.car, true_lst], JAM.policy.p1), false_lst], JAM.policy.p1) !== false) {
                  false_lst = JAM.new(sc_Pair, [sc_x_11.cdr.car, false_lst], JAM.policy.p1);
                  sc_x_11 = sc_x_11.cdr.cdr.cdr.car;
                } else {
                  return false;
                }
              }
            }
          } else {
            return false;
          }
        }
      }
    }
  }
  return;
}
function v70(alist$$2, lst$$3) {
  var sc_lst_7;
  var v290;
  if (lst$$3 === null) {
    v290 = null;
  } else {
    var v1187 = JAM.call(apply_subst_nboyer, null, [alist$$2, lst$$3.car], JAM.policy.p1);
    sc_lst_7 = lst$$3.cdr;
    var v2173;
    if (sc_lst_7 === null) {
      v2173 = null;
    } else {
      v2173 = JAM.new(sc_Pair, [JAM.call(apply_subst_nboyer, null, [alist$$2, sc_lst_7.car], JAM.policy.p1), JAM.call(apply_subst_lst_nboyer, null, [alist$$2, sc_lst_7.cdr], JAM.policy.p1)], JAM.policy.p1);
    }
    v290 = JAM.new(sc_Pair, [v1187, v2173], JAM.policy.p1);
  }
  return v290;
}
function v69(alist$$1, term$$4) {
  var lst$$2;
  var temp_temp;
  var v291;
  if (!(term$$4 instanceof sc_Pair)) {
    temp_temp = JAM.call(sc_assq, null, [term$$4, alist$$1], JAM.policy.p1);
    var v1785;
    if (temp_temp !== false) {
      v1785 = temp_temp.cdr;
    } else {
      v1785 = term$$4;
    }
    v291 = v1785;
  } else {
    var v1190 = term$$4.car;
    lst$$2 = term$$4.cdr;
    var v2175;
    if (lst$$2 === null) {
      v2175 = null;
    } else {
      v2175 = JAM.new(sc_Pair, [JAM.call(apply_subst_nboyer, null, [alist$$1, lst$$2.car], JAM.policy.p1), JAM.call(apply_subst_lst_nboyer, null, [alist$$1, lst$$2.cdr], JAM.policy.p1)], JAM.policy.p1);
    }
    v291 = JAM.new(sc_Pair, [v1190, v2175], JAM.policy.p1);
  }
  return v291;
}
function v68(alist) {
  var sc_alist_6;
  var term$$3;
  var v292;
  if (alist === null) {
    v292 = null;
  } else {
    var v1786 = alist.car.car;
    term$$3 = alist.car.cdr;
    var v2487;
    if (!(term$$3 instanceof sc_Pair)) {
      v2487 = term$$3;
    } else {
      v2487 = JAM.new(sc_Pair, [JAM.call(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer, null, [term$$3.car], JAM.policy.p1), JAM.call(translate_args_nboyer, null, [term$$3.cdr], JAM.policy.p1)], JAM.policy.p1);
    }
    var v1193 = JAM.new(sc_Pair, [v1786, v2487], JAM.policy.p1);
    sc_alist_6 = alist.cdr;
    var v2177;
    if (sc_alist_6 === null) {
      v2177 = null;
    } else {
      v2177 = JAM.new(sc_Pair, [JAM.new(sc_Pair, [sc_alist_6.car.car, JAM.call(translate_term_nboyer, null, [sc_alist_6.car.cdr], JAM.policy.p1)], JAM.policy.p1), JAM.call(translate_alist_nboyer, null, [sc_alist_6.cdr], JAM.policy.p1)], JAM.policy.p1);
    }
    v292 = JAM.new(sc_Pair, [v1193, v2177], JAM.policy.p1);
  }
  return v292;
}
function v67(sym$$4) {
  var r;
  var x$$75;
  x$$75 = JAM.call(sc_assq, null, [sym$$4, BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer], JAM.policy.p1);
  var v1196;
  if (x$$75 !== false) {
    v1196 = x$$75.cdr;
  } else {
    r = [sym$$4, null];
    BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer = JAM.new(sc_Pair, [JAM.new(sc_Pair, [sym$$4, r], JAM.policy.p1), BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer], JAM.policy.p1);
    v1196 = r;
  }
  return v1196;
}
function v66(term$$2) {
  var optrOpnd;
  var tail1131;
  var L1127;
  var falseHead1130;
  var symbol_record;
  if (!(term$$2 instanceof sc_Pair)) {
    return term$$2;
  } else {
    falseHead1130 = JAM.new(sc_Pair, [null, null], JAM.policy.p1);
    L1127 = term$$2.cdr;
    tail1131 = falseHead1130;
    var v294 = !(L1127 === null);
    for (;v294;) {
      var v293 = tail1131;
      var v3735 = JAM.new(sc_Pair, [JAM.call(untranslate_term_nboyer, null, [L1127.car], JAM.policy.p1), null], JAM.policy.p1);
      v293.cdr = v3735;
      tail1131 = tail1131.cdr;
      L1127 = L1127.cdr;
      v294 = !(L1127 === null);
    }
    optrOpnd = falseHead1130.cdr;
    symbol_record = term$$2.car;
    return JAM.new(sc_Pair, [symbol_record[0], optrOpnd], JAM.policy.p1);
  }
  return;
}
function v65(lst$$1) {
  var sc_lst_5;
  var term$$1;
  var v297;
  if (lst$$1 === null) {
    v297 = null;
  } else {
    term$$1 = lst$$1.car;
    var v2178;
    if (!(term$$1 instanceof sc_Pair)) {
      v2178 = term$$1;
    } else {
      v2178 = JAM.new(sc_Pair, [JAM.call(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer, null, [term$$1.car], JAM.policy.p1), JAM.call(translate_args_nboyer, null, [term$$1.cdr], JAM.policy.p1)], JAM.policy.p1);
    }
    var v1201 = v2178;
    sc_lst_5 = lst$$1.cdr;
    var v2179;
    if (sc_lst_5 === null) {
      v2179 = null;
    } else {
      v2179 = JAM.new(sc_Pair, [JAM.call(translate_term_nboyer, null, [sc_lst_5.car], JAM.policy.p1), JAM.call(translate_args_nboyer, null, [sc_lst_5.cdr], JAM.policy.p1)], JAM.policy.p1);
    }
    v297 = JAM.new(sc_Pair, [v1201, v2179], JAM.policy.p1);
  }
  return v297;
}
function v64(term) {
  var lst;
  var v298;
  if (!(term instanceof sc_Pair)) {
    v298 = term;
  } else {
    var v1204 = JAM.call(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer, null, [term.car], JAM.policy.p1);
    lst = term.cdr;
    var v2180;
    if (lst === null) {
      v2180 = null;
    } else {
      v2180 = JAM.new(sc_Pair, [JAM.call(translate_term_nboyer, null, [lst.car], JAM.policy.p1), JAM.call(translate_args_nboyer, null, [lst.cdr], JAM.policy.p1)], JAM.policy.p1);
    }
    v298 = JAM.new(sc_Pair, [v1204, v2180], JAM.policy.p1);
  }
  return v298;
}
function v63() {
  return true;
}
function v62() {
  return true;
}
function v61() {
  function v60(rewrites) {
    if (JAM.call(sc_isNumber, null, [rewrites], JAM.policy.p1)) {
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
          return true;
      }
    } else {
      return false;
    }
    return;
  }
  function v59() {
    return JAM.call(BgL_testzd2boyerzd2, null, [n$$10], JAM.policy.p1);
  }
  var args$$5 = null;
  var sc_tmp = arguments.length - 1;
  var v302 = sc_tmp >= 0;
  for (;v302;) {
    args$$5 = JAM.call(sc_cons, null, [arguments[sc_tmp], args$$5], JAM.policy.p1);
    sc_tmp = sc_tmp - 1;
    v302 = sc_tmp >= 0;
  }
  var n$$10;
  var v1792;
  if (args$$5 === null) {
    v1792 = 0;
  } else {
    v1792 = args$$5.car;
  }
  n$$10 = v1792;
  JAM.call(BgL_setupzd2boyerzd2, null, [], JAM.policy.p1);
  return JAM.call(BgL_runzd2benchmarkzd2, null, ["nboyer" + JAM.call(sc_number2string, null, [n$$10], JAM.policy.p1), 1, v59, v60], JAM.policy.p1);
}
function v58() {
  if (JAM.call(this.charAt, this, [0], JAM.policy.p1) === sc_SYMBOL_PREFIX) {
    return JAM.call(this.slice, this, [1], JAM.policy.p1);
  } else {
    if (JAM.call(this.charAt, this, [0], JAM.policy.p1) === sc_KEYWORD_PREFIX) {
      return ":" + JAM.call(this.slice, this, [1], JAM.policy.p1);
    } else {
      return'"' + JAM.call(sc_escapeWriteString, null, [this], JAM.policy.p1) + '"';
    }
  }
  return;
}
function v57() {
  if (JAM.call(this.charAt, this, [0], JAM.policy.p1) === sc_SYMBOL_PREFIX) {
    return JAM.call(this.slice, this, [1], JAM.policy.p1);
  } else {
    if (JAM.call(this.charAt, this, [0], JAM.policy.p1) === sc_KEYWORD_PREFIX) {
      return ":" + JAM.call(this.slice, this, [1], JAM.policy.p1);
    } else {
      return JAM.call(this.toString, this, [], JAM.policy.p1);
    }
  }
  return;
}
function v56() {
  function v55(sym$$3) {
    counter = counter + 1;
    if (!sym$$3) {
      sym$$3 = sc_SYMBOL_PREFIX;
    }
    return sym$$3 + "s" + counter + "~" + "^sC-GeNsYm ";
  }
  var counter = 1E3;
  return v55;
}
function v54(symb$$4) {
  if (this[symb$$4 + "use"]) {
    var nb$$5 = this[symb$$4 + "nb"];
    var v1215 = this[symb$$4];
    JAM.set(this, symb$$4, this[symb$$4] - 1);
    if (v1215 === 0) {
      delete this[symb$$4];
      delete this[symb$$4 + "nb"];
      delete this[symb$$4 + "use"];
    }
    return "#" + nb$$5 + "#";
  }
  var v1216 = this[symb$$4];
  JAM.set(this, symb$$4, this[symb$$4] - 1);
  if (v1216 === 0) {
    delete this[symb$$4];
    delete this[symb$$4 + "nb"];
    delete this[symb$$4 + "use"];
  }
  var res$$28 = "";
  if (this[symb$$4] !== undefined) {
    JAM.set(this, symb$$4 + "use", true);
    res$$28 = res$$28 + ("#" + this[symb$$4 + "nb"] + "=");
  }
  res$$28 = res$$28 + "#(";
  var i$$46 = 0;
  var v324 = i$$46 < this.length;
  for (;v324;) {
    res$$28 = res$$28 + JAM.call(sc_genToWriteCircleString, null, [this[i$$46], symb$$4], JAM.policy.p1);
    if (i$$46 < this.length - 1) {
      res$$28 = res$$28 + " ";
    }
    i$$46 = i$$46 + 1;
    v324 = i$$46 < this.length;
  }
  res$$28 = res$$28 + ")";
  return res$$28;
}
function v53(symb$$3, inList) {
  if (this[symb$$3 + "use"]) {
    var nb$$4 = this[symb$$3 + "nb"];
    var v1225 = this[symb$$3];
    JAM.set(this, symb$$3, this[symb$$3] - 1);
    if (v1225 === 0) {
      delete this[symb$$3];
      delete this[symb$$3 + "nb"];
      delete this[symb$$3 + "use"];
    }
    if (inList) {
      return ". #" + nb$$4 + "#";
    } else {
      return "#" + nb$$4 + "#";
    }
  }
  var v1226 = this[symb$$3];
  JAM.set(this, symb$$3, this[symb$$3] - 1);
  if (v1226 === 0) {
    delete this[symb$$3];
    delete this[symb$$3 + "nb"];
    delete this[symb$$3 + "use"];
  }
  var res$$27 = "";
  if (this[symb$$3] !== undefined) {
    JAM.set(this, symb$$3 + "use", true);
    if (inList) {
      res$$27 = res$$27 + (". #" + this[symb$$3 + "nb"] + "=");
    } else {
      res$$27 = res$$27 + ("#" + this[symb$$3 + "nb"] + "=");
    }
    inList = false;
  }
  if (!inList) {
    res$$27 = res$$27 + "(";
  }
  res$$27 = res$$27 + JAM.call(sc_genToWriteCircleString, null, [this.car, symb$$3], JAM.policy.p1);
  if (JAM.call(sc_isPair, null, [this.cdr], JAM.policy.p1)) {
    var v1233 = res$$27;
    var v2189 = this.cdr;
    res$$27 = v1233 + (" " + JAM.call(v2189.sc_toWriteCircleString, v2189, [symb$$3, true], JAM.policy.p1));
  } else {
    if (this.cdr !== null) {
      res$$27 = res$$27 + (" . " + JAM.call(sc_genToWriteCircleString, null, [this.cdr, symb$$3], JAM.policy.p1));
    }
  }
  if (!inList) {
    res$$27 = res$$27 + ")";
  }
  return res$$27;
}
function v52() {
  return;
}
function v51(s$$20) {
  throw "don't write on ErrorPort!";
}
function v50() {
  return JAM.call(sc_jsstring2string, null, [this.res], JAM.policy.p1);
}
function v49(s$$19) {
  this.res = this.res + s$$19;
  return;
}
function v48() {
  return;
}
function v47(obj$$17) {
  return;
}
function v46() {
  function readList(listBeginType) {
    function matchesPeer(open$$2, close) {
      var v1803 = open$$2 === 1;
      if (v1803) {
        v1803 = close === 2;
      }
      var v1239 = v1803;
      if (!v1239) {
        var v1804 = open$$2 === 3;
        if (v1804) {
          v1804 = close === 4;
        }
        v1239 = v1804;
      }
      var v342 = v1239;
      if (!v342) {
        var v1240 = open$$2 === 5;
        if (v1240) {
          v1240 = close === 6;
        }
        v342 = v1240;
      }
      return v342;
    }
    var res$$25 = null;
    for (;true;) {
      var token$$5 = JAM.call(tokenizer$$1.peekToken, tokenizer$$1, [], JAM.policy.p1);
      var v349 = token$$5.type;
      introspect(JAM.policy.p1) {
        switch(v349) {
          case 2:
          ;
          case 4:
          ;
          case 6:
            var v1242 = token$$5.type;
            var v344 = JAM.call(matchesPeer, null, [listBeginType, v1242], JAM.policy.p1);
            if (v344) {
              JAM.call(tokenizer$$1.readToken, tokenizer$$1, [], JAM.policy.p1);
              return JAM.call(sc_reverseBang, null, [res$$25], JAM.policy.p1);
            } else {
              var v1243 = "closing par doesn't match: " + listBeginType;
              var v343 = v1243 + " ";
              throw v343 + listEndType;
            }
          ;
          case 0:
            throw "unexpected end of file";;
          case 10:
            JAM.call(tokenizer$$1.readToken, tokenizer$$1, [], JAM.policy.p1);
            var cdr$$3 = JAM.call(this.read, this, [], JAM.policy.p1);
            var par = JAM.call(tokenizer$$1.readToken, tokenizer$$1, [], JAM.policy.p1);
            var v1806 = par.type;
            var v1244 = JAM.call(matchesPeer, null, [listBeginType, v1806], JAM.policy.p1);
            var v347 = !v1244;
            if (v347) {
              var v1245 = "closing par doesn't match: " + listBeginType;
              var v345 = v1245 + " ";
              var v346 = par.type;
              throw v345 + v346;
            } else {
              return JAM.call(sc_reverseAppendBang, null, [res$$25, cdr$$3], JAM.policy.p1);
            }
          ;
          default:
            var v348 = JAM.call(this.read, this, [], JAM.policy.p1);
            res$$25 = JAM.call(sc_cons, null, [v348, res$$25], JAM.policy.p1);
        }
      }
    }
    return;
  }
  function readVector() {
    var a$$11 = JAM.new(Array, [], JAM.policy.p1);
    for (;true;) {
      var token$$6 = JAM.call(tokenizer$$1.peekToken, tokenizer$$1, [], JAM.policy.p1);
      var v351 = token$$6.type;
      introspect(JAM.policy.p1) {
        switch(v351) {
          case 2:
            JAM.call(tokenizer$$1.readToken, tokenizer$$1, [], JAM.policy.p1);
            return a$$11;
          default:
            var v350 = JAM.call(this.read, this, [], JAM.policy.p1);
            JAM.call(a$$11.push, a$$11, [v350], JAM.policy.p1);
        }
      }
    }
    return;
  }
  function storeRefence(nb$$2) {
    var tmp$$18 = JAM.call(this.read, this, [], JAM.policy.p1);
    JAM.set(this.backref, nb$$2, tmp$$18);
    return tmp$$18;
  }
  function readReference(nb$$3) {
    if (nb$$3 in this.backref) {
      return this.backref[nb$$3];
    } else {
      throw "bad reference: " + nb$$3;
    }
    return;
  }
  var tokenizer$$1 = this.tokenizer;
  var token$$4 = JAM.call(tokenizer$$1.readToken, tokenizer$$1, [], JAM.policy.p1);
  if (token$$4.type === 13) {
    throw token$$4.val;
  }
  var v365 = token$$4.type;
  introspect(JAM.policy.p1) {
    switch(v365) {
      case 1:
      ;
      case 3:
      ;
      case 5:
        var v356 = token$$4.type;
        return JAM.call(readList.call, readList, [this, v356], JAM.policy.p1);
      case 8:
        var v1248 = JAM.call(this.read, this, [], JAM.policy.p1);
        var v357 = JAM.call(sc_cons, null, [v1248, null], JAM.policy.p1);
        return JAM.call(sc_cons, null, ["quote", v357], JAM.policy.p1);
      case 11:
        var v358 = token$$4.val;
        return JAM.call(sc_jsstring2string, null, [v358], JAM.policy.p1);
      case 20:
        var v359 = token$$4.val;
        return JAM.new(sc_Char, [v359], JAM.policy.p1);
      case 14:
        return JAM.call(readVector.call, readVector, [this], JAM.policy.p1);
      case 18:
        var v360 = token$$4.val;
        return JAM.call(readReference.call, readReference, [this, v360], JAM.policy.p1);
      case 19:
        var v361 = token$$4.val;
        return JAM.call(storeRefence.call, storeRefence, [this, v361], JAM.policy.p1);
      case 9:
        var v362 = token$$4.val;
        return JAM.call(sc_jsstring2symbol, null, [v362], JAM.policy.p1);
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
        var v1807 = token$$4.type;
        var v1249 = "unexpected token " + v1807;
        var v363 = v1249 + " ";
        var v364 = token$$4.val;
        throw v363 + v364;;
    }
  }
  return;
}
function v45() {
  function isNumberChar(c$$15) {
    var v366 = c$$15 >= "0";
    if (v366) {
      v366 = c$$15 <= "9";
    }
    return v366;
  }
  function isIdOrNumberChar(c$$16) {
    var v367 = JAM.call(SC_ID_CLASS.indexOf, SC_ID_CLASS, [c$$16], JAM.policy.p1) != -1;
    if (!v367) {
      var v1251 = c$$16 >= "0";
      if (v1251) {
        v1251 = c$$16 <= "9";
      }
      v367 = v1251;
    }
    return v367;
  }
  function isWhitespace(c$$17) {
    var v2191 = c$$17 === " ";
    if (!v2191) {
      v2191 = c$$17 === "\r";
    }
    var v1808 = v2191;
    if (!v1808) {
      v1808 = c$$17 === "\n";
    }
    var v1253 = v1808;
    if (!v1253) {
      v1253 = c$$17 === "\t";
    }
    var v368 = v1253;
    if (!v368) {
      v368 = c$$17 === "\f";
    }
    return v368;
  }
  function isWhitespaceOrEOF(c$$18) {
    var v369 = JAM.call(isWhitespace, null, [c$$18], JAM.policy.p1);
    if (!v369) {
      v369 = c$$18 === SC_EOF_OBJECT;
    }
    return v369;
  }
  function readString() {
    res = "";
    for (;true;) {
      var c$$19 = JAM.call(port$$1.readChar, port$$1, [], JAM.policy.p1);
      introspect(JAM.policy.p1) {
        switch(c$$19) {
          case '"':
            return JAM.new(sc_Token, [11, res], JAM.policy.p1);
          case "\\":
            var tmp$$16 = JAM.call(port$$1.readChar, port$$1, [], JAM.policy.p1);
            introspect(JAM.policy.p1) {
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
                  for (;true;) {
                    var hexC = JAM.call(port$$1.peekChar, port$$1, [], JAM.policy.p1);
                    var v1256 = hexC >= "0";
                    if (v1256) {
                      v1256 = hexC <= "9";
                    }
                    var v378 = v1256;
                    if (v378) {
                      JAM.call(port$$1.readChar, port$$1, [], JAM.policy.p1);
                      var v1257 = nb * 16;
                      var v1258 = JAM.call(hexC.charCodeAt, hexC, [0], JAM.policy.p1);
                      var v370 = v1257 + v1258;
                      var v371 = JAM.call("0".charCodeAt, "0", [0], JAM.policy.p1);
                      nb = v370 - v371;
                    } else {
                      var v1259 = hexC >= "a";
                      if (v1259) {
                        v1259 = hexC <= "f";
                      }
                      var v377 = v1259;
                      if (v377) {
                        JAM.call(port$$1.readChar, port$$1, [], JAM.policy.p1);
                        var v1260 = nb * 16;
                        var v1261 = JAM.call(hexC.charCodeAt, hexC, [0], JAM.policy.p1);
                        var v372 = v1260 + v1261;
                        var v373 = JAM.call("a".charCodeAt, "a", [0], JAM.policy.p1);
                        nb = v372 - v373;
                      } else {
                        var v1262 = hexC >= "A";
                        if (v1262) {
                          v1262 = hexC <= "F";
                        }
                        var v376 = v1262;
                        if (v376) {
                          JAM.call(port$$1.readChar, port$$1, [], JAM.policy.p1);
                          var v1263 = nb * 16;
                          var v1264 = JAM.call(hexC.charCodeAt, hexC, [0], JAM.policy.p1);
                          var v374 = v1263 + v1264;
                          var v375 = JAM.call("A".charCodeAt, "A", [0], JAM.policy.p1);
                          nb = v374 - v375;
                        } else {
                          var v1265 = res;
                          var v1266 = JAM.call(String.fromCharCode, String, [nb], JAM.policy.p1);
                          res = v1265 + v1266;
                          break;
                        }
                      }
                    }
                  }
                  break;
                default:
                  var v380 = tmp$$16 === SC_EOF_OBJECT;
                  if (v380) {
                    var v379 = "unclosed string-literal" + res;
                    return JAM.new(sc_Token, [13, v379], JAM.policy.p1);
                  }
                  res = res + tmp$$16;
              }
            }
            break;
          default:
            var v382 = c$$19 === SC_EOF_OBJECT;
            if (v382) {
              var v381 = "unclosed string-literal" + res;
              return JAM.new(sc_Token, [13, v381], JAM.policy.p1);
            }
            res = res + c$$19;
        }
      }
    }
    return;
  }
  function readIdOrNumber(firstChar) {
    var res$$23 = firstChar;
    var v383 = JAM.call(isIdOrNumberChar, null, [JAM.call(port$$1.peekChar, port$$1, [], JAM.policy.p1)], JAM.policy.p1);
    for (;v383;) {
      res$$23 = res$$23 + JAM.call(port$$1.readChar, port$$1, [], JAM.policy.p1);
      v383 = JAM.call(isIdOrNumberChar, null, [JAM.call(port$$1.peekChar, port$$1, [], JAM.policy.p1)], JAM.policy.p1);
    }
    if (JAM.call(isNaN, null, [res$$23], JAM.policy.p1)) {
      return JAM.new(sc_Token, [9, res$$23], JAM.policy.p1);
    } else {
      return JAM.new(sc_Token, [12, res$$23 - 0], JAM.policy.p1);
    }
    return;
  }
  function skipWhitespaceAndComments() {
    var done = false;
    var v389 = !done;
    for (;v389;) {
      done = true;
      var v386 = JAM.call(isWhitespace, null, [JAM.call(port$$1.peekChar, port$$1, [], JAM.policy.p1)], JAM.policy.p1);
      for (;v386;) {
        JAM.call(port$$1.readChar, port$$1, [], JAM.policy.p1);
        v386 = JAM.call(isWhitespace, null, [JAM.call(port$$1.peekChar, port$$1, [], JAM.policy.p1)], JAM.policy.p1);
      }
      if (JAM.call(port$$1.peekChar, port$$1, [], JAM.policy.p1) === ";") {
        JAM.call(port$$1.readChar, port$$1, [], JAM.policy.p1);
        done = false;
        for (;true;) {
          curChar = JAM.call(port$$1.readChar, port$$1, [], JAM.policy.p1);
          var v1274 = curChar === SC_EOF_OBJECT;
          if (!v1274) {
            v1274 = curChar === "\n";
          }
          if (v1274) {
            break;
          }
        }
      }
      v389 = !done;
    }
    return;
  }
  function readSharp() {
    var c$$20 = JAM.call(port$$1.readChar, port$$1, [], JAM.policy.p1);
    if (JAM.call(isWhitespace, null, [c$$20], JAM.policy.p1)) {
      return JAM.new(sc_Token, [13, "bad #-pattern0."], JAM.policy.p1);
    }
    if (JAM.call(isNumberChar, null, [c$$20], JAM.policy.p1)) {
      var nb$$1 = c$$20 - 0;
      var v393 = JAM.call(isNumberChar, null, [JAM.call(port$$1.peekChar, port$$1, [], JAM.policy.p1)], JAM.policy.p1);
      for (;v393;) {
        nb$$1 = nb$$1 * 10 + (JAM.call(port$$1.readChar, port$$1, [], JAM.policy.p1) - 0);
        v393 = JAM.call(isNumberChar, null, [JAM.call(port$$1.peekChar, port$$1, [], JAM.policy.p1)], JAM.policy.p1);
      }
      var v395 = JAM.call(port$$1.readChar, port$$1, [], JAM.policy.p1);
      introspect(JAM.policy.p1) {
        switch(v395) {
          case "#":
            return JAM.new(sc_Token, [18, nb$$1], JAM.policy.p1);
          case "=":
            return JAM.new(sc_Token, [19, nb$$1], JAM.policy.p1);
          default:
            var v394 = "bad #-pattern1." + nb$$1;
            return JAM.new(sc_Token, [13, v394], JAM.policy.p1);
        }
      }
    }
    if (c$$20 === "(") {
      return JAM.new(sc_Token, [14], JAM.policy.p1);
    }
    if (c$$20 === "\\") {
      var tmp$$17 = "";
      var v398 = !JAM.call(isWhitespaceOrEOF, null, [JAM.call(port$$1.peekChar, port$$1, [], JAM.policy.p1)], JAM.policy.p1);
      for (;v398;) {
        tmp$$17 = tmp$$17 + JAM.call(port$$1.readChar, port$$1, [], JAM.policy.p1);
        v398 = !JAM.call(isWhitespaceOrEOF, null, [JAM.call(port$$1.peekChar, port$$1, [], JAM.policy.p1)], JAM.policy.p1);
      }
      var v404 = tmp$$17.length;
      introspect(JAM.policy.p1) {
        switch(v404) {
          case 0:
            var v1282 = port$$1.peekChar;
            var v400 = JAM.call(sc_isEOFObject, null, [v1282], JAM.policy.p1);
            if (v400) {
              return JAM.new(sc_Token, [13, "bad #-pattern2."], JAM.policy.p1);
            } else {
              var v399 = JAM.call(port$$1.readChar, port$$1, [], JAM.policy.p1);
              return JAM.new(sc_Token, [20, v399], JAM.policy.p1);
            }
          ;
          case 1:
            return JAM.new(sc_Token, [20, tmp$$17], JAM.policy.p1);
          default:
            var v401 = sc_Char.readable2char;
            var v402 = JAM.call(tmp$$17.toLowerCase, tmp$$17, [], JAM.policy.p1);
            var entry$$1 = v401[v402];
            if (entry$$1) {
              return JAM.new(sc_Token, [20, entry$$1], JAM.policy.p1);
            } else {
              var v403 = "unknown character description: #\\" + tmp$$17;
              return JAM.new(sc_Token, [13, v403], JAM.policy.p1);
            }
          ;
        }
      }
    }
    var res$$24;
    var needing;
    introspect(JAM.policy.p1) {
      switch(c$$20) {
        case "t":
          res$$24 = JAM.new(sc_Token, [15, true], JAM.policy.p1);
          needing = "";
          break;
        case "f":
          res$$24 = JAM.new(sc_Token, [16, false], JAM.policy.p1);
          needing = "";
          break;
        case "u":
          res$$24 = JAM.new(sc_Token, [17, undefined], JAM.policy.p1);
          needing = "nspecified";
          break;
        default:
          var v406 = "bad #-pattern3: " + c$$20;
          return JAM.new(sc_Token, [13, v406], JAM.policy.p1);
      }
    }
    for (;true;) {
      c$$20 = JAM.call(port$$1.peekChar, port$$1, [], JAM.policy.p1);
      var v1813 = JAM.call(isWhitespaceOrEOF, null, [c$$20], JAM.policy.p1);
      if (!v1813) {
        v1813 = c$$20 === ")";
      }
      var v1283 = v1813;
      if (v1283) {
        v1283 = needing == "";
      }
      if (v1283) {
        return res$$24;
      } else {
        var v1284 = JAM.call(isWhitespace, null, [c$$20], JAM.policy.p1);
        if (!v1284) {
          v1284 = needing == "";
        }
        if (v1284) {
          return JAM.new(sc_Token, [13, "bad #-pattern4 " + c$$20 + " " + needing], JAM.policy.p1);
        } else {
          if (JAM.call(needing.charAt, needing, [0], JAM.policy.p1) == c$$20) {
            JAM.call(port$$1.readChar, port$$1, [], JAM.policy.p1);
            needing = JAM.call(needing.slice, needing, [1], JAM.policy.p1);
          } else {
            return JAM.new(sc_Token, [13, "bad #-pattern5"], JAM.policy.p1);
          }
        }
      }
    }
    return;
  }
  var port$$1 = this.port;
  JAM.call(skipWhitespaceAndComments, null, [], JAM.policy.p1);
  var curChar = JAM.call(port$$1.readChar, port$$1, [], JAM.policy.p1);
  if (curChar === SC_EOF_OBJECT) {
    return JAM.new(sc_Token, [0, curChar], JAM.policy.p1);
  }
  introspect(JAM.policy.p1) {
    switch(curChar) {
      case " ":
      ;
      case "\n":
      ;
      case "\t":
        return JAM.call(readWhitespace, null, [], JAM.policy.p1);
      case "(":
        return JAM.new(sc_Token, [1], JAM.policy.p1);
      case ")":
        return JAM.new(sc_Token, [2], JAM.policy.p1);
      case "{":
        return JAM.new(sc_Token, [3], JAM.policy.p1);
      case "}":
        return JAM.new(sc_Token, [4], JAM.policy.p1);
      case "[":
        return JAM.new(sc_Token, [5], JAM.policy.p1);
      case "]":
        return JAM.new(sc_Token, [6], JAM.policy.p1);
      case "'":
        return JAM.new(sc_Token, [8], JAM.policy.p1);
      case "#":
        return JAM.call(readSharp, null, [], JAM.policy.p1);
      case ".":
        var JSCompiler_inline_result$$0;
        JSCompiler_inline_label_readDot_1: {
          var v1287 = JAM.call(port$$1.peekChar, port$$1, [], JAM.policy.p1);
          var v412 = JAM.call(isWhitespace, null, [v1287], JAM.policy.p1);
          if (v412) {
            JSCompiler_inline_result$$0 = JAM.new(sc_Token, [10], JAM.policy.p1);
          } else {
            JSCompiler_inline_result$$0 = JAM.call(readIdOrNumber, null, ["."], JAM.policy.p1);
          }
        }
        return JSCompiler_inline_result$$0;
      case '"':
        return JAM.call(readString, null, [], JAM.policy.p1);
      default:
        var v413 = JAM.call(isIdOrNumberChar, null, [curChar], JAM.policy.p1);
        if (v413) {
          return JAM.call(readIdOrNumber, null, [curChar], JAM.policy.p1);
        }
        throw "unexpected character: " + curChar;;
    }
  }
  return;
}
function v44() {
  var tmp$$15 = JAM.call(this.peekToken, this, [], JAM.policy.p1);
  delete this.peeked;
  return tmp$$15;
}
function v43() {
  if (this.peeked) {
    return this.peeked;
  }
  var newToken = JAM.call(this.nextToken, this, [], JAM.policy.p1);
  this.peeked = newToken;
  return newToken;
}
function v42() {
  if (this.pos >= this.str.length) {
    return SC_EOF_OBJECT;
  }
  var v416 = this.str;
  var v417 = this.pos;
  this.pos = this.pos + 1;
  return JAM.call(v416.charAt, v416, [v417], JAM.policy.p1);
}
function v41() {
  return false;
}
function v40() {
  throw "can't read from error-port.";
}
function v39() {
  return;
}
function v38() {
  return true;
}
function v37() {
  var tmp$$14 = JAM.call(this.peekChar, this, [], JAM.policy.p1);
  delete this.peeked;
  return tmp$$14;
}
function v36() {
  if (!("peeked" in this)) {
    var v3736 = JAM.call(this.getNextChar, this, [], JAM.policy.p1);
    this.peeked = v3736;
  }
  return this.peeked;
}
function v35() {
  var o$$22 = this;
  for (;true;) {
    SC_TAIL_OBJECT.calls = o$$22.MAX_TAIL_CALLs - 1;
    var fun$$4 = o$$22.args.callee;
    var res$$21 = JAM.call(fun$$4.apply, fun$$4, [SC_TAIL_OBJECT, o$$22.args], JAM.policy.p1);
    if (res$$21 instanceof sc_Trampoline) {
      o$$22 = res$$21;
    } else {
      return res$$21;
    }
  }
  return;
}
function v34() {
  return "#{%hashtable}";
}
function v33() {
  return "#<struct" + JAM.call(sc_hash, null, [this], JAM.policy.p1) + ">";
}
function v32() {
  return JAM.call(this.sc_toWriteOrDisplayString, this, [sc_toWriteString], JAM.policy.p1);
}
function v31() {
  return JAM.call(this.sc_toWriteOrDisplayString, this, [sc_toDisplayString], JAM.policy.p1);
}
function v30(writeOrDisplay$$1) {
  if (this.length === 0) {
    return "#()";
  }
  var res$$17 = "#(" + JAM.call(writeOrDisplay$$1, null, [this[0]], JAM.policy.p1);
  var i$$28 = 1;
  var v426 = i$$28 < this.length;
  for (;v426;) {
    res$$17 = res$$17 + (" " + JAM.call(writeOrDisplay$$1, null, [this[i$$28]], JAM.policy.p1));
    i$$28 = i$$28 + 1;
    v426 = i$$28 < this.length;
  }
  res$$17 = res$$17 + ")";
  return res$$17;
}
function v29() {
  var entry = sc_Char.char2readable[this.val];
  if (entry) {
    return entry;
  } else {
    return "#\\" + this.val;
  }
  return;
}
function v28() {
  return this.val;
}
function v27() {
  return JAM.call(this.sc_toWriteOrDisplayString, this, [sc_toWriteString], JAM.policy.p1);
}
function v26() {
  return JAM.call(this.sc_toWriteOrDisplayString, this, [sc_toDisplayString], JAM.policy.p1);
}
function v25(writeOrDisplay) {
  var current = this;
  var res$$3 = "(";
  for (;true;) {
    res$$3 = res$$3 + JAM.call(writeOrDisplay, null, [current.car], JAM.policy.p1);
    if (JAM.call(sc_isPair, null, [current.cdr], JAM.policy.p1)) {
      res$$3 = res$$3 + " ";
      current = current.cdr;
    } else {
      if (current.cdr !== null) {
        res$$3 = res$$3 + (" . " + JAM.call(writeOrDisplay, null, [current.cdr], JAM.policy.p1));
        break;
      } else {
        break;
      }
    }
  }
  res$$3 = res$$3 + ")";
  return res$$3;
}
function v24() {
  return JAM.call(sc_toDisplayString, null, [this], JAM.policy.p1);
}
function v23() {
  JAM.call(BgL_nboyerzd2benchmarkzd2, null, [], JAM.policy.p1);
  return;
}
function v22() {
  JAM.call(BgL_earleyzd2benchmarkzd2, null, [], JAM.policy.p1);
  return;
}
function v21(runner$$2) {
  function RunNextSetup() {
    if (index$$40 < length$$12) {
      try {
        var v432 = suite$$1.benchmarks[index$$40];
        JAM.call(v432.Setup, v432, [], JAM.policy.p1);
      } catch (e$$4) {
        JAM.call(suite$$1.NotifyError, suite$$1, [e$$4], JAM.policy.p1);
        return null;
      }
      return RunNextBenchmark;
    }
    JAM.call(suite$$1.NotifyResult, suite$$1, [], JAM.policy.p1);
    return null;
  }
  function RunNextBenchmark() {
    try {
      data$$20 = JAM.call(suite$$1.RunSingleBenchmark, suite$$1, [suite$$1.benchmarks[index$$40], data$$20], JAM.policy.p1);
    } catch (e$$5) {
      JAM.call(suite$$1.NotifyError, suite$$1, [e$$5], JAM.policy.p1);
      return null;
    }
    var v435;
    if (data$$20 == null) {
      v435 = RunNextTearDown;
    } else {
      v435 = JAM.call(RunNextBenchmark, null, [], JAM.policy.p1);
    }
    return v435;
  }
  function RunNextTearDown() {
    try {
      var v1307 = suite$$1.benchmarks;
      var v1308 = index$$40;
      index$$40 = index$$40 + 1;
      var v436 = v1307[v1308];
      JAM.call(v436.TearDown, v436, [], JAM.policy.p1);
    } catch (e$$6) {
      JAM.call(suite$$1.NotifyError, suite$$1, [e$$6], JAM.policy.p1);
      return null;
    }
    return RunNextSetup;
  }
  JAM.call(BenchmarkSuite.ResetRNG, BenchmarkSuite, [], JAM.policy.p1);
  this.results = [];
  this.runner = runner$$2;
  var length$$12 = this.benchmarks.length;
  var index$$40 = 0;
  var suite$$1 = this;
  var data$$20;
  return JAM.call(RunNextSetup, null, [], JAM.policy.p1);
}
function v20(benchmark$$1, data$$18) {
  function Measure(data$$19) {
    var elapsed = 0;
    var start$$4 = JAM.new(Date, [], JAM.policy.p1);
    var i$$6 = 0;
    var v1309;
    if (doDeterministic$$1) {
      v1309 = i$$6 < benchmark$$1.deterministicIterations;
    } else {
      v1309 = elapsed < 1E3;
    }
    var v439 = v1309;
    for (;v439;) {
      JAM.call(benchmark$$1.run, benchmark$$1, [], JAM.policy.p1);
      elapsed = JAM.new(Date, [], JAM.policy.p1) - start$$4;
      i$$6 = i$$6 + 1;
      var v1310;
      if (doDeterministic$$1) {
        v1310 = i$$6 < benchmark$$1.deterministicIterations;
      } else {
        v1310 = elapsed < 1E3;
      }
      v439 = v1310;
    }
    if (data$$19 != null) {
      data$$19.runs = data$$19.runs + i$$6;
      data$$19.elapsed = data$$19.elapsed + elapsed;
    }
    return;
  }
  var config = BenchmarkSuite.config;
  var v441;
  if (config.doWarmup !== undefined) {
    v441 = config.doWarmup;
  } else {
    v441 = benchmark$$1.doWarmup;
  }
  var doWarmup$$1 = v441;
  var v442;
  if (config.doDeterministic !== undefined) {
    v442 = config.doDeterministic;
  } else {
    v442 = benchmark$$1.doDeterministic;
  }
  var doDeterministic$$1 = v442;
  var v1315 = !doWarmup$$1;
  if (v1315) {
    v1315 = data$$18 == null;
  }
  if (v1315) {
    data$$18 = {runs:0, elapsed:0};
  }
  if (data$$18 == null) {
    JAM.call(Measure, null, [null], JAM.policy.p1);
    return{runs:0, elapsed:0};
  } else {
    JAM.call(Measure, null, [data$$18], JAM.policy.p1);
    if (data$$18.runs < benchmark$$1.minIterations) {
      return data$$18;
    }
    var usec = data$$18.elapsed * 1E3 / data$$18.runs;
    var v447;
    if (benchmark$$1.rmsResult != null) {
      v447 = JAM.call(benchmark$$1.rmsResult, benchmark$$1, [], JAM.policy.p1);
    } else {
      v447 = 0;
    }
    var rms = v447;
    JAM.call(this.NotifyStep, this, [JAM.new(BenchmarkResult, [benchmark$$1, usec, rms], JAM.policy.p1)], JAM.policy.p1);
    return null;
  }
  return;
}
function v19(error$$1) {
  if (this.runner.NotifyError) {
    var v450 = this.runner;
    JAM.call(v450.NotifyError, v450, [this.name, error$$1], JAM.policy.p1);
  }
  if (this.runner.NotifyStep) {
    var v453 = this.runner;
    JAM.call(v453.NotifyStep, v453, [this.name], JAM.policy.p1);
  }
  return;
}
function v18(runner$$1) {
  var v456 = BenchmarkSuite.scores;
  JAM.call(v456.push, v456, [1], JAM.policy.p1);
  if (runner$$1.NotifyResult) {
    JAM.call(runner$$1.NotifyResult, runner$$1, [this.name, "Skipped"], JAM.policy.p1);
  }
  return;
}
function v17() {
  var mean = JAM.call(BenchmarkSuite.GeometricMeanTime, BenchmarkSuite, [this.results], JAM.policy.p1);
  var score$$1 = this.reference[0] / mean;
  var v461 = BenchmarkSuite.scores;
  JAM.call(v461.push, v461, [score$$1], JAM.policy.p1);
  if (this.runner.NotifyResult) {
    var formatted$$1 = JAM.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [100 * score$$1], JAM.policy.p1);
    var v463 = this.runner;
    JAM.call(v463.NotifyResult, v463, [this.name, formatted$$1], JAM.policy.p1);
  }
  if (this.reference.length == 2) {
    var meanLatency = JAM.call(BenchmarkSuite.GeometricMeanLatency, BenchmarkSuite, [this.results], JAM.policy.p1);
    if (meanLatency != 0) {
      var scoreLatency = this.reference[1] / meanLatency;
      var v468 = BenchmarkSuite.scores;
      JAM.call(v468.push, v468, [scoreLatency], JAM.policy.p1);
      if (this.runner.NotifyResult) {
        var formattedLatency = JAM.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [100 * scoreLatency], JAM.policy.p1);
        var v470 = this.runner;
        JAM.call(v470.NotifyResult, v470, [this.name + "Latency", formattedLatency], JAM.policy.p1);
      }
    }
  }
  return;
}
function v16(result$$2) {
  var v475 = this.results;
  JAM.call(v475.push, v475, [result$$2], JAM.policy.p1);
  if (this.runner.NotifyStep) {
    var v476 = this.runner;
    JAM.call(v476.NotifyStep, v476, [result$$2.benchmark.name], JAM.policy.p1);
  }
  return;
}
function v15(value$$29) {
  if (value$$29 > 100) {
    return JAM.call(value$$29.toFixed, value$$29, [0], JAM.policy.p1);
  } else {
    return JAM.call(value$$29.toPrecision, value$$29, [3], JAM.policy.p1);
  }
  return;
}
function v14(measurements$$1) {
  var log$$2 = 0;
  var hasLatencyResult = false;
  var i$$5 = 0;
  var v481 = i$$5 < measurements$$1.length;
  for (;v481;) {
    if (measurements$$1[i$$5].latency != 0) {
      log$$2 = log$$2 + JAM.call(Math.log, Math, [measurements$$1[i$$5].latency], JAM.policy.p1);
      hasLatencyResult = true;
    }
    i$$5 = i$$5 + 1;
    v481 = i$$5 < measurements$$1.length;
  }
  if (hasLatencyResult) {
    return JAM.call(Math.pow, Math, [Math.E, log$$2 / measurements$$1.length], JAM.policy.p1);
  } else {
    return 0;
  }
  return;
}
function v13(measurements) {
  var log$$1 = 0;
  var i$$4 = 0;
  var v484 = i$$4 < measurements.length;
  for (;v484;) {
    log$$1 = log$$1 + JAM.call(Math.log, Math, [measurements[i$$4].time], JAM.policy.p1);
    i$$4 = i$$4 + 1;
    v484 = i$$4 < measurements.length;
  }
  return JAM.call(Math.pow, Math, [Math.E, log$$1 / measurements.length], JAM.policy.p1);
}
function v12(numbers) {
  var log = 0;
  var i$$3 = 0;
  var v487 = i$$3 < numbers.length;
  for (;v487;) {
    log = log + JAM.call(Math.log, Math, [numbers[i$$3]], JAM.policy.p1);
    i$$3 = i$$3 + 1;
    v487 = i$$3 < numbers.length;
  }
  return JAM.call(Math.pow, Math, [Math.E, log / numbers.length], JAM.policy.p1);
}
function v11() {
  var result$$1 = 0;
  var suites$$1 = BenchmarkSuite.suites;
  var i$$2 = 0;
  var v490 = i$$2 < suites$$1.length;
  for (;v490;) {
    result$$1 = result$$1 + suites$$1[i$$2].benchmarks.length;
    i$$2 = i$$2 + 1;
    v490 = i$$2 < suites$$1.length;
  }
  return result$$1;
}
function v10(runner, skipBenchmarks$$1) {
  function RunStep() {
    var v1349 = continuation;
    if (!v1349) {
      v1349 = index$$39 < length$$11;
    }
    var v496 = v1349;
    for (;v496;) {
      if (continuation) {
        continuation = JAM.call(continuation, null, [], JAM.policy.p1);
      } else {
        var v491 = index$$39;
        index$$39 = index$$39 + 1;
        var suite = suites[v491];
        if (runner.NotifyStart) {
          JAM.call(runner.NotifyStart, runner, [suite.name], JAM.policy.p1);
        }
        if (JAM.call(skipBenchmarks$$1.indexOf, skipBenchmarks$$1, [suite.name], JAM.policy.p1) > -1) {
          JAM.call(suite.NotifySkipped, suite, [runner], JAM.policy.p1);
        } else {
          continuation = JAM.call(suite.RunStep, suite, [runner], JAM.policy.p1);
        }
      }
      var v1834 = continuation;
      if (v1834) {
        v1834 = typeof window != "undefined";
      }
      var v1351 = v1834;
      if (v1351) {
        v1351 = window.setTimeout;
      }
      if (v1351) {
        JAM.call(window.setTimeout, window, [RunStep, 25], JAM.policy.p1);
        return;
      }
      var v1352 = continuation;
      if (!v1352) {
        v1352 = index$$39 < length$$11;
      }
      v496 = v1352;
    }
    if (runner.NotifyScore) {
      var score = JAM.call(BenchmarkSuite.GeometricMean, BenchmarkSuite, [BenchmarkSuite.scores], JAM.policy.p1);
      var formatted = JAM.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [100 * score], JAM.policy.p1);
      JAM.call(runner.NotifyScore, runner, [formatted], JAM.policy.p1);
    }
    return;
  }
  var v500;
  if (typeof skipBenchmarks$$1 === "undefined") {
    v500 = [];
  } else {
    v500 = skipBenchmarks$$1;
  }
  skipBenchmarks$$1 = v500;
  var continuation = null;
  var suites = BenchmarkSuite.suites;
  var length$$11 = suites.length;
  BenchmarkSuite.scores = [];
  var index$$39 = 0;
  JAM.call(RunStep, null, [], JAM.policy.p1);
  return;
}
function v9() {
  function v8() {
    function v7() {
      seed = seed + 2127912214 + (seed << 12) & 4294967295;
      seed = (seed ^ 3345072700 ^ seed >>> 19) & 4294967295;
      seed = seed + 374761393 + (seed << 5) & 4294967295;
      seed = (seed + 3550635116 ^ seed << 9) & 4294967295;
      seed = seed + 4251993797 + (seed << 3) & 4294967295;
      seed = (seed ^ 3042594569 ^ seed >>> 16) & 4294967295;
      return(seed & 268435455) / 268435456;
    }
    var seed = 49734321;
    return v7;
  }
  var v508 = Math;
  var v3737 = JAM.call(v8, null, [], JAM.policy.p1);
  v508.random = v3737;
  return;
}
function v6(s$$2) {
  throw "Alert called with argument: " + s$$2;
}
function v5() {
  return this.time;
}
function v4() {
  var v2505 = performance.now;
  if (!v2505) {
    v2505 = performance.mozNow;
  }
  var v2200 = v2505;
  if (!v2200) {
    v2200 = performance.msNow;
  }
  var v1837 = v2200;
  if (!v1837) {
    v1837 = performance.oNow;
  }
  var v1366 = v1837;
  if (!v1366) {
    v1366 = performance.webkitNow;
  }
  var v509 = v1366;
  if (!v509) {
    v509 = Date.now;
  }
  return v509;
}
function Benchmark(name$$30, doWarmup, doDeterministic, deterministicIterations, run, setup, tearDown, rmsResult, minIterations) {
  function v1() {
    return;
  }
  function v0() {
    return;
  }
  this.name = name$$30;
  this.doWarmup = doWarmup;
  this.doDeterministic = doDeterministic;
  this.deterministicIterations = deterministicIterations;
  this.run = run;
  var v510;
  if (setup) {
    v510 = setup;
  } else {
    v510 = v0;
  }
  this.Setup = v510;
  var v511;
  if (tearDown) {
    v511 = tearDown;
  } else {
    v511 = v1;
  }
  this.TearDown = v511;
  var v512;
  if (rmsResult) {
    v512 = rmsResult;
  } else {
    v512 = null;
  }
  this.rmsResult = v512;
  var v513;
  if (minIterations) {
    v513 = minIterations;
  } else {
    v513 = 32;
  }
  this.minIterations = v513;
  return;
}
function BenchmarkResult(benchmark, time, latency) {
  this.benchmark = benchmark;
  this.time = time;
  this.latency = latency;
  return;
}
function BenchmarkSuite(name$$31, reference, benchmarks$$1) {
  this.name = name$$31;
  this.reference = reference;
  this.benchmarks = benchmarks$$1;
  var v514 = BenchmarkSuite.suites;
  JAM.call(v514.push, v514, [this], JAM.policy.p1);
  return;
}
function sc_print_debug() {
  JAM.call(sc_print.apply, sc_print, [null, arguments], JAM.policy.p1);
  return;
}
function sc_alert() {
  var len = arguments.length;
  var s$$3 = "";
  var i$$7;
  i$$7 = 0;
  var v515 = i$$7 < len;
  for (;v515;) {
    s$$3 = s$$3 + JAM.call(sc_toDisplayString, null, [arguments[i$$7]], JAM.policy.p1);
    i$$7 = i$$7 + 1;
    v515 = i$$7 < len;
  }
  return JAM.call(alert, null, [s$$3], JAM.policy.p1);
}
function sc_typeof(x$$48) {
  return typeof x$$48;
}
function sc_error() {
  var a = [JAM.call(sc_jsstring2symbol, null, ["*error*"], JAM.policy.p1)];
  var i$$8 = 0;
  var v518 = i$$8 < arguments.length;
  for (;v518;) {
    a[i$$8 + 1] = arguments[i$$8];
    i$$8 = i$$8 + 1;
    v518 = i$$8 < arguments.length;
  }
  throw a;
}
function sc_raise(obj$$16) {
  throw obj$$16;
}
function sc_withHandlerLambda(handler$$3, body) {
  try {
    return JAM.call(body, null, [], JAM.policy.p1);
  } catch (e$$7) {
    if (!e$$7._internalException) {
      return JAM.call(handler$$3, null, [e$$7], JAM.policy.p1);
    } else {
      throw e$$7;
    }
  }
  return;
}
function sc_putpropBang(sym, key$$14, val) {
  var ht = sc_properties[sym];
  if (!ht) {
    ht = JAM.new(Object, [], JAM.policy.p1);
    JAM.set(sc_properties, sym, ht);
  }
  JAM.set(ht, key$$14, val);
  return;
}
function sc_getprop(sym$$1, key$$15) {
  var ht$$1 = sc_properties[sym$$1];
  if (ht$$1) {
    if (key$$15 in ht$$1) {
      return ht$$1[key$$15];
    } else {
      return false;
    }
  } else {
    return false;
  }
  return;
}
function sc_rempropBang(sym$$2, key$$16) {
  var ht$$2 = sc_properties[sym$$2];
  if (ht$$2) {
    delete ht$$2[key$$16];
  }
  return;
}
function sc_any2String(o) {
  return JAM.call(jsstring2string, null, [JAM.call(sc_toDisplayString, null, [o], JAM.policy.p1)], JAM.policy.p1);
}
function sc_isEqv(o1, o2) {
  return o1 === o2;
}
function sc_isEq(o1$$1, o2$$1) {
  return o1$$1 === o2$$1;
}
function sc_isNumber(n$$1) {
  return typeof n$$1 === "number";
}
function sc_isComplex(n$$2) {
  return JAM.call(sc_isNumber, null, [n$$2], JAM.policy.p1);
}
function sc_isReal(n$$3) {
  return JAM.call(sc_isNumber, null, [n$$3], JAM.policy.p1);
}
function sc_isRational(n$$4) {
  return JAM.call(sc_isReal, null, [n$$4], JAM.policy.p1);
}
function sc_isInteger(n$$5) {
  return JAM.call(parseInt, null, [n$$5], JAM.policy.p1) === n$$5;
}
function sc_isExact(n$$6) {
  return false;
}
function sc_isInexact(n$$7) {
  return true;
}
function sc_equal(x$$49) {
  var i$$9 = 1;
  var v526 = i$$9 < arguments.length;
  for (;v526;) {
    if (x$$49 !== arguments[i$$9]) {
      return false;
    }
    i$$9 = i$$9 + 1;
    v526 = i$$9 < arguments.length;
  }
  return true;
}
function sc_less(x$$50) {
  var i$$10 = 1;
  var v528 = i$$10 < arguments.length;
  for (;v528;) {
    if (x$$50 >= arguments[i$$10]) {
      return false;
    }
    x$$50 = arguments[i$$10];
    i$$10 = i$$10 + 1;
    v528 = i$$10 < arguments.length;
  }
  return true;
}
function sc_greater(x$$51, y$$31) {
  var i$$11 = 1;
  var v530 = i$$11 < arguments.length;
  for (;v530;) {
    if (x$$51 <= arguments[i$$11]) {
      return false;
    }
    x$$51 = arguments[i$$11];
    i$$11 = i$$11 + 1;
    v530 = i$$11 < arguments.length;
  }
  return true;
}
function sc_lessEqual(x$$52, y$$32) {
  var i$$12 = 1;
  var v532 = i$$12 < arguments.length;
  for (;v532;) {
    if (x$$52 > arguments[i$$12]) {
      return false;
    }
    x$$52 = arguments[i$$12];
    i$$12 = i$$12 + 1;
    v532 = i$$12 < arguments.length;
  }
  return true;
}
function sc_greaterEqual(x$$53, y$$33) {
  var i$$13 = 1;
  var v534 = i$$13 < arguments.length;
  for (;v534;) {
    if (x$$53 < arguments[i$$13]) {
      return false;
    }
    x$$53 = arguments[i$$13];
    i$$13 = i$$13 + 1;
    v534 = i$$13 < arguments.length;
  }
  return true;
}
function sc_isZero(x$$54) {
  return x$$54 === 0;
}
function sc_isPositive(x$$55) {
  return x$$55 > 0;
}
function sc_isNegative(x$$56) {
  return x$$56 < 0;
}
function sc_isOdd(x$$57) {
  return x$$57 % 2 === 1;
}
function sc_isEven(x$$58) {
  return x$$58 % 2 === 0;
}
function sc_plus() {
  var sum = 0;
  var i$$14 = 0;
  var v537 = i$$14 < arguments.length;
  for (;v537;) {
    sum = sum + arguments[i$$14];
    i$$14 = i$$14 + 1;
    v537 = i$$14 < arguments.length;
  }
  return sum;
}
function sc_multi() {
  var product = 1;
  var i$$15 = 0;
  var v538 = i$$15 < arguments.length;
  for (;v538;) {
    product = product * arguments[i$$15];
    i$$15 = i$$15 + 1;
    v538 = i$$15 < arguments.length;
  }
  return product;
}
function sc_minus(x$$59) {
  if (arguments.length === 1) {
    return-x$$59;
  } else {
    var res$$1 = x$$59;
    var i$$16 = 1;
    var v539 = i$$16 < arguments.length;
    for (;v539;) {
      res$$1 = res$$1 - arguments[i$$16];
      i$$16 = i$$16 + 1;
      v539 = i$$16 < arguments.length;
    }
    return res$$1;
  }
  return;
}
function sc_div(x$$60) {
  if (arguments.length === 1) {
    return 1 / x$$60;
  } else {
    var res$$2 = x$$60;
    var i$$17 = 1;
    var v541 = i$$17 < arguments.length;
    for (;v541;) {
      res$$2 = res$$2 / arguments[i$$17];
      i$$17 = i$$17 + 1;
      v541 = i$$17 < arguments.length;
    }
    return res$$2;
  }
  return;
}
function sc_quotient(x$$61, y$$34) {
  return JAM.call(parseInt, null, [x$$61 / y$$34], JAM.policy.p1);
}
function sc_remainder(x$$62, y$$35) {
  return x$$62 % y$$35;
}
function sc_modulo(x$$63, y$$36) {
  var remainder = x$$63 % y$$36;
  if (remainder * y$$36 < 0) {
    return remainder + y$$36;
  } else {
    return remainder;
  }
  return;
}
function sc_euclid_gcd(a$$1, b) {
  var temp;
  if (a$$1 === 0) {
    return b;
  }
  if (b === 0) {
    return a$$1;
  }
  if (a$$1 < 0) {
    a$$1 = -a$$1;
  }
  if (b < 0) {
    b = -b;
  }
  if (b > a$$1) {
    temp = a$$1;
    a$$1 = b;
    b = temp;
  }
  for (;true;) {
    a$$1 = a$$1 % b;
    if (a$$1 === 0) {
      return b;
    }
    b = b % a$$1;
    if (b === 0) {
      return a$$1;
    }
  }
  return b;
}
function sc_gcd() {
  var gcd = 0;
  var i$$18 = 0;
  var v553 = i$$18 < arguments.length;
  for (;v553;) {
    gcd = JAM.call(sc_euclid_gcd, null, [gcd, arguments[i$$18]], JAM.policy.p1);
    i$$18 = i$$18 + 1;
    v553 = i$$18 < arguments.length;
  }
  return gcd;
}
function sc_lcm() {
  var lcm = 1;
  var i$$19 = 0;
  var v555 = i$$19 < arguments.length;
  for (;v555;) {
    var f = JAM.call(Math.round, Math, [arguments[i$$19] / JAM.call(sc_euclid_gcd, null, [arguments[i$$19], lcm], JAM.policy.p1)], JAM.policy.p1);
    lcm = lcm * JAM.call(Math.abs, Math, [f], JAM.policy.p1);
    i$$19 = i$$19 + 1;
    v555 = i$$19 < arguments.length;
  }
  return lcm;
}
function sc_exact2inexact(x$$64) {
  return x$$64;
}
function sc_inexact2exact(x$$65) {
  return x$$65;
}
function sc_number2jsstring(x$$66, radix) {
  if (radix) {
    return JAM.call(x$$66.toString, x$$66, [radix], JAM.policy.p1);
  } else {
    return JAM.call(x$$66.toString, x$$66, [], JAM.policy.p1);
  }
  return;
}
function sc_jsstring2number(s$$4, radix$$1) {
  if (s$$4 === "") {
    return false;
  }
  if (radix$$1) {
    var t = JAM.call(parseInt, null, [s$$4, radix$$1], JAM.policy.p1);
    var v1411 = !t;
    if (v1411) {
      v1411 = t !== 0;
    }
    if (v1411) {
      return false;
    }
    var allowedChars = JAM.call("01234567890abcdefghijklmnopqrstuvwxyz".substring, "01234567890abcdefghijklmnopqrstuvwxyz", [0, radix$$1 + 1], JAM.policy.p1);
    var v1412 = JAM.new(RegExp, ["^[" + allowedChars + "]*$", "i"], JAM.policy.p1);
    if (JAM.call(v1412.test, v1412, [s$$4], JAM.policy.p1)) {
      return t;
    } else {
      return false;
    }
  } else {
    t = +s$$4;
    var v1413 = !t;
    if (v1413) {
      v1413 = t !== 0;
    }
    if (v1413) {
      return false;
    }
    var c = JAM.call(s$$4.charAt, s$$4, [0], JAM.policy.p1);
    var v1414 = +c === 0;
    if (v1414) {
      v1414 = c !== "0";
    }
    if (v1414) {
      return false;
    }
    return t;
  }
  return;
}
function sc_not(b$$1) {
  return b$$1 === false;
}
function sc_isBoolean(b$$2) {
  var v562 = b$$2 === true;
  if (!v562) {
    v562 = b$$2 === false;
  }
  return v562;
}
function sc_Pair(car, cdr) {
  this.car = car;
  this.cdr = cdr;
  return;
}
function sc_isPair(p) {
  return p instanceof sc_Pair;
}
function sc_isPairEqual(p1, p2, comp) {
  var v563 = JAM.call(comp, null, [p1.car, p2.car], JAM.policy.p1);
  if (v563) {
    v563 = JAM.call(comp, null, [p1.cdr, p2.cdr], JAM.policy.p1);
  }
  return v563;
}
function sc_cons(car$$1, cdr$$1) {
  return JAM.new(sc_Pair, [car$$1, cdr$$1], JAM.policy.p1);
}
function sc_consStar() {
  var res$$4 = arguments[arguments.length - 1];
  var i$$20 = arguments.length - 2;
  var v567 = i$$20 >= 0;
  for (;v567;) {
    res$$4 = JAM.new(sc_Pair, [arguments[i$$20], res$$4], JAM.policy.p1);
    i$$20 = i$$20 - 1;
    v567 = i$$20 >= 0;
  }
  return res$$4;
}
function sc_car(p$$1) {
  return p$$1.car;
}
function sc_cdr(p$$2) {
  return p$$2.cdr;
}
function sc_setCarBang(p$$3, val$$1) {
  p$$3.car = val$$1;
  return;
}
function sc_setCdrBang(p$$4, val$$2) {
  p$$4.cdr = val$$2;
  return;
}
function sc_caar(p$$5) {
  return p$$5.car.car;
}
function sc_cadr(p$$6) {
  return p$$6.cdr.car;
}
function sc_cdar(p$$7) {
  return p$$7.car.cdr;
}
function sc_cddr(p$$8) {
  return p$$8.cdr.cdr;
}
function sc_caaar(p$$9) {
  return p$$9.car.car.car;
}
function sc_cadar(p$$10) {
  return p$$10.car.cdr.car;
}
function sc_caadr(p$$11) {
  return p$$11.cdr.car.car;
}
function sc_caddr(p$$12) {
  return p$$12.cdr.cdr.car;
}
function sc_cdaar(p$$13) {
  return p$$13.car.car.cdr;
}
function sc_cdadr(p$$14) {
  return p$$14.cdr.car.cdr;
}
function sc_cddar(p$$15) {
  return p$$15.car.cdr.cdr;
}
function sc_cdddr(p$$16) {
  return p$$16.cdr.cdr.cdr;
}
function sc_caaaar(p$$17) {
  return p$$17.car.car.car.car;
}
function sc_caadar(p$$18) {
  return p$$18.car.cdr.car.car;
}
function sc_caaadr(p$$19) {
  return p$$19.cdr.car.car.car;
}
function sc_caaddr(p$$20) {
  return p$$20.cdr.cdr.car.car;
}
function sc_cdaaar(p$$21) {
  return p$$21.car.car.car.cdr;
}
function sc_cdadar(p$$22) {
  return p$$22.car.cdr.car.cdr;
}
function sc_cdaadr(p$$23) {
  return p$$23.cdr.car.car.cdr;
}
function sc_cdaddr(p$$24) {
  return p$$24.cdr.cdr.car.cdr;
}
function sc_cadaar(p$$25) {
  return p$$25.car.car.cdr.car;
}
function sc_caddar(p$$26) {
  return p$$26.car.cdr.cdr.car;
}
function sc_cadadr(p$$27) {
  return p$$27.cdr.car.cdr.car;
}
function sc_cadddr(p$$28) {
  return p$$28.cdr.cdr.cdr.car;
}
function sc_cddaar(p$$29) {
  return p$$29.car.car.cdr.cdr;
}
function sc_cdddar(p$$30) {
  return p$$30.car.cdr.cdr.cdr;
}
function sc_cddadr(p$$31) {
  return p$$31.cdr.car.cdr.cdr;
}
function sc_cddddr(p$$32) {
  return p$$32.cdr.cdr.cdr.cdr;
}
function sc_lastPair(l) {
  if (!JAM.call(sc_isPair, null, [l], JAM.policy.p1)) {
    JAM.call(sc_error, null, ["sc_lastPair: pair expected"], JAM.policy.p1);
  }
  var res$$5 = l;
  var cdr$$2 = l.cdr;
  var v597 = JAM.call(sc_isPair, null, [cdr$$2], JAM.policy.p1);
  for (;v597;) {
    res$$5 = cdr$$2;
    cdr$$2 = res$$5.cdr;
    v597 = JAM.call(sc_isPair, null, [cdr$$2], JAM.policy.p1);
  }
  return res$$5;
}
function sc_isNull(o$$1) {
  return o$$1 === null;
}
function sc_isList(o$$2) {
  var rabbit;
  var turtle;
  rabbit = o$$2;
  turtle = o$$2;
  for (;true;) {
    var v1446 = rabbit === null;
    if (!v1446) {
      var v1859 = rabbit instanceof sc_Pair;
      if (v1859) {
        v1859 = rabbit.cdr === null;
      }
      v1446 = v1859;
    }
    if (v1446) {
      return true;
    } else {
      var v1447 = rabbit instanceof sc_Pair;
      if (v1447) {
        v1447 = rabbit.cdr instanceof sc_Pair;
      }
      if (v1447) {
        rabbit = rabbit.cdr.cdr;
        turtle = turtle.cdr;
        if (rabbit === turtle) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return;
}
function sc_list() {
  var res$$6 = null;
  var a$$2 = arguments;
  var i$$21 = a$$2.length - 1;
  var v604 = i$$21 >= 0;
  for (;v604;) {
    res$$6 = JAM.new(sc_Pair, [a$$2[i$$21], res$$6], JAM.policy.p1);
    i$$21 = i$$21 - 1;
    v604 = i$$21 >= 0;
  }
  return res$$6;
}
function sc_iota(num$$4, init) {
  var res$$7 = null;
  if (!init) {
    init = 0;
  }
  var i$$22 = num$$4 - 1;
  var v607 = i$$22 >= 0;
  for (;v607;) {
    res$$7 = JAM.new(sc_Pair, [i$$22 + init, res$$7], JAM.policy.p1);
    i$$22 = i$$22 - 1;
    v607 = i$$22 >= 0;
  }
  return res$$7;
}
function sc_makeList(nbEls, fill) {
  var res$$8 = null;
  var i$$23 = 0;
  var v608 = i$$23 < nbEls;
  for (;v608;) {
    res$$8 = JAM.new(sc_Pair, [fill, res$$8], JAM.policy.p1);
    i$$23 = i$$23 + 1;
    v608 = i$$23 < nbEls;
  }
  return res$$8;
}
function sc_length(l$$1) {
  var res$$9 = 0;
  var v609 = l$$1 !== null;
  for (;v609;) {
    res$$9 = res$$9 + 1;
    l$$1 = l$$1.cdr;
    v609 = l$$1 !== null;
  }
  return res$$9;
}
function sc_remq(o$$3, l$$2) {
  var dummy = {cdr:null};
  var tail = dummy;
  var v612 = l$$2 !== null;
  for (;v612;) {
    if (l$$2.car !== o$$3) {
      var v610 = tail;
      var v3738 = JAM.call(sc_cons, null, [l$$2.car, null], JAM.policy.p1);
      v610.cdr = v3738;
      tail = tail.cdr;
    }
    l$$2 = l$$2.cdr;
    v612 = l$$2 !== null;
  }
  return dummy.cdr;
}
function sc_remqBang(o$$4, l$$3) {
  var dummy$$1 = {cdr:null};
  var tail$$1 = dummy$$1;
  var needsAssig = true;
  var v614 = l$$3 !== null;
  for (;v614;) {
    if (l$$3.car === o$$4) {
      needsAssig = true;
    } else {
      if (needsAssig) {
        tail$$1.cdr = l$$3;
        needsAssig = false;
      }
      tail$$1 = l$$3;
    }
    l$$3 = l$$3.cdr;
    v614 = l$$3 !== null;
  }
  tail$$1.cdr = null;
  return dummy$$1.cdr;
}
function sc_delete(o$$5, l$$4) {
  var dummy$$2 = {cdr:null};
  var tail$$2 = dummy$$2;
  var v617 = l$$4 !== null;
  for (;v617;) {
    if (!JAM.call(sc_isEqual, null, [l$$4.car, o$$5], JAM.policy.p1)) {
      var v615 = tail$$2;
      var v3739 = JAM.call(sc_cons, null, [l$$4.car, null], JAM.policy.p1);
      v615.cdr = v3739;
      tail$$2 = tail$$2.cdr;
    }
    l$$4 = l$$4.cdr;
    v617 = l$$4 !== null;
  }
  return dummy$$2.cdr;
}
function sc_deleteBang(o$$6, l$$5) {
  var dummy$$3 = {cdr:null};
  var tail$$3 = dummy$$3;
  var needsAssig$$1 = true;
  var v619 = l$$5 !== null;
  for (;v619;) {
    if (JAM.call(sc_isEqual, null, [l$$5.car, o$$6], JAM.policy.p1)) {
      needsAssig$$1 = true;
    } else {
      if (needsAssig$$1) {
        tail$$3.cdr = l$$5;
        needsAssig$$1 = false;
      }
      tail$$3 = l$$5;
    }
    l$$5 = l$$5.cdr;
    v619 = l$$5 !== null;
  }
  tail$$3.cdr = null;
  return dummy$$3.cdr;
}
function sc_reverseAppendBang(l1, l2) {
  var res$$10 = l2;
  var v620 = l1 !== null;
  for (;v620;) {
    var tmp = res$$10;
    res$$10 = l1;
    l1 = l1.cdr;
    res$$10.cdr = tmp;
    v620 = l1 !== null;
  }
  return res$$10;
}
function sc_dualAppend(l1$$1, l2$$1) {
  if (l1$$1 === null) {
    return l2$$1;
  }
  if (l2$$1 === null) {
    return l1$$1;
  }
  var rev = JAM.call(sc_reverse, null, [l1$$1], JAM.policy.p1);
  return JAM.call(sc_reverseAppendBang, null, [rev, l2$$1], JAM.policy.p1);
}
function sc_append() {
  if (arguments.length === 0) {
    return null;
  }
  var res$$11 = arguments[arguments.length - 1];
  var i$$24 = arguments.length - 2;
  var v627 = i$$24 >= 0;
  for (;v627;) {
    res$$11 = JAM.call(sc_dualAppend, null, [arguments[i$$24], res$$11], JAM.policy.p1);
    i$$24 = i$$24 - 1;
    v627 = i$$24 >= 0;
  }
  return res$$11;
}
function sc_dualAppendBang(l1$$2, l2$$2) {
  if (l1$$2 === null) {
    return l2$$2;
  }
  if (l2$$2 === null) {
    return l1$$2;
  }
  var tmp$$1 = l1$$2;
  var v630 = tmp$$1.cdr !== null;
  for (;v630;) {
    tmp$$1 = tmp$$1.cdr;
    v630 = tmp$$1.cdr !== null;
  }
  tmp$$1.cdr = l2$$2;
  return l1$$2;
}
function sc_appendBang() {
  var res$$12 = null;
  var i$$25 = 0;
  var v632 = i$$25 < arguments.length;
  for (;v632;) {
    res$$12 = JAM.call(sc_dualAppendBang, null, [res$$12, arguments[i$$25]], JAM.policy.p1);
    i$$25 = i$$25 + 1;
    v632 = i$$25 < arguments.length;
  }
  return res$$12;
}
function sc_reverse(l1$$3) {
  var res$$13 = null;
  var v634 = l1$$3 !== null;
  for (;v634;) {
    res$$13 = JAM.call(sc_cons, null, [l1$$3.car, res$$13], JAM.policy.p1);
    l1$$3 = l1$$3.cdr;
    v634 = l1$$3 !== null;
  }
  return res$$13;
}
function sc_reverseBang(l$$6) {
  return JAM.call(sc_reverseAppendBang, null, [l$$6, null], JAM.policy.p1);
}
function sc_listTail(l$$7, k) {
  var res$$14 = l$$7;
  var i$$26 = 0;
  var v635 = i$$26 < k;
  for (;v635;) {
    res$$14 = res$$14.cdr;
    i$$26 = i$$26 + 1;
    v635 = i$$26 < k;
  }
  return res$$14;
}
function sc_listRef(l$$8, k$$1) {
  return JAM.call(sc_listTail, null, [l$$8, k$$1], JAM.policy.p1).car;
}
function sc_memq(o$$7, l$$9) {
  var v638 = l$$9 !== null;
  for (;v638;) {
    if (l$$9.car === o$$7) {
      return l$$9;
    }
    l$$9 = l$$9.cdr;
    v638 = l$$9 !== null;
  }
  return false;
}
function sc_memv(o$$8, l$$10) {
  var v640 = l$$10 !== null;
  for (;v640;) {
    if (l$$10.car === o$$8) {
      return l$$10;
    }
    l$$10 = l$$10.cdr;
    v640 = l$$10 !== null;
  }
  return false;
}
function sc_member(o$$9, l$$11) {
  var v642 = l$$11 !== null;
  for (;v642;) {
    if (JAM.call(sc_isEqual, null, [l$$11.car, o$$9], JAM.policy.p1)) {
      return l$$11;
    }
    l$$11 = l$$11.cdr;
    v642 = l$$11 !== null;
  }
  return false;
}
function sc_assq(o$$10, al) {
  var v644 = al !== null;
  for (;v644;) {
    if (al.car.car === o$$10) {
      return al.car;
    }
    al = al.cdr;
    v644 = al !== null;
  }
  return false;
}
function sc_assv(o$$11, al$$1) {
  var v646 = al$$1 !== null;
  for (;v646;) {
    if (al$$1.car.car === o$$11) {
      return al$$1.car;
    }
    al$$1 = al$$1.cdr;
    v646 = al$$1 !== null;
  }
  return false;
}
function sc_assoc(o$$12, al$$2) {
  var v648 = al$$2 !== null;
  for (;v648;) {
    if (JAM.call(sc_isEqual, null, [al$$2.car.car, o$$12], JAM.policy.p1)) {
      return al$$2.car;
    }
    al$$2 = al$$2.cdr;
    v648 = al$$2 !== null;
  }
  return false;
}
function sc_isCharStringEqual(cs1, cs2) {
  return cs1.val === cs2.val;
}
function sc_isCharStringLess(cs1$$1, cs2$$1) {
  return cs1$$1.val < cs2$$1.val;
}
function sc_isCharStringGreater(cs1$$2, cs2$$2) {
  return cs1$$2.val > cs2$$2.val;
}
function sc_isCharStringLessEqual(cs1$$3, cs2$$3) {
  return cs1$$3.val <= cs2$$3.val;
}
function sc_isCharStringGreaterEqual(cs1$$4, cs2$$4) {
  return cs1$$4.val >= cs2$$4.val;
}
function sc_isCharStringCIEqual(cs1$$5, cs2$$5) {
  var v1466 = cs1$$5.val;
  var v659 = JAM.call(v1466.toLowerCase, v1466, [], JAM.policy.p1);
  var v1467 = cs2$$5.val;
  return v659 === JAM.call(v1467.toLowerCase, v1467, [], JAM.policy.p1);
}
function sc_isCharStringCILess(cs1$$6, cs2$$6) {
  var v1468 = cs1$$6.val;
  var v661 = JAM.call(v1468.toLowerCase, v1468, [], JAM.policy.p1);
  var v1469 = cs2$$6.val;
  return v661 < JAM.call(v1469.toLowerCase, v1469, [], JAM.policy.p1);
}
function sc_isCharStringCIGreater(cs1$$7, cs2$$7) {
  var v1470 = cs1$$7.val;
  var v663 = JAM.call(v1470.toLowerCase, v1470, [], JAM.policy.p1);
  var v1471 = cs2$$7.val;
  return v663 > JAM.call(v1471.toLowerCase, v1471, [], JAM.policy.p1);
}
function sc_isCharStringCILessEqual(cs1$$8, cs2$$8) {
  var v1472 = cs1$$8.val;
  var v665 = JAM.call(v1472.toLowerCase, v1472, [], JAM.policy.p1);
  var v1473 = cs2$$8.val;
  return v665 <= JAM.call(v1473.toLowerCase, v1473, [], JAM.policy.p1);
}
function sc_isCharStringCIGreaterEqual(cs1$$9, cs2$$9) {
  var v1474 = cs1$$9.val;
  var v667 = JAM.call(v1474.toLowerCase, v1474, [], JAM.policy.p1);
  var v1475 = cs2$$9.val;
  return v667 >= JAM.call(v1475.toLowerCase, v1475, [], JAM.policy.p1);
}
function sc_Char(c$$1) {
  var cached = sc_Char.lazy[c$$1];
  if (cached) {
    return cached;
  }
  this.val = c$$1;
  JAM.set(sc_Char.lazy, c$$1, this);
  return undefined;
}
function sc_isChar(c$$2) {
  return c$$2 instanceof sc_Char;
}
function sc_isCharOfClass(c$$3, cl) {
  return JAM.call(cl.indexOf, cl, [c$$3], JAM.policy.p1) != -1;
}
function sc_isCharAlphabetic(c$$4) {
  var v672 = JAM.call(sc_isCharOfClass, null, [c$$4.val, SC_LOWER_CLASS], JAM.policy.p1);
  if (!v672) {
    v672 = JAM.call(sc_isCharOfClass, null, [c$$4.val, SC_UPPER_CLASS], JAM.policy.p1);
  }
  return v672;
}
function sc_isCharNumeric(c$$5) {
  return JAM.call(sc_isCharOfClass, null, [c$$5.val, SC_NUMBER_CLASS], JAM.policy.p1);
}
function sc_isCharWhitespace(c$$6) {
  var tmp$$2 = c$$6.val;
  var v2204 = tmp$$2 === " ";
  if (!v2204) {
    v2204 = tmp$$2 === "\r";
  }
  var v1866 = v2204;
  if (!v1866) {
    v1866 = tmp$$2 === "\n";
  }
  var v1479 = v1866;
  if (!v1479) {
    v1479 = tmp$$2 === "\t";
  }
  var v674 = v1479;
  if (!v674) {
    v674 = tmp$$2 === "\f";
  }
  return v674;
}
function sc_isCharUpperCase(c$$7) {
  return JAM.call(sc_isCharOfClass, null, [c$$7.val, SC_UPPER_CLASS], JAM.policy.p1);
}
function sc_isCharLowerCase(c$$8) {
  return JAM.call(sc_isCharOfClass, null, [c$$8.val, SC_LOWER_CLASS], JAM.policy.p1);
}
function sc_char2integer(c$$9) {
  var v677 = c$$9.val;
  return JAM.call(v677.charCodeAt, v677, [0], JAM.policy.p1);
}
function sc_integer2char(n$$8) {
  return JAM.new(sc_Char, [JAM.call(String.fromCharCode, String, [n$$8], JAM.policy.p1)], JAM.policy.p1);
}
function sc_charUpcase(c$$10) {
  var v1481 = c$$10.val;
  return JAM.new(sc_Char, [JAM.call(v1481.toUpperCase, v1481, [], JAM.policy.p1)], JAM.policy.p1);
}
function sc_charDowncase(c$$11) {
  var v1482 = c$$11.val;
  return JAM.new(sc_Char, [JAM.call(v1482.toLowerCase, v1482, [], JAM.policy.p1)], JAM.policy.p1);
}
function sc_makeJSStringOfLength(k$$2, c$$12) {
  var fill$$1;
  if (c$$12 === undefined) {
    fill$$1 = " ";
  } else {
    fill$$1 = c$$12;
  }
  var res$$15 = "";
  var len$$1 = 1;
  var v683 = k$$2 >= len$$1;
  for (;v683;) {
    if (k$$2 & len$$1) {
      res$$15 = JAM.call(res$$15.concat, res$$15, [fill$$1], JAM.policy.p1);
    }
    fill$$1 = JAM.call(fill$$1.concat, fill$$1, [fill$$1], JAM.policy.p1);
    len$$1 = len$$1 * 2;
    v683 = k$$2 >= len$$1;
  }
  return res$$15;
}
function sc_makejsString(k$$3, c$$13) {
  var fill$$2;
  if (c$$13) {
    fill$$2 = c$$13.val;
  } else {
    fill$$2 = " ";
  }
  return JAM.call(sc_makeJSStringOfLength, null, [k$$3, fill$$2], JAM.policy.p1);
}
function sc_jsstring2list(s$$5) {
  var res$$16 = null;
  var i$$27 = s$$5.length - 1;
  var v686 = i$$27 >= 0;
  for (;v686;) {
    res$$16 = JAM.call(sc_cons, null, [JAM.new(sc_Char, [JAM.call(s$$5.charAt, s$$5, [i$$27], JAM.policy.p1)], JAM.policy.p1), res$$16], JAM.policy.p1);
    i$$27 = i$$27 - 1;
    v686 = i$$27 >= 0;
  }
  return res$$16;
}
function sc_list2jsstring(l$$12) {
  var a$$3 = JAM.new(Array, [], JAM.policy.p1);
  var v688 = l$$12 !== null;
  for (;v688;) {
    JAM.call(a$$3.push, a$$3, [l$$12.car.val], JAM.policy.p1);
    l$$12 = l$$12.cdr;
    v688 = l$$12 !== null;
  }
  var v689 = "".concat;
  return JAM.call(v689.apply, v689, ["", a$$3], JAM.policy.p1);
}
function sc_isVector(v) {
  return v instanceof sc_Vector;
}
function sc_isVectorEqual(v1$$1, v2, comp$$1) {
  if (v1$$1.length !== v2.length) {
    return false;
  }
  var i$$29 = 0;
  var v692 = i$$29 < v1$$1.length;
  for (;v692;) {
    if (!JAM.call(comp$$1, null, [v1$$1[i$$29], v2[i$$29]], JAM.policy.p1)) {
      return false;
    }
    i$$29 = i$$29 + 1;
    v692 = i$$29 < v1$$1.length;
  }
  return true;
}
function sc_makeVector(size$$4, fill$$3) {
  var a$$4 = JAM.new(sc_Vector, [size$$4], JAM.policy.p1);
  if (fill$$3 !== undefined) {
    JAM.call(sc_vectorFillBang, null, [a$$4, fill$$3], JAM.policy.p1);
  }
  return a$$4;
}
function sc_vector() {
  var a$$5 = JAM.new(sc_Vector, [], JAM.policy.p1);
  var i$$30 = 0;
  var v695 = i$$30 < arguments.length;
  for (;v695;) {
    JAM.call(a$$5.push, a$$5, [arguments[i$$30]], JAM.policy.p1);
    i$$30 = i$$30 + 1;
    v695 = i$$30 < arguments.length;
  }
  return a$$5;
}
function sc_vectorLength(v$$1) {
  return v$$1.length;
}
function sc_vectorRef(v$$2, pos) {
  return v$$2[pos];
}
function sc_vectorSetBang(v$$3, pos$$1, val$$3) {
  JAM.set(v$$3, pos$$1, val$$3);
  return;
}
function sc_vector2list(a$$6) {
  var res$$18 = null;
  var i$$31 = a$$6.length - 1;
  var v698 = i$$31 >= 0;
  for (;v698;) {
    res$$18 = JAM.call(sc_cons, null, [a$$6[i$$31], res$$18], JAM.policy.p1);
    i$$31 = i$$31 - 1;
    v698 = i$$31 >= 0;
  }
  return res$$18;
}
function sc_list2vector(l$$13) {
  var a$$7 = JAM.new(sc_Vector, [], JAM.policy.p1);
  var v700 = l$$13 !== null;
  for (;v700;) {
    JAM.call(a$$7.push, a$$7, [l$$13.car], JAM.policy.p1);
    l$$13 = l$$13.cdr;
    v700 = l$$13 !== null;
  }
  return a$$7;
}
function sc_vectorFillBang(a$$8, fill$$4) {
  var i$$32 = 0;
  var v701 = i$$32 < a$$8.length;
  for (;v701;) {
    a$$8[i$$32] = fill$$4;
    i$$32 = i$$32 + 1;
    v701 = i$$32 < a$$8.length;
  }
  return;
}
function sc_copyVector(a$$9, len$$2) {
  if (len$$2 <= a$$9.length) {
    return JAM.call(a$$9.slice, a$$9, [0, len$$2], JAM.policy.p1);
  } else {
    var tmp$$3 = JAM.call(a$$9.concat, a$$9, [], JAM.policy.p1);
    tmp$$3.length = len$$2;
    return tmp$$3;
  }
  return;
}
function sc_vectorCopy(a$$10, start$$5, end$$1) {
  return JAM.call(a$$10.slice, a$$10, [start$$5, end$$1], JAM.policy.p1);
}
function sc_vectorCopyBang(target$$37, tstart, source$$1, sstart, send) {
  if (!sstart) {
    sstart = 0;
  }
  if (!send) {
    send = source$$1.length;
  }
  if (tstart <= sstart) {
    var i$$33 = tstart;
    var j = sstart;
    var v705 = j < send;
    for (;v705;) {
      JAM.set(target$$37, i$$33, source$$1[j]);
      i$$33 = i$$33 + 1;
      j = j + 1;
      v705 = j < send;
    }
  } else {
    var diff = send - sstart;
    i$$33 = tstart + diff - 1;
    j = send - 1;
    var v707 = j >= sstart;
    for (;v707;) {
      JAM.set(target$$37, i$$33, source$$1[j]);
      i$$33 = i$$33 - 1;
      j = j - 1;
      v707 = j >= sstart;
    }
  }
  return target$$37;
}
function sc_isProcedure(o$$13) {
  return typeof o$$13 === "function";
}
function sc_apply(proc) {
  var args = JAM.new(Array, [], JAM.policy.p1);
  var i$$34 = 1;
  var v711 = i$$34 < arguments.length - 1;
  for (;v711;) {
    JAM.call(args.push, args, [arguments[i$$34]], JAM.policy.p1);
    i$$34 = i$$34 + 1;
    v711 = i$$34 < arguments.length - 1;
  }
  var l$$14 = arguments[arguments.length - 1];
  var v714 = l$$14 !== null;
  for (;v714;) {
    JAM.call(args.push, args, [l$$14.car], JAM.policy.p1);
    l$$14 = l$$14.cdr;
    v714 = l$$14 !== null;
  }
  return JAM.call(proc.apply, proc, [null, args], JAM.policy.p1);
}
function sc_map(proc$$1, l1$$4) {
  if (l1$$4 === undefined) {
    return null;
  }
  var nbApplyArgs = arguments.length - 1;
  var applyArgs = JAM.new(Array, [nbApplyArgs], JAM.policy.p1);
  var revres = null;
  var v721 = l1$$4 !== null;
  for (;v721;) {
    var i$$35 = 0;
    var v719 = i$$35 < nbApplyArgs;
    for (;v719;) {
      applyArgs[i$$35] = arguments[i$$35 + 1].car;
      arguments[i$$35 + 1] = arguments[i$$35 + 1].cdr;
      i$$35 = i$$35 + 1;
      v719 = i$$35 < nbApplyArgs;
    }
    revres = JAM.call(sc_cons, null, [JAM.call(proc$$1.apply, proc$$1, [null, applyArgs], JAM.policy.p1), revres], JAM.policy.p1);
    v721 = l1$$4 !== null;
  }
  return JAM.call(sc_reverseAppendBang, null, [revres, null], JAM.policy.p1);
}
function sc_mapBang(proc$$2, l1$$5) {
  if (l1$$5 === undefined) {
    return null;
  }
  var l1_orig = l1$$5;
  var nbApplyArgs$$1 = arguments.length - 1;
  var applyArgs$$1 = JAM.new(Array, [nbApplyArgs$$1], JAM.policy.p1);
  var v728 = l1$$5 !== null;
  for (;v728;) {
    var tmp$$4 = l1$$5;
    var i$$36 = 0;
    var v726 = i$$36 < nbApplyArgs$$1;
    for (;v726;) {
      applyArgs$$1[i$$36] = arguments[i$$36 + 1].car;
      arguments[i$$36 + 1] = arguments[i$$36 + 1].cdr;
      i$$36 = i$$36 + 1;
      v726 = i$$36 < nbApplyArgs$$1;
    }
    var v727 = tmp$$4;
    var v3740 = JAM.call(proc$$2.apply, proc$$2, [null, applyArgs$$1], JAM.policy.p1);
    v727.car = v3740;
    v728 = l1$$5 !== null;
  }
  return l1_orig;
}
function sc_forEach(proc$$3, l1$$6) {
  if (l1$$6 === undefined) {
    return undefined;
  }
  var nbApplyArgs$$2 = arguments.length - 1;
  var applyArgs$$2 = JAM.new(Array, [nbApplyArgs$$2], JAM.policy.p1);
  var v734 = l1$$6 !== null;
  for (;v734;) {
    var i$$37 = 0;
    var v733 = i$$37 < nbApplyArgs$$2;
    for (;v733;) {
      applyArgs$$2[i$$37] = arguments[i$$37 + 1].car;
      arguments[i$$37 + 1] = arguments[i$$37 + 1].cdr;
      i$$37 = i$$37 + 1;
      v733 = i$$37 < nbApplyArgs$$2;
    }
    JAM.call(proc$$3.apply, proc$$3, [null, applyArgs$$2], JAM.policy.p1);
    v734 = l1$$6 !== null;
  }
  return undefined;
}
function sc_filter(proc$$4, l1$$7) {
  var dummy$$4 = {cdr:null};
  var tail$$4 = dummy$$4;
  var v737 = l1$$7 !== null;
  for (;v737;) {
    if (JAM.call(proc$$4, null, [l1$$7.car], JAM.policy.p1) !== false) {
      var v735 = tail$$4;
      var v3741 = JAM.call(sc_cons, null, [l1$$7.car, null], JAM.policy.p1);
      v735.cdr = v3741;
      tail$$4 = tail$$4.cdr;
    }
    l1$$7 = l1$$7.cdr;
    v737 = l1$$7 !== null;
  }
  return dummy$$4.cdr;
}
function sc_filterBang(proc$$5, l1$$8) {
  var head = JAM.call(sc_cons, null, ["dummy", l1$$8], JAM.policy.p1);
  var it = head;
  var next = l1$$8;
  var v739 = next !== null;
  for (;v739;) {
    if (JAM.call(proc$$5, null, [next.car], JAM.policy.p1) !== false) {
      it.cdr = next;
      it = next;
    }
    next = next.cdr;
    v739 = next !== null;
  }
  it.cdr = null;
  return head.cdr;
}
function sc_filterMap1(proc$$6, l1$$9) {
  var revres$$1 = null;
  var v742 = l1$$9 !== null;
  for (;v742;) {
    var tmp$$5 = JAM.call(proc$$6, null, [l1$$9.car], JAM.policy.p1);
    if (tmp$$5 !== false) {
      revres$$1 = JAM.call(sc_cons, null, [tmp$$5, revres$$1], JAM.policy.p1);
    }
    l1$$9 = l1$$9.cdr;
    v742 = l1$$9 !== null;
  }
  return JAM.call(sc_reverseAppendBang, null, [revres$$1, null], JAM.policy.p1);
}
function sc_filterMap2(proc$$7, l1$$10, l2$$3) {
  var revres$$2 = null;
  var v746 = l1$$10 !== null;
  for (;v746;) {
    var tmp$$6 = JAM.call(proc$$7, null, [l1$$10.car, l2$$3.car], JAM.policy.p1);
    if (tmp$$6 !== false) {
      revres$$2 = JAM.call(sc_cons, null, [tmp$$6, revres$$2], JAM.policy.p1);
    }
    l1$$10 = l1$$10.cdr;
    l2$$3 = l2$$3.cdr;
    v746 = l1$$10 !== null;
  }
  return JAM.call(sc_reverseAppendBang, null, [revres$$2, null], JAM.policy.p1);
}
function sc_filterMap(proc$$8, l1$$11, l2$$4, l3) {
  if (l2$$4 === undefined) {
    return JAM.call(sc_filterMap1, null, [proc$$8, l1$$11], JAM.policy.p1);
  } else {
    if (l3 === undefined) {
      return JAM.call(sc_filterMap2, null, [proc$$8, l1$$11, l2$$4], JAM.policy.p1);
    }
  }
  var nbApplyArgs$$3 = arguments.length - 1;
  var applyArgs$$3 = JAM.new(Array, [nbApplyArgs$$3], JAM.policy.p1);
  var revres$$3 = null;
  var v754 = l1$$11 !== null;
  for (;v754;) {
    var i$$38 = 0;
    var v752 = i$$38 < nbApplyArgs$$3;
    for (;v752;) {
      applyArgs$$3[i$$38] = arguments[i$$38 + 1].car;
      arguments[i$$38 + 1] = arguments[i$$38 + 1].cdr;
      i$$38 = i$$38 + 1;
      v752 = i$$38 < nbApplyArgs$$3;
    }
    var tmp$$7 = JAM.call(proc$$8.apply, proc$$8, [null, applyArgs$$3], JAM.policy.p1);
    if (tmp$$7 !== false) {
      revres$$3 = JAM.call(sc_cons, null, [tmp$$7, revres$$3], JAM.policy.p1);
    }
    v754 = l1$$11 !== null;
  }
  return JAM.call(sc_reverseAppendBang, null, [revres$$3, null], JAM.policy.p1);
}
function sc_any(proc$$9, l$$15) {
  var revres$$4 = null;
  var v757 = l$$15 !== null;
  for (;v757;) {
    var tmp$$8 = JAM.call(proc$$9, null, [l$$15.car], JAM.policy.p1);
    if (tmp$$8 !== false) {
      return tmp$$8;
    }
    l$$15 = l$$15.cdr;
    v757 = l$$15 !== null;
  }
  return false;
}
function sc_anyPred(proc$$10, l$$16) {
  return JAM.call(sc_any, null, [proc$$10, l$$16], JAM.policy.p1) !== false;
}
function sc_every(proc$$11, l$$17) {
  var revres$$5 = null;
  var tmp$$9 = true;
  var v761 = l$$17 !== null;
  for (;v761;) {
    tmp$$9 = JAM.call(proc$$11, null, [l$$17.car], JAM.policy.p1);
    if (tmp$$9 === false) {
      return false;
    }
    l$$17 = l$$17.cdr;
    v761 = l$$17 !== null;
  }
  return tmp$$9;
}
function sc_everyPred(proc$$12, l$$18) {
  var tmp$$10 = JAM.call(sc_every, null, [proc$$12, l$$18], JAM.policy.p1);
  if (tmp$$10 !== false) {
    return true;
  }
  return false;
}
function sc_force(o$$14) {
  return JAM.call(o$$14, null, [], JAM.policy.p1);
}
function sc_makePromise(proc$$13) {
  function v2$$1() {
    if (!isResultReady) {
      var tmp$$11 = JAM.call(proc$$13, null, [], JAM.policy.p1);
      if (!isResultReady) {
        isResultReady = true;
        result$$3 = tmp$$11;
      }
    }
    return result$$3;
  }
  var isResultReady = false;
  var result$$3 = undefined;
  return v2$$1;
}
function sc_Values(values$$4) {
  this.values = values$$4;
  return;
}
function sc_values() {
  if (arguments.length === 1) {
    return arguments[0];
  } else {
    return JAM.new(sc_Values, [arguments], JAM.policy.p1);
  }
  return;
}
function sc_callWithValues(producer, consumer) {
  var produced = JAM.call(producer, null, [], JAM.policy.p1);
  if (produced instanceof sc_Values) {
    return JAM.call(consumer.apply, consumer, [null, produced.values], JAM.policy.p1);
  } else {
    return JAM.call(consumer, null, [produced], JAM.policy.p1);
  }
  return;
}
function sc_dynamicWind(before$$1, thunk, after) {
  JAM.call(before$$1, null, [], JAM.policy.p1);
  try {
    var res$$19 = JAM.call(thunk, null, [], JAM.policy.p1);
    return res$$19;
  } finally {
    JAM.call(after, null, [], JAM.policy.p1);
  }
  return;
}
function sc_Struct(name$$32) {
  this.name = name$$32;
  return;
}
function sc_makeStruct(name$$33) {
  return JAM.new(sc_Struct, [name$$33], JAM.policy.p1);
}
function sc_isStruct(o$$15) {
  return o$$15 instanceof sc_Struct;
}
function sc_isStructNamed(name$$34, s$$6) {
  var v768 = s$$6 instanceof sc_Struct;
  if (v768) {
    v768 = s$$6.name === name$$34;
  }
  return v768;
}
function sc_getStructField(s$$7, name$$35, field) {
  return s$$7[field];
}
function sc_setStructFieldBang(s$$8, name$$36, field$$1, val$$4) {
  JAM.set(s$$8, field$$1, val$$4);
  return;
}
function sc_bitNot(x$$67) {
  return~x$$67;
}
function sc_bitAnd(x$$68, y$$37) {
  return x$$68 & y$$37;
}
function sc_bitOr(x$$69, y$$38) {
  return x$$69 | y$$38;
}
function sc_bitXor(x$$70, y$$39) {
  return x$$70 ^ y$$39;
}
function sc_bitLsh(x$$71, y$$40) {
  return x$$71 << y$$40;
}
function sc_bitRsh(x$$72, y$$41) {
  return x$$72 >> y$$41;
}
function sc_bitUrsh(x$$73, y$$42) {
  return x$$73 >>> y$$42;
}
function sc_jsField(o$$16, field$$2) {
  return o$$16[field$$2];
}
function sc_setJsFieldBang(o$$17, field$$3, val$$5) {
  return JAM.set(o$$17, field$$3, val$$5);
}
function sc_deleteJsFieldBang(o$$18, field$$4) {
  delete o$$18[field$$4];
  return;
}
function sc_jsCall(o$$19, fun$$3) {
  var args$$1 = JAM.new(Array, [], JAM.policy.p1);
  var i$$39 = 2;
  var v770 = i$$39 < arguments.length;
  for (;v770;) {
    args$$1[i$$39 - 2] = arguments[i$$39];
    i$$39 = i$$39 + 1;
    v770 = i$$39 < arguments.length;
  }
  return JAM.call(fun$$3.apply, fun$$3, [o$$19, args$$1], JAM.policy.p1);
}
function sc_jsMethodCall(o$$20, field$$5) {
  var args$$2 = JAM.new(Array, [], JAM.policy.p1);
  var i$$40 = 2;
  var v772 = i$$40 < arguments.length;
  for (;v772;) {
    args$$2[i$$40 - 2] = arguments[i$$40];
    i$$40 = i$$40 + 1;
    v772 = i$$40 < arguments.length;
  }
  var v773 = o$$20[field$$5];
  return JAM.call(v773.apply, v773, [o$$20, args$$2], JAM.policy.p1);
}
function sc_jsNew(c$$14) {
  var evalStr = "new c(";
  var v1878;
  if (arguments.length > 1) {
    v1878 = "arguments[1]";
  } else {
    v1878 = "";
  }
  evalStr = evalStr + v1878;
  var i$$41 = 2;
  var v774 = i$$41 < arguments.length;
  for (;v774;) {
    evalStr = evalStr + (", arguments[" + i$$41 + "]");
    i$$41 = i$$41 + 1;
    v774 = i$$41 < arguments.length;
  }
  evalStr = evalStr + ")";
  if (JAM.isEval(eval)) {
    return eval("introspect(JAM.policy.pFull) { " + evalStr + " }");
  } else {
    return JAM.call(eval, null, [evalStr]);
  }
}
function sc_pregexp(re) {
  return JAM.new(RegExp, [JAM.call(sc_string2jsstring, null, [re], JAM.policy.p1)], JAM.policy.p1);
}
function sc_pregexpMatch(re$$1, s$$9) {
  var v776;
  if (re$$1 instanceof RegExp) {
    v776 = re$$1;
  } else {
    v776 = JAM.call(sc_pregexp, null, [re$$1], JAM.policy.p1);
  }
  var reg = v776;
  var tmp$$12 = JAM.call(reg.exec, reg, [JAM.call(sc_string2jsstring, null, [s$$9], JAM.policy.p1)], JAM.policy.p1);
  if (tmp$$12 == null) {
    return false;
  }
  var res$$20 = null;
  var i$$42 = tmp$$12.length - 1;
  var v782 = i$$42 >= 0;
  for (;v782;) {
    if (tmp$$12[i$$42] !== null) {
      res$$20 = JAM.call(sc_cons, null, [JAM.call(sc_jsstring2string, null, [tmp$$12[i$$42]], JAM.policy.p1), res$$20], JAM.policy.p1);
    } else {
      res$$20 = JAM.call(sc_cons, null, [false, res$$20], JAM.policy.p1);
    }
    i$$42 = i$$42 - 1;
    v782 = i$$42 >= 0;
  }
  return res$$20;
}
function sc_pregexpReplace(re$$2, s1, s2) {
  var reg$$1;
  var jss1 = JAM.call(sc_string2jsstring, null, [s1], JAM.policy.p1);
  var jss2 = JAM.call(sc_string2jsstring, null, [s2], JAM.policy.p1);
  if (re$$2 instanceof RegExp) {
    if (re$$2.global) {
      reg$$1 = re$$2;
    } else {
      reg$$1 = JAM.new(RegExp, [re$$2.source], JAM.policy.p1);
    }
  } else {
    reg$$1 = JAM.new(RegExp, [JAM.call(sc_string2jsstring, null, [re$$2], JAM.policy.p1)], JAM.policy.p1);
  }
  return JAM.call(jss1.replace, jss1, [reg$$1, jss2], JAM.policy.p1);
}
function sc_pregexpReplaceAll(re$$3, s1$$1, s2$$1) {
  var reg$$2;
  var jss1$$1 = JAM.call(sc_string2jsstring, null, [s1$$1], JAM.policy.p1);
  var jss2$$1 = JAM.call(sc_string2jsstring, null, [s2$$1], JAM.policy.p1);
  if (re$$3 instanceof RegExp) {
    if (re$$3.global) {
      reg$$2 = re$$3;
    } else {
      reg$$2 = JAM.new(RegExp, [re$$3.source, "g"], JAM.policy.p1);
    }
  } else {
    reg$$2 = JAM.new(RegExp, [JAM.call(sc_string2jsstring, null, [re$$3], JAM.policy.p1), "g"], JAM.policy.p1);
  }
  return JAM.call(jss1$$1.replace, jss1$$1, [reg$$2, jss2$$1], JAM.policy.p1);
}
function sc_pregexpSplit(re$$4, s$$10) {
  var v791;
  if (re$$4 instanceof RegExp) {
    v791 = re$$4;
  } else {
    v791 = JAM.new(RegExp, [JAM.call(sc_string2jsstring, null, [re$$4], JAM.policy.p1)], JAM.policy.p1);
  }
  var reg$$3 = v791;
  var jss = JAM.call(sc_string2jsstring, null, [s$$10], JAM.policy.p1);
  var tmp$$13 = JAM.call(jss.split, jss, [reg$$3], JAM.policy.p1);
  if (tmp$$13 == null) {
    return false;
  }
  return JAM.call(sc_vector2list, null, [tmp$$13], JAM.policy.p1);
}
function sc_random(n$$9) {
  return JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p1) * n$$9], JAM.policy.p1);
}
function sc_currentDate() {
  return JAM.new(Date, [], JAM.policy.p1);
}
function sc_Hashtable() {
  return;
}
function sc_HashtableElement(key$$17, val$$6) {
  this.key = key$$17;
  this.val = val$$6;
  return;
}
function sc_makeHashtable() {
  return JAM.new(sc_Hashtable, [], JAM.policy.p1);
}
function sc_hashtablePutBang(ht$$3, key$$18, val$$7) {
  var hash = JAM.call(sc_hash, null, [key$$18], JAM.policy.p1);
  var v3742 = JAM.new(sc_HashtableElement, [key$$18, val$$7], JAM.policy.p1);
  JAM.set(ht$$3, hash, v3742);
  return;
}
function sc_hashtableGet(ht$$4, key$$19) {
  var hash$$1 = JAM.call(sc_hash, null, [key$$19], JAM.policy.p1);
  if (hash$$1 in ht$$4) {
    return ht$$4[hash$$1].val;
  } else {
    return false;
  }
  return;
}
function sc_hashtableForEach(ht$$5, f$$1) {
  var v$$4;
  for (v$$4 in ht$$5) {
    if (ht$$5[v$$4] instanceof sc_HashtableElement) {
      JAM.call(f$$1, null, [ht$$5[v$$4].key, ht$$5[v$$4].val], JAM.policy.p1);
    }
  }
  return;
}
function sc_hashtableContains(ht$$6, key$$20) {
  var hash$$2 = JAM.call(sc_hash, null, [key$$20], JAM.policy.p1);
  if (hash$$2 in ht$$6) {
    return true;
  } else {
    return false;
  }
  return;
}
function sc_hash(o$$21) {
  if (o$$21 === null) {
    return "null";
  } else {
    if (o$$21 === undefined) {
      return "undefined";
    } else {
      if (o$$21 === true) {
        return "true";
      } else {
        if (o$$21 === false) {
          return "false";
        } else {
          if (typeof o$$21 === "number") {
            return "num-" + o$$21;
          } else {
            if (typeof o$$21 === "string") {
              return "jsstr-" + o$$21;
            } else {
              if (o$$21.sc_getHash) {
                return JAM.call(o$$21.sc_getHash, o$$21, [], JAM.policy.p1);
              } else {
                return JAM.call(sc_counterHash.call, sc_counterHash, [o$$21], JAM.policy.p1);
              }
            }
          }
        }
      }
    }
  }
  return;
}
function sc_counterHash() {
  if (!this.sc_hash) {
    this.sc_hash = "hash-" + SC_HASH_COUNTER;
    SC_HASH_COUNTER = SC_HASH_COUNTER + 1;
  }
  return this.sc_hash;
}
function sc_Trampoline(args$$3, maxTailCalls) {
  this["__trampoline return__"] = true;
  this.args = args$$3;
  this.MAX_TAIL_CALLs = maxTailCalls;
  return;
}
function sc_bindExitLambda(proc$$14) {
  function escape$$1(res$$22) {
    escape_obj.res = res$$22;
    throw escape_obj;
  }
  var escape_obj = JAM.new(sc_BindExitException, [], JAM.policy.p1);
  try {
    return JAM.call(proc$$14, null, [escape$$1], JAM.policy.p1);
  } catch (e$$8) {
    if (e$$8 === escape_obj) {
      return e$$8.res;
    }
    throw e$$8;
  }
  return;
}
function sc_BindExitException() {
  this._internalException = true;
  return;
}
function sc_EOF() {
  return;
}
function sc_Port() {
  return;
}
function sc_InputPort() {
  return;
}
function sc_ErrorInputPort() {
  return;
}
function sc_StringInputPort(jsStr) {
  var v3743 = JAM.new(String, [jsStr], JAM.policy.p1);
  this.str = v3743;
  this.pos = 0;
  return;
}
function sc_Token(type$$25, val$$8, pos$$2) {
  this.type = type$$25;
  this.val = val$$8;
  this.pos = pos$$2;
  return;
}
function sc_Tokenizer(port) {
  this.port = port;
  return;
}
function sc_Reader(tokenizer) {
  this.tokenizer = tokenizer;
  var v3744 = JAM.new(Array, [], JAM.policy.p1);
  this.backref = v3744;
  return;
}
function sc_read(port$$2) {
  if (port$$2 === undefined) {
    port$$2 = SC_DEFAULT_IN;
  }
  var reader = JAM.new(sc_Reader, [JAM.new(sc_Tokenizer, [port$$2], JAM.policy.p1)], JAM.policy.p1);
  return JAM.call(reader.read, reader, [], JAM.policy.p1);
}
function sc_readChar(port$$3) {
  if (port$$3 === undefined) {
    port$$3 = SC_DEFAULT_IN;
  }
  var t$$1 = JAM.call(port$$3.readChar, port$$3, [], JAM.policy.p1);
  var v812;
  if (t$$1 === SC_EOF_OBJECT) {
    v812 = t$$1;
  } else {
    v812 = JAM.new(sc_Char, [t$$1], JAM.policy.p1);
  }
  return v812;
}
function sc_peekChar(port$$4) {
  if (port$$4 === undefined) {
    port$$4 = SC_DEFAULT_IN;
  }
  var t$$2 = JAM.call(port$$4.peekChar, port$$4, [], JAM.policy.p1);
  var v814;
  if (t$$2 === SC_EOF_OBJECT) {
    v814 = t$$2;
  } else {
    v814 = JAM.new(sc_Char, [t$$2], JAM.policy.p1);
  }
  return v814;
}
function sc_isCharReady(port$$5) {
  if (port$$5 === undefined) {
    port$$5 = SC_DEFAULT_IN;
  }
  return JAM.call(port$$5.isCharReady, port$$5, [], JAM.policy.p1);
}
function sc_closeInputPort(p$$33) {
  return JAM.call(p$$33.close, p$$33, [], JAM.policy.p1);
}
function sc_isInputPort(o$$23) {
  return o$$23 instanceof sc_InputPort;
}
function sc_isEOFObject(o$$24) {
  return o$$24 === SC_EOF_OBJECT;
}
function sc_currentInputPort() {
  return SC_DEFAULT_IN;
}
function sc_callWithInputFile(s$$11, proc$$15) {
  throw "can't open " + s$$11;
}
function sc_callWithOutputFile(s$$12, proc$$16) {
  throw "can't open " + s$$12;
}
function sc_withInputFromFile(s$$13, thunk$$1) {
  throw "can't open " + s$$13;
}
function sc_withOutputToFile(s$$14, thunk$$2) {
  throw "can't open " + s$$14;
}
function sc_openInputFile(s$$15) {
  throw "can't open " + s$$15;
}
function sc_openOutputFile(s$$16) {
  throw "can't open " + s$$16;
}
function sc_basename(p$$34) {
  var i$$43 = JAM.call(p$$34.lastIndexOf, p$$34, ["/"], JAM.policy.p1);
  if (i$$43 >= 0) {
    return JAM.call(p$$34.substring, p$$34, [i$$43 + 1, p$$34.length], JAM.policy.p1);
  } else {
    return "";
  }
  return;
}
function sc_dirname(p$$35) {
  var i$$44 = JAM.call(p$$35.lastIndexOf, p$$35, ["/"], JAM.policy.p1);
  if (i$$44 >= 0) {
    return JAM.call(p$$35.substring, p$$35, [0, i$$44], JAM.policy.p1);
  } else {
    return "";
  }
  return;
}
function sc_withInputFromPort(p$$36, thunk$$3) {
  try {
    var tmp$$19 = SC_DEFAULT_IN;
    SC_DEFAULT_IN = p$$36;
    return JAM.call(thunk$$3, null, [], JAM.policy.p1);
  } finally {
    SC_DEFAULT_IN = tmp$$19;
  }
  return;
}
function sc_withInputFromString(s$$17, thunk$$4) {
  return JAM.call(sc_withInputFromPort, null, [JAM.new(sc_StringInputPort, [JAM.call(sc_string2jsstring, null, [s$$17], JAM.policy.p1)], JAM.policy.p1), thunk$$4], JAM.policy.p1);
}
function sc_withOutputToPort(p$$37, thunk$$5) {
  try {
    var tmp$$20 = SC_DEFAULT_OUT;
    SC_DEFAULT_OUT = p$$37;
    return JAM.call(thunk$$5, null, [], JAM.policy.p1);
  } finally {
    SC_DEFAULT_OUT = tmp$$20;
  }
  return;
}
function sc_withOutputToString(thunk$$6) {
  var p$$38 = JAM.new(sc_StringOutputPort, [], JAM.policy.p1);
  JAM.call(sc_withOutputToPort, null, [p$$38, thunk$$6], JAM.policy.p1);
  return JAM.call(p$$38.close, p$$38, [], JAM.policy.p1);
}
function sc_withOutputToProcedure(proc$$17, thunk$$7) {
  function t$$3(s$$18) {
    JAM.call(proc$$17, null, [JAM.call(sc_jsstring2string, null, [s$$18], JAM.policy.p1)], JAM.policy.p1);
    return;
  }
  return JAM.call(sc_withOutputToPort, null, [JAM.new(sc_GenericOutputPort, [t$$3], JAM.policy.p1), thunk$$7], JAM.policy.p1);
}
function sc_openOutputString() {
  return JAM.new(sc_StringOutputPort, [], JAM.policy.p1);
}
function sc_openInputString(str$$6) {
  return JAM.new(sc_StringInputPort, [JAM.call(sc_string2jsstring, null, [str$$6], JAM.policy.p1)], JAM.policy.p1);
}
function sc_OutputPort() {
  return;
}
function sc_StringOutputPort() {
  this.res = "";
  return;
}
function sc_getOutputString(sp) {
  return JAM.call(sc_jsstring2string, null, [sp.res], JAM.policy.p1);
}
function sc_ErrorOutputPort() {
  return;
}
function sc_GenericOutputPort(appendJSString, close$$1) {
  this.appendJSString = appendJSString;
  if (close$$1) {
    this.close = close$$1;
  }
  return;
}
function sc_isOutputPort(o$$25) {
  return o$$25 instanceof sc_OutputPort;
}
function sc_closeOutputPort(p$$39) {
  return JAM.call(p$$39.close, p$$39, [], JAM.policy.p1);
}
function sc_write(o$$26, p$$40) {
  if (p$$40 === undefined) {
    p$$40 = SC_DEFAULT_OUT;
  }
  JAM.call(p$$40.appendJSString, p$$40, [JAM.call(sc_toWriteString, null, [o$$26], JAM.policy.p1)], JAM.policy.p1);
  return;
}
function sc_toWriteString(o$$27) {
  if (o$$27 === null) {
    return "()";
  } else {
    if (o$$27 === true) {
      return "#t";
    } else {
      if (o$$27 === false) {
        return "#f";
      } else {
        if (o$$27 === undefined) {
          return "#unspecified";
        } else {
          if (typeof o$$27 === "function") {
            return "#<procedure " + JAM.call(sc_hash, null, [o$$27], JAM.policy.p1) + ">";
          } else {
            if (o$$27.sc_toWriteString) {
              return JAM.call(o$$27.sc_toWriteString, o$$27, [], JAM.policy.p1);
            } else {
              return JAM.call(o$$27.toString, o$$27, [], JAM.policy.p1);
            }
          }
        }
      }
    }
  }
  return;
}
function sc_escapeWriteString(s$$21) {
  var res$$26 = "";
  var j$$1 = 0;
  i = 0;
  var v838 = i < s$$21.length;
  for (;v838;) {
    var v837 = JAM.call(s$$21.charAt, s$$21, [i], JAM.policy.p1);
    introspect(JAM.policy.p1) {
      switch(v837) {
        case "\x00":
          var v1537 = res$$26;
          var v1880 = JAM.call(s$$21.substring, s$$21, [j$$1, i], JAM.policy.p1);
          var v1538 = v1880 + "\\0";
          res$$26 = v1537 + v1538;
          j$$1 = i + 1;
          break;
        case "\b":
          var v1539 = res$$26;
          var v1881 = JAM.call(s$$21.substring, s$$21, [j$$1, i], JAM.policy.p1);
          var v1540 = v1881 + "\\b";
          res$$26 = v1539 + v1540;
          j$$1 = i + 1;
          break;
        case "\f":
          var v1541 = res$$26;
          var v1882 = JAM.call(s$$21.substring, s$$21, [j$$1, i], JAM.policy.p1);
          var v1542 = v1882 + "\\f";
          res$$26 = v1541 + v1542;
          j$$1 = i + 1;
          break;
        case "\n":
          var v1543 = res$$26;
          var v1883 = JAM.call(s$$21.substring, s$$21, [j$$1, i], JAM.policy.p1);
          var v1544 = v1883 + "\\n";
          res$$26 = v1543 + v1544;
          j$$1 = i + 1;
          break;
        case "\r":
          var v1545 = res$$26;
          var v1884 = JAM.call(s$$21.substring, s$$21, [j$$1, i], JAM.policy.p1);
          var v1546 = v1884 + "\\r";
          res$$26 = v1545 + v1546;
          j$$1 = i + 1;
          break;
        case "\t":
          var v1547 = res$$26;
          var v1885 = JAM.call(s$$21.substring, s$$21, [j$$1, i], JAM.policy.p1);
          var v1548 = v1885 + "\\t";
          res$$26 = v1547 + v1548;
          j$$1 = i + 1;
          break;
        case "\v":
          var v1549 = res$$26;
          var v1886 = JAM.call(s$$21.substring, s$$21, [j$$1, i], JAM.policy.p1);
          var v1550 = v1886 + "\\v";
          res$$26 = v1549 + v1550;
          j$$1 = i + 1;
          break;
        case '"':
          var v1551 = res$$26;
          var v1887 = JAM.call(s$$21.substring, s$$21, [j$$1, i], JAM.policy.p1);
          var v1552 = v1887 + '\\"';
          res$$26 = v1551 + v1552;
          j$$1 = i + 1;
          break;
        case "\\":
          var v1553 = res$$26;
          var v1888 = JAM.call(s$$21.substring, s$$21, [j$$1, i], JAM.policy.p1);
          var v1554 = v1888 + "\\\\";
          res$$26 = v1553 + v1554;
          j$$1 = i + 1;
          break;
        default:
          var c$$21 = JAM.call(s$$21.charAt, s$$21, [i], JAM.policy.p1);
          var v1555 = "a" !== "a";
          if (v1555) {
            v1555 = c$$21 == "a";
          }
          var v834 = v1555;
          if (v834) {
            var v1556 = res$$26;
            var v1889 = JAM.call(s$$21.substring, s$$21, [j$$1, i], JAM.policy.p1);
            var v1557 = v1889 + "\\a";
            res$$26 = v1556 + v1557;
            j$$1 = i + 1;
            i = i + 1;
            var v1558 = s$$21.length;
            v838 = i < v1558;
            continue;
          }
          var v1559 = "\v" !== "v";
          if (v1559) {
            v1559 = c$$21 == "\v";
          }
          var v835 = v1559;
          if (v835) {
            var v1560 = res$$26;
            var v1890 = JAM.call(s$$21.substring, s$$21, [j$$1, i], JAM.policy.p1);
            var v1561 = v1890 + "\\v";
            res$$26 = v1560 + v1561;
            j$$1 = i + 1;
            i = i + 1;
            var v1562 = s$$21.length;
            v838 = i < v1562;
            continue;
          }
          var v1563 = JAM.call(s$$21.charAt, s$$21, [i], JAM.policy.p1);
          var v836 = v1563 < " ";
          if (v836) {
            var v1564 = res$$26;
            var v2207 = JAM.call(s$$21.substring, s$$21, [j$$1, i], JAM.policy.p1);
            var v1891 = v2207 + "\\x";
            var v2208 = JAM.call(s$$21.charCodeAt, s$$21, [i], JAM.policy.p1);
            var v1892 = JAM.call(v2208.toString, v2208, [16], JAM.policy.p1);
            var v1565 = v1891 + v1892;
            res$$26 = v1564 + v1565;
            j$$1 = i + 1;
          }
        ;
      }
    }
    i = i + 1;
    v838 = i < s$$21.length;
  }
  res$$26 = res$$26 + JAM.call(s$$21.substring, s$$21, [j$$1, i], JAM.policy.p1);
  return res$$26;
}
function sc_display(o$$28, p$$41) {
  if (p$$41 === undefined) {
    p$$41 = SC_DEFAULT_OUT;
  }
  JAM.call(p$$41.appendJSString, p$$41, [JAM.call(sc_toDisplayString, null, [o$$28], JAM.policy.p1)], JAM.policy.p1);
  return;
}
function sc_toDisplayString(o$$29) {
  if (o$$29 === null) {
    return "()";
  } else {
    if (o$$29 === true) {
      return "#t";
    } else {
      if (o$$29 === false) {
        return "#f";
      } else {
        if (o$$29 === undefined) {
          return "#unspecified";
        } else {
          if (typeof o$$29 === "function") {
            return "#<procedure " + JAM.call(sc_hash, null, [o$$29], JAM.policy.p1) + ">";
          } else {
            if (o$$29.sc_toDisplayString) {
              return JAM.call(o$$29.sc_toDisplayString, o$$29, [], JAM.policy.p1);
            } else {
              return JAM.call(o$$29.toString, o$$29, [], JAM.policy.p1);
            }
          }
        }
      }
    }
  }
  return;
}
function sc_newline(p$$42) {
  if (p$$42 === undefined) {
    p$$42 = SC_DEFAULT_OUT;
  }
  JAM.call(p$$42.appendJSString, p$$42, ["\n"], JAM.policy.p1);
  return;
}
function sc_writeChar(c$$22, p$$43) {
  if (p$$43 === undefined) {
    p$$43 = SC_DEFAULT_OUT;
  }
  JAM.call(p$$43.appendJSString, p$$43, [c$$22.val], JAM.policy.p1);
  return;
}
function sc_writeCircle(o$$30, p$$44) {
  if (p$$44 === undefined) {
    p$$44 = SC_DEFAULT_OUT;
  }
  JAM.call(p$$44.appendJSString, p$$44, [JAM.call(sc_toWriteCircleString, null, [o$$30], JAM.policy.p1)], JAM.policy.p1);
  return;
}
function sc_toWriteCircleString(o$$31) {
  var symb = JAM.call(sc_gensym, null, ["writeCircle"], JAM.policy.p1);
  var nbPointer = JAM.new(Object, [], JAM.policy.p1);
  nbPointer.nb = 0;
  JAM.call(sc_prepWriteCircle, null, [o$$31, symb, nbPointer], JAM.policy.p1);
  return JAM.call(sc_genToWriteCircleString, null, [o$$31, symb], JAM.policy.p1);
}
function sc_prepWriteCircle(o$$32, symb$$1, nbPointer$$1) {
  var v1571 = o$$32 instanceof sc_Pair;
  if (!v1571) {
    v1571 = o$$32 instanceof sc_Vector;
  }
  if (v1571) {
    if (o$$32[symb$$1] !== undefined) {
      JAM.set(o$$32, symb$$1, o$$32[symb$$1] + 1);
      if (!o$$32[symb$$1 + "nb"]) {
        JAM.set(o$$32, symb$$1 + "nb", nbPointer$$1.nb);
        nbPointer$$1.nb = nbPointer$$1.nb + 1;
      }
      return;
    }
    JAM.set(o$$32, symb$$1, 0);
    if (o$$32 instanceof sc_Pair) {
      JAM.call(sc_prepWriteCircle, null, [o$$32.car, symb$$1, nbPointer$$1], JAM.policy.p1);
      JAM.call(sc_prepWriteCircle, null, [o$$32.cdr, symb$$1, nbPointer$$1], JAM.policy.p1);
    } else {
      var i$$45 = 0;
      var v859 = i$$45 < o$$32.length;
      for (;v859;) {
        JAM.call(sc_prepWriteCircle, null, [o$$32[i$$45], symb$$1, nbPointer$$1], JAM.policy.p1);
        i$$45 = i$$45 + 1;
        v859 = i$$45 < o$$32.length;
      }
    }
  }
  return;
}
function sc_genToWriteCircleString(o$$33, symb$$2) {
  var v1896 = o$$33 instanceof sc_Pair;
  if (!v1896) {
    v1896 = o$$33 instanceof sc_Vector;
  }
  if (!v1896) {
    return JAM.call(sc_toWriteString, null, [o$$33], JAM.policy.p1);
  }
  return JAM.call(o$$33.sc_toWriteCircleString, o$$33, [symb$$2], JAM.policy.p1);
}
function sc_print(s$$22) {
  if (arguments.length === 1) {
    JAM.call(sc_display, null, [s$$22], JAM.policy.p1);
    JAM.call(sc_newline, null, [], JAM.policy.p1);
  } else {
    var i$$47 = 0;
    var v864 = i$$47 < arguments.length;
    for (;v864;) {
      JAM.call(sc_display, null, [arguments[i$$47]], JAM.policy.p1);
      i$$47 = i$$47 + 1;
      v864 = i$$47 < arguments.length;
    }
    JAM.call(sc_newline, null, [], JAM.policy.p1);
  }
  return;
}
function sc_format(s$$23, args$$4) {
  var len$$3 = s$$23.length;
  var p$$45 = JAM.new(sc_StringOutputPort, [], JAM.policy.p1);
  var i$$48 = 0;
  var j$$2 = 1;
  var v881 = i$$48 < len$$3;
  for (;v881;) {
    var i2 = JAM.call(s$$23.indexOf, s$$23, ["~", i$$48], JAM.policy.p1);
    if (i2 == -1) {
      JAM.call(p$$45.appendJSString, p$$45, [JAM.call(s$$23.substring, s$$23, [i$$48, len$$3], JAM.policy.p1)], JAM.policy.p1);
      return JAM.call(p$$45.close, p$$45, [], JAM.policy.p1);
    } else {
      if (i2 > i$$48) {
        if (i2 == len$$3 - 1) {
          JAM.call(p$$45.appendJSString, p$$45, [JAM.call(s$$23.substring, s$$23, [i$$48, len$$3], JAM.policy.p1)], JAM.policy.p1);
          return JAM.call(p$$45.close, p$$45, [], JAM.policy.p1);
        } else {
          JAM.call(p$$45.appendJSString, p$$45, [JAM.call(s$$23.substring, s$$23, [i$$48, i2], JAM.policy.p1)], JAM.policy.p1);
          i$$48 = i2;
        }
      }
      var v879 = JAM.call(s$$23.charCodeAt, s$$23, [i2 + 1], JAM.policy.p1);
      introspect(JAM.policy.p1) {
        switch(v879) {
          case 65:
          ;
          case 97:
            var v871 = arguments[j$$2];
            JAM.call(sc_display, null, [v871, p$$45], JAM.policy.p1);
            i$$48 = i$$48 + 2;
            j$$2 = j$$2 + 1;
            break;
          case 83:
          ;
          case 115:
            var v872 = arguments[j$$2];
            JAM.call(sc_write, null, [v872, p$$45], JAM.policy.p1);
            i$$48 = i$$48 + 2;
            j$$2 = j$$2 + 1;
            break;
          case 86:
          ;
          case 118:
            var v873 = arguments[j$$2];
            JAM.call(sc_display, null, [v873, p$$45], JAM.policy.p1);
            JAM.call(p$$45.appendJSString, p$$45, ["\n"], JAM.policy.p1);
            i$$48 = i$$48 + 2;
            j$$2 = j$$2 + 1;
            break;
          case 67:
          ;
          case 99:
            var v1583 = arguments[j$$2];
            var v874 = JAM.call(String.fromCharCode, String, [v1583], JAM.policy.p1);
            JAM.call(p$$45.appendJSString, p$$45, [v874], JAM.policy.p1);
            i$$48 = i$$48 + 2;
            j$$2 = j$$2 + 1;
            break;
          case 88:
          ;
          case 120:
            var v1584 = arguments[j$$2];
            var v875 = JAM.call(v1584.toString, v1584, [6], JAM.policy.p1);
            JAM.call(p$$45.appendJSString, p$$45, [v875], JAM.policy.p1);
            i$$48 = i$$48 + 2;
            j$$2 = j$$2 + 1;
            break;
          case 79:
          ;
          case 111:
            var v1585 = arguments[j$$2];
            var v876 = JAM.call(v1585.toString, v1585, [8], JAM.policy.p1);
            JAM.call(p$$45.appendJSString, p$$45, [v876], JAM.policy.p1);
            i$$48 = i$$48 + 2;
            j$$2 = j$$2 + 1;
            break;
          case 66:
          ;
          case 98:
            var v1586 = arguments[j$$2];
            var v877 = JAM.call(v1586.toString, v1586, [2], JAM.policy.p1);
            JAM.call(p$$45.appendJSString, p$$45, [v877], JAM.policy.p1);
            i$$48 = i$$48 + 2;
            j$$2 = j$$2 + 1;
            break;
          case 37:
          ;
          case 110:
            JAM.call(p$$45.appendJSString, p$$45, ["\n"], JAM.policy.p1);
            i$$48 = i$$48 + 2;
            break;
          case 114:
            JAM.call(p$$45.appendJSString, p$$45, ["\r"], JAM.policy.p1);
            i$$48 = i$$48 + 2;
            break;
          case 126:
            JAM.call(p$$45.appendJSString, p$$45, ["~"], JAM.policy.p1);
            i$$48 = i$$48 + 2;
            break;
          default:
            var v2509 = i2 + 1;
            var v2210 = JAM.call(s$$23.charCodeAt, s$$23, [v2509], JAM.policy.p1);
            var v1897 = JAM.call(String.fromCharCode, String, [v2210], JAM.policy.p1);
            var v1587 = "format: illegal ~" + v1897;
            var v878 = v1587 + " sequence";
            JAM.call(sc_error, null, [v878], JAM.policy.p1);
            return "";
        }
      }
    }
    v881 = i$$48 < len$$3;
  }
  return JAM.call(p$$45.close, p$$45, [], JAM.policy.p1);
}
function sc_jsstring2string(s$$24) {
  return s$$24;
}
function sc_jsstring2symbol(s$$25) {
  return sc_SYMBOL_PREFIX + s$$25;
}
function sc_string2jsstring(s$$26) {
  return s$$26;
}
function sc_symbol2jsstring(s$$27) {
  return JAM.call(s$$27.slice, s$$27, [1], JAM.policy.p1);
}
function sc_keyword2jsstring(k$$4) {
  return JAM.call(k$$4.slice, k$$4, [1], JAM.policy.p1);
}
function sc_jsstring2keyword(s$$28) {
  return sc_KEYWORD_PREFIX + s$$28;
}
function sc_isKeyword(s$$29) {
  var v882 = typeof s$$29 === "string";
  if (v882) {
    v882 = JAM.call(s$$29.charAt, s$$29, [0], JAM.policy.p1) === sc_KEYWORD_PREFIX;
  }
  return v882;
}
function sc_isEqual(o1$$2, o2$$2) {
  var v1590 = o1$$2 === o2$$2;
  if (!v1590) {
    var v2211 = JAM.call(sc_isPair, null, [o1$$2], JAM.policy.p1);
    if (v2211) {
      v2211 = JAM.call(sc_isPair, null, [o2$$2], JAM.policy.p1);
    }
    var v1898 = v2211;
    if (v1898) {
      v1898 = JAM.call(sc_isPairEqual, null, [o1$$2, o2$$2, sc_isEqual], JAM.policy.p1);
    }
    v1590 = v1898;
  }
  var v883 = v1590;
  if (!v883) {
    var v1900 = JAM.call(sc_isVector, null, [o1$$2], JAM.policy.p1);
    if (v1900) {
      v1900 = JAM.call(sc_isVector, null, [o2$$2], JAM.policy.p1);
    }
    var v1591 = v1900;
    if (v1591) {
      v1591 = JAM.call(sc_isVectorEqual, null, [o1$$2, o2$$2, sc_isEqual], JAM.policy.p1);
    }
    v883 = v1591;
  }
  return v883;
}
function sc_number2symbol(x$$74, radix$$2) {
  return sc_SYMBOL_PREFIX + JAM.call(sc_number2jsstring, null, [x$$74, radix$$2], JAM.policy.p1);
}
function sc_symbol2number(s$$30, radix$$3) {
  return JAM.call(sc_jsstring2number, null, [JAM.call(s$$30.slice, s$$30, [1], JAM.policy.p1), radix$$3], JAM.policy.p1);
}
function sc_string2integer(s$$31, radix$$4) {
  if (!radix$$4) {
    return+s$$31;
  }
  return JAM.call(parseInt, null, [s$$31, radix$$4], JAM.policy.p1);
}
function sc_string2real(s$$32) {
  return+s$$32;
}
function sc_isSymbol(s$$33) {
  var v888 = typeof s$$33 === "string";
  if (v888) {
    v888 = JAM.call(s$$33.charAt, s$$33, [0], JAM.policy.p1) === sc_SYMBOL_PREFIX;
  }
  return v888;
}
function sc_symbol2string(s$$34) {
  return JAM.call(s$$34.slice, s$$34, [1], JAM.policy.p1);
}
function sc_string2symbol(s$$35) {
  return sc_SYMBOL_PREFIX + s$$35;
}
function sc_symbolAppend() {
  var res$$29 = sc_SYMBOL_PREFIX;
  var i$$49 = 0;
  var v889 = i$$49 < arguments.length;
  for (;v889;) {
    var v1596 = res$$29;
    var v1901 = arguments[i$$49];
    res$$29 = v1596 + JAM.call(v1901.slice, v1901, [1], JAM.policy.p1);
    i$$49 = i$$49 + 1;
    v889 = i$$49 < arguments.length;
  }
  return res$$29;
}
function sc_char2string(c$$23) {
  return c$$23.val;
}
function sc_char2symbol(c$$24) {
  return sc_SYMBOL_PREFIX + c$$24.val;
}
function sc_isString(s$$36) {
  var v891 = typeof s$$36 === "string";
  if (v891) {
    v891 = JAM.call(s$$36.charAt, s$$36, [0], JAM.policy.p1) !== sc_SYMBOL_PREFIX;
  }
  return v891;
}
function sc_string() {
  var i$$50 = 0;
  var v893 = i$$50 < arguments.length;
  for (;v893;) {
    arguments[i$$50] = arguments[i$$50].val;
    i$$50 = i$$50 + 1;
    v893 = i$$50 < arguments.length;
  }
  var v894 = "".concat;
  return JAM.call(v894.apply, v894, ["", arguments], JAM.policy.p1);
}
function sc_stringLength(s$$37) {
  return s$$37.length;
}
function sc_stringRef(s$$38, k$$5) {
  return JAM.new(sc_Char, [JAM.call(s$$38.charAt, s$$38, [k$$5], JAM.policy.p1)], JAM.policy.p1);
}
function sc_isStringEqual(s1$$2, s2$$2) {
  return s1$$2 === s2$$2;
}
function sc_isStringLess(s1$$3, s2$$3) {
  return s1$$3 < s2$$3;
}
function sc_isStringGreater(s1$$4, s2$$4) {
  return s1$$4 > s2$$4;
}
function sc_isStringLessEqual(s1$$5, s2$$5) {
  return s1$$5 <= s2$$5;
}
function sc_isStringGreaterEqual(s1$$6, s2$$6) {
  return s1$$6 >= s2$$6;
}
function sc_isStringCIEqual(s1$$7, s2$$7) {
  return JAM.call(s1$$7.toLowerCase, s1$$7, [], JAM.policy.p1) === JAM.call(s2$$7.toLowerCase, s2$$7, [], JAM.policy.p1);
}
function sc_isStringCILess(s1$$8, s2$$8) {
  return JAM.call(s1$$8.toLowerCase, s1$$8, [], JAM.policy.p1) < JAM.call(s2$$8.toLowerCase, s2$$8, [], JAM.policy.p1);
}
function sc_isStringCIGreater(s1$$9, s2$$9) {
  return JAM.call(s1$$9.toLowerCase, s1$$9, [], JAM.policy.p1) > JAM.call(s2$$9.toLowerCase, s2$$9, [], JAM.policy.p1);
}
function sc_isStringCILessEqual(s1$$10, s2$$10) {
  return JAM.call(s1$$10.toLowerCase, s1$$10, [], JAM.policy.p1) <= JAM.call(s2$$10.toLowerCase, s2$$10, [], JAM.policy.p1);
}
function sc_isStringCIGreaterEqual(s1$$11, s2$$11) {
  return JAM.call(s1$$11.toLowerCase, s1$$11, [], JAM.policy.p1) >= JAM.call(s2$$11.toLowerCase, s2$$11, [], JAM.policy.p1);
}
function sc_substring(s$$39, start$$6, end$$2) {
  return JAM.call(s$$39.substring, s$$39, [start$$6, end$$2], JAM.policy.p1);
}
function sc_isSubstring_at(s1$$12, s2$$12, i$$51) {
  return s2$$12 == JAM.call(s1$$12.substring, s1$$12, [i$$51, i$$51 + s2$$12.length], JAM.policy.p1);
}
function sc_stringAppend() {
  var v908 = "".concat;
  return JAM.call(v908.apply, v908, ["", arguments], JAM.policy.p1);
}
function sc_stringCopy(s$$40) {
  return s$$40;
}
function sc_keyword2string(o$$34) {
  return JAM.call(o$$34.slice, o$$34, [1], JAM.policy.p1);
}
function sc_string2keyword(o$$35) {
  return sc_KEYWORD_PREFIX + o$$35;
}
function RunBenchmark(name$$38, count$$3, run$$1, warn) {
  var n$$14 = 0;
  var v910 = n$$14 < count$$3;
  for (;v910;) {
    result = JAM.call(run$$1, null, [], JAM.policy.p1);
    if (!JAM.call(warn, null, [result], JAM.policy.p1)) {
      throw JAM.new(Error, ["Earley or Boyer did incorrect number of rewrites"], JAM.policy.p1);
    }
    n$$14 = n$$14 + 1;
    v910 = n$$14 < count$$3;
  }
  return;
}
function ShowBox(name$$39) {
  function v3(entry$$2) {
    if (JAM.call(name$$39.valueOf, name$$39, [], JAM.policy.p1) === JAM.call(entry$$2.valueOf, entry$$2, [], JAM.policy.p1)) {
      var box1 = JAM.call(document.getElementById, document, ["Box-" + name$$39 + "Latency"], JAM.policy.p1);
      box1.style.visibility = "visible";
    }
    return;
  }
  var box = JAM.call(document.getElementById, document, ["Box-" + name$$39], JAM.policy.p1);
  box.style.visibility = "visible";
  var bar = JAM.call(document.getElementById, document, ["progress-bar"], JAM.policy.p1).style.width = "" + (completed = completed + 1) / benchmarks * 100 + "%";
  JAM.call(latencyBenchmarks.forEach, latencyBenchmarks, [v3], JAM.policy.p1);
  return;
}
function AddResult(name$$40, result$$5) {
  JAM.call(console.log, console, [name$$40 + ": " + result$$5], JAM.policy.p1);
  var box$$1 = JAM.call(document.getElementById, document, ["Result-" + name$$40], JAM.policy.p1);
  JAM.set(box$$1, "innerHTML", result$$5);
  return;
}
function AddError(name$$41, error$$2) {
  JAM.call(console.log, console, [name$$41 + ": " + error$$2.message], JAM.policy.p1);
  if (error$$2 == "TypedArrayUnsupported") {
    JAM.call(AddResult, null, [name$$41, "<b>Unsupported</b>"], JAM.policy.p1);
  } else {
    if (error$$2 == "PerformanceNowUnsupported") {
      JAM.call(AddResult, null, [name$$41, "<b>Timer error</b>"], JAM.policy.p1);
    } else {
      JAM.call(AddResult, null, [name$$41, "<b>Error</b>"], JAM.policy.p1);
    }
  }
  success = false;
  return;
}
function AddScore(score$$2) {
  var status = JAM.call(document.getElementById, document, ["main-banner"], JAM.policy.p1);
  if (success) {
    JAM.set(status, "innerHTML", "Octane Score: " + score$$2);
  } else {
    JAM.set(status, "innerHTML", "Octane Score (incomplete): " + score$$2);
  }
  JAM.call(document.getElementById, document, ["progress-bar-container"], JAM.policy.p1).style.visibility = "hidden";
  JAM.call(document.getElementById, document, ["bottom-text"], JAM.policy.p1).style.visibility = "visible";
  var v924 = JAM.call(document.getElementById, document, ["inside-anchor"], JAM.policy.p1);
  JAM.call(v924.removeChild, v924, [JAM.call(document.getElementById, document, ["bar-appendix"], JAM.policy.p1)], JAM.policy.p1);
  JAM.call(document.getElementById, document, ["alertbox"], JAM.policy.p1).style.visibility = "hidden";
  return;
}
function Run() {
  JAM.set(JAM.call(document.getElementById, document, ["main-banner"], JAM.policy.p1), "innerHTML", "Running Octane...");
  JAM.set(JAM.call(document.getElementById, document, ["bar-appendix"], JAM.policy.p1), "innerHTML", '<br/><div class="progress progress-striped" id="progress-bar-container" style="visibility:hidden"><div class="bar"style="width: 0%;" id="progress-bar"></div></div>');
  var anchor = JAM.call(document.getElementById, document, ["run-octane"], JAM.policy.p1);
  var parent = JAM.call(document.getElementById, document, ["main-container"], JAM.policy.p1);
  JAM.call(parent.appendChild, parent, [JAM.call(document.getElementById, document, ["inside-anchor"], JAM.policy.p1)], JAM.policy.p1);
  JAM.call(parent.removeChild, parent, [anchor], JAM.policy.p1);
  JAM.set(JAM.call(document.getElementById, document, ["startup-text"], JAM.policy.p1), "innerHTML", "");
  JAM.call(document.getElementById, document, ["progress-bar-container"], JAM.policy.p1).style.visibility = "visible";
  JAM.call(BenchmarkSuite.RunSuites, BenchmarkSuite, [{NotifyStart:ShowBox, NotifyError:AddError, NotifyResult:AddResult, NotifyScore:AddScore}, skipBenchmarks], JAM.policy.p1);
  return;
}
function CheckCompatibility() {
  var v1617 = typeof Uint8Array != "undefined";
  if (v1617) {
    v1617 = typeof Float64Array != "undefined";
  }
  var v933 = v1617;
  if (v933) {
    v933 = typeof JAM.new(Uint8Array, [0], JAM.policy.p1).subarray != "undefined";
  }
  var hasTypedArrays = v933;
  if (!hasTypedArrays) {
    JAM.call(console.log, console, ["Typed Arrays not supported"], JAM.policy.p1);
    JAM.call(document.getElementById, document, ["alertbox"], JAM.policy.p1).style.display = "block";
  }
  var v1907 = window.document.URL;
  if (JAM.call(v1907.indexOf, v1907, ["skip_zlib=1"], JAM.policy.p1) >= 0) {
    JAM.call(skipBenchmarks.push, skipBenchmarks, ["zlib"], JAM.policy.p1);
  }
  var v1908 = window.document.URL;
  if (JAM.call(v1908.indexOf, v1908, ["auto=1"], JAM.policy.p1) >= 0) {
    JAM.call(Run, null, [], JAM.policy.p1);
  }
  return;
}
function Load() {
  JAM.call(setTimeout, null, [CheckCompatibility, 200], JAM.policy.p1);
  return;
}
var performance = performance || {};
var v938 = performance;
var v3745 = JAM.call(v4, null, [], JAM.policy.p1);
v938.now = v3745;
BenchmarkResult.prototype.valueOf = v5;
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
BenchmarkSuite.prototype.NotifyStep = v16;
BenchmarkSuite.prototype.NotifyResult = v17;
BenchmarkSuite.prototype.NotifySkipped = v18;
BenchmarkSuite.prototype.NotifyError = v19;
BenchmarkSuite.prototype.RunSingleBenchmark = v20;
BenchmarkSuite.prototype.RunStep = v21;
var EarleyBoyer = JAM.new(BenchmarkSuite, ["EarleyBoyer", [666463], [JAM.new(Benchmark, ["Earley", true, false, 2500, v22], JAM.policy.p1), JAM.new(Benchmark, ["Boyer", true, false, 200, v23], JAM.policy.p1)]], JAM.policy.p1);
var sc_JS_GLOBALS = this;
var __sc_LINE = -1;
var __sc_FILE = "";
var sc_properties = JAM.new(Object, [], JAM.policy.p1);
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
sc_Pair.prototype.toString = v24;
sc_Pair.prototype.sc_toWriteOrDisplayString = v25;
sc_Pair.prototype.sc_toDisplayString = v26;
sc_Pair.prototype.sc_toWriteString = v27;
var v952 = sc_Char;
var v3746 = JAM.new(Object, [], JAM.policy.p1);
v952.lazy = v3746;
sc_Char.char2readable = {"\x00":"#\\null", "\u0007":"#\\bell", "\b":"#\\backspace", "\t":"#\\tab", "\n":"#\\newline", "\f":"#\\page", "\r":"#\\return", "\u001b":"#\\escape", " ":"#\\space", "\u007f":"#\\delete", "\u0001":"#\\soh", "\u0002":"#\\stx", "\u0003":"#\\etx", "\u0004":"#\\eot", "\u0005":"#\\enq", "\u0006":"#\\ack", "\x0B":"#\\vt", "\u000e":"#\\so", "\u000f":"#\\si", "\u0010":"#\\dle", "\u0011":"#\\dc1", "\u0012":"#\\dc2", "\u0013":"#\\dc3", "\u0014":"#\\dc4", "\u0015":"#\\nak", "\u0016":"#\\syn", 
"\u0017":"#\\etb", "\u0018":"#\\can", "\u0019":"#\\em", "\u001a":"#\\sub", "\u001b":"#\\esc", "\u001c":"#\\fs", "\u001d":"#\\gs", "\u001e":"#\\rs", "\u001f":"#\\us"};
sc_Char.readable2char = {"null":"\x00", "bell":"\u0007", "backspace":"\b", "tab":"\t", "newline":"\n", "page":"\f", "return":"\r", "escape":"\u001b", "space":" ", "delete":"\x00", "soh":"\u0001", "stx":"\u0002", "etx":"\u0003", "eot":"\u0004", "enq":"\u0005", "ack":"\u0006", "bel":"\u0007", "bs":"\b", "ht":"\t", "nl":"\n", "vt":"\x0B", "np":"\f", "cr":"\r", "so":"\u000e", "si":"\u000f", "dle":"\u0010", "dc1":"\u0011", "dc2":"\u0012", "dc3":"\u0013", "dc4":"\u0014", "nak":"\u0015", "syn":"\u0016", 
"etb":"\u0017", "can":"\u0018", "em":"\u0019", "sub":"\u001a", "esc":"\u001b", "fs":"\u001c", "gs":"\u001d", "rs":"\u001e", "us":"\u001f", "sp":" ", "del":"\u007f"};
sc_Char.prototype.toString = v28;
sc_Char.prototype.sc_toWriteString = v29;
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
sc_Vector.prototype.sc_toWriteOrDisplayString = v30;
sc_Vector.prototype.sc_toDisplayString = v31;
sc_Vector.prototype.sc_toWriteString = v32;
sc_Struct.prototype.sc_toDisplayString = v33;
sc_Struct.prototype.sc_toWriteString = sc_Struct.prototype.sc_toDisplayString;
sc_Hashtable.prototype.toString = v34;
var SC_HASH_COUNTER = 0;
sc_Trampoline.prototype.restart = v35;
var SC_SCM2JS_GLOBALS = JAM.new(Object, [], JAM.policy.p1);
var SC_TAIL_OBJECT = JAM.new(Object, [], JAM.policy.p1);
SC_SCM2JS_GLOBALS.TAIL_OBJECT = SC_TAIL_OBJECT;
var SC_EOF_OBJECT = JAM.new(sc_EOF, [], JAM.policy.p1);
var v962 = sc_InputPort;
var v3747 = JAM.new(sc_Port, [], JAM.policy.p1);
v962.prototype = v3747;
sc_InputPort.prototype.peekChar = v36;
sc_InputPort.prototype.readChar = v37;
sc_InputPort.prototype.isCharReady = v38;
sc_InputPort.prototype.close = v39;
var v967 = sc_ErrorInputPort;
var v3748 = JAM.new(sc_InputPort, [], JAM.policy.p1);
v967.prototype = v3748;
sc_ErrorInputPort.prototype.getNextChar = v40;
sc_ErrorInputPort.prototype.isCharReady = v41;
var v970 = sc_StringInputPort;
var v3749 = JAM.new(sc_InputPort, [], JAM.policy.p1);
v970.prototype = v3749;
sc_StringInputPort.prototype.getNextChar = v42;
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
var SC_ID_CLASS = SC_LOWER_CLASS + SC_UPPER_CLASS + "!$%*+-./:<=>?@^_~";
sc_Tokenizer.prototype.peekToken = v43;
sc_Tokenizer.prototype.readToken = v44;
sc_Tokenizer.prototype.nextToken = v45;
sc_Reader.prototype.read = v46;
var v977 = sc_OutputPort;
var v3750 = JAM.new(sc_Port, [], JAM.policy.p1);
v977.prototype = v3750;
sc_OutputPort.prototype.appendJSString = v47;
sc_OutputPort.prototype.close = v48;
var v980 = sc_StringOutputPort;
var v3751 = JAM.new(sc_OutputPort, [], JAM.policy.p1);
v980.prototype = v3751;
sc_StringOutputPort.prototype.appendJSString = v49;
sc_StringOutputPort.prototype.close = v50;
var v983 = sc_ErrorOutputPort;
var v3752 = JAM.new(sc_OutputPort, [], JAM.policy.p1);
v983.prototype = v3752;
sc_ErrorOutputPort.prototype.appendJSString = v51;
sc_ErrorOutputPort.prototype.close = v52;
var v986 = sc_GenericOutputPort;
var v3753 = JAM.new(sc_OutputPort, [], JAM.policy.p1);
v986.prototype = v3753;
sc_Pair.prototype.sc_toWriteCircleString = v53;
sc_Vector.prototype.sc_toWriteCircleString = v54;
var SC_DEFAULT_IN = JAM.new(sc_ErrorInputPort, [], JAM.policy.p1);
var SC_DEFAULT_OUT = JAM.new(sc_ErrorOutputPort, [], JAM.policy.p1);
var SC_ERROR_OUT = JAM.new(sc_ErrorOutputPort, [], JAM.policy.p1);
var sc_SYMBOL_PREFIX = "\u1e9c";
var sc_KEYWORD_PREFIX = "\u1e9d";
var sc_gensym = JAM.call(v56, null, [], JAM.policy.p1);
var sc_number2string = sc_number2jsstring;
var sc_string2number = sc_jsstring2number;
var sc_makeString = sc_makejsString;
var sc_string2list = sc_jsstring2list;
var sc_list2string = sc_list2jsstring;
String.prototype.sc_toDisplayString = v57;
String.prototype.sc_toWriteString = v58;
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
sc_const_4_nboyer = JAM.new(sc_Pair, ["\u1e9cimplies", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cand", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cimplies", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cand", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cimplies", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9cand", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cimplies", JAM.new(sc_Pair, ["\u1e9cz", JAM.new(sc_Pair, ["\u1e9cu", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cimplies", JAM.new(sc_Pair, ["\u1e9cu", JAM.new(sc_Pair, ["\u1e9cw", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], 
JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cimplies", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cw", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1);
sc_const_3_nboyer = JAM.call(sc_list, null, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ccompile", JAM.new(sc_Pair, ["\u1e9cform", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9creverse", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ccodegen", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9coptimize", JAM.new(sc_Pair, ["\u1e9cform", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnil", null], JAM.policy.p1), 
null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ceqp", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cfix", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], 
JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cfix", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cgreaterp", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clessp", 
JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clesseqp", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnot", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clessp", JAM.new(sc_Pair, ["\u1e9cy", 
JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cgreatereqp", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnot", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clessp", JAM.new(sc_Pair, 
["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cboolean", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cor", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, 
["\u1e9ct", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cf", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ciff", JAM.new(sc_Pair, 
["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cand", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cimplies", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cimplies", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], 
JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ceven1", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czerop", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ct", null], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, 
["\u1e9codd", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9csub1", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ccountps-", JAM.new(sc_Pair, ["\u1e9cl", JAM.new(sc_Pair, ["\u1e9cpred", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), 
JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ccountps-loop", JAM.new(sc_Pair, ["\u1e9cl", JAM.new(sc_Pair, ["\u1e9cpred", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cfact-", JAM.new(sc_Pair, ["\u1e9ci", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, 
["\u1e9cfact-loop", JAM.new(sc_Pair, ["\u1e9ci", JAM.new(sc_Pair, [1, null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9creverse-", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9creverse-loop", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnil", null], JAM.policy.p1), null], 
JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cdivides", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czerop", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cremainder", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1)], 
JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cassume-true", JAM.new(sc_Pair, ["\u1e9cvar", JAM.new(sc_Pair, ["\u1e9calist", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ccons", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ccons", JAM.new(sc_Pair, ["\u1e9cvar", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ct", 
null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9calist", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cassume-false", JAM.new(sc_Pair, ["\u1e9cvar", JAM.new(sc_Pair, ["\u1e9calist", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ccons", JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9ccons", JAM.new(sc_Pair, ["\u1e9cvar", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cf", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9calist", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctautology-checker", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), 
JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctautologyp", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnormalize", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnil", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cfalsify", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], 
JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cfalsify1", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnormalize", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnil", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cprime", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], 
JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cand", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnot", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czerop", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnot", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cadd1", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", 
null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cprime1", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9csub1", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], 
JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cand", JAM.new(sc_Pair, ["\u1e9cp", JAM.new(sc_Pair, ["\u1e9cq", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, ["\u1e9cp", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, ["\u1e9cq", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ct", null], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cf", 
null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cf", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cor", JAM.new(sc_Pair, ["\u1e9cp", JAM.new(sc_Pair, ["\u1e9cq", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, ["\u1e9cp", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ct", null], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, ["\u1e9cq", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ct", null], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cf", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], 
JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnot", JAM.new(sc_Pair, ["\u1e9cp", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, ["\u1e9cp", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cf", null], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ct", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], 
JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cimplies", JAM.new(sc_Pair, ["\u1e9cp", JAM.new(sc_Pair, ["\u1e9cq", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, ["\u1e9cp", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, ["\u1e9cq", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ct", null], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cf", 
null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ct", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cfix", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9cnumberp", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, 
["\u1e9cb", JAM.new(sc_Pair, ["\u1e9cc", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cd", JAM.new(sc_Pair, ["\u1e9ce", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, ["\u1e9cb", JAM.new(sc_Pair, ["\u1e9cd", JAM.new(sc_Pair, ["\u1e9ce", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], 
JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, ["\u1e9cc", JAM.new(sc_Pair, ["\u1e9cd", JAM.new(sc_Pair, ["\u1e9ce", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czerop", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), 
JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cor", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnot", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnumberp", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], 
JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), 
JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cand", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czerop", JAM.new(sc_Pair, ["\u1e9ca", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czerop", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], 
JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cdifference", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, 
["\u1e9ca", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, ["\u1e9cc", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cfix", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9cfix", JAM.new(sc_Pair, ["\u1e9cc", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cdifference", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], 
JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnot", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clessp", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, 
["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cdifference", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cand", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnumberp", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cor", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", 
JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czerop", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, 
["\u1e9cmeaning", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus-tree", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cappend", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9ca", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cmeaning", JAM.new(sc_Pair, [JAM.new(sc_Pair, 
["\u1e9cplus-tree", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9ca", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cmeaning", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus-tree", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9ca", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], 
JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cmeaning", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus-tree", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus-fringe", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9ca", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cfix", JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9cmeaning", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9ca", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cappend", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cappend", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, 
["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cappend", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cappend", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9creverse", 
JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cappend", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cappend", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9creverse", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9creverse", JAM.new(sc_Pair, ["\u1e9ca", null], JAM.policy.p1)], JAM.policy.p1), 
null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", 
JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], 
JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9cor", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czerop", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czerop", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cexec", JAM.new(sc_Pair, [JAM.new(sc_Pair, 
["\u1e9cappend", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cpds", JAM.new(sc_Pair, ["\u1e9cenvrn", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cexec", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cexec", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cpds", JAM.new(sc_Pair, ["\u1e9cenvrn", null], JAM.policy.p1)], 
JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cenvrn", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cmc-flatten", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cappend", JAM.new(sc_Pair, [JAM.new(sc_Pair, 
["\u1e9cflatten", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cmember", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cappend", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), 
null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cor", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cmember", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9ca", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cmember", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], 
JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cmember", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9creverse", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cmember", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), 
null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clength", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9creverse", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clength", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", 
JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cmember", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cintersect", JAM.new(sc_Pair, ["\u1e9cb", JAM.new(sc_Pair, ["\u1e9cc", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cand", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cmember", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1)], 
JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cmember", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, ["\u1e9cc", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnth", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9ci", null], JAM.policy.p1)], 
JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cexp", JAM.new(sc_Pair, ["\u1e9ci", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cj", JAM.new(sc_Pair, ["\u1e9ck", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cexp", JAM.new(sc_Pair, ["\u1e9ci", JAM.new(sc_Pair, ["\u1e9cj", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cexp", JAM.new(sc_Pair, ["\u1e9ci", JAM.new(sc_Pair, ["\u1e9ck", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", 
JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cexp", JAM.new(sc_Pair, ["\u1e9ci", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cj", JAM.new(sc_Pair, ["\u1e9ck", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cexp", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cexp", JAM.new(sc_Pair, ["\u1e9ci", JAM.new(sc_Pair, ["\u1e9cj", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), 
JAM.new(sc_Pair, ["\u1e9ck", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9creverse-loop", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cappend", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9creverse", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], 
JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9creverse-loop", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnil", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9creverse", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], 
JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ccount-list", JAM.new(sc_Pair, ["\u1e9cz", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9csort-lp", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, [JAM.new(sc_Pair, 
["\u1e9ccount-list", JAM.new(sc_Pair, ["\u1e9cz", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ccount-list", JAM.new(sc_Pair, ["\u1e9cz", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", 
JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cappend", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cappend", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, ["\u1e9cc", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, ["\u1e9cb", JAM.new(sc_Pair, ["\u1e9cc", null], 
JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cremainder", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cquotient", JAM.new(sc_Pair, 
["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cfix", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cpower-eval", JAM.new(sc_Pair, [JAM.new(sc_Pair, 
["\u1e9cbig-plus1", JAM.new(sc_Pair, ["\u1e9cl", JAM.new(sc_Pair, ["\u1e9ci", JAM.new(sc_Pair, ["\u1e9cbase", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cbase", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cpower-eval", JAM.new(sc_Pair, ["\u1e9cl", JAM.new(sc_Pair, ["\u1e9cbase", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, 
["\u1e9ci", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cpower-eval", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cbig-plus", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9ci", JAM.new(sc_Pair, ["\u1e9cbase", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cbase", 
null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9ci", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cpower-eval", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cbase", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cpower-eval", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cbase", null], JAM.policy.p1)], 
JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cremainder", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, [1, null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], 
JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clessp", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cremainder", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnot", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czerop", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], 
JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cremainder", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, 
["\u1e9clessp", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cquotient", JAM.new(sc_Pair, ["\u1e9ci", JAM.new(sc_Pair, ["\u1e9cj", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9ci", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cand", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnot", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czerop", JAM.new(sc_Pair, ["\u1e9ci", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], 
JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cor", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czerop", JAM.new(sc_Pair, ["\u1e9cj", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnot", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, ["\u1e9cj", JAM.new(sc_Pair, [1, null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], 
JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clessp", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cremainder", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cand", JAM.new(sc_Pair, [JAM.new(sc_Pair, 
["\u1e9cnot", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czerop", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnot", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czerop", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnot", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clessp", JAM.new(sc_Pair, ["\u1e9cx", 
JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cpower-eval", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cpower-rep", JAM.new(sc_Pair, ["\u1e9ci", JAM.new(sc_Pair, ["\u1e9cbase", null], JAM.policy.p1)], JAM.policy.p1)], 
JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cbase", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cfix", JAM.new(sc_Pair, ["\u1e9ci", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cpower-eval", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cbig-plus", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cpower-rep", JAM.new(sc_Pair, ["\u1e9ci", 
JAM.new(sc_Pair, ["\u1e9cbase", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cpower-rep", JAM.new(sc_Pair, ["\u1e9cj", JAM.new(sc_Pair, ["\u1e9cbase", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cbase", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cbase", null], JAM.policy.p1)], 
JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9ci", JAM.new(sc_Pair, ["\u1e9cj", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cgcd", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cgcd", 
JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnth", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cappend", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9ci", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), 
JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cappend", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnth", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, ["\u1e9ci", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnth", JAM.new(sc_Pair, ["\u1e9cb", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cdifference", JAM.new(sc_Pair, ["\u1e9ci", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clength", JAM.new(sc_Pair, ["\u1e9ca", null], JAM.policy.p1)], JAM.policy.p1), null], 
JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cdifference", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cx", 
null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cfix", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cdifference", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, 
["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cfix", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cdifference", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cdifference", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, 
["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cdifference", JAM.new(sc_Pair, ["\u1e9cc", JAM.new(sc_Pair, ["\u1e9cw", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cdifference", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cc", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cw", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cremainder", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], 
JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cdifference", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cb", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, ["\u1e9cc", 
null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9ca", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cb", JAM.new(sc_Pair, ["\u1e9cc", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cdifference", 
JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cadd1", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cadd1", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], 
JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clessp", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9clessp", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clessp", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", 
JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cand", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnot", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czerop", JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clessp", JAM.new(sc_Pair, ["\u1e9cx", 
JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clessp", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], 
JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnot", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czerop", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cgcd", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], 
JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cz", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cgcd", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], 
JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cvalue", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnormalize", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9ca", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cvalue", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9ca", 
null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cflatten", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ccons", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnil", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], 
JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cand", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnlistp", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], 
JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clistp", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cgopher", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clistp", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, 
["\u1e9csamefringe", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cflatten", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cflatten", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], 
JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cgreatest-factor", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cand", JAM.new(sc_Pair, [JAM.new(sc_Pair, 
["\u1e9cor", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czerop", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, [1, null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), 
null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cgreatest-factor", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [1, null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), 
JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [1, null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnumberp", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cgreatest-factor", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], 
JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnot", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cand", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cor", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czerop", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, [1, null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9cnot", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnumberp", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes-list", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cappend", JAM.new(sc_Pair, 
["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes-list", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes-list", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], 
JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cprime-list", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cappend", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cand", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cprime-list", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], 
JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cprime-list", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, ["\u1e9cz", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cw", JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], 
JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cand", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnumberp", JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cor", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, ["\u1e9cz", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], 
JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, ["\u1e9cw", JAM.new(sc_Pair, [1, null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cgreatereqp", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], 
JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnot", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clessp", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", 
JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cor", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cand", JAM.new(sc_Pair, [JAM.new(sc_Pair, 
["\u1e9cnumberp", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, [1, null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cremainder", 
JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, 
["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [1, null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.call(sc_list, null, ["\u1e9cand", JAM.new(sc_Pair, ["\u1e9cnot", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), 
null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cnot", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, ["\u1e9cb", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cnumberp", JAM.new(sc_Pair, ["\u1e9ca", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cnumberp", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], 
JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9csub1", JAM.new(sc_Pair, ["\u1e9ca", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9csub1", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], 
JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clessp", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clength", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cdelete", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cl", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9clength", JAM.new(sc_Pair, ["\u1e9cl", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cmember", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cl", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9csort2", JAM.new(sc_Pair, [JAM.new(sc_Pair, 
["\u1e9cdelete", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cl", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cdelete", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9csort2", JAM.new(sc_Pair, ["\u1e9cl", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, 
["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cdsort", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9csort2", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clength", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ccons", JAM.new(sc_Pair, ["\u1e9cx1", JAM.new(sc_Pair, [JAM.new(sc_Pair, 
["\u1e9ccons", JAM.new(sc_Pair, ["\u1e9cx2", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ccons", JAM.new(sc_Pair, ["\u1e9cx3", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ccons", JAM.new(sc_Pair, ["\u1e9cx4", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ccons", JAM.new(sc_Pair, ["\u1e9cx5", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ccons", JAM.new(sc_Pair, ["\u1e9cx6", JAM.new(sc_Pair, ["\u1e9cx7", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), 
null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, [6, JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clength", JAM.new(sc_Pair, ["\u1e9cx7", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], 
JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cdifference", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cadd1", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cadd1", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [2, null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cfix", JAM.new(sc_Pair, 
["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cquotient", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, 
[2, null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cquotient", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, [2, null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9csigma", JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9ci", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cquotient", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9ci", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cadd1", JAM.new(sc_Pair, ["\u1e9ci", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [2, null], JAM.policy.p1)], JAM.policy.p1)], 
JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cadd1", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnumberp", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], 
JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cadd1", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cadd1", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], 
JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cdifference", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cdifference", JAM.new(sc_Pair, ["\u1e9cz", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clessp", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnot", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clessp", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9clessp", JAM.new(sc_Pair, ["\u1e9cz", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnot", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clessp", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cfix", 
JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cfix", JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, 
["\u1e9cmeaning", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus-tree", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cdelete", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9ca", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cmember", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, 
["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cdifference", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cmeaning", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus-tree", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9ca", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cmeaning", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9ca", null], 
JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cmeaning", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus-tree", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9ca", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), 
JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cadd1", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnumberp", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", 
JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cfix", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), 
JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnth", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnil", null], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9ci", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czerop", JAM.new(sc_Pair, ["\u1e9ci", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnil", null], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, 
["\u1e9czero", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clast", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cappend", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", 
JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clistp", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clast", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clistp", JAM.new(sc_Pair, ["\u1e9ca", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ccons", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ccar", 
JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clast", JAM.new(sc_Pair, ["\u1e9ca", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", 
JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clessp", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clessp", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], 
JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ct", null], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cf", null], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cz", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), 
null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cassignment", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cappend", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cassignedp", 
JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9ca", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cassignment", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9ca", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cassignment", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], 
JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ccar", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cgopher", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clistp", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9ccar", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cflatten", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cflatten", JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9ccdr", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cgopher", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clistp", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ccdr", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cflatten", 
JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ccons", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnil", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, 
["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cquotient", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czerop", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cfix", JAM.new(sc_Pair, ["\u1e9cx", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cget", JAM.new(sc_Pair, ["\u1e9cj", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cset", JAM.new(sc_Pair, ["\u1e9ci", JAM.new(sc_Pair, 
["\u1e9cval", JAM.new(sc_Pair, ["\u1e9cmem", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cif", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ceqp", JAM.new(sc_Pair, ["\u1e9cj", JAM.new(sc_Pair, ["\u1e9ci", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, ["\u1e9cval", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cget", JAM.new(sc_Pair, ["\u1e9cj", JAM.new(sc_Pair, 
["\u1e9cmem", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1);
const_nboyer = JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cf", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cc", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9czero", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), 
null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cy", JAM.new(sc_Pair, ["\u1e9cf", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ctimes", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9cc", JAM.new(sc_Pair, 
["\u1e9cd", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cz", JAM.new(sc_Pair, ["\u1e9cf", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9creverse", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cappend", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cappend", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1)], 
JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cnil", null], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cu", JAM.new(sc_Pair, ["\u1e9cequal", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cplus", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, 
[JAM.new(sc_Pair, ["\u1e9cdifference", JAM.new(sc_Pair, ["\u1e9cx", JAM.new(sc_Pair, ["\u1e9cy", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cw", JAM.new(sc_Pair, ["\u1e9clessp", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cremainder", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, 
["\u1e9cmember", JAM.new(sc_Pair, ["\u1e9ca", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9clength", JAM.new(sc_Pair, ["\u1e9cb", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1);
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
const_earley = JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cs", JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9ca", null], JAM.policy.p1), JAM.new(sc_Pair, [JAM.new(sc_Pair, ["\u1e9cs", JAM.new(sc_Pair, ["\u1e9cs", null], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1)], JAM.policy.p1)], JAM.policy.p1), null], JAM.policy.p1);
BgL_makezd2parserzd2 = v109;
BgL_parsezd2ze3parsedzf3zc2 = v110;
BgL_parsezd2ze3treesz31 = v111;
BgL_parsezd2ze3nbzd2treesze3 = v112;
test = v114;
BgL_earleyzd2benchmarkzd2 = v117;
SC_DEFAULT_OUT = JAM.new(sc_GenericOutputPort, [v118], JAM.policy.p1);
SC_ERROR_OUT = SC_DEFAULT_OUT;
var BgL_runzd2benchmarkzd2 = RunBenchmark;
var completed = 0;
var benchmarks = JAM.call(BenchmarkSuite.CountBenchmarks, BenchmarkSuite, [], JAM.policy.p1);
var success = true;
var latencyBenchmarks = ["Splay", "Mandreel"];
var v1101;
if (typeof skipBenchmarks === "undefined") {
  v1101 = [];
} else {
  v1101 = skipBenchmarks;
}
var skipBenchmarks = v1101

