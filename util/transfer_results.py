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

def should_update(src, tgt, diff=False):
  if not os.path.isfile(tgt):
    return True
  if not OVERWRITE: 
    if VERBOSE:
      cfg.out("Not overwriting existing file: %s" % tgt)
    return False
  srctime = os.path.getmtime(src)
  tgttime = os.path.getmtime(tgt)
  if COMPARE_TIME and srctime <= tgttime:
    if VERBOSE:
      cfg.out("Source modification time is earlier: %s: %r, %s: %r" % (src, srctime, tgt, tgttime))
    return False
  # File contents are checked later since wrapping adds additional text.
  if diff and filecmp.cmp(src, tgt):
    if VERBOSE:
      cfg.out("Source and target are equal: %s == %s" % (src, tgt))
    return False
  return True

def has_change(tgtfile, txt):
  if not os.path.exists(tgtfile):
    return True
  tgtfl = open(tgtfile, 'r')
  tgttxt = tgtfl.read().strip()
  chg = tgttxt != txt.strip()
  tgtfl.close()
  return chg

def write_text(tgtfile, txt):
  tgtfl = open(tgtfile, 'w')
  # Avoid extra ending newline for idempotence.
  tgtfl.write(txt)
  tgtfl.close()

# Generate a version of the source that profiles the execution.
def insert_profile(txtin, desc, specs, extra=None):
  txtout = txtin

  ind = ''
  nl = '\n'
  if 'indent' in specs:
    indnum = specs['indent']
    if indnum > -1:
      ind = ''.join([' ' for i in range(0, indnum)])
      ind = '\n' + ind
    else:
      nl = ''
  else:
    ind = '\n'

  if 'prefixsemicolonstart' in specs and specs['prefixsemicolonstart']:
    startsc = ';'
  else:
    startsc = ''

  if 'prefixsemicolonend' in specs and specs['prefixsemicolonend']:
    endsc = ';'
  else:
    endsc = ''

  if 'noquotes' in specs and specs['noquotes']:
    specdesc = desc
  else:
    specdesc = "'" + desc + "'"
  openprof = startsc + ind + "JAM.startProfile(" + specdesc + ");" + nl
  closeprof = endsc + ind + "JAM.stopProfile(" + specdesc + ");" + nl
  
  if 'beginafter' in specs:
    bas = specs['beginafter']
    if type(bas) == str:
      bas = [bas]
  else:
    bas = None

  if 'endbefore' in specs:
    ebs = specs['endbefore']
    if type(ebs) == str:
      ebs = [ebs]
  else:
    ebs = None

  if 'endafter' in specs:
    eas = specs['endafter']
    if type(eas) == str:
      eas = [eas]
  else:
    eas = None

  if 'matchall' in specs:
    ma = specs['matchall']
  else:
    ma = False
  
  found0 = False
  if bas is None:
    txtout = openprof + txtout
    found0 = True
  else:
    for ba in bas:
      start = 0
      while start > -1:
        start = txtout.find(ba, start)
        if start > -1:
          start = start + len(ba)
          txtout = txtout[:start] + openprof + txtout[start:]
          found0 = True
          if not ma: break
  
  found1 = False
  if ebs is None and eas is None:
    txtout = txtout + closeprof
    found1 = True
  else:
    if ebs is not None:
      for eb in ebs:
        start = 0
        while start > -1:
          start = txtout.find(eb, start)
          if start > -1:
            txtout = txtout[:start] + closeprof + txtout[start:]
            # Advance beyond the previous match.
            start += len(closeprof) + 1
            found1 = True
            if not ma: break
    if eas is not None:
      for ea in eas:
        start = 0
        while start > -1:
          start = txtout.find(ea, start)
          if start > -1:
            start = start + len(ea)
            txtout = txtout[:start] + closeprof + txtout[start:]
            # Advance beyond the previous match.
            start += len(closeprof) + 1
            found1 = True
            if not ma: break

  if not found0 or not found1:
    warndesc = desc
    if extra is not None: warndesc = extra + "." + warndesc
    warning0 = ''
    warning1 = ''
    if not found0:
      warning0 = "profile %s beginning" % warndesc
    if not found1:
      if not found0:
        warning1 = " and ending"
      else:
        warning1 = "profile %s ending" % warndesc
    cfg.warn(warning0 + warning1 + " insertion point not found")
    # Return the original rather than a partial profile.
    return txtin

  return txtout
