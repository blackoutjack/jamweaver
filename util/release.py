#!/usr/bin/python
import sys
import os
import shutil
from optparse import OptionParser
import filecmp
import imp

# This module is loaded via the command line argument.
cfg = None

def gather_files_from_dir(indir, outdir, filt=None, filtend=False):
  # Create the destination directory if it doesn't exist.
  if not os.path.exists(outdir):
    os.makedirs(outdir)

  for flname in os.listdir(indir):
    if filt != None:
      if filtend:
        if not flname.endswith(filt): continue
      else:
        if flname.find(filt) == -1: continue
    # Don't copy SVN metadata.
    if flname == ".svn": continue
    # Never copy .swp files.
    if flname.endswith(".swp"): continue

    flpath = os.path.join(indir, flname)
    if os.path.isdir(flpath): continue

    destpath = os.path.join(outdir, flname)

    gather_file(flpath, destpath)

def gather_file(src, dest):
    # Create the parent directory of the destination file if needed.
    parent = os.path.dirname(dest)
    if not os.path.exists(parent):
      os.makedirs(parent)
    # Only copy if the source is newer and different.
    if os.path.exists(dest):
      # The next two lines should be commented out in case the release
      # repo has recently been updated through SVN.
      if os.path.getmtime(src) <= os.path.getmtime(dest):
        return
      if filecmp.cmp(src, dest):
        return

    # Copy the file.
    print "Copying", src, "->", dest
    if os.path.islink(src):
      if os.path.isfile(dest) or os.path.islink(dest):
        os.unlink(dest)
      linkto = os.readlink(src)
      os.symlink(linkto, dest)
    else:
      shutil.copy(src, dest)

def gather_files(outdir, files_to_copy):
  for tup in files_to_copy:
    src = tup[0]
    dest = os.path.join(outdir, tup[1])
    filt = None
    if len(tup) > 2:
      filt = tup[2]
    exact = False
    if len(tup) > 3:
      exact = tup[3]

    if os.path.isdir(src):
      gather_files_from_dir(src, dest, filt, exact)
    elif os.path.isfile(src):
      gather_file(src, dest)
    else:
      print >> sys.stderr, "Error: can't find source file:", src
      

if __name__ == "__main__":
  parser = OptionParser(usage="%prog releaseconfig.py")
  #parser.add_option('-e', '--env', action='store_true', default=False, dest='env', help='test environment variables')

  opts, args = parser.parse_args()

  if len(args) != 1:
    parser.error("Invalid number of arguments")

  cfg = imp.load_source("cfg", args[0])
    
  assert os.path.isdir(cfg.OUTDIR), "Destination path must already exist."
  assert isinstance(cfg.FILES_TO_COPY, list), "FILES_TO_COPY list not specified in config file"

  gather_files(cfg.OUTDIR, cfg.FILES_TO_COPY)
  

