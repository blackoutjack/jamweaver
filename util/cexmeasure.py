#!/usr/bin/python
import subprocess
from subprocess import PIPE
import os
import os.path
import sys
import cPickle
from optparse import OptionParser
from matplotlib import pyplot

#import rpdb2 
#rpdb2.start_embedded_debugger('pw')

import util
from config import *

AUTS_PER_DIR = 5
DATA_OUTPUT_FILE = os.path.join(JAMPKG, "perf", "cexmeasure.debug")
DATA_PICKLE_FILE = os.path.join(JAMPKG, "perf", "cexmeasure.data")

def loadPreviousData(filename):
  data = []
  try:
    pfl = open(filename, 'r')
    pickler = cPickle.Unpickler(pfl)
    data = pickler.load()
  except:
    # If it's not a pickle file, see if it's a the text representation.
    try:
      tfl = open(filename, 'r')
      for ln in tfl:
        datum = eval(ln)
        data.append(datum)
      tfl.close()
    except:
      print >> sys.stderr, "Unable to load previous data file:", filename
  finally:
    pfl.close()

  return data

def saveData(data, filename):
  try:
    pfl = open(filename, 'w')
    pickler = cPickle.Pickler(pfl)
    pickler.dump(data)
  except:
    print >> sys.stderr, "Unable to save data to file: ", filename
  finally:
    pfl.close()

def getAutomatonFiles(topdirs, startAt, perDir):
  auts = []

  # Track how many auts in a particular directory have been processed.
  dirCounts = {}
  # Support incremental data gathering by shifting the starting aut.
  autsSeen = {}

  for topdir in topdirs:
    for p, d, fls in os.walk(topdir):
      dirCounts[p] = 0
      autsSeen[p] = 0

      fls.sort()
      for fl in fls:
        if fl[-4:] == ".aut" and fl[:5] == "raut-":
          
          # Skip forward until we get to the starting aut.
          autsSeen[p] += 1
          if autsSeen[p] <= startAt:
            continue

          dirCounts[p] += 1
          if dirCounts[p] > perDir:
            break

          auts.append(os.path.join(p, fl))

  print "# of auts:", len(auts)
  return auts

# For each automaton file collect:
#   Name of the file
#   Size of data relations
#   Size of counterexample
#   Time taken
#   Memory used
#   Number of garbage collections
#
# A tuple with this information is appended to the list parameter, data, 
# for each automaton file.
def gatherData(filepaths, data):

  # This will accumulate data, for record-keeping and debugging.
  out_fl = open(DATA_OUTPUT_FILE, 'a')

  for flpath in filepaths:
    print "Collecting data for", flpath
    sys.stdout.flush()

    nwaexe = os.path.join(BINDIR, "nwa")
    cmd = ['/usr/bin/time', '-f', 'real:%Es user:%Us sys:%Ss maxrss:%MKB']
    cmd.extend([nwaexe, flpath])

    nwa = subprocess.Popen(cmd, stdout=PIPE, stderr=PIPE)
    out, err = nwa.communicate()

    cexLength = 0
    if out != "no counterexamples":
      cexLength = len(out.split("\n"))

    relationSize = 0
    gbcCount = 0
    realTimeTaken = 0.0
    cpuTimeTaken = 0.0
    memoryUsed = 0
    for errln in err.split("\n"):
      if errln[:15] == "RELATION SIZE: ":
        # Note the size of the relation.
        relationSize = int(errln[15:])
      elif errln[:20] == "Garbage collection #":
        # Count the number of BDD garbage collections that occur.
        gbcCount += 1
        # %%% Record garbage collection stats.
      elif errln[:5] == "real:":
        parts = errln.split(" ")
        for part in parts:
          subparts = part.split(":", 1)
          metric = subparts[0]
          valstr = subparts[1]
          if metric == "real":
            # Collect the real time taken.
            val = util.parse_time_value(valstr)
            realTimeTaken += val
          elif metric == "user":
            # Add to the CPU time measurement.
            val = util.parse_time_value(valstr)
            cpuTimeTaken += val
          elif metric == "sys":
            # Add to the CPU time measurement.
            val = util.parse_time_value(valstr)
            cpuTimeTaken += val
          elif metric == "maxrss":
            # Collect memory measurement.
            val = subparts[1][:-2]
            memoryUsed = int(val)

    autData = (flpath, cexLength, relationSize, gbcCount, realTimeTaken, cpuTimeTaken, memoryUsed)
    data.append(autData)

    # Persist info incrementally.
    print >> out_fl, autData
    out_fl.flush()

  out_fl.close()

