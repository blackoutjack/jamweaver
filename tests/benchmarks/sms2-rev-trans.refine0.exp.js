// sms2-rev-trans.js
function v7() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return;
}
function v6() {
  try {
    revTrans(document);
  } catch (e$$6) {
    alert("The following error was encountered: " + e$$6);
  }
  return;
}
function v5() {
  document.main_form.main_submit.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p27);
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var lengthOfAlign = arrayOfSequences[0].length;
  if (arrayOfSequences.length < 2) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v15 = i$$1 < arrayOfTitles.length;
  for (;v15;) {
    introspect(JAM.policy.p26) {
      var v956 = arrayOfTitles[i$$1]
    }
    var v711 = JAM.call(v956.search, v956, [/\S/], JAM.policy.p29) == -1;
    if (!v711) {
      introspect(JAM.policy.p26) {
        var v957 = arrayOfSequences[i$$1]
      }
      v711 = JAM.call(v957.search, v957, [/\S/], JAM.policy.p29) == -1;
    }
    var v437 = v711;
    if (!v437) {
      introspect(JAM.policy.p26) {
        var v865 = arrayOfSequences[i$$1]
      }
      v437 = v865.length != lengthOfAlign;
    }
    if (v437) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1 = i$$1 + 1;
    v15 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v958 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p29) == -1;
  if (!v958) {
    v958 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p29) == -1;
  }
  var v866 = v958;
  if (!v866) {
    v866 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p29) == -1;
  }
  var v714 = v866;
  if (!v714) {
    v714 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p29) == -1;
  }
  var v439 = v714;
  if (!v439) {
    v439 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p29) == -1;
  }
  if (v439) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v717 = formElement.value;
  if (JAM.call(v717.search, v717, [/\S/], JAM.policy.p29) == -1) {
    alert("Please enter some text.");
    return false;
  }
  return true;
}
function checkGeneticCode(arrayOfPatterns) {
  var z$$2 = 0;
  var codon = "";
  var oneMatch = false;
  var testSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
  var v20 = z$$2 < arrayOfPatterns.length;
  for (;v20;) {
    introspect(JAM.policy.p26) {
      var v718 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(v718.search, v718, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p29) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    introspect(JAM.policy.p26) {
      var v719 = arrayOfPatterns[z$$2]
    }
    if (moreExpressionCheck(v719) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    v20 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v29 = j < arrayOfPatterns.length;
  for (;v29;) {
    var v23 = geneticCodeMatchExp;
    var v24 = j;
    introspect(JAM.policy.p26) {
      var v869 = arrayOfPatterns[j]
    }
    var v446 = JAM.call(v869.match, v869, [/\/.+\//], JAM.policy.p29) + "gi";
    if (JAM.isEval(eval)) {
      var v1130 = eval("introspect(JAM.policy.pFull) { " + v446 + " }")
    } else {
      var v1130 = JAM.call(eval, null, [v446])
    }
    introspect(JAM.policy.p13) {
      v23[v24] = v1130;
    }
    var v25 = geneticCodeMatchResult;
    var v26 = j;
    introspect(JAM.policy.p26) {
      var v721 = arrayOfPatterns[j]
    }
    var v1131 = JAM.call(v721.match, v721, [/=[a-zA-Z\*]/], JAM.policy.p29).toString();
    introspect(JAM.policy.p13) {
      v25[v26] = v1131;
    }
    var v27 = geneticCodeMatchResult;
    var v28 = j;
    introspect(JAM.policy.p26) {
      var v448 = geneticCodeMatchResult[j]
    }
    var v1132 = JAM.call(v448.replace, v448, [/=/g, ""], JAM.policy.p27);
    introspect(JAM.policy.p13) {
      v27[v28] = v1132;
    }
    j = j + 1;
    v29 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v36 = i$$2 <= testSequence.length - 3;
  for (;v36;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p27);
    j = 0;
    var v34 = j < geneticCodeMatchExp.length;
    for (;v34;) {
      introspect(JAM.policy.p26) {
        var v723 = geneticCodeMatchExp[j]
      }
      if (JAM.call(codon.search, codon, [v723], JAM.policy.p39) != -1) {
        if (oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      v34 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v36 = i$$2 <= testSequence.length - 3;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v38 = z$$3 < arrayOfPatterns$$1.length;
  for (;v38;) {
    introspect(JAM.policy.p26) {
      var v725 = arrayOfPatterns$$1[z$$3]
    }
    if (JAM.call(v725.search, v725, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p29) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    v38 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v42 = i$$3 < arrayOfPatterns$$1.length;
  for (;v42;) {
    introspect(JAM.policy.p26) {
      var v726 = arrayOfPatterns$$1[i$$3]
    }
    var re = new RegExp("[" + v726 + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v41 = j$$1 < arrayOfPatterns$$1.length;
    for (;v41;) {
      introspect(JAM.policy.p26) {
        var v727 = arrayOfPatterns$$1[j$$1]
      }
      if (JAM.call(v727.search, v727, [re], JAM.policy.p39) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1 = j$$1 + 1;
      v41 = j$$1 < arrayOfPatterns$$1.length;
    }
    i$$3 = i$$3 + 1;
    v42 = i$$3 < arrayOfPatterns$$1.length;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v45 = z$$4 < arrayOfPatterns$$2.length;
  for (;v45;) {
    introspect(JAM.policy.p26) {
      var v728 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(v728.search, v728, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p29) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    introspect(JAM.policy.p26) {
      var v729 = arrayOfPatterns$$2[z$$4]
    }
    if (moreExpressionCheck(v729) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    v45 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v870 = getSequenceFromFasta(text$$7);
  if (JAM.call(v870.replace, v870, [/[^A-Za-z]/g, ""], JAM.policy.p27).length > maxInput) {
    alert("Please enter a sequence consisting of less than or equal to " + maxInput + " characters.");
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  if (text$$8.length > maxInput$$1) {
    alert("Please enter text consisting of less than or equal to " + maxInput$$1 + " characters.");
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p27);
  return dnaSequence;
}
function closeForm() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</form>"], JAM.policy.p22);
  return true;
}
function closePre() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</div>"], JAM.policy.p22);
  var v52 = outputWindow.document;
  JAM.call(v52.write, v52, ["</pre>\n"], JAM.policy.p22);
  return;
}
function closeTextArea() {
  var v53 = outputWindow.document;
  JAM.call(v53.write, v53, ["</textarea>"], JAM.policy.p22);
  return true;
}
function closeWindow() {
  var v54 = outputWindow.document;
  JAM.call(v54.write, v54, ["</body>\n</html>\n"], JAM.policy.p22);
  outputWindow.status = "Done.";
  outputWindow.document.close();
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p27);
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  if (alignArray.length < 3) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v58 = i$$4 < alignArray.length;
  for (;v58;) {
    introspect(JAM.policy.p26) {
      var v731 = alignArray[i$$4]
    }
    if (JAM.call(v731.search, v731, [/[^\s]+\s/], JAM.policy.p29) == -1) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4 = i$$4 + 1;
    v58 = i$$4 < alignArray.length;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p27);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p27);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p27);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p27);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p27);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  if (JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p29) != -1) {
    var v60 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p39);
    for (;v60;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p39);
      v60 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p39);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var stringToReturn = "&gt;results for " + sequence$$2.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p29) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"';
  }
  stringToReturn = stringToReturn + ' starting "' + JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p24) + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p29) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p24) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p29) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p24) + '"';
  return'<div class="info">' + stringToReturn$$1 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = new Array(arrayOfPatterns$$3.length);
  var j$$2 = 0;
  var v78 = j$$2 < arrayOfPatterns$$3.length;
  for (;v78;) {
    var v76 = geneticCodeMatchExp$$1;
    var v77 = j$$2;
    introspect(JAM.policy.p26) {
      var v871 = arrayOfPatterns$$3[j$$2]
    }
    var v495 = JAM.call(v871.match, v871, [/\/.+\//], JAM.policy.p29) + "gi";
    if (JAM.isEval(eval)) {
      var v1133 = eval("introspect(JAM.policy.pFull) { " + v495 + " }")
    } else {
      var v1133 = JAM.call(eval, null, [v495])
    }
    introspect(JAM.policy.p13) {
      v76[v77] = v1133;
    }
    j$$2 = j$$2 + 1;
    v78 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v84 = j$$3 < arrayOfPatterns$$4.length;
  for (;v84;) {
    var v80 = geneticCodeMatchResult$$1;
    var v81 = j$$3;
    introspect(JAM.policy.p26) {
      var v733 = arrayOfPatterns$$4[j$$3]
    }
    var v1134 = JAM.call(v733.match, v733, [/=[a-zA-Z\*]/], JAM.policy.p29).toString();
    introspect(JAM.policy.p13) {
      v80[v81] = v1134;
    }
    var v82 = geneticCodeMatchResult$$1;
    var v83 = j$$3;
    introspect(JAM.policy.p26) {
      var v499 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1135 = JAM.call(v499.replace, v499, [/=/g, ""], JAM.policy.p27);
    introspect(JAM.policy.p13) {
      v82[v83] = v1135;
    }
    j$$3 = j$$3 + 1;
    v84 = j$$3 < arrayOfPatterns$$4.length;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p29) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"';
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p24) + '"';
  return'<div class="info">' + stringToReturn$$2 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p29) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"';
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p24) + '"';
  return'<div class="info">' + stringToReturn$$3 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p29) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p24) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p29) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleTwo$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p24) + '"';
  return'<div class="info">' + stringToReturn$$4 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v105 = j$$4 < lengthOut;
  for (;v105;) {
    tempNum = JAM.call(Math.floor, Math, [Math.random() * components.length], JAM.policy.p29);
    introspect(JAM.policy.p26) {
      tempChar = components[tempNum];
    }
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p39);
    j$$4 = j$$4 + 1;
    v105 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p22);
}
function getSequenceFromFasta(sequenceRecord) {
  if (JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p29) != -1) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p27);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if (JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p29) != -1) {
    fastaTitle = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p27).toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p27);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p27);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p27);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1088 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p29) != -1;
  if (!v1088) {
    v1088 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p29) != -1;
  }
  var v1077 = v1088;
  if (!v1077) {
    v1077 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p29) != -1;
  }
  var v1064 = v1077;
  if (!v1064) {
    v1064 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p29) != -1;
  }
  var v1048 = v1064;
  if (!v1048) {
    v1048 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p29) != -1;
  }
  var v1032 = v1048;
  if (!v1032) {
    v1032 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p29) != -1;
  }
  var v1015 = v1032;
  if (!v1015) {
    v1015 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p29) != -1;
  }
  var v961 = v1015;
  if (!v961) {
    v961 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p29) != -1;
  }
  var v872 = v961;
  if (!v872) {
    v872 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p29) != -1;
  }
  var v735 = v872;
  if (!v735) {
    v735 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p29) != -1;
  }
  var v527 = v735;
  if (!v527) {
    v527 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p29) != -1;
  }
  if (v527) {
    return false;
  }
  return true;
}
function openForm() {
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<form action="">\n'], JAM.policy.p22);
  return true;
}
function openPre() {
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ["<pre>"], JAM.policy.p22);
  var v112 = outputWindow.document;
  JAM.call(v112.write, v112, ['<div class="pre">'], JAM.policy.p22);
  return;
}
function openTextArea() {
  var v113 = outputWindow.document;
  JAM.call(v113.write, v113, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p22);
  return true;
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p25);
  outputWindow.focus();
  var v114 = outputWindow.document;
  JAM.call(v114.write, v114, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p39);
  if (isColor) {
    var v116 = outputWindow.document;
    JAM.call(v116.write, v116, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p39);
  } else {
    var v118 = outputWindow.document;
    JAM.call(v118.write, v118, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p39);
  }
  var v120 = outputWindow.document;
  JAM.call(v120.write, v120, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$7 + " results</div>\n"], JAM.policy.p39);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return;
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p25);
  outputWindow.focus();
  var v122 = outputWindow.document;
  JAM.call(v122.write, v122, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p39);
  if (isBackground) {
    var v124 = outputWindow.document;
    JAM.call(v124.write, v124, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p39);
  } else {
    var v126 = outputWindow.document;
    JAM.call(v126.write, v126, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p39);
  }
  var v128 = outputWindow.document;
  JAM.call(v128.write, v128, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$9 + " results</div>\n"], JAM.policy.p39);
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p27);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p27);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p27);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p27);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p27);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p27);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p27);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p27);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p27);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  if (JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p29) != -1) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p29);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p22);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v131 = j$$5 < lengthOfColumn;
  for (;v131;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v131 = j$$5 < lengthOfColumn;
  }
  theNumber = tempString + theNumber + " ";
  sequenceToAppend = sequenceToAppend + theNumber + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p39);
  if (testArray[0] != testString) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  if (JAM.call(testString.search, testString, [re$$2], JAM.policy.p39) == -1) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
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
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p27);
  if (testString != "1X2X3X") {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  if (JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p23) != 2489.824) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  if (JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p23) != 2489.8) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  if (JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p29) == -1) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v883 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p29) == -1;
  if (!v883) {
    v883 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p29) == -1;
  }
  var v746 = v883;
  if (!v746) {
    v746 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p29) == -1;
  }
  var v542 = v746;
  if (!v542) {
    v542 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p29) == -1;
  }
  if (v542) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if (JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p29) == -1) {
    alert("Please enter a number.");
    return false;
  }
  if (theNumber$$2 > maxInput$$2) {
    alert("Please enter a number less than or equal to " + maxInput$$2 + ".");
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  if (JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p29) != -1) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  if (JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p29) != -1) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v886 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p29) == -1;
  if (!v886) {
    v886 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p29) == -1;
  }
  var v749 = v886;
  if (!v749) {
    v749 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p29) == -1;
  }
  var v547 = v749;
  if (!v547) {
    v547 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p29) == -1;
  }
  if (v547) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v889 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p29) == -1;
  if (!v889) {
    v889 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p29) == -1;
  }
  var v752 = v889;
  if (!v752) {
    v752 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p29) == -1;
  }
  var v548 = v752;
  if (!v548) {
    v548 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p29) == -1;
  }
  if (v548) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  if (JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p29) == -1) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v892 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p29) == -1;
  if (!v892) {
    v892 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p29) == -1;
  }
  var v755 = v892;
  if (!v755) {
    v755 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p29) == -1;
  }
  var v550 = v755;
  if (!v550) {
    v550 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p29) == -1;
  }
  if (v550) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  if (JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p29) == -1) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function writeGroupNum(text$$10, tabIn$$1, groupSize, basePerLine, startBase, stopBase) {
  var i$$5 = parseInt(startBase);
  var k = 0;
  var lineOfText = "";
  var sepChar = " ";
  groupSize = parseInt(groupSize);
  basePerLine = parseInt(basePerLine);
  var v159 = i$$5 < stopBase;
  for (;v159;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v156 = j$$6 <= basePerLine / groupSize;
    for (;v156;) {
      var v155 = k < groupSize;
      for (;v155;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p39);
        k = k + 1;
        v155 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v156 = j$$6 <= basePerLine / groupSize;
    }
    var v157 = outputWindow.document;
    JAM.call(v157.write, v157, [lineOfText + "\n"], JAM.policy.p39);
    lineOfText = "";
    v159 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v555 = adjustment < 0;
    if (v555) {
      v555 = adjusted >= 0;
    }
    if (v555) {
      adjusted = adjusted + 1;
    }
    return adjusted;
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
  var v193 = i$$6 < stopBase$$2;
  for (;v193;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v169 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for (;v169;) {
      var v164 = k$$1 < groupSize$$2;
      for (;v164;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p39);
        k$$1 = k$$1 + 1;
        v164 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      if (numberPosition$$1 == "above") {
        aboveNum = aboveNum + rightNum(adjustNumbering(i$$6, numberingAdjustment), "", groupSize$$2, tabIn$$3);
      }
      if (i$$6 >= stopBase$$2) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      v169 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v170 = outputWindow.document;
      JAM.call(v170.write, v170, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p39);
      if (strands$$1 == "two") {
        var v172 = outputWindow.document;
        JAM.call(v172.write, v172, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p39);
        var v174 = outputWindow.document;
        JAM.call(v174.write, v174, ["\n"], JAM.policy.p22);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v176 = outputWindow.document;
        JAM.call(v176.write, v176, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p39);
        if (strands$$1 == "two") {
          var v178 = outputWindow.document;
          JAM.call(v178.write, v178, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p39);
          var v180 = outputWindow.document;
          JAM.call(v180.write, v180, ["\n"], JAM.policy.p22);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v182 = outputWindow.document;
          JAM.call(v182.write, v182, [aboveNum + "\n"], JAM.policy.p39);
          var v184 = outputWindow.document;
          JAM.call(v184.write, v184, [lineOfText$$1 + "\n"], JAM.policy.p39);
          if (strands$$1 == "two") {
            var v186 = outputWindow.document;
            JAM.call(v186.write, v186, [complement(lineOfText$$1) + "\n"], JAM.policy.p39);
            var v188 = outputWindow.document;
            JAM.call(v188.write, v188, ["\n"], JAM.policy.p22);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v193 = i$$6 < stopBase$$2;
  }
  return true;
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
  var v214 = i$$7 < stopBase$$3;
  for (;v214;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v202 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for (;v202;) {
      var v197 = k$$2 < groupSize$$3;
      for (;v197;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p39);
        k$$2 = k$$2 + 1;
        v197 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      if (numberPosition$$2 == "above") {
        aboveNum$$1 = aboveNum$$1 + rightNum(i$$7, "", groupSize$$3, tabIn$$4);
      }
      if (i$$7 >= stopBase$$3) {
        break;
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      v202 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v203 = outputWindow.document;
      JAM.call(v203.write, v203, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p39);
    } else {
      if (numberPosition$$2 == "right") {
        var v205 = outputWindow.document;
        JAM.call(v205.write, v205, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p39);
      } else {
        if (numberPosition$$2 == "above") {
          var v207 = outputWindow.document;
          JAM.call(v207.write, v207, [aboveNum$$1 + "\n"], JAM.policy.p39);
          var v209 = outputWindow.document;
          JAM.call(v209.write, v209, [lineOfText$$2 + "\n"], JAM.policy.p39);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v214 = i$$7 < stopBase$$3;
  }
  return true;
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
  var v766 = sequence$$13.length <= firstIndexToMutate;
  if (!v766) {
    v766 = lastIndexToMutate < 0;
  }
  var v572 = v766;
  if (!v572) {
    v572 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v572) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v223 = i$$8 < numMut;
  for (;v223;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [Math.random() * maxNum], JAM.policy.p29);
    var v574 = randNum < firstIndexToMutate;
    if (!v574) {
      v574 = randNum > lastIndexToMutate;
    }
    if (v574) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v223 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p29);
    needNewChar = true;
    for (;needNewChar;) {
      componentsIndex = JAM.call(Math.round, Math, [Math.random() * components$$1.length], JAM.policy.p29);
      if (componentsIndex == components$$1.length) {
        componentsIndex = 0;
      }
      introspect(JAM.policy.p26) {
        var v578 = components$$1[componentsIndex]
      }
      if (v578 != currentChar) {
        needNewChar = false;
      }
    }
    var v579 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p24);
    introspect(JAM.policy.p26) {
      var v580 = components$$1[componentsIndex]
    }
    sequence$$13 = v579 + v580 + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p40);
    i$$8 = i$$8 + 1;
    v223 = i$$8 < numMut;
  }
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, [addReturns(sequence$$13)], JAM.policy.p39);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v230 = j$$9 < lengthOut$$1;
  for (;v230;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [Math.random() * components$$2.length], JAM.policy.p29);
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v227 = outputWindow.document;
      JAM.call(v227.write, v227, [sequence$$14 + "\n"], JAM.policy.p39);
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v230 = j$$9 < lengthOut$$1;
  }
  var v231 = outputWindow.document;
  JAM.call(v231.write, v231, [sequence$$14 + "\n"], JAM.policy.p39);
  return true;
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
  if (dnaConformation == "circular") {
    shiftValue = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p24).length;
    sequence$$15 = JAM.call(sequence$$15.substring, sequence$$15, [sequence$$15.length - lookAhead, sequence$$15.length], JAM.policy.p40) + sequence$$15 + JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p24);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v237 = outputWindow.document;
  JAM.call(v237.write, v237, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v238 = outputWindow.document;
  JAM.call(v238.write, v238, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p39);
  var i$$9 = 0;
  var v255 = i$$9 < arrayOfItems.length;
  for (;v255;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v589 = arrayOfItems[i$$9]
    }
    matchExp = JAM.call(v589.match, v589, [/\/.+\//], JAM.policy.p29) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v901 = arrayOfItems[i$$9]
    }
    var v590 = JAM.call(v901.match, v901, [/\)\D*\d+/], JAM.policy.p29).toString();
    cutDistance = parseFloat(JAM.call(v590.replace, v590, [/\)\D*/, ""], JAM.policy.p27));
    var v247 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p39);
    for (;v247;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v591 = matchPosition >= lowerLimit;
      if (v591) {
        v591 = matchPosition < upperLimit;
      }
      if (v591) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v247 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p39);
    }
    if (JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p29) != -1) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p27);
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
    var v253 = outputWindow.document;
    var v1039 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p26) {
      var v1084 = arrayOfItems[i$$9]
    }
    var v1056 = JAM.call(v1084.match, v1084, [/\([^\(]+\)/], JAM.policy.p29).toString();
    JAM.call(v253.write, v253, [v1039 + JAM.call(v1056.replace, v1056, [/\(|\)/g, ""], JAM.policy.p27) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p39);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v255 = i$$9 < arrayOfItems.length;
  }
  var v256 = outputWindow.document;
  JAM.call(v256.write, v256, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v257 = outputWindow.document;
  JAM.call(v257.write, v257, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v258 = outputWindow.document;
  JAM.call(v258.write, v258, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p39);
  var i$$10 = 0;
  var v268 = i$$10 < arrayOfItems$$1.length;
  for (;v268;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v600 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = JAM.call(v600.match, v600, [/\/[^\/]+\//], JAM.policy.p29) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p39) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p39).length;
    }
    var percentage = 0;
    var v776 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v982 = arrayOfItems$$1[i$$10]
    }
    if (v776 - parseFloat(JAM.call(v982.match, v982, [/\d+/], JAM.policy.p29)) > 0) {
      var v263 = 100 * tempNumber;
      var v603 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v905 = arrayOfItems$$1[i$$10]
      }
      percentage = v263 / (v603 - parseFloat(JAM.call(v905.match, v905, [/\d+/], JAM.policy.p29)));
    }
    var v266 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v1085 = arrayOfItems$$1[i$$10]
    }
    var v1057 = JAM.call(v1085.match, v1085, [/\([^\(]+\)\b/], JAM.policy.p29).toString();
    JAM.call(v266.write, v266, ["<tr><td>" + JAM.call(v1057.replace, v1057, [/\(|\)/g, ""], JAM.policy.p27) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p23) + "</td></tr>\n"], JAM.policy.p39);
    i$$10 = i$$10 + 1;
    v268 = i$$10 < arrayOfItems$$1.length;
  }
  var v269 = outputWindow.document;
  JAM.call(v269.write, v269, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v276 = sequence$$17.length > 0;
  for (;v276;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [Math.random() * maxNum$$1], JAM.policy.p29);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p29);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p24);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p27);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v273 = outputWindow.document;
      JAM.call(v273.write, v273, [tempSeq + "\n"], JAM.policy.p39);
      tempSeq = "";
    }
    v276 = sequence$$17.length > 0;
  }
  var v277 = outputWindow.document;
  JAM.call(v277.write, v277, [tempSeq + "\n"], JAM.policy.p39);
  return true;
}
function revTrans(theDocument) {
  var newProtein = "";
  var maxInput$$3 = 2E4;
  if (testScript() == false) {
    return false;
  }
  var codonTable$$1;
  var v781 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if (!v781) {
    v781 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
  }
  var v612 = v781;
  if (!v612) {
    v612 = checkCodonTable(theDocument.forms[0].elements[4].value) == false;
  }
  if (v612) {
    return false;
  }
  codonTable$$1 = makeCodonTable(theDocument.forms[0].elements[4].value);
  if (codonTable$$1 == false) {
    return false;
  }
  openWindow("Reverse Translate");
  openPre();
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  var i$$11 = 0;
  var v292 = i$$11 < arrayOfFasta$$1.length;
  for (;v292;) {
    introspect(JAM.policy.p26) {
      var v284 = arrayOfFasta$$1[i$$11]
    }
    newProtein = getSequenceFromFasta(v284);
    introspect(JAM.policy.p26) {
      var v285 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v285);
    newProtein = removeNonProteinAllowX(newProtein);
    var v286 = outputWindow.document;
    JAM.call(v286.write, v286, [getInfoFromTitleAndSequence(title, newProtein)], JAM.policy.p39);
    writeRevTransSeqNoDegen(newProtein, title, codonTable$$1);
    var v288 = outputWindow.document;
    JAM.call(v288.write, v288, ["\n"], JAM.policy.p22);
    writeRevTransSeqDegen(newProtein, title, codonTable$$1);
    var v289 = outputWindow.document;
    JAM.call(v289.write, v289, ["\n"], JAM.policy.p22);
    var v290 = outputWindow.document;
    JAM.call(v290.write, v290, ["Graph of base probabilities:\n"], JAM.policy.p22);
    writeRevTransGraph(newProtein, codonTable$$1);
    var v291 = outputWindow.document;
    JAM.call(v291.write, v291, ["\n\n"], JAM.policy.p22);
    i$$11 = i$$11 + 1;
    v292 = i$$11 < arrayOfFasta$$1.length;
  }
  closePre();
  closeWindow();
  return true;
}
function writeRevTransSeqNoDegen(protein, title$$10, codonTable$$2) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v293 = codonTable$$2;
    var v294 = p1$$2.toString().toLowerCase();
    introspect(JAM.policy.p26) {
      aminoAcid = v293[v294];
    }
    return aminoAcid.mostCommonCodon;
  }
  var aminoAcid;
  protein = JAM.call(protein.replace, protein, [/\*/g, "z"], JAM.policy.p27);
  protein = JAM.call(protein.replace, protein, [/(.)/g, v2], JAM.policy.p27);
  var v295 = outputWindow.document;
  JAM.call(v295.write, v295, ["&gt;" + "reverse translation of " + title$$10 + " to a " + protein.length + " base sequence of most likely codons.\n"], JAM.policy.p39);
  var v297 = outputWindow.document;
  JAM.call(v297.write, v297, [addReturns(protein)], JAM.policy.p39);
  var v299 = outputWindow.document;
  JAM.call(v299.write, v299, ["\n"], JAM.policy.p22);
  return true;
}
function writeRevTransSeqDegen(protein$$1, title$$11, codonTable$$3) {
  function v3(str$$9, p1$$3, offset$$11, s$$5) {
    var v300 = codonTable$$3;
    var v301 = p1$$3.toString().toLowerCase();
    introspect(JAM.policy.p26) {
      aminoAcid$$1 = v300[v301];
    }
    return aminoAcid$$1.degenCodon;
  }
  var aminoAcid$$1;
  protein$$1 = JAM.call(protein$$1.replace, protein$$1, [/\*/g, "z"], JAM.policy.p27);
  protein$$1 = JAM.call(protein$$1.replace, protein$$1, [/(.)/g, v3], JAM.policy.p27);
  var v302 = outputWindow.document;
  JAM.call(v302.write, v302, ["&gt;" + "reverse translation of " + title$$11 + " to a " + protein$$1.length + " base sequence of consensus codons.\n"], JAM.policy.p39);
  var v304 = outputWindow.document;
  JAM.call(v304.write, v304, [addReturns(protein$$1)], JAM.policy.p39);
  var v306 = outputWindow.document;
  JAM.call(v306.write, v306, ["\n"], JAM.policy.p22);
  return true;
}
function writeRevTransGraph(protein$$2, codonTable$$4) {
  function v4(str$$10, p1$$4, offset$$12, s$$6) {
    var v307 = codonTable$$4;
    var v308 = p1$$4.toString().toLowerCase();
    introspect(JAM.policy.p26) {
      aminoAcid$$2 = v307[v308];
    }
    return "<b>" + (offset$$12 + 1) + "_" + str$$10 + "_" + "first</b>\n" + aminoAcid$$2.rulerPosOne + "<b>" + (offset$$12 + 1) + "_" + str$$10 + "_" + "second</b>\n" + aminoAcid$$2.rulerPosTwo + "<b>" + (offset$$12 + 1) + "_" + str$$10 + "_" + "third</b>\n" + aminoAcid$$2.rulerPosThree + "\n";
  }
  var aminoAcid$$2;
  protein$$2 = JAM.call(protein$$2.replace, protein$$2, [/\*/g, "z"], JAM.policy.p27);
  protein$$2 = JAM.call(protein$$2.replace, protein$$2, [/(.)/g, v4], JAM.policy.p27);
  var v310 = outputWindow.document;
  JAM.call(v310.write, v310, [protein$$2], JAM.policy.p39);
  return true;
}
function makeCodonTable(gcgTable) {
  gcgTable = JAM.call(gcgTable.replace, gcgTable, [/[^\.]*\.\./, ""], JAM.policy.p27);
  var tableArray = JAM.call(gcgTable.split, gcgTable, [/[\f\n\r]/], JAM.policy.p29);
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$5 = new CodonTable;
  var i$$12 = 0;
  var v315 = i$$12 < tableArray.length;
  for (;v315;) {
    introspect(JAM.policy.p26) {
      var v625 = tableArray[i$$12]
    }
    var v314 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [v625], JAM.policy.p39);
    for (;v314;) {
      try {
        var v626 = codonTable$$5;
        var v627 = matchArray$$2[1].toLowerCase();
        introspect(JAM.policy.p26) {
          var v311 = v626[v627]
        }
        JAM.call(v311.addCodon, v311, [new Codon(matchArray$$2[2], parseFloat(matchArray$$2[3]), parseFloat(matchArray$$2[4]), parseFloat(matchArray$$2[5]))], JAM.policy.p39);
      } catch (e$$5) {
        alert("There is a problem with a line of the codon table: " + matchArray$$2[1] + " " + matchArray$$2[2] + " " + matchArray$$2[3] + " " + matchArray$$2[4] + " " + matchArray$$2[4]);
        return false;
      }
      introspect(JAM.policy.p26) {
        var v634 = tableArray[i$$12]
      }
      v314 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [v634], JAM.policy.p39);
    }
    i$$12 = i$$12 + 1;
    v315 = i$$12 < tableArray.length;
  }
  codonTable$$5.a.determineBaseFreq();
  codonTable$$5.c.determineBaseFreq();
  codonTable$$5.d.determineBaseFreq();
  codonTable$$5.e.determineBaseFreq();
  codonTable$$5.f.determineBaseFreq();
  codonTable$$5.g.determineBaseFreq();
  codonTable$$5.h.determineBaseFreq();
  codonTable$$5.i.determineBaseFreq();
  codonTable$$5.k.determineBaseFreq();
  codonTable$$5.l.determineBaseFreq();
  codonTable$$5.m.determineBaseFreq();
  codonTable$$5.n.determineBaseFreq();
  codonTable$$5.p.determineBaseFreq();
  codonTable$$5.q.determineBaseFreq();
  codonTable$$5.r.determineBaseFreq();
  codonTable$$5.s.determineBaseFreq();
  codonTable$$5.t.determineBaseFreq();
  codonTable$$5.v.determineBaseFreq();
  codonTable$$5.w.determineBaseFreq();
  codonTable$$5.y.determineBaseFreq();
  codonTable$$5.z.determineBaseFreq();
  codonTable$$5.x.determineBaseFreq();
  var v338 = codonTable$$5.x;
  var v1136 = new Array(.25, .25, .25, .25);
  v338.baseFreqPosOne = v1136;
  var v339 = codonTable$$5.x;
  var v1137 = new Array(.25, .25, .25, .25);
  v339.baseFreqPosTwo = v1137;
  var v340 = codonTable$$5.x;
  var v1138 = new Array(.25, .25, .25, .25);
  v340.baseFreqPosThree = v1138;
  codonTable$$5.a.fillRuler();
  codonTable$$5.c.fillRuler();
  codonTable$$5.d.fillRuler();
  codonTable$$5.e.fillRuler();
  codonTable$$5.f.fillRuler();
  codonTable$$5.g.fillRuler();
  codonTable$$5.h.fillRuler();
  codonTable$$5.i.fillRuler();
  codonTable$$5.k.fillRuler();
  codonTable$$5.l.fillRuler();
  codonTable$$5.m.fillRuler();
  codonTable$$5.n.fillRuler();
  codonTable$$5.p.fillRuler();
  codonTable$$5.q.fillRuler();
  codonTable$$5.r.fillRuler();
  codonTable$$5.s.fillRuler();
  codonTable$$5.t.fillRuler();
  codonTable$$5.v.fillRuler();
  codonTable$$5.w.fillRuler();
  codonTable$$5.y.fillRuler();
  codonTable$$5.z.fillRuler();
  codonTable$$5.x.fillRuler();
  return codonTable$$5;
}
function CodonTable() {
  var v1139 = new AminoAcid;
  this.a = v1139;
  var v1140 = new AminoAcid;
  this.c = v1140;
  var v1141 = new AminoAcid;
  this.d = v1141;
  var v1142 = new AminoAcid;
  this.e = v1142;
  var v1143 = new AminoAcid;
  this.f = v1143;
  var v1144 = new AminoAcid;
  this.g = v1144;
  var v1145 = new AminoAcid;
  this.h = v1145;
  var v1146 = new AminoAcid;
  this.i = v1146;
  var v1147 = new AminoAcid;
  this.k = v1147;
  var v1148 = new AminoAcid;
  this.l = v1148;
  var v1149 = new AminoAcid;
  this.m = v1149;
  var v1150 = new AminoAcid;
  this.n = v1150;
  var v1151 = new AminoAcid;
  this.p = v1151;
  var v1152 = new AminoAcid;
  this.q = v1152;
  var v1153 = new AminoAcid;
  this.r = v1153;
  var v1154 = new AminoAcid;
  this.s = v1154;
  var v1155 = new AminoAcid;
  this.t = v1155;
  var v1156 = new AminoAcid;
  this.v = v1156;
  var v1157 = new AminoAcid;
  this.w = v1157;
  var v1158 = new AminoAcid;
  this.y = v1158;
  var v1159 = new AminoAcid;
  this.z = v1159;
  var v1160 = new AminoAcid;
  this.x = v1160;
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
  this.xaa = this.x;
  return;
}
function fillRuler() {
  var markG = "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg";
  var markA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  var markT = "TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT";
  var markC = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
  var markLength = markG.length;
  this.rulerPosOne = JAM.call(this.getRuler, this, [this.baseFreqPosOne[0], markG], JAM.policy.p40) + JAM.call(this.getRuler, this, [this.baseFreqPosOne[1], markA], JAM.policy.p40) + JAM.call(this.getRuler, this, [this.baseFreqPosOne[2], markT], JAM.policy.p40) + JAM.call(this.getRuler, this, [this.baseFreqPosOne[3], markC], JAM.policy.p40);
  this.rulerPosTwo = JAM.call(this.getRuler, this, [this.baseFreqPosTwo[0], markG], JAM.policy.p40) + JAM.call(this.getRuler, this, [this.baseFreqPosTwo[1], markA], JAM.policy.p40) + JAM.call(this.getRuler, this, [this.baseFreqPosTwo[2], markT], JAM.policy.p40) + JAM.call(this.getRuler, this, [this.baseFreqPosTwo[3], markC], JAM.policy.p40);
  this.rulerPosThree = JAM.call(this.getRuler, this, [this.baseFreqPosThree[0], markG], JAM.policy.p40) + JAM.call(this.getRuler, this, [this.baseFreqPosThree[1], markA], JAM.policy.p40) + JAM.call(this.getRuler, this, [this.baseFreqPosThree[2], markT], JAM.policy.p40) + JAM.call(this.getRuler, this, [this.baseFreqPosThree[3], markC], JAM.policy.p40);
  this.setMostCommonCodon();
  this.setDegenCodon();
  return;
}
function getRuler(freq, mark) {
  return JAM.call(mark.substring, mark, [0, 1], JAM.policy.p24) + JAM.call(mark.substring, mark, [0, freq * mark.length], JAM.policy.p24) + " " + JAM.call(freq.toFixed, freq, [2], JAM.policy.p23) + "\n";
}
function addCodon(codon$$1) {
  var v370 = this.codons;
  JAM.call(v370.push, v370, [codon$$1], JAM.policy.p39);
  return;
}
function determineBaseFreq() {
  this.fixFraction();
  var i$$13 = 0;
  var v395 = i$$13 < this.codons.length;
  for (;v395;) {
    var v1000 = this.codons;
    introspect(JAM.policy.p26) {
      var v929 = v1000[i$$13]
    }
    var v810 = v929.sequence;
    if (JAM.call(v810.charAt, v810, [0], JAM.policy.p23) == "g") {
      var v371 = this.baseFreqPosOne;
      var v649 = this.baseFreqPosOne[0];
      var v930 = this.codons;
      introspect(JAM.policy.p26) {
        var v812 = v930[i$$13]
      }
      v371[0] = v649 + v812.fraction;
    } else {
      var v1001 = this.codons;
      introspect(JAM.policy.p26) {
        var v931 = v1001[i$$13]
      }
      var v813 = v931.sequence;
      if (JAM.call(v813.charAt, v813, [0], JAM.policy.p23) == "a") {
        var v372 = this.baseFreqPosOne;
        var v652 = this.baseFreqPosOne[1];
        var v932 = this.codons;
        introspect(JAM.policy.p26) {
          var v815 = v932[i$$13]
        }
        v372[1] = v652 + v815.fraction;
      } else {
        var v1002 = this.codons;
        introspect(JAM.policy.p26) {
          var v933 = v1002[i$$13]
        }
        var v816 = v933.sequence;
        if (JAM.call(v816.charAt, v816, [0], JAM.policy.p23) == "t") {
          var v373 = this.baseFreqPosOne;
          var v655 = this.baseFreqPosOne[2];
          var v934 = this.codons;
          introspect(JAM.policy.p26) {
            var v818 = v934[i$$13]
          }
          v373[2] = v655 + v818.fraction;
        } else {
          var v1003 = this.codons;
          introspect(JAM.policy.p26) {
            var v935 = v1003[i$$13]
          }
          var v819 = v935.sequence;
          if (JAM.call(v819.charAt, v819, [0], JAM.policy.p23) == "c") {
            var v374 = this.baseFreqPosOne;
            var v658 = this.baseFreqPosOne[3];
            var v936 = this.codons;
            introspect(JAM.policy.p26) {
              var v821 = v936[i$$13]
            }
            v374[3] = v658 + v821.fraction;
          }
        }
      }
    }
    var v1004 = this.codons;
    introspect(JAM.policy.p26) {
      var v937 = v1004[i$$13]
    }
    var v822 = v937.sequence;
    if (JAM.call(v822.charAt, v822, [1], JAM.policy.p23) == "g") {
      var v379 = this.baseFreqPosTwo;
      var v661 = this.baseFreqPosTwo[0];
      var v938 = this.codons;
      introspect(JAM.policy.p26) {
        var v824 = v938[i$$13]
      }
      v379[0] = v661 + v824.fraction;
    } else {
      var v1005 = this.codons;
      introspect(JAM.policy.p26) {
        var v939 = v1005[i$$13]
      }
      var v825 = v939.sequence;
      if (JAM.call(v825.charAt, v825, [1], JAM.policy.p23) == "a") {
        var v380 = this.baseFreqPosTwo;
        var v664 = this.baseFreqPosTwo[1];
        var v940 = this.codons;
        introspect(JAM.policy.p26) {
          var v827 = v940[i$$13]
        }
        v380[1] = v664 + v827.fraction;
      } else {
        var v1006 = this.codons;
        introspect(JAM.policy.p26) {
          var v941 = v1006[i$$13]
        }
        var v828 = v941.sequence;
        if (JAM.call(v828.charAt, v828, [1], JAM.policy.p23) == "t") {
          var v381 = this.baseFreqPosTwo;
          var v667 = this.baseFreqPosTwo[2];
          var v942 = this.codons;
          introspect(JAM.policy.p26) {
            var v830 = v942[i$$13]
          }
          v381[2] = v667 + v830.fraction;
        } else {
          var v1007 = this.codons;
          introspect(JAM.policy.p26) {
            var v943 = v1007[i$$13]
          }
          var v831 = v943.sequence;
          if (JAM.call(v831.charAt, v831, [1], JAM.policy.p23) == "c") {
            var v382 = this.baseFreqPosTwo;
            var v670 = this.baseFreqPosTwo[3];
            var v944 = this.codons;
            introspect(JAM.policy.p26) {
              var v833 = v944[i$$13]
            }
            v382[3] = v670 + v833.fraction;
          }
        }
      }
    }
    var v1008 = this.codons;
    introspect(JAM.policy.p26) {
      var v945 = v1008[i$$13]
    }
    var v834 = v945.sequence;
    if (JAM.call(v834.charAt, v834, [2], JAM.policy.p23) == "g") {
      var v387 = this.baseFreqPosThree;
      var v673 = this.baseFreqPosThree[0];
      var v946 = this.codons;
      introspect(JAM.policy.p26) {
        var v836 = v946[i$$13]
      }
      v387[0] = v673 + v836.fraction;
    } else {
      var v1009 = this.codons;
      introspect(JAM.policy.p26) {
        var v947 = v1009[i$$13]
      }
      var v837 = v947.sequence;
      if (JAM.call(v837.charAt, v837, [2], JAM.policy.p23) == "a") {
        var v388 = this.baseFreqPosThree;
        var v676 = this.baseFreqPosThree[1];
        var v948 = this.codons;
        introspect(JAM.policy.p26) {
          var v839 = v948[i$$13]
        }
        v388[1] = v676 + v839.fraction;
      } else {
        var v1010 = this.codons;
        introspect(JAM.policy.p26) {
          var v949 = v1010[i$$13]
        }
        var v840 = v949.sequence;
        if (JAM.call(v840.charAt, v840, [2], JAM.policy.p23) == "t") {
          var v389 = this.baseFreqPosThree;
          var v679 = this.baseFreqPosThree[2];
          var v950 = this.codons;
          introspect(JAM.policy.p26) {
            var v842 = v950[i$$13]
          }
          v389[2] = v679 + v842.fraction;
        } else {
          var v1011 = this.codons;
          introspect(JAM.policy.p26) {
            var v951 = v1011[i$$13]
          }
          var v843 = v951.sequence;
          if (JAM.call(v843.charAt, v843, [2], JAM.policy.p23) == "c") {
            var v390 = this.baseFreqPosThree;
            var v682 = this.baseFreqPosThree[3];
            var v952 = this.codons;
            introspect(JAM.policy.p26) {
              var v845 = v952[i$$13]
            }
            v390[3] = v682 + v845.fraction;
          }
        }
      }
    }
    i$$13 = i$$13 + 1;
    v395 = i$$13 < this.codons.length;
  }
  return true;
}
function fixFraction() {
  var perThouTotal = 0;
  var i$$14 = 0;
  var v397 = i$$14 < this.codons.length;
  for (;v397;) {
    var v848 = this.codons;
    introspect(JAM.policy.p26) {
      var v686 = v848[i$$14]
    }
    perThouTotal = perThouTotal + v686.perThou;
    i$$14 = i$$14 + 1;
    v397 = i$$14 < this.codons.length;
  }
  if (perThouTotal == 0) {
    return false;
  }
  i$$14 = 0;
  var v400 = i$$14 < this.codons.length;
  for (;v400;) {
    var v689 = this.codons;
    introspect(JAM.policy.p26) {
      var v399 = v689[i$$14]
    }
    var v953 = this.codons;
    introspect(JAM.policy.p26) {
      var v851 = v953[i$$14]
    }
    v399.fraction = v851.perThou / perThouTotal;
    i$$14 = i$$14 + 1;
    v400 = i$$14 < this.codons.length;
  }
  return true;
}
function setMostCommonCodon() {
  var highestFraction = 0;
  var highestCodon = "nnn";
  var i$$15 = 0;
  var v404 = i$$15 < this.codons.length;
  for (;v404;) {
    var v954 = this.codons;
    introspect(JAM.policy.p26) {
      var v854 = v954[i$$15]
    }
    if (v854.fraction > highestFraction) {
      var v694 = this.codons;
      introspect(JAM.policy.p26) {
        var v401 = v694[i$$15]
      }
      highestFraction = v401.fraction;
      var v695 = this.codons;
      introspect(JAM.policy.p26) {
        var v402 = v695[i$$15]
      }
      highestCodon = v402.sequence;
    }
    i$$15 = i$$15 + 1;
    v404 = i$$15 < this.codons.length;
  }
  this.mostCommonCodon = highestCodon;
  return;
}
function setDegenCodon() {
  this.degenCodon = getConsensusBase(this.baseFreqPosOne) + getConsensusBase(this.baseFreqPosTwo) + getConsensusBase(this.baseFreqPosThree);
  return;
}
function getConsensusBase(baseFreq) {
  var g;
  var a;
  var t;
  var c;
  if (baseFreq[0] > 0) {
    g = true;
  }
  if (baseFreq[1] > 0) {
    a = true;
  }
  if (baseFreq[2] > 0) {
    t = true;
  }
  if (baseFreq[3] > 0) {
    c = true;
  }
  var v955 = !g;
  if (v955) {
    v955 = !a;
  }
  var v858 = v955;
  if (v858) {
    v858 = !c;
  }
  var v704 = v858;
  if (v704) {
    v704 = !t;
  }
  if (v704) {
    return "n";
  }
  var v859 = g && a;
  if (v859) {
    v859 = c;
  }
  var v705 = v859;
  if (v705) {
    v705 = t;
  }
  if (v705) {
    return "n";
  } else {
    var v706 = a && c;
    if (v706) {
      v706 = t;
    }
    if (v706) {
      return "h";
    } else {
      var v707 = a && g;
      if (v707) {
        v707 = t;
      }
      if (v707) {
        return "d";
      } else {
        var v708 = c && g;
        if (v708) {
          v708 = t;
        }
        if (v708) {
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
  return true;
}
function AminoAcid() {
  var v1161 = new Array;
  this.codons = v1161;
  var v1162 = new Array(0, 0, 0, 0);
  this.baseFreqPosOne = v1162;
  var v1163 = new Array(0, 0, 0, 0);
  this.baseFreqPosTwo = v1163;
  var v1164 = new Array(0, 0, 0, 0);
  this.baseFreqPosThree = v1164;
  return;
}
function Codon(sequence$$18, number, perThou, fraction) {
  var v1165 = sequence$$18.toLowerCase();
  this.sequence = v1165;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return;
}
new AminoAcid;
AminoAcid.prototype.fillRuler = fillRuler;
AminoAcid.prototype.getRuler = getRuler;
AminoAcid.prototype.addCodon = addCodon;
AminoAcid.prototype.determineBaseFreq = determineBaseFreq;
AminoAcid.prototype.fixFraction = fixFraction;
AminoAcid.prototype.setMostCommonCodon = setMostCommonCodon;
AminoAcid.prototype.setDegenCodon = setDegenCodon;
AminoAcid.prototype.getConsensusBase = getConsensusBase;
JAM.set(document, "onload", v5);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p22), "onclick", v6);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p22), "onclick", v7)

