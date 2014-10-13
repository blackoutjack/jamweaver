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
import http.cookiejar
import socket
import codecs
import gzip
import cssutils
import logging

#
# TODO:
# Further testing
#

#
# This script was based loosely on the jsunpack utility, which can be
# accessed via SVN at this URL:
#
# http://jsunpack-n.googlecode.com/svn/trunk/
#
# Some code was originally copied from that package, but the logic has
# mostly been rewritten.
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
from util import get_unique_filename
from util import fatal
from util import err
from util import warn
from util import out
from util import symlink

try:
  import bs4
except ImportError as e:
  fatal("Unable to import BeautifulSoup 4: %s.\nFor Ubuntu, use ``apt-get install python3-bs4''" % str(e))

#JSUNPACKPKG = os.path.join(JAMPKG, 'util', 'jsunpack')
#sys.path.append(JSUNPACKPKG)
#import swf

JS_CONTENT_TYPES = [
  'text/javascript',
  'application/x-javascript',
  'application/javascript',
  # Not sure what this denotes, but it appears to be JS in bing.com.
  'text/rms',
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
  'image/jpeg',
  'image/vnd.microsoft.icon',
  'image/x-icon',
]

OBJECT_CONTENT_TYPES = [
  'application/x-shockwave-flash',
]

EVENT_ATTRIBUTES = [
  'onafterprint',
  'onbeforeprint',
  'onbeforeunload',
  'onerror',
  'onhaschange',
  'onload',
  'onmessage',
  'onoffline',
  'ononline',
  'onpagehide',
  'onpageshow',
  'onpopstate',
  'onredo',
  'onresize',
  'onstorage',
  'onundo',
  'onunload',
  'onblur',
  'onchange',
  'oncontextmenu',
  'onfocus',
  'onformchange',
  'onforminput',
  'oninput',
  'oninvalid',
  'onselect',
  'onsubmit',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onclick',
  'ondblclick',
  'ondrag',
  'ondragend',
  'ondragenter',
  'ondragleave',
  'ondragover',
  'ondragstart',
  'ondrop',
  'onmousedown',
  'onmousemove',
  'onmouseout',
  'onmouseover',
  'onmouseup',
  'onmousewheel',
  'onscroll',
  'oncanplay',
  'oncanplaythrough',
  'ondurationchange',
  'onemptied',
  'onended',
  'onerror',
  'onloadeddata',
  'onloadedmetadata',
  'onloadstart',
  'onpause',
  'onplay',
  'onplaying',
  'onprogress',
  'onratechange',
  'onreadystatechange',
  'onseeked',
  'onseeking',
  'onstalled',
  'onsuspend',
  'ontimeupdate',
  'onvolumechange',
  'onwaiting',
]

JS_RESOURCE_TYPES = [
  'script.inline',
  'script.src',
  'script.href',
]
for eventattr in EVENT_ATTRIBUTES:
  if eventattr.startswith('on'):
    event = eventattr[2:]
  else:
    event = eventattr
  JS_RESOURCE_TYPES.append('script.event.' + event)

HTML_RESOURCE_TYPES = [
  'root.html',
]

CSS_RESOURCE_TYPES = [
  'link.stylesheet',  
]

IMAGE_RESOURCE_TYPES = [
  'img.src',
  'input.src',
  'link.stylesheet.image',
  'link.icon',
  'element.background',
]

OBJECT_RESOURCE_TYPES = [
  'embed.src',
]

