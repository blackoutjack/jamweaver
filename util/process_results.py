#!/usr/bin/python
import sys
import os
import re
import subprocess
from subprocess import PIPE
import shutil
import time
import imp
from optparse import OptionParser
import tempfile
import filecmp

import grapher

from resultsutil import AppStats, SourceVariant, Action, Section

JAMPKG = os.environ['JAMPKG']
sys.path.append(os.path.join(os.environ['JAMPKG'], 'tests'))
import util

def collect_results_from_file(filepath, results):
  fl = open(filepath, 'r')
  lns = fl.readlines()
  fl.close()
    
  # Detect whether the file contains any results via the format.
  # %%% Does this short-circuit when it finds a match?
  isresults = any([True for ln in lns if ln.startswith(cfg.PROFILE_MARKER)])
  if isresults:
    results.extend(lns)

def collect_results(filelist):
  lines = []
  for respath in filelist:
    assert os.path.exists(respath), "Results source does not exist: %s" % respath
    collect_results_from_file(respath, lines)

  if len(lines) == 0:
    util.warn("no results found")

  return lines
#/collect_results

def collect_separate_results(filelist):
  results = []
  for respath in filelist:
    lines = []
    assert os.path.exists(respath), "Results source does not exist: %s" % respath
    collect_results_from_file(respath, lines)
    if len(lines) == 0:
      util.warn("no results found for file: %s" % respath)
    results.append(lines)

  return results
#/collect_separate_results

def parse_profile_header(ln):
  assert ln.startswith(cfg.PROFILE_MARKER)
  action = ln[len(cfg.PROFILE_MARKER):-len(cfg.PROFILE_MARKER_TAIL)]
  if len(action) < 1:
    print >> sys.stderr, "Action name is empty: %s" % ln
  return action
#/parse_profile_header

def parse_section_header(ln):
  assert ln.startswith(cfg.SECTION_MARKER)
  info = None
  section = ln[len(cfg.SECTION_MARKER):-len(cfg.SECTION_MARKER)]
  if section.startswith(cfg.TIME_SECTION_NAME):
    info = section[len(cfg.TIME_SECTION_NAME):]
    info = info.lstrip(": ")
    section = cfg.TIME_SECTION_NAME
  if len(section) < 1:
    print >> sys.stderr, "Section name is empty: %s" % ln

  return section, info
#/parse_section_header

def parse_stack(lines):
  appinfo = None
  stackinfo = [] # Will contain (file, lineno) pairs in order.
  for ln in lines:
    parts = ln.split(None)
    # This can happen for unknown stack frames.
    if len(parts) < 3: continue
    flln = parts[2]
    srcfl, lineno = flln.rsplit(':', 1)
    stackinfo.append((srcfl, lineno))

  for i in range(0, len(stackinfo)):
    idx = len(stackinfo) - 1 - i
    lastsrc = stackinfo[idx][0]
    if lastsrc.startswith('http://'):
      lastsrc = lastsrc[7:]
    # Get the init time.
    if lastsrc.startswith(cfg.TEST_DIR):
      lastsrc = lastsrc[30:]
      begin = lastsrc.find("/test.php?script=")
      if begin > -1:
        begin += 17
        lastsrc = lastsrc[begin:]
        end = lastsrc.find("&policy=")
        if end > -1:
          lastsrc = lastsrc[:end]
    appinfo = util.get_file_info(lastsrc)

    if appinfo['app'] != 'libTx' and appinfo['app'] != 'auto' and appinfo['app'] != 'autoextra':
      break

  return appinfo, stackinfo
#/parse_stack

def process_data(appstats, variant, action, section, dataline):
  dataparts = dataline.split('/')
  # This method assumes the first data fed to it has column headers.
  section.addData(dataparts)
#/process_data

