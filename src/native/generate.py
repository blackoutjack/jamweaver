#!/usr/bin/python
import mmap
import sys
import os
import random
import subprocess
from subprocess import PIPE
import time
import re
import shutil
from optparse import OptionParser
from tempfile import *

##
# Input format for .n files:
#
# OBJECT_NAME (MAX_ARITY | none) [v]
# 
# static:
# FUNC_NAME (MAX_ARITY | none) [v]
#
# proto:
# FUNC_NAME (MAX_ARITY | none) [v]
#
# props:
# PROP_NAME TYPE [CLASS|-] [CONSTRUCTOR|-] [ReadOnly|DontEnum|DontDelete] [VALUE|-]
##

# Some cursory setup checking
if 'JAMPKG' not in os.environ:
  print >> sys.stderr, "Please set the JAMPKG environment variable to the JAM installation directory."
  sys.exit(1)
  
JAMPKG = os.environ['JAMPKG']

if not os.path.isdir(JAMPKG):
  print >> sys.stderr, "The JAMPKG environment variable should point to the JAM installation directory. Current value:", JAMPKG
  sys.exit(1)

# Output files
LIB_DIR = os.path.join(JAMPKG, "lib")
LIB_PATH = os.path.join(LIB_DIR, 'native.P')
FUNC_PATH = os.path.join(LIB_DIR, 'nativef.P')
DAT_PATH = os.path.join(LIB_DIR, 'native.dat')
PROPS_OUT_PATH = os.path.join(LIB_DIR, 'native.props')
YICES_PATH = os.path.join(LIB_DIR, 'native.yic')

SRC_DIR = os.path.join(JAMPKG, "src")
NATIVE_PATH = os.path.join(SRC_DIR, 'native')
JQUERY_PATH = os.path.join(SRC_DIR, 'jquery')

# Input files
BASE_LIB_PATH = os.path.join(NATIVE_PATH, 'base.P')
BASE_FUNC_PATH = os.path.join(NATIVE_PATH, 'fbase.P')
BASE_YICES_PATH = os.path.join(NATIVE_PATH, 'base.yic')
PROPS_IN_PATH = os.path.join(NATIVE_PATH, 'all.props')
FUNC_LIST_PATH = os.path.join(NATIVE_PATH, 'functions.list')
SYMB_PROP_LIST_PATH = os.path.join(NATIVE_PATH, 'symprops.list')
VARLEN_LIST_PATH = os.path.join(NATIVE_PATH, 'varargs.list')
TYPE_LIST_PATH = os.path.join(NATIVE_PATH, 'types.list')

PRIMITIVES = ['#undefined', '#null', '#Infinity', '#-Infinity', '#NaN']

# A list of native functions.
# addr => { name, length, extra }
functions = {}
varlen_functions = []
# Properties that should be considered to have a symbolic
# value in the initial environment.
# objaddr => { property => type }
symbolic_properties = {}
# A simple list of JavaScript types
types = []
# A map of native object locations to objects.
mappings = {'#Global': '@Global'}
# Track which functions' predicates have already been output.
printed_functions = []

# Return a list of non-comment, non-empty lines.
def get_lines(fl):
  ret = []
  for ln in fl:
    # Remove leading/trailing white space.
    ln = ln.strip()
    # Skip blank lines.
    if ln == "": continue
    # Allow comments.
    if ln[0] == "%": continue

    ret.append(ln)

  return ret

# Populate the types array with a list of JavaScript types.
def load_types():
  # Load the types file.
  typfl = open(TYPE_LIST_PATH, 'r')
  types.extend(get_lines(typfl))
  typfl.close()

# Populate the list of properties that should be modeled as having
# symbolic values.
def load_symbolic_props():
  symfl = open(SYMB_PROP_LIST_PATH, 'r')

  for ln in get_lines(symfl):

    specs = ln.split(" ")

    assert len(specs) >= 2, "Invalid symbolic property specification: %s" % ln
    try: assert len(specs) == 3
    except: print >> sys.stderr, "Symbolic property %s is missing type" % ln

    objloc = specs[0]
    propname = specs[1]
    if len(specs) > 2: typ = specs[2]
    else: typ = "?"

    if objloc in symbolic_properties:
      outer = symbolic_properties[objloc]
    else:
      outer = {}
      symbolic_properties[objloc] = outer

    try: assert propname not in outer
    except: print >> sys.stderr, "Duplicate symbolic property specification: %s" % ln
      
    outer[propname] = typ

  symfl.close()
  