class Resource:
  COOKIE_POLICY = http.cookiejar.DefaultCookiePolicy(blocked_domains=None, allowed_domains=None, netscape=True, rfc2965=False, rfc2109_as_netscape=None, hide_cookie2=False, strict_domain=False, strict_rfc2965_unverifiable=True, strict_ns_unverifiable=False, strict_ns_domain=http.cookiejar.DefaultCookiePolicy.DomainLiberal, strict_ns_set_initial_dollar=False, strict_ns_set_path=False)
  COOKIES = http.cookiejar.CookieJar(policy=COOKIE_POLICY)
  OPENER = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(COOKIES))
  
  def __init__(self, type, url=None, element=None, status=None, ctype=None, data=None, encoding=None, filepath=None):
    self.type = type
    self.url = url
    self.status = status
    self.setContentType(ctype)
    self.data = data
    self.encoding = encoding

    self.filepath = filepath
    if self.filepath is not None:
      self.filename = getFileName(self.filepath)
    else:
      self.filename = None

    self.element = element
    self.fetched = False
  # /Resource.__init__

  def getElement(self):
    return self.element
  # /getElement

  def getType(self):
    return self.type
  # /getType

  # Return the *original* URL.
  def getURL(self):
    return self.url
  # /getURL

  # Return the URI of the current resource.
  def getURI(self):
    uri = None
    if self.isFetched():
      uri = self.getRelativeFilePath()
    if uri is None:
      uri = self.getURL()
    if uri is None:
      warn('Unable to determine resource URI: %s' % self.getType())
    return uri

  def getStatus(self):
    return self.status
  # /getStatus
  
  def setStatus(self, stat):
    self.status = stat
  # /setStatus

  def getContentType(self):
    return self.contenttype
  # /getType

  def checkContentType(self):
    ct = self.getContentType()
    u = self.getURL()
    t = self.getType()
    if ct is None:
      return False

    if self.isScript() and ct not in JS_CONTENT_TYPES:
      warn('Non-JavaScript content type for %s %s: %s' % (t, u, ct))
      return False
    elif self.isImage() and ct not in IMAGE_CONTENT_TYPES:
      warn('Non-image content type for %s %s: %s' % (t, u, ct))
      return False
    elif self.isHTML() and ct not in HTML_CONTENT_TYPES:
      warn('Non-HTML content type for %s %s: %s' % (t, u, ct))
      return False
    elif self.isCSS() and ct not in CSS_CONTENT_TYPES:
      warn('Non-CSS content type for %s %s: %s' % (t, u, ct))
      return False
    elif self.isObject() and ct not in OBJECT_CONTENT_TYPES:
      warn('Non-object content type for %s %s: %s' % (t, u, ct))
      return False

    return True
  
  def setContentType(self, ctype):
    if isinstance(ctype, str):
      # Convert content type to lowercase. "text/JavaScript" occurs in
      # in amazon.com.
      self.contenttype = ctype.lower()
    else:
      self.contenttype = ctype
    self.checkContentType()
  # /setContentType

  def getData(self):
    return self.data
  # /getData

  def setData(self, data):
    self.data = data
  # /setData

  def getEncoding(self):
    if self.encoding is None:
      return 'utf-8'
    return self.encoding
  # /getEncoding

  def setEncoding(self, enc):
    self.encoding = enc
  # /setEncoding

  def getFilePath(self):
    return self.filepath
  # /getFilePath

  def setFilePath(self, path):
    self.filepath = path
  # /setFilePath

  def getStoragePrefix(self):
    if self.type in IMAGE_RESOURCE_TYPES:
      return 'images'
    elif self.type in JS_RESOURCE_TYPES:
      return 'scripts'
    elif self.type in CSS_RESOURCE_TYPES:
      return 'css'
    return None
  
  def isScript(self):
    return self.getType() in JS_RESOURCE_TYPES

  def isImage(self):
    return self.getType() in IMAGE_RESOURCE_TYPES

  def isHTML(self):
    return self.getType() in HTML_RESOURCE_TYPES

  def isCSS(self):
    return self.getType() in CSS_RESOURCE_TYPES

  def isObject(self):
    return self.getType() in OBJECT_RESOURCE_TYPES

  def getRelativeFilePath(self):
    relpath = None
    if self.filepath is not None:
      relpath = os.path.relpath(self.filepath, OUTDIR)
    elif self.filename is not None:
      relpath = self.filename
    elif self.url is not None:
      urlparts = urllib.parse.urlparse(self.url)
      relpath = urlparts[2]
      if relpath.startswith('/'):
        relpath = relpath[1:]

      # Separate certain types of resources for organizational purposes.
      stordir = self.getStoragePrefix() 
      if stordir is not None:
        relpath = os.path.join(stordir, relpath)

    if relpath.endswith('/'):
      relpath += self.getFileName()
    if relpath == '':
      relpath = self.getFileName()
    if relpath == '':
      warn('Unable to determine relative path for URL: %s' % self.url)
    return relpath

  def getFileName(self, ext=None):
    if self.filename is None:
      if self.filepath is not None:
        self.filename = getFileName(self.filepath)
      elif self.url is not None:
        self.filename = getFileName(self.url)

      if not self.filename:
        self.filename = getDomain(self.url)

      if ext is None:
        ext = getExtension(self.url, self.contenttype)

      if not self.filename.endswith('.' + ext):
        self.filename += '.' + ext
    return self.filename
  # /getFileName

  def isFetched(self):
    return self.fetched

  def setFetched(self):
    self.fetched = True

  def updateAttribute(self, attr, val):
    elt = self.getElement()
    if elt is None:
      warn('Cannot update resource attribute without element: %s' % self.getType())
      return False
    
    t = self.getType()
    if attr not in elt.attrs:
      elt[attr] = val
      if VERBOSE:
        out('Set %s %s: %s' % (t, attr, val))
      return True
    elif elt[attr] != val:
      prev = elt[attr]
      elt[attr] = val
      if VERBOSE:
        out('Replaced %s %s: %s -> %s' % (t, attr, prev, val))
      return True
    return False

  def fetch(self, referer=None, accept=None):
    url = self.url
    if url is None:
      warn('Attempting to fetch resource without URL')
      return False
    if VERBOSE:
      out('Fetching %s' % url)

    try:
      request = urllib.request.Request(url)
      if referer is not None:
        request.add_header('Referer', referer)
      request.add_header('User-Agent', 'Mozilla/5.0 (X11; Linux x86_64; rv:17.0) Gecko/20140807 Firefox/17.0')
      request.add_header('Accept-Language', 'en-US,en;q=0.5')
      request.add_header('Accept-Encoding', 'gzip') #, deflate
      request.add_header('Cache-Control', 'no-cache')
      if accept is not None:
        request.add_header('Accept', accept)
    except Exception as e:
      err('Failure initializing request for %s: %s' % (url, str(e)))
      self.setStatus(500)
      return False

    try:
      resp = Resource.OPENER.open(request, timeout=10)
    except urllib.error.HTTPError as e:
      # Don't load 404 error pages.
      # See http://www.jspell.com/ajax-spell-checker.html
      status = e.getcode()
      warn('HTTP error while retrieving %s: %r' % (url, status))
      self.setStatus(status)
      return False
    except Exception as e:
      err('Failed to retrieve %s: %s' % (url, str(e)))
      self.setStatus(500)
      return False

    # Process a successful request.
    status = resp.getcode()
    # In Python 2, |respinfo| is a |mimetools.Message| object.
    # In Python 3, it is an |HTTPMessage|.
    respinfo = resp.info()
    if VERYVERBOSE:
      out('Headers for %s (status %d):\n%s\n' % (url, status, str(respinfo)))
    content = resp.read()
    
    # Decompress a zipped file.
    compression = respinfo.get('Content-Encoding')
    if compression is not None:
      compression = compression.lower()
      if compression == 'gzip':
        content = gzip.decompress(content)
      else:
        warn('Unsupported Content-Encoding header: %s' % encoding)

    encoding = None
    ctypehdr = respinfo.get('Content-Type')
    if ctypehdr is None:
      warn('No Content-Type header for %s, assuming text/html' % url)
      # %%% Should be able to pass a default.
      ctype = 'text/html'
    else:
      ctypeparts = [part.strip() for part in ctypehdr.split(';')]
      ctype = ctypeparts[0].strip().lower()
      plist = ctypeparts[1:]
      for p in plist:
        if p.startswith('charset='):
          encoding = p[8:].lower()
          if encoding == 'utf8':
            encoding = 'utf-8'
    
    self.setStatus(status)
    self.setContentType(ctype)
    self.setData(content)
    if encoding is not None:
      self.setEncoding(encoding)

    if VERBOSE:
      out('Downloaded %s %s' % (ctype, url))

    relpath = self.getRelativeFilePath()
    filepath = createFile(relpath, content)
    self.setFilePath(filepath)
    
    self.setFetched()
    return True
  # /fetch

