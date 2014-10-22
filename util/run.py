#!/usr/bin/python
import sys
import os
import time
from optparse import OptionParser
import tempfile
from config import *
from util import err
from util import out
from util import warn
from util import fatal
from util import run_jam
from util import run_unpacker
from util import run_repacker
from util import validate_output
from util import validate_value
from util import load_policies
from util import load_policy
from util import load_seeds
from util import load_sources
from util import evaluate_file
from util import get_base
from util import get_exp_path
from util import overwrite_expected
from util import get_lines
from util import get_result_info
from util import parse_info_file
from util import compare_info

# A collection of RunResult objects that can print a summary.
class RunResults():
  def __init__(self, desc='test cases', overwrite=False):
    self.desc = desc
    self.results = []
    self.overwrite = overwrite
    self.start = time.time()
  # /RunResults.__init__

  def add(self, res):
    if isinstance(res, RunResults):
      self.results.extend(res.results)
    else:
      assert isinstance(res, RunResult)
      self.results.append(res)
  # /RunResults.add

  def printSummary(self):
    self.end = time.time()
    tottime = self.end - self.start

    tot = 0
    js_tot = 0
    js_ok = 0
    info_tot = 0
    info_ok = 0
    html_tot = 0
    html_ok = 0
    for res in self.results:
      assert isinstance(res, RunResult)
      tot += 1
      if res.js_ok is not None:
        js_tot += 1
        if res.js_ok: js_ok += 1
      if res.info_ok is not None:
        info_tot += 1
        if res.info_ok: info_ok += 1
      if res.html_ok is not None:
        html_tot += 1
        if res.html_ok: html_ok += 1

    if self.overwrite:
      action = 'overwrote'
    else:
      action = 'verified'

    txts = []
    if js_tot > 0:
      jstxt = '%d/%d JS output' % (js_ok, js_tot)
      txts.append(jstxt)
    if info_tot > 0:
      infotxt = '%d/%d info files' % (info_ok, info_tot)
      txts.append(infotxt)
    if html_tot > 0:
      htmltxt = '%d/%d HTML output' % (html_ok, html_tot)
      txts.append(htmltxt)
    
    if len(txts) > 0:
      restxt = '%s %s' % (action, ', '.join(txts))
    else:
      restxt = 'no results'

    out('%s for %d %s; %.2fs\n' % (restxt, tot, self.desc, tottime))
  # /RunResults.printSummary
# /RunResults

# The status of a single test case.
# Pass |False| to initialize each value. Otherwise, |None| indicates
# that the value doesn't apply to this case.
class RunResult():
  def __init__(self, js=None, info=None, html=None):
    self.html_ok = html
    self.js_ok = js
    self.info_ok = info
  # /RunResult.__init__
# /RunResult

def load_testcases(from_dir, defwarn=True):
  cases = []
  paths = load_sources(from_dir, '.js', '.exp.js')
  for flpath in paths:
    base = get_base(flpath)

    # Find any applicable policy files.
    policies = load_policies(from_dir, base, defwarn=defwarn) 

    seedfile = load_seeds(from_dir, base)

    specs = (flpath, policies, seedfile)
    cases.append(specs)

  return cases
# /load_testcases

def process_info(base, exppath, overwrite):
  ok = False
  stat = None
  results = get_result_info(OUTDIR, base)
  if 'info' in results:
    infofile = results['info']
    actinfo = parse_info_file(infofile)
    expinfo = parse_info_file(exppath)
    if len(expinfo) > 0:
      diff = compare_info(actinfo, expinfo)
      if len(diff) == 0:
        ok = True
        stat = 'match'
      else:
        for k, m in diff.iteritems():
          out('info:%s %s' % (k, m))
          stat = 'wrong'
    else:
      stat = 'missing'

    if overwrite:
      # The meaning of |ok| is sort of flipped when we're overwriting.
      if ok:
        ok = False
      else:
        infofl = open(infofile, 'r')
        infoout = infofl.read()
        infofl.close()
        stat = overwrite_expected(infoout, exppath)
        if stat == 'overwritten' or stat == 'created':
          ok = True
        else:
          ok = False
  else:
    warn('Unable to load info file for results: %s' % base)

  expname = os.path.basename(exppath)
  out('%s %s' % (expname, stat))

  return ok
