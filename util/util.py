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
  
  total = 0.0
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

def get_unique_filename(origpath):
  dirpath, filename = os.path.split(origpath)
  if not os.path.exists(dirpath):
    # Easy case: the original path is available.
    return origpath

  if not os.path.isdir(dirpath):
    dirparts = []
    # Climb the directory structure to see if there are conflicts.
    dirpart = dirpath
    while dirpart != '':
      # %%% Maybe need special handling for symlinks?
      if os.path.isdir(dirpart):
        break
      if os.path.isfile(dirpart):
        # Rename the directory.
        pathprefix = dirpart
        dirpart, lastpart = os.path.split(dirpart)
        dirparts.insert(0, lastpart)
        idx = 0
        while os.path.isfile(pathprefix):
          # Make an altered directory name.
          newlastpart = lastpart + '-' + str(idx)
          pathprefix = os.path.join(dirpart, newlastpart)
          idx += 1

        newfilepath = pathprefix
        for suffixpart in dirparts:
          newfilepath = os.path.join(newfilepath, suffixpart)

        if os.path.isdir(pathprefix):
          # Need to make sure the new path is available.
          return get_unique_filename(newfilepath)
        origpath = newfilepath
        break

      dirpart, lastpart = os.path.split(dirpart)
      dirparts.insert(0, lastpart)

    # Getting here means the original path is available.
    return origpath

  filebase, fileext = os.path.splitext(filename)
  newfilepath = origpath
  idx = 0
  while os.path.exists(newfilepath):
    # Make an altered filename.
    newfilebase = filebase + '-' + str(idx)
    newfilename = newfilebase + fileext
    newfilepath = os.path.join(dirpath, newfilename)
    idx += 1

  return newfilepath

def get_output_dir(top, base):
  parts = base.split('/')
  dirparts = parts[:-1]

  parent = top
  for dirpart in dirparts:  
    parent = os.path.join(parent, dirpart)

  lastpart = parts[-1]
  nextId = 0
  if os.path.isdir(parent):
    for curdir in os.listdir(parent):
      if curdir.startswith(lastpart + '-'):
        idx = curdir[len(lastpart)+1:]
        try:
          idxnum = int(idx)
          if idxnum >= nextId:
            nextId = idxnum + 1
        except:
          warn('Non-numeric suffix, ignoring: %s' % idx)
  dirparts.append(lastpart + '-' + str(nextId))

  ret = top
  for dirpart in dirparts:
    ret = os.path.join(ret, dirpart)
  return ret

def fatal(txt, code=1):
  sys.stderr.write("FATAL: %s\n" % txt)
  sys.exit(code)

def err(txt):
  sys.stderr.write("ERROR: %s\n" % txt)
  sys.stderr.flush()

def out(txt):
  sys.stderr.write("INFO: %s\n" % txt)
  sys.stderr.flush()

def warn(txt):
  sys.stderr.write("WARNING: %s\n" % txt)
  sys.stderr.flush()

def env_error(varname):
  err(varname + "is not a valid directory: " + eval(varname))

def make(target, workingdir=JAMPKG):
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
# %%% This needs simplifying!
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
# /sort_dirs

