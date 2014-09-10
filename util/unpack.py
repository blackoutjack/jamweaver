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
  
  def __init__(self, url, status, ctype, data, encoding, filepath):
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

    self.tag = None
    self.element = None
    self.restype = None
  # /Resource.__init__

  def setElement(self, elt):
    self.element = elt
    if elt is not None:
      self.tag = elt.name
  # /setElement

  def getElement(self):
    return self.element
  # /getElement

  def setType(self, rtype):
    self.restype = rtype
  # /setType

  def getType(self):
    return self.restype
  # /getType

  def getTag(self):
    return self.tag
  # /getTag

  def getURL(self):
    return self.url
  # /getURL

  def getStatus(self):
    return self.status
  # /getStatus

  def getContentType(self):
    return self.contenttype
  # /getType

  def getData(self):
    return self.data
  # /getData

  def getEncoding(self):
    return self.encoding
  # /getEncoding

  def getFilePath(self):
    return self.filepath
  # /getFilePath
 
  def getFileName(self):
    return self.filename
  # /getFileName

  def appendContent(self, extra):
    self.content = self.content + extra
    return self.content
  # /appendContent

class CSSParser(cssutils.CSSParser):
  # Suppress all but the worst errors.
  cssutils.log.setLevel(logging.FATAL)

  def __init__(self):
    super().__init__(log=None, loglevel=None, raiseExceptions=None, fetcher=None, parseComments=True, validate=True)

  def extractResources(self, data, encoding, url, unpacker):
    text = data.decode(encoding)
    stylesheet = self.parseString(text, href=url)

    images = []
    imports = []
    for rule in stylesheet.cssRules:
      if rule.type == cssutils.css.CSSRule.IMPORT_RULE:
        href = rule.href
        impurl = urllib.parse.urljoin(url, href)
        imports.append(impurl)

        # Rename the original CSS file for posterity.
        impfilename = getFileName(impurl)
        rule.href = impfilename
        if VERBOSE:
          out('Replaced import: %s -> %s' % (href, impfilename))

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
              elif propvalstr != 'none':
                image = urllib.parse.urljoin(url, propvalstr)

              if image is not None:
                images.append(image)
                filename = getFileName(image)
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
                filename = getFileName(image)
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
            out('Replaced %s: %s -> %s' % (prop.name, origval, newval))

    encoding = stylesheet.encoding
    if encoding is None: encoding = 'utf-8'
    newcss = stylesheet.cssText.decode(encoding)
    return newcss, images, imports
  # /extractResources

