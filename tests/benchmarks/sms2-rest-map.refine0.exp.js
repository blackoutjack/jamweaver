// sms2-rest-map.js
function v13() {
  document.forms[0].elements[0].value = " ";
  return;
}
function v12() {
  try {
    restMap(document);
  } catch (e$$5) {
    alert("The following error was encountered: " + e$$5);
  }
  return;
}
function v11() {
  document.main_form.main_submit.focus();
  return;
}
function v10(start$$10, stop$$6) {
  function v9(str$$11, p1$$5, offset$$13, s$$7) {
    return JAM.call(p1$$5.replace, p1$$5, [/./g, " "], JAM.policy.p28);
  }
  function v8(str$$10, p1$$4, offset$$12, s$$6) {
    return JAM.call(p1$$4.replace, p1$$4, [/./g, " "], JAM.policy.p28);
  }
  var v17 = outputWindow.document;
  JAM.call(v17.write, v17, [rightNum(this.positionLabel, "", 8, "")], JAM.policy.p39);
  var v456 = this.characters;
  var v19 = JAM.call(v456.slice, v456, [start$$10, stop$$6], JAM.policy.p40);
  var text$$15 = JAM.call(v19.join, v19, [""], JAM.policy.p23);
  text$$15 = JAM.call(text$$15.replace, text$$15, [/^(\d+)/g, v8], JAM.policy.p28);
  text$$15 = JAM.call(text$$15.replace, text$$15, [/(\d+)$/g, v9], JAM.policy.p28);
  var v20 = outputWindow.document;
  JAM.call(v20.write, v20, [text$$15 + "\n"], JAM.policy.p39);
  this.positionLabel = this.positionLabel + (stop$$6 - start$$10);
  return;
}
function v7(start$$9, stop$$5) {
  var v24 = outputWindow.document;
  JAM.call(v24.write, v24, [rightNum(this.positionLabel, "", 8, "")], JAM.policy.p39);
  var v26 = outputWindow.document;
  var v884 = this.characters;
  var v743 = JAM.call(v884.slice, v884, [start$$9, stop$$5], JAM.policy.p40);
  JAM.call(v26.write, v26, [JAM.call(v743.join, v743, [""], JAM.policy.p23) + "\n"], JAM.policy.p39);
  this.positionLabel = this.positionLabel + (stop$$5 - start$$9);
  return;
}
function v6(start$$8, stop$$4) {
  var v744 = this.characters;
  var v459 = JAM.call(v744.slice, v744, [start$$8, stop$$4], JAM.policy.p40);
  var textToWrite = JAM.call(v459.join, v459, [""], JAM.policy.p23) + "\n";
  if (JAM.call(textToWrite.search, textToWrite, [/\w/], JAM.policy.p27) != -1) {
    var v31 = outputWindow.document;
    JAM.call(v31.write, v31, [rightNum(this.positionLabel, "", 8, "")], JAM.policy.p39);
    this.positionLabel = this.positionLabel + JAM.call(textToWrite.match, textToWrite, [/[A-Z]/g], JAM.policy.p27).length;
    var v35 = outputWindow.document;
    JAM.call(v35.write, v35, [textToWrite], JAM.policy.p39);
  }
  return;
}
function v5(start$$7, stop$$3) {
  var v37 = outputWindow.document;
  JAM.call(v37.write, v37, [rightNum(this.positionLabel, "", 8, "")], JAM.policy.p39);
  var v39 = outputWindow.document;
  var v885 = this.characters;
  var v745 = JAM.call(v885.slice, v885, [start$$7, stop$$3], JAM.policy.p40);
  JAM.call(v39.write, v39, [JAM.call(v745.join, v745, [""], JAM.policy.p23) + "\n"], JAM.policy.p39);
  this.positionLabel = this.positionLabel + (stop$$3 - start$$7) / 3;
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
  var v46 = i$$1 < arrayOfTitles.length;
  for (;v46;) {
    introspect(JAM.policy.p26) {
      var v982 = arrayOfTitles[i$$1]
    }
    var v746 = JAM.call(v982.search, v982, [/\S/], JAM.policy.p27) == -1;
    if (!v746) {
      introspect(JAM.policy.p26) {
        var v983 = arrayOfSequences[i$$1]
      }
      v746 = JAM.call(v983.search, v983, [/\S/], JAM.policy.p27) == -1;
    }
    var v468 = v746;
    if (!v468) {
      introspect(JAM.policy.p26) {
        var v889 = arrayOfSequences[i$$1]
      }
      v468 = v889.length != lengthOfAlign;
    }
    if (v468) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1 = i$$1 + 1;
    v46 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v984 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p27) == -1;
  if (!v984) {
    v984 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p27) == -1;
  }
  var v890 = v984;
  if (!v890) {
    v890 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p27) == -1;
  }
  var v749 = v890;
  if (!v749) {
    v749 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p27) == -1;
  }
  var v470 = v749;
  if (!v470) {
    v470 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p27) == -1;
  }
  if (v470) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v752 = formElement.value;
  if (JAM.call(v752.search, v752, [/\S/], JAM.policy.p27) == -1) {
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
  var v51 = z$$2 < arrayOfPatterns.length;
  for (;v51;) {
    introspect(JAM.policy.p26) {
      var v753 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(v753.search, v753, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p27) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    introspect(JAM.policy.p26) {
      var v754 = arrayOfPatterns[z$$2]
    }
    if (moreExpressionCheck(v754) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    v51 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v60 = j < arrayOfPatterns.length;
  for (;v60;) {
    var v54 = geneticCodeMatchExp;
    var v55 = j;
    introspect(JAM.policy.p26) {
      var v893 = arrayOfPatterns[j]
    }
    var v477 = JAM.call(v893.match, v893, [/\/.+\//], JAM.policy.p27) + "gi";
    if (JAM.isEval(eval)) {
      var v1525 = eval("introspect(JAM.policy.pFull) { " + v477 + " }")
    } else {
      var v1525 = JAM.call(eval, null, [v477])
    }
    introspect(JAM.policy.p13) {
      v54[v55] = v1525;
    }
    var v56 = geneticCodeMatchResult;
    var v57 = j;
    introspect(JAM.policy.p26) {
      var v756 = arrayOfPatterns[j]
    }
    var v1526 = JAM.call(v756.match, v756, [/=[a-zA-Z\*]/], JAM.policy.p27).toString();
    introspect(JAM.policy.p13) {
      v56[v57] = v1526;
    }
    var v58 = geneticCodeMatchResult;
    var v59 = j;
    introspect(JAM.policy.p26) {
      var v479 = geneticCodeMatchResult[j]
    }
    var v1527 = JAM.call(v479.replace, v479, [/=/g, ""], JAM.policy.p28);
    introspect(JAM.policy.p13) {
      v58[v59] = v1527;
    }
    j = j + 1;
    v60 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v67 = i$$2 <= testSequence.length - 3;
  for (;v67;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p28);
    j = 0;
    var v65 = j < geneticCodeMatchExp.length;
    for (;v65;) {
      introspect(JAM.policy.p26) {
        var v758 = geneticCodeMatchExp[j]
      }
      if (JAM.call(codon.search, codon, [v758], JAM.policy.p39) != -1) {
        if (oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      v65 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v67 = i$$2 <= testSequence.length - 3;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v69 = z$$3 < arrayOfPatterns$$1.length;
  for (;v69;) {
    introspect(JAM.policy.p26) {
      var v760 = arrayOfPatterns$$1[z$$3]
    }
    if (JAM.call(v760.search, v760, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p27) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    v69 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v73 = i$$3 < arrayOfPatterns$$1.length;
  for (;v73;) {
    introspect(JAM.policy.p26) {
      var v761 = arrayOfPatterns$$1[i$$3]
    }
    var re = new RegExp("[" + v761 + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v72 = j$$1 < arrayOfPatterns$$1.length;
    for (;v72;) {
      introspect(JAM.policy.p26) {
        var v762 = arrayOfPatterns$$1[j$$1]
      }
      if (JAM.call(v762.search, v762, [re], JAM.policy.p39) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1 = j$$1 + 1;
      v72 = j$$1 < arrayOfPatterns$$1.length;
    }
    i$$3 = i$$3 + 1;
    v73 = i$$3 < arrayOfPatterns$$1.length;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v76 = z$$4 < arrayOfPatterns$$2.length;
  for (;v76;) {
    introspect(JAM.policy.p26) {
      var v763 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(v763.search, v763, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p27) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    introspect(JAM.policy.p26) {
      var v764 = arrayOfPatterns$$2[z$$4]
    }
    if (moreExpressionCheck(v764) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    v76 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v894 = getSequenceFromFasta(text$$7);
  if (JAM.call(v894.replace, v894, [/[^A-Za-z]/g, ""], JAM.policy.p28).length > maxInput) {
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
  var v81 = outputWindow.document;
  JAM.call(v81.write, v81, ["</form>"], JAM.policy.p23);
  return true;
}
function closePre() {
  var v82 = outputWindow.document;
  JAM.call(v82.write, v82, ["</div>"], JAM.policy.p23);
  var v83 = outputWindow.document;
  JAM.call(v83.write, v83, ["</pre>\n"], JAM.policy.p23);
  return;
}
function closeTextArea() {
  var v84 = outputWindow.document;
  JAM.call(v84.write, v84, ["</textarea>"], JAM.policy.p23);
  return true;
}
function closeWindow() {
  var v85 = outputWindow.document;
  JAM.call(v85.write, v85, ["</body>\n</html>\n"], JAM.policy.p23);
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
  var v89 = i$$4 < alignArray.length;
  for (;v89;) {
    introspect(JAM.policy.p26) {
      var v766 = alignArray[i$$4]
    }
    if (JAM.call(v766.search, v766, [/[^\s]+\s/], JAM.policy.p27) == -1) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4 = i$$4 + 1;
    v89 = i$$4 < alignArray.length;
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
    var v91 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p39);
    for (;v91;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p39);
      v91 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p39);
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
  stringToReturn = stringToReturn + ' starting "' + JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p22) + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p27) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p22) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p27) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p22) + '"';
  return'<div class="info">' + stringToReturn$$1 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = new Array(arrayOfPatterns$$3.length);
  var j$$2 = 0;
  var v109 = j$$2 < arrayOfPatterns$$3.length;
  for (;v109;) {
    var v107 = geneticCodeMatchExp$$1;
    var v108 = j$$2;
    introspect(JAM.policy.p26) {
      var v895 = arrayOfPatterns$$3[j$$2]
    }
    var v526 = JAM.call(v895.match, v895, [/\/.+\//], JAM.policy.p27) + "gi";
    if (JAM.isEval(eval)) {
      var v1528 = eval("introspect(JAM.policy.pFull) { " + v526 + " }")
    } else {
      var v1528 = JAM.call(eval, null, [v526])
    }
    introspect(JAM.policy.p13) {
      v107[v108] = v1528;
    }
    j$$2 = j$$2 + 1;
    v109 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v115 = j$$3 < arrayOfPatterns$$4.length;
  for (;v115;) {
    var v111 = geneticCodeMatchResult$$1;
    var v112 = j$$3;
    introspect(JAM.policy.p26) {
      var v768 = arrayOfPatterns$$4[j$$3]
    }
    var v1529 = JAM.call(v768.match, v768, [/=[a-zA-Z\*]/], JAM.policy.p27).toString();
    introspect(JAM.policy.p13) {
      v111[v112] = v1529;
    }
    var v113 = geneticCodeMatchResult$$1;
    var v114 = j$$3;
    introspect(JAM.policy.p26) {
      var v530 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1530 = JAM.call(v530.replace, v530, [/=/g, ""], JAM.policy.p28);
    introspect(JAM.policy.p13) {
      v113[v114] = v1530;
    }
    j$$3 = j$$3 + 1;
    v115 = j$$3 < arrayOfPatterns$$4.length;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p27) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"';
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p22) + '"';
  return'<div class="info">' + stringToReturn$$2 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p27) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"';
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p22) + '"';
  return'<div class="info">' + stringToReturn$$3 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p27) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p22) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p27) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleTwo$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p22) + '"';
  return'<div class="info">' + stringToReturn$$4 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v136 = j$$4 < lengthOut;
  for (;v136;) {
    tempNum = JAM.call(Math.floor, Math, [Math.random() * components.length], JAM.policy.p27);
    introspect(JAM.policy.p26) {
      tempChar = components[tempNum];
    }
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p39);
    j$$4 = j$$4 + 1;
    v136 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p23);
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
  var v1242 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p27) != -1;
  if (!v1242) {
    v1242 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p27) != -1;
  }
  var v1215 = v1242;
  if (!v1215) {
    v1215 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p27) != -1;
  }
  var v1188 = v1215;
  if (!v1188) {
    v1188 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p27) != -1;
  }
  var v1152 = v1188;
  if (!v1152) {
    v1152 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p27) != -1;
  }
  var v1104 = v1152;
  if (!v1104) {
    v1104 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p27) != -1;
  }
  var v1055 = v1104;
  if (!v1055) {
    v1055 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p27) != -1;
  }
  var v987 = v1055;
  if (!v987) {
    v987 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p27) != -1;
  }
  var v896 = v987;
  if (!v896) {
    v896 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p27) != -1;
  }
  var v770 = v896;
  if (!v770) {
    v770 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p27) != -1;
  }
  var v558 = v770;
  if (!v558) {
    v558 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p27) != -1;
  }
  if (v558) {
    return false;
  }
  return true;
}
function openForm() {
  var v141 = outputWindow.document;
  JAM.call(v141.write, v141, ['<form action="">\n'], JAM.policy.p23);
  return true;
}
function openPre() {
  var v142 = outputWindow.document;
  JAM.call(v142.write, v142, ["<pre>"], JAM.policy.p23);
  var v143 = outputWindow.document;
  JAM.call(v143.write, v143, ['<div class="pre">'], JAM.policy.p23);
  return;
}
function openTextArea() {
  var v144 = outputWindow.document;
  JAM.call(v144.write, v144, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p23);
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p25);
  outputWindow.focus();
  var v145 = outputWindow.document;
  JAM.call(v145.write, v145, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p39);
  if (isColor) {
    var v147 = outputWindow.document;
    JAM.call(v147.write, v147, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p39);
  } else {
    var v149 = outputWindow.document;
    JAM.call(v149.write, v149, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p39);
  }
  var v151 = outputWindow.document;
  JAM.call(v151.write, v151, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"], JAM.policy.p39);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p25);
  outputWindow.focus();
  var v153 = outputWindow.document;
  JAM.call(v153.write, v153, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p39);
  if (isBackground) {
    var v155 = outputWindow.document;
    JAM.call(v155.write, v155, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p39);
  } else {
    var v157 = outputWindow.document;
    JAM.call(v157.write, v157, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p39);
  }
  var v159 = outputWindow.document;
  JAM.call(v159.write, v159, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"], JAM.policy.p39);
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
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p23);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v162 = j$$5 < lengthOfColumn;
  for (;v162;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v162 = j$$5 < lengthOfColumn;
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
  if (JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p24) != 2489.824) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  if (JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p24) != 2489.8) {
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
  var v907 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p27) == -1;
  if (!v907) {
    v907 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p27) == -1;
  }
  var v781 = v907;
  if (!v781) {
    v781 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p27) == -1;
  }
  var v573 = v781;
  if (!v573) {
    v573 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p27) == -1;
  }
  if (v573) {
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
  var v910 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p27) == -1;
  if (!v910) {
    v910 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p27) == -1;
  }
  var v784 = v910;
  if (!v784) {
    v784 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p27) == -1;
  }
  var v578 = v784;
  if (!v578) {
    v578 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p27) == -1;
  }
  if (v578) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v913 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p27) == -1;
  if (!v913) {
    v913 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p27) == -1;
  }
  var v787 = v913;
  if (!v787) {
    v787 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p27) == -1;
  }
  var v579 = v787;
  if (!v579) {
    v579 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p27) == -1;
  }
  if (v579) {
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
  var v916 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p27) == -1;
  if (!v916) {
    v916 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p27) == -1;
  }
  var v790 = v916;
  if (!v790) {
    v790 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p27) == -1;
  }
  var v581 = v790;
  if (!v581) {
    v581 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p27) == -1;
  }
  if (v581) {
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
  var v190 = i$$5 < stopBase;
  for (;v190;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v187 = j$$6 <= basePerLine / groupSize;
    for (;v187;) {
      var v186 = k < groupSize;
      for (;v186;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p39);
        k = k + 1;
        v186 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v187 = j$$6 <= basePerLine / groupSize;
    }
    var v188 = outputWindow.document;
    JAM.call(v188.write, v188, [lineOfText + "\n"], JAM.policy.p39);
    lineOfText = "";
    v190 = i$$5 < stopBase;
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
    var v586 = adjustment < 0;
    if (v586) {
      v586 = adjusted >= 0;
    }
    if (v586) {
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
  var v224 = i$$6 < stopBase$$2;
  for (;v224;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v200 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for (;v200;) {
      var v195 = k$$1 < groupSize$$2;
      for (;v195;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p39);
        k$$1 = k$$1 + 1;
        v195 = k$$1 < groupSize$$2;
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
      v200 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v201 = outputWindow.document;
      JAM.call(v201.write, v201, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p39);
      if (strands$$1 == "two") {
        var v203 = outputWindow.document;
        JAM.call(v203.write, v203, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p39);
        var v205 = outputWindow.document;
        JAM.call(v205.write, v205, ["\n"], JAM.policy.p23);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v207 = outputWindow.document;
        JAM.call(v207.write, v207, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p39);
        if (strands$$1 == "two") {
          var v209 = outputWindow.document;
          JAM.call(v209.write, v209, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p39);
          var v211 = outputWindow.document;
          JAM.call(v211.write, v211, ["\n"], JAM.policy.p23);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v213 = outputWindow.document;
          JAM.call(v213.write, v213, [aboveNum + "\n"], JAM.policy.p39);
          var v215 = outputWindow.document;
          JAM.call(v215.write, v215, [lineOfText$$1 + "\n"], JAM.policy.p39);
          if (strands$$1 == "two") {
            var v217 = outputWindow.document;
            JAM.call(v217.write, v217, [complement(lineOfText$$1) + "\n"], JAM.policy.p39);
            var v219 = outputWindow.document;
            JAM.call(v219.write, v219, ["\n"], JAM.policy.p23);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v224 = i$$6 < stopBase$$2;
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
  var v245 = i$$7 < stopBase$$3;
  for (;v245;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v233 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for (;v233;) {
      var v228 = k$$2 < groupSize$$3;
      for (;v228;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p39);
        k$$2 = k$$2 + 1;
        v228 = k$$2 < groupSize$$3;
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
      v233 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v234 = outputWindow.document;
      JAM.call(v234.write, v234, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p39);
    } else {
      if (numberPosition$$2 == "right") {
        var v236 = outputWindow.document;
        JAM.call(v236.write, v236, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p39);
      } else {
        if (numberPosition$$2 == "above") {
          var v238 = outputWindow.document;
          JAM.call(v238.write, v238, [aboveNum$$1 + "\n"], JAM.policy.p39);
          var v240 = outputWindow.document;
          JAM.call(v240.write, v240, [lineOfText$$2 + "\n"], JAM.policy.p39);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v245 = i$$7 < stopBase$$3;
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
  var v801 = sequence$$13.length <= firstIndexToMutate;
  if (!v801) {
    v801 = lastIndexToMutate < 0;
  }
  var v603 = v801;
  if (!v603) {
    v603 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v603) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v254 = i$$8 < numMut;
  for (;v254;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [Math.random() * maxNum], JAM.policy.p27);
    var v605 = randNum < firstIndexToMutate;
    if (!v605) {
      v605 = randNum > lastIndexToMutate;
    }
    if (v605) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v254 = i$$8 < numMut;
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
        var v609 = components$$1[componentsIndex]
      }
      if (v609 != currentChar) {
        needNewChar = false;
      }
    }
    var v610 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p22);
    introspect(JAM.policy.p26) {
      var v611 = components$$1[componentsIndex]
    }
    sequence$$13 = v610 + v611 + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p40);
    i$$8 = i$$8 + 1;
    v254 = i$$8 < numMut;
  }
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, [addReturns(sequence$$13)], JAM.policy.p39);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v261 = j$$9 < lengthOut$$1;
  for (;v261;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [Math.random() * components$$2.length], JAM.policy.p27);
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v258 = outputWindow.document;
      JAM.call(v258.write, v258, [sequence$$14 + "\n"], JAM.policy.p39);
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v261 = j$$9 < lengthOut$$1;
  }
  var v262 = outputWindow.document;
  JAM.call(v262.write, v262, [sequence$$14 + "\n"], JAM.policy.p39);
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
    shiftValue = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p22).length;
    sequence$$15 = JAM.call(sequence$$15.substring, sequence$$15, [sequence$$15.length - lookAhead, sequence$$15.length], JAM.policy.p40) + sequence$$15 + JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p22);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v268 = outputWindow.document;
  JAM.call(v268.write, v268, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p23);
  var v269 = outputWindow.document;
  JAM.call(v269.write, v269, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p39);
  var i$$9 = 0;
  var v286 = i$$9 < arrayOfItems.length;
  for (;v286;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v620 = arrayOfItems[i$$9]
    }
    matchExp = JAM.call(v620.match, v620, [/\/.+\//], JAM.policy.p27) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v925 = arrayOfItems[i$$9]
    }
    var v621 = JAM.call(v925.match, v925, [/\)\D*\d+/], JAM.policy.p27).toString();
    cutDistance = parseFloat(JAM.call(v621.replace, v621, [/\)\D*/, ""], JAM.policy.p28));
    var v278 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p39);
    for (;v278;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v622 = matchPosition >= lowerLimit;
      if (v622) {
        v622 = matchPosition < upperLimit;
      }
      if (v622) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v278 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p39);
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
    var v284 = outputWindow.document;
    var v1111 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p26) {
      var v1222 = arrayOfItems[i$$9]
    }
    var v1160 = JAM.call(v1222.match, v1222, [/\([^\(]+\)/], JAM.policy.p27).toString();
    JAM.call(v284.write, v284, [v1111 + JAM.call(v1160.replace, v1160, [/\(|\)/g, ""], JAM.policy.p28) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p39);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v286 = i$$9 < arrayOfItems.length;
  }
  var v287 = outputWindow.document;
  JAM.call(v287.write, v287, ["</tbody></table>\n"], JAM.policy.p23);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v288 = outputWindow.document;
  JAM.call(v288.write, v288, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p23);
  var v289 = outputWindow.document;
  JAM.call(v289.write, v289, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p39);
  var i$$10 = 0;
  var v299 = i$$10 < arrayOfItems$$1.length;
  for (;v299;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v631 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = JAM.call(v631.match, v631, [/\/[^\/]+\//], JAM.policy.p27) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p39) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p39).length;
    }
    var percentage = 0;
    var v811 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v1008 = arrayOfItems$$1[i$$10]
    }
    if (v811 - parseFloat(JAM.call(v1008.match, v1008, [/\d+/], JAM.policy.p27)) > 0) {
      var v294 = 100 * tempNumber;
      var v634 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v929 = arrayOfItems$$1[i$$10]
      }
      percentage = v294 / (v634 - parseFloat(JAM.call(v929.match, v929, [/\d+/], JAM.policy.p27)));
    }
    var v297 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v1223 = arrayOfItems$$1[i$$10]
    }
    var v1161 = JAM.call(v1223.match, v1223, [/\([^\(]+\)\b/], JAM.policy.p27).toString();
    JAM.call(v297.write, v297, ["<tr><td>" + JAM.call(v1161.replace, v1161, [/\(|\)/g, ""], JAM.policy.p28) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p24) + "</td></tr>\n"], JAM.policy.p39);
    i$$10 = i$$10 + 1;
    v299 = i$$10 < arrayOfItems$$1.length;
  }
  var v300 = outputWindow.document;
  JAM.call(v300.write, v300, ["</tbody></table>\n"], JAM.policy.p23);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v307 = sequence$$17.length > 0;
  for (;v307;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [Math.random() * maxNum$$1], JAM.policy.p27);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p27);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p22);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p28);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v304 = outputWindow.document;
      JAM.call(v304.write, v304, [tempSeq + "\n"], JAM.policy.p39);
      tempSeq = "";
    }
    v307 = sequence$$17.length > 0;
  }
  var v308 = outputWindow.document;
  JAM.call(v308.write, v308, [tempSeq + "\n"], JAM.policy.p39);
  return true;
}
function getRestrictionSiteString(type$$25) {
  if (type$$25.toLowerCase() == "standard") {
    return "/aggcct/ (AatI agg|cct)3," + "/gacgtc/ (AatII gacgt|c)1," + "/tgcgca/ (Acc16I tgc|gca)3," + "/cgcg/ (AccII cg|cg)2," + "/tccgga/ (AccIII t|ccgga)5," + "/aacgtt/ (AclI aa|cgtt)4," + "/cacgtg/ (AcvI cac|gtg)3," + "/gtac/ (AfaI gt|ac)2," + "/agcgct/ (AfeI agc|gct)3," + "/cttaag/ (AflII c|ttaag)5," + "/accggt/ (AgeI a|ccggt)5," + "/actagt/ (AhlI a|ctagt)5," + "/gtgcac/ (Alw441 g|tgcac)5," + "/agct/ (AluI ag|ct)2," + "/agcgct/ (Aor51HI agc|gct)3," + "/gggccc/ (ApaI gggcc|c)1," + "/gtgcac/ (ApaLI g|tgcac)5," + 
    "/ggcgcgcc/ (AscI gg|cgcgcc)6," + "/attaat/ (AseI at|taat)4," + "/ggtacc/ (Asp718I g|gtacc)5," + "/ttcgaa/ (AsuII tt|cgaa)4," + "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5," + "/tgcgca/ (AviII tgc|gca)3," + "/cctagg/ (AvrII c|ctagg)5," + "/tggcca/ (BalI tgg|cca)3," + "/ggatcc/ (BamHI g|gatcc)5," + "/atcgat/ (BanIII at|cgat)4," + "/ggcgcc/ (BbeI ggcgc|c)1," + "/cacgtg/ (BbrPI cac|gtg)3," + "/gcatgc/ (BbuI gcatg|c)1," + "/actagt/ (BcuI a|ctagt)5," + "/tgatca/ (BclI t|gatca)5," + "/ctag/ (BfaI c|tag)3," + 
    "/cttaag/ (BfrI c|ttaag)5," + "/atgcat/ (BfrBI atg|cat)3," + "/agatct/ (BglII a|gatct)5," + "/cctagg/ (BlnI c|ctagg)5," + "/atcgat/ (BseCI at|cgat)4," + "/gcgcgc/ (BsePI g|cgcgc)5," + "/cggccg/ (BseX3I c|ggccg)5," + "/accggt/ (BshTI a|ccggt)5," + "/tgtaca/ (Bsp1407I t|gtaca)5," + "/ccatgg/ (Bsp19I c|catgg)5," + "/atcgat/ (BspDI at|cgat)4," + "/tccgga/ (BspEI t|ccgga)5," + "/tgtaca/ (BsrGI t|gtaca)5," + "/gcgcgc/ (BssHII g|cgcgc)5," + "/cgcg/ (BstUI cg|cg)2," + "/atcgat/ (ClaI at|cgat)4," + "/gatc/ (DpnII |gatc)4," + 
    "/tttaaa/ (DraI ttt|aaa)3," + "/cggccg/ (EagI c|ggccg)5," + "/gaattc/ (EcoRI g|aattc)5," + "/gatatc/ (EcoRV gat|atc)3," + "/ggcgcc/ (EgeI ggc|gcc)3," + "/ggccggcc/ (FseI ggccgg|cc)2," + "/tgcgca/ (FspI tgc|gca)3," + "/ggcc/ (HaeIII gg|cc)2," + "/gt[cty][agr]ac/ (HincII gty|rac)3," + "/aagctt/ (HindIII a|agctt)5," + "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4," + "/gttaac/ (HpaI gtt|aac)3," + "/ccgg/ (HpaII c|cgg)3," + "/ggcgcc/ (KasI g|gcgcc)5," + "/ggtacc/ (KpnI ggtac|c)1," + "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5," + 
    "/caattg/ (MfeI c|aattg)5," + "/acgcgt/ (MluI a|cgcgt)5," + "/tggcca/ (MscI tgg|cca)3," + "/ttaa/ (MseI t|taa)3," + "/ccgg/ (MspI c|cgg)3," + "/gccggc/ (NaeI gcc|ggc)3," + "/ggcgcc/ (NarI gg|cgcc)4," + "/ccatgg/ (NcoI c|catgg)5," + "/catatg/ (NdeI ca|tatg)4," + "/gatc/ (NdeII |gatc)4," + "/gccggc/ (NgoMIV g|ccggc)5," + "/gctagc/ (NheI g|ctagc)5," + "/catg/ (NlaIII catg|)0," + "/gcggccgc/ (NotI gc|ggccgc)6," + "/tcgcga/ (NruI tcg|cga)3," + "/atgcat/ (NsiI atgca|t)1," + "/ttaattaa/ (PacI ttaat|taa)3," + 
    "/acatgt/ (PciI a|catgt)5," + "/ggcc/ (PhoI gg|cc)2," + "/gtttaaac/ (PmeI gttt|aaac)4," + "/cacgtg/ (PmlI cac|gtg)3," + "/ttataa/ (PsiI tta|taa)3," + "/ctgcag/ (PstI ctgca|g)1," + "/cgatcg/ (PvuI cgat|cg)2," + "/cagctg/ (PvuII cag|ctg)3," + "/gtac/ (RsaI gt|ac)2," + "/gagctc/ (SacI gagct|c)1," + "/ccgcgg/ (SacII ccgc|gg)2," + "/gtcgac/ (SalI g|tcgac)5," + "/cctgcagg/ (SbfI cctgca|gg)2," + "/agtact/ (ScaI agt|act)3," + "/ggcgcc/ (SfoI ggc|gcc)3," + "/cccggg/ (SmaI ccc|ggg)3," + "/tacgta/ (SnaBI tac|gta)3," + 
    "/actagt/ (SpeI a|ctagt)5," + "/gcatgc/ (SphI gcatg|c)1," + "/aatatt/ (SspI aat|att)3," + "/gagctc/ (SstI gagct|c)1," + "/ccgcgg/ (SstII ccgc|gg)2," + "/aggcct/ (StuI agg|cct)3," + "/atttaaat/ (SwaI attt|aaat)4," + "/tcga/ (TaqI t|cga)3," + "/ctcgag/ (TliI c|tcgag)5," + "/attaat/ (VspI at|taat)4," + "/tctaga/ (XbaI t|ctaga)5," + "/ctcgag/ (XhoI c|tcgag)5," + "/cccggg/ (XmaI c|ccggg)5";
  }
  return true;
}
function getGeneticCodeString(type$$26) {
  var v644 = type$$26.toLowerCase() == "standard";
  if (!v644) {
    v644 = type$$26.toLowerCase() == "transl_table=1";
  }
  if (v644) {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=2") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + "/[tu]g[agr]/=W," + 
    "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|ag[agr]/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=3") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/[tu][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + "/[tu]g[agr]/=W," + 
    "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=4") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=5") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=6") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]ga/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=9") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aag/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[atcuwmhy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=10") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=11") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=12") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=13") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=14") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aag/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[atcuwmhy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[atcuwmhy]/=Y," + "/[tu]ag/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=15") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]|[tu]ag|[tcuy]ag/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu][agr]a/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=16") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu][agr]a/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=21") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aag/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[atcuwmhy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=22") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[cgtyskb]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu][agcrsmv]a/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=23") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + "/[tu]gg/=W," + 
    "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*";
  }
  return true;
}
function restMap(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  if (testScript() == false) {
    return false;
  }
  var restrictionSiteCollection;
  var v837 = theDocument.forms[0].elements[6].options;
  var v838 = theDocument.forms[0].elements[6].selectedIndex;
  introspect(JAM.policy.p26) {
    var v679 = v837[v838]
  }
  var geneticCode = getGeneticCodeString(v679.value);
  var restrictionSites = getRestrictionSiteString("standard");
  var v680 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if (!v680) {
    v680 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
  }
  if (v680) {
    return false;
  }
  geneticCode = JAM.call(geneticCode.split, geneticCode, [/,/], JAM.policy.p27);
  if (checkGeneticCode(geneticCode) == false) {
    return false;
  }
  restrictionSites = JAM.call(restrictionSites.split, restrictionSites, [/,/], JAM.policy.p27);
  if (checkRestPatterns(restrictionSites) == false) {
    return false;
  }
  var isColor$$1;
  var v953 = theDocument.forms[0].elements[8].options;
  var v954 = theDocument.forms[0].elements[8].selectedIndex;
  introspect(JAM.policy.p26) {
    var v842 = v953[v954]
  }
  if (v842.value == "color") {
    isColor$$1 = true;
  } else {
    isColor$$1 = false;
  }
  _openWindow("Restriction Map", isColor$$1);
  var v352 = outputWindow.document;
  JAM.call(v352.write, v352, ['<span class="one">' + "cuts once" + "</span><br />\n"], JAM.policy.p39);
  var v354 = outputWindow.document;
  JAM.call(v354.write, v354, ['<span class="two">' + "cuts twice" + "</span><br />\n"], JAM.policy.p39);
  var v356 = outputWindow.document;
  JAM.call(v356.write, v356, ["\n"], JAM.policy.p23);
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  var i$$11 = 0;
  var v368 = i$$11 < arrayOfFasta$$1.length;
  for (;v368;) {
    introspect(JAM.policy.p26) {
      var v358 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v358);
    introspect(JAM.policy.p26) {
      var v359 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = getTitleFromFasta(v359);
    newDna = removeNonDna(newDna);
    openPre();
    var v360 = outputWindow.document;
    var v956 = theDocument.forms[0].elements[7].options;
    var v957 = theDocument.forms[0].elements[7].selectedIndex;
    introspect(JAM.policy.p26) {
      var v844 = v956[v957]
    }
    JAM.call(v360.write, v360, [getInfoFromTitleAndSequenceAndTopology(title$$9, newDna, v844.value)], JAM.policy.p39);
    var v845 = theDocument.forms[0].elements[7].options;
    var v846 = theDocument.forms[0].elements[7].selectedIndex;
    introspect(JAM.policy.p26) {
      var v689 = v845[v846]
    }
    restrictionSiteCollection = findRestrictionSites(newDna, restrictionSites, v689.value);
    restrictionSiteCollection.sortRestrictionSites();
    var v847 = theDocument.forms[0].elements[4].options;
    var v848 = theDocument.forms[0].elements[4].selectedIndex;
    introspect(JAM.policy.p26) {
      var v690 = v847[v848]
    }
    var v363 = v690.value;
    var v849 = theDocument.forms[0].elements[5].options;
    var v850 = theDocument.forms[0].elements[5].selectedIndex;
    introspect(JAM.policy.p26) {
      var v691 = v849[v850]
    }
    layoutRestTrans(newDna, geneticCode, restrictionSiteCollection, v363, v691.value);
    var v365 = outputWindow.document;
    JAM.call(v365.write, v365, ["\n"], JAM.policy.p23);
    closePre();
    var v851 = theDocument.forms[0].elements[7].options;
    var v852 = theDocument.forms[0].elements[7].selectedIndex;
    introspect(JAM.policy.p26) {
      var v692 = v851[v852]
    }
    writeRestrictionSites(newDna, restrictionSites, v692.value);
    var v367 = outputWindow.document;
    JAM.call(v367.write, v367, ["<br />\n<br />\n"], JAM.policy.p23);
    i$$11 = i$$11 + 1;
    v368 = i$$11 < arrayOfFasta$$1.length;
  }
  closeWindow();
  return true;
}
function layoutRestTrans(dnaSequence$$3, geneticCode$$1, restrictionSiteCollection$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var spaceString = "                                                                                                                                  ";
  var textLayout = new TextLayout;
  var v694 = readingFrame == "3";
  if (!v694) {
    v694 = readingFrame == "all_three";
  }
  if (v694) {
    var translation = new TranslationComponent;
    JAM.call(translation.setCharacters, translation, ["  " + translate(JAM.call(dnaSequence$$3.substring, dnaSequence$$3, [2, dnaSequence$$3.length], JAM.policy.p22), geneticCodeMatchExp$$2, geneticCodeMatchResult$$2)], JAM.policy.p39);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p39);
  }
  var v696 = readingFrame == "2";
  if (!v696) {
    v696 = readingFrame == "all_three";
  }
  if (v696) {
    translation = new TranslationComponent;
    JAM.call(translation.setCharacters, translation, [" " + translate(JAM.call(dnaSequence$$3.substring, dnaSequence$$3, [1, dnaSequence$$3.length], JAM.policy.p22), geneticCodeMatchExp$$2, geneticCodeMatchResult$$2)], JAM.policy.p39);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p39);
  }
  var v698 = readingFrame == "1";
  if (!v698) {
    v698 = readingFrame == "all_three";
  }
  if (v698) {
    translation = new TranslationComponent;
    JAM.call(translation.setCharacters, translation, [translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2)], JAM.policy.p39);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p39);
  }
  if (readingFrame == "uppercase") {
    translation = new UppercaseTranslationComponent;
    JAM.call(translation.setCharacters, translation, [uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2)], JAM.policy.p39);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p39);
  }
  var dna = new DnaComponent;
  JAM.call(dna.setCharacters, dna, [dnaSequence$$3], JAM.policy.p39);
  JAM.call(textLayout.addComponent, textLayout, [dna], JAM.policy.p39);
  var ruler = new RulerComponent;
  JAM.call(ruler.setCharacters, ruler, [dnaSequence$$3], JAM.policy.p39);
  ruler.buildRuler();
  JAM.call(textLayout.addComponent, textLayout, [ruler], JAM.policy.p39);
  dna = new DnaComponent;
  JAM.call(dna.setCharacters, dna, [complement(dnaSequence$$3)], JAM.policy.p39);
  JAM.call(textLayout.addComponent, textLayout, [dna], JAM.policy.p39);
  var sitesInRange = new Array;
  var i$$12 = 0;
  var v392 = i$$12 < dnaSequence$$3.length;
  for (;v392;) {
    sitesInRange = JAM.call(restrictionSiteCollection$$1.getSitesInRange, restrictionSiteCollection$$1, [i$$12, i$$12 + basesPerLine], JAM.policy.p28);
    sitesInRange.reverse();
    var j$$10 = 0;
    var v390 = j$$10 < sitesInRange.length;
    for (;v390;) {
      introspect(JAM.policy.p26) {
        var v858 = sitesInRange[j$$10]
      }
      if (v858.numberOfCuts == 1) {
        var v379 = outputWindow.document;
        introspect(JAM.policy.p26) {
          var v1185 = sitesInRange[j$$10]
        }
        var v859 = JAM.call(spaceString.substring, spaceString, [0, v1185.position - i$$12 + 9], JAM.policy.p22) + '<span class="one">';
        introspect(JAM.policy.p26) {
          var v969 = sitesInRange[j$$10]
        }
        JAM.call(v379.write, v379, [v859 + v969.label + "</span>\n"], JAM.policy.p39);
      } else {
        introspect(JAM.policy.p26) {
          var v861 = sitesInRange[j$$10]
        }
        if (v861.numberOfCuts == 2) {
          var v381 = outputWindow.document;
          introspect(JAM.policy.p26) {
            var v1186 = sitesInRange[j$$10]
          }
          var v862 = JAM.call(spaceString.substring, spaceString, [0, v1186.position - i$$12 + 9], JAM.policy.p22) + '<span class="two">';
          introspect(JAM.policy.p26) {
            var v971 = sitesInRange[j$$10]
          }
          JAM.call(v381.write, v381, [v862 + v971.label + "</span>\n"], JAM.policy.p39);
        } else {
          introspect(JAM.policy.p26) {
            var v864 = sitesInRange[j$$10]
          }
          if (v864.numberOfCuts == 3) {
            var v383 = outputWindow.document;
            introspect(JAM.policy.p26) {
              var v1187 = sitesInRange[j$$10]
            }
            var v865 = JAM.call(spaceString.substring, spaceString, [0, v1187.position - i$$12 + 9], JAM.policy.p22) + '<span class="three">';
            introspect(JAM.policy.p26) {
              var v973 = sitesInRange[j$$10]
            }
            JAM.call(v383.write, v383, [v865 + v973.label + "</span>\n"], JAM.policy.p39);
          } else {
            var v385 = outputWindow.document;
            introspect(JAM.policy.p26) {
              var v1151 = sitesInRange[j$$10]
            }
            var v867 = JAM.call(spaceString.substring, spaceString, [0, v1151.position - i$$12 + 9], JAM.policy.p22);
            introspect(JAM.policy.p26) {
              var v975 = sitesInRange[j$$10]
            }
            JAM.call(v385.write, v385, [v867 + v975.label + "\n"], JAM.policy.p39);
          }
        }
      }
      j$$10 = j$$10 + 1;
      v390 = j$$10 < sitesInRange.length;
    }
    JAM.call(textLayout.writeLayout, textLayout, [i$$12, i$$12 + basesPerLine], JAM.policy.p28);
    i$$12 = i$$12 + basesPerLine;
    v392 = i$$12 < dnaSequence$$3.length;
  }
  return true;
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    return " " + p1$$2 + " ";
  }
  if (JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/[^A-Za-z]/g, ""], JAM.policy.p28).length < 3) {
    return "";
  }
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/(...)/g, v2], JAM.policy.p28);
  var i$$13 = 0;
  var v397 = i$$13 < geneticCodeMatchExp$$3.length;
  for (;v397;) {
    introspect(JAM.policy.p26) {
      var v395 = geneticCodeMatchExp$$3[i$$13]
    }
    introspect(JAM.policy.p26) {
      var v396 = geneticCodeMatchResult$$3[i$$13]
    }
    dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [v395, v396], JAM.policy.p40);
    i$$13 = i$$13 + 1;
    v397 = i$$13 < geneticCodeMatchExp$$3.length;
  }
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/\S{3}/g, "X"], JAM.policy.p28);
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/\s\S{1,2}$/, ""], JAM.policy.p28);
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/^\s/, ""], JAM.policy.p28);
  return dnaSequence$$4;
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$9, p1$$3, p2, p3, p4, p5, p6, offset$$11, s$$5) {
    return " " + p1$$3 + p3 + p5 + " " + p2 + p4 + p6;
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/[a-z]/g, " "], JAM.policy.p28);
  if (JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/[^A-Za-z]/g, ""], JAM.policy.p28).length < 3) {
    return "";
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3], JAM.policy.p28);
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/\s\S{1,2}\s/g, ""], JAM.policy.p28);
  var i$$14 = 0;
  var v402 = i$$14 < geneticCodeMatchExp$$4.length;
  for (;v402;) {
    introspect(JAM.policy.p26) {
      var v400 = geneticCodeMatchExp$$4[i$$14]
    }
    introspect(JAM.policy.p26) {
      var v401 = geneticCodeMatchResult$$4[i$$14]
    }
    dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [v400, v401], JAM.policy.p40);
    i$$14 = i$$14 + 1;
    v402 = i$$14 < geneticCodeMatchExp$$4.length;
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/\S{3}/g, "X"], JAM.policy.p28);
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/^\s/, ""], JAM.policy.p28);
  return dnaSequence$$5;
}
function findRestrictionSites(sequence$$18, arrayOfItems$$2, dnaConformation$$1) {
  var lookAhead$$1 = 50;
  var lowerLimit$$1 = 0;
  var upperLimit$$1 = sequence$$18.length;
  var shiftValue$$1 = 0;
  var cutDistance$$1;
  var matchExp$$2;
  var matchPosition$$1;
  var matchArray$$2;
  var label;
  var timesFound$$1 = 0;
  var tempArray = new Array;
  var restrictionSiteCollection$$2 = new RestrictionSiteCollection;
  if (dnaConformation$$1 == "circular") {
    shiftValue$$1 = JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p22).length;
    sequence$$18 = JAM.call(sequence$$18.substring, sequence$$18, [sequence$$18.length - lookAhead$$1, sequence$$18.length], JAM.policy.p40) + sequence$$18 + JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p22);
    lowerLimit$$1 = 0 + shiftValue$$1;
    upperLimit$$1 = upperLimit$$1 + shiftValue$$1;
  }
  var i$$15 = 0;
  var v417 = i$$15 < arrayOfItems$$2.length;
  for (;v417;) {
    introspect(JAM.policy.p26) {
      var v719 = arrayOfItems$$2[i$$15]
    }
    matchExp$$2 = JAM.call(v719.match, v719, [/\/.+\//], JAM.policy.p27) + "gi";
    matchPosition$$1 = 0;
    if (JAM.isEval(eval)) {
      matchExp$$2 = eval("introspect(JAM.policy.pFull) { " + matchExp$$2 + " }");
    } else {
      matchExp$$2 = JAM.call(eval, null, [matchExp$$2]);
    }
    introspect(JAM.policy.p26) {
      var v978 = arrayOfItems$$2[i$$15]
    }
    var v720 = JAM.call(v978.match, v978, [/\)\D*\d+/], JAM.policy.p27).toString();
    cutDistance$$1 = parseFloat(JAM.call(v720.replace, v720, [/\)\D*/, ""], JAM.policy.p28));
    introspect(JAM.policy.p26) {
      var v875 = arrayOfItems$$2[i$$15]
    }
    var v409 = JAM.call(v875.match, v875, [/\([^\(]+\)/], JAM.policy.p27).toString();
    label = JAM.call(v409.replace, v409, [/\(|\)/g, ""], JAM.policy.p28);
    var v413 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [sequence$$18], JAM.policy.p39);
    for (;v413;) {
      matchPosition$$1 = matchExp$$2.lastIndex;
      matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
      var v722 = matchPosition$$1 >= lowerLimit$$1;
      if (v722) {
        v722 = matchPosition$$1 < upperLimit$$1;
      }
      if (v722) {
        JAM.call(tempArray.push, tempArray, [new RestrictionSite(label + " " + (matchPosition$$1 - shiftValue$$1 + 1), matchPosition$$1 - shiftValue$$1)], JAM.policy.p39);
        timesFound$$1 = timesFound$$1 + 1;
      }
      matchExp$$2.lastIndex = matchExp$$2.lastIndex - RegExp.lastMatch.length + 1;
      v413 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [sequence$$18], JAM.policy.p39);
    }
    var j$$11 = 0;
    var v416 = j$$11 < tempArray.length;
    for (;v416;) {
      introspect(JAM.policy.p26) {
        var v414 = tempArray[j$$11]
      }
      v414.numberOfCuts = timesFound$$1;
      introspect(JAM.policy.p26) {
        var v415 = tempArray[j$$11]
      }
      JAM.call(restrictionSiteCollection$$2.addRestrictionSite, restrictionSiteCollection$$2, [v415], JAM.policy.p39);
      j$$11 = j$$11 + 1;
      v416 = j$$11 < tempArray.length;
    }
    timesFound$$1 = 0;
    tempArray = new Array;
    i$$15 = i$$15 + 1;
    v417 = i$$15 < arrayOfItems$$2.length;
  }
  return restrictionSiteCollection$$2;
}
function writeLayout(start$$4, stop) {
  var i$$16 = 0;
  var v419 = i$$16 < this.components.length;
  for (;v419;) {
    var v731 = this.components;
    introspect(JAM.policy.p26) {
      var v418 = v731[i$$16]
    }
    JAM.call(v418.writeLayoutComponent, v418, [start$$4, stop], JAM.policy.p40);
    i$$16 = i$$16 + 1;
    v419 = i$$16 < this.components.length;
  }
  return;
}
function addComponent(component) {
  var v420 = this.components;
  JAM.call(v420.push, v420, [component], JAM.policy.p39);
  return;
}
function TextLayout() {
  var v1531 = new Array;
  this.components = v1531;
  return;
}
function writeLayoutComponent(start$$5, stop$$1) {
  return;
}
function setCharacters(text$$14) {
  if (JAM.call(text$$14.search, text$$14, [/./], JAM.policy.p27) != -1) {
    var v1532 = JAM.call(text$$14.match, text$$14, [/./g], JAM.policy.p27);
    this.characters = v1532;
  }
  return;
}
function isRoom(start$$6, stop$$2) {
  var v422 = this.characters;
  var rangeToCheck = JAM.call(v422.slice, v422, [start$$6, stop$$2], JAM.policy.p40);
  rangeToCheck = JAM.call(rangeToCheck.join, rangeToCheck, [""], JAM.policy.p23);
  if (JAM.call(rangeToCheck.search, rangeToCheck, [/\w/], JAM.policy.p27) == -1) {
    return true;
  } else {
    return false;
  }
  return;
}
function LayoutComponent() {
  var v1533 = new Array;
  this.characters = v1533;
  this.positionLabel = 1;
  return;
}
function TranslationComponent() {
  var v1534 = new Array;
  this.characters = v1534;
  this.positionLabel = 1;
  return;
}
function UppercaseTranslationComponent() {
  var v1535 = new Array;
  this.characters = v1535;
  this.positionLabel = 1;
  return;
}
function DnaComponent() {
  var v1536 = new Array;
  this.characters = v1536;
  this.positionLabel = 1;
  return;
}
function RulerComponent() {
  var v1537 = new Array;
  this.characters = v1537;
  this.positionLabel = 1;
  return;
}
function buildRuler() {
  function v4(str$$12, p1$$6, offset$$14, s$$8) {
    var ruler$$1 = count$$3 + spacing;
    if (count$$3 == 0) {
      ruler$$1 = spacing;
    }
    count$$3 = count$$3 + 10;
    return JAM.call(ruler$$1.substring, ruler$$1, [0, 10], JAM.policy.p22);
  }
  var v425 = this.characters;
  var sequence$$19 = JAM.call(v425.join, v425, [""], JAM.policy.p23);
  var count$$3 = 0;
  var spacing = "         ";
  sequence$$19 = JAM.call(sequence$$19.replace, sequence$$19, [/(.{1,10})/g, v4], JAM.policy.p28);
  var v1538 = JAM.call(sequence$$19.match, sequence$$19, [/./g], JAM.policy.p27);
  this.characters = v1538;
  return;
}
function RestrictionSite(label$$1, position) {
  this.label = label$$1;
  this.position = position;
  return;
}
function addRestrictionSite(restrictionSite) {
  var v426 = this.restrictionSites;
  JAM.call(v426.push, v426, [restrictionSite], JAM.policy.p39);
  return;
}
function sortRestrictionSites() {
  var v427 = this.restrictionSites;
  JAM.call(v427.sort, v427, [restrictionSiteSorter], JAM.policy.p39);
  return;
}
function getSitesInRange(start$$11, stop$$7) {
  var arrayToReturn = new Array;
  var i$$17 = this.restrictionSites.length - 1;
  var v431 = i$$17 >= 0;
  for (;v431;) {
    var v1050 = this.restrictionSites;
    introspect(JAM.policy.p26) {
      var v980 = v1050[i$$17]
    }
    var v736 = v980.position >= start$$11;
    if (v736) {
      var v1051 = this.restrictionSites;
      introspect(JAM.policy.p26) {
        var v981 = v1051[i$$17]
      }
      v736 = v981.position < stop$$7;
    }
    if (v736) {
      JAM.call(arrayToReturn.push, arrayToReturn, [this.restrictionSites.pop()], JAM.policy.p39);
    } else {
      break;
    }
    i$$17 = i$$17 - 1;
    v431 = i$$17 >= 0;
  }
  return arrayToReturn;
}
function RestrictionSiteCollection() {
  var v1539 = new Array;
  this.restrictionSites = v1539;
  return;
}
function restrictionSiteSorter(a, b) {
  if (a.position < b.position) {
    return 1;
  }
  if (a.position > b.position) {
    return-1;
  } else {
    return 0;
  }
  return;
}
new TextLayout;
TextLayout.prototype.writeLayout = writeLayout;
TextLayout.prototype.addComponent = addComponent;
new LayoutComponent;
LayoutComponent.prototype.writeLayoutComponent = writeLayoutComponent;
LayoutComponent.prototype.setCharacters = setCharacters;
LayoutComponent.prototype.isRoom = isRoom;
var v439 = TranslationComponent;
var v1540 = new LayoutComponent;
v439.prototype = v1540;
TranslationComponent.prototype.writeLayoutComponent = v5;
var v441 = UppercaseTranslationComponent;
var v1541 = new LayoutComponent;
v441.prototype = v1541;
UppercaseTranslationComponent.prototype.writeLayoutComponent = v6;
var v443 = DnaComponent;
var v1542 = new LayoutComponent;
v443.prototype = v1542;
DnaComponent.prototype.writeLayoutComponent = v7;
var v445 = RulerComponent;
var v1543 = new LayoutComponent;
v445.prototype = v1543;
RulerComponent.prototype.writeLayoutComponent = v10;
new RulerComponent;
RulerComponent.prototype.buildRuler = buildRuler;
new RestrictionSiteCollection;
RestrictionSiteCollection.prototype.addRestrictionSite = addRestrictionSite;
RestrictionSiteCollection.prototype.sortRestrictionSites = sortRestrictionSites;
RestrictionSiteCollection.prototype.getSitesInRange = getSitesInRange;
JAM.set(document, "onload", v11);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p23), "onclick", v12);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p23), "onclick", v13)

