#!/usr/bin/python3.4
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
from util import prepare_dir

def create_test_from_file(fl, name, group, policy):
  txt = fl.read()
  fl.close()

  appdir = os.path.join(TESTS_DIR, group, name)
  if os.path.exists(appdir):
    if OVERWRITE:
      if not os.path.isdir(appdir):
        fatal("Unable to overwrite file: %s" % appdir)
      warn("Creating in existing directory: %s" % appdir)
    else:
      fatal("Not overwriting existing directory: %s" % appdir)
  prepare_dir(appdir)

  inputdir = os.path.join(appdir, 'source-input')
  if os.path.exists(inputdir):
    assert OVERWRITE
    if not os.path.isdir(inputdir):
      fatal("Unable to overwrite non-directory: %s" % inputdir)
  else:
    os.makedirs(inputdir)

  tgtfile = "%s.js" % name
  tgtpath = os.path.join(inputdir, tgtfile)
  tgtfl = open(tgtpath, 'w')

  tgtfl.write(txt)
  tgtfl.close()

def create_test_for_url(url, name, policy):
  fatal("URL creation not yet implemented")

def main():
  parser = OptionParser(usage="%prog")
  parser.add_option('-n', '--name', action='store', default=None, dest='name', help='name of the new test')
  parser.add_option('-g', '--group', action='store', default=None, dest='group', help='test group to add to')
  parser.add_option('-f', '--file', action='store', default=None, dest='file', help='input source file')
  parser.add_option('-u', '--url', action='store', default=None, dest='url', help='URL for website test case')
  parser.add_option('-F', '--overwrite', action='store_true', default=False, dest='overwrite', help='overwrite existing files')
  parser.add_option('-v', '--verbose', action='store_true', default=False, dest='verbose', help='generate verbose output')
  parser.add_option('-Y', '--policy', action='store', default=None, dest='policy', help='policy file to use for the test case')

  opts, args = parser.parse_args()
    
  if len(args) != 0:
    parser.error("Invalid number of arguments")

  if opts.group not in TEST_GROUPS:
    fatal("Invalid test group: %s" % opts.group)

  global VERBOSE, OVERWRITE
  VERBOSE = opts.verbose
  OVERWRITE = opts.overwrite

  if opts.url is not None:
    group = opts.group
    if group is None:
      group = 'sites'
    if group != 'sites':
      fatal("Invalid group for URL test: %s" % group)
    create_test_for_url(opts.url, opts.name, opts.policy)

  else:
    if opts.file is None:
      if opts.name is None:
        fatal("Name (-n) must be provided for stdin source")
      appname = opts.name
      fl = sys.stdin
    else:
      if not os.path.isfile(opts.file):
        fatal("Unable to access source file: %s" % opts.file)
      filename = os.path.basename(opts.file)
      appname = os.path.splitext(filename)[0]
      fl = open(opts.file, 'r')

    group = opts.group
    if group is None: group = 'bench'

    create_test_from_file(fl, appname, group, opts.policy)
# /main


if __name__ == "__main__":
  main()

