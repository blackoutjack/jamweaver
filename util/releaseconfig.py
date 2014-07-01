import os
import sys

JAMPKG = os.environ['JAMPKG']
sys.path.append(os.path.join(os.environ['JAMPKG'], 'tests'))
from config import *

OUTDIR = os.path.join(JAMPKG, "..", "jam-release")

# The filter specifies a pattern that files must match. If the last
# parameter is True, the match must be at the end of the filename.
# ("/absolute/source/dir", "relative/destination/dir" [,"filter" [,True|False]])
FILES_TO_COPY = [
  (DOCDIR, "doc/"),
  (LIBDIR, "lib/"),
  (BINDIR, "bin/"),
  (TESTDIR, "tests/", ".py", True),
  (os.path.join(JAMPKG, "util", "debugger.P"), os.path.join("util", "debugger.P")),
  (os.path.join(JAMPKG, "util", "transfer_results.py"), os.path.join("util", "transfer_results.py")),
  (os.path.join(JAMPKG, "util", "transferconfig.py"), os.path.join("util", "transferconfig.py")),
  (os.path.join(WALIDIR, "lib64/"), os.path.join("wali", "lib64/"), ".so"),
  (os.path.join(TESTDIR, "micro-benchmarks/"), os.path.join("tests", "micro-benchmarks/")),
  (os.path.join(TESTDIR, "interpreter/"), os.path.join("tests", "interpreter/")),
  (os.path.join(TESTDIR, "benchmarks/"), os.path.join("tests", "benchmarks/")), 
  (os.path.join(JAMPKG, "README"), "README"),
  (os.path.join(JAMPKG, "LICENSE"), "LICENSE"),
  (os.path.join(JAMPKG, "closure-patch/"), "closure-patch/"),
]

