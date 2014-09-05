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
import traceback
import urllib.parse
import urllib.request
import urllib.error
import socket
import codecs
import gzip
import cssutils

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

from config import *
from util import get_base
from util import get_file_info
from util import get_output_dir
from util import err
from util import warn
from util import out
from util import symlink

#JSUNPACKPKG = os.path.join(JAMPKG, 'util', 'jsunpack')
#sys.path.append(JSUNPACKPKG)
#import swf

JS_CONTENT_TYPES = [
  'text/javascript',
  'application/x-javascript',
  'application/javascript',
]

HTML_CONTENT_TYPES = [
  'text/html',
]

CSS_CONTENT_TYPES = [
  'text/css',
]

IMAGE_CONTENT_TYPES = [
  'image/gif',
  'image/png',
  'image/jpg',
  'image/vnd.microsoft.icon',
]

try:
  import bs4
except ImportError as e:
  err('Unable to import BeautifulSoup: %s' % str(e))
  err("BeautifulSoup 4 is required. For Ubuntu, use ``apt-get install python3-bs4''")
  sys.exit(1)

class Resource:
  
  def __init__(self, elt, url, type, content):
    self.element = elt
    self.tag = elt.name
    self.url = url
    self.type = type
    self.content = content
    self.filename = None
  # /Resource.__init__

  def getElement(self):
    return self.element

  def getTag(self):
    return self.tag
  # /getTag

  def getURL(self):
    return self.url
  # /getURL

  def getType(self):
    return self.type
  # /getType

  def getContent(self):
    return self.content
  # /getContent

  def appendContent(self, extra):
    self.content = self.content + extra
    return self.content
  # /appendContent

class CSSParser(cssutils.CSSParser):

  def __init__(self):
    super().__init__(log=None, loglevel=None, raiseExceptions=None, fetcher=None, parseComments=True, validate=True)

  def parse(self, data, encoding, url):
    if encoding is None:
      encoding = 'utf-8'
    text = data.decode(encoding)
    stylesheet = self.parseString(text, href=url)
    warn('Unfinished implementation of CSS parsing')

