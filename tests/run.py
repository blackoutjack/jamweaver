#!/usr/bin/python
import sys
import os
import time
from optparse import OptionParser
import tempfile
from config import *
from util import err
from util import run_jam
from util import validate_output
from util import validate_value
from util import load_policies
from util import load_seeds
from util import load_sources
from util import evaluate_file
from util import get_base
from util import get_exp_path
from util import overwrite_expected

#SKIP = True
def load_testcases(from_dir, default_policy=None):
  cases = []
  paths = load_sources(from_dir, '.js', '.exp.js')
  for flpath in paths:
    base = get_base(flpath)

    #global SKIP
    #if base.startswith("sms2-"):
    #  SKIP = False
    #if SKIP: continue
    #if base != "phylojive": continue

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
        err("Unable to find policy file for %s" % base)
        print >> sys.stderr
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

      # Use the union of all policy files for a particular test.
      outp = run_jam(srcfl, [polfile], refine=refine, debug=debug, seeds=seeds, moreopts=opts)

      if refine:
        expsuf = exppre + ".exp.js"
      else:
        expsuf = exppre + ".norefine.exp.js"

      if overwrite:
        stat = overwrite_expected(srcfl, outp, expsuf)
        if stat == "overwritten":
          tot_ok += 1
        jsname = os.path.basename(get_exp_path(srcfl, expsuf))
      else:
        stat = validate_output(srcfl, outp, expsuf)
        if stat == "ok":
          tot_ok += 1
        jsname = os.path.basename(srcfl)

      print jsname, stat
      print

  end = time.time()
  tottime = end - start

  if overwrite:
    print tot_ok, "of", tot, "microbenchmark results overwritten;",
  else:
    print tot_ok, "of", tot, "microbenchmarks successful;",
  print str(tottime) + "s"
  print
      
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

      tot += 1
      outp = run_jam(srcfl, [polfile], refine=refine, debug=debug, seeds=seeds, moreopts=opts)

      if refine:
        expsuf = exppre + ".exp.js"
      else:
        expsuf = exppre + ".norefine.exp.js"

      if overwrite:
        stat = overwrite_expected(srcfl, outp, expsuf)
        if stat == "overwritten":
          tot_ok += 1
        jsname = os.path.basename(get_exp_path(srcfl, expsuf))
      else:
        stat = validate_output(srcfl, outp, expsuf)
        if stat == "ok":
          tot_ok += 1
        jsname = os.path.basename(srcfl)

      print jsname, stat
      print

  end = time.time()
  tottime = end - start

  if overwrite:
    print tot_ok, "of", tot, "benchmark results overwritten;",
  else:
    print tot_ok, "of", tot, "benchmarks successful;",
  print str(tottime) + "s"
  print

def run_interpreter_tests(debug=False):
  tot = 0
  tot_ok = 0
  for flname in os.listdir(INTERPRETER_TEST_DIR):
    if os.path.splitext(flname)[1] != ".js": continue

    tot += 1
    flpath = os.path.join(INTERPRETER_TEST_DIR, flname)

    print flname,

    val = evaluate_file(flpath, debug)
    ok = validate_value(flpath, val)

    if ok == "ok":
      tot_ok += 1
      
    print ok

  print tot_ok, "of", tot, "interpreter tests successful"
  print

def run_semantics_tests():
  # Semantics tests not organized yet.
  pass

def main():
  parser = OptionParser(usage="%prog")
  parser.add_option('-b', '--benchmarks', action='store_true', default=False, dest='benchmarks', help='analyze benchmark applications')
  parser.add_option('-m', '--micro', action='store_true', default=False, dest='micro', help='analyze microbenchmark applications')
  #parser.add_option('-i', '--interpreter', action='store_true', default=False, dest='interpreter', help='test semantics as an interpreter (currently unsupported)')
  parser.add_option('-e', '--overwrite', action='store_true', default=False, dest='overwrite', help='overwrite expected output')
  #parser.add_option('-s', '--semantics', action='store_true', default=False, dest='semantics', help='test semantics')
  parser.add_option('-g', '--debug', action='store_true', default=False, dest='debug', help='generate debug output')

  opts, args = parser.parse_args()
    
  if len(args) != 0:
    parser.error("Invalid number of arguments")

  allmods = True
  if opts.benchmarks or opts.micro:
    allmods = False

  #if opts.interpreter:
  #  print >> sys.stderr, "Interpreter tests are currently out-of-order."
  #  run_interpreter_tests(opts.debug)
  if allmods or opts.micro:
    run_microbenchmarks(opts.debug, opts.overwrite)
  if allmods or opts.benchmarks:
    # Run first without abstraction refinement.
    run_benchmarks(0, opts.debug, opts.overwrite)
  #if allmods or opts.benchmarks:
    # Run with limited refinement.
    #run_benchmarks(4, opts.debug)


if __name__ == "__main__":
  main()