# Load a list of variable length functions. This is necessary because
# the live environment analysis can't determine this, so we need a
# persistent override file.
def load_varlen_funcs():
  varlenfl = open(VARLEN_LIST_PATH, 'r')

  for addr in get_lines(varlenfl):
    assert addr[0] == '#', "Invalid variable length function address: %s" % addr
    varlen_functions.append(addr)

  varlenfl.close()

# Populate the functions map with entries as specified.
def load_functions():
  funfl = open(FUNC_LIST_PATH, 'r')

  for ln in get_lines(funfl):

    funprops = {}
    specs = ln.split(" ")

    try: assert len(specs) > 2 
    except: print >> sys.stderr, "Function %s is missing attributes" % specs[0]

    addr = specs[0]

    # Default to a quoted name based on the address.
    if len(specs) > 1: name = specs[1]
    else: name = '"' + addr[1:] + '"'
    # I considered setting varlen to True when the length is missing
    # but we should still allow for exceptions because of
    # mismatches.
    if len(specs) > 2: length = specs[2]
    else: length = "0"

    funprops['name'] = name
    funprops['length'] = length
    funprops['varlen'] = False
    funprops['constr'] = False

    if len(specs) > 3:
      extra = specs[3].split(',')
      if 'v' in extra:
        funprops['varlen'] = True
      if 'c' in extra:
        funprops['constr'] = True

    if addr in varlen_functions:
      funprops['varlen'] = True
  
    functions[addr] = funprops

  funfl.close()

# Initialize the values mapping for printf style use.
def base_vals(id):

  return {
    'id': id,
    'obj': id,
    'addr': id.replace('@', '#'),
    'expr': '',
    'prop': '',
    'proptype': '',
    'value': '',
    'name': '',
    'length': '',
    'constr': False,
    'varlen': False,
    'attr': '',
  }

# Load a single model file into the accumulated target file.
def print_model(modfile, outfl):
  modfl = open(modfile, 'r')

  fundefs = modfl.read()
  print >> outfl, fundefs

  modfl.close()

# Collect all function models in a single file.
def load_models():
  basefuncfl = open(BASE_FUNC_PATH, 'r')
  basefunc = basefuncfl.read()
  basefuncfl.close()
  funcfl = open(FUNC_PATH, 'w')
  print >> funcfl, basefunc

  for fl in os.listdir(NATIVE_PATH):
    base, ext = os.path.splitext(fl)
    if ext != ".models": continue
    flpath = os.path.join(NATIVE_PATH, fl)
    print_model(flpath, funcfl)
  
  funcfl.close()

# Output several general properties that functions have.
def print_function_props(outfl, vals):
  addr = vals['addr']
  assert addr in functions

  # Don't output the same info twice.
  if addr in printed_functions:
    return
  printed_functions.append(addr)

  funvals = functions[addr]

  vals.update(funvals)

  if vals["constr"]:
    print >> outfl, "ghasprop('%(obj)s','@Construct','true')." % vals
    print >> outfl, "isnativeconstr('%(addr)s')." % vals

  print >> outfl, "ghasprop('%(obj)s','@Class','\"Function\"')." % vals
  print >> outfl, "ghasprop('%(obj)s','@Call','true')." % vals
  print >> outfl, "isnativefun('%(addr)s')." % vals
  print >> outfl, "ghasprop('%(obj)s','\"length\"','%(length)s')." % vals
  print >> outfl, "ghasprop('%(obj)s','\"name\"','%(name)s')." % vals

  if vals["varlen"]:
    print >> outfl, "isvarlen('%(addr)s')." % vals

# Log a location => object mapping and print it to the file.
# Going through this function prevents duplicates.
def map_native(outfl, addr, obj=None):
  if obj is None:
    # Default object name
    obj = addr.replace('#', '@')

  if addr in mappings:
    # Make sure there aren't conflicting names.
    assert mappings[addr] == obj, "Conflicting names: %s / %s" % (mappings[addr], obj)
    # And don't print a duplicate.
    return

  mappings[addr] = obj
  print >> outfl, "builtin_maps('" + addr + "','" + obj + "')." 

