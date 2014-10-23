// sms2-mutate-for-digest.js
function v9() {
  var v1011 = document.forms;
  introspect(JAM.policy.p26) {
    var v851 = v1011[0]
  }
  var v501 = v851.elements;
  introspect(JAM.policy.p26) {
    var v10 = v501[0]
  }
  v10.value = " ";
  var v1012 = document.forms;
  introspect(JAM.policy.p26) {
    var v852 = v1012[0]
  }
  var v502 = v852.elements;
  introspect(JAM.policy.p26) {
    var v11 = v502[4]
  }
  v11.value = " ";
  return;
}
function v8() {
  try {
    JAM.call(mutateForDigest, null, [document], JAM.policy.p38);
  } catch (e$$5) {
    JAM.call(alert, null, ["The following error was encountered: " + e$$5], JAM.policy.p38);
  }
  return;
}
function v7() {
  var v13 = document.main_form.main_submit;
  JAM.call(v13.focus, v13, [], JAM.policy.p39);
  return;
}
function v6(start$$9, stop$$5) {
  var v14 = outputWindow.document;
  JAM.call(v14.write, v14, [JAM.call(rightNum, null, [this.positionLabel, "", 8, ""], JAM.policy.p41)], JAM.policy.p38);
  var v16 = outputWindow.document;
  JAM.call(v16.write, v16, [this.spanStart], JAM.policy.p38);
  var v18 = outputWindow.document;
  var v853 = this.characters;
  var v505 = JAM.call(v853.slice, v853, [start$$9, stop$$5], JAM.policy.p40);
  JAM.call(v18.write, v18, [JAM.call(v505.join, v505, [""], JAM.policy.p22)], JAM.policy.p38);
  var v20 = outputWindow.document;
  JAM.call(v20.write, v20, [this.spanEnd + "\n"], JAM.policy.p38);
  this.positionLabel = this.positionLabel + (stop$$5 - start$$9);
  return;
}
function v5(start$$8, stop$$4) {
  var v507 = this.characters;
  var v24 = JAM.call(v507.slice, v507, [start$$8, stop$$4], JAM.policy.p40);
  var textToWrite = JAM.call(v24.join, v24, [""], JAM.policy.p22);
  if (JAM.call(textToWrite.search, textToWrite, [/\w/], JAM.policy.p38) != -1) {
    var v25 = outputWindow.document;
    JAM.call(v25.write, v25, [JAM.call(rightNum, null, [this.positionLabel, "", 8, ""], JAM.policy.p41)], JAM.policy.p38);
    var v27 = outputWindow.document;
    JAM.call(v27.write, v27, [this.spanStart], JAM.policy.p38);
    this.positionLabel = this.positionLabel + JAM.call(textToWrite.match, textToWrite, [/[A-Z]/g], JAM.policy.p38).length;
    var v31 = outputWindow.document;
    JAM.call(v31.write, v31, [textToWrite], JAM.policy.p38);
    var v32 = outputWindow.document;
    JAM.call(v32.write, v32, [this.spanEnd + "\n"], JAM.policy.p38);
  }
  return;
}
function v4(start$$7, stop$$3) {
  var v35 = outputWindow.document;
  JAM.call(v35.write, v35, [JAM.call(rightNum, null, [this.positionLabel, "", 8, ""], JAM.policy.p41)], JAM.policy.p38);
  var v37 = outputWindow.document;
  JAM.call(v37.write, v37, [this.spanStart], JAM.policy.p38);
  var v39 = outputWindow.document;
  var v854 = this.characters;
  var v513 = JAM.call(v854.slice, v854, [start$$7, stop$$3], JAM.policy.p40);
  JAM.call(v39.write, v39, [JAM.call(v513.join, v513, [""], JAM.policy.p22)], JAM.policy.p38);
  var v41 = outputWindow.document;
  JAM.call(v41.write, v41, [this.spanEnd + "\n"], JAM.policy.p38);
  this.positionLabel = this.positionLabel + (stop$$3 - start$$7) / 3;
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
    var v45 = arrayOfSequences[0]
  }
  var lengthOfAlign = v45.length;
  if (arrayOfSequences.length < 2) {
    JAM.call(alert, null, ["Please enter an alignment consisting of at least two sequences."], JAM.policy.p22);
    return false;
  }
  var i$$1 = 0;
  var v48 = i$$1 < arrayOfTitles.length;
  for (;v48;) {
    introspect(JAM.policy.p26) {
      var v1108 = arrayOfTitles[i$$1]
    }
    var v855 = JAM.call(v1108.search, v1108, [/\S/], JAM.policy.p38) == -1;
    if (!v855) {
      introspect(JAM.policy.p26) {
        var v1109 = arrayOfSequences[i$$1]
      }
      v855 = JAM.call(v1109.search, v1109, [/\S/], JAM.policy.p38) == -1;
    }
    var v518 = v855;
    if (!v518) {
      introspect(JAM.policy.p26) {
        var v1016 = arrayOfSequences[i$$1]
      }
      v518 = v1016.length != lengthOfAlign;
    }
    if (v518) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$1 = i$$1 + 1;
    v48 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1110 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p38) == -1;
  if (!v1110) {
    v1110 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p38) == -1;
  }
  var v1017 = v1110;
  if (!v1017) {
    v1017 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p38) == -1;
  }
  var v858 = v1017;
  if (!v858) {
    v858 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p38) == -1;
  }
  var v520 = v858;
  if (!v520) {
    v520 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p38) == -1;
  }
  if (v520) {
    JAM.call(alert, null, ["The codon table has been entered incorrectly."], JAM.policy.p22);
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v861 = formElement.value;
  if (JAM.call(v861.search, v861, [/\S/], JAM.policy.p38) == -1) {
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
  var v53 = z$$2 < arrayOfPatterns.length;
  for (;v53;) {
    introspect(JAM.policy.p26) {
      var v862 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(v862.search, v862, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v863 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(moreExpressionCheck, null, [v863], JAM.policy.p38) == false) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$2 = z$$2 + 1;
    v53 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = JAM.new(Array, [arrayOfPatterns.length], JAM.policy.p38);
  var geneticCodeMatchExp = JAM.new(Array, [arrayOfPatterns.length], JAM.policy.p38);
  var j = 0;
  var v62 = j < arrayOfPatterns.length;
  for (;v62;) {
    var v56 = geneticCodeMatchExp;
    var v57 = j;
    introspect(JAM.policy.p26) {
      var v1020 = arrayOfPatterns[j]
    }
    var v527 = JAM.call(v1020.match, v1020, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v1517 = eval("introspect(JAM.policy.pFull) { " + v527 + " }")
    } else {
      var v1517 = JAM.call(eval, null, [v527])
    }
    introspect(JAM.policy.p27) {
      v56[v57] = v1517;
    }
    var v58 = geneticCodeMatchResult;
    var v59 = j;
    introspect(JAM.policy.p26) {
      var v865 = arrayOfPatterns[j]
    }
    var v528 = JAM.call(v865.match, v865, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v1518 = JAM.call(v528.toString, v528, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v58[v59] = v1518;
    }
    var v60 = geneticCodeMatchResult;
    var v61 = j;
    introspect(JAM.policy.p26) {
      var v529 = geneticCodeMatchResult[j]
    }
    var v1519 = JAM.call(v529.replace, v529, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v60[v61] = v1519;
    }
    j = j + 1;
    v62 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v69 = i$$2 <= testSequence.length - 3;
  for (;v69;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p40);
    j = 0;
    var v67 = j < geneticCodeMatchExp.length;
    for (;v67;) {
      introspect(JAM.policy.p26) {
        var v867 = geneticCodeMatchExp[j]
      }
      if (JAM.call(codon.search, codon, [v867], JAM.policy.p38) != -1) {
        if (oneMatch == true) {
          JAM.call(alert, null, ["Genetic code error: more than one amino acid is coded by the codon: " + codon + "."], JAM.policy.p38);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      v67 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      JAM.call(alert, null, ["The genetic code expressions are missing a codon."], JAM.policy.p22);
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v69 = i$$2 <= testSequence.length - 3;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v71 = z$$3 < arrayOfPatterns$$1.length;
  for (;v71;) {
    introspect(JAM.policy.p26) {
      var v869 = arrayOfPatterns$$1[z$$3]
    }
    if (JAM.call(v869.search, v869, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p38) != -1) {
      JAM.call(alert, null, ["One or more groups have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$3 = z$$3 + 1;
    v71 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v75 = i$$3 < arrayOfPatterns$$1.length;
  for (;v75;) {
    introspect(JAM.policy.p26) {
      var v870 = arrayOfPatterns$$1[i$$3]
    }
    var re = JAM.new(RegExp, ["[" + v870 + "]", "gi"], JAM.policy.p41);
    var j$$1 = i$$3 + 1;
    var v74 = j$$1 < arrayOfPatterns$$1.length;
    for (;v74;) {
      introspect(JAM.policy.p26) {
        var v871 = arrayOfPatterns$$1[j$$1]
      }
      if (JAM.call(v871.search, v871, [re], JAM.policy.p38) != -1) {
        JAM.call(alert, null, ["The same amino acid is in more than one similarity group."], JAM.policy.p22);
        return false;
      }
      j$$1 = j$$1 + 1;
      v74 = j$$1 < arrayOfPatterns$$1.length;
    }
    i$$3 = i$$3 + 1;
    v75 = i$$3 < arrayOfPatterns$$1.length;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v78 = z$$4 < arrayOfPatterns$$2.length;
  for (;v78;) {
    introspect(JAM.policy.p26) {
      var v872 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(v872.search, v872, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v873 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(moreExpressionCheck, null, [v873], JAM.policy.p38) == false) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$4 = z$$4 + 1;
    v78 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v1021 = JAM.call(getSequenceFromFasta, null, [text$$7], JAM.policy.p38);
  if (JAM.call(v1021.replace, v1021, [/[^A-Za-z]/g, ""], JAM.policy.p41).length > maxInput) {
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
  var v83 = outputWindow.document;
  JAM.call(v83.write, v83, ["</form>"], JAM.policy.p22);
  return true;
}
function closePre() {
  var v84 = outputWindow.document;
  JAM.call(v84.write, v84, ["</div>"], JAM.policy.p22);
  var v85 = outputWindow.document;
  JAM.call(v85.write, v85, ["</pre>\n"], JAM.policy.p22);
  return;
}
function closeTextArea() {
  var v86 = outputWindow.document;
  JAM.call(v86.write, v86, ["</textarea>"], JAM.policy.p22);
  return true;
}
function closeWindow() {
  var v87 = outputWindow.document;
  JAM.call(v87.write, v87, ["</body>\n</html>\n"], JAM.policy.p22);
  outputWindow.status = "Done.";
  var v88 = outputWindow.document;
  JAM.call(v88.close, v88, [], JAM.policy.p39);
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
  var v91 = i$$4 < alignArray.length;
  for (;v91;) {
    introspect(JAM.policy.p26) {
      var v875 = alignArray[i$$4]
    }
    if (JAM.call(v875.search, v875, [/[^\s]+\s/], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$4 = i$$4 + 1;
    v91 = i$$4 < alignArray.length;
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
    var v93 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p38);
    for (;v93;) {
      introspect(JAM.policy.p26) {
        var v92 = matchArray[0]
      }
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v92], JAM.policy.p38);
      v93 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p38);
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
  var v111 = j$$2 < arrayOfPatterns$$3.length;
  for (;v111;) {
    var v109 = geneticCodeMatchExp$$1;
    var v110 = j$$2;
    introspect(JAM.policy.p26) {
      var v1022 = arrayOfPatterns$$3[j$$2]
    }
    var v576 = JAM.call(v1022.match, v1022, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v1520 = eval("introspect(JAM.policy.pFull) { " + v576 + " }")
    } else {
      var v1520 = JAM.call(eval, null, [v576])
    }
    introspect(JAM.policy.p27) {
      v109[v110] = v1520;
    }
    j$$2 = j$$2 + 1;
    v111 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = JAM.new(Array, [arrayOfPatterns$$4.length], JAM.policy.p38);
  var j$$3 = 0;
  var v117 = j$$3 < arrayOfPatterns$$4.length;
  for (;v117;) {
    var v113 = geneticCodeMatchResult$$1;
    var v114 = j$$3;
    introspect(JAM.policy.p26) {
      var v877 = arrayOfPatterns$$4[j$$3]
    }
    var v579 = JAM.call(v877.match, v877, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v1521 = JAM.call(v579.toString, v579, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v113[v114] = v1521;
    }
    var v115 = geneticCodeMatchResult$$1;
    var v116 = j$$3;
    introspect(JAM.policy.p26) {
      var v580 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1522 = JAM.call(v580.replace, v580, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v115[v116] = v1522;
    }
    j$$3 = j$$3 + 1;
    v117 = j$$3 < arrayOfPatterns$$4.length;
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
  var v138 = j$$4 < lengthOut;
  for (;v138;) {
    tempNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * components.length], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar = components[tempNum];
    }
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p38);
    j$$4 = j$$4 + 1;
    v138 = j$$4 < lengthOut;
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
    var v140 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p41);
    fastaTitle = JAM.call(v140.toString, v140, [], JAM.policy.p39);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p41);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p41);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p41);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1335 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p38) != -1;
  if (!v1335) {
    v1335 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v1309 = v1335;
  if (!v1309) {
    v1309 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p38) != -1;
  }
  var v1283 = v1309;
  if (!v1283) {
    v1283 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v1253 = v1283;
  if (!v1253) {
    v1253 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p38) != -1;
  }
  var v1216 = v1253;
  if (!v1216) {
    v1216 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p38) != -1;
  }
  var v1174 = v1216;
  if (!v1174) {
    v1174 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p38) != -1;
  }
  var v1113 = v1174;
  if (!v1113) {
    v1113 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p38) != -1;
  }
  var v1023 = v1113;
  if (!v1023) {
    v1023 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p38) != -1;
  }
  var v879 = v1023;
  if (!v879) {
    v879 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p38) != -1;
  }
  var v608 = v879;
  if (!v608) {
    v608 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p38) != -1;
  }
  if (v608) {
    return false;
  }
  return true;
}
function openForm() {
  var v143 = outputWindow.document;
  JAM.call(v143.write, v143, ['<form action="">\n'], JAM.policy.p22);
  return true;
}
function openPre() {
  var v144 = outputWindow.document;
  JAM.call(v144.write, v144, ["<pre>"], JAM.policy.p22);
  var v145 = outputWindow.document;
  JAM.call(v145.write, v145, ['<div class="pre">'], JAM.policy.p22);
  return;
}
function openTextArea() {
  var v146 = outputWindow.document;
  JAM.call(v146.write, v146, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p22);
  return true;
}
function openWindow(title$$5) {
  JAM.call(_openWindow, null, [title$$5, true], JAM.policy.p41);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p23);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p39);
  var v147 = outputWindow.document;
  JAM.call(v147.write, v147, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p38);
  if (isColor) {
    var v149 = outputWindow.document;
    JAM.call(v149.write, v149, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p38);
  } else {
    var v151 = outputWindow.document;
    JAM.call(v151.write, v151, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p38);
  }
  var v153 = outputWindow.document;
  JAM.call(v153.write, v153, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"], JAM.policy.p38);
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
  var v155 = outputWindow.document;
  JAM.call(v155.write, v155, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p38);
  if (isBackground) {
    var v157 = outputWindow.document;
    JAM.call(v157.write, v157, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p38);
  } else {
    var v159 = outputWindow.document;
    JAM.call(v159.write, v159, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p38);
  }
  var v161 = outputWindow.document;
  JAM.call(v161.write, v161, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"], JAM.policy.p38);
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
  var v164 = j$$5 < lengthOfColumn;
  for (;v164;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v164 = j$$5 < lengthOfColumn;
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
    var v618 = testArray[0]
  }
  if (v618 != testString) {
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
  var v1034 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p38) == -1;
  if (!v1034) {
    v1034 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p38) == -1;
  }
  var v890 = v1034;
  if (!v890) {
    v890 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p38) == -1;
  }
  var v623 = v890;
  if (!v623) {
    v623 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v623) {
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
  var v1037 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v1037) {
    v1037 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v893 = v1037;
  if (!v893) {
    v893 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v628 = v893;
  if (!v628) {
    v628 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v628) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1040 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v1040) {
    v1040 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v896 = v1040;
  if (!v896) {
    v896 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v629 = v896;
  if (!v629) {
    v629 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v629) {
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
  var v1043 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p38) == -1;
  if (!v1043) {
    v1043 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p38) == -1;
  }
  var v899 = v1043;
  if (!v899) {
    v899 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p38) == -1;
  }
  var v631 = v899;
  if (!v631) {
    v631 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v631) {
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
  var v192 = i$$5 < stopBase;
  for (;v192;) {
    lineOfText = JAM.call(rightNum, null, [i$$5 + 1, lineOfText, 8, tabIn$$1], JAM.policy.p40);
    var j$$6 = 1;
    var v189 = j$$6 <= basePerLine / groupSize;
    for (;v189;) {
      var v188 = k < groupSize;
      for (;v188;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p38);
        k = k + 1;
        v188 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v189 = j$$6 <= basePerLine / groupSize;
    }
    var v190 = outputWindow.document;
    JAM.call(v190.write, v190, [lineOfText + "\n"], JAM.policy.p38);
    lineOfText = "";
    v192 = i$$5 < stopBase;
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
    var v636 = adjustment < 0;
    if (v636) {
      v636 = adjusted >= 0;
    }
    if (v636) {
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
  var v226 = i$$6 < stopBase$$2;
  for (;v226;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v202 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for (;v202;) {
      var v197 = k$$1 < groupSize$$2;
      for (;v197;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p38);
        k$$1 = k$$1 + 1;
        v197 = k$$1 < groupSize$$2;
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
      v202 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v203 = outputWindow.document;
      JAM.call(v203.write, v203, [JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p40), "", 8, tabIn$$3], JAM.policy.p41) + lineOfText$$1 + "\n"], JAM.policy.p38);
      if (strands$$1 == "two") {
        var v205 = outputWindow.document;
        JAM.call(v205.write, v205, [JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p40), "", 8, tabIn$$3], JAM.policy.p41) + JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + "\n"], JAM.policy.p38);
        var v207 = outputWindow.document;
        JAM.call(v207.write, v207, ["\n"], JAM.policy.p22);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v209 = outputWindow.document;
        JAM.call(v209.write, v209, [lineOfText$$1 + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40) + "\n"], JAM.policy.p38);
        if (strands$$1 == "two") {
          var v211 = outputWindow.document;
          JAM.call(v211.write, v211, [JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40) + "\n"], JAM.policy.p38);
          var v213 = outputWindow.document;
          JAM.call(v213.write, v213, ["\n"], JAM.policy.p22);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v215 = outputWindow.document;
          JAM.call(v215.write, v215, [aboveNum + "\n"], JAM.policy.p38);
          var v217 = outputWindow.document;
          JAM.call(v217.write, v217, [lineOfText$$1 + "\n"], JAM.policy.p38);
          if (strands$$1 == "two") {
            var v219 = outputWindow.document;
            JAM.call(v219.write, v219, [JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + "\n"], JAM.policy.p38);
            var v221 = outputWindow.document;
            JAM.call(v221.write, v221, ["\n"], JAM.policy.p22);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v226 = i$$6 < stopBase$$2;
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
  var v247 = i$$7 < stopBase$$3;
  for (;v247;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v235 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for (;v235;) {
      var v230 = k$$2 < groupSize$$3;
      for (;v230;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p38);
        k$$2 = k$$2 + 1;
        v230 = k$$2 < groupSize$$3;
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
      v235 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v236 = outputWindow.document;
      JAM.call(v236.write, v236, [JAM.call(rightNum, null, [lineNum$$1, "", 8, tabIn$$4], JAM.policy.p41) + lineOfText$$2 + "\n"], JAM.policy.p38);
    } else {
      if (numberPosition$$2 == "right") {
        var v238 = outputWindow.document;
        JAM.call(v238.write, v238, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p38);
      } else {
        if (numberPosition$$2 == "above") {
          var v240 = outputWindow.document;
          JAM.call(v240.write, v240, [aboveNum$$1 + "\n"], JAM.policy.p38);
          var v242 = outputWindow.document;
          JAM.call(v242.write, v242, [lineOfText$$2 + "\n"], JAM.policy.p38);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v247 = i$$7 < stopBase$$3;
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
  var v910 = sequence$$13.length <= firstIndexToMutate;
  if (!v910) {
    v910 = lastIndexToMutate < 0;
  }
  var v653 = v910;
  if (!v653) {
    v653 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v653) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v256 = i$$8 < numMut;
  for (;v256;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * maxNum], JAM.policy.p38);
    var v655 = randNum < firstIndexToMutate;
    if (!v655) {
      v655 = randNum > lastIndexToMutate;
    }
    if (v655) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v256 = i$$8 < numMut;
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
        var v659 = components$$1[componentsIndex]
      }
      if (v659 != currentChar) {
        needNewChar = false;
      }
    }
    var v660 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p24);
    introspect(JAM.policy.p26) {
      var v661 = components$$1[componentsIndex]
    }
    sequence$$13 = v660 + v661 + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p40);
    i$$8 = i$$8 + 1;
    v256 = i$$8 < numMut;
  }
  var v257 = outputWindow.document;
  JAM.call(v257.write, v257, [JAM.call(addReturns, null, [sequence$$13], JAM.policy.p38)], JAM.policy.p38);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v263 = j$$9 < lengthOut$$1;
  for (;v263;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * components$$2.length], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v260 = outputWindow.document;
      JAM.call(v260.write, v260, [sequence$$14 + "\n"], JAM.policy.p38);
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v263 = j$$9 < lengthOut$$1;
  }
  var v264 = outputWindow.document;
  JAM.call(v264.write, v264, [sequence$$14 + "\n"], JAM.policy.p38);
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
  var v270 = outputWindow.document;
  JAM.call(v270.write, v270, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v271 = outputWindow.document;
  JAM.call(v271.write, v271, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p38);
  var i$$9 = 0;
  var v288 = i$$9 < arrayOfItems.length;
  for (;v288;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v670 = arrayOfItems[i$$9]
    }
    matchExp = JAM.call(v670.match, v670, [/\/.+\//], JAM.policy.p38) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v1052 = arrayOfItems[i$$9]
    }
    var v916 = JAM.call(v1052.match, v1052, [/\)\D*\d+/], JAM.policy.p38);
    var v671 = JAM.call(v916.toString, v916, [], JAM.policy.p39);
    cutDistance = JAM.call(parseFloat, null, [JAM.call(v671.replace, v671, [/\)\D*/, ""], JAM.policy.p41)], JAM.policy.p38);
    var v280 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    for (;v280;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v672 = matchPosition >= lowerLimit;
      if (v672) {
        v672 = matchPosition < upperLimit;
      }
      if (v672) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v280 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
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
    var v286 = outputWindow.document;
    var v1223 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p26) {
      var v1316 = arrayOfItems[i$$9]
    }
    var v1290 = JAM.call(v1316.match, v1316, [/\([^\(]+\)/], JAM.policy.p38);
    var v1261 = JAM.call(v1290.toString, v1290, [], JAM.policy.p39);
    JAM.call(v286.write, v286, [v1223 + JAM.call(v1261.replace, v1261, [/\(|\)/g, ""], JAM.policy.p41) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p38);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v288 = i$$9 < arrayOfItems.length;
  }
  var v289 = outputWindow.document;
  JAM.call(v289.write, v289, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v290 = outputWindow.document;
  JAM.call(v290.write, v290, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v291 = outputWindow.document;
  JAM.call(v291.write, v291, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p38);
  var i$$10 = 0;
  var v301 = i$$10 < arrayOfItems$$1.length;
  for (;v301;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v681 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = JAM.call(v681.match, v681, [/\/[^\/]+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p38) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p38).length;
    }
    var percentage = 0;
    var v920 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v1134 = arrayOfItems$$1[i$$10]
    }
    if (v920 - JAM.call(parseFloat, null, [JAM.call(v1134.match, v1134, [/\d+/], JAM.policy.p38)], JAM.policy.p38) > 0) {
      var v296 = 100 * tempNumber;
      var v684 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v1056 = arrayOfItems$$1[i$$10]
      }
      percentage = v296 / (v684 - JAM.call(parseFloat, null, [JAM.call(v1056.match, v1056, [/\d+/], JAM.policy.p38)], JAM.policy.p38));
    }
    var v299 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v1317 = arrayOfItems$$1[i$$10]
    }
    var v1291 = JAM.call(v1317.match, v1317, [/\([^\(]+\)\b/], JAM.policy.p38);
    var v1262 = JAM.call(v1291.toString, v1291, [], JAM.policy.p39);
    JAM.call(v299.write, v299, ["<tr><td>" + JAM.call(v1262.replace, v1262, [/\(|\)/g, ""], JAM.policy.p41) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p25) + "</td></tr>\n"], JAM.policy.p38);
    i$$10 = i$$10 + 1;
    v301 = i$$10 < arrayOfItems$$1.length;
  }
  var v302 = outputWindow.document;
  JAM.call(v302.write, v302, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v309 = sequence$$17.length > 0;
  for (;v309;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * maxNum$$1], JAM.policy.p38);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p38);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p24);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p40);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v306 = outputWindow.document;
      JAM.call(v306.write, v306, [tempSeq + "\n"], JAM.policy.p38);
      tempSeq = "";
    }
    v309 = sequence$$17.length > 0;
  }
  var v310 = outputWindow.document;
  JAM.call(v310.write, v310, [tempSeq + "\n"], JAM.policy.p38);
  return true;
}
function getGeneticCodeString(type$$25) {
  var v692 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39) == "standard";
  if (!v692) {
    v692 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39) == "transl_table=1";
  }
  if (v692) {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  if (JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39) == "transl_table=2") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + "/[tu]g[agr]/=W," + 
    "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|ag[agr]/=*";
  }
  if (JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39) == "transl_table=3") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/[tu][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + "/[tu]g[agr]/=W," + 
    "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39) == "transl_table=4") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39) == "transl_table=5") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39) == "transl_table=6") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]ga/=*";
  }
  if (JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39) == "transl_table=9") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aag/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[atcuwmhy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39) == "transl_table=10") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39) == "transl_table=11") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  if (JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39) == "transl_table=12") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  if (JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39) == "transl_table=13") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39) == "transl_table=14") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aag/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[atcuwmhy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[atcuwmhy]/=Y," + "/[tu]ag/=*";
  }
  if (JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39) == "transl_table=15") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]|[tu]ag|[tcuy]ag/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu][agr]a/=*";
  }
  if (JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39) == "transl_table=16") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu][agr]a/=*";
  }
  if (JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39) == "transl_table=21") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aag/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[atcuwmhy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39) == "transl_table=22") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[cgtyskb]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu][agcrsmv]a/=*";
  }
  if (JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39) == "transl_table=23") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + "/[tu]gg/=W," + 
    "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*";
  }
  return true;
}
function mutateForDigest(theDocument) {
  var newDna = "";
  var mutatedDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E4;
  var TOPOLOGY = "linear";
  if (JAM.call(testScript, null, [], JAM.policy.p39) == false) {
    return false;
  }
  var restrictionSiteCollection;
  var mutatedRestrictionSitesCollection;
  var v1243 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1201 = v1243[0]
  }
  var v1153 = v1201.elements;
  introspect(JAM.policy.p26) {
    var v1075 = v1153[7]
  }
  var v945 = v1075.options;
  var v1244 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1202 = v1244[0]
  }
  var v1154 = v1202.elements;
  introspect(JAM.policy.p26) {
    var v1076 = v1154[7]
  }
  var v946 = v1076.selectedIndex;
  introspect(JAM.policy.p26) {
    var v727 = v945[v946]
  }
  var geneticCode = JAM.call(getGeneticCodeString, null, [v727.value], JAM.policy.p38);
  var v1203 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1155 = v1203[0]
  }
  var v1077 = v1155.elements;
  introspect(JAM.policy.p26) {
    var v947 = v1077[4]
  }
  var v728 = v947.options;
  var v1204 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1156 = v1204[0]
  }
  var v1078 = v1156.elements;
  introspect(JAM.policy.p26) {
    var v948 = v1078[4]
  }
  var v729 = v948.selectedIndex;
  introspect(JAM.policy.p26) {
    var v348 = v728[v729]
  }
  var restrictionSites = v348.value;
  var v1245 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1205 = v1245[0]
  }
  var v1157 = v1205.elements;
  introspect(JAM.policy.p26) {
    var v1079 = v1157[0]
  }
  var v730 = JAM.call(checkFormElement, null, [v1079], JAM.policy.p38) == false;
  if (!v730) {
    var v1280 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1246 = v1280[0]
    }
    var v1206 = v1246.elements;
    introspect(JAM.policy.p26) {
      var v1158 = v1206[0]
    }
    v730 = JAM.call(checkSequenceLength, null, [v1158.value, maxInput$$3], JAM.policy.p40) == false;
  }
  if (v730) {
    return false;
  }
  geneticCode = JAM.call(geneticCode.split, geneticCode, [/,/], JAM.policy.p38);
  if (JAM.call(checkGeneticCode, null, [geneticCode], JAM.policy.p38) == false) {
    return false;
  }
  restrictionSites = JAM.call(restrictionSites.split, restrictionSites, [/,/], JAM.policy.p38);
  if (JAM.call(checkRestPatterns, null, [restrictionSites], JAM.policy.p38) == false) {
    return false;
  }
  var mutatedRestrictionSites = JAM.call(buildMutatedRestrictionSites, null, [restrictionSites], JAM.policy.p38);
  JAM.call(openWindow, null, ["Mutate for Digest"], JAM.policy.p22);
  JAM.call(openPre, null, [], JAM.policy.p39);
  var v352 = outputWindow.document;
  JAM.call(v352.write, v352, ['<span class="mutated_sequence">' + "sequence and translations for mutated version" + "</span>\n"], JAM.policy.p38);
  var v354 = outputWindow.document;
  JAM.call(v354.write, v354, ['<span class="current_sequence">' + "sequence and translations for non-mutated version" + "</span>\n"], JAM.policy.p38);
  var v356 = outputWindow.document;
  JAM.call(v356.write, v356, ["\n"], JAM.policy.p22);
  var v1159 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1081 = v1159[0]
  }
  var v952 = v1081.elements;
  introspect(JAM.policy.p26) {
    var v735 = v952[0]
  }
  var arrayOfFasta$$1 = JAM.call(getArrayOfFasta, null, [v735.value], JAM.policy.p38);
  var i$$11 = 0;
  var v365 = i$$11 < arrayOfFasta$$1.length;
  for (;v365;) {
    introspect(JAM.policy.p26) {
      var v358 = arrayOfFasta$$1[i$$11]
    }
    newDna = JAM.call(getSequenceFromFasta, null, [v358], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      var v359 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = JAM.call(getTitleFromFasta, null, [v359], JAM.policy.p38);
    newDna = JAM.call(removeNonDna, null, [newDna], JAM.policy.p38);
    var v360 = outputWindow.document;
    JAM.call(v360.write, v360, [JAM.call(getInfoFromTitleAndSequenceAndTopology, null, [title$$9, newDna, TOPOLOGY], JAM.policy.p40)], JAM.policy.p38);
    restrictionSiteCollection = JAM.call(findRestrictionSites, null, [newDna, restrictionSites, TOPOLOGY], JAM.policy.p40);
    JAM.call(restrictionSiteCollection.sortRestrictionSites, restrictionSiteCollection, [], JAM.policy.p39);
    mutatedRestrictionSiteCollection = JAM.call(findRestrictionSites, null, [newDna, mutatedRestrictionSites, TOPOLOGY], JAM.policy.p40);
    mutatedRestrictionSiteCollection = JAM.call(removeNormalMatchesFromMutantSites, null, [mutatedRestrictionSiteCollection, restrictionSiteCollection], JAM.policy.p40);
    mutatedRestrictionSiteCollection = JAM.call(removeOverlappingMatchesFromMutantSites, null, [mutatedRestrictionSiteCollection], JAM.policy.p38);
    mutatedDna = JAM.call(buildMutatedDna, null, [newDna, mutatedRestrictionSiteCollection], JAM.policy.p40);
    var v1247 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1207 = v1247[0]
    }
    var v1160 = v1207.elements;
    introspect(JAM.policy.p26) {
      var v1082 = v1160[5]
    }
    var v953 = v1082.options;
    var v1248 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1208 = v1248[0]
    }
    var v1161 = v1208.elements;
    introspect(JAM.policy.p26) {
      var v1083 = v1161[5]
    }
    var v954 = v1083.selectedIndex;
    introspect(JAM.policy.p26) {
      var v737 = v953[v954]
    }
    var v362 = v737.value;
    var v1249 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1209 = v1249[0]
    }
    var v1162 = v1209.elements;
    introspect(JAM.policy.p26) {
      var v1084 = v1162[6]
    }
    var v955 = v1084.options;
    var v1250 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1210 = v1250[0]
    }
    var v1163 = v1210.elements;
    introspect(JAM.policy.p26) {
      var v1085 = v1163[6]
    }
    var v956 = v1085.selectedIndex;
    introspect(JAM.policy.p26) {
      var v738 = v955[v956]
    }
    JAM.call(layoutRestTrans, null, [newDna, mutatedDna, geneticCode, restrictionSiteCollection, mutatedRestrictionSiteCollection, v362, v738.value], JAM.policy.p40);
    var v364 = outputWindow.document;
    JAM.call(v364.write, v364, ["\n\n"], JAM.policy.p22);
    i$$11 = i$$11 + 1;
    v365 = i$$11 < arrayOfFasta$$1.length;
  }
  JAM.call(closePre, null, [], JAM.policy.p39);
  JAM.call(closeWindow, null, [], JAM.policy.p39);
  return true;
}
function layoutRestTrans(dnaSequence$$3, mutatedDnaSequence, geneticCode$$1, restrictionSiteCollection$$1, mutatedRestrictionSiteCollection$$1, basesPerLine, readingFrame) {
  basesPerLine = JAM.call(parseInt, null, [basesPerLine], JAM.policy.p38);
  var geneticCodeMatchExp$$2 = JAM.call(getGeneticCodeMatchExp, null, [geneticCode$$1], JAM.policy.p38);
  var geneticCodeMatchResult$$2 = JAM.call(getGeneticCodeMatchResult, null, [geneticCode$$1], JAM.policy.p38);
  var spaceString = "                                                                                                                                  ";
  var textLayout = JAM.new(TextLayout, [], JAM.policy.p39);
  var v740 = readingFrame == "3";
  if (!v740) {
    v740 = readingFrame == "all_three";
  }
  if (v740) {
    var translationMut = JAM.new(TranslationComponent, [], JAM.policy.p39);
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    JAM.call(translationMut.setCharacters, translationMut, ["  " + JAM.call(translate, null, [JAM.call(mutatedDnaSequence.substring, mutatedDnaSequence, [2, dnaSequence$$3.length], JAM.policy.p24), geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p40)], JAM.policy.p38);
    JAM.call(textLayout.addComponent, textLayout, [translationMut], JAM.policy.p38);
    var translation = JAM.new(TranslationComponent, [], JAM.policy.p39);
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    JAM.call(translation.setCharacters, translation, ["  " + JAM.call(translate, null, [JAM.call(dnaSequence$$3.substring, dnaSequence$$3, [2, dnaSequence$$3.length], JAM.policy.p24), geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p40)], JAM.policy.p38);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p38);
  }
  var v743 = readingFrame == "2";
  if (!v743) {
    v743 = readingFrame == "all_three";
  }
  if (v743) {
    translationMut = JAM.new(TranslationComponent, [], JAM.policy.p39);
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    JAM.call(translationMut.setCharacters, translationMut, [" " + JAM.call(translate, null, [JAM.call(mutatedDnaSequence.substring, mutatedDnaSequence, [1, dnaSequence$$3.length], JAM.policy.p24), geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p40)], JAM.policy.p38);
    JAM.call(textLayout.addComponent, textLayout, [translationMut], JAM.policy.p38);
    translation = JAM.new(TranslationComponent, [], JAM.policy.p39);
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    JAM.call(translation.setCharacters, translation, [" " + JAM.call(translate, null, [JAM.call(dnaSequence$$3.substring, dnaSequence$$3, [1, dnaSequence$$3.length], JAM.policy.p24), geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p40)], JAM.policy.p38);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p38);
  }
  var v746 = readingFrame == "1";
  if (!v746) {
    v746 = readingFrame == "all_three";
  }
  if (v746) {
    translationMut = JAM.new(TranslationComponent, [], JAM.policy.p39);
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    JAM.call(translationMut.setCharacters, translationMut, [JAM.call(translate, null, [mutatedDnaSequence, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p40)], JAM.policy.p38);
    JAM.call(textLayout.addComponent, textLayout, [translationMut], JAM.policy.p38);
    translation = JAM.new(TranslationComponent, [], JAM.policy.p39);
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    JAM.call(translation.setCharacters, translation, [JAM.call(translate, null, [dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p40)], JAM.policy.p38);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p38);
  }
  if (readingFrame == "uppercase") {
    translationMut = JAM.new(UppercaseTranslationComponent, [], JAM.policy.p39);
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    JAM.call(translationMut.setCharacters, translationMut, [JAM.call(uppercaseTranslate, null, [mutatedDnaSequence, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p40)], JAM.policy.p38);
    JAM.call(textLayout.addComponent, textLayout, [translationMut], JAM.policy.p38);
    translation = JAM.new(UppercaseTranslationComponent, [], JAM.policy.p39);
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    JAM.call(translation.setCharacters, translation, [JAM.call(uppercaseTranslate, null, [dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p40)], JAM.policy.p38);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p38);
  }
  var dnaMut = JAM.new(DnaComponent, [], JAM.policy.p39);
  dnaMut.spanStart = '<span class="mutated_sequence">';
  dnaMut.spanEnd = "</span>";
  JAM.call(dnaMut.setCharacters, dnaMut, [mutatedDnaSequence], JAM.policy.p38);
  JAM.call(textLayout.addComponent, textLayout, [dnaMut], JAM.policy.p38);
  var dna = JAM.new(DnaComponent, [], JAM.policy.p39);
  dna.spanStart = '<span class="current_sequence">';
  dna.spanEnd = "</span>";
  JAM.call(dna.setCharacters, dna, [dnaSequence$$3], JAM.policy.p38);
  JAM.call(textLayout.addComponent, textLayout, [dna], JAM.policy.p38);
  var sitesInRange = JAM.new(Array, [], JAM.policy.p39);
  var sitesInRangeMut = JAM.new(Array, [], JAM.policy.p39);
  var i$$12 = 0;
  var v387 = i$$12 < dnaSequence$$3.length;
  for (;v387;) {
    sitesInRange = JAM.call(restrictionSiteCollection$$1.getSitesInRange, restrictionSiteCollection$$1, [i$$12, i$$12 + basesPerLine], JAM.policy.p40);
    sitesInRangeMut = JAM.call(mutatedRestrictionSiteCollection$$1.getSitesInRange, mutatedRestrictionSiteCollection$$1, [i$$12, i$$12 + basesPerLine], JAM.policy.p40);
    JAM.call(sitesInRange.reverse, sitesInRange, [], JAM.policy.p39);
    JAM.call(sitesInRangeMut.reverse, sitesInRangeMut, [], JAM.policy.p39);
    var j$$10 = 0;
    var v382 = j$$10 < sitesInRangeMut.length;
    for (;v382;) {
      var v380 = outputWindow.document;
      introspect(JAM.policy.p26) {
        var v1281 = sitesInRangeMut[j$$10]
      }
      var v964 = JAM.call(spaceString.substring, spaceString, [0, v1281.position - i$$12 + 9], JAM.policy.p24) + '<span class="mutated_sequence">';
      introspect(JAM.policy.p26) {
        var v1091 = sitesInRangeMut[j$$10]
      }
      JAM.call(v380.write, v380, [v964 + v1091.label + "</span>\n"], JAM.policy.p38);
      j$$10 = j$$10 + 1;
      v382 = j$$10 < sitesInRangeMut.length;
    }
    j$$10 = 0;
    var v385 = j$$10 < sitesInRange.length;
    for (;v385;) {
      var v383 = outputWindow.document;
      introspect(JAM.policy.p26) {
        var v1282 = sitesInRange[j$$10]
      }
      var v966 = JAM.call(spaceString.substring, spaceString, [0, v1282.position - i$$12 + 9], JAM.policy.p24) + '<span class="current_sequence">';
      introspect(JAM.policy.p26) {
        var v1093 = sitesInRange[j$$10]
      }
      JAM.call(v383.write, v383, [v966 + v1093.label + "</span>\n"], JAM.policy.p38);
      j$$10 = j$$10 + 1;
      v385 = j$$10 < sitesInRange.length;
    }
    JAM.call(textLayout.writeLayout, textLayout, [i$$12, i$$12 + basesPerLine], JAM.policy.p40);
    i$$12 = i$$12 + basesPerLine;
    v387 = i$$12 < dnaSequence$$3.length;
  }
  return true;
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    return " " + p1$$2 + " ";
  }
  if (JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/[^A-Za-z]/g, ""], JAM.policy.p41).length < 3) {
    return "";
  }
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/(...)/g, v2], JAM.policy.p40);
  var i$$13 = 0;
  var v392 = i$$13 < geneticCodeMatchExp$$3.length;
  for (;v392;) {
    introspect(JAM.policy.p26) {
      var v390 = geneticCodeMatchExp$$3[i$$13]
    }
    introspect(JAM.policy.p26) {
      var v391 = geneticCodeMatchResult$$3[i$$13]
    }
    dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [v390, v391], JAM.policy.p40);
    i$$13 = i$$13 + 1;
    v392 = i$$13 < geneticCodeMatchExp$$3.length;
  }
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/\S{3}/g, "X"], JAM.policy.p41);
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/\s\S{1,2}$/, ""], JAM.policy.p41);
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/^\s/, ""], JAM.policy.p41);
  return dnaSequence$$4;
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$9, p1$$3, p2, p3, p4, p5, p6, offset$$11, s$$5) {
    return " " + p1$$3 + p3 + p5 + " " + p2 + p4 + p6;
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/[a-z]/g, " "], JAM.policy.p41);
  if (JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/[^A-Za-z]/g, ""], JAM.policy.p41).length < 3) {
    return "";
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3], JAM.policy.p40);
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/\s\S{1,2}\s/g, ""], JAM.policy.p41);
  var i$$14 = 0;
  var v397 = i$$14 < geneticCodeMatchExp$$4.length;
  for (;v397;) {
    introspect(JAM.policy.p26) {
      var v395 = geneticCodeMatchExp$$4[i$$14]
    }
    introspect(JAM.policy.p26) {
      var v396 = geneticCodeMatchResult$$4[i$$14]
    }
    dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [v395, v396], JAM.policy.p40);
    i$$14 = i$$14 + 1;
    v397 = i$$14 < geneticCodeMatchExp$$4.length;
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/\S{3}/g, "X"], JAM.policy.p41);
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/^\s/, ""], JAM.policy.p41);
  return dnaSequence$$5;
}
function buildMutatedRestrictionSites(restrictionSites$$1) {
  var mutatedRestrictionSites$$1 = JAM.new(Array, [], JAM.policy.p39);
  var i$$15 = 0;
  var v419 = i$$15 < restrictionSites$$1.length;
  for (;v419;) {
    introspect(JAM.policy.p26) {
      var v1095 = restrictionSites$$1[i$$15]
    }
    var v971 = JAM.call(v1095.match, v1095, [/\/.+\//], JAM.policy.p38);
    var v763 = JAM.call(v971.toString, v971, [], JAM.policy.p39);
    var v398 = JAM.call(v763.replace, v763, [/[\/\\]/g, ""], JAM.policy.p41);
    var site = JAM.call(v398.toLowerCase, v398, [], JAM.policy.p39);
    introspect(JAM.policy.p26) {
      var v764 = restrictionSites$$1[i$$15]
    }
    var v399 = JAM.call(v764.match, v764, [/\([^\(]+\)/], JAM.policy.p38);
    var label = JAM.call(v399.toString, v399, [], JAM.policy.p39);
    introspect(JAM.policy.p26) {
      var v1096 = restrictionSites$$1[i$$15]
    }
    var v972 = JAM.call(v1096.match, v1096, [/\)\D*\d+/], JAM.policy.p38);
    var v765 = JAM.call(v972.toString, v972, [], JAM.policy.p39);
    var cutDistance$$1 = JAM.call(parseFloat, null, [JAM.call(v765.replace, v765, [/\)\D*/, ""], JAM.policy.p41)], JAM.policy.p38);
    var singleDegenSites = JAM.new(Array, [], JAM.policy.p39);
    var doubleDegenSites = JAM.new(Array, [], JAM.policy.p39);
    var j$$11 = 0;
    var v405 = j$$11 < site.length;
    for (;v405;) {
      var v767 = JAM.call(site.charAt, site, [j$$11], JAM.policy.p38) != "n";
      if (v767) {
        v767 = JAM.call(site.charAt, site, [j$$11], JAM.policy.p38) != "N";
      }
      if (v767) {
        var pre = JAM.call(site.substring, site, [0, j$$11], JAM.policy.p24);
        var post = JAM.call(site.substring, site, [j$$11 + 1, site.length], JAM.policy.p40);
        var newSite = pre + "N" + post;
        JAM.call(singleDegenSites.push, singleDegenSites, [newSite], JAM.policy.p38);
      }
      j$$11 = j$$11 + 1;
      v405 = j$$11 < site.length;
    }
    if (site.length > 6) {
      j$$11 = 0;
      var v413 = j$$11 < singleDegenSites.length;
      for (;v413;) {
        var k$$3 = 0;
        introspect(JAM.policy.p26) {
          var v975 = singleDegenSites[j$$11]
        }
        var v412 = k$$3 < v975.length;
        for (;v412;) {
          introspect(JAM.policy.p26) {
            var v1097 = singleDegenSites[j$$11]
          }
          var v772 = JAM.call(v1097.charAt, v1097, [k$$3], JAM.policy.p38) != "n";
          if (v772) {
            introspect(JAM.policy.p26) {
              var v1098 = singleDegenSites[j$$11]
            }
            v772 = JAM.call(v1098.charAt, v1098, [k$$3], JAM.policy.p38) != "N";
          }
          if (v772) {
            introspect(JAM.policy.p26) {
              var v406 = singleDegenSites[j$$11]
            }
            pre = JAM.call(v406.substring, v406, [0, k$$3], JAM.policy.p24);
            introspect(JAM.policy.p26) {
              var v407 = singleDegenSites[j$$11]
            }
            var v408 = k$$3 + 1;
            introspect(JAM.policy.p26) {
              var v773 = singleDegenSites[j$$11]
            }
            post = JAM.call(v407.substring, v407, [v408, v773.length], JAM.policy.p40);
            newSite = pre + "N" + post;
            JAM.call(doubleDegenSites.push, doubleDegenSites, [newSite], JAM.policy.p38);
          }
          k$$3 = k$$3 + 1;
          introspect(JAM.policy.p26) {
            var v978 = singleDegenSites[j$$11]
          }
          v412 = k$$3 < v978.length;
        }
        j$$11 = j$$11 + 1;
        v413 = j$$11 < singleDegenSites.length;
      }
    }
    j$$11 = 0;
    var v416 = j$$11 < singleDegenSites.length;
    for (;v416;) {
      introspect(JAM.policy.p26) {
        var v1214 = singleDegenSites[j$$11]
      }
      JAM.call(mutatedRestrictionSites$$1.push, mutatedRestrictionSites$$1, ["/" + v1214 + "/" + " " + label + cutDistance$$1], JAM.policy.p38);
      j$$11 = j$$11 + 1;
      v416 = j$$11 < singleDegenSites.length;
    }
    j$$11 = 0;
    var v418 = j$$11 < doubleDegenSites.length;
    for (;v418;) {
      introspect(JAM.policy.p26) {
        var v1215 = doubleDegenSites[j$$11]
      }
      JAM.call(mutatedRestrictionSites$$1.push, mutatedRestrictionSites$$1, ["/" + v1215 + "/" + " " + label + cutDistance$$1], JAM.policy.p38);
      j$$11 = j$$11 + 1;
      v418 = j$$11 < doubleDegenSites.length;
    }
    i$$15 = i$$15 + 1;
    v419 = i$$15 < restrictionSites$$1.length;
  }
  return mutatedRestrictionSites$$1;
}
function removeNormalMatchesFromMutantSites(mutatedRestrictionSiteCollection$$2, restrictionSiteCollection$$2) {
  var originalMutatedRestrictionSites = JAM.new(Array, [], JAM.policy.p39);
  var i$$16 = 0;
  var v424 = i$$16 < mutatedRestrictionSiteCollection$$2.restrictionSites.length;
  for (;v424;) {
    var v420 = mutatedRestrictionSiteCollection$$2.restrictionSites;
    introspect(JAM.policy.p26) {
      var mutatedSite = v420[i$$16]
    }
    var isOriginal = true;
    var j$$12 = 0;
    var v423 = j$$12 < restrictionSiteCollection$$2.restrictionSites.length;
    for (;v423;) {
      var v421 = restrictionSiteCollection$$2.restrictionSites;
      introspect(JAM.policy.p26) {
        var normalSite = v421[j$$12]
      }
      if (normalSite.position == mutatedSite.position) {
        isOriginal = false;
        break;
      }
      j$$12 = j$$12 + 1;
      v423 = j$$12 < restrictionSiteCollection$$2.restrictionSites.length;
    }
    if (isOriginal) {
      JAM.call(originalMutatedRestrictionSites.push, originalMutatedRestrictionSites, [mutatedSite], JAM.policy.p38);
    }
    i$$16 = i$$16 + 1;
    v424 = i$$16 < mutatedRestrictionSiteCollection$$2.restrictionSites.length;
  }
  mutatedRestrictionSiteCollection$$2.restrictionSites = originalMutatedRestrictionSites;
  return mutatedRestrictionSiteCollection$$2;
}
function removeOverlappingMatchesFromMutantSites(mutatedRestrictionSiteCollection$$3) {
  var originalMutatedRestrictionSites$$1 = JAM.new(Array, [], JAM.policy.p39);
  var i$$17 = 0;
  var v436 = i$$17 < mutatedRestrictionSiteCollection$$3.restrictionSites.length;
  for (;v436;) {
    var v425 = mutatedRestrictionSiteCollection$$3.restrictionSites;
    introspect(JAM.policy.p26) {
      var mutatedSite$$1 = v425[i$$17]
    }
    var isOriginal$$1 = true;
    var j$$13 = 0;
    var v435 = j$$13 < originalMutatedRestrictionSites$$1.length;
    for (;v435;) {
      introspect(JAM.policy.p26) {
        var mutatedSiteJ = originalMutatedRestrictionSites$$1[j$$13]
      }
      var startRangeJ = mutatedSiteJ.position + mutatedSiteJ.cutDistance - mutatedSiteJ.iupacPattern.length - 2;
      var endRangeJ = mutatedSiteJ.position + mutatedSiteJ.cutDistance - 1 + 2;
      var startRange = mutatedSite$$1.position + mutatedSite$$1.cutDistance - mutatedSite$$1.iupacPattern.length;
      var endRange = mutatedSite$$1.position + mutatedSite$$1.cutDistance - 1;
      var v799 = startRange <= startRangeJ;
      if (v799) {
        v799 = endRange >= startRangeJ;
      }
      if (v799) {
        isOriginal$$1 = false;
        break;
      }
      var v800 = startRange <= endRangeJ;
      if (v800) {
        v800 = endRange >= endRangeJ;
      }
      if (v800) {
        isOriginal$$1 = false;
        break;
      }
      var v801 = startRange <= startRangeJ;
      if (v801) {
        v801 = endRange >= endRangeJ;
      }
      if (v801) {
        isOriginal$$1 = false;
        break;
      }
      var v802 = startRange >= startRangeJ;
      if (v802) {
        v802 = endRange <= endRangeJ;
      }
      if (v802) {
        isOriginal$$1 = false;
        break;
      }
      j$$13 = j$$13 + 1;
      v435 = j$$13 < originalMutatedRestrictionSites$$1.length;
    }
    if (isOriginal$$1) {
      JAM.call(originalMutatedRestrictionSites$$1.push, originalMutatedRestrictionSites$$1, [mutatedSite$$1], JAM.policy.p38);
    }
    i$$17 = i$$17 + 1;
    v436 = i$$17 < mutatedRestrictionSiteCollection$$3.restrictionSites.length;
  }
  mutatedRestrictionSiteCollection$$3.restrictionSites = originalMutatedRestrictionSites$$1;
  return mutatedRestrictionSiteCollection$$3;
}
function buildMutatedDna(originalDna, mutatedRestrictionSiteCollection$$4) {
  var mutatedDna$$1 = originalDna;
  var mutatedDnaArray = JAM.new(Array, [], JAM.policy.p39);
  JAM.call(mutatedRestrictionSiteCollection$$4.sortRestrictionSites, mutatedRestrictionSiteCollection$$4, [], JAM.policy.p39);
  var v437 = mutatedRestrictionSiteCollection$$4.restrictionSites;
  JAM.call(v437.reverse, v437, [], JAM.policy.p39);
  var i$$18 = 0;
  var v444 = i$$18 < mutatedRestrictionSiteCollection$$4.restrictionSites.length;
  for (;v444;) {
    var v438 = mutatedRestrictionSiteCollection$$4.restrictionSites;
    introspect(JAM.policy.p26) {
      var mutatedSite$$2 = v438[i$$18]
    }
    var siteStart = mutatedSite$$2.position + mutatedSite$$2.cutDistance - mutatedSite$$2.iupacPattern.length;
    var siteEnd = mutatedSite$$2.position + mutatedSite$$2.cutDistance - 1;
    var siteLength = siteEnd - siteStart;
    JAM.call(mutatedDnaArray.push, mutatedDnaArray, [JAM.call(mutatedDna$$1.substring, mutatedDna$$1, [0, siteStart], JAM.policy.p24) + JAM.call(replaceMutatedDnaSegment, null, [JAM.call(mutatedDna$$1.substring, mutatedDna$$1, [siteStart, siteEnd + 1], JAM.policy.p40), mutatedSite$$2.iupacPattern, mutatedSite$$2.label], JAM.policy.p40)], JAM.policy.p38);
    JAM.call(mutatedDnaArray.push, mutatedDnaArray, [JAM.call(mutatedDna$$1.substring, mutatedDna$$1, [siteEnd + 1, mutatedDna$$1.length], JAM.policy.p40)], JAM.policy.p38);
    mutatedDna$$1 = JAM.call(mutatedDnaArray.join, mutatedDnaArray, [""], JAM.policy.p22);
    mutatedDnaArray = JAM.new(Array, [], JAM.policy.p39);
    i$$18 = i$$18 + 1;
    v444 = i$$18 < mutatedRestrictionSiteCollection$$4.restrictionSites.length;
  }
  var v445 = mutatedRestrictionSiteCollection$$4.restrictionSites;
  JAM.call(v445.reverse, v445, [], JAM.policy.p39);
  return mutatedDna$$1;
}
function replaceMutatedDnaSegment(originalSegment, iupacPattern, label$$1) {
  var newSegment = "";
  var genericSite;
  var v816 = JAM.call(label$$1.match, label$$1, [/[a-z\|]+\s\d+/], JAM.policy.p38);
  var v446 = JAM.call(v816.toString, v816, [], JAM.policy.p39);
  genericSite = JAM.call(v446.replace, v446, [/\||\s\d+/g, ""], JAM.policy.p41);
  var isUpperCase;
  var charToAdd;
  var i$$19 = 0;
  var v454 = i$$19 < originalSegment.length;
  for (;v454;) {
    var v1102 = JAM.call(originalSegment.charAt, originalSegment, [i$$19], JAM.policy.p38);
    var v997 = JAM.call(v1102.toString, v1102, [], JAM.policy.p39);
    if (JAM.call(v997.search, v997, [/[A-Z]/], JAM.policy.p38) == -1) {
      isUpperCase = false;
    } else {
      isUpperCase = true;
    }
    if (JAM.call(originalSegment.charAt, originalSegment, [i$$19], JAM.policy.p38) == JAM.call(genericSite.charAt, genericSite, [i$$19], JAM.policy.p38)) {
      charToAdd = JAM.call(originalSegment.charAt, originalSegment, [i$$19], JAM.policy.p38);
    } else {
      if (JAM.call(iupacPattern.charAt, iupacPattern, [i$$19], JAM.policy.p38) == "N") {
        charToAdd = JAM.call(genericSite.charAt, genericSite, [i$$19], JAM.policy.p38);
      } else {
        charToAdd = JAM.call(originalSegment.charAt, originalSegment, [i$$19], JAM.policy.p38);
      }
    }
    if (isUpperCase) {
      var v450 = newSegment;
      var v822 = JAM.call(charToAdd.toString, charToAdd, [], JAM.policy.p39);
      newSegment = v450 + JAM.call(v822.toUpperCase, v822, [], JAM.policy.p39);
    } else {
      var v452 = newSegment;
      var v823 = JAM.call(charToAdd.toString, charToAdd, [], JAM.policy.p39);
      newSegment = v452 + JAM.call(v823.toLowerCase, v823, [], JAM.policy.p39);
    }
    i$$19 = i$$19 + 1;
    v454 = i$$19 < originalSegment.length;
  }
  return newSegment;
}
function findRestrictionSites(sequence$$18, arrayOfItems$$2, dnaConformation$$1) {
  var lookAhead$$1 = 50;
  var lowerLimit$$1 = 0;
  var upperLimit$$1 = sequence$$18.length;
  var shiftValue$$1 = 0;
  var cutDistance$$2;
  var matchExp$$2;
  var matchPosition$$1;
  var matchArray$$2;
  var label$$2;
  var timesFound$$1 = 0;
  var tempArray = JAM.new(Array, [], JAM.policy.p39);
  var restrictionSiteCollection$$3 = JAM.new(RestrictionSiteCollection, [], JAM.policy.p39);
  if (dnaConformation$$1 == "circular") {
    shiftValue$$1 = JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p24).length;
    sequence$$18 = JAM.call(sequence$$18.substring, sequence$$18, [sequence$$18.length - lookAhead$$1, sequence$$18.length], JAM.policy.p40) + sequence$$18 + JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p24);
    lowerLimit$$1 = 0 + shiftValue$$1;
    upperLimit$$1 = upperLimit$$1 + shiftValue$$1;
  }
  var i$$20 = 0;
  var v470 = i$$20 < arrayOfItems$$2.length;
  for (;v470;) {
    introspect(JAM.policy.p26) {
      var v1000 = arrayOfItems$$2[i$$20]
    }
    var v827 = JAM.call(v1000.match, v1000, [/\/.+\//], JAM.policy.p38);
    var v459 = JAM.call(v827.toString, v827, [], JAM.policy.p39);
    var iupacPattern$$1 = JAM.call(v459.replace, v459, [/[\/\\]/g, ""], JAM.policy.p41);
    matchExp$$2 = "/" + JAM.call(convertDegenerates, null, [iupacPattern$$1], JAM.policy.p38) + "/" + "gi";
    matchPosition$$1 = 0;
    if (JAM.isEval(eval)) {
      matchExp$$2 = eval("introspect(JAM.policy.pFull) { " + matchExp$$2 + " }");
    } else {
      matchExp$$2 = JAM.call(eval, null, [matchExp$$2]);
    }
    introspect(JAM.policy.p26) {
      var v1104 = arrayOfItems$$2[i$$20]
    }
    var v1002 = JAM.call(v1104.match, v1104, [/\)\D*\d+/], JAM.policy.p38);
    var v829 = JAM.call(v1002.toString, v1002, [], JAM.policy.p39);
    cutDistance$$2 = JAM.call(parseFloat, null, [JAM.call(v829.replace, v829, [/\)\D*/, ""], JAM.policy.p41)], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      var v1003 = arrayOfItems$$2[i$$20]
    }
    var v830 = JAM.call(v1003.match, v1003, [/\([^\(]+\)/], JAM.policy.p38);
    var v462 = JAM.call(v830.toString, v830, [], JAM.policy.p39);
    label$$2 = JAM.call(v462.replace, v462, [/\(|\)/g, ""], JAM.policy.p41);
    var v466 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [sequence$$18], JAM.policy.p38);
    for (;v466;) {
      matchPosition$$1 = matchExp$$2.lastIndex;
      matchPosition$$1 = matchPosition$$1 - cutDistance$$2;
      var v831 = matchPosition$$1 >= lowerLimit$$1;
      if (v831) {
        v831 = matchPosition$$1 < upperLimit$$1;
      }
      if (v831) {
        timesFound$$1 = timesFound$$1 + 1;
        JAM.call(tempArray.push, tempArray, [JAM.new(RestrictionSite, [label$$2 + " " + (matchPosition$$1 - shiftValue$$1 + 1), matchPosition$$1 - shiftValue$$1, cutDistance$$2, iupacPattern$$1], JAM.policy.p40)], JAM.policy.p38);
      }
      matchExp$$2.lastIndex = matchExp$$2.lastIndex - RegExp.lastMatch.length + 1;
      v466 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [sequence$$18], JAM.policy.p38);
    }
    var j$$14 = 0;
    var v469 = j$$14 < tempArray.length;
    for (;v469;) {
      introspect(JAM.policy.p26) {
        var v467 = tempArray[j$$14]
      }
      v467.numberOfCuts = timesFound$$1;
      introspect(JAM.policy.p26) {
        var v468 = tempArray[j$$14]
      }
      JAM.call(restrictionSiteCollection$$3.addRestrictionSite, restrictionSiteCollection$$3, [v468], JAM.policy.p38);
      j$$14 = j$$14 + 1;
      v469 = j$$14 < tempArray.length;
    }
    timesFound$$1 = 0;
    tempArray = JAM.new(Array, [], JAM.policy.p39);
    i$$20 = i$$20 + 1;
    v470 = i$$20 < arrayOfItems$$2.length;
  }
  return restrictionSiteCollection$$3;
}
function writeLayout(start$$4, stop) {
  var i$$21 = 0;
  var v472 = i$$21 < this.components.length;
  for (;v472;) {
    var v840 = this.components;
    introspect(JAM.policy.p26) {
      var v471 = v840[i$$21]
    }
    JAM.call(v471.writeLayoutComponent, v471, [start$$4, stop], JAM.policy.p40);
    i$$21 = i$$21 + 1;
    v472 = i$$21 < this.components.length;
  }
  return;
}
function addComponent(component) {
  var v473 = this.components;
  JAM.call(v473.push, v473, [component], JAM.policy.p38);
  return;
}
function TextLayout() {
  var v1523 = JAM.new(Array, [], JAM.policy.p39);
  this.components = v1523;
  return;
}
function writeLayoutComponent(start$$5, stop$$1) {
  return;
}
function setCharacters(text$$14) {
  if (JAM.call(text$$14.search, text$$14, [/./], JAM.policy.p38) != -1) {
    var v1524 = JAM.call(text$$14.match, text$$14, [/./g], JAM.policy.p38);
    this.characters = v1524;
  }
  return;
}
function isRoom(start$$6, stop$$2) {
  var v475 = this.characters;
  var rangeToCheck = JAM.call(v475.slice, v475, [start$$6, stop$$2], JAM.policy.p40);
  rangeToCheck = JAM.call(rangeToCheck.join, rangeToCheck, [""], JAM.policy.p22);
  if (JAM.call(rangeToCheck.search, rangeToCheck, [/\w/], JAM.policy.p38) == -1) {
    return true;
  } else {
    return false;
  }
  return;
}
function LayoutComponent() {
  var v1525 = JAM.new(Array, [], JAM.policy.p39);
  this.characters = v1525;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return;
}
function TranslationComponent() {
  var v1526 = JAM.new(Array, [], JAM.policy.p39);
  this.characters = v1526;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return;
}
function UppercaseTranslationComponent() {
  var v1527 = JAM.new(Array, [], JAM.policy.p39);
  this.characters = v1527;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return;
}
function DnaComponent() {
  var v1528 = JAM.new(Array, [], JAM.policy.p39);
  this.characters = v1528;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return;
}
function RestrictionSite(label$$3, position, cutDistance$$3, iupacPattern$$2) {
  this.label = label$$3;
  this.position = position;
  this.cutDistance = cutDistance$$3;
  this.iupacPattern = iupacPattern$$2;
  return;
}
function addRestrictionSite(restrictionSite) {
  var v477 = this.restrictionSites;
  JAM.call(v477.push, v477, [restrictionSite], JAM.policy.p38);
  return;
}
function sortRestrictionSites() {
  var v478 = this.restrictionSites;
  JAM.call(v478.sort, v478, [restrictionSiteSorter], JAM.policy.p38);
  return;
}
function getSitesInRange(start$$10, stop$$6) {
  var arrayToReturn = JAM.new(Array, [], JAM.policy.p39);
  var i$$22 = this.restrictionSites.length - 1;
  var v482 = i$$22 >= 0;
  for (;v482;) {
    var v1169 = this.restrictionSites;
    introspect(JAM.policy.p26) {
      var v1106 = v1169[i$$22]
    }
    var v845 = v1106.position >= start$$10;
    if (v845) {
      var v1170 = this.restrictionSites;
      introspect(JAM.policy.p26) {
        var v1107 = v1170[i$$22]
      }
      v845 = v1107.position < stop$$6;
    }
    if (v845) {
      var v846 = this.restrictionSites;
      JAM.call(arrayToReturn.push, arrayToReturn, [JAM.call(v846.pop, v846, [], JAM.policy.p39)], JAM.policy.p38);
    } else {
      break;
    }
    i$$22 = i$$22 - 1;
    v482 = i$$22 >= 0;
  }
  return arrayToReturn;
}
function RestrictionSiteCollection() {
  var v1529 = JAM.new(Array, [], JAM.policy.p39);
  this.restrictionSites = v1529;
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
JAM.new(TextLayout, [], JAM.policy.p39);
TextLayout.prototype.writeLayout = writeLayout;
TextLayout.prototype.addComponent = addComponent;
JAM.new(LayoutComponent, [], JAM.policy.p39);
LayoutComponent.prototype.writeLayoutComponent = writeLayoutComponent;
LayoutComponent.prototype.setCharacters = setCharacters;
LayoutComponent.prototype.isRoom = isRoom;
var v490 = TranslationComponent;
var v1530 = JAM.new(LayoutComponent, [], JAM.policy.p39);
v490.prototype = v1530;
TranslationComponent.prototype.writeLayoutComponent = v4;
var v492 = UppercaseTranslationComponent;
var v1531 = JAM.new(LayoutComponent, [], JAM.policy.p39);
v492.prototype = v1531;
UppercaseTranslationComponent.prototype.writeLayoutComponent = v5;
var v494 = DnaComponent;
var v1532 = JAM.new(LayoutComponent, [], JAM.policy.p39);
v494.prototype = v1532;
DnaComponent.prototype.writeLayoutComponent = v6;
JAM.new(RestrictionSiteCollection, [], JAM.policy.p39);
RestrictionSiteCollection.prototype.addRestrictionSite = addRestrictionSite;
RestrictionSiteCollection.prototype.sortRestrictionSites = sortRestrictionSites;
RestrictionSiteCollection.prototype.getSitesInRange = getSitesInRange;
JAM.set(document, "onload", v7);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p22), "onclick", v8);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p22), "onclick", v9)

