// sms2-rest-digest.js
function v4() {
  document.forms[0].elements[0].value = " ";
  return
}
function v3() {
  try {
    restDigest(document)
  }catch(e$$5) {
    alert("The following error was encountered: " + e$$5)
  }
  return
}
function v2() {
  var v7 = document.main_form.main_submit;
  JAM.call(v7.focus, v7, [], JAM.policy.p9);
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
  var v11 = i$$1 < arrayOfTitles.length;
  for(;v11;) {
    var v743 = arrayOfTitles[i$$1];
    var v365 = JAM.call(v743.search, v743, [/\S/], JAM.policy.p9) == -1;
    if(!v365) {
      var v814 = arrayOfSequences[i$$1];
      var v619 = JAM.call(v814.search, v814, [/\S/], JAM.policy.p9) == -1;
      if(!v619) {
        v619 = arrayOfSequences[i$$1].length != lengthOfAlign
      }
      v365 = v619
    }
    if(v365) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v11 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v367 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p9) == -1;
  if(!v367) {
    var v622 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p9) == -1;
    if(!v622) {
      var v748 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p9) == -1;
      if(!v748) {
        var v817 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p9) == -1;
        if(!v817) {
          v817 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p9) == -1
        }
        v748 = v817
      }
      v622 = v748
    }
    v367 = v622
  }
  if(v367) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v624 = formElement.value;
  if(JAM.call(v624.search, v624, [/\S/], JAM.policy.p9) == -1) {
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
  var v16 = z$$2 < arrayOfPatterns.length;
  for(;v16;) {
    var v625 = arrayOfPatterns[z$$2];
    if(JAM.call(v625.search, v625, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p9) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    if(moreExpressionCheck(arrayOfPatterns[z$$2]) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    v16 = z$$2 < arrayOfPatterns.length
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v25 = j < arrayOfPatterns.length;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    var v750 = arrayOfPatterns[j];
    var v374 = JAM.call(v750.match, v750, [/\/.+\//], JAM.policy.p9) + "gi";
    if(JAM.isEval(eval)) {
      var v992 = eval("introspect(JAM.policy.pFull) { " + v374 + " }")
    }else {
      var v992 = JAM.call(eval, null, [v374])
    }
    v19[v20] = v992;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    var v628 = arrayOfPatterns[j];
    var v375 = JAM.call(v628.match, v628, [/=[a-zA-Z\*]/], JAM.policy.p9);
    var v993 = JAM.call(v375.toString, v375, [], JAM.policy.p9);
    v21[v22] = v993;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    var v376 = geneticCodeMatchResult[j];
    var v994 = JAM.call(v376.replace, v376, [/=/g, ""], JAM.policy.p9);
    v23[v24] = v994;
    j = j + 1;
    v25 = j < arrayOfPatterns.length
  }
  var i$$2 = 0;
  var v32 = i$$2 <= testSequence.length - 3;
  for(;v32;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p9);
    j = 0;
    var v30 = j < geneticCodeMatchExp.length;
    for(;v30;) {
      if(JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p9) != -1) {
        if(oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      v30 = j < geneticCodeMatchExp.length
    }
    if(oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v32 = i$$2 <= testSequence.length - 3
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v34 = z$$3 < arrayOfPatterns$$1.length;
  for(;v34;) {
    var v632 = arrayOfPatterns$$1[z$$3];
    if(JAM.call(v632.search, v632, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p9) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    v34 = z$$3 < arrayOfPatterns$$1.length
  }
  var i$$3 = 0;
  var v38 = i$$3 < arrayOfPatterns$$1.length;
  for(;v38;) {
    var re = new RegExp("[" + arrayOfPatterns$$1[i$$3] + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v37 = j$$1 < arrayOfPatterns$$1.length;
    for(;v37;) {
      var v634 = arrayOfPatterns$$1[j$$1];
      if(JAM.call(v634.search, v634, [re], JAM.policy.p9) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      v37 = j$$1 < arrayOfPatterns$$1.length
    }
    i$$3 = i$$3 + 1;
    v38 = i$$3 < arrayOfPatterns$$1.length
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v41 = z$$4 < arrayOfPatterns$$2.length;
  for(;v41;) {
    var v635 = arrayOfPatterns$$2[z$$4];
    if(JAM.call(v635.search, v635, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p9) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    if(moreExpressionCheck(arrayOfPatterns$$2[z$$4]) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    v41 = z$$4 < arrayOfPatterns$$2.length
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v751 = getSequenceFromFasta(text$$7);
  if(JAM.call(v751.replace, v751, [/[^A-Za-z]/g, ""], JAM.policy.p9).length > maxInput) {
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
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</form>"], JAM.policy.p9);
  return true
}
function closePre() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</div>"], JAM.policy.p9);
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</pre>\n"], JAM.policy.p9);
  return
}
function closeTextArea() {
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</textarea>"], JAM.policy.p9);
  return true
}
function closeWindow() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</body>\n</html>\n"], JAM.policy.p9);
  outputWindow.status = "Done.";
  var v51 = outputWindow.document;
  JAM.call(v51.close, v51, [], JAM.policy.p9);
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
  var v54 = i$$4 < alignArray.length;
  for(;v54;) {
    var v638 = alignArray[i$$4];
    if(JAM.call(v638.search, v638, [/[^\s]+\s/], JAM.policy.p9) == -1) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    v54 = i$$4 < alignArray.length
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
    var v56 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p9);
    for(;v56;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p9);
      v56 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p9)
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
  var v74 = j$$2 < arrayOfPatterns$$3.length;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    var v752 = arrayOfPatterns$$3[j$$2];
    var v423 = JAM.call(v752.match, v752, [/\/.+\//], JAM.policy.p9) + "gi";
    if(JAM.isEval(eval)) {
      var v995 = eval("introspect(JAM.policy.pFull) { " + v423 + " }")
    }else {
      var v995 = JAM.call(eval, null, [v423])
    }
    v72[v73] = v995;
    j$$2 = j$$2 + 1;
    v74 = j$$2 < arrayOfPatterns$$3.length
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v80 = j$$3 < arrayOfPatterns$$4.length;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    var v640 = arrayOfPatterns$$4[j$$3];
    var v426 = JAM.call(v640.match, v640, [/=[a-zA-Z\*]/], JAM.policy.p9);
    var v996 = JAM.call(v426.toString, v426, [], JAM.policy.p9);
    v76[v77] = v996;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    var v427 = geneticCodeMatchResult$$1[j$$3];
    var v997 = JAM.call(v427.replace, v427, [/=/g, ""], JAM.policy.p9);
    v78[v79] = v997;
    j$$3 = j$$3 + 1;
    v80 = j$$3 < arrayOfPatterns$$4.length
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
  var v101 = j$$4 < lengthOut;
  for(;v101;) {
    tempNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p9) * components.length], JAM.policy.p9);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p9);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
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
    var v103 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p9);
    fastaTitle = JAM.call(v103.toString, v103, [], JAM.policy.p9);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p9);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p9);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p9)
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v455 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p9) != -1;
  if(!v455) {
    var v643 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p9) != -1;
    if(!v643) {
      var v754 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p9) != -1;
      if(!v754) {
        var v820 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p9) != -1;
        if(!v820) {
          var v871 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p9) != -1;
          if(!v871) {
            var v898 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p9) != -1;
            if(!v898) {
              var v923 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p9) != -1;
              if(!v923) {
                var v936 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p9) != -1;
                if(!v936) {
                  var v947 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p9) != -1;
                  if(!v947) {
                    var v957 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p9) != -1;
                    if(!v957) {
                      v957 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p9) != -1
                    }
                    v947 = v957
                  }
                  v936 = v947
                }
                v923 = v936
              }
              v898 = v923
            }
            v871 = v898
          }
          v820 = v871
        }
        v754 = v820
      }
      v643 = v754
    }
    v455 = v643
  }
  if(v455) {
    return false
  }
  return true
}
function openForm() {
  var v106 = outputWindow.document;
  JAM.call(v106.write, v106, ['<form action="">\n'], JAM.policy.p9);
  return true
}
function openPre() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ["<pre>"], JAM.policy.p9);
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ['<div class="pre">'], JAM.policy.p9);
  return
}
function openTextArea() {
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p9);
  return true
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p10);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p9);
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p9);
  if(isColor) {
    var v112 = outputWindow.document;
    JAM.call(v112.write, v112, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p9)
  }else {
    var v114 = outputWindow.document;
    JAM.call(v114.write, v114, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p9)
  }
  var v116 = outputWindow.document;
  JAM.call(v116.write, v116, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$7 + " results</div>\n"], JAM.policy.p9);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p10);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p9);
  var v118 = outputWindow.document;
  JAM.call(v118.write, v118, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p9);
  if(isBackground) {
    var v120 = outputWindow.document;
    JAM.call(v120.write, v120, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p9)
  }else {
    var v122 = outputWindow.document;
    JAM.call(v122.write, v122, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p9)
  }
  var v124 = outputWindow.document;
  JAM.call(v124.write, v124, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$9 + " results</div>\n"], JAM.policy.p9);
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
  var v127 = j$$5 < lengthOfColumn;
  for(;v127;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v127 = j$$5 < lengthOfColumn
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
  var v470 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p9) == -1;
  if(!v470) {
    var v654 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p9) == -1;
    if(!v654) {
      var v765 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p9) == -1;
      if(!v765) {
        v765 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p9) == -1
      }
      v654 = v765
    }
    v470 = v654
  }
  if(v470) {
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
  var v475 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p9) == -1;
  if(!v475) {
    var v657 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p9) == -1;
    if(!v657) {
      var v768 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p9) == -1;
      if(!v768) {
        v768 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p9) == -1
      }
      v657 = v768
    }
    v475 = v657
  }
  if(v475) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v476 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p9) == -1;
  if(!v476) {
    var v660 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p9) == -1;
    if(!v660) {
      var v771 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p9) == -1;
      if(!v771) {
        v771 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p9) == -1
      }
      v660 = v771
    }
    v476 = v660
  }
  if(v476) {
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
  var v478 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p9) == -1;
  if(!v478) {
    var v663 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p9) == -1;
    if(!v663) {
      var v774 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p9) == -1;
      if(!v774) {
        v774 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p9) == -1
      }
      v663 = v774
    }
    v478 = v663
  }
  if(v478) {
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
  var v155 = i$$5 < stopBase;
  for(;v155;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v152 = j$$6 <= basePerLine / groupSize;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p9);
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v152 = j$$6 <= basePerLine / groupSize
    }
    var v153 = outputWindow.document;
    JAM.call(v153.write, v153, [lineOfText + "\n"], JAM.policy.p9);
    lineOfText = "";
    v155 = i$$5 < stopBase
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
    var v483 = adjustment < 0;
    if(v483) {
      v483 = adjusted >= 0
    }
    if(v483) {
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
  var v189 = i$$6 < stopBase$$2;
  for(;v189;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v165 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for(;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        if(i$$6 + k$$1 >= stopBase$$2) {
          break
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p9);
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
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
      v165 = j$$7 <= basePerLine$$2 / groupSize$$2
    }
    if(numberPosition$$1 == "left") {
      var v166 = outputWindow.document;
      JAM.call(v166.write, v166, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p9);
      if(strands$$1 == "two") {
        var v168 = outputWindow.document;
        JAM.call(v168.write, v168, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p9);
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, ["\n"], JAM.policy.p9)
      }
    }else {
      if(numberPosition$$1 == "right") {
        var v172 = outputWindow.document;
        JAM.call(v172.write, v172, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p9);
        if(strands$$1 == "two") {
          var v174 = outputWindow.document;
          JAM.call(v174.write, v174, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p9);
          var v176 = outputWindow.document;
          JAM.call(v176.write, v176, ["\n"], JAM.policy.p9)
        }
      }else {
        if(numberPosition$$1 == "above") {
          var v178 = outputWindow.document;
          JAM.call(v178.write, v178, [aboveNum + "\n"], JAM.policy.p9);
          var v180 = outputWindow.document;
          JAM.call(v180.write, v180, [lineOfText$$1 + "\n"], JAM.policy.p9);
          if(strands$$1 == "two") {
            var v182 = outputWindow.document;
            JAM.call(v182.write, v182, [complement(lineOfText$$1) + "\n"], JAM.policy.p9);
            var v184 = outputWindow.document;
            JAM.call(v184.write, v184, ["\n"], JAM.policy.p9)
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v189 = i$$6 < stopBase$$2
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
  var v210 = i$$7 < stopBase$$3;
  for(;v210;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v198 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for(;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for(;v193;) {
        if(i$$7 + k$$2 >= stopBase$$3) {
          break
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p9);
        k$$2 = k$$2 + 1;
        v193 = k$$2 < groupSize$$3
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
      v198 = j$$8 <= basePerLine$$3 / groupSize$$3
    }
    if(numberPosition$$2 == "left") {
      var v199 = outputWindow.document;
      JAM.call(v199.write, v199, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p9)
    }else {
      if(numberPosition$$2 == "right") {
        var v201 = outputWindow.document;
        JAM.call(v201.write, v201, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p9)
      }else {
        if(numberPosition$$2 == "above") {
          var v203 = outputWindow.document;
          JAM.call(v203.write, v203, [aboveNum$$1 + "\n"], JAM.policy.p9);
          var v205 = outputWindow.document;
          JAM.call(v205.write, v205, [lineOfText$$2 + "\n"], JAM.policy.p9)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v210 = i$$7 < stopBase$$3
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
  var v500 = sequence$$13.length <= firstIndexToMutate;
  if(!v500) {
    var v674 = lastIndexToMutate < 0;
    if(!v674) {
      v674 = lastIndexToMutate <= firstIndexToMutate
    }
    v500 = v674
  }
  if(v500) {
    numMut = 0
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for(;v219;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p9) * maxNum], JAM.policy.p9);
    var v502 = randNum < firstIndexToMutate;
    if(!v502) {
      v502 = randNum > lastIndexToMutate
    }
    if(v502) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
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
    v219 = i$$8 < numMut
  }
  var v220 = outputWindow.document;
  JAM.call(v220.write, v220, [addReturns(sequence$$13)], JAM.policy.p9);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v226 = j$$9 < lengthOut$$1;
  for(;v226;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p9) * components$$2.length], JAM.policy.p9);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if(sequence$$14.length == 60) {
      var v223 = outputWindow.document;
      JAM.call(v223.write, v223, [sequence$$14 + "\n"], JAM.policy.p9);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v226 = j$$9 < lengthOut$$1
  }
  var v227 = outputWindow.document;
  JAM.call(v227.write, v227, [sequence$$14 + "\n"], JAM.policy.p9);
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
  var v233 = outputWindow.document;
  JAM.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v234 = outputWindow.document;
  JAM.call(v234.write, v234, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p9);
  var i$$9 = 0;
  var v251 = i$$9 < arrayOfItems.length;
  for(;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v517 = arrayOfItems[i$$9];
    matchExp = JAM.call(v517.match, v517, [/\/.+\//], JAM.policy.p9) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    var v781 = arrayOfItems[i$$9];
    var v680 = JAM.call(v781.match, v781, [/\)\D*\d+/], JAM.policy.p9);
    var v518 = JAM.call(v680.toString, v680, [], JAM.policy.p9);
    cutDistance = parseFloat(JAM.call(v518.replace, v518, [/\)\D*/, ""], JAM.policy.p9));
    var v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p9);
    for(;v243;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v519 = matchPosition >= lowerLimit;
      if(v519) {
        v519 = matchPosition < upperLimit
      }
      if(v519) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1)
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p9)
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
    var v249 = outputWindow.document;
    var v904 = '<tr><td class="' + backGroundClass + '">';
    var v953 = arrayOfItems[i$$9];
    var v942 = JAM.call(v953.match, v953, [/\([^\(]+\)/], JAM.policy.p9);
    var v930 = JAM.call(v942.toString, v942, [], JAM.policy.p9);
    JAM.call(v249.write, v249, [v904 + JAM.call(v930.replace, v930, [/\(|\)/g, ""], JAM.policy.p9) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p9);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v251 = i$$9 < arrayOfItems.length
  }
  var v252 = outputWindow.document;
  JAM.call(v252.write, v252, ["</tbody></table>\n"], JAM.policy.p9);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v253 = outputWindow.document;
  JAM.call(v253.write, v253, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p9);
  var i$$10 = 0;
  var v264 = i$$10 < arrayOfItems$$1.length;
  for(;v264;) {
    var tempNumber = 0;
    var v528 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v528.match, v528, [/\/[^\/]+\//], JAM.policy.p9) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p9) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p9).length
    }
    var percentage = 0;
    var v684 = originalLength + 1;
    var v840 = arrayOfItems$$1[i$$10];
    if(v684 - parseFloat(JAM.call(v840.match, v840, [/\d+/], JAM.policy.p9)) > 0) {
      var v259 = 100 * tempNumber;
      var v531 = originalLength + 1;
      var v785 = arrayOfItems$$1[i$$10];
      percentage = v259 / (v531 - parseFloat(JAM.call(v785.match, v785, [/\d+/], JAM.policy.p9)))
    }
    var v262 = outputWindow.document;
    var v954 = arrayOfItems$$1[i$$10];
    var v943 = JAM.call(v954.match, v954, [/\([^\(]+\)\b/], JAM.policy.p9);
    var v931 = JAM.call(v943.toString, v943, [], JAM.policy.p9);
    JAM.call(v262.write, v262, ["<tr><td>" + JAM.call(v931.replace, v931, [/\(|\)/g, ""], JAM.policy.p9) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9) + "</td></tr>\n"], JAM.policy.p9);
    i$$10 = i$$10 + 1;
    v264 = i$$10 < arrayOfItems$$1.length
  }
  var v265 = outputWindow.document;
  JAM.call(v265.write, v265, ["</tbody></table>\n"], JAM.policy.p9);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v272 = sequence$$17.length > 0;
  for(;v272;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p9) * maxNum$$1], JAM.policy.p9);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p9);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p9);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p9);
    sequence$$17 = tempString1 + tempString2;
    if(tempSeq.length == 60) {
      var v269 = outputWindow.document;
      JAM.call(v269.write, v269, [tempSeq + "\n"], JAM.policy.p9);
      tempSeq = ""
    }
    v272 = sequence$$17.length > 0
  }
  var v273 = outputWindow.document;
  JAM.call(v273.write, v273, [tempSeq + "\n"], JAM.policy.p9);
  return true
}
function restDigest(theDocument) {
  var newDna = "";
  var maxInput$$3 = 1E5;
  if(testScript() == false) {
    return false
  }
  var restrictionFragments = new Array;
  var restrictionFragment;
  var v540 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v540) {
    v540 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false
  }
  if(v540) {
    return false
  }
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  var i$$11 = 0;
  var v283 = i$$11 < arrayOfFasta$$1.length;
  for(;v283;) {
    newDna = getSequenceFromFasta(arrayOfFasta$$1[i$$11]);
    title = getTitleFromFasta(arrayOfFasta$$1[i$$11]);
    newDna = removeNonDna(newDna);
    restrictionFragment = new RestrictionFragment(theDocument.forms[0].elements[4].options[theDocument.forms[0].elements[4].selectedIndex].value, title, newDna, 1, newDna.length, "sequence start", "sequence end", newDna.length);
    JAM.call(restrictionFragments.push, restrictionFragments, [restrictionFragment], JAM.policy.p9);
    i$$11 = i$$11 + 1;
    v283 = i$$11 < arrayOfFasta$$1.length
  }
  restrictionFragments = digest(restrictionFragments, theDocument.forms[0].elements[5].options[theDocument.forms[0].elements[5].selectedIndex].value);
  restrictionFragments = digest(restrictionFragments, theDocument.forms[0].elements[6].options[theDocument.forms[0].elements[6].selectedIndex].value);
  restrictionFragments = digest(restrictionFragments, theDocument.forms[0].elements[7].options[theDocument.forms[0].elements[7].selectedIndex].value);
  JAM.call(restrictionFragments.sort, restrictionFragments, [restrictionFragmentSorter], JAM.policy.p9);
  openWindow("Restriction Digest");
  openPre();
  i$$11 = 0;
  var v290 = i$$11 < restrictionFragments.length;
  for(;v290;) {
    var v287 = restrictionFragments[i$$11];
    JAM.call(v287.correctPositions, v287, [], JAM.policy.p9);
    var v288 = restrictionFragments[i$$11];
    JAM.call(v288.writeFragment, v288, [theDocument.forms[0].elements[4].options[theDocument.forms[0].elements[4].selectedIndex].value], JAM.policy.p9);
    i$$11 = i$$11 + 1;
    v290 = i$$11 < restrictionFragments.length
  }
  closePre();
  closeWindow();
  return true
}
function digest(arrayOfRestrictionFragments, enzyme) {
  if(enzyme == "") {
    return arrayOfRestrictionFragments
  }
  var newFragments = new Array;
  var positions = new Array;
  var matchPosition$$1 = 0;
  var v292 = JAM.call(enzyme.match, enzyme, [/\/.+\//], JAM.policy.p9);
  var matchExp$$2 = JAM.call(v292.toString, v292, [], JAM.policy.p9);
  matchExp$$2 = JAM.call(matchExp$$2.replace, matchExp$$2, [/\//g, ""], JAM.policy.p9);
  matchExp$$2 = new RegExp(matchExp$$2, "gi");
  var v703 = JAM.call(enzyme.match, enzyme, [/\)\D*\d+/], JAM.policy.p9);
  var v551 = JAM.call(v703.toString, v703, [], JAM.policy.p9);
  var cutDistance$$1 = parseInt(JAM.call(v551.replace, v551, [/\)\D*/, ""], JAM.policy.p9));
  var v552 = JAM.call(enzyme.match, enzyme, [/\([^\(]+\)/], JAM.policy.p9);
  var v294 = JAM.call(v552.toString, v552, [], JAM.policy.p9);
  var enzymeName = JAM.call(v294.replace, v294, [/\(|\)/g, ""], JAM.policy.p9);
  var matchArray$$2;
  var wasCut = false;
  var restrictionFragmentOne;
  var restrictionFragmentTwo;
  var previousCutPosition;
  var previousEnzyme;
  var previousStartPosition;
  var startRestrictionFragment;
  var lookAhead$$1 = 50;
  var lowerLimit$$1;
  var upperLimit$$1;
  var shiftValue$$1;
  var i$$12 = 0;
  var v337 = i$$12 < arrayOfRestrictionFragments.length;
  for(;v337;) {
    if(arrayOfRestrictionFragments[i$$12].topology == "circular") {
      var v555 = arrayOfRestrictionFragments[i$$12].sequence;
      shiftValue$$1 = JAM.call(v555.substring, v555, [0, lookAhead$$1], JAM.policy.p9).length;
      var v706 = arrayOfRestrictionFragments[i$$12].sequence;
      var v296 = JAM.call(v706.substring, v706, [arrayOfRestrictionFragments[i$$12].sequence.length - lookAhead$$1, arrayOfRestrictionFragments[i$$12].sequence.length], JAM.policy.p9) + arrayOfRestrictionFragments[i$$12].sequence;
      var v558 = arrayOfRestrictionFragments[i$$12].sequence;
      var extendedSequence = v296 + JAM.call(v558.substring, v558, [0, lookAhead$$1], JAM.policy.p9);
      lowerLimit$$1 = 0 + shiftValue$$1;
      upperLimit$$1 = arrayOfRestrictionFragments[i$$12].sequence.length + shiftValue$$1;
      var v302 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [extendedSequence], JAM.policy.p9);
      for(;v302;) {
        matchPosition$$1 = matchExp$$2.lastIndex;
        matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
        var v560 = matchPosition$$1 >= lowerLimit$$1;
        if(v560) {
          v560 = matchPosition$$1 < upperLimit$$1
        }
        if(v560) {
          JAM.call(positions.push, positions, [matchPosition$$1 - shiftValue$$1], JAM.policy.p9);
          wasCut = true
        }
        matchExp$$2.lastIndex = matchExp$$2.lastIndex - RegExp.lastMatch.length + 1;
        v302 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [extendedSequence], JAM.policy.p9)
      }
    }else {
      var v304 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [arrayOfRestrictionFragments[i$$12].sequence], JAM.policy.p9);
      for(;v304;) {
        matchPosition$$1 = matchExp$$2.lastIndex;
        matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
        JAM.call(positions.push, positions, [matchPosition$$1], JAM.policy.p9);
        wasCut = true;
        matchExp$$2.lastIndex = matchExp$$2.lastIndex - RegExp.lastMatch.length + 1;
        v304 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [arrayOfRestrictionFragments[i$$12].sequence], JAM.policy.p9)
      }
    }
    if(!wasCut) {
      JAM.call(newFragments.push, newFragments, [arrayOfRestrictionFragments[i$$12]], JAM.policy.p9)
    }else {
      wasCut = false;
      previousCutPosition = 0;
      previousEnzyme = arrayOfRestrictionFragments[i$$12].startEnzyme;
      previousStartPosition = arrayOfRestrictionFragments[i$$12].start;
      var j$$10 = 0;
      var v335 = j$$10 < positions.length;
      for(;v335;) {
        if(arrayOfRestrictionFragments[i$$12].topology == "circular") {
          arrayOfRestrictionFragments[i$$12].topology = "linear";
          var v310 = arrayOfRestrictionFragments[i$$12].sourceName;
          var v570 = arrayOfRestrictionFragments[i$$12].sequence;
          var v311 = JAM.call(v570.substring, v570, [previousCutPosition, positions[j$$10]], JAM.policy.p9);
          var v718 = previousStartPosition;
          var v857 = arrayOfRestrictionFragments[i$$12].sequence;
          startRestrictionFragment = new RestrictionFragment("linear", v310, v311, previousStartPosition, v718 + JAM.call(v857.substring, v857, [previousCutPosition, positions[j$$10]], JAM.policy.p9).length - 1, previousEnzyme, enzymeName, arrayOfRestrictionFragments[i$$12].originalLength)
        }else {
          var v314 = arrayOfRestrictionFragments[i$$12].sourceName;
          var v575 = arrayOfRestrictionFragments[i$$12].sequence;
          var v315 = JAM.call(v575.substring, v575, [previousCutPosition, positions[j$$10]], JAM.policy.p9);
          var v721 = previousStartPosition;
          var v859 = arrayOfRestrictionFragments[i$$12].sequence;
          restrictionFragmentOne = new RestrictionFragment("linear", v314, v315, previousStartPosition, v721 + JAM.call(v859.substring, v859, [previousCutPosition, positions[j$$10]], JAM.policy.p9).length - 1, previousEnzyme, enzymeName, arrayOfRestrictionFragments[i$$12].originalLength);
          JAM.call(newFragments.push, newFragments, [restrictionFragmentOne], JAM.policy.p9)
        }
        if(j$$10 == positions.length - 1) {
          if(startRestrictionFragment == null) {
            var v319 = arrayOfRestrictionFragments[i$$12].sourceName;
            var v581 = arrayOfRestrictionFragments[i$$12].sequence;
            var v320 = JAM.call(v581.substring, v581, [positions[j$$10], arrayOfRestrictionFragments[i$$12].sequence.length], JAM.policy.p9);
            var v584 = previousStartPosition;
            var v806 = arrayOfRestrictionFragments[i$$12].sequence;
            restrictionFragmentTwo = new RestrictionFragment("linear", v319, v320, v584 + JAM.call(v806.substring, v806, [previousCutPosition, positions[j$$10]], JAM.policy.p9).length, arrayOfRestrictionFragments[i$$12].stop, enzymeName, arrayOfRestrictionFragments[i$$12].stopEnzyme, arrayOfRestrictionFragments[i$$12].originalLength);
            JAM.call(newFragments.push, newFragments, [restrictionFragmentTwo], JAM.policy.p9)
          }else {
            var v325 = arrayOfRestrictionFragments[i$$12].sourceName;
            var v727 = arrayOfRestrictionFragments[i$$12].sequence;
            var v326 = JAM.call(v727.substring, v727, [positions[j$$10], arrayOfRestrictionFragments[i$$12].sequence.length], JAM.policy.p9) + startRestrictionFragment.sequence;
            var v592 = previousStartPosition;
            var v810 = arrayOfRestrictionFragments[i$$12].sequence;
            restrictionFragmentTwo = new RestrictionFragment("linear", v325, v326, v592 + JAM.call(v810.substring, v810, [previousCutPosition, positions[j$$10]], JAM.policy.p9).length, startRestrictionFragment.stop, enzymeName, startRestrictionFragment.stopEnzyme, arrayOfRestrictionFragments[i$$12].originalLength);
            JAM.call(newFragments.push, newFragments, [restrictionFragmentTwo], JAM.policy.p9)
          }
        }
        previousCutPosition = positions[j$$10];
        previousEnzyme = enzymeName;
        previousStartPosition = arrayOfRestrictionFragments[i$$12].start + positions[j$$10];
        j$$10 = j$$10 + 1;
        v335 = j$$10 < positions.length
      }
    }
    positions = new Array;
    startRestrictionFragment = null;
    i$$12 = i$$12 + 1;
    v337 = i$$12 < arrayOfRestrictionFragments.length
  }
  return newFragments
}
function restrictionFragmentSorter(a, b) {
  if(a.sequence.length < b.sequence.length) {
    return 1
  }
  if(a.sequence.length > b.sequence.length) {
    return-1
  }
  if(a.sequence.length == b.sequence.length) {
    if(a.start < b.start) {
      return-1
    }
    if(a.start > b.start) {
      return 1
    }else {
      return 0
    }
  }
  return
}
function writeFragment(topology$$1) {
  if(this.topology == "linear") {
    var v343 = outputWindow.document;
    JAM.call(v343.write, v343, ["&gt;" + this.sequence.length + " bp linear fragment from " + topology$$1 + " parent " + this.sourceName + ", base " + this.start + " to base " + this.stop + " (" + this.startEnzyme + " - " + this.stopEnzyme + ").\n"], JAM.policy.p9)
  }else {
    var v345 = outputWindow.document;
    JAM.call(v345.write, v345, ["&gt;" + this.sequence.length + " bp circular molecule from " + topology$$1 + " parent " + this.sourceName + ".\n"], JAM.policy.p9)
  }
  var v348 = outputWindow.document;
  JAM.call(v348.write, v348, [addReturns(this.sequence) + "\n\n"], JAM.policy.p9);
  return
}
function correctPositions() {
  if(this.start > this.originalLength) {
    this.start = this.start - this.originalLength
  }
  if(this.stop > this.originalLength) {
    this.stop = this.stop - this.originalLength
  }
  if(this.stop == 0) {
    this.stop = this.originalLength
  }
  return
}
function RestrictionFragment(topology$$2, sourceName, sequence$$18, start$$4, stop, startEnzyme, stopEnzyme, originalLength$$1) {
  this.topology = topology$$2;
  this.sourceName = sourceName;
  this.sequence = sequence$$18;
  this.start = start$$4;
  this.stop = stop;
  this.startEnzyme = startEnzyme;
  this.stopEnzyme = stopEnzyme;
  this.originalLength = originalLength$$1;
  return
}
new RestrictionFragment("", "", "", 0, 0, "", "", 0);
RestrictionFragment.prototype.writeFragment = writeFragment;
RestrictionFragment.prototype.correctPositions = correctPositions;
JAM.set(document, "onload", v2);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9), "onclick", v3);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9), "onclick", v4)
