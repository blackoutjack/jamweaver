#!/usr/bin/python
import sys
import os
from optparse import OptionParser
import operator

def find_dups(filepath, isQueryFile):
  
  fl = open(filepath, 'r')
  pairs = []
  for ln in fl:
    ln = ln.strip()
    if ln == "":
      continue

    lnparts = ln.split()
    # Query files just need the query id chopped off before comparison,
    # while results files need the time measurement removed too.
    if isQueryFile:
      lnparts = lnparts[1:]
    else:
      if ln[-2:] == "ms":
        # Confirmed that the last portion was a timing number. 
        lnparts = lnparts[1:-1]
      else:
        lnparts = lnparts[1:]
      
    val = " ".join(lnparts)
    pair = (ln, val)
    pairs.append(pair)

  # Sort based on the first tuple entry.
  pairs = sorted(pairs, key=operator.itemgetter(1))

  dups = []
  prev = None
  for pair in pairs:
    if prev is not None and pair[1] == prev[1]:
      if len(dups) == 0 or dups[-1] != prev:
        dups.append(prev)
      dups.append(pair)
    prev = pair 

  for dup in dups:
    print dup[0]

def main():
  parser = OptionParser(usage="%prog results-file|queries-file")
  #parser.add_option('-b', '--benchmarks', action='store_true', default=False, dest='benchmarks', help='test benchmarks')

  opts, args = parser.parse_args()
    
  if len(args) < 1:
    parser.error("Invalid number of arguments")

  filename = args[0]
  if not os.path.exists(filename):
    parser.error("File doesn't exist: " + filename)

  filepath = os.path.abspath(filename) 

  if os.path.basename(filepath).find("queries") == 0:
    find_dups(filepath, True);
  else:
    find_dups(filepath, False);

if __name__ == "__main__":
  main()
