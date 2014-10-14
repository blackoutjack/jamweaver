// sms2-range-extract-dna.js
function v12() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[1].value = " ";
  return;
}
function v11() {
  try {
    JAM.call(rangeExtract, null, [document], JAM.policy.p30);
  } catch (e$$7) {
    JAM.call(alert, null, ["The following error was encountered: " + e$$7], JAM.policy.p30);
  }
  return;
}
function v10() {
  var v16 = document.main_form.main_submit;
  JAM.call(v16.focus, v16, [], JAM.policy.p30);
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p30);
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var lengthOfAlign = arrayOfSequences[0].length;
  if (arrayOfSequences.length < 2) {
    JAM.call(alert, null, ["Please enter an alignment consisting of at least two sequences."], JAM.policy.p30);
    return false;
  }
  var i$$1 = 0;
  var v20 = i$$1 < arrayOfTitles.length;
  for (;v20;) {
    var v987 = arrayOfTitles[i$$1];
    var v736 = JAM.call(v987.search, v987, [/\S/], JAM.policy.p30) == -1;
    if (!v736) {
      var v988 = arrayOfSequences[i$$1];
      v736 = JAM.call(v988.search, v988, [/\S/], JAM.policy.p30) == -1;
    }
    var v430 = v736;
    if (!v430) {
      v430 = arrayOfSequences[i$$1].length != lengthOfAlign;
    }
    if (v430) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p30);
      return false;
    }
    i$$1 = i$$1 + 1;
    v20 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v989 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p30) == -1;
  if (!v989) {
    v989 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p30) == -1;
  }
  var v887 = v989;
  if (!v887) {
    v887 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p30) == -1;
  }
  var v739 = v887;
  if (!v739) {
    v739 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p30) == -1;
  }
  var v432 = v739;
  if (!v432) {
    v432 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p30) == -1;
  }
  if (v432) {
    JAM.call(alert, null, ["The codon table has been entered incorrectly."], JAM.policy.p30);
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v742 = formElement.value;
  if (JAM.call(v742.search, v742, [/\S/], JAM.policy.p30) == -1) {
    JAM.call(alert, null, ["Please enter some text."], JAM.policy.p30);
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
    var v743 = arrayOfPatterns[z$$2];
    if (JAM.call(v743.search, v743, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p30) == -1) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p30);
      return false;
    }
    if (JAM.call(moreExpressionCheck, null, [arrayOfPatterns[z$$2]], JAM.policy.p30) == false) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p30);
      return false;
    }
    z$$2 = z$$2 + 1;
    v25 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = JAM.new(Array, [arrayOfPatterns.length], JAM.policy.p30);
  var geneticCodeMatchExp = JAM.new(Array, [arrayOfPatterns.length], JAM.policy.p30);
  var j = 0;
  var v34 = j < arrayOfPatterns.length;
  for (;v34;) {
    var v28 = geneticCodeMatchExp;
    var v29 = j;
    var v890 = arrayOfPatterns[j];
    var v439 = JAM.call(v890.match, v890, [/\/.+\//], JAM.policy.p30) + "gi";
    if (JAM.isEval(eval)) {
      var v1172 = eval("introspect(JAM.policy.pFull) { " + v439 + " }")
    } else {
      var v1172 = JAM.call(eval, null, [v439])
    }
    introspect(JAM.policy.p13) {
      v28[v29] = v1172;
    }
    var v30 = geneticCodeMatchResult;
    var v31 = j;
    var v746 = arrayOfPatterns[j];
    var v440 = JAM.call(v746.match, v746, [/=[a-zA-Z\*]/], JAM.policy.p30);
    var v1173 = JAM.call(v440.toString, v440, [], JAM.policy.p30);
    introspect(JAM.policy.p13) {
      v30[v31] = v1173;
    }
    var v32 = geneticCodeMatchResult;
    var v33 = j;
    var v441 = geneticCodeMatchResult[j];
    var v1174 = JAM.call(v441.replace, v441, [/=/g, ""], JAM.policy.p30);
    introspect(JAM.policy.p13) {
      v32[v33] = v1174;
    }
    j = j + 1;
    v34 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v41 = i$$2 <= testSequence.length - 3;
  for (;v41;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p30);
    j = 0;
    var v39 = j < geneticCodeMatchExp.length;
    for (;v39;) {
      if (JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p30) != -1) {
        if (oneMatch == true) {
          JAM.call(alert, null, ["Genetic code error: more than one amino acid is coded by the codon: " + codon + "."], JAM.policy.p30);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      v39 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      JAM.call(alert, null, ["The genetic code expressions are missing a codon."], JAM.policy.p30);
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
    var v750 = arrayOfPatterns$$1[z$$3];
    if (JAM.call(v750.search, v750, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p30) != -1) {
      JAM.call(alert, null, ["One or more groups have been entered incorrectly."], JAM.policy.p30);
      return false;
    }
    z$$3 = z$$3 + 1;
    v43 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v47 = i$$3 < arrayOfPatterns$$1.length;
  for (;v47;) {
    var re = JAM.new(RegExp, ["[" + arrayOfPatterns$$1[i$$3] + "]", "gi"], JAM.policy.p30);
    var j$$1 = i$$3 + 1;
    var v46 = j$$1 < arrayOfPatterns$$1.length;
    for (;v46;) {
      var v752 = arrayOfPatterns$$1[j$$1];
      if (JAM.call(v752.search, v752, [re], JAM.policy.p30) != -1) {
        JAM.call(alert, null, ["The same amino acid is in more than one similarity group."], JAM.policy.p30);
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
    var v753 = arrayOfPatterns$$2[z$$4];
    if (JAM.call(v753.search, v753, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p30) == -1) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p30);
      return false;
    }
    if (JAM.call(moreExpressionCheck, null, [arrayOfPatterns$$2[z$$4]], JAM.policy.p30) == false) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p30);
      return false;
    }
    z$$4 = z$$4 + 1;
    v50 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v891 = JAM.call(getSequenceFromFasta, null, [text$$7], JAM.policy.p30);
  if (JAM.call(v891.replace, v891, [/[^A-Za-z]/g, ""], JAM.policy.p30).length > maxInput) {
    JAM.call(alert, null, ["Please enter a sequence consisting of less than or equal to " + maxInput + " characters."], JAM.policy.p30);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  if (text$$8.length > maxInput$$1) {
    JAM.call(alert, null, ["Please enter text consisting of less than or equal to " + maxInput$$1 + " characters."], JAM.policy.p30);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p30);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p30);
  return dnaSequence;
}
function closeForm() {
  var v55 = outputWindow.document;
  JAM.call(v55.write, v55, ["</form>"], JAM.policy.p30);
  return true;
}
function closePre() {
  var v56 = outputWindow.document;
  JAM.call(v56.write, v56, ["</div>"], JAM.policy.p30);
  var v57 = outputWindow.document;
  JAM.call(v57.write, v57, ["</pre>\n"], JAM.policy.p30);
  return;
}
function closeTextArea() {
  var v58 = outputWindow.document;
  JAM.call(v58.write, v58, ["</textarea>"], JAM.policy.p30);
  return true;
}
function closeWindow() {
  var v59 = outputWindow.document;
  JAM.call(v59.write, v59, ["</body>\n</html>\n"], JAM.policy.p30);
  outputWindow.status = "Done.";
  var v60 = outputWindow.document;
  JAM.call(v60.close, v60, [], JAM.policy.p30);
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = JAM.call(sequence$$1.toLowerCase, sequence$$1, [], JAM.policy.p30);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p30);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p30);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p30);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p30);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p30);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p30);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p30);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p30);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p30);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p30);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p30);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p30);
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  if (alignArray.length < 3) {
    JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p30);
    return false;
  }
  var i$$4 = 1;
  var v63 = i$$4 < alignArray.length;
  for (;v63;) {
    var v756 = alignArray[i$$4];
    if (JAM.call(v756.search, v756, [/[^\s]+\s/], JAM.policy.p30) == -1) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p30);
      return false;
    }
    i$$4 = i$$4 + 1;
    v63 = i$$4 < alignArray.length;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p30);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p30);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p30);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p30);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p30);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = JAM.new(Array, [], JAM.policy.p30);
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  if (JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p30) != -1) {
    var v65 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p30);
    for (;v65;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p30);
      v65 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p30);
    }
  } else {
    introspect(JAM.policy.p13) {
      arrayOfFasta[0] = sequenceData;
    }
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var stringToReturn = "&gt;results for " + sequence$$2.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p30) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"';
  }
  stringToReturn = stringToReturn + ' starting "' + JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p30) + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p30) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p30) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p30) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p30) + '"';
  return'<div class="info">' + stringToReturn$$1 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = JAM.new(Array, [arrayOfPatterns$$3.length], JAM.policy.p30);
  var j$$2 = 0;
  var v83 = j$$2 < arrayOfPatterns$$3.length;
  for (;v83;) {
    var v81 = geneticCodeMatchExp$$1;
    var v82 = j$$2;
    var v892 = arrayOfPatterns$$3[j$$2];
    var v488 = JAM.call(v892.match, v892, [/\/.+\//], JAM.policy.p30) + "gi";
    if (JAM.isEval(eval)) {
      var v1175 = eval("introspect(JAM.policy.pFull) { " + v488 + " }")
    } else {
      var v1175 = JAM.call(eval, null, [v488])
    }
    introspect(JAM.policy.p13) {
      v81[v82] = v1175;
    }
    j$$2 = j$$2 + 1;
    v83 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = JAM.new(Array, [arrayOfPatterns$$4.length], JAM.policy.p30);
  var j$$3 = 0;
  var v89 = j$$3 < arrayOfPatterns$$4.length;
  for (;v89;) {
    var v85 = geneticCodeMatchResult$$1;
    var v86 = j$$3;
    var v758 = arrayOfPatterns$$4[j$$3];
    var v491 = JAM.call(v758.match, v758, [/=[a-zA-Z\*]/], JAM.policy.p30);
    var v1176 = JAM.call(v491.toString, v491, [], JAM.policy.p30);
    introspect(JAM.policy.p13) {
      v85[v86] = v1176;
    }
    var v87 = geneticCodeMatchResult$$1;
    var v88 = j$$3;
    var v492 = geneticCodeMatchResult$$1[j$$3];
    var v1177 = JAM.call(v492.replace, v492, [/=/g, ""], JAM.policy.p30);
    introspect(JAM.policy.p13) {
      v87[v88] = v1177;
    }
    j$$3 = j$$3 + 1;
    v89 = j$$3 < arrayOfPatterns$$4.length;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p30) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"';
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p30) + '"';
  return'<div class="info">' + stringToReturn$$2 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p30) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"';
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p30) + '"';
  return'<div class="info">' + stringToReturn$$3 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p30) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p30) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p30) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleTwo$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p30) + '"';
  return'<div class="info">' + stringToReturn$$4 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = JAM.new(Array, [], JAM.policy.p30);
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v110 = j$$4 < lengthOut;
  for (;v110;) {
    tempNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p30) * components.length], JAM.policy.p30);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p30);
    j$$4 = j$$4 + 1;
    v110 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p30);
}
function getSequenceFromFasta(sequenceRecord) {
  if (JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p30) != -1) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p30);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if (JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p30) != -1) {
    var v112 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p30);
    fastaTitle = JAM.call(v112.toString, v112, [], JAM.policy.p30);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p30);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p30);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p30);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1143 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p30) != -1;
  if (!v1143) {
    v1143 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p30) != -1;
  }
  var v1134 = v1143;
  if (!v1134) {
    v1134 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p30) != -1;
  }
  var v1124 = v1134;
  if (!v1124) {
    v1124 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p30) != -1;
  }
  var v1112 = v1124;
  if (!v1112) {
    v1112 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p30) != -1;
  }
  var v1090 = v1112;
  if (!v1090) {
    v1090 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p30) != -1;
  }
  var v1052 = v1090;
  if (!v1052) {
    v1052 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p30) != -1;
  }
  var v992 = v1052;
  if (!v992) {
    v992 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p30) != -1;
  }
  var v893 = v992;
  if (!v893) {
    v893 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p30) != -1;
  }
  var v760 = v893;
  if (!v760) {
    v760 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p30) != -1;
  }
  var v520 = v760;
  if (!v520) {
    v520 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p30) != -1;
  }
  if (v520) {
    return false;
  }
  return true;
}
function openForm() {
  var v115 = outputWindow.document;
  JAM.call(v115.write, v115, ['<form action="">\n'], JAM.policy.p30);
  return true;
}
function openPre() {
  var v116 = outputWindow.document;
  JAM.call(v116.write, v116, ["<pre>"], JAM.policy.p30);
  var v117 = outputWindow.document;
  JAM.call(v117.write, v117, ['<div class="pre">'], JAM.policy.p30);
  return;
}
function openTextArea() {
  var v118 = outputWindow.document;
  JAM.call(v118.write, v118, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p30);
  return true;
}
function openWindow(title$$6) {
  JAM.call(_openWindow, null, [title$$6, true], JAM.policy.p30);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p30);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p30);
  var v119 = outputWindow.document;
  JAM.call(v119.write, v119, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p30);
  if (isColor) {
    var v121 = outputWindow.document;
    JAM.call(v121.write, v121, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p30);
  } else {
    var v123 = outputWindow.document;
    JAM.call(v123.write, v123, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p30);
  }
  var v125 = outputWindow.document;
  JAM.call(v125.write, v125, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$7 + " results</div>\n"], JAM.policy.p30);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$8) {
  JAM.call(_openWindowAlign, null, [title$$8, true], JAM.policy.p30);
  return;
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p30);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p30);
  var v127 = outputWindow.document;
  JAM.call(v127.write, v127, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p30);
  if (isBackground) {
    var v129 = outputWindow.document;
    JAM.call(v129.write, v129, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p30);
  } else {
    var v131 = outputWindow.document;
    JAM.call(v131.write, v131, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p30);
  }
  var v133 = outputWindow.document;
  JAM.call(v133.write, v133, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$9 + " results</div>\n"], JAM.policy.p30);
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p30);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p30);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p30);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p30);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p30);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p30);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p30);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p30);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p30);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = JAM.new(Array, [], JAM.policy.p30);
  if (JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p30) != -1) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p30);
    tempDnaArray = JAM.call(tempDnaArray.reverse, tempDnaArray, [], JAM.policy.p30);
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p30);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = JAM.call(theNumber.toString, theNumber, [], JAM.policy.p30);
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
  var testArray = JAM.new(Array, [], JAM.policy.p30);
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p30);
  if (testArray[0] != testString) {
    JAM.call(alert, null, ["Array object push method not supported. See browser compatibility page."], JAM.policy.p30);
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  if (JAM.call(testString.search, testString, [re$$2], JAM.policy.p30) == -1) {
    JAM.call(alert, null, ["Regular expression 'm' flag not supported. See browser compatibility page."], JAM.policy.p30);
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
    JAM.call(alert, null, ["Exception handling not supported. See browser compatibility page."], JAM.policy.p30);
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p30);
  if (testString != "1X2X3X") {
    JAM.call(alert, null, ["Nested function in String replace method not supported. See browser compatibility page."], JAM.policy.p30);
    return false;
  }
  var testNum = 2489.8237;
  if (JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p30) != 2489.824) {
    JAM.call(alert, null, ["Number toFixed() method not supported. See browser compatibility page."], JAM.policy.p30);
    return false;
  }
  if (JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p30) != 2489.8) {
    JAM.call(alert, null, ["Number toPrecision() method not supported. See browser compatibility page."], JAM.policy.p30);
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  if (JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p30) == -1) {
    JAM.call(alert, null, ["Please enter a number"], JAM.policy.p30);
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v904 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p30) == -1;
  if (!v904) {
    v904 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p30) == -1;
  }
  var v771 = v904;
  if (!v771) {
    v771 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p30) == -1;
  }
  var v535 = v771;
  if (!v535) {
    v535 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p30) == -1;
  }
  if (v535) {
    JAM.call(alert, null, ["Please enter the contents of an EMBL file."], JAM.policy.p30);
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if (JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p30) == -1) {
    JAM.call(alert, null, ["Please enter a number."], JAM.policy.p30);
    return false;
  }
  if (theNumber$$2 > maxInput$$2) {
    JAM.call(alert, null, ["Please enter a number less than or equal to " + maxInput$$2 + "."], JAM.policy.p30);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  if (JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p30) != -1) {
    JAM.call(alert, null, ["The sequence contains non-DNA characters, which will be omitted."], JAM.policy.p30);
  }
  return true;
}
function verifyProtein(proteinSequence) {
  if (JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p30) != -1) {
    JAM.call(alert, null, ["The sequence contains non-protein characters, which will be omitted."], JAM.policy.p30);
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v907 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p30) == -1;
  if (!v907) {
    v907 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p30) == -1;
  }
  var v774 = v907;
  if (!v774) {
    v774 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p30) == -1;
  }
  var v540 = v774;
  if (!v540) {
    v540 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p30) == -1;
  }
  if (v540) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p30);
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v910 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p30) == -1;
  if (!v910) {
    v910 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p30) == -1;
  }
  var v777 = v910;
  if (!v777) {
    v777 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p30) == -1;
  }
  var v541 = v777;
  if (!v541) {
    v541 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p30) == -1;
  }
  if (v541) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p30);
    return false;
  }
  if (JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p30) == -1) {
    JAM.call(alert, null, ["The file has no defined features."], JAM.policy.p30);
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v913 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p30) == -1;
  if (!v913) {
    v913 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p30) == -1;
  }
  var v780 = v913;
  if (!v780) {
    v780 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p30) == -1;
  }
  var v543 = v780;
  if (!v543) {
    v543 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p30) == -1;
  }
  if (v543) {
    JAM.call(alert, null, ["Please enter the contents of an EMBL file."], JAM.policy.p30);
    return false;
  }
  if (JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p30) == -1) {
    JAM.call(alert, null, ["The file has no defined features."], JAM.policy.p30);
    return false;
  }
  return true;
}
function writeGroupNum(text$$10, tabIn$$1, groupSize, basePerLine, startBase, stopBase) {
  var i$$5 = JAM.call(parseInt, null, [startBase], JAM.policy.p30);
  var k = 0;
  var lineOfText = "";
  var sepChar = " ";
  groupSize = JAM.call(parseInt, null, [groupSize], JAM.policy.p30);
  basePerLine = JAM.call(parseInt, null, [basePerLine], JAM.policy.p30);
  var v164 = i$$5 < stopBase;
  for (;v164;) {
    lineOfText = JAM.call(rightNum, null, [i$$5 + 1, lineOfText, 8, tabIn$$1], JAM.policy.p30);
    var j$$6 = 1;
    var v161 = j$$6 <= basePerLine / groupSize;
    for (;v161;) {
      var v160 = k < groupSize;
      for (;v160;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p30);
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
    JAM.call(v162.write, v162, [lineOfText + "\n"], JAM.policy.p30);
    lineOfText = "";
    v164 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  JAM.call(writeGroupNumDnaSetStart, null, [text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0], JAM.policy.p30);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v548 = adjustment < 0;
    if (v548) {
      v548 = adjusted >= 0;
    }
    if (v548) {
      adjusted = adjusted + 1;
    }
    return adjusted;
  }
  var i$$6 = JAM.call(parseInt, null, [startBase$$2], JAM.policy.p30);
  var k$$1 = 0;
  var lineOfText$$1 = "";
  var lineNum = "";
  var sepChar$$1 = " ";
  var aboveNum = "";
  groupSize$$2 = JAM.call(parseInt, null, [groupSize$$2], JAM.policy.p30);
  basePerLine$$2 = JAM.call(parseInt, null, [basePerLine$$2], JAM.policy.p30);
  numberingAdjustment = JAM.call(parseInt, null, [numberingAdjustment], JAM.policy.p30);
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
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p30);
        k$$1 = k$$1 + 1;
        v169 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      if (numberPosition$$1 == "above") {
        aboveNum = aboveNum + JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p30), "", groupSize$$2, tabIn$$3], JAM.policy.p30);
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
      JAM.call(v175.write, v175, [JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p30), "", 8, tabIn$$3], JAM.policy.p30) + lineOfText$$1 + "\n"], JAM.policy.p30);
      if (strands$$1 == "two") {
        var v177 = outputWindow.document;
        JAM.call(v177.write, v177, [JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p30), "", 8, tabIn$$3], JAM.policy.p30) + JAM.call(complement, null, [lineOfText$$1], JAM.policy.p30) + "\n"], JAM.policy.p30);
        var v179 = outputWindow.document;
        JAM.call(v179.write, v179, ["\n"], JAM.policy.p30);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v181 = outputWindow.document;
        JAM.call(v181.write, v181, [lineOfText$$1 + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p30) + "\n"], JAM.policy.p30);
        if (strands$$1 == "two") {
          var v183 = outputWindow.document;
          JAM.call(v183.write, v183, [JAM.call(complement, null, [lineOfText$$1], JAM.policy.p30) + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p30) + "\n"], JAM.policy.p30);
          var v185 = outputWindow.document;
          JAM.call(v185.write, v185, ["\n"], JAM.policy.p30);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v187 = outputWindow.document;
          JAM.call(v187.write, v187, [aboveNum + "\n"], JAM.policy.p30);
          var v189 = outputWindow.document;
          JAM.call(v189.write, v189, [lineOfText$$1 + "\n"], JAM.policy.p30);
          if (strands$$1 == "two") {
            var v191 = outputWindow.document;
            JAM.call(v191.write, v191, [JAM.call(complement, null, [lineOfText$$1], JAM.policy.p30) + "\n"], JAM.policy.p30);
            var v193 = outputWindow.document;
            JAM.call(v193.write, v193, ["\n"], JAM.policy.p30);
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
  var i$$7 = JAM.call(parseInt, null, [startBase$$3], JAM.policy.p30);
  var k$$2 = 0;
  var lineOfText$$2 = "";
  var lineNum$$1 = "";
  var sepChar$$2 = " ";
  var aboveNum$$1 = "";
  groupSize$$3 = JAM.call(parseInt, null, [groupSize$$3], JAM.policy.p30);
  basePerLine$$3 = JAM.call(parseInt, null, [basePerLine$$3], JAM.policy.p30);
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
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p30);
        k$$2 = k$$2 + 1;
        v202 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      if (numberPosition$$2 == "above") {
        aboveNum$$1 = aboveNum$$1 + JAM.call(rightNum, null, [i$$7, "", groupSize$$3, tabIn$$4], JAM.policy.p30);
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
      JAM.call(v208.write, v208, [JAM.call(rightNum, null, [lineNum$$1, "", 8, tabIn$$4], JAM.policy.p30) + lineOfText$$2 + "\n"], JAM.policy.p30);
    } else {
      if (numberPosition$$2 == "right") {
        var v210 = outputWindow.document;
        JAM.call(v210.write, v210, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p30);
      } else {
        if (numberPosition$$2 == "above") {
          var v212 = outputWindow.document;
          JAM.call(v212.write, v212, [aboveNum$$1 + "\n"], JAM.policy.p30);
          var v214 = outputWindow.document;
          JAM.call(v214.write, v214, [lineOfText$$2 + "\n"], JAM.policy.p30);
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
  numMut = JAM.call(parseInt, null, [numMut], JAM.policy.p30);
  firstIndexToMutate = JAM.call(parseInt, null, [firstIndexToMutate], JAM.policy.p30);
  lastIndexToMutate = JAM.call(parseInt, null, [lastIndexToMutate], JAM.policy.p30);
  var v791 = sequence$$13.length <= firstIndexToMutate;
  if (!v791) {
    v791 = lastIndexToMutate < 0;
  }
  var v565 = v791;
  if (!v565) {
    v565 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v565) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v228 = i$$8 < numMut;
  for (;v228;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p30) * maxNum], JAM.policy.p30);
    var v567 = randNum < firstIndexToMutate;
    if (!v567) {
      v567 = randNum > lastIndexToMutate;
    }
    if (v567) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v228 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p30);
    needNewChar = true;
    for (;needNewChar;) {
      componentsIndex = JAM.call(Math.round, Math, [JAM.call(Math.random, Math, [], JAM.policy.p30) * components$$1.length], JAM.policy.p30);
      if (componentsIndex == components$$1.length) {
        componentsIndex = 0;
      }
      if (components$$1[componentsIndex] != currentChar) {
        needNewChar = false;
      }
    }
    sequence$$13 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p30) + components$$1[componentsIndex] + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p30);
    i$$8 = i$$8 + 1;
    v228 = i$$8 < numMut;
  }
  var v229 = outputWindow.document;
  JAM.call(v229.write, v229, [JAM.call(addReturns, null, [sequence$$13], JAM.policy.p30)], JAM.policy.p30);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v235 = j$$9 < lengthOut$$1;
  for (;v235;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p30) * components$$2.length], JAM.policy.p30);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v232 = outputWindow.document;
      JAM.call(v232.write, v232, [sequence$$14 + "\n"], JAM.policy.p30);
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v235 = j$$9 < lengthOut$$1;
  }
  var v236 = outputWindow.document;
  JAM.call(v236.write, v236, [sequence$$14 + "\n"], JAM.policy.p30);
  return true;
}
function writeRestrictionSites(sequence$$15, arrayOfItems, dnaConformation) {
  var resultArray = JAM.new(Array, [], JAM.policy.p30);
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
    shiftValue = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p30).length;
    sequence$$15 = JAM.call(sequence$$15.substring, sequence$$15, [sequence$$15.length - lookAhead, sequence$$15.length], JAM.policy.p30) + sequence$$15 + JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p30);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v242 = outputWindow.document;
  JAM.call(v242.write, v242, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p30);
  var v243 = outputWindow.document;
  JAM.call(v243.write, v243, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p30);
  var i$$9 = 0;
  var v260 = i$$9 < arrayOfItems.length;
  for (;v260;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v582 = arrayOfItems[i$$9];
    matchExp = JAM.call(v582.match, v582, [/\/.+\//], JAM.policy.p30) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v922 = arrayOfItems[i$$9];
    var v797 = JAM.call(v922.match, v922, [/\)\D*\d+/], JAM.policy.p30);
    var v583 = JAM.call(v797.toString, v797, [], JAM.policy.p30);
    cutDistance = JAM.call(parseFloat, null, [JAM.call(v583.replace, v583, [/\)\D*/, ""], JAM.policy.p30)], JAM.policy.p30);
    var v252 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p30);
    for (;v252;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v584 = matchPosition >= lowerLimit;
      if (v584) {
        v584 = matchPosition < upperLimit;
      }
      if (v584) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v252 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p30);
    }
    if (JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p30) != -1) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p30);
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
    var v1097 = '<tr><td class="' + backGroundClass + '">';
    var v1141 = arrayOfItems[i$$9];
    var v1131 = JAM.call(v1141.match, v1141, [/\([^\(]+\)/], JAM.policy.p30);
    var v1120 = JAM.call(v1131.toString, v1131, [], JAM.policy.p30);
    JAM.call(v258.write, v258, [v1097 + JAM.call(v1120.replace, v1120, [/\(|\)/g, ""], JAM.policy.p30) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p30);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v260 = i$$9 < arrayOfItems.length;
  }
  var v261 = outputWindow.document;
  JAM.call(v261.write, v261, ["</tbody></table>\n"], JAM.policy.p30);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v262 = outputWindow.document;
  JAM.call(v262.write, v262, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p30);
  var v263 = outputWindow.document;
  JAM.call(v263.write, v263, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p30);
  var i$$10 = 0;
  var v273 = i$$10 < arrayOfItems$$1.length;
  for (;v273;) {
    var tempNumber = 0;
    var v593 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v593.match, v593, [/\/[^\/]+\//], JAM.policy.p30) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p30) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p30).length;
    }
    var percentage = 0;
    var v801 = originalLength + 1;
    var v1013 = arrayOfItems$$1[i$$10];
    if (v801 - JAM.call(parseFloat, null, [JAM.call(v1013.match, v1013, [/\d+/], JAM.policy.p30)], JAM.policy.p30) > 0) {
      var v268 = 100 * tempNumber;
      var v596 = originalLength + 1;
      var v926 = arrayOfItems$$1[i$$10];
      percentage = v268 / (v596 - JAM.call(parseFloat, null, [JAM.call(v926.match, v926, [/\d+/], JAM.policy.p30)], JAM.policy.p30));
    }
    var v271 = outputWindow.document;
    var v1142 = arrayOfItems$$1[i$$10];
    var v1132 = JAM.call(v1142.match, v1142, [/\([^\(]+\)\b/], JAM.policy.p30);
    var v1121 = JAM.call(v1132.toString, v1132, [], JAM.policy.p30);
    JAM.call(v271.write, v271, ["<tr><td>" + JAM.call(v1121.replace, v1121, [/\(|\)/g, ""], JAM.policy.p30) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p30) + "</td></tr>\n"], JAM.policy.p30);
    i$$10 = i$$10 + 1;
    v273 = i$$10 < arrayOfItems$$1.length;
  }
  var v274 = outputWindow.document;
  JAM.call(v274.write, v274, ["</tbody></table>\n"], JAM.policy.p30);
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
    randNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p30) * maxNum$$1], JAM.policy.p30);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p30);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p30);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p30);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v278 = outputWindow.document;
      JAM.call(v278.write, v278, [tempSeq + "\n"], JAM.policy.p30);
      tempSeq = "";
    }
    v281 = sequence$$17.length > 0;
  }
  var v282 = outputWindow.document;
  JAM.call(v282.write, v282, [tempSeq + "\n"], JAM.policy.p30);
  return true;
}
function rangeExtract(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = JAM.new(Array, [], JAM.policy.p30);
  if (JAM.call(testScript, null, [], JAM.policy.p30) == false) {
    return false;
  }
  var v806 = JAM.call(checkFormElement, null, [theDocument.forms[0].elements[0]], JAM.policy.p30) == false;
  if (!v806) {
    v806 = JAM.call(checkSequenceLength, null, [theDocument.forms[0].elements[0].value, maxInput$$3], JAM.policy.p30) == false;
  }
  var v605 = v806;
  if (!v605) {
    v605 = JAM.call(checkFormElement, null, [theDocument.forms[0].elements[1]], JAM.policy.p30) == false;
  }
  if (v605) {
    return false;
  }
  var v286 = theDocument.forms[0].elements[1].value;
  var arrayOfRanges = JAM.call(v286.split, v286, [/,/], JAM.policy.p30);
  var arrayOfStartAndEnd;
  var i$$11 = 0;
  var v293 = i$$11 < arrayOfRanges.length;
  for (;v293;) {
    var v287 = arrayOfRanges[i$$11];
    arrayOfStartAndEnd = JAM.call(v287.split, v287, [/\.\./], JAM.policy.p30);
    if (arrayOfStartAndEnd.length == 1) {
      matchFound = true;
      JAM.call(ranges.push, ranges, [JAM.new(Range, [arrayOfStartAndEnd[0], arrayOfStartAndEnd[0]], JAM.policy.p30)], JAM.policy.p30);
    } else {
      if (arrayOfStartAndEnd.length == 2) {
        matchFound = true;
        JAM.call(ranges.push, ranges, [JAM.new(Range, [arrayOfStartAndEnd[0], arrayOfStartAndEnd[1]], JAM.policy.p30)], JAM.policy.p30);
      } else {
        JAM.call(alert, null, ["The following range entry was ignored: " + arrayOfRanges[i$$11]], JAM.policy.p30);
      }
    }
    i$$11 = i$$11 + 1;
    v293 = i$$11 < arrayOfRanges.length;
  }
  if (matchFound == false) {
    JAM.call(alert, null, ["No ranges were entered."], JAM.policy.p30);
    return false;
  }
  JAM.call(openWindow, null, ["Range Extractor DNA"], JAM.policy.p30);
  JAM.call(openPre, null, [], JAM.policy.p30);
  var arrayOfFasta$$1 = JAM.call(getArrayOfFasta, null, [theDocument.forms[0].elements[0].value], JAM.policy.p30);
  i$$11 = 0;
  var v302 = i$$11 < arrayOfFasta$$1.length;
  for (;v302;) {
    newDna = JAM.call(getSequenceFromFasta, null, [arrayOfFasta$$1[i$$11]], JAM.policy.p30);
    title = JAM.call(getTitleFromFasta, null, [arrayOfFasta$$1[i$$11]], JAM.policy.p30);
    JAM.call(verifyDna, null, [newDna], JAM.policy.p30);
    newDna = JAM.call(removeNonDna, null, [newDna], JAM.policy.p30);
    var v298 = outputWindow.document;
    JAM.call(v298.write, v298, [JAM.call(getFastaTitleFromTitleAndSequence, null, [title, newDna], JAM.policy.p30)], JAM.policy.p30);
    JAM.call(writeSequenceRanges, null, [newDna, ranges, theDocument.forms[0].elements[5].options[theDocument.forms[0].elements[5].selectedIndex].value, theDocument.forms[0].elements[6].options[theDocument.forms[0].elements[6].selectedIndex].value], JAM.policy.p30);
    i$$11 = i$$11 + 1;
    v302 = i$$11 < arrayOfFasta$$1.length;
  }
  JAM.call(closePre, null, [], JAM.policy.p30);
  JAM.call(closeWindow, null, [], JAM.policy.p30);
  return true;
}
function writeSequenceRanges(sequence$$18, ranges$$1, strand, segmentType) {
  var rangeGroup = JAM.new(RangeGroup, [strand, segmentType], JAM.policy.p30);
  var center_base = JAM.call(Math.round, Math, [sequence$$18.length / 2], JAM.policy.p30);
  var i$$12 = 0;
  var v317 = i$$12 < ranges$$1.length;
  for (;v317;) {
    var v304 = ranges$$1[i$$12];
    var v815 = ranges$$1[i$$12].start;
    var v623 = JAM.call(v815.toString, v815, [], JAM.policy.p30);
    var v1178 = JAM.call(v623.replace, v623, [/start|begin/gi, 1], JAM.policy.p30);
    v304.start = v1178;
    var v305 = ranges$$1[i$$12];
    var v816 = ranges$$1[i$$12].start;
    var v624 = JAM.call(v816.toString, v816, [], JAM.policy.p30);
    var v1179 = JAM.call(v624.replace, v624, [/stop|end/gi, sequence$$18.length], JAM.policy.p30);
    v305.start = v1179;
    var v306 = ranges$$1[i$$12];
    var v817 = ranges$$1[i$$12].start;
    var v626 = JAM.call(v817.toString, v817, [], JAM.policy.p30);
    var v1180 = JAM.call(v626.replace, v626, [/length/gi, sequence$$18.length], JAM.policy.p30);
    v306.start = v1180;
    var v307 = ranges$$1[i$$12];
    var v818 = ranges$$1[i$$12].start;
    var v628 = JAM.call(v818.toString, v818, [], JAM.policy.p30);
    var v1181 = JAM.call(v628.replace, v628, [/middle|center|centre/gi, center_base], JAM.policy.p30);
    v307.start = v1181;
    var v308 = ranges$$1[i$$12];
    var v819 = ranges$$1[i$$12].stop;
    var v629 = JAM.call(v819.toString, v819, [], JAM.policy.p30);
    var v1182 = JAM.call(v629.replace, v629, [/start|begin/gi, 1], JAM.policy.p30);
    v308.stop = v1182;
    var v309 = ranges$$1[i$$12];
    var v820 = ranges$$1[i$$12].stop;
    var v630 = JAM.call(v820.toString, v820, [], JAM.policy.p30);
    var v1183 = JAM.call(v630.replace, v630, [/stop|end/gi, sequence$$18.length], JAM.policy.p30);
    v309.stop = v1183;
    var v310 = ranges$$1[i$$12];
    var v821 = ranges$$1[i$$12].stop;
    var v632 = JAM.call(v821.toString, v821, [], JAM.policy.p30);
    var v1184 = JAM.call(v632.replace, v632, [/length/gi, sequence$$18.length], JAM.policy.p30);
    v310.stop = v1184;
    var v311 = ranges$$1[i$$12];
    var v822 = ranges$$1[i$$12].stop;
    var v634 = JAM.call(v822.toString, v822, [], JAM.policy.p30);
    var v1185 = JAM.call(v634.replace, v634, [/middle|center|centre/gi, center_base], JAM.policy.p30);
    v311.stop = v1185;
    try {
      var v312 = ranges$$1[i$$12];
      var v946 = ranges$$1[i$$12].start;
      var v823 = JAM.call(v946.toString, v946, [], JAM.policy.p30);
      if (JAM.isEval(eval)) {
        var v635 = eval("introspect(JAM.policy.pFull) { " + v823 + " }")
      } else {
        var v635 = JAM.call(eval, null, [v823])
      }
      var v1186 = JAM.call(parseInt, null, [v635], JAM.policy.p30);
      v312.start = v1186;
    } catch (e$$5) {
      JAM.call(alert, null, ["Could not evaluate the following expression: " + ranges$$1[i$$12].start], JAM.policy.p30);
      return false;
    }
    try {
      var v314 = ranges$$1[i$$12];
      var v947 = ranges$$1[i$$12].stop;
      var v825 = JAM.call(v947.toString, v947, [], JAM.policy.p30);
      if (JAM.isEval(eval)) {
        var v637 = eval("introspect(JAM.policy.pFull) { " + v825 + " }")
      } else {
        var v637 = JAM.call(eval, null, [v825])
      }
      var v1187 = JAM.call(parseInt, null, [v637], JAM.policy.p30);
      v314.stop = v1187;
    } catch (e$$6) {
      JAM.call(alert, null, ["Could not evaluate the following expression: " + ranges$$1[i$$12].stop], JAM.policy.p30);
      return false;
    }
    JAM.call(rangeGroup.addRange, rangeGroup, [ranges$$1[i$$12]], JAM.policy.p30);
    i$$12 = i$$12 + 1;
    v317 = i$$12 < ranges$$1.length;
  }
  JAM.call(rangeGroup.writeRanges, rangeGroup, [sequence$$18], JAM.policy.p30);
  return;
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = JAM.new(Array, [], JAM.policy.p30);
  if (this.start == this.stop) {
    if (this.start < 1) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.start + " is less than 1"], JAM.policy.p30);
    }
    if (this.start > sequence$$19.length) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.start + " is greater than the sequence length"], JAM.policy.p30);
    }
  } else {
    if (this.start < 1) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.start + " is less than 1"], JAM.policy.p30);
    }
    if (this.stop < 1) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.stop + " is less than 1"], JAM.policy.p30);
    }
    if (this.start > sequence$$19.length) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.start + " is greater than the sequence length"], JAM.policy.p30);
    }
    if (this.stop > sequence$$19.length) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.stop + " is greater than the sequence length"], JAM.policy.p30);
    }
    if (this.start > this.stop) {
      problem = true;
      JAM.call(warnings.push, warnings, ["stop position is less than start position in range " + this.start + " to " + this.stop], JAM.policy.p30);
    }
  }
  if (problem) {
    JAM.call(alert, null, ["An entry was skipped because of the following:\n" + JAM.call(warnings.join, warnings, [",\n"], JAM.policy.p30)], JAM.policy.p30);
    return false;
  } else {
    if (this.start == this.stop) {
      return JAM.call(sequence$$19.charAt, sequence$$19, [this.start - 1], JAM.policy.p30);
    } else {
      return JAM.call(sequence$$19.substring, sequence$$19, [this.start - 1, this.stop], JAM.policy.p30);
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
function Range(start$$4, stop) {
  this.start = start$$4;
  this.stop = stop;
  return;
}
function addRange(range$$5) {
  var v342 = this.ranges;
  JAM.call(v342.push, v342, [range$$5], JAM.policy.p30);
  return;
}
function writeRanges(sequence$$20) {
  function v9(str$$15, p1$$9, offset$$17, s$$11) {
    return JAM.call(sequence$$20.substring, sequence$$20, [offset$$17, offset$$17 + p1$$9.length], JAM.policy.p30);
  }
  function v8(str$$14, p1$$8, p2$$3, offset$$16, s$$10) {
    return p1$$8 + JAM.call(sequence$$20.substring, sequence$$20, [p1$$8.length, p1$$8.length + p2$$3.length], JAM.policy.p30);
  }
  function v7(str$$13, p1$$7, offset$$15, s$$9) {
    return JAM.call(getRandomSequence, null, [["g", "a", "c", "t"], p1$$7.length], JAM.policy.p30);
  }
  function v6(str$$12, p1$$6, p2$$2, offset$$14, s$$8) {
    return p1$$6 + JAM.call(getRandomSequence, null, [["g", "a", "c", "t"], p2$$2.length], JAM.policy.p30);
  }
  function v5(str$$11, p1$$5, offset$$13, s$$7) {
    return JAM.call(p1$$5.toLowerCase, p1$$5, [], JAM.policy.p30);
  }
  function v4(str$$10, p1$$4, p2$$1, offset$$12, s$$6) {
    return p1$$4 + JAM.call(p2$$1.toLowerCase, p2$$1, [], JAM.policy.p30);
  }
  function v3(str$$9, p1$$3, offset$$11, s$$5) {
    return JAM.call(p1$$3.toUpperCase, p1$$3, [], JAM.policy.p30);
  }
  function v2(str$$8, p1$$2, p2, offset$$10, s$$4) {
    return p1$$2 + JAM.call(p2.toUpperCase, p2, [], JAM.policy.p30);
  }
  var sequenceArray$$1 = JAM.new(Array, [], JAM.policy.p30);
  if (this.type == "new_sequence") {
    var i$$13 = 0;
    var v356 = i$$13 < this.ranges.length;
    for (;v356;) {
      var v838 = this.ranges[i$$13];
      if (JAM.call(v838.getSequence, v838, [sequence$$20], JAM.policy.p30) != "") {
        var v677 = this.ranges[i$$13];
        JAM.call(sequenceArray$$1.push, sequenceArray$$1, [JAM.call(v677.getSequence, v677, [sequence$$20], JAM.policy.p30)], JAM.policy.p30);
      }
      i$$13 = i$$13 + 1;
      v356 = i$$13 < this.ranges.length;
    }
    if (this.strand == "reverse") {
      var v357 = outputWindow.document;
      JAM.call(v357.write, v357, [JAM.call(addReturns, null, [JAM.call(reverse, null, [JAM.call(complement, null, [JAM.call(sequenceArray$$1.join, sequenceArray$$1, [""], JAM.policy.p30)], JAM.policy.p30)], JAM.policy.p30)], JAM.policy.p30) + "\n\n"], JAM.policy.p30);
    } else {
      var v359 = outputWindow.document;
      JAM.call(v359.write, v359, [JAM.call(addReturns, null, [JAM.call(sequenceArray$$1.join, sequenceArray$$1, [""], JAM.policy.p30)], JAM.policy.p30) + "\n\n"], JAM.policy.p30);
    }
    return true;
  }
  if (this.type == "separate") {
    i$$13 = 0;
    var v371 = i$$13 < this.ranges.length;
    for (;v371;) {
      var v844 = this.ranges[i$$13];
      if (JAM.call(v844.getSequence, v844, [sequence$$20], JAM.policy.p30) != "") {
        var v363 = outputWindow.document;
        var v845 = this.ranges[i$$13];
        JAM.call(v363.write, v363, [JAM.call(v845.getTitle, v845, [], JAM.policy.p30) + "\n"], JAM.policy.p30);
        if (this.strand == "reverse") {
          var v365 = outputWindow.document;
          var v1069 = this.ranges[i$$13];
          JAM.call(v365.write, v365, [JAM.call(reverse, null, [JAM.call(complement, null, [JAM.call(addReturns, null, [JAM.call(v1069.getSequence, v1069, [sequence$$20], JAM.policy.p30)], JAM.policy.p30)], JAM.policy.p30)], JAM.policy.p30) + "\n\n"], JAM.policy.p30);
        } else {
          var v367 = outputWindow.document;
          var v954 = this.ranges[i$$13];
          JAM.call(v367.write, v367, [JAM.call(addReturns, null, [JAM.call(v954.getSequence, v954, [sequence$$20], JAM.policy.p30)], JAM.policy.p30) + "\n\n"], JAM.policy.p30);
        }
      }
      i$$13 = i$$13 + 1;
      v371 = i$$13 < this.ranges.length;
    }
    return true;
  }
  if (this.type == "uppercased") {
    var re$$3;
    sequence$$20 = JAM.call(sequence$$20.toLowerCase, sequence$$20, [], JAM.policy.p30);
    i$$13 = 0;
    var v377 = i$$13 < this.ranges.length;
    for (;v377;) {
      var v850 = this.ranges[i$$13];
      if (JAM.call(v850.getSequence, v850, [sequence$$20], JAM.policy.p30) != "") {
        if (this.ranges[i$$13].start > 1) {
          re$$3 = "(.{" + (this.ranges[i$$13].start - 1) + "})\\B(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p30);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v2], JAM.policy.p30);
        } else {
          re$$3 = "(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p30);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v3], JAM.policy.p30);
        }
      }
      i$$13 = i$$13 + 1;
      v377 = i$$13 < this.ranges.length;
    }
    if (this.strand == "reverse") {
      var v378 = outputWindow.document;
      JAM.call(v378.write, v378, [JAM.call(reverse, null, [JAM.call(complement, null, [JAM.call(addReturns, null, [sequence$$20], JAM.policy.p30)], JAM.policy.p30)], JAM.policy.p30) + "\n\n"], JAM.policy.p30);
    } else {
      var v380 = outputWindow.document;
      JAM.call(v380.write, v380, [JAM.call(addReturns, null, [sequence$$20], JAM.policy.p30) + "\n\n"], JAM.policy.p30);
    }
    return true;
  }
  if (this.type == "lowercased") {
    sequence$$20 = JAM.call(sequence$$20.toUpperCase, sequence$$20, [], JAM.policy.p30);
    i$$13 = 0;
    var v388 = i$$13 < this.ranges.length;
    for (;v388;) {
      var v858 = this.ranges[i$$13];
      if (JAM.call(v858.getSequence, v858, [sequence$$20], JAM.policy.p30) != "") {
        if (this.ranges[i$$13].start > 1) {
          re$$3 = "(.{" + (this.ranges[i$$13].start - 1) + "})\\B(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p30);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v4], JAM.policy.p30);
        } else {
          re$$3 = "(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p30);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v5], JAM.policy.p30);
        }
      }
      i$$13 = i$$13 + 1;
      v388 = i$$13 < this.ranges.length;
    }
    if (this.strand == "reverse") {
      var v389 = outputWindow.document;
      JAM.call(v389.write, v389, [JAM.call(reverse, null, [JAM.call(complement, null, [JAM.call(addReturns, null, [sequence$$20], JAM.policy.p30)], JAM.policy.p30)], JAM.policy.p30) + "\n\n"], JAM.policy.p30);
    } else {
      var v391 = outputWindow.document;
      JAM.call(v391.write, v391, [JAM.call(addReturns, null, [sequence$$20], JAM.policy.p30) + "\n\n"], JAM.policy.p30);
    }
    return true;
  }
  if (this.type == "randomized") {
    i$$13 = 0;
    var v399 = i$$13 < this.ranges.length;
    for (;v399;) {
      var v866 = this.ranges[i$$13];
      if (JAM.call(v866.getSequence, v866, [sequence$$20], JAM.policy.p30) != "") {
        if (this.ranges[i$$13].start > 1) {
          re$$3 = "(.{" + (this.ranges[i$$13].start - 1) + "})\\B(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p30);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v6], JAM.policy.p30);
        } else {
          re$$3 = "(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p30);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v7], JAM.policy.p30);
        }
      }
      i$$13 = i$$13 + 1;
      v399 = i$$13 < this.ranges.length;
    }
    if (this.strand == "reverse") {
      var v400 = outputWindow.document;
      JAM.call(v400.write, v400, [JAM.call(reverse, null, [JAM.call(complement, null, [JAM.call(addReturns, null, [sequence$$20], JAM.policy.p30)], JAM.policy.p30)], JAM.policy.p30) + "\n\n"], JAM.policy.p30);
    } else {
      var v402 = outputWindow.document;
      JAM.call(v402.write, v402, [JAM.call(addReturns, null, [sequence$$20], JAM.policy.p30) + "\n\n"], JAM.policy.p30);
    }
    return true;
  }
  if (this.type == "preserved") {
    var randomSequence = JAM.call(getRandomSequence, null, [["g", "a", "c", "t"], sequence$$20.length], JAM.policy.p30);
    i$$13 = 0;
    var v412 = i$$13 < this.ranges.length;
    for (;v412;) {
      var v874 = this.ranges[i$$13];
      if (JAM.call(v874.getSequence, v874, [sequence$$20], JAM.policy.p30) != "") {
        if (this.ranges[i$$13].start > 1) {
          re$$3 = "(.{" + (this.ranges[i$$13].start - 1) + "})\\B(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p30);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v8], JAM.policy.p30);
        } else {
          re$$3 = "(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p30);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v9], JAM.policy.p30);
        }
      }
      i$$13 = i$$13 + 1;
      v412 = i$$13 < this.ranges.length;
    }
    if (this.strand == "reverse") {
      var v413 = outputWindow.document;
      JAM.call(v413.write, v413, [JAM.call(reverse, null, [JAM.call(complement, null, [JAM.call(addReturns, null, [randomSequence], JAM.policy.p30)], JAM.policy.p30)], JAM.policy.p30) + "\n\n"], JAM.policy.p30);
    } else {
      var v415 = outputWindow.document;
      JAM.call(v415.write, v415, [JAM.call(addReturns, null, [randomSequence], JAM.policy.p30) + "\n\n"], JAM.policy.p30);
    }
    return true;
  }
  return;
}
function RangeGroup(strand$$1, type$$25) {
  this.strand = strand$$1;
  this.type = type$$25;
  var v1188 = JAM.new(Array, [], JAM.policy.p30);
  this.ranges = v1188;
  return;
}
JAM.new(Range, [0, 0], JAM.policy.p30);
Range.prototype.getSequence = getSequence;
Range.prototype.getTitle = getTitle;
JAM.new(RangeGroup, ["", ""], JAM.policy.p30);
RangeGroup.prototype.addRange = addRange;
RangeGroup.prototype.writeRanges = writeRanges;
JAM.set(document, "onload", v10);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p30), "onclick", v11);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p30), "onclick", v12)

