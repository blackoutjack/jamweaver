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

def get_result_predicate(srcdir, app):
  respath = os.path.join(srcdir, app + '.result')
  if os.path.isfile(respath):
    resfl = open(respath, 'r')
    respred = resfl.read()
    resfl.close()
    respred = respred.strip()
    respred = respred.rstrip(";")
  else:
    respred = "\"RESULT NOT SPECIFIED\""
  return respred

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
      warning0 = "Profile %s beginning" % warndesc
    if not found1:
      if not found0:
        warning1 = " and ending"
      else:
        warning1 = "Profile %s ending" % warndesc
    cfg.warn(warning0 + warning1 + " insertion point not found")
    # Return the original rather than a partial profile.
    return txtin

  return txtout
# /insert_profile

def copy_policy(app, desc, polsrc, tgtdir):
  assert os.path.isfile(polsrc)
  if not cfg.load_dir(tgtdir):
    return False

  poltgt = os.path.join(tgtdir, app + '.' + desc + '.js')

  # Don't copy if the source hasn't been updated.
  if not should_update(polsrc, poltgt, True):
    return False

  shutil.copy(polsrc, poltgt)
  return True
# /copy_policy

def copy_source(app, desc, srcpath, tgtdir, respred=None, name=None):
  assert os.path.isfile(srcpath)
  if not cfg.load_dir(tgtdir): return

  if name is None:
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

  if respred is not None:
    # Generate a version with global code wrapped in |runTest|.
    srctxt = "function runTest() {\n" + srctxt + "\n  return " + respred + ";\n}\n"

  if has_change(tgt, srctxt):
    write_text(tgt, srctxt)
    return True
  else:
    if VERBOSE:
      cfg.out("No change from current text: %s.%s" % (app, desc))
    return False
# /copy_source

def copy_variants(app, suf, srcdir, jsrel, apptgtdir, respred):
  changed = False

  srcpath = os.path.join(srcdir, jsrel)
  if copy_source(app, suf, srcpath, apptgtdir, respred=respred):
    changed = True

  return changed
# /copy_variants

def copy_sources(app, suf, srcdir, jssrc, apptgtdir, respred):
  changed = False
  subtgtdir = os.path.join(apptgtdir, 'source-%s' % suf)

  for jsrel in jssrc:
    jspath = os.path.join(srcdir, jsrel)
    assert os.path.isfile(jspath), 'File not found: %s' % jspath
    jsname = os.path.basename(jsrel)
    jsdir = os.path.dirname(jsrel)

    normtgtdir = os.path.join(subtgtdir, jsdir)
    if copy_source(app, suf, jspath, normtgtdir, respred=respred, name=jsname):
      changed = True

  return changed
# /copy_sources
  
def copy_files(app, infos, apppath, wrap=False):

  if not cfg.prepare_dir(apppath):
    # Error printed within |prepare_dir|.
    return False

  # Optionally, a result file in the target directory can contain
  # a JavaScript expression that should evaluate to |true| (or some
  # other value). This value will be returned by |runTest| and
  # displayed by the JAM log.
  if wrap:
    respred = get_result_predicate(apppath, app)
  else:
    respred = None

  for info in infos:
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
    
      if desc in cfg.COARSE_SOURCE_KEYS:
        suf = 'unprotected.%s' % desc
      else:
        suf = '%s.%s' % (refsuf, desc)

      changed = False
      if isinstance(jssrc, str):
        jspath = os.path.join(srcdir, jssrc)
        assert os.path.isfile(jspath)
        if copy_variants(app, suf, srcdir, jssrc, apppath, respred):
          changed = True
      elif isinstance(jssrc, list):
        srcsub = os.path.join(srcdir, 'source-%s' % desc)
        if copy_sources(app, suf, srcsub, jssrc, apppath, respred):
          changed = True

      if changed:
        cfg.out('Updated %s.%s' % (app, suf))

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
        if copy_policy(app, suf, polsrc, apppath):
          polchanged = True
    if polchanged:
      cfg.out('Updated policy for %s' % app)
      
  return True
# /copy_files