class HTMLParser():

  def __init__(self, htmlparseconfig):
    self.definitions = {}
    self.filters = {}
    self.parse_rules = []
    
    htmlrules = htmlparseconfig.splitlines()

    line = 0
    for htmlrule in htmlrules:
      line += 1
      htmlrule = htmlrule.strip()

      # Enable comments and empty lines.
      if htmlrule.startswith('#'):
        continue
      if htmlrule == '':
        continue

      if htmlrule.startswith('!define'):
        fields = re.split('[ \t]+', htmlrule, 2)
        if len(fields) == 3:
          name = fields[1]
          value = fields[2]
          self.definitions[name] = value
        else:
          err('Malformed HTML definition: %s' % htmlrule)

      elif htmlrule.startswith('!parse'):
        fields = re.split('[ \t]+', htmlrule, 3)
        if len(fields) == 4:
          tag = fields[1]
          if tag == '*':
            tag = True
          attribs = {}
          invals = fields[2].split(',')
          for val in invals:
            if val == '*' or val.startswith('!'):
              pass
            else:
              attribs[val] = True
          hformat, outvals = fields[3].split(':')
          outvals = outvals.split(',')
          self.parse_rules.append([tag, attribs, invals, hformat, outvals])
        else:
          err('Malformed HTML parse rule: %s' % htmlrule)

      elif htmlrule.startswith('!filter'):
        fields = re.split('[ \t]+', htmlrule, 2)
        if len(fields) == 3:
          tag = fields[1]
          value = fields[2]
          self.filters[tag] = re.sub('^\s+|\s+$', '', value)
        else:
          err('Malformed HTML filter: %s' % htmlrule)

      else:
        err('Invalid htmlparse.config line: %s' % htmlrule)

    if VERBOSE:
      out('Done loading HTML config (%d definitions, %d parse rules, %d filters)' % (len(self.parse_rules), len(self.definitions), len(self.filters)))
  # /HTMLParser.__init__
  
  def extractResources(self, unpacker, baseurl, htmltext):
    headers = []
    resources = []
    remoteresources = {}
    js = ''

    try:
      soup = bs4.BeautifulSoup(htmltext)
    except Exception as e:
      err('Unable to initialize HTML: %s' % str(e))
      sys.exit(1)
    
    # Using a strange loop structure to process elements in order.
    for elt in soup.findAll(True):
      par = elt.parent
      attrMods = {}
      removeTag = False
      clearTag = False
      for tag, attribs, invals, hformat, outvals in self.parse_rules:

        # See if this element matches the current rule.
        if elt not in par.findAll(tag, attribs, recursive=False):
          continue
      
        now = {}

        # Check for negated match
        ignore = False
        for val in invals:
          if val.startswith('!'):
            val = val[1:]
            try:
              v = elt[val]
              ignore = True
              break
            except:
              # The element contains the key.
              # For some reason, |val in elt| does not work.
              pass
        if ignore: continue

        for val in outvals:
          if val == '*':
            now['*'] = ''
          elif val == 'contents':
            try: 
              now['contents'] = ' '.join(map(str, elt.contents))
            except KeyError: 
              now['contents'] = ''
            except UnicodeEncodeError: 
              now['contents'] = ' '.join(map(str, str(elt.contents)))
          elif val == 'name':
            # %%% Unable to reference actual |name| attribute.
            now['name'] = elt.name
          elif val == 'id':
            try: 
              now[val] = str(elt[val])
            except KeyError: 
              now[val] = generateId(soup, elt)
          else:
            try: 
              now[val] = str(elt[val])
            except KeyError: 
              warn('Element does not contain expected attribute: %s' % val)
              now[val] = ''

        # Normalize when assigning to variables.
        for k in now: 
          # If this fails, it means that we are trying to get the
          # result in python.
          if hformat in self.definitions:
            if not hformat.startswith('raw'):
              #now[k] = re.sub('([^a-zA-Z0-9])', lambda m: ('\\x%02x' % ord(m.group(1))), now[k])
              # %%% Probably not sufficient escaping.
              #now[k] = re.sub('\\', '\\\\', now[k])
              now[k] = re.sub('\'', '\\\'', now[k])
              now[k] = "'%s'" % now[k]

        if hformat in self.definitions: 
          definition = self.definitions[hformat]
          fmt = definition.split('%s')
          if len(fmt) - 1 == len(outvals):
            lineout = ''
            for i in range(0, len(outvals)):
              lineout += fmt[i]
              lineout += now[outvals[i]]
            lineout += fmt[-1] + '\n'

            if elt.name in self.filters:
              lineout = re.sub(self.filters[elt.name], '', lineout)
            if '*' in self.filters:
              lineout = re.sub(self.filters['*'], '', lineout, re.I)
            if hformat.startswith('header'):
              headers.append(lineout)
            else:
              if 'src' in now:
                url = now['src']
              elif 'href' in now:
                url = now['href']
              else:
                url = None
                
              for attr in ['onclick', 'onload']:
                if attr in attribs:
                  attrMods[attr] = None

              if url is None:
                # Gather an embedded resource.
                resource = Resource(elt, url, hformat, lineout)
                resources.append(resource)

                # Mark script elements for removal.
                if elt.name == 'script':
                  attrlen = len(elt.attrs)
                  if attrlen == 0 or (attrlen == 1 and 'type' in elt.attrs):
                    removeTag = True
                  else:
                    clearTag = True
              else:
                # Pull in a linked file.
                if url in remoteresources:
                  resource = remoteresources[url]
                  isNew = False
                else:
                  resource = Resource(elt, url, hformat, lineout)
                  resources.append(resource)
                  remoteresources[url] = resource
                  isNew = True

                if elt.name == 'script' and 'src' in attribs:
                  # Don't remove the entire element if there are
                  # additional attributes because it may be referenced
                  # by the code itself.
                  # See https://www.coursera.org.
                  attrlen = len(elt.attrs)
                  if attrlen == 1 or (attrlen == 2 and 'type' in elt.attrs):
                    removeTag = True
                  else:
                    attrMods['src'] = None

                if SAVEALL:
                  if 'href' in attribs and elt.name == 'link':
                    if isNew:
                      status, ctype, encoding, data, filepath = unpacker.fetch(url, baseurl)
                      resource.filename = getFileName(filepath)
                      if ctype in CSS_CONTENT_TYPES:
                        cssparser = CSSParser()
                        cssparser.parse(data, encoding, url)
                      elif ctype in IMAGE_CONTENT_TYPES:
                        pass
                      else:
                        warn('Unsupported link content type for %s: %s' % (url, ctype))
                    if resource.filename is not None:
                      attrkey = 'href'
                      attrMods[attrkey] = resource.filename
                      if VERBOSE:
                        out('Replacing %s: %s -> %s' % (attrkey, url, attrMods[attrkey]))

                  elif 'src' in attribs and (elt.name == 'img' or elt.name == 'input'):
                    if isNew:
                      status, ctype, encoding, data, filepath = unpacker.fetch(url, baseurl)
                      resource.filename = getFileName(filepath)
                    if resource.filename is not None:
                      attrkey = 'src'
                      attrMods[attrkey] = resource.filename
                      if VERBOSE:
                        out('Replacing %s: %s -> %s' % (attrkey, url, attrMods[attrkey]))

          else:
            err('Invalid htmlparse.config parameter count: %s' % hformat)
        else:
          warn('Undefined HTML format rule: %s' % hformat)

      # Clean up the HTML.
      # %%% Should ideally replace with comments.
      if removeTag:
        elt.extract()
      elif clearTag:
        elt.clear()
      else:
        for attr, val in attrMods.items():
          if val is None:
            del elt[attr]
          else:
            elt[attr] = val;
    
    for res in resources:
      elem = res.getElement()
      typ = res.getType()
      tag = res.getTag()
      url = res.getURL()
      # Some weird URLs have multiple lines.
      # See http://www.mediamatters.org.
      if url is None: url = baseurl
      url = re.sub('\n', ' ', url)
        
      if typ == 'rawSCRIPT':
        isjs = True
        attrs = elem.attrs
        if 'type' in attrs:
          if attrs['type'] not in JS_CONTENT_TYPES:
            warn('Skipping script element with non-JS content type: %s' % attrs['type'])
            isjs = False
        else:
          warn('Script element with no type attribute')
        if isjs:
          text = normalizeText(res.getContent())
          js += '// %s, %s: %s\n%s\n' % (typ, tag, url, text)
      elif typ in ['eventBODYONLOAD', 'eventIMAGEONLOAD', 'eventONCLICK']:
        # Remove newlines from attribute values.
        text = re.sub('\n', '', normalizeText(res.getContent()))
        js += '// %s, %s: %s\n%s\n' % (typ, tag, url, text)
      elif typ in ['rawELEMENT']:
        js += '// %s, %s: %s\n' % (typ, tag, url)
        if tag == 'script':
          status, ctype, encoding, data, filepath = unpacker.fetch(url, baseurl)
          if ctype not in JS_CONTENT_TYPES:
            warn('Non-JavaScript content type for %s: %s' % (url, ctype))
          js += '// Status: ' + str(status) + '\n'
          if data is not None:
            if encoding is None:
              encoding = 'utf-8'
            js += data.decode(encoding) + '\n'
          
      else:
        js += '// %s, %s: %s\n' % (typ, tag, url)
      # Separate file content with an additional line.
      js += '\n'

    headerstr = ''
    for header in headers:
      # |headers| contains JavaScript for DOM setup.
      # %%% Not currently used. Could be very useful if improved.
      headerstr += '// %s\n%s\n' % (baseurl, header)

    bodyhtml = ''
    for elt in soup.body.contents:
      if isinstance(elt, bs4.Comment):
        bodyhtml += '<!--' + str(elt) + '-->\n'
      elif isinstance(elt, bs4.NavigableString):
        bodyhtml += str(elt)
      else:
        bodyhtml += elt.prettify()

    headhtml = ''
    for elt in soup.head.contents:
      if isinstance(elt, bs4.Comment):
        headhtml += '<!--' + str(elt) + '-->\n'
      elif isinstance(elt, bs4.NavigableString):
        headhtml += str(elt)
      else:
        headhtml += elt.prettify()

    return js, headhtml, bodyhtml, headerstr
  # /extractResources

