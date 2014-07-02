import os
import sys

JAMPKG = os.environ['JAMPKG']
sys.path.append(os.path.join(os.environ['JAMPKG'], 'tests'))
from config import *
from util import get_base
from util import load_sources
from util import load_policies
from util import err
from util import out
from util import warn
from util import sort_dirs
from util import get_source_info
from util import get_variant_bases
from util import get_descriptors

JSTESTDIR = os.path.join(JAMSCRIPT_DIR, 'tests', 'browser')
JSLIBDIR = os.path.join(JAMSCRIPT_DIR, 'txjs')

ffbases = get_variant_bases(MICROBENCHMARK_DIR)
fftgt = os.path.join(JSTESTDIR, 'micro')

appsbases = get_variant_bases(BENCHMARK_DIR)
appstgt = os.path.join(JSTESTDIR, 'bench')

SOURCEDIR = OUTDIR

TARGETDIRS = {
  appstgt: {
    'basenames': appsbases,
    'wrap': False,
    'isolate': True,
  },
  fftgt: {
    'basenames': ffbases,
    'wrap': True,
    'isolate': False,
  }
}

# Profiling-related configuration

octaneProcessedStepSpec = {
  'beginafter': '          suite.NotifySkipped(runner);\n        } else {\n',
  'endafter': '          continuation = suite.RunStep(runner);\n',
  'matchall': False,
  'indent': 10,
  'noquotes': True
}
octaneOptimizedStepSpec = {
  'beginafter': 'function CheckCompatibility(){',
  'endafter': '&&Run()',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True,
  'noquotes': True
}
octaneProcessedSpec = {
  'beginafter': 'function CheckCompatibility() {\n',
  'endafter': '    Run()\n  }\n',
  'matchall': False,
  'indent': 2
}
octaneOptimizedSpec = {
  'beginafter': 'function CheckCompatibility(){',
  'endafter': '&&Run()',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}
octaneOriginalSpec = {
  'beginafter': 'function CheckCompatibility() {\n',
  'endafter': '  Run();\n',
  'matchall': False,
  'indent': 2
}
imageloaderClosureSpec = {
  'beginafter': 'function doLoad() {\n',
  'endafter': 'img$$2.fetch()\n',
  'matchall': False,
  'indent': 6
}
imageloaderTransformedSpec = {
  'beginafter': 'function doLoad() {\n',
  'endafter': '  JAMScript.call(img$$2.fetch, img$$2, []);\n',
  'matchall': False,
  'indent': 4
}
imageloaderProcessedSpec = {
  'beginafter': 'function doLoad() {\n',
  'endafter': 'img$$2.fetch();\n',
  'matchall': False,
  'indent': 4
}
imageloaderOptimizedSpec = {
  'beginafter': 'function doLoad(){',
  'endafter': 'JAMScript.call(v554.fetch,v554,[])',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}
imageloaderOriginalSpec = {
  'beginafter': 'function doLoad() {\n',
  'endafter': 'img.fetch()\n',
  'matchall': False,
  'indent': 2
}
jsqrcodeClosureSpec = {
  'beginafter': 'image$$7.onload = function() {',
  'endbefore': 'if(qrcode.callback != null)',
  'matchall': True,
  'indent': 6
}
jsqrcodeProcessedSpec = {
  'beginafter': 'function v144() {',
  'endbefore': ['if(v239) {', 'if(v242) {'],
  'matchall': False,
  'indent': 4
}
jsqrcodeOptimizedSpec = {
  'beginafter': 'function v144(){',
  'endbefore': 'if(context=null!=context)',
  'matchall': True,
  'indent': -1
}
jsqrcodeOriginalSpec = {
  'beginafter': 'image.onload=function(){',
  'endbefore': 'if(qrcode.callback!=null)',
  'matchall': True,
  'indent': 6
}

snoteOriginalEditSpec = {
  'beginafter': 'function handleEditDialogOk() {',
  'endbefore': '    }\n\n    function handleEditDialogCancel() {',
  'matchall': False,
  'indent': 4
}
snoteClosureEditSpec = {
  'beginafter': 'function handleEditDialogOk() {',
  'endbefore': '  }\n  function handleEditDialogCancel() {',
  'matchall': False,
  'indent': 4
}
snoteProcessedEditSpec = {
  'beginafter': 'function handleEditDialogOk() {',
  'endbefore': '    return\n  }\n  function handleEditDialogCancel() {',
  'matchall': False,
  'indent': 4
}
snoteOptimizedEditSpec = {
  'beginafter': 'function handleEditDialogOk(){',
  'endbefore': '}function handleEditDialogCancel(){',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}