# /insert_profile

def copy_policy(app, desc, polsrc, tgtdir):
  assert os.path.isfile(polsrc)
  if not load_dir(tgtdir):
    return False

  poltgt = os.path.join(tgtdir, app + '.' + desc + '.js')

  # Don't copy if the source hasn't been updated.
  if not should_update(polsrc, poltgt, True):
    return False

  shutil.copy(polsrc, poltgt)
  return True
# /copy_policy

def load_dir(tgtdir):
  if not os.path.isdir(tgtdir):
    try:
      os.makedirs(tgtdir)
      return True
    except:
      cfg.err("Unable to create target directory: %s" % tgtdir)
      return False
  return True
# /load_dir

def prepare_dir(tgtdir):
  if not load_dir(tgtdir):
    return False

  # Symbolically link to various utility files.
  for fileattrs in cfg.SYMLINK_FILES:
    assert len(fileattrs) == 2, 'Invalid SYMLINK_FILES configuration: %r' % fileattrs
    srcpath, linkname = fileattrs
    cfg.symlink(srcpath, tgtdir, linkname=linkname, relative=True)

  # Copy additional files for SMS2 applications.
  tgtbase = os.path.basename(tgtdir)
  if tgtbase.startswith('sms2-'):
    srcpath = os.path.join(cfg.SMS2DIR, 'includes')
    cfg.symlink(srcpath, tgtdir, relative=True)
    srcpath = os.path.join(cfg.SMS2DIR, 'sms2.head.html')
    linkname = tgtbase + '.head.html'
    cfg.symlink(srcpath, tgtdir, linkname=linkname, relative=True)
  return True
# /prepare_dir

def copy_source(app, desc, srcpath, tgtdir, respred=None, prof=False, mod=False, name=None):
  assert os.path.isfile(srcpath)
  if not load_dir(tgtdir): return

  if name is None:
    if prof:
      tgt = os.path.join(tgtdir, '%s.%s.profile.js' % (app, desc))
    else:
      tgt = os.path.join(tgtdir, '%s.%s.js' % (app, desc))
  else:
    tgt = os.path.join(tgtdir, name)

  # Don't copy if the source hasn't been updated.
  update_tgt = should_update(srcpath, tgt)
  if not update_tgt: return False

  srcfl = open(srcpath, 'r')
  if respred is not None:
    # Enclose the source within a call to |runTest|.
    ind = "  "
    def indent(ln): return ind + ln
    srctxt = "".join(map(indent, srcfl.readlines()))
  else:
    ind = ""
    srctxt = srcfl.read()
  srcfl.close()

  # Normalize the number of blank lines.
  srctxt = ind + srctxt.strip() + "\n"

  if mod:
    # Generate a coarse-grained transaction version. 
    srctxt = ind + "introspect(JAM.policy.pFull) {\n" + srctxt + "\n" + ind + "}\n"

  if prof:
    # Insert the standard "load" profile.
    profspec = {
      'beginafter': None,
      'endbefore': None,
      'indent': len(ind)
    }
    srctxt = insert_profile(srctxt, 'load', profspec, '%s.%s' % (app, desc))

    if app.startswith('sms2-') and app.endswith('.big'):
      appkey = app[:-4]
    else:
      appkey = app
    if appkey in cfg.PROFILES:
      profspecs = cfg.PROFILES[appkey]
      # Need a consistent iteration order.
      profkeys = list(profspecs.keys())
      profkeys.sort()
      for extraprofdesc in profkeys:
        extraprofspecs = profspecs[extraprofdesc]
        if desc in extraprofspecs:
          profspec = extraprofspecs[desc]
          srctxt = insert_profile(srctxt, extraprofdesc, profspec, '%s.%s' % (app, desc))

  tgttxt = srctxt
  if respred is not None:
    # Generate a version with global code wrapped in |runTest|.
    tgttxt = "function runTest() {\n" + tgttxt + "\n  return " + respred + ";\n}\n"

  if has_change(tgt, tgttxt):
    write_text(tgt, tgttxt)
    return True
  else:
    if VERBOSE:
      if prof:
        cfg.out("No change from current text: %s.%s.profile" % (app, desc))
      else:
        cfg.out("No change from current text: %s.%s" % (app, desc))
    return False