# /process_info

def process_result(outp, exppath, overwrite):
  ok = False
  if overwrite:
    stat = overwrite_expected(outp, exppath)
    if stat == 'overwritten' or stat == 'created':
      ok = True
  else:
    stat = validate_output(outp, exppath)
    if stat == 'match':
      ok = True
  expname = os.path.basename(exppath)
  out('%s %s' % (expname, stat))
  return ok
# /process_result

def run_website(url, policies, debug=False, overwrite=False, refine=None, synonly=False):
  if refine is None:
    refine = 0
  results = RunResults()

  # Run the unpacker.
  out("Unpacking %s" % url)
  appname, unpackdir = run_unpacker(url, debug=debug, saveall=True)
  if unpackdir is None:
    warn('Unable to retrieve unpack directory: %s' % (url))
    results.add(RunResult(False, False, False))
    return results
  if appname is None:
    warn('Unable to retrieve application name: %s' % (url))
    results.add(RunResult(False, False, False))
    return results

  srclist = os.path.join(unpackdir, 'scripts.txt')
  htmlfile = os.path.join(unpackdir, appname + '.html')

  if not os.path.isfile(srclist):
    warn('No JavaScript found at URL: %s' % url)
    results.add(RunResult(False, False, False))
    return results

  # Run with each policy file separately.
  for poldesc, polfile in policies.iteritems():
    # Generate a new RunResult for each policy.
    result = RunResult(False, False, False)
    results.add(result)

    opts = ['-X', '-P', '-N', appname, '-h', htmlfile]

    synsuf = ''
    if synonly:
      opts.append('-z')
      synsuf = '.syntaxonly'

    if poldesc != '':
      opts.append('--appsuffix')
      opts.append(poldesc)
      exppre = '.' + poldesc
    else:
      exppre = ''

    out("Analyzing %s" % appname)
    outp = run_jam(srclist, [polfile], refine=refine, debug=debug, seeds=None, moreopts=opts)

    expsuf = '%s%s.refine%d.exp.js' % (exppre, synsuf, refine)
    exppath = os.path.join(WEBSITE_DIR, appname + expsuf)
    result.js_ok = process_result(outp, exppath, overwrite)

    infoexpsuf = '%s%s.refine%d.info.exp.txt' % (exppre, synsuf, refine)
    infoexppath = os.path.join(WEBSITE_DIR, appname + infoexpsuf)
    result.info_ok = process_info('%s%s' % (appname, exppre), infoexppath, overwrite)

    # Repack the HTML file.

    # Get the generated policy file.
    # %%% Very ugly
    allout = os.listdir(OUTDIR)
    allout.sort()
    gotone = False
    outdir = None
    for od in allout:
      if od.startswith(appname + '-'):
        outdir = os.path.join(OUTDIR, od)
        gotone = True
      elif gotone:
        break
    if outdir is None:
      err('Could not determine JAM output directory: %s' % appname)
      continue
    genpol = os.path.join(outdir, 'policy.js')

    out("Repacking %s" % htmlfile)
    rpout = run_repacker(htmlfile, srclist, unpackdir, polpath=genpol, debug=debug)

    rpfile = os.path.splitext(htmlfile)[0] + '.repack.html'
    rpfl = open(rpfile, 'w')
    rpfl.write(rpout)
    rpfl.close()
    out("Saved to %s" % rpfile)

    rpexpsuf = '%s%s.refine%d.exp.html' % (exppre, synsuf, refine)
    rpexppath = os.path.join(WEBSITE_DIR, appname + rpexpsuf)
    result.html_ok = process_result(rpout, rpexppath, overwrite)

  return results
# /run_website

