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
import operator
import math

DISABLED = [
  'sms2', 'sms2-template', 'txjs', 'kraken-results', 'jssec',
  'jssec-bad', 'jsbeautifier', 'jsqrcode-mal', 'snote-mini',
  'kraken-mega', 'kraken-mega2', 'sunspider-mega', 'sunspider-mega2',
  'jsbench-yahoo-safari-urem', 'jsbench-yahoo-firefox-urem',
  'jsbench-yahoo-chrome-urem', 'jsbench-twitter-chrome-urem',
  'octane-pdf', 'octane-zlib', 'octane-zlib-eval', 'octane-eb',
  'octane-gb', 'octane-mandreel', 'octane-codeload',
  'octane-typescript', 'octane', 'googlemaps', 'jsqrcode-get',
]

POLDESCS = {
  'squirrelmail': 'disallow access to src property',
  'squirrelmail-bad': 'disallow access to src property',
  'doubleclick-loader': 'prevent navigation',
  'userprefs': 'disallow appendChild and eval',
  'sunspider': 'disallow XMLHttpRequest.open',
  'kraken': 'disallow XMLHttpRequest.open',
  'beacon': 'isolate document from cookie',
  'plusone': 'prevent script creation, document edits',
  'imageloader': 'disallow document.write',
  'sms2-*': 'prevent all network communication',
  'snote': 'certain elements write-once/read-only',
  'piwik': 'isolate document from cookie',
  'mwwidgets': 'certain elements write-once/read-only',
  'midori': 'prevent modification of cookie',
  'greybox': 'prevent creation of script elements',
  'googiespell': 'disallow document.write',
  'ga': 'prevent script creation, document edits',
  'jsqrcode': 'prevent all network communication',
  'hulurespawn': 'disallow local storage access',
  'colorpicker': 'prevent navigation, src/cookie access',
  'adsense': 'isolate document from cookie',
  'flickr': 'prevent external pop-up creation',
  'puzzle': 'prevent creation of script elements',
  'jswidgets-menu': 'prevent creation of script elements',
  'portscanner': 'disallow setting src property',
  'jsbench-google-chrome-urem': 'disallow XMLHttpRequest.open',
  'jsbench-amazon-chrome-urem': 'disallow XMLHttpRequest.open',
  'jsbench-facebook-chrome-urem': 'disallow XMLHttpRequest.open',
  'phylojive': 'isolate document from cookie',
}

def geomeanPercent(vals):
  tot = 0.0
  for val in vals:
    tot += math.log(float(val) / 100.0 + 1.0)
  return math.exp(tot / len(vals)) * 100

def geomean(vals):
  tot = 0.0
  for val in vals:
    tot += math.log(float(val))
  return math.exp(tot / len(vals))

def printTableRows(valsToPrint, sortRow, showSort=True, dec=1):
  if FORMAT == "latex":
    printLaTeXTableRows(valsToPrint, sortRow, showSort, dec)
  else:
    printHumanTableRows(valsToPrint, sortRow, showSort, dec)

def printLaTeXTableRows(valsToPrint, sortRow, showSort=True, dec=1):
  # Output the rest in order of source lines.
  for vals in sorted(valsToPrint.values(), key=operator.itemgetter(sortRow)):
    # Remove the sorting column if specified to do so.
    if not showSort: del vals[sortRow]
    first = True
    # Print one row of the table.
    print '\\texttt{}',
    for val in vals:
      if first:
        first = False
      else:
        print '&',
      if type(val) is float:
        fmt = "%." + str(dec) + "f"
        print fmt % val,
      else:
        print str(val),
    print '\\\\'

def printHumanTableRows(valsToPrint, sortRow, showSort=True, dec=1):
  # Output a table header.
  #hdrs = valsToPrint.keys()
  #lens = []
  #for hdr in hdrs:
  #  lens.append(len(hdr))

  lens = []
  rows = []
  # Output the rest in order of source lines.
  sortedVals = sorted(valsToPrint.values(), key=operator.itemgetter(sortRow))
  for vals in sortedVals:
    # Remove the sorting column if specified to do so.
    if not showSort: del vals[sortRow]
    # Collect one row of the table.
    row = []

    i = 0
    for val in vals:
      # Initialize the max length array.
      if len(lens) < i + 1:
        lens.append(0)
        
      if type(val) is float:
        fmt = "%." + str(dec) + "f"
        disp = fmt % val
      else:
        disp = str(val)
      l = len(disp)
      if l > lens[i]:
        lens[i] = l
      row.append(disp)
      i += 1
    rows.append(row)
  
  rowfmt = ""
  for l in lens:
    rowfmt += "%-" + str(l) + "s "

  #print rowfmt % tuple(hdrs)
  for r in rows:
    print rowfmt % tuple(r)

def collect_results(results, srcdir, bases):
  # Assumes that directories within |srcdir| are of the form "app-iter",
  # where "iter" is a label to separate the results of multiple analyses
  # for one application. Only the most recent result for each app is
  # transferred.
  resultsdirs = os.listdir(srcdir)

  resultsdirs = cfg.sort_dirs(bases, resultsdirs)
  for app, dirlist in resultsdirs.iteritems():
    if app == 'jsqrcode-call':
      appkey = 'jsqrcode'
    else:
      appkey = app

    info = None
    for dirinfo in dirlist:
      version = dirinfo['version']
      if info is None or dirinfo['version'] > info['version']:
        info = dirinfo
    if info is None:
      cfg.warn("No results found for app: %s" % app)
      continue
    cntfile = os.path.join(srcdir, info['dir'], 'info.txt')
    if not os.path.isfile(cntfile):
      cfg.warn("No info file found for app: %s %s" % (app, cntfile))
      continue
      
    if appkey in results:
      cntinfo = results[appkey]
    else:
      cntinfo = {}
      results[appkey] = cntinfo

    cntfl = open(cntfile, 'r')
    cnttxt = cntfl.readlines()
    cntfl.close()

    for ln in cnttxt:
      parts = ln.strip().split(":")
      if len(parts) != 2:
        continue
      cntinfo[parts[0]] = parts[1]

