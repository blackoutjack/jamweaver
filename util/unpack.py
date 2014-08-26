#!/usr/bin/python
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
import traceback
import urllib2
import socket

#
# This script interfaces with the jsunpack utility. It can be accessed
# via SVN at this URL:
#
# http://jsunpack-n.googlecode.com/svn/trunk/
#
# Much of the code in class |Unpacker| is derived from class |jsunpack|
# in jsunpack/jsunpackn.py. Some code is copied to simplify overriding
# complicated methods.
#
# This script loads local or remote HTML files, and collates all
# JavaScript code that is loaded.
#
# JavaScript embedded within PDF files are not currently handled
# because of complications introduced by the jsunpack interface.
#

JAMPKG = os.environ['JAMPKG']
JSUNPACKPKG = os.path.join(JAMPKG, 'util', 'jsunpack')
sys.path.append(os.path.join(JAMPKG, 'tests'))
from util import get_base
from util import get_file_info
from util import err
from util import warn
sys.path.append(JSUNPACKPKG)
import html
import jsunpackn
import urlattr
from urlattr import urlattr as UrlAttr
import detection
import swf

def parseHTML(infile, config):
  hparser = html.Parser(config)

  fin = open(infile, 'rb')
  data = fin.read()
  fin.close()

  parsed_header, parsed = hparser.htmlparse(data)
  parsed = parsed_header + parsed
# end parseHTML

