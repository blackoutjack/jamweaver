// sms2-ident-sim.js
function v4() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return;
}
function v3() {
  try {
    identSim(document);
  } catch (e$$5) {
    alert("The following error was encountered: " + e$$5);
  }
  return;
}
function v2() {
  document.main_form.main_submit.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p28);
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var lengthOfAlign = arrayOfSequences[0].length;
  if (arrayOfSequences.length < 2) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v12 = i$$1 < arrayOfTitles.length;
  for (;v12;) {
    introspect(JAM.policy.p26) {
      var v701 = arrayOfTitles[i$$1]
    }
    var v544 = JAM.call(v701.search, v701, [/\S/], JAM.policy.p27) == -1;
    if (!v544) {
      introspect(JAM.policy.p26) {
        var v702 = arrayOfSequences[i$$1]
      }
      v544 = JAM.call(v702.search, v702, [/\S/], JAM.policy.p27) == -1;
    }
    var v331 = v544;
    if (!v331) {
      introspect(JAM.policy.p26) {
        var v641 = arrayOfSequences[i$$1]
      }
      v331 = v641.length != lengthOfAlign;
    }
    if (v331) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1 = i$$1 + 1;
    v12 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v703 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p27) == -1;
  if (!v703) {
    v703 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p27) == -1;
  }
  var v642 = v703;
  if (!v642) {
    v642 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p27) == -1;
  }
  var v547 = v642;
  if (!v547) {
    v547 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p27) == -1;
  }
  var v333 = v547;
  if (!v333) {
    v333 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p27) == -1;
  }
  if (v333) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v550 = formElement.value;
  if (JAM.call(v550.search, v550, [/\S/], JAM.policy.p27) == -1) {
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
  var v17 = z$$2 < arrayOfPatterns.length;
  for (;v17;) {
    introspect(JAM.policy.p26) {
      var v551 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(v551.search, v551, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p27) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    introspect(JAM.policy.p26) {
      var v552 = arrayOfPatterns[z$$2]
    }
    if (moreExpressionCheck(v552) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    v17 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v26 = j < arrayOfPatterns.length;
  for (;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAM.policy.p26) {
      var v645 = arrayOfPatterns[j]
    }
    var v340 = JAM.call(v645.match, v645, [/\/.+\//], JAM.policy.p27) + "gi";
    if (JAM.isEval(eval)) {
      var v831 = eval("introspect(JAM.policy.pFull) { " + v340 + " }")
    } else {
      var v831 = JAM.call(eval, null, [v340])
    }
    introspect(JAM.policy.p13) {
      v20[v21] = v831;
    }
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAM.policy.p26) {
      var v554 = arrayOfPatterns[j]
    }
    var v832 = JAM.call(v554.match, v554, [/=[a-zA-Z\*]/], JAM.policy.p27).toString();
    introspect(JAM.policy.p13) {
      v22[v23] = v832;
    }
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAM.policy.p26) {
      var v342 = geneticCodeMatchResult[j]
    }
    var v833 = JAM.call(v342.replace, v342, [/=/g, ""], JAM.policy.p28);
    introspect(JAM.policy.p13) {
      v24[v25] = v833;
    }
    j = j + 1;
    v26 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v33 = i$$2 <= testSequence.length - 3;
  for (;v33;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p28);
    j = 0;
    var v31 = j < geneticCodeMatchExp.length;
    for (;v31;) {
      introspect(JAM.policy.p26) {
        var v556 = geneticCodeMatchExp[j]
      }
      if (JAM.call(codon.search, codon, [v556], JAM.policy.p39) != -1) {
        if (oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      v31 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
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
      var v558 = arrayOfPatterns$$1[z$$3]
    }
    if (JAM.call(v558.search, v558, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p27) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    v35 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v39 = i$$3 < arrayOfPatterns$$1.length;
  for (;v39;) {
    introspect(JAM.policy.p26) {
      var v559 = arrayOfPatterns$$1[i$$3]
    }
    var re = new RegExp("[" + v559 + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v38 = j$$1 < arrayOfPatterns$$1.length;
    for (;v38;) {
      introspect(JAM.policy.p26) {
        var v560 = arrayOfPatterns$$1[j$$1]
      }
      if (JAM.call(v560.search, v560, [re], JAM.policy.p39) != -1) {
        alert("The same amino acid is in more than one similarity group.");
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
      var v561 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(v561.search, v561, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p27) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    introspect(JAM.policy.p26) {
      var v562 = arrayOfPatterns$$2[z$$4]
    }
    if (moreExpressionCheck(v562) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    v42 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v646 = getSequenceFromFasta(text$$7);
  if (JAM.call(v646.replace, v646, [/[^A-Za-z]/g, ""], JAM.policy.p28).length > maxInput) {
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
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p28);
  return dnaSequence;
}
function closeForm() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</form>"], JAM.policy.p25);
  return true;
}
function closePre() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</div>"], JAM.policy.p25);
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</pre>\n"], JAM.policy.p25);
  return;
}
function closeTextArea() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</textarea>"], JAM.policy.p25);
  return true;
}
function closeWindow() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</body>\n</html>\n"], JAM.policy.p25);
  outputWindow.status = "Done.";
  outputWindow.document.close();
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p28);
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  if (alignArray.length < 3) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v55 = i$$4 < alignArray.length;
  for (;v55;) {
    introspect(JAM.policy.p26) {
      var v564 = alignArray[i$$4]
    }
    if (JAM.call(v564.search, v564, [/[^\s]+\s/], JAM.policy.p27) == -1) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4 = i$$4 + 1;
    v55 = i$$4 < alignArray.length;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p28);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p28);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p28);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p28);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p28);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  if (JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p27) != -1) {
    var v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p39);
    for (;v57;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p39);
      v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p39);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var stringToReturn = "&gt;results for " + sequence$$2.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p27) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"';
  }
  stringToReturn = stringToReturn + ' starting "' + JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p23) + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p27) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p23) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p27) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p23) + '"';
  return'<div class="info">' + stringToReturn$$1 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = new Array(arrayOfPatterns$$3.length);
  var j$$2 = 0;
  var v75 = j$$2 < arrayOfPatterns$$3.length;
  for (;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAM.policy.p26) {
      var v647 = arrayOfPatterns$$3[j$$2]
    }
    var v389 = JAM.call(v647.match, v647, [/\/.+\//], JAM.policy.p27) + "gi";
    if (JAM.isEval(eval)) {
      var v834 = eval("introspect(JAM.policy.pFull) { " + v389 + " }")
    } else {
      var v834 = JAM.call(eval, null, [v389])
    }
    introspect(JAM.policy.p13) {
      v73[v74] = v834;
    }
    j$$2 = j$$2 + 1;
    v75 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v81 = j$$3 < arrayOfPatterns$$4.length;
  for (;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAM.policy.p26) {
      var v566 = arrayOfPatterns$$4[j$$3]
    }
    var v835 = JAM.call(v566.match, v566, [/=[a-zA-Z\*]/], JAM.policy.p27).toString();
    introspect(JAM.policy.p13) {
      v77[v78] = v835;
    }
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAM.policy.p26) {
      var v393 = geneticCodeMatchResult$$1[j$$3]
    }
    var v836 = JAM.call(v393.replace, v393, [/=/g, ""], JAM.policy.p28);
    introspect(JAM.policy.p13) {
      v79[v80] = v836;
    }
    j$$3 = j$$3 + 1;
    v81 = j$$3 < arrayOfPatterns$$4.length;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p27) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"';
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p23) + '"';
  return'<div class="info">' + stringToReturn$$2 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p27) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"';
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p23) + '"';
  return'<div class="info">' + stringToReturn$$3 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p27) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p23) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p27) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleTwo$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p23) + '"';
  return'<div class="info">' + stringToReturn$$4 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v102 = j$$4 < lengthOut;
  for (;v102;) {
    tempNum = JAM.call(Math.floor, Math, [Math.random() * components.length], JAM.policy.p27);
    introspect(JAM.policy.p26) {
      tempChar = components[tempNum];
    }
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p39);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p25);
}
function getSequenceFromFasta(sequenceRecord) {
  if (JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p27) != -1) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p28);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if (JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p27) != -1) {
    fastaTitle = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p28).toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p28);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p28);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p28);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v802 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p27) != -1;
  if (!v802) {
    v802 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p27) != -1;
  }
  var v793 = v802;
  if (!v793) {
    v793 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p27) != -1;
  }
  var v784 = v793;
  if (!v784) {
    v784 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p27) != -1;
  }
  var v773 = v784;
  if (!v773) {
    v773 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p27) != -1;
  }
  var v761 = v773;
  if (!v761) {
    v761 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p27) != -1;
  }
  var v745 = v761;
  if (!v745) {
    v745 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p27) != -1;
  }
  var v706 = v745;
  if (!v706) {
    v706 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p27) != -1;
  }
  var v648 = v706;
  if (!v648) {
    v648 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p27) != -1;
  }
  var v568 = v648;
  if (!v568) {
    v568 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p27) != -1;
  }
  var v421 = v568;
  if (!v421) {
    v421 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p27) != -1;
  }
  if (v421) {
    return false;
  }
  return true;
}
function openForm() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ['<form action="">\n'], JAM.policy.p25);
  return true;
}
function openPre() {
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ["<pre>"], JAM.policy.p25);
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<div class="pre">'], JAM.policy.p25);
  return;
}
function openTextArea() {
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p25);
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p24);
  outputWindow.focus();
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p39);
  if (isColor) {
    var v113 = outputWindow.document;
    JAM.call(v113.write, v113, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p39);
  } else {
    var v115 = outputWindow.document;
    JAM.call(v115.write, v115, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p39);
  }
  var v117 = outputWindow.document;
  JAM.call(v117.write, v117, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"], JAM.policy.p39);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p24);
  outputWindow.focus();
  var v119 = outputWindow.document;
  JAM.call(v119.write, v119, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p39);
  if (isBackground) {
    var v121 = outputWindow.document;
    JAM.call(v121.write, v121, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p39);
  } else {
    var v123 = outputWindow.document;
    JAM.call(v123.write, v123, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p39);
  }
  var v125 = outputWindow.document;
  JAM.call(v125.write, v125, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"], JAM.policy.p39);
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p28);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p28);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p28);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p28);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p28);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p28);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p28);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p28);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p28);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  if (JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p27) != -1) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p27);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p25);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p28);
  if (testString != "1X2X3X") {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  if (JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p22) != 2489.824) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  if (JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p22) != 2489.8) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  if (JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p27) == -1) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v659 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p27) == -1;
  if (!v659) {
    v659 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p27) == -1;
  }
  var v579 = v659;
  if (!v579) {
    v579 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p27) == -1;
  }
  var v436 = v579;
  if (!v436) {
    v436 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p27) == -1;
  }
  if (v436) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if (JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p27) == -1) {
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
  if (JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p27) != -1) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  if (JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p27) != -1) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v662 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p27) == -1;
  if (!v662) {
    v662 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p27) == -1;
  }
  var v582 = v662;
  if (!v582) {
    v582 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p27) == -1;
  }
  var v441 = v582;
  if (!v441) {
    v441 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p27) == -1;
  }
  if (v441) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v665 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p27) == -1;
  if (!v665) {
    v665 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p27) == -1;
  }
  var v585 = v665;
  if (!v585) {
    v585 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p27) == -1;
  }
  var v442 = v585;
  if (!v442) {
    v442 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p27) == -1;
  }
  if (v442) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  if (JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p27) == -1) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v668 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p27) == -1;
  if (!v668) {
    v668 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p27) == -1;
  }
  var v588 = v668;
  if (!v588) {
    v588 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p27) == -1;
  }
  var v444 = v588;
  if (!v444) {
    v444 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p27) == -1;
  }
  if (v444) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  if (JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p27) == -1) {
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
  var v156 = i$$5 < stopBase;
  for (;v156;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v153 = j$$6 <= basePerLine / groupSize;
    for (;v153;) {
      var v152 = k < groupSize;
      for (;v152;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p39);
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
    JAM.call(v154.write, v154, [lineOfText + "\n"], JAM.policy.p39);
    lineOfText = "";
    v156 = i$$5 < stopBase;
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
    var v449 = adjustment < 0;
    if (v449) {
      v449 = adjusted >= 0;
    }
    if (v449) {
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
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p39);
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2;
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
      v166 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v167 = outputWindow.document;
      JAM.call(v167.write, v167, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p39);
      if (strands$$1 == "two") {
        var v169 = outputWindow.document;
        JAM.call(v169.write, v169, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p39);
        var v171 = outputWindow.document;
        JAM.call(v171.write, v171, ["\n"], JAM.policy.p25);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v173 = outputWindow.document;
        JAM.call(v173.write, v173, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p39);
        if (strands$$1 == "two") {
          var v175 = outputWindow.document;
          JAM.call(v175.write, v175, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p39);
          var v177 = outputWindow.document;
          JAM.call(v177.write, v177, ["\n"], JAM.policy.p25);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v179 = outputWindow.document;
          JAM.call(v179.write, v179, [aboveNum + "\n"], JAM.policy.p39);
          var v181 = outputWindow.document;
          JAM.call(v181.write, v181, [lineOfText$$1 + "\n"], JAM.policy.p39);
          if (strands$$1 == "two") {
            var v183 = outputWindow.document;
            JAM.call(v183.write, v183, [complement(lineOfText$$1) + "\n"], JAM.policy.p39);
            var v185 = outputWindow.document;
            JAM.call(v185.write, v185, ["\n"], JAM.policy.p25);
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
  var i$$7 = parseInt(startBase$$3);
  var k$$2 = 0;
  var lineOfText$$2 = "";
  var lineNum$$1 = "";
  var sepChar$$2 = " ";
  var aboveNum$$1 = "";
  groupSize$$3 = parseInt(groupSize$$3);
  basePerLine$$3 = parseInt(basePerLine$$3);
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
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p39);
        k$$2 = k$$2 + 1;
        v194 = k$$2 < groupSize$$3;
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
      v199 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v200 = outputWindow.document;
      JAM.call(v200.write, v200, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p39);
    } else {
      if (numberPosition$$2 == "right") {
        var v202 = outputWindow.document;
        JAM.call(v202.write, v202, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p39);
      } else {
        if (numberPosition$$2 == "above") {
          var v204 = outputWindow.document;
          JAM.call(v204.write, v204, [aboveNum$$1 + "\n"], JAM.policy.p39);
          var v206 = outputWindow.document;
          JAM.call(v206.write, v206, [lineOfText$$2 + "\n"], JAM.policy.p39);
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
  numMut = parseInt(numMut);
  firstIndexToMutate = parseInt(firstIndexToMutate);
  lastIndexToMutate = parseInt(lastIndexToMutate);
  var v599 = sequence$$13.length <= firstIndexToMutate;
  if (!v599) {
    v599 = lastIndexToMutate < 0;
  }
  var v466 = v599;
  if (!v466) {
    v466 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v466) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for (;v220;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [Math.random() * maxNum], JAM.policy.p27);
    var v468 = randNum < firstIndexToMutate;
    if (!v468) {
      v468 = randNum > lastIndexToMutate;
    }
    if (v468) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p27);
    needNewChar = true;
    for (;needNewChar;) {
      componentsIndex = JAM.call(Math.round, Math, [Math.random() * components$$1.length], JAM.policy.p27);
      if (componentsIndex == components$$1.length) {
        componentsIndex = 0;
      }
      introspect(JAM.policy.p26) {
        var v472 = components$$1[componentsIndex]
      }
      if (v472 != currentChar) {
        needNewChar = false;
      }
    }
    var v473 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p23);
    introspect(JAM.policy.p26) {
      var v474 = components$$1[componentsIndex]
    }
    sequence$$13 = v473 + v474 + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p40);
    i$$8 = i$$8 + 1;
    v220 = i$$8 < numMut;
  }
  var v221 = outputWindow.document;
  JAM.call(v221.write, v221, [addReturns(sequence$$13)], JAM.policy.p39);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v227 = j$$9 < lengthOut$$1;
  for (;v227;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [Math.random() * components$$2.length], JAM.policy.p27);
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v224 = outputWindow.document;
      JAM.call(v224.write, v224, [sequence$$14 + "\n"], JAM.policy.p39);
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v227 = j$$9 < lengthOut$$1;
  }
  var v228 = outputWindow.document;
  JAM.call(v228.write, v228, [sequence$$14 + "\n"], JAM.policy.p39);
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
    shiftValue = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p23).length;
    sequence$$15 = JAM.call(sequence$$15.substring, sequence$$15, [sequence$$15.length - lookAhead, sequence$$15.length], JAM.policy.p40) + sequence$$15 + JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p23);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v234 = outputWindow.document;
  JAM.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p25);
  var v235 = outputWindow.document;
  JAM.call(v235.write, v235, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p39);
  var i$$9 = 0;
  var v252 = i$$9 < arrayOfItems.length;
  for (;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v483 = arrayOfItems[i$$9]
    }
    matchExp = JAM.call(v483.match, v483, [/\/.+\//], JAM.policy.p27) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v677 = arrayOfItems[i$$9]
    }
    var v484 = JAM.call(v677.match, v677, [/\)\D*\d+/], JAM.policy.p27).toString();
    cutDistance = parseFloat(JAM.call(v484.replace, v484, [/\)\D*/, ""], JAM.policy.p28));
    var v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p39);
    for (;v244;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v485 = matchPosition >= lowerLimit;
      if (v485) {
        v485 = matchPosition < upperLimit;
      }
      if (v485) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p39);
    }
    if (JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p27) != -1) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p28);
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
    var v768 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p26) {
      var v800 = arrayOfItems[i$$9]
    }
    var v781 = JAM.call(v800.match, v800, [/\([^\(]+\)/], JAM.policy.p27).toString();
    JAM.call(v250.write, v250, [v768 + JAM.call(v781.replace, v781, [/\(|\)/g, ""], JAM.policy.p28) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p39);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v252 = i$$9 < arrayOfItems.length;
  }
  var v253 = outputWindow.document;
  JAM.call(v253.write, v253, ["</tbody></table>\n"], JAM.policy.p25);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p25);
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p39);
  var i$$10 = 0;
  var v265 = i$$10 < arrayOfItems$$1.length;
  for (;v265;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v494 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = JAM.call(v494.match, v494, [/\/[^\/]+\//], JAM.policy.p27) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p39) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p39).length;
    }
    var percentage = 0;
    var v609 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v727 = arrayOfItems$$1[i$$10]
    }
    if (v609 - parseFloat(JAM.call(v727.match, v727, [/\d+/], JAM.policy.p27)) > 0) {
      var v260 = 100 * tempNumber;
      var v497 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v681 = arrayOfItems$$1[i$$10]
      }
      percentage = v260 / (v497 - parseFloat(JAM.call(v681.match, v681, [/\d+/], JAM.policy.p27)));
    }
    var v263 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v801 = arrayOfItems$$1[i$$10]
    }
    var v782 = JAM.call(v801.match, v801, [/\([^\(]+\)\b/], JAM.policy.p27).toString();
    JAM.call(v263.write, v263, ["<tr><td>" + JAM.call(v782.replace, v782, [/\(|\)/g, ""], JAM.policy.p28) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p22) + "</td></tr>\n"], JAM.policy.p39);
    i$$10 = i$$10 + 1;
    v265 = i$$10 < arrayOfItems$$1.length;
  }
  var v266 = outputWindow.document;
  JAM.call(v266.write, v266, ["</tbody></table>\n"], JAM.policy.p25);
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
    randNum$$1 = JAM.call(Math.floor, Math, [Math.random() * maxNum$$1], JAM.policy.p27);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p27);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p23);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p28);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v270 = outputWindow.document;
      JAM.call(v270.write, v270, [tempSeq + "\n"], JAM.policy.p39);
      tempSeq = "";
    }
    v273 = sequence$$17.length > 0;
  }
  var v274 = outputWindow.document;
  JAM.call(v274.write, v274, [tempSeq + "\n"], JAM.policy.p39);
  return true;
}
function identSim(theDocument) {
  var maxInput$$3 = 2E4;
  var theAlignment = "";
  var alignArray$$1 = new Array;
  var groupString = "";
  var arrayOfGroups = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  var longestTitle;
  if (testScript() == false) {
    return false;
  }
  var v506 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if (!v506) {
    v506 = checkTextLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
  }
  if (v506) {
    return false;
  }
  theAlignment = "X" + theDocument.forms[0].elements[0].value;
  alignArray$$1 = JAM.call(theAlignment.split, theAlignment, [/[>%#]/], JAM.policy.p27);
  if (earlyCheckAlign(alignArray$$1) == false) {
    return false;
  }
  var i$$11 = 1;
  var v294 = i$$11 < alignArray$$1.length;
  for (;v294;) {
    var v280 = titleArray;
    var v281 = i$$11 - 1;
    introspect(JAM.policy.p26) {
      var v510 = alignArray$$1[i$$11]
    }
    var v837 = JAM.call(v510.match, v510, [/[^\f\n\r]+[\f\n\r]/], JAM.policy.p27);
    introspect(JAM.policy.p13) {
      v280[v281] = v837;
    }
    var v282 = titleArray;
    var v283 = i$$11 - 1;
    var v732 = i$$11 - 1;
    introspect(JAM.policy.p26) {
      var v686 = titleArray[v732]
    }
    var v511 = filterFastaTitle(v686.toString());
    var v838 = JAM.call(v511.replace, v511, [/[\f\n\r]/g, ""], JAM.policy.p28);
    introspect(JAM.policy.p13) {
      v282[v283] = v838;
    }
    var v284 = titleArray;
    var v285 = i$$11 - 1;
    var v619 = i$$11 - 1;
    introspect(JAM.policy.p26) {
      var v512 = titleArray[v619]
    }
    var v839 = JAM.call(v512.substring, v512, [0, 20], JAM.policy.p23);
    introspect(JAM.policy.p13) {
      v284[v285] = v839;
    }
    if (i$$11 == 1) {
      var v513 = i$$11 - 1;
      introspect(JAM.policy.p26) {
        var v286 = titleArray[v513]
      }
      longestTitle = v286.length;
    } else {
      var v687 = i$$11 - 1;
      introspect(JAM.policy.p26) {
        var v620 = titleArray[v687]
      }
      if (v620.length > longestTitle) {
        var v515 = i$$11 - 1;
        introspect(JAM.policy.p26) {
          var v287 = titleArray[v515]
        }
        longestTitle = v287.length;
      }
    }
    var v290 = sequenceArray$$1;
    var v291 = i$$11 - 1;
    introspect(JAM.policy.p26) {
      var v516 = alignArray$$1[i$$11]
    }
    var v840 = JAM.call(v516.replace, v516, [/[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p28);
    introspect(JAM.policy.p13) {
      v290[v291] = v840;
    }
    var v292 = sequenceArray$$1;
    var v293 = i$$11 - 1;
    var v621 = i$$11 - 1;
    introspect(JAM.policy.p26) {
      var v517 = sequenceArray$$1[v621]
    }
    var v841 = filterAlignSeq(v517);
    introspect(JAM.policy.p13) {
      v292[v293] = v841;
    }
    i$$11 = i$$11 + 1;
    v294 = i$$11 < alignArray$$1.length;
  }
  if (checkAlign(titleArray, sequenceArray$$1) == false) {
    return false;
  }
  var v520 = theDocument.forms[0].elements[1].value;
  groupString = JAM.call(v520.replace, v520, [/\s/g, ""], JAM.policy.p28).toUpperCase();
  arrayOfGroups = JAM.call(groupString.split, groupString, [/,/], JAM.policy.p27);
  if (checkGroupInput(arrayOfGroups) == false) {
    return false;
  }
  openWindowAlign("Ident and Sim");
  openPre();
  writeIdentAndSim(titleArray, sequenceArray$$1, arrayOfGroups);
  closePre();
  closeWindow();
  return true;
}
function writeIdentAndSim(titleArray$$1, sequenceArray$$2, arrayOfGroups$$1) {
  var identical = 0;
  var similar = 0;
  var alignLength = 0;
  var k$$3 = 0;
  var v323 = k$$3 < sequenceArray$$2.length;
  for (;v323;) {
    var m = k$$3 + 1;
    var v322 = m < sequenceArray$$2.length;
    for (;v322;) {
      var i$$12 = 0;
      var v302 = i$$12 < sequenceArray$$2[0].length;
      for (;v302;) {
        alignLength = alignLength + 1;
        introspect(JAM.policy.p26) {
          var v734 = sequenceArray$$2[k$$3]
        }
        var v624 = JAM.call(v734.charAt, v734, [i$$12], JAM.policy.p39).toUpperCase();
        introspect(JAM.policy.p26) {
          var v735 = sequenceArray$$2[m]
        }
        var v525 = v624 == JAM.call(v735.charAt, v735, [i$$12], JAM.policy.p39).toUpperCase();
        if (v525) {
          introspect(JAM.policy.p26) {
            var v736 = sequenceArray$$2[k$$3]
          }
          v525 = JAM.call(v736.charAt, v736, [i$$12], JAM.policy.p39).toUpperCase() != "X";
        }
        if (v525) {
          introspect(JAM.policy.p26) {
            var v692 = sequenceArray$$2[k$$3]
          }
          var v526 = JAM.call(v692.charAt, v692, [i$$12], JAM.policy.p39) != "-";
          if (v526) {
            introspect(JAM.policy.p26) {
              var v693 = sequenceArray$$2[k$$3]
            }
            v526 = JAM.call(v693.charAt, v693, [i$$12], JAM.policy.p39) != ".";
          }
          if (v526) {
            identical = identical + 1;
          } else {
            alignLength = alignLength - 1;
          }
        } else {
          var j$$10 = 0;
          var v300 = j$$10 < arrayOfGroups$$1.length;
          for (;v300;) {
            introspect(JAM.policy.p26) {
              var v694 = arrayOfGroups$$1[j$$10]
            }
            introspect(JAM.policy.p26) {
              var v758 = sequenceArray$$2[k$$3]
            }
            var v528 = JAM.call(v694.search, v694, [JAM.call(v758.charAt, v758, [i$$12], JAM.policy.p39).toUpperCase()], JAM.policy.p39) != -1;
            if (v528) {
              introspect(JAM.policy.p26) {
                var v696 = arrayOfGroups$$1[j$$10]
              }
              introspect(JAM.policy.p26) {
                var v759 = sequenceArray$$2[m]
              }
              v528 = JAM.call(v696.search, v696, [JAM.call(v759.charAt, v759, [i$$12], JAM.policy.p39).toUpperCase()], JAM.policy.p39) != -1;
            }
            if (v528) {
              similar = similar + 1;
              break;
            }
            j$$10 = j$$10 + 1;
            v300 = j$$10 < arrayOfGroups$$1.length;
          }
        }
        i$$12 = i$$12 + 1;
        v302 = i$$12 < sequenceArray$$2[0].length;
      }
      var v303 = outputWindow.document;
      introspect(JAM.policy.p26) {
        var v739 = titleArray$$1[k$$3]
      }
      var v632 = "<b>Results for " + v739 + " vs ";
      introspect(JAM.policy.p26) {
        var v633 = titleArray$$1[m]
      }
      JAM.call(v303.write, v303, [v632 + v633 + ":</b>\n"], JAM.policy.p39);
      var v305 = outputWindow.document;
      JAM.call(v305.write, v305, ["  Alignment length: " + alignLength + "\n"], JAM.policy.p39);
      var v307 = outputWindow.document;
      JAM.call(v307.write, v307, ["Identical residues: " + identical + "\n"], JAM.policy.p39);
      var v309 = outputWindow.document;
      JAM.call(v309.write, v309, ["  Similar residues: " + similar + "\n"], JAM.policy.p39);
      if (identical == 0) {
        var v311 = outputWindow.document;
        JAM.call(v311.write, v311, ["  Percent identity: " + 0 + "\n"], JAM.policy.p39);
      } else {
        var v313 = outputWindow.document;
        var v699 = identical / alignLength * 100;
        JAM.call(v313.write, v313, ["  Percent identity: " + JAM.call(v699.toFixed, v699, [2], JAM.policy.p22) + "\n"], JAM.policy.p39);
      }
      var v537 = similar == 0;
      if (v537) {
        v537 = identical == 0;
      }
      if (v537) {
        var v316 = outputWindow.document;
        JAM.call(v316.write, v316, ["Percent similarity: " + 0 + "\n"], JAM.policy.p39);
      } else {
        var v318 = outputWindow.document;
        var v700 = (identical + similar) / alignLength * 100;
        JAM.call(v318.write, v318, ["Percent similarity: " + JAM.call(v700.toFixed, v700, [2], JAM.policy.p22) + "\n"], JAM.policy.p39);
      }
      var v321 = outputWindow.document;
      JAM.call(v321.write, v321, ["\n"], JAM.policy.p25);
      identical = 0;
      similar = 0;
      alignLength = 0;
      m = m + 1;
      v322 = m < sequenceArray$$2.length;
    }
    k$$3 = k$$3 + 1;
    v323 = k$$3 < sequenceArray$$2.length;
  }
  return true;
}
JAM.set(document, "onload", v2);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p25), "onclick", v3);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p25), "onclick", v4)

