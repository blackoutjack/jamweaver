import os
import sys
import string

from config import *
from util import err
from util import out
from util import warn
from util import process_info
from util import get_result_info
from util import get_suffix_from_info
from util import get_variant_bases
from util import overwrite_expected
from util import symlink

microbases = get_variant_bases(MICROBENCHMARK_DIR)
benchbases = get_variant_bases(BENCHMARK_DIR)
webbases = get_variant_bases(WEBSITE_FILE)

RESULTSDIR = OUTDIR

TARGETDIRS = {
  BENCHMARK_DIR: {
    'basenames': benchbases,
    'wrap': False,
  },
  MICROBENCHMARK_DIR: {
    'basenames': microbases,
    'wrap': True,
  },
  WEBSITE_DIR: {
    'basenames': webbases,
    'wrap': False,
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
imageloaderProcessedSpec = {
  'beginafter': 'function doLoad() {\n',
  'endafter': 'img$$2.fetch();\n',
  'matchall': False,
  'indent': 4
}
imageloaderCollapsedSpec = {
  'beginafter': 'function doLoad() {\n',
  'endafter': 'JAM.call(img$$2.fetch, img$$2, []);\n',
  'matchall': False,
  'indent': 2
}
imageloaderOptimizedSpec = {
  'beginafter': 'function doLoad(){',
  'endafter': 'img.fetch()',
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
  'endbefore': 'if (qrcode.callback != null)',
  'matchall': True,
  'indent': 6
}
jsqrcodeProcessedSpec = {
  'beginafter': 'function v144() {',
  'endbefore': ['if (v239) {', 'if (v242) {'],
  'matchall': False,
  'indent': 4
}
jsqrcodeCollapsedSpec = {
  'beginafter': 'function v144() {',
  'endbefore': 'if (qrcode.callback != null) {',
  'matchall': True,
  'indent': 4
}
jsqrcodeOptimizedSpec = {
  'beginafter': 'function v144(){',
  'endbefore': 'null!=qrcode.callback&&',
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
  'endbefore': '    return;\n  }\n  function handleEditDialogCancel() {',
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
  'endbefore': '    return;\n  }\n  function handleUnlockDialogCancel() {',
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
  'endbefore': '    }\n    return v8;\n',
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
  'endbefore': '      return;\n    }\n    return v5;\n',
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

phylojiveOriginalSetupSpec = {
  'beginafter': '    function init() {',
  'endbefore': '} \n\n\n// SimpleTemplate_webApp.html',
  'matchall': False,
  'indent': 8 
}
phylojiveCollapsedSetupSpec = {
  'beginafter': 'function init() {',
  'endafter': '"raw valleybottom":[13.6]}}});',
  'matchall': False,
  'indent': 2
}
phylojiveClosureSetupSpec = {
  'beginafter': 'function init() {',
  'endafter': '"raw valleybottom":[13.6]}}})',
  'matchall': False,
  'indent': 2
}
phylojiveProcessedSetupSpec = {
  'beginafter': 'function init() {',
  'endafter': '  phylogenyExplorer_init(v8922);',
  'matchall': False,
  'indent': 2
}
phylojiveOptimizedSetupSpec = {
  'beginafter': 'function init(){',
  'endafter': 'phylogenyExplorer_init()',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

googiespellOriginalSubmitSpec = {
  'beginafter': 'GoogieSpell.prototype.spellCheck = function(ignore) {',
  'endbefore': '}\n\n\n//////\n// Spell checking functions',
  'matchall': False,
  'indent': 4 
}
googiespellProcessedSubmitSpec = {
  'beginafter': 'function v182(ignore) {',
  'endbefore': '  return;\n}\nfunction v181(text',
  'matchall': False,
  'indent': 6
}
googiespellClosureSubmitSpec = {
  'beginafter': 'GoogieSpell.prototype.spellCheck = function(ignore) {',
  'endbefore': '};\nGoogieSpell.prototype.parseResult = function(r_text$$1) {',
  'matchall': False,
  'indent': 6
}
googiespellOptimizedSubmitSpec = {
  'beginafter': 'function v182(ignore){',
  'endbefore': '}function v181(text){',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

googiespellOriginalParseSpec = {
  'beginafter': 'GoogieSpell.prototype.parseResult = function(r_text) {',
  'endbefore': '    return results;\n}\n\n//////\n// Counters',
  'matchall': False,
  'indent': 4 
}
googiespellProcessedParseSpec = {
  'beginafter': 'function v183(r_text$$1) {',
  'endbefore': '  return results;\n}\nfunction v182(ignore) {',
  'matchall': False,
  'indent': 2
}
googiespellClosureParseSpec = {
  'beginafter': 'GoogieSpell.prototype.parseResult = function(r_text$$1) {',
  'endbefore': '  return results;\n};\nGoogieSpell.prototype.errorFixed = function() {',
  'matchall': False,
  'indent': 2
}
googiespellOptimizedParseSpec = {
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
  'endbefore': '  return true;\n}\nfunction writeCodonPlot(',
  'matchall': False,
  'indent': 2
}
sms2codonplotOptimizedSpec = {
  'beginafter': 'function v4(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction writeCodonTable(',
  'matchall': False,
  'indent': 2
}
sms2codonusageOptimizedSpec = {
  'beginafter': 'function v5(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction cpgIslandRegions(',
  'matchall': False,
  'indent': 2
}
sms2cpgislandsOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction writeDnaMw(',
  'matchall': False,
  'indent': 2
}
sms2dnamwOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction writeDnaPattern(',
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
  'endbefore': '  return true;\n}\ndocument.onload = ',
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
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction _fuzzySearchDna(',
  'matchall': False,
  'indent': 2
}
sms2fuzzysearchdnaOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction _fuzzySearchProtein(',
  'matchall': False,
  'indent': 2
}
sms2fuzzysearchproteinOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction writeIdentAndSim(',
  'matchall': False,
  'indent': 2
}
sms2identsimOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction writeConsensusSeq(',
  'matchall': False,
  'indent': 2
}
sms2multirevtransOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction layoutRestTrans(',
  'matchall': False,
  'indent': 2
}
sms2mutatefordigestOptimizedSpec = {
  'beginafter': 'function v8(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction writeOrfs(',
  'matchall': False,
  'indent': 2
}
sms2orffindOptimizedSpec = {
  'beginafter': 'function v4(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction pairwiseCodon(',
  'matchall': False,
  'indent': 2
}
sms2pairwisealigncodonsOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction pairwiseDna(',
  'matchall': False,
  'indent': 2
}
sms2pairwisealigndnaOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction pairwiseProtein(',
  'matchall': False,
  'indent': 2
}
sms2pairwisealignproteinOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction _removeNonPrimer(',
  'matchall': False,
  'indent': 2
}
sms2pcrprimerstatsOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction findMatches(',
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
  'endbefore': '  return true;\n}\nfunction getProteinGravy(',
  'matchall': False,
  'indent': 2
}
sms2proteingravyOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction writeProtIep(',
  'matchall': False,
  'indent': 2
}
sms2proteiniepOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction writeProtMw(',
  'matchall': False,
  'indent': 2
}
sms2proteinmwOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction writeProteinPattern(',
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
  'endbefore': '  return true;\n}\ndocument.onload = function() {',
  'matchall': False,
  'indent': 2
}
sms2proteinstatsOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction digest(',
  'matchall': False,
  'indent': 2
}
sms2restdigestOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\ndocument.onload = function() {',
  'matchall': False,
  'indent': 2
}
sms2restsummaryOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction writeRevTransSeqNoDegen(',
  'matchall': False,
  'indent': 2
}
sms2revtransOptimizedSpec = {
  'beginafter': 'function v6(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction writeTranslation(',
  'matchall': False,
  'indent': 2
}
sms2translateOptimizedSpec = {
  'beginafter': 'function v4(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction colorAlign(',
  'matchall': False,
  'indent': 2
}
sms2coloralignconsOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction colorAlign(',
  'matchall': False,
  'indent': 2
}
sms2coloralignpropOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\ndocument.onload = function() {\n',
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
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction emblToFasta(',
  'matchall': False,
  'indent': 2
}
sms2emblfastaOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction emblFeatExtract(',
  'matchall': False,
  'indent': 2
}
sms2emblfeatOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction emblTransExtract(',
  'matchall': False,
  'indent': 2
}
sms2embltransOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\ndocument.onload = function() {\n',
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
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\ndocument.onload = function() {\n',
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
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction genbankToFasta(',
  'matchall': False,
  'indent': 2
}
sms2genbankfastaOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction genBankFeatExtract(',
  'matchall': False,
  'indent': 2
}
sms2genbankfeatOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction genBankTransExtract(',
  'matchall': False,
  'indent': 2
}
sms2genbanktransOptimizedSpec = {
  'beginafter': 'function v3(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\ndocument.onload = function() {\n',
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
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\ndocument.onload = function() {\n',
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
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction writeOneToThree(',
  'matchall': False,
  'indent': 2
}
sms2onetothreeOptimizedSpec = {
  'beginafter': 'function v5(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction writePrimerSites(',
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
  'endbefore': '  return true;\n}\nfunction writeSequenceRanges(',
  'matchall': False,
  'indent': 2
}
sms2rangeextractdnaOptimizedSpec = {
  'beginafter': 'function v11(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction writeSequenceRanges(',
  'matchall': False,
  'indent': 2
}
sms2rangeextractproteinOptimizedSpec = {
  'beginafter': 'function v11(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction layoutRestTrans(',
  'matchall': False,
  'indent': 2
}
sms2restmapOptimizedSpec = {
  'beginafter': 'function v12(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\ndocument.onload = function() {\n',
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
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction getBasesBasedOnCodonPosition(',
  'matchall': False,
  'indent': 2
}
sms2splitcodonsOptimizedSpec = {
  'beginafter': 'function v4(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\ndocument.onload = function() {\n',
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
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction writeThreeToOne(',
  'matchall': False,
  'indent': 2
}
sms2threetooneOptimizedSpec = {
  'beginafter': 'function v4(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction layoutTranslation(',
  'matchall': False,
  'indent': 2
}
sms2transmapOptimizedSpec = {
  'beginafter': 'function v12(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction rangeExtract(',
  'matchall': False,
  'indent': 2
}
sms2windowextractdnaOptimizedSpec = {
  'beginafter': 'function v11(){try{',
  'endbefore': '}catch(e){alert',
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
  'endbefore': '  return true;\n}\nfunction rangeExtract(',
  'matchall': False,
  'indent': 2
}
sms2windowextractproteinOptimizedSpec = {
  'beginafter': 'function v11(){try{',
  'endbefore': '}catch(e){alert',
  'matchall': False,
  'indent': -1,
  'prefixsemicolonend': True
}

def appStd(appname, action='', closure='Processed', collapsed='Processed'):
  return {
    'input': globals()[appname + 'Original' + action + 'Spec'],
    'coarse.input': globals()[appname + 'Original' + action + 'Spec'],
    'unprotected.closure': globals()[appname + closure + action + 'Spec'],
    'coarse.closure': globals()[appname + closure + action + 'Spec'],
    'unprotected.normalized': globals()[appname + 'Processed' + action + 'Spec'],
    'coarse.normalized': globals()[appname + 'Processed' + action + 'Spec'],
    'semantic0.instrumented': globals()[appname + 'Processed' + action + 'Spec'],
    'semantic0.indirection': globals()[appname + 'Processed' + action + 'Spec'],
    'semantic0.collapsed': globals()[appname + collapsed + action + 'Spec'],
    'semantic0.optimized': globals()[appname + 'Optimized' + action + 'Spec'],
    'semantic3.instrumented': globals()[appname + 'Processed' + action + 'Spec'],
    'semantic3.indirection': globals()[appname + 'Processed' + action + 'Spec'],
    'semantic3.collapsed': globals()[appname + collapsed + action + 'Spec'],
    'semantic3.optimized': globals()[appname + 'Optimized' + action + 'Spec'],
    'syntax.instrumented': globals()[appname + 'Processed' + action + 'Spec'],
    'syntax.indirection': globals()[appname + 'Processed' + action + 'Spec'],
    'syntax.collapsed': globals()[appname + collapsed + action + 'Spec'],
    'syntax.optimized': globals()[appname + 'Optimized' + action + 'Spec'],
  }

def sms2Std(sms2name, action='', closure='Processed', collapsed='Processed'):
  val = appStd('sms2' + sms2name, action=action, closure=closure, collapsed=collapsed)
  return {
    'compute': val,
  }

PROFILES = {
  'octane': {
    'run': appStd('octane'),
    #'suite.name': appStd('octane', action='Step')
  },
  'imageloader': {
    'fetch': appStd('imageloader', closure='Closure'),
  },
  'jsqrcode': {
    'decode': appStd('jsqrcode', closure='Closure', collapsed='Collapsed'),
  },
  'snote': {
    'edit': appStd('snote', action='Edit', closure='Closure'),
    'read': appStd('snote', action='Read', closure='Closure'),
  },
  'mwwidgets': {
    'edit': appStd('mwwidgets', action='Edit', closure='Closure'),
    'read': appStd('mwwidgets', action='Read', closure='Closure'),
  },
  'phylojive': {
    'setup': appStd('phylojive', action='Setup', closure='Closure', collapsed='Collapsed'),
  },
  'googiespell': {
    'submit': appStd('googiespell', action='Submit', closure='Closure'),
    'parse': appStd('googiespell', action='Parse', closure='Closure'),
  },
  'sms2-codon-plot': sms2Std('codonplot'),
  'sms2-codon-usage': sms2Std('codonusage'),
  'sms2-cpg-islands': sms2Std('cpgislands'),
  'sms2-dna-mw': sms2Std('dnamw'),
  'sms2-dna-pattern': sms2Std('dnapattern'),
  'sms2-dna-stats': sms2Std('dnastats', closure='Closure'),
  'sms2-fuzzy-search-dna': sms2Std('fuzzysearchdna'),
  'sms2-fuzzy-search-protein': sms2Std('fuzzysearchprotein'),
  'sms2-ident-sim': sms2Std('identsim'),
  'sms2-multi-rev-trans': sms2Std('multirevtrans'),
  'sms2-mutate-for-digest': sms2Std('mutatefordigest'),
  'sms2-orf-find': sms2Std('orffind'),
  'sms2-pairwise-align-codons': sms2Std('pairwisealigncodons'),
  'sms2-pairwise-align-dna': sms2Std('pairwisealigndna'),
  'sms2-pairwise-align-protein': sms2Std('pairwisealignprotein'),
  'sms2-pcr-primer-stats': sms2Std('pcrprimerstats'),
  'sms2-pcr-products': sms2Std('pcrproducts'),
  'sms2-protein-gravy': sms2Std('proteingravy'),
  'sms2-protein-iep': sms2Std('proteiniep'),
  'sms2-protein-mw': sms2Std('proteinmw'),
  'sms2-protein-pattern': sms2Std('proteinpattern'),
  'sms2-protein-stats': sms2Std('proteinstats', closure='Closure'),
  'sms2-rest-digest': sms2Std('restdigest'),
  'sms2-rest-summary': sms2Std('restsummary', closure='Closure'),
  'sms2-rev-trans': sms2Std('revtrans'),
  'sms2-translate': sms2Std('translate'),
  'sms2-color-align-cons': sms2Std('coloraligncons'),
  'sms2-color-align-prop': sms2Std('coloralignprop'),
  'sms2-combine-fasta': sms2Std('combinefasta', closure='Closure'),
  'sms2-embl-fasta': sms2Std('emblfasta'),
  'sms2-embl-feat': sms2Std('emblfeat'),
  'sms2-embl-trans': sms2Std('embltrans'),
  'sms2-filter-dna': sms2Std('filterdna', closure='Closure'),
  'sms2-filter-protein': sms2Std('filterprotein', closure='Closure'),
  'sms2-genbank-fasta': sms2Std('genbankfasta'),
  'sms2-genbank-feat': sms2Std('genbankfeat'),
  'sms2-genbank-trans': sms2Std('genbanktrans'),
  'sms2-group-dna': sms2Std('groupdna', closure='Closure'),
  'sms2-group-protein': sms2Std('groupprotein', closure='Closure'),
  'sms2-one-to-three': sms2Std('onetothree'),
  'sms2-primer-map': sms2Std('primermap'),
  'sms2-range-extract-dna': sms2Std('rangeextractdna'),
  'sms2-range-extract-protein': sms2Std('rangeextractprotein'),
  'sms2-rest-map': sms2Std('restmap'),
  'sms2-rev-comp': sms2Std('revcomp', closure='Closure'),
  'sms2-split-codons': sms2Std('splitcodons'),
  'sms2-split-fasta': sms2Std('splitfasta', closure='Closure'),
  'sms2-three-to-one': sms2Std('threetoone'),
  'sms2-trans-map': sms2Std('transmap'),
  'sms2-window-extract-dna': sms2Std('windowextractdna'),
  'sms2-window-extract-protein': sms2Std('windowextractprotein'),
}