def update_coarse(apppath, app, wrap):

  appkey = app.split('.', 1)[0]

  if not os.path.isdir(apppath):
    cfg.err('Unable to find application directory: %s' % apppath)
    return 

  for srcdir in os.listdir(apppath):
    if not srcdir.startswith('source-'): continue
    if srcdir.endswith('.profile'): continue
    srcdirpath = os.path.join(apppath, srcdir)
    if not os.path.isdir(srcdirpath): continue

    desc = srcdir[len('source-'):]
    descparts = desc.split('.')
    begindesc = descparts[0]
    if begindesc == 'unprotected':
      if len(descparts) == 2:
        basedesc = descparts[1]
      else:
        cfg.warn('Unexpected variant: %s/%s' % (app, desc))
        continue
    else:
      basedesc = desc
    if basedesc not in cfg.COARSE_SOURCE_KEYS: continue
      
    tgtdesc = 'coarse.%s' % basedesc
    tgtdirpath = os.path.join(apppath, 'source-%s' % tgtdesc)
    appdesc = '%s/%s' % (app, tgtdesc)

    changed = False
    for filename in os.listdir(srcdirpath):
      # %%% Potential loophole
      if filename.endswith('.html'): continue
        
      tgtpath = os.path.join(tgtdirpath, filename)
      srcpath = os.path.join(srcdirpath, filename)

      if os.path.isdir(srcpath):
        # %%% Recursively copy
        continue
      elif not os.path.isfile(srcpath):
        cfg.warn("Profile source file doesn't exist: %s" % srcpath)
        continue
      
      srcfl = open(srcpath, 'r', errors='ignore')
      srctxt = srcfl.read()
      srcfl.close()

      if wrap:
        ind = '  '
        # Remove this from the beginning
        #
        #   function runTest() {\n
        #
        # and this from the end.
        #
        #   \n  return " + respred + ";\n}\n
        srclines = srctxt.split('\n')
        wrappre = srclines[0]
        wrappost = '\n'.join(srclines[-3:])
        srclines = srclines[1:-3]
        srctxt = '\n'.join(srclines)
      else:
        ind = ''
      # Normalize the number of blank lines.
      srctxt = ind + srctxt.strip() + "\n"

      # Generate a coarse-grained transaction version. 
      modtxt = ind + "introspect(JAM.policy.pFull) {\n" + srctxt + "\n" + ind + "}\n"

      if wrap:
        modtxt = '%s\n%s\n%s' % (wrappre, modtxt, wrappost)

      if has_change(tgtpath, modtxt):
        if cfg.load_dir(tgtdirpath):
          write_text(tgtpath, modtxt)
          changed = True
        
    if changed:
      cfg.out('Updated %s' % appdesc)
    else:
      if VERBOSE:
        cfg.out("No change from current text: %s" % appdesc)
# /update_coarse

def update_profile(apppath, app, wrap):

  appkey = app.split('.', 1)[0]

  if not os.path.isdir(apppath):
    cfg.err('Unable to find application directory: %s' % apppath)
    return 

  for srcdir in os.listdir(apppath):
    if srcdir.endswith('.profile'): continue
    if not srcdir.startswith('source-'): continue
    srcdirpath = os.path.join(apppath, srcdir)
    if not os.path.isdir(srcdirpath): continue
   
    desc = srcdir[len('source-'):]
    enddesc = desc.split('.')[-1]
    if enddesc not in cfg.PROFILE_SOURCE_KEYS: continue
      
    tgtdirpath = srcdirpath + '.profile'
    appdesc = '%s/%s.profile' % (app, desc)
    changed = False
    for filename in os.listdir(srcdirpath):
        
      tgtpath = os.path.join(tgtdirpath, filename)
      srcpath = os.path.join(srcdirpath, filename)

      if os.path.isdir(srcpath):
        # %%% Recursively copy
        continue
      elif not os.path.isfile(srcpath):
        cfg.warn("Profile source file doesn't exist: %s" % srcpath)
        continue
      srcfl = open(srcpath, 'r', errors='ignore')
      srctxt = srcfl.read()
      srcfl.close()

      if wrap:
        ind = '  '
        # Remove this from the beginning
        #
        #   function runTest() {\n
        #
        # and this from the end.
        #
        #   \n  return " + respred + ";\n}\n
        srclines = srctxt.split('\n')
        wrappre = srclines[0]
        wrappost = '\n'.join(srclines[-3:])
        srclines = srclines[1:-3]
        srctxt = '\n'.join(srclines)
      else:
        ind = ''
      # Normalize the number of blank lines.
      srctxt = ind + srctxt.strip() + "\n"

      profdesc = desc + '.profile'

      # Insert the standard "load" profile.
      profspec = {
        'beginafter': None,
        'endbefore': None,
        'indent': len(ind)
      }
      proftxt = insert_profile(srctxt, 'load', profspec, appdesc)

      if appkey in cfg.PROFILES:
        profspecs = cfg.PROFILES[appkey]
        # Need a consistent iteration order.
        profkeys = list(profspecs.keys())
        profkeys.sort()
        for extraprofdesc in profkeys:
          extraprofspecs = profspecs[extraprofdesc]
          if desc in extraprofspecs:
            profspec = extraprofspecs[desc]
            proftxt = insert_profile(proftxt, extraprofdesc, profspec, appdesc)

      if wrap:
        proftxt = '%s\n%s\n%s' % (wrappre, proftxt, wrappost)

      if has_change(tgtpath, proftxt):
        if cfg.load_dir(tgtdirpath):
          write_text(tgtpath, proftxt)
          changed = True
        
    if changed:
      cfg.out('Updated %s' % appdesc)
    else:
      if VERBOSE:
        cfg.out("No change from current text: %s" % appdesc)
