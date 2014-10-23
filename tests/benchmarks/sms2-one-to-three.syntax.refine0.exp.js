// sms2-one-to-three.js
function v6() {
  var v553 = document.forms;
  introspect(JAM.policy.p26) {
    var v478 = v553[0]
  }
  var v293 = v478.elements;
  introspect(JAM.policy.p26) {
    var v7 = v293[0]
  }
  v7.value = " ";
  return;
}
function v5() {
  try {
    JAM.call(oneToThree, null, [document], JAM.policy.p38);
  } catch (e$$5) {
    JAM.call(alert, null, ["The following error was encountered: " + e$$5], JAM.policy.p38);
  }
  return;
}
function v4() {
  var v9 = document.main_form.main_submit;
  JAM.call(v9.focus, v9, [], JAM.policy.p39);
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
    var v10 = arrayOfSequences[0]
  }
  var lengthOfAlign = v10.length;
  if (arrayOfSequences.length < 2) {
    JAM.call(alert, null, ["Please enter an alignment consisting of at least two sequences."], JAM.policy.p22);
    return false;
  }
  var i$$1 = 0;
  var v13 = i$$1 < arrayOfTitles.length;
  for (;v13;) {
    introspect(JAM.policy.p26) {
      var v602 = arrayOfTitles[i$$1]
    }
    var v479 = JAM.call(v602.search, v602, [/\S/], JAM.policy.p38) == -1;
    if (!v479) {
      introspect(JAM.policy.p26) {
        var v603 = arrayOfSequences[i$$1]
      }
      v479 = JAM.call(v603.search, v603, [/\S/], JAM.policy.p38) == -1;
    }
    var v297 = v479;
    if (!v297) {
      introspect(JAM.policy.p26) {
        var v557 = arrayOfSequences[i$$1]
      }
      v297 = v557.length != lengthOfAlign;
    }
    if (v297) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$1 = i$$1 + 1;
    v13 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v604 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p38) == -1;
  if (!v604) {
    v604 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p38) == -1;
  }
  var v558 = v604;
  if (!v558) {
    v558 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p38) == -1;
  }
  var v482 = v558;
  if (!v482) {
    v482 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p38) == -1;
  }
  var v299 = v482;
  if (!v299) {
    v299 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p38) == -1;
  }
  if (v299) {
    JAM.call(alert, null, ["The codon table has been entered incorrectly."], JAM.policy.p22);
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v485 = formElement.value;
  if (JAM.call(v485.search, v485, [/\S/], JAM.policy.p38) == -1) {
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
  var v18 = z$$2 < arrayOfPatterns.length;
  for (;v18;) {
    introspect(JAM.policy.p26) {
      var v486 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(v486.search, v486, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v487 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(moreExpressionCheck, null, [v487], JAM.policy.p38) == false) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$2 = z$$2 + 1;
    v18 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = JAM.new(Array, [arrayOfPatterns.length], JAM.policy.p38);
  var geneticCodeMatchExp = JAM.new(Array, [arrayOfPatterns.length], JAM.policy.p38);
  var j = 0;
  var v27 = j < arrayOfPatterns.length;
  for (;v27;) {
    var v21 = geneticCodeMatchExp;
    var v22 = j;
    introspect(JAM.policy.p26) {
      var v561 = arrayOfPatterns[j]
    }
    var v306 = JAM.call(v561.match, v561, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v718 = eval("introspect(JAM.policy.pFull) { " + v306 + " }")
    } else {
      var v718 = JAM.call(eval, null, [v306])
    }
    introspect(JAM.policy.p27) {
      v21[v22] = v718;
    }
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAM.policy.p26) {
      var v489 = arrayOfPatterns[j]
    }
    var v307 = JAM.call(v489.match, v489, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v719 = JAM.call(v307.toString, v307, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v23[v24] = v719;
    }
    var v25 = geneticCodeMatchResult;
    var v26 = j;
    introspect(JAM.policy.p26) {
      var v308 = geneticCodeMatchResult[j]
    }
    var v720 = JAM.call(v308.replace, v308, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v25[v26] = v720;
    }
    j = j + 1;
    v27 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v34 = i$$2 <= testSequence.length - 3;
  for (;v34;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p40);
    j = 0;
    var v32 = j < geneticCodeMatchExp.length;
    for (;v32;) {
      introspect(JAM.policy.p26) {
        var v491 = geneticCodeMatchExp[j]
      }
      if (JAM.call(codon.search, codon, [v491], JAM.policy.p38) != -1) {
        if (oneMatch == true) {
          JAM.call(alert, null, ["Genetic code error: more than one amino acid is coded by the codon: " + codon + "."], JAM.policy.p38);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      v32 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      JAM.call(alert, null, ["The genetic code expressions are missing a codon."], JAM.policy.p22);
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v34 = i$$2 <= testSequence.length - 3;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v36 = z$$3 < arrayOfPatterns$$1.length;
  for (;v36;) {
    introspect(JAM.policy.p26) {
      var v493 = arrayOfPatterns$$1[z$$3]
    }
    if (JAM.call(v493.search, v493, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p38) != -1) {
      JAM.call(alert, null, ["One or more groups have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$3 = z$$3 + 1;
    v36 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v40 = i$$3 < arrayOfPatterns$$1.length;
  for (;v40;) {
    introspect(JAM.policy.p26) {
      var v494 = arrayOfPatterns$$1[i$$3]
    }
    var re = JAM.new(RegExp, ["[" + v494 + "]", "gi"], JAM.policy.p41);
    var j$$1 = i$$3 + 1;
    var v39 = j$$1 < arrayOfPatterns$$1.length;
    for (;v39;) {
      introspect(JAM.policy.p26) {
        var v495 = arrayOfPatterns$$1[j$$1]
      }
      if (JAM.call(v495.search, v495, [re], JAM.policy.p38) != -1) {
        JAM.call(alert, null, ["The same amino acid is in more than one similarity group."], JAM.policy.p22);
        return false;
      }
      j$$1 = j$$1 + 1;
      v39 = j$$1 < arrayOfPatterns$$1.length;
    }
    i$$3 = i$$3 + 1;
    v40 = i$$3 < arrayOfPatterns$$1.length;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v43 = z$$4 < arrayOfPatterns$$2.length;
  for (;v43;) {
    introspect(JAM.policy.p26) {
      var v496 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(v496.search, v496, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v497 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(moreExpressionCheck, null, [v497], JAM.policy.p38) == false) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$4 = z$$4 + 1;
    v43 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v562 = JAM.call(getSequenceFromFasta, null, [text$$7], JAM.policy.p38);
  if (JAM.call(v562.replace, v562, [/[^A-Za-z]/g, ""], JAM.policy.p41).length > maxInput) {
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
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</form>"], JAM.policy.p22);
  return true;
}
function closePre() {
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</div>"], JAM.policy.p22);
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</pre>\n"], JAM.policy.p22);
  return;
}
function closeTextArea() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</textarea>"], JAM.policy.p22);
  return true;
}
function closeWindow() {
  var v52 = outputWindow.document;
  JAM.call(v52.write, v52, ["</body>\n</html>\n"], JAM.policy.p22);
  outputWindow.status = "Done.";
  var v53 = outputWindow.document;
  JAM.call(v53.close, v53, [], JAM.policy.p39);
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
  var v56 = i$$4 < alignArray.length;
  for (;v56;) {
    introspect(JAM.policy.p26) {
      var v499 = alignArray[i$$4]
    }
    if (JAM.call(v499.search, v499, [/[^\s]+\s/], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$4 = i$$4 + 1;
    v56 = i$$4 < alignArray.length;
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
    var v58 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p38);
    for (;v58;) {
      introspect(JAM.policy.p26) {
        var v57 = matchArray[0]
      }
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v57], JAM.policy.p38);
      v58 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p38);
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
  var v76 = j$$2 < arrayOfPatterns$$3.length;
  for (;v76;) {
    var v74 = geneticCodeMatchExp$$1;
    var v75 = j$$2;
    introspect(JAM.policy.p26) {
      var v563 = arrayOfPatterns$$3[j$$2]
    }
    var v355 = JAM.call(v563.match, v563, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v721 = eval("introspect(JAM.policy.pFull) { " + v355 + " }")
    } else {
      var v721 = JAM.call(eval, null, [v355])
    }
    introspect(JAM.policy.p27) {
      v74[v75] = v721;
    }
    j$$2 = j$$2 + 1;
    v76 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = JAM.new(Array, [arrayOfPatterns$$4.length], JAM.policy.p38);
  var j$$3 = 0;
  var v82 = j$$3 < arrayOfPatterns$$4.length;
  for (;v82;) {
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAM.policy.p26) {
      var v501 = arrayOfPatterns$$4[j$$3]
    }
    var v358 = JAM.call(v501.match, v501, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v722 = JAM.call(v358.toString, v358, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v78[v79] = v722;
    }
    var v80 = geneticCodeMatchResult$$1;
    var v81 = j$$3;
    introspect(JAM.policy.p26) {
      var v359 = geneticCodeMatchResult$$1[j$$3]
    }
    var v723 = JAM.call(v359.replace, v359, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v80[v81] = v723;
    }
    j$$3 = j$$3 + 1;
    v82 = j$$3 < arrayOfPatterns$$4.length;
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
  var v103 = j$$4 < lengthOut;
  for (;v103;) {
    tempNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * components.length], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar = components[tempNum];
    }
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p38);
    j$$4 = j$$4 + 1;
    v103 = j$$4 < lengthOut;
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
    var v105 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p41);
    fastaTitle = JAM.call(v105.toString, v105, [], JAM.policy.p39);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p41);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p41);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p41);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v689 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p38) != -1;
  if (!v689) {
    v689 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v680 = v689;
  if (!v680) {
    v680 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p38) != -1;
  }
  var v671 = v680;
  if (!v671) {
    v671 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v660 = v671;
  if (!v660) {
    v660 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p38) != -1;
  }
  var v648 = v660;
  if (!v648) {
    v648 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p38) != -1;
  }
  var v636 = v648;
  if (!v636) {
    v636 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p38) != -1;
  }
  var v607 = v636;
  if (!v607) {
    v607 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p38) != -1;
  }
  var v564 = v607;
  if (!v564) {
    v564 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p38) != -1;
  }
  var v503 = v564;
  if (!v503) {
    v503 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p38) != -1;
  }
  var v387 = v503;
  if (!v387) {
    v387 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p38) != -1;
  }
  if (v387) {
    return false;
  }
  return true;
}
function openForm() {
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ['<form action="">\n'], JAM.policy.p22);
  return true;
}
function openPre() {
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ["<pre>"], JAM.policy.p22);
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<div class="pre">'], JAM.policy.p22);
  return;
}
function openTextArea() {
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p22);
  return true;
}
function openWindow(title$$6) {
  JAM.call(_openWindow, null, [title$$6, true], JAM.policy.p41);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p23);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p39);
  var v112 = outputWindow.document;
  JAM.call(v112.write, v112, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p38);
  if (isColor) {
    var v114 = outputWindow.document;
    JAM.call(v114.write, v114, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p38);
  } else {
    var v116 = outputWindow.document;
    JAM.call(v116.write, v116, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p38);
  }
  var v118 = outputWindow.document;
  JAM.call(v118.write, v118, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$7 + " results</div>\n"], JAM.policy.p38);
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
  var v120 = outputWindow.document;
  JAM.call(v120.write, v120, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p38);
  if (isBackground) {
    var v122 = outputWindow.document;
    JAM.call(v122.write, v122, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p38);
  } else {
    var v124 = outputWindow.document;
    JAM.call(v124.write, v124, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p38);
  }
  var v126 = outputWindow.document;
  JAM.call(v126.write, v126, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$9 + " results</div>\n"], JAM.policy.p38);
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
  var v129 = j$$5 < lengthOfColumn;
  for (;v129;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v129 = j$$5 < lengthOfColumn;
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
    var v397 = testArray[0]
  }
  if (v397 != testString) {
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
  var v575 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p38) == -1;
  if (!v575) {
    v575 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p38) == -1;
  }
  var v514 = v575;
  if (!v514) {
    v514 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p38) == -1;
  }
  var v402 = v514;
  if (!v402) {
    v402 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v402) {
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
  var v578 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v578) {
    v578 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v517 = v578;
  if (!v517) {
    v517 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v407 = v517;
  if (!v407) {
    v407 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v407) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v581 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v581) {
    v581 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v520 = v581;
  if (!v520) {
    v520 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v408 = v520;
  if (!v408) {
    v408 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v408) {
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
  var v584 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p38) == -1;
  if (!v584) {
    v584 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p38) == -1;
  }
  var v523 = v584;
  if (!v523) {
    v523 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p38) == -1;
  }
  var v410 = v523;
  if (!v410) {
    v410 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v410) {
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
  var v157 = i$$5 < stopBase;
  for (;v157;) {
    lineOfText = JAM.call(rightNum, null, [i$$5 + 1, lineOfText, 8, tabIn$$1], JAM.policy.p40);
    var j$$6 = 1;
    var v154 = j$$6 <= basePerLine / groupSize;
    for (;v154;) {
      var v153 = k < groupSize;
      for (;v153;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p38);
        k = k + 1;
        v153 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v154 = j$$6 <= basePerLine / groupSize;
    }
    var v155 = outputWindow.document;
    JAM.call(v155.write, v155, [lineOfText + "\n"], JAM.policy.p38);
    lineOfText = "";
    v157 = i$$5 < stopBase;
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
    var v415 = adjustment < 0;
    if (v415) {
      v415 = adjusted >= 0;
    }
    if (v415) {
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
  var v191 = i$$6 < stopBase$$2;
  for (;v191;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v167 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for (;v167;) {
      var v162 = k$$1 < groupSize$$2;
      for (;v162;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p38);
        k$$1 = k$$1 + 1;
        v162 = k$$1 < groupSize$$2;
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
      v167 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v168 = outputWindow.document;
      JAM.call(v168.write, v168, [JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p40), "", 8, tabIn$$3], JAM.policy.p41) + lineOfText$$1 + "\n"], JAM.policy.p38);
      if (strands$$1 == "two") {
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, [JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p40), "", 8, tabIn$$3], JAM.policy.p41) + JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + "\n"], JAM.policy.p38);
        var v172 = outputWindow.document;
        JAM.call(v172.write, v172, ["\n"], JAM.policy.p22);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v174 = outputWindow.document;
        JAM.call(v174.write, v174, [lineOfText$$1 + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40) + "\n"], JAM.policy.p38);
        if (strands$$1 == "two") {
          var v176 = outputWindow.document;
          JAM.call(v176.write, v176, [JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40) + "\n"], JAM.policy.p38);
          var v178 = outputWindow.document;
          JAM.call(v178.write, v178, ["\n"], JAM.policy.p22);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v180 = outputWindow.document;
          JAM.call(v180.write, v180, [aboveNum + "\n"], JAM.policy.p38);
          var v182 = outputWindow.document;
          JAM.call(v182.write, v182, [lineOfText$$1 + "\n"], JAM.policy.p38);
          if (strands$$1 == "two") {
            var v184 = outputWindow.document;
            JAM.call(v184.write, v184, [JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + "\n"], JAM.policy.p38);
            var v186 = outputWindow.document;
            JAM.call(v186.write, v186, ["\n"], JAM.policy.p22);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v191 = i$$6 < stopBase$$2;
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
  var v212 = i$$7 < stopBase$$3;
  for (;v212;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v200 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for (;v200;) {
      var v195 = k$$2 < groupSize$$3;
      for (;v195;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p38);
        k$$2 = k$$2 + 1;
        v195 = k$$2 < groupSize$$3;
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
      v200 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v201 = outputWindow.document;
      JAM.call(v201.write, v201, [JAM.call(rightNum, null, [lineNum$$1, "", 8, tabIn$$4], JAM.policy.p41) + lineOfText$$2 + "\n"], JAM.policy.p38);
    } else {
      if (numberPosition$$2 == "right") {
        var v203 = outputWindow.document;
        JAM.call(v203.write, v203, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p38);
      } else {
        if (numberPosition$$2 == "above") {
          var v205 = outputWindow.document;
          JAM.call(v205.write, v205, [aboveNum$$1 + "\n"], JAM.policy.p38);
          var v207 = outputWindow.document;
          JAM.call(v207.write, v207, [lineOfText$$2 + "\n"], JAM.policy.p38);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v212 = i$$7 < stopBase$$3;
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
  var v534 = sequence$$13.length <= firstIndexToMutate;
  if (!v534) {
    v534 = lastIndexToMutate < 0;
  }
  var v432 = v534;
  if (!v432) {
    v432 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v432) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v221 = i$$8 < numMut;
  for (;v221;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * maxNum], JAM.policy.p38);
    var v434 = randNum < firstIndexToMutate;
    if (!v434) {
      v434 = randNum > lastIndexToMutate;
    }
    if (v434) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v221 = i$$8 < numMut;
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
        var v438 = components$$1[componentsIndex]
      }
      if (v438 != currentChar) {
        needNewChar = false;
      }
    }
    var v439 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p24);
    introspect(JAM.policy.p26) {
      var v440 = components$$1[componentsIndex]
    }
    sequence$$13 = v439 + v440 + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p40);
    i$$8 = i$$8 + 1;
    v221 = i$$8 < numMut;
  }
  var v222 = outputWindow.document;
  JAM.call(v222.write, v222, [JAM.call(addReturns, null, [sequence$$13], JAM.policy.p38)], JAM.policy.p38);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v228 = j$$9 < lengthOut$$1;
  for (;v228;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * components$$2.length], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v225 = outputWindow.document;
      JAM.call(v225.write, v225, [sequence$$14 + "\n"], JAM.policy.p38);
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v228 = j$$9 < lengthOut$$1;
  }
  var v229 = outputWindow.document;
  JAM.call(v229.write, v229, [sequence$$14 + "\n"], JAM.policy.p38);
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
  var v235 = outputWindow.document;
  JAM.call(v235.write, v235, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v236 = outputWindow.document;
  JAM.call(v236.write, v236, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p38);
  var i$$9 = 0;
  var v253 = i$$9 < arrayOfItems.length;
  for (;v253;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v449 = arrayOfItems[i$$9]
    }
    matchExp = JAM.call(v449.match, v449, [/\/.+\//], JAM.policy.p38) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v593 = arrayOfItems[i$$9]
    }
    var v540 = JAM.call(v593.match, v593, [/\)\D*\d+/], JAM.policy.p38);
    var v450 = JAM.call(v540.toString, v540, [], JAM.policy.p39);
    cutDistance = JAM.call(parseFloat, null, [JAM.call(v450.replace, v450, [/\)\D*/, ""], JAM.policy.p41)], JAM.policy.p38);
    var v245 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    for (;v245;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v451 = matchPosition >= lowerLimit;
      if (v451) {
        v451 = matchPosition < upperLimit;
      }
      if (v451) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v245 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
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
    var v251 = outputWindow.document;
    var v655 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p26) {
      var v687 = arrayOfItems[i$$9]
    }
    var v678 = JAM.call(v687.match, v687, [/\([^\(]+\)/], JAM.policy.p38);
    var v668 = JAM.call(v678.toString, v678, [], JAM.policy.p39);
    JAM.call(v251.write, v251, [v655 + JAM.call(v668.replace, v668, [/\(|\)/g, ""], JAM.policy.p41) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p38);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v253 = i$$9 < arrayOfItems.length;
  }
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v256 = outputWindow.document;
  JAM.call(v256.write, v256, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p38);
  var i$$10 = 0;
  var v266 = i$$10 < arrayOfItems$$1.length;
  for (;v266;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v460 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = JAM.call(v460.match, v460, [/\/[^\/]+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p38) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p38).length;
    }
    var percentage = 0;
    var v544 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v628 = arrayOfItems$$1[i$$10]
    }
    if (v544 - JAM.call(parseFloat, null, [JAM.call(v628.match, v628, [/\d+/], JAM.policy.p38)], JAM.policy.p38) > 0) {
      var v261 = 100 * tempNumber;
      var v463 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v597 = arrayOfItems$$1[i$$10]
      }
      percentage = v261 / (v463 - JAM.call(parseFloat, null, [JAM.call(v597.match, v597, [/\d+/], JAM.policy.p38)], JAM.policy.p38));
    }
    var v264 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v688 = arrayOfItems$$1[i$$10]
    }
    var v679 = JAM.call(v688.match, v688, [/\([^\(]+\)\b/], JAM.policy.p38);
    var v669 = JAM.call(v679.toString, v679, [], JAM.policy.p39);
    JAM.call(v264.write, v264, ["<tr><td>" + JAM.call(v669.replace, v669, [/\(|\)/g, ""], JAM.policy.p41) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p25) + "</td></tr>\n"], JAM.policy.p38);
    i$$10 = i$$10 + 1;
    v266 = i$$10 < arrayOfItems$$1.length;
  }
  var v267 = outputWindow.document;
  JAM.call(v267.write, v267, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v274 = sequence$$17.length > 0;
  for (;v274;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * maxNum$$1], JAM.policy.p38);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p38);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p24);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p40);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v271 = outputWindow.document;
      JAM.call(v271.write, v271, [tempSeq + "\n"], JAM.policy.p38);
      tempSeq = "";
    }
    v274 = sequence$$17.length > 0;
  }
  var v275 = outputWindow.document;
  JAM.call(v275.write, v275, [tempSeq + "\n"], JAM.policy.p38);
  return true;
}
function oneToThree(theDocument) {
  var newProtein = "";
  var maxInput$$3 = 1E5;
  if (JAM.call(testScript, null, [], JAM.policy.p39) == false) {
    return false;
  }
  var v658 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v646 = v658[0]
  }
  var v630 = v646.elements;
  introspect(JAM.policy.p26) {
    var v599 = v630[0]
  }
  var v472 = JAM.call(checkFormElement, null, [v599], JAM.policy.p38) == false;
  if (!v472) {
    var v670 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v659 = v670[0]
    }
    var v647 = v659.elements;
    introspect(JAM.policy.p26) {
      var v631 = v647[0]
    }
    v472 = JAM.call(checkTextLength, null, [v631.value, maxInput$$3], JAM.policy.p40) == false;
  }
  if (v472) {
    return false;
  }
  JAM.call(openWindow, null, ["One to Three"], JAM.policy.p22);
  JAM.call(openPre, null, [], JAM.policy.p39);
  var v632 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v601 = v632[0]
  }
  var v552 = v601.elements;
  introspect(JAM.policy.p26) {
    var v473 = v552[0]
  }
  var arrayOfFasta$$1 = JAM.call(getArrayOfFasta, null, [v473.value], JAM.policy.p38);
  var i$$11 = 0;
  var v285 = i$$11 < arrayOfFasta$$1.length;
  for (;v285;) {
    introspect(JAM.policy.p26) {
      var v280 = arrayOfFasta$$1[i$$11]
    }
    newProtein = JAM.call(getSequenceFromFasta, null, [v280], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      var v281 = arrayOfFasta$$1[i$$11]
    }
    title = JAM.call(getTitleFromFasta, null, [v281], JAM.policy.p38);
    newProtein = JAM.call(removeNonProteinAllowDegen, null, [newProtein], JAM.policy.p38);
    var v282 = outputWindow.document;
    JAM.call(v282.write, v282, [JAM.call(getFastaTitleFromTitleAndSequence, null, [title, newProtein], JAM.policy.p40)], JAM.policy.p38);
    JAM.call(writeOneToThree, null, [newProtein], JAM.policy.p38);
    var v284 = outputWindow.document;
    JAM.call(v284.write, v284, ["\n\n"], JAM.policy.p22);
    i$$11 = i$$11 + 1;
    v285 = i$$11 < arrayOfFasta$$1.length;
  }
  JAM.call(closePre, null, [], JAM.policy.p39);
  JAM.call(closeWindow, null, [], JAM.policy.p39);
  return true;
}
function writeOneToThree(proteinSequence$$1) {
  function v3(str$$9, p1$$3, p2, p3, offset$$11, s$$5) {
    return p1$$3 + JAM.call(p2.toLowerCase, p2, [], JAM.policy.p39) + JAM.call(p3.toLowerCase, p3, [], JAM.policy.p39);
  }
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    return " " + p1$$2 + " ";
  }
  proteinSequence$$1 = JAM.call(proteinSequence$$1.toLowerCase, proteinSequence$$1, [], JAM.policy.p39);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/(.)/g, v2], JAM.policy.p40);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/a/g, "ALA"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/b/g, "ASX"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/c/g, "CYS"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/d/g, "ASP"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/e/g, "GLU"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/f/g, "PHE"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/g/g, "GLY"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/h/g, "HIS"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/i/g, "ILE"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/k/g, "LYS"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/l/g, "LEU"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/m/g, "MET"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/n/g, "ASN"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/p/g, "PRO"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/q/g, "GLN"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/r/g, "ARG"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/s/g, "SER"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/t/g, "THR"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/v/g, "VAL"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/w/g, "TRP"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/x/g, "XAA"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/y/g, "TYR"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/z/g, "GLX"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/\*/g, "***"], JAM.policy.p41);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/\s*(.)(.)(.)\s*/g, v3], JAM.policy.p40);
  var v289 = outputWindow.document;
  JAM.call(v289.write, v289, [JAM.call(addReturns, null, [proteinSequence$$1], JAM.policy.p38)], JAM.policy.p38);
  return true;
}
JAM.set(document, "onload", v4);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p22), "onclick", v5);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p22), "onclick", v6)

