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

JAMPKG = os.getenv('JAMPKG')

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
TESTDIR = os.path.join(JAMPKG, 'tests')
PERFDIR = os.path.join(JAMPKG, 'perf')
BENCHMARK_DIR = os.path.join(TESTDIR, 'benchmarks')
MICROBENCHMARK_DIR = os.path.join(TESTDIR, 'micro-benchmarks')
INTERPRETER_TEST_DIR = os.path.join(TESTDIR, 'interpreter')
JAMSCRIPT_DIR = os.path.join(JAMPKG, 'jamscript')

# The command (minus input arguments) used to invoke JAM.
# This should be list which can be used with subprocess.
JAMJAR = os.path.join(BINDIR, "jam.jar")
JAMCOMMAND = os.getenv('JAMCOMMAND', 'java -ea -Xms256m -Xmx3072m -jar ' + JAMJAR).split(' ')
JAMDBGCOMMAND = os.getenv('JAMDBGCOMMAND', 'java -ea -Xms256m -Xmx3072m -Xdebug -agentlib:jdwp=transport=dt_socket,address=localhost:9009,server=y,suspend=n -jar ' + JAMJAR).split(' ')
JAMUTILJAR = os.path.join(BINDIR, "util.jar")
JAMUTILCOMMAND = os.getenv('JAMUTILCOMMAND', 'java -jar ' + JAMUTILJAR).split(' ')

# Operating system specific configuration
# %%% Though JAM certainly only works on Linux currently.
# %%% Need a test to differentiate Linux and FreeBSD.
if os.path.exists('/dev/null'):
	OS = 'Linux'
	DEVNULL = open('/dev/null', 'w')
else:
	OS = 'Windows'
	DEVNULL = open('nul', 'w')
	print >> sys.stderr("JAM is not supported on Windows.")

