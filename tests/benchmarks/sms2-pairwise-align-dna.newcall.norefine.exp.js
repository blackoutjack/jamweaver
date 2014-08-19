function v4() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return
}
function v3() {
  try {
    pairwiseAlignDna(document)
  }catch(e$$5) {
    alert("The following error was encountered: " + e$$5)
  }
  return
}
function v2() {
  var v8 = document.main_form.main_submit;
  JAM.call(v8.focus, v8, [], JAM.policy.p26);
  return
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$12, s$$2) {
    return p1 + "\n"
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p26);
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
    var v1231 = arrayOfTitles[i$$1];
    var v566 = JAM.call(v1231.search, v1231, [/\S/], JAM.policy.p26) == -1;
    if(!v566) {
      var v1378 = arrayOfSequences[i$$1];
      var v975 = JAM.call(v1378.search, v1378, [/\S/], JAM.policy.p26) == -1;
      if(!v975) {
        v975 = arrayOfSequences[i$$1].length != lengthOfAlign
      }
      v566 = v975
    }
    if(v566) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v12 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v568 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p26) == -1;
  if(!v568) {
    var v978 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p26) == -1;
    if(!v978) {
      var v1236 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p26) == -1;
      if(!v1236) {
        var v1381 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p26) == -1;
        if(!v1381) {
          v1381 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p26) == -1
        }
        v1236 = v1381
      }
      v978 = v1236
    }
    v568 = v978
  }
  if(v568) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v980 = formElement.value;
  if(JAM.call(v980.search, v980, [/\S/], JAM.policy.p26) == -1) {
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
    var v981 = arrayOfPatterns[z$$2];
    if(JAM.call(v981.search, v981, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p26) == -1) {
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
    var v1238 = arrayOfPatterns[j];
    var v575 = JAM.call(v1238.match, v1238, [/\/.+\//], JAM.policy.p26) + "gi";
    if(JAM.isEval(eval)) {
      var v1597 = eval("introspect(JAM.policy.pFull) { " + v575 + " }")
    }else {
      var v1597 = JAM.call(eval, null, [v575])
    }
    v20[v21] = v1597;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    var v984 = arrayOfPatterns[j];
    var v576 = JAM.call(v984.match, v984, [/=[a-zA-Z\*]/], JAM.policy.p26);
    var v1598 = JAM.call(v576.toString, v576, [], JAM.policy.p26);
    v22[v23] = v1598;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    var v577 = geneticCodeMatchResult[j];
    var v1599 = JAM.call(v577.replace, v577, [/=/g, ""], JAM.policy.p26);
    v24[v25] = v1599;
    j = j + 1;
    v26 = j < arrayOfPatterns.length
  }
  var i$$2 = 0;
  var v33 = i$$2 <= testSequence.length - 3;
  for(;v33;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p26);
    j = 0;
    var v31 = j < geneticCodeMatchExp.length;
    for(;v31;) {
      if(JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p37) != -1) {
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
    var v988 = arrayOfPatterns$$1[z$$3];
    if(JAM.call(v988.search, v988, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p26) != -1) {
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
      var v990 = arrayOfPatterns$$1[j$$1];
      if(JAM.call(v990.search, v990, [re], JAM.policy.p37) != -1) {
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
    var v991 = arrayOfPatterns$$2[z$$4];
    if(JAM.call(v991.search, v991, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p26) == -1) {
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
  var v1239 = getSequenceFromFasta(text$$7);
  if(JAM.call(v1239.replace, v1239, [/[^A-Za-z]/g, ""], JAM.policy.p26).length > maxInput) {
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
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p26);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p26);
  return dnaSequence
}
function closeForm() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</form>"], JAM.policy.p27);
  return true
}
function closePre() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</div>"], JAM.policy.p27);
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</pre>\n"], JAM.policy.p27);
  return
}
function closeTextArea() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</textarea>"], JAM.policy.p27);
  return true
}
function closeWindow() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</body>\n</html>\n"], JAM.policy.p27);
  outputWindow.status = "Done.";
  var v52 = outputWindow.document;
  JAM.call(v52.close, v52, [], JAM.policy.p26);
  return true
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = JAM.call(sequence$$1.toLowerCase, sequence$$1, [], JAM.policy.p26);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p26);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p26);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p26);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p26);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p26);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p26);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p26);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p26);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p26);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p26);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p26);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p26);
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
    var v994 = alignArray[i$$4];
    if(JAM.call(v994.search, v994, [/[^\s]+\s/], JAM.policy.p26) == -1) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    v55 = i$$4 < alignArray.length
  }
  return true
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p26);
  return alignSeq
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p26);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p26);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p26);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p26)
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  if(JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p26) != -1) {
    var v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p37);
    for(;v57;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p37);
      v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p37)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var stringToReturn = "&gt;results for " + sequence$$2.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p26) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"'
  }
  stringToReturn = stringToReturn + ' starting "' + JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p26) + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p26) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"'
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p26) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p26) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"'
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p26) + '"';
  return'<div class="info">' + stringToReturn$$1 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = new Array(arrayOfPatterns$$3.length);
  var j$$2 = 0;
  var v75 = j$$2 < arrayOfPatterns$$3.length;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    var v1240 = arrayOfPatterns$$3[j$$2];
    var v624 = JAM.call(v1240.match, v1240, [/\/.+\//], JAM.policy.p26) + "gi";
    if(JAM.isEval(eval)) {
      var v1600 = eval("introspect(JAM.policy.pFull) { " + v624 + " }")
    }else {
      var v1600 = JAM.call(eval, null, [v624])
    }
    v73[v74] = v1600;
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
    var v996 = arrayOfPatterns$$4[j$$3];
    var v627 = JAM.call(v996.match, v996, [/=[a-zA-Z\*]/], JAM.policy.p26);
    var v1601 = JAM.call(v627.toString, v627, [], JAM.policy.p26);
    v77[v78] = v1601;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    var v628 = geneticCodeMatchResult$$1[j$$3];
    var v1602 = JAM.call(v628.replace, v628, [/=/g, ""], JAM.policy.p26);
    v79[v80] = v1602;
    j$$3 = j$$3 + 1;
    v81 = j$$3 < arrayOfPatterns$$4.length
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p26) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"'
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p26) + '"';
  return'<div class="info">' + stringToReturn$$2 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p26) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"'
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p26) + '"';
  return'<div class="info">' + stringToReturn$$3 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p26) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"'
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p26) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p26) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleTwo$$1 + '"'
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p26) + '"';
  return'<div class="info">' + stringToReturn$$4 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v102 = j$$4 < lengthOut;
  for(;v102;) {
    tempNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p26) * components.length], JAM.policy.p26);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p37);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p27)
}
function getSequenceFromFasta(sequenceRecord) {
  if(JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p26) != -1) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p26)
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if(JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p26) != -1) {
    var v104 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p26);
    fastaTitle = JAM.call(v104.toString, v104, [], JAM.policy.p26);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p26);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p26);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p26)
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v656 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p26) != -1;
  if(!v656) {
    var v999 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p26) != -1;
    if(!v999) {
      var v1242 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p26) != -1;
      if(!v1242) {
        var v1384 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p26) != -1;
        if(!v1384) {
          var v1474 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p26) != -1;
          if(!v1474) {
            var v1508 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p26) != -1;
            if(!v1508) {
              var v1533 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p26) != -1;
              if(!v1533) {
                var v1547 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p26) != -1;
                if(!v1547) {
                  var v1559 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p26) != -1;
                  if(!v1559) {
                    var v1569 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p26) != -1;
                    if(!v1569) {
                      v1569 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p26) != -1
                    }
                    v1559 = v1569
                  }
                  v1547 = v1559
                }
                v1533 = v1547
              }
              v1508 = v1533
            }
            v1474 = v1508
          }
          v1384 = v1474
        }
        v1242 = v1384
      }
      v999 = v1242
    }
    v656 = v999
  }
  if(v656) {
    return false
  }
  return true
}
function openForm() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ['<form action="">\n'], JAM.policy.p27);
  return true
}
function openPre() {
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ["<pre>"], JAM.policy.p27);
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<div class="pre">'], JAM.policy.p27);
  return
}
function openTextArea() {
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p27);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p27);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p26);
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p37);
  if(isColor) {
    var v113 = outputWindow.document;
    JAM.call(v113.write, v113, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p37)
  }else {
    var v115 = outputWindow.document;
    JAM.call(v115.write, v115, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p37)
  }
  var v117 = outputWindow.document;
  JAM.call(v117.write, v117, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"], JAM.policy.p37);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p27);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p26);
  var v119 = outputWindow.document;
  JAM.call(v119.write, v119, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p37);
  if(isBackground) {
    var v121 = outputWindow.document;
    JAM.call(v121.write, v121, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p37)
  }else {
    var v123 = outputWindow.document;
    JAM.call(v123.write, v123, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p37)
  }
  var v125 = outputWindow.document;
  JAM.call(v125.write, v125, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"], JAM.policy.p37);
  outputWindow.status = "Please Wait.";
  return true
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p26)
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p26)
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p26)
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p26)
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p26)
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p26)
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p26)
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p26)
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p26)
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  if(JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p26) != -1) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p26);
    tempDnaArray = JAM.call(tempDnaArray.reverse, tempDnaArray, [], JAM.policy.p26);
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p27)
  }
  return dnaSequence$$1
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = JAM.call(theNumber.toString, theNumber, [], JAM.policy.p26);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p37);
  if(testArray[0] != testString) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  if(JAM.call(testString.search, testString, [re$$2], JAM.policy.p37) == -1) {
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p26);
  if(testString != "1X2X3X") {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  if(JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p26) != 2489.824) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  if(JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p26) != 2489.8) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  if(JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p26) == -1) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v671 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p26) == -1;
  if(!v671) {
    var v1010 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p26) == -1;
    if(!v1010) {
      var v1253 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p26) == -1;
      if(!v1253) {
        v1253 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p26) == -1
      }
      v1010 = v1253
    }
    v671 = v1010
  }
  if(v671) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if(JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p26) == -1) {
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
  if(JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p26) != -1) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  if(JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p26) != -1) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v676 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p26) == -1;
  if(!v676) {
    var v1013 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p26) == -1;
    if(!v1013) {
      var v1256 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p26) == -1;
      if(!v1256) {
        v1256 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p26) == -1
      }
      v1013 = v1256
    }
    v676 = v1013
  }
  if(v676) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v677 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p26) == -1;
  if(!v677) {
    var v1016 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p26) == -1;
    if(!v1016) {
      var v1259 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p26) == -1;
      if(!v1259) {
        v1259 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p26) == -1
      }
      v1016 = v1259
    }
    v677 = v1016
  }
  if(v677) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  if(JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p26) == -1) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v679 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p26) == -1;
  if(!v679) {
    var v1019 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p26) == -1;
    if(!v1019) {
      var v1262 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p26) == -1;
      if(!v1262) {
        v1262 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p26) == -1
      }
      v1019 = v1262
    }
    v679 = v1019
  }
  if(v679) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  if(JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p26) == -1) {
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
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p37);
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
    JAM.call(v154.write, v154, [lineOfText + "\n"], JAM.policy.p37);
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
    var v684 = adjustment < 0;
    if(v684) {
      v684 = adjusted >= 0
    }
    if(v684) {
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
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p37);
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
      JAM.call(v167.write, v167, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p37);
      if(strands$$1 == "two") {
        var v169 = outputWindow.document;
        JAM.call(v169.write, v169, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p37);
        var v171 = outputWindow.document;
        JAM.call(v171.write, v171, ["\n"], JAM.policy.p27)
      }
    }else {
      if(numberPosition$$1 == "right") {
        var v173 = outputWindow.document;
        JAM.call(v173.write, v173, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p37);
        if(strands$$1 == "two") {
          var v175 = outputWindow.document;
          JAM.call(v175.write, v175, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p37);
          var v177 = outputWindow.document;
          JAM.call(v177.write, v177, ["\n"], JAM.policy.p27)
        }
      }else {
        if(numberPosition$$1 == "above") {
          var v179 = outputWindow.document;
          JAM.call(v179.write, v179, [aboveNum + "\n"], JAM.policy.p37);
          var v181 = outputWindow.document;
          JAM.call(v181.write, v181, [lineOfText$$1 + "\n"], JAM.policy.p37);
          if(strands$$1 == "two") {
            var v183 = outputWindow.document;
            JAM.call(v183.write, v183, [complement(lineOfText$$1) + "\n"], JAM.policy.p37);
            var v185 = outputWindow.document;
            JAM.call(v185.write, v185, ["\n"], JAM.policy.p27)
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
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p37);
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
      JAM.call(v200.write, v200, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p37)
    }else {
      if(numberPosition$$2 == "right") {
        var v202 = outputWindow.document;
        JAM.call(v202.write, v202, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p37)
      }else {
        if(numberPosition$$2 == "above") {
          var v204 = outputWindow.document;
          JAM.call(v204.write, v204, [aboveNum$$1 + "\n"], JAM.policy.p37);
          var v206 = outputWindow.document;
          JAM.call(v206.write, v206, [lineOfText$$2 + "\n"], JAM.policy.p37)
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
  var v701 = sequence$$13.length <= firstIndexToMutate;
  if(!v701) {
    var v1030 = lastIndexToMutate < 0;
    if(!v1030) {
      v1030 = lastIndexToMutate <= firstIndexToMutate
    }
    v701 = v1030
  }
  if(v701) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p26) * maxNum], JAM.policy.p26);
    var v703 = randNum < firstIndexToMutate;
    if(!v703) {
      v703 = randNum > lastIndexToMutate
    }
    if(v703) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p26);
    needNewChar = true;
    for(;needNewChar;) {
      componentsIndex = JAM.call(Math.round, Math, [JAM.call(Math.random, Math, [], JAM.policy.p26) * components$$1.length], JAM.policy.p26);
      if(componentsIndex == components$$1.length) {
        componentsIndex = 0
      }
      if(components$$1[componentsIndex] != currentChar) {
        needNewChar = false
      }
    }
    sequence$$13 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p26) + components$$1[componentsIndex] + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p36);
    i$$8 = i$$8 + 1;
    v220 = i$$8 < numMut
  }
  var v221 = outputWindow.document;
  JAM.call(v221.write, v221, [addReturns(sequence$$13)], JAM.policy.p37);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v227 = j$$9 < lengthOut$$1;
  for(;v227;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p26) * components$$2.length], JAM.policy.p26);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if(sequence$$14.length == 60) {
      var v224 = outputWindow.document;
      JAM.call(v224.write, v224, [sequence$$14 + "\n"], JAM.policy.p37);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v227 = j$$9 < lengthOut$$1
  }
  var v228 = outputWindow.document;
  JAM.call(v228.write, v228, [sequence$$14 + "\n"], JAM.policy.p37);
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
    shiftValue = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p26).length;
    sequence$$15 = JAM.call(sequence$$15.substring, sequence$$15, [sequence$$15.length - lookAhead, sequence$$15.length], JAM.policy.p36) + sequence$$15 + JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p26);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v234 = outputWindow.document;
  JAM.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p27);
  var v235 = outputWindow.document;
  JAM.call(v235.write, v235, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p37);
  var i$$9 = 0;
  var v252 = i$$9 < arrayOfItems.length;
  for(;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v718 = arrayOfItems[i$$9];
    matchExp = JAM.call(v718.match, v718, [/\/.+\//], JAM.policy.p26) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    var v1269 = arrayOfItems[i$$9];
    var v1036 = JAM.call(v1269.match, v1269, [/\)\D*\d+/], JAM.policy.p26);
    var v719 = JAM.call(v1036.toString, v1036, [], JAM.policy.p26);
    cutDistance = parseFloat(JAM.call(v719.replace, v719, [/\)\D*/, ""], JAM.policy.p26));
    var v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p37);
    for(;v244;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v720 = matchPosition >= lowerLimit;
      if(v720) {
        v720 = matchPosition < upperLimit
      }
      if(v720) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1)
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p37)
    }
    if(JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p26) != -1) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p26)
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
    var v1514 = '<tr><td class="' + backGroundClass + '">';
    var v1565 = arrayOfItems[i$$9];
    var v1553 = JAM.call(v1565.match, v1565, [/\([^\(]+\)/], JAM.policy.p26);
    var v1540 = JAM.call(v1553.toString, v1553, [], JAM.policy.p26);
    JAM.call(v250.write, v250, [v1514 + JAM.call(v1540.replace, v1540, [/\(|\)/g, ""], JAM.policy.p26) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p37);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v252 = i$$9 < arrayOfItems.length
  }
  var v253 = outputWindow.document;
  JAM.call(v253.write, v253, ["</tbody></table>\n"], JAM.policy.p27);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p27);
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p37);
  var i$$10 = 0;
  var v265 = i$$10 < arrayOfItems$$1.length;
  for(;v265;) {
    var tempNumber = 0;
    var v729 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v729.match, v729, [/\/[^\/]+\//], JAM.policy.p26) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p37) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p37).length
    }
    var percentage = 0;
    var v1040 = originalLength + 1;
    var v1404 = arrayOfItems$$1[i$$10];
    if(v1040 - parseFloat(JAM.call(v1404.match, v1404, [/\d+/], JAM.policy.p26)) > 0) {
      var v260 = 100 * tempNumber;
      var v732 = originalLength + 1;
      var v1273 = arrayOfItems$$1[i$$10];
      percentage = v260 / (v732 - parseFloat(JAM.call(v1273.match, v1273, [/\d+/], JAM.policy.p26)))
    }
    var v263 = outputWindow.document;
    var v1566 = arrayOfItems$$1[i$$10];
    var v1554 = JAM.call(v1566.match, v1566, [/\([^\(]+\)\b/], JAM.policy.p26);
    var v1541 = JAM.call(v1554.toString, v1554, [], JAM.policy.p26);
    JAM.call(v263.write, v263, ["<tr><td>" + JAM.call(v1541.replace, v1541, [/\(|\)/g, ""], JAM.policy.p26) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p26) + "</td></tr>\n"], JAM.policy.p37);
    i$$10 = i$$10 + 1;
    v265 = i$$10 < arrayOfItems$$1.length
  }
  var v266 = outputWindow.document;
  JAM.call(v266.write, v266, ["</tbody></table>\n"], JAM.policy.p27);
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
    randNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p26) * maxNum$$1], JAM.policy.p26);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p26);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p26);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p26);
    sequence$$17 = tempString1 + tempString2;
    if(tempSeq.length == 60) {
      var v270 = outputWindow.document;
      JAM.call(v270.write, v270, [tempSeq + "\n"], JAM.policy.p37);
      tempSeq = ""
    }
    v273 = sequence$$17.length > 0
  }
  var v274 = outputWindow.document;
  JAM.call(v274.write, v274, [tempSeq + "\n"], JAM.policy.p37);
  return true
}
function pairwiseAlignDna(theDocument) {
  var newDnaOne = "";
  var titleOne = "";
  var newDnaTwo = "";
  var titleTwo = "";
  var maxInput$$3 = 2E3;
  if(testScript() == false) {
    return false
  }
  var v741 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v741) {
    var v1046 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
    if(!v1046) {
      var v1277 = checkFormElement(theDocument.forms[0].elements[1]) == false;
      if(!v1277) {
        v1277 = checkSequenceLength(theDocument.forms[0].elements[1].value, maxInput$$3) == false
      }
      v1046 = v1277
    }
    v741 = v1046
  }
  if(v741) {
    return false
  }
  var MATCH_SCORE = parseInt(theDocument.forms[0].elements[5].options[theDocument.forms[0].elements[5].selectedIndex].value);
  var MISMATCH_SCORE = parseInt(theDocument.forms[0].elements[6].options[theDocument.forms[0].elements[6].selectedIndex].value);
  var BEGIN_GAP_PENALTY = parseInt(theDocument.forms[0].elements[7].options[theDocument.forms[0].elements[7].selectedIndex].value);
  var GAP_PENALTY = parseInt(theDocument.forms[0].elements[8].options[theDocument.forms[0].elements[8].selectedIndex].value);
  var END_GAP_PENALTY = parseInt(theDocument.forms[0].elements[9].options[theDocument.forms[0].elements[9].selectedIndex].value);
  openWindow("Pairwise Align DNA");
  openPre();
  newDnaOne = getSequenceFromFasta(theDocument.forms[0].elements[0].value);
  newDnaOne = removeNonDna(newDnaOne);
  titleOne = getTitleFromFasta(theDocument.forms[0].elements[0].value);
  newDnaTwo = getSequenceFromFasta(theDocument.forms[0].elements[1].value);
  newDnaTwo = removeNonDna(newDnaTwo);
  titleTwo = getTitleFromFasta(theDocument.forms[0].elements[1].value);
  var v287 = outputWindow.document;
  JAM.call(v287.write, v287, [getPairwiseAlignTitle(titleOne, newDnaOne, titleTwo, newDnaTwo)], JAM.policy.p37);
  if(JAM.call(newDnaOne.search, newDnaOne, [/./], JAM.policy.p26) != -1) {
    newDnaOne = JAM.call(newDnaOne.match, newDnaOne, [/./g], JAM.policy.p26)
  }
  if(JAM.call(newDnaTwo.search, newDnaTwo, [/./], JAM.policy.p26) != -1) {
    newDnaTwo = JAM.call(newDnaTwo.match, newDnaTwo, [/./g], JAM.policy.p26)
  }
  pairwiseDna(titleOne, newDnaOne, titleTwo, newDnaTwo, MATCH_SCORE, MISMATCH_SCORE, GAP_PENALTY, BEGIN_GAP_PENALTY, END_GAP_PENALTY);
  closePre();
  closeWindow();
  return true
}
function pairwiseDna(titleOne$$1, newDnaOne$$1, titleTwo$$1, newDnaTwo$$1, matchScore, mismatchScore, gapPenalty, beginGapPenalty, endGapPenalty) {
  var useLinearSpace = true;
  var useQuadraticSpace = false;
  var matrix = new Identity;
  JAM.call(matrix.setMatch, matrix, [matchScore], JAM.policy.p37);
  JAM.call(matrix.setMismatch, matrix, [mismatchScore], JAM.policy.p37);
  var scoreSet = new ScoreSet;
  JAM.call(scoreSet.setScoreSetParam, scoreSet, [matrix, gapPenalty, beginGapPenalty, endGapPenalty], JAM.policy.p36);
  var alignment;
  if(useLinearSpace) {
    alignment = new AlignPairLinear;
    JAM.call(alignment.setAlignParam, alignment, [newDnaOne$$1, newDnaTwo$$1, scoreSet], JAM.policy.p36);
    JAM.call(alignment.align, alignment, [], JAM.policy.p26);
    var v291 = outputWindow.document;
    JAM.call(v291.write, v291, [">" + titleOne$$1 + "\n"], JAM.policy.p37);
    var v293 = outputWindow.document;
    JAM.call(v293.write, v293, [addReturns(JAM.call(alignment.getAlignedM, alignment, [], JAM.policy.p26))], JAM.policy.p37);
    var v295 = outputWindow.document;
    JAM.call(v295.write, v295, ["\n"], JAM.policy.p27);
    var v296 = outputWindow.document;
    JAM.call(v296.write, v296, ["\n"], JAM.policy.p27);
    var v297 = outputWindow.document;
    JAM.call(v297.write, v297, [">" + titleTwo$$1 + "\n"], JAM.policy.p37);
    var v299 = outputWindow.document;
    JAM.call(v299.write, v299, [addReturns(JAM.call(alignment.getAlignedN, alignment, [], JAM.policy.p26))], JAM.policy.p37);
    var v301 = outputWindow.document;
    JAM.call(v301.write, v301, ["\n\n"], JAM.policy.p27);
    var v302 = outputWindow.document;
    JAM.call(v302.write, v302, ["Alignment score: " + alignment.score + "\n\n"], JAM.policy.p37)
  }
  if(useQuadraticSpace) {
    alignment = new AlignPairQuad;
    JAM.call(alignment.initializeMatrix, alignment, [newDnaOne$$1, newDnaTwo$$1, scoreSet], JAM.policy.p36);
    JAM.call(alignment.fillMatrix, alignment, [], JAM.policy.p26);
    JAM.call(alignment.align, alignment, [], JAM.policy.p26);
    var v304 = outputWindow.document;
    JAM.call(v304.write, v304, [">" + titleOne$$1 + "\n"], JAM.policy.p37);
    var v306 = outputWindow.document;
    JAM.call(v306.write, v306, [addReturns(JAM.call(alignment.getAlignedM, alignment, [], JAM.policy.p26))], JAM.policy.p37);
    var v308 = outputWindow.document;
    JAM.call(v308.write, v308, ["\n"], JAM.policy.p27);
    var v309 = outputWindow.document;
    JAM.call(v309.write, v309, ["\n"], JAM.policy.p27);
    var v310 = outputWindow.document;
    JAM.call(v310.write, v310, [">" + titleTwo$$1 + "\n"], JAM.policy.p37);
    var v312 = outputWindow.document;
    JAM.call(v312.write, v312, [addReturns(JAM.call(alignment.getAlignedN, alignment, [], JAM.policy.p26))], JAM.policy.p37);
    var v314 = outputWindow.document;
    JAM.call(v314.write, v314, ["\n\n"], JAM.policy.p27);
    var v315 = outputWindow.document;
    JAM.call(v315.write, v315, ["Alignment score: " + alignment.score + "\n\n"], JAM.policy.p37)
  }
  return
}
function getScore(r1$$1, r2) {
  var v317 = this.scoringMatrix;
  return JAM.call(v317.scoringMatrix_getScore, v317, [r1$$1, r2], JAM.policy.p36)
}
function setScoreSetParam(scoringMatrix, gapPenalty$$1, beginGapPenalty$$1, endGapPenalty$$1) {
  this.scoringMatrix = scoringMatrix;
  this.gap = gapPenalty$$1;
  this.beginGap = beginGapPenalty$$1;
  this.endGap = endGapPenalty$$1;
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
  r1$$2 = JAM.call(r1$$2.toLowerCase, r1$$2, [], JAM.policy.p26);
  r2$$1 = JAM.call(r2$$1.toLowerCase, r2$$1, [], JAM.policy.p26);
  if(r1$$2 == r2$$1) {
    return this.match
  }else {
    return this.mismatch
  }
  return
}
function ScoringMatrix() {
  return
}
function setMismatch(mismatchScore$$1) {
  this.mismatch = mismatchScore$$1;
  return
}
function setMatch(matchScore$$1) {
  this.match = matchScore$$1;
  return
}
function Identity() {
  return
}
function align() {
  if(this.M.length == 0) {
    var j$$10 = 1;
    var v324 = j$$10 <= this.N.length;
    for(;v324;) {
      var v319 = this.alignedM;
      JAM.call(v319.push, v319, ["-"], JAM.policy.p27);
      var v320 = this.alignedN;
      JAM.call(v320.push, v320, [this.N[j$$10 - 1]], JAM.policy.p37);
      this.score = this.score + this.scoreSet.gap;
      j$$10 = j$$10 + 1;
      v324 = j$$10 <= this.N.length
    }
  }else {
    if(this.N.length == 0) {
      j$$10 = 1;
      var v330 = j$$10 <= this.M.length;
      for(;v330;) {
        var v325 = this.alignedN;
        JAM.call(v325.push, v325, ["-"], JAM.policy.p27);
        var v326 = this.alignedM;
        JAM.call(v326.push, v326, [this.M[j$$10 - 1]], JAM.policy.p37);
        this.score = this.score + this.scoreSet.gap;
        j$$10 = j$$10 + 1;
        v330 = j$$10 <= this.M.length
      }
    }else {
      var v775 = this.M.length == 0;
      if(v775) {
        v775 = this.N.length == 0
      }
      if(v775) {
      }else {
        JAM.call(this.path, this, [0, 0, this.M.length, this.N.length], JAM.policy.p26)
      }
    }
  }
  return
}
function path(i1, j1, i2, j2) {
  var v778 = i1 + 1 == i2;
  if(!v778) {
    v778 = j1 == j2
  }
  if(v778) {
    var subM = new Array;
    var subN = new Array;
    var i$$11 = i1 + 1;
    var v337 = i$$11 <= i2;
    for(;v337;) {
      JAM.call(subM.push, subM, [this.M[i$$11 - 1]], JAM.policy.p37);
      i$$11 = i$$11 + 1;
      v337 = i$$11 <= i2
    }
    var j$$11 = j1 + 1;
    var v339 = j$$11 <= j2;
    for(;v339;) {
      JAM.call(subN.push, subN, [this.N[j$$11 - 1]], JAM.policy.p37);
      j$$11 = j$$11 + 1;
      v339 = j$$11 <= j2
    }
    var alignment$$1 = new AlignPairQuad;
    subScoreSet = new ScoreSet;
    if(j1 == j2) {
      if(j1 == 0) {
        JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.beginGap, this.scoreSet.beginGap, this.scoreSet.beginGap], JAM.policy.p36)
      }else {
        if(j1 == this.N.length) {
          JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.endGap, this.scoreSet.endGap, this.scoreSet.endGap], JAM.policy.p36)
        }else {
          JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.gap, this.scoreSet.gap, this.scoreSet.gap], JAM.policy.p36)
        }
      }
    }else {
      JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.gap, this.scoreSet.beginGap, this.scoreSet.endGap], JAM.policy.p36);
      subScoreSet.useBeginGapTop = false;
      subScoreSet.useBeginGapLeft = false;
      subScoreSet.useEndGapBottom = false;
      subScoreSet.useEndGapRight = false;
      if(i1 == 0) {
        subScoreSet.useBeginGapTop = true
      }
      if(j1 == 0) {
        subScoreSet.useBeginGapLeft = true
      }
      if(j2 == this.N.length) {
        subScoreSet.useEndGapRight = true
      }
      if(i2 == this.M.length) {
        subScoreSet.useEndGapBottom = true
      }
    }
    JAM.call(alignment$$1.initializeMatrix, alignment$$1, [subM, subN, subScoreSet], JAM.policy.p36);
    JAM.call(alignment$$1.fillMatrix, alignment$$1, [], JAM.policy.p26);
    JAM.call(alignment$$1.align, alignment$$1, [], JAM.policy.p26);
    var v363 = this.alignedM;
    JAM.call(v363.push, v363, [JAM.call(alignment$$1.getAlignedM, alignment$$1, [], JAM.policy.p26)], JAM.policy.p37);
    var v365 = this.alignedN;
    JAM.call(v365.push, v365, [JAM.call(alignment$$1.getAlignedN, alignment$$1, [], JAM.policy.p26)], JAM.policy.p37);
    this.score = this.score + alignment$$1.score
  }else {
    var middle = JAM.call(Math.floor, Math, [(i1 + i2) / 2], JAM.policy.p37);
    JAM.set(this.Sn, j1, 0, JAM.policy.p13);
    if(i1 == 0) {
      j$$11 = j1 + 1;
      var v372 = j$$11 <= j2;
      for(;v372;) {
        JAM.set(this.Sn, j$$11, this.Sn[j$$11 - 1] - this.scoreSet.beginGap, JAM.policy.p13);
        j$$11 = j$$11 + 1;
        v372 = j$$11 <= j2
      }
    }else {
      j$$11 = j1 + 1;
      var v374 = j$$11 <= j2;
      for(;v374;) {
        JAM.set(this.Sn, j$$11, this.Sn[j$$11 - 1] - this.scoreSet.gap, JAM.policy.p13);
        j$$11 = j$$11 + 1;
        v374 = j$$11 <= j2
      }
    }
    var diag;
    var left$$2;
    i$$11 = i1 + 1;
    var v397 = i$$11 <= middle;
    for(;v397;) {
      diag = this.Sn[j1];
      if(j1 == 0) {
        left$$2 = this.Sn[j1] - this.scoreSet.beginGap
      }else {
        left$$2 = this.Sn[j1] - this.scoreSet.gap
      }
      JAM.set(this.Sn, j1, left$$2, JAM.policy.p13);
      j$$11 = j1 + 1;
      var v396 = j$$11 <= j2;
      for(;v396;) {
        var v811 = j$$11 == this.N.length;
        if(v811) {
          v811 = i$$11 == this.M.length
        }
        if(v811) {
          var v383 = this.Sn[j$$11] - this.scoreSet.endGap;
          var v814 = left$$2 - this.scoreSet.endGap;
          var v1088 = diag;
          var v1298 = this.scoreSet;
          left$$2 = JAM.call(Math.max, Math, [v383, JAM.call(Math.max, Math, [v814, v1088 + JAM.call(v1298.getScore, v1298, [this.M[i$$11 - 1], this.N[j$$11 - 1]], JAM.policy.p36)], JAM.policy.p36)], JAM.policy.p26)
        }else {
          if(i$$11 == this.M.length) {
            var v385 = this.Sn[j$$11] - this.scoreSet.gap;
            var v819 = left$$2 - this.scoreSet.endGap;
            var v1094 = diag;
            var v1302 = this.scoreSet;
            left$$2 = JAM.call(Math.max, Math, [v385, JAM.call(Math.max, Math, [v819, v1094 + JAM.call(v1302.getScore, v1302, [this.M[i$$11 - 1], this.N[j$$11 - 1]], JAM.policy.p36)], JAM.policy.p36)], JAM.policy.p26)
          }else {
            if(j$$11 == this.N.length) {
              var v387 = this.Sn[j$$11] - this.scoreSet.endGap;
              var v824 = left$$2 - this.scoreSet.gap;
              var v1100 = diag;
              var v1306 = this.scoreSet;
              left$$2 = JAM.call(Math.max, Math, [v387, JAM.call(Math.max, Math, [v824, v1100 + JAM.call(v1306.getScore, v1306, [this.M[i$$11 - 1], this.N[j$$11 - 1]], JAM.policy.p36)], JAM.policy.p36)], JAM.policy.p26)
            }else {
              var v389 = this.Sn[j$$11] - this.scoreSet.gap;
              var v828 = left$$2 - this.scoreSet.gap;
              var v1105 = diag;
              var v1310 = this.scoreSet;
              left$$2 = JAM.call(Math.max, Math, [v389, JAM.call(Math.max, Math, [v828, v1105 + JAM.call(v1310.getScore, v1310, [this.M[i$$11 - 1], this.N[j$$11 - 1]], JAM.policy.p36)], JAM.policy.p36)], JAM.policy.p26)
            }
          }
        }
        diag = this.Sn[j$$11];
        JAM.set(this.Sn, j$$11, left$$2, JAM.policy.p13);
        j$$11 = j$$11 + 1;
        v396 = j$$11 <= j2
      }
      i$$11 = i$$11 + 1;
      v397 = i$$11 <= middle
    }
    JAM.set(this.Sp, j2, 0, JAM.policy.p13);
    if(i2 == this.M.length) {
      j$$11 = j2 - 1;
      var v400 = j$$11 >= j1;
      for(;v400;) {
        JAM.set(this.Sp, j$$11, this.Sp[j$$11 + 1] - this.scoreSet.endGap, JAM.policy.p13);
        j$$11 = j$$11 - 1;
        v400 = j$$11 >= j1
      }
    }else {
      j$$11 = j2 - 1;
      var v402 = j$$11 >= j1;
      for(;v402;) {
        JAM.set(this.Sp, j$$11, this.Sp[j$$11 + 1] - this.scoreSet.gap, JAM.policy.p13);
        j$$11 = j$$11 - 1;
        v402 = j$$11 >= j1
      }
    }
    var right$$2;
    i$$11 = i2 - 1;
    var v425 = i$$11 >= middle;
    for(;v425;) {
      diag = this.Sp[j2];
      if(j2 == this.N.length) {
        right$$2 = this.Sp[j2] - this.scoreSet.endGap
      }else {
        right$$2 = this.Sp[j2] - this.scoreSet.gap
      }
      JAM.set(this.Sp, j2, right$$2, JAM.policy.p13);
      j$$11 = j2 - 1;
      var v424 = j$$11 >= j1;
      for(;v424;) {
        var v840 = j$$11 == 0;
        if(v840) {
          v840 = i$$11 == 0
        }
        if(v840) {
          var v411 = this.Sp[j$$11] - this.scoreSet.beginGap;
          var v843 = right$$2 - this.scoreSet.beginGap;
          var v1118 = diag;
          var v1314 = this.scoreSet;
          right$$2 = JAM.call(Math.max, Math, [v411, JAM.call(Math.max, Math, [v843, v1118 + JAM.call(v1314.getScore, v1314, [this.M[i$$11 + 1 - 1], this.N[j$$11 + 1 - 1]], JAM.policy.p36)], JAM.policy.p36)], JAM.policy.p26)
        }else {
          if(j$$11 == 0) {
            var v413 = this.Sp[j$$11] - this.scoreSet.beginGap;
            var v847 = right$$2 - this.scoreSet.gap;
            var v1123 = diag;
            var v1318 = this.scoreSet;
            right$$2 = JAM.call(Math.max, Math, [v413, JAM.call(Math.max, Math, [v847, v1123 + JAM.call(v1318.getScore, v1318, [this.M[i$$11 + 1 - 1], this.N[j$$11 + 1 - 1]], JAM.policy.p36)], JAM.policy.p36)], JAM.policy.p26)
          }else {
            if(i$$11 == 0) {
              var v415 = this.Sp[j$$11] - this.scoreSet.gap;
              var v851 = right$$2 - this.scoreSet.beginGap;
              var v1128 = diag;
              var v1322 = this.scoreSet;
              right$$2 = JAM.call(Math.max, Math, [v415, JAM.call(Math.max, Math, [v851, v1128 + JAM.call(v1322.getScore, v1322, [this.M[i$$11 + 1 - 1], this.N[j$$11 + 1 - 1]], JAM.policy.p36)], JAM.policy.p36)], JAM.policy.p26)
            }else {
              var v417 = this.Sp[j$$11] - this.scoreSet.gap;
              var v855 = right$$2 - this.scoreSet.gap;
              var v1133 = diag;
              var v1326 = this.scoreSet;
              right$$2 = JAM.call(Math.max, Math, [v417, JAM.call(Math.max, Math, [v855, v1133 + JAM.call(v1326.getScore, v1326, [this.M[i$$11 + 1 - 1], this.N[j$$11 + 1 - 1]], JAM.policy.p36)], JAM.policy.p36)], JAM.policy.p26)
            }
          }
        }
        diag = this.Sp[j$$11];
        JAM.set(this.Sp, j$$11, right$$2, JAM.policy.p13);
        j$$11 = j$$11 - 1;
        v424 = j$$11 >= j1
      }
      i$$11 = i$$11 - 1;
      v425 = i$$11 >= middle
    }
    var maxValue = this.Sn[j1] + this.Sp[j1];
    var maxJ = j1;
    j$$11 = j1 + 1;
    var v431 = j$$11 <= j2;
    for(;v431;) {
      if(this.Sn[j$$11] + this.Sp[j$$11] >= maxValue) {
        maxValue = this.Sn[j$$11] + this.Sp[j$$11];
        maxJ = j$$11
      }
      j$$11 = j$$11 + 1;
      v431 = j$$11 <= j2
    }
    JAM.call(this.path, this, [i1, j1, middle, maxJ], JAM.policy.p36);
    JAM.call(this.path, this, [middle, maxJ, i2, j2], JAM.policy.p26)
  }
  return
}
function getAlignedM() {
  var v433 = this.alignedM;
  return JAM.call(v433.join, v433, [""], JAM.policy.p27)
}
function getAlignedN() {
  var v434 = this.alignedN;
  return JAM.call(v434.join, v434, [""], JAM.policy.p27)
}
function setAlignParam(M, N, scoreSet$$1) {
  this.M = M;
  this.N = N;
  var v1603 = new Array;
  this.alignedM = v1603;
  var v1604 = new Array;
  this.alignedN = v1604;
  this.scoreSet = scoreSet$$1;
  var v1605 = new Array(this.N.length);
  this.Sn = v1605;
  var v1606 = new Array(this.N.length);
  this.Sp = v1606;
  this.score = 0;
  return
}
function AlignPairLinear() {
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
  var v1607 = new Array(this.M.length + 1);
  this.nodes = v1607;
  var i$$12 = 0;
  var v443 = i$$12 < this.nodes.length;
  for(;v443;) {
    var v438 = this.nodes;
    var v439 = i$$12;
    var v1608 = new Array(this.N.length + 1);
    v438[v439] = v1608;
    var j$$12 = 0;
    var v442 = j$$12 < this.nodes[i$$12].length;
    for(;v442;) {
      var v440 = this.nodes[i$$12];
      var v441 = j$$12;
      var v1609 = new Node;
      v440[v441] = v1609;
      j$$12 = j$$12 + 1;
      v442 = j$$12 < this.nodes[i$$12].length
    }
    i$$12 = i$$12 + 1;
    v443 = i$$12 < this.nodes.length
  }
  this.nodes[0][0].value = 0;
  i$$12 = 1;
  var v450 = i$$12 < this.nodes.length;
  for(;v450;) {
    if(this.scoreSet.useBeginGapLeft) {
      this.nodes[i$$12][0].value = this.nodes[i$$12 - 1][0].value - this.scoreSet.beginGap
    }else {
      this.nodes[i$$12][0].value = this.nodes[i$$12 - 1][0].value - this.scoreSet.gap
    }
    this.nodes[i$$12][0].tracebackI = i$$12 - 1;
    this.nodes[i$$12][0].tracebackJ = 0;
    i$$12 = i$$12 + 1;
    v450 = i$$12 < this.nodes.length
  }
  j$$12 = 1;
  var v456 = j$$12 < this.nodes[0].length;
  for(;v456;) {
    if(this.scoreSet.useBeginGapTop) {
      this.nodes[0][j$$12].value = this.nodes[0][j$$12 - 1].value - this.scoreSet.beginGap
    }else {
      this.nodes[0][j$$12].value = this.nodes[0][j$$12 - 1].value - this.scoreSet.gap
    }
    this.nodes[0][j$$12].tracebackI = 0;
    this.nodes[0][j$$12].tracebackJ = j$$12 - 1;
    j$$12 = j$$12 + 1;
    v456 = j$$12 < this.nodes[0].length
  }
  return
}
function dumpMatrix() {
  var v457 = outputWindow.document;
  JAM.call(v457.write, v457, ["Dynamic programming matrix i=" + this.nodes.length + " and j=" + this.nodes[0].length], JAM.policy.p37);
  var v459 = outputWindow.document;
  JAM.call(v459.write, v459, ["\n"], JAM.policy.p27);
  var i$$13 = 0;
  var v470 = i$$13 < this.nodes.length;
  for(;v470;) {
    var j$$13 = 0;
    var v468 = j$$13 < this.nodes[i$$13].length;
    for(;v468;) {
      var traceI = this.nodes[i$$13][j$$13].tracebackI;
      var traceJ = this.nodes[i$$13][j$$13].tracebackJ;
      if(traceI == undefined) {
        traceI = "u"
      }
      if(traceJ == undefined) {
        traceJ = "u"
      }
      var output = "(" + i$$13 + "," + j$$13 + ")[" + traceI + "," + traceJ + "]=" + this.nodes[i$$13][j$$13].value;
      var v466 = outputWindow.document;
      JAM.call(v466.write, v466, [rightNum(output, "", 20, " ")], JAM.policy.p37);
      j$$13 = j$$13 + 1;
      v468 = j$$13 < this.nodes[i$$13].length
    }
    var v469 = outputWindow.document;
    JAM.call(v469.write, v469, ["\n"], JAM.policy.p27);
    i$$13 = i$$13 + 1;
    v470 = i$$13 < this.nodes.length
  }
  var v471 = outputWindow.document;
  JAM.call(v471.write, v471, ["\n"], JAM.policy.p27);
  return
}
function fillMatrix() {
  var i$$14 = 1;
  var v517 = i$$14 < this.nodes.length;
  for(;v517;) {
    var j$$14 = 1;
    var v516 = j$$14 < this.nodes[0].length;
    for(;v516;) {
      var a;
      var b;
      var c;
      var v906 = i$$14 == this.nodes.length - 1;
      if(v906) {
        v906 = j$$14 == this.nodes[0].length - 1
      }
      if(v906) {
        if(this.scoreSet.useEndGapRight) {
          a = this.nodes[i$$14 - 1][j$$14].value - this.scoreSet.endGap
        }else {
          a = this.nodes[i$$14 - 1][j$$14].value - this.scoreSet.gap
        }
        if(this.scoreSet.useEndGapBottom) {
          b = this.nodes[i$$14][j$$14 - 1].value - this.scoreSet.endGap
        }else {
          b = this.nodes[i$$14][j$$14 - 1].value - this.scoreSet.gap
        }
      }else {
        if(i$$14 == this.nodes.length - 1) {
          a = this.nodes[i$$14 - 1][j$$14].value - this.scoreSet.gap;
          if(this.scoreSet.useEndGapBottom) {
            b = this.nodes[i$$14][j$$14 - 1].value - this.scoreSet.endGap
          }else {
            b = this.nodes[i$$14][j$$14 - 1].value - this.scoreSet.gap
          }
        }else {
          if(j$$14 == this.nodes[0].length - 1) {
            if(this.scoreSet.useEndGapRight) {
              a = this.nodes[i$$14 - 1][j$$14].value - this.scoreSet.endGap
            }else {
              a = this.nodes[i$$14 - 1][j$$14].value - this.scoreSet.gap
            }
            b = this.nodes[i$$14][j$$14 - 1].value - this.scoreSet.gap
          }else {
            a = this.nodes[i$$14 - 1][j$$14].value - this.scoreSet.gap;
            b = this.nodes[i$$14][j$$14 - 1].value - this.scoreSet.gap
          }
        }
      }
      var v503 = this.nodes[i$$14 - 1][j$$14 - 1].value;
      var v938 = this.scoreSet;
      c = v503 + JAM.call(v938.getScore, v938, [this.M[i$$14 - 1], this.N[j$$14 - 1]], JAM.policy.p36);
      var v941 = a >= b;
      if(v941) {
        v941 = a >= c
      }
      if(v941) {
        this.nodes[i$$14][j$$14].value = a;
        this.nodes[i$$14][j$$14].tracebackI = i$$14 - 1;
        this.nodes[i$$14][j$$14].tracebackJ = j$$14
      }else {
        var v945 = b >= c;
        if(v945) {
          v945 = b >= a
        }
        if(v945) {
          this.nodes[i$$14][j$$14].value = b;
          this.nodes[i$$14][j$$14].tracebackI = i$$14;
          this.nodes[i$$14][j$$14].tracebackJ = j$$14 - 1
        }else {
          this.nodes[i$$14][j$$14].value = c;
          this.nodes[i$$14][j$$14].tracebackI = i$$14 - 1;
          this.nodes[i$$14][j$$14].tracebackJ = j$$14 - 1
        }
      }
      j$$14 = j$$14 + 1;
      v516 = j$$14 < this.nodes[0].length
    }
    i$$14 = i$$14 + 1;
    v517 = i$$14 < this.nodes.length
  }
  this.score = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1].value;
  return
}
function alignQuad() {
  var v1610 = new Array;
  this.alignedM = v1610;
  var v1611 = new Array;
  this.alignedN = v1611;
  var currentI = this.nodes.length - 1;
  var currentJ = this.nodes[0].length - 1;
  var currentNode = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1];
  var v961 = currentNode.tracebackI != undefined;
  if(v961) {
    v961 = currentNode.tracebackJ != undefined
  }
  var v537 = v961;
  for(;v537;) {
    var v962 = currentNode.tracebackI == currentI - 1;
    if(v962) {
      v962 = currentNode.tracebackJ == currentJ - 1
    }
    if(v962) {
      var v523 = this.alignedM;
      var v963 = this.M;
      JAM.call(v523.push, v523, [JAM.call(v963.pop, v963, [], JAM.policy.p26)], JAM.policy.p37);
      var v525 = this.alignedN;
      var v964 = this.N;
      JAM.call(v525.push, v525, [JAM.call(v964.pop, v964, [], JAM.policy.p26)], JAM.policy.p37)
    }else {
      if(currentNode.tracebackJ == currentJ - 1) {
        var v527 = this.alignedM;
        JAM.call(v527.push, v527, ["-"], JAM.policy.p27);
        var v528 = this.alignedN;
        var v967 = this.N;
        JAM.call(v528.push, v528, [JAM.call(v967.pop, v967, [], JAM.policy.p26)], JAM.policy.p37)
      }else {
        var v530 = this.alignedM;
        var v968 = this.M;
        JAM.call(v530.push, v530, [JAM.call(v968.pop, v968, [], JAM.policy.p26)], JAM.policy.p37);
        var v532 = this.alignedN;
        JAM.call(v532.push, v532, ["-"], JAM.policy.p27)
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    currentNode = this.nodes[currentNode.tracebackI][currentNode.tracebackJ];
    var v971 = currentNode.tracebackI != undefined;
    if(v971) {
      v971 = currentNode.tracebackJ != undefined
    }
    v537 = v971
  }
  var v538 = this.alignedM;
  var v1612 = JAM.call(v538.reverse, v538, [], JAM.policy.p26);
  this.alignedM = v1612;
  var v539 = this.alignedN;
  var v1613 = JAM.call(v539.reverse, v539, [], JAM.policy.p26);
  this.alignedN = v1613;
  return
}
function getAlignedM() {
  var v540 = this.alignedM;
  return JAM.call(v540.join, v540, [""], JAM.policy.p27)
}
function getAlignedN() {
  var v541 = this.alignedN;
  return JAM.call(v541.join, v541, [""], JAM.policy.p27)
}
function AlignPairQuad() {
  return
}
new ScoreSet;
ScoreSet.prototype.getScore = getScore;
ScoreSet.prototype.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
ScoringMatrix.prototype.scoringMatrix_getScore = scoringMatrix_getScore;
var v545 = Identity;
var v1614 = new ScoringMatrix;
v545.prototype = v1614;
Identity.prototype.setMismatch = setMismatch;
Identity.prototype.setMatch = setMatch;
new AlignPairLinear;
AlignPairLinear.prototype.align = align;
AlignPairLinear.prototype.path = path;
AlignPairLinear.prototype.setAlignParam = setAlignParam;
AlignPairLinear.prototype.getAlignedM = getAlignedM;
AlignPairLinear.prototype.getAlignedN = getAlignedN;
new AlignPairQuad;
AlignPairQuad.prototype.initializeMatrix = initializeMatrix;
AlignPairQuad.prototype.fillMatrix = fillMatrix;
AlignPairQuad.prototype.align = alignQuad;
AlignPairQuad.prototype.getAlignedM = getAlignedM;
AlignPairQuad.prototype.getAlignedN = getAlignedN;
AlignPairQuad.prototype.dumpMatrix = dumpMatrix;
JAM.set(document, "onload", v2);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p27), "onclick", v3);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p27), "onclick", v4);