def parse_results(lines):
  curAppStats = None
  curVariant = None
  curActionDesc = None
  curAction = None
  curSection = None

  stats = {}

  idxes = iter(range(0, len(lines)))
  for idx in idxes:
    ln = lines[idx].strip()

    isjunk = False
    for junk in cfg.JUNK_MARKERS:
      if ln.startswith(junk):
        isjunk = True
    if isjunk:
      continue

    if ln.startswith(cfg.ERROR_MARKER):
      errtxt = ln[len(cfg.ERROR_MARKER):]
      if curAction is not None:
        curAction.addError(errtxt)
        print >> sys.stderr, "Error in action %s, variant %s, app %s: %s" % (curAction.description, curVariant.descriptor(), curAppStats.name, errtxt)
      elif curVariant is not None:
        curVariant.addError(errtxt)
        print >> sys.stderr, "Error in variant %s, app %s: %s" % (curVariant.descriptor(), curAppStats.name, errtxt)
      elif curAppStats is not None:
        curAppStats.addError(errtxt)
        print >> sys.stderr, "Error in app %s: %s" % (curAppStats.name, errtxt)
      else:
        print >> sys.stderr, "Unassociated error: %s" % errtxt
      continue

    if ln.startswith(cfg.PROFILE_MARKER):
      curActionDesc = parse_profile_header(ln)

    elif ln.startswith(cfg.SECTION_MARKER):
      sect, sectinfo = parse_section_header(ln)
      curSection = Section(sect, sectinfo)
      assert curAction is not None
      curAction.addSection(curSection, cfg.TIME_SECTION_NAME)

    elif ln.startswith(cfg.STACK_MARKER):
      stack = [ln]
      # Look ahead to get whole stack.
      nextidx = idx + 1
      while True:
        try:
          nextln = lines[nextidx]
          if nextln.startswith(cfg.STACK_MARKER):
            stack.append(nextln)
            idxes.next() # Exhaust the line from the iterator.
            nextidx += 1
          else:
            break
        except:
          break
      appinfo, stackInfo = parse_stack(stack)
      # Generate or retrieve the AppStats object.
      appname = appinfo['app']
      if appname in stats:
        curAppStats = stats[appname]
      else:
        curAppStats = AppStats(appname)
        stats[appname] = curAppStats
      descparts = appinfo['desc']

      # "profile" is expected for all of these data.
      try: descparts.remove('profile')
      except: print >> sys.stderr, "No \"profile\" component of variant description: %r" % appinfo

      curVariant = curAppStats.getVariant(descparts)
      # The app/variant info is assumed to come right after the action.
      curAction = curVariant.getAction(curActionDesc, stackInfo)

    else:
      assert curSection is not None, "No section info: %s" % ln
      process_data(curAppStats, curVariant, curAction, curSection, ln)

  return stats
#/parse_results

def print_all_times(stats):
  # Print the time stats for each app.
  for app, stat in stats.iteritems():
    print stat.name
    for i in stat.variants:
      print str(stat.variants[i])

def print_times(app, actdesc, timemap):
  print app + "/" + actdesc, 
  for v, t in timemap.iteritems():
    print v + ":" + str(t),
  print

def compare_sections(sect0, sect1, action, variant, app):
  allsame = True
  section = sect0.name

  # Compare keys for the two dicts.
  keys0 = set(sect0.rows.keys())
  keys1 = set(sect1.rows.keys())
  addl0 = keys0 - keys1
  addl1 = keys1 - keys0
  for a0 in addl0:
    print >> sys.stderr, "Row '%s' not found in 2nd section '%s', action '%s', variant '%s' for app '%s'" % (a0, section, action, variant, app)
    allsame = False
  for a1 in addl1:
    print >> sys.stderr, "Row '%s' not found in 2nd section '%s', action '%s', variant '%s' for app '%s'" % (a1, section, action, variant, app)
    allsame = False

  common = keys0 & keys1
  for rowdesc in common:
    rowdata0 = sect0.rows[rowdesc]
    rowdata1 = sect1.rows[rowdesc]
    if rowdata0 != rowdata1:
      print >> sys.stderr, "Data is inconsistent: %r != %r in section '%s', action '%s', variant '%s', app '%s'" % (rowdata0, rowdata1, section, action, variant, app)
      allsame = False

  return allsame
#/compare_sections

def compare_actions(act0, act1, variant, app):
  allsame = True
  action = act0.description

  # Compare keys for the two dicts.
  keys0 = set(act0.sections.keys())
  keys1 = set(act1.sections.keys())
  addl0 = keys0 - keys1
  addl1 = keys1 - keys0
  for a0 in addl0:
    print >> sys.stderr, "Section '%s' not found for 2nd action '%s' in variant '%s' for app '%s'" % (a0, action, variant, app)
    allsame = False
  for a1 in addl1:
    print >> sys.stderr, "Section '%s' not found for 1st action '%s' in variant '%s' for app '%s'" % (a1, action, variant, app)
    allsame = False

  common = keys0 & keys1
  for sectdesc in common:
    sectlist0 = act0.sections[sectdesc]
    sectlist1 = act1.sections[sectdesc]
    for sect0 in sectlist0:
      for sect1 in sectlist1:
        if not compare_sections(sect0, sect1, action, variant, app):
          allsame = False

  return allsame