class CSSParser(cssutils.CSSParser):
  # Suppress all but the worst errors.
  cssutils.log.setLevel(logging.FATAL)

  def __init__(self):
    # Don't automatically fetch @import URLs.
    def fetcher(url): return None, None
    super().__init__(log=None, loglevel=None, raiseExceptions=None, fetcher=fetcher, parseComments=True, validate=True)

  def extractResources(self, data, encoding, url):
    text = data.decode(encoding, errors='replace')
    stylesheet = self.parseString(text, href=url)

    images = []
    imports = []
    for rule in stylesheet.cssRules:
      if rule.type == cssutils.css.CSSRule.IMPORT_RULE:
        href = rule.href
        impurl = combineURLs(url, href)
        imports.append(impurl)

        impfilename = getRelativePath(impurl, referer=url)
        rule.href = impfilename
        if VERBOSE:
          out('Replaced css.import: %s -> %s' % (href, impfilename))

      if rule.type == cssutils.css.CSSRule.STYLE_RULE:
        decl = rule.style
        for prop in decl.getProperties():
          replaced = False
          origvals = []
          if prop.name == 'background-image':
            propvals = prop.propertyValue
            newvals = []
            for propval in propvals:
              propvalstr = str(propval.value)
              origvals.append(propvalstr)
              image = None
              if propval.type == cssutils.css.Value.URI:
                absuri = propval.absoluteUri
                # %%% Generalize
                if absuri.startswith('data:'):
                  # %%% Extract the data
                  warn('Unsupported %s URI for %s property' % ('data', prop.name))
                else:
                  image = absuri
              elif propval.type == cssutils.css.Value.COLOR_VALUE:
                pass
              elif propval.type == cssutils.css.Value.NUMBER:
                pass
              elif propval.type == cssutils.css.Value.DIMENSION:
                pass
              elif propval.type == cssutils.css.Value.PERCENTAGE:
                pass
              elif propval.type == cssutils.css.Value.IDENT:
                # Things like "bottom" and "linear".
                pass
              elif propval.type == cssutils.css.Value.FUNCTION:
                # This covers linear-gradient(...) stuff.
                pass
              elif propvalstr == 'none':
                # Do nothing
                pass
              else:
                if propval.type == cssutils.css.Value.IDENT:
                  warn('Maybe-supported CSS ident value: %s' % propval.cssText)
                  
                image = combineURLs(url, propvalstr) 

              if image is not None:
                images.append(image)
                filename = getRelativePath(image, referer=url)
                newtext = 'url(' + filename + ')'
                newvals.append(newtext)
                replaced = True
              else:
                newvals.append(propvalstr)
            if replaced:
              newval = ' '.join(newvals)
              decl.setProperty(prop.name, value=newval, replace=True)
          elif prop.name == 'background':
            propvals = prop.propertyValue
            newvals = []
            for propval in propvals:
              propvalstr = str(propval.value)
              origvals.append(propvalstr)
              if propval.type == cssutils.css.Value.URI:
                absuri = propval.absoluteUri
                # %%% Generalize
                if absuri.startswith('data:'):
                  # %%% Extract the data
                  warn('Unsupported %s URI for %s property' % ('data', prop.name))
                else:
                  image = absuri
                  images.append(image)
                  filename = getRelativePath(image, referer=url)
                  newtext = 'url(' + filename + ')'
                  newvals.append(newtext)
                  replaced = True
              else:
                newvals.append(propvalstr)
            if replaced:
              newval = ' '.join(newvals)
              decl.setProperty(prop.name, value=newval, replace=True)

          if replaced and VERBOSE:
            origval = ' '.join(origvals)
            out('Replaced css.%s: %s -> %s' % (prop.name, origval, newval))

    encoding = stylesheet.encoding
    if encoding is None:
      encoding = 'utf-8'
    newcss = stylesheet.cssText.decode(encoding, errors='replace')
    return newcss, images, imports
  # /extractResources