# %%% This needs simplifying!
def get_result_info(resdir, app):
  # Assumes that directories within |resdir| are of the form "app-iter",
  # where "iter" is a label to separate the results of multiple analyses
  # for one application. Only the most recent result for each app is
  # transferred.
  resultdirs = os.listdir(resdir)
  resultdirs = sort_dirs([app], resultdirs)

  if app not in resultdirs:
    warn('No results found for %s' % app)
    return None

  appinfo = {'version': None}
  appresults = resultdirs[app]
    
  # Each element of |appresults| is a triple of directory information
  # consisting of application, results version, and directory name.
  # Just extract the last one.
  dirinfo = appresults[-1]
  dirpath = os.path.join(resdir, dirinfo['dir'])
  if not os.path.isdir(dirpath):
    warn("Non-directory encountered in results: %s" % dirfile)
    return None

  version = dirinfo['version']
  appinfo['version'] = version

  appinfo['dir'] = dirpath

  polfile = os.path.join(dirpath, 'policy.js')
  if os.path.isfile(polfile):
    appinfo['policy'] = polfile
  modpolfile = os.path.join(dirpath, 'modular.policy.js')
  if os.path.isfile(modpolfile):
    appinfo['modular.policy'] = modpolfile

  fullfile = os.path.join(dirpath, '%s.js' % app)
  if os.path.isfile(fullfile):
    appinfo['full'] = fullfile
  else:
    warn('Unable to locate full script file: %s' % fullfile)

  for key in SOURCE_KEYS:
    keydir = os.path.join(dirpath, 'source-%s' % key)
    if os.path.isdir(keydir):
      jslist = []
      appinfo[key] = jslist
      for jsfile in os.listdir(keydir):
        if jsfile.endswith('.js'):
          jspath = os.path.join(keydir, jsfile)
          jslist.append(jspath)

  # Parse the run's information file into a dictionary.
  infofile = os.path.join(dirpath, 'info.txt')
  if os.path.exists(infofile):
    appinfo['info'] = infofile

  return appinfo
# /get_result_info

def get_results_info(resdir, bases):
  # Map the application name to a triple consisting of the output
  # version, source file and policy file. If a more recent analysis of
  # the app is encountered, it will replace the older one.
  appfiles = {}

  bases.sort()
  for app in bases:
    info = get_result_info(resdir, app)
    if info is not None:
      appfiles[app] = info

  return appfiles
# /get_results_info

def compare_info(actinfo, expinfo):
  keys = actinfo.keys()
  keys.extend(expinfo.keys())
  keys = set(keys)
  disparities = {}
  for key in keys:
    if key not in actinfo:
      disparities[key] = 'missing'
    elif key not in expinfo:
      disparities[key] = 'additional'
    elif actinfo[key] != expinfo[key]:
      disparities[key] = 'wrong'
  return disparities 

def parse_info_file(infofile):
  info = {}
  if os.path.isfile(infofile):
    infofl = open(infofile, 'r')
    infolines = infofl.readlines()
    infofl.close()
    for infoline in infolines:
      infoparts = infoline.split(':', 1)
      if len(infoparts) == 2:
        info[infoparts[0]] = infoparts[1]
      else:
        warn('Invalid info file line: %s' % infoline)
  return info

def load_sources(from_dir, srcsuf='.js', excludesuf='.exp.js'):
  allfls = os.listdir(from_dir)
  # Sort the files so that tests are run in a consistent order.
  allfls.sort()
  srcpaths = []
  for flname in allfls:
    # Skip files that aren't suffixed with |srcsuf|.
    if srcsuf is not None and not flname.endswith(srcsuf):
      continue
    # Skip files ending with |excludesuf|.
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

def load_policy(polpath):
  if polpath is None:
    polpath = DEFAULT_POLICY

  polpath = os.path.abspath(polpath)
  if not os.path.isfile(polpath):
    err("Unable to find policy file: %s" % (polpath))
    pols = {}
  else:
    pols = {'': polpath}

  return pols
# /load_policy

# Return a default policy dict object.
def load_default_policy(dirkey=None):
  if dirkey is not None and dirkey in DEFAULT_POLICIES:
    polpath = DEFAULT_POLICIES[dirkey]
  else:
    polpath = DEFAULT_POLICY
  return load_policy(polpath)
# /load_default_policy

