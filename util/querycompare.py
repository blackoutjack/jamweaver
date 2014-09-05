#!/usr/bin/python
import sys
import os
from optparse import OptionParser
import operator
import difflib
import filecmp
import sets

from config import *

def diff_results(fl0, fl1):
  results0 = fl0.readlines()
  results1 = fl1.readlines()

  for ln in difflib.unified_diff(results0, results1):
    print ln,

def compare_results(fl0, fl1):
  results0 = fl0.readlines()
  results1 = fl1.readlines()

  lines0 = []
  for ln in results0:
    if ln.strip == "": continue
    if ln[0] == "[": continue
    lnparts = ln.split()
    if ln[-2:] == "ms":
      # Confirmed that the last portion was a timing number. 
      lnparts = lnparts[1:-1]
    else:
      lnparts = lnparts[1:]
    ln = " ".join(lnparts)
    lines0.append(ln)
  
  lines1 = []
  for ln in results1:
    if ln.strip == "": continue
    if ln[0] == "[": continue
    lnparts = ln.split()
    if ln[-2:] == "ms":
      # Confirmed that the last portion was a timing number. 
      lnparts = lnparts[1:-1]
    else:
      lnparts = lnparts[1:]
    ln = " ".join(lnparts)
    lines1.append(ln)

  for ln in lines0:
    try:
      lines1.index(ln)
    except:
      print "Only in " + "0" + ": " + ln

  for ln in lines1:
    try:
      lines0.index(ln)
    except:
      print "Only in " + "1" + ": " + ln

def compare_count(fl0, fl1):
  l0 = 0
  for ln in fl0.readlines():
    if ln.strip == "": continue
    if ln[0] == "[": continue
    l0 += 1

  l1 = 0
  for ln in fl1.readlines():
    if ln.strip == "": continue
    if ln[0] == "[": continue
    l1 += 1

  if l0 == l1:
    print "Same number of lines"
  elif l0 > l1:
    print "0", "has", str(l0 - l1), "more"
  else:
    print "1", "has", str(l1 - l0), "more"
  
  

def get_results_file(appname, idx):
  dirname = appname + "-" + str(idx)
  flpath = os.path.join(OUTDIR, dirname, "0", "results-symbolic")

  if not os.path.exists(flpath):
    print >> sys.stderr, "File doesn't exist: " + flpath
    return None

  fl = open(flpath, 'r')
  return fl


def compare_results_app(appname):
  
  fl0 = get_results_file(appname, 0)
  fl1 = get_results_file(appname, 1)

  compare_count(fl0, fl1);

  if fl0 is not None:
    fl0.close()
  if fl1 is not None:
    fl1.close()

def get_all_appnames():
  ret = []
  for subdir in os.listdir(OUTDIR):
    appnameparts = subdir.split("-")[:-1]
    appname = "-".join(appnameparts)

    try:
      ret.index(appname)
      continue
    except:
      ret.append(appname)

  ret.sort()
  return ret

def compare_count_summary():
  for appname in get_all_appnames():

    print appname + ": ",

    fl0 = get_results_file(appname, 0)
    fl1 = get_results_file(appname, 1)

    compare_count(fl0, fl1)
  
def compare_results_summary():
  for appname in get_all_appnames():

    # %%% Do all runs, not just the first two.
    fl0 = get_results_file(appname, 0)
    fl1 = get_results_file(appname, 1)

    # %%% This is no good now that threads mix things up.
    same = filecmp.cmp(fl0.name, fl1.name) 
    if not same:
      print "Different: ", appname

def get_query_ids(filepath):
  ids = sets.Set()
  if not os.path.isfile(filepath):
    return ids

  fl = open(filepath, 'r')
  for ln in fl.readlines():
    idstart = ln.find('<')
    if idstart == -1:
      continue
    idend = ln.find('>')
    if idend == -1 or idend <= idstart:
      continue
    idnum = ln[idstart + 1:idend]
    ids.add(idnum)
  fl.close()
        
  return ids 

def compare_results_to_queries(runpath):
  i = 0
  while True:
    respath = os.path.join(runpath, str(i))
    if not os.path.isdir(respath):
      break

    cqfile = os.path.join(respath, "queries-concrete")
    crfile = os.path.join(respath, "results-concrete")
    sqfile = os.path.join(respath, "queries-symbolic")
    srfile = os.path.join(respath, "results-symbolic")

    cqids = get_query_ids(cqfile)
    crids = get_query_ids(crfile)
    sqids = get_query_ids(sqfile)
    srids = get_query_ids(srfile)

    for cqid in cqids:
      #if cqid.endswith('C'): continue
      if cqid not in crids:
        print >> sys.stdout, "Query", cqid, "missing from results file:", crfile

    for crid in crids:
      #if crid.endswith('C'): continue
      if crid not in cqids:
        print >> sys.stdout, "Query", cqid, "missing from queries file:", cqfile

    for sqid in sqids:
      #if sqid.endswith('C'): continue
      if sqid not in srids:
        print >> sys.stdout, "Query", sqid, "missing from results file:", srfile

    for srid in srids:
      #if srid.endswith('C'): continue
      if srid not in sqids:
        print >> sys.stdout, "Query", srid, "missing from queries file:", sqfile

    i += 1
  

def main():
  parser = OptionParser(usage="%prog [-a appname] [-c output/path] [-s]")
  parser.add_option('-a', '--appname', action='store', default=None, dest='appname', help='compare query count across app runs')
  parser.add_option('-r', '--checkrun', action='store', default=None, dest='runpath', help='compare queries to results for given run')
  parser.add_option('-s', '--summary', action='store_true', default=None, dest='summary', help='compare query text across all runs')
  parser.add_option('-c', '--countsum', action='store_true', default=None, dest='counts', help='compare query counts across all runs')

  opts, args = parser.parse_args()
    
  if opts.appname is not None:
    appname = opts.appname
    compare_results_app(appname)

  if opts.runpath is not None:
    runpath = opts.runpath
    compare_results_to_queries(runpath)

  if opts.summary:
    compare_results_summary()
  if opts.counts:
    compare_count_summary() 

if __name__ == "__main__":
  main()