# /CSSParser

class HTMLParser():
  # Static counter for id attribute generation.
  NEXT_ID = 0

  def __init__(self, url, encoding, app):
    self.resources = []
    self.remoteresources = {}
    self.js = ''
    self.url = url
    self.encoding = encoding
    self.app = app

  def loadRemoteResource(self, restype, url, referer, element):
    if url in self.remoteresources:
      resource = self.remoteresources[url]
    else:
      resource = Resource(restype, url=url, element=element, encoding=self.encoding)
      # Fetch scripts always, but other types only if SAVEALL.
      if resource.isScript() or SAVEALL:
        resource.fetch(referer=referer)
      self.remoteresources[url] = resource
    self.resources.append(resource)
    return resource

  def loadInlineResource(self, restype, element, ctype, text):
    resource = Resource(restype, element=element, ctype=ctype, data=text)
    self.resources.append(resource)
    return resource

  def saveInlineResource(self, resource, filename):
    relpath = filename
    stordir = resource.getStoragePrefix()
    if stordir is not None:
      relpath = os.path.join(stordir, relpath)
    abspath = os.path.join(OUTDIR, relpath)
    abspath = get_unique_filename(abspath)
    relpath = os.path.relpath(abspath, OUTDIR)
    abspath = createFile(relpath, resource.getData())
    resource.setFilePath(abspath)

    return resource

  def addToCatalog(self, filename, resource):
    relpath = resource.getRelativeFilePath()
    eltid = self.loadId(resource.getElement())
    restype = resource.getType()
    # %%% Should probably escape colons, remove newlines
    appendToFile(filename, '%s:%s:%s\n' % (restype, eltid, relpath))

  def generateId(self):
    newid = 'unpack' + str(HTMLParser.NEXT_ID)
    HTMLParser.NEXT_ID += 1
    while self.soup.find(id=newid) is not None:
      newid = 'unpack' + str(HTMLParser.NEXT_ID)
      HTMLParser.NEXT_ID += 1
    return newid
  
  def loadId(self, elt):
    if 'id' in elt.attrs:
      eltid = elt['id']
    else:
      eltid = self.generateId()
      elt['id'] = eltid
    return eltid
    
  def extractRemoteScript(self, elt):
    attrs = elt.attrs
    src = attrs['src'].strip()
    url = combineURLs(self.url, src)
    restype = 'script.src'
    resource = self.loadRemoteResource(restype, url, self.url, elt)
    
    status = resource.getStatus()
    ctype = resource.getContentType()
    encoding = resource.getEncoding()
    data = resource.getData()
    if data is None:
      return resource

    text = normalizeText(data.decode(encoding, errors='replace')) + '\n'
    self.js += '// URL: %s, status: %s, type: %s\n%s\n\n' % (url, status, ctype, text)

    self.addToCatalog('scripts.txt', resource)

    # Don't remove the entire element, but remove the src attribute.
    # See https://www.coursera.org.
    del elt['src']
    return resource

  def extractInlineScript(self, elt):
    attrs = elt.attrs
    if 'type' in attrs:
      ctype = attrs['type'].strip()
    else:
      if VERYVERBOSE:
        warn('Script element with no type attribute: %s' % str(elt))
      # Assume JavaScript, as browsers seem to do.
      ctype = 'text/javascript'

    text = ''
    for child in elt.contents:
      text += self.getElementContents(child)
    restype = 'script.inline'
    text = normalizeText(text).strip()
    resource = self.loadInlineResource(restype, elt, ctype, text) 
    self.saveInlineResource(resource, self.app + '.js')

    if not resource.checkContentType():
      # Don't add these to the JS script catalog or clear the contents.
      warn('Skipping script element with non-JS content type: %s' % attrs['type'])
      return resource

    self.addToCatalog('scripts.txt', resource)

    newjs = '// %s\n%s\n\n' % (restype, text)
    self.js += newjs

    # Don't remove the entire element, but clear out the contents.
    elt.clear()
    return resource

  def extractAnchor(self, elt):
    attrs = elt.attrs
    if 'href' not in attrs:
      return None

    href = attrs['href'].strip()
    if href.startswith('javascript:'):
      text = href[11:]
      ctype = 'text/javascript'
      restype = 'script.href'
      resource = self.loadInlineResource(restype, elt, ctype, text) 
      self.saveInlineResource(resource, self.app + '.js')
      self.addToCatalog('scripts.txt', resource)
      
      eltid = self.loadId(elt)
      esctext = re.sub('\'', '\\\'', text)
      newjs = "document.getElementById('%s').href = 'javascript:%s';" % (eltid, esctext)

      self.js += '// %s\n%s\n\n' % (restype, newjs)

      del elt['href']
      if VERBOSE:
        out('Converted a.href to JavaScript')

      return resource
    else:
      # Make the link target absolute.
      restype = 'a.href'
      url = combineURLs(self.url, href)
      # %%% Make a resource

      if url != href:
        elt['href'] = url
        if VERBOSE:
          out('Replaced %s: %s -> %s' % (restype, href, url))
      return None

  def extractLink(self, elt):
    attrs = elt.attrs
    if not 'href' in attrs:
      warn('HTML link tag without href attribute: %s' % str(elt))
      return None

    href = attrs['href'].strip()
    url = combineURLs(self.url, href)

    if 'rel' not in attrs:
      warn('HTML link tag without rel attribute, assuming stylesheet: %s' % str(elt))
      attrs['rel'] = ['stylesheet']
      
    # The |attrs['rel']| value is a list.
    if 'stylesheet' in attrs['rel']:

      stylesheets = [url]
      resource0 = None
      restype = 'link.stylesheet'
      while len(stylesheets) > 0:
        ssurl = stylesheets.pop(0)

        resource = self.loadRemoteResource(restype, ssurl, self.url, elt)

        encoding = resource.getEncoding()
        data = resource.getData()

        if data is not None:
          cssparser = CSSParser()
          newdata, imgs, imports = cssparser.extractResources(data, encoding, ssurl)
          # Transitively follow imports.
          stylesheets.extend(imports)

          for img in imgs:
            iresource = self.loadRemoteResource('link.stylesheet.image', img, ssurl, elt)
            self.addToCatalog('images.txt', iresource)
            
          # Rename the original CSS file for posterity.
          filepath = resource.getFilePath()
          if filepath is not None:
            relpath = resource.getRelativeFilePath()
            origparts = os.path.splitext(relpath)
            newparts = (origparts[0], '.original', origparts[1])
            origfilename = ''.join(newparts)
            origfilepath = os.path.join(OUTDIR, origfilename)
            os.rename(filepath, origfilepath)

            # Save the modified CSS file.
            createFile(relpath, newdata)
            self.addToCatalog('stylesheets.txt', resource)

        # Collect the root CSS file.
        if resource0 is None:
          resource0 = resource

      # Replace the href in the original link element.
      uri = resource0.getURI()
      resource0.updateAttribute('href', uri)
      return resource0

    if 'icon' in attrs['rel']:
      restype = 'link.icon'
      resource = self.loadRemoteResource(restype, url, self.url, elt)
      self.addToCatalog('images.txt', resource)

      uri = resource.getURI()
      resource.updateAttribute('href', uri)
      return resource

  def extractImage(self, elt):
    attrs = elt.attrs
    if 'src' not in attrs:
      if 'data-image-src' in attrs:
        # Observed this in http://www.alibaba.com.
        warn('Unsupported data-image-src attribute for tag: %s' % str(elt))
      else:
        warn('No src attribute for img tag: %s' % str(elt))
      return None

    src = attrs['src'].strip()
    if src.startswith('data:'):
      # %%% Extract the data
      warn('Unsupported data URI for img.src')
      return None

    url = combineURLs(self.url, src)
    restype = 'img.src'

    resource = self.loadRemoteResource(restype, url, self.url, elt)
    self.addToCatalog('images.txt', resource)

    uri = resource.getURI()
    resource.updateAttribute('src', uri)

    return resource

  def extractInput(self, elt):
    attrs = elt.attrs
    if 'src' not in attrs:
      return None

    if 'type' not in attrs or attrs['type'] != 'image':
      # |src| attribute is only meaningful for |image| elements,
      # but fetch the file anyway in case it's used dynamically.
      warn('Non-image input element with src attribute: %s' % str(elt))

    src = attrs['src'].strip()
    if src.startswith('data:'):
      # %%% Extract the data
      warn('Unsupported data URI for input.src')
      return None

    url = combineURLs(self.url, src)
    restype = 'input.src'

    resource = self.loadRemoteResource(restype, url, self.url, elt)
    self.addToCatalog('images.txt', resource)

    uri = resource.getURI()
    resource.updateAttribute('src', uri)

    return resource

  def extractEmbed(self, elt):
    attrs = elt.attrs
    if 'src' not in attrs:
      warn('No src attribute for embed tag: %s' % str(elt))
      return None

    src = attrs['src'].strip()
    if src.startswith('data:'):
      # %%% Extract the data
      warn('Unsupported data URI for embed.src')
      return None

    url = combineURLs(self.url, src)

    restype = 'embed.src'
    resource = self.loadRemoteResource(restype, url, self.url, elt)
    self.addToCatalog('objects.txt', resource)

    uri = resource.getURI()
    resource.updateAttribute('src', uri)

    return resource

  def extractResources(self, htmltext):

    try:
      self.soup = bs4.BeautifulSoup(htmltext)
    except Exception as e:
      err('Unable to initialize HTML parser: %s' % str(e))
      return None, None, None, None

    # Process elements in order of opening tag.
    for elt in self.soup.findAll(True):

      # Special cases for various element types.
      if elt.name == 'script':
        # Process script elements.

        if 'src' in elt.attrs:
          # External script
          self.extractRemoteScript(elt)
        else:
          # Inline script
          self.extractInlineScript(elt)

      elif elt.name == 'a':
        self.extractAnchor(elt)
        
      elif elt.name == 'link':
        self.extractLink(elt)

      elif elt.name == 'img':
        self.extractImage(elt)

      elif elt.name == 'input':
        self.extractInput(elt)

      elif elt.name == 'iframe':
        warn('Unhandled iframe tag: %s' % str(elt))

      elif elt.name == 'frame':
        warn('Unhandled frame tag: %s' % str(elt))

      elif elt.name == 'object':
        warn('Unhandled object tag: %s' % str(elt))
          
      elif elt.name == 'embed':
        self.extractEmbed(elt)

      elif elt.name == 'base':
        warn('Removing base URL element: %s' % str(elt))
        elt.extract()

      # Check for event handlers.
      attrs = dict(elt.attrs)
      for attr in attrs:
        if attr == 'onload':
          # A couple elements need special handling for the load event.
          if elt.name == 'body':
            text = attrs['onload'].strip()
            text = normalizeText(text, removenl=True)

            restype = 'script.event.load'
            ctype = 'text/javascript'
            resource = self.loadInlineResource(restype, elt, ctype, text)
            self.saveInlineResource(resource, self.app + '.js')
            self.addToCatalog('scripts.txt', resource)

            # %%% Probably not sufficient escaping.
            #newtext = re.sub('\\', '\\\\', eltvals[k])
            text = normalizeText(text, quote=True)
            newjs = "document.body.onload = %s;" % text
            self.js += '// %s %s\n%s\n\n' % (restype, 'body', newjs)

            del elt['onload']
            if VERBOSE:
              out('Converted %s.%s to JavaScript' % ('body', 'onload'))

            # Don't match other cases.
            attr = None

          elif elt.name == 'img':
            eltid = self.loadId(elt)

            text = attrs['onload'].strip()
            text = normalizeText(text, removenl=True)

            restype = 'script.event.load'
            ctype = 'text/javascript'
            resource = self.loadInlineResource(restype, elt, ctype, text)
            self.saveInlineResource(resource, self.app + '.js')
            self.addToCatalog('scripts.txt', resource)

            # %%% Probably not sufficient escaping.
            #newtext = re.sub('\\', '\\\\', eltvals[k])
            text = normalizeText(text, quote=True)
            newjs = "document.getElementById('%s').onload = %s;" % (eltid, text)

            if 'src' in attrs:
              # This URL should already be normalized.
              src = attrs['src']
            else:
              src = None
            if src is not None:
              newsrc = re.sub('\'', '\\\'', src)
              newjs += "\ndocument.getElementById('%s').src = '%s';" % (eltid, newsrc)

            self.js += '// %s %s %s\n%s\n\n' % (restype, elt.name, eltid, newjs)

            if src is not None:
              # %%% Don't do this currently. Not sure if it works anyway.
              #del elt['src']
              pass
            del elt['onload']
            if VERBOSE:
              out('Converted %s.%s to JavaScript' % ('img', 'onload'))

            # Don't match other cases.
            attr = None

        if attr in EVENT_ATTRIBUTES:
          eltid = self.loadId(elt)

          text = attrs[attr].strip()
          text = normalizeText(text, removenl=True)
          # %%% Could parse for valid JS syntax.

          if attr.startswith('on'):
            event = attr[2:]
          else:
            event = attr
          restype = 'script.event.%s' % event
          ctype = 'text/javascript'
          resource = self.loadInlineResource(restype, elt, ctype, text)
          self.saveInlineResource(resource, self.app + '.js')
          self.addToCatalog('scripts.txt', resource)

          # %%% Probably not sufficient escaping.
          #newtext = re.sub('\\', '\\\\', eltvals[k])
          text = normalizeText(text, quote=True)
          newjs = "document.getElementById('%s').%s = %s;" % (eltid, attr, text)
          newjs = '// %s %s %s\n%s\n\n' % (restype, elt.name, eltid, newjs)
          self.js += newjs

          del elt[attr]
          if VERBOSE:
            out('Converted %s.%s to JavaScript' % (elt.name, attr))

          # Don't match other cases.
          attr = None

        if attr == 'background':
          src = attrs['background']
          url = combineURLs(self.url, src)

          restype = 'element.background'
          resource = self.loadRemoteResource(restype, url, self.url, elt)
          self.addToCatalog('images.txt', resource)

          uri = resource.getURI()
          resource.updateAttribute('background', uri)
          
    self.js = '// %s\n\n%s' % (self.url, self.js)
  # /extractResources

  def getElementContents(self, elt):
    contents = ''
    if isinstance(elt, bs4.Comment):
      contents += '<!--' + str(elt) + '-->\n'
    elif isinstance(elt, bs4.NavigableString):
      contents += str(elt)
    else:
      contents += elt.prettify().strip()
    return contents
  # /getElementContents

  def getBody(self):
    bodyhtml = ''
    bodyelt = self.soup.body
    if bodyelt is None:
      warn('No body element found')
    else:
      for elt in bodyelt.contents:
        bodyhtml += self.getElementContents(elt)
    return bodyhtml

  def getHead(self):
    headhtml = ''
    headelt = self.soup.head
    if headelt is None:
      warn('No head element found')
    else:
      for elt in headelt.contents:
        headhtml += self.getElementContents(elt)
    return headhtml