# /copy_source

def copy_variants(app, suf, srcdir, jsrel, apptgtdir, respred, mod):
  changed = False

  if mod:
    desc = 'unprotected.%s' % suf
    moddesc = 'coarse.%s' % suf
  else:
    desc = suf

  srcpath = os.path.join(srcdir, jsrel)
  if copy_source(app, desc, srcpath, apptgtdir, respred=respred, prof=False, mod=False):
    changed = True
  if copy_source(app, desc, srcpath, apptgtdir, respred=respred, prof=True, mod=False):
    changed = True

  if mod:
    # Create a coarse-grained transaction version of the original.
    if copy_source(app, moddesc, srcpath, apptgtdir, respred=respred, prof=False, mod=True):
      changed = True
    if copy_source(app, moddesc, srcpath, apptgtdir, respred=respred, prof=True, mod=True):
      changed = True

  return changed
# /copy_variants

def copy_sources(app, suf, srcdir, jssrc, apptgtdir, respred, mod):
  changed = False
  if mod:
    desc = 'unprotected.%s' % suf
    moddesc = 'coarse.%s' % suf
    modtgtdir = os.path.join(apptgtdir, 'source-%s' % moddesc)
  else:
    desc = suf
  subtgtdir = os.path.join(apptgtdir, 'source-%s' % desc)

  for jsrel in jssrc:
    jspath = os.path.join(srcdir, jsrel)
    assert os.path.isfile(jspath), 'File not found: %s' % jspath
    jsname = os.path.basename(jsrel)
    jsdir = os.path.dirname(jsrel)

    normtgtdir = os.path.join(subtgtdir, jsdir)
    if copy_source(app, desc, jspath, normtgtdir, respred=respred, prof=False, mod=False, name=jsname):
      changed = True

    proftgtdir = os.path.join('%s.profile' % subtgtdir, jsdir)
    if copy_source(app, desc, jspath, proftgtdir, respred=respred, prof=True, mod=False, name=jsname):
      changed = True

    if mod:
      # Create a coarse-grained transaction version of the original.
      modnormtgtdir = os.path.join(modtgtdir, jsdir)
      if copy_source(app, moddesc, jspath, modnormtgtdir, respred=respred, prof=False, mod=True, name=jsname):
        changed = True

      modproftgtdir = os.path.join('%s.profile' % modtgtdir, jsdir)
      if copy_source(app, moddesc, jspath, modproftgtdir, respred=respred, prof=True, mod=True, name=jsname):
        changed = True
  return changed
# /copy_sources
  
def copy_files(appfiles, tgtdir, wrap=False):
  
  # Now copy the files to the target directory, changing the file names
  # to "app.js" and "app.policy.js".
  for app, info in appfiles.items():
    # %%% Special cases
    if app.startswith("exfil_test"):
      w = False
    else:
      w = wrap

    if app.startswith('sms2-'):
      variants = ['', '.big']
    else:
      variants = ['']

    for var in variants:
      appcur = '%s%s' % (app, var)
      apptgtdir = os.path.join(tgtdir, appcur)
      if not prepare_dir(apptgtdir):
        # Error printed within |prepare_dir|.
        continue

      # Optionally, a result file in the target directory can contain
      # a JavaScript expression that should evaluate to |true| (or some
      # other value). This value will be returned by |runTest| and
      # displayed by the JAM log.
      if w:
        # %%% A little unintuitive to store the expected results in the
        # %%% destination directory.
        respath = os.path.join(apptgtdir, app + '.result')
        if os.path.isfile(respath):
          resfl = open(respath, 'r')
          respred = resfl.read()
          resfl.close()
          respred = respred.strip()
          respred = respred.rstrip(";")
        else:
          respred = "\"RESULT NOT SPECIFIED\""
      else:
        respred = None

      refsuf = cfg.get_suffix_from_info(info)
      if refsuf is None:
        # Error printed within |get_suffix_from_info|.
        continue

      srcdir = info['dir']
      for desc, jssrc in info.items():
        if desc == 'dir': continue
        if desc == 'version': continue
        if desc == 'policy': continue
        if desc == 'modular.policy': continue
        if desc == 'info': continue
      
        if desc in cfg.MODULAR_SOURCE_KEYS:
          mod = True
          suf = desc
        else:
          mod = False
          suf = '%s.%s' % (refsuf, desc)

        changed = False
        if isinstance(jssrc, str):
          jspath = os.path.join(srcdir, jssrc)
          assert os.path.isfile(jspath)
          if copy_variants(appcur, suf, srcdir, jssrc, apptgtdir, respred, mod):
            changed = True
        elif isinstance(jssrc, list):
          srcsub = os.path.join(srcdir, 'source-%s' % desc)
          if copy_sources(appcur, suf, srcsub, jssrc, apptgtdir, respred, mod):
            changed = True

        if changed:
          cfg.out('Updated %s.%s' % (appcur, suf))

      # Collect various policy variations.
      polchanged = False
      for desc in ['policy', 'modular.policy']:
        if desc in info:
          polsrc = os.path.join(srcdir, info[desc])
          if desc == 'modular.policy':
            # The refinement indicator isn't meaningful for the
            # coarse-grained policy.
            suf = 'coarse.policy'
          else:
            suf = '%s.%s' % (refsuf, desc)
          if copy_policy(appcur, suf, polsrc, apptgtdir):
            polchanged = True
      if polchanged:
        cfg.out('Updated policy for %s' % app)
      
  return True
