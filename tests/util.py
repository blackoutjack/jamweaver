import sys
import subprocess
from subprocess import PIPE
from subprocess import STDOUT
from config import *

#
# This file contains some general-purpose
# utility functions that can be used by other 
# Python scripts.
#

# Parse an individual time value of the form "123m45.678s" and return
# the total number of seconds as a float.
def parse_time_value(timestr):
  timestr = timestr.strip()
  if timestr[-1:] == 's':
    timestr = timestr[:-1]

  # %%% Use some kind of regex parsing.
  timestrsplit = timestr.split('m')
  timeparts = []
  for timepart in timestrsplit:
    timecolonparts = timepart.split(":")
    for tmpart in timecolonparts:
      timeparts.append(tmpart)
  
  total = 0.0;
  for i in range(0, len(timeparts)):
    idx = -1 - i
    part = timeparts[idx]
    try:
      partnum = float(part)
    except:
      err("Non-float time value: %s" % part)
      return None
      
    if i == 0:
      # Seconds
      val = partnum
    elif i == 1:
      # Minutes
      val = 60 * partnum
    elif i == 2:
      # Hours
      val = 3600 * partnum
    else:
      err("How are days formatted? %s" % part)
      return None

    total += val
      
  return total

# Parse the output of the bash time utility.
# The element param can be one of ["real","user","sys","cpu"]
# where "cpu" is the sum of "sys" and "user".
# If element is None, return a dict containing the
# "real", "sys" and "user" values.
def parse_time_output(timeout, sep1=" ", sep2=":", element=None):
  vals = {}
  tmlns = timeout.split(sep1)
  for tmln in tmlns:
    tmparts = tmln.split(sep2,1)
    if len(tmparts) != 2:
      err("Invalid time value: %s" % tmln)
      continue
    key = tmparts[0].strip()
    if key in ["real", "user", "sys"]:
      timeval = parse_time_value(tmparts[1])
      if timeval is not None:
        vals[key] = timeval
    # The string passed as timeout may contain and arbitrary suffix.
    if len(vals) == 3:
      break

  # Sanity check to make sure all values are accounted for.
  if len(vals) != 3:
    err("Unable to parse time output.")
    return False

  # Return the specified value.
  if element is None:
    return vals
  if element in vals:
    return vals[element]
  if element == "cpu":
    return vals["user"] + vals["sys"]
  else:
    err("Invalid time key: %s" % element)
    return False

def err(txt):
  print >> sys.stderr, "ERROR:", txt
  sys.stderr.flush()

def out(txt):
  print >> sys.stderr, "INFO: ", txt
  sys.stderr.flush()

def warn(txt):
  print >> sys.stderr, "WARNING:", txt
  sys.stderr.flush()

def env_error(varname):
  err(varname + "is not a valid directory: " + eval(varname))

def make(target, workingdir=JAMPKG):
  outfl = open('/dev/null', 'w')
  cmd = ['make', '-C', workingdir, target]
  mk = subprocess.Popen(cmd, stdout=PIPE, stderr=STDOUT)
  mkout = mk.communicate()[0]
  mkret = mk.returncode

  if mkret != 0:
    err("There was an problem making " + target + ".")
    err(mkout)

def get_dir_parts(dirfile):  
  dirparts = dirfile.rsplit('-', 1)
  app = dirparts[0]
  try:
    version = int(dirparts[1])
  except:
    warn("Non-integer version part of directory: %s" % dirfile)
    version = None
  return {'app': app, 'version': version, 'dir': dirfile}

# Sort so that a particular app's results are in order.
def sort_dirs(apps, dirs):
  sorted_dirs = {}
  for d in dirs:
    info = get_dir_parts(d)
    vers = info['version']
    if vers is None:
      continue
    app = info['app']
    if app not in apps:
      continue

    if app not in sorted_dirs:
      sorted_dirs[app] = [] 

    app_dirs = sorted_dirs[app]
    idx = None
    for i in range(0, len(app_dirs)):
      comp = app_dirs[i]
      if vers < comp['version']:
        idx = i
        break
    if idx is None:
      app_dirs.append(info)
    else:
      app_dirs.insert(idx, info)

  return sorted_dirs