def computeAverages(data):

  # Collect totals and counts so that an average can be computed.
  relationSizeToCPUTime = {}
  relationSizeToRealTime = {}
  relationSizeToMemory = {}
  relationSizeCounts = {}

  cexLengthToCPUTime = {}
  cexLengthToRealTime = {}
  cexLengthToMemory = {}
  cexLengthCounts = {}

  for datum in data:
    flpath, cexLength, relationSize, gbcCount, realTimeTaken, cpuTimeTaken, memoryUsed = datum
    
    if flpath.find("snote") == -1 or flpath.find("snote-mini") != -1:
      #print >> sys.stderr, "Data found for invalid application:", flpath 
      continue

    if cexLength not in cexLengthCounts:
      cexLengthToCPUTime[cexLength] = 0.0
      cexLengthToRealTime[cexLength] = 0.0
      cexLengthToMemory[cexLength] = 0
      cexLengthCounts[cexLength] = 0

    if relationSize not in relationSizeToCPUTime:
      relationSizeToCPUTime[relationSize] = 0.0
      relationSizeToRealTime[relationSize] = 0.0
      relationSizeToMemory[relationSize] = 0
      relationSizeCounts[relationSize] = 0

    cexLengthToCPUTime[cexLength] += cpuTimeTaken
    cexLengthToRealTime[cexLength] += realTimeTaken
    cexLengthToMemory[cexLength] += memoryUsed
    cexLengthCounts[cexLength] += 1

    relationSizeToCPUTime[relationSize] += cpuTimeTaken
    relationSizeToRealTime[relationSize] += realTimeTaken
    relationSizeToMemory[relationSize] += memoryUsed
    relationSizeCounts[relationSize] += 1

  return {
    "relationSizeToCPUTime": relationSizeToCPUTime,
    "relationSizeToRealTime": relationSizeToRealTime,
    "relationSizeToMemory": relationSizeToMemory,
    "relationSizeCounts": relationSizeCounts,
    "cexLengthToCPUTime": cexLengthToCPUTime,
    "cexLengthToRealTime": cexLengthToRealTime,
    "cexLengthToMemory": cexLengthToMemory,
    "cexLengthCounts": cexLengthCounts,
  }

def createGraph(data, title, xlabel, ylabel, xidx, yidx):
  xvals = []
  yvals = []
  for datum in data:
    xvals.append(datum[xidx])
    if yidx == 6:
      # Change units to GB for memory.
      yvals.append(float(datum[yidx]) / (1024.0 * 1024.0))
    else:
      yvals.append(datum[yidx])

  pyplot.scatter(xvals, yvals)
  pyplot.title(title)
  pyplot.xlabel(xlabel)
  pyplot.ylabel(ylabel)
  pyplot.axes().set_xlim(left=0)
  pyplot.axes().set_ylim(bottom=0)
  pyplot.show()

def graphData(data):
  createGraph(data, "", "Counterexample length", "Real time taken (s)", 1, 4)
  createGraph(data, "", "Counterexample length", "CPU time taken (s)", 1, 5)
  createGraph(data, "", "Counterexample length", "Memory used (GB)", 1, 6)
  createGraph(data, "", "Relation size (predicates)", "Real time taken (s)", 2, 4)
  createGraph(data, "", "Relation size (predicates)", "CPU time taken (s)", 2, 5)
  createGraph(data, "", "Relation size (predicates)", "Memory used (GB)", 2, 6)
  createGraph(data, "", "Relation size (predicates)", "Counterexample length", 2, 1)

def graphAverages(avgs):
  pass


def main():

  parser = OptionParser(usage="%prog [topdir[ topdir[ ...]]]")
  parser.add_option('-g', '--graph', action='store_true', default=False, dest='graph', help='produce graphs')
  parser.add_option('-d', '--data', action='store', default=None, dest='datafile', help='load previous data file', metavar='FILE')
  parser.add_option('-s', '--start-at', action='store', type="int", default=0, dest='startAt', help='skip the first INDEX automata in each directory', metavar='INDEX')
  parser.add_option('-p', '--per-dir', action='store', type="int", default=0, dest='perDir', help='measure NUM automata per directory', metavar='NUM')

  opts, args = parser.parse_args()
    
  topdirs = []
  for topdir in args:
    if not os.path.isdir(topdir):
      parser.error("Directory " + topdir + " not found")
    else:
      topdirs.append(topdir)
  
  data = []
  if opts.datafile is not None:
    # This option is a file from which to load previously pickled or
    # textual statistics. This can be the same as the DATA_PICKLE_FILE.
    data = loadPreviousData(opts.datafile)

  # Enumerate raut-*.aut files within the top directory.
  files = getAutomatonFiles(topdirs, opts.startAt, opts.perDir)

  gatherData(files, data)
  saveData(data, DATA_PICKLE_FILE)

  if opts.graph:
    graphData(data)

  avgs = computeAverages(data)
  #print "AVERAGES", avgs

  if opts.graph:
    graphAverages(avgs)

if __name__ == "__main__":
  main()