# /HTMLParser
    
class Unpacker():

  # Create an Unpacker.
  def __init__(self, infile, app=None, outdir=None) :
    prot = getProtocol(infile)
    if prot in ['http', 'https']:
      self.url = infile
      if app is None:
        relpath = getRelativePath(self.url, usedomain=True)
        self.app = re.sub('/', '-', relpath)
      else:
        self.app = app
    elif prot == 'file':
      self.url = os.path.abspath(infile)
      if not self.url.startswith('file://'):
        self.url = 'file://' + self.url
      info = get_file_info(infile)
      self.app = info['app']
    else:
      fatal('Unknown protocol: %s' % prot)

    global OUTDIR
    if outdir is not None:
      OUTDIR = os.path.abspath(outdir)
      if os.path.exists(OUTDIR):
        if OVERWRITE:
          if os.path.isfile(OUTDIR):
            fatal('File exists at output directory %s' % OUTDIR)
        else:
          fatal('Output directory exists, use -f to overwrite')
    else:
      # Get a unique, non-existent directory.
      relpath = getRelativePath(self.url, usedomain=True)
      OUTDIR = get_output_dir(UNPACKDIR, relpath)
  # /Unpacker.__init__

  def unpack(self):
    # Done setup, now initialize the decoding.
    self.startTime = time.time()

    # Function |run_unpacker| in util.py relies on this output.
    out('Unpacking: %s' % self.url)
    out('Output directory: %s' % (OUTDIR))
    out('Application name: %s' % (self.app))
    filepath = os.path.join(OUTDIR, self.app + '.original.html')
    resource = Resource('root.html', url=self.url, filepath=filepath)
    resource.fetch(accept='text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8')

    encoding = resource.getEncoding()
    data = resource.getData()
    if data is not None:
      text = data.decode(encoding, errors='replace')

      hparser = HTMLParser(self.url, encoding, self.app)
      hparser.extractResources(text)
      js = hparser.js
      htmltext = hparser.soup.prettify()
      headhtml = hparser.getHead()
      bodyhtml = hparser.getBody()

      if len(js) > 0:
        filename = self.app + '.js'
        createFile(filename, js)
      if len(bodyhtml) > 0:
        filename = self.app + '.body.html'
        createFile(filename, bodyhtml)
      if len(headhtml) > 0:
        filename = self.app + '.head.html'
        createFile(filename, headhtml)
      if len(htmltext) > 0:
        filename = self.app + '.html'
        createFile(filename, htmltext)

      for fileattrs in SYMLINK_FILES:
        assert len(fileattrs) == 2, 'Invalid SYMLINK_FILES configuration: %r' % fileattrs
        srcpath, linkname = fileattrs
        symlink(srcpath, OUTDIR, linkname=linkname)
  # /unpack