# Process a single .props file.
def load_props_from_file(propfile, outfl):

  pfl = open(propfile, 'r')
  lns = get_lines(pfl)

  vals = None

  # Lines that begin with @ demarcate a new object id.
  # The other non-comment, non-empty lines are properties.
  for ln in lns:

    if ln[0] == '@':
      # Starting a new object

      objid = ln
      vals = base_vals(objid)

      # Process the function header.
      print >> outfl
      print >> outfl, "%% %(id)s" % vals
      map_native(outfl, vals['addr'], vals['obj'])

      # Output the standard constructor/function properties.
      if vals["addr"] in functions:
        print_function_props(outfl, vals)
      elif vals['id'] == '@Array':
        print >> outfl, "ghasprop('%(obj)s','@Class','\"Array\"')." % vals
      else:
        print >> outfl, "ghasprop('%(obj)s','@Class','\"Object\"')." % vals

    else:
      # Processing a property of the current object.
      specs = ln.split(" ")

      # Properties are laid out as follows.
      # propName [Attribute[,List]] value ref.expr
      assert len(specs) == 4, "Invalid property specification: %s" % ln

      vals["prop"] = specs[0].replace("'", "''")
      vals["value"] = specs[2].replace("'", "''")
      vals["expr"] = specs[3]

      # Potentially replace the concrete value with a symbolic one.
      if vals['addr'] in symbolic_properties:
        symprops = symbolic_properties[vals['addr']]
        if vals['prop'] in symprops:
          proptyp = symprops[vals['prop']]
          vals['value'] = '?/' + proptyp

      # Get a list of property attributes.
      attrs = specs[1]
      if attrs == "-":
        attrs = []
      else:
        attrs = attrs.split(',')

      readonly = 'ReadOnly' in attrs

      if vals['value'][0] == '?':
        # Process symbolic values. They will be represented as ?/[type|?]
        val,typ = vals['value'].split('/')
        if typ == '?':
          print >> outfl, "shasprop('%(obj)s','\"%(prop)s\"',V) :- symbolic(V,_)." % vals
        else:
          vals['proptype'] = typ
          if readonly:
            # Even if we haven't specified a value, we might be able to 
            # assert a type for the symbolic value if it's read-only.
            print >> outfl, "shasprop('%(obj)s','\"%(prop)s\"',V) :- symbolic(V,'%(proptype)s')." % vals
          else:
            # Otherwise, the value is unconstrained in symbolic mode, or
            # appropriately typed in concrete mode.
            print >> outfl, "shasprop('%(obj)s','\"%(prop)s\"',V) :- is_symbolic_mode,symbolic(V,_)->true;symbolic(V,'%(proptype)s')." % vals

      else:
        # There is a known initial value for this property.
        
        # Special case: add a @Prototype property, to disallow overwriting
        # the prototype chain for an object.
        # %%% This should be removed if/when we support modeling __proto__
        # %%% overwrites.
        if vals["prop"] == "__proto__":
          print >> outfl, "ghasprop('%(obj)s','@Prototype','%(value)s')." % vals

        print >> outfl

        if readonly:
          print >> outfl, "ghasprop('%(obj)s','\"%(prop)s\"','%(value)s')." % vals
        else:
          print >> outfl, "ihasprop('%(obj)s','\"%(prop)s\"','%(value)s')." % vals
        
      for attr in attrs:
        vals['attr'] = attr
        print >> outfl, "native_hasattr('%(obj)s','\"%(prop)s\"','%(attr)s')." % vals

      # Any objects should be mapped.
      if vals['value'][0] == '#':
        # %%% Use config
        if vals['value'] not in PRIMITIVES:
          # %%% Kludgy
          # Copy the vals array and set the addr and obj to that of the
          # value, so it can be passed to |map_native|.
          valscpy = dict(vals)
          valscpy['addr'] = vals['value']
          valscpy['obj'] = valscpy['addr'].replace('#', '@')
          map_native(outfl, valscpy['addr'], valscpy['obj'])
          if valscpy['addr'] in functions:
            print_function_props(outfl, valscpy)

  # end load_props_from_file

