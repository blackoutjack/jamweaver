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
from util import load_seeds
from util import load_sources
from util import evaluate_file
from util import get_base
from util import get_exp_path
from util import overwrite_expected
from util import get_lines

def load_testcases(from_dir, default_policy=None):
  cases = []
  paths = load_sources(from_dir, '.js', '.exp.js')
  for flpath in paths:
    base = get_base(flpath)

    # Find any applicable policy files.
    policies = load_policies(from_dir, base) 

    # Some benchmarks have a modified version with a "-bad"
    # or "-ok" suffix. These can use the same policy as
    # the non-modified version.
    # %%% Generalize or remove
    if len(policies) == 0:
      subparts = base.split('-')
      if subparts[-1] == 'bad' or subparts[-1] == 'ok':
        xbase = '-'.join(subparts[:-1])
        policies = load_policies(from_dir, xbase)
        
    # Default to the simple policy.
    if len(policies) == 0:
      if default_policy is not None:
        polpath = os.path.join(from_dir, default_policy)
        if not os.path.isfile(polpath):
          err("Unable to find default policy file for %s: %s" % (base, polpath))
        else:
          policies = {'': polpath}
      else:
        err("Unable to find policy file for %s\n" % base)
        continue

    seedfile = load_seeds(from_dir, base)

    specs = (flpath, policies, seedfile)
    cases.append(specs)

  return cases

def run_microbenchmarks(debug=False, overwrite=False):
  tot = 0
  tot_ok = 0
  start = time.time()

  for inps in load_testcases(MICROBENCHMARK_DIR, 'simple.policy'):
    srcfl = inps[0]
    poldict = inps[1]
    seeds = inps[2]
    base = get_base(srcfl)

    # Run with each policy file separately.
    for poldesc, polfile in poldict.iteritems():
      opts = []

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

      tot += 1

      refine = 3

      if seeds is not None:
        refine = 0
      if base.startswith('exfil_test') and poldesc != '':
        refine = 0
      if base == 'timeout0':
        # Don't waste too much time waiting.
        opts.append('--querytimeout')
        opts.append('5')
        refine = 0

      # Print the name of the file being analyzed.
      jsname = os.path.basename(srcfl)
      out(jsname)

      # Use the union of all policy files for a particular test.
      outp = run_jam(srcfl, [polfile], refine=refine, debug=debug, seeds=seeds, moreopts=opts)

      if refine:
        expsuf = exppre + ".exp.js"
      else:
        expsuf = exppre + ".norefine.exp.js"

      exppath = get_exp_path(srcfl, expsuf)
      if process_result(outp, exppath, overwrite):
        tot_ok += 1

  end = time.time()
  tottime = end - start

  vals = (tot_ok, tot, tottime)
  if overwrite:
    out('%d of %d microbenchmark results overwritten; %.2fs\n' % vals)
  else:
    out('%d of %d microbenchmarks successful; %.2fs\n' % vals)
# /run_microbenchmarks
      
def run_benchmarks(refine=0, debug=False, overwrite=False):
  tot = 0
  tot_ok = 0
  start = time.time()

  for inps in load_testcases(BENCHMARK_DIR):
    srcfl = inps[0]
    poldict = inps[1]
    seeds = inps[2]

    # Run with each policy file separately.
    for poldesc, polfile in poldict.iteritems():
      opts = []

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
      if base in ['phylojive', 'octane', 'googlemaps', 'octane-mandreel',
          'octane-pdf', 'octane-typescript']:
        # These apps are quite large and interprocedural edges explode.
        opts.append('-P')

      # Print the name of the file being analyzed.
      jsname = os.path.basename(srcfl)
      out(jsname)
      tot += 1
      outp = run_jam(srcfl, [polfile], refine=refine, debug=debug, seeds=seeds, moreopts=opts)

      if refine:
        expsuf = exppre + ".exp.js"
      else:
        expsuf = exppre + ".norefine.exp.js"

      exppath = get_exp_path(srcfl, expsuf)
      if process_result(outp, exppath, overwrite):
        tot_ok += 1

  end = time.time()
  tottime = end - start

  vals = (tot_ok, tot, tottime)
  if overwrite:
    out('%d of %d benchmark results overwritten; %.2fs\n' % vals)
  else:
    out('%d of %d benchmarks successful; %.2fs\n' % vals)
# /run_benchmarks

def process_result(outp, exppath, overwrite):
  ok = False
  if overwrite:
    stat = overwrite_expected(outp, exppath)
    if stat == "overwritten":
      ok = True
  else:
    stat = validate_output(outp, exppath)
    if stat == "ok":
      ok = True
  expname = os.path.basename(exppath)
  out('%s %s\n' % (expname, stat))
  return ok

