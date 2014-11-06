import sys
import os
import shutil

import operator
import math
import matplotlib.pyplot as plt
from matplotlib.ticker import FormatStrFormatter
from perc_box_plot import percentile_box_plot as perc_box

from optparse import OptionParser

from util import out

plt.rcParams['pdf.fonttype'] = 42

def geomeanPercent(vals):
  tot = 0.0
  for val in vals:
    tot += math.log(float(val) / 100.0 + 1.0)
  return math.exp(tot / len(vals)) * 100
# /geomeanPercent

def geomean(vals):
  tot = 0.0
  for val in vals:
    tot += math.log(float(val))
  return math.exp(tot / len(vals))
# /geomean

#
# Plot of the average overhead of modular and woven transactions
#
# Input:
#   stats: a list of triples (original_time, woven_time, modular_time)
#
# Output:
#   x-axis: modular overhead (%)
#   y-axis: woven overhead (%)
#
def modularVsWovenOverhead(stats, log=True, threshold=100.0, absolute=True):
  wovenOverhead = []
  modularOverhead = []

  ylimit = 10000.0
  xmin = 0.0
  ymin = 0.0
  xmax = 0.0
  ymax = 0.0

  for times in stats:
    orig = times['input']
    woven = times['semantic0.collapsed']
    modular = times['coarse.input']

    # Skip actions that humans can't distinguish.
    #if woven < threshold and modular < threshold and orig < threshold:
    #  continue

    if absolute:
      wo = woven / orig
    else:
      wo = 100 * (woven - orig) / orig
    if wo < ymin: ymin = wo
    if wo > ymax: ymax = wo

    if absolute:
      mo = modular / orig
    else:
      mo = 100 * (modular - orig) / orig

    if mo > ylimit:
      moo = mo
      mo = ylimit * 0.98
      ymax = ylimit
      txt = "(" + str(int(moo)) + ", " + str(int(wo)) + ")"
      plt.annotate(txt, (mo, wo), xytext=(mo - 1000, wo + 300), xycoords='data', textcoords='data', arrowprops=dict(arrowstyle='->'))
      #fig, ax = plt.subplots()
      #ax.annotate('', xy=(x[0], y[0]), xytext=(-20,20), 
      #            textcoords='offset points', ha='center', va='bottom',
      #            bbox=dict(boxstyle='round,pad=0.2', fc='yellow', alpha=0.3),
      #            arrowprops=dict(arrowstyle='->', connectionstyle='arc3,rad=0.5', 
      #                            color='red'))

    if mo < xmin: xmin = mo
    if mo > xmax: xmax = mo
    if wo < ymin: ymin = wo
    if wo > ymax: ymax = wo

    modularOverhead.append(mo)
    wovenOverhead.append(wo)


  if ymax > 10000.0:
    ymax = 10000.0

  totmax = max(xmax, ymax) * 1.10

  if absolute:
    wogm = geomean(wovenOverhead)
    mogm = geomean(modularOverhead)
  else:
    wogm = geomeanPercent(wovenOverhead)
    mogm = geomeanPercent(modularOverhead)

  out("GEOMETRIC MEAN (WOVEN): %.2f" % wogm)
  out("GEOMETRIC MEAN (MODULAR): %.2f" % mogm)
  
  if absolute:
    plt.xlabel('exec. time of coarse-grained transactions / unprotected')
    plt.ylabel('exec. time of fine-grained transactions / unprotected')
  else:
    plt.xlabel('overhead (%) of coarse-grained transactions')
    plt.ylabel('overhead (%) of fine-grained transactions')
    
  plt.xlim(0, totmax)
  plt.ylim(0, totmax)
  
  cas = plt.gca()
  if log:
    cas.set_xscale('log')
    cas.set_yscale('log')
  majorFormatter = FormatStrFormatter('%d')
  cas.xaxis.set_major_formatter(majorFormatter)
  cas.yaxis.set_major_formatter(majorFormatter)


  if log:
    plt.plot([0.1, totmax], [0.1, totmax])
  else:
    plt.plot([0.0, totmax], [0.0, totmax])
  plt.scatter(modularOverhead, wovenOverhead, marker='x')
  #plt.legend(
  #  ('modular', 'woven'),
  #  loc='upper right'
  #)

  #plt.savefig('overhead.eps', format='eps')
  if log:
    plt.savefig('overheadcomp-log.pdf', format='pdf')
  else:
    plt.savefig('overheadcomp.pdf', format='pdf')
  #plt.savefig('overhead.jpg', format='jpg')
  plt.clf()