def run_websites(debug=False, overwrite=False, refine=None, synonly=False):
  results = RunResults('websites', overwrite)
  
  sites = get_lines(WEBSITE_FILE, comment='#')
  for site in sites:

    policies = load_policies(WEBSITE_DIR, site, defwarn=False)
    
    url = 'http://' + site
    res = run_website(url, policies, debug=debug, overwrite=overwrite, refine=refine, synonly=synonly)

    # Track successful results
    results.add(res)

    # Space the output.
    sys.stderr.write('\n')

  results.printSummary()
# /run_websites

def run_microbenchmarks(debug=False, overwrite=False, refine=None, synonly=False):
  results = RunResults('microbenchmarks', overwrite)

  for inps in load_testcases(MICROBENCHMARK_DIR, defwarn=False):
    srcfl = inps[0]
    poldict = inps[1]
    seeds = inps[2]
    base = get_base(srcfl)

    # Run with each policy file separately.
    for poldesc, polfile in poldict.iteritems():
      result = RunResult(False, False)
      results.add(result)

      opts = []

      synsuf = ''
      if synonly:
        opts.append('-z')
        synsuf = '.syntaxonly'

      # Differentiate the output if policy indexed by a non-numeric key.
      # For example, the policy file jsqrcode.call.policy will be
      # indexed by "call", and the output will be stored separately from
      # the analysis using jsqrcode.get.policy. Alter the .exp filename
      # accordingly.
      if poldesc != '':
        opts.append('--appsuffix')
        opts.append(poldesc)
        exppre = '.' + poldesc
      else:
        exppre = ''

      # If the user provided a refinement limit, use that always.
      # Otherwise, use some special logic.
      ref = refine
      if ref is None:
        ref = 3
        if not synonly:
          if seeds is not None:
            ref = 0
          if base.startswith('exfil_test'):
            # These tests are to exercise the enforcement primarily,
            # not the static analysis. Refinement takes too long.
            ref = 0
          if base == 'timeout0':
            # This tests the query timeout mechanism.
            # Don't waste too much time waiting.
            opts.append('--querytimeout')
            opts.append('5')
            ref = 0

      # Print the name of the file being analyzed.
      jsname = os.path.basename(srcfl)
      out(jsname)

      # Use the union of all policy files for a particular test.
      outp = run_jam(srcfl, [polfile], refine=ref, debug=debug, seeds=seeds, moreopts=opts)

      expsuf = '%s%s.refine%d.exp.js' % (exppre, synsuf, ref)

      exppath = get_exp_path(srcfl, expsuf)
      result.js_ok = process_result(outp, exppath, overwrite)

      infoexpsuf = '%s%s.refine%d.info.exp.txt' % (exppre, synsuf, ref)
      infoexppath = get_exp_path(srcfl, infoexpsuf)
      result.info_ok = process_info('%s%s' % (base, exppre), infoexppath, overwrite)

      sys.stderr.write('\n')

  results.printSummary()
# /run_microbenchmarks
      
def run_benchmarks(debug=False, overwrite=False, refine=None, synonly=False):
  results = RunResults('benchmarks', overwrite)
  if refine is None:
    refine = 0

  for inps in load_testcases(BENCHMARK_DIR):
    srcfl = inps[0]
    poldict = inps[1]
    seeds = inps[2]

    # Run with each policy file separately.
    for poldesc, polfile in poldict.iteritems():
      result = RunResult(False, False)
      results.add(result)

      opts = []

      synsuf = ''
      if synonly:
        opts.append('-z')
        synsuf = '.syntaxonly'

      # Differentiate the output if policy indexed by a non-numeric key.
      # For example, the policy file jsqrcode.call.policy will be
      # indexed by "call", and the output will be stored separately from
      # the analysis using jsqrcode.get.policy. Alter the .exp filename
      # accordingly.
      if poldesc != '':
        opts.append('--appsuffix')
        opts.append(poldesc)
        exppre = '.' + poldesc
      else:
        exppre = ''

      base = get_base(srcfl)
      if base in LARGE_BENCHMARKS:
        # Forgo interprocedural analysis for these benchmarks.
        opts.append('-P')

      # Print the name of the file being analyzed.
      jsname = os.path.basename(srcfl)
      out(jsname)
      outp = run_jam(srcfl, [polfile], refine=refine, debug=debug, seeds=seeds, moreopts=opts)

      expsuf = '%s%s.refine%d.exp.js' % (exppre, synsuf, refine)

      exppath = get_exp_path(srcfl, expsuf)
      result.js_ok = process_result(outp, exppath, overwrite)

      infoexpsuf = '%s%s.refine%d.info.exp.txt' % (exppre, synsuf, refine)
      infoexppath = get_exp_path(srcfl, infoexpsuf)
      result.info_ok = process_info('%s%s' % (base, exppre), infoexppath, overwrite)

      sys.stderr.write('\n')

  results.printSummary()