class Unpacker():

  # Create an Unpacker.
  def __init__(self, options) :
    # |start| is the root node in the tree, do not destroy it.
    self.start = options.getRoot()
    # |rooturl| contains information about decodings, and continuity 
    # between decodings.
    self.rooturl = {}

    self.url = options.url

    # Keep data in |streams| in case we don't end in one of the end_states.
    self.forceStreams = False
    self.streams = {}
    # Dictionary to avoid repeating information (addressed by unique url)
    self.seen = {} 

    # Options

    # UnpackOpts user options.
    self.OPTIONS = options 
    
    # Set to true by the MZ case.
    # %%% Doesn't seem to be used.
    self.binExists = False

    if self.OPTIONS.veryverbose:
      self.OPTIONS.verbose = True

    self.hparser = HTMLParser(self.OPTIONS.htmlparseconfig)
  # /Unpacker.__init__

  def unpack(self):
    # Done setup, now initialize the decoding.
    self.startTime = time.time()

    if self.url:
      if not self.OPTIONS.quiet:
        out('Root URL: %s' % self.url)
      status, ctype, encoding, content, filepath = self.fetch(self.url, self.OPTIONS.defaultreferer)
      if content is not None:
        if ctype not in HTML_CONTENT_TYPES:
          warn('Non-HTML content type for %s: %s' % (self.url, ctype))
        if encoding is None:
          encoding = 'ascii'
        text = content.decode(encoding)
        self.extract(self.url, text)
    else:
      # Local file decode
      # %%% Untested
      if self.data:
        if self.data.startswith('\xD4\xC3\xB2\xA1'): # pcap
          warn("Unsupported case: %s" % "pcap")
        else:
          self.extract(self.OPTIONS.file, self.data)
  # /unpack

  def fetch(self, url, referer):
    # Get the absolute URL relative to the starting URL.
    url = urllib.parse.urljoin(referer, url)

    if VERBOSE:
      out('Fetching %s' % url)

    if url.startswith('hcp:'):
      warn('Not fetching hcp url: %s' % url)
      return None, None, None, None, None

    if url.startswith('127.0.0.1'):
      warn('Not fetching local file: %s', url)
      return None, None, None, None, None

    if not referer:
      referer = self.OPTIONS.defaultreferer

    try:
      request = urllib.request.Request(url)
      request.add_header('Referer', referer)
      request.add_header('User-Agent', 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0)')
      opener = urllib.request.build_opener()

    except Exception as e:
      err('Failure initializing request for %s: %s' % (url, str(e)))
      status = 500
      return status, None, None, None, None

    try:
      resp = opener.open(request)
    except urllib.error.HTTPError as e:
      # Don't load 404 error pages.
      # See http://www.jspell.com/ajax-spell-checker.html
      status = e.getcode()
      err('HTTP error while retrieving %s: %r' % (url, status))
      content = None
      ctype = None
      return status, None, None, None, None
    except Exception as e:
      err('Failed to retrieve %s: %s' % (url, str(e)))
      status = 500
      return status, None, None, None, None

    status = resp.getcode()
    # In Python 2, |respinfo| is a |mimetools.Message| object.
    # In Python 3, it is an |HTTPMessage|.
    respinfo = resp.info()
    if self.OPTIONS.veryverbose:
      out('Headers:\n%s\n' % str(respinfo))
    content = resp.read()
    
    compression = respinfo.get('Content-Encoding')
    if compression is not None:
      compression = compression.lower()
      if compression == 'gzip':
        content = gzip.decompress(content)
      else:
        warn('Unsupported Content-Encoding header: %s' % encoding)

    plist = None
    ctypehdr = respinfo.get('Content-Type')
    ctypeparts = [part.strip() for part in ctypehdr.split(';')]
    ctype = ctypeparts[0].strip().lower()
    plist = ctypeparts[1:]
    encoding = None
    for p in plist:
      if p.startswith('charset='):
        encoding = p[8:].lower()
        if encoding == 'utf8':
          encoding = 'utf-8'

    #out('STATUS:', status, 'ENCODING:', encoding, 'CTYPE:', ctype)

    if content.startswith(b'MZ'):
      warn('MZ case was hit: %s' % url)
      if SAVEALL:
        urlbase = getFileName(url)
        mz = self.createFile(urlbase, content, 'bin')

    if content.startswith(b'CWS') or content.startswith(b'FWS'):
      # This case is triggered by HTML embed (and object?) tags that
      # pull in Flash scripts.
      warn('Flash content not currently supported: %s' % url)

      # %%% This code comes from the original jsunpack. I'm not
      # %%% sure exactly what it does.
      #msgs, urls = swf.swfstream(content)
      #for url in urls:
      #  swfjs_obj = re.search('javascript:(.*)', url, re.I)
      #  if swfjs_obj:
      #    swfjs += swfjs_obj.group(1) + '\n'
      #  else:
      #    # URL only
      #    multi = re.findall('https?:\/\/([^\s<>\'"]+)', url)
      #    if multi:
      #      for m in multi:
      #        self.rooturl[self.url].setChild(m, 'swfurl')
      #    else:
      #      # No http
      #      if url.startswith('/'):
      #        #relative root path
      #        firstdir = re.sub('([^/])/.*$', '\\1', self.url)
      #        m = firstdir + url
      #      else:
      #        #relative preserve directory path
      #        lastdir = re.sub('/[^\/]*$', '/', self.url)
      #        m = lastdir + url
      #      self.rooturl[self.url].setChild(m, 'swfurl')

    if not self.OPTIONS.quiet:
      out('Downloaded %s %s' % (ctype, url))

    filepath = None
    if SAVEALL:
      filename = getFileName(url)
      if not filename:
        filename = getDomain(url)
      ext = getExtension(url, ctype)
      filepath = self.createFile(filename, content, ext)

    return status, ctype, encoding, content, filepath
  # /fetch

  def extract(self, url, text):
    if SAVEALL:
      self.createFile(self.OPTIONS.app, text, 'original.html')

    js, headhtml, bodyhtml, headers = self.hparser.extractResources(self, url, text)

    if len(js) > 0:
      self.createFile(self.OPTIONS.app, js, 'js')
    if len(headers) > 0:
      self.createFile(self.OPTIONS.app, headers, 'headers.js')
    if len(bodyhtml) > 0:
      self.createFile(self.OPTIONS.app, bodyhtml, 'html')
    if len(headhtml) > 0:
      self.createFile(self.OPTIONS.app, headhtml, 'head.html')

    for fileattrs in SYMLINK_FILES:
      assert len(fileattrs) == 3, 'Invalid SYMLINK_FILES configuration: %r' % fileattrs
      srcdir, destname, srcname = fileattrs
      symlink(srcdir, self.OPTIONS.outdir, destname, srcname)
  # /extract

  def createFile(self, base, content, ext):
    if len(content) == 0:
      return None
    outdir = self.OPTIONS.outdir
    # No output directory means don't output anything.
    if not outdir:
      return None

    if ext and not base.endswith('.' + ext):
      filename = base + '.' + ext
    else:
      filename = base
    outfile = os.path.join(outdir, filename)

    if not os.path.isdir(outdir):
      os.mkdir(outdir)
    if os.path.isdir(outdir):
      if isinstance(content, str):
        ffile = open(outfile, 'w')
      else:
        ffile = open(outfile, 'wb')
      ffile.write(content)  
      ffile.close()
    else:
      err('Directory %s is not accessible' % outdir)
    return outfile
  # /createFile

