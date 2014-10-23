// sms2-range-extract-protein.js
function v12() {
  var v839 = document.forms;
  introspect(JAM.policy.p26) {
    var v700 = v839[0]
  }
  var v405 = v700.elements;
  introspect(JAM.policy.p26) {
    var v13 = v405[0]
  }
  v13.value = " ";
  var v840 = document.forms;
  introspect(JAM.policy.p26) {
    var v701 = v840[0]
  }
  var v406 = v701.elements;
  introspect(JAM.policy.p26) {
    var v14 = v406[1]
  }
  v14.value = " ";
  return;
}
function v11() {
  try {
    JAM.call(rangeExtract, null, [document], JAM.policy.p38);
  } catch (e$$7) {
    JAM.call(alert, null, ["The following error was encountered: " + e$$7], JAM.policy.p38);
  }
  return;
}
function v10() {
  var v16 = document.main_form.main_submit;
  JAM.call(v16.focus, v16, [], JAM.policy.p39);
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p40);
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  introspect(JAM.policy.p26) {
    var v17 = arrayOfSequences[0]
  }
  var lengthOfAlign = v17.length;
  if (arrayOfSequences.length < 2) {
    JAM.call(alert, null, ["Please enter an alignment consisting of at least two sequences."], JAM.policy.p23);
    return false;
  }
  var i$$1 = 0;
  var v20 = i$$1 < arrayOfTitles.length;
  for (;v20;) {
    introspect(JAM.policy.p26) {
      var v937 = arrayOfTitles[i$$1]
    }
    var v702 = JAM.call(v937.search, v937, [/\S/], JAM.policy.p38) == -1;
    if (!v702) {
      introspect(JAM.policy.p26) {
        var v938 = arrayOfSequences[i$$1]
      }
      v702 = JAM.call(v938.search, v938, [/\S/], JAM.policy.p38) == -1;
    }
    var v410 = v702;
    if (!v410) {
      introspect(JAM.policy.p26) {
        var v844 = arrayOfSequences[i$$1]
      }
      v410 = v844.length != lengthOfAlign;
    }
    if (v410) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p23);
      return false;
    }
    i$$1 = i$$1 + 1;
    v20 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v939 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p38) == -1;
  if (!v939) {
    v939 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p38) == -1;
  }
  var v845 = v939;
  if (!v845) {
    v845 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p38) == -1;
  }
  var v705 = v845;
  if (!v705) {
    v705 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p38) == -1;
  }
  var v412 = v705;
  if (!v412) {
    v412 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p38) == -1;
  }
  if (v412) {
    JAM.call(alert, null, ["The codon table has been entered incorrectly."], JAM.policy.p23);
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v708 = formElement.value;
  if (JAM.call(v708.search, v708, [/\S/], JAM.policy.p38) == -1) {
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
  var v25 = z$$2 < arrayOfPatterns.length;
  for (;v25;) {
    introspect(JAM.policy.p26) {
      var v709 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(v709.search, v709, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p23);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v710 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(moreExpressionCheck, null, [v710], JAM.policy.p38) == false) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p23);
      return false;
    }
    z$$2 = z$$2 + 1;
    v25 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = JAM.new(Array, [arrayOfPatterns.length], JAM.policy.p38);
  var geneticCodeMatchExp = JAM.new(Array, [arrayOfPatterns.length], JAM.policy.p38);
  var j = 0;
  var v34 = j < arrayOfPatterns.length;
  for (;v34;) {
    var v28 = geneticCodeMatchExp;
    var v29 = j;
    introspect(JAM.policy.p26) {
      var v848 = arrayOfPatterns[j]
    }
    var v419 = JAM.call(v848.match, v848, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v1112 = eval("introspect(JAM.policy.pFull) { " + v419 + " }")
    } else {
      var v1112 = JAM.call(eval, null, [v419])
    }
    introspect(JAM.policy.p27) {
      v28[v29] = v1112;
    }
    var v30 = geneticCodeMatchResult;
    var v31 = j;
    introspect(JAM.policy.p26) {
      var v712 = arrayOfPatterns[j]
    }
    var v420 = JAM.call(v712.match, v712, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v1113 = JAM.call(v420.toString, v420, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v30[v31] = v1113;
    }
    var v32 = geneticCodeMatchResult;
    var v33 = j;
    introspect(JAM.policy.p26) {
      var v421 = geneticCodeMatchResult[j]
    }
    var v1114 = JAM.call(v421.replace, v421, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v32[v33] = v1114;
    }
    j = j + 1;
    v34 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v41 = i$$2 <= testSequence.length - 3;
  for (;v41;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p40);
    j = 0;
    var v39 = j < geneticCodeMatchExp.length;
    for (;v39;) {
      introspect(JAM.policy.p26) {
        var v714 = geneticCodeMatchExp[j]
      }
      if (JAM.call(codon.search, codon, [v714], JAM.policy.p38) != -1) {
        if (oneMatch == true) {
          JAM.call(alert, null, ["Genetic code error: more than one amino acid is coded by the codon: " + codon + "."], JAM.policy.p38);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      v39 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      JAM.call(alert, null, ["The genetic code expressions are missing a codon."], JAM.policy.p23);
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v41 = i$$2 <= testSequence.length - 3;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v43 = z$$3 < arrayOfPatterns$$1.length;
  for (;v43;) {
    introspect(JAM.policy.p26) {
      var v716 = arrayOfPatterns$$1[z$$3]
    }
    if (JAM.call(v716.search, v716, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p38) != -1) {
      JAM.call(alert, null, ["One or more groups have been entered incorrectly."], JAM.policy.p23);
      return false;
    }
    z$$3 = z$$3 + 1;
    v43 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v47 = i$$3 < arrayOfPatterns$$1.length;
  for (;v47;) {
    introspect(JAM.policy.p26) {
      var v717 = arrayOfPatterns$$1[i$$3]
    }
    var re = JAM.new(RegExp, ["[" + v717 + "]", "gi"], JAM.policy.p41);
    var j$$1 = i$$3 + 1;
    var v46 = j$$1 < arrayOfPatterns$$1.length;
    for (;v46;) {
      introspect(JAM.policy.p26) {
        var v718 = arrayOfPatterns$$1[j$$1]
      }
      if (JAM.call(v718.search, v718, [re], JAM.policy.p38) != -1) {
        JAM.call(alert, null, ["The same amino acid is in more than one similarity group."], JAM.policy.p23);
        return false;
      }
      j$$1 = j$$1 + 1;
      v46 = j$$1 < arrayOfPatterns$$1.length;
    }
    i$$3 = i$$3 + 1;
    v47 = i$$3 < arrayOfPatterns$$1.length;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v50 = z$$4 < arrayOfPatterns$$2.length;
  for (;v50;) {
    introspect(JAM.policy.p26) {
      var v719 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(v719.search, v719, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p23);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v720 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(moreExpressionCheck, null, [v720], JAM.policy.p38) == false) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p23);
      return false;
    }
    z$$4 = z$$4 + 1;
    v50 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v849 = JAM.call(getSequenceFromFasta, null, [text$$7], JAM.policy.p38);
  if (JAM.call(v849.replace, v849, [/[^A-Za-z]/g, ""], JAM.policy.p41).length > maxInput) {
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
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p41);
  return dnaSequence;
}
function closeForm() {
  var v55 = outputWindow.document;
  JAM.call(v55.write, v55, ["</form>"], JAM.policy.p23);
  return true;
}
function closePre() {
  var v56 = outputWindow.document;
  JAM.call(v56.write, v56, ["</div>"], JAM.policy.p23);
  var v57 = outputWindow.document;
  JAM.call(v57.write, v57, ["</pre>\n"], JAM.policy.p23);
  return;
}
function closeTextArea() {
  var v58 = outputWindow.document;
  JAM.call(v58.write, v58, ["</textarea>"], JAM.policy.p23);
  return true;
}
function closeWindow() {
  var v59 = outputWindow.document;
  JAM.call(v59.write, v59, ["</body>\n</html>\n"], JAM.policy.p23);
  outputWindow.status = "Done.";
  var v60 = outputWindow.document;
  JAM.call(v60.close, v60, [], JAM.policy.p39);
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = JAM.call(sequence$$1.toLowerCase, sequence$$1, [], JAM.policy.p39);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p41);
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  if (alignArray.length < 3) {
    JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p23);
    return false;
  }
  var i$$4 = 1;
  var v63 = i$$4 < alignArray.length;
  for (;v63;) {
    introspect(JAM.policy.p26) {
      var v722 = alignArray[i$$4]
    }
    if (JAM.call(v722.search, v722, [/[^\s]+\s/], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p23);
      return false;
    }
    i$$4 = i$$4 + 1;
    v63 = i$$4 < alignArray.length;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p41);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p41);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p41);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p41);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p41);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = JAM.new(Array, [], JAM.policy.p39);
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  if (JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38) != -1) {
    var v65 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p38);
    for (;v65;) {
      introspect(JAM.policy.p26) {
        var v64 = matchArray[0]
      }
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v64], JAM.policy.p38);
      v65 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p38);
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
  var v83 = j$$2 < arrayOfPatterns$$3.length;
  for (;v83;) {
    var v81 = geneticCodeMatchExp$$1;
    var v82 = j$$2;
    introspect(JAM.policy.p26) {
      var v850 = arrayOfPatterns$$3[j$$2]
    }
    var v468 = JAM.call(v850.match, v850, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v1115 = eval("introspect(JAM.policy.pFull) { " + v468 + " }")
    } else {
      var v1115 = JAM.call(eval, null, [v468])
    }
    introspect(JAM.policy.p27) {
      v81[v82] = v1115;
    }
    j$$2 = j$$2 + 1;
    v83 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = JAM.new(Array, [arrayOfPatterns$$4.length], JAM.policy.p38);
  var j$$3 = 0;
  var v89 = j$$3 < arrayOfPatterns$$4.length;
  for (;v89;) {
    var v85 = geneticCodeMatchResult$$1;
    var v86 = j$$3;
    introspect(JAM.policy.p26) {
      var v724 = arrayOfPatterns$$4[j$$3]
    }
    var v471 = JAM.call(v724.match, v724, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v1116 = JAM.call(v471.toString, v471, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v85[v86] = v1116;
    }
    var v87 = geneticCodeMatchResult$$1;
    var v88 = j$$3;
    introspect(JAM.policy.p26) {
      var v472 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1117 = JAM.call(v472.replace, v472, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v87[v88] = v1117;
    }
    j$$3 = j$$3 + 1;
    v89 = j$$3 < arrayOfPatterns$$4.length;
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
  var v110 = j$$4 < lengthOut;
  for (;v110;) {
    tempNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * components.length], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar = components[tempNum];
    }
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p38);
    j$$4 = j$$4 + 1;
    v110 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p23);
}
function getSequenceFromFasta(sequenceRecord) {
  if (JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38) != -1) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p41);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if (JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38) != -1) {
    var v112 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p41);
    fastaTitle = JAM.call(v112.toString, v112, [], JAM.policy.p39);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p41);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p41);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p41);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1083 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p38) != -1;
  if (!v1083) {
    v1083 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v1074 = v1083;
  if (!v1074) {
    v1074 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p38) != -1;
  }
  var v1064 = v1074;
  if (!v1064) {
    v1064 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v1052 = v1064;
  if (!v1052) {
    v1052 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p38) != -1;
  }
  var v1033 = v1052;
  if (!v1033) {
    v1033 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p38) != -1;
  }
  var v998 = v1033;
  if (!v998) {
    v998 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p38) != -1;
  }
  var v942 = v998;
  if (!v942) {
    v942 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p38) != -1;
  }
  var v851 = v942;
  if (!v851) {
    v851 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p38) != -1;
  }
  var v726 = v851;
  if (!v726) {
    v726 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p38) != -1;
  }
  var v500 = v726;
  if (!v500) {
    v500 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p38) != -1;
  }
  if (v500) {
    return false;
  }
  return true;
}
function openForm() {
  var v115 = outputWindow.document;
  JAM.call(v115.write, v115, ['<form action="">\n'], JAM.policy.p23);
  return true;
}
function openPre() {
  var v116 = outputWindow.document;
  JAM.call(v116.write, v116, ["<pre>"], JAM.policy.p23);
  var v117 = outputWindow.document;
  JAM.call(v117.write, v117, ['<div class="pre">'], JAM.policy.p23);
  return;
}
function openTextArea() {
  var v118 = outputWindow.document;
  JAM.call(v118.write, v118, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p23);
  return true;
}
function openWindow(title$$6) {
  JAM.call(_openWindow, null, [title$$6, true], JAM.policy.p41);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p24);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p39);
  var v119 = outputWindow.document;
  JAM.call(v119.write, v119, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p38);
  if (isColor) {
    var v121 = outputWindow.document;
    JAM.call(v121.write, v121, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p38);
  } else {
    var v123 = outputWindow.document;
    JAM.call(v123.write, v123, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p38);
  }
  var v125 = outputWindow.document;
  JAM.call(v125.write, v125, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$7 + " results</div>\n"], JAM.policy.p38);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$8) {
  JAM.call(_openWindowAlign, null, [title$$8, true], JAM.policy.p41);
  return;
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p24);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p39);
  var v127 = outputWindow.document;
  JAM.call(v127.write, v127, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p38);
  if (isBackground) {
    var v129 = outputWindow.document;
    JAM.call(v129.write, v129, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p38);
  } else {
    var v131 = outputWindow.document;
    JAM.call(v131.write, v131, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p38);
  }
  var v133 = outputWindow.document;
  JAM.call(v133.write, v133, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$9 + " results</div>\n"], JAM.policy.p38);
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p41);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p41);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p41);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p41);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p41);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p41);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p41);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p41);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p41);
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
  var v136 = j$$5 < lengthOfColumn;
  for (;v136;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v136 = j$$5 < lengthOfColumn;
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
    var v510 = testArray[0]
  }
  if (v510 != testString) {
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p40);
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
  var v862 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p38) == -1;
  if (!v862) {
    v862 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p38) == -1;
  }
  var v737 = v862;
  if (!v737) {
    v737 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p38) == -1;
  }
  var v515 = v737;
  if (!v515) {
    v515 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v515) {
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
  var v865 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v865) {
    v865 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v740 = v865;
  if (!v740) {
    v740 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v520 = v740;
  if (!v520) {
    v520 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v520) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p23);
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v868 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v868) {
    v868 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v743 = v868;
  if (!v743) {
    v743 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v521 = v743;
  if (!v521) {
    v521 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v521) {
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
  var v871 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p38) == -1;
  if (!v871) {
    v871 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p38) == -1;
  }
  var v746 = v871;
  if (!v746) {
    v746 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p38) == -1;
  }
  var v523 = v746;
  if (!v523) {
    v523 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v523) {
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
  var v164 = i$$5 < stopBase;
  for (;v164;) {
    lineOfText = JAM.call(rightNum, null, [i$$5 + 1, lineOfText, 8, tabIn$$1], JAM.policy.p40);
    var j$$6 = 1;
    var v161 = j$$6 <= basePerLine / groupSize;
    for (;v161;) {
      var v160 = k < groupSize;
      for (;v160;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p38);
        k = k + 1;
        v160 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v161 = j$$6 <= basePerLine / groupSize;
    }
    var v162 = outputWindow.document;
    JAM.call(v162.write, v162, [lineOfText + "\n"], JAM.policy.p38);
    lineOfText = "";
    v164 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  JAM.call(writeGroupNumDnaSetStart, null, [text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0], JAM.policy.p40);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v528 = adjustment < 0;
    if (v528) {
      v528 = adjusted >= 0;
    }
    if (v528) {
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
  var v198 = i$$6 < stopBase$$2;
  for (;v198;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v174 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for (;v174;) {
      var v169 = k$$1 < groupSize$$2;
      for (;v169;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p38);
        k$$1 = k$$1 + 1;
        v169 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      if (numberPosition$$1 == "above") {
        aboveNum = aboveNum + JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40), "", groupSize$$2, tabIn$$3], JAM.policy.p41);
      }
      if (i$$6 >= stopBase$$2) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      v174 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v175 = outputWindow.document;
      JAM.call(v175.write, v175, [JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p40), "", 8, tabIn$$3], JAM.policy.p41) + lineOfText$$1 + "\n"], JAM.policy.p38);
      if (strands$$1 == "two") {
        var v177 = outputWindow.document;
        JAM.call(v177.write, v177, [JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p40), "", 8, tabIn$$3], JAM.policy.p41) + JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + "\n"], JAM.policy.p38);
        var v179 = outputWindow.document;
        JAM.call(v179.write, v179, ["\n"], JAM.policy.p23);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v181 = outputWindow.document;
        JAM.call(v181.write, v181, [lineOfText$$1 + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40) + "\n"], JAM.policy.p38);
        if (strands$$1 == "two") {
          var v183 = outputWindow.document;
          JAM.call(v183.write, v183, [JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40) + "\n"], JAM.policy.p38);
          var v185 = outputWindow.document;
          JAM.call(v185.write, v185, ["\n"], JAM.policy.p23);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v187 = outputWindow.document;
          JAM.call(v187.write, v187, [aboveNum + "\n"], JAM.policy.p38);
          var v189 = outputWindow.document;
          JAM.call(v189.write, v189, [lineOfText$$1 + "\n"], JAM.policy.p38);
          if (strands$$1 == "two") {
            var v191 = outputWindow.document;
            JAM.call(v191.write, v191, [JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + "\n"], JAM.policy.p38);
            var v193 = outputWindow.document;
            JAM.call(v193.write, v193, ["\n"], JAM.policy.p23);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v198 = i$$6 < stopBase$$2;
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
  var v219 = i$$7 < stopBase$$3;
  for (;v219;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v207 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for (;v207;) {
      var v202 = k$$2 < groupSize$$3;
      for (;v202;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p38);
        k$$2 = k$$2 + 1;
        v202 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      if (numberPosition$$2 == "above") {
        aboveNum$$1 = aboveNum$$1 + JAM.call(rightNum, null, [i$$7, "", groupSize$$3, tabIn$$4], JAM.policy.p41);
      }
      if (i$$7 >= stopBase$$3) {
        break;
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      v207 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v208 = outputWindow.document;
      JAM.call(v208.write, v208, [JAM.call(rightNum, null, [lineNum$$1, "", 8, tabIn$$4], JAM.policy.p41) + lineOfText$$2 + "\n"], JAM.policy.p38);
    } else {
      if (numberPosition$$2 == "right") {
        var v210 = outputWindow.document;
        JAM.call(v210.write, v210, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p38);
      } else {
        if (numberPosition$$2 == "above") {
          var v212 = outputWindow.document;
          JAM.call(v212.write, v212, [aboveNum$$1 + "\n"], JAM.policy.p38);
          var v214 = outputWindow.document;
          JAM.call(v214.write, v214, [lineOfText$$2 + "\n"], JAM.policy.p38);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v219 = i$$7 < stopBase$$3;
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
  var v757 = sequence$$13.length <= firstIndexToMutate;
  if (!v757) {
    v757 = lastIndexToMutate < 0;
  }
  var v545 = v757;
  if (!v545) {
    v545 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v545) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v228 = i$$8 < numMut;
  for (;v228;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * maxNum], JAM.policy.p38);
    var v547 = randNum < firstIndexToMutate;
    if (!v547) {
      v547 = randNum > lastIndexToMutate;
    }
    if (v547) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v228 = i$$8 < numMut;
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
        var v551 = components$$1[componentsIndex]
      }
      if (v551 != currentChar) {
        needNewChar = false;
      }
    }
    var v552 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p22);
    introspect(JAM.policy.p26) {
      var v553 = components$$1[componentsIndex]
    }
    sequence$$13 = v552 + v553 + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p40);
    i$$8 = i$$8 + 1;
    v228 = i$$8 < numMut;
  }
  var v229 = outputWindow.document;
  JAM.call(v229.write, v229, [JAM.call(addReturns, null, [sequence$$13], JAM.policy.p38)], JAM.policy.p38);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v235 = j$$9 < lengthOut$$1;
  for (;v235;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * components$$2.length], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v232 = outputWindow.document;
      JAM.call(v232.write, v232, [sequence$$14 + "\n"], JAM.policy.p38);
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v235 = j$$9 < lengthOut$$1;
  }
  var v236 = outputWindow.document;
  JAM.call(v236.write, v236, [sequence$$14 + "\n"], JAM.policy.p38);
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
    sequence$$15 = JAM.call(sequence$$15.substring, sequence$$15, [sequence$$15.length - lookAhead, sequence$$15.length], JAM.policy.p40) + sequence$$15 + JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p22);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v242 = outputWindow.document;
  JAM.call(v242.write, v242, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p23);
  var v243 = outputWindow.document;
  JAM.call(v243.write, v243, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p38);
  var i$$9 = 0;
  var v260 = i$$9 < arrayOfItems.length;
  for (;v260;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v562 = arrayOfItems[i$$9]
    }
    matchExp = JAM.call(v562.match, v562, [/\/.+\//], JAM.policy.p38) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v880 = arrayOfItems[i$$9]
    }
    var v763 = JAM.call(v880.match, v880, [/\)\D*\d+/], JAM.policy.p38);
    var v563 = JAM.call(v763.toString, v763, [], JAM.policy.p39);
    cutDistance = JAM.call(parseFloat, null, [JAM.call(v563.replace, v563, [/\)\D*/, ""], JAM.policy.p41)], JAM.policy.p38);
    var v252 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    for (;v252;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v564 = matchPosition >= lowerLimit;
      if (v564) {
        v564 = matchPosition < upperLimit;
      }
      if (v564) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v252 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    }
    if (JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p38) != -1) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p41);
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
    var v258 = outputWindow.document;
    var v1040 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p26) {
      var v1081 = arrayOfItems[i$$9]
    }
    var v1071 = JAM.call(v1081.match, v1081, [/\([^\(]+\)/], JAM.policy.p38);
    var v1060 = JAM.call(v1071.toString, v1071, [], JAM.policy.p39);
    JAM.call(v258.write, v258, [v1040 + JAM.call(v1060.replace, v1060, [/\(|\)/g, ""], JAM.policy.p41) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p38);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v260 = i$$9 < arrayOfItems.length;
  }
  var v261 = outputWindow.document;
  JAM.call(v261.write, v261, ["</tbody></table>\n"], JAM.policy.p23);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v262 = outputWindow.document;
  JAM.call(v262.write, v262, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p23);
  var v263 = outputWindow.document;
  JAM.call(v263.write, v263, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p38);
  var i$$10 = 0;
  var v273 = i$$10 < arrayOfItems$$1.length;
  for (;v273;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v573 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = JAM.call(v573.match, v573, [/\/[^\/]+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p38) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p38).length;
    }
    var percentage = 0;
    var v767 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v963 = arrayOfItems$$1[i$$10]
    }
    if (v767 - JAM.call(parseFloat, null, [JAM.call(v963.match, v963, [/\d+/], JAM.policy.p38)], JAM.policy.p38) > 0) {
      var v268 = 100 * tempNumber;
      var v576 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v884 = arrayOfItems$$1[i$$10]
      }
      percentage = v268 / (v576 - JAM.call(parseFloat, null, [JAM.call(v884.match, v884, [/\d+/], JAM.policy.p38)], JAM.policy.p38));
    }
    var v271 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v1082 = arrayOfItems$$1[i$$10]
    }
    var v1072 = JAM.call(v1082.match, v1082, [/\([^\(]+\)\b/], JAM.policy.p38);
    var v1061 = JAM.call(v1072.toString, v1072, [], JAM.policy.p39);
    JAM.call(v271.write, v271, ["<tr><td>" + JAM.call(v1061.replace, v1061, [/\(|\)/g, ""], JAM.policy.p41) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p25) + "</td></tr>\n"], JAM.policy.p38);
    i$$10 = i$$10 + 1;
    v273 = i$$10 < arrayOfItems$$1.length;
  }
  var v274 = outputWindow.document;
  JAM.call(v274.write, v274, ["</tbody></table>\n"], JAM.policy.p23);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v281 = sequence$$17.length > 0;
  for (;v281;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * maxNum$$1], JAM.policy.p38);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p38);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p22);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p40);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v278 = outputWindow.document;
      JAM.call(v278.write, v278, [tempSeq + "\n"], JAM.policy.p38);
      tempSeq = "";
    }
    v281 = sequence$$17.length > 0;
  }
  var v282 = outputWindow.document;
  JAM.call(v282.write, v282, [tempSeq + "\n"], JAM.policy.p38);
  return true;
}
function rangeExtract(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = JAM.new(Array, [], JAM.policy.p39);
  if (JAM.call(testScript, null, [], JAM.policy.p39) == false) {
    return false;
  }
  var v1062 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1043 = v1062[0]
  }
  var v1008 = v1043.elements;
  introspect(JAM.policy.p26) {
    var v965 = v1008[0]
  }
  var v772 = JAM.call(checkFormElement, null, [v965], JAM.policy.p38) == false;
  if (!v772) {
    var v1073 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1063 = v1073[0]
    }
    var v1044 = v1063.elements;
    introspect(JAM.policy.p26) {
      var v1009 = v1044[0]
    }
    v772 = JAM.call(checkSequenceLength, null, [v1009.value, maxInput$$3], JAM.policy.p40) == false;
  }
  var v585 = v772;
  if (!v585) {
    var v1045 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1010 = v1045[0]
    }
    var v967 = v1010.elements;
    introspect(JAM.policy.p26) {
      var v889 = v967[1]
    }
    v585 = JAM.call(checkFormElement, null, [v889], JAM.policy.p38) == false;
  }
  if (v585) {
    return false;
  }
  var v968 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v890 = v968[0]
  }
  var v775 = v890.elements;
  introspect(JAM.policy.p26) {
    var v586 = v775[1]
  }
  var v286 = v586.value;
  var arrayOfRanges = JAM.call(v286.split, v286, [/,/], JAM.policy.p38);
  var arrayOfStartAndEnd;
  var i$$11 = 0;
  var v292 = i$$11 < arrayOfRanges.length;
  for (;v292;) {
    introspect(JAM.policy.p26) {
      var v287 = arrayOfRanges[i$$11]
    }
    arrayOfStartAndEnd = JAM.call(v287.split, v287, [/\.\./], JAM.policy.p38);
    if (arrayOfStartAndEnd.length == 1) {
      matchFound = true;
      introspect(JAM.policy.p26) {
        var v589 = arrayOfStartAndEnd[0]
      }
      introspect(JAM.policy.p26) {
        var v590 = arrayOfStartAndEnd[0]
      }
      JAM.call(ranges.push, ranges, [JAM.new(Range, [v589, v590], JAM.policy.p40)], JAM.policy.p38);
    } else {
      if (arrayOfStartAndEnd.length == 2) {
        matchFound = true;
        introspect(JAM.policy.p26) {
          var v592 = arrayOfStartAndEnd[0]
        }
        introspect(JAM.policy.p26) {
          var v593 = arrayOfStartAndEnd[1]
        }
        JAM.call(ranges.push, ranges, [JAM.new(Range, [v592, v593], JAM.policy.p40)], JAM.policy.p38);
      }
    }
    i$$11 = i$$11 + 1;
    v292 = i$$11 < arrayOfRanges.length;
  }
  if (matchFound == false) {
    JAM.call(alert, null, ["No ranges were entered."], JAM.policy.p23);
    return false;
  }
  JAM.call(openWindow, null, ["Range Extractor Protein"], JAM.policy.p23);
  JAM.call(openPre, null, [], JAM.policy.p39);
  var v969 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v891 = v969[0]
  }
  var v776 = v891.elements;
  introspect(JAM.policy.p26) {
    var v595 = v776[0]
  }
  var arrayOfFasta$$1 = JAM.call(getArrayOfFasta, null, [v595.value], JAM.policy.p38);
  i$$11 = 0;
  var v300 = i$$11 < arrayOfFasta$$1.length;
  for (;v300;) {
    introspect(JAM.policy.p26) {
      var v295 = arrayOfFasta$$1[i$$11]
    }
    newProtein = JAM.call(getSequenceFromFasta, null, [v295], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      var v296 = arrayOfFasta$$1[i$$11]
    }
    title = JAM.call(getTitleFromFasta, null, [v296], JAM.policy.p38);
    newProtein = JAM.call(removeNonProteinAllowDegen, null, [newProtein], JAM.policy.p38);
    var v297 = outputWindow.document;
    JAM.call(v297.write, v297, [JAM.call(getFastaTitleFromTitleAndSequence, null, [title, newProtein], JAM.policy.p40)], JAM.policy.p38);
    var v1046 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1011 = v1046[0]
    }
    var v970 = v1011.elements;
    introspect(JAM.policy.p26) {
      var v892 = v970[5]
    }
    var v777 = v892.options;
    var v1047 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1012 = v1047[0]
    }
    var v971 = v1012.elements;
    introspect(JAM.policy.p26) {
      var v893 = v971[5]
    }
    var v778 = v893.selectedIndex;
    introspect(JAM.policy.p26) {
      var v597 = v777[v778]
    }
    JAM.call(writeSequenceRanges, null, [newProtein, ranges, v597.value], JAM.policy.p40);
    i$$11 = i$$11 + 1;
    v300 = i$$11 < arrayOfFasta$$1.length;
  }
  JAM.call(closePre, null, [], JAM.policy.p39);
  JAM.call(closeWindow, null, [], JAM.policy.p39);
  return true;
}
function writeSequenceRanges(sequence$$18, ranges$$1, segmentType) {
  var rangeGroup = JAM.new(RangeGroup, [segmentType], JAM.policy.p38);
  var center_base = JAM.call(Math.round, Math, [sequence$$18.length / 2], JAM.policy.p38);
  var i$$12 = 0;
  var v315 = i$$12 < ranges$$1.length;
  for (;v315;) {
    introspect(JAM.policy.p26) {
      var v302 = ranges$$1[i$$12]
    }
    introspect(JAM.policy.p26) {
      var v894 = ranges$$1[i$$12]
    }
    var v779 = v894.start;
    var v601 = JAM.call(v779.toString, v779, [], JAM.policy.p39);
    var v1118 = JAM.call(v601.replace, v601, [/start|begin/gi, 1], JAM.policy.p41);
    v302.start = v1118;
    introspect(JAM.policy.p26) {
      var v303 = ranges$$1[i$$12]
    }
    introspect(JAM.policy.p26) {
      var v895 = ranges$$1[i$$12]
    }
    var v780 = v895.start;
    var v602 = JAM.call(v780.toString, v780, [], JAM.policy.p39);
    var v1119 = JAM.call(v602.replace, v602, [/stop|end/gi, sequence$$18.length], JAM.policy.p40);
    v303.start = v1119;
    introspect(JAM.policy.p26) {
      var v304 = ranges$$1[i$$12]
    }
    introspect(JAM.policy.p26) {
      var v896 = ranges$$1[i$$12]
    }
    var v781 = v896.start;
    var v604 = JAM.call(v781.toString, v781, [], JAM.policy.p39);
    var v1120 = JAM.call(v604.replace, v604, [/length/gi, sequence$$18.length], JAM.policy.p40);
    v304.start = v1120;
    introspect(JAM.policy.p26) {
      var v305 = ranges$$1[i$$12]
    }
    introspect(JAM.policy.p26) {
      var v897 = ranges$$1[i$$12]
    }
    var v782 = v897.start;
    var v606 = JAM.call(v782.toString, v782, [], JAM.policy.p39);
    var v1121 = JAM.call(v606.replace, v606, [/middle|center|centre/gi, center_base], JAM.policy.p40);
    v305.start = v1121;
    introspect(JAM.policy.p26) {
      var v306 = ranges$$1[i$$12]
    }
    introspect(JAM.policy.p26) {
      var v898 = ranges$$1[i$$12]
    }
    var v783 = v898.stop;
    var v607 = JAM.call(v783.toString, v783, [], JAM.policy.p39);
    var v1122 = JAM.call(v607.replace, v607, [/start|begin/gi, 1], JAM.policy.p41);
    v306.stop = v1122;
    introspect(JAM.policy.p26) {
      var v307 = ranges$$1[i$$12]
    }
    introspect(JAM.policy.p26) {
      var v899 = ranges$$1[i$$12]
    }
    var v784 = v899.stop;
    var v608 = JAM.call(v784.toString, v784, [], JAM.policy.p39);
    var v1123 = JAM.call(v608.replace, v608, [/stop|end/gi, sequence$$18.length], JAM.policy.p40);
    v307.stop = v1123;
    introspect(JAM.policy.p26) {
      var v308 = ranges$$1[i$$12]
    }
    introspect(JAM.policy.p26) {
      var v900 = ranges$$1[i$$12]
    }
    var v785 = v900.stop;
    var v610 = JAM.call(v785.toString, v785, [], JAM.policy.p39);
    var v1124 = JAM.call(v610.replace, v610, [/length/gi, sequence$$18.length], JAM.policy.p40);
    v308.stop = v1124;
    introspect(JAM.policy.p26) {
      var v309 = ranges$$1[i$$12]
    }
    introspect(JAM.policy.p26) {
      var v901 = ranges$$1[i$$12]
    }
    var v786 = v901.stop;
    var v612 = JAM.call(v786.toString, v786, [], JAM.policy.p39);
    var v1125 = JAM.call(v612.replace, v612, [/middle|center|centre/gi, center_base], JAM.policy.p40);
    v309.stop = v1125;
    try {
      introspect(JAM.policy.p26) {
        var v310 = ranges$$1[i$$12]
      }
      introspect(JAM.policy.p26) {
        var v972 = ranges$$1[i$$12]
      }
      var v902 = v972.start;
      var v787 = JAM.call(v902.toString, v902, [], JAM.policy.p39);
      if (JAM.isEval(eval)) {
        var v613 = eval("introspect(JAM.policy.pFull) { " + v787 + " }")
      } else {
        var v613 = JAM.call(eval, null, [v787])
      }
      var v1126 = JAM.call(parseInt, null, [v613], JAM.policy.p38);
      v310.start = v1126;
    } catch (e$$5) {
      introspect(JAM.policy.p26) {
        var v788 = ranges$$1[i$$12]
      }
      JAM.call(alert, null, ["Could not evaluate the following expression: " + v788.start], JAM.policy.p38);
      return false;
    }
    try {
      introspect(JAM.policy.p26) {
        var v312 = ranges$$1[i$$12]
      }
      introspect(JAM.policy.p26) {
        var v973 = ranges$$1[i$$12]
      }
      var v903 = v973.stop;
      var v789 = JAM.call(v903.toString, v903, [], JAM.policy.p39);
      if (JAM.isEval(eval)) {
        var v615 = eval("introspect(JAM.policy.pFull) { " + v789 + " }")
      } else {
        var v615 = JAM.call(eval, null, [v789])
      }
      var v1127 = JAM.call(parseInt, null, [v615], JAM.policy.p38);
      v312.stop = v1127;
    } catch (e$$6) {
      introspect(JAM.policy.p26) {
        var v790 = ranges$$1[i$$12]
      }
      JAM.call(alert, null, ["Could not evaluate the following expression: " + v790.stop], JAM.policy.p38);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v314 = ranges$$1[i$$12]
    }
    JAM.call(rangeGroup.addRange, rangeGroup, [v314], JAM.policy.p38);
    i$$12 = i$$12 + 1;
    v315 = i$$12 < ranges$$1.length;
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
      return JAM.call(sequence$$19.substring, sequence$$19, [this.start - 1, this.stop], JAM.policy.p40);
    }
  }
  return;
}
function getTitle() {
  if (this.start == this.stop) {
    return "&gt;residue " + this.start;
  } else {
    return "&gt;residue " + this.start + " to " + this.stop;
  }
  return;
}
function Range(start$$4, stop) {
  this.start = start$$4;
  this.stop = stop;
  return;
}
function addRange(range$$5) {
  var v340 = this.ranges;
  JAM.call(v340.push, v340, [range$$5], JAM.policy.p38);
  return;
}
function writeRanges(sequence$$20) {
  function v9(str$$15, p1$$9, offset$$17, s$$11) {
    return JAM.call(sequence$$20.substring, sequence$$20, [offset$$17, offset$$17 + p1$$9.length], JAM.policy.p40);
  }
  function v8(str$$14, p1$$8, p2$$3, offset$$16, s$$10) {
    return p1$$8 + JAM.call(sequence$$20.substring, sequence$$20, [p1$$8.length, p1$$8.length + p2$$3.length], JAM.policy.p40);
  }
  function v7(str$$13, p1$$7, offset$$15, s$$9) {
    return JAM.call(getRandomSequence, null, [["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"], p1$$7.length], JAM.policy.p40);
  }
  function v6(str$$12, p1$$6, p2$$2, offset$$14, s$$8) {
    return p1$$6 + JAM.call(getRandomSequence, null, [["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"], p2$$2.length], JAM.policy.p40);
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
    var i$$13 = 0;
    var v354 = i$$13 < this.ranges.length;
    for (;v354;) {
      var v905 = this.ranges;
      introspect(JAM.policy.p26) {
        var v802 = v905[i$$13]
      }
      if (JAM.call(v802.getSequence, v802, [sequence$$20], JAM.policy.p38) != "") {
        var v803 = this.ranges;
        introspect(JAM.policy.p26) {
          var v655 = v803[i$$13]
        }
        JAM.call(sequenceArray$$1.push, sequenceArray$$1, [JAM.call(v655.getSequence, v655, [sequence$$20], JAM.policy.p38)], JAM.policy.p38);
      }
      i$$13 = i$$13 + 1;
      v354 = i$$13 < this.ranges.length;
    }
    var v355 = outputWindow.document;
    JAM.call(v355.write, v355, [JAM.call(addReturns, null, [JAM.call(sequenceArray$$1.join, sequenceArray$$1, [""], JAM.policy.p23)], JAM.policy.p38) + "\n\n"], JAM.policy.p38);
    return true;
  }
  if (this.type == "separate") {
    i$$13 = 0;
    var v363 = i$$13 < this.ranges.length;
    for (;v363;) {
      var v906 = this.ranges;
      introspect(JAM.policy.p26) {
        var v807 = v906[i$$13]
      }
      if (JAM.call(v807.getSequence, v807, [sequence$$20], JAM.policy.p38) != "") {
        var v358 = outputWindow.document;
        var v907 = this.ranges;
        introspect(JAM.policy.p26) {
          var v808 = v907[i$$13]
        }
        JAM.call(v358.write, v358, [JAM.call(v808.getTitle, v808, [], JAM.policy.p39) + "\n"], JAM.policy.p38);
        var v360 = outputWindow.document;
        var v974 = this.ranges;
        introspect(JAM.policy.p26) {
          var v908 = v974[i$$13]
        }
        JAM.call(v360.write, v360, [JAM.call(addReturns, null, [JAM.call(v908.getSequence, v908, [sequence$$20], JAM.policy.p38)], JAM.policy.p38) + "\n\n"], JAM.policy.p38);
      }
      i$$13 = i$$13 + 1;
      v363 = i$$13 < this.ranges.length;
    }
    return true;
  }
  if (this.type == "uppercased") {
    var re$$3;
    sequence$$20 = JAM.call(sequence$$20.toLowerCase, sequence$$20, [], JAM.policy.p39);
    i$$13 = 0;
    var v369 = i$$13 < this.ranges.length;
    for (;v369;) {
      var v909 = this.ranges;
      introspect(JAM.policy.p26) {
        var v812 = v909[i$$13]
      }
      if (JAM.call(v812.getSequence, v812, [sequence$$20], JAM.policy.p38) != "") {
        var v910 = this.ranges;
        introspect(JAM.policy.p26) {
          var v813 = v910[i$$13]
        }
        if (v813.start > 1) {
          var v1048 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1013 = v1048[i$$13]
          }
          var v668 = "(.{" + (v1013.start - 1) + "})\\B(.{";
          var v1014 = this.ranges;
          introspect(JAM.policy.p26) {
            var v976 = v1014[i$$13]
          }
          var v912 = v976.stop;
          var v1015 = this.ranges;
          introspect(JAM.policy.p26) {
            var v977 = v1015[i$$13]
          }
          re$$3 = v668 + (v912 - v977.start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p38);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v2], JAM.policy.p40);
        } else {
          var v1016 = this.ranges;
          introspect(JAM.policy.p26) {
            var v978 = v1016[i$$13]
          }
          var v914 = v978.stop;
          var v1017 = this.ranges;
          introspect(JAM.policy.p26) {
            var v979 = v1017[i$$13]
          }
          re$$3 = "(.{" + (v914 - v979.start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p38);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v3], JAM.policy.p40);
        }
      }
      i$$13 = i$$13 + 1;
      v369 = i$$13 < this.ranges.length;
    }
    var v370 = outputWindow.document;
    JAM.call(v370.write, v370, [JAM.call(addReturns, null, [sequence$$20], JAM.policy.p38) + "\n\n"], JAM.policy.p38);
    return true;
  }
  if (this.type == "lowercased") {
    sequence$$20 = JAM.call(sequence$$20.toUpperCase, sequence$$20, [], JAM.policy.p39);
    i$$13 = 0;
    var v377 = i$$13 < this.ranges.length;
    for (;v377;) {
      var v916 = this.ranges;
      introspect(JAM.policy.p26) {
        var v819 = v916[i$$13]
      }
      if (JAM.call(v819.getSequence, v819, [sequence$$20], JAM.policy.p38) != "") {
        var v917 = this.ranges;
        introspect(JAM.policy.p26) {
          var v820 = v917[i$$13]
        }
        if (v820.start > 1) {
          var v1049 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1018 = v1049[i$$13]
          }
          var v677 = "(.{" + (v1018.start - 1) + "})\\B(.{";
          var v1019 = this.ranges;
          introspect(JAM.policy.p26) {
            var v981 = v1019[i$$13]
          }
          var v919 = v981.stop;
          var v1020 = this.ranges;
          introspect(JAM.policy.p26) {
            var v982 = v1020[i$$13]
          }
          re$$3 = v677 + (v919 - v982.start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p38);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v4], JAM.policy.p40);
        } else {
          var v1021 = this.ranges;
          introspect(JAM.policy.p26) {
            var v983 = v1021[i$$13]
          }
          var v921 = v983.stop;
          var v1022 = this.ranges;
          introspect(JAM.policy.p26) {
            var v984 = v1022[i$$13]
          }
          re$$3 = "(.{" + (v921 - v984.start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p38);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v5], JAM.policy.p40);
        }
      }
      i$$13 = i$$13 + 1;
      v377 = i$$13 < this.ranges.length;
    }
    var v378 = outputWindow.document;
    JAM.call(v378.write, v378, [JAM.call(addReturns, null, [sequence$$20], JAM.policy.p38) + "\n\n"], JAM.policy.p38);
    return true;
  }
  if (this.type == "randomized") {
    i$$13 = 0;
    var v385 = i$$13 < this.ranges.length;
    for (;v385;) {
      var v923 = this.ranges;
      introspect(JAM.policy.p26) {
        var v826 = v923[i$$13]
      }
      if (JAM.call(v826.getSequence, v826, [sequence$$20], JAM.policy.p38) != "") {
        var v924 = this.ranges;
        introspect(JAM.policy.p26) {
          var v827 = v924[i$$13]
        }
        if (v827.start > 1) {
          var v1050 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1023 = v1050[i$$13]
          }
          var v686 = "(.{" + (v1023.start - 1) + "})\\B(.{";
          var v1024 = this.ranges;
          introspect(JAM.policy.p26) {
            var v986 = v1024[i$$13]
          }
          var v926 = v986.stop;
          var v1025 = this.ranges;
          introspect(JAM.policy.p26) {
            var v987 = v1025[i$$13]
          }
          re$$3 = v686 + (v926 - v987.start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p38);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v6], JAM.policy.p40);
        } else {
          var v1026 = this.ranges;
          introspect(JAM.policy.p26) {
            var v988 = v1026[i$$13]
          }
          var v928 = v988.stop;
          var v1027 = this.ranges;
          introspect(JAM.policy.p26) {
            var v989 = v1027[i$$13]
          }
          re$$3 = "(.{" + (v928 - v989.start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p38);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v7], JAM.policy.p40);
        }
      }
      i$$13 = i$$13 + 1;
      v385 = i$$13 < this.ranges.length;
    }
    var v386 = outputWindow.document;
    JAM.call(v386.write, v386, [JAM.call(addReturns, null, [sequence$$20], JAM.policy.p38) + "\n\n"], JAM.policy.p38);
    return true;
  }
  if (this.type == "preserved") {
    var randomSequence = JAM.call(getRandomSequence, null, [["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"], sequence$$20.length], JAM.policy.p40);
    i$$13 = 0;
    var v395 = i$$13 < this.ranges.length;
    for (;v395;) {
      var v930 = this.ranges;
      introspect(JAM.policy.p26) {
        var v833 = v930[i$$13]
      }
      if (JAM.call(v833.getSequence, v833, [sequence$$20], JAM.policy.p38) != "") {
        var v931 = this.ranges;
        introspect(JAM.policy.p26) {
          var v834 = v931[i$$13]
        }
        if (v834.start > 1) {
          var v1051 = this.ranges;
          introspect(JAM.policy.p26) {
            var v1028 = v1051[i$$13]
          }
          var v695 = "(.{" + (v1028.start - 1) + "})\\B(.{";
          var v1029 = this.ranges;
          introspect(JAM.policy.p26) {
            var v991 = v1029[i$$13]
          }
          var v933 = v991.stop;
          var v1030 = this.ranges;
          introspect(JAM.policy.p26) {
            var v992 = v1030[i$$13]
          }
          re$$3 = v695 + (v933 - v992.start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p38);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v8], JAM.policy.p40);
        } else {
          var v1031 = this.ranges;
          introspect(JAM.policy.p26) {
            var v993 = v1031[i$$13]
          }
          var v935 = v993.stop;
          var v1032 = this.ranges;
          introspect(JAM.policy.p26) {
            var v994 = v1032[i$$13]
          }
          re$$3 = "(.{" + (v935 - v994.start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p38);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v9], JAM.policy.p40);
        }
      }
      i$$13 = i$$13 + 1;
      v395 = i$$13 < this.ranges.length;
    }
    var v396 = outputWindow.document;
    JAM.call(v396.write, v396, [JAM.call(addReturns, null, [randomSequence], JAM.policy.p38) + "\n\n"], JAM.policy.p38);
    return true;
  }
  return;
}
function RangeGroup(type$$25) {
  this.type = type$$25;
  var v1128 = JAM.new(Array, [], JAM.policy.p39);
  this.ranges = v1128;
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

