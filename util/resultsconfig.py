import os
import sys

JAMPKG = os.environ['JAMPKG']
sys.path.append(os.path.join(os.environ['JAMPKG'], 'tests'))
from config import *
from util import get_base
from util import load_sources
from util import err
from util import out
from util import warn
from util import sort_dirs
from util import get_variant_bases

# Include the "init" time in the "load" time, or report separately.
INCLUDE_INIT = False

SOURCEDIR = OUTDIR
APPBASES = get_variant_bases(BENCHMARK_DIR)

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

DISABLED = [
  'sms2', 'sms2-template', 'txjs', 'kraken-results', 'jssec',
  'jssec-bad', 'jsbeautifier', 'jsqrcode-mal', 'snote-mini',
  'kraken-mega', 'kraken-mega2', 'sunspider-mega', 'sunspider-mega2',
  'jsbench-yahoo-safari-urem', 'jsbench-yahoo-firefox-urem',
  'jsbench-yahoo-chrome-urem', 'jsbench-twitter-chrome-urem',
  'octane-pdf', 'octane-zlib', 'octane-zlib-eval', 'octane-eb',
  'octane-gb', 'octane-mandreel', 'octane-codeload',
  'octane-typescript', 'octane', 'googlemaps', 'jsqrcode-get',
  'squirrelmail-bad',
]

POLDESCS = {
  'squirrelmail': 'disallow access to src property',
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