class HTMLParser():
  
  def extractResources(self, unpacker, baseurl, htmltext):
    resources = []
    remoteresources = {}
    js = ''
    headers = []

    try:
      soup = bs4.BeautifulSoup(htmltext)
    except Exception as e:
      err('Unable to initialize HTML parser: %s' % str(e))
      return resources

    # Process elements in order of opening tag.
    for elt in soup.findAll(True):
      attrs = elt.attrs

      # Special cases for various element types.
      if elt.name == 'script':
        # Process script elements.

        if 'src' in attrs:
          # External script
          src = attrs['src']
          url = urllib.parse.urljoin(baseurl, src)

          if url in remoteresources:
            resource = remoteresources[url]
          else:
            resource = unpacker.fetch(url, referer=baseurl)
            resource.setElement(elt)
            resource.setType('script.src')
            remoteresources[url] = resource
          resources.append(resource)

          status = resource.getStatus()
          ctype = resource.getContentType()
          encoding = resource.getEncoding()
          data = resource.getData()
          if ctype not in JS_CONTENT_TYPES:
            warn('Non-JavaScript content type for %s: %s' % (url, ctype))
            data = None
          if data is not None:
            text = normalizeText(data.decode(encoding)) + '\n'
            js += '// URL: %s, status: %s, type: %s\n%s\n\n' % (url, status, ctype, text)

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
          resource = Resource(None, None, attrs['type'], data, None, None)
          resource.setType('script.inline')
          resource.setElement(elt)
          resources.append(resource)

          if isjs:
            text = normalizeText(data).strip()
            js += '// %s\n%s\n\n' % ('script.inline', text)

          # Don't remove the entire element if there are additional
          # attributes because it may be referenced by the code itself.
          # See https://www.coursera.org.
          attrlen = len(elt.attrs)
          if attrlen == 0 or (attrlen == 1 and 'type' in elt.attrs):
            elt.extract()
          else:
            elt.clear()

      elif elt.name == 'link':
        if 'href' in attrs:
          href = attrs['href']
          url = urllib.parse.urljoin(baseurl, href)

          if 'rel' not in attrs:
            warn('HTML link tag without rel attribute, assuming stylesheet: %s' % str(elt))
            attrs['rel'] = ['stylesheet']
            
          # The |attrs['rel']| value is a list.
          if 'stylesheet' in attrs['rel']:

            stylesheets = [url]
            while len(stylesheets) > 0:
              ssurl = stylesheets.pop(0)

              if ssurl in remoteresources:
                resource = remoteresources[ssurl]
              else:
                resource = unpacker.fetch(ssurl, referer=baseurl)
                resource.setElement(elt)
                resource.setType('link.stylesheet')
                remoteresources[ssurl] = resource

                ctype = resource.getContentType()
                status = resource.getStatus()
                encoding = resource.getEncoding()
                data = resource.getData()
                if ctype not in CSS_CONTENT_TYPES:
                  warn('Non-CSS content type for %s: %s' % (ssurl, ctype))
                js += '// URL: %s, status: %s, type: %s\n\n' % (ssurl, status, ctype)

                cssparser = CSSParser()
                newdata, imgs, imports = cssparser.extractResources(data, encoding, ssurl, unpacker)
                # Transitively follow imports.
                stylesheets.extend(imports)

                for img in imgs:
                  iresource = unpacker.fetch(img, referer=ssurl)
                  iresource.setElement(elt)
                  iresource.setType('link.stylesheet.image')
                  istatus = iresource.getStatus()
                  ictype = iresource.getContentType()
                  remoteresources[img] = iresource
                  resources.append(iresource)
                  js += '// URL: %s, status: %s, type: %s\n\n' % (img, istatus, ictype)
                  
                # Rename the original CSS file for posterity.
                filepath = resource.getFilePath()
                filename = resource.getFileName()
                origparts = filename.rsplit('.', 1)
                origparts.insert(-1, 'original')
                origfilename = '.'.join(origparts)
                origfilepath = os.path.join(unpacker.OPTIONS.outdir, origfilename)
                os.rename(filepath, origfilepath)

                # Save the modified CSS file.
                unpacker.createFile(filename, newdata, None)

              resources.append(resource)

            # Replace the href in the original link element.
            filename = getFileName(url)
            attrs['href'] = filename
            elt['href'] = filename
            if VERBOSE:
              out('Replaced stylesheet %s: %s -> %s' % ('href', href, attrs['href']))

          if 'icon' in attrs['rel']:
            if url in remoteresources:
              resource = remoteresources[url]
            else:
              resource = unpacker.fetch(url, referer=baseurl)
              resource.setType('link.icon')
              resource.setElement(elt)
              remoteresources[url] = resource
            resources.append(resource)

            ctype = resource.getContentType()
            status = resource.getStatus()
            if ctype not in IMAGE_CONTENT_TYPES:
              warn('Non-image content type for icon %s: %s' % (url, ctype))

            js += '// URL: %s, status: %s, type: %s\n\n' % (url, status, ctype)

            filename = resource.getFileName()
            attrs['href'] = filename
            elt['href'] = filename
            if VERBOSE:
              out('Replaced icon %s: %s -> %s' % ('href', href, attrs['href']))

        else:
          warn('HTML link tag without href attribute: %s' % str(elt))

      elif elt.name == 'img':
        if 'src' in attrs:
          src = attrs['src']
          url = urllib.parse.urljoin(baseurl, src)

          if url in remoteresources:
            resource = remoteresources[url]
          else:
            resource = unpacker.fetch(url, referer=baseurl)
            resource.setType('img.src')
            resource.setElement(elt)
            remoteresources[url] = resource
          resources.append(resource)

          filename = resource.getFileName()
          if filename is not None:
            attrs['src'] = filename
            elt['src'] = filename
            if VERBOSE:
              out('Replaced %s %s: %s -> %s' % ('img', 'src', url, filename))
          else:
            warn('Unable to determine file name for image: %s' % url)

          ctype = resource.getContentType()
          status = resource.getStatus()
          if ctype not in IMAGE_CONTENT_TYPES:
            warn('Non-image content type for img %s: %s' % (url, ctype))
          js += '// URL: %s, status: %s, type: %s\n\n' % (url, status, ctype)
        else:
          warn('No src attribute for img tag: %s' % str(elt))

      elif elt.name == 'input':
        if 'src' in attrs:
          if 'type' not in attrs or attrs['type'] != 'image':
            # |src| attribute is only meaningful for |image| elements,
            # but fetch the file anyway in case it's used dynamically.
            warn('Non-image input element with src attribute: %s' % str(elt))

          src = attrs['src']
          url = urllib.parse.urljoin(baseurl, src)

          if url in remoteresources:
            resource = remoteresources[url]
          else:
            resource = unpacker.fetch(url, referer=baseurl)
            resource.setType('input.src')
            resource.setElement(elt)
            remoteresources[url] = resource
          resources.append(resource)

          filename = resource.getFileName()
          if filename is not None:
            attrs['src'] = filename
            elt['src'] = filename
            if VERBOSE:
              out('Replaced %s %s: %s -> %s' % ('input', 'src', url, filename))
          else:
            warn('Unable to determine file name for image: %s' % url)

          ctype = resource.getContentType()
          status = resource.getStatus()
          if ctype not in IMAGE_CONTENT_TYPES:
            warn('Non-image content type for input %s: %s' % (url, ctype))
          js += '// URL: %s, status: %s, type: %s\n\n' % (url, status, ctype)

      elif elt.name == 'iframe':
        warn('Unhandled iframe tag: %s' % str(elt))

      elif elt.name == 'frame':
        warn('Unhandled frame tag: %s' % str(elt))

      elif elt.name == 'object':
        warn('Unhandled object tag: %s' % str(elt))
          
      elif elt.name == 'embed':
        if 'src' in attrs:
          src = attrs['src']
          url = urllib.parse.urljoin(baseurl, src)

          if url in remoteresources:
            resource = remoteresources[url]
          else:
            resource = unpacker.fetch(url, referer=baseurl)
            resource.setType('embed.src')
            resource.setElement(elt)
            remoteresources[url] = resource
          resources.append(resource)

          filename = resource.getFileName()
          if filename is not None:
            attrs['src'] = filename
            elt['src'] = filename
            if VERBOSE:
              out('Replaced %s %s: %s -> %s' % ('embed', 'src', url, filename))
          else:
            warn('Unable to determine file name for embed: %s' % url)

          ctype = resource.getContentType()
          status = resource.getStatus()
          if ctype not in EMBED_CONTENT_TYPES:
            warn('Unknown content type for embed %s: %s' % (url, ctype))
          js += '// URL: %s, status: %s, type: %s\n\n' % (url, status, ctype)
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

            resource = Resource(None, None, 'text/javascript', newjs, None, None)
            restype = 'script.event.load'
            resource.setType(restype)
            resource.setElement(elt)

            js += '// %s %s\n%s\n\n' % (restype, 'body', newjs)

            attrsToDel.append('onload')
            if VERBOSE:
              out('Converted %s.%s to JavaScript' % ('body', 'onload'))

            # Don't match other cases.
            attr = None

          elif elt.name == 'img':
            if 'id' in attrs:
              eltid = attrs['id']
            else:
              eltid = generateId(soup, elt)
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

            resource = Resource(None, None, 'text/javascript', newjs, None, None)
            restype = 'script.event.load'
            resource.setType(restype)
            resource.setElement(elt)

            js += '// %s %s %s\n%s\n\n' % (restype, elt.name, eltid, newjs)

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
            eltid = generateId(soup, elt)
            attrsToMod['id'] = eltid

          text = attrs[attr]
          # %%% Probably not sufficient escaping.
          #newtext = re.sub('\\', '\\\\', eltvals[k])
          newtext = normalizeText(text)
          newtext = re.sub('\n', '', text)
          newtext = re.sub('\'', '\\\'', text)
          newjs = "document.getElementById('%s').%s = '%s';" % (eltid, attr, newtext)

          resource = Resource(None, None, 'text/javascript', newjs, None, None)
          if attr.startswith('on'):
            event = attr[2:]
          else:
            event = attr
          restype = 'script.event.%s' % event
          resource.setType(restype)
          resource.setElement(elt)

          js += '// %s %s %s\n%s\n\n' % (restype, elt.name, eltid, newjs)

          attrsToDel.append(attr)
          if VERBOSE:
            out('Converted %s.%s to JavaScript' % (elt.name, attr))

          # Don't match other cases.
          attr = None

        if attr == 'background':
          src = attrs['background']
          url = urllib.parse.urljoin(baseurl, src)

          if url in remoteresources:
            resource = remoteresources[url]
          else:
            resource = unpacker.fetch(url, referer=baseurl)
            resource.setType('%s.background' % elt.name)
            resource.setElement(elt)
            remoteresources[url] = resource
          resources.append(resource)

          filename = resource.getFileName()
          if filename is not None:
            attrs['background'] = filename
            elt['background'] = filename
            if VERBOSE:
              out('Replaced %s %s: %s -> %s' % (elt.name, 'background', url, filename))
          else:
            warn('Unable to determine file name for %s background: %s' % (elt.name, url))

          ctype = resource.getContentType()
          status = resource.getStatus()
          if ctype not in IMAGE_CONTENT_TYPES:
            warn('Unknown content type for %s background %s: %s' % (elt.name, url, ctype))
          js += '// URL: %s, status: %s, type: %s\n\n' % (url, status, ctype)
          

      # Delete attribute outside the loop to avoid errors.
      for attr in attrsToDel:
        del elt[attr]
      for attr, val in attrsToMod.items():
        elt[attr] = val

    headerstr = ''
    for header in headers:
      # |headers| contains JavaScript for DOM setup.
      # %%% Not currently used. Could be very useful if improved.
      headerstr += '// %s\n%s\n' % (baseurl, header)

    bodyhtml = ''
    for elt in soup.body.contents:
      bodyhtml += self.getElementContents(elt)

    headhtml = ''
    for elt in soup.head.contents:
      headhtml += self.getElementContents(elt)

    js = '// %s\n\n%s' % (baseurl, js)

    return js, headhtml, bodyhtml, headerstr
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
    