snoteOriginalReadSpec = {
  'beginafter': 'function handleUnlockDialogOk() {',
  'endbefore': '    }\n\n    function handleUnlockDialogCancel() {',
  'matchall': False,
  'indent': 4
}
snoteClosureReadSpec = {
  'beginafter': 'function handleUnlockDialogOk() {',
  'endbefore': '  }\n  function handleUnlockDialogCancel() {',
  'matchall': False,
  'indent': 4
}
snoteProcessedReadSpec = {
  'beginafter': 'function handleUnlockDialogOk() {',
  'endbefore': '    return\n  }\n  function handleUnlockDialogCancel() {',
  'matchall': False,
  'indent': 4
}
snoteOptimizedReadSpec = {
  'beginafter': 'function handleUnlockDialogOk(){',
  'endbefore': '}function handleUnlockDialogCancel(){',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

mwwidgetsOriginalEditSpec = {
  'beginafter': 'function createEditDialogOkHandler(strServerPath, strNoteId) {\n\treturn function() {',
  'endbefore': '        }\n    }\n\n    function createEditDialogCancelHandler(strNoteId) {',
  'matchall': False,
  'indent': 12
}
mwwidgetsClosureEditSpec = {
  'beginafter': 'function createEditDialogOkHandler(strServerPath$$5, strNoteId$$43) {\n    return function() {',
  'endbefore': '    }\n  }\n  function createEditDialogCancelHandler(strNoteId$$44) {',
  'matchall': False,
  'indent': 6
}
mwwidgetsProcessedEditSpec = {
  'beginafter': 'function createEditDialogOkHandler(strServerPath$$5, strNoteId$$43) {\n    function v8() {',
  'endbefore': '    }\n    return v8\n',
  'matchall': False,
  'indent': 6
}
mwwidgetsOptimizedEditSpec = {
  'beginafter': 'function createEditDialogOkHandler(strServerPath,strNoteId){function v8(){',
  'endbefore': '}return v8}',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}
mwwidgetsOriginalReadSpec = {
  'beginafter': 'function createUnlockDialogOkHandler(strNoteId) {\n\treturn function() {',
  'endbefore': '\t}\n    }\n\n    function createUnlockDialogCancelHandler(strNoteId) {',
  'matchall': False,
  'indent': 6
}
mwwidgetsClosureReadSpec = {
  'beginafter': 'function createUnlockDialogOkHandler(strNoteId$$40) {\n    return function() {',
  'endbefore': '    }\n  }\n  function createUnlockDialogCancelHandler(strNoteId$$41) {',
  'matchall': False,
  'indent': 6
}
mwwidgetsProcessedReadSpec = {
  'beginafter': 'function createUnlockDialogOkHandler(strNoteId$$40) {\n    function v5() {',
  'endbefore': '      return\n    }\n    return v5\n',
  'matchall': False,
  'indent': 6
}
mwwidgetsOptimizedReadSpec = {
  'beginafter': 'function createUnlockDialogOkHandler(strNoteId){function v5(){',
  'endbefore': '}return v5}',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

googiespellSubmitOriginalSpec = {
  'beginafter': 'GoogieSpell.prototype.spellCheck = function(ignore) {',
  'endbefore': '}\n\n\n//////\n// Spell checking functions',
  'matchall': False,
  'indent': 4 
}
googiespellSubmitProcessedSpec = {
  'beginafter': 'function v182(ignore) {',
  'endbefore': '  return\n}\nfunction v181(text',
  'matchall': False,
  'indent': 6
}
googiespellSubmitClosureSpec = {
  'beginafter': 'GoogieSpell.prototype.spellCheck = function(ignore) {',
  'endbefore': '};\nGoogieSpell.prototype.parseResult = function(r_text$$1) {',
  'matchall': False,
  'indent': 6
}
googiespellSubmitOptimizedSpec = {
  'beginafter': 'function v182(ignore){',
  'endbefore': '}\nfunction v181(text){',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

googiespellParseOriginalSpec = {
  'beginafter': 'GoogieSpell.prototype.parseResult = function(r_text) {',
  'endbefore': '    return results;\n}\n\n//////\n// Counters',
  'matchall': False,
  'indent': 4 
}
googiespellParseProcessedSpec = {
  'beginafter': 'function v183(r_text$$1) {',
  'endbefore': '  return results\n}\nfunction v182(ignore) {',
  'matchall': False,
  'indent': 2
}
googiespellParseClosureSpec = {
  'beginafter': 'GoogieSpell.prototype.parseResult = function(r_text$$1) {',
  'endbefore': '  return results\n};\nGoogieSpell.prototype.errorFixed = function() {',
  'matchall': False,
  'indent': 2
}
googiespellParseOptimizedSpec = {
  'beginafter': 'function v183(r_text){',
  'endbefore': 'return results}\nfunction v182(ignore){',
  'matchall': False,
  'indent': -1,
}

sms2codonplotOriginalSpec = {
  'beginafter': 'function codonPlot (theDocument) {\t',
  'endbefore': '\treturn true;\t\n\n\n\n}\n\nfunction writeCodonPlot(',
  'matchall': False,
  'indent': 2
}
sms2codonplotProcessedSpec = {
  'beginafter': 'function codonPlot(theDocument) {',
  'endbefore': '  return true\n}\nfunction writeCodonPlot(',
  'matchall': False,
  'indent': 2
}
sms2codonplotOptimizedSpec = {
  'beginafter': 'function v4(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2codonusageOriginalSpec = {
  'beginafter': 'function codonUsage (theDocument) {\t',
  'endbefore': '\treturn true;\n\n}\n\n\n\n\nfunction writeCodonTable(',
  'matchall': False,
  'indent': 2
}
sms2codonusageProcessedSpec = {
  'beginafter': 'function codonUsage(theDocument) {',
  'endbefore': '  return true\n}\nfunction writeCodonTable(',
  'matchall': False,
  'indent': 2
}
sms2codonusageOptimizedSpec = {
  'beginafter': 'function v5(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2cpgislandsOriginalSpec = {
  'beginafter': 'function cpgIslands (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\nfunction cpgIslandRegions (',
  'matchall': False,
  'indent': 2
}
sms2cpgislandsProcessedSpec = {
  'beginafter': 'function cpgIslands(theDocument) {',
  'endbefore': '  return true\n}\nfunction cpgIslandRegions(',
  'matchall': False,
  'indent': 2
}
sms2cpgislandsOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2dnamwOriginalSpec = {
  'beginafter': 'function dnaMw (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\nfunction writeDnaMw (',
  'matchall': False,
  'indent': 2
}
sms2dnamwProcessedSpec = {
  'beginafter': 'function dnaMw(theDocument) {',
  'endbefore': '  return true\n}\nfunction writeDnaMw(',
  'matchall': False,
  'indent': 2
}
sms2dnamwOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2dnapatternOriginalSpec = {
  'beginafter': 'function dnaPattern (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\nfunction writeDnaPattern (',
  'matchall': False,
  'indent': 2
}
sms2dnapatternProcessedSpec = {
  'beginafter': 'function dnaPattern(theDocument) {',
  'endbefore': '  return true\n}\nfunction writeDnaPattern(',
  'matchall': False,
  'indent': 2
}
sms2dnapatternOptimizedSpec = {
  'beginafter': 'function dnaPattern(){',
  'endbefore': '}\nfunction writeDnaPattern(',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2dnastatsOriginalSpec = {
  'beginafter': 'function dnaStats (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\n\n// dna_stats.html',
  'matchall': False,
  'indent': 2
}
sms2dnastatsClosureSpec = {
  'beginafter': 'function dnaStats(theDocument) {',
  'endbefore': '  return true\n}\ndocument.onload = ',
  'matchall': False,
  'indent': 2
}
sms2dnastatsProcessedSpec = {
  'beginafter': 'function dnaStats(theDocument) {',
  'endafter': '  closeWindow();\n',
  'matchall': False,
  'indent': 2
}
sms2dnastatsOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2fuzzysearchdnaOriginalSpec = {
  'beginafter': 'function fuzzySearchDna (theDocument) {\t',
  'endbefore': '\treturn true;\n}\t\n\nfunction _fuzzySearchDna (',
  'matchall': False,
  'indent': 2
}
sms2fuzzysearchdnaProcessedSpec = {
  'beginafter': 'function fuzzySearchDna(theDocument) {',
  'endbefore': '  return true\n}\nfunction _fuzzySearchDna(',
  'matchall': False,
  'indent': 2
}
sms2fuzzysearchdnaOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2fuzzysearchproteinOriginalSpec = {
  'beginafter': 'function fuzzySearchProtein (theDocument) {\t',
  'endbefore': '\treturn true;\n}\t\n\nfunction _fuzzySearchProtein (',
  'matchall': False,
  'indent': 2
}
sms2fuzzysearchproteinProcessedSpec = {
  'beginafter': 'function fuzzySearchProtein(theDocument) {',
  'endbefore': '  return true\n}\nfunction _fuzzySearchProtein(',
  'matchall': False,
  'indent': 2
}
sms2fuzzysearchproteinOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2identsimOriginalSpec = {
  'beginafter': 'function identSim (theDocument) {',
  'endbefore': '\treturn true;\n}\n\nfunction writeIdentAndSim (',
  'matchall': False,
  'indent': 2
}
sms2identsimProcessedSpec = {
  'beginafter': 'function identSim(theDocument) {',
  'endbefore': '  return true\n}\nfunction writeIdentAndSim(',
  'matchall': False,
  'indent': 2
}
sms2identsimOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2multirevtransOriginalSpec = {
  'beginafter': 'function multiRevTrans (theDocument) {',
  'endbefore': '\treturn true;\n}\n\nfunction writeConsensusSeq(',
  'matchall': False,
  'indent': 2
}
sms2multirevtransProcessedSpec = {
  'beginafter': 'function multiRevTrans(theDocument) {',
  'endbefore': '  return true\n}\nfunction writeConsensusSeq(',
  'matchall': False,
  'indent': 2
}
sms2multirevtransOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2mutatefordigestOriginalSpec = {
  'beginafter': 'function mutateForDigest (theDocument) {\t',
  'endbefore': '\treturn true;\n}\t\n\nfunction layoutRestTrans (',
  'matchall': False,
  'indent': 2
}
sms2mutatefordigestProcessedSpec = {
  'beginafter': 'function mutateForDigest(theDocument) {',
  'endbefore': '  return true\n}\nfunction layoutRestTrans(',
  'matchall': False,
  'indent': 2
}
sms2mutatefordigestOptimizedSpec = {
  'beginafter': 'function v8(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2orffindOriginalSpec = {
  'beginafter': 'function orfFind (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\nfunction writeOrfs (',
  'matchall': False,
  'indent': 2
}
sms2orffindProcessedSpec = {
  'beginafter': 'function orfFind(theDocument) {',
  'endbefore': '  return true\n}\nfunction writeOrfs(',
  'matchall': False,
  'indent': 2
}
sms2orffindOptimizedSpec = {
  'beginafter': 'function v4(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2pairwisealigncodonsOriginalSpec = {
  'beginafter': 'function pairwiseAlignCodons (theDocument) {\t',
  'endbefore': '\treturn true;\n}\t\n\nfunction pairwiseCodon (',
  'matchall': False,
  'indent': 2
}
sms2pairwisealigncodonsProcessedSpec = {
  'beginafter': 'function pairwiseAlignCodons(theDocument) {',
  'endbefore': '  return true\n}\nfunction pairwiseCodon(',
  'matchall': False,
  'indent': 2
}
sms2pairwisealigncodonsOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2pairwisealigndnaOriginalSpec = {
  'beginafter': 'function pairwiseAlignDna (theDocument) {\t',
  'endbefore': '\treturn true;\n}\t\n\nfunction pairwiseDna (',
  'matchall': False,
  'indent': 2
}
sms2pairwisealigndnaProcessedSpec = {
  'beginafter': 'function pairwiseAlignDna(theDocument) {',
  'endbefore': '  return true\n}\nfunction pairwiseDna(',
  'matchall': False,
  'indent': 2
}
sms2pairwisealigndnaOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2pairwisealignproteinOriginalSpec = {
  'beginafter': 'function pairwiseAlignProtein (theDocument) {\t',
  'endbefore': '\treturn true;\n}\t\n\nfunction pairwiseProtein (',
  'matchall': False,
  'indent': 2
}
sms2pairwisealignproteinProcessedSpec = {
  'beginafter': 'function pairwiseAlignProtein(theDocument) {',
  'endbefore': '  return true\n}\nfunction pairwiseProtein(',
  'matchall': False,
  'indent': 2
}
sms2pairwisealignproteinOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2pcrprimerstatsOriginalSpec = {
  'beginafter': 'function pcrPrimerStats (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\n\n//Nucleotide Code:',
  'matchall': False,
  'indent': 2
}
sms2pcrprimerstatsProcessedSpec = {
  'beginafter': 'function pcrPrimerStats(theDocument) {',
  'endbefore': '  return true\n}\nfunction _removeNonPrimer(',
  'matchall': False,
  'indent': 2
}
sms2pcrprimerstatsOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2pcrproductsOriginalSpec = {
  'beginafter': 'function pcrProducts (theDocument) {\t',
  'endbefore': '\treturn true;\n\n\n}\n\nfunction findMatches (',
  'matchall': False,
  'indent': 2
}
sms2pcrproductsProcessedSpec = {
  'beginafter': 'function pcrProducts(theDocument) {',
  'endbefore': '  return true\n}\nfunction findMatches(',
  'matchall': False,
  'indent': 2
}
sms2pcrproductsOptimizedSpec = {
  'beginafter': 'function pcrProducts(){',
  'endbefore': '}\nfunction findMatches(',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2proteingravyOriginalSpec = {
  'beginafter': 'function proteinGravy (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\n\nfunction getProteinGravy (',
  'matchall': False,
  'indent': 2
}
sms2proteingravyProcessedSpec = {
  'beginafter': 'function proteinGravy(theDocument) {',
  'endbefore': '  return true\n}\nfunction getProteinGravy(',
  'matchall': False,
  'indent': 2
}
sms2proteingravyOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2proteiniepOriginalSpec = {
  'beginafter': 'function proteinIep (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\nfunction writeProtIep (',
  'matchall': False,
  'indent': 2
}
sms2proteiniepProcessedSpec = {
  'beginafter': 'function proteinIep(theDocument) {',
  'endbefore': '  return true\n}\nfunction writeProtIep(',
  'matchall': False,
  'indent': 2
}
sms2proteiniepOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2proteinmwOriginalSpec = {
  'beginafter': 'function proteinMw (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\nfunction writeProtMw (',
  'matchall': False,
  'indent': 2
}
sms2proteinmwProcessedSpec = {
  'beginafter': 'function proteinMw(theDocument) {',
  'endbefore': '  return true\n}\nfunction writeProtMw(',
  'matchall': False,
  'indent': 2
}
sms2proteinmwOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2proteinpatternOriginalSpec = {
  'beginafter': 'function proteinPattern (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\nfunction writeProteinPattern (',
  'matchall': False,
  'indent': 2
}
sms2proteinpatternProcessedSpec = {
  'beginafter': 'function proteinPattern(theDocument) {',
  'endbefore': '  return true\n}\nfunction writeProteinPattern(',
  'matchall': False,
  'indent': 2
}
sms2proteinpatternOptimizedSpec = {
  'beginafter': 'function proteinPattern(){',
  'endbefore': '}\nfunction writeProteinPattern(',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2proteinstatsOriginalSpec = {
  'beginafter': 'function proteinStats (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\n\n\n\n\n// protein_stats.html',
  'matchall': False,
  'indent': 2
}
sms2proteinstatsProcessedSpec = {
  'beginafter': 'function proteinStats(theDocument) {',
  'endafter': '  closeWindow();\n',
  'matchall': False,
  'indent': 2
}
sms2proteinstatsClosureSpec = {
  'beginafter': 'function proteinStats(theDocument) {',
  'endbefore': '  return true\n}\ndocument.onload = function() {',
  'matchall': False,
  'indent': 2
}
sms2proteinstatsOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2restdigestOriginalSpec = {
  'beginafter': 'function restDigest (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\nfunction digest (',
  'matchall': False,
  'indent': 2
}
sms2restdigestProcessedSpec = {
  'beginafter': 'function restDigest(theDocument) {',
  'endbefore': '  return true\n}\nfunction digest(',
  'matchall': False,
  'indent': 2
}
sms2restdigestOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2restsummaryOriginalSpec = {
  'beginafter': 'function restSummary (theDocument) {\t',
  'endbefore': '\treturn true;\t\n\n}\n\n\n// rest_summary.html',
  'matchall': False,
  'indent': 2
}
sms2restsummaryProcessedSpec = {
  'beginafter': 'function restSummary(theDocument) {',
  'endafter': '  closeWindow();\n',
  'matchall': False,
  'indent': 2
}
sms2restsummaryClosureSpec = {
  'beginafter': 'function restSummary(theDocument) {',
  'endbefore': '  return true\n}\ndocument.onload = function() {',
  'matchall': False,
  'indent': 2
}
sms2restsummaryOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2revtransOriginalSpec = {
  'beginafter': 'function revTrans (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\nfunction writeRevTransSeqNoDegen(',
  'matchall': False,
  'indent': 2
}
sms2revtransProcessedSpec = {
  'beginafter': 'function revTrans(theDocument) {',
  'endbefore': '  return true\n}\nfunction writeRevTransSeqNoDegen(',
  'matchall': False,
  'indent': 2
}
sms2revtransOptimizedSpec = {
  'beginafter': 'function v6(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2translateOriginalSpec = {
  'beginafter': 'function translate (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\nfunction writeTranslation (',
  'matchall': False,
  'indent': 2
}
sms2translateProcessedSpec = {
  'beginafter': 'function translate(theDocument$$1) {',
  'endbefore': '  return true\n}\nfunction writeTranslation(',
  'matchall': False,
  'indent': 2
}
sms2translateOptimizedSpec = {
  'beginafter': 'function v4(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2coloralignconsOriginalSpec = {
  'beginafter': 'function colorAlignCons (theDocument) {',
  'endbefore': '\treturn true;\n}\n\nfunction colorAlign (',
  'matchall': False,
  'indent': 2
}
sms2coloralignconsProcessedSpec = {
  'beginafter': 'function colorAlignCons(theDocument) {',
  'endbefore': '  return true\n}\nfunction colorAlign(',
  'matchall': False,
  'indent': 2
}
sms2coloralignconsOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2coloralignpropOriginalSpec = {
  'beginafter': 'function colorAlignProp (theDocument) {',
  'endbefore': '\treturn true;\n}\n\nfunction colorAlign (',
  'matchall': False,
  'indent': 2
}
sms2coloralignpropProcessedSpec = {
  'beginafter': 'function colorAlignProp(theDocument) {',
  'endbefore': '  return true\n}\nfunction colorAlign(',
  'matchall': False,
  'indent': 2
}
sms2coloralignpropOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2combinefastaOriginalSpec = {
  'beginafter': 'function combineFasta (theDocument) {\t',
  'endbefore': '\treturn true;\n\t\n}\t\n\n\n\n// combine_fasta.html\n',
  'matchall': False,
  'indent': 2
}
sms2combinefastaClosureSpec = {
  'beginafter': 'function combineFasta(theDocument) {',
  'endbefore': '  return true\n}\ndocument.onload = function() {\n',
  'matchall': False,
  'indent': 2
},
sms2combinefastaProcessedSpec = {
  'beginafter': 'function combineFasta(theDocument) {',
  'endafter': '  closeWindow();\n',
  'matchall': False,
  'indent': 2
}
sms2combinefastaOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2emblfastaOriginalSpec = {
  'beginafter': 'function emblFasta (theDocument) {',
  'endbefore': '\treturn true;\n}\n\nfunction emblToFasta (',
  'matchall': False,
  'indent': 2
}
sms2emblfastaProcessedSpec = {
  'beginafter': 'function emblFasta(theDocument) {',
  'endbefore': '  return true\n}\nfunction emblToFasta(',
  'matchall': False,
  'indent': 2
}
sms2emblfastaOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2emblfeatOriginalSpec = {
  'beginafter': 'function emblFeat (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\nfunction emblFeatExtract (',
  'matchall': False,
  'indent': 2
}
sms2emblfeatProcessedSpec = {
  'beginafter': 'function emblFeat(theDocument) {',
  'endbefore': '  return true\n}\nfunction emblFeatExtract(',
  'matchall': False,
  'indent': 2
}
sms2emblfeatOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2embltransOriginalSpec = {
  'beginafter': 'function emblTrans (theDocument) {\t',
  'endbefore': '\treturn true;\n}\nfunction emblTransExtract (',
  'matchall': False,
  'indent': 2
}
sms2embltransProcessedSpec = {
  'beginafter': 'function emblTrans(theDocument) {',
  'endbefore': '  return true\n}\nfunction emblTransExtract(',
  'matchall': False,
  'indent': 2
}
sms2embltransOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2filterdnaOriginalSpec = {
  'beginafter': 'function filterDna (theDocument) {',
  'endbefore': '\treturn true;\n}\n\n\n// filter_dna.html\n',
  'matchall': False,
  'indent': 2
}
sms2filterdnaClosureSpec = {
  'beginafter': 'function filterDna(theDocument) {',
  'endbefore': '  return true\n}\ndocument.onload = function() {\n',
  'matchall': False,
  'indent': 2
}
sms2filterdnaProcessedSpec = {
  'beginafter': 'function filterDna(theDocument) {',
  'endafter': '  closeWindow();\n',
  'matchall': False,
  'indent': 2
}
sms2filterdnaOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2filterproteinOriginalSpec = {
  'beginafter': 'function filterProtein (theDocument) {',
  'endbefore': '\treturn true;\n}\n\n\n// filter_protein.html\n',
  'matchall': False,
  'indent': 2
}
sms2filterproteinClosureSpec = {
  'beginafter': 'function filterProtein(theDocument) {',
  'endbefore': '  return true\n}\ndocument.onload = function() {\n',
  'matchall': False,
  'indent': 2
}
sms2filterproteinProcessedSpec = {
  'beginafter': 'function filterProtein(theDocument) {',
  'endafter': '  closeWindow();\n',
  'matchall': False,
  'indent': 2
}
sms2filterproteinOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2genbankfastaOriginalSpec = {
  'beginafter': 'function genbankFasta (theDocument) {',
  'endbefore': '\treturn true;\n}\n\nfunction genbankToFasta (',
  'matchall': False,
  'indent': 2
}
sms2genbankfastaProcessedSpec = {
  'beginafter': 'function genbankFasta(theDocument) {',
  'endbefore': '  return true\n}\nfunction genbankToFasta(',
  'matchall': False,
  'indent': 2
}
sms2genbankfastaOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2genbankfeatOriginalSpec = {
  'beginafter': 'function genbankFeat (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\nfunction genBankFeatExtract (',
  'matchall': False,
  'indent': 2
}
sms2genbankfeatProcessedSpec = {
  'beginafter': 'function genbankFeat(theDocument) {',
  'endbefore': '  return true\n}\nfunction genBankFeatExtract(',
  'matchall': False,
  'indent': 2
}
sms2genbankfeatOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2genbanktransOriginalSpec = {
  'beginafter': 'function genbankTrans (theDocument) {\t',
  'endbefore': '\treturn true;\n}\nfunction genBankTransExtract (',
  'matchall': False,
  'indent': 2
}
sms2genbanktransProcessedSpec = {
  'beginafter': 'function genbankTrans(theDocument) {',
  'endbefore': '  return true\n}\nfunction genBankTransExtract(',
  'matchall': False,
  'indent': 2
}
sms2genbanktransOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2groupdnaOriginalSpec = {
  'beginafter': 'function groupDna (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\n\n// group_dna.html\n',
  'matchall': False,
  'indent': 2
}
sms2groupdnaClosureSpec = {
  'beginafter': 'function groupDna(theDocument) {',
  'endbefore': '  return true\n}\ndocument.onload = function() {\n',
  'matchall': False,
  'indent': 2
}
sms2groupdnaProcessedSpec = {
  'beginafter': 'function groupDna(theDocument) {',
  'endafter': '  closeWindow();\n',
  'matchall': False,
  'indent': 2
}
sms2groupdnaOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2groupproteinOriginalSpec = {
  'beginafter': 'function groupProtein (theDocument) {\t',
  'endbefore': '\treturn true;\n\n}\n\n\n// group_protein.html\n',
  'matchall': False,
  'indent': 2
}
sms2groupproteinClosureSpec = {
  'beginafter': 'function groupProtein(theDocument) {',
  'endbefore': '  return true\n}\ndocument.onload = function() {\n',
  'matchall': False,
  'indent': 2
}
sms2groupproteinProcessedSpec = {
  'beginafter': 'function groupProtein(theDocument) {',
  'endafter': '  closeWindow();\n',
  'matchall': False,
  'indent': 2
}
sms2groupproteinOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2onetothreeOriginalSpec = {
  'beginafter': 'function oneToThree (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\nfunction writeOneToThree (',
  'matchall': False,
  'indent': 2
}
sms2onetothreeProcessedSpec = {
  'beginafter': 'function oneToThree(theDocument) {',
  'endbefore': '  return true\n}\nfunction writeOneToThree(',
  'matchall': False,
  'indent': 2
}
sms2onetothreeOptimizedSpec = {
  'beginafter': 'function v5(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2primermapOriginalSpec = {
  'beginafter': 'function primerMap (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\nfunction writePrimerSites (',
  'matchall': False,
  'indent': 2
}
sms2primermapProcessedSpec = {
  'beginafter': 'function primerMap(theDocument) {',
  'endbefore': '  return true\n}\nfunction writePrimerSites(',
  'matchall': False,
  'indent': 2
}
sms2primermapOptimizedSpec = {
  'beginafter': 'function primerMap(){',
  'endbefore': '}\nfunction writePrimerSites(',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2rangeextractdnaOriginalSpec = {
  'beginafter': 'function rangeExtract (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\nfunction writeSequenceRanges (',
  'matchall': False,
  'indent': 2
}
sms2rangeextractdnaProcessedSpec = {
  'beginafter': 'function rangeExtract(theDocument) {',
  'endbefore': '  return true\n}\nfunction writeSequenceRanges(',
  'matchall': False,
  'indent': 2
}
sms2rangeextractdnaOptimizedSpec = {
  'beginafter': 'function v11(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2rangeextractproteinOriginalSpec = {
  'beginafter': 'function rangeExtract (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\nfunction writeSequenceRanges (',
  'matchall': False,
  'indent': 2
}
sms2rangeextractproteinProcessedSpec = {
  'beginafter': 'function rangeExtract(theDocument) {',
  'endbefore': '  return true\n}\nfunction writeSequenceRanges(',
  'matchall': False,
  'indent': 2
}
sms2rangeextractproteinOptimizedSpec = {
  'beginafter': 'function v11(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2restmapOriginalSpec = {
  'beginafter': 'function restMap (theDocument) {\t',
  'endbefore': '\treturn true;\n}\t\n\nfunction layoutRestTrans (',
  'matchall': False,
  'indent': 2
}
sms2restmapProcessedSpec = {
  'beginafter': 'function restMap(theDocument) {',
  'endbefore': '  return true\n}\nfunction layoutRestTrans(',
  'matchall': False,
  'indent': 2
}
sms2restmapOptimizedSpec = {
  'beginafter': 'function v12(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2revcompOriginalSpec = {
  'beginafter': 'function revComp (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\n\n\n// rev_comp.html\n',
  'matchall': False,
  'indent': 2
}
sms2revcompClosureSpec = {
  'beginafter': 'function revComp(theDocument) {',
  'endbefore': '  return true\n}\ndocument.onload = function() {\n',
  'matchall': False,
  'indent': 2
}
sms2revcompProcessedSpec = {
  'beginafter': 'function revComp(theDocument) {',
  'endafter': '  closeWindow();\n',
  'matchall': False,
  'indent': 2
}
sms2revcompOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2splitcodonsOriginalSpec = {
  'beginafter': 'function splitCodons (theDocument) {\t',
  'endbefore': '\treturn true;\n\t\n}\t\n\nfunction getBasesBasedOnCodonPosition (',
  'matchall': False,
  'indent': 2
}
sms2splitcodonsProcessedSpec = {
  'beginafter': 'function splitCodons(theDocument) {',
  'endbefore': '  return true\n}\nfunction getBasesBasedOnCodonPosition(',
  'matchall': False,
  'indent': 2
}
sms2splitcodonsOptimizedSpec = {
  'beginafter': 'function v4(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2splitfastaOriginalSpec = {
  'beginafter': 'function splitFasta (theDocument) {\t',
  'endbefore': '\treturn true;\n\t\n}\t\n\n\n\n// split_fasta.html\n',
  'matchall': False,
  'indent': 2
}
sms2splitfastaClosureSpec = {
  'beginafter': 'function splitFasta(theDocument) {',
  'endbefore': '  return true\n}\ndocument.onload = function() {\n',
  'matchall': False,
  'indent': 2
}
sms2splitfastaProcessedSpec = {
  'beginafter': 'function splitFasta(theDocument) {',
  'endafter': '  closeWindow();\n',
  'matchall': False,
  'indent': 2
}
sms2splitfastaOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2threetooneOriginalSpec = {
  'beginafter': 'function threeToOne (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\nfunction writeThreeToOne (',
  'matchall': False,
  'indent': 2
}
sms2threetooneProcessedSpec = {
  'beginafter': 'function threeToOne(theDocument) {',
  'endbefore': '  return true\n}\nfunction writeThreeToOne(',
  'matchall': False,
  'indent': 2
}
sms2threetooneOptimizedSpec = {
  'beginafter': 'function v4(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2transmapOriginalSpec = {
  'beginafter': 'function transMap (theDocument) {\t',
  'endbefore': '\treturn true;\n}\t\n\nfunction layoutTranslation (',
  'matchall': False,
  'indent': 2
}
sms2transmapProcessedSpec = {
  'beginafter': 'function transMap(theDocument) {',
  'endbefore': '  return true\n}\nfunction layoutTranslation(',
  'matchall': False,
  'indent': 2
}
sms2transmapOptimizedSpec = {
  'beginafter': 'function v12(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2windowextractdnaOriginalSpec = {
  'beginafter': 'function windowExtract (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\n\n// range_extract_dna.js\n',
  'matchall': False,
  'indent': 2
}
sms2windowextractdnaProcessedSpec = {
  'beginafter': 'function windowExtract(theDocument) {',
  'endbefore': '  return true\n}\nfunction rangeExtract(',
  'matchall': False,
  'indent': 2
}
sms2windowextractdnaOptimizedSpec = {
  'beginafter': 'function v11(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

sms2windowextractproteinOriginalSpec = {
  'beginafter': 'function windowExtract (theDocument) {\t',
  'endbefore': '\treturn true;\n}\n\n\n// range_extract_protein.js\n',
  'matchall': False,
  'indent': 2
}
sms2windowextractproteinProcessedSpec = {
  'beginafter': 'function windowExtract(theDocument) {',
  'endbefore': '  return true\n}\nfunction rangeExtract(',
  'matchall': False,
  'indent': 2
}
sms2windowextractproteinOptimizedSpec = {
  'beginafter': 'function v11(){try{',
  'endbefore': '}catch(e){var v',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

PROFILES = {
  'octane': {
    'run': {
      'original': octaneOriginalSpec,
      'original.modular': octaneOriginalSpec,
      'closure': octaneProcessedSpec,
      'closure.modular': octaneProcessedSpec,
      'preprocessed': octaneProcessedSpec,
      'preprocessed.modular': octaneProcessedSpec,
      'instrumented': octaneProcessedSpec,
      'transformed': octaneProcessedSpec,
      'callenclose': octaneProcessedSpec,
      'calltransform': octaneProcessedSpec,
      'optimized': octaneOptimizedSpec,
    },
    #'suite.name': {
    #  'original': octaneProcessedStepSpec,
    #  'original.modular': octaneProcessedStepSpec,
    #  'closure': octaneProcessedStepSpec,
    #  'closure.modular': octaneProcessedStepSpec,
    #  'preprocessed': octaneProcessedStepSpec,
    #  'preprocessed.modular': octaneProcessedStepSpec,
    #  'instrumented': octaneProcessedStepSpec,
    #  'transformed': octaneProcessedStepSpec,
    #  'callenclose': octaneProcessedStepSpec,
    #  'calltransform': octaneProcessedStepSpec,
      # %%% Too ugly.
      #'optimized': octaneOptimizedStepSpec,
    #}
  },
  'imageloader': {
    'fetch': {
      'original': imageloaderOriginalSpec,
      'original.modular': imageloaderOriginalSpec,
      'closure': imageloaderClosureSpec,
      'closure.modular': imageloaderClosureSpec,
      'preprocessed': imageloaderProcessedSpec,
      'preprocessed.modular': imageloaderProcessedSpec,
      'instrumented': imageloaderProcessedSpec,
      'transformed': imageloaderTransformedSpec,
      'callenclose': imageloaderProcessedSpec,
      'calltransform': imageloaderProcessedSpec,
      'optimized': imageloaderOptimizedSpec,
    }
  },
  'jsqrcode-get': {
    'decode': {
      'original': jsqrcodeOriginalSpec,
      'original.modular': jsqrcodeOriginalSpec,
      'closure': jsqrcodeClosureSpec,
      'closure.modular': jsqrcodeClosureSpec,
      'preprocessed': jsqrcodeProcessedSpec,
      'preprocessed.modular': jsqrcodeProcessedSpec,
      'instrumented': jsqrcodeProcessedSpec,
      'transformed': jsqrcodeProcessedSpec,
      'callenclose': jsqrcodeProcessedSpec,
      'calltransform': jsqrcodeProcessedSpec,
      'optimized': jsqrcodeOptimizedSpec,
    }
  },
  'jsqrcode-call': {
    'decode': {
      'original': jsqrcodeOriginalSpec,
      'original.modular': jsqrcodeOriginalSpec,
      'closure': jsqrcodeClosureSpec,
      'closure.modular': jsqrcodeClosureSpec,
      'preprocessed': jsqrcodeProcessedSpec,
      'preprocessed.modular': jsqrcodeProcessedSpec,
      'instrumented': jsqrcodeProcessedSpec,
      'transformed': jsqrcodeProcessedSpec,
      'callenclose': jsqrcodeProcessedSpec,
      'calltransform': jsqrcodeProcessedSpec,
      'optimized': jsqrcodeOptimizedSpec,
    }
  },
  'snote': {
    'edit': {
      'original': snoteOriginalEditSpec,
      'original.modular': snoteOriginalEditSpec,
      'closure': snoteClosureEditSpec,
      'closure.modular': snoteClosureEditSpec,
      'preprocessed': snoteProcessedEditSpec,
      'preprocessed.modular': snoteProcessedEditSpec,
      'instrumented': snoteProcessedEditSpec,
      'transformed': snoteProcessedEditSpec,
      'callenclose': snoteProcessedEditSpec,
      'calltransform': snoteProcessedEditSpec,
      'optimized': snoteOptimizedEditSpec,
    },
    'read': {
      'original': snoteOriginalReadSpec,
      'original.modular': snoteOriginalReadSpec,
      'closure': snoteClosureReadSpec,
      'closure.modular': snoteClosureReadSpec,
      'preprocessed': snoteProcessedReadSpec,
      'preprocessed.modular': snoteProcessedReadSpec,
      'instrumented': snoteProcessedReadSpec,
      'transformed': snoteProcessedReadSpec,
      'callenclose': snoteProcessedReadSpec,
      'calltransform': snoteProcessedReadSpec,
      'optimized': snoteOptimizedReadSpec,
    }
  },
  'mwwidgets': {
    'edit': {
      'original': mwwidgetsOriginalEditSpec,
      'original.modular': mwwidgetsOriginalEditSpec,
      'closure': mwwidgetsClosureEditSpec,
      'closure.modular': mwwidgetsClosureEditSpec,
      'preprocessed': mwwidgetsProcessedEditSpec,
      'preprocessed.modular': mwwidgetsProcessedEditSpec,
      'instrumented': mwwidgetsProcessedEditSpec,
      'transformed': mwwidgetsProcessedEditSpec,
      'callenclose': mwwidgetsProcessedEditSpec,
      'calltransform': mwwidgetsProcessedEditSpec,
      'optimized': mwwidgetsOptimizedEditSpec,
    },
    'read': {
      'original': mwwidgetsOriginalReadSpec,
      'original.modular': mwwidgetsOriginalReadSpec,
      'closure': mwwidgetsClosureReadSpec,
      'closure.modular': mwwidgetsClosureReadSpec,
      'preprocessed': mwwidgetsProcessedReadSpec,
      'preprocessed.modular': mwwidgetsProcessedReadSpec,
      'instrumented': mwwidgetsProcessedReadSpec,
      'transformed': mwwidgetsProcessedReadSpec,
      'callenclose': mwwidgetsProcessedReadSpec,
      'calltransform': mwwidgetsProcessedReadSpec,
      'optimized': mwwidgetsOptimizedReadSpec,
    }
  },
  'googiespell': {
    'submit': {
      'original': googiespellSubmitOriginalSpec,
      'original.modular': googiespellSubmitOriginalSpec,
      'closure': googiespellSubmitClosureSpec,
      'closure.modular': googiespellSubmitClosureSpec,
      'preprocessed': googiespellSubmitProcessedSpec,
      'preprocessed.modular': googiespellSubmitProcessedSpec,
      'instrumented': googiespellSubmitProcessedSpec,
      'transformed': googiespellSubmitProcessedSpec,
      'callenclose': googiespellSubmitProcessedSpec,
      'calltransform': googiespellSubmitProcessedSpec,
      'optimized': googiespellSubmitOptimizedSpec,
    },
    'parse': {
      'original': googiespellParseOriginalSpec,
      'original.modular': googiespellParseOriginalSpec,
      'closure': googiespellParseClosureSpec,
      'closure.modular': googiespellParseClosureSpec,
      'preprocessed': googiespellParseProcessedSpec,
      'preprocessed.modular': googiespellParseProcessedSpec,
      'instrumented': googiespellParseProcessedSpec,
      'transformed': googiespellParseProcessedSpec,
      'callenclose': googiespellParseProcessedSpec,
      'calltransform': googiespellParseProcessedSpec,
      'optimized': googiespellParseOptimizedSpec,
    },
  },
  'sms2-codon-plot-call': {
    'compute': {
      'original': sms2codonplotOriginalSpec,
      'original.modular': sms2codonplotOriginalSpec,
      'closure': sms2codonplotProcessedSpec,
      'closure.modular': sms2codonplotProcessedSpec,
      'preprocessed': sms2codonplotProcessedSpec,
      'preprocessed.modular': sms2codonplotProcessedSpec,
      'instrumented': sms2codonplotProcessedSpec,
      'transformed': sms2codonplotProcessedSpec,
      'callenclose': sms2codonplotProcessedSpec,
      'calltransform': sms2codonplotProcessedSpec,
      'optimized': sms2codonplotOptimizedSpec,
    },
  },
  'sms2-codon-plot-get': {
    'compute': {
      'original': sms2codonplotOriginalSpec,
      'original.modular': sms2codonplotOriginalSpec,
      'closure': sms2codonplotProcessedSpec,
      'closure.modular': sms2codonplotProcessedSpec,
      'preprocessed': sms2codonplotProcessedSpec,
      'preprocessed.modular': sms2codonplotProcessedSpec,
      'instrumented': sms2codonplotProcessedSpec,
      'transformed': sms2codonplotProcessedSpec,
      'callenclose': sms2codonplotProcessedSpec,
      'calltransform': sms2codonplotProcessedSpec,
      'optimized': sms2codonplotOptimizedSpec,
    },
  },
  'sms2-codon-usage-call': {
    'compute': {
      'original': sms2codonusageOriginalSpec,
      'original.modular': sms2codonusageOriginalSpec,
      'closure': sms2codonusageProcessedSpec,
      'closure.modular': sms2codonusageProcessedSpec,
      'preprocessed': sms2codonusageProcessedSpec,
      'preprocessed.modular': sms2codonusageProcessedSpec,
      'instrumented': sms2codonusageProcessedSpec,
      'transformed': sms2codonusageProcessedSpec,
      'callenclose': sms2codonusageProcessedSpec,
      'calltransform': sms2codonusageProcessedSpec,
      'optimized': sms2codonusageOptimizedSpec,
    },
  },
  'sms2-codon-usage-get': {
    'compute': {
      'original': sms2codonusageOriginalSpec,
      'original.modular': sms2codonusageOriginalSpec,
      'closure': sms2codonusageProcessedSpec,
      'closure.modular': sms2codonusageProcessedSpec,
      'preprocessed': sms2codonusageProcessedSpec,
      'preprocessed.modular': sms2codonusageProcessedSpec,
      'instrumented': sms2codonusageProcessedSpec,
      'transformed': sms2codonusageProcessedSpec,
      'callenclose': sms2codonusageProcessedSpec,
      'calltransform': sms2codonusageProcessedSpec,
      'optimized': sms2codonusageOptimizedSpec,
    },
  },
  'sms2-cpg-islands-call': {
    'compute': {
      'original': sms2cpgislandsOriginalSpec,
      'original.modular': sms2cpgislandsOriginalSpec,
      'closure': sms2cpgislandsProcessedSpec,
      'closure.modular': sms2cpgislandsProcessedSpec,
      'preprocessed': sms2cpgislandsProcessedSpec,
      'preprocessed.modular': sms2cpgislandsProcessedSpec,
      'instrumented': sms2cpgislandsProcessedSpec,
      'transformed': sms2cpgislandsProcessedSpec,
      'callenclose': sms2cpgislandsProcessedSpec,
      'calltransform': sms2cpgislandsProcessedSpec,
      'optimized': sms2cpgislandsOptimizedSpec,
    },
  },
  'sms2-cpg-islands-get': {
    'compute': {
      'original': sms2cpgislandsOriginalSpec,
      'original.modular': sms2cpgislandsOriginalSpec,
      'closure': sms2cpgislandsProcessedSpec,
      'closure.modular': sms2cpgislandsProcessedSpec,
      'preprocessed': sms2cpgislandsProcessedSpec,
      'preprocessed.modular': sms2cpgislandsProcessedSpec,
      'instrumented': sms2cpgislandsProcessedSpec,
      'transformed': sms2cpgislandsProcessedSpec,
      'callenclose': sms2cpgislandsProcessedSpec,
      'calltransform': sms2cpgislandsProcessedSpec,
      'optimized': sms2cpgislandsOptimizedSpec,
    },
  },
  'sms2-dna-mw-call': {
    'compute': {
      'original': sms2dnamwOriginalSpec,
      'original.modular': sms2dnamwOriginalSpec,
      'closure': sms2dnamwProcessedSpec,
      'closure.modular': sms2dnamwProcessedSpec,
      'preprocessed': sms2dnamwProcessedSpec,
      'preprocessed.modular': sms2dnamwProcessedSpec,
      'instrumented': sms2dnamwProcessedSpec,
      'transformed': sms2dnamwProcessedSpec,
      'callenclose': sms2dnamwProcessedSpec,
      'calltransform': sms2dnamwProcessedSpec,
      'optimized': sms2dnamwOptimizedSpec,
    },
  },
  'sms2-dna-mw-get': {
    'compute': {
      'original': sms2dnamwOriginalSpec,
      'original.modular': sms2dnamwOriginalSpec,
      'closure': sms2dnamwProcessedSpec,
      'closure.modular': sms2dnamwProcessedSpec,
      'preprocessed': sms2dnamwProcessedSpec,
      'preprocessed.modular': sms2dnamwProcessedSpec,
      'instrumented': sms2dnamwProcessedSpec,
      'transformed': sms2dnamwProcessedSpec,
      'callenclose': sms2dnamwProcessedSpec,
      'calltransform': sms2dnamwProcessedSpec,
      'optimized': sms2dnamwOptimizedSpec,
    },
  },
  'sms2-dna-pattern-call': {
    'compute': {
      'original': sms2dnapatternOriginalSpec,
      'original.modular': sms2dnapatternOriginalSpec,
      'closure': sms2dnapatternProcessedSpec,
      'closure.modular': sms2dnapatternProcessedSpec,
      'preprocessed': sms2dnapatternProcessedSpec,
      'preprocessed.modular': sms2dnapatternProcessedSpec,
      'instrumented': sms2dnapatternProcessedSpec,
      'transformed': sms2dnapatternProcessedSpec,
      'callenclose': sms2dnapatternProcessedSpec,
      'calltransform': sms2dnapatternProcessedSpec,
      'optimized': sms2dnapatternOptimizedSpec,
    },
  },
  'sms2-dna-pattern-get': {
    'compute': {
      'original': sms2dnapatternOriginalSpec,
      'original.modular': sms2dnapatternOriginalSpec,
      'closure': sms2dnapatternProcessedSpec,
      'closure.modular': sms2dnapatternProcessedSpec,
      'preprocessed': sms2dnapatternProcessedSpec,
      'preprocessed.modular': sms2dnapatternProcessedSpec,
      'instrumented': sms2dnapatternProcessedSpec,
      'transformed': sms2dnapatternProcessedSpec,
      'callenclose': sms2dnapatternProcessedSpec,
      'calltransform': sms2dnapatternProcessedSpec,
      'optimized': sms2dnapatternOptimizedSpec,
    },
  },
  'sms2-dna-stats-call': {
    'compute': {
      'original': sms2dnastatsOriginalSpec,
      'original.modular': sms2dnastatsOriginalSpec,
      'closure': sms2dnastatsClosureSpec,
      'closure.modular': sms2dnastatsClosureSpec,
      'preprocessed': sms2dnastatsProcessedSpec,
      'preprocessed.modular': sms2dnastatsProcessedSpec,
      'instrumented': sms2dnastatsProcessedSpec,
      'transformed': sms2dnastatsProcessedSpec,
      'callenclose': sms2dnastatsProcessedSpec,
      'calltransform': sms2dnastatsProcessedSpec,
      'optimized': sms2dnastatsOptimizedSpec,
    },
  },
  'sms2-dna-stats-get': {
    'compute': {
      'original': sms2dnastatsOriginalSpec,
      'original.modular': sms2dnastatsOriginalSpec,
      'closure': sms2dnastatsClosureSpec,
      'closure.modular': sms2dnastatsClosureSpec,
      'preprocessed': sms2dnastatsProcessedSpec,
      'preprocessed.modular': sms2dnastatsProcessedSpec,
      'instrumented': sms2dnastatsProcessedSpec,
      'transformed': sms2dnastatsProcessedSpec,
      'callenclose': sms2dnastatsProcessedSpec,
      'calltransform': sms2dnastatsProcessedSpec,
      'optimized': sms2dnastatsOptimizedSpec,
    },
  },
  'sms2-fuzzy-search-dna-call': {
    'compute': {
      'original': sms2fuzzysearchdnaOriginalSpec,
      'original.modular': sms2fuzzysearchdnaOriginalSpec,
      'closure': sms2fuzzysearchdnaProcessedSpec,
      'closure.modular': sms2fuzzysearchdnaProcessedSpec,
      'preprocessed': sms2fuzzysearchdnaProcessedSpec,
      'preprocessed.modular': sms2fuzzysearchdnaProcessedSpec,
      'instrumented': sms2fuzzysearchdnaProcessedSpec,
      'transformed': sms2fuzzysearchdnaProcessedSpec,
      'callenclose': sms2fuzzysearchdnaProcessedSpec,
      'calltransform': sms2fuzzysearchdnaProcessedSpec,
      'optimized': sms2fuzzysearchdnaOptimizedSpec,
    },
  },
  'sms2-fuzzy-search-dna-get': {
    'compute': {
      'original': sms2fuzzysearchdnaOriginalSpec,
      'original.modular': sms2fuzzysearchdnaOriginalSpec,
      'closure': sms2fuzzysearchdnaProcessedSpec,
      'closure.modular': sms2fuzzysearchdnaProcessedSpec,
      'preprocessed': sms2fuzzysearchdnaProcessedSpec,
      'preprocessed.modular': sms2fuzzysearchdnaProcessedSpec,
      'instrumented': sms2fuzzysearchdnaProcessedSpec,
      'transformed': sms2fuzzysearchdnaProcessedSpec,
      'callenclose': sms2fuzzysearchdnaProcessedSpec,
      'calltransform': sms2fuzzysearchdnaProcessedSpec,
      'optimized': sms2fuzzysearchdnaOptimizedSpec,
    },
  },
  'sms2-fuzzy-search-protein-call': {
    'compute': {
      'original': sms2fuzzysearchproteinOriginalSpec,
      'original.modular': sms2fuzzysearchproteinOriginalSpec,
      'closure': sms2fuzzysearchproteinProcessedSpec,
      'closure.modular': sms2fuzzysearchproteinProcessedSpec,
      'preprocessed': sms2fuzzysearchproteinProcessedSpec,
      'preprocessed.modular': sms2fuzzysearchproteinProcessedSpec,
      'instrumented': sms2fuzzysearchproteinProcessedSpec,
      'transformed': sms2fuzzysearchproteinProcessedSpec,
      'callenclose': sms2fuzzysearchproteinProcessedSpec,
      'calltransform': sms2fuzzysearchproteinProcessedSpec,
      'optimized': sms2fuzzysearchproteinOptimizedSpec,
    },
  },
  'sms2-fuzzy-search-protein-get': {
    'compute': {
      'original': sms2fuzzysearchproteinOriginalSpec,
      'original.modular': sms2fuzzysearchproteinOriginalSpec,
      'closure': sms2fuzzysearchproteinProcessedSpec,
      'closure.modular': sms2fuzzysearchproteinProcessedSpec,
      'preprocessed': sms2fuzzysearchproteinProcessedSpec,
      'preprocessed.modular': sms2fuzzysearchproteinProcessedSpec,
      'instrumented': sms2fuzzysearchproteinProcessedSpec,
      'transformed': sms2fuzzysearchproteinProcessedSpec,
      'callenclose': sms2fuzzysearchproteinProcessedSpec,
      'calltransform': sms2fuzzysearchproteinProcessedSpec,
      'optimized': sms2fuzzysearchproteinOptimizedSpec,
    },
  },
  'sms2-ident-sim-call': {
    'compute': {
      'original': sms2identsimOriginalSpec,
      'original.modular': sms2identsimOriginalSpec,
      'closure': sms2identsimProcessedSpec,
      'closure.modular': sms2identsimProcessedSpec,
      'preprocessed': sms2identsimProcessedSpec,
      'preprocessed.modular': sms2identsimProcessedSpec,
      'instrumented': sms2identsimProcessedSpec,
      'transformed': sms2identsimProcessedSpec,
      'callenclose': sms2identsimProcessedSpec,
      'calltransform': sms2identsimProcessedSpec,
      'optimized': sms2identsimOptimizedSpec,
    },
  },
  'sms2-ident-sim-get': {
    'compute': {
      'original': sms2identsimOriginalSpec,
      'original.modular': sms2identsimOriginalSpec,
      'closure': sms2identsimProcessedSpec,
      'closure.modular': sms2identsimProcessedSpec,
      'preprocessed': sms2identsimProcessedSpec,
      'preprocessed.modular': sms2identsimProcessedSpec,
      'instrumented': sms2identsimProcessedSpec,
      'transformed': sms2identsimProcessedSpec,
      'callenclose': sms2identsimProcessedSpec,
      'calltransform': sms2identsimProcessedSpec,
      'optimized': sms2identsimOptimizedSpec,
    },
  },
  'sms2-multi-rev-trans-call': {
    'compute': {
      'original': sms2multirevtransOriginalSpec,
      'original.modular': sms2multirevtransOriginalSpec,
      'closure': sms2multirevtransProcessedSpec,
      'closure.modular': sms2multirevtransProcessedSpec,
      'preprocessed': sms2multirevtransProcessedSpec,
      'preprocessed.modular': sms2multirevtransProcessedSpec,
      'instrumented': sms2multirevtransProcessedSpec,
      'transformed': sms2multirevtransProcessedSpec,
      'callenclose': sms2multirevtransProcessedSpec,
      'calltransform': sms2multirevtransProcessedSpec,
      'optimized': sms2multirevtransOptimizedSpec,
    },
  },
  'sms2-multi-rev-trans-get': {
    'compute': {
      'original': sms2multirevtransOriginalSpec,
      'original.modular': sms2multirevtransOriginalSpec,
      'closure': sms2multirevtransProcessedSpec,
      'closure.modular': sms2multirevtransProcessedSpec,
      'preprocessed': sms2multirevtransProcessedSpec,
      'preprocessed.modular': sms2multirevtransProcessedSpec,
      'instrumented': sms2multirevtransProcessedSpec,
      'transformed': sms2multirevtransProcessedSpec,
      'callenclose': sms2multirevtransProcessedSpec,
      'calltransform': sms2multirevtransProcessedSpec,
      'optimized': sms2multirevtransOptimizedSpec,
    },
  },
  'sms2-mutate-for-digest-call': {
    'compute': {
      'original': sms2mutatefordigestOriginalSpec,
      'original.modular': sms2mutatefordigestOriginalSpec,
      'closure': sms2mutatefordigestProcessedSpec,
      'closure.modular': sms2mutatefordigestProcessedSpec,
      'preprocessed': sms2mutatefordigestProcessedSpec,
      'preprocessed.modular': sms2mutatefordigestProcessedSpec,
      'instrumented': sms2mutatefordigestProcessedSpec,
      'transformed': sms2mutatefordigestProcessedSpec,
      'callenclose': sms2mutatefordigestProcessedSpec,
      'calltransform': sms2mutatefordigestProcessedSpec,
      'optimized': sms2mutatefordigestOptimizedSpec,
    },
  },
  'sms2-mutate-for-digest-get': {
    'compute': {
      'original': sms2mutatefordigestOriginalSpec,
      'original.modular': sms2mutatefordigestOriginalSpec,
      'closure': sms2mutatefordigestProcessedSpec,
      'closure.modular': sms2mutatefordigestProcessedSpec,
      'preprocessed': sms2mutatefordigestProcessedSpec,
      'preprocessed.modular': sms2mutatefordigestProcessedSpec,
      'instrumented': sms2mutatefordigestProcessedSpec,
      'transformed': sms2mutatefordigestProcessedSpec,
      'callenclose': sms2mutatefordigestProcessedSpec,
      'calltransform': sms2mutatefordigestProcessedSpec,
      'optimized': sms2mutatefordigestOptimizedSpec,
    },
  },
  'sms2-orf-find-call': {
    'compute': {
      'original': sms2orffindOriginalSpec,
      'original.modular': sms2orffindOriginalSpec,
      'closure': sms2orffindProcessedSpec,
      'closure.modular': sms2orffindProcessedSpec,
      'preprocessed': sms2orffindProcessedSpec,
      'preprocessed.modular': sms2orffindProcessedSpec,
      'instrumented': sms2orffindProcessedSpec,
      'transformed': sms2orffindProcessedSpec,
      'callenclose': sms2orffindProcessedSpec,
      'calltransform': sms2orffindProcessedSpec,
      'optimized': sms2orffindOptimizedSpec,
    },
  },
  'sms2-orf-find-get': {
    'compute': {
      'original': sms2orffindOriginalSpec,
      'original.modular': sms2orffindOriginalSpec,
      'closure': sms2orffindProcessedSpec,
      'closure.modular': sms2orffindProcessedSpec,
      'preprocessed': sms2orffindProcessedSpec,
      'preprocessed.modular': sms2orffindProcessedSpec,
      'instrumented': sms2orffindProcessedSpec,
      'transformed': sms2orffindProcessedSpec,
      'callenclose': sms2orffindProcessedSpec,
      'calltransform': sms2orffindProcessedSpec,
      'optimized': sms2orffindOptimizedSpec,
    },
  },
  'sms2-pairwise-align-codons-call': {
    'compute': {
      'original': sms2pairwisealigncodonsOriginalSpec,
      'original.modular': sms2pairwisealigncodonsOriginalSpec,
      'closure': sms2pairwisealigncodonsProcessedSpec,
      'closure.modular': sms2pairwisealigncodonsProcessedSpec,
      'preprocessed': sms2pairwisealigncodonsProcessedSpec,
      'preprocessed.modular': sms2pairwisealigncodonsProcessedSpec,
      'instrumented': sms2pairwisealigncodonsProcessedSpec,
      'transformed': sms2pairwisealigncodonsProcessedSpec,
      'callenclose': sms2pairwisealigncodonsProcessedSpec,
      'calltransform': sms2pairwisealigncodonsProcessedSpec,
      'optimized': sms2pairwisealigncodonsOptimizedSpec,
    },
  },
  'sms2-pairwise-align-codons-get': {
    'compute': {
      'original': sms2pairwisealigncodonsOriginalSpec,
      'original.modular': sms2pairwisealigncodonsOriginalSpec,
      'closure': sms2pairwisealigncodonsProcessedSpec,
      'closure.modular': sms2pairwisealigncodonsProcessedSpec,
      'preprocessed': sms2pairwisealigncodonsProcessedSpec,
      'preprocessed.modular': sms2pairwisealigncodonsProcessedSpec,
      'instrumented': sms2pairwisealigncodonsProcessedSpec,
      'transformed': sms2pairwisealigncodonsProcessedSpec,
      'callenclose': sms2pairwisealigncodonsProcessedSpec,
      'calltransform': sms2pairwisealigncodonsProcessedSpec,
      'optimized': sms2pairwisealigncodonsOptimizedSpec,
    },
  },
  'sms2-pairwise-align-dna-call': {
    'compute': {
      'original': sms2pairwisealigndnaOriginalSpec,
      'original.modular': sms2pairwisealigndnaOriginalSpec,
      'closure': sms2pairwisealigndnaProcessedSpec,
      'closure.modular': sms2pairwisealigndnaProcessedSpec,
      'preprocessed': sms2pairwisealigndnaProcessedSpec,
      'preprocessed.modular': sms2pairwisealigndnaProcessedSpec,
      'instrumented': sms2pairwisealigndnaProcessedSpec,
      'transformed': sms2pairwisealigndnaProcessedSpec,
      'callenclose': sms2pairwisealigndnaProcessedSpec,
      'calltransform': sms2pairwisealigndnaProcessedSpec,
      'optimized': sms2pairwisealigndnaOptimizedSpec,
    },
  },
  'sms2-pairwise-align-dna-get': {
    'compute': {
      'original': sms2pairwisealigndnaOriginalSpec,
      'original.modular': sms2pairwisealigndnaOriginalSpec,
      'closure': sms2pairwisealigndnaProcessedSpec,
      'closure.modular': sms2pairwisealigndnaProcessedSpec,
      'preprocessed': sms2pairwisealigndnaProcessedSpec,
      'preprocessed.modular': sms2pairwisealigndnaProcessedSpec,
      'instrumented': sms2pairwisealigndnaProcessedSpec,
      'transformed': sms2pairwisealigndnaProcessedSpec,
      'callenclose': sms2pairwisealigndnaProcessedSpec,
      'calltransform': sms2pairwisealigndnaProcessedSpec,
      'optimized': sms2pairwisealigndnaOptimizedSpec,
    },
  },
  'sms2-pairwise-align-protein-call': {
    'compute': {
      'original': sms2pairwisealignproteinOriginalSpec,
      'original.modular': sms2pairwisealignproteinOriginalSpec,
      'closure': sms2pairwisealignproteinProcessedSpec,
      'closure.modular': sms2pairwisealignproteinProcessedSpec,
      'preprocessed': sms2pairwisealignproteinProcessedSpec,
      'preprocessed.modular': sms2pairwisealignproteinProcessedSpec,
      'instrumented': sms2pairwisealignproteinProcessedSpec,
      'transformed': sms2pairwisealignproteinProcessedSpec,
      'callenclose': sms2pairwisealignproteinProcessedSpec,
      'calltransform': sms2pairwisealignproteinProcessedSpec,
      'optimized': sms2pairwisealignproteinOptimizedSpec,
    },
  },
  'sms2-pairwise-align-protein-get': {
    'compute': {
      'original': sms2pairwisealignproteinOriginalSpec,
      'original.modular': sms2pairwisealignproteinOriginalSpec,
      'closure': sms2pairwisealignproteinProcessedSpec,
      'closure.modular': sms2pairwisealignproteinProcessedSpec,
      'preprocessed': sms2pairwisealignproteinProcessedSpec,
      'preprocessed.modular': sms2pairwisealignproteinProcessedSpec,
      'instrumented': sms2pairwisealignproteinProcessedSpec,
      'transformed': sms2pairwisealignproteinProcessedSpec,
      'callenclose': sms2pairwisealignproteinProcessedSpec,
      'calltransform': sms2pairwisealignproteinProcessedSpec,
      'optimized': sms2pairwisealignproteinOptimizedSpec,
    },
  },
  'sms2-pcr-primer-stats-call': {
    'compute': {
      'original': sms2pcrprimerstatsOriginalSpec,
      'original.modular': sms2pcrprimerstatsOriginalSpec,
      'closure': sms2pcrprimerstatsProcessedSpec,
      'closure.modular': sms2pcrprimerstatsProcessedSpec,
      'preprocessed': sms2pcrprimerstatsProcessedSpec,
      'preprocessed.modular': sms2pcrprimerstatsProcessedSpec,
      'instrumented': sms2pcrprimerstatsProcessedSpec,
      'transformed': sms2pcrprimerstatsProcessedSpec,
      'callenclose': sms2pcrprimerstatsProcessedSpec,
      'calltransform': sms2pcrprimerstatsProcessedSpec,
      'optimized': sms2pcrprimerstatsOptimizedSpec,
    },
  },
  'sms2-pcr-primer-stats-get': {
    'compute': {
      'original': sms2pcrprimerstatsOriginalSpec,
      'original.modular': sms2pcrprimerstatsOriginalSpec,
      'closure': sms2pcrprimerstatsProcessedSpec,
      'closure.modular': sms2pcrprimerstatsProcessedSpec,
      'preprocessed': sms2pcrprimerstatsProcessedSpec,
      'preprocessed.modular': sms2pcrprimerstatsProcessedSpec,
      'instrumented': sms2pcrprimerstatsProcessedSpec,
      'transformed': sms2pcrprimerstatsProcessedSpec,
      'callenclose': sms2pcrprimerstatsProcessedSpec,
      'calltransform': sms2pcrprimerstatsProcessedSpec,
      'optimized': sms2pcrprimerstatsOptimizedSpec,
    },
  },
  'sms2-pcr-products-call': {
    'compute': {
      'original': sms2pcrproductsOriginalSpec,
      'original.modular': sms2pcrproductsOriginalSpec,
      'closure': sms2pcrproductsProcessedSpec,
      'closure.modular': sms2pcrproductsProcessedSpec,
      'preprocessed': sms2pcrproductsProcessedSpec,
      'preprocessed.modular': sms2pcrproductsProcessedSpec,
      'instrumented': sms2pcrproductsProcessedSpec,
      'transformed': sms2pcrproductsProcessedSpec,
      'callenclose': sms2pcrproductsProcessedSpec,
      'calltransform': sms2pcrproductsProcessedSpec,
      'optimized': sms2pcrproductsOptimizedSpec,
    },
  },
  'sms2-pcr-products-get': {
    'compute': {
      'original': sms2pcrproductsOriginalSpec,
      'original.modular': sms2pcrproductsOriginalSpec,
      'closure': sms2pcrproductsProcessedSpec,
      'closure.modular': sms2pcrproductsProcessedSpec,
      'preprocessed': sms2pcrproductsProcessedSpec,
      'preprocessed.modular': sms2pcrproductsProcessedSpec,
      'instrumented': sms2pcrproductsProcessedSpec,
      'transformed': sms2pcrproductsProcessedSpec,
      'callenclose': sms2pcrproductsProcessedSpec,
      'calltransform': sms2pcrproductsProcessedSpec,
      'optimized': sms2pcrproductsOptimizedSpec,
    },
  },
  'sms2-protein-gravy-call': {
    'compute': {
      'original': sms2proteingravyOriginalSpec,
      'original.modular': sms2proteingravyOriginalSpec,
      'closure': sms2proteingravyProcessedSpec,
      'closure.modular': sms2proteingravyProcessedSpec,
      'preprocessed': sms2proteingravyProcessedSpec,
      'preprocessed.modular': sms2proteingravyProcessedSpec,
      'instrumented': sms2proteingravyProcessedSpec,
      'transformed': sms2proteingravyProcessedSpec,
      'callenclose': sms2proteingravyProcessedSpec,
      'calltransform': sms2proteingravyProcessedSpec,
      'optimized': sms2proteingravyOptimizedSpec,
    },
  },
  'sms2-protein-gravy-get': {
    'compute': {
      'original': sms2proteingravyOriginalSpec,
      'original.modular': sms2proteingravyOriginalSpec,
      'closure': sms2proteingravyProcessedSpec,
      'closure.modular': sms2proteingravyProcessedSpec,
      'preprocessed': sms2proteingravyProcessedSpec,
      'preprocessed.modular': sms2proteingravyProcessedSpec,
      'instrumented': sms2proteingravyProcessedSpec,
      'transformed': sms2proteingravyProcessedSpec,
      'callenclose': sms2proteingravyProcessedSpec,
      'calltransform': sms2proteingravyProcessedSpec,
      'optimized': sms2proteingravyOptimizedSpec,
    },
  },
  'sms2-protein-iep-call': {
    'compute': {
      'original': sms2proteiniepOriginalSpec,
      'original.modular': sms2proteiniepOriginalSpec,
      'closure': sms2proteiniepProcessedSpec,
      'closure.modular': sms2proteiniepProcessedSpec,
      'preprocessed': sms2proteiniepProcessedSpec,
      'preprocessed.modular': sms2proteiniepProcessedSpec,
      'instrumented': sms2proteiniepProcessedSpec,
      'transformed': sms2proteiniepProcessedSpec,
      'callenclose': sms2proteiniepProcessedSpec,
      'calltransform': sms2proteiniepProcessedSpec,
      'optimized': sms2proteiniepOptimizedSpec,
    },
  },
  'sms2-protein-iep-get': {
    'compute': {
      'original': sms2proteiniepOriginalSpec,
      'original.modular': sms2proteiniepOriginalSpec,
      'closure': sms2proteiniepProcessedSpec,
      'closure.modular': sms2proteiniepProcessedSpec,
      'preprocessed': sms2proteiniepProcessedSpec,
      'preprocessed.modular': sms2proteiniepProcessedSpec,
      'instrumented': sms2proteiniepProcessedSpec,
      'transformed': sms2proteiniepProcessedSpec,
      'callenclose': sms2proteiniepProcessedSpec,
      'calltransform': sms2proteiniepProcessedSpec,
      'optimized': sms2proteiniepOptimizedSpec,
    },
  },
  'sms2-protein-mw-call': {
    'compute': {
      'original': sms2proteinmwOriginalSpec,
      'original.modular': sms2proteinmwOriginalSpec,
      'closure': sms2proteinmwProcessedSpec,
      'closure.modular': sms2proteinmwProcessedSpec,
      'preprocessed': sms2proteinmwProcessedSpec,
      'preprocessed.modular': sms2proteinmwProcessedSpec,
      'instrumented': sms2proteinmwProcessedSpec,
      'transformed': sms2proteinmwProcessedSpec,
      'callenclose': sms2proteinmwProcessedSpec,
      'calltransform': sms2proteinmwProcessedSpec,
      'optimized': sms2proteinmwOptimizedSpec,
    },
  },
  'sms2-protein-mw-get': {
    'compute': {
      'original': sms2proteinmwOriginalSpec,
      'original.modular': sms2proteinmwOriginalSpec,
      'closure': sms2proteinmwProcessedSpec,
      'closure.modular': sms2proteinmwProcessedSpec,
      'preprocessed': sms2proteinmwProcessedSpec,
      'preprocessed.modular': sms2proteinmwProcessedSpec,
      'instrumented': sms2proteinmwProcessedSpec,
      'transformed': sms2proteinmwProcessedSpec,
      'callenclose': sms2proteinmwProcessedSpec,
      'calltransform': sms2proteinmwProcessedSpec,
      'optimized': sms2proteinmwOptimizedSpec,
    },
  },
  'sms2-protein-pattern-call': {
    'compute': {
      'original': sms2proteinpatternOriginalSpec,
      'original.modular': sms2proteinpatternOriginalSpec,
      'closure': sms2proteinpatternProcessedSpec,
      'closure.modular': sms2proteinpatternProcessedSpec,
      'preprocessed': sms2proteinpatternProcessedSpec,
      'preprocessed.modular': sms2proteinpatternProcessedSpec,
      'instrumented': sms2proteinpatternProcessedSpec,
      'transformed': sms2proteinpatternProcessedSpec,
      'callenclose': sms2proteinpatternProcessedSpec,
      'calltransform': sms2proteinpatternProcessedSpec,
      'optimized': sms2proteinpatternOptimizedSpec,
    },
  },
  'sms2-protein-pattern-get': {
    'compute': {
      'original': sms2proteinpatternOriginalSpec,
      'original.modular': sms2proteinpatternOriginalSpec,
      'closure': sms2proteinpatternProcessedSpec,
      'closure.modular': sms2proteinpatternProcessedSpec,
      'preprocessed': sms2proteinpatternProcessedSpec,
      'preprocessed.modular': sms2proteinpatternProcessedSpec,
      'instrumented': sms2proteinpatternProcessedSpec,
      'transformed': sms2proteinpatternProcessedSpec,
      'callenclose': sms2proteinpatternProcessedSpec,
      'calltransform': sms2proteinpatternProcessedSpec,
      'optimized': sms2proteinpatternOptimizedSpec,
    },
  },
  'sms2-protein-stats-call': {
    'compute': {
      'original': sms2proteinstatsOriginalSpec,
      'original.modular': sms2proteinstatsOriginalSpec,
      'closure': sms2proteinstatsClosureSpec,
      'closure.modular': sms2proteinstatsClosureSpec,
      'preprocessed': sms2proteinstatsProcessedSpec,
      'preprocessed.modular': sms2proteinstatsProcessedSpec,
      'instrumented': sms2proteinstatsProcessedSpec,
      'transformed': sms2proteinstatsProcessedSpec,
      'callenclose': sms2proteinstatsProcessedSpec,
      'calltransform': sms2proteinstatsProcessedSpec,
      'optimized': sms2proteinstatsOptimizedSpec,
    },
  },
  'sms2-protein-stats-get': {
    'compute': {
      'original': sms2proteinstatsOriginalSpec,
      'original.modular': sms2proteinstatsOriginalSpec,
      'closure': sms2proteinstatsClosureSpec,
      'closure.modular': sms2proteinstatsClosureSpec,
      'preprocessed': sms2proteinstatsProcessedSpec,
      'preprocessed.modular': sms2proteinstatsProcessedSpec,
      'instrumented': sms2proteinstatsProcessedSpec,
      'transformed': sms2proteinstatsProcessedSpec,
      'callenclose': sms2proteinstatsProcessedSpec,
      'calltransform': sms2proteinstatsProcessedSpec,
      'optimized': sms2proteinstatsOptimizedSpec,
    },
  },
  'sms2-rest-digest-call': {
    'compute': {
      'original': sms2restdigestOriginalSpec,
      'original.modular': sms2restdigestOriginalSpec,
      'closure': sms2restdigestProcessedSpec,
      'closure.modular': sms2restdigestProcessedSpec,
      'preprocessed': sms2restdigestProcessedSpec,
      'preprocessed.modular': sms2restdigestProcessedSpec,
      'instrumented': sms2restdigestProcessedSpec,
      'transformed': sms2restdigestProcessedSpec,
      'callenclose': sms2restdigestProcessedSpec,
      'calltransform': sms2restdigestProcessedSpec,
      'optimized': sms2restdigestOptimizedSpec,
    },
  },
  'sms2-rest-digest-get': {
    'compute': {
      'original': sms2restdigestOriginalSpec,
      'original.modular': sms2restdigestOriginalSpec,
      'closure': sms2restdigestProcessedSpec,
      'closure.modular': sms2restdigestProcessedSpec,
      'preprocessed': sms2restdigestProcessedSpec,
      'preprocessed.modular': sms2restdigestProcessedSpec,
      'instrumented': sms2restdigestProcessedSpec,
      'transformed': sms2restdigestProcessedSpec,
      'callenclose': sms2restdigestProcessedSpec,
      'calltransform': sms2restdigestProcessedSpec,
      'optimized': sms2restdigestOptimizedSpec,
    },
  },
  'sms2-rest-summary-call': {
    'compute': {
      'original': sms2restsummaryOriginalSpec,
      'original.modular': sms2restsummaryOriginalSpec,
      'closure': sms2restsummaryClosureSpec,
      'closure.modular': sms2restsummaryClosureSpec,
      'preprocessed': sms2restsummaryProcessedSpec,
      'preprocessed.modular': sms2restsummaryProcessedSpec,
      'instrumented': sms2restsummaryProcessedSpec,
      'transformed': sms2restsummaryProcessedSpec,
      'callenclose': sms2restsummaryProcessedSpec,
      'calltransform': sms2restsummaryProcessedSpec,
      'optimized': sms2restsummaryOptimizedSpec,
    },
  },
  'sms2-rest-summary-get': {
    'compute': {
      'original': sms2restsummaryOriginalSpec,
      'original.modular': sms2restsummaryOriginalSpec,
      'closure': sms2restsummaryClosureSpec,
      'closure.modular': sms2restsummaryClosureSpec,
      'preprocessed': sms2restsummaryProcessedSpec,
      'preprocessed.modular': sms2restsummaryProcessedSpec,
      'instrumented': sms2restsummaryProcessedSpec,
      'transformed': sms2restsummaryProcessedSpec,
      'callenclose': sms2restsummaryProcessedSpec,
      'calltransform': sms2restsummaryProcessedSpec,
      'optimized': sms2restsummaryOptimizedSpec,
    },
  },
  'sms2-rev-trans-call': {
    'compute': {
      'original': sms2revtransOriginalSpec,
      'original.modular': sms2revtransOriginalSpec,
      'closure': sms2revtransProcessedSpec,
      'closure.modular': sms2revtransProcessedSpec,
      'preprocessed': sms2revtransProcessedSpec,
      'preprocessed.modular': sms2revtransProcessedSpec,
      'instrumented': sms2revtransProcessedSpec,
      'transformed': sms2revtransProcessedSpec,
      'callenclose': sms2revtransProcessedSpec,
      'calltransform': sms2revtransProcessedSpec,
      'optimized': sms2revtransOptimizedSpec,
    },
  },
  'sms2-rev-trans-get': {
    'compute': {
      'original': sms2revtransOriginalSpec,
      'original.modular': sms2revtransOriginalSpec,
      'closure': sms2revtransProcessedSpec,
      'closure.modular': sms2revtransProcessedSpec,
      'preprocessed': sms2revtransProcessedSpec,
      'preprocessed.modular': sms2revtransProcessedSpec,
      'instrumented': sms2revtransProcessedSpec,
      'transformed': sms2revtransProcessedSpec,
      'callenclose': sms2revtransProcessedSpec,
      'calltransform': sms2revtransProcessedSpec,
      'optimized': sms2revtransOptimizedSpec,
    },
  },
  'sms2-translate-call': {
    'compute': {
      'original': sms2translateOriginalSpec,
      'original.modular': sms2translateOriginalSpec,
      'closure': sms2translateProcessedSpec,
      'closure.modular': sms2translateProcessedSpec,
      'preprocessed': sms2translateProcessedSpec,
      'preprocessed.modular': sms2translateProcessedSpec,
      'instrumented': sms2translateProcessedSpec,
      'transformed': sms2translateProcessedSpec,
      'callenclose': sms2translateProcessedSpec,
      'calltransform': sms2translateProcessedSpec,
      'optimized': sms2translateOptimizedSpec,
    },
  },
  'sms2-translate-get': {
    'compute': {
      'original': sms2translateOriginalSpec,
      'original.modular': sms2translateOriginalSpec,
      'closure': sms2translateProcessedSpec,
      'closure.modular': sms2translateProcessedSpec,
      'preprocessed': sms2translateProcessedSpec,
      'preprocessed.modular': sms2translateProcessedSpec,
      'instrumented': sms2translateProcessedSpec,
      'transformed': sms2translateProcessedSpec,
      'callenclose': sms2translateProcessedSpec,
      'calltransform': sms2translateProcessedSpec,
      'optimized': sms2translateOptimizedSpec,
    },
  },
  'sms2-color-align-cons-call': {
    'compute': {
      'original': sms2coloralignconsOriginalSpec,
      'original.modular': sms2coloralignconsOriginalSpec,
      'closure': sms2coloralignconsProcessedSpec,
      'closure.modular': sms2coloralignconsProcessedSpec,
      'preprocessed': sms2coloralignconsProcessedSpec,
      'preprocessed.modular': sms2coloralignconsProcessedSpec,
      'instrumented': sms2coloralignconsProcessedSpec,
      'transformed': sms2coloralignconsProcessedSpec,
      'callenclose': sms2coloralignconsProcessedSpec,
      'calltransform': sms2coloralignconsProcessedSpec,
      'optimized': sms2coloralignconsOptimizedSpec,
    },
  },
  'sms2-color-align-cons-get': {
    'compute': {
      'original': sms2coloralignconsOriginalSpec,
      'original.modular': sms2coloralignconsOriginalSpec,
      'closure': sms2coloralignconsProcessedSpec,
      'closure.modular': sms2coloralignconsProcessedSpec,
      'preprocessed': sms2coloralignconsProcessedSpec,
      'preprocessed.modular': sms2coloralignconsProcessedSpec,
      'instrumented': sms2coloralignconsProcessedSpec,
      'transformed': sms2coloralignconsProcessedSpec,
      'callenclose': sms2coloralignconsProcessedSpec,
      'calltransform': sms2coloralignconsProcessedSpec,
      'optimized': sms2coloralignconsOptimizedSpec,
    },
  },
  'sms2-color-align-prop-call': {
    'compute': {
      'original': sms2coloralignpropOriginalSpec,
      'original.modular': sms2coloralignpropOriginalSpec,
      'closure': sms2coloralignpropProcessedSpec,
      'closure.modular': sms2coloralignpropProcessedSpec,
      'preprocessed': sms2coloralignpropProcessedSpec,
      'preprocessed.modular': sms2coloralignpropProcessedSpec,
      'instrumented': sms2coloralignpropProcessedSpec,
      'transformed': sms2coloralignpropProcessedSpec,
      'callenclose': sms2coloralignpropProcessedSpec,
      'calltransform': sms2coloralignpropProcessedSpec,
      'optimized': sms2coloralignpropOptimizedSpec,
    },
  },
  'sms2-color-align-prop-get': {
    'compute': {
      'original': sms2coloralignpropOriginalSpec,
      'original.modular': sms2coloralignpropOriginalSpec,
      'closure': sms2coloralignpropProcessedSpec,
      'closure.modular': sms2coloralignpropProcessedSpec,
      'preprocessed': sms2coloralignpropProcessedSpec,
      'preprocessed.modular': sms2coloralignpropProcessedSpec,
      'instrumented': sms2coloralignpropProcessedSpec,
      'transformed': sms2coloralignpropProcessedSpec,
      'callenclose': sms2coloralignpropProcessedSpec,
      'calltransform': sms2coloralignpropProcessedSpec,
      'optimized': sms2coloralignpropOptimizedSpec,
    },
  },
  'sms2-combine-fasta-call': {
    'compute': {
      'original': sms2combinefastaOriginalSpec,
      'original.modular': sms2combinefastaOriginalSpec,
      'closure': sms2combinefastaClosureSpec,
      'closure.modular': sms2combinefastaClosureSpec,
      'preprocessed': sms2combinefastaProcessedSpec,
      'preprocessed.modular': sms2combinefastaProcessedSpec,
      'instrumented': sms2combinefastaProcessedSpec,
      'transformed': sms2combinefastaProcessedSpec,
      'callenclose': sms2combinefastaProcessedSpec,
      'calltransform': sms2combinefastaProcessedSpec,
      'optimized': sms2combinefastaOptimizedSpec,
    },
  },
  'sms2-combine-fasta-get': {
    'compute': {
      'original': sms2combinefastaOriginalSpec,
      'original.modular': sms2combinefastaOriginalSpec,
      'closure': sms2combinefastaClosureSpec,
      'closure.modular': sms2combinefastaClosureSpec,
      'preprocessed': sms2combinefastaProcessedSpec,
      'preprocessed.modular': sms2combinefastaProcessedSpec,
      'instrumented': sms2combinefastaProcessedSpec,
      'transformed': sms2combinefastaProcessedSpec,
      'callenclose': sms2combinefastaProcessedSpec,
      'calltransform': sms2combinefastaProcessedSpec,
      'optimized': sms2combinefastaOptimizedSpec,
    },
  },
  'sms2-embl-fasta-call': {
    'compute': {
      'original': sms2emblfastaOriginalSpec,
      'original.modular': sms2emblfastaOriginalSpec,
      'closure': sms2emblfastaProcessedSpec,
      'closure.modular': sms2emblfastaProcessedSpec,
      'preprocessed': sms2emblfastaProcessedSpec,
      'preprocessed.modular': sms2emblfastaProcessedSpec,
      'instrumented': sms2emblfastaProcessedSpec,
      'transformed': sms2emblfastaProcessedSpec,
      'callenclose': sms2emblfastaProcessedSpec,
      'calltransform': sms2emblfastaProcessedSpec,
      'optimized': sms2emblfastaOptimizedSpec,
    },
  },
  'sms2-embl-fasta-get': {
    'compute': {
      'original': sms2emblfastaOriginalSpec,
      'original.modular': sms2emblfastaOriginalSpec,
      'closure': sms2emblfastaProcessedSpec,
      'closure.modular': sms2emblfastaProcessedSpec,
      'preprocessed': sms2emblfastaProcessedSpec,
      'preprocessed.modular': sms2emblfastaProcessedSpec,
      'instrumented': sms2emblfastaProcessedSpec,
      'transformed': sms2emblfastaProcessedSpec,
      'callenclose': sms2emblfastaProcessedSpec,
      'calltransform': sms2emblfastaProcessedSpec,
      'optimized': sms2emblfastaOptimizedSpec,
    },
  },
  'sms2-embl-feat-call': {
    'compute': {
      'original': sms2emblfeatOriginalSpec,
      'original.modular': sms2emblfeatOriginalSpec,
      'closure': sms2emblfeatProcessedSpec,
      'closure.modular': sms2emblfeatProcessedSpec,
      'preprocessed': sms2emblfeatProcessedSpec,
      'preprocessed.modular': sms2emblfeatProcessedSpec,
      'instrumented': sms2emblfeatProcessedSpec,
      'transformed': sms2emblfeatProcessedSpec,
      'callenclose': sms2emblfeatProcessedSpec,
      'calltransform': sms2emblfeatProcessedSpec,
      'optimized': sms2emblfeatOptimizedSpec,
    },
  },
  'sms2-embl-feat-get': {
    'compute': {
      'original': sms2emblfeatOriginalSpec,
      'original.modular': sms2emblfeatOriginalSpec,
      'closure': sms2emblfeatProcessedSpec,
      'closure.modular': sms2emblfeatProcessedSpec,
      'preprocessed': sms2emblfeatProcessedSpec,
      'preprocessed.modular': sms2emblfeatProcessedSpec,
      'instrumented': sms2emblfeatProcessedSpec,
      'transformed': sms2emblfeatProcessedSpec,
      'callenclose': sms2emblfeatProcessedSpec,
      'calltransform': sms2emblfeatProcessedSpec,
      'optimized': sms2emblfeatOptimizedSpec,
    },
  },
  'sms2-embl-trans-call': {
    'compute': {
      'original': sms2embltransOriginalSpec,
      'original.modular': sms2embltransOriginalSpec,
      'closure': sms2embltransProcessedSpec,
      'closure.modular': sms2embltransProcessedSpec,
      'preprocessed': sms2embltransProcessedSpec,
      'preprocessed.modular': sms2embltransProcessedSpec,
      'instrumented': sms2embltransProcessedSpec,
      'transformed': sms2embltransProcessedSpec,
      'callenclose': sms2embltransProcessedSpec,
      'calltransform': sms2embltransProcessedSpec,
      'optimized': sms2embltransOptimizedSpec,
    },
  },
  'sms2-embl-trans-get': {
    'compute': {
      'original': sms2embltransOriginalSpec,
      'original.modular': sms2embltransOriginalSpec,
      'closure': sms2embltransProcessedSpec,
      'closure.modular': sms2embltransProcessedSpec,
      'preprocessed': sms2embltransProcessedSpec,
      'preprocessed.modular': sms2embltransProcessedSpec,
      'instrumented': sms2embltransProcessedSpec,
      'transformed': sms2embltransProcessedSpec,
      'callenclose': sms2embltransProcessedSpec,
      'calltransform': sms2embltransProcessedSpec,
      'optimized': sms2embltransOptimizedSpec,
    },
  },
  'sms2-filter-dna-call': {
    'compute': {
      'original': sms2filterdnaOriginalSpec,
      'original.modular': sms2filterdnaOriginalSpec,
      'closure': sms2filterdnaClosureSpec,
      'closure.modular': sms2filterdnaClosureSpec,
      'preprocessed': sms2filterdnaProcessedSpec,
      'preprocessed.modular': sms2filterdnaProcessedSpec,
      'instrumented': sms2filterdnaProcessedSpec,
      'transformed': sms2filterdnaProcessedSpec,
      'callenclose': sms2filterdnaProcessedSpec,
      'calltransform': sms2filterdnaProcessedSpec,
      'optimized': sms2filterdnaOptimizedSpec,
    },
  },
  'sms2-filter-dna-get': {
    'compute': {
      'original': sms2filterdnaOriginalSpec,
      'original.modular': sms2filterdnaOriginalSpec,
      'closure': sms2filterdnaClosureSpec,
      'closure.modular': sms2filterdnaClosureSpec,
      'preprocessed': sms2filterdnaProcessedSpec,
      'preprocessed.modular': sms2filterdnaProcessedSpec,
      'instrumented': sms2filterdnaProcessedSpec,
      'transformed': sms2filterdnaProcessedSpec,
      'callenclose': sms2filterdnaProcessedSpec,
      'calltransform': sms2filterdnaProcessedSpec,
      'optimized': sms2filterdnaOptimizedSpec,
    },
  },
  'sms2-filter-protein-call': {
    'compute': {
      'original': sms2filterproteinOriginalSpec,
      'original.modular': sms2filterproteinOriginalSpec,
      'closure': sms2filterproteinClosureSpec,
      'closure.modular': sms2filterproteinClosureSpec,
      'preprocessed': sms2filterproteinProcessedSpec,
      'preprocessed.modular': sms2filterproteinProcessedSpec,
      'instrumented': sms2filterproteinProcessedSpec,
      'transformed': sms2filterproteinProcessedSpec,
      'callenclose': sms2filterproteinProcessedSpec,
      'calltransform': sms2filterproteinProcessedSpec,
      'optimized': sms2filterproteinOptimizedSpec,
    },
  },
  'sms2-filter-protein-get': {
    'compute': {
      'original': sms2filterproteinOriginalSpec,
      'original.modular': sms2filterproteinOriginalSpec,
      'closure': sms2filterproteinClosureSpec,
      'closure.modular': sms2filterproteinClosureSpec,
      'preprocessed': sms2filterproteinProcessedSpec,
      'preprocessed.modular': sms2filterproteinProcessedSpec,
      'instrumented': sms2filterproteinProcessedSpec,
      'transformed': sms2filterproteinProcessedSpec,
      'callenclose': sms2filterproteinProcessedSpec,
      'calltransform': sms2filterproteinProcessedSpec,
      'optimized': sms2filterproteinOptimizedSpec,
    },
  },
  'sms2-genbank-fasta-call': {
    'compute': {
      'original': sms2genbankfastaOriginalSpec,
      'original.modular': sms2genbankfastaOriginalSpec,
      'closure': sms2genbankfastaProcessedSpec,
      'closure.modular': sms2genbankfastaProcessedSpec,
      'preprocessed': sms2genbankfastaProcessedSpec,
      'preprocessed.modular': sms2genbankfastaProcessedSpec,
      'instrumented': sms2genbankfastaProcessedSpec,
      'transformed': sms2genbankfastaProcessedSpec,
      'callenclose': sms2genbankfastaProcessedSpec,
      'calltransform': sms2genbankfastaProcessedSpec,
      'optimized': sms2genbankfastaOptimizedSpec,
    },
  },
  'sms2-genbank-fasta-get': {
    'compute': {
      'original': sms2genbankfastaOriginalSpec,
      'original.modular': sms2genbankfastaOriginalSpec,
      'closure': sms2genbankfastaProcessedSpec,
      'closure.modular': sms2genbankfastaProcessedSpec,
      'preprocessed': sms2genbankfastaProcessedSpec,
      'preprocessed.modular': sms2genbankfastaProcessedSpec,
      'instrumented': sms2genbankfastaProcessedSpec,
      'transformed': sms2genbankfastaProcessedSpec,
      'callenclose': sms2genbankfastaProcessedSpec,
      'calltransform': sms2genbankfastaProcessedSpec,
      'optimized': sms2genbankfastaOptimizedSpec,
    },
  },
  'sms2-genbank-feat-call': {
    'compute': {
      'original': sms2genbankfeatOriginalSpec,
      'original.modular': sms2genbankfeatOriginalSpec,
      'closure': sms2genbankfeatProcessedSpec,
      'closure.modular': sms2genbankfeatProcessedSpec,
      'preprocessed': sms2genbankfeatProcessedSpec,
      'preprocessed.modular': sms2genbankfeatProcessedSpec,
      'instrumented': sms2genbankfeatProcessedSpec,
      'transformed': sms2genbankfeatProcessedSpec,
      'callenclose': sms2genbankfeatProcessedSpec,
      'calltransform': sms2genbankfeatProcessedSpec,
      'optimized': sms2genbankfeatOptimizedSpec,
    },
  },
  'sms2-genbank-feat-get': {
    'compute': {
      'original': sms2genbankfeatOriginalSpec,
      'original.modular': sms2genbankfeatOriginalSpec,
      'closure': sms2genbankfeatProcessedSpec,
      'closure.modular': sms2genbankfeatProcessedSpec,
      'preprocessed': sms2genbankfeatProcessedSpec,
      'preprocessed.modular': sms2genbankfeatProcessedSpec,
      'instrumented': sms2genbankfeatProcessedSpec,
      'transformed': sms2genbankfeatProcessedSpec,
      'callenclose': sms2genbankfeatProcessedSpec,
      'calltransform': sms2genbankfeatProcessedSpec,
      'optimized': sms2genbankfeatOptimizedSpec,
    },
  },
  'sms2-genbank-trans-call': {
    'compute': {
      'original': sms2genbanktransOriginalSpec,
      'original.modular': sms2genbanktransOriginalSpec,
      'closure': sms2genbanktransProcessedSpec,
      'closure.modular': sms2genbanktransProcessedSpec,
      'preprocessed': sms2genbanktransProcessedSpec,
      'preprocessed.modular': sms2genbanktransProcessedSpec,
      'instrumented': sms2genbanktransProcessedSpec,
      'transformed': sms2genbanktransProcessedSpec,
      'callenclose': sms2genbanktransProcessedSpec,
      'calltransform': sms2genbanktransProcessedSpec,
      'optimized': sms2genbanktransOptimizedSpec,
    },
  },
  'sms2-genbank-trans-get': {
    'compute': {
      'original': sms2genbanktransOriginalSpec,
      'original.modular': sms2genbanktransOriginalSpec,
      'closure': sms2genbanktransProcessedSpec,
      'closure.modular': sms2genbanktransProcessedSpec,
      'preprocessed': sms2genbanktransProcessedSpec,
      'preprocessed.modular': sms2genbanktransProcessedSpec,
      'instrumented': sms2genbanktransProcessedSpec,
      'transformed': sms2genbanktransProcessedSpec,
      'callenclose': sms2genbanktransProcessedSpec,
      'calltransform': sms2genbanktransProcessedSpec,
      'optimized': sms2genbanktransOptimizedSpec,
    },
  },
  'sms2-group-dna-call': {
    'compute': {
      'original': sms2groupdnaOriginalSpec,
      'original.modular': sms2groupdnaOriginalSpec,
      'closure': sms2groupdnaClosureSpec,
      'closure.modular': sms2groupdnaClosureSpec,
      'preprocessed': sms2groupdnaProcessedSpec,
      'preprocessed.modular': sms2groupdnaProcessedSpec,
      'instrumented': sms2groupdnaProcessedSpec,
      'transformed': sms2groupdnaProcessedSpec,
      'callenclose': sms2groupdnaProcessedSpec,
      'calltransform': sms2groupdnaProcessedSpec,
      'optimized': sms2groupdnaOptimizedSpec,
    },
  },
  'sms2-group-dna-get': {
    'compute': {
      'original': sms2groupdnaOriginalSpec,
      'original.modular': sms2groupdnaOriginalSpec,
      'closure': sms2groupdnaClosureSpec,
      'closure.modular': sms2groupdnaClosureSpec,
      'preprocessed': sms2groupdnaProcessedSpec,
      'preprocessed.modular': sms2groupdnaProcessedSpec,
      'instrumented': sms2groupdnaProcessedSpec,
      'transformed': sms2groupdnaProcessedSpec,
      'callenclose': sms2groupdnaProcessedSpec,
      'calltransform': sms2groupdnaProcessedSpec,
      'optimized': sms2groupdnaOptimizedSpec,
    },
  },
  'sms2-group-protein-call': {
    'compute': {
      'original': sms2groupproteinOriginalSpec,
      'original.modular': sms2groupproteinOriginalSpec,
      'closure': sms2groupproteinClosureSpec,
      'closure.modular': sms2groupproteinClosureSpec,
      'preprocessed': sms2groupproteinProcessedSpec,
      'preprocessed.modular': sms2groupproteinProcessedSpec,
      'instrumented': sms2groupproteinProcessedSpec,
      'transformed': sms2groupproteinProcessedSpec,
      'callenclose': sms2groupproteinProcessedSpec,
      'calltransform': sms2groupproteinProcessedSpec,
      'optimized': sms2groupproteinOptimizedSpec,
    },
  },
  'sms2-group-protein-get': {
    'compute': {
      'original': sms2groupproteinOriginalSpec,
      'original.modular': sms2groupproteinOriginalSpec,
      'closure': sms2groupproteinClosureSpec,
      'closure.modular': sms2groupproteinClosureSpec,
      'preprocessed': sms2groupproteinProcessedSpec,
      'preprocessed.modular': sms2groupproteinProcessedSpec,
      'instrumented': sms2groupproteinProcessedSpec,
      'transformed': sms2groupproteinProcessedSpec,
      'callenclose': sms2groupproteinProcessedSpec,
      'calltransform': sms2groupproteinProcessedSpec,
      'optimized': sms2groupproteinOptimizedSpec,
    },
  },
  'sms2-one-to-three-call': {
    'compute': {
      'original': sms2onetothreeOriginalSpec,
      'original.modular': sms2onetothreeOriginalSpec,
      'closure': sms2onetothreeProcessedSpec,
      'closure.modular': sms2onetothreeProcessedSpec,
      'preprocessed': sms2onetothreeProcessedSpec,
      'preprocessed.modular': sms2onetothreeProcessedSpec,
      'instrumented': sms2onetothreeProcessedSpec,
      'transformed': sms2onetothreeProcessedSpec,
      'callenclose': sms2onetothreeProcessedSpec,
      'calltransform': sms2onetothreeProcessedSpec,
      'optimized': sms2onetothreeOptimizedSpec,
    },
  },
  'sms2-one-to-three-get': {
    'compute': {
      'original': sms2onetothreeOriginalSpec,
      'original.modular': sms2onetothreeOriginalSpec,
      'closure': sms2onetothreeProcessedSpec,
      'closure.modular': sms2onetothreeProcessedSpec,
      'preprocessed': sms2onetothreeProcessedSpec,
      'preprocessed.modular': sms2onetothreeProcessedSpec,
      'instrumented': sms2onetothreeProcessedSpec,
      'transformed': sms2onetothreeProcessedSpec,
      'callenclose': sms2onetothreeProcessedSpec,
      'calltransform': sms2onetothreeProcessedSpec,
      'optimized': sms2onetothreeOptimizedSpec,
    },
  },
  'sms2-primer-map-call': {
    'compute': {
      'original': sms2primermapOriginalSpec,
      'original.modular': sms2primermapOriginalSpec,
      'closure': sms2primermapProcessedSpec,
      'closure.modular': sms2primermapProcessedSpec,
      'preprocessed': sms2primermapProcessedSpec,
      'preprocessed.modular': sms2primermapProcessedSpec,
      'instrumented': sms2primermapProcessedSpec,
      'transformed': sms2primermapProcessedSpec,
      'callenclose': sms2primermapProcessedSpec,
      'calltransform': sms2primermapProcessedSpec,
      'optimized': sms2primermapOptimizedSpec,
    },
  },
  'sms2-primer-map-get': {
    'compute': {
      'original': sms2primermapOriginalSpec,
      'original.modular': sms2primermapOriginalSpec,
      'closure': sms2primermapProcessedSpec,
      'closure.modular': sms2primermapProcessedSpec,
      'preprocessed': sms2primermapProcessedSpec,
      'preprocessed.modular': sms2primermapProcessedSpec,
      'instrumented': sms2primermapProcessedSpec,
      'transformed': sms2primermapProcessedSpec,
      'callenclose': sms2primermapProcessedSpec,
      'calltransform': sms2primermapProcessedSpec,
      'optimized': sms2primermapOptimizedSpec,
    },
  },
  'sms2-range-extract-dna-call': {
    'compute': {
      'original': sms2rangeextractdnaOriginalSpec,
      'original.modular': sms2rangeextractdnaOriginalSpec,
      'closure': sms2rangeextractdnaProcessedSpec,
      'closure.modular': sms2rangeextractdnaProcessedSpec,
      'preprocessed': sms2rangeextractdnaProcessedSpec,
      'preprocessed.modular': sms2rangeextractdnaProcessedSpec,
      'instrumented': sms2rangeextractdnaProcessedSpec,
      'transformed': sms2rangeextractdnaProcessedSpec,
      'callenclose': sms2rangeextractdnaProcessedSpec,
      'calltransform': sms2rangeextractdnaProcessedSpec,
      'optimized': sms2rangeextractdnaOptimizedSpec,
    },
  },
  'sms2-range-extract-dna-get': {
    'compute': {
      'original': sms2rangeextractdnaOriginalSpec,
      'original.modular': sms2rangeextractdnaOriginalSpec,
      'closure': sms2rangeextractdnaProcessedSpec,
      'closure.modular': sms2rangeextractdnaProcessedSpec,
      'preprocessed': sms2rangeextractdnaProcessedSpec,
      'preprocessed.modular': sms2rangeextractdnaProcessedSpec,
      'instrumented': sms2rangeextractdnaProcessedSpec,
      'transformed': sms2rangeextractdnaProcessedSpec,
      'callenclose': sms2rangeextractdnaProcessedSpec,
      'calltransform': sms2rangeextractdnaProcessedSpec,
      'optimized': sms2rangeextractdnaOptimizedSpec,
    },
  },
  'sms2-range-extract-protein-call': {
    'compute': {
      'original': sms2rangeextractproteinOriginalSpec,
      'original.modular': sms2rangeextractproteinOriginalSpec,
      'closure': sms2rangeextractproteinProcessedSpec,
      'closure.modular': sms2rangeextractproteinProcessedSpec,
      'preprocessed': sms2rangeextractproteinProcessedSpec,
      'preprocessed.modular': sms2rangeextractproteinProcessedSpec,
      'instrumented': sms2rangeextractproteinProcessedSpec,
      'transformed': sms2rangeextractproteinProcessedSpec,
      'callenclose': sms2rangeextractproteinProcessedSpec,
      'calltransform': sms2rangeextractproteinProcessedSpec,
      'optimized': sms2rangeextractproteinOptimizedSpec,
    },
  },
  'sms2-range-extract-protein-get': {
    'compute': {
      'original': sms2rangeextractproteinOriginalSpec,
      'original.modular': sms2rangeextractproteinOriginalSpec,
      'closure': sms2rangeextractproteinProcessedSpec,
      'closure.modular': sms2rangeextractproteinProcessedSpec,
      'preprocessed': sms2rangeextractproteinProcessedSpec,
      'preprocessed.modular': sms2rangeextractproteinProcessedSpec,
      'instrumented': sms2rangeextractproteinProcessedSpec,
      'transformed': sms2rangeextractproteinProcessedSpec,
      'callenclose': sms2rangeextractproteinProcessedSpec,
      'calltransform': sms2rangeextractproteinProcessedSpec,
      'optimized': sms2rangeextractproteinOptimizedSpec,
    },
  },
  'sms2-rest-map-call': {
    'compute': {
      'original': sms2restmapOriginalSpec,
      'original.modular': sms2restmapOriginalSpec,
      'closure': sms2restmapProcessedSpec,
      'closure.modular': sms2restmapProcessedSpec,
      'preprocessed': sms2restmapProcessedSpec,
      'preprocessed.modular': sms2restmapProcessedSpec,
      'instrumented': sms2restmapProcessedSpec,
      'transformed': sms2restmapProcessedSpec,
      'callenclose': sms2restmapProcessedSpec,
      'calltransform': sms2restmapProcessedSpec,
      'optimized': sms2restmapOptimizedSpec,
    },
  },
  'sms2-rest-map-get': {
    'compute': {
      'original': sms2restmapOriginalSpec,
      'original.modular': sms2restmapOriginalSpec,
      'closure': sms2restmapProcessedSpec,
      'closure.modular': sms2restmapProcessedSpec,
      'preprocessed': sms2restmapProcessedSpec,
      'preprocessed.modular': sms2restmapProcessedSpec,
      'instrumented': sms2restmapProcessedSpec,
      'transformed': sms2restmapProcessedSpec,
      'callenclose': sms2restmapProcessedSpec,
      'calltransform': sms2restmapProcessedSpec,
      'optimized': sms2restmapOptimizedSpec,
    },
  },
  'sms2-rev-comp-call': {
    'compute': {
      'original': sms2revcompOriginalSpec,
      'original.modular': sms2revcompOriginalSpec,
      'closure': sms2revcompClosureSpec,
      'closure.modular': sms2revcompClosureSpec,
      'preprocessed': sms2revcompProcessedSpec,
      'preprocessed.modular': sms2revcompProcessedSpec,
      'instrumented': sms2revcompProcessedSpec,
      'transformed': sms2revcompProcessedSpec,
      'callenclose': sms2revcompProcessedSpec,
      'calltransform': sms2revcompProcessedSpec,
      'optimized': sms2revcompOptimizedSpec,
    },
  },
  'sms2-rev-comp-get': {
    'compute': {
      'original': sms2revcompOriginalSpec,
      'original.modular': sms2revcompOriginalSpec,
      'closure': sms2revcompClosureSpec,
      'closure.modular': sms2revcompClosureSpec,
      'preprocessed': sms2revcompProcessedSpec,
      'preprocessed.modular': sms2revcompProcessedSpec,
      'instrumented': sms2revcompProcessedSpec,
      'transformed': sms2revcompProcessedSpec,
      'callenclose': sms2revcompProcessedSpec,
      'calltransform': sms2revcompProcessedSpec,
      'optimized': sms2revcompOptimizedSpec,
    },
  },
  'sms2-split-codons-call': {
    'compute': {
      'original': sms2splitcodonsOriginalSpec,
      'original.modular': sms2splitcodonsOriginalSpec,
      'closure': sms2splitcodonsProcessedSpec,
      'closure.modular': sms2splitcodonsProcessedSpec,
      'preprocessed': sms2splitcodonsProcessedSpec,
      'preprocessed.modular': sms2splitcodonsProcessedSpec,
      'instrumented': sms2splitcodonsProcessedSpec,
      'transformed': sms2splitcodonsProcessedSpec,
      'callenclose': sms2splitcodonsProcessedSpec,
      'calltransform': sms2splitcodonsProcessedSpec,
      'optimized': sms2splitcodonsOptimizedSpec,
    },
  },
  'sms2-split-codons-get': {
    'compute': {
      'original': sms2splitcodonsOriginalSpec,
      'original.modular': sms2splitcodonsOriginalSpec,
      'closure': sms2splitcodonsProcessedSpec,
      'closure.modular': sms2splitcodonsProcessedSpec,
      'preprocessed': sms2splitcodonsProcessedSpec,
      'preprocessed.modular': sms2splitcodonsProcessedSpec,
      'instrumented': sms2splitcodonsProcessedSpec,
      'transformed': sms2splitcodonsProcessedSpec,
      'callenclose': sms2splitcodonsProcessedSpec,
      'calltransform': sms2splitcodonsProcessedSpec,
      'optimized': sms2splitcodonsOptimizedSpec,
    },
  },
  'sms2-split-fasta-call': {
    'compute': {
      'original': sms2splitfastaOriginalSpec,
      'original.modular': sms2splitfastaOriginalSpec,
      'closure': sms2splitfastaClosureSpec,
      'closure.modular': sms2splitfastaClosureSpec,
      'preprocessed': sms2splitfastaProcessedSpec,
      'preprocessed.modular': sms2splitfastaProcessedSpec,
      'instrumented': sms2splitfastaProcessedSpec,
      'transformed': sms2splitfastaProcessedSpec,
      'callenclose': sms2splitfastaProcessedSpec,
      'calltransform': sms2splitfastaProcessedSpec,
      'optimized': sms2splitfastaOptimizedSpec,
    },
  },
  'sms2-split-fasta-get': {
    'compute': {
      'original': sms2splitfastaOriginalSpec,
      'original.modular': sms2splitfastaOriginalSpec,
      'closure': sms2splitfastaClosureSpec,
      'closure.modular': sms2splitfastaClosureSpec,
      'preprocessed': sms2splitfastaProcessedSpec,
      'preprocessed.modular': sms2splitfastaProcessedSpec,
      'instrumented': sms2splitfastaProcessedSpec,
      'transformed': sms2splitfastaProcessedSpec,
      'callenclose': sms2splitfastaProcessedSpec,
      'calltransform': sms2splitfastaProcessedSpec,
      'optimized': sms2splitfastaOptimizedSpec,
    },
  },
  'sms2-three-to-one-call': {
    'compute': {
      'original': sms2threetooneOriginalSpec,
      'original.modular': sms2threetooneOriginalSpec,
      'closure': sms2threetooneProcessedSpec,
      'closure.modular': sms2threetooneProcessedSpec,
      'preprocessed': sms2threetooneProcessedSpec,
      'preprocessed.modular': sms2threetooneProcessedSpec,
      'instrumented': sms2threetooneProcessedSpec,
      'transformed': sms2threetooneProcessedSpec,
      'callenclose': sms2threetooneProcessedSpec,
      'calltransform': sms2threetooneProcessedSpec,
      'optimized': sms2threetooneOptimizedSpec,
    },
  },
  'sms2-three-to-one-get': {
    'compute': {
      'original': sms2threetooneOriginalSpec,
      'original.modular': sms2threetooneOriginalSpec,
      'closure': sms2threetooneProcessedSpec,
      'closure.modular': sms2threetooneProcessedSpec,
      'preprocessed': sms2threetooneProcessedSpec,
      'preprocessed.modular': sms2threetooneProcessedSpec,
      'instrumented': sms2threetooneProcessedSpec,
      'transformed': sms2threetooneProcessedSpec,
      'callenclose': sms2threetooneProcessedSpec,
      'calltransform': sms2threetooneProcessedSpec,
      'optimized': sms2threetooneOptimizedSpec,
    },
  },
  'sms2-trans-map-call': {
    'compute': {
      'original': sms2transmapOriginalSpec,
      'original.modular': sms2transmapOriginalSpec,
      'closure': sms2transmapProcessedSpec,
      'closure.modular': sms2transmapProcessedSpec,
      'preprocessed': sms2transmapProcessedSpec,
      'preprocessed.modular': sms2transmapProcessedSpec,
      'instrumented': sms2transmapProcessedSpec,
      'transformed': sms2transmapProcessedSpec,
      'callenclose': sms2transmapProcessedSpec,
      'calltransform': sms2transmapProcessedSpec,
      'optimized': sms2transmapOptimizedSpec,
    },
  },
  'sms2-trans-map-get': {
    'compute': {
      'original': sms2transmapOriginalSpec,
      'original.modular': sms2transmapOriginalSpec,
      'closure': sms2transmapProcessedSpec,
      'closure.modular': sms2transmapProcessedSpec,
      'preprocessed': sms2transmapProcessedSpec,
      'preprocessed.modular': sms2transmapProcessedSpec,
      'instrumented': sms2transmapProcessedSpec,
      'transformed': sms2transmapProcessedSpec,
      'callenclose': sms2transmapProcessedSpec,
      'calltransform': sms2transmapProcessedSpec,
      'optimized': sms2transmapOptimizedSpec,
    },
  },
  'sms2-window-extract-dna-call': {
    'compute': {
      'original': sms2windowextractdnaOriginalSpec,
      'original.modular': sms2windowextractdnaOriginalSpec,
      'closure': sms2windowextractdnaProcessedSpec,
      'closure.modular': sms2windowextractdnaProcessedSpec,
      'preprocessed': sms2windowextractdnaProcessedSpec,
      'preprocessed.modular': sms2windowextractdnaProcessedSpec,
      'instrumented': sms2windowextractdnaProcessedSpec,
      'transformed': sms2windowextractdnaProcessedSpec,
      'callenclose': sms2windowextractdnaProcessedSpec,
      'calltransform': sms2windowextractdnaProcessedSpec,
      'optimized': sms2windowextractdnaOptimizedSpec,
    },
  },
  'sms2-window-extract-dna-get': {
    'compute': {
      'original': sms2windowextractdnaOriginalSpec,
      'original.modular': sms2windowextractdnaOriginalSpec,
      'closure': sms2windowextractdnaProcessedSpec,
      'closure.modular': sms2windowextractdnaProcessedSpec,
      'preprocessed': sms2windowextractdnaProcessedSpec,
      'preprocessed.modular': sms2windowextractdnaProcessedSpec,
      'instrumented': sms2windowextractdnaProcessedSpec,
      'transformed': sms2windowextractdnaProcessedSpec,
      'callenclose': sms2windowextractdnaProcessedSpec,
      'calltransform': sms2windowextractdnaProcessedSpec,
      'optimized': sms2windowextractdnaOptimizedSpec,
    },
  },
  'sms2-window-extract-protein-call': {
    'compute': {
      'original': sms2windowextractproteinOriginalSpec,
      'original.modular': sms2windowextractproteinOriginalSpec,
      'closure': sms2windowextractproteinProcessedSpec,
      'closure.modular': sms2windowextractproteinProcessedSpec,
      'preprocessed': sms2windowextractproteinProcessedSpec,
      'preprocessed.modular': sms2windowextractproteinProcessedSpec,
      'instrumented': sms2windowextractproteinProcessedSpec,
      'transformed': sms2windowextractproteinProcessedSpec,
      'callenclose': sms2windowextractproteinProcessedSpec,
      'calltransform': sms2windowextractproteinProcessedSpec,
      'optimized': sms2windowextractproteinOptimizedSpec,
    },
  },
  'sms2-window-extract-protein-get': {
    'compute': {
      'original': sms2windowextractproteinOriginalSpec,
      'original.modular': sms2windowextractproteinOriginalSpec,
      'closure': sms2windowextractproteinProcessedSpec,
      'closure.modular': sms2windowextractproteinProcessedSpec,
      'preprocessed': sms2windowextractproteinProcessedSpec,
      'preprocessed.modular': sms2windowextractproteinProcessedSpec,
      'instrumented': sms2windowextractproteinProcessedSpec,
      'transformed': sms2windowextractproteinProcessedSpec,
      'callenclose': sms2windowextractproteinProcessedSpec,
      'calltransform': sms2windowextractproteinProcessedSpec,
      'optimized': sms2windowextractproteinOptimizedSpec,
    },
  },
}
