function v21(fn, bits) {
  BigInteger.prototype.am = fn;
  dbits = bits;
  BI_DB = dbits;
  BI_DM = (1 << dbits) - 1;
  BI_DV = 1 << dbits;
  BI_FP = 52;
  BI_FV = JAM.call(Math.pow, Math, [2, BI_FP]);
  BI_F1 = BI_FP - dbits;
  BI_F2 = 2 * dbits - BI_FP;
  return
}
function v20(runner$$2) {
  function RunNextSetup() {
    if(index$$40 < length$$12) {
      try {
        var v815 = suite$$1.benchmarks;
        introspect(JAM.policy.p1) {
          var v25 = v815[index$$40]
        }
        v25.Setup()
      }catch(e$$4) {
        JAM.call(suite$$1.NotifyError, suite$$1, [e$$4]);
        return null
      }
      return RunNextBenchmark
    }
    suite$$1.NotifyResult();
    return null
  }
  function RunNextBenchmark() {
    try {
      var v816 = suite$$1.benchmarks;
      introspect(JAM.policy.p1) {
        var v27 = v816[index$$40]
      }
      data$$20 = JAM.call(suite$$1.RunSingleBenchmark, suite$$1, [v27, data$$20])
    }catch(e$$5) {
      JAM.call(suite$$1.NotifyError, suite$$1, [e$$5]);
      return null
    }
    var v28;
    if(data$$20 == null) {
      v28 = RunNextTearDown
    }else {
      v28 = RunNextBenchmark()
    }
    return v28
  }
  function RunNextTearDown() {
    try {
      var v818 = suite$$1.benchmarks;
      var v819 = index$$40;
      index$$40 = index$$40 + 1;
      introspect(JAM.policy.p1) {
        var v29 = v818[v819]
      }
      v29.TearDown()
    }catch(e$$6) {
      JAM.call(suite$$1.NotifyError, suite$$1, [e$$6]);
      return null
    }
    return RunNextSetup
  }
  BenchmarkSuite.ResetRNG();
  this.results = [];
  this.runner = runner$$2;
  var length$$12 = this.benchmarks.length;
  var index$$40 = 0;
  var suite$$1 = this;
  var data$$20;
  return RunNextSetup()
}
function v19(benchmark$$1, data$$18) {
  function Measure(data$$19) {
    var elapsed = 0;
    var start$$4 = new Date;
    var i$$5 = 0;
    var v820;
    if(doDeterministic$$1) {
      v820 = i$$5 < benchmark$$1.deterministicIterations
    }else {
      v820 = elapsed < 1E3
    }
    var v32 = v820;
    for(;v32;) {
      benchmark$$1.run();
      elapsed = new Date - start$$4;
      i$$5 = i$$5 + 1;
      var v821;
      if(doDeterministic$$1) {
        v821 = i$$5 < benchmark$$1.deterministicIterations
      }else {
        v821 = elapsed < 1E3
      }
      v32 = v821
    }
    if(data$$19 != null) {
      data$$19.runs = data$$19.runs + i$$5;
      data$$19.elapsed = data$$19.elapsed + elapsed
    }
    return
  }
  var config = BenchmarkSuite.config;
  var v34;
  if(config.doWarmup !== undefined) {
    v34 = config.doWarmup
  }else {
    v34 = benchmark$$1.doWarmup
  }
  var doWarmup$$1 = v34;
  var v35;
  if(config.doDeterministic !== undefined) {
    v35 = config.doDeterministic
  }else {
    v35 = benchmark$$1.doDeterministic
  }
  var doDeterministic$$1 = v35;
  var v826 = !doWarmup$$1;
  if(v826) {
    v826 = data$$18 == null
  }
  if(v826) {
    data$$18 = {runs:0, elapsed:0}
  }
  if(data$$18 == null) {
    Measure(null);
    return{runs:0, elapsed:0}
  }else {
    Measure(data$$18);
    if(data$$18.runs < benchmark$$1.minIterations) {
      return data$$18
    }
    var usec = data$$18.elapsed * 1E3 / data$$18.runs;
    var v40;
    if(benchmark$$1.rmsResult != null) {
      v40 = benchmark$$1.rmsResult()
    }else {
      v40 = 0
    }
    var rms = v40;
    JAM.call(this.NotifyStep, this, [new BenchmarkResult(benchmark$$1, usec, rms)]);
    return null
  }
  return
}
function v18(error$$2) {
  if(this.runner.NotifyError) {
    var v43 = this.runner;
    JAM.call(v43.NotifyError, v43, [this.name, error$$2])
  }
  if(this.runner.NotifyStep) {
    var v46 = this.runner;
    JAM.call(v46.NotifyStep, v46, [this.name])
  }
  return
}
function v17(runner$$1) {
  BenchmarkSuite.scores.push(1);
  if(runner$$1.NotifyResult) {
    JAM.call(runner$$1.NotifyResult, runner$$1, [this.name, "Skipped"])
  }
  return
}
function v16() {
  var mean = JAM.call(BenchmarkSuite.GeometricMeanTime, BenchmarkSuite, [this.results]);
  var score$$1 = this.reference[0] / mean;
  BenchmarkSuite.scores.push(score$$1);
  if(this.runner.NotifyResult) {
    var formatted$$1 = JAM.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [100 * score$$1]);
    var v56 = this.runner;
    JAM.call(v56.NotifyResult, v56, [this.name, formatted$$1])
  }
  if(this.reference.length == 2) {
    var meanLatency = JAM.call(BenchmarkSuite.GeometricMeanLatency, BenchmarkSuite, [this.results]);
    if(meanLatency != 0) {
      var scoreLatency = this.reference[1] / meanLatency;
      BenchmarkSuite.scores.push(scoreLatency);
      if(this.runner.NotifyResult) {
        var formattedLatency = JAM.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [100 * scoreLatency]);
        var v63 = this.runner;
        JAM.call(v63.NotifyResult, v63, [this.name + "Latency", formattedLatency])
      }
    }
  }
  return
}
function v15(result$$1) {
  this.results.push(result$$1);
  if(this.runner.NotifyStep) {
    var v69 = this.runner;
    JAM.call(v69.NotifyStep, v69, [result$$1.benchmark.name])
  }
  return
}
function v14(value$$29) {
  if(value$$29 > 100) {
    return value$$29.toFixed(0)
  }else {
    return value$$29.toPrecision(3)
  }
  return
}
function v13(measurements$$1) {
  var log$$2 = 0;
  var hasLatencyResult = false;
  var i$$4 = 0;
  var v74 = i$$4 < measurements$$1.length;
  for(;v74;) {
    introspect(JAM.policy.p1) {
      var v1321 = measurements$$1[i$$4]
    }
    if(v1321.latency != 0) {
      var v843 = log$$2;
      introspect(JAM.policy.p1) {
        var v1553 = measurements$$1[i$$4]
      }
      log$$2 = v843 + Math.log(v1553.latency);
      hasLatencyResult = true
    }
    i$$4 = i$$4 + 1;
    v74 = i$$4 < measurements$$1.length
  }
  if(hasLatencyResult) {
    return JAM.call(Math.pow, Math, [Math.E, log$$2 / measurements$$1.length])
  }else {
    return 0
  }
  return
}
function v12(measurements) {
  var log$$1 = 0;
  var i$$3 = 0;
  var v77 = i$$3 < measurements.length;
  for(;v77;) {
    var v848 = log$$1;
    introspect(JAM.policy.p1) {
      var v1554 = measurements[i$$3]
    }
    log$$1 = v848 + Math.log(v1554.time);
    i$$3 = i$$3 + 1;
    v77 = i$$3 < measurements.length
  }
  return JAM.call(Math.pow, Math, [Math.E, log$$1 / measurements.length])
}
function v11(numbers) {
  var log = 0;
  var i$$2 = 0;
  var v80 = i$$2 < numbers.length;
  for(;v80;) {
    var v853 = log;
    introspect(JAM.policy.p1) {
      var v1324 = numbers[i$$2]
    }
    log = v853 + Math.log(v1324);
    i$$2 = i$$2 + 1;
    v80 = i$$2 < numbers.length
  }
  return JAM.call(Math.pow, Math, [Math.E, log / numbers.length])
}
function v10() {
  var result = 0;
  var suites$$1 = BenchmarkSuite.suites;
  var i$$1 = 0;
  var v83 = i$$1 < suites$$1.length;
  for(;v83;) {
    introspect(JAM.policy.p1) {
      var v1555 = suites$$1[i$$1]
    }
    result = result + v1555.benchmarks.length;
    i$$1 = i$$1 + 1;
    v83 = i$$1 < suites$$1.length
  }
  return result
}
function v9(runner, skipBenchmarks$$1) {
  function RunStep() {
    var v860 = continuation;
    if(!v860) {
      v860 = index$$39 < length$$11
    }
    var v89 = v860;
    for(;v89;) {
      if(continuation) {
        continuation = continuation()
      }else {
        var v84 = index$$39;
        index$$39 = index$$39 + 1;
        introspect(JAM.policy.p1) {
          var suite = suites[v84]
        }
        if(runner.NotifyStart) {
          JAM.call(runner.NotifyStart, runner, [suite.name])
        }
        if(skipBenchmarks$$1.indexOf(suite.name) > -1) {
          JAM.call(suite.NotifySkipped, suite, [runner])
        }else {
          continuation = JAM.call(suite.RunStep, suite, [runner])
        }
      }
      var v862 = continuation;
      if(v862) {
        var v1328 = typeof window != "undefined";
        if(v1328) {
          v1328 = window.setTimeout
        }
        v862 = v1328
      }
      if(v862) {
        window.setTimeout(RunStep, 25);
        return
      }
      var v863 = continuation;
      if(!v863) {
        v863 = index$$39 < length$$11
      }
      v89 = v863
    }
    if(runner.NotifyScore) {
      var score = JAM.call(BenchmarkSuite.GeometricMean, BenchmarkSuite, [BenchmarkSuite.scores]);
      var formatted = JAM.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [100 * score]);
      JAM.call(runner.NotifyScore, runner, [formatted])
    }
    return
  }
  var v93;
  if(typeof skipBenchmarks$$1 === "undefined") {
    v93 = []
  }else {
    v93 = skipBenchmarks$$1
  }
  skipBenchmarks$$1 = v93;
  var continuation = null;
  var suites = BenchmarkSuite.suites;
  var length$$11 = suites.length;
  BenchmarkSuite.scores = [];
  var index$$39 = 0;
  RunStep();
  return
}
function v8() {
  function v7() {
    function v6() {
      seed = seed + 2127912214 + (seed << 12) & 4294967295;
      seed = (seed ^ 3345072700 ^ seed >>> 19) & 4294967295;
      seed = seed + 374761393 + (seed << 5) & 4294967295;
      seed = (seed + 3550635116 ^ seed << 9) & 4294967295;
      seed = seed + 4251993797 + (seed << 3) & 4294967295;
      seed = (seed ^ 3042594569 ^ seed >>> 16) & 4294967295;
      return(seed & 268435455) / 268435456
    }
    var seed = 49734321;
    return v6
  }
  var v101 = Math;
  var v1698 = v7();
  v101.random = v1698;
  return
}
function v5(s$$2) {
  throw"Alert called with argument: " + s$$2;
}
function v4() {
  return this.time
}
function v3() {
  var v102 = performance.now;
  if(!v102) {
    var v877 = performance.mozNow;
    if(!v877) {
      var v1331 = performance.msNow;
      if(!v1331) {
        var v1557 = performance.oNow;
        if(!v1557) {
          var v1643 = performance.webkitNow;
          if(!v1643) {
            v1643 = Date.now
          }
          v1557 = v1643
        }
        v1331 = v1557
      }
      v877 = v1331
    }
    v102 = v877
  }
  return v102
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
  var v103;
  if(setup) {
    v103 = setup
  }else {
    v103 = v0
  }
  this.Setup = v103;
  var v104;
  if(tearDown) {
    v104 = tearDown
  }else {
    v104 = v1
  }
  this.TearDown = v104;
  var v105;
  if(rmsResult) {
    v105 = rmsResult
  }else {
    v105 = null
  }
  this.rmsResult = v105;
  var v106;
  if(minIterations) {
    v106 = minIterations
  }else {
    v106 = 32
  }
  this.minIterations = v106;
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
  BenchmarkSuite.suites.push(this);
  return
}
function BigInteger(a, b, c) {
  var v1699 = new Array;
  this.array = v1699;
  if(a != null) {
    if("number" == typeof a) {
      JAM.call(this.fromNumber, this, [a, b, c])
    }else {
      var v880 = b == null;
      if(v880) {
        v880 = "string" != typeof a
      }
      if(v880) {
        JAM.call(this.fromString, this, [a, 256])
      }else {
        JAM.call(this.fromString, this, [a, b])
      }
    }
  }
  return
}
function nbi() {
  return new BigInteger(null)
}
function am1(i$$6, x$$48, w$$5, j, c$$1, n$$1) {
  var this_array$$1 = this.array;
  var w_array = w$$5.array;
  var v114 = (n$$1 = n$$1 - 1) >= 0;
  for(;v114;) {
    var v1559 = i$$6;
    i$$6 = i$$6 + 1;
    introspect(JAM.policy.p1) {
      var v1334 = this_array$$1[v1559]
    }
    var v882 = x$$48 * v1334;
    introspect(JAM.policy.p1) {
      var v883 = w_array[j]
    }
    var v = v882 + v883 + c$$1;
    c$$1 = Math.floor(v / 67108864);
    var v113 = j;
    j = j + 1;
    JAM.set(w_array, v113, v & 67108863);
    v114 = (n$$1 = n$$1 - 1) >= 0
  }
  return c$$1
}
function am2(i$$7, x$$49, w$$6, j$$1, c$$2, n$$2) {
  var this_array$$2 = this.array;
  var w_array$$1 = w$$6.array;
  var xl = x$$49 & 32767;
  var xh = x$$49 >> 15;
  var v124 = (n$$2 = n$$2 - 1) >= 0;
  for(;v124;) {
    introspect(JAM.policy.p1) {
      var v115 = this_array$$2[i$$7]
    }
    var l = v115 & 32767;
    var v886 = i$$7;
    i$$7 = i$$7 + 1;
    introspect(JAM.policy.p1) {
      var v116 = this_array$$2[v886]
    }
    var h$$4 = v116 >> 15;
    var m = xh * l + h$$4 * xl;
    var v887 = xl * l + ((m & 32767) << 15);
    introspect(JAM.policy.p1) {
      var v888 = w_array$$1[j$$1]
    }
    l = v887 + v888 + (c$$2 & 1073741823);
    c$$2 = (l >>> 30) + (m >>> 15) + xh * h$$4 + (c$$2 >>> 30);
    var v123 = j$$1;
    j$$1 = j$$1 + 1;
    JAM.set(w_array$$1, v123, l & 1073741823);
    v124 = (n$$2 = n$$2 - 1) >= 0
  }
  return c$$2
}
function am3(i$$8, x$$50, w$$7, j$$2, c$$3, n$$3) {
  var this_array$$3 = this.array;
  var w_array$$2 = w$$7.array;
  var xl$$1 = x$$50 & 16383;
  var xh$$1 = x$$50 >> 14;
  var v133 = (n$$3 = n$$3 - 1) >= 0;
  for(;v133;) {
    introspect(JAM.policy.p1) {
      var v125 = this_array$$3[i$$8]
    }
    var l$$1 = v125 & 16383;
    var v893 = i$$8;
    i$$8 = i$$8 + 1;
    introspect(JAM.policy.p1) {
      var v126 = this_array$$3[v893]
    }
    var h$$5 = v126 >> 14;
    var m$$1 = xh$$1 * l$$1 + h$$5 * xl$$1;
    var v894 = xl$$1 * l$$1 + ((m$$1 & 16383) << 14);
    introspect(JAM.policy.p1) {
      var v895 = w_array$$2[j$$2]
    }
    l$$1 = v894 + v895 + c$$3;
    c$$3 = (l$$1 >> 28) + (m$$1 >> 14) + xh$$1 * h$$5;
    var v132 = j$$2;
    j$$2 = j$$2 + 1;
    JAM.set(w_array$$2, v132, l$$1 & 268435455);
    v133 = (n$$3 = n$$3 - 1) >= 0
  }
  return c$$3
}
function am4(i$$9, x$$51, w$$8, j$$3, c$$4, n$$4) {
  var this_array$$4 = this.array;
  var w_array$$3 = w$$8.array;
  var xl$$2 = x$$51 & 8191;
  var xh$$2 = x$$51 >> 13;
  var v142 = (n$$4 = n$$4 - 1) >= 0;
  for(;v142;) {
    introspect(JAM.policy.p1) {
      var v134 = this_array$$4[i$$9]
    }
    var l$$2 = v134 & 8191;
    var v900 = i$$9;
    i$$9 = i$$9 + 1;
    introspect(JAM.policy.p1) {
      var v135 = this_array$$4[v900]
    }
    var h$$6 = v135 >> 13;
    var m$$2 = xh$$2 * l$$2 + h$$6 * xl$$2;
    var v901 = xl$$2 * l$$2 + ((m$$2 & 8191) << 13);
    introspect(JAM.policy.p1) {
      var v902 = w_array$$3[j$$3]
    }
    l$$2 = v901 + v902 + c$$4;
    c$$4 = (l$$2 >> 26) + (m$$2 >> 13) + xh$$2 * h$$6;
    var v141 = j$$3;
    j$$3 = j$$3 + 1;
    JAM.set(w_array$$3, v141, l$$2 & 67108863);
    v142 = (n$$4 = n$$4 - 1) >= 0
  }
  return c$$4
}
function int2char(n$$5) {
  return BI_RM.charAt(n$$5)
}
function intAt(s$$3, i$$10) {
  var v143 = BI_RC;
  var v144 = s$$3.charCodeAt(i$$10);
  introspect(JAM.policy.p1) {
    var c$$5 = v143[v144]
  }
  var v145;
  if(c$$5 == null) {
    v145 = -1
  }else {
    v145 = c$$5
  }
  return v145
}
function bnpCopyTo(r) {
  var this_array$$5 = this.array;
  var r_array = r.array;
  var i$$11 = this.t - 1;
  var v147 = i$$11 >= 0;
  for(;v147;) {
    r_array[i$$11] = this_array$$5[i$$11];
    i$$11 = i$$11 - 1;
    v147 = i$$11 >= 0
  }
  r.t = this.t;
  r.s = this.s;
  return
}
function bnpFromInt(x$$52) {
  var this_array$$6 = this.array;
  this.t = 1;
  var v148;
  if(x$$52 < 0) {
    v148 = -1
  }else {
    v148 = 0
  }
  this.s = v148;
  if(x$$52 > 0) {
    this_array$$6[0] = x$$52
  }else {
    if(x$$52 < -1) {
      this_array$$6[0] = x$$52 + DV
    }else {
      this.t = 0
    }
  }
  return
}
function nbv(i$$12) {
  var r$$1 = nbi();
  JAM.call(r$$1.fromInt, r$$1, [i$$12]);
  return r$$1
}
function bnpFromString(s$$4, b$$1) {
  var this_array$$7 = this.array;
  var k;
  if(b$$1 == 16) {
    k = 4
  }else {
    if(b$$1 == 8) {
      k = 3
    }else {
      if(b$$1 == 256) {
        k = 8
      }else {
        if(b$$1 == 2) {
          k = 1
        }else {
          if(b$$1 == 32) {
            k = 5
          }else {
            if(b$$1 == 4) {
              k = 2
            }else {
              JAM.call(this.fromRadix, this, [s$$4, b$$1]);
              return
            }
          }
        }
      }
    }
  }
  this.t = 0;
  this.s = 0;
  var i$$13 = s$$4.length;
  var mi = false;
  var sh$$2 = 0;
  var v167 = (i$$13 = i$$13 - 1) >= 0;
  for(;v167;) {
    var v157;
    if(k == 8) {
      introspect(JAM.policy.p1) {
        var v909 = s$$4[i$$13]
      }
      v157 = v909 & 255
    }else {
      v157 = intAt(s$$4, i$$13)
    }
    var x$$53 = v157;
    if(x$$53 < 0) {
      if(s$$4.charAt(i$$13) == "-") {
        mi = true
      }
      v167 = (i$$13 = i$$13 - 1) >= 0;
      continue
    }
    mi = false;
    if(sh$$2 == 0) {
      var v160 = this.t;
      this.t = this.t + 1;
      this_array$$7[v160] = x$$53
    }else {
      if(sh$$2 + k > BI_DB) {
        var v161 = this.t - 1;
        introspect(JAM.policy.p1) {
          var v1344 = this_array$$7[v161]
        }
        this_array$$7[v161] = v1344 | (x$$53 & (1 << BI_DB - sh$$2) - 1) << sh$$2;
        var v162 = this.t;
        this.t = this.t + 1;
        this_array$$7[v162] = x$$53 >> BI_DB - sh$$2
      }else {
        var v163 = this.t - 1;
        introspect(JAM.policy.p1) {
          var v1347 = this_array$$7[v163]
        }
        this_array$$7[v163] = v1347 | x$$53 << sh$$2
      }
    }
    sh$$2 = sh$$2 + k;
    if(sh$$2 >= BI_DB) {
      sh$$2 = sh$$2 - BI_DB
    }
    v167 = (i$$13 = i$$13 - 1) >= 0
  }
  var v918 = k == 8;
  if(v918) {
    v918 = (s$$4[0] & 128) != 0
  }
  if(v918) {
    this.s = -1;
    if(sh$$2 > 0) {
      var v168 = this.t - 1;
      introspect(JAM.policy.p1) {
        var v1350 = this_array$$7[v168]
      }
      this_array$$7[v168] = v1350 | (1 << BI_DB - sh$$2) - 1 << sh$$2
    }
  }
  this.clamp();
  if(mi) {
    var v171 = BigInteger.ZERO;
    JAM.call(v171.subTo, v171, [this, this])
  }
  return
}
function bnpClamp() {
  var this_array$$8 = this.array;
  var c$$6 = this.s & BI_DM;
  var v920 = this.t > 0;
  if(v920) {
    var v1566 = this.t - 1;
    introspect(JAM.policy.p1) {
      var v1353 = this_array$$8[v1566]
    }
    v920 = v1353 == c$$6
  }
  var v173 = v920;
  for(;v173;) {
    this.t = this.t - 1;
    var v922 = this.t > 0;
    if(v922) {
      var v1567 = this.t - 1;
      introspect(JAM.policy.p1) {
        var v1355 = this_array$$8[v1567]
      }
      v922 = v1355 == c$$6
    }
    v173 = v922
  }
  return
}
function bnToString(b$$2) {
  var this_array$$9 = this.array;
  if(this.s < 0) {
    var v924 = this.negate();
    return"-" + JAM.call(v924.toString, v924, [b$$2])
  }
  var k$$1;
  if(b$$2 == 16) {
    k$$1 = 4
  }else {
    if(b$$2 == 8) {
      k$$1 = 3
    }else {
      if(b$$2 == 2) {
        k$$1 = 1
      }else {
        if(b$$2 == 32) {
          k$$1 = 5
        }else {
          if(b$$2 == 4) {
            k$$1 = 2
          }else {
            return JAM.call(this.toRadix, this, [b$$2])
          }
        }
      }
    }
  }
  var km = (1 << k$$1) - 1;
  var d;
  var m$$3 = false;
  var r$$2 = "";
  var i$$14 = this.t;
  var p = BI_DB - i$$14 * BI_DB % k$$1;
  var v926 = i$$14;
  i$$14 = i$$14 - 1;
  if(v926 > 0) {
    var v927 = p < BI_DB;
    if(v927) {
      introspect(JAM.policy.p1) {
        var v1568 = this_array$$9[i$$14]
      }
      v927 = (d = v1568 >> p) > 0
    }
    if(v927) {
      m$$3 = true;
      r$$2 = int2char(d)
    }
    var v190 = i$$14 >= 0;
    for(;v190;) {
      if(p < k$$1) {
        introspect(JAM.policy.p1) {
          var v928 = this_array$$9[i$$14]
        }
        d = (v928 & (1 << p) - 1) << k$$1 - p;
        var v1569 = i$$14 = i$$14 - 1;
        introspect(JAM.policy.p1) {
          var v1358 = this_array$$9[v1569]
        }
        d = d | v1358 >> (p = p + (BI_DB - k$$1))
      }else {
        introspect(JAM.policy.p1) {
          var v931 = this_array$$9[i$$14]
        }
        d = v931 >> (p = p - k$$1) & km;
        if(p <= 0) {
          p = p + BI_DB;
          i$$14 = i$$14 - 1
        }
      }
      if(d > 0) {
        m$$3 = true
      }
      if(m$$3) {
        r$$2 = r$$2 + int2char(d)
      }
      v190 = i$$14 >= 0
    }
  }
  var v192;
  if(m$$3) {
    v192 = r$$2
  }else {
    v192 = "0"
  }
  return v192
}
function bnNegate() {
  var r$$3 = nbi();
  var v193 = BigInteger.ZERO;
  JAM.call(v193.subTo, v193, [this, r$$3]);
  return r$$3
}
function bnAbs() {
  var v194;
  if(this.s < 0) {
    v194 = this.negate()
  }else {
    v194 = this
  }
  return v194
}
function bnCompareTo(a$$1) {
  var this_array$$10 = this.array;
  var a_array = a$$1.array;
  var r$$4 = this.s - a$$1.s;
  if(r$$4 != 0) {
    return r$$4
  }
  var i$$15 = this.t;
  r$$4 = i$$15 - a$$1.t;
  if(r$$4 != 0) {
    return r$$4
  }
  var v201 = (i$$15 = i$$15 - 1) >= 0;
  for(;v201;) {
    introspect(JAM.policy.p1) {
      var v1361 = this_array$$10[i$$15]
    }
    introspect(JAM.policy.p1) {
      var v1362 = a_array[i$$15]
    }
    if((r$$4 = v1361 - v1362) != 0) {
      return r$$4
    }
    v201 = (i$$15 = i$$15 - 1) >= 0
  }
  return 0
}
function nbits(x$$54) {
  var r$$5 = 1;
  var t$$1;
  if((t$$1 = x$$54 >>> 16) != 0) {
    x$$54 = t$$1;
    r$$5 = r$$5 + 16
  }
  if((t$$1 = x$$54 >> 8) != 0) {
    x$$54 = t$$1;
    r$$5 = r$$5 + 8
  }
  if((t$$1 = x$$54 >> 4) != 0) {
    x$$54 = t$$1;
    r$$5 = r$$5 + 4
  }
  if((t$$1 = x$$54 >> 2) != 0) {
    x$$54 = t$$1;
    r$$5 = r$$5 + 2
  }
  if((t$$1 = x$$54 >> 1) != 0) {
    x$$54 = t$$1;
    r$$5 = r$$5 + 1
  }
  return r$$5
}
function bnBitLength() {
  var this_array$$11 = this.array;
  if(this.t <= 0) {
    return 0
  }
  var v208 = BI_DB * (this.t - 1);
  var v1570 = this.t - 1;
  introspect(JAM.policy.p1) {
    var v1364 = this_array$$11[v1570]
  }
  return v208 + nbits(v1364 ^ this.s & BI_DM)
}
function bnpDLShiftTo(n$$6, r$$6) {
  var this_array$$12 = this.array;
  var r_array$$1 = r$$6.array;
  var i$$16;
  i$$16 = this.t - 1;
  var v212 = i$$16 >= 0;
  for(;v212;) {
    JAM.set(r_array$$1, i$$16 + n$$6, JAM.get(this_array$$12, i$$16, JAM.policy.p1));
    i$$16 = i$$16 - 1;
    v212 = i$$16 >= 0
  }
  i$$16 = n$$6 - 1;
  var v213 = i$$16 >= 0;
  for(;v213;) {
    JAM.set(r_array$$1, i$$16, 0);
    i$$16 = i$$16 - 1;
    v213 = i$$16 >= 0
  }
  r$$6.t = this.t + n$$6;
  r$$6.s = this.s;
  return
}
function bnpDRShiftTo(n$$7, r$$7) {
  var this_array$$13 = this.array;
  var r_array$$2 = r$$7.array;
  var i$$17 = n$$7;
  var v216 = i$$17 < this.t;
  for(;v216;) {
    var v215 = i$$17 - n$$7;
    introspect(JAM.policy.p1) {
      r_array$$2[v215] = this_array$$13[i$$17]
    }
    i$$17 = i$$17 + 1;
    v216 = i$$17 < this.t
  }
  var v217 = r$$7;
  var v1700 = JAM.call(Math.max, Math, [this.t - n$$7, 0]);
  v217.t = v1700;
  r$$7.s = this.s;
  return
}
function bnpLShiftTo(n$$8, r$$8) {
  var this_array$$14 = this.array;
  var r_array$$3 = r$$8.array;
  var bs = n$$8 % BI_DB;
  var cbs = BI_DB - bs;
  var bm = (1 << cbs) - 1;
  var ds = Math.floor(n$$8 / BI_DB);
  var c$$7 = this.s << bs & BI_DM;
  var i$$18;
  i$$18 = this.t - 1;
  var v224 = i$$18 >= 0;
  for(;v224;) {
    var v222 = i$$18 + ds + 1;
    introspect(JAM.policy.p1) {
      var v1367 = this_array$$14[i$$18]
    }
    r_array$$3[v222] = v1367 >> cbs | c$$7;
    introspect(JAM.policy.p1) {
      var v953 = this_array$$14[i$$18]
    }
    c$$7 = (v953 & bm) << bs;
    i$$18 = i$$18 - 1;
    v224 = i$$18 >= 0
  }
  i$$18 = ds - 1;
  var v225 = i$$18 >= 0;
  for(;v225;) {
    JAM.set(r_array$$3, i$$18, 0);
    i$$18 = i$$18 - 1;
    v225 = i$$18 >= 0
  }
  r_array$$3[ds] = c$$7;
  r$$8.t = this.t + ds + 1;
  r$$8.s = this.s;
  r$$8.clamp();
  return
}
function bnpRShiftTo(n$$9, r$$9) {
  var this_array$$15 = this.array;
  var r_array$$4 = r$$9.array;
  r$$9.s = this.s;
  var ds$$1 = Math.floor(n$$9 / BI_DB);
  if(ds$$1 >= this.t) {
    r$$9.t = 0;
    return
  }
  var bs$$1 = n$$9 % BI_DB;
  var cbs$$1 = BI_DB - bs$$1;
  var bm$$1 = (1 << bs$$1) - 1;
  introspect(JAM.policy.p1) {
    var v230 = this_array$$15[ds$$1]
  }
  r_array$$4[0] = v230 >> bs$$1;
  var i$$19 = ds$$1 + 1;
  var v233 = i$$19 < this.t;
  for(;v233;) {
    var v231 = i$$19 - ds$$1 - 1;
    introspect(JAM.policy.p1) {
      var v1368 = r_array$$4[v231]
    }
    introspect(JAM.policy.p1) {
      var v1651 = this_array$$15[i$$19]
    }
    r_array$$4[v231] = v1368 | (v1651 & bm$$1) << cbs$$1;
    var v232 = i$$19 - ds$$1;
    introspect(JAM.policy.p1) {
      var v958 = this_array$$15[i$$19]
    }
    r_array$$4[v232] = v958 >> bs$$1;
    i$$19 = i$$19 + 1;
    v233 = i$$19 < this.t
  }
  if(bs$$1 > 0) {
    var v234 = this.t - ds$$1 - 1;
    introspect(JAM.policy.p1) {
      var v1371 = r_array$$4[v234]
    }
    r_array$$4[v234] = v1371 | (this.s & bm$$1) << cbs$$1
  }
  r$$9.t = this.t - ds$$1;
  r$$9.clamp();
  return
}
function bnpSubTo(a$$2, r$$10) {
  var this_array$$16 = this.array;
  var r_array$$5 = r$$10.array;
  var a_array$$1 = a$$2.array;
  var i$$20 = 0;
  var c$$8 = 0;
  var m$$4 = JAM.call(Math.min, Math, [a$$2.t, this.t]);
  var v240 = i$$20 < m$$4;
  for(;v240;) {
    introspect(JAM.policy.p1) {
      var v1373 = this_array$$16[i$$20]
    }
    introspect(JAM.policy.p1) {
      var v1374 = a_array$$1[i$$20]
    }
    c$$8 = c$$8 + (v1373 - v1374);
    var v239 = i$$20;
    i$$20 = i$$20 + 1;
    r_array$$5[v239] = c$$8 & BI_DM;
    c$$8 = c$$8 >> BI_DB;
    v240 = i$$20 < m$$4
  }
  if(a$$2.t < this.t) {
    c$$8 = c$$8 - a$$2.s;
    var v242 = i$$20 < this.t;
    for(;v242;) {
      introspect(JAM.policy.p1) {
        var v966 = this_array$$16[i$$20]
      }
      c$$8 = c$$8 + v966;
      var v241 = i$$20;
      i$$20 = i$$20 + 1;
      r_array$$5[v241] = c$$8 & BI_DM;
      c$$8 = c$$8 >> BI_DB;
      v242 = i$$20 < this.t
    }
    c$$8 = c$$8 + this.s
  }else {
    c$$8 = c$$8 + this.s;
    var v244 = i$$20 < a$$2.t;
    for(;v244;) {
      introspect(JAM.policy.p1) {
        var v971 = a_array$$1[i$$20]
      }
      c$$8 = c$$8 - v971;
      var v243 = i$$20;
      i$$20 = i$$20 + 1;
      r_array$$5[v243] = c$$8 & BI_DM;
      c$$8 = c$$8 >> BI_DB;
      v244 = i$$20 < a$$2.t
    }
    c$$8 = c$$8 - a$$2.s
  }
  var v246;
  if(c$$8 < 0) {
    v246 = -1
  }else {
    v246 = 0
  }
  r$$10.s = v246;
  if(c$$8 < -1) {
    var v247 = i$$20;
    i$$20 = i$$20 + 1;
    r_array$$5[v247] = BI_DV + c$$8
  }else {
    if(c$$8 > 0) {
      var v248 = i$$20;
      i$$20 = i$$20 + 1;
      r_array$$5[v248] = c$$8
    }
  }
  r$$10.t = i$$20;
  r$$10.clamp();
  return
}
function bnpMultiplyTo(a$$3, r$$11) {
  var this_array$$17 = this.array;
  var r_array$$6 = r$$11.array;
  var x$$55 = this.abs();
  var y$$31 = a$$3.abs();
  var y_array = y$$31.array;
  var i$$21 = x$$55.t;
  r$$11.t = i$$21 + y$$31.t;
  var v252 = (i$$21 = i$$21 - 1) >= 0;
  for(;v252;) {
    JAM.set(r_array$$6, i$$21, 0);
    v252 = (i$$21 = i$$21 - 1) >= 0
  }
  i$$21 = 0;
  var v255 = i$$21 < y$$31.t;
  for(;v255;) {
    var v253 = r_array$$6;
    var v254 = i$$21 + x$$55.t;
    introspect(JAM.policy.p1) {
      var v979 = y_array[i$$21]
    }
    var v1701 = JAM.call(x$$55.am, x$$55, [0, v979, r$$11, i$$21, 0, x$$55.t]);
    JAM.set(v253, v254, v1701);
    i$$21 = i$$21 + 1;
    v255 = i$$21 < y$$31.t
  }
  r$$11.s = 0;
  r$$11.clamp();
  if(this.s != a$$3.s) {
    var v256 = BigInteger.ZERO;
    JAM.call(v256.subTo, v256, [r$$11, r$$11])
  }
  return
}
function bnpSquareTo(r$$12) {
  var x$$56 = this.abs();
  var x_array = x$$56.array;
  var r_array$$7 = r$$12.array;
  var i$$22 = r$$12.t = 2 * x$$56.t;
  var v259 = (i$$22 = i$$22 - 1) >= 0;
  for(;v259;) {
    r_array$$7[i$$22] = 0;
    v259 = (i$$22 = i$$22 - 1) >= 0
  }
  i$$22 = 0;
  var v265 = i$$22 < x$$56.t - 1;
  for(;v265;) {
    introspect(JAM.policy.p1) {
      var v260 = x_array[i$$22]
    }
    var c$$9 = JAM.call(x$$56.am, x$$56, [i$$22, v260, r$$12, 2 * i$$22, 0, 1]);
    var v1376 = r_array$$7;
    var v1377 = i$$22 + x$$56.t;
    introspect(JAM.policy.p1) {
      var v1653 = v1376[v1377]
    }
    var v1680 = i$$22 + 1;
    introspect(JAM.policy.p1) {
      var v1693 = x_array[i$$22]
    }
    if(JAM.set(v1376, v1377, v1653 + JAM.call(x$$56.am, x$$56, [v1680, 2 * v1693, r$$12, 2 * i$$22 + 1, c$$9, x$$56.t - i$$22 - 1])) >= BI_DV) {
      var v262 = i$$22 + x$$56.t;
      introspect(JAM.policy.p1) {
        var v1378 = r_array$$7[v262]
      }
      JAM.set(r_array$$7, v262, v1378 - BI_DV);
      JAM.set(r_array$$7, i$$22 + x$$56.t + 1, 1)
    }
    i$$22 = i$$22 + 1;
    v265 = i$$22 < x$$56.t - 1
  }
  if(r$$12.t > 0) {
    var v266 = r_array$$7;
    var v267 = r$$12.t - 1;
    introspect(JAM.policy.p1) {
      var v1381 = v266[v267]
    }
    introspect(JAM.policy.p1) {
      var v1575 = x_array[i$$22]
    }
    v266[v267] = v1381 + JAM.call(x$$56.am, x$$56, [i$$22, v1575, r$$12, 2 * i$$22, 0, 1])
  }
  r$$12.s = 0;
  r$$12.clamp();
  return
}
function bnpDivRemTo(m$$5, q, r$$13) {
  var pm = m$$5.abs();
  if(pm.t <= 0) {
    return
  }
  var pt = this.abs();
  if(pt.t < pm.t) {
    if(q != null) {
      JAM.call(q.fromInt, q, [0])
    }
    if(r$$13 != null) {
      JAM.call(this.copyTo, this, [r$$13])
    }
    return
  }
  if(r$$13 == null) {
    r$$13 = nbi()
  }
  var y$$32 = nbi();
  var ts = this.s;
  var ms = m$$5.s;
  var pm_array = pm.array;
  var v274 = BI_DB;
  var v1383 = pm.t - 1;
  introspect(JAM.policy.p1) {
    var v996 = pm_array[v1383]
  }
  var nsh = v274 - nbits(v996);
  if(nsh > 0) {
    JAM.call(pm.lShiftTo, pm, [nsh, y$$32]);
    JAM.call(pt.lShiftTo, pt, [nsh, r$$13])
  }else {
    JAM.call(pm.copyTo, pm, [y$$32]);
    JAM.call(pt.copyTo, pt, [r$$13])
  }
  var ys = y$$32.t;
  var y_array$$1 = y$$32.array;
  var v277 = ys - 1;
  introspect(JAM.policy.p1) {
    var y0$$2 = y_array$$1[v277]
  }
  if(y0$$2 == 0) {
    return
  }
  var v279 = y0$$2 * (1 << BI_F1);
  var v998;
  if(ys > 1) {
    var v1578 = ys - 2;
    introspect(JAM.policy.p1) {
      var v1384 = y_array$$1[v1578]
    }
    v998 = v1384 >> BI_F2
  }else {
    v998 = 0
  }
  var yt = v279 + v998;
  var d1 = BI_FV / yt;
  var d2 = (1 << BI_F1) / yt;
  var e$$7 = 1 << BI_F2;
  var i$$23 = r$$13.t;
  var j$$4 = i$$23 - ys;
  var v282;
  if(q == null) {
    v282 = nbi()
  }else {
    v282 = q
  }
  var t$$2 = v282;
  JAM.call(y$$32.dlShiftTo, y$$32, [j$$4, t$$2]);
  var r_array$$8 = r$$13.array;
  if(JAM.call(r$$13.compareTo, r$$13, [t$$2]) >= 0) {
    var v283 = r$$13.t;
    r$$13.t = r$$13.t + 1;
    JAM.set(r_array$$8, v283, 1);
    JAM.call(r$$13.subTo, r$$13, [t$$2, r$$13])
  }
  var v285 = BigInteger.ONE;
  JAM.call(v285.dlShiftTo, v285, [ys, t$$2]);
  JAM.call(t$$2.subTo, t$$2, [y$$32, y$$32]);
  var v287 = y$$32.t < ys;
  for(;v287;) {
    var v286 = y$$32.t;
    y$$32.t = y$$32.t + 1;
    JAM.set(y_array$$1, v286, 0);
    v287 = y$$32.t < ys
  }
  var v291 = (j$$4 = j$$4 - 1) >= 0;
  for(;v291;) {
    var v288;
    var v1579 = i$$23 = i$$23 - 1;
    introspect(JAM.policy.p1) {
      var v1388 = r_array$$8[v1579]
    }
    if(v1388 == y0$$2) {
      v288 = BI_DM
    }else {
      introspect(JAM.policy.p1) {
        var v1580 = r_array$$8[i$$23]
      }
      var v1389 = v1580 * d1;
      var v1684 = i$$23 - 1;
      introspect(JAM.policy.p1) {
        var v1655 = r_array$$8[v1684]
      }
      v288 = Math.floor(v1389 + (v1655 + e$$7) * d2)
    }
    var qd = v288;
    var v1391 = r_array$$8;
    var v1392 = i$$23;
    introspect(JAM.policy.p1) {
      var v1656 = v1391[v1392]
    }
    if((v1391[v1392] = v1656 + JAM.call(y$$32.am, y$$32, [0, qd, r$$13, j$$4, 0, ys])) < qd) {
      JAM.call(y$$32.dlShiftTo, y$$32, [j$$4, t$$2]);
      JAM.call(r$$13.subTo, r$$13, [t$$2, r$$13]);
      introspect(JAM.policy.p1) {
        var v1007 = r_array$$8[i$$23]
      }
      var v289 = v1007 < (qd = qd - 1);
      for(;v289;) {
        JAM.call(r$$13.subTo, r$$13, [t$$2, r$$13]);
        introspect(JAM.policy.p1) {
          var v1009 = r_array$$8[i$$23]
        }
        v289 = v1009 < (qd = qd - 1)
      }
    }
    v291 = (j$$4 = j$$4 - 1) >= 0
  }
  if(q != null) {
    JAM.call(r$$13.drShiftTo, r$$13, [ys, q]);
    if(ts != ms) {
      var v292 = BigInteger.ZERO;
      JAM.call(v292.subTo, v292, [q, q])
    }
  }
  r$$13.t = ys;
  r$$13.clamp();
  if(nsh > 0) {
    JAM.call(r$$13.rShiftTo, r$$13, [nsh, r$$13])
  }
  if(ts < 0) {
    var v296 = BigInteger.ZERO;
    JAM.call(v296.subTo, v296, [r$$13, r$$13])
  }
  return
}
function bnMod(a$$4) {
  var r$$14 = nbi();
  var v298 = this.abs();
  JAM.call(v298.divRemTo, v298, [a$$4, null, r$$14]);
  var v1012 = this.s < 0;
  if(v1012) {
    v1012 = JAM.call(r$$14.compareTo, r$$14, [BigInteger.ZERO]) > 0
  }
  if(v1012) {
    JAM.call(a$$4.subTo, a$$4, [r$$14, r$$14])
  }
  return r$$14
}
function Classic(m$$6) {
  this.m = m$$6;
  return
}
function cConvert(x$$57) {
  var v1013 = x$$57.s < 0;
  if(!v1013) {
    v1013 = JAM.call(x$$57.compareTo, x$$57, [this.m]) >= 0
  }
  if(v1013) {
    return JAM.call(x$$57.mod, x$$57, [this.m])
  }else {
    return x$$57
  }
  return
}
function cRevert(x$$58) {
  return x$$58
}
function cReduce(x$$59) {
  JAM.call(x$$59.divRemTo, x$$59, [this.m, null, x$$59]);
  return
}
function cMulTo(x$$60, y$$33, r$$15) {
  JAM.call(x$$60.multiplyTo, x$$60, [y$$33, r$$15]);
  JAM.call(this.reduce, this, [r$$15]);
  return
}
function cSqrTo(x$$61, r$$16) {
  JAM.call(x$$61.squareTo, x$$61, [r$$16]);
  JAM.call(this.reduce, this, [r$$16]);
  return
}
function bnpInvDigit() {
  var this_array$$18 = this.array;
  if(this.t < 1) {
    return 0
  }
  var x$$62 = this_array$$18[0];
  if((x$$62 & 1) == 0) {
    return 0
  }
  var y$$34 = x$$62 & 3;
  y$$34 = y$$34 * (2 - (x$$62 & 15) * y$$34) & 15;
  y$$34 = y$$34 * (2 - (x$$62 & 255) * y$$34) & 255;
  y$$34 = y$$34 * (2 - ((x$$62 & 65535) * y$$34 & 65535)) & 65535;
  y$$34 = y$$34 * (2 - x$$62 * y$$34 % BI_DV) % BI_DV;
  var v309;
  if(y$$34 > 0) {
    v309 = BI_DV - y$$34
  }else {
    v309 = -y$$34
  }
  return v309
}
function Montgomery(m$$7) {
  this.m = m$$7;
  var v1702 = m$$7.invDigit();
  this.mp = v1702;
  this.mpl = this.mp & 32767;
  this.mph = this.mp >> 15;
  this.um = (1 << BI_DB - 15) - 1;
  this.mt2 = 2 * m$$7.t;
  return
}
function montConvert(x$$63) {
  var r$$17 = nbi();
  var v314 = x$$63.abs();
  JAM.call(v314.dlShiftTo, v314, [this.m.t, r$$17]);
  JAM.call(r$$17.divRemTo, r$$17, [this.m, null, r$$17]);
  var v1023 = x$$63.s < 0;
  if(v1023) {
    v1023 = JAM.call(r$$17.compareTo, r$$17, [BigInteger.ZERO]) > 0
  }
  if(v1023) {
    var v317 = this.m;
    JAM.call(v317.subTo, v317, [r$$17, r$$17])
  }
  return r$$17
}
function montRevert(x$$64) {
  var r$$18 = nbi();
  JAM.call(x$$64.copyTo, x$$64, [r$$18]);
  JAM.call(this.reduce, this, [r$$18]);
  return r$$18
}
function montReduce(x$$65) {
  var x_array$$1 = x$$65.array;
  var v320 = x$$65.t <= this.mt2;
  for(;v320;) {
    var v319 = x$$65.t;
    x$$65.t = x$$65.t + 1;
    JAM.set(x_array$$1, v319, 0);
    v320 = x$$65.t <= this.mt2
  }
  var i$$24 = 0;
  var v327 = i$$24 < this.m.t;
  for(;v327;) {
    introspect(JAM.policy.p1) {
      var v321 = x_array$$1[i$$24]
    }
    var j$$5 = v321 & 32767;
    var v1029 = j$$5 * this.mpl;
    var v1659 = j$$5 * this.mph;
    introspect(JAM.policy.p1) {
      var v1696 = x_array$$1[i$$24]
    }
    var u0 = v1029 + ((v1659 + (v1696 >> 15) * this.mpl & this.um) << 15) & BI_DM;
    j$$5 = i$$24 + this.m.t;
    var v324 = x_array$$1;
    var v325 = j$$5;
    introspect(JAM.policy.p1) {
      var v1408 = v324[v325]
    }
    var v1591 = this.m;
    JAM.set(v324, v325, v1408 + JAM.call(v1591.am, v1591, [0, u0, x$$65, i$$24, 0, this.m.t]));
    introspect(JAM.policy.p1) {
      var v1032 = x_array$$1[j$$5]
    }
    var v326 = v1032 >= BI_DV;
    for(;v326;) {
      introspect(JAM.policy.p1) {
        var v1033 = x_array$$1[j$$5]
      }
      JAM.set(x_array$$1, j$$5, v1033 - BI_DV);
      var v1034 = j$$5 = j$$5 + 1;
      var v1593 = j$$5 = j$$5 + 1;
      introspect(JAM.policy.p1) {
        var v1410 = x_array$$1[v1593]
      }
      JAM.set(x_array$$1, v1034, v1410 + 1);
      introspect(JAM.policy.p1) {
        var v1035 = x_array$$1[j$$5]
      }
      v326 = v1035 >= BI_DV
    }
    i$$24 = i$$24 + 1;
    v327 = i$$24 < this.m.t
  }
  x$$65.clamp();
  JAM.call(x$$65.drShiftTo, x$$65, [this.m.t, x$$65]);
  if(JAM.call(x$$65.compareTo, x$$65, [this.m]) >= 0) {
    JAM.call(x$$65.subTo, x$$65, [this.m, x$$65])
  }
  return
}
function montSqrTo(x$$66, r$$19) {
  JAM.call(x$$66.squareTo, x$$66, [r$$19]);
  JAM.call(this.reduce, this, [r$$19]);
  return
}
function montMulTo(x$$67, y$$35, r$$20) {
  JAM.call(x$$67.multiplyTo, x$$67, [y$$35, r$$20]);
  JAM.call(this.reduce, this, [r$$20]);
  return
}
function bnpIsEven() {
  var this_array$$19 = this.array;
  var v1039;
  if(this.t > 0) {
    v1039 = this_array$$19[0] & 1
  }else {
    v1039 = this.s
  }
  return v1039 == 0
}
function bnpExp(e$$8, z$$2) {
  var v1040 = e$$8 > 4294967295;
  if(!v1040) {
    v1040 = e$$8 < 1
  }
  if(v1040) {
    return BigInteger.ONE
  }
  var r$$21 = nbi();
  var r2 = nbi();
  var g = JAM.call(z$$2.convert, z$$2, [this]);
  var i$$25 = nbits(e$$8) - 1;
  JAM.call(g.copyTo, g, [r$$21]);
  var v335 = (i$$25 = i$$25 - 1) >= 0;
  for(;v335;) {
    JAM.call(z$$2.sqrTo, z$$2, [r$$21, r2]);
    if((e$$8 & 1 << i$$25) > 0) {
      JAM.call(z$$2.mulTo, z$$2, [r2, g, r$$21])
    }else {
      var t$$3 = r$$21;
      r$$21 = r2;
      r2 = t$$3
    }
    v335 = (i$$25 = i$$25 - 1) >= 0
  }
  return JAM.call(z$$2.revert, z$$2, [r$$21])
}
function bnModPowInt(e$$9, m$$8) {
  var z$$3;
  var v1044 = e$$9 < 256;
  if(!v1044) {
    v1044 = m$$8.isEven()
  }
  if(v1044) {
    z$$3 = new Classic(m$$8)
  }else {
    z$$3 = new Montgomery(m$$8)
  }
  return JAM.call(this.exp, this, [e$$9, z$$3])
}
function bnClone() {
  var r$$22 = nbi();
  JAM.call(this.copyTo, this, [r$$22]);
  return r$$22
}
function bnIntValue() {
  var this_array$$20 = this.array;
  if(this.s < 0) {
    if(this.t == 1) {
      return this_array$$20[0] - BI_DV
    }else {
      if(this.t == 0) {
        return-1
      }
    }
  }else {
    if(this.t == 1) {
      return this_array$$20[0]
    }else {
      if(this.t == 0) {
        return 0
      }
    }
  }
  return(this_array$$20[1] & (1 << 32 - BI_DB) - 1) << BI_DB | this_array$$20[0]
}
function bnByteValue() {
  var this_array$$21 = this.array;
  var v345;
  if(this.t == 0) {
    v345 = this.s
  }else {
    v345 = this_array$$21[0] << 24 >> 24
  }
  return v345
}
function bnShortValue() {
  var this_array$$22 = this.array;
  var v346;
  if(this.t == 0) {
    v346 = this.s
  }else {
    v346 = this_array$$22[0] << 16 >> 16
  }
  return v346
}
function bnpChunkSize(r$$23) {
  return Math.floor(Math.LN2 * BI_DB / Math.log(r$$23))
}
function bnSigNum() {
  var this_array$$23 = this.array;
  if(this.s < 0) {
    return-1
  }else {
    var v1058 = this.t <= 0;
    if(!v1058) {
      var v1426 = this.t == 1;
      if(v1426) {
        v1426 = this_array$$23[0] <= 0
      }
      v1058 = v1426
    }
    if(v1058) {
      return 0
    }else {
      return 1
    }
  }
  return
}
function bnpToRadix(b$$3) {
  if(b$$3 == null) {
    b$$3 = 10
  }
  var v1059 = this.signum() == 0;
  if(!v1059) {
    var v1429 = b$$3 < 2;
    if(!v1429) {
      v1429 = b$$3 > 36
    }
    v1059 = v1429
  }
  if(v1059) {
    return"0"
  }
  var cs = JAM.call(this.chunkSize, this, [b$$3]);
  var a$$5 = JAM.call(Math.pow, Math, [b$$3, cs]);
  var d$$1 = nbv(a$$5);
  var y$$36 = nbi();
  var z$$4 = nbi();
  var r$$24 = "";
  JAM.call(this.divRemTo, this, [d$$1, y$$36, z$$4]);
  var v353 = y$$36.signum() > 0;
  for(;v353;) {
    var v1431 = a$$5 + z$$4.intValue();
    r$$24 = JAM.call(v1431.toString, v1431, [b$$3]).substr(1) + r$$24;
    JAM.call(y$$36.divRemTo, y$$36, [d$$1, y$$36, z$$4]);
    v353 = y$$36.signum() > 0
  }
  var v1063 = z$$4.intValue();
  return JAM.call(v1063.toString, v1063, [b$$3]) + r$$24
}
function bnpFromRadix(s$$5, b$$4) {
  JAM.call(this.fromInt, this, [0]);
  if(b$$4 == null) {
    b$$4 = 10
  }
  var cs$$1 = JAM.call(this.chunkSize, this, [b$$4]);
  var d$$2 = JAM.call(Math.pow, Math, [b$$4, cs$$1]);
  var mi$$1 = false;
  var j$$6 = 0;
  var w$$9 = 0;
  var i$$26 = 0;
  var v360 = i$$26 < s$$5.length;
  for(;v360;) {
    var x$$68 = intAt(s$$5, i$$26);
    if(x$$68 < 0) {
      var v1065 = s$$5.charAt(i$$26) == "-";
      if(v1065) {
        v1065 = this.signum() == 0
      }
      if(v1065) {
        mi$$1 = true
      }
      i$$26 = i$$26 + 1;
      v360 = i$$26 < s$$5.length;
      continue
    }
    w$$9 = b$$4 * w$$9 + x$$68;
    if((j$$6 = j$$6 + 1) >= cs$$1) {
      JAM.call(this.dMultiply, this, [d$$2]);
      JAM.call(this.dAddOffset, this, [w$$9, 0]);
      j$$6 = 0;
      w$$9 = 0
    }
    i$$26 = i$$26 + 1;
    v360 = i$$26 < s$$5.length
  }
  if(j$$6 > 0) {
    JAM.call(this.dMultiply, this, [JAM.call(Math.pow, Math, [b$$4, j$$6])]);
    JAM.call(this.dAddOffset, this, [w$$9, 0])
  }
  if(mi$$1) {
    var v363 = BigInteger.ZERO;
    JAM.call(v363.subTo, v363, [this, this])
  }
  return
}
function bnpFromNumber(a$$6, b$$5, c$$10) {
  if("number" == typeof b$$5) {
    if(a$$6 < 2) {
      JAM.call(this.fromInt, this, [1])
    }else {
      JAM.call(this.fromNumber, this, [a$$6, c$$10]);
      if(!JAM.call(this.testBit, this, [a$$6 - 1])) {
        var v1071 = BigInteger.ONE;
        JAM.call(this.bitwiseTo, this, [JAM.call(v1071.shiftLeft, v1071, [a$$6 - 1]), op_or, this])
      }
      if(this.isEven()) {
        JAM.call(this.dAddOffset, this, [1, 0])
      }
      var v369 = !JAM.call(this.isProbablePrime, this, [b$$5]);
      for(;v369;) {
        JAM.call(this.dAddOffset, this, [2, 0]);
        if(this.bitLength() > a$$6) {
          var v1075 = BigInteger.ONE;
          JAM.call(this.subTo, this, [JAM.call(v1075.shiftLeft, v1075, [a$$6 - 1]), this])
        }
        v369 = !JAM.call(this.isProbablePrime, this, [b$$5])
      }
    }
  }else {
    var x$$69 = new Array;
    var t$$4 = a$$6 & 7;
    x$$69.length = (a$$6 >> 3) + 1;
    JAM.call(b$$5.nextBytes, b$$5, [x$$69]);
    if(t$$4 > 0) {
      x$$69[0] = x$$69[0] & (1 << t$$4) - 1
    }else {
      x$$69[0] = 0
    }
    JAM.call(this.fromString, this, [x$$69, 256])
  }
  return
}
function bnToByteArray() {
  var this_array$$24 = this.array;
  var i$$27 = this.t;
  var r$$25 = new Array;
  r$$25[0] = this.s;
  var p$$1 = BI_DB - i$$27 * BI_DB % 8;
  var d$$3;
  var k$$2 = 0;
  var v1081 = i$$27;
  i$$27 = i$$27 - 1;
  if(v1081 > 0) {
    var v1082 = p$$1 < BI_DB;
    if(v1082) {
      introspect(JAM.policy.p1) {
        var v1601 = this_array$$24[i$$27]
      }
      v1082 = (d$$3 = v1601 >> p$$1) != (this.s & BI_DM) >> p$$1
    }
    if(v1082) {
      var v375 = k$$2;
      k$$2 = k$$2 + 1;
      r$$25[v375] = d$$3 | this.s << BI_DB - p$$1
    }
    var v386 = i$$27 >= 0;
    for(;v386;) {
      if(p$$1 < 8) {
        introspect(JAM.policy.p1) {
          var v1084 = this_array$$24[i$$27]
        }
        d$$3 = (v1084 & (1 << p$$1) - 1) << 8 - p$$1;
        var v1603 = i$$27 = i$$27 - 1;
        introspect(JAM.policy.p1) {
          var v1441 = this_array$$24[v1603]
        }
        d$$3 = d$$3 | v1441 >> (p$$1 = p$$1 + (BI_DB - 8))
      }else {
        introspect(JAM.policy.p1) {
          var v1087 = this_array$$24[i$$27]
        }
        d$$3 = v1087 >> (p$$1 = p$$1 - 8) & 255;
        if(p$$1 <= 0) {
          p$$1 = p$$1 + BI_DB;
          i$$27 = i$$27 - 1
        }
      }
      if((d$$3 & 128) != 0) {
        d$$3 = d$$3 | -256
      }
      var v1090 = k$$2 == 0;
      if(v1090) {
        v1090 = (this.s & 128) != (d$$3 & 128)
      }
      if(v1090) {
        k$$2 = k$$2 + 1
      }
      var v1091 = k$$2 > 0;
      if(!v1091) {
        v1091 = d$$3 != this.s
      }
      if(v1091) {
        var v384 = k$$2;
        k$$2 = k$$2 + 1;
        r$$25[v384] = d$$3
      }
      v386 = i$$27 >= 0
    }
  }
  return r$$25
}
function bnEquals(a$$7) {
  return JAM.call(this.compareTo, this, [a$$7]) == 0
}
function bnMin(a$$8) {
  var v389;
  if(JAM.call(this.compareTo, this, [a$$8]) < 0) {
    v389 = this
  }else {
    v389 = a$$8
  }
  return v389
}
function bnMax(a$$9) {
  var v390;
  if(JAM.call(this.compareTo, this, [a$$9]) > 0) {
    v390 = this
  }else {
    v390 = a$$9
  }
  return v390
}
function bnpBitwiseTo(a$$10, op, r$$26) {
  var this_array$$25 = this.array;
  var a_array$$2 = a$$10.array;
  var r_array$$9 = r$$26.array;
  var i$$28;
  var f;
  var m$$9 = JAM.call(Math.min, Math, [a$$10.t, this.t]);
  i$$28 = 0;
  var v395 = i$$28 < m$$9;
  for(;v395;) {
    var v393 = r_array$$9;
    var v394 = i$$28;
    introspect(JAM.policy.p1) {
      var v1094 = this_array$$25[i$$28]
    }
    introspect(JAM.policy.p1) {
      var v1095 = a_array$$2[i$$28]
    }
    var v1703 = JAM.call(op, null, [v1094, v1095]);
    v393[v394] = v1703;
    i$$28 = i$$28 + 1;
    v395 = i$$28 < m$$9
  }
  if(a$$10.t < this.t) {
    f = a$$10.s & BI_DM;
    i$$28 = m$$9;
    var v399 = i$$28 < this.t;
    for(;v399;) {
      var v397 = r_array$$9;
      var v398 = i$$28;
      introspect(JAM.policy.p1) {
        var v1099 = this_array$$25[i$$28]
      }
      var v1704 = JAM.call(op, null, [v1099, f]);
      v397[v398] = v1704;
      i$$28 = i$$28 + 1;
      v399 = i$$28 < this.t
    }
    r$$26.t = this.t
  }else {
    f = this.s & BI_DM;
    i$$28 = m$$9;
    var v403 = i$$28 < a$$10.t;
    for(;v403;) {
      var v401 = r_array$$9;
      var v402 = i$$28;
      introspect(JAM.policy.p1) {
        var v1102 = a_array$$2[i$$28]
      }
      var v1705 = JAM.call(op, null, [f, v1102]);
      v401[v402] = v1705;
      i$$28 = i$$28 + 1;
      v403 = i$$28 < a$$10.t
    }
    r$$26.t = a$$10.t
  }
  var v405 = r$$26;
  var v1706 = JAM.call(op, null, [this.s, a$$10.s]);
  v405.s = v1706;
  r$$26.clamp();
  return
}
function op_and(x$$70, y$$37) {
  return x$$70 & y$$37
}
function bnAnd(a$$11) {
  var r$$27 = nbi();
  JAM.call(this.bitwiseTo, this, [a$$11, op_and, r$$27]);
  return r$$27
}
function op_or(x$$71, y$$38) {
  return x$$71 | y$$38
}
function bnOr(a$$12) {
  var r$$28 = nbi();
  JAM.call(this.bitwiseTo, this, [a$$12, op_or, r$$28]);
  return r$$28
}
function op_xor(x$$72, y$$39) {
  return x$$72 ^ y$$39
}
function bnXor(a$$13) {
  var r$$29 = nbi();
  JAM.call(this.bitwiseTo, this, [a$$13, op_xor, r$$29]);
  return r$$29
}
function op_andnot(x$$73, y$$40) {
  return x$$73 & ~y$$40
}
function bnAndNot(a$$14) {
  var r$$30 = nbi();
  JAM.call(this.bitwiseTo, this, [a$$14, op_andnot, r$$30]);
  return r$$30
}
function bnNot() {
  var this_array$$26 = this.array;
  var r$$31 = nbi();
  var r_array$$10 = r$$31.array;
  var i$$29 = 0;
  var v408 = i$$29 < this.t;
  for(;v408;) {
    introspect(JAM.policy.p1) {
      var v1107 = this_array$$26[i$$29]
    }
    r_array$$10[i$$29] = BI_DM & ~v1107;
    i$$29 = i$$29 + 1;
    v408 = i$$29 < this.t
  }
  r$$31.t = this.t;
  r$$31.s = ~this.s;
  return r$$31
}
function bnShiftLeft(n$$10) {
  var r$$32 = nbi();
  if(n$$10 < 0) {
    JAM.call(this.rShiftTo, this, [-n$$10, r$$32])
  }else {
    JAM.call(this.lShiftTo, this, [n$$10, r$$32])
  }
  return r$$32
}
function bnShiftRight(n$$11) {
  var r$$33 = nbi();
  if(n$$11 < 0) {
    JAM.call(this.lShiftTo, this, [-n$$11, r$$33])
  }else {
    JAM.call(this.rShiftTo, this, [n$$11, r$$33])
  }
  return r$$33
}
function lbit(x$$74) {
  if(x$$74 == 0) {
    return-1
  }
  var r$$34 = 0;
  if((x$$74 & 65535) == 0) {
    x$$74 = x$$74 >> 16;
    r$$34 = r$$34 + 16
  }
  if((x$$74 & 255) == 0) {
    x$$74 = x$$74 >> 8;
    r$$34 = r$$34 + 8
  }
  if((x$$74 & 15) == 0) {
    x$$74 = x$$74 >> 4;
    r$$34 = r$$34 + 4
  }
  if((x$$74 & 3) == 0) {
    x$$74 = x$$74 >> 2;
    r$$34 = r$$34 + 2
  }
  if((x$$74 & 1) == 0) {
    r$$34 = r$$34 + 1
  }
  return r$$34
}
function bnGetLowestSetBit() {
  var this_array$$27 = this.array;
  var i$$30 = 0;
  var v423 = i$$30 < this.t;
  for(;v423;) {
    introspect(JAM.policy.p1) {
      var v1115 = this_array$$27[i$$30]
    }
    if(v1115 != 0) {
      var v420 = i$$30 * BI_DB;
      introspect(JAM.policy.p1) {
        var v1116 = this_array$$27[i$$30]
      }
      return v420 + lbit(v1116)
    }
    i$$30 = i$$30 + 1;
    v423 = i$$30 < this.t
  }
  if(this.s < 0) {
    return this.t * BI_DB
  }
  return-1
}
function cbit(x$$75) {
  var r$$35 = 0;
  var v426 = x$$75 != 0;
  for(;v426;) {
    x$$75 = x$$75 & x$$75 - 1;
    r$$35 = r$$35 + 1;
    v426 = x$$75 != 0
  }
  return r$$35
}
function bnBitCount() {
  var r$$36 = 0;
  var x$$76 = this.s & BI_DM;
  var i$$31 = 0;
  var v428 = i$$31 < this.t;
  for(;v428;) {
    var v1121 = r$$36;
    introspect(JAM.policy.p1) {
      var v1605 = this_array[i$$31]
    }
    r$$36 = v1121 + cbit(v1605 ^ x$$76);
    i$$31 = i$$31 + 1;
    v428 = i$$31 < this.t
  }
  return r$$36
}
function bnTestBit(n$$12) {
  var this_array$$28 = this.array;
  var j$$7 = Math.floor(n$$12 / BI_DB);
  if(j$$7 >= this.t) {
    return this.s != 0
  }
  introspect(JAM.policy.p1) {
    var v1125 = this_array$$28[j$$7]
  }
  return(v1125 & 1 << n$$12 % BI_DB) != 0
}
function bnpChangeBit(n$$13, op$$1) {
  var v433 = BigInteger.ONE;
  var r$$37 = JAM.call(v433.shiftLeft, v433, [n$$13]);
  JAM.call(this.bitwiseTo, this, [r$$37, op$$1, r$$37]);
  return r$$37
}
function bnSetBit(n$$14) {
  return JAM.call(this.changeBit, this, [n$$14, op_or])
}
function bnClearBit(n$$15) {
  return JAM.call(this.changeBit, this, [n$$15, op_andnot])
}
function bnFlipBit(n$$16) {
  return JAM.call(this.changeBit, this, [n$$16, op_xor])
}
function bnpAddTo(a$$15, r$$38) {
  var this_array$$29 = this.array;
  var a_array$$3 = a$$15.array;
  var r_array$$11 = r$$38.array;
  var i$$32 = 0;
  var c$$11 = 0;
  var m$$10 = JAM.call(Math.min, Math, [a$$15.t, this.t]);
  var v437 = i$$32 < m$$10;
  for(;v437;) {
    introspect(JAM.policy.p1) {
      var v1451 = this_array$$29[i$$32]
    }
    introspect(JAM.policy.p1) {
      var v1452 = a_array$$3[i$$32]
    }
    c$$11 = c$$11 + (v1451 + v1452);
    var v436 = i$$32;
    i$$32 = i$$32 + 1;
    r_array$$11[v436] = c$$11 & BI_DM;
    c$$11 = c$$11 >> BI_DB;
    v437 = i$$32 < m$$10
  }
  if(a$$15.t < this.t) {
    c$$11 = c$$11 + a$$15.s;
    var v439 = i$$32 < this.t;
    for(;v439;) {
      introspect(JAM.policy.p1) {
        var v1132 = this_array$$29[i$$32]
      }
      c$$11 = c$$11 + v1132;
      var v438 = i$$32;
      i$$32 = i$$32 + 1;
      r_array$$11[v438] = c$$11 & BI_DM;
      c$$11 = c$$11 >> BI_DB;
      v439 = i$$32 < this.t
    }
    c$$11 = c$$11 + this.s
  }else {
    c$$11 = c$$11 + this.s;
    var v441 = i$$32 < a$$15.t;
    for(;v441;) {
      introspect(JAM.policy.p1) {
        var v1137 = a_array$$3[i$$32]
      }
      c$$11 = c$$11 + v1137;
      var v440 = i$$32;
      i$$32 = i$$32 + 1;
      r_array$$11[v440] = c$$11 & BI_DM;
      c$$11 = c$$11 >> BI_DB;
      v441 = i$$32 < a$$15.t
    }
    c$$11 = c$$11 + a$$15.s
  }
  var v443;
  if(c$$11 < 0) {
    v443 = -1
  }else {
    v443 = 0
  }
  r$$38.s = v443;
  if(c$$11 > 0) {
    var v444 = i$$32;
    i$$32 = i$$32 + 1;
    r_array$$11[v444] = c$$11
  }else {
    if(c$$11 < -1) {
      var v445 = i$$32;
      i$$32 = i$$32 + 1;
      r_array$$11[v445] = BI_DV + c$$11
    }
  }
  r$$38.t = i$$32;
  r$$38.clamp();
  return
}
function bnAdd(a$$16) {
  var r$$39 = nbi();
  JAM.call(this.addTo, this, [a$$16, r$$39]);
  return r$$39
}
function bnSubtract(a$$17) {
  var r$$40 = nbi();
  JAM.call(this.subTo, this, [a$$17, r$$40]);
  return r$$40
}
function bnMultiply(a$$18) {
  var r$$41 = nbi();
  JAM.call(this.multiplyTo, this, [a$$18, r$$41]);
  return r$$41
}
function bnDivide(a$$19) {
  var r$$42 = nbi();
  JAM.call(this.divRemTo, this, [a$$19, r$$42, null]);
  return r$$42
}
function bnRemainder(a$$20) {
  var r$$43 = nbi();
  JAM.call(this.divRemTo, this, [a$$20, null, r$$43]);
  return r$$43
}
function bnDivideAndRemainder(a$$21) {
  var q$$1 = nbi();
  var r$$44 = nbi();
  JAM.call(this.divRemTo, this, [a$$21, q$$1, r$$44]);
  return new Array(q$$1, r$$44)
}
function bnpDMultiply(n$$17) {
  var this_array$$30 = this.array;
  var v448 = this_array$$30;
  var v449 = this.t;
  var v1707 = JAM.call(this.am, this, [0, n$$17 - 1, this, 0, 0, this.t]);
  JAM.set(v448, v449, v1707);
  this.t = this.t + 1;
  this.clamp();
  return
}
function bnpDAddOffset(n$$18, w$$10) {
  var this_array$$31 = this.array;
  var v451 = this.t <= w$$10;
  for(;v451;) {
    var v450 = this.t;
    this.t = this.t + 1;
    JAM.set(this_array$$31, v450, 0);
    v451 = this.t <= w$$10
  }
  introspect(JAM.policy.p1) {
    var v1146 = this_array$$31[w$$10]
  }
  JAM.set(this_array$$31, w$$10, v1146 + n$$18);
  introspect(JAM.policy.p1) {
    var v1147 = this_array$$31[w$$10]
  }
  var v454 = v1147 >= BI_DV;
  for(;v454;) {
    introspect(JAM.policy.p1) {
      var v1148 = this_array$$31[w$$10]
    }
    JAM.set(this_array$$31, w$$10, v1148 - BI_DV);
    if((w$$10 = w$$10 + 1) >= this.t) {
      var v452 = this.t;
      this.t = this.t + 1;
      JAM.set(this_array$$31, v452, 0)
    }
    introspect(JAM.policy.p1) {
      var v1151 = this_array$$31[w$$10]
    }
    JAM.set(this_array$$31, w$$10, v1151 + 1);
    introspect(JAM.policy.p1) {
      var v1152 = this_array$$31[w$$10]
    }
    v454 = v1152 >= BI_DV
  }
  return
}
function NullExp() {
  return
}
function nNop(x$$77) {
  return x$$77
}
function nMulTo(x$$78, y$$41, r$$45) {
  JAM.call(x$$78.multiplyTo, x$$78, [y$$41, r$$45]);
  return
}
function nSqrTo(x$$79, r$$46) {
  JAM.call(x$$79.squareTo, x$$79, [r$$46]);
  return
}
function bnPow(e$$10) {
  return JAM.call(this.exp, this, [e$$10, new NullExp])
}
function bnpMultiplyLowerTo(a$$22, n$$19, r$$47) {
  var r_array$$12 = r$$47.array;
  var a_array$$4 = a$$22.array;
  var i$$33 = JAM.call(Math.min, Math, [this.t + a$$22.t, n$$19]);
  r$$47.s = 0;
  r$$47.t = i$$33;
  var v458 = i$$33 > 0;
  for(;v458;) {
    r_array$$12[i$$33 = i$$33 - 1] = 0;
    v458 = i$$33 > 0
  }
  var j$$8;
  j$$8 = r$$47.t - this.t;
  var v463 = i$$33 < j$$8;
  for(;v463;) {
    var v461 = r_array$$12;
    var v462 = i$$33 + this.t;
    introspect(JAM.policy.p1) {
      var v1156 = a_array$$4[i$$33]
    }
    var v1708 = JAM.call(this.am, this, [0, v1156, r$$47, i$$33, 0, this.t]);
    JAM.set(v461, v462, v1708);
    i$$33 = i$$33 + 1;
    v463 = i$$33 < j$$8
  }
  j$$8 = JAM.call(Math.min, Math, [a$$22.t, n$$19]);
  var v467 = i$$33 < j$$8;
  for(;v467;) {
    introspect(JAM.policy.p1) {
      var v465 = a_array$$4[i$$33]
    }
    JAM.call(this.am, this, [0, v465, r$$47, i$$33, 0, n$$19 - i$$33]);
    i$$33 = i$$33 + 1;
    v467 = i$$33 < j$$8
  }
  r$$47.clamp();
  return
}
function bnpMultiplyUpperTo(a$$23, n$$20, r$$48) {
  var r_array$$13 = r$$48.array;
  var a_array$$5 = a$$23.array;
  n$$20 = n$$20 - 1;
  var i$$34 = r$$48.t = this.t + a$$23.t - n$$20;
  r$$48.s = 0;
  var v469 = (i$$34 = i$$34 - 1) >= 0;
  for(;v469;) {
    r_array$$13[i$$34] = 0;
    v469 = (i$$34 = i$$34 - 1) >= 0
  }
  i$$34 = JAM.call(Math.max, Math, [n$$20 - this.t, 0]);
  var v473 = i$$34 < a$$23.t;
  for(;v473;) {
    var v471 = r_array$$13;
    var v472 = this.t + i$$34 - n$$20;
    var v1165 = n$$20 - i$$34;
    introspect(JAM.policy.p1) {
      var v1166 = a_array$$5[i$$34]
    }
    var v1709 = JAM.call(this.am, this, [v1165, v1166, r$$48, 0, 0, this.t + i$$34 - n$$20]);
    v471[v472] = v1709;
    i$$34 = i$$34 + 1;
    v473 = i$$34 < a$$23.t
  }
  r$$48.clamp();
  JAM.call(r$$48.drShiftTo, r$$48, [1, r$$48]);
  return
}
function Barrett(m$$11) {
  var v1710 = nbi();
  this.r2 = v1710;
  var v1711 = nbi();
  this.q3 = v1711;
  var v474 = BigInteger.ONE;
  JAM.call(v474.dlShiftTo, v474, [2 * m$$11.t, this.r2]);
  var v477 = this.r2;
  var v1712 = JAM.call(v477.divide, v477, [m$$11]);
  this.mu = v1712;
  this.m = m$$11;
  return
}
function barrettConvert(x$$80) {
  var v1170 = x$$80.s < 0;
  if(!v1170) {
    v1170 = x$$80.t > 2 * this.m.t
  }
  if(v1170) {
    return JAM.call(x$$80.mod, x$$80, [this.m])
  }else {
    if(JAM.call(x$$80.compareTo, x$$80, [this.m]) < 0) {
      return x$$80
    }else {
      var r$$49 = nbi();
      JAM.call(x$$80.copyTo, x$$80, [r$$49]);
      JAM.call(this.reduce, this, [r$$49]);
      return r$$49
    }
  }
  return
}
function barrettRevert(x$$81) {
  return x$$81
}
function barrettReduce(x$$82) {
  JAM.call(x$$82.drShiftTo, x$$82, [this.m.t - 1, this.r2]);
  if(x$$82.t > this.m.t + 1) {
    x$$82.t = this.m.t + 1;
    x$$82.clamp()
  }
  var v485 = this.mu;
  JAM.call(v485.multiplyUpperTo, v485, [this.r2, this.m.t + 1, this.q3]);
  var v489 = this.m;
  JAM.call(v489.multiplyLowerTo, v489, [this.q3, this.m.t + 1, this.r2]);
  var v494 = JAM.call(x$$82.compareTo, x$$82, [this.r2]) < 0;
  for(;v494;) {
    JAM.call(x$$82.dAddOffset, x$$82, [1, this.m.t + 1]);
    v494 = JAM.call(x$$82.compareTo, x$$82, [this.r2]) < 0
  }
  JAM.call(x$$82.subTo, x$$82, [this.r2, x$$82]);
  var v497 = JAM.call(x$$82.compareTo, x$$82, [this.m]) >= 0;
  for(;v497;) {
    JAM.call(x$$82.subTo, x$$82, [this.m, x$$82]);
    v497 = JAM.call(x$$82.compareTo, x$$82, [this.m]) >= 0
  }
  return
}
function barrettSqrTo(x$$83, r$$50) {
  JAM.call(x$$83.squareTo, x$$83, [r$$50]);
  JAM.call(this.reduce, this, [r$$50]);
  return
}
function barrettMulTo(x$$84, y$$42, r$$51) {
  JAM.call(x$$84.multiplyTo, x$$84, [y$$42, r$$51]);
  JAM.call(this.reduce, this, [r$$51]);
  return
}
function bnModPow(e$$11, m$$12) {
  var e_array = e$$11.array;
  var i$$35 = e$$11.bitLength();
  var k$$3;
  var r$$52 = nbv(1);
  var z$$5;
  if(i$$35 <= 0) {
    return r$$52
  }else {
    if(i$$35 < 18) {
      k$$3 = 1
    }else {
      if(i$$35 < 48) {
        k$$3 = 3
      }else {
        if(i$$35 < 144) {
          k$$3 = 4
        }else {
          if(i$$35 < 768) {
            k$$3 = 5
          }else {
            k$$3 = 6
          }
        }
      }
    }
  }
  if(i$$35 < 8) {
    z$$5 = new Classic(m$$12)
  }else {
    if(m$$12.isEven()) {
      z$$5 = new Barrett(m$$12)
    }else {
      z$$5 = new Montgomery(m$$12)
    }
  }
  var g$$1 = new Array;
  var n$$21 = 3;
  var k1 = k$$3 - 1;
  var km$$1 = (1 << k$$3) - 1;
  var v506 = g$$1;
  var v1713 = JAM.call(z$$5.convert, z$$5, [this]);
  v506[1] = v1713;
  if(k$$3 > 1) {
    var g2 = nbi();
    JAM.call(z$$5.sqrTo, z$$5, [g$$1[1], g2]);
    var v510 = n$$21 <= km$$1;
    for(;v510;) {
      var v1714 = nbi();
      g$$1[n$$21] = v1714;
      var v1183 = n$$21 - 2;
      introspect(JAM.policy.p1) {
        var v508 = g$$1[v1183]
      }
      introspect(JAM.policy.p1) {
        var v509 = g$$1[n$$21]
      }
      JAM.call(z$$5.mulTo, z$$5, [g2, v508, v509]);
      n$$21 = n$$21 + 2;
      v510 = n$$21 <= km$$1
    }
  }
  var j$$9 = e$$11.t - 1;
  var w$$11;
  var is1 = true;
  var r2$$1 = nbi();
  var t$$5;
  introspect(JAM.policy.p1) {
    var v1184 = e_array[j$$9]
  }
  i$$35 = nbits(v1184) - 1;
  var v527 = j$$9 >= 0;
  for(;v527;) {
    if(i$$35 >= k1) {
      introspect(JAM.policy.p1) {
        var v1185 = e_array[j$$9]
      }
      w$$11 = v1185 >> i$$35 - k1 & km$$1
    }else {
      introspect(JAM.policy.p1) {
        var v1187 = e_array[j$$9]
      }
      w$$11 = (v1187 & (1 << i$$35 + 1) - 1) << k1 - i$$35;
      if(j$$9 > 0) {
        var v1610 = j$$9 - 1;
        introspect(JAM.policy.p1) {
          var v1472 = e_array[v1610]
        }
        w$$11 = w$$11 | v1472 >> BI_DB + i$$35 - k1
      }
    }
    n$$21 = k$$3;
    var v519 = (w$$11 & 1) == 0;
    for(;v519;) {
      w$$11 = w$$11 >> 1;
      n$$21 = n$$21 - 1;
      v519 = (w$$11 & 1) == 0
    }
    if((i$$35 = i$$35 - n$$21) < 0) {
      i$$35 = i$$35 + BI_DB;
      j$$9 = j$$9 - 1
    }
    if(is1) {
      introspect(JAM.policy.p1) {
        var v521 = g$$1[w$$11]
      }
      JAM.call(v521.copyTo, v521, [r$$52]);
      is1 = false
    }else {
      var v522 = n$$21 > 1;
      for(;v522;) {
        JAM.call(z$$5.sqrTo, z$$5, [r$$52, r2$$1]);
        JAM.call(z$$5.sqrTo, z$$5, [r2$$1, r$$52]);
        n$$21 = n$$21 - 2;
        v522 = n$$21 > 1
      }
      if(n$$21 > 0) {
        JAM.call(z$$5.sqrTo, z$$5, [r$$52, r2$$1])
      }else {
        t$$5 = r$$52;
        r$$52 = r2$$1;
        r2$$1 = t$$5
      }
      introspect(JAM.policy.p1) {
        var v524 = g$$1[w$$11]
      }
      JAM.call(z$$5.mulTo, z$$5, [r2$$1, v524, r$$52])
    }
    var v1193 = j$$9 >= 0;
    if(v1193) {
      introspect(JAM.policy.p1) {
        var v1612 = e_array[j$$9]
      }
      v1193 = (v1612 & 1 << i$$35) == 0
    }
    var v526 = v1193;
    for(;v526;) {
      JAM.call(z$$5.sqrTo, z$$5, [r$$52, r2$$1]);
      t$$5 = r$$52;
      r$$52 = r2$$1;
      r2$$1 = t$$5;
      if((i$$35 = i$$35 - 1) < 0) {
        i$$35 = BI_DB - 1;
        j$$9 = j$$9 - 1
      }
      var v1195 = j$$9 >= 0;
      if(v1195) {
        introspect(JAM.policy.p1) {
          var v1614 = e_array[j$$9]
        }
        v1195 = (v1614 & 1 << i$$35) == 0
      }
      v526 = v1195
    }
    v527 = j$$9 >= 0
  }
  return JAM.call(z$$5.revert, z$$5, [r$$52])
}
function bnGCD(a$$24) {
  var v528;
  if(this.s < 0) {
    v528 = this.negate()
  }else {
    v528 = this.clone()
  }
  var x$$85 = v528;
  var v529;
  if(a$$24.s < 0) {
    v529 = a$$24.negate()
  }else {
    v529 = a$$24.clone()
  }
  var y$$43 = v529;
  if(JAM.call(x$$85.compareTo, x$$85, [y$$43]) < 0) {
    var t$$6 = x$$85;
    x$$85 = y$$43;
    y$$43 = t$$6
  }
  var i$$36 = x$$85.getLowestSetBit();
  var g$$2 = y$$43.getLowestSetBit();
  if(g$$2 < 0) {
    return x$$85
  }
  if(i$$36 < g$$2) {
    g$$2 = i$$36
  }
  if(g$$2 > 0) {
    JAM.call(x$$85.rShiftTo, x$$85, [g$$2, x$$85]);
    JAM.call(y$$43.rShiftTo, y$$43, [g$$2, y$$43])
  }
  var v537 = x$$85.signum() > 0;
  for(;v537;) {
    if((i$$36 = x$$85.getLowestSetBit()) > 0) {
      JAM.call(x$$85.rShiftTo, x$$85, [i$$36, x$$85])
    }
    if((i$$36 = y$$43.getLowestSetBit()) > 0) {
      JAM.call(y$$43.rShiftTo, y$$43, [i$$36, y$$43])
    }
    if(JAM.call(x$$85.compareTo, x$$85, [y$$43]) >= 0) {
      JAM.call(x$$85.subTo, x$$85, [y$$43, x$$85]);
      JAM.call(x$$85.rShiftTo, x$$85, [1, x$$85])
    }else {
      JAM.call(y$$43.subTo, y$$43, [x$$85, y$$43]);
      JAM.call(y$$43.rShiftTo, y$$43, [1, y$$43])
    }
    v537 = x$$85.signum() > 0
  }
  if(g$$2 > 0) {
    JAM.call(y$$43.lShiftTo, y$$43, [g$$2, y$$43])
  }
  return y$$43
}
function bnpModInt(n$$22) {
  var this_array$$32 = this.array;
  if(n$$22 <= 0) {
    return 0
  }
  var d$$4 = BI_DV % n$$22;
  var v540;
  if(this.s < 0) {
    v540 = n$$22 - 1
  }else {
    v540 = 0
  }
  var r$$53 = v540;
  if(this.t > 0) {
    if(d$$4 == 0) {
      r$$53 = this_array$$32[0] % n$$22
    }else {
      var i$$37 = this.t - 1;
      var v544 = i$$37 >= 0;
      for(;v544;) {
        var v1206 = d$$4 * r$$53;
        introspect(JAM.policy.p1) {
          var v1207 = this_array$$32[i$$37]
        }
        r$$53 = (v1206 + v1207) % n$$22;
        i$$37 = i$$37 - 1;
        v544 = i$$37 >= 0
      }
    }
  }
  return r$$53
}
function bnModInverse(m$$13) {
  var ac = m$$13.isEven();
  var v1479 = this.isEven();
  if(v1479) {
    v1479 = ac
  }
  var v1208 = v1479;
  if(!v1208) {
    v1208 = m$$13.signum() == 0
  }
  if(v1208) {
    return BigInteger.ZERO
  }
  var u = m$$13.clone();
  var v$$1 = this.clone();
  var a$$25 = nbv(1);
  var b$$6 = nbv(0);
  var c$$12 = nbv(0);
  var d$$5 = nbv(1);
  var v555 = u.signum() != 0;
  for(;v555;) {
    var v550 = u.isEven();
    for(;v550;) {
      JAM.call(u.rShiftTo, u, [1, u]);
      if(ac) {
        var v1210 = !a$$25.isEven();
        if(!v1210) {
          v1210 = !b$$6.isEven()
        }
        if(v1210) {
          JAM.call(a$$25.addTo, a$$25, [this, a$$25]);
          JAM.call(b$$6.subTo, b$$6, [m$$13, b$$6])
        }
        JAM.call(a$$25.rShiftTo, a$$25, [1, a$$25])
      }else {
        if(!b$$6.isEven()) {
          JAM.call(b$$6.subTo, b$$6, [m$$13, b$$6])
        }
      }
      JAM.call(b$$6.rShiftTo, b$$6, [1, b$$6]);
      v550 = u.isEven()
    }
    var v553 = v$$1.isEven();
    for(;v553;) {
      JAM.call(v$$1.rShiftTo, v$$1, [1, v$$1]);
      if(ac) {
        var v1212 = !c$$12.isEven();
        if(!v1212) {
          v1212 = !d$$5.isEven()
        }
        if(v1212) {
          JAM.call(c$$12.addTo, c$$12, [this, c$$12]);
          JAM.call(d$$5.subTo, d$$5, [m$$13, d$$5])
        }
        JAM.call(c$$12.rShiftTo, c$$12, [1, c$$12])
      }else {
        if(!d$$5.isEven()) {
          JAM.call(d$$5.subTo, d$$5, [m$$13, d$$5])
        }
      }
      JAM.call(d$$5.rShiftTo, d$$5, [1, d$$5]);
      v553 = v$$1.isEven()
    }
    if(JAM.call(u.compareTo, u, [v$$1]) >= 0) {
      JAM.call(u.subTo, u, [v$$1, u]);
      if(ac) {
        JAM.call(a$$25.subTo, a$$25, [c$$12, a$$25])
      }
      JAM.call(b$$6.subTo, b$$6, [d$$5, b$$6])
    }else {
      JAM.call(v$$1.subTo, v$$1, [u, v$$1]);
      if(ac) {
        JAM.call(c$$12.subTo, c$$12, [a$$25, c$$12])
      }
      JAM.call(d$$5.subTo, d$$5, [b$$6, d$$5])
    }
    v555 = u.signum() != 0
  }
  if(JAM.call(v$$1.compareTo, v$$1, [BigInteger.ONE]) != 0) {
    return BigInteger.ZERO
  }
  if(JAM.call(d$$5.compareTo, d$$5, [m$$13]) >= 0) {
    return JAM.call(d$$5.subtract, d$$5, [m$$13])
  }
  if(d$$5.signum() < 0) {
    JAM.call(d$$5.addTo, d$$5, [m$$13, d$$5])
  }else {
    return d$$5
  }
  if(d$$5.signum() < 0) {
    return JAM.call(d$$5.add, d$$5, [m$$13])
  }else {
    return d$$5
  }
  return
}
function bnIsProbablePrime(t$$7) {
  var i$$38;
  var x$$86 = this.abs();
  var x_array$$2 = x$$86.array;
  var v1220 = x$$86.t == 1;
  if(v1220) {
    var v1490 = x_array$$2[0];
    var v1616 = lowprimes.length - 1;
    introspect(JAM.policy.p1) {
      var v1491 = lowprimes[v1616]
    }
    v1220 = v1490 <= v1491
  }
  if(v1220) {
    i$$38 = 0;
    var v561 = i$$38 < lowprimes.length;
    for(;v561;) {
      var v1222 = x_array$$2[0];
      introspect(JAM.policy.p1) {
        var v1223 = lowprimes[i$$38]
      }
      if(v1222 == v1223) {
        return true
      }
      i$$38 = i$$38 + 1;
      v561 = i$$38 < lowprimes.length
    }
    return false
  }
  if(x$$86.isEven()) {
    return false
  }
  i$$38 = 1;
  var v567 = i$$38 < lowprimes.length;
  for(;v567;) {
    introspect(JAM.policy.p1) {
      var m$$14 = lowprimes[i$$38]
    }
    var j$$10 = i$$38 + 1;
    var v1226 = j$$10 < lowprimes.length;
    if(v1226) {
      v1226 = m$$14 < lplim
    }
    var v564 = v1226;
    for(;v564;) {
      var v1493 = j$$10;
      j$$10 = j$$10 + 1;
      introspect(JAM.policy.p1) {
        var v1227 = lowprimes[v1493]
      }
      m$$14 = m$$14 * v1227;
      var v1228 = j$$10 < lowprimes.length;
      if(v1228) {
        v1228 = m$$14 < lplim
      }
      v564 = v1228
    }
    m$$14 = JAM.call(x$$86.modInt, x$$86, [m$$14]);
    var v566 = i$$38 < j$$10;
    for(;v566;) {
      var v1617 = i$$38;
      i$$38 = i$$38 + 1;
      introspect(JAM.policy.p1) {
        var v1495 = lowprimes[v1617]
      }
      if(m$$14 % v1495 == 0) {
        return false
      }
      v566 = i$$38 < j$$10
    }
    v567 = i$$38 < lowprimes.length
  }
  return JAM.call(x$$86.millerRabin, x$$86, [t$$7])
}
function bnpMillerRabin(t$$8) {
  var n1 = JAM.call(this.subtract, this, [BigInteger.ONE]);
  var k$$4 = n1.getLowestSetBit();
  if(k$$4 <= 0) {
    return false
  }
  var r$$54 = JAM.call(n1.shiftRight, n1, [k$$4]);
  t$$8 = t$$8 + 1 >> 1;
  if(t$$8 > lowprimes.length) {
    t$$8 = lowprimes.length
  }
  var a$$26 = nbi();
  var i$$39 = 0;
  var v577 = i$$39 < t$$8;
  for(;v577;) {
    introspect(JAM.policy.p1) {
      var v572 = lowprimes[i$$39]
    }
    JAM.call(a$$26.fromInt, a$$26, [v572]);
    var y$$44 = JAM.call(a$$26.modPow, a$$26, [r$$54, this]);
    var v1232 = JAM.call(y$$44.compareTo, y$$44, [BigInteger.ONE]) != 0;
    if(v1232) {
      v1232 = JAM.call(y$$44.compareTo, y$$44, [n1]) != 0
    }
    if(v1232) {
      var j$$11 = 1;
      var v1498 = j$$11;
      j$$11 = j$$11 + 1;
      var v1233 = v1498 < k$$4;
      if(v1233) {
        v1233 = JAM.call(y$$44.compareTo, y$$44, [n1]) != 0
      }
      var v574 = v1233;
      for(;v574;) {
        y$$44 = JAM.call(y$$44.modPowInt, y$$44, [2, this]);
        if(JAM.call(y$$44.compareTo, y$$44, [BigInteger.ONE]) == 0) {
          return false
        }
        var v1501 = j$$11;
        j$$11 = j$$11 + 1;
        var v1235 = v1501 < k$$4;
        if(v1235) {
          v1235 = JAM.call(y$$44.compareTo, y$$44, [n1]) != 0
        }
        v574 = v1235
      }
      if(JAM.call(y$$44.compareTo, y$$44, [n1]) != 0) {
        return false
      }
    }
    i$$39 = i$$39 + 1;
    v577 = i$$39 < t$$8
  }
  return true
}
function Arcfour() {
  this.i = 0;
  this.j = 0;
  var v1715 = new Array;
  this.S = v1715;
  return
}
function ARC4init(key$$14) {
  var i$$40;
  var j$$12;
  var t$$9;
  i$$40 = 0;
  var v579 = i$$40 < 256;
  for(;v579;) {
    JAM.set(this.S, i$$40, i$$40);
    i$$40 = i$$40 + 1;
    v579 = i$$40 < 256
  }
  j$$12 = 0;
  i$$40 = 0;
  var v584 = i$$40 < 256;
  for(;v584;) {
    var v1619 = this.S;
    introspect(JAM.policy.p1) {
      var v1503 = v1619[i$$40]
    }
    var v1237 = j$$12 + v1503;
    var v1504 = i$$40 % key$$14.length;
    introspect(JAM.policy.p1) {
      var v1238 = key$$14[v1504]
    }
    j$$12 = v1237 + v1238 & 255;
    var v581 = this.S;
    introspect(JAM.policy.p1) {
      t$$9 = v581[i$$40]
    }
    JAM.set(this.S, i$$40, JAM.get(this.S, j$$12, JAM.policy.p1));
    JAM.set(this.S, j$$12, t$$9);
    i$$40 = i$$40 + 1;
    v584 = i$$40 < 256
  }
  this.i = 0;
  this.j = 0;
  return
}
function ARC4next() {
  var t$$10;
  this.i = this.i + 1 & 255;
  var v1241 = this.j;
  var v1505 = this.S;
  var v1506 = this.i;
  introspect(JAM.policy.p1) {
    var v1242 = v1505[v1506]
  }
  this.j = v1241 + v1242 & 255;
  t$$10 = this.S[this.i];
  this.S[this.i] = this.S[this.j];
  this.S[this.j] = t$$10;
  var v593 = this.S;
  var v1621 = this.S;
  var v1622 = this.i;
  introspect(JAM.policy.p1) {
    var v1507 = v1621[v1622]
  }
  var v594 = t$$10 + v1507 & 255;
  introspect(JAM.policy.p1) {
    return v593[v594]
  }
}
function prng_newstate() {
  return new Arcfour
}
function rng_seed_int(x$$87) {
  var v595 = rng_pptr;
  rng_pptr = rng_pptr + 1;
  introspect(JAM.policy.p1) {
    var v1508 = rng_pool[v595]
  }
  JAM.set(rng_pool, v595, v1508 ^ x$$87 & 255);
  var v596 = rng_pptr;
  rng_pptr = rng_pptr + 1;
  introspect(JAM.policy.p1) {
    var v1510 = rng_pool[v596]
  }
  JAM.set(rng_pool, v596, v1510 ^ x$$87 >> 8 & 255);
  var v597 = rng_pptr;
  rng_pptr = rng_pptr + 1;
  introspect(JAM.policy.p1) {
    var v1512 = rng_pool[v597]
  }
  JAM.set(rng_pool, v597, v1512 ^ x$$87 >> 16 & 255);
  var v598 = rng_pptr;
  rng_pptr = rng_pptr + 1;
  introspect(JAM.policy.p1) {
    var v1514 = rng_pool[v598]
  }
  JAM.set(rng_pool, v598, v1514 ^ x$$87 >> 24 & 255);
  if(rng_pptr >= rng_psize) {
    rng_pptr = rng_pptr - rng_psize
  }
  return
}
function rng_seed_time() {
  rng_seed_int(1122926989487);
  return
}
function rng_get_byte() {
  if(rng_state == null) {
    rng_seed_time();
    rng_state = prng_newstate();
    JAM.call(rng_state.init, rng_state, [rng_pool]);
    rng_pptr = 0;
    var v600 = rng_pptr < rng_pool.length;
    for(;v600;) {
      JAM.set(rng_pool, rng_pptr, 0);
      rng_pptr = rng_pptr + 1;
      v600 = rng_pptr < rng_pool.length
    }
    rng_pptr = 0
  }
  return rng_state.next()
}
function rng_get_bytes(ba) {
  var i$$41;
  i$$41 = 0;
  var v602 = i$$41 < ba.length;
  for(;v602;) {
    var v1716 = rng_get_byte();
    JAM.set(ba, i$$41, v1716);
    i$$41 = i$$41 + 1;
    v602 = i$$41 < ba.length
  }
  return
}
function SecureRandom() {
  return
}
function parseBigInt(str$$6, r$$55) {
  return new BigInteger(str$$6, r$$55)
}
function linebrk(s$$6, n$$23) {
  var ret = "";
  var i$$42 = 0;
  var v603 = i$$42 + n$$23 < s$$6.length;
  for(;v603;) {
    ret = ret + (s$$6.substring(i$$42, i$$42 + n$$23) + "\n");
    i$$42 = i$$42 + n$$23;
    v603 = i$$42 + n$$23 < s$$6.length
  }
  return ret + s$$6.substring(i$$42, s$$6.length)
}
function byte2Hex(b$$7) {
  if(b$$7 < 16) {
    return"0" + JAM.call(b$$7.toString, b$$7, [16])
  }else {
    return JAM.call(b$$7.toString, b$$7, [16])
  }
  return
}
function pkcs1pad2(s$$7, n$$24) {
  if(n$$24 < s$$7.length + 11) {
    JAM.call(alert, null, ["Message too long for RSA"]);
    return null
  }
  var ba$$1 = new Array;
  var i$$43 = s$$7.length - 1;
  var v1258 = i$$43 >= 0;
  if(v1258) {
    v1258 = n$$24 > 0
  }
  var v612 = v1258;
  for(;v612;) {
    var v610 = ba$$1;
    var v611 = n$$24 = n$$24 - 1;
    var v1259 = i$$43;
    i$$43 = i$$43 - 1;
    var v1717 = s$$7.charCodeAt(v1259);
    v610[v611] = v1717;
    var v1260 = i$$43 >= 0;
    if(v1260) {
      v1260 = n$$24 > 0
    }
    v612 = v1260
  }
  ba$$1[n$$24 = n$$24 - 1] = 0;
  var rng = new SecureRandom;
  var x$$88 = new Array;
  var v616 = n$$24 > 2;
  for(;v616;) {
    x$$88[0] = 0;
    var v614 = x$$88[0] == 0;
    for(;v614;) {
      JAM.call(rng.nextBytes, rng, [x$$88]);
      v614 = x$$88[0] == 0
    }
    ba$$1[n$$24 = n$$24 - 1] = x$$88[0];
    v616 = n$$24 > 2
  }
  ba$$1[n$$24 = n$$24 - 1] = 2;
  ba$$1[n$$24 = n$$24 - 1] = 0;
  return new BigInteger(ba$$1)
}
function RSAKey() {
  this.n = null;
  this.e = 0;
  this.d = null;
  this.p = null;
  this.q = null;
  this.dmp1 = null;
  this.dmq1 = null;
  this.coeff = null;
  return
}
function RSASetPublic(N, E) {
  var v1263 = N != null;
  if(v1263) {
    var v1518 = E != null;
    if(v1518) {
      var v1627 = N.length > 0;
      if(v1627) {
        v1627 = E.length > 0
      }
      v1518 = v1627
    }
    v1263 = v1518
  }
  if(v1263) {
    var v1718 = parseBigInt(N, 16);
    this.n = v1718;
    var v1719 = parseInt(E, 16);
    this.e = v1719
  }else {
    JAM.call(alert, null, ["Invalid RSA public key"])
  }
  return
}
function RSADoPublic(x$$89) {
  return JAM.call(x$$89.modPowInt, x$$89, [this.e, this.n])
}
function RSAEncrypt(text$$7) {
  var m$$15 = pkcs1pad2(text$$7, this.n.bitLength() + 7 >> 3);
  if(m$$15 == null) {
    return null
  }
  var c$$13 = JAM.call(this.doPublic, this, [m$$15]);
  if(c$$13 == null) {
    return null
  }
  var h$$7 = JAM.call(c$$13.toString, c$$13, [16]);
  if((h$$7.length & 1) == 0) {
    return h$$7
  }else {
    return"0" + h$$7
  }
  return
}
function pkcs1unpad2(d$$6, n$$25) {
  var b$$8 = d$$6.toByteArray();
  var i$$44 = 0;
  var v1266 = i$$44 < b$$8.length;
  if(v1266) {
    introspect(JAM.policy.p1) {
      var v1522 = b$$8[i$$44]
    }
    v1266 = v1522 == 0
  }
  var v626 = v1266;
  for(;v626;) {
    i$$44 = i$$44 + 1;
    var v1267 = i$$44 < b$$8.length;
    if(v1267) {
      introspect(JAM.policy.p1) {
        var v1524 = b$$8[i$$44]
      }
      v1267 = v1524 == 0
    }
    v626 = v1267
  }
  var v1268 = b$$8.length - i$$44 != n$$25 - 1;
  if(!v1268) {
    introspect(JAM.policy.p1) {
      var v1527 = b$$8[i$$44]
    }
    v1268 = v1527 != 2
  }
  if(v1268) {
    return null
  }
  i$$44 = i$$44 + 1;
  introspect(JAM.policy.p1) {
    var v1269 = b$$8[i$$44]
  }
  var v629 = v1269 != 0;
  for(;v629;) {
    if((i$$44 = i$$44 + 1) >= b$$8.length) {
      return null
    }
    introspect(JAM.policy.p1) {
      var v1272 = b$$8[i$$44]
    }
    v629 = v1272 != 0
  }
  var ret$$1 = "";
  var v630 = (i$$44 = i$$44 + 1) < b$$8.length;
  for(;v630;) {
    var v1275 = ret$$1;
    introspect(JAM.policy.p1) {
      var v1529 = b$$8[i$$44]
    }
    ret$$1 = v1275 + String.fromCharCode(v1529);
    v630 = (i$$44 = i$$44 + 1) < b$$8.length
  }
  return ret$$1
}
function RSASetPrivate(N$$1, E$$1, D) {
  var v1279 = N$$1 != null;
  if(v1279) {
    var v1530 = E$$1 != null;
    if(v1530) {
      var v1630 = N$$1.length > 0;
      if(v1630) {
        v1630 = E$$1.length > 0
      }
      v1530 = v1630
    }
    v1279 = v1530
  }
  if(v1279) {
    var v1720 = parseBigInt(N$$1, 16);
    this.n = v1720;
    var v1721 = parseInt(E$$1, 16);
    this.e = v1721;
    var v1722 = parseBigInt(D, 16);
    this.d = v1722
  }else {
    JAM.call(alert, null, ["Invalid RSA private key"])
  }
  return
}
function RSASetPrivateEx(N$$2, E$$2, D$$1, P, Q, DP, DQ, C) {
  var v1280 = N$$2 != null;
  if(v1280) {
    var v1531 = E$$2 != null;
    if(v1531) {
      var v1631 = N$$2.length > 0;
      if(v1631) {
        v1631 = E$$2.length > 0
      }
      v1531 = v1631
    }
    v1280 = v1531
  }
  if(v1280) {
    var v1723 = parseBigInt(N$$2, 16);
    this.n = v1723;
    var v1724 = parseInt(E$$2, 16);
    this.e = v1724;
    var v1725 = parseBigInt(D$$1, 16);
    this.d = v1725;
    var v1726 = parseBigInt(P, 16);
    this.p = v1726;
    var v1727 = parseBigInt(Q, 16);
    this.q = v1727;
    var v1728 = parseBigInt(DP, 16);
    this.dmp1 = v1728;
    var v1729 = parseBigInt(DQ, 16);
    this.dmq1 = v1729;
    var v1730 = parseBigInt(C, 16);
    this.coeff = v1730
  }else {
    JAM.call(alert, null, ["Invalid RSA private key"])
  }
  return
}
function RSAGenerate(B, E$$3) {
  var rng$$1 = new SecureRandom;
  var qs = B >> 1;
  var v1731 = parseInt(E$$3, 16);
  this.e = v1731;
  var ee = new BigInteger(E$$3, 16);
  for(;;) {
    for(;;) {
      var v1732 = new BigInteger(B - qs, 1, rng$$1);
      this.p = v1732;
      var v1688 = this.p;
      var v1673 = JAM.call(v1688.subtract, v1688, [BigInteger.ONE]);
      var v1632 = JAM.call(v1673.gcd, v1673, [ee]);
      var v1281 = JAM.call(v1632.compareTo, v1632, [BigInteger.ONE]) == 0;
      if(v1281) {
        var v1533 = this.p;
        v1281 = JAM.call(v1533.isProbablePrime, v1533, [10])
      }
      if(v1281) {
        break
      }
    }
    for(;;) {
      var v1733 = new BigInteger(qs, 1, rng$$1);
      this.q = v1733;
      var v1690 = this.q;
      var v1674 = JAM.call(v1690.subtract, v1690, [BigInteger.ONE]);
      var v1634 = JAM.call(v1674.gcd, v1674, [ee]);
      var v1282 = JAM.call(v1634.compareTo, v1634, [BigInteger.ONE]) == 0;
      if(v1282) {
        var v1535 = this.q;
        v1282 = JAM.call(v1535.isProbablePrime, v1535, [10])
      }
      if(v1282) {
        break
      }
    }
    var v1536 = this.p;
    if(JAM.call(v1536.compareTo, v1536, [this.q]) <= 0) {
      var t$$11 = this.p;
      this.p = this.q;
      this.q = t$$11
    }
    var v637 = this.p;
    var p1 = JAM.call(v637.subtract, v637, [BigInteger.ONE]);
    var v639 = this.q;
    var q1 = JAM.call(v639.subtract, v639, [BigInteger.ONE]);
    var phi = JAM.call(p1.multiply, p1, [q1]);
    var v1538 = JAM.call(phi.gcd, phi, [ee]);
    if(JAM.call(v1538.compareTo, v1538, [BigInteger.ONE]) == 0) {
      var v641 = this.p;
      var v1734 = JAM.call(v641.multiply, v641, [this.q]);
      this.n = v1734;
      var v1735 = JAM.call(ee.modInverse, ee, [phi]);
      this.d = v1735;
      var v643 = this.d;
      var v1736 = JAM.call(v643.mod, v643, [p1]);
      this.dmp1 = v1736;
      var v644 = this.d;
      var v1737 = JAM.call(v644.mod, v644, [q1]);
      this.dmq1 = v1737;
      var v645 = this.q;
      var v1738 = JAM.call(v645.modInverse, v645, [this.p]);
      this.coeff = v1738;
      break
    }
  }
  return
}
function RSADoPrivate(x$$90) {
  var v1285 = this.p == null;
  if(!v1285) {
    v1285 = this.q == null
  }
  if(v1285) {
    return JAM.call(x$$90.modPow, x$$90, [this.d, this.n])
  }
  var v651 = JAM.call(x$$90.mod, x$$90, [this.p]);
  var xp = JAM.call(v651.modPow, v651, [this.dmp1, this.p]);
  var v654 = JAM.call(x$$90.mod, x$$90, [this.q]);
  var xq = JAM.call(v654.modPow, v654, [this.dmq1, this.q]);
  var v658 = JAM.call(xp.compareTo, xp, [xq]) < 0;
  for(;v658;) {
    xp = JAM.call(xp.add, xp, [this.p]);
    v658 = JAM.call(xp.compareTo, xp, [xq]) < 0
  }
  var v1636 = JAM.call(xp.subtract, xp, [xq]);
  var v1543 = JAM.call(v1636.multiply, v1636, [this.coeff]);
  var v1290 = JAM.call(v1543.mod, v1543, [this.p]);
  var v659 = JAM.call(v1290.multiply, v1290, [this.q]);
  return JAM.call(v659.add, v659, [xq])
}
function RSADecrypt(ctext) {
  var c$$14 = parseBigInt(ctext, 16);
  var m$$16 = JAM.call(this.doPrivate, this, [c$$14]);
  if(m$$16 == null) {
    return null
  }
  return pkcs1unpad2(m$$16, this.n.bitLength() + 7 >> 3)
}
function encrypt() {
  var RSA = new RSAKey;
  JAM.call(RSA.setPublic, RSA, [nValue, eValue]);
  JAM.call(RSA.setPrivateEx, RSA, [nValue, eValue, dValue, pValue, qValue, dmp1Value, dmq1Value, coeffValue]);
  encrypted = JAM.call(RSA.encrypt, RSA, [TEXT]);
  return
}
function decrypt() {
  var RSA$$1 = new RSAKey;
  JAM.call(RSA$$1.setPublic, RSA$$1, [nValue, eValue]);
  JAM.call(RSA$$1.setPrivateEx, RSA$$1, [nValue, eValue, dValue, pValue, qValue, dmp1Value, dmq1Value, coeffValue]);
  var decrypted = JAM.call(RSA$$1.decrypt, RSA$$1, [encrypted]);
  if(decrypted != TEXT) {
    throw new Error("Crypto operation failed");
  }
  return
}
function ShowBox(name$$33) {
  function v2(entry) {
    if(name$$33.valueOf() === entry.valueOf()) {
      var box1 = document.getElementById("Box-" + name$$33 + "Latency");
      box1.style.visibility = "visible"
    }
    return
  }
  var box = document.getElementById("Box-" + name$$33);
  box.style.visibility = "visible";
  var bar = document.getElementById("progress-bar").style.width = "" + (completed = completed + 1) / benchmarks * 100 + "%";
  latencyBenchmarks.forEach(v2);
  return
}
function AddResult(name$$34, result$$2) {
  console.log(name$$34 + ": " + result$$2);
  var box$$1 = document.getElementById("Result-" + name$$34);
  JAM.set(box$$1, "innerHTML", result$$2);
  return
}
function AddError(name$$35, error$$3) {
  console.log(name$$35 + ": " + error$$3.message);
  if(error$$3 == "TypedArrayUnsupported") {
    AddResult(name$$35, "<b>Unsupported</b>")
  }else {
    if(error$$3 == "PerformanceNowUnsupported") {
      AddResult(name$$35, "<b>Timer error</b>")
    }else {
      AddResult(name$$35, "<b>Error</b>")
    }
  }
  success = false;
  return
}
function AddScore(score$$2) {
  var status = document.getElementById("main-banner");
  if(success) {
    JAM.set(status, "innerHTML", "Octane Score: " + score$$2)
  }else {
    JAM.set(status, "innerHTML", "Octane Score (incomplete): " + score$$2)
  }
  document.getElementById("progress-bar-container").style.visibility = "hidden";
  document.getElementById("bottom-text").style.visibility = "visible";
  document.getElementById("inside-anchor").removeChild(document.getElementById("bar-appendix"));
  document.getElementById("alertbox").style.visibility = "hidden";
  return
}
function Run() {
  JAM.set(document.getElementById("main-banner"), "innerHTML", "Running Octane...");
  JAM.set(document.getElementById("bar-appendix"), "innerHTML", '<br/><div class="progress progress-striped" id="progress-bar-container" style="visibility:hidden"><div class="bar"style="width: 0%;" id="progress-bar"></div></div>');
  var anchor = document.getElementById("run-octane");
  var parent = document.getElementById("main-container");
  JAM.call(parent.appendChild, parent, [document.getElementById("inside-anchor")]);
  parent.removeChild(anchor);
  JAM.set(document.getElementById("startup-text"), "innerHTML", "");
  document.getElementById("progress-bar-container").style.visibility = "visible";
  JAM.call(BenchmarkSuite.RunSuites, BenchmarkSuite, [{NotifyStart:ShowBox, NotifyError:AddError, NotifyResult:AddResult, NotifyScore:AddScore}, skipBenchmarks]);
  return
}
function CheckCompatibility() {
  var v685 = typeof Uint8Array != "undefined";
  if(v685) {
    var v1306 = typeof Float64Array != "undefined";
    if(v1306) {
      v1306 = typeof(new Uint8Array(0)).subarray != "undefined"
    }
    v685 = v1306
  }
  var hasTypedArrays = v685;
  if(!hasTypedArrays) {
    console.log("Typed Arrays not supported");
    document.getElementById("alertbox").style.display = "block"
  }
  if(window.document.URL.indexOf("skip_zlib=1") >= 0) {
    skipBenchmarks.push("zlib")
  }
  if(window.document.URL.indexOf("auto=1") >= 0) {
    Run()
  }
  return
}
function Load() {
  JAM.call(setTimeout, null, [CheckCompatibility, 200]);
  return
}
var performance = performance || {};
var v690 = performance;
var v1739 = v3();
v690.now = v1739;
BenchmarkResult.prototype.valueOf = v4;
BenchmarkSuite.suites = [];
BenchmarkSuite.version = "9";
BenchmarkSuite.config = {doWarmup:undefined, doDeterministic:undefined};
alert = v5;
BenchmarkSuite.ResetRNG = v8;
BenchmarkSuite.RunSuites = v9;
BenchmarkSuite.CountBenchmarks = v10;
BenchmarkSuite.GeometricMean = v11;
BenchmarkSuite.GeometricMeanTime = v12;
BenchmarkSuite.GeometricMeanLatency = v13;
BenchmarkSuite.FormatScore = v14;
BenchmarkSuite.prototype.NotifyStep = v15;
BenchmarkSuite.prototype.NotifyResult = v16;
BenchmarkSuite.prototype.NotifySkipped = v17;
BenchmarkSuite.prototype.NotifyError = v18;
BenchmarkSuite.prototype.RunSingleBenchmark = v19;
BenchmarkSuite.prototype.RunStep = v20;
var Crypto = new BenchmarkSuite("Crypto", [266181], [new Benchmark("Encrypt", true, false, 3900, encrypt), new Benchmark("Decrypt", true, false, 220, decrypt)]);
var dbits;
var BI_DB;
var BI_DM;
var BI_DV;
var BI_FP;
var BI_FV;
var BI_F1;
var BI_F2;
var canary = 0xdeadbeefcafe;
var j_lm = (canary & 16777215) == 15715070;
setupEngine = v21;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array;
var rr;
var vv;
rr = "0".charCodeAt(0);
vv = 0;
var v702 = vv <= 9;
for(;v702;) {
  var v701 = rr;
  rr = rr + 1;
  BI_RC[v701] = vv;
  vv = vv + 1;
  v702 = vv <= 9
}
rr = "a".charCodeAt(0);
vv = 10;
var v704 = vv < 36;
for(;v704;) {
  var v703 = rr;
  rr = rr + 1;
  BI_RC[v703] = vv;
  vv = vv + 1;
  v704 = vv < 36
}
rr = "A".charCodeAt(0);
vv = 10;
var v706 = vv < 36;
for(;v706;) {
  var v705 = rr;
  rr = rr + 1;
  BI_RC[v705] = vv;
  vv = vv + 1;
  v706 = vv < 36
}
Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;
Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.isEven = bnpIsEven;
BigInteger.prototype.exp = bnpExp;
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.modPowInt = bnModPowInt;
var v739 = BigInteger;
var v1740 = nbv(0);
v739.ZERO = v1740;
var v740 = BigInteger;
var v1741 = nbv(1);
v740.ONE = v1741;
NullExp.prototype.convert = nNop;
NullExp.prototype.revert = nNop;
NullExp.prototype.mulTo = nMulTo;
NullExp.prototype.sqrTo = nSqrTo;
Barrett.prototype.convert = barrettConvert;
Barrett.prototype.revert = barrettRevert;
Barrett.prototype.reduce = barrettReduce;
Barrett.prototype.mulTo = barrettMulTo;
Barrett.prototype.sqrTo = barrettSqrTo;
var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509];
var v750 = 1 << 26;
var v1312 = lowprimes.length - 1;
introspect(JAM.policy.p1) {
  var v751 = lowprimes[v1312]
}
var lplim = v750 / v751;
BigInteger.prototype.chunkSize = bnpChunkSize;
BigInteger.prototype.toRadix = bnpToRadix;
BigInteger.prototype.fromRadix = bnpFromRadix;
BigInteger.prototype.fromNumber = bnpFromNumber;
BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
BigInteger.prototype.changeBit = bnpChangeBit;
BigInteger.prototype.addTo = bnpAddTo;
BigInteger.prototype.dMultiply = bnpDMultiply;
BigInteger.prototype.dAddOffset = bnpDAddOffset;
BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
BigInteger.prototype.modInt = bnpModInt;
BigInteger.prototype.millerRabin = bnpMillerRabin;
BigInteger.prototype.clone = bnClone;
BigInteger.prototype.intValue = bnIntValue;
BigInteger.prototype.byteValue = bnByteValue;
BigInteger.prototype.shortValue = bnShortValue;
BigInteger.prototype.signum = bnSigNum;
BigInteger.prototype.toByteArray = bnToByteArray;
BigInteger.prototype.equals = bnEquals;
BigInteger.prototype.min = bnMin;
BigInteger.prototype.max = bnMax;
BigInteger.prototype.and = bnAnd;
BigInteger.prototype.or = bnOr;
BigInteger.prototype.xor = bnXor;
BigInteger.prototype.andNot = bnAndNot;
BigInteger.prototype.not = bnNot;
BigInteger.prototype.shiftLeft = bnShiftLeft;
BigInteger.prototype.shiftRight = bnShiftRight;
BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
BigInteger.prototype.bitCount = bnBitCount;
BigInteger.prototype.testBit = bnTestBit;
BigInteger.prototype.setBit = bnSetBit;
BigInteger.prototype.clearBit = bnClearBit;
BigInteger.prototype.flipBit = bnFlipBit;
BigInteger.prototype.add = bnAdd;
BigInteger.prototype.subtract = bnSubtract;
BigInteger.prototype.multiply = bnMultiply;
BigInteger.prototype.divide = bnDivide;
BigInteger.prototype.remainder = bnRemainder;
BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
BigInteger.prototype.modPow = bnModPow;
BigInteger.prototype.modInverse = bnModInverse;
BigInteger.prototype.pow = bnPow;
BigInteger.prototype.gcd = bnGCD;
BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
Arcfour.prototype.init = ARC4init;
Arcfour.prototype.next = ARC4next;
var rng_psize = 256;
var rng_state;
var rng_pool;
var rng_pptr;
if(rng_pool == null) {
  rng_pool = new Array;
  rng_pptr = 0;
  var t;
  var v803 = rng_pptr < rng_psize;
  for(;v803;) {
    t = Math.floor(65536 * Math.random());
    var v801 = rng_pptr;
    rng_pptr = rng_pptr + 1;
    rng_pool[v801] = t >>> 8;
    var v802 = rng_pptr;
    rng_pptr = rng_pptr + 1;
    rng_pool[v802] = t & 255;
    v803 = rng_pptr < rng_psize
  }
  rng_pptr = 0;
  rng_seed_time()
}
SecureRandom.prototype.nextBytes = rng_get_bytes;
RSAKey.prototype.doPublic = RSADoPublic;
RSAKey.prototype.setPublic = RSASetPublic;
RSAKey.prototype.encrypt = RSAEncrypt;
RSAKey.prototype.doPrivate = RSADoPrivate;
RSAKey.prototype.setPrivate = RSASetPrivate;
RSAKey.prototype.setPrivateEx = RSASetPrivateEx;
RSAKey.prototype.generate = RSAGenerate;
RSAKey.prototype.decrypt = RSADecrypt;
nValue = "a5261939975948bb7a58dffe5ff54e65f0498f9175f5a09288810b8975871e99af3b5dd94057b0fc07535f5f97444504fa35169d461d0d30cf0192e307727c065168c788771c561a9400fb49175e9e6aa4e23fe11af69e9412dd23b0cb6684c4c2429bce139e848ab26d0829073351f4acd36074eafd036a5eb83359d2a698d3";
eValue = "10001";
dValue = "8e9912f6d3645894e8d38cb58c0db81ff516cf4c7e5a14c7f1eddb1459d2cded4d8d293fc97aee6aefb861859c8b6a3d1dfe710463e1f9ddc72048c09751971c4a580aa51eb523357a3cc48d31cfad1d4a165066ed92d4748fb6571211da5cb14bc11b6e2df7c1a559e6d5ac1cd5c94703a22891464fba23d0d965086277a161";
pValue = "d090ce58a92c75233a6486cb0a9209bf3583b64f540c76f5294bb97d285eed33aec220bde14b2417951178ac152ceab6da7090905b478195498b352048f15e7d";
qValue = "cab575dc652bb66df15a0359609d51d1db184750c00c6698b90ef3465c99655103edbf0d54c56aec0ce3c4d22592338092a126a0cc49f65a4a30d222b411e58f";
dmp1Value = "1a24bca8e273df2f0e47c199bbf678604e7df7215480c77c8db39f49b000ce2cf7500038acfff5433b7d582a01f1826e6f4d42e1c57f5e1fef7b12aabc59fd25";
dmq1Value = "3d06982efbbe47339e1f6d36b1216b8a741d410b0c662f54f7118b27b9a4ec9d914337eb39841d8666f3034408cf94f5b62f11c402fc994fe15a05493150d9fd";
coeffValue = "3a3e731acd8960b7ff9eb81a7ff93bd1cfa74cbd56987db58b4594fb09c09084db1734c8143f98b602b981aaa9243ca28deb69b5b280ee8dcee0fd2625e53250";
JAM.call(setupEngine, null, [am3, 28]);
var TEXT = "The quick brown fox jumped over the extremely lazy frog! " + "Now is the time for all good men to come to the party.";
var encrypted;
var completed = 0;
var benchmarks = BenchmarkSuite.CountBenchmarks();
var success = true;
var latencyBenchmarks = ["Splay", "Mandreel"];
var v814;
if(typeof skipBenchmarks === "undefined") {
  v814 = []
}else {
  v814 = skipBenchmarks
}
var skipBenchmarks = v814
