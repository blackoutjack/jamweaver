function v12() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[1].value = " ";
  return
}
function v11() {
  try {
    rangeExtract(document)
  }catch(e$$7) {
    alert("The following error was encountered: " + e$$7)
  }
  return
}
function v10() {
  var v16 = document.main_form.main_submit;
  JAM.call(v16.focus, v16, [], JAM.policy.p13);
  return
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$12, s$$2) {
    return p1 + "\n"
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p13);
  return sequence
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var lengthOfAlign = arrayOfSequences[0].length;
  if(arrayOfSequences.length < 2) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v20 = i$$1 < arrayOfTitles.length;
  for(;v20;) {
    var v842 = arrayOfTitles[i$$1];
    var v410 = JAM.call(v842.search, v842, [/\S/], JAM.policy.p13) == -1;
    if(!v410) {
      var v937 = arrayOfSequences[i$$1];
      var v703 = JAM.call(v937.search, v937, [/\S/], JAM.policy.p13) == -1;
      if(!v703) {
        v703 = arrayOfSequences[i$$1].length != lengthOfAlign
      }
      v410 = v703
    }
    if(v410) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v20 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v412 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p13) == -1;
  if(!v412) {
    var v706 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p13) == -1;
    if(!v706) {
      var v847 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p13) == -1;
      if(!v847) {
        var v940 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p13) == -1;
        if(!v940) {
          v940 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p13) == -1
        }
        v847 = v940
      }
      v706 = v847
    }
    v412 = v706
  }
  if(v412) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v708 = formElement.value;
  if(JAM.call(v708.search, v708, [/\S/], JAM.policy.p13) == -1) {
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
  var v25 = z$$2 < arrayOfPatterns.length;
  for(;v25;) {
    var v709 = arrayOfPatterns[z$$2];
    if(JAM.call(v709.search, v709, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p13) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    if(moreExpressionCheck(arrayOfPatterns[z$$2]) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    v25 = z$$2 < arrayOfPatterns.length
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v34 = j < arrayOfPatterns.length;
  for(;v34;) {
    var v28 = geneticCodeMatchExp;
    var v29 = j;
    var v849 = arrayOfPatterns[j];
    var v419 = JAM.call(v849.match, v849, [/\/.+\//], JAM.policy.p13) + "gi";
    if(JAM.isEval(eval)) {
      var v1112 = eval("introspect(JAM.policy.pFull) { " + v419 + " }")
    }else {
      var v1112 = JAM.call(eval, null, [v419])
    }
    v28[v29] = v1112;
    var v30 = geneticCodeMatchResult;
    var v31 = j;
    var v712 = arrayOfPatterns[j];
    var v420 = JAM.call(v712.match, v712, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v1113 = JAM.call(v420.toString, v420, [], JAM.policy.p13);
    v30[v31] = v1113;
    var v32 = geneticCodeMatchResult;
    var v33 = j;
    var v421 = geneticCodeMatchResult[j];
    var v1114 = JAM.call(v421.replace, v421, [/=/g, ""], JAM.policy.p13);
    v32[v33] = v1114;
    j = j + 1;
    v34 = j < arrayOfPatterns.length
  }
  var i$$2 = 0;
  var v41 = i$$2 <= testSequence.length - 3;
  for(;v41;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p13);
    j = 0;
    var v39 = j < geneticCodeMatchExp.length;
    for(;v39;) {
      if(JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p23) != -1) {
        if(oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      v39 = j < geneticCodeMatchExp.length
    }
    if(oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v41 = i$$2 <= testSequence.length - 3
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v43 = z$$3 < arrayOfPatterns$$1.length;
  for(;v43;) {
    var v716 = arrayOfPatterns$$1[z$$3];
    if(JAM.call(v716.search, v716, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p13) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    v43 = z$$3 < arrayOfPatterns$$1.length
  }
  var i$$3 = 0;
  var v47 = i$$3 < arrayOfPatterns$$1.length;
  for(;v47;) {
    var re = new RegExp("[" + arrayOfPatterns$$1[i$$3] + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v46 = j$$1 < arrayOfPatterns$$1.length;
    for(;v46;) {
      var v718 = arrayOfPatterns$$1[j$$1];
      if(JAM.call(v718.search, v718, [re], JAM.policy.p23) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      v46 = j$$1 < arrayOfPatterns$$1.length
    }
    i$$3 = i$$3 + 1;
    v47 = i$$3 < arrayOfPatterns$$1.length
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v50 = z$$4 < arrayOfPatterns$$2.length;
  for(;v50;) {
    var v719 = arrayOfPatterns$$2[z$$4];
    if(JAM.call(v719.search, v719, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p13) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    if(moreExpressionCheck(arrayOfPatterns$$2[z$$4]) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    v50 = z$$4 < arrayOfPatterns$$2.length
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v850 = getSequenceFromFasta(text$$7);
  if(JAM.call(v850.replace, v850, [/[^A-Za-z]/g, ""], JAM.policy.p13).length > maxInput) {
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
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p13);
  return dnaSequence
}
function closeForm() {
  var v55 = outputWindow.document;
  JAM.call(v55.write, v55, ["</form>"], JAM.policy.p14);
  return true
}
function closePre() {
  var v56 = outputWindow.document;
  JAM.call(v56.write, v56, ["</div>"], JAM.policy.p14);
  var v57 = outputWindow.document;
  JAM.call(v57.write, v57, ["</pre>\n"], JAM.policy.p14);
  return
}
function closeTextArea() {
  var v58 = outputWindow.document;
  JAM.call(v58.write, v58, ["</textarea>"], JAM.policy.p14);
  return true
}
function closeWindow() {
  var v59 = outputWindow.document;
  JAM.call(v59.write, v59, ["</body>\n</html>\n"], JAM.policy.p14);
  outputWindow.status = "Done.";
  var v60 = outputWindow.document;
  JAM.call(v60.close, v60, [], JAM.policy.p13);
  return true
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = JAM.call(sequence$$1.toLowerCase, sequence$$1, [], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p13);
  return sequence$$1
}
function earlyCheckAlign(alignArray) {
  if(alignArray.length < 3) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v63 = i$$4 < alignArray.length;
  for(;v63;) {
    var v722 = alignArray[i$$4];
    if(JAM.call(v722.search, v722, [/[^\s]+\s/], JAM.policy.p13) == -1) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    v63 = i$$4 < alignArray.length
  }
  return true
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p13);
  return alignSeq
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p13);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p13);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p13);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p13)
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  if(JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13) != -1) {
    var v65 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p23);
    for(;v65;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p23);
      v65 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p23)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var stringToReturn = "&gt;results for " + sequence$$2.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p13) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"'
  }
  stringToReturn = stringToReturn + ' starting "' + JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13) + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p13) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"'
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p13) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"'
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13) + '"';
  return'<div class="info">' + stringToReturn$$1 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = new Array(arrayOfPatterns$$3.length);
  var j$$2 = 0;
  var v83 = j$$2 < arrayOfPatterns$$3.length;
  for(;v83;) {
    var v81 = geneticCodeMatchExp$$1;
    var v82 = j$$2;
    var v851 = arrayOfPatterns$$3[j$$2];
    var v468 = JAM.call(v851.match, v851, [/\/.+\//], JAM.policy.p13) + "gi";
    if(JAM.isEval(eval)) {
      var v1115 = eval("introspect(JAM.policy.pFull) { " + v468 + " }")
    }else {
      var v1115 = JAM.call(eval, null, [v468])
    }
    v81[v82] = v1115;
    j$$2 = j$$2 + 1;
    v83 = j$$2 < arrayOfPatterns$$3.length
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v89 = j$$3 < arrayOfPatterns$$4.length;
  for(;v89;) {
    var v85 = geneticCodeMatchResult$$1;
    var v86 = j$$3;
    var v724 = arrayOfPatterns$$4[j$$3];
    var v471 = JAM.call(v724.match, v724, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v1116 = JAM.call(v471.toString, v471, [], JAM.policy.p13);
    v85[v86] = v1116;
    var v87 = geneticCodeMatchResult$$1;
    var v88 = j$$3;
    var v472 = geneticCodeMatchResult$$1[j$$3];
    var v1117 = JAM.call(v472.replace, v472, [/=/g, ""], JAM.policy.p13);
    v87[v88] = v1117;
    j$$3 = j$$3 + 1;
    v89 = j$$3 < arrayOfPatterns$$4.length
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p13) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"'
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13) + '"';
  return'<div class="info">' + stringToReturn$$2 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p13) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"'
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13) + '"';
  return'<div class="info">' + stringToReturn$$3 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p13) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"'
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p13) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleTwo$$1 + '"'
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13) + '"';
  return'<div class="info">' + stringToReturn$$4 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v110 = j$$4 < lengthOut;
  for(;v110;) {
    tempNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p13) * components.length], JAM.policy.p13);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p23);
    j$$4 = j$$4 + 1;
    v110 = j$$4 < lengthOut
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p14)
}
function getSequenceFromFasta(sequenceRecord) {
  if(JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13) != -1) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p13)
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if(JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13) != -1) {
    var v112 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p13);
    fastaTitle = JAM.call(v112.toString, v112, [], JAM.policy.p13);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p13);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p13);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p13)
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v500 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p13) != -1;
  if(!v500) {
    var v727 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p13) != -1;
    if(!v727) {
      var v853 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p13) != -1;
      if(!v853) {
        var v943 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p13) != -1;
        if(!v943) {
          var v999 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p13) != -1;
          if(!v999) {
            var v1034 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p13) != -1;
            if(!v1034) {
              var v1053 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p13) != -1;
              if(!v1053) {
                var v1065 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p13) != -1;
                if(!v1065) {
                  var v1075 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p13) != -1;
                  if(!v1075) {
                    var v1084 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p13) != -1;
                    if(!v1084) {
                      v1084 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p13) != -1
                    }
                    v1075 = v1084
                  }
                  v1065 = v1075
                }
                v1053 = v1065
              }
              v1034 = v1053
            }
            v999 = v1034
          }
          v943 = v999
        }
        v853 = v943
      }
      v727 = v853
    }
    v500 = v727
  }
  if(v500) {
    return false
  }
  return true
}
function openForm() {
  var v115 = outputWindow.document;
  JAM.call(v115.write, v115, ['<form action="">\n'], JAM.policy.p14);
  return true
}
function openPre() {
  var v116 = outputWindow.document;
  JAM.call(v116.write, v116, ["<pre>"], JAM.policy.p14);
  var v117 = outputWindow.document;
  JAM.call(v117.write, v117, ['<div class="pre">'], JAM.policy.p14);
  return
}
function openTextArea() {
  var v118 = outputWindow.document;
  JAM.call(v118.write, v118, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p14);
  return true
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p13);
  var v119 = outputWindow.document;
  JAM.call(v119.write, v119, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p23);
  if(isColor) {
    var v121 = outputWindow.document;
    JAM.call(v121.write, v121, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p23)
  }else {
    var v123 = outputWindow.document;
    JAM.call(v123.write, v123, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p23)
  }
  var v125 = outputWindow.document;
  JAM.call(v125.write, v125, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$7 + " results</div>\n"], JAM.policy.p23);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p13);
  var v127 = outputWindow.document;
  JAM.call(v127.write, v127, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p23);
  if(isBackground) {
    var v129 = outputWindow.document;
    JAM.call(v129.write, v129, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p23)
  }else {
    var v131 = outputWindow.document;
    JAM.call(v131.write, v131, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p23)
  }
  var v133 = outputWindow.document;
  JAM.call(v133.write, v133, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$9 + " results</div>\n"], JAM.policy.p23);
  outputWindow.status = "Please Wait.";
  return true
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p13)
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p13)
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p13)
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p13)
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p13)
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p13)
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p13)
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p13)
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p13)
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  if(JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p13) != -1) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p13);
    tempDnaArray = JAM.call(tempDnaArray.reverse, tempDnaArray, [], JAM.policy.p13);
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p14)
  }
  return dnaSequence$$1
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = JAM.call(theNumber.toString, theNumber, [], JAM.policy.p13);
  j$$5 = theNumber.length;
  var v136 = j$$5 < lengthOfColumn;
  for(;v136;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v136 = j$$5 < lengthOfColumn
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p23);
  if(testArray[0] != testString) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  if(JAM.call(testString.search, testString, [re$$2], JAM.policy.p23) == -1) {
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p13);
  if(testString != "1X2X3X") {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  if(JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p13) != 2489.824) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  if(JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p13) != 2489.8) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  if(JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p13) == -1) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v515 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p13) == -1;
  if(!v515) {
    var v738 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p13) == -1;
    if(!v738) {
      var v864 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p13) == -1;
      if(!v864) {
        v864 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p13) == -1
      }
      v738 = v864
    }
    v515 = v738
  }
  if(v515) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if(JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p13) == -1) {
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
  if(JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p13) != -1) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  if(JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p13) != -1) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v520 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p13) == -1;
  if(!v520) {
    var v741 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p13) == -1;
    if(!v741) {
      var v867 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p13) == -1;
      if(!v867) {
        v867 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p13) == -1
      }
      v741 = v867
    }
    v520 = v741
  }
  if(v520) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v521 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p13) == -1;
  if(!v521) {
    var v744 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p13) == -1;
    if(!v744) {
      var v870 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p13) == -1;
      if(!v870) {
        v870 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p13) == -1
      }
      v744 = v870
    }
    v521 = v744
  }
  if(v521) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  if(JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p13) == -1) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v523 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p13) == -1;
  if(!v523) {
    var v747 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p13) == -1;
    if(!v747) {
      var v873 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p13) == -1;
      if(!v873) {
        v873 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p13) == -1
      }
      v747 = v873
    }
    v523 = v747
  }
  if(v523) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  if(JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p13) == -1) {
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
  var v164 = i$$5 < stopBase;
  for(;v164;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v161 = j$$6 <= basePerLine / groupSize;
    for(;v161;) {
      var v160 = k < groupSize;
      for(;v160;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p23);
        k = k + 1;
        v160 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v161 = j$$6 <= basePerLine / groupSize
    }
    var v162 = outputWindow.document;
    JAM.call(v162.write, v162, [lineOfText + "\n"], JAM.policy.p23);
    lineOfText = "";
    v164 = i$$5 < stopBase
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
    var v528 = adjustment < 0;
    if(v528) {
      v528 = adjusted >= 0
    }
    if(v528) {
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
  var v198 = i$$6 < stopBase$$2;
  for(;v198;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v174 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for(;v174;) {
      var v169 = k$$1 < groupSize$$2;
      for(;v169;) {
        if(i$$6 + k$$1 >= stopBase$$2) {
          break
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p23);
        k$$1 = k$$1 + 1;
        v169 = k$$1 < groupSize$$2
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
      v174 = j$$7 <= basePerLine$$2 / groupSize$$2
    }
    if(numberPosition$$1 == "left") {
      var v175 = outputWindow.document;
      JAM.call(v175.write, v175, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p23);
      if(strands$$1 == "two") {
        var v177 = outputWindow.document;
        JAM.call(v177.write, v177, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p23);
        var v179 = outputWindow.document;
        JAM.call(v179.write, v179, ["\n"], JAM.policy.p14)
      }
    }else {
      if(numberPosition$$1 == "right") {
        var v181 = outputWindow.document;
        JAM.call(v181.write, v181, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p23);
        if(strands$$1 == "two") {
          var v183 = outputWindow.document;
          JAM.call(v183.write, v183, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p23);
          var v185 = outputWindow.document;
          JAM.call(v185.write, v185, ["\n"], JAM.policy.p14)
        }
      }else {
        if(numberPosition$$1 == "above") {
          var v187 = outputWindow.document;
          JAM.call(v187.write, v187, [aboveNum + "\n"], JAM.policy.p23);
          var v189 = outputWindow.document;
          JAM.call(v189.write, v189, [lineOfText$$1 + "\n"], JAM.policy.p23);
          if(strands$$1 == "two") {
            var v191 = outputWindow.document;
            JAM.call(v191.write, v191, [complement(lineOfText$$1) + "\n"], JAM.policy.p23);
            var v193 = outputWindow.document;
            JAM.call(v193.write, v193, ["\n"], JAM.policy.p14)
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v198 = i$$6 < stopBase$$2
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
  var v219 = i$$7 < stopBase$$3;
  for(;v219;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v207 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for(;v207;) {
      var v202 = k$$2 < groupSize$$3;
      for(;v202;) {
        if(i$$7 + k$$2 >= stopBase$$3) {
          break
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p23);
        k$$2 = k$$2 + 1;
        v202 = k$$2 < groupSize$$3
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
      v207 = j$$8 <= basePerLine$$3 / groupSize$$3
    }
    if(numberPosition$$2 == "left") {
      var v208 = outputWindow.document;
      JAM.call(v208.write, v208, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p23)
    }else {
      if(numberPosition$$2 == "right") {
        var v210 = outputWindow.document;
        JAM.call(v210.write, v210, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p23)
      }else {
        if(numberPosition$$2 == "above") {
          var v212 = outputWindow.document;
          JAM.call(v212.write, v212, [aboveNum$$1 + "\n"], JAM.policy.p23);
          var v214 = outputWindow.document;
          JAM.call(v214.write, v214, [lineOfText$$2 + "\n"], JAM.policy.p23)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v219 = i$$7 < stopBase$$3
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
  var v545 = sequence$$13.length <= firstIndexToMutate;
  if(!v545) {
    var v758 = lastIndexToMutate < 0;
    if(!v758) {
      v758 = lastIndexToMutate <= firstIndexToMutate
    }
    v545 = v758
  }
  if(v545) {
    numMut = 0
  }
  var i$$8 = 0;
  var v228 = i$$8 < numMut;
  for(;v228;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p13) * maxNum], JAM.policy.p13);
    var v547 = randNum < firstIndexToMutate;
    if(!v547) {
      v547 = randNum > lastIndexToMutate
    }
    if(v547) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v228 = i$$8 < numMut;
      continue
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p13);
    needNewChar = true;
    for(;needNewChar;) {
      componentsIndex = JAM.call(Math.round, Math, [JAM.call(Math.random, Math, [], JAM.policy.p13) * components$$1.length], JAM.policy.p13);
      if(componentsIndex == components$$1.length) {
        componentsIndex = 0
      }
      if(components$$1[componentsIndex] != currentChar) {
        needNewChar = false
      }
    }
    sequence$$13 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13) + components$$1[componentsIndex] + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p24);
    i$$8 = i$$8 + 1;
    v228 = i$$8 < numMut
  }
  var v229 = outputWindow.document;
  JAM.call(v229.write, v229, [addReturns(sequence$$13)], JAM.policy.p23);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v235 = j$$9 < lengthOut$$1;
  for(;v235;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p13) * components$$2.length], JAM.policy.p13);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if(sequence$$14.length == 60) {
      var v232 = outputWindow.document;
      JAM.call(v232.write, v232, [sequence$$14 + "\n"], JAM.policy.p23);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v235 = j$$9 < lengthOut$$1
  }
  var v236 = outputWindow.document;
  JAM.call(v236.write, v236, [sequence$$14 + "\n"], JAM.policy.p23);
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
    shiftValue = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13).length;
    sequence$$15 = JAM.call(sequence$$15.substring, sequence$$15, [sequence$$15.length - lookAhead, sequence$$15.length], JAM.policy.p24) + sequence$$15 + JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v242 = outputWindow.document;
  JAM.call(v242.write, v242, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p14);
  var v243 = outputWindow.document;
  JAM.call(v243.write, v243, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p23);
  var i$$9 = 0;
  var v260 = i$$9 < arrayOfItems.length;
  for(;v260;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v562 = arrayOfItems[i$$9];
    matchExp = JAM.call(v562.match, v562, [/\/.+\//], JAM.policy.p13) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    var v880 = arrayOfItems[i$$9];
    var v764 = JAM.call(v880.match, v880, [/\)\D*\d+/], JAM.policy.p13);
    var v563 = JAM.call(v764.toString, v764, [], JAM.policy.p13);
    cutDistance = parseFloat(JAM.call(v563.replace, v563, [/\)\D*/, ""], JAM.policy.p13));
    var v252 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23);
    for(;v252;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v564 = matchPosition >= lowerLimit;
      if(v564) {
        v564 = matchPosition < upperLimit
      }
      if(v564) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1)
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v252 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23)
    }
    if(JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p13) != -1) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p13)
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
    var v258 = outputWindow.document;
    var v1040 = '<tr><td class="' + backGroundClass + '">';
    var v1081 = arrayOfItems[i$$9];
    var v1071 = JAM.call(v1081.match, v1081, [/\([^\(]+\)/], JAM.policy.p13);
    var v1060 = JAM.call(v1071.toString, v1071, [], JAM.policy.p13);
    JAM.call(v258.write, v258, [v1040 + JAM.call(v1060.replace, v1060, [/\(|\)/g, ""], JAM.policy.p13) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p23);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v260 = i$$9 < arrayOfItems.length
  }
  var v261 = outputWindow.document;
  JAM.call(v261.write, v261, ["</tbody></table>\n"], JAM.policy.p14);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v262 = outputWindow.document;
  JAM.call(v262.write, v262, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p14);
  var v263 = outputWindow.document;
  JAM.call(v263.write, v263, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p23);
  var i$$10 = 0;
  var v273 = i$$10 < arrayOfItems$$1.length;
  for(;v273;) {
    var tempNumber = 0;
    var v573 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v573.match, v573, [/\/[^\/]+\//], JAM.policy.p13) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p23) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p23).length
    }
    var percentage = 0;
    var v768 = originalLength + 1;
    var v963 = arrayOfItems$$1[i$$10];
    if(v768 - parseFloat(JAM.call(v963.match, v963, [/\d+/], JAM.policy.p13)) > 0) {
      var v268 = 100 * tempNumber;
      var v576 = originalLength + 1;
      var v884 = arrayOfItems$$1[i$$10];
      percentage = v268 / (v576 - parseFloat(JAM.call(v884.match, v884, [/\d+/], JAM.policy.p13)))
    }
    var v271 = outputWindow.document;
    var v1082 = arrayOfItems$$1[i$$10];
    var v1072 = JAM.call(v1082.match, v1082, [/\([^\(]+\)\b/], JAM.policy.p13);
    var v1061 = JAM.call(v1072.toString, v1072, [], JAM.policy.p13);
    JAM.call(v271.write, v271, ["<tr><td>" + JAM.call(v1061.replace, v1061, [/\(|\)/g, ""], JAM.policy.p13) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p13) + "</td></tr>\n"], JAM.policy.p23);
    i$$10 = i$$10 + 1;
    v273 = i$$10 < arrayOfItems$$1.length
  }
  var v274 = outputWindow.document;
  JAM.call(v274.write, v274, ["</tbody></table>\n"], JAM.policy.p14);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v281 = sequence$$17.length > 0;
  for(;v281;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p13) * maxNum$$1], JAM.policy.p13);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p13);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p13);
    sequence$$17 = tempString1 + tempString2;
    if(tempSeq.length == 60) {
      var v278 = outputWindow.document;
      JAM.call(v278.write, v278, [tempSeq + "\n"], JAM.policy.p23);
      tempSeq = ""
    }
    v281 = sequence$$17.length > 0
  }
  var v282 = outputWindow.document;
  JAM.call(v282.write, v282, [tempSeq + "\n"], JAM.policy.p23);
  return true
}
function rangeExtract(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = new Array;
  if(testScript() == false) {
    return false
  }
  var v585 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v585) {
    var v774 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
    if(!v774) {
      v774 = checkFormElement(theDocument.forms[0].elements[1]) == false
    }
    v585 = v774
  }
  if(v585) {
    return false
  }
  var v286 = theDocument.forms[0].elements[1].value;
  var arrayOfRanges = JAM.call(v286.split, v286, [/,/], JAM.policy.p13);
  var arrayOfStartAndEnd;
  var i$$11 = 0;
  var v292 = i$$11 < arrayOfRanges.length;
  for(;v292;) {
    var v287 = arrayOfRanges[i$$11];
    arrayOfStartAndEnd = JAM.call(v287.split, v287, [/\.\./], JAM.policy.p13);
    if(arrayOfStartAndEnd.length == 1) {
      matchFound = true;
      JAM.call(ranges.push, ranges, [new Range(arrayOfStartAndEnd[0], arrayOfStartAndEnd[0])], JAM.policy.p23)
    }else {
      if(arrayOfStartAndEnd.length == 2) {
        matchFound = true;
        JAM.call(ranges.push, ranges, [new Range(arrayOfStartAndEnd[0], arrayOfStartAndEnd[1])], JAM.policy.p23)
      }
    }
    i$$11 = i$$11 + 1;
    v292 = i$$11 < arrayOfRanges.length
  }
  if(matchFound == false) {
    alert("No ranges were entered.");
    return false
  }
  openWindow("Range Extractor Protein");
  openPre();
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  i$$11 = 0;
  var v300 = i$$11 < arrayOfFasta$$1.length;
  for(;v300;) {
    newProtein = getSequenceFromFasta(arrayOfFasta$$1[i$$11]);
    title = getTitleFromFasta(arrayOfFasta$$1[i$$11]);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v297 = outputWindow.document;
    JAM.call(v297.write, v297, [getFastaTitleFromTitleAndSequence(title, newProtein)], JAM.policy.p23);
    writeSequenceRanges(newProtein, ranges, theDocument.forms[0].elements[5].options[theDocument.forms[0].elements[5].selectedIndex].value);
    i$$11 = i$$11 + 1;
    v300 = i$$11 < arrayOfFasta$$1.length
  }
  closePre();
  closeWindow();
  return true
}
function writeSequenceRanges(sequence$$18, ranges$$1, segmentType) {
  var rangeGroup = new RangeGroup(segmentType);
  var center_base = JAM.call(Math.round, Math, [sequence$$18.length / 2], JAM.policy.p23);
  var i$$12 = 0;
  var v315 = i$$12 < ranges$$1.length;
  for(;v315;) {
    var v302 = ranges$$1[i$$12];
    var v780 = ranges$$1[i$$12].start;
    var v601 = JAM.call(v780.toString, v780, [], JAM.policy.p13);
    var v1118 = JAM.call(v601.replace, v601, [/start|begin/gi, 1], JAM.policy.p13);
    v302.start = v1118;
    var v303 = ranges$$1[i$$12];
    var v781 = ranges$$1[i$$12].start;
    var v602 = JAM.call(v781.toString, v781, [], JAM.policy.p13);
    var v1119 = JAM.call(v602.replace, v602, [/stop|end/gi, sequence$$18.length], JAM.policy.p13);
    v303.start = v1119;
    var v304 = ranges$$1[i$$12];
    var v782 = ranges$$1[i$$12].start;
    var v604 = JAM.call(v782.toString, v782, [], JAM.policy.p13);
    var v1120 = JAM.call(v604.replace, v604, [/length/gi, sequence$$18.length], JAM.policy.p13);
    v304.start = v1120;
    var v305 = ranges$$1[i$$12];
    var v783 = ranges$$1[i$$12].start;
    var v606 = JAM.call(v783.toString, v783, [], JAM.policy.p13);
    var v1121 = JAM.call(v606.replace, v606, [/middle|center|centre/gi, center_base], JAM.policy.p13);
    v305.start = v1121;
    var v306 = ranges$$1[i$$12];
    var v784 = ranges$$1[i$$12].stop;
    var v607 = JAM.call(v784.toString, v784, [], JAM.policy.p13);
    var v1122 = JAM.call(v607.replace, v607, [/start|begin/gi, 1], JAM.policy.p13);
    v306.stop = v1122;
    var v307 = ranges$$1[i$$12];
    var v785 = ranges$$1[i$$12].stop;
    var v608 = JAM.call(v785.toString, v785, [], JAM.policy.p13);
    var v1123 = JAM.call(v608.replace, v608, [/stop|end/gi, sequence$$18.length], JAM.policy.p13);
    v307.stop = v1123;
    var v308 = ranges$$1[i$$12];
    var v786 = ranges$$1[i$$12].stop;
    var v610 = JAM.call(v786.toString, v786, [], JAM.policy.p13);
    var v1124 = JAM.call(v610.replace, v610, [/length/gi, sequence$$18.length], JAM.policy.p13);
    v308.stop = v1124;
    var v309 = ranges$$1[i$$12];
    var v787 = ranges$$1[i$$12].stop;
    var v612 = JAM.call(v787.toString, v787, [], JAM.policy.p13);
    var v1125 = JAM.call(v612.replace, v612, [/middle|center|centre/gi, center_base], JAM.policy.p13);
    v309.stop = v1125;
    try {
      var v310 = ranges$$1[i$$12];
      var v902 = ranges$$1[i$$12].start;
      var v788 = JAM.call(v902.toString, v902, [], JAM.policy.p13);
      if(JAM.isEval(eval)) {
        var v613 = eval("introspect(JAM.policy.pFull) { " + v788 + " }")
      }else {
        var v613 = JAM.call(eval, null, [v788])
      }
      var v1126 = parseInt(v613);
      v310.start = v1126
    }catch(e$$5) {
      alert("Could not evaluate the following expression: " + ranges$$1[i$$12].start);
      return false
    }
    try {
      var v312 = ranges$$1[i$$12];
      var v903 = ranges$$1[i$$12].stop;
      var v790 = JAM.call(v903.toString, v903, [], JAM.policy.p13);
      if(JAM.isEval(eval)) {
        var v615 = eval("introspect(JAM.policy.pFull) { " + v790 + " }")
      }else {
        var v615 = JAM.call(eval, null, [v790])
      }
      var v1127 = parseInt(v615);
      v312.stop = v1127
    }catch(e$$6) {
      alert("Could not evaluate the following expression: " + ranges$$1[i$$12].stop);
      return false
    }
    JAM.call(rangeGroup.addRange, rangeGroup, [ranges$$1[i$$12]], JAM.policy.p23);
    i$$12 = i$$12 + 1;
    v315 = i$$12 < ranges$$1.length
  }
  JAM.call(rangeGroup.writeRanges, rangeGroup, [sequence$$18], JAM.policy.p23);
  return
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = new Array;
  if(this.start == this.stop) {
    if(this.start < 1) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.start + " is less than 1"], JAM.policy.p23)
    }
    if(this.start > sequence$$19.length) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.start + " is greater than the sequence length"], JAM.policy.p23)
    }
  }else {
    if(this.start < 1) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.start + " is less than 1"], JAM.policy.p23)
    }
    if(this.stop < 1) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.stop + " is less than 1"], JAM.policy.p23)
    }
    if(this.start > sequence$$19.length) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.start + " is greater than the sequence length"], JAM.policy.p23)
    }
    if(this.stop > sequence$$19.length) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.stop + " is greater than the sequence length"], JAM.policy.p23)
    }
    if(this.start > this.stop) {
      problem = true;
      JAM.call(warnings.push, warnings, ["stop position is less than start position in range " + this.start + " to " + this.stop], JAM.policy.p23)
    }
  }
  if(problem) {
    alert("An entry was skipped because of the following:\n" + JAM.call(warnings.join, warnings, [",\n"], JAM.policy.p14));
    return false
  }else {
    if(this.start == this.stop) {
      return JAM.call(sequence$$19.charAt, sequence$$19, [this.start - 1], JAM.policy.p23)
    }else {
      return JAM.call(sequence$$19.substring, sequence$$19, [this.start - 1, this.stop], JAM.policy.p24)
    }
  }
  return
}
function getTitle() {
  if(this.start == this.stop) {
    return"&gt;residue " + this.start
  }else {
    return"&gt;residue " + this.start + " to " + this.stop
  }
  return
}
function Range(start$$4, stop) {
  this.start = start$$4;
  this.stop = stop;
  return
}
function addRange(range$$5) {
  var v340 = this.ranges;
  JAM.call(v340.push, v340, [range$$5], JAM.policy.p23);
  return
}
function writeRanges(sequence$$20) {
  function v9(str$$15, p1$$9, offset$$21, s$$11) {
    return JAM.call(sequence$$20.substring, sequence$$20, [offset$$21, offset$$21 + p1$$9.length], JAM.policy.p24)
  }
  function v8(str$$14, p1$$8, p2$$3, offset$$20, s$$10) {
    return p1$$8 + JAM.call(sequence$$20.substring, sequence$$20, [p1$$8.length, p1$$8.length + p2$$3.length], JAM.policy.p24)
  }
  function v7(str$$13, p1$$7, offset$$19, s$$9) {
    return getRandomSequence(["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"], p1$$7.length)
  }
  function v6(str$$12, p1$$6, p2$$2, offset$$18, s$$8) {
    return p1$$6 + getRandomSequence(["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"], p2$$2.length)
  }
  function v5(str$$11, p1$$5, offset$$17, s$$7) {
    return JAM.call(p1$$5.toLowerCase, p1$$5, [], JAM.policy.p13)
  }
  function v4(str$$10, p1$$4, p2$$1, offset$$16, s$$6) {
    return p1$$4 + JAM.call(p2$$1.toLowerCase, p2$$1, [], JAM.policy.p13)
  }
  function v3(str$$9, p1$$3, offset$$15, s$$5) {
    return JAM.call(p1$$3.toUpperCase, p1$$3, [], JAM.policy.p13)
  }
  function v2(str$$8, p1$$2, p2, offset$$14, s$$4) {
    return p1$$2 + JAM.call(p2.toUpperCase, p2, [], JAM.policy.p13)
  }
  var sequenceArray$$1 = new Array;
  if(this.type == "new_sequence") {
    var i$$13 = 0;
    var v354 = i$$13 < this.ranges.length;
    for(;v354;) {
      var v803 = this.ranges[i$$13];
      if(JAM.call(v803.getSequence, v803, [sequence$$20], JAM.policy.p23) != "") {
        var v655 = this.ranges[i$$13];
        JAM.call(sequenceArray$$1.push, sequenceArray$$1, [JAM.call(v655.getSequence, v655, [sequence$$20], JAM.policy.p23)], JAM.policy.p23)
      }
      i$$13 = i$$13 + 1;
      v354 = i$$13 < this.ranges.length
    }
    var v355 = outputWindow.document;
    JAM.call(v355.write, v355, [addReturns(JAM.call(sequenceArray$$1.join, sequenceArray$$1, [""], JAM.policy.p14)) + "\n\n"], JAM.policy.p23);
    return true
  }
  if(this.type == "separate") {
    i$$13 = 0;
    var v363 = i$$13 < this.ranges.length;
    for(;v363;) {
      var v808 = this.ranges[i$$13];
      if(JAM.call(v808.getSequence, v808, [sequence$$20], JAM.policy.p23) != "") {
        var v358 = outputWindow.document;
        var v809 = this.ranges[i$$13];
        JAM.call(v358.write, v358, [JAM.call(v809.getTitle, v809, [], JAM.policy.p13) + "\n"], JAM.policy.p23);
        var v360 = outputWindow.document;
        var v908 = this.ranges[i$$13];
        JAM.call(v360.write, v360, [addReturns(JAM.call(v908.getSequence, v908, [sequence$$20], JAM.policy.p23)) + "\n\n"], JAM.policy.p23)
      }
      i$$13 = i$$13 + 1;
      v363 = i$$13 < this.ranges.length
    }
    return true
  }
  if(this.type == "uppercased") {
    var re$$3;
    sequence$$20 = JAM.call(sequence$$20.toLowerCase, sequence$$20, [], JAM.policy.p13);
    i$$13 = 0;
    var v369 = i$$13 < this.ranges.length;
    for(;v369;) {
      var v813 = this.ranges[i$$13];
      if(JAM.call(v813.getSequence, v813, [sequence$$20], JAM.policy.p23) != "") {
        if(this.ranges[i$$13].start > 1) {
          re$$3 = "(.{" + (this.ranges[i$$13].start - 1) + "})\\B(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v2], JAM.policy.p24)
        }else {
          re$$3 = "(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v3], JAM.policy.p24)
        }
      }
      i$$13 = i$$13 + 1;
      v369 = i$$13 < this.ranges.length
    }
    var v370 = outputWindow.document;
    JAM.call(v370.write, v370, [addReturns(sequence$$20) + "\n\n"], JAM.policy.p23);
    return true
  }
  if(this.type == "lowercased") {
    sequence$$20 = JAM.call(sequence$$20.toUpperCase, sequence$$20, [], JAM.policy.p13);
    i$$13 = 0;
    var v377 = i$$13 < this.ranges.length;
    for(;v377;) {
      var v820 = this.ranges[i$$13];
      if(JAM.call(v820.getSequence, v820, [sequence$$20], JAM.policy.p23) != "") {
        if(this.ranges[i$$13].start > 1) {
          re$$3 = "(.{" + (this.ranges[i$$13].start - 1) + "})\\B(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v4], JAM.policy.p24)
        }else {
          re$$3 = "(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v5], JAM.policy.p24)
        }
      }
      i$$13 = i$$13 + 1;
      v377 = i$$13 < this.ranges.length
    }
    var v378 = outputWindow.document;
    JAM.call(v378.write, v378, [addReturns(sequence$$20) + "\n\n"], JAM.policy.p23);
    return true
  }
  if(this.type == "randomized") {
    i$$13 = 0;
    var v385 = i$$13 < this.ranges.length;
    for(;v385;) {
      var v827 = this.ranges[i$$13];
      if(JAM.call(v827.getSequence, v827, [sequence$$20], JAM.policy.p23) != "") {
        if(this.ranges[i$$13].start > 1) {
          re$$3 = "(.{" + (this.ranges[i$$13].start - 1) + "})\\B(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v6], JAM.policy.p24)
        }else {
          re$$3 = "(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v7], JAM.policy.p24)
        }
      }
      i$$13 = i$$13 + 1;
      v385 = i$$13 < this.ranges.length
    }
    var v386 = outputWindow.document;
    JAM.call(v386.write, v386, [addReturns(sequence$$20) + "\n\n"], JAM.policy.p23);
    return true
  }
  if(this.type == "preserved") {
    var randomSequence = getRandomSequence(["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"], sequence$$20.length);
    i$$13 = 0;
    var v395 = i$$13 < this.ranges.length;
    for(;v395;) {
      var v834 = this.ranges[i$$13];
      if(JAM.call(v834.getSequence, v834, [sequence$$20], JAM.policy.p23) != "") {
        if(this.ranges[i$$13].start > 1) {
          re$$3 = "(.{" + (this.ranges[i$$13].start - 1) + "})\\B(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v8], JAM.policy.p24)
        }else {
          re$$3 = "(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v9], JAM.policy.p24)
        }
      }
      i$$13 = i$$13 + 1;
      v395 = i$$13 < this.ranges.length
    }
    var v396 = outputWindow.document;
    JAM.call(v396.write, v396, [addReturns(randomSequence) + "\n\n"], JAM.policy.p23);
    return true
  }
  return
}
function RangeGroup(type$$25) {
  this.type = type$$25;
  var v1128 = new Array;
  this.ranges = v1128;
  return
}
new Range(0, 0);
Range.prototype.getSequence = getSequence;
Range.prototype.getTitle = getTitle;
new RangeGroup("", "");
RangeGroup.prototype.addRange = addRange;
RangeGroup.prototype.writeRanges = writeRanges;
JAM.set(document, "onload", v10);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p14), "onclick", v11);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p14), "onclick", v12)
