class Section:
  # properties:
  #   name
  #   info
  #   headers
  #   rows
  #   total
  #   errors

  def __init__(self, name, info):
    self.name = name
    self.info = info
    self.headers = None
    self.rows = {}
    self.total = None
    self.errors = []

  def addData(self, data):
    assert len(data) > 0, "Empty data provided to section %s" % self.name
    if self.headers is None:
      self.headers = data
    elif data[0] == "total":
      self.total = int(data[1])
    else:
      key = None
      rowdata = None
      for i in range(0, len(data)):
        try:
          datum = int(data[i])
        except:
          datum = data[i]
        if i == 0:
          key = datum
        elif i == 1:
          rowdata = datum
        else:
          assert False, "Unexpected number of data: %r" % data 
      self.rows[key] = rowdata
  
  def addError(self, txt):
    self.errors.append(txt)

  def summary(self):
    ret = self.name + ": " + str(self.total)
    return ret
#/Section

class Action:
  # properties:
  #   description
  #   stack
  #   sections
  #   times
  #   errors

  def __init__(self, desc, stack):
    self.description = desc
    self.stack = stack
    self.sections = {}
    self.times = []
    self.errors = []

  def addSection(self, section, timename):
    if section.name == timename:
      # Special handling of timing info
      tmstr = section.info
      assert tmstr is not None
      tm = parse_time(tmstr)
      self.times.append(tm)
    elif section.name in self.sections:
      sectlist = self.sections[section.name]
    else:
      sectlist = [section]
      self.sections[section.name] = [section]

  def avg_time(self):
    tot = 0
    cnt = 0
    for tm in self.times:
      tot += tm
      cnt += 1
    return float(tot) / cnt

  def time_summary(self):
    return self.description + ": " + str(self.avg_time()) + "ms\n"

  def section_summary(self, key):
    ret = ""
    sects = self.sections[key]
    for sect in sects: 
      ret += sect.summary() + "\n"
    return ret
  
  def addError(self, txt):
    self.errors.append(txt)

  def __str__(self):
    ret = self.time_summary()
    for key in self.sections:
      ret += self.section_summary(key)
    return ret
#/Action

class SourceVariant:
  # properties:
  #   app
  #   descriptors
  #   actions
  #   errors

  def __init__(self, app, desc):
    self.app = app
    self.descriptors = desc
    self.actions = {}
    self.errors = []

  def getAction(self, desc, stack):
    if desc in self.actions:
      act = self.actions[desc] 
      # %%% Check that the stack matches.
    else:
      act = Action(desc, stack)
      self.actions[desc] = act
    return act

  def descriptor(self):
    return '.'.join(self.descriptors)
  
  def addError(self, txt):
    self.errors.append(txt)

  def __str__(self):
    ret = self.descriptor() + "\n"
    for key in self.actions:
      ret += self.actions[key].time_summary()
    return ret

#/SourceVariant

class AppStats:
  # properties:
  #   name
  #   variants
  #   errors

  def __init__(self, appname):
    self.name = appname
    self.variants = {}
    self.errors = []

  def getVariant(self, descparts):
    desc = '.'.join(descparts)
    # Translate legacy descriptors.
    if desc == 'original':
      desc = 'input'
    elif desc == 'original.modular':
      desc = 'coarse.input'
    elif desc == 'collapsed':
      desc = 'semantic0.collapsed'
    # %%% May want to match A.B to B.A
    if desc not in self.variants:
      self.variants[desc] = SourceVariant(self, descparts)
    return self.variants[desc]
  
  def addError(self, txt):
    self.errors.append(txt)

  def __str__(self):
    # Pretty-print.
    ret = self.name + "\n"
    for key in self.variants:
      ret += str(self.variant[key])
    return ret
#/AppStats

def parse_time(tmstr):
  if tmstr.endswith('ms'):
    tmstr = tmstr[:-2]
    conv = 1.0
  elif tmstr.endswith('us'):
    # Convert microseconds to fractional milliseconds.
    tmstr = tmstr[:-2]
    conv = 1.0 / 1000.0
  elif tmstr.endswith('s'):
    # Convert seconds to milliseconds.
    tmstr = tmstr[:-1]
    conv = 1000.0
  else:
    print >> sys.stderr, "Unspecified time unit, assuming ms: %s" % tmstr
    conv = 1.0

  tm = float(tmstr) * conv
  return tm