class Unpacker(jsunpackn.jsunpack):

  # Create an Unpacker.
  def __init__(self, options) :
    self.start = urlattr.canonicalize(options.getRoot()) #start is the root node in the tree, do not destroy it
    self.rooturl = {} #this dict contains all information about decodings, continuity between decodings

    self.url = options.url

    self.forceStreams = False #keep data in streams{} in case we don't end in one of the end_states
    self.streams = {}
    self.seen = {} #dictionary to avoid repeating information (addressed by unique url)

    #detection:
    self.SIGS = detection.rules(options.rules)
    self.SIGSalt = detection.rules(options.rulesAscii)

    #options and attributes:
    self.OPTIONS = options #configuration and user options
    self.lastModified = '' #http_header lastModified
    self.binExists = False
    if self.OPTIONS.veryverbose:
      self.OPTIONS.verbose = True
    if self.OPTIONS.verbose:
      UrlAttr.verbose = True

    self.hparser = html.Parser(self.OPTIONS.htmlparseconfig)
    if not os.path.isdir(os.path.abspath(self.OPTIONS.tmpdir)):
      try:
        os.makedirs(os.path.abspath(self.OPTIONS.tmpdir))
      except Exception, e:
        print(e)
        exit(1)
    if not os.path.isdir(os.path.abspath(self.OPTIONS.outdir)):
      try:
        os.makedirs(os.path.abspath(self.OPTIONS.outdir))
      except Exception, e:
        print(e)
        exit(1)
    if not os.path.isdir(os.path.abspath(os.path.dirname(self.OPTIONS.log_ips))):
      try:
        os.makedirs(os.path.abspath(os.path.dirname(self.OPTIONS.log_ips)))
      except Exception, e:
        print(e)
        exit(1)
    if not os.path.isdir(os.path.abspath(os.path.dirname(self.OPTIONS.decodelog))):
      try:
        os.makedirs(os.path.abspath(os.path.dirname(self.OPTIONS.decodelog)))
      except Exception, e:
        print(e)
        exit(1)

    #done setup, now initialize the decoding
    self.startTime = time.time()
    self.NIDS_INIALIZED = False #don't initialize nids twice!

    if self.OPTIONS.interface:
      nids.param('device', self.OPTIONS.interface)
      self.run_nids()

    elif self.url:
      if not self.OPTIONS.quiet:
        print 'Root URL: %s' % (self.url)
      status, fname = self.fetch(self.url)
      if not self.OPTIONS.quiet:
        print 'Status:', status

    else: # Local file decode
      if self.file is not None and not self.file in self.rooturl:
        self.rooturl[self.file] = UrlAttr(self.rooturl, self.start)

      if self.data:
        self.rooturl[self.url].setMalicious(UrlAttr.ANALYZED)
        if self.data.startswith('\xD4\xC3\xB2\xA1'): #pcap
          warn("Unsupported case: %s" % "pcap")
        else:
          self.main_decoder(self.data, myfile)

    if self.OPTIONS.active:
      todo = []
      firstTime = True

      while todo or firstTime:
        firstTime = False
        if (not self.OPTIONS.quiet) and len(todo) > 0:
          print 'Actively fetching %d new URLs' % (len(todo))
        while todo:
          url = todo.pop()
          status, fname = self.fetch(url)
          self.rooturl[url].setMalicious(UrlAttr.ANALYZED)

          if not self.OPTIONS.quiet:
            type = ''
            if self.rooturl[url].type:
              type = '(%s) ' % (self.rooturl[url].type)
            if not self.OPTIONS.quiet:
              print '\tFetching %s URL %s (status: %r)' % (type, url, status)

        for url in self.rooturl:
          if self.rooturl[url].malicious == UrlAttr.NOT_ANALYZED:
            if not (self.rooturl[url].type == 'img' or self.rooturl[url].type == 'input' or self.rooturl[url].type == 'link'):
              todo.append(url)
  # end __init__

  def fetch(self, url):
    if url.startswith('hcp:'):
      warn('Not fetching hcp url: %s' % url)
      return None

    self.url = urlattr.canonicalize(url)

    #self.rooturl must already have an entry for url
    if not self.url in self.rooturl:
      self.rooturl[self.url] = UrlAttr(self.rooturl, self.url)

    if self.url.startswith('127.0.0.1'):
      self.rooturl[self.url].malicious = UrlAttr.DONT_ANALYZE
      warn('Not fetching local file: %s', self.url)
      return None

    refer = ''
    for parenturl in self.rooturl:
      for type, child in self.rooturl[parenturl].children:
        if url == child:
          refer = parenturl

    if (not refer) or refer.startswith(self.OPTIONS.outdir):
      refer = self.defaultReferer
    self.rooturl[self.url].status = '\t(referer=%s)\n' % (refer)
    fname = ''
    try:
      hostname, dstport = self.hostname_from_url(url)

      if self.OPTIONS.proxy and (not self.OPTIONS.currentproxy):
        proxies = self.OPTIONS.proxy.split(',')
        self.OPTIONS.currentproxy = proxies[random.randint(0, len(proxies) - 1)]
        if not self.OPTIONS.quiet:
          print '[fetch config] random proxy %s' % (self.OPTIONS.currentproxy)

      request = urllib2.Request('http://' + url)
      request.add_header('Referer', 'http://' + refer)
      request.add_header('User-Agent', 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0)')

      if self.OPTIONS.currentproxy:
        if not self.OPTIONS.quiet:
          print '[fetch config] currentproxy %s' % (self.OPTIONS.currentproxy)
        proxyHandler = urllib2.ProxyHandler({'http': 'http://%s' % (self.OPTIONS.currentproxy) })
        opener = urllib2.build_opener(proxyHandler)
      else:
        opener = urllib2.build_opener()

      try:
        remote = opener.open(request).read()
      except urllib2.HTTPError, error:
        warn('Remote file error: %r' % error.getcode())
        # If not suppressed, this causes an infinite regress.
        # See http://www.jspell.com/ajax-spell-checker.html
        #remote = error.read()
        remote = ''

      if len(remote) > 0:
        if len(remote) > 31457280:
          warn('Not fetching large file: %s' % self.url)
          return None
        try:
          fname = self.rooturl[self.url].create_sha1file(self.OPTIONS.outdir, remote, 'fetch')
          self.rooturl[self.url].status += '\tsaved %d bytes %s\n' % (len(remote), fname)

          resolved = socket.gethostbyname(hostname)
          self.rooturl[self.url].tcpaddr = [['0.0.0.0', 0], [resolved, dstport]]
        except Exception, e:
          warn("Lookup failure: %r" % e)
          warn(traceback.format_exc())
        self.main_decoder(remote, url)
      else:
        self.rooturl[self.url].malicious = UrlAttr.ANALYZED

    except Exception, e:
      self.rooturl[self.url].status += '\tfailure: ' + str(e) + '\n'
      self.rooturl[self.url].malicious = UrlAttr.DONT_ANALYZE
      err(traceback.format_exc())

    return self.rooturl[self.url].status, fname
  # end fetch

  def extractJS(self, content):
    #return values are:
    #(extracted scripts)
    try:
      headers, js = self.hparser.htmlparse(content)
    except Exception, e:
      headers, js = '', ''
      print 'Error in htmlparsing', str(e)

    if len(js) > 0: #html parse succeeded
      return (headers, js)
    return None
  # end extractJS

  def main_decoder(self, data, url, tcpaddr=[], lastModified=''):
    url = urlattr.canonicalize(url)
    self.url = url
    self.lastModified = lastModified
    if not self.url in self.rooturl:
      self.rooturl[self.url] = UrlAttr(self.rooturl, self.url, tcpaddr) #initialization
    self.rooturl[self.url].setMalicious(UrlAttr.ANALYZED)
    predecoded = data
    level = 0

    #Save all file streams
    #if self.OPTIONS.saveallfiles:
    #  self.rooturl[self.url].create_sha1file(self.OPTIONS.outdir, data, 'stream')

    isMZ = False
    if data.startswith('MZ'):
      warn('MZ case was hit, don\'t know what thas is.')
      isMZ = True
      self.rooturl[self.url].filetype = 'MZ'
      self.binExists = True
      if self.OPTIONS.saveallexes:
        sha1exe = self.rooturl[self.url].create_sha1file(self.OPTIONS.outdir, data, 'executable')
      else:
        self.rooturl[self.url].log(self.OPTIONS.verbose, 0, '[%d] executable file' % (level))

    swfjs = ''
    if data.startswith('CWS') or data.startswith('FWS'):
      # This case is triggered by HTML embed (and object?) tags that
      # pull in Flash scripts.
      #warn('CWS/FWS case was hit')
      isSWF = True
      self.rooturl[self.url].filetype = 'SWF'

      msgs, urls = swf.swfstream(data)
      for url in urls:
        swfjs_obj = re.search('javascript:(.*)', url, re.I)
        if swfjs_obj:
          swfjs += swfjs_obj.group(1) + '\n'
        else:
          # URL only
          multi = re.findall('https?:\/\/([^\s<>\'"]+)', url)
          if multi:
            for m in multi:
              self.rooturl[self.url].setChild(m, 'swfurl')
          else:
            #no http
            if url.startswith('/'):
              #relative root path
              firstdir = re.sub('([^/])/.*$', '\\1', self.url)
              m = firstdir + url
            else:
              #relative preserve directory path
              lastdir = re.sub('/[^\/]*$', '/', self.url)
              m = lastdir + url
            self.rooturl[self.url].setChild(m, 'swfurl')
    else:
      isSWF = False

    detect_txt = '' #append all possible decoded data, then run signatures at the end

    while predecoded and len(predecoded) > 0 and level < 10:
      try:
        detect_txt += predecoded
      except:
        pass # possibly an encoding problem

      self.signature(predecoded, level, tcpaddr, False)
      jsinurls = self.find_urls(predecoded, tcpaddr)

      decoded = False
      if swfjs:
        decoded = swfjs
        path = self.rooturl[self.url].create_sha1file(self.OPTIONS.outdir, decoded, 'decoding')
        self.rooturl[self.url].log(self.OPTIONS.verbose, 0, '[decodingLevel=%d] JavaScript in SWF %d bytes (%s)' % (level, len(decoded), path))
        swfjs = '' #only once

      elif self.SIGS.has_javascript(predecoded):
        self.rooturl[self.url].log(self.OPTIONS.verbose, 0, '[decodingLevel=%d] found JavaScript' % (level))
        extracted = self.extractJS(predecoded)

        if extracted is not None:
          headers, code = extracted
          # |headers| contains JavaScript for DOM setup.
          # %%% Not currently used. Could be very useful if improved.
          #decoded = "// %s\n%s\n%s" % (self.url, headers, code)
          decoded = "// %s\n%s" % (self.url, code)
          path = self.rooturl[self.url].create_sha1file(self.OPTIONS.outdir, decoded, 'decoding')

      elif self.url in self.rooturl and self.rooturl[self.url].type == 'shellcode':
        warn('shellcode case hit, don\'t know what this does')
        if predecoded.startswith('MZ'):
          self.rooturl[self.url].setMalicious(10)
          sha1exe = self.rooturl[self.url].create_sha1file(self.OPTIONS.outdir, predecoded, 'incident')
          self.rooturl[self.url].log(True, 10, 'client download shellcode URL (executable) saved (' + sha1exe + ')')
        else:
          self.rooturl[self.url].setMalicious(6)
          sha1exe = self.rooturl[self.url].create_sha1file(self.OPTIONS.outdir, predecoded, 'attempt')
          self.rooturl[self.url].log(True, 6, 'client download shellcode URL (non-executable) saved (' + sha1exe + ')')

        try:
          global ms
          type = ms.buffer(predecoded)
          if type:
            self.rooturl[self.url].log(True, 'download shellcode URL filetype=%s' % (type))
        except:
          pass # failure in magic library
        decoded = '' # don't do any more decoding

      elif isMZ:
        decoded = '' # don't do any more decoding
      else:
        self.rooturl[self.url].log(self.OPTIONS.veryverbose, 0, '[%d] no JavaScript' % (level))
        decoded = '' # don't do any more decoding

      level += 1
      if jsinurls:
        decoded += jsinurls
      predecoded = decoded

    #this way you can match original content + all decodings in one stream
    #level is 0 because we want decodedOnly to still work,
    #you can't write a decodedOnly rule to match across boundaries anyway

    #start output
    if self.rooturl[self.url].malicious > 0:
      #save the original sample
      sha1orig = self.rooturl[self.url].create_sha1file(self.OPTIONS.outdir, data, 'original')
      self.rooturl[self.url].log(self.OPTIONS.verbose, 0, 'file: saved %s to (%s)' % (self.url, sha1orig))

    if self.OPTIONS.decodelog:
      if self.OPTIONS.outdir and not os.path.exists(self.OPTIONS.outdir):
        os.mkdir(self.OPTIONS.outdir)

      flog = open(self.OPTIONS.decodelog, 'a')
      if flog:
        flog.write(self.rooturl[self.url].tostring('', False)[0])
        flog.close()
        self.rooturl[self.url].seen = {} #reset
      else:
        print 'Error: writing to %s' % (self.OPTIONS.decodelog)
  # end main_decoder