def run_websites(debug=False, overwrite=False):
  tot = 0
  js_ok = 0
  html_ok = 0
  start = time.time()
  
  sites = get_lines(WEBSITE_FILE, comment='#')
  for site in sites:

    # Run the unpacker.
    url = 'http://' + site
    out("Unpacking %s" % url)
    unpackdir = run_unpacker(url, debug=debug, saveall=True)
    if unpackdir is None:
      warn('Unable to determine unpack directory for %s' % (url))
      continue

    policies = load_policies(WEBSITE_DIR, site)
    # Default to the simple policy.
    if len(policies) == 0:
      polpath = os.path.join(MICROBENCHMARK_DIR, 'exfil_test.policy')
      if not os.path.isfile(polpath):
        err("Unable to find default policy file for %s: %s" % (site, polpath))
      else:
        policies = {'': polpath}

    srclist = os.path.join(unpackdir, 'scripts.txt')
    htmlfile = os.path.join(unpackdir, site + '.html')

    # Run with each policy file separately.
    for poldesc, polfile in policies.iteritems():
      opts = ['-X', '-P', '-N', site, '-h', htmlfile]

      if poldesc != '':
        opts.append('--appsuffix')
        opts.append(poldesc)
        exppre = '.' + poldesc
      else:
        exppre = ''

      out("Analyzing %s" % site)
      tot += 1
      outp = run_jam(srclist, [polfile], refine=0, debug=debug, seeds=None, moreopts=opts)

      expsuf = exppre + ".norefine.exp.js"
      exppath = os.path.join(WEBSITE_DIR, site + expsuf)
      if process_result(outp, exppath, overwrite):
        js_ok += 1

      # Repack the HTML file.

      # Get the generated policy file.
      # %%% Very ugly
      allout = os.listdir(OUTDIR)
      allout.sort()
      gotone = False
      outdir = None
      for od in allout:
        if od.startswith(site + '-'):
          outdir = os.path.join(OUTDIR, od)
          gotone = True
        elif gotone:
          break
      if outdir is None:
        err('Could not determine JAM output directory: %s' % site)
        continue
      policy = os.path.join(outdir, 'policy.js')

      out("Repacking %s" % htmlfile)
      rpout = run_repacker(htmlfile, srclist, unpackdir, polpath=policy, debug=debug)

      rpfile = os.path.splitext(htmlfile)[0] + '.repack.html'
      rpfl = open(rpfile, 'w')
      rpfl.write(rpout)
      rpfl.close()
      out("Saved to %s" % rpfile)

      rpexpsuf = exppre + '.norefine.exp.html'
      rpexppath = os.path.join(WEBSITE_DIR, site + rpexpsuf)
      if process_result(rpout, rpexppath, overwrite):
        html_ok += 1

  end = time.time()
  tottime = end - start

  vals = (js_ok, html_ok, tot, tottime)
  if overwrite:
    out('%d/%d of %d website JavaScript/HTML results overwritten; %.2fs\n' % vals)
  else:
    out('%d/%d of %d website JavaScript/HTML tests successful; %.2fs\n' % vals)
# /run_websites

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
    ok = validate_value(flpath, outp)

    if ok == 'ok':
      tot_ok += 1
    out('%s %s\n' % (exppath, ok))

  out('%d of %d interpreter tests successful\n' % (tot_ok, tot))

def run_semantics_tests():
  # Semantics tests not organized yet.
  pass

def main():
  parser = OptionParser(usage="%prog")
  parser.add_option('-b', '--benchmarks', action='store_true', default=False, dest='benchmarks', help='analyze benchmark applications')
  parser.add_option('-w', '--websites', action='store_true', default=False, dest='websites', help='end-to-end website analysis')
  parser.add_option('-m', '--micro', action='store_true', default=False, dest='micro', help='analyze microbenchmark applications')
  #parser.add_option('-i', '--interpreter', action='store_true', default=False, dest='interpreter', help='test semantics as an interpreter (currently unsupported)')
  parser.add_option('-e', '--overwrite', action='store_true', default=False, dest='overwrite', help='overwrite expected output')
  #parser.add_option('-s', '--semantics', action='store_true', default=False, dest='semantics', help='test semantics')
  parser.add_option('-g', '--debug', action='store_true', default=False, dest='debug', help='generate debug output')

  opts, args = parser.parse_args()
    
  if len(args) != 0:
    parser.error("Invalid number of arguments")

  allmods = True
  if opts.benchmarks or opts.micro or opts.websites:
    allmods = False

  #if opts.interpreter:
  #  err('Interpreter tests are currently out-of-order')
  #  run_interpreter_tests(opts.debug)
  if allmods or opts.micro:
    run_microbenchmarks(opts.debug, opts.overwrite)
  if allmods or opts.benchmarks:
    # Run first without abstraction refinement.
    run_benchmarks(0, opts.debug, opts.overwrite)
  if allmods or opts.websites:
    run_websites(opts.debug, opts.overwrite)
  #if allmods or opts.benchmarks:
    # Run with limited refinement.
    #run_benchmarks(4, opts.debug)


if __name__ == "__main__":
  main()