def get_source_info(srcdir, bases):
  # Assumes that directories within |srcdir| are of the form "app-iter",
  # where "iter" is a label to separate the results of multiple analyses
  # for one application. Only the most recent result for each app is
  # transferred.
  resultsdirs = os.listdir(srcdir)

  # Map the application name to a triple consisting of the output
  # version, source file and policy file. If a more recent analysis of
  # the app is encountered, it will replace the older one.
  appfiles = {}

  resultsdirs = sort_dirs(bases, resultsdirs)
  for app, dirlist in resultsdirs.iteritems():
    appfiles[app] = { 'version': None }
    appinfo = appfiles[app]
    for dirinfo in dirlist:
      dirpath = os.path.join(srcdir, dirinfo['dir'])
      if not os.path.isdir(dirpath):
        warn("Non-directory file encountered in source directory: %s" % dirfile)
        continue

      version = dirinfo['version']
      appinfo['version'] = version

      polfile = os.path.join(dirpath, 'policy.js')
      if os.path.isfile(polfile):
        appinfo['policy'] = polfile
      modpolfile = os.path.join(dirpath, 'modular.policy.js')
      if os.path.isfile(modpolfile):
        appinfo['modular.policy'] = modpolfile
      instrpolfile = os.path.join(dirpath, 'instrumented.policy.js')
      if os.path.isfile(instrpolfile):
        appinfo['instrumented.policy'] = instrpolfile

      keys = ['original','closure','preprocessed','isolated','post','instrumented','transformed','optimized','formtransed']

      for key in keys:
        keyfile = os.path.join(dirpath, app + '-' + key + '.js')
        if os.path.isfile(keyfile):
          appinfo[key] = keyfile

  return appfiles

def load_sources(from_dir, srcsuf='.js', excludesuf='.exp.js'):
  allfls = os.listdir(from_dir)
  # Sort the files so that tests are run in a consistent order.
  allfls.sort()
  srcpaths = []
  for flname in allfls:
    # Skip files that aren't suffixed with |srcsuf|.
    if srcsuf is not None and not flname.endswith(srcsuf):
      continue
    # Skip files ending with |srcsuf|.
    if excludesuf is not None and flname.endswith(excludesuf):
      continue
    srcpath = os.path.join(from_dir, flname)
    srcpaths.append(srcpath)

  return srcpaths
  

def load_seeds(from_dir, base_name):
  seedfile = os.path.join(from_dir, base_name + ".seeds")
  if os.path.isfile(seedfile):
    return seedfile
  return None

def load_policies(from_dir, base_name, polsuf='.policy'):
  ret = {}
  for polname in os.listdir(from_dir):
    if not polname.endswith(polsuf):
      continue
    if not polname.startswith(base_name + '.'):
      continue
    polbase = get_base(polname)
    
    if polbase == base_name:
      # Strip the base, the suffix, and surrounding dots. This could
      # result in the empty string, but that's no problem.
      key = polname[len(base_name)+1:-len(polsuf)]
      ret[key] = os.path.join(from_dir, polname)

  return ret