# /Unpacker
 
def createDirForFile(filename):
  absdir = os.path.abspath(os.path.dirname(filename))
  if not os.path.isdir(absdir):
    try:
      os.makedirs(absdir)
    except Exception as e:
      err('Error creating directory %s: %s' % (absdir, str(e)))
      return None
  return absdir
# /createDirForFile

def makeNewFileName(filepath, prepend):
  parts = os.path.split(filepath)
  newpath = os.path.join(parts[0], prepend + parts[1])
  return newpath
# /makeNewFileName

def appendToFile(relpath, content):
  # No output directory means don't output anything.
  if not OUTDIR:
    warn('No output directory specified, cannot append: %s', relpath)
    return None
  if relpath.startswith('/'):
    err('Absolute path passed to appendToFile: %s' % relpath)
    return None
  if relpath.strip() == '':
    warn('Empty path provided to appendToFile')
    return None
  if not isinstance(content, str):
    warn('Unable to append to %s, content must be a string' % relpath)
    return None

  if len(content) == 0:
    warn('Appending empty content to file: %s' % relpath)

  # Don't ever write to these.
  for fileattrs in SYMLINK_FILES:
    if len(fileattrs) == 2:
      linkname = fileattrs[1]
      if linkname == relpath:
        warn('File name conflict with %s, unable to append' % relpath) 
        return None
    else:
      warn('Invalid format for item in SYMLINK_FILES: %r' % fileattrs)

  outpath = os.path.join(OUTDIR, relpath)
  if os.path.isdir(outpath):
    warn('Unable to append content to directory: %s' % outpath)

  if not os.path.exists(outpath):
    return createFile(relpath, content)

  outfl = open(outpath, 'a')
  if outfl:
    outfl.write(content)
    outfl.close()
    if VERBOSE:
      outfile = os.path.basename(outpath)
      out('Appended to %s: %s' % (outfile, content.strip()))
  else:
    err('Unable to append to file: %s' % outpath)
    return None

  return outpath