class Unpacker():

  # Create an Unpacker.
  def __init__(self, options) :
    self.url = options.url

    # UnpackOpts user options.
    self.OPTIONS = options 

    self.hparser = HTMLParser()
  # /Unpacker.__init__

  def unpack(self):
    # Done setup, now initialize the decoding.
    self.startTime = time.time()

    if self.url:
      if VERBOSE:
        out('Root URL: %s' % self.url)
      resource = self.fetch(self.url)

      ctype = resource.getContentType()
      encoding = resource.getEncoding()
      data = resource.getData()
      if data is not None:
        if ctype not in HTML_CONTENT_TYPES:
          warn('Non-HTML content type for %s: %s' % (self.url, ctype))
        text = data.decode(encoding)
        self.extract(self.url, text)
    else:
      # Local file decode
      # %%% Untested
      try:
        fl = open(self.file, 'rb')
      except Exception as e:
        err('Unable to open file %s: %s' % (self.file, str(e)))

      if fl:
        text = fl.read()
        fl.close()
        text = text.decode('utf-8')
        self.extract(self.file, text)
  # /unpack

  def fetch(self, url, referer=None, filename=None):
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
      return Resource(url, 500, None, None, None, None)

    try:
      resp = opener.open(request)
    except urllib.error.HTTPError as e:
      # Don't load 404 error pages.
      # See http://www.jspell.com/ajax-spell-checker.html
      status = e.getcode()
      err('HTTP error while retrieving %s: %r' % (url, status))
      content = None
      ctype = None
      return Resource(url, status, None, None, None, None)
    except Exception as e:
      err('Failed to retrieve %s: %s' % (url, str(e)))
      return Resource(url, 500, None, None, None, None)

    status = resp.getcode()
    # In Python 2, |respinfo| is a |mimetools.Message| object.
    # In Python 3, it is an |HTTPMessage|.
    respinfo = resp.info()
    if VERYVERBOSE:
      out('Headers:\n%s\n' % str(respinfo))
    content = resp.read()
    
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

    if VERBOSE:
      out('Downloaded %s %s' % (ctype, url))

    filepath = None
    if SAVEALL:
      if filename is None:
        filename = getFileName(url)
        if not filename:
          filename = getDomain(url)
        ext = getExtension(url, ctype)
      else:
        ext = None
      filepath = self.createFile(filename, content, ext)

    return Resource(url, status, ctype, content, encoding, filepath)
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

    # Avoid clobbering these.
    for fileattrs in SYMLINK_FILES:
      if len(fileattrs) == 3:
        srcname = fileattrs[2]
        if srcname == filename:
          newbase = 'new-' + base
          warn('File name conflict with %s, trying new base name %s' % (filename, newbase)) 
          return self.createFile(newbase, content, ext)
      
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
      if VERBOSE:
        out('Saved to file: %s' % outfile)
    else:
      err('Directory %s is not accessible' % outdir)
    return outfile
  # /createFile

# /Unpacker
 
class UnpackOpts:

  def __init__(self, infile, app, outdir):
    if isURL(infile):
      self.url = infile
      self.file = None
      self.relpath = getRelativePath(self.url)
      self.app = app
      if self.app is None:
        self.app = re.sub('/', '-', self.relpath)
    else:
      self.file = os.path.abspath(infile)
      self.url = None
      info = get_file_info(infile)
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

    self.veryverbose = False
    
  def __str__(self):
    return str(self.__dict__)

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

# Load all JavaScript loaded by a particular HTML file.
def loadFile(infile, app, outdir):
  opts = UnpackOpts(infile, app, outdir)

  try:
    unpacker = Unpacker(opts)
    unpacker.unpack()
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
  return newid

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