#/modularVsWovenOverhead

#
# Plot of execution time of woven transactions vs. unprotected.
#
# Input:
#   stats: list of dictionaries of time values, indexed by variant name
#     and also an "action" property to distinguish load actions
#   variants: ordered list of the names of the variants to compare
#   display: display names for the variants
#
# Output:
#   x-axis: original, unprotected execution time (ms)
#   y-axis: overhead (%)
#
def wovenOverheadByOriginal(stats, variants, display, log=True):
  assert len(variants) == 3 and len(display) == 3

  var0 = variants[0]
  disp0 = display[0]
  var1 = variants[1]
  disp1 = display[1]
  var2 = variants[2]
  disp2 = display[2]

  overhead2 = []
  overhead1 = []
  originalTime = []

  loadoverhead2 = []
  loadoverhead1 = []  # Only used for geometric mean
  loadoriginalTime = []

  xmin = 0.0
  ymin = 0.0
  xmax = 0.0
  ymax = 0.0
  for times in stats:
    orig = times[var0]
    time1 = times[var1]
    time2 = times[var2]
    action = times['action']

    ratio2 = time2 / orig
    ratio1 = time1 / orig

    if action == 'load':
      loadoriginalTime.append(orig)
      loadoverhead2.append(ratio2)
      loadoverhead1.append(ratio1)
    else:
      originalTime.append(orig)
      overhead2.append(ratio2)
      overhead1.append(ratio1)

    if orig < xmin: xmin = orig
    if orig > xmax: xmax = orig
    if ratio2 < ymin: ymin = ratio2
    if ratio2 > ymax: ymax = ratio2

  plt.xlabel('execution time (ms) for unprotected program')
  plt.ylabel('exec. time ratio: fine-grained / unprotected')

  if log:
    plt.xlim(0.1, xmax * 1.10)
    plt.ylim(0.1, ymax * 1.10)
  else:
    plt.xlim(0.0, xmax * 1.10)
    plt.ylim(ymin * 1.10, ymax * 1.10)
  
  cas = plt.gca()

  plt.scatter(loadoriginalTime, loadoverhead2, marker='o', color='green', facecolors='none')
  plt.scatter(originalTime, overhead2, marker='x', color='black')
  plt.legend(
    ('page load', 'other actions'),
    loc='lower left'
  )

  if log:
    cas.set_xscale('log')
    cas.set_yscale('log')
    plt.plot([0.1, xmax * 1.10], [1.0, 1.0])
    majorFormatter = FormatStrFormatter('%.1f')
  else:
    plt.plot([0.0, xmax * 1.10], [1.0, 1.0])
    majorFormatter = FormatStrFormatter('%.1f')

  cas.xaxis.set_major_formatter(majorFormatter)
  cas.yaxis.set_major_formatter(majorFormatter)

  if log:
    plt.savefig('wovenbyoriginal-log.pdf', format='pdf')
  else:
    plt.savefig('wovenbyoriginal.pdf', format='pdf')
  plt.clf()

  gm = geomean(overhead2)
  gmload = geomean(loadoverhead2)
  out("GEOMETRIC MEAN (other, %s / %s): %.2f" % (disp2, disp0, gm))
  out("GEOMETRIC MEAN (load, %s / %s): %.2f" % (disp2, disp0, gmload))

  overhead2.extend(loadoverhead2)
  gmboth2 = geomean(overhead2)
  out("GEOMETRIC MEAN (all, %s / %s): %.2f" % (disp2, disp0, gmboth2))

  gm1 = geomean(overhead1)
  gmload1 = geomean(loadoverhead1)
  out("GEOMETRIC MEAN (other, %s / %s): %.2f" % (disp1, disp0, gm1))
  out("GEOMETRIC MEAN (load, %s / %s): %.2f" % (disp1, disp0, gmload1))

  overhead1.extend(loadoverhead1)
  gmboth1 = geomean(overhead1)
  out("GEOMETRIC MEAN (all, %s / %s): %.2f" % (disp1, disp0, gmboth1))