# /run_benchmarks

def run_interpreter_tests(debug=False):
  tot = 0
  tot_ok = 0
  for flname in os.listdir(INTERPRETER_TEST_DIR):
    if os.path.splitext(flname)[1] != ".js": continue

    tot += 1
    flpath = os.path.join(INTERPRETER_TEST_DIR, flname)

    out(flname)

    outp = evaluate_file(flpath, debug)
    exppath = get_exp_path(flpath, '.exp')
    stat = validate_value(flpath, outp)

    if stat == 'match':
      tot_ok += 1
    out('%s %s\n' % (exppath, stat))

  out('%d of %d interpreter tests successful\n' % (tot_ok, tot))
# /run_interpreter_tests

def run_semantics_tests():
  # Semantics tests not organized yet.
  pass
# /run_semantics_tests

def main():
  parser = OptionParser(usage="%prog")
  parser.add_option('-b', '--benchmarks', action='store_true', default=False, dest='benchmarks', help='analyze benchmark applications')
  parser.add_option('-w', '--websites', action='store_true', default=False, dest='websites', help='end-to-end website analysis')
  parser.add_option('-m', '--micro', action='store_true', default=False, dest='micro', help='analyze microbenchmark applications')
  #parser.add_option('-i', '--interpreter', action='store_true', default=False, dest='interpreter', help='test semantics as an interpreter (currently unsupported)')
  parser.add_option('-e', '--overwrite', action='store_true', default=False, dest='overwrite', help='overwrite expected output')
  #parser.add_option('-s', '--semantics', action='store_true', default=False, dest='semantics', help='test semantics')
  parser.add_option('-g', '--debug', action='store_true', default=False, dest='debug', help='generate debug output')
  parser.add_option('-u', '--url', action='store', default=None, dest='url', help='analyze HTML/JS at given URL')
  parser.add_option('-Y', '--policy', action='store', default=None, dest='policy', help='policy file to apply to URL')
  parser.add_option('-p', '--refine', action='store', default=None, dest='refine', help='maximum of number of predicates to learn')
  parser.add_option('-z', '--syntax-only', action='store_true', default=False, dest='syntaxonly', help='use syntax-only (not semantic) analysis')

  opts, args = parser.parse_args()
    
  if len(args) != 0:
    parser.error("Invalid number of arguments")

  allmods = True
  if opts.benchmarks or opts.micro or opts.websites or opts.url is not None:
    allmods = False

  #if opts.interpreter:
  #  err('Interpreter tests are currently out-of-order')
  #  run_interpreter_tests(opts.debug)
  if opts.url is not None:
    pol = load_policy(opts.policy)
    run_website(opts.url, pol, debug=opts.debug, overwrite=opts.overwrite, refine=opts.refine, synonly=opts.syntaxonly)
  if allmods or opts.micro:
    run_microbenchmarks(opts.debug, opts.overwrite, refine=opts.refine, synonly=opts.syntaxonly)
  if allmods or opts.benchmarks:
    run_benchmarks(opts.debug, opts.overwrite, refine=opts.refine, synonly=opts.syntaxonly)
  if allmods or opts.websites:
    run_websites(opts.debug, opts.overwrite, refine=opts.refine, synonly=opts.syntaxonly)
# /main


if __name__ == "__main__":
  main()