def createFile(relpath, content):
  # No output directory means don't output anything.
  if not OUTDIR:
    warn('No output directory specified, cannot save: %s', relpath)
    return None
  if relpath.startswith('/'):
    err('Absolute path passed to createFile: %s' % relpath)
    return None
  if relpath.strip() == '':
    warn('Empty path provided to createFile')
    return None

  if len(content) == 0:
    warn('Empty content for file: %s' % relpath)

  # Don't ever clobber these.
  for fileattrs in SYMLINK_FILES:
    if len(fileattrs) == 2:
      linkname = fileattrs[1]
      if linkname == relpath:
        newpath = makeNewFileName(relpath, 'new-')
        warn('File name conflict with %s, trying new filename %s' % (relpath, newpath)) 
        return createFile(newpath, content)
    else:
      warn('Invalid format for item in SYMLINK_FILES: %r' % fileattrs)
    
  outpath = os.path.join(OUTDIR, relpath)
  outpath = get_unique_filename(outpath)
  assert not os.path.relpath(outpath, OUTDIR).startswith('../'), 'Attempting to save file outside of output directory: %s' % outpath

  dirpath, filename = os.path.split(outpath)

  if not os.path.isdir(dirpath):
    try:
      os.makedirs(dirpath)
    except OSError as e:
      err('Unable to create directory %s: %s' % (dirpath, str(e)))
      return None
  if os.path.isdir(dirpath):
    if isinstance(content, str):
      outfl = open(outpath, 'w')
    else:
      outfl = open(outpath, 'wb')
    if outfl:
      outfl.write(content)  
      outfl.close()
      if VERBOSE:
        out('Saved to file: %s' % outpath)
    else:
      err('Unable to save to file: %s' % outpath)
      return None
  else:
    err('Directory is not accessible: %s' % dirpath)
    return None

  return outpath