# /Unpacker
 
class UnpackOpts:
  HTMLPARSECONFIG = ''
  HTMLCFGFILE = os.path.join(UTILDIR, 'htmlparse.config')
  fin = open(HTMLCFGFILE, 'r')
  if fin:
    HTMLPARSECONFIG = fin.read()
    fin.close()

  def __init__(self, infile, app, outdir):
    if isURL(infile):
      self.url = infile
      self.protocol = getProtocol(infile)
      self.file = None
      self.data = None
      self.relpath = getRelativePath(self.url)
      self.ext = getExtension(self.url)
      self.app = app
      if self.app is None:
        self.app = re.sub('/', '-', self.relpath)
    else:
      self.file = infile
      fin = open(self.file, 'r')
      if fin:
        self.data = fin.read()
        fin.close()
      self.url = None
      self.protocol = None
      info = get_file_info(infile)
      self.ext = info['ext']
      self.relpath = getRelativePath(self.file)
      self.app = info['app']

    if outdir is not None:
      self.outdir = os.path.abspath(outdir)
      if os.path.exists(self.outdir):
        if OVERWRITE:
          if os.path.isfile(self.outdir):
            err('File exists at output directory %s' % self.outdir)
            sys.exit(1)
          else:
            warn('Output directory %s exists' % self.outdir)
        else:
          err('Output directory exists, use -f to overwrite')
          sys.exit(1)
    else:
      # Get a unique, non-existent directory.
      self.outdir = get_output_dir(UNPACKDIR, self.relpath)

    self.active = False
    self.quiet = not VERBOSE
    self.verbose = VERBOSE
    self.veryverbose = False
    self.htmlparseconfig = UnpackOpts.HTMLPARSECONFIG
    self.fasteval = False
    self.saveallfiles = SAVEALL
    self.saveallexes = SAVEALL
    self.proxy = None
    self.currentproxy = None
    self.timeout = 30
    self.redoevaltime = 1
    self.maxruntime = 0
    self.debug = False
    self.nojs = False
    self.defaultreferer = 'http://www.example.com'
    
  def __str__(self):
    return str(self.__dict__)

  def getRoot(self):
    if self.url is not None:
      return self.url
    else:
      assert self.file is not None, 'Neither url nor file is set'
      return self.file