# Scan the given directory for policy filenames that match the given
# basename. If a policy is not found, a part (delimited by '-', '.', or
# '_') is removed from the basename and the files are scanned again.
# This allows many similarly-named test cases use the same policy file.
# Finally, if no policy is found, the DEFAULT_POLICY is used.
def load_policies(fromdir, basename, polsuf='.policy', defwarn=True):
  polfiles = []
  for polname in os.listdir(fromdir):
    if polname.endswith(polsuf):
      polfiles.append(polname)

  ret = {}
  curbase = basename
  while len(ret) == 0:
    for polname in polfiles:
      if polname.startswith(curbase + '.'):
        polbase = get_base(polname)
        
        # Strip the base, the suffix, and surrounding dots. This could
        # result in the empty string, but that's no problem.
        key = polname[len(curbase)+1:-len(polsuf)]
        ret[key] = os.path.join(fromdir, polname)
    if len(ret) == 0:
      # Calculate the next shortest basename.
      idx0 = curbase.rfind('_')
      idx1 = curbase.rfind('.')
      idx2 = curbase.rfind('-')
      maxidx = max(idx0, idx1, idx2)
      if maxidx <= 0:
        if defwarn:
          warn('Using the default policy for %s' % basename)
        # Return this directly so we don't get into an infinite loop
        # in case the default policy file can't be found.
        return load_default_policy(fromdir)
      else:
        curbase = curbase[:maxidx]

  return ret
# /load_policies

def run_jam(jspath, policies, refine=0, debug=False, perf=True, seeds=None, lib=True, moreopts=[]):

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
  if not refine:
    refine = 0
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
  cmd.append('-Y')
  cmd.extend(policies)

  # Display the command that's being invoked.
  sys.stdout.write(" ".join(cmd))
  sys.stdout.write('\n')
  sys.stdout.flush()

  # Let the user see the debugging output, demonstrating progress.
  jam = subprocess.Popen(cmd, stdout=PIPE)

  outp = jam.communicate()[0]
  # Little hack to remove a debug message.
  if outp.startswith("Listening for transport"):
    endl = outp.find("\n") + 1
    outp = outp[endl:]

  return outp
# /run_jam

def run_repacker(htmlfile, srclist, outdir, polpath=None, debug=False):
  cmd = [REPACK_SCRIPT, htmlfile, srclist, '-d', outdir]
  if debug:
    cmd.append('-v')
  if polpath is not None:
    cmd.append('-p')
    cmd.append(polpath)

  repacker = subprocess.Popen(cmd, stdout=PIPE, stderr=PIPE)
  outp, errp = repacker.communicate()
  code = repacker.returncode
  if code != 0:
    out("OUTPUT: %s" % outp)
    out(errp)
    err('Non-zero error code repacking %s: %s' % (htmlfile, code))

  if debug:
    # Output repacker warnings and errors.
    lines = errp.split('\n')
    for line in lines:
        # Print warnings, errors, fatals and exception traces.
        if not line.startswith('INFO: '):
          # Just print, since the output type is already prepended.
          print(line)
  return outp

def run_unpacker(url, debug=False, saveall=False):
  
  cmd = [UNPACK_SCRIPT, url]
  if debug:
    cmd.append('-v')
  if saveall:
    cmd.append('-s')
 
  unpacker = subprocess.Popen(cmd, stdout=PIPE, stderr=STDOUT)
  outp = unpacker.communicate()[0]
  code = unpacker.returncode
  if code != 0:
    out(outp)
    err('Non-zero error code unpacking %s: %s' % (url, code))
    return None, None
  
  # %%% Ugly string searching. Instead, import and interact directly.
  lines = outp.split('\n')
  outdir = None
  app = None
  dirsearch = 'INFO: Output directory: '
  appsearch = 'INFO: Application name: '
  for line in lines:
    if debug:
      # Print warnings, errors, fatals and exception traces.
      if not line.startswith('INFO: '):
        print(line)
    if outdir is None:
      # Parse the output directory.
      if line.startswith(dirsearch):
        outdir = line[len(dirsearch):].strip()
    if app is None:
      # Parse the application name.
      if line.startswith(appsearch):
        app = line[len(appsearch):].strip()
    if not debug and app is not None and outdir is not None:
      break
  return app, outdir
# /run_unpacker

def get_lines(filename, comment=None):
  fl = open(filename, 'r')
  ret = []
  for line in fl.readlines():
    line = line.strip()
    if comment is not None and line.startswith(comment):
      continue
    ret.append(line)
  return ret

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