def run_jam(jspath, policies, refine=0, debug=False, perf=True, seeds=None, lib=True, moreopts=[]):
  # Print the name of the file being analyzed.
  jsname = os.path.basename(jspath)
  print jsname
  sys.stdout.flush()

  if perf:
    cmd = ['/usr/bin/time', '-f', 'real:%Es user:%Us sys:%Ss maxrss:%MKB']
  else:
    cmd = []

  if debug:
    cmd.extend(JAMDBGCOMMAND)
  else:
    cmd.extend(JAMCOMMAND)

  # The refine param can specify a predicate limit or unlimited/no
  # refinement.
  cmd.append('-p')
  cmd.append(str(refine))

  if debug:
    cmd.append('-g')
    cmd.append('-b')
  else:
    # Always save a record of the queries.
    cmd.append('-G')

  if not lib:
    # Run in stand-alone mode
    cmd.append('-m')

  cmd.extend(moreopts)

  # Output node counts.
  cmd.append('-C')

  #cmd.append('-P')
  cmd.append('-v')
  cmd.append('2')
  #cmd.append('-I')
  #cmd.append('-O')
  #cmd.append('-F')
  #cmd.append('-f')
  #cmd.append('--bddformat')
  #cmd.append('1')
  #cmd.append('-e')
  #cmd.append('-i')
  #cmd.append('-r')
  cmd.append('-t')
  cmd.append('6')
  #cmd.append('--noindirect')
  #cmd.append('-T')
  #cmd.append('3')
  #cmd.append('-R')
  #cmd.append('3')

  # Use a seeded predicate file if given.
  if seeds is None:
    cmd.append('-c')
  else:
    cmd.append('-j')
    cmd.append('-l')
    cmd.append('-d')
    cmd.append(seeds)

  cmd.append(jspath)
  cmd.extend(policies)

  # Display the command that's being invoked.
  print " ".join(cmd)
  sys.stdout.flush()

  outfl = tempfile.TemporaryFile('r+')
  # Let the user see the debugging output, demonstrating progress.
  jam = subprocess.Popen(cmd, stdout=PIPE)

  outp = jam.communicate()[0]
  # Little hack to remove a debug message.
  if outp.startswith("Listening for transport"):
    endl = outp.find("\n") + 1
    outp = outp[endl:]

  return outp

def get_file_info(filepath):
  return {
    'app': get_base(filepath),
    'desc': get_descriptors(filepath),
    'ext': get_ext(filepath)
  }

def get_ext(filepath):
  parts = os.path.splitext(filepath)
  return parts[1]

# Get the internal dot-separated components of the filepath.
# E.g. "path/app.jam.more.extra.js" => ['jam', 'more', 'extra'].
def get_descriptors(filepath):
  filename = os.path.basename(filepath)
  fileparts = filename.split('.')
  desc = []
  if len(fileparts) > 2:
    for i in range(1, len(fileparts) - 1):
      desc.append(fileparts[i])
  return desc

# Get the first dot-separated component of a filename or filepath.
def get_base(filepath):
  filename = os.path.basename(filepath)
  fileparts = filename.split('.', 1)
  base = fileparts[0]
  return base

def get_exp_path(testcase, suf='.exp'):
  base = get_base(testcase)
  path = os.path.dirname(testcase)
  basepath = os.path.join(path, base)
  expfile = basepath + suf
  return expfile

def get_variant_bases(directory):
  apps = load_sources(directory)
  bases = []
  for app in apps:
    base = get_base(app)
    pols = load_policies(directory, base)
    if len(pols) == 0:
      bases.append(base)
    else:
      for poldesc, pol in pols.iteritems():
        if poldesc != '':
          bases.append(base + '-' + poldesc)
        else:
          bases.append(base)
  return bases

def get_ast(filename):
  cmd = []
  cmd.extend(JAMUTILCOMMAND)
  cmd.append("ast")
  cmd.append("-l")
  cmd.append(filename)

  util = subprocess.Popen(cmd, stdout=PIPE, stderr=PIPE)
  astout, asterr = util.communicate()  
  return astout.strip()

def overwrite_expected(srcfl, outp, suf):
  if validate_output(srcfl, outp, suf) == "ok":
    return "unchanged"
  
  expfile = get_exp_path(srcfl, suf)
  expfl = open(expfile, 'w')
  print >> expfl, outp,
  expfl.close()
  return "overwritten"