def generate_info_table(results):
  vals = {}
  sms2origtot = 0.0
  sms2txtot = 0.0
  sms2indtot = 0.0
  sms2cnt = 0
  for appkey, cnts in results.iteritems():
    if appkey in DISABLED:
      continue
    if appkey == 'jsqrcode':
      app = 'jsqrcode-call'
    else:
      app = appkey

    origkey = app + ".original.js"
    if origkey not in cnts:
      cfg.warn("Node count for original program not found: %s, %s" % (app, origkey))
      continue
    origcnt = int(cnts[origkey])

    txkey = "transactions"
    if txkey not in cnts:
      cfg.warn("Transaction count not found: %s, %s" % (app, txkey))
      continue
    txcnt = int(cnts[txkey])

    indkey = "dynamic-callsites-indirected"
    if indkey not in cnts:
      cfg.warn("Indirection count not found: %s, %s" % (app, indkey))
      continue
    indcnt = int(cnts[indkey])

    if appkey.startswith("sms2-"):
      sms2origtot += origcnt
      sms2txtot += txcnt
      sms2indtot += indcnt
      sms2cnt += 1
    else:
      if appkey in POLDESCS:
        poldesc = POLDESCS[appkey]
      else:
        print >> sys.stderr, "No description for policy: %s" % appkey
        poldesc = ''
      vals[appkey] = (appkey, origcnt, poldesc, txcnt, indcnt)

  if sms2cnt > 0:
    if 'sms2-*' in POLDESCS:
      poldesc = POLDESCS['sms2-*']
    else:
      print >> sys.stderr, "No description for policy: %s" % 'sms2-*'
      poldesc = ''
    vals["sms2-*"] = ("sms2-*", sms2origtot / sms2cnt, poldesc, sms2txtot / sms2cnt, sms2indtot / sms2cnt)

  print "Original program node count"
  printTableRows(vals, 1, True)
    

def generate_policy_table(results):
  vals = {}
  sms2basetot = 0.0
  sms2spectot = 0.0
  sms2auttot = 0.0
  sms2cnt = 0
  for app, cnts in results.iteritems():
    autkey = "policy.aut"
    if autkey not in cnts:
      cfg.warn("Node count for policy automaton not found: %s, %s" % (app, autkey))
      continue
    autcnt = int(cnts[autkey])

    basekey = "modular.policy.js"
    if basekey not in cnts:
      cfg.warn("Node count for base policy not found: %s, %s" % (app, basekey))
      continue
    if app in DISABLED:
      continue
    basecnt = int(cnts[basekey])

    speckey = "policy.js"
    if speckey not in cnts:
      cfg.warn("Node count for specialized policy not found: %s, %s" % (app, speckey))
      continue
    speccnt = int(cnts[speckey])

    if app.startswith("sms2-"):
      sms2cnt += 1
      sms2auttot += autcnt
      sms2basetot += basecnt
      sms2spectot += speccnt
    else:
      vals[app] = (app, autcnt, basecnt, speccnt)

  if sms2cnt > 0:
    vals["sms2-*"] = ("sms2-*", sms2auttot / sms2cnt, sms2basetot / sms2cnt, sms2spectot / sms2cnt) 

  print "Policy node count"
  printTableRows(vals, 1, True)

  basex = []
  specx = []
  for app, autcnt, basecnt, speccnt in vals.values():
    basex.append(float(basecnt)/float(autcnt))
    specx.append(float(speccnt)/float(autcnt))

  geobase = geomean(basex)
  geospec = geomean(specx)

  print "GEOMETRIC MEAN (BASELINE): %.2f" % geobase
  print "GEOMETRIC MEAN (SPECIALIZED): %.2f" % geospec

def generate_tables(vals):
  generate_info_table(vals)
  generate_policy_table(vals)

def main():
  parser = OptionParser(usage="%prog config.py")
  parser.add_option('-v', '--verbose', action='store_true', default=False, dest='verbose', help='generate verbose output')
  parser.add_option('-f', '--format', action='store', default='latex', dest='format', help='output format', metavar='latex|human (default:latex)')

  opts, args = parser.parse_args()

  if len(args) != 1:
    parser.error("Invalid number of arguments")

  global cfg
  try:
    cfg = imp.load_source("cfg", args[0])
  except:
    print >> sys.stderr, "Unable to load configuration file: %s" % opts.config
    sys.exit(1)
    
  assert os.path.isdir(cfg.SOURCEDIR), "Source path %s doesn't exist." % cfg.SOURCEDIR

  global VERBOSE
  VERBOSE = opts.verbose
  global FORMAT
  FORMAT = opts.format.lower()

  results = {}
  for destdir, props in cfg.TARGETDIRS.iteritems():
    if destdir != cfg.appstgt:
      continue
    bases = props['basenames']
    collect_results(results, cfg.SOURCEDIR, bases)
  generate_tables(results)
#/main

if __name__ == "__main__":
  main()