# end Unpacker
 
class UnpackOpts:
  RULES = None
  fin = open(os.path.join(JSUNPACKPKG, 'rules'), 'r')
  if fin:
    RULES = fin.read()
    fin.close()

  RULESASCII = None
  fin = open(os.path.join(JSUNPACKPKG, 'rules.ascii'), 'r')
  if fin:
    RULESASCII = fin.read()
    fin.close()

  HTMLPARSECONFIG = None
  HTMLCFGFILE = os.path.join(JSUNPACKPKG, 'htmlparse.config')
  fin = open(HTMLCFGFILE, 'r')
  if fin:
    HTMLPARSECONFIG = fin.read()
    fin.close()

  CONFIGFILE = os.path.join(JSUNPACKPKG, 'options.config')
  PREFILE = os.path.join(JSUNPACKPKG, 'pre.js')
  POSTFILE = os.path.join(JSUNPACKPKG, 'post.js')

  def __init__(self, infile):
    # Show [nothing found] entries.
    UrlAttr.verbose = True 

    if isURL(infile):
      self.url = getAddress(infile)
      self.file = None
      self.data = None
      self.base = self.url
      self.ext = getExtension(self.url)
    else:
      self.file = infile
      fin = open(self.file, 'rb')
      if fin:
        self.data = fin.read()
        fin.close()
      self.url = None
      info = get_file_info(infile)
      self.base = info['app']
      self.ext = info['ext']

    self.urlfetch = self.url # Used by jsunpackn.py
    self.rules = UnpackOpts.RULES
    self.rulesAscii = UnpackOpts.RULESASCII
    self.active = True # 
    self.quiet = not VERBOSE
    self.verbose = VERBOSE
    self.veryverbose = VERBOSE
    self.configfile = UnpackOpts.CONFIGFILE
    self.htmlparse = UnpackOpts.HTMLCFGFILE
    self.htmlparseconfig = UnpackOpts.HTMLPARSECONFIG
    self.interface = False
    self.outdir = self.getOutputDir(os.path.join(JAMPKG, 'unpacked'), self.base)
    self.decodelog = os.path.join(self.outdir, 'decoded.log')
    self.ipslog = os.path.join(self.outdir, 'ip.log')
    self.log_ips = self.ipslog # Used by jsunpackn.py
    self.tmpdir = os.path.join(self.outdir, 'tmp')
    self.fasteval = False
    self.saveallfiles = False
    self.saveallexes = False
    self.proxy = None
    self.currentproxy = None
    self.timeout = 30
    self.redoevaltime = 1
    self.maxruntime = 0
    self.pre = UnpackOpts.PREFILE
    self.post = UnpackOpts.POSTFILE
    self.debug = False
    #self.nojs = False
    
  def __str__(self):
    return str(self.__dict__)

  def getRoot(self):
    if self.url is not None:
      return self.url
    else:
      assert self.file is not None, 'Neither url nor file is set'
      return self.file

  def getOutputDir(self, parent, base):
    nextId = 0
    for curdir in os.listdir(parent):
      if curdir.startswith(base + '-'):
        idx = curdir[len(base)+1:]
        try:
          idxnum = int(idx)
          if idxnum >= nextId:
            nextId = idxnum + 1
        except:
          warn('Non-numeric suffix, ignoring: %s' % idx)
    return os.path.join(parent, base + '-' + str(nextId))