# /update_profile

def update_expected(app, infos, tgtpath):
  for appinfo in infos:
    refsuf = cfg.get_suffix_from_info(appinfo)
    if refsuf is None:
      # Error printed within |get_suffix_from_info|.
      continue

    if 'out' in appinfo:
      respath = os.path.join(appinfo['dir'], appinfo['out'])
      resfl = open(respath, 'r')
      res = resfl.read()
      resfl.close()
      
      outfile = '%s.%s.out.js' % (app, refsuf)
      outpath = os.path.join(tgtpath, outfile)

      stat = cfg.overwrite_expected(res, outpath)
      if stat == 'overwritten' or stat == 'created':
        cfg.out('%s %s' % (outfile, stat))
    elif VERBOSE:
      cfg.warn("Result not found: " + app)
    
    if 'info' in appinfo:
      infopath = os.path.join(appinfo['dir'], appinfo['info'])
      
      infooutfile = '%s.%s.info.txt' % (app, refsuf)
      infooutpath = os.path.join(tgtpath, infooutfile)

      cfg.process_info(infopath, infooutpath, True, quiet=True)
    elif VERBOSE:
      cfg.warn("Info not found: " + app)
# /update_expected

def process_results(resdir, tgtdir, bases, wrap, transfer, exp, coarse, prof, getall):
  if not os.path.isdir(tgtdir):
    cfg.err("Target directory not found: %s" % tgtdir)
    return

  for app in bases:
    # %%% Special case
    if app.startswith("exfil_test"):
      w = False
    else:
      w = wrap

    appdir = os.path.join(tgtdir, app)

    if transfer or exp:
      assert os.path.isdir(resdir), "Results path %s doesn't exist." % resdir
      infos = cfg.get_result_info(resdir, app, getall)

    if transfer and infos is not None:
      copy_files(app, infos, appdir, w)

    if exp and infos is not None:
      update_expected(app, infos, appdir)

    if coarse:
      update_coarse(appdir, app, w)

    if prof:
      update_profile(appdir, app, w)

# /process_results

def main():
  parser = OptionParser(usage="%prog")
  parser.add_option('-f', '--overwrite', action='store_true', default=False, dest='overwrite', help='overwrite existing files')
  parser.add_option('-v', '--verbose', action='store_true', default=False, dest='verbose', help='generate verbose output')
  parser.add_option('-a', '--app', action='store', default=None, dest='app', help='limit to the given app')
  parser.add_option('-r', '--updatecoarse', action='store_true', default=False, dest='updatecoarse', help='update coarse sources')
  parser.add_option('-u', '--updateprof', action='store_true', default=False, dest='updateprof', help='update profile sources')
  parser.add_option('-e', '--updateexp', action='store_true', default=False, dest='updateexp', help='update expected results')
  parser.add_option('-t', '--transfer', action='store_true', default=False, dest='transfer', help='transfer results')
  parser.add_option('-l', '--loadall', action='store_true', default=False, dest='loadall', help='load all results, not just the latest')
  parser.add_option('-T', '--nodifftime', action='store_true', default=False, dest='nodifftime', help='update even if source file timestamp is older')
  parser.add_option('-c', '--config', action='store', default=os.path.join(os.path.dirname(__file__), 'transferconfig.py'), dest='config', help='configuration.py file')

  opts, args = parser.parse_args()

  if len(args) != 0:
    parser.error("Invalid number of arguments")

  global cfg
  cfg = imp.load_source("cfg", opts.config)

  global OVERWRITE, VERBOSE, COMPARE_TIME
  OVERWRITE = opts.overwrite
  VERBOSE = opts.verbose
  COMPARE_TIME = not opts.nodifftime

  tgtkeys = list(cfg.TARGETDIRS.keys())
  tgtkeys.sort()
  for destdir in tgtkeys:
    props = cfg.TARGETDIRS[destdir]
    wrap = props['wrap']
    bases = props['basenames']
    if opts.app is not None:
      bases = [base for base in bases if fnmatch.fnmatch(base, opts.app)]
    resdir = cfg.RESULTSDIR
    process_results(resdir, destdir, bases, wrap, opts.transfer, opts.updateexp, opts.updatecoarse, opts.updateprof, opts.loadall)

if __name__ == "__main__":
  main()