def symlink(srcpath, linkdir, linkname=None, relative=False): 
  srcdir, srcname = os.path.split(srcpath)
  if linkname is None:
    linkpath = os.path.join(linkdir, srcname)
  else:
    linkpath = os.path.join(linkdir, linkname)
  # |lexists| is true for broken symbolic links.
  # %%% Should check to see if the link is correct or needs updating.
  if not os.path.lexists(linkpath):
    if relative:
      # Get the path relative to the target directory.
      src = os.path.relpath(srcpath, linkdir)
    else:
      src = os.path.abspath(srcpath)
    os.symlink(src, linkpath)
  return linkpath

def get_variant_bases(directory):
  apps = load_sources(directory)
  bases = []
  for app in apps:
    base = get_base(app)
    pols = load_policies(directory, base, defwarn=False)
    for poldesc, pol in pols.iteritems():
      if poldesc != '':
        bases.append(base + '.' + poldesc)
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

def overwrite_expected(outp, expfile):
  valid = validate_output(outp, expfile)
  if valid == 'match':
    return 'match'
  
  expfl = open(expfile, 'w')
  expfl.write(outp)
  expfl.close()
  if valid == 'missing':
    valid = 'created'
  elif valid == 'wrong':
    valid = 'overwritten'
  return valid

def run_query(query):
  qbase = "assert(library_directory('%s')).\n" % LIBDIR
  query = qbase + query
  xsb = subprocess.Popen([XSBEXE, "--quietload", "--noprompt", "--nobanner"], stdout=PIPE, stderr=PIPE, stdin=PIPE)
  xsbout, xsberr = xsb.communicate(query)  
  return xsbout

def validate_value(outp, exppath):
  if not os.path.exists(exppath):
    return 'missing'

  expfl = open(exppath, 'r')
  exp = expfl.read().strip()

  lines = outp.split("\n")
  for ln in lines:
    if ln[:8] == 'VALUE = ':
      act = ln[8:].strip()
      if act == exp:
        return 'match'
      else:
        return 'wrong: ' + act + ' !== ' + exp

  return 'fail'

# Compare the resulting source code of a run to the expected output.
def validate_output(outp, exppath):
  if not os.path.exists(exppath):
    return 'missing'

  expfl = open(exppath, 'r')
  exp = expfl.read().strip()
  outp = outp.strip()

  if outp == exp:
    return 'match'
  else:
    #sys.stderr.write("OUTPUT: %s" % outp)
    #sys.stderr.write("EXPECT: %s" % exp)
    return 'wrong'

def evaluate_file(filename, verbose=False):
  ast = get_ast(filename)
  #code = code.replace("'", "''").strip()
  #code = code.replace("\\", "\\\\").strip()

  # %%% Needs updating
  query = '''
[jsc].
env_init(H0,L0),
exp(H0,L0,%s,H1,L1,V),
ecgv(H1,L1,V,H2,L2,VALUE).''' % ast

  if verbose:
    sys.stdout.write("\nQUERY:\n%s\n" % query)

  output = run_query(query)

  if verbose:
    sys.stdout.write("OUTPUT:\n%s\n" % output)

  return output

def run_tx(jspath, policies, jscmd, perf=True, debug=False, moreopts=[]):
  # Print the name of the file being analyzed.
  if debug:
    jsname = os.path.basename(jspath)
    sys.stdout.write('%s\n' % jsname)
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
  cmd.append(JAMSCRIPT_LIB)

  # Load the JAMScript debug extensions
  if debug:
    cmd.append('-f')
    cmd.append(JAMSCRIPT_DBGLIB)

  # Load the files containing the policy iBlocks.
  for pol in policies:
    cmd.append('-f')
    cmd.append(pol)

  cmd.append('-f')
  cmd.append(jspath)

  if (debug):
    # Display the command that's being invoked.
    sys.stdout.write('%s\n' % ' '.join(cmd))

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
    sys.stdout.write("cpu: %ss" % str(parse_time_output(timeline, element="cpu")))
  
  # To portably analyze exception output, make absolute paths relative.
  outp = outp.replace(JAMSCRIPT_DIR + "/", "")

  return outp
# /run_tx