# /copy_files

def transfer_results(srcdir, tgtdir, bases, wrap):
  appfiles = cfg.get_results_info(srcdir, bases)
  copy_files(appfiles, tgtdir, wrap)
# /transfer_results

def update_profile(tgtdir, app, wrap):
  if app.startswith('sms2-') and app.endswith('.big'):
    appkey = app[:-4]
  else:
    appkey = app 

  # Do nothing if there are no custom profile actions specified.
  if appkey not in cfg.PROFILES: return

  appdir = os.path.join(tgtdir, app)

  # Do nothing if the files haven't been previously transferred.
  if not os.path.isdir(appdir): return 

  for proffile in os.listdir(appdir):
    if not proffile.endswith('.profile.js'): continue
    proftgt = os.path.join(appdir, proffile)
    profinfo = cfg.get_descriptors(proftgt)
    desc = '.'.join(profinfo[:-1])
      
    # Load the non-profile source.
    srcfile = os.path.join(appdir, app + '.' + desc + '.js')
    if not os.path.isfile(srcfile):
      cfg.warn("Profile source file doesn't exist: %s" % srcfile)
      continue
    srcfl = open(srcfile, 'r')
    srctxt = srcfl.read()
    srcfl.close()
    if wrap:
      ind = "  "
      # Remove this from the beginning
      #
      #   function runTest() {\n
      #
      # and this from the end.
      #
      #   \n  return " + respred + ";\n}\n
      srclines = srctxt.split('\n')
      srclines = srclines[1:-2]
      srctxt = "\n".join(srclines)
    else:
      ind = ""
    # Normalize the number of blank lines.
    srctxt = srctxt.strip() + "\n"

    profdesc = desc + '.profile'

    # Insert the standard "load" profile.
    profspec = {
      'beginafter': None,
      'endbefore': None,
      'indent': len(ind)
    }
    proftxt = insert_profile(srctxt, 'load', profspec, app + "." + desc)

    profspecs = cfg.PROFILES[appkey]
    # Need a consistent iteration order.
    profkeys = list(profspecs.keys())
    profkeys.sort()
    for extraprofdesc in profkeys:
      extraprofspecs = profspecs[extraprofdesc]
      if desc in extraprofspecs:
        profspec = extraprofspecs[desc]
        proftxt = insert_profile(proftxt, extraprofdesc, profspec, app + "." + desc)

    if wrap:
      proftxt = "function runTest() {\n" + proftxt + "\n  return " + respred + ";\n}\n"

    if has_change(proftgt, proftxt):
      write_text(proftgt, proftxt)
      sys.stdout.write(app + "." + profdesc)
    else:
      if VERBOSE:
        cfg.out("No change from current text: %s" % (app + "." + profdesc))
# /update_profile

