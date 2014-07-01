#!/usr/bin/python
import sys
import os
import re
import subprocess
from subprocess import PIPE
import time
from optparse import OptionParser
import tempfile
import csv
import shlex

#checkDefs = [
#  ['set("%x","textContent") && getValue("%x","className") === "write-only non-editable"', '2', '-1'],
#  ['get("%x","textContent") && getValue("%x","className") === "destructive-read read-only"', '1', '-1']
#  ['set("%x","textContent") && getValue("%x","className") === "write-only non-editable"', '0', '2'],
#  ['get("%x","textContent") && getValue("%x","className") === "write-only non-editable"', '0', '-1'],
#  ['get("%x","innerHTML")', '0', '-1'],
#  ['get("%x","textContent") && getValue("%x","className") === "destructive-read read-only"', '0', '1'],
#  ['set("%x","innerHTML")', '0', '-1'],
#  ['set("%x","textContent") && getValue("%x","className") === "destructive-read read-only"', '0', '-1']
#]

checkDefs = [
  ['set(%x.textContent) && %x.className === "write-only non-editable"', '2', '-1'],
  ['get(%x.textContent) && %x.className === "destructive-read read-only"', '1', '-1'],
  ['set(%x.textContent) && %x.className === "write-only non-editable"', '0', '2'],
  ['get(%x.textContent) && %x.className === "write-only non-editable"', '0', '-1'],
  ['get(%x.innerHTML)', '0', '-1'],
  ['get(%x.textContent) && %x.className === "destructive-read read-only"', '0', '1'],
  ['set(%x.innerHTML)', '0', '-1'],
  ['set(%x.textContent) && %x.className === "destructive-read read-only"', '0', '-1'],
  ['set("%x","src") && getValue("%x","constructor") === obj("#Element")', '0', '-1'],
]

def getHandler(checks):
  if len(checks) == 0:
    return "JAMScript.process"

  bits = ['0' for i in range(0, len(checkDefs))]
  for check in checks:
    i = 0
    for checkdef in checkDefs:
      if check[1] == checkdef[0] and check[2] == checkdef[1] and check[3] == checkdef[2]:
        bits[i] = '1'
      i += 1

  return "JAMScript.handlers.jamProcess" + "".join(bits)


def getIndent(ln):
  indent = ""
  while ln.startswith(" ") or ln.startswith("\t"):
    if ln.startswith(" "):
      indent += " "
      ln = ln[1:]
    else:
      # ln.startswith("\t")
      indent += "\t"
      ln = ln[1:]

  return indent

def parseCheck(ln):
  if ln.startswith("checkState("):
    ln = ln[11:]
  ln = ln.rstrip(");")
  parts = shlex.split(ln)
  assert(len(parts) == 4)

  ret = []
  for part in parts:
    ret.append(part.rstrip(","))

  return ret

def convert(infl, outfl):
  waiting = False
  checks = []

  for lnorig in infl:
    ln = lnorig.strip()
    isCheck = ln.startswith("checkState(")

    if isCheck:
      # The current line is a JAM |checkState| call.
      checks.append(parseCheck(ln))
    else:
      indent = getIndent(lnorig)
      if len(checks) > 0:
        # We're guarding this statement.

        # Get the appropriate handler function.
        handler = getHandler(checks)

        # Open the transaction.
        print >> outfl, indent + "transaction(",
        # Print the handler function name
        print >> outfl, handler,
        # Close the transaction argument list and open the braces.
        print >> outfl, ") {"
        # Output the original line.
        print >> outfl, indent + "  " + ln
        # Close the transaction.
        print >> outfl, indent + "}"
        
      else:
        # Just output the original line.
        print >> outfl, lnorig,

      # Clear the accumulated data.
      checks = []
        
      

def main():
  parser = OptionParser(usage="%prog [file-to-convert.js [output-file.js]]")
  #parser.add_option('-s', '--semantics', action='store_true', default=False, dest='semantics', help='test semantics')

  opts, args = parser.parse_args()
    
  if len(args) > 2:
    parser.error("Invalid number of arguments")

  if args < 1:
    infl = sys.stdin
  else:
    infl = open(args[0], 'r')
  if args < 2:
    outfl = sys.stdout
  else:
    outfl = open(args[1], 'w')

  convert(infl, outfl)
  

if __name__ == "__main__":
  main()