#/compare_actions

def compare_variants(var0, var1, app):
  allsame = True
  variant = var0.descriptor()

  # Compare keys for the two dicts.
  keys0 = set(var0.actions.keys())
  keys1 = set(var1.actions.keys())
  addl0 = keys0 - keys1
  addl1 = keys1 - keys0
  for a0 in addl0:
    print >> sys.stderr, "Action '%s' not found in 2nd variant '%s' for app '%s'" % (a0, variant, app)
    allsame = False
  for a1 in addl1:
    print >> sys.stderr, "Action '%s' not found in 1st variant '%s' for app '%s'" % (a1, variant, app)
    allsame = False

  common = keys0 & keys1
  for actdesc in common:
    act0 = var0.actions[actdesc]
    act1 = var1.actions[actdesc]
    if not compare_actions(act0, act1, variant, app):
      allsame = False

  return allsame

def compare_stats(statsobj0, statsobj1):
  allsame = True 
  app = statsobj0.name

  # Compare keys for the two dicts.
  keys0 = set(statsobj0.variants.keys())
  keys1 = set(statsobj1.variants.keys())
  addl0 = keys0 - keys1
  addl1 = keys1 - keys0
  for a0 in addl0:
    print >> sys.stderr, "Variant '%s' not found in 2nd variant list for app '%s'" % (a0, app)
    allsame = False
  for a1 in addl1:
    print >> sys.stderr, "Variant '%s' not found in 1st variant list for app '%s'" % (a1, app)
    allsame = False

  common = keys0 & keys1
  for vardesc in common:
    variant0 = statsobj0.variants[vardesc]
    variant1 = statsobj1.variants[vardesc]
    if not compare_variants(variant0, variant1, app):
      allsame = False

  return allsame
#/compare_stats

def compare_results(stats0, stats1):
  allsame = True

  # Compare keys for the two dicts.
  keys0 = set(stats0.keys())
  keys1 = set(stats1.keys())
  addl0 = keys0 - keys1
  addl1 = keys1 - keys0
  for a0 in addl0:
      print >> sys.stderr, "Application '%s' not found in 2nd stats list" % a0
      allsame = False
  for a1 in addl1:
      print >> sys.stderr, "Application '%s' not found in 1st stats list" % a1
      allsame = False

  common = keys0 & keys1
  for app in common:
    stats0obj = stats0[app]
    stats1obj = stats1[app]
    if not compare_stats(stats0obj, stats1obj):
      allsame = False

  if allsame:
    print >> sys.stderr, "Statistics match exactly"
#/compare_results

def compare_actions_times(act0, act1, variant, app):
  allsame = True
  action = act0.description
  
  t0 = act0.avg_time()
  t1 = act1.avg_time()
  diff = t0 - t1
  if diff < 0.0:
    fast = -1
    faststr = '0 is faster'
    diff = -diff
    ratio = t0 / t1
  elif diff > 0.0:
    fast = 1
    faststr = '1 is faster'
    ratio = t1 / t0
  else:
    fast = 0
    faststr = 'Same time'
    ratio = 1.0
    
  print "%s for app '%s', variant '%s', action '%s', difference: %.2f, ratio: %.2f" % (faststr, app, variant, action, diff, ratio) 
  return (fast, diff, ratio)
#/compare_actions_times

def compare_variants_times(var0, var1, app):
  allsame = True
  variant = var0.descriptor()

  # Compare keys for the two dicts.
  keys0 = set(var0.actions.keys())
  keys1 = set(var1.actions.keys())
  addl0 = keys0 - keys1
  addl1 = keys1 - keys0
  for a0 in addl0:
    print >> sys.stderr, "Action '%s' not found in 2nd variant '%s' for app '%s'" % (a0, variant, app)
  for a1 in addl1:
    print >> sys.stderr, "Action '%s' not found in 1st variant '%s' for app '%s'" % (a1, variant, app)

  common = keys0 & keys1
  for actdesc in common:
    act0 = var0.actions[actdesc]
    act1 = var1.actions[actdesc]
    fast, diff, ratio = compare_actions_times(act0, act1, variant, app)
    # %%% Do something with these
#/compare_variants_times

