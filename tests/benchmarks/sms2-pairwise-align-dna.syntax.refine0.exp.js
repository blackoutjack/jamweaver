// sms2-pairwise-align-dna.js
function v4() {
  var v1228 = document.forms;
  introspect(JAM.policy.p26) {
    var v972 = v1228[0]
  }
  var v561 = v972.elements;
  introspect(JAM.policy.p26) {
    var v5 = v561[0]
  }
  v5.value = " ";
  var v1229 = document.forms;
  introspect(JAM.policy.p26) {
    var v973 = v1229[0]
  }
  var v562 = v973.elements;
  introspect(JAM.policy.p26) {
    var v6 = v562[4]
  }
  v6.value = " ";
  return;
}
function v3() {
  try {
    JAM.call(pairwiseAlignDna, null, [document], JAM.policy.p38);
  } catch (e$$5) {
    JAM.call(alert, null, ["The following error was encountered: " + e$$5], JAM.policy.p38);
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
      var v1378 = arrayOfTitles[i$$1]
    }
    var v974 = JAM.call(v1378.search, v1378, [/\S/], JAM.policy.p38) == -1;
    if (!v974) {
      introspect(JAM.policy.p26) {
        var v1379 = arrayOfSequences[i$$1]
      }
      v974 = JAM.call(v1379.search, v1379, [/\S/], JAM.policy.p38) == -1;
    }
    var v566 = v974;
    if (!v566) {
      introspect(JAM.policy.p26) {
        var v1233 = arrayOfSequences[i$$1]
      }
      v566 = v1233.length != lengthOfAlign;
    }
    if (v566) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$1 = i$$1 + 1;
    v12 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1380 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p38) == -1;
  if (!v1380) {
    v1380 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p38) == -1;
  }
  var v1234 = v1380;
  if (!v1234) {
    v1234 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p38) == -1;
  }
  var v977 = v1234;
  if (!v977) {
    v977 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p38) == -1;
  }
  var v568 = v977;
  if (!v568) {
    v568 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p38) == -1;
  }
  if (v568) {
    JAM.call(alert, null, ["The codon table has been entered incorrectly."], JAM.policy.p22);
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v980 = formElement.value;
  if (JAM.call(v980.search, v980, [/\S/], JAM.policy.p38) == -1) {
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
      var v981 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(v981.search, v981, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v982 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(moreExpressionCheck, null, [v982], JAM.policy.p38) == false) {
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
      var v1237 = arrayOfPatterns[j]
    }
    var v575 = JAM.call(v1237.match, v1237, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v1597 = eval("introspect(JAM.policy.pFull) { " + v575 + " }")
    } else {
      var v1597 = JAM.call(eval, null, [v575])
    }
    introspect(JAM.policy.p27) {
      v20[v21] = v1597;
    }
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAM.policy.p26) {
      var v984 = arrayOfPatterns[j]
    }
    var v576 = JAM.call(v984.match, v984, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v1598 = JAM.call(v576.toString, v576, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v22[v23] = v1598;
    }
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAM.policy.p26) {
      var v577 = geneticCodeMatchResult[j]
    }
    var v1599 = JAM.call(v577.replace, v577, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v24[v25] = v1599;
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
        var v986 = geneticCodeMatchExp[j]
      }
      if (JAM.call(codon.search, codon, [v986], JAM.policy.p38) != -1) {
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
      var v988 = arrayOfPatterns$$1[z$$3]
    }
    if (JAM.call(v988.search, v988, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p38) != -1) {
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
      var v989 = arrayOfPatterns$$1[i$$3]
    }
    var re = JAM.new(RegExp, ["[" + v989 + "]", "gi"], JAM.policy.p41);
    var j$$1 = i$$3 + 1;
    var v38 = j$$1 < arrayOfPatterns$$1.length;
    for (;v38;) {
      introspect(JAM.policy.p26) {
        var v990 = arrayOfPatterns$$1[j$$1]
      }
      if (JAM.call(v990.search, v990, [re], JAM.policy.p38) != -1) {
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
      var v991 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(v991.search, v991, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v992 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(moreExpressionCheck, null, [v992], JAM.policy.p38) == false) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$4 = z$$4 + 1;
    v42 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v1238 = JAM.call(getSequenceFromFasta, null, [text$$7], JAM.policy.p38);
  if (JAM.call(v1238.replace, v1238, [/[^A-Za-z]/g, ""], JAM.policy.p41).length > maxInput) {
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
      var v994 = alignArray[i$$4]
    }
    if (JAM.call(v994.search, v994, [/[^\s]+\s/], JAM.policy.p38) == -1) {
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
      var v1239 = arrayOfPatterns$$3[j$$2]
    }
    var v624 = JAM.call(v1239.match, v1239, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v1600 = eval("introspect(JAM.policy.pFull) { " + v624 + " }")
    } else {
      var v1600 = JAM.call(eval, null, [v624])
    }
    introspect(JAM.policy.p27) {
      v73[v74] = v1600;
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
      var v996 = arrayOfPatterns$$4[j$$3]
    }
    var v627 = JAM.call(v996.match, v996, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v1601 = JAM.call(v627.toString, v627, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v77[v78] = v1601;
    }
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAM.policy.p26) {
      var v628 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1602 = JAM.call(v628.replace, v628, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v79[v80] = v1602;
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
  var v1568 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p38) != -1;
  if (!v1568) {
    v1568 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v1558 = v1568;
  if (!v1558) {
    v1558 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p38) != -1;
  }
  var v1547 = v1558;
  if (!v1547) {
    v1547 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v1532 = v1547;
  if (!v1532) {
    v1532 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p38) != -1;
  }
  var v1507 = v1532;
  if (!v1507) {
    v1507 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p38) != -1;
  }
  var v1473 = v1507;
  if (!v1473) {
    v1473 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p38) != -1;
  }
  var v1383 = v1473;
  if (!v1383) {
    v1383 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p38) != -1;
  }
  var v1240 = v1383;
  if (!v1240) {
    v1240 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p38) != -1;
  }
  var v998 = v1240;
  if (!v998) {
    v998 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p38) != -1;
  }
  var v656 = v998;
  if (!v656) {
    v656 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p38) != -1;
  }
  if (v656) {
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
  JAM.call(_openWindow, null, [title$$5, true], JAM.policy.p41);
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
  JAM.call(_openWindowAlign, null, [title$$7, true], JAM.policy.p41);
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
    var v666 = testArray[0]
  }
  if (v666 != testString) {
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
  var v1251 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p38) == -1;
  if (!v1251) {
    v1251 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p38) == -1;
  }
  var v1009 = v1251;
  if (!v1009) {
    v1009 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p38) == -1;
  }
  var v671 = v1009;
  if (!v671) {
    v671 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v671) {
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
  var v1254 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v1254) {
    v1254 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v1012 = v1254;
  if (!v1012) {
    v1012 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v676 = v1012;
  if (!v676) {
    v676 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v676) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1257 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v1257) {
    v1257 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v1015 = v1257;
  if (!v1015) {
    v1015 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v677 = v1015;
  if (!v677) {
    v677 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v677) {
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
  var v1260 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p38) == -1;
  if (!v1260) {
    v1260 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p38) == -1;
  }
  var v1018 = v1260;
  if (!v1018) {
    v1018 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p38) == -1;
  }
  var v679 = v1018;
  if (!v679) {
    v679 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v679) {
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
    var v684 = adjustment < 0;
    if (v684) {
      v684 = adjusted >= 0;
    }
    if (v684) {
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
  var v1029 = sequence$$13.length <= firstIndexToMutate;
  if (!v1029) {
    v1029 = lastIndexToMutate < 0;
  }
  var v701 = v1029;
  if (!v701) {
    v701 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v701) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for (;v220;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * maxNum], JAM.policy.p38);
    var v703 = randNum < firstIndexToMutate;
    if (!v703) {
      v703 = randNum > lastIndexToMutate;
    }
    if (v703) {
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
        var v707 = components$$1[componentsIndex]
      }
      if (v707 != currentChar) {
        needNewChar = false;
      }
    }
    var v708 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p24);
    introspect(JAM.policy.p26) {
      var v709 = components$$1[componentsIndex]
    }
    sequence$$13 = v708 + v709 + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p40);
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
      var v718 = arrayOfItems[i$$9]
    }
    matchExp = JAM.call(v718.match, v718, [/\/.+\//], JAM.policy.p38) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v1269 = arrayOfItems[i$$9]
    }
    var v1035 = JAM.call(v1269.match, v1269, [/\)\D*\d+/], JAM.policy.p38);
    var v719 = JAM.call(v1035.toString, v1035, [], JAM.policy.p39);
    cutDistance = JAM.call(parseFloat, null, [JAM.call(v719.replace, v719, [/\)\D*/, ""], JAM.policy.p41)], JAM.policy.p38);
    var v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    for (;v244;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v720 = matchPosition >= lowerLimit;
      if (v720) {
        v720 = matchPosition < upperLimit;
      }
      if (v720) {
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
    var v1514 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p26) {
      var v1565 = arrayOfItems[i$$9]
    }
    var v1554 = JAM.call(v1565.match, v1565, [/\([^\(]+\)/], JAM.policy.p38);
    var v1540 = JAM.call(v1554.toString, v1554, [], JAM.policy.p39);
    JAM.call(v250.write, v250, [v1514 + JAM.call(v1540.replace, v1540, [/\(|\)/g, ""], JAM.policy.p41) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p38);
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
      var v729 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = JAM.call(v729.match, v729, [/\/[^\/]+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p38) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p38).length;
    }
    var percentage = 0;
    var v1039 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v1404 = arrayOfItems$$1[i$$10]
    }
    if (v1039 - JAM.call(parseFloat, null, [JAM.call(v1404.match, v1404, [/\d+/], JAM.policy.p38)], JAM.policy.p38) > 0) {
      var v260 = 100 * tempNumber;
      var v732 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v1273 = arrayOfItems$$1[i$$10]
      }
      percentage = v260 / (v732 - JAM.call(parseFloat, null, [JAM.call(v1273.match, v1273, [/\d+/], JAM.policy.p38)], JAM.policy.p38));
    }
    var v263 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v1566 = arrayOfItems$$1[i$$10]
    }
    var v1555 = JAM.call(v1566.match, v1566, [/\([^\(]+\)\b/], JAM.policy.p38);
    var v1541 = JAM.call(v1555.toString, v1555, [], JAM.policy.p39);
    JAM.call(v263.write, v263, ["<tr><td>" + JAM.call(v1541.replace, v1541, [/\(|\)/g, ""], JAM.policy.p41) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p25) + "</td></tr>\n"], JAM.policy.p38);
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
function pairwiseAlignDna(theDocument) {
  var newDnaOne = "";
  var titleOne = "";
  var newDnaTwo = "";
  var titleTwo = "";
  var maxInput$$3 = 2E3;
  if (JAM.call(testScript, null, [], JAM.policy.p39) == false) {
    return false;
  }
  var v1556 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1542 = v1556[0]
  }
  var v1517 = v1542.elements;
  introspect(JAM.policy.p26) {
    var v1483 = v1517[0]
  }
  var v1275 = JAM.call(checkFormElement, null, [v1483], JAM.policy.p38) == false;
  if (!v1275) {
    var v1567 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1557 = v1567[0]
    }
    var v1543 = v1557.elements;
    introspect(JAM.policy.p26) {
      var v1518 = v1543[0]
    }
    v1275 = JAM.call(checkSequenceLength, null, [v1518.value, maxInput$$3], JAM.policy.p40) == false;
  }
  var v1044 = v1275;
  if (!v1044) {
    var v1544 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1519 = v1544[0]
    }
    var v1485 = v1519.elements;
    introspect(JAM.policy.p26) {
      var v1409 = v1485[1]
    }
    v1044 = JAM.call(checkFormElement, null, [v1409], JAM.policy.p38) == false;
  }
  var v741 = v1044;
  if (!v741) {
    var v1545 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1520 = v1545[0]
    }
    var v1486 = v1520.elements;
    introspect(JAM.policy.p26) {
      var v1410 = v1486[1]
    }
    v741 = JAM.call(checkSequenceLength, null, [v1410.value, maxInput$$3], JAM.policy.p40) == false;
  }
  if (v741) {
    return false;
  }
  var v1521 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1487 = v1521[0]
  }
  var v1411 = v1487.elements;
  introspect(JAM.policy.p26) {
    var v1279 = v1411[5]
  }
  var v1047 = v1279.options;
  var v1522 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1488 = v1522[0]
  }
  var v1412 = v1488.elements;
  introspect(JAM.policy.p26) {
    var v1280 = v1412[5]
  }
  var v1048 = v1280.selectedIndex;
  introspect(JAM.policy.p26) {
    var v742 = v1047[v1048]
  }
  var MATCH_SCORE = JAM.call(parseInt, null, [v742.value], JAM.policy.p38);
  var v1523 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1489 = v1523[0]
  }
  var v1413 = v1489.elements;
  introspect(JAM.policy.p26) {
    var v1281 = v1413[6]
  }
  var v1049 = v1281.options;
  var v1524 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1490 = v1524[0]
  }
  var v1414 = v1490.elements;
  introspect(JAM.policy.p26) {
    var v1282 = v1414[6]
  }
  var v1050 = v1282.selectedIndex;
  introspect(JAM.policy.p26) {
    var v743 = v1049[v1050]
  }
  var MISMATCH_SCORE = JAM.call(parseInt, null, [v743.value], JAM.policy.p38);
  var v1525 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1491 = v1525[0]
  }
  var v1415 = v1491.elements;
  introspect(JAM.policy.p26) {
    var v1283 = v1415[7]
  }
  var v1051 = v1283.options;
  var v1526 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1492 = v1526[0]
  }
  var v1416 = v1492.elements;
  introspect(JAM.policy.p26) {
    var v1284 = v1416[7]
  }
  var v1052 = v1284.selectedIndex;
  introspect(JAM.policy.p26) {
    var v744 = v1051[v1052]
  }
  var BEGIN_GAP_PENALTY = JAM.call(parseInt, null, [v744.value], JAM.policy.p38);
  var v1527 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1493 = v1527[0]
  }
  var v1417 = v1493.elements;
  introspect(JAM.policy.p26) {
    var v1285 = v1417[8]
  }
  var v1053 = v1285.options;
  var v1528 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1494 = v1528[0]
  }
  var v1418 = v1494.elements;
  introspect(JAM.policy.p26) {
    var v1286 = v1418[8]
  }
  var v1054 = v1286.selectedIndex;
  introspect(JAM.policy.p26) {
    var v745 = v1053[v1054]
  }
  var GAP_PENALTY = JAM.call(parseInt, null, [v745.value], JAM.policy.p38);
  var v1529 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1495 = v1529[0]
  }
  var v1419 = v1495.elements;
  introspect(JAM.policy.p26) {
    var v1287 = v1419[9]
  }
  var v1055 = v1287.options;
  var v1530 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1496 = v1530[0]
  }
  var v1420 = v1496.elements;
  introspect(JAM.policy.p26) {
    var v1288 = v1420[9]
  }
  var v1056 = v1288.selectedIndex;
  introspect(JAM.policy.p26) {
    var v746 = v1055[v1056]
  }
  var END_GAP_PENALTY = JAM.call(parseInt, null, [v746.value], JAM.policy.p38);
  JAM.call(openWindow, null, ["Pairwise Align DNA"], JAM.policy.p22);
  JAM.call(openPre, null, [], JAM.policy.p39);
  var v1421 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1289 = v1421[0]
  }
  var v1057 = v1289.elements;
  introspect(JAM.policy.p26) {
    var v747 = v1057[0]
  }
  newDnaOne = JAM.call(getSequenceFromFasta, null, [v747.value], JAM.policy.p38);
  newDnaOne = JAM.call(removeNonDna, null, [newDnaOne], JAM.policy.p38);
  var v1422 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1290 = v1422[0]
  }
  var v1058 = v1290.elements;
  introspect(JAM.policy.p26) {
    var v748 = v1058[0]
  }
  titleOne = JAM.call(getTitleFromFasta, null, [v748.value], JAM.policy.p38);
  var v1423 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1291 = v1423[0]
  }
  var v1059 = v1291.elements;
  introspect(JAM.policy.p26) {
    var v749 = v1059[1]
  }
  newDnaTwo = JAM.call(getSequenceFromFasta, null, [v749.value], JAM.policy.p38);
  newDnaTwo = JAM.call(removeNonDna, null, [newDnaTwo], JAM.policy.p38);
  var v1424 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1292 = v1424[0]
  }
  var v1060 = v1292.elements;
  introspect(JAM.policy.p26) {
    var v750 = v1060[1]
  }
  titleTwo = JAM.call(getTitleFromFasta, null, [v750.value], JAM.policy.p38);
  var v287 = outputWindow.document;
  JAM.call(v287.write, v287, [JAM.call(getPairwiseAlignTitle, null, [titleOne, newDnaOne, titleTwo, newDnaTwo], JAM.policy.p40)], JAM.policy.p38);
  if (JAM.call(newDnaOne.search, newDnaOne, [/./], JAM.policy.p38) != -1) {
    newDnaOne = JAM.call(newDnaOne.match, newDnaOne, [/./g], JAM.policy.p38);
  }
  if (JAM.call(newDnaTwo.search, newDnaTwo, [/./], JAM.policy.p38) != -1) {
    newDnaTwo = JAM.call(newDnaTwo.match, newDnaTwo, [/./g], JAM.policy.p38);
  }
  JAM.call(pairwiseDna, null, [titleOne, newDnaOne, titleTwo, newDnaTwo, MATCH_SCORE, MISMATCH_SCORE, GAP_PENALTY, BEGIN_GAP_PENALTY, END_GAP_PENALTY], JAM.policy.p40);
  JAM.call(closePre, null, [], JAM.policy.p39);
  JAM.call(closeWindow, null, [], JAM.policy.p39);
  return true;
}
function pairwiseDna(titleOne$$1, newDnaOne$$1, titleTwo$$1, newDnaTwo$$1, matchScore, mismatchScore, gapPenalty, beginGapPenalty, endGapPenalty) {
  var useLinearSpace = true;
  var useQuadraticSpace = false;
  var matrix = JAM.new(Identity, [], JAM.policy.p39);
  JAM.call(matrix.setMatch, matrix, [matchScore], JAM.policy.p38);
  JAM.call(matrix.setMismatch, matrix, [mismatchScore], JAM.policy.p38);
  var scoreSet = JAM.new(ScoreSet, [], JAM.policy.p39);
  JAM.call(scoreSet.setScoreSetParam, scoreSet, [matrix, gapPenalty, beginGapPenalty, endGapPenalty], JAM.policy.p40);
  var alignment;
  if (useLinearSpace) {
    alignment = JAM.new(AlignPairLinear, [], JAM.policy.p39);
    JAM.call(alignment.setAlignParam, alignment, [newDnaOne$$1, newDnaTwo$$1, scoreSet], JAM.policy.p40);
    JAM.call(alignment.align, alignment, [], JAM.policy.p39);
    var v291 = outputWindow.document;
    JAM.call(v291.write, v291, [">" + titleOne$$1 + "\n"], JAM.policy.p38);
    var v293 = outputWindow.document;
    JAM.call(v293.write, v293, [JAM.call(addReturns, null, [JAM.call(alignment.getAlignedM, alignment, [], JAM.policy.p39)], JAM.policy.p38)], JAM.policy.p38);
    var v295 = outputWindow.document;
    JAM.call(v295.write, v295, ["\n"], JAM.policy.p22);
    var v296 = outputWindow.document;
    JAM.call(v296.write, v296, ["\n"], JAM.policy.p22);
    var v297 = outputWindow.document;
    JAM.call(v297.write, v297, [">" + titleTwo$$1 + "\n"], JAM.policy.p38);
    var v299 = outputWindow.document;
    JAM.call(v299.write, v299, [JAM.call(addReturns, null, [JAM.call(alignment.getAlignedN, alignment, [], JAM.policy.p39)], JAM.policy.p38)], JAM.policy.p38);
    var v301 = outputWindow.document;
    JAM.call(v301.write, v301, ["\n\n"], JAM.policy.p22);
    var v302 = outputWindow.document;
    JAM.call(v302.write, v302, ["Alignment score: " + alignment.score + "\n\n"], JAM.policy.p38);
  }
  if (useQuadraticSpace) {
    alignment = JAM.new(AlignPairQuad, [], JAM.policy.p39);
    JAM.call(alignment.initializeMatrix, alignment, [newDnaOne$$1, newDnaTwo$$1, scoreSet], JAM.policy.p40);
    JAM.call(alignment.fillMatrix, alignment, [], JAM.policy.p39);
    JAM.call(alignment.align, alignment, [], JAM.policy.p39);
    var v304 = outputWindow.document;
    JAM.call(v304.write, v304, [">" + titleOne$$1 + "\n"], JAM.policy.p38);
    var v306 = outputWindow.document;
    JAM.call(v306.write, v306, [JAM.call(addReturns, null, [JAM.call(alignment.getAlignedM, alignment, [], JAM.policy.p39)], JAM.policy.p38)], JAM.policy.p38);
    var v308 = outputWindow.document;
    JAM.call(v308.write, v308, ["\n"], JAM.policy.p22);
    var v309 = outputWindow.document;
    JAM.call(v309.write, v309, ["\n"], JAM.policy.p22);
    var v310 = outputWindow.document;
    JAM.call(v310.write, v310, [">" + titleTwo$$1 + "\n"], JAM.policy.p38);
    var v312 = outputWindow.document;
    JAM.call(v312.write, v312, [JAM.call(addReturns, null, [JAM.call(alignment.getAlignedN, alignment, [], JAM.policy.p39)], JAM.policy.p38)], JAM.policy.p38);
    var v314 = outputWindow.document;
    JAM.call(v314.write, v314, ["\n\n"], JAM.policy.p22);
    var v315 = outputWindow.document;
    JAM.call(v315.write, v315, ["Alignment score: " + alignment.score + "\n\n"], JAM.policy.p38);
  }
  return;
}
function getScore(r1$$1, r2) {
  var v317 = this.scoringMatrix;
  return JAM.call(v317.scoringMatrix_getScore, v317, [r1$$1, r2], JAM.policy.p40);
}
function setScoreSetParam(scoringMatrix, gapPenalty$$1, beginGapPenalty$$1, endGapPenalty$$1) {
  this.scoringMatrix = scoringMatrix;
  this.gap = gapPenalty$$1;
  this.beginGap = beginGapPenalty$$1;
  this.endGap = endGapPenalty$$1;
  return;
}
function ScoreSet() {
  this.useBeginGapTop = true;
  this.useBeginGapLeft = true;
  this.useEndGapBottom = true;
  this.useEndGapRight = true;
  return;
}
function scoringMatrix_getScore(r1$$2, r2$$1) {
  r1$$2 = JAM.call(r1$$2.toLowerCase, r1$$2, [], JAM.policy.p39);
  r2$$1 = JAM.call(r2$$1.toLowerCase, r2$$1, [], JAM.policy.p39);
  if (r1$$2 == r2$$1) {
    return this.match;
  } else {
    return this.mismatch;
  }
  return;
}
function ScoringMatrix() {
  return;
}
function setMismatch(mismatchScore$$1) {
  this.mismatch = mismatchScore$$1;
  return;
}
function setMatch(matchScore$$1) {
  this.match = matchScore$$1;
  return;
}
function Identity() {
  return;
}
function align() {
  if (this.M.length == 0) {
    var j$$10 = 1;
    var v324 = j$$10 <= this.N.length;
    for (;v324;) {
      var v319 = this.alignedM;
      JAM.call(v319.push, v319, ["-"], JAM.policy.p22);
      var v320 = this.alignedN;
      var v765 = this.N;
      var v766 = j$$10 - 1;
      introspect(JAM.policy.p26) {
        var v321 = v765[v766]
      }
      JAM.call(v320.push, v320, [v321], JAM.policy.p38);
      this.score = this.score + this.scoreSet.gap;
      j$$10 = j$$10 + 1;
      v324 = j$$10 <= this.N.length;
    }
  } else {
    if (this.N.length == 0) {
      j$$10 = 1;
      var v330 = j$$10 <= this.M.length;
      for (;v330;) {
        var v325 = this.alignedN;
        JAM.call(v325.push, v325, ["-"], JAM.policy.p22);
        var v326 = this.alignedM;
        var v771 = this.M;
        var v772 = j$$10 - 1;
        introspect(JAM.policy.p26) {
          var v327 = v771[v772]
        }
        JAM.call(v326.push, v326, [v327], JAM.policy.p38);
        this.score = this.score + this.scoreSet.gap;
        j$$10 = j$$10 + 1;
        v330 = j$$10 <= this.M.length;
      }
    } else {
      var v775 = this.M.length == 0;
      if (v775) {
        v775 = this.N.length == 0;
      }
      if (v775) {
      } else {
        JAM.call(this.path, this, [0, 0, this.M.length, this.N.length], JAM.policy.p24);
      }
    }
  }
  return;
}
function path(i1, j1, i2, j2) {
  var v778 = i1 + 1 == i2;
  if (!v778) {
    v778 = j1 == j2;
  }
  if (v778) {
    var subM = JAM.new(Array, [], JAM.policy.p39);
    var subN = JAM.new(Array, [], JAM.policy.p39);
    var i$$11 = i1 + 1;
    var v337 = i$$11 <= i2;
    for (;v337;) {
      var v779 = this.M;
      var v780 = i$$11 - 1;
      introspect(JAM.policy.p26) {
        var v336 = v779[v780]
      }
      JAM.call(subM.push, subM, [v336], JAM.policy.p38);
      i$$11 = i$$11 + 1;
      v337 = i$$11 <= i2;
    }
    var j$$11 = j1 + 1;
    var v339 = j$$11 <= j2;
    for (;v339;) {
      var v781 = this.N;
      var v782 = j$$11 - 1;
      introspect(JAM.policy.p26) {
        var v338 = v781[v782]
      }
      JAM.call(subN.push, subN, [v338], JAM.policy.p38);
      j$$11 = j$$11 + 1;
      v339 = j$$11 <= j2;
    }
    var alignment$$1 = JAM.new(AlignPairQuad, [], JAM.policy.p39);
    subScoreSet = JAM.new(ScoreSet, [], JAM.policy.p39);
    if (j1 == j2) {
      if (j1 == 0) {
        JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.beginGap, this.scoreSet.beginGap, this.scoreSet.beginGap], JAM.policy.p40);
      } else {
        if (j1 == this.N.length) {
          JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.endGap, this.scoreSet.endGap, this.scoreSet.endGap], JAM.policy.p40);
        } else {
          JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.gap, this.scoreSet.gap, this.scoreSet.gap], JAM.policy.p40);
        }
      }
    } else {
      JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.gap, this.scoreSet.beginGap, this.scoreSet.endGap], JAM.policy.p40);
      subScoreSet.useBeginGapTop = false;
      subScoreSet.useBeginGapLeft = false;
      subScoreSet.useEndGapBottom = false;
      subScoreSet.useEndGapRight = false;
      if (i1 == 0) {
        subScoreSet.useBeginGapTop = true;
      }
      if (j1 == 0) {
        subScoreSet.useBeginGapLeft = true;
      }
      if (j2 == this.N.length) {
        subScoreSet.useEndGapRight = true;
      }
      if (i2 == this.M.length) {
        subScoreSet.useEndGapBottom = true;
      }
    }
    JAM.call(alignment$$1.initializeMatrix, alignment$$1, [subM, subN, subScoreSet], JAM.policy.p40);
    JAM.call(alignment$$1.fillMatrix, alignment$$1, [], JAM.policy.p39);
    JAM.call(alignment$$1.align, alignment$$1, [], JAM.policy.p39);
    var v363 = this.alignedM;
    JAM.call(v363.push, v363, [JAM.call(alignment$$1.getAlignedM, alignment$$1, [], JAM.policy.p39)], JAM.policy.p38);
    var v365 = this.alignedN;
    JAM.call(v365.push, v365, [JAM.call(alignment$$1.getAlignedN, alignment$$1, [], JAM.policy.p39)], JAM.policy.p38);
    this.score = this.score + alignment$$1.score;
  } else {
    var middle = JAM.call(Math.floor, Math, [(i1 + i2) / 2], JAM.policy.p38);
    JAM.set(this.Sn, j1, 0, JAM.policy.p27);
    if (i1 == 0) {
      j$$11 = j1 + 1;
      var v372 = j$$11 <= j2;
      for (;v372;) {
        var v371 = this.Sn;
        var v1076 = this.Sn;
        var v1077 = j$$11 - 1;
        introspect(JAM.policy.p26) {
          var v803 = v1076[v1077]
        }
        JAM.set(v371, j$$11, v803 - this.scoreSet.beginGap, JAM.policy.p27);
        j$$11 = j$$11 + 1;
        v372 = j$$11 <= j2;
      }
    } else {
      j$$11 = j1 + 1;
      var v374 = j$$11 <= j2;
      for (;v374;) {
        var v373 = this.Sn;
        var v1079 = this.Sn;
        var v1080 = j$$11 - 1;
        introspect(JAM.policy.p26) {
          var v805 = v1079[v1080]
        }
        JAM.set(v373, j$$11, v805 - this.scoreSet.gap, JAM.policy.p27);
        j$$11 = j$$11 + 1;
        v374 = j$$11 <= j2;
      }
    }
    var diag;
    var left$$1;
    i$$11 = i1 + 1;
    var v397 = i$$11 <= middle;
    for (;v397;) {
      var v376 = this.Sn;
      introspect(JAM.policy.p26) {
        diag = v376[j1];
      }
      if (j1 == 0) {
        var v807 = this.Sn;
        introspect(JAM.policy.p26) {
          var v377 = v807[j1]
        }
        left$$1 = v377 - this.scoreSet.beginGap;
      } else {
        var v809 = this.Sn;
        introspect(JAM.policy.p26) {
          var v379 = v809[j1]
        }
        left$$1 = v379 - this.scoreSet.gap;
      }
      JAM.set(this.Sn, j1, left$$1, JAM.policy.p27);
      j$$11 = j1 + 1;
      var v396 = j$$11 <= j2;
      for (;v396;) {
        var v811 = j$$11 == this.N.length;
        if (v811) {
          v811 = i$$11 == this.M.length;
        }
        if (v811) {
          var v1084 = this.Sn;
          introspect(JAM.policy.p26) {
            var v812 = v1084[j$$11]
          }
          var v383 = v812 - this.scoreSet.endGap;
          var v814 = left$$1 - this.scoreSet.endGap;
          var v1087 = diag;
          var v1298 = this.scoreSet;
          var v1425 = this.M;
          var v1426 = i$$11 - 1;
          introspect(JAM.policy.p26) {
            var v1299 = v1425[v1426]
          }
          var v1427 = this.N;
          var v1428 = j$$11 - 1;
          introspect(JAM.policy.p26) {
            var v1300 = v1427[v1428]
          }
          left$$1 = JAM.call(Math.max, Math, [v383, JAM.call(Math.max, Math, [v814, v1087 + JAM.call(v1298.getScore, v1298, [v1299, v1300], JAM.policy.p40)], JAM.policy.p40)], JAM.policy.p40);
        } else {
          if (i$$11 == this.M.length) {
            var v1090 = this.Sn;
            introspect(JAM.policy.p26) {
              var v817 = v1090[j$$11]
            }
            var v385 = v817 - this.scoreSet.gap;
            var v819 = left$$1 - this.scoreSet.endGap;
            var v1093 = diag;
            var v1302 = this.scoreSet;
            var v1429 = this.M;
            var v1430 = i$$11 - 1;
            introspect(JAM.policy.p26) {
              var v1303 = v1429[v1430]
            }
            var v1431 = this.N;
            var v1432 = j$$11 - 1;
            introspect(JAM.policy.p26) {
              var v1304 = v1431[v1432]
            }
            left$$1 = JAM.call(Math.max, Math, [v385, JAM.call(Math.max, Math, [v819, v1093 + JAM.call(v1302.getScore, v1302, [v1303, v1304], JAM.policy.p40)], JAM.policy.p40)], JAM.policy.p40);
          } else {
            if (j$$11 == this.N.length) {
              var v1096 = this.Sn;
              introspect(JAM.policy.p26) {
                var v822 = v1096[j$$11]
              }
              var v387 = v822 - this.scoreSet.endGap;
              var v824 = left$$1 - this.scoreSet.gap;
              var v1099 = diag;
              var v1306 = this.scoreSet;
              var v1433 = this.M;
              var v1434 = i$$11 - 1;
              introspect(JAM.policy.p26) {
                var v1307 = v1433[v1434]
              }
              var v1435 = this.N;
              var v1436 = j$$11 - 1;
              introspect(JAM.policy.p26) {
                var v1308 = v1435[v1436]
              }
              left$$1 = JAM.call(Math.max, Math, [v387, JAM.call(Math.max, Math, [v824, v1099 + JAM.call(v1306.getScore, v1306, [v1307, v1308], JAM.policy.p40)], JAM.policy.p40)], JAM.policy.p40);
            } else {
              var v1101 = this.Sn;
              introspect(JAM.policy.p26) {
                var v826 = v1101[j$$11]
              }
              var v389 = v826 - this.scoreSet.gap;
              var v828 = left$$1 - this.scoreSet.gap;
              var v1104 = diag;
              var v1310 = this.scoreSet;
              var v1437 = this.M;
              var v1438 = i$$11 - 1;
              introspect(JAM.policy.p26) {
                var v1311 = v1437[v1438]
              }
              var v1439 = this.N;
              var v1440 = j$$11 - 1;
              introspect(JAM.policy.p26) {
                var v1312 = v1439[v1440]
              }
              left$$1 = JAM.call(Math.max, Math, [v389, JAM.call(Math.max, Math, [v828, v1104 + JAM.call(v1310.getScore, v1310, [v1311, v1312], JAM.policy.p40)], JAM.policy.p40)], JAM.policy.p40);
            }
          }
        }
        var v394 = this.Sn;
        introspect(JAM.policy.p26) {
          diag = v394[j$$11];
        }
        JAM.set(this.Sn, j$$11, left$$1, JAM.policy.p27);
        j$$11 = j$$11 + 1;
        v396 = j$$11 <= j2;
      }
      i$$11 = i$$11 + 1;
      v397 = i$$11 <= middle;
    }
    JAM.set(this.Sp, j2, 0, JAM.policy.p27);
    if (i2 == this.M.length) {
      j$$11 = j2 - 1;
      var v400 = j$$11 >= j1;
      for (;v400;) {
        var v399 = this.Sp;
        var v1107 = this.Sp;
        var v1108 = j$$11 + 1;
        introspect(JAM.policy.p26) {
          var v831 = v1107[v1108]
        }
        JAM.set(v399, j$$11, v831 - this.scoreSet.endGap, JAM.policy.p27);
        j$$11 = j$$11 - 1;
        v400 = j$$11 >= j1;
      }
    } else {
      j$$11 = j2 - 1;
      var v402 = j$$11 >= j1;
      for (;v402;) {
        var v401 = this.Sp;
        var v1110 = this.Sp;
        var v1111 = j$$11 + 1;
        introspect(JAM.policy.p26) {
          var v833 = v1110[v1111]
        }
        JAM.set(v401, j$$11, v833 - this.scoreSet.gap, JAM.policy.p27);
        j$$11 = j$$11 - 1;
        v402 = j$$11 >= j1;
      }
    }
    var right$$1;
    i$$11 = i2 - 1;
    var v425 = i$$11 >= middle;
    for (;v425;) {
      var v404 = this.Sp;
      introspect(JAM.policy.p26) {
        diag = v404[j2];
      }
      if (j2 == this.N.length) {
        var v836 = this.Sp;
        introspect(JAM.policy.p26) {
          var v405 = v836[j2]
        }
        right$$1 = v405 - this.scoreSet.endGap;
      } else {
        var v838 = this.Sp;
        introspect(JAM.policy.p26) {
          var v407 = v838[j2]
        }
        right$$1 = v407 - this.scoreSet.gap;
      }
      JAM.set(this.Sp, j2, right$$1, JAM.policy.p27);
      j$$11 = j2 - 1;
      var v424 = j$$11 >= j1;
      for (;v424;) {
        var v840 = j$$11 == 0;
        if (v840) {
          v840 = i$$11 == 0;
        }
        if (v840) {
          var v1114 = this.Sp;
          introspect(JAM.policy.p26) {
            var v841 = v1114[j$$11]
          }
          var v411 = v841 - this.scoreSet.beginGap;
          var v843 = right$$1 - this.scoreSet.beginGap;
          var v1117 = diag;
          var v1314 = this.scoreSet;
          var v1441 = this.M;
          var v1442 = i$$11 + 1 - 1;
          introspect(JAM.policy.p26) {
            var v1315 = v1441[v1442]
          }
          var v1443 = this.N;
          var v1444 = j$$11 + 1 - 1;
          introspect(JAM.policy.p26) {
            var v1316 = v1443[v1444]
          }
          right$$1 = JAM.call(Math.max, Math, [v411, JAM.call(Math.max, Math, [v843, v1117 + JAM.call(v1314.getScore, v1314, [v1315, v1316], JAM.policy.p40)], JAM.policy.p40)], JAM.policy.p40);
        } else {
          if (j$$11 == 0) {
            var v1119 = this.Sp;
            introspect(JAM.policy.p26) {
              var v845 = v1119[j$$11]
            }
            var v413 = v845 - this.scoreSet.beginGap;
            var v847 = right$$1 - this.scoreSet.gap;
            var v1122 = diag;
            var v1318 = this.scoreSet;
            var v1445 = this.M;
            var v1446 = i$$11 + 1 - 1;
            introspect(JAM.policy.p26) {
              var v1319 = v1445[v1446]
            }
            var v1447 = this.N;
            var v1448 = j$$11 + 1 - 1;
            introspect(JAM.policy.p26) {
              var v1320 = v1447[v1448]
            }
            right$$1 = JAM.call(Math.max, Math, [v413, JAM.call(Math.max, Math, [v847, v1122 + JAM.call(v1318.getScore, v1318, [v1319, v1320], JAM.policy.p40)], JAM.policy.p40)], JAM.policy.p40);
          } else {
            if (i$$11 == 0) {
              var v1124 = this.Sp;
              introspect(JAM.policy.p26) {
                var v849 = v1124[j$$11]
              }
              var v415 = v849 - this.scoreSet.gap;
              var v851 = right$$1 - this.scoreSet.beginGap;
              var v1127 = diag;
              var v1322 = this.scoreSet;
              var v1449 = this.M;
              var v1450 = i$$11 + 1 - 1;
              introspect(JAM.policy.p26) {
                var v1323 = v1449[v1450]
              }
              var v1451 = this.N;
              var v1452 = j$$11 + 1 - 1;
              introspect(JAM.policy.p26) {
                var v1324 = v1451[v1452]
              }
              right$$1 = JAM.call(Math.max, Math, [v415, JAM.call(Math.max, Math, [v851, v1127 + JAM.call(v1322.getScore, v1322, [v1323, v1324], JAM.policy.p40)], JAM.policy.p40)], JAM.policy.p40);
            } else {
              var v1129 = this.Sp;
              introspect(JAM.policy.p26) {
                var v853 = v1129[j$$11]
              }
              var v417 = v853 - this.scoreSet.gap;
              var v855 = right$$1 - this.scoreSet.gap;
              var v1132 = diag;
              var v1326 = this.scoreSet;
              var v1453 = this.M;
              var v1454 = i$$11 + 1 - 1;
              introspect(JAM.policy.p26) {
                var v1327 = v1453[v1454]
              }
              var v1455 = this.N;
              var v1456 = j$$11 + 1 - 1;
              introspect(JAM.policy.p26) {
                var v1328 = v1455[v1456]
              }
              right$$1 = JAM.call(Math.max, Math, [v417, JAM.call(Math.max, Math, [v855, v1132 + JAM.call(v1326.getScore, v1326, [v1327, v1328], JAM.policy.p40)], JAM.policy.p40)], JAM.policy.p40);
            }
          }
        }
        var v422 = this.Sp;
        introspect(JAM.policy.p26) {
          diag = v422[j$$11];
        }
        JAM.set(this.Sp, j$$11, right$$1, JAM.policy.p27);
        j$$11 = j$$11 - 1;
        v424 = j$$11 >= j1;
      }
      i$$11 = i$$11 - 1;
      v425 = i$$11 >= middle;
    }
    var v857 = this.Sn;
    introspect(JAM.policy.p26) {
      var v426 = v857[j1]
    }
    var v858 = this.Sp;
    introspect(JAM.policy.p26) {
      var v427 = v858[j1]
    }
    var maxValue = v426 + v427;
    var maxJ = j1;
    j$$11 = j1 + 1;
    var v431 = j$$11 <= j2;
    for (;v431;) {
      var v1329 = this.Sn;
      introspect(JAM.policy.p26) {
        var v1134 = v1329[j$$11]
      }
      var v1330 = this.Sp;
      introspect(JAM.policy.p26) {
        var v1135 = v1330[j$$11]
      }
      if (v1134 + v1135 >= maxValue) {
        var v860 = this.Sn;
        introspect(JAM.policy.p26) {
          var v428 = v860[j$$11]
        }
        var v861 = this.Sp;
        introspect(JAM.policy.p26) {
          var v429 = v861[j$$11]
        }
        maxValue = v428 + v429;
        maxJ = j$$11;
      }
      j$$11 = j$$11 + 1;
      v431 = j$$11 <= j2;
    }
    JAM.call(this.path, this, [i1, j1, middle, maxJ], JAM.policy.p40);
    JAM.call(this.path, this, [middle, maxJ, i2, j2], JAM.policy.p40);
  }
  return;
}
function getAlignedM() {
  var v433 = this.alignedM;
  return JAM.call(v433.join, v433, [""], JAM.policy.p22);
}
function getAlignedN() {
  var v434 = this.alignedN;
  return JAM.call(v434.join, v434, [""], JAM.policy.p22);
}
function setAlignParam(M, N, scoreSet$$1) {
  this.M = M;
  this.N = N;
  var v1603 = JAM.new(Array, [], JAM.policy.p39);
  this.alignedM = v1603;
  var v1604 = JAM.new(Array, [], JAM.policy.p39);
  this.alignedN = v1604;
  this.scoreSet = scoreSet$$1;
  var v1605 = JAM.new(Array, [this.N.length], JAM.policy.p38);
  this.Sn = v1605;
  var v1606 = JAM.new(Array, [this.N.length], JAM.policy.p38);
  this.Sp = v1606;
  this.score = 0;
  return;
}
function AlignPairLinear() {
  return;
}
function Node() {
  return;
}
function initializeMatrix(sequenceOne$$2, sequenceTwo$$2, scoreSet$$2) {
  this.scoreSet = scoreSet$$2;
  this.M = sequenceOne$$2;
  this.N = sequenceTwo$$2;
  this.score = 0;
  var v1607 = JAM.new(Array, [this.M.length + 1], JAM.policy.p38);
  this.nodes = v1607;
  var i$$12 = 0;
  var v443 = i$$12 < this.nodes.length;
  for (;v443;) {
    var v438 = this.nodes;
    var v439 = i$$12;
    var v1608 = JAM.new(Array, [this.N.length + 1], JAM.policy.p38);
    introspect(JAM.policy.p27) {
      v438[v439] = v1608;
    }
    var j$$12 = 0;
    var v1332 = this.nodes;
    introspect(JAM.policy.p26) {
      var v1139 = v1332[i$$12]
    }
    var v442 = j$$12 < v1139.length;
    for (;v442;) {
      var v868 = this.nodes;
      introspect(JAM.policy.p26) {
        var v440 = v868[i$$12]
      }
      var v441 = j$$12;
      var v1609 = JAM.new(Node, [], JAM.policy.p39);
      introspect(JAM.policy.p27) {
        v440[v441] = v1609;
      }
      j$$12 = j$$12 + 1;
      var v1333 = this.nodes;
      introspect(JAM.policy.p26) {
        var v1140 = v1333[i$$12]
      }
      v442 = j$$12 < v1140.length;
    }
    i$$12 = i$$12 + 1;
    v443 = i$$12 < this.nodes.length;
  }
  var v1142 = this.nodes;
  introspect(JAM.policy.p26) {
    var v871 = v1142[0]
  }
  introspect(JAM.policy.p26) {
    var v444 = v871[0]
  }
  v444.value = 0;
  i$$12 = 1;
  var v450 = i$$12 < this.nodes.length;
  for (;v450;) {
    if (this.scoreSet.useBeginGapLeft) {
      var v1144 = this.nodes;
      introspect(JAM.policy.p26) {
        var v874 = v1144[i$$12]
      }
      introspect(JAM.policy.p26) {
        var v445 = v874[0]
      }
      var v1457 = this.nodes;
      var v1458 = i$$12 - 1;
      introspect(JAM.policy.p26) {
        var v1334 = v1457[v1458]
      }
      introspect(JAM.policy.p26) {
        var v1145 = v1334[0]
      }
      v445.value = v1145.value - this.scoreSet.beginGap;
    } else {
      var v1147 = this.nodes;
      introspect(JAM.policy.p26) {
        var v877 = v1147[i$$12]
      }
      introspect(JAM.policy.p26) {
        var v446 = v877[0]
      }
      var v1459 = this.nodes;
      var v1460 = i$$12 - 1;
      introspect(JAM.policy.p26) {
        var v1335 = v1459[v1460]
      }
      introspect(JAM.policy.p26) {
        var v1148 = v1335[0]
      }
      v446.value = v1148.value - this.scoreSet.gap;
    }
    var v1150 = this.nodes;
    introspect(JAM.policy.p26) {
      var v880 = v1150[i$$12]
    }
    introspect(JAM.policy.p26) {
      var v448 = v880[0]
    }
    v448.tracebackI = i$$12 - 1;
    var v1151 = this.nodes;
    introspect(JAM.policy.p26) {
      var v881 = v1151[i$$12]
    }
    introspect(JAM.policy.p26) {
      var v449 = v881[0]
    }
    v449.tracebackJ = 0;
    i$$12 = i$$12 + 1;
    v450 = i$$12 < this.nodes.length;
  }
  j$$12 = 1;
  var v1336 = this.nodes;
  introspect(JAM.policy.p26) {
    var v1153 = v1336[0]
  }
  var v456 = j$$12 < v1153.length;
  for (;v456;) {
    if (this.scoreSet.useBeginGapTop) {
      var v1154 = this.nodes;
      introspect(JAM.policy.p26) {
        var v885 = v1154[0]
      }
      introspect(JAM.policy.p26) {
        var v451 = v885[j$$12]
      }
      var v1461 = this.nodes;
      introspect(JAM.policy.p26) {
        var v1337 = v1461[0]
      }
      var v1338 = j$$12 - 1;
      introspect(JAM.policy.p26) {
        var v1155 = v1337[v1338]
      }
      v451.value = v1155.value - this.scoreSet.beginGap;
    } else {
      var v1157 = this.nodes;
      introspect(JAM.policy.p26) {
        var v888 = v1157[0]
      }
      introspect(JAM.policy.p26) {
        var v452 = v888[j$$12]
      }
      var v1462 = this.nodes;
      introspect(JAM.policy.p26) {
        var v1339 = v1462[0]
      }
      var v1340 = j$$12 - 1;
      introspect(JAM.policy.p26) {
        var v1158 = v1339[v1340]
      }
      v452.value = v1158.value - this.scoreSet.gap;
    }
    var v1160 = this.nodes;
    introspect(JAM.policy.p26) {
      var v891 = v1160[0]
    }
    introspect(JAM.policy.p26) {
      var v454 = v891[j$$12]
    }
    v454.tracebackI = 0;
    var v1161 = this.nodes;
    introspect(JAM.policy.p26) {
      var v892 = v1161[0]
    }
    introspect(JAM.policy.p26) {
      var v455 = v892[j$$12]
    }
    v455.tracebackJ = j$$12 - 1;
    j$$12 = j$$12 + 1;
    var v1341 = this.nodes;
    introspect(JAM.policy.p26) {
      var v1162 = v1341[0]
    }
    v456 = j$$12 < v1162.length;
  }
  return;
}
function dumpMatrix() {
  var v457 = outputWindow.document;
  var v894 = "Dynamic programming matrix i=" + this.nodes.length + " and j=";
  var v1343 = this.nodes;
  introspect(JAM.policy.p26) {
    var v1164 = v1343[0]
  }
  JAM.call(v457.write, v457, [v894 + v1164.length], JAM.policy.p38);
  var v459 = outputWindow.document;
  JAM.call(v459.write, v459, ["\n"], JAM.policy.p22);
  var i$$13 = 0;
  var v470 = i$$13 < this.nodes.length;
  for (;v470;) {
    var j$$13 = 0;
    var v1344 = this.nodes;
    introspect(JAM.policy.p26) {
      var v1166 = v1344[i$$13]
    }
    var v468 = j$$13 < v1166.length;
    for (;v468;) {
      var v1167 = this.nodes;
      introspect(JAM.policy.p26) {
        var v898 = v1167[i$$13]
      }
      introspect(JAM.policy.p26) {
        var v460 = v898[j$$13]
      }
      var traceI = v460.tracebackI;
      var v1168 = this.nodes;
      introspect(JAM.policy.p26) {
        var v899 = v1168[i$$13]
      }
      introspect(JAM.policy.p26) {
        var v461 = v899[j$$13]
      }
      var traceJ = v461.tracebackJ;
      if (traceI == undefined) {
        traceI = "u";
      }
      if (traceJ == undefined) {
        traceJ = "u";
      }
      var v464 = "(" + i$$13 + "," + j$$13 + ")[" + traceI + "," + traceJ + "]=";
      var v1346 = this.nodes;
      introspect(JAM.policy.p26) {
        var v1170 = v1346[i$$13]
      }
      introspect(JAM.policy.p26) {
        var v901 = v1170[j$$13]
      }
      var output = v464 + v901.value;
      var v466 = outputWindow.document;
      JAM.call(v466.write, v466, [JAM.call(rightNum, null, [output, "", 20, " "], JAM.policy.p41)], JAM.policy.p38);
      j$$13 = j$$13 + 1;
      var v1347 = this.nodes;
      introspect(JAM.policy.p26) {
        var v1171 = v1347[i$$13]
      }
      v468 = j$$13 < v1171.length;
    }
    var v469 = outputWindow.document;
    JAM.call(v469.write, v469, ["\n"], JAM.policy.p22);
    i$$13 = i$$13 + 1;
    v470 = i$$13 < this.nodes.length;
  }
  var v471 = outputWindow.document;
  JAM.call(v471.write, v471, ["\n"], JAM.policy.p22);
  return;
}
function fillMatrix() {
  var i$$14 = 1;
  var v517 = i$$14 < this.nodes.length;
  for (;v517;) {
    var j$$14 = 1;
    var v1348 = this.nodes;
    introspect(JAM.policy.p26) {
      var v1174 = v1348[0]
    }
    var v516 = j$$14 < v1174.length;
    for (;v516;) {
      var a;
      var b;
      var c;
      var v906 = i$$14 == this.nodes.length - 1;
      if (v906) {
        var v1506 = this.nodes;
        introspect(JAM.policy.p26) {
          var v1466 = v1506[0]
        }
        v906 = j$$14 == v1466.length - 1;
      }
      if (v906) {
        if (this.scoreSet.useEndGapRight) {
          var v1351 = this.nodes;
          var v1352 = i$$14 - 1;
          introspect(JAM.policy.p26) {
            var v1177 = v1351[v1352]
          }
          introspect(JAM.policy.p26) {
            var v908 = v1177[j$$14]
          }
          a = v908.value - this.scoreSet.endGap;
        } else {
          var v1353 = this.nodes;
          var v1354 = i$$14 - 1;
          introspect(JAM.policy.p26) {
            var v1178 = v1353[v1354]
          }
          introspect(JAM.policy.p26) {
            var v910 = v1178[j$$14]
          }
          a = v910.value - this.scoreSet.gap;
        }
        if (this.scoreSet.useEndGapBottom) {
          var v1355 = this.nodes;
          introspect(JAM.policy.p26) {
            var v1179 = v1355[i$$14]
          }
          var v1180 = j$$14 - 1;
          introspect(JAM.policy.p26) {
            var v913 = v1179[v1180]
          }
          b = v913.value - this.scoreSet.endGap;
        } else {
          var v1356 = this.nodes;
          introspect(JAM.policy.p26) {
            var v1181 = v1356[i$$14]
          }
          var v1182 = j$$14 - 1;
          introspect(JAM.policy.p26) {
            var v915 = v1181[v1182]
          }
          b = v915.value - this.scoreSet.gap;
        }
      } else {
        if (i$$14 == this.nodes.length - 1) {
          var v1358 = this.nodes;
          var v1359 = i$$14 - 1;
          introspect(JAM.policy.p26) {
            var v1184 = v1358[v1359]
          }
          introspect(JAM.policy.p26) {
            var v918 = v1184[j$$14]
          }
          a = v918.value - this.scoreSet.gap;
          if (this.scoreSet.useEndGapBottom) {
            var v1360 = this.nodes;
            introspect(JAM.policy.p26) {
              var v1185 = v1360[i$$14]
            }
            var v1186 = j$$14 - 1;
            introspect(JAM.policy.p26) {
              var v921 = v1185[v1186]
            }
            b = v921.value - this.scoreSet.endGap;
          } else {
            var v1361 = this.nodes;
            introspect(JAM.policy.p26) {
              var v1187 = v1361[i$$14]
            }
            var v1188 = j$$14 - 1;
            introspect(JAM.policy.p26) {
              var v923 = v1187[v1188]
            }
            b = v923.value - this.scoreSet.gap;
          }
        } else {
          var v1467 = this.nodes;
          introspect(JAM.policy.p26) {
            var v1362 = v1467[0]
          }
          if (j$$14 == v1362.length - 1) {
            if (this.scoreSet.useEndGapRight) {
              var v1363 = this.nodes;
              var v1364 = i$$14 - 1;
              introspect(JAM.policy.p26) {
                var v1190 = v1363[v1364]
              }
              introspect(JAM.policy.p26) {
                var v927 = v1190[j$$14]
              }
              a = v927.value - this.scoreSet.endGap;
            } else {
              var v1365 = this.nodes;
              var v1366 = i$$14 - 1;
              introspect(JAM.policy.p26) {
                var v1191 = v1365[v1366]
              }
              introspect(JAM.policy.p26) {
                var v929 = v1191[j$$14]
              }
              a = v929.value - this.scoreSet.gap;
            }
            var v1367 = this.nodes;
            introspect(JAM.policy.p26) {
              var v1192 = v1367[i$$14]
            }
            var v1193 = j$$14 - 1;
            introspect(JAM.policy.p26) {
              var v931 = v1192[v1193]
            }
            b = v931.value - this.scoreSet.gap;
          } else {
            var v1368 = this.nodes;
            var v1369 = i$$14 - 1;
            introspect(JAM.policy.p26) {
              var v1194 = v1368[v1369]
            }
            introspect(JAM.policy.p26) {
              var v933 = v1194[j$$14]
            }
            a = v933.value - this.scoreSet.gap;
            var v1370 = this.nodes;
            introspect(JAM.policy.p26) {
              var v1195 = v1370[i$$14]
            }
            var v1196 = j$$14 - 1;
            introspect(JAM.policy.p26) {
              var v935 = v1195[v1196]
            }
            b = v935.value - this.scoreSet.gap;
          }
        }
      }
      var v1371 = this.nodes;
      var v1372 = i$$14 - 1;
      introspect(JAM.policy.p26) {
        var v1197 = v1371[v1372]
      }
      var v1198 = j$$14 - 1;
      introspect(JAM.policy.p26) {
        var v937 = v1197[v1198]
      }
      var v503 = v937.value;
      var v938 = this.scoreSet;
      var v1199 = this.M;
      var v1200 = i$$14 - 1;
      introspect(JAM.policy.p26) {
        var v939 = v1199[v1200]
      }
      var v1201 = this.N;
      var v1202 = j$$14 - 1;
      introspect(JAM.policy.p26) {
        var v940 = v1201[v1202]
      }
      c = v503 + JAM.call(v938.getScore, v938, [v939, v940], JAM.policy.p40);
      var v941 = a >= b;
      if (v941) {
        v941 = a >= c;
      }
      if (v941) {
        var v1203 = this.nodes;
        introspect(JAM.policy.p26) {
          var v942 = v1203[i$$14]
        }
        introspect(JAM.policy.p26) {
          var v505 = v942[j$$14]
        }
        v505.value = a;
        var v1204 = this.nodes;
        introspect(JAM.policy.p26) {
          var v943 = v1204[i$$14]
        }
        introspect(JAM.policy.p26) {
          var v506 = v943[j$$14]
        }
        v506.tracebackI = i$$14 - 1;
        var v1205 = this.nodes;
        introspect(JAM.policy.p26) {
          var v944 = v1205[i$$14]
        }
        introspect(JAM.policy.p26) {
          var v507 = v944[j$$14]
        }
        v507.tracebackJ = j$$14;
      } else {
        var v945 = b >= c;
        if (v945) {
          v945 = b >= a;
        }
        if (v945) {
          var v1206 = this.nodes;
          introspect(JAM.policy.p26) {
            var v946 = v1206[i$$14]
          }
          introspect(JAM.policy.p26) {
            var v508 = v946[j$$14]
          }
          v508.value = b;
          var v1207 = this.nodes;
          introspect(JAM.policy.p26) {
            var v947 = v1207[i$$14]
          }
          introspect(JAM.policy.p26) {
            var v509 = v947[j$$14]
          }
          v509.tracebackI = i$$14;
          var v1208 = this.nodes;
          introspect(JAM.policy.p26) {
            var v948 = v1208[i$$14]
          }
          introspect(JAM.policy.p26) {
            var v510 = v948[j$$14]
          }
          v510.tracebackJ = j$$14 - 1;
        } else {
          var v1209 = this.nodes;
          introspect(JAM.policy.p26) {
            var v949 = v1209[i$$14]
          }
          introspect(JAM.policy.p26) {
            var v511 = v949[j$$14]
          }
          v511.value = c;
          var v1210 = this.nodes;
          introspect(JAM.policy.p26) {
            var v950 = v1210[i$$14]
          }
          introspect(JAM.policy.p26) {
            var v512 = v950[j$$14]
          }
          v512.tracebackI = i$$14 - 1;
          var v1211 = this.nodes;
          introspect(JAM.policy.p26) {
            var v951 = v1211[i$$14]
          }
          introspect(JAM.policy.p26) {
            var v513 = v951[j$$14]
          }
          v513.tracebackJ = j$$14 - 1;
        }
      }
      j$$14 = j$$14 + 1;
      var v1373 = this.nodes;
      introspect(JAM.policy.p26) {
        var v1212 = v1373[0]
      }
      v516 = j$$14 < v1212.length;
    }
    i$$14 = i$$14 + 1;
    v517 = i$$14 < this.nodes.length;
  }
  var v1214 = this.nodes;
  var v1215 = this.nodes.length - 1;
  introspect(JAM.policy.p26) {
    var v954 = v1214[v1215]
  }
  var v1469 = this.nodes;
  introspect(JAM.policy.p26) {
    var v1375 = v1469[0]
  }
  var v955 = v1375.length - 1;
  introspect(JAM.policy.p26) {
    var v518 = v954[v955]
  }
  this.score = v518.value;
  return;
}
function alignQuad() {
  var v1610 = JAM.new(Array, [], JAM.policy.p39);
  this.alignedM = v1610;
  var v1611 = JAM.new(Array, [], JAM.policy.p39);
  this.alignedN = v1611;
  var currentI = this.nodes.length - 1;
  var v1217 = this.nodes;
  introspect(JAM.policy.p26) {
    var v957 = v1217[0]
  }
  var currentJ = v957.length - 1;
  var v958 = this.nodes;
  var v959 = this.nodes.length - 1;
  introspect(JAM.policy.p26) {
    var v521 = v958[v959]
  }
  var v1377 = this.nodes;
  introspect(JAM.policy.p26) {
    var v1219 = v1377[0]
  }
  var v522 = v1219.length - 1;
  introspect(JAM.policy.p26) {
    var currentNode = v521[v522]
  }
  var v961 = currentNode.tracebackI != undefined;
  if (v961) {
    v961 = currentNode.tracebackJ != undefined;
  }
  var v537 = v961;
  for (;v537;) {
    var v962 = currentNode.tracebackI == currentI - 1;
    if (v962) {
      v962 = currentNode.tracebackJ == currentJ - 1;
    }
    if (v962) {
      var v523 = this.alignedM;
      var v963 = this.M;
      JAM.call(v523.push, v523, [JAM.call(v963.pop, v963, [], JAM.policy.p39)], JAM.policy.p38);
      var v525 = this.alignedN;
      var v964 = this.N;
      JAM.call(v525.push, v525, [JAM.call(v964.pop, v964, [], JAM.policy.p39)], JAM.policy.p38);
    } else {
      if (currentNode.tracebackJ == currentJ - 1) {
        var v527 = this.alignedM;
        JAM.call(v527.push, v527, ["-"], JAM.policy.p22);
        var v528 = this.alignedN;
        var v967 = this.N;
        JAM.call(v528.push, v528, [JAM.call(v967.pop, v967, [], JAM.policy.p39)], JAM.policy.p38);
      } else {
        var v530 = this.alignedM;
        var v968 = this.M;
        JAM.call(v530.push, v530, [JAM.call(v968.pop, v968, [], JAM.policy.p39)], JAM.policy.p38);
        var v532 = this.alignedN;
        JAM.call(v532.push, v532, ["-"], JAM.policy.p22);
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    var v969 = this.nodes;
    var v970 = currentNode.tracebackI;
    introspect(JAM.policy.p26) {
      var v535 = v969[v970]
    }
    var v536 = currentNode.tracebackJ;
    introspect(JAM.policy.p26) {
      currentNode = v535[v536];
    }
    var v971 = currentNode.tracebackI != undefined;
    if (v971) {
      v971 = currentNode.tracebackJ != undefined;
    }
    v537 = v971;
  }
  var v538 = this.alignedM;
  var v1612 = JAM.call(v538.reverse, v538, [], JAM.policy.p39);
  this.alignedM = v1612;
  var v539 = this.alignedN;
  var v1613 = JAM.call(v539.reverse, v539, [], JAM.policy.p39);
  this.alignedN = v1613;
  return;
}
function getAlignedM() {
  var v540 = this.alignedM;
  return JAM.call(v540.join, v540, [""], JAM.policy.p22);
}
function getAlignedN() {
  var v541 = this.alignedN;
  return JAM.call(v541.join, v541, [""], JAM.policy.p22);
}
function AlignPairQuad() {
  return;
}
JAM.new(ScoreSet, [], JAM.policy.p39);
ScoreSet.prototype.getScore = getScore;
ScoreSet.prototype.setScoreSetParam = setScoreSetParam;
JAM.new(ScoringMatrix, [], JAM.policy.p39);
ScoringMatrix.prototype.scoringMatrix_getScore = scoringMatrix_getScore;
var v545 = Identity;
var v1614 = JAM.new(ScoringMatrix, [], JAM.policy.p39);
v545.prototype = v1614;
Identity.prototype.setMismatch = setMismatch;
Identity.prototype.setMatch = setMatch;
JAM.new(AlignPairLinear, [], JAM.policy.p39);
AlignPairLinear.prototype.align = align;
AlignPairLinear.prototype.path = path;
AlignPairLinear.prototype.setAlignParam = setAlignParam;
AlignPairLinear.prototype.getAlignedM = getAlignedM;
AlignPairLinear.prototype.getAlignedN = getAlignedN;
JAM.new(AlignPairQuad, [], JAM.policy.p39);
AlignPairQuad.prototype.initializeMatrix = initializeMatrix;
AlignPairQuad.prototype.fillMatrix = fillMatrix;
AlignPairQuad.prototype.align = alignQuad;
AlignPairQuad.prototype.getAlignedM = getAlignedM;
AlignPairQuad.prototype.getAlignedN = getAlignedN;
AlignPairQuad.prototype.dumpMatrix = dumpMatrix;
JAM.set(document, "onload", v2);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p22), "onclick", v3);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p22), "onclick", v4)