# end UnpackOpts

def isURL(uri):
  return getProtocol(uri) in ['http', 'https']
# end isURL

def getProtocol(url):
  urlparts = urllib.parse.urlparse(url)
  prot = urlparts[0]
  return prot
# end getProtocol

def getDomain(url):
  urlparts = urllib.parse.urlparse(url)
  domain = urlparts[1]
  return domain
# end getDomain

def getRelativePath(url):
  urlparts = urllib.parse.urlparse(url)
  filepath = urlparts[2]
  if filepath.startswith('/'):
    filepath = filepath[1:]
  if isURL(url):
    # Prepend the domain
    filepath = os.path.join(urlparts[1], filepath)
  return filepath
# /getRelativePath

def getExtension(url, ctype=None):
  ext = None
  if ctype is not None:
    if ctype in JS_CONTENT_TYPES:
      ext = 'js'
    elif ctype in HTML_CONTENT_TYPES:
      ext = 'html'
    elif ctype in IMAGE_CONTENT_TYPES:
      parts = ctype.split('/')
      ext = parts[-1]

  if ext is None:
    filename = getFileName(url)
    if filename == '':
      # Assume HTML file type.
      ext = 'html'
    else:
      subparts = re.split('\.', filename)
      if len(subparts) <= 1:
        ext = 'html'
      else:
        ext = subparts[-1]
    return ext
