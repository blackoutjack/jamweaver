// sms2-three-to-one.js
function v5() {
  var v563 = document.forms;
  introspect(JAM.policy.p26) {
    var v488 = v563[0]
  }
  var v297 = v488.elements;
  introspect(JAM.policy.p26) {
    var v6 = v297[0]
  }
  v6.value = " ";
  return;
}
function v4() {
  try {
    JAM.call(threeToOne, null, [document], JAM.policy.p38);
  } catch (e$$5) {
    JAM.call(alert, null, ["The following error was encountered: " + e$$5], JAM.policy.p38);
  }
  return;
}
function v3() {
  var v8 = document.main_form.main_submit;
  JAM.call(v8.focus, v8, [], JAM.policy.p39);
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
    var v9 = arrayOfSequences[0]
  }
  var lengthOfAlign = v9.length;
  if (arrayOfSequences.length < 2) {
    JAM.call(alert, null, ["Please enter an alignment consisting of at least two sequences."], JAM.policy.p22);
    return false;
  }
  var i$$1 = 0;
  var v12 = i$$1 < arrayOfTitles.length;
  for (;v12;) {
    introspect(JAM.policy.p26) {
      var v612 = arrayOfTitles[i$$1]
    }
    var v489 = JAM.call(v612.search, v612, [/\S/], JAM.policy.p38) == -1;
    if (!v489) {
      introspect(JAM.policy.p26) {
        var v613 = arrayOfSequences[i$$1]
      }
      v489 = JAM.call(v613.search, v613, [/\S/], JAM.policy.p38) == -1;
    }
    var v301 = v489;
    if (!v301) {
      introspect(JAM.policy.p26) {
        var v567 = arrayOfSequences[i$$1]
      }
      v301 = v567.length != lengthOfAlign;
    }
    if (v301) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$1 = i$$1 + 1;
    v12 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v614 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p38) == -1;
  if (!v614) {
    v614 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p38) == -1;
  }
  var v568 = v614;
  if (!v568) {
    v568 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p38) == -1;
  }
  var v492 = v568;
  if (!v492) {
    v492 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p38) == -1;
  }
  var v303 = v492;
  if (!v303) {
    v303 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p38) == -1;
  }
  if (v303) {
    JAM.call(alert, null, ["The codon table has been entered incorrectly."], JAM.policy.p22);
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v495 = formElement.value;
  if (JAM.call(v495.search, v495, [/\S/], JAM.policy.p38) == -1) {
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
  var v17 = z$$2 < arrayOfPatterns.length;
  for (;v17;) {
    introspect(JAM.policy.p26) {
      var v496 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(v496.search, v496, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v497 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(moreExpressionCheck, null, [v497], JAM.policy.p38) == false) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$2 = z$$2 + 1;
    v17 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = JAM.new(Array, [arrayOfPatterns.length], JAM.policy.p38);
  var geneticCodeMatchExp = JAM.new(Array, [arrayOfPatterns.length], JAM.policy.p38);
  var j = 0;
  var v26 = j < arrayOfPatterns.length;
  for (;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAM.policy.p26) {
      var v571 = arrayOfPatterns[j]
    }
    var v310 = JAM.call(v571.match, v571, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v728 = eval("introspect(JAM.policy.pFull) { " + v310 + " }")
    } else {
      var v728 = JAM.call(eval, null, [v310])
    }
    introspect(JAM.policy.p27) {
      v20[v21] = v728;
    }
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAM.policy.p26) {
      var v499 = arrayOfPatterns[j]
    }
    var v311 = JAM.call(v499.match, v499, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v729 = JAM.call(v311.toString, v311, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v22[v23] = v729;
    }
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAM.policy.p26) {
      var v312 = geneticCodeMatchResult[j]
    }
    var v730 = JAM.call(v312.replace, v312, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v24[v25] = v730;
    }
    j = j + 1;
    v26 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v33 = i$$2 <= testSequence.length - 3;
  for (;v33;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p40);
    j = 0;
    var v31 = j < geneticCodeMatchExp.length;
    for (;v31;) {
      introspect(JAM.policy.p26) {
        var v501 = geneticCodeMatchExp[j]
      }
      if (JAM.call(codon.search, codon, [v501], JAM.policy.p38) != -1) {
        if (oneMatch == true) {
          JAM.call(alert, null, ["Genetic code error: more than one amino acid is coded by the codon: " + codon + "."], JAM.policy.p38);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      v31 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      JAM.call(alert, null, ["The genetic code expressions are missing a codon."], JAM.policy.p22);
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v33 = i$$2 <= testSequence.length - 3;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v35 = z$$3 < arrayOfPatterns$$1.length;
  for (;v35;) {
    introspect(JAM.policy.p26) {
      var v503 = arrayOfPatterns$$1[z$$3]
    }
    if (JAM.call(v503.search, v503, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p38) != -1) {
      JAM.call(alert, null, ["One or more groups have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$3 = z$$3 + 1;
    v35 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v39 = i$$3 < arrayOfPatterns$$1.length;
  for (;v39;) {
    introspect(JAM.policy.p26) {
      var v504 = arrayOfPatterns$$1[i$$3]
    }
    var re = JAM.new(RegExp, ["[" + v504 + "]", "gi"], JAM.policy.p41);
    var j$$1 = i$$3 + 1;
    var v38 = j$$1 < arrayOfPatterns$$1.length;
    for (;v38;) {
      introspect(JAM.policy.p26) {
        var v505 = arrayOfPatterns$$1[j$$1]
      }
      if (JAM.call(v505.search, v505, [re], JAM.policy.p38) != -1) {
        JAM.call(alert, null, ["The same amino acid is in more than one similarity group."], JAM.policy.p22);
        return false;
      }
      j$$1 = j$$1 + 1;
      v38 = j$$1 < arrayOfPatterns$$1.length;
    }
    i$$3 = i$$3 + 1;
    v39 = i$$3 < arrayOfPatterns$$1.length;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v42 = z$$4 < arrayOfPatterns$$2.length;
  for (;v42;) {
    introspect(JAM.policy.p26) {
      var v506 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(v506.search, v506, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v507 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(moreExpressionCheck, null, [v507], JAM.policy.p38) == false) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$4 = z$$4 + 1;
    v42 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v572 = JAM.call(getSequenceFromFasta, null, [text$$7], JAM.policy.p38);
  if (JAM.call(v572.replace, v572, [/[^A-Za-z]/g, ""], JAM.policy.p41).length > maxInput) {
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
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</form>"], JAM.policy.p22);
  return true;
}
function closePre() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</div>"], JAM.policy.p22);
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</pre>\n"], JAM.policy.p22);
  return;
}
function closeTextArea() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</textarea>"], JAM.policy.p22);
  return true;
}
function closeWindow() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</body>\n</html>\n"], JAM.policy.p22);
  outputWindow.status = "Done.";
  var v52 = outputWindow.document;
  JAM.call(v52.close, v52, [], JAM.policy.p39);
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
  var v55 = i$$4 < alignArray.length;
  for (;v55;) {
    introspect(JAM.policy.p26) {
      var v509 = alignArray[i$$4]
    }
    if (JAM.call(v509.search, v509, [/[^\s]+\s/], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$4 = i$$4 + 1;
    v55 = i$$4 < alignArray.length;
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
    var v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p38);
    for (;v57;) {
      introspect(JAM.policy.p26) {
        var v56 = matchArray[0]
      }
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v56], JAM.policy.p38);
      v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p38);
    }
  } else {
    introspect(JAM.policy.p27) {
      arrayOfFasta[0] = sequenceData;
    }
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$2) {
  var stringToReturn = "&gt;results for " + sequence$$2.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle$$1 + '"';
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
  var v75 = j$$2 < arrayOfPatterns$$3.length;
  for (;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAM.policy.p26) {
      var v573 = arrayOfPatterns$$3[j$$2]
    }
    var v359 = JAM.call(v573.match, v573, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v731 = eval("introspect(JAM.policy.pFull) { " + v359 + " }")
    } else {
      var v731 = JAM.call(eval, null, [v359])
    }
    introspect(JAM.policy.p27) {
      v73[v74] = v731;
    }
    j$$2 = j$$2 + 1;
    v75 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = JAM.new(Array, [arrayOfPatterns$$4.length], JAM.policy.p38);
  var j$$3 = 0;
  var v81 = j$$3 < arrayOfPatterns$$4.length;
  for (;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAM.policy.p26) {
      var v511 = arrayOfPatterns$$4[j$$3]
    }
    var v362 = JAM.call(v511.match, v511, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v732 = JAM.call(v362.toString, v362, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v77[v78] = v732;
    }
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAM.policy.p26) {
      var v363 = geneticCodeMatchResult$$1[j$$3]
    }
    var v733 = JAM.call(v363.replace, v363, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v79[v80] = v733;
    }
    j$$3 = j$$3 + 1;
    v81 = j$$3 < arrayOfPatterns$$4.length;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$2, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$2 + '"';
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p24) + '"';
  return'<div class="info">' + stringToReturn$$2 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$3, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$3.search, fastaSequenceTitle$$3, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$3 + '"';
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
  var v102 = j$$4 < lengthOut;
  for (;v102;) {
    tempNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * components.length], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar = components[tempNum];
    }
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p38);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut;
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
    var v104 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p41);
    fastaTitle = JAM.call(v104.toString, v104, [], JAM.policy.p39);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p41);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p41);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p41);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v699 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p38) != -1;
  if (!v699) {
    v699 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v690 = v699;
  if (!v690) {
    v690 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p38) != -1;
  }
  var v681 = v690;
  if (!v681) {
    v681 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v670 = v681;
  if (!v670) {
    v670 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p38) != -1;
  }
  var v658 = v670;
  if (!v658) {
    v658 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p38) != -1;
  }
  var v646 = v658;
  if (!v646) {
    v646 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p38) != -1;
  }
  var v617 = v646;
  if (!v617) {
    v617 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p38) != -1;
  }
  var v574 = v617;
  if (!v574) {
    v574 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p38) != -1;
  }
  var v513 = v574;
  if (!v513) {
    v513 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p38) != -1;
  }
  var v391 = v513;
  if (!v391) {
    v391 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p38) != -1;
  }
  if (v391) {
    return false;
  }
  return true;
}
function openForm() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ['<form action="">\n'], JAM.policy.p22);
  return true;
}
function openPre() {
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ["<pre>"], JAM.policy.p22);
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<div class="pre">'], JAM.policy.p22);
  return;
}
function openTextArea() {
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p22);
  return true;
}
function openWindow(title$$6) {
  JAM.call(_openWindow, null, [title$$6, true], JAM.policy.p41);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p23);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p39);
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p38);
  if (isColor) {
    var v113 = outputWindow.document;
    JAM.call(v113.write, v113, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p38);
  } else {
    var v115 = outputWindow.document;
    JAM.call(v115.write, v115, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p38);
  }
  var v117 = outputWindow.document;
  JAM.call(v117.write, v117, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$7 + " results</div>\n"], JAM.policy.p38);
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
  var v119 = outputWindow.document;
  JAM.call(v119.write, v119, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p38);
  if (isBackground) {
    var v121 = outputWindow.document;
    JAM.call(v121.write, v121, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p38);
  } else {
    var v123 = outputWindow.document;
    JAM.call(v123.write, v123, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p38);
  }
  var v125 = outputWindow.document;
  JAM.call(v125.write, v125, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$9 + " results</div>\n"], JAM.policy.p38);
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
  var v128 = j$$5 < lengthOfColumn;
  for (;v128;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v128 = j$$5 < lengthOfColumn;
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
    var v401 = testArray[0]
  }
  if (v401 != testString) {
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
  var v585 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p38) == -1;
  if (!v585) {
    v585 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p38) == -1;
  }
  var v524 = v585;
  if (!v524) {
    v524 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p38) == -1;
  }
  var v406 = v524;
  if (!v406) {
    v406 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v406) {
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
  var v588 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v588) {
    v588 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v527 = v588;
  if (!v527) {
    v527 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v411 = v527;
  if (!v411) {
    v411 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v411) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v591 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v591) {
    v591 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v530 = v591;
  if (!v530) {
    v530 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v412 = v530;
  if (!v412) {
    v412 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v412) {
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
  var v594 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p38) == -1;
  if (!v594) {
    v594 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p38) == -1;
  }
  var v533 = v594;
  if (!v533) {
    v533 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p38) == -1;
  }
  var v414 = v533;
  if (!v414) {
    v414 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v414) {
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
  var v156 = i$$5 < stopBase;
  for (;v156;) {
    lineOfText = JAM.call(rightNum, null, [i$$5 + 1, lineOfText, 8, tabIn$$1], JAM.policy.p40);
    var j$$6 = 1;
    var v153 = j$$6 <= basePerLine / groupSize;
    for (;v153;) {
      var v152 = k < groupSize;
      for (;v152;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p38);
        k = k + 1;
        v152 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v153 = j$$6 <= basePerLine / groupSize;
    }
    var v154 = outputWindow.document;
    JAM.call(v154.write, v154, [lineOfText + "\n"], JAM.policy.p38);
    lineOfText = "";
    v156 = i$$5 < stopBase;
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
    var v419 = adjustment < 0;
    if (v419) {
      v419 = adjusted >= 0;
    }
    if (v419) {
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
  var v190 = i$$6 < stopBase$$2;
  for (;v190;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v166 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for (;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for (;v161;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p38);
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2;
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
      v166 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v167 = outputWindow.document;
      JAM.call(v167.write, v167, [JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p40), "", 8, tabIn$$3], JAM.policy.p41) + lineOfText$$1 + "\n"], JAM.policy.p38);
      if (strands$$1 == "two") {
        var v169 = outputWindow.document;
        JAM.call(v169.write, v169, [JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p40), "", 8, tabIn$$3], JAM.policy.p41) + JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + "\n"], JAM.policy.p38);
        var v171 = outputWindow.document;
        JAM.call(v171.write, v171, ["\n"], JAM.policy.p22);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v173 = outputWindow.document;
        JAM.call(v173.write, v173, [lineOfText$$1 + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40) + "\n"], JAM.policy.p38);
        if (strands$$1 == "two") {
          var v175 = outputWindow.document;
          JAM.call(v175.write, v175, [JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40) + "\n"], JAM.policy.p38);
          var v177 = outputWindow.document;
          JAM.call(v177.write, v177, ["\n"], JAM.policy.p22);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v179 = outputWindow.document;
          JAM.call(v179.write, v179, [aboveNum + "\n"], JAM.policy.p38);
          var v181 = outputWindow.document;
          JAM.call(v181.write, v181, [lineOfText$$1 + "\n"], JAM.policy.p38);
          if (strands$$1 == "two") {
            var v183 = outputWindow.document;
            JAM.call(v183.write, v183, [JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + "\n"], JAM.policy.p38);
            var v185 = outputWindow.document;
            JAM.call(v185.write, v185, ["\n"], JAM.policy.p22);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v190 = i$$6 < stopBase$$2;
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
  var v211 = i$$7 < stopBase$$3;
  for (;v211;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v199 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for (;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for (;v194;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p38);
        k$$2 = k$$2 + 1;
        v194 = k$$2 < groupSize$$3;
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
      v199 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v200 = outputWindow.document;
      JAM.call(v200.write, v200, [JAM.call(rightNum, null, [lineNum$$1, "", 8, tabIn$$4], JAM.policy.p41) + lineOfText$$2 + "\n"], JAM.policy.p38);
    } else {
      if (numberPosition$$2 == "right") {
        var v202 = outputWindow.document;
        JAM.call(v202.write, v202, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p38);
      } else {
        if (numberPosition$$2 == "above") {
          var v204 = outputWindow.document;
          JAM.call(v204.write, v204, [aboveNum$$1 + "\n"], JAM.policy.p38);
          var v206 = outputWindow.document;
          JAM.call(v206.write, v206, [lineOfText$$2 + "\n"], JAM.policy.p38);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v211 = i$$7 < stopBase$$3;
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
  var v544 = sequence$$13.length <= firstIndexToMutate;
  if (!v544) {
    v544 = lastIndexToMutate < 0;
  }
  var v436 = v544;
  if (!v436) {
    v436 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v436) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for (;v220;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * maxNum], JAM.policy.p38);
    var v438 = randNum < firstIndexToMutate;
    if (!v438) {
      v438 = randNum > lastIndexToMutate;
    }
    if (v438) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
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
        var v442 = components$$1[componentsIndex]
      }
      if (v442 != currentChar) {
        needNewChar = false;
      }
    }
    var v443 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p24);
    introspect(JAM.policy.p26) {
      var v444 = components$$1[componentsIndex]
    }
    sequence$$13 = v443 + v444 + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p40);
    i$$8 = i$$8 + 1;
    v220 = i$$8 < numMut;
  }
  var v221 = outputWindow.document;
  JAM.call(v221.write, v221, [JAM.call(addReturns, null, [sequence$$13], JAM.policy.p38)], JAM.policy.p38);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v227 = j$$9 < lengthOut$$1;
  for (;v227;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * components$$2.length], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v224 = outputWindow.document;
      JAM.call(v224.write, v224, [sequence$$14 + "\n"], JAM.policy.p38);
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v227 = j$$9 < lengthOut$$1;
  }
  var v228 = outputWindow.document;
  JAM.call(v228.write, v228, [sequence$$14 + "\n"], JAM.policy.p38);
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
  var v234 = outputWindow.document;
  JAM.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v235 = outputWindow.document;
  JAM.call(v235.write, v235, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p38);
  var i$$9 = 0;
  var v252 = i$$9 < arrayOfItems.length;
  for (;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v453 = arrayOfItems[i$$9]
    }
    matchExp = JAM.call(v453.match, v453, [/\/.+\//], JAM.policy.p38) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v603 = arrayOfItems[i$$9]
    }
    var v550 = JAM.call(v603.match, v603, [/\)\D*\d+/], JAM.policy.p38);
    var v454 = JAM.call(v550.toString, v550, [], JAM.policy.p39);
    cutDistance = JAM.call(parseFloat, null, [JAM.call(v454.replace, v454, [/\)\D*/, ""], JAM.policy.p41)], JAM.policy.p38);
    var v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    for (;v244;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v455 = matchPosition >= lowerLimit;
      if (v455) {
        v455 = matchPosition < upperLimit;
      }
      if (v455) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
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
    var v250 = outputWindow.document;
    var v665 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p26) {
      var v697 = arrayOfItems[i$$9]
    }
    var v688 = JAM.call(v697.match, v697, [/\([^\(]+\)/], JAM.policy.p38);
    var v678 = JAM.call(v688.toString, v688, [], JAM.policy.p39);
    JAM.call(v250.write, v250, [v665 + JAM.call(v678.replace, v678, [/\(|\)/g, ""], JAM.policy.p41) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p38);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v252 = i$$9 < arrayOfItems.length;
  }
  var v253 = outputWindow.document;
  JAM.call(v253.write, v253, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p38);
  var i$$10 = 0;
  var v265 = i$$10 < arrayOfItems$$1.length;
  for (;v265;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v464 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = JAM.call(v464.match, v464, [/\/[^\/]+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p38) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p38).length;
    }
    var percentage = 0;
    var v554 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v638 = arrayOfItems$$1[i$$10]
    }
    if (v554 - JAM.call(parseFloat, null, [JAM.call(v638.match, v638, [/\d+/], JAM.policy.p38)], JAM.policy.p38) > 0) {
      var v260 = 100 * tempNumber;
      var v467 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v607 = arrayOfItems$$1[i$$10]
      }
      percentage = v260 / (v467 - JAM.call(parseFloat, null, [JAM.call(v607.match, v607, [/\d+/], JAM.policy.p38)], JAM.policy.p38));
    }
    var v263 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v698 = arrayOfItems$$1[i$$10]
    }
    var v689 = JAM.call(v698.match, v698, [/\([^\(]+\)\b/], JAM.policy.p38);
    var v679 = JAM.call(v689.toString, v689, [], JAM.policy.p39);
    JAM.call(v263.write, v263, ["<tr><td>" + JAM.call(v679.replace, v679, [/\(|\)/g, ""], JAM.policy.p41) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p25) + "</td></tr>\n"], JAM.policy.p38);
    i$$10 = i$$10 + 1;
    v265 = i$$10 < arrayOfItems$$1.length;
  }
  var v266 = outputWindow.document;
  JAM.call(v266.write, v266, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v273 = sequence$$17.length > 0;
  for (;v273;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * maxNum$$1], JAM.policy.p38);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p38);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p24);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p40);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v270 = outputWindow.document;
      JAM.call(v270.write, v270, [tempSeq + "\n"], JAM.policy.p38);
      tempSeq = "";
    }
    v273 = sequence$$17.length > 0;
  }
  var v274 = outputWindow.document;
  JAM.call(v274.write, v274, [tempSeq + "\n"], JAM.policy.p38);
  return true;
}
function threeToOne(theDocument) {
  var newProtein = "";
  var maxInput$$3 = 1E5;
  if (JAM.call(testScript, null, [], JAM.policy.p39) == false) {
    return false;
  }
  var v668 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v656 = v668[0]
  }
  var v640 = v656.elements;
  introspect(JAM.policy.p26) {
    var v609 = v640[0]
  }
  var v476 = JAM.call(checkFormElement, null, [v609], JAM.policy.p38) == false;
  if (!v476) {
    var v680 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v669 = v680[0]
    }
    var v657 = v669.elements;
    introspect(JAM.policy.p26) {
      var v641 = v657[0]
    }
    v476 = JAM.call(checkTextLength, null, [v641.value, maxInput$$3], JAM.policy.p40) == false;
  }
  if (v476) {
    return false;
  }
  JAM.call(openWindow, null, ["Three to One"], JAM.policy.p22);
  JAM.call(openPre, null, [], JAM.policy.p39);
  var v642 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v611 = v642[0]
  }
  var v562 = v611.elements;
  introspect(JAM.policy.p26) {
    var v477 = v562[0]
  }
  var arrayOfFasta$$1 = JAM.call(getArrayOfFasta, null, [v477.value], JAM.policy.p38);
  var i$$11 = 0;
  var v284 = i$$11 < arrayOfFasta$$1.length;
  for (;v284;) {
    introspect(JAM.policy.p26) {
      var v279 = arrayOfFasta$$1[i$$11]
    }
    newProtein = JAM.call(getTripletSequenceFromFasta, null, [v279], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      var v280 = arrayOfFasta$$1[i$$11]
    }
    title = JAM.call(getFastaTitleFromTriplets, null, [v280], JAM.policy.p38);
    newProtein = JAM.call(filterTriplets, null, [newProtein], JAM.policy.p38);
    var v281 = outputWindow.document;
    JAM.call(v281.write, v281, [JAM.call(getInfoFromTitleAndSequenceTriplets, null, [title, newProtein], JAM.policy.p40)], JAM.policy.p38);
    JAM.call(writeThreeToOne, null, [newProtein], JAM.policy.p38);
    var v283 = outputWindow.document;
    JAM.call(v283.write, v283, ["\n\n"], JAM.policy.p22);
    i$$11 = i$$11 + 1;
    v284 = i$$11 < arrayOfFasta$$1.length;
  }
  JAM.call(closePre, null, [], JAM.policy.p39);
  JAM.call(closeWindow, null, [], JAM.policy.p39);
  return true;
}
function writeThreeToOne(proteinSequence$$1) {
  function v2(str$$8, p1$$2, p2, p3, offset$$10, s$$4) {
    return JAM.call(p1$$2.toUpperCase, p1$$2, [], JAM.policy.p39) + JAM.call(p2.toLowerCase, p2, [], JAM.policy.p39) + JAM.call(p3.toLowerCase, p3, [], JAM.policy.p39);
  }
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/(.)(.)(.)/g, v2], JAM.policy.p40);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Ala/g, " A "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Asx/g, " B "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Cys/g, " C "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Asp/g, " D "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Glu/g, " E "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Phe/g, " F "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Gly/g, " G "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/His/g, " H "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Ile/g, " I "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Lys/g, " K "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Leu/g, " L "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Met/g, " M "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Asn/g, " N "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Pro/g, " P "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Gln/g, " Q "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Arg/g, " R "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Ser/g, " S "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Thr/g, " T "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Val/g, " V "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Trp/g, " W "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Xaa/g, " X "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Tyr/g, " Y "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Glx/g, " Z "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/\*\*\*/g, " * "], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/\s/g, ""], JAM.policy.p41);
  var v287 = outputWindow.document;
  JAM.call(v287.write, v287, [JAM.call(addReturns, null, [proteinSequence$$1], JAM.policy.p38)], JAM.policy.p38);
  return true;
}
function filterTriplets(tripletSequence) {
  tripletSequence = JAM.call(tripletSequence.replace, tripletSequence, [/\s|\d/gi, ""], JAM.policy.p41);
  return tripletSequence;
}
function getFastaTitleFromTriplets(tripletSequence$$1) {
  fastaSequenceTitle = "Untitled";
  if (JAM.call(tripletSequence$$1.search, tripletSequence$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38) != -1) {
    var v289 = JAM.call(tripletSequence$$1.match, tripletSequence$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p41);
    fastaSequenceTitle = JAM.call(v289.toString, v289, [], JAM.policy.p39);
    fastaSequenceTitle = JAM.call(fastaSequenceTitle.replace, fastaSequenceTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p41);
    fastaSequenceTitle = JAM.call(filterFastaTitle, null, [fastaSequenceTitle], JAM.policy.p38);
  }
  return fastaSequenceTitle;
}
function getTripletSequenceFromFasta(tripletSequence$$2) {
  if (JAM.call(tripletSequence$$2.search, tripletSequence$$2, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38) != -1) {
    tripletSequence$$2 = JAM.call(tripletSequence$$2.replace, tripletSequence$$2, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p41);
  }
  return tripletSequence$$2;
}
function getInfoFromTitleAndSequenceTriplets(fastaSequenceTitle$$4, sequence$$18) {
  var stringToReturn$$5 = "&gt;results for sequence ";
  if (JAM.call(fastaSequenceTitle$$4.search, fastaSequenceTitle$$4, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn$$5 = stringToReturn$$5 + '"' + fastaSequenceTitle$$4 + '"';
  }
  stringToReturn$$5 = stringToReturn$$5 + ' starting "' + JAM.call(sequence$$18.substring, sequence$$18, [0, 12], JAM.policy.p24) + '"';
  return stringToReturn$$5 + "\n";
}
JAM.set(document, "onload", v3);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p22), "onclick", v4);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p22), "onclick", v5)

