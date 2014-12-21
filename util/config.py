import sys
import os
import subprocess
from subprocess import PIPE
from optparse import OptionParser
import tempfile

#
# This file contains various values (mostly paths)
# that can be imported into other Python scripts.
#

PYTHON_VERSION = sys.version_info

JAMPKG = os.getenv('JAMPKG')
JAMSCRIPT_DIR = os.path.join(JAMPKG, 'jamscript')
TESTS_DIR = os.path.join(JAMPKG, 'tests')

SRCDIR = os.path.join(JAMPKG,'src')
LIBDIR = os.path.join(JAMPKG,'lib')
BINDIR = os.path.join(JAMPKG,'bin')
DOCDIR = os.path.join(JAMPKG,'doc')
OUTDIR = os.path.join(JAMPKG,'output')
XSBDIR = os.path.join(JAMPKG,'XSB')
XSBEXE = os.path.join(XSBDIR,"bin","xsb")
YICESDIR = os.path.join(JAMPKG,'yices-1.0.35')
V8DIR = os.path.join(JAMPKG,'v8')
JSDIR = os.path.join(JAMPKG,'js-1.8.5')
JSONDIR = os.path.join(JAMPKG,'libjson')
WALIDIR = os.path.join(JAMPKG,'wali')
UTILDIR = os.path.join(JAMPKG, 'util')
PERFDIR = os.path.join(JAMPKG, 'perf')
UNPACKDIR = os.path.join(JAMPKG, 'unpacked')
UNPACK_SCRIPT = os.path.join(UTILDIR, 'unpack.py')
REPACK_SCRIPT = os.path.join(UTILDIR, 'repack.py')

TEST_GROUPS = ['micro', 'bench', 'sites', 'exploit']
BENCHMARK_DIR = os.path.join(TESTS_DIR, 'bench')
MICROBENCHMARK_DIR = os.path.join(TESTS_DIR, 'micro')
EXPLOIT_DIR = os.path.join(TESTS_DIR, 'exploit')
POLICY_DIR = os.path.join(TESTS_DIR, 'policy')
WEBSITE_DIR = os.path.join(TESTS_DIR, 'sites')
WEBSITE_FILE = os.path.join(WEBSITE_DIR, 'sites.txt')
INTERPRETER_TEST_DIR = os.path.join(TESTS_DIR, 'interpreter')

DEFAULT_POLICY = os.path.join(BENCHMARK_DIR, 'default.policy')

JAMSCRIPT_DOCDIR = os.path.join(JAMSCRIPT_DIR, 'doc')
JSLIBDIR = os.path.join(JAMSCRIPT_DIR, 'txjs')
JAMSCRIPT_LIB = os.path.join(JSLIBDIR, 'libTx.js')
JAMSCRIPT_DBGLIB = os.path.join(JSLIBDIR, 'libTxDbg.js')
JAMSCRIPT_TESTDIR = os.path.join(JAMSCRIPT_DIR, 'tests', 'js')
SMS2DIR = os.path.join(TESTS_DIR, 'bench', 'sms2')
JAMSCRIPT_BUILDDIR = os.path.join(JAMSCRIPT_DIR, 'mozilla-esr17', 'obj-release', 'browser')
JS_COMMAND = os.path.join(JAMSCRIPT_BUILDDIR, 'dist', 'bin', 'js')

# The command (minus input arguments) used to invoke JAM.
# This should be list which can be used with subprocess.
JAMPROCJAR = os.path.join(BINDIR, "jam.jar")
JAMSVCJAR = os.path.join(BINDIR, "jamsvc.jar")
JAMCOMMAND = os.getenv('JAMCOMMAND', 'java -ea -Xms256m -Xmx3072m -jar ' + JAMPROCJAR).split(' ')
JAMSVCCOMMAND = os.getenv('JAMSVCCOMMAND', 'java -ea -Xms256m -Xmx3072m -jar ' + JAMSVCJAR).split(' ')
JAMDBGCOMMAND = os.getenv('JAMDBGCOMMAND', 'java -ea -Xms256m -Xmx3072m -Xdebug -agentlib:jdwp=transport=dt_socket,address=localhost:9009,server=y,suspend=n -jar ' + JAMPROCJAR).split(' ')
JAMSVCDBGCOMMAND = os.getenv('JAMSVCDBGCOMMAND', 'java -ea -Xms256m -Xmx3072m -Xdebug -agentlib:jdwp=transport=dt_socket,address=localhost:9009,server=y,suspend=n -jar ' + JAMSVCJAR).split(' ')
JAMUTILJAR = os.path.join(BINDIR, "util.jar")
JAMUTILCOMMAND = os.getenv('JAMUTILCOMMAND', 'java -jar ' + JAMUTILJAR).split(' ')
JAMPORT = 11211

# Benchmark applications that will blow up interprocedural analysis.
LARGE_BENCHMARKS = [
  'googlemaps',
  'phylojive',
  'octane',
  'octane-mandreel',
  'octane-pdf',
  'octane-typescript',
]

# Keys for source code output produced by JAM analysis.
RESULT_SOURCE_KEYS = [
  'closure',
  'normalized',
  'instrumented',
  'indirection',
  'collapsed',
  'optimized',
]

# Source keys for which a profile variant should be created.
PROFILE_SOURCE_KEYS = [
  'input',
  'closure',
  'normalized',
  'instrumented',
  'indirection',
  'collapsed',
  'optimized',
]

# Source keys for which a coarse-grained variant should be created.
COARSE_SOURCE_KEYS = [
  'input',
  'normalized',
  'closure',
]

# Configure files that are symlinked in woven test case directories. 
SYMLINK_FILES = [
  (JAMSCRIPT_LIB, None),
  (os.path.join(TESTS_DIR, 'test.php'), None),
  (os.path.join(TESTS_DIR, 'testindex.php'), 'index.php'),
  (os.path.join(TESTS_DIR, 'auto.js'), None),
]

# Operating system specific configuration
# %%% Though JAM certainly only works on Linux currently.
# %%% Need a test to differentiate Linux and FreeBSD.
if os.path.exists('/dev/null'):
  OS = 'Linux'
  DEVNULL = open('/dev/null', 'w')
else:
  OS = 'Windows'
  DEVNULL = open('nul', 'w')
  sys.stderr.write("JAM is not supported on Windows.\n")