# /createFile

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

def getRelativePath(url, usedomain=False, referer=None):
  urlparts = urllib.parse.urlparse(url)
  filepath = urlparts[2]
      
  if usedomain and isURL(url):
    # Prepend the domain
    filepath = os.path.join(urlparts[1], filepath)

  if referer is not None:
    # Get the path relative to the referer.
    refparts = urllib.parse.urlparse(referer)
    refpath = refparts[2]
    # Assume the referer is a file, and remove the filename.
    refpath = os.path.split(refpath)[0]
    if refpath.startswith('/'):
      refpath = refpath[1:]
    filepath = os.path.relpath(filepath, refpath)

  # Remove beginning and ending slashes.
  filepath = filepath.strip('/')

  return filepath
# /getRelativePath

# Get an extension appropriate for saving to the file system.
def getExtension(url, ctype=None):
  ext = None
  if ctype is not None:
    if ctype in JS_CONTENT_TYPES:
      ext = 'js'
    elif ctype in HTML_CONTENT_TYPES:
      ext = 'html'
    elif ctype in CSS_CONTENT_TYPES:
      ext = 'css'
    elif ctype in IMAGE_CONTENT_TYPES:
      parts = ctype.split('/')
      ext = parts[-1]
      if ctype == 'image/jpeg' or ctype == 'image/jpg':
        # Use the actual file extension, if appropriate, in this case.
        filename = getFileName(url)
        subparts = re.split('\.', filename)
        if len(subparts) > 1:
          actualext = subparts[-1]
          if actualext == 'jpg' or actualext == 'jpeg':
            ext = actualext

  if ext is None:
    filename = getFileName(url)
    if filename == '':
      # Assume HTML file type.
      ext = 'html'
      warn('Assuming .html extension for URL: %s' % url)
    else:
      subparts = re.split('\.', filename)
      if len(subparts) <= 1:
        ext = 'html'
        warn('Assuming .html extension for URL: %s' % url)
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

# Load all JavaScript loaded by a particular HTML file.
def loadFile(infile, app, outdir):
  unpacker = Unpacker(infile, app, outdir)
  unpacker.unpack()
# end loadFile

def combineURLs(baseurl, relurl):
  url = urllib.parse.urljoin(baseurl, relurl)

  # Remove leading ../'s from the path, since the server typically does.
  urlparts = urllib.parse.urlparse(url)
  relpart = urlparts[2]
  while relpart.startswith('/..'):
    relpart = relpart[3:]
  # Can't assign directly to |urlparts[2]| for some reason.
  newparts = (urlparts[0], urlparts[1], relpart, urlparts[3], urlparts[4], urlparts[5])
  url = urllib.parse.urlunparse(newparts)

  return url

def normalizeText(s, removenl=False, quote=False):
  s = re.sub('\r\n', '\n', s)
  s = re.sub('\r', '\n', s)
  if removenl:
    s = re.sub('\n', '', s)
  if quote:
    s = "'" + re.sub('\'', '\\\'', s) + "'"
  return s

def main():
  DEFAULT_TIMEOUT = 10
  parser = OptionParser(usage="%prog URL|HTML")
  parser.add_option('-v', '--verbose', action='store_true', default=False, dest='verbose', help='verbose output')
  parser.add_option('--vv', action='store_true', default=False, dest='veryverbose', help='very verbose output')
  parser.add_option('-s', '--saveall', action='store_true', default=False, dest='saveall', help='save all downloadeded files')
  parser.add_option('-f', '--overwrite', action='store_true', default=False, dest='overwrite', help='overwrite files if output directory already exists')
  parser.add_option('-a', '--app', action='store', default=None, dest='app', help='application name')
  parser.add_option('-o', '--outdir', action='store', default=None, dest='outdir', help='output directory')
  parser.add_option('-t', '--timeout', action='store', default=DEFAULT_TIMEOUT, dest='timeout', help='timeout (in seconds) for HTTP requests')

  opts, args = parser.parse_args()

  if len(args) != 1:
    parser.error("Invalid number of arguments")

  #global cfg
  #cfg = imp.load_source("cfg", args[0])
  #assert os.path.isdir(cfg.SOURCEDIR), "Source path %s doesn't exist." % cfg.SOURCEDIR

  infile = args[0]

  global VERYVERBOSE, VERBOSE, SAVEALL, OVERWRITE
  VERYVERBOSE = opts.veryverbose
  VERBOSE = opts.verbose
  SAVEALL = opts.saveall
  OVERWRITE = opts.overwrite
  try:
    TIMEOUT = float(opts.timeout)
    if TIMEOUT <= 0.0:
      raise Error('Invalid timeout: %s' % opts.timeout)
  except:
    warn('Invalid timeout: %s, using default: %ds' % (opts.timeout, 10))
    TIMEOUT = 10.0

  loadFile(infile, opts.app, opts.outdir)

if __name__ == "__main__":
  main()

