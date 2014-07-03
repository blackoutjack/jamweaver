import os
import sys

JAMPKG = os.environ['JAMPKG']
sys.path.append(os.path.join(os.environ['JAMPKG'], 'tests'))
from config import *
from util import get_base
from util import load_sources

#VARIANTS = ['original', 'formtransed', 'transformed']
#VARIANT_DISPLAY = ['unprotected', 'without indirect', 'with indirect']
VARIANTS = ['original', 'original.modular', 'transformed']
VARIANT_DISPLAY = ['unprotected', 'coarse-grained', 'fine-grained']
RESULTS_SOURCE = os.path.join(PERFDIR, 'times');
#TEST_DIR = 'jamscript/tests/apps/'
TEST_DIR = 'jamscript/tests/browser/bench/'
PROFILE_MARKER = "<<<<< Profile: "
PROFILE_MARKER_TAIL = " >>>>>"
SECTION_MARKER = "===== "
SECTION_MARKER_TAIL = " ====="
STACK_MARKER = "#"
TIME_SECTION_NAME = "Time elapsed"
ERROR_MARKER = "JavaScript error: "
JUNK_MARKERS = [
  "++DOCSHELL",
  "++DOMWINDOW",
  "WARNING: ",
  "JavaScript strict warning: ",
  "###!!! ASSERTION: ",
  "LoadPlugin() ",
  "--DOMWINDOW",
  "--DOCSHELL",
  "pldhash: ",
  "chrome://",
  "resource://",
  "file://",
  "http://",
  "=> m",
  "NOTE: ",
]