# /getExtension

def getFileName(url):
  urlparts = urllib.parse.urlparse(url)
  filepath = urlparts[2]
  # Split the path component and return the filename.
  filename = filepath.split('/')[-1]
  return filename
# /getFileName

def loadDir(filename):
  absdir = os.path.abspath(os.path.dirname(filename))
  if not os.path.isdir(absdir):
    try:
      os.makedirs(absdir)
    except Exception as e:
      err(e)
      sys.exit(1)
  return absdir
# end loadDir

# Load all JavaScript from loaded by a particular HTML file.
def loadFile(infile, app, outdir):
  opts = UnpackOpts(infile, app, outdir)

  try:
    js = Unpacker(opts)
    js.unpack()
    return True
  except Exception as e:
    err("%s: %s" % (str(e), infile))
    err(traceback.format_exc())
    return False
# end loadFile

NEXT_ID = 0
def generateId(soup, elt):
  global NEXT_ID
  newid = 'unpack' + str(NEXT_ID)
  NEXT_ID += 1
  while soup.find(id=newid) is not None:
    newid = 'unpack' + str(NEXT_ID)
    NEXT_ID += 1
  elt['id'] = newid
  return newid

def normalizeText(s):
  s = re.sub('\r\n', '\n', s)
  s = re.sub('\r', '\n', s)
  return s

def main():
  parser = OptionParser(usage="%prog URL|HTML")
  parser.add_option('-v', '--verbose', action='store_true', default=False, dest='verbose', help='generate verbose output')
  parser.add_option('-s', '--saveall', action='store_true', default=False, dest='saveall', help='save all downloadeded files')
  parser.add_option('-f', '--overwrite', action='store_true', default=False, dest='overwrite', help='overwrite files if output directory already exists')
  parser.add_option('-a', '--app', action='store', default=None, dest='app', help='application name')
  parser.add_option('-o', '--outdir', action='store', default=None, dest='outdir', help='output directory')

  opts, args = parser.parse_args()

  if len(args) != 1:
    parser.error("Invalid number of arguments")

  #global cfg
  #cfg = imp.load_source("cfg", args[0])
  #assert os.path.isdir(cfg.SOURCEDIR), "Source path %s doesn't exist." % cfg.SOURCEDIR

  infile = args[0]

  global VERBOSE, SAVEALL, OVERWRITE
  VERBOSE = opts.verbose
  SAVEALL = opts.saveall
  OVERWRITE = opts.overwrite

  loadFile(infile, opts.app, opts.outdir)

if __name__ == "__main__":
  main()



