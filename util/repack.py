#!/usr/bin/python3.4
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
import fnmatch
import traceback
import urllib.parse
import urllib.request
import urllib.error
import http.cookiejar
import socket
import codecs
import gzip
import cssutils
import logging

#
# TODO:
#

#

from config import *
from util import get_base
from util import get_file_info
from util import get_output_dir
from util import get_unique_filename
from util import fatal
from util import err
from util import warn
from util import out
from util import symlink

try:
  import bs4
except ImportError as e:
  fatal("Unable to import BeautifulSoup 4: %s.\nFor Ubuntu, use ``apt-get install python3-bs4''" % str(e))

# Reinsert scripts into the stripped HTML file.
def repack(htmlfile, jslist, jsdir=None):
  htmlfl = open(htmlfile, 'r')
  htmltext = htmlfl.read()
  htmlfl.close()
  soup = bs4.BeautifulSoup(htmltext)

  listfl = open(jslist, 'r')
  jsitems =listfl.readlines()
  listfl.close()
  # Get the directory that the paths are relative to.
  if jsdir is None:
    jsdir = os.path.dirname(jslist)

  for jsitem in jsitems:
    jsitem = jsitem.strip()
    if jsitem == '':
      continue
    if jsitem.startswith('#'):
      continue
    jsparts = jsitem.split(':')
    if len(jsparts) != 3:
      err('Invalid script specification: %s' % jsitem)
      continue
    
    jstype, jsid, jspath = jsparts
    jspath = os.path.join(jsdir, jspath)

    jsfl = open(jspath, 'r')
    jstext = jsfl.read()
    jsfl.close()

    elt = soup.find(id=jsid)
    if elt is None:
      err('No element found with id: %s' % jsid)
      continue

    if VERBOSE:
      out('Repacking type: %s, id: %s, element: %s / %s' % (jstype, jsid, re.sub('\n', ' ', str(elt))))

    if jstype == 'script.src':
      elt.string = jstext
    elif jstype == 'script.inline':
      elt.string = jstext
    elif jstype == 'script.href':
      elt['href'] = 'javascript:' + re.sub('\n', ' ', jstext)
    elif jstype.startswith('script.event.'):
      event = jstype[13:]
      eventattr = 'on' + event
      elt[eventattr] = re.sub('\n', ' ', jstext)

  return soup.prettify()

def main():
  parser = OptionParser(usage="%prog HTMLFILE JSLIST")
  parser.add_option('-v', '--verbose', action='store_true', default=False, dest='verbose', help='verbose output')
  parser.add_option('--vv', action='store_true', default=False, dest='veryverbose', help='very verbose output')
  parser.add_option('-o', '--outfile', action='store', default=None, dest='outfile', help='output file')
  parser.add_option('-d', '--jsdir', action='store', default=None, dest='jsdir', help='script directory')
  parser.add_option('-f', '--force', action='store_true', default=False, dest='force', help='overwrite output file')

  opts, args = parser.parse_args()

  if len(args) != 2:
    parser.error("Invalid number of arguments")

  #global cfg
  #cfg = imp.load_source("cfg", args[0])
  #assert os.path.isdir(cfg.SOURCEDIR), "Source path %s doesn't exist." % cfg.SOURCEDIR

  htmlfile = os.path.abspath(args[0])
  if not os.path.isfile(htmlfile):
    fatal("HTMLFILE argument is not a file")
  jslist = os.path.abspath(args[1])
  if not os.path.isfile(jslist):
    fatal("JSLIST argument is not a file")

  outfile = opts.outfile
  if outfile is not None:
    if os.path.exists(outfile):
      if not os.path.isfile(outfile) or not opts.force:
        fatal('Output file %s exists, use -f to overwrite' % outfile)

  global VERYVERBOSE, VERBOSE
  VERYVERBOSE = opts.veryverbose
  VERBOSE = opts.verbose

  newhtml = repack(htmlfile, jslist, jsdir=opts.jsdir)

  if outfile is None:
    outfl = sys.stdout
  else:
    outfl = open(outfile, 'w')

  outfl.write(newhtml)


if __name__ == "__main__":
  main()