# Load all .props files.
def load_props():
  # Initialize the XSB file with the boilerplate.
  baselibfl = open(BASE_LIB_PATH, 'r')
  baselib = baselibfl.read()
  baselibfl.close()
  libfl = open(LIB_PATH, 'w')
  print >> libfl, baselib

  load_props_from_file(PROPS_IN_PATH, libfl)

  libfl.close()

# Output a simple object declaration file for use by other modules.
def print_dat():

  outfl = open(DAT_PATH, 'w')

  # Print locations.
  for loc in mappings:
    # All locations, including those with typeof "function" have
    # internal type Object.
    print >> outfl, loc, "Object"

  for typ in types:
    print >> outfl, typ, "Type"

  print >> outfl, "#undefined", "Undefined"
  print >> outfl, "#null", "Null"
  print >> outfl, "#Infinity", "Number"
  print >> outfl, "#-Infinity", "Number"
  print >> outfl, "#NaN", "Number"

  outfl.close()
  # end load_dat

# Output the boilerplate Yices query input.
def print_yices():
  outfl = open(YICES_PATH, 'w')

  basefl = open(BASE_YICES_PATH, 'r')
  base = basefl.read()
  basefl.close()

  print >> outfl, base

  for loc in mappings:
    print >> outfl, "(define %s::int)" % loc
    if loc in functions:
      print >> outfl, "(assert (IsNativeFun %s))" % loc
  for typ in types:
    print >> outfl, "(define %s::int)" % typ
  for prim in PRIMITIVES:
    print >> outfl, "(define %s::int)" % prim

  # Special Symbolic type
  print >> outfl, "(define Symbolic::int)"

  print >> outfl, '''
;; Assure that all defined locations are distinct.
;; Per http://yices-wiki.csl.sri.com/index.php/FAQ,
;; this is the most efficient way of stating this.
(assert (and'''

  num = 999999
  for loc in mappings:
    print >> outfl, "(= (uniq %s) %d)" % (loc, num)
    num += 1

  for typ in types:
    print >> outfl, "(= (uniq %s) %d)" % (typ, num)
    num += 1

  print >> outfl, "(= (uniq Symbolic) %d)" % num
  num += 1

  print >> outfl, "(= (uniq #undefined) %d)" % num
  num += 1
  print >> outfl, "(= (HasType #undefined) Undefined)"

  print >> outfl, "(= (uniq #null) %d)" % num
  num += 1
  print >> outfl, "(= (HasType #null) Null)"

  print >> outfl, "(= (uniq #Infinity) %d)" % num
  num += 1
  print >> outfl, "(= (HasType #Infinity) Number)"

  print >> outfl, "(= (uniq #-Infinity) %d)" % num
  num += 1
  print >> outfl, "(= (HasType #-Infinity) Number)"

  print >> outfl, "(= (uniq #NaN) %d)" % num
  num += 1
  print >> outfl, "(= (HasType #NaN) Number)"

  print >> outfl, "(= (uniq True) %d)" % num
  num += 1
  print >> outfl, "(= (HasType True) Boolean)"

  print >> outfl, "(= (uniq False) %d)" % num
  num += 1
  print >> outfl, "(= (HasType False) Boolean)"


  print >> outfl, "))"

  outfl.close()
  # end load_yices

def copy_props_file(src, dest):
  shutil.copy(src, dest)

# Program entry
if __name__ == "__main__":
  parser = OptionParser(usage="%prog")
  #%parser.add_option('-j', '--jquery', action='store_true', default=False, dest='jquery', help='include jquery models')

  opts, args = parser.parse_args()
    
  if len(args) != 0:
    parser.error("Invalid number of arguments")

  copy_props_file(PROPS_IN_PATH, PROPS_OUT_PATH)

  # Load the list of properties that should be considered symbolic.
  load_symbolic_props()

  # Load the list of native functions. This needs to be done before
  # load_props is called.
  load_varlen_funcs()
  load_functions()
  
  # Get a list of JavaScript types from file.
  load_types()

  # Generate all object property predicates.
  load_props()

  # Initialize the function model file.
  load_models()

  # Gather all native object locations and types into a file for use
  # by other modules.
  print_dat()

  # The Yices load needs the full .dat file.
  print_yices()

