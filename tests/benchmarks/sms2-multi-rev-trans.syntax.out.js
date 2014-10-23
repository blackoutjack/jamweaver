// sms2-multi-rev-trans.js
function v4() {
  var v948 = document.forms;
  introspect(JAM.policy.p26) {
    var v790 = v948[0]
  }
  var v451 = v790.elements;
  introspect(JAM.policy.p26) {
    var v5 = v451[0]
  }
  v5.value = " ";
  var v949 = document.forms;
  introspect(JAM.policy.p26) {
    var v791 = v949[0]
  }
  var v452 = v791.elements;
  introspect(JAM.policy.p26) {
    var v6 = v452[4]
  }
  v6.value = " ";
  return;
}
function v3() {
  try {
    JAM.call(multiRevTrans, null, [document], JAM.policy.p38);
  } catch (e$$8) {
    JAM.call(alert, null, ["The following error was encountered: " + e$$8], JAM.policy.p38);
  }
  return;
}
function v2() {
  var v8 = document.main_form.main_submit;
  JAM.call(v8.focus, v8, [], JAM.policy.p39);
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
      var v1046 = arrayOfTitles[i$$1]
    }
    var v792 = JAM.call(v1046.search, v1046, [/\S/], JAM.policy.p38) == -1;
    if (!v792) {
      introspect(JAM.policy.p26) {
        var v1047 = arrayOfSequences[i$$1]
      }
      v792 = JAM.call(v1047.search, v1047, [/\S/], JAM.policy.p38) == -1;
    }
    var v456 = v792;
    if (!v456) {
      introspect(JAM.policy.p26) {
        var v953 = arrayOfSequences[i$$1]
      }
      v456 = v953.length != lengthOfAlign;
    }
    if (v456) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$1 = i$$1 + 1;
    v12 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1048 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p38) == -1;
  if (!v1048) {
    v1048 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p38) == -1;
  }
  var v954 = v1048;
  if (!v954) {
    v954 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p38) == -1;
  }
  var v795 = v954;
  if (!v795) {
    v795 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p38) == -1;
  }
  var v458 = v795;
  if (!v458) {
    v458 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p38) == -1;
  }
  if (v458) {
    JAM.call(alert, null, ["The codon table has been entered incorrectly."], JAM.policy.p22);
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v798 = formElement.value;
  if (JAM.call(v798.search, v798, [/\S/], JAM.policy.p38) == -1) {
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
      var v799 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(v799.search, v799, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v800 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(moreExpressionCheck, null, [v800], JAM.policy.p38) == false) {
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
      var v957 = arrayOfPatterns[j]
    }
    var v465 = JAM.call(v957.match, v957, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v1271 = eval("introspect(JAM.policy.pFull) { " + v465 + " }")
    } else {
      var v1271 = JAM.call(eval, null, [v465])
    }
    introspect(JAM.policy.p27) {
      v20[v21] = v1271;
    }
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAM.policy.p26) {
      var v802 = arrayOfPatterns[j]
    }
    var v466 = JAM.call(v802.match, v802, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v1272 = JAM.call(v466.toString, v466, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v22[v23] = v1272;
    }
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAM.policy.p26) {
      var v467 = geneticCodeMatchResult[j]
    }
    var v1273 = JAM.call(v467.replace, v467, [/=/g, ""], JAM.policy.p40);
    introspect(JAM.policy.p27) {
      v24[v25] = v1273;
    }
    j = j + 1;
    v26 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v33 = i$$2 <= testSequence.length - 3;
  for (;v33;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p41);
    j = 0;
    var v31 = j < geneticCodeMatchExp.length;
    for (;v31;) {
      introspect(JAM.policy.p26) {
        var v804 = geneticCodeMatchExp[j]
      }
      if (JAM.call(codon.search, codon, [v804], JAM.policy.p38) != -1) {
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
      var v806 = arrayOfPatterns$$1[z$$3]
    }
    if (JAM.call(v806.search, v806, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p38) != -1) {
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
      var v807 = arrayOfPatterns$$1[i$$3]
    }
    var re = JAM.new(RegExp, ["[" + v807 + "]", "gi"], JAM.policy.p40);
    var j$$1 = i$$3 + 1;
    var v38 = j$$1 < arrayOfPatterns$$1.length;
    for (;v38;) {
      introspect(JAM.policy.p26) {
        var v808 = arrayOfPatterns$$1[j$$1]
      }
      if (JAM.call(v808.search, v808, [re], JAM.policy.p38) != -1) {
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
      var v809 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(v809.search, v809, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v810 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(moreExpressionCheck, null, [v810], JAM.policy.p38) == false) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$4 = z$$4 + 1;
    v42 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v958 = JAM.call(getSequenceFromFasta, null, [text$$7], JAM.policy.p38);
  if (JAM.call(v958.replace, v958, [/[^A-Za-z]/g, ""], JAM.policy.p40).length > maxInput) {
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
    JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
    return false;
  }
  var i$$4 = 1;
  var v55 = i$$4 < alignArray.length;
  for (;v55;) {
    introspect(JAM.policy.p26) {
      var v812 = alignArray[i$$4]
    }
    if (JAM.call(v812.search, v812, [/[^\s]+\s/], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$4 = i$$4 + 1;
    v55 = i$$4 < alignArray.length;
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
  var v75 = j$$2 < arrayOfPatterns$$3.length;
  for (;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAM.policy.p26) {
      var v959 = arrayOfPatterns$$3[j$$2]
    }
    var v514 = JAM.call(v959.match, v959, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v1274 = eval("introspect(JAM.policy.pFull) { " + v514 + " }")
    } else {
      var v1274 = JAM.call(eval, null, [v514])
    }
    introspect(JAM.policy.p27) {
      v73[v74] = v1274;
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
      var v814 = arrayOfPatterns$$4[j$$3]
    }
    var v517 = JAM.call(v814.match, v814, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v1275 = JAM.call(v517.toString, v517, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v77[v78] = v1275;
    }
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAM.policy.p26) {
      var v518 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1276 = JAM.call(v518.replace, v518, [/=/g, ""], JAM.policy.p40);
    introspect(JAM.policy.p27) {
      v79[v80] = v1276;
    }
    j$$3 = j$$3 + 1;
    v81 = j$$3 < arrayOfPatterns$$4.length;
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
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p40);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if (JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38) != -1) {
    var v104 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p40);
    fastaTitle = JAM.call(v104.toString, v104, [], JAM.policy.p39);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p40);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p40);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p40);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1197 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p38) != -1;
  if (!v1197) {
    v1197 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v1181 = v1197;
  if (!v1181) {
    v1181 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p38) != -1;
  }
  var v1164 = v1181;
  if (!v1164) {
    v1164 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v1143 = v1164;
  if (!v1143) {
    v1143 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p38) != -1;
  }
  var v1126 = v1143;
  if (!v1126) {
    v1126 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p38) != -1;
  }
  var v1105 = v1126;
  if (!v1105) {
    v1105 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p38) != -1;
  }
  var v1051 = v1105;
  if (!v1051) {
    v1051 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p38) != -1;
  }
  var v960 = v1051;
  if (!v960) {
    v960 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p38) != -1;
  }
  var v816 = v960;
  if (!v816) {
    v816 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p38) != -1;
  }
  var v546 = v816;
  if (!v546) {
    v546 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p38) != -1;
  }
  if (v546) {
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
function openWindow(title$$5) {
  JAM.call(_openWindow, null, [title$$5, true], JAM.policy.p40);
  return;
}
function _openWindow(title$$6, isColor) {
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
  JAM.call(v117.write, v117, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"], JAM.policy.p38);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  JAM.call(_openWindowAlign, null, [title$$7, true], JAM.policy.p40);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
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
  JAM.call(v125.write, v125, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"], JAM.policy.p38);
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
    var v556 = testArray[0]
  }
  if (v556 != testString) {
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p41);
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
  var v971 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p38) == -1;
  if (!v971) {
    v971 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p38) == -1;
  }
  var v827 = v971;
  if (!v827) {
    v827 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p38) == -1;
  }
  var v561 = v827;
  if (!v561) {
    v561 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v561) {
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
  var v974 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v974) {
    v974 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v830 = v974;
  if (!v830) {
    v830 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v566 = v830;
  if (!v566) {
    v566 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v566) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v977 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v977) {
    v977 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v833 = v977;
  if (!v833) {
    v833 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v567 = v833;
  if (!v567) {
    v567 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v567) {
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
  var v980 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p38) == -1;
  if (!v980) {
    v980 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p38) == -1;
  }
  var v836 = v980;
  if (!v836) {
    v836 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p38) == -1;
  }
  var v569 = v836;
  if (!v569) {
    v569 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v569) {
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
    lineOfText = JAM.call(rightNum, null, [i$$5 + 1, lineOfText, 8, tabIn$$1], JAM.policy.p41);
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
  JAM.call(writeGroupNumDnaSetStart, null, [text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0], JAM.policy.p41);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v574 = adjustment < 0;
    if (v574) {
      v574 = adjusted >= 0;
    }
    if (v574) {
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
        aboveNum = aboveNum + JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p41), "", groupSize$$2, tabIn$$3], JAM.policy.p40);
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
      JAM.call(v167.write, v167, [JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p41), "", 8, tabIn$$3], JAM.policy.p40) + lineOfText$$1 + "\n"], JAM.policy.p38);
      if (strands$$1 == "two") {
        var v169 = outputWindow.document;
        JAM.call(v169.write, v169, [JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p41), "", 8, tabIn$$3], JAM.policy.p40) + JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + "\n"], JAM.policy.p38);
        var v171 = outputWindow.document;
        JAM.call(v171.write, v171, ["\n"], JAM.policy.p22);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v173 = outputWindow.document;
        JAM.call(v173.write, v173, [lineOfText$$1 + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p41) + "\n"], JAM.policy.p38);
        if (strands$$1 == "two") {
          var v175 = outputWindow.document;
          JAM.call(v175.write, v175, [JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p41) + "\n"], JAM.policy.p38);
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
        aboveNum$$1 = aboveNum$$1 + JAM.call(rightNum, null, [i$$7, "", groupSize$$3, tabIn$$4], JAM.policy.p40);
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
      JAM.call(v200.write, v200, [JAM.call(rightNum, null, [lineNum$$1, "", 8, tabIn$$4], JAM.policy.p40) + lineOfText$$2 + "\n"], JAM.policy.p38);
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
  var v847 = sequence$$13.length <= firstIndexToMutate;
  if (!v847) {
    v847 = lastIndexToMutate < 0;
  }
  var v591 = v847;
  if (!v591) {
    v591 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v591) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for (;v220;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * maxNum], JAM.policy.p38);
    var v593 = randNum < firstIndexToMutate;
    if (!v593) {
      v593 = randNum > lastIndexToMutate;
    }
    if (v593) {
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
        var v597 = components$$1[componentsIndex]
      }
      if (v597 != currentChar) {
        needNewChar = false;
      }
    }
    var v598 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p24);
    introspect(JAM.policy.p26) {
      var v599 = components$$1[componentsIndex]
    }
    sequence$$13 = v598 + v599 + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p41);
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
    sequence$$15 = JAM.call(sequence$$15.substring, sequence$$15, [sequence$$15.length - lookAhead, sequence$$15.length], JAM.policy.p41) + sequence$$15 + JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p24);
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
      var v608 = arrayOfItems[i$$9]
    }
    matchExp = JAM.call(v608.match, v608, [/\/.+\//], JAM.policy.p38) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v989 = arrayOfItems[i$$9]
    }
    var v853 = JAM.call(v989.match, v989, [/\)\D*\d+/], JAM.policy.p38);
    var v609 = JAM.call(v853.toString, v853, [], JAM.policy.p39);
    cutDistance = JAM.call(parseFloat, null, [JAM.call(v609.replace, v609, [/\)\D*/, ""], JAM.policy.p40)], JAM.policy.p38);
    var v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    for (;v244;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v610 = matchPosition >= lowerLimit;
      if (v610) {
        v610 = matchPosition < upperLimit;
      }
      if (v610) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
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
    var v250 = outputWindow.document;
    var v1133 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p26) {
      var v1188 = arrayOfItems[i$$9]
    }
    var v1171 = JAM.call(v1188.match, v1188, [/\([^\(]+\)/], JAM.policy.p38);
    var v1151 = JAM.call(v1171.toString, v1171, [], JAM.policy.p39);
    JAM.call(v250.write, v250, [v1133 + JAM.call(v1151.replace, v1151, [/\(|\)/g, ""], JAM.policy.p40) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p38);
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
      var v619 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = JAM.call(v619.match, v619, [/\/[^\/]+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p38) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p38).length;
    }
    var percentage = 0;
    var v857 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v1072 = arrayOfItems$$1[i$$10]
    }
    if (v857 - JAM.call(parseFloat, null, [JAM.call(v1072.match, v1072, [/\d+/], JAM.policy.p38)], JAM.policy.p38) > 0) {
      var v260 = 100 * tempNumber;
      var v622 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v993 = arrayOfItems$$1[i$$10]
      }
      percentage = v260 / (v622 - JAM.call(parseFloat, null, [JAM.call(v993.match, v993, [/\d+/], JAM.policy.p38)], JAM.policy.p38));
    }
    var v263 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v1189 = arrayOfItems$$1[i$$10]
    }
    var v1172 = JAM.call(v1189.match, v1189, [/\([^\(]+\)\b/], JAM.policy.p38);
    var v1152 = JAM.call(v1172.toString, v1172, [], JAM.policy.p39);
    JAM.call(v263.write, v263, ["<tr><td>" + JAM.call(v1152.replace, v1152, [/\(|\)/g, ""], JAM.policy.p40) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p25) + "</td></tr>\n"], JAM.policy.p38);
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
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p41);
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
function multiRevTrans(theDocument) {
  var newProtein = "";
  var maxInput$$3 = 2E4;
  var codonTable$$1;
  var alignArray$$1 = JAM.new(Array, [], JAM.policy.p39);
  var titleArray = JAM.new(Array, [], JAM.policy.p39);
  var sequenceArray$$1 = JAM.new(Array, [], JAM.policy.p39);
  if (JAM.call(testScript, null, [], JAM.policy.p39) == false) {
    return false;
  }
  var v1153 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1136 = v1153[0]
  }
  var v1115 = v1136.elements;
  introspect(JAM.policy.p26) {
    var v1074 = v1115[0]
  }
  var v862 = JAM.call(checkFormElement, null, [v1074], JAM.policy.p38) == false;
  if (!v862) {
    var v1173 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1154 = v1173[0]
    }
    var v1137 = v1154.elements;
    introspect(JAM.policy.p26) {
      var v1116 = v1137[0]
    }
    v862 = JAM.call(checkTextLength, null, [v1116.value, maxInput$$3], JAM.policy.p41) == false;
  }
  var v631 = v862;
  if (!v631) {
    var v1155 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1138 = v1155[0]
    }
    var v1117 = v1138.elements;
    introspect(JAM.policy.p26) {
      var v1076 = v1117[4]
    }
    v631 = JAM.call(checkCodonTable, null, [v1076.value], JAM.policy.p38) == false;
  }
  if (v631) {
    return false;
  }
  var v1077 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v999 = v1077[0]
  }
  var v865 = v999.elements;
  introspect(JAM.policy.p26) {
    var v632 = v865[0]
  }
  theAlignment = "X" + v632.value;
  alignArray$$1 = JAM.call(theAlignment.split, theAlignment, [/[>%#]/], JAM.policy.p38);
  if (JAM.call(earlyCheckAlign, null, [alignArray$$1], JAM.policy.p38) == false) {
    return false;
  }
  var i$$11 = 1;
  var v294 = i$$11 < alignArray$$1.length;
  for (;v294;) {
    var v280 = titleArray;
    var v281 = i$$11 - 1;
    introspect(JAM.policy.p26) {
      var v635 = alignArray$$1[i$$11]
    }
    var v1277 = JAM.call(v635.match, v635, [/[^\f\n\r]+[\f\n\r]/], JAM.policy.p38);
    introspect(JAM.policy.p27) {
      v280[v281] = v1277;
    }
    var v282 = titleArray;
    var v283 = i$$11 - 1;
    var v1078 = i$$11 - 1;
    introspect(JAM.policy.p26) {
      var v1000 = titleArray[v1078]
    }
    var v636 = JAM.call(filterFastaTitle, null, [JAM.call(v1000.toString, v1000, [], JAM.policy.p39)], JAM.policy.p38);
    var v1278 = JAM.call(v636.replace, v636, [/[\f\n\r]/g, ""], JAM.policy.p40);
    introspect(JAM.policy.p27) {
      v282[v283] = v1278;
    }
    var v284 = titleArray;
    var v285 = i$$11 - 1;
    var v867 = i$$11 - 1;
    introspect(JAM.policy.p26) {
      var v637 = titleArray[v867]
    }
    var v1279 = JAM.call(v637.substring, v637, [0, 20], JAM.policy.p24);
    introspect(JAM.policy.p27) {
      v284[v285] = v1279;
    }
    if (i$$11 == 1) {
      var v638 = i$$11 - 1;
      introspect(JAM.policy.p26) {
        var v286 = titleArray[v638]
      }
      longestTitle = v286.length;
    } else {
      var v1001 = i$$11 - 1;
      introspect(JAM.policy.p26) {
        var v868 = titleArray[v1001]
      }
      if (v868.length > longestTitle) {
        var v640 = i$$11 - 1;
        introspect(JAM.policy.p26) {
          var v287 = titleArray[v640]
        }
        longestTitle = v287.length;
      }
    }
    var v290 = sequenceArray$$1;
    var v291 = i$$11 - 1;
    introspect(JAM.policy.p26) {
      var v641 = alignArray$$1[i$$11]
    }
    var v1280 = JAM.call(v641.replace, v641, [/[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p40);
    introspect(JAM.policy.p27) {
      v290[v291] = v1280;
    }
    var v292 = sequenceArray$$1;
    var v293 = i$$11 - 1;
    var v869 = i$$11 - 1;
    introspect(JAM.policy.p26) {
      var v642 = sequenceArray$$1[v869]
    }
    var v1281 = JAM.call(filterAlignSeq, null, [v642], JAM.policy.p38);
    introspect(JAM.policy.p27) {
      v292[v293] = v1281;
    }
    i$$11 = i$$11 + 1;
    v294 = i$$11 < alignArray$$1.length;
  }
  var v1079 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1002 = v1079[0]
  }
  var v870 = v1002.elements;
  introspect(JAM.policy.p26) {
    var v644 = v870[4]
  }
  codonTable$$1 = JAM.call(makeCodonTable, null, [v644.value], JAM.policy.p38);
  if (codonTable$$1 == false) {
    return false;
  }
  JAM.call(openWindow, null, ["Multi Rev Trans"], JAM.policy.p22);
  i$$11 = 0;
  var v301 = i$$11 < titleArray.length;
  for (;v301;) {
    var v297 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v646 = titleArray[i$$11]
    }
    introspect(JAM.policy.p26) {
      var v647 = sequenceArray$$1[i$$11]
    }
    JAM.call(v297.write, v297, [JAM.call(getInfoFromTitleAndSequence, null, [v646, v647], JAM.policy.p41)], JAM.policy.p38);
    if (i$$11 < titleArray.length - 1) {
      var v299 = outputWindow.document;
      JAM.call(v299.write, v299, ['<div class="info">Combined with:</div>\n'], JAM.policy.p22);
    }
    i$$11 = i$$11 + 1;
    v301 = i$$11 < titleArray.length;
  }
  JAM.call(openPre, null, [], JAM.policy.p39);
  JAM.call(writeConsensusSeq, null, [sequenceArray$$1, codonTable$$1], JAM.policy.p41);
  var v302 = outputWindow.document;
  JAM.call(v302.write, v302, ["\n"], JAM.policy.p22);
  JAM.call(writeMultiRevTrans, null, [sequenceArray$$1, codonTable$$1], JAM.policy.p41);
  JAM.call(closePre, null, [], JAM.policy.p39);
  JAM.call(closeWindow, null, [], JAM.policy.p39);
  return true;
}
function writeConsensusSeq(sequenceArray$$2, codonTable$$2) {
  var consensusSeq = JAM.new(Array, [], JAM.policy.p39);
  var aminoAcid;
  var firstG;
  var firstA;
  var firstT;
  var firstC;
  var secondG;
  var secondA;
  var secondT;
  var secondC;
  var thirdG;
  var thirdA;
  var thirdT;
  var thirdC;
  var i$$12 = 0;
  introspect(JAM.policy.p26) {
    var v872 = sequenceArray$$2[0]
  }
  var v323 = i$$12 < v872.length;
  for (;v323;) {
    firstG = 0;
    firstA = 0;
    firstT = 0;
    firstC = 0;
    secondG = 0;
    secondA = 0;
    secondT = 0;
    secondC = 0;
    thirdG = 0;
    thirdA = 0;
    thirdT = 0;
    thirdC = 0;
    var j$$10 = 0;
    var v319 = j$$10 < sequenceArray$$2.length;
    for (;v319;) {
      introspect(JAM.policy.p26) {
        var v1003 = sequenceArray$$2[j$$10]
      }
      var v652 = JAM.call(v1003.charAt, v1003, [i$$12], JAM.policy.p38) == "-";
      if (!v652) {
        introspect(JAM.policy.p26) {
          var v1004 = sequenceArray$$2[j$$10]
        }
        v652 = JAM.call(v1004.charAt, v1004, [i$$12], JAM.policy.p38) == ".";
      }
      if (v652) {
        firstG = firstG + .25;
        firstA = firstA + .25;
        firstT = firstT + .25;
        firstC = firstC + .25;
        secondG = secondG + .25;
        secondA = secondA + .25;
        secondT = secondT + .25;
        secondC = secondC + .25;
        thirdG = thirdG + .25;
        thirdA = thirdA + .25;
        thirdT = thirdT + .25;
        thirdC = thirdC + .25;
      } else {
        try {
          var v303 = codonTable$$2;
          introspect(JAM.policy.p26) {
            var v1005 = sequenceArray$$2[j$$10]
          }
          var v876 = JAM.call(v1005.charAt, v1005, [i$$12], JAM.policy.p38);
          var v653 = JAM.call(v876.toString, v876, [], JAM.policy.p39);
          var v304 = JAM.call(v653.toLowerCase, v653, [], JAM.policy.p39);
          introspect(JAM.policy.p26) {
            aminoAcid = v303[v304];
          }
        } catch (e$$5) {
          introspect(JAM.policy.p26) {
            var v877 = sequenceArray$$2[j$$10]
          }
          JAM.call(alert, null, ["A codon table entry wasn't found for " + JAM.call(v877.charAt, v877, [i$$12], JAM.policy.p38)], JAM.policy.p38);
          return false;
        }
        var v655 = aminoAcid.baseFreqPosOne;
        introspect(JAM.policy.p26) {
          var v306 = v655[0]
        }
        firstG = firstG + v306;
        var v656 = aminoAcid.baseFreqPosOne;
        introspect(JAM.policy.p26) {
          var v307 = v656[1]
        }
        firstA = firstA + v307;
        var v657 = aminoAcid.baseFreqPosOne;
        introspect(JAM.policy.p26) {
          var v308 = v657[2]
        }
        firstT = firstT + v308;
        var v658 = aminoAcid.baseFreqPosOne;
        introspect(JAM.policy.p26) {
          var v309 = v658[3]
        }
        firstC = firstC + v309;
        var v659 = aminoAcid.baseFreqPosTwo;
        introspect(JAM.policy.p26) {
          var v310 = v659[0]
        }
        secondG = secondG + v310;
        var v660 = aminoAcid.baseFreqPosTwo;
        introspect(JAM.policy.p26) {
          var v311 = v660[1]
        }
        secondA = secondA + v311;
        var v661 = aminoAcid.baseFreqPosTwo;
        introspect(JAM.policy.p26) {
          var v312 = v661[2]
        }
        secondT = secondT + v312;
        var v662 = aminoAcid.baseFreqPosTwo;
        introspect(JAM.policy.p26) {
          var v313 = v662[3]
        }
        secondC = secondC + v313;
        var v663 = aminoAcid.baseFreqPosThree;
        introspect(JAM.policy.p26) {
          var v314 = v663[0]
        }
        thirdG = thirdG + v314;
        var v664 = aminoAcid.baseFreqPosThree;
        introspect(JAM.policy.p26) {
          var v315 = v664[1]
        }
        thirdA = thirdA + v315;
        var v665 = aminoAcid.baseFreqPosThree;
        introspect(JAM.policy.p26) {
          var v316 = v665[2]
        }
        thirdT = thirdT + v316;
        var v666 = aminoAcid.baseFreqPosThree;
        introspect(JAM.policy.p26) {
          var v317 = v666[3]
        }
        thirdC = thirdC + v317;
      }
      j$$10 = j$$10 + 1;
      v319 = j$$10 < sequenceArray$$2.length;
    }
    JAM.call(consensusSeq.push, consensusSeq, [JAM.call(_getConsensusBase, null, [[firstG, firstA, firstT, firstC]], JAM.policy.p38)], JAM.policy.p38);
    JAM.call(consensusSeq.push, consensusSeq, [JAM.call(_getConsensusBase, null, [[secondG, secondA, secondT, secondC]], JAM.policy.p38)], JAM.policy.p38);
    JAM.call(consensusSeq.push, consensusSeq, [JAM.call(_getConsensusBase, null, [[thirdG, thirdA, thirdT, thirdC]], JAM.policy.p38)], JAM.policy.p38);
    i$$12 = i$$12 + 1;
    introspect(JAM.policy.p26) {
      var v878 = sequenceArray$$2[0]
    }
    v323 = i$$12 < v878.length;
  }
  var v324 = outputWindow.document;
  JAM.call(v324.write, v324, ["&gt;" + "reverse translation of alignment to a " + consensusSeq.length + " base sequence of consensus codons.\n"], JAM.policy.p38);
  var v326 = outputWindow.document;
  JAM.call(v326.write, v326, [JAM.call(addReturns, null, [JAM.call(consensusSeq.join, consensusSeq, [""], JAM.policy.p22)], JAM.policy.p38)], JAM.policy.p38);
  var v328 = outputWindow.document;
  JAM.call(v328.write, v328, ["\n"], JAM.policy.p22);
  return true;
}
function writeMultiRevTrans(sequenceArray$$3, codonTable$$3) {
  var markG = "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg";
  var markA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  var markT = "TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT";
  var markC = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
  var markLength = markG.length;
  var aminoAcid$$1;
  var columnSeq;
  var firstG$$1;
  var firstA$$1;
  var firstT$$1;
  var firstC$$1;
  var secondG$$1;
  var secondA$$1;
  var secondT$$1;
  var secondC$$1;
  var thirdG$$1;
  var thirdA$$1;
  var thirdT$$1;
  var thirdC$$1;
  var i$$13 = 0;
  introspect(JAM.policy.p26) {
    var v881 = sequenceArray$$3[0]
  }
  var v373 = i$$13 < v881.length;
  for (;v373;) {
    columnSeq = "";
    firstG$$1 = 0;
    firstA$$1 = 0;
    firstT$$1 = 0;
    firstC$$1 = 0;
    secondG$$1 = 0;
    secondA$$1 = 0;
    secondT$$1 = 0;
    secondC$$1 = 0;
    thirdG$$1 = 0;
    thirdA$$1 = 0;
    thirdT$$1 = 0;
    thirdC$$1 = 0;
    var j$$11 = 0;
    var v347 = j$$11 < sequenceArray$$3.length;
    for (;v347;) {
      var v329 = columnSeq;
      introspect(JAM.policy.p26) {
        var v676 = sequenceArray$$3[j$$11]
      }
      columnSeq = v329 + JAM.call(v676.charAt, v676, [i$$13], JAM.policy.p38);
      introspect(JAM.policy.p26) {
        var v1006 = sequenceArray$$3[j$$11]
      }
      var v677 = JAM.call(v1006.charAt, v1006, [i$$13], JAM.policy.p38) == "-";
      if (!v677) {
        introspect(JAM.policy.p26) {
          var v1007 = sequenceArray$$3[j$$11]
        }
        v677 = JAM.call(v1007.charAt, v1007, [i$$13], JAM.policy.p38) == ".";
      }
      if (v677) {
        firstG$$1 = firstG$$1 + .25;
        firstA$$1 = firstA$$1 + .25;
        firstT$$1 = firstT$$1 + .25;
        firstC$$1 = firstC$$1 + .25;
        secondG$$1 = secondG$$1 + .25;
        secondA$$1 = secondA$$1 + .25;
        secondT$$1 = secondT$$1 + .25;
        secondC$$1 = secondC$$1 + .25;
        thirdG$$1 = thirdG$$1 + .25;
        thirdA$$1 = thirdA$$1 + .25;
        thirdT$$1 = thirdT$$1 + .25;
        thirdC$$1 = thirdC$$1 + .25;
      } else {
        try {
          var v331 = codonTable$$3;
          introspect(JAM.policy.p26) {
            var v1008 = sequenceArray$$3[j$$11]
          }
          var v885 = JAM.call(v1008.charAt, v1008, [i$$13], JAM.policy.p38);
          var v678 = JAM.call(v885.toString, v885, [], JAM.policy.p39);
          var v332 = JAM.call(v678.toLowerCase, v678, [], JAM.policy.p39);
          introspect(JAM.policy.p26) {
            aminoAcid$$1 = v331[v332];
          }
        } catch (e$$6) {
          introspect(JAM.policy.p26) {
            var v886 = sequenceArray$$3[j$$11]
          }
          JAM.call(alert, null, ["A codon table entry wasn't found for " + JAM.call(v886.charAt, v886, [i$$13], JAM.policy.p38)], JAM.policy.p38);
          return false;
        }
        var v680 = aminoAcid$$1.baseFreqPosOne;
        introspect(JAM.policy.p26) {
          var v334 = v680[0]
        }
        firstG$$1 = firstG$$1 + v334;
        var v681 = aminoAcid$$1.baseFreqPosOne;
        introspect(JAM.policy.p26) {
          var v335 = v681[1]
        }
        firstA$$1 = firstA$$1 + v335;
        var v682 = aminoAcid$$1.baseFreqPosOne;
        introspect(JAM.policy.p26) {
          var v336 = v682[2]
        }
        firstT$$1 = firstT$$1 + v336;
        var v683 = aminoAcid$$1.baseFreqPosOne;
        introspect(JAM.policy.p26) {
          var v337 = v683[3]
        }
        firstC$$1 = firstC$$1 + v337;
        var v684 = aminoAcid$$1.baseFreqPosTwo;
        introspect(JAM.policy.p26) {
          var v338 = v684[0]
        }
        secondG$$1 = secondG$$1 + v338;
        var v685 = aminoAcid$$1.baseFreqPosTwo;
        introspect(JAM.policy.p26) {
          var v339 = v685[1]
        }
        secondA$$1 = secondA$$1 + v339;
        var v686 = aminoAcid$$1.baseFreqPosTwo;
        introspect(JAM.policy.p26) {
          var v340 = v686[2]
        }
        secondT$$1 = secondT$$1 + v340;
        var v687 = aminoAcid$$1.baseFreqPosTwo;
        introspect(JAM.policy.p26) {
          var v341 = v687[3]
        }
        secondC$$1 = secondC$$1 + v341;
        var v688 = aminoAcid$$1.baseFreqPosThree;
        introspect(JAM.policy.p26) {
          var v342 = v688[0]
        }
        thirdG$$1 = thirdG$$1 + v342;
        var v689 = aminoAcid$$1.baseFreqPosThree;
        introspect(JAM.policy.p26) {
          var v343 = v689[1]
        }
        thirdA$$1 = thirdA$$1 + v343;
        var v690 = aminoAcid$$1.baseFreqPosThree;
        introspect(JAM.policy.p26) {
          var v344 = v690[2]
        }
        thirdT$$1 = thirdT$$1 + v344;
        var v691 = aminoAcid$$1.baseFreqPosThree;
        introspect(JAM.policy.p26) {
          var v345 = v691[3]
        }
        thirdC$$1 = thirdC$$1 + v345;
      }
      j$$11 = j$$11 + 1;
      v347 = j$$11 < sequenceArray$$3.length;
    }
    firstG$$1 = JAM.call(Math.round, Math, [markLength * firstG$$1 / sequenceArray$$3.length], JAM.policy.p38);
    firstA$$1 = JAM.call(Math.round, Math, [markLength * firstA$$1 / sequenceArray$$3.length], JAM.policy.p38);
    firstT$$1 = JAM.call(Math.round, Math, [markLength * firstT$$1 / sequenceArray$$3.length], JAM.policy.p38);
    firstC$$1 = JAM.call(Math.round, Math, [markLength * firstC$$1 / sequenceArray$$3.length], JAM.policy.p38);
    secondG$$1 = JAM.call(Math.round, Math, [markLength * secondG$$1 / sequenceArray$$3.length], JAM.policy.p38);
    secondA$$1 = JAM.call(Math.round, Math, [markLength * secondA$$1 / sequenceArray$$3.length], JAM.policy.p38);
    secondT$$1 = JAM.call(Math.round, Math, [markLength * secondT$$1 / sequenceArray$$3.length], JAM.policy.p38);
    secondC$$1 = JAM.call(Math.round, Math, [markLength * secondC$$1 / sequenceArray$$3.length], JAM.policy.p38);
    thirdG$$1 = JAM.call(Math.round, Math, [markLength * thirdG$$1 / sequenceArray$$3.length], JAM.policy.p38);
    thirdA$$1 = JAM.call(Math.round, Math, [markLength * thirdA$$1 / sequenceArray$$3.length], JAM.policy.p38);
    thirdT$$1 = JAM.call(Math.round, Math, [markLength * thirdT$$1 / sequenceArray$$3.length], JAM.policy.p38);
    thirdC$$1 = JAM.call(Math.round, Math, [markLength * thirdC$$1 / sequenceArray$$3.length], JAM.policy.p38);
    var v360 = outputWindow.document;
    JAM.call(v360.write, v360, ["<b>" + (i$$13 + 1) + "_" + columnSeq + "_" + "first</b>\n"], JAM.policy.p38);
    var v362 = outputWindow.document;
    var v1256 = "g" + JAM.call(markG.substring, markG, [0, firstG$$1], JAM.policy.p24) + " ";
    var v1263 = firstG$$1 / markLength;
    var v1221 = v1256 + JAM.call(v1263.toFixed, v1263, [2], JAM.policy.p25) + "\n" + "a" + JAM.call(markA.substring, markA, [0, firstA$$1], JAM.policy.p24) + " ";
    var v1232 = firstA$$1 / markLength;
    var v1156 = v1221 + JAM.call(v1232.toFixed, v1232, [2], JAM.policy.p25) + "\n" + "T" + JAM.call(markT.substring, markT, [0, firstT$$1], JAM.policy.p24) + " ";
    var v1175 = firstT$$1 / markLength;
    var v888 = v1156 + JAM.call(v1175.toFixed, v1175, [2], JAM.policy.p25) + "\n" + "C" + JAM.call(markC.substring, markC, [0, firstC$$1], JAM.policy.p24) + " ";
    var v1011 = firstC$$1 / markLength;
    JAM.call(v362.write, v362, [v888 + JAM.call(v1011.toFixed, v1011, [2], JAM.policy.p25) + "\n"], JAM.policy.p38);
    var v364 = outputWindow.document;
    JAM.call(v364.write, v364, ["<b>" + (i$$13 + 1) + "_" + columnSeq + "_" + "second</b>\n"], JAM.policy.p38);
    var v366 = outputWindow.document;
    var v1258 = "g" + JAM.call(markG.substring, markG, [0, secondG$$1], JAM.policy.p24) + " ";
    var v1265 = secondG$$1 / markLength;
    var v1223 = v1258 + JAM.call(v1265.toFixed, v1265, [2], JAM.policy.p25) + "\n" + "a" + JAM.call(markA.substring, markA, [0, secondA$$1], JAM.policy.p24) + " ";
    var v1234 = secondA$$1 / markLength;
    var v1158 = v1223 + JAM.call(v1234.toFixed, v1234, [2], JAM.policy.p25) + "\n" + "T" + JAM.call(markT.substring, markT, [0, secondT$$1], JAM.policy.p24) + " ";
    var v1177 = secondT$$1 / markLength;
    var v891 = v1158 + JAM.call(v1177.toFixed, v1177, [2], JAM.policy.p25) + "\n" + "C" + JAM.call(markC.substring, markC, [0, secondC$$1], JAM.policy.p24) + " ";
    var v1014 = secondC$$1 / markLength;
    JAM.call(v366.write, v366, [v891 + JAM.call(v1014.toFixed, v1014, [2], JAM.policy.p25) + "\n"], JAM.policy.p38);
    var v368 = outputWindow.document;
    JAM.call(v368.write, v368, ["<b>" + (i$$13 + 1) + "_" + columnSeq + "_" + "third</b>\n"], JAM.policy.p38);
    var v370 = outputWindow.document;
    var v1260 = "g" + JAM.call(markG.substring, markG, [0, thirdG$$1], JAM.policy.p24) + " ";
    var v1267 = thirdG$$1 / markLength;
    var v1225 = v1260 + JAM.call(v1267.toFixed, v1267, [2], JAM.policy.p25) + "\n" + "a" + JAM.call(markA.substring, markA, [0, thirdA$$1], JAM.policy.p24) + " ";
    var v1236 = thirdA$$1 / markLength;
    var v1160 = v1225 + JAM.call(v1236.toFixed, v1236, [2], JAM.policy.p25) + "\n" + "T" + JAM.call(markT.substring, markT, [0, thirdT$$1], JAM.policy.p24) + " ";
    var v1179 = thirdT$$1 / markLength;
    var v894 = v1160 + JAM.call(v1179.toFixed, v1179, [2], JAM.policy.p25) + "\n" + "C" + JAM.call(markC.substring, markC, [0, thirdC$$1], JAM.policy.p24) + " ";
    var v1017 = thirdC$$1 / markLength;
    JAM.call(v370.write, v370, [v894 + JAM.call(v1017.toFixed, v1017, [2], JAM.policy.p25) + "\n"], JAM.policy.p38);
    var v372 = outputWindow.document;
    JAM.call(v372.write, v372, ["\n"], JAM.policy.p22);
    i$$13 = i$$13 + 1;
    introspect(JAM.policy.p26) {
      var v896 = sequenceArray$$3[0]
    }
    v373 = i$$13 < v896.length;
  }
  return true;
}
function makeCodonTable(gcgTable) {
  gcgTable = JAM.call(gcgTable.replace, gcgTable, [/[^\.]*\.\./, ""], JAM.policy.p40);
  var tableArray = JAM.call(gcgTable.split, gcgTable, [/[\f\n\r]/], JAM.policy.p38);
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$4 = JAM.new(CodonTable, [], JAM.policy.p39);
  var i$$14 = 0;
  var v378 = i$$14 < tableArray.length;
  for (;v378;) {
    introspect(JAM.policy.p26) {
      var v725 = tableArray[i$$14]
    }
    var v377 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [v725], JAM.policy.p38);
    for (;v377;) {
      try {
        var v726 = codonTable$$4;
        introspect(JAM.policy.p26) {
          var v897 = matchArray$$2[1]
        }
        var v727 = JAM.call(v897.toLowerCase, v897, [], JAM.policy.p39);
        introspect(JAM.policy.p26) {
          var v374 = v726[v727]
        }
        introspect(JAM.policy.p26) {
          var v728 = matchArray$$2[2]
        }
        introspect(JAM.policy.p26) {
          var v898 = matchArray$$2[3]
        }
        var v729 = JAM.call(parseFloat, null, [v898], JAM.policy.p38);
        introspect(JAM.policy.p26) {
          var v899 = matchArray$$2[4]
        }
        var v730 = JAM.call(parseFloat, null, [v899], JAM.policy.p38);
        introspect(JAM.policy.p26) {
          var v900 = matchArray$$2[5]
        }
        JAM.call(v374.addCodon, v374, [JAM.new(Codon, [v728, v729, v730, JAM.call(parseFloat, null, [v900], JAM.policy.p38)], JAM.policy.p41)], JAM.policy.p38);
      } catch (e$$7) {
        introspect(JAM.policy.p26) {
          var v1196 = matchArray$$2[1]
        }
        var v1162 = "There is a problem with a line of the codon table: " + v1196 + " ";
        introspect(JAM.policy.p26) {
          var v1163 = matchArray$$2[2]
        }
        var v1124 = v1162 + v1163 + " ";
        introspect(JAM.policy.p26) {
          var v1125 = matchArray$$2[3]
        }
        var v1018 = v1124 + v1125 + " ";
        introspect(JAM.policy.p26) {
          var v1019 = matchArray$$2[4]
        }
        var v732 = v1018 + v1019 + " ";
        introspect(JAM.policy.p26) {
          var v733 = matchArray$$2[4]
        }
        JAM.call(alert, null, [v732 + v733], JAM.policy.p38);
        return false;
      }
      introspect(JAM.policy.p26) {
        var v734 = tableArray[i$$14]
      }
      v377 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [v734], JAM.policy.p38);
    }
    i$$14 = i$$14 + 1;
    v378 = i$$14 < tableArray.length;
  }
  var v379 = codonTable$$4.a;
  JAM.call(v379.determineBaseFreq, v379, [], JAM.policy.p39);
  var v380 = codonTable$$4.c;
  JAM.call(v380.determineBaseFreq, v380, [], JAM.policy.p39);
  var v381 = codonTable$$4.d;
  JAM.call(v381.determineBaseFreq, v381, [], JAM.policy.p39);
  var v382 = codonTable$$4.e;
  JAM.call(v382.determineBaseFreq, v382, [], JAM.policy.p39);
  var v383 = codonTable$$4.f;
  JAM.call(v383.determineBaseFreq, v383, [], JAM.policy.p39);
  var v384 = codonTable$$4.g;
  JAM.call(v384.determineBaseFreq, v384, [], JAM.policy.p39);
  var v385 = codonTable$$4.h;
  JAM.call(v385.determineBaseFreq, v385, [], JAM.policy.p39);
  var v386 = codonTable$$4.i;
  JAM.call(v386.determineBaseFreq, v386, [], JAM.policy.p39);
  var v387 = codonTable$$4.k;
  JAM.call(v387.determineBaseFreq, v387, [], JAM.policy.p39);
  var v388 = codonTable$$4.l;
  JAM.call(v388.determineBaseFreq, v388, [], JAM.policy.p39);
  var v389 = codonTable$$4.m;
  JAM.call(v389.determineBaseFreq, v389, [], JAM.policy.p39);
  var v390 = codonTable$$4.n;
  JAM.call(v390.determineBaseFreq, v390, [], JAM.policy.p39);
  var v391 = codonTable$$4.p;
  JAM.call(v391.determineBaseFreq, v391, [], JAM.policy.p39);
  var v392 = codonTable$$4.q;
  JAM.call(v392.determineBaseFreq, v392, [], JAM.policy.p39);
  var v393 = codonTable$$4.r;
  JAM.call(v393.determineBaseFreq, v393, [], JAM.policy.p39);
  var v394 = codonTable$$4.s;
  JAM.call(v394.determineBaseFreq, v394, [], JAM.policy.p39);
  var v395 = codonTable$$4.t;
  JAM.call(v395.determineBaseFreq, v395, [], JAM.policy.p39);
  var v396 = codonTable$$4.v;
  JAM.call(v396.determineBaseFreq, v396, [], JAM.policy.p39);
  var v397 = codonTable$$4.w;
  JAM.call(v397.determineBaseFreq, v397, [], JAM.policy.p39);
  var v398 = codonTable$$4.y;
  JAM.call(v398.determineBaseFreq, v398, [], JAM.policy.p39);
  var v399 = codonTable$$4.z;
  JAM.call(v399.determineBaseFreq, v399, [], JAM.policy.p39);
  return codonTable$$4;
}
function CodonTable() {
  var v1282 = JAM.new(AminoAcid, [], JAM.policy.p39);
  this.a = v1282;
  var v1283 = JAM.new(AminoAcid, [], JAM.policy.p39);
  this.c = v1283;
  var v1284 = JAM.new(AminoAcid, [], JAM.policy.p39);
  this.d = v1284;
  var v1285 = JAM.new(AminoAcid, [], JAM.policy.p39);
  this.e = v1285;
  var v1286 = JAM.new(AminoAcid, [], JAM.policy.p39);
  this.f = v1286;
  var v1287 = JAM.new(AminoAcid, [], JAM.policy.p39);
  this.g = v1287;
  var v1288 = JAM.new(AminoAcid, [], JAM.policy.p39);
  this.h = v1288;
  var v1289 = JAM.new(AminoAcid, [], JAM.policy.p39);
  this.i = v1289;
  var v1290 = JAM.new(AminoAcid, [], JAM.policy.p39);
  this.k = v1290;
  var v1291 = JAM.new(AminoAcid, [], JAM.policy.p39);
  this.l = v1291;
  var v1292 = JAM.new(AminoAcid, [], JAM.policy.p39);
  this.m = v1292;
  var v1293 = JAM.new(AminoAcid, [], JAM.policy.p39);
  this.n = v1293;
  var v1294 = JAM.new(AminoAcid, [], JAM.policy.p39);
  this.p = v1294;
  var v1295 = JAM.new(AminoAcid, [], JAM.policy.p39);
  this.q = v1295;
  var v1296 = JAM.new(AminoAcid, [], JAM.policy.p39);
  this.r = v1296;
  var v1297 = JAM.new(AminoAcid, [], JAM.policy.p39);
  this.s = v1297;
  var v1298 = JAM.new(AminoAcid, [], JAM.policy.p39);
  this.t = v1298;
  var v1299 = JAM.new(AminoAcid, [], JAM.policy.p39);
  this.v = v1299;
  var v1300 = JAM.new(AminoAcid, [], JAM.policy.p39);
  this.w = v1300;
  var v1301 = JAM.new(AminoAcid, [], JAM.policy.p39);
  this.y = v1301;
  var v1302 = JAM.new(AminoAcid, [], JAM.policy.p39);
  this.z = v1302;
  this.ala = this.a;
  this.cys = this.c;
  this.asp = this.d;
  this.glu = this.e;
  this.phe = this.f;
  this.gly = this.g;
  this.his = this.h;
  this.ile = this.i;
  this.lys = this.k;
  this.leu = this.l;
  this.met = this.m;
  this.asn = this.n;
  this.pro = this.p;
  this.gln = this.q;
  this.arg = this.r;
  this.ser = this.s;
  this.thr = this.t;
  this.val = this.v;
  this.trp = this.w;
  this.tyr = this.y;
  this.end = this.z;
  return;
}
function addCodon(codon$$1) {
  var v400 = this.codons;
  JAM.call(v400.push, v400, [codon$$1], JAM.policy.p38);
  return;
}
function determineBaseFreq() {
  JAM.call(this.fixFraction, this, [], JAM.policy.p39);
  var i$$15 = 0;
  var v425 = i$$15 < this.codons.length;
  for (;v425;) {
    var v1090 = this.codons;
    introspect(JAM.policy.p26) {
      var v1020 = v1090[i$$15]
    }
    var v903 = v1020.sequence;
    if (JAM.call(v903.charAt, v903, [0], JAM.policy.p25) == "g") {
      var v401 = this.baseFreqPosOne;
      var v904 = this.baseFreqPosOne;
      introspect(JAM.policy.p26) {
        var v738 = v904[0]
      }
      var v1021 = this.codons;
      introspect(JAM.policy.p26) {
        var v905 = v1021[i$$15]
      }
      var v739 = v905.fraction;
      introspect(JAM.policy.p27) {
        v401[0] = v738 + v739;
      }
    } else {
      var v1091 = this.codons;
      introspect(JAM.policy.p26) {
        var v1022 = v1091[i$$15]
      }
      var v906 = v1022.sequence;
      if (JAM.call(v906.charAt, v906, [0], JAM.policy.p25) == "a") {
        var v402 = this.baseFreqPosOne;
        var v907 = this.baseFreqPosOne;
        introspect(JAM.policy.p26) {
          var v741 = v907[1]
        }
        var v1023 = this.codons;
        introspect(JAM.policy.p26) {
          var v908 = v1023[i$$15]
        }
        var v742 = v908.fraction;
        introspect(JAM.policy.p27) {
          v402[1] = v741 + v742;
        }
      } else {
        var v1092 = this.codons;
        introspect(JAM.policy.p26) {
          var v1024 = v1092[i$$15]
        }
        var v909 = v1024.sequence;
        if (JAM.call(v909.charAt, v909, [0], JAM.policy.p25) == "t") {
          var v403 = this.baseFreqPosOne;
          var v910 = this.baseFreqPosOne;
          introspect(JAM.policy.p26) {
            var v744 = v910[2]
          }
          var v1025 = this.codons;
          introspect(JAM.policy.p26) {
            var v911 = v1025[i$$15]
          }
          var v745 = v911.fraction;
          introspect(JAM.policy.p27) {
            v403[2] = v744 + v745;
          }
        } else {
          var v1093 = this.codons;
          introspect(JAM.policy.p26) {
            var v1026 = v1093[i$$15]
          }
          var v912 = v1026.sequence;
          if (JAM.call(v912.charAt, v912, [0], JAM.policy.p25) == "c") {
            var v404 = this.baseFreqPosOne;
            var v913 = this.baseFreqPosOne;
            introspect(JAM.policy.p26) {
              var v747 = v913[3]
            }
            var v1027 = this.codons;
            introspect(JAM.policy.p26) {
              var v914 = v1027[i$$15]
            }
            var v748 = v914.fraction;
            introspect(JAM.policy.p27) {
              v404[3] = v747 + v748;
            }
          }
        }
      }
    }
    var v1094 = this.codons;
    introspect(JAM.policy.p26) {
      var v1028 = v1094[i$$15]
    }
    var v915 = v1028.sequence;
    if (JAM.call(v915.charAt, v915, [1], JAM.policy.p25) == "g") {
      var v409 = this.baseFreqPosTwo;
      var v916 = this.baseFreqPosTwo;
      introspect(JAM.policy.p26) {
        var v750 = v916[0]
      }
      var v1029 = this.codons;
      introspect(JAM.policy.p26) {
        var v917 = v1029[i$$15]
      }
      var v751 = v917.fraction;
      introspect(JAM.policy.p27) {
        v409[0] = v750 + v751;
      }
    } else {
      var v1095 = this.codons;
      introspect(JAM.policy.p26) {
        var v1030 = v1095[i$$15]
      }
      var v918 = v1030.sequence;
      if (JAM.call(v918.charAt, v918, [1], JAM.policy.p25) == "a") {
        var v410 = this.baseFreqPosTwo;
        var v919 = this.baseFreqPosTwo;
        introspect(JAM.policy.p26) {
          var v753 = v919[1]
        }
        var v1031 = this.codons;
        introspect(JAM.policy.p26) {
          var v920 = v1031[i$$15]
        }
        var v754 = v920.fraction;
        introspect(JAM.policy.p27) {
          v410[1] = v753 + v754;
        }
      } else {
        var v1096 = this.codons;
        introspect(JAM.policy.p26) {
          var v1032 = v1096[i$$15]
        }
        var v921 = v1032.sequence;
        if (JAM.call(v921.charAt, v921, [1], JAM.policy.p25) == "t") {
          var v411 = this.baseFreqPosTwo;
          var v922 = this.baseFreqPosTwo;
          introspect(JAM.policy.p26) {
            var v756 = v922[2]
          }
          var v1033 = this.codons;
          introspect(JAM.policy.p26) {
            var v923 = v1033[i$$15]
          }
          var v757 = v923.fraction;
          introspect(JAM.policy.p27) {
            v411[2] = v756 + v757;
          }
        } else {
          var v1097 = this.codons;
          introspect(JAM.policy.p26) {
            var v1034 = v1097[i$$15]
          }
          var v924 = v1034.sequence;
          if (JAM.call(v924.charAt, v924, [1], JAM.policy.p25) == "c") {
            var v412 = this.baseFreqPosTwo;
            var v925 = this.baseFreqPosTwo;
            introspect(JAM.policy.p26) {
              var v759 = v925[3]
            }
            var v1035 = this.codons;
            introspect(JAM.policy.p26) {
              var v926 = v1035[i$$15]
            }
            var v760 = v926.fraction;
            introspect(JAM.policy.p27) {
              v412[3] = v759 + v760;
            }
          }
        }
      }
    }
    var v1098 = this.codons;
    introspect(JAM.policy.p26) {
      var v1036 = v1098[i$$15]
    }
    var v927 = v1036.sequence;
    if (JAM.call(v927.charAt, v927, [2], JAM.policy.p25) == "g") {
      var v417 = this.baseFreqPosThree;
      var v928 = this.baseFreqPosThree;
      introspect(JAM.policy.p26) {
        var v762 = v928[0]
      }
      var v1037 = this.codons;
      introspect(JAM.policy.p26) {
        var v929 = v1037[i$$15]
      }
      var v763 = v929.fraction;
      introspect(JAM.policy.p27) {
        v417[0] = v762 + v763;
      }
    } else {
      var v1099 = this.codons;
      introspect(JAM.policy.p26) {
        var v1038 = v1099[i$$15]
      }
      var v930 = v1038.sequence;
      if (JAM.call(v930.charAt, v930, [2], JAM.policy.p25) == "a") {
        var v418 = this.baseFreqPosThree;
        var v931 = this.baseFreqPosThree;
        introspect(JAM.policy.p26) {
          var v765 = v931[1]
        }
        var v1039 = this.codons;
        introspect(JAM.policy.p26) {
          var v932 = v1039[i$$15]
        }
        var v766 = v932.fraction;
        introspect(JAM.policy.p27) {
          v418[1] = v765 + v766;
        }
      } else {
        var v1100 = this.codons;
        introspect(JAM.policy.p26) {
          var v1040 = v1100[i$$15]
        }
        var v933 = v1040.sequence;
        if (JAM.call(v933.charAt, v933, [2], JAM.policy.p25) == "t") {
          var v419 = this.baseFreqPosThree;
          var v934 = this.baseFreqPosThree;
          introspect(JAM.policy.p26) {
            var v768 = v934[2]
          }
          var v1041 = this.codons;
          introspect(JAM.policy.p26) {
            var v935 = v1041[i$$15]
          }
          var v769 = v935.fraction;
          introspect(JAM.policy.p27) {
            v419[2] = v768 + v769;
          }
        } else {
          var v1101 = this.codons;
          introspect(JAM.policy.p26) {
            var v1042 = v1101[i$$15]
          }
          var v936 = v1042.sequence;
          if (JAM.call(v936.charAt, v936, [2], JAM.policy.p25) == "c") {
            var v420 = this.baseFreqPosThree;
            var v937 = this.baseFreqPosThree;
            introspect(JAM.policy.p26) {
              var v771 = v937[3]
            }
            var v1043 = this.codons;
            introspect(JAM.policy.p26) {
              var v938 = v1043[i$$15]
            }
            var v772 = v938.fraction;
            introspect(JAM.policy.p27) {
              v420[3] = v771 + v772;
            }
          }
        }
      }
    }
    i$$15 = i$$15 + 1;
    v425 = i$$15 < this.codons.length;
  }
  return true;
}
function fixFraction() {
  var perThouTotal = 0;
  var i$$16 = 0;
  var v427 = i$$16 < this.codons.length;
  for (;v427;) {
    var v941 = this.codons;
    introspect(JAM.policy.p26) {
      var v775 = v941[i$$16]
    }
    perThouTotal = perThouTotal + v775.perThou;
    i$$16 = i$$16 + 1;
    v427 = i$$16 < this.codons.length;
  }
  if (perThouTotal == 0) {
    return false;
  }
  i$$16 = 0;
  var v430 = i$$16 < this.codons.length;
  for (;v430;) {
    var v778 = this.codons;
    introspect(JAM.policy.p26) {
      var v429 = v778[i$$16]
    }
    var v1044 = this.codons;
    introspect(JAM.policy.p26) {
      var v944 = v1044[i$$16]
    }
    v429.fraction = v944.perThou / perThouTotal;
    i$$16 = i$$16 + 1;
    v430 = i$$16 < this.codons.length;
  }
  return true;
}
function AminoAcid() {
  var v1303 = JAM.new(Array, [], JAM.policy.p39);
  this.codons = v1303;
  var v1304 = JAM.new(Array, [0, 0, 0, 0], JAM.policy.p24);
  this.baseFreqPosOne = v1304;
  var v1305 = JAM.new(Array, [0, 0, 0, 0], JAM.policy.p24);
  this.baseFreqPosTwo = v1305;
  var v1306 = JAM.new(Array, [0, 0, 0, 0], JAM.policy.p24);
  this.baseFreqPosThree = v1306;
  return;
}
function Codon(sequence$$18, number, perThou, fraction) {
  var v1307 = JAM.call(sequence$$18.toLowerCase, sequence$$18, [], JAM.policy.p39);
  this.sequence = v1307;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return;
}
function _getConsensusBase(baseFreq) {
  var g;
  var a;
  var t;
  var c;
  introspect(JAM.policy.p26) {
    var v781 = baseFreq[0]
  }
  if (v781 > 0) {
    g = true;
  }
  introspect(JAM.policy.p26) {
    var v782 = baseFreq[1]
  }
  if (v782 > 0) {
    a = true;
  }
  introspect(JAM.policy.p26) {
    var v783 = baseFreq[2]
  }
  if (v783 > 0) {
    t = true;
  }
  introspect(JAM.policy.p26) {
    var v784 = baseFreq[3]
  }
  if (v784 > 0) {
    c = true;
  }
  var v1045 = !g;
  if (v1045) {
    v1045 = !a;
  }
  var v946 = v1045;
  if (v946) {
    v946 = !c;
  }
  var v785 = v946;
  if (v785) {
    v785 = !t;
  }
  if (v785) {
    return "n";
  }
  var v947 = g && a;
  if (v947) {
    v947 = c;
  }
  var v786 = v947;
  if (v786) {
    v786 = t;
  }
  if (v786) {
    return "n";
  } else {
    var v787 = a && c;
    if (v787) {
      v787 = t;
    }
    if (v787) {
      return "h";
    } else {
      var v788 = a && g;
      if (v788) {
        v788 = t;
      }
      if (v788) {
        return "d";
      } else {
        var v789 = c && g;
        if (v789) {
          v789 = t;
        }
        if (v789) {
          return "b";
        } else {
          if (a && c) {
            return "m";
          } else {
            if (g && t) {
              return "k";
            } else {
              if (a && t) {
                return "w";
              } else {
                if (g && c) {
                  return "s";
                } else {
                  if (c && t) {
                    return "y";
                  } else {
                    if (a && g) {
                      return "r";
                    } else {
                      if (t) {
                        return "t";
                      } else {
                        if (g) {
                          return "g";
                        } else {
                          if (c) {
                            return "c";
                          } else {
                            if (a) {
                              return "a";
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return "?";
}
JAM.new(AminoAcid, [], JAM.policy.p39);
AminoAcid.prototype.addCodon = addCodon;
AminoAcid.prototype.determineBaseFreq = determineBaseFreq;
AminoAcid.prototype.fixFraction = fixFraction;
JAM.set(document, "onload", v2);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p22), "onclick", v3);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p22), "onclick", v4)

