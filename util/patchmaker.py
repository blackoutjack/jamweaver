#!/usr/bin/python
import sys
import os
import re
import subprocess
from subprocess import PIPE
from optparse import OptionParser
import imp

def parseDiffOutput(diffout):
  files = []
  for ln in diffout.split("\n"):
    if ln == "": continue
    match = re.search('^Files (.*) and (.*) differ$', ln)
    if match:
      files.append(match.group(1, 2))
    else:
      print >> sys.stderr, "Unsupported output pattern:", ln

  return files

def getDiffFiles(origdir, newdir, exclusions):
  cmd = ['diff', '-Narq'] 
  for excl in exclusions:
    cmd.append('-x')
    cmd.append(excl)
  cmd.append(origdir)
  cmd.append(newdir)

  diff = subprocess.Popen(cmd, stdout=PIPE) 
  diffout = diff.communicate()[0]

  return parseDiffOutput(diffout)

def preparePatchDirectory(patchdir):
  # Check validity of or create patch directory.
  if os.path.exists(patchdir):
    if not os.path.isdir(patchdir):
      print >> sys.stderr, "Unable to create output directory", patchdir + "; file exists"
      return False
    toRemove = [];
    for fl in os.listdir(patchdir):
        if fl == ".svn": continue
        flpath = os.path.join(patchdir, fl)
        if os.path.isdir(flpath):
          print >> sys.stderr, "Can't clear patch directory; it contains a directory:", flpath
          return False
        toRemove.append(flpath)
    for flpath in toRemove:
        os.remove(flpath)
  else:
    os.makedirs(patchdir)

def makePatch(oldfl, newfl, patchdir):
    
  cmd = ['diff', '-Nua', oldfl, newfl]
  outfile = '_'.join(newfl.split('/')[1:]) + ".patch"
  outpath = os.path.join(patchdir, outfile)
  print "Saving to", outpath

  proc = subprocess.Popen(cmd, stdout=PIPE)
  out = proc.communicate()[0]

  outfl = open(outpath, 'w', 0)
  print >> outfl, out,
  outfl.flush()
  outfl.close()

  return True

def main():
  parser = OptionParser(usage="%prog patchconfig.py")
  #parser.add_option('-s', '--semantics', action='store_true', default=False, dest='semantics', help='test semantics')

  opts, args = parser.parse_args()
    
  if len(args) != 1:
    parser.error("Invalid number of arguments")

  cfg = imp.load_source("cfg", args[0]) 

  print "Identifying differing files"
  exclusions = getattr(cfg, 'EXCLUSIONS', [])
  diffFiles = getDiffFiles(cfg.ORIGDIR, cfg.DEVDIR, exclusions)

  preparePatchDirectory(cfg.PATCHDIR)
  for oldfl, newfl in diffFiles:
    print "Generating patch for", newfl
    makePatch(oldfl, newfl, cfg.PATCHDIR)

if __name__ == "__main__":
  main()
