#!/usr/bin/python
import sys
import os
import re
import subprocess
from subprocess import PIPE
from optparse import OptionParser
import imp

from util import out
from util import err
from util import warn
from util import fatal

def parseDiffOutput(diffout):
  files = []
  for ln in diffout.split("\n"):
    if ln == "": continue
    match = re.search('^Files (.*) and (.*) differ$', ln)
    if match:
      files.append(match.group(1, 2))
    else:
      warn("Unsupported output pattern: %s" % ln)

  return files

def getDiffFiles(origdir, newdir, exclusions):
  cmd = ['diff', '-Narq'] 
  for excl in exclusions:
    cmd.append('-x')
    cmd.append(excl)
  cmd.append(origdir)
  cmd.append(newdir)

  enc = sys.stdout.encoding
  if enc is None: enc = 'utf-8'
  diff = subprocess.Popen(cmd, stdout=PIPE) 
  diffout = diff.communicate()[0].decode(enc)

  return parseDiffOutput(diffout)

def preparePatchDirectory(patchdir):
  # Check validity of or create patch directory.
  if os.path.exists(patchdir):
    if not os.path.isdir(patchdir):
      err("Unable to create output directory %s; file exists" % patchdir)
      return False
    toRemove = [];
    for fl in os.listdir(patchdir):
        if fl == ".svn": continue
        flpath = os.path.join(patchdir, fl)
        if os.path.isdir(flpath):
          err("Can't clear patch directory; it contains a directory: %s" % flpath)
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
  out("Saving to %s" % outpath)

  enc = sys.stdout.encoding
  if enc is None: enc = 'utf-8'
  proc = subprocess.Popen(cmd, stdout=PIPE)
  diffout = proc.communicate()[0].decode(enc)

  outfl = open(outpath, 'w')
  outfl.write(diffout)
  outfl.write("\n")
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

  out("Identifying differing files")
  exclusions = getattr(cfg, 'EXCLUSIONS', [])
  diffFiles = getDiffFiles(cfg.ORIGDIR, cfg.DEVDIR, exclusions)

  preparePatchDirectory(cfg.PATCHDIR)
  for oldfl, newfl in diffFiles:
    out("Generating patch for %s" % newfl)
    makePatch(oldfl, newfl, cfg.PATCHDIR)

if __name__ == "__main__":
  main()