def isURL(uri):
  return getProtocol(uri) in ['http', 'https']

def getProtocol(url):
  parts = re.split('://', url, 1)
  if len(parts) == 1:
    return ''
  prot = parts[0].lower()
  return prot

# Return the address part (without the preceding protocol).
def getAddress(url):
  # %%% Handle other protocols.
  prot = getProtocol(url)
  addr = re.sub('^' + prot + '://', '', url, flags=re.IGNORECASE)
  return addr

def getDomain(addr):
  # Assumes the protocol prefix has been removed.
  parts = re.split('/', addr)
  dom = parts[0]
  return dom

def getExtension(addr):
  parts = re.split('/', addr)
  subparts = re.split('\.', parts[-1])
  ext = subparts[-1]
  return ext

# Load all JavaScript from loaded by a particular HTML file.
def loadFile(infile):
  opts = UnpackOpts(infile)

  try:
    js = Unpacker(opts)
  except Exception, e:
    err("%s: %s" % (str(e), infile))
    err(traceback.format_exc())
    return False

  #for htmlfile in htmlfiles:
  #  output += parseHTML(htmlfile, htmlparseconfig)

  #if len(output) > 0:
  #  if opts.outfile is None:
  #    outfile = '%s.out' % infile
  #  else:
  #    outfile = opts.outfile
  #  fout = open(outfile, 'wb')
  #  fout.write(output)
  #  fout.close()
  #  print 'Wrote %s.out (%d bytes)' % (infile, len(output))
  #else:
  #  print 'Nothing parsed for %s' % infile

  #return js
# end loadFile

def main():
  parser = OptionParser(usage="%prog URL|HTML")
  parser.add_option('-f', '--overwrite', action='store_true', default=False, dest='overwrite', help='overwrite existing files')
  parser.add_option('-v', '--verbose', action='store_true', default=False, dest='verbose', help='generate verbose output')

  opts, args = parser.parse_args()

  if len(args) < 1:
    parser.error("Invalid number of arguments")

  #global cfg
  #cfg = imp.load_source("cfg", args[0])
  #assert os.path.isdir(cfg.SOURCEDIR), "Source path %s doesn't exist." % cfg.SOURCEDIR

  global OVERWRITE, VERBOSE
  OVERWRITE = opts.overwrite
  VERBOSE = opts.verbose

  html.Parser.debug = VERBOSE

  output = ""
  for infile in args:
    loadFile(infile)

if __name__ == "__main__":
  main()



