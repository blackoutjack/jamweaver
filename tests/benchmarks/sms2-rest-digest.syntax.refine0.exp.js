// sms2-rest-digest.js
function v4() {
  var v741 = document.forms;
  introspect(JAM.policy.p26) {
    var v617 = v741[0]
  }
  var v361 = v617.elements;
  introspect(JAM.policy.p26) {
    var v5 = v361[0]
  }
  v5.value = " ";
  return;
}
function v3() {
  try {
    JAM.call(restDigest, null, [document], JAM.policy.p38);
  } catch (e$$5) {
    JAM.call(alert, null, ["The following error was encountered: " + e$$5], JAM.policy.p38);
  }
  return;
}
function v2() {
  var v7 = document.main_form.main_submit;
  JAM.call(v7.focus, v7, [], JAM.policy.p39);
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
    var v8 = arrayOfSequences[0]
  }
  var lengthOfAlign = v8.length;
  if (arrayOfSequences.length < 2) {
    JAM.call(alert, null, ["Please enter an alignment consisting of at least two sequences."], JAM.policy.p22);
    return false;
  }
  var i$$1 = 0;
  var v11 = i$$1 < arrayOfTitles.length;
  for (;v11;) {
    introspect(JAM.policy.p26) {
      var v814 = arrayOfTitles[i$$1]
    }
    var v618 = JAM.call(v814.search, v814, [/\S/], JAM.policy.p38) == -1;
    if (!v618) {
      introspect(JAM.policy.p26) {
        var v815 = arrayOfSequences[i$$1]
      }
      v618 = JAM.call(v815.search, v815, [/\S/], JAM.policy.p38) == -1;
    }
    var v365 = v618;
    if (!v365) {
      introspect(JAM.policy.p26) {
        var v745 = arrayOfSequences[i$$1]
      }
      v365 = v745.length != lengthOfAlign;
    }
    if (v365) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$1 = i$$1 + 1;
    v11 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v816 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p38) == -1;
  if (!v816) {
    v816 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p38) == -1;
  }
  var v746 = v816;
  if (!v746) {
    v746 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p38) == -1;
  }
  var v621 = v746;
  if (!v621) {
    v621 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p38) == -1;
  }
  var v367 = v621;
  if (!v367) {
    v367 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p38) == -1;
  }
  if (v367) {
    JAM.call(alert, null, ["The codon table has been entered incorrectly."], JAM.policy.p22);
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v624 = formElement.value;
  if (JAM.call(v624.search, v624, [/\S/], JAM.policy.p38) == -1) {
    JAM.call(alert, null, ["Please enter some text."], JAM.policy.p22);
    return false;
  }
  return true;
}
function checkGeneticCode(arrayOfPatterns) {
  var z$$2 = 0;
  var codon = "";
  var oneMatch = false;
  var testSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
  var v16 = z$$2 < arrayOfPatterns.length;
  for (;v16;) {
    introspect(JAM.policy.p26) {
      var v625 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(v625.search, v625, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v626 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(moreExpressionCheck, null, [v626], JAM.policy.p38) == false) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$2 = z$$2 + 1;
    v16 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = JAM.new(Array, [arrayOfPatterns.length], JAM.policy.p38);
  var geneticCodeMatchExp = JAM.new(Array, [arrayOfPatterns.length], JAM.policy.p38);
  var j = 0;
  var v25 = j < arrayOfPatterns.length;
  for (;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAM.policy.p26) {
      var v749 = arrayOfPatterns[j]
    }
    var v374 = JAM.call(v749.match, v749, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v992 = eval("introspect(JAM.policy.pFull) { " + v374 + " }")
    } else {
      var v992 = JAM.call(eval, null, [v374])
    }
    introspect(JAM.policy.p27) {
      v19[v20] = v992;
    }
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAM.policy.p26) {
      var v628 = arrayOfPatterns[j]
    }
    var v375 = JAM.call(v628.match, v628, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v993 = JAM.call(v375.toString, v375, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v21[v22] = v993;
    }
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAM.policy.p26) {
      var v376 = geneticCodeMatchResult[j]
    }
    var v994 = JAM.call(v376.replace, v376, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v23[v24] = v994;
    }
    j = j + 1;
    v25 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v32 = i$$2 <= testSequence.length - 3;
  for (;v32;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p40);
    j = 0;
    var v30 = j < geneticCodeMatchExp.length;
    for (;v30;) {
      introspect(JAM.policy.p26) {
        var v630 = geneticCodeMatchExp[j]
      }
      if (JAM.call(codon.search, codon, [v630], JAM.policy.p38) != -1) {
        if (oneMatch == true) {
          JAM.call(alert, null, ["Genetic code error: more than one amino acid is coded by the codon: " + codon + "."], JAM.policy.p38);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      v30 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      JAM.call(alert, null, ["The genetic code expressions are missing a codon."], JAM.policy.p22);
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v32 = i$$2 <= testSequence.length - 3;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v34 = z$$3 < arrayOfPatterns$$1.length;
  for (;v34;) {
    introspect(JAM.policy.p26) {
      var v632 = arrayOfPatterns$$1[z$$3]
    }
    if (JAM.call(v632.search, v632, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p38) != -1) {
      JAM.call(alert, null, ["One or more groups have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$3 = z$$3 + 1;
    v34 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v38 = i$$3 < arrayOfPatterns$$1.length;
  for (;v38;) {
    introspect(JAM.policy.p26) {
      var v633 = arrayOfPatterns$$1[i$$3]
    }
    var re = JAM.new(RegExp, ["[" + v633 + "]", "gi"], JAM.policy.p41);
    var j$$1 = i$$3 + 1;
    var v37 = j$$1 < arrayOfPatterns$$1.length;
    for (;v37;) {
      introspect(JAM.policy.p26) {
        var v634 = arrayOfPatterns$$1[j$$1]
      }
      if (JAM.call(v634.search, v634, [re], JAM.policy.p38) != -1) {
        JAM.call(alert, null, ["The same amino acid is in more than one similarity group."], JAM.policy.p22);
        return false;
      }
      j$$1 = j$$1 + 1;
      v37 = j$$1 < arrayOfPatterns$$1.length;
    }
    i$$3 = i$$3 + 1;
    v38 = i$$3 < arrayOfPatterns$$1.length;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v41 = z$$4 < arrayOfPatterns$$2.length;
  for (;v41;) {
    introspect(JAM.policy.p26) {
      var v635 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(v635.search, v635, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v636 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(moreExpressionCheck, null, [v636], JAM.policy.p38) == false) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$4 = z$$4 + 1;
    v41 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v750 = JAM.call(getSequenceFromFasta, null, [text$$7], JAM.policy.p38);
  if (JAM.call(v750.replace, v750, [/[^A-Za-z]/g, ""], JAM.policy.p41).length > maxInput) {
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
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</form>"], JAM.policy.p22);
  return true;
}
function closePre() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</div>"], JAM.policy.p22);
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</pre>\n"], JAM.policy.p22);
  return;
}
function closeTextArea() {
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</textarea>"], JAM.policy.p22);
  return true;
}
function closeWindow() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</body>\n</html>\n"], JAM.policy.p22);
  outputWindow.status = "Done.";
  var v51 = outputWindow.document;
  JAM.call(v51.close, v51, [], JAM.policy.p39);
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
    JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
    return false;
  }
  var i$$4 = 1;
  var v54 = i$$4 < alignArray.length;
  for (;v54;) {
    introspect(JAM.policy.p26) {
      var v638 = alignArray[i$$4]
    }
    if (JAM.call(v638.search, v638, [/[^\s]+\s/], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$4 = i$$4 + 1;
    v54 = i$$4 < alignArray.length;
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
    var v56 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p38);
    for (;v56;) {
      introspect(JAM.policy.p26) {
        var v55 = matchArray[0]
      }
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v55], JAM.policy.p38);
      v56 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p38);
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
  stringToReturn = stringToReturn + ' starting "' + JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p24) + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p24) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p24) + '"';
  return'<div class="info">' + stringToReturn$$1 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = JAM.new(Array, [arrayOfPatterns$$3.length], JAM.policy.p38);
  var j$$2 = 0;
  var v74 = j$$2 < arrayOfPatterns$$3.length;
  for (;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAM.policy.p26) {
      var v751 = arrayOfPatterns$$3[j$$2]
    }
    var v423 = JAM.call(v751.match, v751, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v995 = eval("introspect(JAM.policy.pFull) { " + v423 + " }")
    } else {
      var v995 = JAM.call(eval, null, [v423])
    }
    introspect(JAM.policy.p27) {
      v72[v73] = v995;
    }
    j$$2 = j$$2 + 1;
    v74 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = JAM.new(Array, [arrayOfPatterns$$4.length], JAM.policy.p38);
  var j$$3 = 0;
  var v80 = j$$3 < arrayOfPatterns$$4.length;
  for (;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAM.policy.p26) {
      var v640 = arrayOfPatterns$$4[j$$3]
    }
    var v426 = JAM.call(v640.match, v640, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v996 = JAM.call(v426.toString, v426, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v76[v77] = v996;
    }
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAM.policy.p26) {
      var v427 = geneticCodeMatchResult$$1[j$$3]
    }
    var v997 = JAM.call(v427.replace, v427, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v78[v79] = v997;
    }
    j$$3 = j$$3 + 1;
    v80 = j$$3 < arrayOfPatterns$$4.length;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"';
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p24) + '"';
  return'<div class="info">' + stringToReturn$$2 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"';
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p24) + '"';
  return'<div class="info">' + stringToReturn$$3 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p24) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleTwo$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p24) + '"';
  return'<div class="info">' + stringToReturn$$4 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = JAM.new(Array, [], JAM.policy.p39);
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v101 = j$$4 < lengthOut;
  for (;v101;) {
    tempNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * components.length], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar = components[tempNum];
    }
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p38);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p22);
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
    var v103 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p41);
    fastaTitle = JAM.call(v103.toString, v103, [], JAM.policy.p39);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p41);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p41);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p41);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v956 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p38) != -1;
  if (!v956) {
    v956 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v946 = v956;
  if (!v946) {
    v946 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p38) != -1;
  }
  var v935 = v946;
  if (!v935) {
    v935 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v922 = v935;
  if (!v922) {
    v922 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p38) != -1;
  }
  var v897 = v922;
  if (!v897) {
    v897 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p38) != -1;
  }
  var v870 = v897;
  if (!v870) {
    v870 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p38) != -1;
  }
  var v819 = v870;
  if (!v819) {
    v819 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p38) != -1;
  }
  var v752 = v819;
  if (!v752) {
    v752 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p38) != -1;
  }
  var v642 = v752;
  if (!v642) {
    v642 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p38) != -1;
  }
  var v455 = v642;
  if (!v455) {
    v455 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p38) != -1;
  }
  if (v455) {
    return false;
  }
  return true;
}
function openForm() {
  var v106 = outputWindow.document;
  JAM.call(v106.write, v106, ['<form action="">\n'], JAM.policy.p22);
  return true;
}
function openPre() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ["<pre>"], JAM.policy.p22);
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ['<div class="pre">'], JAM.policy.p22);
  return;
}
function openTextArea() {
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p22);
  return true;
}
function openWindow(title$$6) {
  JAM.call(_openWindow, null, [title$$6, true], JAM.policy.p41);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p23);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p39);
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p38);
  if (isColor) {
    var v112 = outputWindow.document;
    JAM.call(v112.write, v112, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p38);
  } else {
    var v114 = outputWindow.document;
    JAM.call(v114.write, v114, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p38);
  }
  var v116 = outputWindow.document;
  JAM.call(v116.write, v116, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$7 + " results</div>\n"], JAM.policy.p38);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$8) {
  JAM.call(_openWindowAlign, null, [title$$8, true], JAM.policy.p41);
  return;
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p23);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p39);
  var v118 = outputWindow.document;
  JAM.call(v118.write, v118, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p38);
  if (isBackground) {
    var v120 = outputWindow.document;
    JAM.call(v120.write, v120, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p38);
  } else {
    var v122 = outputWindow.document;
    JAM.call(v122.write, v122, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p38);
  }
  var v124 = outputWindow.document;
  JAM.call(v124.write, v124, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$9 + " results</div>\n"], JAM.policy.p38);
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
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p22);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = JAM.call(theNumber.toString, theNumber, [], JAM.policy.p39);
  j$$5 = theNumber.length;
  var v127 = j$$5 < lengthOfColumn;
  for (;v127;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v127 = j$$5 < lengthOfColumn;
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
    var v465 = testArray[0]
  }
  if (v465 != testString) {
    JAM.call(alert, null, ["Array object push method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  if (JAM.call(testString.search, testString, [re$$2], JAM.policy.p38) == -1) {
    JAM.call(alert, null, ["Regular expression 'm' flag not supported. See browser compatibility page."], JAM.policy.p22);
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
    JAM.call(alert, null, ["Exception handling not supported. See browser compatibility page."], JAM.policy.p22);
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p40);
  if (testString != "1X2X3X") {
    JAM.call(alert, null, ["Nested function in String replace method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  var testNum = 2489.8237;
  if (JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p25) != 2489.824) {
    JAM.call(alert, null, ["Number toFixed() method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  if (JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p25) != 2489.8) {
    JAM.call(alert, null, ["Number toPrecision() method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  if (JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p38) == -1) {
    JAM.call(alert, null, ["Please enter a number"], JAM.policy.p22);
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v763 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p38) == -1;
  if (!v763) {
    v763 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p38) == -1;
  }
  var v653 = v763;
  if (!v653) {
    v653 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p38) == -1;
  }
  var v470 = v653;
  if (!v470) {
    v470 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v470) {
    JAM.call(alert, null, ["Please enter the contents of an EMBL file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if (JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p38) == -1) {
    JAM.call(alert, null, ["Please enter a number."], JAM.policy.p22);
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
    JAM.call(alert, null, ["The sequence contains non-DNA characters, which will be omitted."], JAM.policy.p22);
  }
  return true;
}
function verifyProtein(proteinSequence) {
  if (JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p38) != -1) {
    JAM.call(alert, null, ["The sequence contains non-protein characters, which will be omitted."], JAM.policy.p22);
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v766 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v766) {
    v766 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v656 = v766;
  if (!v656) {
    v656 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v475 = v656;
  if (!v475) {
    v475 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v475) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v769 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v769) {
    v769 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v659 = v769;
  if (!v659) {
    v659 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v476 = v659;
  if (!v476) {
    v476 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v476) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  if (JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p38) == -1) {
    JAM.call(alert, null, ["The file has no defined features."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v772 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p38) == -1;
  if (!v772) {
    v772 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p38) == -1;
  }
  var v662 = v772;
  if (!v662) {
    v662 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p38) == -1;
  }
  var v478 = v662;
  if (!v478) {
    v478 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v478) {
    JAM.call(alert, null, ["Please enter the contents of an EMBL file."], JAM.policy.p22);
    return false;
  }
  if (JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p38) == -1) {
    JAM.call(alert, null, ["The file has no defined features."], JAM.policy.p22);
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
  var v155 = i$$5 < stopBase;
  for (;v155;) {
    lineOfText = JAM.call(rightNum, null, [i$$5 + 1, lineOfText, 8, tabIn$$1], JAM.policy.p40);
    var j$$6 = 1;
    var v152 = j$$6 <= basePerLine / groupSize;
    for (;v152;) {
      var v151 = k < groupSize;
      for (;v151;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p38);
        k = k + 1;
        v151 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v152 = j$$6 <= basePerLine / groupSize;
    }
    var v153 = outputWindow.document;
    JAM.call(v153.write, v153, [lineOfText + "\n"], JAM.policy.p38);
    lineOfText = "";
    v155 = i$$5 < stopBase;
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
    var v483 = adjustment < 0;
    if (v483) {
      v483 = adjusted >= 0;
    }
    if (v483) {
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
  var v189 = i$$6 < stopBase$$2;
  for (;v189;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v165 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for (;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for (;v160;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p38);
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2;
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
      v165 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v166 = outputWindow.document;
      JAM.call(v166.write, v166, [JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p40), "", 8, tabIn$$3], JAM.policy.p41) + lineOfText$$1 + "\n"], JAM.policy.p38);
      if (strands$$1 == "two") {
        var v168 = outputWindow.document;
        JAM.call(v168.write, v168, [JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p40), "", 8, tabIn$$3], JAM.policy.p41) + JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + "\n"], JAM.policy.p38);
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, ["\n"], JAM.policy.p22);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v172 = outputWindow.document;
        JAM.call(v172.write, v172, [lineOfText$$1 + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40) + "\n"], JAM.policy.p38);
        if (strands$$1 == "two") {
          var v174 = outputWindow.document;
          JAM.call(v174.write, v174, [JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40) + "\n"], JAM.policy.p38);
          var v176 = outputWindow.document;
          JAM.call(v176.write, v176, ["\n"], JAM.policy.p22);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v178 = outputWindow.document;
          JAM.call(v178.write, v178, [aboveNum + "\n"], JAM.policy.p38);
          var v180 = outputWindow.document;
          JAM.call(v180.write, v180, [lineOfText$$1 + "\n"], JAM.policy.p38);
          if (strands$$1 == "two") {
            var v182 = outputWindow.document;
            JAM.call(v182.write, v182, [JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + "\n"], JAM.policy.p38);
            var v184 = outputWindow.document;
            JAM.call(v184.write, v184, ["\n"], JAM.policy.p22);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v189 = i$$6 < stopBase$$2;
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
  var v210 = i$$7 < stopBase$$3;
  for (;v210;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v198 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for (;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for (;v193;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p38);
        k$$2 = k$$2 + 1;
        v193 = k$$2 < groupSize$$3;
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
      v198 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v199 = outputWindow.document;
      JAM.call(v199.write, v199, [JAM.call(rightNum, null, [lineNum$$1, "", 8, tabIn$$4], JAM.policy.p41) + lineOfText$$2 + "\n"], JAM.policy.p38);
    } else {
      if (numberPosition$$2 == "right") {
        var v201 = outputWindow.document;
        JAM.call(v201.write, v201, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p38);
      } else {
        if (numberPosition$$2 == "above") {
          var v203 = outputWindow.document;
          JAM.call(v203.write, v203, [aboveNum$$1 + "\n"], JAM.policy.p38);
          var v205 = outputWindow.document;
          JAM.call(v205.write, v205, [lineOfText$$2 + "\n"], JAM.policy.p38);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v210 = i$$7 < stopBase$$3;
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
  var v673 = sequence$$13.length <= firstIndexToMutate;
  if (!v673) {
    v673 = lastIndexToMutate < 0;
  }
  var v500 = v673;
  if (!v500) {
    v500 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v500) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for (;v219;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * maxNum], JAM.policy.p38);
    var v502 = randNum < firstIndexToMutate;
    if (!v502) {
      v502 = randNum > lastIndexToMutate;
    }
    if (v502) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
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
        var v506 = components$$1[componentsIndex]
      }
      if (v506 != currentChar) {
        needNewChar = false;
      }
    }
    var v507 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p24);
    introspect(JAM.policy.p26) {
      var v508 = components$$1[componentsIndex]
    }
    sequence$$13 = v507 + v508 + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p40);
    i$$8 = i$$8 + 1;
    v219 = i$$8 < numMut;
  }
  var v220 = outputWindow.document;
  JAM.call(v220.write, v220, [JAM.call(addReturns, null, [sequence$$13], JAM.policy.p38)], JAM.policy.p38);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v226 = j$$9 < lengthOut$$1;
  for (;v226;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * components$$2.length], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v223 = outputWindow.document;
      JAM.call(v223.write, v223, [sequence$$14 + "\n"], JAM.policy.p38);
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v226 = j$$9 < lengthOut$$1;
  }
  var v227 = outputWindow.document;
  JAM.call(v227.write, v227, [sequence$$14 + "\n"], JAM.policy.p38);
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
    shiftValue = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p24).length;
    sequence$$15 = JAM.call(sequence$$15.substring, sequence$$15, [sequence$$15.length - lookAhead, sequence$$15.length], JAM.policy.p40) + sequence$$15 + JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p24);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v233 = outputWindow.document;
  JAM.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v234 = outputWindow.document;
  JAM.call(v234.write, v234, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p38);
  var i$$9 = 0;
  var v251 = i$$9 < arrayOfItems.length;
  for (;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v517 = arrayOfItems[i$$9]
    }
    matchExp = JAM.call(v517.match, v517, [/\/.+\//], JAM.policy.p38) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v781 = arrayOfItems[i$$9]
    }
    var v679 = JAM.call(v781.match, v781, [/\)\D*\d+/], JAM.policy.p38);
    var v518 = JAM.call(v679.toString, v679, [], JAM.policy.p39);
    cutDistance = JAM.call(parseFloat, null, [JAM.call(v518.replace, v518, [/\)\D*/, ""], JAM.policy.p41)], JAM.policy.p38);
    var v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    for (;v243;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v519 = matchPosition >= lowerLimit;
      if (v519) {
        v519 = matchPosition < upperLimit;
      }
      if (v519) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
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
    var v249 = outputWindow.document;
    var v904 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p26) {
      var v953 = arrayOfItems[i$$9]
    }
    var v942 = JAM.call(v953.match, v953, [/\([^\(]+\)/], JAM.policy.p38);
    var v930 = JAM.call(v942.toString, v942, [], JAM.policy.p39);
    JAM.call(v249.write, v249, [v904 + JAM.call(v930.replace, v930, [/\(|\)/g, ""], JAM.policy.p41) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p38);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v251 = i$$9 < arrayOfItems.length;
  }
  var v252 = outputWindow.document;
  JAM.call(v252.write, v252, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v253 = outputWindow.document;
  JAM.call(v253.write, v253, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p38);
  var i$$10 = 0;
  var v264 = i$$10 < arrayOfItems$$1.length;
  for (;v264;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v528 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = JAM.call(v528.match, v528, [/\/[^\/]+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p38) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p38).length;
    }
    var percentage = 0;
    var v683 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v840 = arrayOfItems$$1[i$$10]
    }
    if (v683 - JAM.call(parseFloat, null, [JAM.call(v840.match, v840, [/\d+/], JAM.policy.p38)], JAM.policy.p38) > 0) {
      var v259 = 100 * tempNumber;
      var v531 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v785 = arrayOfItems$$1[i$$10]
      }
      percentage = v259 / (v531 - JAM.call(parseFloat, null, [JAM.call(v785.match, v785, [/\d+/], JAM.policy.p38)], JAM.policy.p38));
    }
    var v262 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v954 = arrayOfItems$$1[i$$10]
    }
    var v943 = JAM.call(v954.match, v954, [/\([^\(]+\)\b/], JAM.policy.p38);
    var v931 = JAM.call(v943.toString, v943, [], JAM.policy.p39);
    JAM.call(v262.write, v262, ["<tr><td>" + JAM.call(v931.replace, v931, [/\(|\)/g, ""], JAM.policy.p41) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p25) + "</td></tr>\n"], JAM.policy.p38);
    i$$10 = i$$10 + 1;
    v264 = i$$10 < arrayOfItems$$1.length;
  }
  var v265 = outputWindow.document;
  JAM.call(v265.write, v265, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v272 = sequence$$17.length > 0;
  for (;v272;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * maxNum$$1], JAM.policy.p38);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p38);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p24);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p40);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v269 = outputWindow.document;
      JAM.call(v269.write, v269, [tempSeq + "\n"], JAM.policy.p38);
      tempSeq = "";
    }
    v272 = sequence$$17.length > 0;
  }
  var v273 = outputWindow.document;
  JAM.call(v273.write, v273, [tempSeq + "\n"], JAM.policy.p38);
  return true;
}
function restDigest(theDocument) {
  var newDna = "";
  var maxInput$$3 = 1E5;
  if (JAM.call(testScript, null, [], JAM.policy.p39) == false) {
    return false;
  }
  var restrictionFragments = JAM.new(Array, [], JAM.policy.p39);
  var restrictionFragment;
  var v907 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v880 = v907[0]
  }
  var v842 = v880.elements;
  introspect(JAM.policy.p26) {
    var v787 = v842[0]
  }
  var v540 = JAM.call(checkFormElement, null, [v787], JAM.policy.p38) == false;
  if (!v540) {
    var v932 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v908 = v932[0]
    }
    var v881 = v908.elements;
    introspect(JAM.policy.p26) {
      var v843 = v881[0]
    }
    v540 = JAM.call(checkSequenceLength, null, [v843.value, maxInput$$3], JAM.policy.p40) == false;
  }
  if (v540) {
    return false;
  }
  var v844 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v789 = v844[0]
  }
  var v691 = v789.elements;
  introspect(JAM.policy.p26) {
    var v541 = v691[0]
  }
  var arrayOfFasta$$1 = JAM.call(getArrayOfFasta, null, [v541.value], JAM.policy.p38);
  var i$$11 = 0;
  var v283 = i$$11 < arrayOfFasta$$1.length;
  for (;v283;) {
    introspect(JAM.policy.p26) {
      var v278 = arrayOfFasta$$1[i$$11]
    }
    newDna = JAM.call(getSequenceFromFasta, null, [v278], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      var v279 = arrayOfFasta$$1[i$$11]
    }
    title = JAM.call(getTitleFromFasta, null, [v279], JAM.policy.p38);
    newDna = JAM.call(removeNonDna, null, [newDna], JAM.policy.p38);
    var v909 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v882 = v909[0]
    }
    var v845 = v882.elements;
    introspect(JAM.policy.p26) {
      var v790 = v845[4]
    }
    var v692 = v790.options;
    var v910 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v883 = v910[0]
    }
    var v846 = v883.elements;
    introspect(JAM.policy.p26) {
      var v791 = v846[4]
    }
    var v693 = v791.selectedIndex;
    introspect(JAM.policy.p26) {
      var v543 = v692[v693]
    }
    restrictionFragment = JAM.new(RestrictionFragment, [v543.value, title, newDna, 1, newDna.length, "sequence start", "sequence end", newDna.length], JAM.policy.p40);
    JAM.call(restrictionFragments.push, restrictionFragments, [restrictionFragment], JAM.policy.p38);
    i$$11 = i$$11 + 1;
    v283 = i$$11 < arrayOfFasta$$1.length;
  }
  var v911 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v884 = v911[0]
  }
  var v847 = v884.elements;
  introspect(JAM.policy.p26) {
    var v792 = v847[5]
  }
  var v694 = v792.options;
  var v912 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v885 = v912[0]
  }
  var v848 = v885.elements;
  introspect(JAM.policy.p26) {
    var v793 = v848[5]
  }
  var v695 = v793.selectedIndex;
  introspect(JAM.policy.p26) {
    var v545 = v694[v695]
  }
  restrictionFragments = JAM.call(digest, null, [restrictionFragments, v545.value], JAM.policy.p40);
  var v913 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v886 = v913[0]
  }
  var v849 = v886.elements;
  introspect(JAM.policy.p26) {
    var v794 = v849[6]
  }
  var v696 = v794.options;
  var v914 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v887 = v914[0]
  }
  var v850 = v887.elements;
  introspect(JAM.policy.p26) {
    var v795 = v850[6]
  }
  var v697 = v795.selectedIndex;
  introspect(JAM.policy.p26) {
    var v546 = v696[v697]
  }
  restrictionFragments = JAM.call(digest, null, [restrictionFragments, v546.value], JAM.policy.p40);
  var v915 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v888 = v915[0]
  }
  var v851 = v888.elements;
  introspect(JAM.policy.p26) {
    var v796 = v851[7]
  }
  var v698 = v796.options;
  var v916 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v889 = v916[0]
  }
  var v852 = v889.elements;
  introspect(JAM.policy.p26) {
    var v797 = v852[7]
  }
  var v699 = v797.selectedIndex;
  introspect(JAM.policy.p26) {
    var v547 = v698[v699]
  }
  restrictionFragments = JAM.call(digest, null, [restrictionFragments, v547.value], JAM.policy.p40);
  JAM.call(restrictionFragments.sort, restrictionFragments, [restrictionFragmentSorter], JAM.policy.p38);
  JAM.call(openWindow, null, ["Restriction Digest"], JAM.policy.p22);
  JAM.call(openPre, null, [], JAM.policy.p39);
  i$$11 = 0;
  var v290 = i$$11 < restrictionFragments.length;
  for (;v290;) {
    introspect(JAM.policy.p26) {
      var v287 = restrictionFragments[i$$11]
    }
    JAM.call(v287.correctPositions, v287, [], JAM.policy.p39);
    introspect(JAM.policy.p26) {
      var v288 = restrictionFragments[i$$11]
    }
    var v917 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v890 = v917[0]
    }
    var v853 = v890.elements;
    introspect(JAM.policy.p26) {
      var v798 = v853[4]
    }
    var v700 = v798.options;
    var v918 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v891 = v918[0]
    }
    var v854 = v891.elements;
    introspect(JAM.policy.p26) {
      var v799 = v854[4]
    }
    var v701 = v799.selectedIndex;
    introspect(JAM.policy.p26) {
      var v549 = v700[v701]
    }
    JAM.call(v288.writeFragment, v288, [v549.value], JAM.policy.p38);
    i$$11 = i$$11 + 1;
    v290 = i$$11 < restrictionFragments.length;
  }
  JAM.call(closePre, null, [], JAM.policy.p39);
  JAM.call(closeWindow, null, [], JAM.policy.p39);
  return true;
}
function digest(arrayOfRestrictionFragments, enzyme) {
  if (enzyme == "") {
    return arrayOfRestrictionFragments;
  }
  var newFragments = JAM.new(Array, [], JAM.policy.p39);
  var positions = JAM.new(Array, [], JAM.policy.p39);
  var matchPosition$$1 = 0;
  var v292 = JAM.call(enzyme.match, enzyme, [/\/.+\//], JAM.policy.p38);
  var matchExp$$2 = JAM.call(v292.toString, v292, [], JAM.policy.p39);
  matchExp$$2 = JAM.call(matchExp$$2.replace, matchExp$$2, [/\//g, ""], JAM.policy.p41);
  matchExp$$2 = JAM.new(RegExp, [matchExp$$2, "gi"], JAM.policy.p41);
  var v702 = JAM.call(enzyme.match, enzyme, [/\)\D*\d+/], JAM.policy.p38);
  var v551 = JAM.call(v702.toString, v702, [], JAM.policy.p39);
  var cutDistance$$1 = JAM.call(parseInt, null, [JAM.call(v551.replace, v551, [/\)\D*/, ""], JAM.policy.p41)], JAM.policy.p38);
  var v552 = JAM.call(enzyme.match, enzyme, [/\([^\(]+\)/], JAM.policy.p38);
  var v294 = JAM.call(v552.toString, v552, [], JAM.policy.p39);
  var enzymeName = JAM.call(v294.replace, v294, [/\(|\)/g, ""], JAM.policy.p41);
  var matchArray$$2;
  var wasCut = false;
  var restrictionFragmentOne;
  var restrictionFragmentTwo;
  var previousCutPosition;
  var previousEnzyme;
  var previousStartPosition;
  var startRestrictionFragment;
  var lookAhead$$1 = 50;
  var lowerLimit$$1;
  var upperLimit$$1;
  var shiftValue$$1;
  var i$$12 = 0;
  var v337 = i$$12 < arrayOfRestrictionFragments.length;
  for (;v337;) {
    introspect(JAM.policy.p26) {
      var v703 = arrayOfRestrictionFragments[i$$12]
    }
    if (v703.topology == "circular") {
      introspect(JAM.policy.p26) {
        var v704 = arrayOfRestrictionFragments[i$$12]
      }
      var v555 = v704.sequence;
      shiftValue$$1 = JAM.call(v555.substring, v555, [0, lookAhead$$1], JAM.policy.p24).length;
      introspect(JAM.policy.p26) {
        var v800 = arrayOfRestrictionFragments[i$$12]
      }
      var v705 = v800.sequence;
      introspect(JAM.policy.p26) {
        var v892 = arrayOfRestrictionFragments[i$$12]
      }
      var v706 = v892.sequence.length - lookAhead$$1;
      introspect(JAM.policy.p26) {
        var v856 = arrayOfRestrictionFragments[i$$12]
      }
      var v556 = JAM.call(v705.substring, v705, [v706, v856.sequence.length], JAM.policy.p40);
      introspect(JAM.policy.p26) {
        var v708 = arrayOfRestrictionFragments[i$$12]
      }
      var v296 = v556 + v708.sequence;
      introspect(JAM.policy.p26) {
        var v709 = arrayOfRestrictionFragments[i$$12]
      }
      var v558 = v709.sequence;
      var extendedSequence = v296 + JAM.call(v558.substring, v558, [0, lookAhead$$1], JAM.policy.p24);
      lowerLimit$$1 = 0 + shiftValue$$1;
      introspect(JAM.policy.p26) {
        var v710 = arrayOfRestrictionFragments[i$$12]
      }
      upperLimit$$1 = v710.sequence.length + shiftValue$$1;
      var v302 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [extendedSequence], JAM.policy.p38);
      for (;v302;) {
        matchPosition$$1 = matchExp$$2.lastIndex;
        matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
        var v560 = matchPosition$$1 >= lowerLimit$$1;
        if (v560) {
          v560 = matchPosition$$1 < upperLimit$$1;
        }
        if (v560) {
          JAM.call(positions.push, positions, [matchPosition$$1 - shiftValue$$1], JAM.policy.p38);
          wasCut = true;
        }
        matchExp$$2.lastIndex = matchExp$$2.lastIndex - RegExp.lastMatch.length + 1;
        v302 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [extendedSequence], JAM.policy.p38);
      }
    } else {
      introspect(JAM.policy.p26) {
        var v712 = arrayOfRestrictionFragments[i$$12]
      }
      var v304 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [v712.sequence], JAM.policy.p38);
      for (;v304;) {
        matchPosition$$1 = matchExp$$2.lastIndex;
        matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
        JAM.call(positions.push, positions, [matchPosition$$1], JAM.policy.p38);
        wasCut = true;
        matchExp$$2.lastIndex = matchExp$$2.lastIndex - RegExp.lastMatch.length + 1;
        introspect(JAM.policy.p26) {
          var v714 = arrayOfRestrictionFragments[i$$12]
        }
        v304 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [v714.sequence], JAM.policy.p38);
      }
    }
    if (!wasCut) {
      introspect(JAM.policy.p26) {
        var v306 = arrayOfRestrictionFragments[i$$12]
      }
      JAM.call(newFragments.push, newFragments, [v306], JAM.policy.p38);
    } else {
      wasCut = false;
      previousCutPosition = 0;
      introspect(JAM.policy.p26) {
        var v307 = arrayOfRestrictionFragments[i$$12]
      }
      previousEnzyme = v307.startEnzyme;
      introspect(JAM.policy.p26) {
        var v308 = arrayOfRestrictionFragments[i$$12]
      }
      previousStartPosition = v308.start;
      var j$$10 = 0;
      var v335 = j$$10 < positions.length;
      for (;v335;) {
        introspect(JAM.policy.p26) {
          var v715 = arrayOfRestrictionFragments[i$$12]
        }
        if (v715.topology == "circular") {
          introspect(JAM.policy.p26) {
            var v309 = arrayOfRestrictionFragments[i$$12]
          }
          v309.topology = "linear";
          introspect(JAM.policy.p26) {
            var v569 = arrayOfRestrictionFragments[i$$12]
          }
          var v310 = v569.sourceName;
          introspect(JAM.policy.p26) {
            var v716 = arrayOfRestrictionFragments[i$$12]
          }
          var v570 = v716.sequence;
          introspect(JAM.policy.p26) {
            var v571 = positions[j$$10]
          }
          var v311 = JAM.call(v570.substring, v570, [previousCutPosition, v571], JAM.policy.p40);
          var v717 = previousStartPosition;
          introspect(JAM.policy.p26) {
            var v893 = arrayOfRestrictionFragments[i$$12]
          }
          var v857 = v893.sequence;
          introspect(JAM.policy.p26) {
            var v858 = positions[j$$10]
          }
          var v312 = v717 + JAM.call(v857.substring, v857, [previousCutPosition, v858], JAM.policy.p40).length - 1;
          introspect(JAM.policy.p26) {
            var v573 = arrayOfRestrictionFragments[i$$12]
          }
          startRestrictionFragment = JAM.new(RestrictionFragment, ["linear", v310, v311, previousStartPosition, v312, previousEnzyme, enzymeName, v573.originalLength], JAM.policy.p23);
        } else {
          introspect(JAM.policy.p26) {
            var v574 = arrayOfRestrictionFragments[i$$12]
          }
          var v314 = v574.sourceName;
          introspect(JAM.policy.p26) {
            var v719 = arrayOfRestrictionFragments[i$$12]
          }
          var v575 = v719.sequence;
          introspect(JAM.policy.p26) {
            var v576 = positions[j$$10]
          }
          var v315 = JAM.call(v575.substring, v575, [previousCutPosition, v576], JAM.policy.p40);
          var v720 = previousStartPosition;
          introspect(JAM.policy.p26) {
            var v894 = arrayOfRestrictionFragments[i$$12]
          }
          var v859 = v894.sequence;
          introspect(JAM.policy.p26) {
            var v860 = positions[j$$10]
          }
          var v316 = v720 + JAM.call(v859.substring, v859, [previousCutPosition, v860], JAM.policy.p40).length - 1;
          introspect(JAM.policy.p26) {
            var v578 = arrayOfRestrictionFragments[i$$12]
          }
          restrictionFragmentOne = JAM.new(RestrictionFragment, ["linear", v314, v315, previousStartPosition, v316, previousEnzyme, enzymeName, v578.originalLength], JAM.policy.p23);
          JAM.call(newFragments.push, newFragments, [restrictionFragmentOne], JAM.policy.p38);
        }
        if (j$$10 == positions.length - 1) {
          if (startRestrictionFragment == null) {
            introspect(JAM.policy.p26) {
              var v580 = arrayOfRestrictionFragments[i$$12]
            }
            var v319 = v580.sourceName;
            introspect(JAM.policy.p26) {
              var v723 = arrayOfRestrictionFragments[i$$12]
            }
            var v581 = v723.sequence;
            introspect(JAM.policy.p26) {
              var v582 = positions[j$$10]
            }
            introspect(JAM.policy.p26) {
              var v805 = arrayOfRestrictionFragments[i$$12]
            }
            var v320 = JAM.call(v581.substring, v581, [v582, v805.sequence.length], JAM.policy.p40);
            var v584 = previousStartPosition;
            introspect(JAM.policy.p26) {
              var v861 = arrayOfRestrictionFragments[i$$12]
            }
            var v806 = v861.sequence;
            introspect(JAM.policy.p26) {
              var v807 = positions[j$$10]
            }
            var v321 = v584 + JAM.call(v806.substring, v806, [previousCutPosition, v807], JAM.policy.p40).length;
            introspect(JAM.policy.p26) {
              var v586 = arrayOfRestrictionFragments[i$$12]
            }
            var v322 = v586.stop;
            introspect(JAM.policy.p26) {
              var v587 = arrayOfRestrictionFragments[i$$12]
            }
            var v323 = v587.stopEnzyme;
            introspect(JAM.policy.p26) {
              var v588 = arrayOfRestrictionFragments[i$$12]
            }
            restrictionFragmentTwo = JAM.new(RestrictionFragment, ["linear", v319, v320, v321, v322, enzymeName, v323, v588.originalLength], JAM.policy.p23);
            JAM.call(newFragments.push, newFragments, [restrictionFragmentTwo], JAM.policy.p38);
          } else {
            introspect(JAM.policy.p26) {
              var v589 = arrayOfRestrictionFragments[i$$12]
            }
            var v325 = v589.sourceName;
            introspect(JAM.policy.p26) {
              var v808 = arrayOfRestrictionFragments[i$$12]
            }
            var v726 = v808.sequence;
            introspect(JAM.policy.p26) {
              var v727 = positions[j$$10]
            }
            introspect(JAM.policy.p26) {
              var v862 = arrayOfRestrictionFragments[i$$12]
            }
            var v326 = JAM.call(v726.substring, v726, [v727, v862.sequence.length], JAM.policy.p40) + startRestrictionFragment.sequence;
            var v592 = previousStartPosition;
            introspect(JAM.policy.p26) {
              var v863 = arrayOfRestrictionFragments[i$$12]
            }
            var v810 = v863.sequence;
            introspect(JAM.policy.p26) {
              var v811 = positions[j$$10]
            }
            var v327 = v592 + JAM.call(v810.substring, v810, [previousCutPosition, v811], JAM.policy.p40).length;
            var v328 = startRestrictionFragment.stop;
            var v329 = startRestrictionFragment.stopEnzyme;
            introspect(JAM.policy.p26) {
              var v594 = arrayOfRestrictionFragments[i$$12]
            }
            restrictionFragmentTwo = JAM.new(RestrictionFragment, ["linear", v325, v326, v327, v328, enzymeName, v329, v594.originalLength], JAM.policy.p23);
            JAM.call(newFragments.push, newFragments, [restrictionFragmentTwo], JAM.policy.p38);
          }
        }
        introspect(JAM.policy.p26) {
          previousCutPosition = positions[j$$10];
        }
        previousEnzyme = enzymeName;
        introspect(JAM.policy.p26) {
          var v595 = arrayOfRestrictionFragments[i$$12]
        }
        var v333 = v595.start;
        introspect(JAM.policy.p26) {
          var v334 = positions[j$$10]
        }
        previousStartPosition = v333 + v334;
        j$$10 = j$$10 + 1;
        v335 = j$$10 < positions.length;
      }
    }
    positions = JAM.new(Array, [], JAM.policy.p39);
    startRestrictionFragment = null;
    i$$12 = i$$12 + 1;
    v337 = i$$12 < arrayOfRestrictionFragments.length;
  }
  return newFragments;
}
function restrictionFragmentSorter(a, b) {
  if (a.sequence.length < b.sequence.length) {
    return 1;
  }
  if (a.sequence.length > b.sequence.length) {
    return-1;
  }
  if (a.sequence.length == b.sequence.length) {
    if (a.start < b.start) {
      return-1;
    }
    if (a.start > b.start) {
      return 1;
    } else {
      return 0;
    }
  }
  return;
}
function writeFragment(topology$$1) {
  if (this.topology == "linear") {
    var v343 = outputWindow.document;
    JAM.call(v343.write, v343, ["&gt;" + this.sequence.length + " bp linear fragment from " + topology$$1 + " parent " + this.sourceName + ", base " + this.start + " to base " + this.stop + " (" + this.startEnzyme + " - " + this.stopEnzyme + ").\n"], JAM.policy.p38);
  } else {
    var v345 = outputWindow.document;
    JAM.call(v345.write, v345, ["&gt;" + this.sequence.length + " bp circular molecule from " + topology$$1 + " parent " + this.sourceName + ".\n"], JAM.policy.p38);
  }
  var v348 = outputWindow.document;
  JAM.call(v348.write, v348, [JAM.call(addReturns, null, [this.sequence], JAM.policy.p38) + "\n\n"], JAM.policy.p38);
  return;
}
function correctPositions() {
  if (this.start > this.originalLength) {
    this.start = this.start - this.originalLength;
  }
  if (this.stop > this.originalLength) {
    this.stop = this.stop - this.originalLength;
  }
  if (this.stop == 0) {
    this.stop = this.originalLength;
  }
  return;
}
function RestrictionFragment(topology$$2, sourceName, sequence$$18, start$$4, stop, startEnzyme, stopEnzyme, originalLength$$1) {
  this.topology = topology$$2;
  this.sourceName = sourceName;
  this.sequence = sequence$$18;
  this.start = start$$4;
  this.stop = stop;
  this.startEnzyme = startEnzyme;
  this.stopEnzyme = stopEnzyme;
  this.originalLength = originalLength$$1;
  return;
}
JAM.new(RestrictionFragment, ["", "", "", 0, 0, "", "", 0], JAM.policy.p23);
RestrictionFragment.prototype.writeFragment = writeFragment;
RestrictionFragment.prototype.correctPositions = correctPositions;
JAM.set(document, "onload", v2);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p22), "onclick", v3);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p22), "onclick", v4)