#/wovenOverheadByOriginal

#
# Plot of the average overhead of modular and woven transactions
#
# Input:
#   stats: list of dictionaries of time values, indexed by variant name
#     and also an "action" property to distinguish load actions
#   variants: ordered list of the names of the variants to compare
#   display: display names for the variants
#
# Output:
#   x-axis: original, unprotected execution time (ms)
#   y-axis: overhead (%)
#
def modularVsWovenOverheadByOriginal(stats, variants, display, log=True):
  assert len(variants) == 3 and len(display) == 3

  var0 = variants[0]
  disp0 = display[0]
  var1 = variants[1]
  disp1 = display[1]
  var2 = variants[2]
  disp2 = display[2]

  overhead1 = []
  overhead2 = []
  overheadRatio = []
  originalTime = []

  loadoverhead1 = []
  loadoverhead2 = []
  loadoverheadRatio = []
  loadoriginalTime = []

  xmin = 0.0
  ymin = 0.0
  xmax = 0.0
  ymax = 0.0

  for times in stats:
    orig = float(times[var0])
    time1 = float(times[var1])
    time2 = float(times[var2])
    action = times['action']

    ratio = time2 / time1

    if action == 'load':
      loadoriginalTime.append(orig)
      loadoverheadRatio.append(ratio)

      # Gather these to take the geomean later.
      loadoverhead1.append(time1 / orig)
      loadoverhead2.append(time2 / orig)
    else:
      originalTime.append(orig)
      overheadRatio.append(ratio)

      # Gather these to take the geomean later.
      overhead1.append(time1 / orig)
      overhead2.append(time2 / orig)

    if orig < xmin: xmin = orig
    if orig > xmax: xmax = orig

    if ratio < ymin: ymin = ratio
    if ratio > ymax: ymax = ratio

  plt.xlabel('execution time (ms) for %s program' % disp0)
  plt.ylabel('exec. time ratio: %s / %s' % (disp2, disp1))

  if log:
    plt.xlim(0.1, xmax * 1.10)
    plt.ylim(0.1, ymax * 1.10)
  else:
    plt.xlim(0.0, xmax * 1.10)
    plt.ylim(ymin * 1.10, ymax * 1.10)
  
  cas = plt.gca()

  assert len(loadoriginalTime) == len(loadoverheadRatio), "Invalid load time statistics"
  assert len(originalTime) == len(overheadRatio), "Invalid action time statistics"
  assert len(loadoriginalTime) > 0 or len(originalTime) > 0, "No data for coarse-grained vs. fine-grained graph"

  if len(loadoriginalTime) > 0:
    plt.scatter(loadoriginalTime, loadoverheadRatio, marker='o', color='green', facecolors='none')
  if len(originalTime) > 0:
    plt.scatter(originalTime, overheadRatio, marker='x', color='black')
  plt.legend(
    ('page load', 'other actions'),
    loc='lower left'
  )

  if log:
    cas.set_xscale('log')
    cas.set_yscale('log')
    plt.plot([0.1, xmax * 1.10], [1.0, 1.0])
    majorFormatter = FormatStrFormatter('%.1f')
  else:
    plt.plot([0.0, xmax * 1.10], [1.0, 1.0])
    majorFormatter = FormatStrFormatter('%.1f')

  cas.xaxis.set_major_formatter(majorFormatter)
  cas.yaxis.set_major_formatter(majorFormatter)
  if log:
    plt.savefig('overheadratiobyoriginal-log.pdf', format='pdf')
  else:
    plt.savefig('overheadratiobyoriginal.pdf', format='pdf')
  plt.clf()

  if len(loadoriginalTime) > 0:
    gmload = geomean(loadoverheadRatio)
    out("GEOMETRIC MEAN (load, %s / %s): %.2f" % (disp2, disp1, gmload))
  if len(originalTime) > 0:
    gm = geomean(overheadRatio)
    out("GEOMETRIC MEAN (other, %s / %s): %.2f" % (disp2, disp1, gm))

  overheadRatio.extend(loadoverheadRatio)
  gmboth = geomean(overheadRatio)
  out("GEOMETRIC MEAN (all, %s / %s): %.2f" % (disp2, disp1, gmboth))

#/modularVsWovenOverheadByOriginal
