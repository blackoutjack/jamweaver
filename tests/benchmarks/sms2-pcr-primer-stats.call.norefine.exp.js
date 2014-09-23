function v4() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return
}
function v3() {
  try {
    pcrPrimerStats(document)
  }catch(e$$5) {
    alert("The following error was encountered: " + e$$5)
  }
  return
}
function v2() {
  var v8 = document.main_form.main_submit;
  JAM.call(v8.focus, v8, [], JAM.policy.p9);
  return
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$12, s$$2) {
    return p1 + "\n"
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p9);
  return sequence
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var lengthOfAlign = arrayOfSequences[0].length;
  if(arrayOfSequences.length < 2) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v12 = i$$1 < arrayOfTitles.length;
  for(;v12;) {
    var v1296 = arrayOfTitles[i$$1];
    var v616 = JAM.call(v1296.search, v1296, [/\S/], JAM.policy.p9) == -1;
    if(!v616) {
      var v1406 = arrayOfSequences[i$$1];
      var v1038 = JAM.call(v1406.search, v1406, [/\S/], JAM.policy.p9) == -1;
      if(!v1038) {
        v1038 = arrayOfSequences[i$$1].length != lengthOfAlign
      }
      v616 = v1038
    }
    if(v616) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v12 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v618 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p9) == -1;
  if(!v618) {
    var v1041 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p9) == -1;
    if(!v1041) {
      var v1301 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p9) == -1;
      if(!v1301) {
        var v1409 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p9) == -1;
        if(!v1409) {
          v1409 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p9) == -1
        }
        v1301 = v1409
      }
      v1041 = v1301
    }
    v618 = v1041
  }
  if(v618) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v1043 = formElement.value;
  if(JAM.call(v1043.search, v1043, [/\S/], JAM.policy.p9) == -1) {
    alert("Please enter some text.");
    return false
  }
  return true
}
function checkGeneticCode(arrayOfPatterns) {
  var z$$2 = 0;
  var codon = "";
  var oneMatch = false;
  var testSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
  var v17 = z$$2 < arrayOfPatterns.length;
  for(;v17;) {
    var v1044 = arrayOfPatterns[z$$2];
    if(JAM.call(v1044.search, v1044, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p9) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    if(moreExpressionCheck(arrayOfPatterns[z$$2]) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    v17 = z$$2 < arrayOfPatterns.length
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v26 = j < arrayOfPatterns.length;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    var v1303 = arrayOfPatterns[j];
    var v625 = JAM.call(v1303.match, v1303, [/\/.+\//], JAM.policy.p9) + "gi";
    if(JAM.isEval(eval)) {
      var v1551 = eval("introspect(JAM.policy.pFull) { " + v625 + " }")
    }else {
      var v1551 = JAM.call(eval, null, [v625])
    }
    v20[v21] = v1551;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    var v1047 = arrayOfPatterns[j];
    var v626 = JAM.call(v1047.match, v1047, [/=[a-zA-Z\*]/], JAM.policy.p9);
    var v1552 = JAM.call(v626.toString, v626, [], JAM.policy.p9);
    v22[v23] = v1552;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    var v627 = geneticCodeMatchResult[j];
    var v1553 = JAM.call(v627.replace, v627, [/=/g, ""], JAM.policy.p9);
    v24[v25] = v1553;
    j = j + 1;
    v26 = j < arrayOfPatterns.length
  }
  var i$$2 = 0;
  var v33 = i$$2 <= testSequence.length - 3;
  for(;v33;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p9);
    j = 0;
    var v31 = j < geneticCodeMatchExp.length;
    for(;v31;) {
      if(JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p9) != -1) {
        if(oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      v31 = j < geneticCodeMatchExp.length
    }
    if(oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v33 = i$$2 <= testSequence.length - 3
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v35 = z$$3 < arrayOfPatterns$$1.length;
  for(;v35;) {
    var v1051 = arrayOfPatterns$$1[z$$3];
    if(JAM.call(v1051.search, v1051, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p9) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    v35 = z$$3 < arrayOfPatterns$$1.length
  }
  var i$$3 = 0;
  var v39 = i$$3 < arrayOfPatterns$$1.length;
  for(;v39;) {
    var re = new RegExp("[" + arrayOfPatterns$$1[i$$3] + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v38 = j$$1 < arrayOfPatterns$$1.length;
    for(;v38;) {
      var v1053 = arrayOfPatterns$$1[j$$1];
      if(JAM.call(v1053.search, v1053, [re], JAM.policy.p9) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      v38 = j$$1 < arrayOfPatterns$$1.length
    }
    i$$3 = i$$3 + 1;
    v39 = i$$3 < arrayOfPatterns$$1.length
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v42 = z$$4 < arrayOfPatterns$$2.length;
  for(;v42;) {
    var v1054 = arrayOfPatterns$$2[z$$4];
    if(JAM.call(v1054.search, v1054, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p9) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    if(moreExpressionCheck(arrayOfPatterns$$2[z$$4]) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    v42 = z$$4 < arrayOfPatterns$$2.length
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v1304 = getSequenceFromFasta(text$$7);
  if(JAM.call(v1304.replace, v1304, [/[^A-Za-z]/g, ""], JAM.policy.p9).length > maxInput) {
    alert("Please enter a sequence consisting of less than or equal to " + maxInput + " characters.");
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  if(text$$8.length > maxInput$$1) {
    alert("Please enter text consisting of less than or equal to " + maxInput$$1 + " characters.");
    return false
  }else {
    return true
  }
  return
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p9);
  return dnaSequence
}
function closeForm() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</form>"], JAM.policy.p9);
  return true
}
function closePre() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</div>"], JAM.policy.p9);
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</pre>\n"], JAM.policy.p9);
  return
}
function closeTextArea() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</textarea>"], JAM.policy.p9);
  return true
}
function closeWindow() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</body>\n</html>\n"], JAM.policy.p9);
  outputWindow.status = "Done.";
  var v52 = outputWindow.document;
  JAM.call(v52.close, v52, [], JAM.policy.p9);
  return true
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = JAM.call(sequence$$1.toLowerCase, sequence$$1, [], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p9);
  return sequence$$1
}
function earlyCheckAlign(alignArray) {
  if(alignArray.length < 3) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v55 = i$$4 < alignArray.length;
  for(;v55;) {
    var v1057 = alignArray[i$$4];
    if(JAM.call(v1057.search, v1057, [/[^\s]+\s/], JAM.policy.p9) == -1) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    v55 = i$$4 < alignArray.length
  }
  return true
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p9);
  return alignSeq
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p9);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p9);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p9);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p9)
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  if(JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p9) != -1) {
    var v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p9);
    for(;v57;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p9);
      v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p9)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var stringToReturn = "&gt;results for " + sequence$$2.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p9) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"'
  }
  stringToReturn = stringToReturn + ' starting "' + JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p9) + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p9) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"'
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p9) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p9) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"'
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p9) + '"';
  return'<div class="info">' + stringToReturn$$1 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = new Array(arrayOfPatterns$$3.length);
  var j$$2 = 0;
  var v75 = j$$2 < arrayOfPatterns$$3.length;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    var v1305 = arrayOfPatterns$$3[j$$2];
    var v674 = JAM.call(v1305.match, v1305, [/\/.+\//], JAM.policy.p9) + "gi";
    if(JAM.isEval(eval)) {
      var v1554 = eval("introspect(JAM.policy.pFull) { " + v674 + " }")
    }else {
      var v1554 = JAM.call(eval, null, [v674])
    }
    v73[v74] = v1554;
    j$$2 = j$$2 + 1;
    v75 = j$$2 < arrayOfPatterns$$3.length
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v81 = j$$3 < arrayOfPatterns$$4.length;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    var v1059 = arrayOfPatterns$$4[j$$3];
    var v677 = JAM.call(v1059.match, v1059, [/=[a-zA-Z\*]/], JAM.policy.p9);
    var v1555 = JAM.call(v677.toString, v677, [], JAM.policy.p9);
    v77[v78] = v1555;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    var v678 = geneticCodeMatchResult$$1[j$$3];
    var v1556 = JAM.call(v678.replace, v678, [/=/g, ""], JAM.policy.p9);
    v79[v80] = v1556;
    j$$3 = j$$3 + 1;
    v81 = j$$3 < arrayOfPatterns$$4.length
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p9) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"'
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p9) + '"';
  return'<div class="info">' + stringToReturn$$2 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p9) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"'
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p9) + '"';
  return'<div class="info">' + stringToReturn$$3 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p9) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"'
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p9) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p9) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleTwo$$1 + '"'
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p9) + '"';
  return'<div class="info">' + stringToReturn$$4 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v102 = j$$4 < lengthOut;
  for(;v102;) {
    tempNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p9) * components.length], JAM.policy.p9);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p9);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p10)
}
function getSequenceFromFasta(sequenceRecord) {
  if(JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p9) != -1) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p9)
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if(JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p9) != -1) {
    var v104 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p9);
    fastaTitle = JAM.call(v104.toString, v104, [], JAM.policy.p9);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p9);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p9);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p9)
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v706 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p9) != -1;
  if(!v706) {
    var v1062 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p9) != -1;
    if(!v1062) {
      var v1307 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p9) != -1;
      if(!v1307) {
        var v1412 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p9) != -1;
        if(!v1412) {
          var v1461 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p9) != -1;
          if(!v1461) {
            var v1477 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p9) != -1;
            if(!v1477) {
              var v1491 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p9) != -1;
              if(!v1491) {
                var v1504 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p9) != -1;
                if(!v1504) {
                  var v1514 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p9) != -1;
                  if(!v1514) {
                    var v1523 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p9) != -1;
                    if(!v1523) {
                      v1523 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p9) != -1
                    }
                    v1514 = v1523
                  }
                  v1504 = v1514
                }
                v1491 = v1504
              }
              v1477 = v1491
            }
            v1461 = v1477
          }
          v1412 = v1461
        }
        v1307 = v1412
      }
      v1062 = v1307
    }
    v706 = v1062
  }
  if(v706) {
    return false
  }
  return true
}
function openForm() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ['<form action="">\n'], JAM.policy.p9);
  return true
}
function openPre() {
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ["<pre>"], JAM.policy.p9);
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<div class="pre">'], JAM.policy.p9);
  return
}
function openTextArea() {
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p9);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p10);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p9);
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p9);
  if(isColor) {
    var v113 = outputWindow.document;
    JAM.call(v113.write, v113, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p9)
  }else {
    var v115 = outputWindow.document;
    JAM.call(v115.write, v115, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p9)
  }
  var v117 = outputWindow.document;
  JAM.call(v117.write, v117, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"], JAM.policy.p9);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p10);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p9);
  var v119 = outputWindow.document;
  JAM.call(v119.write, v119, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p9);
  if(isBackground) {
    var v121 = outputWindow.document;
    JAM.call(v121.write, v121, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p9)
  }else {
    var v123 = outputWindow.document;
    JAM.call(v123.write, v123, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p9)
  }
  var v125 = outputWindow.document;
  JAM.call(v125.write, v125, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"], JAM.policy.p9);
  outputWindow.status = "Please Wait.";
  return true
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p9)
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p9)
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p9)
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p9)
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p9)
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p9)
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p9)
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p9)
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p9)
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  if(JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p9) != -1) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p9);
    tempDnaArray = JAM.call(tempDnaArray.reverse, tempDnaArray, [], JAM.policy.p9);
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p10)
  }
  return dnaSequence$$1
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = JAM.call(theNumber.toString, theNumber, [], JAM.policy.p9);
  j$$5 = theNumber.length;
  var v128 = j$$5 < lengthOfColumn;
  for(;v128;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v128 = j$$5 < lengthOfColumn
  }
  theNumber = tempString + theNumber + " ";
  sequenceToAppend = sequenceToAppend + theNumber + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p9);
  if(testArray[0] != testString) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  if(JAM.call(testString.search, testString, [re$$2], JAM.policy.p9) == -1) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    if(JAM.isEval(eval)) {
      re$$2 = eval("introspect(JAM.policy.pFull) { " + "Exception handling not supported. Check browser compatibility page." + " }")
    }else {
      re$$2 = JAM.call(eval, null, ["Exception handling not supported. Check browser compatibility page."])
    }
  }catch(e$$4) {
    caughtException = true
  }
  if(!caughtException) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p9);
  if(testString != "1X2X3X") {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  if(JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9) != 2489.824) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  if(JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9) != 2489.8) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  if(JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p9) == -1) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v721 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p9) == -1;
  if(!v721) {
    var v1073 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p9) == -1;
    if(!v1073) {
      var v1318 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p9) == -1;
      if(!v1318) {
        v1318 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p9) == -1
      }
      v1073 = v1318
    }
    v721 = v1073
  }
  if(v721) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if(JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p9) == -1) {
    alert("Please enter a number.");
    return false
  }
  if(theNumber$$2 > maxInput$$2) {
    alert("Please enter a number less than or equal to " + maxInput$$2 + ".");
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  if(JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p9) != -1) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  if(JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p9) != -1) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v726 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p9) == -1;
  if(!v726) {
    var v1076 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p9) == -1;
    if(!v1076) {
      var v1321 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p9) == -1;
      if(!v1321) {
        v1321 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p9) == -1
      }
      v1076 = v1321
    }
    v726 = v1076
  }
  if(v726) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v727 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p9) == -1;
  if(!v727) {
    var v1079 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p9) == -1;
    if(!v1079) {
      var v1324 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p9) == -1;
      if(!v1324) {
        v1324 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p9) == -1
      }
      v1079 = v1324
    }
    v727 = v1079
  }
  if(v727) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  if(JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p9) == -1) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v729 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p9) == -1;
  if(!v729) {
    var v1082 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p9) == -1;
    if(!v1082) {
      var v1327 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p9) == -1;
      if(!v1327) {
        v1327 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p9) == -1
      }
      v1082 = v1327
    }
    v729 = v1082
  }
  if(v729) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  if(JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p9) == -1) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function writeGroupNum(text$$10, tabIn$$1, groupSize, basePerLine, startBase, stopBase) {
  var i$$5 = parseInt(startBase);
  var k = 0;
  var lineOfText = "";
  var sepChar = " ";
  groupSize = parseInt(groupSize);
  basePerLine = parseInt(basePerLine);
  var v156 = i$$5 < stopBase;
  for(;v156;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v153 = j$$6 <= basePerLine / groupSize;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p9);
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v153 = j$$6 <= basePerLine / groupSize
    }
    var v154 = outputWindow.document;
    JAM.call(v154.write, v154, [lineOfText + "\n"], JAM.policy.p9);
    lineOfText = "";
    v156 = i$$5 < stopBase
  }
  return true
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  return true
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v734 = adjustment < 0;
    if(v734) {
      v734 = adjusted >= 0
    }
    if(v734) {
      adjusted = adjusted + 1
    }
    return adjusted
  }
  var i$$6 = parseInt(startBase$$2);
  var k$$1 = 0;
  var lineOfText$$1 = "";
  var lineNum = "";
  var sepChar$$1 = " ";
  var aboveNum = "";
  groupSize$$2 = parseInt(groupSize$$2);
  basePerLine$$2 = parseInt(basePerLine$$2);
  numberingAdjustment = parseInt(numberingAdjustment);
  var v190 = i$$6 < stopBase$$2;
  for(;v190;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v166 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for(;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for(;v161;) {
        if(i$$6 + k$$1 >= stopBase$$2) {
          break
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p9);
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      if(numberPosition$$1 == "above") {
        aboveNum = aboveNum + rightNum(adjustNumbering(i$$6, numberingAdjustment), "", groupSize$$2, tabIn$$3)
      }
      if(i$$6 >= stopBase$$2) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      v166 = j$$7 <= basePerLine$$2 / groupSize$$2
    }
    if(numberPosition$$1 == "left") {
      var v167 = outputWindow.document;
      JAM.call(v167.write, v167, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p9);
      if(strands$$1 == "two") {
        var v169 = outputWindow.document;
        JAM.call(v169.write, v169, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p9);
        var v171 = outputWindow.document;
        JAM.call(v171.write, v171, ["\n"], JAM.policy.p9)
      }
    }else {
      if(numberPosition$$1 == "right") {
        var v173 = outputWindow.document;
        JAM.call(v173.write, v173, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p9);
        if(strands$$1 == "two") {
          var v175 = outputWindow.document;
          JAM.call(v175.write, v175, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p9);
          var v177 = outputWindow.document;
          JAM.call(v177.write, v177, ["\n"], JAM.policy.p9)
        }
      }else {
        if(numberPosition$$1 == "above") {
          var v179 = outputWindow.document;
          JAM.call(v179.write, v179, [aboveNum + "\n"], JAM.policy.p9);
          var v181 = outputWindow.document;
          JAM.call(v181.write, v181, [lineOfText$$1 + "\n"], JAM.policy.p9);
          if(strands$$1 == "two") {
            var v183 = outputWindow.document;
            JAM.call(v183.write, v183, [complement(lineOfText$$1) + "\n"], JAM.policy.p9);
            var v185 = outputWindow.document;
            JAM.call(v185.write, v185, ["\n"], JAM.policy.p9)
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v190 = i$$6 < stopBase$$2
  }
  return true
}
function writeGroupNumProtein(text$$13, tabIn$$4, groupSize$$3, basePerLine$$3, startBase$$3, stopBase$$3, numberPosition$$2) {
  var i$$7 = parseInt(startBase$$3);
  var k$$2 = 0;
  var lineOfText$$2 = "";
  var lineNum$$1 = "";
  var sepChar$$2 = " ";
  var aboveNum$$1 = "";
  groupSize$$3 = parseInt(groupSize$$3);
  basePerLine$$3 = parseInt(basePerLine$$3);
  var v211 = i$$7 < stopBase$$3;
  for(;v211;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v199 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for(;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for(;v194;) {
        if(i$$7 + k$$2 >= stopBase$$3) {
          break
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p9);
        k$$2 = k$$2 + 1;
        v194 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      if(numberPosition$$2 == "above") {
        aboveNum$$1 = aboveNum$$1 + rightNum(i$$7, "", groupSize$$3, tabIn$$4)
      }
      if(i$$7 >= stopBase$$3) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      v199 = j$$8 <= basePerLine$$3 / groupSize$$3
    }
    if(numberPosition$$2 == "left") {
      var v200 = outputWindow.document;
      JAM.call(v200.write, v200, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p9)
    }else {
      if(numberPosition$$2 == "right") {
        var v202 = outputWindow.document;
        JAM.call(v202.write, v202, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p9)
      }else {
        if(numberPosition$$2 == "above") {
          var v204 = outputWindow.document;
          JAM.call(v204.write, v204, [aboveNum$$1 + "\n"], JAM.policy.p9);
          var v206 = outputWindow.document;
          JAM.call(v206.write, v206, [lineOfText$$2 + "\n"], JAM.policy.p9)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v211 = i$$7 < stopBase$$3
  }
  return true
}
function writeMutatedSequence(sequence$$13, components$$1, numMut, firstIndexToMutate, lastIndexToMutate) {
  var currentChar = "";
  var randNum = 0;
  var maxNum = 0;
  var needNewChar = "";
  var componentsIndex = 0;
  numMut = parseInt(numMut);
  firstIndexToMutate = parseInt(firstIndexToMutate);
  lastIndexToMutate = parseInt(lastIndexToMutate);
  var v751 = sequence$$13.length <= firstIndexToMutate;
  if(!v751) {
    var v1093 = lastIndexToMutate < 0;
    if(!v1093) {
      v1093 = lastIndexToMutate <= firstIndexToMutate
    }
    v751 = v1093
  }
  if(v751) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p9) * maxNum], JAM.policy.p9);
    var v753 = randNum < firstIndexToMutate;
    if(!v753) {
      v753 = randNum > lastIndexToMutate
    }
    if(v753) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p9);
    needNewChar = true;
    for(;needNewChar;) {
      componentsIndex = JAM.call(Math.round, Math, [JAM.call(Math.random, Math, [], JAM.policy.p9) * components$$1.length], JAM.policy.p9);
      if(componentsIndex == components$$1.length) {
        componentsIndex = 0
      }
      if(components$$1[componentsIndex] != currentChar) {
        needNewChar = false
      }
    }
    sequence$$13 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p9) + components$$1[componentsIndex] + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p9);
    i$$8 = i$$8 + 1;
    v220 = i$$8 < numMut
  }
  var v221 = outputWindow.document;
  JAM.call(v221.write, v221, [addReturns(sequence$$13)], JAM.policy.p9);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v227 = j$$9 < lengthOut$$1;
  for(;v227;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p9) * components$$2.length], JAM.policy.p9);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if(sequence$$14.length == 60) {
      var v224 = outputWindow.document;
      JAM.call(v224.write, v224, [sequence$$14 + "\n"], JAM.policy.p9);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v227 = j$$9 < lengthOut$$1
  }
  var v228 = outputWindow.document;
  JAM.call(v228.write, v228, [sequence$$14 + "\n"], JAM.policy.p9);
  return true
}
function writeRestrictionSites(sequence$$15, arrayOfItems, dnaConformation) {
  var resultArray = new Array;
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
  if(dnaConformation == "circular") {
    shiftValue = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p9).length;
    sequence$$15 = JAM.call(sequence$$15.substring, sequence$$15, [sequence$$15.length - lookAhead, sequence$$15.length], JAM.policy.p9) + sequence$$15 + JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p9);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v234 = outputWindow.document;
  JAM.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v235 = outputWindow.document;
  JAM.call(v235.write, v235, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p9);
  var i$$9 = 0;
  var v252 = i$$9 < arrayOfItems.length;
  for(;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v768 = arrayOfItems[i$$9];
    matchExp = JAM.call(v768.match, v768, [/\/.+\//], JAM.policy.p9) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    var v1334 = arrayOfItems[i$$9];
    var v1099 = JAM.call(v1334.match, v1334, [/\)\D*\d+/], JAM.policy.p9);
    var v769 = JAM.call(v1099.toString, v1099, [], JAM.policy.p9);
    cutDistance = parseFloat(JAM.call(v769.replace, v769, [/\)\D*/, ""], JAM.policy.p9));
    var v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p9);
    for(;v244;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v770 = matchPosition >= lowerLimit;
      if(v770) {
        v770 = matchPosition < upperLimit
      }
      if(v770) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1)
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p9)
    }
    if(JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p9) != -1) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p9)
    }
    if(timesFound == 0) {
      backGroundClass = "none"
    }else {
      if(timesFound == 1) {
        backGroundClass = "one"
      }else {
        if(timesFound == 2) {
          backGroundClass = "two"
        }else {
          if(timesFound == 3) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v250 = outputWindow.document;
    var v1483 = '<tr><td class="' + backGroundClass + '">';
    var v1520 = arrayOfItems[i$$9];
    var v1510 = JAM.call(v1520.match, v1520, [/\([^\(]+\)/], JAM.policy.p9);
    var v1498 = JAM.call(v1510.toString, v1510, [], JAM.policy.p9);
    JAM.call(v250.write, v250, [v1483 + JAM.call(v1498.replace, v1498, [/\(|\)/g, ""], JAM.policy.p9) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p9);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v252 = i$$9 < arrayOfItems.length
  }
  var v253 = outputWindow.document;
  JAM.call(v253.write, v253, ["</tbody></table>\n"], JAM.policy.p9);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p9);
  var i$$10 = 0;
  var v265 = i$$10 < arrayOfItems$$1.length;
  for(;v265;) {
    var tempNumber = 0;
    var v779 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v779.match, v779, [/\/[^\/]+\//], JAM.policy.p9) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p9) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p9).length
    }
    var percentage = 0;
    var v1103 = originalLength + 1;
    var v1432 = arrayOfItems$$1[i$$10];
    if(v1103 - parseFloat(JAM.call(v1432.match, v1432, [/\d+/], JAM.policy.p9)) > 0) {
      var v260 = 100 * tempNumber;
      var v782 = originalLength + 1;
      var v1338 = arrayOfItems$$1[i$$10];
      percentage = v260 / (v782 - parseFloat(JAM.call(v1338.match, v1338, [/\d+/], JAM.policy.p9)))
    }
    var v263 = outputWindow.document;
    var v1521 = arrayOfItems$$1[i$$10];
    var v1511 = JAM.call(v1521.match, v1521, [/\([^\(]+\)\b/], JAM.policy.p9);
    var v1499 = JAM.call(v1511.toString, v1511, [], JAM.policy.p9);
    JAM.call(v263.write, v263, ["<tr><td>" + JAM.call(v1499.replace, v1499, [/\(|\)/g, ""], JAM.policy.p9) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9) + "</td></tr>\n"], JAM.policy.p9);
    i$$10 = i$$10 + 1;
    v265 = i$$10 < arrayOfItems$$1.length
  }
  var v266 = outputWindow.document;
  JAM.call(v266.write, v266, ["</tbody></table>\n"], JAM.policy.p9);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v273 = sequence$$17.length > 0;
  for(;v273;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p9) * maxNum$$1], JAM.policy.p9);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p9);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p9);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p9);
    sequence$$17 = tempString1 + tempString2;
    if(tempSeq.length == 60) {
      var v270 = outputWindow.document;
      JAM.call(v270.write, v270, [tempSeq + "\n"], JAM.policy.p9);
      tempSeq = ""
    }
    v273 = sequence$$17.length > 0
  }
  var v274 = outputWindow.document;
  JAM.call(v274.write, v274, [tempSeq + "\n"], JAM.policy.p9);
  return true
}
function pcrPrimerStats(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 5E3;
  var maxPrimerLength = 50;
  var milliMolarSalt = 50;
  var milliMolarMagnesium = 1.5;
  var nanoMolarPrimerTotal = 200;
  var isPhosphorylated = false;
  if(testScript() == false) {
    return false
  }
  var v791 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v791) {
    v791 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false
  }
  if(v791) {
    return false
  }
  molarSalt = milliMolarSalt / 1E3;
  molarMagnesium = milliMolarMagnesium / 1E3;
  molarPrimerTotal = nanoMolarPrimerTotal / 1E9;
  isPhosphorylated = false;
  openWindow("PCR Primer Stats");
  openPre();
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  var v279 = outputWindow.document;
  JAM.call(v279.write, v279, ["Global settings:\n"], JAM.policy.p9);
  if(isPhosphorylated) {
    var v280 = outputWindow.document;
    JAM.call(v280.write, v280, ["-The primers have a 5'-phosphate group.\n"], JAM.policy.p9)
  }else {
    var v281 = outputWindow.document;
    JAM.call(v281.write, v281, ["-The primers do not have a 5'-phosphate group.\n"], JAM.policy.p9)
  }
  var v282 = outputWindow.document;
  JAM.call(v282.write, v282, ["-Combined concentration of K+ and Na+ in the reaction = " + milliMolarSalt + " millimolar.\n"], JAM.policy.p9);
  var v284 = outputWindow.document;
  JAM.call(v284.write, v284, ["-Mg+2 concentration in the reaction = " + milliMolarMagnesium + " millimolar.\n"], JAM.policy.p9);
  var v286 = outputWindow.document;
  JAM.call(v286.write, v286, ["-Primer concentration in the reaction = " + nanoMolarPrimerTotal + " nanomolar.\n"], JAM.policy.p9);
  var v288 = outputWindow.document;
  JAM.call(v288.write, v288, ["\n"], JAM.policy.p9);
  var v289 = outputWindow.document;
  JAM.call(v289.write, v289, ["------------------------------------------------------------\n"], JAM.policy.p9);
  var i$$11 = 0;
  var v354 = i$$11 < arrayOfFasta$$1.length;
  for(;v354;) {
    newDna = getSequenceFromFasta(arrayOfFasta$$1[i$$11]);
    title$$9 = getTitleFromFasta(arrayOfFasta$$1[i$$11]);
    newDna = _removeNonPrimer(newDna);
    if(newDna.length == 0) {
      i$$11 = i$$11 + 1;
      v354 = i$$11 < arrayOfFasta$$1.length;
      continue
    }
    if(newDna.length > maxPrimerLength) {
      i$$11 = i$$11 + 1;
      v354 = i$$11 < arrayOfFasta$$1.length;
      continue
    }
    var percentGC = _percentGC(newDna);
    var nearestNeighborTm = _nearestNeighborTm(newDna, molarSalt, molarPrimerTotal, molarMagnesium);
    var selfCompHash = _getSelfComplementarityReport(newDna, 3, 50);
    var hairpinHash = _getHairpinReport(newDna, 3, 50);
    var v294 = outputWindow.document;
    JAM.call(v294.write, v294, ["------------------------------------------------------------\n"], JAM.policy.p9);
    var v295 = outputWindow.document;
    JAM.call(v295.write, v295, ["General properties:\n"], JAM.policy.p9);
    var v296 = outputWindow.document;
    JAM.call(v296.write, v296, ["-------------------\n"], JAM.policy.p9);
    var v297 = outputWindow.document;
    JAM.call(v297.write, v297, [rightNum("Primer name:", "", 32, "") + title$$9 + "\n"], JAM.policy.p9);
    var v299 = outputWindow.document;
    JAM.call(v299.write, v299, [rightNum("Primer sequence:", "", 32, "") + newDna + "\n"], JAM.policy.p9);
    var v301 = outputWindow.document;
    JAM.call(v301.write, v301, [rightNum("Sequence length:", "", 32, "") + newDna.length + "\n"], JAM.policy.p9);
    var v303 = outputWindow.document;
    JAM.call(v303.write, v303, [rightNum("Base counts:", "", 32, "") + _baseCounts(newDna) + "\n"], JAM.policy.p9);
    var v305 = outputWindow.document;
    JAM.call(v305.write, v305, [rightNum("GC content (%):", "", 32, "") + percentGC + "\n"], JAM.policy.p9);
    var v307 = outputWindow.document;
    JAM.call(v307.write, v307, [rightNum("Molecular weight (Daltons):", "", 32, "") + _molecularWeight(newDna, isPhosphorylated) + "\n"], JAM.policy.p9);
    var v309 = outputWindow.document;
    JAM.call(v309.write, v309, [rightNum("nmol/A260:", "", 32, "") + _nmolPerA260(newDna) + "\n"], JAM.policy.p9);
    var v311 = outputWindow.document;
    JAM.call(v311.write, v311, [rightNum("micrograms/A260:", "", 32, "") + _microgramsPerA260(newDna, isPhosphorylated) + "\n"], JAM.policy.p9);
    var v313 = outputWindow.document;
    JAM.call(v313.write, v313, [rightNum("Basic Tm (degrees C):", "", 32, "") + _basicTm(newDna) + "\n"], JAM.policy.p9);
    var v315 = outputWindow.document;
    JAM.call(v315.write, v315, [rightNum("Salt adjusted Tm (degrees C):", "", 32, "") + _molarSaltAdjustedTm(newDna, molarSalt) + "\n"], JAM.policy.p9);
    var v317 = outputWindow.document;
    JAM.call(v317.write, v317, [rightNum("Nearest neighbor Tm (degrees C):", "", 32, "") + nearestNeighborTm + "\n"], JAM.policy.p9);
    var v319 = outputWindow.document;
    JAM.call(v319.write, v319, ["\n"], JAM.policy.p9);
    var v320 = outputWindow.document;
    JAM.call(v320.write, v320, ["PCR suitability tests (Pass / Warning):\n"], JAM.policy.p9);
    var v321 = outputWindow.document;
    JAM.call(v321.write, v321, ["------------------------------------\n"], JAM.policy.p9);
    var v322 = outputWindow.document;
    JAM.call(v322.write, v322, [rightNum("Single base runs:", "", 32, "") + _getBaseRunsReport(newDna, 5) + "\n"], JAM.policy.p9);
    var v324 = outputWindow.document;
    JAM.call(v324.write, v324, [rightNum("Dinucleotide base runs:", "", 32, "") + _getDiNucleotideRunsReport(newDna, 5) + "\n"], JAM.policy.p9);
    var v326 = outputWindow.document;
    JAM.call(v326.write, v326, [rightNum("Length:", "", 32, "") + _getSuitableLengthReport(newDna, 14, 30) + "\n"], JAM.policy.p9);
    var v328 = outputWindow.document;
    JAM.call(v328.write, v328, [rightNum("Percent GC:", "", 32, "") + _getSuitableGCReport(newDna, percentGC, 40, 60) + "\n"], JAM.policy.p9);
    var v330 = outputWindow.document;
    JAM.call(v330.write, v330, [rightNum("Tm (Nearest neighbor):", "", 32, "") + _getSuitableTmReport(newDna, nearestNeighborTm, 50, 58) + "\n"], JAM.policy.p9);
    var v332 = outputWindow.document;
    JAM.call(v332.write, v332, [rightNum("GC clamp:", "", 32, "") + _getSuitableThreePrimeGC(newDna, 1, 3) + "\n"], JAM.policy.p9);
    var v334 = outputWindow.document;
    JAM.call(v334.write, v334, [rightNum("Self-annealing:", "", 32, "") + selfCompHash["report"] + "\n"], JAM.policy.p9);
    if(selfCompHash["report"] != "Pass") {
      var v336 = outputWindow.document;
      JAM.call(v336.write, v336, [rightNum(":", "", 32, "") + selfCompHash["upper"] + "\n"], JAM.policy.p9);
      var v338 = outputWindow.document;
      JAM.call(v338.write, v338, [rightNum(":", "", 32, "") + selfCompHash["divider"] + "\n"], JAM.policy.p9);
      var v340 = outputWindow.document;
      JAM.call(v340.write, v340, [rightNum(":", "", 32, "") + selfCompHash["lower"] + "\n"], JAM.policy.p9)
    }
    var v343 = outputWindow.document;
    JAM.call(v343.write, v343, [rightNum("Hairpin formation:", "", 32, "") + hairpinHash["report"] + "\n"], JAM.policy.p9);
    if(hairpinHash["report"] != "Pass") {
      var v345 = outputWindow.document;
      JAM.call(v345.write, v345, [rightNum(":", "", 32, "") + hairpinHash["upper"] + "\n"], JAM.policy.p9);
      var v347 = outputWindow.document;
      JAM.call(v347.write, v347, [rightNum(":", "", 32, "") + hairpinHash["divider"] + "\n"], JAM.policy.p9);
      var v349 = outputWindow.document;
      JAM.call(v349.write, v349, [rightNum(":", "", 32, "") + hairpinHash["lower"] + "\n"], JAM.policy.p9)
    }
    var v352 = outputWindow.document;
    JAM.call(v352.write, v352, ["------------------------------------------------------------\n"], JAM.policy.p9);
    var v353 = outputWindow.document;
    JAM.call(v353.write, v353, ["\n"], JAM.policy.p9);
    i$$11 = i$$11 + 1;
    v354 = i$$11 < arrayOfFasta$$1.length
  }
  closePre();
  closeWindow();
  return true
}
function _removeNonPrimer(sequence$$18) {
  JAM.call(sequence$$18.replace, sequence$$18, [/u/g, "t"], JAM.policy.p9);
  JAM.call(sequence$$18.replace, sequence$$18, [/U/g, "T"], JAM.policy.p9);
  return JAM.call(sequence$$18.replace, sequence$$18, [/[^gatcryswkmbdhvnGATCRYSWKMBDHVN]/g, ""], JAM.policy.p9)
}
function _containsOnlyNonDegenerates(sequence$$19) {
  if(JAM.call(sequence$$19.search, sequence$$19, [/[^gatc]/i], JAM.policy.p9) == -1) {
    return true
  }
  return false
}
function _baseCounts(sequence$$20) {
  var numG = _getBaseCount(sequence$$20, "g");
  var numA = _getBaseCount(sequence$$20, "a");
  var numT = _getBaseCount(sequence$$20, "t");
  var numC = _getBaseCount(sequence$$20, "c");
  var numOther = sequence$$20.length - (numG + numA + numT + numC);
  return"G=" + numG + "; A=" + numA + "; T=" + numT + "; C=" + numC + "; Other=" + numOther + ";"
}
function _microgramsPerA260(sequence$$21, isPhosphorylated$$1) {
  if(_containsOnlyNonDegenerates(sequence$$21)) {
    return _microgramsPerA260NonDegen(sequence$$21, isPhosphorylated$$1)
  }else {
    return _microgramsPerA260Degen(sequence$$21, isPhosphorylated$$1)
  }
  return
}
function _microgramsPerA260NonDegen(sequence$$22, isPhosphorylated$$2) {
  var mw = _mw(sequence$$22, isPhosphorylated$$2);
  var result = mw / _getExtinctionCoefficient(sequence$$22);
  return JAM.call(result.toFixed, result, [2], JAM.policy.p9)
}
function _microgramsPerA260Degen(sequence$$23, isPhosphorylated$$3) {
  var lowerBoundsSequence = sequence$$23;
  var upperBoundsSequence = sequence$$23;
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/r/gi, "g"], JAM.policy.p9);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/y/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/s/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/w/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/k/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/m/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/b/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/d/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/h/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/v/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/n/gi, "c"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/r/gi, "a"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/y/gi, "t"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/s/gi, "g"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/w/gi, "a"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/k/gi, "g"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/m/gi, "a"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/b/gi, "g"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/d/gi, "a"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/h/gi, "a"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/v/gi, "a"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/n/gi, "a"], JAM.policy.p9);
  return _microgramsPerA260NonDegen(upperBoundsSequence, isPhosphorylated$$3) + " to " + _microgramsPerA260NonDegen(lowerBoundsSequence, isPhosphorylated$$3)
}
function _nmolPerA260(sequence$$24) {
  if(_containsOnlyNonDegenerates(sequence$$24)) {
    return _nmolPerA260NonDegen(sequence$$24)
  }else {
    return _nmolPerA260Degen(sequence$$24)
  }
  return
}
function _nmolPerA260NonDegen(sequence$$25) {
  var result$$1 = _getExtinctionCoefficient(sequence$$25);
  result$$1 = 1 / result$$1 * 1E3;
  return JAM.call(result$$1.toFixed, result$$1, [2], JAM.policy.p9)
}
function _getExtinctionCoefficient(sequence$$26) {
  var dimerValues = _getDimerExtinctionCoefficients();
  var singleValues = _getSingleExtinctionCoefficients();
  var dimerSum = 0;
  var singleSum = 0;
  sequence$$26 = JAM.call(sequence$$26.toLowerCase, sequence$$26, [], JAM.policy.p9);
  var i$$12 = 0;
  var v368 = i$$12 < sequence$$26.length - 1;
  for(;v368;) {
    dimerSum = dimerSum + dimerValues[JAM.call(sequence$$26.charAt, sequence$$26, [i$$12], JAM.policy.p9) + JAM.call(sequence$$26.charAt, sequence$$26, [i$$12 + 1], JAM.policy.p9)];
    i$$12 = i$$12 + 1;
    v368 = i$$12 < sequence$$26.length - 1
  }
  i$$12 = 1;
  var v371 = i$$12 < sequence$$26.length - 1;
  for(;v371;) {
    singleSum = singleSum + singleValues[JAM.call(sequence$$26.charAt, sequence$$26, [i$$12], JAM.policy.p9)];
    i$$12 = i$$12 + 1;
    v371 = i$$12 < sequence$$26.length - 1
  }
  return 2 * dimerSum - singleSum
}
function _nmolPerA260Degen(sequence$$27) {
  var lowerBoundsSequence$$1 = sequence$$27;
  var upperBoundsSequence$$1 = sequence$$27;
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/r/gi, "g"], JAM.policy.p9);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/y/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/s/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/w/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/k/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/m/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/b/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/d/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/h/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/v/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/n/gi, "c"], JAM.policy.p9);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/r/gi, "a"], JAM.policy.p9);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/y/gi, "t"], JAM.policy.p9);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/s/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/w/gi, "a"], JAM.policy.p9);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/k/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/m/gi, "a"], JAM.policy.p9);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/b/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/d/gi, "a"], JAM.policy.p9);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/h/gi, "a"], JAM.policy.p9);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/v/gi, "a"], JAM.policy.p9);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/n/gi, "a"], JAM.policy.p9);
  return _nmolPerA260NonDegen(upperBoundsSequence$$1) + " to " + _nmolPerA260NonDegen(lowerBoundsSequence$$1)
}
function _percentGC(sequence$$28) {
  if(_containsOnlyNonDegenerates(sequence$$28)) {
    return _percentGCNonDegen(sequence$$28)
  }else {
    return _percentGCDegen(sequence$$28)
  }
  return
}
function _percentGCNonDegen(sequence$$29) {
  var numHits = _getBaseCount(sequence$$29, "g") + _getBaseCount(sequence$$29, "c");
  var v378 = numHits / sequence$$29.length * 100;
  return JAM.call(v378.toFixed, v378, [2], JAM.policy.p9)
}
function _percentGCDegen(sequence$$30) {
  var lowerBoundsSequence$$2 = sequence$$30;
  var upperBoundsSequence$$2 = sequence$$30;
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/s/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/s/gi, "g"], JAM.policy.p9);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/w/gi, "a"], JAM.policy.p9);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/w/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/r/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/y/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/k/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/m/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/b/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/d/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/h/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/v/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/n/gi, "a"], JAM.policy.p9);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/r/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/y/gi, "c"], JAM.policy.p9);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/k/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/m/gi, "c"], JAM.policy.p9);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/b/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/d/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/h/gi, "c"], JAM.policy.p9);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/v/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/n/gi, "g"], JAM.policy.p9);
  return _percentGCNonDegen(lowerBoundsSequence$$2) + " to " + _percentGCNonDegen(upperBoundsSequence$$2)
}
function _molecularWeight(sequence$$31, isPhosphorylated$$4) {
  if(_containsOnlyNonDegenerates(sequence$$31)) {
    return _molecularWeightNonDegen(sequence$$31, isPhosphorylated$$4)
  }else {
    return _molecularWeightDegen(sequence$$31, isPhosphorylated$$4)
  }
  return
}
function _molecularWeightNonDegen(sequence$$32, isPhosphorylated$$5) {
  var v382 = _mw(sequence$$32, isPhosphorylated$$5);
  return JAM.call(v382.toFixed, v382, [2], JAM.policy.p9)
}
function _mw(sequence$$33, isPhosphorylated$$6) {
  var g = _getBaseCount(sequence$$33, "g");
  var a = _getBaseCount(sequence$$33, "a");
  var t = _getBaseCount(sequence$$33, "t");
  var c = _getBaseCount(sequence$$33, "c");
  var phosAdjust = 0;
  if(isPhosphorylated$$6) {
    phosAdjust = 79
  }
  return g * 329.21 + a * 313.21 + t * 304.2 + c * 289.18 - 61.96 + phosAdjust
}
function _molecularWeightDegen(sequence$$34, isPhosphorylated$$7) {
  var lowerBoundsSequence$$3 = sequence$$34;
  var upperBoundsSequence$$3 = sequence$$34;
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/r/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/y/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/s/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/w/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/k/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/m/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/b/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/d/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/h/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/v/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/n/gi, "c"], JAM.policy.p9);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/r/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/y/gi, "t"], JAM.policy.p9);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/s/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/w/gi, "a"], JAM.policy.p9);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/k/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/m/gi, "a"], JAM.policy.p9);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/b/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/d/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/h/gi, "a"], JAM.policy.p9);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/v/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/n/gi, "g"], JAM.policy.p9);
  return _molecularWeightNonDegen(lowerBoundsSequence$$3, isPhosphorylated$$7) + " to " + _molecularWeightNonDegen(upperBoundsSequence$$3, isPhosphorylated$$7)
}
function _basicTm(sequence$$35) {
  if(_containsOnlyNonDegenerates(sequence$$35)) {
    return _basicTmNonDegen(sequence$$35)
  }else {
    return _basicTmDegen(sequence$$35)
  }
  return
}
function _basicTmNonDegen(sequence$$36) {
  if(sequence$$36.length < 14) {
    var numG$$1 = _getBaseCount(sequence$$36, "g");
    var numC$$1 = _getBaseCount(sequence$$36, "c");
    var numA$$1 = _getBaseCount(sequence$$36, "a");
    var numT$$1 = _getBaseCount(sequence$$36, "t");
    var v387 = 4 * (numG$$1 + numC$$1) + 2 * (numA$$1 + numT$$1);
    return JAM.call(v387.toFixed, v387, [0], JAM.policy.p9)
  }else {
    numG$$1 = _getBaseCount(sequence$$36, "g");
    numC$$1 = _getBaseCount(sequence$$36, "c");
    var v388 = 64.9 + 41 * (numG$$1 + numC$$1 - 16.4) / sequence$$36.length;
    return JAM.call(v388.toFixed, v388, [0], JAM.policy.p9)
  }
  return
}
function _basicTmDegen(sequence$$37) {
  var lowerBoundsSequence$$4 = sequence$$37;
  var upperBoundsSequence$$4 = sequence$$37;
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/s/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/s/gi, "g"], JAM.policy.p9);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/w/gi, "a"], JAM.policy.p9);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/w/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/r/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/y/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/k/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/m/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/b/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/d/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/h/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/v/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/n/gi, "a"], JAM.policy.p9);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/r/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/y/gi, "c"], JAM.policy.p9);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/k/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/m/gi, "c"], JAM.policy.p9);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/b/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/d/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/h/gi, "c"], JAM.policy.p9);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/v/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/n/gi, "g"], JAM.policy.p9);
  return _basicTmNonDegen(lowerBoundsSequence$$4) + " to " + _basicTmNonDegen(upperBoundsSequence$$4)
}
function _molarSaltAdjustedTm(sequence$$38, molarSalt$$1) {
  if(_containsOnlyNonDegenerates(sequence$$38)) {
    return _molarSaltAdjustedTmNonDegen(sequence$$38, molarSalt$$1)
  }else {
    return _molarSaltAdjustedTmDegen(sequence$$38, molarSalt$$1)
  }
  return
}
function _molarSaltAdjustedTmNonDegen(sequence$$39, molarSalt$$2) {
  var gcHits = _getBaseCount(sequence$$39, "g") + _getBaseCount(sequence$$39, "c");
  var pGC = gcHits / sequence$$39.length * 100;
  var v396 = 81.5 + 7.21 * JAM.call(Math.log, Math, [molarSalt$$2], JAM.policy.p9) + 0.41 * pGC - 675 / sequence$$39.length;
  return JAM.call(v396.toFixed, v396, [0], JAM.policy.p9)
}
function _molarSaltAdjustedTmDegen(sequence$$40, molarSalt$$3) {
  var lowerBoundsSequence$$5 = sequence$$40;
  var upperBoundsSequence$$5 = sequence$$40;
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/s/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/s/gi, "g"], JAM.policy.p9);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/w/gi, "a"], JAM.policy.p9);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/w/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/r/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/y/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/k/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/m/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/b/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/d/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/h/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/v/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/n/gi, "a"], JAM.policy.p9);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/r/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/y/gi, "c"], JAM.policy.p9);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/k/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/m/gi, "c"], JAM.policy.p9);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/b/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/d/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/h/gi, "c"], JAM.policy.p9);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/v/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/n/gi, "g"], JAM.policy.p9);
  return _molarSaltAdjustedTmNonDegen(lowerBoundsSequence$$5, molarSalt$$3) + " to " + _molarSaltAdjustedTmNonDegen(upperBoundsSequence$$5, molarSalt$$3)
}
function _nearestNeighborTm(sequence$$41, molarSalt$$4, molarPrimerTotal$$1, molarMagnesium$$1) {
  if(_containsOnlyNonDegenerates(sequence$$41)) {
    return _nearestNeighborTmNonDegen(sequence$$41, molarSalt$$4, molarPrimerTotal$$1, molarMagnesium$$1)
  }else {
    return _nearestNeighborTmDegen(sequence$$41, molarSalt$$4, molarPrimerTotal$$1, molarMagnesium$$1)
  }
  return
}
function _nearestNeighborTmNonDegen(sequence$$42, molarSalt$$5, molarPrimerTotal$$2, molarMagnesium$$2) {
  sequence$$42 = JAM.call(sequence$$42.toLowerCase, sequence$$42, [], JAM.policy.p9);
  var R = 1.987;
  var ds = 0;
  var dh = 0;
  var correctedSalt = molarSalt$$5 + molarMagnesium$$2 * 140;
  ds = ds + 0.368 * (sequence$$42.length - 1) * JAM.call(Math.log, Math, [correctedSalt], JAM.policy.p9);
  var termDsCorr = _getTerminalCorrectionsDsHash();
  ds = ds + termDsCorr[JAM.call(sequence$$42.charAt, sequence$$42, [0], JAM.policy.p9)];
  ds = ds + termDsCorr[JAM.call(sequence$$42.charAt, sequence$$42, [sequence$$42.length - 1], JAM.policy.p9)];
  var termDhCorr = _getTerminalCorrectionsDhHash();
  dh = dh + termDhCorr[JAM.call(sequence$$42.charAt, sequence$$42, [0], JAM.policy.p9)];
  dh = dh + termDhCorr[JAM.call(sequence$$42.charAt, sequence$$42, [sequence$$42.length - 1], JAM.policy.p9)];
  var dsValues = _getDsHash();
  var dhValues = _getDhHash();
  var i$$13 = 0;
  var v415 = i$$13 < sequence$$42.length - 1;
  for(;v415;) {
    ds = ds + dsValues[JAM.call(sequence$$42.charAt, sequence$$42, [i$$13], JAM.policy.p9) + JAM.call(sequence$$42.charAt, sequence$$42, [i$$13 + 1], JAM.policy.p9)];
    dh = dh + dhValues[JAM.call(sequence$$42.charAt, sequence$$42, [i$$13], JAM.policy.p9) + JAM.call(sequence$$42.charAt, sequence$$42, [i$$13 + 1], JAM.policy.p9)];
    i$$13 = i$$13 + 1;
    v415 = i$$13 < sequence$$42.length - 1
  }
  var v416 = 1E3 * dh / (ds + R * JAM.call(Math.log, Math, [molarPrimerTotal$$2 / 2], JAM.policy.p9)) - 273.15;
  return JAM.call(v416.toFixed, v416, [2], JAM.policy.p9)
}
function _nearestNeighborTmDegen(sequence$$43, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3) {
  var lowerBoundsSequence$$6 = sequence$$43;
  var upperBoundsSequence$$6 = sequence$$43;
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/s/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/s/gi, "g"], JAM.policy.p9);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/w/gi, "a"], JAM.policy.p9);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/w/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/r/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/y/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/k/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/m/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/b/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/d/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/h/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/v/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/n/gi, "a"], JAM.policy.p9);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/r/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/y/gi, "c"], JAM.policy.p9);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/k/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/m/gi, "c"], JAM.policy.p9);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/b/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/d/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/h/gi, "c"], JAM.policy.p9);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/v/gi, "g"], JAM.policy.p9);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/n/gi, "g"], JAM.policy.p9);
  return _nearestNeighborTmNonDegen(lowerBoundsSequence$$6, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3) + " to " + _nearestNeighborTmNonDegen(upperBoundsSequence$$6, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3)
}
function _getBaseCount(sequence$$44, base$$1) {
  var basePattern = new RegExp(base$$1, "gi");
  if(JAM.call(sequence$$44.search, sequence$$44, [basePattern], JAM.policy.p9) != -1) {
    return JAM.call(sequence$$44.match, sequence$$44, [basePattern], JAM.policy.p9).length
  }else {
    return 0
  }
  return
}
function _getTerminalCorrectionsDsHash() {
  var hash = {};
  hash["g"] = -2.8;
  hash["a"] = 4.1;
  hash["t"] = 4.1;
  hash["c"] = -2.8;
  return hash
}
function _getTerminalCorrectionsDhHash() {
  var hash$$1 = {};
  hash$$1["g"] = 0.1;
  hash$$1["a"] = 2.3;
  hash$$1["t"] = 2.3;
  hash$$1["c"] = 0.1;
  return hash$$1
}
function _getDsHash() {
  var hash$$2 = {};
  hash$$2["gg"] = -19.9;
  hash$$2["ga"] = -22.2;
  hash$$2["gt"] = -22.4;
  hash$$2["gc"] = -27.2;
  hash$$2["ag"] = -21;
  hash$$2["aa"] = -22.2;
  hash$$2["at"] = -20.4;
  hash$$2["ac"] = -22.4;
  hash$$2["tg"] = -22.7;
  hash$$2["ta"] = -21.3;
  hash$$2["tt"] = -22.2;
  hash$$2["tc"] = -22.2;
  hash$$2["cg"] = -27.2;
  hash$$2["ca"] = -22.7;
  hash$$2["ct"] = -21;
  hash$$2["cc"] = -19.9;
  return hash$$2
}
function _getDhHash() {
  var hash$$3 = {};
  hash$$3["gg"] = -8;
  hash$$3["ga"] = -8.2;
  hash$$3["gt"] = -8.4;
  hash$$3["gc"] = -10.6;
  hash$$3["ag"] = -7.8;
  hash$$3["aa"] = -7.9;
  hash$$3["at"] = -7.2;
  hash$$3["ac"] = -8.4;
  hash$$3["tg"] = -8.5;
  hash$$3["ta"] = -7.2;
  hash$$3["tt"] = -7.9;
  hash$$3["tc"] = -8.2;
  hash$$3["cg"] = -10.6;
  hash$$3["ca"] = -8.5;
  hash$$3["ct"] = -7.8;
  hash$$3["cc"] = -8;
  return hash$$3
}
function _getDimerExtinctionCoefficients() {
  var hash$$4 = {};
  hash$$4["gg"] = 10.8;
  hash$$4["ga"] = 12.6;
  hash$$4["gt"] = 10;
  hash$$4["gc"] = 8.8;
  hash$$4["ag"] = 12.5;
  hash$$4["aa"] = 13.7;
  hash$$4["at"] = 11.4;
  hash$$4["ac"] = 10.6;
  hash$$4["tg"] = 9.5;
  hash$$4["ta"] = 11.7;
  hash$$4["tt"] = 8.4;
  hash$$4["tc"] = 8.1;
  hash$$4["cg"] = 9;
  hash$$4["ca"] = 10.6;
  hash$$4["ct"] = 7.6;
  hash$$4["cc"] = 7.3;
  return hash$$4
}
function _getSingleExtinctionCoefficients() {
  var hash$$5 = {};
  hash$$5["g"] = 11.5;
  hash$$5["a"] = 15.4;
  hash$$5["t"] = 8.7;
  hash$$5["c"] = 7.4;
  return hash$$5
}
function _getBaseRunsReport(sequence$$45, minRunLength) {
  var report = "";
  var hasRun = false;
  var nucleotides = ["G", "A", "T", "C"];
  var i$$14 = 0;
  var v423 = i$$14 < nucleotides.length;
  for(;v423;) {
    if(_hasRunOfBases(sequence$$45, nucleotides[i$$14], minRunLength)) {
      hasRun = true;
      report = report + "Contains run of " + nucleotides[i$$14] + "'s; "
    }
    i$$14 = i$$14 + 1;
    v423 = i$$14 < nucleotides.length
  }
  if(hasRun) {
    return"Warning: " + report
  }else {
    return"Pass"
  }
  return
}
function _getDiNucleotideRunsReport(sequence$$46, minRunLength$$1) {
  var report$$1 = "";
  var hasRun$$1 = false;
  var diNucleotides = ["GA", "GT", "GC", "AG", "AT", "AC", "TG", "TA", "TC", "CG", "CA", "CT"];
  var i$$15 = 0;
  var v426 = i$$15 < diNucleotides.length;
  for(;v426;) {
    if(_hasRunOfBases(sequence$$46, diNucleotides[i$$15], minRunLength$$1)) {
      hasRun$$1 = true;
      report$$1 = report$$1 + "Contains run of " + diNucleotides[i$$15] + "'s; "
    }
    i$$15 = i$$15 + 1;
    v426 = i$$15 < diNucleotides.length
  }
  if(hasRun$$1) {
    return"Warning: " + report$$1
  }else {
    return"Pass"
  }
  return
}
function _hasRunOfBases(sequence$$47, base$$2, minRunLength$$2) {
  var basePattern$$1 = new RegExp("(?:" + base$$2 + "){" + minRunLength$$2 + ",}", "gi");
  if(JAM.call(sequence$$47.search, sequence$$47, [basePattern$$1], JAM.policy.p9) != -1) {
    return JAM.call(sequence$$47.match, sequence$$47, [basePattern$$1], JAM.policy.p9).length
  }else {
    return 0
  }
  return
}
function _getSuitableLengthReport(sequence$$48, minSuitableLength, maxSuitableLength) {
  var report$$2 = "";
  var hasProblem = false;
  if(sequence$$48.length < minSuitableLength) {
    hasProblem = true;
    report$$2 = report$$2 + "Contains fewer than " + minSuitableLength + " bases; "
  }
  if(sequence$$48.length > maxSuitableLength) {
    hasProblem = true;
    report$$2 = report$$2 + "Contains more than " + maxSuitableLength + " bases; "
  }
  if(hasProblem) {
    return"Warning: " + report$$2
  }else {
    return"Pass"
  }
  return
}
function _getSuitableGCReport(sequence$$49, percentGCRange, minSuitableGC, maxSuitableGC) {
  var report$$3 = "";
  var hasProblem$$1 = false;
  var lowerCalculated;
  var upperCalculated;
  var rangePattern = new RegExp("([d.]+)D+([d.]+)", "gi");
  if(JAM.call(percentGCRange.search, percentGCRange, [rangePattern], JAM.policy.p9) != -1) {
    lowerCalculated = parseFloat($1);
    upperCalculated = parseFloat($2)
  }else {
    lowerCalculated = parseFloat(percentGCRange);
    upperCalculated = parseFloat(percentGCRange)
  }
  if(lowerCalculated < minSuitableGC) {
    hasProblem$$1 = true;
    report$$3 = report$$3 + "%GC is less than " + minSuitableGC + "; "
  }
  if(upperCalculated > maxSuitableGC) {
    hasProblem$$1 = true;
    report$$3 = report$$3 + "%GC is greater than " + maxSuitableGC + "; "
  }
  if(hasProblem$$1) {
    return"Warning: " + report$$3
  }else {
    return"Pass"
  }
  return
}
function _getSuitableLengthReport(sequence$$50, minSuitableLength$$1, maxSuitableLength$$1) {
  var report$$4 = "";
  var hasProblem$$2 = false;
  if(sequence$$50.length < minSuitableLength$$1) {
    hasProblem$$2 = true;
    report$$4 = report$$4 + "Contains fewer than " + minSuitableLength$$1 + " bases; "
  }
  if(sequence$$50.length > maxSuitableLength$$1) {
    hasProblem$$2 = true;
    report$$4 = report$$4 + "Contains more than " + maxSuitableLength$$1 + " bases; "
  }
  if(hasProblem$$2) {
    return"Warning: " + report$$4
  }else {
    return"Pass"
  }
  return
}
function _getSuitableTmReport(sequence$$51, range$$5, minSuitable, maxSuitable) {
  var report$$5 = "";
  var hasProblem$$3 = false;
  var lowerCalculated$$1;
  var upperCalculated$$1;
  var rangePattern$$1 = new RegExp("([d.]+)D+([d.]+)", "gi");
  if(JAM.call(range$$5.search, range$$5, [rangePattern$$1], JAM.policy.p9) != -1) {
    lowerCalculated$$1 = parseFloat($1);
    upperCalculated$$1 = parseFloat($2)
  }else {
    lowerCalculated$$1 = parseFloat(range$$5);
    upperCalculated$$1 = parseFloat(range$$5)
  }
  if(lowerCalculated$$1 < minSuitable) {
    hasProblem$$3 = true;
    report$$5 = report$$5 + "Tm is less than " + minSuitable + "; "
  }
  if(upperCalculated$$1 > maxSuitable) {
    hasProblem$$3 = true;
    report$$5 = report$$5 + "Tm is greater than " + maxSuitable + "; "
  }
  if(hasProblem$$3) {
    return"Warning: " + report$$5
  }else {
    return"Pass"
  }
  return
}
function _getSuitableThreePrimeGC(sequence$$52, minSuitable$$1, maxSuitable$$1) {
  var threePrimeEnd;
  var desiredThreePrimeEndSize = 5;
  var report$$6 = "";
  var gcCounts;
  var hasProblem$$4 = false;
  if(sequence$$52.length >= desiredThreePrimeEndSize) {
    threePrimeEnd = JAM.call(sequence$$52.substr, sequence$$52, [sequence$$52.length - desiredThreePrimeEndSize, 5], JAM.policy.p9)
  }else {
    threePrimeEnd = sequence$$52
  }
  gcCounts = _getBaseCount(threePrimeEnd, "g") + _getBaseCount(threePrimeEnd, "c");
  if(gcCounts < minSuitable$$1) {
    hasProblem$$4 = true;
    report$$6 = report$$6 + "There are less than " + minSuitable$$1 + " G's or C's in the last " + threePrimeEnd.length + " bases; "
  }
  if(gcCounts > maxSuitable$$1) {
    hasProblem$$4 = true;
    report$$6 = report$$6 + "There are more than " + maxSuitable$$1 + " G's or C's in the last " + threePrimeEnd.length + " bases; "
  }
  if(hasProblem$$4) {
    return"Warning: " + report$$6
  }else {
    return"Pass"
  }
  return
}
function _getSelfComplementarityReport(sequence$$53, maxContig, maxPercentIdent) {
  var matchScore = 1;
  var mismatchScore = -1;
  var gapPenalty = 99;
  var beginGapPenalty = 0;
  var endGapPenalty = 0;
  var returnHash = {};
  returnHash["report"] = "";
  returnHash["upper"] = "";
  returnHash["lower"] = "";
  returnHash["divider"] = "";
  var report$$7 = "";
  var hasProblem$$5 = false;
  var sequenceLength = sequence$$53.length;
  var matrix = new Complementarity;
  JAM.call(matrix.setMatch, matrix, [matchScore], JAM.policy.p9);
  JAM.call(matrix.setMismatch, matrix, [mismatchScore], JAM.policy.p9);
  var scoreSet = new ScoreSet;
  JAM.call(scoreSet.setScoreSetParam, scoreSet, [matrix, gapPenalty, beginGapPenalty, endGapPenalty], JAM.policy.p9);
  var rev = reverse(sequence$$53);
  sequence$$53 = JAM.call(sequence$$53.match, sequence$$53, [/./g], JAM.policy.p9);
  rev = JAM.call(rev.match, rev, [/./g], JAM.policy.p9);
  alignment = new AlignPairQuad;
  JAM.call(alignment.initializeMatrix, alignment, [sequence$$53, rev, scoreSet], JAM.policy.p9);
  JAM.call(alignment.fillMatrix, alignment, [], JAM.policy.p9);
  JAM.call(alignment.align, alignment, [], JAM.policy.p9);
  var v456 = JAM.call(alignment.getAlignedM, alignment, [], JAM.policy.p9);
  var seqAligned = JAM.call(v456.replace, v456, [/\-/g, " "], JAM.policy.p9);
  var v457 = JAM.call(alignment.getAlignedN, alignment, [], JAM.policy.p9);
  var revAligned = JAM.call(v457.replace, v457, [/\-/g, " "], JAM.policy.p9);
  var score = alignment.score;
  var divider = new Array;
  var maxContiguous = 0;
  var totalMatches = 0;
  var contiguous = 0;
  var i$$16 = 0;
  var v460 = i$$16 < seqAligned.length;
  for(;v460;) {
    if(JAM.call(scoreSet.getScore, scoreSet, [JAM.call(seqAligned.charAt, seqAligned, [i$$16], JAM.policy.p9), JAM.call(revAligned.charAt, revAligned, [i$$16], JAM.policy.p9)], JAM.policy.p9) == matchScore) {
      JAM.call(divider.push, divider, ["|"], JAM.policy.p9);
      contiguous = contiguous + 1;
      totalMatches = totalMatches + 1
    }else {
      JAM.call(divider.push, divider, [" "], JAM.policy.p9);
      contiguous = 0
    }
    if(contiguous > maxContiguous) {
      maxContiguous = contiguous
    }
    i$$16 = i$$16 + 1;
    v460 = i$$16 < seqAligned.length
  }
  if(maxContiguous > maxContig) {
    hasProblem$$5 = true;
    report$$7 = report$$7 + "There are more than " + maxContig + " self-annealing bases in a row; "
  }
  if(totalMatches / sequenceLength * 100 > maxPercentIdent) {
    hasProblem$$5 = true;
    report$$7 = report$$7 + "More than " + maxPercentIdent + " percent of the bases are self-annealing; "
  }
  if(hasProblem$$5) {
    report$$7 = "Warning: " + report$$7
  }else {
    report$$7 = "Pass"
  }
  returnHash["report"] = report$$7;
  returnHash["upper"] = seqAligned;
  returnHash["lower"] = revAligned;
  var v465 = returnHash;
  var v1557 = JAM.call(divider.join, divider, [""], JAM.policy.p10);
  v465["divider"] = v1557;
  return returnHash
}
function _getHairpinReport(sequence$$54, maxContig$$1, maxPercentIdent$$1) {
  var upper = sequence$$54;
  upper = JAM.call(upper.match, upper, [/./g], JAM.policy.p9);
  var loop = "";
  var lower = new Array;
  var returnHash$$1 = {};
  returnHash$$1["report"] = "";
  returnHash$$1["upper"] = "";
  returnHash$$1["lower"] = "";
  returnHash$$1["divider"] = "";
  var topScore = 0;
  var score$$1;
  var u;
  var l;
  var topScoreUpper = sequence$$54;
  var topScoreLower = "";
  var topScoreLoop = "";
  var matchScore$$1 = 1;
  var mismatchScore$$1 = -1;
  var gapPenalty$$1 = 99;
  var beginGapPenalty$$1 = 0;
  var endGapPenalty$$1 = 0;
  var report$$8 = "";
  var hasProblem$$6 = false;
  var sequenceLength$$1 = sequence$$54.length;
  var matrix$$1 = new Complementarity;
  JAM.call(matrix$$1.setMatch, matrix$$1, [matchScore$$1], JAM.policy.p9);
  JAM.call(matrix$$1.setMismatch, matrix$$1, [mismatchScore$$1], JAM.policy.p9);
  var scoreSet$$1 = new ScoreSet;
  JAM.call(scoreSet$$1.setScoreSetParam, scoreSet$$1, [matrix$$1, gapPenalty$$1, beginGapPenalty$$1, endGapPenalty$$1], JAM.policy.p9);
  var v473 = upper.length > 0;
  for(;v473;) {
    score$$1 = 0;
    if(loop == "") {
      loop = JAM.call(upper.pop, upper, [], JAM.policy.p9)
    }else {
      JAM.call(lower.push, lower, [loop], JAM.policy.p9);
      loop = ""
    }
    u = upper.length - 1;
    l = lower.length - 1;
    var v913 = u >= 0;
    if(v913) {
      v913 = l >= 0
    }
    var v471 = v913;
    for(;v471;) {
      score$$1 = score$$1 + JAM.call(scoreSet$$1.getScore, scoreSet$$1, [upper[u], lower[l]], JAM.policy.p9);
      u = u - 1;
      l = l - 1;
      var v916 = u >= 0;
      if(v916) {
        v916 = l >= 0
      }
      v471 = v916
    }
    if(score$$1 > topScore) {
      topScore = score$$1;
      topScoreUpper = JAM.call(upper.join, upper, [""], JAM.policy.p10);
      topScoreLower = JAM.call(lower.join, lower, [""], JAM.policy.p10);
      topScoreLoop = loop
    }
    v473 = upper.length > 0
  }
  var upperLowerDiff = topScoreUpper.length - topScoreLower.length;
  if(upperLowerDiff > 0) {
    var i$$17 = 0;
    var v476 = i$$17 < upperLowerDiff;
    for(;v476;) {
      topScoreLower = " " + topScoreLower;
      i$$17 = i$$17 + 1;
      v476 = i$$17 < upperLowerDiff
    }
  }else {
    if(upperLowerDiff < 0) {
      i$$17 = upperLowerDiff;
      var v477 = i$$17 < 0;
      for(;v477;) {
        topScoreUpper = " " + topScoreUpper;
        i$$17 = i$$17 + 1;
        v477 = i$$17 < 0
      }
    }
  }
  var maxContiguous$$1 = 0;
  var totalMatches$$1 = 0;
  var contiguous$$1 = 0;
  var divider$$1 = new Array;
  i$$17 = 0;
  var v482 = i$$17 < topScoreUpper.length;
  for(;v482;) {
    if(JAM.call(scoreSet$$1.getScore, scoreSet$$1, [JAM.call(topScoreUpper.charAt, topScoreUpper, [i$$17], JAM.policy.p9), JAM.call(topScoreLower.charAt, topScoreLower, [i$$17], JAM.policy.p9)], JAM.policy.p9) == matchScore$$1) {
      JAM.call(divider$$1.push, divider$$1, ["|"], JAM.policy.p9);
      contiguous$$1 = contiguous$$1 + 1;
      totalMatches$$1 = totalMatches$$1 + 1
    }else {
      JAM.call(divider$$1.push, divider$$1, [" "], JAM.policy.p9);
      contiguous$$1 = 0
    }
    if(contiguous$$1 > maxContiguous$$1) {
      maxContiguous$$1 = contiguous$$1
    }
    i$$17 = i$$17 + 1;
    v482 = i$$17 < topScoreUpper.length
  }
  if(maxContiguous$$1 > maxContig$$1) {
    hasProblem$$6 = true;
    report$$8 = report$$8 + "There are more than " + maxContig$$1 + " hairpin bases in a row; "
  }
  if(totalMatches$$1 / sequenceLength$$1 * 100 > maxPercentIdent$$1) {
    hasProblem$$6 = true;
    report$$8 = report$$8 + "More than " + maxPercentIdent$$1 + " percent of the bases are in a hairpin; "
  }
  if(hasProblem$$6) {
    report$$8 = "Warning: " + report$$8
  }else {
    report$$8 = "Pass"
  }
  if(topScoreLoop == "") {
    topScoreLoop = ")"
  }
  returnHash$$1["report"] = report$$8;
  returnHash$$1["upper"] = topScoreUpper;
  returnHash$$1["divider"] = JAM.call(divider$$1.join, divider$$1, [""], JAM.policy.p10) + topScoreLoop;
  returnHash$$1["lower"] = topScoreLower;
  return returnHash$$1
}
function getScore(r1$$1, r2) {
  var v489 = this.scoringMatrix;
  return JAM.call(v489.scoringMatrix_getScore, v489, [r1$$1, r2], JAM.policy.p9)
}
function setScoreSetParam(scoringMatrix, gapPenalty$$2, beginGapPenalty$$2, endGapPenalty$$2) {
  this.scoringMatrix = scoringMatrix;
  this.gap = gapPenalty$$2;
  this.beginGap = beginGapPenalty$$2;
  this.endGap = endGapPenalty$$2;
  return
}
function ScoreSet() {
  this.useBeginGapTop = true;
  this.useBeginGapLeft = true;
  this.useEndGapBottom = true;
  this.useEndGapRight = true;
  return
}
function scoringMatrix_getScore(r1$$2, r2$$1) {
  r1$$2 = JAM.call(r1$$2.toLowerCase, r1$$2, [], JAM.policy.p9);
  r2$$1 = JAM.call(r2$$1.toLowerCase, r2$$1, [], JAM.policy.p9);
  var v1196 = r1$$2 == "g";
  if(v1196) {
    v1196 = r2$$1 == "c"
  }
  var v925 = v1196;
  if(!v925) {
    var v1197 = r2$$1 == "g";
    if(v1197) {
      v1197 = r1$$2 == "c"
    }
    v925 = v1197
  }
  if(v925) {
    return this.match
  }else {
    var v1199 = r1$$2 == "a";
    if(v1199) {
      v1199 = r2$$1 == "t"
    }
    var v926 = v1199;
    if(!v926) {
      var v1200 = r2$$1 == "a";
      if(v1200) {
        v1200 = r1$$2 == "t"
      }
      v926 = v1200
    }
    if(v926) {
      return this.match
    }else {
      return this.mismatch
    }
  }
  return
}
function ScoringMatrix() {
  return
}
function setMismatch(mismatchScore$$2) {
  this.mismatch = mismatchScore$$2;
  return
}
function setMatch(matchScore$$2) {
  this.match = matchScore$$2;
  return
}
function Complementarity() {
  return
}
function Node() {
  return
}
function initializeMatrix(sequenceOne$$2, sequenceTwo$$2, scoreSet$$2) {
  this.scoreSet = scoreSet$$2;
  this.M = sequenceOne$$2;
  this.N = sequenceTwo$$2;
  this.score = 0;
  var v1558 = new Array(this.M.length + 1);
  this.nodes = v1558;
  var i$$18 = 0;
  var v498 = i$$18 < this.nodes.length;
  for(;v498;) {
    var v493 = this.nodes;
    var v494 = i$$18;
    var v1559 = new Array(this.N.length + 1);
    v493[v494] = v1559;
    var j$$10 = 0;
    var v497 = j$$10 < this.nodes[i$$18].length;
    for(;v497;) {
      var v495 = this.nodes[i$$18];
      var v496 = j$$10;
      var v1560 = new Node;
      v495[v496] = v1560;
      j$$10 = j$$10 + 1;
      v497 = j$$10 < this.nodes[i$$18].length
    }
    i$$18 = i$$18 + 1;
    v498 = i$$18 < this.nodes.length
  }
  this.nodes[0][0].value = 0;
  i$$18 = 1;
  var v505 = i$$18 < this.nodes.length;
  for(;v505;) {
    if(this.scoreSet.useBeginGapLeft) {
      this.nodes[i$$18][0].value = this.nodes[i$$18 - 1][0].value - this.scoreSet.beginGap
    }else {
      this.nodes[i$$18][0].value = this.nodes[i$$18 - 1][0].value - this.scoreSet.gap
    }
    this.nodes[i$$18][0].tracebackI = i$$18 - 1;
    this.nodes[i$$18][0].tracebackJ = 0;
    i$$18 = i$$18 + 1;
    v505 = i$$18 < this.nodes.length
  }
  j$$10 = 1;
  var v511 = j$$10 < this.nodes[0].length;
  for(;v511;) {
    if(this.scoreSet.useBeginGapTop) {
      this.nodes[0][j$$10].value = this.nodes[0][j$$10 - 1].value - this.scoreSet.beginGap
    }else {
      this.nodes[0][j$$10].value = this.nodes[0][j$$10 - 1].value - this.scoreSet.gap
    }
    this.nodes[0][j$$10].tracebackI = 0;
    this.nodes[0][j$$10].tracebackJ = j$$10 - 1;
    j$$10 = j$$10 + 1;
    v511 = j$$10 < this.nodes[0].length
  }
  return
}
function dumpMatrix() {
  var v512 = outputWindow.document;
  JAM.call(v512.write, v512, ["Dynamic programming matrix i=" + this.nodes.length + " and j=" + this.nodes[0].length], JAM.policy.p9);
  var v514 = outputWindow.document;
  JAM.call(v514.write, v514, ["\n"], JAM.policy.p9);
  var i$$19 = 0;
  var v525 = i$$19 < this.nodes.length;
  for(;v525;) {
    var j$$11 = 0;
    var v523 = j$$11 < this.nodes[i$$19].length;
    for(;v523;) {
      var traceI = this.nodes[i$$19][j$$11].tracebackI;
      var traceJ = this.nodes[i$$19][j$$11].tracebackJ;
      if(traceI == undefined) {
        traceI = "u"
      }
      if(traceJ == undefined) {
        traceJ = "u"
      }
      var output = "(" + i$$19 + "," + j$$11 + ")[" + traceI + "," + traceJ + "]=" + this.nodes[i$$19][j$$11].value;
      var v521 = outputWindow.document;
      JAM.call(v521.write, v521, [rightNum(output, "", 20, " ")], JAM.policy.p9);
      j$$11 = j$$11 + 1;
      v523 = j$$11 < this.nodes[i$$19].length
    }
    var v524 = outputWindow.document;
    JAM.call(v524.write, v524, ["\n"], JAM.policy.p9);
    i$$19 = i$$19 + 1;
    v525 = i$$19 < this.nodes.length
  }
  var v526 = outputWindow.document;
  JAM.call(v526.write, v526, ["\n"], JAM.policy.p9);
  return
}
function fillMatrix() {
  var i$$20 = 1;
  var v572 = i$$20 < this.nodes.length;
  for(;v572;) {
    var j$$12 = 1;
    var v571 = j$$12 < this.nodes[0].length;
    for(;v571;) {
      var a$$1;
      var b;
      var c$$1;
      var v969 = i$$20 == this.nodes.length - 1;
      if(v969) {
        v969 = j$$12 == this.nodes[0].length - 1
      }
      if(v969) {
        if(this.scoreSet.useEndGapRight) {
          a$$1 = this.nodes[i$$20 - 1][j$$12].value - this.scoreSet.endGap
        }else {
          a$$1 = this.nodes[i$$20 - 1][j$$12].value - this.scoreSet.gap
        }
        if(this.scoreSet.useEndGapBottom) {
          b = this.nodes[i$$20][j$$12 - 1].value - this.scoreSet.endGap
        }else {
          b = this.nodes[i$$20][j$$12 - 1].value - this.scoreSet.gap
        }
      }else {
        if(i$$20 == this.nodes.length - 1) {
          a$$1 = this.nodes[i$$20 - 1][j$$12].value - this.scoreSet.gap;
          if(this.scoreSet.useEndGapBottom) {
            b = this.nodes[i$$20][j$$12 - 1].value - this.scoreSet.endGap
          }else {
            b = this.nodes[i$$20][j$$12 - 1].value - this.scoreSet.gap
          }
        }else {
          if(j$$12 == this.nodes[0].length - 1) {
            if(this.scoreSet.useEndGapRight) {
              a$$1 = this.nodes[i$$20 - 1][j$$12].value - this.scoreSet.endGap
            }else {
              a$$1 = this.nodes[i$$20 - 1][j$$12].value - this.scoreSet.gap
            }
            b = this.nodes[i$$20][j$$12 - 1].value - this.scoreSet.gap
          }else {
            a$$1 = this.nodes[i$$20 - 1][j$$12].value - this.scoreSet.gap;
            b = this.nodes[i$$20][j$$12 - 1].value - this.scoreSet.gap
          }
        }
      }
      var v558 = this.nodes[i$$20 - 1][j$$12 - 1].value;
      var v1001 = this.scoreSet;
      c$$1 = v558 + JAM.call(v1001.getScore, v1001, [this.M[i$$20 - 1], this.N[j$$12 - 1]], JAM.policy.p9);
      var v1004 = a$$1 >= b;
      if(v1004) {
        v1004 = a$$1 >= c$$1
      }
      if(v1004) {
        this.nodes[i$$20][j$$12].value = a$$1;
        this.nodes[i$$20][j$$12].tracebackI = i$$20 - 1;
        this.nodes[i$$20][j$$12].tracebackJ = j$$12
      }else {
        var v1008 = b >= c$$1;
        if(v1008) {
          v1008 = b >= a$$1
        }
        if(v1008) {
          this.nodes[i$$20][j$$12].value = b;
          this.nodes[i$$20][j$$12].tracebackI = i$$20;
          this.nodes[i$$20][j$$12].tracebackJ = j$$12 - 1
        }else {
          this.nodes[i$$20][j$$12].value = c$$1;
          this.nodes[i$$20][j$$12].tracebackI = i$$20 - 1;
          this.nodes[i$$20][j$$12].tracebackJ = j$$12 - 1
        }
      }
      j$$12 = j$$12 + 1;
      v571 = j$$12 < this.nodes[0].length
    }
    i$$20 = i$$20 + 1;
    v572 = i$$20 < this.nodes.length
  }
  this.score = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1].value;
  return
}
function alignQuad() {
  var v1561 = new Array;
  this.alignedM = v1561;
  var v1562 = new Array;
  this.alignedN = v1562;
  var currentI = this.nodes.length - 1;
  var currentJ = this.nodes[0].length - 1;
  var currentNode = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1];
  var v1024 = currentNode.tracebackI != undefined;
  if(v1024) {
    v1024 = currentNode.tracebackJ != undefined
  }
  var v592 = v1024;
  for(;v592;) {
    var v1025 = currentNode.tracebackI == currentI - 1;
    if(v1025) {
      v1025 = currentNode.tracebackJ == currentJ - 1
    }
    if(v1025) {
      var v578 = this.alignedM;
      var v1026 = this.M;
      JAM.call(v578.push, v578, [JAM.call(v1026.pop, v1026, [], JAM.policy.p9)], JAM.policy.p9);
      var v580 = this.alignedN;
      var v1027 = this.N;
      JAM.call(v580.push, v580, [JAM.call(v1027.pop, v1027, [], JAM.policy.p9)], JAM.policy.p9)
    }else {
      if(currentNode.tracebackJ == currentJ - 1) {
        var v582 = this.alignedM;
        JAM.call(v582.push, v582, ["-"], JAM.policy.p9);
        var v583 = this.alignedN;
        var v1030 = this.N;
        JAM.call(v583.push, v583, [JAM.call(v1030.pop, v1030, [], JAM.policy.p9)], JAM.policy.p9)
      }else {
        var v585 = this.alignedM;
        var v1031 = this.M;
        JAM.call(v585.push, v585, [JAM.call(v1031.pop, v1031, [], JAM.policy.p9)], JAM.policy.p9);
        var v587 = this.alignedN;
        JAM.call(v587.push, v587, ["-"], JAM.policy.p9)
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    currentNode = this.nodes[currentNode.tracebackI][currentNode.tracebackJ];
    var v1034 = currentNode.tracebackI != undefined;
    if(v1034) {
      v1034 = currentNode.tracebackJ != undefined
    }
    v592 = v1034
  }
  var v593 = this.alignedM;
  var v1563 = JAM.call(v593.reverse, v593, [], JAM.policy.p9);
  this.alignedM = v1563;
  var v594 = this.alignedN;
  var v1564 = JAM.call(v594.reverse, v594, [], JAM.policy.p9);
  this.alignedN = v1564;
  return
}
function getAlignedM() {
  var v595 = this.alignedM;
  return JAM.call(v595.join, v595, [""], JAM.policy.p10)
}
function getAlignedN() {
  var v596 = this.alignedN;
  return JAM.call(v596.join, v596, [""], JAM.policy.p10)
}
function AlignPairQuad() {
  return
}
new ScoreSet;
ScoreSet.prototype.getScore = getScore;
ScoreSet.prototype.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
ScoringMatrix.prototype.scoringMatrix_getScore = scoringMatrix_getScore;
var v600 = Complementarity;
var v1565 = new ScoringMatrix;
v600.prototype = v1565;
Complementarity.prototype.setMismatch = setMismatch;
Complementarity.prototype.setMatch = setMatch;
new AlignPairQuad;
AlignPairQuad.prototype.initializeMatrix = initializeMatrix;
AlignPairQuad.prototype.fillMatrix = fillMatrix;
AlignPairQuad.prototype.align = alignQuad;
AlignPairQuad.prototype.getAlignedM = getAlignedM;
AlignPairQuad.prototype.getAlignedN = getAlignedN;
AlignPairQuad.prototype.dumpMatrix = dumpMatrix;
JAM.set(document, "onload", v2);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9), "onclick", v3);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9), "onclick", v4)
