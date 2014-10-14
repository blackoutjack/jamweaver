// sms2-window-extract-protein.js
function v12() {
  document.forms[0].elements[0].value = " ";
  return;
}
function v11() {
  try {
    JAM.call(windowExtract, null, [document], JAM.policy.p30);
  } catch (e$$7) {
    JAM.call(alert, null, ["The following error was encountered: " + e$$7], JAM.policy.p30);
  }
  return;
}
function v10() {
  var v15 = document.main_form.main_submit;
  JAM.call(v15.focus, v15, [], JAM.policy.p30);
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
  var v19 = i$$1 < arrayOfTitles.length;
  for (;v19;) {
    var v984 = arrayOfTitles[i$$1];
    var v730 = JAM.call(v984.search, v984, [/\S/], JAM.policy.p30) == -1;
    if (!v730) {
      var v985 = arrayOfSequences[i$$1];
      v730 = JAM.call(v985.search, v985, [/\S/], JAM.policy.p30) == -1;
    }
    var v428 = v730;
    if (!v428) {
      v428 = arrayOfSequences[i$$1].length != lengthOfAlign;
    }
    if (v428) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p30);
      return false;
    }
    i$$1 = i$$1 + 1;
    v19 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v986 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p30) == -1;
  if (!v986) {
    v986 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p30) == -1;
  }
  var v882 = v986;
  if (!v882) {
    v882 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p30) == -1;
  }
  var v733 = v882;
  if (!v733) {
    v733 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p30) == -1;
  }
  var v430 = v733;
  if (!v430) {
    v430 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p30) == -1;
  }
  if (v430) {
    JAM.call(alert, null, ["The codon table has been entered incorrectly."], JAM.policy.p30);
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v736 = formElement.value;
  if (JAM.call(v736.search, v736, [/\S/], JAM.policy.p30) == -1) {
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
  var v24 = z$$2 < arrayOfPatterns.length;
  for (;v24;) {
    var v737 = arrayOfPatterns[z$$2];
    if (JAM.call(v737.search, v737, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p30) == -1) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p30);
      return false;
    }
    if (JAM.call(moreExpressionCheck, null, [arrayOfPatterns[z$$2]], JAM.policy.p30) == false) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p30);
      return false;
    }
    z$$2 = z$$2 + 1;
    v24 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = JAM.new(Array, [arrayOfPatterns.length], JAM.policy.p30);
  var geneticCodeMatchExp = JAM.new(Array, [arrayOfPatterns.length], JAM.policy.p30);
  var j = 0;
  var v33 = j < arrayOfPatterns.length;
  for (;v33;) {
    var v27 = geneticCodeMatchExp;
    var v28 = j;
    var v885 = arrayOfPatterns[j];
    var v437 = JAM.call(v885.match, v885, [/\/.+\//], JAM.policy.p30) + "gi";
    if (JAM.isEval(eval)) {
      var v1207 = eval("introspect(JAM.policy.pFull) { " + v437 + " }")
    } else {
      var v1207 = JAM.call(eval, null, [v437])
    }
    introspect(JAM.policy.p13) {
      v27[v28] = v1207;
    }
    var v29 = geneticCodeMatchResult;
    var v30 = j;
    var v740 = arrayOfPatterns[j];
    var v438 = JAM.call(v740.match, v740, [/=[a-zA-Z\*]/], JAM.policy.p30);
    var v1208 = JAM.call(v438.toString, v438, [], JAM.policy.p30);
    introspect(JAM.policy.p13) {
      v29[v30] = v1208;
    }
    var v31 = geneticCodeMatchResult;
    var v32 = j;
    var v439 = geneticCodeMatchResult[j];
    var v1209 = JAM.call(v439.replace, v439, [/=/g, ""], JAM.policy.p30);
    introspect(JAM.policy.p13) {
      v31[v32] = v1209;
    }
    j = j + 1;
    v33 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v40 = i$$2 <= testSequence.length - 3;
  for (;v40;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p30);
    j = 0;
    var v38 = j < geneticCodeMatchExp.length;
    for (;v38;) {
      if (JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p30) != -1) {
        if (oneMatch == true) {
          JAM.call(alert, null, ["Genetic code error: more than one amino acid is coded by the codon: " + codon + "."], JAM.policy.p30);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      v38 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      JAM.call(alert, null, ["The genetic code expressions are missing a codon."], JAM.policy.p30);
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
    var v744 = arrayOfPatterns$$1[z$$3];
    if (JAM.call(v744.search, v744, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p30) != -1) {
      JAM.call(alert, null, ["One or more groups have been entered incorrectly."], JAM.policy.p30);
      return false;
    }
    z$$3 = z$$3 + 1;
    v42 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v46 = i$$3 < arrayOfPatterns$$1.length;
  for (;v46;) {
    var re = JAM.new(RegExp, ["[" + arrayOfPatterns$$1[i$$3] + "]", "gi"], JAM.policy.p30);
    var j$$1 = i$$3 + 1;
    var v45 = j$$1 < arrayOfPatterns$$1.length;
    for (;v45;) {
      var v746 = arrayOfPatterns$$1[j$$1];
      if (JAM.call(v746.search, v746, [re], JAM.policy.p30) != -1) {
        JAM.call(alert, null, ["The same amino acid is in more than one similarity group."], JAM.policy.p30);
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
    var v747 = arrayOfPatterns$$2[z$$4];
    if (JAM.call(v747.search, v747, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p30) == -1) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p30);
      return false;
    }
    if (JAM.call(moreExpressionCheck, null, [arrayOfPatterns$$2[z$$4]], JAM.policy.p30) == false) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p30);
      return false;
    }
    z$$4 = z$$4 + 1;
    v49 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v886 = JAM.call(getSequenceFromFasta, null, [text$$7], JAM.policy.p30);
  if (JAM.call(v886.replace, v886, [/[^A-Za-z]/g, ""], JAM.policy.p30).length > maxInput) {
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
  var v54 = outputWindow.document;
  JAM.call(v54.write, v54, ["</form>"], JAM.policy.p30);
  return true;
}
function closePre() {
  var v55 = outputWindow.document;
  JAM.call(v55.write, v55, ["</div>"], JAM.policy.p30);
  var v56 = outputWindow.document;
  JAM.call(v56.write, v56, ["</pre>\n"], JAM.policy.p30);
  return;
}
function closeTextArea() {
  var v57 = outputWindow.document;
  JAM.call(v57.write, v57, ["</textarea>"], JAM.policy.p30);
  return true;
}
function closeWindow() {
  var v58 = outputWindow.document;
  JAM.call(v58.write, v58, ["</body>\n</html>\n"], JAM.policy.p30);
  outputWindow.status = "Done.";
  var v59 = outputWindow.document;
  JAM.call(v59.close, v59, [], JAM.policy.p30);
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
  var v62 = i$$4 < alignArray.length;
  for (;v62;) {
    var v750 = alignArray[i$$4];
    if (JAM.call(v750.search, v750, [/[^\s]+\s/], JAM.policy.p30) == -1) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p30);
      return false;
    }
    i$$4 = i$$4 + 1;
    v62 = i$$4 < alignArray.length;
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
    var v64 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p30);
    for (;v64;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p30);
      v64 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p30);
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
  var v82 = j$$2 < arrayOfPatterns$$3.length;
  for (;v82;) {
    var v80 = geneticCodeMatchExp$$1;
    var v81 = j$$2;
    var v887 = arrayOfPatterns$$3[j$$2];
    var v486 = JAM.call(v887.match, v887, [/\/.+\//], JAM.policy.p30) + "gi";
    if (JAM.isEval(eval)) {
      var v1210 = eval("introspect(JAM.policy.pFull) { " + v486 + " }")
    } else {
      var v1210 = JAM.call(eval, null, [v486])
    }
    introspect(JAM.policy.p13) {
      v80[v81] = v1210;
    }
    j$$2 = j$$2 + 1;
    v82 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = JAM.new(Array, [arrayOfPatterns$$4.length], JAM.policy.p30);
  var j$$3 = 0;
  var v88 = j$$3 < arrayOfPatterns$$4.length;
  for (;v88;) {
    var v84 = geneticCodeMatchResult$$1;
    var v85 = j$$3;
    var v752 = arrayOfPatterns$$4[j$$3];
    var v489 = JAM.call(v752.match, v752, [/=[a-zA-Z\*]/], JAM.policy.p30);
    var v1211 = JAM.call(v489.toString, v489, [], JAM.policy.p30);
    introspect(JAM.policy.p13) {
      v84[v85] = v1211;
    }
    var v86 = geneticCodeMatchResult$$1;
    var v87 = j$$3;
    var v490 = geneticCodeMatchResult$$1[j$$3];
    var v1212 = JAM.call(v490.replace, v490, [/=/g, ""], JAM.policy.p30);
    introspect(JAM.policy.p13) {
      v86[v87] = v1212;
    }
    j$$3 = j$$3 + 1;
    v88 = j$$3 < arrayOfPatterns$$4.length;
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
  var v109 = j$$4 < lengthOut;
  for (;v109;) {
    tempNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p30) * components.length], JAM.policy.p30);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p30);
    j$$4 = j$$4 + 1;
    v109 = j$$4 < lengthOut;
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
    var v111 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p30);
    fastaTitle = JAM.call(v111.toString, v111, [], JAM.policy.p30);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p30);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p30);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p30);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1175 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p30) != -1;
  if (!v1175) {
    v1175 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p30) != -1;
  }
  var v1162 = v1175;
  if (!v1162) {
    v1162 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p30) != -1;
  }
  var v1146 = v1162;
  if (!v1146) {
    v1146 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p30) != -1;
  }
  var v1128 = v1146;
  if (!v1128) {
    v1128 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p30) != -1;
  }
  var v1100 = v1128;
  if (!v1100) {
    v1100 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p30) != -1;
  }
  var v1055 = v1100;
  if (!v1055) {
    v1055 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p30) != -1;
  }
  var v989 = v1055;
  if (!v989) {
    v989 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p30) != -1;
  }
  var v888 = v989;
  if (!v888) {
    v888 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p30) != -1;
  }
  var v754 = v888;
  if (!v754) {
    v754 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p30) != -1;
  }
  var v518 = v754;
  if (!v518) {
    v518 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p30) != -1;
  }
  if (v518) {
    return false;
  }
  return true;
}
function openForm() {
  var v114 = outputWindow.document;
  JAM.call(v114.write, v114, ['<form action="">\n'], JAM.policy.p30);
  return true;
}
function openPre() {
  var v115 = outputWindow.document;
  JAM.call(v115.write, v115, ["<pre>"], JAM.policy.p30);
  var v116 = outputWindow.document;
  JAM.call(v116.write, v116, ['<div class="pre">'], JAM.policy.p30);
  return;
}
function openTextArea() {
  var v117 = outputWindow.document;
  JAM.call(v117.write, v117, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p30);
  return true;
}
function openWindow(title$$6) {
  JAM.call(_openWindow, null, [title$$6, true], JAM.policy.p30);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p30);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p30);
  var v118 = outputWindow.document;
  JAM.call(v118.write, v118, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p30);
  if (isColor) {
    var v120 = outputWindow.document;
    JAM.call(v120.write, v120, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p30);
  } else {
    var v122 = outputWindow.document;
    JAM.call(v122.write, v122, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p30);
  }
  var v124 = outputWindow.document;
  JAM.call(v124.write, v124, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$7 + " results</div>\n"], JAM.policy.p30);
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
  var v126 = outputWindow.document;
  JAM.call(v126.write, v126, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p30);
  if (isBackground) {
    var v128 = outputWindow.document;
    JAM.call(v128.write, v128, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p30);
  } else {
    var v130 = outputWindow.document;
    JAM.call(v130.write, v130, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p30);
  }
  var v132 = outputWindow.document;
  JAM.call(v132.write, v132, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$9 + " results</div>\n"], JAM.policy.p30);
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
  var v899 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p30) == -1;
  if (!v899) {
    v899 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p30) == -1;
  }
  var v765 = v899;
  if (!v765) {
    v765 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p30) == -1;
  }
  var v533 = v765;
  if (!v533) {
    v533 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p30) == -1;
  }
  if (v533) {
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
  var v902 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p30) == -1;
  if (!v902) {
    v902 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p30) == -1;
  }
  var v768 = v902;
  if (!v768) {
    v768 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p30) == -1;
  }
  var v538 = v768;
  if (!v538) {
    v538 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p30) == -1;
  }
  if (v538) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p30);
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v905 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p30) == -1;
  if (!v905) {
    v905 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p30) == -1;
  }
  var v771 = v905;
  if (!v771) {
    v771 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p30) == -1;
  }
  var v539 = v771;
  if (!v539) {
    v539 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p30) == -1;
  }
  if (v539) {
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
  var v908 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p30) == -1;
  if (!v908) {
    v908 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p30) == -1;
  }
  var v774 = v908;
  if (!v774) {
    v774 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p30) == -1;
  }
  var v541 = v774;
  if (!v541) {
    v541 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p30) == -1;
  }
  if (v541) {
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
  var v163 = i$$5 < stopBase;
  for (;v163;) {
    lineOfText = JAM.call(rightNum, null, [i$$5 + 1, lineOfText, 8, tabIn$$1], JAM.policy.p30);
    var j$$6 = 1;
    var v160 = j$$6 <= basePerLine / groupSize;
    for (;v160;) {
      var v159 = k < groupSize;
      for (;v159;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p30);
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
    JAM.call(v161.write, v161, [lineOfText + "\n"], JAM.policy.p30);
    lineOfText = "";
    v163 = i$$5 < stopBase;
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
    var v546 = adjustment < 0;
    if (v546) {
      v546 = adjusted >= 0;
    }
    if (v546) {
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
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p30);
        k$$1 = k$$1 + 1;
        v168 = k$$1 < groupSize$$2;
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
      v173 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v174 = outputWindow.document;
      JAM.call(v174.write, v174, [JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p30), "", 8, tabIn$$3], JAM.policy.p30) + lineOfText$$1 + "\n"], JAM.policy.p30);
      if (strands$$1 == "two") {
        var v176 = outputWindow.document;
        JAM.call(v176.write, v176, [JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p30), "", 8, tabIn$$3], JAM.policy.p30) + JAM.call(complement, null, [lineOfText$$1], JAM.policy.p30) + "\n"], JAM.policy.p30);
        var v178 = outputWindow.document;
        JAM.call(v178.write, v178, ["\n"], JAM.policy.p30);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v180 = outputWindow.document;
        JAM.call(v180.write, v180, [lineOfText$$1 + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p30) + "\n"], JAM.policy.p30);
        if (strands$$1 == "two") {
          var v182 = outputWindow.document;
          JAM.call(v182.write, v182, [JAM.call(complement, null, [lineOfText$$1], JAM.policy.p30) + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p30) + "\n"], JAM.policy.p30);
          var v184 = outputWindow.document;
          JAM.call(v184.write, v184, ["\n"], JAM.policy.p30);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v186 = outputWindow.document;
          JAM.call(v186.write, v186, [aboveNum + "\n"], JAM.policy.p30);
          var v188 = outputWindow.document;
          JAM.call(v188.write, v188, [lineOfText$$1 + "\n"], JAM.policy.p30);
          if (strands$$1 == "two") {
            var v190 = outputWindow.document;
            JAM.call(v190.write, v190, [JAM.call(complement, null, [lineOfText$$1], JAM.policy.p30) + "\n"], JAM.policy.p30);
            var v192 = outputWindow.document;
            JAM.call(v192.write, v192, ["\n"], JAM.policy.p30);
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
  var i$$7 = JAM.call(parseInt, null, [startBase$$3], JAM.policy.p30);
  var k$$2 = 0;
  var lineOfText$$2 = "";
  var lineNum$$1 = "";
  var sepChar$$2 = " ";
  var aboveNum$$1 = "";
  groupSize$$3 = JAM.call(parseInt, null, [groupSize$$3], JAM.policy.p30);
  basePerLine$$3 = JAM.call(parseInt, null, [basePerLine$$3], JAM.policy.p30);
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
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p30);
        k$$2 = k$$2 + 1;
        v201 = k$$2 < groupSize$$3;
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
      v206 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v207 = outputWindow.document;
      JAM.call(v207.write, v207, [JAM.call(rightNum, null, [lineNum$$1, "", 8, tabIn$$4], JAM.policy.p30) + lineOfText$$2 + "\n"], JAM.policy.p30);
    } else {
      if (numberPosition$$2 == "right") {
        var v209 = outputWindow.document;
        JAM.call(v209.write, v209, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p30);
      } else {
        if (numberPosition$$2 == "above") {
          var v211 = outputWindow.document;
          JAM.call(v211.write, v211, [aboveNum$$1 + "\n"], JAM.policy.p30);
          var v213 = outputWindow.document;
          JAM.call(v213.write, v213, [lineOfText$$2 + "\n"], JAM.policy.p30);
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
  numMut = JAM.call(parseInt, null, [numMut], JAM.policy.p30);
  firstIndexToMutate = JAM.call(parseInt, null, [firstIndexToMutate], JAM.policy.p30);
  lastIndexToMutate = JAM.call(parseInt, null, [lastIndexToMutate], JAM.policy.p30);
  var v785 = sequence$$13.length <= firstIndexToMutate;
  if (!v785) {
    v785 = lastIndexToMutate < 0;
  }
  var v563 = v785;
  if (!v563) {
    v563 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v563) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v227 = i$$8 < numMut;
  for (;v227;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p30) * maxNum], JAM.policy.p30);
    var v565 = randNum < firstIndexToMutate;
    if (!v565) {
      v565 = randNum > lastIndexToMutate;
    }
    if (v565) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v227 = i$$8 < numMut;
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
    v227 = i$$8 < numMut;
  }
  var v228 = outputWindow.document;
  JAM.call(v228.write, v228, [JAM.call(addReturns, null, [sequence$$13], JAM.policy.p30)], JAM.policy.p30);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v234 = j$$9 < lengthOut$$1;
  for (;v234;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p30) * components$$2.length], JAM.policy.p30);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v231 = outputWindow.document;
      JAM.call(v231.write, v231, [sequence$$14 + "\n"], JAM.policy.p30);
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v234 = j$$9 < lengthOut$$1;
  }
  var v235 = outputWindow.document;
  JAM.call(v235.write, v235, [sequence$$14 + "\n"], JAM.policy.p30);
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
  var v241 = outputWindow.document;
  JAM.call(v241.write, v241, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p30);
  var v242 = outputWindow.document;
  JAM.call(v242.write, v242, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p30);
  var i$$9 = 0;
  var v259 = i$$9 < arrayOfItems.length;
  for (;v259;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v580 = arrayOfItems[i$$9];
    matchExp = JAM.call(v580.match, v580, [/\/.+\//], JAM.policy.p30) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v917 = arrayOfItems[i$$9];
    var v791 = JAM.call(v917.match, v917, [/\)\D*\d+/], JAM.policy.p30);
    var v581 = JAM.call(v791.toString, v791, [], JAM.policy.p30);
    cutDistance = JAM.call(parseFloat, null, [JAM.call(v581.replace, v581, [/\)\D*/, ""], JAM.policy.p30)], JAM.policy.p30);
    var v251 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p30);
    for (;v251;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v582 = matchPosition >= lowerLimit;
      if (v582) {
        v582 = matchPosition < upperLimit;
      }
      if (v582) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v251 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p30);
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
    var v257 = outputWindow.document;
    var v1107 = '<tr><td class="' + backGroundClass + '">';
    var v1169 = arrayOfItems[i$$9];
    var v1153 = JAM.call(v1169.match, v1169, [/\([^\(]+\)/], JAM.policy.p30);
    var v1136 = JAM.call(v1153.toString, v1153, [], JAM.policy.p30);
    JAM.call(v257.write, v257, [v1107 + JAM.call(v1136.replace, v1136, [/\(|\)/g, ""], JAM.policy.p30) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p30);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v259 = i$$9 < arrayOfItems.length;
  }
  var v260 = outputWindow.document;
  JAM.call(v260.write, v260, ["</tbody></table>\n"], JAM.policy.p30);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v261 = outputWindow.document;
  JAM.call(v261.write, v261, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p30);
  var v262 = outputWindow.document;
  JAM.call(v262.write, v262, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p30);
  var i$$10 = 0;
  var v272 = i$$10 < arrayOfItems$$1.length;
  for (;v272;) {
    var tempNumber = 0;
    var v591 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v591.match, v591, [/\/[^\/]+\//], JAM.policy.p30) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p30) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p30).length;
    }
    var percentage = 0;
    var v795 = originalLength + 1;
    var v1010 = arrayOfItems$$1[i$$10];
    if (v795 - JAM.call(parseFloat, null, [JAM.call(v1010.match, v1010, [/\d+/], JAM.policy.p30)], JAM.policy.p30) > 0) {
      var v267 = 100 * tempNumber;
      var v594 = originalLength + 1;
      var v921 = arrayOfItems$$1[i$$10];
      percentage = v267 / (v594 - JAM.call(parseFloat, null, [JAM.call(v921.match, v921, [/\d+/], JAM.policy.p30)], JAM.policy.p30));
    }
    var v270 = outputWindow.document;
    var v1170 = arrayOfItems$$1[i$$10];
    var v1154 = JAM.call(v1170.match, v1170, [/\([^\(]+\)\b/], JAM.policy.p30);
    var v1137 = JAM.call(v1154.toString, v1154, [], JAM.policy.p30);
    JAM.call(v270.write, v270, ["<tr><td>" + JAM.call(v1137.replace, v1137, [/\(|\)/g, ""], JAM.policy.p30) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p30) + "</td></tr>\n"], JAM.policy.p30);
    i$$10 = i$$10 + 1;
    v272 = i$$10 < arrayOfItems$$1.length;
  }
  var v273 = outputWindow.document;
  JAM.call(v273.write, v273, ["</tbody></table>\n"], JAM.policy.p30);
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
    randNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p30) * maxNum$$1], JAM.policy.p30);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p30);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p30);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p30);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v277 = outputWindow.document;
      JAM.call(v277.write, v277, [tempSeq + "\n"], JAM.policy.p30);
      tempSeq = "";
    }
    v280 = sequence$$17.length > 0;
  }
  var v281 = outputWindow.document;
  JAM.call(v281.write, v281, [tempSeq + "\n"], JAM.policy.p30);
  return true;
}
function windowExtract(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = JAM.new(Array, [], JAM.policy.p30);
  if (JAM.call(testScript, null, [], JAM.policy.p30) == false) {
    return false;
  }
  var v1065 = JAM.call(checkFormElement, null, [theDocument.forms[0].elements[0]], JAM.policy.p30) == false;
  if (!v1065) {
    v1065 = JAM.call(checkSequenceLength, null, [theDocument.forms[0].elements[0].value, maxInput$$3], JAM.policy.p30) == false;
  }
  var v1012 = v1065;
  if (!v1012) {
    v1012 = JAM.call(checkFormElement, null, [theDocument.forms[0].elements[1]], JAM.policy.p30) == false;
  }
  var v923 = v1012;
  if (!v923) {
    v923 = JAM.call(checkFormElement, null, [theDocument.forms[0].elements[3]], JAM.policy.p30) == false;
  }
  var v800 = v923;
  if (!v800) {
    var v1069 = theDocument.forms[0].elements[1].value;
    v800 = JAM.call(verifyMaxDigits, null, [JAM.call(v1069.replace, v1069, [/[^\d]/g, ""], JAM.policy.p30), maxInput$$3], JAM.policy.p30) == false;
  }
  var v603 = v800;
  if (!v603) {
    var v1016 = theDocument.forms[0].elements[3].value;
    v603 = JAM.call(verifyMaxDigits, null, [JAM.call(v1016.replace, v1016, [/[^\d]/g, ""], JAM.policy.p30), maxInput$$3], JAM.policy.p30) == false;
  }
  if (v603) {
    return false;
  }
  var v604 = theDocument.forms[0].elements[1].value;
  var windowSize = JAM.call(parseInt, null, [JAM.call(v604.replace, v604, [/[^\d]/g, ""], JAM.policy.p30)], JAM.policy.p30);
  var v605 = theDocument.forms[0].elements[3].value;
  var position = JAM.call(parseInt, null, [JAM.call(v605.replace, v605, [/[^\d]/g, ""], JAM.policy.p30)], JAM.policy.p30);
  var orientation = theDocument.forms[0].elements[2].value;
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
        start$$4 = position - JAM.call(Math.round, Math, [windowSize / 2], JAM.policy.p30) + 1;
        end$$1 = start$$4 + windowSize - 1;
      }
    }
  }
  JAM.call(ranges.push, ranges, [JAM.new(Range, [start$$4, end$$1], JAM.policy.p30)], JAM.policy.p30);
  JAM.call(openWindow, null, ["Window Extractor Protein"], JAM.policy.p30);
  JAM.call(openPre, null, [], JAM.policy.p30);
  var arrayOfFasta$$1 = JAM.call(getArrayOfFasta, null, [theDocument.forms[0].elements[0].value], JAM.policy.p30);
  var i$$11 = 0;
  var v302 = i$$11 < arrayOfFasta$$1.length;
  for (;v302;) {
    newProtein = JAM.call(getSequenceFromFasta, null, [arrayOfFasta$$1[i$$11]], JAM.policy.p30);
    title = JAM.call(getTitleFromFasta, null, [arrayOfFasta$$1[i$$11]], JAM.policy.p30);
    newProtein = JAM.call(removeNonProteinAllowDegen, null, [newProtein], JAM.policy.p30);
    var v299 = outputWindow.document;
    JAM.call(v299.write, v299, [JAM.call(getFastaTitleFromTitleAndSequence, null, [title, newProtein], JAM.policy.p30)], JAM.policy.p30);
    JAM.call(writeSequenceRanges, null, [newProtein, ranges, theDocument.forms[0].elements[7].options[theDocument.forms[0].elements[7].selectedIndex].value], JAM.policy.p30);
    i$$11 = i$$11 + 1;
    v302 = i$$11 < arrayOfFasta$$1.length;
  }
  JAM.call(closePre, null, [], JAM.policy.p30);
  JAM.call(closeWindow, null, [], JAM.policy.p30);
  return true;
}
function rangeExtract(theDocument$$1) {
  var newDna$$1 = "";
  var maxInput$$4 = 5E5;
  var matchFound$$1 = false;
  var ranges$$1 = JAM.new(Array, [], JAM.policy.p30);
  if (JAM.call(testScript, null, [], JAM.policy.p30) == false) {
    return false;
  }
  var v810 = JAM.call(checkFormElement, null, [theDocument$$1.forms[0].elements[0]], JAM.policy.p30) == false;
  if (!v810) {
    v810 = JAM.call(checkSequenceLength, null, [theDocument$$1.forms[0].elements[0].value, maxInput$$4], JAM.policy.p30) == false;
  }
  var v614 = v810;
  if (!v614) {
    v614 = JAM.call(checkFormElement, null, [theDocument$$1.forms[0].elements[1]], JAM.policy.p30) == false;
  }
  if (v614) {
    return false;
  }
  var v305 = theDocument$$1.forms[0].elements[1].value;
  var arrayOfRanges = JAM.call(v305.split, v305, [/,/], JAM.policy.p30);
  var arrayOfStartAndEnd;
  var i$$12 = 0;
  var v311 = i$$12 < arrayOfRanges.length;
  for (;v311;) {
    var v306 = arrayOfRanges[i$$12];
    arrayOfStartAndEnd = JAM.call(v306.split, v306, [/\.\./], JAM.policy.p30);
    if (arrayOfStartAndEnd.length == 1) {
      matchFound$$1 = true;
      JAM.call(ranges$$1.push, ranges$$1, [JAM.new(Range, [arrayOfStartAndEnd[0], arrayOfStartAndEnd[0]], JAM.policy.p30)], JAM.policy.p30);
    } else {
      if (arrayOfStartAndEnd.length == 2) {
        matchFound$$1 = true;
        JAM.call(ranges$$1.push, ranges$$1, [JAM.new(Range, [arrayOfStartAndEnd[0], arrayOfStartAndEnd[1]], JAM.policy.p30)], JAM.policy.p30);
      }
    }
    i$$12 = i$$12 + 1;
    v311 = i$$12 < arrayOfRanges.length;
  }
  if (matchFound$$1 == false) {
    JAM.call(alert, null, ["No ranges were entered."], JAM.policy.p30);
    return false;
  }
  JAM.call(openWindow, null, ["Range Extractor Protein"], JAM.policy.p30);
  JAM.call(openPre, null, [], JAM.policy.p30);
  var arrayOfFasta$$2 = JAM.call(getArrayOfFasta, null, [theDocument$$1.forms[0].elements[0].value], JAM.policy.p30);
  i$$12 = 0;
  var v319 = i$$12 < arrayOfFasta$$2.length;
  for (;v319;) {
    newProtein = JAM.call(getSequenceFromFasta, null, [arrayOfFasta$$2[i$$12]], JAM.policy.p30);
    title = JAM.call(getTitleFromFasta, null, [arrayOfFasta$$2[i$$12]], JAM.policy.p30);
    newProtein = JAM.call(removeNonProteinAllowDegen, null, [newProtein], JAM.policy.p30);
    var v316 = outputWindow.document;
    JAM.call(v316.write, v316, [JAM.call(getFastaTitleFromTitleAndSequence, null, [title, newProtein], JAM.policy.p30)], JAM.policy.p30);
    JAM.call(writeSequenceRanges, null, [newProtein, ranges$$1, theDocument$$1.forms[0].elements[5].options[theDocument$$1.forms[0].elements[5].selectedIndex].value], JAM.policy.p30);
    i$$12 = i$$12 + 1;
    v319 = i$$12 < arrayOfFasta$$2.length;
  }
  JAM.call(closePre, null, [], JAM.policy.p30);
  JAM.call(closeWindow, null, [], JAM.policy.p30);
  return true;
}
function writeSequenceRanges(sequence$$18, ranges$$2, segmentType) {
  var rangeGroup = JAM.new(RangeGroup, [segmentType], JAM.policy.p30);
  var center_base = JAM.call(Math.round, Math, [sequence$$18.length / 2], JAM.policy.p30);
  var i$$13 = 0;
  var v334 = i$$13 < ranges$$2.length;
  for (;v334;) {
    var v321 = ranges$$2[i$$13];
    var v817 = ranges$$2[i$$13].start;
    var v630 = JAM.call(v817.toString, v817, [], JAM.policy.p30);
    var v1213 = JAM.call(v630.replace, v630, [/start|begin/gi, 1], JAM.policy.p30);
    v321.start = v1213;
    var v322 = ranges$$2[i$$13];
    var v818 = ranges$$2[i$$13].start;
    var v631 = JAM.call(v818.toString, v818, [], JAM.policy.p30);
    var v1214 = JAM.call(v631.replace, v631, [/stop|end/gi, sequence$$18.length], JAM.policy.p30);
    v322.start = v1214;
    var v323 = ranges$$2[i$$13];
    var v819 = ranges$$2[i$$13].start;
    var v633 = JAM.call(v819.toString, v819, [], JAM.policy.p30);
    var v1215 = JAM.call(v633.replace, v633, [/length/gi, sequence$$18.length], JAM.policy.p30);
    v323.start = v1215;
    var v324 = ranges$$2[i$$13];
    var v820 = ranges$$2[i$$13].start;
    var v635 = JAM.call(v820.toString, v820, [], JAM.policy.p30);
    var v1216 = JAM.call(v635.replace, v635, [/middle|center|centre/gi, center_base], JAM.policy.p30);
    v324.start = v1216;
    var v325 = ranges$$2[i$$13];
    var v821 = ranges$$2[i$$13].stop;
    var v636 = JAM.call(v821.toString, v821, [], JAM.policy.p30);
    var v1217 = JAM.call(v636.replace, v636, [/start|begin/gi, 1], JAM.policy.p30);
    v325.stop = v1217;
    var v326 = ranges$$2[i$$13];
    var v822 = ranges$$2[i$$13].stop;
    var v637 = JAM.call(v822.toString, v822, [], JAM.policy.p30);
    var v1218 = JAM.call(v637.replace, v637, [/stop|end/gi, sequence$$18.length], JAM.policy.p30);
    v326.stop = v1218;
    var v327 = ranges$$2[i$$13];
    var v823 = ranges$$2[i$$13].stop;
    var v639 = JAM.call(v823.toString, v823, [], JAM.policy.p30);
    var v1219 = JAM.call(v639.replace, v639, [/length/gi, sequence$$18.length], JAM.policy.p30);
    v327.stop = v1219;
    var v328 = ranges$$2[i$$13];
    var v824 = ranges$$2[i$$13].stop;
    var v641 = JAM.call(v824.toString, v824, [], JAM.policy.p30);
    var v1220 = JAM.call(v641.replace, v641, [/middle|center|centre/gi, center_base], JAM.policy.p30);
    v328.stop = v1220;
    try {
      var v329 = ranges$$2[i$$13];
      var v949 = ranges$$2[i$$13].start;
      var v825 = JAM.call(v949.toString, v949, [], JAM.policy.p30);
      if (JAM.isEval(eval)) {
        var v642 = eval("introspect(JAM.policy.pFull) { " + v825 + " }")
      } else {
        var v642 = JAM.call(eval, null, [v825])
      }
      var v1221 = JAM.call(parseInt, null, [v642], JAM.policy.p30);
      v329.start = v1221;
    } catch (e$$5) {
      JAM.call(alert, null, ["Could not evaluate the following expression: " + ranges$$2[i$$13].start], JAM.policy.p30);
      return false;
    }
    try {
      var v331 = ranges$$2[i$$13];
      var v950 = ranges$$2[i$$13].stop;
      var v827 = JAM.call(v950.toString, v950, [], JAM.policy.p30);
      if (JAM.isEval(eval)) {
        var v644 = eval("introspect(JAM.policy.pFull) { " + v827 + " }")
      } else {
        var v644 = JAM.call(eval, null, [v827])
      }
      var v1222 = JAM.call(parseInt, null, [v644], JAM.policy.p30);
      v331.stop = v1222;
    } catch (e$$6) {
      JAM.call(alert, null, ["Could not evaluate the following expression: " + ranges$$2[i$$13].stop], JAM.policy.p30);
      return false;
    }
    JAM.call(rangeGroup.addRange, rangeGroup, [ranges$$2[i$$13]], JAM.policy.p30);
    i$$13 = i$$13 + 1;
    v334 = i$$13 < ranges$$2.length;
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
    return "&gt;residue " + this.start;
  } else {
    return "&gt;residue " + this.start + " to " + this.stop;
  }
  return;
}
function Range(start$$5, stop) {
  this.start = start$$5;
  this.stop = stop;
  return;
}
function addRange(range$$5) {
  var v359 = this.ranges;
  JAM.call(v359.push, v359, [range$$5], JAM.policy.p30);
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
    return JAM.call(getRandomSequence, null, [["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"], p1$$7.length], JAM.policy.p30);
  }
  function v6(str$$12, p1$$6, p2$$2, offset$$14, s$$8) {
    return p1$$6 + JAM.call(getRandomSequence, null, [["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"], p2$$2.length], JAM.policy.p30);
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
    var i$$14 = 0;
    var v373 = i$$14 < this.ranges.length;
    for (;v373;) {
      var v840 = this.ranges[i$$14];
      if (JAM.call(v840.getSequence, v840, [sequence$$20], JAM.policy.p30) != "") {
        var v684 = this.ranges[i$$14];
        JAM.call(sequenceArray$$1.push, sequenceArray$$1, [JAM.call(v684.getSequence, v684, [sequence$$20], JAM.policy.p30)], JAM.policy.p30);
      }
      i$$14 = i$$14 + 1;
      v373 = i$$14 < this.ranges.length;
    }
    var v374 = outputWindow.document;
    JAM.call(v374.write, v374, [JAM.call(addReturns, null, [JAM.call(sequenceArray$$1.join, sequenceArray$$1, [""], JAM.policy.p30)], JAM.policy.p30) + "\n\n"], JAM.policy.p30);
    return true;
  }
  if (this.type == "separate") {
    i$$14 = 0;
    var v382 = i$$14 < this.ranges.length;
    for (;v382;) {
      var v845 = this.ranges[i$$14];
      if (JAM.call(v845.getSequence, v845, [sequence$$20], JAM.policy.p30) != "") {
        var v377 = outputWindow.document;
        var v846 = this.ranges[i$$14];
        JAM.call(v377.write, v377, [JAM.call(v846.getTitle, v846, [], JAM.policy.p30) + "\n"], JAM.policy.p30);
        var v379 = outputWindow.document;
        var v955 = this.ranges[i$$14];
        JAM.call(v379.write, v379, [JAM.call(addReturns, null, [JAM.call(v955.getSequence, v955, [sequence$$20], JAM.policy.p30)], JAM.policy.p30) + "\n\n"], JAM.policy.p30);
      }
      i$$14 = i$$14 + 1;
      v382 = i$$14 < this.ranges.length;
    }
    return true;
  }
  if (this.type == "uppercased") {
    var re$$3;
    sequence$$20 = JAM.call(sequence$$20.toLowerCase, sequence$$20, [], JAM.policy.p30);
    i$$14 = 0;
    var v388 = i$$14 < this.ranges.length;
    for (;v388;) {
      var v850 = this.ranges[i$$14];
      if (JAM.call(v850.getSequence, v850, [sequence$$20], JAM.policy.p30) != "") {
        if (this.ranges[i$$14].start > 1) {
          re$$3 = "(.{" + (this.ranges[i$$14].start - 1) + "})\\B(.{" + (this.ranges[i$$14].stop - this.ranges[i$$14].start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p30);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v2], JAM.policy.p30);
        } else {
          re$$3 = "(.{" + (this.ranges[i$$14].stop - this.ranges[i$$14].start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p30);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v3], JAM.policy.p30);
        }
      }
      i$$14 = i$$14 + 1;
      v388 = i$$14 < this.ranges.length;
    }
    var v389 = outputWindow.document;
    JAM.call(v389.write, v389, [JAM.call(addReturns, null, [sequence$$20], JAM.policy.p30) + "\n\n"], JAM.policy.p30);
    return true;
  }
  if (this.type == "lowercased") {
    sequence$$20 = JAM.call(sequence$$20.toUpperCase, sequence$$20, [], JAM.policy.p30);
    i$$14 = 0;
    var v396 = i$$14 < this.ranges.length;
    for (;v396;) {
      var v857 = this.ranges[i$$14];
      if (JAM.call(v857.getSequence, v857, [sequence$$20], JAM.policy.p30) != "") {
        if (this.ranges[i$$14].start > 1) {
          re$$3 = "(.{" + (this.ranges[i$$14].start - 1) + "})\\B(.{" + (this.ranges[i$$14].stop - this.ranges[i$$14].start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p30);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v4], JAM.policy.p30);
        } else {
          re$$3 = "(.{" + (this.ranges[i$$14].stop - this.ranges[i$$14].start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p30);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v5], JAM.policy.p30);
        }
      }
      i$$14 = i$$14 + 1;
      v396 = i$$14 < this.ranges.length;
    }
    var v397 = outputWindow.document;
    JAM.call(v397.write, v397, [JAM.call(addReturns, null, [sequence$$20], JAM.policy.p30) + "\n\n"], JAM.policy.p30);
    return true;
  }
  if (this.type == "randomized") {
    i$$14 = 0;
    var v404 = i$$14 < this.ranges.length;
    for (;v404;) {
      var v864 = this.ranges[i$$14];
      if (JAM.call(v864.getSequence, v864, [sequence$$20], JAM.policy.p30) != "") {
        if (this.ranges[i$$14].start > 1) {
          re$$3 = "(.{" + (this.ranges[i$$14].start - 1) + "})\\B(.{" + (this.ranges[i$$14].stop - this.ranges[i$$14].start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p30);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v6], JAM.policy.p30);
        } else {
          re$$3 = "(.{" + (this.ranges[i$$14].stop - this.ranges[i$$14].start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p30);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v7], JAM.policy.p30);
        }
      }
      i$$14 = i$$14 + 1;
      v404 = i$$14 < this.ranges.length;
    }
    var v405 = outputWindow.document;
    JAM.call(v405.write, v405, [JAM.call(addReturns, null, [sequence$$20], JAM.policy.p30) + "\n\n"], JAM.policy.p30);
    return true;
  }
  if (this.type == "preserved") {
    var randomSequence = JAM.call(getRandomSequence, null, [["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"], sequence$$20.length], JAM.policy.p30);
    i$$14 = 0;
    var v414 = i$$14 < this.ranges.length;
    for (;v414;) {
      var v871 = this.ranges[i$$14];
      if (JAM.call(v871.getSequence, v871, [sequence$$20], JAM.policy.p30) != "") {
        if (this.ranges[i$$14].start > 1) {
          re$$3 = "(.{" + (this.ranges[i$$14].start - 1) + "})\\B(.{" + (this.ranges[i$$14].stop - this.ranges[i$$14].start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p30);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v8], JAM.policy.p30);
        } else {
          re$$3 = "(.{" + (this.ranges[i$$14].stop - this.ranges[i$$14].start + 1) + "})";
          re$$3 = JAM.new(RegExp, [re$$3], JAM.policy.p30);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v9], JAM.policy.p30);
        }
      }
      i$$14 = i$$14 + 1;
      v414 = i$$14 < this.ranges.length;
    }
    var v415 = outputWindow.document;
    JAM.call(v415.write, v415, [JAM.call(addReturns, null, [randomSequence], JAM.policy.p30) + "\n\n"], JAM.policy.p30);
    return true;
  }
  return;
}
function RangeGroup(type$$25) {
  this.type = type$$25;
  var v1223 = JAM.new(Array, [], JAM.policy.p30);
  this.ranges = v1223;
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