def run_query(query):
  qbase = "assert(library_directory('%s')).\n" % LIBDIR
  query = qbase + query
  xsb = subprocess.Popen([XSBEXE, "--quietload", "--noprompt", "--nobanner"], stdout=PIPE, stderr=PIPE, stdin=PIPE)
  xsbout, xsberr = xsb.communicate(query)  
  return xsbout

def validate_value(inp, outp, expsuf='.exp'):
  expfile = get_exp_path(inp, expsuf)
  if not os.path.exists(expfile):
    return "missing .exp"

  expfl = open(expfile, 'r')
  exp = expfl.read().strip()

  lines = outp.split("\n")
  for ln in lines:
    if ln[:8] == "VALUE = ":
      act = ln[8:].strip()
      if act == exp:
        return "ok"
      else:
        return "wrong: " + act + " !== " + exp

  return "fail"

# Compare the resulting source code of a run to the expected output.
def validate_output(inp, outp, expsuf=".exp.js"):
  expfile = get_exp_path(inp, expsuf)

  if not os.path.exists(expfile):
    return "missing " + expsuf

  expfl = open(expfile, 'r')
  exp = expfl.read().strip()
  outp = outp.strip()

  if outp == exp:
    return "ok"
  else:
    #print >> sys.stderr, "OUTPUT:", outp
    #print >> sys.stderr, "EXPECT:", exp
    return "wrong"

def evaluate_file(filename, verbose=False):
  ast = get_ast(filename)
  #code = code.replace("'", "''").strip()
  #code = code.replace("\\", "\\\\").strip()

  query = '''
[jsc].
env_init(H0,L0),
exp(H0,L0,%s,H1,L1,V),
ecgv(H1,L1,V,H2,L2,VALUE).''' % ast

  if verbose: print "\nQUERY:\n", query

  output = run_query(query)

  if verbose: print "OUTPUT:\n", output

  return output

def run_tx(jspath, policies, jscmd, perf=True, debug=False, moreopts=[]):
  # Print the name of the file being analyzed.
  if debug:
    jsname = os.path.basename(jspath)
    print jsname
    sys.stdout.flush()

  if perf:
    # Use --quiet flag since some test cases expect exceptions and
    # therefore non-zero exit code.
    cmd = ['/usr/bin/time', '--quiet', '-f', '"real:%Es user:%Us sys:%Ss maxrss:%MKB"']
    cmd.append(jscmd)
  else:
    cmd = [jscmd]
  cmd.extend(moreopts)

  # Load the JAMScript library
  cmd.append('-f')
  cmd.append(TXLIB)

  # Load the JAMScript debug extensions
  if debug:
    cmd.append('-f')
    cmd.append(TXDBGLIB)

  # Load the files containing the policy iBlocks.
  for pol in policies:
    cmd.append('-f')
    cmd.append(pol)

  cmd.append('-f')
  cmd.append(jspath)

  if (debug):
    # Display the command that's being invoked.
    print " ".join(cmd)

  outfl = tempfile.TemporaryFile('r+')

  # Combine stderr and stdout so that exception output is collected.
#  if perf:
#    errstrm = PIPE
#  elif debug:
#    errstrm = open('/tmp/tx.err', 'w')
#  else:
#    errstrm = DEVNULL
  errstrm = subprocess.STDOUT
  
  # Let the user see the debugging output, demonstrating progress.
  jam = subprocess.Popen(cmd, stdout=PIPE, stderr=errstrm)

  outp, errp = jam.communicate()
  outp = outp.strip()
  if perf:
    outlines = outp.split("\n")
    timeline = outlines[-1].strip("\"")
    outp = "\n".join(outlines[:-1])
    print "cpu:", str(parse_time_output(timeline, element="cpu")) + "s"
  
  # To portably analyze exception output, make absolute paths relative.
  outp = outp.replace(JAMSCRIPTDIR + "/", "")

  return outp

