# This configuration copies files from the release directory into the
# development repository. Turns out to be useful when, for example,
# when running experiments in a release setting and making changes on
# the fly.

import os
import sys

JAMPKG = os.environ['JAMPKG']
sys.path.append(os.path.join(os.environ['JAMPKG'], 'tests'))
from config import *

srcdir = os.path.join(JAMPKG, "..", "jam-release")
OUTDIR = JAMPKG

# The filter specifies a pattern that files must match. If the last
# parameter is True, the match must be at the end of the filename.
# ("/absolute/source/dir", "relative/destination/dir" [,"filter" [,True|False]])
FILES_TO_COPY = [
  (os.path.join(srcdir, "doc/"), "doc/"),
  # Can't really update these binaries in the release context.
  #(os.path.join(srcdir, "lib/"), "lib/"),
  #(os.path.join(srcdir, "bin/"), "bin/"),
  #(os.path.join(WALIDIR, "lib64/"), os.path.join("wali", "lib64/"), ".so"),
  (os.path.join(srcdir, "tests/"), "tests/", ".py", True),
  (os.path.join(srcdir, "util", "debugger.P"), os.path.join("util", "debugger.P")),
  (os.path.join(srcdir, "util", "transfer_results.py"), os.path.join("util", "transfer_results.py")),
  (os.path.join(srcdir, "util", "transferconfig.py"), os.path.join("util", "transferconfig.py")),
  (os.path.join(srcdir, "tests", "micro-benchmarks/"), os.path.join("tests", "micro-benchmarks/")),
  (os.path.join(srcdir, "tests", "interpreter/"), os.path.join("tests", "interpreter/")),
  (os.path.join(srcdir, "tests", "benchmarks/"), os.path.join("tests", "benchmarks/")), 
  (os.path.join(srcdir, "README"), "README"),
  (os.path.join(srcdir, "LICENSE"), "LICENSE"),
  (os.path.join(srcdir, "closure-patch/"), "closure-patch/"),
]


