function v4() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return
}
function v3() {
  try {
    pairwiseAlignProtein(document)
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
    var v1261 = arrayOfTitles[i$$1];
    var v582 = JAM.call(v1261.search, v1261, [/\S/], JAM.policy.p26) == -1;
    if(!v582) {
      var v1407 = arrayOfSequences[i$$1];
      var v1000 = JAM.call(v1407.search, v1407, [/\S/], JAM.policy.p26) == -1;
      if(!v1000) {
        v1000 = arrayOfSequences[i$$1].length != lengthOfAlign
      }
      v582 = v1000
    }
    if(v582) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v12 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v584 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p26) == -1;
  if(!v584) {
    var v1003 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p26) == -1;
    if(!v1003) {
      var v1266 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p26) == -1;
      if(!v1266) {
        var v1410 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p26) == -1;
        if(!v1410) {
          v1410 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p26) == -1
        }
        v1266 = v1410
      }
      v1003 = v1266
    }
    v584 = v1003
  }
  if(v584) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v1005 = formElement.value;
  if(JAM.call(v1005.search, v1005, [/\S/], JAM.policy.p26) == -1) {
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
    var v1006 = arrayOfPatterns[z$$2];
    if(JAM.call(v1006.search, v1006, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p26) == -1) {
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
    var v1268 = arrayOfPatterns[j];
    var v591 = JAM.call(v1268.match, v1268, [/\/.+\//], JAM.policy.p26) + "gi";
    if(JAM.isEval(eval)) {
      var v1618 = eval("introspect(JAM.policy.pFull) { " + v591 + " }")
    }else {
      var v1618 = JAM.call(eval, null, [v591])
    }
    v20[v21] = v1618;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    var v1009 = arrayOfPatterns[j];
    var v592 = JAM.call(v1009.match, v1009, [/=[a-zA-Z\*]/], JAM.policy.p26);
    var v1619 = JAM.call(v592.toString, v592, [], JAM.policy.p26);
    v22[v23] = v1619;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    var v593 = geneticCodeMatchResult[j];
    var v1620 = JAM.call(v593.replace, v593, [/=/g, ""], JAM.policy.p26);
    v24[v25] = v1620;
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
      if(JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p36) != -1) {
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
    var v1013 = arrayOfPatterns$$1[z$$3];
    if(JAM.call(v1013.search, v1013, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p26) != -1) {
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
      var v1015 = arrayOfPatterns$$1[j$$1];
      if(JAM.call(v1015.search, v1015, [re], JAM.policy.p36) != -1) {
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
    var v1016 = arrayOfPatterns$$2[z$$4];
    if(JAM.call(v1016.search, v1016, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p26) == -1) {
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
  var v1269 = getSequenceFromFasta(text$$7);
  if(JAM.call(v1269.replace, v1269, [/[^A-Za-z]/g, ""], JAM.policy.p26).length > maxInput) {
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
    var v1019 = alignArray[i$$4];
    if(JAM.call(v1019.search, v1019, [/[^\s]+\s/], JAM.policy.p26) == -1) {
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
    var v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p36);
    for(;v57;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p36);
      v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p36)
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
    var v1270 = arrayOfPatterns$$3[j$$2];
    var v640 = JAM.call(v1270.match, v1270, [/\/.+\//], JAM.policy.p26) + "gi";
    if(JAM.isEval(eval)) {
      var v1621 = eval("introspect(JAM.policy.pFull) { " + v640 + " }")
    }else {
      var v1621 = JAM.call(eval, null, [v640])
    }
    v73[v74] = v1621;
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
    var v1021 = arrayOfPatterns$$4[j$$3];
    var v643 = JAM.call(v1021.match, v1021, [/=[a-zA-Z\*]/], JAM.policy.p26);
    var v1622 = JAM.call(v643.toString, v643, [], JAM.policy.p26);
    v77[v78] = v1622;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    var v644 = geneticCodeMatchResult$$1[j$$3];
    var v1623 = JAM.call(v644.replace, v644, [/=/g, ""], JAM.policy.p26);
    v79[v80] = v1623;
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
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p36);
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
  var v672 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p26) != -1;
  if(!v672) {
    var v1024 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p26) != -1;
    if(!v1024) {
      var v1272 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p26) != -1;
      if(!v1272) {
        var v1413 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p26) != -1;
        if(!v1413) {
          var v1501 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p26) != -1;
          if(!v1501) {
            var v1533 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p26) != -1;
            if(!v1533) {
              var v1554 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p26) != -1;
              if(!v1554) {
                var v1568 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p26) != -1;
                if(!v1568) {
                  var v1580 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p26) != -1;
                  if(!v1580) {
                    var v1590 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p26) != -1;
                    if(!v1590) {
                      v1590 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p26) != -1
                    }
                    v1580 = v1590
                  }
                  v1568 = v1580
                }
                v1554 = v1568
              }
              v1533 = v1554
            }
            v1501 = v1533
          }
          v1413 = v1501
        }
        v1272 = v1413
      }
      v1024 = v1272
    }
    v672 = v1024
  }
  if(v672) {
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
  JAM.call(v111.write, v111, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p36);
  if(isColor) {
    var v113 = outputWindow.document;
    JAM.call(v113.write, v113, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p36)
  }else {
    var v115 = outputWindow.document;
    JAM.call(v115.write, v115, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p36)
  }
  var v117 = outputWindow.document;
  JAM.call(v117.write, v117, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"], JAM.policy.p36);
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
  JAM.call(v119.write, v119, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p36);
  if(isBackground) {
    var v121 = outputWindow.document;
    JAM.call(v121.write, v121, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p36)
  }else {
    var v123 = outputWindow.document;
    JAM.call(v123.write, v123, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p36)
  }
  var v125 = outputWindow.document;
  JAM.call(v125.write, v125, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"], JAM.policy.p36);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p36);
  if(testArray[0] != testString) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  if(JAM.call(testString.search, testString, [re$$2], JAM.policy.p36) == -1) {
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
  var v687 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p26) == -1;
  if(!v687) {
    var v1035 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p26) == -1;
    if(!v1035) {
      var v1283 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p26) == -1;
      if(!v1283) {
        v1283 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p26) == -1
      }
      v1035 = v1283
    }
    v687 = v1035
  }
  if(v687) {
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
  var v692 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p26) == -1;
  if(!v692) {
    var v1038 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p26) == -1;
    if(!v1038) {
      var v1286 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p26) == -1;
      if(!v1286) {
        v1286 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p26) == -1
      }
      v1038 = v1286
    }
    v692 = v1038
  }
  if(v692) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v693 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p26) == -1;
  if(!v693) {
    var v1041 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p26) == -1;
    if(!v1041) {
      var v1289 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p26) == -1;
      if(!v1289) {
        v1289 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p26) == -1
      }
      v1041 = v1289
    }
    v693 = v1041
  }
  if(v693) {
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
  var v695 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p26) == -1;
  if(!v695) {
    var v1044 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p26) == -1;
    if(!v1044) {
      var v1292 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p26) == -1;
      if(!v1292) {
        v1292 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p26) == -1
      }
      v1044 = v1292
    }
    v695 = v1044
  }
  if(v695) {
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
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p36);
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
    JAM.call(v154.write, v154, [lineOfText + "\n"], JAM.policy.p36);
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
    var v700 = adjustment < 0;
    if(v700) {
      v700 = adjusted >= 0
    }
    if(v700) {
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
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p36);
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
      JAM.call(v167.write, v167, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p36);
      if(strands$$1 == "two") {
        var v169 = outputWindow.document;
        JAM.call(v169.write, v169, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p36);
        var v171 = outputWindow.document;
        JAM.call(v171.write, v171, ["\n"], JAM.policy.p27)
      }
    }else {
      if(numberPosition$$1 == "right") {
        var v173 = outputWindow.document;
        JAM.call(v173.write, v173, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p36);
        if(strands$$1 == "two") {
          var v175 = outputWindow.document;
          JAM.call(v175.write, v175, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p36);
          var v177 = outputWindow.document;
          JAM.call(v177.write, v177, ["\n"], JAM.policy.p27)
        }
      }else {
        if(numberPosition$$1 == "above") {
          var v179 = outputWindow.document;
          JAM.call(v179.write, v179, [aboveNum + "\n"], JAM.policy.p36);
          var v181 = outputWindow.document;
          JAM.call(v181.write, v181, [lineOfText$$1 + "\n"], JAM.policy.p36);
          if(strands$$1 == "two") {
            var v183 = outputWindow.document;
            JAM.call(v183.write, v183, [complement(lineOfText$$1) + "\n"], JAM.policy.p36);
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
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p36);
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
      JAM.call(v200.write, v200, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p36)
    }else {
      if(numberPosition$$2 == "right") {
        var v202 = outputWindow.document;
        JAM.call(v202.write, v202, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p36)
      }else {
        if(numberPosition$$2 == "above") {
          var v204 = outputWindow.document;
          JAM.call(v204.write, v204, [aboveNum$$1 + "\n"], JAM.policy.p36);
          var v206 = outputWindow.document;
          JAM.call(v206.write, v206, [lineOfText$$2 + "\n"], JAM.policy.p36)
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
  var v717 = sequence$$13.length <= firstIndexToMutate;
  if(!v717) {
    var v1055 = lastIndexToMutate < 0;
    if(!v1055) {
      v1055 = lastIndexToMutate <= firstIndexToMutate
    }
    v717 = v1055
  }
  if(v717) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p26) * maxNum], JAM.policy.p26);
    var v719 = randNum < firstIndexToMutate;
    if(!v719) {
      v719 = randNum > lastIndexToMutate
    }
    if(v719) {
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
    sequence$$13 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p26) + components$$1[componentsIndex] + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p37);
    i$$8 = i$$8 + 1;
    v220 = i$$8 < numMut
  }
  var v221 = outputWindow.document;
  JAM.call(v221.write, v221, [addReturns(sequence$$13)], JAM.policy.p36);
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
      JAM.call(v224.write, v224, [sequence$$14 + "\n"], JAM.policy.p36);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v227 = j$$9 < lengthOut$$1
  }
  var v228 = outputWindow.document;
  JAM.call(v228.write, v228, [sequence$$14 + "\n"], JAM.policy.p36);
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
    sequence$$15 = JAM.call(sequence$$15.substring, sequence$$15, [sequence$$15.length - lookAhead, sequence$$15.length], JAM.policy.p37) + sequence$$15 + JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p26);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v234 = outputWindow.document;
  JAM.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p27);
  var v235 = outputWindow.document;
  JAM.call(v235.write, v235, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p36);
  var i$$9 = 0;
  var v252 = i$$9 < arrayOfItems.length;
  for(;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v734 = arrayOfItems[i$$9];
    matchExp = JAM.call(v734.match, v734, [/\/.+\//], JAM.policy.p26) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    var v1299 = arrayOfItems[i$$9];
    var v1061 = JAM.call(v1299.match, v1299, [/\)\D*\d+/], JAM.policy.p26);
    var v735 = JAM.call(v1061.toString, v1061, [], JAM.policy.p26);
    cutDistance = parseFloat(JAM.call(v735.replace, v735, [/\)\D*/, ""], JAM.policy.p26));
    var v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p36);
    for(;v244;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v736 = matchPosition >= lowerLimit;
      if(v736) {
        v736 = matchPosition < upperLimit
      }
      if(v736) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1)
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p36)
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
    var v1539 = '<tr><td class="' + backGroundClass + '">';
    var v1586 = arrayOfItems[i$$9];
    var v1574 = JAM.call(v1586.match, v1586, [/\([^\(]+\)/], JAM.policy.p26);
    var v1561 = JAM.call(v1574.toString, v1574, [], JAM.policy.p26);
    JAM.call(v250.write, v250, [v1539 + JAM.call(v1561.replace, v1561, [/\(|\)/g, ""], JAM.policy.p26) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p36);
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
  JAM.call(v255.write, v255, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p36);
  var i$$10 = 0;
  var v265 = i$$10 < arrayOfItems$$1.length;
  for(;v265;) {
    var tempNumber = 0;
    var v745 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v745.match, v745, [/\/[^\/]+\//], JAM.policy.p26) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p36) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p36).length
    }
    var percentage = 0;
    var v1065 = originalLength + 1;
    var v1433 = arrayOfItems$$1[i$$10];
    if(v1065 - parseFloat(JAM.call(v1433.match, v1433, [/\d+/], JAM.policy.p26)) > 0) {
      var v260 = 100 * tempNumber;
      var v748 = originalLength + 1;
      var v1303 = arrayOfItems$$1[i$$10];
      percentage = v260 / (v748 - parseFloat(JAM.call(v1303.match, v1303, [/\d+/], JAM.policy.p26)))
    }
    var v263 = outputWindow.document;
    var v1587 = arrayOfItems$$1[i$$10];
    var v1575 = JAM.call(v1587.match, v1587, [/\([^\(]+\)\b/], JAM.policy.p26);
    var v1562 = JAM.call(v1575.toString, v1575, [], JAM.policy.p26);
    JAM.call(v263.write, v263, ["<tr><td>" + JAM.call(v1562.replace, v1562, [/\(|\)/g, ""], JAM.policy.p26) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p26) + "</td></tr>\n"], JAM.policy.p36);
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
      JAM.call(v270.write, v270, [tempSeq + "\n"], JAM.policy.p36);
      tempSeq = ""
    }
    v273 = sequence$$17.length > 0
  }
  var v274 = outputWindow.document;
  JAM.call(v274.write, v274, [tempSeq + "\n"], JAM.policy.p36);
  return true
}
function pairwiseAlignProtein(theDocument) {
  var newProteinOne = "";
  var titleOne = "";
  var newProteinTwo = "";
  var titleTwo = "";
  var maxInput$$3 = 2E3;
  if(testScript() == false) {
    return false
  }
  var v757 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v757) {
    var v1071 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
    if(!v1071) {
      var v1307 = checkFormElement(theDocument.forms[0].elements[1]) == false;
      if(!v1307) {
        v1307 = checkSequenceLength(theDocument.forms[0].elements[1].value, maxInput$$3) == false
      }
      v1071 = v1307
    }
    v757 = v1071
  }
  if(v757) {
    return false
  }
  var MATRIX = theDocument.forms[0].elements[5].options[theDocument.forms[0].elements[5].selectedIndex].value;
  var BEGIN_GAP_PENALTY = parseInt(theDocument.forms[0].elements[6].options[theDocument.forms[0].elements[6].selectedIndex].value);
  var GAP_PENALTY = parseInt(theDocument.forms[0].elements[7].options[theDocument.forms[0].elements[7].selectedIndex].value);
  var END_GAP_PENALTY = parseInt(theDocument.forms[0].elements[8].options[theDocument.forms[0].elements[8].selectedIndex].value);
  openWindow("Pairwise Align Protein");
  openPre();
  newProteinOne = getSequenceFromFasta(theDocument.forms[0].elements[0].value);
  newProteinOne = removeNonProtein(newProteinOne);
  titleOne = getTitleFromFasta(theDocument.forms[0].elements[0].value);
  newProteinTwo = getSequenceFromFasta(theDocument.forms[0].elements[1].value);
  newProteinTwo = removeNonProtein(newProteinTwo);
  titleTwo = getTitleFromFasta(theDocument.forms[0].elements[1].value);
  var v286 = outputWindow.document;
  JAM.call(v286.write, v286, [getPairwiseAlignTitle(titleOne, newProteinOne, titleTwo, newProteinTwo)], JAM.policy.p36);
  if(JAM.call(newProteinOne.search, newProteinOne, [/./], JAM.policy.p26) != -1) {
    newProteinOne = JAM.call(newProteinOne.match, newProteinOne, [/./g], JAM.policy.p26)
  }
  if(JAM.call(newProteinTwo.search, newProteinTwo, [/./], JAM.policy.p26) != -1) {
    newProteinTwo = JAM.call(newProteinTwo.match, newProteinTwo, [/./g], JAM.policy.p26)
  }
  pairwiseProtein(titleOne, newProteinOne, titleTwo, newProteinTwo, MATRIX, GAP_PENALTY, BEGIN_GAP_PENALTY, END_GAP_PENALTY);
  closePre();
  closeWindow();
  return true
}
function pairwiseProtein(titleOne$$1, newProteinOne$$1, titleTwo$$1, newProteinTwo$$1, matrix, gapPenalty, beginGapPenalty, endGapPenalty) {
  var useLinearSpace = true;
  var useQuadraticSpace = false;
  var scoringMatrix;
  if(matrix == "pam30") {
    scoringMatrix = new Pam30
  }else {
    if(matrix == "pam70") {
      scoringMatrix = new Pam70
    }else {
      if(matrix == "blosum80") {
        scoringMatrix = new Blosum80
      }else {
        if(matrix == "blosum62") {
          scoringMatrix = new Blosum62
        }else {
          if(matrix == "blosum45") {
            scoringMatrix = new Blosum45
          }
        }
      }
    }
  }
  var scoreSet = new ScoreSet;
  JAM.call(scoreSet.setScoreSetParam, scoreSet, [scoringMatrix, gapPenalty, beginGapPenalty, endGapPenalty], JAM.policy.p37);
  var alignment;
  if(useLinearSpace) {
    alignment = new AlignPairLinear;
    JAM.call(alignment.setAlignParam, alignment, [newProteinOne$$1, newProteinTwo$$1, scoreSet], JAM.policy.p37);
    JAM.call(alignment.align, alignment, [], JAM.policy.p26);
    var v295 = outputWindow.document;
    JAM.call(v295.write, v295, [">" + titleOne$$1 + "\n"], JAM.policy.p36);
    var v297 = outputWindow.document;
    JAM.call(v297.write, v297, [addReturns(JAM.call(alignment.getAlignedM, alignment, [], JAM.policy.p26))], JAM.policy.p36);
    var v299 = outputWindow.document;
    JAM.call(v299.write, v299, ["\n"], JAM.policy.p27);
    var v300 = outputWindow.document;
    JAM.call(v300.write, v300, ["\n"], JAM.policy.p27);
    var v301 = outputWindow.document;
    JAM.call(v301.write, v301, [">" + titleTwo$$1 + "\n"], JAM.policy.p36);
    var v303 = outputWindow.document;
    JAM.call(v303.write, v303, [addReturns(JAM.call(alignment.getAlignedN, alignment, [], JAM.policy.p26))], JAM.policy.p36);
    var v305 = outputWindow.document;
    JAM.call(v305.write, v305, ["\n\n"], JAM.policy.p27);
    var v306 = outputWindow.document;
    JAM.call(v306.write, v306, ["Alignment score: " + alignment.score + "\n\n"], JAM.policy.p36)
  }
  if(useQuadraticSpace) {
    alignment = new AlignPairQuad;
    JAM.call(alignment.initializeMatrix, alignment, [newProteinOne$$1, newProteinTwo$$1, scoreSet], JAM.policy.p37);
    JAM.call(alignment.fillMatrix, alignment, [], JAM.policy.p26);
    JAM.call(alignment.align, alignment, [], JAM.policy.p26);
    var v308 = outputWindow.document;
    JAM.call(v308.write, v308, [">" + titleOne$$1 + "\n"], JAM.policy.p36);
    var v310 = outputWindow.document;
    JAM.call(v310.write, v310, [addReturns(JAM.call(alignment.getAlignedM, alignment, [], JAM.policy.p26))], JAM.policy.p36);
    var v312 = outputWindow.document;
    JAM.call(v312.write, v312, ["\n"], JAM.policy.p27);
    var v313 = outputWindow.document;
    JAM.call(v313.write, v313, ["\n"], JAM.policy.p27);
    var v314 = outputWindow.document;
    JAM.call(v314.write, v314, [">" + titleTwo$$1 + "\n"], JAM.policy.p36);
    var v316 = outputWindow.document;
    JAM.call(v316.write, v316, [addReturns(JAM.call(alignment.getAlignedN, alignment, [], JAM.policy.p26))], JAM.policy.p36);
    var v318 = outputWindow.document;
    JAM.call(v318.write, v318, ["\n\n"], JAM.policy.p27);
    var v319 = outputWindow.document;
    JAM.call(v319.write, v319, ["Alignment score: " + alignment.score + "\n\n"], JAM.policy.p36)
  }
  return
}
function getScore(r1$$1, r2) {
  var v321 = this.scoringMatrix;
  return JAM.call(v321.scoringMatrix_getScore, v321, [r1$$1, r2], JAM.policy.p37)
}
function setScoreSetParam(scoringMatrix$$1, gapPenalty$$1, beginGapPenalty$$1, endGapPenalty$$1) {
  this.scoringMatrix = scoringMatrix$$1;
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
  if(this.scoreHash[r1$$2 + r2$$1] == null) {
    throw"Unrecognized residue pair: " + r1$$2 + ", " + r2$$1 + ".";
  }else {
    return this.scoreHash[r1$$2 + r2$$1]
  }
  return
}
function scoringMatrix_fillHash(matrix$$1) {
  var v326 = matrix$$1[0];
  var cols = JAM.call(v326.split, v326, [/\s+/], JAM.policy.p26);
  var cells;
  var i$$11 = 1;
  var v331 = i$$11 < matrix$$1.length;
  for(;v331;) {
    var v327 = matrix$$1[i$$11];
    cells = JAM.call(v327.split, v327, [/\s+/], JAM.policy.p26);
    var j$$10 = 1;
    var v330 = j$$10 < cols.length + 1;
    for(;v330;) {
      var v328 = this.scoreHash;
      var v1091 = cells[0];
      var v783 = JAM.call(v1091.toLowerCase, v1091, [], JAM.policy.p26);
      var v1092 = cols[j$$10 - 1];
      var v329 = v783 + JAM.call(v1092.toLowerCase, v1092, [], JAM.policy.p26);
      var v1624 = parseInt(cells[j$$10]);
      JAM.set(v328, v329, v1624, JAM.policy.p13);
      j$$10 = j$$10 + 1;
      v330 = j$$10 < cols.length + 1
    }
    i$$11 = i$$11 + 1;
    v331 = i$$11 < matrix$$1.length
  }
  return
}
function ScoringMatrix() {
  this.scoreHash = {};
  return
}
function Blosum62() {
  var matrix$$2 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  4 -1 -2 -2  0 -1 -1  0 -2 -1 -1 -1 -1 -2 -1  1  0 -3 -2  0", "R -1  5  0 -2 -3  1  0 -2  0 -3 -2  2 -1 -3 -2 -1 -1 -3 -2 -3", "N -2  0  6  1 -3  0  0  0  1 -3 -3  0 -2 -3 -2  1  0 -4 -2 -3", "D -2 -2  1  6 -3  0  2 -1 -1 -3 -4 -1 -3 -3 -1  0 -1 -4 -3 -3", "C  0 -3 -3 -3  9 -3 -4 -3 -3 -1 -1 -3 -1 -2 -3 -1 -1 -2 -2 -1", "Q -1  1  0  0 -3  5  2 -2  0 -3 -2  1  0 -3 -1  0 -1 -2 -1 -2", "E -1  0  0  2 -4  2  5 -2  0 -3 -3  1 -2 -3 -1  0 -1 -3 -2 -2", 
  "G  0 -2  0 -1 -3 -2 -2  6 -2 -4 -4 -2 -3 -3 -2  0 -2 -2 -3 -3", "H -2  0  1 -1 -3  0  0 -2  8 -3 -3 -1 -2 -1 -2 -1 -2 -2  2 -3", "I -1 -3 -3 -3 -1 -3 -3 -4 -3  4  2 -3  1  0 -3 -2 -1 -3 -1  3", "L -1 -2 -3 -4 -1 -2 -3 -4 -3  2  4 -2  2  0 -3 -2 -1 -2 -1  1", "K -1  2  0 -1 -3  1  1 -2 -1 -3 -2  5 -1 -3 -1  0 -1 -3 -2 -2", "M -1 -1 -2 -3 -1  0 -2 -3 -2  1  2 -1  5  0 -2 -1 -1 -1 -1  1", "F -2 -3 -3 -3 -2 -3 -3 -3 -1  0  0 -3  0  6 -4 -2 -2  1  3 -1", "P -1 -2 -2 -1 -3 -1 -1 -2 -2 -3 -3 -1 -2 -4  7 -1 -1 -4 -3 -2", 
  "S  1 -1  1  0 -1  0  0  0 -1 -2 -2  0 -1 -2 -1  4  1 -3 -2 -2", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -2 -1  1  5 -2 -2  0", "W -3 -3 -4 -4 -2 -2 -3 -2 -2 -3 -2 -3 -1  1 -4 -3 -2 11  2 -3", "Y -2 -2 -2 -3 -2 -1 -2 -3  2 -1 -1 -2 -1  3 -3 -2 -2  2  7 -1", "V  0 -3 -3 -3 -1 -2 -2 -3 -3  3  1 -2  1 -1 -2 -2  0 -3 -1  4");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$2], JAM.policy.p36);
  return
}
function Blosum45() {
  var matrix$$3 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -1 -2 -1 -1 -1  0 -2 -1 -1 -1 -1 -2 -1  1  0 -2 -2  0", "R -2  7  0 -1 -3  1  0 -2  0 -3 -2  3 -1 -2 -2 -1 -1 -2 -1 -2", "N -1  0  6  2 -2  0  0  0  1 -2 -3  0 -2 -2 -2  1  0 -4 -2 -3", "D -2 -1  2  7 -3  0  2 -1  0 -4 -3  0 -3 -4 -1  0 -1 -4 -2 -3", "C -1 -3 -2 -3 12 -3 -3 -3 -3 -3 -2 -3 -2 -2 -4 -1 -1 -5 -3 -1", "Q -1  1  0  0 -3  6  2 -2  1 -2 -2  1  0 -4 -1  0 -1 -2 -1 -3", "E -1  0  0  2 -3  2  6 -2  0 -3 -2  1 -2 -3  0  0 -1 -3 -2 -3", 
  "G  0 -2  0 -1 -3 -2 -2  7 -2 -4 -3 -2 -2 -3 -2  0 -2 -2 -3 -3", "H -2  0  1  0 -3  1  0 -2 10 -3 -2 -1  0 -2 -2 -1 -2 -3  2 -3", "I -1 -3 -2 -4 -3 -2 -3 -4 -3  5  2 -3  2  0 -2 -2 -1 -2  0  3", "L -1 -2 -3 -3 -2 -2 -2 -3 -2  2  5 -3  2  1 -3 -3 -1 -2  0  1", "K -1  3  0  0 -3  1  1 -2 -1 -3 -3  5 -1 -3 -1 -1 -1 -2 -1 -2", "M -1 -1 -2 -3 -2  0 -2 -2  0  2  2 -1  6  0 -2 -2 -1 -2  0  1", "F -2 -2 -2 -4 -2 -4 -3 -3 -2  0  1 -3  0  8 -3 -2 -1  1  3  0", "P -1 -2 -2 -1 -4 -1  0 -2 -2 -2 -3 -1 -2 -3  9 -1 -1 -3 -3 -3", 
  "S  1 -1  1  0 -1  0  0  0 -1 -2 -3 -1 -2 -2 -1  4  2 -4 -2 -1", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -1 -1  2  5 -3 -1  0", "W -2 -2 -4 -4 -5 -2 -3 -2 -3 -2 -2 -2 -2  1 -3 -4 -3 15  3 -3", "Y -2 -1 -2 -2 -3 -1 -2 -3  2  0  0 -1  0  3 -3 -2 -1  3  8 -1", "V  0 -2 -3 -3 -1 -3 -3 -3 -3  3  1 -2  1  0 -3 -1  0 -3 -1  5");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$3], JAM.policy.p36);
  return
}
function Blosum80() {
  var matrix$$4 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -2 -2 -1 -1 -1  0 -2 -2 -2 -1 -1 -3 -1  1  0 -3 -2  0", "R -2  6 -1 -2 -4  1 -1 -3  0 -3 -3  2 -2 -4 -2 -1 -1 -4 -3 -3", "N -2 -1  6  1 -3  0 -1 -1  0 -4 -4  0 -3 -4 -3  0  0 -4 -3 -4", "D -2 -2  1  6 -4 -1  1 -2 -2 -4 -5 -1 -4 -4 -2 -1 -1 -6 -4 -4", "C -1 -4 -3 -4  9 -4 -5 -4 -4 -2 -2 -4 -2 -3 -4 -2 -1 -3 -3 -1", "Q -1  1  0 -1 -4  6  2 -2  1 -3 -3  1  0 -4 -2  0 -1 -3 -2 -3", "E -1 -1 -1  1 -5  2  6 -3  0 -4 -4  1 -2 -4 -2  0 -1 -4 -3 -3", 
  "G  0 -3 -1 -2 -4 -2 -3  6 -3 -5 -4 -2 -4 -4 -3 -1 -2 -4 -4 -4", "H -2  0  0 -2 -4  1  0 -3  8 -4 -3 -1 -2 -2 -3 -1 -2 -3  2 -4", "I -2 -3 -4 -4 -2 -3 -4 -5 -4  5  1 -3  1 -1 -4 -3 -1 -3 -2  3", "L -2 -3 -4 -5 -2 -3 -4 -4 -3  1  4 -3  2  0 -3 -3 -2 -2 -2  1", "K -1  2  0 -1 -4  1  1 -2 -1 -3 -3  5 -2 -4 -1 -1 -1 -4 -3 -3", "M -1 -2 -3 -4 -2  0 -2 -4 -2  1  2 -2  6  0 -3 -2 -1 -2 -2  1", "F -3 -4 -4 -4 -3 -4 -4 -4 -2 -1  0 -4  0  6 -4 -3 -2  0  3 -1", "P -1 -2 -3 -2 -4 -2 -2 -3 -3 -4 -3 -1 -3 -4  8 -1 -2 -5 -4 -3", 
  "S  1 -1  0 -1 -2  0  0 -1 -1 -3 -3 -1 -2 -3 -1  5  1 -4 -2 -2", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -2 -1 -1 -2 -2  1  5 -4 -2  0", "W -3 -4 -4 -6 -3 -3 -4 -4 -3 -3 -2 -4 -2  0 -5 -4 -4 11  2 -3", "Y -2 -3 -3 -4 -3 -2 -3 -4  2 -2 -2 -3 -2  3 -4 -2 -2  2  7 -2", "V  0 -3 -4 -4 -1 -3 -3 -4 -4  3  1 -3  1 -1 -3 -2  0 -3 -2  4");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$4], JAM.policy.p36);
  return
}
function Pam70() {
  var matrix$$5 = new Array("A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   5  -4  -2  -1  -4  -2  -1   0  -4  -2  -4  -4  -3  -6   0   1   1  -9  -5  -1", "R  -4   8  -3  -6  -5   0  -5  -6   0  -3  -6   2  -2  -7  -2  -1  -4   0  -7  -5", "N  -2  -3   6   3  -7  -1   0  -1   1  -3  -5   0  -5  -6  -3   1   0  -6  -3  -5", "D  -1  -6   3   6  -9   0   3  -1  -1  -5  -8  -2  -7 -10  -4  -1  -2 -10  -7  -5", "C  -4  -5  -7  -9   9  -9  -9  -6  -5  -4 -10  -9  -9  -8  -5  -1  -5 -11  -2  -4", 
  "Q  -2   0  -1   0  -9   7   2  -4   2  -5  -3  -1  -2  -9  -1  -3  -3  -8  -8  -4", "E  -1  -5   0   3  -9   2   6  -2  -2  -4  -6  -2  -4  -9  -3  -2  -3 -11  -6  -4", "G   0  -6  -1  -1  -6  -4  -2   6  -6  -6  -7  -5  -6  -7  -3   0  -3 -10  -9  -3", "H  -4   0   1  -1  -5   2  -2  -6   8  -6  -4  -3  -6  -4  -2  -3  -4  -5  -1  -4", "I  -2  -3  -3  -5  -4  -5  -4  -6  -6   7   1  -4   1   0  -5  -4  -1  -9  -4   3", "L  -4  -6  -5  -8 -10  -3  -6  -7  -4   1   6  -5   2  -1  -5  -6  -4  -4  -4   0", 
  "K  -4   2   0  -2  -9  -1  -2  -5  -3  -4  -5   6   0  -9  -4  -2  -1  -7  -7  -6", "M  -3  -2  -5  -7  -9  -2  -4  -6  -6   1   2   0  10  -2  -5  -3  -2  -8  -7   0", "F  -6  -7  -6 -10  -8  -9  -9  -7  -4   0  -1  -9  -2   8  -7  -4  -6  -2   4  -5", "P   0  -2  -3  -4  -5  -1  -3  -3  -2  -5  -5  -4  -5  -7   7   0  -2  -9  -9  -3", "S   1  -1   1  -1  -1  -3  -2   0  -3  -4  -6  -2  -3  -4   0   5   2  -3  -5  -3", "T   1  -4   0  -2  -5  -3  -3  -3  -4  -1  -4  -1  -2  -6  -2   2   6  -8  -4  -1", 
  "W  -9   0  -6 -10 -11  -8 -11 -10  -5  -9  -4  -7  -8  -2  -9  -3  -8  13  -3 -10", "Y  -5  -7  -3  -7  -2  -8  -6  -9  -1  -4  -4  -7  -7   4  -9  -5  -4  -3   9  -5", "V  -1  -5  -5  -5  -4  -4  -4  -3  -4   3   0  -6   0  -5  -3  -3  -1 -10  -5   6");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$5], JAM.policy.p36);
  return
}
function Pam30() {
  var matrix$$6 = new Array("A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   6  -7  -4  -3  -6  -4  -2  -2  -7  -5  -6  -7  -5  -8  -2   0  -1 -13  -8  -2", "R  -7   8  -6 -10  -8  -2  -9  -9  -2  -5  -8   0  -4  -9  -4  -3  -6  -2 -10  -8", "N  -4  -6   8   2 -11  -3  -2  -3   0  -5  -7  -1  -9  -9  -6   0  -2  -8  -4  -8", "D  -3 -10   2   8 -14  -2   2  -3  -4  -7 -12  -4 -11 -15  -8  -4  -5 -15 -11  -8", "C  -6  -8 -11 -14  10 -14 -14  -9  -7  -6 -15 -14 -13 -13  -8  -3  -8 -15  -4  -6", 
  "Q  -4  -2  -3  -2 -14   8   1  -7   1  -8  -5  -3  -4 -13  -3  -5  -5 -13 -12  -7", "E  -2  -9  -2   2 -14   1   8  -4  -5  -5  -9  -4  -7 -14  -5  -4  -6 -17  -8  -6", "G  -2  -9  -3  -3  -9  -7  -4   6  -9 -11 -10  -7  -8  -9  -6  -2  -6 -15 -14  -5", "H  -7  -2   0  -4  -7   1  -5  -9   9  -9  -6  -6 -10  -6  -4  -6  -7  -7  -3  -6", "I  -5  -5  -5  -7  -6  -8  -5 -11  -9   8  -1  -6  -1  -2  -8  -7  -2 -14  -6   2", "L  -6  -8  -7 -12 -15  -5  -9 -10  -6  -1   7  -8   1  -3  -7  -8  -7  -6  -7  -2", 
  "K  -7   0  -1  -4 -14  -3  -4  -7  -6  -6  -8   7  -2 -14  -6  -4  -3 -12  -9  -9", "M  -5  -4  -9 -11 -13  -4  -7  -8 -10  -1   1  -2  11  -4  -8  -5  -4 -13 -11  -1", "F  -8  -9  -9 -15 -13 -13 -14  -9  -6  -2  -3 -14  -4   9 -10  -6  -9  -4   2  -8", "P  -2  -4  -6  -8  -8  -3  -5  -6  -4  -8  -7  -6  -8 -10   8  -2  -4 -14 -13  -6", "S   0  -3   0  -4  -3  -5  -4  -2  -6  -7  -8  -4  -5  -6  -2   6   0  -5  -7  -6", "T  -1  -6  -2  -5  -8  -5  -6  -6  -7  -2  -7  -3  -4  -9  -4   0   7 -13  -6  -3", 
  "W -13  -2  -8 -15 -15 -13 -17 -15  -7 -14  -6 -12 -13  -4 -14  -5 -13  13  -5 -15", "Y  -8 -10  -4 -11  -4 -12  -8 -14  -3  -6  -7  -9 -11   2 -13  -7  -6  -5  10  -7", "V  -2  -8  -8  -8  -6  -7  -6  -5  -6   2  -2  -9  -1  -8  -6  -6  -3 -15  -7   7");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$6], JAM.policy.p36);
  return
}
function align() {
  if(this.M.length == 0) {
    var j$$11 = 1;
    var v337 = j$$11 <= this.N.length;
    for(;v337;) {
      var v332 = this.alignedM;
      JAM.call(v332.push, v332, ["-"], JAM.policy.p27);
      var v333 = this.alignedN;
      JAM.call(v333.push, v333, [this.N[j$$11 - 1]], JAM.policy.p36);
      this.score = this.score + this.scoreSet.gap;
      j$$11 = j$$11 + 1;
      v337 = j$$11 <= this.N.length
    }
  }else {
    if(this.N.length == 0) {
      j$$11 = 1;
      var v343 = j$$11 <= this.M.length;
      for(;v343;) {
        var v338 = this.alignedN;
        JAM.call(v338.push, v338, ["-"], JAM.policy.p27);
        var v339 = this.alignedM;
        JAM.call(v339.push, v339, [this.M[j$$11 - 1]], JAM.policy.p36);
        this.score = this.score + this.scoreSet.gap;
        j$$11 = j$$11 + 1;
        v343 = j$$11 <= this.M.length
      }
    }else {
      var v800 = this.M.length == 0;
      if(v800) {
        v800 = this.N.length == 0
      }
      if(v800) {
      }else {
        JAM.call(this.path, this, [0, 0, this.M.length, this.N.length], JAM.policy.p26)
      }
    }
  }
  return
}
function path(i1, j1, i2, j2) {
  var v803 = i1 + 1 == i2;
  if(!v803) {
    v803 = j1 == j2
  }
  if(v803) {
    var subM = new Array;
    var subN = new Array;
    var i$$12 = i1 + 1;
    var v350 = i$$12 <= i2;
    for(;v350;) {
      JAM.call(subM.push, subM, [this.M[i$$12 - 1]], JAM.policy.p36);
      i$$12 = i$$12 + 1;
      v350 = i$$12 <= i2
    }
    var j$$12 = j1 + 1;
    var v352 = j$$12 <= j2;
    for(;v352;) {
      JAM.call(subN.push, subN, [this.N[j$$12 - 1]], JAM.policy.p36);
      j$$12 = j$$12 + 1;
      v352 = j$$12 <= j2
    }
    var alignment$$1 = new AlignPairQuad;
    subScoreSet = new ScoreSet;
    if(j1 == j2) {
      if(j1 == 0) {
        JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.beginGap, this.scoreSet.beginGap, this.scoreSet.beginGap], JAM.policy.p37)
      }else {
        if(j1 == this.N.length) {
          JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.endGap, this.scoreSet.endGap, this.scoreSet.endGap], JAM.policy.p37)
        }else {
          JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.gap, this.scoreSet.gap, this.scoreSet.gap], JAM.policy.p37)
        }
      }
    }else {
      JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.gap, this.scoreSet.beginGap, this.scoreSet.endGap], JAM.policy.p37);
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
    JAM.call(alignment$$1.initializeMatrix, alignment$$1, [subM, subN, subScoreSet], JAM.policy.p37);
    JAM.call(alignment$$1.fillMatrix, alignment$$1, [], JAM.policy.p26);
    JAM.call(alignment$$1.align, alignment$$1, [], JAM.policy.p26);
    var v376 = this.alignedM;
    JAM.call(v376.push, v376, [JAM.call(alignment$$1.getAlignedM, alignment$$1, [], JAM.policy.p26)], JAM.policy.p36);
    var v378 = this.alignedN;
    JAM.call(v378.push, v378, [JAM.call(alignment$$1.getAlignedN, alignment$$1, [], JAM.policy.p26)], JAM.policy.p36);
    this.score = this.score + alignment$$1.score
  }else {
    var middle = JAM.call(Math.floor, Math, [(i1 + i2) / 2], JAM.policy.p36);
    JAM.set(this.Sn, j1, 0, JAM.policy.p13);
    if(i1 == 0) {
      j$$12 = j1 + 1;
      var v385 = j$$12 <= j2;
      for(;v385;) {
        JAM.set(this.Sn, j$$12, this.Sn[j$$12 - 1] - this.scoreSet.beginGap, JAM.policy.p13);
        j$$12 = j$$12 + 1;
        v385 = j$$12 <= j2
      }
    }else {
      j$$12 = j1 + 1;
      var v387 = j$$12 <= j2;
      for(;v387;) {
        JAM.set(this.Sn, j$$12, this.Sn[j$$12 - 1] - this.scoreSet.gap, JAM.policy.p13);
        j$$12 = j$$12 + 1;
        v387 = j$$12 <= j2
      }
    }
    var diag;
    var left$$2;
    i$$12 = i1 + 1;
    var v410 = i$$12 <= middle;
    for(;v410;) {
      diag = this.Sn[j1];
      if(j1 == 0) {
        left$$2 = this.Sn[j1] - this.scoreSet.beginGap
      }else {
        left$$2 = this.Sn[j1] - this.scoreSet.gap
      }
      JAM.set(this.Sn, j1, left$$2, JAM.policy.p13);
      j$$12 = j1 + 1;
      var v409 = j$$12 <= j2;
      for(;v409;) {
        var v836 = j$$12 == this.N.length;
        if(v836) {
          v836 = i$$12 == this.M.length
        }
        if(v836) {
          var v396 = this.Sn[j$$12] - this.scoreSet.endGap;
          var v839 = left$$2 - this.scoreSet.endGap;
          var v1118 = diag;
          var v1327 = this.scoreSet;
          left$$2 = JAM.call(Math.max, Math, [v396, JAM.call(Math.max, Math, [v839, v1118 + JAM.call(v1327.getScore, v1327, [this.M[i$$12 - 1], this.N[j$$12 - 1]], JAM.policy.p37)], JAM.policy.p37)], JAM.policy.p26)
        }else {
          if(i$$12 == this.M.length) {
            var v398 = this.Sn[j$$12] - this.scoreSet.gap;
            var v844 = left$$2 - this.scoreSet.endGap;
            var v1124 = diag;
            var v1331 = this.scoreSet;
            left$$2 = JAM.call(Math.max, Math, [v398, JAM.call(Math.max, Math, [v844, v1124 + JAM.call(v1331.getScore, v1331, [this.M[i$$12 - 1], this.N[j$$12 - 1]], JAM.policy.p37)], JAM.policy.p37)], JAM.policy.p26)
          }else {
            if(j$$12 == this.N.length) {
              var v400 = this.Sn[j$$12] - this.scoreSet.endGap;
              var v849 = left$$2 - this.scoreSet.gap;
              var v1130 = diag;
              var v1335 = this.scoreSet;
              left$$2 = JAM.call(Math.max, Math, [v400, JAM.call(Math.max, Math, [v849, v1130 + JAM.call(v1335.getScore, v1335, [this.M[i$$12 - 1], this.N[j$$12 - 1]], JAM.policy.p37)], JAM.policy.p37)], JAM.policy.p26)
            }else {
              var v402 = this.Sn[j$$12] - this.scoreSet.gap;
              var v853 = left$$2 - this.scoreSet.gap;
              var v1135 = diag;
              var v1339 = this.scoreSet;
              left$$2 = JAM.call(Math.max, Math, [v402, JAM.call(Math.max, Math, [v853, v1135 + JAM.call(v1339.getScore, v1339, [this.M[i$$12 - 1], this.N[j$$12 - 1]], JAM.policy.p37)], JAM.policy.p37)], JAM.policy.p26)
            }
          }
        }
        diag = this.Sn[j$$12];
        JAM.set(this.Sn, j$$12, left$$2, JAM.policy.p13);
        j$$12 = j$$12 + 1;
        v409 = j$$12 <= j2
      }
      i$$12 = i$$12 + 1;
      v410 = i$$12 <= middle
    }
    JAM.set(this.Sp, j2, 0, JAM.policy.p13);
    if(i2 == this.M.length) {
      j$$12 = j2 - 1;
      var v413 = j$$12 >= j1;
      for(;v413;) {
        JAM.set(this.Sp, j$$12, this.Sp[j$$12 + 1] - this.scoreSet.endGap, JAM.policy.p13);
        j$$12 = j$$12 - 1;
        v413 = j$$12 >= j1
      }
    }else {
      j$$12 = j2 - 1;
      var v415 = j$$12 >= j1;
      for(;v415;) {
        JAM.set(this.Sp, j$$12, this.Sp[j$$12 + 1] - this.scoreSet.gap, JAM.policy.p13);
        j$$12 = j$$12 - 1;
        v415 = j$$12 >= j1
      }
    }
    var right$$2;
    i$$12 = i2 - 1;
    var v438 = i$$12 >= middle;
    for(;v438;) {
      diag = this.Sp[j2];
      if(j2 == this.N.length) {
        right$$2 = this.Sp[j2] - this.scoreSet.endGap
      }else {
        right$$2 = this.Sp[j2] - this.scoreSet.gap
      }
      JAM.set(this.Sp, j2, right$$2, JAM.policy.p13);
      j$$12 = j2 - 1;
      var v437 = j$$12 >= j1;
      for(;v437;) {
        var v865 = j$$12 == 0;
        if(v865) {
          v865 = i$$12 == 0
        }
        if(v865) {
          var v424 = this.Sp[j$$12] - this.scoreSet.beginGap;
          var v868 = right$$2 - this.scoreSet.beginGap;
          var v1148 = diag;
          var v1343 = this.scoreSet;
          right$$2 = JAM.call(Math.max, Math, [v424, JAM.call(Math.max, Math, [v868, v1148 + JAM.call(v1343.getScore, v1343, [this.M[i$$12 + 1 - 1], this.N[j$$12 + 1 - 1]], JAM.policy.p37)], JAM.policy.p37)], JAM.policy.p26)
        }else {
          if(j$$12 == 0) {
            var v426 = this.Sp[j$$12] - this.scoreSet.beginGap;
            var v872 = right$$2 - this.scoreSet.gap;
            var v1153 = diag;
            var v1347 = this.scoreSet;
            right$$2 = JAM.call(Math.max, Math, [v426, JAM.call(Math.max, Math, [v872, v1153 + JAM.call(v1347.getScore, v1347, [this.M[i$$12 + 1 - 1], this.N[j$$12 + 1 - 1]], JAM.policy.p37)], JAM.policy.p37)], JAM.policy.p26)
          }else {
            if(i$$12 == 0) {
              var v428 = this.Sp[j$$12] - this.scoreSet.gap;
              var v876 = right$$2 - this.scoreSet.beginGap;
              var v1158 = diag;
              var v1351 = this.scoreSet;
              right$$2 = JAM.call(Math.max, Math, [v428, JAM.call(Math.max, Math, [v876, v1158 + JAM.call(v1351.getScore, v1351, [this.M[i$$12 + 1 - 1], this.N[j$$12 + 1 - 1]], JAM.policy.p37)], JAM.policy.p37)], JAM.policy.p26)
            }else {
              var v430 = this.Sp[j$$12] - this.scoreSet.gap;
              var v880 = right$$2 - this.scoreSet.gap;
              var v1163 = diag;
              var v1355 = this.scoreSet;
              right$$2 = JAM.call(Math.max, Math, [v430, JAM.call(Math.max, Math, [v880, v1163 + JAM.call(v1355.getScore, v1355, [this.M[i$$12 + 1 - 1], this.N[j$$12 + 1 - 1]], JAM.policy.p37)], JAM.policy.p37)], JAM.policy.p26)
            }
          }
        }
        diag = this.Sp[j$$12];
        JAM.set(this.Sp, j$$12, right$$2, JAM.policy.p13);
        j$$12 = j$$12 - 1;
        v437 = j$$12 >= j1
      }
      i$$12 = i$$12 - 1;
      v438 = i$$12 >= middle
    }
    var maxValue = this.Sn[j1] + this.Sp[j1];
    var maxJ = j1;
    j$$12 = j1 + 1;
    var v444 = j$$12 <= j2;
    for(;v444;) {
      if(this.Sn[j$$12] + this.Sp[j$$12] >= maxValue) {
        maxValue = this.Sn[j$$12] + this.Sp[j$$12];
        maxJ = j$$12
      }
      j$$12 = j$$12 + 1;
      v444 = j$$12 <= j2
    }
    JAM.call(this.path, this, [i1, j1, middle, maxJ], JAM.policy.p37);
    JAM.call(this.path, this, [middle, maxJ, i2, j2], JAM.policy.p26)
  }
  return
}
function getAlignedM() {
  var v446 = this.alignedM;
  return JAM.call(v446.join, v446, [""], JAM.policy.p27)
}
function getAlignedN() {
  var v447 = this.alignedN;
  return JAM.call(v447.join, v447, [""], JAM.policy.p27)
}
function setAlignParam(M, N, scoreSet$$1) {
  this.M = M;
  this.N = N;
  var v1625 = new Array;
  this.alignedM = v1625;
  var v1626 = new Array;
  this.alignedN = v1626;
  this.scoreSet = scoreSet$$1;
  var v1627 = new Array(this.N.length);
  this.Sn = v1627;
  var v1628 = new Array(this.N.length);
  this.Sp = v1628;
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
  var v1629 = new Array(this.M.length + 1);
  this.nodes = v1629;
  var i$$13 = 0;
  var v456 = i$$13 < this.nodes.length;
  for(;v456;) {
    var v451 = this.nodes;
    var v452 = i$$13;
    var v1630 = new Array(this.N.length + 1);
    v451[v452] = v1630;
    var j$$13 = 0;
    var v455 = j$$13 < this.nodes[i$$13].length;
    for(;v455;) {
      var v453 = this.nodes[i$$13];
      var v454 = j$$13;
      var v1631 = new Node;
      v453[v454] = v1631;
      j$$13 = j$$13 + 1;
      v455 = j$$13 < this.nodes[i$$13].length
    }
    i$$13 = i$$13 + 1;
    v456 = i$$13 < this.nodes.length
  }
  this.nodes[0][0].value = 0;
  i$$13 = 1;
  var v463 = i$$13 < this.nodes.length;
  for(;v463;) {
    if(this.scoreSet.useBeginGapLeft) {
      this.nodes[i$$13][0].value = this.nodes[i$$13 - 1][0].value - this.scoreSet.beginGap
    }else {
      this.nodes[i$$13][0].value = this.nodes[i$$13 - 1][0].value - this.scoreSet.gap
    }
    this.nodes[i$$13][0].tracebackI = i$$13 - 1;
    this.nodes[i$$13][0].tracebackJ = 0;
    i$$13 = i$$13 + 1;
    v463 = i$$13 < this.nodes.length
  }
  j$$13 = 1;
  var v469 = j$$13 < this.nodes[0].length;
  for(;v469;) {
    if(this.scoreSet.useBeginGapTop) {
      this.nodes[0][j$$13].value = this.nodes[0][j$$13 - 1].value - this.scoreSet.beginGap
    }else {
      this.nodes[0][j$$13].value = this.nodes[0][j$$13 - 1].value - this.scoreSet.gap
    }
    this.nodes[0][j$$13].tracebackI = 0;
    this.nodes[0][j$$13].tracebackJ = j$$13 - 1;
    j$$13 = j$$13 + 1;
    v469 = j$$13 < this.nodes[0].length
  }
  return
}
function dumpMatrix() {
  var v470 = outputWindow.document;
  JAM.call(v470.write, v470, ["Dynamic programming matrix i=" + this.nodes.length + " and j=" + this.nodes[0].length], JAM.policy.p36);
  var v472 = outputWindow.document;
  JAM.call(v472.write, v472, ["\n"], JAM.policy.p27);
  var i$$14 = 0;
  var v483 = i$$14 < this.nodes.length;
  for(;v483;) {
    var j$$14 = 0;
    var v481 = j$$14 < this.nodes[i$$14].length;
    for(;v481;) {
      var traceI = this.nodes[i$$14][j$$14].tracebackI;
      var traceJ = this.nodes[i$$14][j$$14].tracebackJ;
      if(traceI == undefined) {
        traceI = "u"
      }
      if(traceJ == undefined) {
        traceJ = "u"
      }
      var output = "(" + i$$14 + "," + j$$14 + ")[" + traceI + "," + traceJ + "]=" + this.nodes[i$$14][j$$14].value;
      var v479 = outputWindow.document;
      JAM.call(v479.write, v479, [rightNum(output, "", 20, " ")], JAM.policy.p36);
      j$$14 = j$$14 + 1;
      v481 = j$$14 < this.nodes[i$$14].length
    }
    var v482 = outputWindow.document;
    JAM.call(v482.write, v482, ["\n"], JAM.policy.p27);
    i$$14 = i$$14 + 1;
    v483 = i$$14 < this.nodes.length
  }
  var v484 = outputWindow.document;
  JAM.call(v484.write, v484, ["\n"], JAM.policy.p27);
  return
}
function fillMatrix() {
  var i$$15 = 1;
  var v530 = i$$15 < this.nodes.length;
  for(;v530;) {
    var j$$15 = 1;
    var v529 = j$$15 < this.nodes[0].length;
    for(;v529;) {
      var a;
      var b;
      var c;
      var v931 = i$$15 == this.nodes.length - 1;
      if(v931) {
        v931 = j$$15 == this.nodes[0].length - 1
      }
      if(v931) {
        if(this.scoreSet.useEndGapRight) {
          a = this.nodes[i$$15 - 1][j$$15].value - this.scoreSet.endGap
        }else {
          a = this.nodes[i$$15 - 1][j$$15].value - this.scoreSet.gap
        }
        if(this.scoreSet.useEndGapBottom) {
          b = this.nodes[i$$15][j$$15 - 1].value - this.scoreSet.endGap
        }else {
          b = this.nodes[i$$15][j$$15 - 1].value - this.scoreSet.gap
        }
      }else {
        if(i$$15 == this.nodes.length - 1) {
          a = this.nodes[i$$15 - 1][j$$15].value - this.scoreSet.gap;
          if(this.scoreSet.useEndGapBottom) {
            b = this.nodes[i$$15][j$$15 - 1].value - this.scoreSet.endGap
          }else {
            b = this.nodes[i$$15][j$$15 - 1].value - this.scoreSet.gap
          }
        }else {
          if(j$$15 == this.nodes[0].length - 1) {
            if(this.scoreSet.useEndGapRight) {
              a = this.nodes[i$$15 - 1][j$$15].value - this.scoreSet.endGap
            }else {
              a = this.nodes[i$$15 - 1][j$$15].value - this.scoreSet.gap
            }
            b = this.nodes[i$$15][j$$15 - 1].value - this.scoreSet.gap
          }else {
            a = this.nodes[i$$15 - 1][j$$15].value - this.scoreSet.gap;
            b = this.nodes[i$$15][j$$15 - 1].value - this.scoreSet.gap
          }
        }
      }
      var v516 = this.nodes[i$$15 - 1][j$$15 - 1].value;
      var v963 = this.scoreSet;
      c = v516 + JAM.call(v963.getScore, v963, [this.M[i$$15 - 1], this.N[j$$15 - 1]], JAM.policy.p37);
      var v966 = a >= b;
      if(v966) {
        v966 = a >= c
      }
      if(v966) {
        this.nodes[i$$15][j$$15].value = a;
        this.nodes[i$$15][j$$15].tracebackI = i$$15 - 1;
        this.nodes[i$$15][j$$15].tracebackJ = j$$15
      }else {
        var v970 = b >= c;
        if(v970) {
          v970 = b >= a
        }
        if(v970) {
          this.nodes[i$$15][j$$15].value = b;
          this.nodes[i$$15][j$$15].tracebackI = i$$15;
          this.nodes[i$$15][j$$15].tracebackJ = j$$15 - 1
        }else {
          this.nodes[i$$15][j$$15].value = c;
          this.nodes[i$$15][j$$15].tracebackI = i$$15 - 1;
          this.nodes[i$$15][j$$15].tracebackJ = j$$15 - 1
        }
      }
      j$$15 = j$$15 + 1;
      v529 = j$$15 < this.nodes[0].length
    }
    i$$15 = i$$15 + 1;
    v530 = i$$15 < this.nodes.length
  }
  this.score = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1].value;
  return
}
function alignQuad() {
  var v1632 = new Array;
  this.alignedM = v1632;
  var v1633 = new Array;
  this.alignedN = v1633;
  var currentI = this.nodes.length - 1;
  var currentJ = this.nodes[0].length - 1;
  var currentNode = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1];
  var v986 = currentNode.tracebackI != undefined;
  if(v986) {
    v986 = currentNode.tracebackJ != undefined
  }
  var v550 = v986;
  for(;v550;) {
    var v987 = currentNode.tracebackI == currentI - 1;
    if(v987) {
      v987 = currentNode.tracebackJ == currentJ - 1
    }
    if(v987) {
      var v536 = this.alignedM;
      var v988 = this.M;
      JAM.call(v536.push, v536, [JAM.call(v988.pop, v988, [], JAM.policy.p26)], JAM.policy.p36);
      var v538 = this.alignedN;
      var v989 = this.N;
      JAM.call(v538.push, v538, [JAM.call(v989.pop, v989, [], JAM.policy.p26)], JAM.policy.p36)
    }else {
      if(currentNode.tracebackJ == currentJ - 1) {
        var v540 = this.alignedM;
        JAM.call(v540.push, v540, ["-"], JAM.policy.p27);
        var v541 = this.alignedN;
        var v992 = this.N;
        JAM.call(v541.push, v541, [JAM.call(v992.pop, v992, [], JAM.policy.p26)], JAM.policy.p36)
      }else {
        var v543 = this.alignedM;
        var v993 = this.M;
        JAM.call(v543.push, v543, [JAM.call(v993.pop, v993, [], JAM.policy.p26)], JAM.policy.p36);
        var v545 = this.alignedN;
        JAM.call(v545.push, v545, ["-"], JAM.policy.p27)
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    currentNode = this.nodes[currentNode.tracebackI][currentNode.tracebackJ];
    var v996 = currentNode.tracebackI != undefined;
    if(v996) {
      v996 = currentNode.tracebackJ != undefined
    }
    v550 = v996
  }
  var v551 = this.alignedM;
  var v1634 = JAM.call(v551.reverse, v551, [], JAM.policy.p26);
  this.alignedM = v1634;
  var v552 = this.alignedN;
  var v1635 = JAM.call(v552.reverse, v552, [], JAM.policy.p26);
  this.alignedN = v1635;
  return
}
function getAlignedM() {
  var v553 = this.alignedM;
  return JAM.call(v553.join, v553, [""], JAM.policy.p27)
}
function getAlignedN() {
  var v554 = this.alignedN;
  return JAM.call(v554.join, v554, [""], JAM.policy.p27)
}
function AlignPairQuad() {
  return
}
new ScoreSet;
ScoreSet.prototype.getScore = getScore;
ScoreSet.prototype.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
ScoringMatrix.prototype.scoringMatrix_getScore = scoringMatrix_getScore;
ScoringMatrix.prototype.scoringMatrix_fillHash = scoringMatrix_fillHash;
var v559 = Blosum62;
var v1636 = new ScoringMatrix;
v559.prototype = v1636;
var v560 = Blosum45;
var v1637 = new ScoringMatrix;
v560.prototype = v1637;
var v561 = Blosum80;
var v1638 = new ScoringMatrix;
v561.prototype = v1638;
var v562 = Pam70;
var v1639 = new ScoringMatrix;
v562.prototype = v1639;
var v563 = Pam30;
var v1640 = new ScoringMatrix;
v563.prototype = v1640;
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
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p27), "onclick", v4)
