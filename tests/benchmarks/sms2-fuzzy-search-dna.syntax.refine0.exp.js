// sms2-fuzzy-search-dna.js
function v4() {
  var v935 = document.forms;
  introspect(JAM.policy.p26) {
    var v732 = v935[0]
  }
  var v416 = v732.elements;
  introspect(JAM.policy.p26) {
    var v5 = v416[0]
  }
  v5.value = " ";
  var v936 = document.forms;
  introspect(JAM.policy.p26) {
    var v733 = v936[0]
  }
  var v417 = v733.elements;
  introspect(JAM.policy.p26) {
    var v6 = v417[4]
  }
  v6.value = " ";
  return;
}
function v3() {
  try {
    JAM.call(fuzzySearchDna, null, [document], JAM.policy.p38);
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
      var v1043 = arrayOfTitles[i$$1]
    }
    var v734 = JAM.call(v1043.search, v1043, [/\S/], JAM.policy.p38) == -1;
    if (!v734) {
      introspect(JAM.policy.p26) {
        var v1044 = arrayOfSequences[i$$1]
      }
      v734 = JAM.call(v1044.search, v1044, [/\S/], JAM.policy.p38) == -1;
    }
    var v421 = v734;
    if (!v421) {
      introspect(JAM.policy.p26) {
        var v940 = arrayOfSequences[i$$1]
      }
      v421 = v940.length != lengthOfAlign;
    }
    if (v421) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$1 = i$$1 + 1;
    v12 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1045 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p38) == -1;
  if (!v1045) {
    v1045 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p38) == -1;
  }
  var v941 = v1045;
  if (!v941) {
    v941 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p38) == -1;
  }
  var v737 = v941;
  if (!v737) {
    v737 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p38) == -1;
  }
  var v423 = v737;
  if (!v423) {
    v423 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p38) == -1;
  }
  if (v423) {
    JAM.call(alert, null, ["The codon table has been entered incorrectly."], JAM.policy.p22);
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v740 = formElement.value;
  if (JAM.call(v740.search, v740, [/\S/], JAM.policy.p38) == -1) {
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
      var v741 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(v741.search, v741, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v742 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(moreExpressionCheck, null, [v742], JAM.policy.p38) == false) {
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
      var v944 = arrayOfPatterns[j]
    }
    var v430 = JAM.call(v944.match, v944, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v1219 = eval("introspect(JAM.policy.pFull) { " + v430 + " }")
    } else {
      var v1219 = JAM.call(eval, null, [v430])
    }
    introspect(JAM.policy.p27) {
      v20[v21] = v1219;
    }
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAM.policy.p26) {
      var v744 = arrayOfPatterns[j]
    }
    var v431 = JAM.call(v744.match, v744, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v1220 = JAM.call(v431.toString, v431, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v22[v23] = v1220;
    }
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAM.policy.p26) {
      var v432 = geneticCodeMatchResult[j]
    }
    var v1221 = JAM.call(v432.replace, v432, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v24[v25] = v1221;
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
        var v746 = geneticCodeMatchExp[j]
      }
      if (JAM.call(codon.search, codon, [v746], JAM.policy.p38) != -1) {
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
      var v748 = arrayOfPatterns$$1[z$$3]
    }
    if (JAM.call(v748.search, v748, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p38) != -1) {
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
      var v749 = arrayOfPatterns$$1[i$$3]
    }
    var re = JAM.new(RegExp, ["[" + v749 + "]", "gi"], JAM.policy.p41);
    var j$$1 = i$$3 + 1;
    var v38 = j$$1 < arrayOfPatterns$$1.length;
    for (;v38;) {
      introspect(JAM.policy.p26) {
        var v750 = arrayOfPatterns$$1[j$$1]
      }
      if (JAM.call(v750.search, v750, [re], JAM.policy.p38) != -1) {
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
      var v751 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(v751.search, v751, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v752 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(moreExpressionCheck, null, [v752], JAM.policy.p38) == false) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$4 = z$$4 + 1;
    v42 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v945 = JAM.call(getSequenceFromFasta, null, [text$$7], JAM.policy.p38);
  if (JAM.call(v945.replace, v945, [/[^A-Za-z]/g, ""], JAM.policy.p41).length > maxInput) {
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
      var v754 = alignArray[i$$4]
    }
    if (JAM.call(v754.search, v754, [/[^\s]+\s/], JAM.policy.p38) == -1) {
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
      var v946 = arrayOfPatterns$$3[j$$2]
    }
    var v479 = JAM.call(v946.match, v946, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v1222 = eval("introspect(JAM.policy.pFull) { " + v479 + " }")
    } else {
      var v1222 = JAM.call(eval, null, [v479])
    }
    introspect(JAM.policy.p27) {
      v73[v74] = v1222;
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
      var v756 = arrayOfPatterns$$4[j$$3]
    }
    var v482 = JAM.call(v756.match, v756, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v1223 = JAM.call(v482.toString, v482, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v77[v78] = v1223;
    }
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAM.policy.p26) {
      var v483 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1224 = JAM.call(v483.replace, v483, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v79[v80] = v1224;
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
  var v1190 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p38) != -1;
  if (!v1190) {
    v1190 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v1180 = v1190;
  if (!v1180) {
    v1180 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p38) != -1;
  }
  var v1169 = v1180;
  if (!v1169) {
    v1169 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v1154 = v1169;
  if (!v1154) {
    v1154 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p38) != -1;
  }
  var v1131 = v1154;
  if (!v1131) {
    v1131 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p38) != -1;
  }
  var v1103 = v1131;
  if (!v1103) {
    v1103 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p38) != -1;
  }
  var v1048 = v1103;
  if (!v1048) {
    v1048 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p38) != -1;
  }
  var v947 = v1048;
  if (!v947) {
    v947 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p38) != -1;
  }
  var v758 = v947;
  if (!v758) {
    v758 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p38) != -1;
  }
  var v511 = v758;
  if (!v511) {
    v511 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p38) != -1;
  }
  if (v511) {
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
    var v521 = testArray[0]
  }
  if (v521 != testString) {
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
  var v958 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p38) == -1;
  if (!v958) {
    v958 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p38) == -1;
  }
  var v769 = v958;
  if (!v769) {
    v769 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p38) == -1;
  }
  var v526 = v769;
  if (!v526) {
    v526 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v526) {
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
  var v961 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v961) {
    v961 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v772 = v961;
  if (!v772) {
    v772 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v531 = v772;
  if (!v531) {
    v531 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v531) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v964 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v964) {
    v964 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v775 = v964;
  if (!v775) {
    v775 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v532 = v775;
  if (!v532) {
    v532 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v532) {
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
  var v967 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p38) == -1;
  if (!v967) {
    v967 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p38) == -1;
  }
  var v778 = v967;
  if (!v778) {
    v778 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p38) == -1;
  }
  var v534 = v778;
  if (!v534) {
    v534 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v534) {
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
    var v539 = adjustment < 0;
    if (v539) {
      v539 = adjusted >= 0;
    }
    if (v539) {
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
  var v789 = sequence$$13.length <= firstIndexToMutate;
  if (!v789) {
    v789 = lastIndexToMutate < 0;
  }
  var v556 = v789;
  if (!v556) {
    v556 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v556) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for (;v220;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * maxNum], JAM.policy.p38);
    var v558 = randNum < firstIndexToMutate;
    if (!v558) {
      v558 = randNum > lastIndexToMutate;
    }
    if (v558) {
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
        var v562 = components$$1[componentsIndex]
      }
      if (v562 != currentChar) {
        needNewChar = false;
      }
    }
    var v563 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p24);
    introspect(JAM.policy.p26) {
      var v564 = components$$1[componentsIndex]
    }
    sequence$$13 = v563 + v564 + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p40);
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
      var v573 = arrayOfItems[i$$9]
    }
    matchExp = JAM.call(v573.match, v573, [/\/.+\//], JAM.policy.p38) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v976 = arrayOfItems[i$$9]
    }
    var v795 = JAM.call(v976.match, v976, [/\)\D*\d+/], JAM.policy.p38);
    var v574 = JAM.call(v795.toString, v795, [], JAM.policy.p39);
    cutDistance = JAM.call(parseFloat, null, [JAM.call(v574.replace, v574, [/\)\D*/, ""], JAM.policy.p41)], JAM.policy.p38);
    var v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    for (;v244;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v575 = matchPosition >= lowerLimit;
      if (v575) {
        v575 = matchPosition < upperLimit;
      }
      if (v575) {
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
    var v1138 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p26) {
      var v1187 = arrayOfItems[i$$9]
    }
    var v1176 = JAM.call(v1187.match, v1187, [/\([^\(]+\)/], JAM.policy.p38);
    var v1162 = JAM.call(v1176.toString, v1176, [], JAM.policy.p39);
    JAM.call(v250.write, v250, [v1138 + JAM.call(v1162.replace, v1162, [/\(|\)/g, ""], JAM.policy.p41) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p38);
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
      var v584 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = JAM.call(v584.match, v584, [/\/[^\/]+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p38) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p38).length;
    }
    var percentage = 0;
    var v799 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v1069 = arrayOfItems$$1[i$$10]
    }
    if (v799 - JAM.call(parseFloat, null, [JAM.call(v1069.match, v1069, [/\d+/], JAM.policy.p38)], JAM.policy.p38) > 0) {
      var v260 = 100 * tempNumber;
      var v587 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v980 = arrayOfItems$$1[i$$10]
      }
      percentage = v260 / (v587 - JAM.call(parseFloat, null, [JAM.call(v980.match, v980, [/\d+/], JAM.policy.p38)], JAM.policy.p38));
    }
    var v263 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v1188 = arrayOfItems$$1[i$$10]
    }
    var v1177 = JAM.call(v1188.match, v1188, [/\([^\(]+\)\b/], JAM.policy.p38);
    var v1163 = JAM.call(v1177.toString, v1177, [], JAM.policy.p39);
    JAM.call(v263.write, v263, ["<tr><td>" + JAM.call(v1163.replace, v1163, [/\(|\)/g, ""], JAM.policy.p41) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p25) + "</td></tr>\n"], JAM.policy.p38);
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
function fuzzySearchDna(theDocument) {
  var targetSequence = "";
  var targetTitle = "";
  var querySequence = "";
  var queryTitle = "";
  var maxTarget = 2E3;
  var maxQuery = 30;
  if (JAM.call(testScript, null, [], JAM.policy.p39) == false) {
    return false;
  }
  var v1178 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1164 = v1178[0]
  }
  var v1141 = v1164.elements;
  introspect(JAM.policy.p26) {
    var v1113 = v1141[0]
  }
  var v982 = JAM.call(checkFormElement, null, [v1113], JAM.policy.p38) == false;
  if (!v982) {
    var v1189 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1179 = v1189[0]
    }
    var v1165 = v1179.elements;
    introspect(JAM.policy.p26) {
      var v1142 = v1165[0]
    }
    v982 = JAM.call(checkSequenceLength, null, [v1142.value, maxTarget], JAM.policy.p40) == false;
  }
  var v804 = v982;
  if (!v804) {
    var v1166 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1143 = v1166[0]
    }
    var v1115 = v1143.elements;
    introspect(JAM.policy.p26) {
      var v1074 = v1115[1]
    }
    v804 = JAM.call(checkFormElement, null, [v1074], JAM.policy.p38) == false;
  }
  var v596 = v804;
  if (!v596) {
    var v1167 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1144 = v1167[0]
    }
    var v1116 = v1144.elements;
    introspect(JAM.policy.p26) {
      var v1075 = v1116[1]
    }
    v596 = JAM.call(checkSequenceLength, null, [v1075.value, maxQuery], JAM.policy.p40) == false;
  }
  if (v596) {
    return false;
  }
  var v1145 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1117 = v1145[0]
  }
  var v1076 = v1117.elements;
  introspect(JAM.policy.p26) {
    var v986 = v1076[5]
  }
  var v807 = v986.options;
  var v1146 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1118 = v1146[0]
  }
  var v1077 = v1118.elements;
  introspect(JAM.policy.p26) {
    var v987 = v1077[5]
  }
  var v808 = v987.selectedIndex;
  introspect(JAM.policy.p26) {
    var v597 = v807[v808]
  }
  var MATCH_SCORE = JAM.call(parseInt, null, [v597.value], JAM.policy.p38);
  var v1147 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1119 = v1147[0]
  }
  var v1078 = v1119.elements;
  introspect(JAM.policy.p26) {
    var v988 = v1078[6]
  }
  var v809 = v988.options;
  var v1148 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1120 = v1148[0]
  }
  var v1079 = v1120.elements;
  introspect(JAM.policy.p26) {
    var v989 = v1079[6]
  }
  var v810 = v989.selectedIndex;
  introspect(JAM.policy.p26) {
    var v598 = v809[v810]
  }
  var MISMATCH_SCORE = JAM.call(parseInt, null, [v598.value], JAM.policy.p38);
  var v1149 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1121 = v1149[0]
  }
  var v1080 = v1121.elements;
  introspect(JAM.policy.p26) {
    var v990 = v1080[7]
  }
  var v811 = v990.options;
  var v1150 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1122 = v1150[0]
  }
  var v1081 = v1122.elements;
  introspect(JAM.policy.p26) {
    var v991 = v1081[7]
  }
  var v812 = v991.selectedIndex;
  introspect(JAM.policy.p26) {
    var v599 = v811[v812]
  }
  var GAP_PENALTY = JAM.call(parseInt, null, [v599.value], JAM.policy.p38);
  var v1151 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1123 = v1151[0]
  }
  var v1082 = v1123.elements;
  introspect(JAM.policy.p26) {
    var v992 = v1082[8]
  }
  var v813 = v992.options;
  var v1152 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1124 = v1152[0]
  }
  var v1083 = v1124.elements;
  introspect(JAM.policy.p26) {
    var v993 = v1083[8]
  }
  var v814 = v993.selectedIndex;
  introspect(JAM.policy.p26) {
    var v600 = v813[v814]
  }
  var HITS = JAM.call(parseInt, null, [v600.value], JAM.policy.p38);
  JAM.call(openWindow, null, ["Fuzzy Search DNA"], JAM.policy.p22);
  JAM.call(openPre, null, [], JAM.policy.p39);
  var v1084 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v994 = v1084[0]
  }
  var v815 = v994.elements;
  introspect(JAM.policy.p26) {
    var v601 = v815[0]
  }
  targetSequence = JAM.call(getSequenceFromFasta, null, [v601.value], JAM.policy.p38);
  targetSequence = JAM.call(removeNonDna, null, [targetSequence], JAM.policy.p38);
  var v1085 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v995 = v1085[0]
  }
  var v816 = v995.elements;
  introspect(JAM.policy.p26) {
    var v602 = v816[0]
  }
  targetTitle = JAM.call(getTitleFromFasta, null, [v602.value], JAM.policy.p38);
  var v1086 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v996 = v1086[0]
  }
  var v817 = v996.elements;
  introspect(JAM.policy.p26) {
    var v603 = v817[1]
  }
  querySequence = JAM.call(getSequenceFromFasta, null, [v603.value], JAM.policy.p38);
  querySequence = JAM.call(removeNonDna, null, [querySequence], JAM.policy.p38);
  queryTitle = "query";
  var v285 = outputWindow.document;
  JAM.call(v285.write, v285, [JAM.call(getFuzzySearchTitle, null, [targetTitle, targetSequence, queryTitle, querySequence], JAM.policy.p40)], JAM.policy.p38);
  if (JAM.call(targetSequence.search, targetSequence, [/./], JAM.policy.p38) != -1) {
    targetSequence = JAM.call(targetSequence.match, targetSequence, [/./g], JAM.policy.p38);
  }
  if (JAM.call(querySequence.search, querySequence, [/./], JAM.policy.p38) != -1) {
    querySequence = JAM.call(querySequence.match, querySequence, [/./g], JAM.policy.p38);
  }
  if (targetSequence.length == 0) {
    JAM.call(alert, null, ["The sequence contains no DNA bases."], JAM.policy.p22);
    return false;
  }
  if (querySequence.length == 0) {
    JAM.call(alert, null, ["The query sequence contains no DNA bases."], JAM.policy.p22);
    return false;
  }
  JAM.call(_fuzzySearchDna, null, [queryTitle, querySequence, targetTitle, targetSequence, MATCH_SCORE, MISMATCH_SCORE, GAP_PENALTY, HITS], JAM.policy.p40);
  JAM.call(closePre, null, [], JAM.policy.p39);
  JAM.call(closeWindow, null, [], JAM.policy.p39);
  return true;
}
function _fuzzySearchDna(queryTitle$$1, querySequence$$1, targetTitle$$1, targetSequence$$1, matchScore, mismatchScore, gapPenalty, hits) {
  var matrix = JAM.new(Identity, [], JAM.policy.p39);
  JAM.call(matrix.setMatch, matrix, [matchScore], JAM.policy.p38);
  JAM.call(matrix.setMismatch, matrix, [mismatchScore], JAM.policy.p38);
  var scoreSet = JAM.new(ScoreSet, [], JAM.policy.p39);
  JAM.call(scoreSet.setScoreSetParam, scoreSet, [matrix, gapPenalty, hits], JAM.policy.p40);
  var fuzzySearch = JAM.new(FuzzySearch, [], JAM.policy.p39);
  JAM.call(fuzzySearch.initializeMatrix, fuzzySearch, [querySequence$$1, targetSequence$$1, scoreSet], JAM.policy.p40);
  JAM.call(fuzzySearch.search, fuzzySearch, [], JAM.policy.p39);
  hits = JAM.call(fuzzySearch.getHits, fuzzySearch, [], JAM.policy.p39);
  if (hits.length > 0) {
    var i$$11 = 0;
    var v301 = i$$11 < hits.length;
    for (;v301;) {
      var v291 = outputWindow.document;
      var v1087 = ">" + queryTitle$$1 + " from ";
      introspect(JAM.policy.p26) {
        var v1126 = hits[i$$11]
      }
      var v818 = v1087 + v1126.startM + " to ";
      introspect(JAM.policy.p26) {
        var v998 = hits[i$$11]
      }
      JAM.call(v291.write, v291, [v818 + v998.endM + "\n"], JAM.policy.p38);
      var v293 = outputWindow.document;
      introspect(JAM.policy.p26) {
        var v820 = hits[i$$11]
      }
      JAM.call(v293.write, v293, [v820.sequenceM + "\n"], JAM.policy.p38);
      var v295 = outputWindow.document;
      var v1089 = ">" + targetTitle$$1 + " from ";
      introspect(JAM.policy.p26) {
        var v1128 = hits[i$$11]
      }
      var v821 = v1089 + v1128.startN + " to ";
      introspect(JAM.policy.p26) {
        var v1000 = hits[i$$11]
      }
      JAM.call(v295.write, v295, [v821 + v1000.endN + "\n"], JAM.policy.p38);
      var v297 = outputWindow.document;
      introspect(JAM.policy.p26) {
        var v823 = hits[i$$11]
      }
      JAM.call(v297.write, v297, [v823.sequenceN + "\n"], JAM.policy.p38);
      var v299 = outputWindow.document;
      introspect(JAM.policy.p26) {
        var v1001 = hits[i$$11]
      }
      JAM.call(v299.write, v299, ["Score: " + v1001.score + "\n\n"], JAM.policy.p38);
      i$$11 = i$$11 + 1;
      v301 = i$$11 < hits.length;
    }
  } else {
    var v302 = outputWindow.document;
    JAM.call(v302.write, v302, ["No hits were obtained.\n\n"], JAM.policy.p22);
  }
  return;
}
function getScore(r1$$1, r2) {
  var v304 = this.scoringMatrix;
  return JAM.call(v304.scoringMatrix_getScore, v304, [r1$$1, r2], JAM.policy.p40);
}
function setScoreSetParam(scoringMatrix, gapPenalty$$1, hits$$1) {
  this.scoringMatrix = scoringMatrix;
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
function Node() {
  this.alreadyMatched = false;
  return;
}
function initializeMatrix(sequenceOne$$2, sequenceTwo$$2, scoreSet$$1) {
  this.scoreSet = scoreSet$$1;
  this.M = sequenceOne$$2;
  this.N = sequenceTwo$$2;
  this.score = 0;
  var v1225 = JAM.new(Array, [this.M.length + 1], JAM.policy.p38);
  this.nodes = v1225;
  var i$$12 = 0;
  var v312 = i$$12 < this.nodes.length;
  for (;v312;) {
    var v307 = this.nodes;
    var v308 = i$$12;
    var v1226 = JAM.new(Array, [this.N.length + 1], JAM.policy.p38);
    introspect(JAM.policy.p27) {
      v307[v308] = v1226;
    }
    var j$$10 = 0;
    var v1003 = this.nodes;
    introspect(JAM.policy.p26) {
      var v828 = v1003[i$$12]
    }
    var v311 = j$$10 < v828.length;
    for (;v311;) {
      var v620 = this.nodes;
      introspect(JAM.policy.p26) {
        var v309 = v620[i$$12]
      }
      var v310 = j$$10;
      var v1227 = JAM.new(Node, [], JAM.policy.p39);
      introspect(JAM.policy.p27) {
        v309[v310] = v1227;
      }
      j$$10 = j$$10 + 1;
      var v1004 = this.nodes;
      introspect(JAM.policy.p26) {
        var v829 = v1004[i$$12]
      }
      v311 = j$$10 < v829.length;
    }
    i$$12 = i$$12 + 1;
    v312 = i$$12 < this.nodes.length;
  }
  var v831 = this.nodes;
  introspect(JAM.policy.p26) {
    var v623 = v831[0]
  }
  introspect(JAM.policy.p26) {
    var v313 = v623[0]
  }
  v313.value = 0;
  i$$12 = 1;
  var v317 = i$$12 < this.nodes.length;
  for (;v317;) {
    var v833 = this.nodes;
    introspect(JAM.policy.p26) {
      var v625 = v833[i$$12]
    }
    introspect(JAM.policy.p26) {
      var v314 = v625[0]
    }
    var v1005 = this.nodes;
    var v1006 = i$$12 - 1;
    introspect(JAM.policy.p26) {
      var v834 = v1005[v1006]
    }
    introspect(JAM.policy.p26) {
      var v626 = v834[0]
    }
    v314.value = v626.value;
    var v835 = this.nodes;
    introspect(JAM.policy.p26) {
      var v627 = v835[i$$12]
    }
    introspect(JAM.policy.p26) {
      var v315 = v627[0]
    }
    v315.tracebackI = i$$12 - 1;
    var v836 = this.nodes;
    introspect(JAM.policy.p26) {
      var v628 = v836[i$$12]
    }
    introspect(JAM.policy.p26) {
      var v316 = v628[0]
    }
    v316.tracebackJ = 0;
    i$$12 = i$$12 + 1;
    v317 = i$$12 < this.nodes.length;
  }
  j$$10 = 1;
  var v1007 = this.nodes;
  introspect(JAM.policy.p26) {
    var v838 = v1007[0]
  }
  var v321 = j$$10 < v838.length;
  for (;v321;) {
    var v839 = this.nodes;
    introspect(JAM.policy.p26) {
      var v631 = v839[0]
    }
    introspect(JAM.policy.p26) {
      var v318 = v631[j$$10]
    }
    var v1008 = this.nodes;
    introspect(JAM.policy.p26) {
      var v840 = v1008[0]
    }
    var v841 = j$$10 - 1;
    introspect(JAM.policy.p26) {
      var v632 = v840[v841]
    }
    v318.value = v632.value;
    var v842 = this.nodes;
    introspect(JAM.policy.p26) {
      var v633 = v842[0]
    }
    introspect(JAM.policy.p26) {
      var v319 = v633[j$$10]
    }
    v319.tracebackI = 0;
    var v843 = this.nodes;
    introspect(JAM.policy.p26) {
      var v634 = v843[0]
    }
    introspect(JAM.policy.p26) {
      var v320 = v634[j$$10]
    }
    v320.tracebackJ = j$$10 - 1;
    j$$10 = j$$10 + 1;
    var v1009 = this.nodes;
    introspect(JAM.policy.p26) {
      var v844 = v1009[0]
    }
    v321 = j$$10 < v844.length;
  }
  return;
}
function dumpMatrix() {
  var v322 = outputWindow.document;
  var v636 = "Dynamic programming matrix i=" + this.nodes.length + " and j=";
  var v1011 = this.nodes;
  introspect(JAM.policy.p26) {
    var v846 = v1011[0]
  }
  JAM.call(v322.write, v322, [v636 + v846.length], JAM.policy.p38);
  var v324 = outputWindow.document;
  JAM.call(v324.write, v324, ["\n"], JAM.policy.p22);
  var i$$13 = 0;
  var v335 = i$$13 < this.nodes.length;
  for (;v335;) {
    var j$$11 = 0;
    var v1012 = this.nodes;
    introspect(JAM.policy.p26) {
      var v848 = v1012[i$$13]
    }
    var v333 = j$$11 < v848.length;
    for (;v333;) {
      var v849 = this.nodes;
      introspect(JAM.policy.p26) {
        var v640 = v849[i$$13]
      }
      introspect(JAM.policy.p26) {
        var v325 = v640[j$$11]
      }
      var traceI = v325.tracebackI;
      var v850 = this.nodes;
      introspect(JAM.policy.p26) {
        var v641 = v850[i$$13]
      }
      introspect(JAM.policy.p26) {
        var v326 = v641[j$$11]
      }
      var traceJ = v326.tracebackJ;
      if (traceI == undefined) {
        traceI = "u";
      }
      if (traceJ == undefined) {
        traceJ = "u";
      }
      var v329 = "(" + i$$13 + "," + j$$11 + ")[" + traceI + "," + traceJ + "]=";
      var v1014 = this.nodes;
      introspect(JAM.policy.p26) {
        var v852 = v1014[i$$13]
      }
      introspect(JAM.policy.p26) {
        var v643 = v852[j$$11]
      }
      var output = v329 + v643.value;
      var v331 = outputWindow.document;
      JAM.call(v331.write, v331, [JAM.call(rightNum, null, [output, "", 20, " "], JAM.policy.p41)], JAM.policy.p38);
      j$$11 = j$$11 + 1;
      var v1015 = this.nodes;
      introspect(JAM.policy.p26) {
        var v853 = v1015[i$$13]
      }
      v333 = j$$11 < v853.length;
    }
    var v334 = outputWindow.document;
    JAM.call(v334.write, v334, ["\n"], JAM.policy.p22);
    i$$13 = i$$13 + 1;
    v335 = i$$13 < this.nodes.length;
  }
  var v336 = outputWindow.document;
  JAM.call(v336.write, v336, ["\n"], JAM.policy.p22);
  return;
}
function updateMatrix() {
  var i$$14 = 1;
  var v377 = i$$14 < this.nodes.length;
  for (;v377;) {
    var j$$12 = 1;
    var v1016 = this.nodes;
    introspect(JAM.policy.p26) {
      var v856 = v1016[0]
    }
    var v376 = j$$12 < v856.length;
    for (;v376;) {
      var a;
      var b;
      var c;
      var v1017 = this.nodes;
      introspect(JAM.policy.p26) {
        var v857 = v1017[i$$14]
      }
      introspect(JAM.policy.p26) {
        var v648 = v857[j$$12]
      }
      if (v648.alreadyMatched) {
        a = 0;
        b = 0;
        c = 0;
      } else {
        var v649 = i$$14 == this.nodes.length - 1;
        if (v649) {
          var v1130 = this.nodes;
          introspect(JAM.policy.p26) {
            var v1094 = v1130[0]
          }
          v649 = j$$12 == v1094.length - 1;
        }
        if (v649) {
          var v860 = this.nodes;
          var v861 = i$$14 - 1;
          introspect(JAM.policy.p26) {
            var v650 = v860[v861]
          }
          introspect(JAM.policy.p26) {
            var v337 = v650[j$$12]
          }
          a = v337.value;
          var v862 = this.nodes;
          introspect(JAM.policy.p26) {
            var v651 = v862[i$$14]
          }
          var v652 = j$$12 - 1;
          introspect(JAM.policy.p26) {
            var v338 = v651[v652]
          }
          b = v338.value;
          var v1020 = this.nodes;
          var v1021 = i$$14 - 1;
          introspect(JAM.policy.p26) {
            var v863 = v1020[v1021]
          }
          var v864 = j$$12 - 1;
          introspect(JAM.policy.p26) {
            var v653 = v863[v864]
          }
          var v339 = v653.value;
          var v654 = this.scoreSet;
          var v865 = this.M;
          var v866 = i$$14 - 1;
          introspect(JAM.policy.p26) {
            var v655 = v865[v866]
          }
          var v867 = this.N;
          var v868 = j$$12 - 1;
          introspect(JAM.policy.p26) {
            var v656 = v867[v868]
          }
          c = v339 + JAM.call(v654.getScore, v654, [v655, v656], JAM.policy.p40);
        } else {
          if (i$$14 == this.nodes.length - 1) {
            var v1023 = this.nodes;
            var v1024 = i$$14 - 1;
            introspect(JAM.policy.p26) {
              var v870 = v1023[v1024]
            }
            introspect(JAM.policy.p26) {
              var v658 = v870[j$$12]
            }
            a = v658.value - this.scoreSet.gap;
            var v871 = this.nodes;
            introspect(JAM.policy.p26) {
              var v660 = v871[i$$14]
            }
            var v661 = j$$12 - 1;
            introspect(JAM.policy.p26) {
              var v343 = v660[v661]
            }
            b = v343.value;
            var v1025 = this.nodes;
            var v1026 = i$$14 - 1;
            introspect(JAM.policy.p26) {
              var v872 = v1025[v1026]
            }
            var v873 = j$$12 - 1;
            introspect(JAM.policy.p26) {
              var v662 = v872[v873]
            }
            var v344 = v662.value;
            var v663 = this.scoreSet;
            var v874 = this.M;
            var v875 = i$$14 - 1;
            introspect(JAM.policy.p26) {
              var v664 = v874[v875]
            }
            var v876 = this.N;
            var v877 = j$$12 - 1;
            introspect(JAM.policy.p26) {
              var v665 = v876[v877]
            }
            c = v344 + JAM.call(v663.getScore, v663, [v664, v665], JAM.policy.p40);
          } else {
            var v1095 = this.nodes;
            introspect(JAM.policy.p26) {
              var v1027 = v1095[0]
            }
            if (j$$12 == v1027.length - 1) {
              var v879 = this.nodes;
              var v880 = i$$14 - 1;
              introspect(JAM.policy.p26) {
                var v667 = v879[v880]
              }
              introspect(JAM.policy.p26) {
                var v346 = v667[j$$12]
              }
              a = v346.value;
              var v1028 = this.nodes;
              introspect(JAM.policy.p26) {
                var v881 = v1028[i$$14]
              }
              var v882 = j$$12 - 1;
              introspect(JAM.policy.p26) {
                var v668 = v881[v882]
              }
              b = v668.value - this.scoreSet.gap;
              var v1029 = this.nodes;
              var v1030 = i$$14 - 1;
              introspect(JAM.policy.p26) {
                var v883 = v1029[v1030]
              }
              var v884 = j$$12 - 1;
              introspect(JAM.policy.p26) {
                var v670 = v883[v884]
              }
              var v349 = v670.value;
              var v671 = this.scoreSet;
              var v885 = this.M;
              var v886 = i$$14 - 1;
              introspect(JAM.policy.p26) {
                var v672 = v885[v886]
              }
              var v887 = this.N;
              var v888 = j$$12 - 1;
              introspect(JAM.policy.p26) {
                var v673 = v887[v888]
              }
              c = v349 + JAM.call(v671.getScore, v671, [v672, v673], JAM.policy.p40);
            } else {
              var v1031 = this.nodes;
              var v1032 = i$$14 - 1;
              introspect(JAM.policy.p26) {
                var v889 = v1031[v1032]
              }
              introspect(JAM.policy.p26) {
                var v674 = v889[j$$12]
              }
              a = v674.value - this.scoreSet.gap;
              var v1033 = this.nodes;
              introspect(JAM.policy.p26) {
                var v890 = v1033[i$$14]
              }
              var v891 = j$$12 - 1;
              introspect(JAM.policy.p26) {
                var v676 = v890[v891]
              }
              b = v676.value - this.scoreSet.gap;
              var v1034 = this.nodes;
              var v1035 = i$$14 - 1;
              introspect(JAM.policy.p26) {
                var v892 = v1034[v1035]
              }
              var v893 = j$$12 - 1;
              introspect(JAM.policy.p26) {
                var v678 = v892[v893]
              }
              var v355 = v678.value;
              var v679 = this.scoreSet;
              var v894 = this.M;
              var v895 = i$$14 - 1;
              introspect(JAM.policy.p26) {
                var v680 = v894[v895]
              }
              var v896 = this.N;
              var v897 = j$$12 - 1;
              introspect(JAM.policy.p26) {
                var v681 = v896[v897]
              }
              c = v355 + JAM.call(v679.getScore, v679, [v680, v681], JAM.policy.p40);
            }
          }
        }
      }
      var v682 = a > b;
      if (v682) {
        v682 = a > c;
      }
      if (v682) {
        var v898 = this.nodes;
        introspect(JAM.policy.p26) {
          var v683 = v898[i$$14]
        }
        introspect(JAM.policy.p26) {
          var v361 = v683[j$$12]
        }
        v361.value = a;
        var v899 = this.nodes;
        introspect(JAM.policy.p26) {
          var v684 = v899[i$$14]
        }
        introspect(JAM.policy.p26) {
          var v362 = v684[j$$12]
        }
        v362.tracebackI = i$$14 - 1;
        var v900 = this.nodes;
        introspect(JAM.policy.p26) {
          var v685 = v900[i$$14]
        }
        introspect(JAM.policy.p26) {
          var v363 = v685[j$$12]
        }
        v363.tracebackJ = j$$12;
      } else {
        var v686 = b > c;
        if (v686) {
          v686 = b > a;
        }
        if (v686) {
          var v901 = this.nodes;
          introspect(JAM.policy.p26) {
            var v687 = v901[i$$14]
          }
          introspect(JAM.policy.p26) {
            var v364 = v687[j$$12]
          }
          v364.value = b;
          var v902 = this.nodes;
          introspect(JAM.policy.p26) {
            var v688 = v902[i$$14]
          }
          introspect(JAM.policy.p26) {
            var v365 = v688[j$$12]
          }
          v365.tracebackI = i$$14;
          var v903 = this.nodes;
          introspect(JAM.policy.p26) {
            var v689 = v903[i$$14]
          }
          introspect(JAM.policy.p26) {
            var v366 = v689[j$$12]
          }
          v366.tracebackJ = j$$12 - 1;
        } else {
          var v904 = this.nodes;
          introspect(JAM.policy.p26) {
            var v690 = v904[i$$14]
          }
          introspect(JAM.policy.p26) {
            var v367 = v690[j$$12]
          }
          v367.value = c;
          var v905 = this.nodes;
          introspect(JAM.policy.p26) {
            var v691 = v905[i$$14]
          }
          introspect(JAM.policy.p26) {
            var v368 = v691[j$$12]
          }
          v368.tracebackI = i$$14 - 1;
          var v906 = this.nodes;
          introspect(JAM.policy.p26) {
            var v692 = v906[i$$14]
          }
          introspect(JAM.policy.p26) {
            var v369 = v692[j$$12]
          }
          v369.tracebackJ = j$$12 - 1;
        }
      }
      var v1096 = this.nodes;
      introspect(JAM.policy.p26) {
        var v1036 = v1096[i$$14]
      }
      introspect(JAM.policy.p26) {
        var v907 = v1036[j$$12]
      }
      if (v907.value < 0) {
        var v908 = this.nodes;
        introspect(JAM.policy.p26) {
          var v694 = v908[i$$14]
        }
        introspect(JAM.policy.p26) {
          var v372 = v694[j$$12]
        }
        v372.value = 0;
        var v909 = this.nodes;
        introspect(JAM.policy.p26) {
          var v695 = v909[i$$14]
        }
        introspect(JAM.policy.p26) {
          var v373 = v695[j$$12]
        }
        v373.tracebackI = undefined;
        var v910 = this.nodes;
        introspect(JAM.policy.p26) {
          var v696 = v910[i$$14]
        }
        introspect(JAM.policy.p26) {
          var v374 = v696[j$$12]
        }
        v374.tracebackJ = undefined;
      }
      j$$12 = j$$12 + 1;
      var v1037 = this.nodes;
      introspect(JAM.policy.p26) {
        var v911 = v1037[0]
      }
      v376 = j$$12 < v911.length;
    }
    i$$14 = i$$14 + 1;
    v377 = i$$14 < this.nodes.length;
  }
  var v913 = this.nodes;
  var v914 = this.nodes.length - 1;
  introspect(JAM.policy.p26) {
    var v699 = v913[v914]
  }
  var v1098 = this.nodes;
  introspect(JAM.policy.p26) {
    var v1039 = v1098[0]
  }
  var v700 = v1039.length - 1;
  introspect(JAM.policy.p26) {
    var v378 = v699[v700]
  }
  this.score = v378.value;
  return;
}
function search() {
  var v1228 = JAM.new(Array, [], JAM.policy.p39);
  this.hits = v1228;
  var hitCount = 0;
  var v402 = hitCount < this.scoreSet.hits;
  for (;v402;) {
    JAM.call(this.updateMatrix, this, [], JAM.policy.p39);
    var maxNodeValue = 0;
    var maxNodeI = undefined;
    var maxNodeJ = undefined;
    var i$$15 = 1;
    var v382 = i$$15 < this.nodes.length;
    for (;v382;) {
      var j$$13 = 1;
      var v1040 = this.nodes;
      introspect(JAM.policy.p26) {
        var v918 = v1040[0]
      }
      var v381 = j$$13 < v918.length;
      for (;v381;) {
        var v1099 = this.nodes;
        introspect(JAM.policy.p26) {
          var v1041 = v1099[i$$15]
        }
        introspect(JAM.policy.p26) {
          var v919 = v1041[j$$13]
        }
        if (v919.value > maxNodeValue) {
          var v920 = this.nodes;
          introspect(JAM.policy.p26) {
            var v705 = v920[i$$15]
          }
          introspect(JAM.policy.p26) {
            var v379 = v705[j$$13]
          }
          maxNodeValue = v379.value;
          maxNodeI = i$$15;
          maxNodeJ = j$$13;
        }
        j$$13 = j$$13 + 1;
        var v1042 = this.nodes;
        introspect(JAM.policy.p26) {
          var v921 = v1042[0]
        }
        v381 = j$$13 < v921.length;
      }
      i$$15 = i$$15 + 1;
      v382 = i$$15 < this.nodes.length;
    }
    if (maxNodeValue == 0) {
      break;
    }
    var currentI = maxNodeI;
    var currentJ = maxNodeJ;
    var v708 = this.nodes;
    introspect(JAM.policy.p26) {
      var v384 = v708[maxNodeI]
    }
    introspect(JAM.policy.p26) {
      var currentNode = v384[maxNodeJ]
    }
    var alignedM = JAM.new(Array, [], JAM.policy.p39);
    var alignedN = JAM.new(Array, [], JAM.policy.p39);
    var score = currentNode.value;
    var endM = undefined;
    var endN = undefined;
    var v709 = currentNode.tracebackI != undefined;
    if (v709) {
      v709 = currentNode.tracebackJ != undefined;
    }
    var v399 = v709;
    for (;v399;) {
      var v710 = currentI == 0;
      if (!v710) {
        v710 = currentJ == 0;
      }
      if (v710) {
        break;
      }
      var v711 = currentNode.tracebackI == currentI - 1;
      if (v711) {
        v711 = currentNode.tracebackJ == currentJ - 1;
      }
      if (v711) {
        if (endM == undefined) {
          endM = currentI;
          endN = currentJ;
        }
        var v712 = this.M;
        var v713 = currentI - 1;
        introspect(JAM.policy.p26) {
          var v387 = v712[v713]
        }
        JAM.call(alignedM.push, alignedM, [v387], JAM.policy.p38);
        var v714 = this.N;
        var v715 = currentJ - 1;
        introspect(JAM.policy.p26) {
          var v388 = v714[v715]
        }
        JAM.call(alignedN.push, alignedN, [v388], JAM.policy.p38);
      } else {
        if (currentNode.tracebackJ == currentJ - 1) {
          if (endM != undefined) {
            JAM.call(alignedM.push, alignedM, ["-"], JAM.policy.p22);
            var v718 = this.N;
            var v719 = currentJ - 1;
            introspect(JAM.policy.p26) {
              var v389 = v718[v719]
            }
            JAM.call(alignedN.push, alignedN, [v389], JAM.policy.p38);
          }
        } else {
          if (endM != undefined) {
            var v720 = this.M;
            var v721 = currentI - 1;
            introspect(JAM.policy.p26) {
              var v391 = v720[v721]
            }
            JAM.call(alignedM.push, alignedM, [v391], JAM.policy.p38);
            JAM.call(alignedN.push, alignedN, ["-"], JAM.policy.p22);
          }
        }
      }
      var v930 = this.nodes;
      introspect(JAM.policy.p26) {
        var v722 = v930[currentI]
      }
      introspect(JAM.policy.p26) {
        var v395 = v722[currentJ]
      }
      v395.value = 0;
      var v931 = this.nodes;
      introspect(JAM.policy.p26) {
        var v723 = v931[currentI]
      }
      introspect(JAM.policy.p26) {
        var v396 = v723[currentJ]
      }
      v396.alreadyMatched = true;
      currentI = currentNode.tracebackI;
      currentJ = currentNode.tracebackJ;
      var v724 = this.nodes;
      var v725 = currentNode.tracebackI;
      introspect(JAM.policy.p26) {
        var v397 = v724[v725]
      }
      var v398 = currentNode.tracebackJ;
      introspect(JAM.policy.p26) {
        currentNode = v397[v398];
      }
      var v726 = currentNode.tracebackI != undefined;
      if (v726) {
        v726 = currentNode.tracebackJ != undefined;
      }
      v399 = v726;
    }
    alignedM = JAM.call(alignedM.reverse, alignedM, [], JAM.policy.p39);
    alignedN = JAM.call(alignedN.reverse, alignedN, [], JAM.policy.p39);
    var v400 = this.hits;
    JAM.call(v400.push, v400, [JAM.new(Hit, [JAM.call(alignedM.join, alignedM, [""], JAM.policy.p22), JAM.call(alignedN.join, alignedN, [""], JAM.policy.p22), score, currentI + 1, endM, currentJ + 1, endN], JAM.policy.p40)], JAM.policy.p38);
    hitCount = hitCount + 1;
    v402 = hitCount < this.scoreSet.hits;
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
var v406 = Identity;
var v1229 = JAM.new(ScoringMatrix, [], JAM.policy.p39);
v406.prototype = v1229;
Identity.prototype.setMismatch = setMismatch;
Identity.prototype.setMatch = setMatch;
JAM.new(FuzzySearch, [], JAM.policy.p39);
FuzzySearch.prototype.initializeMatrix = initializeMatrix;
FuzzySearch.prototype.updateMatrix = updateMatrix;
FuzzySearch.prototype.search = search;
FuzzySearch.prototype.getHits = getHits;
FuzzySearch.prototype.dumpMatrix = dumpMatrix;
JAM.set(document, "onload", v2);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p22), "onclick", v3);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p22), "onclick", v4)

