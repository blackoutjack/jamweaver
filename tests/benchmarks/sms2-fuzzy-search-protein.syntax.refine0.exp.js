// sms2-fuzzy-search-protein.js
function v4() {
  var v964 = document.forms;
  introspect(JAM.policy.p26) {
    var v756 = v964[0]
  }
  var v431 = v756.elements;
  introspect(JAM.policy.p26) {
    var v5 = v431[0]
  }
  v5.value = " ";
  var v965 = document.forms;
  introspect(JAM.policy.p26) {
    var v757 = v965[0]
  }
  var v432 = v757.elements;
  introspect(JAM.policy.p26) {
    var v6 = v432[4]
  }
  v6.value = " ";
  return;
}
function v3() {
  try {
    JAM.call(fuzzySearchProtein, null, [document], JAM.policy.p38);
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
      var v1071 = arrayOfTitles[i$$1]
    }
    var v758 = JAM.call(v1071.search, v1071, [/\S/], JAM.policy.p38) == -1;
    if (!v758) {
      introspect(JAM.policy.p26) {
        var v1072 = arrayOfSequences[i$$1]
      }
      v758 = JAM.call(v1072.search, v1072, [/\S/], JAM.policy.p38) == -1;
    }
    var v436 = v758;
    if (!v436) {
      introspect(JAM.policy.p26) {
        var v969 = arrayOfSequences[i$$1]
      }
      v436 = v969.length != lengthOfAlign;
    }
    if (v436) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$1 = i$$1 + 1;
    v12 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1073 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p38) == -1;
  if (!v1073) {
    v1073 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p38) == -1;
  }
  var v970 = v1073;
  if (!v970) {
    v970 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p38) == -1;
  }
  var v761 = v970;
  if (!v761) {
    v761 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p38) == -1;
  }
  var v438 = v761;
  if (!v438) {
    v438 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p38) == -1;
  }
  if (v438) {
    JAM.call(alert, null, ["The codon table has been entered incorrectly."], JAM.policy.p22);
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v764 = formElement.value;
  if (JAM.call(v764.search, v764, [/\S/], JAM.policy.p38) == -1) {
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
      var v765 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(v765.search, v765, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v766 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(moreExpressionCheck, null, [v766], JAM.policy.p38) == false) {
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
      var v973 = arrayOfPatterns[j]
    }
    var v445 = JAM.call(v973.match, v973, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v1239 = eval("introspect(JAM.policy.pFull) { " + v445 + " }")
    } else {
      var v1239 = JAM.call(eval, null, [v445])
    }
    introspect(JAM.policy.p27) {
      v20[v21] = v1239;
    }
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAM.policy.p26) {
      var v768 = arrayOfPatterns[j]
    }
    var v446 = JAM.call(v768.match, v768, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v1240 = JAM.call(v446.toString, v446, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v22[v23] = v1240;
    }
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAM.policy.p26) {
      var v447 = geneticCodeMatchResult[j]
    }
    var v1241 = JAM.call(v447.replace, v447, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v24[v25] = v1241;
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
        var v770 = geneticCodeMatchExp[j]
      }
      if (JAM.call(codon.search, codon, [v770], JAM.policy.p38) != -1) {
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
      var v772 = arrayOfPatterns$$1[z$$3]
    }
    if (JAM.call(v772.search, v772, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p38) != -1) {
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
      var v773 = arrayOfPatterns$$1[i$$3]
    }
    var re = JAM.new(RegExp, ["[" + v773 + "]", "gi"], JAM.policy.p41);
    var j$$1 = i$$3 + 1;
    var v38 = j$$1 < arrayOfPatterns$$1.length;
    for (;v38;) {
      introspect(JAM.policy.p26) {
        var v774 = arrayOfPatterns$$1[j$$1]
      }
      if (JAM.call(v774.search, v774, [re], JAM.policy.p38) != -1) {
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
      var v775 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(v775.search, v775, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v776 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(moreExpressionCheck, null, [v776], JAM.policy.p38) == false) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$4 = z$$4 + 1;
    v42 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v974 = JAM.call(getSequenceFromFasta, null, [text$$7], JAM.policy.p38);
  if (JAM.call(v974.replace, v974, [/[^A-Za-z]/g, ""], JAM.policy.p41).length > maxInput) {
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
      var v778 = alignArray[i$$4]
    }
    if (JAM.call(v778.search, v778, [/[^\s]+\s/], JAM.policy.p38) == -1) {
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
      var v975 = arrayOfPatterns$$3[j$$2]
    }
    var v494 = JAM.call(v975.match, v975, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v1242 = eval("introspect(JAM.policy.pFull) { " + v494 + " }")
    } else {
      var v1242 = JAM.call(eval, null, [v494])
    }
    introspect(JAM.policy.p27) {
      v73[v74] = v1242;
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
      var v780 = arrayOfPatterns$$4[j$$3]
    }
    var v497 = JAM.call(v780.match, v780, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v1243 = JAM.call(v497.toString, v497, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v77[v78] = v1243;
    }
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAM.policy.p26) {
      var v498 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1244 = JAM.call(v498.replace, v498, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v79[v80] = v1244;
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
  var v1210 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p38) != -1;
  if (!v1210) {
    v1210 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v1200 = v1210;
  if (!v1200) {
    v1200 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p38) != -1;
  }
  var v1189 = v1200;
  if (!v1189) {
    v1189 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v1174 = v1189;
  if (!v1174) {
    v1174 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p38) != -1;
  }
  var v1155 = v1174;
  if (!v1155) {
    v1155 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p38) != -1;
  }
  var v1129 = v1155;
  if (!v1129) {
    v1129 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p38) != -1;
  }
  var v1076 = v1129;
  if (!v1076) {
    v1076 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p38) != -1;
  }
  var v976 = v1076;
  if (!v976) {
    v976 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p38) != -1;
  }
  var v782 = v976;
  if (!v782) {
    v782 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p38) != -1;
  }
  var v526 = v782;
  if (!v526) {
    v526 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p38) != -1;
  }
  if (v526) {
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
    var v536 = testArray[0]
  }
  if (v536 != testString) {
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
  var v987 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p38) == -1;
  if (!v987) {
    v987 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p38) == -1;
  }
  var v793 = v987;
  if (!v793) {
    v793 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p38) == -1;
  }
  var v541 = v793;
  if (!v541) {
    v541 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v541) {
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
  var v990 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v990) {
    v990 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v796 = v990;
  if (!v796) {
    v796 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v546 = v796;
  if (!v546) {
    v546 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v546) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v993 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v993) {
    v993 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v799 = v993;
  if (!v799) {
    v799 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v547 = v799;
  if (!v547) {
    v547 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v547) {
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
  var v996 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p38) == -1;
  if (!v996) {
    v996 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p38) == -1;
  }
  var v802 = v996;
  if (!v802) {
    v802 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p38) == -1;
  }
  var v549 = v802;
  if (!v549) {
    v549 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v549) {
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
    var v554 = adjustment < 0;
    if (v554) {
      v554 = adjusted >= 0;
    }
    if (v554) {
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
  var v813 = sequence$$13.length <= firstIndexToMutate;
  if (!v813) {
    v813 = lastIndexToMutate < 0;
  }
  var v571 = v813;
  if (!v571) {
    v571 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v571) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for (;v220;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * maxNum], JAM.policy.p38);
    var v573 = randNum < firstIndexToMutate;
    if (!v573) {
      v573 = randNum > lastIndexToMutate;
    }
    if (v573) {
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
        var v577 = components$$1[componentsIndex]
      }
      if (v577 != currentChar) {
        needNewChar = false;
      }
    }
    var v578 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p24);
    introspect(JAM.policy.p26) {
      var v579 = components$$1[componentsIndex]
    }
    sequence$$13 = v578 + v579 + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p40);
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
      var v588 = arrayOfItems[i$$9]
    }
    matchExp = JAM.call(v588.match, v588, [/\/.+\//], JAM.policy.p38) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v1005 = arrayOfItems[i$$9]
    }
    var v819 = JAM.call(v1005.match, v1005, [/\)\D*\d+/], JAM.policy.p38);
    var v589 = JAM.call(v819.toString, v819, [], JAM.policy.p39);
    cutDistance = JAM.call(parseFloat, null, [JAM.call(v589.replace, v589, [/\)\D*/, ""], JAM.policy.p41)], JAM.policy.p38);
    var v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    for (;v244;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v590 = matchPosition >= lowerLimit;
      if (v590) {
        v590 = matchPosition < upperLimit;
      }
      if (v590) {
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
    var v1162 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p26) {
      var v1207 = arrayOfItems[i$$9]
    }
    var v1196 = JAM.call(v1207.match, v1207, [/\([^\(]+\)/], JAM.policy.p38);
    var v1182 = JAM.call(v1196.toString, v1196, [], JAM.policy.p39);
    JAM.call(v250.write, v250, [v1162 + JAM.call(v1182.replace, v1182, [/\(|\)/g, ""], JAM.policy.p41) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p38);
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
      var v599 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = JAM.call(v599.match, v599, [/\/[^\/]+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p38) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p38).length;
    }
    var percentage = 0;
    var v823 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v1097 = arrayOfItems$$1[i$$10]
    }
    if (v823 - JAM.call(parseFloat, null, [JAM.call(v1097.match, v1097, [/\d+/], JAM.policy.p38)], JAM.policy.p38) > 0) {
      var v260 = 100 * tempNumber;
      var v602 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v1009 = arrayOfItems$$1[i$$10]
      }
      percentage = v260 / (v602 - JAM.call(parseFloat, null, [JAM.call(v1009.match, v1009, [/\d+/], JAM.policy.p38)], JAM.policy.p38));
    }
    var v263 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v1208 = arrayOfItems$$1[i$$10]
    }
    var v1197 = JAM.call(v1208.match, v1208, [/\([^\(]+\)\b/], JAM.policy.p38);
    var v1183 = JAM.call(v1197.toString, v1197, [], JAM.policy.p39);
    JAM.call(v263.write, v263, ["<tr><td>" + JAM.call(v1183.replace, v1183, [/\(|\)/g, ""], JAM.policy.p41) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p25) + "</td></tr>\n"], JAM.policy.p38);
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
function fuzzySearchProtein(theDocument) {
  var targetSequence = "";
  var targetTitle = "";
  var querySequence = "";
  var queryTitle = "";
  var maxTarget = 2E3;
  var maxQuery = 30;
  if (JAM.call(testScript, null, [], JAM.policy.p39) == false) {
    return false;
  }
  var v1198 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1184 = v1198[0]
  }
  var v1165 = v1184.elements;
  introspect(JAM.policy.p26) {
    var v1139 = v1165[0]
  }
  var v1011 = JAM.call(checkFormElement, null, [v1139], JAM.policy.p38) == false;
  if (!v1011) {
    var v1209 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1199 = v1209[0]
    }
    var v1185 = v1199.elements;
    introspect(JAM.policy.p26) {
      var v1166 = v1185[0]
    }
    v1011 = JAM.call(checkSequenceLength, null, [v1166.value, maxTarget], JAM.policy.p40) == false;
  }
  var v828 = v1011;
  if (!v828) {
    var v1186 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1167 = v1186[0]
    }
    var v1141 = v1167.elements;
    introspect(JAM.policy.p26) {
      var v1102 = v1141[1]
    }
    v828 = JAM.call(checkFormElement, null, [v1102], JAM.policy.p38) == false;
  }
  var v611 = v828;
  if (!v611) {
    var v1187 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1168 = v1187[0]
    }
    var v1142 = v1168.elements;
    introspect(JAM.policy.p26) {
      var v1103 = v1142[1]
    }
    v611 = JAM.call(checkSequenceLength, null, [v1103.value, maxQuery], JAM.policy.p40) == false;
  }
  if (v611) {
    return false;
  }
  var v1143 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1104 = v1143[0]
  }
  var v1015 = v1104.elements;
  introspect(JAM.policy.p26) {
    var v831 = v1015[5]
  }
  var v612 = v831.options;
  var v1144 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1105 = v1144[0]
  }
  var v1016 = v1105.elements;
  introspect(JAM.policy.p26) {
    var v832 = v1016[5]
  }
  var v613 = v832.selectedIndex;
  introspect(JAM.policy.p26) {
    var v278 = v612[v613]
  }
  var MATRIX = v278.value;
  var v1169 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1145 = v1169[0]
  }
  var v1106 = v1145.elements;
  introspect(JAM.policy.p26) {
    var v1017 = v1106[6]
  }
  var v833 = v1017.options;
  var v1170 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1146 = v1170[0]
  }
  var v1107 = v1146.elements;
  introspect(JAM.policy.p26) {
    var v1018 = v1107[6]
  }
  var v834 = v1018.selectedIndex;
  introspect(JAM.policy.p26) {
    var v614 = v833[v834]
  }
  var GAP_PENALTY = JAM.call(parseInt, null, [v614.value], JAM.policy.p38);
  var v1171 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1147 = v1171[0]
  }
  var v1108 = v1147.elements;
  introspect(JAM.policy.p26) {
    var v1019 = v1108[7]
  }
  var v835 = v1019.options;
  var v1172 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1148 = v1172[0]
  }
  var v1109 = v1148.elements;
  introspect(JAM.policy.p26) {
    var v1020 = v1109[7]
  }
  var v836 = v1020.selectedIndex;
  introspect(JAM.policy.p26) {
    var v615 = v835[v836]
  }
  var HITS = JAM.call(parseInt, null, [v615.value], JAM.policy.p38);
  JAM.call(openWindow, null, ["Fuzzy Protein DNA"], JAM.policy.p22);
  JAM.call(openPre, null, [], JAM.policy.p39);
  var v1110 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1021 = v1110[0]
  }
  var v837 = v1021.elements;
  introspect(JAM.policy.p26) {
    var v616 = v837[0]
  }
  targetSequence = JAM.call(getSequenceFromFasta, null, [v616.value], JAM.policy.p38);
  targetSequence = JAM.call(removeNonProtein, null, [targetSequence], JAM.policy.p38);
  var v1111 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1022 = v1111[0]
  }
  var v838 = v1022.elements;
  introspect(JAM.policy.p26) {
    var v617 = v838[0]
  }
  targetTitle = JAM.call(getTitleFromFasta, null, [v617.value], JAM.policy.p38);
  var v1112 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1023 = v1112[0]
  }
  var v839 = v1023.elements;
  introspect(JAM.policy.p26) {
    var v618 = v839[1]
  }
  querySequence = JAM.call(getSequenceFromFasta, null, [v618.value], JAM.policy.p38);
  querySequence = JAM.call(removeNonProtein, null, [querySequence], JAM.policy.p38);
  queryTitle = "query";
  var v284 = outputWindow.document;
  JAM.call(v284.write, v284, [JAM.call(getFuzzySearchTitle, null, [targetTitle, targetSequence, queryTitle, querySequence], JAM.policy.p40)], JAM.policy.p38);
  if (JAM.call(targetSequence.search, targetSequence, [/./], JAM.policy.p38) != -1) {
    targetSequence = JAM.call(targetSequence.match, targetSequence, [/./g], JAM.policy.p38);
  }
  if (JAM.call(querySequence.search, querySequence, [/./], JAM.policy.p38) != -1) {
    querySequence = JAM.call(querySequence.match, querySequence, [/./g], JAM.policy.p38);
  }
  if (targetSequence.length == 0) {
    JAM.call(alert, null, ["The sequence contains no protein residues."], JAM.policy.p22);
    return false;
  }
  if (querySequence.length == 0) {
    JAM.call(alert, null, ["The query sequence contains no protein residues."], JAM.policy.p22);
    return false;
  }
  JAM.call(_fuzzySearchProtein, null, [queryTitle, querySequence, targetTitle, targetSequence, MATRIX, GAP_PENALTY, HITS], JAM.policy.p40);
  JAM.call(closePre, null, [], JAM.policy.p39);
  JAM.call(closeWindow, null, [], JAM.policy.p39);
  return true;
}
function _fuzzySearchProtein(queryTitle$$1, querySequence$$1, targetTitle$$1, targetSequence$$1, matrix, gapPenalty, hits) {
  var scoringMatrix;
  if (matrix == "pam30") {
    scoringMatrix = JAM.new(Pam30, [], JAM.policy.p39);
  } else {
    if (matrix == "pam70") {
      scoringMatrix = JAM.new(Pam70, [], JAM.policy.p39);
    } else {
      if (matrix == "blosum80") {
        scoringMatrix = JAM.new(Blosum80, [], JAM.policy.p39);
      } else {
        if (matrix == "blosum62") {
          scoringMatrix = JAM.new(Blosum62, [], JAM.policy.p39);
        } else {
          if (matrix == "blosum45") {
            scoringMatrix = JAM.new(Blosum45, [], JAM.policy.p39);
          }
        }
      }
    }
  }
  var scoreSet = JAM.new(ScoreSet, [], JAM.policy.p39);
  JAM.call(scoreSet.setScoreSetParam, scoreSet, [scoringMatrix, gapPenalty, hits], JAM.policy.p40);
  var fuzzySearch = JAM.new(FuzzySearch, [], JAM.policy.p39);
  JAM.call(fuzzySearch.initializeMatrix, fuzzySearch, [querySequence$$1, targetSequence$$1, scoreSet], JAM.policy.p40);
  JAM.call(fuzzySearch.search, fuzzySearch, [], JAM.policy.p39);
  hits = JAM.call(fuzzySearch.getHits, fuzzySearch, [], JAM.policy.p39);
  if (hits.length > 0) {
    var i$$11 = 0;
    var v305 = i$$11 < hits.length;
    for (;v305;) {
      var v295 = outputWindow.document;
      var v1113 = ">" + queryTitle$$1 + " from ";
      introspect(JAM.policy.p26) {
        var v1150 = hits[i$$11]
      }
      var v840 = v1113 + v1150.startM + " to ";
      introspect(JAM.policy.p26) {
        var v1025 = hits[i$$11]
      }
      JAM.call(v295.write, v295, [v840 + v1025.endM + "\n"], JAM.policy.p38);
      var v297 = outputWindow.document;
      introspect(JAM.policy.p26) {
        var v842 = hits[i$$11]
      }
      JAM.call(v297.write, v297, [v842.sequenceM + "\n"], JAM.policy.p38);
      var v299 = outputWindow.document;
      var v1115 = ">" + targetTitle$$1 + " from ";
      introspect(JAM.policy.p26) {
        var v1152 = hits[i$$11]
      }
      var v843 = v1115 + v1152.startN + " to ";
      introspect(JAM.policy.p26) {
        var v1027 = hits[i$$11]
      }
      JAM.call(v299.write, v299, [v843 + v1027.endN + "\n"], JAM.policy.p38);
      var v301 = outputWindow.document;
      introspect(JAM.policy.p26) {
        var v845 = hits[i$$11]
      }
      JAM.call(v301.write, v301, [v845.sequenceN + "\n"], JAM.policy.p38);
      var v303 = outputWindow.document;
      introspect(JAM.policy.p26) {
        var v1028 = hits[i$$11]
      }
      JAM.call(v303.write, v303, ["Score: " + v1028.score + "\n\n"], JAM.policy.p38);
      i$$11 = i$$11 + 1;
      v305 = i$$11 < hits.length;
    }
  } else {
    var v306 = outputWindow.document;
    JAM.call(v306.write, v306, ["No hits were obtained.\n\n"], JAM.policy.p22);
  }
  return;
}
function getScore(r1$$1, r2) {
  var v308 = this.scoringMatrix;
  return JAM.call(v308.scoringMatrix_getScore, v308, [r1$$1, r2], JAM.policy.p40);
}
function setScoreSetParam(scoringMatrix$$1, gapPenalty$$1, hits$$1) {
  this.scoringMatrix = scoringMatrix$$1;
  this.gap = gapPenalty$$1;
  this.hits = hits$$1;
  return;
}
function ScoreSet() {
  return;
}
function scoringMatrix_getScore(r1$$2, r2$$1) {
  r1$$2 = JAM.call(r1$$2.toLowerCase, r1$$2, [], JAM.policy.p39);
  r2$$1 = JAM.call(r2$$1.toLowerCase, r2$$1, [], JAM.policy.p39);
  var v847 = this.scoreHash;
  var v848 = r1$$2 + r2$$1;
  introspect(JAM.policy.p26) {
    var v631 = v847[v848]
  }
  if (v631 == null) {
    throw "Unrecognized residue pair: " + r1$$2 + ", " + r2$$1 + ".";
  } else {
    var v310 = this.scoreHash;
    var v311 = r1$$2 + r2$$1;
    introspect(JAM.policy.p26) {
      return v310[v311];
    }
  }
  return;
}
function scoringMatrix_fillHash(matrix$$1) {
  introspect(JAM.policy.p26) {
    var v313 = matrix$$1[0]
  }
  var cols = JAM.call(v313.split, v313, [/\s+/], JAM.policy.p38);
  var cells;
  var i$$12 = 1;
  var v318 = i$$12 < matrix$$1.length;
  for (;v318;) {
    introspect(JAM.policy.p26) {
      var v314 = matrix$$1[i$$12]
    }
    cells = JAM.call(v314.split, v314, [/\s+/], JAM.policy.p38);
    var j$$10 = 1;
    var v317 = j$$10 < cols.length + 1;
    for (;v317;) {
      var v315 = this.scoreHash;
      introspect(JAM.policy.p26) {
        var v851 = cells[0]
      }
      var v635 = JAM.call(v851.toLowerCase, v851, [], JAM.policy.p39);
      var v1029 = j$$10 - 1;
      introspect(JAM.policy.p26) {
        var v852 = cols[v1029]
      }
      var v316 = v635 + JAM.call(v852.toLowerCase, v852, [], JAM.policy.p39);
      introspect(JAM.policy.p26) {
        var v637 = cells[j$$10]
      }
      var v1245 = JAM.call(parseInt, null, [v637], JAM.policy.p38);
      JAM.set(v315, v316, v1245, JAM.policy.p27);
      j$$10 = j$$10 + 1;
      v317 = j$$10 < cols.length + 1;
    }
    i$$12 = i$$12 + 1;
    v318 = i$$12 < matrix$$1.length;
  }
  return;
}
function ScoringMatrix() {
  this.scoreHash = {};
  return;
}
function Blosum62() {
  var matrix$$2 = JAM.new(Array, ["A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  4 -1 -2 -2  0 -1 -1  0 -2 -1 -1 -1 -1 -2 -1  1  0 -3 -2  0", "R -1  5  0 -2 -3  1  0 -2  0 -3 -2  2 -1 -3 -2 -1 -1 -3 -2 -3", "N -2  0  6  1 -3  0  0  0  1 -3 -3  0 -2 -3 -2  1  0 -4 -2 -3", "D -2 -2  1  6 -3  0  2 -1 -1 -3 -4 -1 -3 -3 -1  0 -1 -4 -3 -3", "C  0 -3 -3 -3  9 -3 -4 -3 -3 -1 -1 -3 -1 -2 -3 -1 -1 -2 -2 -1", "Q -1  1  0  0 -3  5  2 -2  0 -3 -2  1  0 -3 -1  0 -1 -2 -1 -2", "E -1  0  0  2 -4  2  5 -2  0 -3 -3  1 -2 -3 -1  0 -1 -3 -2 -2", 
  "G  0 -2  0 -1 -3 -2 -2  6 -2 -4 -4 -2 -3 -3 -2  0 -2 -2 -3 -3", "H -2  0  1 -1 -3  0  0 -2  8 -3 -3 -1 -2 -1 -2 -1 -2 -2  2 -3", "I -1 -3 -3 -3 -1 -3 -3 -4 -3  4  2 -3  1  0 -3 -2 -1 -3 -1  3", "L -1 -2 -3 -4 -1 -2 -3 -4 -3  2  4 -2  2  0 -3 -2 -1 -2 -1  1", "K -1  2  0 -1 -3  1  1 -2 -1 -3 -2  5 -1 -3 -1  0 -1 -3 -2 -2", "M -1 -1 -2 -3 -1  0 -2 -3 -2  1  2 -1  5  0 -2 -1 -1 -1 -1  1", "F -2 -3 -3 -3 -2 -3 -3 -3 -1  0  0 -3  0  6 -4 -2 -2  1  3 -1", "P -1 -2 -2 -1 -3 -1 -1 -2 -2 -3 -3 -1 -2 -4  7 -1 -1 -4 -3 -2", 
  "S  1 -1  1  0 -1  0  0  0 -1 -2 -2  0 -1 -2 -1  4  1 -3 -2 -2", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -2 -1  1  5 -2 -2  0", "W -3 -3 -4 -4 -2 -2 -3 -2 -2 -3 -2 -3 -1  1 -4 -3 -2 11  2 -3", "Y -2 -2 -2 -3 -2 -1 -2 -3  2 -1 -1 -2 -1  3 -3 -2 -2  2  7 -1", "V  0 -3 -3 -3 -1 -2 -2 -3 -3  3  1 -2  1 -1 -2 -2  0 -3 -1  4"], JAM.policy.p23);
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$2], JAM.policy.p38);
  return;
}
function Blosum45() {
  var matrix$$3 = JAM.new(Array, ["A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -1 -2 -1 -1 -1  0 -2 -1 -1 -1 -1 -2 -1  1  0 -2 -2  0", "R -2  7  0 -1 -3  1  0 -2  0 -3 -2  3 -1 -2 -2 -1 -1 -2 -1 -2", "N -1  0  6  2 -2  0  0  0  1 -2 -3  0 -2 -2 -2  1  0 -4 -2 -3", "D -2 -1  2  7 -3  0  2 -1  0 -4 -3  0 -3 -4 -1  0 -1 -4 -2 -3", "C -1 -3 -2 -3 12 -3 -3 -3 -3 -3 -2 -3 -2 -2 -4 -1 -1 -5 -3 -1", "Q -1  1  0  0 -3  6  2 -2  1 -2 -2  1  0 -4 -1  0 -1 -2 -1 -3", "E -1  0  0  2 -3  2  6 -2  0 -3 -2  1 -2 -3  0  0 -1 -3 -2 -3", 
  "G  0 -2  0 -1 -3 -2 -2  7 -2 -4 -3 -2 -2 -3 -2  0 -2 -2 -3 -3", "H -2  0  1  0 -3  1  0 -2 10 -3 -2 -1  0 -2 -2 -1 -2 -3  2 -3", "I -1 -3 -2 -4 -3 -2 -3 -4 -3  5  2 -3  2  0 -2 -2 -1 -2  0  3", "L -1 -2 -3 -3 -2 -2 -2 -3 -2  2  5 -3  2  1 -3 -3 -1 -2  0  1", "K -1  3  0  0 -3  1  1 -2 -1 -3 -3  5 -1 -3 -1 -1 -1 -2 -1 -2", "M -1 -1 -2 -3 -2  0 -2 -2  0  2  2 -1  6  0 -2 -2 -1 -2  0  1", "F -2 -2 -2 -4 -2 -4 -3 -3 -2  0  1 -3  0  8 -3 -2 -1  1  3  0", "P -1 -2 -2 -1 -4 -1  0 -2 -2 -2 -3 -1 -2 -3  9 -1 -1 -3 -3 -3", 
  "S  1 -1  1  0 -1  0  0  0 -1 -2 -3 -1 -2 -2 -1  4  2 -4 -2 -1", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -1 -1  2  5 -3 -1  0", "W -2 -2 -4 -4 -5 -2 -3 -2 -3 -2 -2 -2 -2  1 -3 -4 -3 15  3 -3", "Y -2 -1 -2 -2 -3 -1 -2 -3  2  0  0 -1  0  3 -3 -2 -1  3  8 -1", "V  0 -2 -3 -3 -1 -3 -3 -3 -3  3  1 -2  1  0 -3 -1  0 -3 -1  5"], JAM.policy.p23);
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$3], JAM.policy.p38);
  return;
}
function Blosum80() {
  var matrix$$4 = JAM.new(Array, ["A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -2 -2 -1 -1 -1  0 -2 -2 -2 -1 -1 -3 -1  1  0 -3 -2  0", "R -2  6 -1 -2 -4  1 -1 -3  0 -3 -3  2 -2 -4 -2 -1 -1 -4 -3 -3", "N -2 -1  6  1 -3  0 -1 -1  0 -4 -4  0 -3 -4 -3  0  0 -4 -3 -4", "D -2 -2  1  6 -4 -1  1 -2 -2 -4 -5 -1 -4 -4 -2 -1 -1 -6 -4 -4", "C -1 -4 -3 -4  9 -4 -5 -4 -4 -2 -2 -4 -2 -3 -4 -2 -1 -3 -3 -1", "Q -1  1  0 -1 -4  6  2 -2  1 -3 -3  1  0 -4 -2  0 -1 -3 -2 -3", "E -1 -1 -1  1 -5  2  6 -3  0 -4 -4  1 -2 -4 -2  0 -1 -4 -3 -3", 
  "G  0 -3 -1 -2 -4 -2 -3  6 -3 -5 -4 -2 -4 -4 -3 -1 -2 -4 -4 -4", "H -2  0  0 -2 -4  1  0 -3  8 -4 -3 -1 -2 -2 -3 -1 -2 -3  2 -4", "I -2 -3 -4 -4 -2 -3 -4 -5 -4  5  1 -3  1 -1 -4 -3 -1 -3 -2  3", "L -2 -3 -4 -5 -2 -3 -4 -4 -3  1  4 -3  2  0 -3 -3 -2 -2 -2  1", "K -1  2  0 -1 -4  1  1 -2 -1 -3 -3  5 -2 -4 -1 -1 -1 -4 -3 -3", "M -1 -2 -3 -4 -2  0 -2 -4 -2  1  2 -2  6  0 -3 -2 -1 -2 -2  1", "F -3 -4 -4 -4 -3 -4 -4 -4 -2 -1  0 -4  0  6 -4 -3 -2  0  3 -1", "P -1 -2 -3 -2 -4 -2 -2 -3 -3 -4 -3 -1 -3 -4  8 -1 -2 -5 -4 -3", 
  "S  1 -1  0 -1 -2  0  0 -1 -1 -3 -3 -1 -2 -3 -1  5  1 -4 -2 -2", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -2 -1 -1 -2 -2  1  5 -4 -2  0", "W -3 -4 -4 -6 -3 -3 -4 -4 -3 -3 -2 -4 -2  0 -5 -4 -4 11  2 -3", "Y -2 -3 -3 -4 -3 -2 -3 -4  2 -2 -2 -3 -2  3 -4 -2 -2  2  7 -2", "V  0 -3 -4 -4 -1 -3 -3 -4 -4  3  1 -3  1 -1 -3 -2  0 -3 -2  4"], JAM.policy.p23);
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$4], JAM.policy.p38);
  return;
}
function Pam70() {
  var matrix$$5 = JAM.new(Array, ["A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   5  -4  -2  -1  -4  -2  -1   0  -4  -2  -4  -4  -3  -6   0   1   1  -9  -5  -1", "R  -4   8  -3  -6  -5   0  -5  -6   0  -3  -6   2  -2  -7  -2  -1  -4   0  -7  -5", "N  -2  -3   6   3  -7  -1   0  -1   1  -3  -5   0  -5  -6  -3   1   0  -6  -3  -5", "D  -1  -6   3   6  -9   0   3  -1  -1  -5  -8  -2  -7 -10  -4  -1  -2 -10  -7  -5", "C  -4  -5  -7  -9   9  -9  -9  -6  -5  -4 -10  -9  -9  -8  -5  -1  -5 -11  -2  -4", 
  "Q  -2   0  -1   0  -9   7   2  -4   2  -5  -3  -1  -2  -9  -1  -3  -3  -8  -8  -4", "E  -1  -5   0   3  -9   2   6  -2  -2  -4  -6  -2  -4  -9  -3  -2  -3 -11  -6  -4", "G   0  -6  -1  -1  -6  -4  -2   6  -6  -6  -7  -5  -6  -7  -3   0  -3 -10  -9  -3", "H  -4   0   1  -1  -5   2  -2  -6   8  -6  -4  -3  -6  -4  -2  -3  -4  -5  -1  -4", "I  -2  -3  -3  -5  -4  -5  -4  -6  -6   7   1  -4   1   0  -5  -4  -1  -9  -4   3", "L  -4  -6  -5  -8 -10  -3  -6  -7  -4   1   6  -5   2  -1  -5  -6  -4  -4  -4   0", 
  "K  -4   2   0  -2  -9  -1  -2  -5  -3  -4  -5   6   0  -9  -4  -2  -1  -7  -7  -6", "M  -3  -2  -5  -7  -9  -2  -4  -6  -6   1   2   0  10  -2  -5  -3  -2  -8  -7   0", "F  -6  -7  -6 -10  -8  -9  -9  -7  -4   0  -1  -9  -2   8  -7  -4  -6  -2   4  -5", "P   0  -2  -3  -4  -5  -1  -3  -3  -2  -5  -5  -4  -5  -7   7   0  -2  -9  -9  -3", "S   1  -1   1  -1  -1  -3  -2   0  -3  -4  -6  -2  -3  -4   0   5   2  -3  -5  -3", "T   1  -4   0  -2  -5  -3  -3  -3  -4  -1  -4  -1  -2  -6  -2   2   6  -8  -4  -1", 
  "W  -9   0  -6 -10 -11  -8 -11 -10  -5  -9  -4  -7  -8  -2  -9  -3  -8  13  -3 -10", "Y  -5  -7  -3  -7  -2  -8  -6  -9  -1  -4  -4  -7  -7   4  -9  -5  -4  -3   9  -5", "V  -1  -5  -5  -5  -4  -4  -4  -3  -4   3   0  -6   0  -5  -3  -3  -1 -10  -5   6"], JAM.policy.p23);
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$5], JAM.policy.p38);
  return;
}
function Pam30() {
  var matrix$$6 = JAM.new(Array, ["A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   6  -7  -4  -3  -6  -4  -2  -2  -7  -5  -6  -7  -5  -8  -2   0  -1 -13  -8  -2", "R  -7   8  -6 -10  -8  -2  -9  -9  -2  -5  -8   0  -4  -9  -4  -3  -6  -2 -10  -8", "N  -4  -6   8   2 -11  -3  -2  -3   0  -5  -7  -1  -9  -9  -6   0  -2  -8  -4  -8", "D  -3 -10   2   8 -14  -2   2  -3  -4  -7 -12  -4 -11 -15  -8  -4  -5 -15 -11  -8", "C  -6  -8 -11 -14  10 -14 -14  -9  -7  -6 -15 -14 -13 -13  -8  -3  -8 -15  -4  -6", 
  "Q  -4  -2  -3  -2 -14   8   1  -7   1  -8  -5  -3  -4 -13  -3  -5  -5 -13 -12  -7", "E  -2  -9  -2   2 -14   1   8  -4  -5  -5  -9  -4  -7 -14  -5  -4  -6 -17  -8  -6", "G  -2  -9  -3  -3  -9  -7  -4   6  -9 -11 -10  -7  -8  -9  -6  -2  -6 -15 -14  -5", "H  -7  -2   0  -4  -7   1  -5  -9   9  -9  -6  -6 -10  -6  -4  -6  -7  -7  -3  -6", "I  -5  -5  -5  -7  -6  -8  -5 -11  -9   8  -1  -6  -1  -2  -8  -7  -2 -14  -6   2", "L  -6  -8  -7 -12 -15  -5  -9 -10  -6  -1   7  -8   1  -3  -7  -8  -7  -6  -7  -2", 
  "K  -7   0  -1  -4 -14  -3  -4  -7  -6  -6  -8   7  -2 -14  -6  -4  -3 -12  -9  -9", "M  -5  -4  -9 -11 -13  -4  -7  -8 -10  -1   1  -2  11  -4  -8  -5  -4 -13 -11  -1", "F  -8  -9  -9 -15 -13 -13 -14  -9  -6  -2  -3 -14  -4   9 -10  -6  -9  -4   2  -8", "P  -2  -4  -6  -8  -8  -3  -5  -6  -4  -8  -7  -6  -8 -10   8  -2  -4 -14 -13  -6", "S   0  -3   0  -4  -3  -5  -4  -2  -6  -7  -8  -4  -5  -6  -2   6   0  -5  -7  -6", "T  -1  -6  -2  -5  -8  -5  -6  -6  -7  -2  -7  -3  -4  -9  -4   0   7 -13  -6  -3", 
  "W -13  -2  -8 -15 -15 -13 -17 -15  -7 -14  -6 -12 -13  -4 -14  -5 -13  13  -5 -15", "Y  -8 -10  -4 -11  -4 -12  -8 -14  -3  -6  -7  -9 -11   2 -13  -7  -6  -5  10  -7", "V  -2  -8  -8  -8  -6  -7  -6  -5  -6   2  -2  -9  -1  -8  -6  -6  -3 -15  -7   7"], JAM.policy.p23);
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$6], JAM.policy.p38);
  return;
}
function Node() {
  this.alreadyMatched = false;
  return;
}
function initializeMatrix(sequenceOne$$2, sequenceTwo$$2, scoreSet$$1) {
  this.scoreSet = scoreSet$$1;
  this.M = sequenceOne$$2;
  this.N = sequenceTwo$$2;
  this.score = 0;
  var v1246 = JAM.new(Array, [this.M.length + 1], JAM.policy.p38);
  this.nodes = v1246;
  var i$$13 = 0;
  var v325 = i$$13 < this.nodes.length;
  for (;v325;) {
    var v320 = this.nodes;
    var v321 = i$$13;
    var v1247 = JAM.new(Array, [this.N.length + 1], JAM.policy.p38);
    introspect(JAM.policy.p27) {
      v320[v321] = v1247;
    }
    var j$$11 = 0;
    var v1031 = this.nodes;
    introspect(JAM.policy.p26) {
      var v857 = v1031[i$$13]
    }
    var v324 = j$$11 < v857.length;
    for (;v324;) {
      var v644 = this.nodes;
      introspect(JAM.policy.p26) {
        var v322 = v644[i$$13]
      }
      var v323 = j$$11;
      var v1248 = JAM.new(Node, [], JAM.policy.p39);
      introspect(JAM.policy.p27) {
        v322[v323] = v1248;
      }
      j$$11 = j$$11 + 1;
      var v1032 = this.nodes;
      introspect(JAM.policy.p26) {
        var v858 = v1032[i$$13]
      }
      v324 = j$$11 < v858.length;
    }
    i$$13 = i$$13 + 1;
    v325 = i$$13 < this.nodes.length;
  }
  var v860 = this.nodes;
  introspect(JAM.policy.p26) {
    var v647 = v860[0]
  }
  introspect(JAM.policy.p26) {
    var v326 = v647[0]
  }
  v326.value = 0;
  i$$13 = 1;
  var v330 = i$$13 < this.nodes.length;
  for (;v330;) {
    var v862 = this.nodes;
    introspect(JAM.policy.p26) {
      var v649 = v862[i$$13]
    }
    introspect(JAM.policy.p26) {
      var v327 = v649[0]
    }
    var v1033 = this.nodes;
    var v1034 = i$$13 - 1;
    introspect(JAM.policy.p26) {
      var v863 = v1033[v1034]
    }
    introspect(JAM.policy.p26) {
      var v650 = v863[0]
    }
    v327.value = v650.value;
    var v864 = this.nodes;
    introspect(JAM.policy.p26) {
      var v651 = v864[i$$13]
    }
    introspect(JAM.policy.p26) {
      var v328 = v651[0]
    }
    v328.tracebackI = i$$13 - 1;
    var v865 = this.nodes;
    introspect(JAM.policy.p26) {
      var v652 = v865[i$$13]
    }
    introspect(JAM.policy.p26) {
      var v329 = v652[0]
    }
    v329.tracebackJ = 0;
    i$$13 = i$$13 + 1;
    v330 = i$$13 < this.nodes.length;
  }
  j$$11 = 1;
  var v1035 = this.nodes;
  introspect(JAM.policy.p26) {
    var v867 = v1035[0]
  }
  var v334 = j$$11 < v867.length;
  for (;v334;) {
    var v868 = this.nodes;
    introspect(JAM.policy.p26) {
      var v655 = v868[0]
    }
    introspect(JAM.policy.p26) {
      var v331 = v655[j$$11]
    }
    var v1036 = this.nodes;
    introspect(JAM.policy.p26) {
      var v869 = v1036[0]
    }
    var v870 = j$$11 - 1;
    introspect(JAM.policy.p26) {
      var v656 = v869[v870]
    }
    v331.value = v656.value;
    var v871 = this.nodes;
    introspect(JAM.policy.p26) {
      var v657 = v871[0]
    }
    introspect(JAM.policy.p26) {
      var v332 = v657[j$$11]
    }
    v332.tracebackI = 0;
    var v872 = this.nodes;
    introspect(JAM.policy.p26) {
      var v658 = v872[0]
    }
    introspect(JAM.policy.p26) {
      var v333 = v658[j$$11]
    }
    v333.tracebackJ = j$$11 - 1;
    j$$11 = j$$11 + 1;
    var v1037 = this.nodes;
    introspect(JAM.policy.p26) {
      var v873 = v1037[0]
    }
    v334 = j$$11 < v873.length;
  }
  return;
}
function dumpMatrix() {
  var v335 = outputWindow.document;
  var v660 = "Dynamic programming matrix i=" + this.nodes.length + " and j=";
  var v1039 = this.nodes;
  introspect(JAM.policy.p26) {
    var v875 = v1039[0]
  }
  JAM.call(v335.write, v335, [v660 + v875.length], JAM.policy.p38);
  var v337 = outputWindow.document;
  JAM.call(v337.write, v337, ["\n"], JAM.policy.p22);
  var i$$14 = 0;
  var v348 = i$$14 < this.nodes.length;
  for (;v348;) {
    var j$$12 = 0;
    var v1040 = this.nodes;
    introspect(JAM.policy.p26) {
      var v877 = v1040[i$$14]
    }
    var v346 = j$$12 < v877.length;
    for (;v346;) {
      var v878 = this.nodes;
      introspect(JAM.policy.p26) {
        var v664 = v878[i$$14]
      }
      introspect(JAM.policy.p26) {
        var v338 = v664[j$$12]
      }
      var traceI = v338.tracebackI;
      var v879 = this.nodes;
      introspect(JAM.policy.p26) {
        var v665 = v879[i$$14]
      }
      introspect(JAM.policy.p26) {
        var v339 = v665[j$$12]
      }
      var traceJ = v339.tracebackJ;
      if (traceI == undefined) {
        traceI = "u";
      }
      if (traceJ == undefined) {
        traceJ = "u";
      }
      var v342 = "(" + i$$14 + "," + j$$12 + ")[" + traceI + "," + traceJ + "]=";
      var v1042 = this.nodes;
      introspect(JAM.policy.p26) {
        var v881 = v1042[i$$14]
      }
      introspect(JAM.policy.p26) {
        var v667 = v881[j$$12]
      }
      var output = v342 + v667.value;
      var v344 = outputWindow.document;
      JAM.call(v344.write, v344, [JAM.call(rightNum, null, [output, "", 20, " "], JAM.policy.p41)], JAM.policy.p38);
      j$$12 = j$$12 + 1;
      var v1043 = this.nodes;
      introspect(JAM.policy.p26) {
        var v882 = v1043[i$$14]
      }
      v346 = j$$12 < v882.length;
    }
    var v347 = outputWindow.document;
    JAM.call(v347.write, v347, ["\n"], JAM.policy.p22);
    i$$14 = i$$14 + 1;
    v348 = i$$14 < this.nodes.length;
  }
  var v349 = outputWindow.document;
  JAM.call(v349.write, v349, ["\n"], JAM.policy.p22);
  return;
}
function updateMatrix() {
  var i$$15 = 1;
  var v390 = i$$15 < this.nodes.length;
  for (;v390;) {
    var j$$13 = 1;
    var v1044 = this.nodes;
    introspect(JAM.policy.p26) {
      var v885 = v1044[0]
    }
    var v389 = j$$13 < v885.length;
    for (;v389;) {
      var a;
      var b;
      var c;
      var v1045 = this.nodes;
      introspect(JAM.policy.p26) {
        var v886 = v1045[i$$15]
      }
      introspect(JAM.policy.p26) {
        var v672 = v886[j$$13]
      }
      if (v672.alreadyMatched) {
        a = 0;
        b = 0;
        c = 0;
      } else {
        var v673 = i$$15 == this.nodes.length - 1;
        if (v673) {
          var v1154 = this.nodes;
          introspect(JAM.policy.p26) {
            var v1120 = v1154[0]
          }
          v673 = j$$13 == v1120.length - 1;
        }
        if (v673) {
          var v889 = this.nodes;
          var v890 = i$$15 - 1;
          introspect(JAM.policy.p26) {
            var v674 = v889[v890]
          }
          introspect(JAM.policy.p26) {
            var v350 = v674[j$$13]
          }
          a = v350.value;
          var v891 = this.nodes;
          introspect(JAM.policy.p26) {
            var v675 = v891[i$$15]
          }
          var v676 = j$$13 - 1;
          introspect(JAM.policy.p26) {
            var v351 = v675[v676]
          }
          b = v351.value;
          var v1048 = this.nodes;
          var v1049 = i$$15 - 1;
          introspect(JAM.policy.p26) {
            var v892 = v1048[v1049]
          }
          var v893 = j$$13 - 1;
          introspect(JAM.policy.p26) {
            var v677 = v892[v893]
          }
          var v352 = v677.value;
          var v678 = this.scoreSet;
          var v894 = this.M;
          var v895 = i$$15 - 1;
          introspect(JAM.policy.p26) {
            var v679 = v894[v895]
          }
          var v896 = this.N;
          var v897 = j$$13 - 1;
          introspect(JAM.policy.p26) {
            var v680 = v896[v897]
          }
          c = v352 + JAM.call(v678.getScore, v678, [v679, v680], JAM.policy.p40);
        } else {
          if (i$$15 == this.nodes.length - 1) {
            var v1051 = this.nodes;
            var v1052 = i$$15 - 1;
            introspect(JAM.policy.p26) {
              var v899 = v1051[v1052]
            }
            introspect(JAM.policy.p26) {
              var v682 = v899[j$$13]
            }
            a = v682.value - this.scoreSet.gap;
            var v900 = this.nodes;
            introspect(JAM.policy.p26) {
              var v684 = v900[i$$15]
            }
            var v685 = j$$13 - 1;
            introspect(JAM.policy.p26) {
              var v356 = v684[v685]
            }
            b = v356.value;
            var v1053 = this.nodes;
            var v1054 = i$$15 - 1;
            introspect(JAM.policy.p26) {
              var v901 = v1053[v1054]
            }
            var v902 = j$$13 - 1;
            introspect(JAM.policy.p26) {
              var v686 = v901[v902]
            }
            var v357 = v686.value;
            var v687 = this.scoreSet;
            var v903 = this.M;
            var v904 = i$$15 - 1;
            introspect(JAM.policy.p26) {
              var v688 = v903[v904]
            }
            var v905 = this.N;
            var v906 = j$$13 - 1;
            introspect(JAM.policy.p26) {
              var v689 = v905[v906]
            }
            c = v357 + JAM.call(v687.getScore, v687, [v688, v689], JAM.policy.p40);
          } else {
            var v1121 = this.nodes;
            introspect(JAM.policy.p26) {
              var v1055 = v1121[0]
            }
            if (j$$13 == v1055.length - 1) {
              var v908 = this.nodes;
              var v909 = i$$15 - 1;
              introspect(JAM.policy.p26) {
                var v691 = v908[v909]
              }
              introspect(JAM.policy.p26) {
                var v359 = v691[j$$13]
              }
              a = v359.value;
              var v1056 = this.nodes;
              introspect(JAM.policy.p26) {
                var v910 = v1056[i$$15]
              }
              var v911 = j$$13 - 1;
              introspect(JAM.policy.p26) {
                var v692 = v910[v911]
              }
              b = v692.value - this.scoreSet.gap;
              var v1057 = this.nodes;
              var v1058 = i$$15 - 1;
              introspect(JAM.policy.p26) {
                var v912 = v1057[v1058]
              }
              var v913 = j$$13 - 1;
              introspect(JAM.policy.p26) {
                var v694 = v912[v913]
              }
              var v362 = v694.value;
              var v695 = this.scoreSet;
              var v914 = this.M;
              var v915 = i$$15 - 1;
              introspect(JAM.policy.p26) {
                var v696 = v914[v915]
              }
              var v916 = this.N;
              var v917 = j$$13 - 1;
              introspect(JAM.policy.p26) {
                var v697 = v916[v917]
              }
              c = v362 + JAM.call(v695.getScore, v695, [v696, v697], JAM.policy.p40);
            } else {
              var v1059 = this.nodes;
              var v1060 = i$$15 - 1;
              introspect(JAM.policy.p26) {
                var v918 = v1059[v1060]
              }
              introspect(JAM.policy.p26) {
                var v698 = v918[j$$13]
              }
              a = v698.value - this.scoreSet.gap;
              var v1061 = this.nodes;
              introspect(JAM.policy.p26) {
                var v919 = v1061[i$$15]
              }
              var v920 = j$$13 - 1;
              introspect(JAM.policy.p26) {
                var v700 = v919[v920]
              }
              b = v700.value - this.scoreSet.gap;
              var v1062 = this.nodes;
              var v1063 = i$$15 - 1;
              introspect(JAM.policy.p26) {
                var v921 = v1062[v1063]
              }
              var v922 = j$$13 - 1;
              introspect(JAM.policy.p26) {
                var v702 = v921[v922]
              }
              var v368 = v702.value;
              var v703 = this.scoreSet;
              var v923 = this.M;
              var v924 = i$$15 - 1;
              introspect(JAM.policy.p26) {
                var v704 = v923[v924]
              }
              var v925 = this.N;
              var v926 = j$$13 - 1;
              introspect(JAM.policy.p26) {
                var v705 = v925[v926]
              }
              c = v368 + JAM.call(v703.getScore, v703, [v704, v705], JAM.policy.p40);
            }
          }
        }
      }
      var v706 = a > b;
      if (v706) {
        v706 = a > c;
      }
      if (v706) {
        var v927 = this.nodes;
        introspect(JAM.policy.p26) {
          var v707 = v927[i$$15]
        }
        introspect(JAM.policy.p26) {
          var v374 = v707[j$$13]
        }
        v374.value = a;
        var v928 = this.nodes;
        introspect(JAM.policy.p26) {
          var v708 = v928[i$$15]
        }
        introspect(JAM.policy.p26) {
          var v375 = v708[j$$13]
        }
        v375.tracebackI = i$$15 - 1;
        var v929 = this.nodes;
        introspect(JAM.policy.p26) {
          var v709 = v929[i$$15]
        }
        introspect(JAM.policy.p26) {
          var v376 = v709[j$$13]
        }
        v376.tracebackJ = j$$13;
      } else {
        var v710 = b > c;
        if (v710) {
          v710 = b > a;
        }
        if (v710) {
          var v930 = this.nodes;
          introspect(JAM.policy.p26) {
            var v711 = v930[i$$15]
          }
          introspect(JAM.policy.p26) {
            var v377 = v711[j$$13]
          }
          v377.value = b;
          var v931 = this.nodes;
          introspect(JAM.policy.p26) {
            var v712 = v931[i$$15]
          }
          introspect(JAM.policy.p26) {
            var v378 = v712[j$$13]
          }
          v378.tracebackI = i$$15;
          var v932 = this.nodes;
          introspect(JAM.policy.p26) {
            var v713 = v932[i$$15]
          }
          introspect(JAM.policy.p26) {
            var v379 = v713[j$$13]
          }
          v379.tracebackJ = j$$13 - 1;
        } else {
          var v933 = this.nodes;
          introspect(JAM.policy.p26) {
            var v714 = v933[i$$15]
          }
          introspect(JAM.policy.p26) {
            var v380 = v714[j$$13]
          }
          v380.value = c;
          var v934 = this.nodes;
          introspect(JAM.policy.p26) {
            var v715 = v934[i$$15]
          }
          introspect(JAM.policy.p26) {
            var v381 = v715[j$$13]
          }
          v381.tracebackI = i$$15 - 1;
          var v935 = this.nodes;
          introspect(JAM.policy.p26) {
            var v716 = v935[i$$15]
          }
          introspect(JAM.policy.p26) {
            var v382 = v716[j$$13]
          }
          v382.tracebackJ = j$$13 - 1;
        }
      }
      var v1122 = this.nodes;
      introspect(JAM.policy.p26) {
        var v1064 = v1122[i$$15]
      }
      introspect(JAM.policy.p26) {
        var v936 = v1064[j$$13]
      }
      if (v936.value < 0) {
        var v937 = this.nodes;
        introspect(JAM.policy.p26) {
          var v718 = v937[i$$15]
        }
        introspect(JAM.policy.p26) {
          var v385 = v718[j$$13]
        }
        v385.value = 0;
        var v938 = this.nodes;
        introspect(JAM.policy.p26) {
          var v719 = v938[i$$15]
        }
        introspect(JAM.policy.p26) {
          var v386 = v719[j$$13]
        }
        v386.tracebackI = undefined;
        var v939 = this.nodes;
        introspect(JAM.policy.p26) {
          var v720 = v939[i$$15]
        }
        introspect(JAM.policy.p26) {
          var v387 = v720[j$$13]
        }
        v387.tracebackJ = undefined;
      }
      j$$13 = j$$13 + 1;
      var v1065 = this.nodes;
      introspect(JAM.policy.p26) {
        var v940 = v1065[0]
      }
      v389 = j$$13 < v940.length;
    }
    i$$15 = i$$15 + 1;
    v390 = i$$15 < this.nodes.length;
  }
  var v942 = this.nodes;
  var v943 = this.nodes.length - 1;
  introspect(JAM.policy.p26) {
    var v723 = v942[v943]
  }
  var v1124 = this.nodes;
  introspect(JAM.policy.p26) {
    var v1067 = v1124[0]
  }
  var v724 = v1067.length - 1;
  introspect(JAM.policy.p26) {
    var v391 = v723[v724]
  }
  this.score = v391.value;
  return;
}
function search() {
  var v1249 = JAM.new(Array, [], JAM.policy.p39);
  this.hits = v1249;
  var hitCount = 0;
  var v415 = hitCount < this.scoreSet.hits;
  for (;v415;) {
    JAM.call(this.updateMatrix, this, [], JAM.policy.p39);
    var maxNodeValue = 0;
    var maxNodeI = undefined;
    var maxNodeJ = undefined;
    var i$$16 = 1;
    var v395 = i$$16 < this.nodes.length;
    for (;v395;) {
      var j$$14 = 1;
      var v1068 = this.nodes;
      introspect(JAM.policy.p26) {
        var v947 = v1068[0]
      }
      var v394 = j$$14 < v947.length;
      for (;v394;) {
        var v1125 = this.nodes;
        introspect(JAM.policy.p26) {
          var v1069 = v1125[i$$16]
        }
        introspect(JAM.policy.p26) {
          var v948 = v1069[j$$14]
        }
        if (v948.value > maxNodeValue) {
          var v949 = this.nodes;
          introspect(JAM.policy.p26) {
            var v729 = v949[i$$16]
          }
          introspect(JAM.policy.p26) {
            var v392 = v729[j$$14]
          }
          maxNodeValue = v392.value;
          maxNodeI = i$$16;
          maxNodeJ = j$$14;
        }
        j$$14 = j$$14 + 1;
        var v1070 = this.nodes;
        introspect(JAM.policy.p26) {
          var v950 = v1070[0]
        }
        v394 = j$$14 < v950.length;
      }
      i$$16 = i$$16 + 1;
      v395 = i$$16 < this.nodes.length;
    }
    if (maxNodeValue == 0) {
      break;
    }
    var currentI = maxNodeI;
    var currentJ = maxNodeJ;
    var v732 = this.nodes;
    introspect(JAM.policy.p26) {
      var v397 = v732[maxNodeI]
    }
    introspect(JAM.policy.p26) {
      var currentNode = v397[maxNodeJ]
    }
    var alignedM = JAM.new(Array, [], JAM.policy.p39);
    var alignedN = JAM.new(Array, [], JAM.policy.p39);
    var score = currentNode.value;
    var endM = undefined;
    var endN = undefined;
    var v733 = currentNode.tracebackI != undefined;
    if (v733) {
      v733 = currentNode.tracebackJ != undefined;
    }
    var v412 = v733;
    for (;v412;) {
      var v734 = currentI == 0;
      if (!v734) {
        v734 = currentJ == 0;
      }
      if (v734) {
        break;
      }
      var v735 = currentNode.tracebackI == currentI - 1;
      if (v735) {
        v735 = currentNode.tracebackJ == currentJ - 1;
      }
      if (v735) {
        if (endM == undefined) {
          endM = currentI;
          endN = currentJ;
        }
        var v736 = this.M;
        var v737 = currentI - 1;
        introspect(JAM.policy.p26) {
          var v400 = v736[v737]
        }
        JAM.call(alignedM.push, alignedM, [v400], JAM.policy.p38);
        var v738 = this.N;
        var v739 = currentJ - 1;
        introspect(JAM.policy.p26) {
          var v401 = v738[v739]
        }
        JAM.call(alignedN.push, alignedN, [v401], JAM.policy.p38);
      } else {
        if (currentNode.tracebackJ == currentJ - 1) {
          if (endM != undefined) {
            JAM.call(alignedM.push, alignedM, ["-"], JAM.policy.p22);
            var v742 = this.N;
            var v743 = currentJ - 1;
            introspect(JAM.policy.p26) {
              var v402 = v742[v743]
            }
            JAM.call(alignedN.push, alignedN, [v402], JAM.policy.p38);
          }
        } else {
          if (endM != undefined) {
            var v744 = this.M;
            var v745 = currentI - 1;
            introspect(JAM.policy.p26) {
              var v404 = v744[v745]
            }
            JAM.call(alignedM.push, alignedM, [v404], JAM.policy.p38);
            JAM.call(alignedN.push, alignedN, ["-"], JAM.policy.p22);
          }
        }
      }
      var v959 = this.nodes;
      introspect(JAM.policy.p26) {
        var v746 = v959[currentI]
      }
      introspect(JAM.policy.p26) {
        var v408 = v746[currentJ]
      }
      v408.value = 0;
      var v960 = this.nodes;
      introspect(JAM.policy.p26) {
        var v747 = v960[currentI]
      }
      introspect(JAM.policy.p26) {
        var v409 = v747[currentJ]
      }
      v409.alreadyMatched = true;
      currentI = currentNode.tracebackI;
      currentJ = currentNode.tracebackJ;
      var v748 = this.nodes;
      var v749 = currentNode.tracebackI;
      introspect(JAM.policy.p26) {
        var v410 = v748[v749]
      }
      var v411 = currentNode.tracebackJ;
      introspect(JAM.policy.p26) {
        currentNode = v410[v411];
      }
      var v750 = currentNode.tracebackI != undefined;
      if (v750) {
        v750 = currentNode.tracebackJ != undefined;
      }
      v412 = v750;
    }
    alignedM = JAM.call(alignedM.reverse, alignedM, [], JAM.policy.p39);
    alignedN = JAM.call(alignedN.reverse, alignedN, [], JAM.policy.p39);
    var v413 = this.hits;
    JAM.call(v413.push, v413, [JAM.new(Hit, [JAM.call(alignedM.join, alignedM, [""], JAM.policy.p22), JAM.call(alignedN.join, alignedN, [""], JAM.policy.p22), score, currentI + 1, endM, currentJ + 1, endN], JAM.policy.p40)], JAM.policy.p38);
    hitCount = hitCount + 1;
    v415 = hitCount < this.scoreSet.hits;
  }
  return;
}
function getHits() {
  return this.hits;
}
function FuzzySearch() {
  return;
}
function Hit(sequenceM, sequenceN, score$$1, startM, endM$$1, startN, endN$$1) {
  this.sequenceM = sequenceM;
  this.sequenceN = sequenceN;
  this.score = score$$1;
  this.startM = startM;
  this.endM = endM$$1;
  this.startN = startN;
  this.endN = endN$$1;
  return;
}
JAM.new(ScoreSet, [], JAM.policy.p39);
ScoreSet.prototype.getScore = getScore;
ScoreSet.prototype.setScoreSetParam = setScoreSetParam;
JAM.new(ScoringMatrix, [], JAM.policy.p39);
ScoringMatrix.prototype.scoringMatrix_getScore = scoringMatrix_getScore;
ScoringMatrix.prototype.scoringMatrix_fillHash = scoringMatrix_fillHash;
var v420 = Blosum62;
var v1250 = JAM.new(ScoringMatrix, [], JAM.policy.p39);
v420.prototype = v1250;
var v421 = Blosum45;
var v1251 = JAM.new(ScoringMatrix, [], JAM.policy.p39);
v421.prototype = v1251;
var v422 = Blosum80;
var v1252 = JAM.new(ScoringMatrix, [], JAM.policy.p39);
v422.prototype = v1252;
var v423 = Pam30;
var v1253 = JAM.new(ScoringMatrix, [], JAM.policy.p39);
v423.prototype = v1253;
JAM.new(FuzzySearch, [], JAM.policy.p39);
FuzzySearch.prototype.initializeMatrix = initializeMatrix;
FuzzySearch.prototype.updateMatrix = updateMatrix;
FuzzySearch.prototype.search = search;
FuzzySearch.prototype.getHits = getHits;
FuzzySearch.prototype.dumpMatrix = dumpMatrix;
JAM.set(document, "onload", v2);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p22), "onclick", v3);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p22), "onclick", v4)