def update_profiles(tgtdir, bases, wrap):
  if not os.path.isdir(tgtdir):
    cfg.err("Profile target directory not found: %s" % tgtdir)
    return

  for app in bases:
    update_profile(tgtdir, app, wrap)
    sms2 = app.startswith("sms2-")
    if sms2:
      update_profile(tgtdir, app + '.big', wrap)
# /update_profiles

def update_expected(bases):
  appfiles = cfg.get_results_info(cfg.RESULTSDIR, bases)
  dirs = [cfg.MICROBENCHMARK_DIR, cfg.BENCHMARK_DIR]

  # %%% Use get_variant_bases here?
  for from_dir in dirs:
    paths = cfg.load_sources(from_dir, '.js', '.out.js')
    
    for flpath in paths:
      base = cfg.get_base(flpath)
      if base not in bases: continue

      # Some benchmarks have a modified version with a "-bad"
      # or "-ok" suffix. These can use the same policy as
      # the non-modified version.
      policies = cfg.load_policies(from_dir, base, defwarn=False) 
          
      # Run with each policy file separately.
      for poldesc in policies:
        # Differentiate the output if policy indexed by a non-numeric key.
        # For example, the policy file jsqrcode.call.policy will be
        # indexed by "call", and the output will be stored separately from
        # the analysis using jsqrcode.get.policy. Alter the .out filename
        # accordingly.
        if poldesc != '':
          exppre = '.' + poldesc
        else:
          exppre = ''
        outbase = base + exppre
        
        appinfo = appfiles[outbase]
        refsuf = cfg.get_suffix_from_info(exppre, appinfo)
        if refsuf is None:
          # Error printed within |get_suffix_from_info|.
          continue

        outsuf = '%s.%s.out.js' % (exppre, refsuf)

        if 'full' in appinfo:
          outpath = os.path.join(appinfo['dir'], appinfo['full'])
          outfl = open(outpath, 'r')
          outp = outfl.read()
          outfl.close()
          
          exppath = cfg.get_exp_path(flpath, outsuf)
          stat = cfg.overwrite_expected(outp, exppath)
          if stat == 'overwritten' or stat == 'created':
            expname = os.path.basename(exppath)
            cfg.out('%s %s' % (expname, stat))
        else:
          cfg.warn("Output not found: " + base)
# /update_expected

def main():
  parser = OptionParser(usage="%prog transferconfig.py")
  parser.add_option('-f', '--overwrite', action='store_true', default=False, dest='overwrite', help='overwrite existing files')
  parser.add_option('-v', '--verbose', action='store_true', default=False, dest='verbose', help='generate verbose output')
  parser.add_option('-a', '--app', action='store', default=None, dest='app', help='limit transfer to the given app')
  parser.add_option('-u', '--updateprof', action='store_true', default=False, dest='updateprof', help='just update previously-transferred profile sources')
  parser.add_option('-e', '--updateexp', action='store_true', default=False, dest='updateexp', help='just update expected results')
  parser.add_option('-t', '--nodifftime', action='store_true', default=False, dest='nodifftime', help='update even if source file timestamp is older')
  parser.add_option('-c', '--config', action='store', default=os.path.join(os.path.dirname(__file__), 'transferconfig.py'), dest='config', help='configuration.py file')

  opts, args = parser.parse_args()

  if len(args) != 0:
    parser.error("Invalid number of arguments")

  global cfg
  cfg = imp.load_source("cfg", opts.config)

  assert os.path.isdir(cfg.RESULTSDIR), "Source path %s doesn't exist." % cfg.RESULTSDIR

  global OVERWRITE, VERBOSE, COMPARE_TIME
  OVERWRITE = opts.overwrite
  VERBOSE = opts.verbose
  COMPARE_TIME = !opts.nodifftime

  for destdir, props in cfg.TARGETDIRS.items():
    wrap = props['wrap']
    bases = props['basenames']
    if opts.app is not None:
      bases = [base for base in bases if fnmatch.fnmatch(base, opts.app)]
    if opts.updateprof:
      update_profiles(destdir, bases, wrap)
    elif opts.updateexp:
      update_expected(bases)
    else:
      transfer_results(cfg.RESULTSDIR, destdir, bases, wrap)

if __name__ == "__main__":
  main()
