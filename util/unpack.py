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
import logging

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
  'image/jpeg',
  'image/vnd.microsoft.icon',
  'image/x-icon',
]

EMBED_CONTENT_TYPES = [
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

try:
  import bs4
except ImportError as e:
  err('Unable to import BeautifulSoup: %s' % str(e))
  err("BeautifulSoup 4 is required. For Ubuntu, use ``apt-get install python3-bs4''")
  sys.exit(1)

class Resource:
  
  def __init__(self, type, url=None, element=None, status=None, ctype=None, data=None, encoding=None, filepath=None):
    self.url = url
    self.status = status
    self.contenttype = ctype
    self.data = data

    self.encoding = encoding
    if self.encoding is None:
      self.encoding = 'utf-8'

    self.filepath = filepath
    if self.filepath is not None:
      self.filename = getFileName(self.filepath)
    else:
      self.filename = None

    self.element = element
    self.type = type
  # /Resource.__init__

  def getElement(self):
    return self.element
  # /getElement

  def getType(self):
    return self.type
  # /getType

  def getURL(self):
    return self.url
  # /getURL

  def getStatus(self):
    return self.status
  # /getStatus
  
  def setStatus(self, stat):
    self.status = stat
  # /setStatus

  def getContentType(self):
    return self.contenttype
  # /getType
  
  def setContentType(self, ctype):
    self.contenttype = ctype
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

  def fetch(self, referer=None):
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
      request.add_header('User-Agent', 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0)')
      opener = urllib.request.build_opener()
    except Exception as e:
      err('Failure initializing request for %s: %s' % (url, str(e)))
      self.setStatus(500)
      return False

    try:
      resp = opener.open(request)
    except urllib.error.HTTPError as e:
      # Don't load 404 error pages.
      # See http://www.jspell.com/ajax-spell-checker.html
      status = e.getcode()
      err('HTTP error while retrieving %s: %r' % (url, status))
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
      out('Headers:\n%s\n' % str(respinfo))
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
    self.setEncoding(encoding)

    if VERBOSE:
      out('Downloaded %s %s' % (ctype, url))

    if SAVEALL:
      relpath = self.getRelativeFilePath()
      filepath = createFile(relpath, content)
      self.setFilePath(filepath)

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
    text = data.decode(encoding)
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
                image = propval.absoluteUri
              elif propvalstr == 'none':
                # Do nothing
                pass
              # %%% Pretty hacky matching
              elif 'gradient(' in propvalstr:
                # Do nothing
                pass
              else:
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
                image = propval.absoluteUri
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
    newcss = stylesheet.cssText.decode(encoding)
    return newcss, images, imports
  # /extractResources
# /CSSParser

class HTMLParser():
  # Static counter for id attribute generation.
  NEXT_ID = 0

  def __init__(self):
    self.resources = []
    self.remoteresources = {}
    self.js = ''
    self.headers = []

  def loadRemoteResource(self, restype, url, referer, element):
    if url in self.remoteresources:
      resource = self.remoteresources[url]
    else:
      resource = Resource(restype, url=url, element=element)
      resource.fetch(referer=referer)
      self.remoteresources[url] = resource
    self.resources.append(resource)
    return resource

  def loadInlineResource(self, restype, element, ctype, data):
    resource = Resource(restype, element=element, ctype=ctype, data=data)
    self.resources.append(resource)
    return resource

  def generateId(self, soup, elt):
    newid = 'unpack' + str(HTMLParser.NEXT_ID)
    HTMLParser.NEXT_ID += 1
    while soup.find(id=newid) is not None:
      newid = 'unpack' + str(HTMLParser.NEXT_ID)
      HTMLParser.NEXT_ID += 1
    return newid
  
  def extractResources(self, baseurl, htmltext):

    try:
      soup = bs4.BeautifulSoup(htmltext)
    except Exception as e:
      err('Unable to initialize HTML parser: %s' % str(e))
      return None, None, None, None

    # Process elements in order of opening tag.
    for elt in soup.findAll(True):
      attrs = elt.attrs

      # Special cases for various element types.
      if elt.name == 'script':
        # Process script elements.

        if 'src' in attrs:
          # External script
          src = attrs['src']
          url = combineURLs(baseurl, src)

          resource = self.loadRemoteResource('script.src', url, baseurl, elt)

          status = resource.getStatus()
          ctype = resource.getContentType()
          encoding = resource.getEncoding()
          data = resource.getData()
          if ctype not in JS_CONTENT_TYPES:
            warn('Non-JavaScript content type for %s: %s' % (url, ctype))
            data = None

          if data is not None:
            text = normalizeText(data.decode(encoding)) + '\n'
            self.js += '// URL: %s, status: %s, type: %s\n%s\n\n' % (url, status, ctype, text)

            # Don't remove the entire element if there are additional
            # attributes because it may be referenced by the code itself.
            # See https://www.coursera.org.
            attrlen = len(attrs)
            if attrlen == 1 or (attrlen == 2 and 'type' in attrs):
              elt.extract()
            else:
              del attrs['src']
              del elt['src']

        else:
          # Inline script
          isjs = True
          if 'type' in attrs:
            if attrs['type'] not in JS_CONTENT_TYPES:
              warn('Skipping script element with non-JS content type: %s' % attrs['type'])
              isjs = False
          else:
            warn('Script element with no type attribute')
            attrs['type'] = 'text/javascript'

          data = ''
          for child in elt.contents:
            data += self.getElementContents(child)
          ctype = attrs['type']
          restype = 'script.inline'
          resource = self.loadInlineResource(restype, elt, ctype, data) 

          if isjs:
            text = normalizeText(data).strip()
            self.js += '// %s\n%s\n\n' % (restype, text)

          # Don't remove the entire element if there are additional
          # attributes because it may be referenced by the code itself.
          # See https://www.coursera.org.
          attrlen = len(elt.attrs)
          if attrlen == 0 or (attrlen == 1 and 'type' in elt.attrs):
            elt.extract()
          else:
            elt.clear()

      elif elt.name == 'a':
        if 'href' in attrs:
          href = attrs['href']
          if href.startswith('javascript:'):
            data = href[11:]
            ctype = 'text/javascript'
            restype = 'script.href'
            resource = self.loadInlineResource(restype, elt, ctype, data) 
            
            if 'id' in attrs:
              eltid = attrs['id']
            else:
              eltid = self.generateId(soup, elt)
              elt['id'] = eltid
              attrs['id'] = eltid
            newdata = re.sub('\'', '\\\'', data)
            newjs = "document.getElementById('%s').href = 'javascript:%s';" % (eltid, newdata)
            self.js += '// %s\n%s\n\n' % (restype, newjs)
            del attrs['href']
            del elt['href']
            if VERBOSE:
              out('Converted a.href to JavaScript')
          else:
            # Make the link target absolute.
            restype = 'a.href'
            url = combineURLs(baseurl, href)
            if url != href:
              attrs['href'] = url
              elt['href'] = url
              if VERBOSE:
                out('Replaced %s: %s -> %s' % (restype, href, url))
        
      elif elt.name == 'link':
        if 'href' in attrs:
          href = attrs['href']
          url = combineURLs(baseurl, href)

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

              resource = self.loadRemoteResource(restype, ssurl, baseurl, elt)

              ctype = resource.getContentType()
              status = resource.getStatus()
              encoding = resource.getEncoding()
              data = resource.getData()
              if ctype not in CSS_CONTENT_TYPES:
                warn('Non-CSS content type for %s: %s' % (ssurl, ctype))
              self.js += '// URL: %s, status: %s, type: %s\n\n' % (ssurl, status, ctype)

              cssparser = CSSParser()
              newdata, imgs, imports = cssparser.extractResources(data, encoding, ssurl)
              # Transitively follow imports.
              stylesheets.extend(imports)

              for img in imgs:
                iresource = self.loadRemoteResource('link.stylesheet.image', img, ssurl, elt)
                istatus = iresource.getStatus()
                ictype = iresource.getContentType()
                self.js += '// URL: %s, status: %s, type: %s\n\n' % (img, istatus, ictype)
                
              # Rename the original CSS file for posterity.
              filepath = resource.getFilePath()
              filename = resource.getRelativeFilePath()
              origparts = filename.rsplit('.', 1)
              origparts.insert(-1, 'original')
              origfilename = '.'.join(origparts)
              origfilepath = os.path.join(OUTDIR, origfilename)
              os.rename(filepath, origfilepath)

              # Save the modified CSS file.
              createFile(filename, newdata)

              # Collect the root CSS file.
              if resource0 is None:
                resource0 = resource

            # Replace the href in the original link element.
            filename = resource0.getRelativeFilePath()
            attrs['href'] = filename
            elt['href'] = filename
            if VERBOSE:
              out('Replaced %s: %s -> %s' % (restype, href, attrs['href']))

          if 'icon' in attrs['rel']:
            restype = 'link.icon'
            resource = self.loadRemoteResource(restype, url, baseurl, elt)

            ctype = resource.getContentType()
            status = resource.getStatus()
            if ctype not in IMAGE_CONTENT_TYPES:
              warn('Non-image content type for icon %s: %s' % (url, ctype))

            self.js += '// URL: %s, status: %s, type: %s\n\n' % (url, status, ctype)

            filename = resource.getRelativeFilePath()
            attrs['href'] = filename
            elt['href'] = filename
            if VERBOSE:
              out('Replaced %s: %s -> %s' % (restype, href, attrs['href']))

        else:
          warn('HTML link tag without href attribute: %s' % str(elt))

      elif elt.name == 'img':
        if 'src' in attrs:
          src = attrs['src']
          url = combineURLs(baseurl, src)
          restype = 'img.src'

          resource = self.loadRemoteResource(restype, url, baseurl, elt)

          filename = resource.getRelativeFilePath()
          if filename is not None:
            attrs['src'] = filename
            elt['src'] = filename
            if VERBOSE:
              out('Replaced %s: %s -> %s' % (restype, url, filename))
          else:
            warn('Unable to determine file name for image: %s' % url)

          ctype = resource.getContentType()
          status = resource.getStatus()
          if ctype not in IMAGE_CONTENT_TYPES:
            warn('Non-image content type for img %s: %s' % (url, ctype))
          self.js += '// URL: %s, status: %s, type: %s\n\n' % (url, status, ctype)
        else:
          warn('No src attribute for img tag: %s' % str(elt))

      elif elt.name == 'input':
        if 'src' in attrs:
          if 'type' not in attrs or attrs['type'] != 'image':
            # |src| attribute is only meaningful for |image| elements,
            # but fetch the file anyway in case it's used dynamically.
            warn('Non-image input element with src attribute: %s' % str(elt))

          src = attrs['src']
          url = combineURLs(baseurl, src)
          restype = 'input.src'

          resource = self.loadRemoteResource(restype, url, baseurl, elt)

          filename = resource.getRelativeFilePath()
          if filename is not None:
            attrs['src'] = filename
            elt['src'] = filename
            if VERBOSE:
              out('Replaced %s: %s -> %s' % (restype, url, filename))
          else:
            warn('Unable to determine file name for image: %s' % url)

          ctype = resource.getContentType()
          status = resource.getStatus()
          if ctype not in IMAGE_CONTENT_TYPES:
            warn('Non-image content type for input %s: %s' % (url, ctype))
          self.js += '// URL: %s, status: %s, type: %s\n\n' % (url, status, ctype)

      elif elt.name == 'iframe':
        warn('Unhandled iframe tag: %s' % str(elt))

      elif elt.name == 'frame':
        warn('Unhandled frame tag: %s' % str(elt))

      elif elt.name == 'object':

        #if content.startswith(b'MZ'):
        #  warn('MZ case was hit: %s' % url)
        #  if SAVEALL:
        #    urlbase = self.getRelativeFilePath(ext='bin')
        #    createFile(urlbase, content)

        #elif content.startswith(b'CWS') or content.startswith(b'FWS'):
          # This case is triggered by HTML embed (and object?) tags that
          # pull in Flash scripts.
        #  warn('Flash content not currently supported: %s' % url)

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
        #else:

        warn('Unhandled object tag: %s' % str(elt))
          
      elif elt.name == 'embed':
        if 'src' in attrs:
          src = attrs['src']
          url = combineURLs(baseurl, src)

          restype = 'embed.src'
          resource = self.loadRemoteResource(restype, url, baseurl, elt)

          filename = resource.getRelativeFilePath()
          if filename is not None:
            attrs['src'] = filename
            elt['src'] = filename
            if VERBOSE:
              out('Replaced %s: %s -> %s' % (restype, url, filename))
          else:
            warn('Unable to determine file name for embed: %s' % url)

          ctype = resource.getContentType()
          status = resource.getStatus()
          if ctype not in EMBED_CONTENT_TYPES:
            warn('Unknown content type for embed %s: %s' % (url, ctype))
          self.js += '// URL: %s, status: %s, type: %s\n\n' % (url, status, ctype)
        else:
          warn('No src attribute for embed tag: %s' % str(elt))

      # Check for event handlers.
      attrsToDel = []
      attrsToMod = {}
      for attr in attrs:
        if attr == 'onload':
          # A couple elements need special handling for the load event.
          if elt.name == 'body':
            text = attrs['onload']
            # %%% Probably not sufficient escaping.
            #newtext = re.sub('\\', '\\\\', eltvals[k])
            newtext = normalizeText(text)
            newtext = re.sub('\n', '', text)
            newtext = re.sub('\'', '\\\'', text)
            newjs = "document.body.onload = '%s';" % newtext

            restype = 'script.event.load'
            ctype = 'text/javascript'
            resource = self.loadInlineResource(restype, elt, ctype, newjs)

            self.js += '// %s %s\n%s\n\n' % (restype, 'body', newjs)

            attrsToDel.append('onload')
            if VERBOSE:
              out('Converted %s.%s to JavaScript' % ('body', 'onload'))

            # Don't match other cases.
            attr = None

          elif elt.name == 'img':
            if 'id' in attrs:
              eltid = attrs['id']
            else:
              eltid = self.generateId(soup, elt)
              attrsToMod['id'] = eltid

            if 'src' in attrs:
              # This URL should already be normalized.
              src = attrs['src']
            else:
              src = None

            text = attrs['onload']
            # %%% Probably not sufficient escaping.
            #newtext = re.sub('\\', '\\\\', eltvals[k])
            newtext = normalizeText(text)
            newtext = re.sub('\n', '', text)
            newtext = re.sub('\'', '\\\'', text)
            newjs = "document.getElementById('%s').onload = '%s';" % (eltid, newtext)
            if src is not None:
              newsrc = re.sub('\'', '\\\'', src)
              newjs += "\ndocument.getElementById('%s').src = '%s';" % (eltid, newsrc)

            restype = 'script.event.load'
            ctype = 'text/javascript'
            resource = self.loadInlineResource(restype, elt, ctype, newjs)

            self.js += '// %s %s %s\n%s\n\n' % (restype, elt.name, eltid, newjs)

            if src is not None:
              attrsToDel.append('src')
            attrsToDel.append('onload')
            if VERBOSE:
              out('Converted %s.%s to JavaScript' % ('img', 'onload'))

            # Don't match other cases.
            attr = None

        if attr in EVENT_ATTRIBUTES:
          if 'id' in attrsToMod:
            eltid = attrsToMod['id']
          elif 'id' in attrs and 'id' not in attrsToDel:
            eltid = attrs['id']
          else:
            eltid = self.generateId(soup, elt)
            attrsToMod['id'] = eltid

          text = attrs[attr]
          # %%% Probably not sufficient escaping.
          #newtext = re.sub('\\', '\\\\', eltvals[k])
          newtext = normalizeText(text)
          newtext = re.sub('\n', '', text)
          newtext = re.sub('\'', '\\\'', text)
          newjs = "document.getElementById('%s').%s = '%s';" % (eltid, attr, newtext)

          if attr.startswith('on'):
            event = attr[2:]
          else:
            event = attr
          restype = 'script.event.%s' % event
          ctype = 'text/javascript'
          resource = self.loadInlineResource(restype, elt, ctype, newjs)

          self.js += '// %s %s %s\n%s\n\n' % (restype, elt.name, eltid, newjs)

          attrsToDel.append(attr)
          if VERBOSE:
            out('Converted %s.%s to JavaScript' % (elt.name, attr))

          # Don't match other cases.
          attr = None

        if attr == 'background':
          src = attrs['background']
          url = combineURLs(baseurl, src)

          resource = self.loadRemoteResource(restype, url, baseurl, elt)

          filename = resource.getRelativeFilePath()
          if filename is not None:
            attrs['background'] = filename
            elt['background'] = filename
            if VERBOSE:
              out('Replaced %s.%s: %s -> %s' % (elt.name, 'background', url, filename))
          else:
            warn('Unable to determine file name for %s background: %s' % (elt.name, url))

          ctype = resource.getContentType()
          status = resource.getStatus()
          if ctype not in IMAGE_CONTENT_TYPES:
            warn('Unknown content type for %s background %s: %s' % (elt.name, url, ctype))
          self.js += '// URL: %s, status: %s, type: %s\n\n' % (url, status, ctype)
          

      # Delete attribute outside the loop to avoid errors.
      for attr in attrsToDel:
        del elt[attr]
      for attr, val in attrsToMod.items():
        elt[attr] = val

    headerstr = ''
    for header in self.headers:
      # |headers| contains JavaScript for DOM setup.
      # %%% Not currently used. Could be very useful if improved.
      headerstr += '// %s\n%s\n' % (baseurl, header)

    bodyhtml = ''
    for elt in soup.body.contents:
      bodyhtml += self.getElementContents(elt)

    headhtml = ''
    for elt in soup.head.contents:
      headhtml += self.getElementContents(elt)

    self.js = '// %s\n\n%s' % (baseurl, self.js)

    return self.js, headhtml, bodyhtml, headerstr
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

# /HTMLParser
    
class Unpacker():

  # Create an Unpacker.
  def __init__(self, options) :
    self.url = options.uri
    self.app = options.app
  # /Unpacker.__init__

  def unpack(self):
    # Done setup, now initialize the decoding.
    self.startTime = time.time()

    if VERBOSE:
      out('Unpacking URL: %s' % self.url)
    resource = Resource('root', url=self.url)
    resource.fetch()

    ctype = resource.getContentType()
    encoding = resource.getEncoding()
    data = resource.getData()
    if data is not None:
      if ctype not in HTML_CONTENT_TYPES:
        warn('Non-HTML content type for %s: %s' % (self.url, ctype))
      text = data.decode(encoding)

      if SAVEALL:
        filename = self.app + '.original.html'
        createFile(filename, text)

      hparser = HTMLParser()
      js, headhtml, bodyhtml, headers = hparser.extractResources(self.url, text)

      if len(js) > 0:
        filename = self.app + '.js'
        createFile(filename, js)
      if len(headers) > 0:
        filename = self.app + '.headers.js'
        createFile(filename, headers)
      if len(bodyhtml) > 0:
        filename = self.app + '.html'
        createFile(filename, bodyhtml)
      if len(headhtml) > 0:
        filename = self.app + '.head.html'
        createFile(filename, headhtml)

      for fileattrs in SYMLINK_FILES:
        assert len(fileattrs) == 3, 'Invalid SYMLINK_FILES configuration: %r' % fileattrs
        srcdir, destname, srcname = fileattrs
        symlink(srcdir, OUTDIR, destname, srcname)
  # /unpack

# /Unpacker
 
class UnpackOpts:

  def __init__(self, infile, app, outdir):
    prot = getProtocol(infile)
    if prot in ['http', 'https']:
      self.uri = infile
      if app is None:
        relpath = getRelativePath(self.uri, usedomain=True)
        self.app = re.sub('/', '-', relpath)
      else:
        self.app = app
    elif prot == 'file':
      self.uri = os.path.abspath(infile)
      if not self.uri.startswith('file://'):
        self.uri = 'file://' + self.uri
      info = get_file_info(infile)
      self.app = info['app']
    else:
      err('Unknown protocol: %s' % prot)
      sys.exit(1)

    global OUTDIR
    if outdir is not None:
      OUTDIR = os.path.abspath(outdir)
      if os.path.exists(OUTDIR):
        if OVERWRITE:
          if os.path.isfile(OUTDIR):
            err('File exists at output directory %s' % OUTDIR)
            sys.exit(1)
        else:
          err('Output directory exists, use -f to overwrite')
          sys.exit(1)
    else:
      # Get a unique, non-existent directory.
      relpath = getRelativePath(self.uri, usedomain=True)
      OUTDIR = get_output_dir(UNPACKDIR, relpath)
  # /UnpackOpts.__init__

# /UnpackOpts

def createDirForFile(filename):
  absdir = os.path.abspath(os.path.dirname(filename))
  if not os.path.isdir(absdir):
    try:
      os.makedirs(absdir)
    except Exception as e:
      err(e)
      sys.exit(1)
  return absdir
# /createDirForFile

def makeNewFileName(filepath, prepend):
  parts = os.path.split(filepath)
  newpath = os.path.join(parts[0], prepend + parts[1])
  return newpath
# /makeNewFileName

def createFile(relpath, content):
  if len(content) == 0:
    return None
  if relpath.startswith('/'):
    err('Absolute path passed to createFile: %s' % relpath)
    return None
  # No output directory means don't output anything.
  if not OUTDIR:
    return None
  
  if relpath.strip() == '':
    newpath = makeNewFileName('', 'x.html')
    warn('No relative path provided, saving to %s' % newpath)
    return createFile(newpath, content)

  # Don't ever clobber these.
  for fileattrs in SYMLINK_FILES:
    if len(fileattrs) == 3:
      srcname = fileattrs[2]
      if srcname == relpath:
        newpath = makeNewFileName(relpath, 'new-')
        warn('File name conflict with %s, trying new filename %s' % (relpath, newpath)) 
        return createFile(newpath, content)
    
  outpath = os.path.join(OUTDIR, relpath)
  assert not os.path.relpath(outpath, OUTDIR).startswith('../'), 'Attempting to save file outside of output directory: %s' % outpath

  dirpath = os.path.dirname(outpath)
  if os.path.isfile(dirpath):
    # %%% Should ideally check all parent directories in |relpath| also.
    newdir = makeNewFileName(dirpath, 'new-')
    filename = os.path.basename(outpath)
    newpath = os.path.join(newdir, filename)
    newrelpath = os.path.relpath(newpath, OUTDIR)
    warn('Directory conflict with file %s, trying new directory %s' % (relpath, newrelpath)) 
    return createFile(newrelpath, content)

  if os.path.exists(outpath):
    if not OVERWRITE:
      warn('Not overwriting existing file: %s' % outpath)
      return None
    elif os.path.isdir(outpath):
      warn('Directory exists at target file path: %s' % outpath)
      return None
  elif not os.path.isdir(dirpath):
    os.makedirs(dirpath)

  if os.path.isdir(OUTDIR):
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
    err('Directory is not accessible: %s' % OUTDIR)
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
  if filepath.startswith('/'):
    filepath = filepath[1:]
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
  opts = UnpackOpts(infile, app, outdir)
  unpacker = Unpacker(opts)
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

def normalizeText(s):
  s = re.sub('\r\n', '\n', s)
  s = re.sub('\r', '\n', s)
  return s

def main():
  parser = OptionParser(usage="%prog URL|HTML")
  parser.add_option('-v', '--verbose', action='store_true', default=False, dest='verbose', help='verbose output')
  parser.add_option('--vv', action='store_true', default=False, dest='veryverbose', help='very verbose output')
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

  global VERYVERBOSE, VERBOSE, SAVEALL, OVERWRITE
  VERYVERBOSE = opts.veryverbose
  VERBOSE = opts.verbose
  SAVEALL = opts.saveall
  OVERWRITE = opts.overwrite

  loadFile(infile, opts.app, opts.outdir)

if __name__ == "__main__":
  main()