def compare_stats_times(statsobj0, statsobj1):
  app = statsobj0.name

  # Compare keys for the two dicts.
  keys0 = set(statsobj0.variants.keys())
  keys1 = set(statsobj1.variants.keys())
  addl0 = keys0 - keys1
  addl1 = keys1 - keys0
  for a0 in addl0:
      print >> sys.stderr, "Variant '%s' not found in 2nd variant list for app '%s'" % (a0, app)
  for a1 in addl1:
      print >> sys.stderr, "Variant '%s' not found in 1st variant list for app '%s'" % (a1, app)

  common = keys0 & keys1
  for vardesc in common:
    variant0 = statsobj0.variants[vardesc]
    variant1 = statsobj1.variants[vardesc]
    compare_variants_times(variant0, variant1, app)
#/compare_stats_times

def compare_times(stats0, stats1):
  # Compare keys for the two dicts.
  keys0 = set(stats0.keys())
  keys1 = set(stats1.keys())
  addl0 = keys0 - keys1
  addl1 = keys1 - keys0
  for a0 in addl0:
      print >> sys.stderr, "Application '%s' not found in 2nd stats list" % a0
  for a1 in addl1:
      print >> sys.stderr, "Application '%s' not found in 1st stats list" % a1

  common = keys0 & keys1
  for app in common:
    stats0obj = stats0[app]
    stats1obj = stats1[app]
    compare_stats_times(stats0obj, stats1obj)
#/compare_times

# Get a list of actions recorded in the given |AppStats| object.
def load_actions(stat):
  actions = []
  for vardesc in stat.variants:
    for actdesc in stat.variants[vardesc].actions:
      if actdesc not in actions:
        actions.append(actdesc)
  return actions

# Get a filtered list of variants for the given application/action.
# An exception may be thrown if some variants are not available.
def load_variants(stat, actdesc):
  app = stat.name
  variants = {}
  for vardesc in cfg.VARIANTS:
    if vardesc in stat.variants:
      variant = stat.variants[vardesc]
      if actdesc not in variant.actions:
        raise Exception("Data not available for action: %s %s %s" % (app, vardesc, actdesc))
      variants[vardesc] = variant
    else:
      raise Exception("Variant data not available: %s %s" % (app, vardesc))
      
  assert len(variants) == len(cfg.VARIANTS)
  return variants

def print_time_comparison(stats):
  apps = stats.keys()
  apps.sort()
  for app in apps:
    stat = stats[app]
    actdescs = load_actions(stat)
    for actdesc in actdescs:
      try:
        variants = load_variants(stat, actdesc)
        times = {}
        for vardesc, variant in variants.iteritems():
          times[vardesc] = variant.actions[actdesc].avg_time()
        #print_times(app, actdesc, times)
      except Exception as e:
        util.warn(str(e))

# Create graphs.
def generate_graphs(stats):
  timelist = []
  apps = stats.keys()
  apps.sort()
  mininit = float('inf')
  maxinit = 0.0
  for app in apps:
    #if app != 'squirrelmail': continue
    stat = stats[app]
    actdescs = load_actions(stat)
    for actdesc in actdescs:
      # Group init and load times together
      if actdesc == 'init': continue

      try:
        variants = load_variants(stat, actdesc)
        times = {}
        times['action'] = actdesc
        for vardesc, variant in variants.iteritems():
          tm = variant.actions[actdesc].avg_time()
          # Add on policy.js and libTx.js load time.
          if actdesc == 'load' and vardesc != 'original':
            if 'init' in variant.actions:
              inittm = variant.actions['init'].avg_time() 
              if inittm > maxinit: maxinit = inittm
              if inittm < mininit: mininit = inittm
              tm += inittm
            else:
              util.warn("No init time for load: %s/%s" % (app, vardesc))
          times[vardesc] = tm

        # Check for zero/negative times.
        ok = True
        for vardesc, time in times.iteritems():
          if time <= 0:
            print >> sys.stderr, "NON-POSITIVE TIME: %s/%s/%s/%.2f" % (app, actdesc, vardesc, time)
            ok = False
        if not ok: continue

        # Check for cases where transformed performs worse than modular
        # on long-duration base case.
        time0 = float(times[cfg.VARIANTS[0]])
        time1 = float(times[cfg.VARIANTS[1]])
        time2 = float(times[cfg.VARIANTS[2]])
        if time2 > time1 and time0 > 100.0:
          print >> sys.stderr, "LONG-DURATION OUTLIER: %s/%s/%.2f/%.2f/%.2f" % (app, actdesc, time0, time1, time2)

        if time0 < 0.1 or time1 < 0.1 or time2 < 0.1:
          print >> sys.stderr, "TINY TIME: %s/%s/%.2f/%.2f/%.2f" % (app, actdesc, time0, time1, time2)

        # Check for cases where secure code is faster than unprotected.
        if time2 / time0 <= 0.90:
          print >> sys.stderr, "WOVEN UNDERLIER: %s/%s %.2f" % (app, actdesc, time2 / time0)

        if time1 / time0 < 0.90:
          print >> sys.stderr, "MODULAR UNDERLIER: %s/%s %.2f" % (app, actdesc, time1 / time0)

        if time2 / time1 > 1.5:
          print >> sys.stderr, "LARGE TRANSFORMED/MODULAR RATIO: %s/%s/%.2f/%.2f" % (app, actdesc, time2 / time1, time0)

        if actdesc != 'load' and time2 / time0 > 5:
          print >> sys.stderr, "LARGE TRANSFORMED/ORIGINAL RATIO: %s/%s/%.2f" % (app, actdesc, time2 / time0)

        timelist.append(times)
      except Exception as e:
        util.warn(str(e))

  grapher.modularVsWovenOverheadByOriginal(timelist, cfg.VARIANTS, cfg.VARIANT_DISPLAY)
  #grapher.modularVsWovenOverhead(timelist, False)
  grapher.modularVsWovenOverhead(timelist, True)
  grapher.wovenOverheadByOriginal(timelist, cfg.VARIANTS, cfg.VARIANT_DISPLAY)

  print "MIN INIT TIME: %s" % mininit
  print "MAX INIT TIME: %s" % maxinit
