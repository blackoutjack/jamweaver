// sms2-window-extract-dna.js
function v12() {
  var v923 = document.forms;
  introspect(JAM.policy.p26) {
    var v765 = v923[0]
  }
  var v445 = v765.elements;
  introspect(JAM.policy.p26) {
    var v13 = v445[0]
  }
  v13.value = " ";
  return;
}
function v11() {
  try {
    JAM.call(windowExtract, null, [document], JAM.policy.p38);
  } catch (e$$7) {
    JAM.call(alert, null, ["The following error was encountered: " + e$$7], JAM.policy.p38);
  }
  return;
}
function v10() {
  var v15 = document.main_form.main_submit;
  JAM.call(v15.focus, v15, [], JAM.policy.p39);
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p41);
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  introspect(JAM.policy.p26) {
    var v16 = arrayOfSequences[0]
  }
  var lengthOfAlign = v16.length;
  if (arrayOfSequences.length < 2) {
    JAM.call(alert, null, ["Please enter an alignment consisting of at least two sequences."], JAM.policy.p23);
    return false;
  }
  var i$$1 = 0;
  var v19 = i$$1 < arrayOfTitles.length;
  for (;v19;) {
    introspect(JAM.policy.p26) {
      var v1040 = arrayOfTitles[i$$1]
    }
    var v766 = JAM.call(v1040.search, v1040, [/\S/], JAM.policy.p38) == -1;
    if (!v766) {
      introspect(JAM.policy.p26) {
        var v1041 = arrayOfSequences[i$$1]
      }
      v766 = JAM.call(v1041.search, v1041, [/\S/], JAM.policy.p38) == -1;
    }
    var v449 = v766;
    if (!v449) {
      introspect(JAM.policy.p26) {
        var v927 = arrayOfSequences[i$$1]
      }
      v449 = v927.length != lengthOfAlign;
    }
    if (v449) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p23);
      return false;
    }
    i$$1 = i$$1 + 1;
    v19 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1042 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p38) == -1;
  if (!v1042) {
    v1042 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p38) == -1;
  }
  var v928 = v1042;
  if (!v928) {
    v928 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p38) == -1;
  }
  var v769 = v928;
  if (!v769) {
    v769 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p38) == -1;
  }
  var v451 = v769;
  if (!v451) {
    v451 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p38) == -1;
  }
  if (v451) {
    JAM.call(alert, null, ["The codon table has been entered incorrectly."], JAM.policy.p23);
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v772 = formElement.value;
  if (JAM.call(v772.search, v772, [/\S/], JAM.policy.p38) == -1) {
    JAM.call(alert, null, ["Please enter some text."], JAM.policy.p23);
    return false;
  }
  return true;
}
function checkGeneticCode(arrayOfPatterns) {
  var z$$2 = 0;
  var codon = "";
  var oneMatch = false;
  var testSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
  var v24 = z$$2 < arrayOfPatterns.length;
  for (;v24;) {
    introspect(JAM.policy.p26) {
      var v773 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(v773.search, v773, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p23);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v774 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(moreExpressionCheck, null, [v774], JAM.policy.p38) == false) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p23);
      return false;
    }
    z$$2 = z$$2 + 1;
    v24 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = JAM.new(Array, [arrayOfPatterns.length], JAM.policy.p38);
  var geneticCodeMatchExp = JAM.new(Array, [arrayOfPatterns.length], JAM.policy.p38);
  var j = 0;
  var v33 = j < arrayOfPatterns.length;
  for (;v33;) {
    var v27 = geneticCodeMatchExp;
    var v28 = j;
    introspect(JAM.policy.p26) {
      var v931 = arrayOfPatterns[j]
    }
    var v458 = JAM.call(v931.match, v931, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v1279 = eval("introspect(JAM.policy.pFull) { " + v458 + " }")
    } else {
      var v1279 = JAM.call(eval, null, [v458])
    }
    introspect(JAM.policy.p27) {
      v27[v28] = v1279;
    }
    var v29 = geneticCodeMatchResult;
    var v30 = j;
    introspect(JAM.policy.p26) {
      var v776 = arrayOfPatterns[j]
    }
    var v459 = JAM.call(v776.match, v776, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v1280 = JAM.call(v459.toString, v459, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v29[v30] = v1280;
    }
    var v31 = geneticCodeMatchResult;
    var v32 = j;
    introspect(JAM.policy.p26) {
      var v460 = geneticCodeMatchResult[j]
    }
    var v1281 = JAM.call(v460.replace, v460, [/=/g, ""], JAM.policy.p40);
    introspect(JAM.policy.p27) {
      v31[v32] = v1281;
    }
    j = j + 1;
    v33 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v40 = i$$2 <= testSequence.length - 3;
  for (;v40;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p41);
    j = 0;
    var v38 = j < geneticCodeMatchExp.length;
    for (;v38;) {
      introspect(JAM.policy.p26) {
        var v778 = geneticCodeMatchExp[j]
      }
      if (JAM.call(codon.search, codon, [v778], JAM.policy.p38) != -1) {
        if (oneMatch == true) {
          JAM.call(alert, null, ["Genetic code error: more than one amino acid is coded by the codon: " + codon + "."], JAM.policy.p38);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      v38 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      JAM.call(alert, null, ["The genetic code expressions are missing a codon."], JAM.policy.p23);
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v40 = i$$2 <= testSequence.length - 3;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v42 = z$$3 < arrayOfPatterns$$1.length;
  for (;v42;) {
    introspect(JAM.policy.p26) {
      var v780 = arrayOfPatterns$$1[z$$3]
    }
    if (JAM.call(v780.search, v780, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p38) != -1) {
      JAM.call(alert, null, ["One or more groups have been entered incorrectly."], JAM.policy.p23);
      return false;
    }
    z$$3 = z$$3 + 1;
    v42 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v46 = i$$3 < arrayOfPatterns$$1.length;
  for (;v46;) {
    introspect(JAM.policy.p26) {
      var v781 = arrayOfPatterns$$1[i$$3]
    }
    var re = JAM.new(RegExp, ["[" + v781 + "]", "gi"], JAM.policy.p40);
    var j$$1 = i$$3 + 1;
    var v45 = j$$1 < arrayOfPatterns$$1.length;
    for (;v45;) {
      introspect(JAM.policy.p26) {
        var v782 = arrayOfPatterns$$1[j$$1]
      }
      if (JAM.call(v782.search, v782, [re], JAM.policy.p38) != -1) {
        JAM.call(alert, null, ["The same amino acid is in more than one similarity group."], JAM.policy.p23);
        return false;
      }
      j$$1 = j$$1 + 1;
      v45 = j$$1 < arrayOfPatterns$$1.length;
    }
    i$$3 = i$$3 + 1;
    v46 = i$$3 < arrayOfPatterns$$1.length;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v49 = z$$4 < arrayOfPatterns$$2.length;
  for (;v49;) {
    introspect(JAM.policy.p26) {
      var v783 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(v783.search, v783, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p23);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v784 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(moreExpressionCheck, null, [v784], JAM.policy.p38) == false) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p23);
      return false;
    }
    z$$4 = z$$4 + 1;
    v49 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v932 = JAM.call(getSequenceFromFasta, null, [text$$7], JAM.policy.p38);
  if (JAM.call(v932.replace, v932, [/[^A-Za-z]/g, ""], JAM.policy.p40).length > maxInput) {
    JAM.call(alert, null, ["Please enter a sequence consisting of less than or equal to " + maxInput + " characters."], JAM.policy.p38);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  if (text$$8.length > maxInput$$1) {
    JAM.call(alert, null, ["Please enter text consisting of less than or equal to " + maxInput$$1 + " characters."], JAM.policy.p38);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p40);
  return dnaSequence;
}
function closeForm() {
  var v54 = outputWindow.document;
  JAM.call(v54.write, v54, ["</form>"], JAM.policy.p23);
  return true;
}
function closePre() {
  var v55 = outputWindow.document;
  JAM.call(v55.write, v55, ["</div>"], JAM.policy.p23);
  var v56 = outputWindow.document;
  JAM.call(v56.write, v56, ["</pre>\n"], JAM.policy.p23);
  return;
}
function closeTextArea() {
  var v57 = outputWindow.document;
  JAM.call(v57.write, v57, ["</textarea>"], JAM.policy.p23);
  return true;
}
function closeWindow() {
  var v58 = outputWindow.document;
  JAM.call(v58.write, v58, ["</body>\n</html>\n"], JAM.policy.p23);
  outputWindow.status = "Done.";
  var v59 = outputWindow.document;
  JAM.call(v59.close, v59, [], JAM.policy.p39);
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = JAM.call(sequence$$1.toLowerCase, sequence$$1, [], JAM.policy.p39);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p40);
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  if (alignArray.length < 3) {
    JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p23);
    return false;
  }
  var i$$4 = 1;
  var v62 = i$$4 < alignArray.length;
  for (;v62;) {
    introspect(JAM.policy.p26) {
      var v786 = alignArray[i$$4]
    }
    if (JAM.call(v786.search, v786, [/[^\s]+\s/], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p23);
      return false;
    }
    i$$4 = i$$4 + 1;
    v62 = i$$4 < alignArray.length;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p40);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p40);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p40);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p40);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p40);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = JAM.new(Array, [], JAM.policy.p39);
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  if (JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38) != -1) {
    var v64 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p38);
    for (;v64;) {
      introspect(JAM.policy.p26) {
        var v63 = matchArray[0]
      }
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v63], JAM.policy.p38);
      v64 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p38);
    }
  } else {
    introspect(JAM.policy.p27) {
      arrayOfFasta[0] = sequenceData;
    }
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var stringToReturn = "&gt;results for " + sequence$$2.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"';
  }
  stringToReturn = stringToReturn + ' starting "' + JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p22) + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p22) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p22) + '"';
  return'<div class="info">' + stringToReturn$$1 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = JAM.new(Array, [arrayOfPatterns$$3.length], JAM.policy.p38);
  var j$$2 = 0;
  var v82 = j$$2 < arrayOfPatterns$$3.length;
  for (;v82;) {
    var v80 = geneticCodeMatchExp$$1;
    var v81 = j$$2;
    introspect(JAM.policy.p26) {
      var v933 = arrayOfPatterns$$3[j$$2]
    }
    var v507 = JAM.call(v933.match, v933, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v1282 = eval("introspect(JAM.policy.pFull) { " + v507 + " }")
    } else {
      var v1282 = JAM.call(eval, null, [v507])
    }
    introspect(JAM.policy.p27) {
      v80[v81] = v1282;
    }
    j$$2 = j$$2 + 1;
    v82 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = JAM.new(Array, [arrayOfPatterns$$4.length], JAM.policy.p38);
  var j$$3 = 0;
  var v88 = j$$3 < arrayOfPatterns$$4.length;
  for (;v88;) {
    var v84 = geneticCodeMatchResult$$1;
    var v85 = j$$3;
    introspect(JAM.policy.p26) {
      var v788 = arrayOfPatterns$$4[j$$3]
    }
    var v510 = JAM.call(v788.match, v788, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v1283 = JAM.call(v510.toString, v510, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v84[v85] = v1283;
    }
    var v86 = geneticCodeMatchResult$$1;
    var v87 = j$$3;
    introspect(JAM.policy.p26) {
      var v511 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1284 = JAM.call(v511.replace, v511, [/=/g, ""], JAM.policy.p40);
    introspect(JAM.policy.p27) {
      v86[v87] = v1284;
    }
    j$$3 = j$$3 + 1;
    v88 = j$$3 < arrayOfPatterns$$4.length;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"';
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p22) + '"';
  return'<div class="info">' + stringToReturn$$2 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"';
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p22) + '"';
  return'<div class="info">' + stringToReturn$$3 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p22) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleTwo$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p22) + '"';
  return'<div class="info">' + stringToReturn$$4 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = JAM.new(Array, [], JAM.policy.p39);
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v109 = j$$4 < lengthOut;
  for (;v109;) {
    tempNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * components.length], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar = components[tempNum];
    }
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p38);
    j$$4 = j$$4 + 1;
    v109 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p23);
}
function getSequenceFromFasta(sequenceRecord) {
  if (JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38) != -1) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p40);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if (JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38) != -1) {
    var v111 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p40);
    fastaTitle = JAM.call(v111.toString, v111, [], JAM.policy.p39);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p40);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p40);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p40);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1247 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p38) != -1;
  if (!v1247) {
    v1247 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v1234 = v1247;
  if (!v1234) {
    v1234 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p38) != -1;
  }
  var v1218 = v1234;
  if (!v1218) {
    v1218 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v1200 = v1218;
  if (!v1200) {
    v1200 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p38) != -1;
  }
  var v1167 = v1200;
  if (!v1167) {
    v1167 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p38) != -1;
  }
  var v1117 = v1167;
  if (!v1117) {
    v1117 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p38) != -1;
  }
  var v1045 = v1117;
  if (!v1045) {
    v1045 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p38) != -1;
  }
  var v934 = v1045;
  if (!v934) {
    v934 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p38) != -1;
  }
  var v790 = v934;
  if (!v790) {
    v790 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p38) != -1;
  }
  var v539 = v790;
  if (!v539) {
    v539 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p38) != -1;
  }
  if (v539) {
    return false;
  }
  return true;
}
function openForm() {
  var v114 = outputWindow.document;
  JAM.call(v114.write, v114, ['<form action="">\n'], JAM.policy.p23);
  return true;
}
function openPre() {
  var v115 = outputWindow.document;
  JAM.call(v115.write, v115, ["<pre>"], JAM.policy.p23);
  var v116 = outputWindow.document;
  JAM.call(v116.write, v116, ['<div class="pre">'], JAM.policy.p23);
  return;
}
function openTextArea() {
  var v117 = outputWindow.document;
  JAM.call(v117.write, v117, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p23);
  return true;
}
function openWindow(title$$6) {
  JAM.call(_openWindow, null, [title$$6, true], JAM.policy.p40);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p24);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p39);
  var v118 = outputWindow.document;
  JAM.call(v118.write, v118, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p38);
  if (isColor) {
    var v120 = outputWindow.document;
    JAM.call(v120.write, v120, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p38);
  } else {
    var v122 = outputWindow.document;
    JAM.call(v122.write, v122, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p38);
  }
  var v124 = outputWindow.document;
  JAM.call(v124.write, v124, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$7 + " results</div>\n"], JAM.policy.p38);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$8) {
  JAM.call(_openWindowAlign, null, [title$$8, true], JAM.policy.p40);
  return;
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p24);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p39);
  var v126 = outputWindow.document;
  JAM.call(v126.write, v126, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p38);
  if (isBackground) {
    var v128 = outputWindow.document;
    JAM.call(v128.write, v128, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p38);
  } else {
    var v130 = outputWindow.document;
    JAM.call(v130.write, v130, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p38);
  }
  var v132 = outputWindow.document;
  JAM.call(v132.write, v132, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$9 + " results</div>\n"], JAM.policy.p38);
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p40);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p40);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p40);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p40);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p40);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p40);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p40);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p40);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p40);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = JAM.new(Array, [], JAM.policy.p39);
  if (JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p38) != -1) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p38);
    tempDnaArray = JAM.call(tempDnaArray.reverse, tempDnaArray, [], JAM.policy.p39);
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p23);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = JAM.call(theNumber.toString, theNumber, [], JAM.policy.p39);
  j$$5 = theNumber.length;
  var v135 = j$$5 < lengthOfColumn;
  for (;v135;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v135 = j$$5 < lengthOfColumn;
  }
  theNumber = tempString + theNumber + " ";
  sequenceToAppend = sequenceToAppend + theNumber + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = JAM.new(Array, [], JAM.policy.p39);
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p38);
  introspect(JAM.policy.p26) {
    var v549 = testArray[0]
  }
  if (v549 != testString) {
    JAM.call(alert, null, ["Array object push method not supported. See browser compatibility page."], JAM.policy.p23);
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  if (JAM.call(testString.search, testString, [re$$2], JAM.policy.p38) == -1) {
    JAM.call(alert, null, ["Regular expression 'm' flag not supported. See browser compatibility page."], JAM.policy.p23);
    return false;
  }
  var caughtException = false;
  try {
    if (JAM.isEval(eval)) {
      re$$2 = eval("introspect(JAM.policy.pFull) { " + "Exception handling not supported. Check browser compatibility page." + " }");
    } else {
      re$$2 = JAM.call(eval, null, ["Exception handling not supported. Check browser compatibility page."]);
    }
  } catch (e$$4) {
    caughtException = true;
  }
  if (!caughtException) {
    JAM.call(alert, null, ["Exception handling not supported. See browser compatibility page."], JAM.policy.p23);
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p41);
  if (testString != "1X2X3X") {
    JAM.call(alert, null, ["Nested function in String replace method not supported. See browser compatibility page."], JAM.policy.p23);
    return false;
  }
  var testNum = 2489.8237;
  if (JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p25) != 2489.824) {
    JAM.call(alert, null, ["Number toFixed() method not supported. See browser compatibility page."], JAM.policy.p23);
    return false;
  }
  if (JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p25) != 2489.8) {
    JAM.call(alert, null, ["Number toPrecision() method not supported. See browser compatibility page."], JAM.policy.p23);
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  if (JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p38) == -1) {
    JAM.call(alert, null, ["Please enter a number"], JAM.policy.p23);
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v945 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p38) == -1;
  if (!v945) {
    v945 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p38) == -1;
  }
  var v801 = v945;
  if (!v801) {
    v801 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p38) == -1;
  }
  var v554 = v801;
  if (!v554) {
    v554 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v554) {
    JAM.call(alert, null, ["Please enter the contents of an EMBL file."], JAM.policy.p23);
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if (JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p38) == -1) {
    JAM.call(alert, null, ["Please enter a number."], JAM.policy.p23);
    return false;
  }
  if (theNumber$$2 > maxInput$$2) {
    JAM.call(alert, null, ["Please enter a number less than or equal to " + maxInput$$2 + "."], JAM.policy.p38);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  if (JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p38) != -1) {
    JAM.call(alert, null, ["The sequence contains non-DNA characters, which will be omitted."], JAM.policy.p23);
  }
  return true;
}
function verifyProtein(proteinSequence) {
  if (JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p38) != -1) {
    JAM.call(alert, null, ["The sequence contains non-protein characters, which will be omitted."], JAM.policy.p23);
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v948 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v948) {
    v948 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v804 = v948;
  if (!v804) {
    v804 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v559 = v804;
  if (!v559) {
    v559 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v559) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p23);
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v951 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v951) {
    v951 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v807 = v951;
  if (!v807) {
    v807 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v560 = v807;
  if (!v560) {
    v560 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v560) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p23);
    return false;
  }
  if (JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p38) == -1) {
    JAM.call(alert, null, ["The file has no defined features."], JAM.policy.p23);
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v954 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p38) == -1;
  if (!v954) {
    v954 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p38) == -1;
  }
  var v810 = v954;
  if (!v810) {
    v810 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p38) == -1;
  }
  var v562 = v810;
  if (!v562) {
    v562 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v562) {
    JAM.call(alert, null, ["Please enter the contents of an EMBL file."], JAM.policy.p23);
    return false;
  }
  if (JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p38) == -1) {
    JAM.call(alert, null, ["The file has no defined features."], JAM.policy.p23);
    return false;
  }
  return true;
}
function writeGroupNum(text$$10, tabIn$$1, groupSize, basePerLine, startBase, stopBase) {
  var i$$5 = JAM.call(parseInt, null, [startBase], JAM.policy.p38);
  var k = 0;
  var lineOfText = "";
  var sepChar = " ";
  groupSize = JAM.call(parseInt, null, [groupSize], JAM.policy.p38);
  basePerLine = JAM.call(parseInt, null, [basePerLine], JAM.policy.p38);
  var v163 = i$$5 < stopBase;
  for (;v163;) {
    lineOfText = JAM.call(rightNum, null, [i$$5 + 1, lineOfText, 8, tabIn$$1], JAM.policy.p41);
    var j$$6 = 1;
    var v160 = j$$6 <= basePerLine / groupSize;
    for (;v160;) {
      var v159 = k < groupSize;
      for (;v159;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p38);
        k = k + 1;
        v159 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v160 = j$$6 <= basePerLine / groupSize;
    }
    var v161 = outputWindow.document;
    JAM.call(v161.write, v161, [lineOfText + "\n"], JAM.policy.p38);
    lineOfText = "";
    v163 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  JAM.call(writeGroupNumDnaSetStart, null, [text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0], JAM.policy.p41);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v567 = adjustment < 0;
    if (v567) {
      v567 = adjusted >= 0;
    }
    if (v567) {
      adjusted = adjusted + 1;
    }
    return adjusted;
  }
  var i$$6 = JAM.call(parseInt, null, [startBase$$2], JAM.policy.p38);
  var k$$1 = 0;
  var lineOfText$$1 = "";
  var lineNum = "";
  var sepChar$$1 = " ";
  var aboveNum = "";
  groupSize$$2 = JAM.call(parseInt, null, [groupSize$$2], JAM.policy.p38);
  basePerLine$$2 = JAM.call(parseInt, null, [basePerLine$$2], JAM.policy.p38);
  numberingAdjustment = JAM.call(parseInt, null, [numberingAdjustment], JAM.policy.p38);
  var v197 = i$$6 < stopBase$$2;
  for (;v197;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v173 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for (;v173;) {
      var v168 = k$$1 < groupSize$$2;
      for (;v168;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p38);
        k$$1 = k$$1 + 1;
        v168 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      if (numberPosition$$1 == "above") {
        aboveNum = aboveNum + JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p41), "", groupSize$$2, tabIn$$3], JAM.policy.p40);
      }
      if (i$$6 >= stopBase$$2) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      v173 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v174 = outputWindow.document;
      JAM.call(v174.write, v174, [JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p41), "", 8, tabIn$$3], JAM.policy.p40) + lineOfText$$1 + "\n"], JAM.policy.p38);
      if (strands$$1 == "two") {
        var v176 = outputWindow.document;
        JAM.call(v176.write, v176, [JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p41), "", 8, tabIn$$3], JAM.policy.p40) + JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + "\n"], JAM.policy.p38);
        var v178 = outputWindow.document;
        JAM.call(v178.write, v178, ["\n"], JAM.policy.p23);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v180 = outputWindow.document;
        JAM.call(v180.write, v180, [lineOfText$$1 + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p41) + "\n"], JAM.policy.p38);
        if (strands$$1 == "two") {
          var v182 = outputWindow.document;
          JAM.call(v182.write, v182, [JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p41) + "\n"], JAM.policy.p38);
          var v184 = outputWindow.document;
          JAM.call(v184.write, v184, ["\n"], JAM.policy.p23);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v186 = outputWindow.document;
          JAM.call(v186.write, v186, [aboveNum + "\n"], JAM.policy.p38);
          var v188 = outputWindow.document;
          JAM.call(v188.write, v188, [lineOfText$$1 + "\n"], JAM.policy.p38);
          if (strands$$1 == "two") {
            var v190 = outputWindow.document;
            JAM.call(v190.write, v190, [JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + "\n"], JAM.policy.p38);
            var v192 = outputWindow.document;
            JAM.call(v192.write, v192, ["\n"], JAM.policy.p23);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v197 = i$$6 < stopBase$$2;
  }
  return true;
}
function writeGroupNumProtein(text$$13, tabIn$$4, groupSize$$3, basePerLine$$3, startBase$$3, stopBase$$3, numberPosition$$2) {
  var i$$7 = JAM.call(parseInt, null, [startBase$$3], JAM.policy.p38);
  var k$$2 = 0;
  var lineOfText$$2 = "";
  var lineNum$$1 = "";
  var sepChar$$2 = " ";
  var aboveNum$$1 = "";
  groupSize$$3 = JAM.call(parseInt, null, [groupSize$$3], JAM.policy.p38);
  basePerLine$$3 = JAM.call(parseInt, null, [basePerLine$$3], JAM.policy.p38);
  var v218 = i$$7 < stopBase$$3;
  for (;v218;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v206 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for (;v206;) {
      var v201 = k$$2 < groupSize$$3;
      for (;v201;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p38);
        k$$2 = k$$2 + 1;
        v201 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      if (numberPosition$$2 == "above") {
        aboveNum$$1 = aboveNum$$1 + JAM.call(rightNum, null, [i$$7, "", groupSize$$3, tabIn$$4], JAM.policy.p40);
      }
      if (i$$7 >= stopBase$$3) {
        break;
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      v206 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v207 = outputWindow.document;
      JAM.call(v207.write, v207, [JAM.call(rightNum, null, [lineNum$$1, "", 8, tabIn$$4], JAM.policy.p40) + lineOfText$$2 + "\n"], JAM.policy.p38);
    } else {
      if (numberPosition$$2 == "right") {
        var v209 = outputWindow.document;
        JAM.call(v209.write, v209, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p38);
      } else {
        if (numberPosition$$2 == "above") {
          var v211 = outputWindow.document;
          JAM.call(v211.write, v211, [aboveNum$$1 + "\n"], JAM.policy.p38);
          var v213 = outputWindow.document;
          JAM.call(v213.write, v213, [lineOfText$$2 + "\n"], JAM.policy.p38);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v218 = i$$7 < stopBase$$3;
  }
  return true;
}
function writeMutatedSequence(sequence$$13, components$$1, numMut, firstIndexToMutate, lastIndexToMutate) {
  var currentChar = "";
  var randNum = 0;
  var maxNum = 0;
  var needNewChar = "";
  var componentsIndex = 0;
  numMut = JAM.call(parseInt, null, [numMut], JAM.policy.p38);
  firstIndexToMutate = JAM.call(parseInt, null, [firstIndexToMutate], JAM.policy.p38);
  lastIndexToMutate = JAM.call(parseInt, null, [lastIndexToMutate], JAM.policy.p38);
  var v821 = sequence$$13.length <= firstIndexToMutate;
  if (!v821) {
    v821 = lastIndexToMutate < 0;
  }
  var v584 = v821;
  if (!v584) {
    v584 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v584) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v227 = i$$8 < numMut;
  for (;v227;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * maxNum], JAM.policy.p38);
    var v586 = randNum < firstIndexToMutate;
    if (!v586) {
      v586 = randNum > lastIndexToMutate;
    }
    if (v586) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v227 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p38);
    needNewChar = true;
    for (;needNewChar;) {
      componentsIndex = JAM.call(Math.round, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * components$$1.length], JAM.policy.p38);
      if (componentsIndex == components$$1.length) {
        componentsIndex = 0;
      }
      introspect(JAM.policy.p26) {
        var v590 = components$$1[componentsIndex]
      }
      if (v590 != currentChar) {
        needNewChar = false;
      }
    }
    var v591 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p22);
    introspect(JAM.policy.p26) {
      var v592 = components$$1[componentsIndex]
    }
    sequence$$13 = v591 + v592 + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p41);
    i$$8 = i$$8 + 1;
    v227 = i$$8 < numMut;
  }
  var v228 = outputWindow.document;
  JAM.call(v228.write, v228, [JAM.call(addReturns, null, [sequence$$13], JAM.policy.p38)], JAM.policy.p38);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v234 = j$$9 < lengthOut$$1;
  for (;v234;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * components$$2.length], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v231 = outputWindow.document;
      JAM.call(v231.write, v231, [sequence$$14 + "\n"], JAM.policy.p38);
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v234 = j$$9 < lengthOut$$1;
  }
  var v235 = outputWindow.document;
  JAM.call(v235.write, v235, [sequence$$14 + "\n"], JAM.policy.p38);
  return true;
}
function writeRestrictionSites(sequence$$15, arrayOfItems, dnaConformation) {
  var resultArray = JAM.new(Array, [], JAM.policy.p39);
  var lookAhead = 50;
  var lowerLimit = 0;
  var upperLimit = sequence$$15.length;
  var shiftValue = 0;
  var cutDistance;
  var matchExp;
  var matchPosition;
  var tempString$$1;
  var backGroundClass;
  var matchArray$$1;
  var timesFound = 0;
  if (dnaConformation == "circular") {
    shiftValue = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p22).length;
    sequence$$15 = JAM.call(sequence$$15.substring, sequence$$15, [sequence$$15.length - lookAhead, sequence$$15.length], JAM.policy.p41) + sequence$$15 + JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p22);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v241 = outputWindow.document;
  JAM.call(v241.write, v241, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p23);
  var v242 = outputWindow.document;
  JAM.call(v242.write, v242, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p38);
  var i$$9 = 0;
  var v259 = i$$9 < arrayOfItems.length;
  for (;v259;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v601 = arrayOfItems[i$$9]
    }
    matchExp = JAM.call(v601.match, v601, [/\/.+\//], JAM.policy.p38) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v963 = arrayOfItems[i$$9]
    }
    var v827 = JAM.call(v963.match, v963, [/\)\D*\d+/], JAM.policy.p38);
    var v602 = JAM.call(v827.toString, v827, [], JAM.policy.p39);
    cutDistance = JAM.call(parseFloat, null, [JAM.call(v602.replace, v602, [/\)\D*/, ""], JAM.policy.p40)], JAM.policy.p38);
    var v251 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    for (;v251;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v603 = matchPosition >= lowerLimit;
      if (v603) {
        v603 = matchPosition < upperLimit;
      }
      if (v603) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v251 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    }
    if (JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p38) != -1) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p40);
    }
    if (timesFound == 0) {
      backGroundClass = "none";
    } else {
      if (timesFound == 1) {
        backGroundClass = "one";
      } else {
        if (timesFound == 2) {
          backGroundClass = "two";
        } else {
          if (timesFound == 3) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v257 = outputWindow.document;
    var v1174 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p26) {
      var v1241 = arrayOfItems[i$$9]
    }
    var v1225 = JAM.call(v1241.match, v1241, [/\([^\(]+\)/], JAM.policy.p38);
    var v1208 = JAM.call(v1225.toString, v1225, [], JAM.policy.p39);
    JAM.call(v257.write, v257, [v1174 + JAM.call(v1208.replace, v1208, [/\(|\)/g, ""], JAM.policy.p40) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p38);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v259 = i$$9 < arrayOfItems.length;
  }
  var v260 = outputWindow.document;
  JAM.call(v260.write, v260, ["</tbody></table>\n"], JAM.policy.p23);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v261 = outputWindow.document;
  JAM.call(v261.write, v261, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p23);
  var v262 = outputWindow.document;
  JAM.call(v262.write, v262, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p38);
  var i$$10 = 0;
  var v272 = i$$10 < arrayOfItems$$1.length;
  for (;v272;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v612 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = JAM.call(v612.match, v612, [/\/[^\/]+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p38) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p38).length;
    }
    var percentage = 0;
    var v831 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v1066 = arrayOfItems$$1[i$$10]
    }
    if (v831 - JAM.call(parseFloat, null, [JAM.call(v1066.match, v1066, [/\d+/], JAM.policy.p38)], JAM.policy.p38) > 0) {
      var v267 = 100 * tempNumber;
      var v615 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v967 = arrayOfItems$$1[i$$10]
      }
      percentage = v267 / (v615 - JAM.call(parseFloat, null, [JAM.call(v967.match, v967, [/\d+/], JAM.policy.p38)], JAM.policy.p38));
    }
    var v270 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v1242 = arrayOfItems$$1[i$$10]
    }
    var v1226 = JAM.call(v1242.match, v1242, [/\([^\(]+\)\b/], JAM.policy.p38);
    var v1209 = JAM.call(v1226.toString, v1226, [], JAM.policy.p39);
    JAM.call(v270.write, v270, ["<tr><td>" + JAM.call(v1209.replace, v1209, [/\(|\)/g, ""], JAM.policy.p40) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p25) + "</td></tr>\n"], JAM.policy.p38);
    i$$10 = i$$10 + 1;
    v272 = i$$10 < arrayOfItems$$1.length;
  }
  var v273 = outputWindow.document;
  JAM.call(v273.write, v273, ["</tbody></table>\n"], JAM.policy.p23);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v280 = sequence$$17.length > 0;
  for (;v280;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * maxNum$$1], JAM.policy.p38);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p38);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p22);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p41);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v277 = outputWindow.document;
      JAM.call(v277.write, v277, [tempSeq + "\n"], JAM.policy.p38);
      tempSeq = "";
    }
    v280 = sequence$$17.length > 0;
  }
  var v281 = outputWindow.document;
  JAM.call(v281.write, v281, [tempSeq + "\n"], JAM.policy.p38);
  return true;
}
function windowExtract(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = JAM.new(Array, [], JAM.policy.p39);
  if (JAM.call(testScript, null, [], JAM.policy.p39) == false) {
    return false;
  }
  var v1254 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1243 = v1254[0]
  }
  var v1227 = v1243.elements;
  introspect(JAM.policy.p26) {
    var v1210 = v1227[0]
  }
  var v1127 = JAM.call(checkFormElement, null, [v1210], JAM.policy.p38) == false;
  if (!v1127) {
    var v1263 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1255 = v1263[0]
    }
    var v1244 = v1255.elements;
    introspect(JAM.policy.p26) {
      var v1228 = v1244[0]
    }
    v1127 = JAM.call(checkSequenceLength, null, [v1228.value, maxInput$$3], JAM.policy.p41) == false;
  }
  var v1068 = v1127;
  if (!v1068) {
    var v1245 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1229 = v1245[0]
    }
    var v1212 = v1229.elements;
    introspect(JAM.policy.p26) {
      var v1180 = v1212[1]
    }
    v1068 = JAM.call(checkFormElement, null, [v1180], JAM.policy.p38) == false;
  }
  var v969 = v1068;
  if (!v969) {
    var v1230 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1213 = v1230[0]
    }
    var v1181 = v1213.elements;
    introspect(JAM.policy.p26) {
      var v1130 = v1181[3]
    }
    v969 = JAM.call(checkFormElement, null, [v1130], JAM.policy.p38) == false;
  }
  var v836 = v969;
  if (!v836) {
    var v1246 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1231 = v1246[0]
    }
    var v1214 = v1231.elements;
    introspect(JAM.policy.p26) {
      var v1182 = v1214[1]
    }
    var v1131 = v1182.value;
    v836 = JAM.call(verifyMaxDigits, null, [JAM.call(v1131.replace, v1131, [/[^\d]/g, ""], JAM.policy.p40), maxInput$$3], JAM.policy.p41) == false;
  }
  var v624 = v836;
  if (!v624) {
    var v1232 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1215 = v1232[0]
    }
    var v1183 = v1215.elements;
    introspect(JAM.policy.p26) {
      var v1132 = v1183[3]
    }
    var v1072 = v1132.value;
    v624 = JAM.call(verifyMaxDigits, null, [JAM.call(v1072.replace, v1072, [/[^\d]/g, ""], JAM.policy.p40), maxInput$$3], JAM.policy.p41) == false;
  }
  if (v624) {
    return false;
  }
  var v1133 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1073 = v1133[0]
  }
  var v973 = v1073.elements;
  introspect(JAM.policy.p26) {
    var v839 = v973[1]
  }
  var v625 = v839.value;
  var windowSize = JAM.call(parseInt, null, [JAM.call(v625.replace, v625, [/[^\d]/g, ""], JAM.policy.p40)], JAM.policy.p38);
  var v1134 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1074 = v1134[0]
  }
  var v974 = v1074.elements;
  introspect(JAM.policy.p26) {
    var v840 = v974[3]
  }
  var v626 = v840.value;
  var position = JAM.call(parseInt, null, [JAM.call(v626.replace, v626, [/[^\d]/g, ""], JAM.policy.p40)], JAM.policy.p38);
  var v975 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v841 = v975[0]
  }
  var v627 = v841.elements;
  introspect(JAM.policy.p26) {
    var v287 = v627[2]
  }
  var orientation = v287.value;
  var start$$4;
  var end$$1;
  if (orientation == "ending") {
    end$$1 = position;
    start$$4 = end$$1 - windowSize + 1;
  } else {
    if (orientation == "starting") {
      start$$4 = position;
      end$$1 = start$$4 + windowSize - 1;
    } else {
      if (orientation == "centered") {
        start$$4 = position - JAM.call(Math.round, Math, [windowSize / 2], JAM.policy.p38) + 1;
        end$$1 = start$$4 + windowSize - 1;
      }
    }
  }
  JAM.call(ranges.push, ranges, [JAM.new(Range, [start$$4, end$$1], JAM.policy.p41)], JAM.policy.p38);
  JAM.call(openWindow, null, ["Window Extractor DNA"], JAM.policy.p23);
  JAM.call(openPre, null, [], JAM.policy.p39);
  var v1075 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v976 = v1075[0]
  }
  var v843 = v976.elements;
  introspect(JAM.policy.p26) {
    var v630 = v843[0]
  }
  var arrayOfFasta$$1 = JAM.call(getArrayOfFasta, null, [v630.value], JAM.policy.p38);
  var i$$11 = 0;
  var v303 = i$$11 < arrayOfFasta$$1.length;
  for (;v303;) {
    introspect(JAM.policy.p26) {
      var v297 = arrayOfFasta$$1[i$$11]
    }
    newDna = JAM.call(getSequenceFromFasta, null, [v297], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      var v298 = arrayOfFasta$$1[i$$11]
    }
    title = JAM.call(getTitleFromFasta, null, [v298], JAM.policy.p38);
    JAM.call(verifyDna, null, [newDna], JAM.policy.p38);
    newDna = JAM.call(removeNonDna, null, [newDna], JAM.policy.p38);
    var v299 = outputWindow.document;
    JAM.call(v299.write, v299, [JAM.call(getFastaTitleFromTitleAndSequence, null, [title, newDna], JAM.policy.p41)], JAM.policy.p38);
    var v1184 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1135 = v1184[0]
    }
    var v1076 = v1135.elements;
    introspect(JAM.policy.p26) {
      var v977 = v1076[7]
    }
    var v844 = v977.options;
    var v1185 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1136 = v1185[0]
    }
    var v1077 = v1136.elements;
    introspect(JAM.policy.p26) {
      var v978 = v1077[7]
    }
    var v845 = v978.selectedIndex;
    introspect(JAM.policy.p26) {
      var v632 = v844[v845]
    }
    var v301 = v632.value;
    var v1186 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1137 = v1186[0]
    }
    var v1078 = v1137.elements;
    introspect(JAM.policy.p26) {
      var v979 = v1078[8]
    }
    var v846 = v979.options;
    var v1187 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1138 = v1187[0]
    }
    var v1079 = v1138.elements;
    introspect(JAM.policy.p26) {
      var v980 = v1079[8]
    }
    var v847 = v980.selectedIndex;
    introspect(JAM.policy.p26) {
      var v633 = v846[v847]
    }
    JAM.call(writeSequenceRanges, null, [newDna, ranges, v301, v633.value], JAM.policy.p41);
    i$$11 = i$$11 + 1;
    v303 = i$$11 < arrayOfFasta$$1.length;
  }
  JAM.call(closePre, null, [], JAM.policy.p39);
  JAM.call(closeWindow, null, [], JAM.policy.p39);
  return true;
}
function rangeExtract(theDocument$$1) {
  var newDna$$1 = "";
  var maxInput$$4 = 5E5;
  var matchFound$$1 = false;
  var ranges$$1 = JAM.new(Array, [], JAM.policy.p39);
  if (JAM.call(testScript, null, [], JAM.policy.p39) == false) {
    return false;
  }
  var v1216 = theDocument$$1.forms;
  introspect(JAM.policy.p26) {
    var v1188 = v1216[0]
  }
  var v1139 = v1188.elements;
  introspect(JAM.policy.p26) {
    var v1080 = v1139[0]
  }
  var v848 = JAM.call(checkFormElement, null, [v1080], JAM.policy.p38) == false;
  if (!v848) {
    var v1233 = theDocument$$1.forms;
    introspect(JAM.policy.p26) {
      var v1217 = v1233[0]
    }
    var v1189 = v1217.elements;
    introspect(JAM.policy.p26) {
      var v1140 = v1189[0]
    }
    v848 = JAM.call(checkSequenceLength, null, [v1140.value, maxInput$$4], JAM.policy.p41) == false;
  }
  var v636 = v848;
  if (!v636) {
    var v1190 = theDocument$$1.forms;
    introspect(JAM.policy.p26) {
      var v1141 = v1190[0]
    }
    var v1082 = v1141.elements;
    introspect(JAM.policy.p26) {
      var v984 = v1082[1]
    }
    v636 = JAM.call(checkFormElement, null, [v984], JAM.policy.p38) == false;
  }
  if (v636) {
    return false;
  }
  var v1083 = theDocument$$1.forms;
  introspect(JAM.policy.p26) {
    var v985 = v1083[0]
  }
  var v851 = v985.elements;
  introspect(JAM.policy.p26) {
    var v637 = v851[1]
  }
  var v306 = v637.value;
  var arrayOfRanges = JAM.call(v306.split, v306, [/,/], JAM.policy.p38);
  var arrayOfStartAndEnd;
  var i$$12 = 0;
  var v313 = i$$12 < arrayOfRanges.length;
  for (;v313;) {
    introspect(JAM.policy.p26) {
      var v307 = arrayOfRanges[i$$12]
    }
    arrayOfStartAndEnd = JAM.call(v307.split, v307, [/\.\./], JAM.policy.p38);
    if (arrayOfStartAndEnd.length == 1) {
      matchFound$$1 = true;
      introspect(JAM.policy.p26) {
        var v640 = arrayOfStartAndEnd[0]
      }
      introspect(JAM.policy.p26) {
        var v641 = arrayOfStartAndEnd[0]
      }
      JAM.call(ranges$$1.push, ranges$$1, [JAM.new(Range, [v640, v641], JAM.policy.p41)], JAM.policy.p38);
    } else {
      if (arrayOfStartAndEnd.length == 2) {
        matchFound$$1 = true;
        introspect(JAM.policy.p26) {
          var v643 = arrayOfStartAndEnd[0]
        }
        introspect(JAM.policy.p26) {
          var v644 = arrayOfStartAndEnd[1]
        }
        JAM.call(ranges$$1.push, ranges$$1, [JAM.new(Range, [v643, v644], JAM.policy.p41)], JAM.policy.p38);
      } else {
        introspect(JAM.policy.p26) {
          var v645 = arrayOfRanges[i$$12]
        }
        JAM.call(alert, null, ["The following range entry was ignored: " + v645], JAM.policy.p38);
      }
    }
    i$$12 = i$$12 + 1;
    v313 = i$$12 < arrayOfRanges.length;
  }
  if (matchFound$$1 == false) {
    JAM.call(alert, null, ["No ranges were entered."], JAM.policy.p23);
    return false;
  }
  JAM.call(openWindow, null, ["Range Extractor DNA"], JAM.policy.p23);
  JAM.call(openPre, null, [], JAM.policy.p39);
  var v1084 = theDocument$$1.forms;
  introspect(JAM.policy.p26) {
    var v986 = v1084[0]
  }
  var v852 = v986.elements;
  introspect(JAM.policy.p26) {
    var v647 = v852[0]
  }
  var arrayOfFasta$$2 = JAM.call(getArrayOfFasta, null, [v647.value], JAM.policy.p38);
  i$$12 = 0;
  var v322 = i$$12 < arrayOfFasta$$2.length;
  for (;v322;) {
    introspect(JAM.policy.p26) {
      var v316 = arrayOfFasta$$2[i$$12]
    }
    newDna$$1 = JAM.call(getSequenceFromFasta, null, [v316], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      var v317 = arrayOfFasta$$2[i$$12]
    }
    title = JAM.call(getTitleFromFasta, null, [v317], JAM.policy.p38);
    JAM.call(verifyDna, null, [newDna$$1], JAM.policy.p38);
    newDna$$1 = JAM.call(removeNonDna, null, [newDna$$1], JAM.policy.p38);
    var v318 = outputWindow.document;
    JAM.call(v318.write, v318, [JAM.call(getFastaTitleFromTitleAndSequence, null, [title, newDna$$1], JAM.policy.p41)], JAM.policy.p38);
    var v1191 = theDocument$$1.forms;
    introspect(JAM.policy.p26) {
      var v1142 = v1191[0]
    }
    var v1085 = v1142.elements;
    introspect(JAM.policy.p26) {
      var v987 = v1085[5]
    }
    var v853 = v987.options;
    var v1192 = theDocument$$1.forms;
    introspect(JAM.policy.p26) {
      var v1143 = v1192[0]
    }
    var v1086 = v1143.elements;
    introspect(JAM.policy.p26) {
      var v988 = v1086[5]
    }
    var v854 = v988.selectedIndex;
    introspect(JAM.policy.p26) {
      var v649 = v853[v854]
    }
    var v320 = v649.value;
    var v1193 = theDocument$$1.forms;
    introspect(JAM.policy.p26) {
      var v1144 = v1193[0]
    }
    var v1087 = v1144.elements;
    introspect(JAM.policy.p26) {
      var v989 = v1087[6]
    }
    var v855 = v989.options;
    var v1194 = theDocument$$1.forms;
    introspect(JAM.policy.p26) {
      var v1145 = v1194[0]
    }
    var v1088 = v1145.elements;
    introspect(JAM.policy.p26) {
      var v990 = v1088[6]
    }
    var v856 = v990.selectedIndex;
    introspect(JAM.policy.p26) {
      var v650 = v855[v856]
    }
    JAM.call(writeSequenceRanges, null, [newDna$$1, ranges$$1, v320, v650.value], JAM.policy.p41);
    i$$12 = i$$12 + 1;
    v322 = i$$12 < arrayOfFasta$$2.length;
  }
  JAM.call(closePre, null, [], JAM.policy.p39);
  JAM.call(closeWindow, null, [], JAM.policy.p39);
  return true;
}
function writeSequenceRanges(sequence$$18, ranges$$2, strand, segmentType) {
  var rangeGroup = JAM.new(RangeGroup, [strand, segmentType], JAM.policy.p41);
  var center_base = JAM.call(Math.round, Math, [sequence$$18.length / 2], JAM.policy.p38);
  var i$$13 = 0;
  var v337 = i$$13 < ranges$$2.length;
  for (;v337;) {
    introspect(JAM.policy.p26) {
      var v324 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p26) {
      var v991 = ranges$$2[i$$13]
    }
    var v857 = v991.start;
    var v654 = JAM.call(v857.toString, v857, [], JAM.policy.p39);
    var v1285 = JAM.call(v654.replace, v654, [/start|begin/gi, 1], JAM.policy.p40);
    v324.start = v1285;
    introspect(JAM.policy.p26) {
      var v325 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p26) {
      var v992 = ranges$$2[i$$13]
    }
    var v858 = v992.start;
    var v655 = JAM.call(v858.toString, v858, [], JAM.policy.p39);
    var v1286 = JAM.call(v655.replace, v655, [/stop|end/gi, sequence$$18.length], JAM.policy.p41);
    v325.start = v1286;
    introspect(JAM.policy.p26) {
      var v326 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p26) {
      var v993 = ranges$$2[i$$13]
    }
    var v859 = v993.start;
    var v657 = JAM.call(v859.toString, v859, [], JAM.policy.p39);
    var v1287 = JAM.call(v657.replace, v657, [/length/gi, sequence$$18.length], JAM.policy.p41);
    v326.start = v1287;
    introspect(JAM.policy.p26) {
      var v327 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p26) {
      var v994 = ranges$$2[i$$13]
    }
    var v860 = v994.start;
    var v659 = JAM.call(v860.toString, v860, [], JAM.policy.p39);
    var v1288 = JAM.call(v659.replace, v659, [/middle|center|centre/gi, center_base], JAM.policy.p41);
    v327.start = v1288;
    introspect(JAM.policy.p26) {
      var v328 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p26) {
      var v995 = ranges$$2[i$$13]
    }
    var v861 = v995.stop;
    var v660 = JAM.call(v861.toString, v861, [], JAM.policy.p39);
    var v1289 = JAM.call(v660.replace, v660, [/start|begin/gi, 1], JAM.policy.p40);
    v328.stop = v1289;
    introspect(JAM.policy.p26) {
      var v329 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p26) {
      var v996 = ranges$$2[i$$13]
    }
    var v862 = v996.stop;
    var v661 = JAM.call(v862.toString, v862, [], JAM.policy.p39);
    var v1290 = JAM.call(v661.replace, v661, [/stop|end/gi, sequence$$18.length], JAM.policy.p41);
    v329.stop = v1290;
    introspect(JAM.policy.p26) {
      var v330 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p26) {
      var v997 = ranges$$2[i$$13]
    }
    var v863 = v997.stop;
    var v663 = JAM.call(v863.toString, v863, [], JAM.policy.p39);
    var v1291 = JAM.call(v663.replace, v663, [/length/gi, sequence$$18.length], JAM.policy.p41);
    v330.stop = v1291;
    introspect(JAM.policy.p26) {
      var v331 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p26) {
      var v998 = ranges$$2[i$$13]
    }
    var v864 = v998.stop;
    var v665 = JAM.call(v864.toString, v864, [], JAM.policy.p39);
    var v1292 = JAM.call(v665.replace, v665, [/middle|center|centre/gi, center_base], JAM.policy.p41);
    v331.stop = v1292;
    try {
      introspect(JAM.policy.p26) {
        var v332 = ranges$$2[i$$13]
      }
      introspect(JAM.policy.p26) {
        var v1089 = ranges$$2[i$$13]
      }
      var v999 = v1089.start;
      var v865 = JAM.call(v999.toString, v999, [], JAM.policy.p39);
      if (JAM.isEval(eval)) {
        var v666 = eval("introspect(JAM.policy.pFull) { " + v865 + " }")
      } else {
        var v666 = JAM.call(eval, null, [v865])
      }
      var v1293 = JAM.call(parseInt, null, [v666], JAM.policy.p38);
      v332.start = v1293;
    } catch (e$$5) {
      introspect(JAM.policy.p26) {
        var v866 = ranges$$2[i$$13]
      }
      JAM.call(alert, null, ["Could not evaluate the following expression: " + v866.start], JAM.policy.p38);
      return false;
    }
    try {
      introspect(JAM.policy.p26) {
        var v334 = ranges$$2[i$$13]
      }
      introspect(JAM.policy.p26) {
        var v1090 = ranges$$2[i$$13]
      }
      var v1000 = v1090.stop;
      var v867 = JAM.call(v1000.toString, v1000, [], JAM.policy.p39);
      if (JAM.isEval(eval)) {
        var v668 = eval("introspect(JAM.policy.pFull) { " + v867 + " }")
      } else {
        var v668 = JAM.call(eval, null, [v867])
      }
      var v1294 = JAM.call(parseInt, null, [v668], JAM.policy.p38);
      v334.stop = v1294;
    } catch (e$$6) {
      introspect(JAM.policy.p26) {
        var v868 = ranges$$2[i$$13]
      }
      JAM.call(alert, null, ["Could not evaluate the following expression: " + v868.stop], JAM.policy.p38);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v336 = ranges$$2[i$$13]
    }
    JAM.call(rangeGroup.addRange, rangeGroup, [v336], JAM.policy.p38);
    i$$13 = i$$13 + 1;
    v337 = i$$13 < ranges$$2.length;
  }
  JAM.call(rangeGroup.writeRanges, rangeGroup, [sequence$$18], JAM.policy.p38);
  return;
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = JAM.new(Array, [], JAM.policy.p39);
  if (this.start == this.stop) {
    if (this.start < 1) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.start + " is less than 1"], JAM.policy.p38);
    }
    if (this.start > sequence$$19.length) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.start + " is greater than the sequence length"], JAM.policy.p38);
    }
  } else {
    if (this.start < 1) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.start + " is less than 1"], JAM.policy.p38);
    }
    if (this.stop < 1) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.stop + " is less than 1"], JAM.policy.p38);
    }
    if (this.start > sequence$$19.length) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.start + " is greater than the sequence length"], JAM.policy.p38);
    }
    if (this.stop > sequence$$19.length) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.stop + " is greater than the sequence length"], JAM.policy.p38);
    }
    if (this.start > this.stop) {
      problem = true;
      JAM.call(warnings.push, warnings, ["stop position is less than start position in range " + this.start + " to " + this.stop], JAM.policy.p38);
    }
  }
  if (problem) {
    JAM.call(alert, null, ["An entry was skipped because of the following:\n" + JAM.call(warnings.join, warnings, [",\n"], JAM.policy.p23)], JAM.policy.p38);
    return false;
  } else {
    if (this.start == this.stop) {
      return JAM.call(sequence$$19.charAt, sequence$$19, [this.start - 1], JAM.policy.p38);
    } else {
      return JAM.call(sequence$$19.substring, sequence$$19, [this.start - 1, this.stop], JAM.policy.p41);
    }
  }
  return;
}
function getTitle() {
  if (this.start == this.stop) {
    return "&gt;base " + this.start;
  } else {
    return "&gt;base " + this.start + " to " + this.stop;
  }
  return;
}
function Range(start$$5, stop) {
  this.start = start$$5;
  this.stop = stop;
  return;
}
function addRange(range$$5) {
  var v362 = this.ranges;
  JAM.call(v362.push, v362, [range$$5], JAM.policy.p38);
  return;
}
function writeRanges(sequence$$20) {
  function v9(str$$15, p1$$9, offset$$17, s$$11) {
    return JAM.call(sequence$$20.substring, sequence$$20, [offset$$17, offset$$17 + p1$$9.length], JAM.policy.p41);
  }
  function v8(str$$14, p1$$8, p2$$3, offset$$16, s$$10) {
    return p1$$8 + JAM.call(sequence$$20.substring, sequence$$20, [p1$$8.length, p1$$8.length + p2$$3.length], JAM.policy.p41);
  }
  function v7(str$$13, p1$$7, offset$$15, s$$9) {
    return JAM.call(getRandomSequence, null, [["g", "a", "c", "t"], p1$$7.length], JAM.policy.p41);
  }
  function v6(str$$12, p1$$6, p2$$2, offset$$14, s$$8) {
    return p1$$6 + JAM.call(getRandomSequence, null, [["g", "a", "c", "t"], p2$$2.length], JAM.policy.p41);
  }
  function v5(str$$11, p1$$5, offset$$13, s$$7) {
    return JAM.call(p1$$5.toLowerCase, p1$$5, [], JAM.policy.p39);
  }
  function v4(str$$10, p1$$4, p2$$1, offset$$12, s$$6) {
    return p1$$4 + JAM.call(p2$$1.toLowerCase, p2$$1, [], JAM.policy.p39);
  }
  function v3(str$$9, p1$$3, offset$$11, s$$5) {
    return JAM.call(p1$$3.toUpperCase, p1$$3, [], JAM.policy.p39);
  }
  function v2(str$$8, p1$$2, p2, offset$$10, s$$4) {
    return p1$$2 + JAM.call(p2.toUpperCase, p2, [], JAM.policy.p39);
  }
  var sequenceArray$$1 = JAM.new(Array, [], JAM.policy.p39);
  if (this.type == "new_sequence") {
    var i$$14 = 0;
    var v376 = i$$14 < this.ranges.length;
    for (;v376;) {
      var v1002 = this.ranges;
      introspect(JAM.policy.p26) {
        var v880 = v1002[i$$14]
      }
      if (JAM.call(v880.getSequence, v880, [sequence$$20], JAM.policy.p38) != "") {
        var v881 = this.ranges;
        introspect(JAM.policy.p26) {
          var v708 = v881[i$$14]
        }
        JAM.call(sequenceArray$$1.push, sequenceArray$$1, [JAM.call(v708.getSequence, v708, [sequence$$20], JAM.policy.p38)], JAM.policy.p38);
      }
      i$$14 = i$$14 + 1;
      v376 = i$$14 < this.ranges.length;
    }
    if (this.strand == "reverse") {
      var v377 = outputWindow.document;
      JAM.call(v377.write, v377, [JAM.call(addReturns, null, [JAM.call(reverse, null, [JAM.call(complement, null, [JAM.call(sequenceArray$$1.join, sequenceArray$$1, [""], JAM.policy.p23)], JAM.policy.p38)], JAM.policy.p38)], JAM.policy.p38) + "\n\n"], JAM.policy.p38);
    } else {
      var v379 = outputWindow.document;
      JAM.call(v379.write, v379, [JAM.call(addReturns, null, [JAM.call(sequenceArray$$1.join, sequenceArray$$1, [""], JAM.policy.p23)], JAM.policy.p38) + "\n\n"], JAM.policy.p38);
    }
    return true;
  }
  if (this.type == "separate") {
    i$$14 = 0;
    var v391 = i$$14 < this.ranges.length;
    for (;v391;) {
      var v1004 = this.ranges;
      introspect(JAM.policy.p26) {
        var v886 = v1004[i$$14]
      }
      if (JAM.call(v886.getSequence, v886, [sequence$$20], JAM.policy.p38) != "") {
        var v383 = outputWindow.document;
        var v1005 = this.ranges;
        introspect(JAM.policy.p26) {
          var v887 = v1005[i$$14]
        }
        JAM.call(v383.write, v383, [JAM.call(v887.getTitle, v887, [], JAM.policy.p39) + "\n"], JAM.policy.p38);
        if (this.strand == "reverse") {
          var v385 = outputWindow.document;
          var v1195 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1146 = v1195[i$$14]
          }
          JAM.call(v385.write, v385, [JAM.call(reverse, null, [JAM.call(complement, null, [JAM.call(addReturns, null, [JAM.call(v1146.getSequence, v1146, [sequence$$20], JAM.policy.p38)], JAM.policy.p38)], JAM.policy.p38)], JAM.policy.p38) + "\n\n"], JAM.policy.p38);
        } else {
          var v387 = outputWindow.document;
          var v1093 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1007 = v1093[i$$14]
          }
          JAM.call(v387.write, v387, [JAM.call(addReturns, null, [JAM.call(v1007.getSequence, v1007, [sequence$$20], JAM.policy.p38)], JAM.policy.p38) + "\n\n"], JAM.policy.p38);
        }
      }
      i$$14 = i$$14 + 1;
      v391 = i$$14 < this.ranges.length;
    }
    return true;
  }
  if (this.type == "uppercased") {
    var re$$3;
    sequence$$20 = JAM.call(sequence$$20.toLowerCase, sequence$$20, [], JAM.policy.p39);
    i$$14 = 0;
    var v397 = i$$14 < this.ranges.length;
    for (;v397;) {
      var v1008 = this.ranges;
      introspect(JAM.policy.p26) {
        var v892 = v1008[i$$14]
      }
      if (JAM.call(v892.getSequence, v892, [sequence$$20], JAM.policy.p38) != "") {
        var v1009 = this.ranges;
        introspect(JAM.policy.p26) {
          var v893 = v1009[i$$14]
        }
        if (v893.start > 1) {
          var v1196 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1147 = v1196[i$$14]
          }
          var v725 = "(.{" + (v1147.start - 1) + "})\\B(.{";
          var v1148 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1095 = v1148[i$$14]
          }
          var v1011 = v1095.stop;
          var v1149 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1096 = v1149[i$$14]
          }
          re$$3 = v725 + (v1011 - v1096.start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p38);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v2], JAM.policy.p41);
        } else {
          var v1150 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1097 = v1150[i$$14]
          }
          var v1013 = v1097.stop;
          var v1151 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1098 = v1151[i$$14]
          }
          re$$3 = "(.{" + (v1013 - v1098.start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p38);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v3], JAM.policy.p41);
        }
      }
      i$$14 = i$$14 + 1;
      v397 = i$$14 < this.ranges.length;
    }
    if (this.strand == "reverse") {
      var v398 = outputWindow.document;
      JAM.call(v398.write, v398, [JAM.call(reverse, null, [JAM.call(complement, null, [JAM.call(addReturns, null, [sequence$$20], JAM.policy.p38)], JAM.policy.p38)], JAM.policy.p38) + "\n\n"], JAM.policy.p38);
    } else {
      var v400 = outputWindow.document;
      JAM.call(v400.write, v400, [JAM.call(addReturns, null, [sequence$$20], JAM.policy.p38) + "\n\n"], JAM.policy.p38);
    }
    return true;
  }
  if (this.type == "lowercased") {
    sequence$$20 = JAM.call(sequence$$20.toUpperCase, sequence$$20, [], JAM.policy.p39);
    i$$14 = 0;
    var v408 = i$$14 < this.ranges.length;
    for (;v408;) {
      var v1016 = this.ranges;
      introspect(JAM.policy.p26) {
        var v900 = v1016[i$$14]
      }
      if (JAM.call(v900.getSequence, v900, [sequence$$20], JAM.policy.p38) != "") {
        var v1017 = this.ranges;
        introspect(JAM.policy.p26) {
          var v901 = v1017[i$$14]
        }
        if (v901.start > 1) {
          var v1197 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1152 = v1197[i$$14]
          }
          var v736 = "(.{" + (v1152.start - 1) + "})\\B(.{";
          var v1153 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1100 = v1153[i$$14]
          }
          var v1019 = v1100.stop;
          var v1154 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1101 = v1154[i$$14]
          }
          re$$3 = v736 + (v1019 - v1101.start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p38);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v4], JAM.policy.p41);
        } else {
          var v1155 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1102 = v1155[i$$14]
          }
          var v1021 = v1102.stop;
          var v1156 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1103 = v1156[i$$14]
          }
          re$$3 = "(.{" + (v1021 - v1103.start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p38);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v5], JAM.policy.p41);
        }
      }
      i$$14 = i$$14 + 1;
      v408 = i$$14 < this.ranges.length;
    }
    if (this.strand == "reverse") {
      var v409 = outputWindow.document;
      JAM.call(v409.write, v409, [JAM.call(reverse, null, [JAM.call(complement, null, [JAM.call(addReturns, null, [sequence$$20], JAM.policy.p38)], JAM.policy.p38)], JAM.policy.p38) + "\n\n"], JAM.policy.p38);
    } else {
      var v411 = outputWindow.document;
      JAM.call(v411.write, v411, [JAM.call(addReturns, null, [sequence$$20], JAM.policy.p38) + "\n\n"], JAM.policy.p38);
    }
    return true;
  }
  if (this.type == "randomized") {
    i$$14 = 0;
    var v419 = i$$14 < this.ranges.length;
    for (;v419;) {
      var v1024 = this.ranges;
      introspect(JAM.policy.p26) {
        var v908 = v1024[i$$14]
      }
      if (JAM.call(v908.getSequence, v908, [sequence$$20], JAM.policy.p38) != "") {
        var v1025 = this.ranges;
        introspect(JAM.policy.p26) {
          var v909 = v1025[i$$14]
        }
        if (v909.start > 1) {
          var v1198 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1157 = v1198[i$$14]
          }
          var v747 = "(.{" + (v1157.start - 1) + "})\\B(.{";
          var v1158 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1105 = v1158[i$$14]
          }
          var v1027 = v1105.stop;
          var v1159 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1106 = v1159[i$$14]
          }
          re$$3 = v747 + (v1027 - v1106.start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p38);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v6], JAM.policy.p41);
        } else {
          var v1160 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1107 = v1160[i$$14]
          }
          var v1029 = v1107.stop;
          var v1161 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1108 = v1161[i$$14]
          }
          re$$3 = "(.{" + (v1029 - v1108.start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p38);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v7], JAM.policy.p41);
        }
      }
      i$$14 = i$$14 + 1;
      v419 = i$$14 < this.ranges.length;
    }
    if (this.strand == "reverse") {
      var v420 = outputWindow.document;
      JAM.call(v420.write, v420, [JAM.call(reverse, null, [JAM.call(complement, null, [JAM.call(addReturns, null, [sequence$$20], JAM.policy.p38)], JAM.policy.p38)], JAM.policy.p38) + "\n\n"], JAM.policy.p38);
    } else {
      var v422 = outputWindow.document;
      JAM.call(v422.write, v422, [JAM.call(addReturns, null, [sequence$$20], JAM.policy.p38) + "\n\n"], JAM.policy.p38);
    }
    return true;
  }
  if (this.type == "preserved") {
    var randomSequence = JAM.call(getRandomSequence, null, [["g", "a", "c", "t"], sequence$$20.length], JAM.policy.p41);
    i$$14 = 0;
    var v432 = i$$14 < this.ranges.length;
    for (;v432;) {
      var v1032 = this.ranges;
      introspect(JAM.policy.p26) {
        var v916 = v1032[i$$14]
      }
      if (JAM.call(v916.getSequence, v916, [sequence$$20], JAM.policy.p38) != "") {
        var v1033 = this.ranges;
        introspect(JAM.policy.p26) {
          var v917 = v1033[i$$14]
        }
        if (v917.start > 1) {
          var v1199 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1162 = v1199[i$$14]
          }
          var v758 = "(.{" + (v1162.start - 1) + "})\\B(.{";
          var v1163 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1110 = v1163[i$$14]
          }
          var v1035 = v1110.stop;
          var v1164 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1111 = v1164[i$$14]
          }
          re$$3 = v758 + (v1035 - v1111.start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p38);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v8], JAM.policy.p41);
        } else {
          var v1165 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1112 = v1165[i$$14]
          }
          var v1037 = v1112.stop;
          var v1166 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1113 = v1166[i$$14]
          }
          re$$3 = "(.{" + (v1037 - v1113.start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p38);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v9], JAM.policy.p41);
        }
      }
      i$$14 = i$$14 + 1;
      v432 = i$$14 < this.ranges.length;
    }
    if (this.strand == "reverse") {
      var v433 = outputWindow.document;
      JAM.call(v433.write, v433, [JAM.call(reverse, null, [JAM.call(complement, null, [JAM.call(addReturns, null, [randomSequence], JAM.policy.p38)], JAM.policy.p38)], JAM.policy.p38) + "\n\n"], JAM.policy.p38);
    } else {
      var v435 = outputWindow.document;
      JAM.call(v435.write, v435, [JAM.call(addReturns, null, [randomSequence], JAM.policy.p38) + "\n\n"], JAM.policy.p38);
    }
    return true;
  }
  return;
}
function RangeGroup(strand$$1, type$$25) {
  this.strand = strand$$1;
  this.type = type$$25;
  var v1295 = JAM.new(Array, [], JAM.policy.p39);
  this.ranges = v1295;
  return;
}
JAM.new(Range, [0, 0], JAM.policy.p22);
Range.prototype.getSequence = getSequence;
Range.prototype.getTitle = getTitle;
JAM.new(RangeGroup, ["", ""], JAM.policy.p24);
RangeGroup.prototype.addRange = addRange;
RangeGroup.prototype.writeRanges = writeRanges;
JAM.set(document, "onload", v10);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p23), "onclick", v11);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p23), "onclick", v12)