#/generate_graphs

def generate_output(stats):
  #print_all_times(stats)
  print_time_comparison(stats)
  generate_graphs(stats)

#/generate_output

def main():
  parser = OptionParser(usage="%prog results.txt")
  parser.add_option('-c', '--config', action='store', default='util/resultsconfig.py', dest='config', help='configuration.py file')
  parser.add_option('-v', '--verbose', action='store_true', default=False, dest='verbose', help='generate verbose output')
  parser.add_option('-a', '--analysis', action='store', default='t', dest='analysis', help='analysis to conduct:\n  t  fine-grained vs. coarsed-grain runtime\n  c  compare profile information across results files\n  m  compare running time across results files\n  a  all')

  opts, args = parser.parse_args()

  global cfg
  try:
    cfg = imp.load_source("cfg", opts.config)
  except:
    print >> sys.stderr, "Unable to load configuration file: %s" % opts.config
    sys.exit(1)

  global VERBOSE
  VERBOSE = opts.verbose

  analysis = opts.analysis
  if analysis not in ['a', 't', 'c', 'm']:
    parser.error("Invalid analysis identifier: %s" % analysis)
    
  if len(args) == 0:
    assert os.path.exists(cfg.RESULTS_SOURCE), "Default results path %s doesn't exist." % cfg.RESULTS_SOURCE
    resultsfiles = [os.path.join(cfg.RESULTS_SOURCE, fl) for fl in os.listdir(cfg.RESULTS_SOURCE)]
  else:
    resultsfiles = []
    for resfile in args:
      if not os.path.exists(resfile):
        util.warn("results file %s doesn't exist." % resfile)
      if os.path.isdir(resfile):
        # Doesn't recurse.
        resultsfiles.extend([os.path.join(resfile, filename) for filename in os.listdir(resfile)])
      else:
        resultsfiles.append(resfile)

  if len(resultsfiles) == 0:
    parser.error("No results files found")

  if analysis == 'a' or analysis == 't':
    resultstxt = collect_results(resultsfiles)
    stats = parse_results(resultstxt)
    generate_output(stats)

  if analysis == 'a' or analysis == 'c':
    if len(resultsfiles) != 2: parser.error("Size of results list != 2")
    resultslist = collect_separate_results(resultsfiles)
    stats0 = parse_results(resultslist[0])
    stats1 = parse_results(resultslist[1])
    compare_results(stats0, stats1)

  if analysis == 'a' or analysis == 'm':
    if len(resultsfiles) != 2: parser.error("Size of results list != 2")
    resultslist = collect_separate_results(resultsfiles)
    stats0 = parse_results(resultslist[0])
    stats1 = parse_results(resultslist[1])
    compare_times(stats0, stats1)
#/main

if __name__ == "__main__":
  main()
